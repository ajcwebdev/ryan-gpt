---
title: "m-Gl_Cc8xOg"
slug: "m-Gl_Cc8xOg"
duration: "2:13:09"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/m-Gl_Cc8xOg.m4a"
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
[00:00:00] Thank you.
[00:00:01] Well, it's that time again.  Welcome to my stream.
[00:00:05] Hmm, I'm not sure.
[00:00:08] Thank you.
[00:00:08] - Oh man, Alexa.
[00:00:10] Stop it.
[00:00:12] Thank you.
[00:00:15] I
[00:00:17] Well, tonight we're going to be talking a bit--  or looking at Next.js, which is kind of exciting.  Also a little bit--
[00:00:27] How should I put it? A little bit nervous for me because Next is a framework, a JavaScript framework, obviously, meta framework on top of React that I've never really spent much time with. And
[00:00:39] Yeah.
[00:00:41] I mean, there's reason for that. I'm going to get into it a bit later, but
[00:00:46] It's always hard when you kind of...
[00:00:49] approach something that, you know, people have been using for a very long time.  And it's kind of like the industry standard and you know so little about it, even though I,
[00:00:56] probably have touched like most other frameworks around it. So yeah, I guess we'll have to see  how that goes. Yeah, if you're here, come say hi in the chat. Yeah, happy Friday. I think it's  actually good Friday too. That might affect some people's schedules, but no, we're still here. So,  you know, pour yourself a drink. I got a ginger mojito tonight.
[00:01:20] And, you know, let's have some fun with it.
[00:01:26] But yeah, I'm going to give people a couple more minutes to join in the chat.
[00:01:30] This week in JavaScript was a few more different things happened compared to the last couple.  So I'm actually kind of excited about that portion.  That might have been actually why more than anything I wanted to do the stream this week, just because there were some good conversations to be had and different things going around that I think are important to mention.
[00:02:00] have.
[00:02:01] time to even go over.  There's like...
[00:02:03] I think there's
[00:02:04] I don't know, somewhere around there. I'm super stoked about that. A lot of other stuff happened in the ecosystem this little while. If you're here, StreamYard is telling me that you're here, come say hi in the chat.
[00:02:20] Thank you.
[00:02:21] Thank you.
[00:02:24] All right.
[00:02:27] Give those people a couple, just a minute more.
[00:02:33] Yeah.
[00:02:34] Thank you.
[00:02:35] It's like seeing Ego sit high, but it's like 10 hours ago.
[00:02:43] Oh, there we go.
[00:02:44] Hi, thanks. Good. It feels nice not to be up here alone, even though I kind of inevitably am. But
[00:02:50] Thank you.
[00:02:54] Yeah.
[00:02:54] Thank you.
[00:02:55] Yeah, there we go. Yeah, let's get this rolling a bit. Okay.
[00:02:59] Yeah.
[00:03:00] All right.
[00:03:04] So, um
[00:03:06] I guess without much further ado, let's get started with this week in JavaScript.
[00:03:12] I'm going to flip over.
[00:03:16] Yeah.
[00:03:17] As I mentioned, a number of things happened this week.
[00:03:21] And for me, this week actually started
[00:03:24] with
[00:03:26] Thank you.
[00:03:27] Talking about web components, I mean, why web components?
[00:03:32] Thank you.
[00:03:33] There has been this ongoing sort of dialogue. I saw this tweet.
[00:03:39] Thank you.
[00:03:40] Like everyone has triggers on social media, I think.  And...
[00:03:45] You know, like some people...
[00:03:47] when they see a React framework claim that they...
[00:03:52] have partial hydration or something that kind of drives some people nuts. For me,
[00:03:58] I was just like,
[00:04:00] My man, Alex, what are you talking about?
[00:04:04] I
[00:04:05] Yeah.
[00:04:06] Like why it's pretty wild how many framework authors out there are basically admitting that they don't crack how HTML and DOM work.
[00:04:15] I mean, obviously, this is probably meant to be sensational or something, but it's like--
[00:04:20] Of course, they know how HTML and the DOM work.  Otherwise, they couldn't have written the framework.
[00:04:26] And what the...
[00:04:29] the kind of subtone might be is they're not using HTML in the DOM,  perhaps the way you would like. And,
[00:04:37] I just like framework authors is being used here almost like a dirty word.  And I was like,
[00:04:42] What? What? What?
[00:04:45] -
[00:04:46] are like, is this a revamp of like, everything should be vanilla JS, you know? And, you know,
[00:04:53] It isn't. I mean, I looked further in the thread and I got the angle. It's all about web components again. And
[00:05:00] Thank you.
[00:05:02] I don't know.
[00:05:04] I had to ask a question. I'm like, why is the comparison between web components versus frameworks? Or people use web components versus framework authors.
[00:05:14] you use a framework to author a web component,
[00:05:17] Aren't they kind of ultimately the same thing?
[00:05:19] You know, they're just libraries, some output web components, some don't, some do both.
[00:05:25] Like why position it that framework and framework authors are different?
[00:05:30] Yeah.
[00:05:32] And...
[00:05:35] I think I told you some things trigger different people. Well, I another framework author I know happens to be pretty triggered by this and he jumped.  He jumped right in. I'm rich Harris here.
[00:05:48] He's like, they're not a different thing.  It's web component-centric frameworks versus non-web component-centric frameworks.  A few people...
[00:05:57] Eventually, few people advocate writing web phones  without a framework, right?
[00:06:02] But it seems otherwise because web component thought leaders like to berate non-web component frameworks.
[00:06:07] Yeah, I mean, that's what I'm seeing. I just maybe I'm just like echo chambering here. You know, me and Rich is perhaps could have been private conversation is now in the open. But
[00:06:19] Why? What's the point of that separation? Why are we...
[00:06:24] Why are framework authors not web component framework authors?  So the funniest thing about this whole conversation
[00:06:31] is,
[00:06:33] Svelte, view, solid.
[00:06:36] We're all pretty good at making web components.
[00:06:41] Yeah, I got some things from the chat here. Yeah. Hey, Devon. Hey, David.
[00:06:47] Thank you.
[00:06:48] Yeah, I mean, is that what's going on?  I just, I mean, Rich goes on and Rich is, you know, this is...
[00:06:55] Largely a
[00:06:58] like one of those trigger points. Because, well, for our authors have rejected the web component paradigm.
[00:07:03] We did a stream about this a few weeks ago.  Even though Rich says they've rejected it,
[00:07:09] And he means from like a...
[00:07:11] That's the way you build stuff. Svelte still outputs web components, right? Like,
[00:07:17] It's not like you can't author them.  It's just like we decided at some point,
[00:07:22] that our frameworks weren't going to become
[00:07:25] Like our components weren't all going to become web components.  And as I said, we've talked about that in length in the past.
[00:07:31] you know, and especially on the web component stream, but it just...
[00:07:35] It's just this ongoing thing.  And for me, this was the beginning of my week is if you do kind of
[00:07:42] go into it, it just keeps on going. You know, there's a lot of
[00:07:45] you know, a lot of conversation here, you know, about what's a library, what's a framework, and it goes pretty deep about using the platform.
[00:07:54] more controversial than anything I covered on the stream. So if this is your cup of tea,
[00:07:59] you know,
[00:08:00] there's all different shades of like,
[00:08:05] of like--
[00:08:08] you know, where people fall on this.
[00:08:12] Yeah.
[00:08:13] Yeah.
[00:08:14] Thank you.
[00:08:15] Hey, Theo.
[00:08:17] Yeah.
[00:08:18] React is pretty much web phones but without the V3. It's pretty much reusable. Yeah, I mean, there is like a, I know because I try and interrupt the thing. Web phones do have this one benefit that
[00:08:29] they force the interface to be a DOM.
[00:08:32] elements so everyone can interact with them.  Whereas it is a bit of a pain to kind of weave, react,  and view components together or whatever.  You know what I mean?
[00:08:41] I mean, it's not...
[00:08:43] It's not like, I can't say that they cover the same ground.  My whole point is actually they don't cover the same ground.  I think this discussion kind of was really good.  Ken Wheeler came in and he was like,
[00:08:55] I never felt that without...
[00:08:57] adjacent library support, you could actually author these anyways.
[00:09:03] Thank you.
[00:09:04] Corey, this guy who's a very big web component was like, yeah, you know, like different levels of things, you know, and I think this is probably the most sound conversation. Of course, if you go the other route and follow Rich's conversation down, it starts getting pretty deep.
[00:09:23] and we get into accessibility conversations and stuff, which is actually really quite cool. You hear from people from Salesforce, like this just pulled in people from all over the place, talking about this again.
[00:09:39] Yeah, I mean...
[00:09:42] I feel...
[00:09:43] kind of like
[00:09:47] Yeah, talking about Elm, like,
[00:09:50] Yeah, I mean, I'd have to search down the threads to see all this stuff, but essentially...
[00:09:55] This was the starting of my week.
[00:09:59] I don't know. Hopefully...
[00:10:00] The most interesting thing for me that came out of this was actually at one point in the thread, and I'll probably have to sketch way down, is somebody on the website.
[00:10:09] on the web components side was basically like,
[00:10:13] Where is it? No, I went too far. Someone on the web component side was like,
[00:10:20] Within the next five years, all frames will be transpiled to native web components.
[00:10:27] Thank you.
[00:10:29] And Rich says, the reason I said I'd frame this one is because I don't see any evidence for that. Personally, if anything, I see, we'll see frameworks begin to explore the notion that components purely an author-time concept.
[00:10:39] And I mean, for me personally, anyone who knows me, this is incredibly vindicating because that's basically the body of my work is that components are an author time concept.
[00:10:50] Components of pure overhead, that whole thing.  So I was super stoked to see Rich on the same page here.  And yeah.
[00:10:57] Yeah.
[00:10:58] Yeah, it goes a little bit.  He's talking about how quick breaks components down.  Marco does the same.
[00:11:04] Yeah, OK, we're going to do compilers.  Devon got in talking about area.  Like, yeah, this is a wide topic.
[00:11:10] What is clear to me
[00:11:12] is...
[00:11:14] There are a lot of ideas of how standards should go and a lot of different perspectives in the mix here.
[00:11:22] At some point...
[00:11:24] certain parties that decide not to be part of the process and,  or they're going off on their own. And there's like a real split,  like, cause there's,
[00:11:32] Thank you.
[00:11:33] There isn't...
[00:11:35] like cohesion and maybe there always has been that kind of friction but I remember when web components first came out, we kind of all believed and I'm including people like rich, you know and framework authors because we thought okay well this will simplify our jobs in the future.  And we built our API's around it, you know, if you seem like slots in shelter view, you know, web components if there's similarity there you better bet there is you know, so.
[00:11:57] Yeah, I think
[00:11:59] I think things have kind of moved on a bit and it's interesting to see
[00:12:05] to kind of see, you know, what
[00:12:08] what that means.  So anyways, I've dwelled on this enough.  We can probably move on a bit.
[00:12:16] How's the performance of web components these days? Can you get hundreds on the page? Yeah, I mean, they're okay. I've done a study. You can check out my articles on this, specifically cost of UI components revisited. And
[00:12:30] Yeah, web components scale decently well, pretty much as well as any non-BDOM framework.
[00:12:36] But VDOM framework scale with more components better than web components.
[00:12:40] um
[00:12:42] And
[00:12:43] like at a certain tipping point, like a stupid amount,
[00:12:47] you'll see that like a VDOM library like Inferno will actually
[00:12:52] be more performant at like creation or updates than web components.
[00:12:58] components, even like the most oftenly written hand  vanilla thing without a framework.
[00:13:04] And yeah, and solid as well, obviously. So yeah, I mean, it's an interesting thing. Web components, where they don't need to be, where you don't need, like, the thing is, when we build our UIs these days, components are a convenience thing. They're like a way of breaking up our code, modularizing what makes sense for us.
[00:13:20] Web components are a mechanical DOM element.  When you make them the same thing,  you're just bringing overhead that doesn't need to be there.  Web components are good as DOM elements.  But if you're going to break up a bunch of stuff  and introduce extra DOM elements, it's overhead.  So it's not hard to figure out how using
[00:13:39] the underlying vanilla JS mechanisms versus using web components. Vanilla is going to be faster than using web components because it's less than using web components. And if a framework is sufficiently efficient at doing a vanilla thing, it's going to be more efficient than web components at a certain scale. Like it's just math.
[00:13:57] Thank you.
[00:14:00] Thank you.
[00:14:01] Yeah, yeah, yeah, no, exactly. And Rich, like everybody was really, I think we've been at it long enough. Alex is probably going to keep on shoving it, but I mean, it's a tricky one. Alex is right about single page apps and the blow to JavaScript and the whole thing.
[00:14:18] It's just like,
[00:14:20] There are other solutions, and we'll probably talk a bit about them as we continue here.  Yeah, there is a problem with the way we do stuff in single-page apps and React, especially post a child for that.  But that isn't the whole story.  So let's keep on going.
[00:14:39] Okay, so they're also, you know, getting past web components.
[00:14:45] Thank you.
[00:14:46] Yeah, I mean, to be fair, yeah, they're good for isolation, but
[00:14:52] I mean, there are places you want to use your same design system across different applications and they use different frameworks.
[00:14:58] Thank you.
[00:14:59] decent thing as long as the framework that authors the weapon was small,  small enough. Good job. You know, it does good widgets like Zendesk.  You ever get those little things like where they create an iframe and they can  like do an overlay on your, on your page.  I think web components a great interface for that from a consumer standpoint,  you just like put an HTML on import a script,  put an HTML element on your page instead of doing like these jQuery style APIs.  I think, I think for those cases that I just mentioned, they're great.  It's just not a replacement for like a,
[00:15:26] like a typical modern framework framework,
[00:15:30] kind of--
[00:15:32] thing.
[00:15:33] Anyway, let's keep on going. So, yeah, now that we're past web components, I want to talk about a few releases this week that were exciting for me.
[00:15:43] One of them was
[00:15:47] Well, quick docs.
[00:15:50] You guys know I've been covering QUIC on the stream a lot. QUIC is a newer JavaScript framework that's all based off really efficient hydration.
[00:16:03] I've been playing with it blind.  It's been challenging.  I've hit-- you know, I fall in all the little pits and stuff.  But the docs are up now, and that makes life a lot easier.  I was actually looking over them today.  I was updating my Hacker News example and stuff.  So yeah.
[00:16:18] This is great. It's been a little time coming and I think
[00:16:23] Maybe, you know,
[00:16:24] give it another week or so to settle but it might be a good time to start looking at quick pretty quick here.
[00:16:30] See what I did? The other one that I want to talk about is lexical.
[00:16:37] And
[00:16:38] I've been here about Lexical for like a year now. For those of you who aren't aware, Dominic Ganaway Trudium was the creator of Inferno. As anyone who watches my stream knows, I'm a huge, huge fan of Inferno. Inferno was one of the big influences for Solid early on.
[00:16:55] Thank you.
[00:16:56] Dom, to my pleasure, you know, I guess first time about a year ago, Dominic started kind of showing up in our discord.
[00:17:04] And just being like, you know, hey,
[00:17:06] I like solid.
[00:17:08] Why don't you take a look at this?  He just kept on like sliding me little hints.  He'd be like...
[00:17:12] You know, you could optimize this.  You just kind of like just kind of, you know, just kind of just kind of come by and be like, have you ever thought about doing this?  And I'd be like, no, I actually haven't.  He's like, you know, it might be worth looking at.  And just just these gentle nudges.  And at a certain point, you're just like, OK.
[00:17:31] You want to get back in the framework game, right?  Like, let's build something together.  And he's like, no.
[00:17:38] You know, he's like the performance on that side is kind of capped off. It hasn't really changed in six or seven years. And some people like what? No, no, he's absolutely right.
[00:17:48] The changes since Inferno that have happened on the JS, you know, kind of like performance  vent for me have been so small. Solid might have got like another five or two.
[00:17:57] five to eight percent over Inferno or something. But like,
[00:18:01] That was five years ago. I think solid's been where it is performance wise almost for five or that approach for almost five years. Like things haven't moved. And Dom's like, no, no, I'm not. I'm not getting back in the framework game because I found something better.
[00:18:14] He's like, this is a place that really needs
[00:18:18] performance.
[00:18:19] and a focus on accessibility.
[00:18:20] And he's like, text editing.
[00:18:23] So he's been telling us about this amazing text editor that he's building inside of Facebook or Meta now, is it called? And how it was like he took all he knew about performance and built custom reconciler that was special purpose for text and...
[00:18:41] built something that was completely based on accessibility.  Accessibility was like his primary concern,  and that this was gonna be amazing.
[00:18:48] two to three times faster than what you've seen in a text editor before. And
[00:18:54] This week, it went open source, so no other people get to try it out. I mean, I'm so stoked for him because as I said, he's, every time he comes in, he's there to kind of help on the solid side. And everyone's just like, come on, come do some stuff. And he's like, no.
[00:19:08] This is
[00:19:09] this is why I'm doing it. This is the reason. So the seed, you know, what do you say, last 18 months? Yeah. But a year and a half, he's been putting all his effort into, you know, sometime after he left the React core team to building this amazing text editor.
[00:19:24] So, yeah, I have to say, like, this is not an area that I'm terribly familiar with, but I know people are excited about this, right? They released it right away. I says 26 stars, but I think they're at 5000 stars. Like, it's been like,
[00:19:41] I don't know.  When did he post this?
[00:19:43] April 13th, two days.
[00:19:45] There are 5,000 stars on GitHub.
[00:19:49] care about that I mean let's see what's the running number where are we at right now
[00:19:53] 5,100.
[00:19:56] Yeah.
[00:19:57] See if I can actually go this way and see lexical.
[00:20:00] Because you only get the true count if you go this way.
[00:20:03] 5,077.  So yeah, he posted about an hour ago they hit 5,000.  So they're probably up 70 in the last hour.
[00:20:13] Yeah.
[00:20:14] This is hot stuff.
[00:20:16] And
[00:20:18] As I said, I don't know too much.  All I know is they launched with React support, obviously.
[00:20:23] But
[00:20:24] guys on the solid team got early access to it.  And we have this, I think we have the second integration.  So actually I've got lexical solid,
[00:20:33] right here.
[00:20:36] It's still not complete, but...
[00:20:39] Like,
[00:20:41] It's, yeah, I mean, Dom will talk about it.  He was very intentional of using Dom.  Accessibility was like his whole thing.
[00:20:54] reason of being. So yeah, I mean,
[00:20:57] I don't know a ton personally about this, as I said, because
[00:21:02] this is just not an area that I'm an expert in,  but one thing was clear is that a lot of care and attention to approach was  taken with this. And he wanted to,
[00:21:10] basically in the same way Inferno completely changed how performance looked like in web frameworks. He wanted to do that for text editors.
[00:21:20] Thank you.
[00:21:20] Yeah, so yeah, I mean, let's see what we got here.
[00:21:24] It's as far as I can, like, okay, plain text example, and then there's an editor and this editor looks like something we built. Code sandbox is not finding our input. So plain text editor. So yeah, I mean, let's see what this code kind of looks like for a second. Just do a quick diversion here, but we've got like, so the lexical exports, a few things get selection root editor stayed. And then we've got some plugins. It looks like from lexical solid, like a history plugin tree view. And then
[00:21:53] placeholder. And then I guess it's very React, like you're just going to go lexical composer.  This is probably like our initial config. This is probably like our
[00:22:00] like context provider and then create a container,  put in a plain text plugin, put a change plugin,  history plugin, and it just composes like JSX.  And now when I'm, let's see if we can blow this up a little bit.
[00:22:12] Um,
[00:22:14] when I'm typing in here, we should see the preview. Here is some text, new line,
[00:22:23] I'll-- right.  And then, oh, look, time travel.  Can I see how this works?  Oh, yeah.  OK, so I can go forward and backwards in time on the editing.  I guess that's what the history plugin does.
[00:22:39] Anyways, I don't know.
[00:22:40] Probably lots of cool stuff. Did I go far enough forward? Yeah. Probably a ton of cool stuff here that I'm not aware of, but I just wanted to highlight
[00:22:50] that Lexical is out now and that there's already a solid integration alongside the React one.  So pretty cool stuff.
[00:22:59] All right.
[00:23:00] Let's keep on going.
[00:23:03] Thank you.
[00:23:11] Yeah, I'm wondering if I'm going to the browser.
[00:23:16] Thank you.
[00:23:18] Thank you.
[00:23:19] Yeah, I think this -- maybe we'll leave that for another stream. I don't want to put any pressure on the solid. I know there's a couple bugs still in there.
[00:23:36] Thank you.
[00:23:37] Thank you.
[00:23:39] I think you have to do all the stuff. Yeah, I think as I said, I think
[00:23:43] they he they there's two design decisions
[00:23:48] Yeah.
[00:23:49] Here, and accessibility was the biggest one. And then the second design decision that they went with was he wanted to treat it almost like with a
[00:24:00] like,
[00:24:01] not BDOM, but like a modern declarative kind of mentality  where the DOM is a protectionist state.  He didn't just want to like store the state in the DOM  like a content editable.  He wanted it to be a projection.  So basically the same kind of concepts he had  with improving the BDOM
[00:24:13] is kind of what he applied here. It is a reconciler.
[00:24:18] But if you ever talk to Dom about VDOM and stuff, he'll blow your mind because he doesn't view a VDOM as a bunch of virtual like static nodes or whatever, like the typical thing for him. A VDOM is the holes. It's not the static part. It's the it's the gaps in the template, so to speak.
[00:24:33] And sorry, I'm kind of like revealing, getting ahead of myself here.
[00:24:38] And...
[00:24:39] Sorry, I'm on the wrong tab. And essentially,
[00:24:43] that is like...
[00:24:46] Makes a ton of sense for me coming from a reactive perspective, because in like reactivity, we hoist all the static stuff and then we just update the holes. But for him, his view of VDOM is the same. So that's why like when he saw solid, he's like, it's the different approach, but like, you know,
[00:25:00] potatoes, potatoes kind of thing, which is not how most people view reactivity versus the VDOM. For him, it was kind of like, yeah, you memo here, you, you,
[00:25:08] create a reactive computation here, same difference.  So yeah, if you ever get a chance, I don't know if you will.  If you want to really understand what it means for performance  in the VDOM, he's one of the best people to talk to.
[00:25:25] Anyway.
[00:25:28] So yeah, those are the announcements, Quick Docs and that.
[00:25:34] I want to take a moment to talk a little bit about last stream here, too.
[00:25:40] because some people saw it and someone made an Elm version of our Hacker News demo.
[00:25:49] look in a nice elm green. So now we have another framework to add to the pack, so to speak.
[00:26:00] It's got my compressing comments and everything. So I'm pretty stoked about that. I looked at the code. Elm is wild. Like you, I heard like you can't write an error in it. So it's like a completely different authoring experience. But
[00:26:13] Yeah, pretty cool stuff.
[00:26:16] There was also a few other comments from people in response to the stream last week talking about the Hacker News comparisons with Astro.  The quick guys were like, we improved our server-side rendering.  Please do it again.  I started working on it today.  I didn't have a chance.  Otherwise, I would have...
[00:26:32] I would have brought it.  We might look at performance a bit at the end.
[00:26:37] The Marco guys are like, well, you know, Ryan, we have a feature called split components. And I was like, split components? I've heard of those. And it's funny because we've been designing Marco 6, so we don't need split components anymore. But Marco actually has a way that you can even split apart the components that are hydratable, like the few little ones, and do even less work. And I actually ran it through PageSpeed earlier.
[00:26:58] And Marco got an 86%
[00:27:01] Which is pretty good for my books.  I mean, it's not, you know, 96 like we saw with Astro.  But in the Astro example, they were not doing hydration until...
[00:27:12] after like the timer stopped. It basically did everything, took the measurement, then did hydration.
[00:27:19] This is...
[00:27:19] 86.
[00:27:21] with blocking hydration.
[00:27:23] So for you who saw the last stream,  you'll understand that this is a very good number.
[00:27:31] the highest blocking
[00:27:33] This is, you know, I think using split components might be like a little bit
[00:27:37] tricksy, so to speak, but this might give us, start giving us an indicator of what the range  that Marco 6 will be even before we add stuff like lazy hydration. We might, like the blocking  normal hydration might actually already be able to get close, you know, maybe even to up to 90  or something. So really kind of quite stoked with this. For those of you who don't know,  this is the meanest demo ever. It loads 1,400 comments. We might come back to it with Next
[00:28:07] very impressive. I know most people are like,  oh, where's the hundreds? This test...
[00:28:11] Single page apps usually can't get above 50 on this test.
[00:28:15] So I'm very stoked about that. Okay.
[00:28:19] I'm not going to run Elm right now. We can decide if we want to run it later. This isn't about performance. I'm stoked to see an Elm version of the demo.
[00:28:28] Yeah.
[00:28:34] Thank you.
[00:28:34] Yeah, we'll save benching more until later when we're done with Next. We'll bring Elm in. Actually, let's do Elm right now.
[00:28:45] Yeah, let's do one right now. Why not? Just to kind of get a feel for it. I mean,
[00:28:50] What is it? It's let's it falls my pattern and then we just need to grab our.
[00:28:58] hideous, hideous 1400 comments from Facebook example.
[00:29:03] Sometimes they throttle me and they actually don't send all 1400 comments. Someone earlier was like, I don't see a huge difference between Remix and Mark. And I'm like, what? And I checked it and I'm like, oh, it's only sending 100 comments.
[00:29:15] So let's just run this for a moment.
[00:29:19] Thank you.
[00:29:24] Thank you.
[00:29:24] Thank you.
[00:29:25] Thank you.
[00:29:26] Thank you.
[00:29:27] Yeah, I mean, right now it's just measuring the full hydration time.  Yeah, here we go.
[00:29:31] Thank you.
[00:29:32] 28. Okay. Yeah, I think...
[00:29:35] This makes sense.
[00:29:38] Largest Contemporal Paint. Interesting. But first Contemporal Paint was fast. Oh, interesting. Either they're streaming
[00:29:44] or they're doing client-side rendering.  So they're like running the client-side shell,  'cause this is a fast contentful paint for this.  Like if you look compared to the Marco example,
[00:29:53] pretty fast, but Marco's done at this point.  But on a slow network, it's usually not.  They must be doing clients.
[00:30:00] - Head fetching.
[00:30:00] That actually explains everything because like,
[00:30:03] Let me see if I can do another one.  Let's see if we do--
[00:30:07] Let's do client-side rendered solid.
[00:30:10] Hacker HTTPS colon Hacker News.
[00:30:19] This one.
[00:30:20] But I want to do...
[00:30:23] CSR?
[00:30:26] Yeah.
[00:30:26] I bet you it'll have similar characteristics at home.
[00:30:29] This one is completely CSR, it's not even server rendered at all. It's like what happens if you send a blank page?
[00:30:34] and then try and do this.
[00:30:39] Okay.
[00:30:42] Oh, that's hilarious.
[00:30:46] Oh, that's so hilarious. You guys are gonna get a kick out of this. According to Lighthouse, my client rendered version is faster than any of the server rendered things on mobile, probably because
[00:31:00] Thank you.
[00:31:02] Yeah.
[00:31:03] That's hilarious. Like, that's a way larger blocking time and all this stuff. But because that first contentful paint is so fast, it like boosts the lighthouse score, even though everything else is slower.
[00:31:16] Yeah.
[00:31:18] Right. There's no hydration here. It's like it's a client rendered app.  This is just the completely pure client side. So, I mean, this just goes to show.  Right.
[00:31:27] Don't server render.  Don't use Solid Start.
[00:31:30] Remix or SvelteKit, just client render, and you can get higher Lighthouse cores.
[00:31:35] Thank you.
[00:31:36] Yeah.
[00:31:38] Honestly, this is a lie, but...
[00:31:42] But this is actually very relevant to our stream tonight and why I never actually looked at Next.js in the past, because I was convinced that client-side solid was just so much faster than Next.js.
[00:31:53] in the early days. But we'll talk more about that later.
[00:31:57] But yeah, there you go. Like,
[00:32:00] Client side. It's funny. So yeah, actually,
[00:32:04] I mean, solid might be one of the fastest client-side rendering frameworks, but yeah, I mean...
[00:32:09] And
[00:32:10] This is amusing, isn't it?
[00:32:12] Yeah.
[00:32:17] All right.
[00:32:18] Anyways, yeah, so I'm just getting distracted by this. I just think it's actually a little bit funny, to be honest, that this score from ClientSideSolid is higher than most of the frameworks we tested last week with the pure, like, send a blank page thing.  So I guess here you go. Jamstack still lives. Sorry, sorry, Remix.
[00:32:39] Okay.
[00:32:42] I'm being a little fissies, just like that's not actually the case. It's just funny. There is a range in which client-side rendering can be better performance.  We already actually saw this, actually, where solid client-side apps are generally have higher Lighthouse scores than React SSR frameworks.
[00:33:04] But even on this stupidly expensive demo, this is the case kind of cracks me up a little bit.
[00:33:11] Okay, let's keep on going.
[00:33:13] Um, yeah.
[00:33:16] All right. Good times.
[00:33:22] Then I kind of wax poetic about Marco. I know no one probably cares on the stream or you already see the market stream.
[00:33:29] Every time I try and think of the perfect solve for the perfect reactive language, I just keep on coming back and going, man, why is Marco so perfect and everyone hates it?  So yeah.
[00:33:38] Probably not for everyone. I actually think that the dislikeness and tax people are actually going to get over in the near future, you know, to a certain degree. But yeah, this is just me just going on and on about how beautiful Marco is. Probably not very interesting.
[00:33:53] But
[00:33:55] I've got...
[00:33:58] Yeah, yeah, I mean, this is a good point, right? I think that actually makes a difference. So like, when you have like, kind of poorly architected back ends and big data, like, there you go. I mean,
[00:34:11] That's the funniest thing about benchmarks, right?  Like, there's always, like...
[00:34:17] circumstantial stuff going on. And
[00:34:20] The answer always isn't like isn't always clear one. It's just it's just it's just it's it's it's kind of funny that if your stuff is bad enough in a certain way, like client side rendering could be better like there's a crossing point like maybe this is a bit of the philosophy will again we'll talk about next a bit and see where it goes.
[00:34:40] Yeah.
[00:34:43] Yeah, honestly, yeah, I will. You know, it is. But the last thing I want to talk about was.
[00:34:53] Yeah.
[00:34:54] Yeah.
[00:34:59] Yeah, yeah, always, Ben.  That's the whole thing, virtualized lists.  Like this is such a stupid example.  The only reason I like it
[00:35:07] is because
[00:35:10] But you can still, like, we'd be good enough with a virtualized list. It is a tiny bit hard to virtualize a recursively nested structure. Like, I played with that a lot. I used to, people don't know, I used to work for private social media and we did a lot of image grids. So it's not quite the same, but we did a lot of different layouts and did like calculations and did different types of
[00:35:29] grids
[00:35:31] and different kind of layouts.
[00:35:33] that were virtualized.  And that was one of my favorite things to do.  I'd always like come up with like different ways  to do like highlight images  and like do all this kind of,  these kind of layouts in JavaScript  and have them all calculated and be smooth  and be unloading and be super performant.  I used to like sit there sometimes  and just like, especially on the mobile apps,  just like sit there and just like,
[00:35:54] scroll as fast as I could just to be like proud of my work. And, um,
[00:36:00] Yeah, I mean, to be fair, like, if you have a bunch of collapsible nested recursive comments, it's a little bit harder. But like, yeah, you would never load all 1400 comments. It's just
[00:36:10] It's just...
[00:36:12] Dumb.
[00:36:14] Thank you.
[00:36:14] Thank you.
[00:36:15] Thank you.
[00:36:17] Yeah, I mean, exactly.  Like the fact that it's a recursive thing.  I absolutely loved Ben like taking Astro last week and doing that because it's like
[00:36:26] You can do it with Vanilla JS, not too hard.
[00:36:29] But it's like with a declarative framework, it's like, do you have partial hydration?  Yes, no.  Like there's not much, there's not other ways to get out of that.
[00:36:38] Thank you.
[00:36:41] Yeah, and this is kind of the thing and why we're going to talk about this for a second, because I made this chart because...
[00:36:50] Thank you.
[00:36:51] I've been building charts recently.  I've been trying to, like, fix the Addy Esmone, like, chart.  And I'm having a hard time.  I'll show you guys at some point.  But, like, there's so many dimensions to this.  And at a certain point, I'm just, like,
[00:37:05] Let's just...
[00:37:06] Lay it out there on the partial hydration side or the progressive and just I'm going to categorize this in three ways.  And I'm going to give you an idea of where all the frameworks thing.  And the important part is the note that I say here is actually very important.  There is some nuance here, like progressive plus resumable.
[00:37:22] IE quick.
[00:37:23] does a pretty decent impression of partial. And partial plus resumable kind of means you don't  need that much to be progressive, talking about Marco 6. And then further, and coarse grain,  maybe 90% of all the benefit. So I don't know, 90 times 90 is what, like, you know what I mean?  Like maybe it's 80% when you put it, you know, both things being coarse grain together. But  like my point is like,
[00:37:47] If this is 80% and this is missing some holes and stuff, especially if you focus on the latter three here, these are very interesting, slightly different takes.  And I actually love it because what this chart shows is actually Astro is the first framework to put progressive and partial together.
[00:38:05] And like,
[00:38:06] Quick and Marco are obviously working very optimally on resumable, and that's why they're all fine-grained.  But it's really interesting.  As someone who works on Marco, I actually look a lot at Astro because then it gives me insight.  I go, okay.
[00:38:18] How does that, like, how does the game change when you have both?
[00:38:22] Right.
[00:38:23] So Astro is almost like the first for us to kind of see that.  And I mean, if you go further back, Marko too was the first back in 2015.  Yeah.  Marko had partial hydration back in 2015, like declarative, like modern, like,
[00:38:38] partial hydration back in 2015. We actually did a little research to do this because we look back to Marco 1 and Marco 1 back in 2014 had out of order streaming. That's that new feature that just came out of React 18.
[00:38:51] Um,
[00:38:52] But
[00:38:55] And Marco 2, and I think it was widgets version 4, introduced declarative partial hydration APIs.
[00:39:04] And yeah, so almost from the beginning, Marco has had streaming and partial hydration, which is pretty crazy stuff.  But I just want to kind of show that it's funny because the reason I made the split and the reason that I didn't put partial under quick is that there is a mechanical...
[00:39:20] difference here.
[00:39:22] um
[00:39:24] And that is that...
[00:39:27] *sniff*
[00:39:29] These frameworks, all of them, except quick, actually
[00:39:33] follow a set of rules. And that rule is the top of the page is server only and
[00:39:39] And
[00:39:40] While you can put as many server components inside server components and be get server components and go all the way down.
[00:39:46] Once you hit something client side,
[00:39:50] that's stateful.
[00:39:52] you can't put any more server things in it unless they're passed in as children. And then
[00:39:58] the client doesn't pass any like props, like render props to it.  In that case, like transclusion through children,  kind of like the shadow DOM rules, sorry, it's a little untechnical.  Technically, you can have server embedded in children,  which is like recursive trick that I did on last stream.  But generally speaking...
[00:40:15] you have to keep the chain of command from all the server components. And this is true for Marco,  React server components, Astro, even Marco 6, even though Marco 6 breaks things down subcomponent  level, which allows us to like mix and match stuff together in the same template. It's just because  components don't exist there. Once you hit something stateful, like a branch, it has to be  stateful. So just to kind of put in perspective and what, because it has that knowledge, it can
[00:40:45] serialize in a lot of cases if it knows that the stuff's only used on the server. Quick has another solution for that where you can just like literally market as don't serialize. But to be clear, quick doesn't know what only runs on the server client. It's just like the perfect lazy loading system, so to speak. Like it loads just as much JavaScript as you need.
[00:41:04] but it doesn't know ahead of time, where the rest of these actually know at build time what can be on the server or client. And to be fair,
[00:41:11] This sounds like maybe something that's less of an advantage for Quick.  And some situations it can be.  But generally speaking...
[00:41:21] This is highly beneficial the more static your pages, the more dynamic your pages, you might have to pull in all that JavaScript anyways. And at that point, you do want to be able to do something progressive because no amount, even though partial hydration is the absolute problem.
[00:41:36] Um,
[00:41:37] optimization, like, you know, 100%, this is server, it's never coming.
[00:41:43] the rest of it, you know, and we often call that the last 20%, you know, on the Marco side.
[00:41:49] If that 20% suddenly gets to be 500 kilobytes, a megabyte,  then you're going to need to progressively load it still.
[00:41:58] I haven't
[00:42:00] witnessed an app that large, even at eBay, because our stuff's mostly static.
[00:42:04] We do see the 80/20 rule there, even with Marco 2.  And Marco 6 will probably even be better.
[00:42:12] I'm pretty sure quick coming from someone from Google,
[00:42:15] Like he's seen those nightmare apps somewhere.  They probably haunt his dreams.  Michiko's probably like just pictures them.  And he's like, oh my God.
[00:42:23] Even getting rid of 80% of the JavaScript isn't enough.  These apps are like, they'd be hundreds of megabytes if they had their way.
[00:42:31] So,
[00:42:33] Yeah, I trust at a certain scale there is a need. And but that's also why I didn't mark it as partial for people to understand.
[00:42:40] Thank you.
[00:42:42] What's going on chat?
[00:42:46] Thank you.
[00:42:50] What am I giving you for? What are we giving Theo credit for?
[00:42:57] Thank you.
[00:42:58] getting me and Fred together probably, maybe.
[00:43:02] What's-- I want-- waking up of stream.
[00:43:08] Thank you.
[00:43:10] I'm not falling for this, Oren.  I know where you're going.
[00:43:13] React has something called selective hydration.  I don't feel like arguing definitions, to be fair.
[00:43:20] Yeah.
[00:43:23] Oh, getting me into charts. Yeah, yeah, yeah, yeah. No, I, especially this kind of chart. I've always been a fan of the, the, the two dimensional, like the, the axes axes chart. Even from my Magic the Gathering days, I used to like think of stuff like that way and that, but, but yeah, I, tables and stuff has not been my thing.
[00:43:45] And diagrams. Exactly. Yeah. Yeah.
[00:43:50] Hey, Dylan.
[00:43:54] Thank you.
[00:43:55] Thank you.
[00:43:59] Thank you.
[00:44:00] Thank you.
[00:44:02] Thank you.
[00:44:04] I'm not quite sure what the scenario is here. I think the thing is, any declarative framework
[00:44:16] Like either there's kind of a tension here for this question, because any declarative framework wants to own the knowledge of the state and they don't want to read the DOM for it, because if you read the DOM, it's slow. Right. And.
[00:44:29] Generally speaking,
[00:44:32] frameworks that are close to the DOM, they get rid of a VDOM, they can operate without actually messing with other DOM nodes. So like you can bring in outside stuff and have it like not mess up because you're not trying to diff it all. But generally speaking, still, if it's within its frame of things it thinks it controls, things can go wrong. Generally, you want the framework to know, like if you've ever implemented drag and drop in a
[00:44:55] So declarative framework, you'll know this. It's really quite awkward. Like, because in the jQuery days, you just like pick up the element or whatever, and you just drop it. And then you'd be like, okay, that's a new location. I'm good. But if you've done drag and drop in a declarative framework, you actually have to take it, drop it, put it back in the place, and then tell the framework to move it.
[00:45:12] which seems kind of crazy to people,  but the framework needs to know  because otherwise the framework would have to actually...
[00:45:18] be reading from the Dom.  And that is like a big performance
[00:45:22] no-no, right?  The secret to Solid's performance largely  is that it's not even really a
[00:45:28] Oh, yeah.
[00:45:29] aware that it's side effects of the DOM. It's just like, oh yeah, crit effect.
[00:45:34] And React's kind of like that, too.  If you actually ignore React DOM--  React doesn't even know how to handle DOM elements.  If you try to pass a DOM element to do it, I'm like,  can you insert this?  React's like, I have no clue what this is.
[00:45:47] Solve's a little different because at least it deals in DOM elements, but all that stuff is kind of side effects. So
[00:45:54] Thank you.
[00:45:55] Excuse me. There is potential.
[00:45:58] Therefore, it's a not-cloth.
[00:46:00] muddle with each other if you do it in a certain way but generally speaking rex island against dom is like a really
[00:46:07] bad idea for performance.
[00:46:09] Thank you.
[00:46:10] So like, yeah, I mean, I don't know many frameworks that actually support that.
[00:46:16] Thank you.
[00:46:19] Thank you.
[00:46:20] Thank you.
[00:46:22] Yeah, I mean, that's a way of doing it. I'm just like, most people when they pick up D&D, they kind of end up being like, oh, can I use that common...
[00:46:32] library, there's like a vanilla JS library that has all the functionality. Can I just wrap this? And the answer is
[00:46:38] I forget what it's called.
[00:46:40] The answer is like, yes, but not really. It sucks. Like all they wouldn't need to do is add one little hook to it. And every declarative framework would just have a billion easier time. But if I've looked at it, every implementation, they have to do some like crazy thing to work around it.
[00:46:56] Yeah, I know. This is one of the challenges with Quik. I'm going to try and work with it. Some of the decisions Quik has made are really bad for performance.
[00:47:05] Not for hydration, but after the...  It's going to be challenging.  I think there's ways to get around it, but it's like...
[00:47:13] Like,
[00:47:14] Like, yeah, this is one of the things, like, it's like, especially like having DOM on the server, for example, that's also really challenging from a performance standpoint. I'm like one of those like,
[00:47:25] almost like maybe too much of a zealot on the performance side. But like this is going to be one of those challenges because as Quik wants better performance, it's going to come kind of head to head with these kind of decisions.
[00:47:39] Anyway.
[00:47:42] Thank you.
[00:47:45] Thank you.
[00:47:46] Thank you.
[00:47:49] All right. So, this chart makes sense to people? Hopefully it makes sense to people. I mean, I actually had some fun this week because there is definitely...
[00:48:01] a group of frameworks coming up together. And I got a chance to kind of sit down with the makers of all of them at the same time this week for the first time. And it was like, awesome to like be like, hey, you're working on this. I'm working on this. And, uh,
[00:48:15] You can kind of see
[00:48:18] And this chart kind of facilitated the conversation because I talked to everybody and I was like,
[00:48:22] You know, and people like, I don't know if it's fair you put it there. I'm like, okay, we'll have a discussion about this after I just want to kind of like, help people in the simplest way this is oversimplifying it as I can talk on the nuance side.
[00:48:37] Right.
[00:48:38] And, yeah, I think –
[00:48:41] I had this, you know, we kind of started the conversation there.  And now we've all kind of gone together and we started talking stuff.  And Steve from Builder was like,
[00:48:50] kind of, you know, we've been all trying to talk about how we can deal with the hydration because our whole idea is,
[00:48:56] we want to do less of it or even none of it in the case of, you know,  Marco six and quick. And, you know, this, this is what I'm talking about.  I've been really, you know, pushing all three.  It's awesome to see the guys on quick on the same page. Like,
[00:49:09] we're talking about kind of a new breed of framework and a new breed and
[00:49:14] Um,
[00:49:15] It's awesome to kind of see this kind of camaraderie.  I don't know if it'll last forever, let's say,  but we're working on the same problems.  This is a hard problem.  And at the end of the day, the framework authors are just...
[00:49:26] engineers trying to solve really hard problems over the course of years. So having, you know, connecting with these guys has been really great. And Steve put this out today. And I thought, this is, you know, this is this is this is a fun one. This is
[00:49:40] I mean,
[00:49:42] This is actually quick, and the React app here is actually Next.js.
[00:49:46] Um,
[00:49:47] Yeah.
[00:49:49] I honestly
[00:49:51] This even seems extreme from my perspective because the first content full paid. But yeah, I more wanted to just put this out here because I wanted to just talk about...
[00:50:02] you know,
[00:50:06] There is something interesting
[00:50:09] going on here. There is a new kind of movement. And I think the players are kind of, you know, starting to come together, starting to understand what's going on better. And I'm, I've been super stoked to kind of see this happen in front of me.
[00:50:22] So, yeah, yeah, it's completely awesome.
[00:50:26] Okay.
[00:50:28] Thank you.
[00:50:29] Thank you.
[00:50:31] Thank you.
[00:50:32] Yeah, and LogRocket has been good too.  Both FSJM and LogRocket have been my two...
[00:50:41] I mean, I shouldn't pick favorites, but...
[00:50:44] I didn't say it.
[00:50:47] So, anyway.
[00:50:52] This is this week in JavaScript, I think.  Let's kind of move on.  I mean, it's been going for 50 minutes.  Yeah.
[00:51:00] Let's kind of change the topic around, and I'm going to make myself a really quick banner here so that I can...
[00:51:06] you know,
[00:51:10] and start talking about next.
[00:51:14] And I realize this is like a terrible segue here because I'm just showing
[00:51:18] quick-- just--
[00:51:20] demolishing next to the benchmark, but that's not why we're here. See, the thing is, um,
[00:51:27] Let's get that off the screen, actually.
[00:51:30] Next.js is...
[00:51:35] Largely the first time
[00:51:38] SSR
[00:51:40] became truly accessible to developers from a JavaScript framework standpoint.  I know there was other things and I can pull up some demos from 2014, 15, you know, some stuff.  You know, I showed it already on stream around Florence's thing, but like next,
[00:51:54] made it a household name. And
[00:51:58] With that kind of legacy and that kind of clout, obviously...
[00:52:02] you know, things just keep on moving forward from that time.  And it's not like next is going to be left in the dust.  Next, truthfully, is working on some of the most innovative stuff in the space.  When you consider the work in React server components, streaming, edge functions,
[00:52:15] Next is on an incredible tangent. But me personally,
[00:52:19] my own journey, I haven't actually had a chance to look at next very much.
[00:52:23] And that's because, as I mentioned before,
[00:52:28] Um,
[00:52:30] Okay.
[00:52:32] I didn't believe in server rendering at the beginning. And it's not surprising. I showed you guys all that Michael Jackson quote where he in 2016, he was like, Oh, no one needs server rendering anymore. There was...
[00:52:42] There--
[00:52:46] I was getting really good performance out of Solid in the client. I was winning every benchmark that I went in and people, you know, would come up with their server rendered frameworks and like put them in and Solid was just like smaller and faster than them all. And just like, what is the point?
[00:53:01] Um,
[00:53:02] and
[00:53:04] Yeah, it went on.  And the thing that I learned from that was like with good architecture for data fetching, like nested routing and parallelized fetching, you know, I've been doing that, you know, most of five years here with Solid.
[00:53:18] Like maybe you didn't need it.
[00:53:20] Even for first paint, even for, you know,
[00:53:24] you know, initial page load. Like it was just, it was actually, you know,
[00:53:30] putting up pretty good numbers. Obviously,
[00:53:33] As you can see from here, those numbers are not amazing.  Like 3.4 for large Contentful Paint on a slower device,
[00:53:40] I mean, don't-- sorry, don't look at it.  I'm sorry-- is much--
[00:53:43] is half a second worse than, than this, this Marco score, for example, or yeah. And this,  this is even the,
[00:53:51] best score we can see here. This is a stupidly large page. But like what I'm getting at is not everyone has a fast network.
[00:53:59] And
[00:54:00] That does make a huge difference on performance.  And I kind of came to realize that much later and that SSR was actually quite beneficial.  But by that point...
[00:54:14] It was maybe 2018.  And I have to admit...
[00:54:20] Thank you.
[00:54:21] I was already like...
[00:54:23] using suspense on the server.
[00:54:25] or not suspense, but I was already into suspense and stuff like that. So I started like, when I started working on stuff with Solid, I was like, okay, we want suspense on the server, you know, and within a year or so, you know, I saw Marco and I was like, we want streaming. And I kind of went fully down nested routing, suspense,
[00:54:41] on the server and streaming.
[00:54:43] And we got the first version out, I think, in...
[00:54:46] early 2020-ish. And I think that's what I'm doing.
[00:54:53] I've been kind of been there and
[00:54:56] what I was looking at, I looked at things like SvelteKit, I looked at things like Remix, you know, as they came out. Like, there were things that were doing a lot of the same stuff I was doing. And that's where my interest was.
[00:55:07] If people think that I've been like ragging on stuff, you know, you know, there's only a 50 on this benchmark, whatever. I have an incredible respect for those projects. I think the technology in them is great. I want to show people the difference between, you know, different hydration techniques and stuff. But I think like.
[00:55:21] you know,
[00:55:22] you know, picking up Remix to build a React app is a very good choice. And SvelteKit is amazing. And, you know, these are projects that are, like,
[00:55:33] pushing the envelope of single page apps and whatnot.
[00:55:35] So I never got back around to Next because it just wasn't
[00:55:40] I like it just wasn't where I was at. I, you know, I, I'd spent those first couple of years going, I don't get it. Like, why would anyone bother using next when, you know, client sides way faster. And then by the time I got there next wasn't like.
[00:55:53] And it's not its fault.  They weren't using the nested routing or suspense on the server,  streaming, or any of that stuff.
[00:56:00] And
[00:56:02] I've just never had the chance.
[00:56:04] So today is that chance.  Let's look at Next for real.  And part of that is gonna be looking at Classic Next,  because New Next,
[00:56:16] I was reading the docs. I was trying to figure it out. And
[00:56:19] I don't think it's quite there yet, which is fine. And maybe, you know, if I had someone
[00:56:24] Thank you.
[00:56:25] Brilliant.
[00:56:26] head next, who's super familiar, you know, in the chat, who could help me, I mean,
[00:56:31] cough, still cough, but like, no, I mean, I'm not gonna go there.
[00:56:36] today. I just, I think for me in the future, when next gets there, we'll, we'll, we'll, we'll, we'll do another stream and we'll see what that's like. But right now I just want to, I want to feel and learn what next is about, why it grows to become the next.
[00:56:52] meta framework. And, um,
[00:56:55] you know, even if
[00:56:57] some of those things might be a little different than what I'm accustomed to. I think it's really interesting to kind of understand how these things come to be. Because every time I look and do stuff in a framework, everyone's like, oh, you do this feature in Excess. And I'm like,
[00:57:09] I didn't even know that was a thing.
[00:57:11] And that's because, because like, you know,
[00:57:15] Next has sort of pioneered this space more from like a meta framework standpoint, like what they should, like the features you'd find if you want to expand the scope.  Like I'm a core framework author, so I'm very mechanical.  I'm like, oh, streaming and all this stuff.  Suspense, right?  Right.
[00:57:34] That's not the thing the end developer walks away with. I may be like, "Oh, you know, blah, blah, blah, cutting edge technique." But the end developer at the end of the day just wants to make their app.
[00:57:45] And, you know,
[00:57:46] And that's why I think it's important to just give myself a little bit of perspective here and look at next.
[00:57:55] And so today we'll be
[00:57:57] It's not the first time I'm going to install Next.  I installed Next once.  Back in November--
[00:58:04] 2021
[00:58:06] Next 12 came out and they made...
[00:58:09] a streaming RSC demo.  And I was like, oh my god, they have edge workers and streaming
[00:58:15] for Vercel.
[00:58:16] So I took down a demo immediately and they're like, okay, you need to use next. So I literally went like install next or whatever, like, and then I just put a solid app in it and then had solid streaming from their middleware function. And so
[00:58:31] Did it immediately. I'd never touched Next, never touched Purcell before, because similarly, I just...
[00:58:37] wasn't in my scope. I've been kind of hot on Cloudflare from when like 2019 we wanted to use it for image processing and my old work. And I've been, you know, it's been like three years now that I've always been about Cloudflare and the worker side of things. And then like,
[00:58:52] Over time, I kind of got a bit more acquainted with Netlify, but Versailles was something I never touched.  So I got to give them credit there.
[00:58:59] Yeah.
[00:59:00] I'd never touched it.  And within like four hours,  I'd basically managed to sneak in a full streaming solo demo on Vercell Edge.  So they make stuff that's easy to use.  So I am...
[00:59:13] I'm reasonably confident we can do something good here because it's clear that Vercel and Next really think about their user and capabilities there enough that I could kind of hack around it and get a solid demo working.
[00:59:30] Okay.
[00:59:32] So...
[00:59:34] I guess the first question we got to ask ourselves is what's the best way to get started with next?  I started reading through the docs.
[00:59:41] And I got some ideas for the Hacker News demo, but I was like, do I use the CLI or do I just go into Vercel and just make a new next project? That might be actually the easiest one, right?
[00:59:52] Okay.
[00:59:56] Yeah, I mean, I think, I mean, they didn't call it metaphor.
[01:00:00] frameworks originally, I guess, but next and then when Blitz
[01:00:03] built on top of Next and whatnot. Like that's when the term meta framework sort of came into thing. Like Next is basically the start of that.
[01:00:12] But yeah, we'll...
[01:00:14] I've got here, I've got navigating between pages.  Okay, about next, creating your...
[01:00:19] Create your first app.  That sounds like a good thing.
[01:00:24] Hmm. OK, I know about things.
[01:00:29] I don't even know anything about this.  Do I CLI or do I just go into Vercel?
[01:00:37] Because I know Vercel has--
[01:00:39] templates.
[01:00:45] I mean, I might...
[01:00:48] benchmark. Um,
[01:00:51] Yeah.
[01:00:52] I'm just trying to think here.
[01:00:56] The other thing I can, like, this seems like something probably really easy for me to do, right?  Because I can just kind of go...
[01:01:02] Not import, I want to--
[01:01:04] clone a template, right?
[01:01:06] Is this a reasonable way to start with Next.js?
[01:01:11] Oh, create next app too.
[01:01:13] Everyone's saying CLI in the chat.  Is that...
[01:01:17] Is that the thing?
[01:01:19] .
[01:01:21] Thank you.
[01:01:22] Only reason I wanted to come in here might have been because like,
[01:01:25] .
[01:01:26] What's this? What's this thing over here?
[01:01:31] But yeah, yeah, okay.  If you guys are all gonna just say CLI,  I guess we'll do CLI, okay.
[01:01:37] So
[01:01:39] What...
[01:01:41] What is Create Next App, by the way, just out of curiosity? Is it like Create React App? I'm just going to open a new window here.
[01:01:49] Okay.
[01:01:51] Thank you.
[01:01:57] Wait, no. Theo has something.
[01:02:02] Okay.
[01:02:06] Thank you.
[01:02:08] Thank you.
[01:02:11] What is this?
[01:02:17] -
[01:02:19] Oh, you can't like paste it?
[01:02:25] Um...
[01:02:26] I could open Discord very briefly if you...
[01:02:30] Oh, the...
[01:02:32] And I can open it off screen and I can very briefly...
[01:02:35] You could send it to me.
[01:02:37] If.
[01:02:39] Not on this screen.
[01:02:40] All right.
[01:02:42] Thank you.
[01:02:44] If you'd like, Theo, you can send me something
[01:02:47] Sure.
[01:02:49] I'm gathering that's what you're talking about.
[01:02:51] All right.
[01:02:56] Yes.
[01:03:05] Okay, what do I do with this link?
[01:03:08] OK, I'm going to copy it.
[01:03:14] Thank you.
[01:03:17] Thank you.
[01:03:22] Here we go. We recommend using CreateNextApp.
[01:03:26] Right.
[01:03:30] So I can copy it. Nice. All right.
[01:03:34] Oh, there's a Y?
[01:03:36] Yeah.
[01:03:37] Okay.
[01:03:39] OK, well, I'm just going to assume that it's good advice.
[01:03:43] Thank you.
[01:03:43] Okay.
[01:03:47] All right.
[01:03:52] It contains malware. Thanks, you guys are awesome. Let's proceed.
[01:03:58] I'm going to...
[01:04:00] quit Discord for now, so back to chat. All right.
[01:04:04] What do I want to call it? Next Hacker News. Well, I build and deploys to herself very easily. I'm gathering it well.
[01:04:16] Thank you.
[01:04:18] Thank you.
[01:04:19] All right.
[01:04:21] Thank you.
[01:04:23] And to help us for our port, I have the Remix app.  So I know most people, a lot of people, Remix is newer,  so they port their Next app to Remix.  We'll be porting a Remix app to Next.
[01:04:36] See how that goes.
[01:04:37] Yeah.
[01:04:42] Thank you.
[01:04:43] All right. Yeah.
[01:04:47] I forgot what it was like to install packages for a React-based thing.
[01:04:58] It's also good that I have yarn installed.
[01:05:02] I think I installed it today.
[01:05:03] to debug some stuff for--
[01:05:07] One is working on quick. Okay.
[01:05:10] So while this is
[01:05:12] going through its many CLI pieces.
[01:05:16] Okay, perfect. It's done. Okay. So starts development, runs development, blah, blah, blah, blah, typing CD next. Okay, perfect. Okay. What I am actually going to do is I'm going to open a new window.
[01:05:26] And we're going to open it there.
[01:05:28] So development.
[01:05:31] examples.
[01:05:33] Next, Hacker News.
[01:05:35] the pop-it-nice.
[01:05:37] Then we can get--
[01:05:38] put solid away.
[01:05:41] Okay, cool. Is there more here or is this just the thing?
[01:05:46] Very filled by Theo, Mark.
[01:05:50] Very simple, very helpful.
[01:05:52] Thank you.
[01:05:54] All right, all right, and we can get out of here.
[01:05:58] And we can get going.
[01:06:06] All right.
[01:06:07] Thank you.
[01:06:09] Oh.
[01:06:11] The other section is important.
[01:06:15] Oh, okay. I mean, it was info.tips, right? Like...
[01:06:20] Thank you.
[01:06:23] Okay, let's get there when we get there. Okay, so YarnDev.
[01:06:34] Cool.
[01:06:35] Thank you.
[01:06:36] So what? Yeah, I mean, it's funny for most of you, you're probably be like, oh, yeah, this is just whatever. It's just next. I'm just like, I've never seen this before.
[01:06:46] My only next project literally was not even a next project.
[01:06:51] All right.
[01:06:54] Start by R&Pages index, deploy examples, okay.
[01:06:59] And this will link me to actual next stuff.  Okay.  It makes sense.
[01:07:02] Okay, cool.
[01:07:04] So what do we got? Let's blow this up a bit.
[01:07:10] So we have a pages directory with API in it, nice.
[01:07:15] We probably won't need that for our example today because we're just making hacker news.  We have an underscore app, which I'm gathering.
[01:07:23] is something that doesn't get reflected because it's an underscore.  It seems like others have copied their conventions and then
[01:07:31] What's more than that? This is like the entry point and next for some reason knows it's the entry point.
[01:07:39] Once I don't notice, thank you.
[01:07:47] Thank you.
[01:07:51] Okay, so.
[01:07:52] I guess _apptsx is special.
[01:07:56] And we have favicon, SVG, styles, global CSS.
[01:08:00] Home module CSS, yeah, which I won't care about.  Okay, so should I?
[01:08:04] I can probably just start gutting stuff then,
[01:08:07] And we should be able to get going pretty quick here.
[01:08:12] Thank you.
[01:08:14] All right.
[01:08:16] So...
[01:08:17] I think I'll just kind of copy paste the remix CSS styles in here and get rid of this. What's home.module? Is this something special?
[01:08:27] He said, it's probably imported somewhere.  Yes, it is.
[01:08:30] Okay.
[01:08:31] Makes sense.
[01:08:36] Yeah, thank you.  I knew the chat would be helpful here because--  I mean, this is probably less useful content for you all  because you've seen this before.
[01:08:45] Hopefully this part of this will be the quickest. So,
[01:08:49] essentially
[01:08:51] We have a...
[01:08:53] Remix app.
[01:08:55] Thank you.
[01:08:56] It has a global CSS.
[01:08:58] Thank you.
[01:09:00] If I copy the global CSS across,
[01:09:03] I'm just going to, we're just going to go at it right away.
[01:09:06] I'm going to format this.
[01:09:09] Um...
[01:09:10] And I think for this one,
[01:09:15] Next is going to be black, I think.
[01:09:18] I think next color should be black. What do you guys think?
[01:09:22] No, that's not the right one.
[01:09:23] This is the right one.
[01:09:27] Thank you.
[01:09:28] Thank you.
[01:09:33] I'm going to make next black.
[01:09:40] I,
[01:09:41] Oh.
[01:09:43] Yeah, watching me figure it out will be fun. I mean, I think it's pretty intuitive. And I think what might be lucky for me is that probably everyone has copied this. Now, I'm going to say,
[01:09:54] There is some interesting stuff.  Okay, so this is top of it.  I don't need a source folder.  So I'm...
[01:09:59] I'm going to make like a utilities folder.  I'm going to actually, I'm going to just copy it over here.  I'm going to make my API folder, but it's not like it's not next API route.  It's actually just, um,
[01:10:09] I hope you have what it is.
[01:10:11] It's just a--
[01:10:13] It's just the file that has all the stuff.
[01:10:16] So I'm hoping that I can just
[01:10:19] Bring it over here.
[01:10:21] Paste it.
[01:10:22] Yeah.
[01:10:24] And then we'll
[01:10:25] We'll kind of use this.
[01:10:28] Oh, interesting. I forgot that I used this version of it.
[01:10:32] Oh, right.
[01:10:33] This is one thing where I actually won't--  I shouldn't actually copy Remix for this one, unfortunately,  because they do some weird thing where they pass fetch in
[01:10:46] I think, is that what I had to do?
[01:10:51] Whatever, this is probably fine.
[01:10:54] Let's copy remix and go as far as we can.
[01:10:59] Okay, so the one thing I couldn't do nicely with Remix was actually...
[01:11:08] the route...
[01:11:09] page. So this
[01:11:12] is
[01:11:15] Let's do this piecewise so we don't make terrible mistakes.  But what I'm going to do...
[01:11:21] is
[01:11:22] I'm gonna copy...
[01:11:25] This...
[01:11:27] Thank you.
[01:11:28] I'm gathering next is going to have a link thing similar to...
[01:11:34] to stuff. So what I want to do actually is I want to make a
[01:11:38] I'm going to delete this API route.  I mean, I'm not going to need this.  And I'm going to make a new file that is 23stories.it.
[01:11:50] PSX.
[01:11:53] It's going to export the
[01:11:55] Function that is going to be on the call stories.
[01:12:00] and
[01:12:01] This is all going to be different.
[01:12:03] Um...
[01:12:05] So we're just going to
[01:12:07] initialize like const page equals one const type equals top and
[01:12:18] I'm missing one.
[01:12:21] Um...
[01:12:24] I'm going to go to the next one.
[01:12:27] const stories equals empty.
[01:12:31] Thank you.
[01:12:31] - -
[01:12:32] Okay, yeah, I'm actually I think I will need the document, won't I?
[01:12:38] OK, let's see what else we need.
[01:12:43] Thank you.
[01:12:44] Like how do I make a base layout that's used by all of them?  Is that what I do in app?
[01:12:57] Yeah, let me see here. And index, do we have links? We don't have links in here.
[01:13:03] Okay, we'll get there.  Let's not worry too much about this.
[01:13:09] Okay.
[01:13:10] Hopefully it doesn't die yet.  So the first thing I want to do is actually make the nav bar before I get ahead of myself.
[01:13:17] Um,
[01:13:18] I'm
[01:13:19] I'm going to make a components folder, and I'm going to copy this, because these should be the same, presumably.
[01:13:26] So this part...
[01:13:29] Not in pages.
[01:13:30] this part should be the same.
[01:13:33] But what I want to do is I want to recreate -- Remix has --
[01:13:38] a entry client or entry server.  No, that's not what I want.  It has a root.
[01:13:44] And in the root,
[01:13:45] I can.
[01:13:47] do this kind of garbage.
[01:13:50] So,
[01:13:51] I don't even care about all this garbage, to be fair.  What I actually just want...
[01:13:56] is...
[01:13:57] this. I just want to stick my nav component. So,
[01:14:02] Does...
[01:14:03] App, is app used by everyone?
[01:14:06] Like,
[01:14:07] Could I just make this a fragment?
[01:14:09] And then...
[01:14:12] Essentially,
[01:14:20] I don't know enough about how this routing works. I click on just nav here.
[01:14:25] Thank you.
[01:14:32] I just want to put a nav bar on every page.
[01:14:36] import
[01:14:40] What am I importing? Nav from dot dot slash.
[01:14:46] Point in slash nav...
[01:14:52] Resolve Remix. Good job.
[01:14:56] Yeah, okay, so we need a link component.
[01:14:59] Thank you.
[01:15:00] We need our link component.
[01:15:03] How do we use routing in this framework?  Navigate between pages.
[01:15:09] You use a link.
[01:15:11] if that makes sense.
[01:15:12] Next link. All right.
[01:15:15] Thank you.
[01:15:20] Oh, it's more like solid.
[01:15:22] Is it? What's the link? Does it take an href? Yeah.
[01:15:26] Thank you.
[01:15:26] you
[01:15:27] All right.
[01:15:29] logical...
[01:15:30] Because guess what? Links have hrefs. Okay.
[01:15:36] Thank you.
[01:15:43] Okay, we have some styling woes happening here, but at least...
[01:15:48] built with Remix. Where are we?
[01:15:54] Built with next.
[01:15:57] And we need a link to
[01:16:00] For next, what's next? Is this next? Maybe this was next.js.arg.
[01:16:07] Thank you.
[01:16:08] Thank you.
[01:16:12] Thank you.
[01:16:14] Thank you.
[01:16:17] Interesting.  I wonder why the spacing is different.  This is the first time I've built this.
[01:16:22] where the spacing is actually different.  But I wonder if it's
[01:16:28] That is interesting.
[01:16:31] Thank you.
[01:16:33] Brian's in for a nasty surprise.
[01:16:37] Thank you.
[01:16:38] What?
[01:16:39] What? What? Why would? Okay.
[01:16:44] Let me look at the doc so I understand why you would ever do that.
[01:16:49] Thank you.
[01:16:53] Okay, link.
[01:16:56] What?
[01:16:58] Okay, okay.
[01:17:00] No, any explanation?
[01:17:04] Thank you.
[01:17:05] No.
[01:17:06] Okay. Sure. I'll play along.
[01:17:12] Okay. These will look the same. This is going to make things a little bit more fun.
[01:17:23] Thank you.
[01:17:26] Thank you.
[01:17:27] End of line.
[01:17:31] Like a Mac.
[01:17:32] Like a Windows user learning Mac keyboard shortcuts.
[01:17:36] Thank you.
[01:17:37] Just trying to save myself from doing this a billion times.  You know what? Screw it.
[01:17:42] We'll just do this.
[01:17:44] Thank you.
[01:17:49] Thank you.
[01:17:51] Thank you.
[01:17:52] Thank you.
[01:17:55] All right, well, that probably explains my spacing problem. Okay, sweet. Hacker news. Okay, cool. Okay, let's keep going.
[01:18:05] How come the next baby?  Yeah.  It's like you guys all know and you're just like, what will he find?  Okay.  Well, I'm okay with that.  I'm okay with that.
[01:18:18] Let's really rip the bandaid off and delete index.
[01:18:22] Thank you.
[01:18:25] Thank you.
[01:18:28] Okay. So, what do we need?
[01:18:33] I don't know.
[01:18:36] Next link.
[01:18:38] Thank you.
[01:18:45] Thank you.
[01:18:48] Thank you.
[01:18:53] Oh, okay. Well, I mean, I guess that's a good argument for not having... I put the class on the anchor, don't I?
[01:19:02] Is that the secret here? Like I have to go through and find all the link tags and then  put the anchor here and then put the class on the anchor instead of on the link?
[01:19:17] Yeah.
[01:19:18] Right.
[01:19:19] So class page link.
[01:19:23] go here, I think.
[01:19:27] And then this becomes href.
[01:19:30] So there is some refactoring to be done.
[01:19:34] That's fine. This isn't the worst.
[01:19:38] I've refactored this thing a billion different ways.  So let's just do that.
[01:19:46] Yeah.
[01:19:47] I'm getting the hang of this. It's okay.
[01:19:51] Thank you.
[01:19:55] All right, and one story, and story we have to import.
[01:20:02] Thank you.
[01:20:04] Thank you.
[01:20:06] Thank you.
[01:20:08] Mm-hmm.
[01:20:10] Thank you.
[01:20:11] Thank you.
[01:20:12] I'm going to complain about Remix again.
[01:20:17] Thank you.
[01:20:18] This is all good, though.  There's nothing-- there's some weird stuff going on.  But we should bring our types over, too, from our remix project.
[01:20:33] Thank you.
[01:20:35] Our types are--
[01:20:37] Yeah.
[01:20:38] Here, let's just copy that.
[01:20:41] Thank you.
[01:20:43] Thank you.
[01:20:44] Thank you.
[01:20:45] Peace.
[01:20:49] Thank you.
[01:20:51] Bye.
[01:20:52] There we go. All right, then that makes stuff happier.
[01:20:58] Thank you.
[01:20:59] Should make stuff happier.
[01:21:05] Dot, dot, dot. Type.
[01:21:11] Did I put it inside the folder by accident?
[01:21:17] Oh, it's here.
[01:21:20] Whew.
[01:21:22] All right. All good. Okay. So...
[01:21:27] Just a couple more links to fix.  Okay.
[01:21:33] These all become...
[01:21:37] Ahrefs.
[01:21:39] Thank you.
[01:21:40] And
[01:21:45] Thank you.
[01:21:47] Thank you.
[01:21:48] Yeah, I don't think I get a cheap way of doing this.
[01:21:53] Thank you.
[01:21:54] What's the chance this is actually? No, okay.
[01:21:58] Thank you.
[01:22:00] Bye.
[01:22:00] Thank you.
[01:22:01] Thank you.
[01:22:02] Thank you.
[01:22:03] Thank you.
[01:22:05] Thank you.
[01:22:09] Right.
[01:22:11] Okay, I'm just doing stupid stuff. Sorry. I was trying to get too smart.
[01:22:17] I'll just do this the painfully slow way.
[01:22:22] Thank you.
[01:22:25] I can pop that.  Sorry, not the most enthralling part of this.
[01:22:35] If I had known, I probably would have done this ahead of time. I had no clue that they would make me put anchors inside the link tags.
[01:22:44] Oh man, that's good times.
[01:22:47] Bye.
[01:22:47] OK, so I guess the first question is why my route--  did I do this right?
[01:22:54] dot, dot, dot
[01:22:57] match on slash.
[01:23:04] Oh, interesting.
[01:23:06] Dot dot dot doesn't match on slash.
[01:23:09] So this is just like Remix.
[01:23:13] That's weird, though. SvelteKit...
[01:23:15] And solid both have the dot dot dot pattern in the match on slash.
[01:23:20] Can someone confirm this for me? Do you guys know if this is actually true?
[01:23:25] I mean, it looks that way. So maybe, maybe, maybe, maybe this is the thing. Is there, is there any way to like just match overall?
[01:23:39] Otherwise, this is mostly doing what I want it to do.
[01:23:43] The next thing we actually have to do is load some data.  So--
[01:23:47] Maybe I'll just start on
[01:23:50] New so we can see it.  And then
[01:24:01] Yeah, the thing is, I need to match on...
[01:24:05] Anything, including nothing.
[01:24:08] is the thing.  Because without the dot-dot-dot, it'll match on...
[01:24:13] Like this is the behavior that I'd expect for without the triple dots.
[01:24:19] Oh, do they not have the dot dot dot matching pattern? I thought everyone got that from next. Okay. Let's look at file based writing.
[01:24:29] Thank you.
[01:24:30] Dynamic routes?
[01:24:33] Thank you.
[01:24:35] Thank you.
[01:24:37] Thank you.
[01:24:38] Thank you.
[01:24:38] Catch all. Yeah, yeah, this one.
[01:24:41] Thank you.
[01:24:43] Thank you.
[01:24:43] Interesting.  But it won't match on...
[01:24:48] Post.
[01:24:56] I'm basically trying to match on pages, like basically everything, like a catch-all for, okay, everything.
[01:25:10] Okay, double. Interesting. I wonder...
[01:25:14] Thank you.
[01:25:15] Thank you.
[01:25:18] Gathering more specific routes will win.
[01:25:22] But OK, double.
[01:25:25] Oh.
[01:25:26] Okay, good.
[01:25:28] Beautiful. Thanks, Theo.
[01:25:30] Thank you.
[01:25:32] Sorry, the wrong one. This one. Yes. Thanks, Theo.
[01:25:36] Also, thanks, Theo.
[01:25:39] All right.
[01:25:42] Okay, cool. All right. So, then we're like mostly set up here. And then we just need  to load the data. So,
[01:25:50] How hard can that be compared to Remix?
[01:25:56] Thank you.
[01:25:57] This is actually a weird thing. I was looking at the next docs and I was reading them. They kept on like suggesting, oh, you should use get static props. And I'm like, okay, that's not going to fail me or you should client fetch. And there's a get server props, but it's almost like they don't recommend it.
[01:26:09] But the Git server props mechanism is basically the loader mechanism.  I mean, it's less granular.  It's not nested.  But for our simple purposes, it seems like the right thing to do.
[01:26:22] Because essentially...
[01:26:24] Yeah, I mean...
[01:26:26] Let's see what's up with that.  OK, so let's try.  Yeah, how do we-- how do we--  let's learn about Git server props.  I am a little bit familiar because people keep on telling me.  And I'm like, why don't you suspense or stuff?  But like, OK, pre-running and data fetching.
[01:26:43] pre-rendering, suicide rendering.
[01:26:46] I don't want static props, I want...
[01:26:49] I want...
[01:26:51] So...
[01:26:53] Thank you.
[01:26:56] I never...
[01:26:58] I'm in learn basics. Let's go docs. Okay. Get server side props. Server side props. Okay.
[01:27:07] Okay.
[01:27:08] Mm-hmm.
[01:27:08] Thank you.
[01:27:13] It will handle it too. This is like a loader and remix.
[01:27:19] Pfff. Pfff.
[01:27:20] Thank you.
[01:27:21] Thank you.
[01:27:22] Thank you.
[01:27:22] Amen.
[01:27:26] Thank you.
[01:27:28] Thank you.
[01:27:30] Amen.
[01:27:31] Amen.
[01:27:32] Thank you.
[01:27:33] I mean, I could fetch the client side, but I don't...
[01:27:37] We don't want that for initial load.  And since this handles the isomorphic thing, I think it sounds right.  So essentially, I just want to go like this.  You guys can tell me if I'm terribly wrong, but this looks like what I want.
[01:27:53] Right.
[01:27:54] I don't know what context is, but I guess we'll find out.
[01:27:59] types.
[01:28:01] No help?
[01:28:04] No types.
[01:28:07] I guess the docs won't have TypeScript in them. Okay, that's fine. We'll figure it out the way I usually figure things out.
[01:28:16] Okay.
[01:28:18] Bye.
[01:28:19] Thank you.
[01:28:20] Thank you.
[01:28:27] Thank you.
[01:28:28] Thank you.
[01:28:30] Thank you.
[01:28:33] Pfff.
[01:28:33] Thank you.
[01:28:35] beautiful
[01:28:36] Thank you.
[01:28:37] Now if I refresh the page.
[01:28:40] Do I get, okay, here we go.
[01:28:43] A lot of stuff.
[01:28:44] Okay.
[01:28:46] Oh, because we had the request and response objects.  Interesting.
[01:28:52] But there must be an easier approach to this.
[01:28:56] Docs must tell me, right?
[01:28:59] Yeah.
[01:29:00] Bye.
[01:29:01] Thank you.
[01:29:02] Yeah, here we go.
[01:29:08] Do I need node fetch or do they have their own thing?
[01:29:14] Thank you.
[01:29:17] No, but they don't actually tell me what the,  how to get the route params here.
[01:29:26] Okay, it's linked, but I got to read more.
[01:29:31] Thank you.
[01:29:32] Mm-hmm.
[01:29:32] No.
[01:29:33] Here we go. Beautiful. I think I just need params. Okay, cool. So what I want to do in
[01:29:45] is--
[01:29:48] params and possibly query, yeah, params and query, I think. Let's see.
[01:29:57] Let's console log it first and make
[01:30:00] Make sure.
[01:30:05] Thank you.
[01:30:07] Yeah.
[01:30:09] Thank you.
[01:30:10] I'm just gonna...
[01:30:14] Oh, it's because I--
[01:30:15] Well, I guess let's just start with prams.
[01:30:19] Thank you.
[01:30:22] Beautiful, okay.
[01:30:23] object stories and
[01:30:27] Oh, interesting.
[01:30:30] Query also has it in there.
[01:30:33] Okay, well, let's not worry about that too much. Now let's go, let's look to fetch something. Let's do
[01:30:42] Yeah.
[01:30:43] using our Remix example.
[01:30:46] We want...
[01:30:48] to...
[01:30:49] Fetch.
[01:30:50] This so we let's just
[01:30:53] We don't need URL.  We need page and type and stories.  So let's just grab that.
[01:31:02] All right, so this is context.crams, and then
[01:31:12] We're going to import--
[01:31:14] Fetch.
[01:31:17] API from, yeah. And then,
[01:31:22] We need our stories map, which...
[01:31:26] I'll just put in here and get some TypeScript in here.
[01:31:35] I'll just import everything.
[01:31:38] Story types.
[01:31:46] And page is-- yeah, I need to see what the query looks like.  We're just going to make it page one for now  and not worry about that.
[01:31:56] And then...
[01:31:57] Map stories, type is key of map stories, really.
[01:32:05] Not going to worry about that.
[01:32:11] Page type stories.
[01:32:16] Thank you.
[01:32:18] Thank you.
[01:32:18] And
[01:32:20] Page type stories.
[01:32:25] Thank you.
[01:32:25] And
[01:32:29] Thank you.
[01:32:31] Yeah, it's good.
[01:32:35] Stories data.
[01:32:37] Thank you.
[01:32:39] God, I never use React.
[01:32:43] uh,
[01:32:45] Yeah.
[01:32:46] I mean, this is probably the worst thing I could do, but whatever.  OK.
[01:32:51] Mm-hmm.
[01:32:54] So,
[01:32:55] In theory, yeah, we got stuff loading.  Okay, cool.
[01:32:59] Thank you.
[01:33:03] - Yeah, yeah, okay. Yeah, fetch if you have node 18.  The question is, is this gonna blow up  the second I try and deploy it to the Vercel?
[01:33:14] Yeah.
[01:33:15] Thank you.
[01:33:16] - Okay, so data's loading.
[01:33:19] Go to the next page.
[01:33:22] It doesn't load, but now we should be able to inspect and see what we get.
[01:33:26] Oh, interesting.
[01:33:27] Yeah, so this is really convenient.
[01:33:30] Thank you.
[01:33:31] It's literally query.page.
[01:33:34] So, like.
[01:33:37] Actually, I guess there is some logic there.
[01:33:45] query.page or one, essentially.
[01:33:50] Thank you.
[01:33:51] Thank you.
[01:33:52] query.page.1 and then we should
[01:34:00] Cast it.
[01:34:03] Thank you.
[01:34:09] And if I did that all right,
[01:34:13] We should have loading stories.  Beautiful.  OK.  So far, so good.  OK.  So this is next.
[01:34:24] I mean,
[01:34:25] OK, sorry.  I heard some people talking about how Remix completely  changed the game or something on--
[01:34:32] little data loaders, but kind of the same thing.
[01:34:37] I mean, the nested stuff is really nice, but
[01:34:40] Thank you.
[01:34:41] That wasn't too bad. Maybe there's another secret thing. Maybe I have to wrap this in an anchor tag or something.
[01:34:48] But so far, so good.  Okay, so that's their first page.  That's the most important page, actually.
[01:34:53] Okay, so let's continue.
[01:34:57] It actually only gets easier from here.  So I'm pretty happy with this.  What time are we at?
[01:35:02] OK, so it's been like--
[01:35:04] An hour and a half. Yeah. I imagine next 15 minutes we can finish up the rest of this demo. Then it's all going to be fun trying to deploy to Vercel. But this is good. Okay. So let's fill out the rest of this. Navworks, Storyworks, comment needs to use next-link.
[01:35:23] Thank you.
[01:35:24] thing.
[01:35:27] And we're going to do some more of our fun.
[01:35:31] Thank you.
[01:35:32] So,
[01:35:35] Is there any more of these? No.
[01:35:38] Thank you.
[01:35:39] Thank you.
[01:35:40] And then...
[01:35:43] Thank you.
[01:35:47] Thank you.
[01:35:48] Thank you.
[01:35:51] Thank you.
[01:35:54] Thank you.
[01:35:55] All right.
[01:35:56] Thank you.
[01:35:57] Oh, that's not right.  I'm linking the wrong place.
[01:36:01] This whole anchor thing is just so bizarre.
[01:36:07] Um,
[01:36:10] Thank you.
[01:36:11] Thank you.
[01:36:12] It's not like a bad thing. It's just a thing.
[01:36:19] All right, yeah, so this logic is otherwise unchanged, and then we just need to add a couple more pages. We need to add stories.
[01:36:26] And we need to add users.
[01:36:32] And then...
[01:36:35] Now that I know what the pattern is,
[01:36:37] I don't know what the pattern is.  I feel like
[01:36:42] It is closer to Remix than I was thinking.  Like we could probably just kind of like drop in some  of the Remix stuff and just like--
[01:36:50] move this up to there. Yeah, okay. I see a pattern. Let's do users first.
[01:36:58] Thank you.
[01:37:02] Bye.
[01:37:02] Bye.
[01:37:03] Thank you.
[01:37:07] Right.
[01:37:09] So essentially, okay, so I guess I got to do dot dot.
[01:37:15] There's...
[01:37:16] Perfect.
[01:37:18] Don't need any of this stuff from Remix. Don't need any of this stuff from Remix.
[01:37:26] export -- what is it called? Export get server side props.
[01:37:37] Yeah, and if you notice, I'm just ignoring TypeScript.
[01:37:43] leave that for someone better than me to wrestle with.  But I think this is actually just really simple.  I think we just go like, no.  Just go like return context.gramset return
[01:38:02] Props user. I guess there's other stuff in here. So it's kind of like a middleware thing. It's props a little bit extra, but who cares? And then...
[01:38:11] user
[01:38:15] Until I am not a React programmer.
[01:38:18] to
[01:38:24] Thank you.
[01:38:24] Thank you.
[01:38:27] Beautiful.
[01:38:29] And
[01:38:31] Or any. Yeah, you know. Tyscript isn't there to get in your way, right?
[01:38:38] Yeah.
[01:38:39] Except for when it is.
[01:38:42] on a project earlier where TypeScript was required.  It wasn't just a suggestion.
[01:38:48] Definitely taxing me a little bit. There we go. New file. ID. Yeah. So, yeah, I mean,
[01:38:58] Going back and forth between these meta frameworks seems trivial, really. Let's do this one.
[01:39:07] It's like--
[01:39:12] Convention here, convention there.
[01:39:15] Remove a few imports, add a few imports.
[01:39:20] No. Export.
[01:39:25] function, actually, lazy.
[01:39:31] Thank you.
[01:39:32] Thank you.
[01:39:33] Thank you.
[01:39:34] Thank you.
[01:39:37] Thank you.
[01:39:38] Thank you.
[01:39:40] Yeah.
[01:39:40] Thank you.
[01:39:41] Thank you.
[01:39:44] Thank you.
[01:39:45] Thank you.
[01:39:46] Yeah.
[01:39:49] Thank you.
[01:39:50] like not proper react coding but they're gonna hold it against me right
[01:39:57] Thank you.
[01:40:00] Thank you.
[01:40:02] Thank you.
[01:40:06] Yeah.
[01:40:08] Wow, there's a link in here.
[01:40:11] Yeah.
[01:40:14] Okay.
[01:40:18] This is easy peasy. Yeah, this is good. What have we got?
[01:40:24] I'm going to import link from...
[01:40:29] Next link. All right.
[01:40:34] Thank you.
[01:40:37] Did you read? Oh, yeah. No, no, no. We spent a stream. I think it was a Remix stream. We're sitting here like, why does this not work? And we felt like 20 minutes trying to fix this type. I'm so past it. Okay.  Okay, so then we go here. We click on a user. We see the user page.
[01:40:54] Not much to it.  We click on a story.  We get the stories.
[01:40:58] Oh, yeah, I saw this, actually.  This is something that I only have in the React demos.  Let's fix this right now.  I don't know why there's this extra zero.  I think it's...
[01:41:08] um it's always on the last comment
[01:41:14] Um...
[01:41:18] Thank you.
[01:41:19] And it's only...
[01:41:25] Yeah, let's see where that is.  It's such a weird...
[01:41:29] thing
[01:41:32] Where is that zero coming from? It's at the end of it.
[01:41:36] div text by text zero.
[01:41:40] Thank you.
[01:41:42] Oh.
[01:41:44] It's... Yeah, yeah, yeah, yeah.
[01:41:47] the
[01:41:48] It's because of this.
[01:41:53] Thank you.
[01:41:56] And undefined.
[01:42:01] I'll do it.
[01:42:03] Lovely.
[01:42:04] Okay, next Hacker News.
[01:42:07] Thank you.
[01:42:07] Thank you.
[01:42:08] I'm kind of like scared about what else is going on here, but I think we're good.
[01:42:14] Thank you.
[01:42:16] What do I need to do to deploy this to Vercel?  I guess is the next question, eh?
[01:42:24] I can't tell if you're being serious or not.
[01:42:28] No, I know you're not. Okay. Well, I mean, we have a working next hacker news. So now,
[01:42:38] That was pretty easy.  I'll commit to repo later, but let's...
[01:42:43] Let's see what Vercel says about--
[01:42:46] Unless this is why I wasn't supposed to shut down info.tips.
[01:42:52] No, that wasn't right.
[01:42:54] I'm going to have to open up Discord again just to get the link again.
[01:42:58] -
[01:43:00] Yeah.
[01:43:01] Thank you.
[01:43:02] Thank you.
[01:43:03] Thank you.
[01:43:04] Thank you.
[01:43:05] Thank you.
[01:43:06] Yeah.
[01:43:09] Yeah.
[01:43:10] Thank you.
[01:43:13] And knit.
[01:43:16] Man, okay.
[01:43:20] Init.tips. Okay, there we go.
[01:43:26] Thank you.
[01:43:27] Was there something more that I missed?
[01:43:30] Thank you.
[01:43:35] -
[01:43:36] Thank you.
[01:43:37] Thank you.
[01:43:39] Thank you.
[01:43:41] I'll do that.
[01:43:43] Thank you.
[01:43:47] Thank you.
[01:43:48] OK, so no deploy tips. OK.
[01:43:50] That's, that's, it's all good. It's all good. Init.tips.
[01:43:54] Okay. That's all good. Fun times. Okay. What do I want to do? I want to --
[01:44:02] um look at i'm going to kill discord that's what i want to do
[01:44:09] Right.
[01:44:10] Yeah.
[01:44:16] Okay, yeah, of course, right. I'm just being dumb. It's just like deploying to Vercel with anything.
[01:44:22] Okay, there you go.  I'm overthinking.  I'm thinking, oh, this is the next project.  But they're going to handle everything in the pipeline, right?
[01:44:32] Um...
[01:44:36] Thank you.
[01:44:37] Yes.
[01:44:40] Sounds good.
[01:44:42] No existing project.
[01:44:44] Xhacker News, yeah.
[01:44:47] code is located in
[01:44:49] route, I guess.
[01:44:51] Thank you.
[01:44:53] Thank you.
[01:44:55] Thank you.
[01:44:57] Thank you.
[01:44:59] Next build sounds good. Yeah, these sound good.
[01:45:02] No, do I want to override the settings? No. Okay.
[01:45:08] Thank you.
[01:45:09] yeah yeah yeah it's funny i've used this like a bunch of times with solid and i'm just like not  like i'm just like in like a
[01:45:16] Yeah, it's fine. I built the Vercel Solid Start integration, right?
[01:45:25] I've used these commands a bunch of times. Okay.
[01:45:31] Thank you.
[01:45:34] too.
[01:45:40] Okay.
[01:45:42] Okay.
[01:45:43] It says to check my logs, but I can also just run this locally and see why it's angry.
[01:45:52] Is a TypeScript actually gonna come and haunt me here?
[01:45:59] This is what I'm talking about.
[01:46:01] Yeah.
[01:46:02] Yeah.
[01:46:04] Yeah, I imagine I could.
[01:46:08] It's so funny, this works in some things, but it doesn't seem to work on this one.
[01:46:13] Type.
[01:46:14] as
[01:46:16] Key of map story.
[01:46:22] Thank you.
[01:46:23] Thank you.
[01:46:24] Thank you.
[01:46:26] Ugh.
[01:46:27] In nextConvig, OK, let's just tell it to be quiet.  It's easier.
[01:46:35] Ooh, React strict mode.  Does it only do that in dev, right?  Like, so it doesn't work on everything twice in production?
[01:46:43] Ignore build errors true.  OK, that sounds good.  Oh, it's TypeScript.
[01:46:49] Only TypeScript fill errors.
[01:46:56] Thank you.
[01:46:56] Yeah.
[01:46:57] Good.
[01:47:04] Thank you.
[01:47:05] Thank you.
[01:47:06] Thank you.
[01:47:11] See, there you go. No one else complained about this. Here's Next protecting us.
[01:47:20] That's awesome.
[01:47:23] So in our nav, we have...
[01:47:27] something considered legacy here.
[01:47:30] Thank you.
[01:47:33] Using target blank without no rel security for is.  Okay, so where is that?
[01:47:39] I thought it was here.
[01:47:45] Thank you.
[01:47:46] where else do we have target blank in our project all right good
[01:47:52] Yeah.
[01:47:53] Huh.
[01:47:55] There we go.
[01:47:58] Thank you.
[01:48:00] Yeah.
[01:48:01] There we go. Making a better website. Thank you, next.
[01:48:07] Thank you.
[01:48:08] Thank you.
[01:48:09] Thank you.
[01:48:13] Thank you.
[01:48:14] Thank you.
[01:48:15] Thank you.
[01:48:17] Oh, 76.7 kilobytes.
[01:48:20] It's only 15 kilobytes larger than Remax.  That's not as big as I thought.  I assumed we'd be in something bigger.  So yeah, that's great.  OK, let's do it.
[01:48:32] Thank you.
[01:48:33] Thank you everyone who's here. Very helpful, obviously.
[01:48:43] Thank you.
[01:48:44] Thank you.
[01:48:44] Thank you.
[01:48:46] Thank you.
[01:48:47] Thank you.
[01:48:52] you know, like,
[01:48:52] Thank you.
[01:48:54] Bye-bye.
[01:48:56] Thank you.
[01:48:56] *crash*
[01:49:03] Thank you.
[01:49:04] Thank you.
[01:49:07] Sorry, Theo, what did you do three times this week?
[01:49:12] Thank you.
[01:49:14] All right, preview.
[01:49:19] Thank you.
[01:49:21] Yeah.
[01:49:24] Is it for cell dash dash prod or something if I wanted to actually do it for real?  Or...
[01:49:29] preview fine
[01:49:32] Oh, yeah, it is dash dash fraud.
[01:49:34] Okay.
[01:49:38] Thank you.
[01:49:39] Let's just move it around.  It works, works, works, works, works, works, new, new.
[01:49:45] So yeah, I mean--
[01:49:47] Looks looks nice.
[01:49:49] This is a hacker news page.  Okay, let's do a prod.
[01:49:52] Not that I think it actually makes any difference here, but, you know, let's just...
[01:49:57] a prod and take a look at our
[01:50:02] newest
[01:50:03] Hacker News demo to join the family.
[01:50:06] That was painless. I mean, weird, but painless.
[01:50:13] So,
[01:50:15] Yeah.
[01:50:16] Thank you.
[01:50:17] Honestly, though, if I didn't have you all in chat and I was trying to figure out what was going on with the anchors versus the links, I would have never figured that out.
[01:50:26] I would like, I guess I would look to the docs and be like, okay, there's anchors here, but I would like,
[01:50:30] That would have never crossed my mind.
[01:50:33] as a pattern.
[01:50:39] Yeah, yeah. And to be fair, like...
[01:50:43] Yeah, I mean, they're all kind of the same. Like, here's another one, right?
[01:50:50] Like...
[01:50:52] In a sense,
[01:50:54] Yeah, I mean, this is solid.  It's similar to Remix as well.
[01:50:59] Yeah, I mean, yeah, they're all kind of...
[01:51:05] Okay, cool.
[01:51:07] Hacker News, next Hacker News Olive. I got my own awesome URL here. Okay. So what we're going to do,
[01:51:17] is we're going to open it in an incognito window and just kind of
[01:51:22] Take a look around.
[01:51:25] I did not stack the house this time.
[01:51:29] Oh, damn it.
[01:51:31] Thank you.
[01:51:33] Sorry.
[01:51:35] But I guess that means Remix has it too.  There's one transition animation that seems to still be here.
[01:51:42] A mix.
[01:51:43] Okay.
[01:51:45] Thank you.
[01:51:46] I guess this is on Cloudflare.  You see that animation?
[01:51:49] Yeah, it's fine.  So we got -- next, we got Remix.
[01:51:58] We have others, but I'm not going to worry about those too much.  I just want to kind of understand the difference between Next and Remix, because I mean, these  are both React frameworks.
[01:52:09] And I feel like we can kind of look at it  and get a feel for what the difference is  between these React frameworks, okay.
[01:52:18] So,
[01:52:19] Okay, so yeah, initial page load, 75.5.
[01:52:23] 101. Yeah, yeah. Okay. So next is doing a bunch of other interesting scripts like
[01:52:30] middleware manifests.  And I mean, most of these are inconsequential,
[01:52:36] little things, but
[01:52:38] Looks like the main chunk is 46.9.  Like they split like a vendor bundle in your trunk.  So it's like 46.9 and 29.9.  Remix.  Remix.
[01:52:49] kind of tries to keep it most well.
[01:52:52] Yeah, mostly in one chunk.  I guess this is the top level and this is the code split route, the 16.5.
[01:52:58] And in this one,
[01:53:02] it's probably the same sort of split, right?  Where we have...
[01:53:06] Thank you.
[01:53:07] the page and the framework.  So the framework or the entry is 46.9, interesting.
[01:53:16] That makes sense.  41.5.
[01:53:20] 41.9. So,
[01:53:23] Interesting, but why is the chunk so much different?
[01:53:29] The split's got to be different, but it's interesting how much...
[01:53:32] different between
[01:53:35] I guess there must be more stuff coming in specifically on the page.  I mean, we can confirm that by navigating to the next...
[01:53:42] page.
[01:53:43] actually, and see what extra loads in
[01:53:46] Because
[01:53:47] This didn't add very much.
[01:53:50] a 9.3 and then when I go here
[01:53:55] We see the data coming in, right?  What's the fetch, but...
[01:53:59] Hmm.
[01:54:01] Thank you.
[01:54:02] Interesting. I guess 14 comments and 263 isn't exactly fair comparison. But
[01:54:10] Okay, yeah. So data is in format, 2.8 kilobytes.
[01:54:15] Too much sex.  Yeah, okay.  I mean...
[01:54:18] Interesting.  This next...
[01:54:20] Thank you.
[01:54:21] not do code splitting?  Neither do these.  I guess they...  Oh, maybe these guys all...  Maybe these guys all aggressively preload stuff.
[01:54:33] OK, now the ID chunk is right here.  Maybe it's the route prefetching, I'm not seeing.  The second page is only 1.2 kilobytes.
[01:54:40] in Remix, right, like the ID of the page. And in next,
[01:54:45] I don't,
[01:54:46] See...
[01:54:49] I just don't see where the...
[01:54:53] ID page gets loaded in.
[01:54:57] Hmm.
[01:55:00] Thank you.
[01:55:04] - Yeah, any link gets prefetched.  So I wonder if it got prefetched much earlier  and I didn't realize it.  Yeah, it's right here.
[01:55:11] Yeah, yeah, yeah, that makes sense. It's 945 bytes right here.
[01:55:16] Okay, so, yeah, I guess there's just a lot more...
[01:55:20] Like the components aren't that much different in size.  I guess it's just like the way they shift the vendor bundles and stuff.  Okay.  Let's give it a quick...  Let's give it a quick...
[01:55:31] a couple loads here.  Let's start main page.
[01:55:39] Yeah.
[01:55:40] Thank you.
[01:55:41] Yeah, I mean, I imagine this will be super fast.
[01:55:44] Yeah, 185, first paint, it's pretty good, 228. LCP is going to be the same. And it hydrates. Okay, so this is pretty good. Just get an idea here. Let's just go back to the main page, give it a quick
[01:56:01] One over here.
[01:56:04] Okay.
[01:56:05] Should be the same kind of thing.  Oh, do you know what it is?
[01:56:09] Yeah, I wish I had this on the same infrastructure.
[01:56:13] I'm convinced Cloudflare workers, this demo is what's killing us a little bit.  I think the API is in Vercel, and I think that the edge functions have this delay here, which...
[01:56:27] doesn't
[01:56:28] Which does-- yeah, this is very interesting.  I think this is a demo that is hurt by not being on Netlify.
[01:56:38] I need to re-examine this or Vercel for that matter, because they both use AWS under the hood.  Because we're getting, yeah, I think this is actually interesting that the workers have, because we're waiting for the data fetching and the data is farther away.
[01:56:54] Yeah.
[01:56:54] So,
[01:56:56] And without streaming, there's no recourse.  OK, well, let's do something that will blow that out of the water,  because we don't actually care about it.  Let's look at our timeline for our actual mean benchmark.
[01:57:14] Let's just take a little look at the profile. When we do something like this meme, it's  going to be less felt, I imagine.
[01:57:30] Thank you.
[01:57:31] Thank you.
[01:57:35] Okay. Let's do this.
[01:57:40] Just kind of get an idea of the characteristics.  I imagine it's going to be pretty similar.
[01:57:45] Um...
[01:57:47] Yeah, first paint.
[01:57:49] 13.
[01:57:52] Yeah.
[01:57:53] Hydration costs here aren't that bad actually. I'm kind of actually impressed.
[01:57:59] Hydration tasks with 52 milliseconds.
[01:58:02] But all in all, really good time frame here.  Let's add that to the end here.
[01:58:08] Thank you.
[01:58:09] Thank you.
[01:58:14] Thank you.
[01:58:17] Thank you.
[01:58:19] Thank you.
[01:58:21] Thank you.
[01:58:22] Yeah.
[01:58:24] Yeah, I mean, it's nominal. Yeah. This is
[01:58:28] Pretty comparable stuff, really.
[01:58:30] Um,
[01:58:33] 1250.
[01:58:36] Thank you.
[01:58:37] 13.
[01:58:38] Thank you.
[01:58:40] Thank you.
[01:58:41] Thank you.
[01:58:41] 13
[01:58:44] 13:30?
[01:58:47] I don't know why the first paint took longer here,  but it's basically in the same range.  Yeah, well, okay, you guys want to see Lighthouse scores?  Okay, we can see Lighthouse scores.  I was just warming it up, kind of understanding the timeline.  None of them...
[01:59:01] If we look at the--
[01:59:03] What I want to do is I want to briefly look here.
[01:59:07] Neither of them seem to be, for an example like this, too...
[01:59:10] Thank you.
[01:59:11] bottlenecked on resource loading.  Obviously, they don't stream, so they wait for the page.  But 9:38, I mean, it's a second for this example.  So yeah, good.  OK, so let's just dump these into our lighthouse.
[01:59:28] We'll do Remix first and then do Next Last as the big reveal.
[01:59:34] Why not?
[01:59:36] Thank you.
[01:59:37] Thank you.
[01:59:38] Let's give you a mix first.
[01:59:42] I wonder if it's any better than last time. It was about 50, right? For this terrible, terrible mean test. We should also probably test without the mean test.
[01:59:52] 55, see? Every day is a little different.
[01:59:56] Nice.
[01:59:57] And it's loading all the comments? Yeah, okay.
[01:59:59] Thank you.
[02:00:00] Thank you.
[02:00:01] *clap*
[02:00:03] And let's do--
[02:00:07] Next.
[02:00:09] Yeah.
[02:00:10] Yeah.
[02:00:11] About 50.
[02:00:17] I mean, this is a dead...  Like, this, other than...
[02:00:23] Like, this app is very dead simple, other than the fact  that this page is just brutal.
[02:00:34] It's in the same range.
[02:00:39] Um,
[02:00:42] If we're looking here,
[02:00:44] We're just--
[02:00:45] It's in the same range.
[02:00:52] Thank you.
[02:00:54] I don't know why there's a gap here between first contentful and largest contentful,  given that they're completely server rendered.  And we noticed a little bit of that gap when we did the timelines.  But, you know, it is actually, like, we run this enough times,  we're going to get around the same score, see about a...
[02:01:11] Just over a second blocking 15 in.
[02:01:14] 5.45, yeah.  I mean, the Remix Summaries look a little bit better,  but let's just run everything twice, you know,  just to give it a go.  But this is not that different.
[02:01:24] Right?
[02:01:31] I mean, obviously this is a...
[02:01:35] overloading a simplistic demo is the best way to put it, right?
[02:01:39] Next time I do remix, I get...
[02:01:42] Or next I get 47.  So again, the same range.  And when I do remix,
[02:01:47] I got 46.  Let's do it a third time.
[02:01:50] Like,
[02:01:53] Thank you.
[02:01:54] There's obviously a range here, but it's around 50, kind of like what we saw last time.  Maybe the 55 was the good run.
[02:02:04] And we'd have to run it a bunch of times, but essentially,
[02:02:09] They're pretty neck and neck here on the--  I think the thing is, this example is really just testing.  Yeah, OK, that was a bad run.
[02:02:21] Yeah.
[02:02:22] Remix might be like a hair more performing in this like
[02:02:26] in this case, but it's probably not.
[02:02:32] something
[02:02:33] people would notice, I think. This is just mean. So let's just do a mobile test on the top-level page without
[02:02:44] all the meanness, just...
[02:02:47] these should be scoring close to a hundred.  They should,
[02:02:51] They should be 98%.
[02:02:53] And...
[02:02:56] 98. Yeah. I mean, let's look.
[02:03:03] Remix is taking longer here. I think, honestly, this demo, the API and the Cloudflare, they don't play nicely together.
[02:03:13] um
[02:03:15] interactive 1.7.
[02:03:17] 1.6. So yeah, I don't know how the numbers reporting because interesting. It's like, I don't, I doubt remixes hydration is like significantly faster. Um,
[02:03:27] on this, but it's just
[02:03:33] or actually, yeah, what, there is something weird.
[02:03:38] I don't get it.  We've noticed-- looking at this, there is something weird.  Next is reporting a much later largest Contentful paint.
[02:03:47] Because I was looking at this for a second, but why is there a difference when it literally...
[02:03:52] is
[02:03:53] fully rendered thing. And we've noticed this the whole time.
[02:03:57] Next, largest Contentful paint is after its first Contentful paint.
[02:04:02] And I don't know why.
[02:04:05] Because conceptually, these numbers should be identical, like they are for Remix, like they are for SvelteKit.  When I turn off streaming on solid, they're identical.  But for some reason, for Next, there is a gap here.  And this is a significant gap.
[02:04:20] Thank you.
[02:04:21] hear it
[02:04:22] Like,
[02:04:24] And maybe this is related to Steve's demo.  Steve was sitting here and he was like, you know, I showed the thing on Twitter.  And someone asked, they're like, I'll just pull it up one more time.
[02:04:37] um
[02:04:38] this
[02:04:39] Steve from Builder.  And
[02:04:43] Yeah.
[02:04:44] You look at a hydration demo and you're like, okay, well,
[02:04:48] Um,
[02:04:50] Where is it?
[02:04:51] should be pretty recent.
[02:04:53] Six hours.
[02:04:55] Yeah, look at a hydration demo and you think to yourself, you're like, well,
[02:05:01] it's not rendering time.  These are,
[02:05:03] These are static rendered pages.
[02:05:06] Like sure, going gray, but look how much SoonerQuick appears compared to the React thing.  These are static pages.  There should be no delay on the visual page.
[02:05:17] But this is next. I wonder if there's something weird on the way that it...
[02:05:24] It doesn't make sense to me.
[02:05:26] This is something for us to figure out at some point, but why is there a gap
[02:05:32] like in this case, more than half a second gap between first contentful and largest contentful.
[02:05:37] I mean, let's look at those timelines again just for a second.
[02:05:42] Thank you.
[02:05:43] Thank you.
[02:05:45] First?
[02:05:46] Largest. These are the same, right? They are the same.
[02:05:49] So what's going on?
[02:05:52] I think it was more noticeable on...
[02:05:55] Yes.
[02:05:57] Yeah, no, that doesn't make any sense.
[02:06:00] Thank you.
[02:06:03] Oh, so you've witnessed this before. Huh.
[02:06:09] It must be something in the way that Chrome calculates its stuff
[02:06:13] I mean, okay, let's do the...
[02:06:20] Let's do the thing, right?  Sorry, I closed it down again.  How did-- link the thing.  How did Steve do it?  Let's do the visual measurement.
[02:06:31] tool thing.
[02:06:33] Let's put them side by side.
[02:06:37] and see if there is actually something going on here. Because he said,
[02:06:42] Thank you.
[02:06:43] not convinced, blah, blah, blah.
[02:06:46] Made by real...
[02:06:50] web page test.
[02:06:56] Phew.
[02:07:00] - Sure.
[02:07:01] Thank you.
[02:07:06] Yep.
[02:07:11] I actually never use this.  I mean, I've used a site, but I've never used the visual thing.
[02:07:21] Carl, let you use it.
[02:07:22] Okay, well...
[02:07:25] Thank you.
[02:07:26] So let's...
[02:07:29] I don't completely trust these.
[02:07:32] So let's take the next example.
[02:07:35] And
[02:07:37] put it under webpage test.
[02:07:39] And
[02:07:40] Do...
[02:07:46] Something slow.
[02:07:51] and see what this does. Okay.
[02:07:54] See if this is just Lighthouse.
[02:07:58] Thank you.
[02:08:08] Thank you.
[02:08:10] Thank you.
[02:08:12] Thank you.
[02:08:13] I usually don't do this one because it takes a little longer, but...
[02:08:17] page speed isn't always the most
[02:08:22] Accurate.
[02:08:34] Yeah, it's just curious to me, you know what I mean?  Like, why would this be...
[02:08:38] any different...
[02:08:40] Thank you.
[02:08:41] Thank you.
[02:08:41] Thank you.
[02:08:43] Give that a second while it's going.
[02:08:49] Yeah.
[02:08:51] All in all, though, yeah, I don't know. It's funny. I guess I was expecting something different, but Next was very straightforward to use and
[02:08:59] um
[02:09:02] It doesn't seem-- I mean, yes, I can imagine if the apps continue to scale up the way the app
[02:09:11] like initially does, like I could see this because like
[02:09:15] But...
[02:09:16] Yeah, I mean...
[02:09:19] Next load for the same page was 100 kilobytes and remix was like 70 kilobytes.
[02:09:27] And
[02:09:29] When you put that in scope of things, you know, SvelteKit, it's like 19 kilobytes.  And the Astro we did last week was like five kilobytes.  It's...
[02:09:38] um,
[02:09:39] You know, there's a full range there, but I mean, what would matter more is scaling up more components and more logic and whatnot.
[02:09:46] OK.
[02:09:52] Okay, yeah, okay, so, okay. First Contemptful Paint, longest, same.
[02:10:02] Yeah, okay.
[02:10:03] So, I
[02:10:05] Thank you.
[02:10:09] Yeah, I think it was like...
[02:10:12] that
[02:10:14] Yeah, I don't know.
[02:10:17] There must be something weird on how...
[02:10:21] lighthouse calculates stuff because this doesn't make any sense to me.
[02:10:30] .
[02:10:31] Okay.
[02:10:34] Okay.
[02:10:36] - Yeah, that's cool.
[02:10:41] Nothing too controversial here today,  other than why is page speed a...
[02:10:47] Mm-hmm.
[02:10:48] Doing this.
[02:10:51] Well, I guess that's a problem for another day. Easy stream. Two hours and 10 minutes. What do you know?
[02:11:01] Thank you.
[02:11:01] Thank you.
[02:11:03] Thank you.
[02:11:06] Thank you.
[02:11:08] Thank you.
[02:11:09] Yeah, yeah, yeah.
[02:11:10] Thank you.
[02:11:14] Yes.
[02:11:16] Yeah, I mean,
[02:11:19] that's the thing, right?  Like,
[02:11:24] This is what you're highlighting here.
[02:11:28] It's all simulated here.  And if you all saw Michael Rawlings' article from a few weeks ago, the simulations have
[02:11:40] They're not perfect.  Interesting thing is, I think...
[02:11:45] Um,
[02:11:46] Google does use this for SEO.  So there's like...
[02:11:49] value to scoring high here, even if it isn't actually, um,
[02:11:55] Accurate.
[02:11:57] Well, you know what, I did what I set out to do. So yeah, I don't know if there's anything  spicy or anything else we really want to take on with this one. This is kind of a
[02:12:13] is...
[02:12:14] was really straightforward. I got to hand it to them. And, um,
[02:12:20] I haven't been there this whole time, so I don't know if Next was always like this, but
[02:12:27] It's--
[02:12:28] It seems...
[02:12:29] incredibly easy to create an app and deploy it.
[02:12:34] Thank you.
[02:12:34] Not much else to say. Okay.
[02:12:38] - Anyways, yeah, I think I'm just gonna call a stream tonight.
[02:12:41] end this one a little early, you know?
[02:12:44] Yeah.
[02:12:45] Amen.
[02:12:46] So, yeah, have a good night, everyone.  If there's no other questions or anything, just give me less people last couple of chants.  But other than that, yeah.
[02:12:57] Yeah.
[02:12:58] Have a great weekend.  And,  uh,
[02:13:01] See everyone next week.
[02:13:05] Right.