This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one-sentence description of the transcript.
  - The one-sentence description shouldn't exceed 180 characters (roughly 30 words).

Format the output like so:

    ## Episode Description

    One sentence description encapsulating the content within roughly 180 characters.

- Write a one-paragraph summary.
  - The one-paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

Format the output like so:

    ## Episode Summary

    A concise summary of the transcript, typically 600-1200 characters or about 100-200 words, highlighting main topics, significant points, methods, conclusions, and implications.

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include only starting timestamps in exact HH:MM:SS format, always using two digits each for hours, minutes, and seconds.
  - Chapters should each cover approximately 3-6 minutes of content.
  - Write a two-paragraph description (75+ words) for each chapter.
  - Ensure chapters cover the entire content, clearly noting the last timestamp (HH:MM:SS), indicating total duration.
  - Descriptions should flow naturally from the content, avoiding formulaic language.

Format the output like so:

    ## Chapters

    ### 00:00:00 - Introduction and Overview

    A comprehensive introduction providing readers with the main themes and concepts explored throughout the chapter. The content highlights significant points discussed in detail and explores their broader implications and practical relevance. Connections are made between concepts, emphasizing interrelationships and potential impacts on various fields or current challenges. The chapter sets a clear foundation for understanding the subsequent discussions.


Video Title: Signals in Angular w/ Pawel and Alex
Video URL: https://www.youtube.com/watch?v=HstDoVQeP9g
Author: Ryan Carniato
Duration: 5:23:37


Transcript:
[00:00:01] [SPEAKER_01] Alright, hello everyone. Welcome to my stream today. How's everybody doing?
[00:00:07] [SPEAKER_01] Sorry for a bit of late start. I was like still making my lunch.
[00:00:13] [SPEAKER_01] Sometimes do these things go late?
[00:00:24] [SPEAKER_01] We're gonna kill a little time here waiting for people to join on.
[00:00:28] [SPEAKER_01] Wow, actually people are already here. What's going on?
[00:00:31] [SPEAKER_01] I guess people are excited for this one. I'm pretty excited for this one.
[00:00:38] [SPEAKER_01] We should probably also tell the Twitterverse that we're live now, shouldn't we?
[00:00:44] [SPEAKER_01] let me share my screen for a second entire screen this one okay cool which one is this one angular
[00:01:01] [SPEAKER_01] signals right you guys are here to to learn about angular signals there's been a lot of news
[00:01:06] [SPEAKER_01] this week it took me a minute to actually find this one i am all right and if you prefer like
[00:01:19] [SPEAKER_01] i always link youtube but if you prefer um we're also live on twitch uh twitch
[00:01:27] [SPEAKER_01] TV slash Ryan solid.
[00:01:31] [SPEAKER_01] I hope I got that right.
[00:01:37] [SPEAKER_01] Yeah, yeah.
[00:01:38] [SPEAKER_01] Let's get some people in here.
[00:01:40] [SPEAKER_01] Especially if you come through Twitch,
[00:01:41] [SPEAKER_01] you're going to get these pre-roll ads
[00:01:42] [SPEAKER_01] that are going to run for, you know, like 30 to 45 seconds.
[00:01:45] [SPEAKER_01] I've got to make sure that everyone gets past that
[00:01:47] [SPEAKER_01] so they don't miss any of the killer content
[00:01:49] [SPEAKER_01] that we have going on today.
[00:01:51] [SPEAKER_01] So, yeah, no.
[00:01:52] [SPEAKER_01] Signal, signal, signals, right?
[00:01:53] [SPEAKER_01] That's been all week.
[00:01:56] [SPEAKER_01] I love all the stoplights in the chat.
[00:01:59] [SPEAKER_01] Thank you all for that.
[00:02:01] [SPEAKER_01] Um...
[00:02:02] [SPEAKER_01] It's it's been it's been a fun little time a bit of time. I have to admit
[00:02:08] [SPEAKER_01] I think I think a lot of people don't even realize how long this whole thing's been going on for like this is not a new
[00:02:15] [SPEAKER_01] Thing this has been a very old thing and it's a story that starts
[00:02:21] [SPEAKER_01] Long before me, but it's but even my own part of this journey has been quite a while now
[00:02:28] [SPEAKER_01] I feel yeah, I mean
[00:02:32] [SPEAKER_01] Yeah, it's kind of incredible to see this kind of swing around.
[00:02:37] [SPEAKER_01] I've been seeing like funny memes all over Twitter.
[00:02:42] [SPEAKER_01] Like, where's it?
[00:02:44] [SPEAKER_01] Primogen.
[00:02:45] [SPEAKER_01] Like, you know, I got a saying, we'll talk about this later on this week in JavaScript.
[00:02:56] [SPEAKER_01] Yeah.
[00:02:57] [SPEAKER_01] this isn't and shouldn't be seen as like a signals versus react thing although I
[00:03:02] [SPEAKER_01] know how the narrative has gotten here when you start seeing an idea get very
[00:03:06] [SPEAKER_01] pervasive everywhere but yeah the funny the biggest thing I'm noticing when
[00:03:13] [SPEAKER_01] when you follow this and people like what the hell are signals like this is sort of
[00:03:18] [SPEAKER_01] where we're sitting at here.
[00:03:21] [SPEAKER_01] And I've been covering it on stream.
[00:03:22] [SPEAKER_01] I've been, the last couple of streams
[00:03:24] [SPEAKER_01] have actually been doing deep dives
[00:03:26] [SPEAKER_01] into different implementations,
[00:03:27] [SPEAKER_01] which is why it's very suitable to have
[00:03:29] [SPEAKER_01] the folks from Angular joining me today
[00:03:31] [SPEAKER_01] to talk about what they've been working on.
[00:03:34] [SPEAKER_01] But I think in general,
[00:03:37] [SPEAKER_01] there is still a lot of confusion,
[00:03:38] [SPEAKER_01] a lot of hype, and we need to cut through that, right?
[00:03:42] [SPEAKER_01] We need to see what's real,
[00:03:45] [SPEAKER_01] understand what the implications are.
[00:03:49] [SPEAKER_01] So, yeah. Yeah, I mean, it's interesting too because Angular itself has a very long history.
[00:03:58] [SPEAKER_01] You know, it's been, it's one of the oldest frameworks that is still around.
[00:04:02] [SPEAKER_01] I mean, you could argue that the AngularJS and Angular are different things.
[00:04:04] [SPEAKER_01] But like, if you follow its lineage, it's been, it has a long history that goes back to around the same time that JavaScript, like, signals enter JavaScript.
[00:04:17] [SPEAKER_01] So these are two things.
[00:04:19] [SPEAKER_01] I think it's going to be interesting talking to guys today to kind of look at the fact that we've had like two
[00:04:24] [SPEAKER_01] Separate paths through almost the same period of time and then kind of end up here and what that means and what that looks like
[00:04:32] [SPEAKER_01] Yeah, sorry. How's chat doing people alive? Yeah, yeah, we got a few people watching us now
[00:04:38] [SPEAKER_01] What do we got? Yeah, I like playing signals in solid looking forward to them in angular and how they fit in. Yeah, no, definitely
[00:04:51] [SPEAKER_01] Yeah, no, hello. Yeah, everyone's saying hi from the chat.
[00:04:54] [SPEAKER_01] I hope it's an okay hour for you.
[00:04:55] [SPEAKER_01] I know that there's no good time to stream, right?
[00:04:59] [SPEAKER_01] Like, I try and pick a time.
[00:05:03] [SPEAKER_01] I'm sure it's like 10 p.m. in Europe or something.
[00:05:07] [SPEAKER_01] And I have no clue what time it is for people in the South Pacific.
[00:05:13] [SPEAKER_01] But in the U.S., where I am on the West Coast, it's 12,
[00:05:17] [SPEAKER_01] and it's 3 p.m. obviously on the East Coast.
[00:05:21] [SPEAKER_01] So, yeah.
[00:05:26] [SPEAKER_01] Yeah, this is interesting.
[00:05:29] [SPEAKER_01] Oh, there we go.
[00:05:31] [SPEAKER_01] There's dedication.
[00:05:36] [SPEAKER_01] Yeah.
[00:05:38] [SPEAKER_01] All right.
[00:05:39] [SPEAKER_01] All right.
[00:05:39] [SPEAKER_01] How are we doing?
[00:05:40] [SPEAKER_01] Okay.
[00:05:40] [SPEAKER_01] Have I wound time long enough?
[00:05:42] [SPEAKER_01] Let's see.
[00:05:42] [SPEAKER_01] How's my orange juice doing?
[00:05:43] [SPEAKER_01] I already, like, drank half of it.
[00:05:45] [SPEAKER_01] This isn't a good sign.
[00:05:46] [SPEAKER_01] Okay.
[00:05:47] [SPEAKER_01] Usually I have some time to kind of let it wind down.
[00:05:51] [SPEAKER_01] Okay, we're doing pretty good.
[00:05:53] [SPEAKER_01] See, every time I just say garbage and sit here and look at chat,
[00:05:56] [SPEAKER_01] we go up like 10 viewers every 30 seconds.
[00:05:59] [SPEAKER_01] So we're almost getting to an acceptable amount of viewership now.
[00:06:03] [SPEAKER_01] So, you know, the guys from Angular are duly impressed, right?
[00:06:08] [SPEAKER_01] We got to make sure that we do a good job here and
[00:06:12] [SPEAKER_01] Alright, let me see. I'm just opening Twitch up on another window right now so I can actually see Twitch chat because I stream on StreamYard and Twitch has this terrible tendency to not show me any, or so StreamYard doesn't show me any of the Twitch specific stuff.
[00:06:28] [SPEAKER_01] So I always miss subs, I always miss first time speakers, all the really cool stuff.
[00:06:32] [SPEAKER_01] Like first time chatter, 9pm in Germany.
[00:06:36] [SPEAKER_01] You know, there you go.
[00:06:37] [SPEAKER_01] So.
[00:06:38] [SPEAKER_01] Yeah, I'm glad to have everyone here.
[00:06:41] [SPEAKER_01] All right, all right.
[00:06:42] [SPEAKER_01] Yeah, here we go, 160 viewers now.
[00:06:45] [SPEAKER_01] We're starting to get to a good point.
[00:06:46] [SPEAKER_01] I think we're probably ready to start.
[00:06:48] [SPEAKER_01] What do you think?
[00:06:49] [SPEAKER_01] Should we start talking about signals and angular?
[00:06:53] [SPEAKER_01] Is it a good time?
[00:06:55] [SPEAKER_01] Yeah?
[00:06:56] [SPEAKER_01] Yeah, I think it's a good time.
[00:06:57] [SPEAKER_01] Okay.
[00:06:57] [SPEAKER_01] In that case, I'm going to switch over to my own view here.
[00:07:03] [SPEAKER_01] And I'm gonna, I'm gonna,
[00:07:06] [SPEAKER_01] I'm going to invite two guests onto the show today, which if you've read the stream description,
[00:07:13] [SPEAKER_01] you actually know exactly what I'm talking about.
[00:07:16] [SPEAKER_01] Both Pavel Kozlowski, if I got his name right, and Alex Frickenbach.
[00:07:23] [SPEAKER_01] Maybe I got that right.
[00:07:24] [SPEAKER_01] We'll see.
[00:07:25] [SPEAKER_01] But let's welcome them both to the stream.
[00:07:28] [SPEAKER_00] Hey, Ryan.
[00:07:29] [SPEAKER_00] How are you guys doing?
[00:07:33] [SPEAKER_00] Fantastic.
[00:07:34] [SPEAKER_00] Thanks for having us here.
[00:07:36] [SPEAKER_01] Yeah.
[00:07:36] [SPEAKER_01] The funny thing is,
[00:07:38] [SPEAKER_01] For those who don't know, I've had several conversations with both of these guys.
[00:07:42] [SPEAKER_01] And we always start with like, yeah, we should talk about something.
[00:07:44] [SPEAKER_01] And then like a couple hours later, we're like, yeah, we were going to talk about something, weren't we?
[00:07:49] [SPEAKER_01] Hopefully we can stay somewhat on course today.
[00:07:52] [SPEAKER_01] But...
[00:07:53] [SPEAKER_01] Not sure.
[00:07:54] [SPEAKER_01] Not sure.
[00:07:55] [SPEAKER_00] Like every time we talk, like we start one thread of thoughts and then we kind of branch
[00:07:59] [SPEAKER_00] off to many of them.
[00:08:00] [SPEAKER_00] So we'll see.
[00:08:01] [SPEAKER_01] Right, right.
[00:08:02] [SPEAKER_01] So but where I would like to start for a moment is just kind of tie in a bit with my story
[00:08:09] [SPEAKER_01] a bit just so that because I met Alex actually a little bit later and I actually want to
[00:08:13] [SPEAKER_01] just talk a moment and talk about.
[00:08:18] [SPEAKER_01] talk about Powell. And I want, I'll give, we'll give Alex a minute to introduce himself after, but just can you, can you tell us a bit about yourself? Tell us about how you're involved with the Angular and Angular core team and just kind of, we'll bring that up until, you know, we started talking.
[00:08:34] [SPEAKER_00] Right. So, so that's kind of many funny histories and coincidences.
[00:08:38] [SPEAKER_00] So basically I was like with the Angular.js project from, I don't want to say from the very beginning, but roughly from the beginning.
[00:08:46] [SPEAKER_00] So somewhere around 2009 or something like that, I just needed a framework for some like side project that I didn't care much about.
[00:08:55] [SPEAKER_00] And like at the time, well, like I bumped into this thing called Angular.js and it was working.
[00:09:01] [SPEAKER_00] I wasn't UI developer at the time. So it was just like, you know, it was doing the job.
[00:09:05] [SPEAKER_00] But for some reasons it clicked.
[00:09:08] [SPEAKER_00] Like, I mean, it was just working for me.
[00:09:09] [SPEAKER_00] So I started to spend more and more time like digging into it and
[00:09:14] [SPEAKER_00] It also kind of resonated with my Java developer soul at the time.
[00:09:19] [SPEAKER_00] It has dependency injection, right?
[00:09:20] [SPEAKER_00] Like this is just the whole thing that the Spring framework had and whatnot.
[00:09:25] [SPEAKER_00] So things clicked for me and started to spend more time on the forums.
[00:09:30] [SPEAKER_00] And one day, like someone from the core team contacted me like,
[00:09:33] [SPEAKER_00] hey, do you want to write a book about this framework?
[00:09:35] [SPEAKER_00] It was like, whoa, okay.
[00:09:37] [SPEAKER_00] I did.
[00:09:38] [SPEAKER_00] And that kind of brought me closer to the Angular team.
[00:09:41] [SPEAKER_01] Interesting. I didn't realize that. So were you already like a contributor like making?
[00:09:47] [SPEAKER_00] No, I was so like at the beginning, I was like my own contributions were just like, you know, commenting on the forums and just and so on.
[00:09:54] [SPEAKER_00] But like after writing a book, I started to contribute as the open source contributor.
[00:09:58] [SPEAKER_00] And then there was another coincidence where.
[00:10:00] [SPEAKER_00] my employer started to be big on Angular and I'm glad yes at the time.
[00:10:06] [SPEAKER_00] And they said like, oh, hey, you know the team and we like open source,
[00:10:10] [SPEAKER_00] so like go and contribute to the framework on the company time, which was great.
[00:10:15] [SPEAKER_00] So because it allows me to work more with the team.
[00:10:19] [SPEAKER_00] And the story kind of progressed like this.
[00:10:22] [SPEAKER_00] I was spending more and more time and roughly one year ago, I joined Google as the full-time employer.
[00:10:28] [SPEAKER_00] So the COVID happened, remote work happened, and that's kind of it was possible.
[00:10:33] [SPEAKER_01] That's awesome.
[00:10:34] [SPEAKER_01] So following what you said, you've been around Angular for like a decade.
[00:10:39] [SPEAKER_00] A decade, yeah.
[00:10:40] [SPEAKER_00] Like I've seen it all.
[00:10:42] [SPEAKER_01] And big, big, big.
[00:10:44] [SPEAKER_01] fan, big champion of Angular, and then you actually ended up now the past year working on the core team at Google.
[00:10:50] [SPEAKER_01] That's amazing.
[00:10:52] [SPEAKER_00] And it's funny that we are saying like it's a decade.
[00:10:54] [SPEAKER_00] Like for me, it feels like it's, you know, no time, like there's like always so fascinating things happening that it's hard to see the time passing.
[00:11:01] [SPEAKER_01] Yeah, no, for sure.
[00:11:03] [SPEAKER_01] Yeah, we'll come back around.
[00:11:04] [SPEAKER_01] I actually want to introduce Alex here and he can tell us a little bit about himself and how he got involved in the Angular project.
[00:11:09] [SPEAKER_02] Sure. I just want to point out, though, I think literally the day remote work became possible for us.
[00:11:15] [SPEAKER_02] We're like, we're hiring Pavel. Let's do it.
[00:11:18] [SPEAKER_02] Yeah. So, hi, everyone. My name is Alex Rookabaugh. I'm the technical lead at Google for the Angular framework.
[00:11:25] [SPEAKER_02] It's the core framework. So the core libraries and router and forms and everything.
[00:11:29] [SPEAKER_02] We also have kind of CLI and components.
[00:11:33] [SPEAKER_02] So Angular split into this triangle.
[00:11:36] [SPEAKER_02] But so I've been at Google since 2010,
[00:11:40] [SPEAKER_02] and I've been working on Angular since 2015.
[00:11:42] [SPEAKER_02] So it's been eight years now for me.
[00:11:45] [SPEAKER_02] And I kind of ended up on the team on accident, I would say.
[00:11:48] [SPEAKER_02] So I was working on Google's CRM system, which used to be a big Java GWT application.
[00:11:55] [SPEAKER_02] So like Pavel, I also have a Java developer soul.
[00:12:00] [SPEAKER_02] And we were looking at rewriting it because the future of GWT was pretty uncertain.
[00:12:06] [SPEAKER_02] It wasn't exactly a great web authoring experience.
[00:12:10] [SPEAKER_02] And AngularJS was kind of the new thing at the time.
[00:12:13] [SPEAKER_02] So we investigated doing that.
[00:12:14] [SPEAKER_02] And we started talking more with the Angular team.
[00:12:18] [SPEAKER_02] And at that point, they were just starting to think about the 2.0,
[00:12:22] [SPEAKER_02] let's rewrite this thing, do something different.
[00:12:26] [SPEAKER_02] And we started talking with them and ended up building the first Angular Dart application.
[00:12:32] [SPEAKER_02] uh dart no people know this but back in the day in the very early days of 2.0 um we actually took
[00:12:39] [SPEAKER_02] the code base and transpiled it from typescript to javascript and we transpiled it also from
[00:12:44] [SPEAKER_02] typescript to dart um so we had one framework that you could kind of author in two languages
[00:12:50] [SPEAKER_02] it didn't work very well um but that was that was kind of the heritage
[00:12:54] [SPEAKER_02] So I was working on this CRM application, building Angular Dart code, working in the RPC layer.
[00:13:01] [SPEAKER_02] And kind of coincidentally, we were under the same organizational umbrella as the Angular
[00:13:06] [SPEAKER_02] team.
[00:13:07] [SPEAKER_02] Both of us were projects and ads at the time.
[00:13:10] [SPEAKER_02] Right.
[00:13:10] [SPEAKER_02] And so the director of Angular, who was also kind of in my organizational hierarchy, came
[00:13:16] [SPEAKER_02] to me one day and asked like, hey, do you want to solve the same problems but on a much
[00:13:20] [SPEAKER_02] bigger scale?
[00:13:20] [SPEAKER_02] and invited me basically to work on Angular on some similar things that I was already doing.
[00:13:27] [SPEAKER_02] And I accepted not really knowing what I was getting myself into, but it's been an awesome adventure.
[00:13:34] [SPEAKER_01] Yeah, no, no, it's interesting.
[00:13:36] [SPEAKER_01] Making that shift sometimes is interesting.
[00:13:38] [SPEAKER_01] Like, I guess you were already working on fairly like...
[00:13:42] [SPEAKER_01] infrastructurally kind of parts of it but like sometimes people move try and move from like a product team to uh like a platform team and be like very surprised at like how different it feels yeah it was I was actually part of I think we were officially called the infrastructure team so we were doing doing all the RPC layer stuff and yeah
[00:14:03] [SPEAKER_01] Yeah, yeah, yeah. No, that makes sense. Okay, so that kind of gives me the kind of gist of where you guys are, where you guys coming into this.
[00:14:10] [SPEAKER_01] Angular, as I mentioned before, has a kind of a very long history or kind of touched on a bit.
[00:14:15] [SPEAKER_01] There's AngularJS, which came out back in 2009, roughly around the time. It's funny, if you look back, you'll see that within the same three to six month period, I don't know the exact window.
[00:14:29] [SPEAKER_01] Angular, Backbone, and Knockout.js all came out.
[00:14:34] [SPEAKER_01] It was like there was this time where everyone's like,
[00:14:36] [SPEAKER_01] okay, we can do declarative views.
[00:14:38] [SPEAKER_01] We can make real frameworks for the front end.
[00:14:44] [SPEAKER_01] And as I said, that puts Angular right at the very forefront of one of those,
[00:14:49] [SPEAKER_01] I guess, pillars of how people viewed change detection, change management in frameworks.
[00:14:55] [SPEAKER_01] In fact, in a sense...
[00:14:58] [SPEAKER_01] those three pillars still kind of exist today because like in a sense angular was like the whole I
[00:15:05] [SPEAKER_01] mean it's kind of exemplified through zone.js I don't know what to call it but like like anything
[00:15:10] [SPEAKER_01] could change dirty check it and knockout is obviously like reactivity which is like views and solids uh
[00:15:20] [SPEAKER_01] kind of lineage. And in a sense,
[00:15:22] [SPEAKER_01] Backbone was React's lineage.
[00:15:24] [SPEAKER_01] If you actually watched the Backbone documentary
[00:15:26] [SPEAKER_01] or the React documentary recently,
[00:15:28] [SPEAKER_01] they mentioned Backbone a whole bunch
[00:15:30] [SPEAKER_01] and what their comparison were. And in a sense,
[00:15:32] [SPEAKER_01] Backbone had this sort of
[00:15:34] [SPEAKER_01] re-render everything thing as well.
[00:15:36] [SPEAKER_01] It just was with inner HTML,
[00:15:38] [SPEAKER_01] which was not particularly the best.
[00:15:41] [SPEAKER_01] But you can kind of see that there is like that,
[00:15:47] [SPEAKER_01] right from that first period,
[00:15:49] [SPEAKER_01] we started seeing a lot of those ideas.
[00:15:51] [SPEAKER_01] Obviously over time, each of these approaches evolved considerably.
[00:15:54] [SPEAKER_01] Like obviously React came out, Angular 2 came out.
[00:15:58] [SPEAKER_01] And obviously, after Knockout,
[00:16:01] [SPEAKER_01] we had stuff like View all the way to where we are now with Solid.
[00:16:03] [SPEAKER_01] and not to mention Svelte and stuff as well kind of in the mix.
[00:16:08] [SPEAKER_01] And it's kind of interesting right now because there's all this talk about signals.
[00:16:16] [SPEAKER_01] And we're probably going to, people are probably going to go like, what is signals?
[00:16:18] [SPEAKER_01] And we should explain that in a minute.
[00:16:20] [SPEAKER_01] But I'm going to do this little reverse order.
[00:16:22] [SPEAKER_01] How did signals even get on the radar?
[00:16:27] [SPEAKER_01] Like, because my understanding is,
[00:16:29] [SPEAKER_01] this could represent, and we'll talk about that more later,
[00:16:32] [SPEAKER_01] a bigger change in the way people approach stuff in Angular.
[00:16:35] [SPEAKER_01] And how, like, where, like, like,
[00:16:38] [SPEAKER_01] this is a, this is a change, right?
[00:16:40] [SPEAKER_01] Like, this is a little bit different.
[00:16:41] [SPEAKER_00] Right, and this is so ironic in a way, right?
[00:16:43] [SPEAKER_00] Like, because I remember those times when AngularGS was born,
[00:16:47] [SPEAKER_00] and Knockout, I remember those times,
[00:16:49] [SPEAKER_00] and there was this very stark difference, right?
[00:16:52] [SPEAKER_00] Like, the thing that was advertised by Angular always,
[00:16:55] [SPEAKER_00] and that partly what attracted me to the framework is that,
[00:16:58] [SPEAKER_00] this idea that your model can leave everywhere right so so like first maybe just to rewind like we
[00:17:05] [SPEAKER_00] really this is this big movement at the time where we are seeing like it's the model driven
[00:17:09] [SPEAKER_00] declarative ui is that other thing right like this is just model is the source of truth we will have
[00:17:14] [SPEAKER_00] some mapping in the declarative way and the framework will figure out like that was amazing
[00:17:18] [SPEAKER_00] shifting perspective
[00:17:19] [SPEAKER_00] but where those kind of things branched off is then where it was saying like you can have any data as model right like you can you can create whatever objects you want you can create whatever collections you want you can put it anywhere right like if I in component outside of component
[00:17:37] [SPEAKER_00] you just don't have to carry, right?
[00:17:39] [SPEAKER_00] Like, and this kind of ergonomics,
[00:17:41] [SPEAKER_00] like seen from the ergonomic point of view
[00:17:43] [SPEAKER_00] and compared to Knockout where you had like computed
[00:17:45] [SPEAKER_00] and like wrappers and these functions,
[00:17:48] [SPEAKER_00] that was like a big syntactical difference
[00:17:52] [SPEAKER_00] and also philosophical difference.
[00:17:54] [SPEAKER_00] So it's kind of super ironic to sit here today, right?
[00:17:58] [SPEAKER_00] I can kind of see those pubs
[00:18:00] [SPEAKER_00] kind of reconnected about 10 years later.
[00:18:04] [SPEAKER_01] Yeah, yeah. I mean, and we all can, it's funny, there is a tweet that I shared on stream a couple weeks ago.
[00:18:10] [SPEAKER_01] And I mentioned this to you guys in the last meeting.
[00:18:13] [SPEAKER_01] I don't think I'm going to be able to find it at the moment here on Twitter.
[00:18:16] [SPEAKER_01] But these ideas all end up influencing each other in some way.
[00:18:20] [SPEAKER_01] I think the tweet was something like where Sebastian, Mark Bajé from Vercel and former Meta,
[00:18:26] [SPEAKER_01] you know, basically one of the big thought leaders behind the React core team.
[00:18:31] [SPEAKER_01] He was like, you know, something along the lines, like maybe AngularJS had it right with Zone all along.
[00:18:38] [SPEAKER_01] Which was amusing to me at least because I was privy to some of our conversations and where the thinking was.
[00:18:45] [SPEAKER_01] And I've watched, you know, I've heard everyone from you guys to Mishko talking about Zone.
[00:18:51] [SPEAKER_01] And I believe he was the original creator of Zone.
[00:18:54] [SPEAKER_01] That like...
[00:18:56] [SPEAKER_01] It's interesting to see how when you look at the same problems and keep on trying to circle around, like sometimes there's just not like the perfect set of trade-offs.
[00:19:04] [SPEAKER_01] Like there's not just the perfect thing.
[00:19:05] [SPEAKER_01] And each time we like, maybe if we tweak this a little bit, we can end up in the right place.
[00:19:10] [SPEAKER_01] And I think inevitably, if you circle around enough, you like end up pretty much trying everything anyway.
[00:19:16] [SPEAKER_01] Yeah.
[00:19:18] [SPEAKER_00] And it's so hilarious, right?
[00:19:20] [SPEAKER_00] Like because I think like so like just I think like your original question is like how did we even like put signals on the radar, right?
[00:19:27] [SPEAKER_00] Like and there are several things happening and we'll probably talk about them more like you mentioned zone zone, right?
[00:19:34] [SPEAKER_00] Like it's like absolutely fantastic developer experience for the small applications.
[00:19:38] [SPEAKER_00] It's like you cannot I don't think you can.
[00:19:40] [SPEAKER_00] kind of argue with this. This is just like this magic, like where you don't have to care about like where your data, where your state leaves, how you change it and this all updates magically.
[00:19:50] [SPEAKER_01] It has this very... Yeah, it's kind of incredible. People don't realize this recently because Angular and it has been a bit backseat on some of the social commentary.
[00:20:00] [SPEAKER_00] But there was like a tweet a while ago, which was like, it showed like a React component with use state in it.
[00:20:08] [SPEAKER_00] And then like it showed like the spelt side, which was like let count.
[00:20:11] [SPEAKER_00] And, and, you know, it was like, you know, that meme.
[00:20:16] [SPEAKER_00] And the funny thing about it is for Svelte to get to that point required a whole bunch of compilation work.
[00:20:23] [SPEAKER_00] Like where like you write let count, you do not get like let count.
[00:20:26] [SPEAKER_00] I mean, you get let count actually technically, but like everything else around it is actually very, very different.
[00:20:31] [SPEAKER_00] The interesting thing about Angular that people don't always realize is that that let count approach works without a compiler.
[00:20:40] [SPEAKER_00] Like, it's actually a runtime version of that.
[00:20:43] [SPEAKER_00] Like, it's different than Svelte, obviously, and there's details.
[00:20:46] [SPEAKER_00] But, like, that same meme could have been applied, you know, at any point.
[00:20:53] [SPEAKER_00] I guess since React added React hooks, like, people have to understand, like, when React had class components...
[00:20:57] [SPEAKER_00] It was a lot more let to count as well.
[00:21:02] [SPEAKER_00] Like there has been a shift of other players in the ecosystem throughout this time period when, you know, as I mentioned, everyone just kind of shifts around.
[00:21:10] [SPEAKER_00] It's kind of funny.
[00:21:11] [SPEAKER_00] The React guys are looking at Zone maybe.
[00:21:14] [SPEAKER_00] But a couple years ago, when you look at Hooks, like maybe they were looking at reactivity and then like, you know, or reactive language.
[00:21:21] [SPEAKER_00] And then like...
[00:21:22] [SPEAKER_00] you know, we're just kind of like spinning around it, you know, so it's definitely interesting to me.
[00:21:30] [SPEAKER_00] But yeah, sorry, we keep on getting off the off the you were setting it up.
[00:21:34] [SPEAKER_01] No, like I think like so like for me there are like three angles from which the setup happened at least for me and I'm sure Alex will have like slightly different story
[00:21:42] [SPEAKER_01] but like just to finish on zones like zones are like having this absolutely amazing
[00:21:47] [SPEAKER_01] experience, the thing is that we also saw like big applications written with zones, right?
[00:21:53] [SPEAKER_01] And the experience starts to be less amazing, mostly because of the performance,
[00:22:00] [SPEAKER_01] because you just keep figuring out what to refresh in the UI, and it takes time,
[00:22:05] [SPEAKER_01] and it doesn't respond, and so on, and so on.
[00:22:08] [SPEAKER_01] So there are performance considerations, like there is no way about it, because you don't know
[00:22:13] [SPEAKER_01] what happened in the like you know that something happened in the browser and maybe you need to
[00:22:17] [SPEAKER_01] update something uh so that's the only information we've got I don't think I don't think we get
[00:22:22] [SPEAKER_00] to talk about zone at this level without actually explaining what zone is a little bit it what I
[00:22:26] [SPEAKER_00] did try and get um Minco to explain zone to me as well and we got kind of like maybe in a more
[00:22:34] [SPEAKER_00] technical place
[00:22:35] [SPEAKER_00] But what zone does and it's similar to what I think a lot of if I guess people don't even know what async local storage even as well
[00:22:44] [SPEAKER_00] But the idea is instead of your data being special and instead of calling set state
[00:22:52] [SPEAKER_00] You you just look at any point at which the user could
[00:22:57] [SPEAKER_00] like interact or data could interact with the app and trace that through even async boundaries to the point that like,
[00:23:04] [SPEAKER_00] okay, I know I am done doing whatever action, like if someone clicked a button, data loaded from a server,
[00:23:10] [SPEAKER_00] and then the data came back, at that point you're like, oh, something could have changed.
[00:23:15] [SPEAKER_00] We should go see what changed. It's a very different model, but it means
[00:23:20] [SPEAKER_00] no set state without a compiler.
[00:23:23] [SPEAKER_00] The data is literally plain JavaScript objects,
[00:23:27] [SPEAKER_00] and it just works.
[00:23:30] [SPEAKER_02] Yeah, the way I usually describe zones to people, right,
[00:23:33] [SPEAKER_02] is like, what if the browser gave you a callback
[00:23:37] [SPEAKER_02] that you could register, right?
[00:23:39] [SPEAKER_02] Say, like, hey, I will tell you whenever anything else
[00:23:42] [SPEAKER_02] happens on the page where the application got to run some code.
[00:23:47] [SPEAKER_02] So maybe, you know, a click event handler fired.
[00:23:50] [SPEAKER_02] or maybe an HTTP fetch request came back and I executed a few promises and I'm done running that
[00:23:56] [SPEAKER_02] whole stack. Whenever the browser does something in the application, it then tells the callback
[00:24:04] [SPEAKER_02] about it and says like, hey, okay, something happened, now it's your turn to react to it.
[00:24:09] [SPEAKER_02] Right. That is what ZoneJS gives Angular. Right. And we do this by essentially monkey
[00:24:15] [SPEAKER_02] patching all of the various APIs in the browser where you could react to something.
[00:24:19] [SPEAKER_02] Yeah.
[00:24:20] [SPEAKER_02] So add event listener for DOM elements, you know, the fetch handler or XHR for HTTP
[00:24:26] [SPEAKER_02] requests, set time out.
[00:24:27] [SPEAKER_00] Yeah.
[00:24:27] [SPEAKER_00] Yeah.
[00:24:28] [SPEAKER_00] I was going to say the add event listener is like the easy one because the framework's usually
[00:24:31] [SPEAKER_00] responsible for actually appending it.
[00:24:33] [SPEAKER_00] But yeah, we must get into fun zone, sorry, pun again, when you start talking about stuff
[00:24:39] [SPEAKER_00] like async await or like, you know, like stuff that's actually like built into the language
[00:24:46] [SPEAKER_00] too.
[00:24:46] [SPEAKER_00] That must have been very challenging.
[00:24:48] [SPEAKER_02] Yeah, so we monkey patch promise.then, right?
[00:24:51] [SPEAKER_02] Because that is one of those async boundaries
[00:24:52] [SPEAKER_02] where we need to maintain this context of, you know,
[00:24:56] [SPEAKER_02] waiting for everything that you're waiting for to finish.
[00:24:59] [SPEAKER_02] Right.
[00:25:00] [SPEAKER_02] And the browser does not have a hook in it
[00:25:01] [SPEAKER_02] to monkey patch native async await.
[00:25:04] [SPEAKER_00] The trade-off, though, listening to this whole thing
[00:25:07] [SPEAKER_00] and it is kind of,
[00:25:08] [SPEAKER_00] probably obviously people is like you don't actually know what has changed necessarily exactly and
[00:25:15] [SPEAKER_01] that's kind of weird combination with having this model driven framework right like we want to
[00:25:20] [SPEAKER_01] have the model as the source of truth but like we just don't know which part of this model changed
[00:25:26] [SPEAKER_01] so the only thing we can do is like well let's dirty check and and I specifically don't want to
[00:25:32] [SPEAKER_01] use the word render but like let's just compare snapshot of the previous model with whatever is
[00:25:39] [SPEAKER_00] currently in the JavaScript it's it's I mean there's it's a data diffing model right like exactly
[00:25:44] [SPEAKER_00] the funny thing is like
[00:25:45] [SPEAKER_00] people don't, I often talk that there's three types of rendering.
[00:25:49] [SPEAKER_00] And I mean, this is super simplistic, but like a virtual DOM goes through the whole pure process of like pure rendering, creates a structure each time, and then compares that structure with the previous version of the structure, and then patches the diffs.
[00:26:03] [SPEAKER_00] So it lets you kind of write stuff in a way that like,
[00:26:07] [SPEAKER_00] like, you feel like you're like building something and then React goes and handles that in the background.
[00:26:15] [SPEAKER_00] But it's a two-pass approach.
[00:26:17] [SPEAKER_00] Then the dirty checking approach is like the one-pass approach.
[00:26:20] [SPEAKER_00] It's like, look, while we have the previous data from last time,
[00:26:24] [SPEAKER_00] while we're, you know, doing the update, instead of you creating, you know,
[00:26:27] [SPEAKER_00] a bunch of temporary, like, virtual DOM nodes,
[00:26:31] [SPEAKER_00] we're just going to see what the new data is and compare it as we go.
[00:26:34] [SPEAKER_00] So, like, there's actually similarities to a certain degree to the virtual DOM libraries.
[00:26:41] [SPEAKER_00] It's just like a single pass instead of two passes.
[00:26:44] [SPEAKER_00] And this is true for there's a number of frameworks that do this kind of approach.
[00:26:47] [SPEAKER_00] Things that use tag template literals tend to use this kind of approach to a certain degree.
[00:26:52] [SPEAKER_00] There's also full details around components and what part reruns and all that kind of stuff.
[00:26:56] [SPEAKER_00] But the general mechanism is
[00:26:58] [SPEAKER_00] It's a data diff I don't know I don't know if I should excal draw this like for two seconds
[00:27:02] [SPEAKER_00] Do people here understand the the three different models?
[00:27:05] [SPEAKER_00] I'm sorry they're like gonna jump off, but I think it's actually might be important just to really quickly kind of do this for two seconds because I want
[00:27:15] [SPEAKER_00] You can view your app as like
[00:27:18] [SPEAKER_00] Like there's like
[00:27:20] [SPEAKER_00] in the kind of dirty checking world, you know, you might have some data.
[00:27:25] [SPEAKER_00] And it's like a hierarchy. You might have an array of users and those users have other things.
[00:27:31] [SPEAKER_00] And then every time...
[00:27:37] [SPEAKER_00] So, yeah, okay. Here's some kind of tree, right?
[00:27:40] [SPEAKER_00] So this could be a data tree, right?
[00:27:44] [SPEAKER_00] Data, data, data model, let's call it whatever.
[00:27:48] [SPEAKER_00] And what we're talking about is like you get the data model,
[00:27:53] [SPEAKER_00] And then at each point of interest, maybe I'll use squares over here.
[00:28:03] [SPEAKER_00] Like, do you guys keep the model?
[00:28:05] [SPEAKER_00] Actually, I don't know about this about...
[00:28:06] [SPEAKER_00] Maybe you guys can clarify this for me.
[00:28:07] [SPEAKER_00] Do you guys keep the model with the bindings, or do you like...
[00:28:13] [SPEAKER_01] So like, so maybe each binding, so like every user in the template is this, for us, this is this place of divvying, right?
[00:28:21] [SPEAKER_01] Like, so we, this is where we remember the previous value of the model.
[00:28:24] [SPEAKER_00] Right. That's, that's exactly what I was getting at.
[00:28:27] [SPEAKER_00] So we have, you know, the actual view, let's say, and the actual view, sorry, let's hope this visualization actually makes sense.
[00:28:44] [SPEAKER_00] Inside of it has...
[00:28:49] [SPEAKER_00] Just the previous versions of the data.
[00:28:56] [SPEAKER_00] So every time, let me do this.
[00:29:00] [SPEAKER_00] It's probably the worst explanation ever.
[00:29:06] [SPEAKER_01] It's actually fantastic.
[00:29:07] [SPEAKER_01] We are hiring for redoing documentation drawings.
[00:29:12] [SPEAKER_00] Yeah, there we go.
[00:29:13] [SPEAKER_00] So what happens is you come in with the data model
[00:29:17] [SPEAKER_00] and when you change it, you might go,
[00:29:19] [SPEAKER_00] okay, I'm going to update this node here.
[00:29:24] [SPEAKER_00] And then what ends up happening is, then you go, okay, something's changed.
[00:29:30] [SPEAKER_00] Zone tells us.
[00:29:30] [SPEAKER_00] And then we go back into the real view and we're like, okay, this is still the same.
[00:29:35] [SPEAKER_00] This is the same.
[00:29:36] [SPEAKER_00] Oh, this has changed.
[00:29:37] [SPEAKER_00] Update the DOM, right?
[00:29:39] [SPEAKER_00] Like, and then, you know, this hasn't changed and move on.
[00:29:42] [SPEAKER_00] Like, essentially, you just, every time you go through, you update the model and then run
[00:29:48] [SPEAKER_00] it against the real view.
[00:29:51] [SPEAKER_00] And this kind of differs a little bit from like in a virtual DOM library,
[00:29:56] [SPEAKER_00] what you end up doing is a little bit more like,
[00:30:03] [SPEAKER_00] I want to get rid of these little things here.
[00:30:05] [SPEAKER_00] I mean, it's kind of implicitly in here,
[00:30:07] [SPEAKER_00] but essentially instead of having it based on the data model
[00:30:11] [SPEAKER_00] and diffing, it's like, okay,
[00:30:15] [SPEAKER_00] let's move this a little bit here.
[00:30:17] [SPEAKER_00] It's like render VDOM,
[00:30:24] [SPEAKER_00] and then it's like, oh, I missed one.
[00:30:36] [SPEAKER_00] And it's like previous VDOM,
[00:30:45] [SPEAKER_00] and then, it's funny because I'm using squares for this,
[00:30:50] [SPEAKER_00] but, and then it's like realDOM.
[00:31:01] [SPEAKER_00] So there's basically,
[00:31:04] [SPEAKER_00] Like, here you update the data and then do a pass.
[00:31:09] [SPEAKER_00] Here, you create a new virtual DOM.
[00:31:13] [SPEAKER_00] And then you do a similar kind of walk where you, like, compare this to this.
[00:31:17] [SPEAKER_00] So, like, if, you know, a node changes here.
[00:31:22] [SPEAKER_00] Then, or did I get color?
[00:31:24] [SPEAKER_00] Yeah, it doesn't really matter.
[00:31:25] [SPEAKER_00] No, I used the other color.
[00:31:27] [SPEAKER_00] Maybe I should use a brighter color.
[00:31:29] [SPEAKER_00] Let's use a brighter color.
[00:31:30] [SPEAKER_00] If, yeah, sorry.
[00:31:33] [SPEAKER_00] Here.
[00:31:35] [SPEAKER_00] I didn't actually propagate the change all the way through, right?
[00:31:41] [SPEAKER_00] Then it'll compare it with the previous one.
[00:31:43] [SPEAKER_00] So it'll go through and walk through.
[00:31:44] [SPEAKER_00] So first you create it, then you go through and walk it through,
[00:31:47] [SPEAKER_00] and then it will go, okay, I actually need to mutate this.
[00:31:55] [SPEAKER_00] So like you generate a whole virtual DOM, compare it to the previous DOM,
[00:32:02] [SPEAKER_00] and then React goes, okay, so that thing changed, update this one.
[00:32:06] [SPEAKER_00] okay people still with me hopefully hopefully hopefully that makes sense yeah so so like you
[00:32:11] [SPEAKER_01] kind of also walk different things right like because with the vdom you walk most like just
[00:32:16] [SPEAKER_01] trees that like represent more like a rendering output while with the angular approach you
[00:32:22] [SPEAKER_01] like walk the a set of bindings right like this is kind of not directly connected uh to the to
[00:32:29] [SPEAKER_01] the structure of the uh right it's it's a like
[00:32:33] [SPEAKER_01] maybe like if you like it's good illustration if we uh look at the two extreme examples right like
[00:32:39] [SPEAKER_01] let's say there is a component with uh 100 bindings or or like component with one binding right
[00:32:44] [SPEAKER_01] like in angular you would uh just like component with one binding you just have like one place
[00:32:49] [SPEAKER_01] to check with 100 binds you've got 100 places to check
[00:32:52] [SPEAKER_01] uh with vdom it's like you know like it's not the number of bindings but how big your vdom is right
[00:32:59] [SPEAKER_01] like so so they they scale differently right like the right the number of binding versus like how
[00:33:04] [SPEAKER_01] big your ui is and and this was the story at the beginning and then we started to have like
[00:33:09] [SPEAKER_01] blog dom things where people started to capture some insights right like that the
[00:33:14] [SPEAKER_01] the parts of the video are also static and so on so things started to converge as well here
[00:33:19] [SPEAKER_00] Yeah, yeah, definitely.
[00:33:20] [SPEAKER_00] And I was trying to draw the third model, which was the reactive model.
[00:33:24] [SPEAKER_00] And the funny thing is the diagram for the reactive model looks a little bit similar to where we started to on the dirty checking.
[00:33:33] [SPEAKER_00] The difference is this.
[00:33:38] [SPEAKER_00] i feel like if you it's almost like it's almost like this like this circle is this circle in the
[00:33:46] [SPEAKER_00] reactive diagram so it's almost like it's it is a data model but it's like it's like it's almost
[00:33:53] [SPEAKER_00] like you you you update
[00:33:57] [SPEAKER_01] or it's almost like you kind of draw arrows in a different direction right like on the top drawing
[00:34:01] [SPEAKER_01] you've got like arrows from the bindings to the model and here's just kind of yeah do arrows in
[00:34:07] [SPEAKER_01] the like push versus pull right like kind of thing yeah i mean or they're like maybe not even
[00:34:13] [SPEAKER_00] arrows they're just lines you know like it's kind of like you don't walk down them so much you're
[00:34:19] [SPEAKER_00] just like yeah i don't know this is this is like you go in and you update this which updates this
[00:34:26] [SPEAKER_01] it's um yeah you kind of the eber notification to the place which is interested in right so
[00:34:32] [SPEAKER_00] if people follow it all it's one pass two pass
[00:34:36] [SPEAKER_00] no pass, right?
[00:34:38] [SPEAKER_00] Like it's but don't like that's not a free trade off.
[00:34:42] [SPEAKER_00] It's like you do a bunch of work up front to actually make sure that it's like that.
[00:34:48] [SPEAKER_00] But this is like a very simplistic view of when I said there's three different
[00:34:52] [SPEAKER_00] renderers in the world. And the truth of the matter is we're seeing mixing and matching,
[00:34:55] [SPEAKER_00] as you mentioned, like we're like, um, and even like you might have a virtual DOM that has
[00:35:01] [SPEAKER_00] signals in it, or you might take a dirty checking model and put signals in it and stuff like,
[00:35:04] [SPEAKER_00] so like these aren't the, the rendering question is actually a little bit separate from the
[00:35:10] [SPEAKER_00] change detection mechanism, but I just wanted to kind of point out here for a moment that
[00:35:14] [SPEAKER_00] like really high level, there's like three different rendering methods perhaps that
[00:35:21] [SPEAKER_01] that check with everyone and and and i i tend to think that the two first ones are kind of more
[00:35:27] [SPEAKER_01] similar than different right like yes the the the places where the dipping happens are different
[00:35:33] [SPEAKER_00] but the the philosophy is kind of the same right and then this one's just like the the the the
[00:35:38] [SPEAKER_00] crazy one that you like you keep out away you know at weddings you know um and here we are now so uh
[00:35:47] [SPEAKER_00] Yeah, how are we doing chat? People still following? I went a little bit on the technical side a little bit, but let's keep on going. So now when we're talking about stuff, what I wanted to kind of bring up, and I guess maybe this is a little bit early in the conversation here though is
[00:36:05] [SPEAKER_00] This is, we're talking about zone and it's dirty checking, but people have been using other forms of reactivity in Angular.
[00:36:12] [SPEAKER_00] And like a lot of times when people talk about they're like, oh yeah, well what about, you know, RxJS or something.
[00:36:18] [SPEAKER_00] How does RxJS fit into all of this?
[00:36:21] [SPEAKER_01] Yeah, like Alex, because like for me, this is a second angle from which we are coming, right?
[00:36:26] [SPEAKER_01] Like zone, like we want to go to the world where maybe there is.
[00:36:30] [SPEAKER_01] optional zones, RxDS, like, as you said, like, people are using RxDS.
[00:36:36] [SPEAKER_00] But, yeah, not even talking future, future, just, like, in general, like,
[00:36:41] [SPEAKER_00] Angular 2 came out, I think, was it with Angular 2 and suddenly it was, like,
[00:36:44] [SPEAKER_00] Angular 2 used with RxDS, like, what, like, at least that's what it looked like from the outside.
[00:36:49] [SPEAKER_00] It was, it's kind of like the React Redux, like, arrangement.
[00:36:54] [SPEAKER_00] That's what it felt like.
[00:36:55] [SPEAKER_00] So maybe you can speak to, like, just, like, what is it?
[00:36:57] [SPEAKER_00] What's going on?
[00:36:59] [SPEAKER_01] go for it Pavel this is yeah no I mean so so I'm I'm laughing because there are there is so much
[00:37:05] [SPEAKER_01] history and like every I think like everyone on the team would tell like slightly different
[00:37:09] [SPEAKER_01] version of it so I don't want to like that's why I was like hey uh let's do let's say like let's
[00:37:14] [SPEAKER_01] have two versions right like because we remember things differently but uh
[00:37:18] [SPEAKER_01] But I remember like the one of the first XGS presentations from Jafar Hussein that I think at the time was at Netflix and he had this very
[00:37:34] [SPEAKER_01] convincing and like amazing presentation, right?
[00:37:37] [SPEAKER_01] Like just talking about the push model
[00:37:39] [SPEAKER_01] and like kind of as the being mirror of the iterators
[00:37:45] [SPEAKER_01] and like, you know, like this was like extremely well
[00:37:49] [SPEAKER_01] done presentation.
[00:37:52] [SPEAKER_01] And that was roughly at the time when the Angular 2
[00:37:54] [SPEAKER_01] was being born and we absolutely saw a lot of
[00:38:00] [SPEAKER_01] power in those APIs and like a lot of good properties.
[00:38:04] [SPEAKER_01] And I think Alex will talk about like HTTP story
[00:38:06] [SPEAKER_01] and whatnot, but there was this like honeymoon period
[00:38:11] [SPEAKER_01] where we, like this is amazing,
[00:38:13] [SPEAKER_01] like let's have it in the framework
[00:38:15] [SPEAKER_01] and then how observable started to kind of,
[00:38:20] [SPEAKER_01] being introduced in the parts of the API, right?
[00:38:23] [SPEAKER_01] Like in different APIs on the framework,
[00:38:25] [SPEAKER_01] it got added as the direct dependency on the framework.
[00:38:28] [SPEAKER_01] So every Angular developer was getting her XGS, right?
[00:38:30] [SPEAKER_01] Like, so this was strong signal to the community,
[00:38:33] [SPEAKER_01] like we are betting on her XGS, right?
[00:38:37] [SPEAKER_01] So that's kind of part of the story.
[00:38:39] [SPEAKER_01] But essentially the framework still was built
[00:38:44] [SPEAKER_01] on this top-down dirty checking, right?
[00:38:46] [SPEAKER_01] So we had this,
[00:38:47] [SPEAKER_01] Yeah, would those things be...
[00:38:50] [SPEAKER_00] Yeah, exactly.
[00:38:51] [SPEAKER_00] Exactly, right.
[00:38:52] [SPEAKER_00] Because people talk about RxJS also in React, and that's something we're familiar with.
[00:38:55] [SPEAKER_00] And React had to go out as far as say, like, look, we aren't reactive in that sense of
[00:38:59] [SPEAKER_00] the word reactive.
[00:39:00] [SPEAKER_00] Right.
[00:39:00] [SPEAKER_00] And people were having a really hard time fitting RxJS into React in a way that...
[00:39:04] [SPEAKER_00] And I wouldn't imagine Angular being much different as we just mentioned how similar
[00:39:08] [SPEAKER_00] stuff is.
[00:39:09] [SPEAKER_00] Actually, sorry, I just wanted to address this two quick quest thing.
[00:39:11] [SPEAKER_00] There's someone mentioned incremental DOM.
[00:39:15] [SPEAKER_00] In my mind, incremental DOM still fits in between those first two things.
[00:39:21] [SPEAKER_00] A VDOM that does it in a single pass is not very, doesn't, like where you check might be different, but it's not that different than like the dirty checker.
[00:39:30] [SPEAKER_00] Just like from my perspective, it's a one, it's a one pass virtual DOM essentially.
[00:39:35] [SPEAKER_00] But anyway, sorry, I hijacked that for a second, but I just wanted to kind of...
[00:39:39] [SPEAKER_01] No, no, but like, I think like it's a kind of like where we left off is like, you know, like you've got this,
[00:39:45] [SPEAKER_01] uh powerful reactivity system that like uh creates this reactive graph of dependencies and pushes
[00:39:53] [SPEAKER_01] notification down to the binding level right like we the other thing that we introduced
[00:39:57] [SPEAKER_01] in the framework was so-called async pipe which
[00:40:00] [SPEAKER_00] basically allowed us to consume observables on a binding level.
[00:40:03] [SPEAKER_01] Oh, nice.
[00:40:04] [SPEAKER_00] Right?
[00:40:04] [SPEAKER_00] Like, so we had integration of like, like the consuming part of
[00:40:09] [SPEAKER_00] observables in the templates.
[00:40:11] [SPEAKER_00] We always had this story.
[00:40:13] [SPEAKER_02] Yeah, the basing pipe is basically the await keyword in a template, right?
[00:40:17] [SPEAKER_02] It's like wait for this thing to be present and.
[00:40:19] [SPEAKER_00] Okay.
[00:40:21] [SPEAKER_00] Right.
[00:40:21] [SPEAKER_00] But, but, but again, you still do have this fundamental mismatch of this reactive graph
[00:40:26] [SPEAKER_00] comes and like delivers this notification down to a binding level.
[00:40:30] [SPEAKER_00] So you know, like, oh, this attribute got updated.
[00:40:33] [SPEAKER_00] and then what we do is this like hey zonji has kicks in and by the way i'm going to go through
[00:40:39] [SPEAKER_00] entire application and dirty check it right like and there are some optimizations like we we've
[00:40:44] [SPEAKER_00] got like you know should component update like the angular version is called on push so so like
[00:40:50] [SPEAKER_00] in practice you are never checking the entire tree you are pruning this tree very aggressively
[00:40:56] [SPEAKER_00] but philosophically you've got this mismatch but
[00:41:01] [SPEAKER_01] Yeah, I was just yeah, go ahead on push.
[00:41:05] [SPEAKER_01] It was mentioned to me a few times.
[00:41:07] [SPEAKER_01] And you kind of attribute to kind of similar to like should component update.
[00:41:11] [SPEAKER_01] Is it similar like that?
[00:41:12] [SPEAKER_01] Like at a component level, you kind of just go, yeah, it is ignore this one, it'll handle
[00:41:17] [SPEAKER_01] its own changes.
[00:41:17] [SPEAKER_00] Yeah, yeah.
[00:41:18] [SPEAKER_00] So it is component, but instead of having a function that like, you know, tells the framework
[00:41:22] [SPEAKER_00] should this component update with the we've got a flag and the set of characteristics
[00:41:26] [SPEAKER_00] that goes with this flag.
[00:41:28] [SPEAKER_01] Okay.
[00:41:28] [SPEAKER_01] So that makes sense.
[00:41:29] [SPEAKER_00] But like philosophically is the same thing.
[00:41:31] [SPEAKER_01] But once once it.
[00:41:32] [SPEAKER_01] takes over, it must take over the whole
[00:41:34] [SPEAKER_01] subtree, like just conceptually from
[00:41:36] [SPEAKER_01] where... Yes, yes, yes.
[00:41:38] [SPEAKER_02] Yeah, so...
[00:41:40] [SPEAKER_02] From a mental model perspective, right?
[00:41:42] [SPEAKER_02] Unpushed to me is kind of
[00:41:45] [SPEAKER_02] you know, if you think of a normal Angular component with no extra change detection options set,
[00:41:51] [SPEAKER_02] it by virtue of zone.js, right, it can depend on whatever part of the model of your application
[00:41:56] [SPEAKER_02] at once. Right. It doesn't have to only depend on its props. It doesn't have to only depend on
[00:42:01] [SPEAKER_02] its local state. It can reach into some, you know, global variable somewhere if it wants and
[00:42:05] [SPEAKER_02] read that value and zone.js will ensure that that gets propagated. Right. When you make a
[00:42:10] [SPEAKER_02] component on push, you're kind of opting into a different set of rules there.
[00:42:14] [SPEAKER_02] you're making a promise to the framework that I'm not going to depend on the global model in that way unless I give this notification of like, hey, framework, you need to update me like something I changed on, something I depend on changed.
[00:42:28] [SPEAKER_02] Right.
[00:42:29] [SPEAKER_02] yeah that is that is on push and it does affect the entire tree which is arguably broken but right
[00:42:35] [SPEAKER_01] that is the way it was so i mean what i'm hearing though is if someone really like made this switch
[00:42:41] [SPEAKER_01] at the beginning of their app they're like look i care about you know i don't want all this dirty
[00:42:45] [SPEAKER_01] checking i like reactivity i might just build my whole app under on push it's almost like like here
[00:42:52] [SPEAKER_01] like my app is an on push angular app and my app is a zoning angular app this is something i imagine
[00:42:58] [SPEAKER_00] has happened yeah and that's exactly what is happening and like large part of the community
[00:43:02] [SPEAKER_00] if not the majority of the community is doing exactly this right so ironically we were a reactive
[00:43:09] [SPEAKER_00] framework for for the very long time the the other aspect of it which is you know like
[00:43:17] [SPEAKER_00] components in Aguera are classes right like so we never had this
[00:43:22] [SPEAKER_00] uh idea of like components re-rendering yeah so to speak right right yeah i mean that's the funniest
[00:43:30] [SPEAKER_01] thing to me because in a sense like react class components that the re-render thing was not
[00:43:34] [SPEAKER_01] something people talked about like technically they re-rendered because you have to generate
[00:43:37] [SPEAKER_01] a new virtual dom but you could just pretend that that render function was a template or whatever
[00:43:42] [SPEAKER_01] rendering mechanism and all the state management happened independent of
[00:43:47] [SPEAKER_01] the view handling of things same is true with view actually right view they have a setup function
[00:43:53] [SPEAKER_01] that runs once and it's just the template after that point so right so so like the exactly that
[00:43:59] [SPEAKER_00] so the angular components were always like in the spirit of setup function right like which is
[00:44:04] [SPEAKER_00] you you've got a place you've got natural place where you create this reactive graph
[00:44:09] [SPEAKER_00] So this is like super ironic, right?
[00:44:12] [SPEAKER_00] Like we've got this framework that at heart
[00:44:14] [SPEAKER_00] is like top down, dirty checking.
[00:44:16] [SPEAKER_00] But at the same time, it's very reactive framework
[00:44:19] [SPEAKER_00] because we've got a system that can create
[00:44:22] [SPEAKER_00] the reactive graph, deliver notification.
[00:44:25] [SPEAKER_00] And you've got component model
[00:44:26] [SPEAKER_00] that allows you to set up this graph
[00:44:28] [SPEAKER_00] when components get created and they are meant to be rendered.
[00:44:32] [SPEAKER_01] Yeah, this is interesting because this is almost...
[00:44:36] [SPEAKER_01] I can see why one side maybe be more dominant than the other side,
[00:44:39] [SPEAKER_01] because this is actually like a fracturing point, almost like third-party libraries.
[00:44:42] [SPEAKER_01] Everyone has to decide, like, I built my component for on push,
[00:44:45] [SPEAKER_01] I built my component for zone.
[00:44:48] [SPEAKER_02] And people who build kind of like component libraries, UI component libraries for Angular,
[00:44:53] [SPEAKER_02] It's almost a requirement that they have to, if not be on push themselves, then support running in an on push context because of this property that they could get pulled into an application that happens to be using this style and be subjected to that set of rules.
[00:45:09] [SPEAKER_01] Yeah, yeah, I guess so because zone is like the lowest.
[00:45:13] [SPEAKER_01] So this is actually unfortunate because like, I mean, I'm just processing this in real time,
[00:45:17] [SPEAKER_01] but you'd end up being like, OK, fine, I need the support on push.
[00:45:19] [SPEAKER_01] So you build the thing to support on push and then you're like, do I want to build a second one?
[00:45:23] [SPEAKER_01] You're like, eh, if the people are using zone, it's their own fault.
[00:45:25] [SPEAKER_01] Like like you kind of get to this point where you're just like zone will work anyways.
[00:45:30] [SPEAKER_01] So it's just like the lowest common denominator where all the stuff goes.
[00:45:36] [SPEAKER_00] So, like, I mean, and you are touching upon, like, the really important part, right?
[00:45:41] [SPEAKER_00] Like, we've got one framework, but that could be used differently, and you can think about
[00:45:46] [SPEAKER_00] it very differently.
[00:45:48] [SPEAKER_01] I mean, this is actually not uncommon.
[00:45:52] [SPEAKER_01] I mean, I'm actually been concerned about this a lot recently, because there's been this
[00:45:57] [SPEAKER_01] kind of potential that's kind of forking in other places.
[00:46:00] [SPEAKER_01] Yeah, I mean, those render models that we showed a minute ago are considerably different, right?
[00:46:05] [SPEAKER_01] When you have something that's like on push, like very similar reactivity to almost like
[00:46:09] [SPEAKER_01] my third version of rendering.
[00:46:11] [SPEAKER_01] And then you have like the zone dirty checking or the virtual DOM.
[00:46:14] [SPEAKER_01] If it is really a switch or something, like you do end up with like these two worlds and
[00:46:20] [SPEAKER_01] having to make a choice on how you author your components and like how to put it all together,
[00:46:24] [SPEAKER_01] right?
[00:46:27] [SPEAKER_01] I think there's some solutions which kind of marry them in a way that maybe you don't have to worry about too much, like view does that generally.
[00:46:34] [SPEAKER_01] But then if you look at something like view vapor, like their new compiler thing, which is those two worlds are like separate modes again.
[00:46:41] [SPEAKER_01] So like it's interesting to see how that plays out.
[00:46:45] [SPEAKER_01] But for you guys, you guys are like, okay, like I'm getting to the sense that there's like a problem to solve here.
[00:46:52] [SPEAKER_00] Right, and I think like so like we've got zones, we've got this, you know, like we want to be reactive framework, but like we are not and like what should we do with this that that's one building block.
[00:47:06] [SPEAKER_00] I've got my also other story for like.
[00:47:11] [SPEAKER_00] And I think this is kind of how we met with Ryan, like how actually I learned about signals, is that before joining Google, I was working for the company that was doing a lot of shared components.
[00:47:23] [SPEAKER_00] So like you had pieces of logic that you wanted to deliver as the reusable piece and share between multiple applications.
[00:47:33] [SPEAKER_00] And it sounded like.
[00:47:35] [SPEAKER_00] it's a job for state management, right?
[00:47:37] [SPEAKER_00] Like you've got the state and you've got the logic there.
[00:47:41] [SPEAKER_00] You combine it and you can share between the applications.
[00:47:44] [SPEAKER_00] And so I came to the activity space also from this angle,
[00:47:49] [SPEAKER_00] like what is the primitive that I could use to actually encapsulate logic that
[00:47:57] [SPEAKER_00] is reusable between application is reactive for like right some sense of not actually tied to like the specific component tree or whatever yeah right and uh and i think like when we first met i were talking about spell stores and and whatnot right like so like that was also the point in time when i was like probably looking at every possible
[00:48:19] [SPEAKER_01] reactivate the system on this planet yeah yeah like a little context here because like obviously the
[00:48:24] [SPEAKER_01] the announcement uh you know about angular and signals and stuff went out like last week
[00:48:28] [SPEAKER_01] i've been talking about how long has it been like 2020 like yeah exactly it was before
[00:48:33] [SPEAKER_01] i started working at ebay i think actually i think it was like
[00:48:36] [SPEAKER_01] It was like March 2020 ish or April.
[00:48:39] [SPEAKER_01] Something like that.
[00:48:40] [SPEAKER_01] Yeah.
[00:48:41] [SPEAKER_01] Yeah.
[00:48:41] [SPEAKER_01] So this conversation has been going on for quite some time and you reached out and you're
[00:48:45] [SPEAKER_01] like, oh, you know, let's I'm really interested in this.
[00:48:48] [SPEAKER_01] I want like, I'm looking to all different types of reactivity systems.
[00:48:51] [SPEAKER_01] And this is before you joined the Angular core team, but you, yeah, I was open source
[00:48:56] [SPEAKER_00] contributor, but I was not working as the full time on it.
[00:48:59] [SPEAKER_01] Yeah.
[00:48:59] [SPEAKER_01] Right.
[00:49:00] [SPEAKER_01] Right.
[00:49:01] [SPEAKER_01] Right.
[00:49:01] [SPEAKER_01] So yeah.
[00:49:02] [SPEAKER_01] I mean, continue.
[00:49:03] [SPEAKER_00] No, so like, I mean, and I think that that's also, I mean, like, so there's a risk of branching into like state management.
[00:49:10] [SPEAKER_00] Like, I don't know, are you ready for this or like I should stop myself because there's the whole...
[00:49:18] [SPEAKER_00] I mean, other angle that will come when we start talking about signals and why signals.
[00:49:24] [SPEAKER_01] Yeah, I mean, maybe we're almost there because I think we've kind of caught up to the present here.
[00:49:29] [SPEAKER_01] You were looking to state management solutions.
[00:49:31] [SPEAKER_01] You got your hands dirty with a few things.
[00:49:36] [SPEAKER_01] You're obviously very connected to the Angular team and they were also sitting here going, how do we solve this problem?
[00:49:45] [SPEAKER_01] And I'm, yeah, I mean, yeah, you're right.
[00:49:49] [SPEAKER_01] Let's hop over the state management stuff
[00:49:51] [SPEAKER_01] and just go a little bit closer to the present.
[00:49:55] [SPEAKER_00] Right, so I think, like, you know,
[00:49:57] [SPEAKER_00] if you get those...
[00:50:00] [SPEAKER_00] like if you look at zone.js that's like oh maybe we want to be less special in this regard like maybe that's not the model we want to enforce for all applications like you know like you just like want to have a different model then the question becomes like what drives what actually tells the framework
[00:50:23] [SPEAKER_00] that um yeah yeah something changed I was wrong yeah no this is when we have to jump into it I
[00:50:30] [SPEAKER_01] was I was I was trying to like justify the stuff but we've been just like egging it on I think I
[00:50:34] [SPEAKER_01] think we just need to start here with basically we've gone to the point in the stream where it's
[00:50:39] [SPEAKER_01] like um what is a signal like I I think I think we've been kind of talking around this for a
[00:50:44] [SPEAKER_01] long time and like I'm already seeing it in chat where people are like
[00:50:47] [SPEAKER_01] what's the difference between a signal and an observable, you know,
[00:50:52] [SPEAKER_01] and then observable and promise plus plus and, you know, like a whole bunch,
[00:50:55] [SPEAKER_01] like there's a bunch of comments here,
[00:50:58] [SPEAKER_01] defensive graphs, observable is basically all potential event sources for the final value listening for it.
[00:51:02] [SPEAKER_01] Like I think we almost, we got, I think a bit of an angular audience here
[00:51:06] [SPEAKER_01] compared to my normal audience as well.
[00:51:08] [SPEAKER_01] So I think we should just kind of get into like, what is this?
[00:51:14] [SPEAKER_00] Alex, I'm talking too much.
[00:51:16] [SPEAKER_00] I mean, I can talk more, but like, go ahead.
[00:51:19] [SPEAKER_02] Yeah.
[00:51:20] [SPEAKER_02] So just touching back to the RxJS question, right?
[00:51:25] [SPEAKER_02] Back in 2014, when Angular was kind of conceived
[00:51:30] [SPEAKER_02] as a successor to AngularJS.
[00:51:34] [SPEAKER_02] We were, as Pavel mentioned, listening to a lot of talks by Jafar Hussein and Ben Lesch from Netflix,
[00:51:44] [SPEAKER_02] talking about this RxJS library and all the interesting things that it could do.
[00:51:48] [SPEAKER_02] At the time, I was building the Angular HTTP client, which does use observables.
[00:51:53] [SPEAKER_02] And one of the really cool things that kind of came out of that is observables have back pressure.
[00:51:59] [SPEAKER_02] So you can...
[00:52:00] [SPEAKER_02] you know, when something is no longer interested in a value that propagates back to the source,
[00:52:05] [SPEAKER_02] and then the source can do an effect like unsubscribe or canceling HTTP requests or things like that.
[00:52:11] [SPEAKER_02] So there were, you know, this thing was attractive to us in a lot of ways.
[00:52:16] [SPEAKER_02] It solved some problems that we had seen in the kind of first versions of,
[00:52:20] [SPEAKER_02] you know, AngularJS, dollar HTTP, things like that.
[00:52:24] [SPEAKER_02] Yeah.
[00:52:24] [SPEAKER_02] At the same time, though,
[00:52:26] [SPEAKER_02] the core kind of dirty checking algorithm of Angular was not really modified too heavily
[00:52:33] [SPEAKER_02] when migrating from AngularJS to Angular.
[00:52:37] [SPEAKER_02] There were some changes in kind of the like driving approach to it.
[00:52:42] [SPEAKER_02] AngularJS used to do kind of multiple rounds of dirty checking
[00:52:45] [SPEAKER_02] to see if the model stabilized because you would run through the dirty checking
[00:52:50] [SPEAKER_02] and then like maybe fired an event in there that updated the model again
[00:52:54] [SPEAKER_02] You had this kind of model to model synchronization and you had to go back and check again.
[00:52:59] [SPEAKER_02] Angular did away with that.
[00:53:01] [SPEAKER_02] But in particular, we didn't set out to kind of change fundamentally how the core dirty checking algorithm worked.
[00:53:09] [SPEAKER_02] there was no appetite to say like let's replace the you know execution of bindings all with
[00:53:15] [SPEAKER_02] observables or all with promises or any other kind of primitive we were still very much
[00:53:20] [SPEAKER_02] spiritually in this mode of we want to build a top-down global dirty checking framework right
[00:53:26] [SPEAKER_02] So fast forward a few years, and you do have this kind of fracture where a large part of the ecosystem is still using that top-down ZoneJS approach.
[00:53:37] [SPEAKER_02] And another large part of the ecosystem wants to build applications that are more reactive, that use things like RXJS to deliver this notification down to the component or to the binding level that, like, hey, you need to update this particular piece needs to re-render.
[00:53:52] [SPEAKER_01] Yeah.
[00:53:54] [SPEAKER_01] Yeah, yeah, definitely. Yeah. So like, and then you guys are like, okay, how do I?
[00:54:01] [SPEAKER_00] Right. So, so, so probably like somewhere around, like summer last year, I started to have like tweets where like that it was visible probably that I'm like looking pretty much and like it's obviously I'm it was visible that I'm looking because I'm tweeting a lot, but like I was meeting with Alex and
[00:54:22] [SPEAKER_00] we essentially had a long and hard look at the,
[00:54:27] [SPEAKER_00] not only at the Smith smart,
[00:54:29] [SPEAKER_00] but essentially like all the things with the core,
[00:54:31] [SPEAKER_00] like change detection algorithm in the framework.
[00:54:35] [SPEAKER_00] seeing this model of XGS where the push notification that something changed is delivered to the component or to the binding level,
[00:54:43] [SPEAKER_00] like that was something that we liked a lot, right?
[00:54:47] [SPEAKER_00] Like there's this model where you've got a reactive graph and it tells your component that like, hey, you change, you need to render.
[00:54:56] [SPEAKER_00] That was like something that was fitting naturally in the way we thought about those things.
[00:55:03] [SPEAKER_00] So at this point, the question became like, okay, if we want to make the framework more reactive, you know, the elephant in the room is like, what does it mean, right?
[00:55:14] [SPEAKER_00] Like which reactive system you should use.
[00:55:18] [SPEAKER_02] And I think there's a second kind of part of that story too, which is, you know, Angular is in a position where we've been around on the web for a while.
[00:55:28] [SPEAKER_02] You know, the framework is, you know, over 10 years old at this point.
[00:55:32] [SPEAKER_02] And you learn a lot when you watch people use your technology for 10 years.
[00:55:38] [SPEAKER_02] And we've seen some of the issues with ZoneJS when applications scale up from this initial experience of like, this is great.
[00:55:46] [SPEAKER_02] I don't have to think about where I put my state at all.
[00:55:49] [SPEAKER_02] to suddenly I have a thousand components and these huge state trees and things are slow
[00:55:56] [SPEAKER_02] and I don't know why.
[00:55:58] [SPEAKER_02] And so we've kind of looked into some of the challenges with ZoneJS and some of them
[00:56:04] [SPEAKER_02] are solvable with focused optimization.
[00:56:08] [SPEAKER_02] Some of them are just fundamental to how this thing works.
[00:56:12] [SPEAKER_02] There's really a limit to how much you can optimize when you have no information about what's
[00:56:16] [SPEAKER_02] changing or where.
[00:56:17] [SPEAKER_01] Right.
[00:56:18] [SPEAKER_01] And I think this is not an Angular specific realization.
[00:56:22] [SPEAKER_01] I'm going to tie this back into React and React hooks too.
[00:56:25] [SPEAKER_01] Like there is an aspect that React has its own render model and it's not like reactive in the same way.
[00:56:31] [SPEAKER_01] But they got everyone to start writing stuff in terms of state,
[00:56:35] [SPEAKER_01] derived state and side effects.
[00:56:37] [SPEAKER_01] Like there is a language here
[00:56:40] [SPEAKER_01] that's very clear and it's interesting,
[00:56:43] [SPEAKER_01] like it interests me to no end to see like even Svelte
[00:56:47] [SPEAKER_01] and like let the dollar sign variable
[00:56:50] [SPEAKER_01] and dollar sign expression,
[00:56:51] [SPEAKER_01] like you see these same three language primitives
[00:56:55] [SPEAKER_01] show up over and over and over again.
[00:56:57] [SPEAKER_00] Yeah, I remember this article of yours where you just basically put all those different syntaxes that sometimes like looked widely different, but like just pointing out like, hey, this is the same set of primitives that we are talking about.
[00:57:09] [SPEAKER_01] I know what you're talking about because I had to look it up a week ago because I was trying to find out the first place I used the term fine-grained reactivity.
[00:57:16] [SPEAKER_01] And...
[00:57:17] [SPEAKER_01] It's funny because in this article, which I talk all about fine green reactivity, I actually include knock react in the category, even though react is not like in the pure state.
[00:57:26] [SPEAKER_01] Yeah, actually, you know what?
[00:57:27] [SPEAKER_01] I'm going to pop this up on my screen, my screen up on here for two seconds to show what I was talking about here.
[00:57:33] [SPEAKER_01] And let me blow this up.
[00:57:34] [SPEAKER_01] I was kind of commenting that if you took knockout from 2010 and go observable and like get the value, set the value view, you know,
[00:57:43] [SPEAKER_01] There's like dot value solid.
[00:57:45] [SPEAKER_01] There's this tuple mobx.
[00:57:46] [SPEAKER_01] There's this dot data on their box.
[00:57:49] [SPEAKER_01] This is a, I think it was, oh, I just put it in an object here for this sake.
[00:57:53] [SPEAKER_01] I could have used their box observable use date,
[00:57:55] [SPEAKER_01] but I actually went through and it was like,
[00:57:57] [SPEAKER_01] okay, they have the concept of,
[00:57:58] [SPEAKER_01] observable or state. They have the concept of derived state or computed, which again is knockout pure computed.
[00:58:06] [SPEAKER_01] This is 2010. Like this, if you want the map, you can go to react and go use memo.
[00:58:11] [SPEAKER_01] Like it's very, you know, there's no getter, but they have a dependency rate.
[00:58:16] [SPEAKER_01] Like you can still kind of see similarities computed in view, create memo in solid, computed in mob X. It's like same thing.
[00:58:24] [SPEAKER_01] And then finally, the side effects.
[00:58:27] [SPEAKER_01] Again, in Knockout, they just had computed.
[00:58:30] [SPEAKER_01] They didn't really differentiate.
[00:58:31] [SPEAKER_01] I guess there was pure computed in Knockout.
[00:58:33] [SPEAKER_01] Yeah, pure computed.
[00:58:34] [SPEAKER_01] So their effects were computed.
[00:58:36] [SPEAKER_01] View head watch.
[00:58:37] [SPEAKER_01] Solid, crate effect.
[00:58:38] [SPEAKER_01] MobX, auto run.
[00:58:39] [SPEAKER_01] And this.
[00:58:40] [SPEAKER_01] And if you look at all of these,
[00:58:42] [SPEAKER_01] I didn't include Svelte, unfortunately,
[00:58:43] [SPEAKER_01] but I could have put Svelte in here as well for all three.
[00:58:45] [SPEAKER_01] It had been let.
[00:58:47] [SPEAKER_01] Then it would have been dollar sign colon $.
[00:58:51] [SPEAKER_01] whatever variable equals something and then dollar sign colon console log.
[00:58:57] [SPEAKER_01] You can see that like these are all remarkably similar, like just like like
[00:59:04] [SPEAKER_01] it's a matter of like changing some some function names and use like calling a function or dot value or whatever like this language is ubiquitous across a lot of UI frameworks um yeah and the sets and the set of concepts is so small right like that that's I think that the beauty of it that it's conceptual surface here is so reduced right like if you if you see like if you look past the syntax differences
[00:59:29] [SPEAKER_00] uh then like you end up with the three pieces to play with and that's uh right right and this is a
[00:59:36] [SPEAKER_01] stark contrast to something like rxjs which tells you like okay there are a couple of those
[00:59:41] [SPEAKER_01] concepts there are things like observables which are the atomic state but there's also things like
[00:59:45] [SPEAKER_01] but not even atomic state they're actually observables are actually streams and then there's
[00:59:49] [SPEAKER_01] subjects and behavior subjects and I wouldn't be able to tell you the difference between those two
[00:59:53] [SPEAKER_01] at the moment. I always confuse those two together and then you so you have these very
[00:59:58] [SPEAKER_01] you have a few of these base primitive
[01:00:00] [SPEAKER_00] or concepts, and then you tag on 60 operators or so.
[01:00:04] [SPEAKER_00] Or I don't know what the current count is.
[01:00:05] [SPEAKER_00] I remember one time it was about 120,
[01:00:07] [SPEAKER_00] and then it got shrunk down and streamlined.
[01:00:10] [SPEAKER_00] And now I think there's like a healthy, as I said,
[01:00:13] [SPEAKER_00] like, I don't know, it's like 50 or 60-ish operators
[01:00:16] [SPEAKER_00] that kind of define this.
[01:00:18] [SPEAKER_00] What's interesting about this, I have my opinions.
[01:00:22] [SPEAKER_00] Actually, maybe you can tell me what's interesting,
[01:00:23] [SPEAKER_00] but I think I'd rather hear it from you guys
[01:00:24] [SPEAKER_00] than me repeating what I always say.
[01:00:27] [SPEAKER_01] So I think like, I mean,
[01:00:30] [SPEAKER_01] The one thing that I want to say upfront is that like, you know, it's easy to say like, oh, you know, like with signals, we've got three concepts and everything is beautiful and we derive state and respond to side like with side effects and, and that's great.
[01:00:45] [SPEAKER_01] And you go to the RxGS world and you've got those dozens of operators and you need to learn them all and master them and it's hard.
[01:00:53] [SPEAKER_01] So people kind of tend to draw like conclusions or like one is.
[01:00:57] [SPEAKER_01] quote-quote better or like easier or like better suited or something great like this but i think
[01:01:03] [SPEAKER_01] it's super important question like question to us like why there is a difference right like why
[01:01:09] [SPEAKER_01] um are those the same systems and we're comparing like you know number of operators just to have
[01:01:14] [SPEAKER_01] fun or there is something fundamentally different and and my understanding is that those
[01:01:21] [SPEAKER_01] are fundamentally different systems
[01:01:23] [SPEAKER_01] uh and for me the eye-opening um talk uh was and i will try to drop it on the chat in um
[01:01:32] [SPEAKER_01] uh in in youtube in a moment but uh there is this uh talk from connell elliot uh i think it's kind
[01:01:39] [SPEAKER_01] of essence of functional programming something i will i will pause the the link but essentially
[01:01:44] [SPEAKER_01] it draws the distinction between
[01:01:47] [SPEAKER_01] a stream of events and something that the talks called behaviors.
[01:01:53] [SPEAKER_01] And you've got behavior subject.
[01:01:55] [SPEAKER_00] Right, and that's the thing is behavior subjects are actually very similar to signals.
[01:02:00] [SPEAKER_00] Like there is a concept in Rx that exists that you could say is equivalent.
[01:02:06] [SPEAKER_00] It's not the observables.
[01:02:07] [SPEAKER_00] This is why I actually went with the term signal in case anyone knew.
[01:02:11] [SPEAKER_00] It's just like, it was getting really confusing because Knockout called them observables,
[01:02:15] [SPEAKER_00] MobX called them observables, but then also RX called something different observable.
[01:02:20] [SPEAKER_00] And I was like, okay.
[01:02:22] [SPEAKER_00] I was introduced to the knockout MobX way first, but at the time period at which I was working on Solid,
[01:02:30] [SPEAKER_00] RX was like the more known solution, even though it wasn't always that way.
[01:02:34] [SPEAKER_00] They flipped.
[01:02:35] [SPEAKER_00] And I was like, okay, I'm not going to fight with like over the term observable.
[01:02:39] [SPEAKER_00] And on the other hand, I'm not going to like be calling my primitives behavior subjects.
[01:02:44] [SPEAKER_00] Like, like, like picture if you're like,
[01:02:47] [SPEAKER_00] use behavior subject.
[01:02:49] [SPEAKER_00] Like that's your framework.
[01:02:50] [SPEAKER_00] Like count equals use behavior subject.
[01:02:54] [SPEAKER_01] Right.
[01:02:55] [SPEAKER_01] And it's kind of like...
[01:02:57] [SPEAKER_01] So if we kind of like agree that those are those two concepts of like stream of events, right?
[01:03:03] [SPEAKER_01] Like and behaviors.
[01:03:05] [SPEAKER_01] So like Eric's is just wonderful at modeling the stream of events and dealing with the notion of time, right?
[01:03:12] [SPEAKER_01] Like the events are just like naturally happening.
[01:03:14] [SPEAKER_01] Like, oh, like, you know, like something happened, something like you clicked here, you clicked there.
[01:03:19] [SPEAKER_01] and so on. So like maybe there is some time between those two clicks and those like
[01:03:24] [SPEAKER_01] Eric's just is just like fantastic at modeling it.
[01:03:28] [SPEAKER_01] Right. But there's this other side of the activity where we're talking about behaviors, which are just like values, right?
[01:03:35] [SPEAKER_01] Like there is a value it can change and it can tell you that it changed, but it completely removes the notion of time.
[01:03:43] [SPEAKER_01] Right.
[01:03:44] [SPEAKER_01] So the fact that we've got just one operator in signals, it's not because we invented something smarter or maybe we just like had some, you know, like unique insights.
[01:03:55] [SPEAKER_01] We just like look at the other.
[01:03:58] [SPEAKER_00] side of the problem so to speak well it's if you remove time from the equation almost any
[01:04:06] [SPEAKER_00] relationship can be expressed as like a bunch of expressions like exactly you can be like it's
[01:04:11] [SPEAKER_00] this plus this or this time this or yes iterated into and pushed into this or like like you can
[01:04:17] [SPEAKER_00] almost always express any kind of relationship as a combination of some kind of just basically some kind of
[01:04:23] [SPEAKER_00] kind of imperative like code.
[01:04:25] [SPEAKER_00] It's in a bubble.
[01:04:26] [SPEAKER_00] It's wrapped in a function or call or something,
[01:04:28] [SPEAKER_00] but you can basically describe any relationship that way.
[01:04:30] [SPEAKER_00] And this is very different where when you have time involved,
[01:04:35] [SPEAKER_00] like you have callbacks, you have promises,
[01:04:37] [SPEAKER_00] you have like, like you almost pushed into a place
[01:04:40] [SPEAKER_00] where you actually have to define what the operation is
[01:04:44] [SPEAKER_00] if you want to make it more declarative.
[01:04:47] [SPEAKER_00] Otherwise, like there's no system to be spoken of.
[01:04:49] [SPEAKER_00] It's just like,
[01:04:51] [SPEAKER_00] you know, this and then, yeah.
[01:04:55] [SPEAKER_02] For me, I think like the biggest difference that I see there between this like stream of events,
[01:05:03] [SPEAKER_02] right, and then this concept of a behavior of a value changing,
[01:05:06] [SPEAKER_02] and the value does change over time, is like, can you ask the question, what is the current value?
[01:05:13] [SPEAKER_02] And behaviors like this kind of live in this synchronous world where it always has a value.
[01:05:20] [SPEAKER_02] Yeah, you can always inquire like what is the value of this thing you can use it in a computation when you derive another value and you can kind of like transitively ask this question of like what is the current value of this expression right it doesn't make sense to ask like what's the current click event.
[01:05:36] [SPEAKER_02] You could ask what's the most recent one, but like this concept of a stream of click events has no current state.
[01:05:44] [SPEAKER_00] Yeah, yeah, it's not it's not like a it's not like a variable itself.
[01:05:48] [SPEAKER_00] Like it's not like a value.
[01:05:49] [SPEAKER_00] Like it's like it's not like here's my count or here's my like thing that you hold.
[01:05:54] [SPEAKER_00] It's like this is like my container that things flow through.
[01:05:57] [SPEAKER_00] I don't know.
[01:05:58] [SPEAKER_00] It's I wonder about.
[01:05:59] [SPEAKER_00] uh this part of it is because the stream part or the observable part of rx is very well developed out
[01:06:07] [SPEAKER_00] but i never understood the behavior subject part it was more is like it was like is this just
[01:06:11] [SPEAKER_00] like a fancy version of subscribing or something like i never could figure out what it was there
[01:06:17] [SPEAKER_00] but like did it do anything like
[01:06:19] [SPEAKER_02] It is very much like accurately representing this concept of a behavior, right?
[01:06:24] [SPEAKER_02] It has a current value behavior.
[01:06:26] [SPEAKER_02] The difference between that and normal subject is that it has a value always.
[01:06:31] [SPEAKER_02] And you can ask it directly dot get value.
[01:06:34] [SPEAKER_02] It will tell you its current value.
[01:06:36] [SPEAKER_02] I do.
[01:06:37] [SPEAKER_02] It's not very well integrated into RxJS.
[01:06:40] [SPEAKER_02] Because the moment you do something with this behavior subject, like map it, right?
[01:06:45] [SPEAKER_02] Which is just, I want to almost create a computed, a derived expression.
[01:06:49] [SPEAKER_02] You completely lose this connection to the fact that it was a behavior, that it had a current value.
[01:06:54] [SPEAKER_02] Yeah.
[01:06:54] [SPEAKER_02] Yeah.
[01:06:54] [SPEAKER_02] This is what I...
[01:06:56] [SPEAKER_02] The world of like subscribe and maybe it'll tell you something at some point.
[01:06:59] [SPEAKER_01] So we naturally gravitate toward like, you know, stream of events.
[01:07:02] [SPEAKER_01] Even if you start with behaviors and you want to like stay in this world,
[01:07:06] [SPEAKER_01] like you just like no dice.
[01:07:07] [SPEAKER_01] Like I mean, you apply operator and...
[01:07:10] [SPEAKER_00] You're actually describing one of my early experiments.
[01:07:13] [SPEAKER_00] I was working on SolidNet.
[01:07:14] [SPEAKER_00] I saw that the TC39 had dropped object dot observe
[01:07:18] [SPEAKER_00] and that there was a new observable spec.
[01:07:21] [SPEAKER_00] And I was like, okay, I'm not going to invent a new...
[01:07:24] [SPEAKER_00] signal type thing. I'm going to use observables and then I'm like, okay, I will use behavior.
[01:07:28] [SPEAKER_00] There's a version of solid. I joked about how I wasn't going to have used behavior or whatever.
[01:07:33] [SPEAKER_00] If you go far back enough in the commits, you'll see like new subject. I actually use the term
[01:07:38] [SPEAKER_00] subject as like the primitive. And I went this way and my problem was exactly what you said. I just started
[01:07:48] [SPEAKER_00] Because I got into the templating system, and I started just turning every observable.
[01:07:53] [SPEAKER_00] I started like just every operator.
[01:07:55] [SPEAKER_00] I started like patching it so that it could be like have its last value.
[01:07:58] [SPEAKER_00] It just, I was fighting the system so hard.
[01:08:01] [SPEAKER_00] And then I was like, what if I don't?
[01:08:02] [SPEAKER_00] Because the thing, async pipe.
[01:08:05] [SPEAKER_00] My guess, and I don't know, it's a bit like how Preact handles signals in the VDOM.
[01:08:10] [SPEAKER_00] Like the pipe's got to get to the final view representation.
[01:08:14] [SPEAKER_00] You can't be in your template and be like, oh, it's I have this value X.
[01:08:19] [SPEAKER_00] And actually right here, I need to format it or I need to multiply it by two.
[01:08:23] [SPEAKER_00] You have to put the times two in the RX stream to actually get it to pipe in there.
[01:08:29] [SPEAKER_00] Like you can't just be like, you know, I've got.
[01:08:32] [SPEAKER_02] Actually, you can.
[01:08:34] [SPEAKER_02] because we in the async pipe we have a placeholder value so before the rx stream produces anything
[01:08:43] [SPEAKER_02] async pipe will return you null um and your time to better work with that down downstream right
[01:08:49] [SPEAKER_02] okay so you guys have to write a headache for people to deal with this but yes we convert
[01:08:53] [SPEAKER_02] from the asynchronous world to the synchronous world okay so that's cool i was doing that
[01:08:58] [SPEAKER_00] and i was just like why am i so this seems like craziness like like okay so but
[01:09:04] [SPEAKER_00] I've always entertained when I hear people have gone down that other path and actually
[01:09:09] [SPEAKER_00] had it work for them because sometimes you get, I think this happens a lot in software.
[01:09:12] [SPEAKER_00] You kind of go down a certain way and you're like, this is like a lot of effort.
[01:09:16] [SPEAKER_00] But then it's like, if you have the right incentive, you might be able to find something
[01:09:21] [SPEAKER_00] and it might actually be kind of cool.
[01:09:23] [SPEAKER_00] But okay, so that's good.
[01:09:25] [SPEAKER_00] That was solved.
[01:09:26] [SPEAKER_01] But just from my own experience, this was like, you know, it was half solved.
[01:09:29] [SPEAKER_01] Right.
[01:09:30] [SPEAKER_01] Like because before the observable emits, we cannot give you the value.
[01:09:33] [SPEAKER_01] We cannot magically go and find it.
[01:09:35] [SPEAKER_01] Right.
[01:09:35] [SPEAKER_01] Like so the best we can do is to give you null.
[01:09:37] [SPEAKER_01] And if you like when writing an expression, like as Alex said,
[01:09:40] [SPEAKER_01] like you better be prepared to handle it.
[01:09:42] [SPEAKER_01] Right.
[01:09:42] [SPEAKER_00] Like, yeah, I mean, I'm OK with that.
[01:09:44] [SPEAKER_00] I mean, it's more don't denoted in solid, but like we have async
[01:09:49] [SPEAKER_00] signal primitives like resources.
[01:09:50] [SPEAKER_00] Those are going to be null.
[01:09:53] [SPEAKER_00] just because like they're known.
[01:09:56] [SPEAKER_00] Mind you, that is not every single signal in the whole system.
[01:10:00] [SPEAKER_00] you've you sure yeah so yeah but okay i i'm i'm i'm i'm following along so far so so so the other
[01:10:08] [SPEAKER_02] i think like the current value is a big big deal right like the the other thing that we we uh i
[01:10:15] [SPEAKER_02] think is that you know the notion of the code versus cut of cold observables right like the if
[01:10:21] [SPEAKER_02] when we are talking about signals they are
[01:10:24] [SPEAKER_02] I don't know, I'm hesitating, like they say, always hot, right?
[01:10:28] [SPEAKER_02] Like because they always do have the value.
[01:10:30] [SPEAKER_02] Like, so the act of subscribing or reading doesn't have like side effects at the distance, right?
[01:10:38] [SPEAKER_02] You can read the value without causing like network requests or something like that.
[01:10:42] [SPEAKER_00] Right.
[01:10:43] [SPEAKER_00] Yeah.
[01:10:43] [SPEAKER_00] Maybe we should stop there.
[01:10:44] [SPEAKER_00] Because I actually haven't done a deep Rx stream.
[01:10:47] [SPEAKER_00] So people might not know the hot versus cold thing.
[01:10:51] [SPEAKER_00] And it, and I guess another one is unicast versus multicast.
[01:10:55] [SPEAKER_00] These are, those two often go, go hand in hand.
[01:10:59] [SPEAKER_00] And I don't know if I want to draw the pseudocode for this for someone, but the example that
[01:11:04] [SPEAKER_00] I usually give for this is it's like, at least for the multicast unicast thing is, it's
[01:11:10] [SPEAKER_00] like, it's like the difference between if, and this is more me talking signal land, so
[01:11:16] [SPEAKER_00] maybe the angular audience doesn't hit as well, but like picture if every time you
[01:11:21] [SPEAKER_00] like let's pretend you have a counter where you click a button and you and that that event kind
[01:11:28] [SPEAKER_00] of like pipes into uh some kind of like scan or reduce thing where it just adds the value on so
[01:11:37] [SPEAKER_00] we're every time you click it's plus one plus one plus one plus one the the the idea of unicast
[01:11:45] [SPEAKER_00] or some multicast it kind of is the idea that like every time a new person
[01:11:51] [SPEAKER_00] like subscribes or the first person,
[01:11:56] [SPEAKER_00] like basically if no one subscribes to this stream
[01:12:00] [SPEAKER_00] or whatever, there's no event listener.
[01:12:03] [SPEAKER_00] Like there's no producer.
[01:12:04] [SPEAKER_00] It doesn't exist.
[01:12:05] [SPEAKER_00] And that's what it means by being cold.
[01:12:07] [SPEAKER_00] The act of actually subscribing to, you know,
[01:12:11] [SPEAKER_00] the count downstream or whatever
[01:12:13] [SPEAKER_00] is actually what causes the event listener
[01:12:15] [SPEAKER_00] to get added to the DOM.
[01:12:17] [SPEAKER_00] So like it's the producer.
[01:12:19] [SPEAKER_00] And then the difference between single cast and multicast would be every time there's a new subscriber, you add another event listener.
[01:12:27] [SPEAKER_00] Like if it's unicast, because essentially it creates its own producer.
[01:12:31] [SPEAKER_00] And so if you have five things listen to count, there's five event listeners.
[01:12:35] [SPEAKER_00] Now, obviously no one would actually write their code this way.
[01:12:37] [SPEAKER_00] But this is like the most base level of the default of the way observables work is that
[01:12:44] [SPEAKER_00] Every time someone goes, I care about count, it'll add their own event listener and then do their scanning and then come out the other end.
[01:12:53] [SPEAKER_00] Whereas in a hot system, well, the second that you say I'm going to like subscribe to, you know, like I'm going to do something based on event, then the event listener is added.
[01:13:05] [SPEAKER_00] And then with a multicast, any additional subscribers just get added to a list.
[01:13:11] [SPEAKER_00] And then you so one event.
[01:13:12] [SPEAKER_00] triggers multiple things.
[01:13:16] [SPEAKER_00] I don't know. Is that explanation okay?
[01:13:19] [SPEAKER_00] Fantastic.
[01:13:20] [SPEAKER_01] Yeah. And, you know, adding extra
[01:13:22] [SPEAKER_01] event listeners, right, is just like, that's
[01:13:24] [SPEAKER_01] probably, you know, you don't want to do
[01:13:26] [SPEAKER_01] that from a performance standpoint, but it's not going to hurt you
[01:13:28] [SPEAKER_01] too bad. In RxJS,
[01:13:31] [SPEAKER_01] you know, you can have an observable that
[01:13:32] [SPEAKER_01] represents an HTTP request. And that
[01:13:35] [SPEAKER_01] request isn't made until you subscribe,
[01:13:37] [SPEAKER_01] right, because the observable is cold.
[01:13:39] [SPEAKER_01] It's not doing anything unless you ask it to.
[01:13:42] [SPEAKER_01] But every subscriber
[01:13:44] [SPEAKER_01] is a new HTTP request that goes to your back end.
[01:13:47] [SPEAKER_01] And this is a common mistake that people make in Angular
[01:13:50] [SPEAKER_01] as if they have their HTTP request observable
[01:13:53] [SPEAKER_01] and they want to use the result in two places in the template.
[01:13:56] [SPEAKER_00] They do two hits twice.
[01:13:58] [SPEAKER_01] They get two subscriptions and they fire two RPCs.
[01:14:01] [SPEAKER_01] And you have to know as a developer
[01:14:03] [SPEAKER_01] that this is going to happen and be able to, like,
[01:14:05] [SPEAKER_01] okay, I need to convert this thing from, you know,
[01:14:08] [SPEAKER_01] unicast to multicast and make it hot and...
[01:14:11] [SPEAKER_01] Then you can kind of safely use it in multiple places.
[01:14:15] [SPEAKER_00] It always was interesting about that default.
[01:14:17] [SPEAKER_00] And I think it comes a lot with RX's root and where it came from.
[01:14:22] [SPEAKER_00] Because Andre Stoltz, creator of Cycle.js, made Xtreme.
[01:14:26] [SPEAKER_00] Xtreme, yeah.
[01:14:27] [SPEAKER_00] And this was the moment that I really started understanding.
[01:14:29] [SPEAKER_00] Because this is right when I was working on this stuff.
[01:14:31] [SPEAKER_00] It was like 2016.
[01:14:32] [SPEAKER_00] And I was playing around with the observable stuff.
[01:14:34] [SPEAKER_00] And he was like, I like observables.
[01:14:36] [SPEAKER_00] He's like, but for his version of the library, for his UI, he was like, I'm actually going to change it.
[01:14:42] [SPEAKER_00] I'm going to actually make them hot and multicast by default.
[01:14:45] [SPEAKER_00] Like he actually changed the default.
[01:14:48] [SPEAKER_00] And he's like, look, I get why Rx is this way.
[01:14:50] [SPEAKER_00] I'm not going to try and go in and change Rx.
[01:14:52] [SPEAKER_00] But he's like, for building user UIs, I actually think this is the wrong default.
[01:14:56] [SPEAKER_00] Yeah.
[01:14:57] [SPEAKER_00] So, yeah, it's interesting because I think one of the challenges here, especially the kind of angular conversation, the deep rooting in RX is that like
[01:15:09] [SPEAKER_00] These do solve different problems and they are actually each particularly suited for their problem.
[01:15:17] [SPEAKER_00] Like if things are asynchronous and, you know, you're doing these transformations over time,
[01:15:23] [SPEAKER_00] RX is still the best tool for doing that.
[01:15:25] [SPEAKER_00] But what's interesting, I guess, with the signals approach is it's basically synchronous.
[01:15:31] [SPEAKER_00] I mean, you can do stuff that's async.
[01:15:33] [SPEAKER_00] It's not like it's preventative, but like basically the guarantees and everything are built around it are that it's synchronously propagates that like you change something, you know that everything within that tick or whatever will have updated to reflect the new value, all the derived values.
[01:15:48] [SPEAKER_00] And that's like a, it's a very different sort of set of guarantees or thinking that kind of goes along with that.
[01:15:56] [SPEAKER_00] Because I mean, it's great for stuff like templating, like we're talking about, where you use something in a dozen places.
[01:16:02] [SPEAKER_00] And it can be dynamic because when you look at expressions, you know, and you're like, you can put a conditional in a computer to go like, if this condition, do this, else do this.
[01:16:10] [SPEAKER_00] And suddenly...
[01:16:11] [SPEAKER_00] What depends gets dependent on can change you don't need to like pipe it or fork it or do any kind of like operation there
[01:16:18] [SPEAKER_00] You literally just go look if if we care about showing the full name show first name plus last name else show
[01:16:25] [SPEAKER_00] Just the first name and
[01:16:27] [SPEAKER_00] If you wire it like that if the last name updates when it's off-screen or like not being computed
[01:16:34] [SPEAKER_00] Well, nothing needs to update like conceptually because
[01:16:37] [SPEAKER_00] it's just not part of that flow.
[01:16:39] [SPEAKER_00] And I think, I mean, I haven't talked about guarantees yet
[01:16:42] [SPEAKER_00] or kind of probed you guys into like your algorithm
[01:16:44] [SPEAKER_00] or what you approached it,
[01:16:46] [SPEAKER_00] but signals are really quite good for synchronizing state.
[01:16:51] [SPEAKER_00] Like they're not good for async transformations,
[01:16:53] [SPEAKER_00] but they're really, really good for keeping things in sync with each other.
[01:16:57] [SPEAKER_02] And I think that's kind of important to highlight that when you look at RxGS, it's not like one versus another.
[01:17:03] [SPEAKER_02] It's like we need a quote, quote, reactive primitive for the framework, for the core of like something that we could like build the whole framework on top of.
[01:17:12] [SPEAKER_01] For templating, yeah.
[01:17:14] [SPEAKER_02] And when you look at those properties of RxGS, we said like, no, we want something probably that is more hot that is
[01:17:22] [SPEAKER_02] uh synchronous in nature that is really good at data synchronization that can kind of you know like
[01:17:28] [SPEAKER_02] keep state in sync um and that's side effect free right so so this is more a statement of like what
[01:17:36] [SPEAKER_02] we what we need in the framework versus like it's not a statement about the xgs I think like there are
[01:17:41] [SPEAKER_02] like people could come with just beautiful usages right like if you see those auto complete demos
[01:17:47] [SPEAKER_02] like you just like just try to do it with signals like just like yeah or promises even like with
[01:17:53] [SPEAKER_00] promises it's even exactly or and it's got like retries and stuff like I've seen some stuff like
[01:18:00] [SPEAKER_00] yeah where there's been like like I remember something yeah I've watched
[01:18:05] [SPEAKER_00] Ton of Ben Lesh's streams and you like are like talks and you see where he's like, you know at Netflix
[01:18:10] [SPEAKER_00] We had this problem and then he's like here was the original code and he scrolls through like three pages and then he was like
[01:18:15] [SPEAKER_00] Here's it in five lines in RxJS
[01:18:18] [SPEAKER_00] And there's a certain amount of like okay
[01:18:20] [SPEAKER_00] You need to know what those operators are doing but once you follow it you're just like oh, okay
[01:18:24] [SPEAKER_00] Yeah, it's I'm like just drawing like a flow chart. I'm like take this data split it here and
[01:18:30] [SPEAKER_00] Do this if it fails retry do like there is like this logic kind of stuff on the flip side
[01:18:36] [SPEAKER_00] I remember about a two years ago
[01:18:38] [SPEAKER_00] I think it was someone was like really happy about something they put together in an angular view and they're like look check out
[01:18:43] [SPEAKER_00] This code sample of like how we're handling this like very simple case
[01:18:47] [SPEAKER_00] and I scratched my head for myself, I'm like,
[01:18:49] [SPEAKER_00] this is like a three line component in React or Solid or like anyone.
[01:18:53] [SPEAKER_00] And it's like, it was literally like 70 lines of Angular to do it
[01:18:58] [SPEAKER_00] because it was using a bunch of operators and it was like doing all that.
[01:19:01] [SPEAKER_00] And it was like, it was almost like a one liner.
[01:19:04] [SPEAKER_00] And it was like, it was because the problem space
[01:19:06] [SPEAKER_00] I was trying to solve was very different.
[01:19:09] [SPEAKER_00] And I think there's the little friction or like,
[01:19:11] [SPEAKER_00] it's not friction, these things actually can work together really well.
[01:19:14] [SPEAKER_00] In fact, I think,
[01:19:16] [SPEAKER_00] would you guys say that signals working with rx almost works better like works considerably
[01:19:21] [SPEAKER_00] better than like zone working with rx absolutely yeah no no question yeah right because i guess
[01:19:28] [SPEAKER_00] they're just behavior subjects so if rx knows how to feed a behavior subject into a stream or get
[01:19:33] [SPEAKER_00] a behavior subject from a stream it knows how to get a signal essentially from a stream or into a
[01:19:39] [SPEAKER_00] stream in our case we just added a from operator i'm sure it would be very similar kind of mechanism
[01:19:46] [SPEAKER_01] Yeah, we actually just put up a PR with that exact code.
[01:19:50] [SPEAKER_01] So we have the two, the bidirectional transformation, right, of like
[01:19:54] [SPEAKER_01] signal from observable and observable from signal.
[01:19:57] [SPEAKER_00] Yeah, yeah, yeah.
[01:19:58] [SPEAKER_00] I mean, this just kind of...
[01:20:00] [SPEAKER_00] of fits hand in hand and i think i think it's it's honest you kind of go like rx is good for my
[01:20:05] [SPEAKER_00] streams signals are good for my reactivity or not reactivity so what's the right synchronization
[01:20:12] [SPEAKER_00] you know my values and this is really easy actually to see where they hand off with each other
[01:20:18] [SPEAKER_01] yeah and and the kind of conversion from hds to a to a signal it's trivial right like because
[01:20:24] [SPEAKER_01] like every time like something falls off the stream like you just kind of
[01:20:28] [SPEAKER_01] almost cache it on the signal or whatever right like you've got this like this is the latest value
[01:20:32] [SPEAKER_02] that got emitted and so so this transformation so yeah and you actually connect the reactivity of
[01:20:38] [SPEAKER_02] these two worlds so it's not like you're you're like transforming it into a signal that is then like
[01:20:44] [SPEAKER_02] not notifying when the stream emits or something like that like you're able to carry this um you know
[01:20:49] [SPEAKER_01] notion of the value notification yeah yeah across that boundary
[01:20:54] [SPEAKER_00] Yeah, so I mean that's that's incredibly powerful stuff but okay I'm trying to think okay give me give me a second here because where do we want to take this next because we've talked this this starts making a lot of sense like we're like thinking you're like okay
[01:21:11] [SPEAKER_00] So this is like additive and it on one hand, but actually kind of hopefully maybe I mean,
[01:21:17] [SPEAKER_00] I guess I got to ask you guys, I mean this a little bit like further down on the list of topics,
[01:21:20] [SPEAKER_00] but like is the hope here that like that Zone.js just kind of rides out into the sunset,
[01:21:26] [SPEAKER_02] you know? I think it will be a very long journey for Zone.js towards that sunset.
[01:21:33] [SPEAKER_02] So, you know, Angular is a fairly well-used framework, particularly within Google.
[01:21:39] [SPEAKER_02] We have thousands of applications.
[01:21:42] [SPEAKER_02] Some of them, you know, in the double-digit million lines of code territory.
[01:21:46] [SPEAKER_02] And they are not removing Zone.js anytime soon, right?
[01:21:52] [SPEAKER_02] So Zone is with us for a while, but I think that the hope is that signals will be a better
[01:21:57] [SPEAKER_02] experience and will be a more desirable experience at that kind of scale.
[01:22:03] [SPEAKER_02] And gradually we can start to kind of shift our ecosystem away from this top-down check world model.
[01:22:11] [SPEAKER_00] Yeah.
[01:22:12] [SPEAKER_00] Yeah.
[01:22:12] [SPEAKER_00] Okay.
[01:22:13] [SPEAKER_00] Yeah.
[01:22:13] [SPEAKER_00] I had to ask because this kind of helps you position stuff.
[01:22:16] [SPEAKER_00] You can see like, okay, zone maybe overworks signals solves the same problem.
[01:22:23] [SPEAKER_00] part of the of the problem space.
[01:22:25] [SPEAKER_00] RX actually kind of stays where it is.
[01:22:28] [SPEAKER_00] I think the only interesting part for me about it on the interaction is RX,
[01:22:32] [SPEAKER_00] because of how maybe limiting certain parts of zone were,
[01:22:36] [SPEAKER_00] like was working a little bit too hard.
[01:22:40] [SPEAKER_00] Like this lets RX just like focus on what RX is good at.
[01:22:44] [SPEAKER_02] Yeah, and it avoids a lot of the, I think, the like foot guns that you end up with.
[01:22:50] [SPEAKER_02] If you try to take like RxJS asynchronous orchestration and force it to work synchronously in a template.
[01:22:57] [SPEAKER_02] Okay.
[01:22:58] [SPEAKER_02] These problems of like oversubscribing and triggering back end effects multiple times.
[01:23:02] [SPEAKER_02] But this is a really interesting thing to talk about, too, is that we have this zone-based world of Angular.
[01:23:09] [SPEAKER_02] We have this new signal system that we're planning, but they will need to coexist in the same framework for some time.
[01:23:18] [SPEAKER_02] So making these things work well together is a really interesting problem.
[01:23:23] [SPEAKER_00] Yeah, I can imagine.
[01:23:26] [SPEAKER_00] Yeah, because, I mean, on one hand, you have the really naive approach of like, oh, like
[01:23:31] [SPEAKER_00] if the signal trigger is playing to zone, but then it's like, you also are like, well,
[01:23:36] [SPEAKER_00] maybe we can do a little bit better there, you know, so.
[01:23:40] [SPEAKER_00] Okay, I'm trying to think, do you know where I want to go next?
[01:23:42] [SPEAKER_00] Because, okay, we've established why signals.
[01:23:45] [SPEAKER_00] We established what signals to a degree.
[01:23:47] [SPEAKER_00] If anyone still doesn't quite get it, do ask on the chat, you know, like, but...
[01:23:53] [SPEAKER_00] I've been just watching the chat and a lot of people, you know, just kind of talking about, you know, their experiences with Rx and Angular and kind of getting around the whole idea of async versus synchronous, you know, in this.
[01:24:06] [SPEAKER_00] So I think there's been a lot of stuff there.
[01:24:10] [SPEAKER_00] But what I actually want to talk about is like, okay, now you know, you're like, okay, I think this is the approach.
[01:24:15] [SPEAKER_00] How do you guys attack it?
[01:24:16] [SPEAKER_00] Like what kind of thinking went into designing it?
[01:24:21] [SPEAKER_00] What kind of properties?
[01:24:24] [SPEAKER_00] Like let's kind of like just talk about like...
[01:24:29] [SPEAKER_00] how you figured out, because like there's different solutions out there, right?
[01:24:33] [SPEAKER_00] Like you've obviously looked at stuff Solid did, but recently we've seen
[01:24:36] [SPEAKER_00] pre-act add signals and quick added signals.
[01:24:40] [SPEAKER_00] And obviously view has had their version kind of under the hood for years.
[01:24:44] [SPEAKER_00] And, you know, there's MobX.
[01:24:46] [SPEAKER_00] We can't not mention MobX.
[01:24:47] [SPEAKER_00] So basically we're the first ones to really show how you could like
[01:24:52] [SPEAKER_00] make certain guarantees.
[01:24:55] [SPEAKER_00] I didn't talk much about those guarantees earlier,
[01:24:57] [SPEAKER_00] but the synchronization isn't just because of nice syntax.
[01:25:00] [SPEAKER_00] It's that because of the way
[01:25:03] [SPEAKER_00] that the dependencies are tracked
[01:25:05] [SPEAKER_00] and it all happens synchronously,
[01:25:07] [SPEAKER_00] we actually know the complete graph
[01:25:09] [SPEAKER_00] at the time of execution,
[01:25:10] [SPEAKER_00] which means that it's possible,
[01:25:12] [SPEAKER_00] like we can solve the diamond problem.
[01:25:14] [SPEAKER_00] It's not just double fetching thing.
[01:25:16] [SPEAKER_00] You can have a state change
[01:25:18] [SPEAKER_00] fork into multiple different changes and then converge again.
[01:25:23] [SPEAKER_00] And you will know that any node in that whole graph will only render once off any
[01:25:29] [SPEAKER_00] give or run once off any given change.
[01:25:31] [SPEAKER_00] You don't have to worry about like,
[01:25:33] [SPEAKER_00] you hitting a node and reading an old value somewhere else and a current value here and like oh then
[01:25:40] [SPEAKER_00] that value updates and now you need to run that thing again like everything runs once um yeah
[01:25:45] [SPEAKER_01] let's just talk a little bit about that yeah so so like I think that they will dive into the
[01:25:50] [SPEAKER_01] like the whole like glitch free execution and and the algorithm but but I think it's also um
[01:25:58] [SPEAKER_01] important like how we got like to the particular design of the of the library.
[01:26:02] [SPEAKER_01] And I think it just almost happened naturally because if you look at the properties that we like,
[01:26:09] [SPEAKER_01] so like you say like, okay, hey, we don't want zone, we want reactive framework.
[01:26:13] [SPEAKER_01] At XGS is too async for our taste, like what is the other reactivity system?
[01:26:19] [SPEAKER_01] It's not like, oh, signals, it's the obvious choice, right?
[01:26:21] [SPEAKER_01] Like that wasn't the case at all, like for months.
[01:26:24] [SPEAKER_01] and we were like going back and forth through very different like places and whatnot
[01:26:29] [SPEAKER_01] But I think there are like some key properties that signals are giving us.
[01:26:35] [SPEAKER_01] And I know only one other solution, and we can talk about it.
[01:26:41] [SPEAKER_01] But just talking of those properties of the, quote, quote, reactive system,
[01:26:44] [SPEAKER_01] I think what was very important for me personally is that we do this reactive
[01:26:49] [SPEAKER_01] graph that is not tied to the component tree.
[01:26:52] [SPEAKER_01] It's like that my state...
[01:26:54] [SPEAKER_01] can leave, like data can flow differently.
[01:26:57] [SPEAKER_01] Like the data flow is not like tied to the how the visual things are flowing on a page, right?
[01:27:04] [SPEAKER_01] So the data flow is kind of independent from what I'm displaying.
[01:27:08] [SPEAKER_00] This is sometimes hard to describe.
[01:27:10] [SPEAKER_00] I actually did, I've done like multiple streams on this topic,
[01:27:13] [SPEAKER_00] like whole streams on this topic.
[01:27:15] [SPEAKER_00] And one I did recently was called rendering and reactivity.
[01:27:19] [SPEAKER_00] I did it back in December.
[01:27:20] [SPEAKER_00] The reason it's not obvious and it I actually one of your observations was actually really smart way of explaining it to people
[01:27:28] [SPEAKER_00] It's not quite how I usually explain or visualize it, but you you were saying that the when like it's kind of similar to when people ask me like what's the difference between
[01:27:36] [SPEAKER_00] recoil and
[01:27:38] [SPEAKER_00] Solid signals or whatever it was that that you said like one cared about read and one cared about write
[01:27:44] [SPEAKER_01] Can you talk about that for a bit? Right. Yeah, right. So so but like when I
[01:27:48] [SPEAKER_01] so like
[01:27:49] [SPEAKER_01] I think that the basic statement is that like, I want to stay to live anywhere, right?
[01:27:54] [SPEAKER_01] Like we always had in Anguera this dependency injection and people were used to pulling
[01:27:59] [SPEAKER_01] state out of the components to so-called services and like kind of shaping the state independently
[01:28:07] [SPEAKER_01] of the component tree.
[01:28:09] [SPEAKER_01] So it was important for us to preserve this property.
[01:28:16] [SPEAKER_01] The other kind of thing that we wanted,
[01:28:19] [SPEAKER_01] and I will go to the read-write distinction,
[01:28:20] [SPEAKER_01] but the other thing that we wanted is that like,
[01:28:22] [SPEAKER_01] okay, if I have a state in a component
[01:28:26] [SPEAKER_01] and that kind of my component grows bigger,
[01:28:28] [SPEAKER_01] and I want to pull this state out of a component,
[01:28:31] [SPEAKER_01] I shouldn't change the paradigm.
[01:28:33] [SPEAKER_01] Like I shouldn't be forced to rewrite this.
[01:28:36] [SPEAKER_01] Like, oh, now I need to go from, you know,
[01:28:39] [SPEAKER_01] in component compiler reactivity
[01:28:42] [SPEAKER_01] to some other form reactivity, right?
[01:28:44] [SPEAKER_01] Because it means like changing code,
[01:28:46] [SPEAKER_01] learning things and whatnot.
[01:28:49] [SPEAKER_01] So if you take those things together,
[01:28:53] [SPEAKER_01] you almost kind of are forced to say,
[01:28:56] [SPEAKER_01] like I need to create a dependency graph.
[01:28:58] [SPEAKER_01] Yeah, right. Like I need to really create like just like, oh, like I know who I know like where my state leaves and who depends on this on this state.
[01:29:09] [SPEAKER_01] And now if you've got the graph, now the question is who should render when something happens to this graph, right?
[01:29:19] [SPEAKER_01] Like is this the component that writes to the graph?
[01:29:23] [SPEAKER_01] that should re-render or the component that is actually reading the value from a graph that should re-render.
[01:29:30] [SPEAKER_01] And I think if you kind of set the stage like this, I think that the answer is obvious, right?
[01:29:35] [SPEAKER_01] Like you are interested in who reads the value out of the reactive graph.
[01:29:39] [SPEAKER_01] Like you don't care who sets it, that it could be actually set outside of the component.
[01:29:44] [SPEAKER_01] Right.
[01:29:44] [SPEAKER_01] Like you shouldn't.
[01:29:47] [SPEAKER_01] So in this sense for me, re-rending a component that is calling set state is...
[01:29:55] [SPEAKER_01] This is what I call like trapping reactivity in a component, right?
[01:29:58] [SPEAKER_01] Like it just kind of,
[01:30:00] [SPEAKER_01] I don't care who sets the value.
[01:30:02] [SPEAKER_01] I care who needs this value.
[01:30:04] [SPEAKER_00] It's, yeah, the funny thing is it's often a lot easier
[01:30:08] [SPEAKER_00] to tie it to the component that does the right.
[01:30:12] [SPEAKER_00] I think that's why you see this all over the place.
[01:30:15] [SPEAKER_01] Right, so it is easier technically,
[01:30:17] [SPEAKER_01] but I don't think this is what you want, right?
[01:30:20] [SPEAKER_00] Right.
[01:30:21] [SPEAKER_00] And I sometimes have to point this out
[01:30:23] [SPEAKER_00] because a lot of the framework internal mechanisms
[01:30:26] [SPEAKER_00] are built that way because they're very simple.
[01:30:27] [SPEAKER_00] They're like, look,
[01:30:28] [SPEAKER_00] update component, basically they have an update component function like that like set state is
[01:30:33] [SPEAKER_00] update component function. Even Svelte, uh, dollar sign invalidator, whatever that they compile in
[01:30:40] [SPEAKER_00] there when you, when you assign a value, it's calling update component. Um, like this is,
[01:30:46] [SPEAKER_00] this is kind of like,
[01:30:48] [SPEAKER_00] Yeah, I think I did a graph where I was trying to explain this, but I don't think it actually, I covered it on stream, but most of the solutions you find in the React space, other than say maybe like MobX or whatever, and a couple, there's a couple other ones, are this first type.
[01:31:04] [SPEAKER_01] Yeah.
[01:31:05] [SPEAKER_01] and and like i think also david from x state like talks about it quite a bit right like because he
[01:31:10] [SPEAKER_01] obviously has a state machine that which is like has nothing to do with the component so for him
[01:31:15] [SPEAKER_01] is very natural to say like oh you know my state like has absolutely nothing to do with the
[01:31:20] [SPEAKER_00] with the component you right and and for people the right distinction is like the
[01:31:26] [SPEAKER_00] is like the obvious one but like i will also point out that you will hit this and stuff like
[01:31:31] [SPEAKER_00] that right bit kind of happens to you under the hood sometimes.
[01:31:35] [SPEAKER_00] If you have a, like if you have a,
[01:31:37] [SPEAKER_00] if you have kind of like a reactive system that you're using in like React and
[01:31:41] [SPEAKER_00] you're not wrapping components yourself manually,
[01:31:43] [SPEAKER_00] like wrapping them in an observer or something like that,
[01:31:46] [SPEAKER_00] and you're using with a hook like a use somewhere,
[01:31:49] [SPEAKER_00] like that is the right pattern.
[01:31:52] [SPEAKER_00] Like basically when you go bring that hook into the scope and go use it,
[01:31:57] [SPEAKER_00] you're just telling it that like,
[01:31:58] [SPEAKER_00] this is the component that is updating.
[01:32:02] [SPEAKER_00] You're not saying where it's actually like the value is getting used or anything.
[01:32:05] [SPEAKER_00] You're like, this component is the thing.
[01:32:09] [SPEAKER_00] Like, so, yeah, I mean, there's some varying degrees.
[01:32:12] [SPEAKER_00] You could argue that's like a very coarse-grained read in a sense.
[01:32:15] [SPEAKER_00] Yes, yes.
[01:32:16] [SPEAKER_00] But it is still, it's just feeding back into React's write system.
[01:32:21] [SPEAKER_00] Because under the hood, you update the signal and then like, or whatever it is,
[01:32:25] [SPEAKER_00] and then React goes, oh, set state.
[01:32:27] [SPEAKER_01] Yeah, but like if you look at it from the Mobex perspective or whatever other like reactive system, like it really what triggers the whole thing is the right, but it's the component that actually like, you know, waits for this value is like, oh, it's falling into my lab.
[01:32:41] [SPEAKER_01] This is the component that is going to kind of update, right?
[01:32:45] [SPEAKER_01] So I guess we've got like different rights.
[01:32:47] [SPEAKER_01] Like we've got like on one hand, like a right to the reactive graph and then like the right to the right.
[01:32:54] [SPEAKER_01] react component, but this is almost like a technicality rather than the essence of the operation.
[01:32:59] [SPEAKER_00] Yeah, I was, I was, I pulled this up while we were talking. I don't know if it actually helps
[01:33:03] [SPEAKER_00] the conversation at first, but I was trying to show that there's like a full set of degrees of how,
[01:33:09] [SPEAKER_00] like how much the, what subscribes,
[01:33:12] [SPEAKER_00] whether it's on the right or like the point of entry, as I call it,
[01:33:16] [SPEAKER_00] or if it's based on where it's read.
[01:33:19] [SPEAKER_00] And yeah, maybe this is a little bit getting beyond this,
[01:33:23] [SPEAKER_00] but I imagine when you were looking at solutions for Angular,
[01:33:26] [SPEAKER_00] you're probably like, okay, like,
[01:33:29] [SPEAKER_00] Do I do something like this or just like like there's certain degrees in which you integrate with this thing I over generalize and say like VDOM or, you know, whatever.
[01:33:39] [SPEAKER_00] But this is the same regardless of the renderer.
[01:33:41] [SPEAKER_00] There's this question of like, is it that right thing?
[01:33:44] [SPEAKER_00] Is it a read based at a component level?
[01:33:46] [SPEAKER_00] Is it like direct pipe or whatever, which is like the third option essentially?
[01:33:51] [SPEAKER_00] Or is it like all in YOLO, right?
[01:33:54] [SPEAKER_00] So I think there's there's several options when you...
[01:33:58] [SPEAKER_00] kind of look at this problem and figure out what's you want to solve for what's comfortable for you
[01:34:04] [SPEAKER_01] know this framework that has a long history yeah no and and again like I mean like we were kind
[01:34:10] [SPEAKER_01] of almost starting from scratch in this sense like you know so we we had this benefit of like oh
[01:34:15] [SPEAKER_01] let's survey what is available let's survey like what we want from the system and and like you know
[01:34:20] [SPEAKER_01] look at this those pieces
[01:34:22] [SPEAKER_01] um so just kind of you know like again like you know state should not be trapped in a component
[01:34:27] [SPEAKER_01] it should be easy to refactor from component state to somewhere else and i want to be notified
[01:34:32] [SPEAKER_01] uh when the state i'm reading changes right like those are kind of the basic properties
[01:34:37] [SPEAKER_01] uh and then you you were hinting at like i want to have some guarantees
[01:34:43] [SPEAKER_01] like how my updates are traveling to this component
[01:34:48] [SPEAKER_01] that is interested, right?
[01:34:49] [SPEAKER_01] Like if I, let's say if I've got,
[01:34:51] [SPEAKER_01] I'm reading value in a component
[01:34:53] [SPEAKER_01] and I'm going to update it like 10 times in a row,
[01:34:56] [SPEAKER_01] should I like synchronously, right?
[01:34:58] [SPEAKER_01] Like should I like re-render this component
[01:35:00] [SPEAKER_01] or refresh this component 10 times
[01:35:02] [SPEAKER_01] or just like once, right?
[01:35:03] [SPEAKER_01] Like there's like different considerations.
[01:35:08] [SPEAKER_00] Yeah, I mean, I keep kind of pushing forward on the tech stuff because I love the techie stuff.
[01:35:13] [SPEAKER_00] Would you mind walking through with me like a simple diamond problem just to see how the like what the approach is for like a react like the way you guys like I know I'm jumping ahead a little bit but I'm just I'm just
[01:35:24] [SPEAKER_00] I'm just biting at the, like, I'm very interested to see what you guys have been putting together.
[01:35:29] [SPEAKER_00] So true.
[01:35:29] [SPEAKER_00] There's like the API question.
[01:35:31] [SPEAKER_00] So, I mean, maybe that's the part people more identify with because like, okay, let's, yeah, we'll get to the algorithm in a minute.
[01:35:37] [SPEAKER_00] Let's start.
[01:35:38] [SPEAKER_00] Let's start API thing.
[01:35:40] [SPEAKER_00] Can we, I'm just going to shift my screen around here a little bit and...
[01:35:44] [SPEAKER_00] Do you like or do you have a code example I can open up or something like what like send me the repo or something just
[01:35:51] [SPEAKER_00] Yeah, throw something up in the screen like what does this all look like for a second because sure sure sure like read me
[01:35:57] [SPEAKER_01] I guess Alex from or maybe stack but it's even no. Yeah, either is fine with me
[01:36:04] [SPEAKER_02] Maybe the the GDE stack puts that we did would be a good
[01:36:09] [SPEAKER_01] Let me find it
[01:36:15] [SPEAKER_01] I
[01:36:19] [SPEAKER_01] tick tick tick do just this again yeah it's all good you don't have to feel any pressure on this
[01:36:23] [SPEAKER_00] i'm gonna just drink some water right here how's everyone doing in chat actually you know what
[01:36:27] [SPEAKER_00] i miss looking at the twitch chat i i'm sorry i i've been really slow i missed some subs that
[01:36:32] [SPEAKER_00] happened i need to go all the way back because we've we've got we've got some people who've been
[01:36:37] [SPEAKER_00] subbing on the channel and i've been way too busy talking to these guys to to even give that
[01:36:42] [SPEAKER_00] the acknowledgement it deserves
[01:36:44] [SPEAKER_00] Let me see what I got here.
[01:36:46] [SPEAKER_00] I'm just going up.
[01:36:48] [SPEAKER_00] 00 hamster ZS00,
[01:36:50] [SPEAKER_00] subscribe to tier one for the second month.
[01:36:51] [SPEAKER_00] Thank you very much for the sub.
[01:36:53] [SPEAKER_00] And actually,
[01:36:54] [SPEAKER_00] I think even very cool comment here as well.
[01:36:59] [SPEAKER_00] Julian NG,
[01:37:01] [SPEAKER_00] giving five gift subs out.
[01:37:03] [SPEAKER_00] Thank you so much for that.
[01:37:04] [SPEAKER_00] It's awesome to see support of the channel.
[01:37:12] [SPEAKER_00] Yeah, sorry.
[01:37:13] [SPEAKER_00] This is my problem.
[01:37:14] [SPEAKER_00] I always forget to go back to Twitch
[01:37:17] [SPEAKER_00] and make sure that I,
[01:37:18] [SPEAKER_00] thank people for for contributing to the channel um it's it's great okay uh so we've got stack
[01:37:27] [SPEAKER_01] reads i've shared it on on chat perfect if you want to play it up then
[01:37:32] [SPEAKER_01] You can play actually with this and just like see what we are doing like live API review here.
[01:37:40] [SPEAKER_00] All right, okay. Sweet. So we have my understanding here.
[01:37:44] [SPEAKER_01] Do you want to share a screen or?
[01:37:46] [SPEAKER_00] It's like, do I have an open window of stacklets already debugging?
[01:37:51] [SPEAKER_00] It's funny because okay. Okay.
[01:37:54] [SPEAKER_00] Yeah, sorry. The reason I was taking a moment there is that there's this loading that never went away.
[01:38:00] [SPEAKER_00] Oh, yeah.
[01:38:01] [SPEAKER_00] It's actually probably in the index HTML yet.
[01:38:03] [SPEAKER_00] Yeah, exactly. Like the console, like things like that.
[01:38:06] [SPEAKER_00] Console does all the real work here.
[01:38:08] [SPEAKER_00] Okay, let's see if I can...
[01:38:09] [SPEAKER_00] I think there's a way that I can change the config here that I've done before,
[01:38:14] [SPEAKER_00] but I'm going to just be lazy and just plus it up.
[01:38:18] [SPEAKER_00] I need to make it a little bigger so people can see it.
[01:38:20] [SPEAKER_00] if i'm falling here you guys have signal effect and computed our three amigos that we've we've
[01:38:28] [SPEAKER_00] talked about before and essentially we've got a signal which you set initial value to
[01:38:35] [SPEAKER_00] and it gives us the signal and the signal
[01:38:37] [SPEAKER_00] can be can be called as a function to get its value or it has a dot set on it um which lets you set
[01:38:46] [SPEAKER_00] the next value it's funny this was one of the this was probably my favorite api just a side note
[01:38:52] [SPEAKER_00] my favorite api choice before i saw react hooks this was like my this was this was going to be
[01:38:57] [SPEAKER_00] my go-to before i saw it because i i'm a big fan here of of using functions for reads and a big fan of
[01:39:06] [SPEAKER_00] you know, making it clear that it's separate, that there's a read and a write.
[01:39:12] [SPEAKER_01] Yeah, and even if we wanted, we couldn't use the like React style, right?
[01:39:17] [SPEAKER_01] Like because we are class based, like our components are class based, so like we cannot destructure in a class.
[01:39:24] [SPEAKER_01] that wasn't an option, right?
[01:39:26] [SPEAKER_01] Like even if you wanted to copy or like just like take inspiration from solid,
[01:39:30] [SPEAKER_01] that wasn't the option for us.
[01:39:31] [SPEAKER_00] Yeah, but I mean, this is still, I'm actually, honestly, I'm just,
[01:39:36] [SPEAKER_00] I'm kind of happy, I want to hear about your reasoning,
[01:39:38] [SPEAKER_00] but I'm kind of happy you guys went with this.
[01:39:40] [SPEAKER_00] I know this is like, like bike shedding a little bit,
[01:39:42] [SPEAKER_00] but like everyone knows I'm not a big fan of the dot value side.
[01:39:46] [SPEAKER_00] Can you just speak into like how you came up,
[01:39:48] [SPEAKER_00] like you mentioned already classes are a big part of how you design stuff.
[01:39:52] [SPEAKER_00] I have to imagine though, like there's lots of different opinions.
[01:39:55] [SPEAKER_00] Some people might have been like, oh no, but like dot value is so easy or whatever.
[01:39:59] [SPEAKER_00] Like how did you guys...
[01:40:00] [SPEAKER_00] arrive at this and what was your justification?
[01:40:04] [SPEAKER_01] Alex, I'm afraid.
[01:40:05] [SPEAKER_01] Yeah, sure.
[01:40:07] [SPEAKER_01] I will be public enemy.
[01:40:09] [SPEAKER_02] Actually, we're inspired quite a bit by Solid's choice here.
[01:40:14] [SPEAKER_02] I think just playing with these different systems,
[01:40:16] [SPEAKER_02] playing with Preact signals, and playing with Solid,
[01:40:18] [SPEAKER_02] we'd like the feel of the getter function call.
[01:40:22] [SPEAKER_02] In particular, we wanted the points where the template is
[01:40:27] [SPEAKER_02] reactive, the points where expressions are reactive
[01:40:30] [SPEAKER_02] to be obvious in code.
[01:40:32] [SPEAKER_02] for it to be clear that this is not just a plain read of variables somewhere,
[01:40:38] [SPEAKER_02] but it's actually going to be doing something behind the scenes
[01:40:41] [SPEAKER_02] in addition to just earning the value.
[01:40:45] [SPEAKER_02] And so function call was kind of a natural choice there.
[01:40:48] [SPEAKER_02] And it's also a lot less to type.
[01:40:51] [SPEAKER_00] Yeah.
[01:40:51] [SPEAKER_00] Yeah.
[01:40:52] [SPEAKER_00] And this is my favorite one.
[01:40:55] [SPEAKER_00] Because, like, personally, this is my favorite one.
[01:40:57] [SPEAKER_00] It's just like, what's the difference between this
[01:41:00] [SPEAKER_00] and this. You know what I mean? Like, there's obviously a difference in why you might want to use a computed here, but in general,
[01:41:08] [SPEAKER_00] I mean, this is obviously just me playing my biases in here.
[01:41:11] [SPEAKER_00] It's anything that's derived from a signal is also kind of a signal, like to a certain degree.
[01:41:17] [SPEAKER_00] I think that's really, really, really, really powerful because when you're designing APIs,
[01:41:22] [SPEAKER_00] Are you looking to check whether someone passed like something with a dot value on the end or not?
[01:41:28] [SPEAKER_00] Or are you going to say, look, this takes a computed.
[01:41:31] [SPEAKER_00] So now every place you have to pass in the API, you have to like put it, like make it a computed.
[01:41:38] [SPEAKER_00] Whereas this is just like, ah, it's a function.
[01:41:40] [SPEAKER_00] I don't know.
[01:41:41] [SPEAKER_00] Did that play into you guys' thinking at all or?
[01:41:44] [SPEAKER_00] Yeah.
[01:41:44] [SPEAKER_01] Yeah, so like I think like, you know, the and you said it's bike shedding.
[01:41:50] [SPEAKER_01] It's actually one of the most important questions, right?
[01:41:53] [SPEAKER_01] Like just like what is that primitive that like, you know, like the smallest possible thing
[01:41:58] [SPEAKER_01] in the system, right?
[01:42:00] [SPEAKER_01] Like and if we if we go into something dot value, then it looks like, well, that's by
[01:42:06] [SPEAKER_01] primitive and like value I can obviously read, but I can write to it, right?
[01:42:10] [SPEAKER_01] Like just like seems obvious that I can assign to a field in there.
[01:42:14] [SPEAKER_01] which kind of doesn't work for computed, right?
[01:42:17] [SPEAKER_01] Like computed signals.
[01:42:19] [SPEAKER_01] But like I shouldn't have like any saying writing to them.
[01:42:24] [SPEAKER_01] So there's this whole idea of just making sure
[01:42:29] [SPEAKER_01] that the primitive is the read operation
[01:42:32] [SPEAKER_01] and the signal that allows you to change
[01:42:35] [SPEAKER_01] is actually very specialized
[01:42:38] [SPEAKER_01] animal, right? Like it is the owner of the state, so to speak.
[01:42:43] [SPEAKER_00] Yeah, it's kind of interesting. And again, this is me tying the connections between all the different language pieces.
[01:42:48] [SPEAKER_00] Signals are the special thing. They are the things that can mutate.
[01:42:52] [SPEAKER_00] If you wanted to take this down to plain language,
[01:42:55] [SPEAKER_00] it's kind of more like let count equals zero.
[01:42:59] [SPEAKER_00] Const and const might seem weird to you because you might be like,
[01:43:02] [SPEAKER_00] why is this a const because it's not a const?
[01:43:07] [SPEAKER_00] But whatever, or yeah, whatever.
[01:43:12] [SPEAKER_00] Like in terms of a system, the mental model for signals is one of like declarative state,
[01:43:21] [SPEAKER_00] like that these are relationships that hold through time.
[01:43:23] [SPEAKER_00] Like,
[01:43:24] [SPEAKER_00] Double count is always the the you know two times count here. It's if count changes double count is updated like there's these never
[01:43:34] [SPEAKER_00] Separate from each other. If you update count you don't have to go assign double account again
[01:43:38] [SPEAKER_00] So in a sense like the everything else in this in the systems derived even like effects are like the cause of some
[01:43:46] [SPEAKER_00] derivation of of these things so in a sense
[01:43:49] [SPEAKER_00] In a sense, these are like the consts.
[01:43:51] [SPEAKER_00] They're everywhere.
[01:43:52] [SPEAKER_00] They're in your bindings.
[01:43:53] [SPEAKER_00] They're in everything.
[01:43:54] [SPEAKER_00] The only part of the system that's actually really special
[01:43:56] [SPEAKER_00] is where you actually mutate.
[01:43:58] [SPEAKER_00] And this means that mutation is very important, right?
[01:44:01] [SPEAKER_00] It's like this place where you're like,
[01:44:05] [SPEAKER_00] everything is controlled. So yeah, I mean, sorry, I'm just, I'm very happy with your API choice so that you can tell that I'm like, yeah.
[01:44:13] [SPEAKER_01] But it is funny, right? Like because we had like, you know, like that was like several months of like soul searching and like playing with different things.
[01:44:22] [SPEAKER_01] And I remember vividly one like day in January when Alex was here in like visiting me.
[01:44:31] [SPEAKER_01] and we were playing with the system.
[01:44:34] [SPEAKER_01] And there was moments like, oh, now you kind of have clear ownership of data.
[01:44:41] [SPEAKER_01] Right? Like you have to go to the source if you want to change.
[01:44:44] [SPEAKER_01] And this was like such a huge departure of what we know from Angular, right?
[01:44:49] [SPEAKER_01] Like because you can go anywhere and look and grab piece of state like anywhere in the component tree and just imitate it.
[01:44:56] [SPEAKER_01] And it like literally stopped us in tracks and like, okay,
[01:45:00] [SPEAKER_01] Well, is it good or is it bad?
[01:45:02] [SPEAKER_00] Well, I mean, this is personally what I learned from React.
[01:45:05] [SPEAKER_00] I could throw away everything else.
[01:45:08] [SPEAKER_00] VDOM, re-renders, all that stuff.
[01:45:10] [SPEAKER_00] This is what Reactive systems back in the day had a problem with.
[01:45:15] [SPEAKER_00] They didn't actually have the guarantees.
[01:45:17] [SPEAKER_00] They didn't have the control and things got wild.
[01:45:20] [SPEAKER_00] I mean, people in the future might change their mind about this
[01:45:23] [SPEAKER_00] and there might be better...
[01:45:25] [SPEAKER_00] mechanisms and stuff to maintain control.
[01:45:27] [SPEAKER_00] But personally, where I was thinking, I think this is a very powerful thing.
[01:45:31] [SPEAKER_00] And like, this is why I drew the illusion, because I think when like a React for Git type
[01:45:36] [SPEAKER_00] compiler comes in and they auto memoize, my gut is that const keyword is going to be
[01:45:41] [SPEAKER_00] very important because that's, that's, that's the derived state, right?
[01:45:47] [SPEAKER_00] It lets them optimize stuff in a way that's automatic because if it was mutable, all bets are off.
[01:45:54] [SPEAKER_00] Right.
[01:45:54] [SPEAKER_00] Sorry, this is me speaking to like people in the future and then they'll be like react forgets come out and then maybe someone will watch the video and be like, oh, this is what was Ryan was talking about like a year ago.
[01:46:06] [SPEAKER_00] Sorry, just nesting that Easter egg in there, but continue.
[01:46:09] [SPEAKER_01] No, no, like, I mean, that's kind of, I think, like, when we kind of realize that you go, like, you really do a, like, rather massive mental, like, change, right?
[01:46:20] [SPEAKER_01] Like, you have to think, like, who is the owner of the state? And, like, you need to go back to this owner and say, like, oh, now, now I want to change.
[01:46:27] [SPEAKER_01] We wanted this to stand out in the API, right? Like, that's why you've got this set, like, there are some other methods on it. But, like,
[01:46:34] [SPEAKER_01] It's not just dot value, right?
[01:46:37] [SPEAKER_01] Right.
[01:46:38] [SPEAKER_01] And just to be clear also, I think we will have like, we just, you know, experimenting
[01:46:43] [SPEAKER_01] with those things, we'll have a public RFC and that's the thing you will have like a deeper
[01:46:48] [SPEAKER_01] discussion on it because I can see a lot of preferences.
[01:46:52] [SPEAKER_01] Like people say like, oh, you know, you should do dot value or you should do this or you
[01:46:55] [SPEAKER_01] should do like something else.
[01:46:58] [SPEAKER_02] One of the big problems that we're seeing is the getter function calls don't play nicely
[01:47:02] [SPEAKER_02] with TypeScript.
[01:47:04] [SPEAKER_02] Because if I try to type narrow the thing that comes back from it,
[01:47:07] [SPEAKER_02] then TypeScript is like, but it's a function.
[01:47:08] [SPEAKER_02] It could return a different value.
[01:47:10] [SPEAKER_00] So I'm not going to narrow it.
[01:47:12] [SPEAKER_00] It's really that one is one of the ones that has been
[01:47:16] [SPEAKER_00] a little bit pesky.
[01:47:17] [SPEAKER_00] I was trying to, a while ago, I was like,
[01:47:18] [SPEAKER_00] hey, what's the chance we can do it?
[01:47:20] [SPEAKER_00] Because in a sense, TypeScript's handling
[01:47:22] [SPEAKER_00] of properties works well,
[01:47:24] [SPEAKER_00] but it's also a potential lie as well.
[01:47:26] [SPEAKER_00] Like basically one lies one way
[01:47:28] [SPEAKER_00] and one lies the other way.
[01:47:30] [SPEAKER_00] And it'd be great if you could make that characteristic
[01:47:33] [SPEAKER_00] something that you could type and be like,
[01:47:36] [SPEAKER_00] like this is an idipotent function.
[01:47:38] [SPEAKER_00] This is a possibly dynamic property.
[01:47:41] [SPEAKER_00] Like, I would love if there is a way to actually tell TypeScript this because clearly it has both behaviors in the system somewhere.
[01:47:51] [SPEAKER_00] But yes, TypeScript is a little bit awkward.
[01:47:56] [SPEAKER_00] So yeah, so what you're saying is this is kind of the start of the proposal and then there's going to be a review in RFC and for all we know we might actually end up with off value.
[01:48:06] [SPEAKER_00] It's a possibility.
[01:48:08] [SPEAKER_01] Yeah.
[01:48:09] [SPEAKER_01] Like, this is what we like the most at the moment, or like, like in the sense that I think
[01:48:15] [SPEAKER_01] that has the most properties that we want, but like it has consequences for the syntax
[01:48:22] [SPEAKER_01] and you know, like sometimes.
[01:48:24] [SPEAKER_00] Someone was asking what exactly is effect?
[01:48:25] [SPEAKER_00] Why do I need it when I get the value from count?
[01:48:28] [SPEAKER_00] I like this question.
[01:48:31] [SPEAKER_00] Do you guys want to handle it or can I try?
[01:48:34] [SPEAKER_01] Go ahead. Like, I want Ryan's explanation.
[01:48:37] [SPEAKER_00] Yeah, okay. The reason there's an effect, and I think this is maybe obvious, especially if you've been doing some of the other stuff maybe you've been doing, maybe if you're an Angular or something is...
[01:48:49] [SPEAKER_00] Sure, the count updates but but like how do you like know the the count updates like sure count updated in a forest
[01:48:59] [SPEAKER_00] Who's who's gonna call the console log like?
[01:49:02] [SPEAKER_00] Like in zone my understanding something updates and then the whole world ends up re-rendering and then you like in that world
[01:49:09] [SPEAKER_00] console log gets called but in this kind of reactive system here
[01:49:14] [SPEAKER_00] You you need to know that like
[01:49:17] [SPEAKER_00] to call to ask for the value right there's got to be that that switch between push and pull right
[01:49:24] [SPEAKER_00] because you push to the end like basically for people it's kind of like the dot subscribe but
[01:49:29] [SPEAKER_00] instead of just subscribing to count specifically I can create a second count you know um
[01:49:40] [SPEAKER_00] count two you know and put you know and now I can subscribe to
[01:49:47] [SPEAKER_00] Both of them, you know, I can be like count two and this like it keeps the same
[01:49:53] [SPEAKER_00] semantics of our computed here where you basically define a zone that will really
[01:50:00] [SPEAKER_00] rerun um or be scheduled to rerun when any of these values or derived values change so it's
[01:50:09] [SPEAKER_00] basically because you need a way of telling it like when to pull i mean in theory you could
[01:50:14] [SPEAKER_00] just have like a timer you know set timeout and like pull it whenever and it won't do
[01:50:19] [SPEAKER_00] any work extra work if it hasn't changed because it like in a sense i could
[01:50:23] [SPEAKER_00] a computed is also a memo like it depends on your perspective like it caches the calculation
[01:50:30] [SPEAKER_00] so every time you call it if nothing's stale it won't recalculate so it's it's like a memoized
[01:50:34] [SPEAKER_00] value but you need to know to call it and effect kind of finishes the story where um in like
[01:50:42] [SPEAKER_00] unless you want to handle the polling yourself so to speak or polling yourself
[01:50:49] [SPEAKER_02] Yeah, I think with one console log output here, it's a little bit unclear.
[01:50:55] [SPEAKER_02] But yeah, this console log will rerun if the count signal is changing over time.
[01:51:01] [SPEAKER_02] Whatever it has a different value to display, it will re-execute the console log.
[01:51:06] [SPEAKER_00] Yeah, is G's react to the inspiration for signals?
[01:51:09] [SPEAKER_00] Oh, signals in solid?
[01:51:11] [SPEAKER_00] Oh, sorry.
[01:51:12] [SPEAKER_00] I read that wrong.
[01:51:13] [SPEAKER_00] I thought they were asking if view signals are an inspiration for what you guys are looking at.
[01:51:17] [SPEAKER_00] For solid, shh, shh, shh.
[01:51:20] [SPEAKER_00] I mean, I was aware of view and view's reactive system.
[01:51:24] [SPEAKER_00] The thing you have to understand is at the time I was writing solid,
[01:51:26] [SPEAKER_00] view was the options API.
[01:51:28] [SPEAKER_00] So they didn't have like ref or signals or like anything that looked like this.
[01:51:32] [SPEAKER_00] Their stuff looked like you just defined a bunch of objects with stuff.
[01:51:35] [SPEAKER_00] So it was a very different user experience.
[01:51:39] [SPEAKER_00] Like it wasn't like this.
[01:51:41] [SPEAKER_00] This is like...
[01:51:42] [SPEAKER_00] like what we're looking here with angular or with the solid or even knockout was like this style views kind of hit its reactivity system from the world.
[01:51:50] [SPEAKER_00] And it only actually exposed them basically with that RFC and stuff that it came out in 2020 basically views been reactive since the beginning, like with the same reactive system.
[01:52:01] [SPEAKER_00] But in terms of like the API choices, it's it's maybe ahead of the current wave, but it was it was much later than some of the other solutions.
[01:52:12] [SPEAKER_00] Oh, sorry. I thought they were asking if you...
[01:52:15] [SPEAKER_02] Yeah, and honestly for us, like, it really was.
[01:52:19] [SPEAKER_02] Yeah.
[01:52:19] [SPEAKER_02] We did a lot of prototyping before we started, you know, kind of building our own library from scratch,
[01:52:24] [SPEAKER_02] and much of it was based on the view reactivity package.
[01:52:30] [SPEAKER_00] Yeah, and people again, what's the difference with MobX?
[01:52:32] [SPEAKER_00] It is the same as MobX.
[01:52:33] [SPEAKER_00] Like, the stuff is, like, the algorithms might be slightly different or tweaked and stuff,
[01:52:36] [SPEAKER_00] but MobX did it. The reactivity itself...
[01:52:39] [SPEAKER_00] um, is been around forever, like we've getting better, more performant, you know, better algorithms and stuff. The thing is, and I'm this is what I'm hoping excites people about the stuff is a lot of the systems that we were feeding the reactivity into were
[01:52:57] [SPEAKER_00] weren't really positioned to leverage it.
[01:52:59] [SPEAKER_00] It was like, it was almost like the Rx zone problem,
[01:53:02] [SPEAKER_00] like where they had these like their own pull-based systems,
[01:53:05] [SPEAKER_00] and then you're introducing this other push-based system,
[01:53:07] [SPEAKER_00] and they're just like doing wasted effort.
[01:53:10] [SPEAKER_00] Like MobX wasn't too bad with React,
[01:53:12] [SPEAKER_00] but it involved boilerplate,
[01:53:13] [SPEAKER_00] and then suddenly it was like, okay,
[01:53:15] [SPEAKER_00] wherever you, like you have the wrap components in observers,
[01:53:17] [SPEAKER_00] which is fine, it's just decorator or whatever,
[01:53:19] [SPEAKER_00] and then when state changes, the component reruns.
[01:53:21] [SPEAKER_00] The reason this has kind of been hyped up recently is because,
[01:53:26] [SPEAKER_00] and I don't know what the Angular implementation looks like yet,
[01:53:29] [SPEAKER_00] but because libraries like solid,
[01:53:31] [SPEAKER_00] which are completely this way,
[01:53:34] [SPEAKER_00] and then libraries like Preact and Quick,
[01:53:36] [SPEAKER_00] which are kind of partially this way,
[01:53:37] [SPEAKER_00] this ability to take that reactivity
[01:53:41] [SPEAKER_00] all the way down to the binding level.
[01:53:42] [SPEAKER_00] So it's not components rerunning,
[01:53:44] [SPEAKER_00] it's not components subtrees rerunning,
[01:53:46] [SPEAKER_00] it's just what changes rerunning.
[01:53:48] [SPEAKER_00] Like I one of my earliest experiments was to make a solid like renderer using mob X right so like you it's the way you use the reactivity that's more important than the reactivity itself in terms of why this has come around again.
[01:54:03] [SPEAKER_00] Truthfully someone could have built this this whole time you know I I
[01:54:06] [SPEAKER_00] I always wondered about like this kind of alternative history where like one of the large teams, like, like if it wasn't backbone, but the Facebook team was all into Knockout, like how different of a world would have we been in?
[01:54:21] [SPEAKER_00] Or if Angular didn't go to Google, but it's funny because Knockout was at Microsoft and they just, I guess, didn't.
[01:54:27] [SPEAKER_00] you know have the same aspirations whatever I always wondered if like if a framework had actually
[01:54:32] [SPEAKER_00] developed in in you know that way off these reactive primitives if we'd be in a very different
[01:54:38] [SPEAKER_00] state than we would be today the truth matters the stuff's been here the whole time um that's
[01:54:43] [SPEAKER_00] what I meant my story might have only you know like I've been playing with the stuff since early
[01:54:48] [SPEAKER_00] days but you know maybe solid's only been part of this equation for like I don't know six six
[01:54:52] [SPEAKER_00] ish years or whatever but like this this is not a new thing
[01:54:58] [SPEAKER_00] Sorry, little side rant.
[01:55:02] [SPEAKER_01] No, and it's like I think it's important, right?
[01:55:05] [SPEAKER_01] Like to highlight that it's the same family of like the basic ideas are the same.
[01:55:09] [SPEAKER_01] Like they're often wrapped in a different API.
[01:55:12] [SPEAKER_01] The algorithm behind the scene implementation will be different,
[01:55:15] [SPEAKER_01] but like just like the core family is the same.
[01:55:18] [SPEAKER_00] Yeah, yeah. So, yeah, I mean, it's, it's, I put that chart up earlier. People maybe can find on my Twitter if they're really like trying to distinguish it a bit and kind of put in their head. But like the way we leveraged reactivity for a while was just a tool to feed into these other render systems. Like knockout was actually fine-grained, like solid is, but most, and a few others back then, but most things until more recently, you know, haven't actually leveraged reactivity in the same way. So yeah.
[01:55:48] [SPEAKER_00] But I think the reactive part, the part we're talking about today is kind of like there's this universalness to it.
[01:55:54] [SPEAKER_00] And I think that's really, really cool.
[01:55:59] [SPEAKER_00] Sorry, we got so sidetracked here.
[01:56:01] [SPEAKER_00] So signal, signal, double count effect.
[01:56:02] [SPEAKER_00] We're talking about APIs.
[01:56:05] [SPEAKER_00] Yeah, you know, I'm going to really quickly make the diamond problem just right here because we're going to make double count and triple count.
[01:56:19] [SPEAKER_00] And so this is times two times three.
[01:56:24] [SPEAKER_00] No, not times E, times 3.
[01:56:27] [SPEAKER_00] And then we're going to console log double count plus triple count.
[01:56:45] [SPEAKER_00] Oh, do you guys have asynchronous flushing?
[01:56:49] [SPEAKER_00] Yeah.
[01:56:50] [SPEAKER_01] The effects are scheduled.
[01:56:53] [SPEAKER_01] Yeah, so in this particular.
[01:56:55] [SPEAKER_00] Yeah, in this particular.
[01:56:56] [SPEAKER_00] Is there any way I can cheat it?
[01:56:58] [SPEAKER_00] Like just so I can show what I want.
[01:57:00] [SPEAKER_00] I can set timeout it to, you know, it's fine.
[01:57:02] [SPEAKER_02] Yeah, you'll have to input it, I think, from not the index entry point, but there is a...
[01:57:09] [SPEAKER_02] Yeah, it's fine.
[01:57:11] [SPEAKER_02] In effect, it's called effects done.
[01:57:13] [SPEAKER_00] Yeah, I'm going to.
[01:57:15] [SPEAKER_01] Yeah, I think that that will work as well.
[01:57:17] [SPEAKER_00] I'm just going to do this.
[01:57:19] [SPEAKER_00] The thing is the system schedules everything, does the work once.
[01:57:22] [SPEAKER_00] It's great.
[01:57:23] [SPEAKER_00] But what I wanted to show was an action.
[01:57:28] [SPEAKER_00] Yeah, let's.
[01:57:30] [SPEAKER_00] Yeah, I wanted to show this where we're going to actually I'm going to do it twice just for effect here.
[01:57:36] [SPEAKER_00] So that we see it because it runs once console logs.
[01:57:44] [SPEAKER_00] runs again, and this is actually dangerous because like who, but yeah, and then runs a third time.
[01:57:52] [SPEAKER_00] So runs once, set it once, set it to, and you see goes one, two, three. But the reason I mentioned
[01:57:56] [SPEAKER_00] this, the diamond problem is that essentially you update a signal and then one derived value,
[01:58:06] [SPEAKER_00] another derived value, and then they're both used. And the thing is, if you did something really
[01:58:11] [SPEAKER_00] naive here, you might like...
[01:58:13] [SPEAKER_00] update the signal, it updates this, and then it tells its subscribers, like this effect,
[01:58:18] [SPEAKER_00] hey, what's going on?
[01:58:19] [SPEAKER_00] And then it runs with the old value, a triple count, and then triple count is queued on next.
[01:58:25] [SPEAKER_00] It runs, and then runs the effect again.
[01:58:27] [SPEAKER_00] Like, you can do some pretty nasty stuff.
[01:58:29] [SPEAKER_00] This is a very, I call this the simple diamond problem, because this one, there's a lot of really trivial ways to solve.
[01:58:34] [SPEAKER_00] It gets trickier when you have multiple signals getting rid of two, and multiple, like,
[01:58:41] [SPEAKER_00] like more than a single depth.
[01:58:44] [SPEAKER_00] And we talked about this at length with Milo last stream.
[01:58:47] [SPEAKER_00] We actually talked a lot about the reactive algorithm.
[01:58:50] [SPEAKER_00] But like just high level, can we, like, let's just scale draw it here.
[01:58:56] [SPEAKER_00] Yeah.
[01:58:56] [SPEAKER_01] So we can like, yeah, draw this graph, right?
[01:59:00] [SPEAKER_00] Because it's, what do I want to use?
[01:59:02] [SPEAKER_00] Do I want circles?
[01:59:02] [SPEAKER_00] No, I'm going to use squares.
[01:59:04] [SPEAKER_00] And we're going to go like this.
[01:59:10] [SPEAKER_00] And I'm going to put a nice label in here because we have count.
[01:59:18] [SPEAKER_00] double count and
[01:59:22] [SPEAKER_00] Triple count and then at the end. I'm gonna use a diamond because I can
[01:59:31] [SPEAKER_00] We're gonna have our our log right and yeah, let's do arrows
[01:59:40] [SPEAKER_00] Yeah, let's do arrows. I'm gonna do it in the in the
[01:59:43] [SPEAKER_01] Yeah, like the change propagates that's the good good direction. I guess we'll add another one later
[01:59:50] [SPEAKER_00] But but yeah like
[01:59:53] [SPEAKER_00] This is sort of the relationship we're talking about here, right?
[01:59:55] [SPEAKER_00] You like if you could see a word
[02:00:00] [SPEAKER_00] where if you updated count and then this is a list and then you know you updated then you go okay
[02:00:06] [SPEAKER_00] double count has to rerun and then it goes okay then log needs to rerun you could see that maybe
[02:00:12] [SPEAKER_00] then when you go to the next iteration get a triple count you might run log twice that's basically
[02:00:18] [SPEAKER_00] what systems like this are built to avoid um
[02:00:22] [SPEAKER_01] Yeah, I think that like the version of the diamond problem I like is that with the name right like you've got like first name, last name, you split it and you rejoin it and you start to see glitches where you kind of glue the one first name with the like you know weird first name like with the
[02:00:39] [SPEAKER_01] unmatching last name and it's kind of but but that's essentially the same problem right like you
[02:00:44] [SPEAKER_01] right you're kind of seeing intermediate state in a graph or yeah yeah and you know what maybe for
[02:00:51] [SPEAKER_00] I use double count here um but maybe to actually visualize it it might be easier to add one more node um because
[02:01:01] [SPEAKER_00] Because I think that one more node makes all the difference.
[02:01:05] [SPEAKER_00] I just kind of remember which side.
[02:01:07] [SPEAKER_00] No, the one more node doesn't go on this side.
[02:01:09] [SPEAKER_00] The one more node goes on this side.
[02:01:10] [SPEAKER_00] Because this is usually where the confusion is.
[02:01:16] [SPEAKER_00] And this other node, I don't know what it's going to be.
[02:01:22] [SPEAKER_00] Whatever.
[02:01:22] [SPEAKER_00] Node X.
[02:01:24] [SPEAKER_01] Some other computed, right?
[02:01:26] [SPEAKER_00] Yeah, it's some other computed in between.
[02:01:29] [SPEAKER_00] And we're going to do this.
[02:01:33] [SPEAKER_00] Because this is where things start to get a little bit more complicated because even if you were smart and you're like, oh, when I run this log, if I go and look at triple count,
[02:01:49] [SPEAKER_00] you know, I might know that it's out of date and just run it then.
[02:01:54] [SPEAKER_00] This X makes this a lot more complicated.
[02:01:58] [SPEAKER_00] So for everyone here, and hopefully you're all interested in this,
[02:02:02] [SPEAKER_00] how do we make sure that only when count changes,
[02:02:06] [SPEAKER_00] that only essentially each of these only run once?
[02:02:14] [SPEAKER_01] Love those algorithms.
[02:02:17] [SPEAKER_01] There are funny stories afterwards as well, but
[02:02:20] [SPEAKER_01] i think like alex is the mastermind like after some optimization so but i guess we can like
[02:02:27] [SPEAKER_01] talk about the like a naive version of it um so and then we can talk about optimizations
[02:02:35] [SPEAKER_01] But the simple version of it is that when you set the count...
[02:02:40] [SPEAKER_00] So I've set count, yeah?
[02:02:42] [SPEAKER_01] Yeah, you basically go to the graph and we call it push the dirt down.
[02:02:48] [SPEAKER_00] Okay, push the dirt down, okay.
[02:02:50] [SPEAKER_02] Yeah.
[02:02:51] [SPEAKER_02] So in a depth-first way, we just propagate this like, hey, you're dirty.
[02:02:58] [SPEAKER_01] Yeah, okay.
[02:02:59] [SPEAKER_01] So no recomputation, just like setting up flags on all those things.
[02:03:02] [SPEAKER_00] Okay, so you're dirty.
[02:03:05] [SPEAKER_02] everyone is dirty at this point okay everyone's dirty okay yeah and the it doesn't matter in
[02:03:11] [SPEAKER_02] what order this happens right because we're not going to rerun any calculations we're not going
[02:03:15] [SPEAKER_00] to do any right and and do you guys also do you okay yeah sure so you mark it all as dirty do you
[02:03:25] [SPEAKER_02] do you do anything with this log when you get to it when you get to the effect when you mark an
[02:03:29] [SPEAKER_02] effect dirty yeah we
[02:03:32] [SPEAKER_02] essentially hand the effect over to a scheduler and say,
[02:03:35] [SPEAKER_02] run this at some point in the future.
[02:03:37] [SPEAKER_02] Queue it up.
[02:03:38] [SPEAKER_02] Okay, cool.
[02:03:38] [SPEAKER_02] Yes, asynchronously, right?
[02:03:40] [SPEAKER_02] So it's not executed immediately.
[02:03:41] [SPEAKER_02] It's added to a queue somewhere.
[02:03:43] [SPEAKER_02] And that is that the actual timing of when that runs
[02:03:46] [SPEAKER_02] is entirely up to the user of the library.
[02:03:49] [SPEAKER_02] Okay.
[02:03:52] [SPEAKER_02] Yeah, so now, you know, time passes.
[02:03:55] [SPEAKER_02] Eventually the scheduler goes up.
[02:03:56] [SPEAKER_02] Now it's time to run this thing.
[02:03:58] [SPEAKER_02] Right.
[02:03:59] [SPEAKER_02] And actually starts executing the log operation,
[02:04:01] [SPEAKER_02] which then reads the value of double count.
[02:04:04] [SPEAKER_02] immediately, which says, oh, I'm dirty.
[02:04:07] [SPEAKER_02] I need to run it.
[02:04:08] [SPEAKER_01] Right compute.
[02:04:09] [SPEAKER_02] Yeah.
[02:04:09] [SPEAKER_02] Need my value of count.
[02:04:11] [SPEAKER_02] And then the log will read x, which will read triple count, which will read count again.
[02:04:15] [SPEAKER_02] Yeah.
[02:04:16] [SPEAKER_00] Runs it.
[02:04:17] [SPEAKER_00] Runs it.
[02:04:18] [SPEAKER_02] Yeah.
[02:04:18] [SPEAKER_00] And the grass would become clean.
[02:04:20] [SPEAKER_00] Yeah, and this one should have gone back to white right at the beginning.
[02:04:22] [SPEAKER_00] Because once count notifies, it no longer is important anymore.
[02:04:27] [SPEAKER_00] So it runs everything.
[02:04:29] [SPEAKER_00] You're right.
[02:04:29] [SPEAKER_00] The tricky part about this is what if X the value doesn't change for X?
[02:04:35] [SPEAKER_02] That is super interesting.
[02:04:37] [SPEAKER_00] Yeah.
[02:04:37] [SPEAKER_00] So let's try this again now.
[02:04:39] [SPEAKER_00] But this time...
[02:04:40] [SPEAKER_00] X, let's say X had a condition where like, it was like, if triple count is bigger than...
[02:04:47] [SPEAKER_02] Yeah, triple count is even or something like that.
[02:04:50] [SPEAKER_00] Exactly.
[02:04:51] [SPEAKER_00] Then it's true versus false.
[02:04:55] [SPEAKER_00] And in that case, you know, I mean, this doesn't matter because double count's going to happen anyways, but you could pretend that there's like something else off over here.
[02:05:06] [SPEAKER_00] And that other node doesn't want to...
[02:05:10] [SPEAKER_00] rerun if, if, if, if, you know, if, you know, if whatever this is, like, if this doesn't change,
[02:05:20] [SPEAKER_00] there's no point rerunning this other effect over here. So how, yeah, do we do this a little
[02:05:27] [SPEAKER_01] smarter? So we still mark dirty. Yeah. Okay.
[02:05:31] [SPEAKER_02] So the first part, right, when you set count is still the same.
[02:05:36] [SPEAKER_02] Like we push dirtiness down through the whole graph,
[02:05:38] [SPEAKER_02] everything that transitively depends on the count,
[02:05:41] [SPEAKER_02] kind of like ignorant of the fact that when we mark x dirty here,
[02:05:48] [SPEAKER_02] we're not recalculating it.
[02:05:49] [SPEAKER_02] So we don't know that it's actually,
[02:05:51] [SPEAKER_02] when it does get recalculated,
[02:05:52] [SPEAKER_02] it's going to have the same value, right?
[02:05:55] [SPEAKER_00] Right.
[02:05:55] [SPEAKER_00] Do you guys differentiate between is dirty and could be dirty?
[02:06:01] [SPEAKER_01] No, like...
[02:06:02] [SPEAKER_01] not not in the same way as it actively does yeah okay okay cool so there is a similar concept but
[02:06:08] [SPEAKER_02] we'll we'll we'll get to that okay um maybe it is like let's do one level first and then we can
[02:06:15] [SPEAKER_02] talk about yeah for it okay so these effects get dirty the effects get put into a queue yeah um
[02:06:21] [SPEAKER_02] scheduler happens it runs the it tells the effect like hey go and run yourself
[02:06:26] [SPEAKER_02] Right.
[02:06:27] [SPEAKER_02] And effects kind of effects and computed don't immediately execute their calculation or
[02:06:36] [SPEAKER_02] their reaction.
[02:06:38] [SPEAKER_02] They instead first pull their dependencies and say, hey, did you actually change?
[02:06:45] [SPEAKER_01] So we should maybe draw arrows, right, like back where when you start to ask for the value,
[02:06:54] [SPEAKER_01] you go to your dependencies.
[02:06:56] [SPEAKER_01] and asking like, hey, okay, you, I'm dirty.
[02:07:01] [SPEAKER_01] I depend on you.
[02:07:03] [SPEAKER_01] Right.
[02:07:03] [SPEAKER_01] Like, tell me now about your true state, right?
[02:07:06] [SPEAKER_01] Like, are you really dirty?
[02:07:07] [SPEAKER_00] Okay, so I'm going to make this a blue yet because it hasn't run yet.
[02:07:10] [SPEAKER_00] So it's like, it's got the focus.
[02:07:13] [SPEAKER_00] And then it goes, here, have you actually changed?
[02:07:16] [SPEAKER_00] So you get here and this guy goes, um, okay, I...
[02:07:20] [SPEAKER_01] I did.
[02:07:20] [SPEAKER_00] I did.
[02:07:21] [SPEAKER_01] Right, like you recalculate.
[02:07:23] [SPEAKER_00] Yeah.
[02:07:24] [SPEAKER_00] So this guy knows for sure he did because he knows like...
[02:07:28] [SPEAKER_01] So we would recalculate, right?
[02:07:29] [SPEAKER_01] Like it's dirty.
[02:07:32] [SPEAKER_01] Like I mean, we would go to the count.
[02:07:34] [SPEAKER_02] It's going to do the same thing, right?
[02:07:36] [SPEAKER_02] Like the computer is going to say, oh, hey,
[02:07:39] [SPEAKER_02] i don't know if i'm dirty i need to first ask my dependencies right change and counts like counts
[02:07:45] [SPEAKER_00] a source right yeah so yeah so counts still red here so it goes up to count and goes you know
[02:07:53] [SPEAKER_00] did you change and then counts like yes and then so count is is one of these like special
[02:07:58] [SPEAKER_02] setable signals right so it's like it has no dirty concept of dirtiness if it notified you
[02:08:04] [SPEAKER_00] it meant that it changed right that's what i meant if you knew the difference between like
[02:08:08] [SPEAKER_00] definitely changed and could be because the first question you hit here is like this first row or
[02:08:13] [SPEAKER_00] like from count is definitely changed yeah yeah and so now now double count says okay one of my
[02:08:21] [SPEAKER_02] sources told me like yep i'm definitely different so i need to recalculate yeah and then i can tell
[02:08:26] [SPEAKER_02] the person who asked me yeah you need to recalculate because yeah so i definitely change now do i
[02:08:32] [SPEAKER_00] run at this point yes yes okay so then i run
[02:08:36] [SPEAKER_00] I go to white and go, hey, yeah, you, the same way.
[02:08:42] [SPEAKER_02] You're definitely dirty.
[02:08:43] [SPEAKER_02] You need to go like do something, right?
[02:08:45] [SPEAKER_00] Right.
[02:08:46] [SPEAKER_00] Do I run at this point or do I check my?
[02:08:48] [SPEAKER_01] No, you still have to go to the other dependencies, right?
[02:08:51] [SPEAKER_01] Right.
[02:08:51] [SPEAKER_02] I mean, you could like either.
[02:08:53] [SPEAKER_02] I think we do.
[02:08:54] [SPEAKER_02] We might break early there.
[02:08:55] [SPEAKER_02] I have to check, but we should anyway.
[02:08:58] [SPEAKER_02] Okay.
[02:08:59] [SPEAKER_00] Yeah.
[02:08:59] [SPEAKER_00] So then we know we know we've kind of like said, hey,
[02:09:02] [SPEAKER_00] Yes, like at this point you like, you know, you know, this has gone from this, you know, to maybe to to like, yes, we are doing this.
[02:09:11] [SPEAKER_00] I'm going to, I'm going to switch my colors around again.
[02:09:14] [SPEAKER_00] Yeah.
[02:09:14] [SPEAKER_00] Okay.
[02:09:15] [SPEAKER_00] Right.
[02:09:15] [SPEAKER_00] So this is definitely yes, but we're still going to.
[02:09:17] [SPEAKER_02] That is going to pull from X, right?
[02:09:20] [SPEAKER_02] Right.
[02:09:21] [SPEAKER_02] At some point.
[02:09:22] [SPEAKER_02] Right.
[02:09:22] [SPEAKER_02] But X is going to the same question.
[02:09:25] [SPEAKER_02] Did you change to my dependency?
[02:09:27] [SPEAKER_00] Yeah.
[02:09:27] [SPEAKER_00] And then he goes, yes, I was directly notified, so I'm going to run.
[02:09:30] [SPEAKER_02] Yep.
[02:09:30] [SPEAKER_02] And then X is going to rerun its calculation.
[02:09:34] [SPEAKER_02] But X is going to notice, hey, I didn't actually update.
[02:09:38] [SPEAKER_02] Right.
[02:09:38] [SPEAKER_02] Whatever value I computed was the same as the previous value that I was holding.
[02:09:43] [SPEAKER_02] Right.
[02:09:43] [SPEAKER_02] And so it's able to tell downstream, hey, you don't actually need to rerun.
[02:09:51] [SPEAKER_02] I didn't actually update.
[02:09:52] [SPEAKER_02] The notification that I sent you was a lie, so to speak.
[02:09:55] [SPEAKER_02] And the way we do this is...
[02:10:00] [SPEAKER_01] we should we actually get into the little bit of detail there sure i mean it makes sense yeah let's
[02:10:05] [SPEAKER_01] do it with the versions yeah so we version values in the system gotcha every signal whether it's
[02:10:13] [SPEAKER_01] a source or a computed has a concept of a numeric monotonically increasing version and on the
[02:10:23] [SPEAKER_01] edge when we do a read we store the last version from the that source that we saw gotcha
[02:10:30] [SPEAKER_01] So before this graph starts, right, let's say that like...
[02:10:34] [SPEAKER_00] I kind of want to go back and put numbers beside everything now.
[02:10:36] [SPEAKER_00] Do it. Do it.
[02:10:37] [SPEAKER_00] Because like...
[02:10:38] [SPEAKER_00] Yeah.
[02:10:39] [SPEAKER_00] I'm kind of curious because let's...
[02:10:41] [SPEAKER_00] Can I just use version 1 for everything just to begin with?
[02:10:44] [SPEAKER_00] That's perfect.
[02:10:44] [SPEAKER_00] Yeah.
[02:10:45] [SPEAKER_00] And then one, one...
[02:10:49] [SPEAKER_00] because we'll do the walk.
[02:10:51] [SPEAKER_00] We didn't want to go much faster, but we started.
[02:10:54] [SPEAKER_01] The effects don't actually need their version, right?
[02:10:57] [SPEAKER_00] Okay.
[02:10:57] [SPEAKER_00] Effects don't need versions.
[02:10:59] [SPEAKER_01] Okay.
[02:10:59] [SPEAKER_01] But we also need to put a version on the edges
[02:11:01] [SPEAKER_01] because I'm assuming this graph got set up
[02:11:05] [SPEAKER_01] when we ran the effect for the first time.
[02:11:07] [SPEAKER_01] So on each edge as well as each signal.
[02:11:12] [SPEAKER_00] Okay, gotcha.
[02:11:13] [SPEAKER_00] Okay.
[02:11:13] [SPEAKER_00] So I got some more to do.
[02:11:15] [SPEAKER_00] One, one, one.
[02:11:22] [SPEAKER_00] Yep.
[02:11:24] [SPEAKER_00] And one?
[02:11:25] [SPEAKER_00] Okay.
[02:11:26] [SPEAKER_00] Okay.
[02:11:27] [SPEAKER_00] And then we changed count.
[02:11:29] [SPEAKER_01] Yeah, which increases its version.
[02:11:32] [SPEAKER_00] Definitely.
[02:11:32] [SPEAKER_00] Now count is two.
[02:11:34] [SPEAKER_00] Then, okay, so I want to get rid of my color coding now because actually I want to, we should, yeah, we should have started here from the beginning. Let's, let's try this again.
[02:11:43] [SPEAKER_00] Okay, okay. So the, uh, let's get my color coding. We set this. It's now two. Um, it goes and not if when it goes and notifies, does it do anything to the versions?
[02:11:55] [SPEAKER_00] Nope.
[02:11:56] [SPEAKER_00] Okay.
[02:11:56] [SPEAKER_00] Okay.
[02:11:56] [SPEAKER_01] So double, yeah, double count becomes dirty, right?
[02:12:00] [SPEAKER_01] Logs becomes dirty.
[02:12:00] [SPEAKER_01] Everything becomes dirty.
[02:12:02] [SPEAKER_00] We can read.
[02:12:03] [SPEAKER_00] Yeah.
[02:12:04] [SPEAKER_00] Read.
[02:12:08] [SPEAKER_00] Read.
[02:12:12] [SPEAKER_00] Okay.
[02:12:13] [SPEAKER_00] Okay.
[02:12:14] [SPEAKER_00] Yeah.
[02:12:16] [SPEAKER_00] Then.
[02:12:16] [SPEAKER_01] So eventually, like, log will run.
[02:12:21] [SPEAKER_01] It will do this kind of pre-step of asking its producers, hey, did you change?
[02:12:26] [SPEAKER_01] What it really asks its producers is, hey, check that your version is up to date.
[02:12:31] [SPEAKER_01] So because I'm about to compare...
[02:12:34] [SPEAKER_01] the version I have on the edge, which is the last one I saw from you,
[02:12:38] [SPEAKER_01] with whatever your current version is.
[02:12:40] [SPEAKER_00] Right.
[02:12:40] [SPEAKER_00] So this edge number updates when it realizes it's changed.
[02:12:44] [SPEAKER_00] This goes to two.
[02:12:46] [SPEAKER_01] So log will ask double count, check your version.
[02:12:49] [SPEAKER_00] Yeah.
[02:12:49] [SPEAKER_01] Double count will ask its count, hey, make sure your version is up to date.
[02:12:54] [SPEAKER_01] And then it'll compare the one that it has on its edge to count
[02:12:58] [SPEAKER_01] with count's current version, which is two.
[02:13:01] [SPEAKER_01] Yeah.
[02:13:02] [SPEAKER_01] And it's like, okay, count changed.
[02:13:03] [SPEAKER_01] I need to recompute.
[02:13:04] [SPEAKER_01] So, yeah, that updates the two.
[02:13:06] [SPEAKER_01] Double count gets a new value.
[02:13:08] [SPEAKER_01] And so it increments its own version counter.
[02:13:11] [SPEAKER_02] It gets clean again.
[02:13:12] [SPEAKER_01] Yeah.
[02:13:13] [SPEAKER_01] Yeah.
[02:13:13] [SPEAKER_01] It's a two.
[02:13:13] [SPEAKER_00] Runs to clean.
[02:13:16] [SPEAKER_01] Yep.
[02:13:17] [SPEAKER_01] Yep.
[02:13:18] [SPEAKER_01] And then log says, oh, okay, I asked double count to update its version.
[02:13:22] [SPEAKER_01] Now I compare.
[02:13:23] [SPEAKER_01] I last saw one.
[02:13:25] [SPEAKER_01] Now its version is two.
[02:13:27] [SPEAKER_01] I now know that I need to rerun, right?
[02:13:29] [SPEAKER_00] Right.
[02:13:31] [SPEAKER_00] And we do the same thing over here.
[02:13:33] [SPEAKER_01] People count, the same thing happens, right?
[02:13:34] [SPEAKER_01] We eventually ask it, hey, make sure your version is up to date.
[02:13:37] [SPEAKER_01] It checks its dependency, realizes I need to recalculate.
[02:13:41] [SPEAKER_01] It goes to version two.
[02:13:45] [SPEAKER_01] X realizes it needs to recalculate.
[02:13:50] [SPEAKER_01] That goes to two.
[02:13:52] [SPEAKER_01] But crucially, X, right, realizes, hey, I got a value.
[02:13:56] [SPEAKER_01] It didn't actually change.
[02:13:58] [SPEAKER_00] Right.
[02:13:58] [SPEAKER_01] So I stay on one.
[02:14:03] [SPEAKER_00] And so when your mystery effect on the right there gets...
[02:14:07] [SPEAKER_00] Yeah.
[02:14:08] [SPEAKER_00] At this point log runs, right?
[02:14:10] [SPEAKER_00] Because it's like, I've checked on my dependencies.
[02:14:13] [SPEAKER_00] This one, both because it is white and it's one.
[02:14:18] [SPEAKER_00] We know that nothing needs to happen.
[02:14:20] [SPEAKER_00] This one now runs at this point once.
[02:14:25] [SPEAKER_00] Then it goes, okay, I'm good.
[02:14:28] [SPEAKER_02] It's out of the queue.
[02:14:30] [SPEAKER_02] Yeah.
[02:14:30] [SPEAKER_02] Yeah.
[02:14:30] [SPEAKER_00] Out of the queue.
[02:14:31] [SPEAKER_00] This one comes in.
[02:14:32] [SPEAKER_00] It goes to ask up and immediately sees that this one's white, so it's good and goes, oh,
[02:14:37] [SPEAKER_01] it's the same version in our system right what it's the version there's no color on our graph
[02:14:44] [SPEAKER_01] in our system what it does is actually it asks x like hey make sure your version is up to date
[02:14:48] [SPEAKER_01] yeah so okay x internally goes i got nothing to do i i know that i'm not fail it it's comparing
[02:14:54] [SPEAKER_00] this to this it's comparing the x node to the edge node so it's comparing like what is
[02:14:58] [SPEAKER_02] the version i saw you last time and what's your current version right
[02:15:04] [SPEAKER_02] And if those deeper, like, like, you know, the current version is up, then like, hey, you know, I've changed.
[02:15:10] [SPEAKER_00] And then bang, it doesn't actually run.
[02:15:12] [SPEAKER_00] And we're good.
[02:15:12] [SPEAKER_00] Okay.
[02:15:13] [SPEAKER_02] Yeah.
[02:15:14] [SPEAKER_00] Good.
[02:15:16] [SPEAKER_00] Yeah.
[02:15:19] [SPEAKER_00] So under the signals hood, there's a Ryan who changes all the color of the boxes.
[02:15:23] [SPEAKER_00] Yes, exactly.
[02:15:24] [SPEAKER_00] That's that's the I was trying to do that.
[02:15:26] [SPEAKER_00] Like, it's funny because I was doing all the extra color changes so that the visual, like if someone actually sped it up like a GIF or something, they could actually see the color propagation.
[02:15:35] [SPEAKER_00] But yeah.
[02:15:36] [SPEAKER_01] So.
[02:15:37] [SPEAKER_01] Maybe this is...
[02:15:39] [SPEAKER_00] Yeah.
[02:15:39] [SPEAKER_00] I don't remember if MobX has value change, but there's different versions of the algorithm.
[02:15:46] [SPEAKER_00] There's the versioning version here, which I believe Preact does something a little bit
[02:15:50] [SPEAKER_00] similar to.
[02:15:51] [SPEAKER_00] There is the dirty notified double counter that MobX used early days where they'd have
[02:15:59] [SPEAKER_00] two counters and you count up all the references and then count up all the execution and then
[02:16:05] [SPEAKER_00] minus if something hasn't changed.
[02:16:07] [SPEAKER_00] There's the actual, what reactively uses, and I guess to a degree solid uses, which is the two color dirty checking, or the two color coloring system.
[02:16:21] [SPEAKER_00] There's basically multiple versions of the algorithm, but they roughly...
[02:16:26] [SPEAKER_00] There's a few choices like when you run the effect.
[02:16:28] [SPEAKER_00] Do you only like do you run it immediately when you get back down and then pull or do you go up both sides?
[02:16:33] [SPEAKER_00] Like there's a few different variations, but generally they all all the signal libraries result in this very similar final behavior in terms of the fact that they all run once and and kind of pull out that's kind of topological.
[02:16:46] [SPEAKER_00] There can be some differences.
[02:16:48] [SPEAKER_00] But ultimately, like, you know you need to run this before this and that like the sibling branches could different differ, you know, perhaps than when they execute.
[02:16:59] [SPEAKER_00] But generally speaking, you have this guarantee that you always know that the parent or the higher up here in the tree will run before the lower and that everything runs once.
[02:17:09] [SPEAKER_00] Yes.
[02:17:10] [SPEAKER_02] Yes.
[02:17:10] [SPEAKER_02] But I think so now, like, I don't know, maybe interesting, like, twist on this conversation is like, what are the properties that we are getting out of this, like, you know, particular approach, or like how, how the signal library behaves, right, like, because there are kind of
[02:17:25] [SPEAKER_02] kind of side effects or most of those implementation choices.
[02:17:30] [SPEAKER_00] Yeah, I mean, if there's something that you want to bring up on that, I'm all ears.
[02:17:33] [SPEAKER_00] Because this is something that has very much been kind of an interesting exploration by a lot of libraries recently.
[02:17:40] [SPEAKER_00] there has been like these multiple different approaches and everyone's like benchmarking their
[02:17:45] [SPEAKER_00] different versions and seeing where things fall and whatnot. Yeah. Yeah. By the way, thanks for
[02:17:49] [SPEAKER_00] benchmarking. It's like our life so much easier. Yeah. Yeah. My this is, this is always the first
[02:17:54] [SPEAKER_00] step. Um, like it was, the JS framework benchmark was so vital for figuring out DOM
[02:18:00] [SPEAKER_00] operation kind of like common procedure benchmarks and been used for over years for library
[02:18:05] [SPEAKER_00] optimization for, you know, simple list operations, things like sorting and
[02:18:09] [SPEAKER_00] and, you know, adding rows and all this stuff.
[02:18:12] [SPEAKER_00] One of the challenges we've had with a lot of reactive benchmarks
[02:18:15] [SPEAKER_00] is they've been either really, really simplistic,
[02:18:17] [SPEAKER_00] like jamming a single value or they test one scenario really well.
[02:18:22] [SPEAKER_00] And over the years, I think there's been about four or five different benchmarks
[02:18:24] [SPEAKER_00] that we've used.
[02:18:25] [SPEAKER_00] Milo...
[02:18:27] [SPEAKER_00] from Solid Core team we had on last week,
[02:18:29] [SPEAKER_00] actually just released, put them all in single repo.
[02:18:33] [SPEAKER_00] So all five different benchmarks,
[02:18:34] [SPEAKER_00] you can just like write your implementation
[02:18:36] [SPEAKER_00] and then test against all of them.
[02:18:38] [SPEAKER_00] And I mean, it's pretty,
[02:18:39] [SPEAKER_00] it's pretty, like there's a lot of stuff here.
[02:18:43] [SPEAKER_00] I mean, you did a whole bunch of graphs here, but like,
[02:18:45] [SPEAKER_00] like different shapes of reactive graphs different types of stuff so far in this benchmark he has
[02:18:51] [SPEAKER_00] reactively he has x-ray activity coordinate which is solid 2.0 or maverick kind of hidden
[02:18:58] [SPEAKER_00] pre-act signal solid today um u signal and then he he dropped the current working version of
[02:19:05] [SPEAKER_00] the angular uh signals in here as well and you can see like there's a lot of variation like
[02:19:10] [SPEAKER_00] some solutions for example are really good at deep like uh
[02:19:13] [SPEAKER_00] like preact like really good when stuff's super deep but then like you might go really wide and
[02:19:20] [SPEAKER_00] then have like the exact opposite effect where you know preacts actually like over here um and
[02:19:27] [SPEAKER_00] there's like different types of like graphs like how would if it's wide and kind of dynamic you know
[02:19:33] [SPEAKER_00] like this can actually change even between like
[02:19:36] [SPEAKER_00] you know, different types of libraries and stuff.
[02:19:40] [SPEAKER_00] So it's like, it's really interesting to see the shape of the graph actually impact the performance.
[02:19:44] [SPEAKER_00] And like, there's this is actually Milo's benchmark, but he put in Cairo's benchmark.
[02:19:51] [SPEAKER_00] I remember this one. This was a good one, which tests specifically different shapes like diamond and triangle and and like.
[02:20:00] [SPEAKER_01] like other shapes and then he did he put in I think cell X here here's cell X this
[02:20:07] [SPEAKER_01] is the one that that everyone's been like posting online for for ages where yeah
[02:20:16] [SPEAKER_01] it's it's it's interesting just kind of see how varied the different types of
[02:20:21] [SPEAKER_01] results are like this was mentioning where like preact is very very very good
[02:20:24] [SPEAKER_01] at cell X so anyway yeah sorry little tangent
[02:20:31] [SPEAKER_00] but yeah no but it is important right like because we i mean we like so far when we released the
[02:20:38] [SPEAKER_00] library we didn't do any like benchmarking on it uh so or any optimization for that matter
[02:20:44] [SPEAKER_00] so so i was like actually my task one of my tasks was like go into all the like existing benchmarks
[02:20:50] [SPEAKER_00] just like put them in one place and like you know just again see how it compares
[02:20:54] [SPEAKER_00] and i'm seeing like your tweet today in the morning it was like
[02:20:57] [SPEAKER_00] Well, that's great.
[02:20:59] [SPEAKER_00] Now I can just throw around them.
[02:21:00] [SPEAKER_00] So that was excellent timing.
[02:21:02] [SPEAKER_01] Yeah, I think this will really actually shine the light on this stuff.
[02:21:06] [SPEAKER_01] It's interesting because I focus more on the DOM side a lot because I'm doing the UI rendering library and the reactivity doesn't actually always translate.
[02:21:13] [SPEAKER_01] It doesn't actually make as big of an impact on benchmarks that are set up to do DOM diffing as the test.
[02:21:20] [SPEAKER_01] So, like, almost all these systems in here literally, like, like, might not even dent that, like, even the slowest to the fastest.
[02:21:28] [SPEAKER_01] But I think there are types of systems where, like, different, like, reactivity is more complicated.
[02:21:35] [SPEAKER_01] Like, a lot of times, like, when you're building an application, the reactivity isn't actually that deep that often.
[02:21:40] [SPEAKER_01] It depends on what your setup is.
[02:21:42] [SPEAKER_01] But, like, usually, like, you have some state, and then you have, like, a few drive levels, and then you get into the templating, and there's, like, like, you...
[02:21:49] [SPEAKER_01] like at least this has been what I've found like you don't you're not driving this from this from
[02:21:54] [SPEAKER_01] this and this and this the down a chain unless you're making like a yeah a Gantt chart maker then
[02:21:59] [SPEAKER_01] then maybe your dates feed into your dates that feed into your dates that feed into your dates
[02:22:02] [SPEAKER_01] but a lot of times like there's different patterns but the point is when you actually
[02:22:09] [SPEAKER_01] hit those different patterns they can have drastically different performance consider considerations
[02:22:15] [SPEAKER_01] so it's really nice to as a reactor library be like look am I
[02:22:17] [SPEAKER_01] am
[02:22:18] [SPEAKER_01] like at least decent here.
[02:22:20] [SPEAKER_01] Yeah.
[02:22:21] [SPEAKER_01] And what's interesting to me too is a lot of these
[02:22:23] [SPEAKER_01] we need to get more benchmarks in here.
[02:22:26] [SPEAKER_01] Almost all of the new breed of reactive libraries
[02:22:28] [SPEAKER_01] that have come out recently
[02:22:29] [SPEAKER_01] have a lot higher performance
[02:22:31] [SPEAKER_01] than the previous generation.
[02:22:35] [SPEAKER_01] Like I was showing that stuff with these charts that stream,
[02:22:39] [SPEAKER_01] but there was a time period.
[02:22:40] [SPEAKER_01] I remember this because Solid was based roughly on SJS
[02:22:43] [SPEAKER_01] and SJS was always the fastest
[02:22:45] [SPEAKER_01] in every benchmark because several things.
[02:22:47] [SPEAKER_01] So on the other side, there was other...
[02:22:49] [SPEAKER_01] frame libraries that we don't have in here. Over time, what I've noticed is almost all the new
[02:22:55] [SPEAKER_01] libraries are much faster now than like what we were dealing with, you know, three or four years
[02:23:03] [SPEAKER_01] ago. Solid's now actually on a lot of these benchmarks towards the back end of this pack. So
[02:23:10] [SPEAKER_01] it's interesting to like having benchmarks like this will give us the ability to like
[02:23:14] [SPEAKER_01] like learn or figure out how to like better handle all these kind of cases and kind of
[02:23:20] [SPEAKER_00] you know push these things forward yeah and i remember i was like tweeting about it like
[02:23:25] [SPEAKER_00] some time ago that it will be like the same as for vdom right like we started to compare
[02:23:30] [SPEAKER_00] things and just kind of go into discussion and like between authors it's like
[02:23:34] [SPEAKER_00] the tuning and fine tuning and finding tricks and like that's definitely what's going to happen here right yeah yeah exactly UI bench this is the back this is probably the best VDOM benchmark that I've seen
[02:23:47] [SPEAKER_01] um uh just side note if anyone wants to sit there and test their VDOM there are some non VDOM implementations here oh right it's
[02:23:57] [SPEAKER_01] Sorry, it's because it pops it up in a different window and my pop-up blocker is blocking it.
[02:24:03] [SPEAKER_01] Okay, whatever.
[02:24:04] [SPEAKER_01] It runs tree-shaped.
[02:24:07] [SPEAKER_01] It runs like lists.
[02:24:09] [SPEAKER_01] It runs partial updates.
[02:24:12] [SPEAKER_01] It like runs all the different like tons of different VDOM specific diffing.
[02:24:16] [SPEAKER_01] Like they even have tests that are like hard for SnapDOM, hard for this, like basically looking at algorithms that are like tricky for
[02:24:25] [SPEAKER_01] like different algorithms and setting tests up to test those kind of scenarios.
[02:24:29] [SPEAKER_01] Yeah, so I know, I don't know if we'll ever go like to that degree,
[02:24:33] [SPEAKER_01] but just having all the reactive benchmarks kind of gives us that kind of information anyway.
[02:24:37] [SPEAKER_01] Sorry, tangent.
[02:24:40] [SPEAKER_00] Right. So like if we like, yeah, go back to this graph.
[02:24:43] [SPEAKER_00] I think like there are like at least three interesting properties that I think
[02:24:47] [SPEAKER_00] worth mentioning.
[02:24:49] [SPEAKER_00] So one is
[02:24:51] [SPEAKER_00] I mean, maybe let's start with lazy evaluation because it's just like easy to visualize right like so when we when we push this dirt down like there are no real computations.
[02:25:03] [SPEAKER_00] So if nothing creates the value there will be nothing computing right like so if you you can go to this branch like you know was the X like run this effect and the double count will be never.
[02:25:18] [SPEAKER_00] recalculate so like if nothing creates the value then like it's not okay to compute it which
[02:25:24] [SPEAKER_00] I think there is this like the whole class of libraries that are like kind of lazy and lazy
[02:25:30] [SPEAKER_01] computation.
[02:25:30] [SPEAKER_01] Yeah, yeah.
[02:25:31] [SPEAKER_01] And that's another example where like things have kind of progressed a bit on time because
[02:25:34] [SPEAKER_01] I think we started with reactivity on a more eager side of things.
[02:25:37] [SPEAKER_01] It's solid today actually.
[02:25:38] [SPEAKER_01] It's computed.
[02:25:39] [SPEAKER_01] It's our eager.
[02:25:41] [SPEAKER_01] But like over time is like, you know, we start going, oh, can we make it more pull based?
[02:25:46] [SPEAKER_01] I think in general.
[02:25:48] [SPEAKER_01] You know, because you on one hand you have stuff like RX and like knockout.
[02:25:51] [SPEAKER_01] It's like really push based even with this kind of patterns like that's what people thought.
[02:25:55] [SPEAKER_01] And then over time like mob X was lazier view and we're getting to a point where the stuff that's getting built now is almost it's it's funny.
[02:26:01] [SPEAKER_01] It's gone from that push thing that we described earlier.
[02:26:04] [SPEAKER_01] to almost being completely pull-based, which is really interesting properties because now you can, as you mentioned, if these effects don't happen at the end, you can just compute these like whenever you want.
[02:26:16] [SPEAKER_01] So it's really powerful for types of APIs and like functionality that, you know, funny things that I've had challenges with it.
[02:26:23] [SPEAKER_01] I've still managed to solve them with Eager, but it took like a lot more thinking, but like things like offscreen.
[02:26:28] [SPEAKER_01] or things like suspense or whatever,
[02:26:31] [SPEAKER_01] like where you can basically go,
[02:26:32] [SPEAKER_01] no, I know, I can kind of like leave those effects to later.
[02:26:36] [SPEAKER_01] Like I can like not do the extra work
[02:26:39] [SPEAKER_01] until I need to do the extra work.
[02:26:40] [SPEAKER_01] which is really interesting from my perspective,
[02:26:42] [SPEAKER_01] just from a theoretical kind of zone,
[02:26:43] [SPEAKER_01] because it means that the mentality of stuff like React
[02:26:46] [SPEAKER_01] or the stuff is actually converging more than people realize.
[02:26:50] [SPEAKER_01] Like that the types of features that, you know,
[02:26:52] [SPEAKER_01] might people have been like, oh no, you need, you know,
[02:26:55] [SPEAKER_01] you can't do it easily with push base
[02:26:57] [SPEAKER_01] because, you know, just, you know, reactivity or push base
[02:26:59] [SPEAKER_01] because it just does too much work
[02:27:00] [SPEAKER_01] and you can't do it effectively or cheaply.
[02:27:03] [SPEAKER_01] I don't think that's true anymore.
[02:27:05] [SPEAKER_01] I actually think that the, a lot of the like case,
[02:27:09] [SPEAKER_01] cases where this reactivity was seen maybe as not as beneficial in the past.
[02:27:14] [SPEAKER_01] A lot of the performance pieces are actually come together in a way where that is actually not the same kind of deterrent it was back in the day when, like, say, when React was created.
[02:27:25] [SPEAKER_01] So...
[02:27:28] [SPEAKER_00] right that's maybe a little hot take but no i mean i mean like there's there are like um i think
[02:27:34] [SPEAKER_00] there are interesting properties right like if you don't eagerly like just kind of you know how
[02:27:39] [SPEAKER_00] we traverse this graph without like we'll see how it like you know plays out in the future but
[02:27:44] [SPEAKER_01] like i think it is interesting property yeah yeah there's some comments about like people are like
[02:27:54] [SPEAKER_01] I enjoyed Reactivity Padding, how we worked with MobX, but I found that the use day-to-day work very limited.
[02:27:59] [SPEAKER_01] It was quite rare you needed to find green updates that would affect performance.
[02:28:03] [SPEAKER_01] The interesting thing is we're talking about performance a lot, but I don't think that's really the motivation here at all.
[02:28:08] [SPEAKER_01] I just want to kind of point that out there.
[02:28:09] [SPEAKER_01] Because it is in the sense that it fixes an awkward problem, but what's actually...
[02:28:14] [SPEAKER_01] I don't know. For you, there's a whole other side to this, right?
[02:28:18] [SPEAKER_01] Yeah.
[02:28:19] [SPEAKER_00] Yeah, and I think like performance is like, I mean, like if we look at it from the zone
[02:28:24] [SPEAKER_00] GS point of view, there is obviously a performance aspect of it, right?
[02:28:28] [SPEAKER_00] Like because we zone GS like on one hand over notifies, right?
[02:28:33] [SPEAKER_00] Like it will fire whenever something happens in the browser and it goes after the whole
[02:28:37] [SPEAKER_00] tree.
[02:28:38] [SPEAKER_00] So like the if we can do updates of a single component that is concerned and only, you know,
[02:28:45] [SPEAKER_00] when something really happened, that's obviously a win.
[02:28:48] [SPEAKER_00] But I think we had these conversations with Alex.
[02:28:51] [SPEAKER_00] I remember sitting in the office in San Francisco.
[02:28:54] [SPEAKER_00] It's like, oh yeah, we can look at it from the performance point of view.
[02:28:59] [SPEAKER_00] But for me, it's more even about the mental model.
[02:29:02] [SPEAKER_00] How can I reason about those things?
[02:29:05] [SPEAKER_00] I can have this idea in my head that I'm setting up those connections,
[02:29:11] [SPEAKER_00] and I know that they will always stay in sync.
[02:29:13] [SPEAKER_00] Right. Like, so like it doesn't matter if it's the first time I'm creating a given value or like something updates as the application leaves, but it is it's I've created the rules of the game for the model and the system kind of keeps it in sync for me. I express it once.
[02:29:32] [SPEAKER_00] And that's it, right?
[02:29:33] [SPEAKER_00] Like, and I've got those guarantees that it will only update.
[02:29:37] [SPEAKER_00] Those rules will only come to play where something precise happened.
[02:29:41] [SPEAKER_00] And I know those rules will be executed in this glitch-free way.
[02:29:44] [SPEAKER_00] And that's like huge peace of mind, right?
[02:29:47] [SPEAKER_00] Like I know I've expressed the rule.
[02:29:49] [SPEAKER_00] This value depends on this value.
[02:29:51] [SPEAKER_00] That's it.
[02:29:51] [SPEAKER_00] It's forever.
[02:29:53] [SPEAKER_01] Yeah.
[02:29:53] [SPEAKER_01] I remember the first time that really clicked with me.
[02:29:56] [SPEAKER_01] I was, I mean, it was a long time ago, it was like 2010-ish, you know, I was playing with
[02:29:59] [SPEAKER_01] NACO.
[02:30:00] [SPEAKER_00] And I was kind of into game programming, like early on.
[02:30:05] [SPEAKER_00] And game programming is largely a lot of re-rendering,
[02:30:10] [SPEAKER_00] like kind of imperative mode, kind of our immediate mode kind of modeling.
[02:30:14] [SPEAKER_00] But I went into...
[02:30:17] [SPEAKER_00] building like something very simple, like a tic-tac-toe,
[02:30:20] [SPEAKER_00] or something like where it's like visual,
[02:30:21] [SPEAKER_00] but it was like kind of state-based
[02:30:23] [SPEAKER_00] and trying to describe the rules of how one wins the game
[02:30:28] [SPEAKER_00] and like how to calculate stuff.
[02:30:30] [SPEAKER_00] And for me, that was like just such an obvious thing
[02:30:34] [SPEAKER_00] for reactivity because I started playing with it
[02:30:36] [SPEAKER_00] and then I was like, oh yeah, if this condition is true,
[02:30:38] [SPEAKER_00] then you have one and this.
[02:30:39] [SPEAKER_00] And I started modeling all my state like that.
[02:30:41] [SPEAKER_00] It wasn't about components.
[02:30:42] [SPEAKER_00] It wasn't about like how I rendered the tree.
[02:30:44] [SPEAKER_00] I just described the state of the game
[02:30:46] [SPEAKER_00] using these relationships and then funny enough like what I found a few bugs along the way but
[02:30:52] [SPEAKER_00] once I described it and I thought about like okay yeah these are the rules I could just look at
[02:30:56] [SPEAKER_00] the rules and then understand how the whole game played out and this was like
[02:31:01] [SPEAKER_00] like super powerful for me for me personally though it actually called back something much older um in in school actually I don't know if anyone does this anymore but f f um was it like m what's it called fpm GA the stupid circuit board programming stuff or like VHDL yeah yeah like when you design the boards if you do the more electrical side of the engineering um
[02:31:24] [SPEAKER_00] it was like the same kind of paradigm where you like you you like because everything is
[02:31:31] [SPEAKER_00] Like, it's not this, then, this, then this.
[02:31:34] [SPEAKER_00] Everything describes a system that's always in place.
[02:31:37] [SPEAKER_00] So you're kind of like, it's like wiring up circuits or whatever.
[02:31:40] [SPEAKER_00] That's where the signal term comes from, actually.
[02:31:43] [SPEAKER_00] And like, for me personally, that kind of, it gave me the sense of control.
[02:31:50] [SPEAKER_00] Like, I say what the rules are and the system does it.
[02:31:55] [SPEAKER_00] Like, there's no question of how it runs.
[02:31:58] [SPEAKER_00] It's like literally like, and I think people who use RXJS get this feeling too.
[02:32:02] [SPEAKER_00] It's just through time.
[02:32:04] [SPEAKER_00] They go like, I know that I've accounted for everything because the way it pipes through.
[02:32:08] [SPEAKER_00] Here it's a synchronization thing.
[02:32:10] [SPEAKER_00] It's like, I know that when a drop of water falls over here, everything will be in exact
[02:32:17] [SPEAKER_00] like the, you know, like the butterfly effect.
[02:32:19] [SPEAKER_00] Everything will be exactly how I intended it.
[02:32:22] [SPEAKER_02] yeah and again like you describe it once only right like there is no like special paths it's just
[02:32:28] [SPEAKER_01] the state of the system sorry alice that declarative like almost dsl like way of thinking about
[02:32:35] [SPEAKER_01] the problem this is really um really powerful it hits you hard i think for for me that came um
[02:32:42] [SPEAKER_01] i'm a compiler person right like one of the big things i worked on for angular is the compiler
[02:32:47] [SPEAKER_01] But when you study compilers in a formal way, you go through this exercise of writing a parser in Prolog where basically you are not imperatively parsing strings.
[02:32:58] [SPEAKER_01] You're just describing the rules of your grammar to the system in a way.
[02:33:02] [SPEAKER_01] And then you just put in the input and it like spits out the parsed version of it.
[02:33:08] [SPEAKER_01] And it feels really powerful for a very similar reason that like...
[02:33:12] [SPEAKER_01] you're not having to think about how to solve this problem or like which things need to update where
[02:33:17] [SPEAKER_01] you're just telling the system about the problem and the properties of the problem and
[02:33:23] [SPEAKER_01] the properties of your solution that you want and then it figures it out for you yeah yeah i mean
[02:33:30] [SPEAKER_00] i think people need to play with it a bit because like this has been kind of a
[02:33:34] [SPEAKER_00] Yeah, I mean, just play around with the primitives.
[02:33:37] [SPEAKER_00] It's it's it's it's really surprisingly freeing.
[02:33:41] [SPEAKER_00] And I know the unfortunate part is it kind of ruined other things for me because once I
[02:33:46] [SPEAKER_00] had that sense of like, you know, control and I think that's something that might
[02:33:49] [SPEAKER_00] appeal to certain types of developers or certain developers on a certain part
[02:33:54] [SPEAKER_00] of time in their career path or like where they are like where their patience is,
[02:33:59] [SPEAKER_00] you know, in terms of, you know, like
[02:34:01] [SPEAKER_00] it's hard to kind of, sometimes it's hard to kind of give that up again.
[02:34:05] [SPEAKER_00] You know, I don't know how else to put it.
[02:34:06] [SPEAKER_00] Like I, I, I just started kind of like, it was, I mean, again, this is all kind of going
[02:34:12] [SPEAKER_00] back to my personal story, but I was like playing with these patterns.
[02:34:16] [SPEAKER_00] Then I saw React come out and I was like, okay.
[02:34:19] [SPEAKER_00] And then I actually got really excited about React again when hooks came out.
[02:34:23] [SPEAKER_00] It was actually the, the, the, when I started seeing the, the ability to just kind of go like
[02:34:29] [SPEAKER_00] this declarative data, like,
[02:34:31] [SPEAKER_00] it's it's it's it is like it is a really powerful thing even in all the different versions it comes
[02:34:40] [SPEAKER_00] in you know okay yeah okay sorry this is the wax poetically about signals part of the show sorry
[02:34:47] [SPEAKER_00] sorry everyone for having to to live through that um yeah i i was just looking at some of the stuff
[02:34:53] [SPEAKER_00] through chat too i was like trying to see because people were talking about like
[02:34:57] [SPEAKER_00] two-way binding and stuff like that and I mean we talked a bit about about it some sometimes the
[02:35:02] [SPEAKER_00] APIs like this can kind of inform you like when you the separate like this the set and
[02:35:08] [SPEAKER_00] I don't know, like sometimes when you have a get in a set, sometimes that can like make it enough of like, I think the thing with two way binding isn't necessarily like you don't need to or shouldn't have it necessarily.
[02:35:18] [SPEAKER_00] But it's like you should know what you're doing. If you're going to do it, you should know what you're doing. So sometimes just subtle things like very explicit APIs can help like understand what world you live in.
[02:35:30] [SPEAKER_00] I'm my understanding if I remember correctly is angular has two-way bindings but the big difference
[02:35:34] [SPEAKER_00] between angular one and angular two was it angular one was like everything was like implicitly
[02:35:39] [SPEAKER_00] two-way binded and then angular two it kind of became like look if you're going to two-way
[02:35:43] [SPEAKER_00] bind you have to actually specify that you need to that you you could do that am I right
[02:35:47] [SPEAKER_02] yeah and and I think also like totally data binding is kind of over
[02:35:52] [SPEAKER_02] like you know blowing it because in the sense it's a synthetic sugar for two operation it's really
[02:35:57] [SPEAKER_02] just like responding to an event and assigning to a variable right like so it is it is there is
[02:36:04] [SPEAKER_02] an event involved right like this is what you would do in other any other framework you
[02:36:09] [SPEAKER_02] really subscribe to the change event or input event and then you write to the source we just
[02:36:15] [SPEAKER_02] like have synthetic sugar for this and we call it to a data binding but it is
[02:36:19] [SPEAKER_02] like oh no it's i'm going to write to the random place right oh someone did have a
[02:36:25] [SPEAKER_00] good question they're asking if you guys had thought about nested reactivity things like
[02:36:29] [SPEAKER_00] you know equivalence all stores or whatever like the or views reactivity have you guys given
[02:36:33] [SPEAKER_01] much thought to deep deep reactivity at all yeah not enough thought but okay definitely some um
[02:36:42] [SPEAKER_01] So we have quite a few libraries in the Angular ecosystem that attempt to tackle the problem of state management,
[02:36:50] [SPEAKER_01] usually using some flavor of RxJS observable patterns.
[02:36:57] [SPEAKER_01] And we've been kind of collaborating with them and seeing what ideas they have,
[02:37:03] [SPEAKER_01] what designs they come up with for dealing with state management in the ways that they've been working with over the years.
[02:37:11] [SPEAKER_01] um so i think we're kind of trying to find this balance of not like not having a complete solution
[02:37:20] [SPEAKER_01] for state management in angular not owning that whole piece of the problem but providing enough
[02:37:25] [SPEAKER_01] primitives and enough of a kind of lower level layer that people can build these bigger more
[02:37:31] [SPEAKER_00] opinionated solutions on top of it okay yeah i mean that's the thing those can like the the
[02:37:38] [SPEAKER_00] nested stuff can also mostly be built in user land um
[02:37:42] [SPEAKER_00] I brought it in because I turned point and it was like, this is going to be a pretty common pattern.
[02:37:45] [SPEAKER_00] But I think it depends on the rendering pattern.
[02:37:47] [SPEAKER_00] It's very common and solid because you almost need it if you want to be as fine as fine grain can be.
[02:37:54] [SPEAKER_00] But on the other hand, if that's not the focus, it's not nearly as important.
[02:38:00] [SPEAKER_01] So a good example for us is like, I think we're going to need it when we do the repeater, the for loop.
[02:38:08] [SPEAKER_01] uh because you want to be able to say hey i have you know a thousand rows in this table that i'm
[02:38:13] [SPEAKER_01] displaying and if i only change something inside one of those rows i don't want to have to re-render
[02:38:19] [SPEAKER_01] or you know refresh at least all other 999 of them no not so much yeah so there are points
[02:38:26] [SPEAKER_01] at which the the framework almost builds compute it's for you um so iteration is an example of
[02:38:33] [SPEAKER_01] that where like each row is effectively like a computed of reading that element of the array
[02:38:38] [SPEAKER_01] that we need to make sure that we properly handle like nested reactivity at those points.
[02:38:44] [SPEAKER_00] Yeah, yeah, no, that makes a lot of sense.
[02:38:47] [SPEAKER_00] Yeah, I mean, that was one of the, that is when you start seeing kind of almost the magic effect.
[02:38:52] [SPEAKER_00] Like there, I've used this in demos before, React did a React forget compiler demo,
[02:38:56] [SPEAKER_00] and they showed like how they did the compiler and all this stuff.
[02:38:59] [SPEAKER_00] And the thing is when you have stores and the, like the repeater, as you call it,
[02:39:02] [SPEAKER_00] or like the iteration loop mechanism,
[02:39:07] [SPEAKER_00] you can get that feeling of nested auto-memorization without any compiler or any any additional tricks to it.
[02:39:17] [SPEAKER_00] And that is super powerful. It's also one of the hardest problems from a compiler perspective.
[02:39:21] [SPEAKER_00] I haven't seen a compiler handle a nested reactivity yet. I think it's actually a hard, much harder problem.
[02:39:28] [SPEAKER_00] But yeah, I mean, oh, that's interesting. I didn't know about...
[02:39:35] [SPEAKER_00] What was going on happening?
[02:39:36] [SPEAKER_00] The interesting of adding spelt stores to Angular.
[02:39:38] [SPEAKER_00] And was that news about a year ago?
[02:39:39] [SPEAKER_00] Was that something like related to your tweets, Paolo?
[02:39:43] [SPEAKER_00] Like maybe that's where that key was.
[02:39:44] [SPEAKER_02] Right, right, right.
[02:39:44] [SPEAKER_02] So that kind of was part of the story, right?
[02:39:47] [SPEAKER_02] Like that angle of where I was trying to find this state
[02:39:52] [SPEAKER_02] strategy that I could use to share code between applications.
[02:40:00] [SPEAKER_02] and at the time like most of the company was using like redoxy or like redox global uh store
[02:40:07] [SPEAKER_02] and that's obviously it's not like you know easy to pull a piece of state like this and uh just
[02:40:15] [SPEAKER_02] trade between applications so that's i was like that that was part of like oh i'm looking at
[02:40:20] [SPEAKER_02] reactive primitives and i was like looking at third stores because it looked like um
[02:40:26] [SPEAKER_02] you know i can create smaller stores like uh so there were some lessons from this but uh and that's
[02:40:35] [SPEAKER_02] i think we at some point we talked about it right like i i was looking at it like can this be a
[02:40:40] [SPEAKER_02] primitive um to to create uh this shared state between application i didn't consider it as the
[02:40:49] [SPEAKER_02] as the building block for the framework but like more like a shrebel state but
[02:40:57] [SPEAKER_02] But yeah, but like, you know, with time, I think like if we kind of tie this discussion back to signals, they give us properties that I was mentioning.
[02:41:07] [SPEAKER_02] So I've got, I can have one reactive system in components, outside components, I don't have to subscribe explicitly, syntactically, they are kind of nicer and so on.
[02:41:20] [SPEAKER_02] So my...
[02:41:23] [SPEAKER_02] kind of, you know, love story with the spell stories, I think it's over at this point.
[02:41:29] [SPEAKER_00] Yeah.
[02:41:30] [SPEAKER_00] We've been talking about like more complicated use cases here, right?
[02:41:34] [SPEAKER_00] Because we were talking about the sort of we're talking about like stores,
[02:41:38] [SPEAKER_00] like the nested stores reactivity and stuff.
[02:41:41] [SPEAKER_00] One thing I forgot to actually ask you guys,
[02:41:43] [SPEAKER_00] because I didn't actually see it here, is do you have a...
[02:41:47] [SPEAKER_00] Do you guys support nested reactivity just out of curiosity?
[02:41:51] [SPEAKER_00] Like, can I put an effect inside an effect?
[02:41:53] [SPEAKER_00] I know this is like such a silly thing.
[02:41:55] [SPEAKER_00] The reason it matters is if I want to make Angular Rx DOM expressions,
[02:42:00] [SPEAKER_00] like I have this game where I take everybody's reactive library and then make solid with it.
[02:42:04] [SPEAKER_00] I did it with React.
[02:42:06] [SPEAKER_00] I could do it with Angular signals if there's a couple things.
[02:42:11] [SPEAKER_00] And those couple things are, is there an untruth?
[02:42:14] [SPEAKER_00] untrack yeah untrack super peak is not sufficient untrack is super important and the other one is
[02:42:22] [SPEAKER_01] can i yeah can i nest effects is this is this a thing um it is not a thing in our design that's
[02:42:29] [SPEAKER_01] explicitly supported um there's nothing i the the
[02:42:35] [SPEAKER_01] The main piece I think that's missing right now is some notion of like tear down for effects.
[02:42:40] [SPEAKER_00] Right.
[02:42:41] [SPEAKER_00] Do effects, like is there a dispose function on?
[02:42:44] [SPEAKER_00] Like do you guys do this?
[02:42:45] [SPEAKER_01] There is a dispose function on it.
[02:42:47] [SPEAKER_01] So D there you can call dot destroy and it will destroy.
[02:42:51] [SPEAKER_01] Right.
[02:42:51] [SPEAKER_00] So I can go like D dot destroy and then I,
[02:42:54] [SPEAKER_00] if this works properly, I should never see anything.
[02:42:59] [SPEAKER_02] thing because it's all in the because it's scheduled yeah yeah exactly but if I put in but if I put
[02:43:05] [SPEAKER_00] in like the first um yeah then one of them should hopefully we should probably get the zero
[02:43:10] [SPEAKER_02] hopefully come on stacklets or did I freeze everything yeah maybe
[02:43:21] [SPEAKER_00] and we created an infinite loop i don't know okay so yeah so you manually handle the disposal that's
[02:43:27] [SPEAKER_00] fine that's fine for me if as long as you can nest in and it works and yeah what's missing here i
[02:43:33] [SPEAKER_01] think is like returning um a cleanup function from the the effect function so you can like create
[02:43:40] [SPEAKER_02] a nested effect and destroy it when you rerun it it's not the thing right now but yeah very likely
[02:43:45] [SPEAKER_02] it will be
[02:43:46] [SPEAKER_00] Okay, cool. Yeah. Okay. So, okay. Yeah. Yeah. That's ultimately good, but I can live without that.
[02:43:55] [SPEAKER_00] I actually only need the dispose function, and then I can manually wire this up. One of the
[02:43:59] [SPEAKER_00] interesting things in the approach, obviously, with Solids approach, which comes from
[02:44:03] [SPEAKER_00] Surplus and SJS, that kind of innovated this was this idea that...
[02:44:08] [SPEAKER_00] of ownership and having nested reactivity and reactivity.
[02:44:12] [SPEAKER_00] But funny thing is you can basically take any reactive system
[02:44:15] [SPEAKER_00] as long as you figure a way of registering some kind of parent context,
[02:44:19] [SPEAKER_00] using almost the same global context you do,
[02:44:22] [SPEAKER_00] you can just handle disposal that way.
[02:44:23] [SPEAKER_00] I don't think it's terribly important,
[02:44:24] [SPEAKER_00] probably not for your use case.
[02:44:25] [SPEAKER_00] It was just one of those things that I was like,
[02:44:27] [SPEAKER_00] I'm always like tweaking it.
[02:44:28] [SPEAKER_00] Like, am I going to come back next to you can be like,
[02:44:30] [SPEAKER_00] Like, the Preact case actually made a Preact version and ran it through the JS framework
[02:44:35] [SPEAKER_00] benchmark on stream and everything.
[02:44:37] [SPEAKER_00] And yeah, it was fast, you know?
[02:44:38] [SPEAKER_00] So everybody can enjoy solid like renders with their reactive system of their choice.
[02:44:44] [SPEAKER_00] Yeah, yeah, they have on track.
[02:44:46] [SPEAKER_00] Yes.
[02:44:47] [SPEAKER_00] Preact didn't have on track.
[02:44:48] [SPEAKER_00] It was a little bit hairy.
[02:44:50] [SPEAKER_00] It was fine for our example, but without on track, things can blow up.
[02:44:55] [SPEAKER_00] It's more important with nested reactivity because you want to define, you want to isolate zones almost.
[02:45:02] [SPEAKER_00] I'm sorry to everybody, but you like, you want to isolate areas of reactivity so not everything just fucking ties into each other.
[02:45:08] [SPEAKER_00] Because then some errant read in the wrong spot will cause the parent to update.
[02:45:12] [SPEAKER_00] And then, yeah, I've spent too much time in this area.
[02:45:16] [SPEAKER_00] But, okay, yeah.
[02:45:18] [SPEAKER_00] So, yeah, I was just curious.
[02:45:19] [SPEAKER_00] Okay, so...
[02:45:20] [SPEAKER_00] I probably have enough here for what I need, but so far clean up and is is is it the cleanup from the
[02:45:30] [SPEAKER_00] end user perspective isn't an implemented thing. Is there any is there anything?
[02:45:36] [SPEAKER_02] So I was waiting till you ask about batch.
[02:45:40] [SPEAKER_00] Right, right. Yeah. I mean, we could talk about this. My guess was that you have a, you use micro task flushing. This is like, this has been something that for more and more libraries.
[02:45:53] [SPEAKER_00] I, uh, solid's explicit batch is actually going away in 2.0 as well. Um, going to the queue micro. I was, I was dragging my feet on that one. I have to admit because I was like, I was like, I don't know. Is there a performance impact? Apparently not really. I.
[02:46:07] [SPEAKER_00] If there is, it's in like, you're not going to notice it in like a GS framework benchmark, which is good enough for me.
[02:46:14] [SPEAKER_00] But yes, I dragged my feet on that for a very long time because I was like, the milliseconds.
[02:46:19] [SPEAKER_00] Yeah.
[02:46:20] [SPEAKER_02] And like for us, it's kind of, you know, like the scheduling is obvious,
[02:46:24] [SPEAKER_02] like kind of area to play with because like we will have to tie it to the current framework.
[02:46:29] [SPEAKER_02] So like, I mean, in this, like the standalone library, it is microtask, but like effects,
[02:46:36] [SPEAKER_02] as Alex mentioned, those kind of internally are designed like to plug your, you know, like the timing of running.
[02:46:46] [SPEAKER_02] But I think like the batching is interesting, like for me in the sense that like with this,
[02:46:51] [SPEAKER_02] lazy reevaluate on pool semantics, you just kind of don't need specific, you know, like
[02:46:57] [SPEAKER_00] batching boundaries and... Right, right. And yeah, it was tricky, right? Because like,
[02:47:02] [SPEAKER_00] If you schedule synchronously, you have to have the explicit batch because there's no way to kind of prevent it.
[02:47:13] [SPEAKER_00] Once you're okay with an async pull, and the thing is, it's still synchronous.
[02:47:16] [SPEAKER_00] Even with an async pull, it just means that the guarantee you have to have isn't that everything...
[02:47:25] [SPEAKER_00] Like, isn't that the signal, like, executes on the same tick or whatever?
[02:47:29] [SPEAKER_00] It's that, like, once you go and propagate the change, and, like, everything has to be consistent.
[02:47:34] [SPEAKER_00] So whenever that point in the future is that you ask the question, that has to run all in the same tick or thing so that you get a consistent state.
[02:47:44] [SPEAKER_00] And this is...
[02:47:46] [SPEAKER_00] This is like the mentality work between, I keep on drawing comparisons to React and stuff,
[02:47:52] [SPEAKER_00] but when they do concurrent rendering, it's like the same kind of concept.
[02:47:55] [SPEAKER_00] It's like, it's a, there's a real, like sometimes when you see signals, you're like,
[02:47:58] [SPEAKER_00] oh, you know, maybe something like current rendering doesn't matter
[02:48:01] [SPEAKER_00] because you can like literally fine-grain every little change, you know,
[02:48:05] [SPEAKER_00] like there's, there's no, like expensive things become a lot cheaper,
[02:48:09] [SPEAKER_00] you know, you don't have to worry about a lot of stuff, but on the other hand,
[02:48:13] [SPEAKER_00] it's a whole other there's a difference between like propagating a specific change like slicing
[02:48:20] [SPEAKER_00] it that way and slicing it the other way so to speak where you're just like look i want all
[02:48:24] [SPEAKER_00] these changes to apply at the time of my choosing and then commit them together yeah so like the
[02:48:31] [SPEAKER_02] way i think about like you want entire graph to be like in sync in one atomic operation right
[02:48:37] [SPEAKER_02] exactly i just don't want to kind of leave like all part of the graph is just like funky and
[02:48:42] [SPEAKER_01] And nothing stops you from pulling from the graph in this case at any point, right?
[02:48:47] [SPEAKER_01] You don't have to wait for the async boundary in order to like safely read.
[02:48:52] [SPEAKER_00] Yeah, that's the coolest thing about derives values, you know, like the computed type model.
[02:48:58] [SPEAKER_00] Because like if you read it ahead of time anyways, you're always going to get the latest value anyways.
[02:49:04] [SPEAKER_00] So the only reason that it's awkward is if your effects would...
[02:49:09] [SPEAKER_00] somehow feed back into the reactive system and you kind of want to avoid that for the most part
[02:49:15] [SPEAKER_00] like there are cases where you need to do that because you're like reading from the dom or reading
[02:49:18] [SPEAKER_00] from like like you there's some downstream thing where you like have to schedule it and you're
[02:49:22] [SPEAKER_00] like okay do the work and then because of that work do this other work like there are those chains
[02:49:27] [SPEAKER_00] but generally speaking derive where you can like don't like don't just start like
[02:49:33] [SPEAKER_00] people sometimes ask me why do you even have computids well it solves the diamond problem
[02:49:37] [SPEAKER_00] like we were showing earlier if you didn't have computers and you just were like affect right
[02:49:41] [SPEAKER_00] signal um even if it was synchronous you would be like ping ponging everywhere there'd be no
[02:49:46] [SPEAKER_00] guarantees and in a sense that's what the earliest reactive systems of this nature were like um
[02:49:51] [SPEAKER_00] actually get making derived like this is i said that signals were earlier were the special
[02:49:57] [SPEAKER_00] part because they are the only thing that can mutate in the system and they're
[02:50:00] [SPEAKER_00] they're from a language level, they're the most special but from this like what makes signals
[02:50:05] [SPEAKER_00] signals isn't actually the signals as much as the derived state like that's actually why signals
[02:50:11] [SPEAKER_00] are interesting a billion libraries have atomic reactive state you can subscribe to the it's the
[02:50:19] [SPEAKER_00] way that derived state propagates that makes the solution so interesting all right
[02:50:27] [SPEAKER_01] So one interesting thing to talk about here is the, like, also in this example, you notice there is no, like, garbage collection route around this whole setup.
[02:50:42] [SPEAKER_00] Yes, yeah, actually that is interesting, right?
[02:50:45] [SPEAKER_00] Because usually this was always the classic problem here
[02:50:49] [SPEAKER_00] is that effects, like a leaky observer pattern,
[02:50:53] [SPEAKER_00] like the fact that signals themselves will go away when they go away.
[02:51:00] [SPEAKER_00] But because of the way the stuff links back, generally speaking,
[02:51:04] [SPEAKER_00] as long as the signal exists,
[02:51:07] [SPEAKER_00] the effect can never be garbage collected.
[02:51:09] [SPEAKER_00] Like because of the way the...
[02:51:12] [SPEAKER_00] computers aren't bad because they're lazy so you could argue that if no one's listening to them
[02:51:17] [SPEAKER_00] they could go away but effects are are trickier um yeah do you want to talk to that effects are
[02:51:25] [SPEAKER_01] in a sense kind of like they're active parts of the system right you yeah you set this thing up
[02:51:31] [SPEAKER_01] and your intention is to have it exist and continue to run for as long as it is useful to you
[02:51:36] [SPEAKER_01] um so in that sense like the effect is almost the the root of the garbage collection tree in a way
[02:51:43] [SPEAKER_01] yeah as long as it's it's there and the user hasn't destroyed it or it's you know the component
[02:51:48] [SPEAKER_01] that it created it didn't get destroyed yeah um then you probably still want it to exist and
[02:51:53] [SPEAKER_01] continue running um and still want it to retain references to the signals that it's reading
[02:51:59] [SPEAKER_01] yeah um for me an interesting question is like when you have these dependency tracking systems
[02:52:04] [SPEAKER_01] especially like implicit dependencies
[02:52:06] [SPEAKER_01] um it might be that the triple count here right or or let's say we have some x computed yeah reads
[02:52:14] [SPEAKER_01] happens to read the the double count computed once right and then never reads it again and do you
[02:52:24] [SPEAKER_01] want to retain this dependency edge from you know x signal to double count and make and prevent
[02:52:33] [SPEAKER_01] double count from being garbage collected in that case um
[02:52:37] [SPEAKER_01] Same goes for, like...
[02:52:42] [SPEAKER_01] you know my effect stops reading this part of the graph right so okay yeah okay eventually stops
[02:52:48] [SPEAKER_00] reading triple count very right so you're talking about the dynamic dependency situation not when
[02:52:52] [SPEAKER_00] you say it only reads it once you mean like you mean you're talking about uh yeah favorite
[02:52:58] [SPEAKER_00] example one of my favorite examples uh um what uh what was it gonna be const uh let's call it
[02:53:05] [SPEAKER_00] i'm gonna do the full name example here for a second but it's it's the if it's like the
[02:53:12] [SPEAKER_00] situation where you can be like, if show full name return, I don't know, something, right?
[02:53:28] [SPEAKER_00] First, last, otherwise return first.
[02:53:38] [SPEAKER_00] It's this situation, right?
[02:53:40] [SPEAKER_00] Where depending on, like, if show full name is false, you don't need last anymore.
[02:53:47] [SPEAKER_01] Yeah, so that's, you know, you're here, the closure will still have a reference to last, right, even if right.
[02:53:55] [SPEAKER_01] But what if last is not actually last? It's like, you know, current context dot last, right, where that itself is it's like a nested signal.
[02:54:06] [SPEAKER_01] Okay.
[02:54:07] [SPEAKER_01] Okay.
[02:54:09] [SPEAKER_01] Or you can just make a let last as a variable, right?
[02:54:16] [SPEAKER_01] Still not.
[02:54:17] [SPEAKER_01] Yeah, so last here is a signal read, but.
[02:54:22] [SPEAKER_01] Yeah, I'm not quite following.
[02:54:23] [SPEAKER_01] Last is not a const, right?
[02:54:24] [SPEAKER_01] It's some like dynamic signal that we can assign.
[02:54:28] [SPEAKER_00] Last is not a constant dynamic.
[02:54:30] [SPEAKER_00] Okay.
[02:54:31] [SPEAKER_00] So you're talking about like one level out.
[02:54:33] [SPEAKER_00] So I'm trying to think of an example of this, but okay.
[02:54:39] [SPEAKER_01] Yeah.
[02:54:39] [SPEAKER_01] So like, that's a good way of thinking about this, right?
[02:54:50] [SPEAKER_02] So somehow like the here the this computer would have like that would be the only place to the like that has like reference right to last but that's what you are talking about Alex right so so the identity of last not the value inside of it but the actual signal that I'm reading can change over time right right so like I might read this thing and then something else changes in my application state and I'm never interested in the value of that signal again
[02:55:22] [SPEAKER_01] okay you can think of it as like a signal in a signal as well yeah yeah that's that's what i was
[02:55:27] [SPEAKER_00] trying to do here so because if there's a condition one condition then read from this otherwise
[02:55:34] [SPEAKER_01] i don't i don't think you need the condition at this point right it's just like if if we're all
[02:55:38] [SPEAKER_01] we're doing is like calculating something based on the signal inside of the b signal gotcha okay
[02:55:45] [SPEAKER_01] and we change the outer signal so we would completely replace the inner signal right
[02:55:53] [SPEAKER_00] Yeah, I'm trying to think of, I mean, I can probably set this up if I want to.
[02:55:57] [SPEAKER_00] I can be like equals signal.
[02:56:04] [SPEAKER_00] What am I getting here?
[02:56:08] [SPEAKER_00] Sig, not sin, signal.
[02:56:10] [SPEAKER_00] And then what we're suggesting is...
[02:56:12] [SPEAKER_01] Yeah, signal of signal of zero.
[02:56:20] [SPEAKER_00] So like this type of scenario derived.
[02:56:27] [SPEAKER_00] I guess it could even be the effect itself, but...
[02:56:30] [SPEAKER_01] This is actually more interesting, I think.
[02:56:34] [SPEAKER_00] So, all right.
[02:56:35] [SPEAKER_01] Yeah.
[02:56:39] [SPEAKER_01] And I think you need a return in the computed.
[02:56:42] [SPEAKER_00] Yes.
[02:56:44] [SPEAKER_00] And I'm going to get rid of our timer here and make this our main...
[02:56:49] [SPEAKER_00] single from RxJX thank you yeah and yeah I mean I'm gonna put non-zero but but you can you can
[02:56:58] [SPEAKER_00] see what's going on here it's we put a signal in a signal and then we read from it and then I
[02:57:03] [SPEAKER_00] guess at some point here we can also yeah we're gonna we're gonna change the value of s right to be
[02:57:11] [SPEAKER_01] a different signal which will be like 10 or whatever let's do this okay so we're doing s dot set
[02:57:21] [SPEAKER_00] to B.
[02:57:24] [SPEAKER_00] Yeah.
[02:57:25] [SPEAKER_00] And we just put that in the set timeouts.
[02:57:27] [SPEAKER_00] Timeout again.
[02:57:27] [SPEAKER_00] Exactly.
[02:57:28] [SPEAKER_01] Yeah.
[02:57:29] [SPEAKER_01] All right.
[02:57:30] [SPEAKER_01] Yeah, this is a good way of thinking about it.
[02:57:34] [SPEAKER_01] So if we think about what happened here, right,
[02:57:36] [SPEAKER_01] like the effect ran, it ran derived,
[02:57:40] [SPEAKER_01] that read S, which returned A, and we read A.
[02:57:43] [SPEAKER_01] Yeah.
[02:57:44] [SPEAKER_01] And so we recorded a dependency of derived on the A signal.
[02:57:48] [SPEAKER_01] Yeah.
[02:57:49] [SPEAKER_01] And then we went and changed S, did S.
[02:57:53] [SPEAKER_01] Dot set B.
[02:57:55] [SPEAKER_01] which removes the reference from of a.
[02:58:00] [SPEAKER_01] Yeah.
[02:58:01] [SPEAKER_01] But the derived signal was still conceptually depending on a.
[02:58:05] [SPEAKER_01] Until the effect ran and we realized,
[02:58:07] [SPEAKER_01] hey, when we rerun derived, it no longer reads a here.
[02:58:11] [SPEAKER_01] Right.
[02:58:12] [SPEAKER_01] So the question is if you didn't actually do that read,
[02:58:16] [SPEAKER_01] if we didn't have the effect here,
[02:58:18] [SPEAKER_01] right you've just changed s to b how does your system know to clean up the fact that you have
[02:58:25] [SPEAKER_00] this dangling reference from derived to a this is this is a cool problem i haven't i haven't hit
[02:58:30] [SPEAKER_00] this one yet because everything's eager you only hit this because when things are lazy so yes
[02:58:38] [SPEAKER_00] so so so what is the answer to this question then
[02:58:41] [SPEAKER_01] Yeah, so in our system, all of our dependency edges between signals are actually tracked with weak references using weak ref in the browser.
[02:58:52] [SPEAKER_01] Interesting.
[02:58:54] [SPEAKER_01] And so we do not, like signals never hold strong references to their dependencies, nor do their dependencies hold strong references to them.
[02:59:02] [SPEAKER_01] Even the effects do not have strong references to their dependencies that they're tracking.
[02:59:10] [SPEAKER_00] Interesting. Okay.
[02:59:12] [SPEAKER_01] Through the computation function, they might, right?
[02:59:15] [SPEAKER_01] But the internal state that we maintain for dependency edges in both directions is weakly held.
[02:59:22] [SPEAKER_01] And that means that it's possible that at some point in the future, we pull derived
[02:59:28] [SPEAKER_01] and we go to ask about, hey, I need to check if A changed so I can decide if I need to recompute.
[02:59:37] [SPEAKER_01] And A doesn't exist anymore.
[02:59:38] [SPEAKER_01] the garbage collection system just tells us hey this week reference is like empty now
[02:59:43] [SPEAKER_01] um you know a went away and at that point we go oh okay like we're in stale dependency mode
[02:59:50] [SPEAKER_01] um so this this thing that we thought was a dependency is no longer there we might we have to
[02:59:57] [SPEAKER_01] recalculate okay
[03:00:00] [SPEAKER_01] Okay, that's interesting. Yeah.
[03:00:01] [SPEAKER_01] Yeah.
[03:00:03] [SPEAKER_01] That is new. I have not come across this yet.
[03:00:06] [SPEAKER_01] That is an interesting optimization.
[03:00:08] [SPEAKER_01] I don't think I've seen this one before.
[03:00:11] [SPEAKER_00] Yeah, and what we saw in a lot of other libraries is they have some notion of like a garbage collection route that all signals are...
[03:00:19] [SPEAKER_01] Like a cleanup context, right?
[03:00:20] [SPEAKER_00] Yeah, conceptually, like a part of.
[03:00:22] [SPEAKER_01] Yeah, I mean, that isn't always...
[03:00:25] [SPEAKER_01] Yeah, I mean, yeah, I don't know if that's the motivation for that, to be fair.
[03:00:29] [SPEAKER_01] Yeah.
[03:00:30] [SPEAKER_01] the basically, at least like in the case of solid why we have the great root is because
[03:00:37] [SPEAKER_01] all effects are roots as well. So it was just a way of propagating the same
[03:00:42] [SPEAKER_01] mechanism of like and because it's synchronous actually because of synchronous execution of
[03:00:48] [SPEAKER_01] effects that was basically required because you basically needed a batch anyways so if you're
[03:00:53] [SPEAKER_01] in a batch and you're you know you want to like clean up the render function when you're done
[03:00:59] [SPEAKER_01] that that was essentially the the idea this is interesting i have not like i've seen the
[03:01:05] [SPEAKER_01] decoupling of uh computed values from
[03:01:09] [SPEAKER_01] that kind of ownership graph,
[03:01:11] [SPEAKER_01] like say like,
[03:01:12] [SPEAKER_01] no,
[03:01:12] [SPEAKER_01] they can clean up themselves if no one's listening to them.
[03:01:15] [SPEAKER_01] But this is interesting because what we're saying is,
[03:01:18] [SPEAKER_01] um,
[03:01:19] [SPEAKER_01] Yeah, interesting. I got to think about this one for a minute because, yeah, yeah, you're right.
[03:01:24] [SPEAKER_01] Because technically speaking, derived as being listened to here, it just this like this might not have been scheduled to run yet.
[03:01:32] [SPEAKER_00] Or it may clean up, you know, at some point in the future as well.
[03:01:34] [SPEAKER_01] Yeah, I guess I guess the other question there is like, if it isn't listened to, then then this cleanup would happen anyway in a lot of like...
[03:01:46] [SPEAKER_00] Well, you don't want to stand in the way of the browser like reclaiming the object A here.
[03:01:55] [SPEAKER_01] Right, right.
[03:01:56] [SPEAKER_01] Yeah, it just, yeah, it's interesting.
[03:01:59] [SPEAKER_01] Yeah, I have to think about this one a little more because it's like, it's one of those
[03:02:03] [SPEAKER_01] scenarios where you're like, I'm trying to think in my head if there's ever a scenario
[03:02:11] [SPEAKER_01] where you have long-lived effects that don't.
[03:02:16] [SPEAKER_01] that like you're not executing so you're not checking them because yeah okay yeah this is
[03:02:24] [SPEAKER_01] something i have to process through a bit because what i was getting at is i've seen a number
[03:02:27] [SPEAKER_01] of systems that if nothing listens to a computed it also releases so then like that kind of
[03:02:33] [SPEAKER_01] cascades down which means nothing's listening to a computed if there's no effects queued this
[03:02:38] [SPEAKER_01] this though works specifically in the case
[03:02:42] [SPEAKER_01] In addition to that, this works in a case where you have effects, they're just not running them.
[03:02:47] [SPEAKER_01] So it's referenced somewhere, but it's not going to run anytime soon.
[03:02:55] [SPEAKER_01] Yeah, that's interesting.
[03:02:57] [SPEAKER_01] That's cool.
[03:02:57] [SPEAKER_01] Thank you for bringing this up because I have not seen this before.
[03:03:01] [SPEAKER_00] Yeah, and specifically, I think for us, this stops us from like needing to do any kind of bookkeeping when effects do kind of subscribe or unsubscribe to compute it.
[03:03:12] [SPEAKER_00] We don't have to track the...
[03:03:14] [SPEAKER_00] um you know we don't to propagate that cleanup down right last consumer unsubscribes yes yeah and
[03:03:21] [SPEAKER_01] that that that's that's tricky because like there's a certain awkwardness like if there's like a
[03:03:26] [SPEAKER_01] delay or something like you're like do you overwork if you like unsubscribe temporarily before you
[03:03:31] [SPEAKER_01] scrub you this is like the area that i wanted to play with that i haven't got to play with yet
[03:03:35] [SPEAKER_01] um because lazy is newer for me so this is definitely very interesting that's that is that is
[03:03:43] [SPEAKER_01] that is cool i'm glad you brought that up
[03:03:46] [SPEAKER_01] Is there any other cool things like this or cool things you guys are looking into or like?
[03:03:53] [SPEAKER_00] So yeah, there's a couple of things we're looking into.
[03:03:58] [SPEAKER_00] You had your Excalibur of the versioning, right, of the propagation of values down.
[03:04:07] [SPEAKER_00] We actually do kind of this exact same thing for the dynamic sets of dependencies.
[03:04:14] [SPEAKER_00] so when the effect runs for the first time right it doesn't know what signals it's going to read
[03:04:18] [SPEAKER_00] it doesn't have these edges going to x or going to double count here right those kind of get
[03:04:24] [SPEAKER_00] dynamically added as we realize that okay the effect is running and it's reading the value
[03:04:29] [SPEAKER_00] of another signal or value of a computed um and we we track the version of that set of dependencies
[03:04:39] [SPEAKER_00] yeah in the same way that we track the version of the value with a kind of
[03:04:43] [SPEAKER_00] a version number on the effect and a version number on the edge.
[03:04:47] [SPEAKER_00] Yeah.
[03:04:48] [SPEAKER_00] And then, so when you rerun the log effect,
[03:04:52] [SPEAKER_00] we don't actually clear out the set of dependencies again,
[03:04:57] [SPEAKER_00] which I've seen some libraries take approach of like,
[03:05:00] [SPEAKER_00] you mark all of the dependency edges as stale,
[03:05:03] [SPEAKER_00] some of them just clear the array.
[03:05:06] [SPEAKER_00] What we do is kind of increment logs dependency version.
[03:05:12] [SPEAKER_00] And then as you read the,
[03:05:15] [SPEAKER_00] as you read a dependency signal, we on the edge, we say like, okay, we saw you at this dependency version.
[03:05:21] [SPEAKER_00] And that allows us during the kind of like pushing dirtiness operation.
[03:05:27] [SPEAKER_00] When you go to notify your consumer, hey, you're dirty because I'm dirty.
[03:05:31] [SPEAKER_00] We actually can compare those values and realize, oh, I'm trying to mark you dirty, but like it's been a long time since you read me.
[03:05:38] [SPEAKER_00] You've actually moved on in your dependency version and you haven't read me at that new version.
[03:05:44] [SPEAKER_00] So I know I'm not actually your dependency anymore.
[03:05:48] [SPEAKER_02] Yeah, so in other words, like instead of like, you know, like, I mean, with the, I think when you were doing this educational implementation, right, like you just basically before you run the computation or like effect, you wipe out the like your set of dependencies, and then you recreate it as the effect runs to kind of fill it in again.
[03:06:07] [SPEAKER_02] And I think Alex insight was like, hey, maybe in the systems we are dealing with this set of dependencies doesn't change that much.
[03:06:16] [SPEAKER_02] So we kind of can expect that from run to run, we will have like roughly the same set of dependencies.
[03:06:21] [SPEAKER_02] So in terms of like kind of wiping out those collections and recreating them, how about we assume will be the same and kind of deal with the differences by versioning?
[03:06:33] [SPEAKER_01] Yeah, I'm trying to picture the versioning part.
[03:06:35] [SPEAKER_01] That's the part of saying because the not wipe everything has kind of been...
[03:06:39] [SPEAKER_01] something I've seen in several libraries recently.
[03:06:42] [SPEAKER_01] Yeah, we used to all wipe them.
[03:06:44] [SPEAKER_01] Like solid wipes that MobX wipes that like if you wiped it originally,
[03:06:49] [SPEAKER_01] I don't think they've changed that.
[03:06:50] [SPEAKER_01] But what I've noticed is recent libraries don't.
[03:06:53] [SPEAKER_01] They either like do like they look...
[03:06:57] [SPEAKER_01] Milo came on stream yesterday and was explaining how he looked at index and essentially was like going through and until he hit a change.
[03:07:04] [SPEAKER_01] Otherwise, he keeps the same array.
[03:07:07] [SPEAKER_01] I was trying to figure out how versioning kind of plays into that.
[03:07:12] [SPEAKER_01] Or is it kind of like a similar thing where it's like a comparison on index, essentially?
[03:07:16] [SPEAKER_01] Yeah.
[03:07:18] [SPEAKER_00] uh it's a comparison on the the version number same as the the value here just kind of in the
[03:07:22] [SPEAKER_02] other direction yeah like because like we've got the arrows in both directions right like right
[03:07:27] [SPEAKER_01] just like yeah it's only okay okay i see okay so the arrow in the other direction also has a
[03:07:34] [SPEAKER_00] version number on it and yeah so imagine imagine that the log effect here right like only
[03:07:40] [SPEAKER_00] conditionally reads x right um then it would start out with version one for its dependencies
[03:07:46] [SPEAKER_00] When it reads double count, we would mark that edges version one.
[03:07:50] [SPEAKER_00] When it reads X, we'd mark that as version one.
[03:07:52] [SPEAKER_01] Yeah, I can see that.
[03:07:53] [SPEAKER_01] It's like a faster way of doing that check.
[03:07:55] [SPEAKER_00] Well, it pushes the cost of cleaning up the stale dependencies, right?
[03:08:00] [SPEAKER_00] The edges that changed onto the writer instead of the reader.
[03:08:06] [SPEAKER_00] Yeah.
[03:08:06] [SPEAKER_00] So when log is reading signals, it's not bookkeeping like, oh, I need to remember that certain
[03:08:12] [SPEAKER_00] dependencies didn't happen again, and so I need to clean those up in the moment.
[03:08:17] [SPEAKER_00] it's pushing that onto the writer when it goes to notify the consumer to notice oh hey i'm actually
[03:08:25] [SPEAKER_00] out of date i had information that interesting you and clearly that's no longer the case okay yeah
[03:08:33] [SPEAKER_01] no i i see the difference now because the even the thing that mylo described is still happening at
[03:08:37] [SPEAKER_01] read time it's just it's just probably not going to change where this is like doing that at
[03:08:42] [SPEAKER_01] notification time
[03:08:43] [SPEAKER_00] Yeah, the theory being right that like the dependency set in most cases is static or mostly static.
[03:08:51] [SPEAKER_01] Yeah, it definitely, definitely is that that was one of the long term like long time weaknesses like places where you'd say maybe a compiled reactive system is more performant is the dependency like cleanup that happens every time.
[03:09:07] [SPEAKER_01] Yeah, I'm looking forward to kind of seeing the impact of the reach, right?
[03:09:12] [SPEAKER_01] Because like the not creating the stuff when it's static,
[03:09:14] [SPEAKER_01] I think we're seeing that everywhere.
[03:09:15] [SPEAKER_01] But the timing difference is an interesting one.
[03:09:18] [SPEAKER_01] Yeah.
[03:09:19] [SPEAKER_02] And I think that the interesting twist like that Alex was just like hinting at today when which I think is that like you can even like you know like delay the timing of cleanup right like you don't have to do it when you run but like you could say like oh maybe I will like clean up only.
[03:09:38] [SPEAKER_02] you know, every some runs or maybe or bound dependencies, right?
[03:09:43] [SPEAKER_00] So that like, oh, if I if I accumulate more than five stale dependencies,
[03:09:46] [SPEAKER_00] then I like invest in kind of wiping this clean trading off the cost of cleanup
[03:09:52] [SPEAKER_00] with the cost of like needing to check this on notification.
[03:09:56] [SPEAKER_00] We were even thinking about like and this gets into the question you asked earlier.
[03:10:00] [SPEAKER_00] of like what other kind of cool things are you thinking about.
[03:10:03] [SPEAKER_00] Angular has a compiler.
[03:10:06] [SPEAKER_00] We're pretty good at understanding your code with our compiler.
[03:10:09] [SPEAKER_00] And there are cases where we could use the knowledge that we see
[03:10:14] [SPEAKER_00] just looking at, you know, your like expression inside of a computed
[03:10:18] [SPEAKER_00] and realize that like, hey, this thing can only be a device
[03:10:21] [SPEAKER_00] instead of dependencies.
[03:10:22] [SPEAKER_01] Exactly.
[03:10:23] [SPEAKER_00] Or this thing is extremely dynamic in its set of dependencies.
[03:10:25] [SPEAKER_00] We can hint to the signal runtime like,
[03:10:27] [SPEAKER_00] you know, to handle it in a certain way.
[03:10:30] [SPEAKER_01] Yeah, I think I think we're going to see more of that as well.
[03:10:33] [SPEAKER_01] I saw a really cool demo the other day from Dominic Gannaway, creator of Inferno.
[03:10:37] [SPEAKER_01] And that was one of his things where he looked at the expressions and was able to compile
[03:10:44] [SPEAKER_01] in static dependencies for some stuff.
[03:10:47] [SPEAKER_01] And then like in other cases even he looked at the branching inside the computers and then
[03:10:53] [SPEAKER_01] like compiled multiple sets of static dependencies.
[03:10:57] [SPEAKER_01] So that basically based on different conditions, he could pull, like he basically never at runtime needs to create the dependency list for certain types of things.
[03:11:09] [SPEAKER_01] Let's say it benchmarks really well.
[03:11:13] [SPEAKER_00] Yeah.
[03:11:14] [SPEAKER_00] And I think that's something we're absolutely interested in exploring.
[03:11:18] [SPEAKER_00] Another kind of interesting idea that came up was around render effect.
[03:11:23] [SPEAKER_00] Yeah.
[03:11:24] [SPEAKER_00] And in render effect, you do kind of one of two things.
[03:11:28] [SPEAKER_00] You're either like interested in this moment in time because you want to read something
[03:11:32] [SPEAKER_00] out of the DOM once you've like fully rendered it, or because you like want to do some DOM
[03:11:38] [SPEAKER_00] mutation on top of what the framework already did.
[03:11:41] [SPEAKER_00] And these things, if they're ordered wrong, like they still work correctly.
[03:11:47] [SPEAKER_00] they just results in the browser needing to do like excessive extra layout operations because
[03:11:52] [SPEAKER_00] you're reading from the dom and then mutating it and then the browser has to like go and
[03:11:56] [SPEAKER_01] right build the render tree again yeah yeah i was going to say in solid that scheduling is
[03:12:01] [SPEAKER_01] actually one of the important pieces that we actually separate the render
[03:12:05] [SPEAKER_01] and the other end user effects in a way that is
[03:12:08] [SPEAKER_01] yeah predictable ish um that makes a lot sense so so we were planning on having like okay you have
[03:12:14] [SPEAKER_00] like render effects that run with read timing and render effects that run with write timing and
[03:12:19] [SPEAKER_00] we can do all the writes before all the reads um but we realized we could have this third category
[03:12:24] [SPEAKER_00] of like automatic um and have our compiler try to figure out i see looking at your effect code
[03:12:30] [SPEAKER_00] like are you you know calling get computed style if so you should be in the reader set
[03:12:35] [SPEAKER_00] and sort of heuristically determine these things without users necessarily having to puzzle over which option to set.
[03:12:43] [SPEAKER_01] I like that. Yeah.
[03:12:45] [SPEAKER_01] Yeah, no, I think that's really...
[03:12:48] [SPEAKER_01] Yeah, seeing the compiler augmentation coming in is really an interesting angle.
[03:12:52] [SPEAKER_01] And I think we're going to see more and more and more of that.
[03:12:57] [SPEAKER_01] I don't know what it all means because one of the interesting things to me is like template compilation is a well-defined area.
[03:13:04] [SPEAKER_01] It gets a lot more easier or not easier.
[03:13:07] [SPEAKER_01] Sorry, I meant the opposite.
[03:13:07] [SPEAKER_01] It gets a lot more complicated when you start looking at outside of the templates.
[03:13:12] [SPEAKER_01] But the thing is...
[03:13:13] [SPEAKER_01] if you have a declarative language, you can do this.
[03:13:17] [SPEAKER_01] So this is now a new kind of thing.
[03:13:20] [SPEAKER_01] I think this is one of the attractive things about the reactivity more than anything.
[03:13:25] [SPEAKER_01] I mean, it's other things like getting away from component boundaries.
[03:13:27] [SPEAKER_01] That's a great solve for hydration, like in partial hydration and resumability and all that stuff
[03:13:33] [SPEAKER_01] was basically based on being able to break out of that model.
[03:13:38] [SPEAKER_01] On the other hand, on the language size,
[03:13:40] [SPEAKER_01] it provides, you know, a compiler with a lot of information that it can do further optimizations
[03:13:46] [SPEAKER_01] because like, it's not just your templates that's declarative, it's actually your data
[03:13:50] [SPEAKER_01] that is.
[03:13:51] [SPEAKER_01] So yeah, this is this is a very interesting place of exploration.
[03:13:58] [SPEAKER_00] I think there's there is some danger there, right?
[03:14:01] [SPEAKER_00] If you try to rely too heavily on these kind of automated tooling to process your code.
[03:14:08] [SPEAKER_00] I think like optimization is really a great target for a compiler because it's fine to get it wrong, right?
[03:14:16] [SPEAKER_00] You're not going to break the program.
[03:14:18] [SPEAKER_00] You're not going to prevent the user from doing what they're trying to do.
[03:14:21] [SPEAKER_00] You're just not being as efficient as you possibly could be.
[03:14:24] [SPEAKER_00] So you're only making the situation better by applying your tool in this way.
[03:14:29] [SPEAKER_00] Yeah.
[03:14:30] [SPEAKER_00] Whereas otherwise, you get into like, okay, now you are redefining the language a little
[03:14:35] [SPEAKER_00] bit.
[03:14:36] [SPEAKER_00] You are changing what JavaScript means and you have to fit into this narrower bucket
[03:14:40] [SPEAKER_00] in order to work correctly with the tool.
[03:14:43] [SPEAKER_01] Yeah.
[03:14:44] [SPEAKER_01] Yeah.
[03:14:45] [SPEAKER_01] we're gonna see a lot of both to be fair so i i think this is this is interesting because i i
[03:14:51] [SPEAKER_01] don't know this is why i've been dragging my feet on it a little bit this is it's it's everyone's
[03:14:55] [SPEAKER_01] got like their places where they drag feet on when it comes when it comes to like mechanical
[03:14:58] [SPEAKER_01] stuff i never drag my feet like i'm always like straight there i'm like how do we make this
[03:15:02] [SPEAKER_01] like resumability or islands or whatever, you know, signal, whatever thing work.
[03:15:07] [SPEAKER_01] And then I'm like, OK, we'll figure out what the what the the DX is.
[03:15:11] [SPEAKER_01] It's funny that I've watched people some people drag their feet the other way.
[03:15:13] [SPEAKER_01] Like they've very done a really big job of defining their language.
[03:15:17] [SPEAKER_01] Like this on like Svelte, you'll see Rachel be like, I'm going to wait off
[03:15:20] [SPEAKER_01] and see if this mechanical stuff is worth worrying about.
[03:15:23] [SPEAKER_01] You know, he spent so much time making sure
[03:15:26] [SPEAKER_01] that he has like a consistent sound language versus
[03:15:31] [SPEAKER_01] you know, the other side, it's kind of interesting how these worlds are going to collide.
[03:15:40] [SPEAKER_00] It's been really interesting for me, too, to see a trend in the JavaScript community,
[03:15:47] [SPEAKER_00] the larger community kind of pushing back against having tooling in the build path.
[03:15:53] [SPEAKER_00] for web applications.
[03:15:55] [SPEAKER_01] Yeah, yeah, that is an interesting one.
[03:15:58] [SPEAKER_01] I don't, yeah, I don't know.
[03:16:01] [SPEAKER_01] It's a tricky one.
[03:16:02] [SPEAKER_01] I think this is a reflection of trying to reduce complexity,
[03:16:06] [SPEAKER_01] but the challenge is they don't actually want
[03:16:11] [SPEAKER_01] what they're asking for, in my opinion.
[03:16:13] [SPEAKER_01] I mean, it's not take time, right?
[03:16:16] [SPEAKER_01] It's more of that, like,
[03:16:19] [SPEAKER_01] they don't want to deal with the unnecessary complexity of like setting all this stuff up.
[03:16:23] [SPEAKER_01] So like,
[03:16:24] [SPEAKER_01] like a perfect example in my mind is something like Dino or whatever,
[03:16:26] [SPEAKER_01] like where like,
[03:16:28] [SPEAKER_01] it's not like and we saw this with fresh it's like not that dino doesn't do builds but from the
[03:16:33] [SPEAKER_01] developer standpoint it doesn't like you you go in and everything just like works and you just
[03:16:37] [SPEAKER_01] import it and do all this if you don't have the mpm install and all this stuff like it just it
[03:16:41] [SPEAKER_01] just kind of works you you go oh references from the cdn write my code it just builds it just
[03:16:45] [SPEAKER_01] works and you do that behind under the scene there's like the cdns doing crazy building to make
[03:16:51] [SPEAKER_01] the specific version there's dino caching there's client side build transforms of the jsecs
[03:16:55] [SPEAKER_01] there's all this stuff happening but
[03:16:57] [SPEAKER_01] The people who use that system are like, yeah, I use no build.
[03:16:59] [SPEAKER_01] I use Dino.
[03:17:00] [SPEAKER_00] yeah it's hands-off right yeah the build process yeah i feel like the ecosystem has kind of been
[03:17:07] [SPEAKER_00] stuck in this other world for a while of like writing the webpack configuration by hand right
[03:17:11] [SPEAKER_00] which once you do that a few times i can absolutely see why you'd be like i don't want to ever think
[03:17:16] [SPEAKER_01] about builds again right so it is interesting because there is a third contingent that is very
[03:17:21] [SPEAKER_01] much like no build and they're they're hoping like es6 import maps and like all that stuff um but
[03:17:27] [SPEAKER_01] i mean that's that's good for them
[03:17:29] [SPEAKER_01] I feel like that ship sailed like a decade ago, but, you know, and for us was there.
[03:17:37] [SPEAKER_01] Keep on going.
[03:17:38] [SPEAKER_02] Yeah, I think like for us, like TypeScript is kind of like moving always.
[03:17:43] [SPEAKER_02] Yeah, exactly.
[03:17:45] [SPEAKER_01] Maybe that category isn't even pure anymore because they're like, they'll be like, yeah,
[03:17:49] [SPEAKER_01] we still want TypeScript, right?
[03:17:50] [SPEAKER_01] Obviously.
[03:17:50] [SPEAKER_01] So like, yeah.
[03:17:53] [SPEAKER_01] I, yeah, I don't, yeah, my gut feeling is no build, like actual no build isn't a real thing.
[03:17:59] [SPEAKER_01] It's just like we're, you said hands off, we're like, we're just kind of like hiding it away, you know?
[03:18:04] [SPEAKER_02] Yeah, it's the friction, right?
[03:18:06] [SPEAKER_02] Like for the, like setting it up and like kind of debugging what happened if it just doesn't like work as you expect and whatnot.
[03:18:13] [SPEAKER_01] Yeah, I mean, in general though, um,
[03:18:17] [SPEAKER_01] uh like the the tooling is just getting better anyway so like the baseline is getting higher
[03:18:22] [SPEAKER_01] anyways so like today it isn't a webpack config maybe you're just dealing with vt or something
[03:18:29] [SPEAKER_01] and that's already like a billion times better you know like so like i i think
[03:18:34] [SPEAKER_01] i think we are getting to a place you know where
[03:18:36] [SPEAKER_01] Yeah, this is just the ever-evolving shift of like being able to do more things and then complexity catching up.
[03:18:44] [SPEAKER_01] And, you know, there's always going to be people on the trailing end of that spectrum or people on the leading end.
[03:18:51] [SPEAKER_01] Or like, by that I mean, like, you know, the opinion that like, hey, we should just dump all our...
[03:19:01] [SPEAKER_01] Sorry, I got sidetracked here.
[03:19:05] [SPEAKER_01] Just got a huge raid from Coding Garden.
[03:19:09] [SPEAKER_01] So thank you.
[03:19:11] [SPEAKER_01] That's awesome.
[03:19:12] [SPEAKER_01] We're just talking here, Signals and Angular with Angular core team.
[03:19:18] [SPEAKER_01] And we were kind of getting a little existential on talking about the role of build versus
[03:19:25] [SPEAKER_01] no build.
[03:19:28] [SPEAKER_01] Yeah.
[03:19:29] [SPEAKER_01] How are you all doing?
[03:19:31] [SPEAKER_01] yeah signals and angular this has been the hot news and I admire Ryan like how you were like
[03:19:40] [SPEAKER_02] dropping hints uh without like saying much right like because obviously uh we were having
[03:19:46] [SPEAKER_02] conversations we're talking about uh but uh so like you knew you knew for months like that we
[03:19:52] [SPEAKER_02] are looking into different reactivity models uh so it was interesting to see you on the stream too
[03:19:58] [SPEAKER_02] like hey yeah that's that's interesting
[03:20:00] [SPEAKER_02] interesting that's the direction and so so it's uh funny to like sit here now and just like when
[03:20:07] [SPEAKER_00] it's so funny I I am so happy to have seen like like I this propagation of stuff is excites me
[03:20:14] [SPEAKER_00] obviously get I mean there there was a time where this paradigm and this approach was
[03:20:21] [SPEAKER_00] seen as like very not good and now that it's kind of coming back around again it like
[03:20:27] [SPEAKER_00] That's like the, that's, I couldn't have even hoped for that, you know, like years ago.
[03:20:34] [SPEAKER_00] And it goes so much now beyond, like, I get, like, sorry, Angular is a big deal.
[03:20:40] [SPEAKER_00] Like, you know what I mean?
[03:20:41] [SPEAKER_00] Like, there is a lot of...
[03:20:43] [SPEAKER_00] apps out there, you know, there's a lot of people using Angular.
[03:20:49] [SPEAKER_00] And this is a big change too, you know, like it'll take time and you'll find your place and stride and like where this kind of fits in.
[03:20:55] [SPEAKER_00] But this is this is big like like the number of people out there potentially that now will know about signals trying signals doing that is a huge number of people.
[03:21:07] [SPEAKER_00] Like.
[03:21:08] [SPEAKER_02] Yeah, this is huge. It's interesting because it like reminds me of TypeScript, right? Like when we were like early adopters of TypeScript and that's kind of help definitely to kind of get the message to the wider audience and like that that might be the case here as well.
[03:21:27] [SPEAKER_00] Yeah, but the internet tells me how clear it's that angle. If you've noticed, Angler's been back in the conversation a bunch more recently.
[03:21:34] [SPEAKER_00] There's a change coming and brewing right now across the whole ecosystem,
[03:21:42] [SPEAKER_00] and Angular is not left out on this at all.
[03:21:44] [SPEAKER_00] Everybody is actually doing a lot of innovation right now.
[03:21:47] [SPEAKER_00] So I'm super stoked on that.
[03:21:49] [SPEAKER_00] How are we doing on time?
[03:21:50] [SPEAKER_00] Okay.
[03:21:50] [SPEAKER_00] I got to get into this week in JavaScript in a few minutes, but we got about, let's say, like 10 minutes.
[03:21:56] [SPEAKER_00] Any more topics or questions we want to throw at these guys before we wrap up?
[03:22:00] [SPEAKER_00] And I move on to doing this week in JavaScript.
[03:22:04] [SPEAKER_00] I'm just with it out there, there's going to be a bit of a time delay.
[03:22:07] [SPEAKER_00] So I get to ask the first question, because what I'm waiting is,
[03:22:11] [SPEAKER_00] we haven't talked about as much as do you have any ideas of how you're going to
[03:22:16] [SPEAKER_00] like roll this out into Angular at this point?
[03:22:18] [SPEAKER_02] Like, oh, this tiny question that like right.
[03:22:24] [SPEAKER_01] And it's interesting, right, because we very specifically chose not to ask ourselves
[03:22:30] [SPEAKER_01] this question through most of the development of this project.
[03:22:35] [SPEAKER_01] Because if you start working on kind of big topics like this and attempt to take on all of your constraints at once, it's paralyzing.
[03:22:47] [SPEAKER_01] And very often you rule out approaches that might be otherwise viable because you think that they're not going to work.
[03:22:54] [SPEAKER_01] Whereas if you actually did your investigation and got to a real result there, you might realize that they do in fact meet your constraints.
[03:23:01] [SPEAKER_01] So a lot of this was developed kind of in a vacuum.
[03:23:04] [SPEAKER_01] um and then we had a separate effort of sitting down and saying okay like we think we have an option
[03:23:12] [SPEAKER_01] that's a viable solution for a greenfield kind of angular with no zone js um driving change detection
[03:23:20] [SPEAKER_01] with signals how does this fit into the existing framework um and i think there's we have a
[03:23:27] [SPEAKER_01] like design doc on this that's up to
[03:23:30] [SPEAKER_01] Was it like 20 pages of just offline?
[03:23:34] [SPEAKER_00] Yeah, I mean, it's going to be it's going to be an effort.
[03:23:38] [SPEAKER_00] But so this is how you guys are like so you built the pure kind of best solution
[03:23:43] [SPEAKER_00] in isolation.
[03:23:44] [SPEAKER_00] So you could kind of like understand the problem and be like, OK,
[03:23:47] [SPEAKER_00] we want to approach this in a way that like isn't influenced by our past too much
[03:23:51] [SPEAKER_00] just to build something that we think is really good.
[03:23:53] [SPEAKER_00] And then now it's like, OK, now we got to reconcile everything.
[03:23:57] [SPEAKER_00] So yeah, I mean, so what you're telling me is this is going to take a little while.
[03:24:01] [SPEAKER_02] So I think like just to kind of make a twist on it, like as we were like tying back to the beginning,
[03:24:07] [SPEAKER_02] like we kind of are in the mental model, like people using KXGS, they exactly were kind of like writing applications in this mental model where you've got reactive graph,
[03:24:18] [SPEAKER_02] you like push notifications, your component like you want to like refresh them individually.
[03:24:23] [SPEAKER_02] So it is a big change, but it is not at the same time, right?
[03:24:27] [SPEAKER_02] Like, so we see more like we take this, like what people like and what we like, and we just
[03:24:32] [SPEAKER_02] kind of make it really baked into the framework because so far the integration was very light,
[03:24:38] [SPEAKER_02] right?
[03:24:39] [SPEAKER_02] Like the, we had that XJS as dependency, so we could, we were getting it from NPM, but
[03:24:43] [SPEAKER_02] like we never had like inputs or props as observable things, like people were asking for years.
[03:24:49] [SPEAKER_02] Um, so we had this async pipe, but like, you know, spelled his dollar.
[03:24:55] [SPEAKER_02] So like even mechanically the way of reading values and so on.
[03:24:59] [SPEAKER_02] So, so I think we also see it as that it's not like turning everything up
[03:25:04] [SPEAKER_02] that well, like just taking this mental model and just like baking it into the framework.
[03:25:10] [SPEAKER_01] and and pavel has a really fantastic way of looking at this which i've adopted because i
[03:25:15] [SPEAKER_01] love it um which is that i i think about this as unfolding in kind of three stages
[03:25:21] [SPEAKER_01] um the first is that like the framework will listen to you when you speak to it in signals
[03:25:26] [SPEAKER_01] yeah um so the prototype that we're working on on building right now is kind of ang
[03:25:33] [SPEAKER_01] talking to Angular in signals the same as you would talk to Angular in observables before
[03:25:38] [SPEAKER_01] with the async pipe in observable. Now, when you read signals in components, the components will
[03:25:43] [SPEAKER_01] understand it. If they're on push, they'll change detect or mark themselves to be checked as part
[03:25:48] [SPEAKER_01] of the whole global operation. So the framework starts to pay attention when you talk to it
[03:25:53] [SPEAKER_01] reactively. The next step in this journey is to look at places where Angular can talk back to you
[03:26:00] [SPEAKER_01] in signals reactively.
[03:26:02] [SPEAKER_01] um that's things like inputs for you know that that um are set on a component and that's really
[03:26:09] [SPEAKER_01] where you get into like you need to define some kind of translation for what happens when
[03:26:14] [SPEAKER_01] a component that speaks zone js is talking you know sending prop bindings to a component
[03:26:21] [SPEAKER_01] that speaks signals um that's expecting to receive its props as signals and what does it mean
[03:26:27] [SPEAKER_01] to pass values through this boundary and then the last step is kind of okay like
[03:26:32] [SPEAKER_01] what happens when you you get to a point where everything is in signals how do you actually remove
[03:26:37] [SPEAKER_01] zone.js entirely from this equation um how do you schedule change detection when you don't have
[03:26:43] [SPEAKER_00] this global thing running in the background yeah yeah okay so three basically three high level
[03:26:50] [SPEAKER_00] phases I think that's a very practical and pragmatic approach and it'll take some time
[03:26:54] [SPEAKER_00] okay I got questions now so let's let's run with a few of these um
[03:26:58] [SPEAKER_00] Anything else that's coming that, you know, people should be excited about, like, signals are a big thing, and this is what your guys' focus, but, like, is there any other, like, headline features that are coming around the bend about Angular that we should be aware of?
[03:27:11] [SPEAKER_02] Do we have, like, three more hours?
[03:27:15] [SPEAKER_00] So, we're feeling very hydrated lately.
[03:27:17] [SPEAKER_00] Nice, right, right. So we're talking about non-destructive hydration coming to Angular.
[03:27:22] [SPEAKER_00] So like actual...
[03:27:23] [SPEAKER_00] Like actual hydration.
[03:27:25] [SPEAKER_00] Hydration, yeah.
[03:27:27] [SPEAKER_01] Non-destructive hydration is a bit of a euphemism for no hydration.
[03:27:31] [SPEAKER_00] Yeah, yeah. I got that term from when I was at the Angular conference and I was like,
[03:27:36] [SPEAKER_00] oh, I've never heard that one before, but yes.
[03:27:38] [SPEAKER_00] Destructive hydration, yeah.
[03:27:41] [SPEAKER_00] Nice. Yeah. So hydration SSR store, you're going to get a lot better soon.
[03:27:45] [SPEAKER_00] That's the big one. Yeah. I saw some chatter about that.
[03:27:50] [SPEAKER_00] Cool. What do we got here?
[03:27:53] [SPEAKER_00] How will you handle circular dependencies?
[03:27:58] [SPEAKER_02] So I think that they come in different flavors.
[03:28:02] [SPEAKER_02] Like just very quickly, like for the, you can get into cycles, obviously,
[03:28:08] [SPEAKER_02] as with any programming construct. And like if you...
[03:28:12] [SPEAKER_02] like two flavors worth mentioning maybe is the cycles in computed so we detect them like we throw
[03:28:19] [SPEAKER_02] we just like stack trace and like so we would know what's going on I think the effects writing
[03:28:25] [SPEAKER_02] to signals is the funny one yeah and that's just I think but there will be like I don't know
[03:28:31] [SPEAKER_02] we will try to detect maybe those things somehow but there should be mantra of like hey
[03:28:36] [SPEAKER_02] effect is the end of the activity.
[03:28:39] [SPEAKER_02] Like you're not supposed,
[03:28:40] [SPEAKER_02] like I'm saying like,
[03:28:41] [SPEAKER_02] you know,
[03:28:41] [SPEAKER_02] like this is the point where we hop
[03:28:43] [SPEAKER_02] off the reactivity train.
[03:28:44] [SPEAKER_02] So don't try to go back,
[03:28:46] [SPEAKER_02] get back when we're hoping
[03:28:47] [SPEAKER_02] go, right?
[03:28:47] [SPEAKER_02] Like because that's very dangerous.
[03:28:50] [SPEAKER_00] Yeah, I saw your tweet about that.
[03:28:52] [SPEAKER_00] I don't have that saved right now,
[03:28:53] [SPEAKER_00] but I thought it was really amusing
[03:28:54] [SPEAKER_00] because I saw that,
[03:28:55] [SPEAKER_00] like a lot of talk and chatter
[03:28:57] [SPEAKER_00] on signals on Twitter.
[03:28:59] [SPEAKER_00] And that was definitely
[03:28:59] [SPEAKER_00] one of those ones that I was like,
[03:29:01] [SPEAKER_00] we use this train metaphor.
[03:29:03] [SPEAKER_00] And I was like,
[03:29:04] [SPEAKER_00] I think people might be,
[03:29:06] [SPEAKER_00] worried about this a little prematurely, at least on the effects side.
[03:29:09] [SPEAKER_00] The memo stuff's detectable.
[03:29:10] [SPEAKER_00] The effects side, like when you start writing this pattern,
[03:29:13] [SPEAKER_00] this it happens way less than you think.
[03:29:15] [SPEAKER_00] Sure, it happens when I'm sitting in code sandbox doing dumb stuff.
[03:29:20] [SPEAKER_00] But it does like when you're actually building your app,
[03:29:22] [SPEAKER_00] this should not happen very often that you're doing this thing.
[03:29:25] [SPEAKER_02] And even if you do it, like your browser just locks up, right?
[03:29:28] [SPEAKER_02] Like so we know straight away that you did it.
[03:29:31] [SPEAKER_00] It's pretty much like, so it's not like a hidden thing.
[03:29:33] [SPEAKER_00] It's like literally like you killed your browser.
[03:29:35] [SPEAKER_00] So like, don't do that.
[03:29:36] [SPEAKER_00] It's like you type the character and then it's dead.
[03:29:39] [SPEAKER_00] HMR triggers and then it's, you're dead.
[03:29:42] [SPEAKER_00] So yeah, I think it's fairly off.
[03:29:44] [SPEAKER_02] How cool is this one?
[03:29:46] [SPEAKER_01] Angular today has kind of an opposite problem in a way.
[03:29:50] [SPEAKER_01] We have this error that's pretty famous, right?
[03:29:52] [SPEAKER_01] Expression changed after it's been checked,
[03:29:55] [SPEAKER_01] which is basically the framework telling you
[03:29:58] [SPEAKER_01] that you change something
[03:30:00] [SPEAKER_01] in your model at a point when zone.js wasn't able to detect that you were,
[03:30:05] [SPEAKER_01] you know, you were might have affected the model.
[03:30:07] [SPEAKER_01] Usually that's because you did it in response to a callback.
[03:30:09] [SPEAKER_01] The framework gave you wallets in this undirtying process.
[03:30:13] [SPEAKER_01] Right.
[03:30:14] [SPEAKER_01] And most of the time that indicates you just did something weird and funky
[03:30:17] [SPEAKER_01] and you probably shouldn't be.
[03:30:19] [SPEAKER_01] Some of the time it indicates that like, oh, you were trying to pass data
[03:30:23] [SPEAKER_01] kind of against this natural like data flowing from parent to child relationship.
[03:30:29] [SPEAKER_01] that the framework tries to enforce.
[03:30:31] [SPEAKER_01] The example of that is like form validation.
[03:30:34] [SPEAKER_01] You know, when the valid state of the form
[03:30:36] [SPEAKER_01] depends on the valid state of its children,
[03:30:38] [SPEAKER_01] you kind of like the parent depends on the child,
[03:30:40] [SPEAKER_01] not the other way around.
[03:30:42] [SPEAKER_01] And like there are often cases
[03:30:45] [SPEAKER_01] when you do want to kind of create bounded cycles, right?
[03:30:50] [SPEAKER_01] You want to go back and run change detection again
[03:30:52] [SPEAKER_01] or go back and update your parent state again
[03:30:54] [SPEAKER_01] because you needed to change something about it.
[03:30:58] [SPEAKER_00] Yeah, yeah. So, yeah, basically you're going to hit, there's always going to be scenarios in any kind of change detection system where you can produce these loops if you try to and you try and put guards in.
[03:31:07] [SPEAKER_00] And hopefully the main model is straightforward enough that you're like not like accidentally finding yourself in this.
[03:31:15] [SPEAKER_00] Yeah, I need another word other than zone.
[03:31:17] [SPEAKER_00] I'm just...
[03:31:18] [SPEAKER_02] and and honestly like we you can have patterns like i i know the github issues like we keep them
[03:31:23] [SPEAKER_02] open like we've got issues where you can get like the into infinity loops with the current change
[03:31:27] [SPEAKER_02] detection you just like you know read promise in the binding and like then it schedules another
[03:31:32] [SPEAKER_02] change detection you kind of you know read it again and whatnot so i mean we'll see like honestly
[03:31:39] [SPEAKER_02] i think it will be super interesting to develop those patterns uh i gotta i got thiel's got a
[03:31:46] [SPEAKER_00] question for you guys
[03:31:47] [SPEAKER_00] JSX in Angular when?
[03:31:50] [SPEAKER_02] What can I say?
[03:31:57] [SPEAKER_02] I think it's fair to say that we want to look at the authoring format,
[03:32:02] [SPEAKER_02] like the authoring experience of the whole.
[03:32:05] [SPEAKER_02] That's...
[03:32:06] [SPEAKER_00] Yeah.
[03:32:07] [SPEAKER_00] Okay.
[03:32:07] [SPEAKER_00] Yeah.
[03:32:08] [SPEAKER_00] I think that was kind of a baiting question a little bit.
[03:32:10] [SPEAKER_01] Yeah.
[03:32:12] [SPEAKER_01] To expand on that answer a little bit, right, like JSX is absolutely on the table.
[03:32:16] [SPEAKER_01] When we look at do we want to improve the authoring format?
[03:32:20] [SPEAKER_01] I think we approach it not as like JSX being the goal, but we want to set out what kind of authoring format do we want?
[03:32:28] [SPEAKER_01] What experience do we want developers to have?
[03:32:30] [SPEAKER_01] And see if JSX is a good fit there.
[03:32:34] [SPEAKER_01] It's a challenging question because JSX has a very limited syntax.
[03:32:40] [SPEAKER_01] And Angular has a lot of concepts like directives that React doesn't, so JSX doesn't.
[03:32:46] [SPEAKER_01] And so it's a bit of a square peg ground hole kind of situation trying to fit these things together.
[03:32:53] [SPEAKER_02] And I admire Ryan, like how you bid in like GSX to submission, like to just kind of to make it work.
[03:33:01] [SPEAKER_02] But yeah, the fact that like kind of it is it's the expression language for creating trees and like we are trying to use it as the compilation target and like, you know, trying to have that like kind of statementy control flow like.
[03:33:17] [SPEAKER_02] it just doesn't sit nice together so i don't know i don't know
[03:33:25] [SPEAKER_00] Yeah, yeah, no, it's all good.
[03:33:28] [SPEAKER_02] It's another stream, right?
[03:33:30] [SPEAKER_00] Yeah, well, we have support for JS syntax and component metadata.
[03:33:33] [SPEAKER_00] I don't even know what this means.
[03:33:34] [SPEAKER_00] I'm just asking, I'm just forwarding this question.
[03:33:36] [SPEAKER_01] Yeah, so it means that today, for example, in Angular, like the at component block
[03:33:43] [SPEAKER_01] that you write on top of a component class.
[03:33:45] [SPEAKER_00] Yeah, that gets up decorators, yeah.
[03:33:47] [SPEAKER_01] Yeah, but it's a context that our compiler has to understand statically.
[03:33:52] [SPEAKER_01] So you can't just use whatever random string concatenation, like make an HTTP request to
[03:34:00] [SPEAKER_01] get your component template.
[03:34:02] [SPEAKER_01] Our compiler needs to be able to figure out what your template text is just looking at
[03:34:07] [SPEAKER_01] that decorator.
[03:34:08] [SPEAKER_01] That is unlikely to change.
[03:34:11] [SPEAKER_01] So the parts of Angular that the compiler needs to understand to compile your components
[03:34:15] [SPEAKER_01] are still need to be statically analyzable.
[03:34:19] [SPEAKER_00] Yeah.
[03:34:19] [SPEAKER_00] Yeah.
[03:34:20] [SPEAKER_00] That makes sense.
[03:34:21] [SPEAKER_00] What do we got here? Nested effects we talked about.
[03:34:27] [SPEAKER_00] People just, the JSX thing sent the chat a little bit crazy.
[03:34:32] [SPEAKER_01] So there are interesting questions, right?
[03:34:37] [SPEAKER_01] When people say JSX templates, they may not literally mean the JSX language.
[03:34:43] [SPEAKER_01] They may mean something like, oh, I want to be able to reference a component by importing it and using its class name.
[03:34:49] [SPEAKER_02] um instead of what i just space right like which is not tsi ask the view people how popular view
[03:34:58] [SPEAKER_00] jsx is yeah i actually don't know is it popular or no not i don't i don't think it's particularly
[03:35:05] [SPEAKER_00] popular um but again there's this i think there's certain elements of the framework design
[03:35:10] [SPEAKER_00] like the way things are written that it's like
[03:35:12] [SPEAKER_00] when it's not like the first class citizen, like you're always going to like, like shift
[03:35:18] [SPEAKER_00] things a certain way or like, like I'm pretty sure views GSX doesn't leverage the reactivity
[03:35:23] [SPEAKER_00] the same way the templating language does, right?
[03:35:26] [SPEAKER_00] Like but it gives you control in a different way.
[03:35:28] [SPEAKER_00] Like so yeah, I think, yeah.
[03:35:31] [SPEAKER_02] And honestly, like, I mean, that's kind of, you know, we have joking here, but like,
[03:35:35] [SPEAKER_02] like starting with the syntax and saying like,
[03:35:38] [SPEAKER_02] oh, I'm going to wrap framework into,
[03:35:40] [SPEAKER_02] like kind of put framework into it,
[03:35:42] [SPEAKER_02] it's kind of backwards, right?
[03:35:43] [SPEAKER_02] Like we just want to start with the framework
[03:35:45] [SPEAKER_02] and then like put like clothes on top on it
[03:35:47] [SPEAKER_02] and just syntax.
[03:35:50] [SPEAKER_00] Yeah, so people are just still,
[03:35:52] [SPEAKER_00] a bunch of people are also interested in SSR.
[03:35:54] [SPEAKER_00] You guys mentioned hydration is coming.
[03:35:55] [SPEAKER_00] I think that's really the first step
[03:35:57] [SPEAKER_00] before anything to signals fit into the SSR story.
[03:36:02] [SPEAKER_01] So nothing really concrete, but you can absolutely see how there would be interesting things you could do there where when you know when a component needs to update, you can think about potentially suspending that, you know, hydration until something actually changes, which is going to affect that component.
[03:36:25] [SPEAKER_01] Yeah.
[03:36:26] [SPEAKER_01] You know.
[03:36:26] [SPEAKER_00] But yeah, yeah.
[03:36:27] [SPEAKER_00] Yeah.
[03:36:27] [SPEAKER_00] Yeah.
[03:36:28] [SPEAKER_00] Because I mean, the biggest difference on the client is you know, or on the server is like, generally you're not like in like the sync.
[03:36:34] [SPEAKER_00] It's interesting. The synchronous state problem is way less interesting on the server.
[03:36:38] [SPEAKER_00] I said it's interesting that it's not interesting. It's like you can picture a world where you have like something like RX where you're like feeding pipes and transferring your data from your database or doing something like that and feeding into your templates and doing all that.
[03:36:47] [SPEAKER_00] But the thing is like from a synchronization standpoint.
[03:36:49] [SPEAKER_00] you can view server rendering almost as like a few like a single flash in time or maybe a couple flashes in time as data comes in.
[03:36:56] [SPEAKER_00] It's not like this problem of like how do I propagate my changes.
[03:36:59] [SPEAKER_00] The server side is like mostly static to the point of like in the ideal world actually you just render the parts you needed as you rendered them once and then be done with it.
[03:37:10] [SPEAKER_00] So yeah, it's a different kind of problem.
[03:37:13] [SPEAKER_00] Okay.
[03:37:14] [SPEAKER_00] I think, yeah, I think we're good on time.
[03:37:16] [SPEAKER_00] I think we're going to, we're going to, okay, any advice for a react?
[03:37:21] [SPEAKER_00] I can't hear it.
[03:37:25] [SPEAKER_00] J. Lark.
[03:37:26] [SPEAKER_00] I don't know if you guys saw it.
[03:37:28] [SPEAKER_00] I'm not answering that.
[03:37:29] [SPEAKER_00] We're going to let Paolo and Alex go in peace without, without, without spicy, spicy react takes.
[03:37:38] [SPEAKER_00] And thank them very much for coming on the show.
[03:37:39] [SPEAKER_00] Any last things you guys want to plug before we let you guys go?
[03:37:45] [SPEAKER_02] I think for me, it's just like, I would like to see less controversy.
[03:37:51] [SPEAKER_02] And it's like, you know, like it's a big change and like people see it from the different angles.
[03:37:55] [SPEAKER_02] But like what is especially interesting for me is like, you know, like we are building on those patterns.
[03:37:59] [SPEAKER_02] We are going to see how applications are being built and so on.
[03:38:03] [SPEAKER_02] Like I just want to engage on this level, right?
[03:38:05] [SPEAKER_02] Like I want to see what you build with it.
[03:38:07] [SPEAKER_02] So that's just kind of my biggest curiosity right now.
[03:38:12] [SPEAKER_00] Yeah, I think.
[03:38:14] [SPEAKER_00] yeah sorry i was just gonna say that's great you continue sir definitely um yeah keep an eye out
[03:38:20] [SPEAKER_01] for our upcoming rfc um you know the the code we're landing right now is still very much like
[03:38:26] [SPEAKER_01] prototype we're just seeing how this thing fits into angular whether all the wires connect
[03:38:31] [SPEAKER_01] right whether the signals get through um but we will our rfc will kind of detail not just
[03:38:38] [SPEAKER_01] the little prototype experience but the full experience that we want to try to create
[03:38:44] [SPEAKER_01] kind of the direction where we see signals going in angular so stay tuned
[03:38:51] [SPEAKER_00] all right and with that and we're going to let alex and paul go and thank you for joining me today
[03:38:57] [SPEAKER_00] um i hope to have you guys on in the future maybe when you roll it all out we can come back and
[03:39:01] [SPEAKER_00] talk about how it all went so um thanks for joining me today awesome thanks for having us yeah
[03:39:06] [SPEAKER_01] thank you so much this is awesome always a pleasure to talk to you yeah you guys too i will
[03:39:11] [SPEAKER_01] talk soon i'm sure thank you for all your help um over the last year or so with us
[03:39:16] [SPEAKER_00] I'm glad to see, but when stuff like this happens,
[03:39:20] [SPEAKER_00] I'm like so happy to see the results of that work.
[03:39:23] [SPEAKER_00] So, and it's still going,
[03:39:24] [SPEAKER_00] like this is gonna be really exciting.
[03:39:25] [SPEAKER_00] That would be more.
[03:39:26] [SPEAKER_00] Watch the space, you know.
[03:39:27] [SPEAKER_00] Anyways, see you guys.
[03:39:31] [SPEAKER_00] All right, that was awesome, eh?
[03:39:33] [SPEAKER_00] Yeah.
[03:39:34] [SPEAKER_00] So we gotta switch gears quickly
[03:39:36] [SPEAKER_00] into this week in JavaScript.
[03:39:37] [SPEAKER_00] Otherwise I'm not gonna have enough time
[03:39:38] [SPEAKER_00] for hot and spicy takes.
[03:39:40] [SPEAKER_00] Actually, I'm not gonna lie,
[03:39:41] [SPEAKER_00] I'm gonna, I wanna dial this down a little bit this week,
[03:39:45] [SPEAKER_00] a little,
[03:39:47] [SPEAKER_00] This has been a tricky week on, you know, controversial talking and
[03:40:00] [SPEAKER_00] I feel like stuff's been heating up, right?
[03:40:02] [SPEAKER_00] So I guess I can leave that for this week in JavaScript.
[03:40:06] [SPEAKER_00] We can talk about Dino.
[03:40:08] [SPEAKER_00] What does something else think about?
[03:40:10] [SPEAKER_00] Was there Dino news?
[03:40:11] [SPEAKER_00] I have been so in a black hole this last week because of the conversations.
[03:40:16] [SPEAKER_00] And I don't even have the tweets here because some got deleted.
[03:40:20] [SPEAKER_00] But I'm going to talk about it anyways.
[03:40:22] [SPEAKER_00] Let's just get this going, right?
[03:40:24] [SPEAKER_00] Am I good to go as...
[03:40:27] [SPEAKER_02] Doom, leave, leave, leave.
[03:40:30] [SPEAKER_02] And let's talk about this weekend's JavaScript.
[03:40:36] [SPEAKER_00] Okay.
[03:40:36] [SPEAKER_00] All right.
[03:40:36] [SPEAKER_00] Just getting all my windows set up, taking a swig of water that's almost gone.
[03:40:42] [SPEAKER_00] You guys all live and still wither.
[03:40:43] [SPEAKER_00] I should check Twitch to make sure that I didn't miss like another GIF sub blowout or anything.
[03:40:49] [SPEAKER_00] I apologize.
[03:40:52] [SPEAKER_00] I don't always check Twitch.
[03:40:55] [SPEAKER_00] So, yeah.
[03:40:58] [SPEAKER_00] I'm actually very thankful, Theo.
[03:41:00] [SPEAKER_02] Um...
[03:41:01] [SPEAKER_00] on the drama side that you did your video and put it out there because it seems
[03:41:09] [SPEAKER_00] like something obvious that I would kind of dig into a bit but I don't actually
[03:41:16] [SPEAKER_00] yeah I'm gonna handle it in a slightly different way if you want the you know
[03:41:21] [SPEAKER_00] I'll just lay it in when we get there okay let's let's just do this it's so
[03:41:23] [SPEAKER_00] funny I treat this like it's a separate segment but I never actually pull this
[03:41:26] [SPEAKER_00] out so let's let's talk about this week in JavaScript
[03:41:34] [SPEAKER_00] This week has been a lot of Twitter drama.
[03:41:40] [SPEAKER_00] I'm just going to get off the line.
[03:41:43] [SPEAKER_00] And I feel like we're going to get into it to a certain degree.
[03:41:46] [SPEAKER_00] There's no way to avoid it.
[03:41:47] [SPEAKER_00] But I want to look at kind of the overarching themes of what have been going on to kind of understand better where this is all coming from.
[03:41:59] [SPEAKER_00] And...
[03:42:02] [SPEAKER_00] I think a lot of this topic is like a little bit heavy, at least from my perspective.
[03:42:06] [SPEAKER_00] Maybe I'm taking things too seriously on that, but it's something that's got a lot of my thinking.
[03:42:12] [SPEAKER_00] So before that, I'd rather just talk about the, you know, the little quick news pieces,
[03:42:19] [SPEAKER_00] and then we'll kind of get back around to the drama. So let's get started with the
[03:42:29] [SPEAKER_00] Sucrean JavaScript. Let's see if I blow up this one more size. Yeah, okay.
[03:42:35] [SPEAKER_00] Just some quick solid news to shoot it off the out front.
[03:42:40] [SPEAKER_00] First of all, I recorded with Syntax FM podcast,
[03:42:45] [SPEAKER_00] Westboss and Scott Tolinsky.
[03:42:47] [SPEAKER_00] The episode is up.
[03:42:48] [SPEAKER_00] That was fun.
[03:42:50] [SPEAKER_00] It's been a long time coming.
[03:42:52] [SPEAKER_00] And I think this is decent.
[03:42:55] [SPEAKER_00] If people just want to get a gist of what solid is
[03:42:57] [SPEAKER_00] and how it came to be, this is a good modern version of that.
[03:43:05] [SPEAKER_00] Obviously, if you didn't see my last stream, big things been happening on the solid side with this kind of three-way partnership between solid team and community, the TAN stack community and Astro resulting in...
[03:43:24] [SPEAKER_00] Some interesting output. I tried to be clear on the stream. There was a lot of confusion that I had to deal with this week because apparently I wasn't clear.
[03:43:31] [SPEAKER_00] Solace Dart is not dead, contrary to some popular belief. All that's happening is we're taking pieces of Solace Dart and generalizing it.
[03:43:42] [SPEAKER_00] and moving the deployment adapter core piece on top of Astro.
[03:43:47] [SPEAKER_00] So we can use Astro as a platform with Solid Start,
[03:43:50] [SPEAKER_00] and then we're taking some of the reusable pieces
[03:43:52] [SPEAKER_00] and sharing them with Tanner so he can build...
[03:43:55] [SPEAKER_00] TAN stack start, which is not an agnostic framework, but actually a React framework.
[03:44:02] [SPEAKER_00] So we're talking about a React framework and a solid framework using the same common libraries built on top of Astro.
[03:44:09] [SPEAKER_00] That's the story.
[03:44:11] [SPEAKER_00] It's still solid start, the same experience, same apps, everything works, same way.
[03:44:16] [SPEAKER_00] And if anything, there's going to be a React framework out there that is going to be very, very similar to solid start.
[03:44:24] [SPEAKER_00] And we're going to get a little, we gave, we're working with Tanner to take the like server functions out of solid start so he can use them and some of the shared, you know, pieces.
[03:44:34] [SPEAKER_00] And then Tanner's going to help us get the type safety into the router.
[03:44:38] [SPEAKER_00] So in the end, you're going to have that same, you know, start experience both for React and solid.
[03:44:44] [SPEAKER_00] Yeah.
[03:44:45] [SPEAKER_00] That's that's that's the headline. Yes, this this is very much what's going on here.
[03:44:58] [SPEAKER_00] Any of that solid. If you look in Nikhil's GitHub, you'll find it. It was really like honestly he just like he had to change the entry slightly and everything worked.
[03:45:08] [SPEAKER_00] I just want everyone to know like this just gives us the power of a company actually building a meta framework to help build the tricky parts of the meta framework like the core pieces that are it lets us focus on the features and building that experience and that's that's what I wanted to do all along you know it's like Viet is already such a level up over like the tools before it adding Astro is like another level on top of that it doesn't it's easier and easier now to build a meta framework
[03:45:42] [SPEAKER_00] One day, the benefits of this will cross tie in, but for the most part, we're literally
[03:45:47] [SPEAKER_00] just like circumventing almost everything Astro is doing above the request handler.
[03:45:51] [SPEAKER_00] It's almost like we hijack an API route and it's like completely just separate.
[03:45:55] [SPEAKER_00] In the future, we're going to work a lot closer together to build even better functionality.
[03:46:01] [SPEAKER_00] I think it is interesting that stuff like our server functions, you know, as start like
[03:46:06] [SPEAKER_00] bling as we've been codenaming it, could.
[03:46:09] [SPEAKER_00] you know fit into any island or any astro framework you know if we if we you know continue on this
[03:46:14] [SPEAKER_00] path but to start with this is this is just like switching the bundler to the same bundler almost
[03:46:20] [SPEAKER_00] it's it's it's actually a fairly um low level detail that's not going to impact things much
[03:46:30] [SPEAKER_00] okay so there's that let's see if there's anything else
[03:46:35] [SPEAKER_00] Oh yeah, I thought this was kind of cool.
[03:46:37] [SPEAKER_00] There was a few announcements on the solid side,
[03:46:40] [SPEAKER_00] but seeing people build cool things
[03:46:42] [SPEAKER_00] with Tori and Rust and Solid together,
[03:46:44] [SPEAKER_00] this was...
[03:46:46] [SPEAKER_00] Yet another launcher.
[03:46:48] [SPEAKER_00] It's an alternative Raycast or Alfred, etc.
[03:46:50] [SPEAKER_00] Plugin Sport, fully themable.
[03:46:52] [SPEAKER_00] Just cool to see people build different types of projects with Solid on different sorts of platforms.
[03:46:58] [SPEAKER_00] I always highlight that.
[03:46:59] [SPEAKER_00] Other great thing is I mentioned before, Dan is back and he's been producing tons of really awesome video content on Solid's channel.
[03:47:10] [SPEAKER_00] He did one on...
[03:47:14] [SPEAKER_00] explaining how you don't need a compiler to use Solid, and he did one on how to use Create Resource, our data fetching mechanism.
[03:47:21] [SPEAKER_00] Really recommended for people interested in Solid.
[03:47:24] [SPEAKER_00] Really good starter content, stuff that I'm not good at.
[03:47:26] [SPEAKER_00] The stream is not where you learn about Solid.
[03:47:29] [SPEAKER_00] Dan's videos are.
[03:47:32] [SPEAKER_00] Okay.
[03:47:35] [SPEAKER_00] And, I mean, the other big news is why we had...
[03:47:40] [SPEAKER_00] our guests on stream today.
[03:47:43] [SPEAKER_00] It was Angular, you know, last week it was when the announcement actually happened
[03:47:47] [SPEAKER_00] where they shared the RFC.
[03:47:49] [SPEAKER_00] But Sarah did this amazing explainer on what signals are.
[03:47:54] [SPEAKER_00] She is an artist.
[03:47:59] [SPEAKER_00] Like, this interactive guide is so well done.
[03:48:05] [SPEAKER_00] I don't know what else to say about it other than the, like...
[03:48:10] [SPEAKER_00] I'm kind of envious of being able to get content this good to explain stuff.
[03:48:15] [SPEAKER_00] What is a signal?
[03:48:17] [SPEAKER_00] Setable signals.
[03:48:18] [SPEAKER_00] What is computed effect?
[03:48:19] [SPEAKER_00] This focuses on those key parts of languages, of the language that we talked about with them on stream.
[03:48:26] [SPEAKER_00] And it just kind of lays it out in a really approachable way.
[03:48:31] [SPEAKER_00] So yeah, this simple little explainer hooks up to the RFC.
[03:48:37] [SPEAKER_00] It's really awesome to see this kind of stuff out there.
[03:48:42] [SPEAKER_00] Yeah, let's drop this in.
[03:48:44] [SPEAKER_00] Yeah, it's just Angular Signals app.
[03:48:48] [SPEAKER_00] Yeah.
[03:48:48] [SPEAKER_00] Yeah.
[03:48:51] [SPEAKER_02] All right.
[03:48:57] [SPEAKER_00] Okay.
[03:48:59] [SPEAKER_00] Okay.
[03:48:59] [SPEAKER_00] I was like, what else are we going to talk about?
[03:49:01] [SPEAKER_00] It's like, nope.
[03:49:02] [SPEAKER_00] Nope.
[03:49:04] [SPEAKER_00] Are we there yet?
[03:49:07] [SPEAKER_00] Oh, yeah.
[03:49:07] [SPEAKER_00] Did a great podcast on JavaScript Jabber.
[03:49:10] [SPEAKER_00] I always enjoy that one.
[03:49:11] [SPEAKER_00] Talked a lot about different trends and frameworks and converging.
[03:49:16] [SPEAKER_00] Oh, yeah.
[03:49:20] [SPEAKER_00] Yeah.
[03:49:20] [SPEAKER_00] Okay.
[03:49:20] [SPEAKER_00] We got a couple other news pieces before we hit the drama.
[03:49:24] [SPEAKER_00] Yeah.
[03:49:24] [SPEAKER_00] We talked about this on stream.
[03:49:26] [SPEAKER_00] Dominic Gannaway has been working on a new reactive framework.
[03:49:28] [SPEAKER_00] I got the chance to see a little sneak preview,
[03:49:31] [SPEAKER_00] but this is a really interesting approach
[03:49:35] [SPEAKER_00] because it takes something like Solid's reactivity
[03:49:40] [SPEAKER_00] And then sort of uses a compiler to the, to kind of the extreme to basically bridge the
[03:49:48] [SPEAKER_00] gap with something like say react forget.
[03:49:51] [SPEAKER_00] It's not react today, but like it's almost like if you made the target of compact future
[03:49:57] [SPEAKER_00] react.
[03:49:58] [SPEAKER_00] And I think that's really interesting.
[03:50:00] [SPEAKER_00] it suggests that there might be a future where something like solid and react could have compat
[03:50:07] [SPEAKER_00] because react like the the hardest thing to do for react compat with us is the fact that the
[03:50:14] [SPEAKER_00] react has this re-render model that you have to be aware of like you know there's there's a reason
[03:50:18] [SPEAKER_00] there's use ref and use callback and stuff like stuff on the outside reruns and stuff on the inside
[03:50:24] [SPEAKER_00] you know, does when dependency raise, you know, tell it to.
[03:50:29] [SPEAKER_00] And you always have to be aware that there's like an outside state and inside state.
[03:50:33] [SPEAKER_00] If you get rid of the memos, get rid of the used callbacks and stuff,
[03:50:36] [SPEAKER_00] and leave just the state and the effects effectively,
[03:50:40] [SPEAKER_00] it no longer kind of feels like a re-render model.
[03:50:44] [SPEAKER_00] And I don't even know what the result is.
[03:50:48] [SPEAKER_00] This reminds, when I saw it, it reminded me of like the destructure plugins
[03:50:52] [SPEAKER_00] that I've seen in the solid community and like Reactivars,
[03:50:56] [SPEAKER_00] the thing where we like make it so you don't have to call signals as a function.
[03:50:59] [SPEAKER_00] They just work as variables.
[03:51:01] [SPEAKER_00] It's like he's wrapped those kind of things all into...
[03:51:04] [SPEAKER_00] a library driven off signals to basically show what a future composed framework could look like
[03:51:14] [SPEAKER_00] that heavily relies on compilation.
[03:51:19] [SPEAKER_00] The limitation only constraints are now limiting let's let you lose.
[03:51:26] [SPEAKER_00] Yeah, he makes rules essentially so that you can't write code in a way that like could show
[03:51:38] [SPEAKER_00] How do I put it?
[03:51:40] [SPEAKER_00] Like, show that the component re-renders or not.
[03:51:42] [SPEAKER_00] His whole trick here is it actually doesn't re-render.
[03:51:44] [SPEAKER_00] It actually executes the way Solid executes, but it looks like React.
[03:51:48] [SPEAKER_00] So he basically restricts it so you can't write certain code in the React way because it doesn't make sense to fit this.
[03:51:57] [SPEAKER_00] I don't know how people are going to...
[03:51:59] [SPEAKER_00] feel about this in general, but I think as a direction it's really interesting.
[03:52:04] [SPEAKER_00] And I intend to see how more experimentation goes because in a sense it is more restrictive than React is today.
[03:52:12] [SPEAKER_00] but maybe not more restrictive than react forget will be their memoizing compiler but it's actually
[03:52:17] [SPEAKER_00] almost completely additive on top of what solid does today like the stuff that he adds is stuff
[03:52:22] [SPEAKER_00] that you don't do in solid already so it's really i'm very curious to see where these worlds collide
[03:52:37] [SPEAKER_00] check my twitch okay something happened oh wow oh 10 gift subs thank you so much io samuel um
[03:52:49] [SPEAKER_00] I'm still not used to getting many subs.
[03:52:52] [SPEAKER_00] Thank you.
[03:52:53] [SPEAKER_00] This is a lot.
[03:52:55] [SPEAKER_00] I really appreciate you supporting the channel.
[03:53:03] [SPEAKER_00] And Parasocial, thank you for the heads up.
[03:53:09] [SPEAKER_00] Thank you.
[03:53:09] [SPEAKER_00] I'm glad you appreciate it.
[03:53:13] [SPEAKER_00] Very appreciated.
[03:53:19] [SPEAKER_00] Okay.
[03:53:20] [SPEAKER_00] Speaking of server functions,
[03:53:23] [SPEAKER_00] uh...
[03:53:24] [SPEAKER_00] Manu from Quick did a great explainer on it, and he basically highlighted in this article that I think is actually really interesting, that this pattern of server functions is just kind of showing up everywhere in it.
[03:53:36] [SPEAKER_00] And in Quick's case, it's not just server functions, it's literally being able to just break out any of your code isomorphically.
[03:53:44] [SPEAKER_00] And this is...
[03:53:46] [SPEAKER_00] This is going to be a hot topic on the compilation side.
[03:53:50] [SPEAKER_00] I think you're seeing a trend here.
[03:53:52] [SPEAKER_00] There's a lot of hot topics on the compilation side
[03:53:54] [SPEAKER_00] because now we're saying your server code and your client code
[03:53:56] [SPEAKER_00] can literally exist in line.
[03:54:01] [SPEAKER_00] And it's interesting because even as something,
[03:54:03] [SPEAKER_00] like we have the same feature in Solid Start
[03:54:06] [SPEAKER_00] where you can pretty much just like stick a server function anywhere,
[03:54:09] [SPEAKER_00] you know, and have that code only run on the server.
[03:54:15] [SPEAKER_00] When I used it at first, I like...
[03:54:17] [SPEAKER_00] I kind of started just pulling it out of the functions anyways because it just didn't feel
[03:54:21] [SPEAKER_00] natural to me. But I don't know, people might actually use it and like it. It is very interesting,
[03:54:30] [SPEAKER_00] right? We've had some time to play with this now. I think server functions have been in solid
[03:54:34] [SPEAKER_00] start since, I want to say like the spring sometime, maybe March. Oh, well, I guess it's almost been
[03:54:42] [SPEAKER_00] a year. But like,
[03:54:45] [SPEAKER_00] It's even playing with them, I'm not even sure if I'm 100% comfortable with it.
[03:54:52] [SPEAKER_00] But I think what they open up is really powerful.
[03:54:54] [SPEAKER_00] And I think we're going to learn best patterns as we go.
[03:54:56] [SPEAKER_00] But in any case, he really lays out, and the shout out obviously, Prim was not frameworks, how this can...
[03:55:04] [SPEAKER_00] you know, enable a different kind of perspective on developing UIs.
[03:55:12] [SPEAKER_00] The video is probably all you need in the explainer,
[03:55:15] [SPEAKER_00] but it's definitely one of those moments when you watch it,
[03:55:16] [SPEAKER_00] and this is why I highlighted it.
[03:55:18] [SPEAKER_00] You see it and you're just like, whoa, what's happening?
[03:55:21] [SPEAKER_00] It's one of those wow moments.
[03:55:22] [SPEAKER_00] So I give them a lot of credit on selling it.
[03:55:24] [SPEAKER_00] I have not sold this very well in the past year.
[03:55:28] [SPEAKER_00] This is how you sell the feature.
[03:55:31] [SPEAKER_00] It's definitely pretty cool stuff.
[03:55:35] [SPEAKER_00] Right. But yeah, I mean on the positive side too, if you can go use this in quick, it just came out.
[03:55:42] [SPEAKER_00] And if you want, it's also been in solid start. So you can go do this in solid as well.
[03:55:53] [SPEAKER_00] We're...
[03:55:54] [SPEAKER_00] We already talked about this on stream.
[03:55:56] [SPEAKER_00] Milo has gathered all the reactivity benchmarks into one place.
[03:56:00] [SPEAKER_00] If you are a reactivity fan and you want to play around with your library and try stuff,
[03:56:03] [SPEAKER_00] I highly recommend checking this out.
[03:56:07] [SPEAKER_00] The cell X benchmark is not representative of the whole world of things.
[03:56:12] [SPEAKER_00] This is much more interesting.
[03:56:13] [SPEAKER_00] And if you're interested about how Solid's been working,
[03:56:17] [SPEAKER_00] this X reactivity here is actually Solid 2.0.
[03:56:21] [SPEAKER_00] Shorter bars are better.
[03:56:22] [SPEAKER_00] So you're seeing...
[03:56:24] [SPEAKER_00] we're making good improvements on the reactivity system.
[03:56:28] [SPEAKER_00] I don't know if this is gonna make a huge difference
[03:56:30] [SPEAKER_00] from like 99% of apps.
[03:56:32] [SPEAKER_00] These kind of improvements don't even measure
[03:56:34] [SPEAKER_00] on stuff like the JS framework benchmarks,
[03:56:36] [SPEAKER_00] but I think for certain types of complicated reactive graphs,
[03:56:41] [SPEAKER_00] just like random things, it's just a nice boost
[03:56:43] [SPEAKER_00] if we can get like a bit of a performance gain,
[03:56:46] [SPEAKER_00] in a lot of areas.
[03:56:47] [SPEAKER_00] So very excited about the work there.
[03:56:50] [SPEAKER_00] All right, all right.
[03:56:51] [SPEAKER_00] Have I pushed things off enough?
[03:56:52] [SPEAKER_00] Yeah.
[03:56:59] [SPEAKER_00] I should talk to Theo about YouTube paid subs and whether they're worth it.
[03:57:15] [SPEAKER_00] Yeah.
[03:57:16] [SPEAKER_00] All right.
[03:57:17] [SPEAKER_00] Let's, let's, let's, let's get into this stuff.
[03:57:22] [SPEAKER_00] There's been two, the last few weeks have been a lot of, I don't know what to call it,
[03:57:32] [SPEAKER_00] like in, I don't want to call it like there's been a lot of, it's almost like bickering
[03:57:36] [SPEAKER_00] is the best way to put it between like framework authors on Twitter again.
[03:57:41] [SPEAKER_00] And it's, it's, it's, it's been a while.
[03:57:44] [SPEAKER_00] is the best way to put it.
[03:57:45] [SPEAKER_00] This was actually common back in,
[03:57:48] [SPEAKER_00] like when React came on the scene around 2015,
[03:57:51] [SPEAKER_00] you know, like React was around earlier,
[03:57:52] [SPEAKER_00] but if you watch the documentary, and this is legit,
[03:57:57] [SPEAKER_00] a lot of people didn't like React at the beginning,
[03:57:59] [SPEAKER_00] and it was just like literally like divided lines,
[03:58:01] [SPEAKER_00] but at a certain point when React started actually getting
[03:58:03] [SPEAKER_00] like more wider adoption,
[03:58:04] [SPEAKER_00] people started kind of like,
[03:58:08] [SPEAKER_00] like getting into arguments about stuff like
[03:58:11] [SPEAKER_00] what just JavaScript means,
[03:58:13] [SPEAKER_00] and like is JSX compilation,
[03:58:24] [SPEAKER_00] Oh, when did that happen?
[03:58:28] [SPEAKER_00] Damn it.
[03:58:29] [SPEAKER_00] Sorry.
[03:58:30] [SPEAKER_00] Like, interrupt the middle of my, of, of where I was going to do, talk about very serious stuff.
[03:58:46] [SPEAKER_00] Yeah, no.
[03:58:47] [SPEAKER_00] I knew this was coming.
[03:58:48] [SPEAKER_00] That was what that blurred image was.
[03:58:49] [SPEAKER_00] Okay, here we go.
[03:58:52] [SPEAKER_00] All right.
[03:58:53] [SPEAKER_00] Give that the retweet.
[03:58:56] [SPEAKER_00] this is the it's it's this is this was a monumental challenge um but marco js now has typescript
[03:59:04] [SPEAKER_00] support um which should give any like one hope because marco is one of the most sophisticated
[03:59:11] [SPEAKER_00] dsl languages for a javascript framework and they've managed to land ts inside the templates
[03:59:17] [SPEAKER_00] um yeah i yeah this this is an amazing piece of typescript engineering um yeah i
[03:59:29] [SPEAKER_00] I this is people that we we they kind of got hijacked in the middle of doing
[03:59:36] [SPEAKER_00] Marco six by how important typescript is especially for eBay and this this this
[03:59:42] [SPEAKER_00] this this is big news I'm very happy stoked for the team it's funny I mean I
[03:59:48] [SPEAKER_00] can tell a little joke about this when this effort started we were doing sprint
[03:59:55] [SPEAKER_00] planning and it was what a year ago in February and and we were like kind of hooked
[04:00:00] [SPEAKER_00] up on like some specific technical detail and Dylan's like we're talking like okay Michael how
[04:00:06] [SPEAKER_00] long is it going to take to kind of work this out it's like about a week okay and we'll kind of
[04:00:10] [SPEAKER_00] like talk you know and I'm like okay cool Michael let's like work through this thing and Dylan's
[04:00:14] [SPEAKER_00] like okay he's like okay how did I just do TypeScript now and I'm like how long do you think
[04:00:20] [SPEAKER_00] it'll take it's like oh about three weeks and I'm like
[04:00:23] [SPEAKER_00] Yeah, you know, I don't think a bottleneck says in the way of Marco 6.
[04:00:27] [SPEAKER_00] If it's about three weeks, that's fine.
[04:00:30] [SPEAKER_00] Are you sure it's going to be three weeks?
[04:00:31] [SPEAKER_00] And he's like, yeah, I mean, we might find some more stuff.
[04:00:35] [SPEAKER_00] But I think that we can get, you know, the good basis for it.
[04:00:38] [SPEAKER_00] Suffice to say it.
[04:00:40] [SPEAKER_00] Yeah.
[04:00:40] [SPEAKER_00] There's been breaks and pauses throughout, but the TypeScript effort has been months and months.
[04:00:46] [SPEAKER_00] Basically, good for Dylan specifically most of last year.
[04:00:50] [SPEAKER_00] We brought him in on stream, and he talked about all the challenges on building the language and getting that kind of support.
[04:00:56] [SPEAKER_00] And even after that, we found even more challenges in terms of just getting consistency.
[04:01:04] [SPEAKER_00] It is tricky when you have a language with completely different semantics and then try and like make it work,
[04:01:12] [SPEAKER_00] you know, hopefully flawlessly.
[04:01:14] [SPEAKER_00] It takes an incredible amount of detail and expertise in TypeScript to pull this off.
[04:01:20] [SPEAKER_00] And they've done it.
[04:01:23] [SPEAKER_00] So huge congratulations to Marco.
[04:01:27] [SPEAKER_00] And thank you, Samuel, for pointing this out.
[04:01:29] [SPEAKER_00] I've been waiting for this announcement.
[04:01:32] [SPEAKER_00] Now, you know, they did it just in time, but they...
[04:01:35] [SPEAKER_00] should have given me a heads up before stream anyway frameworks written without typescript
[04:01:54] [SPEAKER_00] and typescript is lift yeah and it's it's even harder when you actually have to make the
[04:01:59] [SPEAKER_00] templating language work with it um yeah i mean mark was like the the typescript migration of
[04:02:07] [SPEAKER_00] the actual code base in the runtime has been happening piece by piece over the past couple
[04:02:11] [SPEAKER_00] years but like the actual the actual final lift is actually just like getting
[04:02:16] [SPEAKER_00] like this template thing to actually handle TypeScript.
[04:02:21] [SPEAKER_00] Like you can see it, this is not,
[04:02:27] [SPEAKER_00] this is definitely, yeah.
[04:02:33] [SPEAKER_00] Anyway, that's awesome. I'm excited about that.
[04:02:39] [SPEAKER_00] Okay, I almost should have looked at that to the end
[04:02:42] [SPEAKER_00] so we could have added the stream on a really happy note.
[04:02:45] [SPEAKER_00] Okay, back to serious stuff.
[04:02:50] [SPEAKER_00] All right.
[04:02:52] [SPEAKER_00] So as I was saying, last week,
[04:02:54] [SPEAKER_00] a bunch of people bickering about their compilers.
[04:03:00] [SPEAKER_00] Right. And, you know, there was this whole thing like where people like I put it on stream.
[04:03:06] [SPEAKER_00] I think we talked about it where it's like, you know,
[04:03:09] [SPEAKER_00] For some people, the network division between files is sacred.
[04:03:14] [SPEAKER_00] Other people, you know, is magic exports too magical?
[04:03:18] [SPEAKER_00] Is changing the semantics of let and labels too magical?
[04:03:22] [SPEAKER_00] Like everyone seemed to like take a stance and then decide like that was the right thing.
[04:03:27] [SPEAKER_00] If you do more than that, that's too much compilation.
[04:03:29] [SPEAKER_00] It's too magical.
[04:03:33] [SPEAKER_00] And it's interesting because there is definitely a comfort level thing here.
[04:03:37] [SPEAKER_00] And so we had this interesting discussion between like Manu from Quick,
[04:03:42] [SPEAKER_00] which is very, you know, they got dollar signs everywhere to Svelte with Rich.
[04:03:48] [SPEAKER_00] You had Ryan Florence coming in there.
[04:03:51] [SPEAKER_00] And like it was really interesting to hear like on one hand to hear
[04:03:57] [SPEAKER_00] the difference where like for Rich, for example,
[04:04:00] [SPEAKER_00] morphing JavaScript syntax within a script tag.
[04:04:04] [SPEAKER_00] It's perfectly fine, but having a magic export where client is server coded in the same file, not okay.
[04:04:11] [SPEAKER_00] Like, and vice versa.
[04:04:19] [SPEAKER_00] So with that kind of heat kind of flying around again, I guess it really started, and I actually don't have this pinned anywhere, but let me see if I can find it really quick for us.
[04:04:34] [SPEAKER_00] Svelte, serialize, promise.
[04:04:43] [SPEAKER_00] Really?
[04:04:45] [SPEAKER_00] Promise is?
[04:04:50] [SPEAKER_00] Rich Harris.
[04:04:53] [SPEAKER_00] It's just, should we, let's see if we can find it.
[04:05:13] [SPEAKER_00] Was it not him?
[04:05:14] [SPEAKER_00] Was it a Svelte official thing?
[04:05:24] [SPEAKER_00] Because this is the compiler conversation.
[04:05:27] [SPEAKER_00] And it feel like it leaked right over.
[04:05:28] [SPEAKER_00] I'm not going to find it right now, am I?
[04:05:30] [SPEAKER_00] Maybe someone on YouTube can find,
[04:05:34] [SPEAKER_00] or Twitch can find the actual thing.
[04:05:42] [SPEAKER_00] I'm not going to find it here.
[04:05:43] [SPEAKER_00] That's too bad.
[04:05:49] [SPEAKER_00] I figured it would be here.
[04:05:58] [SPEAKER_00] Okay, here.
[04:05:59] [SPEAKER_00] Is this it?
[04:05:59] [SPEAKER_00] We've been busy.
[04:06:02] [SPEAKER_00] Okay, yeah.
[04:06:03] [SPEAKER_00] So basically...
[04:06:05] [SPEAKER_00] Svelte has added support for streaming snapshots, which is another cool feature.
[04:06:11] [SPEAKER_00] I was thinking about talking about...
[04:06:15] [SPEAKER_00] um but and a bunch of stuff to spell kid right and but streaming is a big one and as you know um
[04:06:22] [SPEAKER_00] i've been pushing talking about streaming a lot uh for the last couple years and basically rich
[04:06:29] [SPEAKER_00] harris was like it was inspired by this tweet michael hevery quick angular you know he he was
[04:06:34] [SPEAKER_00] like did you know that quick dev can serialize a result serialized resolve promises but soon
[04:06:39] [SPEAKER_00] quick devil will be able to serialize non-resolved promises then our demos will go to 11. and
[04:06:45] [SPEAKER_00] What a lot of people don't understand or know about this is this latter thing is basically essential to how streaming works or out-of-order streaming.
[04:06:54] [SPEAKER_00] Like if your framework does out-of-order streaming, you basically serialize non-resolved promises.
[04:07:00] [SPEAKER_00] So you can start a promise, start streaming, and then resolve on the client and complete the stream.
[04:07:05] [SPEAKER_00] And...
[04:07:08] [SPEAKER_00] Their API was actually very simple.
[04:07:11] [SPEAKER_00] He didn't even add it to SvelteKit.
[04:07:12] [SPEAKER_00] He just added promise serialization to Dvalue,
[04:07:15] [SPEAKER_00] which is the serializer that is used by Svelte or SvelteKit.
[04:07:22] [SPEAKER_00] And actually we used it in Solid for quite some time too.
[04:07:24] [SPEAKER_00] And a lot of other projects use it.
[04:07:26] [SPEAKER_00] So he just set it up so that...
[04:07:31] [SPEAKER_00] you could basically just pass it in like any other kind of thing like maps sets dates now promises are added to the list and what this means is that svelte can now do that kind of streaming where you can basically have data requests starting on one side and then get to the other like get to the other side via promise and
[04:07:54] [SPEAKER_00] it's kind of an obvious necessity i actually have an article about this um marco async fragments
[04:08:02] [SPEAKER_00] from uh that describe this process from the marco dev team um
[04:08:06] [SPEAKER_00] back in 2014 when Marco added out-of-order streaming.
[04:08:13] [SPEAKER_00] Basically, they had a mechanism very similar to suspense,
[04:08:16] [SPEAKER_00] and then they had this way of serializing promises,
[04:08:18] [SPEAKER_00] and then that would basically the suspense and the promises
[04:08:21] [SPEAKER_00] would insert the code as the stream finished in the data.
[04:08:26] [SPEAKER_00] Anyways, this article goes into detail,
[04:08:29] [SPEAKER_00] and actually if you follow this article back,
[04:08:32] [SPEAKER_00] it goes further back into...
[04:08:34] [SPEAKER_00] you know, lost art of HTML rendering.
[04:08:36] [SPEAKER_00] And funny enough, what I always liked about this article is that he also references BigPipe by Facebook.
[04:08:43] [SPEAKER_00] And so in a sense, even though...
[04:08:48] [SPEAKER_00] React's suspense and Marco's async thing that came out, you know, five or four years or whatever before suspense are very similar.
[04:08:56] [SPEAKER_00] They were both inspired by some, I don't have an article here, but they're both inspired by work that was done in Facebook during the 2000s.
[04:09:03] [SPEAKER_00] But then they kind of independently came up with a solution in JavaScript.
[04:09:09] [SPEAKER_00] This in yourself, you wouldn't think, you wouldn't think would be, you know, much of a, you know, a hot topic like...
[04:09:25] [SPEAKER_00] Sweet. They added a feature that's essential for it to work.
[04:09:30] [SPEAKER_00] But what ended up happening was, this tweet's deleted now,
[04:09:34] [SPEAKER_00] but one of the members of the Remix core team works on Remix
[04:09:38] [SPEAKER_00] basically accused Rich Harris of stealing from Remix and not crediting them for this.
[04:09:46] [SPEAKER_00] You know, after all the talks he did and publishing and popularizing,
[04:09:52] [SPEAKER_00] you know, defer in Remix.
[04:09:54] [SPEAKER_00] Rich gave quick props, but not remix props.
[04:10:02] [SPEAKER_00] And yeah, I mean, obviously there was a little bit of, it got more heated than that.
[04:10:09] [SPEAKER_00] There's a whole talk about attribution and about like, you know, this is what happens when you get a bunch of, you know, college dropouts or whatever.
[04:10:24] [SPEAKER_00] Like there was some really brutal stuff said around this.
[04:10:29] [SPEAKER_00] And I think those tweets have been deleted.
[04:10:31] [SPEAKER_00] Hopefully they got cleaned up.
[04:10:33] [SPEAKER_00] But I mean...
[04:10:38] [SPEAKER_00] It kind of started this kind of terrible drama around this whole thing.
[04:10:44] [SPEAKER_00] Because like, as I mentioned, obviously Marco is an example.
[04:10:48] [SPEAKER_00] Quick is an example here.
[04:10:50] [SPEAKER_00] I guess I don't know if Remix is deferred might have been around before this.
[04:10:53] [SPEAKER_00] But like Solid had this three years ago.
[04:10:56] [SPEAKER_00] Like this is just like how the technology works.
[04:11:00] [SPEAKER_00] It's it's it's getting very hard to kind of I
[04:11:06] [SPEAKER_00] it's getting kind of hard to be able to give people credit or like track influences is something because everyone's in the space working really hard and a lot of them are heads down.
[04:11:18] [SPEAKER_00] And the thing is, I don't know how much I want to get to the specifics of the drama.
[04:11:23] [SPEAKER_00] And Theo actually did a great video the other day if you want to like see the actual tweets.
[04:11:28] [SPEAKER_00] And he talks a bit about the motivations behind it because, you know, VC funded, you know, closed source project becomes open source.
[04:11:35] [SPEAKER_00] You know, is there conflict here?
[04:11:37] [SPEAKER_00] And I think there might be, but for me, it's, it's, it's, it gets, it gets some, it's potentially
[04:11:48] [SPEAKER_00] a lot simpler than all of that.
[04:11:50] [SPEAKER_00] Um, not communities, personal.
[04:11:52] [SPEAKER_00] It's, look, it's going to happen anyways, right?
[04:11:57] [SPEAKER_00] Um, people are going to come up with similar ideas.
[04:12:01] [SPEAKER_00] They might look at each other's ideas.
[04:12:03] [SPEAKER_00] They might not look at each other's ideas.
[04:12:06] [SPEAKER_00] And the, there's, there's basically, um,
[04:12:14] [SPEAKER_00] asking for credit doesn't really get you anywhere.
[04:12:19] [SPEAKER_00] The choice ultimately comes to the person
[04:12:26] [SPEAKER_00] who's releasing the thing.
[04:12:27] [SPEAKER_00] It's their choice of where they accredit.
[04:12:34] [SPEAKER_00] And in my opinion,
[04:12:36] [SPEAKER_00] like people should be crediting things
[04:12:40] [SPEAKER_00] that they're inspired by.
[04:12:41] [SPEAKER_00] They should be even crediting things
[04:12:42] [SPEAKER_00] they're not inspired by.
[04:12:44] [SPEAKER_00] If you look out in the space
[04:12:45] [SPEAKER_00] and you see people are working on similar problems,
[04:12:48] [SPEAKER_00] then give them a nod.
[04:12:54] [SPEAKER_00] You know, OSS is more like everything derived and inspired.
[04:13:00] [SPEAKER_00] It's hard to determine if anything is truly original.
[04:13:02] [SPEAKER_00] Yeah, you know, except for Marco.
[04:13:05] [SPEAKER_00] Everything originated from Marco.
[04:13:07] [SPEAKER_00] Sorry, I always like making that joke because, like, in some ways, Marco was so far ahead of everything else to where they have.
[04:13:14] [SPEAKER_00] Occasional times you have scenarios, but even they had their own influences, which I showed.
[04:13:18] [SPEAKER_00] I'm just saying, like, occasionally...
[04:13:20] [SPEAKER_00] Like there are things that are like years ahead, but for the most part everyone kind of arriving stuff at around the same time
[04:13:28] [SPEAKER_00] And I was saying here having been given credit for things
[04:13:30] [SPEAKER_00] I didn't invite and seeing some people being upset about not getting due credit
[04:13:33] [SPEAKER_00] I think in times of change a lot of new things are discovered rather than invented and independently time this
[04:13:39] [SPEAKER_00] I have this idea that like there's a certain inevitability to the technology and
[04:13:45] [SPEAKER_00] Like, that's why it's always obvious in hindsight.
[04:13:49] [SPEAKER_00] Obviously when you're working on the problems, it's not obvious.
[04:13:51] [SPEAKER_00] You have to like, you work at it.
[04:13:53] [SPEAKER_00] You find it, you agonize over these decisions and how they fit.
[04:13:59] [SPEAKER_00] But at a certain point, when things click and you know that they click, like you're there.
[04:14:04] [SPEAKER_00] And I wanted to really highlight this.
[04:14:06] [SPEAKER_00] And this is where the maybe the VC funding angle and stuff comes.
[04:14:08] [SPEAKER_00] There's like a difference between the technology and the product.
[04:14:11] [SPEAKER_00] A lot of times you have successful products built on already existing technology, maybe
[04:14:16] [SPEAKER_00] one that wasn't appreciated or marketed.
[04:14:19] [SPEAKER_00] And like really the only choice in the scenario is if you were influenced by something, give
[04:14:24] [SPEAKER_00] it a nod and maybe not give it a nod to, you know, talk about like maybe a certain solution
[04:14:29] [SPEAKER_00] didn't inspire you, but you know, it's in the space working on similar things.
[04:14:35] [SPEAKER_00] You might as well just like there's no harm in just going like, hey, you know, like
[04:14:41] [SPEAKER_00] I know that they're working on similar things.
[04:14:43] [SPEAKER_00] I know not everyone's looking at what everyone else is doing,
[04:14:45] [SPEAKER_00] but this is something that just becomes very clear
[04:14:49] [SPEAKER_00] when you start looking around and seeing patterns
[04:14:53] [SPEAKER_00] in all the different work that different people are doing.
[04:14:57] [SPEAKER_00] Like React server components and islands.
[04:14:59] [SPEAKER_00] These are not unrelated things.
[04:15:03] [SPEAKER_00] The work going on with compilers
[04:15:05] [SPEAKER_00] like server functions there are so many rpcs going on but like if you think about it for a second
[04:15:10] [SPEAKER_00] it was obvious that it was going to go to rpcs when people are bringing back monoliths like why
[04:15:15] [SPEAKER_00] deal with the ceremony around apis if you don't need them like this is this is like a foregone
[04:15:22] [SPEAKER_00] conclusion um
[04:15:24] [SPEAKER_00] you know i often talk about you know like server functions recently because like that was our
[04:15:28] [SPEAKER_00] big thing this past year but before server functions we actually had a proxy version we've we've had
[04:15:33] [SPEAKER_00] a version of automated rpcs and solid start pretty much from the beginning um a couple years ago
[04:15:39] [SPEAKER_00] and i didn't get that idea out of thin air i mean i had a conversation with brilout critter v
[04:15:44] [SPEAKER_00] plugin ssr and he was telling me about telefunc and it was like a bit of a heavier system but i
[04:15:49] [SPEAKER_00] was like okay
[04:15:50] [SPEAKER_00] And then I started kind of working and designed it out.
[04:15:53] [SPEAKER_00] And then a few months later, someone's like, oh, have you seen Blitz?
[04:15:55] [SPEAKER_00] And I'm like, no, I've never seen Blitz.
[04:15:56] [SPEAKER_00] And I looked at Blitz and I'm like, yeah, this is kind of what I'm doing.
[04:15:59] [SPEAKER_00] So I started being like, yeah, okay.
[04:16:00] [SPEAKER_00] I mean, I can say it's inspired by Blitz.
[04:16:02] [SPEAKER_00] I had no clue about Blitz when I built it.
[04:16:04] [SPEAKER_00] But like this is just naturally going to happen as this evolution goes.
[04:16:11] [SPEAKER_00] Yeah, and no one credits used Deno from LF.
[04:16:14] [SPEAKER_00] Yeah, because no one actually looked at it.
[04:16:15] [SPEAKER_00] Like, to be fair, like, sometimes these omissions are just because you weren't aware of things.
[04:16:21] [SPEAKER_00] But, like, there's a certain, like, you've got to recognize that, like, everyone's working in the space,
[04:16:25] [SPEAKER_00] they're going to write on stuff at the same time.
[04:16:31] [SPEAKER_00] People are arguing React and Angular.
[04:16:37] [SPEAKER_00] Okay, anyway.
[04:16:39] [SPEAKER_00] And...
[04:16:40] [SPEAKER_00] Yeah, I mean, that's that's that's that's the thing like there's there's no harm if you are aware of something just you just give it an odd you just go like you just go oh yeah everyone's working on partial hydration you know everyone's working on server function just kind of like take a look around before you decide that you've you own the the IP on this.
[04:17:05] [SPEAKER_00] Because it's not about actual crediting.
[04:17:07] [SPEAKER_00] When someone gets to that point where they're like,
[04:17:10] [SPEAKER_00] well, did you MIT license attribute it?
[04:17:13] [SPEAKER_00] Like, don't get me wrong.
[04:17:14] [SPEAKER_00] That's an important thing to do from a legal standpoint.
[04:17:16] [SPEAKER_00] It shows respect and all that.
[04:17:19] [SPEAKER_00] But if someone's angry enough to tell someone else that,
[04:17:23] [SPEAKER_00] like the MIT license bit isn't what they're angry about.
[04:17:27] [SPEAKER_00] That just gives them a place to vent.
[04:17:29] [SPEAKER_00] They're already angry.
[04:17:30] [SPEAKER_00] Like, that doesn't make the difference.
[04:17:33] [SPEAKER_00] Because there's more exposure on idea in a blog post than on an MIT license.
[04:17:39] [SPEAKER_00] No one's looking at the MIT license, but they're looking at is when the big release comes out.
[04:17:44] [SPEAKER_00] And then it's like, yes, we invented the blank, blank, blank.
[04:17:48] [SPEAKER_00] And we pulled this idea out of thin air and you're like,
[04:17:50] [SPEAKER_00] Wait, ours is called server and has a dollar sign at the end.
[04:17:55] [SPEAKER_00] It does like basically the same thing.
[04:17:57] [SPEAKER_00] Like, hey, you know, like, like I just pulled that out.
[04:18:01] [SPEAKER_00] But like, what's it like nested routing.
[04:18:03] [SPEAKER_00] Like, like you just pick something or we serialize promises or like, like I can see where that feeling comes from.
[04:18:16] [SPEAKER_00] But like.
[04:18:18] [SPEAKER_00] I think we just got to recognize like right now this is happening a lot.
[04:18:23] [SPEAKER_00] And sometimes it's the ones who successfully market the idea.
[04:18:26] [SPEAKER_00] Sometimes you'll overlook something and like not think that there's a big deal out of it, right?
[04:18:29] [SPEAKER_00] You'll like, you'll just kind of like, it's just like a matter of fact.
[04:18:36] [SPEAKER_00] Like you like serializing promises is actually the perfect example for this.
[04:18:40] [SPEAKER_00] Right.
[04:18:41] [SPEAKER_00] Because it's mechanically necessarily necessary for streaming.
[04:18:45] [SPEAKER_00] So.
[04:18:46] [SPEAKER_00] When I saw what Marco was doing, and then I went and implemented something solid, I was like, oh, okay, serializing promises makes this happen.
[04:18:57] [SPEAKER_00] I'm like, sweet. Out-of-order streaming is pretty sweet.
[04:18:59] [SPEAKER_00] And I tried to demo how cool out-of-order streaming is.
[04:19:01] [SPEAKER_00] But I didn't promote serializing promises because I was like, who cares?
[04:19:06] [SPEAKER_00] Like, Quick, for example, made a big deal about what they could serialize.
[04:19:10] [SPEAKER_00] They found an angle where that was like a unique feature.
[04:19:12] [SPEAKER_00] aspect, even if it wasn't actually unique that they could serialize promises, it was like,
[04:19:17] [SPEAKER_00] it was something they were like, look, this is a power we have and they marketed it and they
[04:19:21] [SPEAKER_00] made it part of their product. It's like, so from my perspective, like that's really good
[04:19:27] [SPEAKER_00] because like they, you know, they saw something in value that I had disregarded, right? And I think
[04:19:34] [SPEAKER_00] I think that there's this difference between popularizing technology and creating it.
[04:19:42] [SPEAKER_00] And it might not even be creating if it's discovering to a certain degree.
[04:19:45] [SPEAKER_00] Like there's just so much these pieces moving and we need to,
[04:19:49] [SPEAKER_00] we should try and credit people and be generous in our accreditation if possible.
[04:19:54] [SPEAKER_00] But like if we're, if we're going to start like
[04:20:00] [SPEAKER_00] trying calling dibs on stuff that's basically the physics of the platform, we're going to
[04:20:05] [SPEAKER_00] get into a lot of fights.
[04:20:12] [SPEAKER_00] The difference right now is everyone's trying to sell a React framework, so the landscape
[04:20:15] [SPEAKER_00] has changed to compare it to before.
[04:20:17] [SPEAKER_00] Yeah, so yeah, there's like money or competition involved, right?
[04:20:23] [SPEAKER_00] I get that, you know?
[04:20:24] [SPEAKER_00] Like that's the crux of it.
[04:20:27] [SPEAKER_00] And maybe that's why Remix has been at the forefront of this discussion.
[04:20:34] [SPEAKER_00] But the problem is like...
[04:20:38] [SPEAKER_00] it gets out of hand and this one it's funny this was jacob and jacob's a little bit of we've shown
[04:20:44] [SPEAKER_00] a few of his tweets before where he said some you know a little bit obnoxious stuff arguably
[04:20:50] [SPEAKER_00] um like something he said something about like partial hydration would never be
[04:20:54] [SPEAKER_00] proved beneficial or like just really just you know it's funny like that's my example of being
[04:21:00] [SPEAKER_00] obnoxious um so he's he's not ryan he's not michael but like this one
[04:21:07] [SPEAKER_00] was like the final straw for a lot of people.
[04:21:10] [SPEAKER_00] They were like, nope, nope.
[04:21:14] [SPEAKER_00] And people started being really mean on Twitter,
[04:21:17] [SPEAKER_00] like saying stuff like,
[04:21:18] [SPEAKER_00] oh, did you know Remix invented the HTML form?
[04:21:22] [SPEAKER_00] Or, you know, like, and I,
[04:21:29] [SPEAKER_00] there's just no good that comes out of this in the end.
[04:21:32] [SPEAKER_00] And, um,
[04:21:34] [SPEAKER_00] What I actually found out is this primogen Ryan Florence just deactivated his account
[04:21:40] [SPEAKER_00] You all need to learn how to have more fun on Twitter and stop fighting constantly
[04:21:43] [SPEAKER_00] Just shit post already. It's way more fun like this is real
[04:21:47] [SPEAKER_00] I mean I'm I checked yesterday
[04:21:52] [SPEAKER_00] But you know, I wasn't sure what is going on me
[04:21:57] [SPEAKER_00] I thought maybe he blocked me or something but apparently others have confirmed that
[04:22:03] [SPEAKER_00] he he he is he is he is gone um right now um just just left like and maybe that's a good thing get
[04:22:14] [SPEAKER_00] away from all this drama but like i as far as i know ryan wasn't actually directly involved with
[04:22:28] [SPEAKER_00] it i think he just had enough of just all like you open up your twitter feed and there's a bunch
[04:22:32] [SPEAKER_00] of people making clown faces around remix and stuff like it it's hard when it's your creation
[04:22:36] [SPEAKER_00] the stuff you're doing you're just like why do i need to put up with this crap but like
[04:22:44] [SPEAKER_00] Yeah, let's see here.
[04:22:48] [SPEAKER_00] See if I can...
[04:22:49] [SPEAKER_00] Oh, oops.
[04:22:51] [SPEAKER_00] That wasn't secret Operation Bling stuff.
[04:22:56] [SPEAKER_00] It's not actually that secret.
[04:22:58] [SPEAKER_00] All right, Theo.
[04:23:01] [SPEAKER_02] Open image in a new window.
[04:23:07] [SPEAKER_00] All right, there we go.
[04:23:09] [SPEAKER_00] I'm here. Twitter isn't what it used to be.
[04:23:11] [SPEAKER_00] The valuable crap ratio dropped to low one recently,
[04:23:13] [SPEAKER_00] so I'm out too excited about what we've got planned for remakes.
[04:23:15] [SPEAKER_00] And between this Discord and Shopify internal teams,
[04:23:17] [SPEAKER_00] I've got all the feedback I need to find our blind swats.
[04:23:20] [SPEAKER_00] Yeah.
[04:23:20] [SPEAKER_00] That's that.
[04:23:21] [SPEAKER_00] There you go.
[04:23:28] [SPEAKER_00] Yeah.
[04:23:30] [SPEAKER_00] I think after a while, you wonder if you're just feeding into this noise.
[04:23:34] [SPEAKER_00] You're spending all this time.
[04:23:40] [SPEAKER_00] Yeah.
[04:23:41] [SPEAKER_00] I mean, a lot of people are going to say that like, you know,
[04:23:46] [SPEAKER_00] you, you get what is it? You be what you, you reap what you sow, you know, so to speak.
[04:23:52] [SPEAKER_00] But I don't know. I, I, I don't think the, the, the negative presence on Twitter was helping
[04:24:00] [SPEAKER_00] anyone. So maybe this is an improvement. But as I said, Ryan's generally been like gone long,
[04:24:07] [SPEAKER_00] a lot better, been more civil recently. So I mean, I don't know. This, it's, it's a, it's a little
[04:24:13] [SPEAKER_00] bit unfortunate that things come to this, but, um,
[04:24:18] [SPEAKER_00] Yeah, I mean, this is the end of the drama.
[04:24:20] [SPEAKER_00] As I said, if you want the specific details, do check out Theo's stream.
[04:24:26] [SPEAKER_00] It's, this has been going on.
[04:24:31] [SPEAKER_00] It's basically been a year, honestly.
[04:24:34] [SPEAKER_00] Shortly after they open source, there's just, there's been this drama week after week after week after week.
[04:24:41] [SPEAKER_00] I don't know, maybe this is the end of it.
[04:24:44] [SPEAKER_00] Yeah, Kent C. Dodds, just I'm going to mention, did a great job of standing in and being like, hey, you know, this isn't cool.
[04:24:55] [SPEAKER_00] you know, and making sure he's been, you know, making sure he's not even on the remix team anymore,
[04:25:02] [SPEAKER_00] but he's been making sure that, like, people, you know, don't, you know, feel pushed out too much
[04:25:09] [SPEAKER_00] by, like, singularly bad actions or actors. But this is, I don't know, I don't want to, I don't,
[04:25:16] [SPEAKER_00] this one I don't actually want to talk about much more. It's just, it just, the whole thing
[04:25:21] [SPEAKER_00] feels like it was unnecessary. And I just, I wish, like, this is one of those ones that just
[04:25:27] [SPEAKER_00] didn't need to happen. Um,
[04:25:31] [SPEAKER_00] So maybe we talk about it so we can learn from it.
[04:25:33] [SPEAKER_00] I don't know.
[04:25:49] [SPEAKER_00] Yeah, yeah. I mean, it's just, it's hard. And this is the tricky part you have as being a community.
[04:25:56] [SPEAKER_00] Like, especially if anyone who's like associated as a core maintainer does anything, it directly gets associated with you.
[04:26:03] [SPEAKER_00] But it even gets associated with you when you have like people really enthusiastic going through and they're like, you know, there is a flavor feel around communities.
[04:26:15] [SPEAKER_00] And every community has like...
[04:26:18] [SPEAKER_00] a certain aura they project um there's definitely like a color to it and it's tricky because it
[04:26:31] [SPEAKER_00] somewhat reflects on the the founders and what their actions and what they do and people follow
[04:26:37] [SPEAKER_00] but it also goes beyond what you can do like there's only so much you can do so yeah i mean yeah
[04:26:48] [SPEAKER_00] i mean and this is going to point uh i want to let's talk about this i think with remix though
[04:26:52] [SPEAKER_00] i remember next yes announced nester routes and they didn't even mention remix or react router yeah
[04:26:56] [SPEAKER_00] The interesting thing from my perspective is this is a perfect opportunity where Next could have just been like,
[04:27:03] [SPEAKER_00] Hey, nod to remix your Next or React Router.
[04:27:06] [SPEAKER_00] Like it was React Router 6 specifically is one that I want to go to because older version of React Routers had Nested Router.
[04:27:13] [SPEAKER_00] But React Router 6 did.
[04:27:14] [SPEAKER_00] And they could have given a nod to that without even giving a nod to Remix.
[04:27:19] [SPEAKER_00] And just been like, you know, it's cool.
[04:27:21] [SPEAKER_00] You know, we've seen this in the space and just nod.
[04:27:24] [SPEAKER_00] The truth of the matter is, like, honestly, I don't think React Router and Nestor Routing had anything to do with what they were doing with Next.
[04:27:32] [SPEAKER_00] They were focusing on server components, and this was a mechanism they're doing, and I actually don't think there was almost any influence there, honestly, from my personal opinion.
[04:27:40] [SPEAKER_00] Just from how I understand approaching the problem space.
[04:27:45] [SPEAKER_00] But would it hurt to just be like, hey, you know, these guys are doing good stuff too?
[04:27:51] [SPEAKER_00] i don't know that's that that's that's that's what i'm saying here because i actually don't
[04:27:56] [SPEAKER_00] i i don't actually think that it was inspired and we see a lot of that too like if you look i put
[04:28:04] [SPEAKER_00] this up before react hooks make no mention of reactivity as inspirations for hooks and you're
[04:28:09] [SPEAKER_00] kind of like like like how could you not because it wasn't their inspiration not at all you could
[04:28:19] [SPEAKER_00] kind of like what one could do is look at and go oh yeah these guys are kind of trying to solve
[04:28:23] [SPEAKER_00] the similar problem and
[04:28:25] [SPEAKER_00] You don't have to do this, but I feel like there's some space to kind of just recognize
[04:28:37] [SPEAKER_00] that there's a bigger thing going on than your particular organization, company, whatever,
[04:28:44] [SPEAKER_00] and tie it into the narrative.
[04:28:47] [SPEAKER_00] That's what I like.
[04:28:47] [SPEAKER_00] I'm a storyteller.
[04:28:49] [SPEAKER_00] Maybe that's the problem.
[04:28:59] [SPEAKER_00] And there's an element of this.
[04:29:02] [SPEAKER_00] I think we say, we talk about Remix in the past.
[04:29:05] [SPEAKER_00] Remix has got more future.
[04:29:07] [SPEAKER_00] They have Shopify behind them.
[04:29:07] [SPEAKER_00] This is going to continue going.
[04:29:09] [SPEAKER_00] They'll do good.
[04:29:10] [SPEAKER_00] This is just like a small subset of the kind of mind share on Twitter kind of thing.
[04:29:14] [SPEAKER_00] But it's like this, there is a truth to this.
[04:29:19] [SPEAKER_00] When, when Remix came out,
[04:29:20] [SPEAKER_00] They kind of were positioned as React's white knights, bringing back web standards, making performance important, doing all the good stuff.
[04:29:29] [SPEAKER_00] And then the first thing they did was basically like turn around, look at the people working on performance stuff outside of React community and be like, yeah, the technology and stuff you do is pointless.
[04:29:39] [SPEAKER_00] You don't need that.
[04:29:40] [SPEAKER_00] You just need remix.
[04:29:40] [SPEAKER_00] It's just like, like...
[04:29:47] [SPEAKER_00] Like, why? There was no need.
[04:29:50] [SPEAKER_00] You just go, yeah, that's really cool stuff.
[04:29:53] [SPEAKER_00] We're into React here.
[04:29:55] [SPEAKER_00] And, you know, maybe in the future we'll take some of those ideas
[04:29:57] [SPEAKER_00] and see if we can bring it to React to make React even more performative.
[04:30:00] [SPEAKER_00] But no, that wasn't what happened.
[04:30:04] [SPEAKER_00] Like, that wasn't what happened.
[04:30:10] [SPEAKER_00] It was just like, it was just like,
[04:30:13] [SPEAKER_00] no, streaming is bad.
[04:30:16] [SPEAKER_00] Partial hydration is a lie.
[04:30:18] [SPEAKER_00] Like, low JavaScript doesn't matter when you can use progressive enhancement.
[04:30:24] [SPEAKER_00] It sounds like, I can't pull up the treats because they're deleted.
[04:30:26] [SPEAKER_00] It sounds like I'm like making this stuff up, but like, literally, yeah.
[04:30:31] [SPEAKER_00] Maybe this is good. This is the end of that drama.
[04:30:34] [SPEAKER_00] Like, just, it's done.
[04:30:35] [SPEAKER_00] Done.
[04:31:00] [SPEAKER_00] Sorry. This is why this issue, it just, this is, this whole thing was unnecessary. Every aspect of it. And like the end result is like, I think, I, I, I, remix has a world outside of this whole thing so we don't have to worry about it. But like, I liked
[04:31:27] [SPEAKER_00] the mindshare competition. Next needs competition. We need to, we need balance in the force, you know,
[04:31:35] [SPEAKER_00] if everything's aligning a certain way, we need to see that there's other options out there. We need
[04:31:39] [SPEAKER_00] to explore and like widen the scope. I'm very excited by Remix. This is just, yeah. So this is,
[04:31:59] [SPEAKER_00] this is drama one, right? Drama two,
[04:32:18] [SPEAKER_00] isn't really drama. It's just what I've been kind of sucked into for the last few days.
[04:32:26] [SPEAKER_00] Andrew kind of shook things up a little bit last week when he said,
[04:32:32] [SPEAKER_00] hey, we might add a signals-like primitive to React, but I don't think it's a great way to write UI code.
[04:32:36] [SPEAKER_00] It's great for performance, but a fresh model where you pretend the whole things were created every time.
[04:32:39] [SPEAKER_00] Our plan is to use a compiler to create a performance.
[04:32:44] [SPEAKER_00] This was fine. I read the tweet. I think I responded in the chain a couple places, and I was like, yeah.
[04:32:52] [SPEAKER_00] I think somewhere someone said something like,
[04:32:55] [SPEAKER_00] reactive programming is a dead end and I was like okay come on we yeah we we should talk about that
[04:33:01] [SPEAKER_00] I mean we maybe we shouldn't ignore the fact that Andrew Clark Andrew Clark said this take was very wise
[04:33:12] [SPEAKER_00] but but I think he was talking about the hardest part of reacts fake reactivity is lining up the data sources so screens only initialize once or whatever
[04:33:20] [SPEAKER_00] I think he was talking about that not about the the initial statement but like
[04:33:26] [SPEAKER_00] you know, Jordan Walk comes in and is like, yeah, no, this, they start going off on this chain about
[04:33:31] [SPEAKER_00] performance and updates and stuff being perform like, you know, React being like faster on create
[04:33:37] [SPEAKER_00] versus updates and most things are creates. And I'm like, it's theoretically true. This is true.
[04:33:46] [SPEAKER_00] You would think that subscription setting up is expensive, but when you move to a lazier system,
[04:33:50] [SPEAKER_00] you defer a lot of that cost to updates. And if the update system is already cheaper and you can
[04:33:56] [SPEAKER_00] use the fact that you have
[04:33:58] [SPEAKER_00] updates independent of like a virtual DOM or DOM thing,
[04:34:02] [SPEAKER_00] you can actually optimize the creation code.
[04:34:05] [SPEAKER_00] And, you know, let's do a little look here.
[04:34:13] [SPEAKER_00] How long has...
[04:34:16] [SPEAKER_00] Let's take the JS framework benchmark.
[04:34:20] [SPEAKER_00] How long have reactive libraries
[04:34:25] [SPEAKER_00] been the fastest approach to render the DOM?
[04:34:30] [SPEAKER_00] Let's just look, actually.
[04:34:31] [SPEAKER_00] Let's look at the most recent results.
[04:34:34] [SPEAKER_00] Let's remove...
[04:34:36] [SPEAKER_00] stuff that is noise. Okay, yeah, here we go. You might wonder about the Xenia.
[04:34:48] [SPEAKER_00] It's not quite comparing apples to apples, to be fair, but that's fine. Let's give them credit
[04:34:53] [SPEAKER_00] being up there as number one here. But solid, and then we have some fast VDOM libraries like
[04:35:01] [SPEAKER_00] Block DOM and Inferno, right? So it's not like the virtual DOM is slow. I just wanted to just
[04:35:05] [SPEAKER_00] kind of put that out there.
[04:35:09] [SPEAKER_00] And these, you know, there's some more reactive libraries and all this, but this, the thing I actually want to show you is that creation performance is actually faster in solid than even block DOM or inferno.
[04:35:26] [SPEAKER_00] Okay. Like this is.
[04:35:28] [SPEAKER_00] This is also creation right here.
[04:35:30] [SPEAKER_00] Like it actually hasn't.
[04:35:33] [SPEAKER_00] And if I go back in time,
[04:35:35] [SPEAKER_00] I think what do we got?
[04:35:36] [SPEAKER_00] Chrome 58.
[04:35:37] [SPEAKER_00] How long ago was Chrome 58?
[04:35:38] [SPEAKER_00] Does anyone even know?
[04:35:39] [SPEAKER_00] Is that like early 2017 or something?
[04:35:43] [SPEAKER_00] Like it's been like six years.
[04:35:45] [SPEAKER_00] Let's look here.
[04:35:46] [SPEAKER_00] Who was the fastest six years ago?
[04:35:48] [SPEAKER_00] There's this library called Surplus.
[04:35:56] [SPEAKER_00] Yeah, we talked about being able to do this.
[04:35:58] [SPEAKER_00] I know all the frameworks by heart
[04:36:00] [SPEAKER_00] so I can tell you what they all do.
[04:36:02] [SPEAKER_00] But six years ago,
[04:36:04] [SPEAKER_00] Here's surplus at the front of the list.
[04:36:06] [SPEAKER_00] There's still EV and Inferno and the common thing,
[04:36:09] [SPEAKER_00] but this is Solid's predecessor,
[04:36:14] [SPEAKER_00] created by Adam Hale.
[04:36:15] [SPEAKER_00] It's very, very similar approach.
[04:36:19] [SPEAKER_00] Basically, for the whole,
[04:36:21] [SPEAKER_00] I said seven years,
[04:36:23] [SPEAKER_00] I don't know, six, seven years ago,
[04:36:25] [SPEAKER_00] basically,
[04:36:26] [SPEAKER_00] This has I've always suspected of the case, but this has basically been proven to not be an issue for like stupid large creations for years and years and years and years and years.
[04:36:37] [SPEAKER_00] And it's been the same.
[04:36:43] [SPEAKER_00] Where are we?
[04:36:44] [SPEAKER_00] It's the same kind of rhetoric, right?
[04:36:46] [SPEAKER_00] Like in theory, yes.
[04:36:48] [SPEAKER_00] But like where's React?
[04:36:50] [SPEAKER_00] I mean, React is always kind of middle of the pack, right?
[04:36:53] [SPEAKER_01] React's here.
[04:36:55] [SPEAKER_01] or sorry, React, that's Redux.
[04:36:56] [SPEAKER_01] React's here, Preax here.
[04:36:59] [SPEAKER_00] Back then, Svelte was a lot slower.
[04:37:01] [SPEAKER_00] This was before Svelte 3.
[04:37:02] [SPEAKER_00] But if we move back into the modern day
[04:37:04] [SPEAKER_00] and we have way more frameworks now
[04:37:05] [SPEAKER_00] and we just kind of get rid of the stuff,
[04:37:11] [SPEAKER_00] you'll find...
[04:37:14] [SPEAKER_00] Where is React?
[04:37:15] [SPEAKER_00] There we are, React hooks.
[04:37:16] [SPEAKER_00] Somewhere back here, 173.
[04:37:18] [SPEAKER_00] It's kind of like...
[04:37:19] [SPEAKER_00] React is like around the middle of the list.
[04:37:22] [SPEAKER_00] Like, there's nothing wrong with any of these things.
[04:37:24] [SPEAKER_00] It just...
[04:37:26] [SPEAKER_00] Like, even...
[04:37:31] [SPEAKER_00] I just, at a certain point, I was wondering when they would give up this narrative.
[04:37:36] [SPEAKER_00] That's the thing. And actually Dominic Ganoey, we highlighted his thing. He said,
[04:37:39] [SPEAKER_00] I don't think this is an issue with lazy pull-based signals. At least I have something
[04:37:42] [SPEAKER_00] working that provides exactly that. I should demo it publicly at some point so people
[04:37:45] [SPEAKER_00] awareness what's actually possible. The funny thing is like, Dom doesn't even have to demo it,
[04:37:51] [SPEAKER_00] like even without his compiler optimization, you know, to take it to the next level.
[04:37:56] [SPEAKER_00] This has been the case for like seven years. And
[04:38:01] [SPEAKER_00] Okay, so we can all say that performance is good.
[04:38:04] [SPEAKER_00] So let's, you know, move off.
[04:38:05] [SPEAKER_00] And it's fine.
[04:38:07] [SPEAKER_00] Like, Andrew's like, look, hey, I didn't mean to, you know, you know, overly critical, harsh.
[04:38:14] [SPEAKER_00] I'm happy as all they're exploring other avenues.
[04:38:15] [SPEAKER_00] I just wanted to cough a concert.
[04:38:17] [SPEAKER_00] It's how we've been thinking about it.
[04:38:17] [SPEAKER_00] I'm like, sure, sure, sure.
[04:38:19] [SPEAKER_00] So let's leave it at that then, right?
[04:38:21] [SPEAKER_00] Sure.
[04:38:22] [SPEAKER_00] Who cares, right?
[04:38:23] [SPEAKER_00] Like, they react to doing what they're doing.
[04:38:25] [SPEAKER_00] And I think that's where I respond to Andrew.
[04:38:26] [SPEAKER_00] I was just like, yeah, you know.
[04:38:28] [SPEAKER_00] Yeah, I don't have it here, but I was like, yeah, no, I'm, I'm, I'm, I'm.
[04:38:34] [SPEAKER_00] I'm good with that. Sorry, I jumped out too quick. Yeah, what did I say? Yeah, he's excited to see DOM stuff come public. And I said, I mostly witnessed dismissal and I was expecting more of the same. Perfectly content with React living out its vision, but also cool to know that they've talked about it, right? That's the reasonable place to be, right? 22 questions with frameworks. Right? So, yeah.
[04:39:26] [SPEAKER_00] Yeah, exactly.
[04:39:27] [SPEAKER_00] Like, it's fine.
[04:39:28] [SPEAKER_00] They have their own measure and their own thing.
[04:39:30] [SPEAKER_00] But I don't know if they're even were exploring reactivity until, again, they're thinking about
[04:39:37] [SPEAKER_00] it now, right?
[04:39:38] [SPEAKER_00] But they hide it.
[04:39:39] [SPEAKER_00] But I get it.
[04:39:40] [SPEAKER_00] That fits with React, sure.
[04:39:43] [SPEAKER_00] Next week, I don't really mean to be too dismissive of the enthusiasm around signals,
[04:39:56] [SPEAKER_00] but I just for an imagine world where the main thing you think about when building components
[04:40:00] [SPEAKER_01] something other than optimizing update performance to me that was central to the original pitch react
[04:40:06] [SPEAKER_01] very true you don't have to think about how updates flow through your ui anymore just
[04:40:10] [SPEAKER_01] re-render the whole thing and you'll make it fast enough i think that bet has paid off so far
[04:40:14] [SPEAKER_01] even if there's more to do to make it better and this is very true i'm actually if you go back
[04:40:26] [SPEAKER_01] to original react and react class components i i i think that i think there's a very clear
[04:40:34] [SPEAKER_01] discussion point on that like where you can go like look
[04:40:37] [SPEAKER_01] render functions, re-render, you set up your components,
[04:40:40] [SPEAKER_01] your state is just plain JavaScript objects,
[04:40:43] [SPEAKER_01] you don't have to think about how it updates too much,
[04:40:44] [SPEAKER_01] you have a few life cycles.
[04:40:47] [SPEAKER_01] You know, it really worked.
[04:40:50] [SPEAKER_01] You don't have to, there was no,
[04:40:52] [SPEAKER_01] there was like should component update maybe,
[04:40:53] [SPEAKER_01] but there was no really,
[04:40:54] [SPEAKER_01] you didn't have to worry about like stable references
[04:40:57] [SPEAKER_01] and stuff like dependency arrays or whatever.
[04:40:59] [SPEAKER_01] Like it just did what they said.
[04:41:02] [SPEAKER_01] What's interesting to me is it's been such,
[04:41:06] [SPEAKER_01] it's been a while, like
[04:41:08] [SPEAKER_01] It's been five years since this year or since hooks.
[04:41:12] [SPEAKER_01] And hooks forced people to do exactly what the original React did not do.
[04:41:18] [SPEAKER_01] It forced you to think about how things update.
[04:41:22] [SPEAKER_01] Yeah, right?
[04:41:25] [SPEAKER_01] Like, and I think React's kind of better for it.
[04:41:28] [SPEAKER_01] It gives you more control.
[04:41:29] [SPEAKER_01] You can get better performance on React.
[04:41:31] [SPEAKER_01] People did kind of dumb stuff with React in the class component days.
[04:41:34] [SPEAKER_01] People write better React with hooks, in my opinion.
[04:41:38] [SPEAKER_01] But it's because...
[04:41:40] [SPEAKER_01] they, you have to understand how they work now.
[04:41:43] [SPEAKER_01] You have to think about updates.
[04:41:45] [SPEAKER_01] This is not the React rhetoric,
[04:41:48] [SPEAKER_01] like the rhetoric from 10 years ago.
[04:41:50] [SPEAKER_01] Like he goes on more here talking about like,
[04:41:55] [SPEAKER_01] I think the, what was the next tweet in his thread?
[04:41:57] [SPEAKER_01] So that's why I don't buy the argument
[04:41:58] [SPEAKER_01] that signals provide better DX model.
[04:42:01] [SPEAKER_01] They do when the problem you're thinking about
[04:42:02] [SPEAKER_01] is optimizing performance.
[04:42:04] [SPEAKER_01] But building UIs is more than that.
[04:42:07] [SPEAKER_01] Notice how nobody is clamoring for signals
[04:42:09] [SPEAKER_01] in server component loaders.
[04:42:13] [SPEAKER_01] Sorry, I didn't even see some of this stuff.
[04:42:16] [SPEAKER_01] Like, why?
[04:42:16] [SPEAKER_01] Of course you wouldn't have signals and server component loaders because it
[04:42:19] [SPEAKER_01] doesn't...
[04:42:22] [SPEAKER_01] It signals as a synchronization mechanism.
[04:42:24] [SPEAKER_01] You don't need synchronization on the server.
[04:42:28] [SPEAKER_01] Like, okay.
[04:42:30] [SPEAKER_01] So I'm more excited about the ideas to keep re-render everything, program model.
[04:42:33] [SPEAKER_01] Okay, okay, cool.
[04:42:35] [SPEAKER_01] Like, but it was this comment about the DX and optimizing performance
[04:42:42] [SPEAKER_01] kind of in relation to this whole thing.
[04:42:46] [SPEAKER_01] Because, like...
[04:42:49] [SPEAKER_01] That's I mean we talked about on the stream how many people actually use this stuff for performance and like his previous comment drew Evan you out and view Rich Harris out and you look in them and then people are just like what are you what are you talking about like and for me I'm not even it's not that this isn't why this kind of got me into this zone again today
[04:43:21] [SPEAKER_01] the it's it's it's related to something that like i had a great discussion with dan about islands
[04:43:26] [SPEAKER_01] versus server components where i was basically trying to discuss how and we got to the end of it
[04:43:31] [SPEAKER_01] where it's like no every benefit of server components could be done with islands plus plus
[04:43:36] [SPEAKER_01] essentially like server components is an addition to islands mentality it's not like
[04:43:41] [SPEAKER_01] like basically people are working on the same stuff like you do it's not like
[04:43:45] [SPEAKER_01] like reacts over here and everyone else is like not getting it over here.
[04:43:48] [SPEAKER_01] It's like, no, everyone's actually working on the same things.
[04:43:51] [SPEAKER_01] And actually maybe like there's like minor details, but those are like just details.
[04:43:56] [SPEAKER_01] Like the thing is, okay, check it out.
[04:44:01] [SPEAKER_01] The cool thing about reactivity is it reduces a language down to three primitives,
[04:44:05] [SPEAKER_01] state derived, state and effects.
[04:44:06] [SPEAKER_01] And I was saying like sounds familiar.
[04:44:08] [SPEAKER_01] It's like if you took all the hooks away from React that are concerned with performance,
[04:44:11] [SPEAKER_01] you got rid of use memo, use callback, use ref, you get rid of those and
[04:44:17] [SPEAKER_01] That's what you end up with reactive language.
[04:44:21] [SPEAKER_01] See, and they are getting rid of those with the compiler, right?
[04:44:23] [SPEAKER_01] But like, that is what reactivity does.
[04:44:26] [SPEAKER_01] The whole, you know, render, re-render model is actually kind of independent of it.
[04:44:30] [SPEAKER_01] If you think about things like preact or view or quick, which actually re-render with signals, I think there's, depending on how you do it, there's like interesting...
[04:44:44] [SPEAKER_01] trade-offs with that as well, but the point is like in itself the reactivity and the rendering can be kind of split.
[04:44:51] [SPEAKER_01] But let's let's just focus on the language for a second, right?
[04:44:55] [SPEAKER_01] It's that I almost every conversation about React for the last couple years recently because you know this stuff's been coming out has been about performance.
[04:45:11] [SPEAKER_01] So it's very strange to me to kind of point out like, oh, you know, you only use signals when you care about performance when like literally the whole conversation has been about performance.
[04:45:21] [SPEAKER_01] It's and like you're fighting it.
[04:45:26] [SPEAKER_01] So like it's it's and why this gets to me is because it like look react forget or whatever might end up in a really good place.
[04:45:40] [SPEAKER_01] But what the final product comes out.
[04:45:44] [SPEAKER_01] Regardless of like this long-standing division bias, you know, I'm biased too.
[04:45:49] [SPEAKER_01] I remember, you know, I was very much in reactivity camp when React first came out.
[04:45:54] [SPEAKER_01] I was just like, you know, and there's clearly still in this.
[04:45:59] [SPEAKER_01] You know, it was the thing is,
[04:46:03] [SPEAKER_01] I realized that React was right to a certain degree and I changed the approach and that's why solid exists today.
[04:46:08] [SPEAKER_01] I was like, React, they were right.
[04:46:11] [SPEAKER_01] We needed to evolve to understand, you know, that certain things the way reactivity were weren't serving us.
[04:46:19] [SPEAKER_01] And the interesting thing for me, and maybe this comes right back down to the whole attribution conversation in a weird indirect way when I was talking about like noticing the rest of the ecosystem going on is when they write this compiler.
[04:46:32] [SPEAKER_01] Right.
[04:46:33] [SPEAKER_01] and maybe underpinnings or signals,
[04:46:36] [SPEAKER_01] and you find yourself explaining how things update
[04:46:38] [SPEAKER_01] in terms of dependencies that change,
[04:46:40] [SPEAKER_01] like, maybe we should have this conversation again, right?
[04:46:44] [SPEAKER_01] Because honestly, I don't know what React forgets
[04:46:46] [SPEAKER_01] going to look like, but I've seen Dominic's compiler
[04:46:48] [SPEAKER_01] for signals, and like, if you,
[04:46:57] [SPEAKER_01] how do I show this?
[04:46:59] [SPEAKER_01] Like, if we have a component, okay,
[04:47:03] [SPEAKER_01] let's just sketch this out.
[04:47:06] [SPEAKER_01] if we have a component here that's like app okay and in our app we are going to have state let's
[04:47:17] [SPEAKER_01] um let's say whatever show set show equals use state okay there we go okay we have some state
[04:47:29] [SPEAKER_01] um true right um let's let's add some other state maybe name set name so we've got we got
[04:47:46] [SPEAKER_01] quantity and then we have something like if show okay i'm i'm just
[04:48:20] [SPEAKER_00] i'm just i'm just kind of playing around here um let's do that and let's put it doesn't it doesn't
[04:48:31] [SPEAKER_01] even matter i did maybe i didn't need the second state for this but like if you console log here
[04:48:40] [SPEAKER_01] okay right and you have an early return like this okay yeah p1 sorry h1 um and you're using
[04:48:57] [SPEAKER_01] something like react you expect this console log to log
[04:49:06] [SPEAKER_01] Twice if it switches from show to not show you you your mental model is the component reruns top-down and it and
[04:49:14] [SPEAKER_01] and it and
[04:49:17] [SPEAKER_01] A live runs twice, but what if what if in this model a live didn't run twice like it only ran once and
[04:49:27] [SPEAKER_01] When you switch show stuff just updated like like because under the hood this could
[04:49:40] [SPEAKER_01] Under the hood, this code turned into
[04:50:03] [SPEAKER_00] Actually, I'm going to use create signal actually to make emphasis here.
[04:50:27] [SPEAKER_00] Okay?
[04:50:41] [SPEAKER_00] Because under the hood it changed to this, right?
[04:50:47] [SPEAKER_00] You write this, but you end up with this, okay?
[04:50:55] [SPEAKER_00] Now the only reason you know or don't know this runs top down is because I console logged alive here, right?
[04:51:07] [SPEAKER_00] If you otherwise, you could argue that, oh, this just switched, right?
[04:51:14] [SPEAKER_00] Like the first time you ran it went this way, the other time it went the other way.
[04:51:20] [SPEAKER_00] But what I'm getting at here is that, like, let's put the console log in here now, right?
[04:51:34] [SPEAKER_00] And update John or something.
[04:51:38] [SPEAKER_00] Or, like, or maybe I should put the console log on the other branch, like over here, and update John.
[04:51:45] [SPEAKER_00] Like, if you change some state and this condition doesn't change,
[04:52:01] [SPEAKER_00] the next time around because like it's memoized like trying to explain to people in this system
[04:52:07] [SPEAKER_00] what runs there's no dependency raise anymore just what reruns when the component reruns
[04:52:15] [SPEAKER_00] The only way you can really talk about it is go like, oh, show changed, so we ran this code instead or something or name changed.
[04:52:23] [SPEAKER_00] So like we because you don't you don't like run the other branch or you don't like my example is not great here.
[04:52:30] [SPEAKER_00] But like essentially you've gone to a world where if you get heavy enough optimization and you...
[04:52:44] [SPEAKER_00] actually stop rerunning stuff because it's memorizing.
[04:52:49] [SPEAKER_00] The difference between the actual execution model between this and this converges,
[04:52:57] [SPEAKER_00] and without the affordances to see it,
[04:53:01] [SPEAKER_00] it becomes very hard to explain this as...
[04:53:04] [SPEAKER_00] running something that runs top down because it actually doesn't run top down unless you like go no you're not allowed the console log here or you can't put let
[04:53:13] [SPEAKER_00] Variables in the body or you find ways to restrict stuff so people can't observe that it's not re-rendering. I don't know if I'm making much sense here, but I
[04:53:43] [SPEAKER_00] Okay, I'm making sense. Yeah, you're supposed to, right, you create effect the console logs, then React knows about it.
[04:53:48] [SPEAKER_00] Basically, as long as your function is pure, you can't observe what's actually happening, and that's the saving grace.
[04:53:53] [SPEAKER_00] But what I was getting at is if you saw a system like this, and I told you that under the hood it was React, but magically console logs don't run,
[04:54:10] [SPEAKER_00] or I told you under the hood it compiled the solid, is this hiding signals or not?
[04:54:19] [SPEAKER_00] if you have to explain it that it's because the name or the show changed, that it's updating.
[04:54:25] [SPEAKER_00] Like, it's just signals with a different signal tax.
[04:54:28] [SPEAKER_00] The truth of the matter is, we might all be converging.
[04:54:35] [SPEAKER_00] And this is where the challenge has been for me, right?
[04:54:47] [SPEAKER_00] I really appreciate if you extend the same currency.
[04:54:48] [SPEAKER_00] I've tried to extend, but not assuming I'm too stupid now.
[04:54:50] [SPEAKER_00] You need to look at the same items to come to different conclusions, blah, blah, blah.
[04:54:54] [SPEAKER_00] Okay, sure, whatever.
[04:54:56] [SPEAKER_00] Okay, okay.
[04:54:57] [SPEAKER_00] Okay.
[04:54:58] [SPEAKER_00] Okay, to address the earlier point, I think there's a big difference between signals and
[04:55:02] [SPEAKER_00] implementation detail versus signals in a programming model.
[04:55:06] [SPEAKER_00] I don't think any of that's going to matter.
[04:55:10] [SPEAKER_00] I mean, this comes to compiler and comfort, but like, what if I told you that in the next
[04:55:18] [SPEAKER_00] version of solid, you could just write this and, you know, let's just rename this, use
[04:55:26] [SPEAKER_00] signal, whatever.
[04:55:32] [SPEAKER_00] It's not running top down.
[04:55:34] [SPEAKER_00] It is these components don't re-render.
[04:55:37] [SPEAKER_00] And the model fits that.
[04:55:37] [SPEAKER_00] You just have to think that now instead of the show component,
[04:55:41] [SPEAKER_00] if statements are also reactive boundaries.
[04:55:46] [SPEAKER_00] Kind of the way like turner area operators are installed.
[04:55:48] [SPEAKER_00] I'm not saying I'm comfortable with this.
[04:55:49] [SPEAKER_00] I'm just saying like this distinction is,
[04:55:52] [SPEAKER_00] is kind of irrelevant.
[04:55:55] [SPEAKER_00] And as compilers continue,
[04:55:56] [SPEAKER_00] it's because both sides were just completely messing
[04:55:59] [SPEAKER_00] with the language, right?
[04:56:01] [SPEAKER_00] This is not JavaScript anymore, right?
[04:56:05] [SPEAKER_00] Like this is not just JavaScript.
[04:56:07] [SPEAKER_00] hooks already kind of got away from the old like, oh, it just re-render, forget about it.
[04:56:14] [SPEAKER_00] And the compiler is like the antithesis of just JavaScript.
[04:56:18] [SPEAKER_00] I'm not saying this is a bad thing for React or a good thing,
[04:56:21] [SPEAKER_00] but it's like the React of tomorrow is not the React to 2014.
[04:56:25] [SPEAKER_00] Like that much is clear.
[04:56:43] [SPEAKER_00] Right.
[04:56:43] [SPEAKER_00] I mean, that's the question here, right?
[04:56:46] [SPEAKER_00] I mean, it's kind of like the way they were treating islands when they were working on server components until like...
[04:56:52] [SPEAKER_00] we talked it through and i hope we can talk it through and just realize that this is just
[04:56:57] [SPEAKER_00] that old discussion like i mean at a certain point like was it like walks like a horse
[04:57:04] [SPEAKER_00] eats like a horse is a horse like if if if you do this this doesn't re-render and it has
[04:57:11] [SPEAKER_00] signals under the hood like what are we doing right like it's it's fine but it's like
[04:57:21] [SPEAKER_00] like this is why this is why like this irked me because like
[04:57:27] [SPEAKER_00] It comes down right back to the original comment, you know, like not this one, the one about like, you know, or the response about like, oh, it's not about DX and blah, blah, blah, and like, performance and people only use signals.
[04:57:44] [SPEAKER_00] When you're going to change your mental model, like, you're also entering this DX world of conversation.
[04:57:51] [SPEAKER_00] These things aren't transparent.
[04:57:56] [SPEAKER_00] Okay.
[04:57:57] [SPEAKER_00] Sorry.
[04:57:58] [SPEAKER_00] I'm following different branches here.
[04:58:00] [SPEAKER_00] It's just...
[04:58:04] [SPEAKER_00] It's the key part is that we all landed on the same language, right?
[04:58:09] [SPEAKER_00] The state derived state and effects.
[04:58:14] [SPEAKER_00] Maybe I get where Brian Florence wanted to get off Twitter.
[04:58:17] [SPEAKER_00] I didn't have to respond to this.
[04:58:18] [SPEAKER_00] I didn't need to print paragraphs of this.
[04:58:21] [SPEAKER_00] It's just I like this one.
[04:58:26] [SPEAKER_00] Yeah, it feels like everyone's come to a point of violent agreement about how reactor code should be written and executed.
[04:58:30] [SPEAKER_00] I'm excited for this area of programming to stabilize.
[04:58:32] [SPEAKER_00] And then Dom says, I still think the language could benefit from a signal primitive.
[04:58:35] [SPEAKER_00] That might help adoption and reduce code size.
[04:58:38] [SPEAKER_00] Yeah.
[04:58:38] [SPEAKER_00] Yeah.
[04:58:39] [SPEAKER_00] Thanks, Dom.
[04:58:42] [SPEAKER_00] But like, this is, this is like, like, it's getting very close to the point that the old
[04:58:52] [SPEAKER_00] arguments just don't work anymore.
[04:58:56] [SPEAKER_02] And that's, that's really, that's, that's, that's, that's what this, this one is.
[04:59:17] [SPEAKER_00] Just check keeping up with chat.
[04:59:21] [SPEAKER_00] The thing is, what's beautiful about this is react.
[04:59:27] [SPEAKER_00] React can keep with their vision and realize this reality, you know, approach the hill from their side and create something amazing without, without at all going here.
[04:59:48] [SPEAKER_00] That's what, you know, it's fine.
[04:59:50] [SPEAKER_00] He doesn't believe that the DX or the mental model is good, but like, I guess this is where my snideness came from.
[04:59:56] [SPEAKER_00] I'm like, you've been adopting it piece by piece.
[05:00:00] [SPEAKER_00] like you're like practically there, you know, like, I mean, that, but to be fair, that's
[05:00:12] [SPEAKER_00] only my perspective on it.
[05:00:13] [SPEAKER_00] It's just, it's, it's like these things are converging to a certain degree, right?
[05:00:21] [SPEAKER_00] And, um, yeah.
[05:00:27] [SPEAKER_00] These discussions are pointless and I think that's maybe that's the problem.
[05:00:33] [SPEAKER_00] You kind of hope that if you talk about it and then everyone can kind of get on the same page, but like it doesn't really matter as long as the end result is that React continues to work towards what they're working towards and deliver on this amazing thing and
[05:00:45] [SPEAKER_00] I am sure there will be other solutions doing the same thing.
[05:00:48] [SPEAKER_00] And, you know, this is like this weird perspective thing.
[05:00:52] [SPEAKER_00] You know, you I actually asked Andrew this.
[05:00:54] [SPEAKER_00] I'm like, when you saw Dominic's demo, when you like when you see this like
[05:00:59] [SPEAKER_00] and like are we looking at React or are we looking at solid?
[05:01:05] [SPEAKER_00] You like like maybe it's React because you're using this.
[05:01:11] [SPEAKER_00] But then when like when you understand that this doesn't run,
[05:01:13] [SPEAKER_00] then it's like not React like I don't know, but maybe it doesn't even matter.
[05:01:33] [SPEAKER_00] They might. And the funny thing is this is the this is the this is the thing that I think might ultimately be the biggest proving point of the hypothesis here.
[05:01:43] [SPEAKER_00] When React drops forget, will someone from the solid community recreate it within three days?
[05:01:49] [SPEAKER_00] I know I know that that seems like stupid, right? Like how could you take years of work and just drop it three days later? But
[05:02:01] [SPEAKER_00] Because the primitives for reactivity already exist,
[05:02:05] [SPEAKER_00] we already do stuff like destructure on destructure.
[05:02:07] [SPEAKER_00] We are, you know, there's a plugin that lets you destructure stuff.
[05:02:10] [SPEAKER_00] Reactivar is a way of like getting rid of calling the functions.
[05:02:16] [SPEAKER_00] If someone goes and works on this control flow analysis stuff,
[05:02:18] [SPEAKER_00] like, like, like I don't know what React forget looks like,
[05:02:23] [SPEAKER_00] but like it's, from our perspective,
[05:02:29] [SPEAKER_00] who are very focused on the mechanics,
[05:02:31] [SPEAKER_00] it's a superficial syntax thing for the most part.
[05:02:35] [SPEAKER_00] But from their perspective, going the opposite direction, looking at a language and then figuring out how to best implement it, they have to do the work to figure out how to implement it.
[05:02:45] [SPEAKER_00] And in a sense, like we already have a way to implement it.
[05:02:47] [SPEAKER_00] We just like, you know what I mean?
[05:02:49] [SPEAKER_00] Like this is this.
[05:02:51] [SPEAKER_00] Yeah, I don't know.
[05:02:53] [SPEAKER_00] I guess we'll see.
[05:02:58] [SPEAKER_00] I think Alexis did make his own react forget.
[05:03:01] [SPEAKER_00] And when I said someone making three days, I meant Alexis, like nine out of ten.
[05:03:15] [SPEAKER_00] In any case, like, this is not a diss of React at all or their model.
[05:03:20] [SPEAKER_00] In fact, like, if you look at this, like, there's nothing negative that said about what React's working towards.
[05:03:30] [SPEAKER_00] I actually think this is probably interesting.
[05:03:33] [SPEAKER_00] I'm still not sure if people will, like, go for this model, but this is something we could model if we wanted to, right?
[05:03:41] [SPEAKER_00] That's an interesting question.
[05:03:45] [SPEAKER_00] i just i just want the the the back talk about reactivity to just go away like from the from the
[05:03:52] [SPEAKER_00] react side of things i don't diss the vdom all right there's your drama it's fine it's fine i mean
[05:04:30] [SPEAKER_00] i think this just is a suggestion of like how widespread i think angular picking up signals
[05:04:35] [SPEAKER_00] has created this kind of um like you know narrative which it's just unnecessary i like
[05:04:47] [SPEAKER_00] I don't even know how to put it.
[05:04:48] [SPEAKER_00] I actually like when,
[05:04:50] [SPEAKER_00] to a certain degree,
[05:04:51] [SPEAKER_00] when we don't converge because then it's like,
[05:04:53] [SPEAKER_00] I know that really smart people are working on,
[05:04:57] [SPEAKER_00] on really hard problems and maybe like finding really good,
[05:05:03] [SPEAKER_00] you know,
[05:05:04] [SPEAKER_00] solutions in new spaces.
[05:05:06] [SPEAKER_00] Um,
[05:05:07] [SPEAKER_00] it's just like over time you know as i said you start with the old react and go to hooks you go
[05:05:12] [SPEAKER_00] to this compiler which like svelte is a perfect example of this right because like i sometimes
[05:05:17] [SPEAKER_00] say that svelte and react are very similar and people still call svelte reactivity because
[05:05:21] [SPEAKER_00] it's easier to describe the the language that way um it's it's just hard to keep the the age
[05:05:32] [SPEAKER_00] old biases perspectives when like things are converging at such a rate and
[05:05:43] [SPEAKER_00] yeah i don't know i guess this i guess this is this is what's happening like this is this is the
[05:05:47] [SPEAKER_00] future we're we're building towards potentially a signal based reality with a compiler to get better
[05:05:55] [SPEAKER_00] ergonomics that's that's i guess even the react team might be potentially agreeing with that so
[05:06:03] [SPEAKER_00] i think maybe there's silver lining like these discussions don't matter anymore
[05:06:08] [SPEAKER_00] if you can just step back and go to that light it's like
[05:06:12] [SPEAKER_00] 10 years later, reactivity came back.
[05:06:16] [SPEAKER_00] I don't know.
[05:06:16] [SPEAKER_00] That's pretty cool.
[05:06:37] [SPEAKER_00] Yeah, and I think that's fair.
[05:06:39] [SPEAKER_00] I think we should talk about trade-offs a lot more than we do.
[05:06:43] [SPEAKER_00] It's just...
[05:06:45] [SPEAKER_00] Man, it's so interesting because...
[05:06:53] [SPEAKER_00] He watched this thing happen in tech over and over and over again.
[05:06:59] [SPEAKER_00] Like, I remember when React came on the scene, like not initially, initially, but once it started picking up, once like the, it started rolling.
[05:07:05] [SPEAKER_00] And it was the same thing.
[05:07:06] [SPEAKER_00] I remember there, because like, I think that was part of what like triggered me a bit on the conversation at a certain point where I was like, okay, I should respond, but I shouldn't.
[05:07:14] [SPEAKER_00] Was that like...
[05:07:17] [SPEAKER_00] That is there was reactive systems that existed before react that were doing fine
[05:07:23] [SPEAKER_00] And this is the exact narrative that pushing there that came that came out and
[05:07:29] [SPEAKER_00] The result of it was like basically like the V DOM had no downsides like it was it was like the exact
[05:07:36] [SPEAKER_00] I love this thing you guys guess this is one of my was a DOM versus V DOM
[05:07:40] [SPEAKER_00] Like what were the memes of the time, you know
[05:07:45] [SPEAKER_00] uh you know that's that's probably that's probably what we should be looking for that's that gives
[05:07:50] [SPEAKER_00] you the the true the true the true the true take of things here we go oh man it's it's just the
[05:07:58] [SPEAKER_00] same propagation again things want backlash so hard against reactivity in the early 2010s i'm
[05:08:05] [SPEAKER_00] i'm not surprised that like we're having that kind of backlash now the other way
[05:08:29] [SPEAKER_00] What are the sum of the trade-off signals?
[05:08:31] [SPEAKER_00] Yeah, okay.
[05:08:31] [SPEAKER_00] I mean, the obvious one is that JavaScript is not a reactive language.
[05:08:38] [SPEAKER_00] You know, so the biggest, biggest trade-off here is that we can't, we can lose reactivity
[05:08:47] [SPEAKER_00] really, really easily.
[05:08:49] [SPEAKER_00] Um, yeah.
[05:08:50] [SPEAKER_00] if we're not careful.
[05:08:52] [SPEAKER_00] I mean, the most dangerous trade-off is that we can oversubscribe and converge stuff.
[05:08:57] [SPEAKER_00] That's the biggest danger.
[05:08:58] [SPEAKER_00] But a framework like Solid is designed to make it almost impossible to oversubscribe in a dangerous way.
[05:09:04] [SPEAKER_00] That was the problem with Knockout.
[05:09:05] [SPEAKER_00] That's why we have so many untracks.
[05:09:07] [SPEAKER_00] But the trade-off was because you could entangle everything,
[05:09:12] [SPEAKER_00] Solid was designed defensively, read-write segregation, all the stuff I learned from React.
[05:09:18] [SPEAKER_00] Right?
[05:09:18] [SPEAKER_00] And...
[05:09:19] [SPEAKER_00] and basically and untracked components and all that kind of stuff.
[05:09:24] [SPEAKER_00] And in turn, the flip side now is that it's easy to lose reactivity because, you know, you might access like it reactivity is all about where it reads.
[05:09:37] [SPEAKER_00] So...
[05:09:38] [SPEAKER_00] you need to make sure that you use the data where you like where you use it like you have to read it where you use it you can't like access it early otherwise it doesn't track so um this can lead to traps it's why we don't destructure props or why um you know we have to like wrap um what
[05:10:00] [SPEAKER_00] most reactive libraries have compiled templates because they like want to wrap expressions
[05:10:05] [SPEAKER_00] and they don't want end user having to like write functions everywhere basically anything
[05:10:10] [SPEAKER_00] reactive needs to be preserved in a re in an expression essentially um so that that's probably
[05:10:18] [SPEAKER_00] the biggest um dx concern um
[05:10:24] [SPEAKER_00] For a performance angle, it's interesting.
[05:10:28] [SPEAKER_00] I think historically stuff that was kind of push base might over execute,
[05:10:32] [SPEAKER_00] but it only over executed the stuff that it knew changed.
[05:10:35] [SPEAKER_00] I think with pull-based systems, that performance aspect is not as big of a deal anymore because it both knows exactly what it has changed and you control when to do the work.
[05:10:46] [SPEAKER_00] So I don't think that classic problem synchronization, all the stuff that made knockout awkward doesn't exist anymore because we have smarter algorithms around topological sorts.
[05:10:57] [SPEAKER_00] Yeah.
[05:10:59] [SPEAKER_00] I don't know, people to chat, help me come up with some more downsides.
[05:11:04] [SPEAKER_00] Like, there's a difference between issues with signals and, like, say, issues with solids specifically, right?
[05:11:13] [SPEAKER_00] And so, like, yeah, I mean, that's a cool way of playing it, right?
[05:11:22] [SPEAKER_00] Signals are cool if you can do any diff you want or do basically no diffing, right, at the granular level, right?
[05:11:28] [SPEAKER_00] Just if it changes, replace it.
[05:11:29] [SPEAKER_00] I think the other place that gets a little tricky is nested reactivity.
[05:11:35] [SPEAKER_00] And I think proxies help a lot with this, but generally speaking, because it's the read
[05:11:41] [SPEAKER_00] where you use it scenario, and view took this approach, all their unless you use a shallow
[05:11:49] [SPEAKER_00] ref, all their signals turn into stores because again, this is a language limitation.
[05:11:56] [SPEAKER_00] You could just use plain objects if you have objects, but if you have a primitive, like a number or value, you have to box it yourself.
[05:12:03] [SPEAKER_00] So essentially, because there's no like proxy for a single variable, that's like why we have signals.
[05:12:11] [SPEAKER_00] There's actually two modes of reactivity.
[05:12:14] [SPEAKER_00] There's like the signal and then there's like the store or ref and the reactive or the box observable and the observable.
[05:12:20] [SPEAKER_00] And we've had this throughout time.
[05:12:23] [SPEAKER_00] If there was one perfect reactive primitive, then...
[05:12:30] [SPEAKER_00] I think that would make things a lot easier as well.
[05:12:39] [SPEAKER_00] And you could play with that idea.
[05:12:41] [SPEAKER_00] You could basically make a signal interface that returned to store.
[05:12:48] [SPEAKER_00] So if it was a primitive, it would just be the signal.
[05:12:50] [SPEAKER_00] And then if it's an object inside that,
[05:12:53] [SPEAKER_00] that is kind of like an overhead, you know,
[05:12:56] [SPEAKER_00] to like just opt everyone into.
[05:12:59] [SPEAKER_00] But if you do stuff smart enough and optimize enough,
[05:13:02] [SPEAKER_00] I think...
[05:13:03] [SPEAKER_00] you could probably make that the unifying model and then you know like I think that's the other
[05:13:09] [SPEAKER_00] kind of weakness there um that we we probably need to consider um I don't know what are what are
[05:13:16] [SPEAKER_00] other downsides you have to think about this kind of stuff yeah the funny thing is like as I was
[05:13:33] [SPEAKER_00] mentioning before is like we kind of almost want to think about this kind of stuff from a language
[05:13:37] [SPEAKER_00] standpoint like hooks make you think about this kind of stuff um yeah just checking up on your
[05:14:09] [SPEAKER_00] Yeah, my stuff will all be on YouTube.
[05:14:19] [SPEAKER_00] Yeah, I don't know. I think that's the main stuff.
[05:14:23] [SPEAKER_00] I mean, it might be interesting when you get into bigger systems.
[05:14:26] [SPEAKER_00] Like one of the problems that React has been having
[05:14:28] [SPEAKER_00] while they came up with the concurrent rendering part
[05:14:31] [SPEAKER_00] is that if they have lots of distributed computations,
[05:14:34] [SPEAKER_00] like the graph gets really big on the component tree,
[05:14:37] [SPEAKER_00] not being able to split up the work was really problematic
[05:14:41] [SPEAKER_00] because like they just have so much computational stuff
[05:14:46] [SPEAKER_00] from end-user code all throughout the tree.
[05:14:49] [SPEAKER_00] And then if people over-rendered or weren't careful,
[05:14:53] [SPEAKER_00] it could get very excessive.
[05:14:55] [SPEAKER_00] And they were like, okay, if we can split up the work,
[05:14:57] [SPEAKER_00] we can just mitigate that cost for people.
[05:14:59] [SPEAKER_00] They just won't notice if their app gets slower
[05:15:02] [SPEAKER_00] because we won't be blocking it.
[05:15:06] [SPEAKER_00] There could be a world...
[05:15:09] [SPEAKER_00] with a exceptionally large reactive graph maybe like that.
[05:15:13] [SPEAKER_00] But one of the things is the reactivity kind of isolates.
[05:15:15] [SPEAKER_00] It's self-isolates.
[05:15:16] [SPEAKER_00] It's like you have sub, instead of being like the components,
[05:15:19] [SPEAKER_00] which are like forced hierarchy key,
[05:15:20] [SPEAKER_00] you can basically like have sub isolated pieces of the graph
[05:15:27] [SPEAKER_00] all over the place that update independently.
[05:15:29] [SPEAKER_00] Like the scale on size is fine.
[05:15:32] [SPEAKER_00] Generally speaking, classically reactive libraries have been more expensive on creation, especially
[05:15:40] [SPEAKER_00] like component creation, because like they wrap stuff in observers and that to get like
[05:15:44] [SPEAKER_00] a re-render model.
[05:15:45] [SPEAKER_00] But like it's solid doesn't really have components.
[05:15:47] [SPEAKER_00] That isn't really, yeah, I don't know.
[05:15:49] [SPEAKER_00] It's tricky.
[05:15:50] [SPEAKER_00] I think, I feel like most of the tradeoffs are like ergonomic things.
[05:15:55] [SPEAKER_00] And it's tricky because if you fix the ergonomics, you like...
[05:15:59] [SPEAKER_00] you might break the mental model for some people because it's like
[05:16:05] [SPEAKER_00] um if there's any if there's any exceptions to the rules it's hard to like explain what's going on
[05:16:11] [SPEAKER_00] but i think we're moving into a world where it's going to be hard to explain what's going on
[05:16:17] [SPEAKER_00] which is which is like you're like if you know that why why do that i don't i don't know uh
[05:16:25] [SPEAKER_00] sorry just i don't know this this has been i think
[05:16:38] [SPEAKER_00] I'm guilty of the same thing that I was talking about where people getting, you know,
[05:16:41] [SPEAKER_00] too heated on Twitter recently about innovation and stuff.
[05:16:45] [SPEAKER_00] And we're getting into these silly debates.
[05:16:48] [SPEAKER_00] I was talking about the compiler one.
[05:16:50] [SPEAKER_00] And the problem is the compiler one, I took the stance of like, look, I don't really care, right?
[05:16:54] [SPEAKER_00] I think you guys are, everyone's just drawing their lines and it doesn't really matter.
[05:16:58] [SPEAKER_00] I am taking almost the same stance here, but this one was enough for me to get pulled
[05:17:03] [SPEAKER_00] into, you know, deeper discussion and stuff.
[05:17:06] [SPEAKER_00] So like, yeah, clearly...
[05:17:08] [SPEAKER_00] Clearly, I am not immune to this conversation.
[05:17:12] [SPEAKER_00] And it's something I'm going to reflect on and think about.
[05:17:18] [SPEAKER_00] You know, congrats to Marco and the TypeScript.
[05:17:21] [SPEAKER_00] Yeah, let's congrats Marco one more time on their TypeScript.
[05:17:28] [SPEAKER_00] There we go.
[05:17:30] [SPEAKER_00] Yeah, this is why this one was supposed to be at the end.
[05:17:32] [SPEAKER_00] Because I knew that we'd meander off to this point.
[05:17:35] [SPEAKER_00] Because, like, let's face it, like, yeah, I think so.
[05:17:44] [SPEAKER_00] I guess my only question is, is like,
[05:17:47] [SPEAKER_00] Is this just going to be the state of Twitter for the next few weeks?
[05:17:52] [SPEAKER_00] Are we done?
[05:17:55] [SPEAKER_00] I get it.
[05:17:56] [SPEAKER_00] The Signal stuff was just stupidly hyped.
[05:18:02] [SPEAKER_00] I mean, and it is getting positioned as us versus them.
[05:18:10] [SPEAKER_00] I pulled a prime tweet earlier, right, about...
[05:18:19] [SPEAKER_00] But, yeah, if this is what I'm seeing and I'm on React, I'm like, no, this isn't true.
[05:18:25] [SPEAKER_00] And I don't...
[05:18:27] [SPEAKER_00] this this machine isn't you know isn't really helping it it's it's way more nuanced than that so like
[05:18:44] [SPEAKER_00] Stream for next week, signals for haters.
[05:18:46] [SPEAKER_00] Yeah, maybe.
[05:18:46] [SPEAKER_00] That or talk about the 1.7 release.
[05:18:49] [SPEAKER_00] Solid 1.7 is nearing.
[05:18:52] [SPEAKER_00] And this release is all about TypeScript.
[05:18:55] [SPEAKER_00] Like literally, there's some errors handling stuff.
[05:18:58] [SPEAKER_00] But the biggest part of that release is all about TypeScript.
[05:19:01] [SPEAKER_00] I don't know if I have enough content to do a full stream off it.
[05:19:03] [SPEAKER_00] Because I'm like, but we've been making some big improvements to TypeScript for 1.7.
[05:19:14] [SPEAKER_00] Resources for signals.
[05:19:15] [SPEAKER_00] Yeah, I mean...
[05:19:18] [SPEAKER_00] They're scattered. Stuff by the creator MobX, Michael West Straight, is really good.
[05:19:25] [SPEAKER_00] For most people, I send them to my Learn Signals two-part article, which is...
[05:19:33] [SPEAKER_00] Where is it? It's funny. This one. Oh, I miss gift subs. I'm so terrible. I'm so sorry.
[05:20:00] [SPEAKER_00] Oh, thanks Lynn Phoenix for the five gift subs.
[05:20:09] [SPEAKER_00] I appreciate to the channel and also that one bra.
[05:20:15] [SPEAKER_00] Thank you for the subscription.
[05:20:16] [SPEAKER_00] It's five months.
[05:20:17] [SPEAKER_00] Wow, you're probably like one of the long timers
[05:20:20] [SPEAKER_00] because I think I only got affiliated about five months ago.
[05:20:24] [SPEAKER_00] So, oh, wow.
[05:20:27] [SPEAKER_00] All right, anyway, I dropped that in chat.
[05:20:32] [SPEAKER_00] Oh, wait, did it not go through?
[05:20:38] [SPEAKER_00] Do you guys see my link in chat?
[05:20:41] [SPEAKER_00] Try this one more time.
[05:20:42] [SPEAKER_00] Twitch told me it didn't go through.
[05:20:50] [SPEAKER_00] Okay. Alright. Well, whatever.
[05:20:58] [SPEAKER_00] It's on the channel twice. We'll live through it.
[05:21:00] [SPEAKER_00] Alright. Yeah.
[05:21:12] [SPEAKER_00] Especially when we get to the router and stuff.
[05:21:13] [SPEAKER_00] This stuff is a little bit, well, more straightforward.
[05:21:18] [SPEAKER_00] I can actually appreciate it completely enough to probably talk about it too much.
[05:21:22] [SPEAKER_00] But a lot of this had to do with being more restrictive with our types that could give people better developer experience.
[05:21:31] [SPEAKER_00] i haven't yeah i haven't reached out to anyone about this but um yeah this is a good point we
[05:21:36] [SPEAKER_00] should we should talk about this again or in more detail because there's been a lot of work on
[05:21:42] [SPEAKER_00] stuff like uh um imp um interaction to next paint and like we're like we're really trying i know
[05:21:50] [SPEAKER_00] that like they're really trying to find ways to like properly evaluate single page apps versus
[05:21:56] [SPEAKER_00] multi-page apps and like the impact stuff and right now the metrics aren't always like
[05:22:01] [SPEAKER_00] the best to know how things work after initial page load.
[05:22:15] [SPEAKER_00] Yeah, I mean, Svelte generally is compiled,
[05:22:22] [SPEAKER_00] but its stores are like a very basic version of reactivity in that.
[05:22:27] [SPEAKER_00] They don't have the whole diamond graph stuff we talked to the Angular guys before.
[05:22:30] [SPEAKER_00] They don't have the propagation.
[05:22:31] [SPEAKER_00] They're just kind of like...
[05:22:32] [SPEAKER_00] They are a simple signal-like primitive,
[05:22:36] [SPEAKER_00] but they're not like signals, you know, TM, so to speak.
[05:22:48] [SPEAKER_00] Yeah, I think the whole effort and work here is amazing,
[05:22:51] [SPEAKER_00] and I think it's actually really important for the future of stuff.
[05:22:53] [SPEAKER_00] So we have better things than silly benchmarks that we put together.
[05:22:58] [SPEAKER_00] Benchmarks are the first step, but then we can actually talk about the biggest problem is
[05:23:01] [SPEAKER_00] after the fact page performance is something that's much harder to nail down.
[05:23:07] [SPEAKER_00] But yeah.
[05:23:09] [SPEAKER_00] Anyway, where are we at?
[05:23:14] [SPEAKER_00] All right.
[05:23:16] [SPEAKER_00] I think we're going to be...
[05:23:18] [SPEAKER_00] Done for the day.
[05:23:20] [SPEAKER_00] All right, I'm going to eat some dinner.
[05:23:22] [SPEAKER_00] You guys have a great weekend.
[05:23:23] [SPEAKER_00] Hopefully next week we will talk solid 1.7.
[05:23:28] [SPEAKER_00] It'll be ready to go out.
[05:23:31] [SPEAKER_00] But yeah, have a great weekend, everyone.
[05:23:33] [SPEAKER_00] Catch you later.