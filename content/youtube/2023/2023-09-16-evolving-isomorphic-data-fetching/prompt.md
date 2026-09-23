---
title: "8ObxzMSIqKA"
slug: "8ObxzMSIqKA"
duration: "4:44:23"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/8ObxzMSIqKA.m4a"
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
[00:00:01] Hello everyone and welcome to my stream today.
[00:00:04] Yeah.
[00:00:05] How's everyone doing?
[00:00:07] It's been...
[00:00:09] It took me a bit to figure out what I wanted to cover this week. It wasn't particularly obvious
[00:00:16] - Thank you.
[00:00:17] But yeah, we're going to try something a little bit different here. I mean,
[00:00:22] Yes and no.  I wanted to look at some problems...
[00:00:28] I've been kind of working through the last little while with designing future features for Solid, but in general, just looking at this whole kind of space.
[00:00:38] Mm-hmm.
[00:00:39] So
[00:00:41] This stream will depend a lot on audience participation, hopefully,  so I can explain stuff clear enough.  I think we're going to do a lot of Excalibur.
[00:00:50] But yeah, I want to kind of present this problem  because it's a tricky problem.  It's the reason why React...
[00:00:58] appeared externally to release no features for five years.
[00:01:01] They were working on this very difficult
[00:01:05] The problem of data fetching
[00:01:07] And it touches on
[00:01:10] really every aspect of
[00:01:12] of everything but yeah before we get started let's just uh welcome everyone to the chat come say hi
[00:01:16] you know
[00:01:21] Yeah, thank you. Yeah, what time is it in India right now?
[00:01:26] No, now it should be 12.30.  I think India is 12.5 hours ahead of me.
[00:01:30] Yeah.
[00:01:32] Thanks everyone for coming along.
[00:01:39] I'm rewriting my React as a solid since around a week. Cool. Well, you're still in the honeymoon period right now. I hope it's going good.
[00:01:46] Hey, Kelvin.
[00:01:47] Hey.
[00:01:48] A surprising number of people. See, I honestly wasn't sure what the reception for this kind of stream would be, but this has had the highest pre-watch sign-up rate of any stream that I've done in the last few months. I think I've had a couple that were around the same number, but it seems people are stoked for this, so let's...
[00:02:07] Let's not try and not disappoint.
[00:02:09] 9:00 p.m. in Denmark. Yeah, I know it's always hard for Europe, but at least this is better than when I used to stream at 8:00 p.m. Pacific time.
[00:02:16] Because that was like...
[00:02:19] Basically, if you weren't in North America, you weren't watching it.
[00:02:23] And even then, if you're on the East Coast, you're like, why am I watching this at midnight?
[00:02:30] Haha, nah, um...
[00:02:34] I've got a couple good guests coming up.
[00:02:36] in the future too. I love my guest streams. I always get to learn a lot of stuff
[00:02:42] in those streams from other people,
[00:02:44] I'm actually a little bit disappointed. The viewership on my last stream isn't as high. I look back and I was like, wow, this is actually
[00:02:52] I like the stream a lot, one of the better streams in a long time. And the viewership really isn't reflecting that.
[00:02:59] I guess not as many people are familiar with NJS or maybe Puya himself.
[00:03:04] good stuff in that stream from my perspective if you're like interested in like understanding the building blocks of framework and like what
[00:03:12] pieces are available to you.
[00:03:14] Thank you.
[00:03:15] Very intriguing thumbnail image, yeah. I feel like maybe I took a bit out of Theo's book, you know, lead with the get server side props, stay for the real stuff.
[00:03:25] Thank you.
[00:03:26] Thank you.
[00:03:29] It's not isomorphism, I do Pascal that time here. Well, maybe I should have said isomorphic JavaScript.
[00:03:37] I'm still-- I will prefix it there.  I am still very much--
[00:03:42] in a zone because of the hydration problem, which we might touch on a bit today, where you basically only can have to run for these declarative frameworks to work on both sides efficiently. You need to have JavaScript on both sides. I'm not saying your whole back end has to be JavaScript, but you need it.
[00:03:59] You need to be...
[00:04:01] be able to render the component, whether it's only once on the server, like in ResumeAbility's case, or, you know, have a good hydration. But both of these require an application to get bootstrapped at least once. And that means you need JavaScript.
[00:04:18] on the server at a minimum.
[00:04:20] Which is hard.
[00:04:22] Because I understand the the
[00:04:25] the complexity there or the thing. And that's why, you know, people talk about stuff like HTMX.
[00:04:30] Like, unfortunately, like from my perspective,
[00:04:32] I mean, it's fine, but it also is like,
[00:04:35] It doesn't solve anything...
[00:04:36] that I care about. Um,
[00:04:39] I understand that there's this real tension here because not everyone has the ability to run JavaScript everywhere.
[00:04:49] Thank you.
[00:04:52] Did the stream die? I hope not. Did the stream die? Someone tell me if the stream's dead.
[00:04:59] *laughs*
[00:05:00] I'm still getting comments, at least for now.
[00:05:04] Thank you.
[00:05:05] Thank you.
[00:05:05] Something up with Twitch? Let me go to Twitch.
[00:05:10] Okay.
[00:05:11] It's confusing.
[00:05:13] parasocial because you have like both logins right now one on right one on uh
[00:05:18] Twitch and one on...
[00:05:21] YouTube?
[00:05:24] Okay.
[00:05:27] Okay, well, I'm glad people are here.
[00:05:33] Yeah, no, the NJS stream was good.
[00:05:36] I...
[00:05:36] Quite liked it.
[00:05:40] Yeah, I guess that's the European schedule. You're a trooper.
[00:05:47] - -
[00:05:53] Yeah, I'll see when we have, when's a good time. I mean, obviously I talk a little bit in my VEAT talk, but also,
[00:06:01] Next week, we do have a guest, Nikhil Sarif, will be joining us again to talk about
[00:06:07] precisely this. So I think next week is when you're going to get the goods.
[00:06:13] Very interesting. Yeah, well, I released an article this week, and that's
[00:06:18] not unrelated to the topic that we were covering today.
[00:06:22] um,
[00:06:23] Well...
[00:06:24] Yeah, we're doing good with chat here. I should actually tell people that we're live.
[00:06:28] just a second
[00:06:30] But yes, good job, chat.
[00:06:33] I want to...
[00:06:35] I keep this talking up because then you know I won't the greatest danger of a stream like that what we're doing right now is that I just get lost in my own train of thought and no one is following or maybe I forgot the turn the audio on like last time. So when I came back. So yeah, let's let's see here. Let me.
[00:06:55] Quotrid
[00:06:57] And I'm live. And then I'm going to say,
[00:07:00] Twitch.
[00:07:01] TV
[00:07:03] Slash Ryan Solid.
[00:07:06] All right.
[00:07:10] All right, cool.
[00:07:12] That should be good.
[00:07:16] Thank you.
[00:07:17] Um...
[00:07:23] Well, okay. Okay. Yeah. Greg's got a good point. When I was thinking about JavaScript on the backend, you just need to have the same language on the server in the browser. So...
[00:07:32] WASM is another way for us to escape
[00:07:37] um, the state we're in, so to speak.
[00:07:42] There's challenges for Wasm as a universal solution.
[00:07:47] But I mean, hopefully we find a solution there, because honestly, like, I feel like that's part of the point of Wasm. We've been locked in on JavaScript.
[00:07:56] in an
[00:07:57] Undeniable way like I
[00:08:00] It's so much to the point that I understand why people have other needs.
[00:08:05] But it's at, you know, and like you have other setups and there's people reasons and organizational reasons.  And I've seen it, you know, maybe security reasons, maybe all that.  But from like a pure like...
[00:08:18] like end user impacting efficiency standpoint, you need JavaScript on your back end.
[00:08:28] Right now.
[00:08:30] So, I mean, it's this unfortunate truth.  There's no point...
[00:08:37] pretending that isn't the case, but...
[00:08:40] I think it's a problem.
[00:08:42] I wrote an article last year about that actually. What was it called?
[00:08:46] the JavaScript paradox.  Like the only way to actually use less JavaScript  is to write more stuff in JavaScript.
[00:08:54] That's how inbred...
[00:08:56] JavaScript has gotten.
[00:09:00] I'm just posting this down to chat so you can see that if you haven't.
[00:09:14] Don't feel ashamed about Friday night.
[00:09:19] But yeah, no, I'm glad people are here.
[00:09:25] Okay.
[00:09:27] Yeah, I mean...
[00:09:29] And some large companies do this.
[00:09:32] Part of...
[00:09:33] the Wiz solution at Google.  For those who don't know, Wiz is like the super performant,  the thing that powers Google search and Google photos.  You know, it's an internal framework, but it's like, it's,
[00:09:47] It's resumable, it's partial hydrating, it's very smart, a little bit clunky to use, so I hear.  But part of their pipeline includes compiling Java to JavaScript.
[00:09:58] So like there are large companies looking in this zone.  I know eBay also had a Java backend and was looking at this kind of stuff too.
[00:10:07] But largely eBay ended up moving completely to Marco, but I
[00:10:11] I'm not.
[00:10:12] Thank you.
[00:10:14] Thank you.
[00:10:18] Thank you.
[00:10:19] What about stuff like Astro? I mean, I don't mind talking about this for a few minutes before we get started on the main topic, but yeah, I've thought about stuff like this. Like you're saying like the rapper could have been written in a different language.
[00:10:31] as I think
[00:10:33] Who is it tipped me onto it? Kelvin, um,  to me off to something called inertia. And there are, uh,
[00:10:40] frameworks that are kind of astro-like where you write your back like the outside in a different language, but then still use your React or Vue components or whatever.
[00:10:51] Svelte components or whatever. We were talking about doing a solid integration. So you kind of get that kind of
[00:10:56] thing and that kind of makes sense the
[00:10:58] thing is what makes astro good isn't that it can embed some client components inside a template like
[00:11:04] Everybody on the server can do that to a certain degree.
[00:11:09] It's that those components also render on the server.
[00:11:14] which needs JavaScript.
[00:11:16] Otherwise, throw a web component on the page and call it a day.  We've been doing that for a decade.
[00:11:20] with polyfilset, to be fair.  But, like, you could do it other ways, right?  Once we, the problem is once we had declarative JavaScript,  we suddenly have this kind of fighting thing.
[00:11:31] you know,
[00:11:32] Nature of it, right? I think I showed in a previous stream the double templating dueling. We don't have to go back there again  So like the big part about Astro was that it did run this JavaScript on the server. I know inertia has been looking at  Doing that where they can have like a PHP or
[00:11:48] back end and then kind of like
[00:11:51] what's the term, but like, um, delegate to a JavaScript process to render the islands.  Cause what's cool about this and in a server component world is you almost never need to
[00:12:01] go to that JavaScript thread except for on that initial render. We'll talk about that today because it is very impactful for the solution that we're looking at here and the problem we're looking at here.
[00:12:13] Yeah.
[00:12:14] Hey. Alright.
[00:12:18] Remix deployed V2 on Friday night.  Yeah, I didn't...  Was there a release post?  Um...
[00:12:25] uh,  this week.  I didn't actually see it.  I,  I,  I kept on seeing like the,  like,  like,
[00:12:28] migrating to two references in their docs, but I haven't actually seen the big release.
[00:12:35] drop TS from solid. We did that. We talked about that last week. Yeah, back to CoffeeScript.
[00:12:40] - Thank you.
[00:12:40] Yeah, I mean, if you saw my talk, you know, maybe that's why me and DHH can relate a bit, right?  He loves...
[00:12:48] Ruby, I really loved CoffeeScript. CoffeeScript and Ruby are like
[00:12:52] best friends. They're almost like what JavaScript would have been if it was more Ruby-like. And
[00:13:01] I get it.
[00:13:02] his dislike and preferences, but I don't
[00:13:06] Get it. Like...
[00:13:08] Yeah, that's what it meant to be for. I don't think it's
[00:13:10] reasonable
[00:13:12] as an API
[00:13:14] or library author to
[00:13:16] expose, you know, like just make your own preferences, override the general benefit to the wider community.
[00:13:30] Thank you.
[00:13:31] This only works if you watch Jason serialized props in the islands.  Yeah.  Yeah.  I mean, we have to serialize that anyways to, for hydration in the client.  So yeah.  The serialization is, is, is real.
[00:13:42] Have I seen the Leptos UI Rust framework? I guess you'd like it. Yeah, definitely. And
[00:13:50] here's the author of Weptos right here. Yeah, I had a great stream with Greg.
[00:13:58] almost a year ago. And he taught me Rust in the process.
[00:14:03] So that was a lot of fun. And obviously I love the reactivity bits.  I love the solid star dish bits. It was,
[00:14:10] It's honestly my most successful stream to date.  I think it has over 35,000 views.  Um...
[00:14:18] I don't know. I'm not Theo. I'm not usually watching that like a hawk.
[00:14:23] Let's see if I can...
[00:14:26] I mean...
[00:14:28] Cheerier.
[00:14:29] Tire screen.
[00:14:31] Whatever.
[00:14:32] Like trying to remember
[00:14:37] Yeah.
[00:14:39] Where are we?
[00:14:41] popular, there we go
[00:14:43] Yes, almost 40,000 views here. You should definitely check this out if this is your interest area. Greg has some other streams explaining how Wasm and Rust work with Leptos, and they're all worth watching. He is an amazing teacher.  Yeah.
[00:15:01] I'm just going to throw a link in here.
[00:15:03] Um,
[00:15:05] All right.
[00:15:12] Do you know how? Yeah, I was, again, very lucky. I don't know why I keep on closing this down.
[00:15:18] I had Matthew Phillips from Astro on two weeks ago, and he explained exactly how this worked. Let me go to my channel again.
[00:15:27] Live...
[00:15:29] Right here.
[00:15:30] Um...
[00:15:31] Building Astro with...
[00:15:33] and again I'll drop a link but
[00:15:37] Hopefully for the beginning of the stream. Why has it got a time stamp on it? Um, anyway, uh, Matthew Phillips explained exactly how
[00:15:44] this works. The basic part of it, and I actually talked a bit about it in my article today, or that I released yesterday, rather, is that
[00:15:54] .
[00:15:55] When the new HTML comes in, it's very much like turbo or like...
[00:16:01] us.
[00:16:02] like a hyper, what's it, flamethrower,  where it swaps in the content,
[00:16:09] But then because they have matching IDs,
[00:16:13] Anything that was in the page previously that matches the ID, it uses a query selector all and literally just like replaces the element.
[00:16:20] Um.
[00:16:21] Very simple mechanism based purely off
[00:16:25] being able to generate unique IDs at render time.
[00:16:33] Thank you.
[00:16:36] Thank you.
[00:16:39] Here, yeah, Kelvin's got the scoop on inertia. It makes the boring JavaScript stack possible. Is JavaScript in the back end with sales in the front end with you? Yeah.
[00:16:47] Thank you.
[00:16:48] So, yeah, it kind of allows...
[00:16:52] this
[00:16:54] uh,
[00:16:55] place where you can have, um,
[00:16:58] kind of like client
[00:17:00] Islands more or less.
[00:17:03] I haven't looked at it too closely.  I think one of the challenges here is the exact same challenge  that something like Astro faces when adding client-side transitions.  In fact, my understanding is
[00:17:14] while you have these client-side components, the framework still generally performs like a MPA framework.  It's just a matter of making that smoother.  It's like Astro before 3.0.
[00:17:24] essentially, except you get to use a non-Javscript backend.
[00:17:28] The problem is like,
[00:17:29] It's hard for something like this to keep on catching up when the innovation is happening so quickly on the JavaScript side of the space and the
[00:17:36] Boundaries are hard.
[00:17:38] Yeah.
[00:17:39] But it's an option.
[00:17:42] Thank you.
[00:17:44] Thank you.
[00:17:46] Okay, yeah, we can look at the v2 remix on This Week in JavaScript later.
[00:17:56] Thank you.
[00:18:01] Thank you.
[00:18:02] Yeah, yeah. Benton, you hit it on the head. The challenge is state management. That's actually...
[00:18:10] very related to the topic today as well. Like this is...
[00:18:14] The...
[00:18:16] If you want to keep the client...  See, stuff like Phoenix...
[00:18:21] LiveView or these WebSocket solutions, do have this kind of mentality. If you keep the state on the server,
[00:18:29] it is consistent as well. That is one option where you can essentially have
[00:18:35] you know, a consistent model that works, that's backend based.
[00:18:40] but you need a persistent connection.  Like, it's nice.  Even using LiveView.js, I could see that.
[00:18:47] it requires a very different sort of back-end system for that to work.
[00:18:53] Otherwise,
[00:18:55] the state kind of
[00:18:57] you want it to be in one place or it belongs to the client.  I think the state actually belongs in the compliant.  That's the RSC model as well.  It's the hybrid solutions where things get really complicated.
[00:19:08] like when the state when you're passing state back and forth and that's basically what
[00:19:12] killed like .NET update panels on a lot of the solutions in this space.
[00:19:22] Thank you.
[00:19:26] Yeah, it's funny. I'm actually having a hard time keeping up with chat. This is good chat. Keep this going. Yeah.
[00:19:31] Greg will come back and teach me more rust. I'm pretty stoked.
[00:19:35] Thank you.
[00:19:36] Oh, this is cool.
[00:19:38] I just want to thank you for JSX DOM expressions.  I'm doing my bachelor's thesis based on and employing my own version of Sol.  It's been really fun.  That's awesome.
[00:19:45] I'm very happy to see the work that we've been doing feedback into academia. Recently, Fabian's been working on, he just submitted a thesis for Valabot, which is the validator, talking about modularity. And again, a lot of the
[00:20:05] inspiration for these kind of approaches was wanting to work with these small libraries, stuff like Solid or Quick, and looking at how code splitting and smart bundling can work, tree shaking. One of the cool things about Solid that I didn't realize until working with Fabian that we got for free was you can't split a module across multiple chunks because it has to come together.
[00:20:29] But funnily enough, because of the way Solid ships source code,
[00:20:34] um
[00:20:35] generally speaking, so people are actually building the project in place, we actually get a finer level of tree shaking than you find in a lot of libraries, just because our libraries are, even third party libraries are basically, you know, broken up into more files, because we promote shipping the source.
[00:20:56] So, because we were in this discussion, myself, Misko, and Fabian, and he was like, no, I'm
[00:21:02] like we're like this is the problem with the modules this is why rx.js has like all those
[00:21:06] like rxjs operators slash whatever slash whatever like all these sub packages because just while you could pull in a specific operator in one chunk and a specific operator in another chunk, they would have to package the whole rxjs together with both operators. Generally speaking, the way that bundling works, when you have these, you know, prepackaged libraries, but because we ship source, it didn't work like that. And
[00:21:31] Fabian didn't realize this because he was building a solid project.  He was like, no, no, I'm getting exactly the code I need.
[00:21:38] so anyways just
[00:21:40] It's cool to see this come back in. Even some of the work, especially on the reactivity side that Milo's been working on, which is influencing the design of the signals into standard, is just amazing application of taking real experience with building stuff out in the wild and funneling them back into academia.
[00:22:09] Amen.
[00:22:09] Thank you.
[00:22:12] Alright.
[00:22:17] "Hi Ryan, what will a modern template engine look like also supporting after linking?" I don't know. I'm- I'm- I'm-
[00:22:24] I...
[00:22:25] I know this is very much the back end kind of thinking.  And when I think about this, I'm like,  why are we doing this weird kind of extra layer  on top of our templating?
[00:22:35] If you want to know what a modern templating language looks like, you've seen it already.  It's called JSX.
[00:22:41] Thank you.
[00:22:42] So
[00:22:44] Yeah, I...
[00:22:45] - Yeah.
[00:22:47] I mean, there's issues with JSX, but I mean...
[00:22:51] There's also benefits.  JSX is kind of dead, which is the problem where it's like the standard doesn't move forward.  But something like JSX, I think, actually has a lot of...
[00:23:00] Um...
[00:23:01] Thank you.
[00:23:01] a lot of benefit.
[00:23:09] I'm playing with producing RSC payloads with Go so I can use React to hydrate the whole route so no issue running with like...
[00:23:16] OK, so you're just making RSCs because RSCs solve the solution.  But my question for you there is, how do you client
[00:23:22] how do you server render the client components?  Like you can do the RSC part in Go,
[00:23:29] arguably, but the client components for initial render still need to be done on the server and they have to be in JavaScript.
[00:23:35] Right?
[00:23:36] I think, unless you make like Go react. I mean, it'd be interesting if you could just literally
[00:23:43] emulate react at every level
[00:23:46] But how would even end user code
[00:23:48] you know,
[00:23:49] Huh. You gotta tell me more about this sometime.
[00:23:53] Thank you.
[00:24:02] Yeah, this is interesting. We're going to talk about some fundamentals today just because of what this data fetching thing actually touches on state.
[00:24:09] Routing.
[00:24:11] Events data fetching the only thing it doesn't really touch on in styling. Well, I mean it can
[00:24:15] But yeah, these pieces actually are very much related. That's why this is like a very holistic look at architecture.
[00:24:25] Um...
[00:24:27] Oh, another bachelor thesis.
[00:24:32] Very cool. Yeah, I'm glad. Like...
[00:24:35] I'm glad to see this. Early days in Solid, I did a lot of research, right? I did a, I wrote a lot of articles on this research, especially on DOM rendering techniques. And it's very cool to see,
[00:24:45] that influence
[00:24:47] more stuff coming out. Even to a degree, the work that we did to measure rendering performance influenced designs of things like BlockDOM. So it's nice to see that. The funny thing is,
[00:25:04] This kind of work gets done at large companies all the time.  They're always looking for performance, especially ones that run their own frameworks.  Things like Google, places like Meta, places like eBay.  They've...
[00:25:13] they do this kind of work in this kind of testing and they do it to cater to  their,
[00:25:17] Metrics and their like goals, but very rarely does the data around this ever, you know, come out  I was talking
[00:25:26] about my rendering techniques and I was sitting there with Dominic Ganaway and
[00:25:30] You know, he...
[00:25:31] As I mentioned...
[00:25:33] maybe about five years ago he was telling me about basically BlockDOM and
[00:25:39] *laughs*
[00:25:40] You know what I mean? Like it was an idea that he was playing around with internally at Facebook, but he you know  There's no article about it. No one talking about it and you know, it had to get rediscovered again externally, you know a few years later and I think I
[00:25:54] I think it's interesting.  Um,
[00:25:57] A lot of this stuff isn't new.
[00:25:59] It's not hard to get to these conclusions.
[00:26:05] we don't,
[00:26:05] have as much external, you know,
[00:26:08] people exploring this in real time. So if anything, if I can help on that side, I'd love to because that's why we do streams like we're doing today because
[00:26:16] Yeah, I'm sure the engineers at Meta already figured this out like six months, a year ago, whatever.
[00:26:23] But...
[00:26:24] There's like a gap between the common knowledge and people going and going, well, how...
[00:26:28] Why? Like it's not obvious anymore. Things have gotten complicated.
[00:26:39] Yeah, yeah. This is going back to the code splitting thing. Yeah. I love that roll up has that degree. But the thing is, I said, it's
[00:26:48] Shipping the source. Just a little secret to get even more sub.
[00:26:51] sub level.
[00:26:58] Still talking about the templating.
[00:27:01] Yeah, I don't know.
[00:27:04] Do you know what I don't like about view style templates?
[00:27:07] Okay, the one benefit of VueStyle templates is that you can ship them as HTML and they can be valid HTML.
[00:27:15] But which is kind of interesting, you know, when you have like, you know, backend centric approach and you're like, okay, well, I can just like ship this HTML and it works. But the problem is like, the way that used to work in the back in the day was actually grab the elements out of the DOM and then like render with those and stuff like we did this with knockout, you know,
[00:27:31] Vue 1 did this, but no one does that. They pre-compile it down to JavaScript now. No one actually sends that markup. So the syntax
[00:27:39] is basically there for the sake of that and
[00:27:43] what
[00:27:44] bugs me about it is
[00:27:46] It...
[00:27:47] it actually changes the semantics of attributes.  Like, it makes attributes special and it's like,
[00:27:55] I realize that they have keywords and in a sense our directors are like that but I don't even like directives really it's like this I
[00:28:02] I...
[00:28:04] Like making the fact that you suddenly have a VIF on a DOM element changing what the descendants do is weird. Like it's not semantic from even an HTML standpoint. So like, I feel very conflicted about this. I much prefer something like Svelte's templating language.
[00:28:21] But,
[00:28:23] you know, at a certain point,
[00:28:25] Why introduce another language if you already have JavaScript and then hence you get to JSX?
[00:28:30] The reason to introduce another language is if you want another target, like you're like, okay, well, we're not going to bring all of JavaScript in. The fact that Svelte only has a limited syntax is actually a benefit if you want to be able to compile those templates in a...
[00:28:46] different language that's not JavaScript.
[00:28:47] It's just very hard when...  There's this rock in a...  It's very interesting when, as I said earlier,  you basically have to be using JavaScript  to get the most optimal stuff.  And then it's like, so why don't you just leverage it?  It's about the balance between catering  to the lowest common denominator  and then just making the most powerful optimal stuff.  So it's like...
[00:29:07] Ah.
[00:29:08] I'm not too attached
[00:29:10] to
[00:29:12] You know, like...
[00:29:14] a specific thing that I can't just always choose the most powerful stuff, so to speak. So I understand like server stuff is faster on the server, but
[00:29:24] The impact on the end user client starts from the client back.
[00:29:28] you can make bigger wins closer to the end user than you can further from them.
[00:29:32] All right.
[00:29:44] Honestly, this is...
[00:29:49] Twitch, this is because I use StreamYard, I think.
[00:29:51] I tell it, oh yeah, yeah, why am I in this category?
[00:29:54] I have no freaking clue.
[00:29:56] Um...
[00:29:57] StreamYard goes
[00:29:59] basically
[00:30:00] - Please, something along the lines is like,  choose your latest category,  and then they always screw it up.
[00:30:04] So they automatically set this up.
[00:30:08] I hate it.
[00:30:11] I don't even know Twitch UI well enough to actually change an ongoing stream from what category it's in.
[00:30:20] Let's see, talk shows and podcasts.
[00:30:26] Can I just edit this somewhere?
[00:30:29] Edit.
[00:30:30] Can edit the title, can I edit the category? Yes, I can.
[00:30:33] Um...
[00:30:36] Yeah, it's funny because I've set
[00:30:37] it on software and game development before. That's the right category. And it just like comes back because of, uh,
[00:30:46] good old StreamYard.
[00:30:48] So thank you.
[00:30:52] Thank you.
[00:30:53] Thank you.
[00:30:56] Thank you very much, Malky.
[00:31:02] Thank you.
[00:31:03] Thank you.
[00:31:04] I know you're talking about something I was derailed. Can you quickly comment on the difference between using solid versus reactive astro?
[00:31:10] very little, one is smaller and faster.
[00:31:14] But otherwise Astro should be doing most of the lifting.
[00:31:20] One has more compatibility with third-party libraries out there too, so, you know, that's the consideration, and more people know how to program with it.  So, uh...
[00:31:28] Using the big, okay, the biggest difference is solid has signals built in, which means you have a state solution, which means it's easier for islands to communicate with each other built in the box.
[00:31:38] if you use React with Astro,  you're going to have to also bring in another state solution.  That's basically the...
[00:31:45] the only...
[00:31:46] Real...
[00:31:47] difference, I would say.
[00:31:50] Thank you.
[00:31:50] Yeah, okay.
[00:31:53] Thank you.
[00:31:56] Yes, didn't ASTRO make a custom templating and found JSX to be better.
[00:32:00] Yeah, they played with some stuff.  Honestly, their templating language for the longest time  has been very JSX-like.  It was funny because some people thought it was like
[00:32:06] not and I was like it's because you guys aren't doing anything complicated with it. Like back in the day when Astro first came out and they weren't doing SSR and people making static sites, yeah I mean it was just like
[00:32:15] JSX and HTML kind of look very similar when you have no wrapping function. So you know, you're just passing values in like even spelt it looks kind of all the same.  But the second you try make like SSR demos like, you know, my hacker news where there's wild cards and variables and conditional rendering.
[00:32:30] It was easier for me to port...
[00:32:34] between Astro and say like Solus JSX than it was the port to React just because it was more of a pain in the ass to switch all the class names around. Like it wasn't even like Astro's JSX is JSX.
[00:32:48] Thank you.
[00:32:49] Thank you.
[00:32:51] Limiting syntax is a very, very powerful tool, right?  That's why Svelte is like...
[00:32:58] you know, can...
[00:33:00] It's they're like it's some simplicity here, right?
[00:33:03] It's a two-way street though, right?  Because composition then suddenly breaks out of that mold.  I think...
[00:33:10] This is the problem with even React for Git to a certain degree.  I mean, React's going to keep the composition.  It's important to them.  But like...
[00:33:17] In the component...
[00:33:18] really become something meaningful. Luckily for React's render model, in the component has always been something meaningful for them because of their re-render stuff. You have to really think about how that works. But in other systems...
[00:33:31] Um...
[00:33:33] you know, like solid components are not special.  So it's like it's weird to make the component be anything but a function call.
[00:33:41] Thank you.
[00:33:45] All right. I am five minutes behind. Okay.
[00:33:48] Thank you.
[00:33:50] Do you think React has longevity with server components? Yep.
[00:33:54] I think it's complicated. I think people like it's complicated for people to get from A to B, but I mean, it's a natural evolution as I talked about in my article like.
[00:34:03] The unfortunate thing is React just jumps straight to the solution. Maybe not the most optimal version of it, but they jump straight to the solution.  And then we're going to spend the next three years where people are trying to build really crazy stuff with, say, Astro, and they go, oh, shit, it doesn't do this.  Or they'll grab HTMX and be like, oh, crap, this doesn't do anything.  And then they'll try all these things, and they'll basically end up at server components.
[00:34:25] I'm actually fairly confident of that.
[00:34:29] If...
[00:34:30] The desire is there.
[00:34:32] Thank you.
[00:34:32] if the desire is there.
[00:34:35] people might be fine just keeping apps over here and sites over there. Maybe the complexity is too large. Like there's always a threshold here. Like this is just the only logical conclusion.
[00:34:43] Currently, if you're looking without the platform itself changing, if you're looking at, you
[00:34:48] Um...
[00:34:49] trying to, the goal of merging apps with sites
[00:34:54] I think you're going to see more...
[00:34:56] more exploration this way.
[00:35:04] All right, I've caught up with chat.
[00:35:10] Thank you.
[00:35:12] Thank you.
[00:35:12] Mm.
[00:35:14] Orange juice is so good. Okay.
[00:35:17] Okay.
[00:35:18] Um...
[00:35:21] Yeah, Vue does JSX.  Yeah, I like Vue's JSX.  In a sense, Vue's JSX actually makes it almost more clear for people when they come to Solid.  Yeah.
[00:35:30] If we did JSX the way that Vue did, people would get it, because Vue makes you return a function wrapping the JSX.
[00:35:39] Um...
[00:35:40] Thank you.
[00:35:41] Because and the reason is resumability is not something specific to Quik.  As I said, I first came across it, even though
[00:35:49] Again,
[00:35:50] Big props to Misko for going out in public.  He went to an ng-comp and like main stage was like 2019 going,  wouldn't it be really cool if we had this thing called resumability?  Like years before anyone else.  Of course, I was not paying no attention to Angular.
[00:36:05] introduction to resumability was actually
[00:36:09] work that Michael Rawlings was doing with Marco. So, yeah, resumability, plus because exploration I did a month or so back, I think it is a real thing that eclipses quick in practicality.
[00:36:27] practice or non-practice in theory. I think it's hard to get there. I think there's a lot more of
[00:36:33] figure out, but I think we can
[00:36:35] approach this as a system rather than a specific implementation.
[00:36:42] Alright, alright, alright.  Um...
[00:36:45] Okay, so we should probably get started on something today.
[00:36:53] Thank you.
[00:36:55] Um, okay, so...
[00:36:57] All that being said, I wanted to talk today about isomorphic data fetching and
[00:37:06] The reason for that, maybe I should...
[00:37:08] Nah, I don't need banners.
[00:37:10] Jesse is a machine.
[00:37:13] Um...
[00:37:13] I thought I had
[00:37:16] come up with the ideal solution.
[00:37:19] Honestly, I've been doing this for a while. And really what we do in Solid and in Solid Start is the culmination of like a decade's worth of thinking to where I thought,
[00:37:32] we got to the optimal pattern.
[00:37:35] And I'll talk a bit about that in a minute, but I just want to say,
[00:37:39] Server components completely threw a wrench in that. Like, not even close, just completely destroyed my whole model. I spent months
[00:37:49] trying to think around it, but essentially server components
[00:37:53] cannot work with this model that I've been
[00:37:57] you know,
[00:37:58] building up for the last 10 years.
[00:38:01] Which means I needed to...
[00:38:04] Look
[00:38:07] back to the fundamentals.  And there's a reason...
[00:38:11] that I care about this.  It's because I'm not satisfied that we have to like
[00:38:17] make
[00:38:18] a specific
[00:38:21] you know, like, you know, app directory.  We're now, we're in the new world.  I think, while we are moving to a new world,  I think it's a backwards compatible world.  That's the compelling part about this.  And...
[00:38:33] I...
[00:38:35] Want to see what the right pattern is so I I started my expert exploration and
[00:38:42] Where we're going, we don't need banners.
[00:38:46] Yeah, no.
[00:38:49] Yeah, no, I shouldn't depend on you like that.
[00:38:58] I have not. Have you ever read Stand Out of Our Light?
[00:39:05] Yeah, I haven't read that.  I'm not familiar.
[00:39:08] But let me...
[00:39:12] Let me share my screen again.
[00:39:16] And
[00:39:17] Yeah, I remember this. This is from the other day.
[00:39:21] I'm not gonna, let's not start there though. Let's start somewhere else.
[00:39:27] I've talked a bit about some of this subject on a few other streams, but data fetching
[00:39:35] Really...
[00:39:37] starts with us understanding the history of APIs.  So I'm just gonna kind of,
[00:39:42] Bear with me here a little bit, because I feel like I need to give some background for people in the audience.  If you have any questions, please...
[00:39:51] Please, you know,
[00:39:52] -
[00:39:54] Ask make sure no one gets lost  so
[00:40:00] If I was to... Oh, I see, I see, I see.
[00:40:04] Yeah.
[00:40:06] Yeah, so that, and then there.  I want to...
[00:40:08] Okay, and then we go back here.
[00:40:11] Thank you.
[00:40:12] APIs,
[00:40:13] In the web.
[00:40:14] started as, I'd say what, like API as HTML.  Everyone understand what I mean by that?  Essentially...
[00:40:21] At the beginning of the web, the only way to actually update data on your page was to go get a new page.
[00:40:27] All right, I'm going all the way back to the beginning here.
[00:40:31] And then...
[00:40:33] at a certain point,
[00:40:34] Um...
[00:40:38] Yeah, yeah, exactly. Forms, hate OS, yeah.
[00:40:43] And then...
[00:40:46] At a certain point, we were lucky enough that our APIs
[00:40:51] could be done as XML or JSON, which, you know, Ajax, you know, was the thing.  And it's so funny because Ajax, no one even uses this term anymore because, well, it's
[00:41:05] what was it, asynchronous JavaScript and XML,
[00:41:08] I mean, pardon the name, it's also just kind of obvious that we can do asynchronous fetching in the browser.  It's been that way for like 20 years now.  But before 2005, that was not the case.
[00:41:19] So,
[00:41:21] We...
[00:41:22] This...
[00:41:23] data fetching,
[00:41:25] basically unlocked our ability to have
[00:41:29] data-fetching libraries that could replace part of the DOM. Sometimes people send some HTML, some people send some data that they can, you know, update the HTML with JavaScript. This is like the jQuery age, right?
[00:41:41] Like...
[00:41:42] Mm-hmm.
[00:41:44] So,
[00:41:46] At this point, there's terrible stuff like soap.
[00:41:50] Let's not dwell on this. This is still the foundation of what we build on today. I just  want to say there's been a progression on how we view APIs because at this point,
[00:42:01] we hadn't really got...
[00:42:02] Jam stack, so to speak.
[00:42:06] The next extension of this was...
[00:42:09] API as state.
[00:42:13] And
[00:42:15] If you don't know what I mean by this, I mean that as our frameworks got more declarative, we wanted a way of actually
[00:42:24] propagating those changes through the render library. It was no longer just like, if you jQuery something, yeah, sure you could like render a new string in inner HTML or something. But if you actually want like update a framework, you needed more, your API wasn't, you know, you weren't writing declar, sorry, you weren't writing imperative DOM update API. So you actually needed it to impact state, and then state to update your UI. So like,
[00:42:48] Um...
[00:42:49] Yeah, people in chat have already guessed what my primary example of this is.
[00:42:55] Redux, yeah. This is sort of the idea. I mean, Redux was synchronous and it tried to keep the data asyncrasy outside of itself. But for the longest time, the pattern was just like, dump your data into a Redux store and then Redux kind of handles the state propagation from that.
[00:43:17] Thank you.
[00:43:18] Right, I'm going a little fast forward on this. There's other solutions during this time period, but I don't want to mirror everyone into the history, but I want to get the context of this because...
[00:43:31] And, Deb, you jumped...
[00:43:33] Two steps. We'll get there.
[00:43:37] Because the next...
[00:43:39] thing is
[00:43:40] I don't know what to call this.
[00:43:43] category, but we hit something called GraphQL.
[00:43:47] Um,
[00:43:49] Because essentially
[00:43:52] we realized that
[00:43:54] most of our state was based off the data fetching.  So it made sense that we would basically
[00:44:02] Maybe it's like
[00:44:04] API as
[00:44:06] Um...
[00:44:08] normalized
[00:44:09] Gosh, maybe this is the...
[00:44:13] the category here.
[00:44:15] - Thank you.
[00:44:16] Right.
[00:44:17] What's cool about this is actually separated it a bit from the frameworks more, but it was kind of understanding that most of our stuff was actually based on the data driving it should have been obvious.  There, there are parallel improvements in other areas that we'll talk about in a few minutes, but yeah.
[00:44:37] This is kind of how things progressed.  We actually jumped to...
[00:44:42] almost the pinnacle here when you think of things like relay. We'll talk about why a bit later.
[00:44:49] But I did this very similar...
[00:44:51] uh
[00:44:52] table, I think in a stream about six months ago, but it's still relevant here. So it's a good refresher.
[00:45:05] Thank you.
[00:45:06] So, okay.
[00:45:09] Now...
[00:45:12] *sniff*
[00:45:15] So
[00:45:15] Now, the next one was APIs as a query cache.
[00:45:20] I mean, this had probably existed before, but...
[00:45:24] It was never as popular as...
[00:45:28] when React Query did it.  So the reason for this kind of, like...
[00:45:35] The state...
[00:45:36] with Redux wasn't the right solution for this. It was--
[00:45:41] Whereas the caching solutions for GraphQL gave us way more control. The problem is no one actually wanted to update the caches. The caches were way too complicated and you fancy systems. It was a pain in the ass. It's funny, you go ask Apollo users, you know, a lot of places they should be updating the cache.
[00:45:56] but they just don't bother. And if you don't bother updating the cache,
[00:46:00] and your answer to mutations is like invalidate it,  you might as well be using something much smaller and simpler.  And that's where React query really took off,  because essentially we'd gone to this super optimal system,  but it was like,
[00:46:12] pulling like
[00:46:13] you know, half of NPM into your browser is huge.
[00:46:17] And it, you know, was kind of clunky from that perspective.  And it was overkill for a lot of people's stuff.
[00:46:23] It's kind of funny because API is HTML, the cache was the browser.
[00:46:27] Here, the cache could be as well the browser.  Like we're talking about like,
[00:46:32] cache headers. At this point, you could kind of combine it, but now you're starting to kind of cache in the client using state.
[00:46:39] Here is like,
[00:46:40] This is too simple.
[00:46:42] This is way overkill. This scales it back again, right?
[00:46:47] This is kind of the...
[00:46:48] the
[00:46:52] - Okay.
[00:46:53] Yeah.
[00:46:55] Where does HTMLX fall in all of this?
[00:46:59] It it
[00:47:01] It's...
[00:47:03] It's arguably one, but just bear with me a second.  We'll get here.  There's a reason why people are talking about HTMX now,  as misguided as it is.  It's still actually relevant to this...
[00:47:15] to this kind of progression because it,
[00:47:18] We as I was saying before I mean I'll fill it in a minute, but like the next thing we hit is
[00:47:25] is
[00:47:26] GSSP.
[00:47:28] loaders, they're basically the same thing. This kind of idea of
[00:47:33] What if we had server
[00:47:36] defined APIs like in our
[00:47:39] It's like the remix kind of pattern.
[00:47:43] And...
[00:47:44] - Okay.
[00:47:44] I don't know.  Eight...
[00:47:46] This is like...
[00:47:48] I don't even know what to call this one. It's back to using the browser cache again.
[00:47:53] But it's like,
[00:47:57] Yeah.
[00:48:00] It's almost API as RPC, to be fair.
[00:48:06] I mean, query caches, we used RPCs too,  but it's like you have specific...
[00:48:11] designated
[00:48:12] functions.
[00:48:13] that
[00:48:15] Thank you.
[00:48:16] that basically run some code on the server and some the the
[00:48:20] to you and you're,
[00:48:22] I mean, it's an evolution.
[00:48:25] What I want to point out here is,
[00:48:28] We actually were going up a hill and then from the peak at number four, we start going down back down the hill.  Do you see how this is actually kind of similar to like this again?
[00:48:39] Right? It works...
[00:48:41] better than, you know,
[00:48:43] for our purposes than what two did. But we did this kind of up the hill, down the hill thing,  right? In a sense, going to the query cache is like going back to Redux. Not really. This is  why it was fair that Dave was thinking I was talking about React query here. It was on the  wrong side of the hill, so to speak. But it's the same kind of thing. I don't know what to call this.  I'll take suggestions from the chat.
[00:49:07] But I was getting to number seven.
[00:49:12] Which is, if we're talking about stuff like server components, API is DSX.
[00:49:18] or HTML.
[00:49:22] - Okay.
[00:49:23] So I'm talking about RSCs or...
[00:49:28] We could argue that HTMX
[00:49:30] fits here, but we've basically full circled
[00:49:36] Right?
[00:49:39] Thank you.
[00:49:40] Yeah, yeah, I like this as a page cache.
[00:49:42] Yeah, it's, yeah.
[00:49:45] API is double data. Thank you for that one. That means something to me. And if it doesn't mean anything to you yet, continue watching the stream and I'll explain. But yeah.
[00:49:57] API is chaos. No, the remix pattern is actually pretty good. And it's actually the closest on this, uh,
[00:50:06] page to where I was sitting as my sweet spot. Um,
[00:50:10] Basically, they're
[00:50:11] between five and six.
[00:50:14] Because once you go back this way,
[00:50:18] it becomes increasingly harder.  Like the last two again are basically servers.  So like if we had,
[00:50:24] um...
[00:50:25] you know, some...
[00:50:26] bars that are colored, we could be like,
[00:50:29] We could say blue. Let's use blue.
[00:50:32] This is like...
[00:50:35] Thank you.
[00:50:36] And then...
[00:50:43] Like...
[00:50:44] Trying to line this up. Let's use green.
[00:50:51] What I'm trying to say here is
[00:50:54] Client cash.
[00:51:01] server cache.  But I mean, it's the browser cache.  What I'm trying to say is,  one of these, you need JavaScript in the client  to...
[00:51:12] to basically manage the caching system here from, I mean, it's a little bit lower, it's like that.
[00:51:20] from for one and two
[00:51:22] Thank you.
[00:51:22] And then...
[00:51:24] Yeah, this is kind of...
[00:51:27] Thank you.
[00:51:28] Where we've where where this evolution is gone. We kind of went up the hill and back down the hill. All right?
[00:51:35] Thank you.
[00:51:36] Thank you.
[00:51:37] for.
[00:51:38] *clap*
[00:51:40] *laughs*
[00:51:41] -
[00:51:42] Thank you.
[00:51:43] Okay.
[00:51:45] *chewing*
[00:51:48] *sad*
[00:51:51] Now the complete state is back on server.
[00:51:55] Almost it's not completely back in server if we assume that the state is completely back on the server then htmx is
[00:52:01] is something that could be considered valid.
[00:52:04] Um...
[00:52:05] I'm going to go ahead and get a little bit.
[00:52:05] And if you take it to that extreme, something like Live View makes sense.
[00:52:09] But unless you actually move all the state to the server,
[00:52:14] then this is not true.
[00:52:30] router is a better name because mutations can be mimicked by router while page does not convey that idea  okay
[00:52:37] Yeah.
[00:52:38] Router cache? Ehh.
[00:52:40] There's different types of router. I'm going to leave it like this for now, but I see what you're saying.
[00:52:46] Data...
[00:52:47] from the servers... well
[00:52:50] It depends what you can call state, right? Data,
[00:52:53] As much as you can, you want the truth to be the server. But there's ephemeral state, right? And in that case, that's what I actually call state.
[00:53:01] I don't refer to the data that's from the...  Like for me, the world lives in a world of reactivity.  So I see source data and I see derived data, right?  And I care about the sources here.  And you're right, most of the data,
[00:53:15] is coming from a backend, like a database or something. So from that source, it is server.  But the ephemeral state, the thing that happens that's captured in the user interface, um,
[00:53:26] definitely belongs in the client.  When you try and put it in the server,  you end up with a lot of complications  and too many back and forths, right?  WebSockets can kind of help with this,  but WebSockets also cost something.
[00:53:36] to get in, to start off.
[00:53:39] Right, so like, and you need the persistent backend more so. So like there's, there's,
[00:53:45] And you could say that most of your state is data.  That's what this progression showed us, right?
[00:53:50] which is why we move back to a lot of this kind of data, you know, being server based.  But there is still client state, which is why React Server Components exist, which is why there's these complications here, is because
[00:54:02] I did this on a previous stream over here, but...
[00:54:06] where I was trying to split this out and I said, look, render where, state where, router where.  And the thing you'll notice about server components is,
[00:54:15] It renders on the server, but the state and the router are client-based, essentially.
[00:54:19] And the state wear on the client is the biggest difference between hybrid, like these hybrids
[00:54:25] server component solutions and typical MPA or turbo, like a
[00:54:32] you know,
[00:54:33] So in a sense...
[00:54:34] where astro is right now is it's gone it's sitting here and it's like can i peek into here and it's  it's it's a question of like
[00:54:44] Do...
[00:54:46] Is it worth the complexity of managing that state on the client?
[00:54:51] And for some things that are app-like,
[00:54:54] The answer has to be yes.
[00:54:56] Anyway, we'll get maybe a bit more into this, but...
[00:55:01] Yeah, that's the gist of it.
[00:55:03] Thank you.
[00:55:07] Okay, so...
[00:55:11] Continuing kind of through this progression here,
[00:55:16] There is a bit of a full circle, to be fair.
[00:55:19] - Thank you.
[00:55:20] Um,
[00:55:21] There is...
[00:55:22] This is only really talking about the API and the cache though. As I just mentioned, state is a secondary concern.
[00:55:30] So
[00:55:31] Let's talk
[00:55:33] I wanted to start this as my starting point.  I will get into the specific problem in a few minutes, but let's continue forward a bit.
[00:55:42] I want to talk about routing for a second because I think we got a grasp on the progression on
[00:55:48] on caches routing um in the client
[00:55:51] has a slightly different story. I'm just going to
[00:55:58] Copy this, because...
[00:56:00] I can.
[00:56:02] We're doing some lists today. We'll do some diagrams as well, but
[00:56:05] Let's start here.
[00:56:07] See, do, do, do...
[00:56:10] Okay...
[00:56:12] beautiful so
[00:56:15] -
[00:56:18] Routing, I said CSR, but it's like, it's not, it's...
[00:56:22] It's client, not rendering, client side.
[00:56:26] Routing I'm going to talk about more than
[00:56:29] than anything else. Okay, cool.
[00:56:33] Thank you.
[00:56:34] How did this start?
[00:56:39] I don't want that. I want white. Okay. How did, how did we get into client-side routing? Um,
[00:56:46] Well, it started at the beginning of single page apps.  And the reason I'm talking about routing as it applies to data fetching, because when  we got started, I don't know if...
[00:56:55] these exist anymore. I could go look for them. Is page.js still a thing, but a simple client  router, right? Um, you don't even need a package for this page.js still a thing.
[00:57:07] Vision Media, yeah.  This...
[00:57:09] This is... this is...
[00:57:11] This is the kind of stuff that I'm talking about.
[00:57:15] Whatever happened to TJ Holloway, Chick?
[00:57:18] The guy was like a...
[00:57:20] I know he went to Go or something, but then I never heard about him again.
[00:57:23] But...
[00:57:24] Thank you.
[00:57:26] Yeah, Backbone is another example of this kind of router.  Although Backbone, they had a whole framework system.  But basically, Express-inspired router.  Essentially, it matched...
[00:57:38] on a URL
[00:57:39] Um,
[00:57:40] maybe hash date and then it said here
[00:57:44] run this function, more or less. And
[00:57:48] All we do for these kind of routers was basically unmount the current page.
[00:57:56] and then run that function to render the next page.
[00:58:01] So these routes were routers are really quite simple.  And if you wanted to have data fetching, well, the first thing you might do is
[00:58:11] awaits some data
[00:58:13] in this function that you pass in. But it would mean that
[00:58:17] your page
[00:58:20] didn't show anything. So maybe you would also define like a,  like a wrap around this that had like a loading. So you might have like,
[00:58:28] When loading, show this HTML.
[00:58:32] And then a lot of times people start taking this mechanism, they're like, okay, well, we can add maybe like a...
[00:58:42] on route or on mount kind of hook,  and then we'll do data fetching,  and then when it's done...
[00:58:48] we can show the new page.
[00:58:51] But the basic routing did not have much built in.
[00:58:59] - Thank you.
[00:59:03] Oh, that sounds like fun.
[00:59:06] An official router, yeah, they had a couple of routers. It's funny, I actually built
[00:59:11] client-side Hacker News on one of their routers and
[00:59:16] it was such a weird convention that when I went to go swap it to,  I think it was felt kit.
[00:59:21] I didn't notice and I couldn't get SvelteKit to work on it. I'm like, what am I doing? And then I realized it wasn't SvelteKit's fault. It was just the router that I used, like two recommended routers was so weird that it just didn't port to SvelteKit directly. Anyway.
[00:59:37] And that was in 2020.
[00:59:40] I think. That was like for 2021. It's kind of crazy the routing situation in Svelte pre-SvelteKit.
[00:59:50] Yes, exactly. We didn't have a wait. So these APIs had callbacks. Yes, 100%. This is important to understand because
[00:59:59] and he
[01:00:00] You...
[01:00:00] If...
[01:00:02] Callbacks didn't give you any guarantees whether things are async or not. You could just call them synchronously.  But then like if you
[01:00:08] got in there and you never called the callback well this is the thing like promises are great  because they're promises there's like a guaranteed resolution it's gonna fail or it's gonna you know  like hopefully like the api suggests that things will complete callbacks you know who knows someone  could call the callback like 10 times they shouldn't but like
[01:00:27] there was no guarantees.  So people build APIs around this.  And one of my earliest routers was kind of built on...
[01:00:35] on this kind of
[01:00:37] stuff right because you could if you added like an a like a data loading step you could like call this choke
[01:00:43] component or page with that data. But like, this is clunky, because like trying to feed into loading  states was actually kind of painful, you had to hoist all the data fetching up, it was inefficient,  if your page had layouts, like, you know,
[01:00:59] this part of the page, this part of the page,
[01:01:03] You know, this didn't change.
[01:01:06] you know, here, this didn't change.
[01:01:10] But like...
[01:01:11] You're just going to remount the whole thing.  So...
[01:01:16] This is the start.
[01:01:19] But this is by no means where this ends, right?
[01:01:23] Data fetching just wasn't really part of the question.
[01:01:27] So this was like...
[01:01:29] So hard to say it.
[01:01:31] No data consideration.
[01:01:34] Okay.
[01:01:35] Then came
[01:01:37] Ember router.
[01:01:40] Thank you.
[01:01:41] MVC for the browser.
[01:01:45] I'm just gonna call out ember router singularly because it basically redefined how all routing
[01:01:51] worked it had influence from rails
[01:01:54] But it was...
[01:01:56] just a game changer.  Um,
[01:01:59] for client-side routing.
[01:02:01] It was way better than what everyone else was doing by a mile.
[01:02:06] um
[01:02:07] I think on stream I tried to look for Ember router the other day and they've changed it  so much that I can't find the old system.  It was Rails-based, you had these scaffolding generators and if you include certain functions,  it would do stuff.
[01:02:24] The big thing about Ember Router was, yeah, they had this thing where you could lay out your routes, which doesn't look like Express. And the reason for that partially was that you can nest the routes. You could go...
[01:02:36] Inside post, there's new, and you can basically lay out
[01:02:41] layouts in this router. So you can essentially say like, I can go to posts and posts have slash new, and each of these would be given their own component.
[01:02:53] And...
[01:02:54] Um...
[01:02:56] They would also
[01:02:58] you know, the way you'd inject them is you'd use something called an outlet.
[01:03:03] So Ember was also kind of responsible  for the original link component.  This wasn't the original syntax to be fair,  they used more handlebars syntax, but they also used like,
[01:03:13] Like...
[01:03:14] Like the two
[01:03:16] ideas. So like, um,
[01:03:18] They introduced nested routing.  They introduced...
[01:03:24] Like partial layouts, they introduced, what else?  I want to see if I can find it.  See, here's an example where you have an index path  and then you can have post index and then post slash favorites.
[01:03:35] So you get multiple nested routes.
[01:03:38] Um...
[01:03:39] Wild cards.  Everyone has wild cards.  I'm trying to see if they'll give me like any...
[01:03:46] an example here
[01:03:50] Yeah, transition to is their declarative API.
[01:03:53] Maybe they...
[01:03:54] Linking specific routes model. Yeah, so this would be how you would like
[01:03:59] Um...
[01:04:00] connect it to your data model,
[01:04:02] But basically they had all these like preventing and retrying transitions. So they could be like, on route will change. Yeah, they added they're the first ones to add like,
[01:04:12] one of the few, they had a whole system for route prevention, loading error states, and
[01:04:20] You know, and the routing could do async.  Does it still callbacks?
[01:04:26] Yeah, fulfill, I guess promises here,  but I wonder if they kept their pro...  Like this is callback API time.
[01:04:32] Okay, so they do have promises now, but essentially...
[01:04:35] They added...
[01:04:39] actual hooks that when the route changed, you could fetch the data
[01:04:44] This also support things like animations,
[01:04:47] Like,
[01:04:49] This router was...
[01:04:51] honestly just insane
[01:05:00] Okay, but to give you an idea,
[01:05:03] Ember Router came out in 2011
[01:05:06] 2012.
[01:05:07] Like, like,
[01:05:10] It was just...
[01:05:12] way ahead of its time. So much so that
[01:05:16] a couple individuals, Ryan Florence and
[01:05:20] Um,
[01:05:21] Michael Jackson.
[01:05:22] who I believe Ryan Florence was an Ember developer,  when he...
[01:05:27] saw React and decided to switch to React, decided that he wanted to port Ember router into React.
[01:05:34] Almost verbatim.
[01:05:35] really, in version 1.  And that was how React Router came around.  It was essentially...  It didn't have all the features, but...
[01:05:43] It was basically a port of Ember router.
[01:05:48] I don't know if Michael was involved right at the beginning,
[01:05:50] Um
[01:05:53] But...
[01:05:55] *sweep*
[01:06:02] Yes.
[01:06:03] Um, but anyways, um,
[01:06:07] The whole...  Sorry, I'm not going to focus on the Async stuff here.  The gist of it is...
[01:06:13] This had specific hooks in nested routing so that as certain route sections change, you could keep your layouts
[01:06:20] And then only fetch data...
[01:06:23] at specific parts of the app that changed.
[01:06:28] If this sounds familiar to you, as I said, it's because ReactRouter was basically built on this.
[01:06:34] And this
[01:06:35] For me, I was an Ember developer back in 2011, 2012 as well.  This is what started the path.  You know, I rebuilt my own web component router  because I was a big web component person.
[01:06:47] Don't tell anyone.
[01:06:49] web component
[01:06:51] router
[01:06:53] uh,
[01:06:54] Let's try NPM because I'm...
[01:06:58] Web component router. It's not a popular package enough.
[01:07:02] even though technically speaking I actually have the
[01:07:07] actual web component router on npm.
[01:07:10] Let's see.
[01:07:10] No one uses this package, I can't even get in search results. Let's just go to npm.
[01:07:15] NPM.
[01:07:17] Web Component
[01:07:20] router
[01:07:22] There we go.
[01:07:24] Thank you.
[01:07:25] Okay.
[01:07:26] You can see this, this is like full on Ember.  Map, index, not found, route, path, tag.
[01:07:33] on enter
[01:07:35] You could do lazy, like this is more updated, but you could do lazy code splitting for dynamic imports. You could do
[01:07:41] things transition to this. And then I use slots as my outlet. But essentially,
[01:07:47] This.
[01:07:48] Um...
[01:07:49] framework agnostic web component router that use the shadow DOM injection all this stuff.
[01:07:54] was...
[01:07:55] my port and I used it in Knockout.  So I also completely straight up ported Ember router into...
[01:08:01] into my framework of choice.
[01:08:04] so
[01:08:07] Yeah.
[01:08:08] This is the next step.  And this one actually...
[01:08:11] had
[01:08:12] had a
[01:08:14] you know,
[01:08:15] had data fetching.  The only problem with this was,  we didn't have promises back then,  so it was really hard
[01:08:22] to like
[01:08:23] be like pseudo...
[01:08:25] pseudo async
[01:08:28] But you definitely had patterns for loading data.
[01:08:33] Then the next step on the path, everyone's still with me, right?
[01:08:43] Yeah, I know. Except for like Marco didn't have a client side router. But yeah, I mean, when you go back to like 2013,
[01:08:53] you know, two technologies that were just way ahead of their time.
[01:08:59] Okay, so where did we go to next?
[01:09:05] - Okay.
[01:09:07] React Router 4
[01:09:09] I have to mention this stage.
[01:09:13] because I'm gonna call it the React Router for regression.
[01:09:17] React Router 4
[01:09:20] Um...
[01:09:22] guys count on marco to show up um
[01:09:28] React Router 4 was...
[01:09:33] Basically, they decide to streamline and get rid of a lot of the clunky...
[01:09:38] bits of Ember router. They got rid of all the path stuff, they just used href, they smoothed it out. But they also got rid of all these on-wheel transition, all that kind of stuff. They did it a slightly different way for some of the cases, but the idea was they no longer
[01:09:53] We're based on having all the routes fed in at the top of the app.
[01:09:56] to do this hoisted data fetching.  Because the thing I didn't mention about the Ember router,  there's the nested routes,
[01:10:05] Um...
[01:10:05] even though there's like this callback block problem where you would have like a data fetching waterfall.
[01:10:11] Um,
[01:10:13] They did like...
[01:10:15] essentially do this,  uh,
[01:10:19] It was possible to basically fetch...
[01:10:23] define all your routes in one place and then on a route change,
[01:10:26] you know, code split and data fetch independently.  So you could like fetch your data while you're fetching your code for your for your page and parallelize all the data fetching so that everything would render fairly reasonably when all the code had arrived.
[01:10:40] ReactRouter4 kind of like removed
[01:10:42] The problem was it's always awkward with the pseudo-async stuff. So React Router 4 is like, "No, no, just fetch inside your component. Don't care."
[01:10:49] kind of scenario.  And you can just define your routes anywhere in your app,  and let them do really cool patterns,  like recursive routes and stuff that was a lot harder  to do with the Ember style router.
[01:10:59] but it also...
[01:11:02] basically was like
[01:11:04] we're not responsible for data fetching anymore.
[01:11:11] Yeah, pretty much, right?
[01:11:14] I
[01:11:15] Amen.
[01:11:16] And it was fine for the time.  You have to remember this is like 2015, right?
[01:11:23] Or 16.
[01:11:25] No one was caring about the size of your JavaScript or stuff.
[01:11:30] But, and we didn't, like we were just starting to get ESM promises.  So like this simplification just made life so much nicer.  But the problem then came in was code splitting.
[01:11:39] So
[01:11:41] If you're fetching in your components,
[01:11:43] Like no one was code splitting back then.  You have to understand up until this point,  no one was actually really code splitting.  So when code splitting suddenly started becoming a thing  where people didn't want to send all their JavaScript down on the page  because it's getting too large...
[01:11:54] Um,
[01:11:55] It was really awkward because
[01:11:57] you could do it, but then
[01:11:58] you would be loading the code that you needed for the data.  So essentially when you went to the next page, you would
[01:12:03] load the code for that page,
[01:12:05] first, then run the code and then fetch the data you needed.  So it was a double cascade waterfall, basically on every single navigation.
[01:12:13] Um...
[01:12:15] This is not good.
[01:12:17] - Thank you.
[01:12:18] And this was very-- everyone loved it because they could, like,  co-locate their fetching in React, but the performance went through the--
[01:12:24] toilet basically and honestly this like was a large time period when solid started coming out and i was just
[01:12:31] demolishing benchmark not because solid's render speeds necessarily like that was for the pure  render but like demos we were demolishing them because our routing data fetching which is so  much more efficient because we kept with the ember like pattern of hoisting
[01:12:44] which worked beautifully with code splitting.
[01:12:48] So how did they solve this? They solved this through link preloading.
[01:12:53] Again, I hope you understand.  I'm trying to lay the foundation here still.  Um...
[01:12:58] Link preloading meant that like if you could hover a link state or just click you could start loading that code ahead of time and
[01:13:05] Blink preload usually
[01:13:09] Did not...
[01:13:10] mean
[01:13:12] data preloading. It just meant that the code would be present
[01:13:16] And then when you immediately went to the page, you were able to data fetch.
[01:13:20] There were some tricks for some things like where you'd like fetch the HTML if you need
[01:13:24] like hit the page outside and then like warm,  maybe a server cache or something.  But wiring the data back into the router  was actually non-existent.  It was hard to do, right?  Because like,
[01:13:35] You don't know what data is going to be fetched somewhere down in a component somewhere.
[01:13:39] short of just running the page in the client, like in a pre-pass or something, you're not going to know what data is loaded. And you can't pre-pass the code until you load the code already anyways. So like, basically, this is why I call it the React Router 4 regression. There are
[01:13:56] There wasn't really a great...
[01:13:57] solution here.
[01:14:00] Right? Yes. And people, you know, we're doing stuff like GraphQL and all that stuff. Right. So, yeah, this is definitely you can see how the API and the routing.
[01:14:12] stuff is kind of aligned here.
[01:14:18] Don't get me wrong, link preloading is good, it's just it wasn't able to be done very efficiently.
[01:14:25] But as I mentioned,
[01:14:27] Everyone else didn't go through this phase. In fact,
[01:14:33] When promises showed up and code splitting and all these things started happening,
[01:14:38] A couple routers.
[01:14:40] outside the reactor ecosystem, like Sapper's router,
[01:14:45] Um...
[01:14:46] Nux router?
[01:14:48] Um...
[01:14:49] solids router, combine these things quite effectively.
[01:14:55] I guess it was Solid's app routers, the first one I wrote.
[01:14:59] And didn't
[01:15:01] because they kept the route definitions top level. Eventually,
[01:15:05] React router 6 came out which returned to this pattern.
[01:15:12] And I should actually, before that actually, before ReactRite 6, I think TanStack
[01:15:18] location. Should get a shutout just simply because I
[01:15:21] I'm not sure the React ecosystem would have
[01:15:25] got there as quick if Tanner hadn't pushed them
[01:15:29] on the right path.
[01:15:31] Anyway, eventually the Remix guys and the Reactor Auto guys corrected their mistake.
[01:15:40] Ryan Florence and Michael Jackson knew this, but they kind of used their own patterns to avoid this.  But I think they realized over the years...
[01:15:47] that people didn't
[01:15:50] get it and they were doing stuff terribly. So they changed the router to actually fit  the pattern and they basically did this while they made Remix. They were like, "Look, this  is how you should be doing it." And they basically reversed most of the decisions they made in  React Router 4.
[01:16:05] Okay.
[01:16:07] I think...
[01:16:09] and
[01:16:10] This is sort of...
[01:16:13] What? 6?
[01:16:15] Where did five go? Okay.
[01:16:17] Oh, it's... it's Reactor Rider 6.
[01:16:20] My bad.  Um.  .
[01:16:25] Thank you.
[01:16:26] Okay.
[01:16:28] This is basically...
[01:16:31] Oh, that's funny.  Let me get out of this and scroll a little bit.
[01:16:34] Client-side routing hasn't actually
[01:16:38] changed a whole ton of
[01:16:40] from this stuff. I think suspense
[01:16:42] makes it more powerful, but we'll talk about that later when I talk about some solid specific stuff.
[01:16:46] But this
[01:16:48] Basically, all I'm trying to say is
[01:16:51] Again, we started like somewhere, we went somewhere kind of crazy, and then we went back to Ember.
[01:16:57] But same pattern again.
[01:17:01] Let's talk about server-side rendering for a moment.
[01:17:07] Are people still with me? I know this is a lot of stuff before we actually, I haven't even laid out my exact problem yet.
[01:17:14] But, um...
[01:17:17] Thank you.
[01:17:18] We...
[01:17:19] Let's do some server side routing, rendering.
[01:17:23] Yeah.
[01:17:25] Let's talk server side.
[01:17:28] I'm...
[01:17:28] Okay.
[01:17:30] Thank you.
[01:17:31] I want to do this a little bit differently than what we've been talking about so far because
[01:17:37] Instead I want to demonstrate this in the form of an example.
[01:17:41] and
[01:17:44] Good. At least I know...
[01:17:47] that two of you are still here.
[01:17:49] Thank you.
[01:17:52] Because...
[01:17:54] Thank you.
[01:17:54] My example is pretty straightforward in that I want to pretend
[01:18:01] that
[01:18:02] There is...
[01:18:05] Yeah.
[01:18:06] a double waterfall scenario on the server. And I'm gonna...
[01:18:12] I'm going to create two lanes. I'm going to create a render lane and I'm going to create a data
[01:18:15] data lane.
[01:18:16] Because I want to talk, I think it's easier to see this next thing visually.
[01:18:21] So render lane
[01:18:22] data lane,
[01:18:24] And then we're going to
[01:18:25] Get a strict...
[01:18:26] thick line
[01:18:28] like this
[01:18:32] And...
[01:18:34] See you.
[01:18:35] Let's make this medium
[01:18:36] Let's make this medium
[01:18:38] Because...
[01:18:39] Server rendering.
[01:18:41] in JavaScript has been kind of funny.
[01:18:44] And what I mean by that is,
[01:18:48] Part of the...
[01:18:50] Some people talk about how JavaScript on the server sucks, and they're kind of right because...
[01:18:55] Unfortunately, we did...
[01:18:57] kind of
[01:18:58] kind of stupid stuff originally because
[01:19:01] It was...
[01:19:02] Like we're taking a client-side model and took it to the server.
[01:19:11] Thank you.
[01:19:12] Thank you.
[01:19:13] .
[01:19:14] Kind of. Okay. Well, hopefully this next part is better. Okay, there's a question here.
[01:19:24] How routing-based work? Does it render ahead of time and just call react-dom render? Okay, cool. If we're talking about client routing,
[01:19:30] Still?
[01:19:31] Um,
[01:19:32] The way client-side routing works is it's basically
[01:19:36] a state change.
[01:19:38] Basically picture somewhere high up in your application, you have a ternary operator.
[01:19:43] And...
[01:19:44] when
[01:19:45] The...  When you...
[01:19:48] When you click a link...
[01:19:50] Thank you.
[01:19:51] Instead of the anchor tag
[01:19:54] redirecting to a new page, the router provides its own anchor wrapper that intercepts that click
[01:20:01] prevents the default action, and tells the router, "Hey, the state has changed."
[01:20:06] And that state change
[01:20:08] will then...
[01:20:10] trigger some ternary, some decision point higher up in the React
[01:20:14] tree or declared a tree and just swap
[01:20:18] what
[01:20:19] what component it is. It isn't unlike this,
[01:20:23] where it will test, say, the anchor information
[01:20:28] URL that it intended so you clicked a link to user 1 it will go okay now I am changing that state so now the current location is a new location and
[01:20:37] And for that location, you know, it has that registry. It'll find the right component it has to render.
[01:20:43] and  uh
[01:20:45] when it renders that component,
[01:20:48] it just ends up getting inserted at that point in the DOM. That's the basic of it. We intercept the anchor tags and then just do a state update that swaps out part of the view.
[01:20:57] um very similar to how if you had a button that swapped part of the view when you click on it
[01:21:02] works. That's essentially it. The router hook-ins is that we use browser APIs. So like we
[01:21:08] See?
[01:21:09] push the new state on.  So if someone clicks the link,  it's not just enough to...
[01:21:17] update the state, we have to also say, like...
[01:21:20] tell the browser, hey, push state this new URL,  and then the URL will also update in the browser.  That way, if you refresh the page,  you'll start on that new page.  And if you have a client rendered app,
[01:21:32] That...
[01:21:33] decision points were very early on.  So when you start rendering the app,
[01:21:37] and you get to that state where what the location is,
[01:21:40] It reads it initially from the URL, let's say,
[01:21:43] And then it'll go, okay, I know from my lookup what component to render, and then it renders the component.
[01:21:49] Does that make sense?
[01:21:50] The React render call is actually above it, essentially.  The routing is just a swap.
[01:21:57] inside
[01:21:58] the like a state swap inside the application.
[01:22:11] Thanks. So how does it maintain for an input field when we change the page input field state per search? Yeah, okay. The funny thing is, um,
[01:22:19] Reacts, Reconciler might have something to do with it, but actually most of the time...
[01:22:24] Uh...
[01:22:25] If it can't match the element, it doesn't. This is why there's nested routing. I'm going to see the remix example for a bit here. But like, this is like, see,
[01:22:36] I was showing Twitter.  It means that...
[01:22:39] If example.com changes, well then the whole site changes.  If you switch between sales and accounts, only this part changes.  If you change between...
[01:22:49] invoices and subscriptions, only this part changes. And I guess if you change between
[01:22:54] the different invoices only...
[01:22:57] this part changes. Like when you click on these different invoices, only this part changes. So like,
[01:23:04] I'm in
[01:23:05] an input inside the change zone,
[01:23:09] probably wouldn't be persisted anyways.
[01:23:12] The JSX or the diffing would have to match exactly for it to be able to persist.  So generally speaking, it isn't actually.  It is just a state change.
[01:23:23] Okay.
[01:23:27] - Yeah.
[01:23:28] Yes, the special anchor tag wrapper is what all client side routing uses to kind of intercept.  You can also intercept all route clicks and then you could make lowercase anchor work for everything.
[01:23:39] But yes, usually we use a special component for it.
[01:23:47] Okay, cool.  I'm glad you're with me.  As I said, don't feel free to...
[01:23:53] Feel free to ask questions like that. I'll decide if they're suitable to answer in the course of the stream, but if you do have questions like this, shoot.
[01:24:04] Okay.
[01:24:05] Cool. So,
[01:24:06] Yeah, I know. I sometimes get ahead of myself. It's just because I'm trying to get to the all the way. But if we don't have the understanding, then we can't get there. Right.
[01:24:16] So, yeah.
[01:24:19] Let's go.
[01:24:30] Thank you.
[01:24:32] Yeah, I mean, we can map the URL to whatever we want.  It's just a very...  The URL is...
[01:24:40] You know how I was saying I viewed everything as being derived?
[01:24:44] The URL is the most primary source of data in an application.
[01:24:49] Because the whole web--  I always say that router is the core of--
[01:24:53] Any architecture, any architectural change historically that's happened in the web has been based off a routing change.  But it's because the web itself is a router.  So like there's nothing more fundamental to the web than the idea of like a route, like a resource, something that, you know, yeah, basically a resource available at a certain location.
[01:25:14] Okay, so, server-side rendering...
[01:25:19] is
[01:25:21] How should I put it? It's not fun. It makes things a little bit...
[01:25:27] challenging because early frameworks didn't know what to do with it because they're like
[01:25:34] The most primary question that happened right at the beginning of frameworks is, how do you know when you're done rendering?
[01:25:40] You have a declarative framework that lets people write code all over the place.
[01:25:45] Right.
[01:25:46] And, um,
[01:25:50] You basically don't know when you're done rendering because people could inject anything anywhere down in the tree.
[01:25:55] like if they if they fetch something async and you get a request and you go render the page
[01:26:01] When is it done? See, a client is never done. So you never have to worry about this. You can assume that something async happens in the future, it'll impact some state, something will change later, and you can
[01:26:11] always be there to anticipate it. But on server, the request has got to finish. You got to send the HTML to the browser.
[01:26:17] So,
[01:26:18] the earliest versions of, you know,
[01:26:22] the back end here all revolve around this idea of like synchronous render to string. Like you essentially call the render
[01:26:31] And at the end of that render call, it's done all synchronously. Yes, exactly. Synchronous rendered string. So how do you handle data data fetching in this kind of model? Right. It doesn't actually make a ton of sense. And the answer to that.
[01:26:47] In the earliest days,
[01:26:48] Okay, actually I'm gonna...
[01:26:50] I don't know.
[01:26:51] I'm gonna give myself a little bit more space here.
[01:26:53] Let's move this down a bit.
[01:26:56] Let's make another header. Let's go was a technique called pre-pass.
[01:27:02] Okay.
[01:27:06] And what PrePass would do is it would render the app twice.  It would render it once to basically...
[01:27:13] Um,
[01:27:14] Collect all the data?
[01:27:17] And this part isn't historical.  This is just...  Yeah, this is server-side...
[01:27:23] This is like SSR specifically I'm talking about.  There's other server technologies.  I'm just talking about JavaScript frameworks, right?
[01:27:29] in JS frameworks.
[01:27:32] Thank you.
[01:27:34] The simplest thing you can do is just...  The problem is if you want your data fetching to be isomorphic,  like you want it to be in your app,  you...
[01:27:43] You could obviously hoist it all the way up and then fetch stuff ahead of time.  But if you want to write the code the same as the client and the server, you actually have to...
[01:27:52] basically figure out what's being fetched.
[01:27:56] Thank you.
[01:27:58] Yeah, and I'm going to talk about that in a minute.  I wanted to do pre-pass first because it is...
[01:28:05] It might not have even been the first approach, but it's definitely the most primitive of approaches.
[01:28:11] fully in react.
[01:28:14] Um,
[01:28:15] So the reason I wanted to do...
[01:28:19] I think most SSR GraphQL clients still pre-pass. Yeah, okay. This is good because I'm gonna... let's do an example where there are two pieces of data, okay?
[01:28:29] Um...
[01:28:31] And let's get a little bit thinner of a line.
[01:28:35] yellow do this and let's fill it. Data is going to use a brown background.  Hopefully everyone can see that. I know it's not
[01:28:42] Maybe
[01:28:43] Maybe that'll emphasize it a bit more.  So we're going to make our data fetching lanes.  And data fetching-- I'm going to put a score on this,  so we can do a little bit of math.
[01:28:54] But let's say data fetching
[01:28:57] costs 80 okay
[01:29:00] I'm gonna make two of these. Um, and let's put something in here. Let's put, I want to do medium, small, 80.
[01:29:08] Amen.
[01:29:09] defer.
[01:29:13] Say why not?
[01:29:14] There we go.
[01:29:15] Let's go back to this.
[01:29:17] small
[01:29:19] 80, okay? We're scoring the 80, let's pretend it's like 80 milliseconds to our database, okay?
[01:29:27] .
[01:29:28] Thank you.
[01:29:33] Right. So we're assuming that you can collect
[01:29:36] this stuff. So the way prepass would work is
[01:29:40] And let's pretend that our page has three
[01:29:42] evenly
[01:29:45] scored
[01:29:46] sections. So let's make
[01:29:48] Let's make...
[01:29:51] so some more squares let's will do them green I guess
[01:29:55] These ones are going to be smaller.  They're going to be like...
[01:29:59] 10...
[01:30:02] Beautiful.
[01:30:06] Yeah, this is probably fine.
[01:30:10] Yeah, and these are all gonna have
[01:30:13] I probably should just put the number in before.
[01:30:17] before I copied it.
[01:30:19] Okay, let's copy this again.
[01:30:22] Okay.
[01:30:23] -
[01:30:27] So what a pre-pass would do
[01:30:30] is in this scenario
[01:30:33] because you can only render so far when you have a waterfall type situation.  Like I'm going to assume in this example that the data is not actually dependent on each other, but the view is dependent on it.  Right. So like even though, let's say we're getting a user and we're getting user, like some details, posts about them, whatever.  We can load them both based on knowing the user ID, but because of the waterfall,
[01:30:56] you won't show the comments until you show the user section, there's a waterfall. So what PrePass will do
[01:31:02] is
[01:31:03] It will render.
[01:31:06] Thank you.
[01:31:07] Um...
[01:31:08] Yeah, I'm actually going to copy this whole...
[01:31:12] thing.
[01:31:13] so that I can copy it for some more examples down here.
[01:31:16] Beautiful, okay.
[01:31:19] What PrePass was going to do here is it's going to render 10
[01:31:23] Um...
[01:31:25] basically...
[01:31:26] And then.
[01:31:28] It's going to hit that first. Let's pretend that like it's I'm trying to make this equivalent with something that would have suspense later. So that's why I said there's three sections, but let's pretend it's going to render.
[01:31:43] 12. Actually, you know what? Let's, I'm going to do something a little different here. I'm going to actually color code
[01:31:49] Um...
[01:31:50] each of these
[01:31:51] sections
[01:31:53] differently
[01:31:54] Um...
[01:31:55] So that I can actually do what I'm trying to do here, which is essentially
[01:32:00] It will render the first section, which doesn't depend on any data.  It will get into rendering the second section, which does depend on some data.
[01:32:10] Um...
[01:32:11] But it's only going to get to...
[01:32:15] Let's change this up.
[01:32:17] maybe let's say 20% in.
[01:32:19] Like let's say it has to do, you can't do all the work because it depends on some data.
[01:32:23] that
[01:32:24] isn't there so we're gonna do that we make it two
[01:32:27] then it realizes that it's going to have to fetch.
[01:32:31] So we're going to line that up roughly.
[01:32:33] And then when it's done fetching,
[01:32:38] it's going to render
[01:32:39] This again.
[01:32:43] Thank you.
[01:32:45] It's going to be able to render all of this
[01:32:52] Alright.
[01:32:54] Thank you.
[01:32:55] See, I can't even make this big enough.  And then it's going to realize it's going to start rendering part of this.
[01:33:00] and it's going to realize that it can't render it all.
[01:33:04] can only render two.
[01:33:08] Thank you.
[01:33:11] and then it's going to fetch this
[01:33:13] *laughs*
[01:33:14] And then it's going to
[01:33:18] Finally,
[01:33:20] be able to
[01:33:23] .
[01:33:24] I mean this one's just going off the screen. I'm sorry about that.
[01:33:28] Future ones will be better. This is the worst case scenario.
[01:33:33] Render this.
[01:33:35] and then finish the rendering
[01:33:37] and respond.
[01:33:39] Does this make sense?
[01:33:44] - Yeah, well it basically doesn't know what data fetching  it needs to do till it hits it.  So it starts rendering the first section,  completes it because it doesn't need anything,  starts running the section, like nested section,  which does actually need some data.
[01:33:56] um,
[01:33:57] bails out before it finishes it, waits the full day to fetch,
[01:34:02] so it can continue rendering, renders the whole thing again,
[01:34:06] gets to that part of that section and then renders the whole thing again. So
[01:34:09] Short form of this is...
[01:34:12] essentially... we're gonna say this one scores what, 12?
[01:34:18] Let's go get 80 times 2, so it's 160.
[01:34:21] plus
[01:34:22] Actually, we don't care about the data.  Actually, we should because it's in line.  So this one takes what, 160?
[01:34:28] plus
[01:34:29] 34
[01:34:32] plus 30
[01:34:36] So was that 164?
[01:34:39] for this example.
[01:34:46] Yeah, so this is waterfall on the server.  I mean...
[01:34:51] This is just very basic render to string prepass style.
[01:34:58] It's not even about moving the waterfall.  I mean...
[01:35:01] Yes, you did just move the waterfall to the server. The funny thing is if you client rendered this,
[01:35:06] Um...
[01:35:07] you would actually do the exact
[01:35:09] you basically do the same thing,  except you wouldn't actually re-render the green part.  You'd actually save 30.  So client rendering...
[01:35:17] for this approach.
[01:35:18] would actually only cost you
[01:35:20] ironically 132, but you have the latency of going back and forth between the server, so maybe it's a wash, but
[01:35:27] This is pre-passed.
[01:35:31] Does this make sense?
[01:35:34] Like it has to render as far as it can, hit something async,
[01:35:38] then render as far as it can again, hit something async, wait for that, and then finally finish the rendering respond.
[01:35:43] Okay.
[01:35:44] Okay.
[01:35:47] So...
[01:35:48] We obviously decided that this was not...
[01:35:52] great solution.
[01:35:55] So actually I already got one down here.  Let's copy this one.
[01:36:02] Actually...
[01:36:03] before I copy it.
[01:36:04] going to
[01:36:05] get our
[01:36:07] our buddies here
[01:36:12] So you drop one here.
[01:36:14] and drop one
[01:36:16] here
[01:36:18] All right.
[01:36:20] Actually, I should just pull this
[01:36:22] All the way.
[01:36:25] somewhere else where it's not going to impact us. Okay.
[01:36:28] Cool.
[01:36:29] Okay, pre-pass.
[01:36:31] and then drop one here.
[01:36:36] Let's try this again. This time
[01:36:39] Let's do...
[01:36:43] the...
[01:36:45] GSSP, or GSSP, get serve side props or loader pattern, okay?
[01:36:56] The reason I'm going to go
[01:36:59] We're gonna morph this one over time, but G, um...
[01:37:04] GSSP,
[01:37:06] Thank you.
[01:37:07] Um,
[01:37:10] didn't support nested routing, but if it did, it would be identical to what remix loaders do.
[01:37:23] Thank you.
[01:37:27] Did I do the wrong math?
[01:37:31] 160 plus
[01:37:35] 60
[01:37:37] plus four
[01:37:46] What?
[01:37:47] or
[01:37:53] Yes, okay.
[01:37:54] Yeah, you're right. I'm just dumb.
[01:37:58] I don't know why I didn't... 160, it couldn't be 164. Plus 60 plus 4.
[01:38:04] Yeah.
[01:38:05] Okay, 224. Yes.
[01:38:11] Thank you.
[01:38:12] And then there was React rendering, which is a video sensor.  So we did caching anyways when we could.  Yeah.  I missed the beginning of that, but yes,
[01:38:19] Let me...
[01:38:20] The thing is, if GSSP supported nested routing,
[01:38:25] you now have this lovely benefit that both of these data fetches
[01:38:30] actually happen first.
[01:38:33] And then you do this.
[01:38:36] Okay.
[01:38:43] Which is not bad, because now for this one, the total time is 110.
[01:38:52] Thank you.
[01:38:55] Oh, there we go. We solved the problem.
[01:38:59] Thank you.
[01:38:59] Okay.
[01:39:03] because you could basically parallelize the data fetching
[01:39:09] And
[01:39:09] Do it.
[01:39:10] before
[01:39:13] any of the page rendering.
[01:39:16] Thank you.
[01:39:17] The thing is...
[01:39:18] Why are we still talking about that?  If this solved the problem, why are we still talking about this?
[01:39:24] Thank you.
[01:39:25] Thank you.
[01:39:27] *sad*
[01:39:30] No.
[01:39:32] This number up here
[01:39:34] is
[01:39:36] is basically when we respond on the page, right?
[01:39:41] - Oh, shit.
[01:39:43] The problem with this is it kind of locked you in because these are...
[01:39:49] framework specific, non-isomorphic loaders.  Like they're basically, you have a different pattern  for the server and the client.  You basically say the server has this data loading function  and it's specific to remix or next.
[01:40:04] And
[01:40:06] this
[01:40:07] It still makes you wait till the end, essentially, of it.  Streaming...
[01:40:12] changes
[01:40:13] the math here considerably, right? Because
[01:40:18] It's very hard to stream with this sort of API.
[01:40:22] which, I mean, Remix has added an API would defer to do it.  But generally speaking, there's a lot of shortcomings here that are very, as I say, framework specific, and they don't manage streaming.  Why do you care about streaming?
[01:40:35] Well, let's just really quickly...
[01:40:38] Take this example.
[01:40:40] and add a streaming version under it.
[01:40:43] It looks almost identical, except you can do this.
[01:40:47] - Boo.
[01:40:52] Because in this case, the data isn't actually
[01:40:55] um...
[01:40:58] isn't
[01:40:59] In this case, the data isn't actually
[01:41:01] What's the term?  Uh...
[01:41:05] a waterfall. If it was an actual waterfall, streaming would be even faster.  But the difference between this is, yeah, the total time only went down
[01:41:13] Now to 100.
[01:41:15] but
[01:41:16] Thank you.
[01:41:20] the
[01:41:21] actual hidden response time.
[01:41:25] Um...
[01:41:26] I'm going to add another little text box here.
[01:41:29] that I'm going to make.
[01:41:30] Large
[01:41:31] The hidden response time here is actually 10.
[01:41:38] It's not the client can start loading other assets.
[01:41:42] when it gets a response from the 10.  Like it actually gets sent back,  starts sending back at 10  instead of starting to send back at 110.
[01:41:51] So like...
[01:41:53] Streaming...
[01:41:56] But streaming with this was not easy.
[01:41:59] I say streaming with GSAP, but this basically didn't exist.
[01:42:06] in GCP.
[01:42:10] Thank you.
[01:42:11] Thank you.
[01:42:12] Yeah. You don't always know the title metadata of the page until you render two-thirds of the page.  Right. So this is an extreme...
[01:42:21] Usually you'll have to wait for at least some of the data fetching.
[01:42:27] I...
[01:42:28] Thank you.
[01:42:28] I think...
[01:42:30] It's an interesting trade-off to make. In the simple cases, yeah, you might not make as much benefit. It does decouple the data fetching anyways. So if you have one particular request that's slow versus other ones, you can get benefits.
[01:42:46] But
[01:42:47] *laughs*
[01:42:48] You have to understand that...
[01:42:51] This is essentially...
[01:42:55] Yeah, I'm gonna get the whole bar in.  But...
[01:42:59] *sad music*
[01:43:03] Okay.
[01:43:07] Shoo.
[01:43:08] All right, very good.
[01:43:12] - Thank you.
[01:43:16] The Be Fair...
[01:43:19] So
[01:43:20] This...
[01:43:21] This is also kind of hard to do in any system that's blocking.  Like, do you understand?  You can't actually do this.
[01:43:30] Like this works with synchronous.
[01:43:33] because it does pre-pass.  This works with synchronous because...
[01:43:38] because you free pass and then you render.
[01:43:42] This
[01:43:44] It doesn't work with synchronous. It has to know when it's done like because it's doing everything parallel. So I said loader with streaming. This is actually just straight up suspense.
[01:43:53] This is what suspense did. Streaming is an out...
[01:43:57] put of it, but if you're not even worried about when you actually respond
[01:44:01] Um
[01:44:02] on the page.
[01:44:03] This is...
[01:44:06] .
[01:44:08] This is actually what suspense did for us on the server.
[01:44:17] Yes, you could. But that update has to happen on the client side.
[01:44:29] Yes, server points do use HTML streaming behind the scenes.
[01:44:34] Okay, so...  See, when I saw this,
[01:44:40] I got really excited with Suspense because...
[01:44:45] -
[01:44:46] It occurred to me that you could see the impact of the data fetching.
[01:44:51] being actually the biggest thing.
[01:44:52] But like,
[01:44:54] - Yeah.
[01:44:55] The thing that's not obvious here
[01:44:59] this drawing for suspense is actually a little bit inaccurate.
[01:45:03] Because suspense actually
[01:45:05] This is what suspense looks like
[01:45:08] with
[01:45:09] with hoisting?
[01:45:11] Right?
[01:45:12] like with the GSP
[01:45:14] Like, this is basically, like, using suspense
[01:45:18] with, say, solid looks like this, right?
[01:45:22] But...
[01:45:24] Actually, it doesn't quite look like this.
[01:45:25] Suspense actually, sorry.
[01:45:28] looks more like
[01:45:30] Like this.
[01:45:31] Thank you.
[01:45:32] Because it needs...
[01:45:35] to render...
[01:45:37] Thank you.
[01:45:38] past it until it hits that suspense boundary.
[01:45:42] And then it goes, okay, well, I know I can flush this.
[01:45:45] And then, you know, when it's done,
[01:45:48] renders this and because this data is an actual waterfall,
[01:45:51] then it does this. If you did not hoist
[01:45:56] Right, so this is like solid start pattern.
[01:45:59] But if you did not hoist,
[01:46:06] Thank you.
[01:46:07] And by hoisting, I mean
[01:46:09] pull it into the router
[01:46:12] That was weird.
[01:46:23] I mean, yeah, pull into the rudder. If you didn't hoist,
[01:46:29] like, you know, do the remix style type pattern.
[01:46:32] Suspense naively
[01:46:35] would, yeah, so it's, sorry, it's actually,
[01:46:40] Suspense naively would actually look like this.
[01:46:47] Sorry.
[01:46:48] Let me see if I can do this.
[01:46:55] Could delete that for a second.
[01:46:57] I mean, technically streaming,
[01:47:00] 10 is still...
[01:47:01] Kind of true.
[01:47:03] It's actually streaming 12.
[01:47:05] Yeah, this is...
[01:47:07] This is kind of a lie because it has to run synchronously before it realizes.  So it's streaming 12.  Sorry.  Sorry.
[01:47:15] but a naive implementation of suspense
[01:47:18] actually looks slightly more like PrePass.
[01:47:22] Because...
[01:47:28] You fetch there. You don't have to do the part that you already
[01:47:32] Flushed?
[01:47:33] But you need to go here.
[01:47:38] And then you need...
[01:47:39] to go
[01:47:42] here
[01:47:43] This is what would happen if you didn't fetch at the top, if you basically fetched in your components.
[01:47:49] So
[01:47:51] This is...
[01:47:53] Yeah, what do we got here?
[01:47:55] 34 plus 160, so one
[01:47:59] 194.
[01:48:03] for.
[01:48:06] Okay, so...
[01:48:08] I did kind of jump ahead because I was kind of combining
[01:48:13] suspense with hoisting
[01:48:15] which is like
[01:48:18] I'm trying to think of who does this.  Remix.
[01:48:22] Uh...
[01:48:24] Defer and SolidStart, I think, are the only two that actually do this.
[01:48:28] Um...
[01:48:30] You can achieve this other ways hoisting if you use a cache API  and call the functions yourself.
[01:48:36] Suspense naively is actually 194. It's actually worse than
[01:48:41] just doing it
[01:48:42] than, say, using GSP with a loader,
[01:48:45] But it's better than pre-pass.
[01:48:48] Okay.
[01:48:50] Am I still making sense? What I mean?
[01:48:53] Um...
[01:48:54] Thank you.
[01:48:55] I'm sorry, I know this can sometimes be a lot...
[01:49:01] Basically...
[01:49:02] If you don't start the data fetching up front, like you do with Remix Loaders, like route-based data loading solutions,
[01:49:09] and you just put it in the component,
[01:49:13] You...
[01:49:13] you essentially risk this waterfall.  Um...
[01:49:18] so to speak.
[01:49:20] React.
[01:49:22] took this one more step further,
[01:49:24] because they added async components. If you notice that this is a rerender model,
[01:49:29] Um...
[01:49:30] And Solid's server rendering is a re-render model with Suspense, which is why it works exactly like this.
[01:49:37] But...
[01:49:38] If you go here,
[01:49:40] Sorry.
[01:49:43] And if you now have async components with suspense,
[01:49:48] Sorry, it's a little bit hard to...
[01:49:51] just grab everything
[01:49:54] There we go.
[01:49:56] If you have async components with suspense,
[01:50:00] Let's put it here.
[01:50:04] And by async components, it's React's new server component API, async components.
[01:50:10] suspense.
[01:50:12] they can pause and resume where they left off.
[01:50:15] Mostly.  Mostly.
[01:50:17] So...
[01:50:18] Um...
[01:50:22] Thank you.
[01:50:23] It... this becomes 8?
[01:50:25] and this becomes 8.
[01:50:28] because they don't really have to redo work.  Ironically, Reacts
[01:50:32] Client model is multi-render.
[01:50:35] like it renders over and over again, but their server model renders once.
[01:50:39] because it blocks, it's blocking.
[01:50:42] But...
[01:50:43] solid our client model renders once and our server model re-renders.
[01:50:50] But...
[01:50:51] It actually has implications on API design, which I'll get to in a little bit. But essentially, now it's what?
[01:50:58] 30 plus
[01:51:00] Um...
[01:51:01] 30 plus 160 so
[01:51:05] Yes.
[01:51:07] It's 190.
[01:51:08] so
[01:51:09] If you look at this, you can actually understand why the Remix guys, when talking
[01:51:14] to the React
[01:51:16] Team?
[01:51:17] Like when they're like, no, just, you know,
[01:51:20] use RSCs, don't use data loaders. The Remix guys are like, why do I want 190
[01:51:28] when I can have 100.
[01:51:32] Right?
[01:51:34] Like, Remix when it came out was like this.
[01:51:39] They added streaming, so they got the sync capabilities as solid.
[01:51:43] And they got to this...
[01:51:45] Right?
[01:51:46] Why the hell would they wanna go back
[01:51:49] to this.
[01:51:50] Well,
[01:51:51] - Damn.
[01:51:55] there's one...
[01:51:57] There's probably one more way
[01:52:00] to make
[01:52:01] this
[01:52:02] more optimal.
[01:52:05] which is
[01:52:07] hoist
[01:52:10] - Thank you.
[01:52:11] hoist the data loading, like use a cache API and fetch it at the top level.
[01:52:15] Um...
[01:52:17] you have to do this manually, um,
[01:52:22] And if you did that,
[01:52:25] in theory...
[01:52:27] you would be able to do
[01:52:30] Well, this would just become 10, wouldn't it?
[01:52:33] be able to do this
[01:52:36] Alright.
[01:52:44] So...
[01:52:47] 98.
[01:52:48] Okay.
[01:52:50] So...
[01:52:52] This
[01:52:54] seems
[01:52:55] like the optimal
[01:52:57] solution, right?
[01:53:00] - Thank you.
[01:53:02] But it has impacts on API because now your components can be async. And React, for example, does not allow async components in React.
[01:53:12] the browser because it doesn't work with a rerender model. Having an async component doesn't make sense if your component re-renders over and over again.
[01:53:22] So like
[01:53:24] Yeah.
[01:53:25] This isn't isomorphic.  It's not framework specific, but it's not really isomorphic.
[01:53:31] - The first time we have been in the
[01:53:32] Svelte's loaders and streaming fit in.  Yeah, Svelte, I don't know...
[01:53:36] if they've added streaming support, but Svelte essentially
[01:53:41] works the same as us and remix they work like this
[01:53:45] Thank you.
[01:53:46] Um...
[01:53:49] They don't have suspense, so they might actually
[01:53:54] erase this too.
[01:53:56] so to speak. Because you hit an await-- this might be an eight. Yeah, so it might have the same
[01:54:03] Pause.
[01:54:04] It might actually be the '98.
[01:54:07] I don't know if they have out of order streaming. I haven't seen that yet. So I don't know if they can do stream at this point.
[01:54:16] But if they do, I imagine that they get similar kind of performance here for this piece. See, part of the reason that I--
[01:54:25] didn't care about the render model with solid.
[01:54:28] was...
[01:54:30] First of all, at the time I created it, everyone was doing this, right?
[01:54:34] And then
[01:54:36] I did some measurement of solids.
[01:54:40] synchronous rendering time.
[01:54:43] And...
[01:54:44] it was about 10 times faster than React.
[01:54:48] So...
[01:54:49] Under that scope,
[01:54:52] like the number, like if this is a solid solution,
[01:54:56] even with the re-render and suspense in this scenario, we would get what, 1.2,
[01:55:03] 1.2%
[01:55:07] If we divide by 10 plus...
[01:55:09] So we'd be streaming after 1.2, let's say, and then...
[01:55:13] our total time would be 82.
[01:55:16] So like, I didn't
[01:55:18] the architectural difference between
[01:55:21] blocking async
[01:55:24] Um...
[01:55:26] to get that like extra two points was less significant than the increase in rendering speed due to solids performance.
[01:55:34] if that makes sense.
[01:55:39] So, um,
[01:55:42] Yeah, like...
[01:55:43] This is pretending all things are equal, but if they weren't
[01:55:47] like, equal.
[01:55:49] um,
[01:55:50] If a framer could render 10 times faster, then...
[01:55:55] Yeah, we'd be in a slightly different state.  Like, this is still the bottleneck for most systems.
[01:56:03] If this was not the bottleneck, if this was smaller,
[01:56:06] this
[01:56:08] Impact a difference would be significant. But the one thing that's clear is pre-pass sucks.
[01:56:12] and
[01:56:15] GSP doesn't give you any control over when it gets flushed, so it's much later than the others in terms of loading resources.
[01:56:22] And
[01:56:23] Async components are kind of proprietary right now. They're not proprietary, but they're kind of limiting because they're not they're kind of not isomorphic in the current state of things. So
[01:56:34] where I'm sitting,
[01:56:35] kind of thinking through this is,
[01:56:38] Mm.
[01:56:39] suspense with hoisting
[01:56:40] is okay.
[01:56:42] That's where, like, as I said...
[01:56:45] our score here would be 82.
[01:56:47] which is faster than any of the React examples.
[01:56:53] Okay.
[01:56:59] Thank you.
[01:57:03] Thank you.
[01:57:03] Thank you.
[01:57:04] If, sorry, StreamYard's bugging out on me again where it's not showing the comments in the right time.
[01:57:13] if you load all the data at the top level component,  even if you don't use it until down the tree,  can you not stream anything?  No, you can't.  Well, it depends on what the framework is.  The framework has to know what sections of the view.  It's like an onion.  With out-of-order streaming,  it has to break the component.  It's like the remix sections almost,  where you like the nested routing sections.  It doesn't have to align with the router,  but it has to be able to run in sections.  And it's like...
[01:57:40] can go so far and stream the shell and then it inserts the pieces in as they finish. It kind of goes
[01:57:46] outside in based on suspense boundaries.  So if you have suspense and you hoist the data fetching,  then you can stream.  Svelte has an await tag, which is kind of like suspense.  So I suspect that they can do it.  I just haven't seen it.
[01:58:06] Okay.
[01:58:06] Thank you.
[01:58:07] - Thank you.
[01:58:09] Alright, any other questions along these lines? I just want to kind of lay this out. You can see that async components might, in theory, be the fastest approach, but there's big trade-offs here that come from them being blocking and the mental model not matching with the client-side mental model.
[01:58:27] It works fine for server components because they have no client-side mental model, but it's not a universal solution.
[01:58:41] Thank you.
[01:58:42] Thank you.
[01:58:43] Thank you.
[01:58:45] Is there any
[01:58:47] fundamental reason why React can't surrender times it faster than today.  Most of it is that they don't use strings, they make a VDOM on the server.
[01:58:56] And again, it's also important for the serialization for server components. Whereas,
[01:59:02] Solid, Svelte, and View all use strings.  We just concat strings.  Nothing's faster than just concatting strings.  And...
[01:59:12] Nowadays, I think solid and svelte rendering are pretty close and views about
[01:59:19] Thank you.
[01:59:20] half the speed of us, but for the longest time, and that's because Svelte implemented some of the same optimizations that Sala did. There was a big PR that was open for like two years. I think they're still about half the speed.
[01:59:32] Yeah, I think Vue's three times slower and Svelte's two times slower. But they used to be like six times slower.
[01:59:40] as well. So
[01:59:44] Mostly...
[01:59:46] It's memory management on the server.  Memory is actually your enemy in terms of performance benefits.  We don't run reactivity on the server, which is going to be important when talking about where I'm getting to on the server.
[01:59:59] I'm not sure.
[02:00:00] on the perfect design here because
[02:00:02] reactivity on the server is more expensive maybe than even the VDOM on the server. Hard to say. But like the memory overhead is significant.
[02:00:11] Um,
[02:00:12] Solid uses its special primitives as a way of creating those anchor points to do the rendering.  But if we just used reactivity as normal, it would be much slower, maybe close to as slow as react is.
[02:00:25] So memory is a big part of it.
[02:00:32] Does Million help with server rendering? I don't know, you're gonna have to ask Aiden. I don't think so. I think
[02:00:37] I mean...
[02:00:39] It depends on what the reconciliation, maybe he can make a server rendering
[02:00:42] Reconciler, but no, but
[02:00:44] Like if he improves...  The equivalent for million on the server would be improving...
[02:00:50] No, because it'd be like...
[02:00:52] removing the JSX and changing it to a string output.
[02:00:57] I think that would be-- but that could still be consumed by other JSX components.  I don't know how that would work, to be fair.
[02:01:02] um...
[02:01:03] But,
[02:01:04] uh,
[02:01:05] The biggest optimization that Aiden does is he takes our template cloning mechanism that we do in Solid, so that the static parts can be optimally created and then he only updates the holes.
[02:01:16] Whereas...
[02:01:17] on the server
[02:01:19] We don't even build that structure in the first place.  We just can go string, string, string, string, string, plus, plus, plus, plus, plus, plus,
[02:01:29] - Okay.
[02:01:30] Oh.
[02:01:31] Sorry. Um...
[02:01:33] Yeah, you're right.
[02:01:35] I should change this.  It's with...
[02:01:38] Um...
[02:01:40] hoisting
[02:01:43] It's like if you call
[02:01:45] the functions up front
[02:01:47] yourself manually because
[02:01:50] or if you have an API that does it. But just like Next doesn't, Next has a, you can use the cache as a manual mechanism, but Next router doesn't have like a data loader so it can't
[02:02:00] do this yourself. If you manually do this, this is your result. Like if you go and figure out, if you kind of bring it up to the router level, then, um,
[02:02:09] You can get this.
[02:02:11] Whereas this is what naive async components work.  If you just go, I have suspense and server components,  I can just fetch data anywhere and not care.
[02:02:19] There was this time period where the React, everyone around the next kind of ecosystem was like, oh yeah, some waterfalls are good waterfalls. And it's like, no, look at this. No, waterfalls are not good.
[02:02:30] Like...
[02:02:34] Mm-mm.
[02:02:44] Thank you.
[02:02:45] Thank you.
[02:02:46] Yeah, but I mean, VDOM is VDOM, right?  Like, Million would have to not use a VDOM, yet somehow have their stuff insert into React's VDOM and still work.
[02:02:59] Like if if they had a representation that could still work in React, like I think it's possible if the
[02:03:05] Like,
[02:03:07] It's... yeah.
[02:03:11] Thank you.
[02:03:13] Yeah.
[02:03:14] Yeah, this is the difference in loading the data inside and outside the component, exactly.
[02:03:19] So
[02:03:21] Yeah, it's funny, this...
[02:03:23] I'm getting there. I know we're two hours in and you're probably like what he hasn't even talked about it. Okay. So this is actually it for the historical background here. I just wanted to kind of.
[02:03:34] put this in place
[02:03:36] Because I wanted to get to the point where I was mentioning, I'm
[02:03:40] I was very proud of what we did with Solid.
[02:03:43] Um...
[02:03:45] And
[02:03:50] - Yes.
[02:03:51] The reason is we did this.
[02:03:53] We have data loaders which, sorry, we did this.  We have data loaders which automatically hoisted it up.  And this is the same pattern
[02:04:02] of hoisting that's beneficial on the client.  Because here's the thing, even if you pretend  like this is okay on the server 'cause it's short,
[02:04:12] On the client, this would never work because you want
[02:04:15] to fetch you don't want to do have the code splitting waterfall you want to fetch when  you grab the code you don't want to wait for the code
[02:04:23] to come in.  I did...
[02:04:25] Yeah, like this would be even more exaggerated waterfall if it was on the client.
[02:04:30] Um,
[02:04:31] So while you could say that this is good enough,
[02:04:36] Um...
[02:04:37] you could never say that's the case on the client. So
[02:04:41] there's some tension here. So I was very happy that with Solid's implementation,
[02:04:48] We did this and it works the same way on the client and the server.
[02:04:52] The reason is we don't have data loaders, we just have the router call a
[02:04:57] like a
[02:04:58] route data function
[02:05:01] on the client and the server, both sides,
[02:05:04] And then...
[02:05:05] instead of that being like an async function like GSP, you can put in any reactive data  fetching thing you want, like resources.
[02:05:13] And the reason it's so powerful is
[02:05:16] is, um...
[02:05:18] Let me see if I can find
[02:05:21] I told you I wasn't prepped for this, but essentially you could stick...  If you watched my VConf last year at all, you can stick TanStack router
[02:05:30] right inside solid's data, let me let it go, solid,
[02:05:34] Solid router. Let's go here.
[02:05:37] Like...
[02:05:38] OK.
[02:05:39] Let me pull this out.
[02:05:40] - Thank you.
[02:05:41] Do do do
[02:05:43] And I want data.
[02:05:45] data functions.
[02:05:47] You could just go inside...
[02:05:50] a data function, a thing here, and you can...
[02:05:54] return as many of these resources or tan stack queries or whatever the hell you want. And on the server
[02:06:01] as long as they built with a resource under the hood,
[02:06:04] They're going to...
[02:06:05] track, handle suspense automatically, do streaming, data serialization, it all happens automatically.  And then it's the exact same pattern on the client. It's hoisted above, works with code-splitting, and then
[02:06:16] it can be invalidated
[02:06:18] argument by argument, like if
[02:06:20] A query parameter changes, it can just update one piece up and fetch one piece of data that's needed without reloading the whole thing. It's fine-grained, hyper-optimal, completely extensible.
[02:06:32] and
[02:06:33] works the same in the client and the server. And yeah, I mean,
[02:06:38] I'm still proud of this one.  You can tell.  Like, I don't think any framework has a data loading story as good as us because of that.
[02:06:44] Like,
[02:06:45] um,
[02:06:46] where third party works like first party, where you have complete fine grained control over every update,
[02:06:52] right down to like you can
[02:06:55] You can do a resource for the store, you can fetch in some data here. You can have one field from the database, update one field in the UI without reloading, re-rendering.
[02:07:04] there's
[02:07:06] Basically nothing more optimal
[02:07:09] or extensible and it's not specific to SolidStart, it works with any app that uses this router.
[02:07:17] works client only, server only, it even works in our islands demo.
[02:07:23] Like this...
[02:07:25] automatically handles all the data for you.  Serialization, you don't have to worry about where to write it.
[02:07:30] Like, you know, after like,
[02:07:31] You know, sometimes you use frameworks with like GSP so that they know where to serialize the stuff into the DOM.  Like this just automatically works with all your libraries.
[02:07:41] Thank you.
[02:07:42] So why am I here?
[02:07:44] If...
[02:07:45] I've already
[02:07:46] you know, through Solid created the best data loading
[02:07:49] pattern in all frameworks.
[02:07:52] Yeah, I have a whole talk about suspense and stuff that's probably maybe worth checking out where I give some examples to show how powerful these primitives are.
[02:08:03] um...
[02:08:04] Let me see if I can find the talk. Why all the suspense feature front ends this one.
[02:08:10] Yeah, let's just drop this in here.
[02:08:14] Well, yeah.
[02:08:20] Why am I still here is because
[02:08:23] There's...
[02:08:24] There's a problem.
[02:08:27] Server components
[02:08:29] Don't work with this model.
[02:08:32] They work at first, like our island's routing demo. You will see server component-like demos that work like this.
[02:08:39] out there
[02:08:41] like our movies demo.
[02:08:43] But...
[02:08:45] Thank you.
[02:08:46] This kind of brings me to...
[02:08:48] my article this week that I wanted to talk a little bit about. Um,
[02:08:54] Let me go to my profile.
[02:08:55] Thank you.
[02:08:56] And pull it up.
[02:08:58] Thank you.
[02:08:59] Did anyone get a chance to read this article?  Just out of curiosity.
[02:09:03] .
[02:09:05] Thank you.
[02:09:06] Thank you.
[02:09:07] *sad*
[02:09:09] *clap*
[02:09:10] I'm just seeing I'm honestly just testing if chat's still alive.
[02:09:14] The stream counts down a little bit. I know it's getting late for some of you. I also know that this is pretty pretty heavy content.
[02:09:23] Um...
[02:09:25] This article did not get picked up by Google, so it does not have the great numbers, but
[02:09:30] It's probably, it's a pretty relevant article.
[02:09:34] So I'm going to talk a little bit about it because...
[02:09:37] *laughs*
[02:09:40] The gist of this article
[02:09:42] talks about...
[02:09:44] Obviously the three...
[02:09:45] technologies of violence, server components, and resumability. But more so,
[02:09:50] It talks about what it means to be interactive, which I think is a good point in its own,  but it's kind of outside of what we're talking about today.
[02:09:57] The interaction argument is the fact that like
[02:10:03] what people think means interactive means different things and not all the things are equal um
[02:10:11] It's mostly my counter argument against resumability on the interactivity side, because a lot of solutions are interactive by that definition.  Um...
[02:10:21] Thank you.
[02:10:21] But what I wanted to talk about is primarily...
[02:10:28] Oh yeah, did I not... I didn't drop the link in here. Silly me, how can I...
[02:10:33] How can we talk about it and then not drop the link?
[02:10:36] Thank you.
[02:10:40] Okay.  Okay.
[02:10:41] And I should thank some people, if they're still here.  Mitchell Stoon subscribed to Tier 1.  It's nice to get subs.  Also remember to like the...
[02:10:52] YouTube stream, it'll help me later.
[02:10:55] The more likes, the more people end up seeing it.
[02:10:59] Okay.
[02:11:05] Okay, so...
[02:11:06] Amen.
[02:11:07] Thank you.
[02:11:08] I'm going to assume a lot and assume that people are somewhat familiar with islands.
[02:11:13] Tell me if I'm off base here.
[02:11:16] I've talked about some of the content of this article.
[02:11:21] on the stream before, but I never want to make the assumption for people. The huge thing with islands is
[02:11:26] The stuff outside the islands doesn't need to come to the client.
[02:11:30] And this...
[02:11:31] has two huge impacts. First,
[02:11:34] the non-interactive parts of the page.
[02:11:37] Don't get me this shit.
[02:11:38] These are real numbers from an internal audit.
[02:11:43] by the eBay team back in about 2018.
[02:11:46] Um,
[02:11:47] Thank you.
[02:11:48] They told me afterwards that this wasn't supposed to actually go out, but we'd already published it in a few places.
[02:11:54] So I don't care anymore. But, you know, the results
[02:12:01] were
[02:12:03] significant.
[02:12:05] Right?
[02:12:05] Like,
[02:12:06] They basically, keep in mind, Marco's always islands, but they basically turned it off and then suddenly, like,
[02:12:13] It was like,
[02:12:15] you know, like huge savings.  I'll say homepage for eBay.  If you've ever been to eBay.com,
[02:12:21] I mean, there's ads and stuff.  They're talking about the core eBay experience.
[02:12:25] the homepage for ebay.com
[02:12:27] is not the most interactive thing.  It's a bunch of links to other products.  These things kind of show in.  There's these ad widgets,  but these don't load until afterwards.  Generally lazy. The main content for the homepage  is just a bunch of product listings  with not much interactivity.  Just click to go to the next link.  So you can understand how almost completely static page,  other than the global header,  the header is probably the most
[02:12:49] you know, expensive part on this page.  But like, you can kind of see that
[02:12:54] Like, yeah, there's a reason why the JavaScript interaction went down. Search?
[02:13:00] little bit more interactive
[02:13:04] View item where you actually do purchases. Yeah, I mean, that's that's got more JavaScript, right? There's a whole bidding system on there, you know, all that stuff. So like, you can see that the mileage will vary on on the on the reduction.
[02:13:18] due to islands.
[02:13:19] Right?
[02:13:25] How is solid and solid star?  Sorry, just a quick question came in here.
[02:13:29] God...
[02:13:30] There we go.
[02:13:33] I...
[02:13:34] actually talked about this last week,  um,  towards the end of the stream,  uh,  in terms of,
[02:13:41] uh,
[02:13:42] I actually released an announcement on the GitHub.
[02:13:46] talking about
[02:13:48] The next stage of Solid starts beta.
[02:13:51] Um...
[02:13:53] Let me... I just...
[02:13:55] I know this is a little bit off topic.  I just wanted to...
[02:14:00] Where is it?
[02:14:04] Yeah.
[02:14:05] Just gonna post this for people just in case I know a little off topic, but let's just I
[02:14:11] Okay.
[02:14:14] A lot of work's been going on. I'll talk about it a lot more next week with Nikhil.
[02:14:25] Thank you.
[02:14:31] All right.
[02:14:34] Thought you understood islands, but how would this affect JSIs? Well, let me see if I can find...
[02:14:39] uh...
[02:14:41] Islands, let me see if I can find a
[02:14:44] Jason Miller's
[02:14:47] original article because he's got a nice picture in here for everyone.
[02:14:53] The reason is
[02:14:54] On a normal...
[02:14:56] Like this is big islands, people don't understand you can use small islands. But even so, like on a large page where there's a lot of static content from the server that doesn't really update, just like links and stuff.
[02:15:07] You don't like in a react app, you would literally render the whole page solid app.  Even you'd render this whole page on the server and then hydrate this whole page with islands.  You can skip sending the JavaScript for all these white things.
[02:15:25] That's basically the gist of it.
[02:15:32] Thank you.
[02:15:35] Yeah, I mean, I can share this link for people who haven't read the original.
[02:15:39] and I think that's a good thing.
[02:15:40] post from Jason Miller.
[02:15:42] Um...
[02:15:43] but like
[02:15:46] The difference between islands and the old put the web page on the Laravel backend is that they server render and hydrate. So you don't get the pieces flashing in. It looks like a consistent server rendered page and then only need to hydrate the pieces you want. So this reduces JS size. It reduces execution altogether.
[02:16:07] Um...
[02:16:10] uh...
[02:16:14] Yeah, it can be significant.
[02:16:18] Okay.
[02:16:21] StreamYard is dying on me terribly.
[02:16:25] Okay, so...
[02:16:27] you
[02:16:28] ...
[02:16:29] Back to where I was...
[02:16:31] was, which was not the eBay homepage, although that's a great example, is they also have  a second huge impact.
[02:16:41] which is that they shrink the HTML document size because it reduced the amount of data needed to be serialized.
[02:16:49] Basically, if you've ever seen the SSR page, because it needs to hydrate, it needs the data you fetched on the server to get there. If you client rendered and client fetched, you'd have all that data, you'd grab it in the client afterwards and get it as an API, but that would slow down the whole page loading. Server, you've already fetched that data, but you need to get it into the page.
[02:17:11] Um...
[02:17:14] We obviously, I took
[02:17:16] my Hacker News demo took solid...
[02:17:19] Um...
[02:17:20] SPA, SSR version, took the islands version of a comment page with like 300 or 400 comments.  It's not the biggest page, but just to give you an idea, the page size,
[02:17:28] double, like, was half the size  with islands, because, like,  the JSON, it's funny, I was trying to make  a picture in the article, and I was like,  okay, well, this shouldn't be hard, I'll just do, like,
[02:17:39] Hacker News RyanSolidWorkersDev. Okay, that's sweet. I'll find one with like a lot of comments.
[02:17:43] And then, you know, I'll just go in here and I'll refresh the page.  And then I'll like look here and, you know, kind of take a screenshot.  You know, if I zoom way out, I should be able to take a screenshot.
[02:17:54] And the truth of the matter is,
[02:18:00] Um...
[02:18:02] Okay, this one isn't bad.  Most of the time...
[02:18:05] The stuff is so long
[02:18:07] This is too long because it's spread out, but most of the views,  like if you go in the elements and stuff and look at the script tag here,
[02:18:13] where they're truncated. I couldn't find, and like I was trying to find versions that weren't truncated where I could put the
[02:18:20] Islands version
[02:18:22] and the non-Islands version side by side.  So you could see, and the problem is I would have to shrink
[02:18:28] It's so much to fit in the image size, like on my screen,  so I could take a screenshot, that like you couldn't even read
[02:18:35] the data difference anymore, even with a couple hundred comments.  Like this one's got 132 comments.
[02:18:41] But if I took the same story and went to solid...
[02:18:45] HN islands, which is like our server component version. I went to you know this one and
[02:18:49] and we look for our same JSON blob here, you'll see it's this big. It's this.
[02:18:54] It's just like an island map register. There's like literally no, um,
[02:19:00] Like the blob is much, much, much, much smaller.
[02:19:03] Um, so
[02:19:06] This is the double data problem.
[02:19:08] Essentially, it's like when you have a spa,
[02:19:11] and I've showed this on stream before,
[02:19:13] If you look for any specific piece of data, you can go like,
[02:19:17] I remember specific file. There we go.
[02:19:20] And you go into...
[02:19:22] the network and you go into this and you search.
[02:19:26] And you go, I remember a specific file.  It's gonna show up twice.  You're gonna see it in the HTML,  and you're gonna see it in this JSON blob  that you put on the end of the page.
[02:19:33] So...
[02:19:35] Thank you.
[02:19:36] Islands solve this problem.
[02:19:44] All right.
[02:19:46] *laughs*
[02:19:51] All right.
[02:19:59] Thank you.
[02:20:00] Okay, let's see.  So our stream art is going so slow that it's hard for me to...
[02:20:07] to like tell if my stuff registers.
[02:20:12] I'm going to do a quick refresh of my page and remember to add myself back in again.  Just give me a moment, okay?
[02:20:46] Okay. Let me share my screen again.
[02:21:03] Yes. So
[02:21:04] This is what I have a question. Could you automatically detect if a component contains JavaScript so you can only optimize to be or not an island component? Well, that's actually what Marco does. Marco has been kind of the original island framework does it by auto detection. They've been doing it that way for about 10 years.
[02:21:34] class components so they can go like oh if it has a class then it's stateful  um and then it's a little more complicated because they have to consider all
[02:21:42] Like,
[02:21:43] State...
[02:21:44] full components underneath
[02:21:46] like it are non-stateful components underneath it are also stateful components. So it's like a
[02:21:53] Once you hit an island, anything you import into an island also becomes part of that island. So it's like a graph consideration. So you can do this at a bundler compiler time. But yeah, you need to know...
[02:22:06] It's basically where the state is.
[02:22:10] it's a lot obviously simpler.  This is something I still consider at times,  but it's a lot simpler just to market  because the heuristics are imperfect  because...
[02:22:21] Like what makes something stateful?  It has a function call in it?  If your components are a function,
[02:22:26] There's JavaScript. So it's like you have to decide what makes it stateful.
[02:22:32] Thank you.
[02:22:36] - The President and the President of the United States,
[02:22:37] Okay, so the problem is that router data function doesn't need to fetch data for islands. They need to... No, this actually works fine. Like you can fetch the data and pass it, like if you have the same framework,
[02:22:48] or even with Astro, you can fetch the data above,
[02:22:50] and then pass it into the components, and then only the props that have to be serialized.  So the reason this Hacker News demo on the comment page is so small is because there's no state being passed in.  This is all server rendered, and then this toggle, which is interactive,
[02:23:08] just is server projected code into the toggle switch. So no props get pass-throughs because you never need to hydrate anything that actually has static text.
[02:23:16] The only interactive part of the page is a toggle show hide wrapper.  So...
[02:23:21] The problem, I'm almost there. It's not actually with islands, it's with the next step.
[02:23:31] Thank you.
[02:23:38] Okay. So, anyway, this can make a significant difference is all that I'm trying to say.
[02:23:50] If you notice, even when I was loading the page for this example, it took half the data serialization savings to actually improve the time for the document to show up.
[02:24:01] even though this one has streaming by the time it finished,
[02:24:07] I think the islands demo has... I think they both have streaming. Anyways.
[02:24:10] Like, this time is the total time, like, for the stream to finish.
[02:24:16] the
[02:24:17] The reason this works and I mentioned here is like this, it's this example, right? Toggle visible island. This stuff that you pass through, so like if you can pretend this is the comments component that's on the server, it gets the comments.
[02:24:31] And then it...
[02:24:32] it wraps them in a visibility toggle,  and passes through the comment title and description
[02:24:39] as this
[02:24:40] but this is still server rendered essentially. Between the server and client boundaries,
[02:24:46] this ends up still being
[02:24:49] a server rendered, so it sends the HTML through. And server components work the same way too, except it's their JSX format. But this gets server rendered, so you render this stuff once on the server, you don't need comment.title or comment.description to make this island work.
[02:25:06] So you drastically can save on data serialization costs  because you only need to send the template through.  This only works though is if
[02:25:16] if you can handle visibility properly. If it's showing, don't double serialize, otherwise you get double data again. If it's visible, you don't want to also send it through as a prop.
[02:25:28] Um, if it's not visible, like, so you, like what Astro does is they actually render the invisible, uh,
[02:25:36] slots
[02:25:37] as they call them, into templates, and the visible ones get rendered in place.  And that way they can reverse engineer, basically like grab the rendered ones back into the props, like consume them,
[02:25:51] and grab the templates and consume those
[02:25:54] into the island and then the island can control inserting and removing it.
[02:25:59] but they only sent it either as visible or not visible, not both. They basically check if
[02:26:05] it was rendered. And if the slot was never rendered,
[02:26:07] they render it in as a template. If it was rendered, they don't render it a second time.
[02:26:12] But this is actually complicated. React doesn't bother doing that. They actually send everything twice, which is why even with React server components, the data is huge.
[02:26:22] Um...
[02:26:23] Mmm.
[02:26:24] Thank you.
[02:26:25] But server component architecture is very, very, very similar to islands, except it adds  client-side routing.
[02:26:34] - Thank you.
[02:26:48] Okay, so I this whole section here I talk about I
[02:26:53] I mean, let's just skip.
[02:26:55] The thinking, the question here is, look, if we have islands,
[02:26:59] Can't we just, you know, add like...
[02:27:02] a turbo-like HTML swap,  maybe even make it nested like we did with Solid.  And then, you know, basically just...
[02:27:11] like do persistence the same way,  you know,  Astro did that we showed on the stream.
[02:27:16] And that's actually exactly what we did when we created our server component solution for Solid. We basically swapped in the HTML, found anything that had the same island ID, you know, and then just swapped it.
[02:27:31] and
[02:27:32] It kind of worked.  We lost things like input focus because when we swapped the page and like it had the same like...
[02:27:40] island that was persisted because it was removed and then added again we kind of faked it by like  always looking for things like focus before we did the swap and then tried to you know our best to  resume it eventually we just moved to html diffing using the same library uh that astro uses for hMR  from nate more where we diff the html and that way we didn't uninsert it ever and in so we actually  were able to persist the state a little bit more expensive but worked but barely it was like a
[02:28:10] didn't matter
[02:28:11] The impact here is significant. If you've seen the movie's demo, I think I've shown it before,
[02:28:18] The solid version is 13 kilobytes.
[02:28:20] and the Next.js version is 190 kilobytes. Like the savings here, and that's even with island or with server components, like the same here are real.
[02:28:30] Thank you.
[02:28:30] But...
[02:28:32] The problem is...
[02:28:34] what I showed on the astro stream a little while ago, it's that
[02:28:39] Okay.
[02:28:40] Global state.
[02:28:43] is problematic because if you...
[02:28:47] have some global state in the client,
[02:28:50] that impacts
[02:28:51] the rendering of a future component. Forget about persistence for a second.  Pretend you're just going to another page that depends on that same global state.
[02:28:58] The server does not know that you've updated the client state.  So when you go render the next page,  the server is gonna see the initial value  of that client state.
[02:29:07] and essentially render the wrong thing.  And then when it goes to hydrate in the client,
[02:29:12] it's going to fail because the data doesn't match.
[02:29:15] So like
[02:29:16] I have the silly example here was like count is bigger than five show one component versus show another component in some island if
[02:29:23] You had this thing, I'm using context here, it could be any global state.  You have this problem.
[02:29:30] where
[02:29:31] Thank you.
[02:29:32] If you switch,
[02:29:33] um you know like go up to seven in the browser then go to a new page and this component shows up
[02:29:41] .
[02:29:41] it's on the server, it's going to go, oh, I'm not bigger than 5.  I'm going to show some other component.
[02:29:47] But then when it gets to the client and it goes to hydrate, it's going to see that global state's at 7 and think that it has to hydrate some component instead of some other component.
[02:29:57] And this problem isn't limited to just routing.
[02:30:00] It's limited to any lazy insertion
[02:30:02] of hydratable content. Like if you started with an island not showing, like with some server content not showing, and then you update the state without initializing it, then you inject it and hydrate for the first time, it's going to break hydration.
[02:30:22] Yeah, I don't want to completely like rehash the Astro stream where I kind of worked through this, but I want to understand is.
[02:30:32] The takeaway from all this was that I realized, and I think other people realized too, is that you can't render...
[02:30:39] client components on the server after the initial render. It just doesn't work.
[02:30:43] If you assume that global stake only applies to client components, you can keep on rendering the server components, but you can't
[02:30:51] render the client components after initial render. You can do the first time, you can render them, but every other time
[02:30:56] when you navigate to a new page, you send the server portions and then the client will client render the islands instead of server rendering the islands on all future swap navigations.
[02:31:07] That is the secret that avoids you having to serialize all the data back and forth, which is a nightmare. And you don't want to do that either.
[02:31:15] which gets me to the actual problem.
[02:31:19] hopefully people are still with me two and a half hours later
[02:31:23] Server components can't have context.
[02:31:26] *fart*
[02:31:28] Like the server rendering, they could have their own context, but they can't share context with the client.
[02:31:35] So...
[02:31:36] This makes things very awkward because...
[02:31:39] Basically...
[02:31:41] Like even...
[02:31:43] Even, let's pretend you do something smart, like you nested routing like my remix. You could, in theory, just only render on the server the part of the page that, like the partial. You don't need to render the whole page, you could just render the part that's changed, right? Like,
[02:32:00] Picture
[02:32:01] Go back to the remix homepage.
[02:32:03] Because in Solid Start...
[02:32:05] we actually only send that little piece. We do more rendering today than we should,  but like I'm pretty sure Next does this.
[02:32:13] If you're on this page and you click over to customers here,
[02:32:16] you don't need to send this again. You only need to send this. So you can actually reduce the server rendering on the RSCs. But the problem then is,
[02:32:29] you can't have server context because if you had like something wrapping the whole app
[02:32:33] on the server.
[02:32:35] Like between requests, you don't get to persist the server context.
[02:32:38] Right?
[02:32:40] So it doesn't exist when you get here. Like if you don't run through here,
[02:32:44] It doesn't... if you don't run the whole thing it doesn't persist.
[02:32:48] And I just explained why you can't have client context on the server after the initial render, because you're not going to send all that data back.
[02:32:56] The only way you could possibly have server context is after the first render, send it to the client,
[02:33:02] and then send it back to the server on the next navigation.
[02:33:05] Um...
[02:33:07] Like basically you're in these kind of zones where you're serializing a bunch of data back and forth. This is not a pattern you want to depend on. And if we went there, we would be just going back to how things were in the mid 2000s with update panels and dot net.
[02:33:19] So
[02:33:20] We need a different solution
[02:33:23] for a server that doesn't involve context.
[02:33:28] Okay?
[02:33:31] But...
[02:33:35] You start seeing why this is a problem because
[02:33:40] Let's look at solids router, for example.  How many of these things use context?  Let's...
[02:33:46] I mean, let's just look at this.
[02:33:50] Um, routes, that's fine.
[02:33:53] That's fine. Rote, rote, rote.
[02:33:55] Okay.
[02:33:57] Nothing too weird so far.
[02:34:00] Let's get into dynamic routes.  Okay, that's fine.  I want to try and find like
[02:34:05] Okay.
[02:34:06] Create resource, that's fine.
[02:34:09] Okay.
[02:34:10] Thank you.
[02:34:11] First one, use route data.
[02:34:18] All things use context.
[02:34:23] Right? Use route data is
[02:34:26] is an example of where you're using context.
[02:34:35] All right.
[02:34:37] Yeah, I mean to be fair server functions are
[02:34:41] are, are, um...
[02:34:43] are related to this problem, but they don't, yeah, like,
[02:34:48] it's more than just
[02:34:50] explicit
[02:34:51] APIs, I
[02:34:54] I'll show this a minute. I should have mentioned server functions earlier when I was talking about how great solid solution was. I didn't even include server functions as part of that solution because I mean, that's the real problem.
[02:35:03] cream of the crop. When you grab that tan stack query thing, you stick it in a route data,  it works isomorphically, it streams, and you fetched directly from the database inside your tan stack
[02:35:15] query call.
[02:35:17] And it all just works.  I missed that part.  I was explaining why our pattern was really good.  It's even better than I was saying earlier.  Anyways, sorry.
[02:35:27] My but yeah use route data. That's one place we use context. Let me show you another place we use context outlet  How does outlet know?  like
[02:35:36] what to insert here.
[02:35:38] It has to use the routers context. Use layout. Use
[02:35:43] I mean, I basically every freaking API, use location, use navigate,
[02:35:49] Um...
[02:35:50] Use search parameters.
[02:35:53] You... uses routing.  Uh, use maps. You can tell, 'cause in solid,
[02:35:59] Most of our primitives are create.
[02:36:02] because they build something, we only use use when something's based on context for the most part.
[02:36:09] um like something exists but my key point is basically every api in a router uses context
[02:36:18] Thank you.
[02:36:20] Right.
[02:36:22] Thank you.
[02:36:29] So...
[02:36:31] This is tricky because, I mean,
[02:36:34] You can do some things, right?
[02:36:37] You can use props.children
[02:36:39] instead of
[02:36:41] Olet.
[02:36:42] You can pass the parameters into the page components instead of using use location. You can just go like props dot location and
[02:36:49] and prop stop prams.
[02:36:51] So they're suddenly not available everywhere.
[02:36:54] Thank you.
[02:36:55] but you can pass them in
[02:36:58] to the components.
[02:37:04] Thank you.
[02:37:05] - Thank you.
[02:37:08] .
[02:37:12] And you can use raw anchors. Yeah. Um, we, the raw anchor is something that I keep on going back and forth. We went to big anchors, but we technically could go back to raw anchors, um, and have it work the same way because the way we've.
[02:37:26] bubble stuff up. I just, I thought I wanted to make it explicit.
[02:37:31] But, anyway.  Anyways, just...
[02:37:34] I
[02:37:36] -
[02:37:37] This is a problem because...
[02:37:41] While most of the route APIs could be passed in at the page level, and then if an island needs them, you could add your own context providers.  You can make it a context island, right?  So you could take the page information, stick it into a context provider inside a route section, and then the rest of the islands would be able to access it.
[02:38:02] Right?
[02:38:03] Doesn't seem terribly bad.  You could basically even top level maybe pass the router provider to the client.  So the client could, in the islands, make use of the context API to get this stuff.  But...
[02:38:19] as I said, as a primary universal API,
[02:38:24] context can't be dependent on.
[02:38:31] So,
[02:38:34] The biggest problem here is use route data.
[02:38:38] or use loader or whatever in these frameworks because that one actually
[02:38:44] Thank you.
[02:38:46] you know,
[02:38:48] you want to push the data through.  And I think this has been kind of like one of those,
[02:38:54] those things where like,
[02:38:56] You could also pass the data straight through as a prop, but...
[02:39:02] I.
[02:39:04] The loader pattern in general
[02:39:07] Um...
[02:39:08] -
[02:39:10] How should I put this?  The challenge I've been looking at here is that if we're getting to a point where...
[02:39:18] We're basically discouraging...
[02:39:21] Um...
[02:39:23] Thank you.
[02:39:24] you know,
[02:39:25] context and hoisting up the data, what other option? Is there something that we can do so that we don't have to prop drill through the whole application?
[02:39:40] Thank you.
[02:39:41] And the thing is React's already been here, because they already knew this was the problem.
[02:39:47] So they've been looking at...
[02:39:49] Um...
[02:39:51] Cache APIs.
[02:39:54] Thank you.
[02:39:55] But
[02:39:58] As I said previously, you don't really want...
[02:40:04] You don't really want to end up in... where is it? Suspense?
[02:40:08] Async, yeah, you don't want to end up in this async suspense 190 case, right? You want to still end up in this case.
[02:40:15] so
[02:40:16] I'm kind of toying with this idea...
[02:40:18] that
[02:40:24] What would it look like?
[02:40:26] to use a cache like API.
[02:40:29] Mm.
[02:40:30] essentially, is where my thinking and thinking is.  Because what I mean by that is,  if you ever use React query, if you make the same query
[02:40:41] lower down in the tree
[02:40:43] Then it reuses it.
[02:40:50] - Thank you.
[02:40:51] I don't know.
[02:40:54] Next does that for fetch...
[02:40:55] Thank you.
[02:40:56] themselves, and React was doing it for fetch itself.  But what if you hit a database that doesn't work?  You need actually...
[02:41:05] an API that
[02:41:07] works
[02:41:09] Thank you.
[02:41:10] for any...
[02:41:11] Yeah.
[02:41:12] potential promise data loading function.
[02:41:14] Thank you.
[02:41:15] At the same time, we've been getting a lot of criticism on Solid of having
[02:41:20] Crate Resource being like this...
[02:41:23] super vehicle that just does too much.  So this is...
[02:41:27] I'm
[02:41:28] Where I'm kind of getting to right now and where my thinking is and where I've been trying to kind of like work through this problem is...
[02:41:36] hypothetically,
[02:41:39] What if
[02:41:41] instead of loaders,
[02:41:43] we had preloaders.
[02:41:46] Right.
[02:41:48] This is sort of where my thinking is at.
[02:41:53] If you saw...
[02:41:55] Um...
[02:41:56] Did I close? No.
[02:41:59] Where's the router?
[02:42:01] Did I close the router?
[02:42:02] I did not close the router.  Good.  If you saw my...
[02:42:06] my data function example.
[02:42:09] Thank you.
[02:42:11] Thank you.
[02:42:13] Thank you.
[02:42:14] This is fine, but you're in this pattern where you're trying to pass reactive resources through. It's too much.
[02:42:20] if
[02:42:21] You could
[02:42:23] instead of using context, if instead there was an option instead of data to preload,
[02:42:29] that
[02:42:30] See, one of the things Solid's router doesn't have preloading right now, because it's kind of awkward to like recreate
[02:42:37] these primitives
[02:42:39] And there's like no guarantee that these primitives have caching.  Solid's resource doesn't have caching.  If you call it again, like no one's saving it.
[02:42:46] So like,
[02:42:48] If you use a caching solution and you have preload
[02:42:51] API, yeah, maybe that works, but it doesn't make sense when I add it to the router because there's no guaranteeing that it even works.
[02:42:57] you'd have to also use a primitive that has caching.
[02:43:00] - Okay.
[02:43:02] And
[02:43:02] It's like overloading this data idea, but if instead
[02:43:06] the preload function was designed to run over and over again. It didn't actually create resources, it just warmed a cache.
[02:43:12] and was completely optional.
[02:43:14] that changes things a bit, right? Because then you could basically have a fetch API
[02:43:22] or if not fetch, like a cache API. And basically anything you need to hoist
[02:43:26] you could basically
[02:43:30] call based on the route information.
[02:43:33] once where you can preload it and then again down the tree you could there  create the resource that you actually use.
[02:43:42] Downside of that obviously is you're like fetching it in two places essentially like you have to treat caching as an optimization step but it's the tricky part is there's no.
[02:43:51] context. So this is kind of like
[02:43:54] This is what the React solution is, but it kind of leaves you in a weird...
[02:43:59] place. Like, OK, let's look at Next.js. I saw something
[02:44:02] Next, cash.
[02:44:04] Thank you.
[02:44:09] Like,
[02:44:12] Let me see if I can find it. React...
[02:44:14] Okay.
[02:44:16] React shipped.
[02:44:18] this interesting cash function.  I don't know if people have seen this.  This is...
[02:44:21] This is actually pretty cool.
[02:44:23] where you can wrap any function.  It's basically a memo function at a space.  You can wrap any function,
[02:44:30] you know, in this cache. And then as every, anytime you call it during the same request,
[02:44:36] with the same arguments,
[02:44:38] it just returns the previous results.  So you end up with getting the same promise.  So like at its base,  like they use this because they,  the idea is you,
[02:44:49] wrap your API rather than wrap where you use in the components.  And then in the components, you would just
[02:44:58] call get item
[02:45:01] And then they had a note that they're like, oh, you should also, you know, call get item if you want to preload it.
[02:45:06] That was basically like...
[02:45:09] the idea. So basically you
[02:45:11] you basically implement it in two places.  It's not,  it's less than ideal,  but this is,  this is an example of how,
[02:45:18] you can isolate it because the problem is with it,
[02:45:22] Pretend you have a nested router, like this.
[02:45:24] Right. And everything...
[02:45:26] Like this isn't a good example.
[02:45:28] because it's like unrelated records. But if you had
[02:45:32] Twitter.
[02:45:33] Okay.
[02:45:34] And when I'm on my profile,
[02:45:38] Yes, this loads my profile data, but presumably
[02:45:41] Down here, we also need my profile data as well, even though this is a separate route section. So if I
[02:45:47] Just swap
[02:45:50] this section.
[02:45:53] and only render this section,
[02:45:55] I still need...
[02:45:56] The route data...
[02:45:58] that I would have
[02:46:00] got for this section. Now if I'm rendering the whole page
[02:46:05] I don't want to fetch it here and fetch it here. And the pattern currently in solid is, well,  you can just pass it down using the data functions and then you can use like,
[02:46:13] chain it off and go okay I have this data you know as well but without context you can't do that so
[02:46:19] You actually start authoring
[02:46:22] your route sections so they fetch all the data that they need.
[02:46:27] essentially,
[02:46:29] So you will fetch the same thing here and fetch it again here.
[02:46:33] And
[02:46:35] the cash will account for it. That's basically the design here.
[02:46:52] Unrelated question: What's the best way of passing data from islands to outside of them, for example, to the server?
[02:46:58] You can't, right?  That's the whole...  You can do a mutation, but you have to understand  if you pass something from an island to the server,  then it would have to go over a network boundary.  So, like...
[02:47:11] This is why there's the rules where you can't import server components inside a client component.
[02:47:16] And it's the same for Astro or any islands thing. It's like the, these,
[02:47:21] If you're going to go back to the server, you have to ensure that you go back to the server in a single round trip.
[02:47:26] like you don't want to be like doing this weird like server to client to server to client like waterfall game.  So usually it involves some kind of mutation or navigation which tells the server to re-render
[02:47:38] from
[02:47:39] a certain portion of the page.
[02:47:42] And then...
[02:47:44] Obviously, we can persist the islands in between if we can, but essentially, like you're you're asking for a chunk of the page back. That's kind of the model here.
[02:47:56] So this kind of ensures that
[02:48:00] Like you only do a single...
[02:48:03] you only go to the server once for the whole
[02:48:06] Thank you.
[02:48:08] Yeah. Like,
[02:48:09] Yeah, it's a reload or a partial reload.
[02:48:15] Yeah, but there's a reason why the React team's giving people a hard time about this mentality.  As I said, if people start doing stuff this way, I don't call it islands anymore.  I call it lakes, and it's like the backwards...
[02:48:29] um
[02:48:29] It's kind of interesting because Nuxt said, oh yeah, we have server components, but their implementation was basically a lakes implementation, which is cool, but also kind of like...
[02:48:40] It doesn't give you the benefits.  Lakes don't help you with the serialization double data problem.
[02:48:46] Because you can't know, like once you're in a zone where you're importing certain components into the client components, you can't know that you don't need it for hydration.
[02:48:56] Okay, so...
[02:48:57] But yeah, so I started playing with something. I got another HackMD, just kind of run through.
[02:49:04] Um,
[02:49:06] Oh...
[02:49:09] Let's see if I can just sign in with GitHub and not have to worry about any of this crap.
[02:49:16] Thank you.
[02:49:17] This is hot off the presses.  You guys get to see the rough work for an RFC here.  But...
[02:49:23] I'm trying to figure out if...
[02:49:27] if this makes sense, essentially, which is
[02:49:32] how to isolate
[02:49:36] like both keep things simple
[02:49:39] and extensible
[02:49:41] but also be able to serve both these worlds.
[02:49:44] Why not async dollar sign? We got to be careful with those.
[02:49:48] If anything that I've learned working on the bling stuff is like having too many dollar sign functions is bad.
[02:49:54] Um...
[02:49:57] Like...
[02:49:58] it
[02:49:59] it's basically like it mushrooms out your API with a lot of like unexpected things. Like it's okay if you mark some very clear boundaries, but if it's everywhere, it's, it's craziness.
[02:50:11] I want to backpedal a lot there to find the right balance.  And I think, yeah, async, what I'm talking about, create async here, is actually create resource.  I was like, what if...
[02:50:23] we got rid of Crate Resource  for a much, much simpler primitive.  You could build Crate Resource  with the primitives that I'm going to show today.  But the idea is like,  what if we could...
[02:50:35] build this more fundamentally, especially with a cash in mind.
[02:50:40] You stole their sign. You all are the best.
[02:50:46] Right.
[02:50:47] Thank you.
[02:50:47] So,
[02:50:48] Here's a bit of a proposal here. You know what? I'll share this right now so people follow around, but this document is
[02:50:56] hardly
[02:50:58] ready.
[02:51:07] Thank you.
[02:51:12] Okay.
[02:51:13] Thank you.
[02:51:16] Create resource is not too simple. I get a lot of flack on create resource.
[02:51:21] *laughs*
[02:51:23] .
[02:51:24] But yeah, maybe this is like way too framework author kind of mindset here.  But what if...
[02:51:33] We just had...
[02:51:35] create async. And what create async does is it takes an async function and turns it into a signal.
[02:51:40] Okay.
[02:51:42] It looks a lot like Create Memo.
[02:51:45] because it is tracking.
[02:51:48] on the top level.
[02:51:49] But the idea is that it takes an async, it just takes a promise.  Like this could just be, it's a function that returns a promise.  So this could be an async function itself.  I use this example because...
[02:52:01] Um...
[02:52:02] there's benefit it can also not take a promise because it can resolve synchronously
[02:52:07] So like if you make it top level async function,
[02:52:10] It will always receive...
[02:52:12] Async?
[02:52:13] But this is the idea, yeah.  Create promise was an idea, but it doesn't create a promise.  It actually turns a promise into a signal.
[02:52:20] .
[02:52:21] Right.
[02:52:24] So, you know, I was just showing the shorthand.  Unlike a memo, I wasn't going to feed the previous value in because of the asynchronously.  I think it makes it hard.  But basically, you could just go like create async, fetch users, and then get the data out.  And this would be a signal, like you just call as a function.
[02:52:37] Um,
[02:52:41] Yeah, what's going on? Did we just get a raid?
[02:52:47] Node haters raid.  Wow, that's a lot of people.  Oh, it's a Primogen.
[02:52:53] Haha, I see.
[02:52:57] - How are you doing?
[02:52:58] - Okay.
[02:52:59] Well...
[02:53:00] I don't know how interesting my stuff will be to you all. I'm going over a new
[02:53:05] proposal that I'm working on here for
[02:53:09] how to handle async data fetching the feature in Zolid.
[02:53:12] Um,
[02:53:13] I just spent two hours going over the history of isomorphic data fetching from everything from
[02:53:20] you know, HTML as an API, you know, stuff like HTMX all the way to stuff like react server components.
[02:53:26] And now, armed with this knowledge, I'm looking at...
[02:53:33] - Thank you.
[02:53:34] what we can actually build here.
[02:53:37] *cough*
[02:53:39] All right.
[02:53:42] Well, Prime has a lot of people.
[02:53:46] Uh...
[02:53:52] Yeah, no, I'm sorry. I'm not very loud.
[02:53:55] It's so funny because Prime himself is such a...
[02:53:58] you know, gentle soul, so to speak. But then like, you put them in front of a camera,
[02:54:04] solid  bigger than  HTMX  thank you
[02:54:10] I honestly haven't seen much of Prime's coverage on Solid recently.  He was talking all about how he was using it at Netflix for a little bit,  but then...
[02:54:20] um...
[02:54:21] I don't know. It seems like maybe Rich Harris swept him off his feet a little bit with Svelte. And then now everyone seems to be talking about...
[02:54:29] what do you call it?
[02:54:32] HTMX and stuff.
[02:54:38] Yeah, you think HTMX got them?
[02:54:40] Yeah, I don't know. HTMX?
[02:54:44] is...
[02:54:45] It does something.
[02:54:46] It's nothing that I really care to do, but it does something.
[02:54:52] The problem is like it's a good solution for like a certain space of problems, but it's like a space that I
[02:55:00] Like, I don't...
[02:55:01] care about remotely. I feel like if you wanted to solve that, you could have done that 20 years ago and like have basically the same solution as HTMX today.
[02:55:09] So, yeah.
[02:55:11] Yeah.
[02:55:14] Thank you.
[02:55:16] Bun, talk about bun actually, you know what? Let's just check right now.
[02:55:20] I think
[02:55:22] Yeah, after I get past the baby food, yeah.
[02:55:26] I think if I go to GitHub,
[02:55:29] Let me check this pull request. I got to do the release. I haven't done the release yet. Yeah, I did merge it. Good to know. I just haven't. It was like earlier. I didn't get to it.
[02:55:38] We just got a bun adapter for Solid Start.
[02:55:41] Um...
[02:55:42] So...
[02:55:44] Yeah, great work by Pan93412.  I just merged it.  I just didn't get a chance to check it out.
[02:55:52] Bunn is incredible, right, compared to Node?
[02:55:55] like double our requests per second,
[02:56:00] Reduce 33% off the top of our RAM usage too. 33%. Yeah, I mean, that's pretty good.
[02:56:10] Thank you.
[02:56:12] Thank you.
[02:56:13] I didn't try the bench, I have to say.  Um...
[02:56:16] .
[02:56:20] Yeah, to be fair, they were so close.  Jared reached out to me and he's like, I've got Bun in for 0.8.  And then he's like, ArsoSolid in for Bun 0.8.  And then he's like, actually, no, I don't.
[02:56:31] It was like so, so close. And then we got in 1.0, but it kind of snuck under the radar.  We didn't actually have an adapter yet, but it looks like we're good to go to the races.
[02:56:42] Yeah, now I understand why people like Prime and Theo don't keep up with chat.  I usually try to respond to every single person.
[02:56:51] But that just does not work here.
[02:56:57] Yeah.
[02:56:58] Yeah.
[02:56:59] Thank you.
[02:57:01] Thank you.
[02:57:03] FunX Solid Start Dev.  There you go.
[02:57:09] - Thank you.
[02:57:10] Okay, okay, let's get to know.
[02:57:15] Yeah, no, that's definitely interesting. I'm obviously excited by any runtime that's that fast. I mean, because you start getting these pictures in your mind, right?
[02:57:26] I've done some benchmarks in the past where, let's say,  Solid's like 10 times faster server rendering than React, right?  So then you're like, if Bun is twice as fast or three times faster than Node,
[02:57:37] Does that make make it
[02:57:38] But performance doesn't multiply like that. That's not how it works. It's always the next bottleneck that gets you. Just because something's X faster and something's X faster, putting them together doesn't just multiply, unfortunately.
[02:57:52] Yeah.
[02:57:53] Yeah.
[02:57:54] - Yeah.
[02:57:55] I'm going to go to the next one.
[02:57:57] runtime bun time yeah no there's endless puns on that
[02:58:05] Okay, I haven't given my bun take. I saw Theo's, I saw a bit of what Prime was talking about.
[02:58:13] I have no hardship towards the people on Node.  So I'm actually very grateful for the people on Node.  So I'm not going to say anything on that side.
[02:58:20] It's...
[02:58:21] On one side, I think it's really cool.  I'm really glad to see people get really stoked about Bun and excited about new technology.
[02:58:28] It feels like in the framework space, we don't get that same kind of thing.  You know, like we get a bit of it, but like, it still feels like, you know, most people are like,
[02:58:35] I'm just going to keep on using React. It can be, you know,
[02:58:38] whatever, but I'm going to keep on using it.  Where Bun people are like, yeah, let's go.
[02:58:44] And
[02:58:45] But the thing is...
[02:58:48] benchmarks, and I know this because I do lots of benchmarking,
[02:58:53] Like, it's the death by a thousand cuts approach.  Like, you can make every little piece faster, but not the piece that matters.  So, like, you know, there's a thing that calls test well.  I know this...
[02:59:05] pretty well myself because solid is also a very much test well kind of framework, right? If, if someone goes out and goes, Hey, how fast can I update this text node? I've seen people give me benchmarks and they're like literally like sitting there going like,
[02:59:18] like without a limit, just smashing how fast can I update this text node in the Dom?  And it's like, is Solve the fastest? Obviously.
[02:59:25] But like...
[02:59:25] that's that's not what like an application is right um
[02:59:30] Yeah.
[02:59:32] Bun has a bit of that vibe to it where
[02:59:35] you can find a specific simple test and run it and Bun just kills it. And then
[02:59:42] you know, times that by a hundred or a thousand and
[02:59:45] That's the experience you want. The hope is you do enough of that stuff and put it together
[02:59:50] you know,
[02:59:51] you just end up with, on average, a better, faster experience.
[02:59:54] My experience is that is actually true, but it's never as...
[02:59:59] you know--
[03:00:00] exaggerated as the specific benchmark will show.
[03:00:06] Thank you.
[03:00:12] Mm-hmm.
[03:00:13] Without Node, we wouldn't be here, yeah.  That is definitely the thing.  When you think about what Node did in the first place,  it's kind of crazy, right?  This is a time period when no one would let...
[03:00:23] Like, no one even liked JavaScript in their browser. Like, like...
[03:00:28] I was a developer back then, I reveal my age a little bit, but like
[03:00:32] I worked on teams where we were doing like C#, you know, and .NET and stuff.  And people would be like, no, no, no, you know, I don't touch the JavaScript.  Like you were working just so that you could do like the most unoptimal stuff in the browser, just so you could keep on writing C# or Java or Rails or whatever the hell.  And then it was like, you know, like no one even wanted to like see that JavaScript existed.  And we did the clunkiest solutions like these weird update panels and all that stuff.
[03:01:00] That's why it's always funny when I see stuff like HTMX, because I get those vibes from it.  But the problem is we've learned stuff since then.
[03:01:07] But...
[03:01:09] this is kind of, you know, Node was an insane idea and it almost worked.
[03:01:17] Unfortunately, you know, we're kind of maybe stuck with it on that side, but like
[03:01:21] Even Ryan Dahl himself came back with Dino and was like,  I didn't do a bunch of stuff right.  And it makes it hard because there's a lot of back-end people,  security-oriented, who are just like,  no, Node will never suffice for our scenario.  But like...
[03:01:34] Without Node...
[03:01:36] Like, this is a very, very different story.
[03:01:39] Thank you.
[03:01:46] Thank you.
[03:01:48] Thank you.
[03:01:50] Thank you.
[03:01:51] Yeah.  See, it's funny.  With this audience...
[03:01:53] Um...
[03:01:54] which obviously came and just completely sidetracked what I was talking about.  We'll get back to it in a few.
[03:02:00] I mean, this is where my kind of hot takes are, which probably bug a bunch of you guys a bit.  But
[03:02:07] If you're not using JavaScript on the server, you're doing it wrong.
[03:02:10] That's basically it.
[03:02:12] Like...
[03:02:13] the problem is
[03:02:17] There is okay. I guess it depends on your scale to a certain degree because obviously you
[03:02:22] Server is money, but if you care about end user
[03:02:25] experience.
[03:02:26] You can make...
[03:02:27] more significant improvements by running JavaScript on your server than anything you can do on the server with any language you choose.
[03:02:36] Right?
[03:02:38] like the problem is I
[03:02:41] We need...
[03:02:43] to have
[03:02:46] Okay.
[03:02:47] certain like the cost of the network is more expensive than the cost of the, you know,
[03:02:52] the,
[03:02:53] the hard drive, so to speak, or even the internal network you're running off, your protobufs or whatever. Essentially, the
[03:03:02] the separation between client and server is so much more impactful than lowering the latency that you're doing during your server rendering. Don't get me wrong, it's expensive. Every millisecond costs money, bottlenecks, more servers, more things.
[03:03:19] up to a certain scale,
[03:03:21] your end users will pay more
[03:03:23] for the network costs, which means that the only way to actually accomplish this stuff,  you know, get low hydration, reduce JavaScript bundles, improve
[03:03:33] load sizes, all this stuff is actually by having frameworks that can initialize the framework on the server. At extremes you have stuff like resumability, where you don't have to run the stuff again on the client, but islands, partial hydration server components, all these technologies basically rely on the fact that JavaScript runs on the server.
[03:03:56] Right.
[03:03:58] Not that all solutions are great, right?  Like...
[03:04:01] There are big bloated...
[03:04:03] meta frameworks built on JavaScript,
[03:04:06] that really haven't improved the situation much at all. But
[03:04:14] It is where it has to start from.
[03:04:19] Actually, yeah, is this...
[03:04:23] This is built-in button APIs.
[03:04:24] um what we're looking at here no i i think this is just
[03:04:30] I think an adapter is just
[03:04:31] Yeah, this is just some JavaScript.
[03:04:34] Yeah, this is just a way of mapping the runtime stuff. The build is still... Bun supports VEAT, which supports Solid Start.
[03:04:43] And that's like we're not using yeah, this is just using beat.
[03:04:49] Yeah, see, Wasm is your other way out. But unfortunately, like, don't get me wrong. Like,
[03:04:55] I...
[03:04:58] it's a problem that JavaScript has such a strong arm,  but it's because it's the only language that can load and run effectively.
[03:05:05] efficiently in the browser right from initial startup on a page you've never been to before.
[03:05:11] like wasm still has that overhead not performance overhead as you've seen with leptose um
[03:05:17] Greg is a regular on the stream here. We always talk reactivity. I love leptos.
[03:05:21] It's more of just like the overhead of
[03:05:26] like
[03:05:27] Getting started. I love every time though that we come up with new techniques to improve JavaScript actually improves WASM progressive enhancement and
[03:05:36] uh,
[03:05:37] We did this whole strategy with solid in JavaScript.
[03:05:42] Greg went and implemented it in Leptos and then he had progressive enhancement, which made his pages interactive before the wasm loaded.
[03:05:49] I showed it recently on stream, I don't think I have it in front of me right now, but he did an islands demo using similar technique that Solid used to doing islands.
[03:05:59] Again, he shrunk his WASM package down for his Hacker News demo down to 49 kilobytes.  Do you know how small that is?  Yes, that's way bigger than Solid's version or Astro's version or...
[03:06:12] You know, but...
[03:06:13] that's still half the size of Next.js and 20-30% smaller than Remix.  So if you're talking performance on both load and execution,
[03:06:25] and React or React frameworks are what you're comparing it to?
[03:06:29] Leftos looks pretty good.
[03:06:32] *sniff*
[03:06:33] If you're looking against other JavaScript frameworks that are more performant, there's still a big gap. But if React's the benchmark,
[03:06:41] I mean,
[03:06:42] Thank you.
[03:06:42] Yeah.
[03:06:44] Thank you.
[03:06:49] The big thing too is like obviously when you have Rust on the back end doing rendering,
[03:06:54] I was talking about how solid is roughly 8 to 10 times faster than React server rendering.
[03:06:59] Leptose is like 30 times faster.
[03:07:02] Right? So even--
[03:07:04] This is where the whole comparison I was talking about going through. I was like if I took bun and I took solid and
[03:07:10] Could I catch up to Leptos on the server?
[03:07:14] As I said, that's not how things work.  But that was where the comparison came to my mind.  You know, Bun 3X, Solid 10X...
[03:07:20] Leptos 30x.
[03:07:24] okay isomorphic data fetching um that's
[03:07:31] That is a...
[03:07:33] The idea that you can have the same data model, both on the server and the client,
[03:07:38] Like that's, again, something React doesn't have right now with the server components.  You use async functions and then you use tan stack query on the client.
[03:07:44] The thing is, a lot of these frameworks like Git Server-Side Props, they have these very framework-specific solutions that didn't work the same way.  If you had to do something on the server, you do it one way, and then a data loader like Remix, and the client, you do it the other way.  Solid actually solved this, and I was really happy that we came up with a solution that
[03:08:06] lets you use stuff like React Query
[03:08:09] almost first party like in serialization, streaming, SSR,
[03:08:13] all works automatically by just, you just put it in,
[03:08:17] hoisting, like all the stuff, even server functions, which is our mechanism for like querying the database directly inside like a TAN stack query call.
[03:08:26] All works.
[03:08:27] Perfect.
[03:08:28] But then server components came out and just threw a huge wrench in things because you  can't have context in server components.  And I am very interested in server components.  I wrote an article this week.
[03:08:39] -
[03:08:42] basically about this kind of stuff.
[03:08:45] Yes, Svelte's solution is similar other than it's not as extensible. Svelte has loaders like Remix where you can say this is a server loader or this is an isomorphic loader. The pattern that we developed in Solid is a bit like where SvelteKit started where we have an isomorphic pattern and then we...
[03:09:06] I can actually grab something here as a code example. Yeah. Like, um,
[03:09:14] - Thank you.
[03:09:14] Yeah, I mean, this is kind of a simple example, but our router takes like a data function
[03:09:20] that runs on the client and the server.  And inside the state of function, you can literally make as many like
[03:09:26] things you want. Like it's all, it has this thing called a resource,  which auto serializes auto handles streaming suspense, all that stuff.  So it's like a data fetching primitive that works on both sides.
[03:09:34] and you can just tan stack query for example is built on this primitive so you can just like  for every route set up your data
[03:09:41] plan essentially and then use route data to basically insert into your component. And what's cool about this is you could if you want this fetch user can actually be a server function. So it always runs on the server, even if it's like x triggered from the client or the server, that's kind of like the pattern here. And because it's fine grained reactivity, you can listen to certain parameters from search queries in each of these queries and actually have them, you know, initially all run, but then as things update,
[03:10:07] trigger independently to do fine grained
[03:10:09] pinpoint updates in your app without re-rendering anything. So like you could like, you know,  change the search query parameter. It affects one resource in your route data. In fact, that resource  might be a tan stack query thing that has a cache on it or something that you invalidated, whatever,  it doesn't matter. And then that signal is used somewhere down your tree somewhere where you  pulled it out through user route data. And you basically do the fetch, get the data back and  update the one place in the DOM, no re-render. That's, that's basically like the solution.
[03:10:39] server works on both sides. As I said, I was very happy with the solution until I started  trying to work on server component stuff.
[03:10:47] Thank you.
[03:10:52] Yeah, the problem is, the tricky part with the loaders is, like, this is kind of like  the loader pattern, except it's not async, it's non-blocking, essentially.  Remix came up with this whole deferred thing so that they could...
[03:11:05] Say wait for these don't wait for these in our case we can configure our resources to do that kind of thing  but the key part about being non-blocking is you can start the data fetching and start rendering and then like have suspense fill in the holes as you go and  Start streaming stuff as it goes  So that was like a big part of this. It's not just like a blocking async function. It's at each one of these resources is its own async function basically and
[03:11:29] Um,
[03:11:31] It's one layer removed, so it's a little bit more complicated, but it's incredibly powerful.
[03:11:36] But...
[03:11:37] Yeah.
[03:11:40] So, yeah, the TANSTAC people were out of their mind when they saw it.  Because the guy who's working on the Solid Query thing literally came into Solid Start and went into the router.  And this isn't even Solid Start specific.  This is just the router I made.  And he went in and he just put...
[03:11:56] create query instead of use query and install it to create. You just stuck it in there
[03:12:02] And then like...
[03:12:03] He did a database call inside a server function that he passed to the query function.
[03:12:09] And then it just worked. The page streamed, it auto serialized the data. He didn't have to go like register anything. It literally just worked immediately, automatically. So.
[03:12:20] Yeah.
[03:12:21] Yeah, I should thank some people for subbing. I've been getting subs a bunch just now. We got Ivan Liz. I mean, I got to just go back. There's so many comments. I can't do it. You can tell how amateur I am because I'm on StreamYard, which means I miss all the subs unless I go back into Twitch.
[03:12:42] Sir Guivara, honestly, there's too many of you. Thank you so much for subbing the channel.
[03:12:52] Algebraic effects said hello. Yeah, no.
[03:12:57] Yeah, I mean, this is...
[03:13:00] A lot of the research that we're doing right now into future reactivity is playing around with this sort of injection pattern without coloration.
[03:13:10] I mean, that's a whole other topic. My stream gets very technical. I lose people a lot because of that, because I'm a framework author. I can't help it. But, yeah.
[03:13:27] Yeah, yeah. How should I put it? Like, I wrote, I did mention this earlier, I wrote an article yesterday, and I'll drop it in here for new people. But like, the gist of it is,
[03:13:43] Islands are sweet.
[03:13:46] Server components are the natural extension of islands when you want client-side routing just like slapping a view transition API.
[03:13:52] on top of islands.
[03:13:53] does not give you server components.
[03:13:56] just using HTMX to swap out some HTML.
[03:13:59] does not give you server components. There's a challenge with hydrating global state when doing  these kind of partial swap outs because the server is not aware of the state that's updated in the  client which can cause mismatches on what gets rendered on the server which basically completely  breaks hydration. So,
[03:14:17] React actually solves that problem by being very smart about where they render stuff and they can handle it automatically.
[03:14:24] And...
[03:14:25] What this means though is that
[03:14:29] Yeah, like you can global state or like client context has to stay in client components, right?  The server can have a sort of context if you want.  But the only way that works is you have to actually serialize that data to the client and then send it back again on the request.  You know, the old like ASP.NET days of view state kind of problems.  You don't really want to go there.  The URL is significant.
[03:14:50] enough but the
[03:14:52] impact of not having a shareable context between client and server components on the server  makes data fetching patterns harder. You can't just like use route data, um,
[03:15:02] Yeah, I'm almost caught back to where I was going here.  See, everything in a router these days uses context.  It's like use route data, outlets,  all these things use context.  And essentially, while the client components  could still leverage this,  server component type architecture can't.  And the reason I'm looking at Universal is,
[03:15:21] I believe
[03:15:22] that the split between client server component can be automated.  I worked on at eBay before, you know, before I worked full time Netlify on a, um,
[03:15:32] on solid and eBay's framework has had automated islands for almost a decade, compiler driven.
[03:15:39] so you don't have to use client, it just knows.
[03:15:43] I think there's a future potentially where that is a thing. So I'm very interested in
[03:15:48] Keeping the API is the same. I don't want like you can use async functions here. Can't use async functions here all these weird rules if you can keep it.
[03:15:55] the same, you can basically smooth out the automation between that as long as you find a good pattern.
[03:16:03] Thank you.
[03:16:04] Thank you.
[03:16:04] Thank you.
[03:16:05] Okay.
[03:16:13] No bundler required. Server components
[03:16:16] You need, the reason you need, I mean, they'd be just wrapping their bundling piece.  You need bundler for server components and islands because otherwise, I mean, you don't  need to need it, but the problem is the client components end up being like each island ends  up being an individual package.  The benefit of being able to use a bundler to do the analysis is you can actually pull  the islands of stuff together into single chunks and instead of spamming your browser  loading situation.
[03:16:43] Um...
[03:16:44] SolidStart was largely created by myself and another developer, Nikhil Sarif, who's actually going to be a guest on my stream next week. And he's also responsible for bringing server components to Vite.
[03:16:56] So he did the React server component bundler implementation for VEAT, and he's building a lot of the foundational stuff for SolidStart. And yeah, we...
[03:17:06] It's our opinion that part is actually pretty important. I could see
[03:17:10] Thank you.
[03:17:11] Yeah, I wonder how much this is marketing.  We're going to have to see what that looks like.
[03:17:18] What I've noticed is how captioning and creating solves the issue of server not knowing about client-side context.
[03:17:23] Um,
[03:17:24] Okay, we're getting there.  Just two seconds.
[03:17:30] Does Solids have anything for mobile? We don't have React Native, but people have been using stuff like Tori's been working on a mobile compatible thing. We have good Tori integration. NativeScript, they love us as well, but it's in the ecosystem right now.
[03:17:50] - Thank you.
[03:17:55] - Thank you.
[03:17:56] Thank you.
[03:17:57] - Yeah.
[03:17:59] Well, I mean, when I say about that, yeah, I'm actually not sure.
[03:18:03] Yeah.
[03:18:04] Yeah, I'm actually not too familiar with Astros bundling, to be fair.
[03:18:15] eBay uses Marco.
[03:18:18] their own framework, which  basically was the pioneer of  islands and out-of-order streaming.  They've been basically doing...
[03:18:25] this island out of order streaming thing for about a decade.
[03:18:31] Um...
[03:18:33] We use React on the checkout, but generally speaking, the position at eBay is React is too slow. The page load matters too much.
[03:18:45] Even, you know...
[03:18:49] - Yeah.
[03:18:51] So yeah, sorry. Yeah, where I was getting to is I was working on this kind of proposal here on these data fetching primitives.
[03:19:00] which
[03:19:02] Which leads back to this
[03:19:04] Where was it? So hard to keep up with chat.
[03:19:14] Okay, I got a couple of other questions before I get back to this technical thing.  I have a non-technical question.  Using framework adds an insane amount of abstraction to the software developer, which is great, but how do you grow as a developer without doing this?
[03:19:26] Yeah, I'm very aware of the complexity.  That's why every once in a while we do need a bit of a reset.  Yeah.
[03:19:33] so that we can back up and start over again.
[03:19:37] It's... I mean, that's... If I have any interest in HTMX, it's like maybe...
[03:19:42] There's something remotely there. I doubt it highly, but I'm always looking for that one step backwards before two steps forwards when we pivot, because complexity is very concerning. You hope your new abstractions fit as nicely as your old. One of the challenges of server components is the fact that it changes stuff on people.
[03:20:05] like their expectations. The hope is if you come in something server component
[03:20:10] in the first place, then you're actually okay. But like, I don't know. That's, I, I,
[03:20:15] We haven't seen that successful in migration. It's hard when you attack things at the root of what they do instead of attacking at the leaves.
[03:20:24] Anyway.
[03:20:26] Um...
[03:20:30] So yeah, I mean, what I've been working on here is a new async primitive and solid. The idea is that
[03:20:38] It basically turns any promise
[03:20:41] into a signal. So you could just go like, take an async function, like fetch users. This one has no arguments. So I just showed like this, for example, and then it'd be a signal.
[03:20:51] Um...
[03:20:52] And we already have something like this called create resource.  But the idea with Solve 2.0 is that...
[03:20:59] We're going to try and do something...
[03:21:02] very similar to what React does, more so than we did before, but only along the Reactographs.
[03:21:07] i.e. this data where it is read
[03:21:11] If it's not ready, it will throw.
[03:21:13] But because in Solid everything is reactive wrappers like memos and reactive expressions in JSX, what will happen is
[03:21:22] we only throw along the reactive graph. So you can actually render the page past
[03:21:28] where you create this thing, you can render other parts of the page, but then when you get to the part that reads it, like the effect,
[03:21:35] And it goes, you know, maybe you took the user and you grabbed
[03:21:39] their name off it. So this is user, you know, I said data here, but
[03:21:43] Whatever.
[03:21:44] data is actually terrible. Let's just call it user.
[03:21:47] And you went user
[03:21:49] You did something like user.name somewhere.
[03:21:54] When we read user,
[03:21:55] in the effect or whatever we could throw
[03:21:58] and then when it resolves, continue from just inserting that text in that one place.
[03:22:03] if we derive something like capital create memo,  we can actually chain the throwing through the reactive graph,  and the end user never has to null check,  but essentially,
[03:22:14] Um,
[03:22:15] It's blocking but it doesn't feel like blocking because it doesn't block at a component level.  It only blocks along the graph to where it's ultimately used.  You can render six components, pass this through as a prop,
[03:22:26] Not be blocked up here you can get all that rendering done and then like where it gets consumed down at the bottom and
[03:22:33] Like that's the laser point bullseye of where the DOM gets updated through async.  That's kind of the idea with the reactivity in Solid 2.0.
[03:22:45] And...
[03:22:48] the error boundaries are still going to play around like
[03:22:53] the effects, essentially. Because memos are going to be completely lazy. So on pull, these ones aren't, to be fair, because we need to avoid the diamond problem. So data fetching, like async, has to run
[03:23:06] eagerly to start the fetching process, but when you pull it through, that's when it throws if it's not ready.
[03:23:11] Um,
[03:23:12] And it.
[03:23:13] when it basically throws all the way down to the effect that like asks for the question
[03:23:18] Like, can I have this value?  And then in our case, we'll handle that with suspense.  But if it was like an actual error,  the idea is reactivity,  if you had an error somewhere higher  in the reactive graph and you threw,  then you throw down to the effect,  and then the effect would use something like context  to look up to where the error boundary is.  So the data is somewhere over wherever it is, it lives.  The effect that consumes it
[03:23:46] ends up pulling the data it needs to, and then
[03:23:50] if it errors or hits like a suspenseful situation, it then looks back up the tree
[03:23:56] for error boundaries or suspense boundaries. But that's completely, it's all read based and it's completely independent of where the data is initiated.
[03:24:11] solid does have error boundaries on the server  we do something kind of funny right now  I don't know if it's like the best because it might not work as well  with server components but what we actually do is  the reason it's hard to do error boundaries on the server  is because of out of order streaming  if you're inside suspense  and you have an error boundary inside and it catches it
[03:24:28] That's pretty easy because you can always just like inside the suspense boundary and
[03:24:32] handle the error and change it there. But what if the error boundaries already been flushed to the client?  So like you have an error boundary wrapping suspense. So you can go there you render the outside the app you render the error boundary to get into suspense and
[03:24:45] It suspends. That's fine.  So you flush the top up to the suspense boundary.  And then the...
[03:24:52] the request fails.
[03:24:55] What happens in solid is it throws the error and goes up looking for the error boundary.  But if it hits a suspense boundary...
[03:25:02] and it realizes that its parents already flushed, like if it hadn't flushed, it just keeps on going up.  But if it realizes its parents already flushed,
[03:25:09] It goes, OK, that's fine.  And it throws the error across the network.  And then the client catches the error boundary  and does the re-render there.
[03:25:19] So yeah, it's kind of an interesting pattern. But yeah, we basically throw the error across  the network to do error boundaries on the server.
[03:25:31] So
[03:25:33] Yeah, like the basic premise here is we'll be able to create these async reactive graphs
[03:25:39] using this
[03:25:41] mechanism and it'll propagate through the rest of the graph. This is a very simple approach. If you've ever seen create resource today, we have a lot more features, we have all these like loading and error states, but I want to leave that for the most part, like you can ask the question,
[03:25:57] but really on anything, because if you think about it,
[03:26:00] if something consumes
[03:26:02] this,  uh,
[03:26:03] this async signal
[03:26:06] it's possible for a memo to be suspended too,  you know, like a computed value.  So like...
[03:26:12] Technically anything in the reactor tree could be waiting, so to speak.  But I'd rather defer to stuff like air boundaries and suspense where possible,
[03:26:20] Um...
[03:26:21] And this API doesn't have a mutate or refetch event because it's very pure based. It's just based on the input and the output. I did it on purpose. If you want to mutate this, what I'm going to suggest is we have a new primitive coming in solid 2.0, which adds a
[03:26:38] It's it adds a layer on top of immutable instead of making things mutable, which is not good. It actually is
[03:26:46] uses
[03:26:47] immutable thing as a source and then has the ability to override it. The reason
[03:26:53] This has a lot to do with how reactivity propagates the graph. I'm not going into details with it probably right now, but it's it's it's  valuable to not just like
[03:27:04] have people mutating stuff left, right and center.  We want to push people to derive values as much as possible.  Most of the time when you do mutation, it's temporary.  It's like I'm working on something and then I'm going to commit it back and get the source to update.
[03:27:19] If you update the user's name, you might need to temporarily change it, but ultimately what you're going to do is you're going to post it to the server
[03:27:26] and then the source of truth is updated and the data comes through derived.
[03:27:31] update the user,
[03:27:33] user gets refetched,
[03:27:35] Writable gets reset to match actually the current value.  And because the name that you just saved is still the name,
[03:27:42] It doesn't update anything in the DOM.
[03:27:44] We're trying to force these drive cycles. It's just better that way.
[03:27:50] - Yeah.
[03:27:50] But the big change here that I'm thinking about is create resources like super powered. And what I'm what I'm trying to
[03:27:56] What I'm thinking about right now is actually...
[03:28:00] defer
[03:28:02] that automation of serialization
[03:28:05] and stuff to a cache API very similar to what React does.
[03:28:10] where you could basically just use a memoized function
[03:28:14] Um...
[03:28:14] In the case of SSR, it could just be for the life of the request.
[03:28:20] The idea is,
[03:28:22] We could...
[03:28:23] Basically,
[03:28:24] use a take this kind of cache api and give it a cache key  and then use that as the auto hydration mechanism it kind of splits create  resource in half there's basically this cache which you can fetch  anywhere outside of the reactive graph you can do it in a preload stage you can  do this anywhere and warm your cache
[03:28:42] And then,
[03:28:43] you just call the same function later in your create async call and it'll recognize it's the  same promise and resolve through so you this way we can isolate this data fetching we can only we  can with server components or type stuff only render partials of the page you know like i always  use a remix page you know if you switch
[03:29:01] Um...
[03:29:03] between subscriptions and invoices, we only have to render this part. We don't have to render the whole thing.
[03:29:10] That's hard to do when you have these hierarchical data dependencies.  But if you have a
[03:29:15] Cache above it's like when you do the initial render they hit the same cache key, so they don't double fetch and
[03:29:21] But when you do the specific render, yeah, this section does need
[03:29:25] the data from the section above.  Like this is a terrible example I just said,  but Twitter is a better example, right?  I'm on my user page.
[03:29:33] You know, there's this universal nav. I have this section that's all my user stuff, but in here I have tabs, right?
[03:29:39] and these tabs
[03:29:41] Um...
[03:29:42] might still require user information that I loaded up here from above.  So that's general the thing.
[03:29:51] You reset a cache. That's the default behavior, right? The cache is actually just, it's not even reset. It's just literally tied to the request. So like using something like
[03:30:00] sync local storage kind of idea.
[03:30:02] Um, you
[03:30:04] It just goes away.  It lives the lifecycle of the request.  It'd be interesting if you could store the cache on the session as well.  That's another option.  Because the cache API is pretty flexible, right?  As long as the arguments are serializable, you just need to basically have an options object.  I was thinking about in the browser, you could also set like...
[03:30:20] max age and then have a way of serializing. It's basically, like honestly, it's a TanStack query, largely this cache API.
[03:30:28] but by pulling it out
[03:30:32] we can define the behavior we want on our API requests,  independent of this really powerful async primitive.  The sad part,
[03:30:40] you know that I like to create resources that auto puts it together but a lot of people want more control and this means that like
[03:30:47] what you're going to do a lot of with these two APIs is essentially...
[03:30:51] Define an API somewhere.
[03:30:53] wrap it in the cache, set up the right cache keys, and then call them past that fetch user that you set up the cache version, pass it to your create async. So there is two wrappers here, it is a little bit more involved. But then when you look at any framework,
[03:31:07] You know, I guess React is proposing the same involvement because instead of create async, they would just have a wait or use.
[03:31:13] The difference here is this is so much more powerful than something that suspends at a component level because if you think about it,
[03:31:19] in those solutions that kind of block you like get there and you're like stuck
[03:31:23] Like in solid, you can
[03:31:26] Get to the top level page, create your async stuff, write the suspense boundary below it
[03:31:31] right and then use the async value below that suspense boundary
[03:31:35] I think the reason that Next App Directory has like
[03:31:39] you know, that crazy file system routing with all the different files is if you started
[03:31:45] Each Routes section
[03:31:47] You would have to write like three nested components just to get started on every page because your suspense can't be the same component that fetches the data. It has to be above it. And you have to put your error boundary above that. You know what I mean? So they do this so they can wire it. Where in the case of Solid, you can literally just open up a file and just type it all in and it all works. So I think this is one of those goals.
[03:32:11] - Thank you.
[03:32:12] Thank you.
[03:32:16] Cray route data does have a deduping cache.
[03:32:19] But I am--
[03:32:21] I'm just kind of getting to this point where like,
[03:32:25] The whole reason we have create route data is so that we can like invalidate the cache for all the routes on the current
[03:32:30] like currently being routed. And I feel like there's other options here where we could just put the router could have a preload function. This will make preloading work in solid properly, finally.
[03:32:41] I mean, I could have done it before, but there's a lot of like reactive side effects to it.
[03:32:46] This keeps it pure. The route data stuff is all about just warming the cache.
[03:32:51] And then
[03:32:53] the you can just use the cache, you know, calls like
[03:32:57] inside your components wherever you want.
[03:32:58] Right?
[03:33:00] You basically set the rules.  This is kind of the pattern that I like from the React cache stuff.  You could set the rules for the cache...
[03:33:09] where you define
[03:33:10] the function, right?  I put cache ID fetch
[03:33:14] whatever, but like nothing stops this from being server dollar sign, you know, or...
[03:33:20] What's the other, what does React do?
[03:33:25] Server
[03:33:26] Right?
[03:33:27] Like, you can basically...
[03:33:30] And then this fetch could be like a database call.
[03:33:35] you know,
[03:33:35] This actually should have a return statement on it, whatever.  Like, you can basically set up your APIs and your caching rules all in one place and then consume them.
[03:33:45] uh,
[03:33:46] in over here that that's I still need to work through some details as I said this is really  rough when I shared I haven't even finished the section on how to how hydration works but
[03:33:55] That's sort of the thinking here.
[03:34:04] I see there's a crazy divergent effect conversation going on in chat.
[03:34:13] Thank you.
[03:34:16] You don't, right? That's basically the other challenge.
[03:34:23] Okay. Like,
[03:34:25] We can only...
[03:34:27] You can only track up to the first await.
[03:34:32] That is fine.
[03:34:34] for the majority of things. I mean, somebody could get trapped by it. But if you think about it, if you have a process that has like multiple awaits in it and you're trying to like
[03:34:44] Fetch the data. Yeah, you could obviously hoist all the signal accesses to above.
[03:34:49] Like there's
[03:34:51] But more than anything, it means that any single change would cause the whole chain to start over again, right?  And throw away everything in progress.  So for the most part, like...
[03:35:05] It might not be obvious,
[03:35:07] But there's nothing you can't represent...
[03:35:11] With...
[03:35:13] There's nothing you can't represent by simply moving the signal reads to the top of the async await function.
[03:35:18] And for the most part, if they were separate...
[03:35:21] signal reads like and you wanted them to chain and have these separate read rules, then I would suggest making a separate effect. It's just better.
[03:35:28] Like it'll be more fine grained in how it updates.
[03:35:32] I don't see the benefit of the messery, I mean if you have islands with the benefit of the layouts.
[03:35:35] not to revender, right? Like...
[03:35:39] Why if only
[03:35:42] Let's go here. If only this section changes why we render this whole thing?
[03:35:48] Islands might save us on the JavaScript and the render cost of these like specific little pieces, let's say, but there's just no point in re-rendering the whole thing like islands.
[03:35:58] happen all over the place, right?  They, uh, where is it?  I had Jason Miller's thing,  but like an island might be like,
[03:36:07] a specific widget here or widget here. The nested routing hierarchy key is different than the island hierarchy, so to speak.
[03:36:16] So like...
[03:36:18] There's basically no... even with islands, there's still no point in re-rendering the stuff you don't need to re-render.
[03:36:29] Thank you.
[03:36:31] What will router pre-fetching code look like?
[03:36:35] Yeah, let's let's go back here. What I'm suggesting is if you write your cache like this like  the router prefetching code where instead of having route data, it could literally be just like,
[03:36:46] Okay, let me just...
[03:36:49] Open...
[03:36:51] Maybe a playground, something where the text a little bit larger. But I'm picturing like function,
[03:36:59] Pre
[03:37:00] preload
[03:37:02] And then in here you would get stuff like prams,
[03:37:06] location...
[03:37:09] query or whatever, you get all the React,  all the router based stuff, and then you just do like,
[03:37:15] You'd have your like...
[03:37:18] wherever you define your API, you know,
[03:37:22] Where was my client example here? Somewhere, you know, different file, you have this, right?
[03:37:29] And then you would just be like, okay,
[03:37:32] For this route,
[03:37:34] I need this user so what I'm gonna do is I'm going to
[03:37:38] Fetch.
[03:37:39] user
[03:37:41] Um...
[03:37:42] params dot
[03:37:45] Bye-bye.
[03:37:47] Thank you.
[03:37:48] And then
[03:37:49] somewhere else
[03:37:51] in your, like, the preload, there's duplication here, which makes me a bit sad, but, like, generally speaking, the preload here,
[03:38:01] Would...
[03:38:02] Um...
[03:38:03] would just warm it. So this would run in parallel, top of the route before anything happens. And then later on, nested in something else, you have your create async and then you'll just
[03:38:13] Call fetch.
[03:38:14] you know, fetch user
[03:38:16] uh...
[03:38:19] here.
[03:38:21] with
[03:38:23] props.id or user id by the time it gets down there and  this will actually just find the same promise that you did here from the router preload
[03:38:31] And it will...
[03:38:32] it
[03:38:33] Yeah, it'll already be like in flight.
[03:38:42] Thank you.
[03:38:45] Thank you.
[03:38:49] How do you mentally clean the cache? Well, yeah, this is, I, I, my thinking is that we have an API kind of like Tanstack where it's just like cache invalidate.
[03:38:59] Doo-doo-doo.
[03:39:02] I don't know, user...  I like Tanstack stuff.  We could...
[03:39:07] you could just
[03:39:08] Do this.
[03:39:10] Thank you.
[03:39:15] Thank you.
[03:39:22] Thank you.
[03:39:23] Okay, does this make sense?
[03:39:26] Thank you.
[03:39:27] Thank you.
[03:39:29] Thank you.
[03:39:31] It, this still has some rough edges, but like the gist of it is we separate the cache APIs from the async APIs, keeps the async APIs easy and clear.  Because what I love about the async APIs, you can use them for anything. We do data fetching, but they could be browser APIs. Like this is just a pure promise.
[03:39:48] to, uh...
[03:39:50] to
[03:39:52] to signal kind of thing.  And I think it would be really interesting.  Like,  like,
[03:39:57] If
[03:39:57] I had a lot of problems injecting stuff like store-like behavior and stuff.  This will make it a lot simpler.  We just need a way of...  If you want your async thing to do deep diffing,  so if you get a huge blob of JSON  and it only notices the two little things change and update those things, Dom,  it's just another wrapper on top of the create async, right?  Maybe...
[03:40:21] Like...
[03:40:22] Like if you need to do data diffing, you could do like const...
[03:40:26] Um...
[03:40:28] Thank you.
[03:40:29] I don't know, sorry, this is user.
[03:40:32] we could do like
[03:40:34] I don't know, something like...
[03:40:35] - Thank you.
[03:40:38] Thank you.
[03:40:40] user data, and then we can do something like
[03:40:43] user equals like
[03:40:45] I don't know.
[03:40:47] It's like
[03:40:48] It'd be some kind of drive store thing, but I could easily see a wrapper taking user data and then being able to give you something almost like a store back that does fine-grained diffed updates. It's all opt-in-able, right?
[03:41:04] Um,
[03:41:06] Anyway.
[03:41:07] It's not crate store, but it's like crate drives...
[03:41:10] door but
[03:41:11] Yeah.
[03:41:19] I've definitely lost track of whatever is going on in chat about that.
[03:41:25] If preload configs something you would manually need to do at the route level, are there cases  where you wouldn't want to preload?
[03:41:31] Yeah, it would be something manually you'd have to do at the row level.
[03:41:34] because
[03:41:37] Yeah, right now...  I did a diagram earlier for everyone in Excalibur.  Um...
[03:41:43] let me pull it up again,  where I talk about data fetching on the server.  And I was showing that like,
[03:41:50] I gave each thing a score, roughly a millisecond, say how long it took.  And this case involves two waterfalls, essentially.  But they're not necessary waterfalls, they just happen because of the view.  Basically, picture if you had that Twitter page where you had your user details and then you had your tweets.  And because of the view hierarchy,
[03:42:10] There's a waterfall.
[03:42:12] But there doesn't have to be from a data perspective  because they both just are fetched off user ID.  The thing is, the naive approach back when we used to only have synchronous running in React  was something called PrePass where we would...
[03:42:23] essentially like
[03:42:24] Each of these sections, like there's a green section that's static, there's a red section that depends on the first piece of data, and a blue section that depends on the second piece of data.  You basically render as much as you could, hit something async, wait for the data to load, re-render again until you hit something else, re-render again.
[03:42:39] wait for the data to load and render again.  So the whole total time was 224.  Then we got stuff like GS,  get server-side props and loaders,  where we just data fetch all ahead and...
[03:42:49] parallelize it, then run the thing in chain.
[03:42:51] Then I talked about suspense and streaming. This is kind of like what Solid and Remix and maybe SvelteKit, not sure, do today, where you can render what you can and then fetch the data at the same time. And then...
[03:43:05] respond with the stream at that point and then
[03:43:09] kind of like re-render the rest and finish.  But if you use suspense naively without hoisting the data fetching,  like the way that Remix and Solid Start does,
[03:43:18] I think SvelteKit does.
[03:43:20] you would still end up with a really long time because you'd have this chain.  You'd go as far until you hit something async, go as far, and you'd still have
[03:43:28] Something, even with streaming, your total response would be really long.
[03:43:31] And similarly, async components
[03:43:33] for React Server Components,
[03:43:35] without hoisting at the top level, and they don't give you a router that does this, and they don't recommend you even do this, the default behavior is still pretty bad because of this. Like, they have the ability to pause start so they don't waste any work, so it's like 190 instead of 194 here, but it's like,
[03:43:54] it's still not great to have waterfalls anywhere that are avoidable.
[03:43:58] But...
[03:43:59] Obviously, you can put them together.  But my point is that like,
[03:44:04] You need to do something at the route level.  The problem with async components is it's not universal between client and server, which is
[03:44:11] why I've been looking at other options. I mean, I was debating even for a while that I could compile
[03:44:18] an async await in a component
[03:44:20] to a create async call like this more sense and like use a compiler because async await colors the function so you could actually see it. It's completely analyzable.  Like it's not you don't have this problem of like out of file, which is one of my concerns like things like Svelte kind of suck for  composition with their native language because they can't see outside of the component and
[03:44:40] You have to use some kind of special syntax, like a dollar sign or something, and then they see it. But the problem is,
[03:44:46] Their whole reactivity is based on their model that you can see. So like it there's this like they don't have cross-file analysis you have like a
[03:44:54] tell it it's reactive, that's why they don't have hooks. You know, like the Dawson operator is something that doesn't escape the file, reactivity doesn't escape the file. There's positives to that from a hierarchical standpoint, but there's also other ways to solve that. So like,
[03:45:08] - What?
[03:45:09] Yeah.
[03:45:11] compiling like that has benefits, but it changes the semantics of async await.
[03:45:15] The end user might not care, but I mean,
[03:45:19] I feel we're entering a really weird territory, especially the stuff that React forget, where
[03:45:24] It seems like these things are okay until you realize that you have no clue what the JavaScript in front of you is running.
[03:45:30] like how it runs.
[03:45:33] But yeah, so what I'm saying...
[03:45:35] long way about it is that you would have to,  you could skip doing the preload function and just,
[03:45:41] pay the full price.
[03:45:43] but you could also just do this
[03:45:46] As I said, it...
[03:45:48] It hurts a little bit because our current patterns basically force you or encourage you to
[03:45:55] use the loaders up top
[03:45:57] which means that most people who develop and remix are solid. You know,
[03:46:03] end up with
[03:46:05] an app that does this.
[03:46:06] instead of an app that does this.
[03:46:09] Which...
[03:46:10] If data fetching is your bottleneck, which often is, client server renderings and that figure is usually a lot faster,
[03:46:18] Um,
[03:46:19] we're talking like in this single waterfall case,
[03:46:22] or I guess double waterfall caves, we're talking about doubling this length of the takes to respond,  which is kind of unacceptable from my perspective.
[03:46:35] I don't know.  It sounds like they have their own use.
[03:46:42] Oh yeah, that's cool. Yeah, if we can anchor on the function.
[03:46:46] Yeah, yeah, I like that.
[03:46:48] Yeah, that's clever.  These are the kind of details that I have to work through.  Because the one reason that I've been playing around with the key stuff is because...
[03:46:58] Um...
[03:46:59] Thank you.
[03:47:01] Bye.
[03:47:02] figuring out how to do hydration across the wire serialization.
[03:47:13] The perfect solution...
[03:47:15] Yeah, yeah.
[03:47:17] Yeah, these would run in parallel. They basically do today in solid as well. The only thing is it's a loader pattern.
[03:47:25] and that's non-blocking. So nothing's truly parallel, you know what I mean? They basically just run immediately and nothing blocks, which is close enough. But I think because of no context on the server, we have to switch from a loader pattern to a preload pattern, essentially.
[03:47:46] Thank you.
[03:47:49] Yeah, yeah.
[03:47:52] Async is...
[03:47:54] Definitely a slowdown. I've benchmarked and I've seen it. Um,
[03:47:58] It...
[03:47:59] My benchmarks where I talk about solid being 10 times faster than React, generally it was synchronous rendering. Once you add async, the
[03:48:06] Things get muddled a lot.  I was even looking at using generators as a mechanism  for propagating reactivity on the server.  Again, performance was a consideration.  Async local storage actually scares me.  Historically, it was very, very slow.  But it's like...
[03:48:24] Dude.
[03:48:24] It's very hard to have all these async contexts and be able to preserve the request when those async contexts are in user space.  Like right now with Solid, we can pause and resume with Suspense. And I do this thing where since we control all the entry exit points because we have resources, I can resume a context and then
[03:48:42] like it works because we have these wrappers.  But when end users are just writing async all over the place,  kind of like async functions in React Server Components,  you don't have a choice, right?
[03:48:50] You have to use something like async local storage.  Otherwise, like the user won't have a consistent access to that context.
[03:48:57] and
[03:48:58] It is slow. Like my understanding, it used to be 10x slower.
[03:49:03] My understanding now is it's more like...
[03:49:05] 50% slower, but like, it scares me as a benchmarking kind of person, but I honestly, I don't
[03:49:12] No other API accomplishes it.
[03:49:14] And
[03:49:15] Um...
[03:49:16] It's async local storage thanks to Next.js basically strong arming everyone.  Now is available in every single server runtime.  It's so funny.  It's zone.js basically.  Angular did this.
[03:49:26] Twelve...
[03:49:28] 14 years ago, whatever, and
[03:49:30] Everyone's like, "No, what a terrible idea." React does it.
[03:49:34] and next.js and every single runtime adds it in less than three months.
[03:49:39] Anyway.
[03:49:41] *sad*
[03:49:46] Thank you.
[03:49:46] Thank you.
[03:49:48] Yeah, the big benefit of not using strings and just using the function reference is that like for the simple case for deduping, you don't need any key. It's just automatic.
[03:50:01] Um...
[03:50:04] Thank you.
[03:50:05] So like that's where a lot of these, and this is why I put out there, this kind of feedback, kind of understanding what people are comfortable with in terms of cache APIs. It's not my specialty. Reactivity is like a pseudo cache, so I've never needed a cache API.
[03:50:23] Fetch user...
[03:50:25] It returns the promise of data that you don't think...
[03:50:27] The way this is going to work is going to be adding properties to a promise.
[03:50:33] Um...
[03:50:34] Because I kind of hiding, I think I might have mentioned it in here, for this to work properly, you don't want the thing to keep on suspending when it hits the promise again.  So we actually need access to the resolved thing.
[03:50:45] data.
[03:50:46] synchronously.
[03:50:48] for like rerender times. So
[03:50:51] the two things that I'm thinking about modifying the promises that come out of the cache are  like a dot value or something where you can read the value synchronously once it's been resolved and the other thing is
[03:51:02] maybe for invalidation, is almost a way for the create async to
[03:51:08] to
[03:51:10] listen to
[03:51:11] cash invalidation through the promise
[03:51:14] I know this is kind of weird, but...
[03:51:17] I think it's okay.  It's not like I'm...
[03:51:19] patching some global...
[03:51:22] thing that's given, I'm basically modifying
[03:51:26] something that you give to a rapper
[03:51:29] maybe returning its own version of it. So I think that checks.
[03:51:36] Although I imagine that was part of a different conversation that has nothing to do with what I'm talking about.
[03:51:46] Thank you.
[03:51:54] Thank you.
[03:51:56] Amen.
[03:51:57] If you come to solid and you've never used this stuff before, I strongly...
[03:52:03] I'm torn on this because some ways solids
[03:52:07] model is almost...
[03:52:09] simpler for people who haven't been React-brained
[03:52:12] Um...
[03:52:13] So you could just do something very basic, and it's actually very similar to React.  So you could just teach people JSX and how to insert values in JSX.  But signals are really the core of it.  I have...
[03:52:30] A good introduction article that I share with people quite often, "Not Building a Reactive Library from Scratch," the first part. To be fair,
[03:52:40] I built solid in such a way that
[03:52:42] my whole point was that I wanted to make it feel that anyone could go home and write the framework themselves.
[03:52:48] A lot of our introductory contents like that.  The problem with that is it's like slightly...
[03:52:52] more higher level slightly harder
[03:52:56] to
[03:52:59] to explain stuff to people, you know, to get started.
[03:53:03] But on the other hand, once they get past that first jump, it's like they feel like they understand everything about the framework.
[03:53:10] That's what appeals people to solid.  It's the transparency and the control.
[03:53:16] Very, very nice features to people like senior devs, like because it's like they're less trusting than other people.
[03:53:25] Thank you.
[03:53:26] They've been burned too many times.
[03:53:30] - Thank you.
[03:53:31] Thank you.
[03:53:33] Thank you.
[03:53:36] Thank you.
[03:53:37] Amen.
[03:53:41] Yeah, it's still going conversation.
[03:53:46] Yeah, cash as a dollar sign operator or a hoisted thing is interesting.
[03:53:54] It's...
[03:53:55] Tricky. We did actually play with this for a while in solid that our crate route data actually just
[03:54:01] like hoisted it up to the route, like just registered it.
[03:54:05] Um...
[03:54:07] It's interesting, right?  Because we can actually tell because we're pretty good with bundler graphs.
[03:54:12] we can basically tell which...
[03:54:14] Which funk like
[03:54:16] If you gave it a wrapper, we can tell which
[03:54:18] like routes, like what components are under it. So we could like basically
[03:54:23] prematurely fetched. I always thought that was weird with like conditional renders, but like I felt like this something had to be explicit or manual, but...
[03:54:30] Maybe I'm, like, overthinking it.  You...
[03:54:32] a compiler could definitely do it.  That's what relay does to a certain degree.  Um,
[03:54:37] - Thank you.
[03:54:39] It's still... possible.
[03:54:42] automating that preloading step.
[03:54:45] And because we have special syntax, we could definitely do this.
[03:54:51] It's just...
[03:54:52] Yeah.
[03:54:53] Thank you.
[03:54:57] Thank you.
[03:55:02] Thank you.
[03:55:05] That's an interesting take.  Solid React looking at it, but it might say traditional JavaScript, yeah.
[03:55:12] Thank you.
[03:55:15] Okay, so...
[03:55:18] Yeah, I mean...
[03:55:22] I don't know if anyone has had more specific questions along this line.  This is still very much a work in progress, but you can kind of see that like...
[03:55:30] This is an alternative reality where we separate the cache from the async primitive. It gets rid of the complicated create resource.
[03:55:38] Um...
[03:55:40] It you know could give us power superpowers, but it all depends on the execution of this cache. This is very early, but I
[03:55:48] It's a big shift from the routing side to move to preload pattern.  I'm not sure I love it.
[03:55:53] Because in some ways, as I said, our current solution is
[03:55:56] perfect but but not having access to context
[03:56:01] is the driving decision here.
[03:56:03] I still believe that server component-like solutions are...
[03:56:08] you know, important to where things are heading. So yeah.
[03:56:13] All right.
[03:56:15] I think it's time for this week in JavaScript. Not that I have a ton for this week in JavaScript because I already went over to my article
[03:56:24] Thank you.
[03:56:25] But, you know...
[03:56:27] We could run with this week in JavaScript.  We can look at a couple things.  I think someone shared the Remix v2 release.
[03:56:35] Let me...
[03:56:36] Let me get...
[03:56:37] prepped here for a second so we can
[03:56:39] talk about
[03:56:41] The nonsense.
[03:56:42] Um...
[03:56:44] I need a drink of water. I've been going for four hours now.
[03:56:48] Mmm.
[03:56:55] I'm going to go
[03:56:58] Have you tried to toy with async generators for suspense patterns instead of throwing to have lighter resumability?  Um...
[03:57:04] All right.
[03:57:06] *sniff*
[03:57:08] No, the thing is, I don't think anyone wants to write generators.
[03:57:14] Like,
[03:57:15] If I compiled to them,
[03:57:17] it'd be acceptable,  but I don't think anyone actually wants to write generator code.  When people look at generator code,  they have no clue what it's doing.  And this could be a learning thing,  but I think it's a learning thing.  It's,
[03:57:26] step too far for most people
[03:57:28] I've looked at using async generators, like Marco's compiler, you can literally do awaits, fine grained for Marco 6, inside expressions. And one of the things we were looking at was doing generators as a way of pause and stopping at that degree.
[03:57:47] but like...
[03:57:50] compiler output, not as something someone would write. And I think
[03:57:54] Yeah, I think we'd have to get to like pseudo async components before we get there.  Right now, I'm mostly looking at mechanical signals kind of type stuff.
[03:58:07] Why do we always have to mix and match back in front of us  It's convenient to just end up creating more non-sync complex sensors  Yeah, I mean this is fair  Yeah
[03:58:18] I get it.
[03:58:19] Um...
[03:58:21] The thing is, like...
[03:58:24] Were you developing when we didn't have these declarative solutions? We used to have these two things side by side. This is one of my biggest criticisms of stuff like HTMX. You're in this kind of zone where it's like,
[03:58:39] like putting two template languages on top of each other, like knockout on top of Rails and stuff. There is a need for JavaScript interactivity and if you want declarative systems, they don't play nicely with each other. So you almost want to really try hard to get a single model.
[03:58:53] Something like Phoenix has a single model, stays owned on the server. Something like RSCs are trying to get to a single model, stays owned on the client. But like,
[03:59:02] The stuff in the middle is about the worst.
[03:59:06] Obviously a single page app like a spa is as far on the client as possible, but we know that's not acceptable. So we
[03:59:13] We end up being a bit in the middle anyways.  Like having a server render page with little  islands or spas in them  that are only...
[03:59:21] client rendered.
[03:59:23] doesn't, you know,
[03:59:25] I can go around this argument in circles and I keep on ending up the same place.
[03:59:45] Yeah, yeah, possibly. I'm still working through it. I think there's trade-offs definitely with the React implementation. I want to do better. When we...
[03:59:56] get there, I will understand it better. We are
[04:00:00] - Actually working on it, that's what the Google Chrome money is going into. We got a bunch of funding, like $30,000 from the Chrome team to work on our original server components basically. So we're a couple months in.
[04:00:17] Anyways, I jumped way back to answer some questions that I missed before.
[04:00:23] Thank you.
[04:00:27] Okay, let's get this week in JavaScript lined up here.
[04:00:39] All right.
[04:00:41] Do I have anything this week? I say that, but like...
[04:00:45] There's literally, there's almost nothing. It's fine.
[04:00:50] I just need to close like a billion tabs.
[04:00:55] Bun came out last week, so...
[04:00:57] All the...
[04:00:59] all the fun stuff, people reacting to it. And I don't need to react to people reacting to
[04:01:03] That's just not my style.
[04:01:06] Let's just close off a bunch of crap.
[04:01:09] Okay.
[04:01:10] um...
[04:01:14] Let's get this going.
[04:01:19] I'm just going to... I'm just pulling...
[04:01:22] *laughs*
[04:01:24] There we go. Okay, cool.
[04:01:27] two seconds
[04:01:29] Do I even have any bookmarks this week?  Like, tell me, anything interesting happened  that was actually new this week?  It looks like my last bookmark was DHA's
[04:01:38] dropping TypeScript.
[04:01:41] V0 from Vercel? Okay, send me a link.
[04:01:52] Do you know why sites like eBay don't offer offline web support?  Does SW affect performance?
[04:01:59] Should frame yourself for a moment.
[04:02:00] It's an interesting question.
[04:02:07] I wouldn't want offline for any...  I guess you could be offline...
[04:02:12] to like...
[04:02:14] view stuff that you've viewed before, but like...
[04:02:17] You don't want to do purchasing offline.
[04:02:20] I think it's just a lot of effort.
[04:02:23] for what they consider minimal gains.
[04:02:26] I think that's often the case.
[04:02:28] Like, a lot of...
[04:02:30] setups just...
[04:02:32] benefit as much
[04:02:34] I don't think it's an overhead thing. I mean, I know the web frameworks used in that sense, like
[04:02:40] Marco is a server first framework.  I think it's possible to run Marco in a service worker.
[04:02:45] But then you can't get to the APIs the same way. Everything in APIs is locked down.
[04:02:52] run through the service. Yeah, I don't know.
[04:02:55] I think it's probably one of those more complicated than it's worth kind of things.  I think there's certain types of apps that might consider it, but I don't think a storefront is...
[04:03:02] Probably one of them.
[04:03:03] or it's a live auction site.
[04:03:08] Um...
[04:03:09] What is V0 from Vercel?  Sorry, I'm just going to...
[04:03:13] See if I can look this up, v0 versus l.
[04:03:22] Thank you.
[04:03:23] Thank you.
[04:03:28] Hmm, I have not seen this. Okay, cool.
[04:03:39] Huh. Okay, yeah, so this is like what everybody wanted ChatGPD to do.
[04:03:48] I've not seen this, but can we try it? I'm worth it. I'll put the link in there. Okay, cool.  I think I got some stuff now.
[04:03:56] I know I'm not sharing my screen yet. I was just
[04:03:59] putting some stuff in the background.
[04:04:01] um...
[04:04:04] I have nothing. Yeah, I was kind of talking to myself almost here, just trying to see if there's anything.
[04:04:11] New. What's the 15th? Yeah, it's been a week. I've been so head down working on stuff, programming, actually doing work. It's been hurting my This Week in JavaScript recently because I used to spend a lot of time on Twitter and...
[04:04:24] But then ever since I got back from vacation, I was just like, I realized how much time I was spending on Twitter.  And I was like, screw this.  I'm going to do more programming.
[04:04:30] and do more designing and leading, you know, actually important stuff.  And it's been actually crippling my this week in JavaScript because I just –
[04:04:38] I'm just not on top of things anymore.
[04:04:40] Anyway, let's get this started here.
[04:04:45] Yeah, there isn't even anything interesting on the solid side other than...
[04:04:50] What I talked about last week?  Yeah, no.
[04:04:51] It's just been a heads down week.
[04:04:53] I'm looking forward to next week.
[04:04:55] Okay.
[04:04:57] Um...
[04:05:00] All right.
[04:05:01] Da da da.
[04:05:03] Thank you.
[04:05:06] All right, cool. Let's do this.
[04:05:10] Alright, it's time to talk about this week in JavaScript.  I can't say I'm the most connected on what's been going on this week, but...
[04:05:17] We'll take a run at it. There was at least a couple releases and a little bit of controversy, like there always is. So let's just go right into it.
[04:05:30] Um...
[04:05:33] For me, this week really started...
[04:05:36] with the whole attack on node thing in response to the bun release last week.
[04:05:43] Um...
[04:05:44] Honestly, I didn't see where it started.
[04:05:47] I know there's been some controversial videos and everyone hyping stuff up.
[04:05:52] To be fair,
[04:05:53] A number of friends with Jared
[04:05:56] and want to see him succeed.
[04:05:58] And it's,
[04:05:59] There's a combination of that
[04:06:01] with the influencers kind of pushing that stuff to like,
[04:06:06] you know,
[04:06:07] when the masses all come in.
[04:06:09] The thing that actually really stood out to me personally was there's this chain of tweets from James M. Snell
[04:06:17] Um...
[04:06:18] That's good.
[04:06:19] And I, it felt spot on for me.  So I just, I just wanted to kind of,
[04:06:25] Uh...
[04:06:26] look at these for a moment, talk about it.
[04:06:30] Basically, he was saying, as a whole devs need to get out of this mindset...
[04:06:34] Because...
[04:06:35] engineers have a new tool introduced and the older existing tools somehow deserve to be replaced.
[04:06:39] um...
[04:06:40] or killed off, or worse, attack the folks that work on them.
[04:06:44] The funniest thing is a lot of people working open source,  it's not like it's a big paying job, so to speak.  These things are barely stringing together,  and we're in a weird world where we have VC-funded...
[04:06:56] projects like
[04:06:57] I can relate with this a little bit because...
[04:07:00] I've had the temptation.
[04:07:02] Multiple times in my history, it's all where VCs have come to me and been like, hey, are you interested? And I've said no every time, because I never saw the business side. And I never really, because I build a framework for everyone, I never really wanted to prioritize the monetization side.
[04:07:19] of a business over what I could give
[04:07:22] to the, you know, the...
[04:07:23] to everyone.
[04:07:25] But sometimes you look and you go, if you have the money, you can do a lot, especially if there's a product that can be commercialized out of it.
[04:07:31] Um...
[04:07:35] So, like, there's other routes to having money without taking VC.  Like, I think...
[04:07:41] at a certain point, you take the money
[04:07:44] you might have some runway, you might have some room for the first couple of years, but then at a certain point they come knocking to see what the business plan is. And I never went that way, but
[04:07:53] The people who have...
[04:07:54] can pay developers to actually do work instead of rely on the incredible generosity of the community.
[04:08:02] You have to understand it's a very different thing when these two kinds of environments are put right next to each other.  Because, you know, Node might be part of OpenJS Foundation, all these great things, but what does it actually translate to?  You have situations like Babel where there's one guy working on it, you know, like it's tricky.
[04:08:18] Software is just like any engineering profession.  New tools come along all the time.  If a newer tool works better for you than the older tools, use a newer tool.  If an old tool works fine, you keep on using it.
[04:08:27] You don't have to insult the person making or using hammers if screwdrivers get the job done for you.
[04:08:32] Right?
[04:08:34] And I think this is really just on point.  It's kind of obvious advice.
[04:08:39] Um...
[04:08:43] uh...
[04:08:44] A corollary to this is if a new tool gets a job done better and faster, engineers should absolutely consider it. Just don't be a jackass about it.
[04:08:52] I think this is also an important point.
[04:08:54] I've seen this in the framework space.
[04:08:57] I'm very happy for Svelte that they're finally getting out of...
[04:09:02] that zone. There's this zone where people like, some people aren't going to like svelte because of syntax or because of the composition stuff or because of like the mental model. Like there's lots of reasons not to like svelte necessarily. But there's also
[04:09:16] But the whole...
[04:09:18] reason of being like
[04:09:21] Oh, it's, you know, immature or whatever.  Like at a certain point,
[04:09:25] There's like this chicken and egg problem and I feel like Svelte after seven years now has kind of proven itself and
[04:09:31] Like, it's funny to hear people who picked up React after like a year.
[04:09:35] like between 2013 and 14.
[04:09:38] criticize something that's been around for seven years and acting like, "Oh, well, it's the new kid on the block."
[04:09:45] - Yeah.
[04:09:47] So obviously, being the author solid, I have a similar kind of mindset.  But at this point, it's kind of silly.  Whole projects live and die during a five to seven year standpoint that...
[04:10:00] Like...
[04:10:02] It's not, you know...
[04:10:05] I...
[04:10:06] Nothing happens unless people actually try it.  You know?  So...
[04:10:12] People should definitely consider different tools if they do the job better.
[04:10:19] Thank you.
[04:10:24] Let's see here.
[04:10:25] I want to see what the prime Twitter tweet is.
[04:10:31] All right.
[04:10:35] I don't think Bun is 1.0.  I don't think it's prod ready, but it's close and I love it.
[04:10:39] Yeah, it's hard.
[04:10:41] when you build a project with this wide of a API surface,  like,  like where you're trying to do so many things,  it's going to have bugs.  It's going to have edge cases,  things you don't expect.  Um,
[04:10:54] At a certain point, you just got to pull the trigger and move forward.
[04:10:57] So yeah.
[04:11:03] I think this is...
[04:11:06] This is probably the right time. I don't know how buggy it is. It's a judgement.
[04:11:12] I'm--
[04:11:12] I'm pretty buggy adverse, so I take forever to go to 1.0.  Solid took four years...
[04:11:20] No, I mean...
[04:11:22] I have three years open sourced to go 1.0 and five years altogether, I guess.
[04:11:27] roughly before it went 1.0, so it starts taking a little while. I'm pretty picky about the  1.0 label, but I think at a certain point you just go with it and ride with the flow,
[04:11:37] time. I...
[04:11:38] When I used one last, it was not very stable.
[04:11:42] But...
[04:11:42] it changes so fast over a couple month period.
[04:11:55] Yeah.
[04:12:03] to be
[04:12:04] Fair.
[04:12:06] Oh.
[04:12:07] I wasn't trying to insult.  I was saying for people who wanted to be haters, like they can have plenty of reasons for doing it.
[04:12:17] Um...
[04:12:18] But don't use that as the reason, so to speak.
[04:12:25] Some people like the HTML in...
[04:12:29] in
[04:12:30] single file component stuff like it keeps their mind focused on what they need to get focused on
[04:12:36] I'm a very mechanical person, so all I see is limitations when I look at tools, even my own.
[04:12:42] So, um,
[04:12:43] There are certain design things for me that were just unacceptable, like baseline when looking at spells. I just wouldn't.
[04:12:51] There's things I love about Svelte though.  Like it's hard to make abstractions that don't leak because people don't want to give something up.  They're like,  they're like,
[04:13:01] Oh, but if we do this and this, a perfect example is this view went on this, like tried to copy something very similar as felt's API with ref sugar, but they didn't want to give up composition.  And the end result was horrendous.
[04:13:14] It was terrible. I'm glad they canned it.  But it felt unapologetically...
[04:13:19] accepts its limitations.
[04:13:22] And that's something to respect, right?
[04:13:25] So anyway.
[04:13:32] Thank you.
[04:13:35] Thank you.
[04:13:36] Okay.
[04:13:39] Getting back on here, but yeah, so yeah, I mean if you saw I saw Theo released what two bun  Videos this week. I'm not gonna watch them right now, but if I'm sure if I look here
[04:13:52] Apple movie.
[04:13:54] Okay, so I'm not even getting this right the truth about bun is
[04:13:57] And then I think he also released like a very like thing.  I think people have to step back from their, their hype cycle.  Um, but anyways, it's all good.
[04:14:07] I don't know if I have much else to say. I just don't like when
[04:14:11] open source stuff gets bashed for no apparent reason.
[04:14:15] Um...
[04:14:16] Yeah. Are there no full-time maintainers on Node anymore? Is it all volunteer?
[04:14:22] A person or two funded by the foundation to handle security vulnerability parts, but that's about it. There's no one that I'm aware of that's paid to work full time on Node.
[04:14:32] Yeah, I mean...
[04:14:33] This becomes the problem
[04:14:37] It's hard.
[04:14:38] I am so lucky, I think Rich is so lucky, to be able to work on frameworks at companies that support
[04:14:45] them.
[04:14:46] even though they're not like the primary like product like
[04:14:50] a hosting company like Netlify or Vercel
[04:14:53] funding development on solid or Svelte
[04:14:55] is amazing.
[04:14:57] Because it's the only way this happens, right? How else do you have alternatives to React when you have like, Meta, you know, teams of Meta working on it, all this stuff, and you come up with a good idea.
[04:15:11] And then you try and get volunteers like it's,
[04:15:14] It's more than David versus Goliath. It's like an ant versus freaking... I don't know.
[04:15:21] So...
[04:15:23] um
[04:15:25] But the problem is when you, these are packages that are novel with the potential to change how the things are done in the future. It's different when you're, you have these long tail on these projects that have been around forever.
[04:15:37] that everyone uses and they're just not supported.
[04:15:40] I mean, what can you do?
[04:15:50] Yeah, but Dino and...
[04:15:55] and Bunn, both are VC funded, right? Like they're companies.
[04:16:02] So like...
[04:16:05] Thank you.
[04:16:08] Yeah, I mean...
[04:16:10] this is the challenge. I've talked to a lot of open source maintainers about like different
[04:16:15] funding models and stuff.  We don't all get patrons,  so to speak.  Um,
[04:16:20] I'd be interested to pick Evan Yu's brain about this stuff.  Vue is probably the best-funded...
[04:16:27] open source community that I've ever seen. That's how he
[04:16:31] He's got like a system.  He gets so many different developers and different projects running.  He's a machine.  Things like VEAT, you know, like to like...
[04:16:39] like it's not view,  but it has its own,  you know,  group,  like,
[04:16:43] they've kind of got it nailed in a way that I think the rest of us need to figure out.  But...
[04:16:49] That works on the smaller framework scale.  I think something like Node is from a different era,  and it's much harder to get back from that.
[04:17:05] Do we have examples of VC funding? Do we have languages older than 10 years?
[04:17:09] I don't know.
[04:17:10] That's what I'm saying. We're in a very different age. It's weird to me the kind of stuff that gets funded now even, like when you talk about frameworks and stuff in JavaScript.
[04:17:19] Where's the money going to be like they're trying to find tools that align with an actual paid product that actually worth something like is the astro team going to start doing hosting of some sort or like I don't know like this is kind of.
[04:17:33] You know, like that was the Gatsby story. I don't know how well that worked for them, right? Like...
[04:17:39] Ah.
[04:17:40] Languages, another thing, runtimes, OSs. The problem is,
[04:17:44] Good work is happening all the time out in the open.
[04:17:48] And how do you actually...
[04:17:50] make sure that it has the
[04:17:53] the money succeeds. This is interesting.  I wonder if this is actually something over time that like we do actually really  have to worry about because it's like,  I don't see this changing anytime in the short term and I'm,
[04:18:06] It's almost like building a city on...
[04:18:08] on
[04:18:09] rotting infrastructure. Like, like we're building this huge,
[04:18:14] machine of stuff that eventually...
[04:18:17] no one knows how to maintain.
[04:18:20] And no one...
[04:18:21] was paid to maintain it.
[04:18:23] It's like a different type of collapse.
[04:18:26] I don't know.
[04:18:32] Hmm.
[04:18:36] This is a good question.  Yeah, is Ruby considered it?  Like, when you consider DHH and, like...
[04:18:42] the whole...
[04:18:43] Like his...
[04:18:45] his whole company and that whole thing.
[04:18:50] Okay.
[04:18:50] If my...
[04:18:54] "If my company wanted to support Solid Team, how would they want to do it?" It's interesting.
[04:18:58] We've been talking about this a bit. We were thinking because there's a few
[04:19:03] you know,
[04:19:04] prominent companies that are using solid right now that are, um,
[04:19:09] they want to see solid succeed because they they're using it and kind of depend on it. We should get a bunch of
[04:19:15] There's, you know...
[04:19:18] There's at least...
[04:19:19] you know, a couple dozen, you know, that I could see we could get together and maybe create some kind of fund.
[04:19:25] Nothing too big, but maybe a tier where you could get...
[04:19:29] you know,
[04:19:30] direct access support, something like that.
[04:19:33] And it would be a nominal amount for the company,  but it would give us an incredible amount  to bring in more people from the ecosystem.  We can basically train people to support...
[04:19:45] these teams while doing development on solid
[04:19:48] at a part-time capacity for basically no money for,  uh,
[04:19:53] for these companies, but it would make such a huge difference to who could work on solid.
[04:20:00] It's an interesting idea, right? Because then everyone would see each other
[04:20:04] putting in, you know, 500,000, whatever kind of money a month, and they'd feel more, you
[04:20:10] confident about
[04:20:14] Solids future because there is this fund or this like special program. I don't know. It's an interesting idea. We should talk more later.
[04:20:25] Anyway, um...
[04:20:29] Thank you.
[04:20:30] - I think it's a good question.
[04:20:32] Yeah, I don't know if I have much fun on the node stuff.  I did post this article earlier.  They explained the difference between island server components and resumability.  I talked all about the islands and server components stuff earlier as the course of the stream.
[04:20:47] I...
[04:20:48] I think this is a good take also on resumability because a lot of people misunderstand it.
[04:20:53] I think probably the most interesting thing and the reason I end up writing this article in the first place, I want to talk about just briefly, is this first part about interactivity.
[04:21:01] Um
[04:21:02] which is simply the fact that like,
[04:21:05] Thank you.
[04:21:06] So,
[04:21:07] When does a site become interactive? I keep on hearing
[04:21:11] you know,
[04:21:11] the quick guys talk about, you know, because
[04:21:14] they don't run any JavaScript initially, then they must be the fastest to interactive.  And to be fair, the work that Quick does
[04:21:20] after the fact
[04:21:22] is actually less.
[04:21:26] There is benefit.
[04:21:28] I was arguing that I don't think the site becomes interactive faster necessarily with something like Quick than it does with any other modern framework.
[04:21:37] Um...
[04:21:38] And...
[04:21:40] If Quick does that lazy loading thing, then it actually doesn't.
[04:21:43] is what my argument is. So they have to preload the code just like the rest of us.
[04:21:48] if they actually want the immediate interaction speed, which they do.  So really the biggest difference is what happens after the fact, which I believe should be faster.
[04:21:57] But
[04:21:58] my whole argument here is
[04:22:01] Most
[04:22:02] Frameworks now, whether through progressive enhancement, kind of like what Remix does,
[04:22:07] basically when you see the page you can interact with it. What happens afterwards is a different question. So like
[04:22:13] Remix has been pushing, you know, and SvelteKit, we have progressive enhancement. If you click on a button or an anchor tag or something and the JavaScript haven't loaded, well, don't worry, it still works. It'll just go back to server and reload a full page.
[04:22:25] Thank you.
[04:22:27] That's kind of brutal.
[04:22:30] If waiting for like, you know, 50 milliseconds more meant that it would just do a client side thing, like picture if you have like a page with like my stupid hacker news demo, you're just switching comments and you click to compress the comments and because you click too quickly.
[04:22:44] the whole page reloads.
[04:22:46] And the reason that the hydration took so long or the JavaScript took so long in the first place is because you're on a really slow network.
[04:22:51] And now you have to wait for that whole slow network to happen again.  You were in the subway, whatever, you know.
[04:22:57] And so like in a sense
[04:22:59] I don't know if that's a good thing.  It's a good thing from the sense that it's a good fallback,  but it's not like...
[04:23:07] It's interactive in the sense like I don't think we should be measuring that as interactivity. It's like if stuff fails, it's good to have a fallback, you know, but it's not actually
[04:23:17] The experience you expect
[04:23:18] So it's no replacement for hydration.  Similarly, Solid does this, React 18 does this,  like with their selective hydration,
[04:23:26] If reacts...
[04:23:27] streaming stuff in, React framework hasn't even loaded yet, and you're typing in an input field,
[04:23:33] they like capture
[04:23:35] or you click a button, they capture the input events,
[04:23:38] before
[04:23:40] It's loaded and basically
[04:23:44] have the ability to prioritize hydration, I believe synchronously, immediately to respond  to your input events even before the stuff's hydrated. So in a sense,
[04:23:53] The browser doesn't miss these end user events even while the page is loading,
[04:23:57] But it might take a moment to respond while the code is loading.
[04:24:03] You know,
[04:24:04] And as I said, that's in a way not unlike Quick, you know, where it's lazy loading stuff. Like, is that considered interactive? That experience might be considerably better than what I just explained in the remix scenario. But...
[04:24:13] Basically, we're getting to a point where the page is...
[04:24:16] "interactive" in a classic sense almost immediately.
[04:24:21] But...
[04:24:23] Is that actually the desired...
[04:24:25] experience and I think that's an interesting observation because I was  sitting there with Jack Harrington and Amishko having a
[04:24:34] having a beer in Los Gatos
[04:24:37] in San Jose area, and we were talking about this thing because, you know, there's this contention about
[04:24:45] What you know quick makes your site interactive faster and is like well, what is interactive if everyone's doing these kind of tricks?
[04:24:54] Anyway.
[04:24:59] So, I don't know.  I...
[04:25:01] The section about resumability talks a lot about these kind of trade-offs because I think resumability is a good thing.
[04:25:06] But it's like,
[04:25:08] It doesn't actually solve...
[04:25:11] the same stuff that server components solve. It doesn't actually solve the routing thing. Like in a resumable framework that auto detects, it sees that this is stateful, that's fine, sees that this is a stateful decision right here.
[04:25:23] And then because these could be rendered from that statement decision, it pulls this stuff
[04:25:30] into the client.
[04:25:32] as it's needed. It might not pull it right away but it'll pull it later.
[04:25:34] depending on the path you go. Whereas with server components
[04:25:38] you could, because of the rules of projections,
[04:25:42] these would always be server rendered.
[04:25:45] So you'd never send the JavaScript.  Where resumability without any other mechanism could always...
[04:25:50] Send.
[04:25:51] the JavaScript.
[04:25:53] It just depends on what you need. So these actually are not
[04:25:57] Like...
[04:25:58] solutions that are
[04:26:00] like competing at solving the same thing.  Server Components is about routing.
[04:26:04] Resumability is about-- I think I'm setting the conclusion here.
[04:26:11] Yeah, I actually didn't... Yeah, okay. Islands are architecture that aim to reduce JavaScript footprint by up to 90% by explicitly denoting what goes into the client, and also by reducing double data problem. Server components architecture extends islands with client-side routing and proper state preservation.
[04:26:27] Resumability instead of focusing on how to reduce the amount of, is, that is hydrated, looks instead to remove the execution cost of hydration itself. So like these are just all.
[04:26:36] not solving the same things. Service components might be kind of an extension of islands, but they are completely concerned with routing and state preservation.
[04:26:45] And as I said, resumability
[04:26:47] has nothing to do with code loading and has everything to do with not
[04:26:51] running
[04:26:52] Hydration.
[04:27:00] Thank you.
[04:27:02] It's as quick as kind of the opposite of live view.
[04:27:05] Yeah, it's like...
[04:27:06] It's funny, like what it streams...
[04:27:15] I mean...
[04:27:17] We--
[04:27:18] Because all server state is lost.
[04:27:22] Yeah, I guess it's an interesting way of looking at it. I mean, it's because at the moment of transfer,
[04:27:28] the client owns it.
[04:27:29] owns everything, which is the same for
[04:27:31] basically all of these solutions just
[04:27:34] Because RSCs are more explicit about it.
[04:27:37] we have a better idea of
[04:27:40] like what and what, you know, so to speak.
[04:27:43] Like we just know
[04:27:45] there's a guarantee this goes here. There's something nice about that. For a while I was even looking at Astro like syntax because like those are completely different templating languages. Sometimes server components and client components look too similar. It was like, I was like, hmm, Astro's different syntax is enough that it's like very clear. But there is a certain permissive thing on shared components, which makes me like stuff like server components. Anyways.
[04:28:07] That's really all I have to say about that article. Sorry, let me get back into here.
[04:28:13] Um...
[04:28:15] Okay.
[04:28:17] Big news, we got a couple more things. We got Vercel
[04:28:21] V0 I've not seen this generate UI with simple text prompts so we're using AI here and
[04:28:27] to look at--
[04:28:32] Hmm. To basically generate what you're... It's so funny. I made a joke like this in one of my slide presentations a couple months ago. I was saying this recently. Never make jokes about the capability of AI because in a couple months, someone will actually do it. Like for Solid's April Fool's joke, we made...
[04:28:54] the create
[04:28:56] Hook
[04:28:57] because React had just released the use hook. They were like use, you can use for context,  you can use it for async, it doesn't have hook rules. And we're like, the create hook,
[04:29:07] You can just pass in any string and the app will be generated for you.
[04:29:13] So like, the joke was like, create
[04:29:16] a storefront that sells Ryan's
[04:29:19] Carniato branded socks and then it
[04:29:21] Return to app
[04:29:26] I guess here we are.
[04:29:29] So
[04:29:30] I'm not sure.
[04:29:32] A SaaS admin dashboard.
[04:29:36] Is that what I'm seeing already here? Discover unique features.
[04:29:45] an online
[04:29:47] uh, auction site, just because we were talking about eBay earlier.
[04:29:52] I have to sign into Purcell.
[04:29:54] Does this cost me anything?
[04:30:00] I'm not authorizing Vercel to get from Netlify.
[04:30:04] - Thank you.
[04:30:12] Oh, it's invite only?
[04:30:14] Okay, well that's no fun.
[04:30:16] Thank you.
[04:30:21] Let's try this again.
[04:30:23] an online
[04:30:25] auction site
[04:30:29] and heart care.
[04:30:31] That's no fun.
[04:30:32] Thank you.
[04:30:33] I'm not surprised from a designer stand-up point, and I'm sure it generates
[04:30:37] lovely React components.  I think it's interesting.  I actually saw a tweet...
[04:30:42] Let me see if I can find this tweet.
[04:30:43] This...
[04:30:45] The builder guys have been working on something. Let me see if I can find this.
[04:30:49] Because this suddenly becomes much more interesting.
[04:30:53] builder, I...
[04:30:56] Was it Steve who posted it?  Let's look at our friend Steve here.  He was talking about...
[04:31:04] Yeah.
[04:31:08] He was talking about something along the lines of like taking Fignote designs and having them work in every framework.
[04:31:14] Um...
[04:31:16] Figma to Quick to React to Tailwind to Solid to View to HML will never be the same.
[04:31:28] Here it is.
[04:31:29] velocity.builder.io.
[04:31:34] Interesting. Okay.
[04:31:36] So this is what these guys have been up to. I'm not surprised. Mitosis is an incredible tool.
[04:31:41] um
[04:31:43] I always say trying to reach the lowest common denominator is hard, but
[04:31:47] These guys have enough experience in this field  that I could see them being able to build these kind of universal...
[04:31:54] solutions and honestly, Sammy is a machine.
[04:31:57] So...
[04:32:00] Thank you.
[04:32:03] Invite only if you work at Netlify.
[04:32:08] uh...
[04:32:12] That's fine. It's funny. There was a...
[04:32:16] I felt that way sometimes about the server component stuff, like the server actions.  You know that that stuff was like floating around for yourself for like three, four months and
[04:32:27] But like anyone else who hosts next...
[04:32:29] Do you think they got access to it?
[04:32:31] No, no. So like Purcell gets to do a big launch
[04:32:36] you know, with with next, you know, and be like, look, we have this new server action fund and any of the other supporting
[04:32:44] frameworks, you know, platforms,
[04:32:47] have no clue and then have to go spend the next amount of time supporting it. It is funny.
[04:32:54] They...
[04:32:55] It's open source, but if you talk to basically anybody who works on any of the platforms that run Next...
[04:33:03] The difference between next in a Docker instance and next in Vercel
[04:33:09] is considerable.
[04:33:11] So...
[04:33:12] Yeah.
[04:33:13] And it makes sense why it is. There's
[04:33:15] there's direct ties to what you can do with the infrastructure so it is
[04:33:21] Oh wow, this is news?
[04:33:28] Hmm.
[04:33:33] Did not realize that Nick was leaving.
[04:33:37] You should talk to him.
[04:33:39] Anyway, um...
[04:33:45] Thank you.
[04:33:46] Remix V2
[04:33:48] What's going on?
[04:33:50] I've been seeing hints of this, like the flat routing for ages now.
[04:33:54] But
[04:33:55] Let's see what...
[04:33:57] what's going on here
[04:34:04] views on semantic versioning and building stable software,  and scratch approach to moving remakes forward  without causing you to rewrite your app,
[04:34:10] when new major versions.  Yeah, I think that's kind of one of the funny things  I find quite often.  And it's something we're experiencing right now with Solid.
[04:34:18] Different projects take different approaches.
[04:34:20] But once I care about Semver, generally the move to V1 takes some time, but then you release it.  The move to V2...
[04:34:27] The move to V1 is a production ready.  The move to V2 is like,  how do I make this so that V3 and V4 and V5...
[04:34:35] transitions are smooth.
[04:34:38] Because usually V1, so focused on production, isn't focused on what V2 is going to be like.
[04:34:43] And then once you get to B2, you're like,
[04:34:45] Oh man, I can't put everything that I want to put in V2 into V2 just because of how big of a shift it is.
[04:34:51] So I can relate to that.
[04:34:55] Yeah.
[04:34:56] V1.8 and 10 were lined with racked router, 11 added streaming.
[04:35:01] Flat routing.
[04:35:03] Okay.
[04:35:04] What about RSCs?
[04:35:08] If you're planning for it, we'll be our best against the answer.  "TDLR is we are optimistic about adding support for RCs in Remix version 3."
[04:35:14] Okay, so this is not now...
[04:35:18] V2 relies on current stable React features.  It's interesting because I've talked to these guys before.
[04:35:24] Especially because they're
[04:35:25] like hydrogen was an early RC
[04:35:28] Um...
[04:35:31] users. So there's definitely some pessimism around RSCs around that camp. They have
[04:35:42] things that show...
[04:35:43] The issues.
[04:35:44] They--
[04:35:45] didn't want to publish it because they like, and it's good that they didn't because I think it was rocky relationship with react. I think it had to heal.
[04:35:53] The thing is, if Remix...
[04:35:55] doesn't get on board alongside Next,  there's a chance of fracturing the React ecosystem,  which hurts React, which hurts Remix.  It's a very weird...
[04:36:05] tension.
[04:36:08] There was a while there that I was like, "Ooh, this might actually turn into like almost like a fork kind of scenario." But I don't think
[04:36:15] I think we're past that point. Even if they have personal feelings, they'll support the React features because they want to support React.
[04:36:25] Yeah, see they're talking about supporting hooks
[04:36:29] Gave us a different way. Courageous on the changes we've seen in our seeds since we initially evaluate and particularly our seeds async components look a lot like remix loader married and
[04:36:36] The component decided to ditch the obnoxious third wheel, use loader data.
[04:36:41] Yeah, so you're right. Yeah, so that question, I'm sure the Remix guys are thinking about similar stuff that I've been thinking about.
[04:36:48] Thank you.
[04:36:50] moving your loader code into your async components. But watch out for data dependency waterfalls. Did I already mention this should be its own post? It really should, yeah. See, this is the sticking point. I mentioned this before. The Remix guys are very aware because of
[04:37:04] The mistakes made in React Router 4
[04:37:07] that they do not want to go from this
[04:37:13] To this.
[04:37:15] Yeah.
[04:37:15] Right?
[04:37:17] This remix...
[04:37:19] Today?
[04:37:20] With streaming...
[04:37:23] React server  Quotes Tomorrow  was streaming.
[04:37:27] This is not
[04:37:29] what Remix wants.
[04:37:31] And the default patterns that Vercel has kind of been pushing with Next,
[04:37:36] basically point at that.
[04:37:43] Yeah, the panel discussion. This was a good one, the panel discussion. Someone asked about signals in React and I thought that was pretty funny.
[04:37:52] Anyways.
[04:37:53] That's it? Yeah.
[04:37:54] Let's look at the upgrade guide. We built something in Remix previously.
[04:37:59] Um...
[04:38:04] Okay.
[04:38:05] So...
[04:38:07] change some package stuff
[04:38:10] change the entry slightly
[04:38:16] Thank you.
[04:38:17] Thank you.
[04:38:18] Thank you.
[04:38:19] change the flat routing convention,
[04:38:23] I kind of like it. I also kind of hate it, but I...
[04:38:27] I think it's a lot more visible and it's alphabetical, which is key.
[04:38:31] This is probably my second favorite routing convention.  It's funny, I actually like the old...
[04:38:36] v1 version i don't know why people have such a hard time with it
[04:38:40] I think it might be that people are just used to, like myself, are used to the V1 Remix pattern, which is the same as Nuxt, same as Solid Start. We've been using these patterns for years.
[04:38:50] because it mirrors how it actually works in the router mechanically.
[04:38:54] But...
[04:38:55] I can...
[04:38:56] Obviously the feedback led there, so I should pay attention to that.
[04:39:01] Headers and meta, this is something that I'm interesting in because I was using a lot of tags
[04:39:07] And I think that
[04:39:09] pushing it into the router is smart.
[04:39:14] So...
[04:39:18] Okay, so they wrap it.
[04:39:22] for V1. What does V2 meta look like?
[04:39:37] You will now return an array of descriptors.
[04:39:40] and manage the merge yourself.
[04:39:42] Amen.
[04:39:43] Oh, man. This is kind of smart.
[04:39:46] This has been kind of the challenge here.
[04:39:51] because
[04:39:53] I honestly have no idea how to merge this stuff properly because it doesn't
[04:39:57] It doesn't really work.
[04:39:59] There's a few situations like this where like...
[04:40:02] You can choose something reasonable, but it just doesn't actually...
[04:40:07] like
[04:40:09] Thank you.
[04:40:09] It's just not foolproof.
[04:40:11] Putting the user's hand is smart.
[04:40:16] Okay.
[04:40:17] Meadow.
[04:40:19] Thank you.
[04:40:26] Matches, arguments...
[04:40:29] Catching
[04:40:30] Arrow boundary.
[04:40:35] So they got rid of the catch boundary now using error boundaries.
[04:40:38] Good.
[04:40:40] That aligns us a lot more.
[04:40:51] Okay.
[04:40:52] you
[04:40:54] use navigation.  They have to change.  Honestly,  transition API has the worst name ever.
[04:41:00] I think we're going to change this in solid to get away from React.
[04:41:04] Remix has actually changed their API to use navigation instead of use transition.
[04:41:14] Yeah.
[04:41:15] Mostly minor stuff, looks pretty good.
[04:41:21] Route links properties should all be React camel case values instead of h1 lower case values. These two values snuck in as a lower case in v1.
[04:41:27] Oh, I see.
[04:41:29] Whatever.
[04:41:33] All right.
[04:41:36] This is...
[04:41:37] This is good.
[04:41:38] It sounds like they did a lot of the
[04:41:42] the like
[04:41:44] hard changes here.
[04:41:46] in terms of doing the migration, like stuff with the routing and stuff, while keeping a backwards compatible path.
[04:41:52] But...
[04:41:53] They didn't
[04:41:55] It's aligned. This is an alignment release. It's not like a new features release.
[04:41:59] But that's good.
[04:42:00] I like it.
[04:42:02] Very cool.
[04:42:04] All right.
[04:42:07] People still alive out there?
[04:42:14] Honestly, I think this is all I got this week.
[04:42:17] As I said, it was a short one.  I've been working really hard...
[04:42:20] on solid start. Um, the Vinci branch is coming along quite nicely with the new nitro underpinnings. Um,
[04:42:30] We're making good progress.
[04:42:32] uh,
[04:42:34] Alexis has been working on the...
[04:42:37] some core stuff for, I think, a solid 1.8 release coming up, which will help with some of the island stuff we're going to do. He's been working on a streaming-capable serializer.
[04:42:48] Um...
[04:42:49] We already do streaming with our built-in mechanisms.  I built them solid.  But he's generalized our serializer so that
[04:42:58] basically any
[04:42:59] place that you write to.
[04:43:01] data to the serializer can handle streaming promises, even nested. It's very cool stuff.
[04:43:07] that's gonna open up a lot more capability  in terms of what we can serialize and what we can stream,  including we're looking at a format of serializing JSX.  Essentially, it's still to HTML templates essentially,  but being able to kind of like send that over the wire
[04:43:25] um,
[04:43:26] We could do it already.
[04:43:27] but actually making it part of the core mechanism so that it just works.  So this is all foundational pieces for our island shrouding solution.
[04:43:38] so
[04:43:38] I'm looking.
[04:43:40] forward to that.
[04:43:42] As I said, next week, we're going to have Nikhil...
[04:43:46] kind of
[04:43:47] bring us up to date with some of the work that we've been doing to build the
[04:43:50] the underpinnings for Solid Start.
[04:43:55] All right.
[04:43:58] I think that's the stream. So, uh...
[04:44:02] Thank you all for...
[04:44:04] Joining me today
[04:44:08] and uh
[04:44:12] Yeah.
[04:44:12] Till next week.
[04:44:15] See ya.