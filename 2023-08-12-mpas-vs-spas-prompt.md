---
showLink: "https://www.youtube.com/watch?v=iOqPj-CjoV0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "MPAs vs SPAs"
description: ""
publishDate: "2023-08-12"
coverImage: "https://i.ytimg.com/vi/iOqPj-CjoV0/sddefault.jpg?v=64d414da"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 7-10 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, 04:59:48, meaning the transcript is 4 hours and 59 minutes and there should be around 30 chapters).
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

[00:00:00]  Hello everybody and welcome to my stream today. How are you all doing? Glad to be back. It's been another couple weeks as things happened. I've been away
[00:00:13]  a lot the last few months, but it's been good. I've started with traveling with the conferences, then some summer vacation and a few other things, and hopefully
[00:00:28]  now we're gonna have a bit more steady of a schedule, but it's been a while. Let's go. Hey Greg, how's it going? I should also
[00:00:40]  probably post on some social medias and remind people that I am live. As I said, it's been a while. Although some people seem interested in this topic recently
[00:00:53] . I've covered MPAs, single page apps, and everything in between. But a lot of discussion made me want to kind of reflect on some stuff and a conversation
[00:01:05]  point. It's interesting, because I've been seeing a lot of like straw man arguments, but then I've also been seeing, you know, maybe, maybe things
[00:01:16]  are a little bit more nuanced with this whole MPA, SPA thing. That's great. Yeah, I mean, enjoy and participate in the chat, you know,
[00:01:28]  as we do this, because I want to get some opinions and stuff there. I'm actually going to be, let me just open a new Twitter window. I'm
[00:01:38]  actually going to be doing a, kind of going over some content from a talk that I have, let's go to my profile, that I've been giving as a keynote
[00:01:50]  that's never been released, to help kind of fit that in. So yeah, let's just, while we're starting up here, I'm just going to,
[00:01:58]  we're live. I say we're, but it's like I'm live, whatever. Twitch TV. As everyone knows, I always kind of, I don't have
[00:02:15]  a cool intro song. So I use this time to, um, kill off those Twitch pre-rolls. So, alright. We got some people here saying hi
[00:02:35] , thanks. Great to see you all again. Uh, yeah, um, is this for the new Astro stuff? Uh, yeah, a little bit. Yeah,
[00:02:49]  I mean, it is. It's all part of the conversation. Um, I think the distinction might be getting difficult for people. And I want to talk a bit
[00:02:58]  about what that distinction means or what the distinction moving forward should be. I mean, we've, we've, we've, I feel like to a certain degree, we
[00:03:07]  beat this topic to death. Um, don't worry, I'm not going to spoil any new hidden articles here, um, this time. But like, I think a
[00:03:16]  while ago I did it, I did a series of articles, what was a JavaScript versus JavaScript fight. Right. And I think, yeah, the very first topic I
[00:03:25]  did was MPA versus single page app. Like, um, it's just one of those things that that is not well understood. At this point, it was a
[00:03:40]  different conversation. At this point, um, people were telling me that there's SvelteKit apps and Next.js apps are MPAs. And, you know
[00:03:48] , I don't think that's quite right, but I understand where the confusion is when you, oh man, I actually should have prepared this one before the stream, but
[00:03:57]  I'm, I'm just, we're just rolling a bit before we actually fully get started. But, um, is the volume low? Is that, is that
[00:04:05]  what's going on? Sorry. How's the volume? Yeah. Yeah. We'll talk a bit about RSCs as well today. Um, but yeah, sorry
[00:04:26] . Uh, I should be able to find this one really quick. Um, I was just thinking about this quote, but Guillermo, or sorry, sorry, sorry
[00:04:35] , sorry, sorry, sorry, sorry, it's Rot... G... Um, low interest rate. No. Single. Oh, I'm not going to find it.
[00:05:02]  Uh, chat knows exactly which one I'm looking for here. I am positive. Zero. I said low. It's zero. My bad. You, you know
[00:05:20]  what I'm talking about. Single page apps were a zero interest rate phenomenon. Um, as I mentioned, some people, I actually, where RSCs are sitting
[00:05:34] , one could, could, could say that. And this is the motivation. It was just, I think a lot of people read this tweet and didn't understand. They
[00:05:43] 're like, yeah, yeah, of course they're, they're no good. You need Next.js. But actually most Next.js apps historically have been single page
[00:05:51]  apps. So before I, I'm just, I'm just, I'm just spitting some stuff now, but I think we're probably getting pretty close to getting
[00:05:59]  started here. Um, how are we doing chat? Yeah. Some people have actually started to show up. All right. All right. All right. So I want
[00:06:19] , I want to, the reason this all came up. Okay. So let's, let's just get started here. Yeah. I mean, it's one of
[00:06:36]  those comments where you like, you're not even sure if the poster is serious. Cause like, are they making fun of themselves? Yeah. Um, from a certain perspective
[00:06:45] . Um, but there's a way, there's like multiple ways to take that. I just, that one always, I will say that there's been a lot of
[00:06:53]  confusion around this topic. And as I said, I, um, I've covered it before and I'll, I'll reference some of them stuff in the, again
[00:07:02] , but this for me started right here. Um, what was this? July 25th, 2023. So a couple of weeks ago, I wasn't streaming, but I
[00:07:16] , I saw this and I was like, Oh, shots fired. Cause this was a, um, um, screenshot from a recent Rich Harris talk where he, he
[00:07:29]  was giving his MPAs are dead. Um, um, uh, section, which had basically went off on a whole bunch of topics of what he didn't like about
[00:07:39]  modern JavaScript. And this was one of his spicier takes. Um, and the, the Astro team was like, basically kind of poking that's single page apps
[00:07:50]  are dead, almost like the weed inverted the situation. So yeah, there's a bit of a back and forth here, but default by view transitions will kill spas mean
[00:08:10] . Yeah. So people start coming back, back, you know, and the, you know, Guillermo's in here not paying a cost of re-init
[00:08:16] ializing app on every click. We're not supposed to talk about that. Yeah. I mean, it, it got a little bit heated and I'm not, this
[00:08:26]  could have been like in this week in JavaScript later, but this is the context that I was like, okay, time to talk about this again. Um, and I
[00:08:38]  can see, I can see both sides, but this, this does start with a little history and a little bit of appreciation for the subject or in the topic in general.
[00:08:59]  Cause I've, I've seen this topic morph over time. First of all, I just want to throw it out to the chat. I imagine given the audience and
[00:09:07]  stuff, most, most of you all know what a multi versus single page app is, but just in case you're not, um, I think we should probably start there
[00:09:19]  and do a little bit of history. Now, if you really want to deep dive on that history, I have a, I have a stream that is not one of my
[00:09:28]  more popular streams, sadly, but literally covers everything. And we're probably going to cover a lot of it again today, but but essentially, where was it? It
[00:09:39] 's really old one. This one here, islands, partial hydration, and JavaScript frameworks. If you ever get a chance, um, to go back and check out one of
[00:09:52]  these streams, and I'll just post the, the link, um, in chat here. Um, but let's get the ads. Okay. There's this part
[00:10:07]  where I talk about for about 30 minutes, the history of server-side rendering, and I literally go through a bunch of stuff and step-by-step talk about
[00:10:18]  every different history of rendering technique, like static HTML, then dynamic server render, then dynamic server render with update panels, then JavaScript client-side render, JavaScript render SSR
[00:10:31] . Uh, I think the list gets to about, about, oh, how far, I mean, I, I just keep driving this list home the whole time.
[00:10:40]  Um, and you might be like, what does, I talk, like, basically, I iterate over all these different rendering techniques of the web. The most important part
[00:10:53]  of this though, is the beginning, which is understanding that all websites fundamentally involve some kind of server backend hosting that is serving a page, right? And the term multi-
[00:11:10] page app was a, like, in hindsight, sort of, uh, naming, uh, like, uh, like an, in retrospect naming convention. The, the
[00:11:21]  MPAs are just websites. A, you click in navigation, you go to the next page, click in navigation, move around. You'll, this topic has everything
[00:11:31]  to do with routing. Um, "Doesn't Next13 do full page reloads?" Not exactly. Just here for Dragon Ball? Okay, I mean, that
[00:11:46] 's, that's fair too. I, I, it is definitely interesting. I did watch all of that series, um, uh, Dragon Ball Super, where they all
[00:11:55]  become Super Saiyan gods, and then, yeah, anyway, that's, that's a whole other thing. Yeah, I mean, that's how all my streams are
[00:12:06]  usually. I, I usually see something going on, and then I, I need to talk. The second thing that actually happened was I actually was in a panel discussion
[00:12:16]  in Twitter space with Ben Holmes this week, um, which I believe is recorded. And in that session, uh, we were just doing like our typical back and forth,
[00:12:25]  you know, expecting everyone to know about the subject matter if they cared enough to tune in. And, um, at a, in the middle, Ben was like, "
[00:12:33] Brian, what you said is interesting." And I get bits of it, but like, I really don't get what you're talking about. Like, how do you
[00:12:43]  differentiate between all of these like different zones of things? Like what's an MPA? What's a single page app? And I was like, okay, yeah. Okay
[00:12:51] . That's, that's a, that's a fair question. Like, why am I so, you know, why don't I call react server components, single
[00:13:01]  page apps, you know, et cetera. Like, so I felt that it was important to kind of look at that distinction and we will be looking at some Astro
[00:13:11]  code today, um, as well and kind of understand, um, like maybe even have some revelations about how this kind of dichomity is changing these days.
[00:13:32]  Anyways, uh, let's, let's, let's, let's keep going with this single document fetch. Well, see, and this is the, this is the
[00:13:39]  thing. Um, single page apps are kind of funny in that they suggest, well, a single page, which in a lot of ways is how they developed or where the
[00:13:51]  naming came from. It was, it was like an architecture, almost like when you, people like had like initial jam stack. It meant like a very specific way of building
[00:14:00]  an app. It meant instead of like, I, I, I'm glad I actually have this list on screen. Maybe I'll full screen it a bit so we can
[00:14:08]  see it a bit better. Um, but static HTML is what I was talking about a minute ago. That's when you just ship the HTML pages, maybe you put them
[00:14:16]  on some hosting site, CDN, and you go to a URL. It's like a file system almost. You just go straight off, right? Dynamic server rendering,
[00:14:25]  you know, PHP. Um, my first dynamics of rendering was actually using Pearl script, uh, or in a CGI bin because I had a guest book. So you
[00:14:36]  could post a form and then it would, I kid you not, it would literally, when it got the form post, load in the HTML file that we use for the
[00:14:44]  guest book, use this Pearl script to rewrite the HTML, save it back to the file system and send that back. So like whenever the next person navigate to, they
[00:14:55]  get that same HTML, but it was like no database. We were just literally using this script to rewrite the HTML in a static folder, more or less. Obviously we got
[00:15:03]  better technology like, um, PHP, ASP, um, and much later other stuff like rails and whatnot. But it's, it's just funny. Uh, if
[00:15:14]  you want like a really deep history dive on that, I mentioned this in previous, sorry, previous streams. Um, but it might be worth looking at, um,
[00:15:24]  what was I going to say? Uh, uh, actually it just occurred to me that my notes are on the wrong window and bring them over. Um, uh, but
[00:15:35]  that, that Steve Sanderson talk, I'm not gonna, I'm not gonna have time to go through it all here. Steve Sanderson history of web. Oh
[00:15:48] , oh, is like history of web, like, uh, like, but isn't that, has Google ever done that to you? Steve Sanderson not resume my journey
[00:16:02] . I just, okay. This one. Okay. Just trying to do a Google search here. Okay. But if you really want to focus on that early days stuff
[00:16:17] , like just to give you an idea, Steve gives this amazing one hour talk, right? And he's going here. And if you look at the timeline, okay,
[00:16:25]  we're at 24 minutes. We're in 1996 at 24 minutes. Okay. That just gives you an idea of, of how long this is before it gets to it
[00:16:33] . And then it's like somewhere around here. It's like, Oh, we're in 2005 around 36 minute mark. And then like it basically two thirds of 2009,
[00:16:44]  he gets up to the single page app around the 40 minute mark of his talk. And then he talks a bit about the future. So basically two thirds of his talk
[00:16:55]  happened before the dawn of the single page app. I don't know about you all. Um, and this is why this is such a great talk because it gives a lot
[00:17:01]  of perspective, but I bet you most of the, most of the people watching may have not been building websites, um, before the dawn of the single page app. And
[00:17:13]  that's why I think it's probably important to give a lot of perspective here. Um, but yeah, just, just throwing that out there. There was a lot
[00:17:26]  of time and that time was almost 20 years of the web before the single page app. Part of it was limits of technology. Um, we didn't have Ajax 2005
[00:17:37] . That was like the ability to do asynchronous JavaScript calls to like up, like before it was all just full page postbacks, like I'm talking about, we couldn
[00:17:45] 't even like be on the page and request some more stuff. But of course, because everything was this dynamic rendered server, when we got that technology, we, we added
[00:17:54]  these kind of wrappers around it, um, called update panels. And the reason I want to, I'm delving a bit on this history of MPAs is
[00:18:03]  because I think it came up in one of the, the spaces on recently where someone was like, Oh, we're going back to PHP. And I was like,
[00:18:11]  hell no. And I gotta, I gotta talk a little bit about this. And this is in my mind, uh, you know, necessary context, um, for talking
[00:18:21] , uh, about what we, we need to talk about today. Okay. Yeah. What's here? So for the flash, the original SPA, yeah,
[00:18:32]  kind of right. Like back then when you want something really interactive, you just couldn't use the web model. So you like, we embedded these, um, like even
[00:18:41]  before flash, we had other embed things like, uh, active X controls and stuff in like the late nineties. Um, we've been, we were embedding,
[00:18:48]  uh, what was it? There was a really cute name for, for those embeds. Um, I can't remember the term. It wasn't widget. It was
[00:18:57]  like, um, yeah, whatever. It doesn't matter. It's So it's all about routing. The MP has no client side around this thing. He uses
[00:19:09]  client side around. Yes. But that, that definition has served us really well. We're going to have to dig into this a bit further, but that, that you
[00:19:18]  are jumping ahead a little bit. Yeah. Yeah. P jacks. I remember P jacks. So I'm just catching up on the stuff. Yeah. The
[00:19:32]  Java applets. Yeah. Yeah. Yeah. But it wasn't just the applets. There was like, I thought there was like, is it just applets?
[00:19:38]  Was that the, I know Java had applets, but there's like a universal term for that. But yes, you guys definitely, you're right on it. Okay
[00:19:46] . All right. Cool. Yeah. The, but the, the, the reason I want to talk about this, cause this, this gives us a little framing for
[00:19:54]  the conversation to come because the first thing we did when we got Ajax, like the ability to dynamically set stuff was like, okay, sweet. So now, because what
[00:20:03] , what was happening at this time period in the web was we did want interactive stuff. Like if you went, I love using Airbnb, sorry, not, that should not
[00:20:13]  be up here. My bad. Let's, you know, turn all this stuff away. Um, it's all fine. There's nothing private there, but,
[00:20:23]  um, it's cause this one is in the web browser. Anyways, sorry about that. Um, uh, air, I like using Airbnb, although I probably shouldn
[00:20:35] 't go to a specific place. Let's go, airbnb.com for, for one of these kind of places. What is that? Is this a good example?
[00:20:44]  Um, or maybe Expedia. Let me, let me, let's, I'm just, I'm just picking like some, yeah, yeah, yeah, yeah.
[00:20:58]  Yeah. See, this is even nicer. You can't find it like it used to be. You used to have to like select a country and then you'd have
[00:21:04]  to like, then you paid to reload and then you select a city page would reload. Then you'd select your dates page would reload, you know, and that was like
[00:21:15]  experience. And, but the problem is how do you persist the state of your application, your selections? Maybe you're filling out a form and you have all these dropdowns
[00:21:23]  and you have different dynamic things. How do you persist this while your page keeps on loading and unloading? Well, the answer to that question was that in those days
[00:21:32]  we used to just serialize the client state into the page, send it back to the server server would deserialize it, use it when it's doing its updated
[00:21:42]  server render, and then serialize, you know, its own state back to the page. And we just ping pong and back and forth all the serialized state between the
[00:21:50]  client and the server. even though we're talking about the history of MPAs, SPAs today, what we're really going to be talking about is that the
[00:21:57]  history of the web is about like where, who manages the state. It's a game of hot potato, so to speak. For a while there, no one wanted to
[00:22:09]  manage the state. And now we're getting this opposite zone where like everyone wants to manage the state. But my point is that in these early days, the first,
[00:22:18]  because of this series of like, let's just grab all the state and throw it back and forth because it couldn't all fit in the URL. URL is one way to
[00:22:25]  preserve state, you guys might have guessed. But the other way was literally serializing the state into the post request, like the post body. And then that's what
[00:22:36]  they used to call this post backs. And then, then serializing the state back into the page. And, and this way you always had all the data you needed,
[00:22:46]  the current state of all the dropdowns, everything. But yeah, it's just funny because I started liking the SPAs, complex state management, all this. I
[00:22:56]  have never witnessed something more ugly and complex than MPAs during this time period where they were trying to be apps and they really couldn't be. And as I said,
[00:23:10]  Ajax helped because suddenly now you could say they, they started sending those requests only as partials. There's an idea that like, you could be like, okay
[00:23:19] , let's let you like, we're on a page. We, we change that dropdown. Okay. Well, we don't have to send the whole page to pop
[00:23:27] ulate that. We can just like replace the dropdown, so to speak. And this is all to keep that server, have the state client, have the state mentality. But
[00:23:39]  the thing with update panels is they had different life cycles. They only had access to a certain state. It started getting very, very complicated. And this is, you know
[00:23:48] , we kind of got smarter with our patterns around dealing with stay on the server. This is around when Rails came out and MVC, we're like, okay, no
[00:23:56] , you can't just have all your logic together. But this architectural consideration was less mechanical and more about just keeping some kind of mental sanity in this scenario where you're like
[00:24:06] , okay, don't just have all your code in these kind of feature centric buckets. Let's separate them into like clear, good architecture of models, which are
[00:24:16]  like your database representation, your views, and then these controllers, which kind of handled the API requests or handled the page requests. But the truth of the matter is after dealing
[00:24:26]  with so much state in this coupled mess, everyone's like, okay, we can't do that. We need to like return to web fundamentals again. You notice this
[00:24:38]  happens whenever there's a shift there. You finally get to a level of complexity that there's this kind of regression. Are people following along with me so far? I don
[00:24:50] 't know if anyone's around. Yeah, yeah, we've been doing, yeah. You know what? Kind of sounds like less like an HTMX, you
[00:25:02]  know, that's, that's fair. And I think Greg's with us in the stream. He was pointing, I think, uh, where was it? Um,
[00:25:11]  I think, yeah, everyone asking Ryan Carnegie's opinion on HTMX, needs to go back to the catalog cuts, some deep cuts, like the history of server
[00:25:22]  rendering starting around 40 minutes. Okay. This, is this the 40 minute mark? Okay. Just a second. Let's, let's skip the ad here. It was
[00:25:30] , it's the same video that I actually had on, on, on focus here. Um, let's just skip ad. Let's go. Okay. That's client
[00:25:41]  side render. Okay. No, I want to go to the 40 minute mark. It was around here. Variation. I guess with the drop down, it's not
[00:25:47]  too bad. You drop it and then you come, you're done. And then it, but essentially it would, they basically had this way of just replacing the section
[00:25:54]  of the page. And this is not new technology. This is like 2006, they were doing this. Um, and that kind of became, um, the de facto way
[00:26:05]  to solve this for a time being. The problem was it was still clunky as hell. It was still slow because you had this problem. Like, like if this
[00:26:12]  form needed all the data on the page, like maybe it's the user section with all the information. And like, you'd be serializing and sending back this data back
[00:26:23]  and forth, like a ton. Like it got nasty. I worked on some really big nasty.net projects. And you know, this, this, this was like the
[00:26:33]  way, like they did it because you didn't have the right JavaScript. You could use your backend templating language here to define some controls and then they'd be like
[00:26:41] , Oh, on click, refresh, like redraw it. Like you could keep your server side mentality and have it just replaced these sections. Yeah, exactly. That
[00:26:56]  that's, that's the idea here. And this was, this was the go-to solution for, for definitely a few years there. It's funny because when I
[00:27:06]  see turbo and I know they've moved, got better at this. And I see like what the rails community is doing. It's a variation on this. This is not
[00:27:15]  a new technique, right? The difference is here. We had to make these clunky kind of update panels and whatnot. They, they're, they've gotten to
[00:27:25]  a point now that they may be able to make it more granular and like every button is just individually wired and it's, it's more efficient, but essentially, you know
[00:27:36] , and you can nest update panels. I'm sure like, you can say like, this is a panel and then you can say this whole thing's a panel. Like
[00:27:42] , uh, like, uh, yeah, let's just get another color so I can show you what I'm talking about. Like, right. Cause like, it
[00:27:50] 's fine. I'm not going to go into this anymore here, but, uh, yeah, I, I kept on that. We've been here before. I'm
[00:27:58]  trying to, I wonder what I said that was so terrible about HTMX here, but I, I, I, you could tell why, because of my past experience
[00:28:07] , I was not terribly excited. Um, so to speak. Uh, but is UX the important debate? Well, we'll, we'll get there. Okay.
[00:28:17]  Let's, let's, let's, let's, let's keep this rolling a bit. Right. Um, where I was getting to here is that, and I
[00:28:26]  think it's about, where do I add the list? Um, all of this stuff made us ripe for this change, this change to client-side rendering. Cause
[00:28:38]  it was, and single page apps cause it was way, way, way, way, way, way, way simpler. I don't know how to impress how simpler it
[00:28:45]  was because you essentially just started with a blank page. You didn't have to need a server. You literally just had a page is, you know, index, HTML loaded
[00:28:54]  JavaScript, and then it handled everything. There was no server back and forth, no serialization of state to maintain it or any kind of crazy stuff. All you needed was
[00:29:04]  a restful API and great timing. Cause the backend guys are like, God, get the state out of here. You know, everyone, we want microservices and
[00:29:11]  distributed architecture and stuff. We're just like, it was like perfect timing, um, of like all these things coming together. Um, and single page apps basically finally let
[00:29:25]  interactive apps be interactive, maintain that state. Cause before trying to maintain state was a pain, like just, I can't get over it. And it was more than
[00:29:37]  that. It was awful for authoring. You know, um, that's, that's enough of the history lesson right now. Um, but where, where I
[00:29:50] 'm going to, this is I want to go, I want to go back and for, and look at like, what, what, what was Rich Harris's complaints about
[00:29:58]  MPA here? Like, cause. Okay. I guess, I guess I should skip ahead. Uh, you know, before we get here, actually, sorry, I
[00:30:05] , I, let me do this. There's been this recent conversation. Um, see if I can do this and I just, I'm going to give a bit
[00:30:15]  of one of my talks here. Um, because you might've been hearing about MPAs again, because of this like whole zero kilobytes of JavaScript thing. And
[00:30:29]  let me, I want to do a bit of an explanation here. Cause I, I've kind of set up why single page apps came in and what I'm kind
[00:30:37]  of skipped over is they became omnipresent over the next decade. Things like react became possible and it's pretty much what we've been doing. Sure. Sites that
[00:30:48]  needed it or, you know, were too slow to move off stuff, didn't move to single page apps. But what was great about the technology around these single page app
[00:30:56]  tech, uh, for things is you could just embed them on old server rendered pages. I spent my early, like I spent around 2010, I was just putting knock
[00:31:05] out apps inside older server rendered apps to get, you know, you'd render most on the server and then you render the interactive stuff on the client. But over time,
[00:31:15]  single page apps have kind of getting to this point that we're having that pushback. So, um, I, I, this talk is me talking a little bit
[00:31:24]  about that pushback. Okay. So benefits of single page apps. Um, we'll dig into a little bit here as well, but let's, let's just,
[00:31:33]  let's just get rolling. Okay. So, sorry, I keep on interrupting myself because the reason I want to talk about this is this idea of zero kilobytes
[00:31:51]  of JavaScript is, is kind of, I mean, what is this? Zero KV is not a goal. It's a section in his, this talk. Um,
[00:32:02]  uh, I, I think I wouldn't even be surprised. I think I saw this. I was like, what's going on here? Uh, whole JavaScript be
[00:32:16]  left behind. Got all the, all the bait titles, zero, the zero JS lie. Whether your vibe is a cherry red muzzle. Oh man. I, I
[00:32:27] , I think this topic is, is pretty hot right now. The same way HTML and CSS is zero kilobytes of JS sounds great for some things. It probably is
[00:32:35] , but I, I'll put it frankly, I don't care. The bat. Yeah. We're going to see this narrative a lot because I think what we
[00:32:43] 're getting to right now is kind of a counter pushback, um, where the idea behind zero, the zero kilobyte JavaScript movement is that it's opt-in
[00:32:54]  and we're seeing pushback now because zero kilobytes could never be the actual goal. Um, so to speak, like let's skip back here. What does
[00:33:05]  he say here? What's richly JavaScript is not a goal. The goal is to meet some user need, or if you're cynical to meet some business need by way
[00:33:13]  of meeting some user need. And sometimes performance is a factor in how effectively you can meet that need. We've all seen the studies showing that for every millisecond, uh
[00:33:22] , yeah. So this is, this is the topic I, this is why MP, this is why MPA versus single page app is even a discussion point. Okay
[00:33:32] . Yeah. And that's the way you should take it. That it is. I'm just catching, let me catch up with chat here. Uh, what, what
[00:33:47]  was it? RSCs or Remix are much simpler, much simpler than what? I, and I think I'm missing some context. Um, okay, whatever
[00:34:07] . Uh, um, I should check my Twitch sometimes. Oh, I see. For some reason they didn't come through. SPA plus react query plus triple is the
[00:34:21]  simplest DX I've ever had. That, that was the, that was the comment here. It is. Yeah. Gotcha. Yeah. Yeah. I know this is
[00:34:30]  commenting about what I've said a few minutes ago, but there is something simple in, in having, it's almost like a mobile app. This is the, this is
[00:34:39]  what we're modeling after to understand what I'm about to show. You have to understand that the goal in the early 2010s was to remake mobile on the web.
[00:34:48]  Um, essentially stuff was getting losing out to mobile sites. You know, they were starting our mobile web, um, not mobile web, but mobile apps are starting to get
[00:34:57]  popular. People started thinking that was the experience that they should have on the web. Most people spend most of their time on their phones. All these trends are coming out and
[00:35:03]  that putting credible amount of pressure on building, which really pushed. Like I told you, all the pieces are right. Right. If you're going to have a backend
[00:35:12]  API, that's going to, you know, anyways, for mobile, you might as well have it also serve the web. You could simplify like backend costs this way.
[00:35:20]  All you need these API services, you know, there's a lot of stuff, but why is the pushback happening now? Um, let's, let's, uh
[00:35:29] , let's do that for a minute here. Uh, sorry. Full screen. Well, I, some of you probably see this before. This is the size of
[00:35:44]  page weight of pages. Um, in the last 10 years, roughly, we went from averaging about 500 kilobytes. And this is everything. This is images,
[00:35:57]  CSS, everything to now being over, uh, 2000. Basically we've quadrupled in the last, say 10 years, um, little less than 10 years. We
[00:36:08] 've quadrupled the size of web pages. And you might be like, who cares? And as you can see, images are actually make up the, a large
[00:36:20]  portion of the size. Um, JavaScript makes up less. So the mean for JavaScript is actually about 500 kilobytes and then CSS and HTML make up much, much less
[00:36:30] . Okay. Okay. So this is the part that always why I don't, I mean, yes, optimize your images. It makes a big difference, but like
[00:36:49]  this is, and this has improved over time, but I love Addy Osmani has, has these articles. And I think he recently did a video, um, talking
[00:36:56]  about the cost of JavaScript. This is from 2017. It's a little outdated, but it was showing that on the low end device, like the Moto G4 that they
[00:37:04]  use on all those test sites or whatever. And, uh, you know, what they consider a slow 3G network. The thing is on a slow 3G network
[00:37:13] . Yeah. 170 kilobytes of JPEG and 170 kilobytes of JavaScript, it's going to come in the same amount of time, but the JPE
[00:37:22] G can basically, um, decode and rasterize within a hundred milliseconds. Whereas this JavaScript on this device would take another 3.5 seconds. Like it doubled
[00:37:38]  the length. Um, you know, I, it, it's like, it's like basically 30 network aside for CPU costs, it was basically 35 times more expensive.
[00:37:49]  Um, this is, this is significant. It's like order magnitude difference when looking at the difference between JavaScript and, and like images. Yeah. Google fonts is also
[00:38:01]  a big weight. Um, which is interestingly not shown here, but yeah, that's an interesting one. And the reason this matters is I don't know, this is
[00:38:15]  from Alex Russell. So some people say I should take it for, with a grain of salt. Um, but if you look at it again, this might not be
[00:38:25]  you, but while devices have gone definitely more powerful over the years, the low end devices, the moto, like our moto E series or whatever, and our moto G4
[00:38:37]  from back when we were doing these tests and stuff are like basically the same power level. Um, and that, that takes us back to about an iPhone six. So
[00:38:47]  when you consider low end device categories, people are basically like the fact that devices got hugely more powerful in the last eight years is not impacting the low end. Okay. You
[00:39:01]  know, and this is what Richard was referring to when he's talking about Amazon and stuff. Yeah. Um, there is it for e-commerce sites, there is
[00:39:09]  a huge shown benefit of having faced, uh, faster page loads for SEO and stuff. This is, uh, this is, you know, there's no surprise here.
[00:39:18]  Um, it's, yeah, I mean, every company like this has the numbers. They kind of tuck them away. This is a study that Google did together with eBay
[00:39:31] . So like they were able to publish stuff, but like, there's a speed team at eBay that was like, literally like auditing that audits every, you
[00:39:37]  know, page. And when, you know, releases come out, looks for speed regressions and stuff. Cause it all impacts those sales numbers. Um, but it
[00:39:46] 's, it's, it's interesting because, you know, you can sort of say like, I'm not eBay. I don't, I'm not, you know
[00:39:54] , I'm not serving customers in, I don't know, somewhere Southeast Asia, you know, with these low end devices. I don't really care. Um,
[00:40:03]  but you know, I wanted to focus on the, the, the, the, the, the rate of the bottom here of how fast that's climbing versus how fast that
[00:40:15] 's climbing. It's actually the gaps bigger right now than it was before, uh, like, uh, you know, six, seven, eight years ago, but
[00:40:26]  again, not everybody's concern. Hey, I had this tweet ready. Right. But I already talked about the travel agencies site and I want to go back into this a
[00:40:45]  bit. Um, but I want to, I want to, there's one other aspect of authoring single page apps that we were saying a minute ago, how they
[00:40:55]  were simpler. And I want to show, I want to show you something. Um, this, I hand made this example, but this is the type of code I
[00:41:22]  was writing in 2012. I was, I was telling you about how sure some of us got the start on single page apps, but most of the, you know, early
[00:41:35]  days were the server rendered apps where you had to put your JavaScript on your server rendered app. And the reason I'm showing this example here is I actually, does anyone
[00:41:48]  know what we're looking at? This is this little pop quiz for the audience here. Looks like Svelte. Svelte doesn't want to look at, look
[00:42:06] , look at this. No, I, I, I wish I knew how to do, do polls. Is it react server components? You guys are killing me.
[00:42:17]  Close. It's, it's, it's, it's not a template level language. It's two templating languages. Yes. Bam. ERB. That
[00:42:31] 's one. What's the other templating language? I mean, yeah, HTML, but no, there's, there's two templating languages here. No. Raz
[00:42:50] or. It looks a little bit like Razor, eh? But yeah, no, it's it's, uh, so it's ERB, not Marco.
[00:43:07]  No, no, no, no. Thank you. And knockout JS. It's, it's ERB would knockout JS. So the ERB are these
[00:43:23]  breakout percentages where you go like, you got your Ruby code here, like each users and then like do user. And then, you know, you do this in a loop
[00:43:32]  and then you can put in, interject the values. And then around it, we have data bind for each users. You don't see the curly, uh, the parentheses
[00:43:40]  here, cause they were optional in their data bindings. But the second you had to do a property, you had to write them anyways. So technically these are actually
[00:43:48]  signals, but they're, they had a direct signal the way they did it. And then data blind click parent remove user is how you got out of this scope, um
[00:43:57] , to get up to, the room, like the, the parent level scope. Anyway, the reason we have a for loop over users here and a for loop over
[00:44:08]  users here is cause you'd, you'd render this as on the server in Ruby and it would generate the HTML with these data bindings in the HTML. And then when
[00:44:20]  you got to the client, the client would swallow the data binding and then, uh, like apply the JavaScript, but it needed to know what the render. So it needed
[00:44:30] , it needed like for each users and it would be destructive. It destroy what was there and replace it, you know? Um, but, uh, essentially you'd
[00:44:40]  kind of layer these template languages on top of each other. This is, uh, what would, uh, this example is knockout plus ERB, but people still do
[00:44:50]  this today with like PHP and Alpine. Um, yes. How did people live like this? Like, like this was the middle step. Like this was still prefer
[00:45:03] able to what came before it. What I was talking about where you had, you just shipped at the view state back and forth and did the partials. Right. Cause
[00:45:10]  the problem was sure. You start with something simple and it's like HTMX. You're like, yay. And then you have to build something real. And then
[00:45:17]  you're like, oh crap, I need JavaScript. So then you add some jQuery and then you're like, oh, my JavaScript is getting complicated. So then
[00:45:23]  you add declarative JavaScript and state, and then you're like, you're, you, you get here again. Um, so this, this was a time period.
[00:45:34]  Um, so this, this is, this is what happens when like you, it's, there's, um, you, it's, it's, it's
[00:45:50] , it's what I talk about when I talk about authoring two apps. Um, so single page apps got us away from this. We, we only had a single
[00:45:58]  model on the server and client, especially when we got to isomorphic single page apps, like next JS, SvelteKit and whatnot. Um, if you want
[00:46:05]  the server render them, it was the same logic. You didn't have to write everything twice. This, this, this is like the prime kind of example that I
[00:46:12]  want to bring up when I'm talking about this. Yes. Yeah. Yeah. Like this is a very common pattern in the early. Yeah. Yeah. This, this
[00:46:25] , this is hydration, like the way angular called hydration until like last year, like, uh, like it just, just server rendered and then wiped it out. Actually
[00:46:36] , angular is better than this. Cause you could actually not layer two things like this, both stages, like people talk about stuff being bad. Now, both stages were the
[00:46:46]  most horrendous time. Like I actually preferred this to what came before. As I said, the old update panels time period was like the, like the dark ages. Um
[00:46:56] , in any case, you know, let's get, let's keep on going. Um, so yes, single page apps are very good for productivity, immersive experiences
[00:47:13] , but they, they, they, they, they have this kind of manifest destiny. I call it, it's inherent to design, which is like what can be
[00:47:25]  sent to the browser shall be sent to the browser. Not the funniest thing is everybody has, um, a version of, of this kind of, you just need the intro
[00:47:41]  raw character. It doesn't matter what it is. Right. I mean, do people suddenly like this way better now that it's curly braces instead of angle braces,
[00:47:49]  right? Like I swear I've seen that. Oh, right. I have to get out. Oh, I don't want to get out of full screen mode. Okay
[00:47:58] . I'm doing it. I'm not getting out of full screen mode. I should have popped this into its own thing. Let's just go to Twitter for a second
[00:48:07] . I think one of my other bookmarks will show you what I'm talking about. These kinds of conversations are happening literally right now. Let me go to bookmarks
[00:48:14] . Uh, what do we got here? Here we go. Angular. Control flow. At for at this case, main defer loading. So this is the at, this
[00:48:32]  is the at symbol version of templating. Um, so that's, that's their blocked syntax. Let's go to Svelte. Um, let's go
[00:48:44]  tutorial. Uh, um, um, logic. Hashtag if, I guess it's not percent signs. It's hashtag. Like you just, you, colon
[00:49:02]  sometimes. Yeah. Okay. Anyway, you, you, you, you all get what I'm getting at, right? Yes. Yeah. I mean, that's
[00:49:19]  the thing. We'll battle this. I agree. That is way better, but you know. week four. It's so nice because it's written twice. That
[00:49:37] 's the thing. My point is no one is going to agree on this stuff. Right. Right. See, some people think V4 is the most elegant one. When
[00:49:50]  I think of V4, I think back to, like almost like data bind, like I, you know, overriding things, I think actually personally, out
[00:49:57]  of all the options, I, I dislike the directives the most because it overrides the meaning of HTML attributes, but you know, as I said, everyone has
[00:50:07]  a perspective there and they're not, they're not as composable as well. Yeah. Anyway. Um, like I, I, you can take, there's both
[00:50:20]  different syntaxes. And you can take different patterns, like the directives versus the, the in template of the components, and you can make ugly looking examples with all
[00:50:31]  of them. Um, that's something to do for fun. Cause actually funny enough, the JSX, like the component version is in my opinion, the least offensive in
[00:50:42]  on average across all the situations. It's the, it's, it's the most, it's more offensive on the basic case and it's, you know,
[00:50:51]  than other ones. It's probably the most, but it, it, it actually, when you consider all the different scenarios, in my opinion, it's, it's
[00:51:01]  the, it has the most upsides, but I would say that one day. Well, I mean, I, I suppose they could be in a certain way when
[00:51:15]  I mean composable is both like, if you both in the sense of like taking a four component and then like building, um, uh, pageant, virtualized list
[00:51:25]  component using the four component as its internals. And then like being able to provide the same API. So it's like idempotent so that your own four
[00:51:34]  component has the same API as the four component that consumes the other four component. But yeah, I'm getting a little off the deep end here. Yeah. Yeah. Oh
[00:51:44]  yeah. It's in the browser templating thing. Dom parts. Yeah, yeah, exactly. Okay. So we're getting, we're getting a little sidetracked
[00:51:50]  here. Okay. But what I want to focus on here, cause we're talking MPAs and single page apps is that what can be sent to the browser shall
[00:52:02]  be sent to the browser is kind of this manifested destiny. And we've been trying to fight this for a long time. And there's some fundamental things that actually make
[00:52:21]  this, um, difficult because obviously when we compare it to single page apps to server render page, like just pure client renders single page apps to server render page. There
[00:52:36] 's a huge difference here between like seeing the HTML and seeing that content right away versus waiting for down, first downloading the HTML, then noticing there's JavaScript, downloading that
[00:52:49]  JavaScript, evaluating it. And then like fetching the data and then rendering it. Like there's multiple, there's like three round trips on the client side where it's
[00:52:58]  like one round trip on the server side rendering. Obviously we've solved this piece with, you know, meta frameworks where we can pre-render the page or like,
[00:53:10]  or render on demand, like next, next remix, some file kits, all start exactly. So you like, because of, you know, solving hydration, because of being
[00:53:24]  able to author in a single app, because being able to, you know, have this pre-rendering, we're kind of in a zone where you're like,
[00:53:31]  okay, we're pretty good, right? We can do everything. We have a decent authoring experience. We can do client side navigation, we're interactive. Um
[00:53:41] , and, uh, you know, we're good to go. But there comes this interesting thing because this doesn't actually change. Even when you server render a page
[00:54:08]  that is a client routing page and the hydrates, this part doesn't change. Yes, you see the content right here after, uh, download HTML, but it still
[00:54:18]  has to download the JavaScript, evaluate the JavaScript. It might, it doesn't have to fetch in the API, but this part has to run on the client before it
[00:54:27] 's interactive. And we call the difference between when you see the page and the JavaScript arrives and parse and eval as the uncanny valley. So this is why everyone talks
[00:54:36]  about hydration because your page isn't interactive isn't interactive in the same way during this, this zone. And it's a tiny piece of time, although it could be
[00:54:49]  pretty large. Sorry. If, if, if you, you know, go back to where were we? This, this scenario, right? 3.5 seconds maybe.
[00:54:58]  Um, cause that doesn't include data fetching. That's just, that's just literally just parse and execute time. And when I say interactive in the same way
[00:55:13]  as well, we'll get to that in a second. But what I want to actually point out here is in the process of getting our perfect apps that hydrate,
[00:55:26]  we often make our JavaScript bundles even bigger by server side rendering, because now we don't just need the code for future updates. We need the code to handle hydrating
[00:55:40]  the page as well. And in some frameworks, it's, it's only a little bit larger. Other frameworks like Svelte, uh, historically, although I
[00:55:48]  think Svelte 4 fixes this maybe, um, it was a significant difference in size, um, for hydration. You almost have a completely separate compiled code path. So
[00:55:57]  with SSR, yeah, we're seeing the content sooner, but we, because, um, because we're now waiting because we're a server fetching the data
[00:56:13]  before we send the HTML, I almost feel like I got Excalibur on this for two seconds, right? Let's just, let's just go here, right
[00:56:22] ? Cause how should we do this? Um, yeah, I'm just going to straight up show the, uh, show the difference here between like a timeline. Yeah
[00:56:36] , we're going to do two of these. The difference between our CSR timeline and our isomorphic SSR timeline. Cause the funniest thing is it varies on network
[00:56:49] , but I've shown that a client rendered app on a fast network is actually faster than an SSR, um, SSR can be because, um, in terms
[00:57:00]  of actually showing the page because of a couple things that can happen. So in a CSR app, you, the first step here is this marker where we're like,
[00:57:15]  let's give it, let's make the markers blue. And we're going to say something like along the lines of like server or receive request, right? Okay.
[00:57:34]  And that marker is going to be the same roughly for both of these. Let's get it, let's get it to the end. So this is when the server receives
[00:57:44]  the request, right? Now the next thing that happens on a CSR, which is really quick is it finds a static index HTML page and almost immediately after here,
[00:58:00]  we'll draw another line. I don't know if I'm questioning my blue right now, but this, the, and we'll make it another color. We'll
[00:58:16]  make it red or brown. Let's make it brown and we'll say send back HTML. Okay. I feel like I should just duplicate all of these. And then
[00:58:42] , and then basically when the page gets that HTML back, so let's, let's give it a little bit of time. Sorry. I didn't mean to, there
[00:58:51]  we go. Then what happens is it sees that it needs JavaScript. So I'm not going to bother doing the full send receive here, but let's say I'm just
[00:59:02]  going to make like round trip JavaScript here. Right. Let's go round trip. Why is this one? Oh, it's cause I'm using a different tool.
[00:59:12]  I'm sorry. Let's go round trip JavaScript. Let's just go JS ready. Okay. Okay. So this is like when it sees it in the HTML,
[00:59:33]  sends it back, parses and does this. Okay. Let's say that's going to be X and then ready is like it's parsed, but it hasn
[00:59:56] 't executed everything yet. And then the next stage here is going to be, oh, sorry. It's going to be I said control stop, stop it. Okay
[01:00:14] . The next page, then the next stage on the client side is going to be the, the data's back, right? So let's do, I'm just picking
[01:00:27]  arbitrary colors. Um, let's just go here and go. So it gets the JS. It runs a JS. It gets data returned. And then finally we add
[01:00:53]  our, finally, we add our green marker here, which is going to be like page ready. Now I'll move the bars around here in a minute. Um, I
[01:01:02]  just wanted to get page ready. Okay. Okay. Okay. So yeah, let's, it doesn't, let's just do this. So I think it
[01:01:35] 's a little bit shorter. Server render the page. Yeah. I'm going to have to move these along because the truth of the matter is the difference between this and this
[01:01:54]  is usually like that. it's actually partially judged by how far it is from here because it is waiting, but there's a certain amount of work that got done initially
[01:02:10] . Whereas I'm going to have to move some of these around because whatever the order is different. Okay. Now don't get me wrong. These can, these points
[01:02:37]  are the same essentially, but they, they, they move around. Okay. And if you're not, if you're wondering what I'm doing here, what I
[01:02:44] 'm doing here, this is CSR app, CSR, and this is, so I'm gonna say CSR spa and this is SSR spa, like in,
[01:02:59]  like a typical next JS or spell kit or remix. Okay. And obviously the time to data return is going to impact the, the HTML rendering. And I, or
[01:03:17]  actually let's, yeah, maybe I should just spread these all out. Let's just spread them out. Let's say pretend this one takes a bit longer here.
[01:03:27]  This one takes a bit longer here. These ones let's move. If our scale is to here, data rendering is going to be there. It's going to look
[01:03:49]  more like this. Data return is going to be more like All right. I'm doing them to be roughly equal, but you can, you can see that even there
[01:04:19]  are things that get shorter like the data, but then server rendering gets longer and then yeah, something like this. Okay, cool. I'm back. Okay. Sorry for
[01:04:42]  that. That was a longer explanation than I wanted. SSR with hydration without stream is just wasting time. Parsing is still the most advanced part of performance is for
[01:04:53]  dynamic language JS because compilers, uh, have the 20%. Right. So this is an interesting idea because if parsing is so expensive, who gets to parse the
[01:05:01]  JavaScript first? Right. The one who sends back the HTML document sooner. But in this case, they have to wait for all this data to, to come back, which
[01:05:11]  is pretty long. Um, and in this case, they could do the data fetching on the server before they send the HTML back. But my, my point is
[01:05:20]  generally speaking, as you slow down the network, there will be bigger benefits for the SSR, the CSR. But as you speed up the network, then CSR
[01:05:31]  can actually be faster than SSR. It's, it's an interesting thing. We don't care about the speed though. Right. This is not what we're
[01:05:38]  here for. Um, I want to, I want to, we're more interested in the fact that it's not a free win for SSR. And yeah, the
[01:05:51]  data you find on the server, you need to be able to use it for hydration. So you end up sending these giant, giant blobs of HTML are in the HTML
[01:06:00]  of JSON data so you can hydrate it. So you actually increase your server rendering cost and over the wire cost as well. This is next data, but it doesn
[01:06:08] 't really matter. We call this a double data problem because you have to send this data both as JSON and as HTML. Right. So this all kind of comes into
[01:06:20]  hydration. Um, problem was it still is client side hydration. Okay. So So the main issue for this is repeat first TTI, which is, sorry, to
[01:06:44]  fix the first paint, but still requires of jail and defecting. Yeah. Yeah. Um, so there's ways you can address this like, um, and that that
[01:06:56] 's largely what this talk is about. I, I, I, I'm not going to go as far into the, the deep end on the drawing and stuff, but
[01:07:04]  I wanted to talk about this because in, in order to enter understand why this whole conversation is happening is there's money in the web, right? There is money in
[01:07:18]  the web. Okay. We, we, we, we, we, we, we saw it here, right there. There's money. So when you can't like
[01:07:29]  have basically stuff, places like eBay who cannot move to like, they tried, we try to verify, can't move to something like react because it is too slow because
[01:07:40]  of all of that, because you know, this whole hydration thing, the, like all the stuff that I was just explaining people are incentivized to make faster solutions. That
[01:07:54] 's why everyone is talking about this, right? And why zero kilobytes of JavaScript, you know, became this kind of thing because you know, there's,
[01:08:00]  there's, there's actually, you know, companies who are interested and have never been able to move off MPAs. So in that sense, MPAs have
[01:08:08]  not been dead, not, not at all, not, not at the largest scales. And the interesting thing is that the, the, the, the more interesting question
[01:08:25]  is philosophically should we, you know, believe in what can be sent to the browser, shall be sent to the browser, right? That's kind of the question
[01:08:40] , right? Because MPAs are taking a hard line. They're like, no, no, no. If, if you're not going to need this, you
[01:08:56] 're never going to need this. And they can, they can do that because the page reloads, so to speak. Whereas, you know, single page apps,
[01:09:05]  whether they're server rendered or not, kind of, you know, take this idea of, oh, we'll just lazy load it as we need it. And, but
[01:09:12]  they, there's still that initial overhead cost. And this has been kind of the battle back and forth. Now, there's ways to address this without actually making single page
[01:09:21]  apps MPAs, right? You can always ignore it, right? But I, I think that, you know, you've seen a lot of this rhetoric in
[01:09:31]  recent frameworks. What do you think about concerning the minimum on the thing? We run scripts merely, make fetch requests and directions, follow, lays one. Yeah. I mean
[01:09:45] , you can, you could preload some stuff from the client, but like, how should I put it? Like, maybe I should go back to my diagram here
[01:09:59] . Like you're still like, yes, in that case, you've shrunk this down. Like you're shrinking this down a little bit. So like this moves
[01:10:14]  down. So yeah, I mean, the network is still all like there's benefits to SSR when the network is slower. Plus being able to actually see the content,
[01:10:27]  like when it loads, there's, there's little techniques, like streaming is probably the best example of how we can improve. And I'll show streaming in a minute.
[01:10:38]  Um, but let's just keep on going. Um, so things you can do without actually changing the architecture, you can try code splitting, lazy loading parts of code
[01:10:46] . The only thing I'm going to mention here is that code that is needed for that initial page to show hydrate can't be code split out. Even if it's
[01:10:53]  code split, you'll, you'll pull it in immediately. You can make placeholder states like graphics and have them swap. But the way that a modern app works where
[01:11:02]  it's declarative and it like hydrates lazy loading will shrink your code. But, um, even, and it's a good step, like an essential step,
[01:11:13]  but it's, it's, it's still not going to be enough, uh, in a lot of cases. Use smaller, faster frameworks. I always like this image
[01:11:24]  because it shows that like, this is like the Svelte scaling problem where Svelte starts as the blue line here and ends up getting to the blue line here
[01:11:31] . Um, this is from that to do MVC comparison I did a couple of years ago based on Evan Yu's work. Um, I think Svelte's made
[01:11:38]  some improvements here probably, but, um, generally speaking, most frameworks have linear amount of components. So basically over time, it's the components, not the framework size that
[01:11:48]  end up mattering. It does take a while. Um, and you can see where the reacts curve, even at like eight, like at a reasonable size, no
[01:11:56]  one's catching up to them. Do you know what I mean? Like, but you know, for a lot of other ones, you, we, we could get to
[01:12:04]  a hundred kilobyte range at around what I called 80 components, but, um, there's other, you know, approaches. And the other one you're going
[01:12:15]  to hear a lot is progressive enhancement. Stuff like remix talks about this a lot. We're like, Oh, you can interact with the page before the JavaScript loads. And
[01:12:23]  then like, it'll just do the native behavior. Sure. But the, the, the native behavior isn't really the desired behavior necessarily. I always bring up that,
[01:12:32]  that example of, uh, like someone on the slow network, you know, the same person I showed at the beginning with that seven seconds weighed on that 170 kilob
[01:12:41] ytes. Hopefully it's only 170 kilobytes. Right. Um, and and they click half a second too soon. And instead of getting the client side re-render
[01:12:57] , they re-reload the page and experience that whole seven seconds again. Right. Like if they'd waited half a second longer and it finished hydrating, it would
[01:13:05]  have, they would have just got the much more, you know, speedy client side, um, navigation. So yeah. Uh, yeah. And we can do
[01:13:21]  smart stuff like change the order we hydrate stuff. Um, so that kind of helps, but it doesn't change what needs to be hydrated. Um, this drawing
[01:13:35]  is actually from Dan Abramoff. He was explaining to me how, uh, selective hydration worked in react 18. Um, and he drew these lovely images. Um,
[01:13:43]  but this, it shows it like what he's, what he's trying to say is like, if someone clicks down here and we're hydrating down there, it'll
[01:13:51]  actually throw this away and then start hydrating this way so that it can get to that click. Like it'll actually hydrate like, I think synchronously from the
[01:13:59]  click events so that it could like immediately respond to that portion. The thing is you have to remember is parent has to hydrate before child. So, you know, there
[01:14:09] 's smart things you can do to try and reduce the cost with things like concurrent rendering. Um, but there, there are trade-offs here, um, in the way
[01:14:20]  blocking works. Also being non-blocking is helpful, but you still have to worry about stuff like interaction to next paint. If you're like synchronously blocking even
[01:14:29]  a small portion here, um, while you're trying to like hydrate just what you need. So I'm going to jump, jump to streaming. We're hinting
[01:14:40]  at that. Um, the trick with streaming is you could send back the HTML body while the rest of the content loads. So in a sense, streaming actually looks a
[01:14:56]  lot like this because you actually see the loading spinner from the server. Let me see. Let me, I'm going to drop this one in here, but I'll show
[01:15:03]  you the, the demo here first. Here's a streaming demo. One on the left is right of streaming. The one on the left isn't. Okay. Let
[01:15:15] 's, let's see that again. So the other one waits till the end to the show up. Do you see they both get the content at basically the same time,
[01:15:23]  but this, the streaming one, like the thing you don't see here is because the images load so fast. But if you think about it, I guess in this case
[01:15:32] , it wouldn't, there's no advantage, but the page is already warmed up. The JavaScript's already processed at the like time that this is like partially loading in
[01:15:41]  where everything here happens like at the end. So what streaming does streaming is basically almost identical where it sends the HTML back, basically at the difference of the JSRDs
[01:15:55] . The difference is the data fetching started here. So it's here. And then by the time it's returned, let's add the network cost. It's
[01:16:07]  like here, which means suddenly this becomes like that. It's like it should be very similar. okay. So yeah. How are we doing chat? Do
[01:16:59]  we have streaming declarative shadow DOM yet? That was actually something that we had complained about in the past. We actually brought it up with Google team. They were going to
[01:17:09]  look into it. Can you go one step further? No. Inline the JS and data into the HTML. So the cost of the first paint is the delta between
[01:17:25]  the SSR, HTML content, the JS content. Hmm. Inline the JS. It's interesting. I wonder how that the one thing about a lot of the optim
[01:17:35] izations that come around in this zone is, and I guess maybe it doesn't matter. It's like re-nav back. Like how do you bundle it so that
[01:17:46]  each page knows to inline it and then know where the source? Maybe, maybe it's solvable. There's limits to page size being benefit. I mean,
[01:17:59]  I, I, I think the key thing here, you can, you can work on like how to make it when from the HTML, how we can make it more optimal
[01:18:09]  here. But I think the, I think the biggest benefit is moving as much of the stuff to the server, right? If we data fetch from the client, even
[01:18:21]  if you shrink this a little bit, you're still like here, right? The reason this is so fast is because the data fetch actually finished here. Like it started the
[01:18:31]  same time as on this one. And then like it's cause it started here. And then similarly, the reason that both these two are fast is cause you responded here
[01:18:43]  and you started the client boot up. It's like, if you can move the first events furthest back, you, you kind of block, you reduce the, like
[01:18:51]  there's, there's blocking processes here. Like there's all these things have blocking processes. But if you can somehow bring the first client interaction and the first, you
[01:19:03]  know, and do as much as you can off the first server interaction, you, the rest of the times will have much more impactful drop up. That's why streaming is
[01:19:11]  compelling, but anyway. Now, yeah, the pages, like it depends, like I should probably, there's a mention about the pages become ready at the same time
[01:19:40] . Streaming is like, it's the same thing. I can, let's see if we can kind of make it so that the pages, like I'd have to
[01:19:49]  move all the bars around to make it make sense that the pages are ready at the same time. Um, you, you know what I mean? Like data return would
[01:20:01]  have to move way out here. And that, um, doesn't make sense compared to the client side rendered story because data return should be sooner. And then you're like
[01:20:10] , well, but then the server, like we, we like to show them being the same streaming should have a slight advantage in depending on the latency of the data,
[01:20:22]  the more latent the data, the better advantage streaming has. So it's the difference between the latency between your data and your static contact or the speed of your server rendering
[01:20:33] . Okay, cool. Let's keep on going. All right. I know this is a lot of pretext to get to where we're trying to get to here.
[01:20:43]  Uh, show that streaming example one more time. That's actually not even where I care about streaming, honestly, sometimes because of the fact that you show the placeholder
[01:20:53]  means that like it's a little bit more jarring for the end user if it like flicks loaders. So like, especially if stuff's coming in quickly, but
[01:21:02]  the benefit of streaming is mostly the request long tail. The fact that like, let's say you hit a database a hundred times and, um, 1% of the
[01:21:13]  time you get a slow request for each request. So each service responds, um, like slowly 1% of the time, if you have 10 requests, um, suddenly be
[01:21:29] , and you, and you're not doing streaming, you're not like separating them. They're all entangled. Your, your slow is your slowest request.
[01:21:35]  So your, your probability of having a slow response now is 10 times lower. You know, it's like an order magnitude worse. Now it's like you might have a
[01:21:45]  slow request 10% of the time. And that's just because the, you can see like if, if you're hitting like 10 different services on your backend here, and
[01:21:58]  one of them is slow, you push this whole thing back here. If one of them slow, you don't push the whole thing back, you might, you know
[01:22:05] , push part of it back, but the page will get served, you know, hopefully it's not your key part of content, but the page will get served faster,
[01:22:13]  essentially. So it helps decouple and it lowers the risk. Okay. MPAs to the rescue, right? Not the, the, the unlikely superheroes, so
[01:22:28]  to speak, right? Cause MPAs actually changed that map. This is the stuff that we've been like looking at. I want to, I want to throw
[01:22:41]  something out here. the, this caching technique to a certain degree was available to everyone at different periods of times. The, the, the reason RC's focus on
[01:22:56]  it is because I think the approach that they've chosen with next to try and compete with static, they can sense it before you had, uh, ISG and like,
[01:23:06]  or ISR and like pre-static generation, all that kind of stuff. And the caches is our way of trying to be slightly more dynamic with it, but
[01:23:13]  it's like, it's because they're trying to get back to a basically static, uh, pre-rendering performance with, with this RSC standup. But
[01:23:22]  like, to me, caching, I, it's funny, I usually ignore it. It's like the last step optimization. It's like, I assume that every
[01:23:29]  architecture has the capability of caching, maybe some better than others, but the, the core piece, there's always cache misses and the core piece of the architecture actually
[01:23:38]  is much more defining than the cache behavior. Um, now, as it turns out, MPAs do have something going for them, which actually improves on the situation that
[01:23:52]  I've been painting here this whole time. Um, and that's that they, uh, uh, they don't need to know about, um, like they don
[01:24:07] 't need to persist anything. So, you know, if you have an app where you don't need app-like things, you can just reload the whole page and just
[01:24:16]  have these islands and you have way less JavaScript, only the interactive parts. Some people, this is where people start fooling things for PHP or they're like, yeah,
[01:24:28]  you know, I have my, uh, I, I, I have this custom Django backend thing, not even custom, whatever. Um, I, I've Dj
[01:24:37] ango backend and I'm putting web components on it and you know, it's kind of like islands, right? Cause like then I just render the HTML and then I have
[01:24:46]  these interactive islands, right? Not exactly. Uh, the thing is we've been able to insert parts of interactive JavaScript in websites forever. Um, and the thing is,
[01:24:57]  it's, it's not too hard, especially with web components made this kind of easier to have server rendered static stuff and then have, but you don't need web
[01:25:05]  components. You can just have client render the little pieces that, um, that come in. And don't get me wrong. Now that we are getting web components that can
[01:25:16] , would declare a shadowed on that could be server rendered and hydrated. But the second they go that direction, you need a special server rendering runtime for it. And you
[01:25:24]  basically have a framework. It's no different than next JS solid, whatever. So I'm not including that in that case because then you need to run JavaScript on the
[01:25:32]  server probably to generate it. I mean, you can, some large companies have done some clever things in other languages, but generally speaking though, the whole goal there was
[01:25:42]  to not to run JavaScript on the server. So the, this has been always kind of the blocker. What makes islands different from that is that the small islands are is
[01:25:55] omorphic. They are like the single page app islands that render on the server and hydrate in the client. Um, they're not just these things that flicker in
[01:26:04] . I don't have you ever been on a login screen where the log, like the, the page loads really fast and then the logging controls don't show up right
[01:26:11]  away. They like, they like render in. I've made those screens before. I'm not going to lie. Um, you know, just basically like a little client
[01:26:19]  app that loads in on the server app. Um, islands are not that they actually render ahead of time on the server and hydrate on the client and they do so
[01:26:30]  without looking like this, right? Like the reason Astro is so cool is because you get to just use the one system. So you have the Astro and then,
[01:26:43]  which is basically JSX. And then you have the, you know, your react components of a component, solid component, and you stick them in and then you use
[01:26:51]  them in and they just fit in and you don't have none of this like double for each garbage. So islands are pretty sweet and islands solve this issue because you just
[01:27:06]  never send a bunch of the stuff and which drastically reduces the page size. Um, what do I got here? Yeah, I, I, I, I've talked about
[01:27:22]  this before. I don't think it's terribly important, but I, I'm just going to mention it anyways. Islands can nest inside other islands. So as long as
[01:27:33]  you have a server layout and then you put a client island in it and you can pass server children to it with client thing islands in it. And what happens is the
[01:27:43]  server just renders everything in one pass in between and then the client hydrate the pieces they need. It doesn't go like back and forth between client and server because the
[01:27:53]  server is a continuous piece. It sees this full markup and renders, renders everything. And then the client just picks up the pieces that it needs to pick up
[01:28:02] . Um, so you can actually get really sophisticated layouts without sending, it's not like you hit an island and like suddenly the whole page is in JavaScript again. This
[01:28:12]  is a common misconception. Um, where people are like, look, are, you know, I not to pick on anyone, but I've seen quick kind of like put
[01:28:21]  that thing out there. If you author with islands properly, it does not mean that suddenly it's like now you just like deferred putting on the react app. Now
[01:28:32]  you have the whole app, you know, hit the island full app. That's, that's not really how it works. If you have the type of app that would
[01:28:39]  benefit, you generally should be very aware of like, say the Astro Island boundary. And it's, you don't author your app the same way you'd author like
[01:28:48]  a create react app or next app. You don't just like go, okay, now we're at the react route react app, unless that's what you're trying
[01:28:55]  to do. But generally speaking, you get this benefit by having the server load the data, having the server essentially, you know, render the data lists and then islands just
[01:29:08]  getting the small pieces of data that they need. This is why we, you solve the double data problem because you don't need most of the data. You only need the
[01:29:15]  data that you pass to the islands. And so drastically shrinks the double data drastically shrinks the hydration cost. And, uh, I don't know if I have
[01:29:23]  it here yet at eBay, we were seeing this like an 84%, uh, you know, 80, 72, the worst one was 60 here, um, percent code
[01:29:32]  reduction by using islands. Right. Are we talking about Jamstack? No, we're talking MPAs versus single page apps, but we're, I'm,
[01:29:44]  I'm talking about the benefits, why people basically at the start of, we talked about why MPAs suck and why SPAs are good. Then now we're
[01:29:52]  talking about why SPAs suck and why MPAs are good, um, is the best way to put it. Right. There's been a real back and
[01:30:03]  forth, but yeah, I'm just, yeah. Yeah. And MPAs with streaming is actually really, really, really good because if you think about it,
[01:30:21]  we'll, we'll talk about that in a bit, we're, we're getting there. Okay. Anyway, MPAs solve the JavaScript problem, hydration problem.
[01:30:34]  That's single page apps app. It's, it's basically that simple. Islands is one way. Marco was having something like islands that were automated. Um, there
[01:30:44] 's things like quick, like resumability, which is this idea that instead of hydrating, we serialize the data and then, um, just run as, run
[01:30:57]  it from continue where we left off. Again, what does that do? Well, it lets us reduce this time, right? Resumability is like shrinks that
[01:31:11]  time to, to basically to, to almost nothing. So it is attractive because you can see in all of these, what resumability does is actually move the green
[01:31:26]  line to the next closest thing, which means in some places, um, it's actually more considerable, like, especially for SSR apps with large amounts of hydration like this
[01:31:40]  client side, there's no resumability. So forget that this one's streaming. Resumability has a benefit still, but maybe slightly less because the, the,
[01:31:50]  the, you get to start it soon, but basically the resumability is moves to the last end down a little bit. There's still some. Yeah. So
[01:32:00] , but so the, this, this, this will help with the hydration part, um, as well. Uh, but there's also a trade off on some amount of
[01:32:16]  trade off on serialization and, uh, you know, the thing that I was going to mention here is that most quick apps today are actually MPAs still because
[01:32:27]  the way they do that really granular, uh, lazy loading and stuff, um, and code reduction, the second you're in a client side app and you render it,
[01:32:38]  go to the next page and you have to render it all in the client, suddenly you got to pull all this code in and, uh, which could be fine. You
[01:32:45]  could say now is when I need the code and I pull it in. But generally speaking, I've seen that most, uh, quick apps that I've seen have
[01:32:51]  actually been MPAs rather than using the client routing just to get, because most of the code on an initial page load, you'd never need in, in the client
[01:33:00]  anyways. So it's weird to go from something that has basically no JavaScript, um, and no, no hydration cost, um, to something that, uh, um
[01:33:12] , you know, suddenly needs all the JavaScript even for the static stuff. So yeah, it's, it's interesting. And the other thing I want to mention about res
[01:33:25] umability is like lazy loading aside, um, the total amount of JavaScript between resumability and islands might not actually be that different. Um, depending on how the
[01:33:35]  islands are authored, because if, if like, yes, if you, if you do lazy loading, um, and you don't interact, then yes, you're
[01:33:43]  saving shipping the JavaScript, but most of the time, because you don't want to wait shipping the JavaScript, you want to load it eagerly anyways. Um, you're
[01:33:50]  probably going to load that JavaScript anyways. Zero kilobytes isn't really a thing here. So like, even if you start at zero, like islands, you can
[01:33:58]  lazy load islands, it's the same thing. You just like realistically, you're not going to lazy load a lot of the stuff. So I don't think the JavaScript
[01:34:03]  size win is actually where resumability is interesting. It's the execution, um, win, uh, on the hydration, but there's an interesting question of that.
[01:34:14]  If you eliminated say 80% of your hydration already, um, how expensive is the last 20%, not sure, but Okay. We're not ready for this slide is
[01:34:27]  what I'm going to say about this one. So I'm just, no, I am going to, why can't it, where is it? I'm going to
[01:34:40]  get out of full screen here for a second. Um, and up till now, this has been the conver, been the conversation, right? Um, we've,
[01:34:52]  we've kind of gone from MPAs to single page to people pushing MPAs again. And to be fair, people on the single page side of the discussion are
[01:35:01]  pushing back. Right. Right. And, and, and, and there is a lot of interesting trade-offs and stuff here. Like, actually my favorite talk about
[01:35:17]  the trade-offs on like, is, is this Rich Harris talk? So you think you know wigs. Do you really? Just skip this ad. Put on
[01:35:30]  chat. There's an active debate happening in front-end circles about the right way to build websites. And like most front-end debates, both sides are really attacking a
[01:35:43]  caricature of the other. On the one hand, we've got advocates for what is often referred to as modern web development. On the other hand, we have people who
[01:35:49]  look at the state of modern web development and argue that it's time for a bit of a come to Jesus moment about the path that we're on for brevity.
[01:35:55]  I'm going to call these camps, the modernists and the traditionalists, but I don't want you to read any judgment into those terms. It's kind of interesting
[01:36:01] . Cause he, I feel like when Rich made this talk, his audience was like the people, not the JavaScript MPA people, but like the PHP MPA people.
[01:36:11]  Right. And the, the thing is since then we've seen the JavaScript MPA people kind of come back around. My goal in this talk is to try and tease
[01:36:25]  out some of the claims and counterclaims and present. I'm trying to remember there was something that I thought was pretty relevant here. Cause I think it's about
[01:36:33]  here. Yeah, let's go. ...of the browser's behavior in a way that's at best disorienting and at worst exclusionary to people with accessibility requirements.
[01:36:42]  Normally on the web, if you middle click or command click a link, it will open in a new tab on this food delivery website that's ignored. It will navigate
[01:36:50]  in the current page instead. If you then click the back button, the layout will jump around for a bit before a nausea inducing scroll back to where you were.
[01:36:57]  There's lots of these little accessibility details that SPAs often get wrong. Focus management, scroll management, navigation announcements, page titles, command click behavior that collectively make the entire
[01:37:08]  web a less predictable and less accessible medium. All right. So he's talking about how basically single page apps, um, aren't all good. So he's,
[01:37:18]  he's adding actually another argument to this, um, talking about accessibility. Um, be fair. Yeah. We shouldn't accept that. I picked real world examples, albeit
[01:37:30]  more or less at random, because we need to recommend the fact that single page apps have kind of ruined the web. So the backlash to modern web development is understandable,
[01:37:39]  but it's important to remember that SPAs do in fact solve some real problems with the traditional approach. They also give you new capabilities. Here's something you can't do
[01:37:47]  in a traditional app. You can't navigate from one page to another while continuing to play media. In an SPA, that's extremely straightforward. Here's another. You
[01:37:56]  can't use client side state management that persists across navigations. In this app, the first load contains a subset of my data. If I scroll, I load more
[01:38:04] . If I then click into one of these items, then click back, I should be at the same place in the list, even though a fresh page load would exclude
[01:38:10]  everything except the first tranche of results. This sort of thing is a little tricky to pull off in a single page app, but it's essentially impossible in a multi-
[01:38:17] page app. Or consider transitions. Native app designers understand the importance of motion and object constancy in user interfaces. But on the web, we tend to teleport instantly from one
[01:38:27]  place to another, not because it's better, but because that's all browsers are capable of. In a single page app, we can change that. I should note
[01:38:34]  that there's a proposal in the works to add navigation transitions to the platform. And it often gets brought up in these conversations. But look, I'm glad that it's
[01:38:42]  happening. But don't imagine for a moment that it'll be as powerful as single page app transitions can be. Okay. Excellent. Something that very often gets overlooked whenever
[01:38:52]  we talk about performance and JavaScript bloat is that the main culprit isn't front end frameworks, it's shitty ad tech and other third party JavaScript. In a single page app
[01:39:01] , you only have to load those lousy scripts once. In a multi-page app, you have to load them for every single navigation. Even though the scripts are
[01:39:08]  hopefully cached, you still have to evaluate them on every page load, which gives them plenty of opportunity to block the main thread and degrade the user experience. So
[01:39:15]  let's look at some of the pros and cons of these two approaches side by side. In particular, let's look at the MPA advantages. All right. This
[01:39:23]  is a good list. I'm going to go back here. But you see the conversation here. He brought up some good back and forth here. And then the rest of
[01:39:37]  his talk, he shows how working with single page apps can address a lot of these shortcomings essentially. Side note, I'm not saying spas don't work great
[01:39:57]  with quick. I'm just saying that like, it's almost counterintuitive. The the what I'm okay, anyways, back to this whole MPA spot thing
[01:40:21] . He brought up some really good points. And I think the interesting one for me is that, and I think a lot of people get really focused on it. He
[01:40:32]  brought up three things. He brought up first that the video player that doesn't persist, right? So having persistent DOM element, he brought up the trend. The third thing
[01:40:45]  he brought up, I think, was the transition where, which is similar idea where you move between pages and kind of had that smooth feel of like having the same element
[01:40:53] . He brought up the scroll state in, you know, like you down like 25 things in an infinite scroll. And then like, how do you get back to that state
[01:41:09]  when you click into something and navigate back? And the truth of the matter is you can solve all those with an MPA moving forward, perhaps. And that's what
[01:41:26]  the view transition API talks about. But we need to look at the view transition API, I think, for a moment to really, you know, understand what that looks
[01:41:39]  like. Because this is where things start getting a little muddy. Because on the single page app side, yes, Rich is right. You can have progressive enhancement to help with
[01:41:50]  resilience. Well, actually, let's see how typically poor initial page. Let's see. Actually, I want to see what he actually says to address some of this
[01:41:58]  stuff. Yeah, yeah, yeah, yeah. He's talking about each point. Transitional apps being the best of both words. Does he ever go back to that list
[01:42:07]  again? I'm trying to remember. It's been a while since I watched this talk. It's it's just that like, okay. I want to talk a
[01:42:18]  little bit about what transitional apps look like in practice, particularly as it relates to Svelte. Okay. Maybe I jumped too far. Realism and modernism. And
[01:42:28]  it turns out that the interior design community has thought about this to describe all these various techniques. So at the risk of being all XKCD 97, maybe there's a
[01:42:38]  new acronym that we could invent. Okay, so just how far you can push that. Sorry, I went too far. If you manually implement, I'm going to
[01:42:44]  get into this later. That shit might have sailed. I do need to take a moment to shout out to projects like Phoenix Live View, Stimulus Reflex and so
[01:42:51]  on. Nevermind. I won't worry about, I won't worry about the specifics here, I think on the rest of Rich's talk, unless I can find it
[01:42:57] . It just, there's. Some people claim that you can get the benefits of single page apps without writing JavaScript. The thing in rail circles at the moment is HTML over
[01:43:12]  the wire, or Hotwire, which is a truly fantastic name. The idea is that the state and the rendering logic lives. Right. And then he shows GitHub being
[01:43:18]  really slow. Let's say you go to your issues list and click on one of the unreads. You decide you don't want to deal with it right now.
[01:43:24]  So you back out. Hang on a minute. It's still got the blue unread marker. Refresh the page and it's fixed. Fine. Actually, let's
[01:43:30]  close that issue. Hang on. We still have an open issue. Or do we? It turns out that when you send partial HTML updates instead of having the rendering logic
[01:43:40]  and the state live in the same place, you get inconsistencies everywhere. Yeah. I've seen PRs that have both the green open lozenge and the purple
[01:43:48]  merged lozenge on the same page. It's incredibly. Yeah, definitely. So he's talking about the problem with HTML partials. Okay. So he's
[01:43:56]  still picking apart that I thought there was an example here. Okay. You will end up serving data and component code that isn't strictly necessary. This is probably the least
[01:44:06] . No, right. I think we're done with this part of the talk. Okay, cool. Yeah. Yeah, for sure. And the, it's just,
[01:44:22]  sorry aside, I like quick idea we don't have to do MPA swap. We actually use both at different places in our apps. Yeah. And I think all modern
[01:44:28]  frameworks do this now to a certain degree, maybe not MPAs in a traditional sense, but they have their static pages. They just don't work as well.
[01:44:35]  But I would say like, this is something that a lot of the MPA first frameworks, like Astro as well do quite well, because you can always have a page
[01:44:44]  that is like a single page app and one that's not. But yeah, PFCAF solved the back pagination scroll problem. I think what we're getting at here
[01:44:58]  is that there's a lot of different zones of these solutions. that can solve these in slightly different ways. And I think this, we're about to get to the
[01:45:14]  zone where hopefully, you know what an MPA is and what a single page app is, because I think that it's, it's going to start blurring a bit
[01:45:22]  is the best way to put it. because let's talk, let's talk about the view transition API a little bit. Because I think, I think the arguments are
[01:45:36]  pretty strong on both sides, like until you get to that point, you can see that there's like a split on use cases. You can go like, okay, M
[01:45:46] PAs are very good for places that need load performance, places that, you know, you keep things simple, like, you know, content sites, but you know
[01:45:56] , not great for apps. And then, um, single page apps are good for apps, but then they have these other characteristics to make them not good for say, like
[01:46:05]  e-commerce and the other stuff. So you can kind of see that, you know, apps, I, you know, what was it like something for sites,
[01:46:12]  something for apps kind of split mentality, but no one seems to be satisfied with that, which is why we're, um, we're kind of like in this zone here
[01:46:25] , um, so to speak. So client routing to me, it feels like trying to beat the browser it's own game. Yeah. I mean, the thing is
[01:46:40] , but we want elements of that client routing. Well, those, those three examples that Rich showed in his talk are actually very, I feel like those are the ones that
[01:46:50]  are on people's heads, like persistent DOM element. Uh, yeah, it's actually two things, but it's two versions of persistent DOM element, uh, through
[01:47:00]  navigation, through animation and, uh, persistent state. Um, that being said, I don't think the list component is a good example of persistent state because something like that
[01:47:14]  is very, is relatively, I mean, there's obviously caches, but it's also relatively doable. Um, even when you consider that if you basically use the
[01:47:28]  URL, the URL, um, state as a way of managing that, uh, you could, you can, you can, you can solve, um, these kind of
[01:47:38]  pagination kind of concerns as well. Obviously infinite scroll is kind of a little bit more challenging, but it's not, it's not, it's not impossible to do
[01:47:48] , right? If you basically have a way to tell the server to render a certain range of stuff based on the infinite scroll. And then when the client hydrates or
[01:47:58] , you know, the interactive piece hydrates, it's able to be like, Oh, okay. I know how to load above and below. Like you, you got
[01:48:04]  it too, you know? Oh yeah. Yeah. Hit like on the video. It helps. I can't wait to see the whole state and consistency problem resurface.
[01:48:17]  If AFT can pop here and people forget why tools like Reactable in the first place. Yeah. Yeah. Yeah. I mean, that's real. I mean
[01:48:23] , I, I mean, I already showed it. There's, there's a stating consistency problem. There's the double authoring problem, double templating, authoring
[01:48:30]  problem, perhaps. Um, there. Yeah. I mean, almost all the same issues. I mean, it's a little bit nicer this time around, but it's
[01:48:39]  very similar things that got us to go to the single page apps in the first place, but problems we over banked on single page apps. Like let's face it.
[01:48:47]  We, we probably over indexed on it and it's good that we're having this reset. Okay. So I'm actually got another rich Harris talk. Getting a
[01:49:03]  little spicier. This is the first opinion that's probably going to make people yell at me when the recording of this goes on, on YouTube, um, in a couple
[01:49:10]  of weeks. NPA are dead. So for those of you who are captives of web dev, Twitter, let me offer some definitions. A multi-page app
[01:49:21]  or NPA is what people used to call a website. It's an app where every page is rendered by the server. And if you navigate between pages, the browser will
[01:49:28]  go back to the server, retrieve some fresh HTML, unload the current document, and then create a new document from the new. Now advocates of the multi-page app approach
[01:49:38]  have made the following claims. NPAs are faster because you don't need to load JavaScript. NPAs are more accessible. NPAs are less buggy
[01:49:47]  and NPAs can work without JavaScript. And in return, the single page app cam says that SPAs are faster because even though you do need to load JavaScript, you
[01:49:55] 're probably going to have to load some JavaScript anyway. And this way you only have to load your analytics or whatever once instead of every single page load. And subsequent navigations
[01:50:05]  are certainly going to be faster because it's much easier to smartly preload data. And you're not recreating the document from scratch on every navigation. SPAs
[01:50:14]  allow you to preserve state between navigations, such as the scroll position of the sidebar or the video that's currently playing. In an SPA, navigation is just like
[01:50:23] ... SPAs give you a unified development model. Instead of having one language for your HTML and... Yeah, he's still talking classic the second. ...the modern frameworks
[01:50:33]  like Next and Capronones. But this isn't why I'm... And there'll be quick to point out that this will turn your Astro app into a single page
[01:50:41]  app. In the words of Nate Moore, UI persistence has surfaced as a clear missing piece in the full Astro story. Client-side routing is currently the only
[01:50:49]  way to achieve UI persistence across navigation. And there'll be quick to point out that this is opt-in, it's not the default, but here's what's going
[01:50:56]  to happen. They're going to build this thing and they're going to knock it out of the park. And if it's a simple configuration change, then people will
[01:51:02]  try it even if they don't need UI persistence. And they'll discover that for the very small price of a client-side router, their apps suddenly have a nicer user
[01:51:10]  experience. I would not be surprised if the default was reversed in Astro 3 or 4. So on the Skelkid side, we use client-side router
[01:51:19] . Okay. So... That was the comment that started this whole thing, the MPA is dead thing. Because I think this is where a lot of the back and forth
[01:51:33]  kind of confusion is. Sorry, just checking chat here for a second. What do we got here? It's also the Kent C. Dodds article, "We
[01:51:40] b's Next Transition, that it compares MPAs, spas, and progressive enhanced versions each. Obviously, the collusion is user-mix." Oh,
[01:51:45]  yeah, yeah. That's actually the best thing about that article. Kent does a brilliant job. Can we share that in chat or something so people can see it?
[01:51:55]  It does a brilliant job of... whatever. Next. Transition... PEMPA or something. I'm just going to put that in. Or PESPA, yeah
[01:52:07] . The best thing about this article is all of these diagrams that he does. This article is just worth the read, just to look at all of these diagrams. I
[01:52:25]  have to admit, Ken, I'm not convinced. I don't think progressive enhancement is that... it's... how do you put it? It's important, but it
[01:52:33] 's like a baseline functionality. It's not an architectural thing. It's like... it's being a good web citizen. It's like accessibility. I don't think it
[01:52:44]  fundamentally changes the web architecture, but these diagrams are just wonderful. So, yeah, do check it out. Thanks, Dev, for sharing it. Yeah, okay,
[01:52:59]  so... I guess the question is... getting to this point of what is a single-page app and is what Astro doing a single-page app? Well,
[01:53:27]  I don't know. I mean, we know Astro classically is a... is not a single-page app, so I'm not a solid start. What
[01:53:36]  do I want here? Okay. Remember, we built a Hacker News demo using Astro, and I just updated the package versions. I was a little bit out
[01:53:53]  of date here, but we built this on stream a long time ago with Fred, and we were very excited about the performance. What this is, is the classic Hacker
[01:54:04]  News example. All Astro components, except for one solid component that literally just hides and shows the toggle, but the comments actually get passed through, recursively, see
[01:54:17]  Astro.self, through. So, all the data, none of the data needs to ship to the client, just a component that compresses stuff. And you can
[01:54:24]  see the compressing is just using, like, classes and style blocks to compress stuff. So, it's actually very, very simple, very, very small. It shows
[01:54:34]  basically an Astro app with a solid add-on. I love using it like this. The funny thing is, I showed it a minute ago, Solid Start.
[01:54:42]  I built this app in Solid Start as well. Where is it? Hacker News. And the funny thing is, same thing again, right? You just got some components
[01:54:58] , there's a comments with a recursive, the toggle, and then inside the toggle, we have that same component I was showing a moment ago. And the author
[01:55:09] ing experience between Astro's, whatever they call it, it's not JSX, but it's JSX, and Solid's is basically very, very, very,
[01:55:21]  very, very, very comparable, right? And that's why when Solid's Island's version, or Island's routing version is basically almost identical code between Astro and
[01:55:39]  Solid's version, just slight syntax differences. So, well, you want to know why? Let's do a PMP, what are they, dev. Let's
[01:55:52]  do a dev here, and I'll show you the classic Hacker News example. All right, let me bring this across. And actually, you know what, we're
[01:56:03]  probably going to need to want to do this to an incognito window. Let's, actually, we don't need the incognito window yet. Do I
[01:56:11]  have it? It's like previous streams. Okay, it doesn't matter. I'm just going to pull this one into here for now. Okay. And the reason
[01:56:28]  is, when I go to this page that has 98 comments, see, watch the page reload. See, this is an Astro app. We can compress these,
[01:56:37]  recursively compress these, see. And that the only JavaScript we need to send is just for these toggles. Everything's server rendered. You don't need like a next
[01:56:50]  data for this, or like, we don't need to send all this data twice, like in the HTML not, you can just toggle it. And it's recurs
[01:56:58] ive because we do that by passing the comments into the toggle as children so they stay on the server. It's a connected way of doing it. Obviously, recursive with
[01:57:08]  the same component is impressive for this demo. It like looks cool. But in general, this kind of embedding is very, very, very common pattern in server components,
[01:57:17]  in islands, in React itself. If you ever wondered about this, Dan Abramoff, I bring this one up a lot, when to memo or whatever, before
[01:57:26]  you memo, that's it. I was always like this one because he shows a couple of examples. It's like move state down, but, or lift content up and
[01:57:37]  lift content up. The reason he wrote this article is because you could tell he was very amused with himself. When he got to the end, he was like, it
[01:57:43] 's funny, this lift, lift, these techniques or improve React performance are the same techniques to get the best out of your like smallest server components, like client component bund
[01:57:55] les. And the thing is, he didn't need to use React.memo in any of this to improve the performance. It's just structurally does it by the
[01:58:03]  way you reshuffle the state in your components. I love this article because this is the technique that we tend to use today when we look at, you know,
[01:58:17]  islands and server components. It's just interesting to me, and this is something that I'm very conscious of, is that I also use this article as why I like Solid
[01:58:26] 's approach better because you don't have to worry about how you structure the components to decide this stuff. It's your performance profile doesn't change because you move state around
[01:58:37]  or lift content up. Um, so like, instead of like, like as someone trying to optimize your React code, um, like these kinds of things just aren't the
[01:58:48]  same consideration, whereas you, you know, like when you're a React developer, you should actually be aware of where your state sits in relative relation to re-rend
[01:58:57] ers. Um, anyway. So, I, I think, I, I think this is, is interesting because, uh, we have an example. Let's see
[01:59:22]  what, what's going on here. Well, I got, I got a couple things for, for this. First of all, I grabbed the, uh, what do
[01:59:35]  you call it? I grabbed the, uh, the spec for view transitions. Cause I, I, I'm, I'm kind of interested in view transitions and I'm
[01:59:42] , we're going to try Astro's view transitions today to see what they're all about. Um, Uh, blah, blah, blah. I've read this before
[01:59:51] . There's actually, uh, a Chrome team article. Let me see if I can pull this one up. Yeah. This is, this is where I started it.
[01:59:59]  And some of you probably have seen this. And the, the thing that was interesting about this, they, at least we call shared element transitions. Is there's a great
[02:00:10] , uh, 203, um, um, YouTube video podcast about this. I remember watching this ages ago and I have to admit, I wasn't too excited because
[02:00:22] , well, I, I was, I was excited, like, because I was like, okay, finally, I don't have, uh, like solid transition group can
[02:00:29]  go away or something. Like I finally, there's like a native way to just handle like these simple kind of flip animation type situations. But, uh, I,
[02:00:38]  I wasn't, uh, how should I put it? Like I, I, I, I read it and I was working on MPAs with Marco and this whole
[02:00:48]  thing that everything was about single page apps, because as it turns out, the view transition API today, um, is only even back then when it was an origin trial
[02:00:57]  was only available for single page apps, not MPAs. It's like, what, but why is all the MPA people talking about it? We'll get to
[02:01:03]  that. Basically the way it works is you would be like take a snapshot, change something here and then say you're done essentially by like completing the work and then at
[02:01:21] , where is it? Where is it? Yeah. And then essentially it would take the previous state that's wrapped and the, and the next state and see this is
[02:01:33]  synchronous here. And then it would just go like move between them. So you can see like, okay, well that's cool for animations. But like the first thing that
[02:01:46]  I went to, like when I was scrolling through this document, I'm like, okay, because I've been building something called transitions to and solid, uh, the kind
[02:01:52]  of like reactive transactions. But I'm like, how does this help me with async? Does this do anything cool with async? And I, I, so
[02:02:00]  I was like going through all this, this stuff, trying to figure it going out, can I do anything with for MPAs? Um, and the answer at the
[02:02:08]  time, uh, as you can see, there wasn't actually much of an answer at the time. Um, it's been updated a bit since. And honestly, I
[02:02:18]  probably just need to like, look at this, the, the, the better spec, um, layout, because this is much more in detail. So, sorry, I
[02:02:26]  probably should have just shared this one right away. Right. So yeah, actually, I don't even see it here. Oh, that's so funny. I,
[02:02:44]  I'm, I'm missing it. I swore it was in this article I was looking at. I was doing a bunch of like, uh, I was looking
[02:02:53]  at a bunch of, uh, stuff when I was, um, working prepping for the conversation with Ben and actually found a place where they answered my, my question about
[02:03:07]  async. I'm actually not seeing it here, right here, but essentially they basically showed an example that was async. And they said, like, don't
[02:03:17]  do anything blocking in here. So like, don't fetch data in async. So the way, uh, the view transitions work, um, for single page apps is
[02:03:33]  you should load all the data, do all the like pre-work for the most part ahead of time. You can make it async, but then after you've
[02:03:42]  done all the work, like, like pre-work to know like where you're going to then start the transitions and take the snapshot, then do the dom updates and
[02:03:52]  then exit out. So this is important, uh, distinction because the reason is if you just, if you just put an async function in here, um, it would
[02:04:01]  just freeze the page. Oh yeah, actually it's right here. Here it is. The callback past the start view transition can return a promise, which allows for as
[02:04:10] ync dom updates and waiting content to be ready. Sweet. Transition will start until the promise fills. during this time, the page is frozen. So delays here should
[02:04:17]  be kept to a minimum. So I think network fetches should be done before calling start view transition. So basically all the stuff that react and solid do for like transitions and
[02:04:29]  concurrent rendering, this does not touch. This is literally like after you've, you know, rendered the next page, figured out, um, you know, all the data
[02:04:38]  you need to load, do all your suspense stuff. Well, at that point, take a snapshot, show the new page and transition. So it is basically an animation
[02:04:52]  technique from a single page app perspective, which is nice because there's lots of things that are kind of these transitions that could use this from, you know, certain like
[02:05:04]  list. Like it doesn't have to be a navigation. Like it doesn't have to be a router level, but building something like this into a router is relatively simple because
[02:05:12]  you know, when the, you know, when you're like, especially with suspense and stuff, you know, when the transition's over. So if you could just hook
[02:05:18]  in right before it does the the side effects and go, you know, snapshot, do the side effects, run them synchronously. And then, um, essentially you
[02:05:33] , you, you get this power. Um, so like this, this was kind of my introduction to the view transitioning, but this doesn't really help us for M
[02:05:42] PAs, does it? Right? Like this, I was coming in with, with my perspective. So I was like, I was looking at the spec here and they
[02:05:49]  have this MPA versus single page app solution because everything they talk about is basically for the single page app solution that the APIs are generic, but it's designed for client
[02:05:58] -side routing. And MPA versus, uh, actually just refresh the page so I can get there. Okay. Cause I was already on it. Um, the current
[02:06:10]  spec and implementation in Chrome focus on single page app transitions. However, the model has also been designed to work with cross-document navigations, which are covered here.
[02:06:18]  Okay. We'll check that. So then I'll say this, let's look at cross-document transitions. They are an extension to same document transition, adding
[02:06:28]  semantics necessary to display transitions with navigating cross documents. Okay. The main explainer and blah, blah, blah, design for the same document transitions. Yeah. So you
[02:06:36]  can have the same, unlike same origin transition, cross-document transitions should work automatically without JavaScript intervention. They should have the right CSS, blah, blah, blah.
[02:06:47]  Cross-document are enabled for same origin navigations while across. Okay. Okay. How does it work? Both the old and new document need to be declared actively
[02:06:56]  opt into the transition between them. If both opted in and at the same origin, the state old document is captured using the same algorithm. When the new document is about to
[02:07:07]  present the first frame, when the document is no longer render blocked or the course of reactivation. Well, this is probably why people don't read specs. Okay.
[02:07:15]  But I understand what it's saying. Uh, essentially what they're saying is, uh, let me look at, uh, do I have an example of this?
[02:07:27]  I have the Astro Hacker News. It's not the best example of this. Okay. If, if I try and load a page with a lot of comments for
[02:07:36]  the first time, you're going to see that the, it stays here for a moment before it goes, it doesn't go white immediately. It actually holds the page
[02:07:44]  and then there's no white flicker. And in fact, this header doesn't even, you can't even tell that I'm changing pages. It's just this.
[02:07:53]  And that's because the browser does this trick anyways, already where it holds the page until it's realized that the next page has rendered a significant amount or like has,
[02:08:03]  like has its first kind of paint, so to speak, and then it swaps it. So then you never get to see like the old white flicker. And yeah
[02:08:12] , I mean, I can tell you this because I went and check the other day. I use this like websites, like the Space Jam one, like way back in the
[02:08:20]  day. And I could tell you when I used to switch pages, I would feel it right. But this time, look, I click on it. Okay, okay
[02:08:31] . Sorry, this is often a different domain. The bad example. The first one was a better example, the lineup, let's click the lineup. It holds it until
[02:08:39]  it shows it. There's nothing, you know, there's no elements that look similar. So it's, you know, you can tell that. But back in the
[02:08:47]  day when, you know, 96, probably still on dial up, you know, you would, you would click that, and then see the page go white, and
[02:08:57]  the status bar updating, and then the new page would load, you know. So why this is relevant is that when you combine stuff like streaming with, with MPAs
[02:09:12] , with that kind of hold behavior that I was just showing. This example here doesn't stream, I don't think. Yeah, I don't think after I was
[02:09:20]  out of order streaming. But like, you can, you can see you would have the same experience where you could actually show the loading indicator on navigation, and the bar shows
[02:09:31]  up immediately. So streaming, sending the page back sooner, really changed the perspective for MPAs. And it's why Marco pushed streaming so hard, because between paint
[02:09:43]  holding and streaming, it feels much faster than waiting for all the content to load. And you get the loading indicators, it comes much harder to tell. And that's without
[02:09:56]  animations, or without this views transition API. So it wasn't even that bad. But this seems like something interesting, if we can get this, this kind of swap out
[02:10:06]  for the cross dock. So the thing that I'm not clear about on here is that the state that they capture is the DOM state of the elements, right? Right
[02:10:19]  before the other is in the new one shown in HL specs defined here. Yeah, I'm interested to see how they handle state, because this, this in itself
[02:10:34]  basically sounds like to me something very similar to like this, this solves the first and third thing that Rich showed in his talk, right? You could say you could say like
[02:10:50] , look, this video player, let me see here, let me see here, I could picture you saying like this video player is the same video player, don't
[02:10:58]  unload it. I can also picture you video player, let me see here. And I'll see you in the next one, let me see it in the next one
[02:11:09] . So I'll see you in the next one. I'll see you in the next one. I'll see you in the next one, and I'll see you in
[02:11:14]  the next one. I'll see you in the next one, and I'll see you in the next one. I'll see you in the next one. I'll see
[02:11:17]  you in the next one. I'll see you in the next one. I'll see you in the next one. I'll see you in the next one. I
[02:11:22] 'll see you in the next one. I'll see you in the next one. I'll see you in the next one. I'll see you in the next one.
[02:11:27]  I'll see you in the next one. I'll see you in the next one. I'll see you in the next one. I'll see you in the next one
[02:11:30] . I'll see you in the next one. I'll see you in the next one. I'll see you in the next one. First thing, let's get
[02:11:49]  ourselves in a situation that we know what we're looking at. What I'm going to do here is I'm going to build and preview this, and we're going to
[02:12:03]  look at this. I did it again. Sorry, here, and I'm going to open a new incognito window. And we're going to open Locals
[02:12:14]  3000 here. Okay, beautiful. Because I want to see what the, this is just the current MPA version of it. Yeah, and you notice, first thing,
[02:12:25]  there's no JavaScript on this page, because guess what? You don't need any JavaScript for this page, right? There's nothing interactive here. Everything is a link
[02:12:32]  that navigates. So you click the next one. Now we get some JavaScript, where this doesn't look like it's gzipped. These sizes are too big.
[02:12:40]  It requests gzip, but I don't think it gets back gzip. Okay, that's fine, that's fine. The deployed version does. The deployed version
[02:12:51]  of this app, last I checked, was about 4.7 kilobytes of JavaScript. So it's 10.6 here. So it's a little less than half
[02:12:59] , so to speak. So yeah, and this just gives us our toggle. But I mean, for anyone who's been watching my stream long enough, you know that
[02:13:11]  4.7 kilobytes of gzipped JavaScript for this page is significantly less than, say, the 74 kilobytes for Remix, or the, you know
[02:13:21] , 80 some odd kilobytes for Next.js and Next.13 app directory. So like, or Next, or what, like, even Solid Start and S
[02:13:33] velteKit come in at about 15 kilobytes and 18 kilobytes, respectively, on this page. So, as I said, about four, let's say
[02:13:43]  five kilobytes, we're just like half it, is much, much smaller. So that's cool. So, um, I know this, I'm like
[02:13:54]  picking at pennies here, but I just want to see the impact. So we have a good build environment. So how do we add these view transition APIs things here?
[02:14:05]  Okay. Enabling views in your project, experimental view transition APIs. Has anyone played with this yet? I'm, I'm, I'm just curious. Yeah.
[02:14:22]  Is that it? Am I done? Probably not. Let's just do this. No. No. Okay. So I think I read, I read that already.
[02:14:45]  I need to add, I need to opt in somehow. I need to add the view transition. Full site view transition spa mode. Import to common head. Transition directive
[02:14:55]  allows. Okay. Let's just, they call this spa mode. Okay. Okay. So let's go view transition. And we go into our layout component. Add
[02:15:10]  it. Let's just add a view transition. Okay. Build. Preview. All right. Oh, okay. I think we've got something different here. Oh
[02:15:38] , okay. That's cool. See, no more of this. Go to the, go to our 90 comments. I don't know if you can see it. And
[02:15:51]  then the rest of our JavaScript loads again. Ah, so it adds about, see this hoisted thing. So it adds about five kilobytes of JavaScript. Un
[02:16:00] minified obviously for the router. Okay. That's actually really similar to how, um, solids, uh, solid starts app routers. I, I only know the
[02:16:13]  gzipped values, but it added, what was it like in that demo? It added like two, two kilobytes or so. So interesting. So the
[02:16:22]  difference between using the view transition API to do this and to do, this is very, okay. So it's in the same ballpark. I guess eventually their hope is
[02:16:34]  to use the MPA version and not have any JavaScript for it. But I wonder if they, yeah, we'll have to, we won't know until the M
[02:16:44] PA version goes, but right now this is what, what it does, which I think is cool. I think Rich is right in the sense that I would just turn this
[02:16:50]  on, right? Like this is cool. I like the animation effect too. I know it's like so subtle. They're just doing a fade. Did they,
[02:17:06]  I didn't have to do anything special here. Did they? I wonder like there's no persistent elements here, but they don't seem to have marked the HTML at all
[02:17:17] . Let me look at the network call. Like, I don't see any, I was, let me look, let me read this. Okay. Astro will automatically
[02:17:33]  assign corresponding elements found in both the old page and the new page, a shared unique view transition name. This pair of matching elements is inferred by both types of lookers
[02:17:46]  in the DOM. Use optional transition directives on page. Okay. Interesting. I don't know if it auto detected. It sounds like what they're doing is they
[02:17:59] 're using their build process to, to do these optimizations instead of you handwriting them. Cause I, I think I'm not going to lie. One of the things I
[02:18:07]  was concerned about with this kind of approach is that like, it's very manual if you're going around like tagging everything. Right. Um, like, oh, like
[02:18:18]  this element has this idea. Like after you, you get through like 120 of these because of shared layouts and stuff, you, you might like start getting in a weird
[02:18:27]  place. But if Astro handles the base case for you automatically, that's interesting. Let me see here. Like, I don't, let's see, this header
[02:18:37]  is always in there. Do they have to do anything? I wonder how this works. I might actually have to have Nate or Matthew come on and talk to me about this
[02:18:45]  stuff. I just wanted to, to look at this and get a feel for it today. And, uh, uh, you can, oh, oh, that's
[02:18:54] , that's what's going on. Wait, the, the, you see the whole document. Okay. What's going on here? Yeah. I have like nothing
[02:19:12]  to switch where I could stay on the same page easily, but I'm just. Okay. Okay. Let's, let's inspect here. So I'm going to
[02:19:22]  nav it out like this. And then I'm going to go to the, let's go to another page that has the same header. Huh. Interesting. I almost want
[02:19:35]  to see the, the paint repainting. It's, I mean, it's possible that it's just completely swapping everything out. Um, I mean, that
[02:19:45] 's cool that the browser handles this for you already. Cause like this, this makes you think like there's like a, you know, a kind of different approach to this
[02:19:52]  than I've been thinking about where you could use compiler optimized hints to the browser and then use the browser to do the diffing. It's interesting. Yeah. I
[02:20:06]  mean, I'm just looking around a bit, but it's like, um, not that one I wanted. Rendering. Yeah, yeah, yeah, yeah,
[02:20:30]  yeah. Okay. See this? Okay. Oh, I'm loading the death test page. Oops. Don't do that. Okay. Yeah. About five kilobytes
[02:20:55]  for the solid code in the router. So yeah, this, yeah. So the router here. Yeah. Anyway, I, I just, it's just funny cause
[02:21:02]  this is very similar idea. This is the, this is the, the solid version not using the view transition API. It doesn't have the smoothness, but it does
[02:21:10]  the same. I just want to understand. Maybe we can, we can test the header being the same. Just a second. I want to first let's go. Was
[02:21:21]  it rendering? Paint flashing. So when I switch this, yeah, the header doesn't repaint. Okay. So can we tell Astro not to repaint the
[02:21:38]  header? Cause the header, this whole header element basically never gets done. So let's, it's funny cause it, well, what I'm realizing thinking about this
[02:21:50]  right now, which is kind of cool is because it is the actual same component. I only actually have to write it once. It's not like me matching something up.
[02:21:56]  So like, can I do something? I mean, this isn't, to be fair, this is like experimental beta type stuff. They probably, yeah, exactly. So
[02:22:02]  this is not ready yet, but you know, I, I like, I like pushing it. They know that let's go transition name. Cause you see, for
[02:22:13]  me, it's not about the animations. It's the preservation, right? Cause I want to say header. Can I do this? And then build preview. And because
[02:22:26]  they're on both pages served. We refresh. It might just be the, the way the browser handles it. Cause it looks like it's doing something, but.
[02:22:51]  Huh? Okay. Well, lots to learn still about the view transition API. Do I have to turn anything on in my browser? Or does Chrome just support it?
[02:23:04]  Like I just really haven't played with this stuff. I bet you Marco could do something amazing with this, blah, blah, blah. Cause it comes super compiler. Yes
[02:23:16] , probably. Yeah. I got to say though, for such a simple mechanism, I'm impressed. Like this is just, it's just one of those things where like
[02:23:29] , Oh, actually. You know what? We, we, we, we can do this. Okay. Screw this. Let's get our head element. I'm
[02:23:39]  just curious. Okay. Okay. Dollar sign zero. Dollar sign zero dot. Let's see if I can do something. Garbage equals hello. Like, does it
[02:23:54]  keep the exact same element? Like I'm just, and I go to page two. I'm just, I'm just interested. So I got header. Dollar sign
[02:24:13]  zero. Thought underscore, underscore, underscore, underscore. Garbage. Not equals hello. I want to know what garbage is. Okay. All right. It was worth
[02:24:25]  a shot. Okay. So. Okay. Yeah. I'm using Chrome on. Yeah. There's a can I use. Thanks. Anthony. Let me see if I
[02:24:45]  can look at this. Oh yeah. It won't let me drag into an incognito. Since 111. So I'm probably okay. Hmm. Okay.
[02:25:19]  Well, well, while we're here, like, can we open this up in Firefox and see what Firefox does? What does it look like when you, when you
[02:25:28] , when you don't, it's like, I've never used Firefox before. That's not true. I was just testing Firefox the other day, which is probably why
[02:25:37]  it did this. I probably updated it like a bunch of versions in the background while I was testing some funny issue around lazy image loading in Firefox with clone node, something.
[02:25:50]  I'll probably talk about it on stream one day. Um, let's see your local host. 3000. Okay. It does client side routing though. It doesn
[02:26:10] 't like transition, but it looks like the islands demo. Cool. So they have a, they basically have a full page diffing thing. I mean, I'm not
[02:26:21]  surprised. The diff that we use was written by the Astro guys, by name more. So, um, I'm, I'm stoked because I've been encouraged
[02:26:28] . I've, I've been very interested to see where they're going to take this. So this, this is at its heart, um, sort of turbo links
[02:26:39]  type technology with the addition of, of, uh, view transition API as a way to do these transitions. I guess it's going to be interesting. I, you
[02:26:54]  can launch this now and then hope that the MPA one catches up. And if it doesn't, you just, I think that's the conversation that's happening. I
[02:27:00]  think the Astro folks are intending to, to eventually just use the, this with MPA transitions. Um, and then right now they can, you know,
[02:27:11]  ship like a couple kilobyte router and, and do it. I like this though, because this is, this is what I was kind of getting at about six months
[02:27:23]  ago, especially for the basic cases here and stuff like this is the baseline basically the JavaScript you need for interactivity plus, um, a couple kilobyte router. Yeah
[02:27:44] . 10 kilobytes. That's the baseline. I think, I mean, this is less than that. This is, you know, this is what network, I
[02:28:02]  think we already, this is like, um, yeah, but I mean, it's not fair. I got to put something interactive on the page. Um, let
[02:28:13] 's go to here because you need like the, the client side interactivity. I counting from zero is pointless as we talked about before. So basically minus this toggle piece here
[02:28:27] . So like one, one kilobyte, maybe not even so like essentially 14 kilobytes, not gzip. So gzip that up. We're talking
[02:28:43]  six or seven kilobytes. Um, that's pretty sweet. Right. I guess that's the, yes, this one's gonna, this one doesn't have
[02:28:53]  the diffing engine. So yeah, this six or seven. So yeah, under 10 kilobytes is the baseline for this sort of HTML transitioning, um, technology.
[02:29:01]  It's funny because these two demos are very, very, very different, um, in how they're implemented. Um, but I, but you get, um,
[02:29:12]  maybe they're not actually as different as I think they are. Right. This one does partials where this one doesn't, but yeah, this is interesting to me
[02:29:26] . All right. How are we doing stream? Does it replace head at all? I mean, it's hard to see because it looks like the whole thing, like
[02:29:44]  if I expand head and then, sorry, wrong one. If I expand head and go to a different page, it's possible that there's like a zoning thing.
[02:29:59]  Like, you know how, I'm probably doing this wrong. See how I have everything in the same document and then I put the view transition like, like I wonder if
[02:30:16]  it's scoped somehow to like, where it is. That's, that's, that's my hunch. I feel like it's not quite doing what I'm
[02:30:30]  expecting, but even regardless of that, I think the promise here is this, this is the baseline. I, people were talking about like server component type stuff. And I
[02:30:39]  was like, within a year these stuff, that's kind of like server components, but going to give you 10, like 10 X smaller than what you get out of next
[02:30:48]  JS. I was suggesting stuff like solids islands, but I knew Astra would also, would also be in the same boat. Um, we're going to see more solutions
[02:30:59]  like this as this, this doesn't solve the app. like the initial problems that we talked about so far, the base solution solves the animation and the persistence of dom
[02:31:17]  elements. I don't know how it presis, uh, handles state. I know the Astro guys are working on that, but I think there's, I
[02:31:23]  think there's some interesting considerations with state that make it much, much more complicated. Um, because I mean, going back to ASP.net and the view state
[02:31:36]  serialization scenario, this is a question of who owns the state. I said, I went in big detail earlier about .net and how they'd serialize it back and
[02:31:51]  forth. And the update panels, cause I want to understand what we wanted to avoid. Like, one of the things, um, that makes solutions that don't treat
[02:32:01]  it like a full page reload. Cause like, sorry, let me go back here. Watch. If I go here, the head's not going to move in the solid
[02:32:06]  example. And the same will be in the react server components example. Cause in fact, the header won't move because it's using nested routing. Um, is
[02:32:21]  that, uh, sorry, where was I going in this? Sorry. Um, the state ends up in these kind of RSC type models in the client and the S
[02:32:38]  and the server, like, like basically there's a difference between static data and state full data. And we don't send it back and forth a bunch. Um,
[02:32:49]  basically state stays in the client. That's why context only works in the client and the server basically sends back the equivalent of what we, Jason, except it's HTML,
[02:32:59]  right. Or JSX or whatever, but it's, it's not stateful. It's not interactive stuff. The interactive stuff is always kept in the client and part
[02:33:07]  of that client tree. So like, it's going to be interesting to see how this progresses because from, from, um, you know, this kind of thing,
[02:33:18]  if you go, okay, now I'm going to persist this state. What does that mean going across client and server boundaries back and forth? That means you're serializing
[02:33:27]  it both ways. Does it, is there a difference between. Like where this, if the state gets persisted in the client components versus the server components? I think
[02:33:38]  client persistence makes a ton of sense. I think server persistence does not, but it'll be interesting to see. Luckily, Astro knows where all the islands are so they
[02:33:48]  can do that. So I think that's the gist of it. As long as they can, they have a way of keeping the island instances attached to some kind
[02:33:57]  of ID, they should be able to diff in a very similar way. In fact, I wouldn't be surprised if our solutions are very similar, um, between solid and
[02:34:05]  astro on, our salt start and astro in that, in that. Okay, so looping back around a bit. Okay, before I loop back around,
[02:34:27]  I saw questions. Let's answer the question. Did you touch on topic PWA is what do you create an offline solving project? I have not, um, I
[02:34:44] , I don't know if it makes a huge difference for either. Cause you can always with a, with a PWA, um, have a bunch of pages that have
[02:34:54]  to, the biggest thing is you need, if you want the pages that the server pages to be like dynamic in the PWA, then you need something rendering it in the
[02:35:05]  service worker or the router. I've seen some like trisomorphic setups where people have like a server render, uh, worker renderer, and then the client
[02:35:14]  rendering. Um, but like the challenge, like basically having a bunch of static pages, like an MPA style, you'd think, or like even like a SSG
[02:35:25]  style thing with a PWA is pretty easy. It's the dynamic stuff, which at that point, if you want to be offline first kind of mentality, then you
[02:35:33]  need to be able to do stuff in the client primarily. So it's almost on the opposite end of the spectrum. Like if pre-rendering a bunch of pages
[02:35:42]  for, and using kind of like an app shell-ish approach for PWA is fine. Um, you know, something that's kind of like has multiple pages, but
[02:35:53]  I think like it comes down to where the data is coming from. Like you, you basically need, if you have any kind of live data that you're keeping locally
[02:36:04] , you need a way of like re-rendering the page with that data, which means you're kind of client rendering. So it means like the MPA benefits
[02:36:10] , biggest thing is probably portability. That's why people have been talking about like the way that React server components, like separate them into separate endpoints. And like,
[02:36:19]  you can combine them. You could maybe have a worker do part of the rendering, have like build time do part of the rendering, have edge do part of the rendering.
[02:36:28]  Then this kind of comes interesting if you can have a single model for that. Um, but it's interesting because like, like what's the client and what's the
[02:36:38]  server? So to speak, is that even like the right mentality? I think we're still figuring out what qualities that have, um, cause it's not as simple as
[02:36:47]  just like worker dollar sign, like worker dollar sign is fine. Kind of like a server functions. Like it's good of saying, run this code in this location, but
[02:36:55]  actually to declaratively stitch the stuff together in a way that's consistent and makes sense takes more than worker dollar sign. Does Astro serialize props or islands because then
[02:37:06]  they can diff that way and have the islands within their internal state? Yes, yes, yes. And yes, that, that, and that's, that's exactly how
[02:37:14]  we, we, we solve this, um, with, with our version as well. We serialize it and then when we pass in the new props, so assuming there
[02:37:24] 's a way to persist on an MPA transition, the internal state of the components, then you're fine. Yes, yeah, I mean, I, I don
[02:37:36] 't know if we'll be able to see it, the serialization, I probably not inspect. I want to see the, not that one, I got to find one
[02:37:49]  with the toggle. Yeah, here, see props, empty object, because there are no props. That's why there's no data serialization as an example, but
[02:38:01]  see right there, props. So, yeah, as long as it can keep the internal state, this should work the very similar way. Yeah, it's funny. The
[02:38:15] , the, the more interesting part about this is that like, what does it mean for the rest of the system? Because in a sense, the diffing side,
[02:38:26]  um, is probably going to be similar between what we're doing. Like I, the, the view transition API part doesn't actually matter for the pure, like, island
[02:38:39]  preservation as much as it matters for like, obviously the animations. And it matters for the, being able to say this elements, this element, which is the, like
[02:38:53]  mechanism for that in an MPA world. But otherwise, like the fallback or the client side version is very, very, very similar. But, oh, sorry
[02:39:04] , I've lost where I was going there. I'm, I'm, I'm, I'm still unclear how the internal state is preserved, but if we,
[02:39:26]  if we can figure that out, um, maybe there's no answer to that just yet. But I, I, I think, yeah, then you have the pieces
[02:39:39] . Okay. Um, so is this a single page where I was trying to go to is, is this a single page app or is this an MPA? an
[02:39:53]  MPA, an MPA, yes, yeah, which is, yeah, sorry, this is, this is where I was trying to get to is, is that the
[02:40:00]  difference is what happens, the, the HTML generation to get to this point. Right. I think, I think one of the complexities with components is if there is state
[02:40:20]  in client components, any future, and this is something we have to worry about, um, with RSCs and solids approach too, is any future server rendering won't
[02:40:33]  have that state unless you send it all back in the request. So like the, it's the classic problem. If you have a counter in a, in a context
[02:40:40]  provider or like in some kind of component and you click it, um, you know, it's, it's a shared state problem. Right. And you click it like
[02:40:49]  10 times. And then they said, if the counts bigger than 10 show this stuff or don't show this stuff. Right. Um, if you go back. to
[02:41:01]  the server and render it again, it's not going to know that the thing is click 10 times and then it's 10. It's going to have the initial value of
[02:41:07]  zero, which means it'll render something. And then it won't match the state that's there. So the way that we solve this in RSCs and in the
[02:41:13] , and in what we're working on is that you don't render client components after the initial navigation. And I think that's where the state preservation challenge comes in, because
[02:41:26]  essentially. Um, trying to diff that becomes a combination of server and client side rendering before you swap the page in. So it'd be interesting to see how the view
[02:41:42]  transition API manages that, especially for MPAs. For single page apps, as long as you have the right hooks, like, like the, what they're doing here
[02:41:51] , I could see how you could do that. I think it's much more interesting that you basically have to control, like the render holding won't be sufficient. Um
[02:42:00] , I think you actually have to like wait until you also client render or client diff the existing stuff. yeah, honestly, this is, this is, this is,
[02:42:15]  this is fun because how do you access to the old document when you try and do that? Huh? Yeah, I'm, I'm looking forward to see how Astro
[02:42:25]  solves it with this sort of approach. because like the one thing that a lot that we've been doing with our HTML approach and the RCs have been doing is doing
[02:42:36]  these partials and preserving most of it, which means both, not just on the server or client, we'd say work. We actually have the potential of rendering less
[02:42:45]  on the server. So we don't treat the next render as the same sort of thing. It's a special render. It's not just a normal page re-render
[02:42:53] . We, we actually control what gets sent over the wire. It's not, and that's much more complicated admittedly, but it actually manages these kinds of complicated problems
[02:43:04] . Um, but yeah, the, the, the reason that I'm getting back to this is if you're listening to me, this whole RSC Astro Island
[02:43:15] , you know, the solid islands router thing, all actually share a lot of qualities of MPAs in which you view stuff as a page being rendered. And as
[02:43:29]  a mental model and basically getting kind of swapped in, even though it's client routed, so to speak, it is, um, how it is, it is still
[02:43:43]  a server first rendered app. It's an interesting situation though, because the state is kind of owned by the client. It's server rendered and it's client routed.
[02:43:56]  Like those three things are, I, I, are, are where this differs than say, okay. Did I, yeah, I, I closed my Excalib
[02:44:09] ur down earlier. Um, cause like, I'm, I'm just, what did I say the three things were? Rendered, render, render, where
[02:44:20] , state, where, um, router, where, right? Give myself a little bit more space here. So like thinking about it in those terms. Well, spa
[02:44:53]  is pretty easy. After initial load, it's client. It's client, client, client, right? And this is true whether you SSR the spa or not
[02:45:19] . MPA server routing server rendering. The state might live on the, on the client, but it goes away. So there's no like the preservation. Like
[02:45:49]  if you want something to be stateful, it has to live on the server for the most part. And then whatever this is. Um, I don't know what
[02:46:20]  to call this. This is like. What is this? This is like. I'm going to say hybrid. Like, I think it's fundamentally different in this way.
[02:46:45]  Like, I don't know if astro. Like, maybe there's four categories here. Like, maybe this is just a combinatorics problem. Sorry. Like,
[02:47:02]  maybe, maybe there's one that's like this. Right? I hate calling them SCs, but. Does this look right? Hey. How's it going
[02:47:40] , Theo? I'm just boring people with, uh, with talking about, we got to that point where we did the Astro demo. And, uh, um,
[02:47:50]  it looks great by the way, but it still leaves us with lots of questions. I took my, my hacker news demo and added Astro's transitions. But then
[02:48:01]  I was watching, I decided to look at the paint flashing and the, the HTML remaking to understand what the view transition is doing for them versus a solid starts version of
[02:48:11]  that's very similar to server components, which again, when I move around here, this stuff doesn't move. It's only diff, even the header doesn't move
[02:48:21] . It's only diffing this part, I think. If I go. Yeah. So just kind of comparing some of the, the differences. Um, although as I
[02:48:32]  said, the experience here is still very smooth. The paint flashing doesn't make it feel as nice, but, you know, you can see. What is SC's
[02:48:46] , uh, server components. I didn't know what to call them. This looks familiar. Okay, fine, Dev. I'm, I'm, I'm,
[02:48:57]  I'm, I will, I will open up your, your link. You're right. Yeah, yeah, the, okay. Okay, okay, okay. Yeah,
[02:49:15]  Livewire is, is, is, is, is, I like that you included Livewire here. Let me pull this over just so people know what I'm talking
[02:49:23]  about. See, this is very similar to what I was. It's like my window management is crap right now. Sorry. Okay. Let's get this in here.
[02:49:44]  Yeah. This is very similar to what I was getting at. Where's my Scala draw? Yeah. Yeah. It's almost the same idea. Cause Livewire
[02:49:55]  is most of the rendering. Well, Livewire is interesting. Yeah. Cause it diffs. So it is like that. Most of rendering happens on the server. State
[02:50:04]  lives on the server. The routing. Is the routing client? I think Livewire. I think Livewire, like, it doesn't have to, like, it
[02:50:17] 's usually, like, it doesn't have to, it can sit on either of these. But, um. Yeah. I don't know if there's any other combinations
[02:50:28]  here. Cause I don't think you'd ever have state on the client with server render and server router. That doesn't make any sense. You state has to,
[02:50:41]  like, these are, like, incremental. You, you can, generally speaking, I mean, maybe this is, maybe Astro is trying to make, like,
[02:50:49]  a new category. I don't know. I feel like the Astro solution is either going to fall into one of these two. I call this server components. I
[02:50:59]  don't know what to call this. I've been calling this hybrid. But it is different than TurboLynx is what I'm getting at. So. Anyway.
[02:51:08]  Yeah. Livewire. HTMX. Yeah. I've talked about HTMX. a few times, um, earlier in the stream. But yeah. I
[02:51:36]  know. I, I, I probably leave this diagram here. But yeah. I mean, this, this kind of goes back to what I was talking about earlier. Where
[02:51:43] , um. Let me. This is from one of my, uh, things before. But I was saying that this is our, for client routing. Um. So
[02:52:02] , like, obviously we just talked about Turbo. Um. And yeah. I called it hybrid routing. And I was mentioning that you can mix hybrid routing with nested routing
[02:52:15] . I, I love this remix thing. I actually stole this from their homepage. Watching how each part of the section of the, the page works. That's why
[02:52:23]  in that example I was just showing, um. It was very easy to swap out the sections without adjusting the HTML. Um. This is the trick that they use the next
[02:52:31]  app router. It's what I showed in that solid example. Um. So, like. It's interesting. That's why I put these kind of in the same category
[02:52:40] . Even though one's using HTML and one is not. Because, like. Sorry. Like. The rest of the talk doesn't really matter. But it's just
[02:52:53]  that, like. You can see. That the intention. Yeah. I thought there was more left. But I think we covered it all. Um. You can see that
[02:53:02]  the intention here. Is to basically server render parts of the page. And like. Yeah. What do you got here? Even rendering is confusing with server component does.
[02:53:16]  Rendering refer to the. Running the components. And getting the JSX output. Or taking the JSX output. And putting it into the HTML. I'm talking
[02:53:23]  render the. I'm not. The diffing part is not what I'm considering the rendering. I'm considering the rendering. Like the thing that constructs the. The
[02:53:31]  markup tree. Representation. Whether. Because even. The JSX that they send isn't. To my understanding it's not actual. JSX. Like it's
[02:53:42] . It's more like. VDOM nodes. Right? Like it's like. It's the realized output of the rendering. It's not the. Like it's
[02:53:51]  easier to say it's the JSX. But it's. It's a rendered. Tree representation. That's been serialized. And. What it's serialized
[02:53:59]  to. Whether it's HTML. Whether it's some JSON object. You know. Potatoes. Potatoes. You know. Whatever. So from that perspective. Yeah.
[02:54:07]  I'm talking about the thing that actually goes through. And combines the data. With the. View hierarchy. That point of merging. Is what I'm calling the rendering now
[02:54:17] . And we got to think react for that. Because traditionally. Rendering meant. Paint. Paint. Like in the. In the. Like DOM sense. You know
[02:54:25] . Like when you see it. Yeah. On Twitch. Yeah. I should be Ryan solid. Yeah. Yeah. No. It's. It's. It's.
[02:54:37]  It's. It's. It's. Ryan solid on Twitch. Yeah. Maybe it's. Ryan solid nine or something. No. It's just Ryan solid. Yeah
[02:54:43] . Never mind. Just Ryan solid. Okay. So. I don't know. Do. Kind of got to the end of that content. Um. I think
[02:54:57] . As I said before. I think this is the. The baseline. Um. Now. When looking at. This is that there. There is. Potentially this
[02:55:09]  new thing. That is. Different. It's. It's more than just. Adding client routing to MPAs. Like. There's certain. Criteria that
[02:55:19]  needs to be passed. To kind of get the full benefit. Um. I hate that we have like. Four things now. You know. We were talking single page app
[02:55:31]  versus multi page app. And now we're talking about all this stuff. But like. Um. Yeah. Thus is web dev. So to speak. Um. Well
[02:55:45] . I mean. Like. SCs fall into this final category. Astro. For the most part. Is an MPA. I think. Today. You could say
[02:56:01]  that it's like a. Client routed MPA. Like. The question that we've been having so far. Is. What's the difference. Between a
[02:56:10]  single page app. And this. Because. They. Okay. Let's go into this a bit. Because the MPA crowd. Is willing to say that like. Oh
[02:56:18] . This. These are single page apps. Because. Like. Whether they server render. Doesn't really matter. Um. You know. They still have a client router
[02:56:29] . And they still treat. Uh. State. Not static data. Not. You know. Stuff you pull from the database. But stateful stuff. As a client
[02:56:37]  consideration. But. Whether. Like. Astro's. Current. View transition thing. That we're looking at here. You know. Which is. Is just. Is
[02:56:48]  kind of. Right now. Fancy. Turbo links. Which is. Fine. But. If they go. To the next step. And start preserving. The islands
[02:56:59] . And if. Even if they drop. The spa mode. And it. They can do that. With an MPA. The only difference. Is going to be.
[02:57:09]  How much work. You do on the server. To get to that point. And. Whether. You're using the browser's. Inbuilt. Way of doing it.
[02:57:17]  Or. Building. Our own. And that's the hedge. That react. And even solid. Is taking right now. Is that. If we control. Like.
[02:57:27]  If we control. The routing pieces. We can optimize. What the server does. Like. We don't have to re-render. The whole page. We can do
[02:57:35]  partials. Which is an interesting thing. Because at the beginning. Of Rich's talk. We went over. He was. Criticizing partials. But. The
[02:57:41]  solution. To. Solving partials. Is actually really. Quite simple. It's. Remix. Came up. Kind of. Popularized it. Navigation.
[02:57:50]  In partials. Mutation. Does. Full page. Reloads. That's. That's basically. The solution. But it's not. A full page
[02:57:57] . Reload. When you have. One of these. Client routers. It's just. A. You know. It's just. One of these.
[02:58:05]  So. Yeah. I. I. I. I. I think. That. It's quite possible. That. To get. The right. DX. That we
[02:58:21]  want. Out of. What Astro is doing. And get it. Optimal. That. Mechanically. The fact that it's MP or single page app might
[02:58:31]  not matter anymore. That's. That's sort of what I'm getting at. But what does matter. I think is because like. I don't have it here
[02:58:45]  because I don't have enough dimensions is. The. The people who want the state to belong on the server. Because the one trend. That is clear here. It's
[02:59:01]  not about the routing. Everybody keeps on focusing on the routing. Right. They're like the richest talk. So the framework that doesn't serve jobs. Whatever. Uh
[02:59:10] . Where was it the. I think we already. MPAs are dead or whatever. Everyone was focusing on the routing. Right. And. The thing is. I
[02:59:19]  think everyone wants the client routing. Maybe. If. You know. The MPA version can. Let us rely more on the browser. But. Obviously. You still need
[02:59:33]  some JavaScript. So it's not like a zero JavaScript thing. And. We saw in this router. Like. It's. It's freaking. It's 4.
[02:59:43] 9 kilobytes minified. That's not even g-zipped. It's like 2 kilobytes add-on. Right. Um. So like. Yeah
[02:59:53] . Like. We're not. We're not. We're not suffering the world for this. And as. You know. Rich was saying in this talk. Where.
[03:00:00]  Where was it? Uh. Where is it? Do do do do do do do do do. The client side router. Their apps suddenly have a nicer user experience.
[03:00:12]  I would not be surprised if the default was reversed in Astro 3 or 4. So. You know. Well. Yeah. I mean. The thing is. There
[03:00:27] 's going to be. Something. In this zone. That actually wants the state to live on the server. Um. The. The live wires of the world. I
[03:00:37]  honestly don't know where HTMX fits into this. I think HTMX is like a fun fantasy that we're going on right now. You know. People need
[03:00:45]  a vacation. Um. But like. There. If. Think about it. Rich. Highlight at the beginning of the first talk I showed with him. Is that.
[03:00:58]  He was very much concerned with. the modernists. And the traditionalists. So to speak. On the website. And I said that over the last couple of years
[03:01:08] . The traditionalists. Not the traditionalists. But there's been MPA favoring people on the JavaScript side. I mean. This started years ago. Um. With
[03:01:16]  you know. Marco or whatnot. But like. There's been a group of people that. That champion it. Not because they're traditionalists. But because. They want
[03:01:25]  the performance. We are getting to a point here. Where. The. The. The. The JavaScript side is. Combining. And what will be on the other
[03:01:37]  side. Is. That. Server. Stuff. The blazers. And the. Live views of the world. If that's a. Viable model. I don't
[03:01:46]  know. I think the. The more interesting part is. Why. Say. The Astros of the world. Or even the Solids of the world. Are so intent
[03:01:55]  on. Saying. No reactor over there. You're not part of the. The game. Because like. To be fair. I'm actually pretty supportive. Of React
[03:02:02]  in general. And I think. It comes down to. That baseline. It's not about zero kilobytes. Of. Of. JavaScript. Um. And.
[03:02:12]  Right. We. We've been over that. It's just that like. There. There is a certain overhead. That. Is being. Kind of. Tied to
[03:02:22]  the react. Side of things. And I think. We're going to see. You know. Starting with this. Astro example. Which I think. Is impressive enough
[03:02:30] . That people. We're going to see people. Just doing this. All over the place. Where they'll be like. Look. I built this app in next.
[03:02:36]  And it's 200 kilobytes. I built it in an Astro. And it's 10 kilobytes. Like. I. Which is. Not fair.
[03:02:43]  Because it's probably not. The type of site. You would build in next. But it's like. It's essentially. And I'm even talking RSCs.
[03:02:50]  In this case. Maybe 200 is like. A little exaggeration. Maybe it's like. 100. But 10 to 100. Is 10x difference. And when you make
[03:02:59]  a 10x difference. That's when people start noticing. I think that's a silly. Arbitrary measure. But. That is when people. Pay attention.
[03:03:08]  When it's 10x. Yes. I am using Astro 10. There's a new state. The keep state. State persist. Ooh. Persist UI.
[03:03:25]  Okay. Let me take a look at that one. We can maybe play. Play with our example here for a second. Apparently I've been giving you all the good
[03:03:46]  quotes. Make your fantasy come true by rewriting your apps to H2X's right. This is a better quote. H2X is like going on vacation. I
[03:03:58] 'll stand by that one. Sorry. Yeah. Yeah. I'm using 210. Okay. So I thought it was the name. Oh. Does this only work in
[03:04:19] . Nope. It doesn't. This is what I was looking for. So I can just go persist. Alright. Alright. Alright. This is what I was looking
[03:04:31]  for. I think. We've now persisted the header. Alright. Let's flip. Let's turn on our paint flashing. Okay. It doesn't affect that
[03:04:48] . Okay. Let's go to body and see that diastro persist. Okay. But that might not be. It might always do that flicker thing on the
[03:05:03]  painting. Let's get our dollar sign console. Dollar sign zero is in fact a header header. And let's put some garbage on it. Let's navigate. Let's
[03:05:24]  find our element again. That's all. Dollar sign zero is in fact a header header. And garbage garbage. Alright. It works. Okay. So the paint flick
[03:05:48] ering is one thing. But it does persist. It does use the same element. Very cool. Okay. Hmm. Hmm. I have so many questions there on
[03:06:17]  like how it actually keeps track of its references. But I think that's fine. If you keep the same element, that's all it needs. It doesn't need any
[03:06:31]  other references. So this just works. The JavaScript code that's sitting in there, that's referencing it, like the rendered component, it will essentially know that it's
[03:06:42]  the same. Like as long as it has the same element, actually like the code ran once to hydrate or update or whatever, it's going to have references to the
[03:06:50]  DOM elements. As long as they stay there when you come back and they stay in the same shape, you know, so to speak, like as long as the server
[03:06:59]  isn't messing with it, which they won't because you're persisting it and presumably all its children, then, yeah, this just works. Very cool. Okay
[03:07:18] . That's awesome. Okay. Yeah, that'll do it. Yeah, I'm going to, I'm going to need to spend some time to dig into how this
[03:07:36]  one works. Cause like, yeah, yeah, yeah, yeah, it's a, I'm wondering if it's still using a diffing algorithm under the hood.
[03:07:55]  Like if it's still using, um, Nate's library, right? Cause this is what we do in a, what is it? Solid movies app. If you
[03:08:07]  go to the, go here, if I inspect here, go to the input source console to dollar sign, zero dot underscore underscore something equals. Hello. Good. It's
[03:08:26]  this one do that. Oh, this one swaps. Yeah. It never unmounts this one. We actually had an example where it did, but this is,
[03:08:35]  this is actually is perfect. It's perfectly fine. This one will be the same cause it doesn't even unmount it. Okay. So this isn't a good
[03:08:41]  example. Um, mutation on notes might be a good example. Notes app. I don't know where it's deployed. Nevermind. I'm just curious. This,
[03:08:58]  this, this, this is, this is cool. I, I'm going to need to understand how this works. Um, if it's, if it's something
[03:09:04]  they're doing, imagine they're using, uh, Nate's diffing. Yeah. It must be diffed by their library. This hoist, this hoist JS
[03:09:18]  must include it. It has to include, uh, it must include Nate's library. Maybe not. Um, yeah, I'm, I'm, I'm
[03:09:57]  going to have to look into this cause this, this piece is actually interesting to me. If there's a potential to save the, the diff engine somehow and have the browser
[03:10:07]  do it. that is, that is very interesting. Yeah. Uh, so what do you think the quick micro front turners have static parts and cash stream? They
[03:10:27]  fast and they don't. Yeah, no, I mean, they, they, they, they're definitely focusing on that use case, which is really good. You
[03:10:33]  can tell this is the same area that like next 13 is focusing, working a ton on getting like partials of server component caches. So they've, they're,
[03:10:41]  they're working very like off that end to get, uh, you know, was it a dynamic at the speed of static? Um, so, uh, yeah, I
[03:10:48] , I think, I think that's a good problem space to, um, get into for, uh, last level optimization, which is, as I said, very important
[03:10:58]  for people who have a lot of static content. Um, it hasn't been an area that I focused too much on. I'm still working on the mechanics of it
[03:11:03] . Like, I think having client routing that doesn't load all the JavaScript is more core and then we'll talk about catching later, but I, I do know that there
[03:11:14] 's definitely interested parties in this. You guys are great. You literally like have all the links. Sorry. I'm just, I, I asked for like the notes
[03:11:25]  app example and, and, and then I get it. Uh, all right. Alright, so let's try this again. Inspect. I did, I'm just
[03:11:44] , this is probably my own interest. So let's try this again. Let's try this again. Okay. Let's try this again. Left source. No console
[03:12:01] . Dollar sign zero. Garbage. Equals. Hello. Okay. And then let's go and. Edit a different note. Maybe this one. Okay. Actually
[03:12:13] , let's do something to change it, just, just some note exclamation mark and then push done, which presumably refresh this whole sidebar and then inspect. I
[03:12:40] 'm, I'm, I'm as curious as, as all you are about this because, um, maybe more curious because, uh, cause Nikhil has a lot of
[03:12:58]  secrets. Um, okay. Yeah. So that works. Yeah. Yeah. Okay. Yeah. Just, so I do have an example showing Dom diffing. Um,
[03:13:08]  okay. That's fine. Um, just this, this, this is, this is a, this is a hot space. Let's say that much. Uh,
[03:13:19]  yeah, but I, are they, are they, I wonder if they're more costly than server rendered single page apps. I'm comparing against client side rendered apps have
[03:13:36]  limitations and it's not really comparing, you know, apples to oranges, so to speak, but server rendered, uh, single page apps is a more interesting comparison.
[03:13:44]  yeah. Yeah. Yeah. I, the truth of the matter is there's going to be, I don't care what your app is. It's probably going to be
[03:14:02]  like, unless it's like a real toy app, there's going to be like 20, 30 kilobytes of JavaScript that's going to load regardless. And that
[03:14:09] 's the way it's going to be, you know, I'm not going to, I'm not worried about micromanaging the rest of it. I'm
[03:14:16]  not, you know, like not worried about zero. I think though, when you focus on performance and you think about this stuff and you go, look, the framework's
[03:14:26]  going to take 10 kilobytes of that. You know, the, you like, it's about giving you room to work on stuff so that you don't, you
[03:14:35]  don't have like. What happens in these server component type of setups is on one hand, you can say like, Oh yeah. Yeah. Like it's less JavaScript
[03:14:47] . We got to win. It's good enough. Anyways. But on the other hand, it puts a huge spotlight on like the differences, like something now, you know
[03:14:54] , for people who care about, you know, armchair racing or whatever, the difference in performance is that much more obvious, like, like if you took an app that
[03:15:05]  was 500 kilobytes in a framework. Okay. Like react. Okay. That's what code splitting is. The main page is 500 kilobytes. You got
[03:15:14]  some other crap in there, whatever. Um, it's got a lot of components, whatever. And then you made the same app in something small, um, preact
[03:15:27] , let's say. And as it turns out the components are about the same size. So 44 minus four, so 40, you're, you're now you're
[03:15:36] , you know, it's 440, but you also use some preact libraries instead of react libraries. So you could kill the boat a bit. And let's say
[03:15:43]  your 500 kilobyte page is now 380 kilobyte page in, in preact. Okay. Okay. Okay. Does that make a big difference? Yeah
[03:16:01] , maybe. But now you, you do server components. And that 500 kilobyte page now is 200 kilobytes or 190 kilobytes in next.
[03:16:23]  And you do the same thing in something small, but also as a smaller server component thing. So let's pretend something like solids router solution or what we're seeing here with
[03:16:30]  Astro. And you know, you first go, okay, well the difference in size is the difference between 10 kilobytes and about 80, 90, let's say
[03:16:42] . So that's about 80 kilobytes difference. And then you're like, so the W that 200 become 120, but then you also have some smaller libraries.
[03:16:50]  So you end up with 80, 70, let's say we end up with 70 kilobytes. The difference between 70 kilobytes and 200 kilobytes feels to
[03:17:05]  the eye. And maybe not in reality, a lot bigger than the difference between 380 kilobytes and 500 kilobytes. Because yes, you, you,
[03:17:17]  you might even save more kilobytes by using Preact instead of react on that, you know, larger app. But you start looking at 70 into 20, it's
[03:17:29]  three times smaller. Like you start doing that and to be fair, that's not what matters. It's probably a lesser difference, but in your head, you look
[03:17:42]  at it and you're like, it's three times smaller. So I think that's why this is kind of interesting when people look at the stuff for performance. So
[03:17:53]  yeah, I, I, I, this, this is sort of the, the, the, the, the kind of scale here we're talking about where I think people
[03:18:19]  making silly toy demos and everything. Like it's, it's, it's a dip, seeing Astro do this is really cool as a baseline. They still have
[03:18:26]  a lot to, to work through probably. Um, in terms of what I was talking about before about context and what's renders on the server and the client and how
[03:18:32]  to do that. But the, the, if the basics look great and I'm pretty excited to see where this goes. All right. Yeah. Anyways. I think
[03:18:46]  that, that, that was it for this MPA versus SPA, unless anyone has more questions about it. Basically, um, as I said before, JS frameworks
[03:18:54]  consolidating into a single space for the most part, even like if the MPA way persists works better and is lower in weight for anyone who's not VDOM
[03:19:07] . They're just going to use that instead and essentially, you know what I mean? Like the, that's all that's going to happen here. It's going
[03:19:16]  to be, be hidden behind, you know, compiler that, that, you know, mark stuff or whatever in the same way that we mark other things, you know,
[03:19:26]  like islands. So I feel like the details there are just going to go between whatever's faster as long as the system is based around HTML. I think it's interesting
[03:19:39]  to have system not based around HTML when you start thinking about, you know, mobile platforms perhaps, but it's interesting that there has been a lot of work on, you
[03:19:47]  know, stuff on the mobiles and like universal side to get closer to web APIs anyways, stuff like Tori. So it's like, I get, I mean
[03:19:56] , I don't know, we're going to have to see obviously, but I think it's, I think that at a certain point, this argument, I mean,
[03:20:08]  we already knew this kind of doesn't really matter. The mechanics of it is going to get washed into a very similar, uh, development experience. Cause as I showed
[03:20:19]  you here, the difference between the Astro persistent Island version and the, uh, solid start persistent islands version or whatever, you know, I mean, I'm, I
[03:20:35] 'm basically writing the same JSX and both of them, you know, like we're not, we're not that worlds apart. So yeah. All right. But
[03:20:46]  we are not done for today cause we still have this week in JavaScript. Um, let's get that going here in a minute. Um, I'm just going to
[03:20:57]  just hide up my screen here for a minute. Okay. Okay. And getting all the Twitter windows open. Okay. Okay. Okay. And getting all the Twitter
[03:21:20]  windows open. Um, obviously we already talked about what I considered the, the, the big topic here. It's why I was, uh, very interested in talking
[03:21:44]  about this in the first place. Um, was this MPA spa thing and how many people can put videos out about that this week, but, uh, let's
[03:21:59]  see here. Sorry. Just give me one moment. Okay. Got my profile. It's been a few weeks, which is nice. So, um, there's
[03:22:13]  actually some stuff to talk about. Although probably never as much as I'd like to, but that's okay. I guess he talked about some of the stuff already.
[03:22:33]  Oh well. It's all good. Give me two seconds. Okay. Okay. Yeah. Okay. Yeah. All right. Okay. Okay. Yeah. All right
[03:22:47] . Okay. Okay. Yeah. All right. Okay. Yeah. All right. Okay. Yeah. Okay. Yeah. All right. Okay. Okay. Yeah. All
[03:23:03]  right. All right. Okay. Yeah. All right. Yeah. Yeah. I think I'm pretty much good to go here. Okay. Cool. All right.
[03:23:16]  So the solid one, how difference between certain client is not in that one. Uh, yeah. Yeah. It's not in that one. import statement. And then
[03:23:38]  the current version of solid start. I, I'm not gonna lie. We, we, we just put use client in there. Um, I'm not sure if we
[03:23:45] 're gonna stay with that, but it's literally just put use client on the top of the component. Found that another framework was doing that. We thought it was pretty easy
[03:23:53]  to do. I, I'm not saying that's gonna be the final API, but the code didn't really have to change for it. Okay. Cool. Hello
[03:24:02] . All right. So yeah, let's, let's get started with this week in JavaScript, which started three weeks ago. Yeah, for me. So let's
[03:24:10] , I'm gonna throw the banner up. This week in JavaScript started three weeks ago for me. I've been away for a couple of weeks. Um, trying to
[03:24:24]  think back, putting in perspective, three weeks ago is when Elon Musk decided to change, uh, Twitter to X. Um, so th that's basically where, where
[03:24:48]  this, this starts for us. Um, let me go back to sharing my screen. Um, introducing the new Marco logo. I think a lot of people had fun with
[03:25:04]  this. I don't have much to say about it. All I, I mean, it's, it's kind of like one of those things where like, Elon
[03:25:13]  Musk really just wants to make something happen. You know, like, like that silly meme about, you know, stop trying to make fetch happen. I don't know if
[03:25:23]  it's related or not, but X, um, was what he had originally named PayPal, um, back in the day. And they decided that that wasn't the best
[03:25:33]  name for it. So they changed it to PayPal. Um, I guess he just finally got a chance to bring it back. Oh yeah. My green screen background.
[03:25:51]  Yeah. Of my own office. Yeah. I got updated. A bunch of new Lego, um, and some other new cool nerdy stuff. Did I actually show
[03:26:03]  it on stream? Actually, give me two seconds. I know this is this week in JavaScript, but this thing was way too cool not to show on the screen. I
[03:26:09] 'll be right back. I'll be right back. I'll be right back. I'll be right back. I'll be right back. I'll be right back
[03:26:14] . I'll be right back. I'll be right back. I'll be right back. I'll be right back. I'll be right back. I'll be right
[03:26:19]  back. I'll be right back. I'll be right back. I'll be right back. I'll be right back. I'll be right back. I'll be
[03:26:25]  right back. I'll be right back. I'll be right back. I'll be right back. Alright. Check this one out. They got me a self-
[03:26:34] portrait Lego, and I know I shared this on Twitter, but it's even got the solid logo on the shirt. It's just solid really faintly underneath. You
[03:26:46]  probably can't see it on the shirt. It looks like it kind of rubbed off, but yeah, it's one of those blockhead Legos. I'd
[03:27:03]  rather see your new Lego than your Elan. The next Lego movie will be about Signals. Yeah, there you go. Yeah. Yeah. No, it's very
[03:27:19]  awesome. Anyway. Yeah. So yeah, that puts everything in perspective. I'm going to do a little bit of solid update. I've been working a lot on
[03:27:39]  solid and solid start. All the work. I've been trying to do a merge for ages. I mentioned it, I think, maybe on the previous stream, because that
[03:27:47] 's around when I started it. But in the meanwhile, a lot of other cool stuff has been happening in the community while I've had my head down. I'll
[03:27:55]  talk about the merge in a minute, but this is very cool. Vercel AI SDK has experimental support for solid JS, which is very cool. I haven't talked
[03:28:03]  to them for a while. So great to see them adding a solid start example. Super awesome. Yeah. There's some cool stuff that we've shared over the last couple
[03:28:17]  weeks, creating browser extensions in solid. I think there's a starter kit. I love seeing this. Solid talks in all languages around the world. Courses.
[03:28:29]  Stuff really kind of, you know, picking up. And yeah, motion one animation stuff. It's funny. Part of me wonders if the view transition stuff can make this
[03:28:48]  way simpler, but still very cool to see these libraries come out. And speaking about libraries, I'm surprised at this one. Solid primitives is now approaching 200,
[03:28:58] 000 monthly downloads, which is pretty big. That's 50,000 downloads a week. Um, which is, well, I think, I mean, I don't
[03:29:10]  even know how much a solid downloaded these days. Like, can we figure out how many solid? Yeah. Okay. Yeah. So almost, almost half. Yeah.
[03:29:25]  Solid gets downloaded maybe 120,000 times. So almost half of solid users use solid primitives. They're in their projects or half of solid projects use solid primitives.
[03:29:34]  That's pretty cool. Um, and this is a completely community maintained. They're very open. They do RFCs and stuff. So very awesome to see that
[03:29:45] . Yeah. I, I, I think we're just starting to s to see like, you know, some of those people have been looking at stuff, try projects
[03:30:03]  with it and, you know, getting good results and stuff. It's been tricky to start has been, uh, start has been, um, start, start has
[03:30:19]  been, uh, taking a bit of time, which I'll talk about in a minute, but yeah. Oh, we're talking about re script. Uh, I think
[03:30:25]  it's cool. We've been trying to get stuff working there for ages. And then there's a fable thing as well. It's just, it's hard when
[03:30:33]  all the other, everyone assumes GSX to have a specific compilation. When it doesn't and porting solids compiler is not as easy as it should be. Um,
[03:30:42]  there's been great work there. The SWC plugin works. Uh, they finished it. I don't know if I announced this that the client side, if you're
[03:30:49]  just doing client side rendering, my understanding is that the SWC plugin now for solid client side is basically, uh, like fully up to spec, so to speak. And
[03:31:01]  it can handle all the stuff client side. So obviously I, I didn't, didn't touch that. I've been working on Babel, but it's very
[03:31:07]  cool. If you want, try it out. Yeah. It started, it's been hard to start. Yeah. I feel bad for blocking people. Um, yeah.
[03:31:22]  Uh, but we're, we're getting somewhere. I'll show, I'll show you what's been going on. Um, anyways, uh, we can,
[03:31:33]  yeah, you know what? I'll, I'll do this, the solid update right now. Why not? Like the stuff that I've been working on. Cause
[03:31:40]  yeah. Do we get new issues here? Yeah. I'll always do issues. Um, what, I mean, it's, you could tell, I've, I
[03:31:51] 've looked at this recently and I was like, Oh wow. Where have I been the last while? Well, I was at conferences obviously, but even then you're like
[03:31:58] , Ryan, why isn't this chart like way, way more busy here? You know, since, since you've been, since you've been back and working?
[03:32:06]  Well, the answer to that is I have been working very, very, very, very, very hard at merging, uh, merging solid start. Basically every, a bunch
[03:32:21]  of people worked on the movies app a while back. Oh, build fail again. What is it? Sorry. Uh, it's not going to tell me ethics and
[03:32:32]  look, sorry. Um, merging the movies app back in and all the experimental Island stuff to the latest so that we can start an R and D and what this look like
[03:32:42]  is the most monstrous, um, merge PR that I probably have ever worked on. Um, where is it? I've, I've been fixing it. I've
[03:32:51]  been helping a lot of people, uh, are sort of do merging a lot of PRs last few days, doing a lot of releases stuff. Development is just solid
[03:33:00]  is been picking up a bit. Um, but this, this merge started like this branched off 10 months ago. And like, I'm, I, I,
[03:33:13]  I, basically I've, I've, I've, this, this has just been me the last like few, couple of weeks. Just do, do, do
[03:33:31] , do just fix, fix, fix, fix, fix debugging, broken merge stuff. Going back between branches, seeing when they worked. Um, it's just, it
[03:33:39] 's been, it's been a lot of work. Um, but we're there now. Um, there's still a couple of small things I think, but for the
[03:33:48]  most part, we've got the docs deploying again, got everything working again. There is no, you, everything that went in to make the solid movies app is now
[03:33:55]  available for experimental mode. People can go and use it and try it. Um, so this, I wanted to get in because it's very hard to merge this stuff later
[03:34:05] . Uh, which people are asking, okay, well, how's the move to Astro going? Um, we've been, I'm going to throw it right
[03:34:18]  out there. We've been, we've been, it's been, it's been going pretty well. Um, but in order to hack stuff to work, which I
[03:34:29]  managed to get stuff working in the most part involved a lot of breaking Astro stuff, like turning off a bunch of plugins and basically Astro as Astro and solid
[03:34:38]  start and solid start would not work in the same project. Cause we basically break Astro to make solid start work. And it's a difficult position to be in, um
[03:34:47] , because it's, it's going to be challenging, uh, for us to kind of reconcile that work with Astro's roadmap, which is in, you know,
[03:35:00]  they've got their own set of features. You see this view transition stuff. It looks really good. Um, so I've, I've been talking a lot with
[03:35:07]  Fred and we are exploring some other options. I, I don't, I do intend to move off our own adapters. Um, there's been some conversations like,
[03:35:15]  uh, you might've seen something in solid repo discussion about, uh, bike or V plugin SSR. Um, also been looking a lot at nitro, which
[03:35:22]  powers next, as you mentioned, as I mentioned on the analog stream. Um, you know, Nikhil has been doing some really good work on top of nitro.
[03:35:32]  So, um, basically at a point where evaluating, um, that I, this is why I did the merge first. Cause I wanted to make sure that we had
[03:35:41]  all the features in, we had solid start in its entirety because it was a mess. And I, I couldn't touch a bunch of stuff because, you know, trying
[03:35:49]  to merge it later. I basically, if you've ever seen the pull requests in here, it was literally like experimental, experimental, experimental or adapter, adapter, adapter
[03:35:58] , example. I didn't want to touch anything. Um, when it was in that merge state and I was, I thought I'd rebase at first, but in
[03:36:05]  reality, rebasing and then trying to get the stuff back in would have been a nightmare. So, um, I'm happy that solid start is finally itself again. I
[03:36:15] 've finally had enough time. I knew this would take me weeks to do. I just didn't have three straight weeks to do it while I was traveling in conferences.
[03:36:23]  Um, so it's done. Um, which means stuff development's picking up much, much quicker again. And, uh, I'm, as I said, we do
[03:36:34]  the rebase. Um, I think that'll be the last real unblocker because there's a bunch of stuff we've learned, but I'm very excited because there
[03:36:42] 's a lot of improvements that we can make to the, the core architecture with this rebase. Um, so that's, that's where the focus is going.
[03:36:52]  Did I say next? I meant next. I said next. I meant next. Yeah, the naming is, the naming is fun. Anyway, so that, that
[03:37:05] , that, that is the solid update. I try and get to all these, uh, a lot of these open PRs and addressing a lot of the issues. A
[03:37:17]  lot of things have changed over time. Uh, we built on VEAT. We built on some other stuff that's been kind of more volatile and changing over time
[03:37:24] . So we've had the kind of pull it up into the future. So, um, yeah, I'm, I'm excited about this effort going. We have,
[03:37:32]  um, Alexis who has already started on the R and D stuff, been working on benchmarking. Um, we have, you know, a solid learn the pun code
[03:37:43]  base to get started on. So things are, things are moving forward with that. Um, so yeah, that's, that's a solid start update. Solid reactivity
[03:37:53]  stuff. Um, Milo is on vacation right now. I will update you all when he comes back. Okay. So let's see what's next. Oh yeah
[03:38:08] , yeah, yeah, yeah. Yeah. Let's, let's see. Let's scroll up. I should hopefully have it here. Yeah. I hope everyone saw this
[03:38:21]  Valley bot. Um, I hope I said that right is a new validation library. Um, kind of like Zod, but it's tree shakable and it
[03:38:31] 's super small. It's like compresses like crazy. Um, I think this is really exciting. Uh, Fabian, uh, you might've heard of him.
[03:38:41]  He built the modular forms library that we use in solid. And then he went on to build one for quick and for preact. Um, does really good work in terms
[03:38:50]  of, you know, code size. And one of the challenges that I've had, and I'm not gonna lie. Why I haven't put like Zod in
[03:38:57]  as like the starter, you know, or like have validation is because it makes those numbers look bigger. You probably need it in reality, but this is a game changer.
[03:39:08]  When you can include a library, have the basic case without like taking any size hit practically. And so it demos well and it scales to your need. I'm
[03:39:17]  very excited about this. Um, a lot of discussions with Fabian. Um, myself and Mishko are acting as advisors for his, um, thesis, um,
[03:39:29]  which he's in the process of writing right now, but he's already, uh, released the library so others can use, which is very, very cool. Yeah
[03:39:40] , exactly. Yeah, exactly. So I know there's been pushed and he, the people like, Oh, I miss the chaining API and all this. Yeah
[03:39:53] , I mean, that's the reality of it. Uh, Fabian was showing me that like the, with the ability to do auto imports in VS code, this still
[03:40:02]  works fairly well as long as you like know what you're looking for. Like start typing string and stuff. So while you don't have the chaining, it does
[03:40:10] , the discovery works pretty well. It was very important for him to have that kind of experience when building this and, um, we found out later that I guess there's
[03:40:21]  a couple other libraries that are sort of similar. Um, he did look into a bunch of libraries when he was benchmarking and testing this, uh, for the release.
[03:40:30]  Um, you know, and we reviewed some of the works he, he did and helped him debug some, uh, benchmarking stuff, but, um, yeah,
[03:40:39]  it's, it is, it is very impressive. Um, that even the whole library with the stuff you probably aren't going to need is about 4.5 kilob
[03:40:48] ytes. Um, so, yeah. Um, I hadn't seen the transpiler, but that is very cool. Yeah. Yeah. Easy to do. If you
[03:41:09]  think about it, it's like our undestructure plugin, except you don't have to worry about, um, uh, like what's a component. Yeah. A
[03:41:18]  transpiler for that is actually dirt, dirt simple. Now that I think about it, like trivial. Um, yeah, but yeah, we're already looking at this
[03:41:30] , um, you know, around the solid start ecosystem. So very, very excited about this. Um, I, I think it actually makes a difference. You know,
[03:41:41]  this, this reduced size. Yeah. Super struck person again. What? I'm sorry. Uh, I don't know. Does anyone care whether signals or hooks are
[03:41:59]  declarative or not? Uh, there is, there is a, there was a discussion with, uh, Matthew Phillips, uh, that came out because, um, James
[03:42:07]  Q quick was like, after 10 years of coding, I still have no idea what declarative means. And he's kind of right. Cause the funniest thing about coding in
[03:42:16]  general is that like, even though like there's a difference between declarative and imperative code, in a sense, you could like it from a very purest, like
[03:42:29] , I guess it's not true, but like, there's a lot of things that involve declaration in programming and patterns that, that involve like setting up rules or like connecting
[03:42:41]  pieces together without describing how they go one, then another, then another. So like this whole conversation about hooks versus signals being imperative or not, um, actually end up
[03:42:55]  being a bit of a debate. Um, but I don't know. My, my first thinking is I've always called these patterns declarative data because you'd set
[03:43:04]  the rules, you know, like, even though they have dependency rates, you're basically saying this depends on this, that depends on this. Um, but then,
[03:43:10]  you know, Matthew was quick to point out that hooks have a hook rule ordering consideration. Um, and I was like, yeah, but like, I dunno, like signals
[03:43:22]  in theory, if you could wire them, the order shouldn't matter. Um, in a way that's impactful, that's part of the glitchless, uh, rules
[03:43:31] . It is with our ego eager memos, it's easier. It's harder to do that. But in theory, the order in which you set the rules shouldn
[03:43:37] 't matter as long as you have like the things to set, right? Like, I think this was, where was it? There's an example in here. Yeah
[03:43:51] . Yeah. He's like, look, our computer balance for me with signals. The computer value can read the value of another thing in which case the order that these things
[03:43:59]  matters runs. Yes. But like I was saying, like, if I, I just wrote it backwards. If you had lazy computers, you could, because you could
[03:44:09]  say what the effect was. Like if you declared the variable, I know this is a silly example, but it's just showing that like, in a way you could view
[03:44:19]  this as rules. Like as long as you say, there's an effect that depends on this and a computer that depends on this or memo depends on this. And then this
[03:44:26]  is this, like, it doesn't actually matter. If it's hard to debug, it's declarative. Yeah. Thanks. So like, in a sense,
[03:44:39]  it doesn't matter. If it's hard to debug, it's declarative. Yeah. Thanks. So like, in a sense, it doesn't matter. If it
[03:44:47] 's hard to debug, it's declarative. Yeah. Thanks. So like, in a sense, it doesn't matter. I mean, this takes me back to
[03:44:59]  the discussion that I had with Dan Abramoff at the end of the signals thing where he was, let me, you know, the one that I'm talking about,
[03:45:11]  probably the, where was it? react signals 10 years later, because like, he was defending reacts ability to like, write code that looks like this, where like you
[03:45:26]  led and then you rewrite it. And like, you do all this kind of stuff. like, broken version, broken version, solid, working version in react. Like
[03:45:35]  he was kind of defending the ability for react to do this kind of crazy nonsense, essentially, you know, a bunch of lets and add and write. And I was like
[03:45:43] , this is, this feels very imperative when you're like, let this and then if this set this and loop through this, you know, you know what I mean?
[03:45:51]  Like this feels like imperative flow. However, I wrote the solid version later. And I was like, why don't you just write it like, like this? Where
[03:46:01] 's the full version? Yeah, I think this is the final version right here. That's the, no, I guess this was the final version right here. Here
[03:46:14] . Yeah. Like, why don't you just say count is this, heading is this, something else is this. Essentially, I view this as, I guess this is
[03:46:25]  my view of declarative because you basically are making these all into declarations where you define something by its expression or its rules. You're basically wiring up the graph,
[03:46:35]  so to speak. And you can see other than the existence of when these, like, if you sit at top here, like if you declared all the variable names up top
[03:46:45] , um, like count, heading and something else. If you declare them up top, the order you make these statements actually doesn't matter. Um, because you're setting
[03:46:54]  rules. And I was saying that this was better code for UI cause the whole thing is declarative. Um, anyways, this is a little bit of a tangent here
[03:47:03] , but it definitely is what came to mind here. "Declarative relies on expressions or imperatives in statements." Yeah. So, I don't know.
[03:47:19]  Maybe not the most interesting discussion, but, um, yeah, I, eh, who cares, right? But the kind of things we talk about. Um, other cool
[03:47:34]  thing that I looked at, I was trying to, I was looking at Svelte a lot recently. Cause I was looking at how they do, um, some
[03:47:43]  of the more complicated, nasty things that I've taken from React. And sometimes Svelte has a much, much simpler solution. And one of those is how to handle
[03:47:51]  meta tags. Um, but I found a few shortcomings with it. And I was trying to ask the Svelte community if they had those as problems. Cause if
[03:47:58]  not, like we could simplify things drastically. One of the coolest things that Svelte actually compiles, like when you write a head. Like if you write a
[03:48:08]  title HTML element, it actually doesn't make a title element. It just writes to the title, which is so smart. Cause then you don't have to do any diff
[03:48:15] ing or deduping. Cause you can always just set the title. But it does mean that like, if you have the title in multiple places and it's reactive.
[03:48:21]  Well, it's possible for the title to be overwritten by a parent, even though you've written a child component. But the truth of the matter is there is
[03:48:30]  some complexity with the order of stuff running and hierarchy in these kind of meta components anyways. Like you want to say that the sibling that comes after beats the other sibling. But
[03:48:46]  while hierarchy is relatively easy to track siblings, um, that execute in different orders, it's not so easy to track. Like let's say the first sibling was hidden
[03:48:57]  and then you render the title for the second sibling. And then you show the first sibling. Well, if they're at the same level, then technically speaking, the,
[03:49:07]  the first sibling beats the second sibling. So the fact that it's imperfect anyways, makes this kind of interesting. Again, these are probably details that, you know, um
[03:49:17] , are more interesting to me than to others. But, um, the ironic part just for anyone wants to wrap up conclusion to this thing is I realized that I,
[03:49:28]  I think metadata belongs to the router anyway. Um, so this whole conversation of putting like processing, like tags in the middle of the markup probably doesn't make sense
[03:49:43] . I think that it's declarative, but you know, that's what the declarative conversation where you can like declare these things, but because the rules are kind
[03:49:51]  of iffy. You're almost better to feed into, you know, like, uh, something at the route levels, maybe something that could be, um, generated off
[03:50:01]  the route data. Um, so that it could be handled with preloading and static generation, all that kind of stuff. So I, I mean, you can
[03:50:08]  always do this after the fact and collect things, but I think this is actually a place that I might've been going down a wrong rabbit hole. Hmm. Okay.
[03:50:23]  Here's the topic. Uh, there is a new proposal to bring observables into, uh, the, the DOM API, not the JavaScript. Like they've tried to
[03:50:38]  bring it in through TC 39, but to bring observables in through like, uh, the, you know, like the WC or whatever. Um, the idea
[03:50:47]  is adding observables to elements to listen to events so that you could do more advanced RX type stuff without RX. I don't know how I feel about this, but on
[03:50:59]  the other hand, I, I almost feel like this is the cool RX demo. I, I don't have much use for this from a framework standpoint because I kind of
[03:51:07]  want to put it back into the JSX. But on the other hand, you know, if, if I had something that did this, I don't know how
[03:51:15]  often I'd be reaching for RX. Just, just throwing it out there. Like this is like RX is for very complicated async data flows, generally speaking. Um,
[03:51:25]  and this is like, yeah, I, I actually like, uh, Dan Shapiro's, uh, thing here. It's like, it's nice and all
[03:51:37] , but who'd actually use it? They're saying we're using, no, not who's using RX. He, but he said something, using this on its own
[03:51:45]  feels like jQuery. And I see what he's getting at. Like, it's all these just chained operators on something where you're kind of like, eh,
[03:51:52]  you know, like. It's like asking after mom, dad said no. Uh, isn't the data needed for meditation missing the route alert? Well, it
[03:52:22]  depends. I strongly believe that data fetching should be hoisted. Otherwise you cause waterfalls. It's innate. So it may be not at the top level router
[03:52:31] , but at the route section level it's. And, and I really, the thing that I was going to mention is the react has been working on like this kind of
[03:52:39]  proposal similar to Svelte. Like the, with like the head, like we could just put tags that would normally go in the head anywhere in, and then have the
[03:52:46]  compiler handle it or, you know, runtime handle it. But like, so they, they had an RFC for it, but next JS ended up going with like
[03:52:56] , like specialized format. Same with remix almost everyone, because they want to know what the route level, you could feed that route data back into the meta tags and, you
[03:53:06]  know, handle streaming and stuff properly and all that. But like they almost all this, like you can do it the other way and have it collect it. But that
[03:53:14]  collection is maybe imperfect. So like there's, there's this desire, uh, I think to simplify things to handle it at the router level, like through the file system
[03:53:27]  routing. Okay. What did I do if I want to put the current timer unread message counter in the title? Yeah. I, I, I, I'm
[03:53:46]  suggesting that. Yeah. That's interesting. Cause you're saying like drive it off state and I'm saying like, you could basically do like the, the thing is,
[03:53:56]  sorry, I guess no one cares about the RX thing. Oh, but the thing is like this, this, uh, document equals title thing in a crate effect is
[03:54:09]  easy to do. So to speak. And in a sense, if you made it into a router provided API, like title is like use title or something from the router.
[03:54:27]  And you can manage it. Then I feel like, um, like that would also be relatively easy to do. Like the router can both handle it at navigation time.
[03:54:41]  And then you could always set it yourself manually. I think, I think in general, we need to think a bit about like the time, the, what it
[03:55:04]  means to have like data in like text data, like timestamps inside content that we've server render. Like classically, we said the clients, the boss, um
[03:55:18] , it's, it's interesting. Cause if we get to a point where we don't want to do hydration, the server has to be the boss. So,
[03:55:30]  uh, you know, at least setting the initial state. So it's, it's interesting to me, um, for things like that anyways, cause like these can't
[03:55:43]  be the sources of hydration mismatches. Yeah. So, I mean, it's a matter of whether you like the declarative APIs. Uh, there is
[03:56:05]  some tension there. It's just there's the expensive stuff for server rendering. Isn't your title counter thing, right? It's the data loading dependent stuff in the streaming
[03:56:20]  and centralizing the main mechanism helps with that. Um, it is interesting. Svelte kit still uses Svelte head. So it requires still more looking in either
[03:56:31]  case. I looked at what we're doing in solid meta. And if what Svelte does is okay, I could probably reduce the package size by like half.
[03:56:39]  Yeah. I mean, how big is solid meta anyways? Bundlephobia. I mean, tree shakes a bit, but not great. Solid JS meta. Yeah.
[03:56:49]  It's 1.4 kilobytes. GZipped. I'm pretty sure we could get it to like 700 bytes if we use the Svelte approach.
[03:56:59]  Got bigger recently. That's so funny. Cause solid meta was originally a port of, uh, react helmet. Or react head. I forget what it was called.
[03:57:20]  It was probably react head. Yeah. There's react head. Cause I remember I was sitting there and I was like, I can't change the name to solid.
[03:57:43]  helmet. Yeah. So, um, yeah, anyway, if it was helmet, I might've been okay with solid helmet. Yeah. People get it. Yeah.
[03:58:01]  Okay. Good. In any case, I don't know. People are very excited about this on the RX side. Um, I'm probably going to be talking to Ben
[03:58:20]  Lesh coming up. And I think the Svelte side is interested cause the Svelte community does, um, use subscribables. Like their stores are
[03:58:29]  subscribables. Like, let me see if I can find it here. Did I not even bookmark that? I didn't. Oh, that's sad.
[03:58:40]  Whatever. There, there was a, there was a, there was a bit of a conversation going on about like the difference between observables and whatever. I thought I'd
[03:58:50]  give a good answer. Um, anyways, uh, the reason I remember the Zod thing was someone wrote this as a response of Tanner, um, Tanner obviously ret
[03:59:03] weeted the Valabot thing, but then they, then they, they, they wrote Zod has quite an ecosystem that almost react like, and I thought this was
[03:59:13]  funny. Cause it's like the justification we have, um, now for like, yeah, I'd try the new library, but you know, it hasn't, like
[03:59:23]  the comparisons to react as like, like it's a testimony to react, but it's interesting to see something like Zod being used in the same thing where I ha
[03:59:33]  I have to feel like integrations for this is relatively trivial and it's things are pretty like compatible, right? Like it's almost like a direct swap. Um, but
[03:59:45]  yeah, I dunno. It just, I, I'm always looking for at people's sentiment around, you know, the libraries and how they feel about it. So this
[03:59:53]  one just stood out to me. Uh, we already talked about control flow for angular. They are really changing stuff up. Um, deferred loading, I think is
[04:00:04]  their lazy component. So yeah, a lot of thought going into the stuff in angular angular is going through a crazy renaissance revolution right now. It will be very interesting
[04:00:16] . See what it looks like in a couple of years is Jamstack dead. Here's a, here's a, here's a throw to the, to the
[04:00:25]  JavaScript jam crew. Yeah. How's it going Anthony? Yeah. So this was actually because of this article here, according to Jamstack pioneer, Brian Rinal
[04:00:42] di, we can pack it up and leave our static sites behind forever because Jamstack is officially dead. Right. And that was that, but I think he,
[04:00:50]  he published an article before this. Yeah, here it is. And so he's, he's just talking about the progression of like the whole Jamstack thing.
[04:01:18]  And I think what triggered this was killing the Jamstack discord. Um, the Jamstack discord does not exist anymore. Um, I was, yeah, I
[04:01:28]  was there when that happened. Um, basically, uh, Netlify has no dev rel team anymore. Um, and they were the ones managing the questions for the most
[04:01:43]  part. So even though the decision was made slightly before that happened, it was kind of the writing on the wall that Netlify was basically, and Netlify
[04:01:54]  isn't even, um, really recognizing with Jamstack. It doesn't really mean anything anymore, but I, I think it's, it's really interesting to see
[04:02:03]  because of how big of a difference it made for companies, um, that like for some people like the, the, because the disruption that came with, like, like
[04:02:14]  Jamstack's been kind of dead for a while. Um, so yeah, Jamstack is a feeling. It doesn't say is the feeling is mostly ambival
[04:02:29] ence. Yeah. Yeah. I don't know. Uh, I guess it's official now. And that was what that space was about. Yeah. Yeah. Yeah
[04:02:40] . I mean, uh, Demetrius pretty much completely. Yeah. He was like the hardest soul. Yeah. Jamstack is a state of mind.
[04:02:54]  Yeah. Yeah. Yeah. Yeah. That's right. Work with Demetrius, right? Yeah. Um, in any case, yeah, it's, it
[04:03:08] 's kind of the, yeah, it's, it's the end of this, of this time era, I don't really have much to say, but I was
[04:03:22]  not really involved with Jamstack at all, but, um, it doesn't mean anything anymore and it, it served its thing. But I think for those who were
[04:03:34]  involved, uh, uh, you know, this, this is probably a bigger thing. What is Jamstack? When was this panel debate? I'm just curious.
[04:03:45]  When was this? Is this recently? Two years ago. So like it, it was already kind of ambiguous at most, but I guess what I'm saying, the
[04:03:54]  only reason we're talking about it giving it any airtime is it's officially dead. Now we can, we can say that, um, there is no Jamstack
[04:04:04]  conference, um, this year, for example, it's, it's, Netlify's conference is coming under a new name. So yeah. Yeah. Yeah
[04:04:14] . Yeah. And that's, that was, that was, uh, Matt Billman's, um, statement, right? Like over, and I think, I think
[04:04:24]  it was in the blog post, something, uh, I already closed it. Let me see if I can find it again. It wasn't from, it was Brian
[04:04:30]  where we're, is Brian's link. Not that time. Um, it wasn't Swix's. It was, it was something along the lines of that. Like
[04:04:42]  Jamstack succeeded. Yeah. Matt Billman. Jamstack won so much that it became less useful as a community term. Basically all modern web frameworks ended up being
[04:04:49]  built around self standing front ends and API services. But yeah, over, I, there was some kind of quote here about how over time, like the jam came lower
[04:04:57] case and it just kind of, yeah, got like normalized down to kind of like change the impact of it being different. Has Compose been announced? Yeah. Goodbye
[04:05:15]  Jamstack. Yeah. I feel like, yeah, this is the one that I'm looking for, I was looking for. This was the, the very, uh
[04:05:32] , you could tell like, that Brian, like that Brian cared about this whole thing. Um, will likely retire using the term. I don't have a replacement.
[04:05:44]  I think newsletters like Jamstack and events like the jam.dev are relevant to folks who've tended to focus full stack development, blah, blah, blah.
[04:05:51]  Anyways. Yeah. So we're the, the, the short of it is we're, we're not using the term Jamstack anymore. It's done. We
[04:05:59]  weren't anyways, but now it's officially dead. All right. Okay. We'll get to that in a minute. All right. Big news for our, our
[04:06:08]  friend who was on the stream a few weeks back. Aiden was awarded a $16,000 grant from emergent ventures to work on million JS full time for the
[04:06:19]  next four months. So very exciting. Cause this, this completely changes what he can do, right? When he built million, he was like, okay, I can
[04:06:29]  make something react like render more optimally in these little blocks with this kind of focus and stuff. he he's actually looking at expanding it and positioning, um, million
[04:06:41]  as a way to make your react apps faster. Kind of like preact in the, in the past, but more like dedicated to the performance angle while keeping compatibility.
[04:06:53]  Like preact kept compatibility inferno didn't for performance. He's trying to keep it for performance. I think it's interesting because the types of optimizations that million can
[04:07:02]  do, like we saw work really well in leaf nodes, but don't affect the structural considerations. And I think what's going to be fun and challenging moving forward is
[04:07:12]  that, um, react knows that, and they're addressing the bigger pictures and the rendering. So either the, this combination is going to work really nicely, or at some
[04:07:23]  point reacts going to kind of make these optimizations like unsavory. Like I, like you gotta think that if react wanted to improve performance in this way, they just
[04:07:35]  would. I like, I wonder if like a world of react forget, like this doesn't fit in anymore. It'll be interesting to see. I assume he's
[04:07:45]  still using JSX, but if we actually use a completely different way of compiling their statements that it should be interesting to see where that leads to. All right. Okay
[04:07:57] . We got two more things, I think. I'm not going to talk too much about this VT thing. This is true. Have trouble with third party libraries
[04:08:06]  and beat. Try both of these options. Seriously, just fixes so much. It's like always this. Someone's like, Oh, this library doesn't work. I
[04:08:14] 'm like, do this. Okay. Cool. So the last two topics, um, sweet. sweet. Okay. And I can take down that. Yeah. Yeah
[04:08:26] . Yeah. Yeah. Sorry. I missed that. I was so focused on my thing. I didn't see it when I was looking at my screen. Yes
[04:08:39] . No, everything helps. Um, that that's so awesome. Um, okay. If the Netlify call, I didn't think this had been shared yet.
[04:08:42]  Hmm. Hmm. But you're right. It is out there. it is out there. Oh, yeah. Yeah. Yeah. Yeah. Yeah
[04:08:51] . Yeah. Yeah. Sorry. I missed that. I was so focused on my thing. I didn't see it when I was looking at my screen. Yes. No
[04:08:59] , everything helps. Um, that that's so awesome. Um, okay. If the Netlify call, I didn't think this had been shared yet. Hmm.
[04:09:08]  But you're right. It is out there. Netlify compose October 18th, 19th. It's California, San Fran, and virtual. Live at the
[04:09:27]  iconic Fairmont. Jamst.conf last year was a lot of fun. I think this is going to be a different type of conference this year. I'm sure more
[04:09:42]  details will come coming up, but. Um. Um. That is the new Netlify conference. All right. All right. All right. All right.
[04:09:50]  All right. All right. I've been looking at here. Oh, yeah. My discussion with Dan. Okay. Cool. So, um, a couple of my
[04:09:58]  couple talks went up. Um, my talk on suspense, transition concurrency, if you're confused by what solid does and you don't understand react. Uh, I
[04:10:10]  think this is good because I, I, I, I realized that at a certain point in this talk that I'm like probably talking past most people. Um, but
[04:10:22]  it starts at least decently. Um, there are not many good talks to explain how suspense ties into everything. I tried to explain how suspense basically powers everything async
[04:10:44]  in solid and similarly react. Um, I even have a concurrent rendering demo at the end if you really want to see. Um, but I think this is really one
[04:10:52]  of the only resources it's for solid definitely, but in general, I think this is a very good resource. If you really want to understand the why, like mechanically
[04:11:03] , like, not like, like how it works, you know, throwing promises that, but I mean like why, um, we care about this and why we designed the
[04:11:12]  API in such a way. Um, but the other talk actually liked, uh, uh, quite a bit as well. Um, there's such an interesting concept for
[04:11:20]  a talk. And I, I kind of always wanted to make this example and actually do this in a stream. I think I did it in the pre-act stream where
[04:11:28]  I was showing that why pre-act signals were not the same as solid or whatever, not to a certain degree, but Mishko, um, actually. What happened
[04:11:40]  here? What, what happened here? I have like no audio. That's too bad. That's really weird. Oh, actually maybe I have to open in YouTube
[04:11:58] ? Hm. I lost my audio somewhere. Um, side note. I like love this description, but it's like saying it's playing the audio, but. Huh
[04:12:12] . Is that there are values over time. And the way to think about it is, um, there is a setup phase where you kind of set step in order to read
[04:12:23]  or write the value. That a value is just essentially value, you know, let X equals 42. X is the value, right? Now there is a signal which
[04:12:32]  is kind of like value except that it's in a bucket. So it's not, it's not that you are directly referring to the value 42. Instead, you
[04:12:40]  are referring to a bucket and inside of the bucket is 42. So usually when you have signals, you don't just refer to them as X, you either refer to
[04:12:49]  them as X dot value or you do it. Uh, like in solid case, you do X is a function. So you call it with parentheses. Uh, but fundamentally
[04:12:56] , you know, you are doing something, some extra step in order to read. Honestly, I don't need to hear his full explanation here, but I just,
[04:13:05]  for some reason this visual worked for me. I don't know if it works for others, but it's like the value, the value in a bucket and the value in
[04:13:11]  a pipe. Um, cause yeah, anyway. Um, but the, the reason this is actually, um, pretty sweet is he does a demo later on where he shows
[04:13:23] . Um, he's showing how signals work basically doing that. The, the only unfortunate thing about this video clipping is I'll get to the demo in a second,
[04:13:37]  but I, this, this part here, um, cause his head is in the corner and he's covering the solid logo. I just, I, I love, I
[04:13:47]  just thought it was funny that it said finest. I understand he's talking about how fine grained it is, but rating stuff on a fine scale, um, is
[04:13:56]  at least was amusing to me. Anyway, um, solid is behind his head there. So anyways, uh, let's go back to the example. I want to show
[04:14:10] , um, yeah, I want to talk about this example. Cause he came up with a very simple demo here, right? And the reason I'm talking about this
[04:14:27] , a lot of people don't understand when I talk about Svelte and React being really, really similar. Um, in that they have state that's belongs to components
[04:14:33]  and components re-render. Basically, he made this example where you had a parent, uh, component that owns a state. And then you pass the setter down
[04:14:43]  to a component over here. And then you pass it to some kind of intermediate component that finally gets it to where it's rendered in the DOM. And this is a
[04:14:53]  very simple example, but it's something that we've all seen before. I just want to comment on this. You can watch the talk yourself. Um, obviously more
[04:15:05]  detail, but I just explained it way. Okay. So he kind of like built up this whole setup where he has a visual and then he presses the button in here.
[04:15:20]  And then you see it go down the side here and he built it in each framework, right? And I think this one's react. You know, I have this
[04:15:29]  counter on the top. It contains a wrapper hit the button. That's because when the application first woke up on a client, you know, hydration. So basically the account
[04:15:41]  obviously renders once initially because it hydrates when it renders the component. When it hydrates, it doesn't do any DOM, but it runs the component once
[04:15:49] . But then when in react, when you press the button, it, it, all of these went to two every single component because the state is owned at the top level
[04:15:58]  component. Now this is without adding memos or without adding like any of the performance stuff, but the default behavior for react is if you press this and the state's owned
[04:16:08]  by the counter, every single component reruns again, right? Then he did the same thing in view. And in view, when he ran it is that at the
[04:16:24]  big, see if we can jump ahead of it. In view, the incrementer knew not to rerun, but the other ones reran. And to be fair,
[04:16:35]  if you'd use memo in react, this is what would have happened. You would have, because this, this side doesn't change. It just calls the set function
[04:16:42] . It just calls the button, but then the other ones rerendered. So view default, um, is very, is even though it has something like signals, it
[04:16:54]  basically runs like this as well. He mentions later because view has context API. Um, and I guess, you know, people were kind of unhappy with that explanation.
[04:17:07]  He showed that in view, if you, if you use the context API, it was possible to inject it. So that only this component reran. When you press
[04:17:20]  the button, if you continue on, he gets the Svelte, right? Um, and he had to do like a little work here. But what I love about
[04:17:30]  the, no, this isn't Svelte. Yeah. Yeah. Yeah. This is Svelte here. ConcreteCupoDemo. Um,
[04:17:39]  it was the same thing for the same thing for Svelte as, as when he tried to show Svelte, it never showed it as rendering because of the way
[04:17:50]  he couldn't put it. He couldn't inject his code in a way that showed it. But when he opened the, the dev tools, he was able to go
[04:17:57]  in and actually show that in Svelte, it actually renders counter wrapper display. So it actually has the exact same behavior as view. Um, funnily enough
[04:18:06] . And again, when you add, uh, stores to Svelte, you, you can get that same effect of just updating the one component. Um, and
[04:18:22]  then, uh, I think he jumps to solid, right? And obviously as we know in solid, it never, it never updates. Um, it just renders once
[04:18:33]  on hydration and then updates and the component never reruns. Um, and then he finally goes to quick where it's the same except, uh, it's zero because it
[04:18:45]  never hydrates in the first place. Anyways. Um, I, I think, I think what, what I really liked about this example and the reason I'm bringing
[04:18:54]  it up is Svelte, most people assume that it behaves like, um, solid or even like quick to a degree. Um, and it, it, it actually
[04:19:04]  doesn't. It actually behaves more similar to the VDOM libraries, like, like view. Um, it's, it basically, it behaves like a VD
[04:19:12] OM library with automatic memoization. Because it, the state still belongs to the component and it re-renders the components. It's not something that people can easily observe
[04:19:25] . So they assume otherwise, but it has the same structural chaining of how things update. Um, anyways, very interesting to see that in a talk. It's
[04:19:38]  too bad that the visuals didn't do it. I, I, I would love this remake that demo in a way that you could actually see the counters update accurately.
[04:19:45]  Um, but I think it got the point of cross and I, this is, this is kind of partially what I talk about, about architecturally. Um, it,
[04:19:55]  cause he just made this demo up and it's very clear, um, without trying to optimize or using context or whatever. But like, as you change the shape of your
[04:20:04]  app, um, this characteristic doesn't change about certain frameworks. Um, actually I think solid actually doesn't change characteristics in some cases, quick D ops back into,
[04:20:16]  uh, something similar to, uh, view with context. And I think preact is similar as well with signals, but generally speaking. Um, there I, I
[04:20:33] , I liked this talk cause it really highlighted that like rendering with signals is actually different, more different than pretty much all the other, uh, solutions. Something I was wondering
[04:20:48]  is why functions were chosen with class solids since the functions were basically constructors and return values as a render function. Um, well, I used to use classes with knockout
[04:20:56]  and this might be cause there was no, um, uh, uh, uh, what's it called? Like initializer properties. But my, my problem with knock
[04:21:04] out was I just wrote all the code in the constructor. Like I I'd write some event handlers on the class, but generally speaking, all my code was in the
[04:21:12]  constructor. And I realized classes now have that shorthand where you can declare the variables on the classes directly, like class properties or whatever. Um, I think was
[04:21:20]  that ES 17. Um, but like, it just made no sense from my perspective to, to, um, like have like all the separation when literally like pretty much all
[04:21:37]  the code was in the constructor. Class fields. Class fields. Yeah. Well, it was just funny. Like before picture picture, like, I mean, somebody probably
[04:21:51]  did picture putting react hooks in a react class component. Like what happens to your component, all the life cycle functions disappear and you end up with just like all the code
[04:22:01]  in the constructor. And then like a couple of end handlers. And in JavaScript, the vent handlers aren't even bound properly anyways. I don't think.
[04:22:09]  Right. So like, you know what I mean? Like you basically weren't getting any positive for being a class, like conceptually, uh, it is interesting. I
[04:22:22]  did have a conversation with Minko recently, um, from the angular team. And he was like, what if we came up with a component syntax, not quite a
[04:22:29]  function, not quite a class. And I'm like, well, if that ever passed, I'd be, you know, like if that was a thing, it'd
[04:22:37]  be interesting. Because then I would have a compiler and analyzable entry point to components right now. Cause I, we use functions. It kind of feels weird to
[04:22:44]  say like, this is a component. Like people feel like it's extra work. If that was implied by the syntax, then that would be nice. But that that's
[04:22:53]  the biggest benefit I could see to that. Yeah. Come on, Dev. Not on this one. I had function components that had state way before reacted. Like years
[04:23:15] . Like years and years and years before reacted. Like, like, like three years before hooks. You want me to, what do you, what do you, what
[04:23:34]  do you got for me, Ben? Yeah. Okay. Yeah. I see what you're saying. I think actually, I think having these class fields makes all the
[04:23:47]  difference. Um, compared to, compared to previously. That being said. Yeah. I mean, the, this doesn't really matter. Yeah. Yeah. Yeah.
[04:24:00]  I mean, the, this doesn't really matter. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. I mean, I can't, I honestly just getting
[04:24:15]  rid of this. Like, like, yeah, I, I'm not, I don't know. I'm not, I don't know. Even in coffee script
[04:24:27] , this was nice. It was an app sign. It was just like at something. It was like really short. And even then it's kind of like, and in
[04:24:35]  coffee script, you just use fat arrows and it auto bind. So in coffee script, like the stuff was like really nice and I still chose functions. So I don't
[04:24:42]  know. I, I, I, to be fair, I didn't have this. So that might've, that might've made a difference. You know, I mean
[04:24:50] , I was making these decisions like six, seven years ago. I saw I did it first. Um, and I, the thing is we didn't do it first
[04:25:13] . This pattern of composable primitives existed even like it was the, yeah. It existed back way before even in JavaScript, you know, like stuff like knockout
[04:25:26] . Uh, you guys, you guys joke about Marco did it first. I know it's funny, but like it, it was like that alternate reality that Dan had in
[04:25:43]  his talk where they're like, Oh, what if we just started with a server framework? Um, yeah. Yeah. Yeah. Yeah. Putting everything in the constructor
[04:25:55]  plus adding this, you know, um, like it was just like double hit. Anyways. Um, Mitch, Mitch goes talk. Um, it's cool. I,
[04:26:04]  I, I, I think it's one of my, like, it was really cool to hear a talk about signals and about rendering performance signals that like high or some
[04:26:13]  from the solid community didn't do. Um, wider perspective of that. So I, I enjoy that a lot. Okay. Um, which leads us to, I think
[04:26:22]  the last story, which is a, which a hot one. I think people are pretty stoked about this. Svelte five. Um, showing some very nice local
[04:26:33]  numbers here. Um, looking at the numbers themselves, there wasn't anything that I particularly stood out. The select row performance actually is particularly stand out. I don't
[04:26:48]  know why vanilla is slower in a thousand create. I actually, sometimes it is. In fact, I think if we go to the JS framework benchmark right now, um,
[04:27:04]  36, seven for vanilla, 37, three, 35, eight. Yeah. Right now, solid's faster, which means we have to look. Vanilla is doing
[04:27:14]  something slower on, on, uh, on that. Um, in any case, yeah, this, this select row is actually very, very, very interesting. Um,
[04:27:25]  the rest of this, it's hard to tell. You can always tell, well, here's an example. Let's, I like that he, this is how you
[04:27:33]  show a benchmark cause you use three points of reference. Let's find Svelte today. Where is it? No, keep on going. Svelte. Right
[04:27:43] . 132. 104. 109. I wonder what happens if we do this. I'm just, I'm just, I'm just, I'm just curious
[04:27:59] . Cause I think one of the things, people don't. Uh, I wanna, vanilla. 109.7.8. And Svelte. Four.
[04:28:23]  Let's do that. Interesting. So, what, why is vanilla a 104? That's so interesting. It must be that creation cost. Anyways, sorry. I
[04:28:46] 'm, I'm, I'm getting, I'm getting kind of off the rails here. What I wanted to say is, um, it is super, super interesting to
[04:28:53]  see Dom's work come. We, we were expecting this. He was working. I wonder if he did end up doing, using the signal internal stuff. I'd love
[04:29:01]  to have him on and talk about what he's, what he's been doing with Svelte 5 one of these days. Um. Well, exactly. Well,
[04:29:14]  it's because people write the vanilla abstraction. Um, in fact, I, I, I, I, I've updated it several times when vanilla has gone too slow.
[04:29:26]  Um, some of the work that I did at Solid. Oh, I actually, I, I actually have one of those moments here. I remember when like, I got
[04:29:33]  really excited about this. I don't, I haven't been posting about Solid's performance very much recently. But I remember, um, the first time we got to
[04:29:41]  the top of the JS Framework's benchmark was about five years ago. We were, it's been about five years now. And I do, but there was one moment
[04:29:49]  four years ago where I just had to print it off because, um, Solids, I, I, I, when I started in the JS Framework benchmark, the
[04:29:58]  original Solid implementation was called Solid. Just called Solid and it was our Stores. I didn't think anyone would want to use Signals. So I, I actually
[04:30:06] , um, submitted with Stores as the primary way of using Solid. And, um, this was the split. Like back then Wasm was back here and Solid St
[04:30:20] ores, um, were, you know, up here ahead of a bunch of other ones. I wanted to implement the Signals implementation and he ran the results and the
[04:30:31]  signals showed up in front of Vanilla on average. And the, yeah, these were the official results. I, I like, I had to like take a screenshot.
[04:30:39]  I was like, this is probably never going to happen again. Um, but, um, the truth of the matter is sometimes there's bad runs. And sometimes,
[04:30:55]  um, there's good runs. And honestly, this was just like one of those, like, like the position of these moves up to 0.03 between every single run
[04:31:11] . Like right now, I think Solid's 1.08 or 0.09. Um, we've gone further from Vanilla in recent, um, history, but
[04:31:20]  every, like, every time, like there's a new version of Chrome, these things will shift a little bit. So like, it's very hard to know where
[04:31:32]  these things will end up officially, like when the actual runs happen. But you, I mean, you can get ballpark cause it only ever moves plus or minus 0.
[04:31:41] 05 essentially. Um, but, yeah, I, I, I, after this, I went in and I changed the Vanilla, um, actually no, the
[04:31:55]  Vanilla's already updated here. I think this was just a poor run. For some reason, our swap rows ran really well that day. And, uh, but
[04:32:05]  it's not that even the store's version of Solid was really good. Yeah. I don't know. It's interesting. Yeah. I, in general, Vanilla
[04:32:17]  has broken away further from the other frameworks now, as I was saying, but, um, yeah, I, that, that, that was, that was a fun moment
[04:32:30] . And when, you know, it was like, okay, we don't need to talk about performance anymore. Uh, the truth of the matter is like, we
[04:32:37]  were getting so slow that the preciseness of this, um, is getting within an error of accuracy. Um, Vanilla is, should be further. And I think we
[04:32:47]  did some more optimizations, um, since then, but generally speaking, we're at the end of this benchmark. It basically, as long as you get up to the
[04:32:55]  party, you're, we're, we're all just switching spots every time. So, Svelte 5 will, Svelte will join the party and not
[04:33:03]  just Svelte, um, View Vapor, View is joining the party. Um, right. We've just, yeah, always commending View on this, uh
[04:33:18] , this jump because Svelte's been about 1.3 since forever. View actually came from back around where React is up to just in front of Svelte
[04:33:29]  to getting all the way up. So, within the next year ish, basically, I imagine JS Framework Benchmark, all the popular frameworks, um, well
[04:33:40] , maybe not except Angular's probably still done a ways, but yeah, you're going to have options. Um, they're all going to be basically the same speed
[04:33:49]  in that test, basically right up there with vanilla JS. So, um, you know, uh, you know, it's run its course. We need new benchmarks
[04:33:59] . We need new places. Um, I mean, this is why Dominic even himself, he said he wasn't interesting anymore. He's like, even after Infer
[04:34:05] no, he felt like he'd gotten to that point over time that drifted. But like, you know, it just DOM updates are in frameworks are now pretty much
[04:34:17]  as optimal as we're going to have them with the current platform. Yeah, I think, I think that's what's going on here. I think he added a
[04:34:42]  couple other compiler optimizations. Maybe he'll get a, get us by a couple of points for at this point, but generally, yeah, I think, I think everybody
[04:34:49] 's kind of on the same page. Um, I think he basically compiled, I don't know for sure, but what he was working on right before I joined the
[04:34:57]  spell team was a compiler that compiled a react to, to, to basically what solid is. So everybody, everybody's just compiling to, to basically the same stuff we
[04:35:06] 're doing. Um, I mean, we knew it was going to happen. It's, it's, I mean, it's been like, what, six years,
[04:35:14]  five years, five years. So like performance is something you can never like sell on because like people will catch up to you. Like there's going to be a point
[04:35:25]  at which you can't, you know, so it was, it was inevitable that after, you know, several years we would get to a point where other, you know
[04:35:34] , other popular solutions would, would have similar performance. And I, it's kind of cool to see that, um, signals is actually what's powering this.
[04:35:50]  Do you think we're actually, we have to match. I mean, they might move to a signals internal thing is after Dom showed them that, but I don't
[04:35:58]  think that's what their interest is. They have other things they want to, I don't think they like signals as their internals. We'll see what forget ends
[04:36:06]  up with the, the interesting thing is like, I talk about how Svelte was, old Svelte, I guess was similar to, to, to, uh
[04:36:18] , react. React forget. If I, if I was like a betting person, I was going to guess that it would end up in old Svelte territory on
[04:36:27]  the benchmark, but it's, it's going to be an interesting thing is if, if Svelte and view are up here now that, you know what I mean
[04:36:37] ? Like the, the, the, the game's already changed, but again, performances and everything. Yeah, I have, uh, this is what happens when signals
[04:36:49]  get popular like this. And with angular, I, I'm meeting with a, I met already a couple of times. I mean, when more browser people, they want
[04:36:57]  to talk to me about how to put signals, um, in the browser. I, I, it's interesting. I think that there's some potential there, but I
[04:37:04] 'm more interested on the primitive pieces. There's a whole, there is a real problem at it, at the core of signals. And I don't know how to
[04:37:12]  solve this, but if it's interesting, if the runtime mechanism gets close enough to the idealized compiled mechanism, I think things could get interesting. So that's what I
[04:37:23] 'm going to push for. I don't want a full signals implementation. I just want the code to make it possible conceptually to have the compile meet where the runtime ends
[04:37:33] . Cause like, there's a reason we chose functions and solid, like a huge reason why we chose functions and solid. And I'm worried that all the fancy compilation
[04:37:44]  loses that. Or then you have zones. And then you're like, I'm in a component. This only really works. If you can get to a point where the
[04:37:51]  runtime DX and the compile time DX can be basically the same, except the compile time can be slightly optimized. If that makes any sense. If that makes any sense,
[04:38:05]  because like, otherwise we're going to be dealing with inside and outside the components for the rest of our lives. I mean, that's my biggest reason why I haven't
[04:38:13]  pushed that degree. Like we could, I get the feeling like we could, if we cared about something like react forget, we have a lot of compiler wizards.
[04:38:25]  You know, people like Alexis who, he wrote his own react forget forgetty, but I think it's actually easier if you make signals your target. So I like
[04:38:32] , if we wanted to go into that, but I actually have concerns because now you're off. Now you're introducing two zones, right? You have your like in the
[04:38:41]  component out the component. And I, and like, it's why I think view dropped the whole ref sugar stuff, because like, if you want to have that control
[04:38:52] , you need to be able to like, there's a reason they had dollar signs and dollar dollar signs and stuff. And like, it just isn't good. Right.
[04:39:01]  We, we need the, we need to get to a point where our compilations, you know, yeah. Yeah. Yeah. Anyway. Um, I think
[04:39:19] , I think this is exciting because I think this, um, it's like a, it normalizes the, the, the conversation between like all of the, like react
[04:39:32]  and everyone else. This is part of that, like ganging up on thing that I see that's happening. Um, this continues this narrative. Um, because the
[04:39:42]  ironic part is there's a bunch of people are like, you know, reacts, like we'll solve everything with this compiler. And people like, yeah, when's this
[04:39:49]  compiler going to come? Well, the problem is you got the existing, like reacts, a big thing. It can't move as fast. So like they could be
[04:39:55]  moving light speed and you know, people like the compiler, it's going to take a while. If, if Svelte goes, Oh yeah, you know, we
[04:40:05] , we've improved this too. Like it, uh, these kind of like one day things, you know, how, how long is it? You know, S
[04:40:16] velte actually has a really great argument. Cause like people can't say that they're a new framework. Um, cause they actually open sourced in 2016, which
[04:40:25]  I didn't, I didn't never thought that things would go here. So like Svelte can be like, like they've already been around for seven years.
[04:40:32]  Like at a certain point, it's like, do you trust Svelte after 10 years? Like you're still waiting on react forget maybe. I don't know.
[04:40:41]  Like, so I, it's, it's interesting. I think this shifts the dynamic of the performance conversation again. That being said, I think this benchmark is basically done
[04:40:50] . I love it. It's I spent years early up till that thing about four years ago, but I spent the first few years pursuing it. I know lots of people
[04:40:59]  have introduced to our community through their own perspective. community through their own pursuit of that, you know? Um, but yeah, we're getting to a point where this
[04:41:08]  has just run its course, which is good. That's what I did. It got every JavaScript framework faster. Uh, we'll see. Yeah. If, if
[04:41:28] , if we were done, but the problem with Jamstack is I think Jamstack lost the vision. I think, I think there's still a battle over the
[04:41:36]  role of components. Yeah. Yeah. Yeah. I mean, it's, it's interesting. I think, I think the thing is, I think libraries like effects
[04:41:51]  and scheduling effects doesn't belong in the core implementation, which is odd. We just want signals and computers or memos or whatever you want to call them to be part
[04:42:01]  of the core. But the problem is I don't even care about that as much as I was hinting at it. I want, and I don't know if it
[04:42:09] 's possible. I want to not have to use functions. Ultimately. That's the thing that gets people. The only challenge with that obviously is expressions are still a consideration
[04:42:22] . Like spell has dollar sign, whatever. So, I mean, I've thought about this forever. Like I wrote, um, an article a couple, few years
[04:42:33]  ago where I was basically describing, uh, largely the similar to the work that, you know, I theorized what very similar to the work that, uh, Dom was
[04:42:44]  ended up doing with, uh, before I joined the spell team, where I was like, okay, what if we just used a compiler? I, I think I
[04:42:51] , I did, I did a whole stream on this too, called about solid script. Um, yeah, I don't even know why I'm looking in here. It
[04:42:59]  doesn't matter. You can go also check out the stream on YouTube, um, channel. I should just go to the oldest ones here. I did a whole, where
[04:43:14]  is it here? Yeah. This one, uh, this one, solid script. Uh, solid script using compilation for syntax. I did a whole, I don't
[04:43:22]  know, three and a half hour stream on, on this, on the subject. Um, I feel like it was one of my earlier streams. What is this one?
[04:43:33]  This is a year ago. When was it? March 18th, 2022. And I, a year before that I'd actually written the article on this. one
[04:43:43]  thing that got me to think that we could. One thing that got me to think that we could do this bass is a work that, uh, um, Mil
[04:44:17] o's been doing with bubble reactivity that he was doing a bubble where he basically wrote a whole implementation and bubble has a different effect rules than solid for their internal reactive system
[04:44:28] , you know, they use solid too, and they work together and we realized if we could share the signal and computation primitives, then all the reactive libraries would have inter
[04:44:37] op. I think the problem, like I, I know Starbeam tried to do this before and like the Ember community and they said that they'd universalized
[04:44:47]  and, you know, RX and call bags and all this kind of stuff. Um, so I, I don't have my hopes up high for a non-browser
[04:44:55]  initiated universal verse, uh, approach. And I know like Angular had their different needs of how propagation works, so everyone has their different opinions, but I do believe that
[04:45:07]  a small enough library that was packaged with the core stuff could power a lot of implementations if they didn't care about specifics of those details because the performance is good enough.
[04:45:17]  Like the internals at that point are not, are, they're basically internal implementations. They're not execution guarantee things. They are just like, how do you
[04:45:28]  mark the nodes? Like they're all back into stuff. They're performance consideration. If you told me that you had the API that Milo put together there and the same
[04:45:38]  functionality and it was faster and done with a different marking approach or whatever, I just take it. You know what I mean? Like if the browser was just like,
[04:45:48]  this is the thing I would take it. The biggest thing is that, um, we had to put some stuff in the core that's not commonly core in a lot of
[04:45:56]  reactive frameworks. So we, we have some slightly different opinions there again. Um, but, uh, especially handling async, um, a lot of synchronous signal systems don
[04:46:09] 't have async. The core for solid 2.0 naturally handles async. Um, um, um, and I think at that level, all the other stuff
[04:46:21]  could be made completely like framework agnostics. Even the running of side effects, um, scheduling, because once you pull the effects out, that means you can like do
[04:46:33]  stuff like suspense and user land and whatever, like not user land, but outside of that core. Or, or you can do like a lot of the other mechanisms.
[04:46:42]  Components are a state of mind. I'm just catching up. Your state of mind is pure overhead. Uh, oh, you saw that. Yeah, I mean
[04:47:05] , this was when I was trying to do dev rel type stuff for Marco and I just, I shelved it because I felt like I wasn't adding anything any new for
[04:47:12]  the conversation. get syntax. Okay. What's this? I am always interested to see. It's funny thing is sometimes there's like proposals for syntax. Yeah
[04:47:28] , yeah, the object getters you're talking about. Um, yeah, object getters are fine for objects. The problem is you need a primitive that's not an
[04:47:34]  object. I need just an atomic value and I have to, like, I'm not going to go dot value. Like that, that doesn't work because it doesn't
[04:47:40]  compose. Like, uh, the, like the reason solid is largely the way it is, is because you can have count. And then you can have count expression and
[04:47:57]  whatever, count times eight. And these basically have the same signature. So the fact that we did this doesn't matter. Like, like you don't suddenly change it.
[04:48:16]  However, count dot value, like this, the function is the only way to pass this around unless you want to use another primitive. And I, I like the idea
[04:48:26]  of like, the problem is create memo has meaning. Like it's a computation. It means that this node recalculates making reactivity transitive requires wrapping in a
[04:48:41]  function. Um, if you're not going to pass and even you need to pass it a function, even to pass it into the memo call. Do you see what
[04:48:49]  I'm saying? Like, like, this is why I don't like getters. But what if we had an atomic getter? So you could just say,
[04:49:06]  you could go like const or let's not const it, let count equals something new atom. Okay. And what if the way an atom worked is if, if essentially you
[04:49:20]  could intercept. So essentially kind of like a proxy could be like get set. Okay. Now the, the challenge with, with, with this atom that I'm designing
[04:49:39]  here, so to speak, is that even if we could intercept this, well, an assignment might look like this count equals five, okay, great, um, uh
[04:49:58] , but how do you read a value? So if you wanted to say count expression, whatever equals, um, like you change the signature again, unless you had a
[04:50:14]  way of being like, uh, like the, the, the biggest challenge here is even if you had an atomic getter, every place you used it like this would be
[04:50:30]  a read essentially. So you could never pass the signal only pass the value. Now I like that there's, this is the same reason why we call count when we
[04:50:42]  pass it. We don't pass the signals around, but it makes it hard for composability of, of, uh, of, uh, like what I'm getting
[04:50:53]  at is how do you compose these if they can't escape the scope? And views ref sugar came up with a bunch of special operators for this stuff from a compiler standpoint
[04:51:20] , but like the reason that this is attractive to me that if we could actually read and write like this, we use other than the transitive property of the function for
[04:51:30]  transport, which is less obvious is that then moving between this and compilation would be like, we could basically always fall back to this as the expected behavior, even if compilation didn
[04:51:44] 't work. So sure. We can only optimize compilation in a component, not elsewhere. Well, it's fine. It's still, it still works. Um, cause
[04:51:52]  that's the thing. Why, why do people hate the DX or why do people first felt DX to, um, to say solids DX sometimes? And the biggest argument
[04:52:03]  is cause you've got to fricking call the call things as functions, right? People are like, Oh, I don't like calling as a function, but the function
[04:52:10]  is essential to understand that the wrapper, unless you will, you're like, well, no, I can use dollar sign, whatever, but the dollar sign is a fixed
[04:52:17]  point. It's not transitive or it doesn't like move outside of the component. Like you can't transport it. So like, yeah, sorry. Uh,
[04:52:33]  it's, I think this is the challenge, um, here and why function is it's why functions are a good choice, but it's also like where the tension of
[04:52:44]  this compiler stuff comes in because people like to pretend, and that was like the point of my article way back, people like to pretend like they're not dealing with this
[04:52:53]  and they're just writing some rules. books, but like, like a let in Svelte is not a let in JavaScript. Sorry, uh, I, I
[04:53:04] , I, I see I had the comment up too long. No, but it's like soon. No, but it's like soon. Sorry, I,
[04:53:23]  I missed the, the guys not seeing the, the stuff. They're building some smaller projects as well. Yeah. I mean, that isn't even necessarily true.
[04:53:47]  I mean, smaller than react, but not smaller than other things. Like today, solid is smaller than Svelte as long as you have three components in your app
[04:53:56] . Vobi's approach is interesting. I mean, that's what compilers output, like the, having a special read function that you import and then use everywhere to
[04:54:14]  wrap every access is basically like what Marco's compiler output looks like. Um, so like if you're going from a basic syntax to that, that would be the trick
[04:54:25] . Um, it's, it's fine. I mean, you decide for yourself if you like doing that. Anyway. Yeah. I mean, that was a great tangent
[04:54:48] . I appreciate you guys all, uh, getting in on that conversation. Um, it's, it's funny. I don't even remember how I got into talking
[04:54:56]  about that. Yeah. We were talking about the new Svelte compiler stuff. Yes. I think Svelte 5 is going to be interesting. I, I,
[04:55:02]  it sounds like they're in on in, which is I'm excited about because when Dom joined the team, I could tell he, you know, not him, but I
[04:55:10] , in the past previously he'd had, you know, maybe some reservations that's like Svelte likes its things and he's coming in from a bit out of
[04:55:19]  right field. But I think, I think his influence is going to be felt in the next version, which I, I'm pretty excited for. Um, I, I
[04:55:27] , I think the problem of composability in compile solutions is challenging. And I'm not even sure that a browser, uh, primitive can help us there, you know
[04:55:42] , all the way just because of like, like all the, like, I kind of really want that atomic getter, but I just don't know. Um,
[04:55:54]  not having something not composable almost defeats the point. Like, I, I just don't, it's almost like you need it to be part of the syntax itself
[04:56:03] , but then it's like type system almost like, because you're almost like saying like, if I, if I have, sorry, this is back to that. Like
[04:56:09] , if I have my, my count now being, you know, uh, what local create local count, like you guys are, might be wondering why I'm not using
[04:56:20]  a setter in this simple example. Well, the reason I don't is because, because the getter can't escape the template anyways, um, having a set
[04:56:33] ter doesn't actually matter as much. Um, do you know what I mean? Uh, but cause like, you'd have to pass a function setter down anyway.
[04:56:45]  Like, you'd have to like on click be like, you know, it's not here anymore. Oh yeah, here you'd have to be like count plus plus
[04:56:53] . Like there's no way around it. You couldn't, but what I was getting at here is like how, if inside here, it creates a signal, how do
[04:57:02]  I indicate that this is a signal of that side? You'd need like another, it's basically the ref sugar stuff all over again, but how could the engine know this
[04:57:13] ? It would have to be typed information. Like it's basic types might be our only way out of this. Honestly, the, the, the perfect way to solve
[04:57:22]  this might be a sufficiently smart type system, but TypeScript isn't going to be that. Cause like, I can't even, uh, you, if you watch
[04:57:31]  my stream on TypeScript about that, like, like the fact that we can't do this, you know, is, is, is, is killer. Right.
[04:57:46]  Like, I mean, I don't have the right types right now, but you, you, you get what I'm saying. Like the fact that we can't do
[04:57:53]  this, like the, the fact that like it, this is a second function call. So it doesn't know that it's non-null, um, means
[04:58:01]  that like, like we're a way, a bit of ways from TypeScript being that it's why I was excited about Esno. Um, because you could tell the
[04:58:10]  author was basically a framework author trying to invent a TypeScript and that made sense for frameworks, but he's also a university, uh, student who's in school, you
[04:58:20]  know, eight months of the year. So, and trying to get people adopted different types system, other than TypeScript or a new language. That's a whole other
[04:58:29]  topic. That's craziness. If you think replacing react is hard, try replacing TypeScript. Yeah. So it's the talk of the better web, but I mean
[04:58:46] , wasm is, uh, no, no offense, Greg. I'm not thinking wasm is going to be general purpose enough for the thing. Need a virgin
[04:58:59] , maybe, yeah. Anyway, that is it for my stream today. I think, I think, I think we are all done. I think it is 5:
[04:59:17] 00 PM on a Friday evening now, and I am done talking JavaScript to you this week. Uh, we'll see what I do next week. I'm not actually
[04:59:27]  sure, but, uh, I'm sure there'll be something interesting going on. There always is. Anyway. Have a good one, everyone. Uh, let's see
[04:59:37] , is there anyone to raid? I'm, like, the worst at raiding. Um, yeah, I know no one anyways. So, yeah, I'm just
[04:59:48]  going to sign off then. All right. See you all. Thanks for joining.