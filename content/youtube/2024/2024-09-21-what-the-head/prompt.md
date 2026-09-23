---
title: "_EkUCF4HzWg"
slug: "_EkUCF4HzWg"
duration: "5:22:58"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/_EkUCF4HzWg.m4a"
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
[00:01:18] Oh damn it.
[00:01:19] Yeah, I'm having some interesting mic issues.  I think my...
[00:01:22] I think my cable is gone.  I don't know if you guys lost some audio there.
[00:01:26] Okay.
[00:01:28] Yeah.
[00:01:29] I think it's... I'm going to try something here.  It's a terrible fix, but I don't think it's just the cable.  It might actually be the...
[00:01:37] input on the back of my mic. So I'm going to
[00:01:40] push it up sorry once I'm gonna mute
[00:01:48] Yeah, let's try this. Yeah, yeah, okay.
[00:01:54] Okay, we should be better now, right?
[00:01:57] Thank you.
[00:02:00] How long was I muted for?
[00:02:04] Yeah.
[00:02:05] Yeah, I don't even know what this looks like on X.
[00:02:09] Uh-oh.
[00:02:10] I wonder if I can like look at myself and do like, no, probably not.
[00:02:13] Anyways.
[00:02:16] Give people a minute to get past the Twitch pre-rolls or whatnot.  But yeah, we're trying something new.
[00:02:22] Here.
[00:02:23] Got a bunch of stuff to talk about.
[00:02:25] which I'm looking forward to.
[00:02:28] Thank you.
[00:02:29] Going to be looking at...
[00:02:31] as I said, the metadata topic, head tags and whatnot.  There was some great conversation with Jose, with
[00:02:40] live view and
[00:02:43] Oh.
[00:02:45] concurrency from client-side frameworks. We also, what else is recent? The Strello demo, the Trellix demo.
[00:02:55] that we released a solid, which is the latest in a bunch of those demos.
[00:03:00] Yeah, we'll take a look at a bit of all that today.
[00:03:06] My God, please.
[00:03:08] Yeah, yeah.
[00:03:14] Yeah, versus the other Ryan. I'm not versus anyone, hopefully.
[00:03:18] Although sometimes I might come off as versus the React core team.
[00:03:23] It's funny, I got the premium...
[00:03:25] Twitter, you know, to post that Strello demo, which means suddenly I get these longer reply  responses, which is like a very dangerous thing to give me because.
[00:03:34] You know, I'm one of those people who would, like, do, you know, I don't know, like...
[00:03:39] five seven eight chain responses in a row
[00:03:43] something me and, I guess, Dan Abramoff have in common.
[00:03:46] And now suddenly I can just write a single message.
[00:03:49] - The first time I was in the hospital, I was in the hospital.
[00:03:50] But I found even with this new ability I have, it doesn't make communicating sometimes in quick succession on these online platforms any easier.  I think there's one point in the middle of the metadata discussion where I was like having three separate conversations with three different React core team members.  Um,
[00:04:10] Thank you.
[00:04:10] Thank you.
[00:04:11] I still feel like we weren't quite understanding each other.  So, you know, it is what it is.
[00:04:15] um
[00:04:18] Also, longer replies don't send notifications. Yeah. I think there's still benefit when you're going back and forth replies to keep what you're saying relatively...
[00:04:28] Short and to the point.
[00:04:31] It was a good thing for me because I do answer long, so...
[00:04:35] I needed to edit every single reply on Twitter.  It made things take a long time, but like...
[00:04:40] You don't get my raw thinking there.  I very carefully have to restructure everything I say on Twitter so that it fits within the message length.
[00:04:48] And
[00:04:49] That's good.
[00:04:51] Because if you've read any of my HackMDs, you know I definitely need editing. When I'm not editing, that thing makes no sense. I sometimes feel it too. Sometimes even on my HackMDs, some of my other articles, I try really hard to edit it.
[00:05:03] I tripped,
[00:05:04] Well, it works in multiple ways.  I trip people like streamers, cover my articles like Theo up all the time.  Like he reads the sentences.  He's like, you could tell he's like what in his head, he's like, what is this sentence?  But even more when I'm like,
[00:05:16] chat on other people's streams and I write stuff.
[00:05:20] Nothing I say makes any sense. So...
[00:05:24] Yeah, anyway.
[00:05:30] But yes, now I have premium.
[00:05:35] Oh really?
[00:05:37] That's hilarious.  I see.  I guess it's because of the tag.  I couldn't win.  See, I put...
[00:05:45] HTML style things around the word head and only YouTube said I couldn't do that. The rest of them were like just pouring my coconut water one sec. The rest of them were like,
[00:05:56] Okay, sure.
[00:05:58] Twitch was fine.  Um...
[00:06:01] X seemed like it was fine.
[00:06:03] But now we find out the truth.
[00:06:06] *clicks*
[00:06:09] *sad music*
[00:06:11] I'm going to go.
[00:06:12] *click*
[00:06:13] I'm going to go.
[00:06:15] Yeah, the stream's supposed to be called What the Head.
[00:06:18] I wonder if I can edit it.  It's probably too late now.
[00:06:27] Thank you.
[00:06:29] Yeah, I mean, grammarly, just squiggly squiggly squiggly. It's like, yeah, it's like TypeScript. And
[00:06:35] being in the playground. Yeah, see, this is crazy, though. Like, this was my hunch. This was my suspicion here. As many of you know,
[00:06:42] streams generally average about 200...
[00:06:45] concurrent live people between YouTube and YouTube.
[00:06:52] and Twitch. I have like
[00:06:54] 4,000 followers on Twitch and like,
[00:06:56] 10,000 on YouTube.
[00:06:59] X I have 40,000 so like
[00:07:02] This is just win, right?  Like, why wouldn't I, you know,  why wouldn't I stream there  and go to people where they're at?  So, yeah.
[00:07:12] Anyway,
[00:07:13] Have I wasted enough time getting people to show up yet?
[00:07:17] Anybody want to ask me a quick question before we get started on one of these topics?
[00:07:24] *laughs*
[00:07:24] Oh.
[00:07:28] As I said, lots of fun stuff today.  It's been two weeks.
[00:07:31] Kind of goes like that. Okay.
[00:07:35] Yeah.
[00:07:37] It's funny because I see the title...
[00:07:39] Oh, yeah, yeah. See...
[00:07:41] Let me see here. Okay, I can see my own stream. So if I present my screen and switch over, yeah, give me two sacks. Where are we?
[00:07:49] See, I'm right here.
[00:07:51] I can see the title of the stream here.
[00:07:54] But...
[00:07:55] Huh.
[00:07:56] Interesting.
[00:08:02] Thank you.
[00:08:03] Oh well.
[00:08:04] Thank you.
[00:08:07] Probably enough inception. Yeah. And this is just such a great indicator.
[00:08:13] What do we got here?
[00:08:14] Thank you.
[00:08:16] What's the drink today?  Coconut water.
[00:08:21] What have we got here?
[00:08:22] Thank you.
[00:08:22] Let me...
[00:08:23] Thank you.
[00:08:25] Harmless Harvest coconut water. It's this lovely reddish color because apparently all coconut water
[00:08:31] Is this color? It's pink, don't worry, it's natural. If you leave pure coconut water alone like we do
[00:08:36] Varying antioxidant levels can cause a pinking over time.
[00:08:42] Thank you.
[00:08:42] Thank you.
[00:08:44] Yeah.
[00:08:48] Thank you.
[00:08:49] Okay.
[00:08:51] Thank you.
[00:08:52] There we go. We have a we have a recommendation
[00:08:56] - The President of the United States.
[00:08:57] Thank you.
[00:08:58] *crickets*
[00:09:01] *Bun*
[00:09:03] Yeah, that's oxidized. Yeah, yeah.
[00:09:09] Not sponsored, yeah. What would I do with real sponsorship? I don't know.
[00:09:13] Thank you.
[00:09:15] - Thank you.
[00:09:16] Yeah, maybe Twitter thinks that I'm trying to do some kind of script injection or something.
[00:09:22] Anyway...
[00:09:23] Thank you.
[00:09:24] Okay, where are we at today? Yeah, so let's start with the head title thing. Give me two sacks.
[00:09:33] Bye.
[00:09:34] Okay.
[00:09:35] Mm-mm-mm.
[00:09:40] Okay, a lot of you probably think that
[00:09:46] that I
[00:09:48] Like it started with me discovering this tweet or something.  It didn't.
[00:09:51] I've been looking into head management for about
[00:09:55] like on and off for about five to six months.
[00:09:58] And I was coming close to, you know...
[00:10:02] revisiting it. I was working on Soled's 1.9 release
[00:10:06] and get a bunch of stuff in, but none of the features were like
[00:10:11] "Wow, here's something for you, end user."  There are kind of like just really good things, you know, fixes, things that have been way too long, stuff like that were better for handling errors around bundling and imports and better error messages.  And like tons of really small quality of life improvements.  But I mean, you know me, I, you know, when I, when I release something to a demo, I like,
[00:10:33] you know, quite often to have something to really showcase what we're doing.
[00:10:37] It's an important opportunity, right?
[00:10:40] And I was like, "Okay, maybe it's time to merge meta tags." So like, Alexis had been working on stuff. He made PR back in March.
[00:10:49] At that time, I had, as you can all imagine,  if you've followed me through before, I had HackMD,  where I'd kind of proposed what metadata could look like,
[00:10:58] And
[00:11:00] Yeah, there is metadata. Changed seven months ago. Just give you an idea how old this was. But I was I was playing around with like a couple hooks.
[00:11:07] Thank you.
[00:11:08] And...
[00:11:09] than a way of doing generic tags, like use metadata.
[00:11:13] I got this basically as...  Honestly, this was actually really inspired by Svelte.  Because I was looking at what we did with Solid Meta and different head libraries.  And then I looked at Svelte and I was like...
[00:11:26] Man, the Svelte solution
[00:11:28] It's so...
[00:11:29] simple
[00:11:30] If.
[00:11:31] people were accepting of it.
[00:11:33] They weren't doing any crazy layered de-duping it looked like. They were literally like, just set it as it lies and then for title,
[00:11:41] we're going to render document.title.
[00:11:45] Instead of worrying about trying to dedupe head tags, we're just going to use the
[00:11:50] the document property and that way like it dedupes anyways you can't you can't go wrong like i don't know if anyone knows
[00:11:57] I hope you do.
[00:11:58] But if you put the title element on the page,
[00:12:01] five times, you only end up with one title.  The browser only knows what to do with it.  In fact, it's the first one.  So if you start appending more titles, it's only the first one that gets picked up.  It's not the last one.  It's the first one.
[00:12:13] As far as I've been able to tell I haven't checked every browser, but this is kind of like the the base behavior  So I looked at Svelte and I'm like
[00:12:21] Wow, if I could just write the title and just be like, I'm done.  Like, that seems...
[00:12:26] great. If I could just drop a metadata and not have to worry about this cascading rules and stuff like this is amazing.
[00:12:32] But then I was like,
[00:12:34] "Are people going to accept this?"
[00:12:37] I'm like, eh, if I give them a couple simple hooks, they can build their own thing on top of it.  And we're kind of good to go.
[00:12:45] Um,
[00:12:47] the
[00:12:47] Biggest thing.
[00:12:49] that I wanted to make sure
[00:12:51] was that
[00:12:54] Streaming.
[00:12:55] could be done even better than today. Don't get me wrong, solid handle streaming with our head library perfectly fine.  We don't need a core feature to do this. We already have a core feature in fact.
[00:13:03] which lets you inject
[00:13:07] content in the head. We've had it
[00:13:10] for quite some time. It's called Use Assets. No one uses it except for Meta Framework Riders, but what it lets you do, and it's used under the hood in SolidMeta, it just
[00:13:18] collects the stuff and basically at the time it first flush just inserts it in the head.
[00:13:24] Simple mechanism, anyone could use it.
[00:13:26] But I wasn't completely happy with that.
[00:13:29] And
[00:13:31] I was kind of...
[00:13:33] wishy-washy on this solution because
[00:13:37] The challenge is,
[00:13:39] If you want to go beyond first flush,
[00:13:42] You need more stuff, I thought. So, anyways, I shelved this for a while.
[00:13:46] and started looking at it again recently.
[00:13:49] And when I looked at it again recently, I saw that React had
[00:13:51] suggested JSX elements, which...
[00:13:55] I mean,
[00:13:56] It's kind of attractive. If you guys don't know what I'm talking about, we can look at React.
[00:14:00] Dev reference components meta beautiful here. We go. It's under canary right now  But you can literally what they're saying here is I can just make this meta a
[00:14:08] tag here.
[00:14:10] put it anywhere, and it just ends up in the head.  I mean...
[00:14:13] There's something really nice and simple about that.  And I looked at this kind of enviously because I was like,
[00:14:22] This is
[00:14:23] Okay.
[00:14:25] The reason I was using data instead of JSX, you know, like native JSX was I was thinking, okay, we don't want to realize these head tags until we do it, right? You know, you guys know in solid.
[00:14:35] This
[00:14:36] generally would be just an actual DOM element.
[00:14:39] So
[00:14:41] you know,
[00:14:43] You can make a component that returns an object, but generally, if we went here, we'd have to mess with the compilation of native elements, essentially.
[00:14:53] where it's a little bit different in React because React,
[00:14:56] Everything's a create element call.
[00:14:58] Everything's created one by one.
[00:14:59] Obviously, the trade-offs, that's
[00:15:01] It's way slower, but like
[00:15:04] It does come to benefit here because you can write something...
[00:15:08] as a JSX element.
[00:15:11] because you can do this with components in solid or whatnot,  but as a lowercase native element and actually attack it like,
[00:15:19] JSON data.
[00:15:20] So,
[00:15:22] Yeah, I was sitting here and I'm like, this is pretty cool.
[00:15:26] And I was reading the docs, because the docs are great here.
[00:15:32] Big props. They have docs for features that haven't even been fully released yet. This is
[00:15:36] This is awesome. And I was reading through and I was like, okay, meta, they don't dedupe. Interesting. Just like Svelte. Okay.
[00:15:43] That's cool. I was looking at, you know, like, and, and then there's some things like script and style where they were basically only laying one of the same source or H ref work.  And I'm like,
[00:15:55] This is really appealing because we actually have an open issue right now in Solid Start about duplication of some of this stuff.  And we tried some solutions in Vinci for reference counting and stuff, but didn't work properly in the server.  And it's hard for Vinci to step in on the server side.
[00:16:10] Um,
[00:16:11] There's a lot of like the Dom is a set.
[00:16:13] amount of APIs that you could kind of step out of any framework, you know,
[00:16:17] use raft so to speak, create effect, use effect, whatever.  And you can update the DOM directly  and just build this layer on top.  But getting to people's server rendering,
[00:16:26] in a generic way is a lot harder because what are they outputting right as we talked about last stream uh
[00:16:33] some of the server frameworks, you know,
[00:16:36] literally just
[00:16:38] give you strings and it's super fast.  Other ones give you a VDOM like React  and then they have to like,
[00:16:43] kind of work through that and turn into a string.
[00:16:46] I mean, I had a conversation with the Web Component people a week or so back and
[00:16:52] They were trying to convince me that I wanted the DOM on the server.
[00:16:56] Yeah, I mean, crazy, but like...
[00:16:59] like you start seeing the problem here of like being kind of generalizable on this side.
[00:17:06] The one thing you can generalize, I suppose, is in the end,
[00:17:09] you will be sending an HTML string.  At some point in the process,  it will be an HTML string.  But pretty much...
[00:17:16] everything in between is kind of up in the air.
[00:17:27] That's cool.
[00:17:31] Though you made me, yeah, JS meta, that's funny.  'Cause I bit, solid meta library.  Like I'm, you have an interesting experience.  I don't know if everyone gets, ends up with the same level,  like the same experience when working on frameworks.  I think myself or Rich Harris probably would.
[00:17:48] But like...
[00:17:49] When you're working on a smaller framework and there aren't the base functionality libraries, you have two choices. You can pull it into your framework.
[00:17:58] and be like, "Okay, this is a feature." But sometimes there's things that you're like, "I don't know about."
[00:18:03] I mean, Rich...
[00:18:04] put the foot down and made a decision on CSS. I could never do that. I was like, I don't feel comfortable enough about
[00:18:10] CSS to make that decision, right? Like,
[00:18:12] It seems like every CSS branch is a religion and everyone has believers and it's
[00:18:20] CSS feels more tribal to me than JavaScript frameworks, if that makes sense.
[00:18:23] you know, any sense. So like,
[00:18:27] Looking at certain levels of problems, I was like,
[00:18:32] I'm just going to build libraries and ecosystems so people can get that.  Early days.  There's a whole bunch of them that I build over weekends, just really quick and then  never touch them again.  Solid meta was one of them.  Solid style JSX was one of them.  Solid...
[00:18:45] style components was another one of them.  I was just building ecosystem style libraries  because people had a hard time...
[00:18:55] visualizing it at first. I think Solid was different enough from React that people didn't believe you could just basically do everything Reacted. It seemed too good to be true. So I had to like show it. So Solid meta
[00:19:07] is not
[00:19:08] was another one, Solid Transition Group too.  Solid Meta is not...
[00:19:12] based on like some original work by me originally it was based on  not react helmet, um,
[00:19:22] Oh, it doesn't actually, yeah, React head.
[00:19:24] And the funny thing is at the time I wrote...
[00:19:28] SolidMeta, the really obvious thing to me is most head libraries
[00:19:32] didn't even know how to handle async on the server. They expected
[00:19:35] everything to be rendered at one time and then to collect it, not even async context.  So you just like say, here's the head thing.
[00:19:43] Run the request.
[00:19:45] Collect all the head elements.
[00:19:47] write them into the page.  That was the classic pattern.  So the problem with async is,
[00:19:51] there's a potential of fielding multiple requests at the same time on the server, and you don't want them all to bleed into each other.  You can't just make one singleton and be like, okay guys,
[00:20:02] Anytime you hit a head
[00:20:05] tag or whatever, write it to this single thing.  And then we'll just flush it when we're done because they can all crisscross.
[00:20:11] so
[00:20:12] we had to come up with solutions that were kind of
[00:20:15] specific to the request. And that was like the first piece that was missing. That's why if you look at React Helmet,
[00:20:23] You know, React Helmet itself is still...
[00:20:27] very much.
[00:20:30] sync, I think. And there's a whole separate library. Yeah, see, render to static, render string, render standard mark.
[00:20:36] Mention any of the new
[00:20:38] stream or whatever APIs, you actually have to use a
[00:20:41] different library, React Helmet Async, to do this.
[00:20:55] You have a special place of hate for React helmet.
[00:21:01] I hope. Yeah. I mean, it's interesting because the thing that hit me when working on this library is, okay.
[00:21:13] And
[00:21:14] Let's look at the poll requests.
[00:21:17] for solid meta.
[00:21:19] - Thank you.
[00:21:20] Okay, someone wants JSON-LD tags.  Yeah, that's a missing feature.  We don't have scripts in Solid Meta.  So that's something probably should be resolved.  But the other ones are proposals on how to have different...
[00:21:30] merging logic.
[00:21:32] One's like you should use key, one should refactor process in a library.  Because originally I took React Heads rules exactly and said if
[00:21:40] Meta tags have the same name.
[00:21:42] they should override, you know.  But the thing is, Open Graph,
[00:21:47] decide to throw a wrench in it. Like if you go look at the like spec stuff or whatever,  they suggest that meta tags should be, you know, have like unique name or property, but they don't,
[00:21:57] There's nothing in HTML that
[00:21:59] enforces it
[00:22:00] And
[00:22:02] To make things more fun, as I said, Open Graph almost encourages it.
[00:22:08] You know, so
[00:22:09] we get into this weird place where making certain types of assumptions are pretty bad.
[00:22:16] And...
[00:22:17] I started, as I said, I looked at all these different solutions and I started like seeing patterns and inconsistencies
[00:22:24] And
[00:22:25] I was like, "Man, this is a mess because
[00:22:28] I haven't got to the last piece of the proposal, but I suggested it. I want to be able to seamlessly handle
[00:22:37] head tags after the first flush of the stream.
[00:22:41] Now, I don't know how familiar you guys are all with streaming.
[00:22:45] It's kind of funny because I was watching Theo's stream on Wednesday, and he...
[00:22:51] I caught a bit of it after the fact.  And he actually covered the whole conversation and drama and everything that,  that I'm talking about right now.  And I was like,  wow,  that was quick.  I didn't even think it was a drama,  you know,  but,
[00:23:02] But the one thing that became kind of clear is...
[00:23:05] as I was watching.  I'm not actually sure how...  And Theo's told me this before.  Nobody actually understands streaming.
[00:23:13] Thank you.
[00:23:14] So, I think...
[00:23:20] Mm-hmm.
[00:23:20] It's important for the context of the conversation because when different solutions say they support streaming, they can mean a variety of different things. I think this is where the trigger was. When I said streaming,
[00:23:33] I wasn't thinking just first flush.
[00:23:36] And when the React team goes and answers everyone and said, we did this to support streaming, they actually are talking about just first flush.
[00:23:44] Tanner was like going crazy about how hard it is to work with it with streaming.  He was talking about also not just first flash.
[00:23:52] So, I think maybe we should start by actually talking about what the fundamental challenge here, right?
[00:24:03] because
[00:24:07] The gist of this whole thing was,
[00:24:10] React matters
[00:24:12] JSX style tag solution
[00:24:16] doesn't actually do any kind of deduping except for like,
[00:24:21] Um...
[00:24:22] It's more like it doesn't do overrides.  D-duping is what we call it, but it's not really D-duping.  It's like, because like, if,
[00:24:29] Like it does deduping of things with the same attributes, right?
[00:24:33] But it doesn't let you put two titles and then bar be the winner.
[00:24:44] All right. I'm familiar with HTML streaming in terms of transferring coded chunk in a lot of our stream, but what...
[00:24:49] is first flush. Yeah. Okay. Yeah. When I'm talking about first flush, I mean that
[00:24:54] You have
[00:24:57] There's a...
[00:24:59] The time, maybe we should do Excalibur.
[00:25:03] Skeletal for a moment.
[00:25:05] Which one was this one? This was talking about why server rendering is still beneficial. Okay.  Yeah, let's get in here for a moment. Like...
[00:25:16] I mean, you can even see it for here on in here, but but yeah, let's let's zoom in.  Um.
[00:25:25] I don't know. I'm just going to pick a drawing here.
[00:25:29] Um...
[00:25:32] Wow.
[00:25:33] I don't know if I'm supposed to believe Twitter's numbers, but this is the most people who have ever watched Twitter.
[00:25:37] simultaneously live stream any of my streams.
[00:25:41] so far, so that's pretty cool.  I've been streaming for three years.
[00:25:45] we had our 100th
[00:25:47] live stream, I forgot to announce it or make a thing out of it, two streams ago, which is almost exactly like the three year mark when I started streaming.
[00:25:56] Um,
[00:25:57] Thank you.
[00:25:58] I...
[00:25:59] So, yeah.
[00:26:02] Yeah, maybe that's what it does, but the funny thing is in StreamYard,
[00:26:05] I'm seeing 560 concurrent between all the platforms.
[00:26:13] So I don't know if Twitter is just...
[00:26:16] telling StreamYard and just upping the number, and StreamYard's getting that total come in.
[00:26:22] But whatever.
[00:26:25] Yeah, exactly. So it's just a counter. It makes you feel good as you're going. You just keep on seeing the numbers go up. You're just like...
[00:26:32] Yeah, yeah.  Actually, I'm just going to check Twitch for a second.  See if I can give any shout-outs.  Because Twitch is where...
[00:26:41] a lot of the cooler other stuff that's going on.  Let's see what we got here.  Thank you, Remirth, for the Prime sub.
[00:26:47] Thank you.
[00:26:48] All right, let's go with it.
[00:26:52] Let's let's let's concur for the feel good. Yeah. Okay. What?
[00:26:57] Like...
[00:26:58] Fundamentally speaking,
[00:27:01] You come in from your...
[00:27:04] Uh...
[00:27:06] Whatever. Let's just do this.
[00:27:10] Browser
[00:27:16] server
[00:27:17] Thank you.
[00:27:19] You come in, very first thing you do,
[00:27:21] You make a request.
[00:27:23] asking for the page, right?
[00:27:25] you know,
[00:27:27] Slash.
[00:27:28] some page, okay?
[00:27:31] then
[00:27:34] So
[00:27:35] Server responds,
[00:27:37] with HTML before loading everything else.  And what I call first flush generically,  is whenever this first response is.  Because when you're streaming,
[00:27:48] it's instead of being one
[00:27:50] response, it's like
[00:27:52] It's like multiple responses coming...
[00:27:56] from that point of time, right?
[00:27:58] Essentially,
[00:27:59] You have the single request.
[00:28:01] and then you have multiple responses. The first flush is the first response. And why the first flush is important is because
[00:28:08] There's certain things.
[00:28:10] that you don't get to change after the fact.
[00:28:12] Um, statuses, like your status code, like, um,
[00:28:15] Um,
[00:28:16] if is it a 200 or is it a 404 you don't get to change that after the fact
[00:28:24] Raid. Whoa.
[00:28:26] What kind of raid do we have?
[00:28:28] Oh!
[00:28:31] Oh, it's here we go. It's Dax. I think right. Did we get Dax? Yes. We got Dax with a party 129. Awesome. Yeah
[00:28:39] Just talking about streaming.
[00:28:42] Yeah, flushing is important, you know?
[00:28:46] Uh...
[00:28:47] How did everything go for you all today?
[00:28:49] You guys are making Cloudflare faster or something?
[00:28:56] - Mm-hmm.
[00:29:02] Nice, made Cloudflare faster.
[00:29:04] It's official.
[00:29:06] Thank you.
[00:29:08] All right, all right. So...
[00:29:12] Yeah.
[00:29:13] There's important things.  And one of the classic things, if you don't consider things like out-of-order streaming is...
[00:29:19] you know your head tag in your document it tends to come in that first flush  so all your you know metadata and stuff comes in that
[00:29:27] first flush, generally speaking.
[00:29:29] The...
[00:29:30] The challenge though is...
[00:29:34] You, I mean...
[00:29:36] If you forget about streaming for a second.
[00:29:39] One thing you could do
[00:29:42] is load all your data, right?  Like the gap here could be, you know, you could have,  I don't know.
[00:29:50] Pick another color.
[00:29:53] over here
[00:29:56] Thank you.
[00:29:57] Maybe, whatever. I'm just using some
[00:30:00] - Direct house.  We can put our database over here, whatever.
[00:30:02] Like,
[00:30:03] He
[00:30:04] It could just be...
[00:30:08] you know
[00:30:09] this going on and that's why you have the gap. But the reason you stream
[00:30:14] is because...
[00:30:16] if you got a lot of this going on,
[00:30:21] You don't want to delay
[00:30:23] This.
[00:30:26] on the slowest one of these.
[00:30:30] It becomes a statistical problem.
[00:30:37] there's like nice UX aspects of streaming, you know, when you have importance, varying importance of data or latency. But like, for the most part, I think the biggest benefit of the streaming thing is simply the fact of like, you talk to 1015 services, and
[00:30:56] You know, you don't want to be as slow as your slowest service.
[00:30:59] It just propagates it all the way along the line. And you can see that like, it's like the long tail on it. Like there's,
[00:31:06] It's very simple math.
[00:31:09] you can do, but you know how like when you're doing percentage math and you multiply and it, you know,
[00:31:16] I guess it's the inverse, like one minus the inverse. Basically,
[00:31:21] each service
[00:31:23] that you add each different connection that you're making on the back end that could
[00:31:28] cause latency, like
[00:31:30] It has a profound effect
[00:31:32] on the overall average latency of your whole request.
[00:31:38] Thank you.
[00:31:39] Anyway.
[00:31:44] Yeah, yeah.
[00:31:46] Yeah, no, that's perfectly fair.
[00:31:49] So what I'm getting at is
[00:31:56] There's an argument to be said that we should
[00:32:01] We shouldn't flush the page until, like the first flush, until the core part of the page is done. See, because you can picture, if you flush too soon,
[00:32:12] you might not have anything relevant to show the user.  So you're just showing them intermediate loading state.
[00:32:17] An example of that
[00:32:19] would be like one of my solid
[00:32:22] start hacker news demos. I make tons of them. Of course, that's way too fast for you to see, but if I
[00:32:27] Tried to...
[00:32:29] like really slow down the network somehow.
[00:32:34] Please, it's still...
[00:32:39] So using, we're not, maybe, maybe I need something with lots of stories in it.
[00:32:45] This one?
[00:32:46] And then we'll refresh on it.
[00:32:48] Let's refresh on it and see it stream in.
[00:32:51] Yeah, see? Okay, you saw it.
[00:32:54] Honestly, I
[00:32:57] It's quite possible that that version isn't really worth it because you're barely showing the page.
[00:33:03] It's arguable.
[00:33:04] Maybe I should have waited for the primary content.  There's better examples where you can actually show primary content and then, you know, have stuff come in later.
[00:33:12] What's that silly demo? The next guy's had it. I also made a version of it streaming.
[00:33:19] storefront Netlify app. Yeah, yeah. Everyone
[00:33:22] knows what I'm talking about. Yeah, the...
[00:33:25] Right.
[00:33:27] Um...
[00:33:30] Let me see if I can refresh on this.
[00:33:34] Problem is...
[00:33:36] - Thank you.
[00:33:38] Amen.
[00:33:40] It's hard to, it's sometimes hard to see it with, the problem with network simulation is the way that like tools like Lighthouse and like Chrome do it is they kind of like put a, like a, just like a wall on it and then make everything hit that wall instead of like actually simulating on a per.
[00:33:57] like in a more realistic way, which means that it's sometimes actually hard to see the effects and benefits of these kind of throttlings through simulated 3G or whatnot.
[00:34:06] um,
[00:34:07] That's a whole other story. I think we did a stream on that a couple years ago.
[00:34:11] But...
[00:34:13] Like,
[00:34:13] Honestly, just go look at Guillermo's tweets about PPR on...
[00:34:22] on X half of them where he's like,  you know,  no loading spinners,  like all of those things,  they,  it's,  it's,
[00:34:29] It's literally the difference between deciding whether to hold the stream or not hold the stream.  Obviously, when you pre-render something...
[00:34:36] you don't have to wait, right? If we go back to our scholar draw, there's none of this, you've already grabbed it. But
[00:34:41] mechanically,
[00:34:43] Um,
[00:34:44] If you know
[00:34:45] you didn't pre-render with PPR, but just like had the data sitting there ready, maybe in a KV or something. It's like exactly the same effect. It comes down to like whether you stream back immediately with the loading indicator and have the content swap in or whether it's just there in that first flush because you delayed it.
[00:35:04] But
[00:35:05] Sometimes...
[00:35:08] Like that decision is dynamic based on the availability of the data, the design of your website, a whole bunch of factors. So the one thing that I had been struggling with a bit is
[00:35:21] If you need to put the title
[00:35:23] in the head.
[00:35:26] Right? And that happens at the first flush.
[00:35:30] Does that mean that anything that can impact the title
[00:35:33] Theo actually had a funny example, I think on Twitch,  that he showed.
[00:35:39] If I go to my...
[00:35:42] my page,
[00:35:44] I'm probably not the same because my slug...
[00:35:47] Where is it?
[00:35:51] Okay.
[00:35:52] Thank you.
[00:35:53] RyanSolid7. Is it when I refresh Twitch?
[00:35:59] Okay, yeah, mine's not a good example. Theo was a good example because he had capital letters in his name. Let me see if I can...
[00:36:07] Let's see if I can actually get CTO capital TTO right if I refer  Sorry
[00:36:14] If...
[00:36:15] If I refresh this page here,
[00:36:17] and we're looking at the top corner here where we see capital T, Theo,  I think he said that he had lowercase and it went to uppercase.  Basically the title was changing dynamically as it came in because at the  time the page load, they only know his slug.  They don't know his actual name. And then,
[00:36:32] As the rest of the page loads and you get more information like the Lotus profile, they actually update and go, "Okay, his name's T." And then finally, when the notifications load, they add the, uh,
[00:36:42] my notification count beside this
[00:36:46] tab. So
[00:36:48] What I'm getting at here is
[00:36:51] You can obviously do a bunch of these title additions in the client after the fact, but that means that you have to wait for all of the hydration to have happened or like the code be on the...
[00:37:03] on the client by that point.  One of the coolest things about these streaming solutions,  which is, it might not be obvious to people is,
[00:37:10] While streaming doesn't work...
[00:37:13] Our out of order streaming doesn't work if JavaScript's turned off.
[00:37:18] I could remove the solid or react script tag that loads it from the page and streaming still works. It's not tied to the framework. We want to be able to show the content as soon as possible, regardless of if hydration has happened.
[00:37:32] This streaming mechanism
[00:37:34] is works by essentially appending script tags to the bottom of the page that give instructions that pass in
[00:37:43] data
[00:37:44] and pass in
[00:37:47] Thank you.
[00:37:48] There's code here you'll see, get document element ID, find the placeholder, grab it, remove all the siblings, and replace it with the new content. Like we actually write scripts that actually move
[00:38:00] Yeah.
[00:38:00] HTML that we added to the bottom of the page and slide it into place.
[00:38:06] That's how it works after the first flush.
[00:38:08] We just keep on appending HTML to the document as we stream, but
[00:38:12] Thank you.
[00:38:15] it gets into place the way like this git, you know, I'm going to, I'm going to turn off the silly fake throttling. So we can see it actually better on this one, because this one has fake throttling on the data level, what you're gonna see when I refresh the page is when we first load it.
[00:38:30] This is a... it happens too fast. Why are we always too fast?
[00:38:34] Okay, see how Products for You was kind of flickering in, streaming in?  If I flip down here, it's hard to...  There's no footer on this page, but my point is that...
[00:38:46] this HTML that replaces this loading placeholder is actually
[00:38:51] Um...
[00:38:53] Just...
[00:38:54] Appended and then we have a script tag. So if solid never loaded on this page, we would still have this same loading effect coming in and
[00:39:04] My thinking is if I wanted to handle proper streaming of stuff like title and metadata,
[00:39:12] it should work the same way.  Sure, I've already flushed the head.  But if...
[00:39:17] We discover a title further down that depends on some async data maybe to get
[00:39:22] Theo's name. We should be able to stream it up into the page, regardless of if the framework has loaded or hydrated or done anything yet. That's...
[00:39:31] my premise here because otherwise the recommendation is
[00:39:36] Make sure you load Theo before you show the user anything.
[00:39:40] If it's yourself,
[00:39:42] That's not a big deal.  You know, you off, you load yourself.  But I'm not Theo.
[00:39:47] "I'm looking at Theo's page.
[00:39:50] Every time I hit the server I don't load Theo.
[00:39:54] why, like, it doesn't make sense...
[00:39:57] you know for this to be something that i would have you know pre-loaded or had a really steady state
[00:40:03] Should the user wait?
[00:40:06] before sending anything?
[00:40:08] I don't know. It depends on your ex or your... you know. But like I was looking around, right? I was looking at different things like...
[00:40:17] You know static metadata that's easy dynamic metadata generate like just great solutions and all these things and
[00:40:23] Good to know, both static and dynamic data through generate metadata are only supported in server components. Okay. Fetch requests are automatically memorized, blah, blah, blah. Next.js will wait for data fetching inside generated metadata to complete before streaming UI to the client. This guarantees the first part of the stream response includes head tags.
[00:40:39] This is good.
[00:40:41] Because without it,
[00:40:43] It would be kind of, I mean, you don't even know what you'd get, right?  Depending on when it decides to stream, you might get some of the head stuff, you might
[00:40:54] Okay.
[00:40:54] So they wait, but
[00:40:56] The tricky part is, they always wait.
[00:41:00] Right? Like
[00:41:02] So it's like basically saying like, okay, I need Theo here.  Like I need to load this.
[00:41:08] for the title, I'm never gonna respond.
[00:41:11] No cases unless all the stuff I need for the metadata.  And honestly, this has been the common recommendation of,
[00:41:18] of libraries.
[00:41:20] Right.
[00:41:22] Remix suggests the exact same thing.
[00:41:27] But...
[00:41:28] Thank you.
[00:41:29] It...
[00:41:32] It's okay, right?  It's a reasonable constraint.  But it was one where I was like, okay, I thought when I saw...
[00:41:39] the React APIs here being at an element level.  So you can understand how Next does this.
[00:41:44] they hoist all the data fetching from the router. When you export something special on a page,
[00:41:50] Next goes, okay, you're going to this route.  I know you need this, this, and this.  They just grab those exports.
[00:41:56] But this API has no such thing.  You can literally
[00:42:01] You can hold it wrong relatively easily, right? Because you can just
[00:42:06] put this under a suspense boundary, have it await on some async data,
[00:42:11] And it will happen after first flush.
[00:42:14] Right?
[00:42:15] Which is, as I said,
[00:42:17] You instruct people in the sense solid meta is like this today is too, where, you know, if we miss it,
[00:42:24] it won't get server rendered and then when the client hydrates we'll kind of fix it along.
[00:42:34] Thank you.
[00:42:37] 10 sec start.
[00:42:39] I'm almost guaranteeing
[00:42:41] is doing what Next-To-Remix is doing.
[00:42:44] because this is not something you can solve in user land.
[00:42:48] I'm hoping you're starting to see the picture where I'm getting to.  Well, I mean, you can solve it in user land,  but if you want to understand how to solve it in user land,  you have to understand why Tanner was so upset when he found out about this stuff.
[00:43:02] So we'll get there in a second.
[00:43:06] Yeah, yeah, you can out of order stream without JS in really, really trivial cases. The problem is, and I looked into this because honestly, I would love to out of order stream without JS. But this is using the shadow DOM trick, right? Like the declarative shadow DOM trick.
[00:43:23] Let me...
[00:43:23] quickly grab this off Twitch so I can see what you're getting at.
[00:43:27] Do-do-do-do.
[00:43:31] Um...
[00:43:34] Thank you.
[00:43:36] Yeah, this is just the demo though, right? It's showing stuff coming in, you know, in random orders.
[00:43:43] doo-doo-doo-doo-doo-doo.  The...
[00:43:47] The challenge is that
[00:43:51] The way the Shadow DOM works,
[00:43:54] is like it has a slotting mechanism. So you can define where
[00:44:02] like these components are and where the slots are,  but the elements that get slotted in have to come in at the same level
[00:44:10] level.
[00:44:11] as the...
[00:44:15] I
[00:44:16] Where those components are like the same level in the hierarchy. So if you have a
[00:44:21] a bunch of things that are like stream, then stream, then stream, then stream, and you just
[00:44:24] make your shadow dom
[00:44:27] uh, declare shadow DOM container at say document body level.  And you just keep on appending, you know, to the body and they'll, they'll slide in like this. But
[00:44:37] It becomes much more difficult
[00:44:40] and actually I don't think really feasible, if you actually nest stuff.  Like you have a suspense boundary and you draw some stuff and you have a suspense in the suspense.  This happens all the time with hierarchical UIs. And then this mechanism actually doesn't work because
[00:44:51] while you're nesting those
[00:44:54] slots, so to speak, you're only going to be streaming to that top level, the same level as the body. So they don't see each other. I was a little bit disappointed how much of a complete miss this was, but I
[00:45:05] It is still a cool feature regardless.
[00:45:10] Anyway.
[00:45:13] Do-do-do-do.
[00:45:15] Thank you.
[00:45:24] No, I mean, Remix is doing what...
[00:45:29] something very similar to what Next is.  There's slight differences, and if you guys really want to get into the differences, we can talk about that in a minute.  But it's the same idea of having route level
[00:45:39] And then...
[00:45:40] with the ability, see this one's using parent, to merge from the parent level, so you have complete control of how the merging happens.
[00:45:51] Okay, you got the blog post. But yeah, I'm very familiar with this. As I said, unfortunately, it's useless for frameworks, but it is a very cool demo.
[00:46:03] like htmx is node.js. No, this mechanism is literally node.js. It's using declarative shadow dom, which is a template thing. It's miraculous to like when you look at it and you're like, this is so cool.
[00:46:15] If it were actually useful, it would be like one of the coolest things that come out from the spec side in a while.
[00:46:23] Um, it's like, you know what, I'm going to pull up the blog post just for two seconds  because I bet you it actually, like I can, I'll be able to actually, uh,
[00:46:32] Sorry, I'll be able to actually see the...
[00:46:36] the
[00:46:37] issue in the article, if they show any code.
[00:46:41] I can better explain it.
[00:46:44] Mm-mm-mm.
[00:46:46] Mm-mm. Okay.
[00:46:51] Thank you.
[00:46:52] Right?
[00:46:53] Shadow root.
[00:46:54] Shadow root has slots, they have name slots perhaps, and then you define what a slot is,
[00:46:59] See this one's outside of the shadow roots the shadow root owns all of this right and then outside of the shadow root  but at the same level
[00:47:08] there are elements.
[00:47:09] And anytime we find...
[00:47:12] Um...
[00:47:13] a slot with that name, this will automatically
[00:47:17] Get...
[00:47:18] kind of like virtually inserted where the slot of that name
[00:47:22] is. Now the tricky part about this
[00:47:25] It's actually not hard to write code for it because it's literally a template element.
[00:47:30] - Yeah.
[00:47:30] And then the slot looks like this.  And the way HTML works is
[00:47:34] If we don't have this div tag, it's smart enough to auto heal and automatically close. So you can just keep on appending stuff and not close the document.
[00:47:42] not even close this div and get stuff rendered on your page.
[00:47:46] Um...
[00:47:47] But the challenge as I said is,
[00:47:50] First of all, now this template has to basically be the top of your app because you're going to be just streaming stuff to the end here.
[00:47:56] And
[00:47:57] This doesn't work well if you have a template
[00:48:00] inside
[00:48:01] A slot?
[00:48:03] Like what will often happen with these things is you'll actually, um,
[00:48:08] you'll actually have slotted content that inside that slot will have more templates, which then have to get
[00:48:14] future
[00:48:15] Um...
[00:48:16] streamed updates that are getting it appended down here, not
[00:48:20] inside here.
[00:48:22] uh,
[00:48:24] Yeah.
[00:48:25] Anyway.
[00:48:29] Hopefully that makes sense. Sorry. I hope I didn't go too far down the rabbit hole.
[00:48:38] I think you can nest DSD to declare a shadow doms. I'm pretty sure you should be able to.
[00:48:45] Let me think. Is there any reason why you wouldn't be able to
[00:48:48] Because you can...
[00:48:49] Definitely make elements with shadow doms inside other elements that have shadow doms.
[00:48:56] So yes, I believe you...
[00:48:58] Unless there's like an additional restraint, I don't see why you wouldn't be able to.
[00:49:09] Yeah, I mean, I stream like five hours almost every week. I'm hoping my explanations work, but I think what we'll find with an editor is a lot of times...
[00:49:24] I'm not the best person at explaining stuff. I'm kind of hoping that somebody who watches the stream will come in and actually do like a proper video. Like,
[00:49:32] I'm always amazed how Theo can just kind of like stop and just like, okay, I'm in video mode and just record videos like that.  I mean, it takes a little bit of prep, I think.  I don't like being prepared.  It takes too much work.
[00:49:42] Editing takes too much work.  Everything takes too much work.  But I'm glad you guys are here to listen and chat with me because you know what?  I learned stuff from talking to you.  So...
[00:49:50] Um,
[00:49:51] Yeah.
[00:49:52] Okay, so
[00:49:55] *sad*
[00:49:57] Thank you.
[00:49:59] Streaming is...
[00:50:01] tricky to say the least. Right. Um, and,
[00:50:06] It is a stance to say we're going to just block everything.
[00:50:11] that's kind of like the only choice you have. I mean, other than that,
[00:50:14] How do you inter...
[00:50:16] set the stream and put stuff in, right? Well, you could use the same trick
[00:50:21] that we do with
[00:50:23] suspense when I was showing how we were
[00:50:26] you know,
[00:50:28] putting script tags to insert elements.  We could use script tags to update the head  as we're streaming.
[00:50:36] And that's something that I...
[00:50:39] that's something that I've, I've been, you know, thinking a lot about and, um, like,
[00:50:45] You need a mechanism that supported this
[00:50:47] Otherwise the developer would have to go in and take the render stream and then get the stream output and inspect itself and be like, okay, what's going on?
[00:50:54] What's in the stream? Oh, here's like a head tag. Let's
[00:50:58] take it out, do this.  You basically have to do a bunch of hijacking  of the stream stuff. Don't get me wrong.  React is all, we all have ways that you can
[00:51:06] you know, get yourself in the middle of the stream.  But that's also the place I don't think anyone ever wants to be.
[00:51:12] So
[00:51:14] Yeah, when it means to support streaming, it probably means a lot of different things for a lot of different libraries.
[00:51:21] Still,
[00:51:23] I feel...
[00:51:26] the tension here,  right?
[00:51:28] Because
[00:51:30] I showed you guys solid meta.
[00:51:33] What we're actually missing here is I merged one of these proposals I was wrong to probably.
[00:51:39] So Solmeta worked one way.
[00:51:41] Someone said, hey, I have duplicate open graph tags and asked me to change it.  I'm like, I guess this sounds reasonable.  So I merged it.
[00:51:50] And then
[00:51:52] So that triggered this because people were like, oh, this broke what I wanted to do with it. I think deduping should look like this. And then the original person who did the other one was like, no, I think I can make deduping handle both our cases with this.
[00:52:05] It is a mess.  Like trying to tell people how stuff should de-dupe automatically is not unlike telling people that they should use Tailwind
[00:52:13] versus style components.
[00:52:16] I mean, people should probably never use style components, but like, pick something that's actually good versus something else that's actually arguably good.
[00:52:24] Um,
[00:52:25] Like,
[00:52:27] I, this, this, it's...
[00:52:32] This is something that...
[00:52:36] As a framework author or library author, LaGlobe, I don't want to step in.  I have enough experience just having a separate library having this problem.
[00:52:45] But...
[00:52:47] If we're streaming,
[00:52:51] Essentially, like if we open up the ability to control the streaming in a really native way where you could just
[00:52:56] Put.
[00:52:57] the tags on the page, like the way React is proposing,
[00:53:00] and you're streaming it.
[00:53:03] you have to have a way
[00:53:06] to be like, "Oh,
[00:53:07] - Thank you.
[00:53:08] This script replaced this script.
[00:53:11] Because if you don't have that mechanism in the core,
[00:53:15] The only thing you could ever do is append.
[00:53:18] Like you need some kind of mechanism that's exposed to the end user.  Even if you say that you can't make any decisions here,
[00:53:28] Like you're like, I don't want to determine deduping for you.
[00:53:32] You can't just go...
[00:53:34] I'll leave it to user land. User land can't actually solve this problem.
[00:53:40] Like what, like,
[00:53:43] Like if, if, if you, you know, if for some reason, like title, you want to make it.  So there's only one title and you can put multiple on the page so you can simulate this, you know, Theo, then Theo, then Theo and notification situation all with streaming.
[00:53:58] If the core mechanism
[00:54:00] that you're given.
[00:54:02] Doesn't give you a way to do that deduping, you know, be able to flush in
[00:54:06] update title, remove title, whatever type code,
[00:54:11] your only option like on the client. Yeah, sure.  You can just go build something cause you can interface with a dom directly,  but on the server,
[00:54:18] All you can do is like...
[00:54:20] Try and parse the stream as it's coming and doing stuff.
[00:54:25] Unless it's built in.
[00:54:26] So...
[00:54:27] what I'm getting at is maybe it is fine to always wait. That is a fine decision.
[00:54:31] To make...
[00:54:34] But if
[00:54:36] The idea is that you don't have to always wait.
[00:54:39] The mechanism...
[00:54:40] to be able to do
[00:54:42] some sort of deduping you if you don't think it should be the thing has to be built into the core.
[00:54:46] That's basically...
[00:54:48] the whole logic here.
[00:54:58] So basically you're forced to pick a side where all sides seem reasonable.  Yeah.  So like...
[00:55:05] Yeah, I mean, this is not a fun place to be.
[00:55:09] Um...
[00:55:11] Let me, can I...
[00:55:13] Let's go back to Twitter for a second, right? Let's look at a bit of the conversation. Can I give some context?
[00:55:24] Because the meta takes a multiple instances, the other statistics take last one, it's fine. Also don't be intentional to find self-suggery. Yeah, so I mean...
[00:55:31] When I read this from Ryan Florence, I'm like, okay, it's because they're remixed.  They have their own solution, right?  So who cares, right?  So we'll get back to Ryan Florence in a minute.
[00:55:39] I wish browsers did this automatically. I think we all kind of do.
[00:55:44] What else do we got here?
[00:55:46] Uh, before we get to Sophie, who had a, actually a very good reply, um...
[00:55:52] We do dedupe identical link, blah, blah, blah.
[00:55:55] Yeah. So I'll combine this.
[00:56:01] with so react could be dupe, but it's not obvious which one should win.  Maybe if there was one deepest one, but what if they're two equal depth?  Okay. So yeah, let's get to the problem with deduping.  D-duping.
[00:56:12] The reason we don't want to touch with him foot pole is it's, it's fundamentally broken.
[00:56:18] Like it just, it doesn't actually work in a sensible way.
[00:56:27] Thank you.
[00:56:28] Right?  Like, I get this.  This happens sometimes as a framework author.  You build something and you're like, okay.  And then you find a hard problem and you're like...
[00:56:40] I don't think there's a general solution for this.  So you kind of leave it.  You're kind of like, okay, um...
[00:56:45] We'll let users kind of figure out what makes sense for them. And it's far enough outside of our realm that we don't care.
[00:56:52] And then the users make the solution and you're like,
[00:56:54] God, this is terrible.
[00:56:57] And you're like, yep, but they're allowed to make terrible decisions.
[00:57:00] decisions. We're just going to let them do it.
[00:57:04] and maybe give some guidance.  You understand that everyone's app's different,  and everyone has their own needs,  and it's very hard to be too prescriptive here.
[00:57:16] And then you get a little further around and you're like, I need to add the, you know, feature B, like this other feature. And you look at what the user did and you're like, yeah, that's not really in line with our thinking and really with the philosophy of the library framework we're building. It doesn't make sense to ever approach the problem like this. Let's see if we can give them a gentle nudge in what we consider the right direction.
[00:57:37] And then
[00:57:38] Um...
[00:57:39] Sometimes you get even further online where you're like, we actually, in order to do these other features, we have to just take ownership of this thing at this point. That's the only really way to make everything just...
[00:57:50] Keep...
[00:57:51] working properly, you know,
[00:57:54] And then you're like,
[00:57:55] Yeah, you look at user space and you're like,
[00:57:58] Yeah, those solutions are just...
[00:58:02] But the problem is users have been doing it this way for the last five,  10 years.  So you're like,  you're in like this place where people it's expectation of how things should  work.
[00:58:11] versus like
[00:58:12] what kind of makes sense from a design standpoint. And I think
[00:58:18] This is one of the things that
[00:58:19] I really like about React and the React core team members and that,  and what,  you know,  kind of integrity there is that is they generally don't make stuff because  people will like it.
[00:58:30] I have a huge amount of respect for that.
[00:58:32] That's not why we make stuff. I make stuff because
[00:58:37] it will make people successful whether they like it or not,  whether it will give them powerful tools.  And that's something that I think share with the React core team.  And I have a huge amount of respect for,  I I'm always wary of solutions that are kind of like, yeah, yeah,  we can do that. Yeah, we can do that. You know, like,
[00:58:54] "Oh, we want this feature, bring it in core."  And just keep on doing that.  'Cause at some point it won't be sustainable.  They're bringing a bunch of work on themselves.  Maybe they'll grow at a rate that they can keep on top of that.  But it's like at some point being too opinionated
[00:59:10] Will impact, you know feature C which we haven't got to yet. So it's very dangerous to
[00:59:16] to go out the door with the intent of satisfying people.
[00:59:21] And
[00:59:22] And so from this perspective, like React comes in,
[00:59:25] Looks at the space, probably. I don't know how much they look. I imagine they look at least in the react zone of the space. Knowing the amount of research I do, I assume that they do a decent amount of research.
[00:59:36] And
[00:59:38] And go like...
[00:59:39] Yeah.
[00:59:41] Okay. Like, and kind of just determine
[00:59:45] Not based on like what everyone thinks how things should work necessarily, but what makes sense to work with the way the framework works.
[00:59:52] That takes guts, that takes, you know, vision. And that's why I, you know, have a
[00:59:58] you know, huge respect for React.
[01:00:02] On the other hand,
[01:00:05] Sometimes...
[01:00:10] That ship sailed
[01:00:12] So,
[01:00:13] It's an interesting tension.
[01:00:18] Thank you.
[01:00:20] Thank you.
[01:00:21] -
[01:00:23] Easiest, longest title wins.
[01:00:33] Yeah, he inspired me to give me the exact example. I didn't expect him to cover this so soon.
[01:00:40] This is, you know.
[01:00:43] Anyway.
[01:00:47] Dude...
[01:00:49] The truth is,
[01:00:51] This whole talking about depth and stuff is like,
[01:00:54] If you can very easily...
[01:00:58] Let's go back to our example here. What if this is under a ternary based on some other state?
[01:01:03] Or what if this one is, the top one is, under ternary based on some other state?  So you go render the page, it's not rendered, then this one's rendered, and then something changes and now this one's rendered.
[01:01:12] Like, who wins?  Is it based on hierarchy?  Who's the tallest?  That's actually not always good  because if you've ever played around with depth first  or algorithms and stuff, you know that...
[01:01:21] like siblings of
[01:01:23] that start in the same depth, but then like,
[01:01:26] like you're not guaranteed to have a reasonable order from it.  Um,  and,  um,
[01:01:31] They could be actually just straight siblings and you just, depending on what's async, something async loaded,
[01:01:37] before something parallel async,
[01:01:40] You know, it loads...
[01:01:42] A, then B.
[01:01:43] one time loads B than A and you get different stuff.
[01:01:50] Yeah, we'll talk about Unhead in a minute.  Unhead has like...
[01:01:57] This is an interesting point because it gets into stuff like philosophy. I just told you how much myself and
[01:02:05] Because of that, I respect...
[01:02:08] reacts philosophy and how much like I align with them, generally speaking. Um,
[01:02:13] I get where they're coming from.  Unhead is very view.
[01:02:17] I don't, I know it's so funny when I talk to people in the NJS ecosystem, they never understand what I mean when I say it's very, when I say things are very viewable.
[01:02:26] and a lot of stuff in the un.js ecosystem's very view. And it's not because of an API surface. It's not because of anything. There's like a philosophical aspect. And I don't know, I haven't figured out how to chart it like on a...
[01:02:40] spectrum chart, but a lot of library authors, not like
[01:02:45] Framework authors, like it's funny because, you know, reacts library.  I don't mean, I'm not counting those, like, I'm not talking about like the core  library, like framework or whatever, but a lot of like third party library authors,  people like Tanner Lindsley.  Um,
[01:02:57] for example, someone who reacts meaning for are more of the view.
[01:03:02] mentality like that's where they sit
[01:03:05] I don't sit there.
[01:03:06] The React core team does not sit there particularly.  But we'll talk about, I definitely looked at on head,
[01:03:21] Right. So like, um, yeah, what are we going to get here? So yeah, I mean, Sophie says something else here. Let me get a little further.
[01:03:32] Um...
[01:03:33] Ultimately, this is a hint that letting any component authoritatively render a title is not quite the right pattern, and you should only do it with components that know their singletons per window so that the title ties into routing so you want a framework handle. Okay.
[01:03:45] Thank you.
[01:03:45] So, I mean, people...  Some people made it, you know...
[01:03:49] .
[01:03:49] Is this another place where React is telling you to go use Next or Remix?
[01:03:54] Right?
[01:03:56] There's that kind of that kind of question, right? So
[01:04:03] Maybe.
[01:04:05] But
[01:04:07] The challenge is...
[01:04:10] While I can agree with this, that author and render not quite the right pattern, you should only do it with the code, no singleton per window.
[01:04:17] How do I make Theo, Theo, Theo...
[01:04:22] a singleton per window,
[01:04:24] Thank you.
[01:04:25] When
[01:04:27] the data that I need to complete that
[01:04:30] is lower in the hierarchy.  I mean, I could...
[01:04:34] hoist the data fetching even further, use preloads, you know, and kind of figure that, you know, build into the router essentially. And that's a sane thing. But even
[01:04:44] Then,
[01:04:47] like suspense and stuff becomes hard. What if I don't want to wait?
[01:04:55] Do I have to live with a blank title?
[01:04:57] before the title actually shows up.
[01:05:01] While I agree that it's fundamentally broken, I'm also not hearing a solution. So this is kind of the challenge here, right?
[01:05:16] And I was really having a hard time understanding why this exists.  Cause like I hinted here,  I don't get why I imagine I would just use remixes or next head management and
[01:05:26] If the delusion belongs in the router, why would React ship it?
[01:05:29] would either use this under the hood, right?
[01:05:32] Thank you.
[01:05:38] Me and Rick, he go down pretty deep here. I can't remember where this ends up.
[01:05:44] Um...
[01:05:48] seek
[01:05:49] No, not that. Let's go here.
[01:05:53] To do to do to do
[01:06:02] Thank you.
[01:06:02] Thank you.
[01:06:04] Yeah.
[01:06:05] I it's funny.  I like,  I can't find it anymore because of how deep it is.  I'm going to grab my bookmarks because I did bookmark a couple other tweets  that are relevant.  Um,
[01:06:13] I don't know what they're doing now.
[01:06:19] No, we'll talk about that in a minute.
[01:06:22] That's Jose
[01:06:25] Maybe I...
[01:06:32] Thank you.
[01:06:33] Yeah, see, we don't have Tanner's original tweet.  He deleted it.  I wasn't online that night, so I didn't even see what his thing was.
[01:06:41] Um,
[01:06:42] But
[01:06:43] Let's just look at what Tanner wrote.
[01:06:49] I can... You want to find...
[01:06:52] Theo's tweet
[01:06:53] or sorry, Tanner's tweet. I can drop this in chat.
[01:06:56] Actually...
[01:06:58] I should drop it here because then it'll drop it on all the places.
[01:07:04] All right.
[01:07:06] So how did this conversation go?
[01:07:09] Please avoid sensationalist, yeah blah blah blah blah. Fair enough. I deleted my original tweet so we can start over. Is there an official explanation or documentation for this reason? It should also be equally obvious the scattered Twitter thread on the subject won't suffice.
[01:07:20] with just don't hold it wrong.  That's what his impression was from their comments.  Honestly, duping was an attribute of the feature that I,  and I think many others assume to be included.
[01:07:29] more actionable question does it mean that I can actually get rid of my meta tag management? Part of my ecstatic excitement was potentially giving devs the ability to use these features directly and Ruby might need for abstraction. I mean,
[01:07:39] Yeah, I mean, there's that aspect too. Yeah. See, all the documentation for here has been great. This is how I actually knew about it. I didn't find out about it in a tweet. I read the docs.
[01:07:49] So.
[01:07:50] There is that.
[01:07:52] But
[01:07:53] That's not really answering the question.
[01:07:55] For Tansac, you can decide if you want to expose MetaTag API, avoid pitfalls, or let users have a remix of the meta, blah, blah, blah, blah, blah.
[01:08:03] Yeah, it is the wrong term. We talked about that already.
[01:08:07] But it's interesting. See,
[01:08:10] Ryan Florence, this is what I wanted to find.
[01:08:12] Thank you.
[01:08:15] He goes, I think meta tags should all be figured out before you flush anything.  So above suspense, people will screw it up.  But if you care, you'll know what to do.
[01:08:23] See, I already showed an example where this isn't true, but
[01:08:27] I'm like,
[01:08:29] I'm like, okay, well, are you going to use these elements now to build Remix's story?  Because Remix actually has deduping.  We haven't looked at it yet.  It's similar to Next.  If I go to Remix...
[01:08:39] metadata, I think, metadata. And we look here.
[01:08:45] Remix meta.
[01:08:47] You'll see something very similar to Next's generate meta, which you can just... it has a different format.  So the deduping works differently, but it's the same idea that you can, I believe, take the parent...
[01:08:59] Data, yeah, parent route loaders, and then
[01:09:03] essentially
[01:09:04] like do further merging based on the parent information, right?  This is a great solution, handles all the different variations you want at the router level, not at the core library.
[01:09:14] level, but...
[01:09:17] Um...
[01:09:20] So I go, will you be using these new tags? And he goes,
[01:09:23] I don't use our route module meta exports anymore.  I just put meta tags in the route components to let react float do its thing and it's glorious.
[01:09:31] Thank you.
[01:09:41] Thank you.
[01:09:42] Thank you.
[01:09:43] Thank you.
[01:09:43] Thank you.
[01:09:45] Is the status code finding different tasks from returning the title tag?
[01:09:48] Thank you.
[01:09:51] This is a profound question, right? You could say
[01:09:57] that
[01:09:58] it isn't but on another argument you could say it is
[01:10:03] Oh.
[01:10:04] But it changes the meaning of what status means a little bit because
[01:10:08] is that like once you get into streaming it does because the second you determine that you can handle the page, it's not a 404 anymore. It's not a 500 even if like the page completely errors out on you. The second when you're streaming that you determine
[01:10:24] that, hey,
[01:10:26] "This is a page I can handle.  "I got past that first check, maybe that first auth check,  "and you're like, I'm gonna render it."
[01:10:31] It's a 200.
[01:10:32] It doesn't matter if you realize you have to redirect on it or that.  I mean, there's tricks to it, but because you can't put a like a
[01:10:40] You can't update status and footers. There's no other
[01:10:43] mechanism to do this
[01:10:46] we are forced to treat status as
[01:10:49] Something else and once you get to that zone of thinking of status  I don't think they are the same similar thing at all title is something that  dynamically changes over time. It's it's something that can change over the life of the request as you learn more about the title for example and
[01:11:07] Same with the meta tags.
[01:11:08] So I do think they are
[01:11:11] different.
[01:11:12] Yeah, my pression and preface don't need a helmeto tag anymore.
[01:11:16] Thank you.
[01:11:19] Today, our deduping is handled in a separate library called SolidMeta that's completely independent of router,
[01:11:26] solid
[01:11:27] it's all a start
[01:11:33] Alright.
[01:11:34] Yeah, I forgot this.  Yeah.  Please like, subscribe.
[01:11:38] comment, whatever. I don't usually advertise stuff that much, as I said, but it does help me a lot in terms of getting more viewers seeing my content. That's what I care about.
[01:11:49] So,
[01:11:50] you know,
[01:11:51] Click the button, it helps.
[01:11:53] Very much appreciated.
[01:12:02] Yeah, that's incredibly low considering the number of people are watching live right now.
[01:12:13] Yeah, I mean, whatever mechanism you use for hoisting,
[01:12:16] Like cash is just a hoisting mechanism.  That's all fine.  But...
[01:12:22] If we go back to the Excalibur, there is a different question between...
[01:12:29] whether we want to hoist the fetching and whether we wait
[01:12:33] before we send this first chunk back.
[01:12:37] Thank you.
[01:12:41] Thank you.
[01:12:44] I'm called the UC2 Disalike It.
[01:12:46] Thank you.
[01:12:53] Anyway.
[01:12:57] that
[01:12:58] So,
[01:12:59] I'm not saying that these are unreasonable. I just
[01:13:02] I already...
[01:13:04] like conceptually see places, and maybe I'm wrong, where I want the benefit to have this flexibility. Maybe like I'm nerd sniping everyone right now, or I've been nerd sniping myself, but I essentially,
[01:13:19] This is a bold statement out of the whole conversation.  This is when I, I stopped arguing with them.  Like I already had my perspective before and I was like, this is very weird to me.  Like, this is not what I would have expected as someone building a meta-framer.  It's, this is what I was talking about earlier about like.
[01:13:34] Sometimes guys building libraries don't always build the meta frameworks or the third-party libraries, so they don't have the same appreciation for certain problems.  That's not the case in React, right?  They have core team people building Next.js.
[01:13:46] Um, so like...
[01:13:50] But this Ryan Florence is not core team. He is definitively in that other side, the library side. And he was basically like, yeah, I just do my thing and this is great.
[01:14:02] Right. Which is...
[01:14:04] A stark contrast
[01:14:07] to...
[01:14:08] Tanner's response, which was...
[01:14:11] Tanner wrote exactly what I would have been thinking.  See, I'm not in the React ecosystem,  so I don't have to worry about it.
[01:14:17] Trust me, I'd really love to be able to,
[01:14:20] avert all this control to the user and get rid of my abstractions. Of course, they'll always have options regardless I can't.
[01:14:25] disable that. I still don't fundamentally agree with the decision not to do any duping of title meta. While most browsers won't choke on multiple tags, the fact that react devs can easily be able to produce HTML output that is automatically considered bad practice by just about every search engine crawler, blah, blah, blah, a waiter will quickly see an uptick of SEO teams auditing their react devs on this topic. It's easy to push this responsibility down to developers and say you just need to be aware of title meta tags, which isn't
[01:14:48] is what non-framework React devs have already been dealing with. And it's not a great experience. It's easy enough to render multiple titles without React. But with React now, especially handling these native tags, I expected more.
[01:14:59] Clearly, great care was
[01:15:00] put into the similar
[01:15:02] control over CSS style precedents, which in my opinion has a lot of overlap on this topic of deduping. Assuming the same level of care would be put into title meta, there's no stretch if React now look back on head during rendering make changes based on deeply rendered elements tree, then I don't understand the pushback.
[01:15:15] Um,
[01:15:18] Yeah, the funny thing about this though is if you look at the docs, I don't know if anyone actually paid attention. Maybe this is another thing that do they actually warn you not to update the props of things that have been up.
[01:15:30] that have been pulled up. They don't update after the fact. They only update with the values that was that they were originally given at the time of the original render. They they actually say that somewhere in here. So there might be still some more
[01:15:44] Um...
[01:15:46] you know, missing assumptions here.
[01:15:51] Like, let me see, maybe title is shorter, I can see it.  But the title, you render the title,  we always score the element,  except children text will become the title of the document,  you can pass your own components, special behavior,  render always the title within the document's head,  regardless of the tree, the head is only valid,  title would exist, it's convenient to keep a proposal,  the vestigy is ignored, item property is ignored,  set the property title.
[01:16:11] Use variable of the title. The variable must be a single string of text. So you can't use interpolation like this. Okay. Or single number, single two string. It's not obvious, but JS curly braces, not using like this. This is not a single string.
[01:16:23] Okay, so I...
[01:16:25] That's an interesting exposure. To be fair, I was working on some metadata stuff this morning when I was playing Rundle Solid, and I hit the same problem. I was like, "Oh crap, I have to add more code to make this work." I did, but
[01:16:39] I get why they would do this.  Act cause a title of two elements, blah, blah, blah.  So cause an error instead, use a string interpolation.  Okay, they don't say it here.
[01:16:46] Maybe it's not on Tidal.  There's some of the ones they were talking about how...
[01:16:51] they end up only being the value that they initially do.
[01:17:04] I don't see it.
[01:17:06] Okay, anyways, we won't worry about that too much.
[01:17:11] Thank you.
[01:17:12] Thank you.
[01:17:13] Alright, so let's keep on going.
[01:17:17] From my view, this will be a great opportunity to react to lift the tide knot just for every framework, but all react devs regardless if they use a framework at all. As far as I'm concerned,
[01:17:25] uh or as far as i know yeah there's no way to get in the middle of this api today without writing  stream string transforms and immediately risking hydrates and mismatches on the client i definitely  don't want to go down that road and i believe this leaves most frameworks that offered a title  metal abstraction the same exact vote
[01:17:38] They were in abstraction over it.  Regardless if any framework keeps a title meta abstraction or not,  React users will eventually be educated about these new built-in features  and want to use them, resulting in a regression and expectations for most
[01:17:50] frameworks that manage them, yes, because it works differently. Like I said, I really want to recommend developers to use this API because it's one less abstraction, but I also don't want to have to explain to them yet another rule they need to be aware of to use React.
[01:18:03] Let me take a drink after that one.
[01:18:06] Okay.
[01:18:11] *ding*  Well... *punch*
[01:18:14] This is why I asked Ryan Florence if he'd be using this in Remix and his answer was, "I'm just not going to use a Remix solution." My gut is
[01:18:25] eat.
[01:18:26] Some of them might, but like what Tanner was just describing to me suggests that he thought about it the exact same way I think about it, which means that from Tanner's perspective.
[01:18:37] He won't even be using these primitives under the hood probably.
[01:18:40] That might change, but like...
[01:18:43] Thank you.
[01:18:43] It's interesting, right?
[01:18:48] - Thank you.
[01:18:51] Yeah, I mean, I totally understand that it would be very nice if it could work. The thing I'm not hearing is how it actually work if there's possible to do it automatically we would but the constraints prevent it right because the react team is not willing to
[01:19:02] to...
[01:19:03] provide deduping logic that is flawed. As I said, it's fundamentally flawed.
[01:19:08] Like...
[01:19:11] Thank you.
[01:19:12] So...
[01:19:13] This is where I was sitting and I was like, oh, what am I going to do?  Um...
[01:19:18] Right? Like this is quite the conversation. This was one of the more interesting ones in a while. It wasn't just people like shooting each other down for some, you know...
[01:19:28] funny meme or something.
[01:19:32] Framework authors are the only one using React without a framework, essentially. Yeah. Yeah.
[01:19:38] So...
[01:19:39] Yeah, let's see here.
[01:19:42] I figured I might as well share what I've been
[01:19:46] been like a bit of my research. So actually let's just go here and I made a discussion.
[01:19:54] uh
[01:19:56] Here we go. I mean an RFC. Because I was like...
[01:20:00] How would I want...
[01:20:02] this to work.
[01:20:04] Right?
[01:20:05] So let's talk about the RFC for a minute, because I think with the backing now we can kind of like
[01:20:10] Discuss like I don't know. This is an interesting question. How should frameworks handle this stuff, right?
[01:20:16] Um,
[01:20:17] I don't know.
[01:20:18] Thank you.
[01:20:19] Right. In this RFC, I'm looking for feedback on potential JSX tags. Prozo aims to use a useful core, but also third party libraries. You want to make everyone happy, hopefully, to a certain degree.
[01:20:30] or give them the tools they need.
[01:20:32] I talk a bit about why I'm, what I covered at the beginning of the stream, like we have this one mechanism solid to already do stuff in the head, but why I don't like it, which is all the reasons that we talked about.
[01:20:42] already about, you know,
[01:20:44] only doing it first flush, um...
[01:20:46] Yeah, et cetera.
[01:20:48] One thing I guess I haven't talked about, because you might be like, okay, I'll do it at first flush and then have it fixed during hydration. This is kind of a fun game you can play, right? Because you can say...
[01:21:02] Set the title.
[01:21:03] to, you know,
[01:21:06] Have it as like come back as Theo here.
[01:21:09] Thank you.
[01:21:10] And then...
[01:21:11] I hope he doesn't mind me using his name a bunch and then have it
[01:21:15] be
[01:21:17] have
[01:21:18] Yeah, sorry. Let's line this up.
[01:21:21] The server realizes it's Theo here.
[01:21:24] The server realizes it's Theo here.
[01:21:27] and the server realizes, like, we're worried about the flushing in a minute, that is,
[01:21:33] Um...
[01:21:36] It's this, right.
[01:21:37] Here.
[01:21:39] Thank you.
[01:21:39] Right.
[01:21:41] Now...
[01:21:45] If you're streaming,
[01:21:47] Thank you.
[01:21:51] If you're streaming, this will just, you know, like I was talking about, this will just kind of automatically
[01:21:57] happen.
[01:21:59] as you go.
[01:22:01] Right. As it gets the chunks,
[01:22:04] the title will do, right?
[01:22:07] Now,
[01:22:09] Thank you.
[01:22:10] If you stopped at first flush,
[01:22:15] you would only see Theo like this, and then presumably,
[01:22:19] Uh...
[01:22:20] at
[01:22:22] sometime later...
[01:22:25] You'll hydrate.
[01:22:27] and see, you know,
[01:22:29] In a simple world, you might say, okay, then you'll see this one hydrates.  It'll go from here and then it'll hydrate and you'll see this.
[01:22:35] Right? Like it doesn't really matter. If as it goes, it basically reruns the head tags,
[01:22:42] Um,
[01:22:43] You'll settle pretty quickly as it hydrates. Now,
[01:22:47] There's a couple fun parts about this.  First of all, when the first flush happens.  Sometimes the first flush might not happen here,
[01:22:54] depending on other aspects, it might happen here, and you always see capital theater here. That's perfectly fine.  The other fun part that can happen is when you get to the client, sometimes you don't have all the assets.
[01:23:04] Like sure, you stopped at a suspense boundary.
[01:23:07] on the server.
[01:23:08] and you're good there.
[01:23:11] You know, we do a lot of preloading to avoid this problem, but
[01:23:17] lazy components.
[01:23:19] it's possible to get to a point where you can hydrate part of the page
[01:23:24] but you're waiting on
[01:23:28] JavaScript that hasn't loaded yet.
[01:23:30] Um, like,
[01:23:33] On the server, those async imports happen relatively quick, but on the client, you have to do a whole
[01:23:39] back and forth.
[01:23:40] that it's conceptually possible
[01:23:43] in this model to
[01:23:47] essentially...
[01:23:50] stream
[01:23:52] Thank you.
[01:23:53] Flush, late or whatever, based on some kind of thing.
[01:23:56] like
[01:23:58] I've seen this happen in solid where it's possible that like,
[01:24:02] Something happens where you end up like
[01:24:06] the chunks gonna get come in quicker and you end up seeing this on your page and
[01:24:11] And then because the code loads and starts hydrating and doing the rewrite, you actually then see...
[01:24:20] Thank you.
[01:24:21] it revert back to,
[01:24:24] to this and then play it back again in the client almost.
[01:24:37] Right? Like, we're like, depending on the type of hydration, the code loading, it's possible that the server still flushes later and then ends up replaying this stuff. Now,
[01:24:46] - Mm.
[01:24:48] -
[01:24:49] that's the biggest danger of right on hydration because like right on  hydration, uh,
[01:24:57] is subject to all the asynchronises of
[01:25:00] the
[01:25:01] browser and then
[01:25:03] It's possible.
[01:25:05] conceptually, that the server could get ahead of it.
[01:25:08] and then basically undo and redo. It's minor, but I just like, conceptually knowing this is one of the reasons. Plus it's more work.
[01:25:15] It'd be great if you could just trust the server.
[01:25:22] Thank you.
[01:25:23] Is there something I'm not getting why the dev couldn't specify some form of metadata for which titles should take priority?
[01:25:30] Right, but you need a mechanism for this, right?  If you provide no mechanism, how can the stream handle it properly?  For most of the time, I only want the touchline to update when I switch page or pagination.
[01:25:44] It's not just a question of when it updates, it's about when it's available.
[01:25:48] Right.
[01:25:48] Because...
[01:25:50] What if the title actually includes data from the page?  Are you willing to block the whole page for that title?
[01:25:57] That's the question. It's not about
[01:26:00] Like, obviously, it'd be great if the title was just there, you know...
[01:26:05] But it's not always practical that it can be, is kind of what I'm arguing.
[01:26:10] Like...
[01:26:11] Do you want to block?
[01:26:14] Mm-hmm.
[01:26:15] And more importantly, do you want to have the decision whether you can block?
[01:26:23] Well...
[01:26:24] Why do we care about UX is severely impacted by blocking?  You're right, the title coming in flickering,
[01:26:32] freaking cares.
[01:26:33] That's actually an argument for de-duping, I think, actually.  But if you're telling everyone that
[01:26:39] literally
[01:26:40] Until all the data is needed to show the metadata, we can't send you the page. That has UX implications in some cases.
[01:26:53] Thank you.
[01:26:53] Right? Like, I mean, how should I put it?
[01:27:00] It's so hard to talk about this because of people's experience here, but like...
[01:27:05] There was a time period...
[01:27:07] where client-side apps ran circles around server-rendered apps.
[01:27:12] Like what? No. Like, especially in the JavaScript space. I, people used to make their SSR demos back in like 2016 circuit time.
[01:27:18] And I just make a client demo in solid and smash them on Lighthouse, smash them in every possible way.  And you'd be like...
[01:27:25] Why is that possible? Why is this happening? The client
[01:27:29] The client needs to go and fetch the data and doing this, the server you have all the data. Well, it's because they block. They just basically wouldn't send back anything on the page. So what would happen is you delay sending back the fetching of the CSS, the fetching of the JavaScript, fetching of pretty much every asset on the page. And
[01:27:47] you end up with a scenario where
[01:27:49] Like...
[01:27:51] You have nothing and then you have everything and then you wait and
[01:27:55] for
[01:27:56] the stuff that become live. Whereas in my client side app,
[01:28:00] I'd send a blank page almost immediately.
[01:28:04] and then start fetching all the stuff I need the client.  So my JavaScript sometimes arrived...
[01:28:09] for rendering quicker than the data would anyway.  So then I was like rendering in suspense boundaries
[01:28:17] for parts of the data.  And if you know anything with SolidWorks,  which is a little different than React,  we don't throw away what's under the suspense boundary  when the data resolves.  We just fine-grained patch it in.  So technically, I still to this day,  some demos where it's just kind of like streaming  in some data or whatever,
[01:28:32] outperform the HTML streaming when the network is fast.
[01:28:36] you
[01:28:37] But...
[01:28:38] Okay.
[01:28:43] the whole equation changes
[01:28:45] when you can stream.
[01:28:47] Because now you're not blocking anymore. Now there's basically no penalty for, you know, putting the data on the server. You can make the choice actively. You go like, I should wait for this. I don't want to have a loading indicator or I can not wait for this.
[01:29:02] Stuff like...
[01:29:03] these meta tags and titles,
[01:29:05] arguably
[01:29:08] If they would cause the page to block, should be something you can make an active decision on.
[01:29:13] Thank you.
[01:29:18] Thank you.
[01:29:25] I mean, early hints are great too, but early hints and streaming are basically the same
[01:29:30] Like, it's like a very limited part of this thing, but you can do more. Like,
[01:29:37] Another advantage of streaming in these situations is
[01:29:42] the slow loading stuff, right? We, like the stuff that takes longer to load. We have the ability with streaming,
[01:29:50] to even though we don't care about it, we could just fetch it on the client after the fact.  We have the ability of streaming to start that request that much sooner.  We start the request for the data here.
[01:30:00] Instead of
[01:30:01] Well, I mean, I actually have the diagram right here.  We start that fetch for the data
[01:30:06] here.
[01:30:07] when we go to the server.
[01:30:08] This is when we start that fetch for the data.
[01:30:10] when you're streaming.
[01:30:12] and otherwise,
[01:30:14] We would be starting that request for the data here.
[01:30:17] Here versus here.
[01:30:24] Like...
[01:30:26] It's...
[01:30:27] It's almost strictly better across the board on every mechanical aspect.
[01:30:33] It's like has the benefits of client.  It's very rare that you find a solution  that does both things and actually does so  with fairly minimal compromises.  Usually there's like a trade-off.
[01:30:44] Streaming kind of sits in this
[01:30:46] Other than cashability, arguably, but I mean, we could discuss that if you really want to.  It sits in this actually kind of sweet spot here.
[01:30:58] Most of the time you don't care. You want the meta tags for bots, but bots don't support  JavaScript always. So like you'll just wait.
[01:31:08] If the bot has to wait, you don't care.  If the human has to wait, you do care.  Which means that, like...
[01:31:15] You should be able to author these things in the same way, right?  You don't want to like have like the bot version and have different code and the  thing you should be able to just like write the stuff.  And when you say, Hey,
[01:31:24] it's a bot, just wait and flush at the end.
[01:31:28] you know, I don't care and gets everything, you know, inserted in the head initially versus the end user, you know,
[01:31:34] You should be able to just...
[01:31:35] This should be a very simple switch at the top level, not something that changes the way you architect or author your code.
[01:31:41] Right?
[01:31:42] Ideally, that's a DX concern.
[01:31:44] But,
[01:31:51] Thank you.
[01:31:52] Yeah, so my whole point is,
[01:31:54] It causes a problem that affects UX if you're willing to block the page for it.
[01:32:00] which is what the recommendation of basically every library is.
[01:32:10] Thank you.
[01:32:12] Thank you.
[01:32:14] So,
[01:32:16] Thank you.
[01:32:17] Thank you.
[01:32:19] Yeah, I mean, that's this. Sorry, where was I? Yeah.
[01:32:26] - I was doing the Excalibur here where I was showing the timing here. This UX bit is very minor.
[01:32:36] I just wanted to throw it out there. What, you know,
[01:32:39] We could probably live with this aspect.  We do today with Solid...
[01:32:43] It's less than ideal, but it's just, you know, a thing.
[01:32:48] Okay. So,
[01:32:50] Let me continue with this piece for a second here.
[01:32:56] Yeah, so while one can take a decision that all metadata should be resolved before flushing,  and it also means always blocking, which I don't think is a good place to be,  this isn't always a reasonable request.  You could have to wait on the longest thing to load on the...
[01:33:05] piece of data before showing the user anything. You could argue that deduping is the problem, but showing some less descriptor title before the fully formed one is probably still beneficial.
[01:33:12] So I did research.
[01:33:14] Um...
[01:33:16] I looked at a bunch of libraries
[01:33:18] here. So I'm going to just drop this in chat in case anyone wants to look at it.
[01:33:26] I know this is a fairly esoteric topic.  I should have said this at the beginning.  You know...
[01:33:33] This is like a framework author kind of topic. It's what we usually cover on the stream. You as the end developer are only slightly impacted from it because the gist of what the React team says is this feature is not for you. You should probably just use what they have because...
[01:33:48] They're right. If deduping
[01:33:52] you know, title,
[01:33:55] is fundamentally flawed.
[01:33:57] then they don't want to hand in it. Although if you look at this chart and honestly if you expand  this chart to ever to like twice as many libraries because I looked at more than I actually like did  here you will see that React 19 is literally the only head library in existence that has not to do  title.
[01:34:12] Pretty much
[01:34:13] in all time. I...
[01:34:15] I...
[01:34:16] This is why it was surprising not
[01:34:19] And I don't mean that in a bad way, necessarily.  Like, it's just, it is unique.
[01:34:24] I don't think anyone goes out to make a solution for head tags and doesn't dedupe the title.
[01:34:30] Like,
[01:34:31] So this is you understanding that this was very intentional.  Like I'm sure the react team knows that I'm sure like they will look like  probably to brief look at the space and realize like literally everything ever  has detooped the title.  And they're probably like,
[01:34:44] Yeah, but we don't want to.  So it's intentional.
[01:34:49] I'm
[01:34:50] What about Angular? I don't know Angular's solutions. You got me there.
[01:34:58] Is it built in, Brandon?
[01:35:01] Like...
[01:35:02] Thank you.
[01:35:02] I...I...
[01:35:05] Yeah.
[01:35:09] Yeah, let's look. Quick metadata.
[01:35:12] Haven't looked.
[01:35:15] Use document head.
[01:35:25] Okay, so they have use document head...
[01:35:33] And then they insert it in. This reminds me of the old synchronous rendering. I wonder how this works with async. I guess they don't have streaming.
[01:35:39] in the same sense, like they have an order but they don't have out of order.
[01:35:42] Like this is definitely first flush style API, I think.
[01:35:45] If I am an understanding here,
[01:35:48] Um...
[01:35:50] Thank you.
[01:35:55] Thank you.
[01:35:58] Oh no, this is her reading, not writing it?
[01:36:02] Huh.
[01:36:05] No manually set the heads and yeah, you know, you can set it.
[01:36:09] But look at this title. I mean, this is the answer right here. Title is a string. It's not an array of things. It is a single string.
[01:36:17] This alone tells you they do dupe the title.
[01:36:23] Thank you.
[01:36:25] No.
[01:36:26] They do not.  They do...
[01:36:30] Oh, when the component dismounts?  Yeah, they might remove the title.  They might remove...
[01:36:33] Yeah, they probably do. I bet you they do remove the title actually. Yeah, sorry. Yes, they will remove the title when it dismounts. Yeah.
[01:36:42] Yes.
[01:36:43] So if you put a title on each page individually,
[01:36:46] and remember to put it on every page. None of your pages will be without titles and it should work.
[01:36:54] Right.
[01:36:55] Okay.
[01:36:58] Anyway.
[01:36:59] Thank you.
[01:37:04] But yeah.
[01:37:05] Ok, so angular neither did dupe, that is interesting.
[01:37:09] So they don't treat title as a string, they just treat it as a meta element?
[01:37:13] Because basically, if you treat it as a single string, that's implicit duping because there's only one value for it, right?  Right.
[01:37:21] Anyways, um...
[01:37:25] I went through a bunch of frameworks and looked at it.  There was some interesting patterns,  'cause most, there's a lot of these like,
[01:37:31] do it everywhere styles.
[01:37:33] The title would be over in the end. So, yeah. So, yeah.
[01:37:37] The last one wins. Yeah. So yes, Angular is the same as everyone else. Yes. Okay.
[01:37:43] Yeah, that's when I say deduping, deduping is a wrong term. It's overriding. So yes.
[01:37:48] React is very unique there. So that's, it's a stance, which as I said,
[01:37:55] carries repercussions, but this is not about a negative or positive thing. It is an interesting thing.
[01:38:02] Okay. So, um, yeah, first of all, some solutions are like, you can just put tags everywhere.
[01:38:08] Other ones kind of group them. I want to point out something obviously next and remix  use like sections or route groups like in your route definitions
[01:38:16] Um,
[01:38:18] Whereas like
[01:38:19] Most of the other ones are individual.  React Helmets API is an interesting one,  where I continue, considered it grouped because,
[01:38:27] You make a helmet tag.
[01:38:29] And I know Svelte is like this 2 to a degree,
[01:38:33] but...
[01:38:34] The...
[01:38:36] Like the svelte head or whatever.  But the reason I put them under grouped is because they actually...
[01:38:43] do a level of replacement with it in that if you have two metadata tags with the same name or key  within inside the same group, they don't dedupe.
[01:38:55] They'll let you put like four things with the same key.  But if you use that same property name on your meta,
[01:39:01] in a different way.
[01:39:02] helmet, it will...
[01:39:04] replace
[01:39:06] both entries from the other one.
[01:39:08] So you can make duplicates at the same level, which is, as I said, very much the same in something like Next or Remix, where each level has the ability to basically completely merge or override the level above it.
[01:39:21] Helmet works like that too. Whereas when you have single off one one of elements style designs, each one's handled separately. It's not really easy to do that.
[01:39:31] Um,
[01:39:32] Svelte doesn't, it just doesn't, it just makes groups and mounts and unmounts them with your component.
[01:39:38] But it was interesting because the ones
[01:39:41] that
[01:39:42] Grouped.
[01:39:43] basically de-duped Medon name.
[01:39:46] Thank you.
[01:39:47] whether intentionally or Remix, they just say the last route section wins.
[01:39:55] They basically deduped on names. Most other libraries other than like Helmet that I looked at
[01:40:00] Did not but again helmets kind of grouped and
[01:40:03] Um,
[01:40:04] I know there are libraries, like the one that I built Solimed on, that did dedupe and was not grouped. So,
[01:40:11] Any of those libraries basically open graph.
[01:40:14] made it so that they can't work that way because it just screws with open graph.
[01:40:19] So I think that generally speaking, deduping on meta properties
[01:40:25] Um,
[01:40:27] can't be something that can be automatically handled unless you know for sure that you have a merger layer system like you have with a router, which means that this is not really a feature that you can do as a core feature in a library.
[01:40:39] So React decision makes a lot of sense. Svelte decision makes a lot of sense.
[01:40:44] Nuxt 2. We're going to get to Nuxt 3 and Unhead in a second because they are...
[01:40:50] an interesting exception.
[01:40:54] Right?
[01:40:54] Because as I said, anything that dedupes or overrides, it's a last one wins category, generally speaking.  Okay.  Title, as I mentioned before...
[01:41:03] Everyone basically dedupes on title.
[01:41:05] And then
[01:41:07] Some of the frameworks that don't dedupe in that provide specific keys.  This used to be the meta framework trick.
[01:41:13] You know, Svelte doesn't really, but they have a way of doing it.
[01:41:16] Um...
[01:41:18] Nuxt, old version of meta and new version of meta, let you provide some kind of key. Remix, I said group doesn't.
[01:41:26] and these ones the group doesn't.  So there's almost like two different approaches here,  I've found, where there's either grouping that can do more
[01:41:33] reasonable meta de-duping because of the grouping, or the ones that aren't grouped that have some kind of mechanism for a key. The only exception is unhead, which basically just does everything.
[01:41:47] Um,
[01:41:48] So
[01:41:49] which is, you know, interesting, because it also makes it the most...
[01:41:54] complicated because a lot of the you have more configuration object options than you would like stick on a JSX element. It's like, oh, there's like, you can make merging strategies and you can, I mean,
[01:42:07] unhead. Let's just go there.
[01:42:11] title, title template, template parameters, body attributes, scripts, and
[01:42:17] Let's see, is it API?
[01:42:20] um...
[01:42:24] Is it usage? I can't remember where it is.  There's like...
[01:42:28] So
[01:42:30] There's...
[01:42:31] Yeah, doo-doo-doo-doo.
[01:42:34] mode,
[01:42:36] Like, this is very...
[01:42:39] Thank you.
[01:42:40] So
[01:42:41] what's the term when you basically have like every option imaginable under,  under your head. Um, this is very, uh, extensive, um, so to speak. Um,
[01:42:52] So, I mean, I was definitely tempted here because it's like, man, I just don't.
[01:42:56] Like if I don't want to solve a problem, this is one way of solving it.  Get past people to a library that literally does everything.
[01:43:03] Comprehensive, yes, comprehensive, that is the term.
[01:43:06] Right?
[01:43:10] Yeah. Unfortunately for me, you know my criteria. I care about streaming. Unhead does not currently support streaming. There's an open issue that they're starting to look at for like a 2.0 to look at streaming.
[01:43:24] And even if they support streaming, I don't know how they're going to support streaming.  Because a lot of times it's like, oh, maybe first flush is fine.
[01:43:31] This is a very tricky place that integrates very deep with the framework. I'm very interested to see how they do that.
[01:43:37] do the generic stuff. I've been very impressed with on JS in general.
[01:43:41] in how they've been able to,  uh,
[01:43:45] integrate so well with different solutions.
[01:43:49] it's very hard to find that general layer.  Um,
[01:43:54] and at the same time give such a comprehensive feature set.
[01:43:59] I was curious for a second.
[01:44:01] So I dropped it in Bundlephobia.  And of course, Unhead, the core library was like 13 kilobytes,  mid-nit-zipped, which makes it twice the size of SolidJS itself.  And SolidMeta was 1.5 kilobytes.
[01:44:18] So I was like, huh. And that includes a server code. So I was like,
[01:44:22] I think if I was going to take this internally in Solid  and do the streaming stuff,  I could make something smaller than SolidMeta  and basically cost the user 500 bytes-ish.  So like...
[01:44:33] There's also like, do I want to expose all of this and be on the hook for all of this?
[01:44:38] And since I need to kind of get the streaming stuff, bring it in core, does this make sense?  And my thinking was not so much.
[01:44:44] Yeah.
[01:44:45] Like, yeah.
[01:44:46] comprehensive, yeah, TanStack is comprehensive as well. That's what I'm saying.
[01:44:50] It's an interesting tension. Sometimes me and Tanner hit this one working on start.
[01:44:55] I don't know how many of you...  Tanstack Start's been getting a lot of attention,  but it's built on the same bones, their skeleton, a solid start.  And a lot of the features and a lot of the thinking and the philosophy are...
[01:45:06] basically completely aligned, like all the composableness.
[01:45:10] I didn't,
[01:45:11] I built a framework and
[01:45:14] with Nikhil who built Vinci. We built something in such a way that we would not alienate Solid's very small ecosystem. And in Nikhil's case, he wanted to be able to support doing some React stuff as well.
[01:45:24] And we did so by being very
[01:45:27] By figuring out where the boundaries were and making it such that they weren't going to interfere with
[01:45:32] in a way, like be too prescriptive in terms of like what tools or libraries you used.
[01:45:39] And
[01:45:41] Tanner had the same problem because every...
[01:45:43] Meta framework is married to its router.
[01:45:46] So like you're kind of stuck.
[01:45:48] You're suddenly in this position where it's like, okay, I'm going to use Remix.  Well, you're actually using React Router or Next App Directory.  The framework is the router, right?  This is old news.  Everyone knows that.
[01:46:00] So, but when I was building a solid start...
[01:46:03] I was like, no, I don't want the framework to be the router.
[01:46:06] Um,
[01:46:07] And we tried it a bunch of different ways.  And Akil was like, came back to me after being away for a couple months.  And he's like, I got it.  This is how we do it.
[01:46:14] And he got inspiration actually from Jared from Bun.
[01:46:16] who'd been working on generic bundling tools  for stuff like server functions.
[01:46:21] and
[01:46:22] we brought that to the Vita ecosystem. So like,
[01:46:27] It's funny because me and Tanner sit down and talk a lot about a lot of these kind of like levels of decisions and it's it's a lot it's less like people always like people making the same solution. It's more it's more like.
[01:46:40] the way I like, I'm very primitive focused, kind of core focused. I always think about like,
[01:46:46] what I could offer from like a
[01:46:49] primitivist thing that would empower people like Tanner while having basically no interest  in building some of the stuff that Tanner builds myself.
[01:46:57] And what I hear from Tanner and what I get a lot of value from is he's looking for building blocks that he can build this stuff in React.  And most of the time when we find those gaps, we're like, oh, actually, solid works like that.  And he's like, oh, I wish I could do solid.
[01:47:10] Sometimes we identify other gaps and it helps me kind of figure out what the real core permittives are.
[01:47:18] But usually what it ends up with is Tanner going, building the, you know, unhead
[01:47:22] style library and me going, what is the absolute minimum thing he would need to get what he wants?
[01:47:28] from the core library to build a library like this.
[01:47:30] Because I sure in hell don't want to build this library.
[01:47:40] Anyway, this...
[01:47:43] is a very comprehensive library.
[01:47:48] Yeah, I mean you can see all the different stuff you can do here. I
[01:47:51] wasn't quite the right fit because of the minimalism and the streaming stuff.
[01:47:57] But...
[01:47:58] Yeah, I don't know. This is a very interesting topic because as I kind of went over, I think the core needs to be aware of this stuff, but...
[01:48:07] If.
[01:48:07] If...
[01:48:08] the core can't do the deduping at any level, then there's no means
[01:48:13] to actually...
[01:48:15] Expose this to people like Tanner. They just it won't be basically any use for them if they actually want to accomplish what what I've  Kind of set out here to do so I can't with my proposal and
[01:48:25] which I'll spend a couple minutes talking about,  which was, it's funny, it's very much like Unhead.
[01:48:33] Um,
[01:48:34] Ah.
[01:48:34] you know, it has less stuff on it.
[01:48:38] It doesn't do any deduping except
[01:48:41] it has the optional ability to pass a key.
[01:48:45] which could do D-duping. Sorry, the only D-duping it does is title. Sorry.  I should be clear about that. It D-dupes title.
[01:48:50] which I'll talk about in a second.  But other than that, it would be key.  But then the fun part of it is...
[01:48:59] We...
[01:48:59] If we were to export JSX tags,
[01:49:02] Yes, we do title, but every other rule is exact same as React.
[01:49:07] So none of the other deduping happens.  So while the underlying primitive that the compiler transforms this into has the ability to do deduping and handle that deduping on the stream, be able to send diffs over the stream, you know, append elements, remove elements.
[01:49:20] The actual defaults that people get have no opinion about how they do except for title.  I mean, we wouldn't even have to do title that way, but let's pretend except for title.  And there'd be no way with the JSX to set the key.
[01:49:32] So the
[01:49:33] if someone approached this from the perspective,  like,
[01:49:38] you took React stocks and were like, there should be only one title on the page.
[01:49:43] then
[01:49:43] and all the other rules from React Docs,  and just did it.  This would work perfectly fine for them.  It wouldn't impose anything about rules of deduping  or any of that stuff.  It would just...
[01:49:55] kind of stay out of the way except for title, which I'll talk about in a second.
[01:50:00] And then for people building libraries, they could use this and have key based diffing, which would work over the stream after the fact.  They'd have the means to diff, merge, make those decisions and have incremental streaming.
[01:50:12] Right.
[01:50:14] So I think this is...
[01:50:16] Um,
[01:50:17] very powerful, um,
[01:50:19] kind of concept anyway, because
[01:50:22] the average user
[01:50:25] isn't told that they should have more than one title on the page.
[01:50:30] The only reason that I'm considering deduping Tidal
[01:50:34] is because
[01:50:39] you can still recommend not to put multiple titles on the page.
[01:50:44] And still have the benefit. This is like the exception case. It's like, what do you do
[01:50:48] when someone
[01:50:51] doesn't follow the rules.
[01:50:56] You know what I mean?  Like...
[01:51:00] If you say that there should only be one title, then that's fine.
[01:51:04] But if...
[01:51:08] If there are two titles
[01:51:10] What should the behavior be?
[01:51:14] Right. You can either just say
[01:51:16] Not up to us.
[01:51:18] But since I already built the mechanism to dedupe anyway, to support future deduping efforts of people,
[01:51:28] Like, why not? This is just a proposal, but this is kind of where I'm getting at because it feels like...
[01:51:34] The core, unfortunately, has to be aware because as we already talked about, this isn't really easily built in user land.
[01:51:39] So you're kind of in this place where if you actually want the solution,
[01:51:44] the framework has to provide the means
[01:51:46] but not the opinion.
[01:51:48] And I think that's what this accomplishes.  That being said...
[01:51:53] Um...
[01:51:55] I've I actually went and implemented most of this the last couple days when I was playing around and I found some other fun titles limits and solid today. I don't think I'm going to get this out for 1.9 even though I spent all this effort to do it.
[01:52:09] This
[01:52:10] feature actually benefits greatly from solid 2.0's reactivity, ironically.
[01:52:17] More details than probably people need to know or understand, but...
[01:52:25] essentially...
[01:52:28] This kind of work should happen on the server  as basically a render effect is what we call it.
[01:52:35] User effects only run on the client, right?  They're your use effect type stuff.
[01:52:39] It should be part of the rendering.
[01:52:42] Mm-hmm.
[01:52:43] I guess we'll talk about it a bit today because solid groups the tracking and the effect together in our effects.
[01:52:50] in solid 1.0.
[01:52:52] render effects happen
[01:52:54] as you render and user effects happen after you render. And both those timings
[01:53:00] are...
[01:53:01] actually really awkward for solving the metadata problem when you consider async data in suspense, because if it's
[01:53:09] as it's rendering...
[01:53:11] then it's too early, right?  You don't want to update the title  until suspense is finished resolving.  And if it's after rendering,  like in the side effect, it's too late.  You don't know you actually depend on the async stuff.  And for, as I said, most end user code,  you never hit this, right?  Because you're rendering and it blocks and it handles it.  But the head...
[01:53:28] tags actually rendered to a different place that's not
[01:53:30] controlled by the
[01:53:32] by the main render tree.  So this is like solid specific details, which, disappointingly, I learned enough that I know, I think this proposal still, you know, we'll have some more time to debate and talk about it.  And I think this is exactly how these types of solutions should work in the future.  I just lack the tools to easily implement this today, even though.
[01:53:51] I got a basic working version going the last couple days.
[01:53:56] But...
[01:53:57] Yeah, I don't know.
[01:53:58] Anyone has their thoughts on this?
[01:54:01] But...
[01:54:02] Um, it's,
[01:54:04] I think this is how you approach it. There's some good comments actually Ricky jumped in here actually. Uh,
[01:54:10] Wow, this is a great write-up and research into different things. I'm actually so appreciative  that someone from the React core team actually bothered to write on a solid RFC. Part of it was  because, you know, I do talk about React a bunch in here. Just to explain React's approach here,  and because I was like, this is really interesting, I don't quite understand. We try to avoid voicing  a common abstraction on users that has unresolved pitfalls like the ones you mentioned. That's why  React supports deduping for links, script, and style tags in cases where, like, there's no pitfalls. Like,
[01:54:36] the href is the same or the source the same, but not for title. Instead we encourage libraries and frameworks to choose their own tradeoffs and users can choose different libraries and different tradeoffs. That's why the two react frameworks listed have support for dooping, but in different blah, blah, blah. That's choice to make to live with. But for solid libraries, you may have different design principles that work better for your users. I don't think one way is better, just different set of tradeoffs. Yeah, no, definitely. And
[01:54:57] in a way that I think might make more sense to, like, the React core team and React team.  To me, this is, like...
[01:55:02] Fetch.
[01:55:04] Like...
[01:55:06] Thank you.
[01:55:07] *sniff*
[01:55:08] overriding fetch because it's like you mechanically, uh,
[01:55:12] see an advantage of doing that to accomplish a certain goal, right? Because you know that it's so vital for the functionality of the framework to kind of step yourself into it, right?
[01:55:24] you need to open up the mechanism. It doesn't really,
[01:55:27] Thank you.
[01:55:28] like for the most part,  you're not really changing anything or trying to make,
[01:55:32] push the opinion on people, but you need it mechanically.  And I feel like what I'm getting at here is,
[01:55:39] I actually,
[01:55:40] what is the coolest thing a moment ago is if someone if I implemented this proposal
[01:55:44] The React docs would just apply to Solve basically 99% and it would just literally work the same way.
[01:55:50] um,
[01:55:51] except for title, but
[01:55:53] someone could say that's the way I should develop and it would work completely,  but it opens up the door for people to be able to,
[01:56:03] use this
[01:56:04] as part of libraries to get functionality that could only be exposed from the core. That's what I'm saying. I think because our difference in viewing on streaming is why there's a difference here because I think streaming goes beyond the first flush. There's no choice but to provide a mechanism to handle this. Whereas if you don't, you have to assume that streaming ends up like that this ends at first flush. So it's like, it's like,
[01:56:31] It's
[01:56:31] It's interesting that I actually think...
[01:56:35] reaction ourselves very, very aligned here. It's just,
[01:56:39] the ambition of the
[01:56:42] solution.
[01:56:43] or the problem being solved is like I'm being a slightly more ambitious,  which pulled me,  caused me to pull in the next thing,  so to speak,  whereas reacts like,  um,
[01:56:51] That's outside of our range. It's not.
[01:56:54] because we don't want to encourage libraries. It's actually the opposite. We recognize that they  wouldn't be able to get to where we want to go if we didn't give them the tools.
[01:57:04] So yeah, definitely interesting.
[01:57:08] The last one wins.  It's the same thing.  But the reason...
[01:57:13] The reason that I might be more lenient on this kind of thing is, if the answer is do what React does,
[01:57:23] This works.
[01:57:24] If the answer is do what Remixer next does,
[01:57:27] It still works because hierarchically, you do get the last one wins situation.
[01:57:32] The problem is you can't guarantee
[01:57:36] The last one wins as well when you can just put stuff everywhere, but you can't, but the router is not core. So the only option you have is
[01:57:43] here is basically with the JSX tags,
[01:57:46] not last one wins, and then
[01:57:50] If someone wants to make a tag that's JSX tag-like and make last one win, they can using this.  Or they can make...
[01:57:57] This could be used to make something like Remix or Next does.
[01:58:01] And again, you don't have to worry about that.
[01:58:09] Yeah, I mean, yeah. Blastering the stream. Like you, I think the thing that people start picturing all these edge cases,
[01:58:18] but no one ends up authoring it like that.
[01:58:21] If you put
[01:58:23] Think about it. This can happen today. If you put these head tags and a bunch of siblings under lazy components at all,
[01:58:31] order
[01:58:32] async and coming at different times
[01:58:34] React Helmet would go freaking nuts. It wouldn't know who won, who was last, whatever. It would be a mess.
[01:58:41] -
[01:58:42] No one actually authors their stuff like that though.
[01:58:46] Right.
[01:58:47] I was thinking about it with Tidal.  It's like, picture both extremes.
[01:58:53] You...
[01:58:54] have two titles on the page.
[01:58:57] Because you messed it up in React 19.  And you're like, why isn't the title updating?  So you're suddenly looking around your whole page,  trying to find your whole project,  trying to find where that second title is.
[01:59:08] It's very similar to
[01:59:10] Why is that title updating to what I don't expect it? And you end up like both situate like just by not deduping you haven't actually solved the problem like the work you have to do to actually look around is actually the same work, so to speak like.
[01:59:28] Um...
[01:59:30] .
[01:59:32] Like it'd be different if one of the solutions actually solved the problem, but the cold reality is there's a single title.
[01:59:38] So whether we pretend to or not, we give the user the ability to set multiple titles
[01:59:45] D-duping is happening. It's in your controllers or it's in the browser's control, but it's happening. So
[01:59:49] like essentially like,
[01:59:53] Okay.
[01:59:54] Thank you.
[01:59:56] It doesn't actually matter
[01:59:58] As fundamental
[02:00:00] bad as it is.
[02:00:02] I don't think it actually matters.
[02:00:10] What if a page
[02:00:12] had an ID and the title should have that ID. I mean, put the ID in the title. I'm not quite sure I'm understanding the question.
[02:00:19] Like,
[02:00:21] Thank you.
[02:00:22] Thank you.
[02:00:24] The thing is...
[02:00:26] There's a limit to what these solutions
[02:00:29] can handle properly and there's a limit to what the browser can handle properly.
[02:00:34] So
[02:00:36] Thank you.
[02:00:40] Unfortunately,
[02:00:42] I could say ideally from an end user perspective, that the route level stuff that Remix and Next is doing seems to be about the ideal solution.
[02:00:52] But Remix and Next don't have the tools to do...
[02:00:56] the streaming.
[02:00:58] the way that, um,
[02:01:01] that we're handling it.
[02:01:03] So this would give them the tools to handle the streaming.
[02:01:13] I'm hoping this makes sense, right?  Like it's essentially...
[02:01:19] being as unopinionated as
[02:01:21] React except for title which I said has no really
[02:01:25] Defined behavior if you have more than two title tags on the page.
[02:01:29] So it's kind of like out of it.
[02:01:31] But then on the other hand, giving libraries a way to actually interact with the streaming.  It basically handles...
[02:01:36] both scenarios, anyway.
[02:01:38] Thank you.
[02:01:46] The main reason that people use head libraries with title deduping is so that they can set default titles or set titles...
[02:01:55] Like, yeah, defaults the main one or set titles before data is loaded.
[02:02:00] Um,
[02:02:01] But a lot of times what people do,  and maybe this is a bad practice we could argue,  is they set a title higher up,
[02:02:07] that if they don't put a title on the page, there's just a title there.
[02:02:13] Thank you.
[02:02:15] I think they probably like the approach  I like the approach  I like the approach of Remix too  It's funny hearing Ryan Florence just like denounce it  But like
[02:02:24] Like...
[02:02:25] Yeah.
[02:02:27] It's tricky.  Like, let's look at Twitter's API.  Okay.
[02:02:31] But let's just look, okay?
[02:02:35] Let's look at a-- where's my page?  Why am I not?
[02:02:41] home profile of this one. Okay.
[02:02:44] Here I am.
[02:02:46] Now...
[02:02:48] What does it change when I go? Yeah, okay. See now I have a new title post replied by Ryan and
[02:02:53] Highlights highlights. Yeah, so changes what I'm getting at is I'm
[02:02:59] .
[02:03:00] It's fine because each one of these
[02:03:03] tabs has their own
[02:03:05] title, right?
[02:03:10] But if you were to write this component or this page in a router,
[02:03:15] you basically have a page and then you have like nested three, like six nested routes in it.
[02:03:22] you have to make sure you get the title and the right information at the right level of the router, and that all six of these have their thing, which you should, honestly.
[02:03:32] So like from that argument you could say like the title should actually belong in each one of these tabs  You should not have a title
[02:03:40] up here.
[02:03:41] Right.
[02:03:42] When I load Twitter
[02:03:44] You know how it shows X first before it shows...
[02:03:49] the posts. I'm gathering this is a client's single page app so it does that but what I'm trying to get at is
[02:03:54] What if you...
[02:03:56] want to show Ryan before the tab or include this information. What I'm getting at is
[02:04:01] The title information sometimes isn't known until the...
[02:04:05] Sometimes it's obvious from the path, but does this have my name in it?
[02:04:09] Posts liked by Ryan Carniato, yes.  Sometimes you don't have all the information  at the time you go to render the initial page.
[02:04:18] Thank you.
[02:04:19] Thank you.
[02:04:23] Thank you.
[02:04:27] Yeah, mostly. And that's how React is handling it, too. You know, it's a low level. They don't expect end users to really use it. I get...
[02:04:37] I mean, maybe they do, but like
[02:04:40] As I said, it's interesting that pretty much every head management library has always needed a title because the browser forces you.
[02:04:53] Anyway.
[02:04:55] Thank you.
[02:04:59] Yeah, but what I'm getting at is
[02:05:02] It doesn't really matter if it's outside.
[02:05:05] you could take the metadata coming from something like Remix Index and feed it into this and then get full access. The fact that it's JSX is only one possible interface. This is the sketchy part. I actually don't, I'm less concerned about having an underlying head thing, deciding the behavior of JSX. Like we talk about making assumptions, you know, when talking about what people want to do.
[02:05:26] Making assumptions about the behavior of JSX is
[02:05:28] much more
[02:05:30] impactful on the surface area consideration than exposing a hook that has special behavior.
[02:05:37] has probably more impact over time for support than this does.
[02:05:45] Thank you.
[02:05:47] All right.
[02:05:50] so yeah i mean it's def it should be clear that this is definitely not something that has an easy  solution
[02:05:56] Um...
[02:05:57] And why...
[02:05:59] Maybe library framework authors haven't seen completely eye to eye on it.
[02:06:06] Thank you.
[02:06:08] I think that something is the solution, but...
[02:06:14] As I said,
[02:06:15] I'm missing some of the primitives.
[02:06:18] to implement it today, unfortunately.
[02:06:21] This is one of those examples where
[02:06:25] My head's already in 2.0.
[02:06:28] And then I go to implement and I'm like, oh, crap.  I took that for something.  It's really difficult to always have your ideas and mindset being in the future and not being there.
[02:06:41] So...
[02:06:41] But I think this gives us more time as to talk about this.  Yeah, let's move on.  I think I'm pretty good with this topic.  Let's go into the next topic.  Let's maybe look at some of the Elixir or Jose...
[02:06:57] stuff
[02:06:59] uh...
[02:07:00] live view stuff.
[02:07:04] That's going to go back a bit.
[02:07:14] Thank you.
[02:07:17] What's this whole thing?
[02:07:21] Yeah, I don't want to jump fully into this week in JavaScript yet.
[02:07:29] But...
[02:07:30] We covered, last stream we covered this whole thing where Jose basically was going through the chat GPD
[02:07:40] app and found a whole bunch of bugs in it, right?
[02:07:45] Right. And
[02:07:48] I mean, from my perspective, that's what they are.
[02:07:51] He released another video where he showed how
[02:07:56] you
[02:07:57] implement this in live view. And I have to admit,
[02:08:02] When I was watching it,
[02:08:03] I did turn my nose up a little bit.
[02:08:07] I didn't fully understand it.
[02:08:10] I'm not going to play the whole video. Let me see if I can jump ahead to something that shows what I'm talking about.
[02:08:16] But...
[02:08:17] Yeah, it's blurred here. Sorry, let me see if I can... can I... it's right here. It's exactly right here on the screen.
[02:08:27] The video's loading.
[02:08:29] Thank you.
[02:08:36] Yeah, I will do it on a V2 branch.  Our problem is not having split effects.
[02:08:41] I'm
[02:08:43] It should just work naturally in that world. Yeah, of course now the video is not loading. This is like I
[02:08:51] Oh.
[02:08:53] Like I can see it on my screen, but it's blurry.
[02:08:57] So frustrating.
[02:08:59] Come on.
[02:09:05] Thank you.
[02:09:20] Thank you.
[02:09:24] Okay.
[02:09:28] So right now what he's doing here is he's showing that...
[02:09:33] Yeah, okay.  So now he's showing how he can do optimistic updates  by basically exposing this JS library.  So basically, I guess this is phoenix click.  JS push delete, JS hide to this.  So he's describing a bunch of...
[02:09:54] like more or less, I guess there's styles and DOM updates based on this.
[02:10:00] Um, because...
[02:10:02] For the most part, Phoenix is going to, or sort of LiveView is going to render on the server and send HTML partial diffs over to the client.  But for this thing where the...
[02:10:11] with the optimistic update.
[02:10:13] You want the update to happen in the client immediately and not wait to go to the server.  That's the whole reason it's optimistic.
[02:10:19] There's a JS API that basically like describes, you know, pushing the event to delete I'm gathering and then hiding
[02:10:28] Um,
[02:10:30] you know, some kind of selector.
[02:10:32] Yeah, JS commands.
[02:10:34] - Right.
[02:10:36] And yeah, when I saw this, I had like a very violent reaction to it.  You know, my reactions are never violent, but I was just like,
[02:10:44] man, jQuery is back, right? You know, like,
[02:10:48] I know it's better than that, but like...
[02:10:54] When I saw this
[02:10:56] It's not quite the same as like
[02:11:00] when I was talking about putting your ERB templates and knockout on top of each other, it's more of like what happened before that stage.
[02:11:10] Right. And I actually had a good talk with Jose about this because he was like, he's like, he called this declarative. And I'm like, this isn't declarative. This is imperative. Instruction, instruction.
[02:11:19] You know, like it's you're describing
[02:11:22] Like,
[02:11:23] push this event
[02:11:25] "Hide the selector," blah, blah, blah.
[02:11:28] almost all front-end perspectives, they'll want
[02:11:33] UI to be a function of state, which means that there's a decoupling.  That's the declarative decoupling, right?  Where essentially you say,
[02:11:42] And I understand in a sense
[02:11:44] that
[02:11:45] I'm calling out selectors here when really that state could be represented in CSS and look declarative and not look like imperative steps.  There is a way to do this with LiveView for simple cases that doesn't do it.  But conceptually...
[02:11:57] The biggest actual difference here
[02:12:00] has been actually
[02:12:02] that
[02:12:03] that you can decouple it. Like if you say this is optimistic,
[02:12:09] something over here can
[02:12:11] you know, be affected. Like you can optimistically add something to the cart over here. Now you can do that with selectors, but the difference is
[02:12:18] In front-end declarative libraries, it's a matter of pushing state, and then that state branches out and impacts every piece that is impacted. It's not like...
[02:12:29] you know,
[02:12:30] go hide that thing over there and that thing over there.
[02:12:39] But the instruction secret is a built-in single expression.  Yeah, and that's part of the problem.  Like, what if you have...
[02:12:45] this on
[02:12:47] different locations that perform the same like  this like  um
[02:12:53] Sometimes you put the logic in the event handler. Other times you don't put the logic into the event handler. You push it into the state and then the state will...
[02:13:05] push out and make sure that the rest of the app stays in sync.  That's why most modern front end frameworks are based on, um,
[02:13:12] state, right? You get guarantees. As long as the state
[02:13:17] is always reflected in the UI, you trust the framework.
[02:13:20] And
[02:13:21] It means you can update the state from multiple locations.  It means that the combinatorics of this is not something you have to worry  about.  You don't have to worry about if something else is doing this and something  else is doing this,  the state will resolve itself.  So like,  I,
[02:13:36] - Okay.
[02:13:39] It got me thinking a bit about how hard it is to cross the wire.
[02:13:43] Right?  Because...
[02:13:45] Yeah.
[02:13:46] It's difficult to be declarative in a UI equals function state sense in these live view events because I believe it would require going to the server to feed the state back in, which impacts the immediacy.  So it's harder to scale with this approach.  Yeah.  So like what I was trying to get at is that like in live view, you do have state.
[02:14:00] State lives on the server.
[02:14:02] Client doesn't have access to that state.
[02:14:05] Thank you.
[02:14:05] So...
[02:14:06] It's...
[02:14:09] Like it's awkward, right? When, when live views acting in the client from a client first perspective, it doesn't have its,
[02:14:17] Same...
[02:14:18] declarative nature in the same way that when a server framework is acting
[02:14:23] or client framework is acting on the server, it doesn't have its own state, right?  We don't serialize the whole state of the app every time we do a request.
[02:14:31] We, um,
[02:14:33] we just,  you know,
[02:14:34] send what the server should do and then be like,
[02:14:38] Server, you know, tell us what's up. And usually it leads to like revalidation over fetching. We want to make sure like
[02:14:46] Okay, server could have been impacted from different users, different things.  Let's just make sure we have the most up to date data for this whole category of things, because
[02:14:57] you know,
[02:14:57] Both sides basically lose their declarativeness when they cross the wire.
[02:15:07] I don't think any approach has perfectly shared the declaredness on both sides.
[02:15:12] only put them next to each other.
[02:15:14] Like RSCs for example can work well when each side stays in their own lane. But how often is that actual case? What I mean by that is if you fetch data in your server components, your actions or mutations should also re-render the page.
[02:15:26] Like they should trigger the server components.
[02:15:28] It's very difficult to start data from a server component, feed it in,
[02:15:32] get it into like the TANSTAC query and then have the mutations work on that data because
[02:15:38] like,
[02:15:39] that data could be being used in server portions that won't update with TAN stack, right?
[02:15:46] And
[02:15:49] At that point, every one of those points will eventually want to be client components.
[02:15:52] And then similarly, if you're fetching inside
[02:15:55] the you keep everything tan stack inside your client components, right?  Then server doesn't have access to it.  Like basically you have two very separate worlds sitting next to each other  instead of being able to really seamlessly, um,
[02:16:06] have the same model. And I think it makes sense. I think it's very difficult  about source of truth. Is it the server? Is it the client?
[02:16:13] You don't get to say it's both usually. Usually you have to pick one if it's in your realm of like decision making. And RSCs is like, one side will say the server is, one side will say the client is. Don't fight. Right? Which is one of the, I think part of the reason why it's kind of hard for people thinking of how they come from a client side perspective and get here.
[02:16:37] But...
[02:16:39] Thank you.
[02:16:40] I don't know. There might be solutions like abstracting the whole communication out from both sides.
[02:16:47] But just today, it is interesting to see...
[02:16:52] how hard it is to go to the other option.  Because what was really cool about his demo is,  when the updates came in,
[02:17:01] They were...
[02:17:02] granular, like he didn't have to fetch all the data.  He knew that they could just send that specific thing that changed.
[02:17:09] So this is a DX problem more than it is a...
[02:17:14] UX problem.
[02:17:16] It's also like, and in the sense it's like,  I don't believe the solution would scale as well as a client-side framework,  but that's literally what,
[02:17:22] a client-side framework's bread and butter is. And on the
[02:17:26] positive
[02:17:27] He gets to send these slices.  The serialization format of the actual communicated updates when stuff actually settles is going to be way better than anything we can do client-side.
[02:17:38] I mean, there's a real cost here. You need a persistent backend, which is not
[02:17:44] like a freebie the whole computer like the whole web has moved away from  persistence or at least separated stuff like even before serverless um
[02:17:53] we were already doing microservices where we'd, you know,  auto scale up a bunch of servers, scale them down,
[02:18:00] That's not something as...
[02:18:02] easy to do when you have persistent state, persistent connections. There's a real
[02:18:09] thing why this isn't practical for everyone but i have to admit when you have that ability
[02:18:14] you know, they're
[02:18:15] Um,
[02:18:16] this is a great simplification for incredibly like a lot of cases.
[02:18:35] So it's less often than the server and client have to fight over DOM state if the server sends a small dip. So yeah.  The problem is, depending on the server to do that work,
[02:18:46] every time
[02:18:48] seems like a lot.
[02:18:51] like,
[02:18:52] I understand the web sockets, but like...
[02:18:55] *sigh*
[02:18:57] - Thank you.
[02:19:00] You're going to have a hard, like, while I agree that the communication format is incredibly powerful and stuff.
[02:19:07] Which makes sense, you know, especially when you're doing large changes.
[02:19:10] something that renders in the client is going to be
[02:19:14] snappier in the client. I don't like
[02:19:17] It just is like there's no avoiding
[02:19:20] that, right?
[02:19:24] But
[02:19:27] Like it, like I really liked this because like I could see the solution forming on this side and I was like,
[02:19:34] Like...
[02:19:36] This goes beyond what I've seen most server side.  Like he's acknowledging that there's a gap here and coming up with something
[02:19:45] in a very difficult space on the other side.  So this is a, you know, a...
[02:19:49] decent, like pretty decent step forward from the side.  You know, for the longest time, client-side frameworks could be just like,
[02:19:56] Yeah, um...
[02:19:57] This...
[02:19:58] extends that functionality considerably. So I thought this was really cool. Um,
[02:20:04] Yeah, because these topics actually kind of run into each other, which I kind of like.  He wasn't done, though.  He wrote a whole article...
[02:20:14] about
[02:20:17] remixes concurrent submissions and saying they're fundamentally flawed. And
[02:20:25] It's an interesting read for those who haven't. I'm actually going to share this. This is probably even more interesting than some of the videos.
[02:20:32] I knew this was coming out.
[02:20:34] And
[02:20:35] Mm-hmm.
[02:20:37] It has...
[02:20:40] a lot of interesting talks about like timelines.  He's saying that,  yes,  in the case when everything runs in the order you submit it from the client,
[02:20:48] You know, things are good.  But it gets more interesting when...
[02:20:52] Things.
[02:20:53] process i mean even this is still fine but when things start processing here where
[02:20:58] Like there's different spacings and different gaps.
[02:21:01] Uh...
[02:21:03] the truth of the matter is like,
[02:21:09] In here, you can end up with the wrong states, potentially.  The truth of the matter is I think a lot of frameworks
[02:21:14] client side actually work more like this.
[02:21:15] I'm not saying they don't do the revalidate call,  I only do it in the last one,  but they have a race condition thing,  like transitions built in,  that means that the,
[02:21:25] Even though they do the revalidation calls in the middle, depending on what state you're in, you determine whether they show the intermediate state or not.
[02:21:32] Um...
[02:21:34] So from that perspective, it's more like this than this, but this is still problematic.  It's still possible that the check marks happen in a weird order.  Um,
[02:21:48] Right. And he goes on to talk about
[02:21:51] Uh...
[02:21:52] single flight mutations, right? Because they shorten the gap, which means that it's way more likely that
[02:21:59] these things can happen out of order
[02:22:02] because they're closer together.
[02:22:05] which again,
[02:22:09] is true. But again, because of the client side thinking of the, of the transaction, it's more of like a this case,
[02:22:19] than it is like a
[02:22:22] this case.
[02:22:27] And he basically said that the solution to the problem is either do everything serially, which is like what Next.js, I think, was doing originally.  And everyone made fun of them because, like, they're doing the Trelix demo.  And Ryan tried to move...
[02:22:38] multiple cards
[02:22:40] And like, it basically had to wait to do them serially.
[02:22:45] Or...
[02:22:46] He's talking about having stateful servers, right? He's saying that like with, what was he saying here?
[02:22:53] It's on casual. I think there's a number two.
[02:22:56] Phoenix Live View is to keep open connection to client server with WebSockets. This way the events are received and processed in order, which guarantees the database reads all updated, delivered in order, but they can also easily process concurrently when using Elixir if deemed safe to. One potential caveat is, sorry, this is
[02:23:09] WebSockets, can you do long polling? Issue with long polling is back to a separate HTTP request. You need sticky sessions, casual order, therefore
[02:23:17] Well,
[02:23:18] Guess what?
[02:23:19] Something built into the Erlang VM process  lets him keep sticky sessions automatically,  and he has a solution, that's awesome.
[02:23:26] For everyone else,
[02:23:28] It's cool.
[02:23:32] actually suggested something, which is funny because I read it and didn't really get what he said.  And then I was like, how do I solve this problem?  And then I started solving it.  And I'm like, wait, this is what Dave said earlier.  Um...
[02:23:42] He's basically describing RepliCache, which is the idea of basically...
[02:23:48] using the database as a mechanism of keeping
[02:23:53] concurrency in the client.
[02:23:55] This does feel like the only...
[02:23:57] Solution?
[02:23:59] If this is something to care about.  And I've seen systems look at that.  But...
[02:24:05] I think...
[02:24:07] While this is a great academic paper,
[02:24:10] As usual, we have to step back and stick it into...
[02:24:13] concept.
[02:24:14] into context.
[02:24:17] Right.
[02:24:19] and
[02:24:21] Thank you.
[02:24:22] I actually am not sure anything in this article actually matters.
[02:24:27] I mean it matters
[02:24:29] Mm-hmm.
[02:24:30] It matters, but let me, let me, let me, let me go here.
[02:24:36] Like...
[02:24:37] I
[02:24:38] Even before considering Optimal UI, the second you keep state in the client,
[02:24:44] there is more than one and there's more than one user. There's potential for tearing. It's fundamental. Okay. So,
[02:24:50] We always have this problem from a client perspective.
[02:24:53] Right. If you don't like, I, I, he's saying that the premise here is that optimistic updates, like if you're the single soul actor, you should always see stuff consistent with your own UI. And I think from a user experience of
[02:25:05] perspective this
[02:25:07] is important.
[02:25:09] But what's interesting is
[02:25:14] We can have weird stuff happen.  Like, even if you forget about the weird timings of the save of the...
[02:25:20] of the one user doing three really quick things and having it getting all a sync.  They could be doing everything perfectly and still have stuff jump in because the server
[02:25:30] happens to someone like added or deleted something they're working on the server in the middle of them doing this operation.
[02:25:36] It can completely happen even when everything's done perfectly in order without weird
[02:25:42] processing issues simply because it's the nature of things. Like,
[02:25:47] And...
[02:25:49] because client frameworks can't make assumptions  about what database you use,
[02:25:55] Even statefulness assumes
[02:25:57] too much, you can't assume that they have a persistent connection or they can have sticky sessions.
[02:26:02] They're probably never going to actually solve this.  It's funny.  Actually, I wrote this dev when he's like, you know,
[02:26:07] With unstorage and KV,
[02:26:10] we could just build this straight into solid start actions and it would just  work this way and work perfectly.  And I'm like,
[02:26:14] - Thank you.
[02:26:16] Then you're telling everyone that they need a KV store.  I mean, to be fair, I think next, maybe that ship's sailed.  Next.js is already kind of forcing everyone along that direction.
[02:26:23] those lines, but like
[02:26:26] Okay. You know, like maybe build something.
[02:26:32] Like...
[02:26:34] Yeah, I mean...
[02:26:36] I'm not sure.
[02:26:37] I don't know.  It's not that it doesn't matter.  It does matter. It's just like
[02:26:43] Let me explain what I'm getting there, what I mean by it.  It's like...
[02:26:48] Thank you.
[02:26:53] But my experience has been that while this sort of edge case is more common than I'd like to see, the vast majority of the time it is caused by bugs in correct code rather than weird timing issues. They happen, but they've always happened and yet we still have client apps.
[02:27:05] The reason is...
[02:27:08] It's not that, sorry, it's not that the article doesn't matter, that this whole thing was like one of the best bait and switches I've ever seen.
[02:27:16] The bugs on ChatGPT
[02:27:19] have nothing to do with this.
[02:27:24] I'm almost one thing he reproduced them too consistently.  Like every time he clicked on it or did the thing, it broke.
[02:27:32] And
[02:27:35] like
[02:27:36] I did go over this, I think, a bit on last stream.
[02:27:40] like we would talk about,  we're like,  is it,
[02:27:42] Like, are the bugs the framework's fault? Maybe we should take responsibility on it, but it's not...
[02:27:48] this distributed stuff that's actually causing the bugs.
[02:27:51] Like it wouldn't happen so consistently.  It would happen those odd times.  It's because my guess here is,
[02:27:59] Most end users
[02:28:00] would not be able to tell the difference
[02:28:03] between
[02:28:05] This sort of tearing caused from multiple users
[02:28:08] messing with stuff at the same time.
[02:28:10] and the kind of tearing that's caused from these optimistic updates
[02:28:15] getting in the race conditions.  Now, don't get me wrong, when the optimistic updates
[02:28:20] Thank you.
[02:28:21] have code in bugs.
[02:28:23] and can be produced
[02:28:24] consistently
[02:28:27] then yes, you definitely notice and you go, this is weird, this is broken. But if it comes down to
[02:28:33] the situation where it's being caused because of these weird race conditions.
[02:28:39] I imagine
[02:28:40] that the average end user would not be able to tell the difference between the rare time that happens and the rare time that it's caused from just general tearing. Which means that like, I don't think
[02:28:52] Most people will even
[02:28:54] like this even registers in most people's books as a thing.
[02:29:01] you have to up
[02:29:02] Like with optimistic updates, it's way more likely that something like this could happen, right?  You're actually encouraging patterns in which people are interacting with the UI in a more fluid way, where they're sending more requests and doing stuff.
[02:29:15] you know, more rapidly, not waiting to press the save button.
[02:29:18] But it has to be quick enough to happen.
[02:29:23] And it has to happen in a way that like,
[02:29:25] Thank you.
[02:29:27] the back end
[02:29:29] also ends up
[02:29:31] handling stuff in these out of order kind of situations.
[02:29:40] Right, right. Shopping cart buy button or off point. I'm saying this happens all the time, even without considering this, uh, better example than a shopping cart. Shopping carts only to you.
[02:29:50] Um,
[02:29:51] auction site like eBay.
[02:29:53] Right?
[02:29:54] and pricing and bidding.
[02:29:57] Right.
[02:29:58] Thank you.
[02:30:00] you
[02:30:01] Thank you.
[02:30:04] Right? Like...
[02:30:05] Like...
[02:30:07] There's always...
[02:30:10] some amount of this kind of bug to turn the distributed nature.
[02:30:20] Like...
[02:30:21] I...
[02:30:23] I, yeah, I mean, if someone wants to put the safeguards in place, I think it is a...
[02:30:29] And if I'm dealing in commerce, I think it's a thing that I would really strongly, strongly consider.
[02:30:39] Yeah, I if you don't have a server with a
[02:30:43] permanence connection
[02:30:45] telling every client what the state is and being able to be that single source of truth. This will happen in every framework to a certain degree.
[02:30:53] Like his article isn't in any way...
[02:30:57] Like, I don't think it's incorrect.  I mean, Ryan's making it sound like there's some technical detail he's missing.  I'm interested to see this.
[02:31:09] I mean...
[02:31:10] we can always reduce the impact of these things, right? That's what we tend to do.
[02:31:22] But like, what I'm trying to get at is, you watch that ChatGPT video and you watch all the stuff that's going on. And I even said it before he wrote this article.
[02:31:31] It...
[02:31:31] it had nothing to do with these timing bugs. It has everything to do with that it's
[02:31:36] Maybe too difficult to write optimistic state.  I mean, let's use solid start as an example. Solid start.
[02:31:42] Let's go to...
[02:31:45] No.
[02:31:46] Thank you.
[02:31:46] This is our article, or no, get started. I'm going to go to the GitHub.
[02:31:50] and
[02:31:51] I'm going to look at the...
[02:31:54] one of our examples, I'm going to look at the
[02:31:57] To do NBC example, I'm just gonna pull it up for a minute.  We did this last stream.
[02:32:02] But sometimes optimistic updates
[02:32:05] are
[02:32:06] difficult to write because
[02:32:09] Figuring out the remaining count is both understanding the current count of the to-dos,
[02:32:13] This is an easy one, adding the existing related to-dos, filtering out the ones that are completed,
[02:32:18] and the ones that are pending to be removed.
[02:32:21] Like any of these calculations that you end up doing, if you just get the, some of these states wrong or you miss some of them, like,
[02:32:29] Even a to-do app shows like incredible amount of like calculations to,
[02:32:34] figure out just
[02:32:36] like what the right count is or making sure thing.  I actually released this demo and ended up fixing it multiple times before I  was like, like actually was like, Oh crap, I missed this. Or I missed this.  Like, like it's really easy to, uh,
[02:32:48] put some of the impact of optimistic updates in and miss some of the others.  I was saying earlier that having the state feedback in is a blessing and
[02:32:56] And it is because you get to write the logic in such a way that you understand that
[02:33:01] Like,
[02:33:02] these same updates like toggling all tie into
[02:33:05] multiple, it's not on that one, but like tying to multiple different calculations to update different parts of the UI.  I think this is much better than basically like, you know, imperatively going, you hide this, you do this, you do this, you do this.  But you can still screw up this logic. The thing is, once you write the logic, it's quite beautiful.  You can understand how all the drive state connects to each other, understands the impact of the updates, and it actually reads.
[02:33:35] this.
[02:33:37] Okay.
[02:33:41] Yeah.
[02:33:44] At least removing stuff from lists if you're pageant and you can remove multilights in parallel. Yeah, I mean  deletion sometimes
[02:33:52] from an optimistic standpoint, is the one that might be the least likely to get you in trouble because
[02:33:59] Oh, I guess with Jose's example, you can still have the server return the results with the stuff
[02:34:07] already...
[02:34:09] like not deleted yet and have cleared the deleted
[02:34:13] um, state.
[02:34:16] Yeah, I...
[02:34:27] So like but yeah, what I'm getting at is the bugs in chat GPT are of this nature like missing a condition  I'm almost like a hundred percent positive  because
[02:34:38] Like,
[02:34:39] If you look at the...
[02:34:42] Sorry, I was on a private... but if you look at... sorry, where were we? If you look at like, like the way... just watch the original video, like, these are...
[02:34:53] These are things that happen like every time. Either they weren't optimistic or they were partially optimistic or whatever. They were bugs.
[02:35:06] Yes, yes. You're saying that these are fully integrated. So adding KB. Yeah, that's what I meant by the client frameworks thing. The client frameworks just don't have the option to make those kind of assumptions for you. They can't say that this is your solution. I mean, next is starting to, but then, you know, now we only come out of the box for Vercel, you know, the first few weeks until others catch up. I mean,
[02:35:29] there's two solutions to that problem.
[02:35:32] Work with all your partners to make sure they can support all your features at release time.  But I mean, maybe that's counterintuitive for a business that uses Next as a funnel.
[02:35:41] Um,
[02:35:42] Or just be like, we are...
[02:35:44] the Vercel framework and own it, you know, like, I don't know.
[02:35:51] Like it's natural that you are going to
[02:35:55] If you want to have capabilities like this, use infrastructure pieces you can take for granted like you can in Phoenix or Live View.
[02:36:03] or rails or whatever.
[02:36:07] So yeah, I mean, we'll see what Ryan Florence and Jose have to say about this. I think it's...
[02:36:13] it's real.  I've implemented systems before  where I've had to...
[02:36:21] Check order and it's a it's a difficult problem. I'm just saying it's also kind of completely out of the scope of client
[02:36:28] frameworks. Like in a sense, having a client framework doesn't stop you from, you know, having a back end with sessions.
[02:36:35] His gripe should be more with
[02:36:37] in a sense serverless than it is say with remix.
[02:36:41] Like,
[02:36:42] The problem is with
[02:36:44] the way we approach infrastructure less than the specific client side tool because it's really outside of their responsibility.
[02:36:56] Thank you.
[02:37:03] Thank you.
[02:37:03] Anyway, I thought it was an interesting conversation regardless.  And it really ties into this.  I wanted to show off this demo because we remade...
[02:37:15] the Trellix demo ourselves and it's all start. Unfortunately,
[02:37:21] or fortunately depending on how you look at it i guess um
[02:37:26] uh,  um,
[02:37:29] Let me just...
[02:37:31] put my secret credentials in, not that it really matters.
[02:37:34] Um,
[02:37:38] Thank you.
[02:37:40] We did not get the Ryan Florence review. I think we were several months too late.
[02:37:45] And if you want to understand why we were several months too late,
[02:37:48] It's a combination of things.
[02:37:51] Um...
[02:37:53] I
[02:37:56] Thank you.
[02:37:57] Right at the time when the demo was originally...
[02:38:01] being made.
[02:38:03] And we had solid start and we people, a bunch of people around our community were like, let's build this thing.
[02:38:10] We were positive we could do better than the remix demo.  Of course, like that's...
[02:38:14] That's what we do around here, right?  We make really cool demos.
[02:38:21] And...
[02:38:22] A couple of different groups started. There's the DX team, people like Attila and Daniel working together.
[02:38:29] So they started doing a thing, but completely separately, Benton...
[02:38:34] was like, I'm going to build this in solid. And I was like,
[02:38:36] reached out and I was like, yeah, that's really cool.  And they had some like
[02:38:41] challenges at first, but actually came up with a solution
[02:38:44] that I helped debug a little bit, but was basically what I would have come up with  compared to what the others are doing, which was much more like React.
[02:38:52] Um,
[02:38:53] Because when I see a demo like this,
[02:38:56] I immediately think, what is special about SolidSolution that can make this
[02:39:03] you know,
[02:39:04] really powerful. And we talked about this demo actually indirectly on stream for several of the last
[02:39:11] months because
[02:39:13] I realized through this demo, looking at Benton's code, how...
[02:39:18] much work it was to make it even more optimal and solid today.
[02:39:22] What ended up happening was...
[02:39:25] Um,
[02:39:26] Uh...
[02:39:27] if
[02:39:28] Um,
[02:39:29] What ended up happening was that
[02:39:33] - Yeah.
[02:39:34] We managed to get both the groups together, right?  So Benton joined up with Attila and Daniel and Brenly, and they started their effort.  And at a certain point, I don't know if Spire or the Stream, Dev also joined in and actually re-implemented solid 2.0 features back into this demo to make it...
[02:39:58] as optimal as I would hope it would be. And by the time this all happened, it was just months later, because when I looked at the original demo, I'm like, we could publish this, but if anyone looked at the code,
[02:40:12] they might turn their nose up at it a little bit or something. I don't know. I care about what the authoring experience is and what it feels like to look at the code. And it wasn't
[02:40:20] up to where I wanted it to be.
[02:40:24] So we kind of delayed it. So at this point, I don't even know if Ryan Florence is
[02:40:27] ever, um, going to look at it. It's perfectly fine if he doesn't, we've talked about this demo  enough and honestly he might have to change his scale. I don't know if he'd have to add an S tier  maybe, but like, um,
[02:40:42] this demo goes well beyond what is even possible in React.
[02:40:46] So it seems like a good topic to talk about for a few minutes here.
[02:40:51] because while the authoring isn't quite...
[02:40:56] what it's going to be in 2.0, this kind of example is going to basically be super trivial to do with the future reactive system we're working on, which makes you really, really, really happy.
[02:41:09] Um...
[02:41:11] The first piece obviously is
[02:41:13] which is related to the last topic we were talking about.
[02:41:16] were those single flight mutations, you know what I mean? Like,
[02:41:21] If we go in the network tab
[02:41:25] If I go into a board,
[02:41:28] This board has a lot more cards on it than it used to.
[02:41:32] This over.
[02:41:35] you can only see one request.
[02:41:37] And you're like, okay, well, I mean, it's not too crazy to think that you could
[02:41:41] you know, do a mutation and send back the response, you know, the update in one go. The part that's crazy about this or crazier about this, let me see if I can pull up the GitHub is
[02:41:53] is what the authoring is like to do this.  We've talked about data fetching with Solid Start previously before, but
[02:42:01] Sorry, what am I doing? I'm not going to solid start. I'm going into... let's just globally search for it.
[02:42:08] I guess I have to code locally too, don't I?
[02:42:13] Yeah, why am I going to GitHub? I have the code locally.
[02:42:19] Thank you.
[02:42:20] Thank you.
[02:42:21] It's that
[02:42:24] Thank you.
[02:42:25] Yeah, let's full screen this one. It's that like...
[02:42:29] .
[02:42:31] Let's go to the routes.
[02:42:33] Go to the board, okay.
[02:42:36] Lovely. I love when like TypeScript gets behind. It's probably,  you know what it is? It's probably cause I haven't installed it.
[02:42:43] This is my problem. I'm still on the new computer, right?
[02:42:47] Let's get this going.
[02:42:48] Yeah, I haven't installed anything.
[02:42:50] But what I'm getting at is,
[02:42:54] What's cool about this approach is
[02:42:56] is that it uses the familiar can stack or remix style thing where,  okay, we're defining an action here,  but let's forget about the action for a second.  Fetch board, right?  This is our server function.  If I go over to, I think it's...
[02:43:12] the lib here.
[02:43:14] So
[02:43:14] index and find myself fetch
[02:43:18] board, you're going to see a server function set up with a cache, right?  So this is going to have like a cache key, get board data, sure, whatever. And then
[02:43:27] Somewhere else we're going to perform an action on that board. Um,
[02:43:32] I don't.
[02:43:33] I guess I should see where the actions are coming from.
[02:43:37] No, this looks like auth stuff.
[02:43:41] Let's see where the actions come from, from the board there.
[02:43:44] Do do do do do do.
[02:43:48] Create store, use submission. Yeah, create note. Where is this coming from?
[02:43:55] Thank you.
[02:43:55] Note. Okay, I guess put the actions in here.
[02:43:58] Doesn't matter. What I'm getting at is
[02:44:00] you'll see something like this, like an action.
[02:44:03] And then
[02:44:04] that action
[02:44:05] will know that it imports fetch board and says revalidate
[02:44:10] The board, basically, like the thing with that key.
[02:44:12] So,
[02:44:14] You could also put a string in here or whatever, but essentially you can get from the cache function.
[02:44:18] just grab the key or the key for a specific set of arguments,  um,  for a specific ID or something.  And you can just tell it to revalidate,  um,  that.  So when you're writing your server function APIs,  you know,
[02:44:31] Essentially, you can basically just connect the keys, so to speak, and make all your logic.
[02:44:40] I, you know,
[02:44:41] Whatever this is, create a note.
[02:44:43] I know that we have to do revalidation on the board.  And you can wire this together, you know, and essentially when you get to the board itself, you just get
[02:44:55] you know,
[02:44:56] This ability to fetch the board, you know, preloaded if you want, but fetch the board here.
[02:45:02] in our create async and then in the board component here
[02:45:05] take our actions,
[02:45:07] and actually...
[02:45:09] Um...
[02:45:11] use them.
[02:45:14] both grabbing the submissions for the optimistic updates
[02:45:17] And
[02:45:18] I don't
[02:45:20] No worry.
[02:45:25] do do do do do
[02:45:27] Dude
[02:45:28] -
[02:45:30] I'm trying to see where...  Because I actually haven't...
[02:45:33] Like in the column? It's probably in here.
[02:45:37] Rename column. Oh, is it actually in the node itself? Yeah, yeah, it's down here. You can actually, you know, let's, let's up, what's going, restart.
[02:45:49] Type, do I?
[02:45:54] So the red squigglies did start bugging me after a while.
[02:45:59] What I'm getting at is,
[02:46:00] How are they doing the actions here? I haven't even looked. Let's look at them. Are we using the actions directly in forums or we're calling them?
[02:46:09] Update action. Okay. So we're just,
[02:46:12] Calling in our note, we're actually...
[02:46:15] essentially importing our same action functions
[02:46:19] doing them on specific actions and then
[02:46:22] in the board, like the top of the thing that renders the board above it, we're actually taking the same reference to the actions and feeding them back in through optimistic updates with these submissions are so you can already see this kind of
[02:46:37] using the import reference.
[02:46:39] as basically almost like a key, were essentially
[02:46:42] isolating
[02:46:44] or sorry, we're like, yeah, isolating the actions from the optimistic updates.  They're in different components.  And you can see you can just set all the logic to kind of wire itself together.
[02:46:54] Um,
[02:46:54] and then feed these optimistic updates back in.
[02:46:59] And
[02:47:01] Okay, like...
[02:47:03] What I'm trying to get at here is this is a very typical like...
[02:47:09] You can see it in these actions.  It's a very typical...
[02:47:14] Do the mutation, revalidate the key.
[02:47:18] kind of tan stack thing. So this is set up
[02:47:22] without
[02:47:23] telling it to return specific
[02:47:26] Data...
[02:47:27] You know, without telling it to like go, you know, when you do delete or do, when you do an ad, add, send back just the thing you add and no client side logic about how to insert it into a cache going, okay, you added on the server now add this, or this one's been deleted.  Now you delete it.  None.
[02:47:43] of that logic is written. You just
[02:47:46] you just do revalidate like you do with Tanstack or Remix.
[02:47:52] But it's happening in a single flight because
[02:47:55] what we're doing here
[02:47:58] is
[02:47:59] When the server action completes,
[02:48:01] Because of our serialization, which I covered last time,
[02:48:06] we have this ability, right?
[02:48:08] to, um,
[02:48:10] send back
[02:48:12] the...
[02:48:13] the the board data and it's because when we revalid it we immediately send back start sending  back the uh response but we basically grab the promises of the data and we stream it we actually  start essentially start rendering the next page we go oh we're reloading the data on this page  or reloading the you know with and the key we just run all the preload functions on the server  instead of running them on the client
[02:48:39] for the road.
[02:48:41] and then essentially collect all the promises that match the key that's getting updated.
[02:48:46] then
[02:48:47] send those promises along and we don't have to wait.
[02:48:52] for that data to come, again, not blocking.
[02:48:55] to basically get the client
[02:48:58] the knowledge that, hey, stuff's happening.
[02:49:01] And that way we don't have to, we start fetching when we're on the server at that point, and we don't have to wait for the client to come back and do the jump. I've explained this on stream multiple times before. I just wanted to show it in yet another example. Um,
[02:49:15] So, you know,
[02:49:17] This is...
[02:49:18] This is all cool.  If I turn...
[02:49:21] this down to, where is it?  Can we throttle...
[02:49:26] Um...
[02:49:29] Why am I not seeing it here? No throttling. If we make this slow 3G
[02:49:33] what we should be able to see is that
[02:49:36] if I can move these fast enough, there's going to be multiple in flight at the same time.  Now, don't let this fool you.  They'll come in in different orders and they look like they come in sequential.  When the actual client will apply the server results,  if there's multiple in flight, it'll actually wait for them to consolidate.
[02:49:54] because they wrapped in a transaction.  It's not the time that they show in the network tab necessarily,  but it doesn't matter because the optimistic updates are already ahead of it.  So when these actually reconcile on the client is,  doesn't really matter for the end user because these things have already run
[02:50:11] moved, you know,
[02:50:13] you know, from their perspective.
[02:50:19] Thank you.
[02:50:19] Oh, hey, Daniel. Thanks for stopping by. Yeah, no, good luck with the talk.
[02:50:27] Okay.
[02:50:28] So like...
[02:50:30] Thank you.
[02:50:31] Thank you.
[02:50:32] Okay, optimistic updates.
[02:50:34] Pretty cool.
[02:50:36] And as I said, I've
[02:50:38] I've covered this bit.  Um...
[02:50:42] Thank you.
[02:50:43] in that video that I did. But what I wanted to take a little bit more time looking at here is
[02:50:49] is how this actually...
[02:50:52] mechanically handles the mutation.  Because as I said, the LiveView example that was really cool  because it actually sent only the diff data.  And if you look at, this is not what we're doing.  We're actually sending the whole freaking board on each of these
[02:51:08] updates.
[02:51:09] It's like Remix. We don't have to send all the data for the page, but if the board is one data set, one key, like TanStack, every time we are ready to
[02:51:21] you know,
[02:51:22] say, hey, revalidate, we're going to grab the whole freaking board.
[02:51:26] So...
[02:51:28] Yeah, there's more bandwidth here. This is not as optimal, even though this halves the latency
[02:51:35] This hasn't got us to live view per se, you know, in terms of optimal communication, you
[02:51:41] patterns, right? Like, um,
[02:51:43] This is just remix or tan stack done in one request instead of two requests.
[02:51:50] I'm going to go ahead and get a little bit.
[02:51:51] So yeah, there is bandwidth consideration, but
[02:51:54] The client side part of this, I mean, here's the thing.
[02:51:59] You're using those tools anyways.  You're doing these kinds of things.  Like, we got here...
[02:52:03] for a reason. The fact that we are
[02:52:07] fairly okay with revalidating based on key comes from a lot of reasons,  right?  It comes because like,  like,
[02:52:15] Server changes, right? And we want to make sure that we don't have tearing we have to trust that, you know at a certain point we should update the even though we own the state in the client, we should update our data, we can't just get too far apart, you know, if we only pass back the incremental changes.
[02:52:30] when the client's the truth,
[02:52:32] Thank you.
[02:52:33] Well, we could get in a very different state.
[02:52:36] than the actual reality of the database.  Because we know that we added one card,
[02:52:42] The server knows that someone else deleted two other cards.
[02:52:46] But that was never communicated to us.  And then maybe, you know, we'd delete that card that they deleted.  Like...
[02:52:55] It's not hard to picture a scenario where if the client never synchronizes
[02:53:01] Um,
[02:53:02] And that requires fetching data that we don't know has changed.
[02:53:06] um,  that would get out of state,  uh,  which is largely why most client frameworks with a lot of revalidation and whatnot,  they don't want to fetch the whole world,  but within the scope of the work that they're doing,  they're okay.  Fetching,  you know,  a specific key or a specific thing on the area that they're working on.  I mean,  it's,  it's,
[02:53:22] Back in the day you do a full page reload. So is it like this is a win from there?  I think that was remixes like logic behind this and I
[02:53:30] we get even more granular with specific keys.
[02:53:36] Thank you.
[02:53:37] Is everyone still alive out there?  Sorry, you guys have been really quiet in the chat the last like 10, 15, just...
[02:53:42] Just making sure everyone's still out there.
[02:53:48] Have I gone too off the deep end here? You guys seen enough of this demo?
[02:53:56] Oh, you did die.
[02:53:59] *sniff*
[02:54:01] Dead inside.
[02:54:06] Well, yeah, and it's not our business.
[02:54:09] Thank you.
[02:54:10] It's the best way to do it. But I do care about it, which is why a lot of the same primitives that I've been designing in Solid 2.0 that are going to enable the next thing that I'm showing...
[02:54:23] are going to make it so that if the database will give us the right information, we'll be able to do even better things with it.
[02:54:33] Right?
[02:54:41] I don't get mechanically adjective.  I use that when I'm talking about things that we do specifically...
[02:54:48] Um...
[02:54:49] for like
[02:54:53] how they work, but not how
[02:54:56] they've
[02:54:58] Yeah, I don't know how they...
[02:55:00] look or how
[02:55:03] Thank you.
[02:55:03] Thank you.
[02:55:04] like their philosophy or reason for being,  just like purely looking at like,
[02:55:10] The nuts and bolts.
[02:55:13] Um...
[02:55:16] So, uh...
[02:55:18] What I want to show about this board, it uses a really interesting approach.
[02:55:23] in that
[02:55:24] We already saw the optimistic stuff getting pushed back in, but what does it do with that?
[02:55:28] Well, this is not unlike Remix.
[02:55:30] You get all your optimistic updates. I don't know what they call it, but similar to this. And then
[02:55:36] Um...
[02:55:38] .
[02:55:39] You but you do it we use a single function and we actually grab a
[02:55:44] all of these as these you know mutations come in we
[02:55:48] basically append them to a list because you have to understand the mutations have to apply in order.
[02:55:54] If you apply mutations
[02:55:56] out of order, like...
[02:55:58] reordering
[02:56:00] like moving stuff on the list.  You can see how it could get weird.  Because, like, if you move...
[02:56:05] this above this, second to zero, and second to zero again, and then one, zero to five,
[02:56:12] Did that actually, what's going on here?
[02:56:14] Sometimes, sometimes I miss this.  My biggest problem with this demo is sometimes  I miss the drag zone.  Yeah, I did it again.
[02:56:20] Why do I always miss the drag zone?
[02:56:22] Um,
[02:56:23] Thank you.
[02:56:24] You can tell because not even a request goes out.
[02:56:29] If you do those and then try and apply them out of order,
[02:56:33] stuff is going to get weird because the thing that was in zero isn't the thing that was like there's a whole sequence of events.  So essentially the mutations have timestamps and they have to be ordered.
[02:56:43] Right? So you collect them.
[02:56:48] Thank you.
[02:56:50] So
[02:56:52] collect them, these mutations, and then
[02:56:56] essentially you use them to create the board, right?  So if this was React, you'd collect all those mutations.  Now, anytime the board updated from the server,
[02:57:06] or a new mutation was added,
[02:57:09] You would...
[02:57:11] Take the board, clone it,
[02:57:13] go through the list of the mutations,
[02:57:16] and make that the current state. You have the, you basically, you have the base state, which the board,
[02:57:22] and you have the mutations,
[02:57:23] create the new state, render it,  React will do the diff during its patching,  and you'll see the changes apply.  And if you add one more mutation,
[02:57:34] Again,
[02:57:35] Thank you.
[02:57:37] you know,
[02:57:38] You're re-rendering the component, so you're going to take the board,
[02:57:41] Because it's derived.
[02:57:43] get all the mutations,
[02:57:46] clone the board, apply them all again,
[02:57:49] Pass them in.
[02:57:50] render them to JSX
[02:57:53] Diff them, do it again.
[02:57:54] So, and now the board comes back, same thing.
[02:57:58] Clone the board.
[02:58:00] Make sure that...
[02:58:02] any existing
[02:58:04] mutations that haven't been processed yet make them
[02:58:08] apply to the board,
[02:58:09] Render the JSX, dip the board.
[02:58:12] You just do this
[02:58:14] over and over and over again.
[02:58:17] Every process, every time you move a card, change a name, do this, you recreate
[02:58:22] The b- clone the board.
[02:58:24] Yeah.
[02:58:25] apply all the mutations
[02:58:28] render the whole thing in JSX, diff the whole thing again.
[02:58:32] So...
[02:58:34] What?
[02:58:35] We talked a little bit about this on stream, but it's like...  Our first approach to this was actually very similar to React, which was essentially...
[02:58:43] What if we just, you know...
[02:58:48] You know, every time listen to the board.
[02:58:51] apply the mutations, do this.  It's actually not unlike this,
[02:58:56] I think the biggest difference with this function is the idea of timestamp, which is something that we haven't...
[02:59:05] which we haven't looked at here, but...
[02:59:10] The general idea would be, again, you know, get the board,
[02:59:14] apply the mutations,
[02:59:15] Diff it.
[02:59:17] But what they did here, which I'm actually not seeing exactly how it's working in the second, I realized that
[02:59:26] and I showed this on stream with one of the things I was working with, with the crate projection.
[02:59:32] If you knew...
[02:59:34] The only time you actually need the diff in this example is when the new board comes from the server.  Because at that point you don't know what state
[02:59:41] things are in, you just have the like fresh data from the server, that big chunk of JSON, you're going to need like, maybe the server added something that wasn't used to users on the site.
[02:59:50] You need to do a diff at that point.
[02:59:52] and maybe your mutations are applied,  that's the only time you need to do the diff.  So what they did is,
[03:00:00] Using the timestamp,
[03:00:01] When the board
[03:00:02] Only when the board itself updates,
[03:00:04] does...
[03:00:05] See how it un-tracks?
[03:00:09] Yeah, see, it untrack, skip mutations.
[03:00:11] So when the mutations update this doesn't run, only when the board updates.
[03:00:17] Right?
[03:00:18] And
[03:00:20] Then on this side, on the effect side, a second effect, this one gets the mutations.  And this one does, see, Reconciled is how solid stores do diffs.  It does a data diff.  And then basically wherever it finds differences, it changes.
[03:00:33] Notifies individual signals. So like if the whole notes you get from the server is identical to the notes you have nothing gets notified and updates if from the server one of the text of the name change, then notes dot, you know, notes zero dot.
[03:00:51] you know, text or whatever, whatever listens to that one thing, that one cell is going to update the text.
[03:00:58] You compare the data, but you don't re-render any of the components or do anything.
[03:01:02] Right? So in a sense, this was already like the basic example is already an improvement over the way React would approach it.
[03:01:09] This idea here of
[03:01:12] untracking the mutations
[03:01:14] so that the mutations update a separate effect that's different
[03:01:18] than the one that does the diffing. You'll see down here the second effect does no diffing.
[03:01:24] It calls produce when it applies to mutations, which means
[03:01:28] And it does this timestamp filter.  Basically...
[03:01:31] It's only each new...
[03:01:33] mutation. As each mutation gets added,
[03:01:36] Thank you.
[03:01:36] And maybe a couple of them get added before this effect runs like quickly or something.  It'd be pretty hard to pull that off.
[03:01:42] It only grabs that one.  It doesn't care about all the other mutations in flight.  It just grabs the latest mutation.
[03:01:47] mutations since the last time this effect ran.
[03:01:51] And once
[03:01:52] It has only that one.
[03:01:54] it will apply it, which means use produce on the store.  It means that when you actually update the thing,  it's actually just updating the one signal.
[03:02:02] So
[03:02:03] What this means is instead of...
[03:02:05] Cloning the board, cloning...
[03:02:08] or applying every mutation, sending it
[03:02:12] It's down to the render, diff the thing, only change what updates.  What this does, it goes, "Okay, get me the mutation, the new one.
[03:02:20] Oh, I see that it updates one text, so update the one signal in the DOM.
[03:02:26] nothing else runs. So the mutation in a sense is as optimal as if you were doing client side.
[03:02:32] Like, this is the optimistic update.  Like, if you wrote this with no optimistic updates, with no...
[03:02:38] Like you were just writing a client app that you didn't care to persist.  If you were going here and you were going to just...
[03:02:44] Do do do do change the name on this card
[03:02:47] Um...
[03:02:49] what would happen is
[03:02:52] You know in solid, you just update the signal for this one thing and this one thing would update and nothing else would re-render, nothing else would run. You just update its pinpoint.
[03:03:00] What's cool is that with this...
[03:03:02] examples, the optimistic part.
[03:03:05] is like client app because it's just like state being fed back in. It's, it's, it's, this is probably the biggest benefit of the remix optimistic approach because it's like,
[03:03:14] These things are just...
[03:03:17] State, we know how to deal with state.
[03:03:21] And...
[03:03:22] The real icing on the cake...
[03:03:24] is that
[03:03:26] Yeah, we send the end optimistic update, which means we immediately update the DOM,
[03:03:30] update that one text thing, and we go to the server and say, hey, this has changed. Now, if the server returns the exact same data that we have, you know, it applies the optimistic update,
[03:03:39] Adds a new name.
[03:03:41] When we go back and let's say that was the only mutation, so it does nothing here, you'll get
[03:03:46] the board, which is a create async.
[03:03:49] We've looked at the fetch port.
[03:03:51] Nope, re-trigger, just get the data.
[03:03:53] And then it'll go, "Okay, let's diff the updated board
[03:03:56] against the board that's there.
[03:03:58] And that board that's there has the optimistic updates, because unlike when you derive stuff like directly and you're like doing this mutation and cloning approach, your projection here of the board.
[03:04:11] Contains the current state of the application you like the trade-off with mutable apis is that you?  Can't get the previous state you have no way of just like starting over. It's hard to reset you actually have to diff to reset  but
[03:04:25] because
[03:04:27] You have.
[03:04:29] the board as it is, you know, like client side, like my state shows that this name has already been updated optimistically when the server comes in and goes, Oh, here's, here's the fresh data again.  And guess what?
[03:04:40] The name
[03:04:41] Thank you.
[03:04:42] is updated.
[03:04:43] It sees the updated name already and goes, "Okay, those are the same. I don't need to do anything."
[03:04:47] Nothing else updates. It literally gets here, goes, okay, here's the latest diff.  Oh, it's exactly the same.
[03:04:53] Done. No rendering.
[03:04:55] In the process of this whole interaction,
[03:04:58] the client signal updated a text node.
[03:05:03] None of your components re-ran.
[03:05:06] And we had full optimistic.
[03:05:09] UI, essentially.  Like, like, the, the...
[03:05:14] I feel like I'm way more excited about this than anyone else.  It just...
[03:05:17] This is going to be easy to write in the future. Instead of doing two effects, you'll be able to just write a single primitive that does this.
[03:05:23] But like...
[03:05:27] essentially...
[03:05:31] from the client side perspective,
[03:05:34] it doesn't get any more optimal than this.
[03:05:37] Thank you.
[03:05:42] And I see a certain parallel of this with the LiveView because the LiveView, they got the save sending the data because they know the state and they know what they diffed on the client.  But LiveView doesn't know the...
[03:05:54] like the state of the optimistic. Yeah, it's really interesting.
[03:05:58] Do you know what I mean? Like...
[03:06:00] *sniff*
[03:06:02] Thank you.
[03:06:05] Yeah, I'm actually a little bit curious how they handle...
[03:06:08] that maybe a little bug Jose because technically their optimistic client side approach, um,
[03:06:15] is independent of the state of the server where like the server comes back with the diff but the optimistic update is still applying via the JS commands.
[03:06:25] And then it goes, okay, I'm going to stop.
[03:06:29] Hmm. Yeah, it's interesting.
[03:06:31] Thank you.
[03:06:37] Thank you.
[03:06:39] I mean...
[03:06:41] How it's not necessary you could just like skip this whole mechanism and literally just
[03:06:46] Um...
[03:06:47] Send
[03:06:48] that stuff. But as I said, over time, you would drift apart. Like if you built, like, it's kind  of crazy when you see this and that's, that's what you think. You're like, okay, now that I've  literally optimized every other part of this, can we just not send the whole payload? And it's like,  that's could have been your starting point.
[03:07:03] You could have just been like, "Okay, I'm not gonna do
[03:07:06] I'm not going to do this.
[03:07:08] I'm not going to...
[03:07:11] Thank you.
[03:07:11] I'm not going to use like a loader action pattern. I'm just going to make an API where I
[03:07:16] you know, when I add something, the client
[03:07:19] You basically have to tell the client how to reapply the changes that you did on the server.  It's like the old GraphQL pagination problem, right?  You basically go, okay, now that I got the data back, now I'm going to repeat the action in the client or...
[03:07:34] It's completely possible to do said thing.  The difference here is that the...
[03:07:39] We managed to add...
[03:07:42] this capability here without changing the DX
[03:07:45] Like it's, it's the revalidate thing. I mean, yes, you could not,  you could choose not to refetch the whole board every time.
[03:07:53] But...
[03:07:54] And funnily enough, you could also...
[03:07:59] choose to save the board at
[03:08:02] certain intervals or whatever, right?
[03:08:05] I was just like, funnily enough,
[03:08:09] I think this is almost where we end up these days in these kind of situations where we're
[03:08:15] we do do this. I mean, it's possible that, like, this might even be just the extreme case for this kind of scenario. Like,
[03:08:24] When I think about the optimistic updates and these features,
[03:08:28] Making a fully sustainable Trellix port is not what I'm usually thinking. I feel like for something like that,
[03:08:35] Um,
[03:08:36] Like especially if it's multi-user, yeah, Websockets do make sense, right? Like if you're multi-party, multi-player. It's just interesting that
[03:08:45] you can basically take this
[03:08:48] paradigm that already exists that people are already doing and just make it that much more optimal.
[03:09:02] Just refresh the page, right?  I mean, when I looked at this demo the first time, I was like...
[03:09:07] Wouldn't it be interesting? Like, I don't know how well it could work, but we did this the easy way because it's like we react when you mix it. But could each column
[03:09:16] Like, there's no rule to say that the whole board has to be the single thing you fetch. Right?
[03:09:23] Like, what if...
[03:09:25] Like it's a little bit trickier from a...
[03:09:28] Yeah. How would you wire it that way? But,
[03:09:31] Could each column be its own key, so to speak, and then you could invalidate
[03:09:38] Like nesting is interesting, right? Because you if you get the board and then you're like,
[03:09:43] Yeah, I don't know. I've thought about this a few times that if it would be quite possible to encode  information about like when I first saw the demo I thought maybe this is what they were doing. Like
[03:09:53] saying like, have actions that are like move between column one and column two.  Like another similar demo could be instead of having one board, having like
[03:10:03] The fact that the columns are dynamic makes this a little bit trickier.
[03:10:08] But if you had a situation where you had three
[03:10:12] fixed columns. It's just easier to talk about.  I don't say they have to be fixed.  You could picture that you could fetch all three columns,
[03:10:19] Um, and then only invalidate a single column and then have drag and drop between the different columns trigger actions that revalidate only the specific columns.  Do you know what I mean?  Like you could be like, okay, when I moved this to here, I have to revalidate this column in this column.
[03:10:34] Right. Like the key based system can go more granular.  It just comes down to like what the logical separation is.
[03:10:42] Like, don't get me wrong. Like if, as I said, if you're getting to something that's like really on the extreme of this,
[03:10:49] um,  it's probably beyond the scope of the specific feature.  Like,
[03:10:55] You know the same way when you look at Remix and you're like, this is really good for crud. Like amazingly good for crud.  And then you're like, okay, I want to do something a little more interactive. Remix can get you there, but at a certain point you're just like,
[03:11:05] maybe not quite the optimized for that zone.  I feel like this,
[03:11:13] This gets you all the way up to...
[03:11:17] like using CanStackTable or something like that's like, or, uh, you know, rest of soul, AG Grid. Like this, this is what gets you
[03:11:27] you know,
[03:11:28] to a certain point where you have to like, you're like, the app is the table. Like this is about, I think this is towards the end of the spectrum of like, doing page level invalidation.
[03:11:43] I
[03:11:47] You have to do this if you... you could, but I mean, you're still fetching the whole table. I mean, it was more like if we could separate the keys.
[03:11:57] Right.
[03:12:01] - -
[03:12:02] Thank you.
[03:12:07] Thank you.
[03:12:08] But yeah, anyway, as I said, this...
[03:12:11] I quite enjoyed realizing that in the end that...  Do you know what?  It might...
[03:12:17] I wonder, I never thought about doing this.  Maybe we should look at, okay, forget about the network.
[03:12:23] I kind of...
[03:12:25] How much?
[03:12:26] I mean, I don't know, but...
[03:12:28] How much...
[03:12:31] performance
[03:12:33] Like, how expensive is it to move a card?
[03:12:37] Did that move?
[03:12:38] I don't
[03:12:41] I don't know. It's just...
[03:12:42] Thank you.
[03:12:43] Thank you.
[03:12:48] Yeah, the problem is I'm not, it's always hard when you're not in it, but then I have to log in again. Not in like an incognito
[03:12:54] thing
[03:12:56] I don't
[03:12:57] Thank you.
[03:13:01] Try this again.
[03:13:08] Bye.
[03:13:11] Like...
[03:13:12] Yeah.
[03:13:13] I...
[03:13:15] I was just kind of curious if we could like see where the work was getting done.  Actually, a better example would be
[03:13:21] maybe renaming the card.  Like if I change this to GGGG,
[03:13:25] Click out.
[03:13:30] Because like so little work has to happen to actually like
[03:13:37] Update.
[03:13:38] And then when it comes back in,
[03:13:41] Thank you.
[03:13:43] Like,
[03:13:45] It doesn't even need to, I mean it's hard when it's minified, get pending, like it doesn't need to run the dom, like it's like
[03:13:52] Yeah.
[03:13:53] Yeah, I can't really show it well. Like,
[03:13:56] I mean, this shows it well. 0.4 milliseconds processing.
[03:14:01] -
[03:14:02] Yeah, I don't know. It's...
[03:14:03] All right.
[03:14:04] Thank you.
[03:14:10] Yeah, it might be fun to compare that to doing this in Remix or React.
[03:14:15] But I don't have that in front of me, so whatever.
[03:14:18] Thank you.
[03:14:22] Alright.
[03:14:24] Thank you.
[03:14:25] Thank you.
[03:14:28] Yeah.
[03:14:29] This is the problem. I feel like sometimes some of the topics that I care about these days, like stuff like this demo,
[03:14:36] and solid 2.0 and even the metadata stuff is almost getting too far away from like
[03:14:43] developers' day-to-day concerns. So, like,
[03:14:47] It's just not as...
[03:14:48] exciting. Like sometimes like when people nerd out on performance. This isn't even performance. This is like the getting
[03:14:55] matching Optimal DX with Optimal UX, but it's getting to a point where people are like, "I don't care. I just build the thing and I hope it works."
[03:15:03] I don't know. I feel like I feel like when like edge streaming was a thing in the first like demos we did people got like really excited about that this is
[03:15:12] in a lot of ways is...
[03:15:16] as cool but I don't think I don't I don't think that uh I don't think quite hits in the same way
[03:15:22] I don't know.
[03:15:22] Anyway.
[03:15:24] Thank you.
[03:15:25] As I said, I don't imagine we'll get a Ryan Florence review, but
[03:15:29] I don't think there's a Trello demo out there
[03:15:33] Like this.
[03:15:34] Thank you.
[03:15:39] Is this your mission? What's my mission?
[03:15:43] The thing is, making good demos...
[03:15:47] I talked about this before that it's hard to find demos that show off features and show off stuff.  Making good demos is still important for us because people need to conceptually understand things.
[03:15:56] what we're offering and that it is unique.
[03:16:01] that
[03:16:03] I mean, that's what all framework authors are after, right?  There's always a way of making...
[03:16:10] better.
[03:16:11] Um...
[03:16:12] UX. You can always  escape out, go vanilla, do whatever you need to do.
[03:16:17] but
[03:16:19] Thank you.
[03:16:22] - Right.
[03:16:22] But like...
[03:16:28] You want it to be, in a way,
[03:16:31] that
[03:16:32] it feels natural, that it feels consistent. It's not...
[03:16:36] Like, that's what I call...  People's idea of what the best DX is differs, right?  So it's hard to say that.  But, like, if you show someone something and they go, like, I can do that...
[03:16:47] and they understand, like,
[03:16:51] Thank you.
[03:16:52] what it's doing.
[03:16:54] how powerful that is, then like, it's a pretty powerful feeling. You feel like you can pick it up and take that anywhere.
[03:17:08] Yeah.
[03:17:12] What did Dev have to say? He did a lot of the heavy lifting for the last version that we were showing off. I mean, everyone chipped in and bug fixed. That's the hardest thing. I told you optimistic APIs sometimes require some bug fixes, especially as you're figuring out patterns. I think
[03:17:27] that is still a place that we need to do a lot better with.  But what do you say?  This demo shows one of my favorite aspects of Solid  that mostly enigmatic and composal code  can also be most performant.  I get React is fast enough,  but it doesn't have high ceiling for performance in UX.  Every abstraction framework library built on top of React  will be held to React's limitations  and have to do a lot more work than they actually need to.  Trying to optimize for performance  will always feel like battling a charging bull.  Meanwhile, Solid makes its premise unimaginably performant.  So regardless of what I do with it,  I always have the highest possible ceiling for my app.  It makes...
[03:17:55] bringing custom abstractions as easy as using native primitives and almost completely eliminates having to think about performance as long as you're writing idiomatic code.
[03:18:03] Yeah, yeah, like...
[03:18:05] That's the goal. The thing is,
[03:18:08] It's a sliding scale.
[03:18:10] everyone has a fast enough you'll find somebody in the discord i'm sure who has like a super fast  thing that they put together and so i'll do that specific thing a little bit slower and you know  we'll be like fast enough like i i can appreciate react taking a fast enough stance it is tricky though
[03:18:29] when you have the largest ecosystem, JavaScript, and that gap
[03:18:33] feels like it's just getting bigger and bigger and bigger, right?
[03:18:36] So...
[03:18:37] you
[03:18:38] Very, very cool, Dev.
[03:18:40] Um...
[03:18:44] Mm-mm-mm-mm. I think we're almost ready to shift gears.
[03:18:51] I saw something earlier.
[03:18:54] Here
[03:18:55] that
[03:18:57] Where was it?
[03:19:04] One more thing before we move.
[03:19:06] Yeah, another dev comment.
[03:19:12] Let's start here with what Mike Pearson said. Technically this is sort of This Week in JavaScript, but I'm going to officially start This Week in JavaScript after this last comment, okay?
[03:19:21] Web development will move to reactivity one amazing tool at a time. More Angular devs should give React a try.
[03:19:26] 100% agree.
[03:19:28] Angular is headed in a much better direction than React is in my opinion, okay?  But that's partly because they are taking inspiration from other frameworks.
[03:19:36] That is true as well. The vast majority of garbage code in web apps is large components whose parts are tied together with imperative code.
[03:19:45] Okay.
[03:19:46] I could see from reactivity nut, like that would be the perspective. React gets two most important things more right than any other framework.
[03:19:55] frictionless component component.
[03:19:56] creation.
[03:19:58] Yep.
[03:20:00] Section code can be split into child commands almost as easily as thinking about it.
[03:20:04] Yep.
[03:20:07] Men of...
[03:20:08] Minimal declarative derived state.
[03:20:13] Yeah.
[03:20:15] Securement-sleep drive state can be expressed as if JavaScript were a reactive language.
[03:20:18] Yep.
[03:20:21] These are amazing examples, but sharing state, or splitting state, or scaling state, or anything  else to deal with state, and maintaining performance long are all painful in React. But React developers  are aware of these pains because they see clear examples of how nice code can be. The  contrast between painless simple code and painless complex code is very high. This is  great. The simple code ingrates a mindset for small, composable pieces of code and for  declarative derived state, which prepares them for the next level of reactivity. This
[03:20:49] part of why React Query grew so quickly. It allowed React devs to code simple async in the same way as they've been coding simple sync state. It was easy for them to see the benefits.
[03:20:58] "Tradings for scalable reactivity."  This is a whole article, Mike.  Okay, that's cool, let's keep on going.  "Once the reactive mindset firmly sets in,  "devs are willing to trade off a tiny amount of syntactic sugar  "for much greater flexibility, scalability, and performance.
[03:21:10] Most Solid.js' biggest fans are React developers.
[03:21:14] Quick check in the chat, is that true?
[03:21:16] Are you guys all React developers?
[03:21:19] *lip*
[03:21:20] -
[03:21:21] I'm going to go.
[03:21:22] *ding*
[03:21:24] Thank you.
[03:21:26] I'm going to put it in the middle of the egg.
[03:21:30] *clap*
[03:21:34] *thud*
[03:21:40] ReactF and NovaChoice, let's react.  Oh, you guys are great.
[03:21:46] I don't know.
[03:21:48] All right, all right.
[03:21:50] Not quite as nice as it, but developers who understand reactivity love it.
[03:21:54] This is how I see reactivity spreading up the layers of web applications. Rather than a completely novel 100% reactive framework like CycleJS,
[03:22:00] Oh, that's an even better question. Do you guys remember CycleJS?
[03:22:03] Cycle.js.
[03:22:05] It was quite the framework.
[03:22:09] It was the purest view of reactivity. They made it so all side effects lived outside and you could just wire everything together.
[03:22:18] Um,
[03:22:19] Anyway, I see developers adopting a single simple extremely convenient tool for each  incremental layer of complexity. Developers fall in love with the hello world like demos. The reactive mindset seeps deeper into their brains and then they get ambushed when the tool explodes in their faces at the next level of complexity. Then someone creates the next great tool. This process is probably for the better. ArcGIS is more general than TanStack query, but is mediocre for HTTP requests, definitely. Which is where the vast majority of asynchronous data comes from. Seems like more focus should have given to it, doesn't it? Maybe it's currently more important overall to figure out.
[03:22:49] this SSR stuff everyone seems to be struggling with.
[03:22:52] Okay, and then he promotes his own state library. But...
[03:22:56] I thought it was...
[03:23:00] Dev just given the quotes today.
[03:23:02] This constantly pulls me towards Solid as someone who really likes React. I get the whole GIST-transfer-state-into-UI-simplicity React going forward, but nothing I've ever worked on is satisfied with simple transformations. Trying to tack on stateful logic on top of something that really wants to be stateless results in a lot of painful impedance mismatch. Once you get used to the fact that Solid-wrapped state inside functions, it's a breath of fresh air from React because things are a lot more flexible and composable. Obviously way more performant, but that's not even the important part.
[03:23:27] I don't write solid because I want performance apps, but because I enjoy it a lot more.
[03:23:31] Anyway, yeah.
[03:23:33] I think this is the end of the dev spotlight for the stream.
[03:23:36] Um...
[03:23:37] But let's-- I'm going to pull off my screen and set up some stuff to talk about what else has been going on in JavaScript.
[03:23:45] Give me a second here.
[03:23:47] Yeah, ad break.
[03:23:49] Except I don't, yeah, I don't run ads myself. You might just get caught by them incidentally. Uh,
[03:23:55] Um...
[03:23:57] I'm not good with the streaming thing.
[03:24:00] If you're watching me on Twitch, I'm sorry.
[03:24:03] That's the only platform that probably is sending you ads about now.
[03:24:07] Um,
[03:24:08] Probably already did like a dozen times.
[03:24:10] But.
[03:24:13] Sorry about that. Let me get my...
[03:24:17] all my stuff ready to talk about
[03:24:21] other
[03:24:22] This Week stuff.
[03:24:26] Thank you.
[03:24:27] I don't know.
[03:24:29] It's been two weeks, so you'd think I would have more topics.
[03:24:33] But...
[03:24:35] Let me see here.
[03:24:41] A number of you are probably still watching from Twitter or X.
[03:24:45] I wonder
[03:24:46] Is that working well for you?  Did people like watching it?
[03:24:51] watching the stream on here.  It's tricky 'cause you don't get the comment, right?  So even if I'm asking you,  you actually couldn't tell me even if you wanted to.
[03:25:01] Thank you.
[03:25:11] Thank you.
[03:25:12] Thank you.
[03:25:14] And then I need one more.
[03:25:18] Alright.
[03:25:18] Yeah.
[03:25:19] Oh no, not that. Open a new tab.
[03:25:24] All right.
[03:25:28] I've...
[03:25:28] It's like when it...
[03:25:29] I realized I had no new...
[03:25:32] um
[03:25:34] HackMDs this week.
[03:25:41] Thank you.
[03:25:42] Yeah, there's probably comments on X. People can comment on the actual stream. I haven't
[03:25:47] looked to see if I can see
[03:25:51] see that
[03:25:52] Thank you.
[03:25:56] Thank you.
[03:25:57] Thank you.
[03:25:57] Yeah.
[03:26:01] - Thank you.
[03:26:03] It's all good.
[03:26:06] Thank you.
[03:26:07] Let's just shift gears here a little bit.
[03:26:11] Give me two seconds. I want to get back to
[03:26:15] to
[03:26:16] Yeah.
[03:26:18] Huh, that's funny.
[03:26:19] Um...
[03:26:21] Yeah, well...
[03:26:24] Let's
[03:26:26] Let's run it into this week in JavaScript.  This is something that...
[03:26:31] I don't think there's actually that many new viewers here this week, but...
[03:26:36] If you're new, I like to go over Twitter and just kind of follow my thread of what caught my eye.  And it usually leads to some interesting...
[03:26:45] discussions. We already talked about a bunch of Twitter stuff
[03:26:48] But, um,
[03:26:50] a little more on the tech side anyways.
[03:26:53] And
[03:26:54] the very first post that I have
[03:26:57] actually...
[03:26:59] Okay.
[03:27:00] brings Theo back again.
[03:27:02] - The following:
[03:27:03] Uh...
[03:27:05] This one was interesting to me. The gist of it, as I said, this is old news, but he literally posted this right after we finished the stream, so I missed it. So we didn't talk about it. So it's been two weeks. This is old news.
[03:27:21] essentially  he
[03:27:25] Vercel got some heat after that clip from...
[03:27:30] What's his face?  Levels.io, talking with Lex Friedman.
[03:27:37] You know...
[03:27:38] In fact...
[03:27:40] I'm going to play that clip.
[03:27:44] Let's open...
[03:27:45] Listen in new tab and I'm going to change how I'm sharing my screen so that we can listen
[03:27:51] Listen to this clip, okay?
[03:27:56] Yeah.
[03:27:58] Um...
[03:27:58] Give me two seconds. I'm just gonna switch how I'm presenting my screen.
[03:28:05] Thank you.
[03:28:07] Um...
[03:28:12] I think it's this one, yeah.
[03:28:15] Man, this is my most controversial take, I think, and maybe I'm wrong, but
[03:28:19] I feel like...
[03:28:21] There's frameworks now that raise money. They raise a lot of money. They raise $50 million, $100 million, $300 million.
[03:28:27] And the idea is that you need to make the developers, the new developers, like when you're 18 or 20 years old, right?
[03:28:33] Um,
[03:28:34] get them to use this framework,
[03:28:36] and add a platform to it.
[03:28:38] like where the framework can
[03:28:40] It is open source, but you probably should use the platform, which is paid.
[03:28:45] to use it.
[03:28:46] the
[03:28:47] costs of the platforms to host it are a thousand times higher than
[03:28:51] just hosting it on a simple AWS server or VPS on DigitalOcean, right?
[03:28:57] I
[03:28:57] Up to this point, I'm with him completely.  Yes, you're right.  I never covered this for some reason.  Like I saw it, like it was back at the end of August, like a month or so back.  But I was just like, yeah, whatever.
[03:29:09] Like I don't usually get caught into like...
[03:29:12] business-y kind of drama stuff.
[03:29:16] I mean,
[03:29:17] Thank you.
[03:29:18] And the truth is everything, like the first half of what he says here, I'm like, how can you argue with that?
[03:29:25] Right.  And it's a tricky,  it's,  it's a tricky subject because it's like,
[03:29:30] I mean, the number of times that I wake up in the morning, I'm like, man...
[03:29:35] if I had a company and I had paid,  you know,  if I had VC funding and supporting solid and all this and had employees,  like think of how much work,  like how much further we would be along if there was fully paid people other  than myself,  like,
[03:29:50] you know, think about it. Like we have a lot of volunteers and community funding and we put all our open source money right back into funding the community, you know, so we get a lot of people, you know,
[03:30:00] know like
[03:30:00] significant effort, like maybe 15, 20% time effort, you know, and at times we've had hired on people like Alexis six months, eight months, you know, full time.
[03:30:11] Think about how big that is. That's like doubling our current output just by hiring another person out.
[03:30:19] Picture if...
[03:30:21] we had three people or four people or, you know,
[03:30:25] I don't know how... I imagine there's...
[03:30:28] I don't know how many people are working on a next or remix now, but I mean,  those are meta frameworks. Like we're, we're not just, we're, we're like building.
[03:30:36] Next.
[03:30:37] and building React and building, you know what I mean?
[03:30:41] So I get there.
[03:30:44] You know, raise the money, put the money in.  It's expensive.  It's hard to actually build a framework these days.
[03:30:53] up to snuff because of the amount of work that goes into it.
[03:30:57] - Thank you.
[03:30:58] but
[03:31:03] This is where it starts to fall off for me.  I think where we get next is his bias toward...  Let's just listen.
[03:31:12] Um,
[03:31:12] So there's obviously like a monetary incentive here.  Like we want to get a lot of developers to use this technology,  and then we need to charge them money because they're going to use it in startups.
[03:31:20] And then the starters can pay for the bills.
[03:31:23] But what that--
[03:31:24] it kind of
[03:31:25] destroys the
[03:31:27] the information out there about learning to code because they, you know, they pay YouTubers, they pay influencers, developer influencers, it's a big thing to like, and same thing what happens with like nutrition and fitness or something, same thing happens in developing. They pay these influencers to promote the stuff, use it, make stuff with it, make demo products with it. And then a lot of people are like, wow, use this. And I started noticing this because when I would ship my stuff, people would ask me, what are you using? I would say, I would just PHP, jQuery, why does it matter? And people would start kind of attacking me, like, why are you not
[03:31:57] using this new technology, this new framework, this new thing.
[03:32:00] And I say, I don't know, because this PHP thing works, and I don't really...
[03:32:04] I'm optimizing for anything. It just works.
[03:32:07] And I never understood why. I understand there's new technologies that are better and there should be improvement.
[03:32:13] I'm very suspicious of money
[03:32:15] Just like lobbying.  There's money in this...
[03:32:17] developer framework scene
[03:32:19] There's hundreds of millions.
[03:32:21] that goes to ads or influencers or whatever,  it can't all go to developers.  You don't need so many developers for a framework,  and it's open source.
[03:32:28] Thank you.
[03:32:29] to make a lot of more money on these startups.
[03:32:36] Yeah, I mean, it's interesting because, I mean, I could be a little bit wrong here, but...
[03:32:43] I don't think the industry needs an influx of money to get the...
[03:32:50] marketing or the education and all the, the, you know, like the fitness type people running
[03:32:56] here.
[03:32:57] Like,
[03:32:58] It...
[03:32:59] Yeah.
[03:33:01] Like we're talking about almost JavaScript culture.
[03:33:05] in a sense.  Like...
[03:33:07] If no one had...
[03:33:09] paid Theo or someone else.
[03:33:13] He wouldn't have been able to take things as far as he did, but he'd probably be doing a lot of the same stuff, right?  I remember the guy who decided to, you know, poke Dan...
[03:33:24] on Twitter and get him to come on for his job interview thing. You know, saw the opportunity,
[03:33:31] basically was unknown at that point and
[03:33:34] put, you know, he just made the one next JS video and then do that.
[03:33:39] People, you know, at the beginning might gravitate towards what they like and then they realize
[03:33:45] what's popular gets them more views
[03:33:48] And it doesn't take money to do that.  It's like a self-fulfilling machine, right?  I remember Theo's third video was a SolidJS video.
[03:33:58] And around Christmas time, I remember, he came to me and he was like, "This is going to be the biggest Solid.js video, you know, to date or whatever."
[03:34:05] And he's like, it's going to get this many views.  My last two got these many.  I'm like...
[03:34:10] It's okay. You know, like,
[03:34:13] I appreciate it. This is exactly what we need. We need this kind of exposure right now. But,
[03:34:19] your other content will get more viewership simply because of what it is.
[03:34:23] I appreciate
[03:34:25] If you find time in the future to highlight us more whenever you can,
[03:34:30] But...
[03:34:32] If you want to get your name out there, your next content, your React content is way, way more popular.
[03:34:40] It has a higher ceiling, you know, like 10x, whatever. I remember, I mean, we were excited about the video, but like there was a certain reality set in there. And this is...
[03:34:51] this kind of mentality comes out to training it comes out to basically everything right we
[03:34:58] When you have a Twitter culture where you're just like echo chambering, you don't need money. Like money can help a lot, but it's not the driving force from my perspective to that end.
[03:35:10] Like how many influencers were Purcell putting money towards? My understanding was just Theo.
[03:35:15] That wasn't what was driving everyone to use these other tools.  Like Levels probably, as I said,
[03:35:22] sick of hearing people telling him he can't use PHP and why isn't he using a modern framework?
[03:35:27] Um,
[03:35:29] And he's right about everything about, you know, the influence of money, how that affects the upsell to infrastructure, the whole thing there.
[03:35:36] But...
[03:35:38] the propagation of this thing,
[03:35:40] goes way beyond money and marketing.
[03:35:44] I mean, it does leave an impression, definitely.
[03:35:46] Like you, you know, when you look and you see ads and stuff, it does leave an impression.
[03:35:51] But like...
[03:35:53] I don't
[03:35:55] I don't see it
[03:35:58] quite
[03:35:59] Maybe as pessimistically.
[03:36:04] Yeah, Ben Holmes talked about it.  Most of his comments there because of...
[03:36:10] because of Next.js content, yeah.
[03:36:13] so
[03:36:15] Yeah, I mean...
[03:36:19] Thank you.
[03:36:20] It's funny. It's ironic and it's tricky and it's messy because like...
[03:36:27] Tío!
[03:36:28] And you still see in his current videos now, he is a big Vercel fan, a big Next fan, and has always basically been both.
[03:36:37] The money was never an asset. He actually used this whole thing as a way of being like,
[03:36:44] You know, I got choice. I'm going to pick tools.
[03:36:47] that like he had the benefit that his favorite tools are some of the most popular tools so he  had the benefit of being able to choose his sponsor so to speak and basically just pick  the stuff he would choose.
[03:36:59] you know,
[03:37:02] You get...
[03:37:03] bugged by people, not bugged, but you get message from people that promote stuff or look stuff all the time in his position.
[03:37:09] I get that to a certain degree too, but I'm not as, you know, out there, so to speak.  But I know from my own messages that like...
[03:37:18] He had lots of options if he wanted to do stuff other ways.
[03:37:21] Um,
[03:37:23] And
[03:37:24] He chose to do
[03:37:26] what he wanted to do anyways, and it was just a very nice alignment.  Unfortunately, sometimes...
[03:37:33] really nice natural alignments
[03:37:36] are dangerous and bad.
[03:37:45] Thank you.
[03:37:49] I mean, who's going to pay to use a JS firmware, as I say, if you're not paying for the product? Yeah, exactly. I mean, this is why I always push back the VCs. I always find it funny to this day that when the whole RemixGate happened,
[03:38:03] And like the, what was it?
[03:38:06] I got some nasty message from...
[03:38:09] one of the
[03:38:10] VC...
[03:38:12] people from whatever who are responding remix of the time and all this stuff and they're like calling out
[03:38:17] Matt Billman and stuff and saying, "Oh, J1, you blah, blah, blah, blah, you know, hire this now, fly, blah, blah." I don't know what game he was playing, but like, six months earlier, he was trying to tell me that, you know, I should start my own company. So like,
[03:38:28] *laughs*
[03:38:30] Yeah, I don't know.  And I was just like, what am I selling?  And it's like, we'll figure it out.  It's like, yeah, okay.  Like, it's...
[03:38:38] That is probably the...
[03:38:39] why I'm not the right personality.  I think a lot of people will find a way to make money.  That's not what I'm about.  So the distraction was more troublesome from my perspective.  But it's like...
[03:38:50] Thank you.
[03:38:51] - Oh.
[03:38:52] Thank you.
[03:38:55] Thank you.
[03:38:55] Thank you.
[03:38:56] Like, it's just...
[03:38:59] It's just kind of...
[03:39:01] It's definitely...
[03:39:03] Um...
[03:39:06] Solid ink. Yeah, we've talked about it. It's just this is just one of those things where in a sense
[03:39:12] I don't think it's going to actually change much as a positive, but in a sense, it could've. If Theo took it slightly harder and acted more negatively, which I would...
[03:39:22] I mean, it might be within him to do.
[03:39:26] you know, um,
[03:39:29] they kind of alienated one of their,
[03:39:33] Like, but basically this wasn't the case anyways.  And by caving and making it public, what did this accomplish?  You know, I don't actually know, um, to be fair, like, because I'm, what did I write here?  Whether it's actually true.  Okay.  Yeah.  What did I say here?
[03:39:47] It's easy to shoot the messenger, but if anything influencers are thermometer reading a reflection of what we already know to be true and
[03:39:54] Whether it's actually true is a different story, but also irrelevant.  Theo is the least of herself's perception problems.  Having zero influencers on the payroll only confirms that they are what they're willing to do.
[03:40:03] for perception. Unchanged, this probably won't be the last casualty.
[03:40:07] I notice the problem when too many
[03:40:09] I noticed the problem first when too many things aligned. React next for sell and fro. Trust came into question. Every decision screwed me. Instead of owning it, there's a sense of denial. Understandable. But intention and result don't always align. Resentment is tangible.
[03:40:21] But this is just one perspective. I hope they get to the root of the problem. Having watched the whole Theo arc next to Priscil, this wasn't it. Theo knows that, Priscil knows that, you should know that, and it's disappointing to see this ultimately meaningless outcome.
[03:40:32] This doesn't actually change that perspective. This is just another example of one of those really nice
[03:40:38] natural alignments that ended up happening that just
[03:40:42] when the most popular things all get together.
[03:40:46] And
[03:40:47] you know,
[03:40:48] It's possible to, you know, produce a lot of haters and if all the haters actually have reason to get together. Well then like, you know, it's a monopoly. It's too controlled, you know. It's not good for the wider ecosystem because it makes other things suffer like just too many things.
[03:41:09] Align you think well, that's the key to success, right? But
[03:41:14] Thank you.
[03:41:14] I don't know.
[03:41:22] Yeah, his videos have ad reads.
[03:41:26] - Thank you.
[03:41:28] *sigh*
[03:41:33] Yeah, I don't know. It's a new era of...
[03:41:37] of this content.
[03:41:39] I...
[03:41:40] I don't know.
[03:41:41] Maybe like, maybe Vercel just didn't need to worry about any of this and it just didn't matter.
[03:41:47] I, they had their reasons. It's just, it's, it's just,
[03:41:52] Thank you.
[03:41:54] I feel like we're missing the problem still.
[03:41:57] And maybe...
[03:41:58] Maybe like...
[03:42:00] It's not for sales problem.
[03:42:03] Like...
[03:42:05] Why
[03:42:07] is everyone so threatened by this alignment?
[03:42:12] You know?
[03:42:16] Thank you.
[03:42:17] It's just like...
[03:42:18] the
[03:42:19] Don't get me wrong.
[03:42:23] Yeah. I don't like there is an alignment here. It is not imagined. It's just like,
[03:42:29] Thank you.
[03:42:32] I don't know. We've talked about it in the past. Maybe I'm done with this one. It's just...
[03:42:40] I feel... I don't know how to put this in words, but I feel like...
[03:42:46] Thank you.
[03:42:47] People are looking for a scapegoat. I don't I don't know how else to put it. It's like it's like a
[03:42:54] *laughs*
[03:42:56] At this point, everyone who's frustrated with React...
[03:43:01] frustrated with Versailles pricing,  frustrated with NextAppDirectory,  frustrated with anything.
[03:43:06] everything gets funneled at Vercel. Like, it doesn't matter. React 19 could be a thing and people don't even, I don't even know if people, at least in this sphere, associate React with meta anymore.
[03:43:17] They view it like as the Verstel company. It's not true.
[03:43:20] But that's...
[03:43:21] the kind of perception out there. It doesn't matter about denials and which core teams work where or what now. It's the way stuff is delivered. It's the way that Next doesn't like, you know, when a new feature is added to most frameworks, they'll go and deploy it on six different platforms and be like, look, we support this everywhere. Astro does it. Remix does it. We do it. Next is like, here's the sound of yourself. Makes sense. They throw it. But you understand like,
[03:43:47] *sniff*
[03:43:48] They've somehow managed to get the heat and
[03:43:51] of all the things. So instead of just being responsible for one thing, they are to blame for everything. And I don't think it's fair.
[03:43:58] But it's like...
[03:44:00] You just feel the bubbling resentment about people about the direction of React or this, that, and they're to blame.
[03:44:08] I'm... I'm...
[03:44:10] more willing to turn this back on people.
[03:44:14] little bit, not just blame for Saul, which is kind of funny position to be in, but like
[03:44:20] It's
[03:44:21] .
[03:44:22] - Thank you.
[03:44:25] I don't know. I feel it's still that something has to change, whether it's an acknowledgement, whether it's like a...
[03:44:31] breaking up the alignment in some kind of meaningful way other than empty words.
[03:44:36] I mean, it doesn't even matter if it's real or not, as I said, it's just...
[03:44:41] is.
[03:44:45] - Thank you.
[03:44:46] Thank you.
[03:44:52] Thank you.
[03:44:52] Thank you.
[03:44:55] It's more than just hosting it though, like, like Gatsby
[03:45:02] had Gatsby cloud and you you could do stuff on Netlify and
[03:45:07] And Vercel technically with it, I know definitely Netflix, but...
[03:45:11] They had their hosting platform and that was their thing.
[03:45:14] Because of the recent infrastructure stuff, like we were talking about, like...
[03:45:18] adding KV or blob storage to your framework  or in skew protection, all these things  to support these server client features  that require infrastructure pieces to really work properly.
[03:45:27] It's not just about sponsoring.  It's almost like the only way to deploy Next is on Vercel.  And the only way to use React is to use Next.  And the only...
[03:45:36] So it's just like the straight...
[03:45:39] line funnel to put a bunch of money and in Vercel's pocket, which again, people like levels are talking about, like, which costs, you know, companies like Vercel and Netlify who do kind of a redistribution through, you know, AWS, whatever, there is a premium for the, you know, better customer service.
[03:45:57] level, better DX aspects of it, you pay over using AWS straight.
[03:46:03] But now because the tooling's aligned with it too, it feels like some kind of
[03:46:08] scam almost that you convince people that they need to use React, which means they need to use React or next, which means they need to use Vercel, which means they need to pay 10 times more for their hosting or whatever. I mean, I'm just pulling that number thin air. You know, someone will say something like that. And
[03:46:24] And essentially, like,
[03:46:27] the whole thing is called into question along the whole alignment,  whether than looking at it as individual parts, right?  It's not just sponsorship.  It's the downfall of front-end development.
[03:46:40] *laughs*
[03:46:42] Right? And like, as I said, Gatsby, people felt like, okay, that makes Gatsby's Gatsby cloud. They have the service and then you have DSG and that's a service and they owned it. Parts of it is that even though, as I said, about reality and truth.
[03:46:56] I think Vercel has kind of denied it.  They're like, no, or the React team's like,  no, we don't only think next.  You can use Remix or doing this,  but server components of the future.
[03:47:03] Okay. Or, you know, next like, yeah, we work on every platform.  Like we all know how true that is.
[03:47:09] Um, so like...
[03:47:12] Like...
[03:47:14] And
[03:47:16] Yeah, I don't know. I don't know how much I want to talk more about this. It's just like, I feel...
[03:47:24] Like,
[03:47:25] This is just...
[03:47:26] rubbing off the layer or unsurfacing something that's already there. It's like there's bits of it from every aspect of it, even like resentment towards even react itself bubbling up through here.
[03:47:38] Um...
[03:47:49] Yeah, I mean, it doesn't matter if it's fair or not, right?
[03:47:54] But it is...
[03:47:59] Well, it's a little bit more than be nice to use.
[03:48:04] Because
[03:48:05] I...
[03:48:06] Like it's not...
[03:48:09] completely true.  Like, you can use these features  as they build out, but...
[03:48:14] the direct line between React to Vercel infrastructure is so tight when it comes to like what features you can adopt.  And when people market these features,  you need PPR.  Yeah.
[03:48:26] Well, guess what? Where can you get PPR?
[03:48:31] Right?  Like, it becomes...  It's not just...
[03:48:35] I'm
[03:48:36] Like,
[03:48:37] if it was just like, oh, if you want PPR, you should deploy your next app to here.  Like people viewed it, but it's not that because...
[03:48:44] PPR is necessary and
[03:48:47] Oh.
[03:48:48] using Next is necessary if you use React.
[03:48:52] You're basically saying that there's like, if you want to do what's proper or right, you have to go down this path.
[03:49:04] Um, I think that's a good thing.
[03:49:06] No, the funny thing is it's not. If you go down any next release, you will hit this sort of thing. I mean, the others catch up in time, but they have to do work. It's not like, oh, Next comes up with a new feature and just works everywhere. Like...
[03:49:22] I mean, skew protection is another one. I think we did this on stream before I just start pulling down next releases and was like, for sale, for sale, for sale, for sale.
[03:49:32] Like,
[03:49:33] it's like...
[03:49:37] We're getting more and more there.  And it makes sense.  It's like what we're talking about,  LiveView and Rails,  like having these functionalities built in.  I wonder if Rails like had that kind of setup  because of Heroku.  And it was like, it just made sense.  You could sell the infrastructure.  Like the levels...
[03:49:50] Like it's fine. That's what for sales in business to do. The problem is,
[03:49:55] Every React developer thinks that
[03:49:57] Like that's how you have to use react because like the chain is
[03:50:02] They have to somehow break the chain, except it's their best funnel, but it's like too much. I don't know.
[03:50:07] Thank you.
[03:50:09] Thank you.
[03:50:10] Thank you.
[03:50:14] Thank you.
[03:50:22] Thank you.
[03:50:23] Yeah, I don't...  The funny thing is, I don't think...  I don't know if that's true.  Maybe it is.  I mean, I'm...  Maybe, yeah, it's mostly the serverless guys that I'm talking to.  But the thing is, like...
[03:50:36] There's like a next version that works with like node as a container or docking container or something.  But like from a pure feature standpoint, I know, I know the guys at Cloudflare who work on building all the pieces and the adapters that are missing because I work with them with solid.  Right. And I'm definitely familiar with Netlify. Most places have adapters, right? Netlify has the next runtime.  It's like, it's like 20 times larger than any other adapter. It's like a whole runtime to make next work on Vercel or sorry, on Netlify.
[03:51:06] properly. Like,
[03:51:08] I don't think the criticism on any specific part
[03:51:13] is overblown.  I think the problem is that the whole narrative is...
[03:51:19] is like,
[03:51:21] It ties things together.  Like I actually don't disagree with the,
[03:51:25] On one side, I think I'm blaming people's complacency, but on the other side, every individual argument is generally right. So it's like,
[03:51:34] It's not... It's just like this... It's the alignment
[03:51:39] that has just shunned the light so that everything just aligns in the perfectly
[03:51:43] awkward way
[03:52:04] The problem with is it underbait to crucial DX DevStuff service so you've run a pro through Mavic and Nava. Yeah, I mean, it's underbait because it's still under development. We're in one of those phases where we're learning patterns again.
[03:52:16] Where they're running react canaries and trying to solidify on it and stuff like they took a big risk with our season it and
[03:52:22] Thank you.
[03:52:23] RRCs could be the future.
[03:52:25] But I'm saying...
[03:52:27] Who's blamed for that?
[03:52:29] React or Vercel, Vercel's blamed for that. Like it was their choice.
[03:52:33] As I said, they're just taking all the heat.
[03:52:37] But I'm not saying the specific points of complaint
[03:52:41] for the heat are unmerited. They're just getting it all.
[03:52:54] I mean, there's Open Next people were working on,  which was like...  They got some complaints because they're like,  Next.js is open, but like...
[03:53:04] There are like...
[03:53:07] *sniff*
[03:53:08] there are like people have done this and the results like what are you doing you know like a little bit
[03:53:19] Yeah, I don't know. It's...
[03:53:22] Yeah.
[03:53:24] it's
[03:53:26] On one level, they could just own it and just be like Gatsby did.
[03:53:31] But then again, like, where's Gatsby now?
[03:53:34] So, yeah.
[03:53:38] *sigh*
[03:53:43] Okay, anyways.
[03:53:51] It's funny, my post comments are coming in like
[03:53:55] in a weird order right now,  which is...  Okay.  Let's continue.  Um...
[03:53:59] That was only like the first story and I spent way more time on it than I thought I was
[03:54:04] okay we talked about
[03:54:07] the Jose stuff already.  We talked about this.
[03:54:14] Talked about Trello.
[03:54:26] Okay.
[03:54:27] Let's talk about this one.
[03:54:30] Thank you.
[03:54:32] We named Next.js or Vercel.js. I mean, that would be a way of doing it, yeah.
[03:54:36] - Yeah.
[03:54:37] I'm sorry.
[03:54:41] This is such a funny idiosyncrasy.  I...
[03:54:44] I mean, it's more than that, but it's...
[03:54:47] Oracle's done like nothing with the name.
[03:54:50] I mean, I don't know how much I need to cover this.
[03:54:52] I remember it was confusing when I first
[03:54:55] started programming JavaScript because like Microsoft also had like,
[03:55:00] Um...
[03:55:01] J-Script or something, or...
[03:55:04] Like, so like, it was weird that there was like a bunch of like,
[03:55:10] proprietary mental kind of stuff
[03:55:13] like,
[03:55:13] Thank you.
[03:55:14] you know, trademark, what do you call it? My mind's slipping here right now, but you know what I mean? Around like,
[03:55:21] the word JavaScript because it was referencing like the Java framework when it had nothing to do with it. And essentially,
[03:55:28] No
[03:55:29] Mm-mm-mm.
[03:55:30] Netscape, I guess, or who had it originally, but Oracle ended up buying it out. In 1995,  Netscape partnered with Sun Microsystems to create interactive websites. Brendan Eich,
[03:55:39] created the first version of JavaScript. So he was an employee
[03:55:43] And since then, the trademark has basically sat there until Oracle bought them out.  And it's just sitting there for no reason.  But because of that, things like JavaScript conferences, like JSConf and stuff, can't  use JavaScript in the name.
[03:55:57] because it's a trademark.
[03:55:59] Um...
[03:56:01] Thank you.
[03:56:02] Thank you.
[03:56:04] ACMA script was always an unwanted trade name that sounds like a skin disease.
[03:56:09] - Thank you.
[03:56:10] Microsoft Halfway offered up J script, but no one else wanted that. Yeah.
[03:56:15] It's such a funny story, like, in the first place, like, how...
[03:56:18] like...
[03:56:19] JavaScript having nothing to do with Java, but Java being cool, led it to like being part of the name.
[03:56:25] like
[03:56:27] It's confusing as hell.
[03:56:29] It's interesting that Dino wants to push this, but it's never...
[03:56:33] to this date been resolved.
[03:56:35] Um...
[03:56:37] I'm glad.
[03:56:38] There's so many people who have signed this, myself included.
[03:56:41] Um...
[03:56:42] Thank you.
[03:56:43] Thank you.
[03:56:46] If you haven't looked at this, consider signing this yourself.  This is just complete unnecessary work.
[03:56:54] Um...
[03:57:08] Thank you.
[03:57:10] "How do you do fellow kids?" Yeah, no.
[03:57:15] Thank you.
[03:57:16] This is one of those kind of almost like no-brainer ones.
[03:57:21] JavaScript 1.0 came out before Java 1.0? Yeah, like...
[03:57:24] It's such a weird...
[03:57:26] Thank you.
[03:57:27] Yeah.
[03:57:29] Sorry, I need to change how I'm sharing my screen. I realize that I'm only... I didn't show the signing page. Give me two seconds.
[03:57:38] Stop screen share, share screen.
[03:57:40] Entire screen.
[03:57:44] All right.
[03:57:45] Sorry, I was actually looking at the letter
[03:57:48] while I was talking about it, but it doesn't really matter.  You guys, you all know what's up, so...
[03:57:53] Um, okay.  Let's shift gears for a second.  Let's...
[03:57:59] Let's see what else I got here.
[03:58:02] Um...
[03:58:03] Yeah, Leonard Jason.
[03:58:07] I always love the demos that show if you get a chance, um,
[03:58:13] Seeing the ecosystem grow like this, this is a demo that's using solid, solid UI, trading view, lightweight chart.
[03:58:19] You saw in its purest form a lot of times, you saw this reactivity system without JSX.
[03:58:24] It's part of the flexibility.
[03:58:26] Um...
[03:58:27] Video on that.
[03:58:28] Let's talk about Trello.
[03:58:31] Conference talks, Daniel and Attila are hidden in it.
[03:58:35] pretty hard right now.
[03:58:37] Um...
[03:58:40] Yeah, actually, I guess we already went over most of the solid news this week.
[03:58:44] Let me look at my bookmarks.
[03:58:49] *tututututu*
[03:58:51] Just...
[03:58:56] Thank you.
[03:58:58] We talked about the Jose stuff.
[03:59:03] Okay, yeah, that's a good one.
[03:59:05] Um...
[03:59:18] Thank you.
[03:59:18] Oh yeah. Okay, cool. It's just reminding myself of some of the other stuff that happened. We'll get to that in a second. Let's continue on here.
[03:59:28] Okay, the only big shout out that I want to do for Solid right now is the hackathon
[03:59:35] is coming soon.
[03:59:37] 10 days, four hours, 58 minutes, $15,000 in prizes,
[03:59:44] um, multiple categories. We're going to drop the categories
[03:59:48] on that day, give everyone the chance to get involved.  Last time this came around, this was a lot of fun.
[03:59:56] So,
[03:59:58] um,
[03:59:59] - Yeah.
[04:00:00] Look forward to it coming, but just
[04:00:01] you have a whole month and a half
[04:00:03] Um,
[04:00:05] basically from October 1st to November 14th to build something. So lots of time
[04:00:10] Um,
[04:00:12] Thank you.
[04:00:12] It's going to be fun.
[04:00:15] Thank you.
[04:00:16] It's been a while since we've seen one of these. I think I said this last time, but it was like back in 2020, 2021-ish, there's like a number of them. We did one, then after and then Svelte.
[04:00:28] Trying to bring it back again.
[04:00:34] Alright, alright, alright.
[04:00:37] Let's go back here.
[04:00:40] - Thank you.
[04:00:41] Mm-mm-mm. Mm-mm-mm. Yeah, okay.
[04:00:46] This one's a short one.
[04:00:50] So,
[04:00:52] I don't talk about Marco very much anymore, Marco 6, you know, specifically.
[04:00:58] Um, because I'm trying to motivate the team to, uh,
[04:01:03] do the work and get there. I mean, I, it's not fair. Their project's incredibly ambitious.  That's like someone saying, you know, until solid 2.0 comes out, I'm not going to, I'm  going to boycott Ryan's streams. It's not, it's, it's not fair, but, um, yeah.
[04:01:18] But...
[04:01:21] I keep on seeing stuff...
[04:01:25] from Svelte.
[04:01:27] and specifically mostly Svelte.
[04:01:31] And, and I, every time I see the new features and stuff coming in for Svelte 5, it, it,
[04:01:37] I keep on like, it's like this...
[04:01:40] really cool blend between like solid
[04:01:43] stuff. Like, it's not like Oldsfeld, it's like very solid-like and very Marco-like. And it's like slides right in there in the middle. And I'm like, and
[04:01:51] And
[04:01:52] Because we only really focus on the reactivity on the solid side, I sometimes miss that.  I think I saw Svelte adding Svelte snippets.
[04:02:02] And Marco has Marco macros, like really big on the alliteration on these features, apparently.
[04:02:08] and
[04:02:10] I just started thinking about this and I was like,
[04:02:15] It's kind of crazy when you step back for a second and you think of the profound impacts that stuff like signals and the modern approach to signals with fine-grained rendering have had on the React, not on React, everything but React, but on the JS ecosystem. And then on the other hand, look at like...
[04:02:32] Marco...
[04:02:33] was the original islands framework and like the approaches to templating,  especially stuff like Svelte's like const and all these like features I keep on seeing  like coming into Svelte.
[04:02:45] that aren't actually in other SFC programs,  like in a sense are very innovative from the South side,  but actually Marco had them, of course,
[04:02:52] because you know marco hashtag marco did it first it's it's really interesting to see
[04:02:59] these
[04:02:59] Like Marco's kind of over here, Soled's kind of over here. To see the kind of like some of these things are
[04:03:06] I often say things are discovered rather than invented,  but to see these spaces kind of getting filled in more...
[04:03:14] thoroughly and seeing where these things go, it makes me miss occasionally thinking on that other side because I'm very focused where I am right now.
[04:03:23] Um,
[04:03:25] Some people ask me about what to do to make JSX better, because I make a big deal of usually pushing JSX.  And honestly, if you ever get a chance and you haven't watched it, I have a great stream with Dylan Converts Marco.
[04:03:39] to Solids JSX, and it gives you a really good idea of what templating could do.  I don't know if it makes sense to bring JSX, because JSX has a very specific...
[04:03:48] syntax, but like what Marco is able to do is just wild.
[04:03:52] by comparison because they decided to take on that challenge.
[04:03:57] I'm gonna...
[04:03:58] Posts.
[04:04:00] Thank you.
[04:04:03] I'm going to post this in chat.
[04:04:08] But yeah, out-of-order streaming.  Again, Marco didn't invent it, but they were the first open-source JavaScript framework  that I think that actually had it as well.  Like...
[04:04:16] it's
[04:04:19] Yeah, it...
[04:04:22] You know, in islands, in a sense, server components are a form of islands, right? So like,
[04:04:28] Yeah, I don't know.
[04:04:30] It's...
[04:04:31] It's it's if I just looking at like the design space, it's just incredible to see.
[04:04:37] Thank you.
[04:04:37] the space that lives between these two, like they're not extremes, but between this whole range, it's why I enjoyed working on Marco. It let me kind of attack
[04:04:48] from both sides.  I got to see...
[04:04:50] like,
[04:04:51] I have my very react side of thinking. And sometimes I feel like where we are in solid is more react than react is these days.
[04:04:59] And then...
[04:05:00] Like,
[04:05:01] um
[04:05:02] the like the Marco side is way on the other side sometimes and seeing that kind of
[04:05:09] flank around where like stuff like view or Svelte live and then like to better have insight into like
[04:05:15] where they're going.
[04:05:17] So yeah, I don't know.
[04:05:19] Marco's very cool if you ever get a chance to check it out.
[04:05:24] It's really...
[04:05:26] novel and
[04:05:27] and really
[04:05:28] unique in its way.
[04:05:34] Thank you.
[04:05:36] All right.
[04:05:39] We should talk about that.
[04:05:42] We talked about that.
[04:05:44] Okay, yeah, okay. So we're getting down to a couple last ones here.
[04:05:49] We should talk about this one, yeah.
[04:05:52] Thank you.
[04:05:53] And...
[04:06:02] Thank you.
[04:06:02] Yeah, we got a couple here.
[04:06:04] Thank you.
[04:06:05] Thank you.
[04:06:08] I saw this.
[04:06:09] And I thought,
[04:06:11] This was pretty interesting. I don't know where Sebastian got this example from, but
[04:06:17] It's...
[04:06:19] Something that...
[04:06:21] we haven't seen people do very often
[04:06:23] with React like this, where you fetch data up here, and then they're showing suspense in the same component,
[04:06:30] And then...
[04:06:32] passing it through. Now, the reason this works
[04:06:36] is because...
[04:06:38] the
[04:06:38] state primitive here is actually holding a promise. So that's the stable reference.
[04:06:43] And then when you set state,
[04:06:46] They're using it as a way of
[04:06:49] basically...
[04:06:52] and storing the next promise.  I honestly never thought of doing that.  For me, when I think of async, I think of...
[04:06:58] Um,
[04:06:59] computed values or memoization. I think of it as an async memo.
[04:07:03] Not as state.
[04:07:05] But...
[04:07:06] Um...
[04:07:07] right like it's basically it's derived from id they do something kind of interesting here where it's like
[04:07:13] object ID promise. Like, so it's like it's passing in both
[04:07:17] the...
[04:07:18] the
[04:07:20] source and the output to kind of get this API. But the biggest thing is,
[04:07:26] fetching above
[04:07:27] the suspense component now i i know someone from remix is like remix is gonna be like well we've  been doing that forever right we have our loaders and if you choose to use defer and not await well  guess what you get the promises and then you pass them through our await component and same deal
[04:07:42] and the right.
[04:07:43] But this is one of the cleanest looks of one of these examples that I've seen in a while.
[04:07:49] But you know where I go immediately when I think about this.  Because I actually wrote a whole article about
[04:07:55] Async handling.  And I suggested that...
[04:07:58] putting passing promises around is about the last thing you want to do,  which I mean,  I,
[04:08:04] I did not know that this was going to show up a month later or so after I wrote the article,
[04:08:10] the...
[04:08:11] What's interesting is, yeah, you can use here to read it, which means you get it.
[04:08:16] But...
[04:08:17] There's an interesting coloration that happens here.  I'm going to call it coloration is user...
[04:08:23] Now in this example needs to accept a promise. It doesn't
[04:08:26] Or a promise of user, to be fair.
[04:08:28] So,
[04:08:29] your interface now is impacted
[04:08:32] by async essentially like in this scenario, like,
[04:08:36] You can fetch up here, but now...
[04:08:40] If a component wants to participate in something that is async, either it has to use
[04:08:45] and get out of async, like resolve it,
[04:08:48] or it has to accept promises of the said thing.
[04:09:02] No, the state just gets the promise itself. So you go fetch users. Now state is
[04:09:08] a promise. They're literally taking, they're calling fetch user here and putting on the object. So you don't get the resolve promise, you just get promise. And then when you get in here,
[04:09:18] They're pulling the promise off and then it becomes promise of user. See prop promise of user becomes user right here.
[04:09:31] Right? Like the component is expecting a promise of user, which I said, it's pretty clear what it's doing from that perspective. So I can respect that. But it means that like the fluidity of the system is, and now you're dealing with a second
[04:09:46] class primitive which is fine promises built into the browser i mean if this is your direction you're  going i i have you know maybe this is how react will support signals you can have signal of user  and then pass it through
[04:10:00] As you know, I'm not a big fan.
[04:10:02] of passing signals directly through components, like making it like a thing that you check,  like, is this a signal?  Is this a promise?  Yeah.
[04:10:11] But...
[04:10:13] Yeah, it's an interesting example.
[04:10:16] First response to this.
[04:10:18] if I can find it now, because I know.  Prediction, people will use higher than they should,  probably next to use state, right?  Because I was just like,
[04:10:25] I was looking at this, I'm like, who's going to pass the promise around further down and further later?  They're just going to...
[04:10:32] fetch the state and then go use state right next to it.  And then I realized, oh, the suspense boundary
[04:10:38] is...
[04:10:39] below it.
[04:10:41] Okay, we can't do that.  We actually have to pass the promise here.  So I...
[04:10:51] Right, and then where does it go?
[04:10:55] Yeah, you need to cover the call use right because you can't put use above suspension. That's interesting king  Can you still put both below the suspense boundary right so this started this whole like debate where we're like can can?  What if I wanted to move the state and
[04:11:10] Beside the use here instead. I know that's not the point of this thing, but can I do that and the answer actually is
[04:11:18] It took us a long time. We went back and forth.
[04:11:21] Right?
[04:11:22] Thank you.
[04:11:27] You can't fetch the promise in the same component as used, right?  It needs to be cached across renders.  It is cached.  The promise is in state.  And then...
[04:11:34] We went...
[04:11:35] We went through the whole...
[04:11:37] the whole chain of things. And if I remember correctly, we actually realized that no, you can't because
[04:11:45] Let's see, again, Sophie to the rescue.
[04:11:50] Creating it in a use state initializer, unfortunately, is not enough. Until a component is mounted, React reserves the right to throw away all states, refs, etc. and does actually do that in practice in many cases.
[04:12:06] so
[04:12:10] Yeah, um...
[04:12:12] Interesting. This is the same problem with doing use memo with it too, I think. It's that the hooks aren't guaranteed to be there.
[04:12:20] Um...
[04:12:21] until it's mounted, which means
[04:12:23] that if you have to
[04:12:25] Not on you. Basically, if you want it to be in state, you have to put it above.
[04:12:31] The suspense boundary?
[04:12:34] which means that you do have to pass the promise through.
[04:12:39] Because...
[04:12:40] Yeah, yeah.
[04:12:42] Yeah.
[04:12:44] or hoist it using a cache or some other kind of mechanism essentially.
[04:12:48] Thank you.
[04:12:52] Yeah, definitely the inspiration for cash to be quite nice.
[04:12:58] So,
[04:13:05] Yeah, I mean, this is part of what your brain starts kind of going, what the hell is going on?  Yeah.
[04:13:13] Um...
[04:13:15] It's because the re-render model and concurrency, right?  Because in React, when they have concurrency, they have to re-render the components.  And if a component is never mounted, they reserve the right to be able to throw it away.
[04:13:25] Um,
[04:13:26] So yeah, it's,
[04:13:28] Thank you.
[04:13:31] Yeah, it's interesting.
[04:13:37] Did I see which tweet? Sorry, I'm missing the link. You can't share it on YouTube. You're going to have to go on...
[04:13:43] YouTube filters out links.
[04:13:46] You might have to share it on Twitch.
[04:13:49] If you can get in there.
[04:14:00] Um...
[04:14:01] But yeah, I mean...
[04:14:06] Just trying to see if...
[04:14:16] *sniff*
[04:14:17] memes are great
[04:14:21] Thank you.
[04:14:22] .
[04:14:23] *laughs*
[04:14:29] Ugh.
[04:14:31] - All right.
[04:14:34] There's a lot of confusion here, to say the least.  I think a lot of people are just going to be like,  I can keep on using React query.
[04:14:41] Um...
[04:14:48] Thank you.
[04:14:49] Which is good because
[04:14:52] Thank you.
[04:14:57] JavaScript is a place where promise made isn't a promise kept. Oh, you all are too good.
[04:15:09] UseEffect is a great example in an API that sounds so good in theory, but oh boy, when you see how people do practice.  I claim synchronizing an imperative and declarative system is just hard regardless of the API. UseEffect is actually one of the better ones.
[04:15:18] And I agree.  I think people give use effect a bad way.
[04:15:22] you know,
[04:15:24] Like it's unfair.
[04:15:26] It's actually...
[04:15:27] quite reasonable
[04:15:29] Um...
[04:15:30] You state your dependencies, you run the function.
[04:15:34] I think the problem, and I think we all acknowledge this, is that useEffect is used
[04:15:40] Way too much.
[04:15:42] And I've thought about this a lot because
[04:15:45] I've been trying to push solid more and more into a,
[04:15:49] derivation only system with solid 2.0. I want to get rid of a lot of the synchronization pieces because the
[04:15:57] are less predictable. And in a sense, React doesn't worry about this as much initially because their whole components are derived. You put some state in, you get the UX out.
[04:16:08] They...
[04:16:10] I don't think they often think about it completely in the same way, especially the core team might think about it, but the React developers themselves don't always.
[04:16:18] and even like
[04:16:21] I say synchronization is easier to think about.  It's more like it's easier to like...
[04:16:26] pseudo code out. Derivation requires you to think about all the implications of the system that could drive this value.
[04:16:32] So when people have two pieces of state, they're like, oh, I have this thing and this is based on this.  They'll just take the one value and write it to the other value.  And then if something else could change it, they write to it there and they write to it there.  Where in some cases...
[04:16:46] It should be more like a switch. It should be like, this is derived from this and this and this and this condition. It prevents you from writing
[04:16:54] duplicate logic at the writing points and let's be more traceable about what's going on.
[04:17:01] .
[04:17:02] It's funny though because
[04:17:05] React components don't like the whole thing. It's just like a giant derived value. They don't care as much. There was an article a little while back. I remember I did with the
[04:17:14] I had a chat where it was, what was it?
[04:17:19] 10.
[04:17:20] years later, yeah, with Mr. Abramoff here in the chat,
[04:17:27] where he comes up with some crazy example about how to like,
[04:17:33] take some...
[04:17:34] React code that's like
[04:17:38] I don't know, like, has a condition in it and takes some data and does all this stuff to it.  And he's like, if I needed to do this and solid this never updates, blah, blah, blah.  So you write it, like, you know, functions, right?  And then...
[04:17:53] But then he tries to refactor it and he shows that he can just change this in solid.  But he's like, how do I do this in solid but duplicate this logic here and do all this and this?
[04:18:03] The problem is I mean it's his fault for choosing the example, but I
[04:18:09] He goes on and explains how complicated this thing is because he actually can just write this code.
[04:18:16] And...
[04:18:16] I was like,
[04:18:18] Where was my edit? I got to a point at the end where I was like
[04:18:31] I was like, why wouldn't you just write it like this?  Now, to be fair and solid, these should be wrapped in functions.  I was just trying to give them the reacting.
[04:18:39] This
[04:18:41] count as this, headings as this, even with his refactor, is way cleaner
[04:18:48] then
[04:18:49] whatever the hell
[04:18:51] like, this is doing again, right? Like,
[04:18:57] Like...
[04:19:00] I know that it took me a minute to figure out
[04:19:04] what the, like...
[04:19:06] how to write it like this, but in the end this is way better code.
[04:19:10] then
[04:19:12] like the...
[04:19:13] the final React version that he wrote.
[04:19:22] Because as you derive data and re-sort it and re-sign, you find things like end up
[04:19:27] deduping or bubbling down into its most primitive parts and it's almost like a math equation that you're solving with your code as you actually
[04:19:36] whittle it down, but it's a lot easier to start in the expanded form as you're trying to figure out what you're actually doing.
[04:19:51] early returns and naturally do when new feature on top of this code. Yeah, because then you just,  you just keep on appending or adding stuff without actually understanding what it's doing,  which is good. Hopefully your components are small enough that you can reason about it, but over time
[04:20:04] No one wants to break a component apart.  There's lots of
[04:20:08] reasons we get here. It was just interesting to me. Um,
[04:20:12] Because
[04:20:14] Yes, it's just a lot easier to kind of write this more imperative logic. It's a reason why reactivity looks the way it does.
[04:20:21] even  uh
[04:20:23] Someone asked Steve Sanderson, like, why knockout?
[04:20:27] It's like
[04:20:28] the code inside the effects or memos or whatever looked like imperative  compared to like,  like RxJS or something like piping streams.  And he's like,
[04:20:37] Honestly, people...  At a certain point, you get to a point where people think in imperative instructions.
[04:20:45] Like...
[04:20:46] the overhead of trying to wire everything becomes
[04:20:50] too much. So like I get the argument. It was just at a
[04:20:55] To a certain degree...
[04:21:00] So
[04:21:01] Like...
[04:21:01] *sniff*
[04:21:05] It's what's the granularity. Is the component the right granularity or is this specific value the right granularity?  I tend to, on the side of reactivity, figure that you can derive stuff at a value level rather than at a component level.  It's a slight difference, but it changes things, as Dan explained, between what we call control flow versus data flow.
[04:21:29] Control flow has like
[04:21:30] if statements,
[04:21:32] in the actual, like in early returns in the actual code where data flow
[04:21:36] everything flows into data, like into variables.
[04:21:41] Right.
[04:21:44] So
[04:21:46] There is a mismatch.
[04:21:48] That being said, when you
[04:21:50] Like this could easily be cleaner react code too, right?
[04:21:54] Like...
[04:21:55] Picture if this was your React code. It's much nicer than what Dan had been writing.
[04:22:02] I think that...
[04:22:05] Sorry, where is it? This one. I think though that we don't lean that way.
[04:22:10] But I was arguing that I think the lack of derived async or derived from props as first-class citizens
[04:22:15] in the post-Hooks world is what got us here.
[04:22:18] Um,
[04:22:19] Which is interesting, selfies, what do you mean? So I gave a couple examples.
[04:22:22] Why does everyone like React Query?
[04:22:26] Well, it's because it's an async memo.
[04:22:30] Right? What do they call it? In a sense, this is an async use memo where you put the depths array first.
[04:22:35] Here's your depths array. I mean, this is static string, but... and then here is your memo function.
[04:22:44] And then here is your result. There you go. Async memo.
[04:22:47] Um,
[04:22:48] Thank you.
[04:22:50] Thank you.
[04:22:51] It no longer feels like synchronization. It doesn't matter what's inside. On the outside, you just have
[04:22:57] Something derived you have an input
[04:22:59] Maybe this fetch a user with an ID or something. This is your ID, right? So you have an input.
[04:23:06] and you have an output.
[04:23:07] It's derived.
[04:23:14] Yeah.
[04:23:15] The other one is Synchron Props.
[04:23:19] Right. It's funny because
[04:23:21] ACD Lite actually, Andrew Clark suggested this, but it was basically...
[04:23:27] You have...
[04:23:29] You have...
[04:23:31] If you ever had like temporary state, like maybe, you know, like controlled
[04:23:35] thing or like a component where the state reset is happens when props change.  So from above,
[04:23:40] something can change, but you're overriding it temporarily until you save it. This happens like
[04:23:46] you know, almost with optimistic updates, an example of this sometimes, or, you know,  where you have some client state you're editing and then
[04:23:52] when you click save or you click out it saves and actually pushes it back to the parent and  pushes it back down again if you
[04:24:00] write a component in react.
[04:24:02] Like this.
[04:24:04] where prop state, this only gets...
[04:24:08] grab the first time as state updates.
[04:24:10] This does not update. This only happens initially.
[04:24:15] And you can't put a use state inside a memo. You can't nest hooks. So your only answer, most people think the answer here is you call use effect.
[04:24:25] Let me actually open a playground to show exactly what I'm talking about here.
[04:24:30] Thank you.
[04:24:32] Right.
[04:24:36] I'm not we don't need to make this render or anything.  Let's just pretend that we have props coming in.
[04:24:41] to our counter.
[04:24:42] and you go const
[04:24:45] Um
[04:24:46] Um...
[04:24:47] Let's go...
[04:24:50] I'm going to use React syntax. It doesn't really matter. So I'm going to get rid of this. Going to get rid of this.
[04:24:55] Okay, so...
[04:24:56] Thank you.
[04:24:57] let's not make it a counter, let's make it a name thing.  Okay, and then we're going to say...
[04:25:03] Name...
[04:25:05] Set name.
[04:25:07] equals
[04:25:08] use state
[04:25:10] props.name
[04:25:13] Now, you might...
[04:25:15] have an input in here
[04:25:18] where
[04:25:20] you're doing some stuff temporarily. You're updating, you're overriding the name. So you might be like, like on
[04:25:26] change
[04:25:28] equals
[04:25:29] something along the lines of...
[04:25:31] set name
[04:25:35] Um...
[04:25:37] I don't know, e.target.value, whatever.
[04:25:40] And then
[04:25:46] I don't know. The component's name is probably not the greatest. It doesn't really matter, but...
[04:25:51] What I'm trying to get at is maybe you also have like a
[04:25:55] Thank you.
[04:25:55] a button here that's like
[04:26:00] I'm just making an example.
[04:26:02] It doesn't really...
[04:26:04] matter
[04:26:05] Um...
[04:26:06] Thank you.
[04:26:08] what it is, but let's pretend that
[04:26:11] on click
[04:26:13] we call like
[04:26:15] props.onSave
[04:26:19] our name or whatever, right?
[04:26:21] Thank you.
[04:26:22] Thank you.
[04:26:23] Thank you.
[04:26:24] perfectly reasonable scenario where...
[04:26:28] Like...
[04:26:29] basically you have a projection of the state...
[04:26:33] And...
[04:26:34] You can save it back up, which shoots it back up a level and might update this.  But the thing is...
[04:26:40] Thank you.
[04:26:42] You...
[04:26:43] If you want this to reset,
[04:26:48] What most people do is they go use effect
[04:26:54] set name
[04:26:56] Um...
[04:26:58] props.name
[04:27:01] props.name.
[04:27:02] There we go. Synchronization
[04:27:04] Done.
[04:27:05] So whenever props and names changes, we can also override from above.
[04:27:11] I feel like this is one of the most common...
[04:27:14] Like variations on this is the other super common scenario where people use, use effects that are unnecessary.  ACD light suggested he's like, wouldn't it be cool?
[04:27:24] if I think nearly all use cases can be replaced by initial argument to use state that actually get derived state from props.
[04:27:29] Use date value previous min/max value previous.
[04:27:32] So they had this idea.
[04:27:35] of basically making it so that
[04:27:40] So
[04:27:40] Um,
[04:27:48] I forget the exact example, but they're doing something pretty crazy here where they're  using a ref and a memo and then like...
[04:27:57] - Thank you.
[04:28:00] There's lots of variations of these kind of problems.
[04:28:04] But...
[04:28:05] Like...
[04:28:07] It is definitely kind of interesting that the idea of state synchronization, this is the only
[04:28:15] top level
[04:28:16] access of props or like thing that doesn't actually...
[04:28:21] Um...
[04:28:23] cause the thing to be recreated.
[04:28:25] Thank you.
[04:28:26] Just on a side, I thought that was kind of interesting, where like this array is top level, this useEffect is actually nested in a function, so would be a useMemo or whatever, but this top level changes every time, but useState just ignores this every time the component rerenders.  Yeah.
[04:28:41] So the answer to how to solve this is
[04:28:45] is...
[04:28:46] key the component from above.
[04:28:48] to say it's keyed on props.name that way whenever props.name works
[04:28:53] Like you can do something like this.  You can go...
[04:28:55] You can above have something like key.
[04:29:00] And then it can be like,
[04:29:01] your name state or whatever.
[04:29:03] That's one way you can do it.
[04:29:05] I also have to pass in...
[04:29:08] name equals name or whatever.  So this is one way of doing it.  You got a key prop.  Another way to solve this problem
[04:29:15] is to
[04:29:18] Um...
[04:29:20] um,
[04:29:21] and what React actually, it does like an extra half render, but it's worth it, is you can go like if...
[04:29:26] props
[04:29:27] Dot name.
[04:29:29] Not.
[04:29:30] Not equal...
[04:29:31] name,
[04:29:34] set prop, you can do this.
[04:29:37] Um,
[04:29:41] Those are better than using Effect.
[04:29:45] Because like
[04:29:46] Effect is too late. It finishes rendering and then it applies it and then does a whole nother render. This at least knows to bail out.
[04:29:54] Mm-hmm.
[04:29:55] before it actually does any of the real work.  It runs it, but then it goes, okay,
[04:30:00] I'm going to
[04:30:02] run it again, but I'm not going to bother diffing and patching and doing the whole thing. It's like,  it runs the component, but it doesn't actually like go in and process the child components or  continues. It just runs this body, creates this JSX, and then
[04:30:16] runs again...
[04:30:18] Because when it goes to finish up, like wrap up, it goes, oh, in the process of rendering, our state has changed again, so we need to run it again.
[04:30:31] Um,
[04:30:32] According to their official docs, this is better than using UseEffect.
[04:30:37] But I think you're starting to get to my point here is that...
[04:30:44] If both are addressed, the need for use effect largely disappears. Although people might still reach for it because when faced with how to make something update, they find synchronization still their first approach.
[04:30:55] Um...
[04:30:58] But let's to answer your question.
[04:31:02] here here from the official
[04:31:05] Thank you.
[04:31:09] Here's from the official React docs.
[04:31:16] I love how much no react when the react does.  I mean, it's because I'm interested.  I couldn't make solid...
[04:31:22] what it is if I didn't understand how React works.
[04:31:26] Right. How do you?
[04:31:28] I don't mean specifically...
[04:31:30] Um...
[04:31:32] focus in on just react but how do you
[04:31:35] makes things better if you don't know what the problems are, right?
[04:31:41] So yeah, here's our exact scenario again.
[04:31:50] Set selection null avoid see...
[04:31:53] Whenever items changes,
[04:31:54] from above they want to set the selection to null. This is
[04:31:58] This is what people do.
[04:32:02] Mm-hmm.
[04:32:04] This too is not ideal. Every time the items change, okay, do they have the key prop example?  Yeah, here, key user ID. Yeah, we talked about this, right?
[04:32:11] Right.
[04:32:13] The list will render with the selection value at first, then it will update the DOM and effects and then finally do it again.
[04:32:19] Start by deleting the effect, instead adjust the state directly during render.
[04:32:23] See?
[04:32:26] Thank you.
[04:32:26] Thank you.
[04:32:28] Yeah, see, there you go. They made another state variable that stores the previous state.
[04:32:34] Previous items, set previous items.
[04:32:36] And then...
[04:32:37] Yeah.
[04:32:38] Yeah, I don't know if my example needed...  Sometimes, like, this is the hardest part for me to reason about React sometimes, is, like...
[04:32:46] When you get there, you're fine, but I don't work in it every day.  I think actual React devs would be more clear on why this needs to be another state variable,  why you can't read just the value from items.  I guess you don't have the previous value.
[04:32:57] No, but you do have the... Oh no, in this case you don't. In my example I had the previous value because technically I was setting it into my own state. So yes.
[04:33:05] set the state
[04:33:07] If items not equal previous items, set the items this. This is exactly what we did. This is rendering during.
[04:33:12] Um...
[04:33:14] And this pad is more efficient than effects. Most components shouldn't need it, no matter how you do it. So they're like,
[04:33:19] - Drive.
[04:33:21] Don't set state just derive.
[04:33:25] get the selection
[04:33:27] by deriving.
[04:33:29] Right. And this is the proper. But do you see the parallel between
[04:33:35] where we started,
[04:33:38] And...
[04:33:39] Const, const, const. Does this not look just like my conversation with Dan Abramoff?
[04:33:44] where
[04:33:46] We started with his final version like this.
[04:33:49] And I rewrote it to...
[04:33:53] const const const
[04:33:56] Thank you.
[04:34:00] like
[04:34:02] Thank you.
[04:34:02] It's...
[04:34:04] It's interesting, right? Because
[04:34:06] The React team and the React compiler and this whole thing will fight to the death to make sure...
[04:34:12] that you can write code that looks like this.
[04:34:16] They will make sure that your right to write
[04:34:21] Mm-hmm.
[04:34:21] Sorry, I should have zoomed in earlier. Code that looks like this.
[04:34:25] Um...
[04:34:26] is preserved.
[04:34:28] Sorry.
[04:34:28] Let's make it even bigger.
[04:34:30] Um...
[04:34:31] Not that person
[04:34:35] Right?
[04:34:36] They will make sure that you can write this code.
[04:34:39] But the reality is...
[04:34:42] you should have written this code
[04:34:47] in the first place.
[04:34:49] Okay.
[04:35:02] - Well, writing to state
[04:35:05] Can it create loops? The derived version can't, right?
[04:35:13] Yeah, I mean, this is kind of going back to Dev's comment, because...
[04:35:18] Once your code looks like this,
[04:35:20] The difference between solid and react is whether or not
[04:35:25] This is in a function wrapper.
[04:35:27] You add the little...
[04:35:29] thunk here
[04:35:31] And
[04:35:32] the code that is exactly the same
[04:35:34] just runs way more optimally.
[04:35:38] Right? Like that's what always confused me.  Cause when I looked at react, this is the problem.  Someone who writes signals and then goes to react,
[04:35:45] like me, they just go, okay, well...
[04:35:50] They already write their code like this.  This is how you write your code.  You think this way.  So when you go to React, you're like, okay...
[04:35:57] UseMemo, you might overuse UseMemo.
[04:36:01] But you already write your code this way.
[04:36:04] So like the most optimal cleanest way to write the code is how you already do it.  So it's like,  it's very hard sometimes when I look at react code,  because I'm just like,
[04:36:13] "What the are you doing?"  But I have years of training myself to write code this way.
[04:36:24] Um...
[04:36:27] Thank you.
[04:36:30] So yeah, is there a nice way to solve this? Well, that's a good question.
[04:36:36] Thank you.
[04:36:38] I had a...
[04:36:40] This is my current solution for Solid 2.0.
[04:36:58] Done.
[04:37:08] Is that a nice solution?
[04:37:19] I'm missing parentheses. Sorry.
[04:37:25] I mean, there are times
[04:37:34] No, no, no.
[04:37:36] I've actually already made this primitive.
[04:37:38] It's, it actually, what creates, what I do is,
[04:37:42] If it's a function, this is the argument, and functions are already a little bit weird, right? Because you have to call a function to the function center.
[04:37:54] Yeah, this updates on prop change.
[04:37:57] Because it is a function...
[04:38:00] This does not because you just initialized it with a value.
[04:38:04] That's where I'm sitting right now.  There might be argument for to handle this differently,  but this is just where I'm sitting right now.  Because...
[04:38:12] The way you implement this
[04:38:15] more or less is you wrap
[04:38:18] uh,
[04:38:19] I mean...
[04:38:22] X.
[04:38:23] Let's go to GitHub. I've kind of already implemented this
[04:38:28] Solid, no, let's go here for a second and then we'll go here.
[04:38:33] We'll go here.
[04:38:35] And we'll go to
[04:38:37] Signals. I haven't touched it this week.
[04:38:41] And let's go to
[04:38:45] Render Effects branch.
[04:38:47] source.
[04:38:50] It's just it's so easy to see that it's probably not index, it's signals.
[04:38:55] TS.
[04:38:57] Um...
[04:39:00] Here it is. If type first equals function memo, create memo,
[04:39:08] Okay, yeah, there's some internal stuff here.
[04:39:10] I can...
[04:39:12] I can...
[04:39:14] I can show you what this code means, though, pretty easily.
[04:39:17] I can write this in solid today without using internal stuff. Give me two seconds. So
[04:39:24] Mm-hmm.
[04:39:38] Mmm.
[04:39:41] - The President and the President, the President,
[04:39:59] Yeah, what's the first argument? It's the function?
[04:40:03] -
[04:40:06] So it's like...
[04:40:09] Yeah, I'm trying to think of the...  This is previous...
[04:40:13] This is the function.
[04:40:20] Don't... This is...
[04:40:23] Probably
[04:40:24] initial value
[04:40:29] Let's make the simpler version.  Let's not worry about the...
[04:40:34] Let's not worry about that. Let's just do this.
[04:40:37] Remove this, options, okay.
[04:40:39] Doo doo doo doo doo.
[04:40:47] .
[04:40:50] Thank you.
[04:40:54] Thank you.
[04:41:06] Actually, I don't even...
[04:41:09] Need this, sorry.
[04:41:12] Thank you.
[04:41:16] Yeah, I'm like overdoing it. Okay, sorry. A lot of the code just like
[04:41:21] disappears if you understand what I'm doing here.
[04:41:24] previous
[04:41:25] previous
[04:41:27] It doesn't really matter.
[04:41:30] We're not going to worry about the untrack.
[04:41:32] We're just going to...
[04:41:33] I'm just simplifying it a little bit. But essentially, the idea is
[04:41:39] And then we can get rid of this.
[04:41:41] Thank you.
[04:41:42] .
[04:41:45] Okay.
[04:41:47] It's a memo of a signal.
[04:41:50] Yeah, here we go.
[04:41:52] Hope this makes sense to you.
[04:41:56] It's a memo of a signal.
[04:41:58] is the reason that this works. So it actually reads it. So,
[04:42:02] - Yeah.
[04:42:05] Like, essentially,
[04:42:08] In this way, whenever this changes, it's a little inefficient.  It creates a new internal signal.
[04:42:17] But because the read out here
[04:42:21] reads the memo,
[04:42:24] the first place gets the signal or rights to it,  it means that,
[04:42:28] Every time the props change, you create a new signal.
[04:42:30] it's basically nested. And then every time you internally change it,  you just use that signal internally until the props change again and replace it
[04:42:37] with Signal. It's like a higher order...
[04:42:40] signal or something essentially like mechanically, this is better than an effect because
[04:42:46] We know the dependencies.
[04:42:49] The problem with an effect is you break the dependency link. It's not derived. You write to it, but you have no clue what it depends on. The difference is,
[04:42:57] This
[04:42:59] I mean, we're not using name anywhere. That's the most ironic thing about this example. Like, whatever.
[04:43:05] This signal here
[04:43:07] For name,
[04:43:09] knows that it depends on
[04:43:14] props.name because it reads from the memo as part of its accessor. So it knows that when we
[04:43:23] updateprops.name,
[04:43:25] It goes, okay, what could have changed? And it gets all the way down to this render effect and then it goes, okay,
[04:43:31] I'm going to see if it's actually changed and I'm going to execute it.
[04:43:34] And then it's going to go, okay, blah, blah, blah, evaluate this.
[04:43:37] And then...
[04:43:38] you know, in the render effect and do the pinpoint update.
[04:43:41] It actually
[04:43:43] Like the problem with the effect is it doesn't know. You run the effect and then it like you, you could, let's say you did a change that.
[04:43:51] like let's say props.name is used directly...
[04:43:54] Like whoever passed it in uses it directly somewhere else.
[04:43:58] what would happen is if you updated it,
[04:44:00] It would update the DOM in the one place, trigger the effect, the effect would call
[04:44:06] set signal and tell it to go, okay, now you notify and now you do it.  It does it in two passes. Same as React.  We don't re-render whole components, but you do a double cycle.
[04:44:17] Right? You...
[04:44:18] do you basically run everything,  like all the fine grain updates,  and then you run all the fine grain updates on that.  Not a big deal, 'cause they're fine grain,  you don't have to re-render any components,  but this approach,
[04:44:30] does it in a single pass because it's derived.
[04:44:40] Thank you.
[04:44:43] It's confusing.
[04:44:44] It's line 15.
[04:44:49] is
[04:44:51] I mean...
[04:44:53] Fine, let me remove, I'm going to make this even easier. I'm going to get rid of the previous value.
[04:44:58] Um,
[04:44:59] Thank you.
[04:45:04] Okay, yeah, yeah. Pretend this is function create
[04:45:08] memo signal or something. This is just a mode switch, but
[04:45:12] It would be like this.
[04:45:16] Sorry.
[04:45:18] I basically took part of
[04:45:22] of...
[04:45:24] create signal here.
[04:45:26] See, now...
[04:45:28] This return statement is crazy, but it's it's
[04:45:33] This...
[04:45:34] is
[04:45:36] The Reed...
[04:45:37] side of the tuple.
[04:45:40] And this is the right side.
[04:45:46] Right?
[04:45:48] So I'm just returning the array.  I love the way this composes, right?  Basically make a computer or a memo of signal.
[04:45:55] Um,
[04:45:57] And then I just decided that like at that point I was like,  why don't we just build this in?  Because when I'm creating state,
[04:46:03] in a component most of the time just gonna set the initial value.
[04:46:06] But occasionally I might be like, yes, I'm creating state. And don't get me wrong. If I build this, it'll be abused. People will use this where they shouldn't, they never need a setter and they should have just used a create memo or something.
[04:46:16] They just need a memo of a value.  You don't need a memo of a signal of a value.  But the fact that this is a pattern that you can just like, I mean, we could make this a special primitive, but that's too much.
[04:46:28] You come in, you create some state, and you're like,  oh yeah, okay, it's create signal, blah, blah, blah.  And then you're like, why is this not updating?  Well, it's freaking not reactive, so.
[04:46:37] You know.
[04:46:38] Thank you.
[04:46:39] like in a sense
[04:46:42] If
[04:46:42] I'm almost arguing that this should usually never be a thing.
[04:46:50] If you're if like this is fine.
[04:46:54] But if there's the potential of props changing,
[04:46:59] you probably should always wrap it, which is why I'm getting here. Uh,  by putting in the core primitive,  it encourages people that when they actually get,
[04:47:08] something reactive as a prop that they care about it changing in their component, they should wrap it
[04:47:13] rather than just set it in.
[04:47:16] That's what you do, right?
[04:47:18] Like...
[04:47:19] Think, like, I turned this off, but ESLint will complain about this.  ReactiveArialProfName should be used within JSX to track scope like a create effect,  or inside event handler, or else the changes will be ignored.
[04:47:31] Look at that ES splint warning go away.
[04:47:34] Thank you.
[04:47:35] Right?
[04:47:40] Thank you.
[04:47:43] - Thank you.
[04:47:44] Thank you.
[04:47:44] You're getting to it. It is possible. You just have to return to function to function, right? We already have this problem. I don't know if you're like our concern in in salt today.
[04:47:55] If you set it with a function,  like let's pretend we do this,  it doesn't make it reactive.  But when you go to set...
[04:48:02] name here.
[04:48:04] and you pass function, it won't do what you think because we support
[04:48:07] this version, right?
[04:48:08] Like previous value passing. So if you want to set a function you have to actually always make
[04:48:14] Pass in a function to set the function you have to use the function for always and
[04:48:20] That's just
[04:48:20] the trade-off for us being able to do the self-reflecting version.  This is the same.  If you want to set a function, you always...
[04:48:28] have to set a function. And I did some code in here because you're like, Oh, that's kind of sucks. You're creating these extra memos.
[04:48:36] But I did something really cool in Create Memo.
[04:48:39] that you all might actually think is kind of cool.
[04:48:43] When we create the memo, create the computation, this is creating a memo internal, right?
[04:48:48] The return value goes if node
[04:48:52] read it.
[04:48:54] If node sources length,
[04:48:56] if not node sources length, node equals undefined return value. What this means is if
[04:49:01] you do a computation
[04:49:03] that reads from nothing reactive.  Let's say it's just a function or a string.
[04:49:09] It will...
[04:49:11] This await is just read. This has to do with async. But if there's a node, it will read it and get the value.
[04:49:19] But if there is no sources, it will undefine itself.
[04:49:24] and return the value. And because there's no sources, it can never update again. So the next time the function runs,
[04:49:30] it will go no undefined and just return value, which means this,
[04:49:35] Node here gets garbage collected.
[04:49:37] which means that
[04:49:39] Essentially, we free up the memory of the memo if there's nothing reactive in it. Now, if I was really going further, we'd actually cache the memory for this and reuse it for the next node. I haven't implemented that yet. But the idea here is that memos that become or any reactive, I guess mostly memos, memos that become unreactive can free themselves.
[04:50:02] So the overhead is the API consideration of knowing you have to do this.  But since we already do this, the stretch to doing this, it seems very small to me.  It's actually makes it more consistent.
[04:50:13] Um,
[04:50:14] Because right now, today...
[04:50:16] You do this.
[04:50:18] and you still have to do this.
[04:50:21] This is actually kind of
[04:50:23] telling, I think.
[04:50:26] that being said
[04:50:29] - Thank you.
[04:50:30] Yeah.
[04:50:31] I'm just...  As I said, this is just an example of one way one could solve this problem.  But it shows that...
[04:50:42] between this, which is
[04:50:44] This is our...
[04:50:45] are
[04:50:47] are sync primitive and this
[04:50:53] Create async.
[04:50:57] Thank you.
[04:50:58] Fetch.
[04:51:00] user props.name
[04:51:06] Thank you.
[04:51:08] Thank you.
[04:51:11] Where's the effects?
[04:51:18] Thank you.
[04:51:20] Right. This is an example of
[04:51:23] forcing people's hands a little bit, but
[04:51:26] I mean, there's one more level there.
[04:51:28] here that's going to make people even want to use effects even less than solid, um, which comes up in the chat. It's so funny. Um,
[04:51:35] Uh, because I wasn't like trying to advertise this, but, uh,
[04:51:39] Oh, where is it?  Um...
[04:51:42] The last little bit of this one.
[04:51:46] Where am I not in here?
[04:51:51] I guess it was this one.
[04:51:55] No.
[04:51:56] This is always weird when you're like...
[04:52:00] Yeah, okay, fine. Let's go back. I'm going to go back to this thing.
[04:52:04] Of course, Dev comes in and goes, wait till you see what solid is cooking up.
[04:52:08] And I thought he was going to talk about
[04:52:11] this, which is freaking sweet. Instead,
[04:52:14] Instead, what he does is show that
[04:52:18] we're looking at splitting the effects,  like the front and the back end effects so that the reactive part is the  tracking function in the front.  And then you do the effect in a separate way.
[04:52:27] thing.
[04:52:45] Yeah, you can do this too. That's even more optimal. Yeah, definitely.
[04:52:50] Like you've skipped the intermediate
[04:52:53] Well, I guess you're keeping it on object, but yeah, whatever.  But he actually highlights this, which people are like,  what are you doing?  It's dependency arrays.
[04:53:00] - -
[04:53:02] But the reason for this is...
[04:53:06] pretty powerful.  I've talked about it in separate streams.  Um...
[04:53:15] But yeah, there's good reasons for this. Mostly that
[04:53:20] we know you shouldn't be reading from reactivity in this side.
[04:53:24] You should only read from it on this side.
[04:53:27] ESLint for that might be a little bit more fun.
[04:53:31] And we can run this side in concurrent rendering and stuff.
[04:53:35] Um, getting back to my title tag problem, we could like calculate the titles here.
[04:53:40] without worrying about people trying to like us setting it here.  Like my problem before is render effects run too soon and effects run too late.  In this world, effect and render effects are almost identical on the front half.
[04:53:53] They run soon, but the effects themselves, they just get sorted. You do the render effects before the effects. But the split is between these two functions.
[04:54:02] Essentially, you can run all the
[04:54:04] the stuff, know if it's async, know if you have to suspend, even for effects,
[04:54:09] for the user before running any effects. This is kind of a shortcoming we haven't solved today.  And the reason why I realized I was in, I was in the middle of making, uh, an example for, uh,
[04:54:19] What's that thing?  For the meta tag, I was working on it.  And I switched between pages and I saw Undefined's profile.  And I was like, damn it.
[04:54:29] And I realized immediately what my problem was. It was because
[04:54:33] the render effect, which was doing us good work on the server in the client,
[04:54:38] was causing us to
[04:54:40] Um,
[04:54:42] even though that section of the UI is suspended,
[04:54:45] the render effects on creation always run so that you can render the page.  And this side effect was there. And the problem is if I made it into an effect,
[04:54:53] which would delay it and make it, you know, function properly, which update the title.
[04:54:58] until it actually had the data.
[04:55:01] It wouldn't also read the async thing, so it wouldn't know it'd have to wait. So I found
[04:55:07] One of the first...
[04:55:09] pretty late in the cycle places where I,
[04:55:12] really
[04:55:13] have been punished by not splitting the effects
[04:55:17] in current solid, but in any case.
[04:55:20] There's a lot of interesting implications that come with splitting like this because you can say you can never write
[04:55:26] in the tracking scope.
[04:55:28] Right, because right now in create effect someone can write and it's legit. What you can say is you can only call set state in here. In memos, in whatever you cannot write here. You can only write on this side.
[04:55:39] Um...
[04:55:40] the separation is,
[04:55:42] makes things incredibly clean.  I know people...
[04:55:45] aren't going to like this though.  So this might even discourage them further.
[04:55:50] So they go from being able to write like...
[04:55:53] Uh...
[04:55:55] Where did he write it? They go from being able to write stuff like this, which is easy using effects obviously,
[04:56:00] Um,
[04:56:01] to
[04:56:02] to having to write something like this.  I guess you can skip the function, just go--  which is the original one right here.
[04:56:10] because it is a function, you go create effect count, console.log count.
[04:56:14] Um,
[04:56:18] How does this work with multiple times? Well, you can just
[04:56:21] put in...
[04:56:23] Eat.
[04:56:24] you generally like...
[04:56:27] Thank you.
[04:56:28] Thank you.
[04:56:30] Like,
[04:56:31] An easy way to do it would be an array.
[04:56:33] a
[04:56:34] B...
[04:56:35] C
[04:56:36] You could also make it an object.
[04:56:38] - Bye.
[04:56:39] Maybe...
[04:56:40] The biggest reason is you want to be able to...  This is not convenient.  Don't get me wrong.  This is less convenient.  I understand why this is...
[04:56:49] less convenient
[04:56:51] But...
[04:56:53] A, B, C
[04:56:57] The biggest point here is you actually want to pass the stuff from the front half to the back half. React doesn't give you this stuff, which is crazy to me because this gives us...
[04:57:08] the ability...
[04:57:09] to keep this within the concurrency.  Basically, Solid has the ability to call this function with whatever it needs to.
[04:57:17] Stuff you close over has this problem of concurrency that like
[04:57:21] You can be reading old versions or stale versions depending on what version of the thing you're making. But this
[04:57:28] We can ensure that the right version gets passed to you here.
[04:57:33] Right.
[04:57:34] because it's being fed through. And the benefit, as I said, of doing the pass-through approach, is that you actually never need to read anything reactive
[04:57:45] on this side, in theory.
[04:57:47] Which means that
[04:57:49] stuff like strict mode that I haven't got into yet, you know, I did on that stream. It's possible  if we really wanted to get into like strict mode conversations where we're saying like,
[04:57:58] error if people try and access reactivity at top level and components or in set timeouts or places it won't track. Tell them that they're doing something wrong. At least warn them.
[04:58:07] this is another thing in that category. Um, as I said, we can protect rights to make people,  to try and prevent people from writing on this side. We can, we can prevent reads on this side.  So like this is,
[04:58:19] I get it. It's more. It's not a good API. It's not one that, like, from the perspective of, like,
[04:58:25] people are happy to use
[04:58:28] but it's exactly what it needs to be
[04:58:31] And my hope is that you just don't
[04:58:34] It...
[04:58:35] Why reach for this when you can do this?
[04:58:43] Thank you.
[04:58:47] Create resource for transitions at the Stealth Stealers you write unless using Function Army is passed to the Fetcher.
[04:58:55] Yeah, I mean, Crate Resource is actually a lot of similar. He's on the split, right? You have the tracking scope.
[04:59:01] Create resource runs at render effect time, like it's on the pure half of it.
[04:59:10] - Yeah.
[04:59:11] Yeah, I mean, I've known about this gap in solid since I came up with our async system. I've been this is something I've wanted to address for like five years. It just you everyone wanted a meta framework.
[04:59:30] Yeah, like how would you do this with an array you would just go and
[04:59:34] Thank you.
[04:59:35] Yeah, I mean, you just go A, a razor easy, C.
[04:59:40] And then...
[04:59:42] A...
[04:59:43] B, C, done, right? That works.
[04:59:49] Thank you.
[04:59:52] Yeah. Here...
[04:59:54] How would you create a signal if you didn't want it to update?
[04:59:58] my idea
[05:00:00] strict mode.
[05:00:01] is that
[05:00:02] the way to opt out of stuff is to just explicitly call on track
[05:00:07] I know this is...
[05:00:08] not
[05:00:09] the happiest thing in the world,  but it,
[05:00:13] I'm actually thinking that the injection of the strict mode stuff is on track. So in a sense,
[05:00:18] untrack,
[05:00:20] is...
[05:00:20] has the option of having like should error, you know, like as a second prop or something.  And generally speaking, by default, untracking is not should error.
[05:00:29] So it overrides the parent context.  Like if the component was untracked,  which it does with should error,  you calling untracked with should,
[05:00:38] default way with it shouldn't error will cause it
[05:00:41] to
[05:00:42] work fine. And then from that perspective,
[05:00:46] Um...
[05:00:48] Like...
[05:00:49] you always have the ability to opt out of this behavior.
[05:00:54] Thank you.
[05:01:01] The problem then is you, and it's the same problem I have with on, is
[05:01:05] These are functions, that's fine.
[05:01:08] Let's do this, props.
[05:01:11] A.
[05:01:13] props dot B
[05:01:16] props.c
[05:01:18] So the only reason I mention this one is because this is one of my biggest pet peeves with Onn is...
[05:01:25] This works.
[05:01:29] This...
[05:01:30] will never work. You actually have to change it to
[05:01:34] Thank you.
[05:01:39] Thank you.
[05:01:40] Second problem with this is as
[05:01:44] the framework code side of things, now I have to write something that iterates over the arrays and handles all this stuff.
[05:01:53] Funnily enough,
[05:01:54] And you look at the on code, all the code for on is basically this. Funnily enough, if I just did this,
[05:02:01] I just call the function and pass it through. I literally like there's no additional iteration.
[05:02:12] I know Vue does it and a few others like to it.
[05:02:17] assuming that something is a signal or a function signature here, like as a list is not
[05:02:23] Yeah, I'm not.
[05:02:27] Yeah, I'm
[05:02:28] This is...  Like, it's just...
[05:02:30] simpler.
[05:02:31] It's not necessarily easier, but it's just way simpler.
[05:02:45] I'm not saying we have one.  It was just something I was thinking about.  Ever since that conversation about the dev signals versus signals thing  and the whole crazy...
[05:02:56] Where was it? There's...
[05:02:59] There's a whole bunch of stuff in this article.  Devin Gavitt's thing, you know, basically...
[05:03:05] Ever since this,
[05:03:07] We have ESLint warning, but there's been a question like, should we just be real jerks about it?  It seems like...
[05:03:14] I don't know where we sit.  When Rust was getting popular, people were kind of like...
[05:03:19] You know,
[05:03:20] Just break. Just shout at people. Tell them they're doing something wrong.
[05:03:25] You know, it's like the extension of the TypeScript thing.
[05:03:28] We're getting kind of back in a more middle ground zone,  but yeah, I mean, there's a real temptation  to just be like, nope.
[05:03:36] If you want to do this, you have to untrack it.
[05:03:39] Explicitly
[05:03:42] I have a whole stream on this, by the way.  Um...
[05:03:46] *sigh*
[05:03:48] Um...
[05:03:50] Sorry, my headphones jam up here.  How long ago did I do this?
[05:03:55] Two years ago? No, where was it?
[05:03:59] It was...
[05:04:00] It was around 1.7, wasn't it?
[05:04:04] Yeah, yeah.
[05:04:07] strict mode.
[05:04:09] Thank you.
[05:04:10] Yeah.
[05:04:11] Thank you.
[05:04:15] Thank you.
[05:04:17] Not easier, but simpler. What does that mean?  It means less moving parts.
[05:04:22] Honestly, I
[05:04:24] This is like one of React's core core tenants.  And it's one of Solid's core core tenants.  And it's something that I don't know if...
[05:04:32] is as
[05:04:33] Like, I don't think it's one of Vue's core tenets, but...
[05:04:37] for example, when I was talking about differences in philosophy, um,
[05:04:42] I've talked about this before on stream, but simple versus easy.
[05:04:47] Thank you.
[05:04:48] -
[05:04:49] Thank you.
[05:04:50] Civil means uncomplicated.
[05:04:52] Easily understood. It's funny when you use easy.  Or not common to deal with.  Easy means not hard or difficult to do.
[05:04:58] I've written my own definitions about this before.
[05:05:02] But if you just Google it, you're going to see tons of people talk about simple versus easy.
[05:05:10] Obviously you want to be both but often there's actually a trade-off.
[05:05:15] Yeah, is that the...
[05:05:17] Yeah, that talk.  Yeah.
[05:05:21] Rich Hickey. Yeah. Yeah.
[05:05:23] Um,
[05:05:24] Thank you.
[05:05:27] Yeah.
[05:05:28] Anyway.
[05:05:30] Thank you.
[05:05:31] Thank you.
[05:05:32] I'm hoping...
[05:05:34] The effects API is an interesting one, I understand.  There's very good reason for it.  It is actually like React...
[05:05:39] Um,
[05:05:40] In a sense, like we're adding back the dependency array, but
[05:05:45] So
[05:05:46] the implications of this.
[05:05:49] and the implications of stuff like this
[05:05:51] I think I'm excited for 2.0 because I think...
[05:05:55] this might be when we finally really step out of the shadow. It's a scary proposition. It's just so funny because I've told people this before, like we had signals before hooks. I did get this API from React and I was like,
[05:06:11] I would do it again. It had nothing to do with trying to match React APIs. I did not care about matching React APIs at the time. It's worked well for us. I picked JSX because it was available. I did this because it's the right thing to do.
[05:06:24] It wasn't because I was like, "Oh, it looks like React."
[05:06:29] So like...
[05:06:32] You know, it's funny because there's been times that we've also made decisions different than React and then they ended up coming around like the argument order for use transition.
[05:06:40] Um...
[05:06:42] But I think maybe with this work towards primitives like this, we actually...
[05:06:49] the way you write code might get
[05:06:51] you know,
[05:06:54] you know, might change a bit more.  And I know people like the migration story, but I think...
[05:07:02] when you
[05:07:03] Take something.
[05:07:04] that looked like that example, you know,
[05:07:07] Um...
[05:07:08] you know, like one of these examples that we saw up here and just like literally just go like,
[05:07:17] like
[05:07:17] What would this one become?  You state...
[05:07:21] Thank you.
[05:07:23] arrow function...
[05:07:26] items or
[05:07:27] Eh.
[05:07:32] Yeah, I don't even find it. I don't know. They're assuming a bit in this, but yeah, basically you state
[05:07:40] Yeah, this one's an interesting one, isn't it? Because you take the previous
[05:07:44] Yeah.
[05:07:55] Why wrap the signal rather than an option second parameter? Are you talking about for the...
[05:08:03] For the crate signal stuff?
[05:08:05] Here?
[05:08:06] Um...
[05:08:07] it's debatable.  The one thing that I liked about this,  because you can still pass initial value,  is what I'm thinking,  is that...
[05:08:15] This has the same signature as create memo, essentially.
[05:08:21] Oh, on track? Well...
[05:08:25] You could, but again, this is like...
[05:08:28] Now, untrack
[05:08:30] True...
[05:08:34] Or is that...
[05:08:45] Um...
[05:08:46] I'm not quite sure what I'm...  All of these are like...
[05:08:51] Like, I hate configuration objects, if you can tell.
[05:08:57] you know,
[05:08:58] Like...
[05:09:00] It's funny, there's places where it belongs  and a perfect example is React Query went from being like,
[05:09:08] This
[05:09:09] like split to like being an object where you have function and stuff.  And it, as you get more options,
[05:09:14] you do need to go down that path where you have options objects and all our primitives actually have options objects.  But I'm very much still of the mind of like the primary thing should just be an argument rather than just
[05:09:25] big options. It's just verbose the stuff out. It's completely an aesthetic style thing, but
[05:09:31] I like when the simple code is incredibly clear.
[05:09:36] um
[05:09:38] And I know you get more labeling and stuff with you know, if you go
[05:09:41] You know, like, why don't we do this?
[05:09:43] function this you know
[05:09:47] Name this
[05:09:50] Thank you.
[05:09:51] There's just...  There's something...
[05:09:54] No.
[05:09:55] There's just something about this that just always sits with me wrong.  I don't...
[05:10:00] Yeah.
[05:10:05] Yeah, I mean, but then you have to, well, first of all, you need to wrap the props, not naming a function because otherwise it won't be able to untrack it to get the scope.
[05:10:13] Um,
[05:10:14] Like, you can't just...
[05:10:17] put untrack true, it still needs to be a function that a further execution. Secondly, the untrack true, like, now what am I doing, I'm looking at an option argument to then
[05:10:28] put an additional
[05:10:29] Conditional like I guess it makes your life easier, but it makes the library code bigger, which means that everyone pays the price.
[05:10:37] I don't...
[05:10:37] Like...
[05:10:40] If it was the primary, if it was,
[05:10:42] the 80 or 90% use case
[05:10:46] I would consider it.
[05:10:48] But if it's, if we are thinking that this is like the 10% use case, the times you  want to untrack when doing this, it's not worth the convenience.
[05:10:58] for the fiddliness of like,
[05:11:01] more conditions and more checks. That's just like my perspective on things.
[05:11:07] Right, right. Discoverability through types.
[05:11:11] Although to be fair,
[05:11:14] Okay.
[05:11:15] You don't need discoverability through types, I don't think, when literally, like, it takes a function.
[05:11:22] So
[05:11:22] Um...
[05:11:25] I mean, yeah, you see, I just said, I think there's a, I think this is one of my challenges is because I liked JavaScript because it didn't have types.  That's like, was my favorite part about JavaScript.
[05:11:35] I...
[05:11:36] I've worked on type languages in the past.  I only really got to go back into JavaScript, you know,
[05:11:45] a certain chunk into my career. I was doing back-end before then.
[05:11:49] Um,
[05:11:51] I think sometimes, with the most type kind of stuff, it doesn't sit with me.
[05:11:59] quite as nicely because
[05:12:01] I got to a point where everything was clean and didn't have all that noise.  So it's like, it's, it's, it's, it's tricky to convince me to do anything for TypeScript safe that would get,
[05:12:12] in the way of the elegance of when types aren't there.
[05:12:22] Thank you.
[05:12:23] This assumes it's an object, but it could be any function.
[05:12:30] This would work if
[05:12:31] props was a signal and
[05:12:34] But
[05:12:34] I mean, because if it's a proxy or a getter type thing, you would have to basically
[05:12:42] unwrap all the accessors
[05:12:44] On it.
[05:12:47] Thank you.
[05:12:48] Um...
[05:12:50] So you'll be accessing, I think,
[05:12:52] Every property in at least in the property description.
[05:12:57] Thank you.
[05:12:59] It's not DHH-pilled. I mean, okay, I was a CoffeeScript developer, so in a sense, you know,
[05:13:06] I thought Ruby was probably pretty elegant.
[05:13:09] Um,
[05:13:10] But yeah, I mean, I'm just one of those people who TypeScript has done nothing but get in my way since I started.
[05:13:18] I... I...
[05:13:19] I've written articles about my experience with TypeScript. I think it's important
[05:13:25] I think...
[05:13:26] I've done stuff like use server, were inspired specifically.
[05:13:31] for TypeScript server functions.
[05:13:34] because of the importance of the contract.
[05:13:37] But, like...
[05:13:39] There's times that types work for you and there's times that types work against you.  As long as you don't let the times that types work against you influence your
[05:13:49] your decisions, then you're good.
[05:13:57] Types are different. They are for easiness, not for computer. They're a super linter, essentially.
[05:14:03] Right.
[05:14:04] And I think that's good, except for when it would force you to actually
[05:14:10] Like they're like also form a documentation. They're better than comments.
[05:14:14] But like there's like a
[05:14:17] There's a point at which
[05:14:22] And I mean, a classic example is using the functional form of show components in solid, like this form.
[05:14:31] show when
[05:14:35] user
[05:14:37] Thank you.
[05:14:38] Thank you.
[05:14:39] This one...
[05:14:43] And there's...
[05:14:45] While this is a solid problem, obviously, it's not...
[05:14:51] Sorry, it's not.
[05:14:53] Thank you.
[05:14:54] It's not completely...
[05:14:56] Like any JSX who tried to do this would have this problem.
[05:15:02] You have to.
[05:15:03] Do this.
[05:15:04] Because even though we know it's gonna be there,
[05:15:07] TypeScript from JSX doesn't know this is an if statement.
[05:15:10] Like, we just can't possibly know this.  There's also the second problem of this being actually a function,  which is not idipotent by definition.  So again, TypeScript can't even...
[05:15:20] No.
[05:15:20] So,
[05:15:22] I did this forever and I like this.
[05:15:24] It's fine.
[05:15:26] But there are people who...
[05:15:28] I mean, we have this in solid.
[05:15:31] You can do this.
[05:15:33] And now you don't need...
[05:15:36] to do this.
[05:15:37] Thank you.
[05:15:38] There we go.
[05:15:39] Right?
[05:15:42] This is stupid.
[05:15:44] But I like...
[05:15:46] I get...
[05:15:48] why like
[05:15:50] It.
[05:15:50] it brings more comfort.  So, like, there's value to it.  But, like, this is, like...
[05:15:58] Thank you.
[05:15:59] It's tricky when you're trying to design a system of things where you want to accomplish something which bends the capability of
[05:16:06] the expectations
[05:16:08] of languaging, like putting JSX, which is literally a template language, it is not JavaScript.
[05:16:13] And then, like...
[05:16:14] have expectations for things to work
[05:16:16] properly, you have to pick one. And in the case, TypeScript picked React, right?
[05:16:23] Or to be fair, it couldn't really pick anything else.  Like how would it know what you're doing?  You do this kind of pattern react all the time to a certain degree.  You don't have functions, but like there's just no way
[05:16:36] to know, right?
[05:16:38] And...
[05:16:41] Thank you.
[05:16:42] It's a tool that helps you.
[05:16:47] It's just not...
[05:16:49] It's not
[05:16:50] Yeah, you know, that's exactly what it is.
[05:16:53] Thank you.
[05:16:58] Thank you.
[05:16:59] Thank you.
[05:16:59] April's though
[05:17:01] I mean, we do already allow this.
[05:17:03] Thank you.
[05:17:04] Thank you.
[05:17:08] People, yeah, I mean...
[05:17:12] Thank you.
[05:17:13] Thank you.
[05:17:14] Like
[05:17:16] I...
[05:17:18] Thank you.
[05:17:19] I've had some amazing people work with me on the team and in the team on TypeScript solve stuff because of the challenges we face, like trying to bring signals in, you know, and doing this stuff.
[05:17:33] If you have ideas, probably I'm not the right person to talk to about them because I don't actually get it.
[05:17:44] Yeah.
[05:17:44] Right. I mean, this is, again, we're talking about how can you take good UX and get to good DX. We make concessions for types.
[05:17:50] Definitely.
[05:17:52] That being said, I've never had a problem with an API that just takes a function.
[05:17:57] as an argument.
[05:18:05] Anyway
[05:18:07] regardless of my personal feelings on TypeScript,  I think that...
[05:18:13] - Yeah.
[05:18:17] Yeah.
[05:18:20] I think that with
[05:18:24] Thank you.
[05:18:24] these mechanisms in place, it changes things significantly. I think in a sense that like
[05:18:33] Even...
[05:18:35] Where was I mean?
[05:18:37] Even like if React had viewed things like this too, I think we might have had
[05:18:42] less
[05:18:46] like at the time of hooks i think we would have had less use effect as well
[05:18:50] I think this is something that took time to realize like
[05:18:54] And I think
[05:18:55] that it's hard when you know the framework at the level that the core team does and just
[05:19:00] can like see the patterns of...
[05:19:02] I have this
[05:19:03] blinders as well. You just know that people are just going to do really
[05:19:08] unexpected, impossibly dumb stuff. And as I said,
[05:19:13] Understanding that largely is what makes Dan fight to the death here.  Sorry, not this example, this example.  Yeah.
[05:19:22] I'm letting you write code like this and then writing a compiler
[05:19:27] to try and optimize this for you.
[05:19:29] Um,
[05:19:31] to get results from,
[05:19:33] that
[05:19:34] aren't even quite as good
[05:19:37] as if you
[05:19:38] just written it
[05:19:40] like this.
[05:19:41] So...
[05:19:44] Yeah.
[05:19:45] Thank you.
[05:19:46] - Thank you.
[05:19:47] I think I'm going to call it a day. I think I covered everything that I wanted to cover.
[05:19:55] I don't think I have any more bookmarks.
[05:19:58] Oh, I do have one more.
[05:20:01] I don't care though.
[05:20:03] It's just a Guillermo post about why CDNs don't work.
[05:20:10] Which is...
[05:20:10] ironic coming from Vracell but
[05:20:15] I think he's explaining why everyone should use PPR.
[05:20:18] He's right, though, about streaming is the only way to get...
[05:20:22] Oh, man.
[05:20:24] No, I'm over time.  I'll talk about... I might talk about this next time.
[05:20:31] Thank you.
[05:20:32] Thank you.
[05:20:34] - -
[05:20:38] - Thank you.
[05:20:39] Yeah, there's a lot of things that...  Like, I just...
[05:20:42] I remember the...  It's gotten better, but when I first built Solid...
[05:20:46] Um...
[05:20:48] there was like
[05:20:49] Definitely I hit walls almost immediately with JSX and like
[05:20:53] We had suggestions, like, can I make a div a div?  Well, apparently...
[05:20:57] Not so easily.  And it's always going to be...
[05:21:00] that kind of challenge. I'm happy where things are enough. The only thing I wish is that I could
[05:21:05] denote a function as being idipotent so that we could actually type check or like actually  null check signals.
[05:21:13] Sorry, I should have mentioned this. Because of our new work in Create Async, making non-nullable async,
[05:21:18] the number of times you'll need to null check
[05:21:21] will reduce drastically in the future because
[05:21:25] Sorry, just...
[05:21:26] Oh, two seconds.
[05:21:29] This...
[05:21:31] user
[05:21:33] In this example, assuming that fetch user is always a promise of user,
[05:21:38] in SOLID 2.0, will always be user.
[05:21:41] it will not be null user, it will just be user, which means that the need for the null checks will go down significantly, because of the new way we're approaching async. So,
[05:21:52] I...
[05:21:53] the
[05:21:53] when I complain about this, it's possible
[05:21:57] that your code will just look like this anyways. And...
[05:22:02] You won't like...
[05:22:04] That's how you solve the problem. You solve the problem by not making
[05:22:08] uh,
[05:22:10] you know, an extra wrapper function for everyone. You solve the problem by getting rid of nulls.
[05:22:15] Um...
[05:22:17] Yeah.
[05:22:25] I
[05:22:28] Anyway, okay. I am...
[05:22:30] Done.
[05:22:33] I am done for real this time.
[05:22:37] Quickly see if there's anything more to shout out on Twitch.  I do not see anything more to shout out on Twitch.  Like on YouTube if you haven't already.
[05:22:45] Otherwise, thank you everyone for joining me today.
[05:22:51] Yeah, we'll just catch you all next time.