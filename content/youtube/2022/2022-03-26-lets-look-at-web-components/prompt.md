---
title: "BEWkLXU1Wlc"
slug: "BEWkLXU1Wlc"
duration: "3:03:55"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/BEWkLXU1Wlc.m4a"
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
[00:00:01] Hi, welcome to my stream tonight.
[00:00:05] We're kind of going out on a limb a little bit, not our typical topics today.
[00:00:11] because I wanted to talk about web components.
[00:00:15] I actually have a fairly long history with web components and,  uh,
[00:00:19] I mean, a large part of why I haven't covered them in the stream is
[00:00:24] Um,
[00:00:25] While they have very good uses,
[00:00:28] And would that make a lot of sense?
[00:00:31] For me, at least, they're kind of a lower level primitive, which doesn't always make it really relevant. I know some people have different opinions, and I think today's stream is actually going to be a little bit controversial for that reason.
[00:00:48] essentially, there's a lot of
[00:00:52] ideas that go into building something for the platform for everyone to use and
[00:00:57] it's really complicated to kind of balance those different aspects. And in some ways,
[00:01:03] Web components have almost become
[00:01:06] How should I put it?
[00:01:09] like pinnacle example or like the primary example of where, um,
[00:01:14] you can see the sort of discrepancy between how things are used in the wild and
[00:01:19] maybe the intention of
[00:01:21] or who knows, maybe the intention was never right in the first place. So, um,
[00:01:26] I think it's going to be good to talk about this because while –
[00:01:33] Maybe it's not the most interesting
[00:01:36] topic from like you know performance or cutting edge perspective there's a lot of people and  companies and you know different parties involved in this conversation so i think i think um a lot of
[00:01:49] have opinions and care about this. So, you know, I think it's an important topic for modern web dev.
[00:01:56] Yeah, I see people joining into the stream right now.
[00:02:00] Okay.
[00:02:01] I'll just give everyone a couple more minutes here.
[00:02:05] Thank you.
[00:02:06] Come say hi in the chat if you're here. You know the drill.
[00:02:10] Okay.
[00:02:11] I'm going to start getting my screen set up here for sharing.
[00:02:16] .
[00:02:17] Thank you.
[00:02:21] That's interesting.
[00:02:22] Thank you.
[00:02:24] Thank you.
[00:02:28] Apparently...
[00:02:30] Chrome, apparently Chrome lost permission to, uh,
[00:02:34] to--
[00:02:36] Share my screen.
[00:02:37] Which is pretty funny.
[00:02:39] Mm-hmm.
[00:02:42] I don't know how that happened, but let's go.
[00:02:50] They're going to make me restart Chrome.
[00:02:53] Oh, that's garbage.
[00:02:57] Thank you.
[00:02:58] Thank you.
[00:02:59] Um...
[00:03:01] I wonder if I can do that without losing the broadcast.  Sorry, I do this every week, as you know.  And for some reason, Chrome decided to act up on me.
[00:03:11] Maybe because I knew I was talking about web components.
[00:03:13] Just kidding.
[00:03:15] Okay.
[00:03:18] .
[00:03:20] Let's try this again.
[00:03:24] Mm-hmm.
[00:03:27] Thank you.
[00:03:29] Thank you.
[00:03:30] Thank you.
[00:03:33] They're going to make me restart the browser.
[00:03:36] I'm going to see what I can do, but I have a suspicion we're going to lose the broadcast, which sucks, which means I might have to send a link out again in a second because,
[00:03:45] For some reason, Chrome lost the permission
[00:03:48] Give me a second here. I'm going to try and rectify this.
[00:03:53] Sorry about that.
[00:03:54] It's a...
[00:03:58] Thank you.
[00:03:59] Thank you.
[00:03:59] Yeah.
[00:04:00] Thank you.
[00:04:01] Thank you.
[00:04:02] Thank you.
[00:04:03] Yeah.
[00:04:04] I don't know.
[00:04:31] - It worked, we're still live.  You guys still there?
[00:04:35] uh,
[00:04:37] Mm-hmm.
[00:04:39] Thank you.
[00:04:39] All right.
[00:04:41] Let's try again.
[00:04:44] Thank you.
[00:04:47] Yeah, you wish. No, that's not going to happen anytime soon.
[00:04:50] -
[00:04:52] Sorry, I'm responding to the comment here.
[00:04:57] Okay, let's get this show on the road here.  Sorry about that.
[00:05:05] So I need to get another browser window opening.
[00:05:10] Pshh
[00:05:11] Thank you.
[00:05:16] Sorry.
[00:05:17] I've lost all my open tabs and everything I had ready to talk about. So just give me just a second.
[00:05:25] Thank you.
[00:05:26] There we go. OK. Let's see if we can get this going.
[00:05:30] Ah, there we go.
[00:05:32] All right.
[00:05:34] Here we go.  So yeah, let's change gears here and--
[00:05:41] or get started and talk about this week in JavaScript.
[00:05:46] Thank you.
[00:05:47] Um...
[00:05:50] This has been a fun week for me, actually.  A lot of revelations, a lot of discovery, and a lot of thinking about the future and
[00:05:59] I've been, as you know, on the stream exploring
[00:06:02] where things are going. And obviously there's my work at eBay on Marco.
[00:06:07] But
[00:06:09] Thank you.
[00:06:10] A couple weeks ago, I was talking to Mishko Hevery after...
[00:06:19] you know, just kind of randomly stumbling about some kind of getting stuck on something on Marco. And he mentioned to me, he's like, I've decided quick doesn't do hydration. And I was like,
[00:06:31] What?
[00:06:31] what do you mean? And he's like, well, hydration for most frameworks involves like rerunning
[00:06:38] the tree, you know, like attaching event listeners and, you know,
[00:06:43] you know, initializing state and
[00:06:48] you know, running a bunch of code and doing that.  He's like, but in Quick, we serialize all the event listeners like into, into, um,
[00:06:56] the Dom,
[00:06:58] Right.
[00:06:59] And we just attach a couple event handlers top level.  So we just run a script that's like,
[00:07:04] add like document, add click handler, essentially.
[00:07:08] Like we don't run any tree, we don't run anything.  So no hydration.
[00:07:12] Thank you.
[00:07:13] I stopped thinking about it for a second.  I'm like, I'm not sure everyone's going to agree with you on that.  You know, simply from the fact that like,
[00:07:19] hydration is just adding interactivity.  So maybe saying no hydration, but he's kind of right.
[00:07:24] the idealized resumable framework
[00:07:28] doesn't really hydrate
[00:07:30] in the traditional sense.  There isn't really this execution cost.
[00:07:34] And
[00:07:36] kind of having recognized that,
[00:07:38] I wanted to write about it.  So I started this week by releasing this Conquering JavaScript Hydration article, which was...
[00:07:47] Which is pretty fun because it,
[00:07:49] I do feel the more I work through it that we are kind of getting close to a point at which hydration is a problem of the past, which seems kind of strange.
[00:07:58] surprising considering I was just talking a couple weeks ago about how it was the hardest problem of front-end dev. It has been. People have been working on this for years, but I feel like
[00:08:10] in the last year or so, and it kind of finally independently from the Marco team and Quick
[00:08:16] basically stumbled on a way to basically solve this. And
[00:08:21] I've been looking at it and I've been trying to evaluate a lot of whether this can apply to other frameworks, because really it's it's a hydration technique purely.  It's not about.
[00:08:32] being partial or progressive, which both Marco and Quick have these other things. But the pure resumability of stuff doesn't necessarily care about how much JavaScript you load. So I think there's a really interesting thing for the future. And if, if,
[00:08:45] I'm going to talk about this more in future streams, but I felt like shouting it as loud as I can, that we were very close, I feel, to actually, you know, the cost of JavaScript loading in the browser not being as big of a thing as it's been historically.  Yeah.
[00:09:02] It's really cool stuff.  And I'm hoping to work more on in the future.
[00:09:07] What else we got here? I'm giving a talk on Marco.
[00:09:10] Thank you.
[00:09:11] next Tuesday if anyone's interested.
[00:09:14] Uh,
[00:09:16] the next day almost, we actually came across another really interesting revelation was,
[00:09:24] There's been a lot of talk, and if you guys have been on my stream, you've seen this, where
[00:09:29] You know, I've had some back and forth with Ryan Florence, you know,
[00:09:36] talking about the performance of
[00:09:39] of streaming. And on my last stream, I actually showed very visibly with graphs how basically the
[00:09:52] uh,
[00:09:53] Chrome Dev tools weren't properly representing things. If you went and tried some services that tested devices in the world, you could see the streaming was still beneficial. So essentially, Michael, at almost the same time, because we're both staring at this, and he's on the Marco team, you've seen him on stream before, and we were just thinking,
[00:10:18] "This can't be right."  And what he realized,
[00:10:21] which is really kind of cool is that, um,
[00:10:24] like he talks a bit about the benefits of performance server rendering of, you know, react server rendering is much slower than ones that do streams like because it makes it virtual DOM on the server where like Marco or Svelte or solid basically just can cast strings are much more performant. And he's talking a bit about the benefits of streaming. But the thing is,
[00:10:45] If you didn't really get this article when I posted it, I understand it wasn't really clear. The gist of it is,
[00:10:52] Chrome DevTools doesn't
[00:10:54] really account for slowness in the server response.  They're only worried about slowing down the network.  So essentially, if you have something that responds in
[00:11:04] 20.
[00:11:05] milliseconds and
[00:11:07] I don't know, 200 milliseconds.  If the Chrome DevTools set latency is--
[00:11:14] um
[00:11:15] say 300 milliseconds you're not going to see a difference as long as the latency is higher than  the server setting time they just cap it off they don't care they just push it to that latency and  they don't it's they don't actually show the slowdown so it completely masks any real costs  that happen on the server essentially um when you do the throttling and the problem is this is what  you do when you're sitting there and you're like oh well my my site worked good on slow devices
[00:11:45] go, okay, I'm gonna toggle this to slow 3D or fast 3D,  and turn up the CPU throttling so it slows down,  and hoping that you get a representative look  at how your site performs.  And the truth of the matter is,
[00:11:59] This hides
[00:12:01] any
[00:12:02] server costs. It's fairly, it's a fine approach to networking, but high server costs. So if,
[00:12:11] You spend a bunch of time blocking rendering by--
[00:12:16] waiting to fetch your data, well, you're not going to see that when you slow it down. And that's why, you know, I think,
[00:12:22] Brian was
[00:12:23] I was kind of saying in a few posts that when you have a slow network, streaming is no faster than waiting.
[00:12:33] Yeah, we saw last week that wasn't true, but as I said, it's not really...
[00:12:37] his fault, the dev tools just hide this fact. So I think this was a really interesting kind of revelation, at least for me, because, I mean, this is what we do, right? We just open up the Lighthouse tab, check out our scores, throttle some stuff and consider it a done deal. But it's actually hiding
[00:12:56] the benefits of certain techniques like streaming or perhaps early hints and whatnot.  So I think this is a game changer.  And we had a great conversation actually with Ryan afterwards.  And I was on Twitter and he was like, yeah, you know what?  I feel like I'm being nerd sniped quoting him.  But I'm going to look into this again because maybe there's something here.  So I'm just happy to have made a positive conversation.
[00:13:24] influence to have the remix guys at least reevaluate the benefit of these sort of approaches. So yeah, net positive, I think, from being able to figure this interesting behavior and misconception around performance.
[00:13:40] And what else we got here this week? So, yeah, we talked about conquering hydration. We talked about dev tools are lying to you. Other than that,
[00:13:52] There's a few odd interesting pieces. I thought this was cool. Steve from Builder.io and, you know, who's responsible for Quick and Party Town and all that stuff. They're working on trying to get some React components into Quick, which is really interesting.
[00:14:22] Um,
[00:14:23] to other people
[00:14:26] Other frameworks, maybe not, like obviously you can't be as often as quick unless you break things down to that level, we've covered that on stream. But it is interesting if they can actually solve this interop problem. They're suggesting as much so I want to see where this goes. I don't know about you guys, but this looks pretty cool.
[00:14:44] Thank you.
[00:14:45] And, yeah, more React talk.  And I feel like this could probably even go into its own stream at some point, but there's been a lot of...
[00:14:55] tension over the last few years between, say, the core team and the community.
[00:15:02] And I mean,
[00:15:04] That's even sometimes exemplified, like, what did I see that was kind of funny about this? I saw this tweet from Tanner that I thought was kind of funny. He was saying, announcing React hooks, users are like, huh? Library authors celebrating. And then announcing concurrent rendering transitions, users are like, wow. And library authors are like, skull.
[00:15:23] I don't think it's just concurrent rendering transitions.  And React core team has done a lot to improve the APIs and the usage around it.  So it's not just like...
[00:15:32] opting into concurrent mode everywhere they've made it more granular i think  i think they've done a great job on that but
[00:15:39] I think this is a sign of a bigger shift, right?
[00:15:43] and a bigger consideration.
[00:15:46] Um,
[00:15:48] And
[00:15:50] You might be like...
[00:15:52] what I mean, but I mean, if you've been following the stream, React server components are kind of getting positioned as this future and the core teams caring about them a lot. Like one of the most interesting things to me is that they introduced suspense with lazy components, say back when was that 2018? Maybe 17 even like it was quite a long time ago. And then
[00:16:14] They make these experimental docs where they talk about this hypothetical...
[00:16:19] resource primitive. It's funny because in Solid, I actually did make a resource primitive, but
[00:16:23] that would kind of handle
[00:16:26] data loading. They gave an idea of how data loading and suspense would work, but then
[00:16:32] Even with React 18 around the corner and all the talk of streaming and stuff, the mechanics are there for throwing promises and all that stuff.  But they haven't actually introduced a primitive platform.
[00:16:42] for handling data loading.
[00:16:44] Thank you.
[00:16:45] And,
[00:16:46] I find that odd. Libraries know how to tap into it and they're working on it, but like,
[00:16:52] You know, things like React Query have that capability, and some of the stuff that Remix has been adding to React Router, which we'll talk about in a minute, has that capability, and Apollo and a few others.
[00:17:05] I think Apollo, actually, maybe I spoke too soon,  but it's interesting that React hasn't provided that primitive  so that just anyone who's like, hey, I want to do a query can do it.  You're still on like the use effect train.
[00:17:15] And and.
[00:17:18] I don't know. I think a lot of this comes through is they're kind of waiting to show everything when it's when it's done.  And I think.
[00:17:26] Part of that puzzle we saw in the React server components demo, if you saw it, is, you know,  React adding a bunch of fetching libraries and stuff to work with server components.  I'm getting the impression that we're seeing, even though it's going to be kind of
[00:17:40] How should I put it?
[00:17:42] stuff will work along the whole path, you know, each piece works on its own. We're seeing a new react, a new model for it. And if you don't believe me on that, although most of you follow my stream probably do,
[00:17:55] Thank you.
[00:17:56] Where is it here? Yeah. Where was I? Yeah.
[00:18:01] Thank you.
[00:18:02] Sebastian, who's now working at Bursell,
[00:18:07] basically mentions here,
[00:18:09] The main thing I'm working on right now is what does the routing look like for server component world and what are the implications, which are deep. Once we understand it, it becomes easier to see the overlap remains. So,
[00:18:19] When was the last time the React core team was working on routing?
[00:18:26] ever. Like, this is huge. Like, I mentioned on previous streams that routing is sort of the  backbone of the web. It's the thing that sets the paradigm, right? It's the shift, you know. When we  started at the beginning, you know, there's all server routed apps, you know, kind of what we call  MPAs these days. And then when we went to single page apps, we had like hash routing because we  didn't have push data and the technology behind that. And it kind of gave us some semblance of
[00:18:56] client, but the client can control it and communicate it with the server. Then we got actual push state, which let us use the real URLs. And then that made modern SSR possible, which sort of was the next stage where we were SSRing single page apps.
[00:19:09] When I hear that they're figuring out what routing is for certain components, like to me, that's the next thing.  This is a different type of router.  And we've talked about this like multiple streams.  But here is Seb actually saying that they're working on it.
[00:19:23] So like, to me, this is huge. I go off on the thread about talking about the implications and the challenges and whatever, but like,
[00:19:31] Regardless,
[00:19:33] Take notice of this.
[00:19:35] Right. Because then the other pieces all start fitting into place.
[00:19:40] Like this was triggered because Remix is like, they're claiming the router, which is good for them. Like they wrote it. But like React router is the most popular router for React.
[00:19:52] It's been the most popular router for years.  And they're backporting features from Remix  into React Router.  That makes sense.  A lot of those features were in
[00:20:03] had versions in the original React Router before they cut them out in V4.  And Ember Router had those features, and Solid Router has some of those features too, and React Location.  For some reason, they cut them out in V4.
[00:20:14] because popular patterns dictated them, but they weren't necessarily good patterns.  And I'm glad we're getting back to good patterns.
[00:20:22] Think about it. Remix.
[00:20:25] is the router. The meta framework is built off the router. They're bringing that into  Remix. It's basically Remix router now.
[00:20:34] Essentially, I thought it was really smart, actually.  They're actually making the React router repo, the Remix repo.  So now Remix will have 46,000 stars instead of the 14,000 stars they have now.  They're actually commandeering it and making it part of the same brand, which is something  they can do, which is very, very smart because it just leapfrogs Remix ahead.
[00:20:56] But essentially what I'm getting at is
[00:21:00] They've been skeptical about React server components and some of these new technologies like streaming, which React's core team is pushing and Next and that core team are working together pretty closely with Sebastian over at Bercel.  So it's almost like...
[00:21:18] I mean,
[00:21:20] It's almost like there's a future that the React core team's seeing  that Next.js is aligning with, and essentially it's like,
[00:21:28] the official, it's not, but the official meta framework for React.  So where does that leave everyone else?  You know, the same...
[00:21:35] Library authors are sitting there with skull and crossbones and Tanner's tweet.
[00:21:39] Well, yeah.
[00:21:40] I don't know, but Remix is doubling down on their routing and their approach.  And their hope I'm gathering is to take everyone who uses React Router today and funnel them into Remix.
[00:21:51] So I'm almost seeing like a
[00:21:55] Like this remix versus Next.js,
[00:21:57] narrative might continue to grow. And it's funny, you know, how maybe fates are a bit tied because Remix is very much centered on React as it is today.
[00:22:07] And Next is very much centered on the React the core team sees in the future. And I'm very interested to see if, you know, from some people's perspective, React core team has kind of stumbled a bit, you know, the last couple of years trying to get suspense out and getting all these elements and things out.  Things that Remix has been kind of like, ah, we don't need suspense or, you know, like things, you know, we'll make our own transitions.
[00:22:32] If those deliveries still kind of stumble out and people not follow them, this will just continue to push people into Remix, essentially.  So I don't know. Maybe I'm reading too much into it, but I can see a pattern here in terms of where Remix is sitting, what the opinions are, and where React core team and Nex is sitting.
[00:22:52] Maybe I'm reading too much into it. You guys decide. But when I know that the React member from React core team, arguably the visionary behind React, is working on routing,
[00:23:03] Take notice.  OK, let's move on.  There's a couple more interesting ones this week.
[00:23:09] Bye.
[00:23:10] Thank you.
[00:23:12] Yeah, I mean, this one took me off guard. I don't know if you all saw this. You know what? I'm just going to open it up because I was like, let's just let's just look at this.  An alternative render mode for view. So I don't, I'm just teasing it a little bit here. But the idea is it's an, it's an alternative.
[00:23:30] It's a non-virtual DOM compile output format that has still similar code output size, but drastically more efficient memory usage and performance.
[00:23:42] Um...
[00:23:44] To think it's inspired by Solid, which is another new...
[00:23:49] interesting framework out there. So yeah, so we were always learning from the, you know, great ideas coming out of the community and see how we can improve you on that front. So, so this deal.  Yeah, anyway.
[00:24:07] Kind of interesting news. I guess they looked at our compiled output and Vue and Solid are very, very similar.
[00:24:15] frameworks for anyone who knows how the underpinnings go.  Probably people follow my stream.  So it makes sense to me that they're experimenting with this.  I actually bugged Evan a couple of years ago.  I was like, when they released Vue 3,
[00:24:27] or the show that he started writing about it, you know, like before the Vue 3 release,  Evan explained all the technology behind it.  I was like, man, why are you still using a virtual DOM?  What's up?  And he had his reasons.  I don't actually agree with those reasons.  As you've seen with Solid, you can solve this, a lot of the complicated stuff without a virtual DOM.  But regardless, it's fine for him to have that belief.  But it's really cool to see some of that thinking coming around into Vue because Vue's always been capable of taking this approach.  But yeah.
[00:24:56] As I said,
[00:24:57] It's the difference of coming up at a different time period.  I think if you go back to early 2000s,
[00:25:04] Tens, reactivity was on the outs, view,
[00:25:08] liked reactivity. They're basically the champions of reactivity  for years in my perspective because they basically operated, you know, kind of
[00:25:20] in the open, but like under cloak, so to speak, right?  They kept the reactivity close, hit it, you know,  in their options API, adopted a VDOM as a way to kind of get past some of the  classic, uh,
[00:25:33] um,
[00:25:34] executional issues that Reactivity has.  Interestingly, MobX came out around
[00:25:39] Same time or a little bit later,
[00:25:41] slightly later and mob x actually solved most of the issues with reactivity but it wasn't a framework  so you know from my perspective i kind of went on the mob x thinking and that's where solid came from  but um view kind of went the other path and basically carried the torch in the shadows so  i'm like so stoked to see view 3 come out and finally expose those reactive primitives and  you know you know start playing with ideas like hey maybe you don't need that vdom i i think i
[00:26:11] you know, so it's a clever...
[00:26:14] Evan's a very clever guy.  He's managed to make...
[00:26:18] view sort of
[00:26:20] do what every other framework does.  And I don't mean copying in that sense.  He literally does what every framework does.  Vue has almost every feature of every framework,  every syntax, every...  You can almost do anything...
[00:26:34] with Vue. And I always say that's the power of solid. And Vue has the same primitive, so Vue has that power, and they've chosen to exercise it. So
[00:26:42] You know, it makes a lot of sense to me.
[00:26:45] Because, yeah, out of the big player's view is actually the one that has the most comparable pieces to solid.  So, yeah.
[00:26:55] Cool to see, regardless.
[00:26:58] And yeah, more Taylor.  But I was trying to think, I think that's most of what I want--  this week in JavaScript was for me.  It wasn't as eventful maybe externally as some of the few weeks.  There wasn't a huge Twitter battle other than that one conversation  with Ryan Florence that actually ended up being a very nice civil place  where everyone agreed that there is something there.
[00:27:26] So I think it's probably time to
[00:27:30] move on to talk a little bit about Web Components.
[00:27:35] Everyone's still there, right? You're all alive?
[00:27:39] Chat's been a little bit quiet.
[00:27:43] Thank you.
[00:27:44] Thank you.
[00:27:45] No. All right.
[00:27:50] Sorry, the stream is going to be a little bit less organized.  Not that my stream is particularly organized, but because of that restart, I lost all my
[00:27:59] I had a bunch of Chrome windows open and I lost them all.  But luckily for me,
[00:28:05] Luckily for me, I did a little bit of prep and prepared a bunch of links here. So sure, they're not all open, but at least they should.
[00:28:15] if I did everything right, open up in these browsers,  and we can start talking about it.  So let's go on to our next section here.
[00:28:23] and get into web components, OK?  For you all who don't know what web components are--  and there might be some of you, because while they're getting  more and more popular, they're still a little bit obscure  from the framework perspective.  It's actually a collection of four different standards  to kind of wrap under this sort of banner.  And I sometimes think the name web component  is a little bit unfortunate.  But I understand why we got here, because
[00:28:51] It's a bit like Java and JavaScript, I feel. Essentially, component was the term that was  cool at the time, and still is cool. At the time, web components were coming up. They're  like, what do we call the spec where we're getting all the pieces we need to build these  powerful DOM elements? They're like, let's call them components. I think that's a big  part of it.
[00:29:17] components in a framework sense and components in the...
[00:29:22] Um,
[00:29:24] How should I call it? In the
[00:29:27] Web component sense aren't necessarily the same thing.  Some people treat them the same way, which is fine.  They aren't necessarily the same thing.
[00:29:38] I think...
[00:29:40] We'll see as we progress and get into the discussion about what that actually means.  But yeah, one of the coolest things about Web Components today that was not true when I got started is that
[00:29:50] They are supported.
[00:29:52] everywhere across every browser, stable, stable, stable, stable.  This happened around 2020.
[00:30:00] I think 2019, 2020.
[00:30:03] Um,
[00:30:04] which was supposed to be the year of web components. We're in 2022. I don't know if we're there yet. We are seeing
[00:30:10] some large companies adopt web components as a delivery.  And it makes a lot of sense for them,  because there's some qualities of web components that make them very attractive.  There's other qualities of web components that make them very not attractive.  And we'll talk about both today.
[00:30:23] Interesting thing for me is actually this table has changed over time.  See, the four pieces that I told you about were HTML templates, custom elements,
[00:30:34] Shadow DOM, and this used to be HTML imports, but they've replaced it with ESF modules. Because essentially for the longest time, the web component spec actually had the ability to import HTML
[00:30:45] directly from other HTML files, kind of like JavaScript imports.
[00:30:50] that was probably the least popular spec of the whole bunch.  And over time, it just kind of got folded.  People were like, well, if I'm importing JavaScript anyways,  why do I need HCO imports?  It's tried to come back, like, at least two or three more times,  I feel like.  It's kind of the RFC or the spec that never dies.  But at least from webcomponents.org's perspective,
[00:31:14] Every browser supports them and ES modules are the way forward.
[00:31:19] Wait, what year is it?  Yeah, no.
[00:31:24] So...
[00:31:25] Yeah, if you search, like, you know how there's, like, in the year of Linux or whatever the year?
[00:31:34] Like, yeah.
[00:31:37] you'll probably find like 21 is the year of the, you know, whatever, right?  Web components are kind of the same.  It's like the thing that never comes, right?  Year of web components.  Let's do a Google search.
[00:31:47] Your web components?
[00:31:50] Is 2022 the year of web components?  Yeah, you get the idea.  If you search, you'll find pages of people suggesting  that one year web components will be relevant.
[00:32:00] We will see. They are relevant. They have special use cases, but we'll kind of dig into this a bit. It's
[00:32:07] And I think this is part of the challenge with this topic is that, you know,
[00:32:13] Thank you.
[00:32:13] There is so many different perspectives on it.  But before we get into that, let's just talk about what they are and what they look like and what they do.  So I'm just going to grab one of the coolest things about WebCoinets that I've got to say I love is you can literally just open up WebCoinets.
[00:32:31] your like text editor or whatever.  And you can just build a web component immediately.  Like I'm gonna just go take something vanilla  from Code Sandbox right now.  And we're gonna build a really quick web component  just to kind of get a feel for it or whatever.  'Cause all we need here, we can get rid of this stuff,  is we just need a class.
[00:32:52] And we can call it, I don't know, my...
[00:32:56] I'm going to start with custom elements.  I mentioned these four specs.  I don't know if I explained them very well.  HTML templates are the template element.  You've probably seen them.  Custom elements are what I'm going to show you right now,  which is actually like the custom element.  The names are pretty obvious.  The shadow DOM is how they do slotting and scope.
[00:33:13] And then ES modules, how we do imports. So everyone should be familiar with ES modules. I'm just going to go my component or actually I'm going to say my element. And then all you do is you make it extend the element you want to extend. And for the most part, this is just HTML element. Some browsers, Safari.
[00:33:37] but let you extend other elements.  And it's really, really unfortunate,  because it really kills the progressive enhancement.  See, and that's part of the challenge here,  is basically web components,
[00:33:48] started as an idea of probably to solve a couple of simple things like, Hey,
[00:33:53] I want to know when my DOM elements are connected or removed from the DOM. You know, this is this is, you know, there's mutation observers for that, but I don't know which came first. But essentially, if you want to build functionality on top of a DOM element, you need to have some life cycles. And
[00:34:11] The...
[00:34:12] The second thing that people had problems with were like, how do I scope styles?  And somehow what's happened is you could take these separate needs and they've all got wrapped into the same ball of yarn, essentially.  And it feels like every spec gets built into this.  Almost like trying to build a framework for the web, which we talked about a bit last week.  I consider that...
[00:34:38] Hmm, dangerous. But let's continue for a second. So, we extend our HTML element and  then we add a connected callback. And this will kind of tell us if we're connected to  the DOM. So, for now, we're just going to go live. Okay? So, this will tell us if we're
[00:34:59] We're going to register it. So there's this custom elements registry where you can define  a component and give it a name like my element.
[00:35:08] And it's passing my element.
[00:35:12] Yeah.
[00:35:16] This is a fun thing.  Because you can only run and define one element once.  Like if CodeSandbox does a hot reloading,  it's going to break because it's like you've already defined it.  Some libraries have tricks around it  where they actually like increment stuff  and then convert it on the other side.  But this is just one of those funny things  where tooling and web component spec  don't really play nicely together.  Okay, so let's just...
[00:35:46] Let's just put my element in here now.
[00:35:48] And if everything went right,
[00:35:51] Let's save this.
[00:35:53] Thank you.
[00:35:54] If everything goes right here, oh, no, I got to save this too.
[00:35:58] Thank you.
[00:36:00] We should be seeing a console. Oh, it's not connected. It's connected.
[00:36:05] Refresh it again. Here we go. We're live. Okay. Proof.
[00:36:11] Let's make the, sorry, let me make my code editor a little bit larger, although we'll  be dancing around a bit.  So this is the basic idea.  Like, you can see how this is kind of powerful because you can just make whatever you want  and then connect it.  Like, let's...
[00:36:23] Let's do something a little bit more visual here because,
[00:36:30] Thank you.
[00:36:31] Essentially, if I remember this correctly, this. Okay. Refresh it because it's not going to work.  Yeah, so we have the store element here. So now we can do something like this.append child,  and we can do something like document.create element. We want to create -- we want to create
[00:36:54] Yeah.
[00:36:55] Actually, let's create--
[00:36:58] Fine. I'm going to --
[00:37:03] Pull this out and write some DOM stuff. Const L equals whatever. And then we can go --
[00:37:13] So much easier with GSX. Tech content equals hello. And let's append our L. And if everything  goes right and we refresh this.
[00:37:28] We now have our DOM element.  So this is kind of cool.  So you can start seeing how this resembles a component, right?
[00:37:34] So, and we can do some other stuff in here.  Like, what if we wanted...
[00:37:42] this
[00:37:43] this thing to update, right? We could do something like --
[00:37:49] set interval.
[00:37:53] And...
[00:37:56] We can make count equals 0.
[00:38:03] And then we can do something like this. Put it in.
[00:38:11] Thank you.
[00:38:12] Um.
[00:38:15] Thank you.
[00:38:17] Uh.
[00:38:19] And then what are we going to do?  We do count plus plus.
[00:38:22] Yeah, plus plus.
[00:38:29] Thank you.
[00:38:30] Yeah.
[00:38:33] And now we have a simple counter.
[00:38:38] You know, this is pretty easy.  If you look at it, it actually wasn't that much code.
[00:38:44] It acts, you know, like, from this perspective, you know, this connected callback at least only runs once.  But essentially this, and you might be like, oh, I need to clear this because someone removes it.  So you might go like this.
[00:39:00] Thank you.
[00:39:01] handle, whatever.
[00:39:03] equals this. And then you can make a disconnected
[00:39:09] Call back.
[00:39:13] And
[00:39:15] We can go this dot handle and go what was it clear interval.
[00:39:21] Thank you.
[00:39:22] So,
[00:39:26] Refresh.
[00:39:28] We now have a component and like any kind of component, it's kind of cool, we can just
[00:39:34] Make a couple of them. Why not?
[00:39:39] And, you know,
[00:39:42] Now we have working components.
[00:39:47] This is actually kind of nice to have a primitive that just lets you do this, right?  Like, there's a few more features here, and I'm probably not going to remember them all exactly,  but one of the things that there is is there is...
[00:40:03] There's an attribute changed callback. Let me see.
[00:40:07] Let's look it up here, sorry.  I'm a little bit rusty.
[00:40:11] Yeah, attribute change class, did I get that right?
[00:40:15] So, we can do something like this.
[00:40:20] Thank you.
[00:40:21] Yeah.
[00:40:22] Changed callback and
[00:40:29] Actually, I don't even care about the attribute change callback right now. I mean, I'm getting ahead of myself.
[00:40:35] We can also, what I was trying to get at is we can also go...
[00:40:40] We can also basically use the DOM APIs to go, like, let's get -- let's get -- let's
[00:40:47] an attribute.
[00:40:48] Let's call -- and let's force it to a string. And if this works properly,
[00:40:55] Thank you.
[00:40:57] or zero.  Let's make sure we do this right.
[00:41:03] I don't know if that's actually good. Okay. And then let's go here. And if I did this right,  I should be able to initialize one of these to
[00:41:12] 20 or something.
[00:41:17] No, OK.  Probably the reason for that is twofold.
[00:41:23] Essentially, there's a timing for upgrades, and you also have to set certain attributes as...
[00:41:31] as-- what do you call it?
[00:41:34] observed.
[00:41:36] There's like an observed attribute array.  I'm like a little bit surprised I'm not getting it here,  to be fair, but we can probably get around that.
[00:41:45] I'm not too focused on this, but the point is...
[00:41:50] Essentially, you have the DOM element,
[00:41:53] If people
[00:41:54] you know, pass stuff to it.
[00:41:57] Yeah, so I do actually have to observe it for that work.  Like, observe...
[00:42:03] observed attribute. Because I know I need it for the change, but I thought that I wouldn't need it for that. But yeah, observed attributes.
[00:42:18] Um...
[00:42:19] Thank you.
[00:42:20] constructor super.
[00:42:24] Thank you.
[00:42:26] Thank you.
[00:42:28] Mm-hmm. Observed.
[00:42:34] Thank you.
[00:42:37] Thank you.
[00:42:39] Okay, let's add it to the list.
[00:42:44] Um...
[00:42:48] Thank you.
[00:42:49] Count.
[00:42:52] Fresh.
[00:42:54] Okay.
[00:42:55] Yeah, my gut feeling is it's upgrade time.
[00:43:01] Oh, right. Of course. Thank you. You're right. This. Silly me. I'm not used to using glasses anymore.
[00:43:13] There you go. See, now we have one that's 20.
[00:43:17] So it's the opposite one I was expecting.
[00:43:21] I don't know.
[00:43:23] Thank you.
[00:43:25] Thank you.
[00:43:27] I don't know. Okay. But we can see one is set to 20 and one is not. And basically we have full access to the DOM to do this. Okay.
[00:43:39] Oh, man. Yeah, I mean, the authoring experience for these does differ. I just wanted to show the basics of some of these underlying technology. I want to show, hopefully, that it's actually very easy to actually author these things. This is the custom element spec, right?
[00:43:59] Obviously, running all these DOM operations can be a bit of a pain.
[00:44:04] So,
[00:44:06] Thank you.
[00:44:07] There's a few other things that you find very common,  like template elements.  Template elements are great.  We use them in Solid all the time.
[00:44:17] Right.  You can either instantiate them right in here.  And originally, it was very common for web component  definitions to literally have like a template element in the DOM  because it's inert.  But you can also just be like--
[00:44:29] you know, const.
[00:44:32] T equals document.create template, I think. Is it element template? No. Some of these -- some APIs
[00:44:46] Some of these APIs are elements and some of them are the thing. I think template is --
[00:44:56] I think template? No, maybe not. Maybe it is element template.
[00:45:02] Then you can do stuff like t.innerHTML equals.
[00:45:08] some thing, you know, like div.  And we can build something really rich, you know,  like put a bunch of divs inside each other.  I'm just trying to make some elements here.
[00:45:23] And, you know,
[00:45:25] If we take our key, instead of doing what I'm doing here,  we could do something like-- instead of creating our element  like this.
[00:45:34] and life.
[00:45:35] Thank you.
[00:45:36] we could go const template equals T.content.firstchild.clone.
[00:45:51] node.
[00:45:53] I mean, and
[00:45:56] The deep true. Yeah. And then now we have our template and then
[00:46:03] I think what they say was template -- let's make the header do it. Template.firstchild,  I think is what I'm looking for. And let's see if that works. Do we have a --
[00:46:12] L is not defined.
[00:46:13] Where am I using?  Oh, pen.
[00:46:17] Oh, right. So, yeah.
[00:46:20] **** Temple. Let's do that.
[00:46:24] That done.
[00:46:25] Thank you.
[00:46:26] Thank you.
[00:46:26] There you go. So, hi. And then now the count comes in and we have our headers doing the thing. So, uh,
[00:46:37] Yeah, good question. This -- you're right. There's probably -- I don't need to do it.  When I went to first child because I knew that it was just the first child. And if I  did clone the content to get a document fragment, and it's fine. But, you know, there's something  really funny here that people don't realize. Inserting document fragments is slower than  just inserting DOM nodes.
[00:47:05] So,
[00:47:06] I do this in Solid too.  I actually step in and grab the element and clone the element and insert it because it's  actually faster than using document fragments.
[00:47:16] It's a small performance thing. I have a habit of doing this, even if it makes the explanation more complicated. I should have just done it the traditional way people do it. But over time, you learn these tricks of how to make things more performant.
[00:47:29] This is sort of the thing, though, right? This is why you use frameworks, because not everyone knows that.
[00:47:34] Right.
[00:47:36] Over time, I've learned dozens of little tricks to improve performance.
[00:47:45] Yeah, yeah. And yeah, do you know how I learned this? It's funny because most people tell you use a document framework because at a certain time that was true. I was in -- check it out. JS framework benchmark. That's a benchmark in the world, right?
[00:47:59] They have the vanilla implementation in here. And, you know, people look at all the framework  implementations, but vanilla is incredibly telling, right? And if I find the original
[00:48:10] Vanilla one, sorry. You'll see, which I love, is you'll see a bunch of comments about all the different things that people have tried at different points and to test them and decide if this was faster. Like, oh, this is faster because they're that cheating.
[00:48:27] And one of the fun ones is all the different ways to remove
[00:48:30] content.
[00:48:32] There's like so many different ways to remove content.  And we measured them all to see what's the fastest way  to clear DOM nodes.  But another one, swapping, append.
[00:48:44] is using a document fragment is slower. See, and they actually show the code they use to do the document fragment and show how it's slower.
[00:48:54] Kind of there's some the comments in here are incredibly useful when I was first starting on performance. I've learned a few more tricks since then. And I actually I helped this along because there was this vanilla one and then I actually vanilla JS one here. It was my implementation. It's funny. Sometimes vanilla is faster. Sometimes vanilla JS is faster because there's a difference between the way it handles memory, but in and code size. But in any case,
[00:49:26] This benchmark was really great at seeing all sorts of basic table operations for performance.
[00:49:31] OK, so let's continue on.  So OK, this is great. So now you've seen the template.
[00:49:39] Now you see this.  And if we were to look at this and we inspect it, you're going to see...
[00:49:46] We just have...
[00:49:47] uh,
[00:49:49] Why does this look so weird?  Do you know what it is?
[00:49:56] Thank you.
[00:49:58] Why are the script tags?
[00:50:01] inside the element.
[00:50:03] and the elements inside the element. I've got some crazy inception thing going on here. Do you know what it is?
[00:50:09] I wonder if this is what it is. I can't remember if this was actually a thing anymore. At one  point I've been using JSX so long that I can't even remember. But I think you have to close  it like this.
[00:50:28] Let me see. No, that's not what it is.
[00:50:32] Why do we have crazy inception going on?
[00:50:36] My element is on my element.
[00:50:39] Yeah.
[00:50:40] This is kind of crazy, isn't it?
[00:50:43] This is why they're out of order, but it's because the elements inside the other elements,
[00:50:52] which is quite odd and unusual, I'm going to admit.
[00:50:58] Oh, yeah, that fixed it. Sorry, it took a while. Yeah, yeah, yeah. You have to actually close custom elements like this. So see, now it's proper, now it's in the right order. I'm glad I fixed this at this point. So now you can see that the big one's first. So yes, remember that you can't just use the simple close. You actually have to do this when you're using custom elements.
[00:51:25] Oh.
[00:51:26] Yeah, thanks.
[00:51:31] But yeah, I think
[00:51:34] In any case, that is the problem and we have solved it.
[00:51:40] So let's move on a bit more.  So I've shown off templates.
[00:51:45] and I've shown off custom elements.
[00:51:47] So you can start seeing how you have the tools you need.  You can easily clone some HTML elements,  and then you can easily do a bunch of manual DOM manipulations.  And then the last piece was usually they don't just do this.  What you do is--
[00:52:04] You
[00:52:05] The reason we were looking at this is you could see that there are
[00:52:11] there's a div and there's stuff inside
[00:52:15] Thank you.
[00:52:16] basically inside our element.
[00:52:20] If we wanted to...
[00:52:23] say, isolate something style-wise, there's another concept called the shadow DOM. And  the way the shadow DOM works is shadow root append -- let me look at this. Shadow --
[00:52:39] Thank you.
[00:52:40] I'll make that shadow root, yes.
[00:52:43] element.attachedShadow.
[00:52:46] Yes. Okay. Okay. Let's do this. So, we will add this. And this dot element, this dot attach
[00:52:58] Shadow.
[00:53:01] And then...
[00:53:02] Thank you.
[00:53:03] This.shadowroot.
[00:53:07] Got a pen child. Let's see if this works. I think I got that right.
[00:53:11] Thank you.
[00:53:13] Thank you.
[00:53:14] Oh, okay. What's the argument closed? This is another one of those fun...
[00:53:19] things that happen because of people not agreeing on specs. There's open shadow roots and closed shadow roots. Where's the argument for it? It had shadow. Yeah. And
[00:53:31] depending I'm
[00:53:34] And knit.
[00:53:37] mode.
[00:53:38] Open, close, yes.  So is...
[00:53:41] Is it just straight, give me an example, is it just straight,
[00:53:45] Thank you.
[00:53:47] Thank you.
[00:53:49] Yeah, it's an object.
[00:53:52] There we go.
[00:53:58] Thank you.
[00:54:02] Now, this is still behaving the same.
[00:54:07] Thank you.
[00:54:09] And
[00:54:10] Thank you.
[00:54:13] Sorry, I'm just catching up with some comments.
[00:54:15] The H1 isn't closed either. Oh, man, I'm just...
[00:54:20] Thank you. Okay. So,
[00:54:25] We have added a shadow root.  And you will notice something a little different now.  See, there is a shadow root and it is open.
[00:54:32] Um,
[00:54:33] And in this one, too, there's a shadow root.  So you might be saying, what's the big deal about these shadow roots?
[00:54:40] Well, they allow for style isolation.  They allow for slotting.  And...
[00:54:47] What I mean by that, I can probably show here in a second.  But let's see.  Sorry.  The HMR not working is lots of fun.  This is why you use a framework with your web components,  so you don't have to deal with this stuff.  All right.
[00:55:07] Where do I want to go next? Yes. So we have it. We see our shadow roots. And what's cool  about shadow roots is they provide the slotting mechanism.
[00:55:22] The-- let me just see here.
[00:55:25] Let's add a slot here.
[00:55:29] And when you add a slot, there's name slots.  I'm not going to get too into this for the details.  But know that what slot does is it tells it where  to kind of like drop in.
[00:55:41] the children. So if our second element has like
[00:55:46] you know,
[00:55:49] Thank you.
[00:55:51] Thank you.
[00:55:53] this. If I did this right,
[00:55:57] Yeah.
[00:55:59] you'll see that we now are displaying HALA, and it's going to be inside, but it's going to be transcluded by the slot.  So let's look at what's going on here in our element.  So...
[00:56:11] you
[00:56:12] This is the kind of cool thing that I like about the way this works is
[00:56:17] Holla
[00:56:19] is
[00:56:20] out here
[00:56:22] And then...
[00:56:25] which is actually it is literally the child of this element and then the shadow root is sort of  this hidden thing and then you see inside the shadow root you see the template  and then inside you'll see a slot and the slot will be like
[00:56:36] point me to where what's getting injected here.  And guess what? It's hollow.  So when you click on that, it tells you that hollow is what's getting injected here.  So it ends up showing up in the in the kind of combined DOM view.
[00:56:48] right here.
[00:56:49] after the count that's going up in our H1,
[00:56:53] But from the outside perspective, it's just hollow.  And if we want to actually display this in a way that you can kind of
[00:57:01] Picture it.
[00:57:03] I'm going to change this to closed for a second.
[00:57:10] and enclosed
[00:57:13] Oh, is it because...
[00:57:17] Never mind. I'm not good.
[00:57:19] Oh.
[00:57:22] It's because I can't, you know, I never use clothes, so I don't, technically, I guess you can't, you can't act the shadow root in the same way when you use clothes.  Let's not do it.  But my point is, the shadow root could be completely obscured from the end user's perspective.
[00:57:41] view, essentially.  You don't actually see it when you look into the dev tools.  And you just see my element, Holla.  So it would look like some native element  that you've used before.
[00:57:52] even though it's actually getting wrapped with this nice wrapper. And
[00:57:56] The kind of superpower here is if we inside our -- I'm just going to put inside our div because it makes my life easier, you know, not worrying about fragments and stuff. We can go -- we can add a style element.
[00:58:13] Thank you.
[00:58:14] And
[00:58:16] Um, let me be quiet.
[00:58:18] And we can do something like--
[00:58:23] Let's just do what?
[00:58:26] Does this work color?
[00:58:31] I'm trying to write it in a one-liner. It's so awkward. I guess I don't need to because I have template literals.
[00:58:38] Thank you.
[00:58:41] Thank you.
[00:58:42] Thank you.
[00:58:44] Um...
[00:58:47] What do we want to do? Add a class? What do we want to do?
[00:58:55] Can we just make all...
[00:58:58] Let's make all h1s. Let's make h1 color.
[00:59:04] Red or something?
[00:59:08] CSS is probably
[00:59:10] Terrible.
[00:59:12] Okay.
[00:59:14] What do they do?
[00:59:17] Oh, I moved the-- let's put the style in a different location,  because it's affecting my walk.  See this?  Let's just put it here.
[00:59:28] Bye.
[00:59:30] OK, so now our H1s are red.  But what I wanted to show what's cool about this  is that if this hola was also in an H1,
[00:59:40] coming in over here.
[00:59:42] Thank you.
[00:59:47] It's not red.  So you have basically style isolation.
[00:59:53] And it's obviously-- it's kind of obvious if this was out here,  which is like if I was having each one here,
[01:00:00] It was like my app.  It's kind of obvious that
[01:00:03] that might not be affected here, but even transcluded
[01:00:08] uh,
[01:00:11] Oh, it's code sandbox doesn't recognize HTML changes. But essentially,
[01:00:18] even...
[01:00:20] Even stuff that's passed into the child, like into the component, is still considered part of the parent scope. You have to use special slotted styles in order to style that. There's a whole song and dance you can play around this. But essentially, you get style isolation. So your internal template can be styled and have it not actually affect
[01:00:41] anything else on the page. Okay, so
[01:00:44] I'm going to catch up on the chat here for a second because I haven't been listening to you guys much as I do my explanation.  Let's see if there's any questions.
[01:00:53] Yeah, so we did find out. Luckily, that was because of not doing explicit closing tags.
[01:01:00] um
[01:01:03] Yeah, that's awesome.
[01:01:06] Thank you.
[01:01:07] Thank you.
[01:01:09] Thank you.
[01:01:12] Thank you.
[01:01:13] Yeah, sorry. The Evan thing was really cool though.
[01:01:22] Okay.
[01:01:24] Yeah, that would probably be easier.
[01:01:29] Yeah, so...
[01:01:32] In any case, my point is you guys can see the style isolation working. These are the three pieces. You can see the slotting too. You have a whole ability to do some really powerful stuff here without bringing in any library or anything.
[01:01:52] I mean,
[01:01:53] You can start to see where this doesn't scale either, though, because like...
[01:01:58] You got to know your DOM operations.  You got to be pretty proficient with vanilla JS to do this.  But for simple, small components,
[01:02:07] Like we just authored, you know, my element.  And now we can just ship up this JavaScript file essentially and pass it to someone and they can execute it from a CDN or script tag.  And you've now really ported up this kind of completely isolated bit of code.  So it's really cool for like widgets and stuff.
[01:02:27] I've seen web components use actually lots as a way of almost embedding iframes on like third party apps, you know, like the little like floating discord widgets and stuff.
[01:02:37] It fits really well for this, but obviously it doesn't stop.
[01:02:41] It doesn't stop here. Yes. Use stencil. Yes. Which is where I'm getting to.
[01:02:46] Because
[01:02:47] Yeah.
[01:02:49] As cool as this is,
[01:02:52] it's still not very practical, right?  You still need a framework, generally speaking.  And like web components, there's a spec that you can actually do declarative shadow doms or shadow roots.  So you don't have to attach them this way.  You can actually put them in the HTML, which is really cool because now you can do
[01:03:10] you can do SSR, right?  Because generally speaking, if you SSR,  but there's still like some challenges there.  Because if you SSR this in an environment  where you don't have the DOM,
[01:03:21] How does it know to render...
[01:03:24] this stuff. You need to be able to understand what these classes mean and do that. So you basically need the DOM on the server unless you have like different ways to simulate the DOM or some different component abstraction.
[01:03:38] If you want to do SSRs, it's really tricky here because the DOM on the server is like a really, really slow way to do SSR, like really, really slow. I started there with solid because I was like, oh, sweet. And then I was like, God.  God.
[01:03:51] I'm like 10 times slower than React.  What am I doing wrong?
[01:03:56] So I worked on some stuff, but I couldn't even get up to React server rendering speed, which is
[01:04:03] pretty sad. So, um,
[01:04:06] Yeah, I don't recommend doing the DOM on the server.  And I'm pretty sure libraries like Lit that are looking into SSR on the server aren't actually bringing the DOM to the server.  They're just doing smart stuff where they can take their component abstraction and know how to render it.  Which, again, leads to libraries because then there is no universal way to SSR web components if you actually want to web render their content, not just like this.  Like, don't get me wrong.  This is super powerful, the server render.
[01:04:36] slide in these pieces, suddenly you have this incredible ability to add islands, more or less,  of client rendered code. It works really easily from that side. But hydration is a challenge.
[01:04:50] Because if you want to actually render the internal servers, you need basically a framework in JavaScript to do it for you. So in a sense,
[01:04:58] it's no different than using any other framework, except for the standard interrupt. So yeah, let's talk about some of those libraries. I think this is sort of an important point to continue. So we've done the basics.
[01:05:10] Let's look at a bunch of ways to build this stuff.
[01:05:18] It really started back in the day with a library called Polymer.  It's now been deprecated, but it came up from Google.
[01:05:26] Well, I
[01:05:30] I guess I don't have a ton of nice things to say about Polymer, because it was like the most bloated, verbose looking framework I've ever seen.  But it was very close to the spec.  And we talked about MDV the other day about like a spec in terms of like how they wanted to bring model display view or something to the browser.  Polymer kind of took that spec seriously and actually made its template look like that.  So they just took classes.
[01:05:59] except you extended their special at Polymer element.  And then you'd have like a template definition,  and then you define properties.  And then you could still basically do all the other callbacks,  like the connected, disconnected, and attribute changes.  And they introduced this kind of data binding language.  See, like the double square braces.  There's a whole bunch of different ones.  You have like, you can use parentheses for certain things,  and square braces, and one means one thing, or two needs something.  They invented a whole binding language about one way, two way, up way, down way.
[01:06:29] Redfish, Bluefish, you know, like--  but essentially, this was kind of the start of it.  And you have to give some credit here at this point.  Web Components weren't in the browser.  So they worked on a ton of polyfills  to get the stuff working.  Just wanted to kind of mention this one for history's sake,  just because it's not really used as much anymore.
[01:06:53] Thank you.
[01:06:55] I mean, it's what we had, right?
[01:07:01] I got into web components around this time period too, really early, like 2013, 2014.  2014, I wrote my first web component library.  I don't know if people know this.  I was very pro web components for a long time.
[01:07:15] maybe almost five years. So, um,
[01:07:21] So anyways, so this is polymer.  And then for me...
[01:07:27] what kind of got me excited about Web Components was this library called Skate. And Skate,
[01:07:33] I don't know if it's used as much anymore, but what Skate did was they were like –
[01:07:37] you can bring any framework you already use.  Because Polymer was like inventing this new crazy
[01:07:42] a verbose thing and I guess they were trying to make it like the spec or whatever. But like, what if you just want to use Preact or React or whatever templating language that was around? And I tried to make a render with solid and I was like, oh, crap, this doesn't, this isn't going to work for me because it's
[01:08:01] Render function. They assume that their update model would call the render function every time, essentially. And most frameworks at this time did. The thinking was like, oh, you know, do trigger an update, tell the element to re-render. And as you guys know,
[01:08:17] in reactive libraries,
[01:08:20] they never, they should, like, you never re-render. So this was really awkward, which led me to creating my own library called Component Register, named actually after my favorite library at the time, Open Source Library, Document Register, which is a polyfill from Andrea Giamarchi, which
[01:08:43] adds custom elements to the browser.  So I looked at document register, and I made component register  as sort of like a universal web framework.  And I made adapters for Preact, React.
[01:08:56] knockout, which I used at my work by previous company for like six or seven years. And I
[01:09:03] Um,
[01:09:04] and Solid eventually, which is what Solid elements based off of.  So it was really cool, though, that the web components could serve as containers for any kind of renderer.  Right. And this is really important to me when I started working on Solid because I was like, oh, sweet, I don't need components.
[01:09:19] I basically designed solid without components, because I assumed that I would use custom elements and web components. That was like a big part of the early design. I didn't really worry about having components. I was just like, we got reactivity, we got JSX.
[01:09:31] Like, this is pretty sweet.  We don't really need components.  Separation of--
[01:09:39] design concerns, right? We have the reactive library,
[01:09:44] We have the JSX, which is my in DOM expressions,  which is my flavor of the day, I was thinking.  I wasn't even sure if I was going to stay with JSX.  And our container is web components.  I basically decided that...
[01:09:57] Wrapping it all together as the same thing was limiting for the long term.  I wanted to build for modularity at my company so that we could switch out whatever thing we want.  We want new state, want a new containers, want a new view rendering.  We could, under the web component containers, we could essentially just swap out our paradigm, how we felt, and it would all play together perfectly on this common interface.  That was my dream.
[01:10:22] There's several problems with that dream, like humongous problems with that dream.  But that was my dream.
[01:10:30] Thank you.
[01:10:33] Thank you.
[01:10:35] Yeah.
[01:10:37] Yeah, I mean specifically. Knockout had this problem, too.  I just couldn't-- we don't-- like, there's no, like, re-render call.  And all these frameworks were basically
[01:10:45] Universal frameworks are built on this idea that you'd re-render. Yeah. Lit had kind of come out at this time, too. So tag template literals were starting to be a thing. So between VDOM libraries and tag template literal libraries, which are very common, as you'll see in web components, because they don't require build stuff.
[01:11:15] work agnostic solutions. I still don't actually. Justin was working on this universal spec for  hooks and stuff and web components. And I looked at it and I'm like, yeah, it won't work with Solid.  Sorry. It's just kind of the way it goes or Knockout or any other fine-grained things. But
[01:11:37] Thank you.
[01:11:39] Yes, yeah, exactly. The problem is the top-down rendering. These things all assume top-down rendering. So anyways, Skate was really cool. I made my own version. This is just more historical stuff so you guys can get a little bit more context of what I'm talking about.
[01:12:09] Stencil brought JSX.
[01:12:12] to it with a with a v-dom and it's so it's it's about as close as you can get to um
[01:12:20] Mike.
[01:12:21] react kind of, but I mean, we're still talking class components and stuff, right?
[01:12:27] That was the other thing with my approach. I didn't like class components even back in
[01:12:33] 2013 or 14. And again,
[01:12:38] even though everyone's moving to classes at that point. And this was actually really, really simple. I'd been using classes in Knockout JS since 2010, essentially. And
[01:12:50] the problem we were having
[01:12:53] was this is before we had like what it called public properties, you know, the thing where you can just like top level things and not put them in the constructor.  But essentially, if you're using fine grain reactivity in a class component,
[01:13:04] The render function has no meaning because it doesn't get recalled.
[01:13:07] So essentially,
[01:13:09] all your code goes in the constructor.
[01:13:12] Because you're only running it once.  So you have the constructor with like 90% of your code,  and then you have a couple of entandlers that are attached  that you have to bind yourself anyways once you leave Knockout.  Knockout had a fat arrow that auto bind, but essentially
[01:13:25] the only benefit...
[01:13:27] of the classes
[01:13:30] I mean, there just wasn't because all the code was in the constructor and then you had to manually bind anything you chose not to be in the constructor. So even sometimes you're like, okay, well, let's not put them out there. Let's just
[01:13:41] put them in the constructor.  And literally, we were looking at a class that  was a single function.  So yeah, I haven't been really hot on classes for--
[01:13:50] God, it's been like eight or nine years now.  But again, it's biased because I was already using hook-like patterns since 2010.  So you can kind of see why.  But that being said, you know, obviously it makes sense.  Web component spec is off that.  But that's why my library that I built for universal custom elements was based off passing a function.  And then all the life cycles would be handled behind the scenes.  And that function would pass in a couple hooks that you could essentially use.  And that's been my pattern for web components since like...
[01:14:20] for years. But in any case, I just, this is essentially, like, you can see how this experience is very much like,
[01:14:30] React except with slots and stuff. So Stencil is great tooling. It has pretty good performance. I added it to the JS framework benchmark at one point and it
[01:14:41] And it has-- yeah, the tooling is really important, because it's like great HTML, good building, and it all compiles. And it's great. Like, they really thought about how to package this up in a way that could be usable in many apps, how to make sure you only have a single copy of the library and all that stuff. Stencil kind of takes care of everything for you. So it's really cool.
[01:15:07] Yeah, I would sometimes use Classroom React because I'm too annoyed with writing these callback and use Memo again and again. Yeah, for sure. You know there is a solution for that.
[01:15:19] where you don't have to use use callback or use ref.  But it doesn't involve anything that starts with an R.
[01:15:28] Anyway, um,
[01:15:31] Where was I?  Okay, so Stencil's cool.
[01:15:35] Definitely...
[01:15:35] one of my favorite options here, although
[01:15:38] Honestly, Lit has really come into its own.  It is probably the de facto web component solution.
[01:15:47] They use classes with decorators, which is not my favorite pattern in the world. But you've seen with stuff like you can see where the specs are coming in. It's like all the class specs are really benefiting lit and they just make it look nicer.
[01:16:06] I actually really like their playground and their tutorials.  They have a really great setup where you-- like,  they have these simple things, and you just click solve and reset,  and you can go through step by step.  I've seen it a couple times before,  but definitely a really good pattern.
[01:16:25] But what I actually like about the playground  is they actually show you the index HTML.  So you can see like the component you're building here.  So here's simple greeting, the past name world.  And then this is our example we made, right?  A moment ago, essentially, except the counter.
[01:16:41] They basically let you set the styles nicely here.
[01:16:46] You can just expose the static styles and then you don't have to put in your template.  And then your template, you just use this tag template literal and you can just put the name in, you know, like you can interpolate it.  And then you can set, you know, quote, reactive properties by just putting them on a decorator.  And ta-da, you know, this is definitely a lot nicer than what I've shown you all a minute ago.
[01:17:16] components.
[01:17:17] Thank you.
[01:17:18] You guys are great. Yeah, Lid is really nice. And yeah, no, I, um,
[01:17:27] I've used lit a few times for some things.  When, when I honestly, at my last company, it was kind of before solid was ready to go primetime.  We had the choice between our choice actually was between lit and preact at the end.  We'd narrowed everything down.  And ultimately what pushed me to preact was that they, they got hooks and they were getting like suspense and stuff.  And I was like, okay, no, that, that, that, that was the thing.
[01:17:57] I just really liked the model there.  And it was closer for our devs who are used to using Knockout.  And ultimately, it was a good move because we actually moved from Preact to React eventually because of issues we were hitting.  And it was a single page app behind the login, so it didn't really matter very much.  Like the React tax wasn't as big.  But I still, to this day, very much like lit in this kind of custom element space.
[01:18:27] stuff to be fair.
[01:18:28] Let me see here. Component register.
[01:18:32] my old library here that I use for solid element, if I remember correctly,
[01:18:39] Um...
[01:18:42] I thought I had a lit one here.  Maybe I didn't bother.  Yeah, knockout react preact solid.  OK, maybe I didn't have a lit one.  I was pretty sure I made a lit specific renderer for here,  too, because I always like lit.  Anyway, yeah, this is cool.  And in this tutorial here, you can see better versions of what  we were talking about.  But what I love about the Shadow DOM abstraction here,  where you can see--
[01:19:10] Like again, you can see the stuff getting passed in, but then it gets slotted inside the shadow root.
[01:19:16] in a different location, and it reveals one, two, and three.  Like you can kind of see this.
[01:19:24] shadowing and mechanism
[01:19:27] and learning about it. It's funny.
[01:19:30] It had a big impact on my understanding of things later, because this way of using projections and the fact that these projections belong to the parent, like we showed previously, is a big deal.
[01:19:42] because
[01:19:45] they get rendered eagerly.  Like you can't use this stuff for control flow.
[01:19:49] Do you know what I mean? Like, like,
[01:19:52] This always renders.
[01:19:54] Like if you wrapped an if statement around the slot,
[01:19:58] even though you're not showing it,
[01:20:01] like it will be hidden, it will still be rendered already.  And so for lit and for these kind of libraries,  you have to use template elements and kind of play with them there.  Polymer actually put data bindings on template elements,  and that was their way of doing those kind of directives.  Lit has some better patterns for this.
[01:20:21] But I just, you can't use slots, um,
[01:20:25] for control flow, essentially, which is unfortunate because you can't
[01:20:31] You can't basically
[01:20:33] Control flow is not composable, which everyone who knows me knows I'm big on composition. But
[01:20:39] That aside,
[01:20:41] So this looking and thinking actually got me pretty, made it a lot easier to understand future topics. Like if you're familiar with islands from Astro.
[01:20:54] and partial hydration, it works the same way as the shadow DOM.
[01:20:58] Because essentially,
[01:21:00] Stuff and same with quick actually stuff that is passed into the parent doesn't belong to the  I didn't turn off discord sorry guys stuff you you pass into the parent doesn't passing from  the parent doesn't belong to the child in a sense like it can't actually control whether it's  rendered or not and for that reason it can still be considered static
[01:21:25] even though it's being in the child.  So this is the way when you have server components,  I know I'm kind of pulling things, or partial hydration,  that you can have static content showing inside a child element's island  and still not require to hydrate it.
[01:21:42] Sorry, probably an illusion that most of you aren't connecting the dots to, but just trust me when I say that partial hydration and the shadow DOM actually follow the exact same rules.
[01:21:54] Thank you.
[01:21:55] Thank you.
[01:21:57] Hey, Patrick.
[01:22:03] Thank you.
[01:22:04] Thank you.
[01:22:06] Thank you.
[01:22:07] Thank you.
[01:22:08] So, yeah, this is cool. And I like that we can kind of play around and see this. I actually
[01:22:18] I actually had a lot of fun with this kind of aspect.
[01:22:22] One of the fun things that I get to show when I show web components is all my earliest projects were based on web components. I'm a huge, huge fan.
[01:22:33] This is my earliest nested router I made.
[01:22:39] Nested routing is, as I mentioned, gotten really popular again because of Remix. But I built this router back in 2014, built off Ember router. And what's kind of cool about it is you set up all your routes, and this DSL is ugly as hell, but who cares?
[01:22:54] And actually, this one even has async transitions and hooks and stuff.  I copied a lot of stuff, remember.  But it uses slots as the outlets.  So I really like this from a design spectrum because all the pages showed up top level because of the slot and slot kind of mechanism.
[01:23:24] It would get slotted in because of the Shadow Dong.
[01:23:27] But from the LightDawn perspective, you just saw, like, when you looked and viewed the source, you just saw all the nested sections, like one...
[01:23:35] in, in, like, top level, you could cut all the crap out and just go straight to the nested route section, because it was just, it was just, they were all direct descendants of each other in the light DOM, so to speak. So,
[01:23:49] You could picture like if you had the Twitter example that I always use, where you have the  sidebar and then you have this section and then you have the tabs, it would actually be like app
[01:24:01] user
[01:24:03] tweets in the HTML hierarchy and all the other stuff would be hidden behind different shadow  routes. But you could just jump straight to the tweets thing by just opening up the parent.  I honestly really, really like that about that router. No one uses this router, but I did use  on some of the early solid demos. Like I have a web component version of Hacker News.
[01:24:25] And it makes use of this router. So 11 stars. There you go. Only used at my company and only used by me. So
[01:24:36] But yeah.
[01:24:38] been one of my oldest projects.
[01:24:41] Thank you.
[01:24:42] Yeah, yeah. Okay. So we've got some stuff in the chat. Yeah, already using Lit. Yeah, Lit's great. We talked about that. If you're using web component framework and the end result is just some JS and HTML, what's the benefit over server rendered HTML and some lean JS hydration code?  Well, I mean, client rendering always is going to take a tax over not client rendering. My whole point is you do the exact same stuff. Like Lit is working on...
[01:25:05] SSR and hydration because they have the tools now they have declarative shadow dom the tricky part is that solution is going to be lit specific they're talking about how they can generalize it but as we talked about earlier, if they're not going to bring the dom to the server which is incredibly slow, they're going to basically build their own special way and other web component libraries might be able to leverage that and use it too, but essentially there's no, the only standards exist in the browser there's no standards for server rendering like there's a gap here, do you know what I mean like.
[01:25:35] And that alone, besides the authoring experience at the beginning, basically delegates web components to using frameworks, which is, we're going to talk about this more when we talk about the controversial part of web components, but you can kind of see that...
[01:25:48] Like using the platform doesn't escape you from using frameworks.
[01:25:55] It's just telling you perhaps to use different frameworks.
[01:25:59] Okay, so let's continue on. Yeah, so I definitely super into like some of the mechanisms here, right? So
[01:26:18] Yeah.
[01:26:19] Yeah.
[01:26:20] Lit has a cool development experience. Solid also has our own custom element.
[01:26:29] So why don't we look at that for a moment. Where is it? Yeah, solid counter element. You know, I love my counters, right? So in solid, you can also make
[01:26:40] Custom Moments.
[01:26:42] So let's look at that.
[01:26:46] And this is how custom elements work in Solid.
[01:26:49] Essentially, oh, this is TypeScript, so there's like a bunch of ugly stuff in here. Sorry about that for people.
[01:26:57] who don't care about TypeScript. But essentially,
[01:27:01] Yeah.
[01:27:03] What am I doing here?
[01:27:08] Oh, this is a weird example. It's like setting the count from the outside.
[01:27:12] I don't even know what this example is doing. That's weird.
[01:27:15] Because it's an interval that's setting the count.
[01:27:22] Oh,
[01:27:23] Okay, yeah, yeah, yeah. It's synchronizing props, whatever. Okay.
[01:27:27] I don't think we...
[01:27:29] This is so they can be dynamic from the outside. For our fun here today, I'm just going to do this.
[01:27:43] Not an N.
[01:27:44] Why is it not an N?
[01:27:47] Oh, it's value. Why do they call it value?
[01:27:51] Thank you.
[01:27:52] Yeah, who cares?
[01:27:54] So anyway, what you'll notice here for SolidElement is this is literally just a solid component.
[01:28:04] essentially, see component for TypeScript and all that stuff. So you just write a solid component,  our function component, and then you pass it to our custom element thing where you define it,  which define it, set what the props are, default prop values, and then pass it. And essentially,  that's how you do it. So you can basically take any solid component and literally pass it to this  custom element initializer, and then you have a web component. So you don't have to do anything
[01:28:34] There are some tricks to do no shadow DOM and stuff like that.  But essentially, this has shadow DOM all built in.  See, there's a shadow root and our counter works.  And you just use GISX and stuff like you wanted to.  This is honestly how I thought everyone would use Solid when I first created it.
[01:28:50] Thank you.
[01:28:51] Um,
[01:28:57] So you're catching up on chat here.
[01:29:01] Yeah. Yeah. The thing is, though, it's also a matter of responsibility going back on the SSR topic.
[01:29:08] Is it the browser-- are they responsible for standards
[01:29:12] on a back end, like
[01:29:15] node or like they have no jurisdiction
[01:29:19] Right.
[01:29:21] There might be conventions, there might be libraries and stuff that get popular, but there's no jurisdiction there. On the browser, they have complete jurisdiction.
[01:29:29] On the server, they do not.
[01:29:34] Yeah, I know. I make jabs at TypeScript all the time because I always work in TypeScript. It's part of my fun.
[01:29:40] Um,
[01:29:41] - Every time I look at it, I was a CoffeeScript developer.  Just so you know, like every time I look at it,  I'm just like, wow.  Like I just see CoffeeScript and then it was,  and it's like how to get like,
[01:29:55] reduce code by 80%. TypeScript is like the furthest extreme on the other side. I mean,
[01:30:00] I mean, I'm sure there's worse languages.
[01:30:01] I fought TypeScript for you.  And it has won with me.  I'm not going to pretend like I like it, but the value is too high.  That's a whole other topic.
[01:30:11] But yeah, authoring components in solid element is super easy and easy.
[01:30:17] My component register all works like this, essentially. I mean,
[01:30:25] If your thing has to use classes, you do.  But I just made it really easy to basically...
[01:30:31] kind of do these kind of wrappers as functions. That was my whole goal. I wanted to make a functional component representation for every framework as web components. So that was the whole thing. But yeah, so I don't know if there's anything worth dwelling here.
[01:30:49] Yes, but it doesn't solve SSR.
[01:30:53] Like,
[01:30:54] It gives you a tool you can use, but the server still needs to know how to actually render it. Because like the HTML,
[01:31:04] can show declarative shadow things.  You can add them anywhere.  Like you can literally, you don't need to use custom elements.  You can go like div declarative.
[01:31:13] - Yeah.
[01:31:14] a server needs to know what a component is, right?
[01:31:16] Essentially, like HTML,
[01:31:19] doesn't have components. The browser does with custom elements, but like an HTML template,  when you use Pug or some handlebars, you can have a way of modularizing stuff and they introduce  their own kind of component thing. When you use a JavaScript framework, they have their own components.
[01:31:34] doesn't like the Dom has
[01:31:36] custom elements that has components, but HTML does not.
[01:31:40] like declarative shadow roots thing, and there's a declarative component thing they're working on too. So maybe we'll get there, but it creates this kind of like split.
[01:31:47] They have the tools you mean.  If you have lit and declare to ShadowWorks, you can do SSR and hydration, obviously.  But you have lit.  You still need a library or framework to do SSR.
[01:32:03] It's the same thing.
[01:32:06] Right? But you get it. I'm not saying there aren't SSR solutions that don't involve bringing  the DOM onto the server. I'm just saying they're specific. They're not -- they're not
[01:32:14] the standard, they're not the platform, right?
[01:32:18] Like they're lit.
[01:32:20] or their stencil or whatever, right?  Like that's essentially the kind of split there.
[01:32:28] Yeah, I'm going to move on from SolidElement because honestly there isn't much here.  One thing, if you are interested in more libraries and understanding this stuff, there's this  great thing which is like all the ways to build web --
[01:32:41] to build web components.
[01:32:44] And they update it every few months. And these guys are actually responsible for webcomponents.dev. If you've never seen that, let me open that up. Webcomponents.dev. Which is this great web component specific sandbox, essentially, where you can just start a project in any library that you want, right? They have, like, tons of templates. They have lit,
[01:33:08] I don't know, Preact. Solid's in here too. Somewhere. There it is. But yeah, you can basically just choose any number of libraries. And there's no shortage, trust me. The biggest thing that Web Components did for the web, I think, was make it easier to write frameworks. It's kind of what inspired me to write a JavaScript framework, right?
[01:33:38] So like,
[01:33:39] I swear people complain about being too many JavaScript frameworks. Web components are probably the biggest contributor to being too many JavaScript frameworks. It's like one gets born every day because it's so easy. We already saw you can just like write a framework by just making a nice wrapper around those DOM APIs. It makes it so easy.
[01:33:57] So it's kind of interesting.  And as I said, you need the library framework if you want the full experience.  So it kind of all ties together and makes sense.  So they are very kind of powerful in that.  But what I love about this, sorry, where I was getting to is these guys produce regular comparisons.  So if you want to understand the difference between syntax, you just switch through all the different libraries and they'll show you what a simple counter looks like.  This is absolutely great.  And it's not just what the syntax is.
[01:34:27] you about size, like bundle size, like a one component, like obviously H2Element's the smallest,  but stuff like Prism, which is super small, Svelte, super, super small, you know, you'll find  solid somewhere around here in the mid range. And then you'll, you know, which very similar,  you know, where's Lit kind of Preact with classes, Skate, Haunted, Lit up here, Stencil a little bit
[01:34:57] And then what do we got? Keep on going.
[01:35:00] You'll see other ones, Lightning, Vue 3, React Hook 1, which is huge.  And then, you know, Canva, yes, I don't know.  But you said size of 1.  But they also do cool things like size of 30.  So you can see that some things don't...  We saw Prism and Svelte up here before,  but they basically compile away most of the runtime,  which means that when you have 30 components,  and when I say compile away, I mean they compile it into the components,
[01:35:30] and Prism on this end of the spectrum, because they're almost pure library. If you have lots  of components, you're paying the library cost over and over and over again. Yes, right here.
[01:35:42] lit. So,
[01:35:44] solids up here and then some really cool small ones like Atomico, Swiss.
[01:35:50] Um,
[01:35:53] octavino i don't know like really small but they don't even just do size they do performance um so  you know you can see a bunch of this prism compiler is genius i've talked about prism before  ben has done some of them his his work with compilers everyone should pay attention to it's  it's brilliant um he's he's tried to tackle some really hard problems in the past they didn't always  work out for him but uh he's he's he's promised a new framework or a new thing that he's working on
[01:36:23] with like, well, what can I do with web components?  And he tops there.  The rest of the stuff is all within the same range.  Sol and Svelte are basically the same speed for web components.  We kind of play around in terms of load and performance.  And then you have a bunch of other stuff as you come down lit and, you know.
[01:36:40] um,
[01:36:41] you know, like heresy and stencil down here somewhere in view. And yeah, anyway, so this,  this is a great thing. You can compare everything from performance size, you know, all the pieces.
[01:36:53] So,
[01:36:55] Yeah, that's sort of the...
[01:37:00] that like the talk about the different libraries.  So where are we doing on time?  Anyone got any questions or thoughts so far?  Where are we?
[01:37:08] About an hour and a half. Okay, that's good.
[01:37:13] Um,
[01:37:15] So I want to...
[01:37:17] I wanted to kind of change gears a bit because I,
[01:37:22] Thank you.
[01:37:23] Web components have been going around for a while and we've been looking at, you know,  how to build them, what they make, like how they make sense and
[01:37:34] And the challenge has been there has been a lot of friction
[01:37:40] with the framework libraries.  And there's a sort of question that comes up often is whether like,
[01:37:48] Like, did they succeed at what they set out to and
[01:37:52] and whatnot. And to a certain degree, we push back this question over and over again,  because we're like, well, we're just not there yet. It's still in development.
[01:37:59] Um,
[01:38:00] And yeah, it's been a decade.
[01:38:02] probably sometime this year or next year.  So, you know, it does beg the question,
[01:38:08] And I want to give a little insight and have a bit of a discussion now to talk specifically about, you know, why we are kind of in this place and why there's sort of opinions because web components have some incredible uses.
[01:38:25] But there's certain trade-offs and people don't always realize them and kind of understanding
[01:38:31] why we are where we are.
[01:38:36] Thank you.
[01:38:36] I've been kind of on the software for a long time.  I told you I was a big, big proponent for web components for years.
[01:38:44] As I said, for me,
[01:38:48] I owe a lot of Solids performance to Web Components  in the sense that--
[01:38:54] The whole like lightweight component thing that scales, like the whole, the whole approach with fine grain, the whole, the whole, the whole thing that actually, the reason that solid is so performant.
[01:39:07] came actually from me trying to build a system without components.
[01:39:12] because web components are going to carry the weight.
[01:39:15] And
[01:39:16] at a certain point,
[01:39:18] in my journey
[01:39:21] Things kind of changed for me. It actually happened in real time. If anyone ever wants to understand when it happened to me, it wasn't even that long ago, June 19th, 2019. I was writing an article for Medium.
[01:39:37] about the cost of UI components,
[01:39:39] And midway writing this article,
[01:39:42] I gave up on web components.
[01:39:46] Not for everything. They're great for Entroped, like for widgets I talked about. They're great for design systems. They have value. As long as you stay within a single framework. You don't want to mix and match frameworks. That's never good. You're just adding size.
[01:40:02] um
[01:40:03] But...
[01:40:05] What finally got to me was I realized that web components were never going to be the-- have the best performance. Which, I mean, that's sad, obviously. But, like, this comparison, the JS Framework, benchmark, like, who cares? Like,
[01:40:17] .
[01:40:18] it's only 14%. And actually Web Components have closed that gap over the last couple of years. But
[01:40:25] Essentially, I started comparing the different...
[01:40:30] components systems of different frameworks and
[01:40:34] And
[01:40:35] Essentially, you can make the JS framework benchmark without really any components, but I tried to add components. And for Solid,
[01:40:44] These were just functions at the time.  And I didn't really have a lot of
[01:40:47] advanced features like the same kind of prop handling I have today. I think I had added them at the point of me doing this article, but essentially, as I scaled up these different frameworks on components, they had different characteristics. The VDOM
[01:41:03] was almost flat.  I went from having...
[01:41:06] one component for the whole app to having one per row
[01:41:10] in this 1,000 or 10,000 table or whatever the benchmark is,  to having like every single wrapper in the table,  like every cell.
[01:41:20] Eevee, which is like Inferno or React, like the fastest VDOM library, essentially
[01:41:26] didn't slow down at all.
[01:41:29] between all the different components.
[01:41:31] Like adding components had zero cost for a virtual DOM.
[01:41:36] And
[01:41:38] It makes sense because they're just a bunch of function calls.
[01:41:45] And
[01:41:48] Essentially, as I moved on...
[01:41:53] Actually, there's one question in the chat.  I'll just answer this right now.  What about ShareState?  How does Solid Island handle that?  Well, the same way Solid does.  You can just create a signal anywhere, right?  Like just hoist it up.
[01:42:06] Solid element also supports solid context. I didn't talk about this, but I was so focused on web components that you'll find web component remnants in solid, mostly that our context API actually works with web components. A lot of frameworks context APIs use different mechanisms. Lit has a context API that's built specifically for web components, but solid's context API actually works with
[01:42:31] both with and without web components.  And our portals actually have the option  to put portal into the shadow DOM,  which is really, really important.  I was having such a hard time with portal solutions  for web components because of the way styling works.  You either like have to make the component have the shadow,  but what if you want to style the component from the outside?  So like you put a modal,
[01:42:53] in a portal, but then you want to style the outside of the portal.  Well, how do you get the styles into the outside of the portal if the parent is now, like, above?
[01:43:04] And it's a shadow root. So you like, so I came up with like some interesting approaches and  solid actually has those. And I, for the longest time I was really marketing how solid was like  super web component friendly, like all the advanced features, even suspense worked when  web components that doesn't really work anymore because I had to change the approach I do to  suspense to allow for time slicing. And it was, you know, much later and I'd kind of moved on
[01:43:34] that actually attached
[01:43:35] components to another document so that I could trigger the connected callbacks off screen and basically have web components capable suspense and fallbacks and stuff.
[01:43:51] As I said, over time, I moved away from that because I went to a model that was all in memory, which is better for performance.  But you will see remnants of Soled's dedication to web components in it.
[01:44:06] So anyways, VDOM, like basically no cost, even memory, memory scales a little bit, but essentially no cost. Right. And then I went to lit and I was just like, what's going on here? Lit.
[01:44:20] drastic change as you added components.  And this isn't even web components.  This is just lit like templates and memory
[01:44:27] Solid had an interesting thing. It scaled worse.
[01:44:30] than the VDOM slightly.
[01:44:32] But you'll see these all greens.  But what's crazy was the memory was the same.  Like almost no extra memory for having more components because you,
[01:44:40] solid scales on the amount of reactivity. So having more components didn't change the amount of reactivity.
[01:44:46] Because the thing is, BDOM still, the components are the boundaries for change.  So even though the execution was cheap running functions, you're adding more components, like more instances, where solid components are just a function call.  So essentially, there is some more creation costs by breaking things up.
[01:45:04] So that's why I didn't scale quite as well as VDOM,  but the memory was flat.  And then finally, Svelte was kind of in the middle,  better than Lit, but worse than the VDOM and stuff.  But the thing is, it significantly got worse  with more components, and again, because--
[01:45:21] Component boundaries are expensive in Svelte because they rerun components.  That's like the mentality.  So I kind of, and yeah, memory.  I kind of.
[01:45:31] While I was writing this article, I realized components weren't free.  They don't always scale.  And I basically said that, you know what?
[01:45:39] As much as we like to criticize virtual DOM libraries for being slower and ballgame, we don't need to be DOM and all that stuff.
[01:45:47] They scale with components really freaking well.  And it turned out solid scaled really well with components  because I tried not to make them  because I thought we'd use web components.  And at that point, it just clicked to me.  I'm just like, why am I still so attached  to trying to use web components?  They're different things.  Do you need...
[01:46:08] a component in the modern sense to be a DOM element.
[01:46:12] No, right?  Like not all components need to be DOM elements.  DOM elements need to be DOM elements.  Like if you make like a widget or something, like a button or something, that's a custom element.  That's an element that deserves to be a DOM element.  Something that's a control flow or a suspense boundary or any other kind of hierarchical consideration, you know,
[01:46:34] that orchestrates does not need to be a DOM element.
[01:46:36] So,
[01:46:38] Like, instantly I was like, what I was expecting, how the components had changed. And I basically made a cold shot here. I basically said, anyone who's not a VDOM, we got to do better.
[01:46:49] our apps just don't scale at the same size.  Like we just get worse.  Svelte was not great.  Web components are not great.
[01:46:57] And
[01:46:58] VDOM actually eats our lunch on this kind of scaling.
[01:47:04] So like...
[01:47:06] Except for Vue, because Vue, it scales good on size, but Vue has a VDOM and a reactive system.  So it's like, in some ways, the best of both worlds, in some ways, the worst of both worlds.  And when I was doing these kind of comparisons, you know, it was obviously the worst of both worlds.  But it wasn't any worse, say, than Svelte.  But I just wanted to kind of, this is kind of...
[01:47:29] the whole thing, which led to me to state at this point that frameworks aren't there. I wanted to kind of steal Rich Harris's frameworks aren't there to organize your code, but your mind, but the components are. And if you follow my work, this is basically the basis or the thesis of the whole thing about components being pure overhead started because of the
[01:47:48] of me recognizing that in all my work to try to make web components work, um,
[01:47:54] I basically abstracted out the most useless part of the framework.
[01:47:59] So, I mean, that's an opinion to have, right?  Yes, exactly.  Where you need isolation, you need isolation.  But if you're building...
[01:48:10] But if you're building an app and you're nesting components and like building it the way you build React, using web components is just an unnecessary overhead.
[01:48:20] They're different things for different purposes.
[01:48:23] And
[01:48:24] You know, I continued looking into this over the years. Like, I came back to this again last year and I was like, okay, I'm going to put web components straight up. And I did the same test again, except I use Inferno instead of EV because EVs kind of dropped off. I used Lit. And I'm like, this time I'm going to put Vanilla JS into the competition.
[01:48:47] you know,
[01:48:48] I'm going to essentially...
[01:48:51] Say, what happens when we have a single component?
[01:48:54] versus one per row
[01:48:57] versus one per cell.  And essentially, where we start here in this is--  obviously, solid has a performance benefit over the others  to begin with anyways.  But that's not the important part to watch.  It's the way that everything else ships
[01:49:16] along while we while we do this. Right. Because
[01:49:20] As we add more components,
[01:49:24] Thank you.
[01:49:25] Suddenly,
[01:49:26] VDOMs actually get better with more components in terms of performance because they can break up the work. So if you looked in the previous diagram, sorry, I'll go back to it so you can see and I can point out the important part.  If you look at the previous diagram here, Inferno was the slowest with one component because it had to re-render the whole thing because that's what VDOMs do, re-render, re-render, re-render.
[01:49:46] But the second...
[01:49:48] you can see vanilla and solid are, you know, kind of have a bit of a gap. The second that we go and we add a component per row, the VDOM is suddenly improving. Well, actually, it's not even so it jumps ahead. And now Svelte and Lit are kind of kind of going back, you know, and if we keep on going along this trajectory, actually,
[01:50:13] When we get to the end of the puzzle,
[01:50:15] You know, sorry, this is, sorry, this, I'm going to pull up the wrong one.
[01:50:20] Where is it here?
[01:50:23] Thank you.
[01:50:24] Solid has gone in front of vanilla, which is our web components, pure web components, and lit has actually gone to the end, and Inferno is just still staying in the same place. So basically,
[01:50:38] What has happened as we scaled up the components
[01:50:42] Inferno is slowly catching up to solid. Solid's kind of stayed the same and
[01:50:48] Svelte has kind of moved the distance and the web component libraries are shifting right.
[01:50:55] To the point that
[01:50:57] essentially
[01:50:58] A pure vanilla hand-optimized web components solution is slower than a JavaScript framework.
[01:51:06] I don't even mean like using lit.  I mean like literally the most...
[01:51:12] possible hand-optimized version of Web Components,
[01:51:16] is slower than using a JavaScript framework.
[01:51:21] Like, like, it's like, you know,
[01:51:29] And obviously this is a crazy benchmark, but...
[01:51:33] it's because not everything needs to be a DOM element.
[01:51:37] That's the gist of it from a performance angle.
[01:51:43] But performance isn't everything, right? I'll be the first person to tell you that. You have to understand where I was sitting, I kind of...
[01:51:53] You know what I mean? Like I
[01:51:55] I was very performance oriented at the time and I was just like,
[01:51:58] Why am I putting so much work into this?
[01:52:02] Ultimately,
[01:52:04] It's like using the platform, quote unquote, is going to be slower than what you can do with a framework.
[01:52:11] Thank you.
[01:52:12] And the answer is really simple.
[01:52:16] Everybody uses the platform.
[01:52:20] All the tuning and tinkering helped me learn how to use the platform the best.
[01:52:27] You don't have to use every feature of the platform to use the platform.
[01:52:34] Thank you.
[01:52:35] Anyway.
[01:52:38] Thank you.
[01:52:40] So, yeah, I like this comparison, because this is one of those ones where the virtual dom
[01:52:48] actually
[01:52:51] Thank you.
[01:52:53] ends up eventually trumping everything. Like we can't go far enough. Like this is absurdly big. I don't people are going to get into 10K rows or or whatever, you know.
[01:53:04] But, like...
[01:53:08] Essentially, over time,
[01:53:11] The virtual DOM actually has the best scaling
[01:53:14] I've tried to emulate that to a bit with Solid.  But when it comes to optimally written virtual DOM,  they scale the best on components.  Now, don't get me wrong.
[01:53:27] If it's not optimally written,
[01:53:29] and you're doing a bunch of re-renders,  the virtual DOM does not scale as well.  It's way easier to screw up the virtual DOM and re-render it
[01:53:36] But I mean, if I could pick the perfect...
[01:53:41] developer to create the perfect project
[01:53:46] At a certain scale, the virtual DOM
[01:53:48] will outscale
[01:53:51] the vanilla web component solution.
[01:53:59] Thank you.
[01:54:00] In some sense, it's similar to your point earlier, document fragments technically being overhead. Any wrapper over the DOM is overhead, but a function calls overhead is much, much less than it.
[01:54:09] Then more DOM, exactly. Wrong abstraction for the problem.
[01:54:14] right so don't like i just want to kind of get i think that's a very
[01:54:19] point, point, like, and it's different between computers. This is my M1.
[01:54:23] Right. And the M1 was like that with the Intel,
[01:54:28] The gap was actually cut when the Intel, my Intel processor, other computer,
[01:54:36] Inferno and web components are tied on the last one.  Like Inferno has actually already closed the gap.  We see you have Lid and Svelte out here, the same thing.  Solid's ahead of Vanilla.  Solid was actually ahead of Vanilla  already by the second stage on my Intel.
[01:54:52] But essentially,
[01:54:54] in vanilla hand-optimized web components you can't make them any more hand-optimized
[01:55:01] is the same speed as--
[01:55:03] the fastest virtual DOM library.
[01:55:06] So,
[01:55:08] And this isn't like a single test. This is creation, replacing, partial, select, swap, like every kind of table exercise you can do.
[01:55:15] Obviously, as I said, this isn't your app.  People come hit all sorts of issues using virtual DOM inefficiently.  I just wanted to point out that a pure to the metal platform
[01:55:26] level with the most optimal approaches,
[01:55:31] Thank you.
[01:55:32] As you scale components,
[01:55:36] Bye.
[01:55:37] You can basically...
[01:55:43] do very well with a framework versus using vanilla web components. Okay. So now I'm not done with the controversy. So
[01:55:57] I've got a couple articles that I wanted to review.  I think they're good for discussions.  And they're some of my favorite writings.  Because even if you put performance aside,
[01:56:06] I think this is a rich topic in terms of understanding why framework authors and the web component
[01:56:15] people haven't seen eye to eye.  And I've got two articles here that have got  some great discussions.  This one was one of my favorites.
[01:56:22] Rich Harris wrote this article, Critters Felt, and he goes, why don't you use one components?  And I think I think this is something that I think people don't realize.
[01:56:30] Have you ever looked at Vue or Svelte's APIs for children?  They use slots.
[01:56:35] No.
[01:56:36] You might think they use slots a little bit because, you know, it's just a good API.  Actually, I'm not a big fan of slots, but...
[01:56:46] Part of it was they thought when they built those frameworks that web components would be a thing, and they built it to be in line with web components. Vue, even since a bit earlier, eagerly evaluated children.
[01:56:57] in their slots the same way web components work, almost identical.  Over time, they switched to lazy, and almost every framework now lazily evaluates slots.  It's just more efficient. But they actually
[01:57:08] built their framework with that in mind. So in some cases, not everyone was React. At the beginning, React was like, you know, what's their separate use cases? I think Seb had a very clear
[01:57:19] you know, vision, you know, very early on about the role of web components versus React components. But like,
[01:57:27] Thank you.
[01:57:28] On the other side, like the views and the svelts of the world,
[01:57:31] And we still, those libraries still produce web components pretty efficiently.  You saw Svelte, you know, in all the ways.
[01:57:37] we kind of assumed that web components were going to be our future.
[01:57:42] Like,
[01:57:43] kind of believing in the platform. I've already told you for myself, like, Solid was based on  web components. In fact, our observables originally were like TC39 or RX style observables, because I  was like, okay, it's going to be part of the spec, or I used object.observe. I was so positive I could  make the most platform-friendly framework, and over time, things diverge. So I want, I think  that's an important perspective to understand. This didn't,
[01:58:07] this
[01:58:08] opinion didn't come from initial bias. It was actually
[01:58:13] from
[01:58:14] Things just not...
[01:58:16] living up over time. So yeah, so he doesn't use it. Okay, why I don't? Progressive enhancement.
[01:58:28] Yeah, okay. So he's got a bunch of points here.
[01:58:31] I think he was showing that progressive enhancement doesn't actually work.  I don't know if I completely agree with this, but...
[01:58:40] He's basically saying that from a pure standpoint,
[01:58:43] And this part I do agree with.  He's saying, if you change an anchor into a custom element,  if your JavaScript is turned off, you  don't have progressive enhancement.  There is a way to get progressive enhancements  with web components, but Safari is our webkitter
[01:58:57] whatever, like that, that group is blocking it.
[01:59:00] Essentially, you have to use one of Andrea's or Web Reflections polyfills if you want to actually use
[01:59:08] like extend an anchor, but the basic web component is not progressive enhancement. If you go Twitter share and you don't have JavaScript, well, guess what? It's not going to work.
[01:59:21] Okay.
[01:59:22] Number two, CSS in or JS. I think this point he's talking about,
[01:59:31] the Shadow Dome, right?
[01:59:34] And he's saying the only practical way to do so without getting a flash of unstyled content is to have the CS string in the JavaScript module that finds the custom elements.
[01:59:44] so
[01:59:45] So basically what I'm saying is you have to package the CSS in the JavaScript if you don't want to have the Flash.
[01:59:53] you know,  make the style and part of your template to be fair.  This is probably,  yeah,  it's,  he's mentioned it here.  This is solvable.  There's,
[02:00:00] CSS mod.
[02:00:01] There's this whole constructible style sheet that they've been moving with the spec. This caused a bit of controversy last year because I think it didn't really solve certain problems for a certain class of users. But there are solutions on the horizon that are now being implemented to solve this.
[02:00:17] So I cannot, these things do change in time. So it's not all bad, but I just think these are all good talking points when kind of talking about this subject.
[02:00:27] platform
[02:00:28] platform fatigue.
[02:00:30] Yeah, this is my pet peeve of mine. We've been touting the stuff of the future for years, but in order to catch up with the present, we need to stop the platform to the gills with all these new features, deepening the mode around existing browsers. Yeah. Yeah, this is sort of an interesting question, right? Because...
[02:00:44] our concepts and ideas of things constantly change.  Standardization always follows innovation, and it takes a while.  So it is hard because, as I said, I feel like when Web Components first came out,  our idea of what a component was was very, very different.
[02:00:57] And this is always the danger of bringing in, you know, say custom templating.  I'm sure if we managed to successfully get JSX into the browser, it would take like a couple of years.  And then like by the time it finally got there, everyone would be like, what, you're still using JSX?
[02:01:13] Yeah.
[02:01:14] That's the sort of problem with this kind of standardization.
[02:01:19] Every time we add new features to the platform, we increase the complexity, creating new surface areas for bugs, blah, blah, blah. Okay. Polyfills. I think we're past that. We don't need as many. A lot of the polyfills are fine. So I'm going to say that. Composition. It's useful for a component to be able to control when or whether it's slotted content is rendered. Yeah. So he's talking about, for me, this is actually one of the biggest concerns.
[02:01:40] The stuff inside always renders.  There's no lazy evaluation.  So even if you control how it's slotted,
[02:01:48] like when to show it or not, technically, like it's already connected.  It's already triggered.  All the life cycle events happen.  There's no way you end up.
[02:01:58] writing, as I said, passing templates into components and then doing some fun game with it.  So there's some bulky API pieces that don't work. And almost every framework has decided to go the  other way over time. So I feel like this is one of those big splits you'll see.
[02:02:12] Um,
[02:02:14] Confusion between props and attributes.
[02:02:16] We didn't get into this too much, but DOM has props and attributes and they don't always reflect on each other. And in my libraries, I actually have to do some special stuff to get that to work so that they reflect.
[02:02:30] Yeah, they have different rules. And I mean, this is just the fact that you have to deal with the DOM. Like, what do we have? Boolean attributes. What's this example? Button has attribute disabled. Okay, false. Set the prop.
[02:02:41] And now it has this attribute, remove the attribute,
[02:02:45] Yeah.
[02:02:47] That version works, but then he was showing that if
[02:02:51] Like basically there's complexity between this gap.  And to be fair, if you're dealing with the DOM,  you always deal with it and you accept it.  But I think this is just one of those things,  like when these are your primary mechanisms to deal with author components,  you're adding this kind of layer of complexity.
[02:03:06] Um...
[02:03:08] Leaky by design.
[02:03:11] This point is a bit more nebulous.  Okay, so he admits it.  It's weird to me that attribute change calling is just a method on the element instance.  You can literally...
[02:03:22] Yeah, nebulous.  The dom is bad.
[02:03:27] Yeah.
[02:03:31] Yeah.
[02:03:32] Thank you.
[02:03:33] Thank you.
[02:03:35] Yeah, he's showing how it takes more code than Svelte. I mean, I think this argument is a little bit weak because we already agreed you're going to use a framework if you're going to use Svelte.
[02:03:50] web components. So he's right. It is more verbose, but use letter stencil and it's not going to be more verbose.
[02:04:01] Global namespace, we saw this, our HMR had a lot of fun.
[02:04:06] Yeah.
[02:04:08] Um,
[02:04:09] These are all solved problems.  So yeah, his ultimate point was he's like,
[02:04:12] frameworks have solved all these problems and components and we're still learning about the basic problem keep the view in sync with state, but if the bottom of the component we're into has been solved for years.
[02:04:22] but we're adding new features to the platform just to bring web components to parity with what we already do in user land.  Given finite resources, time spent on one task means time not spent on another task.  Considerable energy has been expended on web components despite a largely indifferent developer population.  What would the web have achieved if the energy had been spelt?
[02:04:39] spend elsewhere. That's heavy. And a lot of people disagree with them. And this discussion  goes crazy. But I think these are interesting points and things we should kind of
[02:04:49] you know, think about, right?  Like some people like one isn't true.
[02:04:53] Yeah, and they show how to use progressive enhancement. And it's, there are solutions, but
[02:04:58] there's a lot of awkwardness.  He missed a few other ones, like Forms are awkwardness.
[02:05:04] very awkward with web components.  But the thing is, there's things that will be fixed over time, right?  Like, in a sense...
[02:05:12] you know, like where there's gaps
[02:05:15] on the, like, uh,
[02:05:18] poly fills or, you know, hopefully we get progressive answer.
[02:05:25] Thank you.
[02:05:26] things will be fixed, you know, and improvements will be made and the platform will keep on moving.  So it's not that I'm I'm more can contend and wonder if if essentially.  Yeah.
[02:05:38] I wrote an article myself on this topic about maybe web components are not the future. It's not quite as
[02:05:46] Harsh is rich on some of the points.  But what I was getting at is –
[02:05:50] I believe that all the problems, recognized problems, will be solved for web components in the future.
[02:05:57] But,
[02:05:58] But I think the challenge is web components aren't going to change their nature.  They're still DOM elements.  So, you know, my whole argument this whole time,  and I've been mentioning it's components are not web components.  Once you understand components,
[02:06:11] that difference, then you can see a future where web components exist.
[02:06:17] you know, you can have frameworks that author them. As long as you understand, like, it's
[02:06:21] is not the best way to build applications. It's a good, the good tools for wrapping up a widget or providing a common set of elements. But like, they're, they're a bulky interface for like doing application components, like the way that like, we're used to with say, you know, modern JavaScript framework, right, that never changes, because
[02:06:45] they are DOM elements. They're designed for a different purpose. It's not necessarily the right distraction.
[02:06:53] Thank you.
[02:06:54] And is it a surprise of the friction with UI library frameworks? DOM life cycles.
[02:06:59] Thank you.
[02:07:03] Yeah, the biggest problem web components are hitting right now is just ecosystems grown up many cases. It's no longer just about progressive enhancement to create a user developer experience like that of application requires looking at things more holistically. The lifecycle of modern JavaScript transcends dom life cycles. Exactly. You do work.
[02:07:19] in your components before they're even attached to the dom. Do you know what I mean? Like,  and when they're not like suspense, like,
[02:07:25] We're getting to a point where we're building these things into the frameworks to orchestrate that transcend the DOM, SSR.  These are all...
[02:07:32] things.
[02:07:33] that transcend the DOM.
[02:07:35] And as I said, web components are the DOM.  So any place where there is use for the DOM,
[02:07:41] then you can use that.  But when you think about frameworks looking at native and universal renders and all that  stuff, it just, if you're going to need a library anyways, right?
[02:07:51] Like, people are going to probably gravitate to libraries that have more capability.
[02:07:57] Because as I said, the web component aspect
[02:08:00] is
[02:08:02] you don't need it for the app you need it for portability and interrupt so
[02:08:07] Yeah, that made only two points. What a fun article. I only had two points. Yeah. And in the end, that's what I always said. I think it's great for certain things, but not necessarily great for other things. And it is kind of...
[02:08:22] Interesting, because in my mind, some people go web promotes are a failure.  I...
[02:08:28] My argument is
[02:08:30] You can't...
[02:08:31] fail if like, like web components,
[02:08:35] it's not that web components are failing to be what they're meant to be.  They're doing it. I think they're getting there.  Like I think, I think web components are actually, um,
[02:08:45] for the tasks that they can do for custom elements,  I think they're actually...
[02:08:49] I think we're telling the story.  We're getting there.  It just...
[02:08:53] Web components weren't designed to be everything that we expect from designing apps in modern web.  That's basically what it is.  They are kind of a blueprint of our thoughts on components from 2013 that we're still developing.
[02:09:07] have six or seven years later, nine years later.  Like essentially they are very good at doing what they're meant to be.  When you want a DOM element,
[02:09:18] They are amazing.
[02:09:19] And they're portable and they do all you need.  But it's very different to the way web dev is now  and in the future, essentially.
[02:09:29] In a sense,
[02:09:30] They're a good bet if you want to future-proof reusable chunks of code.
[02:09:37] But as a framework to build your...
[02:09:42] your application in, it's kind of, it's a different question, a different consideration, right? Because it's funny, because people on the web site often go like, oh, this is how you future proof.
[02:09:53] But like,
[02:09:54] Future proofing isn't just about the fact that technology still works.  It's, it's, it's a matter of like, are the patterns relevant?  Is it the way that people develop? I've watched over the years,  the patterns change over time. So like, well,
[02:10:07] we already kind of see web components being a mismatch with the current patterns.
[02:10:12] So like, do we expect in five years for that to change?
[02:10:16] What if things go a completely different direction?
[02:10:21] I don't see it possible to use standardization as a method for future proofing.  It doesn't make sense. Innovation always leads to standardization.
[02:10:30] So even if something works doesn't mean that it's the future.
[02:10:35] And that's really kind of the point in the thought here.
[02:10:40] What do we got here?  It's funny that web-promoted frameworks aren't actually  smaller than other frameworks.  You think-- hope that leveraging the platform would  reduce the code for the framework.
[02:10:48] Well, I
[02:10:50] I think they can be like Prism has shown that they can be.  I think the problem is that,
[02:10:55] not the technology itself.
[02:10:57] Now to get into the really kind of heavy consideration.
[02:11:01] I think the concern and the thinking where this kind of comes in is that...
[02:11:09] How should I put this?
[02:11:12] Thank you.
[02:11:13] People...
[02:11:15] and proponents of these technologies, especially a lot of the platform, use the platform kind of technologies.
[02:11:21] Okay.
[02:11:22] are also happened to people who tend to be like, let's not use build tools.
[02:11:28] I've mentioned this before, and I'm old enough to sort of
[02:11:33] at least appreciate their perspective.
[02:11:36] I remember I was taking-- I mentioned this on stream before,  but I'm going to mention it again.
[02:11:42] When I was taking the, I think it was the JS, was it the JS survey this year? You know, the,
[02:11:49] there was a question about how you learned web dev.
[02:11:52] And my option wasn't on the list, which was view source  on other sites.  That's how you used to learn web dev.
[02:11:59] Like, like, people talk about it now. And I think the younger people kind of like laugh. I'm like, what are you talking about? You look like this is the infancy of the Internet. You didn't like there were like a ton of books. You like literally just went to a website when you saw something cool. And you're like, how are they doing that? And then you would like go and take it and copy it over.
[02:12:21] Um,
[02:12:22] That was like 95, 97.  Like I was a kid.  I was like...
[02:12:29] really young at that point but but like that's that's how I learned um
[02:12:34] Yeah.
[02:12:35] And I think there's a desire to get back to that kind of simplicity, right?  A desire to be able to like just...
[02:12:45] write some JS, have it just work, don't need build tools, use, you know, some tag template literals, use those things and just kind of go like, here's the experience.
[02:12:57] you know, and people can learn from it and, you know, and just return to that web.  You know, we have so many new tools we didn't have back then to make things better.  Import maps, ESM modules, like all these things, these crazy CDNs that kind of sort of pre-bundle stuff for us to a sense and like pre-prep it and...
[02:13:17] I
[02:13:18] And, you know,
[02:13:20] Thank you.
[02:13:22] Yeah, some other people who don't mind showing their age.
[02:13:28] Thank you.
[02:13:29] Thank you.
[02:13:32] - Right, and like,
[02:13:36] Thank you.
[02:13:38] The truth of the matter is
[02:13:41] We've entered an age of optimization.
[02:13:45] and tooling that
[02:13:49] even with the new features in the browser,
[02:13:52] They can't keep up.
[02:13:54] I pointed this out before.  I think there's a thing about comparing minification and gzipping of CSS to JavaScript and how that's like a terrible comparison.  But they can't.
[02:14:07] Right? Like...
[02:14:11] On the framework side, we're sitting there going, you know, have we hit the limits of what we can do with HTML and JavaScript?
[02:14:18] We're literally sitting there going like Svelte, in Marco, let's compile in the reactivity into the language as a way of getting past some sources of problems.  In Solid, even though I use compilation for the modernization of things and performance, I've actually been trying to...  The secret to it is I try to use compilation as the least amount as possible because I've been trying to keep things to JavaScript.
[02:14:48] Solid has a lit renderer.  You can use solid without a compiler.  And you know,
[02:14:56] there's you can i mean i don't think it's a great experience but i mean it's performant it's it's  basically one of the most performant ways to use lit it's it's it out benchmarks is like lit html  and all those kind of tag template libraries because it leverages the the reactivity the  fine-grained stuff that solid does so like you know i it's probably one of the fastest ways to  to use tag template literals i think one of the i think there's a vdom library that uses them faster
[02:15:26] Thank you.
[02:15:27] But essentially, like,
[02:15:31] But knowing that you can always do better, right? You use the JSX, you get more performance.
[02:15:36] You can do better tree shaking.  You make smaller bundles.  So it's kind of a weird thing because...
[02:15:42] It isn't about performance.
[02:15:45] And, you know, because people are thinking less is more, but actually the tools make our stuff better.  I don't know how much we want to trust in the tools, but essentially...
[02:15:56] We've gone to a point with JavaScript frameworks that they're smaller and they're faster than they're kind of,
[02:16:02] naive native counterparts.
[02:16:05] And
[02:16:06] it's a weird juxtaposition because
[02:16:09] Like where I'm sitting...
[02:16:12] They've already lost.
[02:16:14] But...
[02:16:15] Like there is an incredible desire there.
[02:16:17] to see this
[02:16:19] through and
[02:16:24] return to this sort of simplicity.
[02:16:27] Thank you.
[02:16:29] Thank you.
[02:16:30] Thank you.
[02:16:31] Thank you.
[02:16:32] Thank you.
[02:16:34] Thank you.
[02:16:35] Oh, yeah.  Yeah, sure.  I think I might have shown this before.  But...
[02:16:43] This is the reason...
[02:16:46] Um...
[02:16:49] What I call it, HTML.
[02:16:52] Oh.
[02:16:54] Thank you.
[02:16:55] This is the whole reason that...
[02:17:00] Yeah.
[02:17:01] that I get people to compile JavaScript.  Like, Solid, we ship the JSX code,  but I tell everyone to make a client build.  It's because I want people to be able to use every Solid library
[02:17:15] in the browser.
[02:17:17] essentially,
[02:17:20] without...
[02:17:21] without having to use a build step.  So I get the libraries to make the client stuff  and then you can CD in it.  But essentially...
[02:17:30] Our lit renderer
[02:17:32] It looks--
[02:17:33] kind of like this, right? And I've got some
[02:17:37] Custom components using dollar signs in here and some nested fallback.  This is suspense.
[02:17:44] This is solid zap router. This is all the libraries you're used to. Do we have transitions here?
[02:17:50] Can we do see those dots?
[02:17:52] That's the transition stale state.  So this is like, you know, whatever you call it, concurrent rendering.
[02:18:00] without a compiler and
[02:18:04] using all the same solid libraries.  And I made a little game in here, right?  What's this?
[02:18:12] undo the moves.
[02:18:15] What will let's let's look at let's look at the tic-tac-toe example.
[02:18:19] I made a few components.  You see you have to kind of wrap stuff yourself,  which is kind of a pain.  But I mean, there's no compilation step here.  This is just,
[02:18:30] using our router and just
[02:18:32] using type template literals.
[02:18:36] Thank you.
[02:18:37] Thank you.
[02:18:39] Thank you.
[02:18:40] Mm-hmm.
[02:18:42] Yeah, definitely, right? Vanilla is definitely faster, but yeah, it's challenging to actually write that yourself. And what I was actually getting at is,
[02:18:53] Vanilla with web components isn't necessarily faster because the overhead of the web components. But Vanilla itself is definitely faster.
[02:19:03] Thank you.
[02:19:04] So yeah, I mean,
[02:19:07] I wrote, it's funny because I did discuss, there was a discussion today on Twitter.  And I was actually trying to.
[02:19:15] Mm-hmm.
[02:19:15] I think there's a little bit of misunderstanding here, but I'm going to show it anyways. Justin, the creator of Lit, was like, the single best thing that React brought into the framework world is lack of reactivity.  Trying to patch the world's observed changes so object expression is expensive and a fool's errand in many cases not helpful or keep it simple.  And to clarify it.
[02:19:34] against LIT and say MobX's reactivity models, there's a huge important difference between global reactivity and local opt-in reactivity. Making a property the developer owns reactive is fine, but attempting global reactivity is onerous and leaky.
[02:19:47] All right.
[02:19:48] I was a little bit, you know, miffed.  I was just like, wait a second.  Because I identify a lot with MobX.  I actually get what he's saying now.  He was actually talking about having proxies that just leak out everywhere.  And to be fair, Sala does have proxies like that.  Although we tend to make them read-only.  And because we make them read-only, we don't have the same...
[02:20:10] concern.
[02:20:11] per se, but
[02:20:13] I was like, what's this, what's going on here?  Like not helpful, all this stuff.  I'm just like, expensive, what's that?  It's cognitive?
[02:20:23] Because from a performance standpoint, this sort of react has incredible benefits, right? And I wrote an article a couple years ago about this. This was probably one of my first articles to kind of
[02:20:36] Thank you.
[02:20:37] Thank you.
[02:20:38] I actually like this article a lot.  I actually, what I did,  can I get rid of the stupid sidebar?  What I ended up doing was I took...
[02:20:48] All the versions are solid.
[02:20:50] proxy.
[02:20:51] signals,
[02:20:52] These ones are actually still proxy, technically.  So they're a bit slower than you do.  But then Lit and Hyperscript-- sorry, why did that open?  And then I took the fastest libraries that--
[02:21:06] Yeah, yeah.
[02:21:08] Right.
[02:21:13] Thank you.
[02:21:13] Okay.
[02:21:14] Yeah, he was talking about zones and like object.observe. I realized that after the fact, but he used MobX in his first example and I was just instantly like...
[02:21:25] Solids like MobX, Vue's like MobX, you know, like kind of on that.  His point is well made.  It just, it wasn't clear, but it did kind of bring back this old article from 2019 because, you know,
[02:21:39] And it's kind of to the point that I was talking about.  I was really interested in what makes performant rendering.
[02:21:47] I kind of decided that there's three different types of templating languages and different run times behind them. And is there actually a truth to that some are better than others?
[02:21:58] Right. Like, is there actually some kind of truth thing?  So I took the fastest VDOM libraries. I took the fastest.
[02:22:07] tag template string renderer libraries or whatever you want to call them. I took the fastest,
[02:22:13] you know,
[02:22:14] Fine-grained libraries. Solid was not the first fine-grained library to use JSX. The credit goes to surplus. I've improved things over time, but, you know,
[02:22:25] And essentially, I took that and was like...
[02:22:29] What is the fastest way to render the DOM?  And the first thing I did was I took Hyperscript, which is what JSX compiles to, so most of the time, not in Solid.  And Solid has a version of Hyperscript.  And I was like, let's take the fastest VDOM libraries and see how it compares.
[02:22:45] There you go.
[02:22:47] The fastest VDON libraries using Hyperscript are faster than Solid using Hyperscript.
[02:22:52] And it makes sense because they just call the functions and produce their output and they're done.  When solid...
[02:22:58] we have to set up the subscriptions.  And without that knowledge of ahead,  how to do that the best way,  we have to do all the same object iteration and walks  that the VDOM libraries do,  except then we're setting up more expensive subscriptions.  So like this was for me,  a very good evidence that mixing the VDOM  with a reactive system generally is...
[02:23:17] at a baseline, unless you can optimize the templates, which Vue does do, is just a really bad idea.  But like older Vue didn't. And basically in benchmarks of this was the worst of both worlds.  So like this is kind of an indicator of that overhead. For this, there's a reason why BDOMs use  Hyperscript. It makes sense. It's just function calls. It fits their model.
[02:23:39] So then I kind of moved on and, you know, obviously different memory characters, but nothing too big there. But where is then I went to string templates and I took lit solid lit.
[02:23:49] and DOMC, which is kind of a just-in-time string compiler.
[02:23:57] And it was...
[02:24:00] it
[02:24:01] This kind of showed that the fact that once you have strings  and you can kind of analyze the HTML structure,  you can make it optimal essentially.
[02:24:10] And the thing is that Solid and DOMC actually did kind of just in time compilation. They'd look at the string at runtime without a build step and kind of go, okay, this is what we need to clone. And these are the holes. And they'd analyze it.
[02:24:22] what it needed to to optimize it. Lit took a much more simple approach. And as you can see,
[02:24:30] essentially DomC and Solicun in the middle, but are significantly faster at lit than lit, right?  Because of, you know, being able to leverage sort of a just-in-time compiler approach.  It was kind of interesting because this approach is very wide in terms of performance.
[02:24:46] And then...
[02:24:48] But then when you get into the JSX libraries, it's just like...
[02:24:53] I want to compare the difference between proxies
[02:24:57] and between signals, essentially, mostly.  And they had surplus-- and sorry, clone nodes.  Surplus creates elements one at a time.  Solid clones nodes.
[02:25:07] in both, and this is signals and proxies.  And you can see that the cost roughly between cloning nodes  and not cloning nodes--
[02:25:14] because surplus uses signals, not proxies, and the cost between proxies and and signals are both almost equal.  It's basically, you know, it's five percent over the whole thing.  And essentially there's just a little bit of overhead for proxies and a little bit for cloning.  But yeah, ultimately, all this ended up showing is that in the end,
[02:25:39] you know, all of the fastest approaches, like the hyperscript was a bit slower, but all the fastest approaches
[02:25:47] you know, are still relatively fast.  Like if you put in a single table here, where is it?  Here.  You can see that, you know,
[02:26:01] essentially like
[02:26:03] It's a mixture. You have string, you have signal compiled. It's the string one from DOS. He was even faster than solids proxies and then you can get to solid lit. The virtual DOM libraries.
[02:26:20] solid hyperscript, and finally, lit HTML is the slowest.  And I mean, this is no jab at lit HTML.
[02:26:26] I actually took this opportunity to make a jab at Svelte, which wasn't fair, I suppose.  I said that Svelte wasn't fast enough to be in this table.
[02:26:36] But...
[02:26:37] Essentially, the kind of thing that this kind of showed is that
[02:26:45] It isn't that simple to talk about performance because
[02:26:49] Virtual DOM doesn't mean it's just slow.
[02:26:53] no build, like there's different ways you can attack this stuff and people shouldn't like necessarily get kind of fixated on the approaches of libraries. You can do
[02:27:03] take template literals with sort of a just-in-time analysis and fine-grained reactivity and get even more performance than using, like, the template part approach that they want to bring to the browser.
[02:27:16] that you use in Lit. There's always different ways to kind of maximize the tooling and change the paradigm. So...
[02:27:28] you know, it's very hard to make decisions
[02:27:32] primitives that are higher level.  I think...
[02:27:37] But I mean, it's not a simple story because if you just focus on the little pieces and hope that they kind of Voltron up into something big, you're equally going to have problems because sometimes those little pieces aren't useful pieces.  And you think you're steering the ship in a good direction and you start seeing how the pieces fit together.  And then...
[02:27:56] something changes, the course cracks and suddenly those pieces look out of place.
[02:28:00] Or maybe if you had a complete thing, then at least it would be useful.
[02:28:05] So this is a hard problem in terms of standardization and innovation. The biggest thing I've observed over the years is like, never bet that you can predict the future.
[02:28:18] I mean, the future predictions are always within a year or two kind of out.  You can usually do a pretty good job of figuring out what the next couple of years look like,  because technically they're usually already here.  Like someone's already working on the problem.  And I spend a lot of time looking wide into the ecosystem to understand what people are working on right now,  because that's where the future is.  It's already now.  But beyond that and talking about like...
[02:28:44] future proofing and stuff. Future proofing is garbage. And it doesn't matter whether you're using React, the most popular framework, or whether you're using the platform or so. Things always change. That's the constant.
[02:29:00] Thank you.
[02:29:01] Honestly, I knew today wasn't going to be the longest stream and I'm kind of nearing to the end here. We talked about web components, we talked about the platform, we talked about, you know,
[02:29:16] just the kind of state of, of, of,
[02:29:20] you know, standardization. I don't know if there's anything anyone else wants to ask or if we're just going to call it early tonight and get to our weekend sooner. I didn't even finish my drink. What do you know?
[02:29:32] Thank you.
[02:29:33] It's amazing.
[02:29:35] But we covered a lot of stuff today.  And I'm glad everyone was able to join me.  So just give me another minute here.  As I said, I've got some time to finish my drink.
[02:29:47] Otherwise, I think we just call
[02:29:51] Call this one a night and move on.  I hope that I think my plan,  I always have plans for what I'm going to do like the next week,  but I always try.
[02:30:00] change them, which means that
[02:30:02] Anything that I say is more like a prediction rather than a reality.  But what I'm hoping to do, I think, next week is –
[02:30:11] essentially
[02:30:14] Some of the...
[02:30:16] submissions for the solid hack have started coming in and um it's you know there's still a couple  weeks to get them in that's why i'm waiting to next week to cover because then you know  it'll kind of remind people the week before but um
[02:30:29] I think I want to just kind of look at a few of those. And I understand technically speaking, since the voting system probably highlighting stuff on stream might be unfair, perhaps.
[02:30:41] I, I just, I'm just honestly curious to what kind of libraries come in and maybe that's an incentive for people who want to get their submissions in earlier to do so I don't know.  But I think it would be fun to kind of look because I people have been working on some amazing stuff I already shared a little bit of it on Twitter or you know as people start posting it like if you write an article in dev or on Twitter flag, you know, hashtag solid hack at at solid it or whatever and I'll try and promote it or put it up there because I want to bring attention to the hack and
[02:31:11] I think people work on really amazing things.
[02:31:14] So,
[02:31:16] Oh, man. There's some good comments coming in now. So that's all to the browser.
[02:31:25] I actually didn't talk about that today, how Seb was suggesting basically adding React to the browser. Someone made a comment, I saw a retweet or something, they said something along the lines of, "You wouldn't need to add your framework to the browser if you added more fundamental pieces to the platform and use those." I'm just thinking to myself,
[02:31:46] It's such a funny argument because I think whoever was it was like big on the web component side.  And I was just thinking, like, aren't you just adding your framework to the browser?  Like...
[02:31:54] Like, aren't you just trying to add to the browser?  Like, it's funny.  It's like same stuff, different pile.  You know?
[02:32:04] Yeah, no, I hope we don't add libraries to the browser. They change. That's the whole point. Things get better, improve, you keep on moving.
[02:32:18] Yeah, I don't always, but I will link all this stuff. I actually have a list of the links.
[02:32:24] So I'm going to drop those in today.
[02:32:27] Thank you.
[02:32:30] Design systems that you want to work cross-platform. Maybe you don't control it. Maybe people build their own websites and whatever technology you want.
[02:32:42] widgets, like things that you can like embed.
[02:32:53] Interface is much, much, much, much nicer than using like, what do you call it, like a jQuery style interface.
[02:33:03] micro front end type stuff. If you're designing those kind of interfaces might make sense. It's a good interop layer. You don't need it. But like if you wanted to make a nice, you know, a sort of micro front end type architecture, I consider it like Astro. I don't know if they use actual web components, but like the way their islands work, it kind of looks like web components. It's just it's a good boundary to create
[02:33:30] to like completely separate stuff, essentially.
[02:33:35] Yeah, basically places where you really want to set up the walls or places where you can't depend on where they're going to be used.
[02:33:44] But if you control the application, like you're making the thing yourself, then and you control the whole universe or like essentially like maybe you control all the apps, then they're kind of just overhead.  Sorry, there's one more place.  If you're trying to migrate from one framework to another framework, they're a good temporary step.  They're a good way of like putting two things on the same page.
[02:34:14] site or whatever a little bit. It might be acceptable on certain types of sites, but
[02:34:19] And web components are really good for migrating from one thing to the other thing.  So, I mean, sometimes you get to a certain scale where you want to support a bunch of stuff.  But as I always say, you know...
[02:34:31] Just because you can put any framework on the page doesn't mean you should put every framework on the page. This is kind of the trap you have with micro frontends or web components or Astro or whatever, because you're like, who lit, view, react all on the same page.
[02:34:46] And, you know,
[02:34:49] what is it, 13 kilobytes,
[02:34:52] 20 kilobytes and 43 kilobytes, you know, like that's just pure overhead.
[02:34:59] So, yeah, there are some places where they're useful, but yeah.
[02:35:09] Thank you.
[02:35:11] how do you keep being productive?  I noticed we suffer from the fact that we're easily distracted by interesting tech,  but unlike you gets the job.  Well,  that's the thing when it comes down to making the decision,  you've got to make the decision and you just live with it.  If you keep on trying to redo things,  you're going to get stuck,  right?  You make the decision to live with it.  And that's what you do from works.  I have the benefit of working on frameworks.  I get to play with stuff and I prototype stuff and whatnot.
[02:35:41] who works on frameworks to look at other frameworks,  understand what's going on.  That's like the basis of everything I do.  I just literally look at what everyone's doing  and try and understand it.  But from a business sense,
[02:35:53] Don't worry about it. Pick a good solution. Do...
[02:35:57] do diligence, do the work, and then just build the thing and recognize that in five to seven years,  it's going to need to be rewritten.
[02:36:04] That's how the web works.
[02:36:06] That's it. Don't worry about future-proofing. You will rewrite it.
[02:36:11] Thank you.
[02:36:19] I'm not sure things will always change. I do think we'll get to a point where things will vary due to taste. But yeah, I mean, we just chase it in different places. Like DOM rendering, like the sake of this article that I was looking at here, you know, I love this because it's such garbage, the only one.
[02:36:39] Like, that's been a...  We haven't seen a movement in a DOM performance, basically, in...
[02:36:46] How long has Solo been around?
[02:36:49] four years. I would argue before that, like surplus. So since 2016,
[02:36:55] Six years ago?
[02:36:57] we've known all the best ways to get performance in the DOM. It hasn't changed.
[02:37:02] in six years.
[02:37:03] I'm so like before Svelte came out or Svelte 3D or whatever, we already had faster ways to render the DOM. Like, you know, like we already like this stuff has been known for years.
[02:37:16] But hydration has been a harder problem and doing SSR.  So we've shifted the way that way.  Eventually, maybe eventually, eventually, there'll be something.  But we're still changing the model right now, right?  So...
[02:37:32] I think stuff's changing pretty drastically over the next few years.
[02:37:36] I don't know, maybe in 2025, we'll be like, we finally did it. We finally solved the web.
[02:37:42] But my gut feeling is what's going to happen is –
[02:37:46] When we get to the limits of what we can do with SSR and with DOM rendering, which we've already hit those walls, we're going to decide that our primitives aren't good enough.
[02:37:56] You know, like,
[02:37:57] like in a sense react server components you know conceptually is like the the next big thing or  like whatever that kind of mentality is partial hydration mark or whatever is quick is going to  be is the next thing but i think after that someone's going to be like flutter but better  or actually good or whatever is going to be the next thing after that and then yeah maybe then  around that time you know so 25 we're pretty happy with react server components and like the partial
[02:38:27] So accessibility is built in and we're going to do 228 and then
[02:38:30] Oh, it's WASM time, right? That's about right. About five, six years from now, people decide that they can do everything with WebAssembly and then the Rust overlords will come to die.  And then, like, I don't see this slowing down. Like, anytime soon, I'm sorry for the people who are, like, kind of tired of the fatigue.  It's fine. Just get off at any step. Build your app. Choose suitable technology at a time and just know that it's going to be rewritten in five to seven years.
[02:38:55] It's that simple. There's no signs of this slowing down anytime soon.
[02:39:03] Thank you.
[02:39:04] Thank you.
[02:39:06] Thank you.
[02:39:06] Thank you.
[02:39:09] Thank you.
[02:39:11] Thank you.
[02:39:13] Yeah, okay. Yes, okay. This is a big one. I would love to see detachable document fragments.
[02:39:20] and the longest increasing sequence, yeah, whatever,  the diff algorithm that everyone uses on lists,  those two primitives would be amazing to be built into the DOM.  There are things that every JavaScript framework uses,  like fragments.
[02:39:32] And list of.
[02:39:36] It's more primitive than the, like, let's just write our web component side of things.  But if you wrote an optimized version of that...
[02:39:43] You like...
[02:39:46] Every single JavaScript framework uses this.
[02:39:50] I don't know if like where like it's not the same kind of end user facing thing but like
[02:39:57] and it does have a nicely wrapped API, but if you talk to framework developers about what they want,
[02:40:02] It would be it. Do you know how much complexity it takes to make fragments work? You can't use document fragments because once you insert them, they get removed, so you have no traceability. I used to use document fragments in Solid, and then there's a spec for proposing it from, again, Andre Giamachi. He's the biggest web component proponent out there, but he gets the limitations, and he's really trying to improve the web, but his specs haven't been passed through. I don't know. I guess Google kind of drives the ship there. And
[02:40:30] God, it would be so nice to not...
[02:40:33] Every time you run a new framework, you're like, how the hell am I going to solve fragments?
[02:40:37] You can't select ranges of elements in a performant way.  It'd be great if you can just go like, here's the range.  Just-- you know.
[02:40:46] um yeah thank you dylan for bringing those up those would be amazing
[02:40:50] Every framework, yes, every framework.
[02:40:59] So, yeah, I mean, I've gone on a bit of a rant here at the end of the stream, but
[02:41:06] Yeah, I think...
[02:41:08] I think there's some common themes here.  I think things are still moving at a good speed.  There's going to be lulls.  There's going to be things like the last few years.
[02:41:18] I think I saw a tweet this week where someone was like, I think we're finally getting to the point where the paradigms are, you know, things have settled and we're just, you know, sitting in there and seeing gentle optimizations.
[02:41:28] Oh, man, you have no clue what's coming.  Because, like...
[02:41:35] There was a lull from 2016 to 2020. React kind of won and we were pretty happy with it. But it wasn't a complete lull because
[02:41:44] That's the same time period. The React team had already moved on. They were like, okay, what's next?
[02:41:49] What comes after GraphQL?  Like they're...
[02:41:54] It's obvious that
[02:41:56] that there's room to improve.
[02:41:58] And I mean, even right now, the biggest obviousness on this is,
[02:42:03] the bloat of single page apps. Everyone
[02:42:06] acknowledges and understands that single page apps are freaking huge. There's a reason Rich gives a talk on transitional apps. There's a reason that, you know, people are exploring partial hydration, Astro and stuff. Everyone knows.
[02:42:19] that there's an issue with the size of single page apps.
[02:42:23] There's lots of ways to attack that problem.
[02:42:26] But...
[02:42:28] there is a problem, which means that there will be change.
[02:42:31] It's that simple. And then there will be the next problem. And I don't know, maybe some of this is inherent to the web platform, some inherent to the client server model that will always be unsatisfied until everything is completely instant. Maybe hardware will, you know, like the edge is the first step on the slide, will just make these things work.
[02:42:51] better but
[02:42:52] I mean, you know, people are always working on improving this stuff.
[02:42:57] Yeah.
[02:42:58] Where are we?
[02:43:04] Yeah, I mean, the funniest things about a lot of these wars is, like, new standard versus old standard, right?  Like...
[02:43:13] I understand both sides.
[02:43:15] a lot of things don't support ESM nicely, which is really unfortunate because there's another contingent and I have to admit I'm part of that contingent, which is just like just use ESM and just
[02:43:23] force the web to improve and get there.  But these kind of growths are always going to be painful,  and there's going to be like,
[02:43:30] almost like a
[02:43:33] traditionalists, I don't know what to call them, like people who support the legacy option, just out of like,
[02:43:39] familiarity and it like
[02:43:41] choosing sides. It's kind of like the no-bill
[02:43:45] kind of
[02:43:46] view the script tag kind of people like it there's something there that they really loved it made the web the web for them
[02:43:55] And over time,  JavaScript, the language,  has gone away from, like, JavaScript,  the machine or something.  And...
[02:44:04] Thank you.
[02:44:06] To me, this is like a long lost battle. But I mean, what do you what do you say when there's something that you love you keep to it like I can identify with that I love fine grained reactivity, when the industry almost completely killed it.
[02:44:22] Um,
[02:44:23] Yeah.
[02:44:23] And I kept on working on it.
[02:44:26] And who knows, by pure chance,
[02:44:29] It came back again.
[02:44:31] So,
[02:44:33] Sometimes the old comes back as a new, but other times the old is just old.  So I don't know.
[02:44:39] It's, it's, it's, there's so many aspects to this.
[02:44:45] Yeah, that's the term, isn't it? Webmasters. Internet explorers. You all are great. Oh, man.
[02:44:57] Thank you.
[02:44:58] Thank you.
[02:44:59] Okay.
[02:45:02] Thank you.
[02:45:03] Thank you.
[02:45:04] Bye.
[02:45:05] Yeah.  For sure.  But it did make...
[02:45:13] tree shaking for tooling easier, right?
[02:45:16] Thank you.
[02:45:17] I
[02:45:19] And it looks nicer. I mean, part of the problem, let's face it, the browser didn't come up with a module system and Node.js did.
[02:45:27] You...
[02:45:29] There's always that kind of proprietary thing and the web doesn't want it.
[02:45:34] The web,
[02:45:36] Oh.
[02:45:37] The web is built by people and standards are built by people.  And I feel like,
[02:45:42] Thank you.
[02:45:42] I feel like
[02:45:46] Sometimes the standards are almost spiteful. It's so funny for me because CoffeeScript, as many of you know, basically got absorbed into the browser, right?  Like every feature is getting there eventually. CoffeeScript is so ahead of its time.  I mean, obviously there's obvious things like class, but all the stuff they did about spreads and rest parameters and...
[02:46:10] you know, arrow functions and like,
[02:46:13] I know a lot of that came from Ruby and stuff too, but...
[02:46:15] CoffeeScript, optional chaining, null coalescing, all those features were in CoffeeScript back in 2010.  You felt like you were developing in the future.
[02:46:24] do expressions like the list is endless, but every one that gets brought into JavaScript
[02:46:31] it's like they chose to do it differently for the sake of doing it differently.  My favorite one, and maybe it's because of my lack of knowledge of language,  is CoffeeScript put the dot, dot, dot for spreads and everything on the other side of the variable.  And maybe I need to look at other languages.  It was just so weird to me that JavaScript was like,  no, we're going to move the dot, dot, dots just to the other side.  Like...
[02:46:55] I don't know why, and maybe there's a good reason, but it's like...
[02:47:02] Every time there's just like a little bit when they borrow for something to make it not the same as what they took from maybe for originality or whatever.
[02:47:12] Like the browser needed a module system.  So yeah, and ESM is well designed, but I just...
[02:47:17] I mean, other than like the, you could always do really cool stuff with requires, like in terms of like dynamic...
[02:47:23] imports top level and stuff like there's places and cases that aren't covered by ESM, but maybe it's good for but like,
[02:47:30] from a design standpoint, I don't know. I'm not gonna have a huge opinion about that. But, you know,
[02:47:36] I think there is a bit of that.  I think we have to acknowledge that the standards and stuff are built by people.
[02:47:42] Yeah.
[02:47:47] Yeah, ESM is, it's been tricky. I mean, we had this problem with Veed and Marco, like once
[02:47:54] ES build essentially
[02:47:56] is be under the hood and once you get into like a marco file then you try and get back into cjs  which is real for real companies companies like ebay um for example you you suddenly are like oh
[02:48:05] ES Bill doesn't know what to do with CJS.
[02:48:11] Yeah, yeah, for sure. There's dead code elimination and stuff in CJS tools too. Yeah.
[02:48:17] Thank you.
[02:48:18] Yes, CoffeeScript won.
[02:48:21] Honestly, man, he was a force.  We don't have this anymore.  Like, the, like...
[02:48:27] the
[02:48:28] JavaScript.
[02:48:30] I'm hoping we get back to this point.  Like the TJ Holloway Chucks and the Jeremy S. Kennis of the world,  JavaScript and even the Resig or whatever, like JQuery,  JavaScript in those early days,
[02:48:47] had more than just frameworks. It had like superhero devs that created a whole ecosystem of libraries under their work. And like, backbone underscore coffee script. That's all Jeremy Eskenis.
[02:49:08] Yeah, don't ask me what TJ's made.  He made everything.  And there's a few others.
[02:49:15] There's just...
[02:49:16] The guy who broke everything by moving from CJS to ESM, I forget what his name is, everyone knows him. He built the other half of the node libraries that TJ didn't write.
[02:49:27] Like, I
[02:49:29] It's kind of, there's so much excitement and innovation at that time, but I think a lot of those people kind of moved on from JavaScript, which is fine. Maybe it's a solid language in that sense. Maybe that is a sign of maturity, but...
[02:49:42] Yeah, things have kind of fallen into more stable patterns. So yeah, I mean, this stuff just takes time. I mean, we're all glad Internet Explorer is finally dead.
[02:49:54] So,
[02:49:55] you know, it won't be long before. Like it's so much easier now than before in that sense. So,
[02:50:00] Maybe we have nothing to be complaining about.
[02:50:03] Thank you.
[02:50:05] Thank you.
[02:50:05] Yes, yes, that's the other one.
[02:50:09] Yeah, no.
[02:50:13] Yeah, it's it's now I'm just being old and nostalgic, right? So I have my own.
[02:50:19] you know, tied to legacy. We can't really escape it, so to speak. But I still think,  I think there is a really interesting future that's unfolding right now. And, um,
[02:50:33] you know, don't worry about that. You don't have to worry about the FOMO piece. You don't have to jump on every new framework.
[02:50:39] It's fine. It's going to take...
[02:50:41] Hmm.
[02:50:42] years of stuff to shift. As long as
[02:50:45] I hope when the opportunity comes, you look at the options and you make the best decision at the time.  That's all you got to do.  I think that like...
[02:50:57] It's OK. You know, it's like this this narrative that we have right now is probably the most unhealthy narrative on the Web.  This like there is really.
[02:51:08] Like there's, there's just like part of the thinking right now is we're trying to actually unify websites and web apps. We're trying to solve hydration and single page apps and everything into a single platform.
[02:51:20] framework that can handle all that. And I appreciate that effort because having one tool to handle the spectrum is important too for companies so that they can share components and so that they can like actually build and choose a tool. But
[02:51:34] Thank you.
[02:51:35] Yeah.
[02:51:36] Does everyone have to use the same framework? Like, does this all pile into the same bucket?
[02:51:43] Um,
[02:51:45] And
[02:51:46] Thank you.
[02:51:47] I mean, in the back of the day, it didn't. And I think the danger of like always, there's always something new that's going to be better than what's out there. So we have to keep the things rolling. Otherwise, we get stuck. And it's fine, we get stuck for a while. But in terms of when it's time to reevaluate, we need to reevaluate reasonably and let things move on.
[02:52:17] Hopefully if something gets, you know, there's a singularity.
[02:52:20] around React. And don't get me wrong, I like what React does. And I think React is a good choice. And I recommend people for a lot of projects right now, just because of where it is. But it's built on this whole, there can be only one mentality. And this was not always the case in web dev.
[02:52:36] People just want stability.
[02:52:39] Companies want stability.
[02:52:42] And that's fine, but stuff keeps on moving.  So, you know.
[02:52:50] Yeah.
[02:52:51] Oh, what do we got? People talking about WASM?
[02:52:58] Wasom will get there eventually.  I don't know for all sides because it's sort of heavy payload side.  But yeah, this is solvable, right?  Like, eventually.  I don't know how it's going to compare against...
[02:53:13] Like,
[02:53:15] Ultimately, I think Wasm actually has a ton of interest.  It might be ultimately the way JavaScript finally escapes into the server in a really powerful way.  Wouldn't it be great if our JavaScript actually could execute as efficiently as C code or something on the back end?  Wasm is a double edged sword.  There's all the Rustgo people hoping that their language makes it in the browser.  But I think there's a race on the other side to see TypeScript make its way.
[02:53:44] onto the server in an ultra-performant way.
[02:53:48] I don't necessarily think JavaScript and TypeScript are the best languages ever, but we sure have the numbers.
[02:53:54] Yeah.
[02:53:55] And there's benefits right now, like with SSR and stuff, like the only way you can get certain types of optimizations realistically without like building multiple apps and a huge amount of complexity is leveraging JavaScript on the server.
[02:54:15] Yeah, some people probably know more details about this than me. But the one thing that I've been pointing out to people is
[02:54:23] The gap between the fastest WASM
[02:54:27] Like the vanilla WASM and the vanilla and the framework WASM, like the fastest framework Rust thing, is bigger than the gap between the fastest JavaScript library and the vanilla JS. So even if WASM
[02:54:44] pushes forward. We'll see how much it pushes forward. It'd be interesting
[02:54:49] Like we've done so much more, I don't know what to call it micro optimization, but we've done so much more optimization to get as close to the metal in JavaScript that...
[02:54:56] I wonder if
[02:54:57] just the way we handle templating and all that stuff. I wonder if WASM doesn't actually necessarily,  maybe WASM's faster, but maybe the WASM frameworks aren't. We'll have to see.
[02:55:08] At a certain point, they probably will be, which is why I'm saying like, I'm giving it five years or whatever, which means like it's just going to line up as it's almost perfectly. It's going to be like this change and this change and this change. I just see this constant change for the next year.
[02:55:23] say decade.
[02:55:32] Yeah, it sounds like some people know more about WASM and details here. Yeah, AssemblyScript, the TypeScript thing. There's some good work going on. Some members of the solid community are getting into this because we're looking at solids and TypeScript. We're kind of doing this as a two-fourth approach. If we can make the types more sound, one of the guys who's close to Solid ecosystem, he's been bringing...
[02:55:59] kind of like some of the missing stuff to assembly script, especially around
[02:56:05] handling a DOM in AssemblyScript.  So our thinking is that we can get solid with AssemblyScript to compile the WASM
[02:56:16] in,
[02:56:17] you know, not right away, but in, you know, in the next little while, we can start looking at that. And that maybe that's that's our exit strategy. We'll see either that or at least for the runtime side of things. So I mean, it seems likely that I'll be in a place where I'm probably going to have to, like, write the compiler and raster something at some point, maybe use SWC. But on the runtime side, this seems like an interesting approach.
[02:56:42] to kind of explore, but, um,
[02:56:45] Yeah.
[02:56:50] Thank you.
[02:56:53] Thank you.
[02:56:55] The biggest thing about this argument is, and I've seen this at large companies and stuff like Module Federation.  I mean...
[02:57:03] is it's,
[02:57:06] Thank you.
[02:57:07] like things like versioning and stuff like,
[02:57:12] Not everyone uses the same version.  I mean...
[02:57:15] I don't know. There's so many details here that have me skeptical.
[02:57:23] Yeah, it's...
[02:57:31] Yeah, people talking about JS versus WASM in the chat. It's a hot topic.
[02:57:41] But yeah, there's a lot of stuff that's going to happen before Wasm becomes a player in this part. Wasm is going to continue to have more application. We're going to see it used in more different ways for specific processing. You know,
[02:57:56] I think what's going to be kind of a precursor to that is people are using web workers more now and experimenting. We see stuff like Party Town from Builder, but I expect to see more like offloading like like what if you have expensive computation, let's offload it to a web worker and
[02:58:12] I think once people start building apps around those patterns of maybe offloading to web workers,
[02:58:18] offloading to WASM starts looking more attractive for those competitionally heavy things.
[02:58:24] And I think that's the natural way that it might start seeing some player...
[02:58:29] adoption on the framework side, right? Because like with the web work, you can't access a dom  already, right? So you're already kind of playing with patterns that create
[02:58:40] certain abstractions. I don't know. I guess we'll have to see.
[02:58:49] Thank you.
[02:58:50] Thank you.
[02:58:51] Thank you.
[02:58:51] Thank you.
[02:58:54] Yeah. If there's a will, there's a way, you know.
[02:58:59] It's funny how we entered this WASM conversation when we started here about web components.
[02:59:06] I think it's inevitable, right? Because web components always ask the question of the future. And
[02:59:13] As I mentioned before, the future is kind of uncertain.  So it's kind of funny.
[02:59:20] I wonder.
[02:59:21] like even if they're really good at something, I wonder if it's kind of like, as I said before, like Linux, like is
[02:59:27] 2022, the year of web components, will we be asking that question every year for the next decade?
[02:59:34] I don't know, maybe.
[02:59:36] Thank you.
[02:59:37] Yeah, I mean, that's the thing.  When you bring up a specific technical...
[02:59:42] problem, someone's going to solve it, right? Like it's only...
[02:59:47] I think when you get to the base of the abstraction and realize like,
[02:59:53] something being what it's supposed to be,
[02:59:55] Because the thing that's going to kill something eventually  is compromise where you lose consistency.
[03:00:00] like,
[03:00:00] If something is well-designed and consistent, then at least it gets to be what it's meant to be.
[03:00:06] Thank you.
[03:00:08] So at a certain point,
[03:00:11] If something is designed and meant to be a certain way,  and there's limitations today,
[03:00:16] people will solve the problem to get it with enough effort or time to make it to get to where it needs to get.
[03:00:22] Thank you.
[03:00:22] But the thing you can't correct is if it's not what it's supposed to be.  Like if it's not like what it is, isn't valuable.
[03:00:30] And I don't think that's the problem with WASM.  It might be in a few years you might see that,  but I'm confident that they'll solve any problems.  And it was the same with Web Components.  I'm confident they solve any problems.  My concern with Web Components is
[03:00:42] they're not what they need to be necessarily for all the things that people think they should be. Like,
[03:00:48] they are very good at specific things,  but they're not everything to everyone or whatever.  So essentially...
[03:00:55] The limits to web components
[03:00:58] are never changing.  It's not a implementation bug.  It's like literally they are what they are.
[03:01:04] But that makes it a little bit different than--
[03:01:09] Than what we're talking about here.
[03:01:15] Yeah, Solid Start Stream should be coming soon-ish, maybe after the hack thing.  My biggest problem is I haven't had a chance to work on docs and fill out examples.  There's a couple of API things I really want to solidify.  I told everyone that we'd be Q1 for Solid Start Beta.  And as you know, in a few days, we're end of Q1, which means like, do I hit my deadline?  We're close.  Like, it's usable right now.
[03:01:45] things I needed to edge out, bugs in the core adapters that are unacceptable to
[03:01:52] like the two obvious bugs.
[03:01:55] But like...
[03:01:57] The pieces are all there.  They're just not...
[03:02:00] the way you might want to display them, so to speak.  We've handled parallelized data fetching, nested routing, middleware,
[03:02:09] Um,
[03:02:10] you know, stuff running only on the server versus server client, um,
[03:02:16] forms that are progressively enhanced. We've covered
[03:02:22] like
[03:02:23] You know, cookies, sessions, stuff.
[03:02:29] .
[03:02:31] A lot of the core stuff you're going to need, right, you know, to get started.  It's just we're missing some good examples, finesse, docs, all those things.  And while I can do that stream and showcase some of this stuff,  I feel like I want to get at a place where when I showcase it,
[03:02:46] the, you know, right after the stream, I mean, maybe not right after the stream, because it'll probably be super late wherever you are, you could just go pick it up and use it and just be ready to go with the beta. And we're just not there yet, even if
[03:02:59] the code is getting very close to being there and the structure and you could easily use it today. I want that next level there. And I think this, I just keep on pushing the stream back until I can do that, but I could demo it right away. It's just
[03:03:14] I want it to be in a place where, you know,
[03:03:17] you could just pick it up and use it.
[03:03:20] OK. OK, yeah, I guess it's time to-- we got the chat for an extra 30 minutes, right? I think I am going to call it quits now. I think everyone got their word in and we've clearly digressed into a different thing, just like that stream not too long ago we were talking about-- I can't remember what we were talking about, was it like syntax and we started talking about edge functions for like--
[03:03:45] a bunch at the end. So yeah, everyone have a good night, have a great weekend,  and I look forward to seeing you all next week.
[03:03:53] Bye.