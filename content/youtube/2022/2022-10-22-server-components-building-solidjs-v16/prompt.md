---
title: "adXqweWZcNA"
slug: "adXqweWZcNA"
duration: "4:54:27"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/adXqweWZcNA.m4a"
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
[00:00:01] Hello everyone, welcome to my stream today. Sorry for the bit of delay. I was just getting  everything set up and I realized I couldn't find my headphones, so I'm borrowing these  wonderful headphones from my wife.
[00:00:14] I guess we'll see how that goes today.
[00:00:18] But yeah, welcome everyone.
[00:00:21] How about you all come and say hi in the chat? I'm just going to
[00:00:25] push this out on social so people know that we're getting started here.
[00:00:31] Let's see how it's going.
[00:00:32] Hey.
[00:00:34] Um, yeah. I guess I'll push Twitch too. I never know if I want to push Twitch.
[00:00:39] Right. We're live.
[00:00:41] What's my twitch handle? RyanSolid?
[00:00:48] Let's make sure the screen share.
[00:00:49] Works too.
[00:00:51] Well, I'm at it.
[00:00:57] How are we doing?
[00:01:06] Should actually make sure this link is actually right.
[00:01:12] Yeah, okay.
[00:01:13] Cool.
[00:01:15] Alright.
[00:01:18] So how's everyone doing today?
[00:01:20] I had this all planned out, and I'd been...
[00:01:25] been uh working on the stream for a bit because obviously i've been working on solid 1.6 and then i uh
[00:01:31] get up this morning and Nikhil's like conveniently left a little message in chat. He's like,
[00:01:38] See if you can tell what I did.
[00:01:40] and um
[00:01:42] I didn't get it at first. I was looking, I'm like, okay, he looks like he's changed some of the output of this island stuff we've been doing.
[00:01:47] there's some assets in CSS but I was not
[00:01:51] quite following what he had to show. But he'd actually managed to get persistent islands over navigation, which is really, really cool, which I'll show in a bit.  But the main focus today on the stream is we're going to be looking at solid 1.6, which brings a whole bunch of partial hydration,
[00:02:11] and these island server component type concepts into the core of Solid.
[00:02:17] Along with that,
[00:02:19] It you know it impacts stuff like this all start meta framework so I'm gonna look at how that's implemented and how we achieve that I've been showing these demos for the last
[00:02:27] I don't know, month or so. I've been, you know, ViteConf and a few others and, uh,
[00:02:34] SolidStart docs are an example of it, my HackerNews demo. And we've been just building more and more stuff this way. And it just like, it's kind of crazy. This feels like a new thing. And I want to show that off today. The other piece, but there's more stuff in Solid 1.6. So we're going to, that's probably where we're going to get started in a minute. I'm just going to give you all a little bit time to get past the Twitch pre-roll. You know, now that I'm an affiliate, it just sits there and I haven't figured out how to roll stuff myself. So
[00:03:04] You know, we deal.
[00:03:07] - Hey, people in chat, how are you doing?
[00:03:11] Add stuff without breaking changes. Yeah, I mean...
[00:03:15] I've talked about this a bit before, but stuff like server components and partial hydration and stuff are...
[00:03:21] actually almost like adding a framework around a framework. It's like a new framework.
[00:03:26] and you put the old framework in the inside.  So it's not...
[00:03:30] that
[00:03:31] breaking per se it's like you're just kind of wrapping a framework with a framework
[00:03:39] Okay, yeah, there's a lot of stuff coming in chat now. I was told that I should watch. I'm gonna pull this over here because I off the screen so I can watch it. I'm supposed to watch the Twitch chat as well because apparently people have been subscribing to me on Twitch and I didn't even realize. And I apologize for that. I very much appreciate the support. I just had no idea. I was like sitting here in StreamYard going, Oh, I wonder why.
[00:04:01] Um...
[00:04:02] I haven't got any subscribers yet. Maybe no one watches my stream on Twitch, but it turns out that was an incorrect
[00:04:08] assumption and I am just an idiot. So, um,
[00:04:11] There's that.
[00:04:16] uh yeah so how's that yeah sorry there's so much good stuff going on in the chat you guys are always  saying saying hi
[00:04:23] I can't believe Streamy Air doesn't notify you.  Yeah.  I mean, that's a strike there, right?  Yeah.
[00:04:29] Thank you.
[00:04:32] I'll find one. Yeah, yeah, that's that's my hope. I'm hoping that Theo will solve this problem for me.
[00:04:37] So
[00:04:39] Yeah.
[00:04:41] Yeah, lots of highs going on in the chat. Yeah, we'll get started here in a minute talking about solid 1.6.
[00:04:47] But I'm just...
[00:04:48] just killing the time because I don't have one of those cool banners that everyone has,  you know, where people like sit there and they play music. Um,
[00:04:56] And
[00:04:57] Um,
[00:04:58] I don't have that, so...
[00:05:00] Forgive my lack of, you know, pro setup here.
[00:05:06] - Thank you.
[00:05:07] All right, how was okay? We're not bad. We could probably get started here in a minute. Let me just take a look
[00:05:14] Sipping my drink here.
[00:05:15] -
[00:05:18] Oh, let me see and let me check twitch chat for a second see if I missed anything. Oh
[00:05:25] Yeah, see, this is great. Twitch tells me stuff like first time chatters in here.
[00:05:29] Right.  Um...
[00:05:31] Yeah, this is awesome.
[00:05:35] Ryan drinking ASMR.  Oh, God.  Oh, all right.
[00:05:39] No, this is really cool to see everyone there getting more people on Twitch today than usual.  We're usually really heavy on the YouTube side.
[00:05:49] That's awesome.
[00:05:50] Okay.
[00:05:51] So yeah, what are we talking about here today? Let me just get a banner up. It helps me later, you know edit stuff and
[00:06:00] So...
[00:06:01] And I should have prepared these ahead of time, but as I told you, I got like way caught off by Nikhil's stuff this morning.  I was just like, what? And then I've been kind of into it ever since.  So I hope you all will forgive me.
[00:06:14] I
[00:06:16] Let's start the stream and talk a little bit about Solid version 1.6.  Solid version 1.6 just came out this week.  It was largely inspired by the work we've been doing in Solid Start.  Solid Start...
[00:06:28] is our meta framework, kind of like Next.js and whatnot.
[00:06:32] I had a lot of ideas at the beginning of how I wanted to
[00:06:35] build this thing. I wanted it to be built on like RPC type calls and get rid of stuff like  get server side props and all that. I never liked that pattern. It was kind of like,
[00:06:48] I wanted to be able to do granular updates, right? So stuff like loaders never really worked for me. And it didn't really work for Solid. So we kind of went down this journey and tried to come up with the best.
[00:07:01] single page app kind of mentality approach we could come up with, like very app centric.  And I showed a bit of that on the Solid Start stream.
[00:07:10] And I've showed a bit of the B comp but at a certain point I
[00:07:15] - Thank you.
[00:07:16] We were at the point where we're like, okay, we're going to release Solid Start and we need to write docs.
[00:07:22] And as you know, not every developer is good at docs.  Not every developer likes writing docs.  And I don't mind them, but it's tedious.  Like honestly,
[00:07:32] I have a lot of respect for people who can sit there and just churn away docs. It's freaking amazing.
[00:07:39] what ended up happening was like you're you're writing to auction trying to like
[00:07:43] Go, okay, just a few more pages.  Let's just keep on doing this.  And Nikhil's like, okay, I, I, like...
[00:07:49] I can't do this.  So he was like, yeah, let me just try and do some islands.  We'd seen Fresh, and we were like, yeah, let's do some islands.  And I talked a bit about this before in a stream.  We managed to get...
[00:08:01] this approach to islands working.
[00:08:04] which was based off
[00:08:07] this idea of
[00:08:11] hydration keys.
[00:08:13] So I'm just going to...
[00:08:15] but
[00:08:16] Before we get into all the island stuff, and I'm sure people are interested in that stuff,  I'm just going to...
[00:08:23] kind of
[00:08:24] talk about Solid 1.6 more generally and talk about a few of the other features and we'll build up to that.
[00:08:32] The key thing with solid 1.6 is obviously this island hydration stuff we talked about, which we'll go into more detail in a minute.
[00:08:39] basically there's only really two major features the second one is that we um
[00:08:45] worked on
[00:08:47] spreads.
[00:08:48] And you may go in, OK, well, what's that?  What the hell is interesting about spreads?
[00:08:55] I mean...
[00:08:56] you just
[00:08:58] You know, when you think...
[00:09:00] When you think of
[00:09:02] How should I put it?
[00:09:03] Maybe actually maybe I'll use one of these ones. When you think of
[00:09:07] a component. Most people, when they see counter,
[00:09:13] they see
[00:09:14] counter, essentially.
[00:09:16] So when you see
[00:09:18] name equals
[00:09:21] Whatever.
[00:09:22] Hue, I don't care. You kind of see this, right? Like that's the mapping.
[00:09:28] that you see in your head. So when you see
[00:09:32] a spread
[00:09:33] you're like, "Oh, well, what the hell is the big deal?"  'Cause I got some props here.
[00:09:39] Well...
[00:09:41] Isn't it?
[00:09:42] Like...
[00:09:42] Ta-da. This is not very interesting. Every time you call this function, you can merge these things together and you're like, okay, that's great.
[00:09:52] Good times. But
[00:09:54] the the
[00:09:55] The problem
[00:09:57] or challenge here is that
[00:10:03] In a reactive library,
[00:10:05] you know, we have this limitation around destructuring. Like you suddenly are in this point where
[00:10:11] this function is not going to run again. So
[00:10:13] like what are you going to do? Wrap the whole thing in a function and then like
[00:10:18] Tell it like
[00:10:20] If anyone's familiar with solid,
[00:10:22] you'll know this will make sense to you. Like, how do you make it know to rerun this again?
[00:10:27] You don't want to do this because
[00:10:30] If you had to rerun this whole freaking component,
[00:10:33] You'll be recreating buttons, recreating state. This is terrible.
[00:10:36] Right. Um,
[00:10:38] So,
[00:10:39] We had to come up with really clever solutions to handle this.  And I mean, it's not super clever to begin with, but if you've ever seen...
[00:10:51] Um,
[00:10:53] any of solid's compiled output.
[00:10:54] Generally speaking, if I have a prop name hue, and then I have, I don't know, let's make this hue, actually I'll keep hue as a string, just because it can, but let's add something else, like initial count or something.
[00:11:08] initial count equals
[00:11:12] Um...
[00:11:13] Whatever. I don't really care what it is. If you've ever seen Solids compiled output,
[00:11:18] This is what we do. We create a component called counter,
[00:11:21] which is actually
[00:11:22] Honestly, just calling a function we call on track, but that's not important. And the all the magic happens here in this prop object.
[00:11:29] I want to just kind of show this a little bit. So basically name hue just gets passed straight through, but the second we have something dynamic here,
[00:11:37] like this count,
[00:11:38] we wrap it in a getter.
[00:11:40] And what this means is we didn't execute count right now on the outside.
[00:11:45] we actually executed
[00:11:46] inside when you access prop.initialCount.
[00:11:52] Right?
[00:11:53] So...
[00:11:54] This is kind of like high level and you're like, okay, well, that seems maybe reasonable.  But the challenge here is that...
[00:12:02] Thank you.
[00:12:04] What if you don't know that it's initial count, right?  Like, what if we actually...
[00:12:09] need to...
[00:12:11] Spread a bunch of stuff.
[00:12:12] Um...
[00:12:13] some other props or something, right?
[00:12:16] And
[00:12:17] Solid actually made a helper for this, and you might have used it in your own code called Merge Props.  And what this does is it essentially
[00:12:26] combines these objects in such a way that in reverse order, it checks if the property exists on the first object and then on the second object.
[00:12:35] And you might be going, okay, wait, I thought I was merging these together into a single object.  Well, we don't want to merge them
[00:12:41] because
[00:12:43] there's this problem, perhaps.
[00:12:45] What if the property
[00:12:47] doesn't exist initially.
[00:12:49] and is added later.
[00:12:51] We don't actually...
[00:12:53] In order to track the right stuff, we have to
[00:12:55] not actually merge them.
[00:12:57] but actually walk backwards through a stack. And if that doesn't, that's probably a little technical for you all, but you can you can kind of picture
[00:13:05] that if I had
[00:13:09] If I had like, see, I want to do it in Scaladraw, but I don't want to write a bunch of code in Scaladraw.  That's why it's easier for me to write it here.  You know what?  Let's just write it here.
[00:13:18] You can picture if you had like
[00:13:19] Um,
[00:13:20] Let's just call them
[00:13:22] I just, it doesn't really matter what I call them.
[00:13:24] Let's call them...
[00:13:27] You know, if I had an object that had
[00:13:30] Name
[00:13:33] John.
[00:13:37] and
[00:13:39] Uh, what's another one?
[00:13:41] last...
[00:13:43] Smith, okay, right?
[00:13:45] And then I had another object.
[00:13:49] Which had...
[00:13:51] Name
[00:13:53] Um...
[00:13:55] Jack, okay? This is just silliness. If we...
[00:13:59] if we were to go...
[00:14:00] and do something like this where
[00:14:03] we spread
[00:14:05] A
[00:14:07] and then spread.
[00:14:08] B.
[00:14:09] Your expectation.
[00:14:11] of this is ultimately that you're going to end up with an object
[00:14:15] Where is...
[00:14:17] Results or whatever is going to be an object that's essentially
[00:14:21] Um, what is it?
[00:14:22] Name...
[00:14:24] Jack.
[00:14:27] Last.
[00:14:28] Smith.
[00:14:31] - Okay.
[00:14:33] And I mean, that's kind of unsurprising.  You took the jack...
[00:14:38] Basically, you have John Smith here and you actually override the name with Jack.  Essentially, you compress them down.
[00:14:45] So you end up with Jack Smith and because B doesn't have a last name,
[00:14:49] it falls through to A.
[00:14:52] But as I was showing you before, we have these reactive getters.
[00:14:57] We need to...
[00:14:58] Our challenge gets a little bit harder because we need to actually track the reactivity here.
[00:15:03] So,
[00:15:04] essentially
[00:15:07] I don't know.
[00:15:08] Let's see how I go. Yeah. So essentially, because of this,
[00:15:14] if we compress stuff...
[00:15:17] And
[00:15:18] someone later...
[00:15:20] ads
[00:15:21] Last here like now it's uh
[00:15:26] Jack Black or something, right? We need to be able to know that
[00:15:32] this changed and you're kind of going like
[00:15:35] How...
[00:15:36] Could you possibly, like if you went through and you're not going to rerun this function, how are you possibly going to know that last on object B changes?
[00:15:47] Right?
[00:15:48] Like, it wasn't there. If you merged them, you would have ended up with this.
[00:15:54] So the trick is...
[00:15:57] Generally speaking, if the object can change, we use proxies.  So we secretly subscribe to last on object B
[00:16:03] even though it doesn't exist.
[00:16:06] And then when we get to A and it fulfills, we subscribe and we also subscribe to A. So technically this
[00:16:13] If it hit Jack...
[00:16:16] right away.
[00:16:17] This was initially subscribed to A,
[00:16:20] And this was subscribed to
[00:16:22] B and A.
[00:16:24] in our initial example here.
[00:16:27] So at the time,
[00:16:29] Essentially, if there was something below it, like a C or, sorry, not C, but if there's something below it, we don't really care.  Like, if there's a jack here...
[00:16:39] We don't care if someone changed John on A here because
[00:16:44] it's going to override it anyways. So you can change A as much as you want.
[00:16:50] but
[00:16:51] because someone could add last
[00:16:54] to B here, like add black, we need to be subscribing to a property that doesn't even exist on B in order for it to reactively update.
[00:17:07] Right. So this, this was something that, um,  I didn't realize at the beginning of solid at the beginning of solid,  I did merge. I was like, Oh,
[00:17:16] We can just merge the getters by...
[00:17:18] by going down the object tree and just grabbing the first getter that matches and use the object.define properties to construct it. I don't know if you guys have seen it. You can use getters inline like I was showing earlier in our component props here. I don't have it anymore.
[00:17:37] If I get rid of the spread, you... whatever.
[00:17:40] uh what's an example uh last
[00:17:43] equals
[00:17:45] Amen.
[00:17:46] Whatever. Okay.
[00:17:47] Oh yeah, I probably have syntax errors because of like all the other stuff I've been adding on here.
[00:17:52] Anyways, not important. But what I'm getting at is you could always combine it.  But because the possible properties could change on here, I actually have to use proxies.
[00:18:03] Right?
[00:18:04] Bye.
[00:18:05] So
[00:18:07] So there's a comment here, I see why Rx has thousands of operators.  Well, yeah, because the combinatorics, once you add dimensions to the problem, like whatever
[00:18:17] to trigger changes and
[00:18:19] time, like asyncness,
[00:18:22] every simple problem like a map
[00:18:25] becomes like eight variations of map.
[00:18:27] right? The complexity just skyrockets when you start trying to like
[00:18:31] use like specific terms to like describe
[00:18:35] all the common common torques of what your intent is for something as simple as a map when you go when you when you get too far here. Luckily for us, we actually with fine grained reactivity, sorry, mostly express things as regular like expressions.
[00:18:48] It's like cells in a spreadsheet. You just kind of like do a sum there and you're not like doing a bunch of operators.
[00:18:52] But that complexity explosion is actually one of the reasons that I sometimes struggle with RxJS.
[00:18:58] because, uh,
[00:19:00] like
[00:19:02] If you can avoid that complexity, you kind of want to, although RX is incredibly powerful.
[00:19:10] So question is here, what if the key name is removed from A, does it subscribe to B.name? In this case,
[00:19:18] Um, it didn't matter because B was already, uh,
[00:19:21] Sorry, I did this backwards. Sorry, my bad.  B was already subscribed to.
[00:19:25] I did this backwards, my mistake. B was already subscribed to. So removing
[00:19:30] A doesn't matter, but if we move B,
[00:19:34] Well, it knows it's changed so that when it reruns,
[00:19:36] it will subscribe to B and A, because it'll hit B, nothing's there, fall back to A, and subscribe to A as well.  So this is pretty complicated under the hood, and it's the reason why Solid started moving to using proxies
[00:19:49] all over the case.
[00:19:52] And
[00:19:53] This happened a while ago, but
[00:19:57] I did this for components.
[00:20:00] and it's been working really well.  But the problem is with native elements,  when we actually wanted to finally render it down to the Dom,
[00:20:06] I didn't.
[00:20:07] do that. I did something a little bit different and
[00:20:11] I'm going to show this right now for a minute.
[00:20:15] I came up with a spread operator.
[00:20:18] Because this is where the actual effect is. This is where we actually write the stuff. It's find emerge props when you're doing all these transformations because then the child will get its own props and do that. But ultimately we need to write this to the DOM.
[00:20:31] Right. That that is
[00:20:33] why we're doing this. And unfortunately, my thinking for the longest time was like, okay, well, we got the static stuff, it'll go in the template, like, see name, hue, it's right here in that div.
[00:20:44] We just clone that template with nameHugh.
[00:20:46] And then...
[00:20:47] So,
[00:20:47] We will, where is it?
[00:20:50] will
[00:20:51] make an effect that sets the attribute for last whenever name changes. Right? So this is easy. And then we will spread A and spread B and wipe our hands.
[00:21:02] Um,
[00:21:03] But this is...
[00:21:05] kind of bad. And I'll explain why in a second here. If you have a question.
[00:21:15] Yes, this is correct. So it'll subscribe to all the properties of the last object in this case because it overrides all, but not all properties of the prior objects in case because they can get overridden. Well, yeah, exactly. Every time you run, you have to do it. The problem is it's really easy to do fine grain updates like this where you're just like, oh, I'm just going to update this one thing that pinpoint changes. Like when you change that name.
[00:21:31] in solid.
[00:21:32] that one attribute on the div just changes like we don't need to rerun anything else
[00:21:37] But once you get spread, now you're like kind of pulling all the stuff together, right?
[00:21:43] and
[00:21:46] And now I need to check the Twitch chat.  So I thank people who subscribe.  I will do so in a minute.
[00:21:56] But,
[00:21:57] Uh...
[00:21:59] Oh, yeah. Ben Holmes subscribed tier one for three months. Thank you, Ben.
[00:22:02] See, I don't get this through that.
[00:22:06] And also Nicola
[00:22:09] Also subscribe.  Man, thank you so much.  Theo subscribed too.
[00:22:14] There you go.
[00:22:15] So many people subscribed. Yeah, I need to be paying attention to this chat more often. I'm sorry. Anyways, back to the technical stuff. Okay, so
[00:22:24] The problem with separating out the spreads  from the pinpoint updates  is because they get to play this game  where they get to...
[00:22:32] fight each other.
[00:22:33] Right. And maybe maybe I should just illustrate this really quickly to actually show you what I'm talking about.
[00:22:38] because
[00:22:40] we
[00:22:41] Let's actually, I'll keep our div around and maybe we'll actually insert it somewhere so we can
[00:22:47] I can see it. Actually, I don't even know if I can see it. I should pick something that's
[00:22:52] thing that we can inspect on it, maybe like a title.
[00:22:55] and I need to get
[00:22:57] maybe...
[00:22:59] two signals.
[00:23:04] Ah.
[00:23:07] And whatever, count two, okay.
[00:23:11] Increment too. Okay, maybe I need two buttons now. Okay. I
[00:23:14] doesn't
[00:23:15] really
[00:23:16] matter too much how I do this
[00:23:19] What I'm getting at, the problem...
[00:23:21] right, and because they're adjacent, we need a
[00:23:26] Fragment, okay, A is not defined.
[00:23:29] What was I doing?
[00:23:30] Oh yeah, because I'm spreading A. That doesn't exist. Okay.
[00:23:33] Um...
[00:23:35] Okay, yeah.
[00:23:36] This is so fun to actually set up the scenario to do this.
[00:23:40] because
[00:23:42] it
[00:23:43] It's almost like I need to actually...  It's easier to set this through...
[00:23:46] through props than any other scenario so maybe i should have made it into separate components but the
[00:23:52] Yeah, let me see how I want to do this.  Because the problem is...
[00:23:59] Okay, actually, you know what?
[00:24:00] I can show this problem without even using spreads.
[00:24:03] Um,
[00:24:05] I think because I think, I think
[00:24:07] JavaScript will let me do this, but TypeScript
[00:24:10] will not.
[00:24:12] Okay.
[00:24:14] and actually
[00:24:17] Yeah, let's do this.
[00:24:20] count
[00:24:22] one
[00:24:23] Title
[00:24:25] count
[00:24:26] Two.
[00:24:28] Or does it just count?
[00:24:29] Let's just count.
[00:24:31] Okay.
[00:24:32] All right.
[00:24:34] That's funny. It's because they're both...
[00:24:37] It's because I'm setting count.
[00:24:39] Whatever. Okay.
[00:24:41] Doom, doom, two buttons, two buttons.  One, two.
[00:24:45] Interesting.
[00:24:48] I'm like missing something. Oh, it's because it's count. It's not count two.
[00:24:52] This is why you should use the recursive functional form of stuff most of the time.
[00:24:57] Okay, sweet. Okay, and
[00:25:00] If I inspect this,
[00:25:03] Um...
[00:25:09] I don't know if you guys can see this.
[00:25:11] Um...
[00:25:13] But there's a Title V here.
[00:25:15] And when I click on this one,
[00:25:17] it's going to switch to Title III.  And you'll be going, wait, wait, wait, doesn't this title  come after this title?
[00:25:22] Like...
[00:25:23] Shouldn't...
[00:25:25] Like...
[00:25:26] Shouldn't it always listen to this one and never listen to count two?
[00:25:31] Or like vice versa?
[00:25:33] Why like there? Oh, it went to four.
[00:25:35] Amen.
[00:25:36] It's reactive, it's all fine-grained and separate. It doesn't care. It's like last one wins.
[00:25:42] And this is...
[00:25:45] This is usually...
[00:25:48] fine because you don't have the same attribute on the element twice. I did this purposely because
[00:25:55] It's funny that I'm not...
[00:25:56] I'd expect JSX to get really mad about this, but essentially, generally when you program with JSX, each attribute is independent.
[00:26:04] Right? So like,
[00:26:05] or sorry, it can appear once.
[00:26:08] So you don't have to worry about this merging problem.
[00:26:12] Essentially because what this compiles to I think we're looking at here is literally just like two effects  Let me pull this out here
[00:26:19] Uh
[00:26:20] I mean, they get grouped, but essentially it's like set title, set title, but two separate
[00:26:26] DOM updates on the same element on the same attribute. So they're just like fighting each other.
[00:26:31] Right?
[00:26:34] Right.
[00:26:37] But it's basically like if you had two effects and one writes, and they both write the same thing and they're fighting each other. Luckily for us,
[00:26:47] When you write JSX, you generally don't do this, so this isn't a problem. However, spreads make this a problem again.
[00:26:54] and that because you could have the item inside the spread and their item outside the spread and we need the merge them so
[00:27:01] The work with Solid 1.6 was instead
[00:27:06] of...
[00:27:07] I'm getting to my point here.  Instead of doing what I showed you all a minute ago where I was...
[00:27:14] I don't know, I'm just gonna add a spread here. I don't care what the spread's for, spread A.
[00:27:20] instead of...
[00:27:22] adding a bunch of spread operators and effects separately here.
[00:27:27] like this in solid 1.6. Let me make sure that I'm actually showing
[00:27:34] this properly.
[00:27:36] Let's hope this works.
[00:27:39] good A is not defined as I expected.
[00:27:41] our spread now actually merges
[00:27:45] our props together. So we get that same component style spread
[00:27:49] operation.
[00:27:51] on native elements as well.
[00:27:53] So it actually looks at the output and goes, OK, there's a spread here.
[00:27:57] and there's something dynamic.
[00:27:59] Well...
[00:28:00] It can possibly change. We have to bring them together. So it's a bit of a deoptimization.
[00:28:05] but it means consistency.  We won't have them like fighting each other.
[00:28:09] that's
[00:28:12] Yes, it's merch watches to be done for props.
[00:28:16] Yes, when people talk about fine-grained reactivity, they go, "Oh, this must be great because every single
[00:28:22] Um...
[00:28:24] point, you know, is updated independently. But the truth of the matter is the overhead of doing  those subscriptions sometimes aren't worth it. As I showed previously here, we were actually  grouping these effects together already because it wasn't worth making a separate one each time.  We just did a shallow diff check, right? And in this case, yeah, I mean, now we merge them together so we get the
[00:28:44] proper results. The key part of fine graining activity isn't that it's always super fine grained,
[00:28:49] It's that you have complete control over the granularity of the change.
[00:28:54] And basically, we can tell from the compiler by the way you write your code,
[00:29:00] how to break it up. We analyze the JSX and we're like, oh yeah,  you know, these things should be independent. These things should be together. And
[00:29:07] I mean, the heuristic maybe is not 100% perfect, but it's smart enough to do stuff like going, okay, attributes and elements generally go together, but children insertion happens separately.  And now...
[00:29:17] you know, you've basically solved that memoization problem just by the way you're
[00:29:22] your markup or JSX is structured. And that's the whole thing, right? It's not necessarily because you made a component that reruns,
[00:29:31] It's
[00:29:31] it's like that part doesn't matter we could put 10 components together you know you know stack them  put them through um
[00:29:38] They don't rerun generally. It comes down to like, logically breaking up, like once you combine the whole template together, compressed all the components, got rid of them. It's like going, okay, these groupings of things should change together.
[00:29:53] And
[00:29:54] That's the power fine-graining because that control is at your fingertips or in the case of our compiler's fingertips.
[00:30:00] Thank you.
[00:30:02] So the double title thing still not work.
[00:30:04] No, because I haven't bothered doing anything with it.  But your JSX should just scream at you if you try and do that.
[00:30:11] The thing is, the double title thing is fixable.
[00:30:14] if I want to. The compiler can see both titles,
[00:30:16] and be like, yeah, just use the second one.
[00:30:19] Like,
[00:30:20] I haven't done that, but...
[00:30:22] But, you know, because there hasn't been a need, but we could do that very easily.
[00:30:26] However, here, I can't see that the second title is inside the A. The compiler can't know that.
[00:30:33] So, um...
[00:30:34] Thank you.
[00:30:35] you know, this is why we get here.
[00:30:40] Yes, other libraries support multiple spreads because they rerun the whole thing.  They rerun the whole component.  They go, oh, something changed.  We don't know what it is.  Let's just do all the work.
[00:30:49] Um,
[00:30:50] So...
[00:30:51] Like, this is...
[00:30:53] This is why this spreads aren't really interesting topic when you're talking about like a VDOM library.
[00:30:59] You're just making a props object. What are you doing?
[00:31:02] But spreads are incredibly interesting from a fine grained perspective.
[00:31:05] Um, and like,
[00:31:07] I'm a sucker for optimization, right?
[00:31:10] So like...
[00:31:12] You know, I want to do better stuff like here. Look
[00:31:15] If there isn't a dynamic account title here,
[00:31:17] we don't bother merging the props.
[00:31:19] I go, okay.
[00:31:21] this can pass straight through. We know that
[00:31:26] Nothing else can change.
[00:31:28] We don't bother merging here.
[00:31:33] But...
[00:31:33] If this happens, like a function,
[00:31:38] then we do merge props because we're like, whatever's in A that object could be completely swapped.
[00:31:44] See, reactivity tells us a lot of stuff because
[00:31:47] If you do this,
[00:31:49] We know...
[00:31:50] that while this object can possibly mutate, like let's pretend this is props,
[00:31:54] we know that these props can change, we know that the props object itself
[00:31:59] can, um,
[00:32:01] never be replaced it's not going to run again it's it's essentially
[00:32:04] It's tied to this object, but if the second we do something like this that object you're calling a function what you return could change every time or even this is
[00:32:15] nested or something.
[00:32:17] even something like this, because this could be a getter that returns a new object,  at that point we were like, okay, we've got to merge these props  because there's a potential of...
[00:32:25] this so we have multiple levels of of
[00:32:30] of detection from the compiler to be able to try and still produce the most optimal code for you. If you just do this all the time,
[00:32:39] nothing's really going to change for you with 1.6.  I made sure to keep...
[00:32:43] things as optimal
[00:32:45] as possible but now we've smartly de-optimized for more dynamic cases to properly merge things.
[00:32:54] and
[00:32:55] This actually came up for me for a reason.  And that is because...
[00:33:00] Thank you.
[00:33:01] even though I wanted to fix this forever,
[00:33:03] I kind of realized this thing about the nature of props and different levels of de-optimization, because a bunch of people came to me about low-end devices.
[00:33:10] In the same couple weeks, I had people who wanted to use Solid in IoT, and they were like, "I'm loving Solid."  They're like, "I tried React, it was like non-starter, it was too heavy on these old devices."  I even tried Preact, but the VDOM overhead for us was just too much. I did a simple demo with Solid,
[00:33:27] And the performance is incredible.  We want to go back and replace, you know,
[00:33:31] what we're doing on the front end of these low power devices.  And they're like, but we've got one problem.
[00:33:41] these old run times and stuff don't support proxies.
[00:33:46] And...
[00:33:48] This is something, you know, ever since I made that realization that we needed to, you know, do that thing I described earlier where we kind of like walk through the objects to decide, you know, which things are subscribed to, we've been on proxies.
[00:34:01] Right?
[00:34:02] and basically merge props and splits props to solid's helpers create proxies so like you might  be going oh well if you don't use a store you don't use a proxy solid has a built-in fine-grained  stores which use proxies but the truth of matter is anytime someone uses merge props
[00:34:17] or
[00:34:19] Sorry, merge props or...
[00:34:22] split props
[00:34:23] you might be making a proxy because the properties could change.
[00:34:28] But,
[00:34:28] I've realized something really cool with solid...
[00:34:32] And we implemented this in Solid 1.6.  And I'm going to show you this cool thing that I realized.  I mean, it's not even that...
[00:34:41] uh,
[00:34:42] that tricky here, but
[00:34:44] Essentially,
[00:34:47] no, actually it's render component, yeah.  Essentially, all solids proxies
[00:34:53] uh
[00:34:53] Where is it?
[00:34:55] Actually,
[00:34:56] implement
[00:34:57] this proxy getter. It is a symbol essentially. So when you go in
[00:35:03] And let me see...
[00:35:06] If you get
[00:35:07] that symbol
[00:35:09] on any of salt's proxies, it will return back the object and go, yeah, this, this is
[00:35:14] This is a solid proxy.
[00:35:16] And we did this so that we could prevent over wrapping.  Because if you have proxies and proxies and proxies,  you don't want them to keep on wrapping each other.  You can just be like, look, I'm already wrapped.
[00:35:26] Because for you, those who don't know, proxies don't
[00:35:31] equal
[00:35:32] There's some interesting properties about proxies.  If I have proxy p, which equals new proxy,
[00:35:39] and
[00:35:40] Um,
[00:35:41] This is gonna be our target.
[00:35:43] I'm not going to implement any handlers, but I'm going to make our target target a and const a
[00:35:48] is just going to be some object.
[00:35:50] Well...
[00:35:50] And I'm gonna make another proxy.
[00:35:52] which is
[00:35:54] P2, and it's also going to wrap A and have its own behavior.
[00:35:57] Some things that might be interesting to people is, let's see if this will work. I think I didn't break any syntax yet.
[00:36:04] Oh no, props is not defined. I did break syntax. This. Screw this. Okay.
[00:36:09] is that
[00:36:11] Thank you.
[00:36:13] console log
[00:36:15] Let's do some console logs.
[00:36:17] Um, let's go.
[00:36:19] A equals P
[00:36:23] and just go A equals
[00:36:24] P.
[00:36:26] And then...
[00:36:29] to do to do to do so what we got um
[00:36:33] A equals P2.
[00:36:36] And then...
[00:36:37] P equals P2.
[00:36:41] Okay.
[00:36:42] And...
[00:36:43] -
[00:36:44] The answer to all these questions
[00:36:46] is false.
[00:36:49] And you basically have no way of knowing that the proxy
[00:36:55] wraps the same object or
[00:36:57] like is a wrap of a set object.
[00:37:00] Proxy is not the object that it proxies. So essentially, I had to come up with a mechanism to be like, hey, this is one of our proxies. Because otherwise, as I mentioned, there's no equivalence here.
[00:37:14] so
[00:37:17] - Okay.
[00:37:18] Getting back to what I was showing here, essentially...
[00:37:22] Not that. Sorry, that's me preparing for my front-end master's course.
[00:37:27] Ooh, I've ASTRO corset still open.
[00:37:30] Why did I lose? Did I shrink it?
[00:37:33] die full screen and ice full screen. Essentially, this is why I use the symbol
[00:37:39] Our stores use a symbol our props or everything uses that symbol, but what I realized is
[00:37:44] Was...
[00:37:45] It's so funny. How often are you so thankful that you have Git history?
[00:37:51] I actually went back
[00:37:53] And I looked at
[00:37:55] are
[00:37:56] merge props
[00:37:58] and our split props implementations.
[00:38:01] And
[00:38:05] Sorry, these are the types. Where is it? Merge props.
[00:38:13] I'm like, what branch am I looking at?
[00:38:15] This doesn't seem right.
[00:38:17] Um...
[00:38:20] Doo doo doo doo.
[00:38:27] That's so funny. Did I?
[00:38:29] Huh, I don't think I'm on the right branch on this computer. I do dev on my MacBook Air, and I do this on my ProOS. Give me two seconds.
[00:38:39] I am...
[00:38:41] All right.
[00:38:42] - Choo-choo-choo-choo.
[00:38:43] - Thank you.
[00:38:45] This is why. I'm like way out of date. Oh, there we go. I was like worried for a second. Like, where's all my code?
[00:38:50] Alright, there we go. Okay, sweet. Okay.
[00:38:54] so
[00:38:56] What I ended up doing...
[00:38:58] realizing is that for
[00:39:00] If we check,
[00:39:01] on merge props.
[00:39:02] If this proxy symbol exists,
[00:39:04] or
[00:39:05] On split props,
[00:39:07] That, you know...
[00:39:08] The source has a proxy in it, see props and proxy.
[00:39:14] We can tell...
[00:39:16] if the source could ever change its shape.
[00:39:22] Right?
[00:39:24] Essentially, you
[00:39:26] If
[00:39:26] you're splitting props or merging them and none of the sources
[00:39:31] are proxies themselves
[00:39:33] nor
[00:39:36] Now I want this spread back again.  But nor...
[00:39:40] Call a function
[00:39:42] Right. As I mentioned before, if I call a function,
[00:39:45] uh...
[00:39:47] or access, you know,
[00:39:49] Something like this where it could replace the thing being spread and
[00:39:55] if we're not a function and not a proxy we know
[00:39:58] that
[00:40:00] the shape of the object can never change.  And for that reason, I actually went back in time to older versions of solid,
[00:40:06] in GitHub and actually
[00:40:08] like brought back the old implementation
[00:40:12] that
[00:40:13] that we used to use in solid like pre 1.0 where we didn't do proxies and just put it right on top. I was like, okay, if this condition is true, then make a proxy. Otherwise,
[00:40:24] just merge them using property descriptors like I talked about earlier.  And similarly for split props, if this thing is a proxy then
[00:40:32] Um
[00:40:33] push itself onto the merge and merge it because otherwise we're,  um,
[00:40:40] Otherwise, if it is a proxy, sorry, then we have to make this new proxy object.  So the end result of this whole little
[00:40:47] little thing is,
[00:40:49] We're solid. We just create proxies. Um,
[00:40:52] wherever we're now smart enough to be like oh actually we don't need to create proxies in these scenarios so if you don't start with a store and
[00:41:00] And
[00:41:02] You aren't like
[00:41:04] doing something like this.
[00:41:07] We actually don't need to do any proxies.  And I mean...
[00:41:11] While it's kind of awkward that like someone have to know not to do this, like if you really
[00:41:17] don't want
[00:41:19] it to
[00:41:20] be possible to be reactive. Well, I mean,
[00:41:24] then you can always do this.
[00:41:29] like,
[00:41:29] I don't recommend people to destructure or whatever, but like essentially this is ensuring this isn't reactive like
[00:41:36] you get the expected behavior
[00:41:39] because of it. Now don't get me wrong,
[00:41:41] Properties on something can be reactive and they can spread. It's just that
[00:41:45] This won't swap if you swap the object, essentially, because for that case, we actually need a proxy. Anyway, this is probably the most technical part of this, but I hope you can see that we now have a sliding scale.
[00:42:01] of
[00:42:02] of, um...
[00:42:03] potential here on
[00:42:06] on our props so that we get the proper behavior and still optimal behavior when you don't  Opt into like more fancy prop conditions and this is what I was talking about with this deep profit  proxification that if you
[00:42:20] If you only write your spreads like this, Solid won't create any proxies that you don't create.
[00:42:28] I don't know if people do this kind of stuff that much anyways is kind of the thing.
[00:42:33] Right?
[00:42:41] These are problems that would take me years to figure out. Yeah, it has taken me years to figure out.
[00:42:45] That's the thing.
[00:42:50] I'm so happy to hear this.  Like, I think this is a game changer on this side  because there is some concern  that some third-party libraries could do this,  which might be awkward.  And it might be even worth...
[00:43:02] making a compiler flag, but the problem is  then you could break stuff in unexpected  ways. So I actually think it's
[00:43:08] Bye.
[00:43:09] think
[00:43:10] But if you're making small projects,  things where you control most of your dependencies,  this is cool.  And for everyone else, it just means that...
[00:43:18] there's less proxy indirection going on.  It'll make debugging and stuff easier.
[00:43:24] Right.
[00:43:25] Alright, how's chat doing? Let's take a little moment here, get some drink.
[00:43:32] *sniff*
[00:43:36] *clap*
[00:43:38] and
[00:43:42] All right.
[00:43:44] And yeah, again, if you're watching my stream,
[00:43:47] and you're like, oh, wow, this is crazy crap.  You know, I'm, you know,
[00:43:51] Sure, I guess...
[00:43:53] I guess there's a lot like this problem or concern where I'm actually literally showing you how I implement this stuff.
[00:44:01] So like now
[00:44:03] you can see the actual complexity, but I prefer it this way, right? Like,
[00:44:08] Let's face it, this is complex, but if you look under the hood of anything, it's pretty complex. Spreads are probably one of our most complex.
[00:44:17] complicated things because we're trying to like they're like a de-optimization by nature
[00:44:23] And we're trying...  Like, that's when you go back to the VDOM, essentially.  Like, like...
[00:44:28] you...
[00:44:29] basically de-optimized back to a VDOM, as someone put. And, you know, this
[00:44:35] We just have to be conscious that the reason this is more complicated is because I don't want to just de-optimize by default.
[00:44:40] Right.
[00:44:51] Right? So like...
[00:44:56] Yeah, yeah. Some more comments coming in.
[00:45:01] What are we doing here?
[00:45:02] Thank you.
[00:45:05] Looking good so far.  It's all on these weekends.  Yeah.  There's more cool stuff coming on the stream.  I just wanted to start with like the,  the first thing is,  you know,
[00:45:13] I'm glad people are liking this stuff.  One day I'd like to jump on stream with you  and learn how JavaScript is going.
[00:45:19] You know all the tricks. Yeah, I mean, there's that'd be a lot of streams. Dan and I actually sat and tried to do that. Anyone saw that breaking down the web? Dan Jutan and I kind of just talked about web frameworks and how hydration works. And essentially, we were going for hours and
[00:45:36] we went multiple streams and we like, I feel like we barely touched the surface. You know, there's  just so much here. And I don't say that to intimidate people. I'm just saying like, it's okay. You just kind of
[00:45:47] Pick stuff up as you go. I've been at this now for a very, very long time. I've been developing on the web for
[00:45:55] I want to say 25 years.  Um,
[00:45:58] So, yeah, I mean, don't sweat it.
[00:46:05] Example of runtime where proxies are not supported. It's just older versions of like JavaScript engines and stuff like I like
[00:46:14] React Native, for example, was using an older version of whatever, the underlying thing
[00:46:20] was a JavaScript core, the underlying thing behind WebKit. React Native didn't support proxies until 2019, I think.
[00:46:28] Just for example?
[00:46:29] And that's React Native.
[00:46:31] So...
[00:46:32] Like...
[00:46:34] Um,
[00:46:35] Yeah.
[00:46:44] Seeing people be happy with developing low-end devices is great.  Meanwhile, at work, we changed the SPA, WebGL framework, and why we built more.
[00:46:51] I think the lack of service I've rendered increased bundle size is going to bite in its ass.  I mean, that's a hard problem.  I imagine when you say biting in the ass, you're talking about the SPA WebGL framework you created in terms of not having server rendering.  There's...
[00:47:05] - Thank you.
[00:47:05] There are some things that are just very app-like and have to be in the browser and they're going to be heavy and it is what it is, right?  Like...
[00:47:12] - Whoa.
[00:47:15] I mean, there's not much he...
[00:47:16] It's all like there's balance on these things  It's all what it is
[00:47:23] Yeah, no, I mean, here's the thing.
[00:47:27] So 2.0, when you go and make a new breaking major version,  what you're actually doing is saying this is breaking.
[00:47:34] I feel like a lot of the innovation usually comes right before the break. The innovation comes and  you're like, "Oh, I can add this and add this and add this." And then you're like, "Oh, but I can't  add these couple things." And then you're like, "Okay, time for a breaking change." And
[00:47:46] And then...
[00:47:48] This is what facilitates it.  Solid from I don't know how long to about...
[00:47:53] 1.3 1.4
[00:47:56] was on a mission. I'd say 2019. Basically,
[00:47:59] Solid from 2016 to 2019 was all about client-side rendering.  And we got there, right?  In 2018, we topped the benchmarks,
[00:48:12] That's when we started being the fastest. I guess that was almost five years ago.  And then at that point, I was like, "Oh, what's next? What's next Frontier?" It was server rendering.  So I started on a journey of server rendering in 2019. And it started because I made the real-world  demo at the beginning of the year, and it was the fastest real-world demo.
[00:48:29] Until you slow down the network and then I was like, oh, we're not the fastest real-world demo. What do I need to learn here? I
[00:48:35] So then I
[00:48:37] I kind of like looked because I had this misassumption because if you have a fast network client side rendered spa that's very efficient.
[00:48:45] will beat your server-side rendered stuff. I was beating Sapper and like Next and all of them, like just killing them with a client rendered app. And you're just like, what?
[00:48:54] Well, you know, Lighthouse, of course. And it was wrong because I had good internet.
[00:48:58] and I had a fast CPU.
[00:49:00] So that's when I started looking at server rendering.  And it really took till last December for us to finally get like,
[00:49:06] finalize like out of order streaming and stuff like we've had out of order streaming for a couple years now and suspense on the server and all that for a couple years now but to finally like go like okay this is in good place took all the way till 1.3 and then
[00:49:20] Finally, the last few releases for Solid have been like, okay, let's stabilize those missing features, things like the spread and stuff and make it consistent.
[00:49:29] But now we're at this turning point where we're looking forward to 2.0.  That's what's going on right now, right?  The kind of innovation is kind of getting split now where it's like a few things to  make life easier, like these spreads, and then like...
[00:49:44] the stuff like the partial hydration that I've been talking about.
[00:49:47] Stuff like improving our transition model the solid working group. There's a few people out there kind of
[00:49:53] grab them from the reactivity group and they're kind of like
[00:49:58] doing prototypes and future reactivity stuff. It's a bunch of kids in university. I say kids,  but I don't mean any offense, but I'm getting kind of old now. Um,
[00:50:07] I mean, they're going to be the ones who write the future React to a solid, probably not me.  You know, these...
[00:50:14] guys doing their math degrees in their early 20s at university.
[00:50:20] Really smart people. I'm crowdsourcing it. So yeah, this is the shift that's happening right now. We're looking to the future and I'm really excited, which is why I'm excited to show a lot of stuff we're going to show today because it's like really...
[00:50:34] kind of mind bending where it's going.
[00:50:42] Yeah, just catching up on chat.
[00:50:45] Oh, man.
[00:50:48] We're not going to talk anymore about Flutter or Dart, but I just had to give this a moment.
[00:50:53] OK, there you go.  OK, moving on.
[00:50:57] Thank you.
[00:50:59] Oh, see, there's so much in the chat.
[00:51:06] uh...
[00:51:10] All right.  People just talking about spas versus other solutions.  Yeah.  Blah, blah, blah.  Okay.
[00:51:20] uh testing is a good topic on its own i think uh maybe i'll have the tarnav uh or alex actually  sorry it's hard to work on the dev tools which is also a great topic um alex lower who wrote all our  guides for and worked on the vtest stuff to come in and talk to me about testing components this  is an area that i'm not terribly from familiar with i do a lot of snapshot testing when i work  on compilers because you know i like seeing input output it makes my life a lot easier
[00:51:50] - Thank you.
[00:51:50] I have to admit I worked in environments that were always low test.  I worked in startups and we just were go, go, go, go, go kind of deal and we didn't really  write tests.
[00:52:00] at least not on client side stuff. We wrote tests for some back-end procedures and stuff like, like, but we didn't really test our components. So I'm not the best person here, but I can probably find someone who is.
[00:52:15] All right.
[00:52:17] Yeah, this might come up a bit during this stream, but I am not going to focus too much on the remix-like features that we have in Solid Start.
[00:52:26] I suggest a solid start stream, honestly.  We show how we do progressive forms.  We show how we do kind of loader and like...
[00:52:35] multi-action type patterns and stuff. It has, Solid Start and Remix have a lot of the same features, just done a little bit differently.
[00:52:42] *sniff*
[00:52:46] Yeah, you guys are asking great questions, and these are the kind of questions that
[00:52:50] I...
[00:52:51] need good answers and we've been working on them. David who's in the chat in the community here, has been working on thinking about how we can package up something to help people convince stuff. This is an interesting thing. Personality wise, I'm a CTO, not a CEO. So just keep that in mind with my answers. I'm trying my best.
[00:53:13] But I am I get excited about the technology this kind of stuff. I'm not very good at so  I
[00:53:21] we're gonna we're gonna get there um but it's not something that i am i'm i'm
[00:53:28] I have the best answer for you right now.
[00:53:33] Yes.
[00:53:34] You have to spread the religion.  Oh, man.  That makes me think of Svelte for some reason.  I don't know why, but yeah, I hope religion is not the term that gets associated with  us necessarily.  But...
[00:53:49] anyway uh let's let's let's continue on a bit here um i'm again gonna look at twitch chat to  make sure i didn't miss anything really important like juraj 98 subscribing at a tier one thank you  so much and uh
[00:54:03] Yeah, I'm sorry, I should be doing cool stuff and emotes and things that will help
[00:54:07] subscribers do stuff but I know nothing about Twitch. Oh and AJ, he's been gift subbing people,  Nifty Nate. Oh man, this is, see this is why I need to look at Twitch. Okay.
[00:54:19] Awesome. Okay, let's keep on going.
[00:54:21] This is actually kind of crazy. This is probably most people we've had watching on Twitch.
[00:54:26] *laughs*
[00:54:28] -
[00:54:33] Okay.
[00:54:38] Yes, Cloudflare Workers was the first adapter that I made with Solid Start, if you're wondering. It was the first demo. Vite 2 was dropped in February. I made the streaming hacker news from the Edge demo with Cloudflare in March. It was literally like the next month.
[00:54:53] um
[00:54:54] So yeah,
[00:55:00] Yeah, it's good stuff.  Oh, okay.  Here's the thing.
[00:55:03] Did you watch, anybody here watched Theo's last stream?  I tend to put Theo's stream on in the background when I'm working on code.  They're...
[00:55:11] He can ride like an hour on a stream just interacting with the chat.  And more and more people come in, more people interact.  It's like people want to be part of the experience.  I watch that and I'm always amazed because like...
[00:55:25] He hypes it up and he's talking in the chat  and I just keep on watching the viewers just go up and up and up and up.  And you're just like...
[00:55:33] Wow. And then he's like, okay, I think I'm ready. Here's my rant. And then it's like, focus for 10 minutes.
[00:55:39] Like, you know, and then it's like back to just on the chat and it just
[00:55:42] up and up and up. It's
[00:55:44] I think...
[00:55:46] It's something that I'm aware of now.  I don't know if that works for me.
[00:55:51] But it's honestly really cool stuff.
[00:55:55] It's chaos.
[00:55:58] Oh, great. But see, I'm talking the chat right now and my viewership's going up. So I mean, I don't know.
[00:56:05] Maybe that's just a coincidence.
[00:56:07] *fart noise*
[00:56:08] Let me make sure I didn't miss anything, like some hidden raid or something.
[00:56:12] Because I, you know.  All right.  All right.  Let's keep on going.
[00:56:19] Uh...
[00:56:22] Alright, so where were we? We were talking about solid 1.6?
[00:56:26] So yeah, that's like most of the article except for the other cool stuff that I want to show off today.
[00:56:31] - Okay.
[00:56:32] Let's talk islands and partial hydration. Let me actually get up.
[00:56:36] Let me try that again.  Give me a banner.
[00:56:39] islands
[00:56:44] partial hydration
[00:56:47] at Banner.
[00:56:48] OK, cool.
[00:56:50] All right.
[00:56:51] Let's try this again.
[00:56:53] So let's talk Island's partial hydration now,  because this is a big part of the work that we've been doing for solid 1.6.
[00:57:00] And...
[00:57:00] So
[00:57:02] Um...
[00:57:05] Sorry, Chad is so distracting. Hook me up with one of those t-shirts. Fred came in like Batman with those black t-shirts. Honestly, you guys, you've seen this? I got this very, very cool shirt yesterday.
[00:57:20] Um,
[00:57:21] It is...
[00:57:22] Awesome. I am so happy about it.
[00:57:25] Thank you.
[00:57:26] Um...
[00:57:28] Yeah.
[00:57:30] Yeah.
[00:57:32] Sorry, uh...
[00:57:34] I mean, it just...
[00:57:35] You have it.
[00:57:36] Well, yeah
[00:57:41] Yeah, that is a clean shirt.  And I was going to talk about...  I mean, maybe this is a good time because Astro definitely popularized islands and...
[00:57:50] partial hydration.
[00:57:52] So...
[00:57:53] yeah no uh big fan of the work at astro obviously astro plus solid is
[00:58:00] been basically the ultimate combination, the peanut butter and jelly. Um, so, you know,
[00:58:06] What did I put?  What did we do?  BFF, Blazonly Fast Friends.  You know, like...
[00:58:12] Big fans of Astro here. And...
[00:58:16] Also big fans of Marco here  I often hear Fred to talk about history of Astro and Astro's kind of like inspiration came from Jason Miller's article  Which was kind of influenced by the work that Etsy was doing the two islands back in 2019. As it turns out  this technology kind of existed back in  2014 in a different framework from eBay that I happened to work for eBay  So I know about this where others may have not known about it, but essentially
[00:58:44] eBay
[00:58:46] had
[00:58:47] I mean, I'm not making this stuff up.  Like, let's say asyncfragments...
[00:58:53] 2014, let's look what I find.  Async framework, discovery progressive HTML.  This article is actually mostly about out of order streaming.
[00:59:02] Um, but
[00:59:04] It also talks a bit about how...
[00:59:07] Marco kind of like swaps up in.  Basically, the takeaway is,
[00:59:12] Marco invented suspense back in 2014.
[00:59:15] But they got their influence from an older
[00:59:19] believe it or not, Facebook technology that was done in PHP called BigPipe. And so influenced  by the exact same inspiration that influenced server components, essentially, Marco built  their own version in JavaScript back in 2014.
[00:59:37] So, uh, this both out of order streaming in this Marco years and years ahead of everyone else. And I had the,
[00:59:46] great pleasure and fortune of working with them for the past two years to learn all their secrets before going off and doing doing a solid pretty much full time.
[00:59:55] so
[00:59:57] Sometimes when I make this comparison,
[01:00:00] - And people go, "Oh no, that's completely different.  "You know, server components do different stuff."  And yeah, sure, server components do different stuff.  But,
[01:00:07] the...
[01:00:09] how should I put it, like the reason for them  and the mentality for them comes the same way.  Even the mechanics of how the rules work
[01:00:17] between islands and server components are
[01:00:20] basically the same. There's some key differences, and this is probably worth a little Excalibur,  but you know, because if this is your page, oh, that's a very thick stroke. What am I doing here?
[01:00:33] Okay.
[01:00:34] This is your page.
[01:00:35] And you're like, "Okay, whatever."
[01:00:39] Let's, uh...
[01:00:40] Let's actually keep some black in here.
[01:00:43] Let's put this header in here that never really updates.  Let's put in a sidebar.
[01:00:49] that also never really updates
[01:00:52] And then
[01:00:54] You know, I mean,
[01:00:55] Am I making like a Twitter-like layout? I don't even know.  Okay, let's make a panel that's like the header.
[01:01:03] And then...
[01:01:05] Let's make...
[01:01:06] something here okay so this looks like a website
[01:01:09] And the key...
[01:01:11] revelation of islands or
[01:01:13] Partial hydration was that, you know, it's okay that...
[01:01:18] there can be some stuff like this in here.
[01:01:20] Maybe, where's our cart button?  Maybe, maybe.
[01:01:24] We got some sections that are interactive.
[01:01:27] But like all this black stuff doesn't need to ever like come to the client we can like send it once server render it and then only need the JavaScript for these like couple little things  That's what islands and partial hydration is. It's it's it's not about some people say partial hydration  They mean and they think about something called progressive hydration where like eventually hydrates. That's not what's going on here  It's literally like these parts are shipped. This stuff is not shipped and  and
[01:01:50] The difference between islands and React Server components is,
[01:01:55] in islands, essentially, you're stuck with this. You serve the page and you do this stuff generally. And then
[01:02:01] When you go to another page, it's an MPA, and you do this all over again.  Send the static stuff and just send the JavaScript you need.
[01:02:06] With React Server Components, it's possible to swap the black stuff out
[01:02:11] and keep the green stuff.
[01:02:13] essentially.
[01:02:15] using this hybrid client-side routing. That's the big difference.
[01:02:22] Right.
[01:02:24] And some people might, I'm seeing in chat someone comparing this stuff to micro frontends.
[01:02:29] Um...
[01:02:30] And
[01:02:32] And I don't want this comparison to be made to micro front ends. Um,
[01:02:38] right i i understand where this came from uh and someone actually asked me this question um on twitter
[01:02:44] and
[01:02:45] I mean, maybe I can find it. Jacob,
[01:02:49] actually literally found the perfect quote of me answering the difference. I actually  forgot that I had such a good answer for it, but I'm probably not going to be able to find  this right now off Twitter if I look for it. So let me try and remember what the answer is.
[01:03:05] This
[01:03:07] is only concerned...
[01:03:09] with shipping the least amount of JavaScript. Sure, these things can be independent, so potentially, like in Astro, you can have a different framework in each one of these little green boxes.
[01:03:21] That's not the goal.
[01:03:24] That's cool.
[01:03:25] But the goal here is to shrink down...
[01:03:29] the size of the green areas so you have less JavaScript.
[01:03:32] And when micro frontends, the goal is let's have a whole bunch of teams work together on the same page, you know, use their own thing, do the thing. Like you don't really want two different frameworks in here, because that's like actually kind of terrible, because now you're loading two frameworks, twice as much JavaScript, you know.
[01:03:48] But
[01:03:49] Like...
[01:03:49] If you have an MPA to some degree, who cares? You go to the next page and it's a reset. So one page can have React in the green sections, the next page can have Solid in the green sections. We don't care, right?
[01:04:00] So it's not really micro front ends, at least not the intention. I realized that
[01:04:06] Like,
[01:04:07] The main reason I don't feel this is like micro frontends is even though this is not a restriction perhaps of Astro the authoring experience is set up so that you like you're still feel like you're in a single page like you're like okay I've made a page and these are my pieces and I pull them in. Micro frontends the goal is like I want to separate this code as far as possible so this team doesn't have to talk to this team.
[01:04:24] So I don't see them as the same sort of thing.  There was a Cloudflare article about micro frontends this week  that we'll cover in this week in JavaScript  that can maybe touch on this topic again a bit later.  But it's not...
[01:04:36] they're not really trying to be the same thing.
[01:04:44] Right.
[01:04:45] So
[01:04:46] We didn't call them islands though, we called them boundaries, but man, it's hacky as hell.  Okay, so...
[01:04:52] What's the difference between hydration and partial hydration?
[01:04:55] The biggest difference is
[01:04:58] All of these boxes are green.
[01:05:00] When is hydration?
[01:05:01] And when partial hydration, only these little boxes are green.  That's the difference.
[01:05:06] Like, what is it, Marco.com.
[01:05:11] Nope.
[01:05:13] MarcoJS.com. It's funny because I called it MarcoJS and the guys got on my case, but yeah, okay.
[01:05:19] I got a nice, I got an image for you.
[01:05:22] This little thing now, can I open this in a new tab?
[01:05:26] I don't think it's actually an image. I think Michael programmed this mad scientist that he is. These things that look like images are actually like live code doing them.
[01:05:38] When a page normally loads, see these flashing red things, you kind of top down, kind of go through the hierarchy and you hydrate all these red things, right?
[01:05:47] So it's like, okay, even if it's static, you have to re-render the React app or Solid app or whatever when you start up the app.  And you end up, even though you don't make new DOM nodes, you end up creating all the components again, essentially, to initialize the state and bind them to the right DOM nodes.  With partial hydration or islands, you literally just do this.
[01:06:04] So you only need the JavaScript for just this.  You don't need the JavaScript for all of this.  So it's like, if you've ever seen...
[01:06:11] Let's let's
[01:06:12] Let's do the Astro.build homepage here and give props to Theo again.
[01:06:21] He needs more props, right?
[01:06:26] Next.js Astro 7KB. This kind of switch, to be fair this is not exactly fair. To my understanding this is Preact. I don't know that this is Preact. I think this might be React. I think they might have snuck a React to Preact thing here.
[01:06:39] Right, Theo?  Because, like, we...
[01:06:41] Unless this is just completely static and that's what's being shown here.
[01:06:45] Um...
[01:06:48] uh
[01:06:50] I don't actually, I'm not actually...
[01:06:54] Yeah, it was entirely static, right?  So this is the thing, Astro starts with basically nothing,  and React starts with 70 kilobytes.  So what I'm getting at is,
[01:07:05] a better example
[01:07:07] might be
[01:07:09] A Hacker News demo, let's say so something like I don't I mean I what do we got here like?
[01:07:16] Was it next...
[01:07:18] Hack news. Okay, here we go.
[01:07:21] This page doesn't need interactions with the back comparison, but this one does. We got some comments that we collapse, right? If I load a page like this,
[01:07:28] and I do it in next, I get 84 kilobytes of JavaScript to do all this lovely stuff, okay?
[01:07:33] If I go to the same page in an astro with solid,
[01:07:39] thing
[01:07:39] and go in and do this kind of thing, I get 4.9 kilobytes.  And sure, this page is very static.  It only has this kind of interactivity.  But we found at ebay.com when we actually did this stuff,  we could reduce 80% of JavaScript this way.
[01:07:53] even more on some pages.  This is why eBay went this way.  It just reduces huge amount of stuff  for when you don't really need it.
[01:08:02] But the trade-off is,
[01:08:04] When I navigate,
[01:08:06] You're gonna see...
[01:08:07] this thing, because we're in a multi-page app because
[01:08:12] How do you not shift the JavaScript that the browser needs to render?  Right.  That's that's the whole thing.  You can't like do islands really in a single page app because you need to be able to render the next page.  And if you need to send the JavaScript and you might be like, well, we can send the JavaScript later.  Right.
[01:08:27] But it's weird, it affects the bundling, so no one really actually does that.
[01:08:31] So.
[01:08:32] And I mean, perfect example is,
[01:08:35] You're on one page.
[01:08:36] You go to the next page and now you get all the JavaScript for that, let's pretend.
[01:08:40] And if you go back to the original page, originally you only need that some JavaScript, but now you need all the JavaScript you're navigating back. Like there's a bunch of complexity.
[01:08:47] And which is why we've never really seen
[01:08:51] Islands in a single page app
[01:08:53] React server components change that conversation. What I'm going to show you today changes that conversation. But I wanted to kind of give this focus to partial hydration and Astro and Marco. Exactly, right?
[01:09:06] Yeah, I mean, there's a reason...
[01:09:08] eBay wasn't allowed to slip. We had a Java backend and it was like no.
[01:09:12] If you want to move full stack JavaScript, you can't lose any page speed.
[01:09:16] That's a very different motivation than React. They were getting created at the same time. Like 2012, they were creating React Facebook and eBay was creating Marco at the exact same time. They just were solving very different problems. I love this. There's this great Sunil interview, I think it was with Swix, and he was like, React isn't doing this for SEO. They don't care about SEO or whatever. It was really funny. It was like,
[01:09:42] Um...
[01:09:43] I'd have to dig it up sometime, but I think it was a Swix Sunil interview. It was awesome.
[01:09:49] But...
[01:09:52] Yeah, there's a question about about quick here.
[01:09:56] Jack.
[01:09:57] Now it's with you and the episode.  Yeah, well, here's the thing.
[01:10:01] Quick...
[01:10:02] can in theory, and I call Quick the first transitional framework, because Quick in theory could just load the JavaScript you need.
[01:10:10] and then on the next page load all the JavaScript.  But even QUIC doesn't want to do that really.  So you see QUIC being used the same way as Astro is  in that multi-page thing.  So QUIC is just a more granular automated island system.  Marco is also an automated island system.  So yes, QUIC is very similar to these sort of frameworks.
[01:10:29] Like if you notice here on my Astro build,
[01:10:33] there's no JS here, like no JS. We only needed the JS here because we needed
[01:10:39] to do this, right?
[01:10:40] And if you look at my Quick City...
[01:10:43] Uh...
[01:10:44] version of this app other than some service worker thing which you can basically ignore.
[01:10:50] Essentially on this page, we don't really need any JavaScript.
[01:10:53] And then when you go here,
[01:10:55] Well, they don't send any JavaScript, but
[01:10:58] when I click this,
[01:11:00] There's my 17 kilobytes of JavaScript.
[01:11:02] Right?
[01:11:03] So, um...
[01:11:05] Yeah, I mean, it's an interesting...
[01:11:09] thing is the quick framework 16 kilobytes and then our one component is there so just kind of
[01:11:15] If you're gonna interact with your page,
[01:11:18] the JavaScript will come. So that's why there's a lot of looking into like strategies. Because  like honestly on this page I would have preferred if it was preloaded. I haven't configured Quick  City probably to do that properly. So I need to figure it out. But you know I don't also don't  really want to worry about that too much. Like for a simple app like this, this 4.8 kilobytes  that I have here is really all I need. I don't need to worry about it. I didn't need to do
[01:11:43] I've got a smaller page and like
[01:11:47] It's the hydration savings of QUIC that's interesting to me. And on a page like this, the hydration cost probably isn't that bad. In fact, Astro score is the highest on this particular demo, higher than QUIC, higher than Marco or anyone. So...
[01:12:00] Yeah, I mean, it depends.
[01:12:02] Your mileage will vary, but just keep in mind, if it's interactive, the JavaScript needs to get there.  So the mentality is actually the important part because you've got to ask yourself the question.  Am I building an app which expects all the JavaScript to be in the browser?
[01:12:15] And the answer to that question is becoming more and more no, because it's the mentality that's killing us, not the implementation.
[01:12:23] That's why JavaScript keeps on growing up. We make smaller frameworks like Svelte and Solid and Preact that are super small.
[01:12:30] I showed you Nexus 84. If I show you
[01:12:34] What Svelte kit?
[01:12:36] Um...
[01:12:36] Let's see.
[01:12:38] Yeah, yeah. I made the demo in SvelteKit. If I show you SvelteKit, it's 20 kilobytes.  Like, this is a significantly smaller, right? And if I show you, what is it, a solid...
[01:12:49] start HN or something, yeah.  It's 14 kilobytes.  These are significantly smaller than the next example.  And we're getting to the Astro solid range,  like five kilobytes or whatever.  But, and this is a simple demo.  You gotta think about it.  The difference is the scale.  This is such a simple demo.
[01:13:09] when you have...
[01:13:11] something like this.
[01:13:13] you know,
[01:13:14] You might add more green things, but you also add a lot of black things. I find depending on the type of site you are this this racial
[01:13:22] maintains like even eBay something the biggest e-commerce keeps that like 80 20
[01:13:27] balance even as it gets more
[01:13:29] more complicated.
[01:13:31] I don't know, let's look at eBay.com maybe.
[01:13:35] You know, like
[01:13:37] a lot how much interactive stuff is actually on this page.
[01:13:41] Thank you.
[01:13:42] It's an interesting question or actually maybe a product listing page.
[01:13:47] You can see the streaming working there, but--
[01:13:49] Um...
[01:13:53] Yeah, I mean, this is sort of the things that motivate this.
[01:13:58] Um...
[01:14:00] Yeah. And
[01:14:01] What I'm going to show you today is a bit like IELTS, but we've taken it
[01:14:04] or sort of like turbo, but we've taken a bit further.
[01:14:08] It's quick islands, not in the same way that Marco isn't really islands.  They don't explicitly say this is an island.  Their compiler figures it out automatically, which is the same for Marco.  So I don't usually call them islands, but they're definitely considered partial hydration.  That's the category.  Astro...
[01:14:24] Marco, Quick, this new stuff that I'm showing on Solid Start, mostly fall under this same
[01:14:30] multi-page app category, except, um,
[01:14:32] I just said,
[01:14:33] What's interesting here is taking this further.
[01:14:36] Yeah.
[01:14:38] Thank you.
[01:14:39] Thank you.
[01:14:42] Like
[01:14:42] Mm-hmm.
[01:14:44] Oh yeah.
[01:14:45] Yeah, I update my browser fairly often though.
[01:14:56] Yeah, exactly. And the motive. Yeah, this is thing. It's all hero six. It's never going to be optimal for every experience. And you have to decide what
[01:15:03] customers and what you're aiming for. A lot of e-commerce, like we had a Taylor who was working on the Kroger rewrite, that page load stuff is really, really, really important to them because they're on Google.
[01:15:17] dot com and someone's like I want Nike  and
[01:15:22] They want to be the first thing that shows up here, right?  And then people are going to click and their experience is based on clicking into that experience.  That's like a big challenge.
[01:15:31] funnel for them. So Google ranks this stuff based on page performance.
[01:15:36] Actually.
[01:15:37] That's one of the things, your listings on the Google search are actually affected by page performance.
[01:15:42] Um,
[01:15:43] And
[01:15:45] essentially...
[01:15:46] You're incentivized...
[01:15:48] Because of this experience where someone has to click into your site and you're like, okay, where do I want to get them? I don't know.
[01:15:54] Let's go to Nike.com.
[01:15:56] - Thank you.
[01:15:58] What...
[01:15:59] I mean, I got a fast internet.  What if that took like 15 seconds?  I might leave, you know...
[01:16:05] before I even look at the product. This is the, this is sort of the things that incentivize this  kind of stuff for that. But that's very different than like, say, if I was making a social media app,  I don't really care.
[01:16:15] um
[01:16:16] so
[01:16:17] Yeah.
[01:16:18] Okay.
[01:16:21] Yeah, and
[01:16:22] And you can do analytics, right? One of the cool things Qwik is looking at is automating those analytics for prefetching.
[01:16:30] But...
[01:16:31] Here's the question, I think at a certain scale,
[01:16:35] Okay, it's interesting. Like...
[01:16:38] At what point does automating this to figure out this
[01:16:44] Compared to like...
[01:16:46] using the analytics and just manually doing the obvious.  You know what I mean?  And like at what scale complexity does that matter?  Like if you're already eliminating like 80% of the code...
[01:16:56] How you manage that last 20 is literally the last 20% you know what I mean? I
[01:17:01] So how much does that impact how you design or approach your solution?  This is why I'm questioning these things and why I'm building this stuff.  Because I kind of want to understand...
[01:17:09] what trade-offs are worth it because undoubtedly,
[01:17:12] systems like
[01:17:14] Quick are very good at what they do.
[01:17:16] Systems like Marco are absolutely incredible what to do, but this is a game of weighing trade-offs.
[01:17:25] Right. Every MPA can support a spa. Ben Holmes, he made a solid single page app on top of Astro to show he could. And that was a fun experiment.
[01:17:38] And the reason is...
[01:17:41] mpa like every website is an mpa in a sense that every website ships a page right so in that sense  i mean might not be multiple page but the web starts with shipping a page and if the web starts  with shipping a page you know
[01:17:52] you can always make a single page app or JavaScript app on top of
[01:17:57] that page. That's my mentality around it. So, um,
[01:18:02] But they could see, and that's the thing, they could theoretically support a single page app, but then you lose all the benefits.
[01:18:08] because then you're shipping all the JavaScript and that's what they're trying to avoid. So that's why even though
[01:18:12] even with quick's incredible lazy loading-ness of being able to like chop it into a billion pieces and load what you need, they still don't really want to load that client side router.
[01:18:22] You know, that if it would cause you to have to render the whole next page in the client, you don't you don't really want that.
[01:18:32] Yeah, yeah, this is a retroactive thing. Yeah, it's so funny. I had to explain what an MPA was to like my manager at eBay and he's like, isn't that just a website? And it's like, yes, yes, it is just a website. Okay, so...
[01:18:45] yeah,  this is kind of setting the context context because for the longest time,  when the MPA partial hydration stuff came out,  people were like,  um,  um,
[01:18:55] Oh, so like next.  And we're like, no, no, no, no.  So it's like static rendering next.  And it's like, no, no, no.  I mean...
[01:19:00] If you static render...
[01:19:02] single page app and then turn off client side routing so you have an MPA.
[01:19:08] Um,
[01:19:08] But it's probably like the worst MPA you've ever made because like you're taking the full cost of the JavaScript.  You don't need to.  It's just like, why would you ever send any more JavaScript than you need to?  Why don't you just send the green parts?  Back in the day, it was those green parts were jQuery, right?  Like they're like what we needed to.  This whole hydration was something we invented with declarative libraries because we made the tree.  We made the component tree.  Now state and components are all tied together.
[01:19:38] in the browser.  Like this is--
[01:19:42] in the same way MPAs are a fancy word for how we did web dev back before single page apps,
[01:19:48] hydration
[01:19:49] is also the exact same thing.
[01:19:53] Thank you.
[01:19:56] Oh man, don't get me started on Alex Russell. It's like this split between someone who's so right and then so irritating.
[01:20:06] leap.
[01:20:07] Anyway, um...
[01:20:10] I'm sorry.
[01:20:11] *laughs*
[01:20:18] Yeah. Okay. So, um, yeah, I mean, it's, it's, it's, it's, it's, it's, it's, it's,
[01:20:24] I will say one more thing on the Alex Russell thing.  It's hard when you care so much about this stuff.
[01:20:30] And you watch
[01:20:32] the industry just kind of
[01:20:33] go off a cliff, like a crazy place and you're just like, "Look, I've been warning you, you know, like ringing the town bell, you know, the town crier, you know, the wolf is here, you know?"
[01:20:45] Then...
[01:20:47] you know,
[01:20:49] No one listens. No one listens and it just keeps on going on eventually until like...
[01:20:54] Like, you...
[01:20:55] Like the whole situation is just...
[01:20:57] seems impossible. And I, I, I,
[01:21:00] I think he had a recent tweet that I probably won't look on this week in JavaScript, but essentially saying like, oh, it's now that the thought leaders care about the stuff.  Like he basically took offense that like that react and apologize for all the evil that is caused and stuff.
[01:21:14] It's like...
[01:21:17] It's hard to separate that when you're so passionate about this because React became an affront to everything he believed in.
[01:21:24] just releasing server components doesn't fix that. Um,
[01:21:28] but
[01:21:30] Yeah, I don't know. It's interesting.
[01:21:36] Anyway, thank you for distracting me.
[01:21:45] partial hydration is having the hydration script know specifically deep in the DOM which nodes to take over and add
[01:21:51] things that click on? Yeah, yeah, this is the thing, right? But
[01:21:56] Even with partial hydration, there's still hydration in the term.  Something like resumability, which Quicken and Marco have been working on, don't actually hydrate.
[01:22:03] Um,
[01:22:04] which is really cool. They don't actually run stuff up front.  Eilind's architecture and the stuff I showed you today does run stuff up front.
[01:22:12] How big that hydration cost matters varies on the amount of interactivity.
[01:22:16] I think it's a last stage optimization, but it's one that I'm very interested in.
[01:22:21] But,
[01:22:22] I'm approaching it from the other side. I want to look at the experience and look at
[01:22:27] where we get to be and then we can talk about the optimization because I think Quick and Marco are on to really powerful things with resumability. And I think it's clear why they're important once you see what it is.
[01:22:38] I'm showing you but until you see what we've been working towards, it doesn't make sense for most people. It's the same reason that like react server components haven't really made sense for a lot of people. It's kind of infuriating actually. My react server component videos are like my worst charting on YouTube, you know, in terms of views and stuff. It's like no one...
[01:22:55] No one no one cares. Um
[01:22:57] Maybe that will change coming up, but it's kind of crazy that
[01:23:03] I do a video on next or next or whatever, or any other topic reacts over components are just like, you know,
[01:23:11] So...
[01:23:14] Okay.
[01:23:15] So,
[01:23:16] Partial hydration, okay?  I'm hoping this is a decent enough interaction.  I have covered this on other streams, but I just want to kind of put this into context because...
[01:23:23] What we ended up doing, as I said, with SolidStart, was something kind of cool that I've shown in streams before, but...
[01:23:29] Um,
[01:23:30] We might as well just...
[01:23:32] do it live here. Quick, quick, quick, quick, quick, quick. Do I not even have it open right now?
[01:23:38] I have Quick City open apparently.  Let me see if I have it here.  I'm probably also out of date.  I've been doing all my work
[01:23:47] on
[01:23:51] on my other computer, so let's pull
[01:23:54] and make sure that we're up to date on solid start here
[01:23:58] Let's go back to main. 374 behind. Beautiful.
[01:24:04] okay now we're up to date let's let's give this a good old p and p yeah okay so what we're gonna do here
[01:24:11] is
[01:24:11] I'm going to actually play with the Hacker News example.
[01:24:18] While we're waiting for this, you can see this very cool to do MVC that's done completely  progressive and enhanced with forms.
[01:24:26] jewel on that for a second okay cool that's not what we're covering today though
[01:24:29] Um,
[01:24:30] So
[01:24:31] All right, so what I want to do here is I want to, we're going to be doing a lot of
[01:24:36] production build and start instead of doing dev because I want to show the JavaScript bundles and stuff as we go.
[01:24:41] So let's go into, I'm just gonna like go right into the  examples folder into the Hacker News example.  And we're just going to go npm run build
[01:24:51] or it's PMPM, I can't remember, whatever.  And then we're just gonna go PMPM start, okay.
[01:24:57] Start.
[01:24:58] and
[01:25:00] Um...
[01:25:02] Oh... okay.
[01:25:05] that's right  because it's
[01:25:06] thing and i'm just going to bring this across
[01:25:09] into here and
[01:25:13] go to an actual route that has data, and here we go. Okay, unsurprising.
[01:25:18] So...
[01:25:20] This is like...
[01:25:23] our client side app.
[01:25:24] And if I refresh our page, you're going to see that
[01:25:27] Oh, this is non, this is gzip, not broadly,  but it looks like SolidStart has gained some weight here  on our HackerNews demo.  It's always smaller on Netlify,  but it looks like we're up about one kilobyte on this demo.
[01:25:41] Let me double check on the main page.
[01:25:43] Yeah, we're up about a kilobyte on it. Okay, whatever. We added some features. But, um,
[01:25:48] What I'm getting at is this is our typical
[01:25:52] I...
[01:25:53] isomorphic rendered app and what you're going to see when we do this is
[01:25:59] I'm gonna use the comments page and actually I'm gonna get out. I'm gonna go in incognito tab because I
[01:26:06] Um...
[01:26:07] Bye.
[01:26:08] I get a bunch of Grammarly extensions and stuff, and I don't want that messing with our stuff at all.  Okay, so pretty typical page. You're going to see a bunch of these IDs and stuff that Solid uses Hydrate.  And the reason Solid uses these IDs is because Solid uses JSX,
[01:26:22] within a single pass thing, which is kind of insane that we can even hydrate at all.  This is unique to solid, this solution for hydration.  But what you can see is you can see all your your your data server rendered in here.
[01:26:36] So this is our list of comments.
[01:26:38] And yeah, those ideas are long, but they use it lovely.  And we could probably compress them ourselves a little bit to make it more readable, but  we'll get there.  Um...
[01:26:45] My point is...
[01:26:47] - Thank you.
[01:26:48] You can see the markup and the display of
[01:26:52] Like, where is it?  Here.  I'm just like digging in, but you can see these are...  This is basically all the...
[01:26:58] the comments for this page okay.
[01:27:01] And then we also
[01:27:03] because we need to hydrate, send all the data in this big data blob.
[01:27:09] That's that's fine.
[01:27:11] But...
[01:27:13] This is your typical single page app thing.  You send the data twice, you send the HTML,  it hydrates the whole page.
[01:27:19] And we're in business and we can navigate in our--  this thing doesn't spin.  We're just doing client side navigation.  And we need something called nested routing.
[01:27:27] Actually swap
[01:27:28] Only the...
[01:27:29] only child content swaps, the header never actually
[01:27:34] re-renders so to speak um and
[01:27:38] In solid, this is actually really important because we don't like re-rendering.  So nested routing is actually essential where it wasn't
[01:27:44] For React, they don't really care if you re-render that much.
[01:27:52] So, um...
[01:27:54] So yeah, I love using this demo because it has these nested recursive comments, which  make things a little bit fun because you're like...
[01:28:03] like you know how this works in a tree, right? If you authored this, you're going to have comments and comments and comments and comments. Like there's an actual recursive
[01:28:11] thing, like each comment component iterates over
[01:28:14] list of comments which renders more comment components, right? So,
[01:28:18] Um...
[01:28:19] Bye.
[01:28:20] I could typically show you that, but we actually...
[01:28:23] broke this apart a little bit. Sorry, I'm in the wrong one. Let me...
[01:28:27] get solid out of the way and
[01:28:29] Look at
[01:28:30] Solid start.
[01:28:32] Yeah, sorry. And we're going to go look at the Hacker News demo.
[01:28:36] I split the wrapper...
[01:28:38] from it, but like essentially
[01:28:41] you have a comment
[01:28:43] which is a list item.
[01:28:45] which then if there's any child comments,
[01:28:47] it iterates over
[01:28:49] those child comments and renders them. What you're going to know so is that I put a toggle
[01:28:53] around it. So that
[01:28:55] this
[01:28:56] Component has no state. It has no signals or nothing. This toggle component, which is much, much smaller, has the state and it's the thing that does the compression. It just changes the display, open, close, none on this thing. And this is very important. And this is something you do in server components. This is something you do in islands, Marco.
[01:29:14] Pretty much even quick, this is how you do it because
[01:29:18] You want...
[01:29:20] to ship the least amount of JavaScript.  So you actually want to separate the stuff that is basically static, like running all that text,
[01:29:27] from
[01:29:28] essentially the stateful part, which is just the button that clicks and, and,
[01:29:32] And compresses.
[01:29:34] so
[01:29:35] we can inject the children using props.children, but essentially those props.children get passed in
[01:29:41] from...
[01:29:43] from this from this parent or a comment component essentially see comment comment comment and
[01:29:50] toggle
[01:29:51] The children is this for loop. Okay, so hopefully everyone following so far. Okay, so I
[01:29:57] I did the split for, uh,
[01:30:00] A reason, right?
[01:30:00] So,
[01:30:01] One thing, and I've shown this before in demos, is
[01:30:05] If I go into this vconfig,
[01:30:08] And I go...
[01:30:11] Um,
[01:30:13] Well, if I go SSR false first...
[01:30:16] just for fun.
[01:30:18] show this and again I'm going to be using build because I want to actually
[01:30:27] show this stuff
[01:30:30] Um,
[01:30:31] this this now is actually client rendered app if in solid start if i do ssr false what you're  going to see is that script tag is gone with all the double data because as it turns out  if you client render something you don't need to send the data twice um
[01:30:44] because you fetch it over the network tab, you'll just be like, "Okay, fetch."
[01:30:48] Get me all the data.
[01:30:51] And
[01:30:51] your server rendered stuff is literally
[01:30:54] A.
[01:30:57] Empty body tag. There we go. See?
[01:30:59] Ta-da. This is essentially the way we built stuff with Create React app and how we used to build single page apps.
[01:31:07] you know back in the day so I just want to show this because there's a contrast here if you go pure client  You don't actually have the double data problem. The problem is you have to wait for all the JavaScript to come and
[01:31:18] before anything happens. Like, if you look at this timeline,
[01:31:21] Um,
[01:31:23] Come here.
[01:31:25] the
[01:31:26] This...
[01:31:27] There's not much time spent on the server.
[01:31:29] and then the JavaScript comes and then we fetch way over here is when we're fetching, and then we wait for it and then it finishes. So like if I was to do like a, like,
[01:31:38] kind of this sort of deal.
[01:31:40] and zoom way in 'cause the page is super fast,  you're gonna see that we basically get there pretty fast,  wait for some JavaScript to load,
[01:31:49] then fetch the stuff and then do the rendering here at the end and then our LCP is out here. Okay, that's when we finish our paint.
[01:31:57] And overall, it's actually really really fast. This all happened in less than 200 milliseconds locally obviously, but
[01:32:04] Um...
[01:32:07] With this kind of situation, right?
[01:32:10] Like...
[01:32:11] we're sending all the JavaScript and if I look at the sizes in the network
[01:32:16] In JAS, it's gonna be the same in this case of 17 kilowatt, but it's ballpark the same. I want to point this out just switching from SSR to
[01:32:25] to, um...
[01:32:27] to like switching on taking a client rendered app and to making an SSR doesn't meaningfully impact your JavaScript bundle like just because your server rendering doesn't actually  make the size any different or make the execution I mean it makes it different because you're hydrating instead of rendering but like it looks very similar other than like the fact of like
[01:32:48] uh,
[01:32:49] like when...
[01:32:52] it happens, right? Client waits till the end to do the render. Well, I guess the Hydra and render it kind of at the same time. So it's just the difference is when you see the stuff. When it's client rendered, you don't see the stuff until the very end. When it's server rendered, you see the stuff right away, and then you can't interact with it to the very end. But otherwise, they're actually very, very, very similar. And this is fine. This is how Next and SvelteKit, and we all do this, and it isn't a big deal.
[01:33:16] But,
[01:33:17] let's play with a different option. I'm gonna go to Islands True, okay? And this option might
[01:33:24] maybe it should be called MPA True.
[01:33:27] Um...
[01:33:29] But essentially...
[01:33:31] Now we just say like,
[01:33:33] screw this, we're not sending the whole bundle. And I'm going to do this and
[01:33:39] We haven't perfectly trimmed it, but here, 4.5 kilobytes, okay?
[01:33:43] So if you look, this is now squiggling. This is like the Astro Hacker News demo I was showing you all a moment ago.
[01:33:51] And you're like, oh, wow, but the Astro one's 4.9.  Why is this one only 4.5?  Well, the reason is...
[01:33:57] These comments don't work because we didn't send that JavaScript.  Honestly, this JavaScript doesn't even need to be here.  It's not like we just haven't optimized for this case because literally this code doesn't even run.
[01:34:09] And
[01:34:10] You know...
[01:34:12] If you look, there's no...
[01:34:15] serialized data now. We're server rendering, this is definitely server rendered, but we're not sending all that data across, you know, like we were a minute ago with all the JSON data. And,
[01:34:24] will
[01:34:25] And...
[01:34:26] Uh...
[01:34:27] Yeah, let me look here.
[01:34:29] Um...
[01:34:31] If you look at it, all the hydration IDs are gone too, because we don't need them. There's some error boundary markers and stuff, but essentially all those
[01:34:37] ugly looking ideas we were looking at a few minutes ago are all gone too.
[01:34:40] uh
[01:34:42] So, like, what is another good one?  Yeah, this one's got more nesting up front.  We can inspect in here, and you'll see that...
[01:34:50] We're basically just server rendering some stuff. Okay? Thought terribly interesting. So what...
[01:34:56] We did.
[01:34:57] was...
[01:34:59] And this ties back to the release.
[01:35:02] Essentially, we're
[01:35:04] Solid...
[01:35:05] 1.6
[01:35:08] has
[01:35:09] Um...
[01:35:12] Sorry.
[01:35:13] These two new tags kind of internally called hydration and no hydration and actually no hydration has existed for a
[01:35:20] long time actually I just didn't really talk about it much but essentially if you if you take a no hydration
[01:35:28] thing, like in the playground or something.  Does it still compile?
[01:35:32] What's cool in the playground is you can actually see what we render, server render.
[01:35:38] Uh...
[01:35:39] Yeah, you won't really be able to see the output of the playground, so there's no point in me going here, sorry.
[01:35:45] I was just thinking about how the best way to show it.  But essentially...
[01:35:48] .
[01:35:49] -
[01:35:50] So when we turn the hydration off, there's no need for those hydration IDs.  So everything under no hydration.  You can picture that in island mode, we just no hydrated the whole thing.
[01:35:59] But
[01:36:00] What
[01:36:01] if we want some JavaScript interactive on our page. So I'm going to go in here and this is not
[01:36:07] this is not like the final version of this, but this is, you know, we're still working on the experience. But what if instead of importing toggle like this, we went like,
[01:36:15] const toggle
[01:36:17] equals unstable
[01:36:20] Island.
[01:36:22] And we imported it like...
[01:36:25] I guess I don't have co-pilot here or something. Anyways.
[01:36:27] We went like this, okay.
[01:36:30] - Thank you.
[01:36:31] Now we're just saying, like, actually...
[01:36:35] the...
[01:36:36] we're actually saying we want to hydrate this piece when we get to it. And what
[01:36:41] I'm gonna show this a little bit here,  'cause if I go into islands,
[01:36:46] folder in here and go into index.
[01:36:49] We have
[01:36:51] an islands component and you can actually see this little dance that goes on because
[01:36:57] hydration
[01:36:59] Wraps
[01:37:00] It's not really a custom element, it's just a
[01:37:03] We're just using a DOM element that we made ourselves.
[01:37:08] What it's going to do is it's going to stringify the props and we could probably do something smarter here like use SuperJSON or Solid Zone Serializer. We'll get there.
[01:37:18] Um.
[01:37:19] It's going to look for some rules, but essentially it's going to take this element and serialize the incoming props.
[01:37:25] and then it's going to render that element
[01:37:27] And then
[01:37:28] It's going to...
[01:37:29] essentially
[01:37:32] Bye.
[01:37:33] It's going to pass in...
[01:37:34] child the child the its child is gonna have a solid child with another element and then no hydration is going to wrap in
[01:37:41] the actual props.child that gets sent in so this way
[01:37:45] Any...
[01:37:46] Like when you render this toggle, essentially,  that I was showing you before,
[01:37:53] What ends up happening is,
[01:37:55] Inside the toggle it's hydrating and then it's not hydrating
[01:37:59] here. So anything that is passed as a child to an island actually belongs to the parent scope. So it's like server
[01:38:08] client
[01:38:09] server.
[01:38:10] And this is how that cool recursive trick works, because then it's
[01:38:14] Another comment, so we're still in server.
[01:38:16] we're still in server again, and then we go client, and then back to server again.
[01:38:23] Yes, this is the kind of basic mechanism, right?  Yeah.
[01:38:29] And the cool part is we know some things from this information of this, right? We knew not to include all those hydration IDs. So we cleaned up the markup. We also knew.
[01:38:38] that any resources
[01:38:40] And if you're familiar with us all, we have our own kind of use thing called create resource that is
[01:38:48] created
[01:38:49] on the server section doesn't need to be serialized because it could never be changed
[01:38:55] from the client, essentially. It can only be re-rendered on the server.  So for that reason, we can save serializing that data and only serialize
[01:39:03] The props, and if you look at this toggle component,  this toggle component, which is the client component,  has no props.  So we didn't need the serialized
[01:39:11] Anything. That's why we don't have the double data problem.
[01:39:13] Because we knew...
[01:39:15] that we didn't need to serialize it.
[01:39:18] Essentially, going back to our island that we had here,
[01:39:24] Uh...
[01:39:25] You can kind of see that we do this
[01:39:27] This part is mostly all that happens on the server side.
[01:39:33] But before we go too far, let me prove that this actually works.
[01:39:39] And this is the slow build, I'm sorry.  We will get to server components.  This is not server components right now.
[01:39:45] Islands like Astro, essentially, at this point.
[01:39:49] Where are we?
[01:39:52] Not this one.  Um...
[01:39:54] So
[01:39:55] do I have
[01:39:57] It's because I was here, okay.  So...
[01:40:01] Now...
[01:40:02] we can hydrate when we refresh.  We're still...
[01:40:05] doing full page refresh. This is basically the equivalent to that Astro demo that I showed before. So we the reason
[01:40:12] that
[01:40:12] the comments can't change is when we navigate to a different page, it doesn't happen on the client.  The only way to get new data for these comments
[01:40:21] is...
[01:40:22] to reload the page so we know we don't never need to serialize it which is why there is no serialization of there's that double data is not there so we don't actually serialize all the data for this and we only send
[01:40:34] the JavaScript.
[01:40:36] 6.3
[01:40:38] kilobytes here. When we deploy it, it's smaller. So right now I think we're like 0.2 kilobytes  bigger than the Solid Astro demo. It's like 5.2.
[01:40:46] something. 5.1  versus 4.9. It's...
[01:40:50] not terribly important,  but what I'm getting at is  we only need to send...
[01:40:56] this small bit of solid specific code.  So this entry thing is basically like the hydration stuff we need.  This web thing is essentially solid, four kilobytes of solid.
[01:41:06] and then 700 bytes for this comment.  And you can actually see when I undo it, this is our comment component.
[01:41:12] Basically, you can just see this is the compiled thing. Here's the click handler. Here's the collapsing comment thing.
[01:41:18] so
[01:41:20] Thank you.
[01:41:25] So where am I going here?  Yeah, so essentially...
[01:41:30] This is what Astro and Marco and
[01:41:35] Um...
[01:41:36] I've been doing for a very very very very long time and if you want to understand how the hydration works, it's a little bit more fun. I
[01:41:44] is that we...
[01:41:46] In our entry client,
[01:41:49] when it's in this mode, um,
[01:41:52] when it's in the start islands mode,
[01:41:54] we do something a little bit different.
[01:42:00] We call for each island we separately call a hydrate call. Okay.
[01:42:05] And
[01:42:08] This hydrate call,
[01:42:11] And you see there's no-- I guess we're not doing the JSX in here.
[01:42:15] But...
[01:42:16] this hydrate call creates a component
[01:42:19] And this component
[01:42:21] is
[01:42:22] the component that...
[01:42:24] essentially gets loaded. So let me show you. Let's look at the... Let's actually look at our island here for a second and see what's going on.
[01:42:31] So I'm going to inspect one of these.
[01:42:33] What you see here is this solid island has props which are nothing and then it has a
[01:42:38] the link to the JS asset that we need to load.  This might not be our final implementation here, but essentially
[01:42:49] Um
[01:42:50] It tells us that...
[01:42:52] and there's even a data load when prop,  but it tells us where the JS is.  So when we start up on Hydrate the page,  we gather all the islands,
[01:43:00] ensure that we unload the code. Solid's router is smart enough here to preload all the islands that we need for the current page.  Not run them necessarily, but preload the JavaScript, so it happens pretty quickly. But essentially,
[01:43:12] Um, uh,
[01:43:13] Uh...
[01:43:15] And we can set idle and all those kind of astro type things.  Not all of them.  Right now we only have idle and load.  But essentially, because we know this JS...
[01:43:26] We load it and it's down here. I made a
[01:43:31] queue. So we actually use a dead queue for request idle callback where we actually look at the time remaining
[01:43:40] Instead of making a thousand request idle callbacks, we batch them based on how much queue time is left. This is a little trick.
[01:43:49] Um,
[01:43:50] how long the browser thinks it has to run the queue.
[01:43:54] So, and then we run more of the queue.  So instead of doing like, as I said,  like naively just making a thousand timeouts  or a hundred timeouts here,
[01:44:03] we can kind of batch them
[01:44:05] on idle to do the Mount Island, which is the hydration work.  And all it does is take the component that it imported...
[01:44:12] there and then it does this fancy little thing on the children
[01:44:16] where it
[01:44:17] This is my little trick, where it gets the next element, which means it finds the children's hydration ID and...
[01:44:23] pulls it out and then
[01:44:26] Thank you.
[01:44:26] I'll explain what this is later, but on that child element, it gets the current...
[01:44:31] reactive context and writes it into the dom node and you might be going why why are you doing this  so essentially if we're looking at this
[01:44:38] This one has children, good.
[01:44:40] and we look at the list, we're going to find solid children here.  And it has one of those hydration key IDs.  You notice that inside the island to the children, we have hydration IDs outside.  We do not.
[01:44:49] It's going to grab that one, essentially,
[01:44:52] while it's rendering.
[01:44:53] And then it's going to
[01:44:55] on that, take the context for this one and stick it on here. And why is that important?  It's so that when you get down here and start this island again,
[01:45:02] we can pass that context
[01:45:04] to
[01:45:05] the next component.
[01:45:06] See? Owner?
[01:45:08] When you get to the next component, it does a lookup on itself and it walks up the tree and says, find me the closest child and grab the context off it. And what this does is it lets us use the context API.
[01:45:19] between unconnected islands that have like static content in between. So, um,
[01:45:26] I made a demo.
[01:45:27] of this actually, uh...
[01:45:30] Let's see if I have it.
[01:45:33] here
[01:45:35] Um...
[01:45:36] on the profile. I mean, we could possibly just remake it right now. How are we doing for time?
[01:45:45] 140? Eh.
[01:45:47] We could remake it if people are interested, but what I did was
[01:45:52] Where is it?
[01:45:55] Um...
[01:45:56] It's funny because I didn't
[01:45:59] I didn't
[01:46:01] um...
[01:46:05] I didn't like put a big screen up on it.  I was just like, not that...
[01:46:10] I started the tweet with
[01:46:13] Yeah, it's funny, I'm not actually seeing it right now, I'm like so blind.
[01:46:17] Not, not, not, not, not.
[01:46:21] To do to do to do to do to do
[01:46:25] Okay, here it is, this one.
[01:46:28] Okay.
[01:46:29] Thank you.
[01:46:30] Thank you.
[01:46:31] Thank you.
[01:46:33] In this demo,
[01:46:35] You know what? Screw it. Let's make it.  It's easier to show than to explain.
[01:46:43] Right. Like, instead of using the Hacker News demo,
[01:46:46] Let's go to the, where is it?
[01:46:51] The bear demo, like the most basic solid demo.
[01:46:54] And then let's like
[01:46:56] Go Islands
[01:46:58] True, right?
[01:46:59] And then let's...
[01:47:02] So
[01:47:03] What are we going to do?
[01:47:05] We have a counter component, right?
[01:47:07] Yeah.
[01:47:08] And then we have a root component
[01:47:11] And then...
[01:47:13] We got a bunch of extra crap we don't need.  Probably, let's go to index and...
[01:47:18] Let's put
[01:47:19] two counters on the page, right?
[01:47:22] And then...
[01:47:24] Let's make a...
[01:47:28] How do we want to do this?
[01:47:31] Let's make a counter provider. I'm just trying to think of how I want to do this. Let's go new file and
[01:47:36] counter
[01:47:40] provider
[01:47:41] dot tsx
[01:47:43] So
[01:47:44] And...
[01:47:45] Export default.
[01:47:49] function
[01:47:59] I could probably shortcut this a little bit, right?  'Cause it's just like,
[01:48:04] We kind of want to go like const. What do you want to do? const.
[01:48:10] um...
[01:48:12] Mmm.
[01:48:15] counter context equals create context
[01:48:20] Right.
[01:48:21] And then...
[01:48:22] We want to go
[01:48:24] counter context dot provider
[01:48:27] value
[01:48:28] equals
[01:48:29] What creates signal
[01:48:31] essentially, and just to keep myself honest, I'll put five in there or something.
[01:48:35] And then we want to put
[01:48:38] Props dot
[01:48:39] Not prop alias.
[01:48:41] props.children in there and you've
[01:48:45] TypeScript people just forgive me.
[01:48:48] It doesn't matter. Okay, so we do that, do that, do that. So we're making a provider doing that and then
[01:48:55] export...
[01:48:57] What's the one? Function use counter
[01:49:02] Um...
[01:49:04] and what's useCounter going to do? It's going to
[01:49:08] Oh.
[01:49:09] return use context
[01:49:13] um
[01:49:15] counter context, right? Okay. If you've used React, this should look pretty similar or familiar to you all. Okay. So,
[01:49:25] Yeah, okay, so this is fine.  So we have our counter provider that we export default.  We also have a use counter that we do here.  And then we're gonna go in here,  and we're gonna instead of create signal,
[01:49:33] We're just going to go...
[01:49:35] Use counter.
[01:49:38] Um...
[01:49:42] and then
[01:49:45] Yeah. And then inside of our
[01:49:49] App.
[01:49:51] We're going to have to...
[01:49:54] Wrap it with a
[01:49:56] counter
[01:49:59] provider
[01:50:01] Right?
[01:50:03] And don't get me wrong, you can also like globally do
[01:50:07] stuff like Astro's Islands, but I wanted to actually...
[01:50:11] show this specifically because I think it's more relevant when you're building apps.  So we have a counter provider that will provide
[01:50:18] count to these two counters and then we can't just import these regularly.  We want to actually make them both islands. So we're gonna go const counter
[01:50:27] equals on
[01:50:28] unstable island. Yeah, I do not have Copilot on this computer clearly.
[01:50:34] because it would have finished this before me already.
[01:50:36] and actually
[01:50:38] dot dot slash
[01:50:40] components/
[01:50:41] Counter.
[01:50:43] And then...
[01:50:45] Let's make that...
[01:50:46] provider also an island too.
[01:50:50] Okay.
[01:50:54] All right.
[01:50:55] Bye-bye.
[01:51:01] Did I miss something?
[01:51:09] Oh, yeah, TypeScript, people telling me, yeah.
[01:51:14] as signal
[01:51:18] Whether I need
[01:51:19] Number, yeah, okay.
[01:51:23] And then I actually have to import that from here.
[01:51:30] Okay, and I'm missing the function call.
[01:51:32] TypeScript to the rescue. And then it knows it's an accent and a setter. All right. See, TypeScript saves the day.
[01:51:38] For once. No, kidding.
[01:51:40] Um,
[01:51:41] Okay, now
[01:51:44] I'm trying to remember if we still have the CSS bug here.  There's a possibility that the CSS
[01:51:49] doesn't load the way that I want it to load.
[01:51:52] There was a bug at one point.
[01:51:54] And it's probably still there.
[01:51:56] Um...
[01:51:57] In any case, let's npm run
[01:51:59] No, not this one. Damn it, sorry.
[01:52:01] CD dot dot
[01:52:03] city bear.
[01:52:05] and root tsx, no sorry, beat config, burn islands mode, okay.
[01:52:10] npm run build
[01:52:16] NPM run start, okay.
[01:52:19] Thank you.
[01:52:21] Alright, and that's not my local app as much as I wish it was.
[01:52:25] My local app
[01:52:27] Should...
[01:52:28] Well, it looks almost the same, but you can tell there's an about.
[01:52:31] If all this worked right,
[01:52:33] Yeah, see how they're sharing context?
[01:52:36] But
[01:52:37] if you look at our network tab,
[01:52:40] It's seven kilobytes of JavaScript.
[01:52:43] Um...
[01:52:44] essentially...
[01:52:48] you saw the authoring experience, right? In my index, I have a counter provider
[01:52:54] that wraps a bunch of static stuff that I don't care about.  And then these two client islands in here, these two counters,
[01:53:00] happen
[01:53:01] to use the context that was provided in there.  And we have context through, right?
[01:53:09] But it seems to be working for us okay right now.
[01:53:11] Nikhil said he fixed it on another branch, but it looks like we're good. This is one of those things that I ended up implementing. To make this work in Solid was actually really easy, but I didn't have it before. Solid didn't let you set the owner on Hydrate. This one probably isn't even worth looking at the code. You can picture it. Solid's roots are
[01:53:36] are able to inject
[01:53:39] inject basically the
[01:53:40] owning contacts.
[01:53:42] So I just, as you saw, it was just a very, very simple
[01:53:46] exercise here in mount of...
[01:53:51] when we create the component, grabbing the child element and putting it on,
[01:53:55] And then...
[01:53:57] you know
[01:53:58] when we hydrate the parent than when we hydrate the child grabbing it.
[01:54:02] - Thank you.
[01:54:03] Did I implement this because Dan bullied me on Twitter?
[01:54:07] I honestly hadn't thought too much about it.  And then once he said, I was like, oh yeah, that wouldn't be hard to do.  This is also how we share context in solid element too.  Our web components actually work with context as well.
[01:54:17] So I was like, "Oh yeah, I've done this before. This is really easy."
[01:54:20] And he's like, "Oh, I've just never seen it before."
[01:54:23] And they're like, yeah, here you go, Dan.  This is how it works.  So...
[01:54:27] Okay, so you all are following hopefully so far. So we haven't really seen anything that fancy. Context like this works in Marco.
[01:54:36] I'm sure it works in QUIC too, because those frameworks aren't framework agnostic. It's easy for us to have these mechanisms. What's cool about this though is if you look at it,
[01:54:44] There's a custom renderer for Astro that uses fragments.
[01:54:47] Very much the same way this works. I can literally port the solid start code into Astro and we'll be able to get this in Astro. I'm pretty sure so
[01:54:55] Your Astro Apps will also be able to benefit from solid context work that I'm doing here.
[01:55:00] First of all
[01:55:01] specifically for solid.
[01:55:03] *sniff*
[01:55:04] Um...
[01:55:05] islands. Okay, so
[01:55:07] yeah and I mean you can see this is the whole trick right the whole trick here
[01:55:11] is
[01:55:12] Because solids hydrate.
[01:55:14] can be given a starting context and a starting render ID.
[01:55:19] All we have to do is take that hydration ID  that we generate automatically already  and just go hydrate from this point.
[01:55:25] It's like, give me the ID.
[01:55:27] giving the owner and it's like you never even stopped even though there's static stuff in between
[01:55:32] That's sort of how we get these seamless islands. And as I mentioned before, the authoring experience
[01:55:39] like
[01:55:40] This looks very familiar and in that Hacker News demo, I didn't actually have to change any of the rest of my code at all, just still works. You know, like when we go to the, we didn't look at this, but when we go to
[01:55:51] the route, we just create our resources. This is like Solids use that does the suspense stuff. And it's the same kind of idea.
[01:56:01] We're going to move back from the bear example and go back to our Hacker News example.
[01:56:06] Um,
[01:56:09] Now that I've demonstrated the context.
[01:56:11] because we're not done.
[01:56:14] So...
[01:56:15] uh...
[01:56:17] Yeah.
[01:56:19] where do we want to go next?  I mean...
[01:56:22] I could prove a couple cool things if people are interested in that.  Like one thing that was fun about the solution was
[01:56:29] Sure, this is fine for the
[01:56:32] We've been doing render async this whole time, but what if we want to actually stream the islands well? I
[01:56:36] It turns out we can do that as well, the way that it's implemented. We can do our...
[01:56:44] We can do our streaming renderer
[01:56:47] and
[01:56:48] Back on Hacker News, hopefully.
[01:56:53] It probably happens so fast you don't even see it. That's the fun part. Do we have a page with lots of comments?
[01:57:01] That's not enough comments.
[01:57:03] um
[01:57:06] 129 comments, is that enough on a refresh to see it?
[01:57:09] Nope.
[01:57:11] Damn it.
[01:57:13] this is the fun part.  I'm not going to...
[01:57:17] 222
[01:57:18] 328 maybe?
[01:57:21] Is that better?
[01:57:22] Why am I not...
[01:57:23] Let's do a performance.
[01:57:26] Why am I not seeing the streaming?
[01:57:30] That's not streaming, that's why I'm not seeing it.
[01:57:32] Am I in the wrong entry?
[01:57:35] Render stream, render stream, render stream, render stream.
[01:57:38] Okay.
[01:57:46] Thank you.
[01:57:49] Interesting.
[01:57:56] Huh.
[01:57:57] That's funny, this is the fun part when you don't prepare all the demos ahead of time.
[01:58:01] Um...
[01:58:02] It's very interesting to me that it's not streaming though, because we are literally on render stream mode, so for that to not
[01:58:09] be streaming
[01:58:10] is unusual, but
[01:58:11] We'll move on from that.
[01:58:14] Very confusing.
[01:58:17] because he
[01:58:18] It has no choice but to stream.  Okay.  All right.  So, um...
[01:58:23] Yeah, I guess I can't show the streaming.  Let's keep on going.
[01:58:28] Yeah, okay. So...
[01:58:32] I've showed streaming rendering on here before.
[01:58:37] So...
[01:58:40] Yeah, let's just continue on. Where was I?
[01:58:45] Okay, entry.
[01:58:48] Thank you.
[01:58:49] Right. So...
[01:58:51] a few months ago.
[01:58:52] Um,
[01:58:57] Ryan Turnquist, um...
[01:59:00] who is a core team member of Solid is now working also on Marco.
[01:59:07] created this really simple demo.
[01:59:09] where he showed it nested routing, right?
[01:59:13] like remix style routing, but server rendered,
[01:59:17] essentially. So it's swap out the server rendered pages. Okay. And, um,
[01:59:25] What Nikhil ended up doing, which I showed on stream before, is incorporated this
[01:59:30] into this Hacker News demo so that
[01:59:33] essentially
[01:59:35] we could...
[01:59:36] Server render the page.
[01:59:38] Have it hydrate.
[01:59:40] Um,
[01:59:41] And if we look at the network, we still  have a little bit more JavaScript, but over six kilobytes  of JavaScript.  But then we navigate to the next page.  See that no spinner.  This is client-side navigation.
[01:59:51] So essentially, you know,
[01:59:55] We go in.
[01:59:56] and
[01:59:58] We have the interaction JavaScript amount
[02:00:00] It's not changing here.
[02:00:01] but we are client navigating
[02:00:05] and as I mentioned, sharing context, doing all the stuff, but only shipping the JavaScript we need.
[02:00:12] We did the see these outlet things. It's basically nested routing.
[02:00:16] So,
[02:00:18] If I go here,
[02:00:20] It just switches that outlet and the trick to this is all our anchor tags on the page that are created with solids anchor
[02:00:27] Um,
[02:00:28] work even if they're not hydrated.
[02:00:31] So essentially we have global listeners on the anchor tags that even if they're not hydrated, they can trigger a client side router that
[02:00:41] if you want to see what we end up doing on the network tab.  And I have showed this off before, but this is all building to where I'm going at.  If I look at Fetch XHR here,
[02:00:50] Initial page is nothing because we rendered this on the server and everything and as I mentioned there's no
[02:00:55] Double data, right?
[02:00:57] Um,
[02:00:58] It will...
[02:00:59] We only send the HTML that we need.  But when I click here,
[02:01:06] The request...
[02:01:07] actually sends me
[02:01:09] HTML.
[02:01:11] And this HTML
[02:01:13] innerHTMLs
[02:01:15] This is as fast as you can get. This is like TurboLynx, but instead of being the whole page and diffing, we're actually just swapping out sections.
[02:01:24] Yeah, like
[02:01:26] This isn't diffing or doing anything fancy like React does.  It's literally just...
[02:01:29] replacing it, and then
[02:01:31] in parallel loading the new javascript we need like for the toggle
[02:01:35] Because if we start here, we don't have the toggle, right?
[02:01:39] go to the page, in parallel fetch the toggle, fetch the HTML,
[02:01:43] And then it's only that little bit of JavaScript we needed
[02:01:46] to hydrate it.
[02:01:49] And what happens if I click the back button?
[02:01:51] Nothing.
[02:01:52] Just works. So I mean,
[02:01:58] essentially, um,
[02:02:00] *laughs*
[02:02:02] Sometimes...
[02:02:03] People have found some bugs here and we have some scroll position issues we're still working through.
[02:02:08] But generally speaking, we send this kind of HTML,
[02:02:13] Um,
[02:02:15] format that replaces the stuff and then only hydrates and sends the stuff we need.
[02:02:20] I've been showing this demo, this is why I showed it at vconf. It's pretty impressive because the page is obviously very small, loads very fast.
[02:02:26] And this is the demo that you've all been looking at.
[02:02:30] And this is mostly what I want to show in terms of this today until this morning when Nikhil dropped some more bombs on me.  We actually created Solid Starts docs.
[02:02:39] Um,
[02:02:40] This way, our doc site,
[02:02:43] is using this right now.  And it's just wonderful because there isn't much  in interactivity here.  And when I load this page,
[02:02:50] I'm like, there's 47 kilobytes of JavaScript,  which actually, you know, I was like,  what the hell's going on here?  Until I realized actually when I looked into it  that like 30 kilobytes of it
[02:03:00] is this Angolia search.
[02:03:03] And then another nine is tippy, which is this thing.  So basically 40 out of the 47 kilobytes of JavaScript are like, so that we can support stuff like this, right?
[02:03:13] Um,
[02:03:14] But generally speaking...
[02:03:16] like,
[02:03:17] The Solid app is like
[02:03:19] no footprint and
[02:03:21] Essentially we get client side routing
[02:03:23] and
[02:03:25] you know,
[02:03:26] It's great for this use case. But
[02:03:28] Um...
[02:03:32] Where do we store the old HTML?  The browser takes care of it for us, is the best way to put it.
[02:03:39] Why is Angolia so heavy? I don't know. Most things
[02:03:42] or heavy, right?
[02:03:43] I...
[02:03:45] I'm not making this up. If you look at it, Angolia searches
[02:03:48] 29
[02:03:50] Where is it? JS3, whatever this thing is.  Skip minification because original files appeared to be already minified.  Okay, thank you for that.  Doc search, whatever this is, it's like...
[02:03:58] This is, this is like, maybe we can find a new
[02:04:01] search thing. This is not solid code. This is all the, this is the freaking search client.
[02:04:07] Okay.
[02:04:08] Um...
[02:04:09] 30 kilobytes, okay?
[02:04:10] 28.3 or...
[02:04:19] A hundred islands? Yes.
[02:04:20] But, um...
[02:04:23] But the thing is, I've done that test, if anyone's seen...
[02:04:28] scene stuff. I mean...
[02:04:31] Where is it?
[02:04:33] Someone was like, I've been doing this death test, I call it, where there's hundreds of islands on the page.  And I'm not going to run them all right now.  Again, I've done this on stream several times.  But if I remember correctly, someone asked me here...
[02:04:47] about
[02:04:48] how it handles...
[02:04:51] that.
[02:04:53] Yeah, how to handle the torture page.
[02:04:55] And
[02:04:56] We got an 85, and you might be going, okay, well,
[02:04:59] 85
[02:05:00] isn't a great score.
[02:05:02] But I want to remind you, when I ran this stuff, Marco5 got 76, Quick got 80,
[02:05:08] Um...
[02:05:09] Remix, Feltkit, and Next
[02:05:12] all got 38
[02:05:14] Sol Stark got 48.
[02:05:16] Um,
[02:05:18] *cough*
[02:05:19] like...
[02:05:21] Hundreds of Islands still beats Full Hydration.
[02:05:25] by a large margin both because of the reduction of hydration cost
[02:05:29] And...
[02:05:30] by
[02:05:32] the...
[02:05:33] and also by the reduction of serialization of,
[02:05:37] like all that data, the double data getting solved.
[02:05:40] - Yeah.
[02:05:41] If you had 100 unique islands, I think it's interesting at what point you have too many chunks for the browser.  I think that might...
[02:05:49] have interesting impact.
[02:05:51] But for me, it's not about the lazy loading. We should bundle them together then or figure out, you know, better ways to package them together if we need to. It's not...
[02:06:00] It's not about that.
[02:06:04] Thank you.
[02:06:14] People are more interested in the fact that Angolia is 30 kilobytes.
[02:06:21] Yeah, sorry, LiveView got 66, which is pretty good.
[02:06:27] It's better than any of the single page app frameworks.
[02:06:31] um
[02:06:32] And this is the thing, right?
[02:06:37] Um...
[02:06:40] We...
[02:06:41] Yeah, like...
[02:06:43] This test is stupid, but I do want to point out that there is an impact...
[02:06:48] Alright.
[02:06:50] is SolidJS a spa? I mean, it's the point of this whole stream is it's what you want to make it.  But let's take this one step further because here's the thing. This demo
[02:06:59] Not this demo, sorry. This demo
[02:07:04] here
[02:07:05] that I'm showing is basically
[02:07:08] 90% of what you are hoping to get from something like React Server Components, right?
[02:07:13] Um,
[02:07:14] It's missing the mutation story.
[02:07:16] and obviously if you're replacing stuff underneath with inner HTML you're also losing the state
[02:07:26] But...
[02:07:26] We've been playing with that a bit, actually, funny enough.
[02:07:31] Let me just grab this.
[02:07:35] So,
[02:07:37] Uh...
[02:07:39] Where is it here? Yeah.
[02:07:42] Adios, Moni, actually. Let's see if I can find the original tweet here to kind of give you some context.
[02:07:47] Um...
[02:07:48] He got a bunch of people to make movie apps in their varying apps.  And as a comparison, kind of like Next Level, he wanted to go past the old Hacker News.  And they made Next, Angular, Nux.  And there's quite a few of them.  And I actually quite enjoyed...
[02:08:01] Looking at quite a few of these apps. Let me see. Where's the link? Is it here?
[02:08:06] They use the movie Taste.js.
[02:08:08] movies, okay?  And
[02:08:12] If you go in here, you see
[02:08:14] Fairly good UI.  I'm actually not a big fan of the way Next
[02:08:19] Drops to...
[02:08:19] to fallback, that's weird. I don't know why they're not using transitions, whatever. But this is your typical next app, right? Was it 150 kilobytes of JavaScript, right? And
[02:08:30] uh, you know,
[02:08:32] does its thing, you navigate, you know, there's some animations, trends, just kind of get the idea. And if I go to our next site here, maybe Angular,
[02:08:44] um
[02:08:45] Let's go dark mode too. So they're kind of the same like you see people kind of made the same sort of site and
[02:08:50] Um...
[02:08:51] and
[02:08:54] Yeah, here we go, Angular 108 kilobytes plus two, three, so 110.  They actually come in under the next version.
[02:09:02] Essentially, this is your typical spa navigation.  You just go to action, there's some cool hover effects  and all this kind of stuff, right?
[02:09:11] And...
[02:09:12] What else? I actually really like the Nuxt one. This is probably my favorite. It just has a nicer aesthetic to it.
[02:09:19] You know, and actually...
[02:09:20] Actually, can I point something out between these just because I'm here?
[02:09:23] Look what happens when I click on something on next. When I click to Black Adam,
[02:09:29] I was already into that one before it's cached.  When I click to the fall, you can, oh, I already went to that one.  I got to pick one that I haven't clicked on yet.
[02:09:35] Fullmetal Alchemist. See? How did that fall back? Skeleton state?
[02:09:39] Right?
[02:09:40] and hocus pocus.
[02:09:43] If I do that same thing on the Angular app,
[02:09:47] Watch what happens here. Have I done the orphan kill?
[02:09:52] Okay, that's not a good one.
[02:09:54] OK, actually, let's switch these.
[02:09:57] See how this changes right away?
[02:09:59] And then the UI updates?
[02:10:00] See?
[02:10:02] Now this cache is fine. When I go to it the first time, this will actually move and then the UI catches up. It like tears.
[02:10:09] See?
[02:10:10] Um...
[02:10:12] And then the next one,
[02:10:16] It waits, shows the progress, and then shows it when it's finished.
[02:10:22] Right, so if I go this one,
[02:10:24] Showing progress, switches in when it's finished.
[02:10:26] Personally...
[02:10:28] I'm a big fan of the last version, the next one.  This is what React transitions do, if you want to understand the ballpark.
[02:10:33] Generally, the general feeling is that it's a better experience if you don't go back to skeleton
[02:10:40] and don't cause weird tearing states.
[02:10:43] and instead hold the screen, give a loading indicator and swap it. Some people might not agree with this, but that's essentially
[02:10:49] why React transitions exist.  They don't want you to fall back into the suspense fallback.
[02:10:57] But you get the idea.
[02:11:01] They got navigation, nested nav,
[02:11:04] You can click into stuff, see videos. It's pretty cool.
[02:11:07] Little demo.
[02:11:08] And to finish our trifecta here, I'm trying to remember what the next version is.
[02:11:14] a little bit smaller still, it's 82.3.  It's actually pretty impressive,  view being a little bit,
[02:11:20] tighter really great experience and
[02:11:25] I mean, there's even these smaller ones that they didn't actually highlight as much.  Astro, Lit, and Svelkit.  Svelkit is pretty much what I expect the solid start one would be like under normal conditions.  Because we're going to load about 30 kilobytes of JavaScript.  25.1kb.
[02:11:40] Maybe we load a little bit more, 32 when we go into a page.
[02:11:44] How does SvelteKit do the navigation?
[02:11:49] They hold.
[02:11:50] You see that?
[02:11:51] Let me see if there's filters.
[02:11:53] But it looks like they hold. Let me see. TV?
[02:11:58] Oh, no. For these ones, they fall back.
[02:12:02] I don't hate this fallback, it's less distracting.
[02:12:05] But it's also new navigation, so I think I'm okay with that.
[02:12:07] But generally they hold, see?
[02:12:09] that's that's i like i like that uh that but yeah as i said about 30 kilobytes for svelte kit um
[02:12:17] And then...
[02:12:19] uh...
[02:12:20] Lit
[02:12:22] Looks like it's missing some styles.
[02:12:25] But Lit's probably going to
[02:12:27] What's going on here?
[02:12:30] Really? No. Okay, lit's 100 kilobytes. I don't know what's going on.
[02:12:34] some interesting...
[02:12:36] Loading.
[02:12:37] placeholders, okay.
[02:12:41] And then let's do
[02:12:44] Last and not least, our buddies over at Astro.
[02:12:47] No.
[02:12:48] Everything I've shown you so far has been a single page app.
[02:12:52] right it just swaps right astro one you'll see that this actually re-renders but you know what
[02:12:57] Does this feel slow? It actually feels faster than the lit one, doesn't it?
[02:13:01] And it holds because it's the browser navigation.
[02:13:03] Right?
[02:13:04] You can still do all the stuff, you know?
[02:13:07] movies, TV, you know
[02:13:10] Thank you.
[02:13:11] I think that's pretty performant.  And let's guess.
[02:13:14] 15 kilobytes of JavaScript.
[02:13:16] That's all it takes to get
[02:13:18] See for a site like this
[02:13:20] Astro is kind of perfect. Like you're not doing much mutation. You're just going around like who needs a single page app?  If you don't ship any JavaScript your performance will be better on load.  Um
[02:13:30] You know, you can do most stuff.
[02:13:34] Yeah, no tearing or weird.  You know, this is...
[02:13:39] this isn't bad at all. I think this is a nice demo and I'm glad that they included it because then you can kind of
[02:13:45] See
[02:13:46] the kind of different experiences. I don't see a search on Astro's version yet.
[02:13:52] But...
[02:13:53] You know, these are all at various stages on the implementation.  But I just wanted to show-- there's slight differences
[02:14:01] in them.
[02:14:02] Right.
[02:14:04] Now...
[02:14:05] We were remaking this in Solid Star, and I said my gut would be that it would be very similar to the Svelte Kid experience, honestly.  But then...
[02:14:12] we're like, well, let's try building it with this new experimental islands router thing.
[02:14:17] Um...
[02:14:19] Solid movies.
[02:14:21] Um,
[02:14:22] And
[02:14:23] If you look,
[02:14:24] We're doing the Nux thing, right?  Where we're...
[02:14:27] We're loading here.
[02:14:29] and
[02:14:30] and whatnot and here.  So we wait and it's client side rounded.
[02:14:36] So it's kind of like Nuxt.
[02:14:37] and we have the hover animations and all the nicety things you would expect.
[02:14:43] Um,
[02:14:44] And then...
[02:14:46] uh...
[02:14:47] Yeah, let's go here.
[02:14:48] You know, and we navigate around.
[02:14:51] That's interesting. See, our scroll stuff needs a little bit of work, as I mentioned.
[02:14:55] We're still kind of figuring that out.
[02:14:57] Um.
[02:14:58] But...
[02:14:58] Anyway.
[02:15:00] You get the idea.
[02:15:02] basically the same site we've been seeing here with some nice stuff.
[02:15:07] Thank you.
[02:15:08] Let's see how much JavaScript we have on this one.
[02:15:11] Oh, 11 kilobytes.
[02:15:13] Now we don't have all the functionality. We're missing the image thing. And I think like right now we're fetching the original images, which would ding us. We actually need a special image formatting component on this page, which will add a couple kilobytes. This isn't about being smaller or bigger than Astro. It will probably come out very similar to Astro. But my point is that this approach essentially...
[02:15:32] gives you like islands level hydration thing with an experience that you would have a very hard time telling the difference between Nuxt and this.  Like this is, this is, this is a, it feels like a single page app.  You probably wouldn't even realize what's going on.
[02:15:51] Oh, that includes your bloated image thing?  Is it not even working?  Okay.  Okay.
[02:15:56] Okay.
[02:15:57] Actually, yeah, okay, so...
[02:16:02] And then...
[02:16:02] Essentially like
[02:16:05] There's actually, I think, a bug in your bloated image thing. So I actually have to use the Dino version that's a little bit older to show what I wanted to show.
[02:16:12] This is the last piece I want to show here.
[02:16:14] on this one and i think this is this is the piece that nikki will show me this morning and i was just like what the hell's going on
[02:16:20] Because everything to this point has been...  You know, we're just...
[02:16:24] I mean, if we want, actually, I haven't looked at this too much, but let's inspect in here.
[02:16:28] But you see the islands...
[02:16:31] you see the outlet, right? So if I'm going to here, it's going to swap out that outlet.
[02:16:36] And then are there tabs in these?
[02:16:39] I don't think we had quite the right responsive design in
[02:16:43] It's in this one. Yeah. Okay. Um,
[02:16:46] Is there child outlets?
[02:16:49] See.
[02:16:51] Yeah, it's...
[02:16:52] maybe in here somewhere. Let's see if we can
[02:16:54] inspect in here. What I'm trying to get at is
[02:16:58] We have nested routing.
[02:17:00] And this outer outlet...
[02:17:02] Um...
[02:17:04] Okay, so this is like the inner outlet. This is the outer outlet. You'll watch. This one will collapse. This one won't when I move.
[02:17:10] So
[02:17:11] we're only swapping out the pieces that change, and we know that from the URL.
[02:17:16] Because we know what segment of the route change, which means the server knows exactly which content it needs to swap out and swap in.
[02:17:22] So, like...
[02:17:23] As I said, we're basically getting really into that zone where people are going to have a hard time distinguishing between a single page app because you literally author this the same way as Remix, but then you end up with like...
[02:17:34] you end up with like router...
[02:17:36] you end up with like
[02:17:38] Um...
[02:17:39] none of the code being sent to the browser, right?
[02:17:42] islands but
[02:17:45] This search page was actually a little bit of a challenge because...
[02:17:49] Think about it. Let's inspect the search element.
[02:17:54] We have our solid island that's inside our our wrapper out out a lid here for our page section and
[02:18:02] But the problem is this input field is inside
[02:18:05] the island inside the router,
[02:18:08] How do we...
[02:18:10] Search.
[02:18:11] First off,
[02:18:13] Look, the outlet collapsed.
[02:18:16] And
[02:18:17] not
[02:18:19] lose focus on the input.
[02:18:25] Well, the secret to that
[02:18:27] is island preservation.
[02:18:28] That is when you know that you're on the same route,
[02:18:32] Um,
[02:18:33] basically reuse the island...
[02:18:36] that already exists when you swap out the HTML.
[02:18:44] Thank you.
[02:18:45] So not only state preservation from being above where we need to be
[02:18:50] on the, like, in the router,  like, being above the...
[02:18:55] How should I put it? Like being a...
[02:18:57] above where the swap is, but even islands inside
[02:19:02] can basically be preserved
[02:19:04] between server partial re-renders. And this is why I made the allusion to server components, because you add
[02:19:11] all of these together
[02:19:13] And I would argue that you have the server component experience.
[02:19:18] Um...
[02:19:19] Obviously, we're still like this is super new Nikhil literally made this this morning or last night  I say this morning because he was probably up all night working on it and
[02:19:26] But, um...
[02:19:28] you know,
[02:19:29] the key
[02:19:31] This is really important because, as I mentioned,
[02:19:34] Um...
[02:19:35] Why am I not? Not sources. Network.
[02:19:37] Um...
[02:19:38] Yeah, different compression on Dino.  I guess the search box is an extra byte.  But we're talking sub-15 kilobytes of JavaScript.
[02:19:47] - Yeah, I think the Dino one compresses differently,  so it has like a slightly difference,  but you get what I'm getting at.  Like we just send the JavaScript we need,
[02:19:56] And you'd have a very hard time telling this experience from a single page app.
[02:20:01] um,
[02:20:02] And it's.
[02:20:03] Yeah, I mean, I don't know what else to say.  Like, is it server components?  I'll leave that up to you to kind of make that thing.
[02:20:10] *thud*
[02:20:11] Do you have to reconcile your virtual islands?
[02:20:20] Not really. The trick is when the
[02:20:23] The stuff outside changes, you rewrite to the islands with the new props and the new props trigger the prop changes inside the client side islands.
[02:20:30] Essentially.
[02:20:32] So the server can change the props that come into the islands.
[02:20:38] This all supports Dino. We support Dino deploy. If you see this as actually Dino.dev. We don't run on Dino on our build, but I mean,
[02:20:45] I don't know, is there VEAT support for Dino yet? I'm not exactly clear, but essentially this is a Dino deployed thing and also Netlify Edge, which we were using in the version that is a little bit broken on the search. Which one was it? This one?
[02:20:58] is also using Dino under the hood. So we support the Dino runtime, just not the build process right now.
[02:21:10] Yeah, sir, how does Nikhil describe it? No rec, suddenly everything is reactive. Imagine each island is getting a store as a props object. Yeah, exactly. So
[02:21:17] essentially...
[02:21:19] Server components in whatever...
[02:21:22] 10 kilobytes or something.  That's,  that's,  that's kind of the takeaway here.  I think shared contacts support for streaming,  which I didn't,
[02:21:30] actually demo for you that was that one was actually a little bit fun i had to actually go in  into dom expressions and actually make a hook so that whenever uh
[02:21:39] streaming stuff got inserted.
[02:21:41] it would have a hook so any client-side script could do its thing. So basically whenever the stream content gets swapped in out of order, the hydration can look and see if there's any new islands that it needs to hydrate, essentially.
[02:21:55] We still have work to do, but this is kind of like...
[02:21:58] this app is proving as a kind of a proof of concept that with
[02:22:02] with a setup like this, you basically...
[02:22:05] don't have to sacrifice the experience of a single page app
[02:22:08] have the performance of a multi-page app and the JavaScript bundle
[02:22:13] size of a multi-page app.
[02:22:16] To me, this is what the promise of server components is and
[02:22:20] I now see a path forward that doesn't involve the virtual DOM.
[02:22:25] Okay.
[02:22:27] so
[02:22:28] As you see, we talked a lot about Solid Start here, but essentially what this is, is a bunch of changes in solid around the data serialization.
[02:22:37] skip that I mentioned around the streaming hook, around the context through Hydrate.
[02:22:43] But the funny thing is, I mentioned, they were actually relatively small changes in Solid,
[02:22:49] But we needed them, which is why I released a 1.6.  But this and the spread stuff, this is why this release came so quick.  Because essentially...
[02:22:56] it actually wasn't a whole lot of development work.
[02:23:00] It was just...
[02:23:02] understanding the use cases to make things work better.
[02:23:09] Alright, how are we doing for time? How are we doing right now?
[02:23:12] we are at 226 so we spent about two and a half hours talking on the subject
[02:23:17] That is most of Solid 1.6.  I think the only other thing worth mentioning about Solid 1.6  is just that name of the release, the name of the release.
[02:23:28] I am a big fan of anime and Miyazaki's work and
[02:23:34] uh,
[02:23:36] When I started playing with this stuff, doing these demos, like the earlier version of the movies demo and the Hacker News and the Solid Start docs.
[02:23:45] um...
[02:23:46] Even though they're islands, once I was using this new routing mechanism, I felt like I just kept on getting those images of islands in the sky, so to speak.
[02:23:56] which is very common theme in JRPGs and in fantasy and in anime and  so yeah, essentially
[02:24:05] I don't know. I don't know if we call
[02:24:07] I don't know if I like Server Components as a name, because the problem with Server Components is it focuses on the Server Components and it
[02:24:13] for me what's magical is the way the client works. You know, it's the client thing. So like, um,
[02:24:20] Islands always emphasizes the client components, which I liked.
[02:24:25] But, you know, that's basically where the title came in.
[02:24:30] It was interesting when I looked a little further.  I knew this.  Kassel and Sky wasn't Miyazaki's first movie.  He'd worked at Toei Animation before, and even he'd done his own...
[02:24:41] feature film, Nausicaa Valley of the Wind.
[02:24:43] Before that but this is the movie that he created when he first like they like okay, we're gonna Nausicaa did really well  They got some money and they're like, okay, we're gonna make a studio Ghibli  And this was the first film they made  so I don't know I just I
[02:24:58] I wonder if even the title of the movie for them was that influence, where they had this goal that they thought was almost unachievable, and they set out
[02:25:08] for themselves. But I feel like this too a little bit because this isomorphic story and being able to show that we can
[02:25:16] you know
[02:25:17] bridge that gap between MPAs and spas.  Um,
[02:25:21] is
[02:25:22] it does have that feel to it. You know, I don't know if anyone's familiar with solar punk, but it's kind of like steampunk, but instead it's like more of a return to nature where you can't tell the difference between nature and technology.
[02:25:34] It feels like that because MPAs is like a return to where we were in the beginning, but it is quite different.  We have the advanced technology behind it.  Anyways, that's me just feeling on the thoughts behind it.  But yeah, this title for me had a special meaning to me personally, so that's why I wanted to kind of elaborate on it.
[02:25:53] I bet
[02:25:54] Yeah, so Solar Punk is kind of cool.
[02:26:01] - Thank you.
[02:26:02] Thank you, sir. Something incredibly confusing. Yeah.
[02:26:05] Yeah, so I mean this is going to change over the next several months as we refine this, but we have a basis now for this that like,
[02:26:14] I feel, you know...
[02:26:16] that we've shown the premise.  We've made the React Server component demo, essentially, that...
[02:26:24] The React team...
[02:26:26] made, you know,
[02:26:27] back in 2020 when they first revealed it.  So like, you know...
[02:26:31] React is amazing, they're so far ahead on this stuff.
[02:26:37] A lot of the stuff about solid simplicity makes it easier for me to follow so quickly.
[02:26:41] But it's not so quickly. The roots of this work take years. That's why it's not like we've been waiting this whole time and being like, "Okay, let's see if server components are a success and now we'll consider it." This is why Solid is always right there at the time that React releases stuff or Next releases features. I remember last year, I think the Next team was actually surprised when I showed up with a streaming Edge demo on Vercel the same day they released it. And they're like, "Oh crap, Next doesn't actually even do this." It's because
[02:27:11] the work had already gone in ahead of time. If you wait to see what other stuff succeeds, you're already behind. So, a lot of the work that's been going in here, even though this was relatively small changes, is the summation of works that's been going on for years, essentially. Recognizing the possibility and looking into it, I think that's really key and what keeps driving Solid Forward and why
[02:27:32] it always seems like solids, like right on the cutting edge of stuff.  It's because we've been working on these problems for a very long time.
[02:27:41] Um,
[02:27:43] Yeah.
[02:27:44] Okay, let's see. I should check Twitch chat.
[02:27:47] see if people are still alive here
[02:27:51] Minsk Devs, subscribe to tier one. Thank you very much.
[02:27:56] Sorry, that was probably like half an hour ago or something, but...
[02:27:59] Yeah, um
[02:28:03] Yeah, so it's... I just... the thing is...
[02:28:06] Now?
[02:28:07] we're at the starting line and what i mean about that is because we can compare and look at stuff  like you know when we make stuff like that that the the uh sorry where is it the
[02:28:16] the Hacker News demo or this, because we can look at this and go like, okay, so the solid client-routed one is, you know,
[02:28:21] Actually, let's go to the actual one. Was it solid?
[02:28:25] HN Islands Netlify app, okay.
[02:28:28] Thank you.
[02:28:28] you know, where it's all
[02:28:30] properly bundled for the release and like okay so it's five kilobytes right and plus whatever like you know and then we
[02:28:36] when we route in and we're like, okay, we interacted, we have all the JavaScript on the page. We can look and go, okay, this is 5.7 kilobytes. What was the cost of that load? And we can figure that out, right? Because then
[02:28:45] You can go, OK, well, what's the impact of other
[02:28:48] technologies. We can look at that. We can timeline. I've been looking at the cost of
[02:28:53] out of order streaming. Actually, a lot of my conclusions that I've been coming to recently is understanding that I can't trust the lighthouse scores at all. They don't show streaming's benefits, and they punish you for them in a certain way too. So we need to find the balance there. But like, you know, how do I know if quick is the best approach? Like,
[02:29:12] Does
[02:29:13] How do I make that determination? What impact does network speed have on when something actually happens?
[02:29:23] Um,
[02:29:25] How much JavaScript do I need? Is 17 kilobytes good? Is five kilobytes good? These sort of things, what's the cost of serialization on server rendering for resumability? I feel like we're going to baseline to be able to ask and answer the questions whether resumability is worth it, whether islands are worth it, whether we want subcomponent hydration. There's so much interesting innovation. And I think we just need the right harness for it, if that's the way I can put it.
[02:29:55] Right?
[02:30:00] Why do you think no one sold this before? It's because no one cared to.
[02:30:04] uh,
[02:30:06] There's pieces everywhere. That's what I spent the last year looking at, looking at what every framework had done. The routing piece that I showed had its roots and stuff like Turbolinks, which they've been doing that on the rail side for a while. But Turbolinks,
[02:30:18] the Rails people are kind of allergic to JavaScript. You know what I mean? They were using different technologies, right? Now you have two apps in the Rails case. So how do you make it one app, make that development experience good?
[02:30:31] I told you Marco was doing
[02:30:35] the Astro
[02:30:36] quick type thing not maybe not as advanced as quick back in the day but like  doing that at least something like along the after thing like
[02:30:43] Eight years ago.
[02:30:44] No one cared.  Like, they put it out there.  And it's because...
[02:30:49] What kind of sites you're building?
[02:30:50] I think what's happened is more people are trying to build more sites with things like React and maybe e-commerce and hitting blockers and going, oh, crap, this isn't actually good enough for e-commerce.  The popularity of the solution and stability and maturity, we bundle up everything's Next.js now.
[02:31:10] You kind of want to use it for everything and hope it's a universal solution,  even if it wasn't originally designed to be that way.  So I think we're just seeing people trying to apply these, you know,  single page apps to more things at the same time,  the size of JavaScript increasing more libraries.  And we're just going like,
[02:31:23] "Actually, this is a problem, we need to solve it."
[02:31:26] you know, and that's why this is happening now. And I think part of it is,
[02:31:32] the forefront on the single page app side, the ones working on these declarative single isomorphic UIs, weren't prioritizing this before.
[02:31:40] So you might have seen parts of this technology in other things like I mentioned Turbo
[02:31:45] But they weren't
[02:31:47] they weren't,
[02:31:48] because they like their own bias and like, you know, like their like of rails or however they're doing, they weren't trying to
[02:31:55] apply it in places where
[02:31:58] they fundamentally didn't
[02:32:00] want to go.
[02:32:01] And I think it's really interesting when you find something where you want to go and then you steal from everyone else.  That's what I do.  I'm a pirate.
[02:32:11] So
[02:32:12] like
[02:32:13] I think that's the biggest reason why.  People want to do more, right?  Time between transitional apps and solid finance delivering, it shows this stuff is moving pretty slowly.  Well...
[02:32:22] Yeah, but the funny thing is at the time Rich Harris coined traditional apps, he referenced Marco, he referenced a few others. We'd already been on this path for a couple years.
[02:32:32] React has been on this path since 2016.
[02:32:35] Like,
[02:32:36] This is...
[02:32:38] figuring it out and finding that balance for UX and DX and stuff takes time and testing and whatnot. Um,
[02:32:45] There's so many different pieces that have to align to get here. Even that, when I
[02:32:50] or Nikhil comes up with something, show off this demo,  and everyone's like, wow, you solved it,  and it only took you a couple of days.
[02:32:56] It's more than a couple days.  It's taken us this whole time to get here.
[02:33:00] *sniff*
[02:33:04] Right.
[02:33:05] Yes, I love Rich Harris as well. Rich has been great to me ever since I got into the more social side and stuff. He's not taking partial hydration seriously next yet, but maybe after he sees this, he will. That's what I want to see. I think he has the right intent and he has the right...
[02:33:27] Like...
[02:33:28] motivation and his vision is amazing.
[02:33:32] Um.
[02:33:33] It's interesting. There's different ways to approach it. The React team is kind of like ivory tower and they're like,
[02:33:39] theoretically
[02:33:40] We want to go here.
[02:33:42] What are the principles we need to ensure that consistency that we get here and have all the pieces we need?  And that's what it feels like a lot when you see some of the React stuff.
[02:33:51] I'm kind of a scrapper.  I kind of like going to go in and go, okay, is this fast enough?  I mean, and don't get me wrong.  That wastes time in a different way because maybe you go down routes that aren't
[02:34:01] viable, but it's like
[02:34:04] I always want to see if I can bridge today with tomorrow.  And, you know, because people build apps today,
[02:34:12] There's an interesting topic about how far in the future should your vision go.  I've found that if I just have the right tools...
[02:34:20] um...
[02:34:21] I can do a lot today.
[02:34:24] I didn't like the term transitional mostly because
[02:34:27] I'm not sure if what we're transitioning.
[02:34:31] At first you think, oh, well, the transitional app word makes me think of like, oh, some pages are single page apps, some are multi page apps.  And then we just kind of transition and do, you know, I don't think it's a transition.  I think we're seeing the next architecture after single page apps happening right now.  I think I think we're approaching, you know, people are waiting for it, you know, like that whatever Gen3, Quik keeps on talking about it.  I don't think we have all the pieces yet, but I don't think they're wrong to say that there is a new.
[02:34:57] paradigm thing. I mean, actually, okay, I take that back.
[02:35:01] Today, I feel like we might are starting to see all the pieces. I think
[02:35:06] I think there's a I think like they're not polished now, but now it's
[02:35:11] I've seen enough of the parts
[02:35:13] that I'm starting to see how this all threads together.
[02:35:25] Right. The idea is this lever thing about the different thing. What I find interesting, though, is
[02:35:32] I'm going to go.
[02:35:33] I don't think the spectrum is the current spectrum.
[02:35:37] This is why I'm not like viewing this as just like, oh, we fly in the spectrum.  Because once you go to this architecture, it changes the way you think about caches.  It changes the way you think about page loads.  It changes the way you think about data flow in your application.  Yeah.
[02:35:50] And for that reason, I actually think you have to step back to more of an MPA-like mentality.
[02:35:55] and then figure out
[02:35:57] what interactivity looks like in that world.
[02:36:01] This might be the push that we finally need to do more WebSocket or RPC type stuff because when we actually need
[02:36:10] the interactivity in the browser,
[02:36:13] it's going to be the most interactive stuff  because everything that's kind of middle ground...
[02:36:17] will get pulled back to the server.
[02:36:19] So I think this actually changes the way we even look at
[02:36:25] MPAs or single page apps. Like I don't think we still look at single page apps in the same way.
[02:36:31] So I don't think it's just the current spectrum on a scale.  I think we've actually pivoted, and the highly interactive side still looks different than a single-page app today.
[02:36:45] yeah and this is what I was talking about  maybe something like live view type pieces get in  I don't think that's the core mechanism  I'm still not, I gotta bring someone in  to kind of talk about this  is that I'm
[02:36:57] I like...
[02:36:59] Even though I'm talking about this MPA type stuff, I like the...
[02:37:03] the app first mentality of what we're doing here with the declarative APIs, even though it's causing us a lot of work here with the resumability and figuring out this stuff.  I think the authoring experience we want here is very close to what we want. So maybe this is why I need to look at Phoenix or look at LiveView.js, because I need to understand what's good about it so I can steal it.
[02:37:22] As I said, I like stealing stuff.
[02:37:26] *sigh*
[02:37:30] Yeah, Edge is a big part about this. If you saw that Cloudflare article, really good stuff.
[02:37:35] -
[02:37:45] You guys are already talking about how to market solid start. That's great. Okay. Let me get another drink. My throat's a little dry, sore today because I was at a meetup last night where I got this wonderful Astro shirt.
[02:37:56] and uh...
[02:37:59] I talk a lot, as you can tell.
[02:38:02] I definitely
[02:38:04] - Thank you.
[02:38:05] you know,
[02:38:08] All right.
[02:38:09] *thud*
[02:38:10] Yeah, so we showed all the cool solid start stuff.
[02:38:17] I guess maybe we should kind of pivot onto our next sort of set of topics. Um,
[02:38:23] I'm trying to decide if I want to deal with the React RFC.
[02:38:26] On its own.
[02:38:27] or as part of This Week in JavaScript. And I think probably This Week in JavaScript,
[02:38:32] because
[02:38:35] Compared to what we've been talking about so far, the React RFC sort of
[02:38:40] It's funny.
[02:38:42] Yeah, I mean, I'll talk about it, but it's sort of not as interesting as like,
[02:38:45] It's...
[02:38:46] It's kind of funny.
[02:38:48] it
[02:38:48] I'm glad.
[02:38:50] the reaction to it, but on the other hand it's also like
[02:38:55] Yeah, it's kind of like a nothing thing.
[02:38:58] thing at the same time. So it's interesting to say the least. Okay, so let's
[02:39:05] Let's start going on that unless there's any more questions about this.
[02:39:12] I don't follow this too far, but all I know is apparently lexical...
[02:39:17] is...
[02:39:18] is the best, the end.  I mean, I don't know. Dom from...
[02:39:24] Inferno created it.
[02:39:26] Thank you.
[02:39:27] So I've always been impressed by his work.
[02:39:31] All right. Let's...
[02:39:34] Let's see, that's it for 1.6.
[02:39:38] Amen.
[02:39:39] Honestly, Nikhil, thank you for...
[02:39:41] for for
[02:39:42] for finding that missing piece of the puzzle.
[02:39:45] Right? Like...
[02:39:47] Yeah, our images need some work.
[02:39:50] David, but...
[02:39:52] Oh, man. It's funny, like, now that I'm doing the demo, it's like, it worked perfectly fine earlier. Um...
[02:39:58] But yeah, okay, let's move on and see if I can get this set up for this week in JavaScript. So give me a couple moments while we ship base and get ready for our RFC. Was there an RFC for the server components? I don't think I actually saw that. The RFC I'm talking about is for this use hook thing.
[02:40:17] and
[02:40:18] Where is it?
[02:40:21] Let's see if I can get started.  It's weeks.
[02:40:25] So I actually have to scroll back a little bit far.  Because what were we, the 21st?  I think I need to go back to...
[02:40:32] What is it? Oh, yeah.
[02:40:36] Yes. Oh, wow. We have so much.
[02:40:38] This is going to be fun. I'm glad I'm giving myself a little bit more time.
[02:40:41] Um...
[02:40:43] Yeah, this is...
[02:40:46] This is where it starts.
[02:40:50] Yeah, it starts with that live view.
[02:40:52] Hacker News.
[02:40:52] Clone, actually, funnily enough.  Give me a second.
[02:40:57] Actually, I should blow this up first so I don't lose my markers.
[02:41:02] Okay.
[02:41:10] Alright, um...
[02:41:14] SolidJS.
[02:41:16] scroll back. I can't remember if there was any big solid news.
[02:41:21] To do to do to do to do to do
[02:41:24] It looks like it's mostly...
[02:41:28] Oh, right. Actually, that is big.
[02:41:30] It's funny, I was talking about this earlier and it completely blanked my mind about that.
[02:41:37] All right.
[02:41:41] Um...
[02:41:43] 13th
[02:41:44] Thank you.
[02:41:46] - Yeah.
[02:41:57] Yeah, okay. I'm gonna have to pick and choose out of here. I don't think there's actually a ton of stuff I want to cover on this that isn't already on my...
[02:42:04] My thread.
[02:42:05] Um...
[02:42:07] All right.
[02:42:09] And then last and not least,
[02:42:13] Did I pin something?
[02:42:15] is...
[02:42:20] here, sorry, all just getting this set up always takes me a moment
[02:42:24] Um...
[02:42:26] I'm gonna look at my bookmarks.
[02:42:31] Thank you.
[02:42:44] Yeah.
[02:42:45] I don't know if I want to talk about this.  Dan was kind of
[02:42:50] I can understand why he has confusion. He was trying to figure out what the point of all this prefetch code is.
[02:42:55] for Quick, because he's like, I mean, if I need the code, why wouldn't I just prefetch it?  Like, why wouldn't I preload it?  Like, why am I doing all this fancy service worker stuff for code that I need anyways?
[02:43:04] And it's a good question.
[02:43:08] But yeah...
[02:43:10] Yeah, there's some reasons here why they use a worker is because literally half the browsers don't support prefetch properly. But I don't think that's worth it for this week in JavaScript.
[02:43:21] I already pretreated that. Okay, cool. So then this will come in when we talk about this.
[02:43:25] Um...
[02:43:28] Okay, cool.
[02:43:31] That, that, that, that. Okay, I think we're good to go. People still with me here?
[02:43:36] All right.
[02:43:39] Just checking Twitch chat.
[02:43:42] Excalot, thanks for the Prime sub. That's true actually. If you aren't aware of that, if you have Amazon Prime, you can literally give a free sub away every month.
[02:43:53] Um...
[02:43:54] And, uh...
[02:43:56] It doesn't cost you anything extra and you can help me out.
[02:43:59] You know, why not? And, uh,
[02:44:02] But more important, I actually don't really care that much about the subs and the money and that stuff.  Give the thumbs up on the video on YouTube. I want more people viewing this content if possible.
[02:44:11] I'm not as much of a natural to ask for this stuff as other people,  but it does really help get viewership when people...
[02:44:20] When people...
[02:44:22] you know, put the thumbs up and, you know, it helps with the algorithm stuff.
[02:44:26] Still here, cousin. Hey, Johnny. All right.
[02:44:31] Good, good. Yeah, it's been crazy, all the stuff that's all the last couple years connecting
[02:44:39] people, you know,
[02:44:42] from
[02:44:42] uh,
[02:44:43] Yeah, just it's been awesome, you know.
[02:44:47] Thank you.
[02:44:48] Okay, you know what?
[02:44:53] Thank you.
[02:44:54] Bye.
[02:44:54] Thank you.
[02:44:55] Yeah, please, please, please, please thumbs up, like the video.
[02:44:59] um solid 1.5 video is is my most watched um
[02:45:03] video to date.
[02:45:05] Um...
[02:45:06] So let's see if we can beat it. I don't know. I think those thumbs up will help. Okay, cool. So where do we want to start? Where do we want to start? Where do we want to start?
[02:45:14] Yeah, that's not where we want to start.
[02:45:18] Okay, cool.
[02:45:19] Let's get our banners.
[02:45:20] and I'm gonna go into this mode for this
[02:45:23] and
[02:45:26] Keep cutting. Okay, cool. We're all good. And yeah, just because I do this segment, this whole this weekend's JavaScript, don't let that stop you from like asking questions to chat. I'll probably engage you in there too. This is no different than any other part of my stream except the fact that I...
[02:45:40] talk about other people's stuff so it tends to come off spicier.
[02:45:43] um but
[02:45:45] Essentially, this is the same thing. Participate, ask questions.
[02:45:51] I have been cutting these videos out in hopes that maybe I could release them separately, but honestly, I take too long and then I feel like they're not relevant anymore. But yeah.
[02:45:59] Yeah, let's do this.  All right.
[02:46:00] Cool.
[02:46:02] Right.
[02:46:04] Thank you.
[02:46:05] Yeah, I would like to talk about this week in JavaScript, or this past two weeks in JavaScript.  I didn't stream last week.
[02:46:11] Um...
[02:46:12] It's been...
[02:46:14] a wild ride for me because we've been working on a lot of stuff that we covered earlier in stream in terms of the islands and the server-esque components.  But there's also been a lot of other stuff happening around in the ecosystem. So I'm going to talk a bit about Solid and I'm going to talk about some stuff going on in React.  But yeah, let's just kind of wind back to the beginning a couple of weeks ago, which did kind of start a little bit slow.
[02:46:36] But I've been getting a lot of push to check out...
[02:46:41] um,  live view JS or Phoenix live view.  Cause it's like,  I've covered a lot of different,  uh,
[02:46:46] approaches to how we can render the DOM, but I have not done this very server-centric WebSocket.
[02:46:51] approach. And to be fair, I do intend to cover this in the future.
[02:46:57] I just, as timing has had it, I haven't had a chance to.
[02:47:02] But
[02:47:03] My Hacker News demo has been remade in Live View and
[02:47:10] We can see it in its
[02:47:12] full glory here, it's actually in the stack blitz.
[02:47:15] Give this a second. I think this was
[02:47:18] based off the quick one.  And the reason I can tell,
[02:47:20] is because of the color scheme in this.
[02:47:25] Hopefully it's still working. Oh man.
[02:47:28] I sometimes...
[02:47:29] break stack blitz at times because of
[02:47:33] Let's make sure that I don't have like...
[02:47:36] that going on
[02:47:37] But that's not what's causing it.
[02:47:39] Um...
[02:47:40] Darn, okay. Well, two weeks ago this was working.
[02:47:45] Okay, well...
[02:47:48] That's too bad. Okay. Moving on.
[02:47:51] There was a really cool LiveView.js Hacker News demo.
[02:47:55] *laughs*
[02:47:58] All right, so where are we going? Okay, so um
[02:48:02] There's been a lot of talk about performance recently and
[02:48:06] And David K. Piano, or David Korset,
[02:48:11] creator of xstate and stately was just kind of like talking like why are we talking so much about
[02:48:15] performance and, and, you know,
[02:48:19] Customers want fast enough, not fast as possible.
[02:48:24] I would argue that depends on the usage, but...
[02:48:28] I do think there has been a lot of conversations because you've been seeing like,
[02:48:32] performance is obviously something we cover a lot on stream.  And ever since the signals thing came out,  everybody's been benchmarking it and showing how their reactive system makes  react faster and all this.  And we talked about that in previous streams.  But yeah,
[02:48:45] The truth of the matter is...
[02:48:48] I look at performance in several different categories.
[02:48:51] and
[02:48:52] essentially...
[02:48:54] *sniff*
[02:48:55] Like...
[02:48:57] the rendering performance piece that we talk about a lot.
[02:49:00] hasn't moved in five years. And I want to be very clear about that. Five years ago,
[02:49:05] Solid was the fastest.
[02:49:07] Today, solid is still the fastest.
[02:49:09] OK, sorry.  I'm obviously playing a bit, but essentially,
[02:49:15] Like,
[02:49:15] we've seen some of the like
[02:49:18] bigger libraries like React and Vue, you know,
[02:49:22] adopt newer techniques and getting faster than that but like the state of the art um hasn't
[02:49:28] actually
[02:49:30] changed all that much.
[02:49:31] Um...
[02:49:32] uh,
[02:49:34] The technique, um,
[02:49:35] that i use in solid actually came up from surplus or sjs so
[02:49:41] That technique was
[02:49:42] you know, winning at benchmarks even before Solid existed as early as 2016. It's really been like, and Inferno came out around 2016. It's really been seven years.
[02:49:52] since we've seen any kind of move, like it's,
[02:49:55] significant movement on rendering performance. It's like, if you look at it today, you know, stuff like, I'm not just talking about the JS framework benchmark, that might be one of the better benchmarks out there. But this like, idea of just server rendering performance like this, like if we go find it in here, wherever we are, solids here, let me remove some of the noise, like some of the kind of implementations that don't follow the rules. Okay, cool.
[02:50:18] Oh, see.
[02:50:19] solid and inferno.  Here we are.  Best buddies.  Um,
[02:50:22] Different versions of Chrome change which is this or whatever. I haven't seen Inferno get in front of Solid, but the gap between Inferno and Solid keeps on swaying. Inferno's been over here before it comes in here.
[02:50:32] And honestly, not much has changed in Infernal and Perf since seven years ago either.  So, like, what I'm getting at is...
[02:50:39] and it's not just a spent for any kind of like confirmable kind of Dom  update bench,  you're going to see the same relative range of,  of results essentially.  So like,  this is just not moved.  Um,
[02:50:50] But...
[02:50:52] We've seen some movement on server rendering
[02:50:55] But not as much as, again,
[02:50:58] not as much as you'd expect. I've been benchmarking server rendering a lot recently and a lot of our bottlenecks
[02:51:06] are actually limited to...
[02:51:10] Um...
[02:51:12] How should I call it?
[02:51:14] A lot of, like, limited to, like...
[02:51:16] stuff that our meta frameworks do for us.  You know how we're all very happy  with the request and web response model  that we're doing now, you know,  so that you can write your code in one way  and it works on Dino, works on Cloudflare,  works on Node, and you all use this.  Well, it turns out that that overhead  of converting request response on Node  actually takes a throughput hit.  More significant often than the framework  doing the rendering.  So like, I was like looking, I'm like,  why are SvelteKit remix
[02:51:42] and solid basically like all the same on server rendering when I know like some are faster than others.
[02:51:48] And it was like, oh.
[02:51:49] Well, there we go. You know what I mean?
[02:51:52] Uh,
[02:51:53] I mean, Remix with React took a little bit more of a hit,  but it was way too normalized.  And I realized that a lot of this bottleneck was around...
[02:52:00] infrastructure around the rendering and that's why I was talking about we need to actually work with the runtimes to improve that stuff.  Jared's been doing amazing work on bun to actually address those specific kind of pain points. He made like render to stream  significantly faster for react there and the same should apply to solid. We need to kind of work on that more of
[02:52:18] technology interfacing with the framework level stuff, then actually how fast we can concat strings.
[02:52:24] Um,
[02:52:25] And
[02:52:27] The other thing we have to consider is architecturally, right? What we talked about on the stream, like JavaScript bundles are still not getting smaller or even flatlining.
[02:52:36] you know
[02:52:37] If we want to make these improvements on performance, we actually have to look at our architecture.  And those can be big changes.
[02:52:42] shifting changes.
[02:52:44] which not everyone wants to actually do,  you know,  it's,  they,  they're happy with how they're writing things.  Um,
[02:52:50] So, you know,
[02:52:52] So to me this isn't about getting
[02:52:55] a penny here, you know, nickel and diming, you know, like little stuff. It's, it's like,
[02:53:00] there's these clear areas and trends,
[02:53:03] And those are places where it's worth putting focus on.
[02:53:08] we do need better benchmarks to determine the architecture what the effect of hydration right
[02:53:13] The benchmarks we have right now test one specific thing.  And to be fair, I've seen some criticisms of stuff like the JS framework benchmark, but, you know, like, oh, who puts a thousand elements on a page?
[02:53:25] who works with the JIT already warmed up, you know, all that kind of stuff.  But like the truth of matter is,
[02:53:30] Single page apps do.
[02:53:32] It's a benchmark, when you're on one page in a simple page app and you navigate to the next page, you could be putting thousands of DOM elements on the page, like rendering them.
[02:53:43] You aren't doing that from like if your app is like an islands thing like I showed because you know you can server render it but
[02:53:50] Like,
[02:53:51] Our benchmarks reflect what we've optimized towards given the architectures that we use.
[02:53:56] So I think that like...
[02:54:00] like there are areas and performance still matters because
[02:54:06] Like...
[02:54:08] Well...
[02:54:09] Like, we can definitely make it better.  Like...
[02:54:13] people have, I mean, we have faster internet, and maybe we get kind of buffered from it. But like, everybody's seen a website that's
[02:54:21] makes it feel like it's broken.  Like, I think...
[02:54:25] it does start with the tools setting the right convention and showing us the way so to speak um
[02:54:31] It's not really just the developer's fault.
[02:54:36] *sigh*
[02:54:38] But as I said, we're still...
[02:54:41] you know,
[02:54:42] God, there was so much good stuff during this  because people just kept on talking about these conversations  and like...
[02:54:49] another one of progressive enhancement,  right?  Um,
[02:54:53] you know, being positioned as a solution for hydration. Like, I don't need to worry about hydration because my app works without JavaScript. Well,
[02:55:00] It...
[02:55:02] doesn't really...
[02:55:05] This discussion kind of gets into a place where I was explaining that progressive enhancement is more of like
[02:55:12] Um...
[02:55:13] What's the word?  Uh...
[02:55:17] You...
[02:55:17] There's a term based on degradation, like,
[02:55:22] graceful degradation. That's what progressive enhancement is. When we talk about progressive  enhancement, we're not talking about how we can add a little bit of extra
[02:55:31] feature capability for people who have it. We're actually talking about when things go bad that they don't go that bad. Because the truth of the matter is
[02:55:41] I
[02:55:41] The difference between clicking a link too early because it hasn't hydrated and now doing a full page reload and waiting like half a second longer and clicking it and doing a client side render makes a huge difference. Like,
[02:55:52] you might actually
[02:55:54] Like, picture if your page takes 15 seconds to load.
[02:55:57] and you click a link too early,
[02:55:59] And now, like, sure, you save the rest of the seven seconds.  Like, say, at seven seconds, you click the page to early.  Right.
[02:56:05] Now you're waiting another 15 seconds.
[02:56:07] Whereas maybe if you, you know,
[02:56:12] I mean, that's probably a bad example. Let's get closer. Let's say you click it at
[02:56:17] at 10 seconds and it's 12 seconds.
[02:56:22] now you've spent 22 seconds.  Whereas if you'd waited like the extra second or whatever,  then the next navigation would have happened in like two seconds.  Like the Delta is better if you had just waited a bit longer,  but you have no way of knowing how long it's going to take the hydrate.
[02:56:36] Um...
[02:56:38] Yeah.
[02:56:42] Right.
[02:56:44] Grace, thank you. And the thing is, yeah, it's not it's you want progressive enhancement, not because just for the disabled users, not for this hydration store, you just want it to be a good citizen of the web. And that's, that's essentially, I'm not going to be a good citizen of the web.
[02:56:59] where this discussion is.
[02:57:01] It's like a failure condition. It's just making sure that your app is accessible to people that, you know,
[02:57:08] don't have the best connection or the best device or happen to be going in a tunnel at a time or whatever.  Like, it's just making your...
[02:57:15] your app more available, more resilient,
[02:57:18] you know,
[02:57:19] that's really all...
[02:57:21] all this is about.
[02:57:25] Alright, um...
[02:57:28] Yeah, and I spent the first week of the last two weeks writing docs the whole time preparing for ViteConf.
[02:57:33] except for the fact that
[02:57:35] Um,
[02:57:36] it led to some of those
[02:57:39] that demo that
[02:57:42] Yeah, I... How did I...
[02:57:44] skip past it.
[02:57:47] So
[02:57:48] That's funny. This demo, the islands demo, Hacker News, that we showed earlier,
[02:57:54] Um,
[02:57:56] while we were doing the stream, but essentially...
[02:58:00] skipping past all this vComp stuff.  vComp was amazing.  We had this framework panel
[02:58:04] Um...
[02:58:05] and it was very awesome.
[02:58:07] talking with
[02:58:09] Um...
[02:58:10] all members of all the frameworks. Funny enough, if you watch our stream, you've seen almost all these faces. They've all been guests on our stream at some time.
[02:58:17] um... and
[02:58:19] But having us all in the same room was awesome.  And it brought attention to some really great things,  like Hatip, I think it's called.  Our ability to maybe share adapters or code between these frameworks,  like share more than what we do with Vite.  I think there's really potential.  Daniel from Nuxt really went into the UnJS stuff again, in more detail than he had on our stream.  It sounds like Nuxt has a lot of really universal solutions that we can all use.  So I'm very excited by the output of that.
[02:58:47] Um,
[02:58:49] Thank you.
[02:58:50] Yeah, but vConf was great. I enjoyed giving that talk. It was very similar to what we talked about earlier in the stream.
[02:58:55] Um,
[02:58:57] But...
[02:58:57] Okay.
[02:58:58] We're talking about performance, right?
[02:59:00] So let's talk about performance.
[02:59:03] I forgot all about it, but the Wasm stuff happened...
[02:59:07] during these two weeks too.
[02:59:11] I often talk about how much I love the SolidJS community.  You go on our Discord and you have all the other framework authors in there.  And that doesn't even include just JavaScript framework authors.  That includes Rust framework authors.
[02:59:23] Sycamore
[02:59:24] and leptose are both very influenced by solids. So if you go in there, you will probably find  them in our Discord as well.
[02:59:33] Um,
[02:59:34] Essentially, Leptose, hopefully I'm seeing it right,
[02:59:38] went as close as possible to Solids implementation to my understanding. And they managed to
[02:59:44] on the JSB Framework benchmark.
[02:59:46] Yeah.
[02:59:47] to close the gap between solid
[02:59:50] to almost a negligible amount. Like
[02:59:54] This is just incredible. Keep in mind, this isn't page load.
[02:59:58] you know,  a,
[03:00:00] This doesn't mean you're just going to go pick up and use Rust tomorrow. There's implications of actually using the build websites, but it proves that from the pure update standpoint,
[03:00:11] on the DOM.
[03:00:12] We can do amazing things.
[03:00:13] I think the problem is
[03:00:15] maybe the Rust frameworks weren't using the right architecture. Maybe like a virtual DOM that a lot of them were doing, kind of copying React like you, isn't where you want to be. Maybe you just need to make solid in Rust, like Lepto's.
[03:00:27] like Sycamore
[03:00:29] And
[03:00:29] you're now, you know,
[03:00:32] in a different zone.
[03:00:37] Ha!
[03:00:39] Yeah.
[03:00:40] Yeah, no, I was super...
[03:00:43] That's awesome, Greg.  Yeah, I was super stoked on seeing this  because I've been following this Russ thing  because how often does someone come on a...
[03:00:54] "When are you gonna write solid and rust, you coward?"  And the truth of the matter is I'm like,
[03:01:00] I keep on tongue in cheek being like when it's faster.
[03:01:03] AND I THINK IT'S A GOOD THING.
[03:01:04] And that's a good pushback for now.
[03:01:07] maybe not for much longer.  And it looks like others are going to write solid and rust before,  before I do.  So,  um,
[03:01:15] Yeah.
[03:01:15] uh
[03:01:17] I'm pretty stoked about this.
[03:01:20] It's kind of, you know, so
[03:01:23] pushed it out to Primogen because he's been testing you and he's very disappointed. I don't know if we're doing the isomorphic lighthouse type full end-to-end benchmark, I don't know if the Rust frameworks are going to compare, you know, but this is promising.
[03:01:37] and means that, you know,
[03:01:39] could start focusing on the next problem.
[03:01:43] And actually, I think
[03:01:45] I think there's actually a thread that I saw
[03:01:49] today.
[03:01:50] Yes, Greg, we got here.
[03:01:53] WASM isn't suitable for UI because of how slow dominant interrupt is, is common wisdom.  But digging into the details of this benchmark show exactly where this is right and where it's wrong.
[03:02:01] Why is you so fast on some branchmark and slow on others?  In part, string encoding. See, I'm interested in this thread, because this is where the truth comes in.
[03:02:11] See, you are a mature VDOM library, it's simply smoking the major JSVDOM frameworks, major ones, not the fast ones. It's not only fast than React, but faster than Preact and basically on par with finer grain Svelte. In terms of arguably more...
[03:02:25] important element creation though. U is slow, like super slow, okay?
[03:02:31] Why is this happening?
[03:02:32] string encoding.
[03:02:36] So this is talking about the whole UTF-8 thing, and GSO UTF-16.
[03:02:41] Jared from Bun talks about this all the time.  I don't really fully follow what he's talking about,  but I'm gathering this is...
[03:02:47] JavaScript is very weird in the sense.
[03:02:55] so the options are mostly within WASM, VDOM diffing, U is pretty fast, but when they send a bunch of strings across
[03:03:01] It's slow.
[03:03:03] Huh.
[03:03:05] -
[03:03:07] But the real solution is creating template nodes and cloning them. Leftoast does this inspired by Solid, which is why they're faster.
[03:03:12] the benefit of the template clone is even higher for WASM frameworks because it means you have
[03:03:16] See?
[03:03:18] All right, this is very useful information.
[03:03:27] They can be faster for the equivalent operation by creating elements, setting attributes, and creating text notes is slow because it's passing the strings.
[03:03:34] So if you make a template you minimize that yes,
[03:03:38] Okay.
[03:03:43] That's awesome. See, there we go.
[03:03:44] That's the truth about Rust.
[03:03:49] Isn't that cool?
[03:03:52] Thank you.
[03:03:53] And this is what you find with performance. It's like often not exactly what you think it is. When you look into it, it's like something else and then it's something else and it's like bottleneck after bottleneck. But it's not.
[03:04:03] Sometimes we assume things fundamentally are
[03:04:06] you know, flawed when that's not really the thing that matters or is expensive. A perfect example of that is how people overcompensate on the VDOM being too expensive. The concern with the VDOM isn't how fast it can render something optimally. Like we, I told you, Inferno and Solid are like best buds, like knocking elbows there and BlockDOM as well. It's the fact that the architecture leads
[03:04:25] in my opinion, to end user code being harder to...
[03:04:28] to maintain that performance.
[03:04:31] just because of the re-render cycle.
[03:04:33] That's...
[03:04:34] But maybe you can solve the render cycle a different way and keep your read on.
[03:04:38] You know what I mean?  Like that's, there's so many elements to that.
[03:04:44] So...
[03:04:45] Yeah, anyways.
[03:04:46] See, this is why I find that interesting.  This is why I love the performance conversation.
[03:04:54] All right.  So yeah,  I had to skip my stream for jams.com.  Um,
[03:04:59] Myself, Taylor Hunt, and Michika worked on this streaming article. If you want to know more about streaming and some of the caveats and stuff and the challenges, it's in here. I have to admit I didn't work on this article as much as I wanted to. And then you can tell when you actually read it. Because I put a bunch of notes in and they edited to reflect my notes.
[03:05:19] at the end of the article they're like, you can do this really cool thing and it works like this in Marco. And then you can do this really cool thing and it works like this in Quick.
[03:05:28] And then there's no mention of Solid or anything in there, and I didn't get my jabs in or anything.
[03:05:32] Yeah, I said I was I was more of an editor than writer compared to the other two, but
[03:05:38] um...
[03:05:39] Still a very good article. You can assume that everything that applies to solid or applies to Quicken Marco also applies to solid for the most part.
[03:05:46] Um,
[03:05:47] That was a fun one.
[03:05:49] Yeah, as I said, uh...
[03:05:52] I didn't actually check how much that actually...
[03:05:57] Triggered through...
[03:05:59] When I posted it, Lefto's had like...
[03:06:03] I was like the third person who started the repo.
[03:06:05] Yeah, 800 stars overnight.  Solo didn't get 800 stars overnight.
[03:06:09] Part of it is because you obviously do good work  and people are in a good place for receptive to it.  But yeah, that's impressive, I got to say.  It took us like...
[03:06:20] Six months...
[03:06:22] or a year to get to 500 stars, I feel like.
[03:06:25] So,
[03:06:26] good good good good good stuff
[03:06:31] But yeah, and I apologize.  I probably should give you a bit of a heads up.  I'm sure, actually, let's go back there again.
[03:06:36] one of the fun things when you do this is like...
[03:06:40] How's the issues been going? Okay, okay. Steady growth. Okay, not too bad. I was worried sometimes you do this and someone gets swamped with like tons of issues. I've watched like when someone came up with like a react.
[03:06:50] without a VDOM clone. I saw it jump to like 2500 stars, like
[03:06:54] almost immediately and then had a hundred issues and then like the person was like it was just a demo and they like dropped the project afterwards. So I'm glad that's not happening here and um,
[03:07:05] Very cool stuff, Greg.  Anyways.  All right.
[03:07:09] This is an interesting one. I actually want to talk about this too. Sorry. There was a lot of interesting stuff. I
[03:07:15] - Okay.
[03:07:16] Uh...
[03:07:17] Apparently, Solid's repo has the highest code quality of any open source repo that the Primogen has ever looked at.
[03:07:25] He's like
[03:07:26] He...
[03:07:26] He's like, it's like a hundred times better.  Like he counts, he uses TreeSitter.  They count the number of nodes.  And like most frameworks are like in the hundreds of thousands, but
[03:07:35] maybe a million, and solid's like 55,000.
[03:07:39] - Yeah.
[03:07:39] And
[03:07:41] I was just like, "What? What's going on?"
[03:07:44] And
[03:07:46] He basically tests how well people write their code
[03:07:51] Um...
[03:07:53] Like a minifier.
[03:07:56] Um...
[03:07:57] which is such a funny thing to me.
[03:08:00] Because he basically...
[03:08:03] I've been criticized of this, of writing code like a minifier, because back in CoffeeScript days,
[03:08:09] I didn't like...  I love the Tercent's and CoffeeScript,  so when I moved to JavaScript...
[03:08:14] two things influenced me.  I like trying to get that terseness back.  And secondly...
[03:08:18] I spend a lot of time looking to compile output of CoffeeScript.
[03:08:22] And that influenced how I thought about JavaScript, because I'd write my JavaScript the way the CoffeeScript compiled output would look like.
[03:08:30] so like i tend to yeah write my code like a minifier when he says node it's not about variable  names you can use full length variable names it's not counting the number of characters he's talking  about like logic nodes like blocks
[03:08:41] Right.
[03:08:43] this is a function call, this is an argument, you know, this is a property access.
[03:08:48] This is a conditional statement.  This is an expression which has a single identifier in it.  Like, he's counting it like that.
[03:08:57] Thank you.
[03:08:58] I'm gathering, yeah, he's basically...
[03:09:02] Yeah, my understanding is these like syntax points almost like
[03:09:07] is what he's counting as a node.  So it's not like per character.
[03:09:10] It's basically like the AST.
[03:09:13] And...
[03:09:14] Yeah, so apparently I write code more like a minifier than anyone else. So I don't know whether that's a, yeah, 60 to 100 times less tree sitter notes than any framer.
[03:09:24] For him, this is high praise. I don't know if this is a good thing.
[03:09:28] *pfft*
[03:09:29] -
[03:09:29] He got jived about it because obviously he's like the Russ guy and like,
[03:09:34] They're like, "When are you going to wear your new SolidJS shirt?" But honestly, this is just interesting because I was not expecting it. I think he wasn't expecting it too. He wanted to prove that
[03:09:44] He wanted to prove the difference between spaces and tabs, whether two or four. And his theory was that when people did four,
[03:09:52] Because of the extra indentation it would cause you know people to
[03:09:57] like compress stuff horizontally and not do as much indentation.
[03:10:01] And then he thought if you went to...
[03:10:04] like most JavaScript developers, it's so that they can indent further.
[03:10:08] with their line lanes.
[03:10:09] And the funniest thing about Solid Repo is we're two,
[03:10:13] And...
[03:10:15] I moved the line length up from 80 to 100.  So I have extra long line length.
[03:10:19] And I have...
[03:10:21] Um,
[03:10:23] to indents, which is basically the antithesis of his whole argument.
[03:10:27] So he wanted to find examples where he said, "Okay, this repo has two spaces and longer lines. This one's going to have way more nodes."
[03:10:34] And we were like the sheer opposite of his...
[03:10:37] of his...
[03:10:38] of his thing.  And I said,  I think he's just underestimating the power of coffee script.
[03:10:43] Because in CoffeeScript...
[03:10:45] - Mm-hmm.
[03:10:46] you know, you write everything as terse as possible.  And the reason I do the long line lengths...
[03:10:51] and the small spaces,
[03:10:53] is because...
[03:10:54] I really compress
[03:10:56] vertically.
[03:10:57] Um,
[03:10:58] And as it turns out, if you compress vertically, you also
[03:11:03] tend to compress nodes horizontally. I don't know why that's the case, but basically solid is like a huge anomaly compared to all his other stuff.
[03:11:15] Oh, I got tons of subscriptions on Twitch.
[03:11:18] Oh, wow.
[03:11:18] Thank you.
[03:11:20] Subs. Well, that's amazing. Thank you so much.
[03:11:23] Uh...
[03:11:24] I don't know, it was Nikola Kristoff.  Five gift subs went out.  Thank you, uh...
[03:11:30] I guess when you talk about subs and people sub,  I,  I,
[03:11:33] I don't know what to say. This is really awesome.
[03:11:37] - Thank you.
[03:11:39] I don't even know how many subs I have.  I guess I'll check after the stream.  But thank you.
[03:11:46] This...
[03:11:47] That's really cool.
[03:11:54] Yeah, I mean, there's this question about tabs versus spaces.
[03:12:00] The correct answer is tabs because of an accessibility thing.  And then anyone can set their own.
[03:12:06] spacing based on tabs and you can just go on GitHub and set the setting.
[03:12:09] I am just I was I
[03:12:11] I'm a CoffeeScript dev, so I came up in the whole...
[03:12:15] I mean, I used JavaScript a bit before,  like when I was really young, but that was like
[03:12:18] pre-using IDEs and then it's
[03:12:21] doing really ugly stuff in Microsoft.net. But when I really got into JavaScript and like really made it my own, it was CoffeeScript and everything was Whitespace Matters.
[03:12:29] And in Whitespace Matters languages, it was always spaces, generally, because tabs would confuse
[03:12:33] things, right?
[03:12:35] Um...
[03:12:36] So essentially,
[03:12:39] Pug coffee script
[03:12:41] stylus meant you use spaces and I still use spaces to this day but
[03:12:46] Tabs is the correct answer.
[03:12:51] Right.
[03:12:52] I just like it is so hard for me like
[03:12:55] Space consistency
[03:12:57] in depth actually matters and tabs could cause
[03:13:01] things to
[03:13:02] go wrong with white space matters languages.
[03:13:06] So, yeah.
[03:13:08] Yeah, I mean, yeah, Pug was Jade back then. When I used it, it was Jade. But the thing is, I used it as also Pug. I used that coffee script.
[03:13:17] stylus, pug stack, all the way to 2018.
[03:13:22] 19? Yeah, so that's why it doesn't feel that long ago to me.
[03:13:28] Yeah, I think TypeScript would be interesting too  because I feel like TypeScript is the real killer  for code quality like this.  I think TypeScript is good for code quality,  but I think for his metrics, I think TypeScript...
[03:13:42] basically
[03:13:44] is one of the worst things.
[03:13:46] So it's like the opposite of CoffeeScript. So it's kind of interesting. I don't think this is a good metric. That's what I'm saying. I just thought it was like really interesting that he was giving me points for writing code like a minifier.
[03:13:57] Because I do, because I just hate new lines.
[03:14:00] I like looking at a file and seeing all the code in front of me in the first 30 lines.
[03:14:09] Yeah, thanks Greg for joining. It was awesome.
[03:14:13] Oh, yeah.
[03:14:18] Alright, so let's keep on going. As I said, there is so much cool stuff here.
[03:14:23] This one?
[03:14:25] This, I knew when I saw this talk advertised that this was going to be sweet.
[03:14:31] It's funny, not many people were paying attention on it until I, like...
[03:14:35] pulled it out. Someone, I forget who it was,
[03:14:38] We have--
[03:14:39] username A-C-E-A
[03:14:42] EA or something on our Discord is just like a link bandit.  Just goes on our Discord and off topic and just shares every article, talk, everything that's coming.  And I came across this and I was like, Steve Sanderson, the creator of Knockout and Blazer, is giving a talk about...
[03:14:58] the history of web development.
[03:15:00] I'm like, I need to watch this.
[03:15:04] and I honestly like I was just like  it was better than I thought it would be
[03:15:10] Um...
[03:15:11] As I said, I'm a huge fan. You have to understand
[03:15:14] Like,
[03:15:15] Knockout.
[03:15:16] changed
[03:15:18] Everything it's like what made me fall in love with JavaScript again and like I
[03:15:22] And,
[03:15:23] reactivity that
[03:15:25] I often said solid.  It's a spiritual successor from knockout.  I say probably more than any,  um,
[03:15:32] pretty much any UI library out there, we really continued on the path of Knockout.
[03:15:42] Um...
[03:15:45] To see him talk about this and put his perspective, it was great.  He had examples of like...
[03:15:50] the first web server and all this. And he went through the whole history
[03:15:54] And the funniest thing for me was he got to like knockout Backbone and Angular.  And then he's like, yeah, then the next, you know, five years, there's like newer versions that were, you know, improved on that.  And then he moved on.  He didn't even mention React once, which was kind of...
[03:16:08] funny to me, but yeah, like...
[03:16:10] then he jumped straight to like  Blazor and like WebAssembly which is what he works  on now and then he talked about meta frameworks  yeah
[03:16:18] Like this talk is...
[03:16:20] is i was watching it in real time and i'm like oh my god this is so good i was like trying to tweet  about it while i was watching it in real time and i'm not that good at that and i was just like  more people have to see it i'm glad
[03:16:30] People agreed. It was absolutely amazing. And he surprised me. I was just watching it and then like Solid Start shows up under meta frameworks.
[03:16:38] Um,
[03:16:39] And I was just like, what?  We showed up earlier on a graph that Sarah Drasner had done, showing the link between  all the frameworks.  And we've shown that graph on stream before.  But I was just like, what's going on?  And then at the end, he literally does a five minute demo of SvelteKit to show what modern  web dev in the client is like.
[03:16:58] and like
[03:17:00] Yeah, I mean, yeah, I should have added Rich Harris too, although he found this tweet like,
[03:17:06] Um,
[03:17:07] Yes, Senpai noticed me. Yeah, that's all like
[03:17:11] Yeah, like...
[03:17:12] This was...
[03:17:13] This was probably so awesome for him like we are all big knockout fans and
[03:17:21] No exaggeration, Steve Sander is the programming hero of mine. Svelte wouldn't have happened if not for Knockout.
[03:17:25] And like Knockouts tutorials are like
[03:17:28] basically
[03:17:30] where the salt tutorials came from like they had the best tutorials right off the beginning um
[03:17:37] Yeah, I mean...
[03:17:39] Yeah, this was so freaking cool.
[03:17:41] But...
[03:17:43] Yeah, it's...
[03:17:46] S-
[03:17:46] Yeah, I'm a huge fan and I'm so glad that he did that talk and blew up.  And actually, he had some kind words for us and Solid.  It's really delightful to see where you take the web front end with Solid Dale.
[03:17:58] So
[03:17:59] There's my little moment there.
[03:18:04] so
[03:18:05] Yeah, I...
[03:18:06] I think this is a great talk.
[03:18:09] It's much more general. It doesn't just focus on the JavaScript framework side of things. I think everyone probably should watch this one.
[03:18:21] - Yeah.
[03:18:22] Um...
[03:18:25] Okay.
[03:18:27] I've been talking about a couple other solid things since you're here.
[03:18:30] Dan Jutan gave a talk at React Brussels.  He also spoke at VConf about his kind of tutorial-making harness,  both things done in...
[03:18:43] in solid and his first two conference talks,  but this was his first in person conference talk.  Um,  I've been hearing people rave about this one.  He had 10 minutes basically to sell people on solid.  And apparently he,  he,  he did very well at that.  So I have so awesome to see him out there doing the conference scene.  I love this crate signal in the background.  Uh,
[03:19:02] Um,
[03:19:03] Dan's been doing amazing work for promoting content and educational content in solid
[03:19:08] So
[03:19:09] Super, super, super cool to see.  And he actually, he did a podcast too.  So if you guys want to hear and learn more about Solid and not from me, so maybe a little, you know, more digestible, I strongly suggest checking out the stuff that Dan's been doing.  It's really, really cool.
[03:19:24] quite good.
[03:19:25] Um...
[03:19:28] Right.
[03:19:29] Solved styles, getting updates.  This is cool.
[03:19:36] We've got Dino...
[03:19:39] VIT.
[03:19:40] solid
[03:19:42] all together
[03:19:44] Um...
[03:19:48] I'm actually not sure.
[03:19:50] Did you actually create this demo yourself or are you retweeting it?
[03:19:55] Um...
[03:20:00] I want
[03:20:01] Yeah, no, sorry. I did see that earlier. It's the problem. I just kind of moved on from it. I'll come back around if I get a chance. Um,
[03:20:07] live you on twitch i'm at least everyone is able to check out the link um
[03:20:12] But while I've got you here...
[03:20:15] Seriously, this is cool.  People have been asking for Dino,  and I was talking about we support Dino at runtime.  But this is Dino at build time too.  I haven't tried this yet.
[03:20:24] I think this is...
[03:20:25] This is that this looks pretty cool. I apparently I think is this only client side?
[03:20:29] Um...
[03:20:32] SolidSys, SSR, and Deno templates. Okay. Yeah. So maybe SSR as well. Anyways, it looks like we can run solid in a Deno environment. So this is actually huge. I don't know if people picked up on this. I haven't even looked at it yet, and I probably should soon.
[03:20:46] - Yeah.
[03:20:47] He did solid SSR in the repo itself. That is awesome. Is it using the Babel transform?
[03:20:52] If it's using the Babel, it has to dehydrate. That's Chef's Kiss.
[03:20:57] Okay.
[03:20:58] Thank you.
[03:21:00] you know,
[03:21:01] Okay. This is still...
[03:21:02] very...
[03:21:03] Big news. It's awesome for Dino. Awesome for us.
[03:21:08] To be able to show other frameworks, not using the prescribed TypeScript...
[03:21:12] JSX transform path to be able to actually use this
[03:21:16] I'm super stoked about that.
[03:21:18] While I'm here,
[03:21:20] solid one
[03:21:22] like the front-end framework award from InfoWorld.
[03:21:26] I don't know if that means much of anything to any of you, but...
[03:21:29] done a few interviews. They've got a lot of  tech articles. It was awesome to get recognized.  Svelte got recognized last year
[03:21:36] um and the these
[03:21:38] Quick and Astro were also in the running.  So this was...  It was nice.  I guess this year is our year to get a couple of rewards.  We got the...
[03:21:49] What was that the front and framer?
[03:21:51] um
[03:21:52] or the innovation or breakthrough of the year award from GS Nation earlier.  So we'll see how that goes on.
[03:21:58] I think that's most of what I want to know on
[03:22:01] this side. Um...
[03:22:04] Do check out Ben's content.  I love how-- we talked about this earlier,  putting a single page app inside Astro.
[03:22:11] This was a lot of fun. I've been watching the streams and getting into that.  So do go back and check that if you missed it. It's fun.
[03:22:18] The movie is up. Okay, cool.
[03:22:21] Actually, there's lots of cool solid news.  It's kind of a 3D thing, off to zero.
[03:22:27] There's so many, I mentioned this before, there's just so many...
[03:22:31] ecosystem libraries coming in I can't even keep track of it so let's move on  from the solid news and keep on going on to some other topics here um so where are we
[03:22:44] Um...
[03:22:45] yeah there's a
[03:22:46] We got a few.
[03:22:48] Yeah.
[03:22:49] I didn't retweet this one.
[03:22:51] Because I don't like the tension it brings between...
[03:22:54] frameworks too much, but I just wanted to
[03:22:57] Will we?
[03:23:00] I, I, I, we see a lot of these kinds of comparisons and I think,  I think it's interesting because sometimes when you rewrite an app,
[03:23:06] You just rewrite it better.
[03:23:07] But, um...
[03:23:10] Yeah, I mean, it's always nice to see these timelines and when people share
[03:23:14] share kind of
[03:23:16] their work and are happy with solid.  So I just wanted to point this one out just in case,  like people are like, oh, you know, why?
[03:23:24] Why don't you promote and push this? I don't like this kind of this versus that dialogue
[03:23:28] that this kind of promotes too much. And I understand it's natural because you have one app and you replace it with another app and then you're like, look how much better it is.
[03:23:35] Ninety-
[03:23:36] 5% less scripting time on the first try.  I mean, that's impressive.  The thing that I really liked about this...
[03:23:43] was he's like, I'm not hating on either. He's just like,
[03:23:50] He actually tried Preact Signals and he got similar results. He just didn't like the ergonomics. It just didn't fit with him. He was just the experience.
[03:23:58] you know
[03:23:59] which is great.  Like you just kind of,
[03:24:01] you know,
[03:24:03] just kind of understanding and he's like, there's a couple little things like, how hard was it to go from Preact? It's easy to forget on cleanup and return functions, you know,
[03:24:12] because the types don't complain, you know, good learnings here.  And I'm just, I'm always happy to see examples like this in the wild.  So, um,
[03:24:19] you know, um,
[03:24:22] Yeah.
[03:24:23] Great stuff.
[03:24:25] Um...
[03:24:27] This I wanted to point out earlier, this is what led to that whole conversation about context. I didn't show this earlier, but
[03:24:36] Dan Abramoff was like, hey, I haven't seen Context between islands.  Well, we saw that earlier on the stream.  If you missed it, go back earlier and you'll see how Context works on...
[03:24:46] Disconnected islands.
[03:24:49] Um...
[03:24:50] But I think that's all kind of...
[03:24:53] Okay, almost there.
[03:24:54] Thank you.
[03:24:55] This is also a great Danny Vermaugh tweet.
[03:25:00] And I want to talk about this because I was talking a bit about the ivory tower design versus like the scrappy design earlier on stream and difference in approaches like how I approach problems compared to maybe how the React team approaches problems.
[03:25:15] Yeah.
[03:25:15] and
[03:25:16] He said he keeps on noticing this funny recurring pattern. Implant an abstraction that's too powerful.
[03:25:21] Implement a newer abstraction that's more constrained on top of the old one, hide the powerful parts of the old one, re-implement the new one as if the old one never existed, and delete.
[03:25:29] The old one.
[03:25:32] And
[03:25:33] Yeah, I mean, this is how you reshift. I call this reshifting boundaries.
[03:25:38] Um...
[03:25:39] Because sometimes...
[03:25:41] You use this pattern also to pivot?
[03:25:44] a little bit. The important part is you do the work the first place, you get the learning,
[03:25:50] And then you have to shift on it.  And I was kind of...
[03:25:53] saw this and I was like,
[03:25:54] So this is what the React team has been doing the last five years.  I mean, that's a sarcastic take.
[03:26:01] But it's like,
[03:26:02] I don't mean in a disrespectful way at all. This is part of the exploration process.
[03:26:10] And this takes time because you kind of, you know, go a little bit forward a little back a little forward back  It's like doing like an nth
[03:26:18] point turn in a vehicle like it.
[03:26:23] But, I mean, he's talking about actually...
[03:26:26] finding that ultimately the simpler model...
[03:26:29] is all that you need. And I think server components were an example of this. They had something called flight, I think, a while back. And
[03:26:36] uh...
[03:26:38] or blocks.  I can't keep track of them all.  And this was like a way of stitching together  different types of request formats  so they could like,
[03:26:45] do some probably crazy stuff, you know, like be able to like, send multiple requests at the same time and responses and like stitch them all together.
[03:26:53] And then now we just have server components.
[03:26:56] Thank you.
[03:26:56] And I think
[03:26:58] This even happened with suspense and transitions.  It started with a much more complicated transition model and slowly simplified.  The funniest thing that's been happening
[03:27:06] to me at the same time, or with Solid, the work we're doing, is
[03:27:12] I see what they're doing and I'm like, oh my god, that's so incredible.
[03:27:17] Man, I can never do that.  That's going to take so much work.  I can't.  Like, how would I possibly do that?
[03:27:23] And I look at it, I'm like, okay, well...
[03:27:26] The thing that I like...
[03:27:29] is this part this is the part that i value of it maybe if i just like don't do the rest
[03:27:35] It'll be good enough.
[03:27:39] And then what's been happening is the React team scales back
[03:27:43] And we meet in the middle.
[03:27:45] That, that, if, if...
[03:27:47] uh,  someone like made a comment and I thought it was kind of funny.  I say someone,  but it was,  uh,
[03:27:53] uh,
[03:27:54] Sorry, where was it?
[03:27:57] When I tweeted out this stream today, when I was talking about
[03:28:03] Solid server components.
[03:28:05] I got a quote tweet from Adam Rockets, "Lol, this dude just single-handedly building simpler versions of React greatest hits in a third of the time."
[03:28:12] And
[03:28:14] I'd ask if solid simpler foundations allow for quicker implementation and things like this, but I'm not smart enough to understand the answer, so I'll just assume that's the case.
[03:28:21] I think so, yes.  But I think it's also because...
[03:28:26] Maybe I'm just not as ambitious to begin with.  I take it sort of opposite, pragmatic, pragmatic.
[03:28:33] where I'm kind of skeptical about
[03:28:35] And then I'm like,
[03:28:36] like
[03:28:38] try and distill it.
[03:28:39] and then not...
[03:28:41] like
[03:28:41] do the grandiose thing off the bat that's the best way i can put it i think this was an interesting  observation
[03:28:50] Okay, thanks for filling in.
[03:28:53] Um...
[03:28:54] Because what Dan had mentioned to me when I talked to him was that he was very that there was like some kind of a
[03:29:00] Um...
[03:29:02] data fetching format thing that was very single page app oriented.  Then they had the server component stuff and they were both
[03:29:09] floating around at the same time and his big contribution to React last year was that he was very proud of this when he realized that they could just get rid of the one thing and only leave server components in it.
[03:29:20] they'd be better for it.
[03:29:22] So I don't know what that other thing was. I assumed it was flight or blocks, but he like I don't know all the internal codenames but I
[03:29:29] Yeah, thanks for the clarification.
[03:29:34] *sniff*
[03:29:35] the difference between pioneering tech and implementing it.
[03:29:38] Yes, but there's also a difference between...
[03:29:45] Yeah, how do I put it?
[03:29:49] They...
[03:29:51] Like when I hear pioneering...
[03:29:52] I think it also includes implementation.  And I think there's a different...
[03:29:58] The point at which a lot of the
[03:30:00] with solid forks is at the conceptual level, not at the implementation level at all. So
[03:30:05] It's more like there's a difference between...
[03:30:09] Thinking...
[03:30:10] of a direction and implementing it.  Is a better way of putting it there?
[03:30:16] I don't know I've actually learned very much React from their implementations at all.
[03:30:21] If that makes sense. I actually start from the idea and then go, "Huh."
[03:30:25] What part of that idea do I like?
[03:30:27] And then I come up with a completely different implementation because...
[03:30:31] AND I THINK THAT'S THE
[03:30:32] There isn't...
[03:30:33] actual similarities in a lot of cases.
[03:30:38] There's also a difference between copying and reimagining it too. I don't actually often get the chance to just straight up copy things because the
[03:30:46] I'm used to the cycle. The underlying way Solid works works so differently than React, I almost never get to copy anything.
[03:30:53] like testimony this is spreads
[03:30:58] You saw the spreads?
[03:31:00] There's no way I copied spreads from React. Sure, I copied the syntax from the JSX because it's part of the JSX spec.
[03:31:06] but there's no way you'd consider that copying.
[03:31:09] almost everything
[03:31:10] concurrency
[03:31:12] transitions.
[03:31:14] like all our mechanisms,
[03:31:16] are like that different than than react.
[03:31:21] Sometimes that makes things complicated like spreads.  Sometimes that makes things way, way, way, way simpler  because Solve knows how to handle DOM nodes,  like that context example.
[03:31:29] Right.
[03:31:30] So...
[03:31:32] Yeah.
[03:31:36] Yeah, and that could be a description of solid versus react. It's only superficially similar.
[03:31:42] Um
[03:31:45] So yeah, I mean I found that I
[03:31:48] I found that like an interesting sort of...
[03:31:52] sort of revelation there.
[03:31:58] Yeah, let me... I think...
[03:32:02] Yeah, let me go back here.
[03:32:05] I think this is really powerful before moving on.  I think we all do a little bit of this.
[03:32:11] And I think just recognizing it,
[03:32:13] is
[03:32:14] is really
[03:32:15] Good.
[03:32:16] Yeah, the facade pattern.
[03:32:18] When he said this, this is exactly what came to my mind.  I was first introduced to this when I was working in a .NET code base and they followed the gang of four, you know, like the,
[03:32:27] design patterns thing and the facade was a trick that we used to use like when we refactored everything and
[03:32:34] But...
[03:32:35] Yeah, I mean...
[03:32:37] Some people are confused by too powerful.  Any...
[03:32:39] So...
[03:32:40] I like this aspect of this conversation too, because too powerful is a real thing.
[03:32:47] Sometimes your APIs are too flexible.  They give people too much rope to hang themselves with.
[03:32:54] And usually that's the hardest part.  When you want people to fall into the pit of success,
[03:32:59] Solid has a lot of restrictions around its reactivity
[03:33:03] because
[03:33:04] we want...
[03:33:07] We want you to be able to be successful with it.
[03:33:10] And
[03:33:11] I'm going to go.
[03:33:11] Things that are too powerful
[03:33:14] For example, it's like two-way binding.  Two-way binding, in my opinion, is too powerful.
[03:33:18] That's what he means by too powerful. It's like
[03:33:20] You can...
[03:33:21] you know, do anything anywhere.
[03:33:29] I love this on the thing. Just copy the names. The naming is things hard. Yeah, that's exactly it. I just copied the names. I also...
[03:33:37] I do more than copy names. I copy the intent, you know, behind the names, so to speak. But yeah.
[03:33:47] Um...
[03:33:48] Yeah. Anyways, this one is just a
[03:33:52] I think it's, I think it's,
[03:33:54] I think it's...
[03:33:55] good to notice and kind of take note for yourself. This is something you have to do when you have real people using your app and you learn a lot through that but it means it's a slower process.
[03:34:04] We've been lucky.
[03:34:06] I say lucky, but when you're a smaller person,
[03:34:09] you can move faster because there's less people using it.  In the case of something like server components,  as I said, it's more like a wrapper, so it wasn't that hard.  But it's definitely interesting to see this.
[03:34:20] Speaking of...
[03:34:21] More cool stuff.
[03:34:23] Preact is working on streaming.
[03:34:25] This is out of order streaming right here. See?
[03:34:28] I forgot to mention this in a different thread with a Cloudflare.
[03:34:32] But Preact is working on...
[03:34:35] This is out of order streaming. See? Loading plays streamed in and then this content was added.
[03:34:40] Um,
[03:34:41] Thank you.
[03:34:42] I don't know.
[03:34:43] There's a couple things that I found interesting about this tweet.
[03:34:46] First of all,
[03:34:47] Let's look who retweeted my tweet. Only one person in the world retweeted my tweet.
[03:34:52] Kent C. Dodds.
[03:34:57] Kent?
[03:34:57] Used to work on Remix.
[03:35:00] But Kent has never retweeted anything I've said, I think, except if it was part of, like, us, like,
[03:35:06] reconciling after the whole incident that happened a few months ago. So
[03:35:10] I'm just...
[03:35:13] This is curious to me, and then when I go in here,
[03:35:19] and look at the tweets and the talking and stuff and
[03:35:26] Oh, also from Remix, Jacob, it's so nice when you meet others who are actually willing to see your
[03:35:31] you know
[03:35:33] Play with the projects others use. Thank you for taking this. Yeah, so this streaming thing actually started in
[03:35:39] from
[03:35:40] from Remix.
[03:35:43] Interesting.
[03:35:51] So, I don't know. We can all choose how much we want to read into this.
[03:35:59] But Remix is big on streaming these days.
[03:36:02] Right?
[03:36:03] And...
[03:36:05] um
[03:36:10] Yeah.
[03:36:12] Yeah, I don't know.  You know, like they have that defer thing, right?  Solid has a similar defer thing as well.
[03:36:19] And I feel like
[03:36:21] Yeah, I mean, I know that they're working on it, but this much attention,
[03:36:25] I think Remix is kind of being off-put by everyone who keeps on telling you, like, oh, I'd love your framework if it wasn't for React.
[03:36:33] And then Preact goes signals and kind of
[03:36:36] Gets out of react shadow.
[03:36:39] And then
[03:36:40] All this remix stuff. I don't know.  You guys can put two and two together for me.
[03:36:45] of
[03:36:47] But I'm...
[03:36:50] I don't know if this pre-act integration for Remix  is just going to be like another integration,  like we have you and Svelte.  I get the opinion.  I get the feeling that...
[03:36:58] *clap*
[03:36:59] This seems like they're working towards getting a recommended path. I don't know. We'll have to see where this goes, but I wonder if Remix and Preact become kind of like...
[03:37:09] married at the hip a little bit in the future.
[03:37:12] It's just, it was...
[03:37:15] I don't know.
[03:37:16] it's curious to me. It would be a good move too, because this would address a lot of
[03:37:20] the stuff, at least the common sense.  It's not as cool perhaps as the server component island stuff I showed today.
[03:37:27] But given how much...
[03:37:29] the...
[03:37:30] the Remix guys have been skeptical of islands.  There's actually, if you go to Remix blog or whatever,  let's see, Remix, was it Remix run.run?  If you go here and you go on their blog  and you look up server components,
[03:37:44] See, I'm a pretty big believer in server components.
[03:37:48] conceptually at least, maybe implementation needs work. This whole thing
[03:37:54] is basically saying like,
[03:37:57] Thank you.
[03:37:58] Yeah, you can use server components, but yeah...
[03:38:04] You know what I mean?
[03:38:07] - -
[03:38:08] I don't know.
[03:38:09] And they've been very skeptical and partial hydration conversations still to this day.  So I...
[03:38:15] Yeah, I don't know. This seems like an alignment. We'll have to see how this develops.
[03:38:24] Yeah, big into web components.
[03:38:26] Yeah, I've seen that too.  So...
[03:38:28] Yeah, I think
[03:38:32] I know there's a plan to integrate other...
[03:38:34] frameworks. That's been in the talks a while. In fact, we talked with them
[03:38:39] pretty early on about integrating solid, but when the requirements came through, it was like clear that we couldn't do it anytime soon.
[03:38:45] And that
[03:38:47] We couldn't be a priority.
[03:38:48] Um
[03:38:50] But...
[03:38:54] But yeah, I think that's interesting.  Fresh and Preact also obviously made a ton of sense,  because they can just use the standard JSX transform.
[03:39:03] and leverage Preact as is today.
[03:39:08] Yeah, Preact's an interesting one, because, like, I think they are right now going through...
[03:39:15] that sort of
[03:39:17] period where they're kind of
[03:39:20] trying to maybe establish their own identity. Like if you,
[03:39:23] it.
[03:39:25] historically, like, Preact's well-known, well-loved, but if you go, like, I don't know if there's a Preact front-end master's course or something.  Like, you don't find...
[03:39:34] Preact as like a different option.  It just gets bundled under React.  You're like, oh yeah, I know React.  I know Preact.  So they've leveraged that.  But on the other hand,  they haven't had as much of an identity till now.
[03:39:44] So,
[03:39:45] I find both of these very interesting, but because it's like React, for people who are leaving
[03:39:50] React or want to like explore a little bit beyond react and they care about the stuff we talked about today like  About small bundles and performance preact is a very logical thing and even adding the stuff like the signals
[03:40:01] you can still kind of
[03:40:03] sort of feel like you're
[03:40:06] like doing some of the, you know, reactive stuff and, and, uh, you know,  keeping react together. I think that marriage is an interesting one, which, uh,
[03:40:16] from that earlier tweet we saw where like there's some awkwardness there perhaps but i think that
[03:40:22] This is going to be...
[03:40:24] something we see a lot in the next few months.
[03:40:33] Remix got really upset with the Next. Yeah, I mean, I don't know if they got upset, but I mean, I think this has been hard for everyone. It's been hard for Hydrogen. It's been hard because like this is it seems very clear that Next and React are really in a line. And then everyone else is kind of like, what am I doing here? And the other Hydrogen has been using server components. So I think that's the thermometer.
[03:40:53] Okay, I'm going to say it right now.
[03:40:55] What the?
[03:40:56] Hydrogen's success with server components...
[03:40:59] is how much you get to decide how true this is. If hydrogen and server components go good,
[03:41:05] then
[03:41:06] Um...
[03:41:08] I feel like, you know, we're just seeing some growing pains and, you know, stuff will kind of
[03:41:15] you know, level out where they go.  Because I'm pretty confident that service components are a good thing. So I think
[03:41:21] you know, that was it. However, if we see
[03:41:25] Hydrogen have a hard time with server components, maybe drop them or something.  I think this very much supports this narrative about the React-DEX merger and
[03:41:37] That's much, much more concerning, right?
[03:41:39] 'Cause,
[03:41:41] you know, what are the React major meta frameworks?
[03:41:44] Next.
[03:41:45] Remix
[03:41:47] hydrogen.
[03:41:48] Gatsby
[03:41:50] Gatsby went to partial hydration. I don't think they went to server components.
[03:41:53] but they have their own kind of case so or maybe they're using server promotes for partial hydration but their solutions kind of
[03:41:59] Yeah.
[03:42:01] I think...
[03:42:02] If only one of four align with the vision, then I think that's...
[03:42:07] pretty telling. So right now I think hydrogen's going to be our thermometer.  We'll see how hydrogen goes and that's probably how I'm going to base my
[03:42:17] how things are going.
[03:42:20] What happened was the head of the React core team, essentially, the visionary,
[03:42:27] left meta and is now working at Vercel.
[03:42:29] Um,
[03:42:31] Sebastian Marcobalje.
[03:42:32] and
[03:42:35] This has called some things into a thing,  like is React core team basically just...
[03:42:41] - Yeah.
[03:42:41] you know,
[03:42:43] supporting like in one sense it's good that maybe they're not only under meta's vision of the future  but like people are worried that like next basically it's like collusion like they're like
[03:42:54] - Yeah.
[03:42:55] They're keeping everyone else out. They come up with all the cool new tech together and then show everyone else like after they've already released it.
[03:43:02] So like they,  they're just like,  they're always have an edge.  Like,
[03:43:06] They're like, they always get it first.
[03:43:09] kind of thing and then everyone else has to scramble to catch up and be like, "Oh, do you support this thing next to us?"
[03:43:15] And, you know, it's basically like as if the React core team was working for Vercel.  That's sort of what the conspiracy theory angle is.
[03:43:23] And as long as the other projects are flourishing and doing stuff, I don't think we have to worry about that, as I said.  But...
[03:43:29] Pay attention to hydrogen.
[03:43:31] That's where I put it...
[03:43:36] - -
[03:43:38] Sorry, okay. Something to drink.
[03:43:42] Thank you.
[03:43:43] -
[03:43:45] *laughs*
[03:43:47] Yeah, I mean...
[03:43:48] To be fair, if you're talking about the old docs, the old docs have been around forever.
[03:43:52] Beta docs are more interesting. I don't
[03:43:54] know about that but yeah I think I think if I was just like measuring
[03:44:00] things I'd look at hydrogen. Enough on that, but this is very interesting to me.
[03:44:04] And
[03:44:05] Keep on watching.
[03:44:07] remix
[03:44:08] Preact relations.
[03:44:12] And pay attention to hydrogen. I think, I think,
[03:44:15] This is sort of
[03:44:17] Where some movement...
[03:44:21] Seems like it's likely to happen.
[03:44:22] Okay.
[03:44:23] THE END OF THE END OF THE
[03:44:31] Yeah, yeah, yeah, yeah, yeah, yeah. We already talked all about server components.
[03:44:35] Sorry, how about Solid's attempt at it?  Jamstack Conf coming up?
[03:44:39] Couldn't be fun. I'm also doing front-end masters coming up. Lots of great stuff coming up.
[03:44:44] Okay. Before we get into the reactor RFC, I got one more one for you guys, uh, which is talk about this cloudflare article. Actually, let me double, double check that. I don't have anything else. Um,
[03:44:55] Which is...
[03:44:59] No, I've got...
[03:45:01] Okay, I got one quick note.
[03:45:03] Before, okay, really quick note.
[03:45:06] I love this. I love showing people this because I always get hounded about this.
[03:45:10] The new beta docs page for clone element.  This is mostly legacy things, so I focused on documenting common alternatives.
[03:45:16] How many of you are familiar with React clone element?
[03:45:20] He lets you take a VDOM node and clone it.
[03:45:23] And then you can like mess with it
[03:45:25] and reinsert it. It's like this pattern that people use
[03:45:30] To kind of like...
[03:45:31] upgrade children that get passed to it.  And I get asked...
[03:45:35] for this feature all the time in solid,
[03:45:37] And it's one thing we can't do because it literally is an abstraction breaker.  Like it's literally acknowledging that there is a VDOM.
[03:45:43] There, you like clone VDOM, that's what this is.  'Cause you wouldn't clone a real DOM note.  If you were actually being performant,
[03:45:50] You never go like, oh yeah, let's just make some more Dom nodes for fun.
[03:45:55] you'd enhance it, augment it
[03:45:58] I just...
[03:45:59] *laughs*
[03:46:00] Code element is on top and can lead to fragile code.  I just love...
[03:46:04] seeing the React core team just like
[03:46:06] Because this keeps on coming up.
[03:46:08] And
[03:46:10] I don't think it's legacy. Yeah, well, I hate to break it to you. The problem with this is the same problem with children's introspection.
[03:46:23] React doesn't want you to do it because it gets in the way of their ability to optimize.
[03:46:29] It's actually a pain in the ass.
[03:46:30] to support children's perspective.  This is one thing that template, like DSLs, have...
[03:46:35] to their advantage, people aren't just
[03:46:37] looking at the children and augmenting them.
[03:46:40] No one, like...
[03:46:41] Framework authors do not want you to do this.  It's just innately abstraction linking.
[03:46:49] Yes, and it's just not logical for people using it.  It's really nice from a final API perspective, but it's just...
[03:46:58] It is not good.
[03:46:59] And I say that I
[03:47:04] You know, it's...
[03:47:08] Kevin's a big fan of it.  He's been working on a new...  His whole pattern is based around it.  He actually figured out how to make it work in solid.  So, I mean...
[03:47:16] Props to him because
[03:47:18] That is probably really freaking hard to make it work in solid.
[03:47:22] So that's dedication. He's also the guy who created the React Solid bridge, which uses portals to do a crazy thing where you can portal in a portal and a portal and a portal and share context and have React and Solid seamlessly working together.
[03:47:39] Like he knows his stuff here.
[03:47:41] But there's this whole question of just because you can, should you?
[03:47:48] It's funny because everyone has a different opinion on it. Can I actually quickly show in the playground what I'm talking about?
[03:47:55] I don't know if there's
[03:47:56] Actually, it's in the article.  It's in his definitive guide.  Does he have an article version of it?
[03:48:03] Essentially...
[03:48:04] I saw something like this shared with me.  It was like event...
[03:48:08] target
[03:48:09] equals something or other
[03:48:12] And then...
[03:48:13] You basically use JSX elements to decorate some kind of child. So you could be like,
[03:48:20] have a button.
[03:48:22] And then...
[03:48:23] You can like...
[03:48:25] Essentially...
[03:48:26] use this event element and
[03:48:28] to enhance...
[03:48:29] the button.
[03:48:31] And
[03:48:33] This is very much a clone element type of
[03:48:37] problem, right? And it's interesting because a bunch of people were like, "This is awesome, right? Because now you have the behaviors here, and then you can style this button however you want."
[03:48:47] You don't have to worry.  Because what's the alternative?  You have like...
[03:48:51] Mm-hmm.
[03:48:52] Thank you.
[03:48:52] buttoned.
[03:48:54] Right? And now like,
[03:48:57] I'm not.
[03:48:58] like this kind of separation is,
[03:49:01] you know,
[03:49:02] people...
[03:49:03] you know,
[03:49:04] quite like on one side. The funniest thing for me is when I saw this,
[03:49:09] People who watch my stream are pretty...
[03:49:12] you know, for a long time, will recognize this.
[03:49:15] Um,
[03:49:22] I literally saw this and I was just like,
[03:49:24] Doesn't this remind you of this?
[03:49:28] And...
[03:49:30] I've got some React people in the crowd.  They know what's up.  This is what you used to do in Next.
[03:49:36] And I was on a stream converting my Hacker News app.  And literally every link I had to go through and wrap it in a link tag, change this to lowercase, move the props around.  And it was so funny because the app was already written in Remix or some other React version.
[03:49:52] flavor thing. And
[03:49:54] It was so easy, like the whole app worked, everything wired up. I just changed like loader to get server side props. I mean, it was basically identical, except for this one link tag.
[03:50:03] And...
[03:50:04] essentially I spent the whole stream like 20 minutes going through because it wasn't because  it wasn't easy just to do a copy paste operation like even when I tried to optimize it because of  the way the props moved and stuff like I literally had to go through handband so I spent like like  20 minutes on stream I was talking and going through stuff I literally spent the whole stream  just converting these stupid link things um
[03:50:28] index and
[03:50:29] Literally, they made that optional the next week. I don't know if I had anything to do with that, but that's when they released it.
[03:50:41] As I mentioned, it was the next thing, but literally the next week they changed this.
[03:50:48] *laughs*
[03:50:48] Some people joke that I was responsible for that, but I probably wasn't. I don't think I'm not as in with the next people as someone like Theo is.
[03:50:59] Eat.
[03:51:00] Yeah, it's
[03:51:03] I'm not saying this is a bad thing.  It's just...
[03:51:06] because there is a certain thing about separating your behavior, like kind of like a headless mentality around this. But like,
[03:51:12] You can also do this with render props.
[03:51:15] And the problem is, if you do this with render props,
[03:51:19] Nope.
[03:51:20] It's not a nice API.
[03:51:22] Because suddenly it's more like
[03:51:25] you have to
[03:51:27] do this right and now you have a function
[03:51:31] and it had some props
[03:51:33] And then...
[03:51:34] whatever they are, and then you have to go like,
[03:51:38] Like this
[03:51:40] So you've got a bunch of extra boilerplate here.  And there's a pattern that Kensey Dodds recommends  called prop getters that are kind of similar like this.
[03:51:49] where you actually
[03:51:52] give the props, like it's actually a getter function, and then you like
[03:51:56] past arguments to that and stuff, but...
[03:52:00] I understand why this is desirable from an API standpoint, but...
[03:52:06] it's kind of magical that budding gets upgraded where this is very explicit.
[03:52:10] Um...
[03:52:11] But anyways, I didn't come into...
[03:52:14] necessarily, you know,
[03:52:16] pick out that pattern.  It's just,  it's interesting when,
[03:52:20] Um...
[03:52:22] Like,
[03:52:23] Thank you.
[03:52:25] - Thank you.
[03:52:25] like
[03:52:26] They don't want you to do this.
[03:52:35] *sniff*
[03:52:37] So...
[03:52:44] Having written a few component libraries, clone element is a de facto way for most libraries to do it. Yeah.
[03:52:52] Yeah, I mean, here's the thing.  I don't think it's no longer for me.  I think it never was actually the good thing to do.  It's like one of those patterns that was like never actually good.  Like, but like...
[03:53:03] how else are you going to do it? And then people are just like, okay, I did it. Like, I think it's like context. Originally context existed and people jumped on it unexpectedly. And then we actually like, okay, actually, we should make a context API. This is a real thing. This is a real pattern. I love that story with context though. It's different than this, because this is
[03:53:19] one of those clearly
[03:53:20] Thank you.
[03:53:21] shouldn't be a good pattern but like context was like we didn't know the best patterns for global state and
[03:53:28] And then
[03:53:28] people are like, okay, you can do dependency injection and then use this thing that React kind of hides as a second argument.  And then...
[03:53:35] that helped actually develop
[03:53:37] a really good pattern that we have today so sometimes these things
[03:53:41] coming in are good.  Sometimes not.  I feel like clone element existed more as a utility thing,  and then it got way overused in a way that the team never really intended.
[03:53:51] You know, it's like, oh, if we have an element, we should be able to clone it.
[03:53:57] But yeah, so...
[03:53:59] Yeah, I think that's good for that one.
[03:54:07] All right.
[03:54:12] Making sure I didn't miss anything more in Twitch. Let's keep on going. Um,
[03:54:17] Okay, so let's talk about, I think we're ready.  Let's talk about the RFC.  Okay.
[03:54:24] can close down some of these windows that don't matter.
[03:54:27] Um...
[03:54:29] For those who don't know what I'm talking about when I say talk about the RFC,
[03:54:34] Um
[03:54:35] Oh, no, actually, I'm not talking about RFC.  Sorry, I forgot.  We still have the Cloudflare one.  One more, one more, one more.  Um...
[03:54:41] you
[03:54:42] If you didn't see this,
[03:54:43] This was a really cool kind of demo.
[03:54:47] essentially...
[03:54:49] They're using...
[03:54:50] edged worker to worker communication to stream...
[03:54:54] a single app through a single edge were different
[03:54:58] edge workers render part of the app, and then they stitch them together on the server
[03:55:03] on the edge worker server and then
[03:55:05] all streaming together to stream out to the client.
[03:55:10] And the idea is like,
[03:55:12] This could be the future of micro frontends.  If you aren't familiar with micro frontends...
[03:55:17] Um...
[03:55:19] The...
[03:55:23] There's like...
[03:55:25] basically
[03:55:27] Right.
[03:55:29] We talked a bit about islands earlier.
[03:55:31] But the thing with micro frontends is...
[03:55:34] It's a way of breaking your app into multiple
[03:55:36] smaller apps so that teams can work together easier,  as in deploy author separately  without having to coordinate with each other.  At large companies, this becomes prohibitive  to be able to like,
[03:55:47] work together on the same pages,
[03:55:49] and parts of the application if you're like all like trying to deploy your features. So this  creates separation. This is not something you want. I just want straight out there. If you're like,  oh, I want that hot new micro front ends architecture. No, no.
[03:56:03] Avoid micro front ends like the plague until you absolutely need them.
[03:56:08] Like, you'll know when you need them.
[03:56:12] like micro front ends are...
[03:56:14] are not
[03:56:16] Good. It's like adding a bunch of overhead
[03:56:19] Because you have people and people are real things that you have to consider and
[03:56:24] not because of the technology.
[03:56:28] So, sometimes it's good for migration, maybe. But like, it's like the old web component joke or the Astro Islands joke of like, just because you can put every...
[03:56:37] framework on the page doesn't mean you should put every framework on the page.
[03:56:41] um and i hit micro frontends uh at ebay um when we're working ebay ebay actually avoided micro  frontends for the most part except for a few select cases for quite a long time and that's  because a multi-page app architecture meant that pages are already mostly separate  so other than like sneaking in some ads and a shared global header
[03:57:02] Teams didn't have to overlap too much, they just stayed in their page.
[03:57:05] However,
[03:57:07] Single page apps hit the crisis with micro front ends much, much, much sooner.
[03:57:12] because all their code started just kind of like getting into the single  repo,  single bundle,  single thing.  And,
[03:57:17] In the early days there were some really cool patterns around micro front ends that were pretty good. I actually really liked, I think Zolanda had something called mosaic.
[03:57:30] And it was like...
[03:57:31] it kind of weaves stuff together in a really smart way.
[03:57:37] But...
[03:57:38] The...
[03:57:39] The thing is, like...
[03:57:42] Over time, we got to like different solutions are very client driven.
[03:57:46] or at least the way they're used, things like module federation from Webpack.
[03:57:50] And
[03:57:51] That's what...
[03:57:52] It's kind of terrible, actually.  I don't know how else to put it.  We don't want to insult projects or approaches and stuff, but like...
[03:58:00] Module Federation,
[03:58:02] is conceptually the worst thing I could think of in terms of performance and whatnot.
[03:58:09] and
[03:58:13] What's going on with these pixel art things going on here?
[03:58:18] Um...
[03:58:19] I...
[03:58:22] I...
[03:58:22] I don't know. I think we...
[03:58:24] Wander is fine. But maybe stop spamming them or I'll have to
[03:58:30] Do something.  Okay.
[03:58:32] Um...
[03:58:34] So
[03:58:36] Essentially, where was I?  The problem is if...
[03:58:41] If you're using,
[03:58:42] the client to stitch together. You need this extra architecture on the client actually pulling the code and managing different versions and doing all this stuff. And it's just like,
[03:58:51] Why are we doing all this in the browser?  It's basically prohibitive of you trying to do  like a server-centric architecture.  Like this was a no-go for eBay.  Don't get me wrong.  People have been working on module federation  on the edge behind on the server side.  I think it's cool.  I think maybe doing that as an approach for a server is...
[03:59:07] is potential. But if you go look at micro front ends and go like, how do I use module for iteration  here? All the free solutions are like how you can just use a web pack. I'll focus on the client side.  And then if you want on the server, you've got to pay someone.
[03:59:19] like it's a paid service
[03:59:21] So it's kind of like, okay, so if you actually want to do them nicely, you actually have to use a paid service.
[03:59:26] It's not technically true, perhaps, but it's complicated.
[03:59:30] What we ended up doing at eBay was...
[03:59:34] Dylan, genius that he is, worked on...  He's like, okay, I want...  Marco, one of the earliest streaming frameworks,  he's like, let's...
[03:59:45] Let me go back up.  He's like...
[03:59:47] What if we could...
[03:59:49] And then we talk a little bit about this.
[03:59:51] Um...
[03:59:56] Yeah, here we go.
[03:59:57] eBay was able to push them back for a long time because NPAs, okay.
[04:00:00] The problem is a bunch of teams at eBay started trying to bring in module federation, trying to bring in their own solutions, and we realized we had the standardized...
[04:00:09] And
[04:00:10] What we ended up doing is creating this thing called microframe.  It basically has the eye...
[04:00:15] It basically has the API surface of an iframe.
[04:00:19] And...
[04:00:21] Essentially, you set the source, and then it had a few, like...
[04:00:25] These are Marco tag versions. This works without Marco. You could have a non-Marco version, but essentially
[04:00:32] You set the source and then you have this ability
[04:00:35] to...
[04:00:36] either on the client or on the server, stream in
[04:00:41] HTML everything community HTML so you can use that HTML to pull in JavaScript assets you can use that HTML to so you make it
[04:00:48] streaming a single page app, streaming whatever. The idea is imitate
[04:00:52] the system of the server essentially and use
[04:00:56] source and URL parameters to basically trigger it.  And it's funny, Cloudflare basically came up  with almost the exact same solution.  This is an open source library, by the way,  if you wanna go check it out and kinda play around with it.  This is a cool way to do server-side or client-side  streaming micro front-end stitching without depending on,
[04:01:15] You only need to do client-side if you include this in your client bundle.  Otherwise, you can work purely server-side.  This doesn't lock you into that, and it's pretty lightweight.  It doesn't handle the problem of different versions of JavaScript modules and all that stuff that Module Federation does,  but it handles the simple part of actually serving a micro front-end app.  And as I said, Cloudflare did a very similar approach using HTML as a communication piece between...
[04:01:42] all these fragments and then stitching them together into the stream in response to the end user.
[04:01:46] I think this...
[04:01:47] is really cool and they talk about caching the fragments and stuff they uh
[04:01:52] Obviously it was good performance. Basically they didn't lose they didn't suffer a
[04:01:56] for having micro frontends in the way that most apps suffer for having micro frontends.
[04:02:03] iframes are less than ideal. And actually,
[04:02:09] I'm glad you asked.
[04:02:13] uh...
[04:02:14] Especially in comparison to iframes, it offers special advantages.
[04:02:16] Control over loading and error states. Does not break navigation back buttoned.
[04:02:20] does not appear different to different screen readers,  does not...
[04:02:24] does not cause issues with native browser APIs that are sometimes restricted to iframes.  Content can be rendered with the rest of the page, no resizing issues, flows to page content can escape its container from modals.
[04:02:36] Performance, shares single connection with the host, does not impact SEO.  Iframes receive lower priority than other assets on the page. This does not.  Avoids additional window browser context, less shared memory.  Avoids boilerplate HTML, just send fragments.
[04:02:49] Cash is in both...
[04:02:50] the client and the host.
[04:02:52] So there we go.
[04:02:53] This is why you use this instead of iframes.
[04:02:57] Yeah, and web components are better in the Wi-Fi.  And we talked about that.  I think there's a web component wrapper.  We were talking about using it.  The only reason web components were a little bit awkward is,  wouldn't it be freaking sweet if...
[04:03:08] if you could get style isolation this way as well.
[04:03:11] Like just like instead of having to like worry about that, like you've got all these apps with their own CSS and stuff. Wouldn't it be sweet if you get style isolation? And we're like, yes, shadow dom.
[04:03:19] here's an actual use case for web components in the Shadow DOM.
[04:03:23] Yeah.
[04:03:25] Well, as it turns out, you can't stream into the ShadowDom.
[04:03:28] So...
[04:03:30] Yeah, we gave up on that one.  But...
[04:03:33] Seriously, for a moment there, we were so excited that we actually found a use for Web Components.
[04:03:38] um,
[04:03:41] Anyway, um...
[04:03:44] Yes.
[04:03:52] -
[04:03:53] But yeah, um...
[04:03:55] I mean, iFrames are okay.
[04:03:57] eBay actually uses iframes for its equivalent of Party Town. We don't have Party Town. Party Town is actually way better. But we've been using iframes for isolations for ads and scripts for quite some time.
[04:04:10] We can do better than iframes hopefully in the future.
[04:04:19] So yeah, anyways, that seems like the perfect use case for Shadow Dominant. It didn't work out for us, but...
[04:04:28] Anyways, this was cool.  They used quick streaming,  and I think this is a good demo for them.
[04:04:35] I'm not going to lie.  I think there's probably a little bit of...  You know, friends are friends.  For you who don't know, Igor runs this team at Kovler.  Igor was also like...
[04:04:46] one of the main maintainers of Angular.
[04:04:50] And these two guys, Mishko and Igor are basically neighbors.  So...
[04:04:57] you know,
[04:04:59] Maybe next time we can do a cool project with them as well.  But I just wanted to...
[04:05:05] point out there because there's a bit of conversation here where they're like,
[04:05:09] talking about like capabilities here and they're like, we chose quick because blah, blah, blah. And,
[04:05:14] And they're talking about, like, you know, we would like to do out of order streaming, but like no one supports that. And I'm like, wait, no, what do you mean?
[04:05:21] Everybody supports them.
[04:05:22] Not everybody, but like,
[04:05:24] lot of
[04:05:25] a lot of
[04:05:27] solution support out of order streaming um solo does marco does react does um and preact will  pretty soon it looks like and quick will soon to be fair it just uh
[04:05:38] - -
[04:05:39] yeah anyways uh
[04:05:41] This is a cool article.  I think...
[04:05:43] These kind of architectures are really cool and I want to see more people working into this.
[04:05:49] This, as you mentioned, should fit with Solid and Preact and Marco and stuff, so I would love to play with this a bit more and maybe make a demo myself when I get a chance.
[04:06:03] That's the funny thing, right?
[04:06:06] Out of order streaming is way easier
[04:06:09] for JSX-ish libraries.  InOrder is actually more of a pain  because of the way the elements and the stuff resolve.  The reason Marco can do InOrder  is they literally built their whole thing that way  that their components don't necessarily return.  If you think about it...
[04:06:26] I don't have the playground open anywhere,  but when you think about like a JSX tree  or like a common thing,  our components return  and they pass to the parent  and the parent handles the child  and it compresses all the way up.  It's like you create children  and then they return, return, return, return up.  So it's very hard to do in order...
[04:06:41] in that sense because you're in the middle of that render tree. You can break it up with things like suspense
[04:06:46] But in order...
[04:06:48] essentially
[04:06:51] works way better if you view your whole app as literally like a routine. So you start the first component and you start
[04:06:57] writing it to a buffer and the next one and next one.  And you don't actually return anything.  You just write all the outputs.  And that's actually how Marco's server rendering works.  It actually compiles it that way.  I don't know if Quick does.  I saw Quick's in-order streaming demo,
[04:07:09] Um...
[04:07:10] And you could kind of do like in order in a less granular way by like going, okay,
[04:07:16] I got to the suspense boundary...
[04:07:19] it's not finished. I'm just going to wait
[04:07:21] and then not send anything after.  And then you can break it that way.  So I realize I can do InOrder now if I really want to work at it.  There's also a suspense list, which is a way of doing InOrder.
[04:07:30] But to actually make super efficient into order,
[04:07:33] It almost...
[04:07:35] You almost want to do a different architecture, kind of like the way Marco works.
[04:07:42] Yeah, that's true. And this is something that I've had to wrestle with Spence, which is why I think they were looking a bit at those async components, because then presumably you can...
[04:07:51] Continue where you left off.
[04:07:52] So that's something we could do on the server as well, but we'll get to that in a minute.
[04:07:57] that
[04:07:58] Ultimately, the reason that I was okay with that, with Suspense, was the DX approach of actually authoring your app this way is so nice.
[04:08:07] I'm a big fan of that with suspense,  but I was looking and I was doing measurements,  and I was like, oh, well...
[04:08:14] If solid string rendering is like 10 times faster than reacts, then like,
[04:08:19] What's an extra render?
[04:08:21] Like...
[04:08:22] that was sort of  where my mind was at. I was like,
[04:08:27] - Huh?
[04:08:28] In theory, I was like, one day Marco will have
[04:08:31] Because of this kind of stuff, we'll have faster performance considerably on that.  And Marco 6, I'm actually pretty certain they'll hit that.
[04:08:39] But...
[04:08:40] when I look at the whole spectrum of SSR, like there might be gains in other places that I'm not seeing yet. Like, I think SSR has so much room to be optimized. But the problem is,
[04:08:50] To what degree does that optimization matter even because we're talking in milliseconds, perhaps?
[04:08:55] like single digits.
[04:08:56] So.
[04:08:57] Maybe double digits, but...
[04:08:59] Anyway
[04:09:00] I think this is good. Okay, so let's talk React finally. Let's talk about the
[04:09:09] the
[04:09:10] this whole new RFC. So for those who don't know what this RFC is,
[04:09:16] Essentially,
[04:09:19] react
[04:09:20] has created a new RC
[04:09:23] that is basically addressing the question of
[04:09:27] how the hell do I do data loading, data fetching in React in a...
[04:09:33] suspense world
[04:09:36] and
[04:09:38] What?
[04:09:40] That's a good question. It's a question we've been wondering about for like five years now.
[04:09:45] uh,
[04:09:46] Like since it was first dropped.
[04:09:48] Maybe it's four and a half years...
[04:09:51] Probably.
[04:09:52] Suspense was first dropped at react Iceland and I think it was back in 2018 March 2018 or something and
[04:09:59] Um...
[04:10:00] Okay.
[04:10:01] And
[04:10:03] You know, we saw Lazy.
[04:10:05] I...
[04:10:05] - And the,
[04:10:06] And there was this thought that, like, okay,
[04:10:08] There's going to be some mechanism to load data.  That's what this is made for.
[04:10:13] And it's taken a while to get here, and I think I know why.  Like, there's good reason for it.
[04:10:18] But...
[04:10:19] I think the coolest thing...
[04:10:22] about
[04:10:23] this RC before we even dig into it.
[04:10:25] It's simply the fact that people are excited about it and talking about it.
[04:10:30] I am so stoked on that part of it because...
[04:10:34] Let's face it.
[04:10:36] React.
[04:10:37] "18" came out.
[04:10:38] And people are like, what?
[04:10:41] They're like, yeah, we got the streaming stuff.  And they're like...
[04:10:45] What?
[04:10:47] like
[04:10:47] Yeah, Suspense is released. There's this kind of like...
[04:10:51] waiting all these years for all these features to release and then they get released and nothing happens.
[04:10:58] Honestly
[04:10:59] I haven't felt the hype around React.  Like when Hooks released, it was a momentous occasion  when they were first announced at that conference.  And everything up to that point was this huge...
[04:11:10] Excitement for the future and I find I find excitement of the future contagious. I love it. It drives me to create to think and
[04:11:19] And
[04:11:21] React 18, you know,
[04:11:23] Like, we knew React 17 wasn't going to be much of anything, but React 18 came out and it was like, okay, yeah, nothing happened.
[04:11:29] And
[04:11:31] It's because people have been waiting...
[04:11:33] I think for some assemblies like how do I use this thing?  What is my data thing? When they saw this use,
[04:11:41] RFC.  RFC.
[04:11:43] immediately people like gears  start turning in they're like
[04:11:47] I...
[04:11:48] They fixed React, you know, so to speak.  Um...
[04:11:55] and uh yeah i mean i'm quoting theo there um
[04:11:59] But the funniest thing about this...
[04:12:03] is
[04:12:07] This this RFC
[04:12:10] It doesn't actually...
[04:12:12] It gives us a hint for the direction of the future, and we're going to talk about that, but...
[04:12:16] For those people who are like, they fixed React...
[04:12:20] Thank you.
[04:12:22] Let's live code.
[04:12:24] implement the use hook right here.
[04:12:27] Let's do this.
[04:12:29] function
[04:12:30] Use...
[04:12:32] equals
[04:12:34] and then we accept a promise, P,
[04:12:37] Promise...
[04:12:38] I'm gonna use any right now. We don't really care.
[04:12:42] Alright, and then...
[04:12:43] Throw...
[04:12:45] P. Okay.
[04:12:46] Okay.
[04:12:48] I think we're done.
[04:12:52] Does this look right? Did I make any mistakes?
[04:13:00] I mean it's a pretty powerful hook. You can see how this one gets around the hook rules.
[04:13:05] Um...
[04:13:07] It doesn't have you stayed in it.
[04:13:09] So you don't have to worry about the order you can probably put this anywhere and
[04:13:14] Um...
[04:13:20] You know, and it solves a lot of problems for us.
[04:13:23] Right now when you call use,
[04:13:26] The execution stops.
[04:13:28] And, you know, we know what to do.
[04:13:31] *sniff*
[04:13:32] Yeah, I'm, I'm, I'm, I am. This is a bit of a parody. But like,
[04:13:43] It's closer to the truth than people...
[04:13:48] realize that
[04:13:49] Um...
[04:13:50] that's the thing. The problem was when they didn't release an option for how to use the data fetching,  I felt like this was what collectively was going around. People were like, okay, suspense is here. I want to try it.
[04:14:02] Do I just throw a promise somewhere?
[04:14:05] Um...
[04:14:06] Like,
[04:14:07] Like, what am I supposed to do here?
[04:14:12] Right?  And...
[04:14:14] As I said, the...
[04:14:17] there
[04:14:19] Yeah, and I think everyone's kind of getting in the chat, getting into the question here.
[04:14:24] Well,
[04:14:25] I mean there's a few things you can do with this implementation, right? Because if we have a function
[04:14:30] That's a component.
[04:14:32] and
[04:14:33] We're not going to worry about that.
[04:14:37] And then we're like...
[04:14:39] Okay.
[04:14:40] Because the problem here is when you look at the...
[04:14:42] Um...
[04:14:43] When you look at the example in the RFC, and we can pull it up here,
[04:14:48] Let's see an example.
[04:14:51] Let's not do async await yet, we'll get to there. We'll see use.  They're showing this as a parallel and I think this is good,  because in a sense when you await,  you also end execution at that point.
[04:15:01] But this is the example they give you.
[04:15:04] Right?
[04:15:05] and they're trying to show that there's no hook rule.  I don't really care that there's no hook rule.  If you've seen my implementation,  you understand why there's no hook rule.
[04:15:12] So,
[04:15:13] But, so we're gonna get rid of this extra thing that doesn't really matter. The problem here is
[04:15:22] Um...
[04:15:24] The problem here is
[04:15:25] What happens if I have...
[04:15:28] Count.
[04:15:29] set count
[04:15:30] Equals you state  Okay, we've created a counter and
[04:15:36] Thank you.
[04:15:44] Right, so what's going on here?
[04:15:49] Well, now,
[04:15:51] Let's pretend I click, I run the component once,  counts initialize to zero.
[04:15:56] I fetch with my ID
[04:15:59] Got the note, show the note. Awesome.
[04:16:02] and then someone clicks the counter button.
[04:16:06] Well...
[04:16:09] We go, we fetch the same note again.
[04:16:15] Wait, and pass a new promise?
[04:16:19] that suspends and then when it... like it's actually...
[04:16:23] It's, it's, it's, it's, you're right.  The trickiest part about this all is every time I don't even need to put this count in here.  I just did it to trigger the loop.
[04:16:31] The problem is every time
[04:16:33] that this runs again,
[04:16:34] We get a new promise...
[04:16:36] And if we get a new promise every time, how does it ever stop suspending?
[04:16:42] Fetch new promise, wait for it,
[04:16:46] rerun the component now that we're done, like now that it's fetched, get here,
[04:16:52] Oh, fetch a new promise. Wait for it. Like this is an infinite loop, isn't it?
[04:16:58] I use state as an example of trying to demonstrate how you could trigger this, but I think it infinite loops by itself.
[04:17:06] without me doing anything.
[04:17:09] So yeah, I mean, there's an answer to this. I'm just pointing out like the actual example, which is illustrative is
[04:17:16] is awkward.  Because, like, yeah, I mean...
[04:17:18] -
[04:17:21] We know the answer to this.
[04:17:23] Right?
[04:17:29] always have to remember what the dependency arrays in.  It feels so unnatural.
[04:17:34] The answer is simple.
[04:17:39] Now when we rerun it
[04:17:41] Um,
[04:17:42] it knows that it's the same promise.
[04:17:47] Oh, it's not guaranteed? See, my react these days might not be perfect.
[04:17:54] Okay, yeah, that's true, right, yeah.
[04:17:56] But like this is essentially let's pretend I
[04:18:00] For sake of argument, this is our solution.
[04:18:09] Well...
[04:18:11] I'm glad that everyone's following along with me here, right?  If you're just going to rap in a memo, shouldn't they just use rap in a memo? Yeah, I mean,
[04:18:21] From React's perspective,
[04:18:23] This is just going to read in the exact same place.  Like these two lines...
[04:18:30] - Thank you.
[04:18:30] What?
[04:18:31] Yeah, like...
[04:18:33] Now,
[04:18:34] like why didn't you just make this a single thing why why is these two things why are you forcing it now
[04:18:39] because all this does is cause the components to subscribe.  I think there's a certain parallel between this and await,
[04:18:44] But the key is that you're not actually going to use use memo.  You're going to do this somewhere else or do something slightly different.  But this was the dilemma I had when I was designing solid to a certain degree, because if you guys seen solid, let me use the tutorial.
[04:18:59] We... we...
[04:19:00] We, uh...
[04:19:02] Sorry, Solid.js.  We came up with a approach to doing data fetching.
[04:19:07] for, with suspense.
[04:19:10] Let's use transition example.
[04:19:13] Right? You go...
[04:19:15] Where is it? Maybe in the child component I have it. You create a resource.
[04:19:22] and
[04:19:25] I just pass in the function to be convenient.
[04:19:27] This is...
[04:19:30] You know, just...
[04:19:31] Just to be perfectly fair.  So here's your memo.
[04:19:34] And then...
[04:19:35] Call it as a function, here's your read.
[04:19:44] So, but you see this is tied together. I'm, I'm,
[04:19:50] Yeah, right, exactly. And this, yeah, sorry, let's get back here. So I'm just kind of showing this here.
[04:19:57] So, yeah, people...
[04:20:03] to the memo it so as to
[04:20:07] Yeah, okay, so people are...
[04:20:09] Yeah, okay, that's fine. You guys are all on the same page. I don't think this thing...
[04:20:14] But yes, until there's a cache API, this is--
[04:20:18] This is kind of like...
[04:20:21] not doing much of anything, right?
[04:20:25] The thing is, if your use memo isn't a use memo, if your fetch,
[04:20:29] is...
[04:20:31] using some kind of caching mechanism that lives out here instead of use memo like now it's like
[04:20:37] my cash
[04:20:39] or something, and it's out here.
[04:20:41] like something like React Query, let's say,
[04:20:45] You know,
[04:20:46] we can take our use query
[04:20:50] and essentially
[04:20:51] have much better guarantees.  And actually, if this is React query,
[04:20:56] We move it.
[04:20:58] To this side, I think.
[04:20:59] But...
[04:21:02] My point is
[04:21:05] For the average developer,
[04:21:08] This RFC changes nothing.
[04:21:11] This isn't the thing to get excited about.
[04:21:14] But...
[04:21:15] Tanstack finally got an answer  like okay don't don't
[04:21:19] This is what you use. Don't just throw the promise.
[04:21:23] Right?
[04:21:27] So, yeah, I mean, we've seen a lot of takes on this, right?
[04:21:33] I actually thought this decoupling was interesting, to be fair.
[04:21:38] Uh...
[04:21:39] But where am I looking at?  Not there, not there.  I saw there was a tweet here.
[04:21:48] Prediction, use will become React's most often imported hook.
[04:21:51] I hard disagree with this.
[04:21:54] Unless you...
[04:21:55] Like you're counting the fact that like,
[04:21:58] libraries you use commonly will be using this.
[04:22:04] I don't know, we'll see. I mean, unless the intention is that
[04:22:09] You go around, because they showed use with used context as well.
[04:22:13] potentially if you think that the authoring experience here is
[04:22:17] is going to be like,
[04:22:19] Like, does...
[04:22:20] does,  here's,  there's,
[04:22:22] how should I put it? Does React Query actually want this use here? Do they want to put the use on the inside? Because if they put on the inside,
[04:22:29] It works the same as React Query does today.
[04:22:33] because you're already connecting it to that component. It's only if you need the read to be portable.
[04:22:39] In React, doing this,
[04:22:43] doesn't give you any sort of advantage.  It just expands the boundary.  When I was thinking about this for Solid,  I was like, huh, we could put uses  and maybe only use in subsections and stuff like that.  This got my brain thinking a whole bunch of different things.  But then I'm like,
[04:23:00] eh, you know, like this is not even half the story.
[04:23:06] So...
[04:23:08] Yeah, I mean...
[04:23:10] Jack Harrington actually had a great video...
[04:23:15] Um,
[04:23:16] If you want to understand stuff better than the way I explain it,
[04:23:20] I do suggest this great video is use React's next foot gun.
[04:23:28] I think this is probably one of the best thorough takes on it that's presented in a way that's much more understandable than the way that I talk about things.
[04:23:36] So do check that out if you get a chance.
[04:23:41] This is...
[04:23:42] This is like...
[04:23:45] I'm excited about the excitement.  This shows that the...
[04:23:49] The shows that
[04:23:50] React ecosystem is still there. People are just waiting. They're excited. They're hyped. They're on the edge of the chair.  I was worried that this whole last few years had deflated that too much, that people just wouldn't care. React would be like, yeah, we got this data fetching thing. People are like, yeah, whatever. I use Remix.
[04:24:09] Like,
[04:24:10] Like I use loader patterns, I don't care about this
[04:24:12] People seem to actually care about this.  And it's trending like crazy.  Go ask...
[04:24:17] Theo, his, like, did they fix  React video is, like,
[04:24:21] I think he's caught up to his Dan Abramoff interview.  That's insane, you know, in terms of...
[04:24:27] Like everybody wants to know.
[04:24:29] But the funniest thing is, as I said, is I don't...
[04:24:33] I don't know if they're getting very much.
[04:24:40] So,
[04:24:41] Yeah, I mean, let's look at the chat. What's going on here?
[04:24:46] Yeah.
[04:24:47] Creating the promise part is hard.  Yeah, there's more to use that I'm showing.  This is not actually what use is.  I just wanted to like...
[04:24:55] really emphasize that from a black box perspective, it's you as an end user, this is the way you should be thinking about it.
[04:25:03] The cash results will be scrapped in an upcoming RFC.  So in that upcoming RFC, we can get excited.
[04:25:09] That's kind of where I'm getting at.  I'm actually glad that excitement's happening now.  This is good that people are talking about it.  It's just one of those interesting things where like,
[04:25:18] Um,
[04:25:22] You know...
[04:25:25] This is so...
[04:25:29] long, I guess,
[04:25:31] in the making that people like okay where is it is it here yet and you don't have to go very far  on twitter people are posting about a ton because it's getting really good ratings like this is the  perfect way you post about this and people will will you know
[04:25:45] go crazy on your content.
[04:25:48] There's only half of it. The other half...
[04:25:52] is the server...
[04:25:53] side of it, right? They talk more about motivations, but the server side is a lot simpler. You just go, in my server component, await DB, done.
[04:26:04] And the funny thing is, when I look at this from an isomorphic standpoint, like, think of stuff like the way that I think about...
[04:26:11] Um...
[04:26:13] reactivity and declarative views.
[04:26:15] This hurts my brain.  I hate the idea of an await.
[04:26:18] in
[04:26:19] in a component. It just seems so wrong. Like it's not declarative. It's not wired. It's this than that.
[04:26:28] I struggle with this one. I don't think everyone will.
[04:26:31] And there's actually really good reason to do this.
[04:26:34] As we mentioned earlier,
[04:26:36] re-rendering thing from the top of the suspense boundary is kind of inefficient.
[04:26:40] if you can await and then continue, this is actually kind of what you want.  Because then we don't have to re-render the component or the component above it or whatever. You can just like continue where you left off.
[04:26:49] Generators are secretly what we actually want on server rendering.
[04:26:53] in a sense, I think, because you don't care
[04:26:57] if that it's interactive. There's a reason that await hasn't come out on the client side.
[04:27:01] Um,
[04:27:03] It's like innately blocking in syntax.  I'm sure suspense will hold a...
[04:27:08] hold a boundary for you. But even when you think about stuff like transitions,
[04:27:11] It's just, it's not...
[04:27:14] They can probably get there and do some compilation stuff, but it's just not congruent to
[04:27:19] with the model of
[04:27:20] everything synchronizing and updating.
[04:27:24] Whereas on the server, you don't care
[04:27:27] about anything but the output.
[04:27:29] So...
[04:27:30] If you get so far and then you continue and you're just going to go and you do stuff out of order or whatever, and then you just get that string at the end, you're happy.
[04:27:38] Bye.
[04:27:39] But as I said, for me, coming as a client-side developer,  this one sat really weird for me.  You know, like when I'm looking at this, I'm just like,
[04:27:45] This just doesn't feel like a component.
[04:27:48] But that's maybe the idea, it's a server component.
[04:27:51] So...
[04:27:52] I think the most interesting one about this is whether there's going to be this
[04:27:55] split between like
[04:27:57] I am
[04:27:57] authoring server components and authoring normal components.  And to be fair, that split kind of happens...
[04:28:04] Already?
[04:28:06] because
[04:28:08] you might want to follow
[04:28:10] the databases here and stuff like that.  But it's interesting when you get into that zone,
[04:28:15] of like shared components, things that can run on either side.
[04:28:19] And...
[04:28:20] Maybe those shouldn't be fetching data anyways.  But it's just...
[04:28:25] I'm interested to see how this progresses and how people feel about it.  Because if you've been watching this stream so far, what Solid's been doing so far is literally letting you take the same code and just running it wherever makes sense.
[04:28:36] This is very much--
[04:28:38] separating it. And the interesting thing to me about writing the same code and letting you run it anywhere you care, is that in the future, things like compilers could be smart enough to like, let you write your code a single way. And then
[04:28:50] handle those server client boundaries even better than we do today. That's stuff like what Marco does.
[04:28:57] And
[04:28:59] I'm this is sending us on a path where we're like,
[04:29:02] This is clearly server. And it's funny from React, who's always been about co-location, maybe isomorphism is overrated. I mean, Rich Harris has been saying that recently. That's why he puts everything in separate files.
[04:29:16] But you can see how this is like...
[04:29:19] very different than what we've been playing with.
[04:29:23] I'm...
[04:29:24] I'm interested here. It feels unnatural, but it's possible that they went so far on the colocation path.
[04:29:31] that they realize that like
[04:29:34] it didn't fit naturally with how people thought.  Like maybe isomorphism is overrated.  Yeah.
[04:29:39] But if ephomorphism is overrated...
[04:29:43] That makes me question a lot of things.
[04:29:47] Um,
[04:29:48] even
[04:29:49] the two app problem to a certain degree.
[04:29:51] Thank you.
[04:29:54] As I said, it all comes down to how the shared components are handled.  Because otherwise you are kind of back into micro version
[04:30:00] two app problem.
[04:30:07] Thank you.
[04:30:08] interesting using the like the idea of like responsibility and complexity yeah i think i think
[04:30:15] I think that's the kind of thing that might eventually come to bite this.  It's that kind of thinking.  It's always hard to tell early on if that's going to be where it lands...
[04:30:24] But...
[04:30:25] Okay.
[04:30:26] Yeah, this...
[04:30:28] It's gonna be some kind of
[04:30:32] second tier kind of
[04:30:34] emerging pattern where we actually decide if we like this or not, I think.
[04:30:43] Yeah, yeah, I mispronounced that at some point. Sorry.
[04:30:48] A lot of syllables here.
[04:30:49] But,
[04:30:51] Yeah, I mean, it's definitely...
[04:30:54] I'm glad the conversation is finally happening, right?  This is where we needed to get to.
[04:31:02] They see the compiler, so you just right away...
[04:31:05] Yeah.
[04:31:06] If you look at Mark... I don't know if we shared much  with Mark 06, but
[04:31:10] That is what Marco 6 uses await instead of use, essentially.  When I saw this, I was like, man, this reminds me of the work we're doing in Marco 6.  In Marco 6, you just put await all over the place, and it kind of works.  And we talked about generators there in compiler.  When I was reading the compilation stuff, I was just like, huh, they're talking about all the stuff we're working on in Marco.
[04:31:28] So
[04:31:29] That is a direction.
[04:31:31] I'm just always interested if there's a different direction.
[04:31:36] But yes, there is a certain duplication of our smart DOM components, like we were just talking about here.
[04:31:45] Do we really want...
[04:31:48] that kind of wrapper patterns throughout our API.  I don't know, people were pretty hot on them.
[04:31:53] a couple years ago
[04:31:55] Maybe there's certain scaling considerations there.
[04:31:58] But it's like,
[04:31:59] It's funny because when people are excited about these...
[04:32:01] This...
[04:32:02] what they see is a way to just put all their data fetching right in their components.  They're seeing like co-location.  They're not seeing dumb smart thing.  Because if you're getting into dumb smart things,  you might as well talk about how you can hoist...
[04:32:12] your data fetching up to the loader anyways, if you believe in the remix stuff, like all the nested routing stuff we're doing.
[04:32:17] We do all the data fetching at the router level,  and then inside your components, you just use it,  use the resource.
[04:32:29] So like I think you,
[04:32:31] You kind of want--
[04:32:32] to hoist that fetching anyways and paralyze it if you want to, you know, perform it.  Otherwise, like if you just put in a bunch of awaits in a row,
[04:32:38] Well, you know what happens when you put a bunch of weights in a row.
[04:32:41] And if nested components have their own awaits, well...
[04:32:43] you're just creating waterfalls on the server.  Maybe they're less costly, but like,
[04:32:48] This is why people talk about the foot guts here,  because you're kind of like...
[04:32:52] Kind of pointing people
[04:32:55] to perhaps doing stupid stuff because async is becoming part
[04:32:58] of the language.
[04:33:00] Right?
[04:33:02] It's a very interesting idea because
[04:33:05] Most declarative UI libraries are synchronous, essentially.  Even if they're async, like the way they resolve stuff,  you can view them as a synchronous system, like a spreadsheet.  Like you change some cell and the other ones update and sync.  And async has caused this challenge,  which is why we have loading states and stale states.  But ultimately, what we've been doing is transforming promises into
[04:33:25] into state.
[04:33:27] into synchronous thing  and that's how we reason about it
[04:33:30] A
[04:33:31] So it's interesting to shift those boundaries and bring the async logic further into our components.
[04:33:38] There's always a question of coloration and all that.
[04:33:41] Maybe we don't have to worry about that on the server. React's the one calling your async function. As I said, you can kind of view them more as generators.
[04:33:49] But...
[04:33:50] Thank you.
[04:33:51] It's interesting to me.
[04:33:53] implications of bringing that kind of
[04:33:57] thinking into your components.
[04:34:06] Yeah, I mean,
[04:34:07] This is why people have needed this thing.  I use...
[04:34:11] Query.
[04:34:13] has been pretty nice.
[04:34:14] And in the sense, create resource for solid has been really nice.
[04:34:21] It's so funny because when people don't use React Query and try to do this stuff themselves, it's a big mess.
[04:34:29] and then you know people come up with different solutions it is funny like
[04:34:33] Once you...
[04:34:34] abstract out the data fetching for the component, like your life just gets way easier, whether it's React Query, whether it's Remix Loaders, whatever it's whatever.
[04:34:43] So...
[04:34:44] Yeah, I don't know.
[04:34:45] It's interesting because part of us wants the stuff to be co-located.  We want the ability to be like, I need this data here.
[04:34:53] Yeah, I think that's why React Query is so popular.
[04:34:57] Thank you.
[04:34:58] The challenge, obviously, is like we go through these cycles, right?  Because if you go back, someone's mentioning X state in here.
[04:35:05] X-State is super nice, right?  X-State lets you pull a lot of this state stuff out of...
[04:35:13] out of your components.
[04:35:14] And in my head, all I think of is MVC.  Like I start thinking about like where the model was driving everything back in the day.  It's a little bit different, but.
[04:35:24] Like,
[04:35:25] But even like Redux and like our early React days are like that.  We only kind of inverted to this like data fetch where you need a pattern.
[04:35:33] around the time GraphQL, and then later React Query.
[04:35:37] in a sense
[04:35:40] that redux pattern or that like pull the model state out x state and whatnot is
[04:35:45] the
[04:35:47] ultimately the most configurable, powerful mechanism for doing it.
[04:35:54] But the convenience of...
[04:35:56] of the GraphQL.
[04:35:58] and the React query, so to speak, has almost completely
[04:36:03] eliminated...
[04:36:04] People using Redux.
[04:36:06] And I think even when we see this cache API from React,
[04:36:10] It's going to be more in the vein of React query
[04:36:14] than it is in the vein of
[04:36:16] Redux, like nobody wants to deal with caching. Caching is a problem you don't want to mess with. Like you just like, it's like one of the hardest programming problems. So if that can, the problem is, it's so hard to take away caching from the end user and not give them that control because like it's also one of those things where there's like no one size fits all.
[04:36:35] so
[04:36:37] Um...
[04:36:37] This is why it's so hard. And this is why the read is separate from the write. I struggled with this so hard when I was working on Solid's resources because
[04:36:46] Assault resources don't have a cache mechanism.
[04:36:49] at least not on the client. On the server they technically do because we do the suspense re-renders, but in solid we don't re-render components in the client.
[04:36:59] we were, I guess, kind of saved in the sense that I didn't need to implement the cache.  But the cache layer is not the easiest integration for people who are making like
[04:37:07] solid query or turbo query and like all those wrappers because,  um,
[04:37:13] it requires like a kind of interesting sort of API to kind of inject it in there because I want everyone to use create resources, but it's not as simple as use, so to speak.
[04:37:22] Um,
[04:37:23] I do feel that if I could separate the cache
[04:37:26] they use, I could make the cash part simpler. But every time I circle around it, the benefits there,  from a fine grained perspective, just aren't worth it, because we need
[04:37:36] Like...
[04:37:37] We need the reactivity on the use side anyways, and once you pull reactivity into the problem,
[04:37:43] it's kind of a wash. You might as well be returning a signal like CreateResource does.  So I want to... but people are going to play with this in Solid too, so...
[04:37:51] I actually got a couple little examples I want to show you related to that.
[04:37:57] As I said, I think it's so awesome that people are looking into this stuff.
[04:38:02] Like, just like...
[04:38:03] Think about how everyone's talking about use and how you can use this, you know, data fetching is awesome in React now or whatever.  Like I've seen tweets like this stuff.  It's like the user replace React query.  That was a funny one.
[04:38:17] you know,
[04:38:18] It's very different, like as I said before, when streaming came out with React 18, like even the big proponents like Brian Florence was like, well, streaming, right?
[04:38:26] Obviously, Remix changed their tune a little after, but you go back to like February,
[04:38:31] They had nothing nice to say about streaming.
[04:38:35] So like,
[04:38:37] This is very different. People are excited about it. So let's see an example of
[04:38:42] I was actually...
[04:38:44] I was actually playing with this and I was like, what would an async component look like in solid and do I even like this?
[04:38:50] I took...
[04:38:51] this example of the tabs that we use on the tutorial.
[04:38:55] And I was like, okay, what can I do?  How can I go async and go await fetch content render DOM?
[04:39:02] And will this work?
[04:39:04] And yeah, it does work. These are actually suspense transitions. That's why it doesn't switch until the content loads.
[04:39:11] So we're actually using transitions here with this.
[04:39:14] And all I did was make this wrap async function.  Again, I don't know how to detect nasync function.  It's actually tricky.  There's...
[04:39:20] There's certain ways that work for certain function declarations,  but not all.  But I wrote this wrap async function just to...
[04:39:27] Kind of like thinking about, okay, what did that look like? Well,
[04:39:30] - Thank you.
[04:39:32] Create resource and put the component in the resource.  Honestly, this doesn't actually work properly because when it resumes,
[04:39:40] It doesn't have reactivity. We actually can't do this without generators in Solid's case.
[04:39:46] But I just wanted to get a feel for it so I could play it in this silly demo.
[04:39:50] Yeah, I don't know.
[04:39:51] It's it's
[04:39:53] it's
[04:39:54] It's...
[04:39:55] I think I'm just going to have to look at it a bit more and just decide that like
[04:40:00] Yeah, that's just...
[04:40:01] that up.
[04:40:01] another example is Alexis he's always working on crazy stuff at Solid he's like
[04:40:09] He's like, he made a use hook for solid essentially, and all he does
[04:40:16] is creates a resource.
[04:40:17] So this one actually...
[04:40:19] Um...
[04:40:21] does cash
[04:40:23] so to speak.
[04:40:26] Because he's literally just feeding the-- it doesn't cache,  but it uses Solid's own render mechanisms.  So it caches the same way that Solid's
[04:40:35] memo caches. It's not actually...
[04:40:37] like
[04:40:38] It's not actually like some external cache it would clear out if it ever re-rendered and
[04:40:43] But...
[04:40:44] Yeah, here we go.
[04:40:46] use-- he's nesting a use in a suspense boundary that's  in this calendar component.
[04:40:51] and then to use just wrapping a resource.  It's just kind of showing that, like,
[04:40:57] Yeah, I don't know.
[04:40:58] Is this better?
[04:41:01] I don't know, 22 people like this.
[04:41:03] that's the thing I'm glad that this is spawning,  uh,
[04:41:09] *laughs*
[04:41:09] This is spawning a lot of conversation and thinking because that's where we learn.  So I don't know.  It's cool stuff.
[04:41:21] So...
[04:41:21] Thank you.
[04:41:22] I actually think that async components on the server as much as I hate them would actually have a benefit.
[04:41:28] I need to think all that more.
[04:41:30] uh...
[04:41:32] especially because the impact of
[04:41:34] splitting the APIs seems...
[04:41:37] It seems...
[04:41:39] It's something that
[04:41:40] I'm not.
[04:41:41] stoked about. So I've been given a bit of time
[04:41:44] But...
[04:41:45] That's basically...
[04:41:47] my take on this RFC,  um,
[04:41:49] Sorry, it's not particularly creative or new.  It's just...
[04:41:53] This doesn't really give me enough to work on.
[04:41:56] in any sort of way.
[04:41:58] I'm very interested to see
[04:42:01] if Next.js
[04:42:03] you call up next week talks more about this or launches into this because
[04:42:08] If it does...
[04:42:11] I mean...
[04:42:12] Yeah.
[04:42:13] Mm-hmm.
[04:42:14] I feel like they will have to provide...
[04:42:17] some replacement for the potential cache thing
[04:42:21] And it's interesting to me because we talked a bit about
[04:42:25] you know, is next.
[04:42:27] owning React. If they  did make a move like that,
[04:42:31] It'd feel like it because...
[04:42:32] Everyone else just got the RFC last week, and then Nex is like, oh, yeah, and here's our solution.  Like, I mean...
[04:42:37] So I hope that's not the case.
[04:42:41] But...
[04:42:41] you know,
[04:42:42] I don't know. I guess we'll see, right?
[04:42:45] uh...
[04:42:47] So...
[04:42:49] think
[04:42:51] As I said...
[04:42:52] Keep your eye on hydrogen.
[04:42:54] see if I'm going to,  I'm going to see what's up with this react or remix preact,  uh,
[04:43:00] thing and I'm definitely looking forward to see what's the future of the react and well next and next comp next week so uh
[04:43:09] That's pretty much this week in JavaScript.
[04:43:13] Alright, cool.
[04:43:16] So, yeah, let's chat a little bit more.  I probably do have sushi coming in a little bit, but...
[04:43:24] Um.
[04:43:26] I think we're good on these topics for the most part.
[04:43:32] I'm actually...
[04:43:33] Not going to be at NextConf next week.  I was invited to, but unfortunately...
[04:43:41] Well, it depends. It's not unfortunately.  It just conferences get booked at the same time.  I'm going to be in Warsaw, Poland with Michiko Hewry.  We're speaking at a JSConf in Poland.  Okay.
[04:43:51] next week at the same time next conference going on.
[04:43:55] uh...
[04:43:56] I'll be back, so we will have a stream next Friday.
[04:43:59] And
[04:44:01] I'm going to go ahead and get a little bit.
[04:44:02] Then the following week, I am in Minnesota doing front-end masters.
[04:44:07] And
[04:44:08] I will miss my Friday stream for that.
[04:44:11] Unfortunately.
[04:44:13] That's just the way the schedule breaks down.
[04:44:16] And then the week after that,
[04:44:18] Um...
[04:44:20] I am going to be doing a bloodstream...
[04:44:23] I believe on Wednesday, I'm pretty excited about.
[04:44:25] But it's not going to be my usual Friday stream.  Friday is Remembrance Day or Veterans Day, which I...
[04:44:30] also have off and spend with my family, so I'll be taking that one off. And then the following week, I'm in London with Frontend Masters and
[04:44:38] again and I will be missing stream Friday so after next week I will be missing three streams in a row  because of all the stuff going but look out for a stream on the Wednesday um
[04:44:49] of the week of the 7th. So I think it's November 9th. I'll try and be getting a stream in there.
[04:44:58] So...
[04:44:59] Yeah, I'm looking very forward to that Wednesday stream.
[04:45:02] because it's not my normal stream.
[04:45:05] And yeah, that's pretty much where we're at.
[04:45:09] I don't know if there's anything else in the chat, anything anyone wants to go before I wrap up here.  But let's see, how's Twitch doing?
[04:45:17] How are you doing all in Twitch?
[04:45:19] No new subs.
[04:45:20] If you're on YouTube, give the thumbs up, please.
[04:45:24] Um,
[04:45:26] Definitely, definitely.
[04:45:30] cool stuff.
[04:45:34] We will await.  You shall not pass.
[04:45:42] Well...
[04:45:43] What do we got here?
[04:45:47] *sad*
[04:45:48] We're not going to get into functional programming stuff.  But bidirectional lenses does...
[04:45:54] They'll come up often with stores where people are like, can I...  Because we focus on...
[04:46:00] keeping that immutable interface. So having a way to like,
[04:46:05] Codify
[04:46:06] modifying in the middle is interesting.  I think one of the challenges is our underlying data model is innately  mutating.  So,
[04:46:13] The expected behavior for me is less clear, but if someone's really good at functional programming and want to help me work through that, I think there's a discussion on solid about how we can get
[04:46:23] lenses in stores.
[04:46:27] Yeah, I think the island server component type stuff is so, so excited.  I hope everyone enjoyed that demo.
[04:46:36] So, yeah, okay.  Okay, sorry.  I have a long way to scroll back, but I missed that thing.  What's that LiveView?  Let's look.  Do we have the LiveView.js Hacker News demo?
[04:46:51] Can I get that one more time?
[04:46:55] We do have a moment to pull that up now.
[04:47:04] Yeah, like...
[04:47:06] Problem is I can't out of StreamYard copy the link so if I can find it
[04:47:10] Maybe is it on YouTube or on Twitch?  If I find out on Twitch, I can definitely pull it up.
[04:47:15] um
[04:47:17] it's on youtube okay live view okay this one's easy live view js hn.clope
[04:47:23] That's easy, okay.
[04:47:25] live view
[04:47:28] js-hn-clone
[04:47:32] Bye.
[04:47:33] Yeah.
[04:47:34] HTTPS
[04:47:40] LiveView.js.
[04:47:43] -hn-clone
[04:47:46] FlyDev.
[04:47:49] dot fly dot dev
[04:47:52] Beautiful. Yeah.
[04:47:53] Based on quick, I can tell by the color coding.
[04:47:56] Thank you.
[04:47:58] Nice.
[04:47:59] Let's do a quick...
[04:48:02] No pun intended. Look at what we're dealing with here.
[04:48:06] I'm going to open a new incognito window again.
[04:48:10] Let's do a quick look at what we're dealing with. Okay. So
[04:48:15] I guess first thing I want to see is I want to understand what HTML is sent
[04:48:21] on the document.
[04:48:23] Doo doo doo doo.
[04:48:25] Okay, let's look at that.
[04:48:27] do, do, do, do, do, do, header nav, nav, nav, nav.
[04:48:30] We have our stories...
[04:48:33] Beautiful.
[04:48:35] and because there's no hydration I'm gathering we're not going to see a double data problem.
[04:48:41] There is...
[04:48:44] okay cool all right so we just have the the rye html
[04:48:51] Thanks. Yeah, we're just wrapping up here anyways. Thanks for joining.
[04:48:55] Yeah, so we just have our server rendered. There's no data for data serialization.
[04:48:59] I'm not seeing much in the way...
[04:49:02] Well...
[04:49:03] Okay, yeah, I'm looking for some cool stuff. So PHX click. This is our magic here, I'm pretty sure.
[04:49:11] quote remove class, quote, quote, quote, toggle.  So it's encoding
[04:49:17] some sort of
[04:49:19] commands
[04:49:20] as a string
[04:49:21] into the click
[04:49:23] special click handler attribute that they're adding here.
[04:49:28] And that's probably how they do the compression here. Yeah. Okay.
[04:49:32] So...
[04:49:34] It's like encoded instructions.
[04:49:37] that something knows how to read. So when I
[04:49:39] Do that.
[04:49:42] Okay.
[04:49:43] Refresh again.
[04:49:45] anything happen on the network
[04:49:49] Okay.
[04:49:52] Nothing that I can see.
[04:49:54] But I don't...
[04:50:01] I'm trying to think of how I can inspect.
[04:50:07] Like is this a WebSocket thing?
[04:50:10] I'm just very curious because obviously the source, let's look at the JavaScript load.
[04:50:17] So...
[04:50:18] This loads 43 kilobytes right off the bat here for the JavaScript.
[04:50:24] It is...
[04:50:25] smaller than like a Nuxt or a Next or a Remix.
[04:50:31] But it's...
[04:50:33] The initial load in is definitely a nice chunk of size.
[04:50:38] But I'm gathering this JavaScript has nothing to do
[04:50:41] with the actual
[04:50:45] component code, so to speak.
[04:50:47] That looks like
[04:50:48] It looks like all the instructions are actually encoded.
[04:50:50] into here and then there's
[04:50:52] some kind of serialized data session that they're using, probably for communicating back and
[04:50:57] Fourth.
[04:51:00] But
[04:51:02] Interesting.
[04:51:04] And then this says,
[04:51:05] Okay.
[04:51:06] So this is...
[04:51:07] What?
[04:51:08] Isn't it? Okay, maybe it's just the first link that's broken.
[04:51:13] Because I'm like, is this an MPA?
[04:51:14] Because whenever I go to HN it's broken. It's just a link there. No, this is...
[04:51:20] This is actually...
[04:51:24] Network.
[04:51:25] Tch-tch-tch-tch-tch-tch-tch.
[04:51:27] Yeah, so I'm
[04:51:33] Yeah, it keeps on requesting the favicon, which suggests to me that it's fetching an HTML page in the background and then it's like parsing it and going, oh, where's my favicon?
[04:51:43] Yeah, that's what I'm saying.  It's got like a turbo thing going on.  Okay.  Okay.
[04:51:56] Yeah, so it's like a turbo thing.
[04:51:59] in actually weekend we can see here
[04:52:03] Yeah, let's move...
[04:52:06] back.
[04:52:08] -
[04:52:10] Interesting.
[04:52:12] Thank you.
[04:52:13] Thank you.
[04:52:14] It's actually diffing.
[04:52:15] - Yeah.
[04:52:16] Thank you.
[04:52:17] Yeah.
[04:52:18] It's not swapping, it's diffing.
[04:52:21] Which is interesting.
[04:52:26] So this, yeah, this element of it is more like...
[04:52:31] server components in that it's actually diffing
[04:52:36] I'm gonna have to look into this more obviously when I have more time.
[04:52:40] But
[04:52:42] This is definitely...
[04:52:44] cool to see. I've been curious about this because you're right, it's on the authoring side that I'm less
[04:52:50] clear about
[04:52:51] Mostly
[04:52:54] I've been mostly wondering...
[04:52:58] what happens when you want the interaction to be in JavaScript and like not communicate with the server.
[04:53:04] what that looks like. But obviously for a site like this, and these basic examples, like you are always communicating with the server. So like, it doesn't matter much. Anyways, yeah, more they could do here. But I'm glad I'm glad that we
[04:53:15] we were able to show this and kind of get an idea of some of the characteristics of this because
[04:53:21] After that initial JavaScript payload,
[04:53:23] Like, there is no more JavaScript.
[04:53:28] essentially like
[04:53:29] get our 43 kilobytes,  and everything else is communicated over...
[04:53:35] I'm gathering this web socket that I
[04:53:39] I haven't played enough with WebSockets to actually see, know how to actually inspect  what's going on.  Anyway.
[04:53:45] We will pick that up another day.  It is...
[04:53:49] 5 to 5, which is good enough for me.  So I think I'm going to call it stream...
[04:53:54] Thank you all for joining.
[04:53:56] Thank you, everyone who came on Twitch and YouTube.  And, uh...
[04:54:02] Phoenix heartbeat. That's good.
[04:54:06] Catch you all...
[04:54:08] next week when I think I got it.
[04:54:11] think about it for sure, but I think
[04:54:12] I'm going to cover...
[04:54:15] making a solid like render with preact. I think I think next week's the week that we do that. So that might be fun.
[04:54:21] All right.
[04:54:22] Till then.
[04:54:23] Bye.