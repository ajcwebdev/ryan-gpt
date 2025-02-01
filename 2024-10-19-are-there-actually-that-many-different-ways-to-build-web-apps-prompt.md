---
showLink: "https://www.youtube.com/watch?v=ja4LIaxxUeA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Are There Actually That Many Different Ways to Build Web Apps?"
description: ""
publishDate: "2024-10-19"
coverImage: "https://i.ytimg.com/vi/ja4LIaxxUeA/maxresdefault.jpg"
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
[00:00.00] All right. Hello everyone. How are you doing today? You're right. I am late. Yeah, I wasn't
[00:24.40] sure I was going to do a stream today. But I got in one of those places where I was doing
[00:29.24] like a lot of writing and just thinking in general. The last stream was, you know, quite
[00:37.48] a stream, I have to admit. That one could have stayed with me for a few days kind of thinking
[00:43.68] about it. I think if we let it go, this web component conversation would carry on forever.
[00:53.28] And we got lots of other interesting stuff to talk about from my perspective.
[00:58.48] I guess the most interesting thing to me, like the kind of couple of revelations after
[01:06.04] the last stream was there was a comment about reporting performance issues to the browser
[01:14.52] teams. And I was like, I was like, kind of like, it seemed reasonable. So the one would be more
[01:21.54] expensive than the other. So I was like, I don't know, I just didn't really think of like, bugging
[01:27.10] them about that. And I thought of actually a good comparison in my mind. Can you picture
[01:33.10] picture? And I mean, I don't know if this happens, but do people go to like the react GitHub, and then
[01:38.66] like report performance issues and are like, I made this little thing here, it's slower in react, then it
[01:45.46] isn't svelte. That's a bug. Do people do that? Like, go go on Angular and be like, you know, this thing done
[01:55.14] in solid is faster. It's a bug. Right? It's interesting. I think performance as a source of bugs is one of those
[02:06.74] things that is tricky, right? I love when people report performance bugs to me, because then I have
[02:14.14] a chance to fix them. I'm not aware of them. I think a lot of times people actually doing the reporting
[02:17.72] are kind of like, is this a bug? Am I just doing something that's low? It's sort of like if there is
[02:25.38] no erroneous behavior, unless it's something that gets to like considerable extreme, most people will
[02:31.16] assume that performance is the baseline, not a bug, so to speak. It's just an interesting observation.
[02:39.72] How are we doing so far? People, people joining in here?
[02:52.04] Yeah, sorry, just getting a little couple things ready. I was, I was working on solids,
[03:01.08] start release and router release today, pretty much right up to the wire. I did a release like
[03:05.56] five minutes before I started the stream. You have to have a very deep knowledge of the framework to
[03:13.08] know if you should report slow performance. Yeah, it's tricky. And to be fair, that level of depth,
[03:20.52] I don't even think framework authors necessarily have on the browser side. I would say like
[03:31.80] people who implement the browser have that level of performance knowledge.
[03:35.72] Four of versus four let should be reported. Yeah, yeah, yeah.
[03:45.64] Anyways, people come say hi in the chat. Sorry, I was a little bit slow getting rolling today. Hi.
[03:58.04] Hey, performance must be not just the worse than others, but atrocious. Otherwise, well, whatever.
[04:07.56] Exactly. Ask AI. Yeah, it was just something I was thinking about. Because like, I was gonna put on the
[04:15.40] spot there. And it was, and it's, and it was true. I was like, they're like, why don't you report these
[04:19.32] things? And it's like, if some, you know, if something does more or less, you kind of like,
[04:25.16] do some amount of discretion on the platform. And everyone knows when you're being as like crazy about
[04:30.36] performance, you know, in benchmarks, as we sometimes get to when we're working on these tools,
[04:35.64] that something can be, you know, 20, 30% slower when you do it like a billion times in a row,
[04:43.48] you know, in the hot path. And like, it's okay. I mean, I'm sure people would not want to know to
[04:49.40] improve it, potentially, but then it's also like, it's not really a bug. Like, yeah.
[04:54.04] I'm glad I'm streaming too.
[05:03.16] Do you have a link to that?
[05:11.96] How much performance size difference I'll just the dropping is for other than that's
[05:18.12] what hardly anyone uses. Be fair. The size aspect, I would say is not huge. It's, it's shared zones,
[05:28.60] things like spreads, you know, things, things like, um,
[05:34.52] dynamic elements. There's a bunch in the compiler, but I don't care about the compiler. You know what
[05:41.72] I mean? Like, I think that's why you use the compiler. If the compiler is more complicated,
[05:45.08] if the compiler has more cases in it, like, so be it, you do it so that you don't have to ship that
[05:53.08] code. Um, where else would this be event delegation? I mean, I like that dislike disappears, but that's
[06:00.28] not again, like what, what are we talking about? You know, actual runtime code size is probably only
[06:09.56] maybe 300, 400 bytes, like maybe half a kilobyte. Well, I think it's a little less than that.
[06:19.56] Right. Um, I mean, for libraries that are trying to ship four kilobyte bundles, half a kilobyte is
[06:26.92] a lot, but, um, in the grand scheme of things, it's not much.
[06:33.16] You've been out of the loop. What's going on solid lately? Um, solid hack. That's probably been the
[06:41.96] biggest thing that's been going on. I I've been working away on a lot of prototypes, a lot of, um,
[06:47.64] you know, stabilizing solid start and whatnot. Um, but the, the hackathon actually is probably
[06:53.64] let me, let me just see if I can pull this up right now to hack solid JS.com and let me share my screen.
[07:08.76] um, as you can see here, there's still almost 27 days to get your submissions in. Um, so
[07:16.20] it's, there's 20,000 in prizes. The main prizes are 15,000 switched between the categories and challenges
[07:25.96] here. Um, see like the, I guess it's 12,000 for the main prizes. And then we have a whole bunch of
[07:31.88] these challenges that we do like on weekly basis for, you know, whoever fills them in,
[07:36.84] we just add more of them in for the bounties for like 500 to a thousand. We've had a few winners
[07:42.28] already. Um, it's, we're using this as not only a way to award excellence, but also admittedly as a
[07:51.00] way to, to help us fill some of those missing pieces. If there's something actually you're interested,
[07:55.32] I think we're, we might be a little bit tight on time. We might be doing one more drop on Monday.
[08:00.12] Um, I don't know if the, I need to double check with David, but if there's anything missing the
[08:04.44] solid ecosystem that you kind of want, um, this is a kind of nifty way to put a bounty on something.
[08:10.68] I feel like the only way weapons could be better performed is that they allowed you to ship
[08:18.20] plus JS and I'm pretty sure they don't. Yeah. This is the other, um, thing, right? I, I realized
[08:26.84] that on one side, the performance thing, but the other thing I stepped away with, I'm not sure if
[08:31.48] people realize that web components like don't do anything. Like, um, like from like a framework
[08:43.16] standpoint, there are things they do, but like when someone says, oh, I moved my app from react to web
[08:50.36] components, they're not saying anything. They're saying I moved my app from react to something that
[09:00.60] I'm wrapping up in an extra container that doesn't really do anything. You know what I mean? Like it
[09:05.72] doesn't explain the architecture. It doesn't explain like how the authoring is, how change progression
[09:12.12] works. It doesn't really explain anything. Um, it's a lot of times when there's like that argument
[09:18.68] and people are like, oh, Microsoft did this. And it's like, and they got, you know, excellent improvement.
[09:22.52] It's like, okay, the good starting point for conversation, but what did they actually do? Web components
[09:27.96] are like a wrapper. You know what I mean? Like go and make a solid component, make your web component
[09:34.12] by putting a solid element. It's just, you know, it's just an extra layer. So like
[09:41.72] it basically in itself does absolutely nothing to reduce JavaScript or do anything. It's just,
[09:48.68] it's just like a container. So I, I, I seeing these conversations, I think people don't get that. Um,
[09:56.68] like if I, and then that's part of that conflict. Cause when people are like, oh, um,
[10:01.72] I switched to web components. They are doing that same compared to framework
[10:07.80] or framework component thing that they're like, don't do that. Like it's because like,
[10:12.68] what does that even mean? You, what the answer is we switched to our in-house, you know, library,
[10:21.24] or we switched to using lit or something. That's, that's all it means. It's like, and is lit faster
[10:26.44] than react in a lot of cases. Yeah. You know, so, you know, it, it just means they changed their
[10:33.96] framework and added some extra wrapper for intro because they thought that was important, but that
[10:41.16] wrapper itself has no impact on things. Hey, let me pull it, this up on Twitch. I'm going to get Twitch
[10:49.88] going in my other window so I can see what's going on. See any of those subs come in, you know? Um,
[10:56.60] yeah, let me, let me see here. What do you got here for me?
[11:02.36] I'm excited. We're finally getting a couple of select on the web. However,
[11:08.68] it's Monday. I'm not sure. I'd like to hear your thoughts that there's some clone node conversation
[11:24.92] here. It means that it's a copy for a tree and clean. Oh, this is talking about the fact that clone
[11:34.36] node doesn't actually copy anything only like the, the actual attributes. Yeah. I remember this one
[11:41.80] I was using working on web components. Like you get an, you, you, the attribute, like the, all the
[11:47.72] like random JS properties you add to an element when you clone it, aren't there. Um, event listeners. Yeah.
[11:53.88] I mean, it's kind of fine because that's how everything else works, but yeah.
[12:04.68] The Dom is a funny and tricky place to be in general. Um,
[12:10.12] yeah.
[12:13.24] If the, if the broadcasters were in the forums, then I'd be able to watch them in translation
[12:28.60] of my native language. Thanks to capability and express. Interesting. Hmm. Yeah. I didn't realize
[12:34.36] the time impacted that I'm, I'm, I'm what I can do, but I don't know.
[12:39.32] Oh, nice.
[12:45.24] The successful someone has been solid all weeks. Big fan of this pre-fetched on link cover. Yeah. And we'd made a big
[12:52.92] improvement to link covering. Um, just the other day we noticed on iOS that, um, on the iOS, of course,
[13:01.08] you know, everything's a little different that, um, that, uh,
[13:06.04] that basically it was like slowing down navigation by like hundreds of milliseconds. And apparently on iOS
[13:13.64] on, um, um, in, I, I don't even think it matters which browser you use, but let's say Safari.
[13:19.56] If you go to click on a link and it has a mouse over on that element, it basically like runs some
[13:27.08] sort of animation or does some sort of thing. It actually delays the click. Like it, like you click
[13:31.24] it and then it's like takes 200 seconds for the, or milliseconds for the, for the route to change.
[13:36.92] So, um, we looked at SvelteKit and got the answer there and they, they use a mouse, uh, mouse, um,
[13:42.04] mouse move event that they cover the whole screen. They do it. I had to change my, uh, my approach.
[13:48.60] So it like, it fires more than it needs to. I did a little bit of optimization there,
[13:52.04] but it's actually less code and it's faster. So, um, yeah, if you get the version, uh, 0.14.9 or 10,
[13:59.80] it's the latest I've released today, you'll have even better preload characteristics.
[14:04.60] Oh, Hey Dan, how's it going? Um, yeah. Um, yeah, it doesn't matter compared to the app code,
[14:11.08] right? This is the thing. If you write a react app and then even come back five years later and wrap,
[14:16.04] write the react app again, like, you know, you've learned some things, hopefully you do better.
[14:19.48] It depends on the situation. Sometimes that can, you know, get slower because you pull a new
[14:24.28] requirements and the things change and, you know, it's a mess. But generally speaking, I've, I've heard
[14:28.68] a lot of success cases where people like are like, look, I took my react app and migrated to solid
[14:33.24] what faster is. And I'm like, how much of that is because you just rewrote it again?
[14:36.36] Did anyone claim that you, I mean, I don't think so. There's only been two prizes claimed so far.
[14:46.28] Um, Dax, I want better solid element, better web components. Let's do it.
[14:57.96] I, I'm, I'm interested to hear more about this. I, people keep on telling me we do have good options
[15:02.20] like core view and cobalt. Yeah. You know, and I know arc supports us and I haven't, I don't know
[15:09.96] enough about like boneless versus headless, skinless, whatever they're doing these days in this, but I
[15:15.56] feel like we have a lot of blank lists things you can do with solid. Um, yeah, so we're done with the
[15:23.24] web components. You put the foot down Benton. Yeah. Yeah. Uh, yeah. But only on certain cases.
[15:38.92] Yeah. It was a pain. One solid 2.0 now. Uh, not yet. It's my problem. Um, I start working on ideas and I
[15:49.96] start progressing and then I got to go fix bugs. And again, this loop where there's, there's only
[15:54.84] this short period of time that I get into implementing on 2.0. I need to break the cycle.
[15:58.60] Um, there's just so much to maintain. And at the same time, there's so much to think about. So it's tricky.
[16:03.80] Yeah. There was an article Theo did on a stream the other day, and I learned more about what people
[16:13.56] were talking about in UI libraries there than I had in like five years. I had no clue what anyone was talking
[16:19.48] talking about. One solid 3.0. Oh, now you guys are just shot shooting fire, uh, shots back.
[16:36.28] Okay.
[16:38.60] Hey, how's it going?
[16:49.48] Yeah. I mean, the TC39 thing is interesting. Maybe we'll talk about it a bit later. I'm,
[16:55.88] I'm still, it's a lot to process because in one reality, um, it is kind of like how things already
[17:03.32] are, but on the other hand, formalizing, it's a whole other different thing.
[17:06.20] React is only in 19. Is there plans for solid to work harder to get to version 19 as well? Um,
[17:16.44] not currently, but Angular, I think had this in the plans. Angular 19 also just came out. They managed to
[17:23.48] catch up. And I mean, that's impressive because if you think about it, sure, they got a head start, but
[17:29.56] React jumped like 10 versions or 13 versions, right? They went from basically like 0.13, which was like the first
[17:40.52] version all the way to like 0.14 to 15. So they like one, two, three, they, they jumped 12 versions
[17:46.12] basically. So Angular is already caught up to 19. So yeah. So it should go to, from 1.9 to 20. Yeah.
[18:01.24] That that's the solution. Isn't it. Oh,
[18:07.56] Oh, there we go. Yeah. 1.9 to 20. Just like React.
[18:15.56] Thoughts on Tansac's art? Tansac's art's great. Um, Tanner is building on the same bones that we're
[18:25.24] working on. Um, he's gone much deeper down certain things I think matter a lot for the developer.
[18:32.36] To be fair, he's kind of has to go there. See, this is, this has been kind of my concern here in
[18:39.48] general. It's like, because of React, there's only so much he can do. So he has to come up with ever more
[18:45.96] interesting solutions to kind of get around the fundamentals that he needs to get from React.
[18:51.00] Whereas with me right now, I'm approaching this kind of from the basis and being like, okay,
[18:54.92] what if we didn't have React? What if we were just starting from scratch again? What, what would it look
[18:59.64] like? Which frees me up a lot from a more theoretical space, but what's great is me and Tanner align on
[19:05.96] stuff a lot. Um, and I, I shared with him some thoughts, which actually led to me making the stream
[19:12.20] today. And he's like, I'm in complete agreement. So I was like, okay, that's all I need. I'm going to
[19:16.44] talk about it today. Um, yeah, very awesome. I heard it's fine. It's like TypeScript, right?
[19:27.72] TypeScript goes from 1.9 to 2.0. So if you just combine TypeScript mentality with reacts upgrade,
[19:38.60] you know, back from 0.14 or whatever, was it 0.15? No, they had the actual 15. And that's the answer.
[19:45.72] Solid 20. We'll just skip past all the rest.
[19:48.28] Yeah. Um, that's progressing around. We'll have Tanner come back. We'll show him what he's been
[20:01.72] working on. Cause he's, he's an interesting boat, as I said, because he's, he's trying to like build even
[20:08.76] more, um, considerable more like constructs on top of the stuff,
[20:15.48] which is really valuable. I mean, I, I, in the sense, even after this too, everyone's trying to
[20:19.32] get like validation on their server functions, all this extra functionality. And that's great.
[20:23.72] Someone can do that. That someone is just not generally going to be me. Cause I, I, I know that
[20:29.16] someone can do it, which means it's not an interesting problem. I'm interested in the problem of things they
[20:32.44] can't do. Um, but I think he's really taking it a good distance and it, which means it's a good time to
[20:38.04] probably talk about it again. Yeah. I mean, we, the key to it would, yeah. I mean, just TypeScript one
[20:51.72] can't work the way TypeScript works. If we wanted to, this to work, we'd have to have some way. I mean,
[20:57.16] people talk about syntax or signals in the browser that didn't involve function calling so that we
[21:01.40] could like fool it essentially for TypeScript perspective. It's interesting. It's just also
[21:05.88] like, it's a lot of implications of, of that kind of change. And the second you need it to be
[21:12.12] transportable, you're in functions again, and you're in the same problem again. So it's not as simple as
[21:15.40] that and using stuff like property access, um, like dot value, as we know is a trap. So it's like,
[21:21.48] there is no great solution unless TypeScript itself changed and who wants to bet TypeScript itself is
[21:29.24] going to change. If using TRPC into the framework, which is fine. We like, which is good. Like, uh,
[21:36.92] I don't have seen or J devs work. Um, we have PRPC, which is a compiled thing. Him and Tanner probably
[21:42.12] just shared notes at very similar, um, approach. Right. Uh, which is pretty cool. Um,
[21:49.80] you know, I think it's cool. At least, um, this idea, like it's her functions,
[21:56.76] unload a whole bunch of potential to build on.
[22:07.96] Yeah. I mean, TRPC is fine. It's just getting absorbed is essentially the reality of things.
[22:13.48] People. Yeah. I mean, if we go monolithic, people don't want to go through all the wrappers anymore.
[22:20.04] Yeah. I, I, I think that's what should happen. I think, I think where my mindset is or J should look
[22:29.56] at what Tanner has been doing and just kind of find a good zone around there, because that's that,
[22:34.04] that feels like where, where that belongs. It's the next level above where I'm generally working.
[22:41.80] Okay. So yeah, we're just talking crap, but let's actually get into something
[22:48.12] actually get into something. We want to talk. I want to talk today because as usual,
[22:59.88] I've been writing hack MDs, but let's, let's actually start with Excalibur. Um,
[23:07.64] and just start a brainstorm session for a sec. Okay.
[23:10.36] I know. And later in the stream is the most you part of the stream, because I'm going to be talking
[23:20.68] and probably about some of my hack MDs that directly reference your work. I'm sorry, Tommy,
[23:24.84] but you know what, we got a solution for that too. You can be a guest on, on the stream. Um,
[23:29.72] you've been doing some great work. Um, and I want to, if you think you're at a good place to showcase
[23:34.44] it, you should come and join me. All right. Soon. Okay. That's awesome. Yeah. I know it's a, it's a very
[23:51.48] R and D kind of zone. Um, okay. So look, let's get into the topic today because I'm going to,
[23:59.24] I want to throw it out there. I don't actually think there's that many different ways to build
[24:05.16] web apps. I mean, if you remember like from a high level perspective, you remember a long time ago,
[24:09.32] I wrote this patterns for building JavaScript websites in 2022, one of my most popular articles.
[24:14.20] And I said, like, I was responding to an Addy Osmani chart that, and that he had, um, where he,
[24:22.92] he showed this table and all the framework authors all argued about what features they supported and
[24:28.20] all this stuff. And I was like, okay, no, I, I, I break it down to three questions, right? Navigation.
[24:33.88] And I made this matrix full of like different things. And we talk about this, like every time
[24:39.80] I do that, like yearly recap of where JS frameworks are, you know, for new years, we talk about, about
[24:45.64] this, right? We, we look at, you know, how rendering works, different types of rendering, timing, SSR,
[24:53.16] streaming, SSG. We talk about hydration and all of these characteristics sort of define the solution.
[25:00.68] And if you take the combinatorics, there's like 60 different combinations, you know, or 120,
[25:05.56] I think combinations. And of those, maybe only 60 of them are viable, but it's a mess when you're like,
[25:12.20] what the hell is going on here? Right.
[25:15.80] And it's like, let's, let's step back. I, you guys know that I've been looking at server components,
[25:25.08] you know, that I've been looking at, you know, different architectures. And I was like,
[25:30.68] I, I, I actually think there's three buckets only.
[25:37.00] Baw, or if I say SPA, everyone knows what I'm talking about, right?
[25:47.64] Um, what else do we want? Server components.
[25:55.08] And what, what am I going to, what else we have? What's the last one I'm going to say?
[26:01.32] Um, state full servers.
[26:04.52] I think I can bucket all rendering on the web.
[26:11.48] Into these three categories.
[26:14.04] Make this two lines. It's too long.
[26:17.08] For applications.
[26:21.08] Sorry. Why did they want it?
[26:26.12] Don't get me wrong. There's also MPAs still.
[26:30.28] Um, but I don't consider MPAs.
[26:35.00] necessarily application level. I think there's really three architectures we're talking about.
[26:40.04] I need to look more at Breeza.
[26:45.96] Yes. I'm going to, I'm going to talk a bit about that later on in the day.
[26:53.72] But the resumability stuff.
[26:56.20] Right. But client only SPA, SSR SPA. Yeah. Yeah. No, but I,
[27:03.32] I'm going to consider those the same category, right?
[27:06.28] High level.
[27:08.20] I think there's only three care categories, right?
[27:12.68] Like over here we have like, what's, what's defining is, uh, of a single page app clients.
[27:17.88] Um, I mean, I think all of these have client routing, but big thing is state owned in browser.
[27:28.04] Right.
[27:31.48] Um, stateless server generally, this isn't, this is not a rule.
[27:39.88] Right. Um, but I'm just like, characteristically single page app, you, it, what are the characteristics
[27:48.36] about this? Um, more important, uh, client rendered, like when you update.
[27:59.32] Right. Whether you do SSR or not is it's a toggle, it's a switch. It's, it doesn't change fundamentally
[28:08.68] that it's a single page app.
[28:10.52] Yeah. Where do islands go?
[28:15.72] I think islands are over here somewhere in server component land here.
[28:21.80] Um, cause like what, what, what, what, what's over here, right? It's, um,
[28:27.64] interactive.
[28:32.76] Um, arts.
[28:37.48] Um, so like client components, islands, whatever you want to call them. What other characteristics
[28:44.76] of these have, um, also stateless server generally doesn't have to be like, you can always have
[28:50.60] like a web socket connection, but I'm just like the, the baseline is stateless server, right?
[28:55.96] It's kind of, it's restful.
[28:57.88] Um,
[28:58.92] it's possible to have client routing, but generally like the first ones I'm going to say,
[29:07.48] um, it's not about the routing because this is what the problem with client routing. Cause they
[29:11.80] all have client routing. It's more of like server rendered
[29:15.72] navigation, right?
[29:20.52] Maybe this is the better way to put it. Cause I'm going to say I'm talking apps here. So
[29:25.96] I'm, I'm talking client routing generally
[29:28.28] client rendered navigation
[29:33.72] server rendered navigation
[29:37.64] like the difference between islands and server components, there are functional things that you
[29:47.24] need to consider when you're doing server components versus islands, but they're the same things you have
[29:51.88] to consider when you add view page transitions to Astro. So to me, um, this update on the MPA
[30:00.36] is fundamentally boxed under this thing. You can, right.
[30:04.84] Spa isn't remix spa mode.
[30:09.24] Now you're just poking fun at them.
[30:12.52] They should have called it like CSR mode or something. I guess all we call it SSR false
[30:20.12] remix. All modes arguably are here, even with their server components, architecturally, they are still
[30:27.88] over here. Tan stack is here. Svelte kit is over here. Um,
[30:32.12] because architecturally in remix, when you put the server components as the data loaders, you're still
[30:39.64] running in a client driven thing. Don't get me wrong.
[30:42.36] Server components are this weird hybrid that you can kind of like do server components without a server.
[30:48.52] But architecturally speaking, the whole benefit is when the server is on the outside,
[30:56.20] right? Because then you only have the little pieces. Remix does it backwards, which means
[31:00.28] it's over here. Like when people make lakes, like server components, they load, you know,
[31:04.84] like the kind of reverse Nux idea of server components. They are still over here. They're all
[31:10.36] at an architectural level. React server components are over here. What next is doing? Almost what
[31:18.04] everyone else is doing is over here.
[31:19.72] No MP is allowed in the stream. I mean, it's just a server components architecture with the routing
[31:32.20] and turned off. Thank you for the reminder. Yeah. Like and subscribe. It helps me so much. Seriously.
[31:38.20] Server lists. I mean, most of these run on server lists because they're, but I think you mean like
[31:50.60] react server components without a server, or maybe you're talking about offline versatile. Yeah. I mean,
[31:56.20] that's another question. Where do you think offline first fits? Generally speaking, offline first is,
[32:02.12] is over here too. Well, you know, offline first lakes, like these are just other things that are actually
[32:10.76] over here. Generally speaking. I mean,
[32:16.52] I don't know. I don't know. It doesn't matter if they're SR or not. Categorically, there's this bucket
[32:22.84] and this bucket. The funny thing is people didn't realize that this was a bucket before,
[32:26.60] um, for apps. Like to be fair, they were just like MPAs, which I didn't put on the list here, but
[32:31.80] eh.
[32:35.48] Yeah. You, yeah. Dev, you beat me to it.
[32:46.52] Yeah. The islands themselves are the client components, but the architecture is what I'm
[32:55.72] talking about. That's why you, the fact that, um, there are server components doesn't
[32:59.72] beget necessarily like the categorization. It's the fact that like, that's the architecture of the app.
[33:05.00] Like you build an app that renders everything on the server with client islands on it.
[33:16.52] So it's a specific interactivity. Okay.
[33:20.12] Well, the thing is you can argue that
[33:29.72] because of the ability to preserve state, but now that there's stuff like view transitions and stuff,
[33:38.20] you are on the ledge and yes, you could argue that view transitions are just letting MPAs not do full
[33:45.72] page reloads. And if you forget about shape state persistence and sharing that model, you can get
[33:51.64] pretty far, but you're also probably not building apps. You're probably just building sites now that
[33:57.32] have slightly better navigation. You're not building things that have persisted state, um, which is an
[34:02.12] important, um, aspect here. Cause this, the, it's kind of goes without saying that when you have stateless
[34:10.76] servers, that state is owned in the browser. This is where the similarity comes in. Cause you might be
[34:20.20] like, Oh, but, but islands. Well, the thing is islands just don't bother with the state. They throw it away.
[34:24.84] It's like, like, if you just don't do client routing, you don't keep the same server, like MPA style,
[34:29.24] then like, it's not that the state isn't, um, in the browser. You know what I mean? It's just that
[34:37.16] you chose to throw it away. Like, yeah. You want to talk about HTMX and like Kato has stuff. Interestingly,
[34:53.32] HTMX is a technology, not an architecture from my perspective. So for me, when I look at HTMX,
[35:00.04] you know, just let's put in our brainstorm, it can actually sit in, it can either live in this world
[35:07.32] or in this world, depending on how you, how you build it. We haven't, we haven't expanded out this
[35:11.88] world, but HTMX as a technology works both with this architecture and with this architecture, like on a
[35:17.32] base level, HTMX might actually be under this category because you, yeah, again, you can always
[35:25.48] shrink the islands to zero. You can always straight the state to zero, but at base, it's a stateless
[35:31.16] server, right? Um, with server rendered navigation, right? Like you're just kind of like with Astro's
[35:39.88] uterines, you're just swapping in HTML partials, right? Um, you know, this is HTML partials is,
[35:47.56] is going to be a word that we use over here, right? Um, it doesn't have the HTML, it can also be JSX
[35:52.36] partials, but it's essentially when I'm looking at this from, you know, 10,000 feet,
[36:02.92] there's that, like, don't agree with the labels, but like, yeah, let's, let's do some stuff. Remix,
[36:08.92] all modes, spell kit, noxt, let's start.
[36:16.12] You know,
[36:20.76] so I'm being a little bit aggressive here on the bulk thing, because like, as I said, we could go into
[36:29.96] all 120 different variations here, but like, essentially
[36:35.48] they were the important characteristics, they bucket this way.
[36:41.08] Islands don't handle it, but the fact that they don't have handle it, like don't handle this,
[36:48.84] um, is kind of like a choice. If you want that architecture to work, you need to handle it.
[36:57.80] Right. So it's like they're, yeah. Resumability. Yeah. Uh, resumability is again, a technology,
[37:06.28] um, not an architecture from my perspective. So
[37:09.96] resumability and hydration are going to be basically anywhere that you care
[37:21.88] about the state being owned by the browser because the state never like nothing starts in the browser.
[37:27.08] Everything starts from the server. Um, so it, it, it hovers these lines. These islands can be
[37:33.80] resumable or hydrated. The, the single page app could be, uh, resumability hydrate. So they share uses of
[37:41.64] this technology, but in itself, like if you're more, if you're more interested where things sit,
[37:48.68] quick is over here. Okay. There we go. Like we can say that the,
[37:55.64] right. Let me zoom one more and maybe make it a little bit easier to see for people. Right.
[38:11.96] Yeah. Yeah. Yeah. Basically. I mean, they're technically the server components. Yeah.
[38:15.56] There's a huge similarity there.
[38:17.80] Yeah. A hundred percent in the spot range. I agree.
[38:22.12] Like six minutes behind chat.
[38:25.40] Stable server columns just scared you. Yeah. Maybe for good reason. It scares me sometimes too.
[38:32.60] It's this big blank we have here, but we'll get there.
[38:35.08] I w I w I was thinking about this all,
[38:40.12] all day. I was like trying to come up with the, like the things. If you, if you can think of the axes,
[38:46.28] let me know. Yeah. Where state lives, but then what's the other axes
[38:51.80] where it's like, whenever you see three things, you always think there should be a fourth thing. And
[38:59.88] you're like, the fourth thing is the missing part. Like that's how I found solid JS. Um,
[39:04.36] I realized that there was a, uh, two axes graph and nobody was in the fourth quadrant. And that's what
[39:11.24] solid was. Um, that's how I knew for myself that solid was worth pursuing more than anything. Cause I
[39:17.72] found a unique spot. It wasn't about API. It wasn't about, you know, these surface layer stuff. Um,
[39:23.24] I think I talked about this way, way back. Let me look at my medium article. If you, just so you don't
[39:29.72] get what I'm talking about. Um, when we're talking about these, uh, two axes graphs. Way, way back.
[39:35.88] Um, do, do, do, do, do, do, do, do.
[39:39.48] React took the most part. I benchmarked here. What every JavaScript framework could learn from React.
[39:52.04] Um, these titles are wrong. We came up with better names for them. But essentially,
[39:59.56] I'd realized that almost every framework was in Q box one, except for like some reactive stuff,
[40:04.92] like knockout back in the day. And, but React was over here in, in this kind of forward craft.
[40:09.64] Don't worry about this coarse-grained, fine-grained, strict, loose data flow. Those, those titles
[40:13.56] aren't quite the right ones, but, um, I'm trying to remember what I figured out what the perfect axes
[40:18.84] were like on a stream, but a year ago. But my point was, I realized that was nothing was over here,
[40:24.36] essentially. Right? Um, and when React came out, everyone was like, the people are over here. They
[40:31.08] saw React over here and they all went like this way. But what I was saying is over time, React has
[40:36.04] slowly been going this way, like more fine-grained, right? People got the wrong, they learned the wrong
[40:43.32] things from React. And they all like started, you know, they, they basically went backwards. So when I
[40:48.68] created solid, I started over here and I was heading very quickly into this quadrant, I feel like it would
[40:57.64] be interesting if the same sort of mentality, um, existed in this space. Anyway.
[41:15.24] Yeah, because they're talking about HTMX, they built.
[41:27.00] Okay.
[41:30.76] So what do we got here? State view? Yeah. I mean, let's see what that looks like.
[41:46.04] Sure. I'll bite.
[41:56.92] So we're talking...
[42:11.16] One axis here is going to be state.
[42:14.12] Can I highlight this line and put arrows on both sides?
[42:20.68] Not layers. I want to highlight this line. Can I change the style? Is it too late? Oh yeah,
[42:33.88] it is too late. Anyways, whatever. State on this line.
[42:37.24] I want to highlight this line.
[42:37.88] View on this line. And then I'm gathering...
[42:46.92] Let's do server.
[42:51.40] If I've got the idea here, server.
[42:55.56] Client.
[43:05.40] Client.
[43:05.88] So...
[43:09.88] We get our stateful servers here.
[43:16.60] We get...
[43:20.60] This, this...
[43:23.40] Server, server. And then if this is state, client state, but server view, we get server components here.
[43:36.36] And then client state, client view.
[43:39.88] Pause there. What does that leave us with?
[43:43.72] Client view...
[43:45.32] Yeah. Client view, server state.
[44:01.00] There's very...
[44:01.80] There's very...
[44:02.84] I mean, arguably...
[44:03.88] Maybe there's some space to get here, but this is like SPA plus WebSocket, right?
[44:12.68] Maybe there's something here though. This isn't the worst.
[44:19.48] Yeah. You can't have a SPA without an API, no. But you...
[44:32.04] But the persistence of the stapleness, what I mean is like this, where the session lives,
[44:38.04] You can definitely have a client with sessionless backend.
[44:40.84] Yeah. I'm just...
[44:47.80] This is not a bad stab at this chart. I don't know if it gives us any insights just yet, but...
[44:59.80] I'll take it.
[45:00.36] Okay. Let's, let's finish filling out this table.
[45:03.88] Stateful servers.
[45:12.60] What do we got here? Characteristics.
[45:14.44] So...
[45:14.68] Date is owned on server.
[45:20.20] What else? What else is characteristic of this?
[45:29.56] Server rendered...
[45:35.48] Navigation.
[45:36.44] Other characters.
[45:44.52] Characteristic to this.
[46:02.92] I mean, there can be HTML partials, but I mean, that sort of goes along with this, right?
[46:11.96] Like, categorically, these are the same statement.
[46:14.76] And categorically, like, these are, like, I could say, stateful servers.
[46:21.48] This is, like, necessary, right?
[46:26.44] This doesn't work without stateful servers.
[46:30.04] You need, you need, like, some kind of, like, persistent backend here.
[46:34.28] And yeah, I mean, for people who don't know what I'm talking about, this is live view, essentially.
[46:39.80] Yeah, I might as well finish this out.
[46:47.80] Next.
[46:49.00] RSCs.
[46:50.92] Astro.
[46:52.68] Fresh.
[46:55.40] Da-da-da-da.
[46:55.88] HTMX can kind of, like, hover a line over here.
[47:00.20] Blazor has some interesting modes that does all of this, but...
[47:13.24] I'm gonna...
[47:14.36] Yeah, let's...
[47:14.84] I don't know what it's called in Blazor, but I know that Blazor has something over here, too.
[47:19.08] I mean, when I'm talking about state, I'm talking about stuff that ultimately isn't persisted.
[47:33.88] Like, obviously, people have backends with databases.
[47:40.20] But when I, like...
[47:41.48] And in a sense, you can access that database from any of the clients.
[47:44.52] So then there is, like, persisted state in a sense, but I don't mean that.
[47:47.64] I mean, like, if you are...
[47:50.12] Like, the state of the application, not the state of your data.
[47:57.40] Like, the state of your UI is what I'm getting at.
[48:01.08] Who owns the state of the UI?
[48:02.20] Who makes that decision?
[48:03.40] Who knows which checkboxes are ticked, right?
[48:06.52] Generally speaking, in live view, the server knows that.
[48:10.68] In these other architectures, it's the client that knows that.
[48:16.20] In the SPA, it's obvious because the whole thing is in the client.
[48:18.92] In the server components, it's more like...
[48:20.60] The stuff outside of those islands, you shouldn't be clicking anyways, right?
[48:25.72] So to speak.
[48:27.56] Marco not mentioned.
[48:37.96] Marco's over here.
[48:39.72] Sorry.
[48:40.04] Marco's here.
[48:44.44] Right?
[49:03.96] This distinction here might end up not being actually that big, but right now it has a lot of impact.
[49:14.44] this distinction has existed like between these two and this one since the dawn of the web, essentially.
[49:19.80] It's where the line's drawn.
[49:26.60] Because people operating on the side operate off the assumption that while stateless servers are possible,
[49:33.48] they're not a guarantee that you cannot ensure that, you know, serverless, whatever.
[49:37.16] You can't guarantee that, you know, and this has a history probably tied to infrastructure, scaling, you know, cost considerations.
[49:46.84] Everyone on this side refused to make assumptions about the statefulness of the server.
[49:52.44] They're like, we can't do that.
[49:54.28] Like the stateful server type architectures.
[49:56.20] Like we're talking about here.
[49:57.00] It's literally like you have it or the architecture just does not work.
[50:00.60] It's, it's, you know, it's just not there.
[50:03.96] MPAs, no, MPAs, um, generally speaking are not an application architecture.
[50:15.24] Like you can view them as server components crippled essentially, but they don't necessarily have stateful servers.
[50:23.00] MPAs are kind of in the middle here.
[50:25.48] They're like server components where you chose to not use a bunch of the features.
[50:29.64] Um, that's kind of conceptually, right?
[50:32.20] Um, when you start with MPA and you move outward, you end up with all of these characteristics.
[50:39.08] Um, as you try and get more interactive on the client, as you try and, um, scale up from it.
[50:45.72] So yeah, MPAs are, I'd say, I'm going to say traditionally MPA.
[50:55.00] All right.
[50:59.64] Like a simple MPA is just some, is just this architecture and choosing not to use the features in it.
[51:07.16] I don't think there's any, um, like it's funny because a simple MPA could literally be
[51:13.96] like any of these because they just don't use the features.
[51:18.44] Like it's just a website.
[51:19.80] It's just like, here's some HTML that can be, uh, islands architecture.
[51:24.52] That can be a page with a giant spa on it.
[51:27.96] That can be the starting point of a stateful server.
[51:31.32] Like MPAs are just the web.
[51:34.84] It mentally, mentality wise, it's closer to this middle category where you have this idea that
[51:44.36] you're just like swapping a page, right?
[51:47.24] Um.
[51:49.24] But.
[51:51.56] Baseline.
[52:00.76] Yeah.
[52:08.28] JSX is a templating language.
[52:10.12] It's, it's, it, it's no more, no less.
[52:14.84] It's the same as felt files or lit tag template literals.
[52:20.20] It's just a different form of templating language.
[52:21.96] So it's, it's, it has nothing to do with
[52:27.80] like, do you want to write declarative code or do you want to manually
[52:35.32] do your updates or whatnot.
[52:36.44] I mean, it's a question.
[52:37.40] I'm strictly talking about web applications in general.
[52:47.48] I'm assuming.
[52:50.12] But like, I think this, I think this can trace back even further.
[52:57.40] Right?
[52:59.00] Like you can argue that if you start here, you can grow to here,
[53:04.84] which is like what classically happened.
[53:06.44] Right?
[53:06.68] But now in like a modern setting, if you like reset and look at what we have out there,
[53:13.72] everything kind of fits into this thing.
[53:17.96] Like who else did I not put on here?
[53:20.36] Turbo.
[53:21.88] Rails, you know, turbo rails, you know, is here.
[53:31.80] I like, they might have technology on the Staples server side.
[53:35.16] Maybe that's how you author it.
[53:36.20] But like, what I'm getting at is like, I, you can basically like, I think certain frameworks
[53:43.08] can target multiple of these architectures per se, but I'm, this is not just.
[53:49.40] How say all apps that do anything non-trivial require JavaScript.
[53:55.72] So when you consider the whole puzzle of pieces, I think there's only three buckets.
[54:01.72] Like that we, at least that we've talked about so far.
[54:16.44] Is it about their solar state lives in apps?
[54:18.28] That's that is who's left holding the state with my old joke of, you know, like hot potato
[54:23.16] about how web architecture evolved.
[54:25.88] That is one of the, like where the UI state is one of the most fundamental questions.
[54:30.84] And the secondary concern there is who's responsible for actually rendering or like
[54:37.16] making the decision of what gets rendered.
[54:38.76] Those two pieces together are very key to understanding the difference between like
[54:44.44] high level architectures here.
[54:50.76] Cool that NPA has no standard fundamental distinction.
[54:52.44] Now it's more of a choice limitation.
[54:53.72] Well, this is going with the Rich Harris take, right?
[54:57.32] When he told the Astro guys that client side routing was the future.
[55:00.52] And if they weren't in it, they, you know, and then when they released the view page stuff,
[55:03.88] he was like, look, even you guys agree, right?
[55:06.12] Well, I think there's lots of use cases where you don't need that extra consideration
[55:15.48] that comes around client side routing navigation.
[55:17.56] There are trade-offs, JavaScript considerations, all that kind of stuff.
[55:21.08] Fundamentally from a mental model stuff, I do think it's a natural evolution, right?
[55:25.96] That's why Astro lands there.
[55:27.40] That's why turbo comes up for rails.
[55:29.80] Like it's, it's natural that the thing, like my, my headings can be wrong here, but bucket wise,
[55:37.96] I think there are three ways we view how this stuff comes together.
[55:47.56] I have no clue.
[55:54.76] Like the thing is when you have a language like JavaScript, you can literally put it in
[55:59.96] any of these buckets, right?
[56:00.92] There's live view JS.
[56:02.04] So, um, certain tools, you know, certain languages, certain levels are going to show up in multiple
[56:09.64] of these architectures, but high level.
[56:11.32] I think there's these three buckets.
[56:13.00] People are very stingy today on the likes.
[56:20.92] Is this true?
[56:21.56] Am I going to have to go into YouTube and believe people and see what they're doing?
[56:26.28] Let me, let me see what's going on on YouTube channel.
[56:30.20] Is everyone just watching on Twitter?
[56:33.96] Yeah.
[56:34.20] Only 50, but there's 149 people watching on YouTube right now, apparently.
[56:41.32] So 50 thumbs up 149 of you watching.
[56:46.36] That's all.
[56:47.00] That's only one in three.
[56:47.96] That's not particularly good.
[56:49.32] How are we doing on Twitch?
[56:51.56] Um, how many people are in chat?
[56:56.60] I mean, I guess I can't make the same metrics here.
[56:58.52] 55 people in chat or 55 people watching.
[57:02.60] I guess I can't see the, the sub thing.
[57:05.00] That's different.
[57:05.32] That costs money.
[57:05.80] Okay, fine.
[57:06.44] But, um, we can definitely get some more likes on YouTube.
[57:09.72] Okay.
[57:12.12] I see 78 now.
[57:14.60] Yeah.
[57:14.84] Okay.
[57:15.48] That was good.
[57:16.36] That's good.
[57:16.84] We're like 50%.
[57:18.04] I appreciate that.
[57:18.92] Okay.
[57:20.36] It's state full of supercent of MPA.
[57:26.36] Not necessarily.
[57:27.96] I think actually state, like MPA, like everything extends from that base of what the fundamentals
[57:34.60] of the, of the web are that you just are sending back, you know, you know, if you think of the
[57:39.32] classic files are just sending back files that are in a folder, right?
[57:43.16] Everything extends from that standpoint.
[57:46.28] So I don't, everything's a super set of MPAs.
[57:52.44] Maybe.
[57:52.92] I don't know.
[57:53.32] The one that keeps closest to the original mentality is definitely the middle category.
[57:59.16] But yeah, HTTP versus web socket.
[58:08.44] Well, I mean, you can also do long polling with HTTP, but the part that makes it different
[58:12.68] is to have web sockets.
[58:13.88] You need a persistent connection, which means you need a stateful server.
[58:17.64] Right.
[58:17.96] I didn't like put it in here, but when we want to talk about technologies over here.
[58:22.04] Yeah.
[58:22.20] I'm talking, this is, this is web socket land over here.
[58:25.32] Right.
[58:27.24] I mean, technically you can do long polling, but even with long polling, you still have
[58:31.56] a connection with a, with a server.
[58:33.32] Right.
[58:37.80] Two out of three people are still mad about web component.
[58:39.96] Oh man.
[58:42.28] These are, these are interesting observations, right?
[58:53.00] One thing I never see people talk about is, is using ServiceWorks to turn MPA to in a single page
[58:57.08] app.
[58:57.64] You can even work offline.
[58:58.60] And what if, let's take it further.
[59:01.56] What if you took a stateful server architecture and put that in the service worker, right?
[59:07.40] It's kind of an interesting thing, right?
[59:09.88] Because is that the ideal way to do offline first?
[59:13.80] Right.
[59:14.04] There's, there's a, there's an interesting thing about where the stuff sits, right?
[59:22.52] Because when the single page app, almost all the logics on the, like the web is a client's
[59:27.24] client server model, right?
[59:29.00] There's, there's two sides.
[59:30.04] There's always two sides.
[59:31.16] What putting it in a service worker does is put both sides, potentially on the same side,
[59:35.96] like in the same area, but there's always two sides.
[59:39.80] And single page app mentality has the client doing all the heavy work work.
[59:48.28] Stateful servers have the server doing all the heavy work and server components, or this
[59:56.04] thing is this hybrid where it's like each of you guys do what you want, but like it, it has a
[60:03.80] harder time, um, choosing sides.
[60:08.12] I think ultimately because of this tension, right?
[60:11.32] Like there's, there's, there's this tension here, right?
[60:14.36] Like if I grab this and I put arrowheads, um, can I put arrowheads on both sides?
[60:18.76] One side, oh, I want, oh, why am I in that?
[60:26.52] Oh, right.
[60:27.96] I can do it like that.
[60:28.76] Okay.
[60:29.08] So if I might have drawn this before, but if you have this line here, the thing is,
[60:39.88] what do we got here, client, server.
[60:44.76] But I mean,
[60:49.08] the, the whole thing is, this is just another way of saying like, closer to the user
[61:04.68] and closer to your data, right?
[61:08.92] Along this line, different operations are more optimal, um, to happen, right?
[61:18.12] Um, some things fit better over here, right?
[61:22.20] Like, uh, let's move this up over here.
[61:24.84] Um, you know, arguably, um, ephemeral UI state is better somewhere over here.
[61:39.72] You know, optimistic updates, selection state, because you're close to the user.
[61:43.32] You can interact with them.
[61:44.28] Don't need it here.
[61:45.00] Arguably.
[61:46.36] Right.
[61:47.24] It's not, it's not persistent.
[61:50.76] Arguably, you know, things processing data better over here somewhere.
[62:00.44] Um, so like there, there is this spectrum here and there are kind of like interesting
[62:11.48] compromises where the stuff sits, which means that sometimes with stuff like, you know, like
[62:15.64] a server component type mentality, um, you would, um, basically choose where the stuff goes.
[62:24.92] The challenge is then you often have two different models for things.
[62:27.88] And the other challenge is that like,
[62:31.48] ultimately.
[62:35.24] It does have to persist somewhere.
[62:40.20] Like there, there, if you, if you're building an actual app, there is a place where you probably,
[62:44.44] you're not going to always fetch stuff.
[62:45.64] You need some kind of persistent.
[62:47.16] And for that reason, these generally do that persistence.
[62:53.40] Like it, it could go arguably either way, but like when I'm talking about server components,
[62:58.12] I guess I'm talking about the choice to make that persistence happen in the client.
[63:02.52] Um, it is possible that you could do very basic, um, statefulness on the server.
[63:10.76] But like, when you get to the point that you're kind of trying to like manage things
[63:15.64] with client side routing, you know, like even view page transitions can take that further.
[63:20.36] You're going to probably end up in that zone.
[63:21.80] So there, there's an argument that this middle section can be split.
[63:25.64] Um, maybe.
[63:28.04] All right.
[63:31.16] Hey, it could be fetched and set as page note without a page route.
[63:40.12] Yes.
[63:40.44] And that's exactly what I'm calling under the server component side.
[63:44.20] Right.
[63:52.28] I mean, give me an example of stuff outside.
[63:56.44] Like here's the problem.
[63:57.88] You're going to, there's a million ways to nitpick on categorization.
[64:02.60] As I said, I've, I've gone down this path.
[64:04.76] I'm quite familiar.
[64:06.12] We can talk about like, you can stream, you can do this, you can do this.
[64:10.28] But when it all comes down to it in the end, there's the most defining traits.
[64:17.56] I believe actually fall into these three buckets.
[64:21.88] I took the red servant back in language called the wasm.
[64:34.36] And then loaded the service worker and simply transitioned local first spotlight rendering.
[64:37.48] Yeah.
[64:37.88] I mean, it's an interesting one.
[64:38.76] Right.
[64:38.92] But the, the only benefit here is you said to go local first, if your database is there.
[64:44.36] And then at a certain point, you're kind of going, what's the difference between a model where you.
[64:49.80] Like, I think one of the things that ends up detracting from this a little bit is
[64:58.84] if you're already moving to the browser.
[65:04.12] Like both this single page app model and staples or remodel try really hard to optimize for their side
[65:13.80] to the point that you have a single app experience.
[65:16.92] Right.
[65:17.16] I was talking about this before a moment ago, but it's, it's what's key here.
[65:20.92] Right.
[65:21.08] Because there's like a single app experience.
[65:25.40] And then, I mean, from a DX standpoint, sing, not signal.
[65:29.96] God, I do that all the time.
[65:31.64] Single.
[65:33.40] And I realize this is single app DX perspective.
[65:38.68] Right.
[65:38.92] And generally speaking, these guys are as well, where this is like
[65:51.40] split is like a split, like React did a good job trying to keep it all in JSX or whatever.
[65:55.80] But there is a, there is a definitive boundary.
[66:00.76] And I don't just mean like saying certain things only run on the server client.
[66:04.36] I mean, like, even like what its role is, when you think about mutations and actions,
[66:08.76] and you think about how these pieces play with each other.
[66:11.24] It's not just like, oh, this part runs on the server.
[66:13.08] This part runs on the client.
[66:14.60] Um, like it's, it's, it's more than that.
[66:20.28] There's implications of those decisions.
[66:31.32] Right.
[66:36.84] So what I was trying to get out with Benton with your comment is you could bring the server
[66:41.72] on the client in a sense, but I'd be interesting.
[66:46.76] Like clients are already better at rendering in the client.
[66:49.80] Like the, the pattern is more efficient.
[66:53.32] It's more flexible.
[66:54.84] It's more, so it's like, I, it's, it's, that's what makes it a harder sell.
[66:59.64] That's why I don't think you've seen people kind of go wholesale on this.
[67:01.96] It is interesting.
[67:02.68] The idea that you could take a backend and then just like do the initial work there.
[67:06.68] And then then like, they didn't push it up.
[67:09.72] Right.
[67:10.12] Like, but on the other hand, you could also have that backend.
[67:14.12] Mentally like a single page app, you know, like, but you know, and just have the single
[67:21.56] model.
[67:22.04] So they're both approaches, right?
[67:27.08] In a sense, a single page app almost acts like there isn't a client server relationship.
[67:33.88] And in a sense, stateful servers are a bit like that too.
[67:37.16] Yeah.
[67:52.28] Yeah.
[67:52.60] Yeah.
[67:52.68] Yeah.
[67:52.92] Yeah.
[67:53.16] The extreme share more of a common ground in the middle.
[67:54.92] Yeah.
[67:55.08] Multi app pages.
[68:04.84] There you go.
[68:05.24] Yeah.
[68:06.44] That's probably a better mentality on it, on it in general.
[68:10.28] Like if you go that approach, then you're kind of.
[68:18.68] Multi app pages.
[68:19.80] Actually, wait a second.
[68:21.32] No, that's.
[68:22.60] Multi page apps are an app that spreads over multiple pages.
[68:27.88] Multi app pages would be a page with multiple apps on it.
[68:33.40] That's a whole other can of worms.
[68:35.96] Yeah.
[68:39.40] Micro frontends.
[68:40.12] Yeah.
[68:40.36] Yeah.
[68:48.20] Yeah.
[68:48.44] Multiple single page apps.
[68:51.72] Yeah.
[68:51.96] From my perspective.
[68:54.44] It get.
[68:58.68] That if they're not.
[69:00.68] If they're connected in some sort of way, then they're a single app, even if they're like.
[69:04.04] Author differently.
[69:05.40] And if they're not connected in a different way than I.
[69:07.80] Then they're trivial enough that I think they fall in the middle category.
[69:12.68] But the play on words is definitely appreciated and definitely fun.
[69:19.00] Okay.
[69:19.24] But I want to.
[69:22.44] I want to talk about this closer, farther thing a little bit here because.
[69:35.24] What are the actions that you prefer.
[69:37.32] Perform on a page.
[69:38.76] Like when you're.
[69:39.56] When you're.
[69:41.08] Kind of.
[69:42.92] You know, like.
[69:43.96] How do we even decide between these architectures?
[69:46.84] Obviously there's.
[69:47.32] Technology infrastructure constraints.
[69:50.36] Right.
[69:50.60] There's a reason that not everyone can.
[69:53.08] Use.
[69:54.84] Stateful servers.
[69:55.64] Right.
[69:55.96] Not.
[69:58.52] Not.
[69:58.76] It's.
[69:59.40] Not everyone has access to those.
[70:01.72] You know, that.
[70:02.20] That could be just off the table before you even start.
[70:04.44] But even between these.
[70:05.80] You know.
[70:09.08] There's interesting blurring.
[70:11.00] In terms of trying to figure out what.
[70:12.84] Solutions.
[70:13.40] Or what.
[70:13.88] Style solutions.
[70:14.76] Actually.
[70:16.20] Work.
[70:16.76] The best for your situation.
[70:18.28] Right.
[70:20.20] So.
[70:20.44] You know.
[70:21.40] It got me thinking of like.
[70:23.40] What do you actually do.
[70:24.60] On a web page.
[70:26.52] Right.
[70:26.76] Like.
[70:27.72] Like when you're.
[70:29.64] Do in a web app.
[70:34.52] Categorically.
[70:36.12] Right.
[70:37.96] Well.
[70:42.36] First thing you do is you load a page.
[70:43.96] Right.
[70:44.20] That's something you do.
[70:45.80] You load a page.
[70:47.48] You navigate.
[70:48.44] To.
[70:49.64] A different page.
[70:51.64] You.
[70:55.08] I usually press.
[71:03.00] Going on our web page.
[71:03.80] That still.
[71:05.56] Falls under load a page.
[71:06.76] Right.
[71:13.32] Now get to a different page.
[71:15.72] What else do we do?
[71:16.36] We.
[71:16.64] We do some.
[71:21.80] Client.
[71:22.76] Only.
[71:23.48] Interaction.
[71:24.36] Maybe.
[71:24.98] Like selection state.
[71:26.08] And then we probably.
[71:29.80] Do some kind of.
[71:32.04] Mutate.
[71:34.28] Mutation.
[71:36.24] Some way of like.
[71:37.88] Server.
[71:41.80] Some kind of server update.
[71:45.64] I'm just.
[71:45.96] I'm just.
[71:45.98] I'm just trying to think.
[71:46.52] Like.
[71:46.68] Does.
[71:47.16] Does this.
[71:48.44] Like what other.
[71:50.36] Things do we do.
[71:51.56] High level.
[71:52.00] Categorically.
[71:52.64] Like optimistic updates.
[71:53.92] Um.
[71:54.88] Is part of that client.
[71:56.16] Inter.
[71:57.24] Only interaction.
[71:58.12] Right.
[71:59.24] Commit changes.
[71:59.96] Is.
[72:00.28] Is number four.
[72:09.32] Yeah.
[72:09.56] Yeah.
[72:09.56] We should.
[72:10.16] We should.
[72:10.68] Add a caveat down here.
[72:12.86] That we should think about.
[72:13.96] Um.
[72:15.12] Return.
[72:17.12] Visits.
[72:19.76] Slash.
[72:20.80] Second.
[72:23.00] Time.
[72:23.92] It occurs.
[72:25.28] Right.
[72:25.72] Sometimes you go to a page.
[72:26.90] And come back to a page.
[72:27.70] Right.
[72:28.00] Sometimes you.
[72:28.54] Yeah.
[72:28.92] Exactly.
[72:29.22] I agree.
[72:29.86] I mean.
[72:35.06] I get.
[72:36.46] If you have a website.
[72:37.38] I can see this argument.
[72:39.02] But.
[72:40.58] At some point.
[72:41.40] If you're doing application.
[72:42.78] Guess what.
[72:44.14] I like this post.
[72:46.04] There.
[72:46.92] The optimistic update.
[72:51.34] I just did two of these things.
[72:52.68] Just now.
[72:53.14] Um.
[72:54.68] I did a client only interaction.
[72:58.40] Which involved the.
[72:59.30] The optimistic update.
[73:00.94] And then I did a mutation.
[73:01.94] Which did the server update.
[73:10.58] Persistent state is how we solve a problem.
[73:13.54] Right.
[73:13.88] This is how we describe this.
[73:15.42] The problem.
[73:16.52] But.
[73:17.08] But.
[73:17.52] But.
[73:18.06] Um.
[73:19.06] I'm just thinking more of like.
[73:21.44] I'm going to pull this out of here.
[73:23.70] It's going to get its own.
[73:24.76] Thing.
[73:26.22] Let's.
[73:29.68] Blow this up a little bit.
[73:32.22] Okay.
[73:40.58] I'm just.
[73:42.92] I want to make sure that I'm.
[73:44.28] I'm not missing any kind of like.
[73:47.12] From a user perspective.
[73:48.52] What kind of action that.
[73:49.58] We're doing.
[73:50.16] Get server state without interaction.
[73:56.82] Interesting.
[73:57.62] Okay.
[73:58.10] I'm going to.
[73:58.92] I'm going to.
[74:00.56] I'm going to put this one in.
[74:02.04] I think you're right.
[74:02.66] Because this is like.
[74:04.30] Client sourced.
[74:05.60] Events.
[74:06.24] Server.
[74:07.58] Sourced.
[74:10.58] Events.
[74:11.82] This is.
[74:12.62] This is a.
[74:13.12] This is.
[74:14.38] This is.
[74:15.20] This is not what you do.
[74:18.46] To be fair.
[74:19.16] But.
[74:20.96] I think.
[74:21.76] We should.
[74:23.32] Consider it.
[74:25.30] Maybe.
[74:25.60] This.
[74:28.60] At least this is something outside of the box.
[74:30.86] I'm not sure where this sits.
[74:32.18] Right.
[74:32.50] Because.
[74:34.12] You could also.
[74:37.08] You could also.
[74:37.18] Like.
[74:37.72] Background.
[74:39.44] Processes.
[74:40.48] That pull for data.
[74:41.60] Like.
[74:43.74] I don't.
[74:44.08] They can.
[74:46.02] You can set those up.
[74:47.02] In all of these solutions.
[74:49.36] To be fair.
[74:51.76] So from like.
[74:52.34] The app.
[74:53.66] In the client's.
[74:54.78] Perspective.
[74:55.82] Or the user's.
[74:57.02] Perspective.
[74:57.54] Which.
[74:57.82] Right next to them.
[74:58.72] I don't know if this actually.
[74:59.96] Is a category.
[75:00.64] But this is the best.
[75:01.66] Different one.
[75:02.64] I've thought about.
[75:03.34] Right.
[75:05.36] Similar idea.
[75:07.06] Based on.
[75:07.54] I would consider.
[75:08.74] Um.
[75:10.92] These triggers.
[75:13.64] Are.
[75:13.88] Are based on.
[75:15.06] Um.
[75:16.18] Okay.
[75:17.46] So you're saying.
[75:17.90] Load.
[75:22.02] Resources.
[75:22.98] Based on.
[75:23.96] Events.
[75:25.46] Client.
[75:26.50] So client.
[75:27.34] Based events.
[75:28.20] Um.
[75:29.66] Yeah.
[75:33.30] This is an interesting one.
[75:34.08] I'm trying to think of where this fits.
[75:35.36] Because it's.
[75:35.70] It's between load page.
[75:36.76] And client only interaction.
[75:37.82] Um.
[75:40.60] It could also be under.
[75:44.30] Mutation server update.
[75:47.04] It's because it's the idea that.
[75:48.50] Doing a certain action in the client.
[75:50.00] Like maybe mutation.
[75:50.76] Is wrong here.
[75:52.50] It's the thought that doing a certain action.
[75:54.40] In the client would cause this.
[75:55.92] Something to need to come from the server.
[75:58.76] Um.
[76:00.86] Because like.
[76:02.28] I say mutation.
[76:03.58] But it's like two sides.
[76:05.18] It's pushing something server to.
[76:06.90] To get something back.
[76:07.76] But that thing you push the server.
[76:08.82] Could literally be.
[76:09.74] Nothing.
[76:10.68] And you could get something back.
[76:12.86] Okay.
[76:17.04] Like I just saw.
[76:27.04] Right.
[76:28.86] I mean.
[76:29.50] This is a choice.
[76:30.72] Right.
[76:31.06] How you handle it.
[76:32.40] You can.
[76:34.18] Guard yourself against this.
[76:35.44] In either case.
[76:39.70] Right.
[76:41.14] To local data store.
[76:43.20] Again.
[76:45.02] The local data store.
[76:47.64] Is either going to be on the client.
[76:50.08] So categories here.
[76:51.10] Or it's going to be on the server.
[76:52.54] So it's categories here.
[76:53.84] Even if the local data store is in the client.
[76:55.54] It's still on the server portion of the mentality.
[76:57.46] I don't care if the server is in your browser.
[76:59.90] Or if it's on the server.
[77:00.96] It's categorically.
[77:03.12] Like shape wise.
[77:04.14] Kind of falls the same.
[77:05.16] So I think we're good.
[77:06.96] Yeah.
[77:14.84] Four is basically.
[77:15.90] Yeah.
[77:18.00] We.
[77:19.84] Is this.
[77:20.76] I'm just trying to say async.
[77:29.56] It's almost like.
[77:30.92] Client.
[77:32.76] Initiated.
[77:34.00] Async.
[77:35.04] Server.
[77:35.52] Communication.
[77:38.28] And this is.
[77:45.92] I guess.
[77:48.72] Server.
[77:49.20] Initiated.
[77:58.30] But the only thing you have to consider here.
[78:02.12] Is that.
[78:02.50] This.
[78:03.72] Even with the WebSocket.
[78:05.26] The client has to.
[78:06.14] Open the WebSocket.
[78:07.26] So like.
[78:07.78] This distinction.
[78:09.06] Is.
[78:10.72] Worth.
[78:12.24] Highlighting.
[78:13.98] But it's.
[78:14.42] Also.
[78:15.06] Yeah.
[78:18.78] Updating UI.
[78:25.44] Depending on the state.
[78:26.04] I'm still going to.
[78:27.72] To me.
[78:28.08] This still falls under four.
[78:29.20] Like.
[78:29.76] You.
[78:30.36] Oh.
[78:31.88] It depends.
[78:32.24] Updating the state.
[78:32.98] And the UI dependent state.
[78:33.84] Is a client only interaction.
[78:34.96] Unless it's not.
[78:35.68] And that's number four.
[78:36.52] So.
[78:36.96] Yeah.
[78:38.82] Right.
[78:46.22] But like.
[78:47.14] Leave.
[78:47.64] Leave.
[78:49.76] Revisit.
[78:52.02] I.
[78:52.94] Can happen in a.
[78:54.24] In a.
[78:55.34] On a.
[78:56.00] On a micro sense.
[78:57.10] But I think it's.
[78:57.64] It is important.
[78:58.46] To talk.
[78:59.26] Like.
[78:59.52] Because it.
[78:59.92] Leave.
[79:00.56] You can say in the.
[79:01.10] Whole sense.
[79:01.90] But you can also.
[79:02.54] Talk about.
[79:03.28] Leave and revisit.
[79:03.84] With like.
[79:04.68] Say client side navigation.
[79:05.60] Going to a page.
[79:06.40] And coming back to a page.
[79:07.34] Right.
[79:13.26] I think.
[79:13.80] I think.
[79:13.82] I think.
[79:13.82] I think.
[79:13.82] We got a good list.
[79:14.38] To kind of start with.
[79:15.40] All right.
[79:24.06] Yeah.
[79:24.52] So.
[79:24.78] It can happen.
[79:25.40] Synchronously.
[79:26.10] Like.
[79:26.48] Coming to all you.
[79:26.92] That's number three.
[79:28.36] Then.
[79:28.78] Okay.
[79:29.56] So.
[79:33.28] I think.
[79:35.92] There's a matrix.
[79:37.52] To be made.
[79:38.22] Between.
[79:38.62] These three approaches.
[79:40.22] And how well.
[79:42.40] They handle.
[79:43.00] These activities.
[79:50.26] Right.
[79:50.74] I don't think.
[79:51.28] I think they can all.
[79:52.68] Do.
[79:53.58] Some level of this.
[79:55.36] This is not.
[79:56.04] That.
[79:56.96] It's just.
[79:57.30] You have to think about.
[79:58.20] You know.
[79:59.54] You have to.
[80:02.12] You have to think about.
[80:02.94] You know.
[80:03.98] What it looks like.
[80:05.52] For me.
[80:05.94] Personally.
[80:06.82] The easiest one.
[80:09.92] To start.
[80:10.32] Like.
[80:10.66] This or.
[80:11.24] This is a good list.
[80:11.98] But I think.
[80:12.42] It's easier to actually start.
[80:13.64] This in a.
[80:14.24] In a different order.
[80:15.06] I think.
[80:17.80] I think we can.
[80:20.26] Client only.
[80:22.34] Let's just.
[80:22.98] Let's.
[80:23.78] Let's move.
[80:24.66] This.
[80:25.24] Let's edit the order.
[80:26.26] This list.
[80:26.74] I'm going to order them.
[80:27.74] From what I consider.
[80:28.36] The simplest thing.
[80:29.08] To talk about.
[80:29.64] To the least simple.
[80:30.48] Thing to talk about.
[80:31.26] Client interaction.
[80:32.62] Seems to be the easiest.
[80:33.48] To talk about.
[80:34.12] I think.
[80:35.20] And then.
[80:37.30] I'm going to.
[80:37.72] Consider.
[80:38.46] Mutation.
[80:40.54] The next easiest.
[80:41.48] To talk about.
[80:42.28] And then.
[80:44.92] Navigate to.
[80:45.64] A different page.
[80:46.64] I'm almost like.
[80:47.10] Reversing the order.
[80:47.86] Probably.
[80:50.10] The next easiest.
[80:50.72] To talk about.
[80:51.46] And then.
[80:54.08] Poding the page.
[80:54.78] Is probably.
[80:55.08] The most complicated.
[80:55.80] To talk about.
[80:56.52] I don't know.
[81:03.02] What to do.
[81:03.48] With server.
[81:04.28] Initiated.
[81:04.90] Coms.
[81:05.76] Because.
[81:06.14] It's.
[81:13.58] It requires.
[81:14.84] Persistence.
[81:15.20] Persistence.
[81:16.04] On the server.
[81:16.82] Which makes.
[81:17.76] It not something.
[81:18.50] That we can actually.
[81:19.56] Compare.
[81:21.20] Really easily.
[81:22.76] Unless.
[81:23.92] You assume that.
[81:24.98] Persistence.
[81:26.26] On the server.
[81:26.68] Is available.
[81:27.02] And if you assume.
[81:27.66] Persistence.
[81:28.20] On the server.
[81:28.52] Is available.
[81:28.90] Is available.
[81:29.64] Then it looks.
[81:30.34] Really similar.
[81:31.76] For all of them.
[81:32.92] So there's.
[81:35.18] Like.
[81:38.26] If you assume.
[81:38.92] The infrastructure.
[81:39.46] Is there.
[81:39.84] Then there isn't.
[81:40.32] Much difference.
[81:41.06] And if you assume.
[81:41.68] The infrastructure.
[81:42.26] Is not there.
[81:42.80] I don't like.
[81:45.46] I don't know.
[81:46.06] I don't know.
[81:46.46] What to do with this one.
[81:47.12] This one's just going to be.
[81:47.94] We'll see.
[81:49.32] If this.
[81:50.14] Is.
[81:51.72] Is relevant.
[81:52.52] I'm glad.
[81:53.12] That we were able.
[81:53.70] To find a fifth category though.
[81:54.94] Okay.
[81:59.14] So.
[81:59.76] Everyone's still awake with me.
[82:01.60] Right.
[82:01.80] We're still going strong.
[82:02.90] Yeah.
[82:04.54] Okay.
[82:04.92] That's awesome.
[82:15.46] You could do long.
[82:17.50] Polling.
[82:18.22] But like.
[82:18.70] You're still.
[82:19.36] There's got to be something.
[82:24.66] On the.
[82:25.02] Other.
[82:26.26] End.
[82:27.12] Yeah.
[82:31.26] I mean.
[82:31.60] Yeah.
[82:38.40] I mean.
[82:38.66] Jose.
[82:40.42] From Live View.
[82:41.16] Actually had a good thing.
[82:41.86] About this.
[82:42.30] Because he was talking about.
[82:43.28] One of the reasons.
[82:44.52] That Live View works so well.
[82:46.18] Is because he can literally like.
[82:47.52] Ship up the VM.
[82:48.84] Clone it.
[82:49.30] And like.
[82:49.60] Because of Elixir.
[82:50.80] He can just like.
[82:51.34] Move it across.
[82:52.16] So like.
[82:53.10] It doesn't even matter.
[82:53.74] If the server gets teared down.
[82:54.84] Or not.
[82:55.24] Obviously there's things like.
[82:59.20] Durable objects.
[82:59.86] And Cloudflare.
[83:00.54] That make it easier.
[83:02.02] For us to have it.
[83:02.90] But what I'm getting at.
[83:03.58] Is I think once.
[83:04.34] That's present.
[83:05.42] We can all.
[83:07.48] Agree that there isn't.
[83:08.48] Much.
[83:08.88] Difference.
[83:09.84] On the client side.
[83:12.40] Like.
[83:13.32] Like.
[83:13.58] It manifests itself.
[83:16.90] As a.
[83:18.82] Like once it's present.
[83:20.38] It manifests itself.
[83:21.22] In the spa.
[83:21.62] As a state update.
[83:22.42] It manifests.
[83:23.18] On a server component.
[83:24.66] As a state update.
[83:25.46] And.
[83:26.54] Here.
[83:27.54] It's the mechanism.
[83:28.32] That works on.
[83:28.98] So like.
[83:31.24] Yeah.
[83:38.92] Load a page.
[83:39.66] Load a page.
[83:39.68] Pilting.
[83:39.90] Paranalyzing communication.
[83:41.06] Yeah.
[83:42.02] It does.
[83:43.48] But I'm.
[83:47.06] Specifically.
[83:47.78] Like.
[83:48.32] I'm specifically.
[83:49.16] Like.
[83:50.98] I.
[83:51.64] What I'm talking about here.
[83:53.16] Is like.
[83:53.84] I'm.
[83:56.06] I am.
[83:56.90] I am.
[83:57.50] Trying to talk about.
[83:58.40] Like.
[83:58.68] Committed.
[83:59.42] Interaction.
[84:02.94] Like.
[84:03.26] I am.
[84:03.86] Talking about.
[84:04.32] Mutations.
[84:04.92] Like.
[84:05.26] Like.
[84:06.68] The fact.
[84:12.96] Maybe we should just.
[84:13.84] Get into it.
[84:14.82] And then we can see.
[84:15.52] If the characteristics.
[84:16.14] Fall apart.
[84:16.72] If you were interested.
[84:28.74] To come to me.
[84:29.34] Sockets.
[84:30.18] Maybe it doesn't matter.
[84:30.92] The architecture question.
[84:31.56] I don't think it does.
[84:32.58] Except for like.
[84:33.20] Where it is.
[84:33.80] The architecture.
[84:34.48] Right.
[84:42.96] So.
[84:47.02] Let's.
[84:48.20] Let's.
[84:49.00] Let's just.
[84:49.52] Let's just.
[84:50.46] Let's just go here.
[84:51.30] Let's start with.
[84:51.78] Client only interaction.
[84:52.68] Okay.
[84:53.12] So.
[84:53.64] I'm just like.
[84:55.42] Moving across the board.
[84:56.64] Client.
[84:57.28] Only interaction.
[84:58.82] I.
[85:08.58] I.
[85:08.82] I definitely appreciate you all.
[85:10.40] Joining me on this.
[85:11.40] Brainstorming.
[85:12.78] session.
[85:13.06] Because it.
[85:13.50] It helps.
[85:14.34] Kind of think through stuff.
[85:15.04] So.
[85:15.30] Generally speaking.
[85:18.34] Trying to think of how.
[85:24.54] I want to arrange this.
[85:25.26] Because there's a lot of.
[85:26.04] There's a lot of these.
[85:30.78] Little blocks.
[85:31.62] That we're making.
[85:32.28] Maybe this fits better.
[85:33.66] In an article.
[85:35.40] but I like being able to have this dynamics of moving around and thinking about this stuff.
[85:39.64] So client only interaction.
[85:48.24] For a single page app.
[85:49.30] For a single page app.
[85:49.42] It's simple.
[85:50.72] Right?
[85:50.98] State.
[85:51.60] Ends up.
[85:54.04] Updating the UI.
[85:56.26] Synchronously.
[85:57.70] Generally.
[86:03.86] It's actually.
[86:04.44] Event.
[86:05.48] State.
[86:06.72] UI.
[86:07.26] Synchronously.
[86:07.76] All on.
[86:08.46] In the.
[86:08.98] In the browser.
[86:09.46] Right?
[86:11.04] I don't think there's.
[86:13.38] Really.
[86:14.44] Much more to it.
[86:25.54] Right.
[86:26.16] And because.
[86:26.90] For.
[86:27.56] For spas.
[86:28.32] In this.
[86:29.46] Like.
[86:30.16] This.
[86:30.90] UI.
[86:31.48] Equals.
[86:32.26] Function.
[86:33.00] Of state.
[86:33.68] Essentially.
[86:34.28] I.
[86:34.54] I mean.
[86:35.42] This is.
[86:35.98] This is.
[86:36.86] True.
[86:37.32] For a lot of these.
[86:38.22] But.
[86:38.86] Doing.
[86:41.00] These.
[86:41.48] Client only.
[86:42.18] Ephemeral.
[86:43.60] Would you have it.
[86:45.12] Interactions.
[86:46.20] It's pretty good.
[86:49.04] So.
[86:49.30] If I was going to rate this.
[86:50.66] Between like.
[86:51.40] One.
[86:53.48] Being not very good.
[86:55.18] And three.
[86:55.68] Being like.
[86:56.32] You know.
[86:58.42] Very good on it.
[86:59.52] I'm going to give.
[86:59.86] Single page apps.
[87:00.80] To three.
[87:01.04] Just kind of like.
[87:02.06] Roughly say.
[87:02.60] Because.
[87:02.84] This is literally.
[87:04.00] What they're built for.
[87:04.80] You have an event.
[87:05.86] Do some state updates.
[87:07.26] I days.
[87:07.82] Synchronously.
[87:08.34] UI function state.
[87:09.08] Okay.
[87:09.24] And.
[87:11.04] If I were.
[87:11.82] To talk about.
[87:12.64] Server components.
[87:13.68] I don't know.
[87:17.94] If there's any other.
[87:19.12] Considerations here.
[87:20.96] Right?
[87:21.20] Because.
[87:22.62] The client components.
[87:23.68] Like.
[87:24.02] Not all components.
[87:24.88] Can handle this.
[87:25.44] But.
[87:25.62] Like.
[87:26.60] Similar.
[87:28.04] To spa.
[87:29.32] In.
[87:30.56] Client.
[87:31.42] Islands.
[87:33.44] Right?
[87:33.72] So.
[87:35.48] It.
[87:36.36] It handles this.
[87:37.40] Pretty well.
[87:38.54] Right?
[87:39.06] Just kind of like.
[87:39.86] Thinking about.
[87:41.14] This.
[87:42.34] If.
[87:42.80] If.
[87:43.10] These are the things.
[87:43.72] You.
[87:43.88] If you.
[87:44.50] If you care about.
[87:50.04] Now.
[87:50.72] stateful server.
[87:52.44] This is more interesting.
[88:01.12] Because generally speaking.
[88:02.32] If you.
[88:02.94] If you know how.
[88:03.78] Something like live view works.
[88:05.02] Are you guys familiar with live view?
[88:06.06] Let's.
[88:06.40] I'm just going to use live view JS.
[88:07.74] Because it's easier for us to visualize.
[88:10.84] But.
[88:11.26] I'm sure there'll be like a simple example here.
[88:14.08] Yeah.
[88:14.28] Beautiful.
[88:14.64] Way live view works.
[88:16.24] Is.
[88:16.72] The server.
[88:18.16] It's.
[88:19.52] Render stuff.
[88:20.40] And.
[88:21.22] Then.
[88:21.56] They put special attributes.
[88:22.94] That do event delegation.
[88:24.34] Essentially.
[88:24.92] It's funny.
[88:25.64] Because.
[88:25.92] Lawframers do this under the hood anyways.
[88:27.58] But you see that they put a named function.
[88:30.68] And then.
[88:31.20] Basically.
[88:32.04] When you perform the event.
[88:34.26] In the client.
[88:34.90] They just go like.
[88:35.80] Send it back.
[88:37.46] With the name.
[88:38.82] Of the.
[88:39.74] Of the event.
[88:40.36] And then.
[88:41.08] Because the state.
[88:41.84] Lives on the server.
[88:43.22] You can then like go.
[88:44.70] Oh.
[88:44.92] Count.
[88:45.36] Equals count plus one.
[88:46.52] See this.
[88:47.04] Socket here.
[88:47.84] Context is like the state.
[88:49.52] So.
[88:49.80] This stuff.
[88:51.24] Happens all on the server.
[88:53.02] And essentially.
[88:54.62] They have this like.
[88:55.80] Representation of your app on the server.
[88:57.68] The event fires from the client.
[89:00.02] Which then.
[89:00.56] Updates the state on the server.
[89:02.78] Which renders the part on the server.
[89:04.74] That changed.
[89:05.84] In this case.
[89:06.28] They can be like.
[89:06.66] Oh.
[89:06.86] Count changed.
[89:07.52] And they basically do like a BDOM diff.
[89:09.88] Essentially.
[89:10.30] And then.
[89:10.86] Realize that.
[89:11.96] Oh.
[89:12.20] I only need.
[89:12.98] To.
[89:13.56] You know.
[89:13.88] Send down.
[89:14.62] This portion.
[89:15.82] Of the UI.
[89:16.90] Patch.
[89:18.76] This location.
[89:19.80] With.
[89:21.88] This new.
[89:23.34] Text value.
[89:24.12] Or whatever.
[89:24.54] In their.
[89:26.08] Kind of.
[89:26.44] Diff format.
[89:27.30] And then the client updates.
[89:28.44] Right.
[89:28.76] So.
[89:29.42] It's a very clean.
[89:30.64] Model.
[89:31.18] You know.
[89:32.76] It's as simple as a spa.
[89:34.90] Almost like.
[89:35.34] You know.
[89:35.56] You can put your use state here.
[89:37.20] Event handlers.
[89:39.06] Render.
[89:39.60] The only.
[89:41.32] Thing is.
[89:42.72] This happens on the server.
[89:44.10] So.
[89:45.30] Ephemeral state.
[89:50.02] Is.
[89:51.46] More difficult here.
[89:54.68] Right.
[89:54.88] Because.
[89:55.12] The characteristic here.
[89:58.04] Is you don't want to go to the server.
[89:59.24] So.
[89:59.54] How do you solve this with.
[90:00.84] Staple servers.
[90:01.36] Well.
[90:01.64] You have a couple options.
[90:03.46] Right.
[90:05.40] You can either.
[90:06.20] You know.
[90:06.54] A.
[90:07.78] Run it.
[90:08.40] Through the server.
[90:09.78] Unnecessary.
[90:11.56] Like.
[90:12.32] Server.
[90:13.06] Which isn't what you don't want to do.
[90:14.44] Or.
[90:15.28] B.
[90:15.86] Require.
[90:18.00] Secondary.
[90:20.12] Mechanism.
[90:24.38] You know.
[90:25.02] Kind of like a.
[90:25.74] JS escape hatch.
[90:27.14] You know.
[90:30.20] I mean.
[90:30.58] Every framework has escape hatch.
[90:31.96] But it's kind of like.
[90:33.12] On the same level.
[90:33.56] As like.
[90:33.84] Using use effect.
[90:34.76] With a ref.
[90:35.48] You know.
[90:36.54] With react.
[90:37.58] And kind of getting out of the model.
[90:38.76] It's not.
[90:42.00] Inherent.
[90:42.70] To the model.
[90:43.42] You can obviously solve for this.
[90:44.72] But.
[90:47.06] Essentially.
[90:48.48] You have to step out of the framework.
[90:50.74] Or you have to be like.
[90:52.16] Given like a second approach.
[90:53.44] HTMX has.
[90:54.90] What's it called?
[90:55.94] Hyperscript.
[90:57.76] To try and.
[90:58.92] Like.
[90:59.24] Describe some stuff.
[91:00.34] And.
[91:01.10] You know.
[91:01.70] I think.
[91:02.30] Phoenix has.
[91:03.54] Something with like.
[91:04.66] That like.
[91:06.28] Tells.
[91:06.90] What classes to apply.
[91:08.22] Or whatever.
[91:08.54] But.
[91:09.14] The key part is.
[91:10.50] The secondary mechanism.
[91:12.38] Is not.
[91:12.88] Tied into the state of the application.
[91:14.64] On the server.
[91:15.30] So to speak.
[91:16.12] Like it's.
[91:16.56] It's a.
[91:17.58] Kind of separate imperative API.
[91:18.92] So.
[91:19.94] I think.
[91:21.10] Like.
[91:22.38] You can kind of see.
[91:23.18] If you're building.
[91:23.90] Something that was only client.
[91:25.24] Only interactions.
[91:26.18] This wouldn't be really where.
[91:28.32] You.
[91:28.98] Would want to be.
[91:30.10] All right.
[91:36.52] With me still.
[91:38.92] All right.
[91:46.90] Okay.
[91:47.34] Get some water.
[91:48.24] Yeah.
[92:00.08] Okay.
[92:10.76] So we're.
[92:11.34] We're going good so far.
[92:12.48] Okay.
[92:12.72] Let's go to committed interaction.
[92:16.30] I think.
[92:20.54] That's what I'm going to call it.
[92:21.42] Committed interaction.
[92:22.30] I don't know.
[92:22.82] Committed mutation.
[92:24.36] What did I call this?
[92:25.44] Committed.
[92:27.06] What I mean is.
[92:28.16] This goes to this.
[92:28.80] This goes to the server.
[92:30.30] Committed interaction.
[92:31.30] All right.
[92:39.20] All right.
[92:40.22] Now.
[92:42.86] This is when we actually go to the server and save something.
[92:45.46] Let's.
[92:51.38] Put these same categories here.
[92:54.20] I think this is where it gets a little bit spicier.
[92:56.08] From my opinion.
[92:57.46] From others.
[92:58.50] Because.
[93:00.18] What does a committed interaction look like.
[93:02.22] From.
[93:02.98] A single page app.
[93:04.98] See.
[93:07.40] This is tricky.
[93:07.92] Because developers don't do optimal stuff.
[93:10.58] Generally speaking.
[93:12.46] Right.
[93:21.40] But like.
[93:21.90] In a single page app.
[93:23.70] Would you.
[93:25.02] Send a post request.
[93:27.34] And.
[93:29.74] The most.
[93:30.66] Simple.
[93:31.16] Interaction.
[93:32.40] Like you're just.
[93:32.92] On the page.
[93:33.82] Is.
[93:34.48] You can send a post request.
[93:36.14] And you get the data.
[93:37.52] That you're missing.
[93:39.26] You get.
[93:40.64] You.
[93:41.82] Hit like.
[93:42.72] And you get.
[93:43.42] The.
[93:44.06] The.
[93:45.18] The like count back.
[93:46.30] You add a to do.
[93:47.42] And you get just that to do back.
[93:49.18] Right.
[93:50.02] This is how we used to build APIs.
[93:51.30] Like when you.
[93:51.90] Performed an update operation.
[93:53.24] Get the one item back.
[93:54.14] When you add an item.
[93:55.38] You get the item back.
[93:56.26] With the new database ID.
[93:57.44] That is the most.
[93:59.30] Basic.
[94:00.20] Approach.
[94:01.28] To that.
[94:02.34] Right.
[94:02.52] Which is.
[94:02.96] Post.
[94:03.88] To.
[94:09.10] Provided data.
[94:12.70] And then.
[94:14.70] Update.
[94:17.78] Date.
[94:19.40] In the client.
[94:20.24] Right.
[94:20.70] Well.
[94:23.00] Now.
[94:27.42] We do a lot of.
[94:29.28] A lot of people do a lot of.
[94:30.40] Way more.
[94:31.04] In.
[94:31.42] Unoptimal stuff.
[94:33.54] Like we.
[94:34.36] Do a post.
[94:35.68] Get the thing back.
[94:36.50] And then go.
[94:36.86] Okay.
[94:37.14] What do we need to.
[94:38.64] Refetch.
[94:39.56] You know.
[94:39.94] And then we go.
[94:40.30] Let's refresh the whole list.
[94:41.24] This way we don't have to worry about.
[94:42.50] Updating the state.
[94:43.14] In 10 different places.
[94:44.10] Or you know.
[94:45.30] Not even 10.
[94:45.92] Met in place.
[94:46.82] So we.
[94:47.48] You know.
[94:48.52] Go through the process of like.
[94:49.94] Revalidating things.
[94:50.84] And a lot of cases.
[94:51.98] If you can do granular revalidation.
[94:53.60] It's not actually that bad.
[94:54.42] It's not as efficient as what I put here.
[94:56.12] But like.
[94:57.36] Can stack.
[94:58.72] Query.
[94:59.76] Mentality.
[95:01.72] Exists.
[95:03.70] But double waterfalls are bad.
[95:05.28] So you can solve that with single flight mutations.
[95:06.80] But I.
[95:07.32] You know.
[95:08.10] But that's still.
[95:09.10] An extra bandwidth.
[95:10.84] Potentially.
[95:11.72] But.
[95:12.04] What I'm.
[95:12.96] So like.
[95:14.04] Not.
[95:17.40] Always.
[95:18.92] Completely.
[95:19.72] Optimal.
[95:21.58] I'm not doing this to.
[95:23.44] Bang it.
[95:24.66] Hand stack query.
[95:25.34] I like.
[95:25.64] Hand stack query.
[95:26.30] I just want to.
[95:26.70] Point it out there.
[95:27.28] But like.
[95:27.92] There's also graph.
[95:28.64] Q on the client.
[95:29.28] Right.
[95:29.84] Which can do.
[95:30.96] Granular.
[95:31.84] Normalized diffing.
[95:33.58] If you want to.
[95:34.30] There's different solutions.
[95:35.28] But at the core.
[95:36.28] Of the fundamental core.
[95:37.86] Of the technology.
[95:39.74] I actually.
[95:40.52] Don't think.
[95:41.40] Faws are.
[95:42.30] Bad.
[95:43.54] Here.
[95:43.94] Because you literally.
[95:45.10] Can send.
[95:46.06] Exactly what you need to send.
[95:47.94] And get back.
[95:48.64] Exactly what you need.
[95:49.64] Obviously.
[95:50.92] We.
[95:53.50] We have ways.
[95:54.86] To kind of make it.
[95:55.70] You know.
[96:01.32] More optimal.
[96:03.96] Or less optimal.
[96:05.82] And I'm going to talk about that later.
[96:07.98] I actually have a.
[96:08.92] New proposal.
[96:09.70] For solids actions.
[96:11.32] That can.
[96:11.98] Get us back.
[96:13.12] To bridge the gap.
[96:13.90] To where we can do.
[96:14.56] Handwrite optimal updates.
[96:16.30] Without sending back all the data.
[96:17.56] I was doing that Trello demo.
[96:18.54] And while it was very impressive.
[96:19.68] Jose did have a point.
[96:21.58] We sent back all the data.
[96:23.34] As.
[96:24.10] And I think that's good default behavior.
[96:25.94] But.
[96:27.06] We can definitely make our actions.
[96:30.66] Not always send back.
[96:31.40] All the data.
[96:32.50] So that.
[96:33.30] From that perspective.
[96:34.18] There is no downside.
[96:36.62] Compared to.
[96:38.58] What he was doing.
[96:39.54] In his live view version.
[96:40.38] And that's like.
[96:41.64] Fundament.
[96:42.02] That's.
[96:42.30] This is not fundamental.
[96:43.44] To the architecture.
[96:44.32] At all.
[96:45.82] It's just a matter of like.
[96:48.08] It's still.
[96:48.92] Post.
[96:49.60] Get data back update state.
[96:51.28] So.
[96:51.72] I know.
[96:52.78] People might not agree with me.
[96:54.26] But I.
[96:55.54] I actually don't see any.
[96:56.98] Issue there.
[96:57.76] And.
[96:59.48] If we're talking server components.
[97:01.34] Well.
[97:01.64] Client.
[97:02.78] Interactions.
[97:04.02] Can be like this.
[97:06.96] But.
[97:08.52] What about.
[97:10.94] Data.
[97:11.78] In server.
[97:13.26] But what about.
[97:15.72] Data in server.
[97:17.14] In SCs.
[97:18.20] Right.
[97:19.50] Like in the server component part.
[97:20.68] And stuff.
[97:21.02] Because let me.
[97:39.16] I learned a few weeks.
[97:39.86] So that.
[97:40.18] That remix single fetch feature.
[97:41.42] Doesn't actually.
[97:41.82] Okay.
[97:42.82] That's interesting.
[97:43.70] I wonder why they.
[97:44.30] What they're using it for.
[97:45.44] Because like.
[97:48.36] Grouping.
[97:49.52] You can group all the fetches together.
[97:52.00] Into a single fetch.
[97:53.04] But it makes it trickier.
[97:54.78] For them to be separately cacheable.
[97:56.34] Or see.
[97:58.34] I mean.
[97:58.80] I was kind of like.
[97:59.62] Posts are tricky too.
[98:01.04] Being cacheable.
[98:02.10] Because you post them again.
[98:02.90] I guess the thing is.
[98:03.74] I think this is where.
[98:05.52] The conflict is.
[98:06.54] If you want to use.
[98:07.56] Like the CDN cache.
[98:08.58] You need the separate get from the post.
[98:10.62] Because you can't cache a get.
[98:11.74] Whereas.
[98:13.70] Like.
[98:14.14] If.
[98:14.98] If.
[98:15.40] If the grouping of the single fetching.
[98:16.96] Is always.
[98:17.66] Together.
[98:18.58] So you say like.
[98:19.74] This page has this grouping of stuff.
[98:21.52] You can still CDN cache.
[98:22.66] That particular combination.
[98:24.46] But it doesn't help you.
[98:25.66] With fine grained.
[98:26.92] Updates.
[98:27.68] And revalidation.
[98:28.70] So it's like.
[98:29.24] Yeah.
[98:31.26] It's kind of a miss.
[98:32.10] It depends on what you're optimizing for.
[98:33.46] I mean.
[98:33.92] It's fine if you're just trying to do the CDN thing.
[98:35.98] But.
[98:36.20] You know me.
[98:37.24] I like optimizing for the.
[98:38.40] Like super granular.
[98:39.54] I like keeping.
[98:40.56] Cost off the server.
[98:42.94] Right.
[98:45.76] And then.
[98:46.42] That combination.
[98:47.82] Beans.
[98:48.20] Becomes the unique cacheable thing.
[98:49.90] Instead of.
[98:50.22] Each individual one.
[98:51.42] I think that's probably the argument.
[98:53.64] I.
[98:53.96] Honestly.
[98:54.60] Mechanically.
[98:55.22] This makes zero.
[98:56.04] Difference.
[98:57.04] Splitting.
[98:58.28] Versus not splitting here.
[98:59.40] Does not actually mechanically do anything.
[99:01.04] I thought about this.
[99:01.82] Dan Abramoff was trying to like.
[99:03.14] Convince me of this.
[99:03.70] Unless you hit the maximum number of connections.
[99:06.10] Then this actually doesn't.
[99:07.54] Do anything mechanically.
[99:09.04] Like it doesn't.
[99:10.32] Yeah.
[99:11.62] Anyway.
[99:14.54] But my point is.
[99:17.92] If you update data.
[99:19.44] And it's responsible.
[99:20.28] Like.
[99:20.60] Like say.
[99:21.34] For rendering the part.
[99:22.92] That's like.
[99:23.56] Updating the data.
[99:24.36] That's like.
[99:24.78] If not in the interactive zone.
[99:26.08] Then.
[99:27.02] The.
[99:27.88] This becomes a much.
[99:29.50] Different.
[99:30.34] Scenario.
[99:31.50] Because.
[99:32.56] Like.
[99:34.96] Sure.
[99:35.22] In the small.
[99:35.86] Like.
[99:36.34] The whole point of this.
[99:37.62] Architect.
[99:38.04] Like.
[99:38.26] You can make your whole.
[99:39.12] Page a spa.
[99:40.18] In here.
[99:41.12] In service modes of architecture.
[99:42.10] And then you're fine.
[99:42.70] But.
[99:44.16] But that defeats the point.
[99:47.04] Then you just have a single page app.
[99:48.16] If you're actually.
[99:49.08] Trying to offload the work.
[99:50.56] To the server.
[99:51.22] To get the benefit.
[99:52.14] You know.
[99:52.44] On page load.
[99:53.62] And stuff we haven't talked about yet.
[99:54.78] You're going to put.
[99:55.78] Do it.
[99:57.00] So you don't have to send.
[99:57.74] A lot of that data.
[99:58.28] To the client.
[99:58.88] But it means that.
[99:59.92] When a mutation happens.
[100:01.26] You are.
[100:03.16] In this.
[100:04.20] Zone.
[100:05.42] Where.
[100:05.80] You need to.
[100:08.08] At baseline.
[100:12.00] You're not just sending.
[100:13.02] The data you need.
[100:14.48] You're actually sending.
[100:15.64] Arguably.
[100:16.92] The HTML.
[100:18.48] For.
[100:20.28] And.
[100:21.06] And the data you need.
[100:23.12] For the client components.
[100:24.66] Maybe.
[100:26.30] Maybe it's a subset of that data.
[100:27.28] Or the.
[100:28.36] Maybe the whole page.
[100:29.50] Maybe the whole partial.
[100:30.36] Maybe the whole section.
[100:31.34] Right.
[100:32.18] You're sending.
[100:33.24] Data plus template.
[100:34.42] We're going to be using.
[100:35.10] These terms a lot.
[100:36.22] Code data template.
[100:37.70] I'm going to.
[100:38.30] Define these as.
[100:39.80] The code being.
[100:40.86] You know.
[100:41.58] JavaScript code.
[100:42.36] It could also be assets.
[100:43.30] Like CSS or whatnot.
[100:44.38] The data.
[100:46.08] Which is like.
[100:47.88] The actual.
[100:48.40] Like unique.
[100:49.00] Data JSON you need.
[100:50.50] And the template is.
[100:51.60] The.
[100:52.54] Part.
[100:54.44] The static part.
[100:55.30] Of the HTML.
[100:55.96] That you need.
[100:58.54] To.
[100:59.34] Put it together.
[101:00.30] Now.
[101:00.46] Don't get me wrong.
[101:01.00] When you.
[101:01.34] Do rendering on the server.
[101:03.14] You're actually sending.
[101:03.96] The completed.
[101:05.06] Version of the HTML.
[101:06.02] Which from my perspective.
[101:07.16] Is the template.
[101:08.38] Plus the data.
[101:09.26] So every time.
[101:11.52] There's a.
[101:12.86] Like there's a difference.
[101:13.72] Between say.
[101:14.54] Having the template.
[101:16.50] Live in your JS.
[101:17.20] And you send it once.
[101:18.10] As part of the code.
[101:18.88] And then you get the data.
[101:19.88] To fill in the holes.
[101:20.74] And.
[101:21.42] On every interaction.
[101:23.96] Sending.
[101:24.68] The HTML.
[101:25.50] Which means you're.
[101:26.08] Resending the template.
[101:27.04] Over and over again.
[101:27.82] From a bandwidth standpoint.
[101:29.58] So for.
[101:30.32] So what I'm getting at.
[101:32.18] Is in this case.
[101:32.94] Your.
[101:34.86] Your template.
[101:35.58] Plus data.
[101:37.20] From a.
[101:38.06] You know.
[101:38.52] From bandwidth standpoint.
[101:39.92] And.
[101:41.60] If.
[101:43.38] If you're hitting.
[101:45.04] A singular.
[101:45.66] Endpoint.
[101:47.32] A singular piece.
[101:48.32] You're.
[101:49.10] You're not.
[101:49.86] You're.
[101:50.22] You have to pull in all the data.
[101:52.04] For.
[101:53.16] Every piece of data.
[101:55.02] Like.
[101:55.28] Let's say you.
[101:55.98] You realize that.
[101:57.08] You've updated one thing.
[101:58.72] Well.
[101:59.58] Because you're re-rendering it.
[102:00.84] All.
[102:01.30] If you're stateless.
[102:03.12] You actually have to pull the data now.
[102:05.24] From all the.
[102:06.54] Different data sources.
[102:07.50] To get the.
[102:08.20] Be able to completely.
[102:09.40] Render that HTML partial.
[102:10.80] So.
[102:11.90] You're also like.
[102:14.70] Rendering.
[102:15.60] Pulling all the data.
[102:17.86] Now.
[102:18.12] You could.
[102:20.90] This is why caching is so important.
[102:22.88] In these architectures.
[102:24.24] Like Next.js and whatever.
[102:25.38] Because.
[102:26.12] Like on a single page app.
[102:28.38] You only.
[102:28.98] Ask for what you.
[102:30.74] Don't have.
[102:32.14] And get what you don't have.
[102:33.22] So like.
[102:34.02] You only.
[102:35.00] It's.
[102:35.38] You only get what you want.
[102:36.42] But with this kind of architecture.
[102:38.26] You basically have to.
[102:39.90] Always grab everything.
[102:41.00] So without.
[102:41.60] Caching to guard.
[102:43.28] Here.
[102:44.72] you're basically always doing more work on the mutation.
[102:49.52] It's just, it's like the physics of it, so to speak.
[102:53.36] So caching can alleviate, but my point is, for me, this is a one, right?
[103:14.72] Right, we're not at load yet.
[103:18.26] Right, oh, you guys are talking CSR again?
[103:22.56] Yes, have I lost you all?
[103:23.94] Okay, so, and then finally, what's our last one?
[103:35.48] Stateful servers?
[103:37.24] What are we doing here?
[103:42.50] Stateful servers are, I think, pretty easy here, right?
[103:46.72] If we look at our live view example, update the thing, render the thing you need on the
[103:55.00] server.
[103:55.26] I don't know how granular the re-rendering is.
[103:58.22] Assuming it's like component level, it could suffer, but because they're preserving the state
[104:06.28] on the server innately, you could argue that like, it's like when a React component re-renders
[104:13.50] you, you have the previous state, you don't need to like fetch it again.
[104:16.44] So, and then what it sends back is the granular update, like here, update this, add these divs,
[104:24.50] you know, like it sends back a fairly optimized payload.
[104:27.62] It's arguable whether the optimal narrowness of that of being HTML versus JSON is better
[104:34.38] or worse, it's serialization format.
[104:36.14] But I, from my perspective, it's a coin toss, right?
[104:39.94] Like it doesn't really matter.
[104:40.88] Like it, it, you know, it simply, it's, it's, it's, it's, it's basically event, state, UI,
[104:53.98] async, you know, it's like the mirror of this one.
[104:58.42] Um, so these guys, I'm going to give a three here for staple servers for committed interaction.
[105:04.48] Right.
[105:05.42] All right.
[105:07.52] We're still good.
[105:10.60] You should put subway surfers in the corner.
[105:26.52] Are we still talking about offline first?
[105:28.36] Sorry, Chad, you, I, you guys are really going off on the single flight mutation thing still.
[105:34.74] Okay.
[105:35.02] Okay.
[105:36.16] So let's go to the next section here.
[105:38.56] What do we got?
[105:38.98] We got navigate to a different page.
[105:41.02] Okay.
[105:56.52] I'm, this is my holistic scoring.
[106:04.86] It's, I don't care about DX if, if, if I've ever made that clear, this is about mechanically performance,
[106:12.08] characteristics, capability of delivering on these features, um, uh, in terms of within the scope of the architecture of the tool.
[106:23.42] As I said, if like giving live view or staple servers of one and client only interaction, yes, you can solve it by importing jQuery, but that's not, that's kind of like outside the scope of the tool.
[106:37.64] You can argue that's ergonomics, but I think that's philosophically on the outside, right?
[106:41.62] And here, when I'm talking about this, this is, you can argue that necessary caching is no different than necessary stateful servers here.
[106:50.50] So like, you could argue that this is like, not really a pull.
[106:53.12] It's just kind of a trade-off here, but fundamentally this executes everything and renders everything and ships everything.
[107:02.52] It's the only one that has to do that in this category where these two, um, don't.
[107:11.60] Right.
[107:12.00] I, I hope that makes sense.
[107:19.42] I mean, this is my opinion, but I'm, this, this is basically how I'm attacking this.
[107:24.94] Okay.
[107:26.72] And when I say spa, I mean the general sense.
[107:28.90] I'm also talking about, I'm talking about the SSR spa, so to speak, or single page app.
[107:33.70] I'm not talking about, I'm, that's kind of like a given in this comparison from my perspective.
[107:41.60] So how does it work in a single page app when you navigate, um, code splitting, generally speaking.
[107:48.26] So you don't have all the JS up front.
[107:49.90] So when you go to the new page, you have to load the JS and you fetch the data.
[107:52.66] And generally speaking, almost all route frameworks do this thing where they parallel, parallelize the code data fetching.
[108:07.96] And then, um, the templates in the code, so to speak.
[108:17.08] So essentially the first time you, you, you hit a route first time you get template plus data plus code.
[108:36.82] Right.
[108:37.74] And then subsequent times you just, you get data, right?
[108:49.74] That's, there is some overhead, arguably you could say of rendering on the client.
[109:01.06] Um, but what's interesting is if the code, especially subsequent times of the code's already there, it can render ahead of time of getting the data and fill in the holes.
[109:11.74] This is maybe like a suspense type thing.
[109:15.52] But what I, what I, what I'm getting at is the cost of rendering the HTML on the client versus not, unless the size of the page is immense, is not going to be much of a detractor here.
[109:28.52] Um, right.
[109:31.44] This is why we do stupid stuff.
[109:33.02] Like the, okay.
[109:38.64] Like the actual physical rendering of the DOM elements.
[109:41.44] Um, I mean, you, you, you, you can basically test this theory by taking inner HTML, something versus like how long it takes to like framework render it.
[109:51.30] It, it's funny.
[109:52.90] Cause I, I saw this all the time with streaming because streaming SSR, we'd actually bring in large chunks of HTML and drop them in the browser.
[110:00.04] And I used to compare the timings of these and the overheads, especially in lighthouse.
[110:06.16] You saw that the page rendering didn't actually like streaming.
[110:11.54] The amount of work, the browser had to do at the point that the stream did the chunk almost even like giant pages generally was a wash with the effort, the, like the processing time for actually rendering with the framework on the same page.
[110:25.76] So, I mean, take that where, where are you with, with a grain of salt, but I just want to kind of put that out there.
[110:31.04] Right.
[110:35.76] People can make waterfalls, but it's again, not inherent to the architecture.
[110:42.00] Right.
[110:44.42] Yeah.
[110:48.20] Yeah.
[110:48.52] I don't pay if you're talking about like full page reloads, we will, that's the last category.
[110:53.70] Um, so
[111:05.28] I'm, I'm, if you think about this, I'm going to just, I'm going to give this a three as a baseline.
[111:14.26] We can come back to it and think about it to see if we think differently, but there's no inherent waterfalls here.
[111:21.06] Right.
[111:23.70] Because you get, essentially you paralyze all the data fetching from the knowledge from the first bundle.
[111:29.36] This is the cost of the first bundle.
[111:31.20] And then after the first thing you get a more optimal payload as time goes on.
[111:36.54] Okay.
[111:36.84] Let's look at server components.
[111:44.68] So when navigating with server components, um, you, we don't have to worry about like manually parallelizing a hoisting because you only just request the next page.
[111:57.44] Right.
[111:57.66] So it's like single, single request for next page, which is nice.
[112:02.52] You just go get me this page.
[112:04.44] However, the client isn't aware generally of which islands it's going to need on that next page yet.
[112:14.64] Right.
[112:14.98] I guess it's possible.
[112:16.64] You could serialize it into the, the page manifest generally that goes against the whole idea of not, you know, not doing so.
[112:25.88] Like it's, it's kind of an interesting conflict because you don't actually know because the server can change, which islands get drawn, which server components, you don't actually have the code.
[112:37.08] Like sure you get the JSX HTML back to render it, but you actually don't know, like you have to hydrate those client components.
[112:43.06] When you render them, you have to like, um, render them even actually with server component architectures, because they can rely on client context state.
[112:51.10] You can't actually render the client components on the server after the initial load.
[112:55.30] So here you actually have to load the client components.
[112:57.88] You have to go to the server, like essentially server fetch, fetch, like, um, static or like server components, which means it's basically data or template plus data data, then waterfall, fetch code.
[113:25.30] To render island, render islands, render islands, right?
[113:32.34] It's like, we have this characteristic on the initial page load where you get the HTML back first, and then you get the JS, right?
[113:42.02] And what's interesting that that's first time, um, subsequent, subsequent times, you don't have to worry about that.
[113:54.02] You already have the code, so you don't have to worry about it, but you just get template plus data every time.
[114:01.70] Right.
[114:02.10] Um, so you, you, you, you save the waterfall, but initially there's a waterfall and subsequent times you do both, which kind of fits into what I was talking about here in terms of bandwidth.
[114:12.74] The bandwidth here, it's arguable, like I'll consider it a wash the difference between client rendering and having extra bandwidth to render on the server.
[114:22.10] Um, but yeah, it, it, it, it's kind of an interesting problem with this waterfall.
[114:29.86] Now, what can, what can we solve this to do this?
[114:35.38] One thing we can do.
[114:43.38] But there's a waterfall, you're asking new page and that page is served as a module from the server, ask for new data that causes a new fetch.
[114:51.06] So which waterfall are you talking about?
[115:07.62] Does browser caching affect client side routing once you have the code splitting happening or sponsoring to?
[115:11.46] No, that's what I'm saying for client side.
[115:14.10] Afterwards, you, because the code's already cached, you already have the code and template.
[115:18.98] So subsequent times you only need to get the data where on a server component subsequent time, you actually have to render the whole output again, but you won't have to load.
[115:27.30] That's much code, smaller code bundle, um, each time.
[115:31.06] And you get rid of this waterfall.
[115:32.42] Now, interestingly, preloading.
[115:36.34] See, I was going to give this a one, right?
[115:38.66] This, this is just, it's fundamentally just worse.
[115:43.86] You're sending more stuff.
[115:45.38] You're causing a waterfall, but because preloading gets you around the code fetch.
[115:51.14] Like if you hover the link and then they can fetch the code ahead of time to get rid of the waterfall.
[115:55.94] I'm going to, I'm going to, I'm going to, I'm going to give this, uh, I'm going to give this a two.
[116:00.42] It's only slightly worse than spa navigation.
[116:03.78] Right.
[116:05.78] But yeah, I'm going to say, yeah, pre, preloading helps a lot necessary, basically.
[116:24.10] So you necessary caching necessary preloading.
[116:27.46] I mean, if you understand this, you start understanding why next, uh, looks the way it does.
[116:33.86] Right.
[116:34.74] Like the, the, uh, app directory.
[116:39.62] Okay.
[116:39.94] How about stateful servers?
[116:42.42] One thing you're going to notice about staple servers.
[116:48.98] Of course, I think throughout this comparison is.
[116:50.34] Since is just how simple the model is, because since they arguably don't need any more JS here,
[117:00.26] because they don't have interactive components.
[117:01.46] They all handle on the server side.
[117:02.58] Like basically the same things that penalize them over here, act as a straight here,
[117:07.30] because there's no extra JS, right?
[117:09.46] They don't have to worry about this code waterfall.
[117:12.58] Cause there's just no code to load.
[117:13.94] Right.
[117:15.86] You could, you know,
[117:17.46] You could, I, it'd be fair to argue, I guess, that a single page app, um, loads more JS.
[117:26.42] But because usually the data fetching is the bottleneck on a single page app, I'm not going
[117:31.94] to really think like usually you, when you parallelize, you send it up for the code and
[117:35.86] you send up for the data and it's actually the data.
[117:37.70] That's the bottleneck.
[117:38.50] The, the code is cash in the CDN, even, uh, even if you haven't loaded it before in your browser.
[117:43.70] So, um, uh, I'm going to say when I'm looking at staple servers, yeah, they, they will send, uh,
[117:54.90] template plus data
[118:00.34] always, but no JS is a benefit.
[118:06.58] So like they take a hit here, but they balance it out here.
[118:10.34] I'm just going to give them three on the level.
[118:11.70] Cause I think it's essentially like, uh, one trade off for the other trade off.
[118:16.74] Right.
[118:17.54] But mechanically, I mean, it's, you go to the next page, you have the socket already open.
[118:26.18] You just tell it what HTML it needs.
[118:30.18] It's basically like the mutation case that we were doing here at a, like a sub level.
[118:38.26] So there's not really much difference here from the staples or perspective between these two interactions.
[118:43.62] All right.
[118:45.46] Let's do, um,
[118:52.02] right.
[118:55.70] Yeah, yeah, exactly.
[119:05.38] I mean, this is why next has, has had a lot of challenges, right?
[119:09.70] They, they've been really trying to figure it out.
[119:12.02] Basically.
[119:12.58] I use, you could argue that a user is a key to that cache.
[119:16.50] So yes, in some cases it might mean a different cache entry for everything.
[119:20.66] Like you're, you're approaching statefulness pretty quickly here.
[119:25.22] Um, so yeah, it, it, it, it is an interesting piece, right?
[119:35.30] This is why there's been so much focus on next in cache because it's like, it's basically fundamental
[119:40.74] to it.
[119:41.14] Um, okay.
[119:43.22] Let's go do the, the last category here.
[119:48.50] Because as I said before, looking at this now, I think that fifth category we were talking about
[119:52.66] is doesn't matter between implementations.
[119:55.78] It's basically the same thing.
[119:56.90] Load initially.
[119:59.22] Right.
[120:04.02] All right.
[120:04.34] Just going to put load page, whatever.
[120:06.26] Okay.
[120:06.58] So let's, let's get started here now.
[120:10.50] So far, if you've noticed, single page apps have had a perfect score.
[120:15.30] They, there's no way they get a perfect score in this category.
[120:19.30] Um, right.
[120:22.50] There's, there's, there's, there's just no possible way.
[120:26.02] Um, right.
[120:30.18] Like all the JS.
[120:34.42] I mean, it can be code split, but like all JS.
[120:36.90] Um, and with SSR double data, double template.
[120:46.42] Right.
[120:50.98] Cause you send the data both as Jason and as in the HTML encoded, you send the template,
[120:57.22] both in the code and in the HTML encoded.
[121:01.46] And you have all the JS logic for, you know, all the components, but this is just,
[121:07.86] yeah, this is everything.
[121:10.74] See, the reason I don't consider the JS overhead that much here is because most of the JS code
[121:18.34] framework can often, I'm getting, it depends how it's authored can also it's often the templating
[121:23.46] code.
[121:23.78] Right.
[121:24.10] If you ever like gone into like solids playground and, uh, you know, obviously logic here makes
[121:31.70] up space, but what I'm getting at is as your page gets larger, the thing that actually grows the most
[121:36.58] are these template elements.
[121:39.94] I think attaching the vent handlers arguably as well, but over this, this size is, is giant.
[121:47.38] Um, like right now it's just a button, but the, you know, this is the thing that scales with the size
[121:53.94] of your app, um, everything else here, this skills with interactivity, right?
[121:57.70] If there's nothing interactive on your page, um, you know, so like all things fair comparing server
[122:04.82] components to a spa, for example, then, I mean, if you think about it, then you don't have this code either.
[122:15.94] What are you rendering?
[122:16.90] Like that's, this is the, like, if, if you're treating it under the same use cases,
[122:27.86] the code that scales without interactivity is just the template.
[122:32.50] So I'm not penalizing the JS so much for it.
[122:35.14] Like if I add like a div around this
[122:39.06] and close the div
[122:43.86] and then add, you know, H1 and get the thing that's going to keep on growing is this,
[122:53.06] not the size of my interactivity of the component.
[122:56.02] this is literally just a call function.
[122:58.42] So it's, it's worth a call out when comparing a certain degree between server components and like
[123:07.86] single page app type art mentality is that the template code is a lot of the JS code.
[123:15.14] um, so to speak, obviously, if you have advanced logic
[123:19.38] and you bring it in, then that will make the client larger.
[123:23.70] But if you also put that logic
[123:30.98] to the server and using like server function, you also have a way of alleviating that, so to speak.
[123:36.10] Like there's different mechanisms for leaving aiding that even in a single page app.
[123:41.06] um, framework.
[123:42.50] Okay.
[123:43.38] But yes.
[123:44.74] Yeah.
[123:49.14] Yeah.
[123:50.58] I mean, there's not much to say here.
[123:52.50] There's, there's just no winning.
[123:53.62] Yeah.
[124:01.30] You have a sinking feeling that the staples are going to come off top here.
[124:08.58] Well, the thing is maybe they should, because the one that I'm just, let's, let's, let's keep on going.
[124:15.94] Server components.
[124:17.70] Talk about server components.
[124:21.14] I'm just giving a score between one and three, like three is the best.
[124:26.18] It's very arbitrary, arbitrary, uh, holistic view, looking at not DX so much, but looking at
[124:34.66] the mechanics from architecturally within these, uh, uh, sort of architect architectures that we've
[124:42.58] been focusing on throughout the stream.
[124:44.26] Um, I, I wonder bundle a lot of these things under the same categories where some people say,
[124:50.66] oh, these are different things.
[124:51.54] I'm, I'm grouping them in a way that I think is logical from mechanically how they work.
[124:59.70] Yeah, no, I I've been just doing it on three.
[125:01.54] What it does is it lets me say, like, I don't really know.
[125:06.58] It's hard for me to articulate how much better something is.
[125:09.54] So three gets like the biggest one is three and one means like way better, but this gives us a
[125:15.30] place to say, this is two.
[125:16.26] This is a little better.
[125:17.06] This is a little worse.
[125:17.78] It's a little relative scale, which makes it less than a perfect science because not all of these are
[125:22.74] weighted equally in importance, especially depending on the type of app you have.
[125:26.58] Right.
[125:26.90] If we had five, maybe this would be more extreme.
[125:31.78] I mean, we could, we could, we, we could try and rescore these to five afterwards.
[125:36.50] But, um, let, let's continue here.
[125:39.70] Server components.
[125:40.42] So the funny thing about server components is less JS.
[125:47.14] Sure.
[125:47.38] But there's still double data because of the serialization format.
[125:53.22] And, and there's still double data and double template funnily enough, not all the data,
[125:59.62] double, actually quite often all the data, actually double data, double the template.
[126:05.46] Um, ironically, like less JS runs.
[126:11.30] So like, so yeah, so all JS, so this load and then all JS runs.
[126:19.94] Less JS runs, but generally speaking, I'm going to say like, I, I, I benchmark this.
[126:30.10] If you've seen my talk, the front end existential crisis, I'm only going to say that server components
[126:34.26] are an incremental improvement over a single page app.
[126:38.50] And to be fair.
[126:39.14] Yeah.
[126:42.26] I mean, I'm going to go, I'm just going to put that as a baseline.
[126:44.98] Okay.
[126:45.22] There isn't really much else to say here, I think.
[126:50.34] And then staple servers.
[126:52.42] This is interesting because there's nothing to hydrate.
[127:02.02] Is there, they just need to like basically attach a event, their event delegation system, right?
[127:06.74] Event delegation done.
[127:09.14] If that sounds familiar to you, there's another approach, the resumability that does this as well.
[127:14.82] So event delegation is only hydration.
[127:18.50] Really?
[127:19.46] Um, there is this like long wait up time with the web socket connection.
[127:24.74] I know you can HP two back, but it was noticeable when we were testing stuff with live view.
[127:29.38] We could tell that there was a, there was that time period, but I'm going to throw out there.
[127:35.22] And I don't know if live view already does this, but they could.
[127:37.62] So architecturally, this is a thing they could use event recapture the same way we do during
[127:42.18] hydration with solid and react and just play back those events.
[127:46.10] And the connection time versus the hydration time is probably comparable.
[127:51.70] And they don't need, they have like way less JS, no double data, no double, no double template.
[128:06.66] Cause they don't need to send that stuff.
[128:08.18] So like, I, I,
[128:14.34] I mean, how is this anything but a three, right?
[128:17.22] Like, even if there was a delay hooking up the socket, the same tricks that we use to mitigate,
[128:24.50] you know, progressive enhancement, all the stuff we use to mitigate hydration still works here.
[128:29.38] So, um, yeah, I, I gotta get them thing.
[128:34.66] If you don't SSR, there's no report of a random replay.
[128:40.90] Sure.
[128:41.22] But if also I'm comparing these to SSR.
[128:43.06] If, if, if, if, if maybe my, I'm talking SSR spot.
[128:46.98] If I was not talking SSR spot, the client side app would do good here, do good here, do good here.
[128:54.90] This would be like, if there was a zero, if there's a minus one, I would, I would, I would like, yeah.
[129:09.14] Anyway.
[129:09.54] That's basically my graph.
[129:12.82] Can we tally step up?
[129:14.42] Let's see where we ended up.
[129:15.46] Totals.
[129:18.74] Spa.
[129:22.42] We have three, three, three, one.
[129:25.86] So respectable pin server components.
[129:29.14] Three, one, two, barely two.
[129:36.50] Um, two.
[129:40.34] So I'll give it two.
[129:43.70] So eight.
[129:46.34] Now this is equal waiting, right?
[129:48.50] And, uh, state full server.
[129:52.74] One, three, three.
[129:56.42] Three.
[129:58.34] What do you know?
[129:59.78] Ten.
[130:01.30] All right.
[130:11.46] So, you know, I don't, I obviously some applications care about page load the most.
[130:18.98] Some applications are incredibly interactive and probably care about this part the most.
[130:28.10] This, this doesn't show all that much because all I'm saying is that the thing that dedicates the
[130:33.22] most towards its side ends up, if all things are treated equally, end up being the best.
[130:39.06] And the thing that compromises in the middle ends up, you know, being a bit more leveled in
[130:45.22] in certain places, but ends up ultimately, if all things are equal, not being the least, you know.
[130:51.70] Is it any iron that DX5 scored, scored lowest and boring came out on top?
[131:04.34] I mean, not, I, I don't, I don't think so.
[131:10.34] I, I mean, I would argue here from a developer experience standpoint that.
[131:15.14] When I consider all these use cases.
[131:18.90] Like you can see how little I had the right here.
[131:26.90] And you can see that here, we start getting more here, but the state kind of simple.
[131:37.46] Staple servers might have a win from like just how straightforward the, the, the like pure DX aspect
[131:45.78] is there's, there's more complications here.
[131:47.94] Clearly server component model has the most considerations because it's juggling both sides
[131:51.86] of things, but also, as I said before, staple servers are basically a non-starter for probably
[131:58.42] the vast majority of people building sites and apps.
[132:00.90] So it's like the thing you don't get to use, but it is interesting.
[132:07.14] And that's the, and here is the question, right?
[132:12.82] Do these things have room to grow within the mechanisms of, of their model?
[132:25.54] Because I gave spas a one here, but we can definitely get rid of all JS and all JS runs.
[132:37.78] Double data and double template is kind of inherent to us.
[132:42.34] I don't think we can actually solve that.
[132:43.62] But if we fix this, I, I wrote these two to be similar for a reason, because you could argue
[132:53.46] that some type of optimal hydration, like what quick does.
[132:59.30] It turns this into this suddenly server component, suddenly the, our fawn mentality, single model
[133:05.54] is basically the same as server components on initial page load.
[133:09.30] Suddenly this actually becomes an 11th.
[133:14.10] Right?
[133:18.82] So yes, there, there is room here.
[133:22.66] So that, that's one place where there's room.
[133:26.10] Let's look at staple servers.
[133:30.34] Do they have the potential to do client only interaction?
[133:34.02] I think they do.
[133:34.74] There might be a place to combine the model.
[133:37.38] I'll talk about it later.
[133:38.18] I actually have some ideas here.
[133:39.54] So there might be a way to, to, to up this, right?
[133:43.70] How about server components?
[133:48.42] I don't see it yet because you're already gone through the details and realize the trade-offs.
[133:54.34] I think server components actually have, they could make this maybe into a three.
[134:03.86] I think it's theoretically possible.
[134:07.46] I've talked about this before.
[134:08.74] I think server components have the possibility to solve double data, double templating.
[134:12.42] I think it's very, very hard.
[134:14.10] I think there is a world where they can get to a three.
[134:18.18] That was my premise why I was so into server components a while ago.
[134:22.34] I thought it was easier to make this a three than make this a two.
[134:26.74] I now am not so sure.
[134:30.58] I think it's probably easier to make this a three, or I think in order of easiness,
[134:42.18] making this a two, making this a three and making this a two, I think is in roughly that order.
[134:50.74] I think, I think.
[134:51.70] Yeah.
[134:52.82] Yeah.
[135:04.74] I mean, don't get me wrong.
[135:05.62] There are restrictions here types of apps.
[135:07.46] I don't think stapled servers are an option for most people.
[135:10.10] So like, I'm just talking purely architectural.
[135:14.10] If you had infinite money and infinite machines and talk mechanically what it does.
[135:19.86] Um, it is attractive.
[135:22.50] I think in reality, a lot of people can't choose stateful servers.
[135:26.02] The more interesting comparison here is I actually think single page app mentality
[135:31.94] might be easier to grow, right?
[135:34.58] The question is, it all comes down to, to like page load for the most part.
[135:41.46] And as I said, I like solids already pretty optimal here.
[135:45.86] Quick's even more optimal here enough that I would give say quick bumps this easily to a two.
[135:52.34] Um, you start, you know, there's other DX trade-offs and stuff, but you start actually
[135:58.34] asking about comparing the model.
[136:01.06] Yeah.
[136:01.30] Obviously there's JS consideration loading consideration, but fundamentally the architectures
[136:06.34] like the, when it sends template and data, I think those are fundamental parts of the architecture.
[136:13.70] Those aren't the things that you get to correct.
[136:15.78] Being able to be more optimal, um, around knowing to send less JavaScript.
[136:22.02] These are things that are optimizations and aren't fundamental.
[136:25.78] So there there's room there.
[136:27.06] It's arguable that here they could put the manifest for the JS components for the next page,
[136:34.10] you know, in the client, make the client bundle bigger.
[136:38.34] Like there's places where I can see trade-offs, but then you go, those trade-offs don't make sense.
[136:42.26] And I'll say, I don't have a crystal ball.
[136:43.46] I can't predict the future.
[136:44.58] So I can't rule out all possible things.
[136:48.26] But like, this was the one that turned me off server components.
[136:51.30] When I was like looking through this, I realized that server components were not
[136:54.02] what I wanted for most things.
[136:55.14] Server components are really good.
[136:56.82] If you don't care about mutating, if your data, basically, if you want to take some other
[137:01.86] kind of conclusions from, from looking at this, let's, let's, let's think about some conclusions here.
[137:06.02] From like use case.
[137:08.58] If you care about page load.
[137:13.46] You probably don't want bar.
[137:21.54] But, you know, it, it, it could get better.
[137:26.66] Right.
[137:26.98] If, if that's your primary thing.
[137:28.50] Right.
[137:30.42] This is like why, you know, Astro does so well on, you know, all those like web things that they,
[137:39.14] they, they always post about.
[137:40.18] Right.
[137:40.42] Other observations.
[137:42.58] Um, like obviously, um, like in my opinion, the staples server wins, but that's not obviously
[137:49.38] an option for everyone.
[137:50.50] Um, interesting thing.
[137:52.74] If your primary content changes.
[137:58.18] Rarely.
[137:59.78] Server components are attractive.
[138:09.86] Or another way to phrase it is if your primary content changes often, you don't, you probably, probably
[138:20.50] don't want server components.
[138:23.14] Right.
[138:27.46] If you're heavily, you probably don't want the full servers.
[138:43.38] That's like the most generic kind of conclusion you can see from this.
[138:52.42] Right.
[138:52.82] I don't know.
[138:53.30] I think everyone knew about the first and the, and the second one, but I don't know if people
[139:00.90] understood that the weakness of server components is, is actually mainly around how often your main content changes.
[139:19.38] Right.
[139:19.70] You're saying if, if users share ephemeral state, staple servers are attractive.
[139:23.46] Um, yeah, I mean, it's basically.
[139:26.90] Yeah.
[139:28.66] I mean, there's certain things like, as you mentioned, multiplayer, you need staple servers.
[139:34.90] But I was, I, again, the, this comes to the question of like architecturally that add-on
[139:46.50] can be like, you can add that to any of these architectures without that being like that aspect
[139:51.14] of it is just like, oh yeah, now I have blank plus web sockets.
[139:56.18] Um, the key here is like from our, yeah.
[140:04.90] I mean, I, I did maybe keep this to like, if you're going to go to web sockets anyways,
[140:10.58] then one that has a built in looks attractive, right?
[140:13.54] Right.
[140:16.18] I, I see how maybe heavily interactive, this thing, if you.
[140:24.66] It's not heavily attractive.
[140:29.54] It's like low latency, heavily attractive.
[140:34.90] There's other reasons not to want staple servers too.
[140:36.90] And there's other reasons, not this.
[140:37.94] I just, this is kind of, yeah.
[140:39.22] Yeah.
[140:47.86] I mean, it's not about our part of our problems.
[140:50.58] Like there's a lot of JS devs out there, but the other, I think the.
[140:52.74] Bigger.
[140:54.42] Thing is like.
[140:56.66] Stuff like serverless.
[141:00.02] Is kind of pushing away from stateful servers, right?
[141:03.78] People trying to scale large apps.
[141:05.54] They can't afford to keep connections with everyone.
[141:08.74] Now there are situations where that makes a ton of sense.
[141:11.06] And the, I know Elixir scales like mad.
[141:13.54] So like.
[141:14.82] There are potential there.
[141:17.14] So maybe yes, certain languages definitely.
[141:19.22] Push you there.
[141:20.74] If you tried to use node.
[141:22.82] Like I know live JS did it, you know.
[141:26.02] And node is fairly good at.
[141:27.78] Non-blocking async.
[141:30.18] But like I can picture.
[141:33.86] Like it probably doesn't hold a torch to.
[141:37.22] To like, you know.
[141:41.62] Elixir or whatever.
[141:44.34] And.
[141:44.66] I.
[141:47.46] Yeah, I do think there are considerations there from that kind of perspective.
[141:54.10] But.
[141:54.42] Yeah, I don't know.
[141:56.02] I can't.
[141:56.90] I can only really.
[141:57.78] This is very theoretical space.
[142:01.62] Right.
[142:08.34] But it's interesting.
[142:10.10] Can you change the.
[142:12.26] I think this is also kind of reflective where we should be thinking.
[142:14.90] Because can we change these aspects?
[142:16.50] Like.
[142:16.66] If you care.
[142:17.78] You probably don't want to spa, right?
[142:19.54] But the thing is.
[142:20.34] If.
[142:20.58] Can spas improve their initial page load characteristics?
[142:24.50] It's possible.
[142:25.30] Right?
[142:25.94] Um.
[142:29.14] These are.
[142:32.66] These.
[142:33.06] I think the other two might be harder.
[142:34.90] Is it.
[142:35.22] Easy.
[142:36.26] I mean.
[142:37.46] You can come up with other systems.
[142:38.66] But within the realm.
[142:40.10] It might be difficult to improve.
[142:41.54] How like.
[142:42.34] Low latency.
[142:44.02] Like non-async is.
[142:45.14] For staple server.
[142:46.10] Type architectures.
[142:47.06] Or state first.
[142:48.02] If primary concern.
[142:49.30] Is how often your content changes.
[142:50.58] Like you can't control.
[142:51.86] How often your content changes.
[142:53.38] So.
[142:54.26] Yeah.
[142:54.58] I think it's.
[142:55.06] It's interesting.
[142:56.74] Right?
[142:56.98] Um.
[142:58.58] Anyway.
[143:09.22] Network.
[143:09.62] I mean.
[143:09.94] Yeah.
[143:12.82] But I.
[143:13.94] A lot of these architectures.
[143:15.30] Are not going to work.
[143:16.10] Great.
[143:17.06] With network consideration.
[143:18.82] Like.
[143:19.06] I don't want to.
[143:19.70] Penalize.
[143:20.50] Too hard.
[143:21.22] There.
[143:21.94] Um.
[143:22.50] Definitely.
[143:29.38] I think the biggest thing.
[143:30.58] People don't realize.
[143:31.30] The server components.
[143:32.26] Are doing a lot of.
[143:33.22] Inefficient stuff.
[143:35.38] When it comes to.
[143:35.94] When they actually do the rendering.
[143:37.06] On the server.
[143:37.38] Which is.
[143:37.86] Not that inefficient.
[143:38.98] In the scope of things.
[143:39.86] If your baseline.
[143:40.50] Is like.
[143:40.74] MPA.
[143:42.34] Guess what?
[143:42.82] MPAs.
[143:43.94] You do something.
[143:45.14] You re-render the whole page.
[143:46.10] So who cares?
[143:46.66] You're used to that.
[143:47.38] But.
[143:48.34] Single page apps.
[143:50.10] And.
[143:50.58] These stateful server approaches.
[143:52.34] Have really optimized.
[143:54.26] Along.
[143:54.82] The vector for change.
[143:56.02] And I think that is.
[143:57.06] Kind of.
[143:57.46] Where the difference is.
[143:59.06] Spas.
[144:05.22] Yeah.
[144:05.46] Spas with optimistic updates.
[144:06.98] Work well.
[144:07.70] On bad networks.
[144:09.54] Yeah.
[144:09.70] They work decently.
[144:10.66] Well.
[144:10.90] It's kind of like.
[144:11.38] A mini offline.
[144:12.34] First.
[144:13.30] Bucket.
[144:14.90] So.
[144:15.46] You know.
[144:16.18] To.
[144:16.42] To a certain degree.
[144:17.46] Like.
[144:18.50] Obviously.
[144:18.76] If you're trying to do something.
[144:19.38] Too big.
[144:19.78] But it will give you.
[144:20.58] A little bit.
[144:21.14] Of leeway.
[144:22.02] Right.
[144:22.56] This.
[144:22.80] That's why scoring high.
[144:24.48] Here is good.
[144:25.78] I mean.
[144:26.14] There's so many aspects here.
[144:27.44] When you consider like.
[144:28.34] Versioning.
[144:29.30] Tearing.
[144:29.66] Cache.
[144:30.06] Cache ability.
[144:31.06] And stuff.
[144:31.54] This is just like.
[144:34.74] One exploration.
[144:35.62] I just wanted to kind of.
[144:36.42] Put it out here.
[144:37.06] Here because I think.
[144:37.86] That.
[144:38.66] That.
[144:41.38] Maybe single page apps.
[144:45.06] Have a bad rap.
[144:45.88] Maybe.
[144:46.82] It depends on what.
[144:48.58] Like.
[144:48.82] Maybe.
[144:49.22] Page load.
[144:50.90] Is.
[144:51.94] What's getting pushed here.
[144:53.16] So hard.
[144:53.70] Right.
[144:54.20] The thing is.
[144:55.44] If page load.
[144:57.88] Is everything.
[144:58.84] To be fair.
[145:00.40] It's worth.
[145:01.90] Caveating here.
[145:02.94] That.
[145:03.52] If you.
[145:04.62] Pure islands.
[145:08.06] I should add this here.
[145:10.58] Pure islands.
[145:12.18] Are.
[145:13.94] Are.
[145:14.30] Are.
[145:14.74] Three.
[145:15.08] Here.
[145:15.82] Pretty much.
[145:17.96] They do not.
[145:19.18] Suffer.
[145:20.32] From.
[145:22.16] From.
[145:22.86] From this.
[145:23.58] This is the.
[145:24.44] Client side routing.
[145:25.34] Is what makes.
[145:26.12] This.
[145:27.30] Challenging.
[145:28.60] Right.
[145:28.98] Um.
[145:30.38] This is why.
[145:34.94] I was very interested.
[145:35.88] Because I.
[145:36.26] If you could get this.
[145:37.10] Two.
[145:37.48] Two or three.
[145:38.46] Then.
[145:39.84] Like.
[145:40.58] That's one way.
[145:42.50] To bump the numbers.
[145:43.46] A little bit.
[145:43.92] I realized.
[145:45.26] Conceptually.
[145:46.08] Because of.
[145:47.16] This.
[145:47.84] That I no longer like them.
[145:49.46] Or cared about them anymore.
[145:50.64] This was the blow.
[145:51.86] Not.
[145:52.34] This.
[145:53.06] I.
[145:53.32] Even.
[145:54.04] Even getting this up to the three.
[145:55.78] Still.
[145:56.66] You know.
[145:58.72] Still is.
[146:00.72] Below the others.
[146:02.72] On.
[146:03.34] On average.
[146:04.12] But if you care.
[146:05.98] Specifically.
[146:07.26] About this.
[146:08.14] This is your segment.
[146:09.10] Then.
[146:09.96] This is like.
[146:11.20] This is probably.
[146:12.66] A pretty reasonable.
[146:14.24] Way to go.
[146:15.00] Especially.
[146:15.30] You know.
[146:17.94] If.
[146:18.76] If a lot of the complexity.
[146:20.18] Is kept out of your way.
[146:21.22] Like it is in.
[146:21.90] Something like Astro.
[146:22.84] Would you even.
[146:28.22] Yeah.
[146:28.52] I mean.
[146:28.76] That's the thing.
[146:29.14] I mean.
[146:29.66] I didn't put it here.
[146:30.42] I said this.
[146:30.80] Make it this negative one.
[146:32.38] But this.
[146:32.96] Client rendered single page app.
[146:34.72] For all of these.
[146:36.94] Except for this one.
[146:38.02] Where it's worse.
[146:38.62] Is essentially still three.
[146:40.34] Through.
[146:40.60] Throughout.
[146:41.08] Like.
[146:41.38] Client.
[146:42.00] Single page app.
[146:43.26] Maybe.
[146:44.18] On average.
[146:46.06] Isn't.
[146:46.36] You know.
[146:46.94] By this grading scale.
[146:48.14] Is a nine.
[146:48.58] It's still.
[146:49.76] On.
[146:51.80] The full range of.
[146:53.36] Operation.
[146:54.04] For an application.
[146:54.90] I'm not talking about sites.
[146:55.86] I'm not talking about like.
[146:56.92] Places where you only care about this.
[146:58.62] It's.
[146:59.50] It kind of averages out.
[147:01.06] Pretty decently.
[147:01.50] Yeah.
[147:03.08] But yeah.
[147:03.56] In.
[147:04.00] In this context.
[147:05.64] I'm including SSR.
[147:06.62] But.
[147:07.52] The only place that it actually.
[147:09.14] Makes a huge impact.
[147:10.24] Is.
[147:11.00] Is here.
[147:11.78] And.
[147:12.56] It's already a one.
[147:13.88] Even with SSR.
[147:14.76] I mean.
[147:23.86] In a sense.
[147:24.52] SSR.
[147:25.10] Is just.
[147:25.86] An optimization.
[147:27.24] To a sense.
[147:29.12] It does.
[147:29.60] Put other constrictions in.
[147:31.06] You know.
[147:31.82] That we have to think about.
[147:32.52] But.
[147:32.72] It's not.
[147:33.46] It doesn't fundamentally change the architecture.
[147:35.56] All right.
[147:37.58] So.
[147:40.06] I don't know.
[147:41.42] It's.
[147:41.78] It's.
[147:42.08] It's interesting.
[147:42.70] How are we doing chat?
[147:48.86] You've missed so much.
[147:51.38] You have.
[147:52.02] I don't know.
[147:54.98] I think.
[147:55.52] I think.
[147:55.54] I think.
[147:55.64] I think.
[147:55.96] I think there's.
[147:57.16] I think there's some.
[147:58.28] Some.
[147:58.98] Hopefully some hidden gems in this.
[148:00.70] And.
[148:01.46] Hopefully when we go back to this.
[148:03.08] Original table.
[148:04.04] You can kind of.
[148:04.74] See.
[148:05.52] How the spectrum going.
[148:07.88] I think we have a tendency a lot.
[148:09.60] In JavaScript.
[148:10.24] To underrate.
[148:11.38] This section.
[148:12.22] The section is actually.
[148:13.94] Kind of impressive.
[148:15.82] I think there's a lot of walls.
[148:17.50] In the way of it.
[148:18.16] I think.
[148:20.54] There.
[148:22.54] Are places.
[148:23.74] Where this fits.
[148:24.96] Really.
[148:25.58] Really.
[148:25.88] Well.
[148:26.26] But as the general architecture.
[148:28.00] Is.
[148:29.36] Very.
[148:30.70] Difficult.
[148:31.46] To.
[148:32.50] Deal with certain types of things.
[148:34.66] And then.
[148:35.82] This.
[148:36.94] Has.
[148:38.42] A real cost.
[148:39.56] That we need to figure out.
[148:42.14] How to mitigate.
[148:45.18] So like.
[148:45.92] None of these are easy.
[148:46.90] Problems.
[148:47.72] Per se.
[148:48.26] But I think.
[148:51.88] In talking about this.
[148:52.88] We.
[148:53.00] We have talked about.
[148:54.26] Pretty much.
[148:54.70] All of.
[148:55.54] The different types of technology.
[148:58.50] You could be using.
[148:59.86] To build a web.
[149:00.50] A web application today.
[149:01.56] And hopefully.
[149:07.06] This isn't everyone's conclusion.
[149:08.46] Going back to each.
[149:14.54] Okay.
[149:15.34] Which graphic.
[149:19.90] All the graphics.
[149:20.72] Or.
[149:22.22] Or.
[149:23.14] Or just this one.
[149:23.96] I mean.
[149:24.14] Someone could probably.
[149:24.78] Screen share it.
[149:25.98] To.
[149:27.50] I'm.
[149:27.88] But yeah.
[149:30.10] I could probably.
[149:31.00] Export this somewhere.
[149:31.98] It's in the pot.
[149:39.36] That's my answer.
[149:39.94] That's my answer.
[149:39.96] For everything.
[149:40.48] Yeah.
[149:50.08] There's a.
[149:50.90] There's a fact.
[149:51.58] That there's.
[149:52.02] There is like.
[149:53.02] Extra.
[149:54.52] Overhead.
[149:55.88] To it.
[149:57.08] The interesting thing is.
[150:00.04] Yeah.
[150:00.46] With static site generation.
[150:07.64] There's even ways.
[150:08.26] To optimize the.
[150:09.56] The CDN.
[150:11.82] Delivery.
[150:12.38] Of certain things.
[150:13.92] Yeah.
[150:14.38] I don't know.
[150:14.70] It's interesting.
[150:17.44] Yeah.
[150:17.80] This is probably.
[150:18.54] The real hit.
[150:19.14] Yeah.
[150:21.04] Yeah.
[150:21.62] Look.
[150:22.02] There.
[150:22.48] There is.
[150:23.12] There is an added.
[150:23.96] Like.
[150:24.80] There's a whole other.
[150:25.48] Environment.
[150:26.06] You have to worry about.
[150:26.80] Where things are running.
[150:28.46] There are benefits to SSR.
[150:30.16] Single page.
[150:31.00] Loading.
[150:32.00] That go.
[150:32.40] Beyond.
[150:33.78] You know.
[150:35.12] SEO.
[150:35.52] There's a bunch of benefits.
[150:37.00] Timing with waterfalls.
[150:39.74] One of the problems.
[150:40.28] With client side rendering.
[150:41.08] Is.
[150:41.48] It's almost all.
[150:43.14] In this first category.
[150:45.18] Like.
[150:45.48] I didn't even get into it.
[150:46.38] But like.
[150:46.68] You can server render.
[150:48.34] Preload tags in the page.
[150:49.54] To reduce.
[150:49.98] Like.
[150:50.36] Help reduce one of the waterfalls.
[150:52.02] Because otherwise.
[150:52.52] You get in this place.
[150:53.22] Where like.
[150:53.76] Even with code split routes.
[150:54.98] That get other code split.
[150:57.04] Like you have to reload the bundle.
[150:58.08] Before you realize.
[150:58.74] More JavaScript to load.
[150:59.84] You know.
[151:00.60] Because you don't know.
[151:01.16] What page you are on.
[151:02.02] At the time you're.
[151:02.66] In the client.
[151:03.44] Like.
[151:03.66] That's why I was saying.
[151:05.28] If I could put.
[151:06.18] Client side spa.
[151:08.08] As its own category here.
[151:09.54] Maybe.
[151:09.96] Maybe do the same thing.
[151:10.98] I did with pure islands.
[151:11.80] Go.
[151:12.92] CSR spa.
[151:14.60] It's going to be.
[151:16.64] Like.
[151:17.34] Minus one.
[151:18.10] But.
[151:21.66] You know.
[151:23.68] And this is the problem.
[151:24.82] Right.
[151:25.12] A lot of people's frame of reference.
[151:26.78] They go.
[151:27.32] Oh.
[151:27.48] My react app.
[151:28.28] They think.
[151:28.98] This.
[151:29.80] So when they think.
[151:30.42] Single page app.
[151:31.56] They're just like.
[151:32.10] This.
[151:33.36] And then they're comparing it.
[151:34.54] To something over here.
[151:35.36] And you're like.
[151:35.70] This is an amazing win.
[151:37.08] Right.
[151:37.56] I think.
[151:38.48] I think.
[151:39.96] This gap.
[151:42.20] I think there's a lot of potential here.
[151:43.56] In different places.
[151:44.40] Yeah.
[151:44.64] Do lakes add any benefits.
[151:47.22] To spas.
[151:48.16] Yeah.
[151:48.44] So.
[151:48.70] I snuck lakes in.
[151:50.34] Under here.
[151:50.86] Yeah.
[151:52.12] Yeah.
[151:52.58] I.
[151:52.96] It's.
[151:53.42] But.
[151:53.98] All they are.
[151:55.50] Is.
[151:56.08] Instead of sending JSON.
[151:57.18] You're sending HTML.
[151:58.18] Essentially.
[151:58.84] Right.
[151:59.12] They're inert.
[151:59.84] Server components.
[152:02.46] So.
[152:02.74] You saved.
[152:04.14] A bit of JavaScript.
[152:05.02] So that.
[152:07.22] So you didn't have to render it on the client.
[152:08.88] So.
[152:09.30] It is a technique.
[152:10.82] To.
[152:11.82] Ship less JavaScript.
[152:13.78] But.
[152:19.02] It's also only really useful.
[152:20.72] For things that are not really interactive.
[152:22.58] So.
[152:23.38] It's only a subset.
[152:25.96] Of what you can do.
[152:26.70] With a proper.
[152:27.44] Server component.
[152:28.90] Scenario.
[152:31.20] Like.
[152:31.58] Yes.
[152:31.96] It's.
[152:32.20] It's.
[152:32.46] And.
[152:33.24] There's a lot of places where.
[152:34.70] Now you're sending the template.
[152:37.32] Which is static.
[152:37.98] Right.
[152:38.28] Think about it.
[152:38.74] If it's basically static.
[152:39.72] I mean.
[152:39.98] It doesn't necessarily mean fully static.
[152:42.12] It could change every time you hit the lake.
[152:44.02] So that's fair.
[152:45.72] It's just not interactive.
[152:47.40] Yeah.
[152:47.70] I don't know.
[152:48.86] It's.
[152:49.86] There could be scenarios.
[152:53.12] Where you have a most.
[152:54.58] Like basically all static part.
[152:56.44] And it would make sense.
[152:57.16] But it's kind of like a hyper optimization.
[152:58.62] In the sense that it's just like.
[153:00.08] It's kind of like.
[153:01.26] Having a spawn.
[153:02.50] Like loading an HTMX into the middle of it.
[153:04.52] I mean.
[153:07.48] You could completely do that.
[153:08.42] Like.
[153:08.68] Create resource and solid.
[153:10.62] Render HTML in an endpoint.
[153:12.98] And then.
[153:14.02] Have the.
[153:15.02] The signal.
[153:15.92] Basically inner HTML it.
[153:17.40] As code.
[153:18.16] Like.
[153:18.70] Ta-da.
[153:18.98] You know.
[153:19.36] This is why I sometimes joke about.
[153:20.90] You know.
[153:22.04] HTML partials.
[153:23.26] Isn't like a framework.
[153:24.56] It's just like a.
[153:25.66] Basic tool.
[153:27.42] Right.
[153:33.28] I mean.
[153:33.96] I mean.
[153:33.96] I mean.
[153:34.08] No.
[153:38.70] No.
[153:40.86] I.
[153:41.00] Like.
[153:43.32] Resumability already gets the benefits.
[153:46.66] Like.
[153:46.90] Resumability already.
[153:47.74] Assumes that the outside is.
[153:49.78] Server.
[153:50.80] Until it needs to render it.
[153:52.36] I guess.
[153:52.74] I guess.
[153:54.12] I.
[153:55.44] It's.
[153:55.88] It's.
[153:55.88] It's kind of awkward.
[153:56.62] You.
[153:56.92] You.
[153:57.36] You actually need to denote.
[153:58.86] Boundaries for where client interaction could happen.
[154:01.40] If you want to get that benefits.
[154:02.72] It's more like you actually need client components.
[154:04.38] But then have those client components.
[154:05.72] Not load all their code.
[154:06.84] Is actually.
[154:09.90] If you want to solve serialization.
[154:11.44] Where you'd want to be.
[154:12.98] But you start seeing why this is kind of a mess.
[154:16.58] Okay.
[154:17.38] Okay.
[154:17.88] Let's.
[154:18.30] Let me see what else I.
[154:20.96] I have.
[154:21.94] In my HackMD drawer.
[154:23.80] Because I think.
[154:24.40] I want to move to the next topic.
[154:27.44] Semi-related though.
[154:31.04] Unless anyone has anything else you want to add.
[154:32.56] Yeah.
[154:37.34] Exactly.
[154:37.76] I mean.
[154:38.14] It's.
[154:39.90] Ta-da.
[154:41.60] You know.
[154:42.22] The funniest thing is.
[154:45.72] You might even.
[154:47.92] Someone.
[154:48.30] Someone was trying to serialize.
[154:49.56] Solid JSX.
[154:50.48] And it didn't quite work.
[154:52.44] But you can like.
[154:53.08] You could basically use our JSX.
[154:55.42] In an endpoint.
[154:55.98] Like in a server function.
[154:56.92] And then like.
[154:57.36] If you know about.
[154:58.80] The hidden property in it.
[155:00.40] You could probably like.
[155:01.46] Snipe the.
[155:02.34] Rendered HTML out of it.
[155:03.82] Anyway.
[155:09.40] I think.
[155:10.04] I think.
[155:10.56] I think resumability.
[155:11.46] Is.
[155:12.70] A topic.
[155:15.28] Worth considering.
[155:16.46] In terms of that optimization space.
[155:18.14] Right.
[155:18.34] As I said.
[155:18.72] I don't feel like.
[155:19.78] It actually.
[155:20.88] Changes the architecture.
[155:22.54] It's still single page app.
[155:23.86] Mentality.
[155:24.40] Perhaps.
[155:24.88] But it does.
[155:26.82] It has the ability.
[155:29.04] To change.
[155:29.66] The.
[155:30.08] The math.
[155:31.20] In terms of.
[155:31.86] The cost of initial page load.
[155:36.56] Which makes it very interesting.
[155:37.58] Okay.
[155:40.26] Yeah.
[155:40.66] So.
[155:40.90] I wrote a lot of articles.
[155:42.34] HackMDs this week.
[155:44.36] I want to talk about a few of them.
[155:46.72] Actually.
[155:48.60] No.
[155:48.72] This one's not new.
[155:49.46] I was playing.
[155:50.10] I actually fixed a typo.
[155:51.64] I don't want to talk about resumability.
[155:53.52] Without serialization.
[155:54.52] But it came up.
[155:55.20] Because I have.
[155:55.64] Something else I was looking at.
[155:56.90] First thing.
[155:58.94] I want to talk about.
[155:59.82] Is.
[156:02.08] We're going to talk more about.
[156:05.92] I got three of them.
[156:07.08] Basically.
[156:07.38] I have something.
[156:08.54] Where I want to talk about.
[156:09.68] Optimizing.
[156:11.98] Past.
[156:12.70] Single flight mutations.
[156:13.70] Talk about.
[156:15.22] The role of caching.
[156:16.48] APIs.
[156:17.54] So.
[156:19.26] And I'm going to talk.
[156:19.98] Maybe a bit about.
[156:20.78] Next.
[156:21.20] Use cache.
[156:22.28] And then I want to talk about.
[156:24.22] Stateful.
[156:25.50] Signals.
[156:26.32] So I have.
[156:28.04] You know.
[156:28.66] So talk about stateful servers.
[156:29.80] With signals.
[156:30.36] These topics.
[156:33.14] All three of them.
[156:34.04] Are pretty interesting.
[156:35.08] But.
[156:35.92] Since I just did a heavy one.
[156:36.90] I'm going to bang out.
[156:37.42] A couple quick ones first.
[156:38.58] And then.
[156:38.90] We'll get to this one.
[156:39.80] Yeah.
[156:43.10] We use it.
[156:43.66] Before frameworks.
[156:44.78] Yeah.
[156:44.98] Yeah.
[156:47.44] Yeah.
[156:47.98] So this thing.
[156:51.68] This sounds very interesting.
[156:52.42] Yeah.
[156:52.58] For sure.
[156:52.78] Okay.
[156:53.18] So let me start off.
[156:54.78] With this one.
[156:55.42] Because it's a quick one.
[156:56.22] I.
[157:02.06] If.
[157:03.06] If.
[157:03.64] If you've ever used.
[157:05.10] TAN stack query.
[157:06.04] Or similar.
[157:07.90] You're.
[157:09.82] And we talked about this on stream.
[157:10.98] You're probably familiar.
[157:11.68] With the whole like.
[157:12.64] Do the mutation.
[157:13.92] You know.
[157:15.38] Add the to do.
[157:16.28] And then.
[157:17.10] Get the response back.
[157:18.26] And then be like.
[157:19.36] I mean.
[157:20.50] We might have even drawn.
[157:21.74] This somewhere on.
[157:22.88] On here.
[157:26.04] Not this one.
[157:27.04] Not this one.
[157:27.04] Just see if I have it in.
[157:29.30] I changed computers.
[157:30.72] So.
[157:31.02] Oh.
[157:31.68] Is that it right there?
[157:33.06] Is that you?
[157:33.76] No.
[157:36.34] This was talking about PPR.
[157:38.14] So it's not there.
[157:39.58] Okay.
[157:39.80] Never mind.
[157:40.20] Okay.
[157:43.84] It doesn't matter.
[157:45.12] Whole time.
[157:45.76] We talked about the typical.
[157:47.14] In fact.
[157:48.48] Actually.
[157:48.92] You know what?
[157:52.82] I can grab this.
[157:55.06] From my talk.
[157:55.84] Your channel.
[158:00.40] Where was it?
[158:03.46] My last V talk.
[158:05.98] I should just like.
[158:10.30] Pull out my slides.
[158:11.26] I should just pull out my slides.
[158:16.00] Because.
[158:16.34] Honestly.
[158:17.50] I just wanted this.
[158:18.40] This image.
[158:19.06] Right?
[158:22.82] Essentially.
[158:26.40] Typical.
[158:27.82] You know.
[158:28.82] You do a mutation.
[158:30.06] You go.
[158:31.48] Yes.
[158:31.82] It succeeded.
[158:32.32] Revalidate to do's.
[158:34.44] Send that data back.
[158:36.24] This is your typical.
[158:37.24] These days.
[158:38.24] Double flight.
[158:39.14] Mutation story.
[158:41.02] That we do.
[158:41.74] In most frameworks.
[158:42.50] And.
[158:45.76] The reason we do it.
[158:47.04] Is because it's freaking easy.
[158:48.02] Right?
[158:48.72] You literally.
[158:50.54] Just give it a key.
[158:51.48] And call it a day.
[158:52.64] You just go.
[158:53.02] Okay.
[158:53.30] I'm going to update.
[158:54.60] Something on a to do.
[158:56.78] Just give me the to do's back.
[158:58.08] And then.
[158:58.82] Because the way these things.
[159:00.22] Wire up through the cache.
[159:01.34] Everything in the UI.
[159:02.14] That's based on those to do's.
[159:03.34] Updates automatically.
[159:04.18] You don't have to worry about.
[159:05.02] Manual cache writing.
[159:06.12] And.
[159:08.74] You know.
[159:09.42] It just makes things really easy.
[159:10.90] Remix loaders are the same.
[159:12.20] Almost all meta frameworks.
[159:14.00] Have picked up a pattern.
[159:14.90] Like this.
[159:15.68] Because it just like.
[159:16.52] Removes all the like.
[159:18.10] Fiddling.
[159:19.44] With stuff.
[159:20.30] You know.
[159:20.80] It's very.
[159:21.76] It feels very.
[159:22.50] UI equals function of state.
[159:24.02] You just like.
[159:24.68] Essentially say.
[159:26.26] Invalidate these things.
[159:28.04] Update the UI.
[159:29.08] It's just.
[159:29.42] It's very nice.
[159:32.22] Obviously.
[159:32.68] Single flight.
[159:33.46] Mutations.
[159:34.48] Moves.
[159:36.22] This interaction.
[159:37.56] Basically.
[159:40.24] To the server.
[159:41.18] So instead of sending back.
[159:42.44] The acknowledgement.
[159:42.94] The server.
[159:44.56] At this point.
[159:45.70] Goes.
[159:47.66] And takes that.
[159:48.92] Redirect.
[159:50.50] Stuff.
[159:51.38] Because it already knows.
[159:52.20] You know.
[159:53.92] Revalidate.
[159:55.30] And then only sends back data.
[159:56.62] If.
[159:57.52] I'm pretty sure.
[159:58.40] Most people who watch my stream.
[159:59.82] Have seen this stuff before.
[160:01.78] But.
[160:03.20] Sorry.
[160:03.66] I'm on the wrong.
[160:04.74] Let me get out of this.
[160:11.18] But like.
[160:12.06] Let me see.
[160:15.30] What's an example of this.
[160:16.74] Let's see if I can find.
[160:18.56] Strello.
[160:18.96] Not the app.
[160:20.98] Strello.
[160:21.48] GitHub.
[160:26.84] Perfect example of this.
[160:28.24] Is if I go in here.
[160:29.28] And.
[160:30.64] This.
[160:34.32] Is it server TS?
[160:36.52] I can't even.
[160:37.20] I'm trying to remember.
[160:40.12] Where.
[160:40.52] No.
[160:42.40] I think it's in.
[160:43.32] You guys put it in.
[160:44.10] With the components.
[160:44.82] Note.
[160:47.20] Yeah.
[160:49.44] Okay.
[160:49.62] There's a bunch of actions here.
[160:50.68] Doing database stuff.
[160:52.68] My point is.
[160:55.08] Here it goes.
[160:56.84] JSON.
[160:57.20] True.
[160:58.22] Which is just the act.
[160:59.20] But then it goes.
[160:59.80] Revalidate.
[161:00.76] This key.
[161:01.82] And because this whole action.
[161:03.52] Happens on the server.
[161:04.58] Create note.
[161:05.22] Even though.
[161:07.56] We're sending back.
[161:08.60] The information to the client.
[161:09.80] To revalidate.
[161:10.42] We actually know.
[161:11.16] Here on the server.
[161:11.86] And we can revalidate.
[161:13.38] We can fetch that data.
[161:15.92] And send it back.
[161:16.48] On the same request.
[161:17.20] Right.
[161:17.48] So.
[161:19.10] And if.
[161:20.86] If I.
[161:21.46] Go to the actual.
[161:24.76] Strello board.
[161:25.50] Which hopefully is still up.
[161:27.36] Um.
[161:27.70] Can't even remember.
[161:30.60] I actually don't even remember.
[161:36.94] What the password is here.
[161:38.08] Okay.
[161:41.06] It's still there.
[161:41.48] Beautiful.
[161:41.88] Tells you how bad that password is.
[161:45.74] Okay.
[161:45.94] If you go here.
[161:48.08] and you watch.
[161:48.96] What we actually do.
[161:50.58] Over the network.
[161:51.36] Well.
[161:52.42] We got these crazy.
[161:53.30] Optimistic updates.
[161:54.54] Where we.
[161:55.34] If I go something like.
[161:57.06] Change it.
[161:59.04] So that.
[161:59.76] Where is the.
[162:00.72] Should be away.
[162:04.04] Yeah.
[162:04.24] No throttling.
[162:04.72] No throttling.
[162:04.72] If I make this like.
[162:05.44] Super slow.
[162:06.26] We can still.
[162:07.74] Move this over here.
[162:09.04] Move this over here.
[162:10.64] Before these things.
[162:11.84] Even finish.
[162:12.50] Processing.
[162:13.44] And we have a snappy app.
[162:14.80] For the optimistic updates.
[162:15.70] But.
[162:16.44] What you'll notice.
[162:17.66] Is.
[162:17.94] And they're only a single flight.
[162:19.36] Like if I go here.
[162:20.44] And move here.
[162:20.96] There's only one request made.
[162:22.50] It's not doing the double.
[162:23.28] But if you notice.
[162:24.42] We're actually sending back.
[162:25.40] The whole freaking board.
[162:26.40] Every time we do a mutation.
[162:28.74] Right.
[162:29.54] This giant payload.
[162:30.66] Of the whole board.
[162:31.38] It doesn't matter what I do.
[162:32.18] If I go in here.
[162:32.70] And go.
[162:33.02] AS4.
[162:34.02] Guess what?
[162:35.90] And I can turn off.
[162:38.00] Go back to no throttling.
[162:39.10] It's the whole board getting sent.
[162:40.92] Sure.
[162:41.58] We do a quick data diff.
[162:42.86] And no components re-render.
[162:43.92] But.
[162:44.92] It's a little bit wasteful.
[162:47.66] For something that changes all the time.
[162:49.00] I think it's fine.
[162:50.42] But.
[162:51.78] But sometimes you don't need to send all the data.
[162:55.94] Right.
[162:56.26] That's basically.
[162:57.10] Where my thinking is going here.
[163:00.50] Right.
[163:00.82] So.
[163:01.12] What if you.
[163:02.80] Right.
[163:03.70] You can always tell.
[163:05.34] And not to re-validate.
[163:06.76] You know.
[163:07.14] So.
[163:10.48] Let's refresh another being called it.
[163:13.80] So I came up with this kind of idea.
[163:15.56] I mean.
[163:17.52] Maybe I'll get to that later.
[163:18.60] But.
[163:18.96] What should I put it?
[163:21.06] Yeah.
[163:21.34] It's a tricky little.
[163:22.86] Dilemma.
[163:24.16] I'm going to phrase this whole thing.
[163:25.82] Basically.
[163:26.50] One of the challenges.
[163:28.28] Is that.
[163:29.76] This.
[163:31.64] In.
[163:32.54] This site works.
[163:33.84] If I go here.
[163:34.98] And go P.
[163:35.50] And then I go.
[163:36.10] Disable.
[163:37.06] Disable.
[163:38.82] JavaScript.
[163:40.42] Okay.
[163:41.14] I'm disabling JavaScript.
[163:42.10] Now.
[163:42.54] JavaScript is disabled.
[163:43.56] Okay.
[163:45.14] When I move this card over here.
[163:46.64] I think this one.
[163:48.32] Does this work?
[163:49.20] I'm trying to.
[163:50.10] Maybe the drag regions.
[163:51.68] Don't work.
[163:52.26] I thought it worked.
[163:52.94] Huh.
[163:55.84] Are the trigger.
[163:57.30] Oh.
[163:57.54] It's because of the triggers for these.
[163:58.84] Maybe this one isn't progressive enhanced.
[164:01.38] I actually.
[164:03.36] It's funny.
[164:03.92] Because it's based on the remix one.
[164:05.24] Maybe this one isn't actually progressive enhanced.
[164:07.66] That's interesting.
[164:08.58] I have to consider the progressive enhanced case.
[164:11.88] It's enabled JavaScript.
[164:12.70] Interesting.
[164:15.82] Yeah.
[164:17.10] I mean drag and drop.
[164:17.76] I get.
[164:18.20] But.
[164:18.50] We.
[164:19.68] It doesn't look like we bothered.
[164:20.94] Because of functionality.
[164:21.80] It's not there.
[164:22.12] We didn't bother implementing any of it without JS.
[164:24.12] But my point is.
[164:24.72] If.
[164:26.14] Our 2dMVC example.
[164:28.84] I could pull off.
[164:29.58] It works in Node.js.
[164:30.48] You.
[164:31.64] You have to make.
[164:32.88] The handling declarative.
[164:34.60] Because you don't have any chance to run JS.
[164:36.90] You can't go.
[164:37.54] On action complete.
[164:38.80] Do blank.
[164:39.30] You have to instead go.
[164:40.40] Our action feeds into a submission.
[164:42.84] That we then can show.
[164:45.22] As part of the next UI.
[164:46.86] Kind of like a flash message.
[164:48.20] If you know what I mean.
[164:49.12] And express.
[164:49.62] Classically.
[164:50.50] You need to actually write it into into the into this data object declaratively.
[164:56.52] And then use that to render the next page.
[164:58.34] You can't just go like on blank.
[165:00.04] Do the update.
[165:01.70] Which is tricky.
[165:05.48] Because you want it to both work when optimistic updates are sort of when the JS is available.
[165:12.44] And when it's not.
[165:13.04] In this case.
[165:13.60] We don't care.
[165:14.24] But for me.
[165:15.16] Generally as an API.
[165:17.46] I have to think about that.
[165:18.66] So I came up with this idea.
[165:20.24] I haven't implemented it yet.
[165:21.46] But I was thinking.
[165:22.24] What if.
[165:23.00] You could tell.
[165:24.58] From like a get.
[165:25.54] Method.
[165:26.86] Something.
[165:27.30] That you can run in server functions.
[165:28.60] Whether you're running under a Node.js condition.
[165:30.86] And then.
[165:31.34] If there's Node.js.
[165:33.04] You just.
[165:34.88] Can return like normal.
[165:36.22] And not worry about it.
[165:37.16] Because revalidation.
[165:37.94] Doesn't happen on Node.js.
[165:39.26] It literally re-renders the page.
[165:40.68] There's nothing we can do about it.
[165:41.96] But you could basically.
[165:43.78] Have different behavior.
[165:44.94] Based on.
[165:45.64] Whether.
[165:46.32] You're in the situation.
[165:48.28] Where it's currently being requested.
[165:49.98] Where there's no JavaScript.
[165:50.80] Or in the situation.
[165:52.74] When you know.
[165:54.00] That there's a client.
[165:54.70] That can handle stuff.
[165:55.78] Like the revalidation.
[165:56.68] And in this case.
[165:58.18] What I was saying.
[165:58.56] Is we could say.
[165:59.56] Don't revalidate.
[166:01.16] And send back the to do.
[166:02.78] That's kind of interesting.
[166:05.94] Right?
[166:06.34] Because now.
[166:07.04] Instead of sending back.
[166:07.78] All the to do's.
[166:09.08] We just send back.
[166:10.52] The one to do we added.
[166:11.80] For example.
[166:12.62] Or the one to do we updated.
[166:17.46] And.
[166:17.90] Then.
[166:19.18] If our action.
[166:21.36] API had the ability.
[166:22.24] To put in like a.
[166:23.44] An on complete hook.
[166:25.32] We could look at the submission.
[166:27.04] And go oh.
[166:27.72] If it's not erred.
[166:29.58] You know.
[166:30.88] Let's get the key.
[166:31.84] And maybe write.
[166:33.06] To the cache ourselves.
[166:34.62] Clear the submission out.
[166:37.06] And then.
[166:37.80] Revalidate false.
[166:39.56] And what revalidate false.
[166:40.54] This already exists in the router.
[166:42.08] Is a way of saying.
[166:42.52] Trigger all the reactivity.
[166:44.36] Like basically commit it.
[166:45.82] And update all the signals.
[166:46.94] That listen to this.
[166:48.52] Key in the cache.
[166:49.58] Without refetching.
[166:50.76] So.
[166:53.52] Essentially.
[166:54.20] We manually update the cache.
[166:55.66] And then trigger.
[166:56.56] The update in the UI.
[166:58.18] This happens in the transition.
[167:00.32] By the way.
[167:00.68] Or transaction.
[167:01.20] Whatever you want to call it.
[167:01.90] So.
[167:02.48] With this sort of API.
[167:04.26] When we did something like.
[167:06.42] Strello.
[167:06.92] Sure.
[167:07.76] Like.
[167:08.06] Stuff that moves the order.
[167:09.56] Multiple cards.
[167:10.72] You might need to send all the data back.
[167:12.34] You know.
[167:12.74] But if you're just updating.
[167:13.96] This from G to GGG.
[167:15.92] There's no reason.
[167:17.90] Not to just send back.
[167:19.42] Only.
[167:20.10] The one record.
[167:21.30] Only go like.
[167:22.08] Hey.
[167:22.36] This.
[167:24.10] The.
[167:24.50] This now only has GGG.
[167:25.92] And instead.
[167:26.84] Of.
[167:27.76] You know.
[167:28.88] Doing a.
[167:31.08] You know.
[167:31.62] A heavy diff.
[167:32.66] We could just patch.
[167:33.56] The one update.
[167:34.82] And stressing enough.
[167:35.72] Because of optimistic updates.
[167:36.58] The value would be the same.
[167:37.68] So that no actual work.
[167:38.66] Could get done.
[167:39.50] But this is a mechanism here.
[167:41.36] To actually.
[167:42.50] Reduce.
[167:44.10] The network.
[167:45.80] Bandwidth.
[167:46.74] Right.
[167:47.04] Instead of always sending all the stuff.
[167:48.84] Right.
[167:49.52] If.
[167:49.82] As you.
[167:50.86] You can always return something.
[167:52.22] Generally.
[167:53.04] It's not recommended to return the data.
[167:57.14] In an action.
[167:57.88] Because.
[167:59.28] You fetch it again.
[168:00.88] But.
[168:01.66] With this mechanism.
[168:02.62] You.
[168:03.94] You basically could.
[168:05.32] It's just something I'm kind of proposing.
[168:07.20] That way.
[168:08.22] People who are hypercritical.
[168:09.84] About optimization.
[168:10.74] Obviously.
[168:12.40] This opens you up to be more error prone.
[168:14.38] You would have the potential.
[168:16.04] To be able to.
[168:17.18] Use actions.
[168:18.52] Benefit from the routing redirects.
[168:20.06] Do all that kind of stuff.
[168:21.38] In a way.
[168:22.10] That.
[168:23.52] Doesn't.
[168:24.56] Impede on your.
[168:25.62] Ability to.
[168:27.38] You know.
[168:27.82] Send less over the network.
[168:29.04] As I said.
[168:30.00] Most people.
[168:32.16] Haven't cared about this for a while.
[168:33.70] Because of you know.
[168:34.24] The approach that they take with TAN stack.
[168:35.92] But it's good that cache writing.
[168:38.38] In a sense.
[168:39.80] Or at least revalidation.
[168:41.02] Could be.
[168:42.06] Another tool.
[168:43.82] That you have available to you.
[168:44.98] Right.
[168:47.60] This is only for people.
[168:49.18] Who aren't satisfied with the.
[168:51.36] It just works.
[168:52.36] Yeah.
[169:05.92] What happens when I queue update.
[169:09.84] And delete action in this case.
[169:11.28] I mean.
[169:11.64] I'm not quite sure.
[169:20.12] Following the.
[169:21.06] The.
[169:21.56] The question.
[169:22.78] Are you asking what happens.
[169:24.28] Let's see.
[169:25.46] It's automatic delete work.
[169:27.52] If I go here.
[169:28.68] Okay.
[169:29.08] Let's.
[169:29.40] I'm not.
[169:30.80] Sure.
[169:31.68] Do do do do.
[169:35.92] So.
[169:40.08] Move.
[169:42.24] Delete.
[169:46.68] They're both still in flight.
[169:48.28] I mean.
[169:49.08] I don't know.
[169:49.52] Yeah.
[169:52.12] I'm not quite sure.
[169:53.04] The question.
[169:53.48] Well.
[170:01.34] Why send any data back?
[170:04.78] Well.
[170:04.92] You're right.
[170:06.92] This is the funny thing.
[170:08.06] With the strello case.
[170:09.14] Actually.
[170:11.20] We don't need to send any data back.
[170:12.72] Because.
[170:13.56] Technically speaking.
[170:15.26] Yeah.
[170:21.50] It's an interesting one.
[170:22.86] Right.
[170:23.02] Because.
[170:23.20] We already have.
[170:24.72] All the input.
[170:25.40] So.
[170:25.62] If you look at the API here.
[170:27.28] And on complete.
[170:27.76] You have the submission.
[170:29.04] Right.
[170:29.52] So.
[170:30.08] Instead of sending.
[170:31.00] The.
[170:31.30] Using the result.
[170:32.20] You could use.
[170:33.24] The input.
[170:34.44] From the submission.
[170:35.68] So like on complete.
[170:36.58] You go.
[170:36.84] Submission dot input.
[170:37.86] And just.
[170:38.54] Set the cache.
[170:39.60] With the input.
[170:40.92] Information.
[170:41.80] So yes.
[170:42.52] You are correct.
[170:43.10] In this case.
[170:43.74] Where you have.
[170:44.16] All the information.
[170:45.24] Like the strello demo.
[170:46.42] You're right.
[170:46.72] I don't even need to send it back.
[170:47.74] I can literally.
[170:48.32] Know that I.
[170:49.36] I did a.
[170:50.50] Update to do.
[170:52.04] Or.
[170:52.26] Or add to do.
[170:53.72] And I have all the information here.
[170:55.20] And I can just set it.
[170:56.26] Without even looking.
[170:57.18] At the results.
[170:58.16] The result can be empty.
[170:58.96] So you're.
[170:59.48] Yeah.
[171:00.22] You are absolutely right.
[171:01.24] In this case.
[171:01.88] For the trello demo.
[171:02.46] We don't need to send anything back.
[171:03.86] Right.
[171:11.54] But.
[171:12.46] A lot of times.
[171:13.70] That's not the case.
[171:14.46] But yeah.
[171:14.94] Something like a like button.
[171:16.08] You could literally just.
[171:18.42] Be like.
[171:19.06] I mean.
[171:20.22] You could just be like.
[171:21.04] On complete.
[171:21.86] Submission.
[171:23.40] You know.
[171:24.26] Dot.
[171:24.62] You know.
[171:25.44] Is liked.
[171:26.38] Or whatever.
[171:26.74] Like the.
[171:27.24] Boolean submit.
[171:28.02] Argument zero.
[171:29.20] I think.
[171:29.56] Submission input zero.
[171:30.74] And just.
[171:31.62] Set the cache with that.
[171:32.98] And call it.
[171:33.60] You know.
[171:34.00] And then you don't have to send anything back.
[171:35.88] Yeah.
[171:36.50] So.
[171:42.56] Yeah.
[171:43.14] Good point.
[171:43.66] Yeah.
[171:44.10] So.
[171:44.60] This is just one of those things.
[171:46.22] That I kind of.
[171:47.06] Thought about.
[171:47.78] A way of.
[171:48.72] Extending it.
[171:49.64] So.
[171:50.66] Told you that would be a short one.
[171:52.04] Oh.
[171:53.72] I got.
[171:54.26] Let's go to the next one.
[171:58.72] Dev.
[172:06.30] I see you're still here.
[172:07.34] I wonder if we'll get to.
[172:08.66] To your stuff in time.
[172:10.82] Hopefully we will.
[172:12.86] Um.
[172:13.42] Because I got one more.
[172:16.42] Before I get to it.
[172:17.14] You need to send data back.
[172:20.56] If you didn't like it.
[172:21.28] Service.
[172:21.54] You're going to show that.
[172:22.10] You can't do it on the client.
[172:22.78] Yeah.
[172:25.78] Flight's in an hour.
[172:26.52] Flight's in an hour.
[172:26.56] Okay.
[172:26.88] Okay.
[172:28.44] Um.
[172:29.34] Advanced caching with router APIs.
[172:32.94] It goes to the same.
[172:34.48] I think.
[172:34.84] We need to rename the cache function.
[172:36.80] In solid.
[172:37.52] Um.
[172:37.90] I'm going to rename it to.
[172:38.92] Uh.
[172:39.32] Query.
[172:40.62] I put an open in an issue.
[172:43.18] Like an RFC.
[172:44.00] Like.
[172:44.40] For the router.
[172:45.30] Like.
[172:45.68] Six months ago.
[172:47.10] A lot of feedback.
[172:48.06] And different stuff.
[172:48.60] I'm just.
[172:48.94] I don't like the name cache.
[172:50.68] Because most people.
[172:51.54] Think of cache as a cache.
[172:53.32] And our cache is actually.
[172:54.28] It does revalidate.
[172:55.44] But it doesn't actually stay.
[172:56.92] Very long.
[172:57.68] It like.
[172:58.48] Literally.
[172:59.04] It's.
[173:00.08] I.
[173:00.60] I think it's right on the.
[173:01.62] Solid.
[173:02.16] Router.
[173:02.86] Docs.
[173:03.92] Um.
[173:04.74] Solid router.
[173:07.14] The.
[173:08.50] GitHub.
[173:09.06] I.
[173:09.36] Our cache function.
[173:11.80] Um.
[173:13.12] Is.
[173:14.52] I made a point here.
[173:15.70] Like what it does.
[173:16.82] Data APIs.
[173:17.80] Where it's at.
[173:19.46] Multiple paths.
[173:20.38] Nested routes.
[173:21.30] Blah blah blah.
[173:22.14] Preload functions.
[173:25.44] Data APIs.
[173:25.98] Cache.
[173:26.40] Okay.
[173:26.56] This cache comps.
[173:28.00] It's followed.
[173:28.26] It does deduping on the server.
[173:29.54] For the lifetime of the request.
[173:30.60] It does preload cache in the browser.
[173:32.00] Which lasts five seconds.
[173:32.92] When a route is preloaded on hover.
[173:34.10] Or when preload is called.
[173:35.24] When entering a route.
[173:36.22] It will make sure to dedupe those calls.
[173:37.76] We have a reactive refetch mechanism.
[173:39.72] Based on keys.
[173:40.34] So what we can tell routes.
[173:41.40] That aren't new.
[173:41.98] To re-trigger on.
[173:42.92] Action revalidation.
[173:43.96] This is how we trigger the signals.
[173:45.26] It will serve as a back forward cache.
[173:48.16] For the browser navigation.
[173:48.98] Up to five minutes.
[173:49.68] Any user based navigation.
[173:51.12] Or link click.
[173:52.06] Bypasses.
[173:52.88] So if you're on a page.
[173:53.76] And you go to the next page.
[173:54.74] We don't read from the cache.
[173:56.44] We fetch fresh.
[173:57.10] Always.
[173:57.52] It's only if you use.
[173:59.06] Like the browser back.
[174:01.40] Or forward buttons.
[174:02.06] That we read from this cache.
[174:03.06] So this is the most unobtrusive cache.
[174:05.64] You can pretty much imagine.
[174:08.00] It basically is not a cache.
[174:09.30] So calling the cache.
[174:10.18] Makes people run away from it.
[174:11.34] When really literally.
[174:12.26] Everyone should just be using it.
[174:13.56] So.
[174:14.96] For the rest of this conversation.
[174:18.24] I'm just going to call it query.
[174:19.34] We thought about calling it data.
[174:21.36] People dedu.
[174:22.04] But really.
[174:22.54] I needed a pattern.
[174:24.80] A balance.
[174:25.54] Like there's action.
[174:26.94] Which is like something that you do.
[174:28.86] Cache is not what you're trying to do.
[174:31.00] D-duping is a side effect.
[174:32.38] Of what you're trying to do.
[174:33.18] Like.
[174:33.32] It's the get.
[174:35.62] You need the query.
[174:36.68] And you need the action.
[174:37.72] Tanner had good naming.
[174:39.18] We're going to stick with that.
[174:43.10] Yeah.
[174:43.50] This whole conversation is how I want to rename it.
[174:45.90] Right.
[174:48.72] The interesting thing is like.
[174:51.72] It's.
[174:52.02] It's multi-set.
[174:53.10] So you could call.
[174:54.12] You could.
[174:54.88] Loader maybe.
[174:56.10] Then you have multiple loaders.
[174:57.60] Yeah.
[175:00.28] I don't like the word loader.
[175:01.26] I don't know.
[175:01.56] Something about it.
[175:02.30] Because the.
[175:05.28] Remix has kind of made loader.
[175:07.98] I guess you could have multiple loaders.
[175:09.60] I don't know.
[175:10.58] When I think of loader.
[175:13.08] I think of like.
[175:13.70] Remix is singular loader.
[175:15.42] And the thing is.
[175:18.50] This is key based.
[175:19.50] Like.
[175:20.02] When you make a query.
[175:21.58] You.
[175:22.36] You basically say.
[175:24.48] Fetch this thing.
[175:26.48] And tie it to this key.
[175:27.68] So.
[175:30.28] Yeah.
[175:31.66] I mean.
[175:31.98] It has all the characteristics.
[175:33.92] Base characteristics.
[175:35.64] I guess.
[175:36.10] Other than the cache part.
[175:37.22] Of what.
[175:37.98] Say.
[175:38.28] HandStack query does.
[175:39.20] Yeah.
[175:42.10] They have multiple loaders.
[175:43.54] Yeah.
[175:43.90] Fair enough.
[175:44.72] There you go.
[175:51.80] Yeah.
[175:52.12] We're.
[175:52.40] For us.
[175:52.92] The.
[175:53.20] The.
[175:53.56] We don't care.
[175:54.38] Where the source is coming from.
[175:55.76] We're never going to have.
[175:56.92] Like multiple loaders.
[175:58.24] We're.
[175:58.92] We're literally.
[175:59.62] Just having.
[176:00.50] A generic mechanism.
[176:01.74] That doesn't care.
[176:02.40] Where you fetch the stuff from.
[176:04.08] So.
[176:07.30] Basically.
[176:12.42] I named it cached originally.
[176:14.30] Because I was thinking that like react.
[176:16.56] Had the cache function.
[176:18.34] It seemed really practical.
[176:19.32] And I.
[176:20.52] I knew that create async was going to go core.
[176:22.34] You know.
[176:23.32] In the framework.
[176:23.94] It's our async primitive.
[176:24.74] But.
[176:25.04] Over time.
[176:25.90] I've kind of decided that.
[176:26.86] The cache thing isn't core.
[176:28.74] You know.
[176:29.98] Query and action don't belong in the core.
[176:31.76] They're like.
[176:32.28] A router thing.
[176:35.20] So to speak.
[176:35.90] So.
[176:36.78] I was trying to figure out.
[176:39.68] What if you wanted to add your own caching.
[176:42.28] On top of.
[176:43.06] These kind of wrapper APIs we do.
[176:44.52] Like.
[176:44.78] What if you said you wanted to.
[176:46.26] To cache.
[176:46.92] And something.
[176:48.70] Something occurred to me.
[176:49.58] That I think is important for people.
[176:50.88] To understand.
[176:53.04] Do I have the strello open?
[176:54.34] You can kind of see it.
[176:56.16] Visibly right here.
[176:57.62] Actually.
[176:58.24] Do any of these ones shorter?
[177:00.66] Yeah.
[177:01.58] Delete note is shorter.
[177:02.38] You go.
[177:03.60] Delete note.
[177:04.28] Action.
[177:04.90] Blank.
[177:06.08] Use server.
[177:07.40] Let me see actually.
[177:08.90] Is there.
[177:09.22] Is there a cache function in here?
[177:11.20] Maybe.
[177:12.94] Add note.
[177:14.70] A lot of these are actions.
[177:16.02] I want.
[177:17.38] Maybe it's.
[177:18.94] Maybe it's on the.
[177:19.72] Maybe it's the board.
[177:23.04] Create store.
[177:30.48] Okay.
[177:30.76] So it's not here.
[177:31.74] I did not author this.
[177:33.72] But I know that somewhere.
[177:34.78] Here.
[177:36.16] There's going to be an.
[177:37.06] Cache function.
[177:38.50] Here's the action.
[177:39.88] Preload.
[177:41.30] Fetch forward.
[177:41.82] Fetch forward is what we're looking for.
[177:43.48] It's the.
[177:44.22] Benchmark.
[177:47.00] Fetch forward.
[177:47.94] Fetch forward.
[177:48.64] Lib.
[177:49.86] It is the one thing that is in lib.
[177:52.54] Where we started.
[177:53.42] Fetch forward.
[177:57.92] Okay.
[177:59.48] Here.
[177:59.72] Get user.
[178:01.06] This is fine.
[178:02.52] I just want to show a cache function.
[178:04.08] Generically.
[178:04.88] Right.
[178:05.10] You have the async function.
[178:06.12] Which is a server function.
[178:07.02] And has a cache key.
[178:08.06] Okay.
[178:10.34] And the reason that I wanted to kind of show you here is.
[178:14.62] The cool thing about the wrappers is that cache and action.
[178:19.60] Take something that's completely naked.
[178:22.00] Server functions have no special semantics other than they just run async on the server.
[178:26.24] They don't care about routing.
[178:27.22] They don't do anything.
[178:28.26] This is always a problem I had with next approach because they made it like server actions.
[178:32.56] They didn't just do server functions.
[178:33.68] Now I hear that they backpedaled the server functions.
[178:36.30] I'm not surprised.
[178:37.32] But the wrappers let us add extra ability.
[178:43.60] The only challenge with this wrapper approach that I didn't realize or think about very much
[178:48.16] at first is.
[178:48.64] When does the code actually go through the wrapper?
[178:52.24] So the thing is.
[178:53.90] Server functions.
[178:56.52] When called on the server.
[178:59.78] You're calling an actual function.
[179:02.64] You're going call get user.
[179:04.32] It's calling this reference.
[179:05.90] It goes through the cache.
[179:07.36] And you get it.
[179:09.82] When you're rendering.
[179:10.76] On the client.
[179:13.60] The server function itself gets hoisted out.
[179:16.78] But essentially you're calling it through the cache.
[179:19.90] So whenever you're rendering.
[179:22.08] Whether it's on the server or the client.
[179:23.62] You're calling this function which goes through the cache.
[179:25.80] But when you're in the client.
[179:28.80] Or sorry.
[179:31.38] On the server.
[179:32.04] When you're calling.
[179:33.94] Like the server part of when you call it from the client.
[179:36.26] So I'm on the client calling get user.
[179:39.04] The cache is in the client.
[179:41.74] When I hit the server endpoint.
[179:44.12] It's going directly here.
[179:45.86] It is not going through the cache function.
[179:47.64] The endpoint begins here.
[179:49.58] Right.
[179:50.66] Which is different than rendering.
[179:52.18] Rendering.
[179:52.76] It goes through here.
[179:54.36] Whereas the endpoints here.
[179:57.98] Which means that.
[179:58.56] Simply taking cache here.
[180:00.64] And putting like.
[180:01.62] You know.
[180:02.72] Our query.
[180:03.36] Is what I would call it now.
[180:04.54] I'm going like.
[180:05.72] Wrap it with cache.
[180:07.00] Like putting some wrapper on the outside.
[180:09.64] Would only ever impact rendering.
[180:11.28] Which means that.
[180:13.36] Only.
[180:13.94] Could you cache something on the server.
[180:16.30] Through this mechanism.
[180:18.10] During rendering.
[180:21.30] So like.
[180:22.00] If you wanted to say.
[180:23.24] Pretend you could.
[180:23.90] Cache in like.
[180:25.82] KV store.
[180:27.50] The response of this whole thing.
[180:31.02] It would.
[180:31.62] It wouldn't work.
[180:32.54] When someone hit the endpoint.
[180:33.78] From the server perspective.
[180:39.18] It would only work.
[180:40.12] If they were actually rendering.
[180:41.20] And calling this function.
[180:42.40] Does that make sense?
[180:43.52] For server components.
[180:48.32] The get.
[180:48.74] Is always.
[180:49.48] Called during rendering.
[180:50.60] So it always works.
[180:52.76] But for.
[180:53.84] You know.
[180:56.08] Us.
[180:56.62] Bob.
[180:57.94] Like.
[180:58.36] API style.
[181:00.24] The get.
[181:01.22] Can be called from the server.
[181:02.50] Independently.
[181:03.10] The render.
[181:03.58] Which means this.
[181:04.24] Is not the right solution.
[181:05.50] For caching.
[181:06.02] For the server.
[181:07.20] Yeah.
[181:08.68] This is just not.
[181:09.64] Part of what we have to worry about.
[181:10.88] So it means that.
[181:11.94] When we talk about wrappers.
[181:14.00] We are literally only talking about.
[181:16.28] Adding caching capability.
[181:17.82] Like you find with 10 stack query.
[181:19.50] Or you know.
[181:21.04] SWR on the client.
[181:22.62] This.
[181:23.02] This can.
[181:23.60] This can be the only.
[181:24.52] The scope.
[181:25.26] Of.
[181:26.42] Of.
[181:26.98] What we can talk about.
[181:28.12] So.
[181:29.26] I started thinking.
[181:30.36] Okay.
[181:30.54] Well.
[181:30.76] First thing you have to understand.
[181:34.30] Is that.
[181:34.66] Technically.
[181:35.70] Our cache function.
[181:37.62] Our query function.
[181:38.62] Actually serializes.
[181:39.98] The return value from automatically.
[181:41.80] This is why it just works.
[181:43.42] Create Async also serializes automatically.
[181:45.42] Even without a key.
[181:46.40] This is just.
[181:47.36] So that if you ever do.
[181:48.50] Any create async.
[181:49.24] On the server in solid.
[181:49.98] You don't have.
[181:50.78] It won't run again.
[181:51.58] During hydration.
[181:52.20] Right.
[181:53.28] So.
[181:56.74] I was trying to figure out.
[181:57.68] Like where do you put the wrapper then.
[181:58.76] Do you.
[181:59.20] You can't.
[182:00.42] If.
[182:00.80] Like you don't.
[182:01.86] If we look again.
[182:03.02] At our.
[182:03.34] At our code.
[182:04.28] Here.
[182:04.90] Obviously.
[182:06.66] We can put something on the inside here.
[182:08.26] And then it will always be on the server.
[182:09.76] But if we're talking out here.
[182:11.40] Do we put the cache.
[182:12.84] Do we put the.
[182:14.04] The.
[182:14.52] Your custom cache here.
[182:15.96] Or here.
[182:17.36] Do we put it around the whole thing.
[182:18.92] Or around your function.
[182:20.44] So I started.
[182:23.32] Kind of spitballing it out.
[182:24.82] And I was like.
[182:25.42] Okay.
[182:25.58] Well what happens if.
[182:27.70] We wrap it around.
[182:29.22] The whole thing.
[182:30.46] Right.
[182:31.18] Outside.
[182:31.82] So.
[182:32.34] If you can picture.
[182:33.28] You can go forever cache.
[182:34.54] My query.
[182:35.72] Okay.
[182:37.18] And my forever cache.
[182:39.20] Implementation is really dumb.
[182:40.26] It's literally just an object.
[182:41.72] That once it gets a key.
[182:42.82] It never deletes it.
[182:43.82] So.
[182:44.50] It will always go like.
[182:46.18] You know.
[182:47.20] What's cool about this approach.
[182:48.52] Is because you're passing the query.
[182:49.98] Into it.
[182:50.48] You can just ask the query.
[182:52.18] For its key.
[182:53.50] From.
[182:54.42] From the args.
[182:55.58] Because we.
[182:55.86] All our query functions.
[182:57.06] Or cache functions.
[182:58.26] Whatever you call them.
[182:58.76] Have.
[182:59.44] Methods to get the keys off them.
[183:03.00] So they can feed into action.
[183:04.00] It's very convenient.
[183:04.60] So you can go like.
[183:06.14] When it calls the function.
[183:07.30] You can get the key for the args.
[183:08.40] Then use that key.
[183:09.64] Look it up in our object.
[183:11.00] If it's there.
[183:11.72] Just return the value directly.
[183:12.80] Otherwise.
[183:13.32] Call.
[183:14.86] The query.
[183:16.12] And put it in the forever cache.
[183:18.04] Really.
[183:18.74] Simple approach.
[183:20.24] The only problem is.
[183:21.14] Does this work?
[183:22.00] Well.
[183:22.82] It works with hydration.
[183:24.30] Because.
[183:26.00] If you think about it.
[183:27.06] It.
[183:29.30] The way.
[183:30.62] This.
[183:31.28] Hydration ends up working.
[183:32.76] Is create async.
[183:33.74] Runs first.
[183:36.00] It sees the serialized value.
[183:37.84] This should be an arrow.
[183:39.26] I don't know why.
[183:39.70] There's a plus there.
[183:40.40] My bad.
[183:41.04] It sees the serialized value.
[183:43.46] And it actually doesn't run this.
[183:45.48] Funnily enough.
[183:46.66] But on the next update.
[183:48.24] This already has the value.
[183:51.80] Preset.
[183:52.72] Because the serialization.
[183:54.06] Will have read it.
[183:55.68] Put it into its cache.
[183:57.28] So technically.
[183:58.34] This works fine with hydration.
[183:59.50] Because.
[184:00.02] It just never gets to it.
[184:01.66] And then.
[184:02.10] When the next thing hits.
[184:03.32] It'll be fine.
[184:05.12] So like.
[184:05.44] If someone triggers a revalidation.
[184:06.72] Or.
[184:07.62] Or triggers something like.
[184:09.10] It's very rare case.
[184:10.46] But if someone triggered a revalidation.
[184:11.80] But not a refetch.
[184:12.86] You know.
[184:14.74] Just trigger the signals.
[184:15.84] It would see the data there.
[184:17.12] Because even though this would miss.
[184:18.52] My query would have it cached internally.
[184:20.78] So this works.
[184:21.50] But how does this work for revalidation?
[184:26.90] If.
[184:27.34] If.
[184:27.34] If.
[184:27.34] If.
[184:27.34] If.
[184:27.34] Forever cache.
[184:28.62] Always intercepts.
[184:30.30] On the outside here.
[184:31.64] Before running it.
[184:32.86] It means that.
[184:34.26] It's possible for it to shortcut.
[184:36.60] Before running my query.
[184:37.74] Which means the reactive revalidation.
[184:39.76] Gets bypassed.
[184:40.82] So if you navigate to a new page.
[184:43.14] The first time.
[184:44.78] It doesn't have anything.
[184:46.42] And it'll read the signal.
[184:47.64] And like.
[184:48.60] Set it up.
[184:49.08] And get it in.
[184:49.56] Then you leave.
[184:50.32] But when you come back again.
[184:51.56] It will.
[184:52.94] Read it from the cache.
[184:54.44] But not read reactivity.
[184:56.12] So any triggers won't trigger again.
[184:58.36] It basically has detached it.
[184:59.96] Even if you were manually.
[185:03.60] In trying to like.
[185:04.60] Replace the cache in both locations.
[185:06.28] I mean.
[185:06.66] If this ever.
[185:09.52] Was a hit.
[185:11.12] It would unhook the reactivity essentially.
[185:13.30] So wrapping on the outside.
[185:14.24] Just doesn't work.
[185:16.22] Right.
[185:24.44] The funny observation.
[185:33.02] Code urgency straddle needs to be optimized for my own streams.
[185:35.76] Okay.
[185:38.86] So do you put on the inside?
[185:40.80] So you go query.
[185:41.88] Forever cache.
[185:42.90] Fetch user.
[185:43.60] User.
[185:43.90] Like this.
[185:44.50] There's an in.
[185:46.06] First problem is you don't know what the key is.
[185:47.92] So do you have to come up with your own key utils?
[185:50.52] Because what you're getting is just a function.
[185:52.48] It doesn't know.
[185:53.48] Like the cache key belongs to the query thing out here.
[185:56.46] It doesn't know when it calls your function.
[185:58.86] So you have to like.
[186:00.16] Figure out your own cache key.
[186:02.18] Revalidation at least works.
[186:06.96] Because it will always try and hit the query first.
[186:10.46] And then if it misses it.
[186:11.70] It will ask your cache.
[186:13.06] So at least.
[186:14.32] It flickers properly.
[186:16.18] Right.
[186:19.10] And I was just commenting that you could like.
[186:20.66] Obviously if you don't like this kind of extra wrapper.
[186:23.24] Approach.
[186:23.98] You could always like just make your own wrapper.
[186:26.60] Putting them two together.
[186:27.42] That's not right.
[186:27.82] The hydration.
[186:28.56] Becomes a problem.
[186:30.64] Because.
[186:31.52] It's on the inside.
[186:33.60] Which means.
[186:34.72] It will never run.
[186:36.74] Essentially.
[186:37.42] Like I said before.
[186:38.18] And unfortunately.
[186:41.86] There's no way for this to get the cache value from this query essentially.
[186:53.94] Because it's on the outside.
[186:54.92] You would have to like pass in the previous result.
[186:58.28] Like it doesn't work.
[187:00.28] Like it doesn't have.
[187:02.10] It doesn't have the value if it ever gets in here.
[187:05.88] So to speak.
[187:06.98] Like sure.
[187:09.18] You could say on the very first time after hydration.
[187:11.36] If the same thing got hit again.
[187:13.24] And it never hydrated.
[187:14.42] You know.
[187:16.40] Like it's a very rare case.
[187:18.10] That you want to ever get past here.
[187:20.52] So like I imagine if someone was like building something like Canstack on top of it.
[187:24.48] Or their own wrapper.
[187:25.16] They would do it this way.
[187:26.24] But.
[187:27.32] That's.
[187:28.56] You're throwing away the data serialized from the server the first time.
[187:31.64] Like.
[187:32.72] As I said.
[187:34.18] This.
[187:34.48] Our query cache here.
[187:35.72] Is very short-lived.
[187:36.58] So.
[187:37.98] If it gets past that.
[187:41.02] And gets to here.
[187:41.70] It's not going to find the data.
[187:42.80] It has to serialize itself.
[187:44.50] It just.
[187:44.80] There's no way to basically.
[187:47.76] Have the data.
[187:50.28] Present here from hydration time.
[187:52.18] There's no like on hydrate.
[187:53.82] Like it's.
[187:54.40] It's inside.
[187:55.30] It's not in the right place.
[187:56.52] It's also worth mentioning.
[188:01.14] That.
[188:01.72] The difference here.
[188:03.42] On the outside.
[188:05.56] Is when we.
[188:06.24] Call my query.
[188:07.60] You know.
[188:08.92] What we get back is resolved.
[188:10.32] It's handled the router redirects and everything by this point.
[188:12.76] You just get the data back.
[188:13.94] When you.
[188:15.54] Put it here.
[188:17.06] Your forever cache is going to get.
[188:20.04] Whatever stuff that query is expecting into the router.
[188:22.62] So.
[188:23.20] It's not like.
[188:24.34] It's not a very.
[188:25.16] Useful.
[188:26.12] Cache.
[188:26.92] Perhaps.
[188:27.60] Because.
[188:28.34] Like.
[188:29.24] It could.
[188:30.38] Stuff that the query.
[188:31.84] Handles for routing for you.
[188:33.58] Is already been taken.
[188:34.68] It hasn't been taken out yet.
[188:36.68] So.
[188:37.32] Yeah.
[188:44.32] So you're saying like.
[188:45.38] If you put hooks on the outside.
[188:48.02] Couldn't you.
[188:48.76] Revalidate.
[188:58.78] Yeah.
[188:59.26] The trick is.
[188:59.82] If it doesn't read from the cache.
[189:01.90] The signals aren't present.
[189:03.32] Like.
[189:03.66] If it returns.
[189:05.16] Like.
[189:05.44] My query.
[189:06.24] When you run it.
[189:06.92] Basically has a signal inside.
[189:09.56] That gets tracked by the crate.
[189:10.78] Async.
[189:11.64] So that when you flick it.
[189:13.10] Create async reruns.
[189:14.98] If you exit early here.
[189:16.96] That signal never gets tracked.
[189:18.98] So I don't think this even.
[189:20.64] Does it.
[189:21.98] So.
[189:28.30] Then you get into this zone.
[189:31.18] Like.
[189:31.40] Maybe you just add.
[189:32.40] An option.
[189:33.62] Like.
[189:34.36] Put the key on it.
[189:35.88] And like.
[189:37.08] Have an optional action.
[189:38.42] Option object.
[189:40.04] So.
[189:40.82] A couple options there.
[189:42.10] What.
[189:42.78] I.
[189:43.42] I played around with.
[189:44.86] A couple ideas here.
[189:45.80] One.
[189:47.28] Is we can just like.
[189:48.48] Have our own rules.
[189:50.56] Like.
[189:51.28] Handstack.
[189:52.12] And you know.
[189:52.48] Put expire time.
[189:53.46] Stale time.
[189:54.26] You know.
[189:55.26] And assume that it basically.
[189:56.24] Is just something that lasts.
[189:57.32] As long as the page.
[189:58.26] But then.
[189:58.84] You know.
[190:00.18] You know.
[190:01.40] Maybe configure.
[190:02.04] When backcast versus not.
[190:03.60] But basically.
[190:04.02] You'd have to have.
[190:05.08] Every possible consideration.
[190:06.58] Configurable.
[190:07.30] And I have no clue.
[190:08.36] What.
[190:08.86] Weird behavior people want.
[190:10.64] The other option.
[190:11.86] I think.
[190:12.40] Is to provide.
[190:13.90] A mechanism.
[190:14.74] That has a get.
[190:15.78] And a set.
[190:16.58] Get.
[190:17.54] With the key.
[190:18.66] And the intent.
[190:19.38] And then set.
[190:20.26] With the key.
[190:20.70] And the value.
[190:21.24] And the expectation.
[190:23.28] Here is that.
[190:24.36] On miss.
[190:28.90] It tries to do the get.
[190:30.64] It tries to do the get.
[190:30.66] And then.
[190:32.36] On.
[190:32.88] Set.
[190:33.70] Or revalidation.
[190:34.78] It will tell you.
[190:35.56] That you tell it the set.
[190:37.02] Like basically.
[190:37.46] The query always.
[190:39.22] Is in control of revalidation.
[190:40.76] It goes like.
[190:41.20] Yes.
[190:41.40] I need to revalidate.
[190:42.42] It will handle it.
[190:43.94] Like when it's explicit revalidation.
[190:46.30] Your cache.
[190:47.84] It participates.
[190:48.58] It can't override it.
[190:49.80] But it has the ability.
[190:50.98] To get in the way of get.
[190:52.10] And based on the intent.
[190:53.32] Whether it's browser navigation.
[190:54.48] Whether it's this.
[190:55.32] Preload.
[190:55.78] Whatever you want.
[190:56.28] You can make a choice.
[190:57.22] On how to handle.
[190:58.66] If it is a hit or a miss.
[191:00.18] Challenge here though.
[191:02.42] Is.
[191:02.66] Should this be async?
[191:04.20] What if using like.
[191:05.86] Local storage.
[191:06.54] Right.
[191:07.54] What session.
[191:12.78] When I would solve.
[191:13.38] Router query.
[191:14.78] Versus replace it.
[191:16.36] I mean.
[191:16.62] If you want to participate.
[191:17.32] In the actions.
[191:18.06] Essentially.
[191:18.62] Right.
[191:22.46] Like if you want to.
[191:23.30] Play part of this key value thing.
[191:25.10] I mean.
[191:28.66] I agree.
[191:31.36] This is getting kind of.
[191:32.34] Out there.
[191:32.94] I was just looking at.
[191:34.46] Extensibility.
[191:35.10] In the end.
[191:41.26] It seems messy.
[191:42.02] The fact you can't easily.
[191:42.84] Do this myself.
[191:43.46] Does trouble me.
[191:44.08] When I created.
[191:44.70] Create resource.
[191:45.38] I was really concerned about.
[191:46.16] How something like.
[191:46.60] Solid query would extend.
[191:47.44] I think create async.
[191:48.12] Is more flexible in that manner.
[191:49.22] But still might need.
[191:50.20] An on hydrate hook.
[191:51.08] But I see that this exercise.
[191:52.46] That purely hawk based.
[191:53.52] Approaches to caches.
[191:54.30] Don't really work.
[191:55.00] Like you can have one wrapper.
[191:56.96] But proposing them is a mess.
[191:58.20] Also none of this.
[191:58.86] Solves server side cache.
[191:59.84] While writing this post.
[192:00.98] The last couple of days.
[192:01.54] I recently saw.
[192:02.60] Use cache for next.
[192:03.52] Which naturally alleviates.
[192:04.56] That problem I think.
[192:05.78] It's an interesting dimension.
[192:06.84] To things.
[192:07.20] Probably worth exploring.
[192:08.14] In our case.
[192:08.98] Only for our user function.
[192:11.36] Because it's interesting.
[192:11.98] Then it's less.
[192:12.64] So are you.
[192:13.98] Are you all.
[192:14.88] Have you heard about.
[192:16.80] Next use cache.
[192:18.64] I would love to kind of.
[192:20.10] See if I can pull this out.
[192:21.22] Because I know.
[192:21.90] It's not.
[192:22.54] I think I found a tweet.
[192:25.54] Related to it.
[192:27.82] Let me just see if I've got.
[192:29.38] My bookmarks.
[192:31.16] Here it is.
[192:34.80] It might be hard to read.
[192:39.94] It's pretty.
[192:40.58] It's pretty.
[192:41.60] It's pretty dimmed out.
[192:43.56] Hey Theo.
[192:44.66] How's it going?
[192:45.20] Came in just as I was talking about.
[192:46.94] Next cache API.
[192:55.10] Yeah.
[192:55.72] Well it's just funny.
[192:56.80] Because the day you did the stream.
[192:58.76] Which is when I heard about this.
[192:59.88] I was literally working on.
[193:01.30] Advanced cache extension.
[193:02.76] And I realized that my approach.
[193:04.36] I was like writing this article.
[193:07.22] That I was just sharing.
[193:09.06] My approach just couldn't account for server caching.
[193:11.54] It just was outside of the realm of what I could solve with the solution.
[193:14.40] So I was like okay.
[193:15.58] I'm just going to put that aside and focus on what I can solve.
[193:17.74] And then I saw the stream.
[193:20.04] And I saw this use cache.
[193:21.30] And I'm like oh.
[193:21.78] So this solves the thing that I just put aside.
[193:23.64] Okay.
[193:24.14] Seems interesting.
[193:31.62] It's interesting right.
[193:34.64] Because use cache suggests that.
[193:39.24] The whole concept here is that they have some kind of global config.
[193:42.52] For the caches.
[193:43.32] Essentially.
[193:45.04] And you can override it within that context.
[193:48.22] Of like what you want the behavior to be for that.
[193:51.62] But this lets you like just anywhere in I believe server run code.
[193:57.30] Just put use cache.
[193:58.50] So whether it's in a server function or action or whatever.
[194:01.34] Or server component.
[194:02.08] You can just like say cache this thing.
[194:03.36] And what's interesting is you could argue that this should be a runtime mechanism.
[194:07.20] But my.
[194:07.96] But yeah.
[194:10.38] The biggest thing for me is why this API.
[194:13.38] Right.
[194:14.00] Why do you use this?
[194:16.02] Because this denotes generally a compiler split.
[194:21.62] Like an example of why you would use that is if you could cache it at build time.
[194:27.86] That would be why you'd want this.
[194:31.16] Because then you'd split the code out.
[194:33.10] And then you'd be like this is an entry point.
[194:35.84] And at build time I want to cache it.
[194:37.80] Putting it here.
[194:40.42] I'm not sure actually has any compiler impact.
[194:45.36] Like beyond.
[194:46.60] Like my guess is this actually just compiles into a wrapper.
[194:50.72] Like a function calling a function like a hawk.
[194:52.96] So to speak.
[194:54.86] Because watching Theo's demo.
[194:58.34] Which I don't know if he's released the video yet.
[195:00.22] But it's definitely worth watching.
[195:01.38] It's still always fired the first time.
[195:06.16] And then afterwards it was cached.
[195:08.14] So initially you'd see the loading from the suspense.
[195:11.34] And then any subsequent time it would be cached.
[195:13.52] Obviously you can build more interesting behaviors.
[195:16.48] SWR and whatever on top of this.
[195:18.20] Which is very compelling.
[195:19.24] But it's it's it cache didn't start from build time.
[195:29.66] It's cached.
[195:30.38] Well this is what I'm looking at here.
[195:32.18] Because.
[195:32.64] The part of me is wondering about the particularly about the use of syntax.
[195:40.24] Right.
[195:40.60] Sunday and requires a sponsor.
[195:43.64] Makes sense.
[195:44.10] That's fair.
[195:44.94] Right.
[195:50.76] It just it's so funny.
[195:52.02] Because I literally was writing how I was getting away.
[195:55.42] Like when I was working.
[195:57.64] Sorry where is it here.
[195:58.80] I was basically saying that like we're going to rename our cache API.
[196:02.18] Because I wanted to free up like our the the word cache to mean something else.
[196:08.74] And then literally like the next day.
[196:12.26] Same day essentially.
[196:14.62] I see this and I'm like okay.
[196:18.86] So is this what I'm freeing it up for?
[196:20.64] The one benefit I like of this right now.
[196:25.66] Is the same thing that we just talked about.
[196:27.74] When I was sorry.
[196:29.52] I'm going to close this one.
[196:30.88] It's confusing me.
[196:32.34] When I was talking about this.
[196:33.32] Wrappers don't work great here.
[196:36.96] Because.
[196:38.62] Let me let me show.
[196:40.90] Where was it?
[196:41.68] Where was it?
[196:42.50] Oh right.
[196:43.46] It was my Starloaded demo example.
[196:45.54] Yeah.
[196:46.04] Wrappers don't work great here.
[196:47.56] Because.
[196:48.32] When you call a server function on the client on the server.
[196:53.24] That's when you go through the wrapper.
[196:54.80] But when you hit it from an API endpoint.
[196:56.96] It's only this code that gets extracted out.
[197:00.92] You don't actually hit the function.
[197:02.80] You hit the content.
[197:03.92] And the benefit of use cache.
[197:09.74] Is that it's on the inside.
[197:12.30] Like use server is.
[197:13.44] Like.
[197:13.82] This.
[197:15.52] Means that like.
[197:17.08] You know it's within that block scope.
[197:20.66] Which is interesting.
[197:21.46] Yes.
[197:21.82] It's a wrapper.
[197:23.04] But it's a wrapper.
[197:24.46] That we know.
[197:25.82] Actually.
[197:26.76] Exists.
[197:28.66] From all contexts.
[197:30.36] You're saying like.
[197:31.18] This block.
[197:32.64] Wherever it runs.
[197:34.16] Whether it's coming in through a server function.
[197:35.98] Whether it's getting.
[197:36.96] Assigned this variable.
[197:38.36] And being called.
[197:38.90] It exists.
[197:39.64] Whereas.
[197:40.26] This wrapper here.
[197:41.38] Is not in the server function.
[197:43.20] It's like.
[197:43.48] If I wanted to use cache.
[197:45.28] I would.
[197:46.42] I would literally have like.
[197:47.94] Use server.
[197:48.40] Use cache.
[197:48.96] Like.
[197:49.18] Bang bang.
[197:50.00] You know what I mean?
[197:50.70] Like.
[197:50.98] In the same.
[197:51.82] In the same context.
[197:52.98] On one hand.
[197:58.60] You have to put the.
[198:03.56] If you used a wrapper here.
[198:05.22] You would have to put the.
[198:06.52] The.
[198:07.44] Use server.
[198:08.54] Outside of the wrapper.
[198:10.06] Do you know what I mean?
[198:12.00] Like.
[198:12.24] It'd have to be like.
[198:13.24] Async function.
[198:15.42] Use server.
[198:17.32] Now use cache.
[198:20.04] Right.
[198:22.02] So.
[198:22.40] Like you.
[198:24.42] These wrappers.
[198:27.02] Are insufficient here.
[198:28.60] Is what I'm getting at.
[198:29.42] It needs.
[198:30.32] It needs to be inside.
[198:31.56] The server function.
[198:32.44] Right.
[198:38.26] Like.
[198:39.34] Do I have to write it out.
[198:40.58] To show what I'm.
[198:41.94] What I mean.
[198:42.58] So just grab a playground here.
[198:45.44] And just.
[198:45.74] Clear this.
[198:46.58] Let's delete everything.
[198:50.98] What I'm.
[198:53.58] What I'm.
[198:53.84] What I'm trying to get at.
[198:54.88] Is that.
[198:55.36] Let's just.
[198:58.60] Just grab this example here.
[199:00.18] Doesn't really matter.
[199:03.34] What this code is doing.
[199:04.26] Now.
[199:05.84] I was talking to a moment ago.
[199:07.04] That I'd change this to query.
[199:08.10] Or something.
[199:08.76] Right.
[199:09.00] Not cache.
[199:09.54] But.
[199:10.58] Just so you can understand.
[199:12.70] The difference.
[199:13.96] Between these mechanisms.
[199:15.76] Query.
[199:17.06] Okay.
[199:18.46] So this is a query.
[199:19.82] Like hand stack.
[199:20.50] Right.
[199:20.70] It's like wrapping.
[199:21.36] And setting it to a key.
[199:22.12] Right.
[199:22.38] This is different though.
[199:23.74] From caching.
[199:24.48] The results of this.
[199:25.90] Of this.
[199:27.12] Which is this user.
[199:28.10] Now.
[199:28.46] I don't know why.
[199:29.50] I'd want to cache this user.
[199:30.82] This is an auth thing.
[199:31.84] This doesn't seem.
[199:32.82] Like.
[199:33.58] Let's forget about.
[199:34.82] Auth for a second.
[199:35.62] Get this out of my way.
[199:36.36] What I'm getting at is.
[199:37.92] In theory.
[199:39.08] I don't know how you'd.
[199:40.90] Process ordering.
[199:41.92] Of wrappers.
[199:44.34] Like if you could.
[199:45.00] Is it possible.
[199:45.76] To have multiple directions.
[199:46.88] In a scope block.
[199:47.98] Maybe not.
[199:48.56] Maybe this is actually.
[199:49.46] What gets in our way.
[199:50.16] There's this.
[199:51.60] But if I wanted to.
[199:53.00] Like use a.
[199:53.86] Use cache wrapper here.
[199:55.58] I would have to do it.
[199:57.14] Right here.
[199:59.94] Is what I'm trying to get at.
[200:01.26] It can't go outside.
[200:02.64] It has to go.
[200:03.88] Inside.
[200:04.70] So it'd look like.
[200:05.80] This.
[200:08.06] You know.
[200:08.58] So there is an ergonomics.
[200:17.96] Aspect.
[200:18.62] Of.
[200:19.48] Of.
[200:20.90] Of declaring the scope.
[200:21.88] At first.
[200:22.22] I was like.
[200:22.62] Oh.
[200:22.86] I don't get why.
[200:23.72] I'm using block scope.
[200:25.20] To manage this.
[200:26.56] Because it doesn't need to be.
[200:28.64] Compile.
[200:29.06] It doesn't necessarily.
[200:29.92] Need to be compiler.
[200:30.80] If it's just doing.
[200:31.40] A function wrapper.
[200:32.28] But.
[200:33.18] Yeah.
[200:35.56] I need.
[200:36.38] Are only one of these.
[200:38.32] Allowed per block.
[200:39.36] Like.
[200:39.90] I think it's interesting.
[200:42.30] If you.
[200:42.82] If you strict.
[200:44.04] Like.
[200:45.46] And does order matter.
[200:47.08] Is there anything.
[200:47.94] Semantically.
[200:49.08] In.
[200:49.78] JavaScript.
[200:51.04] That prepares us.
[200:52.34] For this.
[200:52.70] Possibility.
[200:53.90] Because for us.
[200:54.84] As I said.
[200:55.34] It is all.
[200:56.94] About server functions.
[200:58.38] Right.
[200:58.72] That's our.
[201:01.84] Only interest here.
[201:02.88] Essentially.
[201:03.40] Obviously.
[201:04.54] People are saying.
[201:05.14] Oh.
[201:05.28] Use server.
[201:06.06] Cache.
[201:07.54] Right.
[201:08.38] Can you just.
[201:09.10] Chain these together.
[201:10.48] Like.
[201:12.18] Use server cache.
[201:14.00] I.
[201:17.60] I'm not.
[201:18.72] I.
[201:19.46] I think.
[201:19.94] Making these.
[201:21.16] Configurable.
[201:21.92] Goes against.
[201:22.74] The.
[201:23.28] The principle of it.
[201:31.28] Well.
[201:31.76] What.
[201:32.36] Server isn't at the top of the file.
[201:34.02] Because I.
[201:34.56] Want this.
[201:35.60] In the client.
[201:36.92] This is a client.
[201:39.40] Query.
[201:40.16] Wrapping.
[201:41.20] A.
[201:41.90] Server function.
[201:43.28] So I.
[201:43.74] You know.
[201:44.20] I can just go here.
[201:45.22] And then like.
[201:45.92] Like.
[201:48.12] You could put it in a separate file.
[201:50.24] And put use server.
[201:51.04] The separate file.
[201:51.80] And then put this in a function.
[201:53.02] That blocks it.
[201:53.64] But.
[201:53.74] I mean.
[201:54.64] Then you're going to have another place.
[201:57.02] Where you wrap the query to.
[201:58.32] And having an additional.
[201:59.10] Separate thing.
[202:00.02] This is always on the outside.
[202:04.36] So this definitely doesn't belong.
[202:06.40] In this category of thing.
[202:07.76] It's also configurable.
[202:09.84] It has keys.
[202:10.70] You know what I mean.
[202:11.42] Where this cache mechanism here.
[202:13.56] Is.
[202:14.90] Much.
[202:16.10] It's just a.
[202:17.74] It's like a memoized function.
[202:19.48] It lasts.
[202:20.60] I mean.
[202:21.56] To be fair.
[202:22.12] The reason that we have keys here.
[202:24.60] Is.
[202:25.20] Because it needs to be isomorphic.
[202:27.16] Across the server.
[202:28.28] Client boundary.
[202:28.84] If it did not need to be isomorphic.
[202:31.26] Across the server.
[202:31.84] Client boundary.
[202:32.44] But.
[202:33.42] It would be a different story.
[202:35.88] But yeah.
[202:36.40] You can have.
[202:46.64] Yeah.
[202:47.26] I think.
[202:47.84] The AST Explorer.
[202:48.70] Is probably not going to.
[202:49.88] It's probably not going to.
[202:53.48] Complain about it.
[202:54.32] It sees a string.
[202:55.52] With a.
[202:56.18] Semicolon.
[202:57.16] I just meant.
[202:57.60] Themantically.
[202:58.68] If there's.
[202:59.40] Something that.
[203:00.62] That gets in our way.
[203:02.88] Biggest thing is.
[203:13.14] I don't think this works.
[203:14.18] I don't think this works.
[203:14.22] The way.
[203:14.96] Vinci handles.
[203:16.92] These directives.
[203:17.76] I think Vinci.
[203:19.12] I mean.
[203:20.72] Yeah.
[203:20.92] It collects the references.
[203:22.74] I'd have to talk to Nikhil about this.
[203:26.98] Yeah.
[203:31.50] It shows his directive.
[203:33.30] Interesting.
[203:34.68] I want to see that.
[203:36.06] The AST Explorer.
[203:36.80] Is it.
[203:51.82] Yeah.
[204:01.98] Yeah.
[204:02.14] Yeah.
[204:02.20] Vinci can be updated.
[204:03.62] But it's more of like.
[204:05.20] It's a much more considerable.
[204:07.02] Difference.
[204:07.82] Like Vinci is based on.
[204:09.08] Roughly.
[204:09.98] How.
[204:10.34] Jared was thinking.
[204:13.20] How Bun should.
[204:13.94] Generalize it.
[204:15.58] Because right now.
[204:22.34] I'm just seeing.
[204:23.00] Expression statement.
[204:23.88] With an identifier.
[204:27.14] I need to give it a name.
[204:36.92] Expression statement.
[204:45.58] Literal.
[204:46.60] Yeah.
[204:46.92] I just see.
[204:47.48] Is this.
[204:49.24] How about Babel.
[204:50.58] Babel see it different.
[204:51.88] Yeah.
[204:51.88] I don't know.
[204:51.88] I don't know.
[204:57.14] Babel sees it different.
[205:02.28] Gotcha.
[205:03.02] Acorn doesn't.
[205:04.50] But Babel doesn't.
[205:05.34] Does.
[205:05.88] And Babel is all that we care about.
[205:07.26] Right.
[205:07.52] Let me see here.
[205:08.54] Interesting.
[205:12.90] The Babel.
[205:14.52] Directive.
[205:17.36] Directive.
[205:17.84] Literal.
[205:18.20] I see what you're talking about.
[205:19.06] That's interesting.
[205:22.68] Huh.
[205:23.08] Is it anything that follows this pattern?
[205:29.00] Yeah.
[205:35.70] Okay.
[205:35.92] So they just.
[205:36.62] What if I put like.
[205:38.24] Var A above it.
[205:41.08] I'm just messing.
[205:44.46] With it a little bit.
[205:46.10] Okay.
[205:47.92] So.
[205:48.62] Directives are limited to.
[205:51.60] The top of the file.
[205:52.96] Or the scope block.
[205:54.24] Like if I.
[205:54.74] If I do this.
[205:55.48] Does it turn into a directive again?
[205:56.96] Okay.
[206:02.00] Not scope block.
[206:03.50] How about.
[206:04.60] Function block.
[206:05.80] It does.
[206:11.74] Okay.
[206:12.44] Cool.
[206:12.98] Okay.
[206:14.30] Nice.
[206:17.48] Nice.
[206:19.16] Okay.
[206:20.20] It's interesting.
[206:21.60] I don't know how you would process the ordering.
[206:25.10] Because I think it's one of those things that order would matter.
[206:27.26] Unfortunately.
[206:27.82] Like.
[206:30.16] I'm just thinking from like a generic tool.
[206:35.56] Yeah.
[206:40.98] But it's definitely interesting.
[206:45.28] Right.
[206:45.86] Like.
[206:46.22] Like.
[206:46.28] To think that you could be like.
[206:48.58] Use server.
[206:49.74] And then go.
[206:50.92] Use.
[206:52.36] Cache.
[206:54.38] And then be like.
[206:55.62] Ta-da.
[206:56.38] You know.
[206:57.16] What I like about the solution is.
[207:09.86] I've been getting things where people are using solid's cache function.
[207:13.38] As.
[207:14.60] Essentially.
[207:15.88] Trying to use it like this.
[207:17.96] Like.
[207:18.18] Putting cache functions in cache functions.
[207:19.88] Which is another reason why I'm calling it query now.
[207:22.32] They're like.
[207:23.04] Why can't I put my cache function in my cache function.
[207:25.46] And.
[207:25.68] It throws when it handles this redirect stuff.
[207:28.28] This literally doesn't care.
[207:30.52] What.
[207:33.96] What you pass to it.
[207:35.14] So.
[207:35.78] I.
[207:37.36] I like it.
[207:38.08] Because.
[207:38.98] You know.
[207:43.54] The difference between this.
[207:47.16] And this.
[207:49.32] Is.
[207:52.76] This will always go to the server.
[207:57.68] But return.
[207:58.76] The same cache result.
[208:00.42] Whereas the other one.
[208:03.58] Will only go to the server.
[208:05.38] When the client has revalidated.
[208:07.90] But.
[208:09.02] If.
[208:10.02] If.
[208:10.64] You can always extract.
[208:21.42] This part.
[208:27.10] Right.
[208:34.18] Which is more of what people are looking for.
[208:52.40] I think.
[208:54.24] Like.
[208:58.76] Because.
[208:58.92] We.
[208:59.80] We had people trying to.
[209:00.64] Like wrap this.
[209:01.38] In.
[209:01.84] In cache.
[209:03.12] Which I'm renaming to query.
[209:04.22] Yeah.
[209:05.14] My.
[209:05.40] My first account.
[209:06.44] Look at this is.
[209:07.24] This solves the opposite side of the problem.
[209:09.46] I was solving.
[209:10.14] So.
[209:10.62] I'm actually.
[209:11.74] I find it very complimentary.
[209:14.26] To what we're doing.
[209:16.06] Right now.
[209:16.60] Because.
[209:17.12] In a sense.
[209:18.78] It's interesting.
[209:20.42] Because.
[209:20.72] Use cache.
[209:22.32] Can only have meaning.
[209:23.86] Where infrastructure is involved.
[209:25.52] Right.
[209:26.54] Like.
[209:27.96] You have to be able to say.
[209:30.00] Use.
[209:30.66] KV.
[209:32.64] Or whatever.
[209:33.08] Right.
[209:33.44] So.
[209:37.42] It's going to be a fun one.
[209:38.66] To see how that.
[209:39.34] How they expand that.
[209:41.12] For next.
[209:41.70] On non-Bercel platforms.
[209:44.84] But.
[209:45.28] Generally speaking.
[209:47.14] At the general mechanism.
[209:48.46] In the meta framework.
[209:50.64] It seems convenient.
[209:53.62] It's kind of interesting.
[209:55.40] You'd have to error.
[209:56.64] On.
[209:58.48] It.
[209:59.18] Going to the client.
[210:00.28] This is a server only mechanism.
[210:02.10] Client.
[210:03.62] Can keep doing.
[210:04.34] What it's always done.
[210:10.94] Okay.
[210:11.36] They.
[210:14.54] They.
[210:14.78] They actually solve this.
[210:16.16] In.
[210:17.62] Next.
[210:18.04] They have like.
[210:18.72] An imported API.
[210:19.52] Which is like.
[210:20.22] Cat.
[210:21.18] Something like.
[210:21.62] I don't remember the thing.
[210:22.42] But it's like.
[210:22.80] Cat.
[210:23.10] You can basically import something.
[210:24.42] Then it's like.
[210:24.98] You know.
[210:25.72] Use.
[210:26.58] Cache.
[210:27.20] Profile.
[210:28.50] Default.
[210:30.80] Or something.
[210:33.28] I.
[210:33.56] I didn't.
[210:34.78] Like.
[210:35.34] So.
[210:35.92] And.
[210:38.48] This one will error.
[210:39.72] If it's not.
[210:40.46] Called from within a cache function.
[210:42.20] Or whatever.
[210:42.62] You know.
[210:42.98] There's like.
[210:43.92] Using.
[210:54.70] Using.
[210:55.30] Use cache.
[210:55.72] Seem to disable.
[210:56.32] A bunch of other.
[210:56.72] Offens.
[210:56.96] Next.
[210:57.14] I said.
[210:57.40] No longer necessary.
[210:58.00] Well.
[210:58.24] Exactly.
[210:58.80] This is a much.
[210:59.90] Cleaner separation.
[211:02.60] Because.
[211:03.08] Next.
[211:06.74] Was.
[211:06.98] Trying to find.
[211:07.92] Ways.
[211:08.34] To wrap.
[211:08.96] Like.
[211:09.54] Oh.
[211:10.50] Db call.
[211:12.02] Fetch.
[211:13.70] And.
[211:15.14] Then.
[211:16.14] React.
[211:16.96] Was like.
[211:17.20] Okay.
[211:17.36] Here's this cache function.
[211:18.38] But it wasn't.
[211:18.88] Expandable enough.
[211:19.88] Um.
[211:21.12] Yeah.
[211:26.58] I.
[211:26.84] I.
[211:28.30] It's.
[211:29.92] Interesting.
[211:30.46] To use.
[211:31.60] This.
[211:31.92] Kind of.
[211:32.22] Hybrid approach.
[211:33.06] Of compiler.
[211:33.80] Plus.
[211:35.00] Runtime.
[211:36.82] Um.
[211:37.82] But.
[211:39.70] I think.
[211:40.12] It's actually.
[211:40.50] Very poignant.
[211:41.14] Kind of.
[211:41.46] Point out.
[211:41.82] Like.
[211:42.22] Why.
[211:42.54] The.
[211:42.74] Configurability.
[211:44.12] Is not.
[211:44.70] Something.
[211:45.08] That.
[211:45.32] You.
[211:45.88] Do.
[211:46.64] Through.
[211:46.94] Directives.
[211:47.64] That's the thing.
[211:51.14] This.
[211:51.30] This doesn't.
[211:51.80] Invalid.
[211:52.28] The.
[211:52.74] This is.
[211:53.56] This is.
[211:54.34] I.
[211:54.54] I don't.
[211:56.64] Think.
[211:56.86] This cache.
[211:57.62] I think.
[211:59.38] This cache.
[211:59.80] Is based.
[212:00.32] Completely off.
[212:01.20] Arguments.
[212:02.34] And then.
[212:03.12] Invalidation.
[212:03.90] Is purely.
[212:04.46] Time based.
[212:05.86] I.
[212:07.12] I don't know.
[212:07.66] How this would ever.
[212:08.42] Keys.
[212:09.92] Yeah.
[212:12.22] Compiler.
[212:12.76] Runtime.
[212:13.20] Plus.
[212:13.50] Infra.
[212:13.78] Yeah.
[212:14.02] All three.
[212:21.20] Yeah.
[212:21.64] Yeah.
[212:22.40] Yeah.
[212:25.30] The.
[212:25.60] Not configurable.
[212:26.34] Makes them hard.
[212:26.96] They also.
[212:27.52] Can mess with.
[212:28.30] TypeScript.
[212:28.78] Like.
[212:29.56] They.
[212:29.78] Like.
[212:30.34] You can use.
[212:30.92] Wrappers.
[212:31.24] To fix.
[212:31.62] TypeScript.
[212:31.94] For you.
[212:32.34] That being.
[212:34.22] Said.
[212:39.08] I don't.
[212:39.68] I don't think.
[212:39.86] The.
[212:40.00] The.
[212:40.40] Wrappers.
[212:40.98] Will.
[212:41.34] Ever.
[212:41.94] Be.
[212:42.20] As.
[212:42.46] Obvious.
[212:43.28] Of.
[212:45.38] Like.
[212:45.76] What.
[212:47.06] Their.
[212:47.58] Intent is.
[212:48.16] There's.
[212:48.38] Something.
[212:48.58] About.
[212:48.78] You.
[212:48.96] Server.
[212:49.18] That just.
[212:49.54] Goes.
[212:49.82] You know.
[212:51.20] Which.
[212:53.40] I've.
[212:54.00] Come to.
[212:54.38] Like.
[212:54.86] Actually.
[212:55.48] More.
[212:55.78] Over.
[212:56.06] Time.
[213:04.24] But.
[213:04.64] Yeah.
[213:04.82] I'm.
[213:05.02] I'm.
[213:06.04] I'm.
[213:06.32] I.
[213:06.92] I actually.
[213:08.18] Maybe.
[213:08.82] I'm.
[213:09.12] I'm.
[213:09.26] I'm.
[213:09.30] I'm.
[213:09.30] I'm.
[213:09.32] I'm.
[213:09.38] I'm.
[213:09.38] I'm.
[213:09.38] I'm.
[213:09.40] I'm.
[213:09.42] I'm.
[213:09.82] I'm.
[213:09.94] I don't.
[213:10.06] I don't know.
[213:10.46] How.
[213:10.78] Invalidation.
[213:11.38] Works.
[213:11.62] I assume.
[213:12.08] That.
[213:12.32] This was.
[213:13.10] More.
[213:13.32] Of.
[213:13.42] Like.
[213:13.58] A cache.
[213:14.02] That doesn't.
[213:14.52] Invalidate.
[213:15.04] Like.
[213:15.26] You.
[213:15.88] Remove.
[213:16.64] The.
[213:17.00] Cat.
[213:17.68] Like.
[213:18.10] Like.
[213:19.06] What are.
[213:19.32] The.
[213:19.42] You're.
[213:20.08] Right.
[213:20.22] There is.
[213:20.54] No.
[213:20.66] Cache.
[213:21.06] Keys.
[213:21.42] Here.
[213:21.66] There's.
[213:22.20] Like.
[213:22.40] A.
[213:22.62] Stale.
[213:23.04] Time.
[213:23.48] And.
[213:23.64] Expiry.
[213:24.12] Time.
[213:24.50] But.
[213:25.42] I don't.
[213:25.68] Think.
[213:25.86] This is.
[213:26.18] Like.
[213:26.48] Flush.
[213:27.46] The.
[213:27.66] Cache.
[213:27.98] Kind of.
[213:28.22] Thing.
[213:28.36] Unless.
[213:28.58] It's.
[213:28.76] Like.
[213:28.94] Clear.
[213:29.60] The.
[213:29.82] Whole.
[213:30.12] Freaking.
[213:30.54] Cache.
[213:31.28] Maybe.
[213:32.08] Theo.
[213:32.42] Knows.
[213:32.64] More.
[213:32.80] Than.
[213:32.92] I do.
[213:33.18] But.
[213:33.40] I.
[213:35.70] I.
[213:37.64] I.
[213:37.82] Don't.
[213:38.02] I.
[213:38.54] Don't.
[213:38.70] Remember.
[213:38.98] Seeing.
[213:39.24] Anything.
[213:39.52] About.
[213:39.74] A.
[213:39.88] Key.
[213:40.14] I'm.
[213:43.32] Obviously.
[213:43.58] Not.
[213:43.80] Going.
[213:44.04] Off.
[213:44.26] The.
[213:44.42] Source.
[213:45.12] There.
[213:45.50] Is.
[213:45.68] Like.
[213:45.92] Because.
[213:48.20] See.
[213:48.36] Like.
[213:48.66] This.
[213:49.16] Just.
[213:49.36] Gets.
[213:49.50] Rid of.
[213:49.74] All.
[213:49.98] The.
[213:50.10] Weird.
[213:50.28] Fetch.
[213:50.66] Like.
[213:51.10] Behavior.
[213:51.38] There's.
[213:51.94] A.
[213:52.06] Tag.
[213:52.32] Function.
[213:52.76] Okay.
[213:53.12] Okay.
[213:59.20] Gotcha.
[214:00.32] Okay.
[214:06.32] Yeah.
[214:09.22] That's.
[214:09.54] Interesting.
[214:10.32] The.
[214:12.02] Fact.
[214:12.32] That.
[214:13.32] Yeah.
[214:15.80] That is.
[214:16.66] Interesting.
[214:17.40] I like it.
[214:18.80] From the perspective.
[214:19.54] That it forces the block.
[214:20.82] Which lets it.
[214:21.78] Like.
[214:22.00] Coincide.
[214:22.74] Like.
[214:22.98] Like.
[214:23.68] Combine.
[214:24.76] Better.
[214:25.28] But.
[214:27.34] This.
[214:29.08] I.
[214:30.20] I mean.
[214:30.66] I'd have to see.
[214:31.16] This feels like it.
[214:31.96] Like.
[214:32.38] The common case.
[214:33.08] Requires arguments.
[214:33.84] Yeah.
[214:37.54] Validate path.
[214:38.40] Yeah.
[214:38.56] Yeah.
[214:38.72] No.
[214:38.90] I hear you.
[214:39.40] Yeah.
[214:42.44] It feels like.
[214:43.68] I think this is the tricky part here.
[214:46.24] It's like.
[214:46.74] If it.
[214:47.60] Things that work without arguments.
[214:50.22] Work.
[214:51.74] Well.
[214:52.28] Here.
[214:52.68] Things that work.
[214:53.40] That require arguments.
[214:54.70] Are.
[214:55.22] Are.
[214:56.36] Trickier.
[214:58.48] Because.
[214:59.00] Because.
[215:04.40] Yeah.
[215:05.64] This.
[215:05.88] That.
[215:06.34] That is an interesting one.
[215:07.52] So.
[215:07.64] Use server.
[215:08.16] You could argue.
[215:08.82] That there is an argument.
[215:09.74] Get.
[215:10.20] But.
[215:12.68] Since the get.
[215:13.46] Only matters.
[215:14.36] From the side.
[215:14.98] Making the request.
[215:15.88] Like.
[215:17.48] In solid.
[215:17.80] We just do.
[215:18.22] We just do this.
[215:18.88] Ta-da.
[215:19.48] Get.
[215:20.22] Like.
[215:20.50] It's.
[215:21.22] It's actually.
[215:22.00] Relatively simple.
[215:23.08] Because.
[215:23.48] The behavior.
[215:24.64] Is defined.
[215:25.34] From the outside.
[215:26.48] So.
[215:27.28] You.
[215:29.68] And.
[215:30.36] You don't care.
[215:31.06] About this configuration.
[215:31.88] When you hit the API.
[215:33.02] On the server.
[215:33.64] So.
[215:33.86] This is actually.
[215:34.40] The perfect wrapper.
[215:35.20] You don't actually need.
[215:36.24] The pass arguments.
[215:36.90] To it.
[215:38.10] Um.
[215:38.56] But.
[215:42.36] With cache.
[215:43.34] If you're expected.
[215:44.14] To pass arguments.
[215:45.34] To it.
[215:45.90] Like.
[215:46.72] Cache on this tag.
[215:48.88] Or.
[215:49.38] Set this cache.
[215:52.52] Profile for it.
[215:53.46] Like.
[215:53.58] If it's actually.
[215:54.04] Configurable.
[215:54.76] And you.
[215:55.94] Regularly.
[215:56.98] Get in the course.
[215:57.64] Of configuring it.
[215:58.48] It's less.
[216:00.68] Compelling.
[216:01.56] Here.
[216:02.12] See.
[216:05.74] Maybe.
[216:06.32] The default.
[216:07.10] Thinking.
[216:07.58] And maybe.
[216:08.02] This is where.
[216:08.68] The thinking is.
[216:09.30] Is that.
[216:09.74] Um.
[216:10.88] Post to the default.
[216:23.46] But yeah.
[216:24.38] And we just.
[216:25.16] Literally just.
[216:25.84] Wrap.
[216:26.42] Get.
[216:27.56] To be fair.
[216:29.38] It's actually hidden.
[216:30.26] On this object itself.
[216:31.88] If you actually go.
[216:32.64] Into.
[216:33.82] This.
[216:34.60] If you grab.
[216:35.14] The server function.
[216:37.94] And just.
[216:38.44] And just.
[216:38.46] Call like.
[216:38.92] Dot.
[216:39.24] Capital.
[216:39.60] Get on it.
[216:40.10] It'll also.
[216:40.62] Do it directly.
[216:41.32] We just have the wrapper.
[216:42.12] To pull it out easier.
[216:42.90] Um.
[216:43.98] In terms of this question.
[216:47.34] But yeah.
[216:47.88] Post is the default.
[216:48.82] But.
[216:49.58] My arguments against this.
[216:51.40] Would you make.
[216:51.82] Helper functions with tags.
[216:52.76] A.
[217:03.46] Yeah.
[217:03.66] It's just.
[217:04.08] The argument.
[217:05.90] It's so much cleaner.
[217:10.34] Not to.
[217:10.84] See.
[217:11.12] The only argument.
[217:11.74] That I can see.
[217:12.18] That I would really want this.
[217:13.52] Is if our belief.
[217:14.56] Is most people.
[217:15.36] Aren't going to be sending keys.
[217:16.86] Like.
[217:17.18] That they're non-revalidatable cache.
[217:20.60] If the common use case.
[217:21.80] Is non-revalidatable.
[217:22.90] I am.
[217:24.32] Okay.
[217:25.10] That on the edge case.
[217:26.28] You come in.
[217:26.74] And you're just like.
[217:27.26] You know.
[217:28.98] Cache.
[217:29.78] Key.
[217:30.52] Pay.
[217:32.08] Yeah.
[217:32.32] Okay.
[217:33.12] I can live with that.
[217:43.28] Okay.
[217:43.64] I got enough.
[217:44.58] I got a better idea.
[217:45.30] I got a better idea.
[217:51.16] Yeah.
[217:53.90] Why don't you.
[217:56.34] Why don't we just do this?
[217:57.56] We.
[218:02.52] We just do the same thing.
[218:04.96] That we do already.
[218:06.50] With.
[218:06.92] All this other.
[218:08.44] Stuff.
[218:09.16] Right.
[218:09.40] You know.
[218:09.70] Solids query function.
[218:11.24] When you do this.
[218:13.28] Get user.
[218:14.64] For us.
[218:16.04] There's a key for.
[218:18.68] And you.
[218:20.04] Like.
[218:20.34] Let's pretend this had.
[218:21.38] Um.
[218:23.72] This took a number.
[218:24.96] That's an idea or something.
[218:25.82] Right.
[218:26.02] We have key for.
[218:27.44] For three.
[218:30.50] So you can like.
[218:31.18] Path.
[218:31.50] You can call it without calling it.
[218:32.84] And then it will.
[218:33.68] This will return like.
[218:34.78] User.
[218:36.64] Three or something.
[218:38.42] Right.
[218:38.72] Like.
[218:39.50] And in the same way I was saying before that our.
[218:42.72] Our actual server function.
[218:44.30] Like in solid.
[218:45.54] When we do this.
[218:46.16] When we.
[218:49.06] When we do this.
[218:51.96] Essentially.
[218:52.46] Um.
[218:53.62] We.
[218:54.46] Uh.
[218:58.06] Let me just go.
[218:58.74] Const.
[218:59.42] D or something.
[219:01.42] Whatever.
[219:01.74] We.
[219:02.58] We can go.
[219:03.14] D dot get.
[219:04.88] And.
[219:05.32] And like.
[219:06.04] Do.
[219:06.36] It'll do.
[219:07.10] The get request.
[219:08.14] Instead of the post request.
[219:09.16] Right.
[219:09.44] It's kind of built in.
[219:10.46] What stops.
[219:12.22] This.
[219:13.76] From.
[219:14.54] Being.
[219:15.70] Essentially.
[219:16.90] Like.
[219:17.56] Get key on this.
[219:19.20] Or just like.
[219:19.70] Hey.
[219:20.28] Dot.
[219:20.62] Key.
[219:21.84] Do you know what I mean?
[219:30.20] Like.
[219:30.42] What stops us from actually.
[219:32.10] I mean.
[219:34.38] We don't even need this.
[219:36.00] What stops us from just doing.
[219:41.14] This.
[219:41.66] Like.
[219:43.56] We don't have to go over a freaking network boundary here.
[219:46.38] This isn't the thing.
[219:48.32] I don't think there's anything that actually stops us.
[219:50.54] From.
[219:51.14] Passing.
[219:52.38] Inside like a server action or something.
[219:56.52] Passing the reference.
[219:59.12] To the function.
[220:01.36] And telling it.
[220:03.42] That.
[220:04.80] It needs to revalidate or something.
[220:06.72] I don't know.
[220:07.26] I'm just trying to think of like.
[220:08.22] Like.
[220:11.14] Or it's not even revalidate.
[220:13.88] It's actually invalidate.
[220:15.38] Because you're not fetching it again.
[220:18.04] Unless you are fetching it.
[220:19.20] Oh.
[220:30.90] Right.
[220:31.18] Right.
[220:33.94] Well.
[220:34.62] I mean.
[220:35.00] If it works like can stack.
[220:36.08] Like the way we do.
[220:36.82] It's.
[220:37.44] It's.
[220:37.66] It's a starts with query.
[220:39.36] So.
[220:39.66] This will.
[220:40.22] This would invalidate.
[220:42.48] Right.
[220:42.76] Heya takes.
[220:43.60] A greeting.
[220:45.46] That's a string.
[220:46.50] Okay.
[220:46.86] This invalidates.
[220:49.52] All the greetings.
[220:50.72] This.
[220:55.12] Invalidates.
[221:04.84] You know.
[221:05.26] You know.
[221:05.46] Actually.
[221:06.50] We want TypeScript to work.
[221:07.46] See.
[221:18.82] See.
[221:27.80] What I'm suggesting here is that.
[221:30.60] The function identity.
[221:31.98] The function identity.
[221:32.02] Is the key.
[221:34.06] And because we don't have to worry about serializing over board boundaries or freaking.
[221:39.90] I don't think we need to have to double check that.
[221:45.74] But because we don't have to worry about serializing over boundaries.
[221:48.28] I.
[221:48.54] And like minification and stuff.
[221:50.84] I think.
[221:51.34] I think that this would work.
[221:53.26] TS doesn't.
[221:58.54] TS doesn't.
[222:01.46] The same way TS doesn't know about.
[222:04.02] Um.
[222:06.48] The stuff I didn't think.
[222:08.88] This is why I had to expose freaking.
[222:10.68] This is the whole reason why get.
[222:13.00] D.
[222:14.14] Exists.
[222:18.66] Like.
[222:20.34] Like.
[222:29.36] As a no.
[222:30.24] Like if.
[222:30.76] TypeScript always pisses me off.
[222:32.84] It's fine.
[222:33.26] You could do this.
[222:35.14] I think.
[222:40.34] I'm pretty sure you could do this.
[222:47.88] There you go.
[222:48.52] And in fact.
[222:49.84] I think.
[222:52.02] You could do this.
[222:53.22] So.
[222:54.26] Maybe this is the correct answer.
[222:56.20] Because you already have to pass into a function.
[222:57.60] Maybe this is the.
[222:58.26] The.
[222:59.08] Maybe this is the correct answer.
[223:00.40] Yeah.
[223:02.10] You.
[223:02.62] You.
[223:03.56] You got there faster than I did.
[223:04.98] Internally.
[223:08.18] For this to work mechanically.
[223:09.62] We'd be putting stuff on the Heia object.
[223:11.82] Like.
[223:12.56] On the wrapper.
[223:13.96] But.
[223:14.28] But.
[223:15.68] But.
[223:16.50] Essentially.
[223:18.14] You could do this.
[223:19.72] So.
[223:25.86] Yeah.
[223:27.14] This is attractive.
[223:28.98] Because now I don't need keys.
[223:37.76] Yeah.
[223:38.16] That's.
[223:38.62] Now.
[223:39.90] If I don't need keys.
[223:41.10] Then.
[223:43.52] Setting the.
[223:45.36] The cache profile is the only thing I need to customize.
[223:47.12] And.
[223:47.62] If you set a.
[223:49.38] Reasonable default.
[223:50.34] It's going to be the exception case.
[223:51.68] You can just put use cache wherever the hell you want.
[223:53.62] And.
[223:54.60] Yeah.
[223:55.20] Okay.
[223:55.48] We're good.
[224:01.56] There we go.
[224:02.16] We have solved the use cache thing.
[224:05.28] No.
[224:05.70] No keys are necessary.
[224:07.10] You don't need to be validate tag.
[224:08.58] You just.
[224:10.36] Pass in the function reference.
[224:12.26] Technically.
[224:14.78] You'll have a key on it.
[224:15.86] But.
[224:16.06] TypeScript.
[224:16.80] Will be happier with you.
[224:18.54] If you just do this.
[224:19.24] Yes.
[224:23.86] Yes.
[224:25.84] Okay.
[224:31.56] Yeah.
[224:34.04] No.
[224:34.30] Yeah.
[224:35.14] No.
[224:35.38] I.
[224:35.60] Yeah.
[224:36.66] It's.
[224:37.12] It's.
[224:37.92] It's quite.
[224:38.28] Possible.
[224:39.14] It's.
[224:39.64] You play around with these for a minute.
[224:41.38] And then you're like.
[224:41.88] Thinking.
[224:42.16] You're like.
[224:42.38] Okay.
[224:42.58] Yeah.
[224:42.76] This is how it has to work.
[224:43.78] As I said.
[224:45.00] I'm sure they'll come to pretty much the same conclusion.
[224:47.46] Yeah.
[224:51.28] No.
[224:51.50] That's fair enough.
[224:52.00] I think it's just like a leave raw video.
[224:54.16] And like a write up somewhere.
[225:01.34] Anyway.
[225:05.98] I mean.
[225:07.48] Technically we could also do.
[225:09.74] But the TypeScript for.
[225:11.00] Like we don't get types for hey.
[225:12.46] Because of the way the wrapper works.
[225:13.72] Yes.
[225:15.72] This is just a server cache.
[225:16.88] I mean.
[225:26.60] Yeah.
[225:26.96] I think this.
[225:27.54] I mean.
[225:27.86] Now you're going to be thinking like.
[225:29.06] What would it look like from the client side?
[225:30.68] That's an interesting question.
[225:36.50] Because.
[225:37.58] Assuming that you do the same thing.
[225:42.48] Where you set the profile on the client.
[225:44.24] Of how you want the cache behavior to work.
[225:46.28] Client has reactivity.
[225:48.88] Which is kind of.
[225:49.66] Pain in the ass here.
[225:51.16] You could have a life on a memoize function though.
[226:01.80] And use the same mechanism.
[226:02.80] Yeah.
[226:10.98] I don't know.
[226:11.52] Yeah.
[226:16.60] I see where your head's going here.
[226:22.44] The challenge.
[226:24.08] Right.
[226:24.60] Because then.
[226:25.10] The.
[226:26.16] The.
[226:27.12] Configuration.
[226:28.92] Like the.
[226:29.40] The router would just provide.
[226:31.08] A cache configuration.
[226:32.56] The problem with the router.
[226:37.18] Is it needs to be isomorphic.
[226:39.52] So we need the key.
[226:42.00] Like the reason we got rid of the key.
[226:49.36] Was because we didn't need to be isomorphic.
[226:51.76] Like if on either side.
[226:52.88] You can use something.
[226:53.64] Where you can use the reference identity.
[226:55.18] But if you have to serialize this.
[226:56.54] You don't get to do that.
[226:58.00] Yeah.
[227:12.42] To be fair.
[227:16.96] Our invalidation works similar.
[227:21.08] With the composite keys.
[227:22.48] It's just.
[227:22.96] The thing is like.
[227:24.56] Yeah.
[227:29.58] I.
[227:30.24] On the client.
[227:33.04] Yeah.
[227:33.36] Because you can always set a custom key.
[227:35.90] Where this.
[227:36.80] I mean.
[227:37.20] You could have overrides.
[227:38.18] Or send a custom key.
[227:38.84] I'm just.
[227:39.08] I'm just.
[227:39.50] Just playing through it all.
[227:40.74] It's.
[227:41.80] It's interesting.
[227:42.78] Because my.
[227:43.34] It's tricky.
[227:54.82] Because.
[227:55.32] How do you indicate that you want the cache.
[227:58.80] Okay.
[227:59.18] I got one for you.
[228:01.12] Dev.
[228:02.06] How do you indicate you want the cache on the server.
[228:03.54] And on the client.
[228:05.26] Like.
[228:05.52] What I'm getting at is.
[228:06.98] What is.
[228:07.24] What if this is.
[228:08.30] Here.
[228:09.20] Is this a server cache.
[228:11.92] Or a client cache.
[228:12.80] Or both.
[228:13.28] Or.
[228:13.54] Or.
[228:13.94] Or whatnot.
[228:15.96] It's ambiguous.
[228:17.00] What the intention is here.
[228:18.70] Yeah.
[228:31.08] Yeah.
[228:31.24] The compiler can add the fake function.
[228:33.28] But TypeScript will never know that it's there.
[228:35.32] Like.
[228:36.18] We add the fake function.
[228:37.50] With what we do.
[228:38.58] Like.
[228:38.92] Like.
[228:39.24] Our get.
[228:39.64] On.
[228:40.04] Server functions.
[228:41.54] Is like that.
[228:42.14] We literally have like.
[228:43.46] Server function.
[228:44.32] And then do like.
[228:44.96] D.get.
[228:45.58] This exists.
[228:46.14] But TypeScript will never be able to know.
[228:48.70] Because TypeScript just sees an async function.
[228:50.88] You have to wrap it.
[228:52.86] So that types.
[228:54.34] Like.
[228:54.62] This goes like.
[228:55.50] Yeah.
[228:56.84] Yeah.
[228:57.12] You got to wrap it basically.
[228:59.32] Unfortunately.
[228:59.88] This.
[229:03.76] Yeah.
[229:06.48] I mean.
[229:07.04] If you're going to come up with custom rules.
[229:08.58] Looking for certain things.
[229:09.46] I think you can do something.
[229:10.32] Probably.
[229:15.20] I mean.
[229:21.94] These align pretty closely.
[229:23.24] Yeah.
[229:23.68] Not cached.
[229:24.36] The server only.
[229:25.82] Because it's in a server function.
[229:26.86] Right.
[229:30.32] But like.
[229:31.74] But like.
[229:32.84] What I'm getting at is.
[229:33.66] This.
[229:37.58] Is.
[229:38.90] Might actually be.
[229:40.96] Pretty.
[229:42.64] Common.
[229:43.96] Like.
[229:50.68] We need the potential to be able to serve both.
[229:52.44] I think.
[229:52.88] I think.
[229:52.88] And it's tricky.
[230:01.62] Because.
[230:02.06] You need it to be a wrapper like this.
[230:03.98] Directly.
[230:05.12] Yeah.
[230:07.40] I don't know how to express this otherwise.
[230:08.80] Without it being inside.
[230:09.98] Because you need it to be a wrapper directly.
[230:11.18] Because.
[230:11.32] I don't know if you know this.
[230:12.60] But if you do.
[230:13.44] If you do this.
[230:15.50] Like.
[230:19.46] This is no longer a server action.
[230:20.94] It's all.
[230:21.28] Because.
[230:22.44] Like.
[230:24.14] Like.
[230:26.46] If I called this.
[230:27.20] Do you know what I mean?
[230:27.68] Like.
[230:27.98] Because.
[230:28.26] It's not passing the server function directly in.
[230:30.46] There's arbitrary javascript code.
[230:31.80] That could run.
[230:32.74] Here.
[230:33.12] It will run this on the server.
[230:34.36] But there's the potential.
[230:35.44] That it needs to hydrate.
[230:36.64] Or it needs javascript.
[230:37.38] In order to run.
[230:38.38] So it won't work with.
[230:39.16] Progressive enhancement.
[230:40.10] Just like.
[230:41.28] Trying to think of like.
[230:42.08] How you would write.
[230:43.24] The equivalent of this.
[230:45.46] Where you have caching on both sides.
[230:49.78] Yeah.
[230:54.46] I think this is where we're landing here.
[230:57.98] Yeah.
[231:03.38] That's my gut.
[231:04.52] It's fine.
[231:05.80] We could think about this further.
[231:07.74] But.
[231:08.56] Yeah.
[231:09.16] It's interesting.
[231:10.22] It's definitely interesting.
[231:11.26] The fact.
[231:11.78] That this isn't isomorphic.
[231:13.16] Meaning that you don't need the keys.
[231:14.40] That you can do this kind of thing.
[231:15.46] I think makes it.
[231:16.40] It's the.
[231:17.40] It's the thing that pushes it over.
[231:19.00] Because.
[231:19.32] Yeah.
[231:22.26] Yeah.
[231:22.82] No.
[231:23.04] I think there's going to.
[231:24.44] I think a lot of times.
[231:25.82] What you're going to do.
[231:26.44] When you build your app.
[231:27.04] Is you're going to set a default.
[231:27.84] Cache profile.
[231:28.60] And it's going to work for 80.
[231:30.52] 90 percent of your stuff.
[231:31.72] You're just going to drop.
[231:32.68] Use cache where you need it.
[231:33.78] Automatically work.
[231:35.28] You know.
[231:36.50] By you're going to put these.
[231:37.90] Next.
[231:39.28] To where.
[231:40.14] Like.
[231:40.68] In our.
[231:41.10] In our action.
[231:41.90] You know.
[231:42.44] Where we go.
[231:43.28] Revalidate.
[231:44.00] This from the client.
[231:45.56] Invalidate.
[231:47.14] These.
[231:48.56] You know.
[231:48.86] Server caches.
[231:49.66] You know.
[231:51.98] You just put them right in your action.
[231:53.58] Same kind of place.
[231:54.48] And then you're just good to go.
[231:56.38] And then in those like couple places.
[231:57.74] Where you have that like.
[231:58.64] Highly sensitive data.
[232:00.14] Or thing that you never care about.
[232:01.78] You just set a.
[232:02.64] Custom profile.
[232:03.76] Call it a day too.
[232:04.60] But 80.
[232:05.52] 90 percent.
[232:06.06] You just use this.
[232:07.12] And you're done.
[232:07.62] Which.
[232:09.86] Is.
[232:10.22] Is DX wise very attractive.
[232:11.76] Okay.
[232:13.82] Okay.
[232:16.44] Cool.
[232:16.92] Dev's like practically on the plane.
[232:20.92] And I don't know if I'm going to.
[232:22.32] I have my last.
[232:23.94] My last.
[232:25.10] Thing to go to.
[232:26.62] Where is it?
[232:28.22] Do.
[232:28.78] Server signals as architecture.
[232:33.02] Okay.
[232:33.66] I've been.
[232:34.46] See.
[232:35.14] Like I haven't mentioned dev right here.
[232:36.18] I don't.
[232:39.46] Bundling gotchas.
[232:41.22] I don't know if there are.
[232:43.36] The big thing is.
[232:44.18] I don't think there is.
[232:44.86] Any bundling consideration.
[232:46.04] With this.
[232:46.94] Like I don't think it actually.
[232:47.80] Breaks things apart.
[232:48.66] I think it literally.
[232:49.32] Just puts a wrapper on it.
[232:50.34] And calls it a day.
[232:51.02] Like I don't think there's actually.
[232:53.10] Any bundling.
[232:54.12] You don't code split on the cache boundaries.
[232:55.60] You don't.
[232:55.94] You literally just go.
[232:57.08] It's.
[232:57.58] That's why I was kind of saying.
[232:58.90] Like this isn't necessary.
[232:59.98] It's a programmatic.
[233:00.82] It's just literally.
[233:03.16] Just programmatic code wrapper.
[233:04.88] You can invalidate a server cache key.
[233:11.06] No.
[233:11.28] It has to be called from a server function.
[233:12.64] It makes sense.
[233:13.42] So if you're on the client.
[233:14.46] And you go.
[233:15.24] And you want to invalidate a cache.
[233:17.04] From the server.
[233:17.48] Like you have to.
[233:18.54] Basically do a server action.
[233:19.96] And in that server action.
[233:21.36] Then tell the server.
[233:24.94] To invalidate the thing.
[233:26.86] Otherwise like.
[233:27.56] The clients.
[233:28.60] Yeah.
[233:29.38] No.
[233:29.56] It's.
[233:29.88] It's.
[233:30.46] You got to do it from the server.
[233:31.46] Confirm it's just wrapping.
[233:42.46] The programmatic IDs.
[233:43.24] Yeah.
[233:43.48] Exactly.
[233:43.80] I'll get.
[233:49.98] Wi-Fi.
[233:50.78] I'll get Wi-Fi.
[233:59.16] I'll get Wi-Fi.
[233:59.38] Okay. Yeah. Well, I mean, it makes sense because the function only exists on the server. So, like, if you import in the client, I'm gathering it with just error, which means that it only exists on the server.
[234:23.78] So the only way you can actually get to it is by calling something on the server.
[234:33.14] Okay. Dev's been doing some pretty great work with signals in real time. He's been prototyping, picking up every not ready solid 2.0 API. He's, like, been asking me about these APIs and literally using solid 2.0 reactivity before it's ready.
[234:47.54] But he showed me he put up he made a post. Where is it? Here, it should be my bookmarks.
[234:59.38] "Signals are so well designed for the problem that they intend to solve that they end up not being the best choice for other problems."
[235:10.34] Which is a fair observation. But basically, he was saying that, like, because signals need something to subscribe to.
[235:20.50] Like, they're, they're like event streams, right? They're like, uh, like, sorry, they're not event streams. Like signals need to actually have something read from it to do the work.
[235:30.18] So if you want to like be pushing events from like a web socket, they're not the right fit. You have to like fake a sync, even if no one's listening to it.
[235:36.82] The problem signals is like they only care if someone's listening. So they only do the work if, if someone's listening. So it's not like.
[235:44.58] What ends up happening is that there's other work that has to happen because of that and no one's listening.
[235:49.22] When you start listening, you suddenly like then go fetch, then go do the thing, which isn't really.
[235:53.46] Productive here generally with web sockets. I'm gathering all these architecture. You want to just keep on pushing the updates and have them available.
[235:59.54] And then even if you're not reading from them. So Dev was working on something like interesting approaches to this and asking about perspective on, on this. And I mean, obviously there's ways to solve this with signals.
[236:10.42] But we got to a point in the conversation where I was just like, what are you even building?
[236:14.74] Like, I don't mean like I've seen all the demos. I'm just like, what is your use case? Like, why are you?
[236:20.66] What are you doing?
[236:32.34] And I mean, I think we have this because he's going signals, lazy pull base to work. Fantastic. Synchronous context, but async lazy signals. Yeah. And the thing is, create async is going to be eager in solid 2.0. It's going to fetch immediately. It's not going to wait because we need to avoid the diamond problem. Similar problem. When you have throwing, like you can, you can basically, if you wait to when you pull and you have it throw. So like the first async thing throws and you don't get to fetch the second. It doesn't make sense. We need it to be eager.
[237:00.34] But even with that, things that are never listened to are still lazy in that sense. So in any case, I was thinking about, I'm like, okay, what are we doing here? Why are we using these? Why are we using signals on the server?
[237:20.90] If a signal fires in the woods and there's no one around to watch it. Yeah. No, no work gets done.
[237:25.40] I realized yesterday that you and I have slightly difficult services. I just want to share a state between clients. You want to rethink hydration. Well, I mean, if your goal is just to share a state between clients, then you just have
[237:40.16] a web socket, right. Like you don't need signals for that, right?
[237:46.92] Right. Like the, the, the, the client can be the synchronous part where the signals and the source can just be whatever the message, I guess it'd be an interesting message protocol. I'm just not sure what the signals on the server are doing for you over any kind of other event bus.
[238:05.16] Right. But then I was like, okay, why would I want signals on that server? Well, what if I went live view? So we talked about this earlier about app architecture. And so my question was like, I asked myself and I'm like, can signals make live view better? Can we make a better live view?
[238:21.16] That's sort of where I started thinking? Cause I was like, it's not hydration came in, but that's not why I was doing this. I was, I was just like signals themselves as a mechanism to communicate might have some benefits, but once you leave the synchronous zone, it doesn't really matter. You can have signals on the server signals on the client, have them do their own system in sync. And then as they, then they can just push out events across the boundary and handle each other's separate systems.
[238:46.16] You know, linking it or trying to fake the linking of it is it's, it doesn't like they, they aren't async to begin with. So it just like, doesn't make sense.
[238:55.16] Right. So there's a DX consideration, right? Potentially. But so the, the, there is that consideration, but I was like, okay, what, what, but there's a comparison to things like live view. I was, I saw some work with the Preact guys in fresh. And I was like, what can we do here?
[239:13.16] What can we do here?
[239:18.16] Could you make a server signal? Yeah. But my, my question for everyone who's doing this stuff is like, what is the signal on the server doing? Where is it living? Like, otherwise you're just calling set state, which could be message.push or observable.next.
[239:39.16] Do you know what I mean? Like, what is the signal graph doing for you on the server? What is it synchronizing? It's not rendering UI, presumably. Like what, what is it doing?
[239:52.16] So this is where I'm very foggy because it, there's gotta be an impact to the graph or the connection for this to be any different than any kind of event bus.
[240:09.16] Right. Multiplayer apps. But what is it actually doing on the server? I understand on the client that you're like, Hey, I've updated this value. Send it over, send it over here.
[240:22.16] Right.
[240:24.16] Yeah. Like I am missing a huge gap here. Cause I don't, I don't understand what the signals are doing on the server at all. The one thing I can picture signals doing on the server is render. So that's where I started, started looking here because as I, as we talked about earlier in the stream, there are arguably only three architectures.
[240:50.16] Signals live here. Signals live here. Signals live here. They're great in Astro. Solid plus Astro is amazing. Signals don't live here yet. And can we use signals to make this better?
[241:10.16] It's a graph that connects many users. Yeah. But are the nodes all in the client? Like are the, are the, is the graph still on the other side?
[241:19.16] I guess the, the.
[241:37.16] Yeah. And like, if they're like, I I've seen stuff like convex do this kind of thing, but I've also been perfectly fine with convex taking that path all the way straight to the client or sync engine, same thing, taking it all the way straight to the client and then shoot out from the, from the client side.
[242:02.16] So anyways, I started thinking about, well, can we mechanically use signals like in staple servers, right?
[242:16.16] So when we talk about UI, we generally talk state down to Dom, right? We function as UI of state.
[242:25.16] We focus on the get like the render, but to talk about this topic, we need to trace back from the post.
[242:31.16] We need to go all the way back to the event source.
[242:33.16] Instead of thinking of our application, starting from what we render.
[242:36.16] We need to think about it starting from what we interact with, what we click to something that possibly happens on the client that sort of that always happens in the client.
[242:43.16] So if we want to have the server involved in the process, it starts with understanding where and how we do the handoff.
[242:48.16] So basically with live view, they, you render a page and set up your live view, your web socket.
[242:56.16] And then from that baseline, like the server's already done the rendering.
[243:00.16] So from that baseline, you click something, you interact with the page and that is the entry point.
[243:07.16] And if you think about it, quick's resumability is also like that.
[243:10.16] They, they don't hydrate.
[243:13.16] And then everything happens from the event delegation.
[243:16.16] That's when they load the code, except quick does every, all the work in the client always.
[243:20.16] Right.
[243:21.16] Cause it's a single page app mentality.
[243:23.16] You click with something, then you need to bring in the JavaScript for the click handler, set the state that triggers other JavaScript load, run that JavaScript.
[243:31.16] But the thing this has in common that I started realizing is it starts, it assumes that the server has already put you in where you need to be.
[243:39.16] And it starts from the interaction point, instead of starting from render, almost all UI frameworks.
[243:44.16] Basically we talk like rendering or like, Oh, react renders, you know, create that Dom.
[243:51.16] But if you start from a position where rendering is not the top of the tree, the top of the graph, but the interactions atop the graph, it changes your perspective here.
[244:01.16] Right.
[244:02.16] So the easiest way I'm actually using the live view example here is, um, event to triggering the server.
[244:10.16] Right.
[244:11.16] I mean, even the higher level, I guess you could say is you, if you literally just captured the click event and then serialize that straight across.
[244:18.16] And then like had a bubble on the, like a Dom on the server, that would be even further.
[244:22.16] But I think live view just basically turns events into RPC calls.
[244:27.16] Like it is, don't get me wrong.
[244:29.16] I know it's a web socket.
[244:30.16] I'm just saying it's a named event.
[244:33.16] So like a named function that you're saying, do the dick decrement, do the increment.
[244:39.16] Right.
[244:40.16] Um, so, you know, inside your live view, this is live UGS.
[244:46.16] For example, you can see what it is, update your state and then have it render on the server and send back the diff.
[244:53.16] Right.
[244:54.16] This is how live view works.
[244:56.16] It's the most basic thing.
[244:58.16] Um, a couple of things here is I, it probably handles stuff at a component level.
[245:04.16] Do you know what I mean?
[245:05.16] Like you set the state, it re-renders the live view or we, it calculates the diff, but it's not using signals here.
[245:11.16] So there's no granularity in terms of how state updates.
[245:14.16] It literally goes, okay, I need to recalculate my thing, do the diff and figure out what I need to send across the wire.
[245:20.16] So maybe that's the first potential where we, um, could do better maybe.
[245:26.16] Right.
[245:27.16] My first thought is to have the event always execute.
[245:30.16] Okay.
[245:31.16] Yeah.
[245:32.16] So, but okay.
[245:35.16] So actually that's not where I see first thought go here.
[245:37.16] My first thought actually is, is to have the event always execute on the client.
[245:40.16] And actually, you know what, I'll save this.
[245:41.16] I'll put this in the chat so you guys can see this.
[245:43.16] Okay.
[245:44.16] So originally it was route level.
[245:45.16] I think they have per component handler.
[245:46.16] Yeah.
[245:47.16] I want to, I'm, I started thinking like, what can we do better?
[245:50.16] Right.
[245:51.16] Right.
[245:52.16] The real one.
[245:53.16] Fair enough.
[245:54.16] So I was like, first problem that we saw when we were doing our architecture, um, is that,
[246:08.16] like, is that it's hard to do the client side stuff.
[246:11.16] It's a separate model.
[246:12.16] So I was like, what if.
[246:14.16] We have the events always execute on the client and be interceptable with JS code.
[246:19.16] So I'm thinking kind of like quick, you know, where the event handler is the island.
[246:24.16] It's like the, it's the, it's, it's the, it's funny that I said like quick, but I use the term
[246:29.16] Island, but that's what I wanted to think.
[246:30.16] Think of the event handlers as the JS islands on a server rendered page, not the based on render
[246:36.16] code, but the event handler is the island and picture in that event handler.
[246:40.16] You could, um, basically set signals.
[246:44.16] Right.
[246:48.16] But that closure of, over the signal setter or read could be something that could be serialized.
[246:53.16] You know?
[246:54.16] So I started thinking like quick is it, would there be any benefit to this?
[246:58.16] Right.
[246:59.16] To being able to like run arbitrary JavaScript code in the client and have it trigger signals,
[247:05.16] essentially that would then update on the server.
[247:08.16] So I'm just kind of thinking kind of live view, except the, instead of the events being the, the, the transport it's signals.
[247:23.16] Would there be any benefit to this?
[247:25.16] But only if you could also do client only things, right?
[247:30.16] Like you're in the event handler.
[247:31.16] You know, why bring that to the client?
[247:33.16] Unless you could do, if you're just going to go to the server directly anyways.
[247:37.16] So I think you, you start going, maybe we need server and client signals.
[247:49.16] So picture if you had an event and you could like basically have two different types of signals.
[247:54.16] I mean, this is just hypothetical.
[247:56.16] Then you could set off a chain of events that only happen in the browser declaratively and a chain of events that's only happens on the server as well.
[248:04.16] Declaratively like a shared universal model.
[248:06.16] Okay.
[248:07.16] Okay.
[248:08.16] Um, does that work?
[248:10.16] Right.
[248:11.16] You could like change the selected state, which could directly update part of the DOM, but switching a visibility of a toggle could go to the server and render the whole new section.
[248:19.16] But there are two challenges to this.
[248:22.16] First of all, how do you render something on the server when there is state only the client knows about?
[248:28.16] And how do you isolate it from the client side to know it's responsible for render?
[248:32.16] We end up in a use client land.
[248:34.16] I think you end up basically with something that's server component, like saying like, this is part that's client responsible.
[248:41.16] Um, that's too muddled for where I want to go.
[248:44.16] So let's consider alternatives, right?
[248:46.16] Basically, I understand we could have like traditional ball, I'd say like reactive signals of like blocks in this model.
[248:55.16] So you could basically have server components that do signal based updates and then have interactive things that do client based updates.
[249:03.16] But I want, I want to do more purist.
[249:06.16] I want to live in a world where a use client doesn't exist.
[249:08.16] So let's not go there right away.
[249:10.16] What if all signal rights trigger propagation on the client and server?
[249:13.16] If the execution never makes it to the server, a server based derivation, then we know that the server doesn't have to respond with anything as the client can handle it all.
[249:21.16] So an example of this is if you updated a value and it literally went straight to a CSS class from like the propagation, like all the effect is just render this new class.
[249:37.16] It doesn't need to go to the server.
[249:39.16] So the question is, how do you make this classification of what is a server derivation?
[249:45.16] It starts with the premise that all new element render only happens on the server.
[249:49.16] Okay.
[249:50.16] Let's pretend that JSX only exists on the server.
[249:54.16] This isn't a solution for optimistic updates.
[249:56.16] Like, you know, that might be use client.
[249:58.16] We'll get there later, but anything that would lead to rendering new JSX would be on the server.
[250:05.16] So like a for component or show any place where you actually have a conditional that would cause structural changes would always go to the server.
[250:13.16] Anything with async data fetching always go to the server.
[250:16.16] So in this world, the reactivity graph would need to be completely serializable and both sides would have stable IDs.
[250:22.16] Then reactivity could synchronously propagate on the client as far as it could until it hit an async derivation.
[250:27.16] Right on the client, these scheduled syncs, just like effects, they're scheduled, basically just like effects.
[250:35.16] So we can send them all batch together.
[250:37.16] So if you do an update and it hits a bunch of server stuff, you can just basically send all the stuff on a single go across, you know, these web sockets or whatever.
[250:48.16] And we'd serialize up that part of the graph and send a request to the server to update its values to continue the rest of the propagation.
[250:58.16] So yeah, basically effects that directly render the DOM could live on the client and anything that would actually like render them.
[251:09.16] I mean, update values like attribute setting like you.
[251:13.16] I mean, this distinction is actually very noticeable.
[251:16.16] I'm going to delete this for now and solid.
[251:18.16] You can actually see the difference between, say, an insert.
[251:23.16] And when I go, let's think something, let's go title equals.
[251:30.16] It could be class here, but let's make it count just for fun.
[251:34.16] You can actually see that this is a different class of update than this is.
[251:40.16] I'm saying like something like this.
[251:43.16] I mean, this is the worst case scenario where it's text being directly put in would go to the server where something like this could actually stay completely in the client if we wanted to.
[251:53.16] It might be better for sticks to identify this case so that you could tell that this is just a value and not JSX.
[251:59.16] It could also stay in the client because like if I like this is silly right now, but if in solid, if I change this to text content equals count.
[252:08.16] Um, what you'll see is that it won't do an insert.
[252:11.16] It will actually know to, um, essentially, uh, set the text on the data node.
[252:20.16] Um, just, just a side, I'm just, this is completely hypothetical, but I just wanted to kind of put it out there that in this kind of world.
[252:29.16] Um, it's, it's possible that things that update existing DOM could never need to go to the server, like updating classes and things that required structural changes, like rendering new elements could go to the server.
[252:41.16] It wouldn't be an increased payload, but it might be fine because on any given change, you're not going to end up serializing the whole graph, only parts of it.
[252:54.16] And then the server gets the updated graph and then it finished the propagation and sends its values back.
[253:00.16] So this, this game again, it's, it's not, it's kind of funny.
[253:04.16] It's like ASP.NET, which is a terrible thing to be fair.
[253:08.16] But in, in, in, in, in back in the day, we used to serialize up stuff, do part of the work on the server to new client and do this handoff back and forth.
[253:16.16] My question is, is there a world where this handoff, if it were fine grained, could be efficient enough that we don't have the old, like giant view state problem.
[253:25.16] The problem with ASP.NET is you'd send all the freaking data and then send all the data back.
[253:29.16] but what if we, we could split it up to only the parts of the graph that actually updated.
[253:34.16] Um, then we could actually get past the, that old wall.
[253:39.16] And let's see an interesting side effect of thinking about this is maybe all effects would live only in the client, right?
[253:45.16] This is how, you know, if, if you can propagate all the way down to the effect, then, um, you know, you don't need to go down to the server.
[253:54.16] Okay.
[253:55.16] And I started thinking about compilation and this is why I got to doing it.
[254:02.16] Cause I, I, this doesn't matter a ton.
[254:04.16] I was basically the code that I generated here is my proposal is identical to the code that I generated for resume ability, except it's even less.
[254:14.16] I realized that in this thing, it's very similar of like doing this kind of scope read thing.
[254:19.16] Don't worry too much about it.
[254:20.16] If you haven't read my resume ability without serialization, um, idea.
[254:24.16] Um, this probably isn't that important, but I, what I realized is that.
[254:29.16] We could basically do something similar to quicks, um, compilation, but because we're assuming that all the renderings happening on the server, it could be even smaller on the server.
[254:42.16] Basically the thought is that all signals are basically isomorphic isomorphic or server only.
[254:50.16] Um, there's no client only signal in this kind of mentality.
[254:55.16] So the, the reason it's isomorphic is we, we would render the signal originally on the server and write it to some kind of scope that could be then registered and read essentially from, from these scopes.
[255:09.16] So you can grab the Dom node, grab the signal and like know to insert it, or, you know, do this and do this.
[255:15.16] Um, if you, if you knew, like in this case, I actually show it all happening on the client.
[255:23.16] Once you register these events, this reads from a single and increments the ball value that it could propagate through.
[255:30.16] Cause this would have been set up as like, basically cause you serialize the graph at an initial render and have all the dependencies.
[255:37.16] You have this living memory version of the signals in the serialized data.
[255:41.16] And then essentially you just have to inject the scope on these event handlers.
[255:46.16] Um, essentially.
[255:47.16] So it's like, it's, it's hard for me to explain to anyone, but this is the way quick Marco with essentially work.
[255:55.16] And we technically, um, it's, it's kind of basically like quick, but smaller.
[256:04.16] Yeah.
[256:05.16] Don't get me wrong.
[256:06.16] I think there would have, there is a potential that the server signals would have to have some kind of effect.
[256:18.16] I'm just meant from like a render rendering sample.
[256:20.16] Maybe the server would need like its own category.
[256:22.16] There's like use effect and use render effect, which are very clearly client.
[256:27.16] And then there could be like use server effect or something.
[256:29.16] Right.
[256:30.16] There's, there, there is probably a use case for writing out on the server side.
[256:35.16] I just, for the sake of the case of rendering, which is what I'm focused on.
[256:38.16] I was just like, let's just pretend that these kinds of effects are client only.
[256:43.16] Um, this, this is half is from the bill.
[256:48.16] Uh, basically this component can only ever run on the server and we'll never rerun.
[256:56.16] Like essentially we run this once on the server serialized stuff.
[257:00.16] And the only thing that we ended up doing is registering effects and events, right?
[257:03.16] There's no action.
[257:04.16] The client code does not include the ability to actually re render this component, which is fine because we registered the events in that.
[257:11.16] It still has the ability to fine grained update just the count of this text node without going to the server.
[257:16.16] Um, because it registered the events, but in that it is incapable of actually rendering it.
[257:21.16] And while this looks like it's large, this would min zip down to nothing.
[257:24.16] Um, and like, yeah, this is, this is super small, optimal code.
[257:30.16] Um, so what if you need to do something, you know, like maybe show when like some kind of toggle, right?
[257:37.16] Um, I, I kind of made this too, but the idea is like the expression from the show would be a server.
[257:47.16] Like if you know, show returns, create memo and solid, it could be like a server memo.
[257:52.16] So essentially the certain, the client only needs to know that it's reading from the scope and create the reactive, uh, dependency.
[257:58.16] It doesn't actually need any of the code to actually do the rendering.
[258:01.16] Uh, yeah, let me see.
[258:07.16] How did I do this?
[258:08.16] The signal will trigger on my relevant show, which would be market server only.
[258:11.16] This would grab the children also part of the server reactive graph and render them the value showing to it.
[258:16.16] Right.
[258:16.16] Cause I'm saying that this actually is only on the server as well.
[258:21.16] Um, yeah, I, I, there's gaps in what I'm explaining.
[258:31.16] I put a div in here to make this more visible.
[258:33.16] Like if there was no top level div, it's a, it's an interesting exercise of figuring how the components compose in order to continue to do this.
[258:39.16] But it's so similar to what we solved for resume ability that I'm pretty confident that something like this, this could work.
[258:45.16] Right.
[258:46.16] Um, obviously I'm, I haven't talked about server events.
[258:53.16] Um, which is, you know, it's possible that a database triggers stuff like live view style and pushes it through, you know, not live view sort of like, uh, you know, like, like when you have like real time database updates kind of polling, it's triggering out all the UIs.
[259:06.16] Um, nothing here, I think stopped that from working cause it's all connected.
[259:09.16] It just propagates it back along the socket.
[259:11.16] Optimistic updates.
[259:13.16] Optimistic updates.
[259:14.16] I don't know.
[259:15.16] I, I, it suggests a need for client islands.
[259:19.16] The, but I, I started kind of thinking if this, would there be benefits of this kind of architecture?
[259:28.16] Um, yes.
[259:29.16] Yeah.
[259:30.16] The server memo does run when the show condition changes.
[259:31.16] Yeah.
[259:32.16] All right.
[259:33.16] This is where web components shine.
[259:34.16] What?
[259:35.16] Web components don't do anything.
[259:36.16] I don't.
[259:37.16] Web components would actually probably completely get in the way of this.
[259:41.16] Okay.
[259:42.16] Anyway, let's move on.
[259:43.16] Um, so let's make sense.
[259:43.16] The double data serialization is caused by the need to client render.
[259:45.16] We use things like islands, the way of isolating that, but client routing basically reverses our decision.
[259:57.16] One approach is to try reverse data out of the HTML, but other might be to recognize that all interactive needs to involve client rendering.
[260:02.16] If the data clearly is on the server, then maybe there's a zone where we can know to skip it.
[260:04.16] That's been the problem.
[260:05.16] We don't know from an API standpoint.
[260:06.16] I'm not sure this gets us there either, but if there's potential.
[260:07.16] But if we turn the whole conversation to be about serializing the reactive graph, maybe there are some rules that can emerge.
[260:08.16] Maybe there are some rules that can emerge.
[260:09.16] So just kind of off the top of my head here.
[260:10.16] Signals are isomorphic and can live on both sides and triggered by either.
[260:11.16] Sure.
[260:12.16] Effects are generally client only, but maybe.
[260:13.16] Maybe there are some rules that can emerge.
[260:14.16] So just kind of off the top of my head here.
[260:15.16] Signals are isomorphic and can live on both sides and triggered by either.
[260:16.16] Sure.
[260:17.16] Effects are generally client only, but maybe there's a lot of different things.
[260:18.16] But if we turn the whole conversation to be about serializing the reactive graph, maybe there are some rules that can emerge.
[260:32.16] So just kind of off the top of my head here.
[260:34.16] Signals are isomorphic and can live on both sides and triggered by either.
[260:36.16] Sure.
[260:37.16] Effects are generally client only, but maybe the left side isn't like the tracking side in terms of split effects that I've been talking about.
[260:45.16] We need to know what the pole on both sides.
[260:47.16] Deride values can either be isomorphic or server only.
[260:50.16] Signals whose setter is never called from the client could be considered a server node.
[260:54.16] So this is where I'm sort of going.
[260:56.16] Like there's a heuristic here, right?
[260:58.16] Like you could basically say that a signal who never gets updated doesn't really need to go to the client unless something that's derived from the client.
[261:06.16] That's derived from it also depends on something from the client.
[261:09.16] So you start kind of coloring the nodes.
[261:11.16] Derive values that only read from server nodes don't need their sources serialized and could be considered server nodes.
[261:16.16] And so on.
[261:17.16] It is only the intersection of server and isomorphic nodes that require the server side of the graph to be serialized.
[261:23.16] So.
[261:24.16] Which is interesting because like presumably the sort of automatic optimization will be significant behavior changes over very subtle differences.
[261:36.16] So it's tricky.
[261:37.16] What what what what custom elements have no bearing on what I'm talking about here.
[261:49.16] Okay.
[261:50.16] As far as I can see, it's it's custom element life cycles actually probably get in the way of this being hyper granular.
[262:02.16] Right?
[262:03.16] I'm talking about code entry point literally being a specific entry.
[262:07.16] You don't want the rest of the Dom life cycles.
[262:12.16] You don't want connected callbacks.
[262:14.16] You don't want.
[262:16.16] Sorry, you're right.
[262:17.16] I'm getting hijacked.
[262:18.16] Just.
[262:18.16] Okay.
[262:23.16] So.
[262:24.16] So let's think of a couple of examples here.
[262:28.16] The first example, my favorite solid.
[262:32.16] Like, let me pick like a solid hacker news.
[262:41.16] What was it?
[262:42.16] Never remember.
[262:43.16] I have like my experimental app, but that's not the one I wanted to.
[262:46.16] Open.
[262:47.16] But it's fine.
[262:48.16] I'll just open this one.
[262:49.16] Let's consider this case.
[262:51.16] Where I'm, I'm getting at here is.
[262:56.16] Yeah, like you, the comment toggle would be completely isolated.
[263:15.16] from the data that renders it.
[263:17.16] Right?
[263:18.16] If you've ever seen the code for this.
[263:20.16] Um, let's see.
[263:21.16] Do I have solid start open here?
[263:23.16] Strello.
[263:24.16] I have strello open.
[263:25.16] Okay.
[263:26.16] No, it's all start.
[263:27.16] Have you ever seen the code to render?
[263:28.16] Uh, let's say solid hacker news.
[263:31.16] GitHub.
[263:32.16] Let me just, I don't know if I actually changed.
[263:38.16] changed.
[263:39.16] I can tell in two seconds if this one might not have the, yeah, this one does.
[263:46.16] Just go to solid start.
[263:47.16] Let me see.
[263:48.16] Okay.
[263:49.16] Solid start.
[263:50.16] Examples.
[263:51.16] Hacker news.
[263:54.16] Do, do, do, do, do, do.
[263:59.16] Source.
[264:00.16] Components.
[264:01.16] Okay.
[264:02.16] If you've ever seen this toggle component, this is separated because it was for islands.
[264:08.16] The, the logic for the state of the toggle is completely independent.
[264:12.16] Like you don't see the data here that, that like is rendering the list.
[264:17.16] It just gets passed through as props dot children.
[264:19.16] Each one wraps, but the actual content is in the comment component and the comment component just gets wrapped by this toggle.
[264:26.16] So it projects through essentially because there's no connectivity in this kind of use case.
[264:40.16] Then there's no need to go to the server for the server to serialize the data because it could basically tell from this that the async source never intersects with a client source.
[264:55.16] There's a wrapper there in the view, but they never intersect.
[264:59.16] So you don't have to serialize it.
[265:00.16] And the only thing that actually gets set or in the view is.
[265:05.16] Well, we can see it right here in the toggle is on click set open right here, which means that this, this would need to be serialized, but the main content of the page.
[265:21.16] So in a sense, like resumability, we actually not resumability, resumability comes back when you add client routing.
[265:33.16] But generally speaking, we know that we, because we know like in an MPA kind of set up or resumability when you use it with an MPA that we're never going to client render the page.
[265:44.16] We know that it's safe that we don't actually need this other data because there's no intersection of data.
[265:48.16] So the funny thing about this example, though, is right now this toggle open sets a class.
[265:56.16] And if we're just setting a class, this can be done completely on the client.
[266:02.16] So if this was a show component and it was hiding the component, this architecture would actually go back to the server and re-render those specific comments back and forth, which is funny because with server components, you always serialize up front.
[266:21.16] You know the props, so you would never go back to the server, you'd render all the comments out front, even the hidden ones.
[266:28.16] And then you just toggle this approach.
[266:31.16] Which if you actually were not sending all the information up front, it would toggle and actually go back to the server.
[266:37.16] But with a class list, it could stay client side.
[266:39.16] The reason I'm showing this distinction is it's important to understand that this mechanism
[266:44.16] can both accomplish client-only interaction natively through declarative, unlike LiveView, and also do what LiveView would typically do, which would be, you know, that.
[267:00.16] Don't get me wrong, LiveView has a way to set classes without going to the server.
[267:03.16] I'm saying it's not part of the declarative data model.
[267:05.16] So this scales, which is the difference on the client.
[267:09.16] Another thing, consider a scenario where we're using client to format some server data, say a join data on a user profile.
[267:19.16] If it is changing the data format that appears in the text node, so let's pretend you just want to change the, like, date format.
[267:24.16] That means the user would need to be serialized because it's an intersection between the user's data, like when they joined, and a toggle signal on the client that says change date format.
[267:35.16] Right, so we need to serialize the user at that point because we're morphing its data on the client so there's an intersection.
[267:44.16] If the change instead was to change the visible arrangement of the profile, then it would go back to the server to render the new profile.
[267:51.16] It might not end up serializing the user in this case because the intersection point wouldn't be here.
[268:05.16] It would be something that would need to render it.
[268:07.16] I'm 50/50 right now on if in all cases this would be the case.
[268:12.16] I use both of these examples because they're around ephemeral state that isn't persisted in the database.
[268:17.16] In cases where it would be persisted, which is pretty common, then it would likely be you doing something more like an action where you trigger async data refetching rather than setting the signal with a value.
[268:26.16] Which means we know that it was always on the server anyways.
[268:29.16] Optimistic updates are probably the best example I can think where server derived values meet ephemeral client state.
[268:34.16] In those cases, I don't think you could ever save on serialization because you need to have the list to think of the strella board.
[268:42.16] If you're showing the strella board and you're showing the optimist updates, you need the data in the client in order to know where to inject it from a stateful standpoint.
[268:52.16] Obviously, you can do a manual DOM upgrade, but I'm trying to avoid the live use solution.
[269:01.16] It's not sufficient from a declarative standpoint.
[269:04.16] So I do think serialization is necessary in parts of the UI where you are doing actual work on this data ephemeral.
[269:14.16] Just a side note.
[269:15.16] But what's interesting is I think this could work automatically.
[269:18.16] Okay.
[269:19.16] Could this be an improvement over diff being over the wire?
[269:22.16] I guess back to the real question.
[269:23.16] Does this actually potentially do something better than say live view?
[269:26.16] There's a lot of complexity here.
[269:27.16] I think the most interesting prospect isn't that the potential to do fine or green updates,
[269:30.16] but that certain updates could stay on the client automatically.
[269:33.16] The JS output would be slightly larger and the serialization potentially, but maybe there's a path which blends the benefit of a single model between client and server.
[269:40.16] Not two side by side, but the same model.
[269:42.16] It's an interesting areas that live view find difficult are still tricky here, but it seems like it could be much better at bridging the gap.
[269:48.16] That being said, it does suffer from serialization boundary concerns like quick, except it's only the event and the effects that are special.
[269:54.16] I think that alone might lower the friction.
[269:56.16] Security might be a concern too if serialization is so granular.
[269:59.16] The key to this really comes down to the understanding what can be determined at compile time and not.
[270:04.16] You want to color the graph, so to speak, if you, if that can lead to savings and still allow the events in the browser, then you have makings for a unified model.
[270:11.16] Of course, you need to persistent server web socket connection too.
[270:14.16] So that wouldn't need to be a pretty specific architecture, but I can see world where this is where things could go anyways.
[270:21.16] Sorry, just to bring brain dump.
[270:23.16] Um, but the, this is, uh, the, I could see a world where we took something that was similar, as I said, to quicks compilation and isolation and applied it to a server stateful server world.
[270:42.16] To actually get the benefits of quick and never send the stuff to the client.
[270:52.16] I think that's one of the, the, and that will solve the double data, double HTML problem.
[270:58.16] It's it could actually solve the whole thing.
[271:02.16] It's also fricking complicated.
[271:06.16] It's you, you basically have to do all the work that's required for something like quick.
[271:10.16] Plus yeah.
[271:12.16] I mean, this is probably the most ambitious, crazy idea I could think of.
[271:16.16] So now it's out there in the ether.
[271:18.16] People can think about that.
[271:20.16] I don't get why people are talking about web components here.
[271:28.16] It's almost like when people were like, Oh yeah.
[271:30.16] Web components.
[271:30.16] It's like web components are barely passable as islands.
[271:36.16] Like, and we're talking about stuff.
[271:38.16] Like, it's interesting.
[271:42.16] If you use the fact that they're an encoding for DOM elements, I guess that's interesting.
[271:50.16] But the fact that they require JS is awkward.
[271:54.16] It feels like you could create your own custom encoding onto DOM elements, script tags,
[271:58.16] templating comment nodes, and you just be more efficient and require less JavaScript.
[272:04.16] So it's like very confusing how you guys have web components be like anything.
[272:10.16] Yeah.
[272:11.16] Yeah.
[272:12.16] You know about the potential here.
[272:16.16] Yeah.
[272:17.16] Yeah.
[272:18.16] You've already implemented it with web components.
[272:20.16] Yeah.
[272:21.16] That's the solution.
[272:23.16] Funny.
[272:24.16] This is sort of Marco six thing.
[272:28.16] Yeah.
[272:29.16] I mean, this is, this is, I mean, Marco six and quicker in this kind of zone.
[272:39.16] Marco six was basically, you can view it almost as like quick, but fixing the awkwardness around
[272:45.16] the DX.
[272:46.16] They wanted to use the compiler just a bit further so that like dollar signs weren't necessary anymore.
[272:50.16] That's, that's like Marco in a nutshell.
[272:53.16] Like what if we can solve the same thing similar to quick, but without the dollar signs?
[272:58.16] Um, the problem is once you add back client side routing, it's not solved.
[273:03.16] You know, none of this actually solves your client side routing.
[273:07.16] And the only way I can, when I saw live here and I think about the only way you can really solve for client
[273:13.16] side routing in these scenarios is no a hundred percent that you're never going to render the thing
[273:19.16] on the client again, which, you know, get tuned to server component land.
[273:22.16] But the problem is you, sure.
[273:24.16] You can isolate the server components as being server only.
[273:27.16] Whatever.
[273:28.16] But then the client components, you actually don't want to ship all of their code either.
[273:32.16] Which is makes it really weird to have this arbitrary distinction.
[273:35.16] Cause they're not client components anymore.
[273:36.16] They're like mostly server components.
[273:38.16] So you have server components and mostly server components.
[273:41.16] It's, it's, it's a very weird.
[273:44.16] Split.
[273:45.16] Split.
[273:46.16] And, um, it's very particular.
[273:49.16] So I, I mean, I mean, this is a very difficult problem.
[273:55.16] So it's like one of those things where it's like quick really wants to automate it.
[273:59.16] So you don't have to think about it, which I think is really admirable goal, but they can't solve this problem.
[274:04.16] I don't think funnily enough staple server.
[274:08.16] I actually think does solve the other half of the equation.
[274:12.16] So in theory, if you put the two pieces together, you probably could have client routing plus.
[274:22.16] Resumable, whatever, minimal code and never take the hit again.
[274:31.16] I don't know.
[274:32.16] Staple servers might just be too prohibitive from a cost perspective.
[274:36.16] It's just, I hadn't thought along this lines.
[274:39.16] And I think it's important to explore the potential, or at least think about the potential of where we can do better.
[274:44.16] Cause sometimes the compromises work.
[274:48.16] Sometimes the compromises don't really work.
[274:52.16] Right.
[274:53.16] So like, yeah.
[274:56.16] Anyway, just, just food for thought.
[274:59.16] Okay.
[275:00.16] Okay.
[275:01.16] Let's, let's, let's, let's.
[275:02.16] Yeah.
[275:03.16] It is very complicated.
[275:06.16] Yeah.
[275:07.16] I, it's the reason web components trigger me.
[275:11.16] Is that like.
[275:16.16] Is that like.
[275:18.16] They often are fine, but have absolutely no bearing on any solution there.
[275:23.16] It's like, it's like one of those things where you're like.
[275:27.16] You can do something.
[275:29.16] Or you can do that something also with web components.
[275:33.16] And the benefit of web components is like, oh, this is a packaged app.
[275:36.16] It's isolatable.
[275:37.16] You know, you can.
[275:38.16] But the actual mechanism is never determined by the web components themselves.
[275:43.16] Except for even less.
[275:44.16] It's like very specific thing.
[275:45.16] They only provide like.
[275:46.16] Shadow DOM providing style isolation.
[275:51.16] So it's, it's, it's, it's very odd when people like, oh yeah, web components.
[275:54.16] And you're like, it's like, oh yeah.
[275:55.16] I rewrote my app in web components way faster than react.
[275:57.16] It's like.
[275:58.16] The web components didn't make it faster than react.
[276:04.16] Do you know what I mean?
[276:06.16] Like it literally.
[276:07.16] Is says nothing.
[276:09.16] So I think like.
[276:10.16] It's almost like, you know, I got a bit of a BS meter, so to speak when, or like, I don't like marketing a lot.
[276:19.16] Cause it's like inaccurate.
[276:20.16] I think when.
[276:21.16] I think web components trigger the BS meter on me, like repeatedly.
[276:25.16] Like it's, it's so hard when you see people like say stuff about web components and you're just like.
[276:30.16] Like the argument isn't even there.
[276:35.16] It's just like, how do you deal with so much, you know, logical thinking?
[276:41.16] It's hard.
[276:42.16] Anyway.
[276:51.16] Third case.
[276:52.16] So to take service to its logical stream, I have to build quickly compiler.
[276:56.16] I mean, I don't know.
[276:57.16] I'm just, I'm, I just want to know if there's something like in the live view spectrum of things.
[277:05.16] Because.
[277:06.16] No one's still showing me what the signals are doing on the server.
[277:09.16] I'm just like missing something there.
[277:11.16] And the only thing I can think of is solve problems that I've actually faced, which is around rendering hydration, you know, serialization.
[277:20.16] It occurred to me after seeing live view that they don't need to hydrate.
[277:26.16] And they don't need the double data and they have client-side routing.
[277:33.16] Literally nothing else has done that.
[277:37.16] There is not a single other architecture that has actually hit the trifecta.
[277:43.16] the trifecta.
[277:44.16] The cost is extreme though.
[277:45.16] Right.
[277:51.16] And they have other things that we take for granted that they don't do as well.
[277:57.16] But in terms of the, the, the problem we've been trying to solve for like the last, like six years, longer, 10 years, almost.
[278:06.16] It's the only solution that I've seen so far that actually checks all, like hits all of it.
[278:22.16] Well, that's the whole thing.
[278:23.16] Like setting, if it's something happens synchronously, like it's like a, like it's, it comes through a flow, then you can collect it the same way we do batching of effects.
[278:34.16] But yes, if there's async going on here, this is why signals don't suit going over the wire, so to speak, right?
[278:41.16] You, the async is outside the system and then it gets consolidated coming in.
[278:50.16] Async setters is like, async getters is something that, you know, I've considered async setters as a whole other concern or problem that's way out of the scope.
[278:59.16] Yes, vanilla JS is faster than React.
[279:09.16] That is, that is, that is pretty much the conclusion you can, can, can, can come to.
[279:16.16] The thing is, um, is vanilla JS as manageable as react?
[279:26.16] Do you know what I mean?
[279:27.16] Like coordinatable, how does it scale?
[279:31.16] I mean, you'd probably use a framework, maybe, maybe use something like lit.
[279:37.16] And then is lit faster than react?
[279:41.16] And you could also probably say yes.
[279:45.16] But the question then is, is lit faster than solid?
[279:49.16] And you can probably say no.
[279:50.16] Like that's what the question is.
[279:52.16] It's not web components.
[279:53.16] It's whether lit is faster than solid or slower than or faster than react or whatever.
[279:58.16] Do you know what I mean?
[279:59.16] I want an MPA with sprinkling the islands of JavaScript.
[280:11.16] Yeah.
[280:12.16] The question if, if go, I think Astro is amazing and people should just go use it all day long.
[280:18.16] I'm the question is I started this, I'm building apps.
[280:21.16] I'm thinking about apps.
[280:22.16] What if you could build an app typical way, almost like the way you build with react today.
[280:27.16] And the output was essentially your MPA with client side routing with sprinkled JS.
[280:33.16] You didn't have to use clients or say this, the client component to do that.
[280:36.16] You just write the fricking app.
[280:37.16] And what you get is exactly that.
[280:40.16] That's what we're getting to with this stuff.
[280:43.16] We, we, we literally build these crazy frameworks so we can output jQuery.
[280:48.16] Like, I mean, now that jQuery is built into the browser, that is.
[280:53.16] I don't think so.
[280:59.16] I think statefulness of the server is the key fundamental separating point.
[281:04.16] I don't think there's any similarity between these two.
[281:10.16] Statefulness of the server is like a non-start.
[281:16.16] Purcell sells serverless.
[281:19.16] Like, yeah, I, I don't know.
[281:22.16] The, the, the problem is like, it's why I'm talking about this, right?
[281:33.16] Once you add client side routing to quick, for example, then it takes the huge hit, right?
[281:39.16] We all do.
[281:40.16] This is why this is interesting.
[281:41.16] I, I, I, I, there is a solution that can solve this other quick.
[281:46.16] Otherwise is basically the same as every other single page app framework.
[281:49.16] Other than it hydrates a little bit faster.
[281:51.16] Right.
[281:52.16] We.
[281:53.16] Stateful serverless should be a thing.
[281:58.16] Stateful serverless should be a thing.
[281:59.16] Yeah.
[282:00.16] If it's cost, like, yeah.
[282:02.16] Yeah.
[282:03.16] Yes.
[282:04.16] Exactly.
[282:05.16] Okay.
[282:06.16] Let's get to this week in JavaScript.
[282:07.16] I'm going to throw up my head for a minute.
[282:09.16] And then we're going to switch gears.
[282:10.16] All right.
[282:10.16] Thank you all for still being here.
[282:10.16] It's been a, it's been a stream.
[282:10.16] All right.
[282:10.16] All right.
[282:10.16] just getting everything set up.
[282:11.16] Just give me two seconds.
[282:12.16] All right.
[282:13.16] Just getting everything set up.
[282:13.16] Just give me two seconds.
[282:13.16] All right.
[282:14.16] All right.
[282:15.16] All right.
[282:16.16] Just getting everything set up.
[282:17.16] Just give me two seconds.
[282:20.16] All right.
[282:21.16] All right.
[282:22.16] Just getting everything set up.
[282:22.16] Just give me two seconds.
[282:27.16] All right.
[282:32.16] All right.
[282:37.16] All right.
[282:38.16] Just getting everything set up.
[282:39.16] Just give me two seconds.
[282:40.16] All right.
[282:42.16] Oh, holy shit.
[282:57.16] I'm going to bookmark that.
[282:58.16] Sorry.
[282:59.16] Oh, that's a, that's a big win.
[283:06.16] I'm actually going to retweet this.
[283:08.16] Sorry.
[283:09.16] I didn't see that.
[283:10.16] Uh, give me two seconds.
[283:11.16] I'll do that after the stream, but.
[283:16.16] Okay.
[283:17.16] So go to my profile.
[283:20.16] Okay.
[283:21.16] Let's get this going.
[283:22.16] And then the last one I need is solid.
[283:26.16] All right.
[283:37.16] Okay.
[283:38.16] When was our last stream?
[283:39.16] Oh, wow.
[283:40.16] It was September 26th.
[283:41.16] Was it?
[283:42.16] No, that's when I wrote the article.
[283:43.16] I've streamed since then.
[283:44.16] I've streamed since then.
[283:45.16] It was October 9th.
[283:46.16] It's only a week ago.
[283:47.16] Roughly.
[283:48.16] Um, not nine to 11th.
[283:50.16] Yeah.
[283:51.16] There we go.
[283:52.16] Okay.
[283:53.16] Yeah.
[283:54.16] Okay.
[283:55.16] Yeah.
[283:56.16] There's not much on my personal.
[283:57.16] Let's go back.
[283:58.16] October 11th.
[283:59.16] October 11th.
[284:00.16] All right.
[284:02.16] Okay.
[284:03.16] And.
[284:04.16] October 11th.
[284:05.16] Yeah.
[284:06.16] Yeah.
[284:07.16] Sorry.
[284:08.16] I just, I just had a funny thought when I was looking at this because I didn't finish
[284:19.16] my thought on the web component stuff completely, but you know how there's that thing where people
[284:23.16] are like, let's add signals that will make things faster.
[284:28.16] Right.
[284:29.16] And I always go adding signals.
[284:31.16] Um, won't make things faster.
[284:33.16] It's the things you can remove when you add signals that make it faster.
[284:37.16] Um, the funniest thing about web components is like adding web components also doesn't make
[284:44.16] things faster.
[284:45.16] Right.
[284:46.16] In itself.
[284:47.16] It's, you could argue, um, you know, that the thing it removes, um, potentially is what makes
[284:55.16] it faster.
[284:56.16] But the, the funny thing about web components is also removing web components will always
[285:00.16] make something faster.
[285:02.16] Um, so like it's, it's, it's kind of funny thing.
[285:09.16] Like, yeah, I don't know.
[285:11.16] Maybe that thought needs a little bit more pointing out, but yeah, it's a room react that made it
[285:17.16] faster, but, and web components help you get there.
[285:20.16] get there. But also now that you're done, removing web components will also be even better. So it's like, it's, it's, it's, it's, it's kind of a funny thing. All right. All right, let's switch over to the view. Okay. I think we already talked about this. We talked about this. Okay, sorry.
[285:50.16] We talked about this. It's been a slow week. Okay, sweet. So yeah, we talked about use cache. Talked about. Yeah, we talked about all this stuff. Okay, so. All right.
[286:10.90] Okay, let's go with this week in JavaScript. It's my closest thing for a marker for Jesse gets around to, to doing the timestamps, which I'm incredibly thankful for should all give thanks to Jesse for the timestamps. They're amazing.
[286:28.90] But yeah, most of the stuff I want to talk about today is actually, we talked about the other stuff. I want to talk mostly about solid stuff. Yeah, it's gonna be, yeah, famous last words. Definitely.
[286:42.90] First of all, my beat comp talk is up. Talks all about serialization. Talks about the work we did with mostly Lexus. I say we, but the collective we, but Alexis did on serialization for solid and solid start with Sarah Val, how serialization is a key, which, you know, we can see from a little conversation we're talking about to the future.
[287:07.90] Um, yeah, it was an interesting talk. It was a lot of fun. Um, we've already mentioned it once before, but solid hack is, is in full flight right now. Um, important, um, shout out because we've been doing these, uh, uh, how should I put it, uh,
[287:31.58] bounties, I guess the best way to put it, and they can be claimed by anyone every Monday. We check and see if they've come in and we actually have our first, um, our first two winners. Um, uh,
[287:46.58] Brenly wrote a tutorial, which useful one, basically how to do off with earth, with clerk in solid start. So this, this could be interesting. People want to understand how to do off in solid start.
[287:59.58] Start. This is a concrete example using clerk and the clerk API. Um, so very cool. We, we, these kinds of how to guides are so valuable where we are in the community. And I'm pretty sure he picked up a tidy $500 USD for writing this guide. Um,
[288:18.58] yeah, very, very cool. Uh, and then Dev, um, who we've seen featured on the stream a bunch. Um,
[288:27.58] um, uh,
[288:32.58] uh,
[288:34.58] maybe new solid primitive, um, which is very cool, called solid events. I haven't looked at it yet. Um, maybe we'll have Dev on stream to talk about it. Um, but the idea is that events are different than signals. So we need events. Um, so we're going to look at it. Um, so we're going to look at it. Um, so we're going to look at it. Um, so we're going to look at it. Um, so we're going to look at it. Um, so we're going to look at it. Um, so we're going to look at it. Um, and so we're going to look at it. Um,
[288:40.58] maybe we'll have Dev on stream to talk about it. Um, but the idea is that events are different than signals. So we need events. So create event on, on event, emit event, emit event sends it. And I'm guessing, let's see here on message on increment.
[289:00.58] I see.
[289:03.58] Some people like really like the,
[289:05.58] it's got like RX vibes to it, but the idea is you, you basically set up an event emitter, but I'm gathering on the other side on increment.
[289:17.58] Met event on increment.
[289:20.58] Interesting.
[289:21.58] On message. Does this just keep on chaining?
[289:26.58] chaining. Okay, it keeps on chaining. So it's composable. Okay, so each of these helpers
[289:41.24] actually returns. Yeah, okay. Okay, so halt. Nice. Okay. Async. Like it.
[290:11.24] Okay. Okay, so this is how we get our signal at the end. So we consume it. We go here,
[290:27.04] give it a default value, wire in our event, and then wire our cleanup, I'm gathering.
[290:34.60] What are the three arguments? Or is this just a chaining syntax? So you can just like put
[290:49.10] them just put them on top of each other. Like, this is like pipe, essentially, like a stream
[290:54.60] where you just like this goes into this, which goes into this. It's rx behind the scenes. Yeah.
[291:03.40] Funny, I had a solid rx library way back, but implemented a bunch of operators. But I like
[291:08.12] this. This is much cleaner. There's no point using signals like using like react, like our
[291:12.46] reactive signals all the way along. You really only need them at the ends. Okay, async subject
[291:18.10] makes sense. Create subject store. More interesting. Okay. I like create projection. Okay.
[291:31.10] This is very, yeah, this is much more powerful than what I made. I can, this is well deserved
[291:40.14] at the prize. I think for a certain type of pattern that I usually don't associate myself
[291:44.44] with too much. I think this is incredibly powerful. It's interesting. I wonder if this
[291:52.78] becomes more go to like, there's stuff like X state, which people try and feed into solid,
[291:56.48] but this feels like it's more natural. Cause it's that next level out. Like I've never said
[292:01.92] that signals in X state. Like they, I think stuff like that fits together quite nicely, but there's
[292:06.94] something that's kind of like out there in the scope in terms of like orchestrating. I feel
[292:12.00] like this is a very natural fit with what we're doing to using optimistic API. Okay.
[292:24.62] interesting thing about this though, is this is, this does make it more directional again,
[292:45.60] I guess, which makes it back into like, let's put this into diffing territory. I'd have to look at
[292:51.64] this more, I'm just looking at the, the filter versus the direct mutation update, but it's
[293:00.06] interesting. Since it doesn't require iterating over the submissions, right? It's mapping over it.
[293:09.64] Okay. Okay. Yeah. Okay. Yeah. I'm hoping solid 2.0 addresses a lot of, a lot of these,
[293:28.06] huh? So yeah, this is the projection, but it's like a, a chain version of the projection. The, the,
[293:36.06] that that's, that's, that's, that's where I was getting at. Yeah. Yeah. I think create projection
[293:51.48] actually solves a lot of this, but it not completely. So I, I mean, props on this being a different way to arrange it.
[293:58.68] Yeah. This is really cool and it's what you're using with server signals. Okay. Yeah. We're going to have to have you come on the stream and talk about this stuff soon.
[294:20.10] talk about this stuff. Very, very cool dev. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Definitely.
[294:32.10] Yeah. Yeah. Yeah. You, you need timestamps for the mutations for the board. Uh, I'm, I mean, technically there's the has updated.
[294:45.10] Um, but yeah, this is like what you were talking about the other day when you were saying that, like, what if you just had separate functions? And I said, it's their inclusion. I, I don't think it, it's a, it's odd to think of it from a signals.
[294:59.10] Modeling perspective because of what can we run based on tracking, but it's not odd to think of it from an event standpoint where it's always going to go through the, the, the fixed chain.
[295:13.10] So yeah, that's very, very cool.
[295:20.10] I think that's the right place for stuff to sit. Like if, if you start with create projection and it's fine. And then you're like, nah, I can model this easier with some kind of like event transformation.
[295:31.10] It's like, that's when you're supposed to pick up RX. That's when you're supposed to like use the proper tool. It starts basic with signals. And then you go like, okay, I want retry logic. I want other stuff. So yeah, I think it, I think it fits very nicely. Okay.
[295:45.10] So yeah, solid hack again, just blasting on the stream. I'm sure you guys are all aware of this. There's lots of chances to, uh, to win lots of prizes.
[295:59.10] So yeah, those two are claimed, but we have more unclaimed challenges and yeah, there might be, I don't know if we're going to drop one more set of challenges before the end of the hackathon. I believe there's still 26 days left. So we definitely, definitely do keep on checking back.
[296:16.10] Okay. All right.
[296:21.10] Optimistic UI. I, I could do it really quick. I think we already showed this on stream a moment ago. The idea of optimistic UI is that while the server, it's basically the client gets ahead of the server.
[296:38.10] It, in, in, in this example here, the server, I can slow down. Yeah. I'm on 3g. I can move this card and then move this card again before the server has actually finished saving it.
[296:54.10] The idea is that, is that essentially we're being optimistic that the save will happen. If it fails, then.
[297:07.10] stuff will update as so, and we'll show errors and stuff. But the idea is you, you're hoping that, you know, for simple things like clicking a like button that it will, it will, uh, um,
[297:20.10] it will succeed and hoping. So it succeeds. You don't block the user from it, from continuing their activity. You just assume that it succeeded.
[297:29.10] So that's being optimistic, assuming that server won't fail.
[297:35.10] Yeah. I mean, I'm, I'm not, I'm not going to be picky. People can use web components, right? If you have a web component framework for solid and it looks pretty sweet.
[297:46.10] I'm, I'm not a judge on this. So like very well could, uh, could, could go to the top.
[297:52.10] Yeah, the idea. Yeah. It's that we call it optimistic though, because we're just, we're hoping that things succeed. Yeah.
[298:04.10] Mitigation for eventual subsistency. Yeah. Um, yeah. Get in on it.
[298:17.10] Devs just, web socket endpoints added docs or how to use web sockets and solid start. Also very cool.
[298:24.10] There's been a lot of really cool solid stuff recently. People showing that they can use V0 with Vercel because the similarity for the like static output of stuff between react and solid is so similar.
[298:35.10] You can make a couple changes to the code. And apparently people have been doing that. So very, very cool. That's solid for myself.
[298:46.10] I don't know. I actually had very much going on. I was too busy writing all those articles that we talked about. So I just told you, this one will be fast.
[298:56.10] Um, yeah, I honestly, I, unless there's something specifically that I was going to talk about.
[299:03.10] Um, yeah, yeah. There's shots again for solids. Yeah. Is cool. Yeah. We, we have that.
[299:11.10] I have some solid stuff. That's cool. I have some solid stuff too.
[299:15.10] I don't know. I should retreat this from the main account, but, uh, the us presidential election and Senate election is, is it runs on a platform called vote compass.
[299:26.10] That's actually built with solid JS. So all everyone who's going out to vote for the us, um, presidential election, um, will be using software built with solid.
[299:40.10] So very, very cool. So very, very cool to see used in such a widely used platform. Give vote compass a try.
[299:51.10] Very pretty cool. Mine's not working.
[299:57.10] Yeah. I mean, the, the biggest challenge you, I think you're kind of nailing something.
[300:11.10] One of the bigger prop challenge about this is stuff like Elixir has actually nailed down, you know, what kind of environment this needs to run on.
[300:24.10] So like, even if we figure out a mechanism that is completely optimal for the handoff between client and server.
[300:35.10] there like is no, the platform to run it.
[300:38.10] Right. I mean, I mean, this, this is the classic problem is I think the best way to actually solve these problems involves a single language model, which means JavaScript, almost like a shoe in you have to use JavaScript.
[300:53.10] But the serve, like we just need better server stuff in JavaScript, or we need to get other stuff in the browser as optimal as JavaScript.
[301:04.10] I'm fine with either or the only, the only, the only, the only challenge there, obviously is that wasm is not the answer.
[301:14.10] Like we need, we need it to be as we need it to be native like JavaScript, which means I'm sorry for all those other server languages.
[301:22.10] Like, like, like beams. Yeah, yeah, there's an acronym for something to do with the, with that platform, right?
[301:34.10] What's beam stamp Oregon? Like, what's the acronym?
[301:37.10] It's, it's like the under, it's, it's the underlying virtual machine, Erlang. Yes, yes, yes, yeah, yeah, yeah, yeah.
[301:54.10] Yeah, it's Erlang's VM, which is incredible, built for this, built for telecommunications, can power, it's an incredible piece of software.
[302:04.10] So just going, oh, we should make that in JavaScript is not realistic.
[302:08.10] On the other hand, solving these problems efficiently in our area, isn't really possible without anything but JavaScript.
[302:17.10] So like, there's this really painful conflict here, where the, like to get the best, the best experience from server handoff through client has to be JavaScript on both sides.
[302:29.10] But to get the best backend for doing highly concurrent work is not JavaScript. So what, what do you do?
[302:42.10] These seem like immovable walls.
[302:47.10] Okay, so it's not just.
[302:52.10] Okay.
[302:59.10] So Erlang has multiple VMs. Okay, good to know.
[303:03.10] This is the thing I, I have heard referenced many times. So there's.
[303:10.10] We put JavaScript on beam. Is that, that, that, I mean, there we go.
[303:14.10] Okay.
[303:20.10] I mean, people are, people are, or at least writing it in like the underlying VM, like some kind of wazzy or whatever, waz and whatever thing.
[303:29.10] Like there's incentive here because of the serverless platforms and for better runtimes, like, so I can see incentives to solving this problem.
[303:39.10] It seems like where we're at, it's way more likely that JavaScript gets good on the backend in some way before we're able to get these other languages into the browser.
[303:50.10] But it's just, yeah, it's, it's, it's, it's, it's just kind of the reality of things.
[303:54.10] I know that scares and upsets people to great end, but like, these are equally difficult problems to solve.
[304:04.10] Jam socket.
[304:07.10] Couldn't come up with a.
[304:11.10] Yeah.
[304:16.10] I think it's gotta be referenced to like Jamstack.
[304:19.10] Okay.
[304:20.10] Very cool.
[304:22.10] All right.
[304:28.10] Well.
[304:29.10] It was a short one.
[304:36.10] So there, I think I'm done.
[304:41.10] So until I guess next week, I'm probably, yeah, let's see 25th.
[304:51.10] Yeah.
[304:52.10] Next comps on the 24th.
[304:53.10] Yeah.
[304:54.10] So I'm, I'm, I'm probably, I can do the stream next week, I think.
[304:57.10] But yeah, Dev, we should talk, see when you can come on the stream.
[305:00.10] I'd love to pick your brain.
[305:01.10] I know you're still working on stuff, but I think you have some really interesting stuff to share.
[305:05.10] Other than that, everyone else, have a great weekend.
[305:10.10] Until next time.
