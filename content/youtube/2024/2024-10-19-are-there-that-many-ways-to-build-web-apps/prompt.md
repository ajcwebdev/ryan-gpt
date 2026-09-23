---
title: "ja4LIaxxUeA"
slug: "ja4LIaxxUeA"
duration: "5:05:15"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/ja4LIaxxUeA.m4a"
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
[00:00:03] All right. Hello, everyone. How are you doing today?
[00:00:10] You're right.
[00:00:12] I am late.
[00:00:15] Yeah.
[00:00:21] - -
[00:00:21] I wasn't sure I was going to do a stream today, but I got in one of those places where I was doing a lot of writing.
[00:00:30] and
[00:00:32] Just thinking in general. The last stream was, you know, quite a stream, I have to admit.
[00:00:39] But that one could have stayed with me for a few days, kind of thinking about it. It's, I think if we let it go, this web component conversation would carry on forever. And we got lots of other interesting stuff to talk about from my perspective.
[00:00:57] Um,
[00:00:59] I guess the most interesting
[00:01:01] thing.
[00:01:02] to me, like the kind of couple of revelations after the last stream was there was a comment about
[00:01:10] reporting
[00:01:11] performance issues to the browser teams. And I was like,
[00:01:16] I was like kind of
[00:01:18] like it seemed reasonable so that one would be more expensive than the other.
[00:01:22] So I was like, I don't know, I just didn't really think of like
[00:01:26] bugging them about that. And I thought of actually a good comparison in my mind. Can you picture
[00:01:33] And I mean, I don't know if this happens, but do people go to like the React GitHub?
[00:01:38] And then like report performance issues.  And I were like, I made this little thing here.  It's slower in React than it is in Svelte.
[00:01:46] Um,
[00:01:47] That's a bug. Do people do that? Like go on Angular and be like, you know, this thing done in solid is faster. It's a bug.
[00:01:58] Thank you.
[00:01:59] Right. It's interesting. I think performance as a source of bugs is one of those things that
[00:02:07] is
[00:02:09] tricky, right? I love when people report performance bugs to me because then I have a chance to fix  them. I'm not aware of them. I think a lot of times people actually doing the reporting are kind of like,
[00:02:20] is this a bug? Am I just doing something that's low?
[00:02:23] It's sort of like if there is no erroneous behavior, unless it's something that gets to like considerable extreme, most people will assume that performance is...
[00:02:33] the baseline, not
[00:02:35] a bug, so to speak.
[00:02:37] you
[00:02:38] It's just an interesting observation.
[00:02:41] Mmm.
[00:02:44] Thank you.
[00:02:46] Thank you.
[00:02:47] How are we doing so far?  People joining in here?
[00:02:55] Thank you.
[00:02:56] Yeah.
[00:02:57] Sorry, just getting a little couple things ready. I was working on solid start release and router release today pretty much right up to the wire. I did a release like five minutes before I started the stream.
[00:03:08] Thank you.
[00:03:10] You have to have a very deep knowledge of the framework to know if you should
[00:03:14] Report slow performance. Yeah, it's tricky. And to be fair,
[00:03:19] that level of depth
[00:03:22] I don't even think
[00:03:25] framework authors necessarily have on the
[00:03:29] on the browser side.  I would say like,
[00:03:31] People who implement the browser have that level of performance of knowledge.
[00:03:38] Thank you.
[00:03:41] Four of versus four let should be reported.  Yeah, yeah, yeah.
[00:03:46] Anyways, people come say hi in the chat. Sorry I was a little bit slow getting rolling today.
[00:03:53] Aye.
[00:03:58] Hey.
[00:04:01] Thank you.
[00:04:02] "Performance must be not just the worse than others, but atrocious, otherwise, well, whatever." Exactly.
[00:04:09] Ask AI. Yeah, it was just something I was thinking about because like, I was kind of put on the spot there and it was and it was true as like, they're like, why don't you report these things and it's like,
[00:04:21] If something does more or less, you kind of like do some amount of discretion on the platform. And everyone knows when you're being as like crazy about performance, you know, in benchmarks as we sometimes get to when we're working on these tools that.
[00:04:36] Thank you.
[00:04:37] Something can be, you know, 20, 30% slower when you do it like a billion times in a row, you know, in the hot path. And like,
[00:04:46] It's okay. I mean, I'm sure people would want to know to improve it.
[00:04:50] Potentially, but then it's also like, it's not really a bug. Like, yeah.
[00:04:57] I'm glad I'm streaming too.
[00:05:02] Do you have a link to that?
[00:05:06] Thank you.
[00:05:07] Thank you.
[00:05:08] you
[00:05:11] Okay.
[00:05:12] Bye.
[00:05:13] How much performance size difference is just the drop in the support?
[00:05:20] To be fair, the size
[00:05:24] aspect, I would say is not huge. It's shared zones. Things like spreads,
[00:05:30] you know, things like...
[00:05:35] Okay.
[00:05:36] dynamic elements.  There's a bunch in the compiler,  but I don't care about the compiler.  You know what I mean?  Like, I think that's why you use the compiler.  If the compiler is more complicated,  if the compiler has more...
[00:05:47] cases in it, like so be it. You do it so that you don't have to ship that code.
[00:05:53] Where else would this be? Event delegation.
[00:05:56] I mean, I like that just like disappears. But that's not again, like what what are we talking about?
[00:06:04] you know,
[00:06:06] Actual runtime code size is probably only maybe...
[00:06:11] 300...
[00:06:13] 400 bytes, like
[00:06:15] maybe half a kilobyte.
[00:06:16] I think it's a little less than that.
[00:06:19] Right.
[00:06:20] I mean, for libraries that are trying to ship four kilobyte bundles, half a kilobyte is a lot, but...
[00:06:30] In the grand scheme of things, it's not much.
[00:06:37] You've been out of the loop. What's going on solid lately? Solid hack. That's probably been the biggest thing that's been going on. I've been working away on a lot of prototypes, a lot of, you know, stabilizing solid start and whatnot. But the hackathon actually is probably...
[00:06:54] Let me just see if I can pull this up right now to hack.
[00:06:57] Solidjs.com and let me share my screen.
[00:07:01] Thank you.
[00:07:02] Thank you.
[00:07:03] -
[00:07:05] All right.
[00:07:06] Thank you.
[00:07:08] As you can see here, there's still almost 27 days to get your submissions in.
[00:07:16] So,
[00:07:18] There's 20,000 in prizes.  The main prizes are 15,000,  switch between the categories and challenges here.
[00:07:27] I guess it's 12,000 for the main prizes.  And then we have a whole bunch of these challenges that we do like on weekly basis for, you know, whoever fills them in.  We just add more of them in for the bounties for like 500 to 1,000.  We've had a few winners already.  Um,
[00:07:43] It's...
[00:07:45] We're using this as not only a way to award excellence,  but also admittedly as a way to help us fill  some of those missing pieces.  If there's something actually you're interested,  I think we might be a little bit tight on time.  We might be doing one more drop on Monday,
[00:08:00] I don't know if the
[00:08:01] I need to double check with David, but if there's anything missing the solid ecosystem that you kind of want,
[00:08:06] Um,
[00:08:07] This is a kind of nifty way to put a bounty on something.
[00:08:12] Thank you.
[00:08:13] I feel like the only way  web phones could be better performed is if they allowed you to ship  plus.js and I'm pretty sure they don't.  This is the...
[00:08:21] Other...
[00:08:23] Um...
[00:08:25] thing, right? I realized that on one side the performance thing, but the other thing I stepped away with, I'm not sure
[00:08:31] if people realize that web components like don't,
[00:08:34] Do anything.
[00:08:37] Like, um,
[00:08:40] Like, from like a framework standpoint, there are things they do, but...
[00:08:46] Like when someone says, oh, I moved my app from React to web components, they're not saying anything.  They're saying, I moved my app from React.
[00:08:58] react to something that I'm wrapping up in an extra container
[00:09:03] that doesn't really do anything. Do you know what I mean? Like it doesn't explain the architecture.  It doesn't explain like how the authoring is, how change progression works. It doesn't really explain
[00:09:14] anything.
[00:09:17] It's a lot of times when there's like that argument and people are like, oh, Microsoft did this. And it's like,
[00:09:21] and they got, you know, X improvement is like, OK, the good starting point for conversation.  But what did they actually do? Web components.
[00:09:29] are like a wrapper, you know what I mean? Like go and make a solid component,
[00:09:33] make your web component by putting a solid element. It's just
[00:09:37] You know, it's just an extra layer.
[00:09:41] it basically
[00:09:44] in itself does absolutely nothing to reduce JavaScript or do anything.  It's just it's just like a container.  So
[00:09:52] I, I, I, seeing these conversations, I think people don't get that. Um, like,
[00:09:57] If...
[00:09:58] And that's part of that conflict, because when people are like, oh, I'm
[00:10:02] I switched to web components.  They are doing that same comparative framework framework.
[00:10:07] or framework component thing that they're like, don't do that. Like it's,
[00:10:11] Because like
[00:10:13] What does that even mean? What the answer is, we switched
[00:10:18] to our in-house
[00:10:20] you know, library or we switch to using lit or something. That's, that's all it means. It's like,  and is lit faster than React in a lot of cases.
[00:10:28] Yeah, you know.
[00:10:30] So
[00:10:31] It just means they changed their framework and added
[00:10:36] some extra wrapper for infra-op because they thought that was important. But that wrapper itself has no impact on things.
[00:10:44] that
[00:10:45] Hey.
[00:10:47] Let me...
[00:10:48] pull this up on Twitch. I'm going to get Twitch going in my other window so I can  see what's going on, see any of those subs come in, you know.
[00:10:55] Um...
[00:10:58] Yeah, let me see here.
[00:11:01] What do you got here for me?
[00:11:06] - I'm excited to be finally getting a customer  to select on the web.  However, it's one day I'm not sure.  I'd like to hear your thoughts.
[00:11:15] Thank you.
[00:11:20] Thank you.
[00:11:23] But there's some clone node conversation here.
[00:11:25] Thank you.
[00:11:26] *laughs*
[00:11:28] It means that it's a copy for a tree and cleaning it out.
[00:11:32] Oh, this is talking about the fact that CloneNode doesn't actually copy anything, only like the
[00:11:37] the actual app.
[00:11:39] Tributes?
[00:11:40] Yeah, I remember this when I was working on web components.
[00:11:45] All the random JS properties you add to an element when you clone it aren't there.
[00:11:51] Um...
[00:11:52] Event listeners, yeah.
[00:11:56] Thank you.
[00:11:56] I mean, it's kind of fine because that's how everything else works.
[00:12:00] Thank you.
[00:12:01] But...
[00:12:03] Yeah.
[00:12:04] The DOM is a funny and tricky
[00:12:07] place to be in general.
[00:12:09] Um...
[00:12:12] Yeah.
[00:12:14] Thank you.
[00:12:15] Thank you.
[00:12:18] Thank you.
[00:12:19] Thank you.
[00:12:20] Thank you.
[00:12:23] Thank you.
[00:12:24] If the broadcasters are short of the rows, then I'd be able to watch them in translation in my native links thanks to Kubernetes and Yandex browse. Interesting.
[00:12:32] Hmm.
[00:12:33] Yeah, I didn't realize that time impacted that.
[00:12:36] I can do, but I don't know.
[00:12:40] Thank you.
[00:12:43] Oh nice!
[00:12:47] The successful one has been solid all weeks.  Big fan of this pre-fetched on link hover.  Yeah.  And we'd made a big improvement to link hovering just the other day.  We noticed on iOS that on the iOS, of course, you know, everything's a little different that...
[00:13:03] that
[00:13:07] that basically it was like slowing down navigation by like hundreds of milliseconds and apparently on iOS.
[00:13:13] on
[00:13:15] I don't even think it matters which browser you use, but let's say Safari.  If you go to click on a link and it has a mouse over on that element,  it basically runs some sort of animation or does some sort of thing.  It actually delays the click.  You click it and then it takes 200 milliseconds for the route to change.  So we looked at SvelteKit and got the answer there.  And they use a mouse mouse.
[00:13:42] *sucks*
[00:13:43] mouse move event that they cover the whole screen they do it. I had to change my approach so it like  it fires more than it needs to. I did a little bit of optimization there but it's actually less code  and it's faster so
[00:13:54] If you get the version 0.14.9 or 10, it's the latest I've released today, you'll have even better preload characteristics.
[00:14:04] Oh, hey, how's it going? Yeah.
[00:14:08] Yeah, it doesn't matter compared to the app code, right? This is the thing. If you write a React app and then even come back five years later and write the React app again, like, you know, you've learned some things. Hopefully you do better. It depends on the situation. Sometimes that can, you know,
[00:14:22] get slower because you pull in new requirements and things change and you know it's a mess but  generally speaking i've i've heard a lot of success cases where people like are like look i took my  react app and migrated to solid much faster is and i'm like how much of that is because you just  rewrote it again
[00:14:39] Thank you.
[00:14:41] Did anyone claim the UI? I mean, I don't think so. There's only been two prizes claimed so far.
[00:14:46] Docs
[00:14:50] I want better solid element.
[00:14:53] Better web components. Let's do it.
[00:14:56] Thank you.
[00:14:56] Thank you.
[00:14:58] I'm interested to hear more about this. People keep on telling me we do have good options like Corvu and Cobalt. Yeah.
[00:15:04] And I know ARK supports us and
[00:15:08] I haven't
[00:15:09] I don't know enough about like boneless versus headless, skinless, whatever they're doing these days in this, but I feel like we have a lot of
[00:15:17] blank lists things you can do with solid.
[00:15:22] Yeah, so we're done with the web components.
[00:15:24] You put the foot down, Benton.
[00:15:26] Thank you.
[00:15:28] Thank you.
[00:15:31] *sniff*
[00:15:35] Yeah, yeah. But only on certain cases. That was a pain. One solid 2.0. Now, oh.
[00:15:42] Not yet.
[00:15:44] It's my problem.
[00:15:47] I start working on ideas and I start progressing and then I got to go fix bugs.  And again, this loop where...
[00:15:53] There's only this short period of time that I get into implementing on 2.0. I need to break the cycle. There's just so much to maintain and at the same time, there's so much to think about. So it's tricky.
[00:16:04] Thank you.
[00:16:06] Thank you.
[00:16:07] Thank you.
[00:16:09] Yeah, there was an article Theo did on stream the other day, and I learned more about what people were talking about in UI libraries there than I had in like five years.
[00:16:18] I had no clue what anyone was talking about.
[00:16:21] Thank you.
[00:16:22] Thank you.
[00:16:22] Thank you.
[00:16:23] one solid 3.0.
[00:16:26] Oh, now you guys are just shooting shots back.
[00:16:33] Bye.
[00:16:34] Thank you.
[00:16:37] Okay.
[00:16:41] *sniffles*
[00:16:42] Hey, Dev. How's it going?
[00:16:46] Thank you.
[00:16:51] Yeah, I mean the TC39 thing is interesting, maybe I'll talk about it a bit later.
[00:16:57] It's a lot to process because in one reality,
[00:17:01] It is kind of like how things already are.  But on the other hand, formalizing is a whole other different thing.
[00:17:08] Reacted only in 19, is there plans for Solid to work harder to get to version 19 as well?
[00:17:13] Um...
[00:17:15] not currently, but angular currently.
[00:17:18] I think had this in the plans. Angular 19 also just came out. They managed to catch up. And I mean, that's impressive because if you think about it.
[00:17:27] Sure, they got a head start, but...
[00:17:30] React jumped like
[00:17:32] 10 versions or 13 versions, right?  They went from basically like 0.13,  which was like the first version,  all the way to like 0.14 to 15.  So they like...
[00:17:44] 1, 2, 3. They jumped 12 versions, basically.  So...
[00:17:47] Angular is already caught up to 19, so...
[00:17:55] Thank you.
[00:17:56] Yeah, so I'll actually go from 1.9 to 20. Yeah.
[00:18:01] That's the solution, isn't it?
[00:18:07] Ugh.
[00:18:09] There we go. Yeah. 1.9 to 20.
[00:18:14] Just like React.
[00:18:16] Thank you.
[00:18:17] Thank you.
[00:18:19] Thoughts on Tansag's art? Tansag's art is great. Tanner is building on the same bones that we're working on. He's gone much deeper down
[00:18:29] Certain things I think matter a lot for the developer.
[00:18:33] To be fair,
[00:18:35] he's kind of has to go there. See, this has been kind of my concern here in general. It's like,
[00:18:41] because of React, there's only so much he can do.  So he has to come up with
[00:18:45] ever more
[00:18:46] interesting solutions to kind of get around the fundamentals that he needs to get from react  whereas with me right now i'm approaching this kind of from the basis and being like okay
[00:18:55] What if we didn't have React? What if we were just starting from scratch again?
[00:18:59] what would it look like?  Which frees me up a lot from a more theoretical space.  But what's great is me and Tanner align on stuff a lot.  And I shared with him some thoughts,  which actually led to me making the stream today.  And he's like, I'm in complete agreement.  So I...
[00:19:15] I was like, okay, that's all I need. I'm going to talk about it today. Um,
[00:19:19] I'm going to go ahead and get it.
[00:19:22] Thank you.
[00:19:23] Yeah, very awesome. I heard it's fine. It's like TypeScript, right? TypeScript goes from 1.9 to 2.0, so...
[00:19:32] You just combine TypeScript mentality with React's upgrade mentality.
[00:19:38] you know, back from 0.14 or whatever. Was it 0.15? No, they had actual 15. And that's the answer, solid 20.
[00:19:46] We'll skip past all the rest.
[00:19:53] Thank you.
[00:19:55] Yeah, that's progressing around. We'll have Tanner come back. We'll show him what he's been working on.
[00:20:03] He's...
[00:20:05] He's an interesting boat, as I said, because he's
[00:20:07] He's trying to build even--
[00:20:09] More
[00:20:11] Um...
[00:20:12] considerable more
[00:20:13] like constructs on top of the stuff which is really valuable I mean I in the sense even after this - everyone's trying to get like a
[00:20:20] validation on their server functions, all this extra functionality. And that's great.
[00:20:23] Someone can do that.  That someone is just not generally going to be me because I...
[00:20:28] I know that someone can do it, which means it's not an interesting problem.  I'm interested in the problem of things they can't do.  But I think he's really taking it a good distance,  which means it's a good time to probably talk about it again.
[00:20:42] Thank you.
[00:20:45] Yeah, I mean, the key to it would, yeah, I mean, just TypeScript can't work the way TypeScript works if we wanted this to work. We'd have to have some way. I mean, people talking about syntax or signals in the browser that didn't involve function calling so that we could, like, fool it.
[00:21:02] essentially for TypeScript perspective. It's interesting. It's just also like
[00:21:07] There's a lot of implications of that kind of change.
[00:21:10] and the second you need it to be transportable you're in functions again and you're in the same  problem again so it's not as simple as that and using stuff like property access
[00:21:18] like dot value, as we know, is a trap. So it's like,
[00:21:21] There is...
[00:21:23] No.
[00:21:24] great solution unless TypeScript itself changed. And who wants to bet TypeScript itself is going to change?
[00:21:32] Thank you.
[00:21:33] using t-arpec into the framework, which is fine.  Which is good.  I don't have seen orjdev's work.
[00:21:39] we have prpc which is a compiled thing him and tanner probably should share notes it's very similar um approach right
[00:21:46] which is pretty cool.
[00:21:49] Um...
[00:21:52] Thank you.
[00:21:53] You know, I think it's cool at least. This idea like surf functions unload a whole bunch of potential to build on.
[00:22:01] Thank you.
[00:22:06] Thank you.
[00:22:08] Yeah, I mean, trpc is fine. It's just getting absorbed is essentially the reality of things.
[00:22:14] People...
[00:22:16] Yeah, I mean, if we go monolithic, people don't want to go through all the rappers anymore.
[00:22:23] Yeah, I think that's what should happen.  I think where my mindset is,  Orj should look at what Tanner's been doing  and just kind of find a good zone around there  because that feels like...
[00:22:35] where that belongs. It's the next level above where I'm generally working. Okay, so
[00:22:44] Yeah, we're just talking crap, but let's actually get into something.
[00:22:49] Thank you.
[00:22:50] Thank you.
[00:22:51] Thank you.
[00:22:53] actually get into something
[00:22:56] We want to talk, I want to talk today, because as usual, I've been writing HackMDs, but let's actually start with
[00:23:04] With Excalibur.
[00:23:05] Okay.
[00:23:07] and just start a brainstorm session for a sec, okay?
[00:23:13] I know. And later in the stream is the most you part of the stream, because I'm going to be talking probably about some of my HackMDs that directly reference your work. I'm sorry, Tommy, but you know what? We got a solution for that too.
[00:23:26] You can be a guest on the stream.
[00:23:29] You've been doing some great work, and if you think you're a good place to showcase it, you should come and join me.
[00:23:38] *click*
[00:23:41] Thank you.
[00:23:43] All right. Soon. Okay. That's awesome. Yeah.
[00:23:49] I know, it's a very...
[00:23:51] R&D kind of zone.
[00:23:53] Um...
[00:23:54] Okay, so let's get into the topic today.  Because I'm going to, I want to throw it out there.
[00:24:00] I don't actually think there's that many different ways to build web apps.  I mean, if you remember, like from a high level perspective, you remember a long time ago, I wrote this Patterns for Building JavaScript Websites in 2022, one of my most popular articles, and I said,
[00:24:15] Like I was responding to an Addy Osmani chart that...
[00:24:19] and that he had
[00:24:21] where he showed this table and all the framework authors all argued about what features they supported and all this stuff.  And I was like, okay, no, I...
[00:24:31] I break it down to three questions, right?  Navigation, and I made this matrix
[00:24:35] full of like
[00:24:36] different
[00:24:37] things. And we talk about this, like every time I do that,  like yearly recap of where JS frameworks are, you know, for new  years, we talk,
[00:24:44] about this, right? We look at
[00:24:48] you know, how rendering works, different types of rendering, timing, SSR, streaming, SSD.  We talk about hydration. And all these characteristics sort of define
[00:24:59] the solution. And if you take the combinatorics, there's like 60 different combinations, you know,  or 120, I think combinations. And of those, maybe only 60 of them are viable. But it's a mess when  you're like, what the hell is going on here?
[00:25:15] Right.
[00:25:18] And
[00:25:21] It's like, let's step back.  You guys know that I've been looking at server components.  You know that I've been looking at
[00:25:27] you know, different architectures and, you know,
[00:25:30] I was like...
[00:25:32] I...
[00:25:34] I actually think there's three buckets only.
[00:25:38] Bought
[00:25:40] or
[00:25:41] If I say SPA, everyone knows what I'm talking about, right?
[00:25:44] Thank you.
[00:25:46] Thank you.
[00:25:47] Um...
[00:25:50] What else do we want?
[00:25:53] server components,
[00:25:57] And what else do we have? What's the last one I'm going to say?
[00:26:02] state bowl servers.
[00:26:05] I think I can bucket all rendering on the web.
[00:26:11] into these three categories.
[00:26:14] Thank you.
[00:26:15] Make this two lines, it's too long.
[00:26:19] Thank you.
[00:26:19] Thank you.
[00:26:20] for applications.
[00:26:21] Thank you.
[00:26:22] Thank you.
[00:26:24] Sorry, why didn't I...
[00:26:27] Thank you.
[00:26:27] Don't get me wrong, there's also MPAs still.
[00:26:31] Um...
[00:26:32] But I don't consider MPAs
[00:26:35] necessarily application
[00:26:37] I think there's really three architectures we're talking about.
[00:26:43] I need to look more at Breeza.
[00:26:48] Thank you.
[00:26:49] Thank you.
[00:26:51] Yes, I'm going to talk a bit about that later on in the day.
[00:26:55] But the resumability stuff.
[00:26:57] Right, but client-only spa, SSR spa, yeah, yeah. No, but I...
[00:27:03] I'm going to consider those the same category.
[00:27:06] Right?
[00:27:07] high level
[00:27:09] I think there's only...
[00:27:11] three categories, right? Like over here, we have like, what's defining of a single page app? Clients,
[00:27:18] So, I think that's a good thing.
[00:27:20] I mean, I think all of these have client routing.
[00:27:23] But big thing is state,
[00:27:26] owned in browser,
[00:27:28] Right.
[00:27:30] Um...
[00:27:34] stateless
[00:27:36] Server generally, this is not a rule, right?
[00:27:41] Um, but I'm just like,
[00:27:43] characteristically single page app you id
[00:27:47] What are the characteristics about this?
[00:27:49] more important.
[00:27:53] client rendered.
[00:27:54] like when you update
[00:27:57] Thank you.
[00:27:59] Right.
[00:28:01] Whether you do SSR or not,
[00:28:03] is...
[00:28:05] It's a toggle, it's a switch.  It doesn't change fundamentally that it's a single page app.
[00:28:14] Yeah, where do islands go? I think islands are over here somewhere.
[00:28:19] in server component land here.
[00:28:21] Um...
[00:28:23] Because, like, what's over here, right?  It's...
[00:28:29] Thank you.
[00:28:30] Thank you.
[00:28:31] interactive
[00:28:35] Um...
[00:28:37] Arts.
[00:28:39] Um...
[00:28:40] So like Clank, opponents, islands, whatever you want to call them.  What other characteristics do these have?
[00:28:47] also stateless server generally doesn't have to be like you can always have like a web socket  connection but i'm just like
[00:28:53] The baseline is stateless server, right? It's kind of, it's restful.
[00:29:03] It's possible to have client routing,  but generally, like,  third one thing I'm going to say,  it's not about the routing,  because this is what the problem  with client routing,  because they all have client routing.  It's more of like,
[00:29:13] server
[00:29:15] rendered
[00:29:18] navigation.
[00:29:20] Right?
[00:29:22] Maybe this is the better way to put it, because I'm going to say I'm talking apps here.  So I'm talking client routing.
[00:29:27] Generally.
[00:29:29] Thank you.
[00:29:31] Client rendered,
[00:29:32] Navigation.
[00:29:36] server rendered navigation
[00:29:40] The difference...
[00:29:42] between islands and server components, there are functional things that you need to consider when you're doing
[00:29:49] server components versus islands, but they're the same things you have to consider when you add view page transitions to Astro.
[00:29:55] To me...
[00:29:57] this update on the
[00:30:00] MPA.
[00:30:01] is fundamentally boxed under this thing.
[00:30:04] Right.
[00:30:06] Thank you.
[00:30:07] Spa as in Remix Spa mode?
[00:30:11] Now you're just poking fun at them.
[00:30:14] they should have called it like CSR mode or something.  I can saw that we call it SSR false.
[00:30:19] Remix?
[00:30:21] all modes
[00:30:22] arguably are here, even with their server components.
[00:30:26] architecturally, they are still over here.  Tanstack is here. SvelteKit is over here.
[00:30:31] Um,
[00:30:33] Because architecturally in Remix, when you put the server components as the data loaders, you're still running in a client-driven thing. Don't get me wrong. Server components are this weird hybrid that you can kind of do server components without a server. But...
[00:30:50] architecturally speaking,
[00:30:52] The whole benefit is when the server is on the outside.
[00:30:56] Right, because then you only have the little pieces.  Remix does it backwards, which means it
[00:31:00] It's over here. Like when people make lakes like server components, they load, you know, like the kind of reverse Nux idea of server components. They are still over here. They're all at an architectural level.
[00:31:12] React server components are over here.
[00:31:15] what and what like what Next is doing.
[00:31:17] Almost what everyone else is doing is over here.
[00:31:20] Thank you.
[00:31:23] Thank you.
[00:31:25] No MPAs allowed in the stream. I mean,
[00:31:28] It's just a server components architecture with the routing turned off.
[00:31:34] Thank you for the reminder. Yeah, like and subscribe. It helps me so much. Seriously.
[00:31:39] I'm going to go ahead and get some more.
[00:31:42] Okay.
[00:31:43] Serverless, I mean, most of these run on serverless.
[00:31:48] Because they're
[00:31:49] But I think you mean like...
[00:31:52] react server components without a server,  or maybe you're talking about offline first.  Yeah, I mean, that's another question.  What do you think offline first fits?  Generally speaking, offline first,
[00:32:00] is over here too.
[00:32:04] Offline
[00:32:05] First.
[00:32:07] Lakes
[00:32:08] These are just other things that are actually over here.
[00:32:12] Generally speaking, I mean,
[00:32:15] It doesn't matter if they're SR or not.
[00:32:19] Categorically,
[00:32:21] There's this bucket.
[00:32:22] and this bucket the funny thing is people didn't realize that this was a bucket before  um for apps like to be fair they were just like
[00:32:29] MPAs, which I didn't put on the list here, but
[00:32:35] Eh.
[00:32:36] Okay.
[00:32:39] Yeah. Yeah. Dev, you...
[00:32:43] Beat me to it.
[00:32:45] Thank you.
[00:32:49] Thank you.
[00:32:50] the islands themselves are the client components,  but the architecture is what I'm talking about.  That's why you,  the fact that there are server components doesn't,
[00:33:00] beget necessarily like the categorization. It's the fact that like that's the architecture of the app. Like you build an app that renders everything on the server with client islands on it.
[00:33:10] Thank you.
[00:33:15] Thank you.
[00:33:17] So it wants a specific interactivity. Okay.
[00:33:22] Thank you.
[00:33:23] I'm sorry.
[00:33:24] Well, the thing is,
[00:33:28] You can argue that
[00:33:30] Thank you.
[00:33:32] because of the ability to preserve state.  But now that there's stuff like view transitions and stuff,
[00:33:38] You are...
[00:33:39] on the ledge and
[00:33:42] Yes, you could argue that view transitions are just letting MPAs not do full page reloads.
[00:33:46] And if you forget about shape-state persistence and sharing that model, you can get pretty far.
[00:33:52] but you're also probably not building apps. You're probably just building sites now that have slightly better navigation. You're not building things that have persisted to date.
[00:34:01] Which is an important
[00:34:03] Um...
[00:34:04] aspect here because
[00:34:05] Thank you.
[00:34:07] It kind of goes without saying that when you have stateless servers,
[00:34:12] Thank you.
[00:34:13] that state
[00:34:15] is owned in the browser.
[00:34:18] This is where the similarity comes in.  Because you might be like,  oh, but islands.  Well, the thing is,  islands just don't bother with the state.  They throw it away.  It's like,
[00:34:25] Like if you just don't do client routing, you don't keep the same server like MPA style, then like it's not that the state
[00:34:33] isn't
[00:34:34] Um,
[00:34:35] in the browser, you know what I mean?  It's just that you chose to throw it away.
[00:34:38] Like,
[00:34:41] Thank you.
[00:34:42] Thank you.
[00:34:45] Thank you.
[00:34:48] Yeah, you want to talk about HTMX and KDoS stuff? Interestingly, HTMX...
[00:34:55] is a technology, not an architecture from my perspective. So for me, when I look at HTMX,
[00:35:01] you know, just...
[00:35:01] Let's put in our brainstorm.  It can actually sit...
[00:35:05] It can either live in this world or in this world, depending on how you build it.
[00:35:10] We haven't expanded out this world, but HTMX is a technology...
[00:35:14] works both with this architecture and with this architecture. Like on a base level,
[00:35:18] HTMX might actually be under this category because
[00:35:23] Again, you can always shrink the islands to zero. You can always shrink the state to zero, but at base it's a stateless server, right?
[00:35:32] with server rendered navigation.
[00:35:35] Right?
[00:35:36] Like,
[00:35:37] You're just...
[00:35:38] Kind of like with Astro's Uterance, you're just swapping in HTML partials, right?  Um,
[00:35:44] You know.
[00:35:45] This HTML partials is going to be a word that we use over here, right?
[00:35:49] It doesn't have the HTML, it can also be JSX partials, but it's
[00:35:54] Essentially,
[00:35:56] When I'm looking at this from 10,000 feet...
[00:36:01] Mm-hmm.
[00:36:02] there's that, like, don't agree with the labels,
[00:36:05] But like...
[00:36:07] Yeah, let's do some stuff.
[00:36:10] All modes.
[00:36:11] spell kit,
[00:36:13] Noxt.
[00:36:15] All it's to heart.
[00:36:17] Thank you.
[00:36:19] You know?
[00:36:24] I'm being a little bit aggressive here on the bulk thing, because like, as I said, we could go into all 120 different variations here.
[00:36:32] But like...
[00:36:34] essentially
[00:36:37] - They...
[00:36:39] for the important characteristics, they bucket this way.
[00:36:43] Islands don't handle it, but the fact that they don't handle it
[00:36:47] like don't handle this.
[00:36:49] is kind of like
[00:36:51] A choice.
[00:36:53] If you want that architecture to work, you need to handle it.
[00:36:57] Right. So it's like they're,
[00:36:59] Yeah.
[00:37:01] Resumability, yeah. Resumability...
[00:37:04] is again a technology, not an architecture from my perspective.
[00:37:12] Resumability and hydration...
[00:37:14] are going to be
[00:37:16] basically
[00:37:18] anywhere.
[00:37:19] that you care about...
[00:37:23] the state being owned by the browser. Because the state never, like nothing starts in the browser, everything starts from the server.
[00:37:29] Um,
[00:37:29] So,
[00:37:30] it hovers these lines. These islands can be resumable or hydrated. The single page app could be hydrate. So they share uses of this technology.
[00:37:43] But in itself, if you're more interested where things sit,
[00:37:48] quick
[00:37:49] is over here, okay?
[00:37:52] There we go.
[00:37:53] Like,
[00:37:54] We can say that...
[00:37:56] *sniff*
[00:37:58] All right, let me zoom one more and maybe make it a little bit easier to see for people. Right?
[00:38:03] Thank you.
[00:38:06] Thank you.
[00:38:11] Thank you.
[00:38:12] Yeah, yeah, basically. I mean, they're technically the server components, yeah.
[00:38:16] There's a huge similarity there.
[00:38:20] Yeah, 100% in the SPA range, I agree.
[00:38:24] Like six minutes behind chat.
[00:38:27] Staples, servers, columns, it scares you.  Maybe for good reason. It scares me sometimes, too.
[00:38:32] It's this big blank we have here, but we'll get there.
[00:38:36] I was thinking about this all day.  I was like trying to come up with the things.  If you can think of the axes, let me know.
[00:38:48] Yeah, where state lives,
[00:38:50] But then what's the other axes?
[00:38:54] where it's like, whenever you see three things, you always think there should be a fourth thing.  And you're like, the fourth thing is the missing part. Like, that's how I found Solid.js.
[00:39:04] Um...
[00:39:05] I realized that there was a two-Axis graph, and nobody was in the fourth quadrant.
[00:39:10] And that's what solid was.
[00:39:12] Um...
[00:39:13] that's how I knew for myself that solid was worth pursuing more than anything.  Cause I found a unique spot. It wasn't about API. It wasn't about, you know,  these surface layer stuff. Um,
[00:39:24] I think I talked about this way, way back. Let me look at my Medium article. Just so you don't
[00:39:29] You get what I'm talking about when we're talking about these two actors graphs way, way back.
[00:39:36] Um...
[00:39:38] Doo doo doo doo doo doo doo.
[00:39:42] Thank you.
[00:39:43] F.
[00:39:45] Thank you.
[00:39:46] React hooks are most prominent, I benchmarked hooks here.  What every JavaScript framework could learn from React.
[00:39:52] I'm not.
[00:39:53] Um,
[00:39:54] Okay.
[00:39:55] These titles are wrong. We came up with better names for them. But essentially, I'd realized that almost every framework was in Q,
[00:40:02] Fox 1, except for some reactive stuff like Knockout back in the day.
[00:40:06] But React was over here in this kind of forward graph. Don't worry about this coarse-grained, fine-grained, strict, loose data flow. Those titles aren't quite the right ones. But I'm trying to remember what I figured out what the perfect axes were like on a stream about a year ago. But my point was, I realized that was nothing was over here, essentially, right?
[00:40:26] Um,
[00:40:27] And when React came out, everyone was like, the people who are over here, they saw React over here and they all went like this way.
[00:40:34] But what I was saying is over time, React has slowly been going...
[00:40:37] this way
[00:40:38] like more fine grained.
[00:40:40] Right.
[00:40:41] people got the wrong, they learned the wrong things from React and they all like
[00:40:45] started, you know, they basically went backwards. So when I created solid,
[00:40:50] I started over here and I was heading
[00:40:52] very quickly into this quadrant.
[00:40:55] I feel like
[00:40:57] It would be interesting
[00:40:59] if the same sort of mentality
[00:41:02] Um...
[00:41:04] existed.
[00:41:06] in this space.
[00:41:07] Thank you.
[00:41:08] Thank you.
[00:41:09] Anyway.
[00:41:11] Thank you.
[00:41:14] yeah.
[00:41:20] Thank you.
[00:41:23] Because they're talking about HTMX, they built...
[00:41:30] Okay.
[00:41:32] Thank you.
[00:41:33] Thank you.
[00:41:34] Thank you.
[00:41:36] So what do we got here? State view? Yeah.
[00:41:40] I mean, let's see what that looks like.
[00:41:45] Thank you.
[00:41:46] Sure. I'll bite.
[00:41:57] Thank you.
[00:42:00] *shriek*
[00:42:04] So we're talking...
[00:42:11] One axis here is going to be
[00:42:13] state
[00:42:15] Thank you.
[00:42:16] Thank you.
[00:42:17] Can I highlight this line and put arrows on both sides?
[00:42:26] not layers, I want to highlight this line
[00:42:30] Can I change the style?
[00:42:32] The too late.
[00:42:33] Oh yeah, it is too late. Anyways, whatever.
[00:42:35] date
[00:42:36] on this line.
[00:42:37] Thank you.
[00:42:39] Thank you.
[00:42:41] view on this line.
[00:42:43] And then...
[00:42:46] I'm gathering...
[00:42:50] Let's do server. If I've got the idea here, server.
[00:42:58] Thank you.
[00:43:00] client
[00:43:05] Clients.
[00:43:07] Thank you.
[00:43:09] So...
[00:43:12] We get our stateful...
[00:43:15] servers here.
[00:43:19] Thank you.
[00:43:20] We get...
[00:43:22] They, this, this,
[00:43:25] server server and then if this is state client state but server view we get
[00:43:32] server components here.
[00:43:36] And then
[00:43:38] client state client view,
[00:43:41] Pause there. What does that leave us with?
[00:43:44] Client view
[00:43:47] Yeah.
[00:43:47] Client view server state.
[00:43:55] Thank you.
[00:43:57] Thank you.
[00:43:58] Thank you.
[00:44:00] There's very, I mean, arguably...
[00:44:05] Mm-hmm.
[00:44:06] Thank you.
[00:44:08] Maybe there's some space to get here, but this is like SPA plus WebSocket, right?
[00:44:15] Thank you.
[00:44:15] Maybe there's something here though. This isn't the worst.
[00:44:23] Thank you.
[00:44:24] Thank you.
[00:44:25] Yeah, you can't have a SWA without an API, no, but you, you
[00:44:32] But the persistence of the stapleness, what I mean is like this, where the session lives, you can definitely have a client with sessionless backend.
[00:44:43] Yeah, I'm just...
[00:44:48] Just this is this is this is not a bad
[00:44:52] stab at this chart.  I don't know if it gives us any...
[00:44:55] any, um,
[00:44:57] insights just yet, but.
[00:44:59] I'll take it.
[00:45:01] Okay, let's finish filling out this table.
[00:45:07] Thank you.
[00:45:07] Thank you.
[00:45:08] stateful servers.
[00:45:12] What do we got here? Characteristics. So...
[00:45:15] Um...
[00:45:17] "Date is owned on server."
[00:45:22] Um...
[00:45:27] What else is characteristic of this?
[00:45:31] server rendered.
[00:45:35] Navigation.
[00:45:39] Thank you.
[00:45:42] Thank you.
[00:45:43] Other characteristic to this.
[00:45:49] Thank you.
[00:45:50] Thank you.
[00:45:52] Thank you.
[00:45:54] .
[00:45:56] Thank you.
[00:46:01] Thank you.
[00:46:02] I mean, there can be HTML partials, but I mean, that's sort of...
[00:46:08] goes along with
[00:46:10] with this right like categorically these are the same
[00:46:14] Statement.
[00:46:16] and categorically like these are like
[00:46:19] I could say,
[00:46:20] stateful servers.
[00:46:22] This is like--
[00:46:24] Necessary.
[00:46:26] Right?
[00:46:27] um this doesn't work without staple servers you need you need like some kind of session like  persistent back end here um and yeah i mean for people who don't know what i'm talking about this  is live view
[00:46:39] essentially.
[00:46:41] Um...
[00:46:46] Yeah, I might as well finish this out.
[00:46:48] Next.
[00:46:49] RSCs.
[00:46:52] Astro...
[00:46:54] Brash.
[00:46:55] Da da da.
[00:46:57] HTMX can kind of like hover a line over here.
[00:47:04] Thank you.
[00:47:10] Blazer has some interesting modes that does all of this, but
[00:47:13] I don't know what it's called in Blazor, but I know that Blazor has something over here too.
[00:47:20] *crying*
[00:47:21] *sniff*
[00:47:23] .
[00:47:28] I mean, when I'm talking about state, I'm talking about
[00:47:31] Stuff that ultimately isn't persisted.
[00:47:36] Like,
[00:47:37] obviously people have backends with databases, but when I like, and in a sense, you can access that database from any of the clients. So then there is like persisted state in a sense, but I don't mean that. I mean, like,
[00:47:48] If you are...
[00:47:54] like the state of the application, not the state of your data, like the state of your UI is what I'm getting at.  Who owns the state of the UI? Who makes that decision? Who knows which checkboxes are ticked, right?
[00:48:07] Generally speaking, in Live View, the server knows that.
[00:48:10] in these other
[00:48:12] Um...
[00:48:13] architectures, it's the client that knows that. In the spa, it's obvious because the whole thing is in the client. In the server components, it's more like
[00:48:21] the stuff outside of those islands
[00:48:23] you shouldn't be clicking anyways, right?
[00:48:27] So to speak.
[00:48:32] Thank you.
[00:48:34] Marco not mentioned. Marco's over here. Sorry.
[00:48:41] Thank you.
[00:48:41] Thank you.
[00:48:43] Marco's here.
[00:48:45] Thank you.
[00:48:46] Thank you.
[00:48:47] Right.
[00:48:54] Thank you.
[00:49:02] Thank you.
[00:49:03] This distinction here might end up not being actually that big.
[00:49:08] But right now,
[00:49:09] Thank you.
[00:49:10] It has
[00:49:11] a lot of impact.
[00:49:14] This distinction has existed like between these two and this one since the dawn of the web, essentially.
[00:49:20] Um...
[00:49:21] And
[00:49:23] Thank you.
[00:49:24] It's where the line's drawn.
[00:49:27] because people operating on the side operate off the assumption that while stateless servers are  possible they're not a guarantee that you cannot ensure that you know serverless whatever you can't guarantee
[00:49:38] That
[00:49:39] and this has a history probably tied to infrastructure, scaling, cost considerations.
[00:49:47] Everyone on this side
[00:49:49] refused to make assumptions about the statefulness of the server. They're like, we can't
[00:49:53] do that. Whereas like the staple server type architectures like we're talking about here,  it's literally like you have it or the architecture just does not work.
[00:50:00] It's, you know, this is not there.
[00:50:03] MPAs? No. MPAs...
[00:50:06] generally speaking,
[00:50:10] are
[00:50:11] not
[00:50:12] an application
[00:50:14] architecture, like you can view them as server components
[00:50:19] crippled essentially, but they don't necessarily have stateful servers.
[00:50:23] MPAs are kind of in the middle here. They're like server components where you chose to not use a bunch of the features.
[00:50:29] Um...
[00:50:30] kind of conceptually, right?
[00:50:33] When you start with an MPA and you move outward, you end up with all of these characteristics.
[00:50:40] as you try and get more interactive on the client,  as you try and scale up from it.
[00:50:45] So yeah, MPAs,
[00:50:48] are
[00:50:49] um,
[00:50:50] Thank you.
[00:50:51] I'd say, I'm going to say traditionally,
[00:50:54] MPA.
[00:50:56] All right.
[00:51:01] Like a simple MPA is just this architecture and choosing not to use the features in it.  I don't think there's any...
[00:51:09] Like it's funny because
[00:51:11] A simple MPA could literally be...
[00:51:14] any of these because they just don't  use the features. It's just a website.  It's just like, here's some HTML.  That can be islands architecture.  That can be
[00:51:25] a page with a giant spa on it, that can be the starting point of a stateful server.
[00:51:33] MPAs are just the web.
[00:51:37] mentally, mentality-wise, it's closer to this middle category, where you have this idea that you're just, like, swapping a page.
[00:51:46] Right?
[00:51:48] Um,
[00:51:51] But...
[00:51:53] Yeah.
[00:52:00] Baseline, yeah.
[00:52:08] - JSX is a templating language.
[00:52:12] It's
[00:52:13] It's no more, no less.  It's the same as felt files or...
[00:52:18] lit tag template literals. It's just a different form of templating language. So it's,
[00:52:23] It's
[00:52:25] It has nothing to do with...
[00:52:30] Do you want to write declarative code or do you want to manually...
[00:52:35] do your updates or whatnot. I mean, it's a question.
[00:52:41] Thank you.
[00:52:43] I'm strictly talking about web applications in general.
[00:52:49] I'm assuming
[00:52:51] But I think this...
[00:52:54] I think this can trace back even more
[00:52:57] Further,
[00:52:58] Right? Like you can argue...
[00:53:00] that
[00:53:02] If you start here, you can grow to here.
[00:53:04] which is like what classically happened right but
[00:53:08] Thank you.
[00:53:09] Now in like a modern setting, if you like resetting, look at what we have out there.
[00:53:15] Everything kind of fits into this thing.  Like, who else did I not put on here?  Turbo.
[00:53:22] rails, you know, turbo rails.
[00:53:26] you know, is here.
[00:53:28] Um,
[00:53:32] They might have technology on the Staples server side.  Maybe that's how you author it.
[00:53:36] But like,
[00:53:37] What I'm getting at is like,
[00:53:38] I, you can basically like, I think certain frameworks can target multiple of these architectures per se, but I'm, this is not.
[00:53:49] just
[00:53:50] How do I say it? All apps that do anything non-frivial require JavaScript. So when you consider the whole puzzle of pieces, I think there's only three...
[00:54:01] buckets like that we at least that we've talked about so far
[00:54:08] Thank you.
[00:54:09] Thank you.
[00:54:10] Thank you.
[00:54:11] Thank you.
[00:54:14] Thank you.
[00:54:15] is it about their  state lives in apps?  That is,  who's left holding the state  with my old joke  of, you know,  like hot potato  about how web architecture evolved?  That is one of
[00:54:27] like where the UI stayed is one of the most fundamental questions.  And the secondary concern there is,
[00:54:34] who's responsible for actually rendering or like making the decision of what gets rendered. Those two pieces together are very key to understanding the difference between like high level architectures here.
[00:54:50] Cool that MPAs are not a standard fund distinction, that was more of a choice limitation.
[00:54:55] going with the Rich Harris take, right?  When he told the Astro guys that client side routing was the future.  And if they weren't in it, they, you know, and then when they released the view page stuff,  he was like, look, even you guys agree, right?
[00:55:07] Um...
[00:55:10] While I think there's lots of use cases where you don't need that extra consideration that  comes around client-side routing navigation, there are trade-offs, JavaScript considerations,  all that kind of stuff.
[00:55:21] fundamentally from a mental model stuff,  I do think it's a natural evolution, right?  That's why Astro lands there.  That's why Turbo comes out for Rails.  Like...
[00:55:30] It's natural that
[00:55:33] The thing, like, my headings can be wrong here, but bucket-wise...
[00:55:38] I think there are three ways we view
[00:55:43] how this stuff comes together.
[00:55:47] Thank you.
[00:55:54] I have no clue. Like the thing is, when you have a language like JavaScript,
[00:55:58] You can literally put it in any of these buckets, right? There's LiveView.js.
[00:56:02] So,
[00:56:03] Certain tools.
[00:56:05] You know?
[00:56:06] certain languages, certain levels are going to show up in multiple of these architectures, but high level, I think there's
[00:56:12] these three buckets.
[00:56:16] Thank you.
[00:56:17] Thank you.
[00:56:19] People are very stingy today on the likes. Is this true?  Am I going to have to go on YouTube and bully people and see what they're doing?
[00:56:26] Let me see what's going on on YouTube.
[00:56:29] View channel.
[00:56:32] Is everyone just watching on Twitter?  Yeah, only 50.
[00:56:36] Mm-hmm.
[00:56:37] But there's 149 people watching on YouTube right now, apparently. So
[00:56:42] 50 thumbs up.
[00:56:44] 149 of you watching. That's only one in three. That's not particularly good.
[00:56:50] How are we doing on Twitch?
[00:56:52] Um...
[00:56:55] How many people are in chat? I mean, I guess I can't make the same metrics here.
[00:56:59] 55 people in chat.
[00:57:01] are 55 people watching. I guess I can't see the
[00:57:04] The sub thing, that's different, that costs money.  Okay, fine.  But we can definitely get some more likes on YouTube.
[00:57:11] Okay.
[00:57:12] I see 78 now.
[00:57:14] Yeah, okay.
[00:57:15] That was good. That's good. We're like 50%. I appreciate that.
[00:57:19] Okay.
[00:57:21] Thank you.
[00:57:24] It's stateful,  super-centered of MPA.  Not necessarily.  I think actually stateful,  like MPA,  like everything is,
[00:57:32] extends from that base of what the fundamentals of the of the web are that you just are sending back, you know, you know, if you think of the classic files are just sending back files that are in a folder, right? Everything.
[00:57:44] extends from that standpoint. So,
[00:57:48] I don't...
[00:57:51] Everything's a super set of MPAs maybe?  I don't know.
[00:57:55] The one that keeps closest to the original mentality is definitely the middle category, but...
[00:58:03] Thank you.
[00:58:05] Thank you.
[00:58:06] Yeah, HTTP versus WebSocket. Well, I mean, you can also do long polling with HTTP. The part that makes it different is to have WebSockets, you need a persistent connection, which means you need a stateful server, right?
[00:58:18] um i didn't like put it in here but we want to talk about technologies over here yeah i'm talking this
[00:58:23] This is WebSocket land over here, right?
[00:58:26] I mean, technically you can do long polling, but even with long polling, you still have  a connection with a server.
[00:58:33] Right.
[00:58:37] Two out of three people are still mad about Web Components.
[00:58:41] Amen.
[00:58:44] Thank you.
[00:58:45] .
[00:58:49] These are interesting observations, right? One thing I never see people talk about is using SearchWorks to turn MPA2 into a single page app.
[00:58:57] You can even work offline.  And what if, let's take that further.  What if you took a stateful server architecture and put that in the service worker, right?  It's kind of an interesting thing, right?  Because...
[00:59:11] Is that the ideal way to do offline first, right?  You can't.
[00:59:17] There's an interesting...
[00:59:20] thing about where the stuff sits, right?  Because when the single page app, almost all the logics on the, like,  the web is a client's client server model, right?
[00:59:29] There's two sides.  There's always two sides.  What putting it in a service worker does  is put both sides potentially on the same side,  like in the same area.  But...
[00:59:38] there's always two sides.
[00:59:41] single page app mentality has
[00:59:45] the client doing all the heavy work.
[00:59:49] Stateful servers have
[00:59:51] the server doing all the heavy work,
[00:59:54] And server components or this thing is this hybrid where it's like each of you guys do
[00:59:59] What?
[01:00:00] to want
[01:00:01] But...
[01:00:02] Like, it has a harder time
[01:00:05] Um...
[01:00:07] choosing sides. I think ultimately because of this tension, right? Like,
[01:00:12] There's this tension here, right? Like if I grab this and I put arrowheads on, can I put arrowheads on both sides?
[01:00:19] One side.
[01:00:21] No, I want...
[01:00:23] Thank you.
[01:00:24] *sigh*
[01:00:25] Why am I in that mood?
[01:00:27] Oh, right. I can do it like that. Okay. So if I might have drawn this before,
[01:00:32] But...
[01:00:33] If you have this line here,
[01:00:35] The thing is,
[01:00:39] Bye.
[01:00:40] What do we got here? Client.
[01:00:44] Server.
[01:00:46] Thank you.
[01:00:48] But I mean,
[01:00:50] The whole thing is, this is just another way of saying like,
[01:00:57] closer...
[01:00:58] to the user
[01:01:02] Thank you.
[01:01:02] Thank you.
[01:01:04] And closer...
[01:01:06] to
[01:01:07] your data, right?
[01:01:10] Hey, hey.
[01:01:10] Along this line,
[01:01:13] different operations are more optimal to happen, right?
[01:01:18] Um...
[01:01:20] some things fit better over here, right? Like, uh,
[01:01:23] Let's move this up over here.
[01:01:25] Um,
[01:01:27] Thank you.
[01:01:28] you know,
[01:01:30] arguably
[01:01:33] ephemeral
[01:01:36] UI state is better somewhere over here. You know, optimistic updates, selection state.
[01:01:42] because you're close to the user, you can interact with them. You don't need it here.
[01:01:45] Arguably.
[01:01:47] It's not persistent.
[01:01:50] arguably
[01:01:52] Thank you.
[01:01:55] you know, things processing data,
[01:01:59] Better over here somewhere.
[01:02:01] Um...
[01:02:02] So, like...
[01:02:04] There is...
[01:02:06] this spectrum here.  And there are kind of like interesting compromises where the stuff sits,  which means that sometimes with stuff like, you know, like a server component mentality,
[01:02:17] you would...
[01:02:19] Um,
[01:02:20] basically choose
[01:02:23] where the stuff goes. The challenge is then you often have two different models for things.
[01:02:29] And the other challenge is that like,
[01:02:32] Ultimately...
[01:02:37] they does have to persist somewhere. Like there, if you're building an actual app, there is a place where you probably you're not going to always fetch stuff, you need some kind of persistent.
[01:02:47] And for that reason,
[01:02:49] these generally do...
[01:02:52] that persistence, like it could go arguably either way.  But like when I talk about server components, I guess I'm talking about the choice to make  that persistence happen in the client.
[01:03:02] Um...
[01:03:03] It is possible that you could do very basic...
[01:03:06] Um,
[01:03:09] statefulness on the server
[01:03:12] But when you get to the point that you're
[01:03:14] kind of trying to like manage things with client side routing, you know, like even view page transitions can take that further. You're going to probably end up in that zone. So there there's an argument that this middle section can be
[01:03:25] Split.
[01:03:26] Um...
[01:03:27] Maybe.
[01:03:30] All right.
[01:03:35] Thank you.
[01:03:37] PageRail could be fetched and set as pageRail without a pageRail. Yes. And that's exactly what I'm calling under the server component side.
[01:03:45] Right.
[01:03:47] Thank you.
[01:03:49] Thank you.
[01:03:52] I mean, give me an example of stuff outside.  Here's the problem.  There's a million ways to nitpick on categorization.  As I said, I've gone down this path.  I'm quite familiar.  We can talk about like...
[01:04:08] You can stream, you can do this, you can do this, but
[01:04:11] when it all comes down to it in the end, there's
[01:04:15] the most defining traits
[01:04:17] I believe, actually,
[01:04:19] fall into these three buckets.
[01:04:24] Thank you.
[01:04:26] Thank you.
[01:04:28] Thank you.
[01:04:28] Thank you.
[01:04:31] Yeah.
[01:04:38] I mean, it's an interesting one, right?
[01:04:40] The only benefit here is you go local first, if your database is there.  And then at a certain point, you're kind of going,
[01:04:46] What's the difference between a model where you
[01:04:52] Mm-hmm.
[01:04:54] I think one of the things that ends up detracting from this a little bit
[01:04:58] is
[01:04:59] If you're already moving to the browser,
[01:05:03] Thank you.
[01:05:04] Like,
[01:05:05] Both this single page app model and Staples River model try really hard
[01:05:11] to optimize for their side to the point that you have a single app experience right i was talking  about this before a moment ago but it's it's what's key here right because there's like a single
[01:05:23] app experience.
[01:05:25] And I mean from a DX...
[01:05:27] standpoint.
[01:05:29] Not signal.
[01:05:30] God, I do that all the time.
[01:05:32] single and I realize this is
[01:05:36] single app DX perspective, right?
[01:05:39] And
[01:05:41] Generally speaking,
[01:05:44] These guys...
[01:05:45] are as well.
[01:05:47] where this is like
[01:05:51] split is like a split like react did a good job trying to keep it all in jsx or whatever but
[01:05:56] There is a...
[01:05:58] definitive boundary. And I don't just mean like,
[01:06:02] saying certain things only run on the server client. I mean, like,
[01:06:05] even like what its role is when you think about mutations and actions and you think about how these pieces play with each other.  It's not just like, oh, this part runs on the server. This part runs on the client.  Um,
[01:06:15] Like...
[01:06:17] It's more than that. There's implications of those decisions.
[01:06:24] Thank you.
[01:06:24] Thank you.
[01:06:28] Thank you.
[01:06:31] Thank you.
[01:06:34] Thank you.
[01:06:35] Right. So what I was trying to get at with your comment is you could bring the server on the client.
[01:06:42] In a sense,
[01:06:44] But
[01:06:45] It'd be interesting...
[01:06:47] Like clients are already better at rendering in the client.  Like the pattern is.
[01:06:52] more efficient, it's more flexible, it's more...  So it's like...
[01:06:57] I, it's, it's, that's what makes it a harder sell.  That's why I don't think you've seen people kind of go wholesale on this.  It is interesting.  The idea that you could take a backend,
[01:07:04] And then just do the initial work there, and then
[01:07:08] They didn't push it up, right?  Like...
[01:07:11] But on the other hand, you could also have that back end
[01:07:17] mentally like a single page app.
[01:07:19] you know, like, but, you know, and just have the single model. So,
[01:07:24] They're both approaches, right?
[01:07:27] in a sense, a single page app.
[01:07:28] almost acts
[01:07:31] Like...
[01:07:31] there isn't a client-server relationship,
[01:07:33] And in a sense,
[01:07:35] Stateful servers are a bit like that too.
[01:07:39] Thank you.
[01:07:40] Thank you.
[01:07:43] Yeah.
[01:07:45] Thank you.
[01:07:48] Thank you.
[01:07:49] Thank you.
[01:07:51] Yeah, yeah, yeah. The extremes share more of a common ground than the middle, yeah.
[01:07:58] Thank you.
[01:07:58] *sad*
[01:08:01] Thank you.
[01:08:04] Multi-app pages. There you go. Yeah, that's probably a better mentality on it on it in general. Like if you go that way
[01:08:12] approach, then you're kind of
[01:08:14] Okay.
[01:08:18] Multi app pages.
[01:08:20] Actually, wait a second.
[01:08:22] No, that's...
[01:08:23] you
[01:08:23] Multi-page apps are an app that spreads over multiple pages. Multi-app pages
[01:08:30] would be
[01:08:31] a page with multiple apps on it.  That's a whole other...
[01:08:35] can of worms.  I,
[01:08:38] Yeah, micro frontends, yeah.
[01:08:43] Yeah.
[01:08:47] Yeah.
[01:08:49] Multiple single page apps.
[01:08:52] Thank you.
[01:08:53] From my perspective,
[01:08:57] Thank you.
[01:08:58] If they're connected in some sort of way, then they're single their app, even if they're like,
[01:09:04] author differently. And if they're not connected in a different way than I
[01:09:08] I...
[01:09:09] then they're trivial enough that I think they fall in the middle category.
[01:09:14] Yes.
[01:09:15] But the play on words is definitely appreciated and definitely fun.
[01:09:19] Okay.
[01:09:21] But I want to talk about
[01:09:25] this closer, farther thing a little bit here because
[01:09:31] Um.
[01:09:35] What are the actions that you prefer perform on a page like when you're
[01:09:40] When you're...
[01:09:42] kind of
[01:09:43] you know, like, how do we even decide between these architectures? Obviously, there's
[01:09:48] technology infrastructure constraints, right?
[01:09:51] There's a reason that not everyone can...
[01:09:53] use stateful servers, right?
[01:09:57] Not everyone has access to those, you know, that could be just off the table before you even start. But even between these,
[01:10:06] you know,
[01:10:08] Thank you.
[01:10:09] There's interesting blurring in terms of trying to figure out what solutions or what style solutions
[01:10:15] actually work the best for your situation, right?
[01:10:20] So, you know, it got me thinking of like,
[01:10:23] What do you actually do?
[01:10:25] on a webpage, right?
[01:10:27] Like,
[01:10:29] Like when you're...
[01:10:30] Thank you.
[01:10:31] Dude.
[01:10:32] do in a web app.
[01:10:35] categorically.
[01:10:37] Right.
[01:10:38] Um...
[01:10:41] Well, first thing you do is you load a page, right?
[01:10:45] It's something you do. You load a page.
[01:10:47] You navigate...
[01:10:49] to
[01:10:50] A different page?
[01:10:54] You...
[01:10:59] Thank you.
[01:11:01] I usually press comment on our webpage. That still falls under load a page.
[01:11:09] Thank you.
[01:11:12] Right?  Now we get to a different page.
[01:11:19] Thank you.
[01:11:20] And we do some client only interaction, maybe like selection state.
[01:11:28] And then we probably do some kind of
[01:11:33] mutate
[01:11:35] mutation, some way of like
[01:11:41] some kind of server update.
[01:11:45] I'm just trying to think.
[01:11:47] This
[01:11:49] Like what other things do we do high level categorically?  Like optimistic updates,
[01:11:54] is part of that client
[01:11:56] only interaction.
[01:11:59] Right. Commit changes is, is number four.
[01:12:08] Thank you.
[01:12:09] Yeah, we should we should add a caveat down here that we should think about
[01:12:14] Um...
[01:12:16] return
[01:12:19] visits/
[01:12:22] second time.
[01:12:24] It occurs, right? Sometimes you go to a page and come back to the page, right? Sometimes you, yeah, exactly. I agree.
[01:12:34] I mean, I get if you have a website, I can see this argument.
[01:12:40] But at some point, if you're doing application,
[01:12:43] Guess what?
[01:12:44] I like this post.
[01:12:46] There.
[01:12:50] The optimistic update, I just did two of these things just now.
[01:12:54] Um...
[01:12:56] I did a client only interaction which involved the optimistic update and then I did a mutation which did the server update.
[01:13:08] Thank you.
[01:13:10] Persistent state is how we solve a problem, right?  This is how we describe the problem.  But I'm just thinking more of like,
[01:13:22] I'm going to pull this out of here. It's going to get its own...
[01:13:25] thing.
[01:13:29] Let's...
[01:13:30] Blow this up a little bit.
[01:13:35] Thank you.
[01:13:38] Okay.
[01:13:39] Thank you.
[01:13:41] I want to make sure that I'm not missing any kind of like from a user perspective, what kind of action that we're doing.
[01:13:53] Get server state without interaction. Interesting. Okay.
[01:13:58] I'm gonna...
[01:13:59] I'm going to put this one in, I think you're right.
[01:14:03] because this is like client sourced events.
[01:14:07] server sourced.
[01:14:11] events.
[01:14:12] This is a...
[01:14:13] This is...
[01:14:17] This is not what you do, to be fair.
[01:14:19] But...
[01:14:20] I think...
[01:14:22] We should...
[01:14:24] Consider it, maybe.
[01:14:28] At least this is something outside of the box.  I'm not sure where this sits, right?  Because...
[01:14:33] Um...
[01:14:36] You could also...
[01:14:38] background processes that pull for data
[01:14:43] Like, I don't...
[01:14:45] You can set those up.
[01:14:47] in all of these solutions.
[01:14:50] To be fair, so from like
[01:14:52] the app in the client's perspective or the user's perspective, which is right next to them.  I don't know if this actually is a category, but this is the best.
[01:15:02] Different when I've thought about
[01:15:05] Right. Similar idea based on I would consider...
[01:15:10] Um...
[01:15:12] Thank you.
[01:15:12] These triggers are based on...
[01:15:15] Um...
[01:15:17] Okay, so you're saying...
[01:15:20] Thank you.
[01:15:21] load resources based on
[01:15:24] events.
[01:15:26] client-based events.
[01:15:28] Um...
[01:15:33] Yeah, this is an interesting one. I'm trying to think of where this fits because it's between load page and client only interaction.
[01:15:40] Um...
[01:15:43] It could also be under mutation server update.
[01:15:47] Because it's the idea that doing a certain action in the client, like maybe mutation
[01:15:51] is wrong here. It's the thought that doing a certain action in the client would cause this  something to need to come from the server.
[01:16:00] Um...
[01:16:01] Because like I say mutation, but it's like two sides. It's
[01:16:05] pushing something server to get something back.  But that thing you push the server could literally be nothing.
[01:16:11] and you could get something back.
[01:16:17] Mm-mm-mm-mm.
[01:16:24] Thank you.
[01:16:25] Like I just saw. Right. I mean, this is a choice, right? How you handle it.
[01:16:33] You can guard yourself against this in either case.  Um...
[01:16:37] Thank you.
[01:16:40] Right to local data store? Again,
[01:16:46] the local data store...
[01:16:48] is either going to be on the client, so categories here, or it's going to be on the server, so it's categories here. Even if the local data store is in the client, it's still on the server portion of the mentality. I don't care if the server's in your browser or if it's on the server, it's
[01:17:02] categorically, shape-wise, kind of falls the same.
[01:17:05] So I think we're good.
[01:17:10] Thank you.
[01:17:11] Thank you.
[01:17:13] Thank you.
[01:17:14] Yeah, four is basically...  Yeah.
[01:17:19] is this, I'm just trying to say async.
[01:17:30] It's almost like client initiated async server.
[01:17:36] communication.
[01:17:42] And this is...
[01:17:46] Thank you.
[01:17:48] I guess server initiated.
[01:17:55] Thank you.
[01:17:55] Thank you.
[01:17:59] Thank you.
[01:18:00] But the only thing you have to consider here is that
[01:18:03] even with the WebSocket, the client has to  open the WebSocket, so like
[01:18:08] This distinction
[01:18:10] is
[01:18:11] worth
[01:18:13] highlighting, but it's also
[01:18:18] Yeah.
[01:18:20] Thank you.
[01:18:24] Updating UI depending on the state.  I'm still going to...  To me, this still falls under 4.  Like, you...
[01:18:31] It depends. Updating the state and the UI dependent state is a client-only interaction, unless it's not, and that's number four. So...
[01:18:38] Yeah.
[01:18:41] Thank you.
[01:18:44] Thank you.
[01:18:45] Right. But like leave and leave...
[01:18:51] Revisit.
[01:18:52] I can happen in a,
[01:18:54] in a, on a, on a micro sense, but I think it's, it is important to talk like, because leave, you can say in the whole sense, but you can also talk about leave and revisit with like the client side navigation of going to a page and then coming back to a page.
[01:19:07] Right.
[01:19:11] I'm going to go ahead and get it.
[01:19:13] But I think we've got a good list to kind of start with.
[01:19:19] Thank you.
[01:19:21] Bye.
[01:19:23] Right. Yeah. So it can happen asynchronously, like opening to all you. That's number three then.
[01:19:29] Okay.
[01:19:30] Um...
[01:19:32] So...
[01:19:35] I think...
[01:19:36] there's a matrix to be made between
[01:19:39] these three approaches
[01:19:41] and how well they handle
[01:19:43] these activities.
[01:19:45] Thank you.
[01:19:46] Thank you.
[01:19:47] Thank you.
[01:19:48] Thank you.
[01:19:50] Right. I don't think I think they can all do some level of this.  This is not.
[01:19:56] that. It's just you have to think about
[01:19:59] you know,
[01:20:01] You have to think about, you know,
[01:20:04] what it looks like. For me personally,
[01:20:08] The easiest one to start, like this is a good list, but I think it's easier to actually start this in a different order.
[01:20:15] Um,
[01:20:17] I think...
[01:20:18] *sniff*
[01:20:19] I think we can...
[01:20:20] Oh
[01:20:21] Kind of only...  Let's just...
[01:20:23] Let's move this, let's edit the order of this list.  I'm going to order them from what I consider the simplest thing to talk about  to the least simple thing to talk about.  Client interaction seems to be the easiest to talk about.
[01:20:34] I think.
[01:20:36] And then I'm going to consider
[01:20:39] mutation the next easiest to talk about.
[01:20:44] and then navigate to a different page. I'm almost like reversing the order.
[01:20:49] probably the next easiest to talk about.
[01:20:53] And then loading the page is probably the most complicated to talk about.
[01:20:57] Um...
[01:21:01] Thank you.
[01:21:02] I don't know what to do with server initiated comms because
[01:21:09] *sigh*
[01:21:10] It's...
[01:21:11] Thank you.
[01:21:13] It requires persistence on the server, which makes it not something that we can actually...
[01:21:20] Compare.
[01:21:22] really easily.
[01:21:23] Unless you assume that
[01:21:25] persistence on the servers available and if you assume persistence on the servers available  then it looks really similar for all of them
[01:21:34] So there's...
[01:21:37] Like if you assume the infrastructure is there, then there isn't much difference.  And if you assume the infrastructure is not there.
[01:21:43] I don't, like...
[01:21:44] Thank you.
[01:21:45] I don't know what to do with this one.  This one's just going to be...
[01:21:48] We'll see if this
[01:21:51] is relevant. I'm glad that we were able to find a fifth category though.
[01:21:57] Okay, so everyone's still awake with me, right? We're still going strong?
[01:22:04] Yeah. Okay. That's awesome.
[01:22:09] *Sigh*
[01:22:16] You could do long polling, but like you're still
[01:22:21] Thank you.
[01:22:23] There's got to be something on the...
[01:22:25] other end
[01:22:31] Yeah, I mean...
[01:22:38] Yeah, I mean, Jose from LiveView actually had a good thing about this  because he was talking about one of the reasons that LiveView works so well  is because he can literally, like...
[01:22:47] ship up the VM, clone it, and like
[01:22:50] Because the elixir, he can just move it across.  So it doesn't even matter if the server gets teared down or not.
[01:22:57] Obviously there are things like durable objects in Cloudflare that make it easier for us to have it.  What I'm getting at is I think once that's present,
[01:23:06] We can all agree that there isn't much difference between
[01:23:10] on the client side.
[01:23:13] Like, like,
[01:23:14] it manifests itself
[01:23:18] as a
[01:23:19] Like once it's present, it manifests itself in the spa as a state update.  It manifests itself on a server component as a state update.
[01:23:26] And
[01:23:27] Here, it's the mechanism that it works on.
[01:23:30] So like
[01:23:32] Yeah.
[01:23:39] Load a page fault and carnivore in communication.
[01:23:41] Yeah, it does.
[01:23:44] Thank you.
[01:23:45] But I'm specifically...
[01:23:50] Like, what I'm talking about here is like,
[01:23:55] I am trying to talk about committed...
[01:24:02] interaction like i am talking about mutations like
[01:24:06] Like the fact...
[01:24:08] Thank you.
[01:24:09] Yeah.
[01:24:11] Thank you.
[01:24:11] Maybe we should just get into it and then we can see if the characteristics fall apart.
[01:24:18] Thank you.
[01:24:20] Thank you.
[01:24:21] Thank you.
[01:24:23] Thank you.
[01:24:23] Thank you.
[01:24:28] - If you're initially to come to me, sockets,  maybe it doesn't matter the architecture question.  I don't think it does, except for like  where it is the architecture.
[01:24:38] Thank you.
[01:24:39] Thank you.
[01:24:41] Thank you.
[01:24:41] Right. So let's just go here. Let's start with client only interaction. Okay. So
[01:24:54] I'm just like moving across the board client.
[01:24:57] only interaction.
[01:25:01] Thank you.
[01:25:01] Thank you.
[01:25:04] Thank you.
[01:25:06] Thank you.
[01:25:07] I definitely appreciate you all joining me on this brainstorming session because it helps kind of think through stuff.
[01:25:17] Generally speaking...
[01:25:18] Thank you.
[01:25:20] Thank you.
[01:25:21] Um...
[01:25:23] I'm trying to think of how I want to arrange this because there's a lot of
[01:25:28] there's a lot of these little blocks that we're making.  Maybe this fits better in an article.  But I like being able to have this dynamics of moving around and thinking  about this stuff. So client only interaction.  Um,
[01:25:43] Thank you.
[01:25:45] uh,
[01:25:47] For a single page app,
[01:25:50] It's simple, right?
[01:25:52] ends up
[01:25:55] Updating the UI.
[01:25:57] synchronously.
[01:26:03] Generally, it's actually event, date, UI synchronously all in the browser.
[01:26:10] Right.
[01:26:12] I don't think there's really
[01:26:17] much more to it.
[01:26:25] Right. And because for spas, this UI equals function of state, essentially. I mean, this is true for a lot of these, but...
[01:26:40] Doing these client-only
[01:26:42] ephemeral
[01:26:44] Would you have it?
[01:26:45] interactions
[01:26:47] - Yeah.
[01:26:48] It's pretty good.  So if I was going to rate this between like,
[01:26:52] One being not very good and three being like,
[01:26:57] you know, very good on it.  I'm going to give single page apps a three,  just kind of like roughly say,  because this is literally what they're built for.
[01:27:05] You have an event.
[01:27:06] do some state updates, ID synchronize the UI function state. Okay.
[01:27:10] If I were to talk about server components,
[01:27:17] I don't know if there's any other considerations here, right?
[01:27:22] Because the client components, like not all components can handle this, but
[01:27:26] Like,
[01:27:27] similar
[01:27:28] to spa.
[01:27:30] in client.
[01:27:32] islands, right?
[01:27:35] So it handles this
[01:27:38] pretty well, right? Just kind of like
[01:27:40] thinking about
[01:27:41] this. If these are the things you care about.
[01:27:47] Um...
[01:27:49] Thank you.
[01:27:50] Now stateful server.
[01:27:53] Thank you.
[01:27:55] Um...
[01:28:00] This is more interesting because generally speaking, if you know how something like LiveView works, are you guys familiar with LiveView?  I'm just going to use LiveView.js because it's easier for us to visualize.
[01:28:10] But I'm sure there'll be a simple example here. Yeah, beautiful. The way LiveView works is
[01:28:17] The server, it's...
[01:28:19] render stuff.
[01:28:20] And then they put special attributes that do event delegation, essentially.
[01:28:25] It's funny because lawframers do this under the hood anyways.
[01:28:29] But you see that they put a named function.  And then basically,
[01:28:32] when you perform the event and the client, they just go like,
[01:28:36] Send it back...
[01:28:38] with the name of the event. And then because the state
[01:28:42] lives on the server, you can then go, "oh, count equals count plus one." See, this socket here, context, is like the state.
[01:28:50] This stuff happens all on the server.
[01:28:53] And essentially they have this like representation of your app on the server.
[01:28:58] The event fires from the client, which then
[01:29:01] updates the state on the server, which renders the part on the server that changed. In this case, they can be like, oh, count changed. And they basically do like a BDOM diff, essentially, and then realize that, oh, I only need
[01:29:13] to send down this portion of the UI, patch this location,
[01:29:21] with
[01:29:22] this new text value or whatever in their kind of diff format,  and then the client updates, right?  So it's a very clean model,
[01:29:32] you know,
[01:29:33] It's as simple as a spa almost. You can put your use state here
[01:29:38] event handlers render. The only
[01:29:42] Thing is...
[01:29:43] This happens on the server.
[01:29:44] So...
[01:29:45] uh,
[01:29:48] Ephemeral state.
[01:29:50] is...
[01:29:53] more difficult here, right? Because
[01:29:57] The characteristic here is you don't want to go to the server.
[01:30:00] How do you solve this with Staples Service?
[01:30:02] You have a couple options, right?
[01:30:05] You can either, you know,
[01:30:07] A, run it.
[01:30:09] through the server.
[01:30:10] unnecessary, like...
[01:30:12] server, which isn't what you don't want to do.
[01:30:15] or B
[01:30:16] require secondary mechanism.
[01:30:22] Uh...
[01:30:23] Thank you.
[01:30:24] you know, kind of like a JS escape hatch.
[01:30:29] I mean, every framework has escape hacks, but it's kind of like on the same level as using useEffect with a ref.
[01:30:36] you know, with React and kind of getting out of the model.
[01:30:41] It's not inherent to the model. You can obviously solve for this.
[01:30:45] Um,
[01:30:46] but
[01:30:48] Essentially, you have to step out of the framework or you have to be given a second approach.  HTMX has, what is it called?  Hyperscript to try and describe some stuff.
[01:31:00] And I think Phoenix has something with like a
[01:31:05] that tells what classes to apply or whatever.  But the key part is...
[01:31:11] The secondary mechanism is not tied into the state of the application on the server, so to speak. Like it's
[01:31:16] It's a kind of separate imperative API.
[01:31:19] So I think...
[01:31:22] Like you can kind of see if you're building something that was only client only interactions,
[01:31:26] this wouldn't be really where you would want to be.
[01:31:33] Thank you.
[01:31:35] Thank you.
[01:31:35] All right.
[01:31:38] With me still?
[01:31:39] Thank you.
[01:31:41] Alright.
[01:31:44] Thank you.
[01:31:45] Okay, get some water.
[01:31:50] Thank you.
[01:31:51] Thank you.
[01:31:53] Thank you.
[01:31:54] Thank you.
[01:31:59] Yeah.
[01:32:02] Thank you.
[01:32:03] you
[01:32:04] Bye.
[01:32:09] Okay, so we're going good so far. Okay.
[01:32:13] Let's go to committed interaction.
[01:32:18] Thank you.
[01:32:20] I think that's what I'm going to call it, committed interaction. I don't know.
[01:32:23] Committed mutation, what did I call this?
[01:32:26] committed. What I mean is this goes to the server committed interaction.
[01:32:32] All right.
[01:32:34] Thank you.
[01:32:35] Thank you.
[01:32:38] Thank you.
[01:32:39] All right. Now, this is when we actually go to the server and save something.
[01:32:48] Um,
[01:32:50] let's
[01:32:52] put these same categories here. I think this is where it gets a little bit spicier from my opinion.
[01:32:57] from others because
[01:33:00] What does a committed interaction look like from...
[01:33:04] single page app.
[01:33:07] This is tricky because developers don't do optimal stuff.
[01:33:11] Generally speaking,
[01:33:15] Thank you.
[01:33:20] Right? But like in a single page app, would you...
[01:33:26] Send a post request.
[01:33:29] And the most simple interaction, like you're just on the page, is you can send a post request and you get the data.
[01:33:38] that you're missing.
[01:33:40] You get...
[01:33:41] You hit like and you get the like count back.  You add a to do and you get just that to do back.
[01:33:49] This is how we used to build APIs. When you performed an update operation, you get the one item back. When you add an item, you get the item back with the new database ID.
[01:33:58] That is the most basic
[01:34:01] to that, right, which is
[01:34:03] post
[01:34:07] Thank you.
[01:34:08] to provided data.
[01:34:14] And then
[01:34:15] Okay.
[01:34:17] update.
[01:34:18] Date.
[01:34:19] in the client, right?
[01:34:22] Well...
[01:34:27] Now, we do a lot of, a lot of people do a lot of way more  in an optimal stuff.
[01:34:33] Like we do a post, get the thing back and then go, okay, what do we need to refetch? You know,  and then we go, let's refetch the whole list. This way we don't have to worry about updating  the state in 10 different places.
[01:34:44] or not even 10, so we go through the process of revalidating things. And in a lot of cases, if you can do granular revalidation, it's not actually that bad. It's not as efficient as what I put here, but like,
[01:34:57] tan stack query
[01:35:00] mentality
[01:35:02] exists.
[01:35:03] But double waterfalls are bad.  So you can solve that with single flight mutations.  But I-- you know, but that's still--
[01:35:09] an extra bandwidth potentially,  but what I'm so like,
[01:35:15] Thank you.
[01:35:17] Not always completely.
[01:35:20] optimal.
[01:35:22] I'm not doing this to bang it, hand stack query.  I like hand stack query.  I just want to point it out there.  But like, there's also GraphQL on the client.
[01:35:29] which can do granular, normalized diffing if you want to.  There's different solutions,  but at the core of the fundamental core of the technology,
[01:35:39] I actually don't think Baws are...
[01:35:43] bad here because you literally can send
[01:35:46] exactly what you need to send and get back exactly what you need.
[01:35:50] Obviously,
[01:35:53] we have ways to kind of make it
[01:35:57] Um...
[01:36:00] you know, more optimal or less optimal.  And I'm gonna talk about that later.  I actually have a new proposal for Solid's actions  that can get us back to bridge the gap  to where we can do handwrite optimal updates  without sending back all the data.  I was doing that Trello demo,  and while it was very impressive, Jose did have a point.
[01:36:22] We sent back all the data, and I think that's good default behavior.
[01:36:26] But we can definitely make our actions not always send back all the data so that from that perspective,
[01:36:35] There is no downside compared to...
[01:36:38] what he was doing in his Live View version.  And that's like fundamental--  this is not fundamental to the architecture at all.
[01:36:46] It's just a matter of like it's still post
[01:36:50] get data back update state.
[01:36:52] I know. People might not agree with me, but...
[01:36:55] I actually don't see any issue there.
[01:36:59] And if we're talking server components, well,
[01:37:02] Client.
[01:37:03] interactions
[01:37:06] can be like this.
[01:37:07] But...
[01:37:09] Thank you.
[01:37:10] What about data?
[01:37:12] in server.
[01:37:14] But what about data insert?
[01:37:17] in SCs, right?
[01:37:19] like in the server component part of the stuff.
[01:37:28] Thank you.
[01:37:30] Thank you.
[01:37:36] Thank you.
[01:37:38] Because I learned a few weeks ago that Remix single fetch feature doesn't actually influence the image. Okay, that's interesting. I wonder what they're using it for.
[01:37:47] Because like grouping, you can group all the fetches together into a single fetch.
[01:37:53] But it makes it trickier for them to be separately cacheable
[01:37:57] See, I mean, I was kind of like, posts are tricky too, being cacheable, because you post and then you get.  I guess the thing is...
[01:38:04] I think this is where the conflict is. If you want to use like the CDN cache,
[01:38:09] You need the separate get from the post because you can't cache a get.
[01:38:12] Whereas like
[01:38:14] If the grouping of the single fetching is always together, so you say like this page has this grouping of stuff, you can still see the end cache, that particular combination, but it doesn't help you with fine grained updates and revalidation.  So it's like...
[01:38:30] Yeah, it's kind of a miss. It depends what you're optimizing for. I mean, it's fine if you're just trying to do the CDN thing, but
[01:38:36] You know me, I like optimizing for the like super granular.  I like keeping costs off the server.
[01:38:45] Right. And then that combination becomes the unique cash flow thing instead of each individual one.
[01:38:52] I think that's probably the argument.  Honestly, mechanically, this makes zero...
[01:38:56] Difference?
[01:38:57] splitting versus not splitting here does not actually mechanically do anything.  I thought about this.  Dan Abramoff was trying to convince me of this.  Unless you hit the maximum number of connections,
[01:39:06] then this actually doesn't do anything mechanically.
[01:39:09] Like it doesn't...
[01:39:11] Yeah.
[01:39:14] Anyway.
[01:39:15] -
[01:39:16] But my point is, if you update data and it's responsible, like say, for rendering the part that's like updating the data that's like not in the interactive zone.
[01:39:26] then
[01:39:27] this becomes a much different scenario because
[01:39:34] Like, sure, in the small, like, the whole point of this architect, like, you could make your whole page a spa.
[01:39:40] in here, in the surface-mode architecture, and then you're fine.
[01:39:43] but
[01:39:45] Mm-hmm.
[01:39:45] But that defeats the point, then you just have a single page app.  If you're actually trying to offload the work to the server to get the benefit, you know, on page load and stuff we haven't talked about yet.
[01:39:55] You're going to put...
[01:39:56] do it so you don't have to send a lot of that data to the client, but it means that when a mutation happens,
[01:40:02] you are in this zone where
[01:40:06] You need to
[01:40:09] Thank you.
[01:40:11] at baseline, you're not just sending the data you need, you're actually sending
[01:40:16] Arguably...
[01:40:17] the HTML
[01:40:19] for you and the data you need for the client components
[01:40:25] maybe it's a subset of that data.
[01:40:28] Or maybe the whole page, maybe the whole partial, maybe the whole section.
[01:40:31] Right? You're sending data plus template. We're going to be using these terms a lot. Code data template. I'm going to
[01:40:38] define these as the code being, you know, JavaScript code. It could also be assets like CSS or whatnot. The data,
[01:40:46] which is like the actual like unique data JSON you need.  And the template is the,
[01:40:54] The static part of the HTML,
[01:40:57] that you need to
[01:40:59] put it together. Now, don't get me wrong, when you do rendering on the server, you're actually sending the completed version of the HTML, which, from my perspective, is the template plus the data.
[01:41:09] So every time
[01:41:12] There's a difference between, say,
[01:41:15] having the template live in your JS and you send it once as part of the code, and then you get the data to fill in the holes and, and
[01:41:22] on every interaction sending the HTML, which means you're resending the template over and over again from a bandwidth standpoint. So for
[01:41:30] So what I'm getting at is in this case,
[01:41:33] your template
[01:41:36] plus data from a bandwidth standpoint.
[01:41:41] And
[01:41:42] If...
[01:41:43] If you're hitting a singular...
[01:41:46] Endpoint that singular piece you're you're not you're you have to pull in all the data and
[01:41:52] for
[01:41:53] every piece of data,  like let's say you,  you realize that,
[01:41:57] you've updated one thing. Well, because you're re-rendering it all,
[01:42:02] If you're stateless, you actually have to pull the data now
[01:42:05] from all the different data sources to be able to completely render that HTML partial.
[01:42:11] So
[01:42:12] Um,
[01:42:13] You're also like rendering...
[01:42:16] pulling all the data.
[01:42:20] This is why caching is so important in these architectures,  like Next.js and whatever, because on a single-page app,
[01:42:28] you only ask for what you don't have and get what you don't have.  So like,
[01:42:34] you only get what you want. But with this kind of architecture,
[01:42:38] you basically have to always grab everything. So without caching to guard here,
[01:42:44] you're basically always doing more work on the mutation.  It's just, it's like the physics of it, so to speak.
[01:42:54] So,
[01:42:56] you
[01:42:57] Cashing can leave...
[01:43:00] alleviate
[01:43:02] alleviating. But my point is,
[01:43:05] For me, this is a 1.
[01:43:07] Right.
[01:43:14] Thank you.
[01:43:15] Right. We're not at load yet.
[01:43:21] Right. Oh, you guys talking CSR again?  You guys, have I lost you all?
[01:43:26] Okay.
[01:43:28] So...
[01:43:30] And then finally...
[01:43:33] Thank you.
[01:43:33] Thank you.
[01:43:34] What's her last one? Stateful servers?
[01:43:39] Um...
[01:43:41] What are we doing here?  Stapletor is a...  I think...
[01:43:45] Pretty easy here, right? If we look at our live view example,
[01:43:50] update the thing.
[01:43:52] Render the thing you need on the server.
[01:43:56] I don't know how granular the re-rendering is,
[01:43:59] assuming it's like component level,
[01:44:01] It could suffer.
[01:44:03] But because they're preserving the state on the server,
[01:44:07] Um, innately.
[01:44:09] You could argue that like
[01:44:11] It's like when a React component re-renders, you have the previous state, you don't need to like
[01:44:15] Catch it again.
[01:44:17] So,
[01:44:18] And then what it sends back is the granular update, like here, update this, add these divs, you know, like it sends back a fairly optimized payload.  It's arguable whether the optimal narrowness of that of being HTML versus JSON is better or worse, it's serialization format. But I think from my perspective, it's a coin toss, right? Like it doesn't really matter. Like,
[01:44:41] It...
[01:44:43] You know, it's simply...
[01:44:46] It's--
[01:44:48] it's basically...
[01:44:50] Event, state.
[01:44:53] UI async.
[01:44:55] You know, it's like the mirror of this one.
[01:44:58] So
[01:45:00] These guys, I'm going to give a three.
[01:45:02] here for Staple servers for committed interaction.
[01:45:05] Right.
[01:45:07] All right.
[01:45:09] Thank you.
[01:45:10] We're still good.
[01:45:12] Thank you.
[01:45:13] Thank you.
[01:45:17] Thank you.
[01:45:18] Thank you.
[01:45:23] Thank you.
[01:45:23] You should put subway surfers in the corner. Are we still talking about offline first?
[01:45:30] Sorry, chat, you guys are really going off on the single flight mutation thing still, okay.
[01:45:35] Okay, so let's go to the next section here. What do we got? We got
[01:45:39] navigate to a different page.
[01:45:43] Thank you.
[01:45:47] Thank you.
[01:45:48] Thank you.
[01:45:48] Thank you.
[01:45:52] Thank you.
[01:46:01] - I'm, this is my holistic scoring.  I don't care about DX, if I've ever made that clear.  This is about mechanically
[01:46:11] performance characteristics, capability of delivering on these
[01:46:16] features,
[01:46:18] I
[01:46:20] in terms of within the scope of the architecture of the tool, as I said,
[01:46:26] If.
[01:46:27] Like...
[01:46:28] giving LiveView or StapleService a one and client only interaction.  Yes, you can solve it by importing jQuery, but that's not
[01:46:35] that's kind of like outside the scope of the tool. You can argue that's ergonomics, but I think that's philosophically on the outside. Right. And
[01:46:43] here when I'm talking about this, this is, you could argue that necessary caching is no different than necessary staples servers here. So like you could argue that this is like not really a pull, it's just kind of a trade off here. But
[01:46:55] Fundamentally, this executes everything.
[01:46:59] And
[01:47:00] renders everything and ships everything.
[01:47:03] It's the only one that has to do that.
[01:47:05] in this category where these two
[01:47:07] Um, don't.
[01:47:11] Right.
[01:47:13] Thank you.
[01:47:15] Thank you.
[01:47:17] I hope that makes sense. I mean, this is my opinion, but this is basically how I'm attacking this.
[01:47:26] Okay. And when I say spa, I mean the general sense. I'm also talking about
[01:47:30] I'm talking about the SSR spa, so to speak, or single page app.
[01:47:34] I'm not talking about
[01:47:35] I'm that's kind of like a given in this comparison from my perspective.
[01:47:41] So how does it work in a single page app when you navigate?
[01:47:45] code splitting,
[01:47:47] generally speaking, so you don't have all the JS up front.  So when you go to the new page, you have to load the JS and you fetch the data.  And generally speaking, almost all route frameworks do this thing where they parallel
[01:47:59] parallelize the code.
[01:48:04] Data fetching.
[01:48:07] And then, um,
[01:48:15] the templates in the code, so to speak.  So essentially the first time you hit a route first time,
[01:48:23] you get
[01:48:25] template,
[01:48:29] Plus...
[01:48:32] data,
[01:48:34] Plus
[01:48:36] code, right? And then subsequent
[01:48:40] times
[01:48:42] You just...
[01:48:45] You.
[01:48:46] Get
[01:48:48] data.
[01:48:49] Right.
[01:48:51] There is...
[01:48:54] Thank you.
[01:48:55] Thank you.
[01:48:56] some overhead arguably, you could say, of rendering on the client.
[01:49:01] But what's interesting is
[01:49:04] if the code, especially subsequent times, the code's already there,
[01:49:08] it can render ahead of time of getting the data and fill in the holes. This is
[01:49:12] maybe like a suspense type thing. But what I'm getting at is
[01:49:18] The cost of rendering the HTML on the client versus not, unless the size of the page is immense,
[01:49:25] is not
[01:49:26] going to be much of a detractor here um
[01:49:31] This is why we do stupid stuff.
[01:49:34] the...
[01:49:36] Okay, like the actual physical rendering of the DOM elements
[01:49:42] I mean, you can basically test this theory by taking inner HTML something versus like how long it takes to like framework render it.  It.
[01:49:51] It's funny because I saw this all the time with streaming. Because streaming, SSR, we'd actually bring in large chunks of HTML and drop them in the browser.
[01:50:02] when I used to compare the timings of these and the overheads, especially in Lighthouse, you saw that the page rendering didn't actually, like,
[01:50:09] Streaming
[01:50:11] The amount of work the browser had to do at the point that the stream did the chunk
[01:50:15] almost
[01:50:16] even like giant pages generally
[01:50:20] was awash with the effort, the processing time for actually rendering with the framework on the same page.
[01:50:27] I mean, take that where you're with with a grain of salt, but I just want to kind of put that out there.
[01:50:35] Right. People can make waterfalls, but it's again, not inherent.
[01:50:40] to the architecture.
[01:50:43] Right?
[01:50:47] yeah yeah i don't pay if you're talking about like full page reloads we that's the last category
[01:50:56] Thank you.
[01:50:57] So...
[01:51:03] Thank you.
[01:51:05] I'm
[01:51:07] I'm...
[01:51:08] If you think about this...
[01:51:11] I'm going to give this a three as a baseline.  We can come back to it and see if we think differently, but...
[01:51:18] There's no inherent waterfalls here.
[01:51:23] Right, because you get
[01:51:25] Essentially, you parallelize all the data fetching from the knowledge from the first bundle. This is the cost of the first bundle.
[01:51:31] And then
[01:51:32] After the first thing, you get a more optimal payload as time goes on.  OK, let's look at server components.
[01:51:44] When navigating with server components,
[01:51:48] Um,
[01:51:49] we don't have to worry about like manually parallelizing a hoisting because  you only just request the next page. Right. So it's like,
[01:51:58] single request
[01:52:00] for next page, which is nice.
[01:52:03] You just go, get me this page.
[01:52:06] However, the client isn't aware generally of which
[01:52:10] islands it's going to need on that next page yet.
[01:52:14] Right.
[01:52:15] guess it's possible you could serialize it into the the page manifest generally that goes against the whole idea of not
[01:52:23] you know,
[01:52:24] not doing so like
[01:52:27] it's kind of an interesting conflict because
[01:52:30] You don't actually know...
[01:52:32] Because a server can change which islands get drawn,  which server can put it on.  You don't actually have the code.  Like, sure, you get the JSX HTML back to render it,  but you actually don't know, like...
[01:52:41] you have to hydrate those client components when you render them.  You have to like,
[01:52:44] render them even actually with server component architectures, because they can rely on client context state, you can't actually render the client components on the server after the initial load. So here you actually have to load the client components, you have to go to the server, like essentially server fetch
[01:53:02] Patch.
[01:53:04] Like, um,
[01:53:06] static
[01:53:07] Or like,
[01:53:08] Server components.
[01:53:10] Thank you.
[01:53:12] Which means it's basically data.
[01:53:15] our template plus data.
[01:53:19] Stata.
[01:53:20] Then waterfall...
[01:53:23] Fetch code.
[01:53:28] to render islands.
[01:53:32] Right? We have this characteristic on the initial page load where you get the HTML back first and then you get the JS.
[01:53:38] Right.
[01:53:40] Thank you.
[01:53:41] Thank you.
[01:53:42] And
[01:53:43] What's interesting, that's first time.
[01:53:46] subsequent
[01:53:49] subsequent times, you
[01:53:53] don't have to worry about you already have the code so you don't have to worry about it
[01:53:56] But you just get template.
[01:53:58] Plus...
[01:54:00] data every time, right?
[01:54:03] So you save the waterfall, but initially there's a waterfall.
[01:54:08] and subsequent times you do both, which kind of fits into what I was talking about here in terms of bandwidth.
[01:54:13] with here.
[01:54:16] arguable, like I'll consider it a wash the difference between client rendering and having extra bandwidth to render on the server.
[01:54:22] Um,
[01:54:23] But...
[01:54:25] Yeah, it's kind of an interesting problem with this waterfall. Now,
[01:54:30] Thank you.
[01:54:31] What can we solve this to do this?  One thing we can do.
[01:54:43] But there's a waterfall you're asking.
[01:54:45] New page and that page is served as a module from the server, asks for new data that causes a new fetch.
[01:54:51] So which waterfall are you talking about?
[01:54:56] Thank you.
[01:54:59] Thank you.
[01:55:03] Thank you.
[01:55:07] - Does browser caching affect client-side routing  once you have the code splitting happening or sponsoring?  No, that's what I'm saying for client-side,
[01:55:14] you afterwards, because the code's already cached,  you already have the code and template.  So subsequent times you only need to get the data
[01:55:21] where on
[01:55:22] a server component subsequent time, you actually have to render the whole output again, but you won't have to load that much smaller code bundle each time and you get rid of this waterfall.
[01:55:34] So
[01:55:34] Interestingly, preloading... See, I was going to give this a 1.
[01:55:38] Right.
[01:55:39] This is just...
[01:55:41] fundamentally just
[01:55:43] worse, you're sending more stuff, you're causing a waterfall,
[01:55:47] But because preloading
[01:55:49] gets you around the code fetch, like if you hover the link and then they can fetch the code ahead of time to get rid of the waterfall.
[01:55:56] I'm gonna give this...
[01:55:59] A two.
[01:56:00] It's only slightly worse than SPA navigation.
[01:56:05] right
[01:56:10] Thank you.
[01:56:11] Thank you.
[01:56:12] But...
[01:56:14] Yeah, I'm going to say, yeah.
[01:56:16] preloading
[01:56:18] helps a lot.
[01:56:21] necessary, basically.
[01:56:24] So necessary caching, necessary preloading.
[01:56:28] I mean, if you understand this, you start understanding why Next looks the way it does.
[01:56:34] Right?
[01:56:36] Like the app directory, okay.
[01:56:41] How about stateful servers?
[01:56:45] Thank you.
[01:56:46] One thing you're going to notice about staples servers, I think, throughout this comparison is...
[01:56:51] Yeah.
[01:56:52] Thank you.
[01:56:53] Since is just how simple the model is, because since they arguably don't need any more JS here because they don't have interactive components, they all handle on the server side, like basically the same things that penalize them over here.
[01:57:06] act as a straight here because there's no extra JS, right?
[01:57:10] They don't have to worry about this code waterfall because there's just no code to load.
[01:57:15] Right.
[01:57:16] You could...
[01:57:17] you know,
[01:57:19] You could, it'd be fair to argue, I guess, with a single page app.
[01:57:24] Loads more JS.
[01:57:26] But because usually the data fetching is the bottleneck,
[01:57:30] on a single page app, I'm not going to really think like usually you when you parallelize, you send it up for the code and you send up for the data and it's actually the data that's the bottom neck the code is cache and the CDN even
[01:57:41] even if you haven't loaded it before in your browser.
[01:57:45] Um,
[01:57:46] I'm gonna say when I'm looking at staples servers, yeah.
[01:57:52] they will send
[01:57:54] Uh...
[01:57:56] Template.
[01:57:57] plus
[01:57:59] Data.
[01:58:02] Always. But...
[01:58:04] No JS is a benefit. So like they take a hit here, but they balance it out here.  I'm just going to give them three on the level because I think it's essentially like
[01:58:14] one trade-off for the other trade-off.
[01:58:17] Right?
[01:58:20] But mechanically, I mean, it's
[01:58:22] You go to the next page.
[01:58:25] You have the socket already open. You just
[01:58:27] tell it what HTML is.
[01:58:29] It needs it's basically like the mutation case.
[01:58:33] that we were doing here.
[01:58:35] at a sub-level.
[01:58:38] So there's not really much difference here from the staples error perspective between these two interactions.
[01:58:45] All right.
[01:58:47] Thank you.
[01:58:48] Let's do...
[01:58:51] Um...
[01:58:55] Right. Yeah, yeah, exactly.
[01:58:59] Thank you.
[01:59:00] Thank you.
[01:59:02] Thank you.
[01:59:04] I mean, this is why Next has had a lot of challenges, right?  They've been really trying to figure it out.  Basically...
[01:59:13] You could argue that a user is a key to that cache.  So yes, in some cases, it might mean a different cache entry for everything.  Like you're approaching statefulness constantly.
[01:59:23] pretty quickly here.
[01:59:25] Um...
[01:59:26] Thank you.
[01:59:29] So
[01:59:30] Yeah, it is an interesting...
[01:59:34] piece right this is why there's been so much focus on next in cash because like it's basically  fundamental to it
[01:59:42] Okay, let's go do.
[01:59:46] the last category here. Because as I said before, looking at this now,  I think that fifth category we were talking about,
[01:59:53] is doesn't matter between implementations. It's basically the same thing.
[01:59:57] load initially.
[02:00:01] Right?
[02:00:04] All right, just going to put load page, whatever. Okay. So let's, let's get started here. Now,
[02:00:12] So far, if you've noticed, single page apps have had a perfect score.
[02:00:16] there's no way they get a perfect score in this category. Um,
[02:00:21] Thank you.
[02:00:22] Right.
[02:00:23] There's just no possible way.
[02:00:27] Okay.
[02:00:29] Right.
[02:00:31] Like,
[02:00:33] all the JS. I mean, it can be code split, but like all JS.
[02:00:38] Um...
[02:00:40] With SSR...
[02:00:42] Double...
[02:00:44] data double
[02:00:45] template,
[02:00:50] Right, 'cause you send the data both as JSON and as
[02:00:54] in the HTML encoded you send the template both in the code
[02:00:58] And
[02:00:59] in
[02:01:00] The HTML encoded.
[02:01:02] And you have all the JS logic for
[02:01:05] you know, all the components, but this is just
[02:01:08] *laughs*
[02:01:09] Yeah, this is everything. See, the reason I don't consider the JS overhead that much here is because most of the JS code
[02:01:17] you know, it framework can often, I'm getting it depends how it's authored, can also, it's often  the templating code, right? Have you ever like gone into like Solids Playground?
[02:01:27] And, uh,
[02:01:30] you know, obviously logic here makes up space, but what I'm getting at is, as your page gets larger, the thing that actually grows the most
[02:01:37] are
[02:01:38] these template elements. I think attaching the bend handlers, arguably,
[02:01:42] as well, but over this size is
[02:01:46] is giant. Like right now it's just a button, but
[02:01:50] the, you know, this is the thing that scales with the size of your app.  Everything else here, this scales with interactivity, right?  If there's nothing interactive on your page,
[02:02:00] Um,
[02:02:02] You know, so like all things fair comparing server components to a spa.
[02:02:06] For example,
[02:02:07] then
[02:02:10] I mean, if you think about it, then you don't have...
[02:02:14] this code either
[02:02:16] What are you rendering?
[02:02:17] Like,
[02:02:21] That's f-- this is the-- like, if you're treating it under the same use cases,
[02:02:28] The code...
[02:02:29] that scales without interactivity is just the template.  So I'm not penalizing the JS so much for it.  Like if I add like
[02:02:37] a div around this.
[02:02:41] and close the dev
[02:02:46] and then add you know h1 and get the thing that's going to keep on growing is this
[02:02:53] not the size of my interactivity of the component. This is literally just a call function.
[02:02:59] So,
[02:03:01] Thank you.
[02:03:02] It's worth a call out when comparing a certain degree between server components and single page app type art mentality is that
[02:03:11] The template code is a lot of the JS code.
[02:03:15] Um,
[02:03:16] so to speak.
[02:03:17] Obviously, if you have advanced logic,
[02:03:21] and you bring it in, then that will make the client larger.
[02:03:24] But if you also
[02:03:27] put that logic
[02:03:30] to the server using like server function, you also have a way of alleviating that, so to speak. Like there's different mechanisms.
[02:03:37] for leaving, aiding that even in a single page app.
[02:03:41] Um,
[02:03:42] framework.
[02:03:43] Okay.
[02:03:44] But yes,
[02:03:45] Thank you.
[02:03:47] *breath*
[02:03:48] Yeah.
[02:03:50] Yeah, I mean, there's not much to say here. There's just no winning.
[02:03:58] Thank you.
[02:04:00] Yeah.
[02:04:04] You have a syncy feeling that Staples' series is going to come off top here?
[02:04:08] Well, the thing is,
[02:04:10] Maybe they should.
[02:04:12] Because the one...
[02:04:13] I'm just...
[02:04:14] Let's keep on going.
[02:04:16] Server components.
[02:04:20] Talk about server components.
[02:04:22] I'm just giving a score between one and three, like three is the best. It's very arbitrary, holistic view, looking at not DX so much, but looking at the mechanics from architecturally within these sort of architectures that we've been focusing on throughout the stream.
[02:04:46] I bundle a lot of these things under the same categories where some people say, oh, these are different things.  I'm grouping them in a way that I think is logical from mechanically how they work.
[02:04:59] Yeah, no, I've been just doing it on three.
[02:05:02] And what it does is it lets me say, like, I don't really know.  It's hard for me to articulate how much better something is.  So three gets like the biggest one is three and one means like way better.  But this gives us a place to say this is two.  This is a little better.  This is a little worse.  It's a little relative scale, which makes it.
[02:05:20] Less than a perfect science because not all of these are weighted equally in importance, especially depending on the type of app you have.
[02:05:26] If we had five, maybe this would be more...
[02:05:31] extreme. I mean, we could
[02:05:33] We could try and rescore these to five afterwards, but let's continue here. Server components.
[02:05:41] So the funny thing about server components is,
[02:05:46] Less JS, sure.
[02:05:48] but there's still double data because of the serialization format.
[02:05:52] Thank you.
[02:05:53] And there's still double data and double Hamlet funnily enough. Not all the data, double
[02:06:01] Actually, quite often, all the data, actually. Double data, double template.
[02:06:06] Um,
[02:06:07] Ironically,
[02:06:08] Thank you.
[02:06:09] Like, less.js runs.  So, yeah, so...
[02:06:12] All JS, so this is load and then all JS runs.
[02:06:18] Thank you.
[02:06:19] Less JS runs.
[02:06:22] But...
[02:06:24] Generally speaking,
[02:06:27] I'm going to say, like, I benchmark this.  If you've seen my talk, the front end existential crisis,  I'm only going to say that server components are an incremental improvement
[02:06:37] over a single page app. And to be fair,
[02:06:42] Yeah, I mean, I'm just going to put that as a baseline.
[02:06:45] Okay.
[02:06:47] Thank you.
[02:06:48] There isn't really much else to say here, I think. And then staple servers.
[02:06:56] This is interesting because there's nothing to hydrate.
[02:07:01] Is there? They just need to basically attach their event delegation system, right?
[02:07:07] Vent delegation done.
[02:07:09] If that sounds familiar to you, there's another approach, the resumability that does this as well. So event delegation,
[02:07:17] is only hydration
[02:07:19] Really?
[02:07:20] There is this like long wait up time with the web socket connection. I know you can HP2 back, but it was noticeable when we were testing stuff with LiveView. We could tell that there was a, there was that time period, but
[02:07:34] I'm going to throw out there, and I don't know if LiveView already does this,
[02:07:37] but they could, so architecturally this is a thing, they could use event recapture the same way we do during hydration with Solid and React, and just play back those events.
[02:07:46] And
[02:07:47] Thank you.
[02:07:48] The connection time versus the hydration time is probably comparable.
[02:07:52] And they don't need
[02:07:55] They have like
[02:07:56] way less JS.
[02:08:01] No double data.
[02:08:03] No double...
[02:08:04] Thank you.
[02:08:05] No double template because they don't need to send that stuff.
[02:08:09] So, like, I...
[02:08:13] Thank you.
[02:08:14] I mean, how is this anything but a 3?
[02:08:17] Right? Like...
[02:08:18] Even if there was a delay hooking up the socket,
[02:08:22] The same tricks that we use to mitigate, you know, progressive enhancement, all the stuff we use to mitigate hydration still works here.  So...
[02:08:30] Yeah.
[02:08:32] I gotta get them a thing.
[02:08:35] Thank you.
[02:08:38] If you don't SSR, there's no point of a random replay. Sure. But if also I'm comparing these to SSR if if if if maybe my I'm talking SSR SPA if I was not talking SSR SPA.
[02:08:49] the client side app would do good here.
[02:08:52] do good here,
[02:08:54] Do good here.
[02:08:55] This would be like, if there was a zero,
[02:08:59] If there's a minus one, I would...  I would...  I would...  Like...
[02:09:05] Yeah.
[02:09:09] Anyway.
[02:09:11] That's basically my graph.  Can we tally stuff up?
[02:09:14] Let's see where we ended up.
[02:09:18] Totoroos.
[02:09:20] Thank you.
[02:09:21] SPA, we have 3, 3, 3, 1.
[02:09:26] Respectable pin, server components,
[02:09:31] Bye.
[02:09:32] 3, 1, 2...
[02:09:35] Fairly to.
[02:09:38] um two so
[02:09:42] I'll give it two, so eight.
[02:09:46] Now this is equal weighting, right?
[02:09:49] Thank you.
[02:09:49] And state...
[02:09:51] full server
[02:09:54] One, three, three, four.
[02:09:58] Three.
[02:09:59] What do you know?
[02:10:01] Pen.
[02:10:03] All right.
[02:10:06] Thank you.
[02:10:08] Thank you.
[02:10:09] Thank you.
[02:10:10] So, you know, I don't...
[02:10:15] Obviously, some applications care about page load the most.
[02:10:19] Some applications
[02:10:21] are incredibly interactive and probably care about this part the most.
[02:10:28] This doesn't show all that much because all I'm saying is that
[02:10:31] The thing that dedicates the most towards its side ends up, if all things are treated equally, end up being the best.  And the thing that compromises in the middle ends up.
[02:10:42] you know,
[02:10:43] being a bit more leveled in certain places,  but ends up...
[02:10:47] Ultimately,
[02:10:48] if all things are equal, not being the least, you know,
[02:10:55] Thank you.
[02:10:58] Thank you.
[02:11:00] Is it any iron that DX5 scored lowest and boring came out on top?
[02:11:06] I mean...
[02:11:08] Not, I don't think so.  I mean, I would argue here  from a developer experience standpoint,
[02:11:14] that
[02:11:17] when I consider all these use cases,
[02:11:24] Like, you can see how little I had to write here.
[02:11:29] And you can see that here we start getting more here, but this stayed kind of simple.
[02:11:37] Stateful servers might have a win from just...
[02:11:41] how straightforward
[02:11:43] the pure DX aspect is. There's more complications here. Clearly, server component model has the most considerations because it's juggling both sides of things.
[02:11:52] But also, as I said before, staple servers are basically a non-starter for probably the vast majority of people building sites and apps.  So it's like the thing you don't get to use, but it is interesting.
[02:12:09] And here is the question, right?
[02:12:13] Do these things have room to grow within...
[02:12:18] the
[02:12:19] mechanisms
[02:12:22] of
[02:12:24] of their model.
[02:12:26] because I gave SPAS a 1 here.
[02:12:29] But...
[02:12:30] we can definitely...
[02:12:33] get rid of all JS and all JS runs.
[02:12:37] Double data and double template.
[02:12:40] is
[02:12:41] kind of inherent to us. I don't think we can actually solve that.
[02:12:44] But...
[02:12:45] if
[02:12:46] We fix this.
[02:12:49] I wrote these two to be similar for a reason because you could argue
[02:12:54] that
[02:12:55] some type of optimal hydration, like what QUIC does,
[02:12:59] turns this into this. Suddenly, our spa mentality single model
[02:13:06] is basically the same as server components on initial page load.
[02:13:09] Suddenly this
[02:13:12] actually
[02:13:13] becomes an 11.
[02:13:15] Right?
[02:13:18] So, yes, there is room here
[02:13:24] So that's one place where there's room.
[02:13:28] Let's look at stateful servers. Do they have the potential to do client-only interaction?
[02:13:34] I think they do.
[02:13:35] There might be a place to combine the model. I'll talk about it later. I actually have some ideas here.
[02:13:39] So there might be a way to up this.
[02:13:43] Right?
[02:13:44] How about server components?
[02:13:48] I don't see it yet because you're already gone through the details and realized the trade-offs.
[02:13:55] I think
[02:13:56] Server components actually have
[02:13:59] They could make this...
[02:14:01] Maybe...
[02:14:03] into a 3.
[02:14:06] I think it's theoretically possible.  I've talked about this before.  I think server components have the possibility  to solve double data, double templating.  I think it's very, very hard
[02:14:14] I think there is a world
[02:14:16] where they can get to a three.
[02:14:18] That was my premise why I was so into server components a while ago.
[02:14:22] I thought it was...
[02:14:24] easier to make this a 3 than make this a 2.
[02:14:28] I now am not so sure.
[02:14:32] I think...
[02:14:34] it's probably easier to make
[02:14:39] this a three, or I think in order of easiness,  making this a two,
[02:14:46] making this a 3
[02:14:47] and making this a 2, I think is in roughly that order.  I think...
[02:14:52] Yeah.
[02:14:54] Thank you.
[02:14:56] Thank you.
[02:15:01] Thank you.
[02:15:04] Yeah, I mean, don't get me wrong. There are restrictions here, types of apps. I don't think staples servers are an option for most people.
[02:15:10] So like, I'm just talking purely architectural.  If you had infinite money and infinite machines and, you know,
[02:15:18] talk mechanically what it does.
[02:15:20] it is attractive. I think in reality a lot of people can't choose to take full servers.  The more interesting comparison here is I actually think single page app mentality
[02:15:31] might be easier to grow.
[02:15:34] The question is, it all comes down to
[02:15:38] to like
[02:15:39] page load for the most part.
[02:15:42] And
[02:15:42] As I said, like solid's already pretty optimal here.  Quick's even more optimal here, enough that I would give, say, quick bumps this easily to a two.
[02:15:52] Um...
[02:15:54] you start, you know, there's other DX trade-offs and stuff, but you start actually asking about comparing the model.  Yeah, obviously there's JS consideration, loading consideration, but fundamentally the architectures,
[02:16:07] like when it sends template and data,  I think those are fundamental parts of the architecture.  Those aren't the things that you get to correct.  Being able to be more optimal
[02:16:18] Um,
[02:16:19] around knowing to send less JavaScript. These are things
[02:16:23] that
[02:16:24] are optimizations and aren't fundamental. So there's room there.
[02:16:27] It's arguable that here,
[02:16:29] they could put the manifest for the JS components for the next page and
[02:16:34] you know,
[02:16:36] in the client, make the client bundle bigger. Like there's places where I can see trade-offs,  but then you go, those trade-offs don't make sense. And I'll say, I don't have a crystal  ball. I can't predict the future. So I can't,
[02:16:45] rule out all possible things.  But like, this was the one  that turned me off server components.  When I was like looking through this,  I realized that server components  were not what I wanted for most things.
[02:16:55] Server components are really good if you don't care about mutating...
[02:16:58] If your data, basically, if you want to take some other kind of conclusions from looking at this, let's think about some conclusions here.
[02:17:06] Thank you.
[02:17:07] from like use case.
[02:17:10] If you care about page load,
[02:17:15] Yeah.
[02:17:16] You probably don't want fa
[02:17:21] But
[02:17:23] You know, it...
[02:17:25] It could get better, right?  If that's your primary thing.
[02:17:28] Thank you.
[02:17:30] right
[02:17:33] This is like why, you know, Astro does so well on, you know,
[02:17:36] all those like web things that they always post about, right?
[02:17:41] Other observations, like obviously,
[02:17:46] Like, in my opinion, the Staples server wins, but that's not obviously an option for everyone.
[02:17:52] Interesting thing.
[02:17:53] If...
[02:17:53] your
[02:17:55] primary content
[02:17:57] changes
[02:17:59] Rarely.
[02:18:02] Server Components
[02:18:04] are
[02:18:05] attractive.
[02:18:09] or another way the phrase it is, if your primary content
[02:18:14] changes often you don't
[02:18:18] you probably don't want server components.
[02:18:25] Right?
[02:18:27] If your...
[02:18:30] Okay.
[02:18:33] heavily
[02:18:35] interactive.
[02:18:37] You probably don't want
[02:18:40] They
[02:18:41] for
[02:18:42] servers.
[02:18:44] That's like the most generic kind of conclusion you can see from this.
[02:18:52] Right. I don't know. I think everyone knew about
[02:18:55] the first and the
[02:18:58] And the second one...
[02:18:59] But I don't know if people understood that the weakness of server components is...
[02:19:04] is actually
[02:19:06] mainly around how often your main content changes.
[02:19:17] Right, you're saying if users share ephemeral state, stateful service are attractive.
[02:19:25] Yeah, I mean, it's basically...
[02:19:28] Yeah, I mean, there's certain things like, as you mentioned, multiplayer.
[02:19:33] you need stable servers.
[02:19:37] But I was, again, this comes to the question of like,
[02:19:41] architecturally
[02:19:43] That add-on
[02:19:46] can be like, you can add that to any of these architectures  without that being like that aspect of it.
[02:19:53] is just like, oh, yeah, now I have
[02:19:55] Blank plus web sockets.
[02:19:57] Um...
[02:19:59] The key here is
[02:20:02] like from a
[02:20:03] Oh.
[02:20:04] Yeah, I mean, I did maybe keep this to
[02:20:07] Like if you're going to go to WebSockets anyways, then one that has it built in looks attractive, right?
[02:20:15] Right?
[02:20:17] Thank you.
[02:20:22] I actually, how maybe heavily interactive this thing.
[02:20:27] It's not heavily attractive, it's like low latency heavily attractive.
[02:20:33] I...
[02:20:34] There's other reasons not to want Staple servers too, and there's other reasons not this. I'm just, this is kind of a...
[02:20:41] Thank you.
[02:20:42] Thank you.
[02:20:47] Yeah, I mean, it's not about...  Part of our problem is there's a lot of JS devs out there,  but I think the boot...
[02:20:53] bigger
[02:20:56] thing is like
[02:20:57] Tsk.
[02:20:58] Stuff like serverless is kind of pushing away from stateful servers, right? People trying to scale large apps, they can't afford to keep connections with everyone. Now, there are situations where that makes a ton of sense. And I know Elixir scales like mad.
[02:21:14] So like...
[02:21:15] there are potential there. So maybe yes, certain languages definitely
[02:21:20] push you there.
[02:21:21] If you try to use Node
[02:21:23] Like I know LiveJS did it, you know, and Node is fairly good at
[02:21:28] Thank you.
[02:21:29] non-blocking async.
[02:21:30] Um,
[02:21:32] But, like, I can picture...
[02:21:34] It probably doesn't hold a torch to...
[02:21:38] Um...
[02:21:39] to like
[02:21:41] you know,
[02:21:43] Elixir or whatever and
[02:21:47] I yeah, I do think there are considerations there from that kind of perspective.
[02:21:54] But...
[02:21:55] Yeah, I don't know. I can only really...
[02:21:59] This is very theoretical space.
[02:22:06] Right. But it's an interesting...
[02:22:10] Can you change the that I think this is also kind of reflective where we should be thinking because can we change these aspects like.
[02:22:17] If you care, you probably don't want to spot, right?  But the thing is, if
[02:22:21] Can spas improve their initial page load characteristics? It's possible.
[02:22:25] Right.
[02:22:28] Um...
[02:22:31] I think the other two might be harder. Is it
[02:22:35] I mean, you can come up with other systems, but within the realm, it might be difficult to improve the how like,
[02:22:43] low latency like non-async is for staple server type architectures or state first.  If primary concern is how often your content changes, like you can't control how often your content changes.
[02:22:53] So yeah, I think it's,
[02:22:55] It's interesting, right?
[02:22:58] Um, anyway.
[02:23:07] Thank you.
[02:23:08] I mean, yeah, but a lot of these architectures are not going to work.
[02:23:16] Great.
[02:23:17] with network consideration. I don't want to penalize too hard there.
[02:23:28] I think the biggest thing people don't realize  is server components are doing a lot of
[02:23:34] inefficient stuff when it comes to when they actually do the rendering on the shirt, which is not that inefficient in the scope of things. If your baseline is like,
[02:23:41] MPA. Guess what? MPA is you do something, you re-render the whole page. So who cares? You're used to that. But...
[02:23:48] Single page apps and these stateful server approaches have really optimized along the vector for change.  And I think that is kind of...
[02:23:57] where the difference is.
[02:24:00] Thank you.
[02:24:04] Spas, yeah, spas with optimistic updates work well on bad networks.  Yeah, they work decently well.  It's kind of like a mini offline first thing.
[02:24:14] bucket. So, you know, to a certain degree,
[02:24:18] Like, obviously, if you're trying to do something too big, but it will give you a little bit of leeway, right?  That's why scoring high here is good.
[02:24:25] I mean, there's so many aspects here when you consider like
[02:24:28] versioning, tearing, cacheability and stuff.
[02:24:33] This is just like one exploration.  I just wanted to kind of put it out here because I think that...
[02:24:39] that, um...
[02:24:44] Maybe single page apps have a bad rap.
[02:24:46] Maybe...
[02:24:47] It depends on what, like, maybe...
[02:24:49] Page load.
[02:24:51] is what's getting pushed here so hard, right?
[02:24:54] The thing is...
[02:24:57] If page load is everything, to be fair,
[02:25:01] It's worth caveating here that
[02:25:03] If you...
[02:25:06] Pure Islands
[02:25:09] I should add this here.
[02:25:11] Pure Islands
[02:25:13] R3 here, pretty much.
[02:25:18] they do not suffer
[02:25:21] from this. The client side routing is what makes
[02:25:26] This...
[02:25:27] challenging, right?
[02:25:29] Um...
[02:25:33] Thank you.
[02:25:34] This is why I was very interested, because you could get this 2 to a 3.
[02:25:39] Then like...
[02:25:41] That's one way to bump the numbers a little bit.  I realized conceptually because of this that I no longer like them or cared about them anymore.  This was the blow, not this.  Even getting this up to the three still...
[02:25:58] you know,
[02:25:59] still is...
[02:26:01] below the others on average.
[02:26:04] But if you care specifically about this, this is your segment,
[02:26:09] then this is like
[02:26:11] this is probably a pretty reasonable way to go, especially, um,
[02:26:17] You know
[02:26:18] If a lot of the complexity is kept out of your way, like it is in something like Astro.
[02:26:25] Thank you.
[02:26:27] Would you even, yeah, I mean, that's the thing.  I mean, I didn't put it here,  I said this would make it this negative one,  but this client rendered single page app,
[02:26:35] for all of these, except for this one where it's worse,
[02:26:39] is essentially still three throughout. Like, a single page app
[02:26:43] Maybe
[02:26:45] on average, by this grading scale, is a 9.
[02:26:49] It's still...
[02:26:51] On...
[02:26:52] the full range of operation for an application.  I'm not talking about sites.  I'm not talking about like places where you only care about this.
[02:26:59] It's
[02:26:59] it kind of averages out pretty decently.
[02:27:02] Yeah, but yeah, in
[02:27:04] In this context, I'm including SSR.
[02:27:07] But the only place that it actually makes a huge impact
[02:27:10] is here. And
[02:27:13] it's already a 1 even with SSR.
[02:27:19] Okay.
[02:27:22] Thank you.
[02:27:23] I mean, in a sense, SSR is just an optimization.
[02:27:28] to a sense. It does put other constrictions in that we have to think about, but it doesn't fundamentally change the architecture.
[02:27:37] All right.
[02:27:39] So I don't know. It's interesting.
[02:27:48] How we doing chat?
[02:27:49] You've missed so much. You have.
[02:27:54] I don't know. I think there's hopefully some hidden gems in this. And hopefully when we go back to this original table, you can kind of see
[02:28:06] how the spectrum going.  I think we have a tendency a lot in JavaScript  to underrate this section.  The section is actually kind of impressive.
[02:28:16] I think there's a lot of walls in the way of it.
[02:28:20] I think...
[02:28:22] There
[02:28:23] are places where this fits really, really well.
[02:28:26] but as the general architecture,
[02:28:28] is...
[02:28:30] very difficult
[02:28:32] to
[02:28:33] deal with certain types of things.
[02:28:35] And then this...
[02:28:37] has a real cost,
[02:28:40] that we need to figure out
[02:28:42] How to mitigate?
[02:28:45] So like none of these are easy problems per se.
[02:28:49] Um,
[02:28:51] But I think in talking about this, we have talked about pretty much all of
[02:28:57] the different types of technologies you could be using to build a web application today.
[02:29:06] And hopefully this isn't everyone's conclusion.
[02:29:11] Uh,
[02:29:11] Thank you.
[02:29:14] Okay.
[02:29:17] Thank you.
[02:29:18] Which graphic? All the graphics?
[02:29:21] Or...
[02:29:22] Or just this one.  I mean, someone could probably screen share it.
[02:29:27] Two, I'm...
[02:29:29] But yeah, I could probably export this somewhere.
[02:29:35] Thank you.
[02:29:38] It's in the pot. That's my answer for everything.
[02:29:44] Thank you.
[02:29:46] Thank you.
[02:29:46] Thank you.
[02:29:49] Yeah, there's a fact that there is like...
[02:29:54] extra overhead
[02:29:56] to it. The interesting thing is
[02:30:00] Yeah.
[02:30:05] With static site generation, there's even ways to optimize the...
[02:30:10] the CDN delivery of certain things. Yeah. I don't know. It's interesting.
[02:30:17] Yeah, this is probably the real hit.
[02:30:20] Yeah, yeah.  Look, there is an added...
[02:30:24] Like there's a whole other environment you have to worry about where things are running.  There are benefits to SSR, single page.
[02:30:31] loading that go
[02:30:33] Beyond.
[02:30:34] you know,  SEO,  uh,
[02:30:36] There's a bunch of benefits.
[02:30:37] timing with waterfalls, one of the problems with client-side rendering is
[02:30:42] It's almost all...
[02:30:43] in this first category. Like I didn't even get into it, but like
[02:30:47] You can server render preload tags in the page to reduce, like, help reduce one of the waterfalls.  Because otherwise you get in this place where, like, even with code split routes that get other code split, like, you have to load the bundle before you realize more JavaScript to load, you know, because you don't know what page you are on at the time you're in the client.  Like...
[02:31:04] That's why I was saying if I could put
[02:31:06] client side spa as its own category here. Maybe do the same thing with Pure Islands.
[02:31:12] Go CSR spa.
[02:31:16] it's gonna be like minus one.
[02:31:18] Um.
[02:31:21] But...
[02:31:23] And this is the problem, right?  A lot of people's frame of reference is they go,  oh, my React app. They think
[02:31:29] This. So when they think single page app, they're just like,
[02:31:32] this and then they're comparing it to something over here and you're like,  this is an amazing win.  Right.  I think,
[02:31:39] I think...
[02:31:41] This gap, I think there's a lot of potential here in different places. Yeah.
[02:31:45] "Do lakes add any benefits to spas?" Yeah, so I snuck lakes in under here.
[02:31:51] Yeah, but all they are is instead of sending JSON, you're sending HTML essentially, right?
[02:32:00] Server Components
[02:32:02] So...
[02:32:03] "You saved a bit of JavaScript,
[02:32:06] so you didn't have to render it on the client. So it is a technique
[02:32:11] to ship less JavaScript, but
[02:32:19] It's also only really useful for things that are not really interactive.
[02:32:22] So
[02:32:25] It's only a subset of what you can do with a proper server component.
[02:32:30] scenario. Like, yes, it's
[02:32:32] And there's a lot of places where
[02:32:36] Now you're sending the template, which is static, right? Think about it. If it's basically static, I mean, it doesn't necessarily mean fully static. It could change every time you hit the lake.
[02:32:45] So that's fair.
[02:32:46] It's just not interactive. Yeah, I don't know.
[02:32:48] it's
[02:32:51] There could be scenarios where you have a most like basically all static part and it would make sense, but it's kind of like a hyper optimization in the sense that it's like.
[02:33:00] It's kind of like
[02:33:01] having a spawn, like loading an HTMX into the middle of it.
[02:33:07] I mean, you could completely do that. Like,
[02:33:09] create resource and solid
[02:33:11] render HTML in an endpoint
[02:33:13] and then have the signal basically inner HTML as code like, ta-da.  You know, this is why I sometimes joke about
[02:33:21] you know, HTML partials isn't like a framework, it's just like a
[02:33:26] basic tool, right?
[02:33:31] Thank you.
[02:33:33] I mean...
[02:33:38] No.
[02:33:40] No, I...
[02:33:42] Like,
[02:33:44] Resumability already gets the benefits.  Like, the resumability already assumes that the outside is
[02:33:50] server until it needs to render it.
[02:33:53] I guess I...
[02:33:55] It's kind of awkward. You actually need to denote boundaries for where client interaction could happen if you want to get the benefits. It's more like you actually need client components, but then have those client components not load all their code.
[02:34:07] is actually
[02:34:09] if you want to solve serialization where you'd want to be
[02:34:13] But you start seeing why this is kind of a mess.
[02:34:17] Okay, okay. Let's...
[02:34:19] Let me see what else I have...
[02:34:22] in my HackMD drawer because I think
[02:34:25] I want to move to the next topic.
[02:34:29] Semi-related though, unless anyone has anything else they want to add.
[02:34:36] Yeah, exactly. I mean, it's...
[02:34:40] Ta-da!
[02:34:43] Um,
[02:34:44] The funniest thing is
[02:34:46] You might even, someone was trying to serialize Solid JSX,
[02:34:51] And it didn't quite work, but you can like, you could basically use our JSX in an endpoint, like in a server function and then like,
[02:34:58] If you know about the hidden property in it, you could probably like snipe the rendered HTML out of it.
[02:35:04] Anyway.
[02:35:05] Thank you.
[02:35:07] Thank you.
[02:35:08] I think
[02:35:10] I think resumability...
[02:35:12] is...
[02:35:14] a topic worth considering in terms of that optimization space, right? As I said,
[02:35:19] I don't feel like it actually changes the architecture.  It's still single-page app mentality, perhaps.  But it does...
[02:35:27] it has the ability to change the math in terms of
[02:35:32] Um...
[02:35:35] the cost of initial page load, which makes it very interesting.
[02:35:38] Okay. Yeah, so I wrote a lot of articles of HackMDs this week.
[02:35:44] I want to talk about a few of them.
[02:35:47] Um,
[02:35:48] Actually, no, this one's not new.  I was playing, I actually fixed a typo.  I don't want to talk about resumability without serialization,  but it came up because of something else I was looking at.
[02:35:57] Um,
[02:35:58] First thing I want to talk about
[02:36:00] is...
[02:36:03] We're going to talk more about...
[02:36:06] I got three of them, basically. I have something where I want to talk about...
[02:36:11] optimizing past single flight mutations.
[02:36:14] talk about the role of caching
[02:36:17] APIs?
[02:36:18] um so and then good talk maybe a bit about next use cash
[02:36:22] And then I want to talk about
[02:36:24] stateful signals. So I have
[02:36:28] So talk about stable servers with signals.
[02:36:30] Um,
[02:36:32] These topics, all three of them are pretty interesting, but since I just did a heavy one, I'm going to bang out a couple quick ones first and then we'll get to this one.
[02:36:41] Yeah, we use it before frameworks, yeah.
[02:36:47] Yeah, yeah.
[02:36:49] So you're saying this sounds very interesting, yeah, for sure. Okay, so let me start off with this one because it's a quick one.
[02:37:01] - If you've ever used like HandStack Query,
[02:37:07] or similar
[02:37:09] You're pro and we talked about this on stream. You're probably familiar with the whole, like
[02:37:13] Do the mutation.
[02:37:15] you know, add the to-do and then get the response back.
[02:37:18] And then be like,
[02:37:20] I mean, we might have even drawn this somewhere on here.
[02:37:24] Um...
[02:37:26] Not this one.
[02:37:27] Just see if I have it in. I changed computers, so
[02:37:31] Oh.
[02:37:32] Is that it right there? Is that you?
[02:37:36] No.
[02:37:36] This was talking about PPR.
[02:37:38] So it's not there. Okay, never mind. Okay.
[02:37:42] I
[02:37:43] It doesn't matter a whole time.  We've talked about the typical...
[02:37:48] In fact, actually, you know what?
[02:37:52] Uh...
[02:37:54] I can grab this from my clock.
[02:37:56] with uh your channel
[02:38:01] Where was it?
[02:38:04] My last VTalk.
[02:38:06] Thank you.
[02:38:07] Bye.
[02:38:08] Bye.
[02:38:09] I should just like pull out my slides.
[02:38:14] I should just pull out my slides because
[02:38:16] Honestly, I just wanted this image.
[02:38:19] Right.
[02:38:24] right essentially typical you know you do a mutation and
[02:38:31] You go, yes, it succeeded.
[02:38:33] We validate the dos.
[02:38:35] send that data back. This is your typical these days double flight
[02:38:39] mutation story that we do in most frameworks.
[02:38:43] Um...
[02:38:44] And
[02:38:46] The reason we do it is because it's freaking easy.
[02:38:48] Right. You literally just give it a key and call it a day.  You just go, OK.
[02:38:53] I'm going to update...
[02:38:55] something on a to-do, just give me the to-dos back.  And then because the way these things wire up through the cache, everything in the UI that's based on those to-dos updates automatically.  You don't have to worry about manual cache writing.
[02:39:06] Um,
[02:39:08] And, you know, it just makes things really easy.  Remix loaders are the same.
[02:39:12] Almost all meta frameworks have picked up a pattern like this because it just like removes all the like
[02:39:18] fiddling with stuff.  You know, it feels very  UI equals function of state.  You just like...
[02:39:25] essentially say...
[02:39:26] invalidate these things, update the UI.  It's just it's very nice.
[02:39:32] Obviously, single flight mutations.
[02:39:35] moves this interaction
[02:39:38] Thank you.
[02:39:39] basically to the server.  So instead of sending back the acknowledgement,
[02:39:43] the server at this point,
[02:39:46] goes and takes that
[02:39:49] redirect
[02:39:50] ...stuff because it already knows...
[02:39:53] you know, revalidate
[02:39:55] and then only sends back data. I'm pretty sure most people who watch my stream have
[02:40:00] seen this stuff before.
[02:40:02] But sorry, I'm on the wrong.
[02:40:06] Let me get out of this.
[02:40:08] Um...
[02:40:11] But like...
[02:40:14] Let me see what's an example of this.
[02:40:17] Let's see if I can find Skrlo.
[02:40:20] not the app, Strello GitHub.
[02:40:23] Um,
[02:40:26] Perfect example of this is if I go in here,
[02:40:29] And
[02:40:32] Thank you.
[02:40:33] What's this? Is it server TS? I can't even...
[02:40:38] I'm trying to remember where...
[02:40:42] No, I think it's in-- you guys put it in with the components.
[02:40:46] Note.
[02:40:49] Yeah, okay, there's a bunch of actions here,  doing database stuff.  My point is, here it goes,
[02:40:56] JSON.
[02:40:57] true, which is just the act, but then it goes, we validate this key.  And because this whole action happens on the server create note,
[02:41:05] - Okay.
[02:41:07] even though we're sending back the information to the client to revalidate,  we actually know here on the server and we can revalidate
[02:41:15] we can fetch that data and send it back on the same request, right?
[02:41:19] So...
[02:41:19] You...
[02:41:20] And if I...
[02:41:23] go to the actual Strello board, which hopefully is still up,
[02:41:27] Um,
[02:41:29] I can't even remember...
[02:41:35] I actually don't even remember what the password is here.
[02:41:38] Thank you.
[02:41:40] Okay, it's still there. Beautiful.
[02:41:43] *laughter*
[02:41:44] Tells you how bad that password is, okay.
[02:41:46] If you go here and you watch what we actually do over the network,
[02:41:52] Well, we got these crazy optimistic updates where we, if I go something like,
[02:41:58] change it so that, where is the...
[02:42:03] Should be a way-- yeah, no throttling.  If I make this super slow--
[02:42:06] we can still move this over here
[02:42:09] move this over here before these things even finish processing. And we have a snappy app with  the Optimistic updates. But what you'll notice is, and they're only a single flight. Like if I go here and move here,
[02:42:21] There's only one request made, it's not doing the double.  But if you notice, we're actually sending back  the whole freaking board
[02:42:27] every time we do a mutation.
[02:42:29] right, this giant payload of the whole board. It doesn't matter what I do. If I go in here and go
[02:42:33] AS4
[02:42:35] Guess what?
[02:42:36] and I can turn off, go back to no throttling.  It's the whole board getting set.  Sure, we do a quick data diff and no components re-render.
[02:42:44] But
[02:42:45] It's a little bit wasteful.
[02:42:47] for something that changes all the time. I think it's fine.
[02:42:51] But,
[02:42:52] Thank you.
[02:42:53] But sometimes you don't need to send all the data, right? That's basically
[02:42:57] where my thinking is going here, right? So,
[02:43:02] What if you...
[02:43:03] Right. You can always tell it not to revalidate, you know.
[02:43:10] So, let's refer to another ring called it.  So I came up with this kind of idea.
[02:43:17] I mean, maybe I'll get to that later, but...
[02:43:20] What should I put it? Yeah, it's a tricky little...
[02:43:23] Dilemma out of phrases something basically the
[02:43:27] One of the challenges
[02:43:28] is that
[02:43:31] This
[02:43:32] This site works.
[02:43:34] If I go here and go P and then I go disable
[02:43:38] disable
[02:43:39] JavaScript, okay? I'm disabling JavaScript. Now JavaScript is disabled, okay?
[02:43:45] When I move this card over here,
[02:43:47] I think this one, does this work? I'm trying to, maybe the drag regions don't work? I thought it worked.
[02:43:54] Huh. Are the trigger... Oh, it's because of the triggers for these...
[02:43:59] Maybe this one isn't progressive enhanced. I actually
[02:44:03] It's funny because it's based on the remix one. Maybe this one isn't actually progressive enhanced. That's interesting.
[02:44:09] I have to consider the progressive enhanced case to enable JavaScript.
[02:44:15] Interesting.  Yeah, I mean, drag and drop I get, but...
[02:44:19] It doesn't look like we bothered, because the functionality is not there, we didn't bother implementing any of it without JS. But my point is,
[02:44:25] If
[02:44:27] R2DMVC example I could pull up  works in Node.js.  You have to make the handling declarative
[02:44:35] because you don't have any chance to run JS. You can't go on action complete do blank. You have to instead go
[02:44:41] our action feeds into a submission that we then can show
[02:44:45] as part of the next UI, kind of like a flash message, if you know what I mean, in Express classically. You need to actually write it into this data object declaratively and then use that to render the next page. You can't just go like on blank.
[02:45:00] do the update.
[02:45:03] Which...
[02:45:04] is
[02:45:05] tricky because
[02:45:08] you want it to both work when optimistic updates are when the JS is available and when it's not.  In this case, we don't care. But for me,
[02:45:15] generally as an API, I have to think about that. So I came up with this idea. I haven't implemented it yet, but I was thinking, what if
[02:45:23] you could tell from like a get method of something that you can run in serve functions,  whether you're running under a node.js condition and then
[02:45:32] If there's no JS,
[02:45:34] You just can return like normal and not worry about it  because revalidation doesn't happen on Node.js.  It literally re-renders the page.  There's nothing we can do about it.
[02:45:42] But you could basically have different behavior based on whether
[02:45:47] you're in the situation where it's currently being requested and where there's no JavaScript,
[02:45:51] or in the situation when you know that there's a client that can handle stuff like the revalidation.
[02:45:57] And in this case, what I was saying is we could say,
[02:46:00] Don't revalidate.
[02:46:01] and send back the to-do.
[02:46:04] That's kind of interesting, right?  Because now instead of sending back all the to-dos,
[02:46:09] we just send back the one to do we added.
[02:46:12] For example,
[02:46:13] or the one to do we updated.
[02:46:17] And
[02:46:18] Then,
[02:46:20] if our action API had the ability to put in like a,
[02:46:24] an on-complete hook
[02:46:25] We can look at the submission and go, oh,
[02:46:28] If it's not errored,
[02:46:30] You know, let's get the key.
[02:46:32] and maybe write to the cash ourselves
[02:46:35] Clear the submission out.
[02:46:37] and then revalidate false.  And what revalidate false, this already exists in the router,  is a way of saying trigger all the reactivity,  like basically commit it and update all the signals  that listen to this key in the cache without refetching.
[02:46:53] So essentially we manually update the cache and then trigger the update in the UI.
[02:46:59] This happens in a transition, by the way, or transaction, whatever you want to call it.
[02:47:03] With this sort of API,
[02:47:05] when we did something like Strello,
[02:47:07] Sure.  Like,
[02:47:08] Stuff that moves the order of multiple cards, you might need to send all the data back, you know.  But if you're just updating this from G to GGG,
[02:47:17] there's no reason not to just send back only the one record only go like,  Hey,  um,
[02:47:23] This now only has GGG and instead
[02:47:27] of
[02:47:28] you know,
[02:47:30] doing a heavy diff, we could just patch the one update.  Interestingly enough, because of optimistic updates,  the value would be the same,  so that no actual work would get done.  But this is a mechanism here to actually
[02:47:43] reduce the network
[02:47:46] bandwidth right instead of always sending all the stuff
[02:47:49] Right.  As you can always return something generally,  um,
[02:47:54] It's not recommended to return the data in an action.
[02:47:58] because
[02:47:59] you fetch it again. But with this mechanism,
[02:48:03] you basically could. It's just something I'm kind of proposing. That way people who are hyper critical about optimization, obviously this opens you up to be more error prone, you'd have the potential to be able to use actions, benefit from the routing redirects, do all that kind of stuff in a way that
[02:48:23] doesn't impede on your
[02:48:26] ability to send less over the network.
[02:48:29] As I said,
[02:48:31] Most people haven't cared about this for a while because of, you know, the approach they take with Tanstack, but it's good that cache writing.
[02:48:39] in a sense, or at least revalidation could be, um,
[02:48:43] another tool that you have available to you.
[02:48:47] Right. This is only for people who aren't satisfied with the, it just works.
[02:48:55] Thank you.
[02:48:57] you
[02:48:59] Yeah.
[02:49:03] Thank you.
[02:49:06] Thank you.
[02:49:07] What happens when I queue update and delete action in this case?
[02:49:12] Thank you.
[02:49:13] I love you.
[02:49:14] be to action.
[02:49:15] Thank you.
[02:49:19] I'm not quite sure following the question. Are you asking what happens
[02:49:25] Let's see, does automatic delete work? If I go here, okay, let's...
[02:49:30] I'm not quite sure. Do, do, do, do, do.
[02:49:34] Thank you.
[02:49:37] Thank you.
[02:49:39] So, move...
[02:49:46] Delete.
[02:49:47] They're both still in flight? I mean, I don't know.
[02:49:51] Thank you.
[02:49:51] Yeah, I'm not quite sure the question.
[02:49:54] Thank you.
[02:49:58] Well, why send any data back?
[02:50:05] You're right, this is the funny thing. With the Strello case...
[02:50:10] Actually, we don't need to send any data back.
[02:50:13] because
[02:50:14] Technically speaking,
[02:50:16] Um,
[02:50:20] Yeah, it's an interesting one, right? Because we already have all the input. So if you look at the API here in OnComplete, you have the submission, right? So instead of sending the using the result, you could use the
[02:50:33] the input.
[02:50:34] from the submission. So like on complete, you go submission dot input and just set the cache
[02:50:39] with the input information. So yes, you are correct. In this case where you have all the information,  like the Strello demo, you're right, I don't even need to send it back. I can literally know that I did a
[02:50:51] update to your
[02:50:52] or add to do and I have all the information here and I can just set it without even looking at the results. The result can be empty so you're
[02:50:59] Yeah, you are absolutely right. In this case for the Trello demo, we don't need to send anything back.
[02:51:05] Thank you.
[02:51:08] Thank you.
[02:51:09] Right? But a lot of times that's not the case. But yeah, something like a like button,
[02:51:17] You could literally just be like,
[02:51:19] I mean, you could just be like on complete
[02:51:22] submission, you know, dot,
[02:51:25] you know, is liked or whatever, like the Boolean submit argument zero, I think it's submission input zero and just set the cache with that and call it, you know,
[02:51:34] And then you don't have to send anything back.  Yeah.
[02:51:38] Thank you.
[02:51:39] Thank you.
[02:51:42] So yeah, good point.  Yeah, so this is just one of those things that I kind of
[02:51:47] thought about a way of extending it. So I told you that'd be a short one.
[02:51:52] I got
[02:51:56] Let's go to the next one.
[02:52:02] Thank you.
[02:52:04] Dev, I see you're still here. I wonder if we'll get to
[02:52:09] to your stuff in time. Hopefully we will.
[02:52:12] Um...
[02:52:15] Because I got one more before I get to it.
[02:52:19] Thank you.
[02:52:19] You need to send data back if it didn't like a service you're going to say that you can't do it on the client. Yeah.
[02:52:25] Flight's in an hour, okay.
[02:52:28] Okay. Um...
[02:52:30] Thank you.
[02:52:31] Advanced caching with router APIs.
[02:52:33] It goes with the saying, I think,
[02:52:35] We need to rename the cache function in solid. I'm going to rename it to
[02:52:40] query, I think. I put it open in an issue, like an RFC, like
[02:52:44] For the router, like...
[02:52:46] six months ago. A lot of feedback and different stuff. I don't like the name Cash because most people...
[02:52:52] think of cash as a cash and our cash is actually, it does revalidate it, but it doesn't actually stay very long. It like literally,
[02:52:59] I think it's right on the solid router docks.
[02:53:04] Um...
[02:53:05] Thank you.
[02:53:06] Flood writer.
[02:53:07] The GitHub.
[02:53:10] our cache function,
[02:53:12] Um,
[02:53:14] I made a point here of what it does, data APIs.
[02:53:18] Where is it? Multiple path, nested routes, blah, blah, blah, preload functions.
[02:53:25] Data APIs, cache, okay.  This cache comp is followed.  It does deduping on the server  for the lifetime of the request.  It does preload cache in the browser,  which lasts five seconds.  When a route is preloaded on hover,  or when preload is called when entering a route,  it will make sure to dedupe those calls.  We have a reactive refetch mechanism based on keys.  So we can tell routes that aren't new  to re-trigger on action revalidation.  This is how we trigger the signals.
[02:53:45] - Thank you.
[02:53:46] It will serve as a back forward cache for the browser navigation up to five minutes.  Any user based navigation or link click bypasses.  So if you're on a page and you go to the next page,
[02:53:55] We don't read from the cache.  We fetch fresh always.  It's only if you use like the bout...
[02:54:00] browser back or forward buttons that we read from this cache.  So this is the most unobtrusive cache
[02:54:06] you can pretty much imagine it basically is not a cache.  So calling the cache makes people run away from it  when really literally everyone should just be using it.
[02:54:14] So,
[02:54:16] For the rest of this conversation, I'm just going to call it query.
[02:54:19] We thought about calling it data people, you do, but really
[02:54:23] I needed...
[02:54:24] a pattern, a balance.  There's action, which is something that you do.  Cash is not what you're trying to do.  D-duping is a side effect of what you're trying to do.
[02:54:33] You're...
[02:54:34] It's the get, you need the query and you need the action.  Tanner had good naming. We're going to stick with that.
[02:54:41] Thank you.
[02:54:43] Yeah, this whole conversation is how I want to rename it.
[02:54:48] Right.
[02:54:50] The interesting thing is like it's it's multi-set so you could call the you could loader maybe then you have multiple loaders
[02:54:58] Um,
[02:54:59] Yeah, I don't like the word loader.  I don't know something about it.
[02:55:04] Because the remix has kind of made loader--  I guess you could have multiple loaders.  I don't know.
[02:55:11] When I think of Loader, I think of like Remix as singular Loader.
[02:55:17] And the thing is,  this is key based.  Like,
[02:55:20] When you make a query, you basically say...
[02:55:25] Fetch this thing and tie it to this key.
[02:55:28] Um,
[02:55:30] So
[02:55:31] Yeah, I mean, it has all the characteristics, base characteristics, I guess, other than the cache part of what, say, TanstackBerry does.
[02:55:41] Yeah, they have multiple loaders. Fair enough.
[02:55:45] Thank you.
[02:55:49] Thank you.
[02:55:50] There you go. Yeah, for us, we don't care where the source is coming from. We're never going to have multiple loaders. We're literally just having a generic mechanism that doesn't care where you fetch the stuff from.
[02:56:05] So,
[02:56:06] Thank you.
[02:56:09] Thank you.
[02:56:11] Basically, I named it cache originally because I was thinking that like React
[02:56:17] You had the cache function, it seemed really practical. And I knew that create async was going to go core, you know, in the framework, it's our async primitive. But over time, I've kind of decided that the cache thing isn't core. You know, query and action don't belong in the core. They're like a router thing.
[02:56:34] So to speak.
[02:56:37] Okay.
[02:56:38] I was trying to figure out what if you wanted to add your own caching on top of these kind of wrapper APIs we do? Like what if you said you wanted to cache?
[02:56:47] And something something occurred to me that I think is important for people to understand.
[02:56:52] Um,
[02:56:53] Do I have the Strello open?
[02:56:55] You can kind of see it visibly right here, actually.
[02:56:59] Do any of these ones shorter? Yeah, delete notes shorter.
[02:57:03] You go delete note action.
[02:57:05] blank,
[02:57:06] use server. Let me see actually, is there a cache function in here?
[02:57:12] Maybe a note, a lot of these are actions.
[02:57:16] I want...
[02:57:18] Maybe it's on the...
[02:57:20] Maybe it's the board.
[02:57:25] Okay.
[02:57:27] Thank you.
[02:57:29] Create store. Okay, so it's not here.  I did not author this, but I know that somewhere...
[02:57:35] here there's going to be a cache function. Here's the action.
[02:57:40] preload, fetch forward. Fetch forward is what we're looking for.
[02:57:43] It's the...
[02:57:45] No.
[02:57:46] benchmark, fetch board, fetch board.
[02:57:49] Lib.
[02:57:50] It is the one thing that is in live.
[02:57:52] Where we started.
[02:57:54] Thank you.
[02:57:55] Fetch board.
[02:57:59] Okay, here.
[02:58:00] Get user. This is fine. I just want to show a cache function.
[02:58:04] generically, right? You have the async function, which is a server function and has a cache key. Okay. Um,
[02:58:10] And
[02:58:11] The reason that I wanted to show you here is
[02:58:16] The cool thing about the wrappers is that Tash and Action
[02:58:20] Take something that's completely naked. Server functions have no special semantics other than they just run async on the server. They don't care about routing, they don't do anything. This is always a problem I had with Next.
[02:58:30] approach because they made it like server actions. They didn't just do server functions. Now I hear that they backpedaled the server functions. I'm not surprised, but
[02:58:38] Um,
[02:58:39] The rappers let us in
[02:58:42] add extra ability. The only challenge with this wrapper approach that I didn't realize or think  about very much at first is
[02:58:49] When does the code actually go through the wrapper?
[02:58:52] So the thing is,
[02:58:55] Server functions,
[02:58:57] Thank you.
[02:58:58] When called on the server...
[02:59:01] you're calling an actual function.  You're going call get user.  It's calling this reference.  It goes through the cache.
[02:59:08] And you get it when you're rendering on the client.
[02:59:12] you're also calling this function. The server function itself gets hoisted out
[02:59:17] But essentially you're calling it through the cache.
[02:59:21] So whenever you're rendering, whether it's on the server or the client, you're calling this function which goes to the cache.
[02:59:26] when you're in the client,
[02:59:30] or sorry, on the server when you're
[02:59:33] call it like the server part of when you call it from the client. So I'm on the client calling get user.
[02:59:39] The cash is
[02:59:40] in the client,
[02:59:41] When I...
[02:59:43] hit the server endpoint
[02:59:44] It's going directly here. It is not going through the cache function. The endpoint begins here.
[02:59:50] Right. Which is different than rendering. Rendering, it goes through here.
[02:59:56] Whereas
[02:59:57] the endpoints here, which means that simply taking
[03:00:00] Cashier and putting like
[03:00:02] You know, our query is what I would call it now.
[03:00:05] I'm going like wrap it with cash.
[03:00:07] Like putting some wrapper on the outside.
[03:00:09] would only ever impact rendering.
[03:00:12] Which means that only
[03:00:14] Could you cache something on the server?
[03:00:17] through this mechanism.
[03:00:20] during rendering. So like if you wanted to say pretend you could
[03:00:24] cash in like a KV store, the response of this whole thing.
[03:00:30] it wouldn't work when someone hit the endpoint
[03:00:34] Um...
[03:00:38] from the server perspective. It would only work if they were actually rendering and calling this function.
[03:00:42] Does that make sense?
[03:00:46] For server components, the get is always called during rendering, so it always works.
[03:00:52] But for...
[03:00:55] you know, us.
[03:00:57] both like API style, the get can be called from the server independently of the render, which means this is not the right solution for caching for the server.
[03:01:08] Yeah, this is just not part of what we have to worry about. So it means that when we talk about wrappers, we are literally only talking about adding caching capability like you find with 10 stack query, or, you know, SWR on the client, this, this can, this can be the only the scope.
[03:01:26] of of what we can talk about.
[03:01:28] So I started thinking, okay, well,
[03:01:33] First thing you'll understand is that
[03:01:35] Technically
[03:01:36] our cache function, our query function, actually serializes the return value from it automatically.  This is why it just works. CreateAsync also serializes automatically even without a key.  This is just so that if you ever do any CreateAsync on the server in solid, it won't run again during hydration.
[03:01:53] Right.
[03:01:56] So I was trying to figure out like, where do you put the wrapper then? Do you, you can't,
[03:02:00] If we look again at our code...
[03:02:04] here.
[03:02:06] Obviously we can put something on the inside here and then it will always be on the server.  But if we're talking out here, do we put the cache
[03:02:13] Do we put your custom cache here?
[03:02:16] or here? Do we put it around the whole thing or around your function?
[03:02:21] So,
[03:02:22] So I started...
[03:02:23] kind of spitballing it out. And I was like, okay, well, what happens if
[03:02:27] we wrap it around the whole thing.
[03:02:30] Right? Outside. So,
[03:02:32] If you can picture, you can go forever cash,
[03:02:35] MyQuery.
[03:02:36] Okay?
[03:02:37] And my forever cache implementation is really dumb.  It's literally just an object that once it gets a key, it never deletes it.  So it will always go like,
[03:02:46] What's cool about this approach is because you're passing the query into it, you can just ask the query
[03:02:52] for its key.
[03:02:54] from the args, 'cause all our query functions
[03:02:57] or cash functions, whatever you call them, have
[03:03:00] Um,
[03:03:01] Methods to get the keys off them so they can feed into action. It's very convenient so you can go like you
[03:03:06] When it calls the function, you can get the key for the args.
[03:03:08] Then use that key, look it up in our object.  If it's there, just return the value directly.  Otherwise,
[03:03:14] Call.
[03:03:15] the query and put it in the forever cache. Really simple approach. The only problem is, does this work?
[03:03:22] Well,
[03:03:23] It works with hydration.
[03:03:25] because if you think about it,
[03:03:27] Yeah.
[03:03:29] The way this hydration ends up working is create async runs first.
[03:03:36] It sees the serialized value
[03:03:38] This should be an arrow. I don't know why there's a plus there. My bad.  It sees the serialized value and it actually doesn't run this.
[03:03:46] Funnily enough, but on the next update.
[03:03:48] Um,
[03:03:49] this already has the value preset because the serialization
[03:03:54] We'll have read it
[03:03:55] put it into its cache. So technically this works fine with hydration because
[03:04:00] It just never gets to it. And then when the next thing hits,
[03:04:04] it'll be fine. So like if someone triggers a revalidation and then
[03:04:07] or trigger something like, it's very rare case, but if someone triggered a revalidation, but not a refetch,
[03:04:13] Um...
[03:04:14] you know, just trigger the signals, it would see the data there because even though this would miss,
[03:04:18] my query would have it cached internally. So this works.
[03:04:22] But how does this work for revalidation?
[03:04:26] If
[03:04:27] Forever Cash.
[03:04:29] always intercepts on the outside here.
[03:04:32] before running it?
[03:04:33] It means that it's possible for the shortcut before running my query,  which means the reactive react validation gets bypassed.  So if you navigate to a new page,
[03:04:44] The first time.
[03:04:45] It doesn't have anything and I'll read the signal and like set it up and get it in.  Then you leave.  But when you come back again,
[03:04:52] it will read it from the cache,  but not read reactivity.  So any triggers won't trigger again.  It basically has detached it.
[03:05:00] Um,
[03:05:02] even if you were manually in trying to like replace the cash in both locations, I mean, you
[03:05:08] If this ever
[03:05:10] was a hit, it would unhook the reactivity essentially. So wrapping on the outside just
[03:05:15] doesn't work.
[03:05:19] Right?
[03:05:25] .
[03:05:31] It's a funny observation. Code organization struggle needs to be optimized for mind streams.
[03:05:38] Okay. So do you put on the inside?
[03:05:41] So you go query forever cache fetch user user like this.
[03:05:45] There's a new first problem is you don't know what the key is.
[03:05:48] So do you have to come up with your own key utils? Because what you're getting is just a function. It doesn't know, like the cache key belongs to the query thing out here. It doesn't know when it calls your functions. You have to like,
[03:06:00] figure out your own cash key.
[03:06:03] Um,
[03:06:05] So revalidation at least works because...
[03:06:07] it will always try and hit the query first and then if it misses it, it will ask your cache.  So at least it flickers properly.
[03:06:16] Um,
[03:06:18] Right, and I was just commenting that you could like obviously if you don't like this kind of extra rapper approach and
[03:06:24] You can always just make your own wrapper, putting them two together.  That's not right.  The hydration...
[03:06:29] becomes a problem because
[03:06:32] It's on the inside.
[03:06:34] which means it will never run, essentially, like I said before.
[03:06:38] And unfortunately,
[03:06:40] Um,
[03:06:41] It's--
[03:06:44] There's no way for this to get...
[03:06:48] the
[03:06:50] the cash value
[03:06:52] from this query, essentially, because it's on the outside.  And you'd have to like pass in the previous
[03:06:57] resolve, like it doesn't work like it doesn't have
[03:07:03] It doesn't have the value if it ever gets in here, so to speak.
[03:07:08] Like, sure, you could say on the very first time after hydration, if the same thing got hit,
[03:07:12] Again, and it never hydrated
[03:07:16] You know, like, it's a very rare case that you want to ever get past here.
[03:07:20] So like I imagine if someone was like building something like Canstack on top of it or their own wrapper, they would do it this way.
[03:07:26] But,
[03:07:28] you're throwing away the data serialized from the server the first time.
[03:07:32] Like,
[03:07:33] As I said, this R query cache here is very short lived.
[03:07:37] So
[03:07:39] If it gets past that and gets to here, it's not going to find the data.  It'd have to serialize itself.  It just...
[03:07:46] There's no way to basically...
[03:07:48] have the data present here from hydration time.
[03:07:52] There's no like on hydrate, like it's inside, it's not in the right place.
[03:07:59] It's also worth mentioning that the difference here on the outside is when we
[03:08:06] call my query
[03:08:08] you know, what we get back is resolved.  It's handled the router redirects and everything by this point.  You just get the data back.
[03:08:14] when you put it here
[03:08:18] your forever cache is going to get whatever stuff that query is expecting into the router.  So it's not like it's not a very useful cache, perhaps, because like
[03:08:29] He could.
[03:08:30] stuff that the query handles for routing for you has already been taken
[03:08:35] It hasn't been taken out yet.
[03:08:36] So,
[03:08:38] Yeah.
[03:08:42] Thank you.
[03:08:44] So you're saying like if you put hooks on the outside, couldn't you...
[03:08:49] revalidate
[03:08:54] you
[03:08:58] The trick is if it doesn't read from the cache, the signals aren't present like
[03:09:04] If it returned like my query, when you run it,
[03:09:07] and
[03:09:08] basically has a signal inside that gets tracked by the Crate Async, so that when you flick it, Crate Async reruns.
[03:09:15] If you exit early here,
[03:09:17] that signal never gets tracked.
[03:09:19] So I don't think this even...
[03:09:21] does it.
[03:09:25] Thank you.
[03:09:25] Thank you.
[03:09:27] So. Then you get into this zone, like maybe you just add
[03:09:33] an option, like put the key on it.
[03:09:36] and like have an optional action, option object.  So a couple options there.  One, I played around with a couple ideas here.
[03:09:46] One is we can just like,
[03:09:48] have our own rules like Handstack and put expire time, stale time,
[03:09:54] and assume that it basically is just something that lasts as long as the page.
[03:09:59] you know,
[03:10:00] you know, maybe configure when backcache versus not.  But basically, you'd have to have every possible consideration configurable.  And I have no clue what...
[03:10:09] weird behavior people want. The other option I think
[03:10:12] is to provide a mechanism that has a get and a set
[03:10:17] Get
[03:10:18] with the key and the intent,
[03:10:19] and then set with the key and the value.
[03:10:21] And the expectation here is that
[03:10:25] On miss.
[03:10:29] It tries to do the get.
[03:10:31] And then on...
[03:10:33] set or revalidation, it will tell you that you tell it the set like basically
[03:10:38] The query always is in control of revalidation.  It goes like, yes, I need to revalidate.  It will handle it.
[03:10:44] like when it's explicit revalidation, your cache participates, it can't override it.  But it has the ability to get in the way of get and based on the intent, whether it's browser  navigation, whether it's this preload, whatever you want, you can make a choice on how to handle
[03:10:58] if it is a hit or a miss.
[03:11:00] Challenge here though is
[03:11:03] Should this be async? What if using local storage?
[03:11:07] Right?
[03:11:10] Thank you.
[03:11:11] What session do you want to install a router query
[03:11:15] versus replace it. I mean, if you want to participate in the actions, essentially.
[03:11:20] right?  Like if you want to play part of this key value thing,  I mean,
[03:11:27] Mm.
[03:11:30] I agree this is getting kind of out there.
[03:11:33] I was just looking at extensibility.
[03:11:36] Thank you.
[03:11:38] Thank you.
[03:11:40] In the end, it seems messy.  The fact you can't easily do this myself does trouble me.  When I created create resource,  I was really concerned about how something like solid query  would extend.  I think create async is more flexible in that manner,  but still might need an on hydrate hook.  But I see that this exercise that purely hawk based  approaches to caches don't really work.
[03:11:55] like you can have one wrapper but composing them is a mess. Also none of this solves server-side cache.
[03:12:00] While writing this post the last couple of days, I recently saw use cash for next, which naturally alleviates that problem, I think.  It's an interesting dimension to things, probably worth exploring.  In our case, only...
[03:12:10] for our user function as interesting on this less. So are you,
[03:12:14] Are you all
[03:12:15] Have you heard about
[03:12:17] Next, use cache.
[03:12:19] I would love to kind of see if I can pull this out, because I know it's not
[03:12:22] I think I found a tweet.
[03:12:26] related to it
[03:12:27] Let me just see if I've got...
[03:12:30] My bookmarks.
[03:12:34] Here it is.
[03:12:35] Thank you.
[03:12:37] Thank you.
[03:12:38] It might be hard to read. It's pretty...
[03:12:42] It's pretty dimmed out.
[03:12:44] Hey Theo, how's it going?  Came in just as I was talking about next cache API.
[03:12:55] Yeah.  Well, it's just funny 'cause the day you did the stream,  which is when I heard about this,  I was literally working on advanced cash extension,  and I realized that my approach
[03:13:05] I was like writing this article that I was just sharing.  My approach just couldn't account for server caching.  It just was outside of the realm of what I could solve with the solution.  So I was like, okay, I'm just gonna put that aside and focus on what I can solve.  And then I saw the stream and I saw this used cache.  And I'm like, oh, so this solves the thing that I just put aside.  Okay.  Seems interesting.
[03:13:27] That was fun.
[03:13:29] Yeah.
[03:13:32] Um...
[03:13:33] It's interesting, right?  Because...
[03:13:35] the
[03:13:36] Use Cache suggests
[03:13:38] that the whole concept here is that they have some kind of global config for the caches.
[03:13:43] um essentially uh where and you can override it within that context of like  what you want the behavior to be for that but this lets you like just anywhere
[03:13:54] Um,
[03:13:55] in I believe server run code, just put use cache.  So whether it's in a server function or action or whatever,  or server component, you can just like say cache this thing.  And what's interesting is you could argue that this should  be a runtime mechanism, but my,
[03:14:09] But yeah, the biggest thing for me is why this API?
[03:14:13] Right. Why do you use this? Because this
[03:14:16] denotes
[03:14:19] generally a compiler split.
[03:14:21] An example of why you would use that is if you could cache it at
[03:14:27] Build time.
[03:14:28] That would be why you'd want this, because then you'd split the code out
[03:14:33] And then you'd be like, this is an entry point.  And at build time, I want to cache it.
[03:14:39] Putting it here, I'm not sure actually has any compiler impact beyond.  My guess is this actually just compiles into a wrapper, like a function calling a function like a hawk.
[03:14:53] so to speak, because
[03:14:56] watching Theo's demo, which I don't know if he's released the video yet, but it's definitely worth watching.
[03:15:03] It still always fired the first time and then afterwards it was cached.  So initially you'd see the loading from the suspense and then any subsequent time it would  be cached.
[03:15:13] Obviously you can build more interesting behaviors, SWR and whatever, on top of this, which is very compelling.  But it's, it's, the cache didn't start from build time.  Um,
[03:15:27] Thank you.
[03:15:29] Well, this is what I'm looking at here because
[03:15:34] Part of me is wondering particularly about the use of syntax, right?
[03:15:42] uh sunday and requires a sponsor makes sense that's fair um
[03:15:47] Thank you.
[03:15:49] Right. It's so funny because I literally was writing how...
[03:15:54] I was getting away, like, when I was working, sorry, where is it here?  I was basically saying that, like, we're going to rename our cache API because I wanted to free up,
[03:16:03] Um, like
[03:16:06] are the word cash to mean something else.  And then literally like the next day,  same day,  essentially,  um,
[03:16:17] I see this and I'm like, OK, so is this what I'm freeing it up for?
[03:16:22] The one benefit I like of this right now is the same thing that we just talked about when I was...  Sorry, I've got to close this one.
[03:16:31] Confusing me when I was talking about this rappers don't work.
[03:16:36] great here because
[03:16:39] Let me let me show. Where was it? Where was it?
[03:16:43] Oh, right. It was my Strelod demo example. Yeah. Wrappers don't work great here because
[03:16:50] Thank you.
[03:16:50] When you call a server function on the client or the server, that's when you go through the wrapper.  But when you hit it from an API endpoint,
[03:16:58] It's only this code that gets extracted out. You don't actually hit the function, you hit the content.
[03:17:04] And the benefit of
[03:17:07] Use cash
[03:17:09] is that
[03:17:11] it's on the inside like use server is like,
[03:17:14] This...
[03:17:16] means that like
[03:17:18] you know it's within that block scope, which is interesting.  Yes, it's a wrapper, but it's a wrapper that we know actually
[03:17:27] exists.
[03:17:29] from all contexts. You're saying like this block, wherever it runs, whether it's coming in through a server function, whether it's getting assigned this variable and being called, it exists. Whereas this wrapper here is not in the server function. It's like if I wanted to use cache,
[03:17:45] I would...
[03:17:46] I would literally have like use server, use cache, like bang, bang.  You know what I mean? Like in the same in the same context.
[03:17:53] On one hand,
[03:17:58] Right.
[03:18:01] Okay.
[03:18:02] you have to put the if you used a wrapper here you would have to put the
[03:18:07] the use server outside of the wrapper.
[03:18:10] Do you know what I mean? Like, it'd have to be like,
[03:18:14] async function
[03:18:16] use server
[03:18:18] Now use cash.
[03:18:21] Right. So
[03:18:22] It...
[03:18:23] Like you...
[03:18:25] These wrappers aren't insufficient here is what I'm getting at. It needs to be inside the server function.
[03:18:36] Thank you.
[03:18:37] Right. Do I have to write it out to show what I mean?
[03:18:43] So just grab a playground here and just
[03:18:45] Clear this.
[03:18:49] Let's delete everything.
[03:18:53] What I'm trying to get at is that
[03:18:58] Let's just grab this example here.
[03:19:02] Doesn't really matter what this code is doing.
[03:19:05] Now, I was talking a moment ago that I changed this to query or something, right? Not cache.
[03:19:10] But...
[03:19:11] just so you can understand the difference
[03:19:14] between these mechanisms.
[03:19:16] Query.
[03:19:18] Okay.
[03:19:19] So this is a query like pan stack, right?  It's like wrapping and setting it to a key, right?  This is different, though, from caching the results of this query.
[03:19:26] of this, which is this user. Now, I don't know why I'd want to cache this user. This is an auth thing. This doesn't seem like, let's forget about auth for a second, get this out of my way. What I'm getting at is
[03:19:38] In theory...
[03:19:39] I don't know how you'd process ordering.
[03:19:43] of wrappers, like if you could,  is it possible to have multiple directions in a scope block?  Maybe not, maybe this is actually what gets in our way.
[03:19:50] There's this. But if I wanted to like use a use cache wrapper here, I would have to do it
[03:19:58] right here is what I'm trying to get at. It can't go outside, it has to go
[03:20:04] inside. So it looked like
[03:20:06] this, you know?
[03:20:11] Thank you.
[03:20:13] Thank you.
[03:20:15] Thank you.
[03:20:16] So there is an ergonomics aspect of declaring the scope. At first I was like, "Oh, I don't get why I'm using block scope."
[03:20:25] to manage this
[03:20:27] because it doesn't necessarily need to be compiler if it's just doing a function wrapper.
[03:20:34] Thank you.
[03:20:35] Yeah, I need to... are only one of these allowed per block? Like...
[03:20:40] Eh-eh.
[03:20:41] I think it's interesting if you...  You strict...
[03:20:45] Like,
[03:20:45] And does order matter?  Is there anything semantically in JavaScript that
[03:20:51] prepares us for this
[03:20:53] possibility. Because for us, as I said,
[03:20:55] It is all about server functions, right?
[03:20:59] Um...
[03:21:00] That's our only interest here, essentially.
[03:21:04] Obviously, people are saying, oh, use server
[03:21:07] Cash.
[03:21:08] Can you just chain these together
[03:21:12] like server cache,
[03:21:15] *laughs*
[03:21:16] I'm not
[03:21:19] I think
[03:21:20] making these configurable goes against the
[03:21:24] the principle of it.
[03:21:27] Thank you.
[03:21:28] Thank you.
[03:21:30] .
[03:21:31] Well, server isn't at the top of the file because I want this in the client.
[03:21:38] This is a client query wrapping a
[03:21:42] server function. So I, you know, I can just go here and then like,
[03:21:47] like you could put it in a separate file and put use server the separate file and then put this in a function that blocks it but
[03:21:54] I mean,
[03:21:55] Then you're gonna have another place where you wrap the query too and have an additional separate thing.
[03:22:00] Um...
[03:22:02] This is always on the outside, so this definitely doesn't belong in this category of thing.
[03:22:08] It's also configurable. It has keys. You know what I mean?
[03:22:11] where this cache mechanism here
[03:22:14] is
[03:22:15] much
[03:22:16] It's like a memoized function.  It lasts...
[03:22:21] I mean, to be fair,
[03:22:22] The reason that we have keys here is because it needs to be isomorphic across the server client boundary.
[03:22:29] If it did not need to be isomorphic across the server client boundary,
[03:22:33] But
[03:22:34] It would be a different story, but yeah.
[03:22:38] Thank you.
[03:22:40] Thank you.
[03:22:41] Thank you.
[03:22:43] Thank you.
[03:22:45] You can have...  I think AST Explorer is probably not going to
[03:22:52] It's probably not going to complain about it. It sees a string with a
[03:22:56] Semicolon. I just meant...
[03:22:58] semantically, if there's something that
[03:23:01] That gets in our way.
[03:23:06] Thank you.
[03:23:09] Thank you.
[03:23:11] Biggest thing is I don't think this works the way Vinci handles these directives.
[03:23:18] I think Vinci...
[03:23:20] I mean, yeah.
[03:23:21] It collects the references
[03:23:25] I'd have to talk to Nikhil about this.
[03:23:29] Thank you.
[03:23:31] Yeah.  It shows us directive?  Interesting.  I want to see that EST Explorer.
[03:23:44] Thank you.
[03:23:46] Thank you.
[03:23:46] Thank you.
[03:23:49] Thank you.
[03:23:49] Thank you.
[03:23:51] Is it...
[03:23:59] Thank you.
[03:24:00] Yeah, yeah, yeah, Vince, you can be updated, but it's more of like...
[03:24:05] it's a much more considerable difference. Like, Finch is based on roughly how
[03:24:10] uh,
[03:24:12] Jared was thinking how Bun should generalize it.
[03:24:17] Thank you.
[03:24:21] Because right now I'm just seeing an expression statement with an identifier.
[03:24:26] Um...
[03:24:30] If I...
[03:24:35] Need to give it a name.
[03:24:42] Thank you.
[03:24:44] Expression statement, literal, yeah.
[03:24:48] It says...
[03:24:49] How about Babel?
[03:24:51] Babbel see it different.
[03:24:56] Thank you.
[03:24:58] Thank you.
[03:24:58] Thank you.
[03:24:59] Aha! Babel sees it different. Gotcha!
[03:25:03] Acorn doesn't, but Babel does, and Babel's all that we care about, right?
[03:25:07] Let me see here.
[03:25:12] Interesting. The Babel
[03:25:16] Thank you.
[03:25:16] Directive, directive, literal. I see what you're talking about. That's interesting.
[03:25:20] Thank you.
[03:25:22] Huh.
[03:25:26] Is it anything that follows this pattern?
[03:25:30] Thank you.
[03:25:33] Thank you.
[03:25:35] Yeah, OK, so they just what if I put like
[03:25:39] Var A above it.
[03:25:43] I'm just messing.
[03:25:45] with it a little bit
[03:25:47] Okay, so directives are limited to
[03:25:51] the top of the file or the scope block.  Like if I do this, does it turn into a directive again?
[03:26:00] Thank you.
[03:26:01] Okay, not scope block. How about function block?
[03:26:07] Thank you.
[03:26:10] It does. Okay, cool.
[03:26:14] OK.
[03:26:16] Thank you.
[03:26:17] Nice.
[03:26:18] Nice. Okay, it's interesting.
[03:26:22] I don't know how you would process the ordering, because I think it's one of those things that order would matter, unfortunately.
[03:26:29] Like,
[03:26:33] *sigh*
[03:26:34] I'm just thinking from like a generic tool.
[03:26:39] Yeah.
[03:26:40] Yeah. But it's definitely interesting, right?
[03:26:47] To think that you could be like...
[03:26:49] You, server.
[03:26:50] And then go...
[03:26:51] use
[03:26:53] Cash.
[03:26:54] And then be like,
[03:26:55] Ta-da! You know...
[03:26:59] Thank you.
[03:27:03] Thank you.
[03:27:04] Thank you.
[03:27:04] Thank you.
[03:27:06] What I like about the solution is I've been getting
[03:27:10] things where people are using Solid's cache function,
[03:27:14] as
[03:27:15] essentially...
[03:27:16] trying to use it like this, like putting cache functions in cache functions, which is another reason why I'm calling it query now.
[03:27:22] They're like, why can't I put my cache function  in my cache function?  And it throws when it handles this redirect stuff.  This literally doesn't care
[03:27:31] Um...
[03:27:33] what you pass to it.
[03:27:35] So,
[03:27:36] I like it.
[03:27:38] because
[03:27:39] Thank you.
[03:27:42] Thank you.
[03:27:42] You know  The difference between this and
[03:27:48] And this?
[03:27:52] is this will always go to the server, but return the same cache result.
[03:28:01] Whereas the other one,
[03:28:03] will only go to the server
[03:28:06] when the client has revalidated.
[03:28:08] But...
[03:28:09] If if
[03:28:20] You can always extract
[03:28:22] this part,
[03:28:25] Thank you.
[03:28:28] Thank you.
[03:28:30] Thank you.
[03:28:32] Thank you.
[03:28:33] Right.
[03:28:40] Thank you.
[03:28:50] Which is more of what people are looking for.
[03:28:52] I think.
[03:28:58] Because we had people trying to like wrap this in cache, which I'm renaming to query.  Yeah, my first account look at this is this solves the opposite side of the problem I was solving.  So...
[03:29:11] I'm actually...
[03:29:12] I find it very complimentary.
[03:29:14] to what we're doing right now.  Because...
[03:29:18] In a sense, it's interesting because use cache can only have meaning where infrastructure is involved.
[03:29:26] Right?
[03:29:27] Like you have to be able to say, use a...
[03:29:31] KV or whatever, right?
[03:29:33] Um,
[03:29:35] Thank you.
[03:29:37] So it's going to be a fun one to see how they expand that for Next on non-Vercell platforms.
[03:29:44] But...
[03:29:45] Generally speaking, at the general mechanism...
[03:29:49] In the meta framework,
[03:29:52] It seems convenient.
[03:29:54] It's kind of interesting. You'd have to error...
[03:29:57] on
[03:29:58] it going to the
[03:30:00] client, this is a server only mechanism.
[03:30:03] Client can keep doing what it's always done.
[03:30:10] Okay.
[03:30:13] They actually solve this.
[03:30:17] In Next, they have like an imported API, which is like
[03:30:20] cat something like i don't remember the thing but it's like cat you can basically import something
[03:30:25] you know, use cash profile
[03:30:30] default or something.
[03:30:32] I didn't...  Like, so...
[03:30:36] Yeah.
[03:30:38] And this one will error if it's not called from within a cache function or whatever,
[03:30:43] There's like
[03:30:48] Thank you.
[03:30:50] Thank you.
[03:30:53] "Using use cache seems to disable a bunch of other options next to my system no longer necessary." Well, exactly. This is a much cleaner separation.
[03:31:02] Because...
[03:31:05] Next was trying to find ways to wrap like...
[03:31:10] Oh.
[03:31:10] DB call...
[03:31:13] Bet you.
[03:31:14] And
[03:31:15] Then React was like, OK, here's this cache function, but it wasn't expandable enough.
[03:31:20] Um...
[03:31:25] Yeah, I... I...
[03:31:28] it's interesting to use this kind of hybrid approach of compiler plus,
[03:31:36] runtime
[03:31:37] Um...
[03:31:38] But I think it's actually very poignant to kind of point out like why the configurability is not something that you do through directives.
[03:31:50] That's the thing. This doesn't invalidate. This is...
[03:31:56] I don't think this cache
[03:31:59] I think this cache is based completely off
[03:32:01] arguments and then invalidation is purely
[03:32:05] Time-based.
[03:32:06] I don't know how this would ever...
[03:32:09] Keys.
[03:32:11] Yeah, compiler runtime plus info, yeah, all three.
[03:32:19] Thank you.
[03:32:20] Yeah, yeah.
[03:32:24] Yeah, the not configurable makes them hard. They also can mess with TypeScript.
[03:32:29] Like you can use wrappers to fix TypeScript for you.
[03:32:33] That being said...
[03:32:35] Um,
[03:32:39] I don't think the rappers will ever be as obvious...
[03:32:45] of like
[03:32:46] what their intent is.  There's something about you server that just goes,
[03:32:50] you know,
[03:32:52] Um, which I've come to like actually more over time.
[03:32:58] Thank you.
[03:33:00] Thank you.
[03:33:01] Thank you.
[03:33:03] But yeah, I'm, I'm, I'm, I'm, I, I actually, maybe I'm going to have to look at this. I don't know how invalidation works. I assume that this was more of like a cache that doesn't invalidate. Like you remove the cat, like, like what are the, you're right. There is no cache keys here. There's like a stale time and expiry time.
[03:33:25] But I don't think this is like...
[03:33:27] flush the cash kind of thing unless it's like
[03:33:29] clear the whole freaking cache.
[03:33:31] Maybe Theo knows more than I do, but...
[03:33:35] I...
[03:33:36] I don't...
[03:33:38] I don't remember seeing anything about a key.
[03:33:42] I'm obviously not going off the source.  There was like a...
[03:33:46] Thank you.
[03:33:47] Because see, like, this just gets rid of all the weird fetch-like behavior. There's a tag function, okay.
[03:33:56] Thank you.
[03:33:57] Thank you.
[03:33:58] Okay.
[03:33:59] Gotcha.
[03:34:04] Okay.
[03:34:08] Yeah, that's interesting. The fact that
[03:34:13] I'm not.
[03:34:15] Yeah, that is interesting.
[03:34:18] I like it from the perspective that it forces the block.
[03:34:21] which lets it like coincide like, like,
[03:34:24] combine better
[03:34:26] But...
[03:34:28] This...
[03:34:29] I mean, I'd have to see. This feels like the common case requires arguments.
[03:34:37] Yeah, holiday path. Yeah, yeah, no, I hear you.
[03:34:41] Yeah, it feels like
[03:34:44] I think this is the tricky part here. It's like if it things that work without arguments
[03:34:51] work well here. Things that work that require arguments are
[03:34:56] are trickier.
[03:34:58] Because...
[03:35:01] *sniff*
[03:35:02] Thank you.
[03:35:03] Because...
[03:35:05] Yeah, that is an interesting one. So use server, you could argue that there is an argument, get.
[03:35:11] Um,
[03:35:12] But since the get only matters from the side making the request,
[03:35:17] Like in Solid, we just do this. Ta-da! Get. Like, it's actually relatively simple because the behavior is defined from the outside.
[03:35:26] So,
[03:35:28] - Mm-hmm.
[03:35:29] And you don't care about this configuration when you hit the API on the server.  So this is actually the perfect wrapper.  You don't actually need to pass arguments to it.
[03:35:38] Um,
[03:35:41] But with cash, if you're expected to pass arguments to it,
[03:35:46] like cash on this tag or
[03:35:51] set this cache profile for it. Like if it's actually configurable
[03:35:55] and you regularly get in the course of configuring it,
[03:35:59] It's less compelling here.
[03:36:04] Thank you.
[03:36:05] See, maybe the default thinking, and maybe this is where the thinking is, is that
[03:36:10] Um,
[03:36:12] Thank you.
[03:36:14] Thank you.
[03:36:16] Thank you.
[03:36:17] Thank you.
[03:36:22] - Posted the default, but yeah.  We just literally just wrap, get,
[03:36:28] To be fair, it's actually hidden on this object itself.  If you actually go
[03:36:33] into this.  If you grab the server function,
[03:36:36] Um,
[03:36:37] and just called like dot capital get on it.  It'll also do it directly.  We just have the wrapper to pull it out easier.
[03:36:43] Um,
[03:36:45] in terms of this question. But yeah, post is the default.
[03:36:49] But
[03:36:50] My arguments against this would you make helper functions with tags a
[03:36:56] .
[03:36:57] Thank you.
[03:37:01] Thank you.
[03:37:03] Yeah, it's just the argument...
[03:37:07] Thank you.
[03:37:08] It's so much cleaner not to. See, the only argument that I can see that I would really want this is if our belief is most people aren't going to be sending keys.
[03:37:16] like that they're non-revalidatable cache. If the common use case is non-revalidatable,
[03:37:23] I am okay that on the edge case, you come in and you're just like,
[03:37:28] you know, cash, key,
[03:37:31] Hey, yeah.
[03:37:32] Okay.
[03:37:33] I can live with that.
[03:37:39] Thank you.
[03:37:41] Thank you.
[03:37:43] Okay, I got a better idea.
[03:37:48] Thank you.
[03:37:50] I got a better idea.
[03:37:53] Huh. Yeah, what...
[03:37:55] Why don't you just do this?
[03:38:01] we just do the same thing that we do already with
[03:38:07] all this other stuff, right? You know, Solids Query Function,
[03:38:12] When you do this, get user
[03:38:15] For us?
[03:38:16] There's a key for...
[03:38:19] And let's pretend this had...
[03:38:23] um this took a number as an idea or something right we have key for
[03:38:29] for three so you can like path you can call it without calling it and then it will this will return like
[03:38:35] user
[03:38:37] three or something, right? Like, and in the same way I was saying before that our
[03:38:42] our actual server function
[03:38:45] like in solid when we do this.
[03:38:47] Won't we...
[03:38:51] when we do this, essentially, we
[03:38:57] Let me just go const.
[03:39:00] D or something, whatever we we can go D dot get.
[03:39:04] And it'll do the get request instead of the post request.  It's kind of built in.
[03:39:11] What stops
[03:39:13] This.
[03:39:14] From...
[03:39:15] being essentially like
[03:39:18] get key on this or just like heyya.key.
[03:39:21] And then
[03:39:23] revalidate
[03:39:25] Tag.
[03:39:27] Hey, uh...
[03:39:28] dot key. Do you know what I mean?  Like, what stops us from actually...
[03:39:34] I mean, we don't even need this.  What stops us from just doing...
[03:39:41] This.
[03:39:42] Like, we don't have to go over a freaking network boundary here.
[03:39:47] This isn't the thing.  I don't think there's anything that actually stops us from...
[03:39:51] passing...
[03:39:54] inside like a server action or something.
[03:39:57] Passing the reference.
[03:40:00] to the function
[03:40:02] and telling it
[03:40:04] that it needs to revalidate or something.  I don't know.  I'm just trying to think of like...
[03:40:11] Thank you.
[03:40:12] Or it's not even revalidate, it's actually invalidate.
[03:40:16] because you're not fetching it again unless you are fetching it.
[03:40:26] Thank you.
[03:40:28] Thank you.
[03:40:30] Oh, right. Right. Well, I mean, if it works like can stack, like the way we do, it's, it's, it's a starts with query. So this will read that sort of invalidate, right. Hey, it takes.
[03:40:44] a greeting that's a string, okay?
[03:40:47] This invalidates
[03:40:49] all the greetings.
[03:40:53] Thank you.
[03:40:54] This
[03:40:55] invalidates
[03:41:04] Actually, we want TypeScript to work.
[03:41:08] Thank you.
[03:41:18] Okay.
[03:41:27] See, what I'm suggesting here is that
[03:41:30] The function identity,
[03:41:33] is the key.
[03:41:36] and because we don't have to worry about serializing over board boundaries or freaking uh
[03:41:42] uh,
[03:41:43] I don't think we need to.
[03:41:44] I have to double check that because we don't have to worry about serializing over boundaries.
[03:41:49] and like minification and stuff.  I think...
[03:41:51] that this would work.
[03:41:55] Thank you.
[03:41:56] Thank you.
[03:41:57] TS doesn't.
[03:42:00] TS doesn't. The same way TS doesn't know
[03:42:03] about
[03:42:05] Um...
[03:42:07] the stuff I didn't think. This is why I had to expose freaking... This is the whole reason why I get...
[03:42:13] D exists.
[03:42:17] So...
[03:42:27] you
[03:42:28] like as a no,  like if,  if,
[03:42:31] TypeScript always pisses me off, it's fine.
[03:42:34] You could do this.
[03:42:39] I think...
[03:42:42] I'm pretty sure you could do this.
[03:42:47] There you go.
[03:42:49] And in fact,
[03:42:51] I think you could do this.
[03:42:53] So
[03:42:54] Maybe this is the correct answer because you already have to pass into a function. Maybe this is the correct answer.
[03:43:01] Yeah, you got there faster than I did.
[03:43:07] Internally, for this to work mechanically, we'd be putting stuff on the Heia object
[03:43:12] like on the wrapper.
[03:43:13] But...
[03:43:14] But essentially, you could do this.
[03:43:22] Thank you.
[03:43:25] So yeah, this is attractive because now I don't need keys.
[03:43:37] Yeah, that's it. Now, if I don't need keys,
[03:43:42] then
[03:43:44] Setting the cache profile is the only thing I need to customize and
[03:43:48] If you set a reasonable default, it's going to be the exception case.  You can just put use cache wherever the hell you want.
[03:43:54] And yeah, OK.
[03:43:56] We're good.
[03:43:59] Thank you.
[03:44:01] Here we go.
[03:44:03] We have solved the use cache thing. No keys are necessary. You don't need to revalidate tag.
[03:44:09] You just.
[03:44:10] Pass in the function reference.
[03:44:14] Technically, you'll have a key on it, but TypeScript
[03:44:17] We'll be happier with you if you just do this.
[03:44:21] I'm
[03:44:23] Yes.
[03:44:25] Yes.
[03:44:29] Thank you.
[03:44:30] Thank you.
[03:44:33] Yeah, no.
[03:44:36] Yeah, it's quite possible. You play around with these for a minute and then you're like thinking like, OK, yeah, this is how it has to work. As I said, I'm sure they'll come to pretty much the same conclusion.
[03:44:51] Yeah, no, that's fair enough. I think it's just like a Lee Rob video and like a write up somewhere.
[03:44:59] Thank you.
[03:45:02] you
[03:45:04] Mm-hmm.
[03:45:05] Anyway, I mean, technically we could also do, but the TypeScript for, like, we don't get types for Hay because of the way the wrapper works.
[03:45:15] Yes, this is just a server cache.
[03:45:22] Thank you.
[03:45:23] Thank you.
[03:45:24] Yeah, I think this, I mean, now you're going to be thinking like, what would it look like  from the client side?
[03:45:32] Thank you.
[03:45:35] That's an interesting question.
[03:45:37] Because...
[03:45:38] Thank you.
[03:45:40] Assuming that you do the same thing where you set the profile on the client,
[03:45:44] of how you want the cache behavior to work.
[03:45:47] client has reactivity, which is kind of
[03:45:50] Pain in the ass here.
[03:45:53] Thank you.
[03:45:55] Thank you.
[03:45:59] You could have a life on a memoize function, though, and use the same mechanism.
[03:46:09] Yeah, I don't know.
[03:46:12] Thank you.
[03:46:13] Thank you.
[03:46:14] Thank you.
[03:46:16] Yeah, I see where your head's going here.
[03:46:28] configuration, like the router would just provide a cache configuration.
[03:46:35] The problem with the router
[03:46:37] is it needs to be isomorphic.
[03:46:40] So we need the key.
[03:46:47] The reason we got rid of the key was because we didn't need to be isomorphic.
[03:46:51] Like on either side you can use something where you can use the reference identity.  But if you have to serialize this, you don't get to do that.
[03:47:00] Thank you.
[03:47:02] Thank you.
[03:47:09] Thank you.
[03:47:10] Thank you.
[03:47:12] Yeah.
[03:47:15] The beef...
[03:47:16] Fair.
[03:47:19] Our invalidation works similar with the composite keys.  It's just the thing is like...
[03:47:28] Yeah, I. On the client, yeah, because you can always set a custom key where this I mean, you could have overrides for sending custom key. I'm just I'm just just playing through it all.
[03:47:41] It's interesting because my...
[03:47:48] Ah.
[03:47:52] Thank you.
[03:47:54] It's tricky because... how do you indicate that you want the cash? Okay.
[03:48:00] I got one for you.
[03:48:01] Dev, how do you indicate you want the cache on the server and on the client?
[03:48:05] Like,
[03:48:06] What I'm getting at is what if this is...
[03:48:08] Here.
[03:48:10] Is this a server cache or a client cache or both or what not?
[03:48:16] It's ambiguous what the intention is here.
[03:48:24] Thank you.
[03:48:25] Thank you.
[03:48:27] Thank you.
[03:48:30] Yeah, yeah, the compiler can add the fake function, but TypeScript will never know that it's there.
[03:48:35] Like we add the fake function with what we do, like that, like our get on server functions is like that.  We literally have like server function and do like D dot get this exists.
[03:48:46] but TypeScript will never be able to know because TypeScript just sees an async function.
[03:48:51] you have to wrap it so that types like this goes like
[03:48:56] Yeah, you got to wrap it basically, unfortunately.
[03:49:03] This is...  Yeah, I mean if you're gonna come up with custom rules looking for certain things, I think you can do something probably.
[03:49:14] Thank you.
[03:49:16] Thank you.
[03:49:18] Thank you.
[03:49:20] I mean, these align pretty closely. Yeah, not cached.
[03:49:25] The server only because it's in a server function, right?
[03:49:27] Thank you.
[03:49:29] Um...
[03:49:32] But what I'm getting at is
[03:49:36] before
[03:49:36] This
[03:49:38] It might actually be...
[03:49:42] pretty--
[03:49:43] Common.
[03:49:49] Like we need the potential to be able to serve both, I think.
[03:50:00] And it's tricky because you need it to be a wrapper like this directly.
[03:50:07] Yeah, I don't know how to express this otherwise without being inside because you need to be a rapper directly because I don't know if you know this, but if you do.
[03:50:14] If you do this,
[03:50:19] Like this is no longer a server action.  It's all because it,  it,
[03:50:23] Like,
[03:50:26] like if I called this, do you know what I mean? Like, because it's not passing the server function  directly in there's arbitrary JavaScript code that could run here. It will run this on the server,  but there's the potential that it needs to hydrate or it needs JavaScript in order to  run. So it won't work with progressive enhancement.
[03:50:40] Just like trying to think of like how you would write
[03:50:44] the equivalent of this.
[03:50:46] Um...
[03:50:48] where you have caching on both sides.
[03:50:53] Yeah, I think this is where we're landing here.
[03:51:02] Yeah, that's my gut. It's fine. We could think about this further. But yeah, it's interesting.  It's definitely interesting. The fact that this isn't isomorphic, meaning that you don't  need the keys that you can do this kind of thing, I think makes it...
[03:51:16] It's the thing that pushes it over because...
[03:51:21] Yeah, yeah, no, I think there's going to, I think a lot of times what you're going to do when you build your app is you're going to set a default cache profile and it's going to work for 80, 90% of your stuff. You're just going to drop use cache where you need it.
[03:51:34] automatically work.
[03:51:35] you know, firing, put these
[03:51:38] next to where like in our action, you know,  where we can go revalidate this from the client,
[03:51:46] invalidate
[03:51:47] these server caches
[03:51:50] You just put them right in your action, same kind of place, and then you're just good to go.  And then in those couple places where you have that...
[03:51:58] highly sensitive data or thing that you never care about.  You just set a custom profile call it a day too.  But 80, 90%, you just use this and you're done, which is
[03:52:09] Thank you.
[03:52:09] is DXY very attractive.
[03:52:13] Okay.
[03:52:16] Okay, cool.
[03:52:19] Dev's practically on the plane, and I don't know if I'm going to...
[03:52:22] I have my last...
[03:52:24] my last thing to go to.
[03:52:27] Where is it?  Do do do do do.
[03:52:30] Thank you.
[03:52:31] Server signals as architecture. Okay.
[03:52:34] I've been, see, look, I even mentioned Dev right here.
[03:52:37] Thank you.
[03:52:37] Thank you.
[03:52:38] I don't
[03:52:40] Bundling gotchas.
[03:52:42] I don't know if there are.  The big thing is I don't think there is any bundling consideration with this.  Like, I don't think it actually breaks things apart.  I think it literally just puts a wrapper on it and calls it a day.
[03:52:51] Like, I don't think there's actually any bundling.  You don't code split on the cache boundaries.  You don't literally just go.  It's that's why I was kind of saying like, this isn't necessary.  It's a programmatic.
[03:53:02] It's just literally just programmatic code wrapper.
[03:53:06] Thank you.
[03:53:09] Can you validate a server cache key? No, it has to be called from a server function. It makes sense. So if you're on the client and you go and you want to invalidate a cache from the server, like you have to basically do a server action. And in that server action,
[03:53:22] Um,
[03:53:23] then tell the server to
[03:53:25] invalidate the thing. Otherwise, like the clients, yeah, no, it's, it's, you gotta do it from the server.
[03:53:35] Thank you.
[03:53:41] Confirm it's just wrapping with problematic IDs. Yeah, exactly.
[03:53:46] Thank you.
[03:53:49] I'll get Wi-Fi.
[03:53:55] Thank you.
[03:53:56] Thank you.
[03:53:57] Thank you.
[03:53:59] Thank you.
[03:54:02] .
[03:54:04] Okay.
[03:54:06] Yeah, well, I mean...
[03:54:10] It makes sense because the function only exists on the server.
[03:54:15] So like,
[03:54:17] If you import in the client,
[03:54:19] I'm gathering it with just error.
[03:54:22] which means that it only exists on the server, so the only way you can actually get to it
[03:54:26] is by calling something on the server.
[03:54:30] Thank you.
[03:54:33] Okay.  Dev's been doing some pretty great work  with signals in real time.  He's been prototyping, picking up
[03:54:39] every not ready solid 2.0 API.  He's like been asking me about these APIs and literally using solid 2.0 reactivity before it's ready.
[03:54:47] But he showed me, he made a post, um...
[03:54:51] Where is it?
[03:54:53] It should be my bookmarks.
[03:54:59] about... singles...
[03:55:03] This...
[03:55:04] Thank you.
[03:55:05] Seenals are so well designed for the problem they intend to solve that they end up not being the best choice for other problems.
[03:55:11] Um...
[03:55:11] Which is a fair observation.  But basically, he was saying that, like...
[03:55:17] because signals need something to subscribe to.  Like they're,  they're like event streams,  right?  They're like,  uh,
[03:55:25] Like, sorry, they're not advanced streams.  Like signals need to actually have something read from it to do the work.
[03:55:30] So if you want to like be pushing events from like a web socket, they're not the right fit.  You have to like fake a sync, even if no one's listening to it.  The problem with signals is like they only care if someone's listening.  So they only do the work if, if someone's listening.  So it's not like.
[03:55:44] What ends up happening is that there's other work that has to happen because of that and no one's listening. When you start listening you suddenly like then go fetch then go do the thing which isn't really.
[03:55:54] productive here generally with web sockets i'm gathering all these architecture you want to just  keep on pushing the updates and have them available and then even if you're not reading from them so  dev was working on some like interesting approaches to this and asking about perspective on on this and  i mean obviously there's ways to solve this with signals but i we got to a point in the conversation  where i was just like
[03:56:13] What are you even building?  Like, I don't mean like I've seen all the demos.  I'm just like, what is your use case?  Like, why are you...
[03:56:22] What are you doing?
[03:56:27] Thank you.
[03:56:29] And I mean, I think we have this because he's going signals lazy pull based work fantastic,  synchronous context, but async lazy signals. Yeah. And the thing is, create async is going to be eager in solid 2.0. It's going to fetch
[03:56:44] Immediately.  It's not going to wait.  Because we need to avoid the diamond problem.  Similar problem when you have throwing.  Like you can basically.  If you wait to when you pull.  And you have.  You have.
[03:56:54] it throw. So like the first async thing throws and you don't get to fetch the second. It doesn't make sense. We need it to be eager. Um,
[03:57:01] But...
[03:57:02] Even with that, things that are never listened to,
[03:57:06] are still lazy in that sense.
[03:57:09] In any case, I was thinking about it, I'm like, okay,
[03:57:12] What are we doing here? Why are we using these? Why are we using signals on the server?
[03:57:20] And...
[03:57:21] If a signal fires in the woods and there's no one around to watch it, no work gets done.
[03:57:27] Thank you.
[03:57:28] Thank you.
[03:57:29] I realized yesterday that you and I have slightly difficult services. I just want to share a state between clients. Do you want to
[03:57:34] Rethink hydration. Well, I mean if your goal is just to share a state between clients, then you just
[03:57:39] have
[03:57:41] a web socket right
[03:57:43] Like you don't need signals.
[03:57:45] for that, right?
[03:57:50] Right? Like,
[03:57:51] The client can be the synchronous part with the signals and the source can just be
[03:57:56] whatever the message I guess to you'd be an interesting message protocol. I'm just not sure.
[03:58:00] what the signals on the server are doing for you over any kind of other event bus, right?
[03:58:06] But then I was like, okay, why would I want signals on that server?  Well, what if I went live view?  So we talked about this earlier about app architecture.  And so my question was like,
[03:58:16] I asked myself, "Can signals make live view better? Can we make a better live view?"
[03:58:20] That's sort of where I started thinking because I was like, you,
[03:58:24] It's not hydration came in, but that's not why I was doing this. I was, I was just like,
[03:58:30] Signals themselves as a mechanism to communicate might have some benefits, but once you leave the synchronous zone,
[03:58:36] it doesn't really matter.  You can have signals on the server,  signals on the client,  have them do their own system in sync.  And then they can just push out events  across the boundary  and handle each other's separate systems.  Linking it or trying to fake the linking of it is...
[03:58:51] It doesn't...  They aren't async to begin with, so it doesn't make...
[03:58:55] sense.
[03:58:57] Right, so there's a DX consideration, right, potentially.  But...
[03:59:02] So there is that consideration.  But I was like, okay, there's a comparison to things like WideView.  I saw some work with the Preact guys in Fresh, and I was like...
[03:59:13] What can we do here?
[03:59:15] Thank you.
[03:59:16] Thank you.
[03:59:17] Could you make a server single crit? Yeah, but my question.
[03:59:21] for everyone who's doing this stuff, it's like,
[03:59:24] What is the signal on the server doing? Where is it living?
[03:59:29] Otherwise, you're just calling setState, which could be message.push or observable.next.
[03:59:38] Thank you.
[03:59:39] Do you know what I mean? Like, what is the signal graph doing for you on the server? What is it synchronizing?
[03:59:47] It's not rendering UI, presumably. What is it doing?
[03:59:52] This is where I'm very foggy because...
[03:59:57] It.
[04:00:00] There's got to be an impact.
[04:00:02] to the graph or the connection for this to be any different than any kind of event bus.
[04:00:09] Right, multiplayer apps, but what is it actually doing on the server? I understand on the client that you're like, "Hey,
[04:00:17] I've updated this value. Send it over. Send it over here.
[04:00:22] Right.
[04:00:24] Yeah, like I am missing a huge...
[04:00:28] gap here because I don't understand what the signals are doing on the server at all.  The one thing I can picture signals doing on the server is render.
[04:00:35] So that's where I started
[04:00:38] started looking here because
[04:00:40] as we talked about earlier in the stream,
[04:00:43] There are
[04:00:44] arguably only
[04:00:47] three...
[04:00:49] architectures.
[04:00:51] Signals live here.
[04:00:52] Signals live here. They're great in Astro.
[04:00:55] Solid plus Astro...
[04:00:56] is amazing.
[04:00:58] Signals don't live here yet.
[04:01:00] And can we use signals to make this better?
[04:01:06] Thank you.
[04:01:10] - It's a graph that connects many users.  Yeah, but are the nodes all in the client?  Like, is the graph still on the other side?
[04:01:21] I guess the
[04:01:25] Thank you.
[04:01:32] Thank you.
[04:01:35] Thank you.
[04:01:37] Yeah.
[04:01:39] And, like,  if they're, like...
[04:01:42] Thank you.
[04:01:43] I've seen stuff like Convex.
[04:01:45] do this kind of thing
[04:01:48] But,
[04:01:49] Thank you.
[04:01:49] I've also been perfectly fine with Convex taking that path all the way straight to the client.
[04:01:55] or sync engine, same thing, taking it all the way straight to the client and then
[04:01:58] shoot out from the client side.
[04:02:08] Thank you.
[04:02:09] So, anyways, I started thinking about, well, can we mechanically use signal, like,
[04:02:14] in staple servers, right?
[04:02:20] So when we talk about UI, we generally talk state down to DOM, right?  We function as UI of state.
[04:02:25] We focus on the get, like the render.  But to talk about this topic, we need to trace back from the post.  We need to go all the way back to the event source.  Instead of thinking of our application starting from what we render,  we need to think about it starting from what we interact with, what we click.
[04:02:40] to something that possibly happens on the client.
[04:02:42] that always happens in the client. So if we want to have the server involved in the process, it starts with understanding
[04:02:47] where and how we do the handoff. So basically,
[04:02:51] with Live View.
[04:02:52] You render a page,
[04:02:54] and set up your live view, your WebSocket. And then
[04:02:57] From that baseline,
[04:02:59] like the server's already done the rendering. So from that baseline,
[04:03:02] you click something, you interact with the page,
[04:03:06] And that is the entry point. And if you think about it, Quix's resumability is also like that. They
[04:03:11] He...
[04:03:12] They don't hydrate.
[04:03:13] and then everything happens from the event delegation that's when they load the code except quick
[04:03:19] does all the work in the client always, right?
[04:03:21] because it's a single page app mentality.  You click with something,  then you need to bring in the JavaScript  for the click handler, set the state.  That triggers other JavaScript,  load, run that JavaScript.  But the thing this has in common  that I started realizing is it starts,  it assumes that the server has already put you  where you need to be.  And it starts from the interaction point  instead of starting from render.  Almost all UI frameworks,  basically we talk like rendering.  We're like, oh, React renders, you know,
[04:03:50] create that DOM.
[04:03:51] But if you start from a position where
[04:03:54] rendering is not the top of the graph, but the interactions atop the graph, it changes your perspective here, right?
[04:04:02] So,
[04:04:03] The easiest way, I'm actually using the live view example here, is
[04:04:07] um event
[04:04:08] to triggering the server, right? I mean, even the higher level, I guess you could say is,
[04:04:13] if you literally just captured the click event and then serialized that straight across and then like had a bubble on the, like a DOM on the server, that would be even further. But I think LiveView just basically turns.
[04:04:25] events into RPC calls. Like it is, don't get me wrong.  I know it's a web socket. I'm just saying it's a named
[04:04:33] Event so like a named function that you're saying do the decrement do the increment and
[04:04:39] Right.
[04:04:40] Um,
[04:04:41] So
[04:04:43] you know, inside your live view, this is live view JS, for example, you can see what it is.
[04:04:49] update your state,
[04:04:50] and then have it render on the server and send back the diff.
[04:04:53] Right. This is how live view works. It's the most basic thing. Um,
[04:05:00] A couple things here is I...
[04:05:01] It probably handles stuff at a component level.  Do you know what I mean?  Like you set the state, it re-renders the Y view.  It calculates the diff, but...
[04:05:10] It's not using signals here, so there's no granularity in terms of how state updates. It literally goes, "Okay, I need to recalculate my thing, do the diff, and figure out what I need to send across the wire." So maybe that's the first potential where we
[04:05:25] could do better, maybe, right?
[04:05:28] My first thought is to have the event always executed.
[04:05:31] OK, yeah, so...
[04:05:34] But okay, so actually that's not where I actually first thought go here. My first thought actually is to have the event always execute on the client. And actually, you know what, I'll save this. I'll put this in the chat so you guys can see this.
[04:05:44] Thank you.
[04:05:47] Okay, so originally it was route level, I think they have per component handler. Yeah, I wanna... I'm sort of thinking like, what can we do better, right?
[04:05:55] Right, the real one. Fair enough.
[04:05:58] So I was like...
[04:06:01] first problem that we saw when we were doing our architecture
[04:06:04] is that
[04:06:06] Thank you.
[04:06:08] like, is that it's hard to do the client side stuff. It's a separate model. So I was like, what if
[04:06:14] we have the events always execute on the client  and be interceptable with JS code.  So I'm thinking kind of like quick,
[04:06:21] you know, where the event handler is the island. It's like the, it's the, it's,
[04:06:26] It's funny, I said quick, but I use the term island, but that's what I wanted to think.  Think of the event handlers as the JS islands on a server rendered page.  Not based on render code, but the event handlers, the island.
[04:06:38] And picture in that
[04:06:39] event handler, you could
[04:06:43] basically set signals.
[04:06:46] Thank you.
[04:06:47] Right? But that closure of over the signal setter or read could be something that could be serialized.  You know, this is why I start thinking like quick.
[04:06:56] Would there be any benefit to this?
[04:06:58] Right?
[04:06:59] to being able to run arbitrary JavaScript code in the client  and have it trigger signals, essentially, that would then update on the server
[04:07:08] re-render parts of the app on specific parts on the server and then send back the diff and update from the server.
[04:07:14] Right?  So I'm just kind of thinking...
[04:07:18] kind of live view, except instead of the vents being the transport, it's signals.
[04:07:24] Would there be any benefit to this?
[04:07:26] but only if you could also do client-only things right like you're in the event handler
[04:07:32] Why bring that to the client unless you could do
[04:07:35] if you're just going to go to the server directly anyways.
[04:07:38] so
[04:07:40] Thank you.
[04:07:41] Thank you.
[04:07:42] I think you start going, maybe we need server and client signals.  So picture if you had an event and you could basically have two different types of signals.
[04:07:54] This is just...
[04:07:55] hypothetical, then you could set off a chain of events that only happen in the browser,  declaratively, and a chain of events that only happens on the server,
[04:08:03] as well, declaratively, like a shared universal model.
[04:08:07] I'm not.
[04:08:08] Okay. Does that work?
[04:08:13] Right, you could like change the selected state, which could directly update part of the DOM, but switching a visibility of a toggle could go to the server and render the whole new section.
[04:08:20] But there are two challenges to this.  First of all, how do you render something on the server when they're
[04:08:26] is state only the client knows about,
[04:08:29] And how do you isolate it from the client side to know it's responsible for render?  We end up in a use client land, I think.  You end up basically with something that's server component-like, saying like, this is part that's client responsible.
[04:08:41] Um,
[04:08:42] That's...
[04:08:43] too muddled for where I want to go. So let's consider alternatives, right? Basically,
[04:08:48] I understand we could have like traditional, I would say, like reactive signals with like blocks in this model.  So you could basically have server components that do...
[04:08:59] signal based updates and then have interactive things that do client based updates. But
[04:09:04] I want to do more purist. I want to live in a world where a used client doesn't exist. So let's not go there right away. What if all signal writes trigger propagation on the client and server? If the execution never makes it to the server,
[04:09:16] a server-based derivation, then we know that the server doesn't have to respond with anything as the client can handle it all. So an example of this is if you updated a value,
[04:09:26] And it literally went straight to a CSS class.
[04:09:30] From the propagation.  The effect.  Is just.
[04:09:35] render this
[04:09:36] new class. It doesn't need to go to the server.
[04:09:40] So the question is, how do you make this classification
[04:09:43] of what is a server derivation. It starts with the premise that all new element  render only happens on the server, okay?
[04:09:50] Let's pretend that JSX only exists on the server.
[04:09:54] This isn't a solution for optimistic updates, like, you know, that might be used client, we'll get there later. But
[04:10:02] Anything that would lead to rendering new JSX would be on the server.  So like a for component or show any place where you actually have a conditional  that would cause structural changes would always go to the server.
[04:10:13] Anything with async data fetching, always go to the server.
[04:10:16] So in this world, the reactivity graph would need to be completely serializable, and both sides would have stable IDs. Then reactivity could synchronously propagate on the client as far as it could until it hit an async derivation.
[04:10:29] Right on.
[04:10:30] the client, these scheduled syncs, just like effects, they're scheduled, basically, just like effects. So we can send them all batch together. So if you do an update, and it hits a bunch of server stuff, you can just
[04:10:40] basically send all the
[04:10:43] stuff on a single go across these web sockets or whatever.
[04:10:48] So
[04:10:49] And we'd serialized...
[04:10:51] up that part of the graph and send a request to the server to update its values to continue the rest of the propagation.
[04:10:57] So yeah, basically...
[04:11:00] Effects that directly render the DOM.
[04:11:03] could live on the client.
[04:11:05] And
[04:11:06] anything that would actually, by render them, I mean update values.
[04:11:11] attribute setting like
[04:11:13] I mean, this distinction is actually very noticeable.
[04:11:16] I'm going to delete this for now.  In solid, you can actually see the difference between, say, an insert...
[04:11:23] And...
[04:11:24] when I go
[04:11:26] um let's think something let's go title
[04:11:29] equals it could be class here, but let's make it count just for fun. You can actually see,
[04:11:35] that this is a different class of update
[04:11:39] than this is.
[04:11:40] I'm saying like something like this.  I mean, this is the worst case scenario where it's text being directly put in would go to the server where something like this could actually stay completely in the client if we wanted to.
[04:11:52] There might be better heuristics to identify this case so that you could tell that this is just a value and not JSX and then it could also stay in the client. Because like, if I, like, this is silly right now, but if in solid, if I change this to text content equals count,
[04:12:08] what you'll see is that it won't do an insert, it will actually know to
[04:12:14] essentially
[04:12:16] uh,
[04:12:18] set the text on the data node. Just an aside, I'm just... this is completely hypothetical, but I just wanted to kind of put it out there that in this kind of world,
[04:12:28] It's possible that things that
[04:12:32] update existing DOM, could never need to go to the server,
[04:12:36] like updating classes.
[04:12:37] and things that required structural changes, like rendering new elements, could go to the server.
[04:12:44] Would it be an increased payload?  No.
[04:12:49] But it might be fine because on any given change, you're not going to end up sterilizing the whole graph, only parts of it.
[04:12:55] And then the server gets the updated graph.
[04:12:58] and then it finished the propagation and sends its values back. So this game, again, it's kind of funny. It's like ASP.NET.
[04:13:06] which is a terrible thing to be fair.  But in,  in,
[04:13:11] Back in the day, we used to serialize up stuff, do part of the work on the server to the new client and do this handoff back and forth. My question is,
[04:13:18] Is there a world where this handoff, if it were fine-grained,
[04:13:21] could be efficient enough that we don't have the old, like, giant view state problem. The problem with sp.nit is you'd send all the freaking data and then send all the data back. But what if we could split it up to only the parts of the graph that actually updated?
[04:13:34] Um...
[04:13:35] Then...
[04:13:36] we could actually get past that old wall.
[04:13:40] And see, an interesting side effect of thinking about this is maybe all effects would live only in the client.
[04:13:46] This is how you know it. If you can propagate all the way down to the effect,
[04:13:49] then
[04:13:50] Um,
[04:13:53] You know you don't need to go down to the server. Okay.
[04:13:58] And I started thinking about compilation, and this is why I got to doing it, because  this doesn't matter a ton.
[04:14:05] Basically, the code that I generated here is my
[04:14:08] proposal is identical to the code that I generated for resumability, except it's even less. I realized
[04:14:16] that in this thing, it's very similar of like doing this kind of scope read thing.  Don't worry too much about it.  If you haven't read my resumability without serialization,
[04:14:24] idea, this probably isn't that important, but what I realized is that
[04:14:30] we could basically do something similar to Quix
[04:14:33] compilation, but because we're assuming that all the renderings happening on the server, it could be even
[04:14:40] smaller.
[04:14:41] on the server. Basically, the thought is that
[04:14:45] All signals are basically isomorphic or server only.
[04:14:51] There's no client only signal in this kind of mentality.
[04:14:56] The reason it's isomorphic is we would render the signal originally on the server.
[04:15:03] and write it to some kind of scope that could be then registered and read
[04:15:07] essentially from these scopes.  You can grab the DOM node, grab the signal, and like node insert it, or, you know, do this and do this.
[04:15:15] Um,
[04:15:18] If you if you knew
[04:15:20] Like in this case, I actually show it all happening on the client. Once you register these events,
[04:15:26] This reads from a single and increments the value.  It could propagate through, because this would have been set up as, like, basically, because you serialize the graph at an initial render and have all the dependencies.  You have this living memory version of the signals in the serialized data.
[04:15:42] And then
[04:15:43] essentially you just have to inject the scope on these event handlers,  essentially.  So it's like,
[04:15:49] It's.
[04:15:50] It's hard for me to explain this to anyone, but this is the way Quick, Marco, Wiz essentially work.  And...
[04:15:57] Technically,
[04:15:58] Um,
[04:16:00] it's kind of basically like quick but smaller.
[04:16:10] Yeah, don't get me wrong. I think there would have, there is a potential that the server signals would have to have some kind of effect. I just meant from like a rendering standpoint, maybe the server would need like its own category. There's like,
[04:16:23] useEffect and useRenderEffect, which are very clearly client, and then there could be like useServerEffect or something, right? There is probably
[04:16:32] a use case for writing out on the server side.  I just, for the sake of the case of rendering,  which is what I'm focused on, I was just like,  let's just pretend that these kind of effects are client only.
[04:16:45] um
[04:16:46] This is hashes from the build.
[04:16:49] Uh,
[04:16:51] Thank you.
[04:16:52] Basically, this component can only ever run on the server and will never rerun.  Like essentially, we run this once on the server, serialize stuff, and the only thing that we end up doing is registering effects and events.  Right? There's no action. The client code does not include the ability to actually re-render this component, which is fine.  Because we registered the events in that, it still has the ability to fine grained update just the count of this text node without going to the server.
[04:17:16] because it registered the events, but it is incapable of actually rendering it. And while this looks like it's large, this would minzip down to nothing.
[04:17:27] Yeah, this is super small, optimal code.
[04:17:32] So what if you need to do something, you know,  like maybe show when, like some kind of toggle, right?
[04:17:38] I kind of made this too,  but the idea is like,
[04:17:42] The expression from the show would be a server...
[04:17:47] Like if you know show returns create memo in solid,
[04:17:50] It could be like a server memo.
[04:17:52] So essentially, the client only needs to know that it's reading from the scope and creates reactive dependency. It doesn't actually need any of the code to actually do the rendering.
[04:18:03] *sniff*
[04:18:05] Yeah, let me see, how did I do this? The signal will trigger internal my relevant show, which would be marked as server only, this would grab the children, also part of the server reactive graph and render them the values showing to it, right? Because I'm saying that this
[04:18:18] actually
[04:18:19] is only on the server as well.
[04:18:21] Um,
[04:18:23] I
[04:18:27] Yeah. There's gaps in what I'm explaining. I put a div in here to make this more visible. Like if there was no top level div, it's an interesting exercise of figuring out how the components compose in order to do this. But it's so similar to what we solved for resumability that I'm pretty confident that something like this could work, right?
[04:18:46] Um,
[04:18:49] Obviously, I haven't talked about
[04:18:52] Server events, which is, you know, it's possible that a database triggers stuff like LiveViewStyle and pushes it through, you know, not LiveViewStyle, like, you know, like,
[04:19:01] like when you have like real-time database updates, kind of polling, triggering all the UIs.  Nothing here I think stopped that from working because it's all connected.  It just propagates it back along the socket. Optimistic updates,
[04:19:14] I don't know. It suggests a need for client islands.
[04:19:20] But...
[04:19:21] I started kind of thinking if this...
[04:19:24] Thank you.
[04:19:25] Would there be benefits of this kind of architecture?
[04:19:28] um
[04:19:33] Yes. Yeah, the server memo does run when the show condition changes, yeah.
[04:19:41] Oh, all right.
[04:19:45] This is where web components shine.
[04:19:48] Okay.
[04:19:49] What?
[04:19:50] Web components don't do anything. I don't...
[04:19:53] Web Components would actually probably completely get in the way of this.
[04:19:57] Okay, anyway, let's move on.
[04:20:00] Yeah.
[04:20:01] Um.
[04:20:02] So let's make sense. The double data serialization is caused by the need to client render. We use things like islands, the way of isolating that, but client routing basically reverses our decision. One approach is to try reverse data out of the HTML, but other might be to recognize that all interactively needs to involve client rendering. If the data clearly is on the server, then maybe there's a zone where we can know to skip it. That's been the problem. We don't know from an API standpoint. I'm not sure this gets us
[04:20:25] there either, but there's potential. But if we turn the whole conversation to be about serializing the reactive graph, maybe there are some rules that can merge. So just kind of off the top of my head here. Signals are isomorphic and can live on both sides and triggered by either. Sure. Effects are generally client only, but maybe the left side isn't, like the tracking side.
[04:20:42] in terms of split effects that I've been talking about.  We need to know what the pull on both sides.  Deride values can either be isomorphic or server only.  Signals whose setter is never called from the client  could be considered a server node.  So this is where I'm sort of going.  There's a heuristic here, right?  Like you could basically say that a signal  who never gets updated
[04:21:02] doesn't really need to go to the client unless
[04:21:05] something that's derived from it also depends on something from the client.  So you start kind of coloring the nodes.  Derived values that only read from server nodes don't need their sources serialized  and could be considered server nodes.
[04:21:15] and so on. It is only the intersection of server and isomorphic nodes that require  the server side of the graph to be serialized.
[04:21:22] Which...
[04:21:25] Which is interesting because like presumably this sort of automatic optimization will lead significant behavior changes over very subtle differences.
[04:21:36] So it's tricky.
[04:21:41] What? What?
[04:21:43] Custom elements have no bearing on what I'm talking about here.
[04:21:49] as far as I can see.
[04:21:52] It's, it's,
[04:21:56] Custom element life cycles actually probably get in the way of this being hyper granular.
[04:22:02] Right. Like I'm talking about code entry point literally being a specific entry.  You don't want
[04:22:09] the rest of the DOM life cycles. You don't want connected callbacks.
[04:22:14] You don't want...
[04:22:16] Sorry, you're right. I'm getting hijacked.
[04:22:21] Okay, so let's think of a couple examples here.
[04:22:28] First example, my favorite.
[04:22:31] Solid.
[04:22:38] But like, let me pick like a solid hacker news.
[04:22:42] What was it? I never remember. I have like my experimental app, but that's not the one I wanted to open.
[04:22:48] But it's fine, I'll just open this one.
[04:22:51] Let's consider this case.
[04:22:56] Thank you.
[04:22:58] Thank you.
[04:23:01] Thank you.
[04:23:04] Thank you.
[04:23:07] Where I'm getting at here is
[04:23:10] Uh, yeah.
[04:23:13] Like,
[04:23:14] the comment toggle would be completely isolated from the data that renders it. If you've ever seen the code,
[04:23:19] For this, do I have solid start open here?
[04:23:23] Strello, I have Strello open. Okay, now it's all start. Have you ever seen the code to render, let's say solid
[04:23:29] Hacker News GitHub. Let me just...
[04:23:34] So
[04:23:36] I don't know if I actually changed...
[04:23:40] I can tell in two seconds. This one might not have the... yeah, this one doesn't.
[04:23:46] Just go to Salt Start.
[04:23:48] Let me see. Okay, so I'll start.
[04:23:52] Examples, Hacker News.
[04:23:58] Source.
[04:24:00] Components. Okay.
[04:24:03] If you've ever seen this toggle component,
[04:24:05] This is separated because it was for islands.
[04:24:08] The logic for the state of the toggle is completely independent. Like you don't see the data here.
[04:24:15] that is rendering in the list.  It just gets passed through as props.children.
[04:24:19] Each one wraps, but the actual content is in the comment component.
[04:24:23] And the comment component just gets wrapped by this toggle. So it projects
[04:24:29] through essentially
[04:24:31] Because there's no connectivity in this kind of use case,
[04:24:40] then there's no need to go to the server
[04:24:43] for the server to serialize the data because it could basically tell from this that
[04:24:48] The...
[04:24:49] Tsss.
[04:24:50] async source
[04:24:52] never intersects with a client source.
[04:24:56] There's a wrapper there in the view, but they never intersect, so you don't have to serialize it.  And the only thing that actually gets set in the view...
[04:25:05] is...
[04:25:06] Well, we can see it.
[04:25:08] right here in the toggle,
[04:25:09] is
[04:25:10] on click set open right here, which means that
[04:25:15] This
[04:25:17] This would need to be serialized, but the main content of the page.
[04:25:22] In a sense,
[04:25:24] like Resumability,
[04:25:28] We...
[04:25:29] actually not resumability,  resumability comes back when you add client routing.  But generally speaking,  we know that we,  because we know,
[04:25:36] like in an MPA kind of setup, or resumability when you use it with an MPA, that we're never going to client render the page, we know that it's safe that we don't actually need this other data because there's no intersection of data.
[04:25:48] So.
[04:25:50] The funny thing about this example, though, is right now this toggle
[04:25:54] Open.
[04:25:56] sets a class.  And if we're just setting a class,
[04:25:59] This can be done completely on the client.
[04:26:02] If this was a show component and it was hiding the component,
[04:26:06] This architecture would actually go back to the server and re-render those specific
[04:26:12] uh,
[04:26:13] comments.
[04:26:15] Um,
[04:26:16] back and forth, which is funny because with server components, you always serialize up front, you know the props, so you would never go back to the server.
[04:26:24] um you'd render all the comments out front even the hidden ones and then you just toggle
[04:26:30] this approach
[04:26:31] If you actually were not sending all the information up front, it would toggle and actually go back to the server.  But with a class list, it could stay client side.  The reason I'm showing this distinction is it's important to understand that this mechanism
[04:26:45] can both accomplish client only interaction
[04:26:49] natively through declarative, unlike LiveView.
[04:26:53] and also do what YView would typically do, which
[04:26:57] would be, you know,
[04:26:59] Um,
[04:27:00] that don't get me wrong live view has a way to set classes without going to the server  i'm saying it's not part of the declarative data model
[04:27:06] So this scales, which is the difference on the client.
[04:27:10] Um, but
[04:27:13] And then another thing, consider a scenario where we're using client to format some server data, say a join date on a user profile.  If it is changing the data format that appears in the text node, so let's pretend you just want to change the date format.
[04:27:25] That means the user would need to be serialized because it's an intersection between the user's data, like when they joined, and a toggle signal on the client that says change date format.
[04:27:35] or right, so we need to serialize the user at that point, because we're morphing its data on the client. So there's an intersection. If the change instead was to change the visible arrangement of the profile, then it would go back to the server to render the new profile, it might not end up serializing the user in this case, because
[04:27:54] Um,
[04:27:55] the
[04:27:57] the intersection point
[04:28:01] wouldn't be...
[04:28:03] Thank you.
[04:28:04] here it would be something that would need to render it. I'm 50/50 right now on if in all cases this would be the case.
[04:28:13] Um,
[04:28:14] I use both these examples because they're around a femoral state that isn't persisted the database.  In cases where it would be persisted, which is pretty common, then it would likely be you doing something more like an action where you trigger async data refetching rather than setting the signal with a value, which means we know that it was always on the server anyways.  Optimistic updates are probably the best example I can think where server-derived values meet a femoral client state.  In those cases, I don't think you could ever save on serialization because you need to have the list to think of the strelable board.
[04:28:44] showing the optimist updates, you need the data.
[04:28:46] in the client.
[04:28:48] in order to like know where to inject it right from a stateful standpoint obviously you can like
[04:28:54] do a manual DOM upgrade, but like
[04:28:58] I'm trying to avoid the live use solution.  It's not sufficient from a declarative standpoint.
[04:29:04] So like
[04:29:06] I do think serialization is necessary in parts of the UI where you are doing actual work on this data ephemerally. Just a side note. But what's interesting is I think this could work automatically.
[04:29:19] Okay, could this be an improvement over diff being over the wire?  I guess back to a real question.  Does this actually potentially do something better than, say, LiveView?  There's a lot of complexity here.  I think the most interesting prospect isn't that the potential to do fine-agreant updates,  but that certain updates could stay on the client automatically.  The JS output would be slightly larger, and the serialization potentially,  but maybe there's a path which blends the benefit of a single model between client and server,  not two side-by-side, but the same model.  The interesting areas that LiveView find difficult are still tricky here,  but it seems like it could be much better at bridging the gap.
[04:29:49] does suffer from serialization boundary concerns like QUIC, except it's only the event and  the effects that are special. I think that alone might lower the friction. Security might  be a concern too if serialization is so granular.
[04:30:00] - To this really comes down to the understanding
[04:30:02] what can be determined at compile time and not.  You want to color the graph, so to speak.  If that can lead to savings and still allow the events  in the browser, then you have makings for a unified model.  Of course, you need a persistent server web socket connection,  too, so that would need a pretty specific architecture.
[04:30:18] But I can see where this is where things could go. Anyways.
[04:30:21] Sorry, just a brain dump.
[04:30:25] But...
[04:30:26] This is...  I could see...
[04:30:31] a world where we took something that was similar, as I said, to Quix's
[04:30:37] compilation and isolation and applied it to a server, stateful server world.
[04:30:43] to actually...
[04:30:46] Get the benefits of quick.
[04:30:48] and never send the stuff.
[04:30:52] to the client. I think that's one of the
[04:30:54] And that will solve the double data, double HTML problem.
[04:30:59] It could actually...
[04:31:02] solve the whole thing.
[04:31:03] Amen.
[04:31:05] It's also freaking complicated. You basically have to do all the work that's required for something like Quik plus
[04:31:12] Yeah, I mean, this is probably the most ambitious, crazy idea I could think of.  So I mean,
[04:31:18] Now it's out there in the ether, people can think about that.
[04:31:23] I don't get why people are talking about web components here.
[04:31:28] It's almost like when people were like, oh yeah, webconsulting, it's like,
[04:31:34] Web components are barely passable as islands, like, and we're talking about stuff that's like,
[04:31:41] Thank you.
[04:31:44] It's interesting.  If you use the fact that they're an encoding for DOM elements,  I guess that's interesting.  But the fact that they require JS is...
[04:31:53] awkward. It feels like you could create your own custom encoding onto DOM elements, script tags,  templating, comment nodes, and you just be more efficient and require less JavaScript. So it's  like very confusing.
[04:32:06] how you guys have web components be like,
[04:32:09] anything.
[04:32:10] Yeah, you know.
[04:32:12] about the potential here.
[04:32:17] Yeah, you've already implanted it with web components, yeah.
[04:32:22] That's the solution.
[04:32:24] Funny.
[04:32:25] I'm going to go.
[04:32:29] Thank you.
[04:32:31] This is sort of a Marco 6 thing. Yeah, I mean, this is, this is, I mean, Marco 6,
[04:32:37] and quicker in this kind of zone. Marco6 was basically, you can view it almost as like quick,
[04:32:43] but fixing the awkwardness around the DX.  They wanted to use the compiler just a bit further so that like dollar  signs weren't necessary anymore.  That's that's like Marco in a nutshell.  Like what if we can solve the same thing similar to quick, but without the dollar signs.
[04:32:58] The problem is once you add back client-side routing,
[04:33:02] It's not solved.
[04:33:03] None of this actually solves your client-side routing.
[04:33:07] And
[04:33:08] The only way I can...
[04:33:10] When I saw LiveView and I was thinking about the only way you can really solve for client-side routing
[04:33:14] in these scenarios.
[04:33:15] is no 100% that you're never going to render the thing on the client again,  which gets you into server component land.  But the problem is, sure, you can isolate the server...
[04:33:26] components as being server only.
[04:33:28] whatever but then the client components you actually don't want to ship all of their code either
[04:33:33] which makes it really weird to have this arbitrary distinction because they're not client components anymore.  They're like mostly server components.  So you have server components and mostly server components.  It's...
[04:33:42] It's a very weird...
[04:33:45] Split and
[04:33:47] Um,
[04:33:48] It's very particular.
[04:33:51] Thank you.
[04:33:51] Thank you.
[04:33:52] So, I mean, this is a very difficult problem.  So it's like one of those things where it's like,
[04:33:58] Quik really wants to automate it so you don't have to think about it, which I think is a really admirable goal.
[04:34:02] but they can't solve this problem.
[04:34:04] I don't think.
[04:34:06] Funnily enough, Stateful Server, I actually think,
[04:34:10] does solve the other half of the equation. So in theory,
[04:34:14] If you put the two pieces together, you probably
[04:34:19] could
[04:34:20] have client routing plus
[04:34:24] resumable
[04:34:26] Whatever.
[04:34:27] minimal code and never take the hit.
[04:34:31] Again, I don't know.
[04:34:33] Stapled servers might just be too prohibitive from a cost perspective.
[04:34:37] I hadn't thought along this lines, and I think it's important to explore the potential or at least think about the potential of where we can do better because...
[04:34:45] Sometimes the compromises work.
[04:34:48] Sometimes the compromises...
[04:34:52] don't really work, right?
[04:34:54] So like, yeah.
[04:34:57] Anyway.
[04:34:58] Just food for thought.
[04:35:00] Okay.
[04:35:01] Okay, let's...
[04:35:03] Yeah, it is very...
[04:35:06] Complicated.
[04:35:07] Yeah. The reason web components trigger me
[04:35:13] Thank you.
[04:35:15] is that like they often are fine,  but have absolutely no bearing on any solution there.  It's like, it's like one of those things where you're like,
[04:35:27] You can do something...
[04:35:29] or you can do that something also with web components.
[04:35:33] And the benefit of web components is like, oh, this is a packaged up.  It's isolatable.  You know, you can kind of
[04:35:39] But the actual mechanism is never determined by the web components themselves.
[04:35:43] Except for, unless it's like a very specific thing, they only provide like...
[04:35:47] Shadow DOM providing style isolation.
[04:35:51] So it's very odd when people are like, oh yeah, web components, and you're like,
[04:35:55] It's like, oh yeah, I rewrote my app in web components way faster than React. It's like,
[04:36:00] Thank you.
[04:36:01] the web components didn't make it faster than React.
[04:36:05] You know what I mean? Like, it literally...
[04:36:08] Is says nothing so I think like
[04:36:12] It's almost like, you know, I got a bit of a BS meter, so to speak when, or like, I don't like marketing a lot because it's like inaccurate. I think when.
[04:36:21] I think web components trigger the BS meter on me like repeatedly, like
[04:36:26] It's so hard when you see people like
[04:36:29] say stuff about web components and you're just like,
[04:36:33] like the argument isn't even there.  It's just like,
[04:36:37] How do you deal with so much, you know, illogical thinking?
[04:36:42] It's hard.
[04:36:44] Thank you.
[04:36:46] Thank you.
[04:36:48] Thank you.
[04:36:49] Anyway, sorry, Deb. So to take service notes to its logical stream, I have to build QuickClick compiler. I mean, I don't know.
[04:36:58] I just want to know
[04:37:00] if there's something in the live view spectrum of things.
[04:37:05] Because...
[04:37:06] no one's still showing me what the signals are doing on the server.  I'm just like missing something there.  And the only thing I can think of,
[04:37:12] it's solved problems that I've actually faced, which is around rendering hydration,
[04:37:17] you know,
[04:37:19] serialization
[04:37:20] It occurred to me after seeing Live View that they don't need to hydrate.
[04:37:26] which is amazing.
[04:37:28] and they don't need the double data, and they have client-side routing.
[04:37:35] Literally nothing else has done that.
[04:37:39] There is not a single other architecture that has actually hit the trifecta.  The cost is extreme, though.
[04:37:46] Thank you.
[04:37:48] right?
[04:37:52] And they have other...
[04:37:54] things that we take for granted that they don't do as well.
[04:37:57] But
[04:37:58] In terms of the problem we've been trying to solve,
[04:38:01] for like the last like
[04:38:03] Six years.
[04:38:04] longer, 10 years almost.
[04:38:07] It's the only solution I've seen so far that actually hits all of it.
[04:38:15] Thank you.
[04:38:18] well that's the whole thing  like setting
[04:38:24] If something happens synchronously, like it's like a...
[04:38:27] Like it's
[04:38:29] it comes through a flow, then you can collect it the same way we do batching of effects. But yes, if there's async going on here, this is why signals don't suit going over the wire.
[04:38:40] so to speak, right?
[04:38:42] You...
[04:38:43] The async is outside the system and then it's
[04:38:46] gets consolidated coming in.
[04:38:50] Async setters is like
[04:38:52] Async getters is something that, you know, considered async setters as a whole other
[04:38:56] concern or problem that's way out of the scope.
[04:39:01] Thank you.
[04:39:06] yes, Vanilla.js is faster than React.  That is pretty much the conclusion  you can come to.  The thing is,
[04:39:18] Um...
[04:39:20] Is Vanilla JS...
[04:39:24] as manageable as React. Do you know what I mean? Like,
[04:39:29] coordinatable
[04:39:31] How does it scale?  I mean, you'd probably use...
[04:39:35] a framework, maybe. Maybe use something like Lit. And then
[04:39:41] is lit faster than React? And you could also probably say yes.
[04:39:46] But the question then is, is lit faster than solid? And you can probably say no.
[04:39:51] like that's what the question is it's not web components it's whether lit is faster than solid  or slower than or faster than react or whatever do you know what i mean
[04:40:02] Thank you.
[04:40:06] Thank you.
[04:40:09] I want an MPA with sprinkling the islands in JavaScript. Yeah. The question if go, I think Astro is amazing and people should just go use it all day long. I'm the question is, I started this, I'm building apps. I'm thinking about apps. What if you could build an app?
[04:40:24] typical way, almost like the way you build with React today,
[04:40:27] and the output
[04:40:29] was essentially
[04:40:31] your MPA with client-side routing with sprinkle.js.  You didn't have to use client to say this is the client component to do that.  You just write the freaking app.
[04:40:38] and what you get.
[04:40:39] is exactly that.
[04:40:41] That's what we're getting to with this stuff.  We literally build these crazy frameworks so we can output jQuery.
[04:40:48] Like...
[04:40:50] I mean, now that jQuery is built into the browser, that is.
[04:40:54] Thank you.
[04:40:57] I don't think so. I think statefulness of the server is the key fundamental separating point. I don't think there's any similarity between these two.
[04:41:07] Thank you.
[04:41:11] Thank you.
[04:41:14] - Statefulness of the server is like a non-start,  Purcell sells serverless,
[04:41:19] Yeah, I don't know.
[04:41:27] Thank you.
[04:41:30] The problem is like, it's why I'm talking about this, right? Once you add client side routing to quick, for example, then it takes the huge hit, right? We all do. This is why this is interesting. There is a solution that can solve this. Quick otherwise is basically the same as every other single page app framework, other than it hydrates a little bit faster.
[04:41:53] Right. We.
[04:41:57] Stateful serverless should be a thing, yeah. If it's cost, like, yeah.
[04:42:01] Thank you.
[04:42:03] Yeah, yes, exactly. Okay, let's get to this week in JavaScript. I'm going to throw up my head for a minute, and then we're going to switch gears.
[04:42:14] All right.
[04:42:17] Thank you all for still being here. It's been a stream.
[04:42:27] All right.
[04:42:31] Thank you.
[04:42:35] .
[04:42:36] All right, just getting everything set up. Just give me two seconds.
[04:42:44] *Sigh*
[04:42:57] Holy shit, I'm going to bookmark that, sorry.
[04:43:02] That's a big win.
[04:43:06] I'm actually gonna retweet this. Sorry, I didn't see that.
[04:43:10] Give me two seconds. I'll do that after the stream, but...
[04:43:15] Okay, so...
[04:43:19] go to my profile. Okay, let's get this going.
[04:43:23] Then the last one I need is solid.
[04:43:28] All right.
[04:43:33] Thank you.
[04:43:34] Thank you.
[04:43:36] Thank you.
[04:43:37] Okay. When was our last stream? Oh wow, it was September 26th, was it?
[04:43:43] No, that's when I wrote the article. I've streamed since then. It was October 9th.
[04:43:47] It's only a week ago, roughly.  Not 9th, 11th.
[04:43:51] Yeah, there we go. Okay.
[04:43:54] Yeah. Okay. Yeah. There's not much on my personal...
[04:43:58] Let's go back October 11th.
[04:44:02] All right.
[04:44:07] Okay. And October 11th. Yeah.
[04:44:16] Yeah, sorry, I just had a funny thought when I was looking at this because I didn't finish my thought on the web component stuff completely. But you know how there's that thing where people are like,
[04:44:24] Let's add signals.
[04:44:26] That will make things faster, right?  And I always go adding signals...
[04:44:31] won't make things faster. It's the things you can remove when you add signals that make it faster.
[04:44:37] The funniest thing about web components is like,
[04:44:42] adding web components also doesn't make things faster, right, in itself.  You could argue...
[04:44:49] Um,
[04:44:49] Mm-hmm.
[04:44:50] you know, that the thing it removes, um,
[04:44:54] potentially is what makes it faster.  But the funny thing about web components is also removing
[04:44:59] Web Components will always make something faster.
[04:45:03] So, like...
[04:45:06] it's a funny thing.  Like,
[04:45:10] Yeah, I don't know. Maybe that thought needs a little bit more pointing out, but...
[04:45:15] Yeah, it's the removing React that made it faster.
[04:45:18] But and web components help you get there.  But also now that you're done, removing web components will also be even better.
[04:45:25] So it's like,
[04:45:26] It's kind of a funny thing.
[04:45:30] All right.
[04:45:31] All right, let's switch over to the views.
[04:45:41] Bam. Okay.
[04:45:44] I think we already talked about this.
[04:45:48] We talked about this. Okay, sorry.
[04:45:52] We talked about this. It's been a slow week. Okay, sweet. So,
[04:45:57] Yeah, we talked about use cache.
[04:46:00] talked about
[04:46:04] Yeah, we talked about all this stuff. Okay.
[04:46:07] All right.
[04:46:10] Let's go with this week in JavaScript.  It's my closest thing for a marker for Jesse,  gets around to doing the timestamps,  which I'm incredibly thankful for.
[04:46:21] Should all give thanks to Jesse for the timestamps. They're amazing. Um,
[04:46:27] Thank you.
[04:46:28] But yeah,
[04:46:32] Most of the stuff I want to talk about today is actually, we talked about the other stuff.  I want to talk mostly about solid stuff.  Yeah.  It's going to be, yeah.  Famous last words.  Definitely.  Um,
[04:46:42] Yes, definitely.
[04:46:47] First of all, my beat comp talk is up.
[04:46:49] talks all about serialization, talks about the work we did with mostly Lexus.  I say we, but the
[04:46:55] the collective we, but Alexis did on serialization for Solid  and Solid Start with Cerevel, how serialization is a key.
[04:47:05] which you can see from a conversation we're talking about to the future.
[04:47:09] Yeah, it was an interesting talk. It was a lot of fun.
[04:47:12] We've already mentioned it once before,
[04:47:14] SolidHack is...
[04:47:17] is in full flight right now.  Important shout out because we've been doing these
[04:47:26] How do I put it?
[04:47:30] Thank you.
[04:47:31] bounties, I guess the best way to put it. And they can be claimed by anyone. Every Monday,  we check and see if they've come in. And we actually have our first
[04:47:40] Um...
[04:47:41] our first two winners.
[04:47:45] Brindley wrote a tutorial, which is a useful one, basically how to do auth with clerk in Solid Start.
[04:47:54] So this could be interesting.  People want to understand how to do auth in Solid Start.  This is a concrete example using clerk in the clerk API.
[04:48:03] Um,
[04:48:05] So very cool. These kind of how-to guides are so valuable where we are in the community. And I'm pretty sure he picked up a tidy $500 USD.
[04:48:16] for writing this guide.
[04:48:17] Um,
[04:48:19] Yeah.
[04:48:20] Very, very cool.
[04:48:23] And then Dev, who we've seen featured on the stream a bunch,
[04:48:29] Thank you.
[04:48:30] Thank you.
[04:48:31] you
[04:48:32] I made a new solid primitive, which is very cool, called Solid Events.  I haven't looked at it yet.  Maybe we'll have Devon stream to talk about it.
[04:48:44] but the idea is that events are different than signals so we need events
[04:48:49] So create event on
[04:48:50] on event, emit event,
[04:48:53] AmitEvent sends it, and I'm guessing
[04:48:57] Let's see here, on message, on increment.  I see.
[04:49:03] Some people really like the...
[04:49:06] it's got like Rx vibes to it,  but the idea is you basically set up an event emitter,  but I'm gathering on the other side,
[04:49:16] on increment
[04:49:18] No.
[04:49:18] mid event on increment
[04:49:21] Interesting.
[04:49:24] On message. Does this just keep on chaining?
[04:49:31] Okay, it keeps on changing, so it's composable.
[04:49:38] Okay, so each of these helpers actually returns, yeah, okay.
[04:49:46] Thank you.
[04:49:49] Okay, so...
[04:49:56] Halt.
[04:49:58] Nice, okay.
[04:50:02] Thank you.
[04:50:03] async, like it,
[04:50:12] Okay.
[04:50:20] Okay, so this is how we get,
[04:50:22] we get our signal at the end. So we consume it. We go here, give it a default value,
[04:50:29] wiring our event
[04:50:30] And then wire our...
[04:50:33] cleanup
[04:50:34] I'm gathering one of the three arguments.
[04:50:37] Thank you.
[04:50:39] Thank you.
[04:50:42] Thank you.
[04:50:43] Thank you.
[04:50:44] Or is this just a chaining syntax so you can just put them on top of each other?
[04:50:52] This is like pipe.
[04:50:53] essentially like a stream where you just click this goes into this, which goes into this.
[04:50:59] Thank you.
[04:51:00] Thank you.
[04:51:02] It's Rx behind the scenes, yeah. Funny, I had a solid Rx library way back, but implemented a bunch of operators, but I like this. This is much cleaner. There's no point using signals like using our reactive signals all the way along. You really only need them at the ends.
[04:51:16] Create async subject, makes sense. Create subject store.
[04:51:21] more interesting.
[04:51:23] Thank you.
[04:51:25] Okay.
[04:51:27] Kind of like create projection.
[04:51:30] Okay.
[04:51:33] Thank you.
[04:51:34] This is very, yeah, this is much more powerful than what I made.
[04:51:38] I can, this is well deserved at the prize. I think for a certain type of pattern that I usually don't associate myself with too much, I think this is incredibly powerful.
[04:51:48] Thank you.
[04:51:50] It's interesting. I wonder if this becomes more go-to. There's stuff like X-State, which people try and feed into solid, but this feels like it's more natural...
[04:51:59] Because it's that next level out.  Like I've never said that signals in X state.  Like I think stuff like that fits together quite nicely.
[04:52:06] There's something that's kind of like out there in the scope in terms of like orchestrating.
[04:52:11] I feel like this is a very natural fit with what we're doing.
[04:52:15] Thank you.
[04:52:17] Thank you.
[04:52:18] So using the Optimistic API.
[04:52:24] Okay.
[04:52:30] Thank you.
[04:52:31] Thank you.
[04:52:33] Thank you.
[04:52:38] Interesting thing about this, though, is...
[04:52:42] This does make it more directional again, I guess.
[04:52:46] which makes it back into like
[04:52:49] put this into diffing territory? I'd have to look at this more. I'm just looking at the...
[04:52:53] the filter versus
[04:52:55] the direct mutation update.
[04:52:58] But...
[04:52:59] It's interesting.
[04:53:05] Since it doesn't require iterating over the submissions, right, it's mapping over it.
[04:53:10] Okay.
[04:53:12] Okay.
[04:53:16] Yeah.
[04:53:18] Thank you.
[04:53:20] Thank you.
[04:53:22] Yeah, I'm hoping Solid 2.0 addresses a lot of these.
[04:53:30] Thank you.
[04:53:33] Huh. So yeah, this is the projection, but it's like a chained version of the projection.
[04:53:39] That's where I was getting at, yeah
[04:53:45] Thank you.
[04:53:46] Thank you.
[04:53:48] Yeah. I think create projection actually solves a lot of
[04:53:55] this, but not completely.
[04:53:58] So, I mean, props on this being a different way to arrange it.
[04:54:05] Thank you.
[04:54:08] Yeah, this is really cool.
[04:54:14] Thank you.
[04:54:15] And it's what you're using with server signals. Okay. Yeah. We're going to have to have you come on the stream and talk about this stuff soon.
[04:54:22] Very, very cool, Dev.
[04:54:24] Thank you.
[04:54:26] Thank you.
[04:54:28] Yeah, yeah, yeah, yeah. Definitely.
[04:54:35] Yeah, you need timestamps for the...
[04:54:39] mutations for the board
[04:54:41] I'm
[04:54:42] I mean, technically there's the has updated.
[04:54:45] Um...
[04:54:47] But yeah, this is like what you were talking about the other day when you were saying that like what if you just had separate functions and I said it's their inclusion. I don't think it.
[04:54:56] It's odd to think of it from a signals perspective.
[04:55:00] modeling.
[04:55:01] perspective because of what can we run based on tracking, but it's not odd to think of it from an event standpoint where it's always going to go through the, the,
[04:55:10] the PIX chain.
[04:55:13] So yeah, that's very, very cool.
[04:55:18] Thank you.
[04:55:20] I think that's the right place for stuff to sit. Like if you start with crate projection and it's fine and then you're like, "Nah."
[04:55:27] I can model this
[04:55:28] easier with some kind of event transformation. That's when you're supposed to pick up Rx. That's when you're supposed to use the proper tool.
[04:55:37] It starts basic with signals and then you go like, okay,
[04:55:41] I want retry logic. I want other stuff. So yeah, I think it fits very nicely. Okay.
[04:55:45] So yeah, solid hack.
[04:55:47] Again, just blasting on the stream.  I'm sure you guys are all aware of this.  There's lots of chances to...
[04:55:54] to win.
[04:55:55] Tsk.
[04:55:56] Lots of prizes.
[04:55:58] Those two are claimed, but we have more unclaimed challenges.
[04:56:02] And
[04:56:03] Yeah.
[04:56:04] There might be... I don't know if we're going to drop one more set of challenges before the end of the hackathon.  I believe there's still 26 days left.  So we definitely...
[04:56:13] - Su...
[04:56:14] Definitely do keep on checking back.
[04:56:17] All right.
[04:56:18] Thank you.
[04:56:22] Optimistic UI, I could do it really quick.  I think we already showed this on stream a moment ago.
[04:56:30] of Optimistic UI is that
[04:56:33] Well,
[04:56:34] the server
[04:56:35] It's basically the client gets ahead of the server.
[04:56:38] In this example here,
[04:56:41] Thank you.
[04:56:42] The server...
[04:56:43] I can slow down. Yeah, I'm on 3G.
[04:56:46] I can move this card.
[04:56:48] and then move this card again.
[04:56:50] before the server
[04:56:52] has actually finished saving it. The idea is that
[04:56:57] is that essentially
[04:56:59] Thank you.
[04:57:01] We're being optimistic that...
[04:57:04] the save will happen.  If it fails...
[04:57:07] then...
[04:57:08] stuff will update as so and will show errors and stuff.  But the idea is you're hoping that, you know, for simple things like clicking like button, that it will.
[04:57:16] It will...
[04:57:18] um,
[04:57:20] It will succeed. And hoping so it succeeds, you don't block the user from it, from continuing their activity. You just assume that it succeeded.
[04:57:29] So that's being optimistic, assuming that server won't fail.
[04:57:35] Yeah, I mean, I'm not going to be picky.  People can use web components, right?  If you have a web component framework for Solid,  and it looks pretty sweet.  I'm not a judge on this, so like...
[04:57:49] very well could go to the top.
[04:57:54] Yeah, the idea, yeah, it's...
[04:57:58] We call it optimistic, though, because we're just we're hoping that things succeed.  Yeah.
[04:58:03] A mitigation for eventual subsistency, yeah.
[04:58:07] Um...
[04:58:08] Thank you.
[04:58:12] Yeah, get in on it.
[04:58:15] Devs just...websocket endpoints, added docs for how to use websockets in Solid, start, also very cool. There's been a lot of really cool solid stuff recently, people showing that they can use v0 with Vercel.
[04:58:29] Because the similarity for the static output of stuff between React and Solid is so similar, you literally can make a couple changes to the code.
[04:58:38] And apparently people have been doing that. So very, very cool. That's solid for myself.
[04:58:45] I don't think I actually had very much going on.  I was too busy writing all those articles that we talked about.
[04:58:50] So as I told you, this one will be fast.
[04:58:54] Thank you.
[04:58:55] Yeah, I honestly
[04:58:58] Unless there's something specific that I was going to talk about.
[04:59:02] Um,
[04:59:03] Yeah, yeah, the shots again for solid is
[04:59:06] Yeah, it's cool. Yeah, we have that.
[04:59:10] I have some solid stuff. That's cool. I have some solid stuff too.
[04:59:15] I don't know. I should retreat this from the main account, but, uh,
[04:59:18] The U.S. presidential election and Senate election is...
[04:59:23] is it runs on us.
[04:59:25] platform called Vote Compass that's actually built with Solid.js. So
[04:59:30] Everyone who's going out to vote for the U.S. presidential election will be using software built with solid. So very, very cool to see used in such a...
[04:59:45] widely used platform.
[04:59:48] Give Vote Compass a try.
[04:59:51] Very...
[04:59:52] Pretty cool.
[04:59:54] Mine's not working.
[04:59:57] Thank you.
[04:59:58] *sniff*
[05:00:06] Yeah, I mean, the biggest challenge, I think you're kind of nailing one of the bigger challenges about this is,
[05:00:14] Stuff like
[05:00:16] Elixir has actually nailed down...
[05:00:20] what kind of environment this needs to run on
[05:00:24] So like, even if
[05:00:26] we figure out a mechanism that is completely optimal
[05:00:31] for the handoff between client and server.
[05:00:35] They're like
[05:00:36] Is Node the platform to run it?
[05:00:39] uh,
[05:00:40] Right, I mean this is the classic problem is
[05:00:44] I think the best way to actually solve these problems involves a single language model, which makes JavaScript almost like a shoe in.  You have to use JavaScript.
[05:00:54] but
[05:00:55] We just need better server stuff in JavaScript, or we need to get other stuff in the browser as optimal as JavaScript.  I'm fine with either or.
[05:01:06] The only...
[05:01:08] The only challenge there, obviously, is that
[05:01:12] Wasm is not the answer. Like we need, we need it to be as
[05:01:16] we need it to be native like JavaScript, which means I'm sorry for all those other server languages.
[05:01:22] Um...
[05:01:25] Like,
[05:01:26] It's hard because beams...
[05:01:30] Yeah, this is an acronym for something to do with that platform, right? What's Beam Stamp Oregon?
[05:01:36] Like what's the acronym?
[05:01:41] It's like the under...
[05:01:44] It's the underlying virtual machine, Erlang.  Yes, yes.
[05:01:49] Yes. Yeah. Yeah. Yeah. Yeah.
[05:01:53] Okay.
[05:01:54] Yeah, it's Erlang's VM, which is incredible. Built for this, built for telecommunications.
[05:02:00] can power, it's an incredible piece of software.  So just going, oh, we should make that in JavaScript,  is not realistic.  On the other hand,
[05:02:09] solving these problems
[05:02:12] efficiently in our
[05:02:14] area.
[05:02:15] isn't really possible without anything but JavaScript. So like there's this really
[05:02:19] Painful.
[05:02:20] conflict here where the like to get the best
[05:02:24] The best experience from server handoff through client has to be JavaScript on both sides.
[05:02:30] But to get the best backend for doing highly concurrent work is not JavaScript.
[05:02:37] what do you do?
[05:02:40] the
[05:02:41] These seem like immovable walls.
[05:02:45] Thank you.
[05:02:47] Okay, so it's not just...
[05:02:52] Okay.
[05:02:58] So Erlang has multiple VMs, okay, good to know.
[05:03:03] This is the thing I have heard referenced many times, so that's...
[05:03:09] Thank you.
[05:03:10] We put JavaScript on Beam. I mean, there we go.
[05:03:15] Thank you.
[05:03:17] Okay. I mean, people are at least writing in the underlying VM, like some kind of wazzy or whatever it was on whatever thing. Like there's incentive here because of the serverless platforms and for better runtimes. Like,
[05:03:35] So I can see incentives to solving this problem.  It seems like where we're at, it's way more likely that JavaScript gets good on the back-end
[05:03:44] in some way before we're able to get these other languages into the browser. It just,
[05:03:50] Yeah, it's just kind of the reality of things.
[05:03:54] I know that scares and
[05:03:56] upsets people to great end but like
[05:03:59] these are equally difficult problems to solve.
[05:04:03] Jam socket?
[05:04:06] Bye.
[05:04:07] Couldn't come up with a...
[05:04:09] Thank you.
[05:04:11] Thank you.
[05:04:14] Thank you.
[05:04:15] Yeah, I think it's gotta be referenced to like Jamstack.
[05:04:19] Okay.
[05:04:21] Very cool.
[05:04:25] Thank you.
[05:04:25] Thank you.
[05:04:26] *sniff*
[05:04:27] All right. Well,
[05:04:31] Thank you.
[05:04:32] Thank you.
[05:04:35] It was a short one, so there. I think I'm done.
[05:04:41] So...
[05:04:47] Until, I guess, next week.  And probably, yeah, let's see, 25th, yeah.  Next comp's on the 24th.  Yeah, so I'm probably, I can do the stream next week, I think.
[05:04:57] But yeah, Dev, we should talk, see when you can come on the stream.  I'd love to pick your brain.  I know you're still working on stuff, but I think you have some really interesting stuff to share.
[05:05:06] - Thank you.
[05:05:07] Other than that, everyone else, have a great weekend.  Until next time.
[05:05:12] Thank you.