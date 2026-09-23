---
title: "iOqPj-CjoV0"
slug: "iOqPj-CjoV0"
duration: "4:59:54"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/iOqPj-CjoV0.m4a"
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
[00:00:00] .
[00:00:01] Hello everybody and welcome to my stream today. How are you all doing?
[00:00:07] Um.
[00:00:09] Glad to be back. It's been another couple weeks as things happened. I've been away a lot the last...
[00:00:14] few months, but, um...
[00:00:18] it's been good uh i've started with traveling with the conferences  then some summer vacation and a few other things and uh hopefully now uh
[00:00:29] we're gonna have a bit more steady of a schedule, but
[00:00:34] It's been a while.
[00:00:36] Let's go. Hey Greg, how's it going?
[00:00:39] Uh, let's, I should also probably post
[00:00:43] on some social medias and remind people that I am live. As I said, it's been a while.
[00:00:50] Although some people seem interested in this topic recently.  I've covered...
[00:00:54] MPAs, single page apps.
[00:00:58] and everything in between. But a lot of discussion made me want to reflect on some stuff and a conversation point.
[00:01:08] It's interesting because I've been seeing a lot of straw man arguments, but then I've also been seeing maybe things are a little more nuanced with this whole MPA, SPA thing.
[00:01:21] Strange darling. That's great.
[00:01:23] Yeah, and join, participate in the chat as we do this because...
[00:01:32] I want to get some opinions and stuff there.  I'm actually gonna be, let me just open a new Twitter window.  I'm actually gonna be,
[00:01:40] So,
[00:01:41] Doing a...
[00:01:43] Kind of going over some content from a talk that I have.  Let's go to my profile.  That I've been giving as a keynote that's never been released.  The help kind of fit that in.  So, yeah.  Let's just...
[00:01:56] While we're starting up here, I'm just going to
[00:02:00] We're live.
[00:02:03] I say weird, but it's like I'm live. Whatever.
[00:02:09] - What?
[00:02:10] Twitch TV. As everyone knows I always kind of, I don't have a cool intro song, so I use this time to um,
[00:02:21] kill off those Twitch pre-rolls.
[00:02:25] So, all right.
[00:02:36] We got some people here saying hi, thanks. Great to see you all again.
[00:02:42] Huh.
[00:02:43] Yeah, um...
[00:02:45] Is this about the new Astro stuff? Yeah, a little bit. Yeah, I mean it is. It's all part of the conversation.
[00:02:52] I think the distinction...
[00:02:55] might be getting difficult for people.
[00:02:57] And I want to talk a bit about what that distinction means or what the distinction moving forward should be.  I mean, we've we've we've I feel like to a certain degree we beat this topic.
[00:03:09] to death.
[00:03:11] Don't worry, I'm not going to spoil any new hidden articles here this time.  But I think a while ago I did a series of articles.  What was it? JavaScript vs. JavaScript Fight?
[00:03:21] Right. And I think
[00:03:23] Yeah, the very first topic...
[00:03:26] I did was MPA versus single page app like
[00:03:31] And it's just one of those things that...
[00:03:35] Mm-mm.
[00:03:37] Yeah.
[00:03:38] That is not well understood.
[00:03:40] At this point, it was a different conversation.  At this point...
[00:03:43] people were telling me that there's SvelteKit apps and Next.js apps or MPAs and
[00:03:49] You know, I don't think that's quite right.
[00:03:52] But I understand where the confusion is when you...  Oh, man.  I actually should have prepared this one before the stream.  But I'm just...  We're just rolling a bit before we actually fully get started.  But...
[00:04:02] Um...
[00:04:03] Is the volume low? Is that what's going on?
[00:04:09] Thank you.
[00:04:10] Sorry, how's the volume?
[00:04:12] Thank you.
[00:04:13] Coffee script, Freddy.
[00:04:18] Thank you.
[00:04:20] Yeah, yeah, we'll talk a bit about RSCs as well today.
[00:04:25] But yeah, sorry.
[00:04:27] I should be able to find this one really quick. I was just thinking about this quote, but...
[00:04:34] Guillermo or so it's raw
[00:04:38] Thank you.
[00:04:39] Gee.
[00:04:42] Paul.
[00:04:44] Um...
[00:04:46] - Okay.
[00:04:46] - Yes.
[00:04:47] Right.
[00:04:49] No.
[00:04:53] Cinco
[00:04:54] Thank you.
[00:04:57] I'm not going to find it.
[00:04:59] Thank you.
[00:04:59] Thank you.
[00:05:01] Thank you.
[00:05:04] Thank you.
[00:05:07] Chat knows exactly which one I'm looking for here. I am positive.
[00:05:16] Zero. I said low. It's zero. My bad. You know what I'm talking about.
[00:05:22] Single page apps were a zero interest rate phenomenon. Um,
[00:05:26] Yeah.
[00:05:29] As I mentioned, some people...  Actually, where RSCs are sitting, one could say that.  And this is the motivation.  It was just...  I think a lot of people...
[00:05:40] Red.
[00:05:41] this tweet and didn't understand. They were like, "Yeah, yeah, of course they're no good. You need Next.js." But actually, most Next.js apps historically have been single page apps.
[00:05:54] Before, I'm just spitting some stuff now, but I think we're probably getting pretty close to getting started here.
[00:06:01] Thank you.
[00:06:03] How are we doing chat?
[00:06:05] Yeah, some people have actually started the show up.
[00:06:08] *crash*
[00:06:10] Mmm.
[00:06:12] Thank you.
[00:06:12] I'm going to go to the next one.
[00:06:15] All right, all right, all right. So...
[00:06:20] I want to...
[00:06:22] The reason this all came up
[00:06:25] Okay, so let's just get started here.
[00:06:34] Yeah, I mean...
[00:06:35] it's one of those comments where you like,  you're not even sure if the poster is serious.  Cause like,  are they making fun of themselves?  Yeah.  Um,  from a certain perspective.  Um,
[00:06:47] but
[00:06:48] There's a way, there's like multiple ways to take that. I just, that one always...
[00:06:52] I will say that there's been a lot of confusion around this topic. And I
[00:06:56] And I said,
[00:06:58] I've covered it before and I'll reference some of that stuff again, but
[00:07:05] This for me...
[00:07:06] started
[00:07:07] right here
[00:07:10] - Thank you.
[00:07:11] Thank you.
[00:07:11] What was this? July 25th, 2023. So a couple weeks ago, I wasn't streaming, but I saw this and I was like,
[00:07:18] Oh, shots fired.  Because...
[00:07:21] This was...
[00:07:23] a...
[00:07:24] um,  screenshot from a recent Rich Harris talk where he,  he was giving his MPAs are dead,  um,
[00:07:33] uh, section. Richard basically went off on a whole bunch of topics of what he didn't like about modern JavaScript. And this is one of his spicier takes.
[00:07:43] Um, and the, the Astro team was like,
[00:07:47] basically kind of poking that single page apps are dead.  Almost like we'd inverted...
[00:07:54] the situation.
[00:07:56] .
[00:07:59] So
[00:08:00] Yeah, there's a bit of a back and forth here.
[00:08:08] that default by view transitions will kill spas.  I mean,  yeah.  So people start coming back.
[00:08:12] back.
[00:08:14] You know, Guillermo's in here not paying cost of re-initializing app on every click.  We're not supposed to talk about that.
[00:08:21] Thank you.
[00:08:22] I mean, it got a little bit heated. And I'm not-- this could have been like in "This Week in JavaScript" later, but this is the context that I was like, okay, time to talk about this again.
[00:08:34] So
[00:08:37] and I can see...
[00:08:42] I can see both sides.  But...
[00:08:45] Thank you.
[00:08:47] This...
[00:08:49] This does start...
[00:08:51] With...
[00:08:52] a little history
[00:08:54] and a little bit of appreciation
[00:08:57] for the subject or on the topic in general.  Because I've seen this...
[00:09:01] topic morph over time.
[00:09:03] First of all, I just want to throw it out to the chat. I imagine given the audience and stuff, most of you all know what a multi-page versus single page app is.
[00:09:13] But just in case you're not,
[00:09:16] Um...
[00:09:18] I think we should probably start there and do a little bit of history.  Now,  if you really want to deep dive on that history,  I have a,
[00:09:26] I have a stream.
[00:09:27] that is not one of my more popular streams sadly but literally covers
[00:09:31] everything and we're probably going to cover a lot of it again today but essentially where was it
[00:09:41] it's really old one this one here islands partial hydration and javascript frameworks
[00:09:45] If...
[00:09:46] You ever get a chance, um...
[00:09:50] to go back and check out one of these streams and I'll just post the link
[00:09:56] in chat here.
[00:10:02] But...
[00:10:03] Okay.
[00:10:05] Skip the ads. Okay.
[00:10:08] There's this part where I talk about for about 30 minutes, the history of server side rendering, and I literally
[00:10:14] go through a bunch of stuff and step-by-step talk about every different
[00:10:20] history of rendering technique like static HTML, then dynamic server render, then dynamic server render with update panels, then JavaScript client-side render, JavaScript render SSR. I think the list gets to about...
[00:10:36] Oh, how far? I mean, I just keep driving this list home the whole time. Um...
[00:10:42] And you might be like, what does, I talk,
[00:10:46] -
[00:10:47] like basically I iterate over all these different rendering techniques of the web the most important part of this though is
[00:10:54] is the beginning, which is understanding that
[00:10:59] All websites.
[00:11:01] fundamentally involve
[00:11:03] some kind of server backend hosting that is serving a page, right?
[00:11:09] And the term multi-page app was a, like in hindsight, sort of, uh, naming it like, or
[00:11:17] like an in retrospect naming convention.
[00:11:20] MPAs are just...
[00:11:24] websites. A, you click in navigation, you go to the next page, click navigation,
[00:11:29] Move around. This topic has everything to do with routing.
[00:11:32] Um,
[00:11:38] Doesn't NEXT 13 do full page reloads? Not
[00:11:41] Exactly.
[00:11:44] Just here for Dragon Ball? Okay, I mean that's fair too.
[00:11:48] I...  It is definitely interesting.  I did watch all of that series...
[00:11:53] Dragon Ball Super.
[00:11:55] Where they all become Super Saiyan Gods.  And then...
[00:11:59] Yeah, anyway, that's a whole other thing.
[00:12:07] Yeah, I mean, that's how all my streams are usually.  I usually see something going on and then I need to talk.  The second thing that actually happened was I actually was in a panel...
[00:12:15] discussion in Twitter space with Ben Holmes this week.
[00:12:19] which I believe is recorded.  And in that session, we were just doing  like our typical back and forth, you know,  expecting everyone to know about the subject matter  if they cared enough to tune in.
[00:12:29] and
[00:12:30] Um...
[00:12:31] In the middle, Ben was like, "Brian?"
[00:12:35] What you said?
[00:12:37] is interesting and I get bits of it, but like, I really don't get what you're talking about.  Like, how do you differentiate between all of these like different zones of things?  Like what's an MPA, what's a single page app? And I was like, okay.
[00:12:50] Yeah. Okay. That's a fair question. Like why am I so...
[00:12:55] you know,
[00:12:57] Why don't I call...
[00:12:59] React server components, single page apps, et cetera.  So I felt that it was important to kind of
[00:13:06] Look at that distinction.
[00:13:09] And we will be looking at some Astro code today as well.
[00:13:14] kind of
[00:13:16] understand
[00:13:17] Um...
[00:13:19] Thank you.
[00:13:20] - Thank you.
[00:13:22] Like...
[00:13:23] maybe even have some revelations about
[00:13:26] How this...
[00:13:28] kind of dichomity is changing these days. Anyways, let's keep going with this.
[00:13:36] single document fetch. Well, see, and this is the thing.
[00:13:40] - Yeah.
[00:13:41] single page apps.
[00:13:43] are kind of funny in that they suggest, well, a single page, which in a lot of ways is how they
[00:13:51] developed or where the naming came from. It was like an architecture, almost like when people had like initial Jamstack. It meant like a very specific way of building an app. It meant,
[00:14:02] Instead,
[00:14:03] of like, I'm glad I actually have this list on screen.  Maybe I'll full screen it a bit so we can see it a bit better.  But static HTML is what I was talking about a minute ago.  That's when you just ship...
[00:14:14] the HTML pages, maybe put them on some hosting site, CDN, and
[00:14:20] You go to a URL, it's like a file system almost.  You just go straight up, right?  Dynamic server rendering,
[00:14:25] you know, PHP, my first dynamics of rendering was actually using
[00:14:31] Pearl script in a CGI bin because I had a guestbook.  So you could post a form.
[00:14:37] And then it would, I kid you not, it would literally...
[00:14:41] when I got the form post, load in the HTML file that we used for the guestbook, use this Perl script to rewrite the HTML,
[00:14:49] save it back to the file system and send that back.
[00:14:53] So whenever the next person to navigate to, they get that same HTML.  It was like no database.  We were just literally using this script to rewrite the HTML in a static folder, more or less.  Obviously, we got better technology like...
[00:15:07] PHP, ASP, and much later other stuff like Rails and whatnot.  But it's just funny.  If you want like a really deep history dive on that, I mentioned this in previous streams.
[00:15:20] Um...
[00:15:21] But it might be worth looking at.
[00:15:25] What was I going to say?
[00:15:29] Actually, it just occurred to me that my notes are on the wrong window.
[00:15:33] I'm gonna bring them over. But that Steve Sanderson talk, I'm not gonna...
[00:15:39] I'm not gonna have time to go through it all here.
[00:15:43] like Steve
[00:15:45] Sanderson History of Web.
[00:15:48] Oh, oh, it's like history of...
[00:15:51] Web.
[00:15:52] Like a...
[00:15:53] What? Isn't that... Has Google ever done that to you? Steve...
[00:15:57] Sanderson
[00:16:00] not resume my journey, I just...
[00:16:03] Okay, this one.
[00:16:07] Okay.
[00:16:09] Just trying to do a Google search here.
[00:16:13] But if you really want to focus on that early days stuff,  like just to give you an idea, Steve,
[00:16:21] It gives this amazing one hour talk, right?  And he's going here, and if you look at the timeline,  okay, we're at 24 minutes, we're in 1996 at 24 minutes, okay?  That just gives you an idea of how long this is.
[00:16:32] Before I get to it.  And then it's like somewhere around here.  It's like, oh...
[00:16:36] We're in 2005, around 36 minute mark.
[00:16:39] And then like,
[00:16:41] Basically two thirds of, oh 2009, he gets up to the single page app.
[00:16:48] around
[00:16:49] the 40 minute mark of his talk and then he talks a bit about the future. So basically two thirds of his talk happened before the dawn of the single page app.
[00:16:57] I don't know about you all,
[00:16:58] And this is why this is such a great talk because it gives a lot of perspective. But
[00:17:02] I bet you most of the...
[00:17:04] Most of the people watching
[00:17:07] may have not been building websites,
[00:17:11] before the dawn of the single page app.
[00:17:13] And that's why I think it's probably important to give a lot of perspective here.
[00:17:19] Um...
[00:17:22] But yeah, just throwing that out there.
[00:17:25] There was a lot of time, and that time was almost 20 years of the web before the single-page app.
[00:17:32] Part of it was limits of technology.
[00:17:35] We didn't have Ajax in 2005. That was like the ability to do asynchronous JavaScript calls.
[00:17:41] to like up like
[00:17:42] Before it was all just full page post backs like I'm talking about, we couldn't even like be on the page and request some more stuff.
[00:17:49] But, of course, because everything was a dynamic rendered server, when we got that technology,  we added these kind of wrappers around it called update panels.
[00:17:59] And the reason I want to, I'm delving a bit on this history of MPAs is because I think it came up in one of the spaces I had recently where someone was like, oh, we're going back to PHP. And I was like, hell no. And I got to talk a little bit about this.
[00:18:15] And this is, in my mind, you know, necessary context for talking about what we need to talk about today.
[00:18:26] Okay.
[00:18:28] Yeah, what's here?
[00:18:30] Sort of with Flash, the original SPA.  Yeah, kind of, right?  Like, back then, when you want something really interactive, you just couldn't use the web model.  So, like, we embedded these.  Like, even before Flash, we had other embed things, like ActiveX controls and stuff in, like, the late 90s.  We've been, we were embedding, what was it?  There was a really cute name for Flash.
[00:18:52] for those embeds.
[00:18:54] I can't remember the term. It wasn't widget. It was like
[00:18:58] Um...
[00:18:59] Yeah, whatever. It doesn't matter.
[00:19:01] Thank you.
[00:19:03] Thank you.
[00:19:06] So it's all about routing.  The MP has no client side around this, so he uses client side around it.
[00:19:11] Yes, but that definition asserted us really well. We're going to have to dig into this a bit further, but you are jumping ahead a little bit, yeah.
[00:19:23] Thank you.
[00:19:26] P-Jacks, I remember P-Jacks.  So I'm just catching up on the stuff.
[00:19:32] Yeah, the Java applets.  Yeah, yeah, yeah.  But it wasn't just the applets.  There was like...  I thought there was like...  Is it just applets?  Was that the...  I know Java had applets,  but there was like a universal term for that.  But yes, you guys...
[00:19:43] Definitely you're right on it.
[00:19:46] Thank you.
[00:19:47] Okay, all right, cool.  Yeah.  But the reason I wanna talk about this,  'cause this gives us a little framing  for the conversation to come,
[00:19:56] the first thing we did when we got Ajax, like the ability to dynamically set stuff, was like, "Okay, sweet."
[00:20:01] So now, because what was happening at this time period in the web was,
[00:20:07] we did want interactive stuff. Like if you went
[00:20:09] I love using Airbnb, sorry, not
[00:20:13] That should not be up here. My bad.
[00:20:16] Let's, you know, turn all this stuff away.
[00:20:19] Um...
[00:20:20] It's all fine. There's nothing private there. But, um...
[00:20:25] It's because this one is in the web browser.
[00:20:27] Anyways.
[00:20:28] Sorry about that.
[00:20:30] uh,
[00:20:31] Air...
[00:20:32] I like using Airbnb.
[00:20:35] Although I probably shouldn't go to a specific place.  Let's go, Airbnb.com, for one of these kind of places.  Is this a good example?
[00:20:45] Um...
[00:20:48] Thank you.
[00:20:49] or maybe Expedia. Let me let me let's I'm just I'm just picking like some
[00:20:54] Yeah, yeah, yeah.
[00:20:58] Yeah, see this is even nicer. You can't find it like it used to be. You used to have to select a country, and then you'd have to like, then you'd pay to reload.
[00:21:06] and then you select a city
[00:21:08] page reload, then you'd select your dates,
[00:21:12] page would reload, you know, and that was the experience. But the problem is, how do you persist the state of your application and your selections? Maybe you're filling out a form and you have all these drop downs and you have different dynamic things. How do you persist this while your page keeps on loading and unloading? Well, the answer to that question is,
[00:21:31] was that in those days, we used to just serialize the client state
[00:21:35] into the page, send it back to the server, server would deserialize it, use it when it's doing its updated server render, and then serialize its own state back to the page. And we just ping pong and back and forth all the serialized state between the client and the server.
[00:21:51] even though we're talking about the history of MPAs, SPAs today,  what we're really going to be talking about is that the...
[00:21:58] History of the web.
[00:22:00] is about
[00:22:02] Um...
[00:22:03] Like where,  who manages the state?  It's a game of hot potato,  so to speak for a while there.  No one wanted to manage state.  And now we're getting this opposite zone where like everyone wants to manage  the state.  But my,  my point is,
[00:22:15] that in these early days, because of this series of like,
[00:22:20] let's just grab all the state and
[00:22:23] throw it back and forth because it couldn't all fit in the URL.  URL is one way to preserve state, you guys might have guessed.  But the other way was literally...
[00:22:30] serializing the state into the post request, like the post body,
[00:22:35] And then
[00:22:36] That's what they used to call this post-backs.
[00:22:39] And then, then serializing the state back into the page and, and,
[00:22:44] This way you always had all the data you needed, the current state of all the drop downs, everything.
[00:22:50] .
[00:22:51] But, yeah, it's funny because I started liking the SPAs, complex state management, all this.
[00:22:56] I have never witnessed something more ugly and complex than...
[00:23:01] MPAs.
[00:23:03] during this time period where they were trying to be apps and they really couldn't be and  As I said Ajax helped because suddenly now you could say
[00:23:13] they started sending those requests only as partials. There's an idea that you could be like, okay, let's, like, we're on a page, we change that dropdown. Okay, well, we don't have to send the whole page to populate that. We can just, like,
[00:23:29] Okay.
[00:23:29] replace the drop down, so to speak.
[00:23:32] And this is all to keep that server have the state, client have the state mentality.  But the thing with update panels is they had different life cycles.  They only had access to a certain state. It started getting very, very complicated.
[00:23:47] And
[00:23:48] This is...
[00:23:49] you know, we kind of got smarter with our patterns around dealing with stay on the server. This is around when Rails came out and MVC, we're like, okay, no, you can't just have all your logic together. But this architectural consideration was less mechanical, and more about just keeping some kind of mental sanity in this scenario where you're like, okay,
[00:24:07] Don't just have all your code in these...
[00:24:10] kind of feature centric buckets.  Let's separate them into like clear, good architecture of models, which are like your database, representation, your views, and then these controllers, which can handle the API requests or handle the page requests.
[00:24:23] But the truth of the matter is
[00:24:26] After dealing with so much state in this coupled mess,
[00:24:31] Everyone's like, "Okay, we can't do that. We need to...
[00:24:34] like return to web fundamentals again you you notice this happens whenever there's a shift  there you finally get to a level of
[00:24:43] complexity that there's this kind of regression.
[00:24:47] Are people following along with me so far? I don't know if anyone's around.
[00:24:52] Yeah, yeah, yeah, we've been doing... Yeah, we'll... Yeah.
[00:24:57] Thank you.
[00:24:58] You know what? Kind of sounds like less elegant HTMX. You know, that's fair. And I think Greg's with us in the stream. He was pointing...
[00:25:07] I think...
[00:25:09] Oh, where was it?
[00:25:12] I think
[00:25:14] Yeah.
[00:25:16] "Everyone asking Ryan Carnio's opinion on HTML, he needs to go back to the catalog and cut some deep cuts like the history of server rendering starting around 40 minutes."
[00:25:24] This...
[00:25:25] He...
[00:25:26] Is this the 40 minute mark?
[00:25:28] Okay, just a second. Let's skip the ad here. It's the same video that I actually had on Focus here.
[00:25:34] Let's just...
[00:25:36] Skip ad.
[00:25:38] Let's go...
[00:25:40] - Advanced client-side render.  - Okay, no, I wanna go to the 40 minute mark.  It was around here.  - Variation.
[00:25:46] I guess with the drop-down it's not too bad, you drop it and then you're done. But essentially, they basically had this way of just replacing the section of the page. And this is not new technology, this is like 2006 they were doing this.
[00:25:59] um
[00:26:01] And that kind of became the de facto way to solve this for a time being. The problem was it was still clunky as hell. It was still slow because you have this problem like if this form needed all the data on the page, like maybe this is a user section with all the information.
[00:26:18] And like...
[00:26:20] you'd be serializing and sending back this data back and forth like a ton. Like it got nasty. I worked on some really big nasty.net projects and
[00:26:31] You know, this was like the way they did it, because you didn't have the right JavaScript. You could use your back-end templating language here to define some controls. And then they'd be like, "Oh, onClick."
[00:26:43] refresh, like redraw, like you could keep your server side  mentality and have to just replace these sections.
[00:26:52] *throwing*
[00:26:55] Yeah, exactly. That's the idea here. And this was the go-to solution
[00:27:01] for definitely a few years there.
[00:27:04] It's funny because...
[00:27:06] When I see Turbo,
[00:27:07] And I know they've got better at this.  And I see like what the Rails community is doing.  It's a variation of
[00:27:13] on this.
[00:27:14] This is not a new technique.
[00:27:17] Right. The difference is here we had to make these clunky kind of update panels.
[00:27:22] and whatnot. They've gotten to a point now that they've been able to make it more granular, and like every button is just individually wired and it's more efficient.
[00:27:33] But essentially,
[00:27:35] You know,
[00:27:36] And you can nest update panels, I'm sure. Like you can say like this is a panel and you can say this whole thing's a panel.
[00:27:42] like,  uh,
[00:27:44] like, yeah, let's just get another color so I can show you what I'm talking about. Right? Because like, it's fine. I'm not going to go into this anymore here. But yeah, I kept on that we've been here before I'm trying to, I wonder what I said that was so terrible about HTMX here, but I, I, I,
[00:28:03] Eat.
[00:28:04] You could tell because of my past experience, I was not terribly excited, so to speak.
[00:28:11] Uh...
[00:28:13] But...
[00:28:16] Is UX an important debate? Well, we'll get there. Okay. Let's keep this rolling a bit, right?
[00:28:22] Where I was getting to here is that...
[00:28:26] And I think it's about...
[00:28:28] Where do I add the list?
[00:28:31] All of this stuff,
[00:28:33] made us ripe for this change to client-side rendering.  'Cause it was, and single page apps,  'cause it was way, way, way, way, way, way simpler.
[00:28:43] I don't know how to impress how simple it was because
[00:28:48] You essentially just started with a blank page. You didn't have to need a server. You literally just had a page.
[00:28:52] you know, index HTML, load a JavaScript,
[00:28:56] and then it handled everything.
[00:28:58] There was no server back and forth, no serialization of state to maintain it or any kind of crazy stuff.  All you needed was a RESTful API and great timing because the back end guys are like, God, get the state out of here.  You know, everyone, we want microservices and distributed architecture and stuff.  We're just like, it was like perfect timing of like all these things coming together.
[00:29:20] and
[00:29:22] Single page apps,
[00:29:24] basically finally let interactive apps
[00:29:28] be interactive, maintain that state.  Because before, trying to maintain state was a pain.
[00:29:34] Like just, I can't get over it.  And it was more than that.  It was awful for authoring, you know?
[00:29:39] Um,
[00:29:41] That's enough of the history lesson right now.
[00:29:49] But where I'm going to this is I want to go I want to go back and
[00:29:54] and look at what was Rich Harris' complaints about MPAs?
[00:29:58] Here, like...
[00:30:00] Because...
[00:30:01] Okay, I guess I should skip ahead. You know, before we get here, actually, sorry, let me do this.
[00:30:08] There's been this recent conversation...
[00:30:13] See if I can do this.
[00:30:14] I'm gonna give a bit of one of my talks here because
[00:30:20] You might have been hearing,
[00:30:22] Bye.
[00:30:23] about MPAs again because of this whole zero kilobytes of JavaScript.
[00:30:28] thing and let me I want to do a bit of an explanation here because I've kind of set up why single page apps came in and what I'm kind of skipped over is they became omnipresent
[00:30:40] over the next decade. Things like React became possible and it's pretty much what we've been doing. Sure,
[00:30:48] sites that needed it.
[00:30:49] or you know were too slow to move off stuff didn't move to single page apps
[00:30:53] But what was great about the technology around these single page app tech for things is you could just embed them.
[00:30:59] on old server rendered pages.
[00:31:01] I spent my early, like I spent around 2010, I was just putting knockout apps and
[00:31:06] inside older server rendered apps to get, you know,
[00:31:09] You render most on the server and then you render the interactive stuff on the client.
[00:31:14] But over time, single page apps have kind of getting to this point that we're having that pushback. So this talk is me talking a little bit about that pushback. Okay, so benefits of single page apps.
[00:31:28] Um,
[00:31:30] We'll dig into a little bit here as well, but let's just get rolling.
[00:31:35] Okay.
[00:31:39] so
[00:31:40] Sorry, I keep on interrupting myself because the reason I want to talk about this is...
[00:31:49] This idea of zero kilobytes of JavaScript
[00:31:52] is kind of, I mean,
[00:31:55] What is this? "0KV is not a goal" is a section in this talk.
[00:32:01] Thank you.
[00:32:01] Um...
[00:32:03] I think...
[00:32:05] I wouldn't even be surprised. I think I saw this. I was like, what's going on here?
[00:32:10] uh,
[00:32:11] Thank you.
[00:32:13] Thank you.
[00:32:16] Will JavaScript be left behind?
[00:32:18] Look at all the bait titles. The Zero.js lie.
[00:32:22] Whether your vibe is a cherry red mussel...
[00:32:25] Oh, man.
[00:32:26] I think this topic is...
[00:32:29] is pretty hot right now. - The web, the same way HTML and CSS is.  Zero kilobytes of JS sounds great.  For some things it probably is, but I, I'll put it frankly,  I don't care.
[00:32:39] Yeah, we're going to see this narrative a lot because I think what we're getting to right now is kind of a counter pushback where...
[00:32:48] The idea behind the zero kilobyte JavaScript movement
[00:32:52] is that it's opt-in.
[00:32:54] And
[00:32:55] We're seeing pushback now because zero kilobytes could never be the actual goal, so to speak.  Let's skip back here.  What does he say here?
[00:33:06] - Which Richly? - The price of JavaScript is not a goal.
[00:33:09] The goal is to meet some user need, or if you're cynical, to meet some business need by way of meeting some user need.
[00:33:14] And sometimes performance is a factor in how effectively you can meet that need.
[00:33:18] We've all seen the studies showing that for every millisecond. Yeah. So
[00:33:24] This is the topic. This is why MPA versus single page app is even a discussion point.
[00:33:32] Okay.
[00:33:36] Yeah, and that's the way you should take it.
[00:33:41] that it is.
[00:33:45] Let me catch up with chat here.  What was it?
[00:33:51] Thank you.
[00:34:00] RSCs or Remix are much simpler. Much simpler than what? I think I'm missing
[00:34:04] some context. Um, okay.
[00:34:07] whatever.  Uh...
[00:34:09] Thank you.
[00:34:10] Um, I should check my Twitch sometimes.
[00:34:16] Oh, I see.
[00:34:17] For some reason, they didn't come through.  SPA plus React query plus terrible is the simplest DX I've ever had.
[00:34:25] That was the comment. Here it is. Yeah, gotcha. Yeah.
[00:34:29] Yeah, I know this is commenting about what I said a few minutes ago, but
[00:34:33] There is something simple in...
[00:34:37] It's almost like a mobile app. This is what we're modeling after. To understand what I'm about to show you, you have to understand that the goal in the early 2010s was to remake mobile on the web.
[00:34:47] And essentially, stuff was losing out to mobile sites.  Or mobile apps were starting to get popular.  People started thinking that was the experience that they should have on the web.  Most people spend most of their time on their phones.  All these trends are coming out.  And that put an incredible amount of pressure on building, which really pushed...
[00:35:09] like I told you all the pieces are right, right?  If you're gonna have a backend API that's gonna, you know,  anyways for mobile, you might as well have it also serve the web.  You could simplify like,
[00:35:19] backend costs this way, all you need are these API services. There's a lot of stuff, but why is the pushback happening now?
[00:35:27] Let's do that for a minute here.
[00:35:34] uh...
[00:35:36] Sorry, full screen.
[00:35:38] Well,
[00:35:39] - Thank you.
[00:35:40] Some of you have probably seen this before.  This is the size of...
[00:35:45] page weight of pages.
[00:35:48] in the last 10 years, roughly.
[00:35:50] We went from averaging about 500 kilobytes and this is everything. This is images, CSS, everything to now being over
[00:35:59] uh, 2000. Basically,
[00:36:02] We've quadrupled...
[00:36:04] in the last
[00:36:05] say 10 years, a little less than 10 years. We quadrupled the size of web pages.
[00:36:14] And you might be like, "Who cares?"
[00:36:17] And as you can see, images actually make up a large proportion of the size.
[00:36:23] JavaScript makes up less.  So the mean for JavaScript is actually about 500 kilobytes.  And then CSS and HTML make up much, much less.  Okay?  Okay.
[00:36:37] Okay? So,
[00:36:42] This is the part that always...
[00:36:45] Why, I mean, yes, optimize your images.  It makes a big difference.  But like, this is, and this has improved over time.  I love, Addy Osmani has these articles,  and I think he recently did a video  talking about the cost of JavaScript.  This is from 2017.  It's a little outdated.  But it was showing that on...
[00:37:01] the low-end device like the Moto G4 that they use on all those test sites or whatever, and what they consider a slow 3G network,
[00:37:11] Yeah.
[00:37:12] The thing is, on a slow 3D network, yeah, 170 kilobytes of JPEG and 1 kilobytes.
[00:37:16] 70 kilobytes of JavaScript, it's going to come in the same amount of time. But
[00:37:20] The JPEG...
[00:37:22] can basically...
[00:37:23] Um,
[00:37:25] decode
[00:37:27] and rasterize
[00:37:29] within
[00:37:30] 100 milliseconds
[00:37:32] Whereas
[00:37:34] this JavaScript on this device would take another 3.5 seconds. Like it doubled the length.
[00:37:40] You know, it's like basically 30
[00:37:44] Network aside, for CPU costs, it's basically 35 times more expensive.
[00:37:49] Um,
[00:37:51] This is significant. It's like order magnitude difference when looking at the difference between JavaScript and images.
[00:38:00] Yeah, Google Fonts is also a big weight.
[00:38:02] Um...
[00:38:03] which is interestingly not shown here, but...
[00:38:07] Yeah, that's an interesting one.
[00:38:11] And the reason this matters is
[00:38:14] I don't know, this is from Alex Russell, so some people say I should take it with a grain of salt, but...
[00:38:21] Thank you.
[00:38:22] If you look at it,
[00:38:24] Again, this might not be you, but well, devices have gotten definitely more powerful over the years.
[00:38:31] The low-end devices, the mode of, like...
[00:38:33] our Moto E series or whatever.
[00:38:36] And our Moto G4 from back when we were doing these tests and stuff
[00:38:40] are like basically the same power level.  And that takes us back to about an iPhone 6.  So...
[00:38:47] when you consider low-end device categories,
[00:38:51] people are basically
[00:38:54] Like the fact that devices got hugely more powerful in the last eight years,
[00:38:58] is not impacting the low end, okay?
[00:39:02] And this is what Rich was referring to when he was talking about Amazon and stuff.
[00:39:06] There is...
[00:39:08] For e-commerce sites
[00:39:10] there is a huge shown benefit of having faced faster page loads for SEO and stuff. This is, you know,
[00:39:17] There's no surprise here.
[00:39:20] And
[00:39:21] It's...
[00:39:22] um,
[00:39:23] Yeah, I mean, every company like this has the numbers. They kind of tuck them away. This  was a study that Google did together with eBay, so they were able to publish stuff. But there's  a speed team at eBay that was like, literally auditing, that audits every...
[00:39:38] you know, page and when, you know, releases come out, looks for speed regressions and stuff, because it all impacts those sales numbers.
[00:39:45] Um,
[00:39:48] But it's interesting because you can sort of say, I'm not eBay, I'm not serving customers
[00:39:57] I don't know, somewhere in Southeast Asia, you know, with these low-end devices, I don't really care.
[00:40:03] Um, but
[00:40:04] you know,
[00:40:05] I wanted to focus on the rate of the bottom here, of how fast that's climbing.
[00:40:12] versus...
[00:40:14] how fast that's climbing. It's actually...
[00:40:18] The gap's bigger right now.
[00:40:20] than it was  like, you know, six, seven, eight years ago.
[00:40:26] But
[00:40:27] Again.
[00:40:28] not everybody's concern. Hey, I had this tweet ready, right?
[00:40:35] But...
[00:40:36] Thank you.
[00:40:39] Thank you.
[00:40:42] I already talked about the travel agency site and I want to go back into this a bit. Um,
[00:40:48] But there's one other aspect of authoring single page apps.
[00:40:52] that...
[00:40:53] We were saying a minute ago how they were simpler.
[00:40:56] Thank you.
[00:41:04] Thank you.
[00:41:05] And...
[00:41:06] I want to show you something.
[00:41:12] Thank you.
[00:41:12] *sad music*
[00:41:14] This...
[00:41:16] I hand made
[00:41:18] this example
[00:41:20] Thank you.
[00:41:21] But this is the type of code I was writing in 2012.
[00:41:27] I was telling you about how, sure, some of us got the start on single page apps.
[00:41:32] But most of the, you know,
[00:41:36] early days were these server rendered apps where you had to put your JavaScript on your server rendered app and  the reason I'm showing this example here is I
[00:41:46] Actually, does anyone know what we're looking at?
[00:41:52] This is this little pop quiz for the audience here.
[00:41:56] Thank you.
[00:41:58] Thank you.
[00:42:00] Thank you.
[00:42:02] Looks like Svelte. Svelte doesn't want to look at this.
[00:42:09] No.
[00:42:10] I wish I knew how to do polls.
[00:42:13] Is it React server components? You guys are killing me.
[00:42:18] *laughs*
[00:42:19] -
[00:42:20] Close. It's not a template language, it's two templating languages.
[00:42:29] Yes! Bam!  ERB, that's one. What's the other templating language?
[00:42:37] Thank you.
[00:42:39] *laughs*
[00:42:41] I mean, yeah, HTML, but no, there's two templating languages here.
[00:42:49] No.
[00:42:52] Razor? It looks a little bit like Razor, eh?  But yeah, no, it's
[00:43:00] uh
[00:43:02] So it's ERB
[00:43:04] - Thank you.
[00:43:06] Not Marco, no.
[00:43:10] No, no.
[00:43:12] Thank you.
[00:43:13] And knockout JS.
[00:43:16] It's ERB with KnockoutJS
[00:43:22] So the ERB are these breakout percentages where you go like, you got your Ruby code here,  like each users and like do user...
[00:43:30] And then, you know, you do this in a loop and then you can put in to reject the values and then around it.
[00:43:36] we have data bind for each users. You don't see the curly, the parentheses here, because they were optional in their data bindings. But the second you had to do a property, you had to write them.
[00:43:45] Anyways, so...
[00:43:46] Technically, these are actually signals.
[00:43:49] but they had a direct signal the way they did it.  And then data blind click parent remove user  is how you got out of this scope.
[00:43:57] to get up to the parent level scope.  Anyway.
[00:44:04] The reason we have a for loop over users here and a for loop over users here is because you'd render this as
[00:44:11] on the server in Ruby.
[00:44:13] And it would generate the HTML with these data bindings in the
[00:44:19] the HTML.
[00:44:20] And then when you got to the client, the client would swallow
[00:44:23] the data binding.
[00:44:25] and then apply the JavaScript, but it needed to know what to render. So it needed
[00:44:30] It needed like four each users and it would be destructive. It would destroy what was there and replace it, you know, but essentially
[00:44:40] You'd kind of layer these template languages on top of each other.  This is...
[00:44:44] What would a, this example is knockout plus ERB, but people still do this today with like PHP and Alpine.
[00:44:52] Um...
[00:44:56] Yes. How did people live like this? Like, this was the middle step. Like, this was still preferable to what came before it, what I was talking about, where you shifted the view state back and forth and did the partials.
[00:45:10] right? Because the problem was
[00:45:12] Sure, you start with something simple and it's like HTML, you're like, yay. And then you have to build something real. And then you're like, oh, crap, I need JavaScript. So then you add some jQuery and then you're like, oh, my JavaScript is getting complicated. So then you add declarative JavaScript and state. And then you're like, you get here again.
[00:45:28] Um,
[00:45:30] So this...
[00:45:31] This...
[00:45:33] It was a time period.
[00:45:40] So...
[00:45:42] This is what happens when
[00:45:47] Like you it's,
[00:45:48] there's,  you,  it's,  it's,  that's what I talk about when I talk about authoring two apps,  um,
[00:45:55] So single page apps got us away from this.
[00:45:57] We only had a single model on the server and client, especially when we got to isomorphic single page apps like Next.js, SvelteKit and whatnot.  If you want the server render them, it was the same logic. You didn't have to write everything twice.
[00:46:08] This is like the...
[00:46:11] prime kind of example that I want to bring up when talking about this.
[00:46:18] Yes, yeah, yeah. This is a very common pattern in the early... Yeah. This is hydration like the way Angular called hydration until like last year.
[00:46:30] Like, uh, like, it just...
[00:46:33] Just
[00:46:34] server rendered and then wiped out actually angular is better than this because you could actually not layer two things and
[00:46:40] Like, this...
[00:46:41] Both stages...
[00:46:43] Like, people talk about stuff being bad now.  Both stages were the most horrendous time period.
[00:46:49] I actually prefer this to what came before. As I said, the old update panel's time period was like the Dark Ages.
[00:46:56] Um...
[00:47:01] In any case, you know...
[00:47:03] let's get let's keep on going um
[00:47:06] Thank you.
[00:47:08] Thank you.
[00:47:08] So yes, single page apps are very good for productivity, immersive experiences,
[00:47:15] But they...
[00:47:16] They have this kind of manifest destiny, I call it.  It's inherent to design, which is like...
[00:47:24] What
[00:47:26] can be sent to the browser, shall be sent to the browser.
[00:47:28] Thank you.
[00:47:31] Thank you.
[00:47:33] You know, the funniest thing is everybody has
[00:47:36] um,
[00:47:38] a version of this, you just need the intro rock character.  It doesn't matter what it is, right?
[00:47:43] I mean, do people suddenly like this way better now that it's curly braces instead of angle braces?
[00:47:48] Right? Like...
[00:47:50] I swear...
[00:47:52] I've seen that... Oh, right, I have to get out of... Oh, I don't want to get out of full screen mode.
[00:47:59] Okay.
[00:48:01] I'm doing it. I'm not getting out of full screen mode. I should have popped this into its own thing.
[00:48:06] Let's just go to Twitter for a second.  I think one of my other bookmarks will show you what I'm talking about.
[00:48:11] These kind of conversations are happening literally right now.  Let me go to bookmarks.  What do we got here?
[00:48:16] Here we go.
[00:48:18] Angular.
[00:48:19] Control flow.
[00:48:21] Thank you.
[00:48:24] at for at this case, main defer loading.
[00:48:30] So,
[00:48:31] This is the @ symbol version of templating.
[00:48:35] Um...
[00:48:37] So that's their blocked syntax. Let's go to Svelte.
[00:48:42] Um, let's go tutorial.
[00:48:47] Um, logic.
[00:48:50] Thank you.
[00:48:53] hashtag if... I guess it's not percent signs, it's hashtag.
[00:48:57] Thank you.
[00:48:58] Like, you just...
[00:48:59] Thank you.
[00:49:01] colon sometimes.
[00:49:04] Thank you.
[00:49:06] Yeah. Okay. Anyway.
[00:49:09] You all get what I'm getting at, right?
[00:49:14] Thank you.
[00:49:18] Yes, yeah. I mean, that's the thing. We'll battle this. I agree, that is way better. But, you know.
[00:49:26] Week 4.
[00:49:29] Yeah.
[00:49:34] It's so nice because it's written twice.
[00:49:40] That's the thing. My point is no one is gonna agree on this stuff.
[00:49:45] Right.
[00:49:47] Right? See, some people think V4 is the most elegant one. When I think of V4, I think back to like,
[00:49:52] almost like data bind, like, you know, overriding things.  I think actually personally, out of all the options, I dislike the directives
[00:50:00] the most because it overrides the meaning of HTML attributes, but
[00:50:04] You know, as I said, everyone has...
[00:50:08] perspective there and they're not as composable as well.
[00:50:13] Yeah, anyway.
[00:50:15] Thank you.
[00:50:16] Like...
[00:50:17] Thank you.
[00:50:18] You can take... There's both different syntaxes, and you can take different...
[00:50:23] patterns like the directives versus the
[00:50:26] the in template with the components and you can make ugly looking examples with
[00:50:31] All of them.
[00:50:33] That's something I used to do for fun.
[00:50:35] Because actually, funny enough, the JSX, like the component version, is in my opinion the least offensive
[00:50:42] You know.
[00:50:43] on average across all the situations. It's the most, it's more offensive in the basic case,
[00:50:50] And it's...
[00:50:51] you know,  than other ones.
[00:50:54] It's probably the most, but it actually
[00:50:58] when you consider all the different scenarios,  in my opinion,  it's,  it's the,  it has the most upsides,  but I would say that one day.
[00:51:11] - Thank you.
[00:51:12] Well I mean I suppose they could be in a certain way. What I mean composable is both like if you
[00:51:18] both in the sense of like taking a four component and then like building, um, uh,
[00:51:24] pageant virtualized list component using the for component as its internals.
[00:51:29] and then being able to provide the same API, so it's like idempotent, so that your own for component has the same API as the for component.
[00:51:37] that consumes the other four component.
[00:51:40] But yeah, I'm getting a little off the deep end here.
[00:51:43] Yeah, oh yeah, it's in the browser templating thing.
[00:51:47] DOM parts. Yeah, exactly. Okay, so we're getting a little sidetracked here.
[00:51:52] Okay.
[00:51:54] But what I want to focus on here, because we're talking MPAs and single page apps,
[00:51:58] is that
[00:52:00] what can be sent to the browser shall be sent to the browser is kind of this  manifested destiny.  And,
[00:52:10] We've been trying to fight this for a long time.
[00:52:15] and
[00:52:19] There's some fundamental things that actually make this
[00:52:22] Um...
[00:52:25] difficult because
[00:52:29] Obviously, when we compare it to single page apps to server render page, like just pure client render single page apps to server render page,
[00:52:35] There's a huge difference here between
[00:52:38] Like,
[00:52:39] seeing the HTML and seeing that content right away,  versus first downloading the HTML,  then noticing there's JavaScript,  downloading that JavaScript, evaluating it,
[00:52:51] and then fetching the data and then rendering it. There's multiple, there's like three round trips on the client side
[00:52:58] where it's like one round trip on the server side rendering.
[00:53:03] Obviously we've solved this piece.
[00:53:06] with, you know, meta frameworks where we can pre-render the page or like, or render on demand,  like next, next, remix, spell kit, salt start exactly.
[00:53:17] So, you, like...
[00:53:20] Because of, you know, solving hydration,  because of being able to author in a single lap,  because being able to, you know,
[00:53:28] have this pre-rendering, we're kinda in a zone where you're like, okay,
[00:53:32] We're pretty good.
[00:53:33] Right?
[00:53:34] We can do everything. We have a decent authoring experience. We can do client side navigation. We're interactive.
[00:53:43] And, uh...
[00:53:46] You know, we're good to go.
[00:53:53] Okay.
[00:53:59] Thank you.
[00:54:00] But the comes...
[00:54:01] this
[00:54:02] interesting thing because this doesn't actually change.
[00:54:07] Even when you server render a page,
[00:54:09] that is a client routing page that hydrates, this part doesn't change. Yes, you see the content,
[00:54:16] Right here after...
[00:54:17] download HTML, but it still has to download the JavaScript, evaluate the JavaScript. It might,  it doesn't have to fetch from the API, but this part has to run on the client before it's  interactive. And we call the difference between when you see the page
[00:54:30] and the JavaScript arrives and parses an eval as the uncanny valley.
[00:54:36] So this is why everyone talks about hydration because your page is,
[00:54:40] isn't interactive
[00:54:42] in the same way.
[00:54:44] during this zone. And it's a tiny piece of time, although it can be pretty large
[00:54:50] Sorry.
[00:54:51] If you go back to-- where were we?
[00:54:55] this scenario, right? 3.5 seconds maybe?
[00:55:00] Because that doesn't include data fetching.  That's just...
[00:55:02] That's just literally just
[00:55:04] parse and execute time.
[00:55:09] *sad*
[00:55:10] And when I say interacting with them the same way is...
[00:55:14] We'll get to that in a second.
[00:55:19] But what I want to actually point out here is
[00:55:24] In the process of getting our perfect apps that hydrate,
[00:55:30] We often make our JavaScript bundles even bigger by server-side rendering.
[00:55:34] Because now we don't just need the code for future updates.  We need the code...
[00:55:39] to handle hydrating the page as well.  And in some frameworks, it's only a little bit larger.  Other frameworks like Svelte historically,  although I think Svelte 4 fixes this maybe,
[00:55:51] It was a significant difference in size for hydration. You almost have a completely separate compiled code path.
[00:56:01] So with SSR, yeah, we're seeing the content sooner, but because...
[00:56:05] Um...
[00:56:06] Thank you.
[00:56:08] Because we're now waiting, because we're server fetching the data before we send the HTML,
[00:56:15] Thank you.
[00:56:16] I almost feel like I got Scaladraw this for two seconds.
[00:56:20] Right?
[00:56:21] Let's just go here, right?  Because...
[00:56:26] How should we do this?
[00:56:28] -
[00:56:30] Yeah, I'm just going to straight up show the...
[00:56:33] show the difference here between like
[00:56:36] a timeline, yeah, we're gonna do two of these.
[00:56:39] So,
[00:56:39] The difference between...
[00:56:41] our CSR timeline.
[00:56:43] and our isomorphic SSR timeline.  Because the funniest thing...
[00:56:47] It varies on network, but I've shown that a client-rendered app on a fast network is actually faster than an SSR network.
[00:56:56] Um,
[00:56:57] SSR can be because in terms of actually showing the page because
[00:57:02] Uh,
[00:57:03] a couple things that can happen.
[00:57:07] So on a CSR app,
[00:57:10] The first step here is this marker.
[00:57:14] where we're like, let's make the markers blue.  And we're going to say something along the lines of like,
[00:57:23] Server...
[00:57:25] or receive...
[00:57:27] request, right?
[00:57:31] Okay.
[00:57:33] Thank you.
[00:57:35] And...
[00:57:39] that marker is going to be the same
[00:57:41] Roughly for both of these. Let's get it. Let's get it to the end.
[00:57:43] So this is when the server receives the request, right?
[00:57:46] Now,
[00:57:48] Thank you.
[00:57:50] The next thing that happens on a CSR, which is really quick, is it finds a static index HTML page.
[00:57:58] And almost immediately after here,
[00:58:01] We'll draw another line.
[00:58:09] I don't know if I'm questioning my blue right now.
[00:58:13] But the...
[00:58:14] And we'll make it another color. We'll make it red or brown. Let's make it brown.
[00:58:18] And we'll say...
[00:58:22] Send
[00:58:23] Back.
[00:58:24] HTML.
[00:58:27] Okay.
[00:58:29] I feel like I should just duplicate all of these.
[00:58:37] and then
[00:58:39] Thank you.
[00:58:42] And then basically
[00:58:44] when the page gets that HTML back. So let's give it a little bit of time.
[00:58:49] Sorry, I didn't mean to...
[00:58:51] There we go.
[00:58:52] Then what happens is
[00:58:54] It sees that it needs JavaScript.
[00:58:57] So I'm not going to bother doing the full send receive here, but let's say...
[00:59:02] I'm just gonna make round trip JavaScript here, right?
[00:59:07] Let's go round trip.
[00:59:09] Why is this one still like...
[00:59:10] Oh, it's because I'm using a different tool.
[00:59:12] Sorry.
[00:59:13] Let's go roundtrip JavaScript.
[00:59:20] Let's just go JS.
[00:59:22] Ready.
[00:59:23] Okay?
[00:59:24] Thank you.
[00:59:27] Okay?
[00:59:31] So this is like when it sees it in the HTML, sends it back, parses,
[00:59:36] and does this, okay?
[00:59:45] Thank you.
[00:59:46] I'd say that's going to be...
[00:59:51] Thanks.
[00:59:53] Thank you.
[00:59:54] and then ready is like it's parsed but it hasn't executed everything yet and then the next stage
[01:00:00] Here is going to be
[01:00:02] Oh, sorry.
[01:00:04] It's going to be...
[01:00:11] I said control.
[01:00:12] Stop.
[01:00:13] Stop it.
[01:00:14] Okay.
[01:00:15] Yes.
[01:00:16] - Thank you.
[01:00:17] The next page, the next stage on the client side is going to be
[01:00:22] the data's back, right?  So let's do...
[01:00:27] I'm just picking arbitrary colors. Let's just go here and go
[01:00:35] Thank you.
[01:00:36] Thank you.
[01:00:37] Thank you.
[01:00:39] So it gets the JS, it runs the JS, it gets data returned...
[01:00:47] Thank you.
[01:00:50] And then finally,
[01:00:53] We add our...
[01:00:55] Thank you.
[01:00:56] Finally, we add our green marker here, which is going to be like page ready. Now, I'll move the bars around here in a minute.
[01:01:02] I just wanted to get
[01:01:05] Page.
[01:01:06] Freddy.
[01:01:07] Okay.
[01:01:10] Thank you.
[01:01:13] Okay.
[01:01:16] So...
[01:01:17] Yeah.
[01:01:18] It doesn't...
[01:01:19] Let's just do this.
[01:01:30] Thank you.
[01:01:31] Thank you.
[01:01:34] So...
[01:01:35] Make this a little bit shorter.
[01:01:41] Server render the page.
[01:01:45] Thank you.
[01:01:46] Thank you.
[01:01:49] Thank you.
[01:01:51] Yeah, I'm going to have to move these along because the truth of the matter is the difference between this and this is usually like...
[01:01:56] that
[01:01:59] It's actually partially judged by how far it is from here.
[01:02:04] Because it is waiting, but there's a certain amount of work that got done
[01:02:09] initially.
[01:02:11] Whereas...
[01:02:15] Thank you.
[01:02:16] Thank you.
[01:02:21] Ready this.
[01:02:26] Okay.
[01:02:28] Thank you.
[01:02:29] I have to move some of these around because
[01:02:31] whatever
[01:02:33] the
[01:02:33] Order is different, okay.
[01:02:35] Now, don't get me wrong.  These points are the same, essentially...
[01:02:40] But they move around.  Okay, if you're wondering what I'm doing here...
[01:02:45] This is
[01:02:47] CSR
[01:02:48] app, CSR,
[01:02:50] And this is...
[01:02:52] Thank you.
[01:02:52] So I'm going to say CSR Spa
[01:02:54] And this is...
[01:02:57] Thank you.
[01:02:57] SSR spa like in like a typical next.js or spell kit or remix. Okay.
[01:03:03] and
[01:03:06] Obviously, the time to data return...
[01:03:11] is
[01:03:12] going to impact the HTML rendering,
[01:03:16] And I...
[01:03:18] Or actually, let's...
[01:03:20] Thank you.
[01:03:22] Yeah, maybe I should just spread these all out. Let's just spread them out. Let's say pretend this one takes a bit longer here.
[01:03:28] This one...
[01:03:30] Takes a bit longer here.
[01:03:34] these ones, let's move, if our scale is to here,
[01:03:39] Data rendering is going to be there.
[01:03:44] Thank you.
[01:03:45] Thank you.
[01:03:48] look more like
[01:03:50] this
[01:03:52] Thank you.
[01:03:54] Thank you.
[01:03:56] Data return is going to be more like
[01:04:00] Thank you.
[01:04:07] Thank you.
[01:04:11] All right.
[01:04:12] I'm doing them to be roughly equal, but you can see...
[01:04:16] that
[01:04:18] I'm sorry.
[01:04:20] There are things that get shorter, like the data...
[01:04:23] But then server rendering,
[01:04:25] Gets longer.
[01:04:27] Thank you.
[01:04:28] And then...
[01:04:31] Yeah.
[01:04:32] Something like this. Okay, cool. I'm back.
[01:04:41] Okay.
[01:04:42] Sorry for that. That was a longer explanation than I wanted.
[01:04:47] SSR with hydration without streaming is just wasting time. Parsing is still the  most advanced part of performance of super dynamic language JS because compilers
[01:04:55] Uh, half to 20%.  Right.  So this is an interesting idea because.
[01:04:59] If parsing is so expensive, who gets to parse the JavaScript first?
[01:05:04] right?  The one who sends back the HTML document sooner.  But in this case,  they have to wait for all this data information.
[01:05:10] to the comeback, which is pretty long.
[01:05:13] Um...
[01:05:14] And in this case, they could do the data fetching on the server before they send the HTML back.
[01:05:18] But my point is generally speaking
[01:05:23] as you slow down the network,
[01:05:25] there will be bigger benefits for the SSR, the CSR, but as you speed up the network,
[01:05:30] then CSR can actually be faster than SSR.  It's an interesting thing.
[01:05:35] We don't care about the speed though, right?  This is not what we're here for.  Um...
[01:05:39] I want to...
[01:05:41] we're more interested in the fact that,
[01:05:46] It's not a free win for SSR.
[01:05:48] And...
[01:05:50] Yeah, the data you found on the server, you need to be able to use it for hydration.  So you end up sending these giant, giant blobs of HTML files.
[01:05:59] are in the HTML of JSON data so you can hydrate it.  So you actually increase your server rendering cost  and over the wire cost as well.  This is next data, but it doesn't really matter.  We call this a double data problem  because you have to send this data
[01:06:12] both as JSON and
[01:06:14] and as HTML.
[01:06:15] Right.
[01:06:17] So,
[01:06:18] This all kind of comes into hydration.  Problem was it still is client-side hydration.  Okay.
[01:06:22] So...
[01:06:24] I
[01:06:27] Thank you.
[01:06:30] Thank you.
[01:06:31] *thud*
[01:06:38] Thank you.
[01:06:39] So the main issue for this is ReptientPers TTI, which is
[01:06:44] start to face the first pain, but still requires the jail and defecting teeth.
[01:06:49] Yeah, yeah.
[01:06:51] So there's ways you can address this like  um
[01:06:55] And...
[01:06:56] Thank you.
[01:06:56] That's largely what this talk is about.
[01:07:00] I'm not going to go as far into the deep end on the drawing and stuff,  but I wanted to talk about this because...
[01:07:06] In order to understand why this whole conversation is happening is
[01:07:11] Thank you.
[01:07:12] There's money.
[01:07:16] in the web.
[01:07:17] Right?
[01:07:18] There is money in the web.  Okay?  We saw it here, right?  There's money.  So when...
[01:07:26] You
[01:07:28] Like, have...
[01:07:30] Basically...
[01:07:31] stuff, places like eBay who cannot move to, like they tried, we tried at various points, can't move to something like React because it is too slow.
[01:07:40] Because of all of that.  Because...
[01:07:43] you know
[01:07:44] this whole hydration thing, all the stuff that I was just explaining.
[01:07:49] And
[01:07:51] people are incentivized to make faster solutions.  That's why everyone is talking about this, right?  And why zero kilobytes of JavaScript, you know,  became this kind of thing because, you know, there's actually...
[01:08:01] you know
[01:08:02] companies who are interested and have never been able to move off MPAs.
[01:08:07] So in that sense, MPAs,
[01:08:09] have not been dead. Not at all. Not at the largest scales.
[01:08:13] Um...
[01:08:16] And the...
[01:08:18] Interesting thing is that...
[01:08:22] -
[01:08:23] The more interesting question is,
[01:08:26] philosophically
[01:08:27] should
[01:08:29] we, you know,
[01:08:31] believe in
[01:08:33] What can be sent to the browser shall be sent to the browser, right?
[01:08:39] That's kind of the question, right?
[01:08:42] Because...
[01:08:46] *sniff*
[01:08:47] Thank you.
[01:08:50] MPAs
[01:08:52] are taking a hard line. They're like, "No, no, no.
[01:08:54] If...
[01:08:55] If you're not going to need this, you're never going to need this.  And they can do that because the page...
[01:09:00] reloads, so to speak.
[01:09:02] Whereas
[01:09:04] you know, single page apps, whether they're server rendered or not,  kind of, you know, take this idea of, oh, we'll just lazy load it as we need it.
[01:09:11] And...
[01:09:13] But there's still that initial overhead cost. And this has been kind of the battle back and forth. Now, there's ways to address this without actually making single page apps MTAs.
[01:09:22] Right? You can always ignore it.
[01:09:24] Right?
[01:09:25] But I think that you've seen a lot of this rhetoric in recent frameworks.
[01:09:40] What do you think about concerning the minimum of the thing? We run scripts, we make fetch requests, interactions, follow, and lays one. Yeah, I mean, you can...
[01:09:47] You could...
[01:09:50] preload
[01:09:51] some stuff from the client but like
[01:09:54] How should I put it?  Like, maybe I should go back to my diagram here.  Like...
[01:10:00] you're still like, yes, in that case,
[01:10:03] you've shrunk
[01:10:04] this
[01:10:06] Doubt
[01:10:08] I...
[01:10:09] Yeah.
[01:10:10] You're shrinking this down a little bit.
[01:10:13] So like this moves down.
[01:10:15] So yeah, I mean...
[01:10:16] Thank you.
[01:10:19] the network is still like there's benefits to SSR when the network is slower. Um,
[01:10:25] Plus being able to actually see the content when it loads.
[01:10:31] There's little techniques, like streaming is probably the best example of how we can improve, and I'll show streaming in a minute.
[01:10:38] But let's keep on going.
[01:10:41] So, things you can do without actually changing the architecture.  You can try code splitting, lazy loading parts of code.  The only thing I'm going to mention here is that
[01:10:49] Code that is needed for that initial page to show hydrate,  can't be code split out.  Even if it's code split, you pull it in immediately.  You can make placeholder states like graphics  and have them swap.  But the way that a modern app works,  where it's declarative and it like hydrates,  lazy loading will shrink your code,
[01:11:07] But, um...
[01:11:09] Even...
[01:11:10] And it's a good step, like an essential step, but it's still not...
[01:11:15] going to be enough...
[01:11:17] in a lot of cases.
[01:11:20] Use smaller, faster frameworks.
[01:11:22] I always like this image because it shows that this is like the Svelte scaling problem,  where Svelte starts as the blue line here and ends up getting to the blue line here.  This is from that To Do MVC comparison I did a couple years ago based on Evan Yu's work.  I think Svelte's made some improvements here probably,  but generally speaking, most frameworks have a linear amount of components.  So basically, over time, it's the components, not the framework size that end up mattering.  It does take a while to...
[01:11:50] And you can see with the reacts curve, even at like a reasonable size, no one's catching up to them.  Do you know what I mean?  Like...
[01:12:00] But, you know, for a lot of other ones, we could get to a hundred kilobyte range at around what I called 80 components. But...
[01:12:11] Um,
[01:12:13] there's other approaches.  And the other one you're gonna hear a lot  is progressive enhancement.
[01:12:17] stuff like Remix talks about this a lot, where like, oh, you can interact with the page before the JavaScript loads.  And then like, it'll just do the native behavior.
[01:12:26] Sure, but the...
[01:12:27] the native behavior isn't really the desired behavior necessarily. I always bring up that example of
[01:12:34] like
[01:12:36] Someone on the slow network, you know, the same person I showed at the beginning with that seven seconds wait on that 170 kilobytes. Hopefully it's only 170 kilobytes, right?
[01:12:44] Um,
[01:12:45] - Thank you.
[01:12:46] And
[01:12:47] Thank you.
[01:12:48] And they click...
[01:12:52] half a second
[01:12:54] Too soon.
[01:12:55] And instead of getting the client side re-render...
[01:12:58] They re-load the page and experience that whole seven seconds again.
[01:13:02] If they'd waited half a second longer and had finished hydrating, they would have just got the much more speedy client side.
[01:13:10] navigation.
[01:13:12] So...
[01:13:15] Yeah.
[01:13:20] Yeah, and...
[01:13:21] We can do smart stuff like change the order we hydrate stuff.
[01:13:25] Um...
[01:13:30] Thank you.
[01:13:31] So that kind of helps, but it doesn't change what needs to be hydrated. This drawing is actually from Dan Abramoff. He was explaining to me how selective hydration worked in React 18. And he drew these lovely images. But this shows it like what he's trying to say is like if someone clicks down here, and we're hydrating down there, it'll actually throw this away and then start hydrating this way so that it can get to that click, like it'll actually hydrate
[01:13:57] like I think synchronously from the click event so that it could like immediately respond
[01:14:03] to that portion. The thing is you have to remember is parent has to hydrate before child
[01:14:08] So...
[01:14:09] There's smart things you can do to try and reduce the cost with things like concurrent rendering.
[01:14:15] But...
[01:14:16] They're...
[01:14:18] There are trade-offs here in the way blocking works.  Also, being non-blocking is helpful,  but you still have to worry about stuff like interaction to next paint  if you're like synchronously blocking even a small portion interaction.
[01:14:30] here.
[01:14:31] while you're trying to like hydrate just what you need.
[01:14:38] So I'm going to jump to streaming.  We're hinting at that.
[01:14:43] it.
[01:14:44] The trick with streaming...
[01:14:46] is you can send back the HTML body
[01:14:50] while
[01:14:52] the rest of the content loads.
[01:14:53] So in a sense, streaming actually looks a lot like this.
[01:14:57] because you actually see the loading spinner from the server
[01:15:00] Let me see. I'm going to drop this one in here, but I'll show you the
[01:15:04] The demo.
[01:15:05] here.
[01:15:06] first.
[01:15:08] Here's a streaming demo.
[01:15:09] Thank you.
[01:15:12] One on the left is streaming, the one on the left isn't.  Okay, let's see that again.
[01:15:16] See, the other one waits till the end to the show up.
[01:15:20] You see, they both get the content at basically the same time. But the streaming one... like, the thing you don't see here is because the images load so fast.
[01:15:29] But if you think about it,
[01:15:32] I guess in this case, there's no advantage, but the page is already warmed up.  The JavaScript's already processed.
[01:15:38] At the like time that this is like partially loading in where everything here happens like at the end  so
[01:15:45] what streaming does.
[01:15:48] Thank you.
[01:15:49] streaming is basically almost identical where it sends the HTML back basically at the difference of the JSRDs. The difference is the data fetching started here.
[01:16:00] So...
[01:16:01] It's...
[01:16:02] here and then by the time it's returned, let's add the network cost, it's like
[01:16:07] here.
[01:16:10] Thank you.
[01:16:10] Amen.
[01:16:12] which means...
[01:16:15] Thank you.
[01:16:16] suddenly
[01:16:17] This
[01:16:18] becomes
[01:16:23] Like...
[01:16:24] That.
[01:16:27] It actually should be very similar.
[01:16:30] Thank you.
[01:16:35] OK.
[01:16:36] Thank you.
[01:16:38] So, the...
[01:16:45] Thank you.
[01:16:47] Thank you.
[01:16:48] Yeah.
[01:16:49] How are we doing chat?
[01:16:54] Thank you.
[01:16:55] Thank you.
[01:17:00] Thank you.
[01:17:00] Thank you.
[01:17:01] Do we have streaming declarative shadow DOM yet? That was actually something that we complained about in the past.
[01:17:07] We actually brought it up with Google Team. They were going to look into it.
[01:17:10] Thank you.
[01:17:15] Thank you.
[01:17:19] Can you go one step further? Inline the JS and data into the HTML so the cost of the first paint is the delta between the SSR HTML content and the JS content.
[01:17:29] Thank you.
[01:17:30] Hmm.
[01:17:31] inline the JS. It's interesting. I wonder how that, the one thing about a lot of the  optimizations that come around in this zone is, and I guess maybe it doesn't matter, it's like
[01:17:40] re-nav back.
[01:17:42] Um...
[01:17:44] How do you bundle it so that
[01:17:46] each page knows to inline it and then...
[01:17:50] Know where the source... maybe it's solvable.
[01:17:52] - Thank you.
[01:17:54] There's limits to page size being benefit.
[01:17:57] I mean,
[01:17:59] I...
[01:18:01] Yeah.
[01:18:03] I think the key thing here, you can work on how to make it, when from the HTML, how we can make it more optimal here. But I think the
[01:18:12] I think...
[01:18:13] .
[01:18:14] Thank you.
[01:18:15] the biggest benefit is moving as much of the stuff to the server. Right? If we data fetch from the client, even if you shrink this a little bit, you're still like here, right? The reason this is so fast is because the data fetch
[01:18:28] actually finished here.  Like it started the same time as on this one.
[01:18:34] And then
[01:18:35] like it's because it started here.  And then similarly,  the reason that both these two are fast is because you responded fast.
[01:18:44] and you start the client boot up.  If you can move the first...
[01:18:48] Events furthest back you you can block you reduce the like there's there's blocking processes here like there's all these things have blocking processes and
[01:18:57] But if you can somehow bring the first client interaction
[01:19:02] and do as much as you can off the first server interaction,  the rest of the times will have a much more impactful drop-up.  That's why streaming is compelling.
[01:19:14] Anyway, um...
[01:19:15] Yeah.
[01:19:17] Thank you.
[01:19:26] Thank you.
[01:19:27] Thank you.
[01:19:29] and
[01:19:30] Now...
[01:19:33] Yeah, the pages...
[01:19:34] I like, it depends, like I should probably,  there's a mention about the pages become ready  at the same time.
[01:19:41] Streaming is like it's the same thing. I can let's see if we can
[01:19:46] kind of make it so that the pages...
[01:19:48] I'd have to move all the bars around to make it make sense that the pages are ready at the same time.
[01:19:54] Um...
[01:19:58] You know what I mean?  Like...
[01:20:00] data return would have to move way out here and that
[01:20:04] Um...
[01:20:05] doesn't make sense compared to the client-side rendered story,  because data return should be sooner.  And then you're like, well, but then the server...
[01:20:12] Perfect.
[01:20:14] We'll...
[01:20:16] We like to show them being the same.  Streaming should have a slight advantage in...
[01:20:20] depending on the latency of the data.  The more latent the data, the better advantage of streaming has.
[01:20:27] So it's a difference between the latency between your data and your static contact or the speed of your server rendering.
[01:20:32] Okay, cool.
[01:20:35] Let's keep on going.
[01:20:39] Alright, I know this is a lot of pretext to get to where we're trying to get to here.
[01:20:44] Show that streaming example one more time.
[01:20:46] That's actually not even where I care about streaming, honestly.  Sometimes, because of the fact that you show the placeholder...
[01:20:54] Means that like it's a little bit more jarring for the end user if it like flicks loaders  so like especially if the stuffs coming in quickly and
[01:21:02] But the benefit of streaming is mostly the request long tail. The fact that like,
[01:21:08] Let's say you hit a database 100 times.
[01:21:12] and
[01:21:13] 1% of the time you get a slow request for each request.  So each service responds...
[01:21:19] Um...
[01:21:20] like slowly 1% of the time.  If you have 10 requests...
[01:21:25] Um...
[01:21:27] suddenly
[01:21:28] and you're not doing streaming, you're not separating them, they're all entangled,  slow is your slowest request.  So your probability of having a slow response now is 10 times...
[01:21:41] Lower, you know, it's like a order magnitude worse now. It's like I
[01:21:44] you might have a slow request 10% of the time.
[01:21:48] And that's just because...
[01:21:51] the
[01:21:51] You can see like if you're
[01:21:54] hitting like...
[01:21:55] 10 different services on your back end here,  and one of them is slow, you push this whole thing back.
[01:22:01] if one of them is slow,
[01:22:03] you don't push the whole thing back. You might, you know, push part of it back.
[01:22:07] but the page will get served.
[01:22:09] you know,
[01:22:10] Hopefully it's not your key part of content, but the page will get served faster, essentially.  So it helps decouple and lowers the risk.
[01:22:21] OK.
[01:22:23] MPAs to the rescue, right?  The unlikely superheroes, so to speak.
[01:22:30] Right.
[01:22:32] Because MPA has actually changed that map.  This is the stuff that we've been looking at.
[01:22:43] I want to throw something out here.
[01:22:47] Yeah.
[01:22:48] This caching technique to a certain degree was available to everyone at different periods of time. The reason RC's focus on it is because I think the approach that they've chosen with Next to try and compete with static, they can sense it.
[01:23:03] before you had ISG and like,
[01:23:06] or ISR and like pre-static generation, all that kind of stuff. And the caches is our way of trying to be slightly more dynamic with it. But it's like, it's because they're trying to get back to a basically static, pre-rendering performance with this RSC standup. But like, to me, caching, I usually ignore it. It's like the last step optimization. It's like, I assume that every architecture has the capability of caching, maybe some better than others. But the
[01:23:34] the core piece, there's always cache misses, and the core piece of the architecture actually  is much more defining than the cache behavior.
[01:23:42] I'm going to go.
[01:23:44] Um.
[01:23:46] Now, as it turns out, MPAs do have...
[01:23:50] something going for them, which actually improves on the situation that I've been painting here this whole time.
[01:23:55] Um,
[01:24:00] And that's that...
[01:24:03] They, uh...
[01:24:04] They don't need to know about...
[01:24:06] Um...
[01:24:07] They don't need to persist anything.  So if you have an app where you don't need...
[01:24:13] app-like things, you can just reload the whole page and just have these islands and
[01:24:19] you have way less JavaScript, only the interactive parts.
[01:24:23] This is where people start fooling things for PHP or they're like, yeah, you know, I have my, I have this custom Django backend thing, not even custom, whatever.  I have Django backend and I'm putting web components on it.  And, you know, it's kind of like islands, right?  Because like I just render the HTML and then I have these interactive islands, right?
[01:24:48] Not exactly. The thing is, we've been able to insert parts of interactive JavaScript
[01:24:55] in websites forever.
[01:24:58] And the thing is, it's not too hard, especially with web components,  made this kind of easier to have server rendered static stuff and then have
[01:25:05] But you don't even need web components.  You can just have client render the little pieces that...
[01:25:10] that come in. And don't get me wrong, now we are getting web components that would declare a Shadow DOM that could be server rendered and hydrated. But the second they go that direction, you need a special server rendering runtime for it. And you basically have a framework, it's no different than Next.js, solid, whatever. So I'm not including that in that case, because then you need to run JavaScript on the server,
[01:25:33] probably, to generate it.
[01:25:35] I mean, some large companies have done some clever things in other languages, but generally speaking...
[01:25:40] The whole goal there was to not run JavaScript on the server.
[01:25:44] So...
[01:25:46] This has been always kind of the blocker.  What makes islands different...
[01:25:51] from that
[01:25:52] is that
[01:25:54] the
[01:25:54] the small islands are isomorphic. They are like the single page app islands that render on the server and hydrate in the client.
[01:26:01] Um,
[01:26:02] They're not just these things that flicker in.  Have you ever been on a login screen where the page loads really fast and then the login controls don't show up right away?  They like...
[01:26:12] they like render in
[01:26:13] I've made those screens before, I'm not going to lie.
[01:26:17] You know, it's basically like a little client app that loads in on the server app.
[01:26:22] Islands are not that. They actually render
[01:26:25] ahead of time on the server and hydrate on the client. And they do so
[01:26:30] without looking like
[01:26:34] This.
[01:26:35] Right.
[01:26:36] Like,
[01:26:37] The reason Astro is so cool is because you get to just use the one system.  So you have the Astro.
[01:26:42] and then which is basically JSX, and then you have the, you know, your React components,  and you stick them in, and then you use them in, and they just fit in, and you don't have none of this like double for each garbage.
[01:26:57] So
[01:26:58] Island's
[01:26:59] are pretty sweet and islands solve this issue because
[01:27:06] You just never send a bunch of the stuff, which drastically reduces the page size.
[01:27:18] What do I got here?
[01:27:22] Yeah, I've talked about this before. I don't think it's terribly important, but I'm just going to mention it anyways.
[01:27:29] Islands can nest inside other islands.
[01:27:32] So as long as
[01:27:34] You have a server.
[01:27:36] Layout.
[01:27:37] And then you put a client island in it.  And you can pass server children to it with client islands in it.  And what happens is the server just renders everything in one pass in between.
[01:27:47] And then the client
[01:27:49] hydrate the pieces they need. It doesn't go like back and forth between client and server because the server is a continuous piece. It sees this full markup and renders  everything and then the client just picks up
[01:28:01] the pieces that it needs to pick up. So you can actually get really sophisticated layouts without sending. It's not like you hit an island and like suddenly the whole page is in JavaScript again. This is a common misconception.
[01:28:14] Um...
[01:28:15] where people are like, look, you know, I...
[01:28:18] Not to pick on anyone, but I've seen quick kind of like
[01:28:21] put that thing out there. If you author with islands properly,
[01:28:27] it does not mean that suddenly it's like now you just like deferred putting on the react app now  you have the whole app you know hit the island full app that's that's not really how it works  if you have the type of app that would benefit you generally should
[01:28:41] be very aware of like, say the Astro Island boundary. And it's,  you don't author your app the same way you'd author like a create react app or  next app.
[01:28:50] You don't just go, "Okay, now we're at the React app."
[01:28:53] Unless that's what you're trying to do.  But generally speaking, you get this benefit by...
[01:28:59] having the server load the data,  having the server load
[01:29:03] essentially, you know, render the data lists and then islands just getting the small pieces of data that they need. This is why you solve the double data problem because you don't need most of the data. You only need the data that you pass to the islands.
[01:29:18] And so drastically shrinks the double data, drastically shrinks the hydration cost.  And I don't know if I have it here yet.  At eBay, we were seeing this like an 84 percent increase.
[01:29:27] 80, 72, the worst one was 60 here, percent code reduction by using islands.
[01:29:34] Right?
[01:29:36] Thank you.
[01:29:37] Thank you.
[01:29:39] Thank you.
[01:29:39] Are we talking about Jamstack? No, we're talking MPAs versus single page apps, but I'm talking about the benefits, why people, basically at the start of, we talked about why MPAs suck and why SPAs are good. Then now we're talking about why SPAs suck and why MPAs are good.
[01:29:56] is the best way to put it.
[01:30:02] Right. There's been a real back and forth.  But yeah, I'm just...
[01:30:06] Yeah.
[01:30:15] Yeah, and MPAs with streaming is actually really, really, really good.
[01:30:20] Because if you think about it,
[01:30:23] We'll talk about that in a bit.  We're getting there, okay?
[01:30:28] Anyway
[01:30:31] MPAs,
[01:30:32] solve the JavaScript problem, hydration problem, that single page apps app. It's basically that simple.
[01:30:38] Islands is one way. Marco was having something like islands that were automated.
[01:30:43] Um,
[01:30:45] There's things like QUIC.
[01:30:47] like, presumability, which is this idea that instead of hydrating, we serialize the data
[01:30:53] And then, um,
[01:30:56] Just run as...
[01:30:58] run it from continue where we left off. Again, what does that do?
[01:31:03] Well,
[01:31:04] It lets us...
[01:31:06] reduce
[01:31:08] this time.
[01:31:09] Resumability shrinks that time.
[01:31:13] To basically...
[01:31:15] to almost nothing.
[01:31:18] Thank you.
[01:31:19] Thank you.
[01:31:21] So it is attractive because you can see in all of these, what Resumability does is actually move the green line to the next closest thing.
[01:31:28] Which means in some places...
[01:31:31] Um,
[01:31:33] it's actually more considerable,  especially for SSR'd apps with large amounts of hydration like this.  Client side, there's no resemblance to it, so forget that.  This one's streaming.  Streaming.
[01:31:44] Presumability has a benefit, still, but maybe slightly less because the
[01:31:49] the
[01:31:50] you get to start it soon.  But basically,  the zoom ability moves the last end down a little bit.  There's still some...
[01:31:59] Yeah.
[01:32:00] So.
[01:32:01] .
[01:32:02] Okay.
[01:32:03] Oh, dude.
[01:32:06] But
[01:32:08] So this will help with the hydration part as well.
[01:32:13] But there's also a trade-off on, some amount of trade-off on serialization and, uh,
[01:32:19] Thank you.
[01:32:19] you know,
[01:32:21] So the thing that I was going to mention here is that most quick apps today are actually MPAs still.
[01:32:26] because
[01:32:28] the way they do that really granular lazy loading and stuff,
[01:32:32] um,
[01:32:35] and code reduction. The second you're in a client-side app and you go to the next page  and you have to render it all in the client, suddenly you've got to pull all this code in.
[01:32:42] And
[01:32:44] which could be fine.  You could say now is when I need the code and I pull it in.  But generally speaking, I've seen that most quick apps that I've seen  have actually been MPAs rather than using the client routing  just to get...  Because most of the code on an initial page load,  you'd never need an...
[01:33:00] in the client anyways. So it's weird to go from something that has basically no JavaScript and no hydration cost
[01:33:07] Um,
[01:33:08] Thank you.
[01:33:09] to something that...
[01:33:12] um,
[01:33:14] Thank you.
[01:33:16] you know, suddenly needs all the JavaScript.
[01:33:18] Thank you.
[01:33:20] even for the static stuff.  So yeah,  it's interesting.  And the other thing I want to mention about resumability is like,
[01:33:26] Lazy loading aside,
[01:33:28] the total amount of JavaScript
[01:33:30] between resumability and islands might not actually be that different,  depending on how the islands are authored.  Because if, like, yes, if you do lazy loading...
[01:33:41] and you don't interact, then yes, you're saving shipping the JavaScript. But most of the time because you don't want to wait  shipping the JavaScript, you want to load it eagerly anyways and
[01:33:49] Um...
[01:33:51] you're probably going to load that JavaScript anyways.  Zero kilobytes isn't really a thing here.  So even if you start at zero, like islands,  you can lazy load islands. It's the same thing.  You just, realistically, you're not going to lazy load a lot of the stuff.  So I don't think the JavaScript size win is actually where resumability is  interesting. It's the execution.
[01:34:08] um, win.
[01:34:10] uh,  on the hydration.  But there's an interesting question of that.  If you eliminated say 80% of your hydration already,  um,
[01:34:18] How expensive is the last 20%?  Not sure.
[01:34:20] But
[01:34:22] Thank you.
[01:34:23] Okay.
[01:34:24] Thank you.
[01:34:26] We're not ready for this slide is what I'm going to say about this one. So
[01:34:34] I'm just...
[01:34:36] I'm going to... why can't I... where is it? I'm gonna get out of full screen here for a second.
[01:34:42] Um...
[01:34:43] and
[01:34:45] Up till now, this has been the conversation, right?
[01:34:51] we've
[01:34:53] We've kind of gone from MPAs to single page to people pushing MPAs again.  And to be fair, people on the single page side of the discussion are pushing back.
[01:35:03] Right?
[01:35:04] Thank you.
[01:35:08] Right. And there is a lot of
[01:35:12] Interesting...
[01:35:14] trade-offs and stuff here. Actually,
[01:35:16] My favorite talk about the trade-offs on like
[01:35:20] Is this Rich Harris talk?  So you think you know Wix.  Do you really?
[01:35:25] Just skip this ad.
[01:35:29] *music*
[01:35:35] - There's an active debate happening in front-end circles  about the right way to build websites.
[01:35:40] And like most front-end debates, both sides are really attacking a caricature over the other.  On the one hand, we've got advocates for what is often referred to as modern web development.  On the other hand, we have people who look at the state of modern web development  and argue that it's time for a bit of a come-to-Jesus moment about the path that we're on.
[01:35:55] For brevity, I'm going to call these camps the modernists and the traditionalists, but I don't want you to read any judgment into those terms.  It's kind of interesting because he...
[01:36:02] I feel like when Rich made this talk, his audience was like the people, not the JavaScript MPA people, but like the PHP MPA people.
[01:36:13] Right.
[01:36:14] And
[01:36:15] The thing is...
[01:36:18] - Thank you.
[01:36:19] Since then, we've seen the JavaScript MPA people kind of come back around.  My goal in this talk is to try and tease out some of the claims and counterclaims and present...  I'm trying to remember, there's something that I thought was pretty relevant here, because I think it's about here.
[01:36:35] Yeah, let's go.  ...of the browser's behavior in a way that's at best disorienting and at worst exclusionary to people with accessibility requirements.
[01:36:43] Normally on the web, if you middle click or command click a link, it will open in a new tab.
[01:36:48] On this food delivery website, that's ignored.  It will navigate in the current page instead.
[01:36:52] If you then click the back button, the layout will jump around for a bit before a nausea-inducing scroll back to where you were.
[01:36:58] There's lots of these little accessibility details that SPAs often get wrong.  Focus management, scroll management, navigation announcements, page titles, command click behaviour,  that collectively make the entire web a less predictable and less accessible medium.
[01:37:11] - Right, so he's talking about how basically
[01:37:14] single page apps.
[01:37:16] Um...
[01:37:17] aren't all good. So he's, he's adding actually another argument to this, um, talking about accessibility, um,
[01:37:24] Be fair.
[01:37:26] We shouldn't accept that. I picked real world examples, albeit more or less at random, because we need to reckon with the fact that single page apps have kind of ruined the web.
[01:37:36] So the backlash to modern web development is understandable, but it's important to remember that SPAs do in fact solve some real problems with the traditional approach.
[01:37:44] They also give you new capabilities. Here's something you can't do in a traditional app.  You can't navigate from one page to another while continuing to play media.
[01:37:52] In an SPA, that's extremely straightforward.
[01:37:55] Here's another. You can't use client-side state management that persists across navigations.  In this app, the first load contains a subset of my data. If I scroll, I load more.
[01:38:04] If I then click into one of these items, then click back, I should be at the same place in the list
[01:38:08] even though a fresh page load would exclude everything except the first trench of results
[01:38:13] This sort of thing is a little tricky to pull off in a single-page app.
[01:38:15] But it's essentially impossible in a multi-page app.
[01:38:18] Or consider transitions. Native app designers understand the importance of motion and object constancy in user interfaces, but on the web we tend to teleport instantly from one place to another, not because it's better, but because that's all browsers are capable of.
[01:38:32] In a single page app, we can change that.
[01:38:34] I should note that there's a proposal in the works to add navigation transitions
[01:38:37] to the platform and it often gets brought up in these conversations but
[01:38:41] Look, I'm glad that it's happening, but don't imagine for a moment that it'll be as powerful as single-page app trans...
[01:38:47] can be fun.  Okay.
[01:38:50] Actually, one more.  And something that very often gets overlooked whenever we talk about performance and JavaScript  bloat is that the main culprit isn't front-end frameworks, it's shitty ad tech and other  third-party JavaScripts.
[01:39:00] In a single-page app, you only had to load those lousy scripts once.  In a multi-page app, you had to load them for every single navigation.
[01:39:07] Even though the scripts are hopefully cached, you still have to evaluate them on every page load,  which gives them plenty of opportunity to block the main thread,
[01:39:14] and degrade the user experience.
[01:39:15] so let's look at some of the pros and cons of these two approaches side by side
[01:39:20] In particular, let's look at the MPA advantages.
[01:39:24] All right.
[01:39:24] This is a good list.
[01:39:26] I'm going to go back here. But you see the
[01:39:31] the conversation here.  He brought up some good back and forth here.  And then the rest of his talk,  he shows how...
[01:39:39] working with single-page apps can...
[01:39:42] address a lot of, you know,
[01:39:46] these shortcomings, essentially.
[01:39:50] Right.
[01:39:55] Side note, I'm not saying spas don't work great with quick.  I'm just saying that like...
[01:40:00] It's almost counterintuitive.
[01:40:17] Anyways, back to this whole MPA spot thing.  He brought up some really good points, and I think the interesting one for me is that
[01:40:26] is that
[01:40:28] And I think a lot of people get really focused on it.  He brought up three things.  He brought up...
[01:40:36] first that
[01:40:37] Uh...
[01:40:39] the video player.
[01:40:40] that doesn't persist, right?  So having persistent DOM element.  He brought up the, the third thing he brought up,  I think was the transition, which is similar idea,  where you move between pages,
[01:40:49] And
[01:40:50] kind of had that smooth feel of like having the same element.
[01:40:54] He brought up
[01:40:55] Uh...
[01:40:56] the scroll state...
[01:40:59] Um...
[01:41:00] in, you know, like, down, like,
[01:41:04] 25 things in an infinite scroll and then like how do you get back to that state when you click into something and navigate back?
[01:41:12] And
[01:41:14] The truth of the matter is,
[01:41:19] You can
[01:41:20] solve all those with an MPA.
[01:41:23] moving forward
[01:41:25] Perhaps.
[01:41:26] And that's what the View to Transition API talks about.
[01:41:30] But it's going to be, we need to look at the view transition API, I think, for a moment.
[01:41:36] to really, you know,
[01:41:38] understand
[01:41:39] what that looks like.
[01:41:41] Because this is where things start getting a little muddy.  Because on the single page app side, yes,
[01:41:47] Rich is right. You can have progressive enhancement to get help with resilience.
[01:41:52] Well, actually, let's see how...
[01:41:54] Typically poor initial page. Let's see actually, I want to see what he actually says to address some of this stuff. Yeah, yeah, yeah, yeah. He's talking about each point.
[01:42:03] Transitional apps being the best of both words.  Does he ever go back to that list again?
[01:42:09] I'm trying to remember, it's been a while since I watched this talk.
[01:42:12] Thank you.
[01:42:14] It's just that like...
[01:42:15] Okay.
[01:42:16] Thank you.
[01:42:21] I want to talk a little bit about what transitional apps look like in practice, particularly as it relates to Svelte.
[01:42:26] Okay, maybe I jumped too far.  Modernism and it turns out that the interior design community has thought about this.
[01:42:33] to describe all these various techniques.  So at the risk of being all XKCD97, maybe there's a new acronym that we could invent.  Okay, so-- Just how far you can push that-- Sorry, I went too far.  If you manually implement-- I'm going to get into this later--
[01:42:45] that shit might have sailed.
[01:42:47] I do need to take a moment to shout out to projects like Phoenix Live View, Stimulus Reflex and so on.  Okay, never mind.
[01:42:53] I won't worry about the specifics here, I think, on the rest of Rich's talk unless I can find it.
[01:43:00] There's...
[01:43:01] Thank you.
[01:43:04] Some people claim that you can get the benefits of single page apps without writing JavaScript.
[01:43:09] The thing in Rails circles at the moment is HTML over the wire or hotwire, which is a truly fantastic name.
[01:43:15] The idea is that the state and the rendering logic lives right.  And then he shows GitHub being really slow.  Let's say you go to your issues list and click on one of the unreads.
[01:43:22] You decide you don't want to deal with it right now,  so you back out.
[01:43:25] Hang on a minute, it's still got the blue and red marker. Refresh the page and it's fixed. Fine.
[01:43:30] Actually, let's close that issue.
[01:43:33] Hang on, we still have an open issue.
[01:43:35] or Dewey.  It turns out that when you send partial HTML updates,  instead of having the rendering logic and the state live  in the same place,
[01:43:42] You get inconsistencies everywhere.  Yeah.  I've seen PRs that have both the green open lozenge and the purple merged lozenge on the same page.
[01:43:50] It's incredibly disorder.
[01:43:51] Yeah, definitely.
[01:43:53] So he's talking about the problem with HTML partials.
[01:43:56] Okay, so he's still picking apart that. I thought there was an example here.
[01:44:00] Okay.
[01:44:01] you will end up serving data and component code that isn't strictly necessary.
[01:44:05] This is probably the least...  I think we're done with this part of the talk.  Okay, cool.
[01:44:17] Thank you.
[01:44:20] Yeah, yeah, for sure. And the, it's just, sorry aside, I like quick idea. We don't have to do MPS. So we actually use both at different places in our apps. Yeah. And I think all modern frameworks do this now to a certain degree, maybe not MPAs in a traditional sense, but they have their static pages. They just don't work as well. But I would say like, this is something that a lot of the MPA first frameworks like Astro as well, do quite well, because you can always have a page that is like a single page app and one that's not.
[01:44:47] But--
[01:44:53] Yeah, BF CAF solved the back pagination scroll problem.  Yeah, I think what we're getting at here is that there's a lot of different
[01:45:01] zones of these solutions,  um,  that,  uh,
[01:45:05] can solve these in slightly different ways.
[01:45:09] Thank you.
[01:45:10] I think this...
[01:45:13] We're about to get to the zone where hopefully you know what an MPA is and what a single page app is, because I think that it's...
[01:45:19] it's going to start blurring a bit is the best way to put it.
[01:45:27] - Yeah.
[01:45:28] Because let's talk about the view transition API a little bit.
[01:45:35] because I think the arguments are pretty strong on both sides.  Like...
[01:45:40] Until you get to that point you can see that there's like a split on use cases you can go like okay I
[01:45:46] MPAs
[01:45:47] are very good for places that need load performance, places that keep things simple, like content sites, but not great for apps.
[01:45:58] And then
[01:45:59] Um...
[01:46:00] single page apps are good for apps, but then they have these other characteristics that make them not good for say like e-commerce and the other stuff. So you can kind of see that, you know, apps, I, you know, what was it like something for sites, something for apps kind of split mentality.
[01:46:15] But...
[01:46:16] No one seems to be satisfied with that, which is why we're...
[01:46:21] were kind of like,
[01:46:24] in this zone here, so to speak.
[01:46:28] So...
[01:46:31] Heh.
[01:46:35] Client routing to me feels like trying to beat the Brassets own game.  Yeah, I mean, the thing is...
[01:46:41] But we want elements of that client routing.  Those three examples that Rich showed in his talk are actually very interesting.
[01:46:48] I feel like those are the ones that are on...
[01:46:51] people's heads, like persistent DOM element
[01:46:55] Uh...
[01:46:56] Yeah, it's actually two things, but it's two versions.  A persistent DOM element through navigation,
[01:47:02] through animation and persistent state.
[01:47:07] That being said, I don't think the list component is a good example of persistent state because
[01:47:13] Something like that is very, is relatively
[01:47:17] I mean, there's obviously caches, but it's also relatively doable.
[01:47:22] Even when you consider that if you basically use the URL,
[01:47:30] State?
[01:47:31] as a way of managing that
[01:47:33] uh
[01:47:35] you can solve these kind of pagination concerns as well.  Obviously infinite scroll is kind of
[01:47:43] a little bit
[01:47:44] more challenging, but it's not impossible to do.
[01:47:48] If you basically have a way to tell the server to render a certain range of stuff based on the
[01:47:54] infinite scroll. And then when the client hydrates or, you know, the interactive  piece hydrates, it's able to be like, Oh, okay. I know how to load above and below. Like
[01:48:03] You got it too, you know?
[01:48:08] Oh yeah, yeah. Hit like on the video. It helps.
[01:48:13] Thank you.
[01:48:14] Yeah.
[01:48:14] I can't wait to see the whole state in consistency problem resurface.  If it gets popular and people forget why tools like Reactable in the first place.
[01:48:20] Yeah...
[01:48:21] Yeah, yeah. I mean, that's real. I mean, I already showed it. There's a state inconsistency problem. There's the double authoring problem, double templating authoring problem, perhaps.
[01:48:33] They're...
[01:48:34] Yeah, I mean...
[01:48:35] Almost all the same issues. I mean, it's a little bit nicer this time around, but it's very similar things that got us to go to single page apps in the first place. But problems we over banked on single page apps. Like, let's face it, we
[01:48:47] We probably over indexed on it and it's good that we're having this reset.
[01:48:54] Okay, so
[01:48:58] Thank you.
[01:49:00] I'm actually got another Rich Harris talk.  Getting a little spicier.
[01:49:04] This is the first opinion that's probably going to make people yell at me when the recording of this goes on YouTube in a couple of weeks.
[01:49:11] NPAs are dead.
[01:49:15] So for those of you who aren't captives of web dev, Twitter, let me offer some definitions.  A multi-page app or MPA is what people used to call a website.
[01:49:23] It's an app where every page is rendered by the server.  And if you navigate between pages,  the browser will go back to the server,
[01:49:30] Retrieve some fresh HTML.
[01:49:33] Unload the current document and then create a new document from the new...
[01:49:36] Now, advocates of the multi-page app approach have made the following claims:
[01:49:40] NPAs are faster because you don't need to learn JavaScript.
[01:49:43] MPAs are more accessible.
[01:49:45] NPA is a less buggy.
[01:49:47] And MPAs can work without JavaScript.
[01:49:49] And in return, the single-page app cam says that SPAs are faster because even though you do need to load JavaScript, you're probably going to have to load some JavaScript anyway.  And this way, you only have to load your analytics or whatever once instead of...
[01:50:02] every single
[01:50:03] Page later.
[01:50:04] And subsequent navigations are certainly going to be faster, because it's much easier to smartly preload data, and you're not recreating the document from scratch on every navigation.
[01:50:13] SPAs allow you to preserve state between navigation,  such as the scroll position of the sidebar,
[01:50:19] or the video that's currently playing.
[01:50:21] In an SPA, navigation is just like,
[01:50:25] And SBAs give you a unified development model.  Instead of having one language for your HTML and...  Yeah, he's still talking classic.  The second...  Modern frameworks like Next and Rikacronos
[01:50:35] But this isn't why I'm...
[01:50:37] And they'll be quick to point out that this Turn Your Astro Hour
[01:50:40] into a single page app.
[01:50:42] In the words of Nate Moore, UI persistence has surfaced as a clear missing piece in the full Astro story.
[01:50:48] Client-side routing is currently the only way to achieve UI persistence across navigation.
[01:50:53] And I'll be quick to point out that this is opt-in, it's not the default, but here's what's going to happen.
[01:50:57] They're going to build this thing and they're going to knock it out of the park.
[01:51:00] And if it's a simple configuration change, then people will try it even if they don't need UI persistence.  And they'll discover that for the very small price,
[01:51:07] of a client-side group that their apps suddenly have a nicer user experience.
[01:51:11] I would not be surprised if the default was reversed in Asteroid 3 or 4.
[01:51:16] So on the Skelkid side, we need to find side
[01:51:19] Okay, so...
[01:51:21] I
[01:51:22] That was the comment that started this whole thing, the MPA is dead thing.
[01:51:28] Because
[01:51:29] I think...
[01:51:30] This is...
[01:51:31] where a lot of the
[01:51:33] back and forth kind of confusion is.
[01:51:36] Sorry, just checking chat here for a second.  What do we got here?  It's also the Kent C. Dodds article, "Web's Next Transition" that it compares MPAs, spas, and progressing enhanced versions each.  Obviously the collusion is used remix.
[01:51:45] Oh, yeah, yeah. That's actually the best thing about that article. Kent does a brilliant job. Can we share that in chat or something so people can see it?
[01:51:56] does a brilliant job of...
[01:51:59] Whatever. Next.
[01:52:00] transition...
[01:52:02] Uh...
[01:52:05] Pempa or something. I'm just gonna put that in. Or Pespa, yeah.
[01:52:09] The best thing about this article is all of these diagrams that he does.
[01:52:18] They...
[01:52:19] This article is just worth the read just to look at all of these diagrams. I have to admit
[01:52:26] Ken, I'm not convinced.  I don't think progressive enhancement is...
[01:52:29] that
[01:52:30] It's, how do you put it? It's important, but it's like a baseline functionality. It's not an architectural thing. It's like, it's like, it's, it's, it's being a good web citizen. It's, it's like accessibility. Um, I don't think it fundamentally changes the web architecture, but these diagrams are...
[01:52:49] just wonderful. So yeah, do check it out. Um,
[01:52:56] Thanks, Dev, for sharing it.  Yeah, okay, so...
[01:53:00] So
[01:53:04] I guess the question is,
[01:53:07] Getting to this point of...
[01:53:09] What is a single-page app?  And is what Astro doing...
[01:53:13] a single page app.
[01:53:16] Thank you.
[01:53:25] Well, I don't know.
[01:53:28] I mean, we know Astro classically is not a...
[01:53:33] Single page apps are not solid start. What do I want here?
[01:53:39] Um...
[01:53:41] Okay.
[01:53:43] Remember, we built a Hacker News demo
[01:53:47] Um,
[01:53:47] using Astro
[01:53:49] And I just updated the package versions. I was a little bit out of date here.
[01:53:54] But we built this on stream a long time ago with Fred.
[01:53:58] and
[01:54:00] We were very excited about the performance. What this is is...
[01:54:03] The classic Hacker News example, all Astro components except for one solid component that literally just hides and shows
[01:54:11] Um...
[01:54:12] the toggle but the comments actually get passed through
[01:54:16] recursively.
[01:54:17] See Astro.Self?
[01:54:19] through, so all the data, none of the data needs to ship  to the client, just a component that compresses stuff.  And you can see the compressing is just using like classes
[01:54:27] um and style blocks to compress stuff so it's actually very very simple very very small it  shows basically an astro app with a solid add-on i love using it like this the funny thing is
[01:54:40] I showed it a minute ago.
[01:54:42] So I'll start.
[01:54:43] I built...
[01:54:46] This app.
[01:54:47] in...
[01:54:48] Solid start as well. Where is it? Hacker News.
[01:54:52] And the funny thing is...
[01:54:55] Same thing again, right? You just got some components.
[01:54:59] There's a comments with the recursive, the toggle.
[01:55:01] And then.
[01:55:03] Inside the toggle, we have that same component I was showing a moment ago.
[01:55:10] The authoring experience between Astros...
[01:55:13] whatever they call it, it's not JSX but it's JSX, and solids
[01:55:18] is...
[01:55:19] basically
[01:55:21] Very, very, very, very, very comparable.
[01:55:24] Right?
[01:55:25] And
[01:55:27] But...
[01:55:28] That's why when Solid's Island's version, or...
[01:55:32] islands routing version is basically almost identical code between
[01:55:37] Astro and Solids version, just slight syntax differences.
[01:55:46] Well, you want to know why? Let's do a PMP, what are they? Dev. Let's do a dev here and I'll show you the classic.
[01:55:55] Hacker News example
[01:55:59] Alright, let me...
[01:56:01] bring this across and actually you know what
[01:56:03] we're probably gonna need to want to do this
[01:56:05] to an incognito window.
[01:56:09] Actually, we don't need the incognito window yet.
[01:56:12] Do I have it?
[01:56:16] It's like previous streams.
[01:56:22] Okay, doesn't matter.
[01:56:23] I'm just gonna pull this one into here for now. Okay.
[01:56:26] And
[01:56:28] The reason is when I go to this page that has 98 comments, see, watch the page reload.  See, this is an Astro app.
[01:56:36] We can compress these.
[01:56:38] recursively compress the EC.
[01:56:41] and
[01:56:43] The only JavaScript we need to send
[01:56:46] is
[01:56:46] just
[01:56:48] for these toggles. Everything's server rendered. You don't need like a next data for this or like,  we don't need to send all this data twice, like in the HTML not. You can just
[01:56:56] Toggle it.
[01:56:57] And it's recursive because we do that by passing...
[01:57:01] the comments into the toggle as children so they stay on the server. It's a connected
[01:57:05] way of doing it. Obviously recursive with the same component,
[01:57:09] is impressive for this demo, it looks cool.  But in general, this kind of embedding is very, very, very common pattern in server components, in islands, in React itself.  If you ever wondered about this,
[01:57:21] Dan Abramoff, I bring this one up a lot.
[01:57:24] when to memo or whatever.
[01:57:27] Before you memo, that's it.
[01:57:29] I always like this one because he shows a couple examples. It's like move state down.
[01:57:35] or lift content up. And lift content up, the reason he wrote this article is because you could tell he was very amused with himself when he got to the end. He was like,
[01:57:43] It's funny, this lift...
[01:57:45] Um,
[01:57:46] these techniques to improve React performance are the same techniques to get the best out of your smallest server components, like client component.
[01:57:54] bundles. And the thing is, he didn't need to use React.memo in any of this to improve the performance. It just structurally does it.
[01:58:02] by the way you reshuffled the state in your components.
[01:58:07] I love this article because...
[01:58:09] This is the technique that we tend to use
[01:58:12] Um,
[01:58:13] Today, when we look at
[01:58:16] Um...
[01:58:17] you know,
[01:58:18] Islands and server components. It's just interesting to me and this is something that I'm very conscious of is that I also use this a
[01:58:24] article as why I like  Solid's approach better because
[01:58:29] You don't have to worry about how you structure the components to decide this stuff.  Your performance profile doesn't change because you move state around or lift content up.
[01:58:39] Um--
[01:58:40] So like, instead of like,
[01:58:42] Like, as someone,
[01:58:43] trying to optimize your React code.  Like these kind of things just aren't the same consideration
[01:58:49] Whereas you--
[01:58:51] you know, like when you're a React developer, you should actually be aware of where your state sits in relation to re-renders.
[01:58:57] Anyway.
[01:59:08] So,
[01:59:09] I think
[01:59:13] I think this is interesting because...
[01:59:17] uh,
[01:59:20] We have an example.
[01:59:22] Let's see what...
[01:59:25] What's going on here? Well, I got I got a couple things for for this first of all I
[01:59:31] I grabbed
[01:59:33] the uh...
[01:59:35] What do you call it? I grabbed the...
[01:59:38] the spec for view transitions, because I'm kind of interested in view transitions.  And we're going to try Astro's view transitions today to see what they're all about.
[01:59:48] Okay.
[01:59:50] Blah, blah, blah.
[01:59:52] I've read this before. There's actually a Chrome team article. Let me see if I can pull this one up. Yeah, this is where I started at.
[02:00:00] And some of you probably have seen this.
[02:00:05] Thank you.
[02:00:05] And the thing that was interesting about this, these people should element transitions, is a great 203
[02:00:13] um,
[02:00:14] YouTube video podcast about this.  I remember watching this ages ago and I have to admit I wasn't too excited.
[02:00:22] Because...
[02:00:23] Well, I was excited because I was like, okay, finally I don't have solid transition group can go away or something.  Finally there's a native way to just handle these simple kind of flip things.
[02:00:34] animation type situations. But
[02:00:37] Uh...
[02:00:39] I wasn't
[02:00:42] How should I put it? I read it and I was working on MPAs with Marco and this whole thing,  everything was about single page apps because as it turns out the view transition API today
[02:00:54] is only, even back then when it was an origin trial,  was only available for single page apps, not MPAs.
[02:01:00] It's like, what? But why is all the MPA people talking about it? We'll get to that. Basically,
[02:01:06] The way it works is you would be like...
[02:01:10] Take a snapshot.
[02:01:12] change something
[02:01:14] here,
[02:01:15] And then,
[02:01:17] say you're done essentially by like,
[02:01:19] completing the work and then at the,
[02:01:22] Where is it? Where is he? Yeah.
[02:01:25] essentially
[02:01:27] It would take the previous state.
[02:01:29] ...
[02:01:30] That's wrapped and the and the next state.
[02:01:33] And see this is synchronous here.  And then it would just go like move between them.
[02:01:38] Thank you.
[02:01:40] So...
[02:01:41] You can see, like, okay, well...
[02:01:43] That's cool for animations.
[02:01:45] But like the first thing that I went to,
[02:01:46] like when I was scrolling through this document, I'm like, okay,  cause I've been building something called transitions to and solid, uh,  the kind of like reactive transactions. I'm like, how does this,
[02:01:55] help me with
[02:01:56] Async. Does this do anything cool with async? And I, so I was like going through all this, this stuff trying to figure it going out. Can I do anything with for MPAs?
[02:02:06] Um,
[02:02:07] And the answer at the time...
[02:02:09] Uh,
[02:02:10] As you can see, there wasn't actually much of an answer at the time.
[02:02:16] It's been updated a bit since.  And honestly, I probably just need to look at the better spec  layout, 'cause this is much more in detail.  So, sorry, I probably should have just shared  this one right away.
[02:02:31] Thank you.
[02:02:36] Right. So...
[02:02:38] So
[02:02:39] Thank you.
[02:02:40] Yeah, actually I don't even see it here.
[02:02:43] Oh, that's so funny.  I'm missing it.  I swore it was in this article I was looking at.  I was doing a bunch of like...
[02:02:51] Thank you.
[02:02:52] I was looking at a bunch of...
[02:02:55] stuff when I was, um...
[02:02:58] working, prepping for the conversation with Ben, and I actually found
[02:03:03] a place where
[02:03:05] They answered my
[02:03:06] my question about async.
[02:03:09] I'm actually not seeing it here, right?
[02:03:11] here, but essentially they basically showed an example that was
[02:03:15] async and they said like, don't do anything blocking in here. So like don't fetch data in async.
[02:03:21] So the way
[02:03:23] the view transitions work
[02:03:27] Um,
[02:03:28] for single page apps.
[02:03:30] is
[02:03:33] you should load all the data, do all the pre-work,
[02:03:38] for the most part ahead of time.  You can make it async, but then...
[02:03:42] after you've done all the work,
[02:03:44] like pre-work to know where you're going to,  then start the transitions and take the snapshot,  then do the DOM updates and then exit out.
[02:03:53] so
[02:03:54] This is an important distinction because the reason is if you just put an async function in here,
[02:04:01] Um.
[02:04:02] It would just freeze the page.
[02:04:04] Oh yeah, actually it's right here. Here it is.
[02:04:07] "The callback past the start view transition can return a promise, which allows for async DOM updates and waiting content to be ready. Sweet."
[02:04:12] transition will
[02:04:13] "Start until the promise fulfills. During this time the page is frozen, so delays here should be kept to a minimum.
[02:04:18] So this thing, network fetches should be done before calling start view transition.
[02:04:23] So
[02:04:24] Basically all the stuff that React and Solid do for like transitions and concurrent rendering, this does not touch. This is literally like after you've
[02:04:33] you know, rendered the next page, figured out
[02:04:36] all the data you need to load, do all your suspense stuff.
[02:04:41] Well, at that point,
[02:04:43] Take a snapshot.
[02:04:46] show the new page, and transition. So it is basically an animation technique.
[02:04:53] from a single page app.
[02:04:55] perspective.
[02:04:56] Which is nice because there's lots of things
[02:04:58] that are kind of these transitions that could use this from, you know, like list.  Like it doesn't have to be a navigation.  Like it doesn't have to be a router level.  But building something like this into a router is relatively simple.
[02:05:12] simple because you know when the
[02:05:14] you know when you're like,  especially with suspense and stuff,  you know when the transition's over.  So if you could just hook in
[02:05:19] right before it does the side effects.
[02:05:21] and go
[02:05:22] Chk.
[02:05:23] you know, snapshot.
[02:05:25] do the side effects,
[02:05:26] Run them synchronously.
[02:05:28] - Thank you.
[02:05:29] End.
[02:05:30] Then, um...
[02:05:32] essentially...
[02:05:33] you get this power.
[02:05:37] So this is my introduction to the view transitioning.
[02:05:41] This doesn't really help us for MPAs, does it?  Right?  Like this...
[02:05:45] I was coming in with my perspective.  So I was looking at the spec here,  and they have this MPA versus single-page app solution  because everything they talk about  is basically for the single-page app solution.  The APIs are generic,  but it's designed for client-side routing.
[02:06:00] And...
[02:06:02] MPA versus SPA... actually just refresh the page so I can get there.
[02:06:06] OK.
[02:06:07] Because I was already on it.
[02:06:09] The current spec and implementation in Chrome focus on single page app transitions. However, the model has also been designed to work with cross document navigations, which are covered here. Okay, we'll check that out.
[02:06:20] So then it'll say this, let's look at cross document
[02:06:23] transitions.
[02:06:25] They are an extension to same document transition, adding semantics necessary to display transitions with navigating cross documents.
[02:06:31] OK.
[02:06:31] the main explainer and blah blah blah.
[02:06:33] design for compiling the same document transitions
[02:06:36] Yeah, so you can have the same...
[02:06:40] Unlike same-origin transitions, cross-document transitions should work automatically without JavaScript intervention.  They should have the right CSS, blah, blah, blah.
[02:06:48] Cross-arriage are enabled for same-origin navigation as well across...
[02:06:51] OK.
[02:06:52] How does it work?
[02:06:53] Both the old and new documents need to be declared...
[02:06:56] simply opt into the transition between them. If both opted in and
[02:07:00] and at the same origin.
[02:07:02] .
[02:07:03] the state old document is captured using the same algorithm.
[02:07:06] When the new document is about to present the first frame, when the document is no longer  render-blocked or the course
[02:07:11] Well, this is probably why people don't read specs. Okay, but I understand what it's saying. Essentially what they're saying is
[02:07:22] Uh, let me look at, do I have an example of this?  I have the Astro Hacker News.  It's not the best example of this.
[02:07:30] Okay. If I...
[02:07:33] Try and load.
[02:07:35] a page with a lot of comments.
[02:07:37] for the first time, you're going to see that it stays here for a moment before it goes.  It doesn't go white immediately.  It actually holds the page, and then there's no white flicker.  And in fact, this header doesn't even, you can't even tell the page.
[02:07:51] that I'm changing pages, it's just this. And that's because the browser does this trick  anyways already where it holds
[02:07:59] the page until it's realized that the next page is rendered a significant amount or like has like
[02:08:04] has its first kind of paint, so to speak,  and then it swaps it.  So then you never get to see like the old white flicker,
[02:08:12] And yeah, I mean,
[02:08:14] I can tell you this because I went and checked the other day. I use this like websites like the Space Jam one like way back in the day.
[02:08:22] And
[02:08:24] I could tell you when I used to switch pages,
[02:08:26] I would feel it, right?  But this time, look, I click on it.
[02:08:30] Okay, okay, sorry, this is often a different domain. Bad example. The first one was a better example. The lineup. Let's click the lineup.
[02:08:38] It holds it until it shows it.
[02:08:41] you know, there's no elements that look similar so it's, you know, you can tell
[02:08:45] that but back in the day when you know 96 probably still on dial up you know you would you would click that
[02:08:54] And then see the page go white and the status bar updating and then the new page would load, you know.
[02:09:01] So,
[02:09:03] So,
[02:09:04] Why this is relevant is that when you combine stuff like streaming
[02:09:09] with,  um,
[02:09:11] with MPAs, with that kind of hold behavior that I was just showing.
[02:09:16] This example here doesn't stream, I don't think.  Yeah, I don't think...
[02:09:20] after I was out of order streaming.
[02:09:23] But like...
[02:09:25] you can see you would have the same experience where you could actually show the loading indicator
[02:09:30] on navigation and the bar shows up immediately.  So streaming,  sending the page back sooner really changed the perspective for MPAs.  And it's why Marco was,
[02:09:40] Um,
[02:09:41] push streaming so hard because between paint holding and streaming, um, it,
[02:09:46] Buell's
[02:09:47] much faster than waiting for all the content to load.
[02:09:51] And, uh,
[02:09:52] you get the loading indicators. It becomes much harder to tell. And that's without animations, or without this few
[02:09:58] transition APF. So it wasn't even that bad, but this seems like something
[02:10:02] interesting if we can get this, um,
[02:10:06] this kind of swap out for the cross dock.
[02:10:09] The thing that I'm not clear about on here is that
[02:10:15] the state that they capture
[02:10:17] is the DOM state of the elements, right?
[02:10:20] Right before the other is in the new one shown in the HL spec defined here.
[02:10:24] Yeah.
[02:10:26] I'm interested to see how they handle state.  Because...
[02:10:30] This...
[02:10:33] This in itself
[02:10:37] S-
[02:10:38] basically sounds like to me something very similar to
[02:10:44] This solves the first and third thing that Rich showed in his talk, right?  You could say, look, this video player...
[02:10:53] Let me see here. I could picture you saying like this,
[02:10:56] video player is the same video player
[02:10:58] Don't unload it.
[02:11:01] I can also picture you...
[02:11:04] Um...
[02:11:06] Being able to do that kind of animation transition.
[02:11:08] where you're saying like this element's this element and it can shift to it.
[02:11:12] Um...
[02:11:13] I'm less clear how state is preserved here.
[02:11:16] Anyways, this is the spec at where it is today. Astro probably has to work ahead of the spec because it's not even implemented. So what is Astro doing anyway? Let's take a look.
[02:11:27] They have a
[02:11:28] They have docs for this already, which is amazing.  View transition experimental.
[02:11:33] Support for opt-in per page view transitions in Astro Project can be enabled behind and experimental flags.
[02:11:38] Astro provides a view transition.  Okay, so that sounds really simple.
[02:11:45] Okay.
[02:11:45] Okay.
[02:11:47] First thing,
[02:11:48] let's get ourselves in a situation that we know what we're looking at. So what I'm going to do here
[02:11:53] is I'm going to
[02:11:55] Build.
[02:11:59] and preview this.  And we're going to look at...
[02:12:03] This I did it again.
[02:12:07] Sorry, here. And I'm going to open a new incognito window.
[02:12:14] And we're going to open local of 3000 here.
[02:12:16] Beautiful. Because I want to see what the... This is just the current MPA...
[02:12:21] version of it.
[02:12:23] Yeah, and you notice, first thing, there's no JavaScript on this page because guess what?
[02:12:27] You don't need any JavaScript for this page.
[02:12:30] There's nothing interactive here. Everything is a link that navigates. So you click the next one. Now we get some JavaScript.
[02:12:36] where this doesn't look like it's G-Zipped.
[02:12:39] These sizes are too big.
[02:12:43] It requests gzip, but I don't think it gets back gzip. Okay, that's fine.
[02:12:47] That's fine, that's fine.  The deployed version does.  The deployed version of this app, last I checked,  was about 4.7 kilobytes of JavaScript.
[02:12:56] So it's 10.6 here, so it's a little less than half.
[02:13:01] so to speak.  So, um...
[02:13:05] Yeah, and this just gives us our toggle. But I mean, for anyone who's been watching my stream long enough, you know that 4.7 kilobytes of GZIP JavaScript for this page is a significantly less than, say, the 74 kilobytes for Remix or the, you know,
[02:13:22] 80 some odd kilobytes for Next.js and Next.13 app directory.  So like...
[02:13:28] Um...
[02:13:29] or Noxt or what like
[02:13:32] Even Solid Start and SvelteKit come in at about 15 kilobytes and 18 kilobytes, respectively, on this page.
[02:13:40] So,
[02:13:42] As I said, about four, let's say five kilobytes, we're just like half it is much, much smaller.  Um...
[02:13:50] So.
[02:13:51] That's cool.
[02:13:52] I know this...
[02:13:55] I'm,
[02:13:56] like picking at pennies here, but I just want to see the impact. So we have a good build environment. So how do we add these view transition APIs things here?
[02:14:06] Okay, enabling views in your project, experimental view transition, APS.
[02:14:09] Has anyone played with this yet?
[02:14:11] I'm just curious.
[02:14:14] Thank you.
[02:14:19] Thank you.
[02:14:21] Yeah.
[02:14:29] Is that it? Am I done? Probably not. Let's just...
[02:14:32] Do this.
[02:14:34] Thank you.
[02:14:35] Thank you.
[02:14:40] Thank you.
[02:14:42] No, okay. So I think I read that already. I need to add
[02:14:47] I need to opt in somehow. I need to add the
[02:14:49] you transition
[02:14:51] Full site view, transit, and spawn mode.  Import to common head.
[02:14:55] Transition directive allowance. Okay, let's just
[02:14:58] They call this spa mode. Okay.
[02:15:01] Okay, so let's go.
[02:15:03] view transition
[02:15:06] And we go into our layout component.
[02:15:09] Thank you.
[02:15:12] Add it. Let's just add a view.
[02:15:15] Transition.
[02:15:21] um
[02:15:24] preview
[02:15:27] All right.
[02:15:29] Thank you.
[02:15:30] *sigh*
[02:15:33] Uh, uh, uh, okay.
[02:15:36] I think we got something different here.
[02:15:38] Ha ha ha.
[02:15:39] Oh, okay.
[02:15:40] That's cool.
[02:15:41] See? No more this.
[02:15:44] Thank you.
[02:15:47] Go to our 90 comments.
[02:15:49] I don't know if you can see it.  And then the rest of our JavaScript loads again.
[02:15:54] Ah, so it adds about... see this hoisted thing? So it adds about 5 kilobytes of JavaScript, unminified obviously, for the router.
[02:16:04] Thank you.
[02:16:06] Okay.
[02:16:07] That's actually really similar to how solids
[02:16:10] solid starts app routers. I only know the gzipped values, but it added, what was it like in that demo? It added like two
[02:16:18] two kilobytes or so. So,
[02:16:21] Interesting.
[02:16:22] The difference between...
[02:16:25] using the view transition API to do this,
[02:16:27] and to do
[02:16:29] This is very...
[02:16:31] Okay, so it's in the same ballpark.
[02:16:32] - The President: Thank you.
[02:16:33] I guess eventually their hope is to use the MPA version and not have any JavaScript for it.
[02:16:39] But...
[02:16:40] Thank you.
[02:16:41] I wonder if they...
[02:16:42] Yeah, we won't know until the MPA version goes, but right now this is what it does, which I think is cool.
[02:16:48] I think Rich is right in the sense that I would just turn this on.
[02:16:52] Right?
[02:16:53] This is cool.
[02:16:55] Thank you.
[02:16:55] Thank you.
[02:17:00] I like the animation effect too.
[02:17:03] I know it's like so subtle, they're just doing a fade.
[02:17:06] Did they?
[02:17:07] I didn't have to do anything special here. Did they?
[02:17:10] Thank you.
[02:17:11] I wonder...
[02:17:12] There's no persistent elements here.  They don't seem to have marked...
[02:17:16] the HTML at all. Let me look at the network call.
[02:17:20] Like, I don't see any...  I was...
[02:17:23] Let me look.
[02:17:24] Let me read this.
[02:17:30] Okay.
[02:17:35] Thank you.
[02:17:37] Astro will automatically assign corresponding elements found in both the old page and the new page to a shared, unique, view transition name. This pair of matching elements is inferred by both types since location in the DOM.
[02:17:47] Use optional transition directives on page.
[02:17:50] Okay.
[02:17:52] Interesting.
[02:17:54] I don't know if it auto detected
[02:17:56] It sounds like what they're doing is they're using their build process to
[02:18:01] to...
[02:18:03] to do these optimizations instead of you handwriting them.  Because I think, I'm not going to lie, one of the things I was concerned about
[02:18:08] with this kind of approach is that
[02:18:10] like it's very manual if you're going around like tagging everything
[02:18:14] Right.
[02:18:15] Um...
[02:18:17] Like, oh...
[02:18:18] like this element has this ID, like after you get
[02:18:21] through like 120 of these
[02:18:23] because of shared layouts and stuff, you might like...
[02:18:27] start getting in a weird place but if astro handles the base case for you automatically
[02:18:32] That's interesting.  Let me see here.
[02:18:35] I don't...
[02:18:36] Let's see, this header is always in there.  Do they have to do anything?  I wonder how this works.  I might actually have to have Nate
[02:18:42] or Matthew come on and talk to me about this stuff.  I just wanted to...
[02:18:46] to look at this and get a feel for it today. And, uh,
[02:18:51] Huh.
[02:18:52] You can... Oh...
[02:18:54] Oh, that's...
[02:18:57] What's going on?
[02:19:00] Wait.
[02:19:02] You see the whole document?
[02:19:04] Okay.
[02:19:05] What's going on here?
[02:19:12] Yeah, I have like nothing to switch where I can stay on the same page easily, but I'm just...
[02:19:17] Okay, okay, let's inspect here.
[02:19:21] So I'm going to nab it out.
[02:19:23] Okay, like this.
[02:19:25] And then I'm going to go to another page that has the same header.
[02:19:31] Huh.
[02:19:32] Thank you.
[02:19:34] Interesting. I almost want to see the paint repainting.
[02:19:39] It's...
[02:19:40] I mean, it's possible that it's just
[02:19:42] completely swapping everything out.
[02:19:44] um,
[02:19:45] I mean, that's cool that the browser handles this for you already. Because this makes you think there's a different approach to this than I've been thinking about where you could use compiler-optimized hints to the browser and then use the browser to do the diffing. It's interesting.
[02:20:06] Yeah, I mean I'm just looking around a bit, but it's like I
[02:20:09] Um...
[02:20:11] Thank you.
[02:20:14] Not that one I wanted.
[02:20:18] I'm
[02:20:22] Rendering?
[02:20:29] Yeah, yeah, yeah, yeah, okay.
[02:20:31] See this?
[02:20:33] Okay.
[02:20:39] Oh.
[02:20:40] I'm loading the death
[02:20:41] test page, oops.
[02:20:43] Don't do that.
[02:20:49] Okay.
[02:20:54] Yeah, about 5 kilobytes for the...
[02:20:56] Solid code in the rudder.
[02:20:57] So yeah, this, yeah, so the router here. Yeah. Anyway, I, I just, it's just funny.  Cause this is very similar idea. This is the,
[02:21:04] This is the...
[02:21:05] the solid version not using the view transition API. It doesn't have the smoothness, but it does the same. I just want to understand
[02:21:14] Maybe we can test the header being the same.  Just a second.  I want to...
[02:21:19] First, let's go... Was it rendering?
[02:21:22] paint flashing. So when I switch this,
[02:21:25] Yeah.
[02:21:25] the header
[02:21:27] doesn't
[02:21:28] Repaint.
[02:21:33] Okay.
[02:21:34] So,
[02:21:35] Can we tell Astro not to repaint the header?
[02:21:40] 'cause this whole header element
[02:21:43] basically never gets done. So let's
[02:21:47] It's funny because what I'm realizing, thinking about this right now, which is kind of cool, is because it is the actual same component, I only actually have to write it once. It's not like me matching something up.
[02:21:56] So like, can I do something?  I mean, this isn't, to be fair,  this is like experimental beta type stuff.  They probably, yeah, exactly.  So this is not ready yet, but.
[02:22:03] You know, I like pushing it, they know that. Let's go transition name
[02:22:12] Because you see for me, it's not about the animations. It's the preservation, right? Because I want to say...
[02:22:17] header
[02:22:18] Can I do this?
[02:22:20] And then...
[02:22:21] build.
[02:22:24] preview.
[02:22:26] And because they're on both...
[02:22:28] pages served
[02:22:31] We refresh.
[02:22:39] Body
[02:22:42] Thank you.
[02:22:45] It might just be the way the browser handles it.
[02:22:49] Because it looks like it's doing something, but...
[02:22:53] Huh.
[02:22:54] Okay, well...
[02:22:56] Lots to learn still about the view transition 8.
[02:23:00] AVI
[02:23:01] Do I have to turn anything on in my browser or does Chrome just support it? I just really haven't played with this stuff.
[02:23:12] I bet you Marco could do something amazing with this blah blah blah because it's a super compiler, yes, probably.
[02:23:18] Yeah.
[02:23:24] I gotta say though, for such a simple mechanism, I'm impressed. Like this is just... it's just one of those things where like...
[02:23:30] Actually,
[02:23:32] You know what?
[02:23:33] We can do this.
[02:23:35] Okay, screw this.
[02:23:36] Let's...
[02:23:37] Git or head element. I'm just curious.
[02:23:42] Okay.
[02:23:42] Dollar sign zero.
[02:23:45] $0
[02:23:46] diet.
[02:23:49] Let's see if I can do something.
[02:23:50] Garbage.
[02:23:52] equals hello
[02:23:54] Like, does it keep the exact same element?  Like, I'm just...
[02:23:58] and I go to page two.
[02:24:03] I'm just... I'm just...
[02:24:05] interested
[02:24:08] So I got header.
[02:24:13] $0.
[02:24:15] thought underscore underscore underscore
[02:24:17] Garbage.
[02:24:18] don't because hello I'm not garbage is
[02:24:21] Okay.
[02:24:24] All right.
[02:24:24] It was worth a shot.
[02:24:26] Okay. So,
[02:24:29] Okay.
[02:24:30] Thank you.
[02:24:36] Yeah, I'm using Chrome on...
[02:24:41] Yeah, there's a can I use, thanks.
[02:24:43] Anthony, let me see if I can look at this.
[02:24:57] Yeah, it won't let me turn into an incognito.
[02:24:59] I
[02:25:00] Since 111, so I'm probably okay...
[02:25:18] Hmm.
[02:25:18] Okay, well...
[02:25:20] Well, while we're here, like...
[02:25:22] Can we open this up in Firefox and see what Firefox does?
[02:25:27] What does it look like when you--
[02:25:29] when you don't
[02:25:30] It's like I've never used Firefox before.
[02:25:34] That's not true. I was just testing Firefox the other day, which is probably why it did this. I probably updated it like
[02:25:40] a bunch of virgins in the background while I was testing some
[02:25:44] funny issue around lazy image loading in Firefox with clone node.
[02:25:48] Something--
[02:25:51] I'll probably talk about it on stream one day.  Let's see here.  Local host...
[02:25:57] 3,000.
[02:26:06] Okay.
[02:26:07] It does client-side routing though.
[02:26:09] It doesn't like transition, but it looks like the islands demo.
[02:26:15] Cool.  So...
[02:26:17] they have a they basically have a full page diffing thing I mean I'm not  surprised the the diff that we use was written by the Astro guys by name more so  I'm stoked because I've been encouraged I've been very interested in seeing where  they're gonna take this so this this is at its heart
[02:26:35] Um...
[02:26:38] sort of
[02:26:39] Turbolinks type technology with the addition of
[02:26:45] of uh
[02:26:48] view transition API as a way to do these transitions.
[02:26:53] I guess it's going to be interesting.  You launch this now and then hope that the MPA one catches up.  And if it doesn't, you just...
[02:26:59] I think that's the conversation that's happening.  I think the Astro folks are intending to eventually just...
[02:27:04] use this with MPA transitions.
[02:27:07] Um...
[02:27:08] And then right now they can ship like a--
[02:27:12] couple kilobyte router and do it.
[02:27:16] Thank you.
[02:27:16] I like this though.
[02:27:19] Because...
[02:27:20] This is what...
[02:27:21] I was kind of getting at about six months ago.
[02:27:26] Especially for the basic cases here and stuff like
[02:27:33] This...
[02:27:34] is the baseline.
[02:27:38] basically the JavaScript you need for interactivity
[02:27:41] Plus...
[02:27:42] a couple kilobyte router.
[02:27:48] Yeah, 10 kilobytes.
[02:27:50] That's the baseline.
[02:27:54] Thank you.
[02:27:56] I think. I mean, this is less than that.  This is, you know...
[02:28:00] This is...
[02:28:01] What...
[02:28:03] network.
[02:28:04] I think we already --
[02:28:06] This is like...
[02:28:08] Um,
[02:28:09] Yeah, but I mean, it's not fair.  I got to put something interactive on the page.  Let's go to here.
[02:28:15] Because you need the client-side interactivity.  Counting from zero is pointless, as we talked about before.  So basically...
[02:28:23] minus
[02:28:25] this toggle
[02:28:27] piece here. So like one
[02:28:29] one kilobyte.
[02:28:31] Maybe not even. So like,
[02:28:34] Essentially...
[02:28:37] - Thank you.
[02:28:38] 14 kilobytes
[02:28:40] Not gzip so gzip that up. We're talking six or seven kilobytes and
[02:28:45] Um,
[02:28:47] That's pretty sweet.
[02:28:49] Right.
[02:28:49] I guess that's the--
[02:28:51] Yes.
[02:28:51] This one's gonna, this one doesn't have the diffing engine. So yeah, this, yeah, six or seven. So yeah, under 10 kilobytes is the baseline for this sort of HTML transitioning.
[02:29:01] Um...
[02:29:02] technology. It's funny because these two demos are very very very different.
[02:29:06] Um,
[02:29:07] in how they're implemented.
[02:29:10] You get...
[02:29:12] Um,
[02:29:13] Maybe they're not actually as different as I think they are.
[02:29:17] Right. This one does partials where this one doesn't.
[02:29:20] But...
[02:29:22] Yeah.
[02:29:25] This is interesting to me.
[02:29:29] Alright, how are we doing stream?
[02:29:35] Thank you.
[02:29:35] Does it replace that at all?  I mean, it's hard to see because it looks like...
[02:29:43] the whole thing, like if I expand head and then, sorry, wrong one. If I expand head,
[02:29:49] and go to a different page,
[02:29:53] Thank you.
[02:29:56] Thank you.
[02:29:57] it's possible that there's like a zoning thing.  Like,
[02:30:00] You know how I'm probably doing this wrong. See how I have everything in the same document?
[02:30:05] And then I put the view transition like
[02:30:08] Um,
[02:30:13] Like, I wonder if...
[02:30:15] It's scoped.
[02:30:17] somehow
[02:30:18] To like...
[02:30:23] Where it is.
[02:30:25] That's my hunch.
[02:30:27] I feel like...
[02:30:29] It's not quite doing what I'm expecting, but even regardless of that, I think the promise here is this.  This is the baseline.  People were talking about server component type stuff, and I was like, within a year,  it's stuff that's kind of like server components, but going to give you 10x smaller than what you get out of Next.js.  I was suggesting stuff like Solid's Islands, but I knew Astra would also...
[02:30:54] would also be in the same boat.
[02:30:56] We're going to see more solutions like this.
[02:31:00] This doesn't solve...
[02:31:03] The app.
[02:31:04] .
[02:31:05] Like, of the initial problems that we talked about,
[02:31:08] So far,
[02:31:09] the base solution solves
[02:31:12] the animation
[02:31:14] And the persistence of dominant elements.  I don't know how it handles state.  I know the Astro guys are working on that.
[02:31:22] But I think there's...
[02:31:25] I think there's some interesting...
[02:31:27] considerations with state that make it much, much more complicated.
[02:31:32] Because, I mean, going back to ASP.NET and the view state serialization scenario,
[02:31:38] Thank you.
[02:31:40] This is a question.
[02:31:42] of
[02:31:43] Who owns the state?
[02:31:45] I went in big detail earlier about .NET and how they serialize it back and forth and the update panels, because I wanted to understand what we wanted to avoid.
[02:31:55] One of the things...
[02:31:56] Um,
[02:31:57] that makes
[02:31:59] solutions that don't treat it like a full page reload. Because like, sorry, let me go back here. Watch. If I go here, the head's not going to move.
[02:32:06] in the solid example, and the same will be in the React Server Components example.
[02:32:10] because in fact,
[02:32:12] the header...
[02:32:14] won't.
[02:32:14] Move.
[02:32:17] because it's using nested routing.
[02:32:19] Um...
[02:32:21] is that
[02:32:25] Sorry, where was I going with this? Sorry.
[02:32:30] The state ends up in...
[02:32:33] these kind of RSC type models.
[02:32:35] in the client.
[02:32:37] And the server...  Basically, there's a difference between static data and stateful data.  And we don't send it back and forth a bunch.  Basically, state stays in the client.  That's why context only works in the client.  And the server...
[02:32:54] basically sends back
[02:32:56] the equivalent of what would be JSON except it's HTML, right? Or JSX or whatever. But it's not stateful. It's not interactive stuff. The interactive stuff is always kept in the client and part of that client tree.
[02:33:10] So like...
[02:33:11] Thank you.
[02:33:12] It's going to be interesting to see how this progresses because from
[02:33:16] from, uh...
[02:33:18] you know this kind of thing if you go okay now i'm gonna persist this state
[02:33:21] What does that mean going across client and server boundaries back and forth?
[02:33:27] That means you're serializing it both ways?
[02:33:30] Is there a difference between...
[02:33:33] like where this if the state gets persisted in the client components versus the server components
[02:33:38] I think client persistence makes a ton of sense. I think server persistence does not.
[02:33:44] but it'll be interesting to see. Luckily, Astro knows where all the islands are, so they can do that.
[02:33:49] So I think that's the gist of it.  As long as they have a way of keeping
[02:33:54] the
[02:33:55] Island instances attached to some kind of ID they should be able to diff in a very similar way. In fact,
[02:34:00] I wouldn't be surprised if our solutions are very similar.  Um...
[02:34:04] between solid and astro on... or solid start and astro in that. Okay.
[02:34:11] So,
[02:34:12] looping back around a bit.
[02:34:19] - The President and the President, the President,
[02:34:31] Thank you.
[02:34:33] Okay, before I loop back around, I saw a question. Let's answer the question. Did you touch on the topic of PWAs? What do you create offline? I have not.
[02:34:43] - Thank you.
[02:34:44] I...
[02:34:45] I don't know if it makes a huge difference for either...
[02:34:47] Because you can always, with a PWA, have a bunch of...
[02:34:52] pages that
[02:34:54] The biggest thing is you need, if you want the pages that,
[02:34:59] the server pages to be like dynamic.
[02:35:02] in the PWA...
[02:35:03] then you need something rendering it in the service worker or the router.  I've seen some like trisomorphic setups where people have like a server renderer, worker renderer, and then the client rendering.  But like the challenge, like basically having a bunch of static pages, like
[02:35:21] an MPA style you'd think or like even like a
[02:35:24] SSG style thing with a PWA is pretty easy.  It's the dynamic stuff,  which at that point...
[02:35:31] if you want to be offline first kind of mentality,  then you need to be able to do stuff in the client.
[02:35:36] primarily so
[02:35:38] it's almost on the opposite end of the spectrum.  Like,
[02:35:40] if pre-rendering a bunch of pages for,  and using kind of like an app shell-ish approach for PWA is fine.  Um,
[02:35:49] you know,  something that's kind of,
[02:35:50] Like...
[02:35:51] has multiple pages and
[02:35:53] But I think like,
[02:35:55] it comes down to where the
[02:35:57] data is coming from.  Like you...
[02:35:59] you basically need
[02:36:01] if you have any kind of live data that you're keeping locally,  you need a way of like re-rendering the page with that data,  which means you're kind of client rendering.  So it means like the MPA benefits...
[02:36:12] Biggest thing is probably portability.  That's why people have been talking about like...
[02:36:16] the way that React server components, like separate them into separate endpoints and like you can combine them.  You could maybe have a worker do part of the rendering, have like build time do part of the rendering, have Edge do part of the rendering.  Then this kind of becomes interesting if you have a single model for that.
[02:36:34] Um, but it's interesting because like, like,
[02:36:37] what's the client and what's the server, so to speak?  Is that...
[02:36:39] even like the right mentality.  I think we're still figuring out...
[02:36:43] what qualities that have,  um,
[02:36:46] Because it's not as simple as just like worker dollar sign.  Like worker dollar sign is fine, kind of like a server function.  It's like it's good to run this code in this location,  but actually to declaratively stitch this stuff together  in a way that's consistent and makes sense  takes more than worker dollar sign.
[02:37:04] Does Astros feel like props or islands because then they can diff that way and have the islands maintain their internal state? Yes.
[02:37:09] Yes, yes, and yes.
[02:37:12] And that's exactly how we solve this problem.
[02:37:17] with our version as well.  We serialize it, and then when we pass in the new props.  So assuming...
[02:37:23] there's a way to persist on an MPA transition, the internal state of the components, then you're fine.
[02:37:34] Yes. Yeah. I mean,
[02:37:36] I don't know if we'll be able to see it.
[02:37:40] The serialization I probably not inspect.
[02:37:47] I want to see the...
[02:37:49] Not that one, I gotta find one with the toggle.
[02:37:55] Yeah, here, see, props, empty object. Because there are no props.
[02:38:00] That's why there's no data serialization as an example, but see right there, props.
[02:38:04] Thank you.
[02:38:06] So...
[02:38:08] Yeah.
[02:38:10] As long as it can keep the internal state, this should work the very similar way. Yeah, it's funny the
[02:38:16] The more interesting part about this is that, like...
[02:38:21] What does it mean for the rest of the system?  Because in a sense...
[02:38:24] the diffing side...
[02:38:28] Um...
[02:38:29] It's probably going to be similar between what we're doing like the view transition
[02:38:34] API part doesn't actually
[02:38:37] for the pure like
[02:38:38] Uh...
[02:38:39] Island
[02:38:40] preservation as much as it matters for like,
[02:38:44] obviously the animations and it matters for
[02:38:48] The being able to say this element is this element, which is the
[02:38:51] like,
[02:38:52] mechanism for that is
[02:38:56] in an MPA world, but otherwise like the fallback or the client side version is
[02:39:00] very, very, very similar.
[02:39:04] Mmm...
[02:39:06] But...
[02:39:08] Whoa.
[02:39:09] Thuria. I lost where I was going there.
[02:39:14] Thank you.
[02:39:15] *chewing*
[02:39:19] report.
[02:39:21] *sips*
[02:39:23] Good.
[02:39:25] I'm still unclear how the internal state is preserved, but if we...
[02:39:29] If we can figure that out...
[02:39:31] Um, maybe there's no answer to that just yet, but I, I,
[02:39:35] I think
[02:39:36] Yeah.
[02:39:38] then you have the pieces.
[02:39:44] Okay.
[02:39:46] Okay.
[02:39:48] So is this a single page... where I was trying to go to is, is this a single page app or is this an MPA? An MPA. Yes. Yeah. Which is... Yeah, sorry. This is where I was trying to get to is...
[02:39:59] is that
[02:40:00] The difference is
[02:40:04] what happens...
[02:40:05] the HTML generation to get to this point.
[02:40:08] Right.
[02:40:14] I think one of the complexities with components...
[02:40:17] is
[02:40:18] If there is state...
[02:40:21] in client components
[02:40:23] Any future...
[02:40:25] And this is something we have to worry about with RSCs and Solids' approach too, is any future server rendering...
[02:40:32] won't have that state unless you send it all back in the request. So like
[02:40:36] It's the classic problem if you have a counter in a context provider.
[02:40:41] or like in some kind of component, and you click it,
[02:40:44] Um...
[02:40:46] You know, it's a shared state problem, right? And you click it like 10 times. And then they said if the count's bigger than 10, show this stuff or don't show this stuff, right?
[02:40:57] Um,
[02:40:58] If you go back,
[02:41:00] to the server and render it again
[02:41:03] it's not going to know that the thing is click 10 times and that it's 10.  It's going to have the initial value of zero, which means it'll render something.  And then it won't match the state that's there.  So the way that we solve this in RSCs and in what we're working on is that you don't  render client components after the initial navigation.
[02:41:20] And I think...
[02:41:23] That's where the state preservation challenge comes in, because essentially,
[02:41:30] - Ch-
[02:41:30] trying to diff that becomes a combination of server and client-side rendering.
[02:41:36] before
[02:41:37] You swap the page in.
[02:41:40] So it'll be interesting to see how the Vue Transition API manages that, especially for MPAs.
[02:41:47] For single page apps, as long as you have the right hooks,
[02:41:50] like what they're doing here, I can see how you could do that.  I think it's much more interesting that you basically have to control, like the render holding won't be sufficient.
[02:42:00] Um...
[02:42:01] I think.
[02:42:03] You actually have to
[02:42:04] like wait until you also client render
[02:42:07] or client diff.
[02:42:09] the existing stuff.
[02:42:10] Thank you.
[02:42:12] Yeah, honestly, this is...
[02:42:15] This is fun because how do you access to the old document when you try and do that?
[02:42:21] Huh.
[02:42:24] Yeah, I'm looking forward to see how Astro solves it with this sort of approach.
[02:42:30] The one thing that a lot that we've been doing with our HTML approach and the RC's have been doing is doing these partials and
[02:42:37] and
[02:42:38] preserving most of it, which means both not just on the server or client we save work, not doing a bunch of the diffs, we actually have the potential of rendering less on the server. So we don't treat the next
[02:42:48] render is the same sort of thing.  It's a special...
[02:42:51] render. It's not just a normal page re-render. We actually control what gets sent over the  wire. It's not... and that's much more complicated, admittedly, but it actually
[02:43:01] manages these kind of complicated problems
[02:43:04] Um,
[02:43:06] But yeah, the reason that I'm getting back to this is
[02:43:10] if you listen to me,
[02:43:12] this whole RSC
[02:43:15] Astro Island...
[02:43:17] you know, this solid islands router thing.
[02:43:21] all actually share a lot of
[02:43:23] qualities of MPAs in which you view stuff as a page being rendered and
[02:43:28] And...
[02:43:30] as a mental model and
[02:43:32] basically getting kind of swapped in, even though it's client routed, so to speak.
[02:43:37] It is...
[02:43:40] Um, it is...
[02:43:42] It is still...
[02:43:44] A server...
[02:43:45] first rendered app. It's an interesting
[02:43:49] situation though because the state is kind of owned by the client and
[02:43:53] it's server rendered, and it's client routed.
[02:43:56] Like...
[02:43:57] Those three things...
[02:44:00] are
[02:44:01] I, I, or, or where this differs than say, okay, did I,
[02:44:08] Yeah, I closed my Excalibur down earlier.
[02:44:12] Because, like, I'm just...
[02:44:14] What did I say the three things were?
[02:44:18] rendered
[02:44:19] Render.
[02:44:20] Where?
[02:44:21] you
[02:44:21] state
[02:44:22] Where
[02:44:28] Um...
[02:44:31] router where
[02:44:33] Right.
[02:44:34] Thank you.
[02:44:41] Give myself a little bit more space here.
[02:44:44] - Thank you.
[02:44:44] So like thinking about in those terms,
[02:44:51] Thank you.
[02:44:52] Well.
[02:44:53] Yes.
[02:44:54] Sp...
[02:44:54] Ba is pretty...
[02:44:56] Easy.
[02:45:00] After initial load,
[02:45:02] It's...
[02:45:04] client
[02:45:06] Thank you.
[02:45:08] It's client client client, right?
[02:45:17] And this is true whether you SSR the spa or not.
[02:45:23] MPA
[02:45:26] Thank you.
[02:45:32] Thank you.
[02:45:36] Thank you.
[02:45:38] server routing.
[02:45:40] server rendering.
[02:45:42] - Thank you.
[02:45:43] The state might live on the client, but it goes away. So there's no, like the preservation,
[02:45:49] Like if you want something to be stateful, it has to live
[02:45:52] on the server for the most part.
[02:46:01] Thank you.
[02:46:06] Thank you.
[02:46:11] Thank you.
[02:46:14] And then,
[02:46:15] Whatever this is,
[02:46:19] I don't know what to call this.
[02:46:21] Thank you.
[02:46:24] This is like...
[02:46:26] Thank you.
[02:46:31] Thank you.
[02:46:31] Thank you.
[02:46:32] What is this? This is like...
[02:46:35] I'm gonna say hybrid.  Like, I think it's fundamentally different in this way.
[02:46:45] Like, I don't know if Astro...
[02:46:49] Thank you.
[02:46:53] Like...
[02:46:55] Maybe there's four categories here.
[02:46:57] Like, maybe this is just a combinatorics problem.
[02:47:01] Sorry.
[02:47:03] Like maybe...
[02:47:04] Maybe there's one that's like this.
[02:47:10] Right?
[02:47:16] Thank you.
[02:47:17] Thank you.
[02:47:21] Thank you.
[02:47:23] I hate calling them SCs, but...
[02:47:26] Thank you.
[02:47:30] Does this look right?
[02:47:36] Thank you.
[02:47:38] Thank you.
[02:47:39] Yeah.
[02:47:41] How's it going, Theo?
[02:47:42] I'm just boring people with talking about...  We got to that point where we did the Astro demo and...
[02:47:51] It looks great, by the way, but
[02:47:53] It still leaves us with lots of questions. I took my my Hacker News demo and added a
[02:47:59] Astro's transitions, but then I was watching, I decided to look at the paint flashing
[02:48:04] and the HTML remaking to understand what the view transition is doing for them versus a solid starts version of that's very similar to server components, which
[02:48:14] Again...
[02:48:15] when I move around here.
[02:48:17] this stuff doesn't move. It's only diff-- even the header doesn't move. It's only diffing
[02:48:23] This part, I think.
[02:48:26] If I go...
[02:48:27] Yeah.
[02:48:28] So just kind of comparing some of the differences, although as the experience here is still very smooth, the paint flashing,
[02:48:36] Doesn't make it feel as nice, but...
[02:48:40] You know, he can see.
[02:48:48] What is SEs? Server components. I didn't know what to call them. This looks familiar. Okay, fine, Dev. I will open up your...
[02:48:56] Your link.
[02:49:09] You're right.
[02:49:11] yeah
[02:49:13] Okay. Okay. Okay. Yeah. Livewire is, is, is, is, is, I like that you included livewire here. Let me pull this over just so people know what I'm talking about.
[02:49:25] Ah.
[02:49:29] See?
[02:49:30] This is very similar to
[02:49:33] what I was...
[02:49:36] It's like my window management is crap right now, sorry.
[02:49:42] Okay.
[02:49:44] Let's get this in here.
[02:49:45] Yeah, this is very similar to what I was getting at. Where's my Scala Draw? Yeah.
[02:49:51] *laughs*
[02:49:52] Yeah, it's almost the same idea.  Because Livewire is...
[02:49:56] Hmm.
[02:49:56] Most of the rendering
[02:49:59] Well, LiveWire is interesting, yeah, because it diffs. So it is like that. Most of the rendering happens on the server. State lives on the server.
[02:50:07] Mm-hmm.
[02:50:08] The routing...
[02:50:10] Thank you.
[02:50:11] Is the routing client?
[02:50:13] Thank you.
[02:50:13] I think Livewire...
[02:50:16] Like it doesn't have to, like it's usually-- like it doesn't have to.  It can sit on either.
[02:50:20] of these
[02:50:21] But...
[02:50:22] Um...
[02:50:25] Yeah, I don't know if there's any other...
[02:50:27] combinations here
[02:50:30] Because I don't think--
[02:50:31] You'd ever have state...
[02:50:34] on the client with server router and server router
[02:50:40] That doesn't make any sense. These are incremental.
[02:50:44] Generally speaking, I mean...
[02:50:46] Maybe Astro is trying to make a new category.
[02:50:54] I don't know. I feel like the Astro solution is either going to fall into one of these two.  I called it server components. I don't know what to call this. I've been calling this hybrid.
[02:51:02] But it is different than TurboLynx is what I'm getting at.
[02:51:06] So,
[02:51:07] Anyway.
[02:51:17] Yeah, Livewire HTMX.
[02:51:21] Yeah, I've talked about HTMX.
[02:51:26] a few times earlier in the stream.
[02:51:32] .
[02:51:36] But yeah, I don't know. I probably leave this diagram here.
[02:51:39] But yeah, I mean, this kind of goes back to what I was talking about earlier, where
[02:51:44] Um,
[02:51:50] Shhh.
[02:51:55] This is from one of my things before, but I was saying that this is for client routing.
[02:52:01] Um...
[02:52:06] So like, obviously we just talked about turbo,
[02:52:10] And yeah, I called it hybrid routing.
[02:52:13] And I was mentioning that you can mix hybrid routing with nested routing.
[02:52:16] - Thank you.
[02:52:16] I love this remix thing. I actually stole this from their homepage.
[02:52:20] watching how each part of the section of the page works.  That's why in that example I was just showing,  it was very easy to swap out the sections  without adjusting the HTML.
[02:52:29] This is the trick that they use in Next App Writer.  It's what I showed in that solid example.
[02:52:34] so like
[02:52:36] It's interesting, that's why I put these kind of in the same category even though one's using HTML and one is not.
[02:52:42] Because like...
[02:52:44] Sorry.
[02:52:45] Like,
[02:52:50] -
[02:52:51] the rest of the talk doesn't really matter,  but it's just that you can see...
[02:52:55] that
[02:52:56] the intention. Yeah. I thought there was more left, but I think we covered it all. Um, you can  see that the intention here is to basically server render parts of the page. And like,
[02:53:13] Yeah, what do you got here?
[02:53:14] Even rendering is confusing with server component does.
[02:53:17] rendering referred to the running the components in the JSX output or taking the JSX output and putting into the HTML. I'm talking render the
[02:53:25] The diffing part is not what I'm considering the rendering.  I'm considering the rendering like the thing that constructs the...
[02:53:31] the markup tree
[02:53:34] representation. Because even the JSX that they send isn't, to my understanding, it's not actual
[02:53:41] JSX like it's it's more like V Dom
[02:53:45] nodes.
[02:53:46] Right?  Like, it's like, it's the realized output of the rendering.  It's not the, like, it's easier to say it's the JSX, but it's a rendered output.
[02:53:54] tree representation that's been serialized.
[02:53:57] And while it's serialized, too, whether it's HTML, whether it's some JSON object, you know.
[02:54:02] potatoes, potatoes, whatever. So from that perspective,
[02:54:07] Yeah, I'm talking about the thing that actually goes through and combines the data with data.
[02:54:12] the...
[02:54:13] view hierarchy.
[02:54:15] that point of merging is what I'm calling the rendering now.  And we got to think React for that, because traditionally,  rendering meant paint, like in the--
[02:54:23] in the like Dom sense, you know, like when you see it.
[02:54:31] Yeah, on Twitch, yeah, I should be RyanSolid.
[02:54:34] Yeah.
[02:54:36] Yeah, no, it's just Ryan Solid on Twitch, yeah.
[02:54:39] Maybe it's Ryan's Solid 9 or something.
[02:54:41] No, it's just RyanSolid. Yeah, never mind. Just RyanSolid.
[02:54:45] Thank you.
[02:54:46] Okay, so...
[02:54:51] I don't know, do we kind of got to the end of that content? Um,
[02:54:57] I think...
[02:54:59] As I said before, I think this is the...
[02:55:02] the baseline, um...
[02:55:04] Now, when looking at
[02:55:06] this is that there is potentially this new thing that is different
[02:55:12] It's more than just
[02:55:14] adding client routing to MPAs.  Like, there's certain...
[02:55:18] criteria that needs to be passed to kind of get the full benefit.
[02:55:23] Um,
[02:55:24] I hate that we have like
[02:55:27] four things now you know
[02:55:29] We were talking single-page app versus multi-page app,  and now we're talking about all this stuff.  But, like...
[02:55:35] Um...
[02:55:37] Yeah, thus is web dev, so to speak.
[02:55:47] Well, I mean,
[02:55:48] - Oh.
[02:55:50] Thank you.
[02:55:53] Like SCs fall into this final category.  Astro, for the most part, is an MPA.  Yeah.
[02:56:00] I think today you could say that it's like a...
[02:56:03] client-routed MPA.
[02:56:05] Like the question that we've been having so far is what's the difference between a single page app and
[02:56:11] this because they are okay, but let's go into this a bit because the MPA crowd is willing to say that like I
[02:56:18] Oh, these are single page apps.
[02:56:20] Because...
[02:56:21] like, whether they server render doesn't really matter.
[02:56:27] you know, they still have a client router,
[02:56:30] and they still treat state, not static data, not stuff you pull from the database, but stateful stuff as a client consideration.
[02:56:39] But whether...
[02:56:41] like Astros...
[02:56:42] current view transition thing that we're looking at here, you know, which is
[02:56:48] It's just...
[02:56:49] is kind of right now fancy Turbolinks.
[02:56:52] Which is...
[02:56:53] Fine.
[02:56:54] But...
[02:56:56] if they go to the next step and start preserving the islands,
[02:57:00] And if...
[02:57:02] even if they drop the spa mode and they can do that with an MPA
[02:57:07] The only difference is going to be how much work you do on the server to get to that point.
[02:57:12] And whether you're using the browsers inbuilt way of doing it or building a
[02:57:18] our own. And that's the hedge that React and even Solid is taking right now is that
[02:57:22] if...
[02:57:24] we control...
[02:57:27] Like...
[02:57:28] If we control the routing pieces, we can optimize what the server does.  Like we don't have to re-render the whole page.
[02:57:35] We can do partials.
[02:57:36] Which is an interesting thing, because at the beginning of Rich's talk we went over, he was criticizing partials.  But the solution to solving partials is actually really quite simple.
[02:57:45] It's remix came up, kind of popularized it.  Navigation in partials, mutation,
[02:57:52] does full page reloads.
[02:57:55] That's basically the solution, but it's not a full page reload when you have one of these client routers. It's just a
[02:58:01] You know?
[02:58:02] It's just one of these.
[02:58:05] So
[02:58:08] Yeah, I think...
[02:58:12] that
[02:58:17] It's quite possible that to get the right DX that we want out of what Astro is doing,
[02:58:24] and get it optimal
[02:58:26] that mechanically
[02:58:30] the fact that it's MP or single page app might not matter anymore.
[02:58:33] That's sort of what I'm getting at.
[02:58:37] Thank you.
[02:58:39] Thank you.
[02:58:40] But,
[02:58:41] What does matter...
[02:58:44] I think is because like I don't have it here because I don't have enough dimensions is the the
[02:58:48] people who want the state to belong on the server.
[02:58:57] Because the one trend...
[02:58:59] that is clear here
[02:59:03] It's not about the routing.  Everybody keeps on focusing on the routing, right?  They're like the richest talk.  So a framework that doesn't serve JavaScript.  Whatever.  Where was it?  The...
[02:59:11] I think we already...
[02:59:13] MPAs are dead or whatever, everyone was focusing on the routing, right?
[02:59:17] And
[02:59:18] The thing is...
[02:59:21] I think everyone wants the client routing. Maybe
[02:59:24] if
[02:59:25] you know, the MPA version can let us rely more on the browser.
[02:59:31] But...
[02:59:31] Obviously,
[02:59:33] You still need some JavaScript.
[02:59:35] So it's not like a zero JavaScript thing.  And we saw in this router...
[02:59:39] Like,
[02:59:40] Thank you.
[02:59:41] It's, it's freaking, it's 4.9 kilobytes minified. That's not even g-zipped. It's like two kilobytes add-on, right?
[02:59:48] Um...
[02:59:50] So like
[02:59:53] Yeah, like we're not we're not suffering the world for this. And as
[02:59:58] you know, Rich was saying,
[03:00:00] In this talk, where was it?
[03:00:02] Where is it?
[03:00:03] Do do do do do do do do.
[03:00:09] the client-side router, their apps suddenly have a nicer user experience.  I would not be surprised if the default was reversed in Astro 3 or 4.
[03:00:16] So, you know.
[03:00:20] Thank you.
[03:00:21] Thank you.
[03:00:22] Bye.
[03:00:24] Well...
[03:00:25] Yeah, I mean, the thing is, there's going to be...
[03:00:29] Something in this zone that actually wants the state to live on the server  The the live wires the world. I honestly don't know where htmx fits into this and
[03:00:40] I think HTMX is like a fun fantasy that we're going on right now.  You know, people need a vacation.
[03:00:46] Um...
[03:00:48] But like...
[03:00:51] there, there, there,
[03:00:54] Think about it, Rich highlighted at the beginning of the first talk I showed with him is that
[03:00:59] He was very much concerned with the modernists and the traditionalists, so to speak.
[03:01:04] on the website.
[03:01:06] And I said that over the last couple of years,
[03:01:09] the traditionalists, not the traditionalists, but there's been MPA favoring people on the JavaScript side. I mean, this started years ago.
[03:01:15] with Marco or whatnot, but like
[03:01:19] There's been a group of people that champion it, not because they're traditionalists, but because...
[03:01:25] they want the performance. We are getting to a point here
[03:01:28] where...
[03:01:30] Thank you.
[03:01:31] The JavaScript side is...
[03:01:33] combining
[03:01:36] and what will be on the other side
[03:01:38] is...
[03:01:40] that server stuff, the blazers and the
[03:01:44] live views of the world, if that's a viable model. I don't know.
[03:01:49] I think the more interesting part is
[03:01:51] why, say, the Astros of the world, or even the Solids of the world, are so intent on saying, "No, React, you're over there. You're not part of the game."  Because, like, to be fair, I'm actually pretty supportive of React in general. And I think it comes down to
[03:02:06] that baseline. It's not about zero kilobytes of JavaScript.
[03:02:11] Um, and
[03:02:12] Right. We've been over that.
[03:02:14] It's just that like...
[03:02:17] there is a certain overhead
[03:02:20] that
[03:02:21] is being kind of tied to the React side of things.  And I think we're gonna see, you know,  starting with this Astro example,  which I think is impressive enough that we're gonna see people just doing this  all over the place where they'll be like, look,
[03:02:34] I built this app in Next and it's 200 kilobytes. I built it in Astro and it's 10 kilobytes.
[03:02:40] Which is not fair.
[03:02:43] because that's probably not the type of site you would build in next.
[03:02:46] But it's like, it's essentially, and I'm even talking RSCs in this case, maybe 200 is a little exaggeration, maybe it's like.
[03:02:54] 100. But 10 to 100
[03:02:57] is 10x difference and when you make a 10x difference that's when people start noticing.
[03:03:02] I think that's a silly arbitrary measure, but that is when people pay attention when it's 10x.
[03:03:10] Thank you.
[03:03:11] Thank you.
[03:03:12] Thank you.
[03:03:20] Yes, I am using Astro 10. There's a new state that keeps state. State persist. Ooh.
[03:03:24] Persist UI and view.  Okay, let me take a look at that one.  We can maybe play...
[03:03:29] Play with our example here for a second.
[03:03:37] Thank you.
[03:03:44] Apparently I've been giving you all the good quotes.  Make your fantasy come true by re-writing your apps to H2X's, Ryan.
[03:03:54] This is a better quote.  HTNX is like going on vacation.  I'll stand by that one.
[03:04:03] Uh...
[03:04:05] Sorry, yeah
[03:04:06] Yeah, I'm using 210.
[03:04:10] Thank you.
[03:04:11] Thank you.
[03:04:15] Okay, so I thought it was the name.
[03:04:18] Oh, does this only work in...
[03:04:20] No, it doesn't. This is what I was looking for.
[03:04:25] So I can just go persist.
[03:04:28] Thank you.
[03:04:29] Alright, alright, alright.
[03:04:30] This is what I was looking for.
[03:04:32] I think.
[03:04:33] We've now persisted the header. All right.
[03:04:37] - Thank you.
[03:04:39] Let's flip.
[03:04:40] Thank you.
[03:04:43] Let's turn on our paint flashing.
[03:04:45] Thank you.
[03:04:47] Okay, it doesn't affect that.  Okay, let's go to...
[03:04:52] body and see that
[03:04:53] that the astral persist.
[03:04:58] Okay.
[03:04:59] That might not be... it might always do that flicker thing on the painting. Let's...
[03:05:04] get our dollar sign
[03:05:06] Console.
[03:05:08] Thank you.
[03:05:09] $0 is in fact a header header, and let's put some garbage on it.
[03:05:23] Let's navigate.
[03:05:25] Let's find our element again.
[03:05:33] That's all. $0 is in fact a header header.
[03:05:37] and garbage, garbage.
[03:05:41] Thank you.
[03:05:42] All right.
[03:05:45] It works.
[03:05:46] Okay, so the paint flickering is one thing, but it does persist.
[03:05:51] It does use the same element.
[03:05:55] Very cool.
[03:06:00] Okay.
[03:06:04] Hmm...
[03:06:14] I have so many questions there on how it actually
[03:06:21] Thank you.
[03:06:22] keeps track of its references, but I think that's fine.
[03:06:27] If you keep the same...
[03:06:29] Element that's all it needs. It doesn't need any other references.
[03:06:32] So this just works.  The JavaScript code that's sitting in there,  that's referencing it, like the rendered component...
[03:06:38] it will essentially...
[03:06:42] know that it's the same, like as long as it has the same element, it, the, actually like the code ran once the hydrate or update or whatever, it's going to have references to the DOM elements.
[03:06:51] as long as they stay there,
[03:06:53] when you come back,
[03:06:54] And they stay in the same shape.
[03:06:56] you know, so to speak, like as long as the server isn't messing with it,
[03:07:03] which they won't because you're persisting in, presumably, all its children.
[03:07:08] then
[03:07:11] Yeah, this just works.
[03:07:14] Very cool.
[03:07:15] Thank you.
[03:07:18] Okay, that's awesome.
[03:07:25] Okay.
[03:07:26] Thank you.
[03:07:27] Yeah, that'll do it.
[03:07:33] Yeah, I'm gonna need to spend some time to dig into how this one works.
[03:07:39] Because like...
[03:07:45] Yeah.
[03:07:48] Yeah, yeah, yeah. I'm wondering if it's still using
[03:07:52] a diffing
[03:07:53] algorithm under the hood.
[03:07:56] Like it is still using
[03:07:59] Um,
[03:08:00] Nate's library, right? Because this is what we do in, what is it, Solid Movies app?
[03:08:06] If you go to the...
[03:08:07] Go here.
[03:08:09] If I inspect here,
[03:08:12] Go to the input.
[03:08:14] Source
[03:08:15] console
[03:08:16] $0
[03:08:18] Dot.
[03:08:19] underscore underscore
[03:08:20] Something.
[03:08:21] equals hello
[03:08:25] It's good.
[03:08:26] Thank you.
[03:08:27] Does this one do that? Oh. This one swaps, but yeah, it never unmounts this one.
[03:08:32] We actually had an example where it did
[03:08:34] But this is this actually is perfectly fine.
[03:08:38] This one will be the same because it doesn't even unmount it. Okay, so this isn't a good example.
[03:08:42] Um...
[03:08:48] - -
[03:08:49] Mutation on notes might be a good example.
[03:08:53] Notes out.
[03:08:55] I don't know where it's deployed. Never mind. I'm just curious. This is cool. I'm going to need to understand how this works.
[03:09:02] If it's--
[03:09:04] If it's something they're doing, imagine they're using Nate's diffing.
[03:09:15] Yeah, it must be diffed by their library. This hoist.js must include it. It has to include
[03:09:22] Uh...
[03:09:25] It must include Nate's
[03:09:26] Library
[03:09:28] - Hello!
[03:09:31] - Yeah, I love you.
[03:09:34] Woo!
[03:09:38] Maybe not.
[03:09:40] Thank you.
[03:09:48] Mm-hmm.
[03:09:52] Thank you.
[03:09:54] *whistling*
[03:09:56] Yeah.
[03:09:57] I'm gonna have to look into this because this piece is actually interesting to me. If there's a potential to save
[03:10:05] the diff engine somehow and have the browser do it, that is
[03:10:09] That is very interesting.
[03:10:18] Thank you.
[03:10:20] No!
[03:10:22] Yeah, so what do you think the quick micro frontrunners have static parts in cash stream? They found something different.
[03:10:29] Yeah, no, I mean, they're definitely focusing on that use case, which is really good. You can tell this is the same area that like Next13 is focusing, working a ton on getting like partials of server component caches. So they're working very fast.
[03:10:42] like off that end to get, you know, was it dynamic at the speed of static? Um, so, uh, yeah, I think,
[03:10:50] I think that's a good problem-spaced
[03:10:53] to
[03:10:54] get into for last level optimization, which is, as I said, very important for people who have a lot of static content. It hasn't been an area that I focus too much on. I'm still working on the mechanics of it. Like, I think having client routing that doesn't load all the JavaScript.
[03:11:07] is
[03:11:08] Thank you.
[03:11:09] more core and then talk about catching later. But I do know that there's definitely interested parties in this.
[03:11:17] You guys are great. You literally like have all the links.
[03:11:20] Sorry, I'm just, I asked for like the notes app example.
[03:11:25] And
[03:11:27] Thank you.
[03:11:28] And they get it.
[03:11:31] All right.
[03:11:33] Thank you.
[03:11:37] Alright, so let's try this again. Inspect.
[03:11:51] - The first time I was in the hospital, I was in the hospital.
[03:11:52] I'm just... this is probably my own interest source.
[03:12:00] No, console?
[03:12:01] $0
[03:12:05] garbage.
[03:12:07] Mama!
[03:12:08] equals
[03:12:09] Hello.
[03:12:10] I'm going to go.
[03:12:14] Okay.
[03:12:15] And then let's go and edit a different note, maybe this one.
[03:12:27] Actually, let's do something to change it. Just some note, exclamation mark.
[03:12:32] And then push done.
[03:12:35] which presumably refresh this whole sidebar.
[03:12:39] And then inspect.
[03:12:45] I'm as curious as all you are about this because, maybe more curious because
[03:12:53] - Uh.
[03:12:58] 'Cause...
[03:12:59] Nikhil has a lot of secrets.
[03:13:01] Um...
[03:13:02] Okay, yeah, so that works, yeah, yeah.
[03:13:04] Okay, yeah, just...
[03:13:06] So I do have an example showing DOM diffing.
[03:13:08] Um, okay, that's fine.
[03:13:10] just...
[03:13:11] This is a hot space.  Let's say that much.
[03:13:26] Yeah, but I wonder if they're more costly than server-rendered single-page apps. That's what I'm comparing against. Client-side rendered apps have limitations, and it's not really comparing apples to oranges, so to speak. But server-rendered single-page apps is a more interesting comparison.
[03:13:50] Yeah.
[03:13:52] Bye.
[03:13:54] Yeah, the truth of the matter is...
[03:13:57] There's gonna be...
[03:14:00] I don't care what your app is. It's probably going to be like, unless it's like a real toy app,  there's going to be like 20, 30 kilobytes of JavaScript.
[03:14:06] That's going to load.
[03:14:07] Regardless.
[03:14:08] And...
[03:14:09] That's the way it's going to be.
[03:14:11] You know, I'm not going to
[03:14:13] I'm not worried about micromanaging the rest of it.
[03:14:16] I'm not, you know, like...
[03:14:18] Not worried about zero.
[03:14:20] I think though, when you focus on performance and you think about this stuff and you go, look,
[03:14:25] The framework's going to take 10 kilobytes of that.
[03:14:28] you know, the, you, like, it's about giving you room to work on stuff so that you don't
[03:14:35] You don't have like.
[03:14:37] *sigh*
[03:14:39] what happens in these server component type setups is, on one hand, you can say like, "Oh, yeah, yeah,
[03:14:45] It's less JavaScript. We've got to win. It's good enough anyways.  But on the other hand, it puts a huge spotlight
[03:14:50] on like
[03:14:51] The differences, like something now, you know, for people who care about
[03:14:56] you know, armchair racing or whatever, the difference in performance is that much more obvious. Like,
[03:15:02] Like...
[03:15:03] If you took an app,
[03:15:05] That was...
[03:15:06] 500 kilobytes.
[03:15:08] in a framework, okay? Like React, okay?
[03:15:11] That's what code splitting does.  The main page is 500 kilobytes.
[03:15:13] You got some other crap in there, whatever.
[03:15:15] It's got a lot of components, whatever.
[03:15:18] then
[03:15:21] You made the same app.
[03:15:23] in something small.
[03:15:25] Preact, let's say.
[03:15:29] And as it turns out, the components are about the same size.
[03:15:32] So...
[03:15:33] 44 minus 4.  So 48.
[03:15:36] Now it's 440, but you also use some Preact libraries instead of React libraries, so you can kill the bloat a bit.
[03:15:42] and
[03:15:44] Let's say your 500 kilobyte page is now...
[03:15:47] 380 kilobyte page in Preact. Okay.
[03:15:56] Okay.
[03:15:58] Does that make a big difference?
[03:15:59] Yeah.
[03:16:00] Maybe.
[03:16:03] But now you you do server components and
[03:16:09] And that 500 kiloby page now is
[03:16:16] 200 kilobytes or 190 kilobytes
[03:16:19] In next.
[03:16:22] and you do the same thing into something small,
[03:16:25] but also the smaller server component thing.  So let's pretend something like solids router solution or what we've seen here with Astro.
[03:16:31] And
[03:16:34] You know, you first go, okay, well, the difference in size is the difference between 10 kilobytes  and about 80, 90, let's say.
[03:16:43] 80 kilobytes difference.
[03:16:44] And then you're like...
[03:16:46] So the 200 become 120, but then you also have some smaller libraries.
[03:16:52] You end up with 80...
[03:16:55] 70, let's say we end up with 70 kilobytes.
[03:16:57] Thank you.
[03:17:01] The difference between 70 kilobytes and 200 kilobytes
[03:17:05] fuels
[03:17:07] to the eye and maybe not in reality,
[03:17:09] Thank you.
[03:17:09] a lot bigger than the difference between 380 kilobytes and 500 kilobytes.
[03:17:17] Because...
[03:17:18] - Yes.
[03:17:19] You might even save more kilobytes by using Preact instead of React on that larger app.
[03:17:25] But...
[03:17:27] you start looking at
[03:17:30] 70 into 20.
[03:17:31] it's three times smaller. Like you start doing that and to be fair, that's not what matters.
[03:17:39] It's probably a lesser difference.
[03:17:42] But in your head, you look at it and you're like...
[03:17:44] it's three times smaller.
[03:17:48] So I think that's why this is kind of interesting when people look at the stuff for performance.
[03:18:04] So...
[03:18:06] Yeah, I...
[03:18:08] This is sort of the...
[03:18:12] Yeah.
[03:18:13] the kind of scale here we're talking about, where I think...
[03:18:18] people making silly toy demos and everything. Like, it's a... seeing Astro do this is really cool as a baseline. They still have a lot to work through probably.
[03:18:29] in terms of what I was talking about before about context and what renders on the server and the client and how to do that. But the basics look great and I'm pretty excited to see where this goes.
[03:18:41] All right.
[03:18:42] Thank you.
[03:18:44] Yeah, anyways.
[03:18:45] I think that was it for this MPA versus SPA,  unless anyone has more questions about it.  Basically, I think,
[03:18:52] as I said before, JS, frameworks,
[03:18:55] consolidating into a single space for the most part, even like if the MPA way persists, works better and is lower in weight, for anyone who's not VDOM, they're just going to use that instead.
[03:19:10] and essentially...
[03:19:14] You know what I mean?  That's all that's going to happen here.  It's going to be hidden behind a compiler that marks stuff or whatever in the same way that we mark...
[03:19:25] other things, you know, like islands. So I feel like
[03:19:30] the details there.
[03:19:33] are just gonna go between whatever is faster as long as
[03:19:36] the system is based around HTML. I think it's interesting to have a system not based around HTML, when you start thinking about, you know, mobile platforms, perhaps. But it's interesting that there has been a lot of work on, you know, stuff on the mobile
[03:19:49] and like Universal Sight the...
[03:19:52] get closer to web APIs anyways, stuff like Tori. So it's like,
[03:19:57] Thank you.
[03:19:57] I mean, I don't know.  We're going to have to see, obviously.  But I think it's...
[03:20:02] I think that
[03:20:05] at a certain point,
[03:20:07] this argument, I mean we already knew this, kind of doesn't really matter. The mechanics of it is going to get washed into a very similar
[03:20:16] development experience because as I showed you here, the difference between the Astro
[03:20:22] Persistent Island version.
[03:20:24] And...
[03:20:25] - Yeah.
[03:20:26] the solid start
[03:20:29] Persistent Islands version or whatever, you know,
[03:20:34] I mean, I'm basically writing the same JSX on both of them.
[03:20:39] We're not we're not that worlds apart.
[03:20:42] So...
[03:20:43] Yeah.
[03:20:45] All right.
[03:20:48] But we are not done for today because we still have this week in JavaScript. Let's get that going here in a minute.
[03:20:54] Thank you.
[03:20:55] Thank you.
[03:20:57] Um...
[03:21:00] I'm just going to just hide up my screen here for a minute.
[03:21:15] Okay.
[03:21:18] Thank you.
[03:21:23] - The first time we have been talking about the
[03:21:23] And getting all the Twitter windows open.
[03:21:27] Thank you.
[03:21:36] Obviously, we already talked about what I considered the big topic here.  It's why I was...
[03:21:44] very interested in talking about this in the first place.
[03:21:48] was this MPA spa thing and how many people can put videos out about that this week?
[03:21:54] Thank you.
[03:21:55] But, uh...
[03:21:57] - Thank you.
[03:21:58] Let's see here.
[03:22:01] Sorry, just give me one moment.
[03:22:02] Okay, I got my profile.
[03:22:10] It's been a few weeks, which is nice, so...
[03:22:13] Um,
[03:22:13] There's actually some stuff to talk about.
[03:22:18] Although probably never as much as I'd like to.
[03:22:20] But that's okay.
[03:22:21] I'm sorry.
[03:22:24] *crickets*
[03:22:30] I guess he talked about some of the stuff already. Oh well, it's all good.
[03:22:36] Give me two seconds.
[03:22:40] Thank you.
[03:22:42] Thank you.
[03:22:44] Thank you.
[03:22:46] - Hey, you got it.
[03:22:48] Thank you.
[03:22:50] - Yeah.
[03:22:51] -
[03:22:54] Thank you.
[03:22:55] Mm-mm-mm-mm-mm.
[03:23:01] Okay.
[03:23:02] - Yeah.
[03:23:05] - Go, Paul.
[03:23:06] - Okay, yeah, all right.
[03:23:09] I think I'm pretty much good to go here.
[03:23:13] - More, more.
[03:23:16] Thank you.
[03:23:17] Thank you.
[03:23:24] Okay, cool.  All right.
[03:23:30] So the solid one, how different is your own client? It's not in that one. Yeah, yeah, it's not in that one. It was an import statement and in the current version of solid start.
[03:23:40] I--
[03:23:41] I'm not gonna lie, we...
[03:23:43] we just put use client in there.  I'm not sure if we're gonna stay with that,  but it's literally just put use client  on the top of the component.
[03:23:50] found that another framework was doing that.
[03:23:52] We thought it was pretty easy to do.
[03:23:56] I'm not saying that's going to be the final API, but the code didn't really have to change for it.
[03:24:01] - Okay, cool.
[03:24:08] Hello.
[03:24:10] Alright, so...
[03:24:14] Yeah, let's get started with This Week in JavaScript, which started...
[03:24:20] Three weeks ago. Yeah, for me. So let's throw the banner up.
[03:24:27] This Week in JavaScript started three weeks ago for me.
[03:24:30] Been away for a couple weeks.
[03:24:33] Thank you.
[03:24:34] Trying to think back, putting in perspective, three weeks ago is when...
[03:24:39] Elon Musk decided to change
[03:24:42] Twitter to X.
[03:24:47] So,
[03:24:47] That's basically where this starts for us.
[03:24:54] Let me...
[03:24:55] Go back to sharing my screen.
[03:24:57] Um...
[03:25:01] Introducing the new Marco logo. I think a lot of people had fun with this. I don't have much to say about it. I
[03:25:07] - All I, I mean,
[03:25:09] It's kind of like one of those things where like,
[03:25:12] Elon Musk really just wants to make something happen, you know, like...
[03:25:16] like that silly meme about, you know,
[03:25:19] stop trying to make fetch happen.
[03:25:22] I don't know if it's related or not, but X,
[03:25:26] was what
[03:25:27] He had originally named PayPal.
[03:25:29] back in the day
[03:25:31] and
[03:25:32] They decided that that wasn't the best name for it, so they changed it to PayPal.  Um...
[03:25:37] I guess he just finally got a chance to bring it back.
[03:25:49] Oh yeah, my green screen background. Yeah.
[03:25:54] of my own office. Yeah, I got updated. I got like a bunch of new
[03:25:57] Lego
[03:25:59] and some other new cool nerdy stuff.
[03:26:02] Thank you.
[03:26:03] Did I actually show it on stream? Actually, give me two seconds.
[03:26:05] I know this is This Week in JavaScript, but this thing was way too cool not to show on the screen.  I'll be right back.
[03:26:10] *thud*
[03:26:17] Thank you.
[03:26:18] Thank you.
[03:26:26] All right.
[03:26:31] Check this one out.
[03:26:34] They got me a self...
[03:26:36] Portrait.
[03:26:37] Lego. And I know I shared this on Twitter, but
[03:26:40] It's even got the solid logo on the shirt.  It's just solid really faintly underneath.  You probably can't see it.
[03:26:48] on the shirt.
[03:26:50] Um,
[03:26:51] looks like it kind of rubbed off but yeah it's one of those blockhead Legos
[03:27:03] I'd rather see your new Lego than your Elan.
[03:27:10] The next Lego movie will be about Signals.  Yeah, there you go.
[03:27:15] Yeah.
[03:27:18] Yeah, no, it's very awesome.
[03:27:21] Anyway, um...
[03:27:24] Yeah.
[03:27:25] So yeah, that puts everything in perspective.
[03:27:34] I'm going to do a little bit of solid update.  I've been working a lot on solid...
[03:27:38] and solid start
[03:27:41] All the work, I've been trying to do a merge
[03:27:44] for ages. I mentioned it, I think, maybe on the previous stream, because that's around when I started it.
[03:27:48] Um,
[03:27:49] But in the meanwhile, a lot of other cool stuff has been happening in the community while I've had my heads down.
[03:27:54] Uh,
[03:27:55] but I'll talk about the merge in a minute, but, um,
[03:27:58] This is very cool. Vercel AI SDK has experimental support for Solid.js, which is very cool. I haven't talked to them for a while, so great to see them adding a SolidStart example. Super awesome.
[03:28:10] Uh...
[03:28:13] Yeah, there's some...
[03:28:15] There's some cool stuff that we've shared over the last couple weeks, creating browser extensions in Solid.  I think there's a starter kit there.
[03:28:21] Um...
[03:28:23] I love seeing this. Solid talks.
[03:28:25] in all languages around the world, courses,
[03:28:29] Stuff really kind of, you know, picking up, uh,
[03:28:35] and...
[03:28:40] Yeah, I motion one.
[03:28:43] animation stuff. It's funny. Part of me wonders if the view transition
[03:28:47] stuff can make this way simpler, but
[03:28:49] Still very cool to see these libraries come out. And speaking about libraries,
[03:28:54] I'm surprised with this one. Solid Primitives.
[03:28:57] is now approaching 200,000 monthly downloads.
[03:28:59] Which is, which is
[03:29:02] Pretty big, that's 50,000 downloads a week.
[03:29:04] Um...
[03:29:06] Which...
[03:29:07] Is, well...
[03:29:10] I think.
[03:29:11] I mean...
[03:29:13] I don't even know how much is Solid downloaded these days.
[03:29:16] Like, can we figure out how many...
[03:29:18] solid
[03:29:20] Okay.
[03:29:21] Yeah, so
[03:29:23] Almost...
[03:29:23] almost half
[03:29:25] Yeah.
[03:29:26] Solid gets downloaded maybe 120,000 times, so almost half...
[03:29:30] of solid users use solid primitives in their projects, or half the solid projects use solid primitives.
[03:29:34] That's pretty cool.
[03:29:37] And this is completely community maintained. They're very open. They do RFCs and stuff. So very awesome to see that.
[03:29:56] Yeah, I think we're just starting--
[03:29:58] to see
[03:30:00] Like...
[03:30:00] You know, some of those people have been looking at stuff, try projects with it.
[03:30:06] getting good results and stuff. It's been tricky because Start has been... Start has been...
[03:30:18] Um, Star has been a...
[03:30:20] taking a bit of time, which I'll talk about in a minute, but yeah.
[03:30:23] Oh, we're talking about Rescript. I think it's cool. We've been trying to get stuff working there for ages. And there's a Fable thing as well. It's just, it's hard when all the other, everyone assumes GSX to have a specific compilation when it doesn't. And porting solids compiler is not as easy as it should be.
[03:30:42] There's been great work there. The SWC plugin works
[03:30:46] They finished it. I don't know if I announced this that the client side if you're just doing client side rendering my understanding is that the SWC plug-in now for solid client side is
[03:30:56] basically
[03:30:58] fully up to spec, so to speak, and it can handle all the stuff client side.
[03:31:04] Obviously, I didn't touch that.  I've been working on Babel, but it's very cool.  If you want to try it out.
[03:31:15] Yeah, it...
[03:31:16] Start has been hard to start. Yeah, I feel bad for blocking people.
[03:31:20] Um...
[03:31:22] Yeah.
[03:31:26] But we're getting somewhere.  I'll show you what's been going on.  Anyways, we'll...
[03:31:33] We can, yeah, you know what, I'll do the solid update right now. Why not? Like the stuff that I've been working on.
[03:31:41] Yeah, do we get new issues here? Yeah, always new issues.
[03:31:45] *smack*
[03:31:46] What... I mean, it's... you could tell...
[03:31:50] I looked at this recently and I was like, "Oh, wow, where have I been the last
[03:31:55] Well, I was at conferences, obviously, but even then you're like,
[03:31:58] Ryan, why isn't this chart like way, way more busy than,
[03:32:02] here.
[03:32:04] you know, since you've been back and working. Well,
[03:32:07] The answer to that
[03:32:09] is I have been working
[03:32:11] very very very very very hard and
[03:32:14] at merging...
[03:32:16] Uh...
[03:32:18] merging Solid Start
[03:32:21] Basically, a bunch of people worked on the Movies app a while back.
[03:32:25] Oh, it's build fill again. What is it?
[03:32:28] Sorry.
[03:32:29] uh,
[03:32:30] Thank you.
[03:32:31] It's not going to tell me how things will look.
[03:32:33] Merging the movies app back in  and all the experimental island stuff  to the latest so that we can start in R&D.  And what this looked like
[03:32:42] is the most monstrous
[03:32:45] merge PR that I probably have ever worked on. Where is it? I've been fixing, I've been helping a lot of people
[03:32:53] are sort of  merging a lot of PRs the last few days, doing a lot of  releases stuff. Development of Solid  has been picking up a bit.
[03:33:02] But
[03:33:03] This merge...
[03:33:06] started like this branched off 10 months ago.
[03:33:11] And--
[03:33:17] Like, I'm...
[03:33:19] Eh...
[03:33:21] basically
[03:33:23] I...
[03:33:26] I've, this has just been me the last like couple weeks, just do, do, do, do, just fix, fix, fix, fix, debugging, broken merge stuff.
[03:33:35] going back between branches, seeing when they worked, it's just, it's been,
[03:33:42] It's been a lot of work, but we're there now.  There's still a couple of small things I think,  but for the most part, we've got the docs deploying again,  we've got everything working again.
[03:33:52] There is no...
[03:33:53] Everything that went in to make the Solid Movies app is now available for experimental mode. People can go and use it and try it.
[03:34:01] So this I wanted to get in because it's very hard to merge the stuff later.
[03:34:08] .
[03:34:09] Which people are asking, okay, well, how's the move to Astro?
[03:34:13] going.
[03:34:17] We've been... I'm going to throw it right out there. We've been...
[03:34:22] It's been going pretty well.
[03:34:25] Um...
[03:34:26] But in order to hack stuff to work, which I managed to get stuff working for the most part, involved a lot of breaking Astro stuff, like turning off a bunch of plugins.  And basically Astro as Astro and Solid Start and Solid Start would not work in the same project because we basically break Astro to make Solid Start work.
[03:34:43] And it's a difficult position to be in.
[03:34:47] Um...
[03:34:48] Because it's
[03:34:49] It's going to be challenging for us to kind of...
[03:34:55] reconcile that work with the Astro's roadmap, which is in, you know,  they've got their own set of features.  You see this view transition stuff.  It looks really good.  Um,
[03:35:05] So...
[03:35:06] I've been talking a lot with Fred
[03:35:07] And we are exploring some other options. I do intend to move off our own adapters.
[03:35:14] There's been some conversations, like you might have seen something in Solid Repo, a discussion about Vike or Vite plugin SSR. Also been looking a lot at Nitro, which powers next, as I mentioned, on the analog stream.
[03:35:29] you know, Nikhil's been doing some really good work on top of Nitro. So, um,
[03:35:34] Basically, at a point we're evaluating that.  This is why I did the merge first,  'cause I wanted to make sure that we had all the features in,  we had SolidStar in its entirety.
[03:35:45] because it was a mess and I couldn't touch a bunch of stuff because, you know, trying to merge it later. I basically, if you've ever seen the pull requests in here, it was literally like experimental, experimental, experimental, or adapter, adapter, adapter, example. I didn't want to touch anything.
[03:36:01] Um,
[03:36:02] when it was in that merge state. And I was, I thought I'd rebase at first, but in reality,
[03:36:07] rebasing and then trying to get the stuff back in would have been a nightmare. So, um,
[03:36:11] I'm happy that Solid Start is finally
[03:36:15] Itself again, I've finally had enough time. I knew this would take me weeks to do. I just didn't have a
[03:36:20] three straight weeks to do it while I was traveling in conferences.
[03:36:24] So it's done.
[03:36:27] which means stuff development's picking up much much quicker again and uh
[03:36:34] I'm, as I said, we do the rebase. Um,  I think that'll be the last real unblocker to,  because there's a bunch of stuff we've learned, but, um,
[03:36:41] I'm very excited because there's a lot of...
[03:36:44] improvements that we can make to the core architecture with this rebase.
[03:36:48] So
[03:36:50] That's that's where the focus is going.
[03:36:54] Did I say next? I meant next.
[03:36:57] I said nuxt, I meant nuxt.
[03:37:02] Yeah, the naming as well.
[03:37:04] Naming is fun.
[03:37:08] Anyway, so that that
[03:37:10] That is the solid update. I try and get to all these, a lot of these open PRs and addressing a lot of the issues. A lot of things have changed over time. We built on Vite, we built on some other stuff that's been kind of more volatile and changing over time. So we've had the...
[03:37:26] can kind of pull it up into the future. So, um,
[03:37:30] Yeah, I'm excited about this effort going.  We have...
[03:37:35] Alexis, who has already started on the R&D stuff, been working on benchmarking. We have
[03:37:41] you know, a solid,  learn the pun,  code base to get started on.  So things are moving forward.
[03:37:47] forward with that.  Um,
[03:37:50] So yeah, that's a solid start update. Solid reactivity stuff.
[03:37:57] Milo is on vacation right now. I will update you all when he comes back.
[03:38:03] Okay.
[03:38:04] So...
[03:38:06] Let's see, what's next?
[03:38:11] Oh yeah, yeah, yeah, yeah.
[03:38:13] Yeah, let's see. Let's scroll up. I should hopefully have it here.
[03:38:18] Yeah.
[03:38:21] I hope everyone saw this. Valley Bot, um...
[03:38:24] I hope I said that right, is a new validation library, kind of like Zod.
[03:38:29] But it's tree shakable.
[03:38:31] And it's super small. It's like compresses like crazy.
[03:38:34] Um,
[03:38:36] I think this is...
[03:38:38] Really excited. Fabian, you might have heard of him. He built the modular forms library that we use in Solid, and then he went on to build one for Quick and for Preact.
[03:38:48] Um...
[03:38:49] does really good work in terms of code size.  And one of the challenges that I've had
[03:38:55] and I'm not gonna lie, why I haven't put Zod in as the starter, or have validation, is because
[03:39:02] makes those numbers look bigger. You probably need it in reality.
[03:39:06] But this is a game changer when you can include a library
[03:39:11] have the basic case without taking any size hit practically,
[03:39:16] And...
[03:39:17] so it demos well and it scales to your need. I'm very excited about this.
[03:39:22] A lot of discussions with Fabian. Myself and Mishko are acting as advisors for his
[03:39:27] Um,
[03:39:28] thesis.
[03:39:30] which he's in the process of writing right now, but he's already released the library so others can use.
[03:39:36] which is very very cool
[03:39:40] Yeah, exactly.
[03:39:46] Yeah, exactly. So I know that's been pushed and people are like, oh, I miss the chaining API and all this. Yeah, I mean...
[03:39:54] That's the reality of it.
[03:39:58] Fabian was showing me that like...
[03:39:59] with the ability to do auto imports in VS Code, this still works
[03:40:03] fairly well as long as you like know what you're looking for like start typing string
[03:40:08] and stuff. So while you don't have the chaining,
[03:40:11] it does the discovery works pretty well it was very important for him to have that kind of experience
[03:40:18] when building this and
[03:40:20] We found out later that I guess there's a couple other libraries that are sort of similar.
[03:40:25] He did look into a bunch of libraries when he was benchmarking and testing this for the release.  We reviewed...
[03:40:32] some of the works he did and helped him debug some,  uh,  benchmarking stuff.  But,  um,
[03:40:39] Yeah, it's...
[03:40:40] It is...
[03:40:41] It is very impressive.
[03:40:44] that even the whole library with the stuff you probably aren't going to need is about 4.5 kilobytes.
[03:40:50] So...
[03:40:52] Yeah.
[03:41:01] I hadn't seen the transpiler
[03:41:03] But that is very cool.
[03:41:07] Yeah.
[03:41:08] Yeah, easy to do if you think about it.  It's like our undestructure plugin,  except you don't have to worry about...
[03:41:16] like what's a component. Yeah, a transpiler for that is actually dirt, dirt simple, now that I think about it.
[03:41:22] Trivial.
[03:41:28] Yeah. But yeah, we're already looking at this, um,
[03:41:32] you know around the SolidStar ecosystem. So very very excited about this.
[03:41:38] I think it actually makes a difference.
[03:41:40] you know, this reduced size.
[03:41:44] Yeah, super struck person again.
[03:41:55] I don't know. Does anyone care whether signals or hooks are declared or not?
[03:42:00] There was a discussion with Matthew Phillips that came out because...
[03:42:07] Um,
[03:42:08] James
[03:42:09] QQuick was like after 10 years of coding I still have no idea what declarative means and he's kind of right because the funniest thing about
[03:42:16] coding in general is that like
[03:42:19] even though there's a difference between declarative and imperative code,
[03:42:23] In a sense, you could...
[03:42:24] like
[03:42:25] From a very purist, like...
[03:42:28] I guess it's not true, but like...
[03:42:31] -
[03:42:33] There's a lot of things that involve declaration in programming and patterns that involve setting up rules or like...
[03:42:41] connecting pieces together without describing how they go one then another then another so like this whole conversation about  hooks versus
[03:42:51] signals being imperative or not
[03:42:53] Um...
[03:42:54] actually end up being
[03:42:56] a bit of a debate.  Um...
[03:42:58] But I don't know...
[03:43:00] My first thinking is I've always called these patterns declarative data because you'd set the rules, you know, like even though they have dependency rates, you're basically saying this depends on this that depends on this.
[03:43:09] Um,
[03:43:10] But then...
[03:43:11] Matthew was quick to point out that hooks have a hook rule ordering consideration.  And I was like, yeah, but...
[03:43:19] Like, I don't know, like...
[03:43:22] signals in theory if you could wire them the order shouldn't matter in a way that's impactful. That's part of the glitchless rules. It is
[03:43:32] with our eager memos, it's easier, it's harder to do that. But in theory,
[03:43:37] the order in which you set the rules shouldn't matter as long as you have like
[03:43:40] the things to set right
[03:43:42] Bye.
[03:43:43] I think this was... where was it?
[03:43:49] There's an example in here.
[03:43:54] Yeah, yeah, he's like, "Look, our computer values are already made by signals. A computer value can read the value of another signal, in which case the order that these things matters runs."
[03:44:01] Yes.
[03:44:01] But like...
[03:44:02] I was saying like, if I, I just wrote it backwards, if you had lazy computers, you could
[03:44:09] Because...
[03:44:10] You could say what the effect was, like if you declared the variable. I know this is a silly example.
[03:44:15] But it's just showing that, like, in a way, you could view this as rules.  Like, as long as you say there's an effect that depends on this and a computer that depends on this or memo depends on this,
[03:44:26] And then this is this.  Like, it doesn't actually...
[03:44:29] matter, um,
[03:44:32] Thank you.
[03:44:34] If it's hard to debug, it's declarative.  Yeah, thanks.
[03:44:54] So like in a sense
[03:44:59] I mean, this takes me back to the discussion that I had with...
[03:45:03] Dan Abramoff at the end of the Signals thing.
[03:45:06] where
[03:45:07] He was...
[03:45:08] Let me...  You know the one that I'm talking about.  Probably...
[03:45:13] Where was it? React Signals 10 years later.  Because like...
[03:45:18] He was defending reacts
[03:45:21] ability
[03:45:22] to like
[03:45:25] write code that looks like this where like you led and then you rewrite it and like you do all this kind of stuff.
[03:45:30] Um...
[03:45:32] broken version, working version solid, working version in React. Like he was kind of defending the ability for React to do this kind of crazy nonsense essentially.
[03:45:41] you know, a bunch of let's and that and we're at it and I was like, this is
[03:45:44] This feels very imperative when you're like, let this and then if...
[03:45:48] this, set this, and loop through this. You know what I mean? This feels like imperative flow.
[03:45:54] However...
[03:45:55] I wrote the solid version.
[03:45:57] later and I was like,
[03:45:58] Why don't you just write it like...
[03:46:01] Like this, where's the full version...
[03:46:07] Yeah, I think this is the final version right here.
[03:46:10] I guess this was the final version right here
[03:46:14] Here.
[03:46:16] Like, why don't you just say count...
[03:46:18] is this, heading is this,
[03:46:20] something else is this. Essentially,
[03:46:23] I view this as
[03:46:25] I guess this is my view of declarative because you basically
[03:46:29] are making these all into declarations where you define something by its expression or its rules.  You're basically wiring up the graph, so to speak.
[03:46:37] And you can...
[03:46:38] See, other than the existence of when these
[03:46:40] Like if you sit at top here, like if you declared all the variable names at top,
[03:46:46] um like count heading and something else if you declare them up top the order you make these  statements actually doesn't
[03:46:52] matter.
[03:46:53] Um,
[03:46:54] because you're setting rules.  And I was saying that this was better code
[03:46:58] for UI because the whole thing is declarative.  Anyways, this is,
[03:47:03] A little bit of a tangent here, but it definitely is what came to mind here.
[03:47:10] declarative relies on expressions or in the statements. Yeah.
[03:47:17] So...
[03:47:18] I don't know.
[03:47:21] Maybe not the most interesting discussion, but...
[03:47:23] Um...
[03:47:26] Yeah.
[03:47:26] I--
[03:47:28] uh,
[03:47:29] Who cares, right? But the kind of things we talk about.
[03:47:33] Um...
[03:47:35] Other cool thing that I looked at...
[03:47:37] I was trying to...
[03:47:38] I was looking at
[03:47:39] Svelte a lot recently because I was looking at how they do
[03:47:43] Um,
[03:47:44] some of the more complicated, nasty things that I've taken from React.  And sometimes Svelte has a much, much simpler solution.  And one of those is how to handle meta tags.
[03:47:53] But I found a few shortcomings with it and I was trying to ask the Stalk community if they had those problems, because if not, we could simplify things.
[03:48:01] drastically.
[03:48:03] One of the coolest things is felt actually compiles
[03:48:06] Like when you read a head...
[03:48:08] Like, if you write a title HTML element, it actually doesn't make a title element.  It just writes to the title, which is so smart because then you don't have to do any diffing or deduping because you can always just set the title.  But it does mean that, like, if you have the title in multiple places and it's reactive, well...
[03:48:22] it's possible for the title to be overridden by a parent  even though you've written a child component.  But the truth of the matter is,
[03:48:29] There is some
[03:48:31] complexity with the order of stuff running and hierarchy in these kind of
[03:48:36] meta components anyways. Like
[03:48:39] you want to say that the sibling that comes after beats
[03:48:44] the other sibling
[03:48:46] But...
[03:48:46] While hierarchy is relatively easy to track, siblings, um,
[03:48:52] that
[03:48:53] Execute in different orders. It's not so easy to track like let's say the first sibling was hidden and
[03:48:58] and then you render the title for the second sibling, and then you show the first sibling
[03:49:02] Well...
[03:49:03] If they're at the same level,
[03:49:05] than technically speaking
[03:49:07] the first sibling beats the second sibling. So the fact that it's imperfect anyways makes this kind of interesting. Again, these are probably details that
[03:49:16] you know,
[03:49:17] Um,
[03:49:19] are more interesting to me than to others, but, um...
[03:49:22] The ironic part, just for anyone who wants to wrap up conclusion to this thing, is I realized that...
[03:49:28] I...
[03:49:28] I think metadata belongs to the router anyway.  So this whole conversation of putting like...
[03:49:35] Processing like
[03:49:36] tags.
[03:49:37] in the middle of the markup, probably
[03:49:41] doesn't make sense. I mean, I like that it's declarative.
[03:49:45] but, you know,  that's what the declarator conversation where you can like declare these  things, but because the rules are kind of iffy,  you're almost better to feed into, you know, like, uh,
[03:49:57] something at the rote levels, maybe something that could be...
[03:50:00] generated off the route data so that it could be handled with preloading and static generation,  all that kind of stuff.
[03:50:09] I mean, you can always do this after the fact and collect things, but I think this is actually a place that I might have been going down a wrong path.
[03:50:17] rabbit hole.
[03:50:21] - Um.
[03:50:22] Okay, here's a topic.
[03:50:24] Uh...
[03:50:25] There is a new proposal to bring observables
[03:50:28] into
[03:50:30] Uh...
[03:50:34] the DOM API, not the JavaScript API,
[03:50:38] Like they've tried to bring it in through TC39, but to bring observables in through like, uh,
[03:50:44] you know, like the WC or whatever.
[03:50:47] The idea is adding observables to elements to listen to events so that you could do more advanced Rx type stuff without Rx.
[03:50:57] I don't know how I feel about this, but on the other hand, I almost feel like
[03:51:02] This is the cool Rx demo.  I don't have much use for this from a framework standpoint,  because I kind of want to put it back into the JSX.  But on the other hand,
[03:51:10] You know.
[03:51:13] If I had something that did this, I don't know how often I'd be reaching for RX.  Just throwing it out there.  Like, this is...
[03:51:20] - Thank you.
[03:51:21] Like Rx is for very complicated async data flows, generally speaking.
[03:51:26] Um, and this is like,
[03:51:31] Yeah, I actually like Dan Shapir's thing here. It's like, it's nice and all, but who'd actually use it?
[03:51:39] They're saying we're using... No, not who's using our axe. But he said something...
[03:51:44] Using this on its own feels like jQuery.
[03:51:47] And I see what he's getting at. Like, it's all these just chained operators on something where you're kind of like, eh, you know, like...
[03:52:02] It's like asking after mom. Dad said no. Oh.
[03:52:10] uh
[03:52:19] - Yeah.
[03:52:20] Isn't the data needed for meditation basically the right alternative?  Well, it depends.  I...
[03:52:24] strongly believe that data fetching should be hoisted, otherwise you cause waterfalls.
[03:52:29] It's innate.
[03:52:30] So it may be not at the top level router, but at the route section level.  And the thing that I was going to mention is the React.
[03:52:38] has been working on like this kind of proposal similar to Svelte.
[03:52:42] Like with like the head, like where you could just put tags that would normally go in the head anywhere in and then have the compiler handle it or, you know, runtime handle it.  But like, so they had an RFC for it.
[03:52:53] But Next.js
[03:52:56] ended up going with like
[03:52:58] like, specialized format. Same with Remix. Almost everyone, because they want to know at the route level.
[03:53:03] You could feed that route data back into the meta tags, and handle streaming and stuff properly and all that. But like, they almost all this, like, you could do it the other way and have it,
[03:53:13] Collect it.
[03:53:14] But that collection is...
[03:53:16] Maybe...
[03:53:18] imperfect.
[03:53:19] So, like...
[03:53:20] There's this desire, I think, to simplify things, to handle it at the router level, like through the file system routing.
[03:53:37] Thank you.
[03:53:39] What do I do if I want to put the current timer unread message counter in the title?
[03:53:46] Yeah, I'm suggesting that... Yeah, that's interesting because you're saying like drive it off state and I'm saying like...
[03:53:54] You can basically do... like the thing is... sorry, I guess no one cares about the RX thing. But the thing is like...
[03:54:02] This...
[03:54:04] This...
[03:54:05] document equals title thing.
[03:54:08] in a crate effect.
[03:54:11] is easy to do.
[03:54:13] - Thank you.
[03:54:14] So to speak.
[03:54:15] and in a sense
[03:54:18] If you...
[03:54:20] Made it into a router...
[03:54:22] provided API.
[03:54:24] like title is like use title or something from the router.
[03:54:28] And you can manage it.
[03:54:31] then I feel like
[03:54:33] Um,
[03:54:34] Like that would also be relatively easy to do.
[03:54:38] like
[03:54:39] the router can both handle it at navigation time and then you can always set it yourself manually.
[03:54:48] Thank you.
[03:54:50] Thank you.
[03:54:51] Thank you.
[03:54:54] - The first question is,
[03:54:55] I think in general,
[03:54:58] We need to think a bit about...
[03:55:01] Like...
[03:55:03] Thank you.
[03:55:03] the time, what it means to have data
[03:55:07] in...
[03:55:09] like text data like timestamps inside
[03:55:12] content that we server render. Classically, we said the client's the boss.
[03:55:17] Um...
[03:55:18] Thank you.
[03:55:18] Thank you.
[03:55:20] It's interesting because...
[03:55:23] If we get to a point where...
[03:55:26] Thank you.
[03:55:27] we don't want to do hydration.  The server has to be the boss.  So, you know...
[03:55:32] at least setting the initial state. So it's interesting to me for things like that anyways, because...
[03:55:41] Thank you.
[03:55:42] Like, these can't be the sources of hydration mismatches.
[03:55:48] - Thank you.
[03:56:01] Yeah. So, I mean, it's a matter of whether you like the declarative...
[03:56:06] There is some tension there.  It's just...
[03:56:10] The expensive stuff for server rendering isn't...
[03:56:13] your...
[03:56:14] title counter thing right it's the data loading dependent stuff in the streaming and  centralizing the main mechanism helps with that um
[03:56:26] It is interesting SvelteKit still uses SvelteHead, so
[03:56:30] It requires still more looking. In either case, I looked at what we're doing in solid meta, and if what Svelte does is okay, I could probably reduce the package size by like half.
[03:56:41] Yeah, I mean, how big is solid metal anyways, Bundlephobia?
[03:56:44] I mean, tree shakes a bit, but not great.
[03:56:46] Solid.
[03:56:47] JS meta.
[03:56:51] Yeah, it's 1.4 kilobytes gzipped. I'm pretty sure we could get it to like 700 bytes if we use this felt approach.
[03:57:07] got bigger recently
[03:57:08] - Okay.
[03:57:12] That's so funny because Solid Meta was originally a port of...
[03:57:17] React helmet.
[03:57:22] or React Head, I forget what it was called.
[03:57:28] It was probably React head.
[03:57:33] Thank you.
[03:57:36] Yeah, there's React head.  Because I remember I was sitting there and I was like,  I can't change the name to...
[03:57:42] to solid
[03:57:46] So...
[03:57:48] Um.
[03:57:51] Yeah, anyway.
[03:57:53] If it was helmet, I might have been okay with solid helmet.
[03:58:01] Okay.
[03:58:02] Yeah, people get it? Yeah. Okay, good.
[03:58:09] Thank you.
[03:58:14] In any case, I don't know. People are very excited about this on the ARC side. I'm probably going to be talking to Ben Lesh coming up and I think the Svelte side is interesting because the Svelte...
[03:58:25] community does
[03:58:27] use...
[03:58:28] Subscribables, like their stores are subscribables.
[03:58:30] Like...
[03:58:31] Let me see if I can find it here. Did I not even bookmark that?
[03:58:36] Thank you.
[03:58:40] I didn't.
[03:58:41] Oh, that's sad.
[03:58:43] Whatever. There was a bit of a conversation going on about the difference between observables and whatever. I thought I'd give a good answer.
[03:58:51] Anyways.
[03:58:54] Mm-hmm.
[03:58:54] Thank you.
[03:58:55] - Thank you.
[03:58:57] The reason I remember the Zod thing was...
[03:59:00] Someone wrote this as a response to Tanner. Tanner obviously retweeted the Valabot thing, but then they...
[03:59:08] They wrote Zod has quite an ecosystem that almost react like...
[03:59:12] And I thought this was funny because it's like the justification we have now for like...
[03:59:20] Yeah, I'd try the new library, but...
[03:59:22] you know, it hasn't, like, the comparisons  to React as, like,
[03:59:26] it's a testimony to react,  but it's interesting to see something like Zod being used in the same...
[03:59:32] thing where
[03:59:33] I have to feel like...
[03:59:36] integrations for this is relatively trivial and it's
[03:59:39] Things are pretty...
[03:59:41] like compatible, right?  Like it's almost like a direct swap.
[03:59:44] Um...
[03:59:46] But, yeah. I don't know.  I'm always looking for
[03:59:50] at people's sentiment around, you know, the libraries and how they feel about it.  So this one just stood out to me.
[03:59:56] We already talked about control flow for Angular.
[04:00:00] They are really changing stuff up.
[04:00:04] Deferred loading, I think, is their lazy component.
[04:00:07] So,
[04:00:09] Yeah, a lot of thought going into the stuff in Angular. Angular is going through a crazy renaissance revolution right now. It'll be very interesting to see what it looks like in a couple years.
[04:00:19] Is Jamstack dead? Here's a...
[04:00:22] Here's a throwout to the
[04:00:24] to the...
[04:00:26] JavaScript Jam crew.
[04:00:29] Yeah.
[04:00:29] How's it going, Anthony?
[04:00:31] Yeah, so...
[04:00:35] This was actually because of this article here.
[04:00:40] According to Jamstack pioneer Brian Rinaldi, we can pack it up and leave our static sites behind forever because Jamstack is officially dead.
[04:00:47] Right.
[04:00:48] And that was that.  But I think...
[04:00:54] He published an article before this.
[04:00:57] Yeah, here it is.
[04:00:58] Thank you.
[04:00:59] And...
[04:01:03] Thank you.
[04:01:13] So he's just talking about the progression of, like, the whole Jamstack thing.  And...
[04:01:19] I think what triggered this was killing the Jamstack Discord. The Jamstack Discord does not exist anymore.
[04:01:26] Um...
[04:01:30] I was...
[04:01:30] Yeah, I was there when that happened. Um,
[04:01:34] - Thank you.
[04:01:36] basically
[04:01:38] Netlify has no DevRel team anymore.
[04:01:41] And they were the ones managing the questions for the most part.
[04:01:44] So--
[04:01:46] Even though the decision was made slightly before that happened, it was kind of the writing on the wall that Netlify was basically...
[04:01:53] And Netlify isn't even...
[04:01:56] really...
[04:01:57] recognizing with Jamstack, it doesn't really mean anything anymore. But I think it's really interesting to see because of how big of a difference it made for companies,
[04:02:05] Um...
[04:02:07] that like
[04:02:08] for some people,
[04:02:12] because the disruption it came with, like...
[04:02:15] Like, Jamstack's been kinda dead.
[04:02:17] for a while.
[04:02:24] Um, so
[04:02:26] Yeah, Jamstack is a feeling. It doesn't say that feeling is mostly ambivalence. Yeah.
[04:02:33] Yeah, I don't know.
[04:02:35] I guess it's official now.  And that was what that space was about.
[04:02:42] Yeah, yeah. I mean...
[04:02:44] Dimitri is pretty much completely
[04:02:47] Yeah, he was like the heart and soul. Yeah.
[04:02:53] Jamstack is a state of mind.
[04:02:55] Thank you.
[04:02:56] Yeah, yeah, that's right.
[04:02:59] Work with Demetrius, right? Yeah.
[04:03:01] Um...
[04:03:05] Thank you.
[04:03:06] In any case, yeah, it's...
[04:03:08] It's kind of the...
[04:03:11] Thank you.
[04:03:15] Yeah, it's the end of this time period and this...
[04:03:19] I don't really have much to say, but I was not really involved with Jamstack at all, but...
[04:03:28] it doesn't mean anything anymore and it served its thing.  But I think for those who were involved,  uh,
[04:03:34] uh,
[04:03:37] you know, this is probably a bigger thing. What is Jamstack? When was this panel debate?
[04:03:43] I'm just curious, when was this?
[04:03:45] Is this recently?
[04:03:47] Two years ago, yeah. So like
[04:03:49] It was already kind of...
[04:03:52] ambiguous at most.  But I guess what I'm saying,  the only reason we're talking about  giving it any airtime  is it's officially dead now.  We can say that.
[04:04:01] Um,
[04:04:02] There is no Jamstack conference this year, for example.
[04:04:08] Netlify's conference is coming under a new name.
[04:04:11] So.
[04:04:13] Yeah.
[04:04:15] Yeah, and that was...
[04:04:19] Matt Billman's statement, right?
[04:04:22] Like over, and I think, I think it was in the blog post, something, uh, I already closed  it.  Let me see if I can find it again.  It, it wasn't from, it was Brian, where, where is Brian's link?  Not.  Not.
[04:04:33] that time.
[04:04:35] Um...
[04:04:37] It wasn't SWIX's.  It was...
[04:04:39] It was something along the lines of that, like, Jamstack succeeded. Yeah, Matt Billman. Jamstack won so much that it became less useful as a community term. Basically, all modern web frameworks ended up being built around self-standing frontends and API services.
[04:04:52] But yeah, there's some kind of quote here about how over time, like the jam came lowercase and it just kind of,
[04:04:58] Yeah.
[04:05:00] like normalized down to kind of like,
[04:05:04] change the impact of it being different.
[04:05:08] Has Compose been announced?
[04:05:10] Yeah.
[04:05:19] Goodbye, Jamstack. Yeah.
[04:05:22] I feel like...
[04:05:24] Yeah, this is the one that I was looking for.
[04:05:27] This was the...
[04:05:29] - Thank you.
[04:05:29] the very,  uh,
[04:05:33] You could tell...
[04:05:35] Like that Brian...
[04:05:36] cared about this whole thing.
[04:05:42] will likely retire using the term. I don't have a replacement. I think newsletters like Jamstack
[04:05:47] And events like the jam.dev are relevant to folks who've attended the folks' full-stack development, blah, blah, blah.
[04:05:51] Anyways.
[04:05:53] Yeah. So the short of it is we're not using the term JAMstack anymore. It's done.
[04:05:59] We weren't anyways, but now it's officially dead.
[04:06:02] All right.
[04:06:04] Okay, we'll get to that in a minute.
[04:06:06] All right.
[04:06:09] Big news for our friend who was on the stream a few weeks back, Aiden.
[04:06:13] was awarded a $16,000 grant from Emergent Ventures to work on Million.js full-time for the next four months.
[04:06:22] So.
[04:06:24] Very exciting because this completely changes what he can do, right?  When he built Million, he was like, "Okay, I can make
[04:06:31] something react like render more optimally in these little blocks.  With this kind of focus and stuff, he's actually looking at expanding it and positioning
[04:06:41] Um,
[04:06:43] million as a way to make your
[04:06:45] React apps faster.
[04:06:47] kind of like Preact in the past, but more like dedicated to the performance angle.
[04:06:52] while keeping compatibility.
[04:06:54] Like Preact kept compatibility, Inferno didn't for performance.  He's...
[04:06:58] trying to keep it for performance.  I think it's interesting because the types of optimizations  that Million can do, like we saw, work really well in leaf nodes.
[04:07:06] but don't affect the structural considerations.
[04:07:08] And I think
[04:07:10] what's going to be fun and challenging moving forward is that,
[04:07:13] Um...
[04:07:14] React
[04:07:16] knows that and they're addressing the bigger pictures in the rendering.  So either this combination is going to work really nicely or at some point,
[04:07:24] React's going to kind of
[04:07:25] make these optimizations like
[04:07:28] unsavory, like
[04:07:31] I...
[04:07:32] Like you got to think that if react wanted to improve performance in this way, they just would. I
[04:07:39] I wonder if a world of React for Git
[04:07:42] Like...
[04:07:43] This doesn't fit in anymore. It'll be interesting to see I've seen me still using JSX, but if react use a completely different or
[04:07:49] way of compiling their statements that it should be
[04:07:52] Interesting to see where that leads to.
[04:07:55] All right.
[04:07:59] Okay, we got two more things, I think.
[04:08:03] I'm not going to talk too much about this Vite thing. This is true.  Have trouble with third party libraries in Vite? Try both of these options.
[04:08:09] Seriously, just fixes so much.
[04:08:12] It's like always this. Someone's like, oh, this library doesn't work. I'm like, do this.
[04:08:16] Okay, cool. So last two topics.
[04:08:25] Sweet. Okay.
[04:08:29] and I can take down that
[04:08:38] Yes.
[04:08:38] Thank you.
[04:08:45] Yeah, yeah, yeah. Sorry, I missed it. I was so focused on my thing. I didn't see it when I was looking at my screen.
[04:08:51] Yes.
[04:08:52] No, everything helps.  That's so awesome.
[04:08:57] Um...
[04:09:01] Okay.
[04:09:03] If the Netlify
[04:09:04] I didn't think this had been shared yet.
[04:09:07] Hmm.
[04:09:12] But you're right, it is out there.
[04:09:18] Netlify Compose, October 18th, 19th.
[04:09:21] It's California...
[04:09:22] San Fran and virtual.
[04:09:26] live at the iconic Fairmont.
[04:09:34] Haha
[04:09:35] Dance.conf last year was a lot of fun.
[04:09:38] I think this is going to be a different type of conference this year. I'm sure more details will come.
[04:09:43] coming up but
[04:09:45] Um...
[04:09:48] That is...
[04:09:50] the new Netlify conference.
[04:09:55] Alright
[04:10:04] Alright.
[04:10:07] I've been looking at here.  Oh yeah, my discussion with Dan.  Okay, cool.  So, um...
[04:10:12] A couple talks went up.
[04:10:14] Um...
[04:10:16] My talk on suspense, transition, concurrency,
[04:10:19] If you're confused by what Solid does and you don't understand React,
[04:10:23] I think this is good because I realize at a certain point in this talk that I'm probably talking past most people.  But it starts at least decently.  There are not many good talks explain how...
[04:10:38] Suspense ties into everything. I tried to explain how suspense basically powers everything and
[04:10:44] async
[04:10:45] in Solid and similarly React.
[04:10:47] I even have a concurrent rendering demo at the end if you really want to see.
[04:10:51] Um, but I think
[04:10:53] This is really one of the only resources, it's for solid definitely, but in general, I think this is a very good resource if you really want to understand the why.
[04:11:02] like mechanically, like not like,
[04:11:05] like
[04:11:06] how it works, you know, throwing promises at that, but I mean like why, um, we care about this and why we designed the API in such a way.
[04:11:14] - Yes.
[04:11:15] But the other talk I actually liked quite a bit as well.
[04:11:18] Um...
[04:11:19] There's such an interesting concept for a talk and I kind of always wanted to make
[04:11:24] this example and actually do this in a stream. I think I did it in the Preact stream where I was showing the why Preact signals
[04:11:31] were not the same as solid or whatever, not to a certain degree.
[04:11:35] But...
[04:11:35] Meshko.
[04:11:37] Um...
[04:11:38] actually
[04:11:41] What happened here?
[04:11:42] Thank you.
[04:11:45] I have like no audio.
[04:11:48] That's too bad.
[04:11:53] That's really weird. Oh, actually, maybe I have to open it on YouTube.
[04:11:59] Hmm.
[04:12:00] I lost my audio somewhere.
[04:12:07] Side note, I like love this description, but
[04:12:10] It's like saying it's playing the audio, but...
[04:12:14] - Huh.  - is that there are values over time. - Here we are.  - And the way to think about it is
[04:12:19] uh,
[04:12:20] there is a setup phase where you can set
[04:12:23] step in order to read or write the value.
[04:12:25] that a value is just essentially value, you know, let x equals 42, x is the value, right?
[04:12:31] Now there is a signal which is kind of like value except that it's in a bucket. So it's not
[04:12:36] It's not that you are directly referring to
[04:12:38] the value 42, instead you are referring to a bucket
[04:12:42] and inside of the bucket is 42.  So usually when you have signals, you don't just refer to them as x, you either refer to them as x.value
[04:12:50] or you do it like in salad case you do x is a function so you call it with parentheses
[04:12:55] But fundamentally, you are doing something, some extra step in order to read.  Honestly, I don't need to hear his full explanation here, but for some reason this visual worked for me.  I don't know if it works for others, but it's like the value in a bucket and the value in a pipe.  Because, yeah, anyway.  But the reason this is actually...
[04:13:18] pretty sweet is he does a demo later on
[04:13:22] where he shows...
[04:13:24] Um...
[04:13:27] Oh, he's showing how signals work.
[04:13:30] Basically doing that...
[04:13:32] The only unfortunate thing about this video clipping
[04:13:35] is
[04:13:36] I'll get to the demo in a second, but...
[04:13:39] I've
[04:13:40] This part here.
[04:13:42] Um...
[04:13:42] because his head is in the corner and he's covering the solid logo. I just, I, I, I love
[04:13:48] I just thought it was funny that it said finest. I understand he's talking about how fine-grained it is, but rating stuff on a fine scale, um...
[04:13:55] is
[04:13:56] At least was amusing to me, anyway. Solid is behind his head there, so...
[04:14:02] Anyways.
[04:14:03] uh,
[04:14:05] Let's go back.
[04:14:07] to the example I want to show.
[04:14:11] Um...
[04:14:15] Yeah, I want to talk about this example.
[04:14:18] Because he came up with a very simple demo here.
[04:14:24] Right.
[04:14:24] and
[04:14:26] The reason I'm talking about this, a lot of people don't understand when I talk about Svelte and React being really, really similar.
[04:14:31] Um,
[04:14:32] in that they have state that belongs to components and components re-render.  Basically, he made this example where you had a parent
[04:14:40] component that owns a state and then you pass the setter down to a component over here and then you pass it to some kind of intermediate component that finally gets it to where it's rendered in the DOM.
[04:14:53] And
[04:14:53] This is a very simple example, but it's something that we've all seen before.
[04:14:59] And...
[04:15:00] That's right.
[04:15:02] comment on this. You can watch the talk yourself in more detail.
[04:15:06] But...
[04:15:07] side of the incrementer, you are going to mute.  I just explained it. Wait, OK.
[04:15:12] So he kind of like...
[04:15:14] built up
[04:15:16] this whole setup where he has a visual and then he presses the button in here and then you see it go down the side here.
[04:15:23] And he built it in each framework, right?
[04:15:25] And...
[04:15:28] I think this one's React.  I have this counter on the top that contains a wrapper.  Hit the button.
[04:15:33] That's because when the application first woke up on a client
[04:15:38] you know hydration egg. So basically the count obviously renders
[04:15:42] once initially because it hydrates when it renders the component. When it hydrates, it doesn't do any DOM, but it runs the component once.
[04:15:49] But then in React,
[04:15:51] When you press the button,
[04:15:53] It
[04:15:54] It...
[04:15:55] All of these went to two. Every single component. Because the state is owned at the top level component.
[04:16:00] Now,
[04:16:01] This is without adding memos or without adding like any of the performance stuff.  The default behavior for React is if you press this and the state's owned by the counter, every single component reruns again.
[04:16:12] Right?
[04:16:13] Then he did the same thing in Vue.
[04:16:20] and...
[04:16:21] In view when he ran it,
[04:16:23] is that
[04:16:24] That's a big...
[04:16:25] See if we can jump ahead a bit.
[04:16:28] in view,
[04:16:30] The incrementer knew not to rerun, but the other ones reran.  And to be fair, if you'd use memo in React,
[04:16:37] this is what would have happened.  You would have,  because this side doesn't change.  It just calls the set function.  It just calls the button.
[04:16:44] but then the other one's re-rendered.  So view default,
[04:16:48] Um...
[04:16:50] is very--
[04:16:51] is even though it has something like signals, it basically runs like this as well.
[04:16:56] He mentions later
[04:16:58] because
[04:16:59] Vue has context API.
[04:17:01] Um, and I guess, you know, people were,
[04:17:05] kind of unhappy with that.
[04:17:07] explanation, he showed that in view...
[04:17:10] if you
[04:17:11] If you
[04:17:12] use the context API, it was possible.
[04:17:15] to inject it so that only this component reran.
[04:17:20] When you press the button?
[04:17:22] If you continue on,
[04:17:24] He gets this felt.
[04:17:26] Right?
[04:17:27] I'm
[04:17:28] And he had to do like a little work here, but what I love about the...
[04:17:31] No, this isn't spelled.
[04:17:35] Yeah.
[04:17:36] Yeah, this is felt here, Capricapodemo.
[04:17:38] It was the same thing for
[04:17:42] The same thing for Svelte as...
[04:17:45] When he tried to show Svelte, it never showed it as rendering.
[04:17:49] because of the way he couldn't inject his code in a way that showed it.
[04:17:54] But when he opened the dev tools, he was able to go in and actually show
[04:17:59] that in Svelte it actually
[04:18:01] renders counter wrapper display. So it actually has the exact same behavior as view.
[04:18:05] funnily enough. And again, when you add
[04:18:09] stores to Svelte
[04:18:12] you can get that same effect
[04:18:15] of just updating the one component.
[04:18:20] Um.
[04:18:22] And then I think he jumps
[04:18:25] to solid.
[04:18:27] Right, and obviously as we know in Solid, it never...
[04:18:31] It never updates.
[04:18:33] It just renders once on Hydration and then updates and the component never reruns.
[04:18:38] Um...
[04:18:39] And then he finally goes to quick where it's the same,  except,  uh,  it's,
[04:18:44] Zero because it never hydrates in the first place. Anyways, um
[04:18:50] I think what I really liked about this example, and the reason I'm bringing it up, is...
[04:18:55] Svelte
[04:18:56] Most people assume that it behaves like, um,
[04:18:59] Solid.
[04:19:00] or even like quick to a degree.
[04:19:03] Um,
[04:19:04] And it actually doesn't.
[04:19:06] behaves more similar to the VDOM libraries like Vue.
[04:19:10] um
[04:19:11] It behaves like a VDOM library with automatic memoization.
[04:19:17] Because the state still belongs to the component and it...
[04:19:20] re-renders the components.
[04:19:22] It's not something that people can easily observe, so they assume otherwise, but it has the same structural
[04:19:30] chaining it
[04:19:31] of how
[04:19:32] things update.
[04:19:33] Thank you.
[04:19:34] Anyways, very interesting to see that in a talk. It's too bad that the visuals didn't do it. I would love this if we make that demo in a way that you could actually see the counters update accurately.
[04:19:45] But I think it got the...
[04:19:48] point of cross.  And this is...
[04:19:51] This is kind of partially what I talk about architecturally
[04:19:56] because he just made this demo up and it's very clear, without trying to optimize or using context or whatever.
[04:20:03] As you change the shape of your app,
[04:20:06] this characteristic doesn't change about certain frameworks.
[04:20:10] Actually, I think Solid actually doesn't change characteristics.  In some cases, Quick de-opts back into
[04:20:17] uh,
[04:20:18] Something similar to...
[04:20:20] view with
[04:20:21] context.
[04:20:23] And I think Preact is similar as well with signals, but
[04:20:27] Generally speaking...
[04:20:32] I like this talk because it really highlighted that like
[04:20:36] rendering with signals is actually different, more different than pretty much all the other solutions.
[04:20:47] Something I was wondering is why functions were chosen in class solos since the functions were basically constructors and return values as a render function.
[04:20:53] Um.
[04:20:55] Well, I used to use classes with Knockout, and this might be because there was no
[04:20:59] uh, in, uh, what is it called? Like initializer properties.  But my problem with Knockout was I just wrote all the code in the constructor.
[04:21:07] Like, I'd write some event handlers on the class, but generally speaking,
[04:21:11] all my code is in the constructor.  And I realize classes now have that shorthand  where you can declare the variables  on the classes directly, like class,
[04:21:19] properties or whatever.
[04:21:21] Um,
[04:21:21] I think was that ES-17?
[04:21:24] Um...
[04:21:25] But, like, it just made no sense from my perspective to...
[04:21:30] to
[04:21:31] Um...
[04:21:33] like have
[04:21:34] like all the separation when literally like pretty much all the code was in the  constructor.
[04:21:42] class fields yet.
[04:21:44] Thank you.
[04:21:45] Thank you.
[04:21:46] It was just funny.  Picture...
[04:21:51] I mean, somebody probably did, picture putting React hooks in a React class component.
[04:21:56] What happens to your component?
[04:21:57] all the lifecycle functions disappear,
[04:22:00] And you end up with just like all the code in the constructor and then like a couple of end handlers.
[04:22:04] And in JavaScript, the event handlers aren't even bound properly anyways, I don't think, right?  So like...
[04:22:12] You know what I mean?  Like, you basically weren't getting any...
[04:22:16] positive for being a class, like conceptually. It is interesting. I did have a conversation with Minko recently, from the Angular team, and he was like, "What if we came up with component syntax, not quite a function, not quite a class?" And I'm like, "Well,
[04:22:34] If that ever passed, I'd be, you know, like if that was a thing, it'd be interesting because then I would have a compiler, an analyzable entry point to components right now because we use functions.  It kind of feels weird to say like this is a component.  Like people feel like it's extra work.  If that was implied by the syntax, then that would be nice.
[04:22:53] But...
[04:22:54] That's the biggest...
[04:22:56] benefit I could see to that.
[04:23:02] Yeah.
[04:23:07] Come on, Dev. Not on this one. I had function components that had state way before Reacted.
[04:23:15] like years, like
[04:23:17] years and years and years before we acted.
[04:23:19] Thank you.
[04:23:20] Like...
[04:23:21] Like.
[04:23:23] Like three years before Hooks.
[04:23:28] Thank you.
[04:23:31] Thanks.
[04:23:32] You want me to... What do you got for me, Ben?
[04:23:40] Yeah, okay. I see what you're saying. Yeah, I think actually, I think having these class fields makes
[04:23:47] all the difference
[04:23:49] Um...
[04:23:51] Compared to...
[04:23:53] Compared to previously that being said,
[04:23:58] Meh.
[04:23:59] I mean, the "this" doesn't really matter.
[04:24:11] Yeah, yeah.
[04:24:13] I mean...
[04:24:15] Honestly, just getting rid of this...
[04:24:18] Like...
[04:24:19] like yeah I
[04:24:22] Thank you.
[04:24:24] I'm not, I don't know.
[04:24:28] Even in Coffee Trip, this was nice. It was an "at" sign. It was just like "at" something. It was like really short.
[04:24:34] And even then it's kind of like,
[04:24:36] And in CoffeeScript you just use fat arrows and it auto bind.  So in CoffeeScript, the stuff was really nice and I still chose functions.
[04:24:43] I don't know.
[04:24:44] I did before I didn't have this so
[04:24:47] That might have made a difference, you know.
[04:24:50] I mean, I was making these decisions like six, seven years ago.
[04:24:57] Mm-mm-mm.
[04:25:05] - Thank you.
[04:25:06] *laughs*
[04:25:09] That's all I did at first.  The thing is, we didn't do it first.  This pattern of composable primitives existed...
[04:25:18] Even
[04:25:19] like,
[04:25:20] It was the, yeah, it existed back way before even in JavaScript, you know, like stuff like nod code.
[04:25:29] - Thank you.
[04:25:29] uh...
[04:25:32] You guys joke about Marco did it first. I know it's funny, but like...
[04:25:38] It...
[04:25:39] It was like that alternate reality that Dan had in his talk where they're like,  Oh,  what if we just started with a server framework?
[04:25:46] Um,
[04:25:48] Yeah.
[04:25:52] Thank you.
[04:25:53] Yeah, putting everything in the constructor plus adding this, you know.
[04:25:57] Um, like it was just like double hit.  Anyways, um, Michiko's talk, um...
[04:26:03] It's cool.
[04:26:05] I...
[04:26:06] I think it's one of my...
[04:26:08] Like, it was really cool to hear talk about signals and about rendering performance signals that, like...
[04:26:14] I or someone from the solid community didn't do. Um, wider perspective of that. So I enjoyed that a lot. Okay.
[04:26:22] Um...
[04:26:23] Which leads us to, I think, the last story.
[04:26:25] which is a hot one. I think people are pretty stoked about this.
[04:26:29] Svelte 5
[04:26:31] Okay.
[04:26:32] Um, showing some very nice local...
[04:26:35] numbers here.
[04:26:38] Looking at the numbers themselves,
[04:26:40] There wasn't anything that I particularly stood out.  The select row performance...
[04:26:44] Actually
[04:26:45] is
[04:26:46] particularly stand out.
[04:26:49] I don't know why vanilla
[04:26:52] is slower than a thousand create.
[04:26:54] Actually, sometimes it is.
[04:26:57] In fact, I think if we go to the JS Framework benchmark right now,
[04:27:02] Um...
[04:27:06] 36.7 for familiar, 37.3.
[04:27:10] 35.8. Yeah, right now solids faster, which means we have to look when something else doing something slower and
[04:27:15] on that.
[04:27:18] I'm going to say that.
[04:27:20] In any case,
[04:27:22] Yeah, this select row is actually very, very, very interesting.
[04:27:26] The rest of this, it's hard to tell. You can always tell
[04:27:30] Well, here's an example. I like that he... this is how you show a benchmark because you use three points of reference. Let's find...
[04:27:37] Svelte.
[04:27:38] Today, where is it? Let it know. Keep on going. Svelte.
[04:27:42] Thank you.
[04:27:43] Right. 132.
[04:27:47] 104.
[04:27:52] 109.
[04:27:55] I wonder what happens if we do this.  I just...
[04:27:58] I'm just curious.
[04:27:59] Because I think one of the things...
[04:28:02] people don't
[04:28:06] I want to...
[04:28:08] Vanilla?
[04:28:18] I might inseminate.
[04:28:20] and svelte
[04:28:22] for.
[04:28:24] do that.
[04:28:28] Interesting.
[04:28:30] to
[04:28:32] What?
[04:28:33] Why is vanilla...
[04:28:35] A 104, that's so interesting.
[04:28:42] It must be that creation cost...
[04:28:45] Anyways, sorry, I'm getting kind of off the rails here.  What I wanted to say is,
[04:28:51] It is super, super interesting.
[04:28:54] to see Dom's work come. We were expecting this. He was working. I wonder if he did end up doing, using the Signal internal stuff. I'd love to have him on and talk about what he's been doing with Svelte 5 one of these days.
[04:29:07] Um,
[04:29:15] Well, exactly. Well, it's because people write the vanilla abstraction. Um,
[04:29:20] In fact, I
[04:29:21] I,
[04:29:22] I've updated it several times when Vanilla's gone too slow.
[04:29:27] Um,
[04:29:28] some of the work that I did in a solid
[04:29:30] Oh, I actually have one of those moments here. I remember when I got really excited about this. I haven't been posting about Solid's performance very much recently.
[04:29:39] But I remember the first time we got to the top of the JS Framework's benchmark was about five years ago.
[04:29:45] it's been about five years now.  And I,  but there was one moment four years ago where I just had to,
[04:29:53] printed off because
[04:29:54] Salt's
[04:29:56] When I started in the JS framework, the original solid implementation
[04:30:00] is called Solid...
[04:30:01] just called Solid, and it was their stores.  I didn't think anyone would want to use Signals.  So I actually...
[04:30:07] submitted
[04:30:08] with stores as the primary way of using solid.
[04:30:13] and
[04:30:14] Um...
[04:30:16] This was the split.  Like back then, Wasm was back here.
[04:30:20] and solid stores,
[04:30:22] Um...
[04:30:23] were up here ahead of a bunch of other ones.  And I just had implemented the signals implementation,  and he ran the results,
[04:30:31] and the signals showed up in front of Vanilla on average.
[04:30:35] And yeah, these were the official results.  I had to take a screenshot.  I was like, this is probably never going to happen again.
[04:30:42] again.
[04:30:45] But, um,
[04:30:48] The truth of the matter is sometimes there's bad runs,
[04:30:54] And sometimes...
[04:30:56] There's good runs.
[04:30:59] And...
[04:31:00] Honestly,
[04:31:01] This was just like one of those like
[04:31:04] Like...
[04:31:05] The position of these moves up to 0.03%.
[04:31:10] between every single
[04:31:12] run like right now I think Sol is 1.08 or 0.09. We've gone further from vanilla in recent history.
[04:31:20] But every, like...
[04:31:22] Every time...
[04:31:24] like there's a new version of Chrome, these things
[04:31:27] will shift.
[04:31:28] A little bit.
[04:31:29] so
[04:31:31] It's very hard to know where these things will end up officially...
[04:31:34] like when the actual runs happen.
[04:31:37] But, I mean, you can get ballpark because it only ever moves...
[04:31:40] plus or minus 0.05.
[04:31:43] Essentially.
[04:31:44] But yeah, after this, I went in and I changed the vanilla, um,
[04:31:54] Actually no, the vanilla is already updated here.
[04:31:57] I think this was just a poor run.
[04:31:59] For some reason,
[04:32:00] our swap rows ran really well
[04:32:04] that day and uh
[04:32:06] But it's not that even the stores version of solid was really good.
[04:32:09] Yeah, I don't know.
[04:32:11] It's interesting.
[04:32:15] Yeah.
[04:32:17] In general, vanilla has broken away further from the other frameworks now, as I was saying.
[04:32:26] Yeah.
[04:32:27] That was a fun moment when it was like, okay, we don't need to talk about performance anymore.
[04:32:36] The truth of the matter is like we were getting so slow that the preciseness of this is
[04:32:41] is getting within an era of accuracy.
[04:32:44] Vanilla is
[04:32:47] should be further and I think we did some more optimizations since then.  But generally speaking, we're at the end of this benchmark. It basically
[04:32:55] as long as you get up to the party,
[04:32:57] We're all just switching spots every time.  So Svelte 5 will join the party.
[04:33:03] And not just felt, um...
[04:33:06] Thank you.
[04:33:07] View Vapor, Views joining the party.
[04:33:11] Um...
[04:33:13] Right.
[04:33:15] We've just
[04:33:17] Always commending view on this jump, because Svelte's been about 1.3 since...
[04:33:22] forever. Vue actually came from back around where React is up to
[04:33:29] just in front of Svelte to getting all the way up.  So within the next year...
[04:33:34] ish. Basically, I imagine JS Framework Benchmark, all the popular frameworks
[04:33:40] um well maybe not except angular is probably still going to ways but yeah you're gonna have options um
[04:33:46] They're all going to be basically the same speed in that test basically right up there with vanilla JS. So
[04:33:53] Um,
[04:33:55] You know?
[04:33:57] You know, it's run its course.  We need new benchmarks.  We need new places.
[04:34:01] I mean, this is why Dominic, even himself, he said he wasn't interesting anymore.  He's like...
[04:34:05] even after Inferno, he felt like he'd gotten to that point.  Over time, that drifted, but like,
[04:34:11] It just...
[04:34:13] DOM updates in frameworks are now pretty much as optimal as we're going to have them with the current platform.
[04:34:32] Thank you.
[04:34:38] Yeah, I think...
[04:34:40] I think that's what's going on here.  I think he added a couple other compiler optimizations.  Maybe he'll get us by a couple of points at this point.  But generally...
[04:34:48] Yeah, I think everybody's kind of on the same page.
[04:34:52] I think he basically compiled, I don't know for sure, but what he was working on right  before he joined the Svelte team was a compiler that compiled React to...
[04:35:00] to basically
[04:35:02] what solid is. So everybody's just compiling
[04:35:05] to basically the same stuff we're doing
[04:35:08] Um,
[04:35:09] I mean, we knew it was going to happen.
[04:35:11] I mean...
[04:35:13] It's been like, what, six years? Five years? Five years? So...
[04:35:17] like performance is something you can never like sell on because like people  will catch up to you.  Like there's going to be a point at which you can't,
[04:35:27] you know,
[04:35:27] So.
[04:35:28] It was inevitable that after several years we would get to a point where other popular solutions would have similar performance. It's kind of cool to see that Signals is actually what's powering this.
[04:35:44] Cheers.
[04:35:45] Um, I need some peanut treats.
[04:35:50] *cough*
[04:35:54] Do you think React will be after the match?  I mean, they might move to a Signal's internal thing.  It was after Dom showed them that,  but I don't think that's what their interest is.  They have other things they want to...  I don't think they like...
[04:36:03] signals as their internals. We'll see what Forget ends up with.
[04:36:07] The interesting thing is like... I'm talking about how Svelte was... old Svelte, I guess, was similar to...
[04:36:17] React. React for Git
[04:36:21] If I was like a betting person, I was going to guess that it would end up in old svelte territory on the benchmark.
[04:36:29] But it's going to be an interesting thing as if Svelte and...
[04:36:33] view are up here now that
[04:36:37] You know what I mean? Like the game's already changed.
[04:36:41] But again, performance isn't everything.
[04:36:43] Thank you.
[04:36:48] Thank you.
[04:36:49] Yeah, I have, this is what happens when signals get popular like this and with Angular. I'm meeting with, I met already a couple times, I meet with more browser people, they want to talk to me about how to put signals
[04:37:00] in the browser. It's interesting. I think there's some potential there, but I'm more interested on the primitive pieces. There's a whole, there is a real problem at the core of signals and I don't know how to solve this.
[04:37:14] But if...
[04:37:15] It's interesting.  If the runtime...
[04:37:17] mechanism gets close enough to the idealized compiled mechanism, I think things could get interesting.
[04:37:24] So that's what I'm gonna push for.  I don't want a full signals implementation.  I just want the code to make it possible
[04:37:30] conceptually to have the compile meet where the runtime ends.
[04:37:34] Because...
[04:37:35] Like, there's a reason we chose functions in solid.  Like, a huge reason why we chose functions in solid.  And...
[04:37:41] I'm worried that
[04:37:43] all the fancy compilation loses that, or then you have zones, and then you're like, I'm in a component. This only really works
[04:37:49] If you can get to a point where the runtime
[04:37:54] DX
[04:37:56] and the compile time DX can be basically the same, except the compile time can be slightly optimized.
[04:38:02] If that makes any sense.
[04:38:03] Because...
[04:38:05] Like...
[04:38:07] Otherwise, we're going to be dealing with inside and outside the components for the rest of our lives. I mean, that's my biggest
[04:38:13] reason why I haven't pushed that degree.
[04:38:15] We could...
[04:38:17] I get the feeling like we could...  If we cared about something like React, forget...
[04:38:23] we have a lot of compiler wizards, you know, people like Alexis,
[04:38:27] He wrote up his own react forget forgetty, but I think it's actually easier if you make signals your target  so I like
[04:38:34] if we wanted to go into that, but I actually have concerns because now you're off now you're introducing two zones, right? You have your like
[04:38:41] in the component, out the component. And, and like,
[04:38:45] Um...
[04:38:46] It's why I think Vue dropped the whole ref sugar
[04:38:49] stuff because
[04:38:50] Like if you want to have that control, you need to be able to like,
[04:38:54] There's a reason they had dollar signs and dollar dollar signs and stuff and like...
[04:38:59] It just isn't good, right? We need to...
[04:39:03] get to a point where
[04:39:05] our compilations
[04:39:08] you know,
[04:39:10] Yeah.
[04:39:12] Yeah.
[04:39:17] Anyway, um...
[04:39:19] I think this is exciting because I think this...
[04:39:23] Um,
[04:39:26] It's like it normalizes the conversation between all of the...
[04:39:33] React and everyone else this is part of that like
[04:39:36] ganging up on thing that I see that's happening. Um, this continues this narrative, um,
[04:39:42] Because
[04:39:43] The ironic part is...
[04:39:45] There's a bunch of people who are like, you know, React's like, we'll solve everything with this compiler.  And people are like, yeah, when's this compiler going to come?  Well, the problem is you've got the existing...  Like, React's a big thing.  It can't move as fast.  So, like...
[04:39:55] they could be moving light speed and you know, people like the compiler,
[04:40:00] It's going to take a while.
[04:40:02] If--
[04:40:03] If...
[04:40:05] Svelte.
[04:40:05] Goes, oh yeah.
[04:40:07] you know, we've improved this too.
[04:40:10] these kind of like one day things, you know, how, how long,
[04:40:16] is it,  you know,  Svelte actually has a really great argument.  Cause like people can't,
[04:40:20] say that they're a new framework.
[04:40:22] because they actually open sourced in 2016,  which I didn't.  I never thought that things would go here.  So Svelte can be like,
[04:40:30] Like...
[04:40:31] they've already been around for seven years.  Like at a certain point,  it's like,  do you trust Svelte after 10 years?  Like,
[04:40:39] Still waiting on React Forget maybe? I don't know. Like, so...
[04:40:43] It's interesting. I think this shifts the dynamic of the performance conversation again.
[04:40:48] That being said, I think this benchmark is basically done. I love it.
[04:40:51] It's I spent years early up till that
[04:40:55] thing about four years ago.  I spent the first few years...
[04:40:58] pursuing it.  I know lots of people have introduced to our community through their own  pursuit of that.
[04:41:03] you know,
[04:41:04] Um...
[04:41:07] But yeah, we're getting to a point where this has just run its course.
[04:41:10] Which is good. That's what I did. It got every JavaScript framework faster.
[04:41:25] We'll see. If we were done...
[04:41:29] But the problem with Jamstack is...  I think Jamstack lost the vision.  I think...
[04:41:35] I think there's still a battle over the role of components.
[04:41:40] I...
[04:41:45] Thank you.
[04:41:47] Yeah, I mean, it's interesting. I think the thing is, I think libraries, like effects,
[04:41:53] and scheduling effects doesn't belong in the core implementation, which is odd.
[04:41:58] We just want signals and computers or memos or whatever you want to call them to be part of the core.  But the problem is I don't even care about that as much as...
[04:42:06] I was hinting at it.  I want...
[04:42:09] And I don't know if it's possible.  I want to not have to use
[04:42:13] functions, ultimately. That's the thing
[04:42:16] that gets people. The only challenge with that obviously is
[04:42:20] Expressions are still a consideration, like Svelte has dollar sign, whatever.
[04:42:25] So,
[04:42:27] I mean, I've thought about this forever. Like, I wrote an article a few years ago where I was basically describing
[04:42:37] largely similar to the work that I theorized
[04:42:41] what very similar to the work that Dom ended up doing with-- before I joined the Svelte team, where I was like, "Okay, what if we just used a compiler?
[04:42:50] I think I did a whole stream on this too called about SolidScript.
[04:42:56] Um...
[04:42:58] Yeah, I don't even know why I'm looking in here, it doesn't matter.
[04:43:00] You can go also check out the stream on YouTube.
[04:43:05] Channel
[04:43:10] I should just go to the oldest ones here.
[04:43:13] I did a whole...  Where is it here?  Yeah.  This one...
[04:43:17] uh
[04:43:18] This one, SolidScript using compilation for syntax.  I did a whole...
[04:43:23] I don't know, three and a half hour stream on
[04:43:26] on this subject.
[04:43:28] Um...
[04:43:30] I feel like it was one of my earlier streams. What is this one?
[04:43:34] This is a year ago. When was it? March 18th, 2022.
[04:43:39] Thank you.
[04:43:40] And a year before that, I'd actually written the article on this.
[04:43:48] Thank you.
[04:43:57] Thank you.
[04:44:09] -
[04:44:10] One thing that got me to think that we could
[04:44:13] "Do This Base" is the work that--
[04:44:16] Milo's been doing with
[04:44:19] bubble reactivity that he was doing at Bubble where he basically wrote a whole implementation and Bubble has a different effect rules than solid for their internal reactive system. You know, they use solid too and they work together and we realized if we could share
[04:44:32] the signal and computation primitives
[04:44:35] Thank you.
[04:44:35] then all the reactive libraries would have interopped.  I think the problem, like I know Starbeam tried to do this before.
[04:44:44] and like the Ember community and they said they'd universalized and you know,  RX and call bags and all this kind of stuff.
[04:44:51] Um,
[04:44:52] So I don't have my hopes up high for a non-browser initiated universal verse
[04:44:58] approach.
[04:45:00] And I know like Angular had their different needs of how propagation works, so everyone has their different opinions.  But I do believe that a small enough library that was packaged with the core stuff,
[04:45:10] could power a lot of implementations if they didn't care
[04:45:13] about the specifics of those details because the performance is good enough.  Like the internals at that point are not
[04:45:21] are basically internal implementations. They're not execution guarantee things, they are just
[04:45:26] Like...
[04:45:28] How do you mark the nodes like they're all that kind of stuff their performance consideration if you told me that you had the I
[04:45:35] API that Milo
[04:45:37] put together their...
[04:45:38] And...
[04:45:40] the same functionality,
[04:45:42] and it was faster and done with a different marketing approach or whatever,  I'd just take it.  Do you know what I mean?  If the browser was just like, this is the thing, I would take it.  The biggest thing is that...
[04:45:52] Um...
[04:45:53] we had to put some stuff in the core that's not commonly core in a lot of reactive frameworks.  So we have some slightly different opinions there again.
[04:46:01] Um,
[04:46:02] But...
[04:46:03] uh,
[04:46:05] especially handling async.  A lot of synchronous signal systems don't have async.  The core for Solid 2.0 naturally handles async.
[04:46:14] Um, um,
[04:46:17] And...
[04:46:18] I think...
[04:46:19] Thank you.
[04:46:20] At that level,
[04:46:22] All the other stuff could be made completely like framework agnostics, even the running of side effects.
[04:46:27] scheduling
[04:46:29] Because once you pull the effects out,
[04:46:32] That means you can do stuff like suspense and user land and whatever. Not user land, but
[04:46:37] outside of that core.
[04:46:39] Or you can do like a lot of the other mechanisms.
[04:46:52] Components are a state of mind. I'm just catching up.
[04:46:55] Your state of mind is pure overhead.
[04:47:02] Oh.
[04:47:04] You saw that, yeah. I mean, this was when I was trying to do dev rel type stuff for Marco, and I shelved it because I felt like I wasn't adding anything any new.
[04:47:12] for the conversation.
[04:47:14] Git syntax.
[04:47:18] Okay, what's this?
[04:47:20] I am always interested to see...  Funny thing is sometimes there's like proposals for syntax...
[04:47:28] Yeah, yeah, the object getters you're talking about.
[04:47:32] Yeah, object getters are fine for objects. The problem is you need a primitive that's not an object. I need just an atomic value and I have to, like, I'm not going to go dot value. Like that doesn't work because it doesn't compose. Like,
[04:47:42] Uh,
[04:47:43] - Yeah.
[04:47:44] But like
[04:47:45] The reason solid is largely the way it is, is because...
[04:47:49] You can have count.
[04:47:51] And then you can have...
[04:47:54] count expression
[04:47:57] And
[04:47:59] whatever, count...
[04:48:00] times 8 and
[04:48:03] these
[04:48:06] basically have the same signature.
[04:48:08] So the fact that we
[04:48:10] Did this doesn't
[04:48:11] matter like it
[04:48:14] like, you don't suddenly change it.  However...
[04:48:17] count.value
[04:48:19] Like, this is, the function is the only way to pass this around.
[04:48:23] unless you want to use another prunive.
[04:48:24] and
[04:48:26] I like the idea of...  The problem is create memo...
[04:48:32] has meaning. Like it's a computation. It means that
[04:48:35] this node recalculates.
[04:48:37] Making reactivity transitive requires wrapping in a function
[04:48:41] Um,
[04:48:44] if you're not going to pass and even you need to pass it a function,  even to pass it into the memo call.  Do you see what I'm saying?  Like,
[04:48:50] Like,
[04:48:54] Yeah.
[04:48:54] This is why I don't like getters.
[04:49:01] But...
[04:49:01] What if we had an atomic getter? So you could just say,
[04:49:06] You could go like const,
[04:49:09] Let's not const it.  Let count equals...
[04:49:14] something new atom okay and what if the way an atom worked is if if
[04:49:20] Essentially, you could intercept.  So essentially...
[04:49:24] Kind of like a proxy.
[04:49:25] Could be like, get.
[04:49:29] Set.
[04:49:32] Okay.
[04:49:36] Now, the challenge with
[04:49:38] with this atom that I'm designing here.
[04:49:41] so to speak.
[04:49:42] is that...
[04:49:45] Even if we could intercept
[04:49:47] This
[04:49:49] Well...
[04:49:51] An assignment might look like this. Count equals five. Okay.
[04:49:55] Great.
[04:49:56] Um...
[04:49:58] Uh...
[04:50:00] But how do you read a value?  So if you wanted to say count...
[04:50:04] Expression.
[04:50:06] Whatever.
[04:50:07] equals
[04:50:08] Um,
[04:50:10] I...
[04:50:11] Like you change the signature again.
[04:50:13] Unless you had a way of being like,
[04:50:20] The biggest challenge here is even if you had an atomic getter, every place you used it like this,
[04:50:30] would be a read.
[04:50:31] essentially. So you could never pass the signal
[04:50:34] only pass the value. Now I like that. This is the same reason
[04:50:39] why
[04:50:41] Cool.
[04:50:41] we call count when we pass it. We don't pass the signals around, but it makes it hard for composability of
[04:50:48] of uh
[04:50:49] of like
[04:50:51] Now I have...
[04:50:53] local storage count.
[04:50:54] right so it's like const
[04:50:57] count
[04:50:59] equals create
[04:51:01] locals
[04:51:03] local
[04:51:05] local signal or whatever.  Like what I'm getting at is
[04:51:09] Thank you.
[04:51:10] how do you compose these if they can't escape the scope? And Vue's RefSugar came up with a bunch of special operators for this stuff from a compiler standpoint. But
[04:51:21] Like...
[04:51:23] The reason that this is attractive to me, that if we could actually read and write like this,
[04:51:27] We use...
[04:51:28] other than the transitive property of the function transport, which is less obvious, is that
[04:51:33] then moving between this and compilation,
[04:51:37] would be...
[04:51:39] Like we could basically always fall back to this as the expected behavior, even if compilation didn't work. So sure, we can only optimize compilation in a component, not elsewhere. Well, it's fine. It's still...
[04:51:49] It still works.
[04:51:51] Um...
[04:51:53] Because that's the thing. Why do people hate the DX? Or why do people first Svelte's DX?
[04:51:59] to, um,
[04:52:01] to say solidsdx sometimes. And the biggest argument is because you've got to freaking call things as functions, right? People are like, "Oh, I don't like calling as a function."
[04:52:09] But the function is...
[04:52:10] essential to understand the wrapper unless you're like, "Well, no, I can use dollar sign," whatever. But the dollar sign is a fixed point.
[04:52:20] It's not transitive or it doesn't move outside of the component. You can't transport it.
[04:52:26] So like
[04:52:28] -
[04:52:31] Yeah.
[04:52:32] Sorry.
[04:52:34] I think this is the challenge
[04:52:36] Um...
[04:52:37] here in Y functions are a good choice, but it's also...
[04:52:42] Like,
[04:52:44] Where the tension of this compiler stuff comes in.
[04:52:47] Because people like to pretend, and that was like the point of my article way back, people like to pretend like they're not
[04:52:52] dealing with this and they're just writing some rules, but
[04:52:57] Like...
[04:52:58] A let in Svelte is not a let in JavaScript.
[04:53:02] Thank you.
[04:53:06] Sorry.
[04:53:07] I see I had the comment up too long.
[04:53:13] No, but it's like... soon.
[04:53:29] Sorry, I missed the guys not seeing the stuff.
[04:53:41] They were building smaller projects as well.  Yeah, I mean, that isn't even...
[04:53:46] Necess...
[04:53:47] I mean, smaller than React, but not smaller than other...
[04:53:51] things like today solid is smaller than Svelte as long as you have three components in your app.
[04:54:04] Vobie's approach is...
[04:54:06] Interesting. I mean, that's what compilers output.
[04:54:09] Like...
[04:54:10] Having a special read function that you import and then use everywhere is
[04:54:14] to wrap every access is basically like what Marco's compiler output looks like.
[04:54:19] Um...
[04:54:20] So like if you're going from a basic syntax
[04:54:23] to that
[04:54:24] That would be the trick.
[04:54:26] Um...
[04:54:30] It's fine. I mean, you decide for yourself if you like doing that.
[04:54:43] Anyway.
[04:54:46] Yeah, I mean that was a great tangent. I appreciate you guys all getting in on that.
[04:54:51] conversation.
[04:54:53] It's...
[04:54:54] It's funny, I don't even remember how I got into talking about that. Yeah, we were talking about the new Svelte compiler stuff. Yes, I think Svelte 5 is going to be interesting.
[04:55:03] It sounds like they're in on in,  which is,  I'm excited about because when Dom joined the team,  I could tell he,  you know,  not him,  but I,  in the past previously,  he'd had,  you know,  maybe some reservations.  That's like Svelte likes its things and he,
[04:55:17] he's coming in a bit out of right field,  but I think...
[04:55:21] I think his influence is going to be felt in the next version, which I'm pretty excited for.
[04:55:27] I think
[04:55:29] the problem of composability in compile solutions
[04:55:33] is challenging.
[04:55:34] And
[04:55:37] I'm not even sure that a browser
[04:55:40] primitive can help us there, you know, all the way just because of like,
[04:55:47] like all the
[04:55:50] Like I kind of really want that atomic getter
[04:55:52] But I just don't know...
[04:55:55] having something not composable almost defeats the point.  Like, I just don't...  It's almost like you need it to be...
[04:56:02] part of the syntax itself, but then it's like type system almost like because you're almost like saying like,
[04:56:07] If I have, sorry, this is back to that, like if I have my count now being, you know,
[04:56:12] local...
[04:56:14] create local count,
[04:56:17] Like...
[04:56:19] You guys might be wondering why I'm not using a setter in this simple example.  Well, the reason I don't is because...
[04:56:27] Because the...
[04:56:29] Getter can't escape the template anyways.
[04:56:32] having a setter doesn't actually...
[04:56:36] matter as much, um,
[04:56:38] Do you know what I mean?
[04:56:39] Uh,
[04:56:40] But...
[04:56:42] Because you'd have to pass a function, set her down anyway.
[04:56:45] Like, you'd have to, like, on click be like...
[04:56:49] You know, it's not here anymore. Oh yeah, here.
[04:56:51] you'd have to be like count plus plus. Like there's no way around
[04:56:55] you couldn't
[04:56:56] But what I was getting at here is like how, if inside here it creates a signal, how do I indicate that this is a signal?
[04:57:04] of that style. You'd need like another
[04:57:07] It's basically the rough sugar...
[04:57:09] stuff all over again.
[04:57:11] But how could the engine know this?  It would have to be typed information.  Like it's basic.  Types might be our only way out of this.
[04:57:19] Honestly.
[04:57:20] The perfect way to solve this might be a sufficiently smart type system.
[04:57:26] But...
[04:57:27] TypeScript isn't going to be that because like
[04:57:29] I can't even if you watch my stream on TypeScript about that, like
[04:57:34] Like,
[04:57:35] The fact that we can't do this,
[04:57:40] you know,
[04:57:41] is
[04:57:43] Okay.
[04:57:44] is killer, right?
[04:57:48] I don't have the right types right now, but you get what I'm saying.  The fact that we can't do this, the fact that this is a second function call, so it doesn't know that it's non-null.
[04:57:58] Um...
[04:58:00] means that like
[04:58:02] Like we're a way, a bit away from TypeScript being that.
[04:58:07] It's why I was excited about Esno, because you could tell the author was
[04:58:12] basically a framework author trying to invent a TypeScript and that made sense for frameworks.  But he's also a university student who's in school...
[04:58:20] you know, eight months of the year.
[04:58:23] and
[04:58:24] trying to get people to adopt a different type system other than TypeScript or new language.  That's a whole other topic. That's craziness. You think replacing React is hard.
[04:58:33] Try replacing TypeScript. Huh.
[04:58:44] Yeah, so it's the talk of the better web, but I mean...
[04:58:47] Wasm is
[04:58:49] No offense, Greg. I'm not thinking Wasm is going to be general purpose enough for the
[04:58:53] thing
[04:58:59] Yeah.
[04:59:02] You need a virgin... maybe, yeah.
[04:59:09] Anyway.
[04:59:11] That is it for my stream today, I think.  I think we are all done.  I think it is 5 p.m. on a Friday evening now,  and I am done talking JavaScript.
[04:59:22] to you this week.
[04:59:24] We'll see what I do next week, I'm not actually sure.
[04:59:28] But I'm sure there'll be something interesting going on.  There always is.
[04:59:33] Anyway.
[04:59:35] Have a good one, everyone.  Let's see, is there anyone to raid?
[04:59:38] I'm like the worst at rating.
[04:59:40] Um...
[04:59:43] Yeah, I know no one anyways.
[04:59:46] So...
[04:59:48] Yeah, I'm just going to sign off then.  All right.
[04:59:50] See you all. Thanks for joining.