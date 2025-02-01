---
showLink: "https://www.youtube.com/watch?v=_EkUCF4HzWg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "What the head?"
description: ""
publishDate: "2024-09-21"
coverImage: "https://i.ytimg.com/vi/_EkUCF4HzWg/maxresdefault.jpg"
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

[by:whisper.cpp]
[00:00.00] Thank you.
[00:30.00] Thank you.
[01:00.00] Thank you.
[01:30.00] I'm going to try something here.
[01:31.72] It's a terrible fix, but I don't think it's just the cable.
[01:35.12] It might actually be the input on the back of my mic.
[01:38.18] So I'm going to push it up.
[01:42.22] Sorry, one second.
[01:42.72] I'm going to mute.
[01:43.08] Yeah, let's try this.
[01:49.64] Yeah, yeah, yeah.
[01:52.16] Okay.
[01:52.36] Okay, we should be better now, right?
[01:56.34] How long was I muted for?
[02:02.04] Yeah, I don't even know what this looks like on X.
[02:09.80] I wonder if I can, like, look at myself and do, like, no, probably not.
[02:13.18] Anyways, give people a minute to get past the Twitch pre-rolls or whatnot.
[02:19.64] But, yeah, we're trying something new here.
[02:22.48] Got a bunch of stuff to talk about, which I'm looking forward to.
[02:29.36] Going to be looking at, as I said, the metadata topic, head tags and whatnot.
[02:34.62] There was some great conversation with Jose with LiveView and concurrency from client-side frameworks.
[02:48.30] We also, what else is recent?
[02:50.38] The Strello demo, you know, the Trellix demo that we released at Solid, which is the latest in a bunch of those demos.
[02:59.02] Yeah, we'll take a look at a bit of all that today.
[03:03.70] Yeah, yeah.
[03:08.96] Yeah, versus the other Ryan.
[03:16.16] I'm not versus anyone, hopefully.
[03:18.92] Although sometimes I might come off as versus the React core team.
[03:21.66] It's funny.
[03:23.68] I got the premium Twitter, you know, to post that Strello demo, which means suddenly I get these longer reply responses, which is, like, a very dangerous thing to give me because, you know, I'm one of those people who would, like, do, you know, I don't know, like, five, seven, eight chain responses in a row.
[03:42.58] Something me and, I guess, Dan Abramoff have in common.
[03:46.56] And now suddenly I can just, like, write a single message.
[03:48.92] But I found even with this new ability I have, it doesn't make communicating sometimes in quick succession on these online platforms any easier.
[04:00.50] I think there's one point in the middle of the metadata discussion where I was, like, having three separate conversations with three different React core team members.
[04:11.16] I still feel like we weren't quite understanding each other, so, you know, it is what it is.
[04:15.46] Also, long replies, don't send notifications.
[04:20.50] Yeah.
[04:21.32] I think there's still benefit when you're going back and forth replies to, like, keep what you're saying relatively short and to the point.
[04:29.30] See, it was a good thing for me because I do answer long.
[04:34.14] So, I needed to edit every single reply on Twitter.
[04:37.68] It made things take a long time.
[04:39.68] But, like, you don't get my raw thinking there.
[04:42.84] I very carefully have to restructure everything I say on Twitter so that it fits with the message length.
[04:48.18] And that's good.
[04:50.56] Because if you've read any of my HackMDs, you know I definitely need editing.
[04:54.68] When I'm not editing, the thing makes no sense.
[04:57.08] I sometimes feel it, too.
[04:58.10] Like, sometimes even on my HackMDs, some of my other articles, like, I try really hard to edit it.
[05:02.26] But, like, I trip.
[05:03.88] Well, it works in multiple ways.
[05:05.88] I trip people, like, streamers cover my articles, like, Theo up all the time.
[05:09.10] Like, he reads a sentence.
[05:10.06] He's just like, you could tell he's just, like, what in his head is, like, what is this sentence?
[05:13.48] But even more when I'm, like, in chat on other people's streams and I write stuff, nothing I say makes any sense.
[05:23.10] So, yeah, anyway.
[05:25.48] But, yes, now I have premium.
[05:32.40] Oh, really?
[05:35.58] That's hilarious.
[05:38.02] I see, I guess it's because of the tag.
[05:41.32] I couldn't win.
[05:42.24] See, I put HTML style things around the word head and only YouTube said I couldn't do that.
[05:50.82] The rest of them were, like, just pouring my coconut water.
[05:53.70] One sec.
[05:54.10] The rest of them were, like, you know, okay, sure.
[05:57.96] Twitch was fine.
[05:59.46] X seemed like it was fine.
[06:03.70] But now we find out the truth.
[06:05.60] Sorry.
[06:06.00] Yeah, the stream's supposed to be called What the Head.
[06:17.46] I wonder if I can edit it.
[06:19.40] Yeah, it's probably too late now.
[06:29.56] Yeah, I mean, grammarly, just squiggly, squiggly, squiggly.
[06:32.88] It's like, yeah, it's like TypeScript and being in the playground.
[06:36.00] Yeah, see, this is crazy, though.
[06:37.56] Like, this was my hunch.
[06:39.66] This was my suspicion here.
[06:40.84] As many of you know, streams generally average about 200 concurrent live people between YouTube and Twitch.
[06:52.78] I have, like, 4,000 followers on Twitch and, like, 10,000 on YouTube.
[06:58.10] But X, I have 40,000.
[07:00.74] So, like, this is just win, right?
[07:04.06] Like, why wouldn't I, you know, why wouldn't I stream there and go to people where they're at?
[07:11.66] So, yeah.
[07:12.00] Anyway, have I wasted enough time getting people to show up yet?
[07:16.32] Anybody want to ask me a quick question before we get started on one of these topics?
[07:21.32] As I said, lots of fun stuff today.
[07:30.60] It's been two weeks.
[07:31.30] Kind of goes like that.
[07:32.50] Okay.
[07:35.10] It's funny, because, like, I see the title.
[07:39.46] Oh, yeah, yeah.
[07:40.40] See, let me see here.
[07:42.60] Okay, I can see my own stream.
[07:44.50] So, if I present my screen and switch over.
[07:47.18] Yeah, give me two seconds.
[07:48.02] Where are we?
[07:48.92] See, I'm right here.
[07:50.58] I can see the title of the stream here.
[07:53.28] But, huh.
[07:55.58] Interesting.
[07:56.88] Oh, well.
[08:05.10] Probably enough Inception.
[08:09.14] Yeah, and this is just such a great indicator.
[08:11.70] What have we got here?
[08:13.58] What's the drink today?
[08:17.96] Coconut water.
[08:19.76] What have we got here?
[08:21.64] Let me...
[08:23.64] Harmless Harvest coconut water.
[08:27.30] It's this lovely reddish color, because apparently all coconut water is this color.
[08:32.86] It's pink.
[08:33.30] Don't worry.
[08:33.58] It's natural.
[08:34.12] If you leave pure coconut water alone, like we do, varying antioxidant levels can cause
[08:39.28] a pinking over time.
[08:40.28] Yeah.
[08:44.78] There we go.
[08:53.32] we have a recommendation.
[08:54.58] Yeah, that's oxidized.
[09:04.48] Oxidized.
[09:05.16] Yeah.
[09:05.92] Yeah.
[09:06.42] Not sponsored.
[09:10.12] Yeah.
[09:10.46] What would I do with real sponsorship?
[09:12.08] I don't know.
[09:16.06] Yeah, maybe Twitter thinks that I'm trying to do some kind of script injection or something.
[09:21.22] Anyway.
[09:22.72] Okay.
[09:25.82] Where are we at today?
[09:27.32] Yeah.
[09:27.64] So, let's start with the head title thing.
[09:30.22] Give me two secs.
[09:40.22] Okay.
[09:40.74] A lot of you probably think that that I, uh, like it started with me discovering this tweet
[09:50.28] or something.
[09:50.72] It didn't.
[09:51.98] I've been looking into head management for about like on and off for about five to six months.
[09:58.24] And I was work coming close to, you know, revisiting it.
[10:03.64] I was working on Soled's, uh, 1.9 release and get a bunch of stuff in, but like none of the
[10:09.34] features were like, wow, here's something for you end user.
[10:13.68] They're kind of like just really good things, you know, fixes, things that have been way too
[10:17.92] long, stuff like that were better for handling errors around bundling and imports and better
[10:23.50] error messages and like tons of really small quality of life improvements.
[10:27.72] But I mean, you know me, I, you know, when I, when I release something to a demo, I like,
[10:32.88] you know, quite often to have something to really showcase what we're doing.
[10:37.42] Um, it's an important opportunity.
[10:39.38] Right.
[10:40.00] And I was like, okay, maybe it's time to merge meta tags.
[10:43.36] So like, uh, Alexis, um, had been working on stuff.
[10:46.32] He made PR back in March.
[10:47.52] And at that time I had, um, as you can all imagine, if you've followed my screen before,
[10:53.24] I had hack MD where I'd kind of proposed what metadata could look like.
[10:58.48] And yeah, there is metadata changed seven months ago.
[11:02.50] Just give you an idea how old this was, but I was, I was playing around with like a couple
[11:06.10] of hooks and then a way of doing generic tags, like use metadata.
[11:11.98] And I got this basically as honestly, this was actually really inspired by Svelte.
[11:19.02] Um, cause I, I was looking, I was looking at what we did with solid meta and different
[11:24.00] like head libraries.
[11:25.00] And then I looked at Svelte and I was like, man, the Svelte solution is so simple.
[11:30.78] If people were accepting of it, they, they weren't doing any crazy layered D duping.
[11:36.48] It looked like they were literally like just set it as it lies.
[11:39.78] And then for title, we're going to render document dot title.
[11:44.46] Instead of worrying about trying to D do ped tags, we're just going to use the, the document
[11:51.90] property and that way, like it D dupes anyways, you can't, you can't go wrong.
[11:55.74] You like, I don't know if anyone knows, I hope you do, but if you put the title element
[12:00.46] on the page, like five times, you only end up with one title.
[12:04.92] The browser only knows what to do with it.
[12:06.02] And in fact, it's the first one.
[12:07.60] So if you like start appending more titles, it's only the first one that gets picked up.
[12:11.30] It's not the last one.
[12:11.92] It's the first one.
[12:12.64] Um, as far as I've been able to tell, I haven't checked every browser, but this is kind of
[12:16.70] like the, the base behavior.
[12:18.32] So I looked at Svelte and I'm like, wow, if I could just write the title and just be like,
[12:23.94] I'm done, like, that seems great.
[12:26.60] If I could just drop a metadata and not have to worry about this cascading rules and stuff
[12:30.74] like this is amazing.
[12:32.02] But then I was like, are people going to accept this?
[12:36.70] I'm like, eh, if I give them a couple of simple hooks, they can build their own thing on top
[12:41.34] of it.
[12:41.64] And we're, we're kind of good to go.
[12:45.80] Um, the biggest thing that I wanted to make sure was that, um, streaming could be done
[12:56.00] even better than today.
[12:56.84] Don't get me wrong.
[12:57.62] Solid handles streaming with our head library perfectly fine.
[13:00.10] We don't need a core feature to do this.
[13:01.64] We already have a core feature.
[13:02.56] in fact, um, which lets you inject, um, content in the head.
[13:08.68] Um, we've had it for quite some time.
[13:11.16] It's called use assets.
[13:12.18] No one uses it except for meta framework writers, but what it lets you do, and it's used on the
[13:16.14] hood and I'm solid meta.
[13:17.28] it just collects the stuff, um, and basically at the time of first flush, just inserts it
[13:23.58] in the head, simple mechanism, anyone could use it, but I wasn't completely happy with that.
[13:28.64] And I was kind of wishy-washy on this solution because the challenge is if you want to go beyond
[13:40.56] first flush, you need more stuff.
[13:43.44] I thought, so anyways, I shelved this for a while and started looking at it again recently.
[13:48.16] And when I looked at it again recently, I saw that reacted suggested JSX elements, which I mean,
[13:56.16] it's kind of attractive.
[13:57.20] If you guys don't know what I'm talking about, we can look at react.dev reference components,
[14:02.48] meta beautiful.
[14:03.12] Here we go.
[14:03.68] It's under canary right now, but you can literally, what they're saying here is I can just make this
[14:07.60] meta tag here, put it anywhere.
[14:10.88] And it just ends up in the head.
[14:12.24] I mean, there's something really nice and simple about that.
[14:16.96] And I looked at this kind of enviously, um, because I was like, this is okay.
[14:23.92] The reason I was using data instead of JSX, you know, like native JSX was I was thinking, okay,
[14:30.16] we don't want to realize these head tags until we do it.
[14:32.64] Right.
[14:32.80] You know, you guys know in solid, this generally would be just an actual DOM element.
[14:39.12] So, you know, you know, you can make a component that returns an object, but generally if we went
[14:47.84] here, we'd have to mess with the compilation of native elements, essentially where it's a little
[14:53.52] bit different in React because React, um, everything's a create element call.
[14:57.44] Everything's created one by one, obviously the trade-offs that it's way slower, but like it does
[15:05.20] come to benefit here because you can write something as a JSX element and not just a, because you can do
[15:12.24] this with components in solid or whatnot, but as a lowercase native element and actually attack it like JSON data.
[15:20.08] So yeah, I was sitting here, I'm like, this is pretty cool.
[15:25.28] And I was reading the docs because the docs are great here.
[15:30.72] Like big props.
[15:32.80] They have docs for features that haven't even been fully released yet.
[15:35.60] This is, this is awesome.
[15:37.60] And I was reading through and I was like, okay, meta, they don't dedupe.
[15:40.88] Interesting, just like Svelte.
[15:42.48] Okay.
[15:42.64] That's cool.
[15:43.76] I was looking at, you know, like, and, and then there's some things like script and style where
[15:50.32] they were basically only laying one of the same source or href work.
[15:53.92] And I'm like, this is really appealing because we actually have an open issue right now and solid start
[16:00.24] about duplication of some of this stuff.
[16:02.08] And we tried some solutions in Vinci for reference counting and stuff, but didn't work properly in the
[16:06.72] server and it's hard for Vinci to step in on the server side.
[16:10.48] Um, there's a lot of like the Dom is a set amount of APIs that you could kind of step out of any
[16:16.08] framework, you know, use ref, so to speak, create effect, you know, use effect, whatever.
[16:20.64] And you can kind of like update the Dom directly and just build this layer on top, but getting to
[16:24.96] people's server rendering in a generic way is a lot harder because what are they outputting?
[16:30.40] Right.
[16:30.64] As we talked about last stream, uh, some of the server frameworks, you know, literally just give
[16:38.08] you strings and it's super fast.
[16:40.08] Other ones give you a V Dom like react.
[16:42.24] And then they have to like kind of work through that and turn into a string.
[16:46.08] I mean, I had a conversation with the web component people, uh, a week or so back and they were,
[16:53.60] they were trying to convince me that I wanted the Dom on the server.
[16:55.68] Yeah.
[16:56.40] I mean, crazy, but like, uh, like you start seeing the, the, the problem here of like being kind of
[17:03.36] generalizable on this side.
[17:05.28] the, the one thing you can generalize, I suppose, is in the end, you will be sending an HTML string
[17:11.20] at some point in the process, it will be an HTML string, but pretty much everything in between
[17:18.00] is kind of up in the air.
[17:18.88] That's cool.
[17:31.20] though, you made me hack JS meta.
[17:33.20] That's funny.
[17:33.68] Cause I bit solid meta library.
[17:36.64] Like I'm, I, you have an interesting experience.
[17:40.16] I don't know if everyone gets, ends up with the same level, like the same experience when
[17:44.64] working on frameworks.
[17:45.36] I think myself or Rich Harris probably would, but like when you're working on a smaller
[17:50.88] framework and there aren't the base functionality libraries, you have like two choices.
[17:55.60] You can like pull it into your framework and be like, okay, this is a feature.
[17:59.84] But sometimes there's like things that you're like, I don't know about.
[18:02.48] Like, I mean, Rich put the foot down and made a decision on CSS.
[18:06.48] I can never do that.
[18:07.12] I was like, I don't feel comfortable enough about CSS to make that decision.
[18:11.84] Right?
[18:12.16] Like it seems like every, it seems like, like every CSS branch is a religion and everyone,
[18:17.84] you know, has believers.
[18:18.80] And it's, it's, it's CSS feels more tribal to me than JavaScript frameworks.
[18:22.88] If that makes, you know, any sense.
[18:25.36] So like, I, I, you know, looking at certain levels of problems, I was like,
[18:31.04] I'm just going to build libraries and ecosystems so people can get that early days.
[18:36.40] There's a whole bunch of them that I build over like weekends, you know, like just like really
[18:40.00] quick and then never touch them again.
[18:41.12] Solid meta was one of them.
[18:42.80] Solid style JSX was one of them.
[18:44.48] Solid, uh, style components was another one of them.
[18:48.56] Like I, I was just building ecosystem style libraries because people had a hard time visualizing it at
[18:55.92] first.
[18:56.40] I think solid was different enough from react that people didn't believe you could just
[19:00.48] basically do everything reacted.
[19:02.00] It seemed too good to be true.
[19:03.20] So I had to like show it.
[19:04.96] So solid meta is not, what's another one?
[19:08.80] Solid transition group too.
[19:09.92] Solid meta was not based on like some original work by me originally.
[19:15.68] It was based on, um, not react helmet.
[19:18.56] Um, oh, it doesn't actually, yeah.
[19:23.44] React head.
[19:24.08] And the funny thing is at the time I wrote a solid meta, the, the really obvious thing to me is most
[19:30.88] head libraries didn't even know how to handle async on the server.
[19:34.40] They expected everything to be, you know, rendered at one time and then to collect it,
[19:40.56] not even async context.
[19:41.60] So you just like say, here's the head thing, run the request, collect all the head elements,
[19:46.32] write them into the page.
[19:48.00] That was the classic pattern.
[19:49.36] So the problem with async is there's the potential of fielding multiple requests at the same time
[19:54.72] on the server.
[19:55.60] And you don't want like them all to bleed into each other.
[19:58.32] You can't just make one single singleton and be like, okay guys, anytime you hit, you know,
[20:03.84] a head tag or whatever, write it to this single thing.
[20:07.68] And then we'll just flush it when we're done because they can all crisscross.
[20:11.20] So we had to come up with solutions that were kind of specific to the request.
[20:17.36] And that was like the first piece that was missing.
[20:20.80] That's why if you look at React Helmet, you know, React Helmet itself is still very much
[20:28.24] sync, I think.
[20:31.60] And there's a whole separate library.
[20:33.20] Yeah.
[20:33.44] So you've rendered a static, render a string, render a standard mark.
[20:35.52] They don't mention any of the new stream or whatever APIs.
[20:40.16] You actually have to use a different library, React Helmet async, to do this.
[20:56.16] You have a special place of hate for React Helmet.
[21:01.28] I hope, yeah, I mean, it's interesting because the thing that hit me when working on, on this
[21:10.40] library is, okay.
[21:12.72] And let's look at the poll requests for, for solid meta.
[21:20.24] Okay.
[21:20.48] Someone wants JSON-LD tags.
[21:22.00] Yeah.
[21:22.16] That's a missing feature.
[21:22.80] We don't have scripts in a solid meta.
[21:24.56] So like, that's something probably should be resolved.
[21:26.64] But the other ones are proposals on how to have different merging logic.
[21:31.60] One's like, you should use key.
[21:34.32] One should refactor processing meta library.
[21:36.96] Because originally I took React Heads rules exactly.
[21:39.68] And said, if meta tags have the same name, they should override, you know.
[21:44.24] But the thing is open graph, decide to throw a wrench in it.
[21:48.72] Like if you go look at the like spec stuff or whatever, they suggest that meta tags should be,
[21:53.28] you know, have like unique name or property.
[21:55.04] But they don't, there's nothing in HTML that enforces it.
[21:59.92] And to make things more fun, um, as I said, open graph almost like encourages it, you know.
[22:08.56] So we get into this weird place where making certain types of assumptions are pretty bad.
[22:16.16] And I started, as I said, I looked at all these different solutions.
[22:20.40] And I started like seeing patterns and inconsistencies.
[22:23.76] And I was like, man, this is a mess.
[22:27.44] Because I haven't got to the last piece of, of the, of the, of the proposal.
[22:32.48] But I suggested it.
[22:33.84] I, I want to be able to seamlessly handle head tags after the first flush of the stream.
[22:40.72] Now, I don't know how familiar you guys all with streaming.
[22:44.08] Um, it's kind of funny because I was watching Theo's stream on Wednesday and, um, I, I caught a bit of it after the fact.
[22:52.88] Um, and he actually covered the whole conversation and drama and everything that, that I'm talking about right now.
[22:58.40] And I was like, wow, that was quick.
[22:59.36] I didn't even think it was a drama, um, you know.
[23:01.44] But the one thing that became kind of clear is as I, as I kind of was watching.
[23:07.52] So I'm not actually sure how, and Theo's told me this before, nobody actually understands streaming.
[23:15.60] So I think, I, I, I think it's important for the context of the conversation because when different
[23:24.40] solutions say they support streaming, they can mean a variety of different things.
[23:29.52] And I think this is what, where the trigger was when I said streaming, I wasn't thinking just first flush.
[23:35.44] And when the React team goes and answers everyone and said, we did this to support streaming.
[23:40.40] they, they actually are talking about just first flush.
[23:42.64] And when Tanner was like going crazy about how hard it is to work with it, with streaming,
[23:49.28] he was talking about also not just first flush.
[23:51.84] So, um, I think maybe we should start by actually talking about what the, like the fundamental challenge
[24:01.44] here, right.
[24:02.08] Um, because the gist of this whole thing was.
[24:10.56] reacts meta's JSX style tag solution.
[24:14.88] Doesn't actually do any kind of D duping except for like, um, it's more like it doesn't do overrides.
[24:23.92] D duping is what we call it, but it's not really D duping.
[24:26.32] It's like, because like, if like, it does D duping of things with the same attributes, right.
[24:32.56] But it doesn't, um, it doesn't let you like put two titles and then Barbie the winner.
[24:40.40] So, um, yeah, I'm familiar with HTML streaming in terms of transfer encoded challenge in
[24:47.12] no out of our stream, but what is first flush?
[24:49.92] Yeah.
[24:50.08] Okay.
[24:50.48] Yeah.
[24:50.48] When I'm talking about first flush, I mean that you have, there's a, there's the time, uh, maybe
[25:00.64] we should do Exceldra, um, Exceldra for a moment.
[25:04.24] Which one was this one?
[25:06.88] This was, uh, talking about why server rendering is still beneficial.
[25:11.76] Okay.
[25:12.08] Yeah.
[25:12.72] Look, let's, let's, let's get in here for a moment.
[25:14.96] Like, I mean, you can even see it for, for here on the, in here, but, but yeah, let's, let's zoom in.
[25:21.44] Um, do, do, do, do, do, do.
[25:26.24] I don't know.
[25:26.72] I'm just going to pick a drawing here.
[25:28.72] Um, wow.
[25:32.56] I don't know if I'm supposed to believe Twitter's numbers, but this is the most people who have
[25:36.48] ever watched simultaneously, um, live stream any of my streams so far.
[25:41.76] So that's pretty cool.
[25:43.04] I've been streaming for three years.
[25:44.56] I based, we had our hundredth live stream.
[25:48.64] I forgot to announce it or make a thing out of it two streams ago, which is almost exactly
[25:53.60] like the three year mark when I started streaming.
[25:55.76] Um, I, so yeah.
[25:59.76] Yeah.
[26:02.72] Maybe that's what it does.
[26:03.60] But the funny thing is in stream yard, I'm seeing 560 concurrent between all the platforms.
[26:10.08] So I don't know if, if, if Twitter is just telling stream yard and just upping the number
[26:18.80] and stream yards getting that total come in, but whatever.
[26:22.80] Yeah, exactly.
[26:26.80] So it, it's just a counter.
[26:28.72] It makes you feel good as you're, as you're going.
[26:30.40] You just like keep on seeing the numbers go up.
[26:31.84] You're just like, uh, yeah, yeah.
[26:35.44] I mean, let's just check Twitch for a second.
[26:38.16] See if I can, uh, give any shout outs.
[26:40.24] Cause Twitch is where a lot of the cooler other stuff is going on.
[26:43.52] Let's see what we got here.
[26:44.64] Thank you Remirth, uh, for the prime sub.
[26:46.64] All right.
[26:49.52] Let's, let's, let's, let's go with it.
[26:51.76] Let's, let's, let's, let's just concur for the feel good.
[26:54.80] Yeah.
[26:55.04] Okay.
[26:56.16] Like fundamentally speaking, you come in from your, your, uh, uh, whatever.
[27:07.12] Let's, let's just do this browser server.
[27:16.64] You come in very first thing you do, you make a request asking for the page, right?
[27:24.96] You know, slash some page.
[27:29.76] Okay.
[27:30.08] And then server responds, um, with HTML before loading everything else.
[27:39.76] And what we call, what I call first flush generically is whenever this first response is,
[27:45.60] because when you're streaming, it's instead of being one response, it's like from,
[27:52.96] it's like multiple responses coming from, from that point of time.
[27:57.44] Right?
[27:58.16] Essentially you have the single request and then you have multiple responses.
[28:02.96] The first flush is the first response.
[28:05.20] And why the first flush is important is because there's certain things that you don't get to
[28:11.20] change after the fact, um, statuses like your status code.
[28:14.80] Like, um, if, is it a 200 or is it a 404?
[28:18.64] You don't get to change that after the fact.
[28:25.04] Raid.
[28:25.52] What, what kind of raid do we have?
[28:27.68] Oh, oh, it's, here we go.
[28:32.64] It's, it's Dax, I think.
[28:33.92] Right?
[28:34.40] Did we get Dax?
[28:35.28] Yes.
[28:35.52] We got Dax with a party 129.
[28:36.96] Awesome.
[28:37.92] Yeah.
[28:38.16] Um, just talking about streaming.
[28:40.88] Yeah.
[28:42.32] Flushing is important.
[28:43.28] You know,
[28:43.84] how did everything go for you all today?
[28:49.68] You guys are making Cloudflare faster or something.
[29:00.56] Nice.
[29:03.36] Made Cloudflare faster.
[29:04.48] It's official.
[29:05.68] All right.
[29:10.00] All right.
[29:10.24] So yeah, there, there's important things.
[29:14.48] And one of the classic things, if you, if you don't consider things like out of border streaming is,
[29:18.80] you know, your head tag in your document, it tends to come in that first flush.
[29:23.68] So all your, you know, metadata and stuff comes in that first flush, generally speaking.
[29:28.40] The, the challenge though, is you, I mean, if you forget about streaming for a second,
[29:39.36] one thing you could do is load all your data, right?
[29:43.44] Like the gap here could be, you know, you could have, I don't know, pick another color over here.
[29:53.76] Maybe whatever.
[29:58.08] I'm just going to, I'm just using some rounded rectangles.
[30:00.48] We can put our database over here, whatever.
[30:01.92] Like it, it could just be, you know, this going on and that's why you have the gap.
[30:11.84] But the reason you stream is because if you got a lot of this going on,
[30:18.08] you don't want to delay this
[30:23.76] on the slowest one of these.
[30:31.28] it's like a, it becomes a math, like a, a statistical problem, right?
[30:35.44] Like there's like nice UX aspects of streaming, you know, when you have importance, varying importance
[30:46.16] of data or latency, but like for the most part, I think the biggest benefit of the streaming thing
[30:51.92] is simply the fact of like, you talk to 10, 15 services, you know, you don't want to be as slow
[30:57.60] as your slowest service. It just propagates it all the way along the line.
[31:01.20] And you can see that like, it's like the long tail on it. Like there's, it's very simple math.
[31:08.08] Um, you can do, but you know how, like when you're doing percentage math and you multiply it and then
[31:14.88] it, you know, and I guess it's the inverse, like one minus the inverse, basically each service
[31:23.60] that you add each different connection that you're making on the backend that could cause latency.
[31:29.12] Like it has a profound effect on the overall average latency of your whole request.
[31:39.28] So anyway, yeah, yeah, yeah.
[31:46.16] Yeah. No, that's, that's perfectly fair.
[31:50.16] So what I'm getting at is there's an argument to be said that we should,
[31:59.44] we shouldn't flush the page until like the first flush until the core part of the page is done.
[32:07.28] See, cause you can picture if you flush too soon, um, you might not have anything relevant to show the
[32:14.00] user. So you're just showing them intermediate loading state. Um, an example of that would be
[32:19.76] like one of my solid start hacker news demos. I make tons of them. Of course, that's way too fast for
[32:25.68] you to see, but if I tried to like really slow down the network somehow.
[32:31.52] Oh, please. It's still
[32:36.88] using, um, we're not, maybe, maybe I need a, uh, something with lots of stories in it,
[32:45.04] this one, and then we'll refresh on it. Let's refresh on it and see it stream in.
[32:51.60] Yeah. See, okay. You saw, honestly, it's quite possible that that version isn't really worth it.
[33:01.44] Cause you're barely showing the page. It's arguable. Maybe I should have waited for the primary content.
[33:06.48] There's, there's better examples where you can actually show primary content and then, you know,
[33:09.44] have con, uh, stuff layer, uh, come in later. Um, what's, what's that silly demo? Uh, the next
[33:15.76] guys had it. I was, I also made a version of it streaming storefront Netlify app. Yeah. Yeah.
[33:21.28] Everyone knows what I'm talking about. Yeah. Right. Um, let me see if I can refresh on this.
[33:32.08] Problem is
[33:35.44] It's hard to, it's sometimes hard to see it with the problem with network simulation is the, the way that
[33:46.24] like tools like lighthouse and like Chrome do it is they kind of like put a, like a, just like a wall
[33:51.60] on it and then make everything hit that wall instead of like actually simulating on a per,
[33:56.08] like in a, in a more realistic way, which means that it's sometimes actually hard to see the effects
[34:02.56] and benefits of these, these kinds of throttlings through simulated 3g or whatnot. Um, that's a whole
[34:08.00] other story. I think we did a stream on that a couple of years ago. Um, but like,
[34:13.28] honestly, just go look at Guillermo's, uh, tweets on, uh, about PPR on, um,
[34:21.68] on X half of them where he's like, you know, no loading spinners, like all of those things.
[34:27.20] They it's, it's, it's literally the difference between just deciding whether to hold the stream or
[34:33.20] not hold the stream. Obviously when you pre-render something, you don't have to wait, right? If we
[34:38.24] go back to our scholar draw, there's none of this, you've already grabbed it, but mechanically, um,
[34:43.84] if you know, you didn't pre-render with PPR, but just like had the data sitting there ready, maybe in
[34:50.88] a KV or something, it's like exactly the same effect. It comes down to like, whether you stream back
[34:57.20] immediately with the loading indicator and have the content swap in or whether it's just there in
[35:02.00] that first flush, could you delayed it? But sometimes like that decision is dynamic based on the, you know,
[35:11.44] the availability of the data, the design of your website, a whole bunch of factors. So the one thing
[35:17.04] that I I've been struggling with a bit is if you need to put the title in the head, right? And that
[35:27.52] happens at the first flush. Does that mean that anything that can impact the title? Um, Theo actually
[35:34.80] had a funny example, I think on Twitch that he showed. Um, if I go to my, my, my page, I, I'm probably not
[35:45.04] the same because my slug, where is it? Okay. Ryan solid seven. Is it when I refresh Twitch? Okay. Yeah.
[35:59.76] Mine's not a good example. Theo was a good example. Cause he had capital letters in his name. Let me see
[36:04.32] if I can, let's see if I can actually, yes. Theo capital T Theo, right? If I refer, sorry. If,
[36:14.56] if I refresh this page here and we're looking at the top corner here, we see capital T Theo.
[36:20.24] I think he said that he had lowercase and it went to uppercase. Basically the title was changing
[36:25.60] dynamically as it came in because at the time, the page load, they only know his slug. They don't know
[36:30.08] his actual name. And then as the rest of the page loads and you get more information, like the Lotus
[36:35.20] profile, they actually updating. Okay. His name's T. And then finally, when the notifications load,
[36:40.40] they add the, uh, the, the, the, you know, my notification count beside this tab. So what I'm
[36:49.28] getting at here is you can obviously do a bunch of these title additions in the client after the fact,
[36:55.60] but that means that you have to wait for all of the hydration to have happened or like, like the code
[37:00.80] be on, on the, on the client by that point. One of the coolest things about these streaming solutions,
[37:06.80] which is, it might not be obvious to people is if while streaming doesn't work or out of order
[37:14.08] streaming doesn't work. If JavaScript's turned off, I could return, remove the solid or react script tag
[37:22.48] that loads it from the page and streaming still works. It's not tied to the framework. We want to be
[37:27.76] able to show the content as soon as possible, regardless of if hydration has happened. This streaming
[37:32.72] mechanism is works by essentially appending script tags to the bottom of the page that give instructions
[37:42.00] that pass in data and pass in, um, there's code here. You'll see, get document element ID, find the
[37:51.68] placeholder, grab it, remove all the siblings and replace it with the new content. Like we actually write
[37:58.32] scripts that actually move HTML that we, uh, added to the bottom of the page and slide it into place.
[38:05.92] That's how it works. After the first flush, we just keep on appending HTML to the document as we stream,
[38:11.20] but it gets into place the way like this get, you know, I'm going to, I'm going to turn off the silly fake
[38:21.92] throttling. So we can see it actually better on this one, because this one has fake throttling on the data
[38:26.24] level. What you're going to see when I refresh the page is when we first load it, this is, it happens
[38:32.08] too fast. Why are we always too fast? Okay. So yeah. See how products for you is kind of flickering in
[38:37.52] streaming in the, if I flip down here, uh, it's hard to see. There's no footer on this page, but my point is
[38:45.36] that this HTML that replaces this loading placeholder is actually, um, just appended and then we have a
[38:55.52] script tag. So if solid never loaded on this page, we would still have this, the same loading effect
[39:01.36] coming in. And if I, my thinking is if I wanted to handle proper streaming of stuff like title and metadata,
[39:12.08] it should work the same way. Sure. I've already flush flushed the head, but if.
[39:16.08] We discover a title further down that depends on some async data, maybe to get.
[39:21.20] Theo's name. We should be able to stream it up into the page, regardless of if the framework has loaded
[39:29.04] or hydrated or done anything yet. That's my premise here, because otherwise the, the, the recommendation is
[39:36.40] make sure you load Theo before you show the user anything. If it's yourself, that's not a big deal.
[39:43.36] You know, you off, you load yourself, but I'm not Theo. I'm looking at Theo's page. Why? Like every time
[39:50.80] I hit the server, I don't load Theo. So why like, it doesn't make sense, you know, for this to be something
[39:59.20] that I would have, you know, preloaded or had a really steady state, should the user wait
[40:05.04] before sending anything? I don't know. It depends on you, your X or do you, um, you know, but like I was
[40:13.92] looking around, right? I was looking at different things like, uh, you know, static metadata. That's
[40:19.12] easy. Dynamic metadata to generate, like there's great solutions and all these things. Um, good to know.
[40:24.00] both static and data data through generate metadata are only supported in server components. Okay.
[40:28.24] Fetch requests are automatically memorized, blah, blah, blah. Next.js will wait for data fetching
[40:32.48] inside generated metadata to complete before streaming UI to the client. This guarantees the
[40:36.56] first part of the stream response includes head tags. This is good because without it,
[40:42.08] it'd be kind of, I mean, you don't even know what you'd get, right? You, depending on like when it
[40:49.92] decides the stream, you might get some of the head stuff you might not. So they wait, but the tricky
[40:57.12] part is they always wait, right? Like it's like basically saying like, okay, I need Theo here. Like
[41:05.68] I need to load this for the title. I'm never going to respond. No cases, unless all the stuff I need for
[41:13.60] the metadata. And honestly, this has been the common recommendation of libraries, right? Um, uh, you know,
[41:23.60] remix suggests the exact same thing, but
[41:28.08] it's okay. Right. It's a reasonable constraint, but it was one where I was like, okay, I thought when I saw
[41:39.52] the react APIs here being at an element level, so you can understand how next does this,
[41:44.16] they hoist all the data fetching from the router. When you export something special on a, on a page
[41:49.52] next goes, okay, you're going to this route. I know you need this, this, and this, they just grab those
[41:54.64] exports, but this API has no such thing. You can literally hope you can hold it wrong relatively easily,
[42:04.56] right. Cause you can just put this under a suspense boundary, have it a weight on some async data,
[42:10.64] and it will happen after first flush.
[42:13.12] Right. Which is, as I said, you instruct people in the sense, solid meta is like this today is too,
[42:20.64] where, you know, if we miss it, it will, uh, it won't get server rendered. And then
[42:27.04] when the client hydrates, we'll kind of fix it along.
[42:37.44] 10 sec start. I'm almost guaranteeing is doing what next or remix is doing, because this is not
[42:45.76] something you can solve in user land. I, I'm hoping you're starting to see the picture where, where I'm
[42:52.00] getting to, well, I mean, you can solve it in user land, but if you want to understand how to solve it in
[42:56.08] user land, you have to understand why Tanner was so upset when he found out about, about this stuff.
[43:01.76] So we'll get there in a, in a second.
[43:04.24] Yeah. Yeah. You can out of order stream without JS and really, really trivial cases. The problem
[43:11.28] is, um, and I looked into this cause honestly, I would love to out of order stream without JS.
[43:16.32] Um, but the, this is using the shadow dom trick, right? Um, like the declarative shadow dom trick.
[43:23.12] Let me quickly grab this off Twitch so I can see what you're, what you're getting at.
[43:32.00] Um, yeah, this is just the demo though. Right. It's showing, it's showing stuff coming in, you know,
[43:41.84] in random orders. Do do do do do do do. The, the, the, the, the challenge is that the way the shadow dom works, um,
[43:54.96] is like, um, it's a, it has a slotting mechanism so you can define where like these components are and
[44:03.52] where the slots are, but the elements that get slotted in have to come in at the same level as the, um,
[44:16.24] as where those components are like the same level in the hierarchy. So if you have a bunch of things
[44:22.24] that are like stream, then stream, the stream, the stream, and you just make your shadow dom, uh,
[44:28.08] declare a shadow dom container at say document body level, and you just keep on appending, you know,
[44:34.08] to the body and they'll, they'll slide in like this, but it becomes much more difficult. And actually,
[44:40.56] I don't think really feasible. If you actually nest stuff, like you have a suspense boundary and you
[44:44.24] draw some stuff and you have a suspense in the suspense, this, this happens all the time with
[44:47.44] hierarchical UIs. And then this mechanism actually doesn't work because while you're nesting those
[44:53.28] slots, so to speak, you're only going to be streaming to that top level, the same level as the body.
[44:59.60] So they don't see each other. I was a little bit disappointed how much of a complete miss this was,
[45:04.64] but it is still a cool feature regardless. Anyway, um...
[45:22.00] No, I mean, Remix is doing what something very similar to what Next is. There's slight differences and if you guys
[45:33.60] really want to get into the differences, we can talk about that in a minute, but it's the same idea of
[45:36.64] having route level groupings. Um, and then with the ability, see, this one's using parent to merge
[45:43.92] from the parent level. So you have complete control of how the merging happens.
[45:50.80] So, um, you got the... okay, you got the blog post. But yeah, yeah, I'm very familiar with this. As I said,
[45:55.28] unfortunately, it's useless for frameworks, but it is a very cool demo.
[46:03.28] Like htmx is Node.js. No, this mechanism is, is literally Node.js. It's using declarative shadow
[46:09.12] DOM, um, which is a template thing. It's miraculous to like, when you look at it and you're like,
[46:14.56] this is so cool. Uh, if it were actually useful, it would be like one of the coolest things that
[46:19.84] come out from the spec side in a while. Um, it's like, you know what, I'm going to pull up the blog
[46:26.96] post just for two seconds. Cause I bet you it actually, like I can, I will, I'll be able to
[46:31.44] actually, uh, sorry. Uh, I'll be able to actually see the, the issue like in the article. If I, if they
[46:40.08] show any code, I can like better explain it. Um, okay. Right. Shadow root, shadow root has slots.
[46:55.76] They have name slots perhaps. And then you define what a slot is. Um, see this one's outside of the
[47:01.60] shadow roots. The shadow root owns all of this, right? And then outside of the shadow root, but at
[47:06.64] the same level, there are elements. And anytime we find, um, a slot with that name, this will automatically
[47:16.64] get kind of like virtually inserted where this, the slot of that name is. Now, the tricky part about this
[47:26.00] like this isn't, it's actually not hard to write code for it because it's literally a template element.
[47:29.68] And then the slot looks like this. And the way HTML works is if we don't have this div tag,
[47:37.04] it's smart enough to auto heal and automatically close. So you can just keep on appending stuff and
[47:41.36] not close the document, not even close this div and get stuff rendered on your page. Um,
[47:48.16] but the challenge that I said is first of all, now this template has to basically be the top of your
[47:53.44] app because you're going to be just streaming stuff to the end here. And this doesn't work well if you
[47:58.64] have a template inside a slot, like what will often happen with these things is you'll actually,
[48:06.00] um, you'll actually have slotted content that inside that slot will have more templates,
[48:13.36] which then have to get future, um, streamed updates that are getting appended down here, not
[48:20.32] inside here. Uh, yeah. Anyway.
[48:25.60] Hopefully that makes sense. Sorry. I hope I didn't go too far down the rabbit hole.
[48:38.88] I think you can nest DS to declare a shadow doms. I'm pretty sure you should be able to let me think.
[48:45.92] Is there any reason why you wouldn't be able to, because you can definitely make elements with shadow
[48:52.40] doms inside other elements that have shadow doms. So yes, I believe you, I, unless there's like an
[48:59.20] additional restraint, I don't see why you wouldn't be able to.
[49:01.28] Yeah. I mean, I stream like five hours almost every week. I I'm, if the problem I'm hoping
[49:16.96] my explanations work, but I think what we'll find with an editor is a lot of times, um,
[49:21.60] I'm not the best person at explaining stuff. I'm kind of hoping that somebody who watches a stream will
[49:28.72] come in and actually do like a proper video. Like I'm always amazed how Theo can just kind of like
[49:34.72] stop and just like, okay, I'm in video mode and just record videos like that. I mean, it takes a
[49:39.20] little bit of prep. I think I don't like being prepared. It takes too much work. Editing takes
[49:43.52] too much work. Everything takes too much work, but I'm glad you guys are here to listen and chat with
[49:46.96] me. Cause you know what? I learned stuff from talking to you. So, um, yeah. Okay. So
[49:58.24] streaming is tricky to say the least. Right. Um, and it's, it is a stance to say, we're going to just
[50:09.28] block everything. That's kind of like the only choice you have. I mean, other than that, how do
[50:14.88] you intercept the stream and put stuff in? Right. Well, you could use the same trick that, um, we do with,
[50:23.12] uh, suspense when I was showing how we were, you know, putting script tags to, to insert elements.
[50:31.52] We could use script tags to update the head as we're streaming. And that's something that I,
[50:38.40] that's something that I've, I've been, you know, thinking a lot about and, um, be like you need a
[50:45.44] mechanism that supported this core. Otherwise the developer would have to like go in and take the
[50:50.72] render stream and then get the stream output and inspect itself and be like, okay, what's in the
[50:54.80] stream? Oh, here's like a head tag. Let's take it out and do this. Like you, you, you basically have
[51:01.12] to do a bunch of hijacking of the streams. Don't like, don't get me wrong. React. So we also have ways
[51:05.52] that you can, you know, get yourself in the middle of the stream, but that's also the place I don't think
[51:11.04] anyone ever wants to be. So yeah, when it means to support streaming probably means a lot of different
[51:18.72] things for a lot of different libraries. Still, I like, I feel the tension here, right? Um, because
[51:29.92] I showed you guys solid meta meta. What we're actually missing here is I merged one of these
[51:36.64] proposals I was wrong to probably. So solid meta worked one way. Someone said, Hey, I have duplicate
[51:43.68] open graphs tabs, the tags and asked me to change it. I'm like, I guess this sounds reasonable. So I merged
[51:49.92] it. And then that triggered this because people like, Oh, this broke, you know, this broke what I
[51:57.36] wanted to do with it. I think deduping should look like this. And then the original person who did the
[52:01.20] other one was like, no, I think I can make deduping handle both our cases with this. It is a mess.
[52:06.32] Like trying to tell people how stuff should dedupe automatically is not unlike telling people that
[52:11.84] they should use tailwind versus, uh, style components. I mean, people should probably never
[52:17.68] use style components, but like I picked something that's actually good versus something else that's
[52:22.80] actually arguably good. Um, like I, this, this, this, it's, this is, this is, this is something, um,
[52:34.48] that as a framework author or library author look low level, I don't want to step in. I've, I have
[52:41.52] enough experience just having a separate library, having this problem, but if we're streaming
[52:51.36] essentially like if we open up the ability to control the streaming in a really native way where
[52:54.88] you could just put the tags on the page, like the way react is proposing and you're streaming it,
[53:01.76] you have to have a way to be like, Oh, this scripts replace this script.
[53:10.00] Cause if you don't have that mechanism in the core, the only thing you could ever do is append.
[53:18.40] Like you need a, you need some kind of mechanism that's exposed to the end user.
[53:22.88] Even if you say that you can't make any decisions here, like you're like, I don't want to determine
[53:30.64] deduping for you. You can't just go, I'll leave it to user land. User land can't actually solve this problem.
[53:40.40] Like what, like, like if, if, if you s you know, if for some reason, like title, you want to make
[53:48.96] it so there's only one title and you can put multiple on the page. So you can simulate this,
[53:52.88] you know, Theo, then Theo, then Theo and notification situation all with streaming.
[53:56.48] If the core mechanism that you're given doesn't give you a way to do that deduping, you know, be able to
[54:04.96] flush in, you know, update title, remove title, like whatever type code, your only option, like on the
[54:13.36] client. Yeah. Sure. You can just go build something. Cause you can interface with a dom directly, but on the
[54:16.96] server, all you can do is like try and parse the stream as it's coming and doing stuff unless it's built
[54:26.08] in. So what I'm getting at is maybe it is fine to always wait. That is a fine decision to make.
[54:32.40] But if the idea is that you don't have to always wait, the mechanism to be able to do
[54:41.60] some sort of deduping, even if you don't think it should be the thing has to be built into the core.
[54:46.80] that's basically the, the, the whole logic here.
[54:50.48] So you're basically, you're forced to pick a side where all sides seem reasonable. Yeah. So like,
[55:03.84] yeah, I mean, this is not, this is not a fun place to be. Uh, um, let me, let me kind of
[55:13.84] go back to Twitter for a second. Right. Cause let's, let's, let's, let's look at a bit of the
[55:19.04] conversation. Can I get some context? Cause some meditators have multiple instances,
[55:25.68] other statistics, last one is fine. I also don't be intentional to find something. Yeah. So, I mean,
[55:29.84] when I read this from Ryan Florence, I'm like, okay, it's because they're remixed. They have their own
[55:34.80] solution. Right. So who cares? Right. So we'll get back to Ryan Florence in a minute. I wish browsers did
[55:40.56] this automatically. I think we all kind of do. Hmm. What else do we got here? Uh, before we get to
[55:48.00] Sophie who had a, actually a very good reply. Um, we do dedupe identical link, blah, blah, blah.
[55:54.16] Yeah. So I'll combine this
[55:57.68] with Sophie react could dedupe, but it's not obvious which one should win. Maybe if there was one deepest
[56:06.08] one, but what if they're two equal depth? Okay. So yeah, let's get to the problem with deduping deduping.
[56:11.76] The reason we don't want to touch with him football is it's, it's fundamentally broken.
[56:17.12] Like it just, it doesn't actually work in a sensible way.
[56:21.68] Right. Like I, I, I, I get this, this happens sometimes as a framework author,
[56:34.64] you build something and you're like, okay. And then you find a hard problem and you're like,
[56:38.96] I don't think there's a general solution for this. So you kind of leave it. You kind of like, okay,
[56:44.72] um, we'll let users kind of figure out what makes sense for them. And it's far enough outside of our
[56:50.96] realm that we don't care. And then the users make the solution and you're like, God, this is terrible.
[56:57.44] And you're like, yep, but they're allowed to make terrible decisions. We're just going to let them do
[57:03.44] it. And, uh, you know, maybe give some guidance where, you know, but I, you understand that everyone's
[57:11.04] apps different and everyone has their own needs and you, it's very hard to be too prescriptive here.
[57:16.00] And then you get a little further around and you're like, I need to add the, you know, feature
[57:20.32] B like this other feature. And you look at what the user did and you're like, yeah, that's not really
[57:25.12] in line with our thinking and really with the philosophy of the library framework we're building.
[57:30.00] It doesn't make sense to ever approach the problem like this. Let's see if we can give them a gentle
[57:34.32] nudge in the, in the, what we consider the right direction. And then, um, you know, sometimes you
[57:41.04] get even further online where you're like, we actually, in order to do these other features,
[57:45.20] we have to just take ownership of this thing at this point. That's the only really way to make
[57:49.52] everything just keep working properly, you know? And then you're like, yeah, you look at user space
[57:56.88] and you're like, yeah, those solutions are just terrible. But the problem is users have been
[58:03.44] doing it this way for the last five, 10 years. So you're like, you're in like this place where people,
[58:08.00] it's expectation of how things should work, um, versus like what, you know, kind of makes sense
[58:15.04] from a design standpoint. And I think this is one of the things that I really like about react and react
[58:21.76] core team members and that, and what, you know, kind of integrity there is that is they generally
[58:26.80] don't make stuff because people will like it. I have a huge amount of respect for that.
[58:32.64] that's not why we make stuff. We, I, I, I make stuff because it will make people successful,
[58:39.36] whether they like it or not, whether it will give them powerful tools. And that's something that I,
[58:45.04] I think share with the react core team. And I have a huge amount of respect for,
[58:48.40] I I'm always wary of solutions that are kind of like, yeah, yeah, we can do that. Yeah, we can do that.
[58:53.28] You know, like, you know, oh, we want this feature, bring it in core and just keep on doing that.
[58:58.24] Cause like at some point it won't be sustainable. They're bringing a bunch of work on themselves.
[59:01.76] Maybe, you know, they'll grow at a rate that they can keep on top of that. But it's like, at some point
[59:07.04] being too opinionated will impact, you know, feature C, which we haven't got to yet. So it's very dangerous
[59:16.64] to, to go out the door with the intent of satisfying people. Um, and so from this perspective,
[59:24.48] like react comes in, looks at the space. Probably. I don't know how much they look. I, I, I, I imagine
[59:30.24] they look at least in the react zone of the space. I, I, knowing the amount of research I do, I assume
[59:34.32] that they do a decent amount of research and, um, and go like, yeah. Okay. Like, and, and kind of just
[59:43.84] determine not based on like what everyone thinks, how things should work necessarily, but what makes
[59:49.44] sense to work with the way the framework works that takes guts that takes, you know, vision. And that's
[59:56.56] why I, you know, have a, you know, huge respect for react. On the other hand, sometimes
[60:10.72] that ship sailed. So it's, it's, it's an interesting tension.
[60:23.20] Easiest, longest title wins.
[60:26.16] Yeah, he inspired me to give me the exact, um, example. Uh, I didn't expect him to cover this so
[60:39.92] soon. Like this, you know, um, anyway,
[60:45.12] the truth is what this whole talking about depth and stuff is like, if you can very easily,
[60:56.08] let's go back to our, like example, or what if this is under like a ternary based on some other state,
[61:03.28] or what if this one is the top one is under a ternary based on some other state. So you go render
[61:07.84] the page and it's not rendered, then this one's rendered and then something changes and now this
[61:11.28] one's rendered. Like who wins? Is it based on hierarchy? Who's the tallest? That's actually not
[61:15.60] always good because if you've ever played around with depth first or, um, algorithms stuff, you know
[61:20.88] that like siblings of that start on the same depth, but then like, like you're not guaranteed to have a
[61:27.92] reasonable order from it. Um, and they could be actually just straight siblings and just depending
[61:35.04] on what's async, something async loaded before something parallel async, you know, it loads
[61:42.32] A than B one time modes B than A and you get different stuff.
[61:45.84] Yeah. We'll talk about unhead in the, in the, in the, in, in a minute. Unhead has like,
[61:56.32] this is a, this is an interesting point because it gets into stuff like philosophy. I just told you how
[62:03.68] much myself and because of that, uh, I respect reacts philosophy and how much like I align with them,
[62:11.20] generally speaking. Um, I get where they're coming from. Unhead is very view. I don't, I know it's so
[62:18.08] funny when I talk to people in the NJS ecosystem, they'd never understand what I mean when I say it's
[62:23.68] very, when I say things are very view. Um, and a lot of stuff in the NJS ecosystem is very view and it's
[62:30.56] not because of an API surface. It's not because of anything. It's it's it's there's like a philosophical
[62:36.56] aspect and, and I don't know, I haven't figured out how to chart it like on a spectrum chart, but a lot of
[62:42.56] library authors, not like framework authors, like it's funny cause you know, reacts library. I don't mean,
[62:48.56] I'm not counting those. Like I'm not talking about like the core library, like framework or whatever,
[62:52.80] but a lot of like third-party library authors, people like Tanner Lindsley, um, for example, someone
[62:58.80] who react meaningful are more of the view mentality. Like that's where they sit. I don't sit there.
[63:06.00] The react core team does not sit there particularly, but we'll talk about it. I definitely look at Unhead.
[63:21.60] Right. So like, um, yeah, what are we gonna get here? So yeah, I mean, Sophie says something else here.
[63:29.60] Let me get a little further. Um, ultimately, this is a hint that letting any component authoritatively
[63:36.88] render a title is not quite the right pattern. And you should only do it with components that know
[63:40.40] their singletons per window so that the tie ties into routing. So you want a framework handle. Okay.
[63:45.60] So you, I mean, people, some people made it, you know, is this another place where react is telling you
[63:51.60] to go use next or remix? Right. There's that kind of, that kind of question. Right. So
[64:04.00] it's like, maybe, maybe, but the challenge is while I can agree with this, that authoring render,
[64:13.60] not quite the right pattern, should only do it with the component, no singleton per window.
[64:16.32] How do I make Theo, Theo, Theo,
[64:22.48] a singleton per window when the data that I need to complete that is lower in the hierarchy? I mean,
[64:33.20] I could hoist the data fetching even further, use preloads, you know, and kind of figure that,
[64:38.96] you know, build into the router essentially. And that's a sane thing, but even then
[64:47.68] like suspense and stuff becomes hard. What if I don't want to wait?
[64:50.56] Do I have to live with a blank title before the title actually shows up?
[64:58.64] While I agree that it's fundamentally broken, I'm also not hearing a solution. So like this is,
[65:08.24] this, this is kind of like the, the challenge here, right?
[65:16.40] And I was really having a hard time understanding why this exists. Cause like it, I, I hinted here,
[65:20.72] I don't get why I imagine I would just use remixes or next head management. If the delusion belongs
[65:27.12] in the router, why would react ship it? Would either use this under the hood, right?
[65:31.28] Uh, me and Rick, he go down pretty deep here. I can't remember where this ends up. Um,
[65:46.40] I, I, I, I, I, it's funny. I like, I can't find it anymore because of how deep it is. I'm going to
[66:09.76] grab my bookmarks cause I did bookmark a couple other tweets that are relevant. I don't know what they're
[66:14.24] doing now. Um, no, we'll talk about that in a minute. That's Jose. Maybe I.
[66:25.52] Yeah. See, we don't have Tanner's original tweet. He deleted it. I wasn't online that night, so I didn't even see what his thing was.
[66:40.80] Um, but let's just look at what Tanner wrote. I can, you want to find Theo's tweet or sorry, Tanner's tweet.
[66:54.88] I can drop this in chat. Actually I should drop it here. Cause then it'll drop it on all the places.
[67:04.24] All right. So how did this conversation go? Please avoid sensationalist. Yeah. Blah, blah, blah, blah.
[67:12.16] Fair enough. I deleted my original tweet so we can start over. Is there an official explanation or
[67:15.52] documentation for this reason? It should also be equally obvious to scatter Twitter thread on the
[67:19.44] subject once the place would just don't hold it wrong. That's what his impression was from their comments.
[67:24.88] Honestly, the duping was an attribute of the feature that I, and I think many others assume to be included.
[67:28.80] More actionable question. Does it mean that I can actually get rid of my meta tag management? Part
[67:32.96] of my ecstatic excitement was potentially giving devs the ability to use these features directly and
[67:36.56] removing my need for abstraction. I mean, yeah, I mean, there's that aspect too. Um, yeah. See all the
[67:43.44] documentation for here has been great. This is how I actually knew about it. I didn't find out about
[67:47.92] it in a tweet. I read the docs. So there is that. Um, but that's not really answering the question.
[67:55.12] For Tansac, you can decide if you want to expose meta tag API, avoid pitfalls, or let users have
[68:00.24] for example, remix of the meta, blah, blah, blah, blah, blah, blah. Yeah, it is the wrong term. We
[68:04.40] talked about that already, but it's interesting. See, Ryan Florence, this is what I wanted to find.
[68:12.24] He goes, I think meta tags should all be figured out before you flush anything. So about suspense,
[68:18.96] around it, people will screw it up, but you, but if you care, you'll know what to do.
[68:22.08] I already showed an example where this isn't true, but I'm like, I'm like, okay, well,
[68:30.56] are you going to use these elements now to build remix this story? Because remix actually has deduping.
[68:36.00] We haven't looked at it yet. It's similar to next. If I go to remix, uh, metadata, I think,
[68:42.32] metadata, and we look here, remix meta, you'll see something very similar to next, uh, generate meta,
[68:51.12] which you can just, it has a different format. So the deduping works differently, but it's the same
[68:55.92] idea that you can, I believe, take the parent data. Yeah. Parent route loaders. And then essentially
[69:03.68] like do further merging based on the, uh, the parent information, right? This is a great solution,
[69:10.40] handles all the different variations you want at the router level, not at the core library level, but
[69:15.84] So I go, will you be using these new tags? And he goes, I don't use our route module meta exports
[69:26.32] anymore. I just put meta tags in the route components to let react float do its thing. And it's glorious.
[69:40.24] It's a, this is a, this is a profound question, right? You could say
[69:57.76] that it isn't, but on another argument, you could say it is,
[70:01.68] but it changes the meaning of meaning what status means a little bit, because
[70:07.60] is that like, once you get into streaming it, it does because the second you determine that you can
[70:13.36] handle the page, it's not a 404 anymore. It's not a 500. Even if like the page completely errors out on you,
[70:21.28] the second, when you're streaming that you determine that, Hey, this is a page I can handle. I got past
[70:27.76] that first check that maybe the first off check. And you're like, I'm going to render it. It's a 200.
[70:32.40] It doesn't matter if you realize you have to redirect on it or that, I mean, there's tricks to it, but
[70:37.28] because you can't put a, like, uh, you can't like update status and footers. There's no like other
[70:43.76] mechanism to do this. We are forced to treat status as something else. And once you get to that zone of
[70:52.40] thinking of status, I don't think they are the same, it's a similar thing at all. Title is something that
[70:58.64] dynamically changes over time. It's, it is something that can change over the life of the request as you
[71:05.12] learn more about the title, for example, same with the meta tags. So I do think they are different.
[71:12.64] Yeah, my press interference don't need to handle meta tags anymore.
[71:15.04] Today, our, uh, deduping is handled in a separate library called solid meta that's completely
[71:25.04] independent of router, solid, solid start. Oh, right. Yeah. I forgot this. Yeah. Thank you. Please like,
[71:37.04] subscribe, comment, whatever. I don't usually advertise stuff that much. As I said,
[71:42.64] um, but it does help me a lot, um, in terms of getting more viewers, seeing my content. That's what
[71:48.32] I care about. Um, so, you know, click the button. It helps very much appreciated.
[71:55.04] Yeah, that's, that's, that's, that's, that's incredibly low considered considering the number
[72:07.04] of people are watching live right now.
[72:13.60] Yeah. I mean, whatever mechanism you use for hoisting, like cash is just a hoisting mechanism.
[72:19.84] That's, that's all fine. But it's, it's, it's, it, if we go back to the Excalibur draw,
[72:25.92] there is a different question between whether we want to hoist the fetching and whether we wait
[72:31.92] before we send this first chunk back.
[72:41.76] thank you. I call the UC2 just to like it. Thank you.
[72:54.08] Anyway.
[72:54.40] So I, I'm not saying that these are unreasonable. I just, I, I can, I already like conceptually see
[73:05.76] places and maybe I'm wrong where I want the benefit to have this flexibility. Maybe like I'm nerd sniping
[73:10.80] everyone right now, or I've been nerd sniped myself, but I essentially.
[73:14.32] This is a bold statement out of the whole conversation. This is when I, I stopped arguing
[73:24.40] with them. Like I already had my perspective before. And I was like, this is very weird to me.
[73:28.16] Like, this is not what I would have expected as someone building a meta framework.
[73:32.00] It's it, this is what I was talking about earlier about like, sometimes guys building the libraries
[73:36.24] don't always build the meta frameworks or the third party libraries. So they don't have the same
[73:39.12] appreciation for certain problems. That's not the case in a react, right? They, they have core team
[73:44.56] people building next to us. Um, so like, but this Ryan Florence is not core team. He is definitively
[73:54.80] in that other side though, you know, the library side. And he was basically like, yeah, I just do my
[74:00.08] thing. And this is great. Right. Which is a stark contrast to Tanner's response, which was,
[74:10.72] Tanner wrote exactly what I would have been thinking. See, I'm not in the react ecosystem,
[74:15.76] so I don't have to worry about it. He goes, trust me, I would really love to be able to invert all this
[74:21.20] control to the user and get rid of my abstractions. Of course, they'll always have options regardless. I can't
[74:25.60] disable that. I still don't fundamentally agree with the decision not to do any duping of title meta.
[74:30.16] While most boundaries won't choke on multiple tags, the fact that react devs can easily able to produce
[74:34.08] HTML output that is automatically considered bad practice by just about every search engine crawler,
[74:38.24] blah, blah, blah. A waiter will quickly see an uptick of SEO teams auditing their react devs on this topic.
[74:43.36] It's easy to push this responsibility down to developers to say, you just need to be aware of
[74:46.64] title meta tags, which isn't, is what non-framework react devs have already been dealing with. And it's not a
[74:51.92] great experience. It's easy enough to render multiple titles without react. But with react now,
[74:56.32] especially handling these native tags, I expected more. Clearly great care was put into the similar
[75:02.16] control over CSS style precedents, which in my opinion has a lot of overlap on this topic of
[75:06.16] deduping. Assuming the same level of care would be put into title meta, there's no stretch if react
[75:09.84] now look back on head during rendering make changes based on deeply rendered elements tree, then I don't
[75:14.08] understand the pushback. Um, yeah. The funny thing about this though, is if you look at the docs,
[75:22.40] I don't know if anyone actually paid attention. Maybe this is another thing that do, they actually warn you
[75:27.12] not to update the props of things that have been, that have been pulled up. They don't update after the
[75:33.12] fact. They only update with the values that was that they were originally given at the time of the original
[75:39.60] render. They, they actually say that somewhere in here. So there might be still some more, um,
[75:45.04] you know, missing assumptions here.
[75:51.52] Like, let me see, maybe title is shorter, I can see it. Set the title, you render the title,
[75:55.52] we're always according to the element, accepts children, text will become the title of the document,
[75:58.88] you can pass your own components, special behavior, render always the title within the document's head,
[76:02.88] regards to the tree, the head is only valid, title will exist, it's convenient to keep the composal,
[76:06.80] the vestigy is ignored, item property is ignored, set the property title, use variable of the title.
[76:12.16] The variable must be a single string of text, so you can't use interpolation like this, okay, or single
[76:17.12] number, single two string, it's not obvious, but just curly races, not used, but using like this,
[76:22.08] this is not a single string. Okay, so that's an interesting exposure. I, to be fair, I was working
[76:28.08] on some metadata stuff this morning, uh, when I was playing running solid, and I, I hit the same problem,
[76:33.76] and I, I was like, oh crap, I have to actually add more code to make this work. I did, but I get why they
[76:40.08] would do this, "act cause the title of the two elements," blah blah blah, so cause an error instead,
[76:43.76] use a string interpolation. Okay, they don't say it here. There, there was a, maybe it's not on title,
[76:48.40] there's some of the ones they were talking about how they end up only being the value that they initially
[76:55.36] do. Um, I don't see it. Okay, anyways, we won't worry about that too much.
[77:14.00] All right, so let's keep on going. From my view, this is a great opportunity to react to lift the
[77:19.12] tide, not just for every framework, but all react devs, regardless if they use a framework at all.
[77:24.16] As far as I'm concerned, uh, or as far as I know, yeah, there's no way to get in the middle of this
[77:28.88] API today without writing streams, string transforms, and immediately risking hydrates and mismatches on
[77:33.36] the client. I definitely don't want to go down that road, and I believe this leaves most frameworks
[77:36.48] that offered a title metal abstraction the same exact vote they were in, abstraction over it.
[77:41.12] Regardless if any framework keeps a title meta abstraction or not, react users will eventually
[77:45.68] be educated about these new built-in features and want to use them resulting in a regression
[77:48.96] and expectations for most frameworks that manage them. Yes, because it works differently. Like I said,
[77:54.00] I really want to recommend developers to use this API because it's one less abstraction,
[77:57.20] but I also don't want to have to explain to them yet another rule they need to be aware of to use react.
[78:01.60] Let's take a drink after that one.
[78:11.12] Well, this is why I asked Ryan Florence if he'd be using this in remix, and his answer was,
[78:19.44] I don't, I'm just not going to use a remix solution. My gut is...
[78:22.80] Some of them might, but like, what Tanner was just describing to me suggests that he thought about it
[78:33.20] the exact same way I think about it, which means that from Tanner's perspective, he won't even be using
[78:38.56] these primitives under the hood probably. Well, that might change, but like...
[78:42.00] It's interesting, right?
[78:46.24] Yeah, I mean, I totally understand that it would be very nice if it could work. The thing I'm not
[78:55.28] hearing is how it would actually work. If it's possible to do it automatically, we would,
[78:57.84] but the constraints prevent it, right? Because the React team is not willing to
[79:03.52] provide deduping logic that is flawed. As I said, it's fundamentally flawed.
[79:07.84] So, this is where I was sitting and I was like, "Oh, what am I going to do?"
[79:16.56] Right? Like, this is quite the conversation. This was one of the more interesting ones in a while. It
[79:25.04] wasn't just people, like, shooting each other down for some, you know, funny meme or something.
[79:29.84] Framework authors are the only ones using React without a framework, essentially, yeah.
[79:35.12] Yeah. So, yeah, let's see here. I figured I might as well share what I've been
[79:46.24] been, like, a bit of my research. So, actually, let's just go here. And I made a discussion.
[79:51.20] Here we go. All right. I made an RFC. Because I was like, "How would I want this to work?"
[80:03.36] Right? So, let's talk about the RFC for a minute. Because I think with the backing now,
[80:09.60] we can kind of, like, discuss, like, I don't know. This is an interesting question. How should frameworks
[80:14.48] handle this stuff? Right? I don't know. Right? In this RFC, I'm looking for feedback on potential JSX
[80:22.88] tags. Prozo aims to useful core, but also third-party libraries. You know, like, you want to make everyone
[80:28.08] happy, hopefully, to a certain degree. Or give them the tools they need. I talk a bit about why I'm,
[80:34.24] what I covered at the beginning of the stream. Like, we have this one mechanism solid to already do
[80:38.80] stuff in the head, but why I don't like it. Which is all the reasons that we talked about already,
[80:42.80] about, you know, only doing it first flush. Yeah. Etc. One thing I guess I haven't talked about.
[80:50.40] Because you might be like, "Okay, well, I'll do it at first flush, and then, like, have it fixed
[80:54.72] during hydration." This is kind of a fun game you can play, right? Because you can, say, set the title
[81:03.92] to, you know, have it as, like, come back as Theo here. And then, I hope he doesn't mind me using his
[81:13.12] name a bunch. And then have it be... Have... Yeah, sorry. Let's line this up. The server realizes it's Theo here.
[81:24.16] The server realizes it's Theo here. And the server realizes, like, we'll worry about the flushing in a minute.
[81:30.56] That is... It's this, right? Here. Right?
[81:38.16] Now, if you're streaming...
[81:46.64] If you're streaming, this will just, you know, like I was talking about, this will just kind of
[81:55.84] automatically happen as you go, right? As it gets the chunks, the title will do, right?
[82:05.44] Now, if you stopped at first flush,
[82:12.48] you would only see Theo, like this. And then, presumably,
[82:20.56] at some time later, you'll hydrate and see, you know, in a simple world, you might say,
[82:31.20] okay, then you'll see this one hydrates. It'll go from here, and then it'll hydrate and you'll see this,
[82:35.20] right? Like, it doesn't really matter. If as it goes, it basically reruns the head tags,
[82:42.00] you'll settle pretty quickly as it hydrates. Now, there's a couple fun parts about this. First of all,
[82:50.56] when the first flush happens. Sometimes the first flush might not happen here, depending on other
[82:54.80] aspects. It might happen here, and you always see capital Theo to here. That's perfectly fine.
[82:59.28] The other fun part that can happen is, when you get to the client, sometimes you don't have all the
[83:03.84] assets. Like sure, you stopped at a suspense boundary on the server, and you're good there. But, you know,
[83:12.24] we do a lot of preloading to avoid this problem, but lazy components. It's possible to get to a point
[83:21.60] where you can hydrate part of the page, but you're waiting on
[83:25.76] JavaScript that hasn't loaded yet. Like, on the server, those async imports happen, you know, relatively
[83:36.56] quick, but on the client, you have to do a whole back and forth that it's, it's conceptually possible
[83:43.44] in this model to essentially stream
[83:50.64] flush late or whatever, based on some kind of thing. Like I've, I've seen this happen in solid,
[83:59.68] where it's possible that like something happens where you end up like the chunks kind of get come
[84:08.08] in quicker and you end up seeing this on your page. And then because it you're the code loads and starts
[84:14.24] hydrating and doing the rewrite, you actually then see
[84:17.04] it revert back to this and then play it back again in the client almost.
[84:29.68] Right. Like we're like, depending on the type of hydration, the code loading, it's possible
[84:41.20] that the server still flushes later and then ends up replaying this stuff. Now
[84:49.76] that's the biggest danger of right on hydration because like right on hydration, uh,
[84:55.68] is subject to all the asynchronacies of the browser. And then it's possible conceptually that the server
[85:06.72] could get ahead of it and then basically undo and redo it's, it's minor, but I just like conceptually
[85:12.32] knowing this is one of the reasons. Plus it's more work. It'd be great if you could just trust the server.
[85:17.04] Is there something I'm not getting why the dev couldn't specify some form metadata for which
[85:28.48] titles should take priority? Right. But, but you need a mechanism for this, right? If you'd provide
[85:32.72] no mechanism, how, how can the, the stream handle it properly? For most of the time, I only want the
[85:39.68] title type to update when I switch page or paginations. Yeah. But it's not just a question of when it updates,
[85:46.16] it's about when it's available, right? Because what if the title actually includes data from the page?
[85:54.00] Are you willing to block the whole page for that title? That that's the question. It's not about
[85:59.60] like, obviously it'd be great if the title was just there, you know, but like, it's not always practical
[86:07.60] that it's possible that it can be is kind of what I'm arguing. Like, do you want to block?
[86:13.36] And more importantly, do you want to have the decision whether you can block?
[86:23.44] Well, why do we care about UX is severely impacted by blocking? You're right. The title coming in,
[86:30.88] flickering, who freaking cares? That's actually an argument for deduping, I think actually. But if you're
[86:37.68] telling everyone that literally until all the data is needed to show the metadata, we can't send you the
[86:45.36] page that has UX implications in some cases. Right? Like, I mean, how should I put it?
[86:57.28] It's, it's so hard to talk about this in a lot because of people's experience here. But like,
[87:05.44] there was a time period where client side apps ran circles around server rendered apps. Like what? No,
[87:12.88] like, especially in the JavaScript space. I, people used to make their SSR demos back in like 2016 circuit
[87:17.76] time. And I just make a client demo and solid and smash them on lighthouse, smash them in every possible
[87:23.60] way. And you'd be like, why is that possible? Why is this happening? The client, the client needs to,
[87:29.92] you know, go and fetch the data and doing this, the server, you have all the data. Well, it's because
[87:33.60] they blocked, they just basically wouldn't send back anything on the page. So what would happen is
[87:38.80] you delay sending back the, the fetching of the CSS, the fetching of the JavaScript, fetching of pretty
[87:43.28] much every asset on the page. And you end up with a scenario where like you have nothing and then you
[87:53.52] have everything and then you wait for the stuff to become live. Whereas in my client side app, I'd send a
[88:01.04] blank page almost immediately and then start fetching all the stuff I need the client. So my JavaScript
[88:07.84] sometimes arrived, you know, for rendering quicker than the data would anyway. So then I was like
[88:15.28] rendering in suspense boundaries for parts of the data. And if you know anything with solid works,
[88:19.44] which a little different than react, we don't throw away what's under the suspense boundary.
[88:23.20] when like the data resolves, we, we just fine grain patch it in. So I technically, I still to this day,
[88:29.12] some demos where it's just kind of like streaming in some data or whatever, outperform the HTML
[88:33.68] streaming when the network is fast. But
[88:43.92] the whole equation changes when you can stream because now you're not blocking anymore. Now there's
[88:50.00] basically no penalty, um, for, you know, putting the data on the server. You can make the choice
[88:56.40] actively. You go like, I should wait for this. I don't want to have a loading indicator or I can not wait
[89:00.72] for this stuff like these meta tags and titles, arguably if they would cause the page, the block
[89:10.08] should be something you can make an active decision on.
[89:25.60] I mean, early hints are great too, but early hints and streaming are basically the same.
[89:28.88] Like this, there it's, it's like a very limited part of this thing, but you can do more like
[89:36.64] another advantage of streaming in these situations is
[89:40.00] the slow loading stuff, right? We like the stuff that takes longer to load. We have the ability with
[89:49.44] streaming to, even though we don't care about it, we could just fetch it on the client after the fact,
[89:54.08] we have the ability of streaming to start that request that much sooner. We start the request for
[89:58.24] the data here instead of, well, I mean, I actually have the diagram right here. We start that fetch for
[90:04.48] the data here. When we go to the server, this is when we start that fetch for the data when you're streaming.
[90:11.52] And otherwise we would be starting that request for the data here, here versus here.
[90:24.08] Like it's, it's almost strictly better across the board on every like mechanical aspect.
[90:32.32] It's like, has the benefits of client. It's very rare that you find a solution that does both things
[90:38.72] and actually does so with fairly minimal, uh, compromises. Usually there's like a trade-off
[90:44.24] streaming kind of sits in this other than cache ability, arguably, but I mean, we could discuss
[90:49.76] that if you really want to, it sits in this actually kind of sweet spot here.
[90:58.72] You want the meta tags for bots, but bots don't support JavaScript always. So like, you'll just
[91:07.44] wait. If the bot has to wait, you don't care. If the human has to wait, you do care, which means that
[91:13.76] like, you should be able to author these things in the same way, right? You don't want to like, have
[91:18.80] like the bot version and have different code in the thing. You should be able to just like, write the
[91:22.64] stuff. And when you say, Hey, it's a bot, just wait and flush at the end. You know, I don't care.
[91:29.20] And it gets everything, you know, inserted in the head initially versus the end user, you know,
[91:32.96] you should be able to just, this, this should be a very simple switch at the top level, not something
[91:38.56] that changes the way you architect or author your code. Right. Ideally that's a DX concern, but
[91:48.80] you don't want to use it. Yeah. So my, my, my whole point is it causes a problem that affects UX. If
[91:56.64] you're willing to block the page for it, which is what the recommendation of basically every library is.
[92:15.04] So yeah, I mean that, that, that's, that, that's this, uh, sorry, where was I? Yeah.
[92:24.96] I was, yeah, right. I was doing the Excalibur draw here where I was showing the timing here. Like this,
[92:32.16] this, you, this, uh, UX bit is very minor. I just wanted to throw it out there. Why, you know,
[92:38.80] we could probably live with this aspect we do today with solid. It's less than ideal.
[92:44.96] But it's just, you know, a thing. Okay. So let, let me continue with this piece for a second here.
[92:53.36] Yeah. So while one could take a position that all metadata should be resolved before flushing,
[92:58.88] and it also means always blocking, which I don't think is a good place to be. This isn't always
[93:01.84] a reasonable request. You could have to wait on the longest thing to load on the piece of data before
[93:06.24] showing the user anything. You could argue that deduping is the problem, but showing some less
[93:09.44] descript title before the fully formed one is probably still beneficial. So I did research.
[93:14.88] I looked at a bunch of libraries here. So I'm going to just drop this in chat in case anyone
[93:21.68] wants to look at it. I know this is a fairly esoteric topic. I should have said this at the,
[93:30.56] at the beginning. Um, you know, I, this is like a framework author kind of topic. It's what we usually
[93:36.32] cover on this stream. You as the end developer are only slightly impacted from it because the gist of
[93:42.16] what the react team says is this feature is not for you. You should probably just use what they have
[93:46.64] because they're right. If deduping, you know, title is fundamentally flawed, then they don't want to
[93:58.16] hand in it. Although if you look at this chart and honestly, if you expand this chart to ever to like
[94:03.04] twice as many libraries, cause I looked at more than I actually like did here, you will see that react 19 is
[94:07.76] literally the only head library in existence that has not to do title pretty much in all time. I, I,
[94:15.04] this is why it was surprising, not, and I don't mean that in a bad way necessarily. Like it's just,
[94:22.24] it is unique. I don't think anyone goes out to make a solution for head tags and doesn't deduped the
[94:28.64] title. Like, so this is you understanding that this was very intentional. Like I, I'm sure the react team
[94:37.60] knows that I'm sure that like, they will look like probably to brief look at the space and then realize
[94:41.04] like literally everything ever has deduped the title and they're probably like, yeah,
[94:44.88] but we don't want to. So it's intentional. What about angular? I don't know angular's solutions. You,
[94:54.00] you made, you got me there. I, um, is it built in Brandon? I, I like, I, I, yeah.
[95:09.52] Yeah. Let's look quick metadata. Haven't looked used document head.
[95:25.68] Okay. So they have used document head
[95:28.56] and then they inserted in this reminds me of the old synchronous rendering. I wonder how this works
[95:36.80] with async. I guess they don't have streaming in the same sense. Like they have an order,
[95:40.56] but they don't have out of order. Like this is definitely first flush style API. I think if I
[95:46.08] am understanding here, um, Oh no, this is, this is for reading it, not writing it. Huh?
[96:02.80] No manually set the heads and yeah, no, you can set it.
[96:07.28] But look at this title. I mean, this is the answer right here. Title is a string. It's not a,
[96:15.68] an array of things. It is a single string. This alone tells you they do do the title.
[96:20.40] No, they do not. They do. Oh, when the component dismounts. Yeah. They might remove the title.
[96:32.80] They might remove the, yeah, they probably do. I bet you they do remove the title actually. Yeah.
[96:37.12] Sorry. Yes. They, they will remove the title when it dismounts. Yeah. Yes. So if you put a title on each
[96:45.28] page individually and remember to put it on every page, none of your pages will be without titles and
[96:51.04] it should work. Right. Okay. Anyway, but yeah. Okay. So angular, neither do dupe. That is interesting.
[97:08.88] So like they don't treat titles as a string. They, they just treat it as a meta element.
[97:11.84] Cause like basically if you, if you treat it as a single string, that's implicit duping. Cause there's
[97:18.80] only one value for it. Right. Anyways. Um, I went through a bunch of frameworks and looked at it.
[97:28.56] There was some interesting patterns. Cause most, there's a lot of these like do it everywhere styles.
[97:33.84] The title would be over in the answer. Yes. So yeah. Last one wins. Yeah. So yes. Angular is the same
[97:38.96] as everyone else. Yes. Okay. Yeah. That's, that's when I say duping, duping is a wrong term. It's overriding.
[97:47.52] So yes. React is very unique there. So that's, I, it's a stance, which as I said,
[97:53.04] carries repercussions, but this is not about a negative or positive thing. It is an interesting
[98:00.64] thing. Okay. So, um, yeah, first of all, some solutions are like, you can just put tags everywhere.
[98:08.08] Other ones kind of group them. I want to point out something, obviously next and remix use like sections
[98:13.76] or route groups, like in your route definitions. Um, whereas like most of the other ones are
[98:20.88] individual react helmets API is an interesting one where I continue considering it grouped because
[98:26.08] you put, you make a helmet tag. And I know Svelte is like this two to a degree, but the, um,
[98:36.72] like the Svelte head or whatever, but the reason I put them under grouped is because they actually
[98:42.32] do a, a, a, a level of replacement with it in that if you have two metadata tags with the same name or
[98:52.08] key within inside the same group, they don't dedupe. They will, they'll let you put like four things with
[98:56.88] the same key. But if you use that same, you know, property name on your meta in a different helmet, it will
[99:04.96] replace both entries from the other one. So you can make duplicates at the same level,
[99:11.28] which is, as I said, very much the same in something like next or remix where each level has the ability
[99:16.80] to basically completely merge over override the level above it. Helmet works like that too. Whereas
[99:23.36] when you have single off one, one of elements style designs, each one's handled separately. It's not really
[99:29.52] easy to do that. Um, Svelte doesn't just doesn't, it just makes groups and mounts and unmounts them with
[99:37.52] your component. But it was interesting because the ones that grouped basically deduped meta on name,
[99:46.40] whether like intentionally or like remix sort of, they just say the last route section wins. Um, like they,
[99:55.44] they basically deduped on names. Most other libraries other than like helmet that I looked
[100:00.16] at did not, but again, helmets kind of grouped. Um, I know there are libraries like the one that I built
[100:06.32] solid met on that did dedupe and was not grouped. So any of those libraries basically open graph
[100:13.60] made it so that they can't work that way because it just screws with open graph.
[100:19.44] So I think that generally speaking, deduping on meta properties, um,
[100:25.44] can't be something that can be automatically handled unless you know for sure that you have a merger
[100:33.12] layer system like you have with a, with a router, which means that this is not really a feature that
[100:36.80] you can do as a core feature in a library. So, um, react decision makes a lot of sense. Svelte decision
[100:43.20] makes a lot of sense. Nuxt 2. We're going to get to Nuxt 3 and unhead in a second because they are an
[100:50.88] interesting exception, right? Because as I said, anything that dedupes or overrides is the last one
[100:57.68] wins category, generally speaking. Okay. Title, as I mentioned before, everyone basically dedupes on title.
[101:04.64] And then some of the frameworks that don't dedupe in that provides specific keys. This used to be the
[101:11.12] meta framework trick. Um, I, you know, Svelte doesn't really, but they have a way of doing it.
[101:16.64] Um, uh, next, Nuxt, old version of meta and new version of meta, but you provide some kind of key
[101:24.40] remix. I said group doesn't, and these ones, the group doesn't. So there's like almost like two
[101:28.40] different approaches here. I've found where there's either grouping that can do more reasonable
[101:34.88] meta, um, deduping because of the grouping or the one, or the ones that aren't
[101:41.04] grouped that have some kind of mechanism for a key. The only exception is unhead, which basically
[101:45.36] just does everything. Um, so which is, you know, interesting because it also makes it the most
[101:53.92] complicated. Cause a lot of the, you have more configuration object options than you would like
[101:59.20] stick on a JSX element. It's like, Oh, there's like, you can make merging strategies and you can,
[102:05.52] in, I mean, unhead, let's just go there. Um, title, title template, template parameters, body attributes,
[102:15.36] scripts, and, uh, let's see, is it API? Um, is it usage? I can't remember where it is. There, there's like,
[102:27.52] mode like this, this is very, um,
[102:38.72] what's the term when you basically have like every option imaginable under your,
[102:45.76] under your head. Um, this is very, uh, extensive, um, so to speak.
[102:52.72] So, I mean, I was definitely tempted here cause it's like, man, I just don't like,
[102:56.96] if I don't want to solve a problem, this is one way of solving it. Get past people to a library that
[103:01.92] literally does everything comprehensive. Yes. Comprehensive. That is the term, right?
[103:11.04] Yeah. Um, unfortunately for me, you know, my criteria, I care about streaming on head does
[103:16.88] not currently support streaming. There's an open issue that they're starting to look at for, uh,
[103:20.96] for like a 2.0 to look at streaming. And even if they support streaming, I don't know how they're
[103:26.32] going to support streaming. Cause they, you know, a lot of times it's like, Oh, you know, maybe first
[103:30.08] flush is fine. This is a very tricky place that integrates very deep with the framework. I'm very
[103:35.84] interested to see how they do the generic stuff. I've been very impressed with on JS in general in how
[103:41.76] they've been able to, uh, integrate so well with different solutions. Um, it's very hard to find that
[103:51.52] general layer. Um, and at the same time, give such comprehensive feature set. I was curious for a second.
[104:01.84] So I, I dropped it in, uh, bundle phobia and of course, uh, uh, on J unhead our use header,
[104:07.68] what is it? Sorry, just unhead. The core library was like 13 kilobytes mint G zipped,
[104:12.00] which makes it twice the size of solid JS itself. And so, uh, solid meta was 1.5 kilobytes.
[104:17.84] So I was like, huh? And that includes a server code. So I was like, I'm, I'm, I think if I was going to
[104:24.08] take this internally in solid and do the streaming stuff, um, I can make something smaller than solid
[104:29.20] meta and like basically cost the user like 500 bytes ish. So like there's also like,
[104:34.88] do I want to expose all of this and be on the hook for all of this? And since I need to kind of get
[104:39.52] the streaming stuff, bring it in core, does this make sense? And I'm, my thinking was not so much.
[104:43.92] Yeah. Like, yeah. Comprehensive. Yeah. Tan stack is comprehensive as well. That's what I'm saying.
[104:49.60] It's, it's an interesting tension. Sometimes me and Tanner hit this one working on start.
[104:55.12] Um, I don't know how many of you, uh, tan stack starts been getting a lot of attention, but it's
[104:59.44] built on the same bones or skeleton, a solid start. And a lot of the features and a lot of the thinking
[105:04.72] and the philosophy are basically completely aligned. Like all the composable in this, like I didn't,
[105:11.04] I built a framework and with Nikhil who built Vinci, we built something in such a way that we would not
[105:18.08] alienate solids, very small ecosystem. And Nikhil's case, he wanted to be able to support,
[105:22.72] um, doing some react stuff as well. And we did so by being very, by figuring out where the boundaries
[105:29.12] were and making it such that they weren't going to interfere, um, in a way like be too prescriptive,
[105:34.88] uh, in terms of like what tools or libraries you used. And Tanner had the same problem because every
[105:43.92] meta framework is married to its router. So like, you're kind of stuck. You're suddenly in this
[105:49.04] position where it's like, okay, I'm going to use remix. Well, you're actually using react router or
[105:53.44] next app directory. Like the framework is the router, right? That this is old news. It's everyone knows
[105:58.88] that. So, but when I was building solid start, I was like, no, I don't want the framework to be the
[106:04.80] router. Um, and we tried it a bunch of different ways. And Nikhil was like, came back to me after being
[106:11.20] away for a couple of months and he's like, I got it. This is how we do it. He, and he got inspiration
[106:14.96] actually from Jared from bun, um, who's, he'd been working on generic bundling tools for stuff like
[106:20.16] server functions. And we brought that to the beat ecosystem. So like, it's funny cause me and Tanner
[106:28.16] sit down and talk a lot about a lot of these kinds of like levels of decisions. And it's, it's a lot,
[106:33.60] it's less like people always like people making the same solution. It's more, it's more of like,
[106:39.28] um, the way I like, I'm very primitive focused, kind of core focused. I always think about like
[106:45.12] what I could offer from like a premise thing that wouldn't power people like Tanner while having
[106:53.36] basically no interest in building what some of the stuff like Tanner builds myself. And what I hear from
[106:58.80] Tanner where I get a lot of value from is he's looking for building blocks that he can build the
[107:02.72] stuff and react. And most of the time we, when we find those gaps, we're like, Oh, actually solid
[107:07.20] works like that. And he's like, Oh, I wish I could do solid. But sometimes we identify other gaps and
[107:13.52] it helps me kind of figure out what the real core primitives are. But usually what it ends up with is
[107:19.36] Tanner going, building the, you know, unhead style library and me going, what is the absolute minimum
[107:25.84] thing he would need to get what he wants from the core library to build a library like this.
[107:30.24] Cause I sure in hell don't want to build this library.
[107:32.88] Anyway, this is a very, uh, comprehensive library. Um, yeah, I mean, you can see all the different stuff
[107:49.84] you can do here. Wasn't quite the right fit because of the minimalism and the streaming stuff, but yeah,
[107:59.04] I don't know. This is, this is a very interesting topic because as I kind of went over, I think the
[108:04.72] core needs to be aware of this stuff, but if, if the core can't do the deduping at any level,
[108:11.92] then there's no means to actually expose this to people like Tanner, they just, it won't be basically
[108:18.64] any use for them if they actually want to accomplish what, what I kind of set out here to do. So I came
[108:24.32] with my proposal, um, which I'll spend a couple minutes talking about just, you know, which was,
[108:30.72] it's funny. It's very much like on head. Um, you know, it has less stuff on it. Um, it doesn't do
[108:39.12] any deduping except it has the optional ability to pass a key, which could do deduping. Sorry. The only
[108:46.80] deduping it does is title. Sorry. I should be clear about that. It dedupes title, um, which I'll talk about
[108:51.52] in a second, but other than that, it would dedupe key. But then the, the funny part or a fun part of it is
[108:59.04] we, if we were to export JSX tags, yes, we do do title, but every other rule is exact same as react.
[109:05.92] So none of the other deduping happens. So while the underlying primitive that the compiler transforms
[109:12.08] this into has the ability to do deduping and handle that deduping on the stream, be able to send diffs
[109:16.80] over the stream, you know, append elements, remove elements, the actual defaults that people get have no
[109:22.56] opinion about how they do except for title. I mean, we wouldn't even have to do title that way, but let's
[109:27.12] pretend except for title and there'd be no way with the JSX to set the key. So the, if someone
[109:34.48] approached this from the perspective, like you took react stocks and we're like, there should be only
[109:40.48] one title on the page then, and all the other rules from react stocks and just did it. This would work
[109:47.36] perfectly fine for them. It wouldn't impose anything about rules of deduping or any of that stuff. They,
[109:54.80] it would just kind of stay out of the way except for title, which I'll talk about in a second.
[110:00.24] And then for people building libraries, they could use this and have key based diffing,
[110:04.64] which would work over the stream. After the fact they'd have the means to diff, merge, make those
[110:10.00] decisions and have incremental streaming. Right? So I think this is, um, very powerful, um, kind of
[110:20.48] concept anyway, because the, the average user isn't told that they should have more than one title on the
[110:27.84] page. The only reason that I I'm considering, uh, deduping title is because
[110:39.84] you can still recommend not to put multiple titles on the page and still have the benefit. This is like
[110:46.16] the exception case. It's like, what do you do when someone doesn't follow the rules?
[110:52.56] You know what I mean? Like if you say that there should only be one title, then that's fine. But if,
[111:08.32] if there are two titles should, what should the behavior be?
[111:11.84] Right. You can either just say not up to us, but since I already built the mechanism to dedupe
[111:21.60] anyway, um, the, the support future deduping efforts of people like, why not? As I said,
[111:29.20] this is just a proposal, but this is, this is kind of where I'm getting at. Cause it feels like
[111:33.44] the core unfortunately has to be aware. Cause as we already talked about, this isn't really
[111:38.00] easily built in user land. So you're kind of in this place where if you actually want the solution,
[111:42.96] the, the framework has to provide the means, but not the opinion. And I think that's what this,
[111:50.16] this, this accomplishes. That being said, um, I've, I actually went and implemented most of this
[111:58.32] the last couple of days when I was playing around and I found some other fun titles limits and solid today.
[112:04.32] I don't think I'm going to get this out for 1.9, even though I spent all this effort to do it.
[112:09.44] this, uh, feature actually benefits greatly from solid 2.0 reactivity. Ironically.
[112:16.40] Um, it's more details and probably people need to know or understand, but, um,
[112:25.04] essentially this kind of work should happen on the server as basically a render effect is what we call
[112:33.60] it. Um, user effects only run on the client, right? Through your use effect type stuff. It should be part
[112:39.92] of the rendering. And, um, I guess we'll talk about it a bit today because solid groups, the tracking and
[112:48.08] the effect together in our effects in solid 1.0 render effects happen as you render and user effects
[112:56.80] happen after you render. And both those timings are actually really awkward for solving, um, the metadata
[113:05.60] problem when you consider async data and suspense, because if it's as it's rendering, then it's too early,
[113:12.56] right? You can't, you don't want to update the title until suspense is finished resolving. And if it's after
[113:17.44] rendering, like in the side effect, it's too late. You don't know, you actually depend on the async stuff.
[113:22.40] And for, as I said, most end user code, you never hit this, right? Because you're rendering and it blocks
[113:26.48] and it handles it, but the head tags actually rendered to a different place. That's not controlled by the,
[113:31.44] by the main render tree. So this is like solid specific details, which disappointingly,
[113:38.48] I learned enough that I know exactly, I think this proposal still, you know, we'll have some more
[113:41.92] time to debate and talk about it. And I think this is exactly how these types of solutions should work
[113:45.84] in the future. Um, I just lack the tools to easily implement this today, even though I got a basic
[113:53.04] working version, um, going, uh, the last couple of days, but yeah, I don't know if anyone has their
[113:59.84] thoughts on this, but, um, it's, I think this is how you approach it. There's some good comments,
[114:07.92] actually. Ricky jumped in here, actually. Uh, wow. This is a great write up and research into
[114:12.08] different things. I, I'm actually so appreciative that someone from the react core team actually
[114:15.68] bothered to write on a solid RFC. Part of it was because, you know, I do talk about react a bunch in
[114:21.36] here, just explain react protein here. And because I was like, this is really interesting. I don't quite
[114:25.84] understand. We try to avoid voicing a common abstraction on users that has unresolved pitfalls,
[114:30.00] like the ones you mentioned. That's why react supports deduping for links, script, and style
[114:33.36] tags in cases where like, there's no pitfalls, like the href is the same or the source the same,
[114:38.00] but not for title. Instead, we encourage libraries and frameworks to choose their own trade-offs and
[114:41.92] users can choose different libraries or different trade-offs. That's why the two react frameworks listed
[114:45.44] have support for deduping, but in different blah, blah, blah. That's choice we make to live with,
[114:48.72] but for solid libraries, you may have different design principles that work better for your users.
[114:52.56] I don't think one way is better, just different set of trade-offs. Yeah, no, definitely.
[114:55.68] And in a way that I think might make more sense to like the React core team and React team,
[115:01.52] to me, this is like fetch, like overriding fetch, because it's like you mechanically see an advantage
[115:13.76] of doing that to accomplish a certain goal, right? Because you know that it's so vital for the
[115:20.56] functionality of the framework to kind of step yourself into it, right? You need to open up the
[115:24.88] mechanism. You, it doesn't really like for the most part, you're not really changing anything
[115:31.52] or trying to make push the opinion on people, but you need it mechanically. And I feel like what I'm
[115:37.84] getting at here is I actually, what, as I said, the coolest thing a moment ago is if someone, if I
[115:43.20] implemented this proposal, the React docs would just apply to solid basically 99% and it would just
[115:48.80] literally work the same way, except for title. But someone could say that's the way I should develop
[115:56.40] and it would work completely, but it opens up the door for people to be able to
[116:01.52] use this as part of libraries to get functionality that could only be exposed from the core. That's what I'm
[116:09.36] saying. My, if I think because of our differences on viewing on streaming is why there's a difference
[116:14.64] here because I think streaming goes beyond the first flush. I, there's no choice but to provide a
[116:20.48] mechanism to handle this. Whereas if you don't, you have to assume that streaming ends up like, or that
[116:26.24] this ends at first flush. So it's, it's like, it's interesting that I actually think React and
[116:35.92] ourselves are very, very aligned here. It's just the ambition of the solution or the problem being
[116:44.56] solved is like, I'm being a slightly more ambitious, which pulled me, caused me to pull in the next thing,
[116:49.12] so to speak. Whereas React's like, um, that's outside of our range. It's not because we don't
[116:55.76] want to encourage libraries. It's actually the opposite. We recognize that they wouldn't be able
[117:00.40] to get to where we want to go if we didn't give them the tools. So yeah, definitely interesting.
[117:09.04] Last one wins. It's the same, it's the same thing, but the reason, the reason
[117:14.40] that I, I, I might be more lenient on this kind of thing is if the answer is do what React does,
[117:22.16] this works. If the answer is do what remix or next does, it still works because hierarchically
[117:28.72] you, you do get the last one wins situation. The problem is you can't guarantee
[117:36.24] the last one wins as well when you can just put stuff everywhere, but you can't, but the router is
[117:40.40] not core. So the only option you have here is basically with the JSX tags, not last one wins.
[117:48.64] And then if someone wants to make a tag that's JSX tag like and make last one win, they can using this,
[117:56.08] or they can make, this could be used to make something like remix or next does. Um, and again,
[118:03.44] you don't have to worry about that. Yeah. I mean, yeah. Blastering the stream. Like you, I think the
[118:15.04] thing that people start picturing all these edge cases, but no one ends up authoring it like that.
[118:20.56] If you put like, think about it. This can happen today. If you put these head tags and a bunch of
[118:29.04] siblings under lazy components that all order async and coming at different times, react helmet would
[118:35.76] go freaking nuts. It wouldn't know who won, who was last, whatever it would be a mess. No one actually
[118:43.92] authors their stuff like that though. Right. I like, I was thinking about it with title. It's like
[118:50.56] you picture both extremes. You have two titles on the page because you messed it up in react 19 and
[119:00.40] you're like, why isn't the title updating? So you're suddenly looking around your whole page, trying to
[119:04.88] find your whole project, trying to find where that second title is. It's very similar to why is that title
[119:11.68] updating to what I don't expect it. And you end up like both situate, like just by not deduping, you
[119:17.28] haven't actually solved the problem. Like the, the, the, the work you have to do to actually look around
[119:23.60] is actually the, the same work, so to speak, like, um,
[119:29.12] like it'd be different if one of the solutions actually solved the problem, but the, like the cold
[119:36.72] reality is there's a single title. So whether we pretend to or not, we give the user the ability to set
[119:42.72] multiple titles, deduping is happening. It's in your controllers or it's in the browser's control,
[119:47.92] but it's happening. So like, uh, essentially like
[119:52.64] it doesn't actually matter as, as fundamentally bad as it is, I don't think it actually matters.
[120:10.40] What if a page had an ID and the title should have that ID? I mean, put the ID in the title. I'm not
[120:16.56] quite sure I'm understanding the question. Like the, the, the thing is there's a limit to what these
[120:27.92] solutions can handle properly. And there's a limit to what the browser can handle properly. So
[120:38.40] unfortunately there there's like the, I could say ideally from an end user perspective that the
[120:47.60] route level stuff that remix and next is doing seems to be about the ideal solution, but remix and next
[120:54.16] don't have the tools to do the streaming the way that, um, that we're handling it. So this would give them
[121:06.00] the tools to handle the streaming. I, I'm hoping this makes sense, right? Like it's, it's essentially
[121:16.88] being as unopinionated as react, except for title, which I said has no really defined behavior if you
[121:26.48] have more than two title tags on the page. So it's kind of like out of it, but then on the other hand,
[121:32.24] giving libraries a way to actually interact with the streaming, it basically handles both scenarios anyway.
[121:37.84] The, the, the main reason that people use head libraries with title deduping is so that they can
[121:52.00] set default titles or set titles like, yeah, defaults the main one or set, uh, titles before data is loaded.
[121:59.84] Um, but a lot of times what people do, and maybe this is a bad practice, we could argue,
[122:05.12] is they set a title higher up that like, if they don't put a title on the page, there's just a title there.
[122:16.00] I think they probably liked the approach. I liked the approach. I liked the approach of remix too.
[122:20.08] It's funny hearing Ryan Florence just like denounce it, but like, like it's tricky. Like let's look,
[122:30.08] let's look at Twitter's API, but let's just look. Okay.
[122:35.44] Let's look at a, um, let's kind of, where's my page. Why am I not home profile this one? Okay. Here I am now.
[122:46.48] What does it change when I go? Yeah. Okay. See now I have a new title post replied by Ryan highlights,
[122:53.84] highlights. Yeah. So changes. What I'm getting at is
[123:00.48] it's fine because each one of these tabs has their own title, right?
[123:06.32] But if you were to write this component or this page in a router,
[123:14.32] you basically have a page and then you have like nested three, like six nested routes in it.
[123:21.04] You have to make sure you get the title and make the right information at the right level of the router
[123:28.00] and that all six of these have their thing, which you should honestly. So like from that argument,
[123:34.00] you could say like the title should actually belong in each one of these tabs. You should not have a
[123:39.28] title up here. Right. And I load Twitter, you know, you know, so it shows us shows X first before it shows
[123:48.08] the posts. I'm gathering this, the client's single page app. So it does that. But what I'm trying to get
[123:53.44] at is what if you want to, you know, show Ryan before the tab or include this information. What I'm
[124:00.32] getting at is the title information sometimes isn't known until the, sometimes it's obvious from the
[124:07.20] path, but this, does this have my name in it? Posts liked by Ryan Carniato. Yes. Sometimes you don't
[124:13.12] have all the information at the time you go to render the initial page.
[124:20.00] Yeah, mostly. And that's how React is handling it too. You know, it's a low level. They don't expect
[124:34.16] end users to really use it. I get, I mean, maybe they do, but like it's, as I said, it's interesting
[124:42.32] that pretty much every title, every head management library has always needed title because the browser
[124:48.32] forces you. Anyway.
[125:00.00] Yeah. But what I'm getting at is it doesn't really matter if it's outside, like you could take the
[125:05.76] metadata coming from something like remix index and feed into this and then get full access.
[125:09.84] The fact that it's JSX is only one possible interface. This is, this is the sketchy part.
[125:14.88] I actually don't, I'm less concerned about having an underlying head thing, deciding the behavior of JSX.
[125:21.28] Like we talk about making assumptions, you know, when talking about what people want to do,
[125:26.24] making assumptions about the behavior JSX is much more impactful on the surface area consideration
[125:32.56] than exposing a hook that has special behavior. Like this, this has probably more impact over
[125:39.36] time for support than, than this does.
[125:42.24] All right.
[125:47.60] So, yeah, I mean, it's def, it should be clear that this is definitely not something that has an
[125:55.44] easy solution. Um, and why maybe library framework authors haven't seen completely eye to eye on it.
[126:03.36] I think that something, this is the solution, but, um, as I said, I'm missing some of the primitives
[126:18.48] to implement it today. Unfortunately. Um, this is one of those examples where my head's already in 2.0
[126:27.28] and then I go to implement it and I'm like, Oh crap. I took that for something. It's really difficult
[126:32.96] to ha to always have your ideas and mindset being in the future and then not being there. Um, so,
[126:40.56] but I think this gives us more time as to talk about this. Um, yeah, let's, let's move on. I, I think I'm pretty
[126:47.52] good with this topic. Let's, let's, uh, let's go into the next topic. Let's, let's maybe look at some of
[126:52.64] the, uh, Elixir, um, or, uh, Jose, um, stuff, uh, live view stuff.
[127:04.08] That's going to go back a bit, what's this whole thing?
[127:17.92] Yeah. I don't want to jump fully into this week in JavaScript yet,
[127:29.44] but we covered last stream. Um, we covered, um, this whole thing where Jose basically was going
[127:39.68] through the chat GPD app and found a whole bunch of bugs in it. Right. Right. And I mean, from my
[127:49.52] perspective, that's what they are. He released another video where he showed how you, um, implement this in
[127:58.32] live view and, um, I have to admit when I was watching it, I did turn my nose up a little bit.
[128:05.36] Um, I, I didn't fully understand it. And I'm not going to play the whole video. Let me see if I can
[128:12.40] jump ahead to something that shows what I'm talking about, but yeah, uh, it's blurred here. Sorry. Let me see
[128:20.24] if I can, can I, it's right here. It's exactly right here on the screen.
[128:27.28] the video is loading.
[128:36.32] Yeah. I, I will do it in a V2 branch. I, the, our problem is not having split effects. Um,
[128:42.00] it should just work naturally in that world. Yeah. Of course. Now the video is not loading. This is like,
[128:49.36] I can see it on my screen, but it's blurry. So frustrating. Come on.
[129:10.40] Okay. So right now, what he's doing here is he's, he's showing that. Yeah. Okay. So what now he's,
[129:35.52] he's showing how like he can do optimistic updates by basically exposing this JS, um, library. Um,
[129:44.40] so that basically, I guess this is Phoenix click JS push, delete JS hide to this. So he's describing
[129:52.88] a bunch of like more or less, I guess there's styles and DOM updates, um, based on this. Um,
[130:01.04] because for the most part Phoenix is going to, or sort of live view is going to render on the server
[130:06.24] and send HTML partial diffs over to the client. But for this thing where the, with the optimistic update,
[130:13.04] you want the update to happen in the client immediately and not wait to go to the server.
[130:16.80] That's the whole reason it's optimistic. Um, there's a JS API that basically like describes,
[130:23.60] you know, pushing the event to delete I'm gathering and then hiding, um,
[130:30.08] you know, some kind of selector. Yeah. JS commands.
[130:33.60] And yeah, when I saw this, I had like a very violent reaction to it. You know,
[130:41.76] my reactions are never violent, but I was just like, man, jquery is back. Right. You know,
[130:47.36] like if I know it's better than that, but like when I, when I saw this, it's not, it's not quite the same
[130:59.04] as like what I was talking about putting your, uh, uh, like ERB templates and knockout on top of each
[131:06.24] other. It's more of like what happened before that stage. Right. And I actually had a good talk with
[131:11.60] Jose about this. Cause he was like, he's like, he called this declarative and I'm like, this isn't
[131:15.68] declarative. This is imperative instruction, instruction. You know, like it's you're, you're
[131:20.72] describing like push this event, hide the selector, blah, blah, blah. I'm like almost all front end
[131:30.80] perspectives. They'll want UI to be a function of state, which means that there's a decoupling.
[131:37.76] That's the declarative decoupling, right? Where essentially you say, and I understand in a sense
[131:44.40] that I'm calling out selectors here when really that state could be represented in
[131:49.36] CSS and like look declarative and not look like imperative steps. There is a way to do this with
[131:53.20] live view for simple cases that doesn't do it. But conceptually the biggest actual difference here
[132:00.64] has been actually that can, that you can decouple it. Like if you say this is optimistic, something
[132:09.92] over here can, you know, be affected. Like you can optimistically add something to the cart over here.
[132:15.20] Now you can do that with selectors, but the difference is in like front end declarative libraries,
[132:20.40] it's a matter of pushing state. And then that state branches out and impacts every piece that is impacted.
[132:27.60] it's not like, you know, go hide that thing over there and that thing over there.
[132:33.76] But the instruction secret is a built in single expression. Yeah. But, and that's part of the
[132:43.92] problem. Like what if you have this on different locations that perform the same, like this, like,
[132:54.16] you're it's, it's like putting all the, sometimes put, you put the logic in the event handler.
[132:58.96] Other times you don't put the logic into the event handler, you push it into the state and then the
[133:04.32] state will push out and make sure that the rest of the app stays in sync. That's why most modern
[133:09.36] front end frameworks are based on, um, state, right? It's a, you, you get guarantees. As long as the state
[133:17.04] is always reflected in the UI, you trust the framework.
[133:19.28] And it means you can update the state from multiple locations. It means that the combinatorics
[133:26.56] of this is not something you have to worry about. You don't have to worry about if something else is
[133:30.40] doing this and something else is doing this, the state will resolve itself. So like
[133:39.60] it got me thinking a bit about how hard it is to cross the wire, right? Because yeah, it's difficult
[133:46.88] to be declared in a UI equals a function state sense in these live view events, because I believe it
[133:51.04] would require going to the server to feed the state back in, which impacts the immediacy. So it's harder
[133:54.96] to scale with this approach. Yeah. So like what I was trying to get at is that like in live view,
[133:59.12] you do have state state lives on the server client doesn't have access to that state. So it's
[134:06.96] like, it's awkward, right? When, when live views acting in the client from a client first perspective,
[134:15.36] it doesn't have its same declarative nature in the same way that when a server framework is acting
[134:23.68] or client framework is acting on the server. Um, it doesn't have its own state, right? We, we don't
[134:28.96] serialize the whole state of the app. Every time we do a request, we, um, we just, you know, send what
[134:35.60] the server should do and then be like server, you know, tell us what's up. And usually it leads to like
[134:43.04] revalidation over fetching. We want to make sure like, okay, server could have been impacted from
[134:48.48] different users, different things. Let's just make sure we have the most up to date data for this whole
[134:54.56] category of things because you know, both sides basically lose their declarativeness when they
[135:00.64] cross the wire. I don't think any approach has perfectly shared the declarativeness on both sides,
[135:12.24] only put them next to each other. Like RSCs, for example, can work well when each side stays in their
[135:16.96] own lane, but how often is that actual case, right? What I mean by that is like, if you fetch data in your
[135:22.16] server components, your actions or mutations should also re-render the page. Like they
[135:26.80] should trigger the server components. It's very difficult to start data from a server component,
[135:31.76] feed it in, get it into like TAN stack query, and then have the mutations work on that data because
[135:37.12] like there could be data, that data could be being used in server portions that won't update with TAN stack,
[135:45.36] right? And at that point, every one of those points will eventually want to be client components.
[135:52.32] And then similarly, if you're fetching inside the, you keep everything TAN stack inside your client
[135:58.00] components, right? Then server doesn't have access to it. Like basically you have two very separate worlds
[136:02.64] sitting next to each other instead of being able to really seamlessly, um, have the same model. And I
[136:07.84] think it makes sense. I think it's very difficult about source of truth. Is it the server? Is it the
[136:12.64] client? You don't get to say it's both. Um, usually, usually you, you, you have to pick one if it's in
[136:20.48] in your realm of like decision-making and RSCs is like, uh, one side will say the server is one side
[136:26.32] will say the client is don't fight. Right. Um, which is one of the, I think part of the reason why it's kind
[136:32.72] of hard for people thinking of how they come from a client side perspective and get here, but
[136:37.84] I don't know, there might be solutions like abstracting the whole communication out from both sides.
[136:46.24] But just today is interesting to see like
[136:51.28] how hard it is to go to the other option, because what was really cool about his demo is when the
[136:59.76] updates came in, they were granular. Like he didn't have to fetch all the data. He knew that
[137:05.36] they could just send that specific thing that changed the optimum. So like, this is a DX problem
[137:11.92] more than it is a, uh, UX problem. It's also like, and in the sense, it's like, I don't believe the
[137:19.28] solution would scale as well as a client side framework, but that's literally what a client side
[137:23.36] framework's bread and butter is. And on the positive, he gets to send these slices.
[137:29.28] The, the serialization format of the actual communicate updates, when stuff actually settles
[137:34.64] is going to be way better than anything we can do client side. I mean, there's, there's a real cost
[137:39.52] here. You need a persistent backend, which is not like a freebie. The whole computer, like the whole
[137:47.12] web has moved away from persistence or at least separated stuff. Like even before serverless, um,
[137:53.68] you know, we were already doing microservices where we, you know, auto scale up a bunch of servers,
[137:59.04] scale them down. That's not something as easy to do when you have persistent state, um, persistent
[138:05.84] connections. Um, there's, there is a real thing why this isn't practical for everyone, but I have to admit
[138:12.00] when you have that ability, you know, there, um, this is a great simplification, um, for incredibly like a lot of cases
[138:22.00] things. So it makes it less often than the server and client have to fight over DOM state if the server
[138:39.52] sends a small diff. So yeah. Yeah. The problem is depending on the server to do that work every time,
[138:48.96] seems like a lot. Um, like I understand the web sockets, but like
[138:54.24] you're going to have a heart, like, well, uh, I, I agree that the communication format is incredibly
[139:05.28] powerful and stuff, which makes sense, you know, especially when you're doing large changes,
[139:09.76] like something that renders in the client is going to be snappier in the client. I don't, I don't like
[139:17.36] it, it, it, it just is like, there's no avoiding that. Right. Um, but like it, like, I really liked
[139:29.76] this because like, I could see the solution forming on this side and I was like, like this goes beyond
[139:37.36] what I've seen most server side. Like he's acknowledging that there's a gap here and coming up with something
[139:45.36] in a very difficult space on the other side. So this is a, you know, a, a decent, like pretty decent
[139:51.36] step forward from this side. Uh, you know, for the longest time client side frameworks could be just
[139:55.28] like, yeah, um, this extends that functionality considerably. So I thought this was really cool.
[140:02.08] Um, yeah. Cause these topics actually hold kind of run into each other, which I kind of like is
[140:09.36] he wasn't, he wasn't, he wasn't done though. He wrote a whole article about, um, remixes concurrent,
[140:18.32] um, submissions and saying they were fundamentally flawed. And
[140:22.56] it's an interesting read for those who haven't, I'm actually going to share this. This is probably even
[140:30.16] more interesting than some of the videos I knew this was coming out and it has
[140:38.24] a lot of interesting talks about like timelines. He's saying that, yes, in the case when everything
[140:45.12] runs in the order you submit it from the client, you know, things are good, but it gets more interesting
[140:51.84] when things process. I mean, even this is still fine, but when things start processing here where
[140:57.28] like there's different spacings and different gaps, uh, the truth of the matter is like
[141:05.84] in here, you can end up with the wrong states, potentially. The truth of the matter is I think
[141:12.96] a lot of frameworks client side actually work more like this. Like I'm not saying they don't do the
[141:17.04] revalidate call and only do in the last one, but they have like a race condition thing, like transitions
[141:22.88] built in. That means that the, even though they do the revalidation calls in the middle, depending on
[141:28.24] what state you're in, you determine whether they show the intermediate state or not. Um, so from that
[141:35.84] perspective, it's more like this than this, but this is still problematic. It's still possible that the
[141:43.44] check marks happen in a weird order. Um, right. And he goes on to talk about, uh, single flight mutations,
[141:53.68] right? Because they shorten the gap, which means that it's way more likely that these things can happen
[142:01.36] out of order because they're closer together, which again is true. But again, because of the client side
[142:13.36] syncing, uh, of the, of the transaction, it's more of like a, this case than it is like, uh, this case.
[142:23.44] And he, he basically said that the solutions, the problem is either do everything serially,
[142:32.08] which is like what next JS I think was doing originally. And everyone made fun of them because
[142:35.84] like they're doing the trial X demo and Ryan tried to move multiple cards and like it basically had to
[142:41.76] wait to do them serially. Or he's talking about having stateful servers, right? Um, he's saying
[142:50.16] that like with, uh, what was he saying here? It's on casual. I think there's a number two Phoenix
[142:56.64] live view is to keep open connection to client server with web sockets. This way events are received and
[143:00.88] processed in order, which guarantees the database reads all updated, delivered in order, but they can
[143:04.48] also easily process concurrently when using Elixir deemed safe to one potential caveat is, sorry,
[143:08.72] it was web sockets. Can you do long polling issue with long polling is back to each separate HTTP
[143:13.84] requests. You need sticky sessions, casual order therefore. Well, guess what? Something built into
[143:20.40] the Erlang VM process, lets him keep sticky sessions automatically. And he has a solution. That's, that's
[143:25.44] awesome for everyone else. Um, it's cool. Um, dev actually, uh, suggested something, which is,
[143:34.48] it's funny cause I read it and didn't really get what he said. And then I was like, how do I solve
[143:37.52] this problem? And then I started solving it and I'm like, wait, this is what they have said earlier.
[143:41.36] Um, uh, he, he basically describing replicash, um, which is the idea of basically, um, using the database
[143:51.12] as a mechanism of keeping, uh, concurrency in the client. This does feel like the only solution
[143:59.60] if this is something you care about. And I I've seen systems like, look at that, but I think
[144:05.84] while this is a great academic paper, as usual, we have to like, step back and stick it into, uh,
[144:13.52] cons into context.
[144:17.76] Right. And I actually am not sure anything in this article actually matters. I mean, it matters.
[144:28.72] It matters, but let me, let me, let me, let me, let me go here. Like
[144:40.64] even before considering optimist UI, the second you keep state in the client,
[144:44.24] there is more than one. And there's one more than one user. There's potential for tearing.
[144:47.84] It's fundamental. Okay. So we always have this problem from a client perspective,
[144:52.96] right? If you don't have like, I, I, he's saying that the premise here is that optimistic updates,
[144:59.12] like if you're the single soul actor, you should always see stuff consistent with your own UI. And I,
[145:03.28] I think from a user experience, uh, perspective, this is important, but what's interesting is
[145:11.84] we can have weird stuff happen. Like, even if you forget about the weird timings of the save of the,
[145:19.52] of the, you know, the one user doing three really quick things and having it getting all the sync,
[145:24.32] they can be doing everything perfectly and still have stuff jump in because the server happens to
[145:31.68] someone like added or deleted something they're working on the server in the middle of them doing
[145:34.96] this operation. It can completely happen even when everything's done perfectly in order without weird
[145:42.80] processing issues, simply because it's the nature of things like, and because client frameworks can't make
[145:52.56] assumptions about what database you use, even statefulness assumes too much. You can't assume
[145:58.56] that they have a persistent connection or they can have sticky sessions. They're probably never
[146:03.60] going to actually solve this. It's funny. Actually, I wrote this dev when he's like, you know, with
[146:07.84] unstorage and KV, we could just build this straight into solid start actions and it would just work this
[146:12.96] way and work perfectly. And I'm like, then you're telling everyone that they need a KV store. I mean,
[146:18.48] to be fair, I think next, maybe that ship's sailed. Next.js is already kind of forcing everyone along that,
[146:23.76] those lines, but like, okay. You know, like maybe build something like, yeah. I mean,
[146:35.12] I don't know. Like it's, it's not that it doesn't matter. It does matter. It's just like,
[146:43.52] let me explain what I'm getting there. What I mean by it. It's like,
[146:47.68] but my experience has been that while this sort of edge case is more common than I'd like to see,
[146:57.76] the vast majority of the time it is caused by bugs in correct code, rather than weird timing issues.
[147:01.68] They happen, but they've always happened. And yet we still have client apps.
[147:05.12] the reason is it's not that, sorry, it's not that the article doesn't matter that this whole thing
[147:11.92] was like one of the best bait and switches I've ever seen because
[147:14.80] the bugs on chat GPT have nothing to do with this.
[147:21.44] I'm almost going to get, he reproduced them too consistently. Like every time he clicked on it
[147:29.84] or did the thing, it broke. And like, I, I did go over this, I think a bit on last stream.
[147:39.28] Like I, we would talk more like, is it like, are the bugs, the framework's fault? Maybe we should
[147:45.52] take responsibility on it, but it's not this distributed stuff. That's actually causing the bugs.
[147:51.04] Like it wouldn't happen so consistently. It would happen those odd times. It's because my guess here is
[147:59.20] most end users would not be able to tell the difference between this sort of tearing caused
[148:07.12] from multiple users messing with stuff at the same time. And the kind of tearing that's caused from
[148:13.20] these optimistic updates getting in the race conditions. Now, don't get me wrong. When the optimistic updates
[148:19.76] have code bugs and it can be produced, um, consistently, then yes, you definitely
[148:28.56] notice and you go, this is weird. This is broken. But if it comes down to the situation where it's being
[148:35.28] caused because of these weird race conditions, I imagine that the average end user would not be able
[148:43.04] to tell the difference between the rare time that happens and the rare time that it's caused from
[148:47.84] just general tearing. Which means that like, I don't think most people will even like, like this even registers in,
[148:54.48] like most people's books as a thing you, you have to up, like with optimistic updates, it's way more likely
[149:05.44] that something like this could happen, right? You're actually encouraging patterns in which people are
[149:09.12] interacting with the UI in a more fluid way where they're sending more requests and doing stuff, um,
[149:14.32] you know, more rapidly, not waiting to press the save button, but it has to be quick enough to happen.
[149:21.04] to happen. And it has to happen in a way that like,
[149:24.64] the back end also ends up handling stuff in a, in, in like these out of order kind of situations.
[149:34.88] Right. Right. Shopping cart buy button or off point. I'm saying this happens all the time, even without
[149:45.04] considering this, uh, a better example than a shopping cart. Shopping carts only to you. Um,
[149:50.48] auction site like eBay, right. And pricing and bidding. Right.
[149:57.20] Right. Like, like there's always some amount of this kind of bug to turn the distributing nature.
[150:15.04] Like, I, I, yeah, I mean, if, if someone wants to put the safeguards in place, I think it is a,
[150:29.60] and if I'm dealing in commerce, I think it's a thing that I would really strongly, strongly consider.
[150:39.52] Yeah. If you don't have a server with a permanence connection telling every client what the state is
[150:47.36] and being able to be that single source of truth, this will happen in every framework to a certain
[150:52.40] degree. Like his, his article isn't in any way, like, I don't think it's incorrect. I mean, Ryan's
[150:59.44] making it sound like there's some like technical detail he's missing. I'm interested to see this.
[151:04.32] I mean, we can always reduce the impact of these things. Right. That's what we tend to do. Um,
[151:14.56] but like what I'm trying to get at is you watch that chat GPT video and you watch all the stuff
[151:28.16] that's going on. And I even said it before he wrote this article, it had nothing to do with these
[151:33.68] timing bugs. It has everything to do with that. It's maybe too difficult to write optimistic state.
[151:38.24] I mean, let's use solid start as an example. Solid start. Let's go to, uh, is there article or no,
[151:48.40] get started? I'm going to go to the GitHub and I'm going to look at the one of our examples. I'm going
[151:55.68] to look at the to do MVC example. I I'm just gonna pull it up for a minute. We did this last stream,
[152:02.00] but sometimes optimistic updates are difficult to write because figuring out the remaining count is
[152:10.80] both understanding the current count of the to do's. This is an easy one, adding the existing
[152:15.44] like the to do's filtering out the ones that are completed and the ones that are pending to be
[152:20.48] removed. Like any of these calculations that you end up doing, if you just get the, some of these
[152:26.64] states wrong or you miss some of them, like even a to do app shows like incredible amount of like
[152:33.04] calculations to figure out just like what the right count is or making sure thing. I actually released
[152:40.32] this demo and ended up fixing it multiple times before I was like, like actually was like, oh crap,
[152:44.56] I missed this or I missed this. Like it's really easy to opt, put some of the impact of optimistic
[152:50.88] updates in and miss some of the others. I was saying earlier that having the state feedback in is a
[152:55.84] blessing and it is because you get to write the logic in such a way that you understand that like
[153:01.36] these same updates, like toggling all tie into multiple, uh, it's not on that one, but like tying to
[153:09.52] multiple different calculations to update different parts of the UI. I think this is much better than
[153:15.84] basically like the, you know, imperatively going, you hide this, you do this, you do this, you do this,
[153:20.88] but you can still screw up this logic. Um, the thing is once you write the logic, it's quite beautiful.
[153:27.20] You can understand how all the drive state connects to each other understands the impact of the updates and it actually reads,
[153:33.52] it's fine. But it's easy to not see this at least removing stuff from lists.
[153:45.84] If you're projecting, you can remove multiple items in parallel. Yeah. I mean, deletion sometimes
[153:51.12] from an optimistic standpoint is the one that might be the least likely to get you in trouble because
[153:57.84] Oh, I guess, I guess, you know, with Jose's example, you can still have the server return the results with the stuff
[154:05.52] already like not deleted yet and have cleared the deleted, um, state.
[154:14.40] Yeah.
[154:27.12] So like, but yeah, I, what I'm getting at is the bugs in chat GPT are of this nature, like missing a condition.
[154:34.48] I'm almost like a hundred percent positive because like, like, if you look at the,
[154:40.08] sorry, it's on a private, but if you look at, um, sorry, where were we, if you look at like, like the way,
[154:50.00] just watch the original video. Like the, these are, these are things that happen like every time,
[154:55.92] either they weren't optimistic or they were partially optimistic or whatever they were bugs.
[155:00.56] Yes. Yes. Uh, you're saying that these are fully integrated. So adding KB. Yeah. That's what I meant
[155:10.88] by the client frameworks thing. The client frameworks just don't have the option to make those kinds of
[155:15.52] assumptions for you. They can't say that this is your solution. I mean, next is starting to, but then,
[155:21.28] you know, now we only come out of the box for Vercel, you know, the first few weeks until others
[155:27.28] catch up. I mean, there's two solutions to that problem. Work with all your partners to make sure
[155:33.52] they can support all your features at release time. But I mean, maybe that's counterintuitive for a
[155:37.84] business that uses next as a funnel. Um, or just be like, we are the Vercel framework and own it, you
[155:46.96] know, like, I don't know. Like it's, it's natural that you are going to, if you want to have capabilities
[155:57.36] like this, use infrastructure pieces you can take for granted, like you can in Phoenix or live view
[156:01.60] or rails or whatever.
[156:04.88] So, yeah, I mean, we'll see what Ryan Florence and Jose have to say about this. I think it's,
[156:11.76] it's, it's real. I mean, I've, I've implemented systems before where, you know, I've had to like
[156:21.44] check order and it's a, it's a difficult problem. I'm just saying it's also kind of completely out of
[156:26.72] the scope of client frameworks. Like in a sense, having a client framework doesn't stop you from,
[156:32.96] you know, having a backend with sessions, his gripe should be more with, in a sense, serverless
[156:39.44] than it is say with remix. Like the problem is with the way we approach infrastructure less than the
[156:47.60] specific client side tool because it's really outside of their responsibility.
[156:52.00] Anyway, I thought it was interesting conversation regardless. Um, and it's really ties into, to this.
[157:11.60] I wanted to show off this demo because we remade the, the, the, the, the Trellix demo ourselves.
[157:18.56] And so I'll start, unfortunately, um, or fortunately, depending on how you look at it, I guess.
[157:24.40] Um, uh, um, let me just put my secret credentials in, not that it really matters.
[157:34.40] Um, we did not get the Ryan Florence review. I think we were several months too late.
[157:44.80] And if you want to understand why we were several months too late, it's a, it's a combination of things.
[157:50.56] Um, Right at the time when the demo was originally being made,
[158:02.32] we had solid start and we, people, bunch of people around our community were like, let's build this thing.
[158:08.96] We were positive. We could do better than the remix demo. Of course. Like that's,
[158:13.84] that's, that's, that's what, that's what we do around here. Right. We make really cool demos.
[158:19.60] Um, and a couple of different kinds of groups started. There's the DX team,
[158:25.28] people like Attila and Daniel working together. And then, um, they, so they started doing a thing,
[158:30.72] but completely separately, um, Benton, uh, was like, I'm going to build this in solid. And I was like,
[158:35.84] reached out and I was like, yeah, that's really cool. And they, they had some like challenges at first,
[158:42.72] but actually came up with a solution that I helped debug a little bit, but it was basically what I would have come up with
[158:48.64] compared to what the others are doing, which was much more like react. Um, because when I see a demo
[158:54.80] like this, I immediately think what is special about solid solution that can make this, you know,
[159:03.36] really powerful. And we talked about this demo actually indirectly on stream for several, um,
[159:10.80] of the last months because I realized through this demo, looking at Benton's code, how much work it was
[159:20.00] to make it even more optimal and solid today. What ended up happening was, um,
[159:26.16] um, what, what ended up happening was that, um, the, the group, we managed to get both of the groups
[159:37.76] together, right? So Benton joined up with Attila and Daniel and, uh, Brenly and they, they, they,
[159:44.32] they, and they started their effort. And at a certain point, I don't know if spider by the stream, uh, dev also
[159:50.00] joined in and actually re implemented solid 2.0 features back in to this demo to make it as optimal
[159:59.60] as I would hope it would be. And by the time, like this all happened, it was just months later.
[160:06.16] Because when I looked at the original demo, I'm like, we could publish this, but like,
[160:09.92] if anyone looked at the code, you know, they might like turn their nose up at it a little bit or
[160:14.88] something. I, I don't know. I care about what the authoring experience is and what it feels like to
[160:18.56] look at the code. And it wasn't up to, you know, where I wanted it to be. Um, so we kind of delayed it.
[160:25.44] So at this point, I don't even know if Ryan Florence is ever, um, going to look at it. It's perfectly fine
[160:31.76] if he doesn't, we've talked about this demo enough and honestly, he might have to change his scale.
[160:36.88] I don't know if he'd have to add an S tier maybe, but like, um, this demo goes well beyond what is
[160:44.24] even possible in react. Um, so it seems like a good topic to talk about for a few minutes here.
[160:49.76] Um, cause while the authoring isn't quite what it's going to be in 2.0, this kind of example is going
[161:01.68] to basically be super trivial to do with the future reactive system we're working on,
[161:06.80] which makes you really, really, really happy. Um, the first piece obviously, um, which is related
[161:14.96] to the last topic we were talking about, were those single flight mutations. You know what I mean? Like,
[161:19.60] uh, if we go in the network tab, if I go into a board, uh, this board has a lot more cards on it than it used to.
[161:31.36] If I drag this over, you're going to only see one request and you're like, okay, well, I mean,
[161:38.56] it's not too crazy to think that you could, you know, do a mutation and send back the response,
[161:44.96] you know, the update in one go. The part that's crazy about this or crazier about this, let me see
[161:50.80] if I can pull up the GitHub is, is what the authoring is like to do this. Um, we've talked about data
[161:57.68] fetching with solid start previously before, but sorry, what am I doing? I'm not going to solid start.
[162:02.88] I'm going into, let's just globally search with strello. Um, I guess I have the code locally too, don't I?
[162:12.32] Yeah. Why am I, why am I going to GitHub? I have the code locally.
[162:22.16] It's that, yeah, let's full screen this one. It's that like, um, let's go to the routes, go to the
[162:33.76] board. Okay. Lovely. I love when like TypeScript gets behind. It's probably, you know what it is?
[162:40.80] It's probably cause I haven't installed it. This is, this is my problem on the, I'm still on the new
[162:45.68] computer, right? Let's get this going. Yeah. I haven't installed anything, but what I'm getting at is
[162:52.88] what's cool about this approach is that it uses the familiar can stack or remix style thing where,
[163:02.72] okay, we're defining an action here, but let's forget about the action for a second. Fetch board, right?
[163:07.12] We're going, this is, this is our server function. If I go over to, I think it's the lib here
[163:12.88] index and find myself fetch board, you're going to see a server function set up with a cache, right?
[163:22.16] So this is going to have like a cache key, get board data, sure, whatever. And then somewhere else,
[163:28.64] we're going to perform an action on that board. Um, I don't, I guess I should see where the actions are
[163:34.72] coming from. Um, no, these, this looks like off stuff. Let's see where the actions come
[163:42.40] from, from the board there to do, to do, to do create store use submission. Yeah. Create note.
[163:50.80] Where is this coming from? Note. Okay. Let's put the actions in here. It doesn't matter. What I'm
[163:59.44] getting at is you'll see something like this, like an action. And then that action will know that it
[164:06.88] imports fetch board and says revalidate the board basically like the thing with that key. So, um,
[164:14.32] you could also put a string in here or whatever, but essentially you can get from the cache function,
[164:18.00] you can just grab the key or the key for a specific set of arguments, um, for specific ID or something.
[164:24.08] And you can just tell it to revalidate, um, that. So when you're writing your server function APIs,
[164:30.80] you know, essentially you can basically just like connect the keys, so to speak, um, and make all your
[164:38.16] logic. Like every time I, you know, whatever this is, create a note. I know that we have to do
[164:45.68] revalidation, um, on the board and you can wire this together, you know, and essentially when you
[164:52.16] get to the board itself, you just get, you know, this ability to fetch the board, you know, preload
[164:59.92] it if you want, but fetch the board here in our create async. And then in the board component here,
[165:05.92] take our actions and actually, um, use them, uh, both grabbing the submissions for the optimistic updates
[165:17.04] and, uh, I don't know where to do the see where, cause I actually haven't like, like in the column,
[165:35.60] it's probably in here, rename column. So it's, oh, is it actually in the note itself?
[165:42.00] Yeah. Yeah. It's down here. You can actually, you know, let's, let's up, what's going restart type. Do I
[165:50.40] so that the red squigglies did start bugging me after a while. Okay. Um, what I'm getting at is how,
[166:00.88] how are they doing the actions here? I don't even looked, let's, let's look at them. Are we using the actions
[166:05.28] uh, strictly in forums or we get, we're, we're calling them update action. Okay. So we're just
[166:11.76] calling in our note. We're actually essentially importing our same action functions, doing them
[166:20.24] on specific actions. And then in the board, like the top of the thing that renders the board above it,
[166:26.96] we're actually taking the same reference to the actions and feeding them back in through, um, optimistic
[166:33.44] updates, what these submissions are. So you can already see this kind of, um, using the import
[166:38.40] reference as basically almost like a key. We're essentially isolating or sorry, we're like, yeah,
[166:45.92] isolating the actions from the optimistic updates. They're in different components and you can see,
[166:50.80] you can just set all the logic to kind of wire itself together. Um, and then feed these optimistic
[166:56.64] updates back in and, okay. Like what I'm trying to get at here is this is a very typical, like,
[167:07.52] you know, you can see it in, in these actions. It's a very typical, like,
[167:12.16] do, do the mutation, revalidate the key kind of tan stack thing. So this is set up
[167:22.32] without telling it to return specific data, you know, without telling it to like go, you know,
[167:30.16] when you do delete or do, when you do an ad, add, send back just the thing you add and no client side
[167:35.76] logic about how to insert it into a cache going, okay, you added on the server. Now add this, or this
[167:41.60] one's been deleted. Now you delete it. None of that logic is written. You just, you just do revalidate
[167:48.00] like you do with tan stack. It's, or remix. And, but it's happening in a single flight because what
[167:56.00] we're doing here is when the server action completes because of our, uh, serialization, which I covered
[168:04.08] last time, um, we have this ability, right. To, um, send back the, the, um, the board data. And it's because
[168:17.04] when we revalid it, we, we immediately send back, start sending back the, uh, response,
[168:22.80] but we basically grab the promises of the data and we stream it. We actually start rent, essentially
[168:28.16] start rendering the next page. We go, Oh, we're reloading the data on this page or reloading the,
[168:33.52] you know, with, and the key, we just run all the preload functions on the server instead of running
[168:38.56] them on the client for the route. And then essentially collect all the promises that match the key that's
[168:44.80] getting updated and then send those promises along. And we don't have to wait for that data to come
[168:53.52] again, not blocking to basically get the client, the knowledge that, Hey, stuff's happening.
[169:00.32] And that way we don't have to, we start fetching when we're on the server at that point. And we don't
[169:06.32] have to wait for the client to come back and do the jump. I've explained this on stream multiple times
[169:10.00] before. I just wanted to show it in a, yet another example. Um, so, you know, this is, this is all cool.
[169:19.20] If I turn this down to, where is it? Uh, can we throttle? Um, why am I not seeing it here? No throttling.
[169:31.76] If we make this slow three G what we should be able to see is that if I can move these fast enough,
[169:37.92] there's going to be multiple in flight at the same time. Now don't let this fool you. They'll come in
[169:42.72] in different orders and they look like they come in sequential. When the actual client will apply the,
[169:48.16] the server results will be, if there's multiple in flight, it will actually wait for them to consolidate.
[169:53.36] Um, because they wrapped in a transaction, it's not the time that they show in the network tab necessarily,
[170:00.96] but it doesn't matter because the optimistic updates are already ahead of it. So when these
[170:05.84] actually reconcile on the client is, doesn't really matter for the end user because these things have
[170:10.80] already moved, you know, uh, you know, from their perspective.
[170:15.52] Oh, hey, Daniel. Thanks for stopping by. Yeah, no. Um, good luck with the talk.
[170:24.00] So like,
[170:29.36] okay. Optimistic updates. Pretty cool. And I, I, as I said, I, I've, I've, I've covered this bit,
[170:40.32] um, in that video that I did, but what I wanted to like take a little bit more time looking at here
[170:48.40] is, is that is how this actually mechanically handles the, um, the mutation. Cause as I said,
[170:57.68] the live view example that, uh, was really cool, um, because it actually sent only the diff data. And if
[171:03.60] you look at, this is not what we're doing. We're actually sending the whole freaking board on each of
[171:08.00] these, um, updates, right. It's like remix, right? We don't have to send all the data for the page,
[171:12.64] but we, you know, if the board is one data set, one key, like tan stack, every time we, we, you know,
[171:20.08] are ready to, you know, say, Hey, revalidate, we're going to grab the whole freaking board. So
[171:27.04] yeah, there's, there's more bandwidth here. This is not as optimal, even though this halves the latency.
[171:35.36] Um, this hasn't got us to live view per se, you know, in terms of the optimal communication
[171:40.16] patterns, right? Like, um, this is just remix or tan stack done in one request instead of two requests.
[171:48.40] So yeah, there is bandwidth consideration, but the client side part of this, I mean, here's the thing. If
[171:59.20] you're using those tools anyways, you're doing these kinds of things, like we got here for a reason. The fact that we are
[172:05.92] fairly okay with revalidating based on key comes from a lot of reasons, right? It comes because like
[172:13.52] server changes, right? And we want to make sure that we don't have tearing. We have to trust that, you know,
[172:19.76] at a certain point we should update the, even though we own the state in the client, we should update our data. We can't just
[172:25.20] get too far apart. You know, if we only pass back the incremental changes when the client's the truth.
[172:31.52] Well, we could get in a very different state than the actual reality of the database, because we know
[172:40.88] that we added one card. The server knows that someone else, um, deleted two other cards,
[172:46.72] but we, that was never communicated to us. And then maybe, you know, we'd delete that card that they
[172:53.68] deleted. Like it's not hard to picture a scenario where if the client never synchronizes, um,
[173:01.60] and that requires fetching data that we don't know has changed, um, that we get out of state. Uh, which
[173:08.96] is largely why most client frameworks with a lot of revalidation and whatnot, they don't want to fetch the
[173:13.76] whole world, but within the scope of the work that they're doing, they're okay fetching, you know,
[173:18.16] a specific key or a specific thing on the area that they're working on. I mean, it's, it's back in the
[173:23.12] day, you do a full page reload. So is it like, this is a win from there. I think that was remixes like
[173:28.48] logic behind this. And we get even more granular with, you know, specific keys.
[173:37.20] Is everyone still alive out there? Sorry. You guys have been really quiet in the chat the last
[173:40.64] like 10, 15, just, just, just making sure everyone's still, still out there.
[173:45.20] Have I, have I, have I gone too off the deep end here? You guys seen enough of this demo?
[173:56.48] No, you did die. Dead inside.
[174:01.92] Well, yeah. And it's not our business is the best way to do it. So, but I do care about it,
[174:15.12] which is why a lot of the same primitives that I've been designing in solid 2.0 that are going to enable
[174:21.20] the next thing that I'm showing are going to make it so that if the database will give us
[174:25.36] the right information, we'll be able to do even better things with it.
[174:27.92] Right.
[174:33.68] I don't get mechanically adjective. I use that when I'm talking about things that we do specifically
[174:50.08] for like how they work, but not how they, yeah, I don't know how they look or how
[175:01.68] like their philosophy or reason for being just like purely looking at like the nuts and bolts.
[175:13.68] um, so, uh, what, what I wanted to show about this board, it uses a really interesting approach
[175:22.72] in that we already saw the optimistic stuff getting pushed back in, but what does it do with that?
[175:28.00] Well, this is not unlike remix. You get all your optimistic updates. I don't know what they call it,
[175:33.12] but it's similar, similar to this. And then, um,
[175:40.08] you, what you do, we use a single function and we actually grab all of these as these,
[175:46.96] you know, mutations come in. We basically append them to a list because you have to understand the
[175:51.76] mutations have to apply in order. If you apply mutations out of order, like reorder, like moving
[176:00.48] stuff from the list, you can see how it could get weird because like if you move this above this second to
[176:07.84] zero and second to zero again, and then one zero to five, that actually, what's going on here?
[176:14.80] Sometimes, sometimes I miss the, my biggest problem with this demo is sometimes I miss the drag zone.
[176:19.36] Yeah, I did it again. Why do I always miss the drag zone? Um, you can tell because it's not even a request
[176:26.16] goes out. Um, if you do those and then try and apply them out of order, um, stuff is going to get weird
[176:35.68] because the thing that was in zero, isn't the thing that was like, there's a whole sequence of events.
[176:39.68] So essentially the mutations have timestamps and they have to be ordered, right? So you collect them.
[176:44.72] So collect them, these mutations, and then
[176:54.72] essentially you use them to create the board, right? So if this was react, you'd collect all those
[177:03.12] mutations. Now, anytime the board updated from the server or a new mutation was added, you would
[177:10.00] take the board, clone it, go through the list of the mutations and make that the current state.
[177:18.16] You have the, you basically, you have the base state, which is the board and you have the mutations,
[177:23.44] create the new state, render it. React will do the diff during rent, like during its patching. And you'll see,
[177:30.24] you know, the changes apply. And if you add one more mutation again,
[177:34.72] you know, you're re-rendering the components. So you're going to take the board because it's derived,
[177:42.56] get all the mutations,
[177:44.40] clone the board, apply them all again, pass them in, render them to JSX, diff them, do it again.
[177:55.28] So, and now the board comes back, same thing, clone the board, make sure that any existing
[178:03.76] mutations that haven't been processed yet, make them apply to the board, render the JSX, diff the board.
[178:11.44] You just do this over and over and over again. Every process, every time you move a card, change a name,
[178:20.40] do this, you recreate the, clone the board, um, apply all the mutations, render the whole thing in JSX,
[178:30.08] diff the whole thing again. So, we thought, we talked a little bit about this stream, but it's like,
[178:38.88] our first approach to this was actually very similar to React, which was essentially,
[178:42.64] what if we just, you know,
[178:45.84] you know, every time, listen to the board, apply the mutations, do this. It's, it's actually not
[178:54.08] unlike this, um, function. I think the biggest difference with this function is the, is the idea
[179:01.20] of timestamp, which is something that we haven't, uh, which we haven't, which we haven't looked at here.
[179:09.44] But the general idea would be again, you know, get the board, apply the mutations, diff it.
[179:17.92] But this, uh, what they did here, which I'm actually not seeing exactly how it's working
[179:22.32] in the second there, the, I realized that, and I'd show this on stream with the, with one of the
[179:28.48] things I was working with, uh, with the create projection. Um, if you knew the only time you
[179:34.80] actually need the diff in this example is when the new board comes from the server. Because at that point,
[179:39.60] you don't know what state things are in. You just have the like fresh data from the server,
[179:43.68] that big chunk of JSON you're going to need, like stop. Maybe the server added something that
[179:48.16] wasn't used to users on the site. You need to do a diff at that point, right? You, and maybe you,
[179:54.48] you know, your mutations are applied. That's the only time you need to do the diff. So what they did is
[180:00.00] using the timestamp when the board, only when the board itself updates does see, see how it un-tracks.
[180:07.20] um, yeah, see it un-tracks get mutations. So when the mutations update, this doesn't run only when the
[180:15.04] board updates, right? And then on this side, on the effect side, a second effect, this one gets the
[180:24.88] mutations and this one does, see reconciles how solid stores do diffs. It does a data diff and then
[180:30.24] basically wherever it finds differences, it notifies individual signals. So like if the whole notes you
[180:37.20] get from the server is identical to the notes you have, nothing gets notified and updates. If from the
[180:42.64] server, one of the text of the name change, then notes dot, you know, notes, zero dot, you know, text or
[180:53.12] whatever, whatever listens to that one thing, that one cell is going to update the text. You, you compare
[180:59.60] the data, but you don't re-render any of the components or do anything, right? So in a sense,
[181:04.16] this was already like the basic example is already an improvement over the way React would approach it.
[181:08.88] But this idea here of untracking the mutations so that it, the mutations update a separate effect
[181:16.96] that's different than the, um, one that does the diffing. You'll see down here, the second effect
[181:23.44] does no diffing. It calls produce when it applies to mutations, which means, and it does this timestamp
[181:29.60] filter. Basically it's only each new mutation as each mutation gets added. And maybe a couple of them
[181:37.52] get added before this effect runs like quickly or something. It'd be pretty hard to pull that off.
[181:42.40] It only grabs that one. It doesn't care about all the other mutations in flight. It just grabs the
[181:46.80] latest mutations since the last time this effect ran. And once it has only that one,
[181:53.92] it will apply it, which means use produce on the store. It means that when you actually update the
[181:59.76] thing, it's actually just updating the one signal signal. So what this means is instead of cloning the
[182:05.84] board, cloning or applying every mutation, sending it down to the render, diff the thing only change it
[182:14.48] updates. What this does, it goes, okay, get me the mutation, the new one. Oh, I see that it updates
[182:22.16] one text. So update the one signal, update the one signal in the DOM. Nothing else runs. So the mutation
[182:29.12] in a sense is as optimal as if you were doing client side, like this is the optimistic update. Like if you
[182:34.64] wrote this with no optimistic updates, with no, like you're just writing a client app that you didn't care to persist. If you
[182:41.76] were going here and you were going to just do to do to change the name on this card, um,
[182:47.44] what would happen is, you know, in solid, you just update the signal for this one thing. And this one thing would update and
[182:55.44] nothing else would re-render nothing else would run. You just update its pinpoint. What's cool is that
[183:01.76] with this example is the optimistic part is like client app because it's just like state being fed back in.
[183:08.08] It's it's it's this is probably the biggest benefit of the remix optimistic approach because it's like
[183:12.64] these things are just
[183:15.84] state. We know how to deal with state.
[183:21.52] And the real icing on the cake is that, yeah, we go, we send the optimistic update, which means we
[183:29.12] immediately update the DOM, update the one texting and we go to the server and say, hey, this has changed.
[183:33.92] Now, if the server returns the exact same data that we have, you know, it applies the optimistic update,
[183:39.12] adds a new name. When we go back and let's say that was the only mutation. So it does nothing here.
[183:45.84] You'll get the board, which is a create async. We've looked at the fetch board. You'll re-trigger,
[183:51.76] just get the data and then it'll go, okay, let's diff the updated board against the board that's there.
[183:58.16] And that board that's there has the optimistic updates because unlike when you derive stuff like
[184:04.40] directly and you like doing this mutation and cloning approach, your projection here of the board
[184:11.84] contains the current state of the application. Like the trade-off with mutable APIs is that you
[184:18.24] can't get the previous state. You have no way of just like starting over. It's hard to reset. You
[184:22.80] actually have to diff to reset, but because you have the board as it is, you know, like client side,
[184:31.84] like my state shows that this name has already been updated optimistically. When the server comes in
[184:36.96] and goes, Oh, here's, here's the fresh data again. And guess what? The name is updated. It sees the
[184:44.24] updated name already and goes, okay, those are the same. I don't need to do anything. Nothing else
[184:48.40] updates. It literally gets here. It goes, okay, here's the latest diff. Oh, it's exactly the same.
[184:52.88] Done. No rendering. So in the process of this whole interaction, the client signal updated a text node.
[185:03.68] None of your components re-ran and we had full optimistic UI essentially like, like the, I feel
[185:14.56] like I'm way more excited about this than anyone else. It just, this is going to be easy to write in the
[185:18.88] future. Instead of doing two effects, you'll be able to just write a single primitive that does this.
[185:25.20] But like essentially from the client side perspective, it doesn't get any more optimal than this.
[185:37.36] And I see a certain parallel of this with the live view because the live view, they got the save sending
[185:48.56] the data because they know the state and they know what they diffed on the client, but live view doesn't
[185:53.76] know this, like the state of the optimistic. Yeah. It's, it's really interesting. Do you know what I mean?
[185:59.12] Like, yeah, I actually a little bit curious how they handle that. Maybe I'll bug Jose because technically
[186:11.68] they're optimistic client side approach, um, is independent of the state of the server where
[186:17.04] like the server comes back with the diff, but the optimistic update is still applying via the JS commands.
[186:24.08] And then it goes, okay, I'm going to stop.
[186:26.64] Hmm. Yeah. It's interesting.
[186:39.84] I mean, how it's not necessary. You could just like skip this whole mechanism and literally just,
[186:46.16] um, send that stuff. But as I said, over time, you would drift apart. Like if you built, like,
[186:53.44] it's kind of crazy when you see this and that's, that's what you think. You're like, okay, now that
[186:57.04] I've literally optimized every other part of this, can we just not send the whole payload? And it's like,
[187:01.92] that's could have been your starting point, right? Like you could have just been like, okay,
[187:05.28] I'm not going to do, I'm not going to do this. I'm not going to, uh,
[187:09.76] I'm not going to use like a loader action pattern. I'm just going to make an API where I, you know,
[187:17.28] when I add something, the client, you basically have to tell the client how to reapply the changes that
[187:24.32] you did on the server. It's like the old GraphQL pagination problem, right? You basically go, okay,
[187:29.04] now that I've got the data back, now I'm going to repeat the action in the client or do it. Like
[187:34.48] it's completely possible to do said thing. The difference here is that the, we managed to add
[187:41.36] this capability here without changing the DX. Like it's, it's the revalidate thing. I mean, yes,
[187:49.52] you could not, you could choose not to refetch the whole board every time, but funnily enough,
[187:57.28] you could, you could also choose to save the board at certain intervals or whatever. Right.
[188:03.68] I was just kind of like, funnily enough. Um, I think this is almost where we end up these days in
[188:13.12] these kinds of situations where, um, we, we, we do, we do do this. I mean, it's possible that like,
[188:20.56] this might even be just the extreme case for this kind of scenario. Like when I think about the optimistic
[188:25.76] updates and these features, making a fully sustainable trial explored is not what I'm
[188:31.12] usually thinking. I, I feel like for something like that, um, like especially if it's multi-user,
[188:38.00] yeah, web sockets do make sense, right? Like if you're a multi-party multiplayer, it's just interesting
[188:43.92] that you can basically take this paradigm that already exists, that people are already doing and
[188:51.84] just make it that much more optimal.
[188:58.24] Just refresh the page. Right. I mean, when I looked at this demo the first time, I was like,
[189:07.52] wouldn't it be interesting? Like, I don't know how well it could work, but we did this the easy way,
[189:11.68] because it's like what we react when we mix it, but could each column, like there's no rule to say
[189:18.32] that the whole board has to be the single thing you fetch, right? Like what if like, it's a little bit
[189:26.72] trickier from, uh, yeah. How would you wire it that way? But could each column be its own key,
[189:35.68] so to speak. And then you could invalidate like nesting is interesting, right? Cause you,
[189:40.48] if you get the board and then you're like, yeah, I don't know. I I've, I've, I've thought about this
[189:46.00] a few times that if it would be quite possible to encode information about like, when I first saw the
[189:50.88] demo, I thought maybe this is what they were doing. Um, like saying like, like have actions that are like
[189:56.16] move between column one and column two. Like another similar demo could be instead of having one board,
[190:01.52] having like, like the fact that the, the columns are dynamic makes this a little bit trickier.
[190:07.68] Um, but like, if you had a situation where you had three fixed columns, it's just easier to talk
[190:13.84] about. I don't say they have to be fixed. You could picture that you could fetch all three columns. Um,
[190:19.52] and then only invalidate a single column and then have drag and drop between the different columns,
[190:24.00] trigger actions that revalidate only the specific columns. Do you know what I mean? Like you could be
[190:28.96] like, okay, when I moved this to here, I have to revalidate this column in this column,
[190:33.12] right? Like the key base system can go more granular. It just comes down to like what the
[190:41.28] logical separation is. Like, don't get me wrong. Like if, as I said, if you're getting to something
[190:46.16] that's like really on the extreme of this, um, it's probably beyond the scope of the specific feature.
[190:54.16] Like it, you know, the same way when you look at remix and you're like, this is really good for crud,
[190:58.80] like amazingly good for crud. And then you're like, okay, I want to do something a little bit more
[191:02.00] interactive. Remix can get you there. But at a certain point, you're just like, maybe not quite
[191:06.96] the optimized for that zone. I feel like this, this gets you all the way up to
[191:17.36] like using tan stack table or something like that's like, or, uh, you know, rest of soul,
[191:23.44] ag grid, like this, this is what gets you, you know, to, to a certain point where you have to like,
[191:31.20] you're like the, the app is the table. Like this is about, I think this is towards the end of the
[191:36.80] spectrum of like doing page level invalidation. You have to do this if you, you, you could,
[191:49.76] but I mean, you're still fetching the whole table. I mean, it was more of like, if we could separate
[191:54.88] the keys, right. But yeah, anyway, uh, it's, as I said, this, I, I quite enjoyed realizing that in
[192:14.16] the end that, you know, in my, I, I, I wonder, I never thought about doing this. Maybe we should look
[192:21.20] okay. Okay. Forget about the network. I kind of, how much, I mean, I don't know, but how much, um,
[192:29.44] performance, like how expensive is it to move a card? Did that move? I don't, I don't know. It's just,
[192:47.92] yeah. The problem is I'm not, it's always hard when you're not in it, but then I have to log in again.
[192:52.16] Uh, not in the, like an incognito thing. I don't try this again.
[193:11.44] Like, I, I, I was just kind of curious if we could like see where the work was getting done.
[193:18.80] Actually, a better example would be maybe renaming the card. Like if I change this to GGGG, click out.
[193:25.68] Cause like so little work has to happen to, to actually like update. And then when it comes back in,
[193:41.44] like, like it doesn't even need to, I mean, it's hard when it's minified, depending, like it doesn't
[193:49.28] need to run the DOM. Like there's like, yeah, I can't really show it well. Like, yeah. I mean,
[193:56.96] this shows it well, 0.4 milliseconds processing. Like, yeah, I don't know. It's
[194:03.60] yeah. It might be fun to compare that to doing this in like remix or react,
[194:14.64] but I don't have that in front of me. So whatever.
[194:22.72] All right. Yeah. This, I, this is the problem. I feel like sometimes, uh, some of the topics that I,
[194:34.16] I care about these days, like stuff like this demo and solid 2.0 and even the metadata stuff
[194:39.28] is almost getting too far away from like developers day to day concerns. So like,
[194:46.08] it's just not as exciting. Like sometimes like when people nerd out on performance,
[194:51.36] this isn't even performance, this is like the getting matching optimal DX with optimal UX,
[194:58.48] but it's getting to a point where people are like, I don't care. I just build the thing and
[195:01.76] I hope it works. I don't know. I feel like, I feel like when like edge streaming was a thing
[195:07.76] in the first like demos we did, people got like really excited about that. This in a lot of ways is
[195:16.24] as cool, but I don't think, I don't, I don't think that, uh, I don't think quite kits in the same way.
[195:21.36] Anyway, as I said, I don't imagine we'll get a Ryan Florence review. Um, but I don't think there's
[195:31.12] a Trello demo out there like this.
[195:34.08] Is this your mission? What's my mission? The thing is making good demos. I talked about this
[195:47.84] before that it's hard to find demos that show off features and show off stuff. Making good demos is
[195:52.48] still important for us because people need to conceptually understand what we're offering and
[195:58.00] that it is unique. I mean, that's what all framework authors are after, right? There's always a way
[196:08.80] of making better, um, UX, you can always like escape out, go vanilla, do whatever you need to do. But
[196:17.84] but like
[196:23.36] you, you want it to be in a way that it feels natural, that it feels consistent. It's not
[196:36.08] like, that's what I call people's idea of what the best DX is differs, right? So it's, it's, it's hard
[196:41.44] to say, say that, but like, if you show someone that something and they go like, I can do that
[196:46.64] and they understand like what it's doing, how powerful that is, then like, it's, it's a pretty
[196:56.88] powerful feeling. You feel like you can pick it up and take that anywhere.
[197:06.08] Yeah. What did Dev have to say? I said, he did a lot of the heavy lifting for the last version that
[197:17.20] we were showing off. I mean, everyone chipped in and bug fixed. That's the hardest thing. You,
[197:20.88] I told you optimistic KPIs sometimes requires, um, some bug fixes, especially as you're figuring out
[197:25.92] patterns. I think that is still a place that we need to do a lot better with. But, um, what do you say?
[197:30.32] This demo shows one of my favorite aspects of Solid that mostly enigmatic and composal code can also be
[197:34.00] most performant. I get React is fast enough, but it doesn't have high ceiling for performance in UX.
[197:38.72] Every abstraction framework library built on top of React will be held to React's limitations
[197:42.48] and have to do a lot more work than they actually need to. Trying to optimize for performance will
[197:46.00] always feel like battling a charging bull. Meanwhile, Solid makes its primitives unimaginably
[197:50.16] performance. So regardless of what I do with it, I always have the highest possible ceiling for my app.
[197:54.64] It makes bringing custom abstractions as easy as using native primitives and almost completely
[197:59.04] in it eliminates having to think about performance as long as you're writing idiomatic code.
[198:02.56] Yeah. Yeah. Like that's, that's the goal. The thing is it's a sliding scale. Everyone has a fast
[198:11.60] enough. You'll, you'll find somebody in the discord. I'm sure who's has like a super fast thing that they
[198:17.68] put together. And so we'll do that specific thing a little bit slower and you know, we'll be like fast enough.
[198:23.20] Like I, I can appreciate React taking a fast enough stance. It is tricky though, when you have the
[198:30.32] largest ecosystem, JavaScript and that gap feels like it's just getting bigger and bigger and bigger.
[198:35.52] Right. So very, very cool dev. Um,
[198:46.08] I think we're almost ready to shift gears. I saw something earlier here that, where was it?
[198:57.84] One more thing before we move. Yeah. Another dev comment.
[199:12.56] Let's start here with what Mike Pearson said. Technically this is sort of this week in JavaScript,
[199:17.20] but I'm going to officially start this week in JavaScript after this last comment. Okay.
[199:20.32] Web development will move to reactivity. One amazing tool at a time. More angular devs should
[199:25.12] give react a try. A hundred percent agree. Angular is headed in a much better direction than react is,
[199:31.04] in my opinion. Okay. But that's partly because they are taking inspiration from other frameworks.
[199:36.80] That is true as well. The vast majority of garbage code in web apps is large
[199:41.12] components whose parts are tied together with imperative code. Okay. For, I could see from
[199:48.08] reactivity, not like that would be the perspective. React gets two most important things more right than
[199:53.60] any other framework. Frictionless component creation. Yep. Section of code can be split into child
[200:01.44] components almost as easily as thinking about it. Yep. Minimal declarative derived state.
[200:10.40] Yep. Sequence lead drive state can be expressed as if JavaScript were a reactive language. Yep.
[200:21.52] These are amazing examples, but sharing state or splitting skate or scaling state or anything else
[200:27.20] to deal with state and maintaining performance long are all painful in React. But React developers
[200:31.44] are aware of these pains because they see clear examples of how nice code can be. The contrast between
[200:36.88] painless simple code and painless complex code is very high. This is great. The simple code ingrades a
[200:42.56] mindset for small composable pieces of code and for declarative derived state, which prepares them for the
[200:47.44] next level of reactivity. This part of why react query grew so quickly. It allowed react devs to code simple
[200:53.12] async in the same way as they've been coding simple sync state. It was easy for them to see the benefits.
[200:57.36] Trading for scalable reactivity. This is a whole article, Mike. Okay. That's cool. Let's keep on going.
[201:03.36] But once the reactive mindset firmly sets in, devs are willing to trade off a tiny amount of syntactic
[201:07.76] sugar for much greater flexibility, scale building performance. Most SolidJS's biggest fans are React
[201:12.56] developers. Quick check in the chat. Is that true? Are you guys all React developers?
[201:29.52] not quite as nice, but developers who understand reactivity love it. This is how I see reactivity
[201:55.44] spreading up the layers of web applications rather than a completely novel 100% reactive framework
[201:59.28] like CycleJS. Oh, that's an even better question. Do you guys remember CycleJS? CycleJS was quite the
[202:06.32] framework. It was a purest view of reactivity. They made it so all side effects lived outside and you
[202:16.32] could just wire everything together. Anyway, I see developers adopting a single simple extremely
[202:23.44] convenient tool for each incremental layer of complexity. Developers fall in love with the
[202:26.72] Hello World-like demos. The reactive mindset seeps deeper into their brains and then they get ambushed
[202:30.72] when the tool explodes in their faces at the next level of complexity. Then someone creates the next
[202:35.12] great tool. This process is probably for the better. RxJS is more general than tan stack query,
[202:39.36] but is mediocre for HTTP requests. Definitely. Which is where the vast majority of asynchronous data
[202:44.08] comes from. Seems like more focus should have given to it, doesn't it? Maybe it's currently more
[202:48.08] important overall to figure out this SSR stuff everyone seems to be struggling with. Okay,
[202:52.56] and then he promotes his own state library. But I thought it was...
[202:57.12] Dev just given the quotes today. This constantly pulls me towards Solid as someone who really likes
[203:05.28] React. I get the whole gist-transfer state into UI simplicity React going forward, but nothing I've ever
[203:09.28] worked on is satisfied with simple transformations. Trying to tack on stateful logic on top of something that
[203:13.36] really wants to be stateless results in a lot of painful impedance mismatch. Once you get used to
[203:18.56] the fact that solid wrap stayed inside functions, it's a breath of fresh air from React because things
[203:21.84] are a lot more flexible and composable. Obviously way more performant, but that's not even the important
[203:25.92] part. I don't write solid because I want performant apps, but because I enjoy it a lot more.
[203:30.16] Anyway, yeah, I think this is the end of the dev spotlight for this stream. But let's... I'm going to pull
[203:40.00] off my screen and set up some stuff to talk about what else has been going on in JavaScript. Okay,
[203:44.88] so give me a second here. Yeah, ad break. Except I don't... Yeah, I don't run ads myself. You might just
[203:52.24] get caught by them incidentally. I'm not good with the streaming thing. If you're watching me on Twitch,
[204:02.16] I'm sorry. That's the only platform that probably is sending you ads about now. Probably already did like a
[204:08.96] dozen times. But... Sorry about that. Let me get all my stuff ready to talk about other this week stuff.
[204:23.36] I don't know. It's been two weeks, so you'd think I would have more topics, but let me see here.
[204:38.96] a number of you are probably still watching from Twitter or X. I wonder, is that working well for
[204:48.40] you? Do people like watching it? Watching the stream on here? It's tricky because you don't get the comment,
[204:55.28] right? So even if I'm asking you, you actually couldn't tell me, even if you wanted to.
[205:14.80] And then I need one more. All right. Yeah. Oh no, not that. Open a new tab.
[205:21.36] All right.
[205:25.60] It's like when I realized I had no new
[205:34.32] hack MDs this week.
[205:35.44] Yeah, there's probably comments on X. People can like comment on the actual stream. I haven't actually
[205:46.96] looked to see if I can see...
[205:51.28] see that. Yeah. It's all good.
[206:04.24] Let's just shift gears here a little bit.
[206:12.72] give me two seconds. I'm going to get back to, yeah. That's funny. Yeah. Well,
[206:21.52] let's run it into this week in JavaScript. This is something that... I don't think there's actually
[206:32.72] that many new viewers here this week, but if you're new, I'd like to go over Twitter and just kind of
[206:40.64] follow my thread of what caught my eye. And it usually leads to some interesting discussions.
[206:46.32] We already talked about a bunch of Twitter stuff, but more on the tech side anyways. And the very
[206:54.80] first post that I have actually brings Theo back again. This one was interesting to me. The gist of it,
[207:09.92] as I said, this is old news, but he literally posted this right after we finished the stream.
[207:16.00] So I missed it. So we didn't talk about it. So it's been two weeks. This is old news. But
[207:19.92] essentially, Vercel got some heat after that clip from... What's his face? Levels.io talking with
[207:34.48] Lex Friedman. And in fact, I'm going to play that clip. Let's open this in a new tab and I'm going to
[207:46.80] change how I'm sharing my screen so that we can listen to this clip. Okay.
[207:56.24] Yeah. Give me two seconds. I'm just going to switch how I'm presenting my screen.
[208:07.92] I think it's this one. Man, this is my most controversial take, I think. And maybe I'm wrong,
[208:19.04] but I feel like there's frameworks now that raise money. They raise a lot of money. Like they raise
[208:24.88] 50 million, 100 million, 300 million dollars. And the idea is that you need to make the developers,
[208:30.32] the new developers, like when you're 18 or 20 years old, right? Get them to use this framework
[208:36.64] and add a platform to it. Like where the framework can... It's open source, but you probably should
[208:42.56] use the platform, which is paid to use it. And the cost of the platforms to host it
[208:48.72] are a thousand times higher than just hosting it on a simple AWS server or VPS on DigitalOcean, right?
[208:55.52] Up to this point, I'm with him completely. Yes, you're right. I never covered this for some reason.
[209:03.12] Like I saw it because back at the end of August, like a month or so back, but I was just like,
[209:08.32] yeah, whatever. Like, I don't usually get caught into like business-y kind of drama stuff. Um, you know,
[209:15.60] I mean, the truth is everything, like the first half of what he says here, I'm like, how can you argue
[209:24.64] with, with that? Right. And it's a tricky, it's, it's a tricky subject because it's like,
[209:30.80] I mean, the number of times that I wake up in the morning, I'm like, man,
[209:33.68] if I had a company and I had paid, you know, if I had VC funding and supporting solid and all this
[209:41.52] and had employees, like think of how much work, like how much further we would be along if there
[209:46.88] was fully paid people other than myself. Like, you know, think about it. Like we have a lot of volunteers
[209:53.84] and community funding and we put all our open source money right back into funding the community.
[209:58.64] You know, so we get a lot of people, you know, like significant effort, like maybe 15, 20% time
[210:04.40] effort, you know, and at times we've had hired on people like Alexis six months, eight months, you know,
[210:10.00] full-time. But like, like think of how big that is. That's like, that's like doubling
[210:15.92] like our current output just by hiring another person out. Like picture, like we had three people
[210:22.32] or four people, or, you know, like, I don't know how, like, I imagine there's, I don't know how many
[210:28.64] people are working on a next or remix now, but I mean, those are meta frameworks. Like we're, we're not
[210:33.68] just, we're, we're like building next and building react and building like, you know what I mean? Like,
[210:40.80] so I get there, you know, raise the money, put the money and it's like, it's, it's expensive. It's hard
[210:49.36] to actually build a framework these days up to snuff because of the amount of work that goes into it.
[210:59.12] But I, this is where it starts to fall off for me. I think we're, where we get next is his biased
[211:09.36] toward, look, let's, let's listen.
[211:11.12] So there's obviously like a monetary incentive here. Like we want to get a lot of developers to use this
[211:16.56] technology and then we need to charge them money because they're going to use it in startups and then
[211:20.40] the startups can pay for the bills. But what that, it kind of destroys the, the information out there
[211:28.88] about learning to code because they, you know, they pay YouTubers, they pay influencers,
[211:33.84] developer influencers, it's a big thing to like, and same thing, what happens with like nutrition
[211:38.80] and fitness or something, same thing happens in developing. They pay this influence to promote
[211:42.48] the stuff, use it, make stuff with it, make demo products with it. And then a lot of people like,
[211:46.72] wow, use this. And I started noticing this because when I would ship my stuff, people would ask me,
[211:51.92] what are you using? I would say, I would just PHP, jQuery, why does it matter? And people would
[211:55.76] start kind of attacking me. Like, why are you not using this new technology, this new framework,
[211:59.68] this new thing? And I say, I don't know, cause this PHP thing works and I don't really, I'm optimizing
[212:04.72] for anything. I'm just doing, it just works. And I never understood like why, like I understand
[212:09.84] there's new technologies that are better and there should be improvement, but I'm very suspicious of
[212:14.72] money. Just like lobbying. There's money in this developer framework scene. There's hundreds of
[212:20.48] millions that goes to ads or influence or whatever. It can't all go to developers. You don't need so
[212:26.16] many developers for a framework and it's open source to make a lot of more money on these startups.
[212:31.60] Yeah. I mean, it's interesting. Cause I mean, I could be a little bit wrong here, but
[212:43.60] I don't think the industry needs an influx of money to get the marketing or the education and all the,
[212:53.12] the, you know, like the fitness type people running here. Like it, like we're talking about almost
[213:03.04] JavaScript culture in a sense, like if no one had paid Theo or someone else,
[213:10.96] he wouldn't have been able to take things as far as he did, but he'd probably be doing a lot of the
[213:18.08] same stuff. Right. I remember the guy who decided to, you know, poke Dan on Twitter and get him to come
[213:26.16] on for his job interview thing, you know, saw the opportunity basically was unknown at that point and
[213:33.76] put, you know, he just made the one next JS video and then do that. People, you know, at the beginning
[213:41.92] might gravitate towards what they like, and then they realize what's popular gets them more views.
[213:48.00] And it doesn't take money to do that. It's like a self-fulfilling machine. Right. I remember Theo's
[213:54.80] third video was a, was a solid JS video. And around Christmas time, I remember he came to me and he's
[214:00.96] like, this is going to be the biggest solid JS video, you know, to date or whatever, you know,
[214:05.68] and I'm like, and he's like, it's going to get this many views. My last two got these many. I'm like,
[214:10.64] it's okay. You know, like I appreciate it. This is exactly what we need. We need this
[214:16.96] kind of exposure right now, but your other content will get more viewership simply because of what it
[214:22.96] is. I appreciate if you find time in the future to highlight us more whenever you can, but if you want
[214:32.88] to get your name out there, you're going to, your next content, your react content is way, way more
[214:37.52] popular. Like it has a higher, higher ceiling, you know, like 10 X, whatever. I remember, I mean,
[214:46.80] we were excited about the video, but like there was a certain reality set in there. And this is,
[214:51.20] this kind of mentality comes out to training. It comes out to basically everything, right? We,
[214:57.44] when you have a Twitter culture where you're just like echo chambering, you don't need money. Like
[215:04.00] money can help a lot, but it's not the driving force from my perspective to that end. Like how
[215:10.88] many influencers were Purcell putting money towards? My understanding was just Theo. That wasn't what
[215:16.88] was driving everyone to use these other tools. Like levels probably, as I said, it's sick of hearing
[215:23.20] people telling him he can't use PHP. And why isn't he using a modern framework?
[215:27.28] Um, and he's right about everything, you know, the influence of money, how that affects the upsell to
[215:34.24] infrastructure, the whole, the whole thing there. But the propagation of this thing goes way beyond
[215:41.28] money and marketing. I mean, it does leave an impression. Definitely. Like you, you know, when
[215:48.00] you look and you see ads and stuff, it does leave an impression, but like, I don't, I, I don't see it
[215:57.20] quite maybe as pessimistically.
[216:01.28] Yeah. Ben Holmes talked about it. Most of his content is there because of, uh,
[216:10.80] because of Next.js content. Yeah. So yeah, I mean,
[216:16.32] it's funny. It's, it's, it's, it's, it's ironic and it's tricky and it's, it's messy. Cause like
[216:25.76] Theo, and you still see it in his current videos now, he is a big Purcell fan, a big Next fan and has
[216:33.92] always basically been both the money was never an asset. He, he, he actually used this whole thing
[216:42.88] as a way of being like, you know, I got choice. I'm going to pick tools that like he, he had the benefit
[216:49.44] that his favorite tools are some of the most popular tools. So he had the benefit of being able to choose
[216:54.48] his sponsor, so to speak, and basically just pick the stuff he would choose. You know,
[217:02.56] you get bugged by people, not bugged, but you get messaged from people to promote stuff or look stuff
[217:07.36] all the time in his position. Yeah. I get that to a certain degree too, but I'm not as, you know,
[217:13.12] out there, so to speak. But I know from my own messages that like, he had lots of options if he
[217:19.68] wanted to do stuff other ways. Um, and he chose to do what he wanted to do anyways. And it was just a very
[217:29.20] nice alignment. Unfortunately, sometimes really nice, natural alignments are dangerous and bad.
[217:49.84] I mean, who's going to pay to use a JS firmware as I say, if you're not paying for the product. Yeah,
[217:53.60] exactly. I mean, this is why I always pulled back to push back the VCs. It's always, I always find it
[217:58.88] funny to this day that when the whole remix gate happened, um, and like the, what was it? I got some
[218:06.48] like nasty message, um, from one of the VC people from whatever, who were sponsoring remix at the
[218:14.96] time and all this stuff. And they're like calling out Matt Billman and stuff and saying, oh, chain one,
[218:19.60] you blah, blah, blah, blah, blah. You know, hire this, can now fly, blah, blah, blah. I don't know what
[218:22.80] game he was playing, but like six months earlier, he was trying to tell me that I, you know, I should start
[218:27.36] my own company. So like, yeah, I, I don't know. I, and I, and I was just like, what am I selling? And
[218:34.80] it's like, we'll figure it out. It's like, yeah. Okay. Like it's th that is probably the, why I'm not
[218:40.88] the right personality. I think a lot of people will find a way to make money. That's not what I'm about.
[218:44.96] So I, the distraction was more troublesome from my perspective, but it's like
[218:49.44] like, it's, it's just, it's just kind of, it's, it's, it's, it's definitely, um,
[219:04.00] yeah, solid ink. Yeah. We've talked about it. It's just, this is just one of those things where
[219:10.24] in a sense, I don't think it's going to actually change much as a positive, but in a sense,
[219:15.60] it could have, if Theo took it slightly harder than, you know, and it acts more negatively,
[219:20.96] which I would, I mean, he might be within his, him to do, you know, um,
[219:27.92] they kind of alienated one of their, like, but basically this wasn't the case anyways. And by
[219:37.44] caving and making it public, what did this accomplish? You know, I don't actually know, um, to be fair,
[219:42.72] like, because I'm, what did I write here? Whether it's actually true. Okay. Yeah. What did I say here?
[219:47.28] Um, it's easy to shoot the messenger, but if anything, influencers are a thermometer reading
[219:51.12] a reflection of what we already know to be true. Whether it's actually true is a different story,
[219:55.60] but also irrelevant. Theo is the least of herself perception problems. Having zero influencers on the
[219:59.76] payroll only confirms that they are what they're willing to do for perception unchanged. This probably
[220:04.72] won't be the last casualty. I noticed the problem when too many, I noticed the problem first when
[220:10.56] too many things aligned react next for selling for trust came into question to every decision
[220:14.32] scrutiny. Instead of owning it, there's a sense of denial understandable, but intention and results
[220:18.16] don't always align. Resentment is tangible, but this is just one perspective. I hope they get to the
[220:22.96] root of the problem and having watched the whole Theo arc next for sale. This wasn't it. Theo knows that
[220:28.00] for sale knows that you should know that. And it's disappointing to see this ultimately meaningless outcome
[220:31.68] because this doesn't actually change that perspective perspective. This is just another
[220:36.48] example of like one of those really nice natural alignments that ended up happening that just when the
[220:42.96] most popular things all get together and you know, it's possible to, you know, produce a lot of haters.
[220:52.96] And if all the haters actually have reason to get together, well then like, you know, it, it's a,
[220:59.76] it's a monopoly. It's, it's too controlled. You know, it's not good for the wider ecosystem because
[221:05.76] it makes other things suffer. Like just too many things align. You think, well, that's the key to success.
[221:11.60] Right. But I don't know. Yeah. His videos have ad reads.
[221:32.16] Yeah. I don't know. It's, it's, it's a new era of, of this content. I, I, I don't know.
[221:41.92] Maybe like, maybe for sale, just didn't need to worry about any of this and it just didn't matter.
[221:46.96] I, they had their reasons. It's just, it's, it's just,
[221:51.04] I feel like we're missing the problem still. And maybe, maybe like it's not for sales problem.
[222:03.52] like, why, why is everyone so threatened by this alignment?
[222:10.00] You know,
[222:13.20] it's just like the, I don't get me wrong. There,
[222:23.44] yeah. I don't like, there is an alignment here. It is not imagined. It's just like,
[222:27.68] I don't know. We've talked about it in the past. Maybe, maybe I'm done with this one. It's just,
[222:40.64] I feel, I don't know how to put this in the words, but I feel like
[222:44.24] people are looking for a scapegoat. I don't, I don't know how else to put it. It's like,
[222:52.24] it's like every, at this point, everyone who's frustrated with react, frustrated with versell
[223:02.88] pricing, frustrated with next app directory, frustrated with anything, everything gets funneled
[223:07.68] that for sale. Like it doesn't matter. Like react 19 could be a thing. And people, people don't even,
[223:12.80] I don't even know if people associate, at least in this sphere, associate react with meta anymore.
[223:17.44] They view it like as the versell company and it's not true, but that's the kind of perception out
[223:23.04] there. It doesn't matter about denials and which core teams work where or what now. It's the way
[223:28.24] stuff is delivered. It's the way that next doesn't like, you know, when a new feature is added to most
[223:34.16] frameworks, they'll go and deploy it on six different platforms and be like, look, we support
[223:39.20] this everywhere. Astro does it. Remix does it. We do it. Next is like, oh, here's it's on versell.
[223:43.44] makes sense. They throw it, but you understand like they've somehow managed to get the heat
[223:50.40] of all the things. So instead of just being responsible for one thing, they are to blame
[223:56.08] for everything. And I don't think it's fair, but it's like, you just feel the bubbling resentment
[224:02.40] about people, about the direction of reactor that this, that, and they're to blame. I'm, I'm
[224:10.32] more willing to turn this back on people, um, a little bit, not just blame for cell, which is kind
[224:17.20] of funny position to be in, but like, it's, I don't know. I feel that still, that's like something has
[224:27.92] to change, whether it's an acknowledgement, whether it's like a breaking up the alignment in some kind of
[224:33.84] meaningful way, other than empty words. I mean, it, it doesn't even matter if it's real or not.
[224:39.76] As I said, it's just,
[224:40.80] is it's more than just hosting it though. Like,
[224:59.76] like Gatsby had Gatsby cloud and you, you could do stuff on Netlify and Vercel technically with it.
[225:08.72] I know definitely Netlify, but they had their hosting platform and that was their thing
[225:13.36] because of the recent infrastructure stuff. Like we were talking about, like adding KV or blob storage
[225:20.32] to your framework or in skew protection, all these things to support these server client features that
[225:24.40] require infrastructure pieces to really work properly. It's not just about sponsoring. It's almost like,
[225:29.76] the only way to deploy next is on Vercel. And the only way to use React is to use next. And the only like,
[225:36.00] so like, it's just like the straight line funnel to put a bunch of money and in Vercel's pocket, which again,
[225:44.00] people like levels are talking about, like, which costs, you know, companies like Vercel and Netlify who do kind of
[225:50.72] redistribution through, you know, AWS, whatever, there is a premium for the, you know, better customer, uh,
[225:57.68] level better, you know, DX aspects of it. You pay over using AWS straight. So, but now because the tooling's aligned with it too,
[226:05.76] it feels like some kind of scam almost that you convince people that they need to use React, which means they need to use React or sort of next,
[226:13.92] which means they need to use Vercel, which means they need to pay 10 times more for their hosting or whatever.
[226:18.48] I mean, I'm just pulling that number of thin air, you know, someone will say something like that. And,
[226:22.80] and essentially like the whole thing is called into question, um, along the whole alignment,
[226:32.72] whether than looking at it as individual parts, right? It's not just sponsorship. It's the downfall of front-end development.
[226:41.92] Right. And like, as I said, Gatsby, people felt like, okay, that makes us Gatsby's Gatsby cloud.
[226:48.08] They have the service and then you have DSG and that's a service. And like, they owned it.
[226:51.20] Parts of it is that even though, as I said about reality and truth, I think Vercel has kind of denied
[226:57.44] it. They're like, no, or the React team's like, no, we don't only think, uh, next, you can use remix or doing
[227:01.92] this, but server components of the future. Okay. Or, you know, next, like, yeah, we work on every platform.
[227:07.44] Like we all know how true that is. Um, so like, like,
[227:12.88] yeah, I don't know. I don't know how much I want to talk more about this. It's just like,
[227:21.12] I, I feel like this is just rubbing off the layer or unsurfacing something that's already there.
[227:30.16] It's like there's bits of it from every aspect of it, even like resentment towards even React itself,
[227:36.88] bubbling up through here. Um,
[227:39.20] yeah, I mean, it, it doesn't matter if it's fair or not. Right. Yeah. I, but it's, it is, it is.
[227:59.60] Well, I, it's a little bit more nice, more than be nice to use because
[228:04.88] like it's, it's, it's not completely true. Like you can use these features as they build out, but
[228:13.76] the direct line between React to Vercel infrastructure is so tight when it comes to like what features you
[228:21.76] can adopt. And when people market these features, you need PPR. Well, guess what? Where can you get PPR?
[228:29.04] Right. Like it's, it becomes, it's, it's not just like, if it was just like, oh, if you want PPR,
[228:39.76] you should deploy your next app to here. Like people viewed it, but it's not that because
[228:43.68] PPR is necessary and oh,
[228:48.88] using next is necessary. If you use React, like you basically saying that there's like,
[228:54.48] if you want to do what's proper or right, you have to go down this path.
[229:03.60] like PPR. Um, no, it is the funny thing is it's not like, if you go down to any next release, you will hit this sort of thing.
[229:14.32] I mean, the others catch up in time, but they have to do work. It's not like, oh, next comes up with a new feature and just works everywhere.
[229:21.12] Like, I mean, uh, SKU protection is another one. I, I, you could, I think we did this on stream before.
[229:26.88] I just start pulling down next releases and was like, Vercel, Vercel, Vercel, Vercel. Like it's,
[229:35.04] it's, it's, it's, it's like we're getting more and more there. And it makes sense. It's like what
[229:39.68] we're talking about live view and rails, like having these functionalities built in. Um, I wonder if
[229:44.72] rails like had that kind of set up because of Heroku and it was like, it just made sense.
[229:48.32] You could sell the infrastructure with like the levels, like it's fine. That's what Vercel's in
[229:52.96] business to do. The problem is every react developer thinks that like, that's how you have to use react
[230:00.24] because like the chain, they, they have to somehow break the chain, except it's their best funnel,
[230:05.68] but it's like too much. I don't know.
[230:11.28] Yeah, I don't, the, the funny thing is I don't think, I don't know if that's true. Maybe, maybe,
[230:28.88] maybe, maybe it is. I mean, I, I, I'm maybe, yeah, it's mostly the serverless guys that I'm talking to.
[230:34.72] But the thing is like, there's like a next version that works with like node as a container or dock
[230:39.92] retainer or something. But like from a pure feature standpoint, I know, I know the guys at Cloudflare
[230:45.84] who work on building all the pieces and the adapters that are missing. Cause I work with them with solid.
[230:51.12] Right. And I, I'm definitely familiar with Netlify. Most places have adapters, right? Netlify has
[230:56.48] the next runtime. It's like, it's like 20 times larger than any other adapter. It's like a whole runtime to make
[231:03.76] next work on Vercel or sorry, on Netlify properly. Like, I don't think the criticism on any specific part
[231:12.88] is overblown. I think the problem is that the whole narrative is, is like, it ties things together.
[231:23.12] Like I actually don't disagree with the, on one side, I think I'm blaming people's complacency,
[231:29.04] but on the other side, every individual argument is generally right. So it's like, it's, it's, it's,
[231:36.00] it's, it's, it's not, it's just like this, it's the alignment that has just shunned the light so that
[231:41.44] everything just aligns in the perfectly awkward way.
[231:55.28] the problem with is it underbaked to crucial DX dev stuff service. So you're going to approach your
[232:08.64] maverick and never. Yeah. I mean, it's underbaked because it's still under development. We're,
[232:13.36] we're in one of those phases where we're learning patterns again,
[232:15.92] where they're running react canaries and trying to solidify on it and stuff. Like they took a big risk
[232:20.88] with the RSCs and it RSCs could be the future. But I'm saying who's blamed for that react or Vercel,
[232:30.80] Vercel's blamed for that. Like it was their choice. As I said, they're just taking all the heat,
[232:36.24] but I'm not saying the specific points of complaint for the heat are unmerited. They just, they're just
[232:43.68] getting it all.
[232:51.60] I mean, there's, there's Open Next people were working on like, like, which was like,
[232:59.36] they got some complaints because they're like, Next.js is open. But like, there are like,
[233:08.88] there are like, people have done this and Vercel's like, what are you doing? You know, like a little bit.
[233:15.04] Yeah. I don't know. It's, it's, it's,
[233:20.64] it's on one level, like they could just own it and just be like, like Gatsby did. But then again,
[233:32.32] like, where's Gatsby now. So yeah.
[233:35.68] Okay. Anyways.
[233:44.48] It's funny, my, my post comments are coming in like, in a weird order right now, which is,
[233:57.44] okay, let's continue. Um, that was something like the first story and I spent way more time on it
[234:02.96] than I thought I was. Okay. We talked about the Jose stuff already. We talked about this.
[234:14.64] Okay. Let's talk about this one.
[234:28.64] We named Next.js or Vercel.js. I mean, that would be a way of doing it. Yeah.
[234:41.12] This is such a funny idiosyncrasy. I, I, I, I mean, it's more than that, but it's
[234:46.24] Oracle's done like nothing with the name. I mean, I don't know how much I need to cover this.
[234:52.16] I remember it was confusing when I first started programming JavaScript because like Microsoft also
[234:59.04] had like, um, J script or something, or like, so like, it was weird that there was like a bunch of like,
[235:10.32] proprietary mental kind of stuff like, you know, trademark, what do you call my mind slipping here
[235:19.44] right now, but you know what I mean? Around like the word JavaScript, because it was referencing like
[235:24.56] the Java framework when it had nothing to do with it. And essentially
[235:27.68] Netscape, I guess, or who had it originally, but Oracle ended up buying it out. Yeah. Netscape in 1995,
[235:35.60] Netscape partnered with Sun Microsystems to create interactive websites. Brendan Eich created the
[235:40.08] first version of JavaScript, right? So he was an employee. And since then the, the trademark has
[235:46.24] basically sat there until Oracle bought them out. And it's just sitting there for no reason. And, but
[235:52.24] because of that, things like JavaScript conferences, like JSConf and stuff, like, can't use JavaScript in
[235:56.80] the name because it's a trademark. Um, "ACMAScript was always an unwanted trade name that sounds like a skin
[236:07.52] disease." Microsoft halfway offered up J script, but no one else wanted that. Yeah. It's such a funny story,
[236:16.24] like in the first place, like how, like JavaScript having nothing to do with Java, but Java being cool,
[236:22.72] led it to like being part of the name. Like it's confusing as hell. It's interesting that Dino wants
[236:31.36] to push this, but like, it's never to this date been resolved. Um, I'm glad there's so many people
[236:39.12] have signed this myself included. Um, if you know, consider, if you haven't looked at this,
[236:49.60] consider signing this yourself. I just, this is just complete unnecessary. Um,
[237:09.04] I'm just, how do you do fellow kids? Uh, yeah, no, it, this is one of those kind of almost like
[237:18.08] no brainer ones. JavaScript 1.0 came out before Java 1.0. Yeah. Like it's such a weird.
[237:25.52] Yeah. Um, sorry, I need to change how I'm sharing my screen. I realized that I'm only,
[237:33.12] I didn't show the, the, the, the signing page. Um, give me two seconds.
[237:38.40] What's up? Screen, share, share screen, entire screen.
[237:41.60] All right. Sorry. I was actually looking at the letter, um, while I was talking about it,
[237:49.28] but it doesn't really matter. You guys, you all know what's up. So, um, okay, let's, let's shift
[237:56.72] gears for a second. Let's, let's, let's see what else I got here. Um, yeah. When we're Jason,
[238:07.60] I always love the demos that shows if you get a chance, um,
[238:10.64] seeing the ecosystem grow like this, this, this is a demo that's using solid, solid UI,
[238:17.84] trading view, lightweight chart. You saw it in its pure form. A lot of times you saw this reactivity
[238:22.48] system without JSX. It's part of the flexibility, um, video on that. Just talked about Trello,
[238:31.44] conference talks, um, conference talks, Daniel and Attila are, are, are hitting it pretty hard right now.
[238:36.40] Um, yeah, actually, I guess we already went out over most of the solid news this week.
[238:44.64] Um, let me look at my bookmarks.
[238:55.68] We talked about the Jose stuff.
[239:03.76] Okay. Yeah. That's a good one. Um,
[239:14.32] Oh yeah. Okay, cool. It's just reminding myself of some of the other stuff that happened. We'll get to
[239:25.12] that in a second. Let's continue on here. Okay. The, the big, the only big shout out that I want
[239:31.28] to do for solid right now, um, is the hackathon is coming soon.
[239:38.24] 10 days, four hours, 58 minutes, um, $15,000 in prizes, um, multiple categories. We're going to drop
[239:47.28] the categories on that day, give everyone a, the chance to get involved. Um, last time this came
[239:54.48] around, this is a lot of fun. So, um, look forward to it coming, but just, you have a whole month and a
[240:02.96] half, um, basically from October 1st to November 14th to build something. So lots of time. Um,
[240:11.12] it's going to be fun.
[240:13.20] It's been a while since we've seen one of these. I think I said this last time, but it was like
[240:20.40] back in 2020, 2021 ish, there's like a number of them. We did one then after and then spelled
[240:27.20] trying to bring it back again.
[240:32.96] Okay. All right. All right. All right. Let's go back here.
[240:38.08] Yeah. Okay. This one's a short one.
[240:48.00] Um, I don't talk about Marco very much anymore. Marco six, you know, specifically, um, because
[240:59.84] I'm trying to motivate the team to, uh, do the work and get there. I mean, I, it's not fair.
[241:06.48] Their project's incredibly ambitious. That's like someone saying, you know, until solid 2.0 comes out,
[241:11.20] I'm not going to, I'm going to boycott Ryan's streams. It's not, it's, it's not fair, but, um,
[241:15.52] but I keep on seeing stuff from Svelte
[241:27.28] and, um, specifically mostly Svelte. And, and I, every time I see the new features and stuff coming
[241:34.96] in for Svelte 5, it, I keep on like, it's like this really cool blend between like solid stuff.
[241:43.76] Like it's not like old Svelte. It's like very solid, like, and very Marco like, and it's like slides
[241:48.24] right in there in the middle. And I'm like, and, and because we only really focus on the reactivity on,
[241:54.96] on the solid side, I sometimes miss that. Like I, I think I saw Svelte adding, uh, Svelte snippets
[242:01.68] and Marco has Marco macros. Like really big on the alliteration on these features, apparently.
[242:07.52] Um, and I, I just started thinking about this and I was like, it's kind of crazy when you step back for
[242:17.12] a second and you think of the profound impacts that stuff like signals and the modern approach,
[242:21.92] the signals with fine grain rendering have had on the react, uh, it's not on react, everything but react,
[242:27.52] but on the JS ecosystem. And then on the other hand, look at like Marco was the original islands framework
[242:35.84] and like the approaches, the templating, especially stuff like Svelte's like const and all these like
[242:42.24] features that I keep on seeing, like coming into Svelte, um, that aren't actually in other SFC
[242:48.08] programs, like in a sense of very innovative from the South side, but actually Marco had them, uh, because
[242:52.88] you know, Marco, hashtag Marco did it first. It's, it's really interesting to see these, like Marco's kind
[243:00.56] of over here, solids kind of over here to see the kind of like some of these things are locked. Like
[243:06.96] they're, I often say things are discovered rather than invented, but to see these spaces kind of getting
[243:12.64] filled in more thoroughly and seeing where these things go, it makes me miss occasionally thinking
[243:20.08] on that other side. Cause I'm, I'm very focused where I am right now. Um, some people ask me, you know,
[243:27.28] about, Oh, what would you do to make JSX better? Cause I, you know, I, I make a big deal of usually
[243:32.48] pushing JSX. And honestly, if you ever get a chance and you haven't watched it, I have a great stream
[243:37.36] where Dylan converts Marco to solids JSX. And it gives you a really good idea of like what templating
[243:42.96] could do. I don't know how, if it makes sense to bring JSX because JSX has a very specific syntax,
[243:48.80] but like what Marco is able to do is just wild by comparison because they decided to take on that challenge.
[243:55.04] Um, I'm going to post this, I'm going to post this in chat. Um, but yeah, out of order streaming,
[244:09.76] again, Marco didn't invent it, but they were the first open source JavaScript framework that I think
[244:14.32] that actually had it as well. Like it's yeah. You know, in islands in a sense, server components are a
[244:24.96] form of islands. Right. So like, yeah, I don't know. It's, it's, it's, if I just looking at like the design
[244:34.16] space, it's just incredible to see the, the space that lives between these two, like they're not extremes,
[244:42.80] but between this whole range, it's why I enjoyed working on Marco. It let me kind of attack the
[244:47.84] ecosystem from both sides. I got to see like, I have my very react side of, of, of thinking. And
[244:54.88] sometimes I feel like where we are in solid is more react than react is these days. And then like the,
[245:03.20] like the Marco side is way on the other side sometimes. And seeing that kind of flank around where like stuff
[245:11.44] like viewers felt live, and then like better have insight into like where they're going.
[245:16.64] So yeah, I don't know. Marco's very cool. If you ever get a chance to check it out. Um,
[245:22.88] it's, it's, it's really novel and, and really unique in, in its way.
[245:35.92] All right. We should talk about that. We talked about that. Okay. Yeah. Okay. So we're getting down
[245:46.48] down to a couple last ones here. We should talk about this one. Yeah. And
[246:02.48] I saw this and I thought this was pretty interesting. I don't know where, um, Sebastian got this example
[246:15.76] from, but it's something that we haven't seen people do very often with react like this, where you fetch data
[246:25.92] So we're going to put it up here and then they're showing suspense in the same component and then
[246:31.04] passing it through. Now, the reason this works is because the state primitive here is actually holding a promise.
[246:41.68] So that's the stable reference. And then when you set state, they're, they're using it as a way of
[246:50.40] basically deriving and storing the next promise. I honestly never thought of doing that. For me,
[246:55.84] when I think of async, I think of, um, computed values or memorization. Like I think of it as an async memo,
[247:02.48] not as state, but, um, right. Like it's basically, it's derived from ID. They do something kind of
[247:11.44] interesting here where it's like object ID promise. Like, so it's like, it's passing in both the,
[247:17.68] the source and the output to kind of get this API. But the biggest thing is fetching above the
[247:27.60] suspense component. Now I know someone from remix is like remix. I was going to be like, well, we've been
[247:32.24] doing that forever, right? We have our loaders. And if you choose to use defer and not await, well, guess
[247:37.68] what you get the promises and then you pass them through our await component and same deal. And
[247:42.16] they're right. But this is one of the cleanest looks of one of these examples that I've seen in a while.
[247:47.76] But I, you know, where I go immediately when I think about this, cause I actually wrote a whole article
[247:54.72] about async handling. And I suggested that putting passing promises around is about the last thing you
[248:01.36] want to do, which I mean, I did not know that this was going to show up, you know, um, a month later
[248:08.00] or so after I wrote the article, but the, what's interesting is yeah, you can use here to read it,
[248:14.16] which means you get it. Um, but there's an interesting coloration that happens here. I'm going to call
[248:20.24] coloration is user. Now in this example needs to accept a promise. It doesn't, or a promise of user to be
[248:27.92] fair. So your interface now is impacted by async essentially, like in this scenario, like you can
[248:37.28] fetch up here, but now if a component wants to participate in something that is async, either
[248:43.92] it has to use and get out of async, like resolve it, or it has to accept promises of the said thing.
[248:59.12] No, I, I, the, the state just gets the promise itself. So you go fetch users. Now state is a promise.
[249:09.20] They're, they're literally taking, they're calling fetch user here and putting on the object. So you
[249:13.28] don't get the resolve promise. You just get promise. And then when you get in here,
[249:17.36] they're, they're pulling the promise off and then you, it becomes promise of user. See prop promise of
[249:25.04] user becomes user right here, right? Like the component is expecting a promise of user, which I said,
[249:36.00] it's pretty clear what it's doing from that perspective. So I can respect that, but it
[249:41.52] means that like the fluidity of the system is, and now you're dealing with a second class primitive,
[249:47.76] which is fine promises built into the browser. I mean, if, if this is your direction you're going,
[249:53.60] I have, you know, maybe this is how react will support signals. You can have signal of user
[249:58.72] and then pass it through. As you know, I'm not a big fan of passing signals directly through components,
[250:04.96] like making it like a thing that you check. Like, is this a signal? Is this a promise?
[250:10.24] But yeah, it's an interesting example. My first response to this, if I can find it now, because I
[250:19.92] know predicting people will use higher than they should probably next to you state, right? Because I was
[250:25.04] just like, I was like, I was looking at this. I'm like, who's going to pass the promise around the,
[250:29.52] you know, further down and further layers. They're just going to like fetch the state and then go use
[250:34.40] state right next to it. And then I realized, oh, the suspense boundary is below it. Okay. We can't do
[250:43.04] that. We actually have to pass the promise here. So, right. And then where does this go?
[250:52.24] Yeah. You need to cover the call use, right? Because you can't put use above suspension. That's
[250:59.20] interesting. Can, can you still put both below the suspense boundary? Right? So this started this whole
[251:04.24] like debate where we're like, can, can, what if I wanted to move the state beside the use here instead? I
[251:12.24] know that's not the point of this thing, but can I do that? And the answer actually
[251:16.24] took us a long time. We went back and forth, right?
[251:21.52] You can't fetch the promise in the same component as use, right? It needs to be cached across renders.
[251:30.96] It is cached. The promise is in state. And then we went, we went through the whole,
[251:37.84] the whole chain of things. And if I remember correctly, we actually realized that no, you
[251:43.28] can't because let's see again, Sophie to the rescue. Um, creating it in a use state initializer,
[251:53.12] unfortunately is not enough until a component is mounted. React reserves the right to throw away
[251:57.20] all states for us, et cetera. And does actually do that in practice in many cases.
[252:00.64] So
[252:06.48] yeah. Um, interesting. This is the same problem with you doing use memo with it too. I think it's that
[252:17.20] the hooks aren't guaranteed to be there, um, until it's mounted, which means that if you have to not own,
[252:26.24] you basically, if you want it to be in state, you have to put it above the suspense boundary.
[252:35.12] Um, which means that you do have to pass the promise through because yeah. Yeah. Or yeah,
[252:44.96] hoist it using a cash or some other kind of mechanism, essentially.
[252:47.76] Yeah, definitely the inspiration for cash to be quite nice.
[252:58.48] So yeah, I mean, this is, this is part of like what your brain starts kind of going, what the hell's
[253:10.64] going on? Um, it's because the re-render model and concurrency, right? Because in react, when they
[253:18.72] have concurrency, they have to re-render the components. And if a component is never mounted,
[253:23.12] they reserve the right to be able to throw it away. Um, so yeah, it,
[253:28.48] yeah, it's interesting.
[253:32.08] Did I see which tweet? Sorry, I, I'm missing the link. You can't share it on YouTube. You're going
[253:42.72] to have to go on YouTube filters out links. You might have to share it on Twitch if you can get in there.
[253:58.48] I'm missing the link. Um, but yeah, I mean,
[254:02.16] just trying to see if
[254:18.00] uh, memes are great.
[254:27.44] Uh,
[254:31.68] it, there's a lot of confusion here to say the least. I think a lot of people are just going to be like,
[254:39.60] I can keep on using React query. Um,
[254:44.40] which is good because
[254:51.44] JavaScript is a place where promise made isn't a promise cap.
[255:02.32] Oh, you all are too good. Um,
[255:04.80] UseEffect is a great example in an API that sounds so good in theory, but it, oh boy, when you see how
[255:12.88] people need practice. I claim synchronizing an imperative and declarative system is just hard,
[255:16.16] regardless of API. UseEffect is actually one of the better ones. And I agree. I don't, I think people give
[255:20.64] UseEffect a bad, you know, like it's unfair. It's actually quite reasonable. Um,
[255:30.64] you state your dependencies, you run the function. Um, I think the problem,
[255:35.84] and I think we all acknowledge this is that UseEffect is used
[255:38.80] way too much. And I've thought about this a lot because I've been trying to push solid more and more
[255:48.16] into a derivation only, um, system with solid 2.0. I wanted to get rid of a lot of the synchronization
[255:55.12] pieces because they are less predictable. And in a sense, react doesn't worry about this as much,
[256:01.28] uh, initially because like their whole components are derived, you know, you put some state in,
[256:06.00] you get to UX out. So they, they, they, I don't think they often think about it completely in the
[256:12.88] same way, especially core team might think about it, but the react developers themselves don't always.
[256:18.56] Um, and even like, I say synchronization is easier to think about. It's more like,
[256:24.80] it's easier to like pseudo code out. Derivation requires you to think about all the implications
[256:30.48] of the system that could drive this value. So, so people like, when people have like two pieces of
[256:35.28] state, they're like, Oh, I have this thing and this is based on this. They'll just take the one value and
[256:40.16] write it to the other value. And then if it, something else could change it, they write to it there. And they
[256:44.16] write to it there where in some cases it should be more like a switch. It should be like, this is derived
[256:49.28] from this and this and this, and this condition, it prevents you from writing duplicate logic at the
[256:55.36] writing points. And let's be more traceable about what's going on. And it's funny though, because react
[257:05.68] components don't like the whole thing. It's just like a giant derived value. They don't care as much.
[257:10.56] There was an article a little while back. I remember I did with, uh, uh, I had a chat where it was, uh,
[257:17.04] what was it? Um, 10 years later. Yeah. Uh, with, um, with Mr. Abramoff here in the chat,
[257:27.12] where he comes up with some crazy example about how to like, take some react code. That's like,
[257:38.56] I don't know how the condition in it and take some data and does all this stuff to it. And he's like,
[257:44.16] if I needed to do this and solid, this never updates, blah, blah, blah. So you write it like,
[257:50.16] you know, functions. Right. And then, but then he's like, tries to refactor it and he shows that,
[257:56.24] you know, he can just change the sense, but he's like, how do I do this in solid, but duplicate this
[258:00.40] logic here and do all this and do this. And it, the problem is, I mean, it's his fault for choosing
[258:06.72] the example, but he kind of goes on and explains like how complicated this thing is because we actually
[258:13.04] can just write this code. And, and I was like, where, where's my edit? I got to a point at the end,
[258:20.88] where I was like, I was like, why wouldn't you just write it like this? Now to be fair and solid,
[258:36.56] these should be wrapped in functions. I was just trying to give him the reacting. This count as this,
[258:42.00] headings, this, this, even with his refactor is way cleaner than whatever the hell like this is doing
[258:54.40] again. Right. Like, like, I know that it took me a minute to figure out what the, like, how to write
[259:07.20] it like this. But in the end, this is way better code than like the, the final react version that he
[259:16.40] wrote. Because like, as you drive data and resort and resync, you find things like end up deduping
[259:28.00] or bubbling down into the most primitive parts. And it's almost like a math equation that you're solving
[259:32.80] with your code as you actually whittle it down. But if you, it's a lot easier to start in the
[259:41.20] expanded form as you're trying to figure out what you're actually doing.
[259:44.64] Early returns are naturally due when new feature on top of this code, because then you just, you just
[259:55.60] keep on appending or adding stuff without actually understanding what it's doing, which is good.
[259:59.84] Hopefully your components are small enough that you can reason about it. But over time,
[260:03.84] no one wants to break a component apart. There's, there's lots of reasons we get here. It was just
[260:10.56] interesting to me. Um, because yes, it's just a lot easier to kind of write this more imperative logic.
[260:19.12] It's a reason why reactivity looks the way it does. Um, even, uh, someone asked us, Steve Sanderson,
[260:25.76] like, why knockout, like, it's like the code inside the effects or memos or whatever looked
[260:32.00] like imperative compared to like, like RxJS or something like piping streams. And he's like,
[260:36.64] honestly, people like at a certain point, you get to a point where like people think in imperative
[260:43.52] instructions and like the, the, the, the overhead of trying to wire everything becomes too much.
[260:51.44] So like, I get the argument. It was just at a, to, to a certain degree, um,
[261:01.04] like it's what's the granularity is the component, the right granularity, or is this
[261:08.80] specific value, the right granularity. I tend to on the side of reactivity figure that you can derive
[261:14.56] stuff at a, at a value level, um, rather than at a component level. It's a, it's a slight difference,
[261:20.56] but it, it changes things as, uh, Dan explained between what we call control flow versus data flow.
[261:28.48] Control flow has like if statements in the actual, like an early returns in the actual code where data flow,
[261:35.52] everything flows into data, like into variables, right?
[261:44.56] So there is this mismatch that being said, when you like, this could easily be cleaner react code too,
[261:53.52] right? Like picture, if this was your react code, it's much nicer than what Dan had been writing.
[262:00.88] I think that, uh, sorry, where is it? This one. I think though, that we don't lean that way,
[262:09.28] but I was arguing that I think the lack of derived async or derived from props is first
[262:14.32] class citizens in the post hooks world is what got us here. Um, which is interesting. He's,
[262:20.40] Sophie's what do you mean? So I give a couple of examples. What, why does everyone like react query?
[262:25.12] Well, it's because it's an async memo, right? It's a, what did I call it? In a sense,
[262:32.56] this is an async use memo where you put the depths array first. Here's your depth array. I mean,
[262:37.76] this is static string, but, and then here is your, your function, your memo function,
[262:44.40] and then here is your result. There you go. Async memo. Um,
[262:47.76] it no longer feels like synchronization. It doesn't matter what's inside on the outside.
[262:55.28] You just have something derived. You have an input, you know, maybe this fetch a user with an ID or
[263:01.44] or something, this ID, right? So you have an input and you have an output it's derived.
[263:15.52] The other one is sync from props, right? Um, it's funny cause a, a CD light actually, uh,
[263:23.76] Andrew Clark suggested this, but it was basically you have, you have, um, if you ever had like temporary
[263:33.20] state, like maybe, you know, like controlled thing or like a component where the state reset is happens
[263:38.80] when props change. So from above something can change, but you're overriding it temporarily
[263:43.04] until you save it. This happens like, you know, almost with optimistic updates. An example of this
[263:48.48] sometimes there, you know, where you have some client state you're editing. And then when you click
[263:54.00] save or you click out, it saves and actually pushes it back to the parent and pushes it back down again.
[264:00.00] If you write a component in react like this, where prop state, this only gets grabbed the first time as
[264:09.28] state updates, this does not update. This only happens originally, initially, and you can't put a use
[264:17.12] state inside a memo. You can't nest hooks. So your only answer, most people think the answer here is you,
[264:23.04] you cause you call use effect. Like, let me actually open a playground to show exactly what I'm talking about
[264:29.36] here. Right. I'm not, we don't need to make this render or anything. Let's just pretend that we have
[264:39.76] props coming in to our counter and you go const. Um, let's go, I'm going to use react syntax. Doesn't
[264:52.00] really matter. So I'm going to get rid of this. Going to get rid of this. Okay. So let's, let's
[264:58.96] not make it a counter. Let's make it a name thing. Okay. And then we're going to say, um, name set name
[265:06.16] equals use state props dot name. Now you might have an input in here
[265:16.48] where you're doing some stuff temporarily. You're updating, you're overriding the name. So you might be
[265:24.48] like, like on change equals, you know, something along the lines of like set name.
[265:32.80] Um, I don't know. E dot target dot value, whatever. And then
[265:41.68] I don't know. The component's name is probably not the greatest. It doesn't really matter. But
[265:51.20] what I'm trying to get at is maybe you also have like, uh, a button here. That's like,
[265:57.20] I'm just making an example. It doesn't really matter. Um,
[266:05.84] what it, what it is, but let's pretend that on click, we call like props dot on save
[266:19.20] our name or whatever. Right. Perfectly reasonable scenario where like, basically you have a projection
[266:32.00] of the state and you can save it back up, which shoots it back up a level and might update this.
[266:38.40] But the thing is you there's, if you want the, this to reset, what most people do is they go use effect
[266:52.00] set name, um, props dot name, props dot name. There we go. Synchronization done. So whenever props and names changes,
[267:07.36] we can also override from above. I feel like this is one of the most common,
[267:14.16] like variations on this is the other super common scenario where people use, use effects that are
[267:20.40] unnecessary. ACD light suggested he's like, wouldn't it be cool if I think nearly all use cases can be
[267:26.16] replaced by initial argument to use state that acts like get drive state from props. Use state value,
[267:30.56] previous min, max value, previous. So they had this idea of basically making it so that, um,
[267:49.28] like I forget the exact example, but they're doing something pretty crazy here where they're like using
[267:53.60] a ref and a memo and then like,
[267:55.20] there's lots of variations of these kinds of problems, but like it's, it is definitely kind of interesting
[268:10.64] that like the idea of state synchronization. Like this is the only top level access of props or like
[268:18.64] thing that doesn't actually, um, cause the thing to be recreated.
[268:26.56] just, just on a side, I thought that was kind of interesting where like this array is top level.
[268:30.40] This use effect is actually nested in a function. So would be a use memo or whatever, but this top
[268:35.68] level changes every time, but you state just ignores this every time the component re-renders.
[268:41.20] So the answer to, to how to solve this is key, the component from above to say it's keyed on props.name
[268:50.40] that way, whenever props.name works, like you, you can do something like this. You can go, you can above
[268:57.04] have something like key. And then it can be like your name state or whatever. That's one way you can do it.
[269:05.76] I also have to pass in, um, name equals name or whatever. So this is one way of doing it. You got
[269:12.40] a key prop. Another way to solve this problem is to, um, and what react actually, it does like an extra
[269:23.76] half render, but it's worth it is you can go like if props dot name, not, not equal name,
[269:34.16] set props. You can do this. Um, those are better than using effect. Um, because like effect is too
[269:47.44] late. It finishes rendering and then it applies it and then does a whole nother render. This at least
[269:53.04] knows to bail out before it actually does any of the real work. It like can, it runs it, but then it goes,
[269:59.68] okay, I'm going to run it again, but I'm not going to bother diffing and patching and doing the whole
[270:06.16] thing. It's like, it runs the component, but it doesn't actually like go in and process the child
[270:11.52] components or continues. It just runs this body, creates this JSX and then runs again because like
[270:19.12] when it goes to like finish up, like wrap up, it goes, oh, um, in the process of rendering,
[270:24.08] our state has changed again. So we need to run it again. Um, according to their official docs,
[270:33.84] this is better than using use effect.
[270:37.60] but I think you're starting to get to my point here is that if both are addressed, the need for
[270:45.52] use effect largely disappears. Although people might still reach for it because when faced with
[270:50.08] how to make something update, they find synchronization still their first like approach. Um,
[270:58.56] but let's, to answer your question here, here from the official
[271:04.56] here's from the official react docs.
[271:10.88] I love how much, you know, react when the react, that's, I mean, it's because I'm interested. I
[271:20.48] I couldn't make solid what it is if I didn't understand how react works, right? How do you,
[271:27.44] and I don't mean specifically, um, focusing on just react, but how do you make things better if you
[271:37.36] don't know what the problems are, right? Um, so yeah, here's, here, here's, here's our exact scenario again.
[271:50.72] Set selection null, avoid. See, whenever items changes from the above, they want to set the
[271:56.16] selection to null. This is, this is what people do.
[271:59.92] This too is not ideal. Every time the items change, okay, do they have the key prop example? Yeah,
[272:08.96] here, key user ID. Yeah, we talked about this, right? Right. The list will render with the selection
[272:15.68] value at first, then it will update the DOM and effects, and then finally do it again. Start by
[272:19.60] deleting the effect. Instead, adjust the state directly during render. See, they,
[272:23.76] yeah, see, there you go. They made another state variable that stores the previous state,
[272:32.80] previous items, set previous items, and then, yeah, I don't know if my example needed, sometimes,
[272:41.12] like, this is the hardest part for me to reason about react sometimes, is like, like,
[272:47.04] when you get there, you're fine, but I don't work in an everyday. I think actual react devs would be,
[272:50.96] like, more clear on why this needs to be another state variable, why you can't read just the value
[272:55.04] from items. I guess you don't have the previous value. No, but you do have the, oh no, in this case,
[272:59.92] you don't. In my example, I had the previous value because technically I was setting it into my own
[273:04.32] state. So yes, set the state. If items don't equal previous items, set the items this. This is
[273:10.08] exactly what we did. This is rendering during. And this pattern is more efficient than effects. Most
[273:16.16] components shouldn't need it, no matter how you do it. So they're like, derive. Don't set state,
[273:23.04] just derive. Get the selection by deriving. Right? And this is the proper, but do you see the parallel
[273:34.08] between where we started and const const const? Does this not look just like my conversation with Dan
[273:43.84] Abramoff where we started with his final version like this and I rewrote it to const const const?
[274:01.12] Like it's, it's interesting, right? Cause the react team and the react compiler and this whole thing
[274:09.52] will fight to the death to make sure that you can write code that looks like this.
[274:14.80] They, they will, they will make sure, you know, that you're right to write. Sorry,
[274:22.32] I should have zoomed in earlier code that looks like this, um, is preserved. Sorry. Let's make it even bigger.
[274:30.24] Um, not that person, right? That they will make sure that you can write this code, but the reality is
[274:41.36] you should have written this code in the first place.
[274:59.36] I'm not going to write this code in the first place. I'm going to write this code in the first place.
[275:02.00] I'm going to write this code in the first place. I'm going to write this code in the first place.
[275:03.20] I'm going to write this code in the first place. I'm going to write this code in the first place.
[275:04.40] I'm going to write this code in the first place. I'm going to write this code in the first place.
[275:04.96] I'm going to write this code in the first place. I'm going to write this code in the first place.
[275:05.84] I'm going to write this code in the first place. I'm going to write this code in the first place.
[275:07.84] the derived version can't write. Yeah. I mean, this, this is, this is kind of going back to devs comment
[275:17.20] because once your code looks like this, the difference between solid and react is whether
[275:24.32] or not, this is in a function wrapper. You add the little thunk here and the code that is exactly the
[275:33.76] same, just runs way more optimally. Right? Like that, that's what always confused me. Cause when I
[275:41.52] looked at react, this is the problem. Someone who writes signals and then goes to react like me,
[275:46.88] they, they, they, they just go, okay, well, like they already write their code like this. This is
[275:52.80] how you write your code. You think this way. So when you go to react, you're like, okay, use memo,
[275:58.00] like you might overuse use memo, but you already write your code this way. So like the most optimal
[276:06.32] cleanest way to write the code is how you already do it. So it's like, it's very hard sometimes when
[276:11.60] I look at react code, cause I'm just like, what the are you doing? Um, but I have years of training
[276:17.44] myself to write code this way. Um, so yeah. Is there a nice way to solve this? Well, that's a good question.
[276:38.40] I, I, I had, I had a, I, this is, this is my current, this is my current solution in for solid 2.0
[276:57.84] Done.
[277:08.08] is that a nice solution. I'm missing parentheses. I'm sorry. I, I mean, that's, there are times.
[277:34.24] No, no, no, no. I've actually already made this primitive. It's, it actually, what creates,
[277:41.36] what I do is if it's a function, that's the argument and functions are already a little bit weird,
[277:46.56] right? Cause you have to call function to the function center.
[277:48.32] Yeah. This updates on prop change because it is a function.
[278:00.72] This does not because you just initially applies it with a value. That's, that's where I'm sitting
[278:05.60] right now. There might be argument for the handle this differently, but this is just where I'm sitting
[278:10.72] right now because the way you implement this more or less is you wrap, uh, I mean,
[278:22.56] X. Let's go to GitHub. I've kind of already implemented this. Solid, no, we'll just go here
[278:31.76] for a second and then we'll go here. We'll go here and we'll go to signals. I haven't touched
[278:39.76] it this week. And let's go to render effects branch, source. It's just, it's so easy to see
[278:52.16] that it's, it's probably not index. It's a signals TS. Here it is. If type first equals function memo,
[279:04.88] create memo. Okay. Yeah. There's some internal stuff here. I can, I can, I can, I can show you what
[279:15.76] this code means though pretty easily. I can write this in solid today without using internal stuff.
[279:20.32] Give me two seconds. So.
[279:33.04] Um, yeah. What's the first argument? It's the function.
[279:49.76] So it's like, yeah, I'm just, I'm trying to think of the, this is previous. This is the function.
[280:02.48] Don't, this is probably initial value.
[280:15.20] Don't, this is probably initial value.
[280:27.92] Let's make the simpler version. Let's not worry about the, let's not worry about that. Let's just do this.
[280:33.12] Remove this options. Okay. Do, do, do, do, do, do, do.
[280:45.84] Okay.
[280:49.84] Actually, I don't even need this. Sorry.
[281:10.56] I'm, I'm, I'm, I'm like overdoing it. Okay. Sorry. A lot of the code just like disappears.
[281:23.28] If you understand what I'm doing here.
[281:23.28] Previous, previous, uh, it doesn't really matter. Just, we're not going to worry about the untrack.
[281:31.60] We're just going to, I'm just, I'm just, I'm simplifying it a little bit,
[281:36.00] but essentially the idea is, and then we can get rid of this. It's just, okay.
[281:45.84] It it's a memo of a signal. Yeah, here we go. Hope this makes sense to you.
[281:53.68] It's a memo of a signal is the reason that this works. So it actually reads it. So
[282:05.04] like essentially the, in this way, whenever this changes, it's a little inefficient.
[282:13.28] It creates a new internal signal, but because the read out here reads the memo
[282:22.24] the first place gets the signal or rights to it. It means that every time the props change,
[282:29.44] you create a new signal. It's basically nested. And then every time you internally change it, you just
[282:34.00] use that signal internally until the props change again and replace it with, with signals. It's like a
[282:39.04] higher order signal or something essentially. Like mechanically, this is better than an effect because
[282:45.76] we know the dependencies. Problem with an effect is you break the dependency link. It's not derived.
[282:52.88] Like you, you write to it, but you have no clue what it depends on. The difference is this,
[282:59.84] I mean, we're not using name anywhere. That's the most ironic thing about this example.
[283:03.04] Like whatever this signal here for name knows that it depends on
[283:11.04] props.name because it reads from the memo as part of its accessor. So it knows that when we
[283:23.36] update props.name, it goes, okay, what could have changed and it gets all the way down to this render
[283:29.28] effect. And then it goes, okay, I'm going to see if it's actually changed and I'm going to execute it.
[283:34.16] And then it's going to go, okay, blah, blah, blah. Evaluate this. And then, you know, in the render
[283:39.92] effect and do the pinpoint update. It actually, like the problem with the effect is it doesn't know you run
[283:46.96] the effect and then it like you, you could, let's say you did a change that like, let's say props.name
[283:52.72] is used directly. Like whoever passed it in uses it directly somewhere else. What would happen is if
[283:59.36] you updated it, it would update the dom in the one place, trigger the effect. The effect would call set
[284:06.96] signal and tell it to go, okay, now you notify. And now you do it. It does it in two passes. Same as react.
[284:14.00] We don't re-render whole components, but you, you do a double cycle, right? You do, you basically run
[284:20.24] everything like all the fine-grained updates, and then you run all the fine-grained updates on that.
[284:24.88] Not a big deal because they're fine-grained. You don't have to re-render any components,
[284:27.76] but this approach does it in a single pass because it's derived.
[284:42.96] It's confusing. It's, it's, line 15 is, I mean, fine. Let me remove, I'm going to make this even
[284:55.28] easier. I'm going to get rid of the previous value. Um,
[285:04.72] Okay. Yeah. Yeah. Yeah. We pretend this is function create memo signal or something. I, I, this is just a
[285:11.52] mode switch, but it would be like this. Sorry. I, I basically took part of, of, of, of create signal here.
[285:26.72] See now this return statement is crazy, but it's, it's, this is the read side of the tuple.
[285:40.80] And this is the r, the right side.
[285:42.88] Right. So I'm just returning the array. I love the way this composes, right?
[285:51.28] Basically make a, uh, computed or a memo of signal. Um, and then I, I just decided that like,
[285:59.04] at that point I was like, why don't we just build this in? Because when I'm creating state
[286:02.32] in a component, most of the time I'm just gonna set the initial value. But occasionally I might be like,
[286:08.00] yes, I'm creating state and don't get me wrong. If I build this, it'll be abused. People will use
[286:11.92] this where they shouldn't, they never need a setter and they should have just used a create memo or
[286:15.68] something. They don't need a, they just need a memo of a value. You don't need a memo of a signal of a
[286:20.24] value. But the fact that this is a pattern that you can just like, I mean, we could make this a special
[286:26.56] primitive, but then that's too much. You come in, you create some state and you're like, oh yeah. Okay.
[286:31.12] It's create signal, blah, blah, blah. And then you're like, why is this not updating? Well, it's freaking not
[286:35.36] reactive. So, you know, like in a sense, if you, I'm almost arguing that this should usually never be a
[286:48.40] thing. If you're, if like, this is fine, but if there's the potential of props changing,
[286:59.68] you probably should always wrap it, which is why I'm getting here, uh, by putting in the core
[287:05.12] primitive, it encourages people that when they actually get something reactive as a prop that
[287:10.00] they care about it changing in their component, they should wrap it rather than just set it in because
[287:15.36] like, that's what you do, right? Like think like I turned this off, but ESLint will complain about this.
[287:24.00] Reactive aerial prop name should be used within JSX to track scope like a create effect or inside
[287:28.00] event handler or else the changes will be ignored. Look at that ESLint warning go away.
[287:33.36] Right?
[287:45.20] You're getting to it. You're getting to it. It is possible. You just have to return to function to
[287:48.96] function, right? We already have this problem. I don't know if you're like, or concern in so in solid
[287:54.56] today, if you return, if you said, if you set it with a function, like, uh, let's pretend we do this,
[287:59.92] it doesn't make a reactive, but when you go to set name here and you pass function, it won't do what you
[288:05.68] think because we support this version, right? Like previous value pass in. So if you want to set a
[288:11.28] function, you have to actually always pass in a function to set the function. You have to use the
[288:17.20] function form always. And that's just the trade-off for us being able to do the, the, the, the self
[288:23.92] reflecting version. This is the same. If you want to set a function, you always have to set a function.
[288:30.72] And I, I, I did some code in here because you're like, oh, that's kind of sucks. You're creating
[288:35.44] these extra memos, but I did something really cool in create memo that you, you all might actually think
[288:40.56] is kind of cool. Um, when we create the memo, create the computation, this is creating a memo internal,
[288:47.28] right? The return value goes, if node read it, if node sources length, if not node sources length,
[288:57.52] node equals undefined return value. What this means is if you do a computation that reads from nothing
[289:04.80] reactive, let's say it's just a function or a string, it will, it, this is, this await is just a read.
[289:14.16] It's this has to do with async, but it will, if there's a node, it will read it and get the value.
[289:18.96] But if there is no sources, it will undefined itself and return the value. And because there's no sources,
[289:26.72] it can never update again. So the next time the function runs, it will go no undefined and just
[289:32.40] return value, which means this node here gets garbage collected, which means that
[289:38.56] essentially we free up the memory of the memo. If there's nothing reactive in it. Now,
[289:44.40] if I was really going further, we'd actually cache the memory for this and reuse it for the next node.
[289:50.56] I haven't implemented that yet. But the idea here is that memos that become or any reactive,
[289:56.08] I guess mostly memos, memos that become unreactive can free themselves.
[290:02.48] So the overhead is the API consideration of knowing you have to do this. But since we already do this,
[290:08.32] the stretch to doing this, it seems very small to me. It's actually makes it more consistent.
[290:12.96] Um, because right now today you do this and you still have to do this.
[290:20.16] This is actually kind of telling, I think, um, that being said, um, yeah. Uh, I, I, I, I'm just,
[290:34.08] as I said, I, this is just an example of one way one could solve this problem, but it shows that like
[290:39.20] between this, which is, this is our, our, um, our sync primitive and this
[290:53.04] create async, fetch user props dot name.
[291:01.92] Where's the effects?
[291:20.88] Right. This is an example of forcing people's hands a little bit, but I mean, there's one more level
[291:27.52] here. That's going to make people even want to use effects even less than solid. Um, which comes up
[291:32.72] in the chat. It's so funny. Um, uh, because I wasn't like trying to advertise this, but, uh, uh, where is
[291:40.64] it? Um, the last little bit of this one, um, where am I not in here?
[291:51.68] I think it, I guess it was this one.
[291:53.04] No. So like, this is always weird when you're like,
[291:58.64] yeah, okay, fine. Let's, let's go back. I'm going to go back to this thing.
[292:03.76] Of course, um, Dev comes in and goes, wait till you see what solid is cooking up.
[292:08.72] And I thought he was going to talk about this, which is freaking sweet.
[292:13.44] instead, instead what he does is show that we're looking at splitting the effects, um,
[292:22.00] like the front and the back end effects so that the reactive part is the tracking function in the
[292:25.52] front and then you do the effect in a separate thing.
[292:40.24] Yeah, you can do this too. That's even more optimal. Yeah, definitely.
[292:50.72] like you've skipped the intermediate. Well, I guess you're keeping an object, but yeah, whatever.
[292:54.96] But he actually highlights this, which people are like, what are you doing? It's dependency arrays.
[293:03.36] But the, the reason for this is pretty powerful. I've talked about it in separate streams. Um,
[293:09.44] but yeah, there's, there's, there's good reasons for this. Mostly that we know you shouldn't be
[293:21.92] reading from reactivity in this side. You should only read from it on, on this side. Um, ESLint for
[293:28.88] that might be a little bit more fun. Um, and we can run this side like in concurrent rendering and stuff.
[293:35.28] Um, getting back to my title tag problem, we could like calculate the titles here without worrying about
[293:41.76] people trying to like a setting it here. Like my problem before is render effects run too soon and
[293:46.88] effects run too late in this world effect and render effects are almost identical on the front half.
[293:53.28] They run soon, but the effect themselves, they just get sorted. You do the render effects
[293:57.68] before the effects. But the, the, the split is between these two functions. Um, essentially you
[294:03.36] can run all the, the stuff, know if it's async, know if you have to suspend even for effects for the user
[294:10.56] before running any effects. This is a kind of a shortcoming we haven't solved today. And the reason why
[294:15.04] I realized I was in, I was in the middle of making, uh, an example for, uh, what's that thing? Uh,
[294:21.36] for the meta tag, I was working on it and I, I, I switched between pages and I saw undefined profile and
[294:27.92] I was like, damn it. And I realized immediately what my problem was. It was because the render effect,
[294:34.72] which was doing us good work on the server in the client was causing us to, um,
[294:42.16] even though that section of the UI suspended the render effects on creation always run so that you
[294:47.84] can render the page and this side effect was there. And the problem is if I made it into an effect,
[294:53.68] which would delay it and make it, you know, function properly, which update the title
[294:58.24] until it actually had the data, it wouldn't also read the async thing. So it wouldn't know it had to
[295:04.88] wait. So I found one of the first pretty late in the cycle places where I really have been punished
[295:14.48] by not splitting the effects, um, in current solid, but in any case, um, there's a lot of interesting
[295:21.92] implications that come with splitting like this, because you can say you can never write in the tracking
[295:27.20] scope, right? Cause right now in creative fact, someone can write and you it's legit, but you can
[295:32.64] say is you can only call set state in here in memos, in whatever you cannot write here. You can only
[295:37.28] write on this side. Um, the separation makes things incredibly clean. I know people aren't going to
[295:45.44] like this though. So this might even discourage them further from, so they go from being able to write like,
[295:53.12] uh, where did he write it? They go from being able to write stuff like this, which is easy using effects
[295:59.60] obviously, um, to, to being able to, to having to write something like this, I guess you can, you can skip
[296:06.96] the function, you just go his, which is original one right here. You can, because it is a function, you can
[296:12.00] go create effect count, console log count. Um, how does this work with multiple times? Well, you, you can just
[296:20.72] put in it, you generally like
[296:30.48] like an easy way to do it. Like an easy way to do it would be an array. A, B, C. You could also make it an
[296:37.52] object. Maybe. The biggest reason is you want to be able to, I know this is not convenient. Don't get me
[296:47.12] wrong. This is less convenient. I understand why this is less convenient, but A, B, C.
[296:57.20] the biggest point here is you actually want to pass the stuff from the front half to the back half.
[297:03.04] React doesn't give you this stuff, which was crazy to me because this gives us the ability to keep this
[297:10.80] within the concurrency. Like basically solid has the ability to call this function with whatever it needs
[297:16.24] to. Stuff you close over has this problem with concurrency that like it, you can be reading old
[297:22.32] versions or stale versions depending on what version of the thing you're making, but this we can ensure
[297:29.44] that the right version gets passed to you here, right? Because it's being fed through. Um, and the
[297:38.16] benefit as I said of doing the pass-through approach, um, is that you actually never need to read anything
[297:44.16] reactive on this side in theory, which means that stuff like strict mode that I haven't got into yet.
[297:52.08] Um, you know, I did on that stream. It's possible if we really wanted to get into like strict mode
[297:56.08] conversations where we're saying like error, if people try and access reactivity at top level and
[298:01.60] components or in set timeouts or places that won't track, tell them that they're doing something wrong,
[298:06.16] at least warn them. This is another thing in that category. Um, as I said, we can protect rights to
[298:12.48] make people, to try and prevent people from writing on this side. We can, we can prevent reads on this
[298:17.28] side. So like this is, I get it. It's more, it's not a good API. It's not one that like from the perspective
[298:24.16] of like people are happy to use, but it's exactly what it needs to be. And I'm, my hope is that you
[298:33.28] just don't it. Why reach for this when you can do this create resource with transitions at the
[298:48.56] stale sailors, right? Unless using function armies passed to the fetcher. Yeah. I mean,
[298:55.68] create resource is actually a lot of similar. He's on the split, right? You have the tracking scope,
[299:00.96] um, create resource runs at render effect time. Like it's on the pure half of it. So like,
[299:08.56] yeah, I mean, I've known about this gap in solid since I came up with our async system. I,
[299:18.32] I've been, this is something I've wanted to address for like five years. It just, you,
[299:21.52] you, everyone wanted a meta framework.
[299:23.44] Yeah. Like how, how would you do this with an array? You would just go.
[299:32.96] Yeah. I mean, you just go a, yeah, arrays are easy. C and then a, b, c done. Right. That works.
[299:48.08] Yeah. How would you create a signal if you didn't want it to update?
[299:56.88] My idea on strict mode is that the way to opt out is out of stuff is to just to explicitly call
[300:06.40] untrack. I know this is not the happiest thing in the world, but I'm actually thinking that the
[300:14.40] injection of the strict mode stuff is untrack. So in a sense, untrack is, has the option of having like
[300:22.32] should error, you know, like as a second prop or something. And generally speaking by default,
[300:27.44] untracking is not should error. So it overrides the parent context. Like if the component was untracked,
[300:34.24] which it does with should error you calling untrack with a default way with it shouldn't error will cause
[300:41.44] it to work fine. And then from that perspective, um, like you, you always have the ability to,
[300:50.72] to opt out of this behavior, the problem then is you, and it's the same problem I have with on
[301:06.00] these are functions. That's fine. Let's do, let's do this props dot a props dot b props dot c. I,
[301:19.20] so the only reason I mentioned this one is because this is one of my biggest pet peeves with on is this
[301:26.48] works. This will never work. You actually have to change it to
[301:32.88] second problem with this is as the framework code side of things. Now I have to write something that
[301:49.28] iterates over the arrays and handles all this stuff. Whereas funnily enough, and you look at the on code,
[301:56.16] the, all the code for on is, is basically this funnily enough. If I just did this,
[302:00.24] I just call the function and pass it through. I literally like, there's no additional iteration.
[302:06.32] Right. This is, I, I know, uh, view does it on like a few others like to it.
[302:17.60] I, I, assuming that something is a signal or a function signature here, like as a list is not,
[302:23.44] yeah, I'm, I'm not, yeah, I'm, this is like, it's just simpler. It's not necessarily easier, but it's just way simpler.
[302:46.16] I'm not saying we have one. It was just something I was thinking about every, ever since that conversation
[302:50.56] about the, the dev signals versus signals thing and the whole like crazy, like, where was it? There, there,
[302:58.32] there's, there's a whole bunch of stuff in this article. Um, Devin Gavitt's thing, you know, basically
[303:06.40] ever since this, we have ES Lint warning, but there's been a question like, should we just like,
[303:12.08] be real jerks about it? It seems like, I don't know where we sit. When Rust was getting popular,
[303:17.52] people were kind of like, you know, just break, just shout at people, tell them they're doing something
[303:24.16] wrong. You know, it's, it's like the extension of the TypeScript thing. We're getting kind of back in a more
[303:30.56] middle ground zone, but yeah, I mean, there's a real temptation to just be like, nope. If you want to
[303:36.88] do this, you have to like untrack it explicitly. I have a whole stream on this by the way. Um,
[303:48.72] um, sorry, my headphones jam up here. Uh, what, how long ago did I do this due to two years ago? No,
[303:58.16] where was it? It was, it was around 1.7, wasn't it? Yeah. Yeah. Strict mode. It's yeah.
[304:17.76] Not easier, but simpler. What does that mean? It means less moving parts. Um, honestly, I, I, I,
[304:24.32] this is like one of react's core core tenants and it's one of solid core core tenants. And it's
[304:30.24] something that I don't know if is as like, I, I don't think it's one of views core tenants.
[304:37.04] For example, when I was talking about the difference in the philosophy, um,
[304:40.96] I've talked about this before on stream, but simple versus easy.
[304:46.80] simple means uncomplicated, easily understood. It's funny when you use easy,
[304:54.00] not, or not come to deal with easy means not hard or difficult to do.
[304:57.68] I've like written my own definitions about this before. Um, but if you just Google it,
[305:04.16] that you're going to see tons of people talk about simple versus easy.
[305:09.92] I'm hoping I, the effects API is an interesting one. I understand there's very good reason for it. It is
[305:24.08] actually like react. Um, in a sense, like we're ending adding back the dependency array, but
[305:39.28] the implications of this and the implications of stuff like this, I think I I'm, I'm excited for 2.0
[305:54.32] because I think this might be when we finally really step out of the shadow. It's a scary proposition.
[306:00.48] It's just so funny because I I've told people this before, like we had signals before hooks.
[306:05.68] I did get this, um, this API from react and I would do it again. It had nothing to do with trying to
[306:13.44] like match API reacts APIs. I did not care about matching reacts APIs at the time. It's worked
[306:18.48] well for us. Um, I picked JSX because it was available. I did this because it's the right thing
[306:23.84] to do. Um, it hadn't, you know, it wasn't because I was like, oh, it looks like react.
[306:28.08] So like, you know, there's, it's funny because there's been times that we've also made decisions
[306:35.52] different than react. And then they ended up coming around like the argument order for use transition.
[306:40.24] Um, but I think maybe with this work towards primitives like this, we actually, the way you
[306:50.08] write code might get, you know, you know, might change a bit more. And I know people like the migration
[307:00.24] story, but I think when you take something that looked like that example, you know, um,
[307:08.88] you know, like one of these examples that we saw up here and just like literally just go like,
[307:13.44] like, well, like what would this one become you state
[307:20.56] arrow function items or
[307:32.96] Yeah. I don't even find, I don't know. They're assuming a bit in this, but yeah, basically you state.
[307:38.96] Yeah. This one's an interesting one, isn't it? Cause you take the previous. Yeah.
[307:56.48] Why wrap this signal rather than an option, second option, second parameter. Are you talking about
[308:01.20] for the, uh, for the crate signal stuff here? Um, it's debatable. The one thing that I liked about
[308:11.12] this, cause you can still pass initial value is what I'm thinking is that all the, like this has the
[308:16.56] same signature as great memo essentially like, Oh, on track. Well,
[308:22.64] you could, but again, this is like now on track true
[308:34.24] or is that, um, I, I'm not quite sure what I'm fun. It just, all of these are like, like, I hate
[308:51.84] configuration objects. If you can tell, uh, you know, like it's funny. There's places where it belongs and
[309:03.76] like a perfect example is like a react query went from being like this, like split to like being an
[309:11.04] object where you have function and stuff. And as you get more options, you do need to go down that path
[309:16.32] where you have options objects and all our primitives actually have options objects, but I'm very much still
[309:21.20] of the mind of like the primary thing should just be an argument rather than just big options. It's just verbose
[309:27.20] the stuff out. I know it's, it's completely an aesthetic style thing, but I like when the simple
[309:33.28] code is incredibly clear. Um, and I know you get more labeling and stuff with, you know, if you go,
[309:41.84] you know, like, why don't we do this function, this, you know, name this,
[309:49.20] there's just, I, there's something, there's just something about this that just always sits with me
[309:58.16] wrong. I don't, yeah. Yeah. I mean, but then you have to, well, first of all, you need to wrap the
[310:09.12] props, not name in a function because otherwise it won't be able to untrack it. So you have to put in the
[310:12.40] scope. Um, this like, like you, you can't just put untrack to it. It still needs to be a function that
[310:19.28] a further execution. Secondly, the untrack true, like now, what am I doing? I'm looking at an option
[310:26.32] argument to then put an additional conditional, like, I guess it makes your life easier, but it
[310:32.80] makes the library code bigger, which means that everyone pays the price. I don't like
[310:38.08] if it was the primary, if it was the 80 or 90% use case, I would consider it. But if it's,
[310:48.96] if we are thinking that this is like the 10% use case, the times you want to untrack when doing this,
[310:55.44] it's not worth the convenience for the, like the, the fiddliness of like more conditions and more
[311:02.16] checks. That's just like my perspective on things. Right. Right. Discoverability through types. Um,
[311:11.28] although the be fair, you don't need discoverability through types. I don't think when literally like
[311:20.88] it takes a function, um, I mean, you see, I just said, I think there's a, I think this is one of my
[311:29.44] challenges is because I liked JavaScript because it didn't have types. That's like, was my favorite
[311:34.32] part about JavaScript. I, I, I worked on type languages in the past. I, I only really got to go back into
[311:42.40] JavaScript. Um, you know, a certain chunk into, into my career. I was doing backend before then. Um,
[311:50.08] it's, it's, I, I, I think sometimes like with the most type kind of stuff, I just, it doesn't sit with
[311:58.72] me quite as nicely because I got to a point where everything was clean and didn't have all that noise.
[312:05.20] So it's like, it's, it's, it's, it's tricky to convince me to do anything for typescript safe.
[312:11.44] That would get in the way of the elegance of not, of when types aren't there.
[312:16.40] This assumes it's an object, but it could be any function. Um,
[312:30.16] this would work if props was a signal, but I mean, because if it's a proxy or a getter type thing,
[312:37.84] you would have to basically unwrap all the accessors on it. Um,
[312:48.48] so you'd be accessing, I think every property in, at least in the property description.
[312:59.84] It's a DHH pill. I mean, okay. I was a coffee script developer. So in a sense, you know, I,
[313:06.80] I thought Ruby was probably pretty elegant. Um, but yeah, I mean, I'm just one of those people who
[313:12.32] typescript has done nothing but get in my way since I started. Um, I, I, I, I've written articles
[313:21.20] about my experience with typescript. I think it's important. I think I, I done stuff like use server
[313:29.52] for inspired specifically for typescript, like server functions because of the importance of the
[313:36.24] contract, but like there's types, there's times that types work for you and there's times that types work
[313:44.16] against you. As long as you don't let the times that types work against you influence your decisions,
[313:50.32] then you're good. Types are different. They're for easiness, not for computer. They're, they're a super
[314:01.52] linter essentially. Right. And I think that's good except for when it would force you to actually
[314:10.72] like they're like, they're like also form a documentation. They're better than comments,
[314:14.08] but like, there's like a, there's a point at which
[314:19.44] and I, I mean, a classic example is using the functional form of show components and solid,
[314:28.88] like this form. Like this form show when user, this, this one,
[314:39.92] and the there's, this isn't like, well, this is a solid problem. Obviously it's not, uh, sorry. It's not,
[314:54.80] it's not completely like any JSX who tried to do this would have this problem.
[315:00.24] You have to do this because even though we know it's going to be there typescript from JSX can't,
[315:09.12] doesn't know this is an if statement. Like we just can't possibly know this. There's also the second
[315:13.76] problem of this being actually a function, which is not a deponent by definition. So again, typescript
[315:19.20] can't even know. So I did this forever and I like this. It's fine. But there are people who,
[315:28.00] I mean, I, we, we have this in solid. You can, you can do this and now you don't need to do this.
[315:36.64] There we go. Right.
[315:42.40] This is stupid, but I like, I, I get why like it, it brings more comfort. So like there's,
[315:53.60] there's, there's value to it, but like, this is, this is like,
[315:56.96] it's tricky when you're trying to design a system of things where you want to accomplish something,
[316:03.60] which bends the capability of the expectations of languaging, like putting JSX, which is literally a
[316:10.40] template language. It is not JavaScript. And then like have expectations for things to work
[316:16.40] properly. You have to pick one. And in the case they, uh, typescript picked react. Right.
[316:22.80] Or to be fair, it couldn't really pick anything else. Like how would it know what you're doing?
[316:28.00] You do this kind of pattern react all the time to a certain degree, you don't have functions,
[316:32.32] but like, there's just no way to know. Right. And it's, it's, it's, it's a tool that helps you. Um,
[316:46.08] it's just not, it's not. Yeah. You know, that, that's exactly what it is.
[316:59.84] April's though. I mean, we do already allow this
[317:02.64] people. Uh, yeah, I mean,
[317:10.72] like,
[317:15.60] I've had some amazing people work with me on the team and in the team on typescript solve stuff because of the
[317:27.36] challenges we face, like trying to bring signals in, you know, and doing this stuff.
[317:31.52] If, if you have ideas, probably I'm not the right person to talk to about them because
[317:37.36] I don't actually get it.
[317:38.80] Yeah. Right. I mean, this is, again, we're talking about how can you take good UX and get to good DX.
[317:49.28] we make concessions for types. Um, definitely. That being said, I, I've, I've never had a problem
[317:54.96] with an API that just takes a function as an argument.
[318:05.36] Anyway, regardless of my personal feelings on typescript, I think that, uh,
[318:12.24] yeah, I, I think that with, um,
[318:25.04] these mechanisms in place, it, it, it changes things significantly. I think in a sense that like
[318:32.24] even, uh, where was, I mean, even like if react had viewed things like this too, I think we might have
[318:42.00] had less, um,
[318:46.48] like at the time of hooks, I think we would have had less use effect as well. I think this is something
[318:51.28] that took time to realize like, and I think that it's hard when you know the framework at the level
[318:58.48] that the core team does and just can like see the patterns. I have this blinders as well. Like you just
[319:05.76] know that people are just going to do really unexpected and possibly dumb stuff. And as I said,
[319:12.24] understanding that largely is what makes Dan fight to the death here. Sorry, not this example, this example,
[319:22.08] uh, I'm letting you write code like this and then writing a compiler to try and optimize this for you.
[319:30.00] Um, to get results that aren't even quite as good as if you just written it like this. So, yeah.
[319:44.48] I think I'm going to call it a day. I think I covered everything that I wanted to cover. Um,
[319:55.12] I don't think I have any more bookmarks. Oh, I do have one more.
[320:00.16] I don't care though. It's just a Guillermo post about why CDNs don't work.
[320:06.72] Which is ironic coming from Vercel, but I think he's explaining why everyone should use PPR.
[320:18.88] He's right though, but streaming is the only way to get. Oh, man. Uh, no, I I'm over time. I I'll talk about
[320:28.00] I might talk about this next time
[320:30.88] Yeah, there's a lot of things that like I just I remember the it's gotten better, but like when I first built solid
[320:46.64] Um, there was like definitely I hit walls almost immediately with JSX and like you we had suggestions
[320:54.56] like can I make a div a div? Well, apparently not so easily and it's always going to be
[321:00.00] that kind of challenge. I'm happy where things are enough. The only thing I wish is that I could
[321:05.36] denote a function as being idipotent so that we could actually type check or like actually null check signals.
[321:12.56] But I'm sorry. I should have mentioned this because of our new working create async making non-nullable async
[321:18.96] the number of times you'll need to null check
[321:20.72] will reduce drastically in the future because sorry just oh two seconds
[321:27.60] This user
[321:33.92] in this example assuming that fetch user is always a promise of user installed 2.0 will always be user
[321:40.56] it will not be null user it will just be user which means that the need for the null checks will go
[321:47.28] down significantly because of the new way we're approaching async so I
[321:53.84] when I complain about this it's possible that your code will just look like this anyways and
[322:00.48] you won't like that's how you solve the problem you solve the problem by not making uh
[322:10.56] you know an extra wrapper function for everyone you solve the problem by getting rid of nulls
[322:15.60] um yeah
[322:17.60] anyway okay I am done
[322:33.60] I am done for real this time
[322:35.28] I can quickly see if there's anything more of the shout out on twitch
[322:40.56] I do not see anything more to shout out on twitch like on youtube if you haven't already
[322:44.96] otherwise thank you everyone for joining me today and uh yeah we'll just catch you all next time
