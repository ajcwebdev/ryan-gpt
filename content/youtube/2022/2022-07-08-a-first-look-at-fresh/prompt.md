---
title: "jfT7aEoeaGE"
slug: "jfT7aEoeaGE"
duration: "3:57:53"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/jfT7aEoeaGE.m4a"
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
[00:00:00] All right, we are live. Welcome to my stream today. It's been...
[00:00:07] quite some time.  Feels like it's been a month and then it was like a month before that.
[00:00:14] As things would have it. I've just been doing a lot of stuff, doing a lot of vacation. I just came back from a four week road trip across the US and
[00:00:25] All the way into Canada, I went to go visit my great-grandfather, who...
[00:00:30] well, not my great-grandfather, my grandfather.  I talk from my kids' perspective now.  It's something you'll find you do when you have kids.
[00:00:38] Over in Thunder Bay, Ontario.  So I went pretty much in a big...
[00:00:43] loop around and came back down through the Grand Canyon.  It was like six--
[00:00:49] over 6,000 miles of driving.
[00:00:52] Yeah.
[00:00:53] Thank you.
[00:00:54] Oh, yeah. Okay. We got some people in the chat. Yeah. Come say hi. Come join in. Um,
[00:01:00] Bye.
[00:01:01] I'm streaming this on YouTube like I always do, but
[00:01:04] I thought I would also run this in parallel on Twitch.
[00:01:10] So we'll see.  I have like no-- I've never really tried to promote or use  Twitch.  So I think I have like 10 followers or something.  So we'll see if anyone joins us through there.  But for now--
[00:01:21] We just run our normal stream.  But yeah, a lot's been happening over the last--
[00:01:29] the last month, I feel like I missed a lot actually while I was away. Previously, I was  kind of around and I just wasn't doing stuff, but I was like driving every day. I, I, I
[00:01:41] tried to check out what I could,  but I only really latched onto a couple of things while I was away.  So I've had to play a lot of catch up the last couple of days.  Um,
[00:01:51] So, yeah, a lot has been going on. Just rambling right now while I wait for some people to come in and join the stream. There we go. Here we go. People come in.
[00:02:01] Thank you.
[00:02:02] All right. Well...
[00:02:06] Yeah, how's everyone else doing?  As I said, I've been having a great start in my summer.
[00:02:11] Okay.
[00:02:13] Yeah. Hi, everyone.
[00:02:15] So many of you. Oh, man. I don't know. Yeah. Yeah. No, I've been doing good. Thanks.
[00:02:23] Um,
[00:02:24] Thank you.
[00:02:26] Thank you.
[00:02:27] Yeah, I mean, I was debating. I realized this morning, I was like, oh, no, I don't have lemonade.
[00:02:33] um and since i moved the friday streams earlier i was like okay i'm not going to do my normal  cocktails i mean you can pretend like i have a gin buck or something right now but  um no this is just an orange juice with ice
[00:02:47] Nothing too fancy.
[00:02:49] Yeah, no, that used to be probably the game to guess what I was drinking each Friday. But yeah, this is lunchtime now for me. So
[00:02:58] I don't want to get started too early. All right. Yeah. So I'm going to start this the same way I start all my streams.
[00:03:09] And just kind of talk about this month in JavaScript.  And right off the bat, we've had a lot of talk, obviously, the streams, obviously, a lot of talking about performance.  But the highlights I've noticed a lot have been performance related.  Maybe those are things I pick out at when I don't have much time, like when I'm trying to decide what I'm going to look at.
[00:03:33] Um,
[00:03:34] Yeah, I do see a couple people now coming from Twitch. That's awesome.
[00:03:40] But, yeah, let's just kind of go there.  I've caught a couple of things in the last two days, even, like other people's streams.  Like, you know, you saw Theo's performance-related streams where he was testing a really basic kind of like
[00:03:55] he was testing the server performance, like how fast can I get my HTML to the page? And, you know, now that we have things like Bunn and Dino Deploy and, you know, Cloudflare, like there's a whole bunch of movement there. And we'll talk about that a little bit today, although admittedly, my focus is usually on the framework side, like on the
[00:04:15] both on the
[00:04:16] based on the part he didn't cover on the--
[00:04:21] essentially, like, how long it takes to render stuff on the server from the framework perspective, that little gap, and also, like, hydration costs, client-side boot up, all those kind of things.
[00:04:33] you know, it's the other side of the spectrum. And yesterday I watched a great stream also with Mishko and the whole builder crew talking about the future of routing, which is, as you all know, it's a really big topic from my perspective. I think routing is sort of the missing piece we need for bridging the cap, you know, solving the MPA versus SPA debate that's been going on. So yeah, lots of good
[00:04:55] discussions and about performance um which is i said right in my wheelhouse so um really cool stuff
[00:05:02] - Yeah, the stream's back, yeah.  Yeah, bear with me, I've been...
[00:05:09] you know, trying to catch up the last couple of days. I also,
[00:05:13] got back into Netlify and doing all that stuff. I basically did my onboarding HR kind of training video type stuff. And then I was like, off again. So it's been it's been busy. But yeah,
[00:05:26] Yeah, yeah. We knew it was coming, right? It just--
[00:05:31] I was really excited a month ago when I saw that thing where Cloudflare announced that they were opening source, or not, was it opening source?  But they were releasing their runtime, too.  It's another viable option that probably is going to go beyond just their infrastructure.  So we're talking BUN, we're talking Dino, we're talking Cloudflare, talking Node.
[00:05:54] There's an interesting mix and match of both infrastructure and these JavaScript runtimes.
[00:06:01] somewhat consolidating on what those core pieces are that we need, like the whole browser-based  request response model and things like that.  So we're going to look at Dino today, obviously, because we're going to be looking at Fresh,
[00:06:13] But yeah, I think there's a lot of really cool stuff going on.  Let me just kind of share my screen here.  And I'm just going to start at the beginning because, you know, it's easy for me to go  timeline.  I left town on June 9th and I went back to around June 8th, so right before I left.  And the very first story that I found was a performance-based story, even back then.  Not that this is everyone's cup of tea per se, but as you guys know, worked with Marco,  the dev team, and I'm going to go to the show.
[00:06:43] The newest member of the MarcoDev team came over from Kroger and he,  he, he'd been working, he's written a great article series.  If you guys haven't checked it out. And he, he was, he was working on, um,
[00:06:53] basically upgrading Kroger's website. So he made a prototype and he's like, okay, look, we want performance, we want load time, we sell stuff, you know, these things matter. So he ended up on this path where he realized that an MPA was actually the way he wanted to go and made a lot of sense. And
[00:07:11] He just...
[00:07:13] Honestly, if...
[00:07:15] We don't have to watch the whole video, but just check this out for a second. Let's go back to the beginning here. Just so you understand and have a little context here.
[00:07:23] Thank you.
[00:07:24] The demo is what he made.  This is Kroger's current website.  This is Kroger's current native site.  Here's amazon.com and here's walmart.com.  And the whole thing is the demo is built with Marco using an MPA.  Kroger.com and walmart.com are using React.  Amazon.com is using their custom almost vanilla JS setup.  And the native app, I believe is probably, I don't know what it's using exactly, but it's built using native.
[00:07:54] He wanted to show load up time because I think some people are kind of –
[00:07:57] And native native knows that they have you. So they sometimes don't focus on how long the loading came in. So he basically launched everything at the exact same time on a mobile device with low, slow internet. And, you know, I like doing lighthouse scores and stuff like this. But this is this example is so illustrative, like, just watch how this comes in. First of all, the obviously the Marco MPA islands architecture thing comes around and then Amazon, Walmart comes in, but it's still sitting there loading, right? You're kind of like, okay, Walmart, Kroger is one of the most important things.
[00:08:27] and then finally comes in.  And he actually doesn't just do a single page load.  He actually does a checkout process.
[00:08:34] where you have to do it.  See, he already bought the item in the Kroger by this point.
[00:08:39] Um,
[00:08:41] And
[00:08:42] I mean, you almost have to pause along to actually see all the things,  but you find the results.  Like, these aren't all exactly equivalent, but he's actually showing, like –
[00:08:50] how the actual user flow is. And this is with
[00:08:55] You know, so you can't, you know, some people are like, well, if you're an MPA, you're going to reload a bunch of stuff into the page navigation.  This is taking those hits.
[00:09:02] completely into consideration. And just watching this is really interesting because you can definitely  see the spinner get in of the spas, so to speak. And obviously his demo is already done because  he was using streaming and stuff. But yeah, Amazon's pretty good.
[00:09:17] In terms of a huge company, Amazon is pretty good.  They finished at about a minute doing this workflow.
[00:09:23] And interesting, I think native finishes up pretty quickly here.
[00:09:28] But essentially, I mean, as I said, these aren't quite equivalent examples, but I mean,
[00:09:34] you watch this for a couple of minutes.  And I mean, we can go on, but I think it takes almost  a whole other minute for the React apps to finish.  It's just trying to show that maybe sometimes
[00:09:47] It's like one size fits all isn't where it needs to be today.
[00:09:52] I'm a big proponent of...
[00:09:54] the potential of us consolidating on single solutions here. But like, it's just it's just showing
[00:10:01] you know,  and honestly with the hindsight of knowledge,  like the Kroger rewrite,  he knew what he was writing better than the company did as new requirements  came and things got going,  but like,  I'm just still talking here and I,
[00:10:13] And, you know,
[00:10:15] Like, we don't have to watch at all.  I mean, I'm running out of things to say  while we wait for this stuff to finish.  So, you know, we'll just move on.
[00:10:27] Thank you.
[00:10:28] Thank you.
[00:10:30] Do you think the focus on e-commerce for JS purposes because unique requirements need to be both?
[00:10:35] I think it's because...
[00:10:38] It's one of the few places where page load actually really, really matters.
[00:10:43] Other places, obviously it's good.
[00:10:46] but it might not translate to your bottom line as much. And, um,
[00:10:52] E-commerce sites especially really like religious about testing this stuff like at eBay we had we had teams like speed teams working on this stuff and they made sure nothing ever regressed it's really hard because you can it's hard to add features and that have the page not slow down.
[00:11:09] So it put a lot of friction on velocity, and they've been trying to figure out how to make stuff work. But the problem is, like, all the way back to, like, the Java days,
[00:11:19] There was like when they had full Java backend, they've had these times and they're like, okay, we can't slip. So that's where Marco came from because it was like, nope.
[00:11:28] can't do that need to do this and the but the thing is what's challenging is if you have new  pages that don't actually have those stipulations you might let those slip and then it then that's  the new baseline so i don't know if the approach actually holds up completely over time but i mean  this is why builders make such a big deal about it and uh you know ebay and amazon like you use
[00:11:50] Amazon's one minute here for this flow is actually very good.  Amazon is one of the best performing e-commerce sites on the large scale.
[00:12:00] You notice he didn't put eBay in here.
[00:12:02] And
[00:12:05] I mean,
[00:12:06] Even, you know, like we know that, you know, eBay is not faster than Amazon in this comparison. I think he would want to focus on using Marco in, you know,
[00:12:19] in a different environment. But I mean, it's hard. So I'm very impressed with Amazon, even if that's a minute, because as you can see here,
[00:12:28] I think Walmart finished at two minutes and 14 seconds, and he didn't even get to the end of Kroger before he cut the video.
[00:12:35] Um...
[00:12:38] Thank you.
[00:12:39] Yeah.
[00:12:41] I love eggs from eBay.  Yeah, yeah.  Right.  So, but I'm just like...
[00:12:47] Yeah.
[00:12:48] It takes...
[00:12:51] It takes at a certain scale,  it takes effort beyond just the developer effort to maintain and keep that  going over for years and years and years.  And I think that's why it's always conscious.  And that's why it's an easy target to talk to coming in because like,
[00:13:06] You know you want those page speeds.  You know you want the SEO benefit.  You want to be able to show up.  Google starts ranking your pages based on performance and stuff like that.  So it's an easy topic.  The problem is my Hacker News and Hello World programs are not going to show the complete picture.  I'm a framework author.  So for me, when I'm looking at those examples, I'm looking at mechanics.  So I'm going to focus on taking something and pushing it to cranking it to 11 or whatever just so that I can see what's going on.
[00:13:36] where the bottlenecks potentially could be.  But the truth of the matter is that's still a death by a thousand cuts kind of approach.
[00:13:44] Obviously, the best example would be like a holistic real world example, but every real world example is different. And the more real world you make it, the harder it is to port it across things. So I focus on the micro and hope that enough things add up.
[00:13:56] And in my experience,
[00:13:58] At a certain point, they probably don't.  I think that's the whole thinking behind Facebook.  Look at this as a more tricky engineering problem, you know.  But...
[00:14:07] On the small scale, what I found with my work with Solid,  is if I just make Solid faster at every little thing,
[00:14:14] It's generally pretty good for everyone.
[00:14:16] Like it's a good baseline, right?  I just go, okay, fastest of this, fastest of this, fastest of this, fastest of this.  And then like it kind of averages out pretty good.
[00:14:25] But realize that it's not a foolproof thing.  This is just the best we can do with what we have.  So...
[00:14:32] And yes, if I leave the money inside.
[00:14:36] Yeah, exactly. It affects your bottom line. I've seen numbers, studies, some things internal I can't share. As far as we can tell, there is a direct correlation. But that's just an easy one for people to see. I thought it was really interesting that I was on a space with Dan Abramoff a while back, and he was talking about an example where...
[00:15:00] it was hard to use the metrics to figure out where the bottleneck was or what the issue was, because for something Facebook, it's not buys, but engagement. And he was talking about how
[00:15:12] as far as I could tell, the new solution was more performant, so they'd think they'd have better engagement, but it was getting lower numbers.
[00:15:18] It was actually some really tricky, intermittent, behind the scenes bug.  And if they just trust only the performance numbers, they might have not found it.  Like it was a really interesting space. Unfortunately, it wasn't recorded. It was very impromptu.  But this is hardly a science is what I just want to get out there. Right.  So anyway, we move on a bit.
[00:15:40] You know, also at the same time, if you missed this, this is actually kind of cute.  Math Phillips, one of the core maintainers of Astro, had mentioned that the whole, you
[00:15:53] progressive
[00:15:55] Part of the partial hydration happened by accident with Astro.  It wasn't like their initial idea.  They were working on the partial islands thing, and then...
[00:16:07] Yeah.
[00:16:08] And basically he was partway through implementing it and Fred was like, I kind of like how this stuff hadn't loaded.  So then they just kept that in and then made it, turned it into a switch.  I mean, it's a funny little anecdotal story, but this pattern that they came up with with the directive based or loaders is now getting copied all over the place.
[00:16:31] So...
[00:16:31] I think that's really an interesting little story, right?
[00:16:36] you know, the different pieces come together. Islands architecture obviously existed before Astro for several years, but this whole progressive islands thing, I think, is something we can credit them for. And it happened by accident. I love stories like that.
[00:16:51] Right.
[00:16:53] Yeah, I'm trying to remember what, yeah, more talking. And this is kind of along the same thing, right? Ryan Florence kind of went on a little spiel around the same time because he was like, I think people are really bugging him about partial hydration. And it's funny, the stream today is going to be about partial hydration with Fresh, but they're bugging him about it with Remix. And he's like, we'll see if you actually need it and what you're optimizing for, right? And
[00:17:16] I mean, there might have been a tone of like, you're generally not going to need it. He's right. Maybe for a lot of things, your blog said you don't need it. But I mean, we can go back here. This is this is a clear place where where there's benefits. So, you know, I think it's important to build to your use case.
[00:17:32] Okay.
[00:17:33] skip skip forward about a month because i'm trying to do this quickly so we can get to the good stuff  and the fresh right um
[00:17:39] So
[00:17:42] Really cool thing was I got to speak at JS Nation, and I did a talk on Solid's reactivity that I really enjoyed.  I've been kind of planning this talk forever.  I was going to originally do it as a stream, and then once I was kind of testing ideas on someone else's stream,  the guys from the core team from Solid liked it so much that they made a...  Dan Jutan went and made the intro video for Solid based on that.  I finally gave that talk at JS Nation.
[00:18:10] But also, Solid won Breakthrough of the Year on the Open Source Award.  So that was really quite cool.
[00:18:20] But it also kind of shifts into something that I saw a really common theme, and it lends to Rich Harris's talk at the Open Source Awards, and just a lot of what's been going on.
[00:18:33] The focus in the community right now, as much as we're talking about performance right now,
[00:18:38] and we're going to go in this wave, documentation is just such--
[00:18:42] a big,
[00:18:43] push right now. And if you didn't get to check it out, I mean, there's a sea chanty at the beginning, which people are kind of like 50 50 on. Do check out Rich Harris's talk. I don't know if it's available yet. We should look. I know that the YouTube streams for JS Nation are out there. So, you know,
[00:19:01] But I don't think it's, I don't know if it's posted anywhere.
[00:19:05] But it's definitely really cool. And he talks about the importance of that. And we're going to actually talk a bit about our efforts on the community meeting that we're having next week.
[00:19:16] I'm trying to see if I have that listed somewhere here, but yeah, we'll get there. Yes. But yeah, no, I just wanted to talk about that. No, this is not what I want to talk about. It's just, it's interesting. If you guys follow Dan Abramoff too, he has been going like a beast on documentation for React. And I don't know, even if you're not a React fan and you're into this stuff, a lot of you guys follow Dan already, but seriously, really interesting stuff.
[00:19:46] I just started bookmarking his stuff because I was like,  I need to come back and think about this stuff.  And it's,  and I have so many of them.  I had to clear a couple of them out of here so I could like show it.  Like he,  he,
[00:19:57] Thank you.
[00:19:58] They've been putting so much thought into this stuff, right?  I have so many topics because of what's been going on,  but I just wanted to highlight just how cool the documentation effort has been being
[00:20:10] going on. There's some other cool talks at the GIS Nation as well. Yehuda Katz from Ember introduced this universal rendering thing. It keeps on switching on me. And...
[00:20:23] It was interesting because...
[00:20:26] Oh.
[00:20:27] It actually is a lot of similarities to the system we have in Solid.  I think it's interesting because...
[00:20:33] There's this desire, perhaps, for us to have a universal rendering solution.
[00:20:38] And...
[00:20:42] *sigh*
[00:20:43] not user render, reactivity solution, because reactivity is something that's portable.
[00:20:47] Like every you've seen people go, oh, I can take this reactive system and then I can change my render and move it across.  This is a place where we have a natural divide where we can go.  We can switch our frameworks if we want to, so to speak, and we can put our logic.  But in a sense, the reactivity becomes the framework at that point.  And that's sort of the realization that led to a lot of stuff in solid because I was like, I was like.
[00:21:10] There's no way to be completely, what's the term, like,
[00:21:15] Like, not decoupled, but like completely free of any kind of walk in. And it's interesting, because, you know, every time there's a potential to see the similarities, there's this desire to
[00:21:28] to
[00:21:30] to kind of go, okay, well, maybe we can all join in and do the same thing, right?
[00:21:34] But I mean...
[00:21:36] I was talking about Dan and Docs, right?  I'm going to jump to another Dan quote.
[00:21:41] We really like consistency.
[00:21:44] I posted this like a year and a half ago, and
[00:21:48] Essentially
[00:21:50] I took this React code, rewrote it in four frameworks,  and they all console logged here a different thing.
[00:21:58] So, I
[00:21:59] -
[00:22:01] As much as I would love that reactivity to be all the same,  there's clearly differences.  And this isn't just a pure rendering thing.  This comes down to the mechanics of how reactivity works,  how it updates.
[00:22:12] like,
[00:22:13] How, like, expectations on batching, timing...
[00:22:21] Yeah, we've got some comments in here.
[00:22:25] Bye.
[00:22:25] Yeah.
[00:22:27] Yeah, I mean, I hope everyone appreciates React.
[00:22:31] React is great.
[00:22:33] React changed my mindset completely.
[00:22:37] Which is kind of funny because--
[00:22:39] you know, people expect me to be like,  especially with solids positioning and stuff,  everyone's like, oh, you're the anti-reactor.  It's like, no, no. React,  completely...
[00:22:49] affected my thinking in terms of
[00:22:53] values in terms of React libraries.  I mean, if it wasn't for React,  solid...
[00:22:58] might not exist. And I don't mean that from a technology standpoint, because we do completely different things, but it's more that
[00:23:04] I might have just been like, yeah, view is fine, or felt is fine.
[00:23:08] Reacts the reason why
[00:23:11] Like, I thought that there was an area, a zone, that is not like you, not like Svelte.
[00:23:20] but has that technology.
[00:23:23] those kind of technologies. And actually, because of this
[00:23:27] crazy unexpected marriage
[00:23:29] we can do stuff that the others can't.  So it's like--
[00:23:34] And, and,
[00:23:36] And like, as I said, solid today is just the beginning, right?  We're, I don't want to get too wax poetic about, you know, whatever, but, you know, I watched the quick stream yesterday and I was like, okay, this is a little quick heavy.  I'm not going to be too solid heavier, but.
[00:23:48] The potential of the stuff QUIC is doing is only accelerated by the potential of the stuff that we're doing with salt in terms of the fine graining. This zone is still very much only at the beginning of being tapped.
[00:24:03] Um,
[00:24:07] I wish I had mods. What can I do?
[00:24:13] put user in time mode.
[00:24:15] Done. Thanks.
[00:24:17] Yeah.
[00:24:18] Thank you.
[00:24:20] Thank you.
[00:24:21] Thank you.
[00:24:22] Well, yeah, I mean, there's a question there, right? But you know what I have to say about this?
[00:24:29] - See, this is a funny thing,  because I felt like this throughout my career.
[00:24:33] because
[00:24:35] I worked at .NET through the 2000s. I worked in Microsoft shops. That's how I got into Knockout. Kind of makes sense.
[00:24:47] The amount of documentation, MDN, the quality there, the complexity there of like ASP.NET and the whole thing.
[00:24:58] In my mind, I call it the dark ages these days, but in my mind, things have gone so convoluted, so complicated, that it required like a book of docs and it was too much.  And that's why when I found Knockout, I was just like, let's just toss away this whole thing. Let's start over.  And sometimes I have concerns that we're getting there again today with SSR solutions.
[00:25:18] And I think the fueling on documentation is that. I think when React is just a simple library, you know, and Sol's kind of got that simple, you know, primitive kind of thing, you document, but then people can explore their own patterns and they kind of go.  Once you throw SSR in, it's like never simple, at least with the current mental model and stuff that we're trying to achieve and the build and the config and everything gets really, really complicated. And then suddenly now you're writing textbooks. And...
[00:25:48] When I first saw Next.js, that was my impression. I was like, okay, this is the beginning of
[00:25:54] Right? I mean, it's just where I sit. It's funny. I know people love Next.js, but, like, I was very resistant to going back there again. It's funny because I'm there now, but...
[00:26:04] it's no surprise to me, Svelte to SvelteKit, suddenly the documentation, the thing,  the truth of the matter is if the tooling can keep up, maybe we can keep this running a bit longer,  right? You know, things like the stack blitz, you know, web container thing, development environments,  tutorials, we can complete that story. Maybe we can seal, cover the gap, but it has always concerned  me when that level of complexity gets to that level, because I feel like it's like the breaking
[00:26:34] But we haven't really been able to break out of it completely. I don't, I don't, I don't, like,
[00:26:41] we tried to simplify in different ways. Like Svelte. Svelte kind of goes, okay, let's simplify the  interface. You're just like using some JavaScript variables. But like we all know that isn't actually  simple. It's actually incredibly complicated, right? But it gives that perception. But you know,  at a certain point, you're going to poke holes in and then you're going to like  discover the why, so to speak. Not that like actual why, but you know what I mean? Like  we try these ways to circle around with abstraction essentially to alleviate this. And
[00:27:09] This is an interesting one because
[00:27:12] The effects make perfect sense from the way React works, but it keeps the model and it's clean, but it is...
[00:27:19] There's like a mental impedance here.  People just, you know, and it's really hard to explain this from a React perspective and...
[00:27:29] When you're writing docs, when you're working on an engineering solution like this, so it's kind of on the R&D side, you always hope that at a certain point you get that moment of clarity.  Like, that essentially...
[00:27:39] Like, maybe it's not chiseled out yet, but it happens enough times that you can be like,
[00:27:45] we got there. Like I started, I kind of had an idea and then
[00:27:49] Things just, I was on the right path and things suddenly just started falling in my lap and suddenly...
[00:27:54] I'm there.  And it happened to me with Solitaire's in Point.  Things all suddenly lined up.  I'm like, oh, that decision there made sense.  That made sense.  That one's a little off.  Let's tweak it.  And then everything just comes together.  And you're like, this is greater than the sum of the pieces.
[00:28:04] and
[00:28:06] I feel like the hope is that this complete story is just going to come  together really nicely. Like use event, you know,  something alleviating that pressure on use effect. And you know what I mean?  Like it kind of ties it together in a way that it makes it clear.  Maybe you figure out the perfect way to explain it in the docs. I'm,
[00:28:26] Bye.
[00:28:27] I think that's the hope, but we don't always know.  And I think that's the hardest part to be in because we, we,
[00:28:33] It's more than any one of us can figure out.  The amount of R&D in UI--
[00:28:38] We're crowdsourcing it a little bit. Obviously we can dog food through large companies when we have that ability, but
[00:28:46] We don't know everything. There's too many use cases on the web.
[00:28:50] So this is like a long running experiment on the front end side from my perspective.  So it's a tricky problem.
[00:28:58] So,
[00:28:59] Yeah, you can kind of understand why this has been so hard to document, but it's hard to standardize. That's what this thing's on my screen for, right? I'm actually writing an article right now about this. It's been like a month since I wrote an article. I think the last one I did was about like different rendering patterns on the web. I'm talking about the cost of consistency here. This is not
[00:29:21] an easy thing to reconcile on.
[00:29:24] And
[00:29:25] Maybe there is a right solution, but
[00:29:28] I think these are very long tails.  I don't have the tweet on my fingertips, but at one point, Swix, Sean Wang, kind of made a comment.  He listened to one of my podcasts.  He made a comment.  He was like, it's really unfortunate.
[00:29:42] that new frameworks like Solid come out, and then they can't leverage what React has done. So we have to start over again and rewrite all the components and do all that. And basically going like, they basically don't stand a chance.
[00:29:58] And it's fantastic.
[00:30:00] Funny, I mean, I missed the initial thing there,
[00:30:02] And Dan Abramoff replied himself and he was like, no, no, no, no, no. Like, don't look at it like that. Like,
[00:30:09] sometimes you don't want to take on those things, you know, like every,
[00:30:14] so many years there's a rewrite and there's a things swing the other way. You know, it's good.
[00:30:19] that we--
[00:30:21] some sides you want to increment and you want to build on and you want to improve. But sometimes it's good to start from the ground up and take that new knowledge and find a new place. And,
[00:30:30] It was funny because it wasn't-- I didn't view it as an--  I thought it was kind of more of a tacky and solid than React.  But Dan was there right away to kind of clarify that.  And I hold that too.  Like React and Solid, for example, are doing very, very different things.  And it's a good thing.  And it's good that they're incompatible to a certain degree.
[00:30:46] I have a weird perspective on that, and you guys can debate or argue with me about that, but it's--
[00:30:50] It's kind of...
[00:30:52] Bye.
[00:30:53] That's...
[00:30:55] It's OK to kind of back multiple horses, try different things.  And we're in this very long running experiment  from where I'm concerned.  OK, what do we got here to be fair to you?
[00:31:06] I think I...
[00:31:08] Okay, yeah, good.
[00:31:12] Thank you.
[00:31:15] Okay. This is a, you guys come in with the hard hitters. These are,  these are good questions, right? Like, I,
[00:31:22] I kind of lament a bit. I think I was, where was I? I was off. I was, which one was it? Was it here? Let me come back into my stream. Because I was lamenting about benchmarking and stuff.
[00:31:40] Where was it? I'm not going to find it right now. That's my luck.
[00:31:45] Yeah, nevermind. Forget about my screen here. But essentially, Lighthouse, they're working on metrics, but I think a lot of the push right now is,
[00:31:55] Um,
[00:31:56] on the SSR side is because e-commerce is big money is because,
[00:32:00] is because people want to get into things like hydrogen. It's like, okay, React and Shopify,  e-commerce. People want to move to these patterns. They want the performance.  And I think that our metrics right now are improving, but they're still kind of
[00:32:15] somewhat basic and it means that like,
[00:32:18] kind of cheating the JavaScript by lazy loading it, and like, tricks like that, things to get those numbers, really positively impact. I don't know.
[00:32:29] if they actually positively impact the user as much. We're going to have to use real metrics like I was talking about earlier. But I do think it's part of it. And then when you have everyone building those apps, you need the documentation and it's just like this long chain. But maybe it's just this is what we've always wanted. We wanted the unified model of the web, you know.
[00:32:46] you know?
[00:32:47] We want to have our cake and eat it too.  It's our baker cake and eat it too.  It's like the trade-offs, right?  Obviously, but we want all the trade-offs.
[00:33:01] Thank you.
[00:33:02] Yeah.
[00:33:02] Yes, this is a good point.
[00:33:06] Thank you.
[00:33:09] Yeah, this is good. I was hoping putting on the screen would do it. But you're right. I probably should read it out loud.
[00:33:16] And I think that's a really good thing.
[00:33:18] Yes, I will read the question out loud before answering it.
[00:33:24] Okay. All right. Cool. Cool. Yeah. So what else has been going on? Yeah, we were here.
[00:33:33] God. So this is just funny. This isn't really worth it much of anything. I just love the fact that senior devs sometimes are the absolute worst, even when they try not to be.
[00:33:47] This tweet was funny, but it's kind of off topic.
[00:33:52] Yeah, and there I posted the talk.  Okay, let's move on here.
[00:33:56] Bun, yes, Bun. I've been following Bun for a while now.
[00:34:01] And Jared has been doing incredible things on the performance side and he's
[00:34:08] people in our community started reaching out to do compilation with Bun.  And that, that, that, that, that's what got my thing.  I was like, Oh, wow. You know, I watched ES build kind of come up,  but ES build didn't give us custom AST. We can do much there. And yeah,
[00:34:22] It's on the list. We're going to move the solid compiler to the SWC. Why SWC if we can do bun? And Jared went and made a basic version of DOM expressions. You can do some really basic stuff. Maybe not much more than a counter app. You can do solid in bun.
[00:34:42] made the compiler, which he did on his own. He just was like, yeah, I'm going to do that for an  afternoon, which is insane. I'm going to work with him a bit more and kind of standardize the output  on it a bit so we can get there. I think that's an effort that we should definitely invest in.  But in general, Bunn is just like kicking up a storm right now because like,
[00:35:00] Let's see if I can...
[00:35:02] find it here. He finally released it. It's been over a year. And
[00:35:09] I was pretty excited the other day.  I was like, oh, Solid got 20,000 stars on GitHub.  Yay, right?  Congratulations, right?
[00:35:15] I'm pretty sure Bunn's going to have 20,000 stars on GitHub within like two days.  Like, if you've ever seen, the amount of interest here is on...
[00:35:25] unprecedented. It's like their star graph is like a brick wall. It's like, okay,
[00:35:31] a couple hundred, maybe a thousand. Okay. We get to about 2000 stars. And then it's like 20,000, you know, so,
[00:35:37] Why is everyone talking about bun?
[00:35:40] I have a couple of theories about this. First of all, Jared's been doing amazing work, doing amazing demo for years and people have just been waiting for that 1.0. Everyone knows, you know, they've been hovering, they're like, okay, when is it coming? When is it coming? Right?
[00:35:52] But the other interesting thing is,
[00:35:55] Wouldn't it be great to basically use a lot of stuff that you've always used?
[00:35:59] you know
[00:36:00] you continue to use next and then just have it faster. Like, Bun attacks things at such a low level that
[00:36:07] It feels like you as a developer don't need to worry about it.
[00:36:11] suddenly it's just faster and people are losing it over it because I mean,  he, he, he knows his stuff. He's super low level. Um,
[00:36:21] You know, and he just he keeps on pushing the boundaries, you know, I feel certain kinship there because like he goes, OK, well, what's slow?  Like he acknowledges when stuff he has a slower than a note, but he's like, this is a slower note, then let's fix that.
[00:36:36] every little piece, you know, making it more optimal. And on to the point that hopefully that the whole thing together and button might have started as a bundler or something, but he's a runtime he's he's he's doing everything so.
[00:36:52] He commented that he does like 90 hours a week, and that's what he's been doing.
[00:36:58] Mm-hmm.
[00:36:59] I mean, I guess good on you for doing that. I think now that he has users, that's when, you know, like open source, I think that's when things really change, right? When your buyer...
[00:37:18] So,
[00:37:22] If you're interested in Bun, really into it,
[00:37:25] you know, get into it more, go help him. I know his issues are going to burst in, like, momentarily. I think I've looked, I think he had, like,
[00:37:36] you know, maybe like
[00:37:38] few dozen open issues, then five days ago, it's just like hundreds. This is...
[00:37:46] incredibly fast adoption. This is moving very fast. Um,
[00:37:51] Yeah, this is super exciting.  I want to play with it.  This wasn't the right week because I've been away till Wednesday.
[00:37:58] test anything.  But yes, I think BOT is super, super exciting.  It's part of that framework conversation  that we've been having, our runtime conversation we've been having.  And I've talked to Jared a few times,
[00:38:10] like,
[00:38:11] it's hard not to expect even greater things from Bun in the future.
[00:38:17] So yeah, it is a big deal. Um,
[00:38:27] Um...
[00:38:29] Yeah, I mean, after the BUN announcement, it's hard to follow that one. But I got a couple more things before we move on to Fresh.
[00:38:35] Tanner, man, Tanner Lindsley, you know,
[00:38:39] Earlier I was talking about how hard it is
[00:38:41] to standardize on a single technology. It's like the ex-KCD comic about standards.
[00:38:53] why can't we just all work together and produce this thing?  And it's like,  we have 14 standards and then it's like new 15th standard.  Like we all know that,  but yeah,
[00:39:02] I've had this problem with web components, being the creator of more frameworks. It doesn't consolidate, it makes more frameworks and whatnot.
[00:39:12] Tanner has been working on framework agnostic libraries.  And he's taken the opposite approach.  I actually-- I just-- I absolutely love it.  Because I think it was in here.  Someone was asking him about web components and about, like,
[00:39:27] how we managed to do this.
[00:39:32] And he made some, yeah,  what was the most important thing  in making this universal?  Web components?  And how?
[00:39:38] Tanner's like more like the lack of components. I love this response because I think he does he elaborate? Yeah, no, he doesn't. Okay, that's fine. I'll elaborate for him.
[00:39:49] Right. This is, this is like the, this is like the opposite, uh,
[00:39:53] uh,
[00:39:54] kind of tick, right?  This is the thing.  People go, oh, well, we need a component  that we can use in every system.  But the problem is components have...
[00:40:04] execution behavior
[00:40:06] expectations i know this solid like whenever people come up with a universal solution  it never works for solid like never ever ever ever works for solid because people expect things to  re-render you know and that's something we don't do and you know i that was one of my initial concerns like
[00:40:23] Porning Solve to Remix, for example.
[00:40:25] but I,
[00:40:28] This is cool because he's going, okay, the fundamentals here are the change models.  So as long as I can drive your components and I'm fine.  So basically headless.
[00:40:36] So instead of worrying about the packaging and the interface, he just worries on the change. I mean, this is sort of like a reactive thinking. At one point, Tanner was actually looking at using Solid for his underlying reactivity that would work in all the frameworks. And he was getting stuck on something. And the only piece he was really missing was...
[00:40:56] kind of a, what do we call the lazy memos?  It's, but not like lazy in a view sort of way,  but more in like a, like, a,
[00:41:05] It marks itself as stale, but doesn't do the work until you request it kind of imperatively.  And this is a pattern you'll never find in a reactive library because it already kind of
[00:41:15] manages things. But if you're trying to interface a reactive library with something like React or something that's top down, you want to be reactive, but you want to push the work into their work cycle.
[00:41:28] As it turned out, Tanner was-- in the end, I think Tanner was like, OK, I'm just going to keep this even simpler. So he kind of didn't go that way. But I think it's funny to point out that the best approach to universal components is not components.
[00:41:42] I just wanted to
[00:41:44] That's what stuck out to me.
[00:41:47] Someone mentions here that isn't the builder team working on something similar to Hashtag with mitosis?
[00:41:54] Yeah, my toast is really cool, if I haven't talked about it before. And of course I'm going to think it's cool because it was based on Solid.
[00:42:01] like the JSX transformer originally, it was called JSXLite, and it was based on solid.  And then slowly over time, they kind of added more react semantics to make it closer.  But it added more holes because, as you know,
[00:42:12] Components React don't.
[00:42:13] render once and the syntax suggestions for mitosis would. But you can't do early returns and stuff. But
[00:42:21] Thank you.
[00:42:23] Yeah, this is an interesting one, right?
[00:42:26] At the beginning, I was pretty skeptical, right? Because I was thinking, well,
[00:42:32] You saw the thing about all the different behavior.
[00:42:35] How does mitosis account for that? And it can't completely. And I think that's okay. It probably gets close enough.
[00:42:45] But the challenge is all the outputs do
[00:42:48] are a little bit different. The key insight from mitosis to get is that with a reactive system,
[00:42:54] you can drive any other renderer.  That's the universal thing.  It's like what Tanner is doing here to a certain degree.  It's not the component model.  It's the change model.
[00:43:03] that could be. So I mean, from that perspective, perhaps Yehuda's desire for universal reactivity is a noble one.
[00:43:16] But essentially...
[00:43:18] You can, like, we have something called React Solid State.  There's also MobX.  You have the ability to drive React in a way that looks kind of similar to Solid.  Sure, components re-render, but you can kind of,
[00:43:30] time it and write the logic in a way.  So you could basically port something that looks like solid  and have it work in React.
[00:43:36] kind of shed the rerender mentality of the component,  even though the components do actually rerender in the background.
[00:43:43] Um,
[00:43:44] Mitosis kind of leverages that so it can pour stuff to Svelte and it just uses the fact that reactivity has those three primitives.
[00:43:53] I...
[00:43:54] I
[00:43:54] This might be a different approach.  I'm still more skeptical of this compared to TanStax's approach,  which is just focused purely on the change model, because--
[00:44:05] Mitosis is
[00:44:06] For component libraries that don't
[00:44:09] congruently fit with its model is always going to have a little bit overhead over the native version.
[00:44:17] I can't say that with 100% certainty, but that's my hunch, especially when you consider things like React, which aren't really statically in that analyzable.
[00:44:26] as readily...  I mean, it's interesting.  You don't have to worry about that from...
[00:44:32] The mitosis side, because the code you write with mitosis is statically analyzable. It's similar to Svelte or Solid or whatever. It's reactive. But when you think of the ideal patterns on the React side, it's harder to do that mapping, you know, adding refs for things that aren't refs, you know, taking into consideration the code that we run over and over again. It is an easier...
[00:44:53] problem than, say, solving the React compiler problem.
[00:44:57] in the way that people originally thought they would.  I think what React is doing with React Forget  is completely doable.
[00:45:05] I know I'm being a bit vague here.  I'm just...
[00:45:08] I'm...
[00:45:10] We'll see. My toast is still on the R&D side for me. I'm pretty stoked on the tan stack thing because I know for sure this is going to be viable, if that makes sense.
[00:45:19] Okay.
[00:45:20] Yeah.
[00:45:22] All right. Yes. Yeah.
[00:45:29] Yeah, yeah, I think there's a certain level, simple components. The thing is, Mitosis isn't going to take a really advanced React library and suddenly make it work in every framework.
[00:45:39] In theory, if you could work on
[00:45:42] the mitosis framework, again, this is the standards problem again, right?  Mitosis is the new framework. If you can build it towards the mitosis and get
[00:45:51] fairly consistent across the frameworks,  you'd probably be okay.  But it's investing in another framework, essentially.
[00:45:57] Oh, right.  Yeah, but yeah, no, I...  Tanner's been doing...
[00:46:02] awesome work. And I just wanted to call that out because,
[00:46:06] He's been able to figure out how to make it small, make it fast. I'm super excited about this. I hope Tanner has the ability to do more and more. I mean, we're seeing a lot of Jared Tanner like
[00:46:18] kind of
[00:46:20] individual maintainers who've accomplished amazing things. And our concern as community mostly should be is how sustainable that is.
[00:46:29] I think it's hard.
[00:46:31] I speak from personal experience, I think it's hard. I'm very stoked to have Netlify's backing to be able to kind of facilitate what I do. But
[00:46:40] you know, and Tanner has his startups and whatnot, but, you know,
[00:46:44] at a certain point,
[00:46:45] point like it's a it's a lot so
[00:46:49] At least for now, I'm going to keep on celebrating the successes, and I hope...
[00:46:54] they are everyone's in good mental health and doing all that they need to get done, you know, for themselves as well as for the frameworks that they're doing amazing work.
[00:47:04] Um, yeah.
[00:47:08] I caught up.
[00:47:10] Mostly, oh yeah, I've been playing D&D. That's good. That's fun. But yeah, the routing stream, I don't know if I have a ton to say about that. Let me just finish up the bookmarks here.
[00:47:20] Yeah, okay. Last couple thoughts before I move to fresh, okay?
[00:47:24] Um...
[00:47:26] Thank you.
[00:47:27] And this is related to actually what we were just talking about with Tanner and Jared.  It's funny how this all kind of lines up.
[00:47:35] The trick is to make your personal projects into jobs.
[00:47:39] Right, this is about the system. How do we sustain open source, right? This is this is a big topic. I actually talked to Tanner.
[00:47:45] for like an hour, hour and a half, just in Twitter DMs,  like just back and forth talking about like,
[00:47:52] how we can
[00:47:54] different models. It's just, it's tricky.  Talked to Theo a lot about this too. I mean, he's, he's,  he's obviously runs a startup ping, which does great, amazing quality guests on,  you know, for video streams and whatnot.  And we use that for the D and D stream that, that I'm on, but yeah,
[00:48:11] Like...
[00:48:13] I don't, this is not for everyone.  I think someone mentioned this, but it was like coding  for 30 minutes on your day job, coding on life,  your personal project.
[00:48:22] Yeah.
[00:48:23] It takes something there, right?  And I wrote here, it seems easy for someone in my position to say so,  but I agree.  I think once I found the opportunity to work on the projects  that I was passionate about,
[00:48:36] it just unlocked me.
[00:48:38] Like it just like, like I got excited about development. I got I wanted to do more. I became a passion into its own. And
[00:48:47] It's kind of crazy because as I said, it might not be
[00:48:51] everyone's thing but like I just I found more opportunities and it just it just it just kept  on snowballing right it was like
[00:48:58] - Yeah.
[00:48:59] Because of my work on Solid, which I did in my own time, just something I was, you know, I was like, oh, maybe I'll do this in my startup, but we didn't end up using it.
[00:49:07] I end up catching the attention of the guys from eBay, and then I started working at Marco, which I learned incredible stuff from those guys.  They are amazing.
[00:49:15] they are way ahead of the curve on the server rendering side. And then, you know, today I'm at Netlify. This progression and opportunities, you know,
[00:49:26] you know,
[00:49:28] We're all launched from passion and desire and finding that motivation.  And for me, that was because it was my own stuff.  I don't know where everyone I found as an engineering manager, everyone finds their motivation in different places.
[00:49:42] And I don't think this is for everyone.
[00:49:45] you know some people care a lot about the end customer seeing their joy some people care about  solving the hardest problems everyone has their own kind of makeup but but i will say if you find  that motivation i mean this is so obvious again what i'm saying you'll be more likely happy with  what you're doing right like you you'll find you'll find more of that satisfaction um
[00:50:05] and i as i started typing this i was like oh man i i can't put this in a tweet because it's just  it's just it's it's just too much right but
[00:50:12] like
[00:50:14] This has been amazing for me, but
[00:50:16] I...
[00:50:18] I don't know, I think there's the whole other side too where
[00:50:21] if
[00:50:22] Programming and coding isn't
[00:50:24] like,
[00:50:25] and solving certain types of problems, depending on what things are, aren't, are something that you enjoy, but aren't like your passion, then like, you shouldn't feel pressured by this kind of scenario. There's this crazy duality, you go from one side where you have people, I said, like, Jared working 90 hours a week.
[00:50:41] Right.
[00:50:42] um if i didn't have family and kids i might be working 90 hours a week i feel like um
[00:50:49] I just enjoy it that much, but I also enjoy other things.  So it's interesting, but if you do have the chance,
[00:50:57] Thank you.
[00:50:58] Yeah.
[00:51:00] Mm-hmm.
[00:51:01] maybe give something a try at a trial thing,  if it makes sense for you.  I'm just saying working on this stuff,  it's been amazing for me.
[00:51:09] I'm passionate about money.  Oh, man.  Yep.
[00:51:14] I missed that on a motivation, but money is another one.  So definitely if that's what works for you.
[00:51:22] - Yeah, yeah, yeah.  And working, getting involved in open source in general,  is good if you can manage it.  It just doesn't matter what it is.  I remember I was talking to some people at eBay,
[00:51:32] We're really bummed about having to use Marko at eBay.
[00:51:35] Thank you.
[00:51:37] they're worried to hurt their career prospects.
[00:51:41] that
[00:51:43] Basically, we were sabotaging their career because they weren't using React.
[00:51:47] Thank you.
[00:51:47] And especially I think on the junior side, this is a real concern. And it's hard. I told you about sometimes senior engineers being kind of infuriating like in that other tweet there.
[00:52:00] Because they can only speak anecdotally about their experience and how all the knowledge is transferable and whatnot.  But I still believe it.  It's just I do also know that React on your resume is worth a lot.
[00:52:12] So, um,
[00:52:15] What I told them was, I was like,
[00:52:17] Well, why don't you do some open source?  If you want to commit your manager,  if you want to do some stuff  and you're tired with the market,  what are you doing?  Contribute.  I mean, that's the exact opposite thing  they wanted to hear.  But...
[00:52:31] You don't need to use React to do open source. I mean, obviously I'm talking about Redwood, so this is probably like a terrible example because Redwood does use React, but I'm just saying like,
[00:52:42] Getting involved, it...
[00:52:45] and it doesn't happen in your own time sometimes.  Sometimes you can work this into your work thing.
[00:52:51] is...
[00:52:52] is beneficial in general. It's a good experience.
[00:52:56] Thank you.
[00:52:57] Yeah. OSS is a dual edge sword right now. Yep.
[00:53:06] Yeah.
[00:53:07] It's interesting. I went through this struggle when I was deciding what to do with Solid. And I mean, that's worth conversation all on its own, but it might take us a little while to get through all that. But essentially, you have the scenarios like React, where you're like the meta framework or, you know, Angular, Google.
[00:53:27] And then you have scenarios like the Bracell and what Netlify are doing where they can letting open source be a little bit more open.  But like then you look at it and you find people like Evan Yu from you and you're just like, man, that guy figured it out.  Like he's somehow weaved through everything and stayed independent and just does his thing.  So there's always there's always a trade off. Right.  Like obviously when you work for a team, you have dedicated resources that they will pay into it.  But you can maybe lose a bit of that ownership. You know, the governance model might be a little difference.
[00:53:57] when you're working for a company and they're just hiring lone guns like  myself or Rich Harris or, you know, Jared Palmer, you know,
[00:54:03] Thank you.
[00:54:05] Sebastian Bacuvaje, if I say his name wrong, I apologize.
[00:54:11] The problem is
[00:54:13] you're paying the one person, you're not paying the whole team.  So then you might still have a hard time.  You still have to rely on the community of open source.  You know, like there's more to spell than rich errors.
[00:54:23] Rich has a job, but Ben McCann, there's a lot of people involved in those projects.
[00:54:35] Thank you.
[00:54:36] It's still a tricky, that helps a bit, but it's still tricky, right?
[00:54:42] you know, Tanner was talking about corporate sponsorship, almost like a branding thing, like,  you know, almost like selling a product, you know, just for like good association. And I was like,  I don't know, does it feel authentic? Does it feel, you know, if like, or does it sell? Does  it feel like selling out? I think I think this is this is there. I kind of said there's something  sort of punk rock about open source. I don't know if that's getting lost in this kind of corporate
[00:55:12] Bye.
[00:55:13] But...
[00:55:14] there's
[00:55:16] There's a certain group thinking that won't think open source needs to stay
[00:55:22] completely free, for example, and, you know, can't accept corporate money. And I think this is a  topic that I can't step in right now. It's too big, you know.
[00:55:34] oh man
[00:55:37] Do you have any tips to get started with OSS? Yeah, sure. It's so funny because it's
[00:55:46] It's kind of tricky at first, right? Because I've had people come in and they're like, "Oh, how can I get started?" And they go, "I want to get started. I want to get a contributor." And I'm like, "That's great. That's great. That's great."
[00:55:59] Why don't we just build...
[00:56:02] something, right?  Like, just sort of not build something.  Why don't you use something?  Start by just using the project and seeing if it works for you  in something like, just, I know that's not always applicable,  but it really, I think with open source,
[00:56:15] It usually starts with finding a bug
[00:56:18] or trying something and reading the docs.  And when I say bug, I mean bugging the software,  bugging the documents, someplace that the experience wasn't  as smooth as you'd want.  And then start small from there.
[00:56:33] You know, people make kind of laugh about all those type of things.  I mean, if people try and correct things, you know,
[00:56:39] that aren't wrong, then yeah, I mean, it's kind of annoying. But most of the time when I have typos,
[00:56:45] If you do it in a tasteful way, I think that's a...
[00:56:48] That's great. Maybe some people get annoyed by that. I think if you find a project you like and start getting involved in the community, find any frictions you have to using it and kind of building on that, that's a great way to get started in open source.
[00:57:03] Thank you.
[00:57:04] Thank you.
[00:57:07] Thank you.
[00:57:09] Who's this Theo guy?  Oh, man.  Talked about Theo enough in the stream already.
[00:57:14] Oh, he's showing up too.
[00:57:18] Thank you.
[00:57:20] Yes.
[00:57:21] I really like to be jumping. Yeah. Okay. I mean, yeah, sure. I'll give you, I'll throw the, I'll throw this out here. Um, if you aren't familiar with create T3 app, as, as you know, it feels pretty vocal, um, has opinions, has
[00:57:35] log experiencing next and kind of the technologies around that. So he's been talking for a long  time. He's like, he kept on seeing people get stuck. And he's kind of
[00:57:45] come up with his
[00:57:47] his opinion of like the right pieces that go together in a modular way.  If you watch me stream, you know what I'm talking about. So I,
[00:57:55] To my understanding, I might not be completely correct here, the community around his streams and Discord decided, okay, let's just actually make this into a project.
[00:58:05] And they just kind of took it on themselves.
[00:58:08] busy building Ping building his company.  And they're just like, let's make the stack.  And they basically built...
[00:58:14] a meta framework.  Like, it's been growing and growing and growing.  I think it has over 2,000 stars on GitHub now.  It's just been growing huge, you know.  Very organic place.  Like, not like a planned thing,  more of just like,
[00:58:32] patterns that make sense, the pragmatic React framework.
[00:58:37] 3K now. Yeah, there we go. Like, like,
[00:58:42] And yeah, I think it's really cool because like, I mean, I'm coming from the opposite side of the spectrum with Solid.
[00:58:53] I build it myself, you know, you build it, they will come, you know, like, okay, well, they're slowly coming in, going to build more, so more people come and, you know, kind of get there and then I find myself building a Metaframer. This is like the opposite side where like, it's like, coming from a place of like,
[00:59:09] like finding all those pieces already that already exist.  And then it's,
[00:59:15] this kind of like the community just built the meta framework. I think it's, I think it's,
[00:59:21] really awesome to see this. You know, it's almost, I think the tooling and stuff around,  it's getting so much easier. I mean, next as a basis obviously makes a huge amount of sense,  but even on the beat side, we kind of see this a little bit where you can essentially, if you like
[00:59:35] want to kind of make things in the image that you like,  you can go and do that and you don't need to rely on,
[00:59:42] somebody from some company to build it for you.
[00:59:48] Thank you.
[00:59:49] Oh, man.
[00:59:55] Yeah.
[00:59:56] I think Anthony's in here too.  I'm not going to have you guys go at it.
[01:00:00] that though, but it's kind of funny.
[01:00:03] Because it's an opinionated React stack versus another opinionated React stack.  So the comparison is going to be made, right?  Yeah.
[01:00:11] .
[01:00:12] But I think it's interesting.  I like the dedication to TypeScript in Create.
[01:00:20] create T3 app.  I haven't tried it.  I haven't tried Redwood.  I haven't looked at Redwood practically at all.  So maybe that should go on my list of things.  But I think it's definitely interesting to kind of see that.  Like this is a power...
[01:00:35] of open source and
[01:00:38] Yeah, this is why we do what we do.  This is why it exists.  It's just like, as I said, sustaining it is like this other side of the puzzle.  So this is a...
[01:00:47] I think things are getting better. So we'll just see where this all lands. I said, when I've talked to maintainers and stuff, I feel like we're getting closer to being able to do stuff, you know, that we wanted to.  It's just, it's, there's still a gap. And at a certain level, maybe not a level that I've gotten to myself, like when you get into like where Tanner is and stuff, it's like,
[01:01:10] Tenor should be able to, you know,
[01:01:14] make really good money off his efforts, you know, especially with the framework agnostic stuff. And it's just a matter of figuring out the best models for that, right? Like, I don't even, I told you, this is too big of a topic, I don't want to get into it. Like, talk about VC money and all that stuff. Okay.
[01:01:31] Thank you.
[01:01:32] Okay.
[01:01:34] We're like at an hour, so I want to curb this part really quick here.  But I got just a couple more that just came up in the last couple days.
[01:01:42] Let's talk a little quick.
[01:01:46] Mishko Hebrey actually put this out there  talking about the web.  He decided that Gen...
[01:01:51] put the gens and this is very similar to actually what Igor minor had in his  article. Um,
[01:01:57] I'm not surprised these guys are basically on the same page, given they worked together for like a decade on Angular.  But I...
[01:02:08] I think I only had one comment here because
[01:02:14] Obviously, he's positioning Quick as the future of the web, and I'm not going to disagree on that point. I just think the alignments are a little interesting. Because someone asked him, what's the difference between Gen 1 and Gen 2?
[01:02:23] Right?
[01:02:24] Like, where do you draw that line?
[01:02:28] And,
[01:02:31] Yeah, Gen2, just a question DX, come Gen2, your whole app has rendered the components. To me, it was the transition to the component architecture. And my only comment on this whole thing is, I actually think Gen2 to Gen3
[01:02:45] isn't resumable.  That's a symptom.  That's like a side effect.  I think the move from Gen 2 to Gen 3  is recognizing that components...
[01:02:55] aren't the runtime model.
[01:02:58] Essentially, we went for static,  then we added bits of JavaScript,  then we made components.  I think the unlock between Gen2 and Gen3  is that components can still exist,  but components are not a runtime construct,  like as they are in React.
[01:03:12] or Svelte or view today. Essentially,
[01:03:18] The reason that resumable is possible is because the components can be breaking down into smaller pieces. In the case of QUIC, it's like they separate the event handlers from the view code from the component logic. In the case of Marco, it's along the reactive graph, kind of somewhat solid but compiled. I don't think it necessarily has to be compiled, but the thing that unlocks Gen3
[01:03:40] and makes resumable possibility is
[01:03:43] is basically the return to finer-grained things.  Like jQuery and mood tools were kind of finer-grained.  It's that return while keeping the component DX.
[01:03:53] That's my opinion. Resumable is just a side effect. Just wanted to make that note.
[01:03:57] It's good.
[01:03:58] And what else we got here?
[01:04:02] On a similar note, I'm pretty strongly in the Component to Never Do Data Loading camp. Turns out MVC was right.
[01:04:08] I think we're talking about the same sort of thing here as what I was just talking about.
[01:04:15] From a performance angle, this is true.  You know that you need to hoist out your data loading.  If you do Cascade, you get waterfalls.
[01:04:22] But all the work we see going on is so that we can build this closer to the components
[01:04:28] and then have it hoist automatically, whether it's relay, whether it's remix loaders, get server-side props, stuff we're doing in SolidStart.
[01:04:37] You know, and it's a bit kind of like we're,
[01:04:40] for, you know,
[01:04:42] islands architecture we're trying to get the dx and partial hydration we're trying to get the dx of these component
[01:04:47] frameworks, but then have them
[01:04:50] be partial. So, yeah, I just, I just want to throw it out there. I, it's the spiral thing,  right? You know, people talk about, we're not swinging all the way back. It's, it's,
[01:05:02] Mm-hmm.
[01:05:02] Gen 2 was like a DX explosion. Now we're trying to figure out how to keep what we like about that while addressing the performance aspects. That's it. This is all about performance.  Why did I bookmark this? Oh.
[01:05:19] Yeah, we can leave this for another day.  It's just a funny example where in React, you had to write like half a page of code, and it's a one-liner.  But I mean, people who use Solid should be pretty used to that by now.  So let's move on.  OK, cool.  Well, some of you are still here.  It's been an hour.
[01:05:36] Yeah.
[01:05:38] I think we should move on.
[01:05:42] Yeah, some comments about dedication TypeScript.
[01:05:45] Yeah, TypeScript is awesome. I've been doing a lot of work with improved types. TypeScript's also like the thing that I wrestle with the most, but
[01:05:53] Yeah.
[01:05:56] I could do that, Theo. You could also have me on your stream. We can work both ways.
[01:06:03] And Theo actually ran away for a call for 10 to 15 minutes, which is fine.
[01:06:11] Thank you.
[01:06:12] No one believes me.
[01:06:14] -
[01:06:18] Yeah, let's freshen things up. I agree. Let's freshen things up. Let's get...
[01:06:25] Thank you.
[01:06:27] Thank you.
[01:06:29] I'm just a little bit behind the scenes.  Let's get started with Ref.  I'm just going to put this banner up.  Let's close down the good old Twitter page.
[01:06:39] and let's look at Fresh. Love this landing page.
[01:06:43] Cute little animation here has a guy drinking his drink.
[01:06:48] Thank you.
[01:06:49] And mostly, they're dogfooding their own stuff.  Fresh.dino.dev.  You know...
[01:06:57] that this is done in their own side. And, and, and,
[01:07:01] this counter, I'm sure this page actually, you know, let's check.
[01:07:05] Thank you.
[01:07:06] I'm pretty sure this page uses fresh itself.  And then, yeah, we got some, we're going to look at this more in a minute, but we got some serialized data props.  Start is probably for the three.  Let me blow that up a little bit.
[01:07:20] Yeah, it looks like we got the serialized data  for just this island prop chat.  This is using Fresh right here.  They're using their own thing.  It's kind of funny.  I was actually on a framework that had a counter that worked  and it didn't actually use their technology on the main page,  which is kind of like,
[01:07:34] bonkers to me because...
[01:07:36] It was interesting because I was trying to find the code for it and it wasn't there.  Anyways, that's the side.  Okay, so let's get started with Fresh.
[01:07:48] I got the docs here.  I have to admit, I'm not quite as prepared for this one  as some of the other ones.  I literally came back two days ago, and I was like,  we're originally going to do a stream about Solid Router, which  is what we're probably going to do next week.
[01:08:00] We've been doing a lot of work with SolidRouter, and I'm really excited to share that.
[01:08:04] I was like, okay, well, I want to talk about Fresh because I've been seeing a lot of talk about Fresh.  And it's basically, for those who aren't familiar, it's a pre-act islands framework.  So it's kind of like think...
[01:08:14] Astro, but like everything's JSX.
[01:08:18] Um,
[01:08:19] And I think that's really cool.  The second kind of cool selling point is that it...
[01:08:24] Because it's Dino and everything's kind of like automated TypeScript and automated TSX compilation and all that, there's no like...
[01:08:34] noticeable build step. You just kind of run Dino start, use deploy it, and everything just works.
[01:08:39] In the background, things are building, things are working. So like for me,
[01:08:44] that's my kind of dubious part of it.  I don't really care about that at all.  Part of it could be a bias because with Solid,  we need a custom compilation.  So when I see solutions that don't do custom compilation,  I'm just like, whatever.  But...
[01:08:59] On the other hand, like, you know, you get started with Beat, is it that different?
[01:09:04] But this does offer
[01:09:07] on demand, like on request building, which is something that we actually had at eBay with the lasso bundler.  And people like, well, where do you actually want this capability?  Well, at eBay's case, internationalization was actually really good.  Like sometimes you don't.
[01:09:22] need to generate all the languages,
[01:09:24] ahead of time.
[01:09:26] You can make your web pack builds take like hours.  So this kind of on demand lazy thing  and serving requests and then caching it, you know,  works pretty well.  So I mean,
[01:09:39] I can see the balance there.  So I think for us, I think what we should kind of take in is the experience.  Like this is a DX thing mostly and just kind of feel like, oh,
[01:09:51] Is this that different than just loading a template pre-built with VEAT?
[01:09:54] I don't know. We'll find out. So,
[01:09:57] Yeah, let's kind of get started here, right?  Introduction, no build steps, zero config necessary.  Okay, sure.
[01:10:04] JIT rendering on the edge, sure, tiny and fast and plain, JavaScript.
[01:10:10] is required by the framework.  Yeah, okay, so it's a zero default framework  'cause it's using islands.  Also client side, yeah, sure.  Highly resilient because of progressive enhancement  and use of native browser features, sure.  TypeScript out of the box, yeah.  Process running on the next, okay, yeah.  So, sounds pretty standard.  Let's see, okay, I've got Dino installed  and Dino deploy installed.  So I think our first step is gonna be creating a project here.  Okay.
[01:10:34] This is the first thing that's going to be different.  Okay.  Okay.  Well, I mean...
[01:10:37] It's from a URL, which is kind of cool.
[01:10:39] OK, let's copy this and get that going.  Do I have a new window for this?
[01:10:45] to
[01:10:47] Let's see here.
[01:10:49] Oh, yeah, get started. Okay. So let's take a look here.
[01:10:55] Okay.
[01:10:57] actually.
[01:10:59] Thank you.
[01:11:01] I'm going to put this in a folder so I can find it again. So let's make our project. As you guys know, we're going to make a Hacker News demo. That's what we do here. We're going to make fresh Hacker News. Right?
[01:11:17] All right. So do I want T wind? No, I don't care about T wind. Okay.
[01:11:22] Do I use VS Code? Yes, I do. Okay, sweet. Okay, let's open that up.
[01:11:29] That's pretty fast. I mean...
[01:11:30] Let me see, where is it? Development.
[01:11:35] examples.
[01:11:36] Thank you.
[01:11:37] And fresh hacker news. Okay.
[01:11:39] Beautiful. Okay, what are we looking at here?
[01:11:41] If you are familiar with Fresh at all, you probably want to feel free to chat up in the chat to help me along the way. Because as I said, I actually haven't built this yet. But I'm leaning on the fact that it's Preact so that we can pretty much port over like the next or the remix. Well, not the next because they have that.
[01:12:00] I think they fixed it, but my example has the nested anchors, which took me forever to handport. But I'm pretty sure we can port the remix example over.
[01:12:09] Thank you.
[01:12:10] Yeah, you guys are going to have tons of fun with the puns.  Yeah, but I like it because it is the...
[01:12:19] Sorry, I didn't read the question.  Isn't the Hacker News demo pretty old as in not fresh right now?  Yes.  It's still one of the easiest examples to come up with recursive partial hydration, which is one of my favorite things to see.  Again, I don't know if this actually works in fresh, but I'm going to assume it does.  And we're going to see how this goes.  Right.  So this is what we generated.  We got some VS code, which I think, yeah, some Dino stuff.  I don't know.  And Dino JSON.  Yeah, this is kind of interesting.  So like import map right off.
[01:12:49] JSON, except no dependencies.
[01:12:52] The import map is kind of handling dependencies from my understanding because it's probably  using just like the browser style of import match.  So we have this Dino run command, which seems fine, and then import map.
[01:13:03] will tell us where to get Preact from.
[01:13:05] And this way, we can still import stuff like the way we normally import it.  And they go to the URLs in the background, OK?
[01:13:12] And then we have a dev TS, which is our
[01:13:17] Dev server.
[01:13:19] Presumably.
[01:13:20] Wait, Dev?
[01:13:22] And then we have main TS, which
[01:13:25] is our start server. Okay, cool. And they're just telling me run Deno task start. Okay, so, like, NPM run. Okay, that's cool. I've used Deno deploy before. I haven't used fresher Deno development directly. So,
[01:13:40] Let's see here. Okay, so what do we got here for a setup? We have static folder. Okay, unsurprising. We have routes and islands.
[01:13:48] Okay, so routes.
[01:13:50] are falling next.js convention, it looks like.
[01:13:54] Beautiful.
[01:13:55] and an API route.
[01:13:57] Interesting. I wonder if API as a folder is special.
[01:14:00] We'll check the docs for that.
[01:14:03] Okay, everything else is preacts.
[01:14:05] Thank you.
[01:14:06] style
[01:14:08] Thank you.
[01:14:08] Right. Okay. And then the other interesting thing is this island. So, and the islands is just a counter. Okay.  Okay.
[01:14:17] That's
[01:14:18] That's cool.
[01:14:20] Okay, so what I'm, and they have an is browser. That's good to know.
[01:14:25] from the runtime.
[01:14:27] So I think the key thing here is fresh.  And this is actually, I kind of like this.  I think it's a pretty smart approach.  Fresh uses the routes folder, like pages folder, but this whole folder is static.  So they're like this entry point, everything from routes is...
[01:14:42] is server rendered.
[01:14:44] No JavaScript.
[01:14:45] And then the islands folder, they make all the client side bundle entries.
[01:14:49] If you're on the server, it'll just import and run it on the server, but then it'll make the separate entries here. So instead of using like dot server, they're just like put in the islands folder. And then the rest of this is
[01:15:00] is actually all just server only.  So I'm getting a sort of astro
[01:15:05] feel here, right?
[01:15:07] Except it's JSX, essentially, where most of the code you're writing is just server only, and then you just happen to put some stuff that you want interactive over here.
[01:15:18] Right. So, yeah, I think I can work with this pretty easily, it looks like. Let's just make sure it runs. What is it? Task start?
[01:15:32] 48,000. Okay, let's do this.
[01:15:34] - Local host.
[01:15:36] It doesn't.
[01:15:38] Thank you.
[01:15:40] And our counter starts at three, which seems to be the magic number for fresh and it just updates. Okay, cool. So,
[01:15:47] Let's just jump into it then.  I got the docs ready, right?  So we can look here.  We got routes, we got--
[01:15:54] routing.
[01:15:55] Okay.
[01:15:55] Yeah, okay. So...
[01:15:59] I guess -- let's look at the API route. I want to see something.
[01:16:04] Because I wonder if I have fetch at my disposal.  I guess we'll find out.
[01:16:09] We don't actually need...
[01:16:12] an API route per se for what we're doing here, because we're going to
[01:16:18] I mean--
[01:16:21] Mm-hmm.
[01:16:22] We don't need to serve something externally. The server is going to do all the data fetching for us for our Hacker News example.
[01:16:33] Thank you.
[01:16:34] Okay, that's good to know. Sorry, someone's mentioning that
[01:16:39] that the Hacker News has been radically down all day.
[01:16:44] Yeah.
[01:16:46] Okay.
[01:16:48] Yeah.
[01:16:49] OK, so let's stop this for a second.  Or we can start it.  I want to clean out the folder here.
[01:16:59] const handler.  I'm going to assume handler is special.  Let me look at the pages.
[01:17:05] Default.
[01:17:06] Yeah, OK, so default export is the component for the route, is my guess.
[01:17:11] And then I'm going to guess that Handler is special
[01:17:15] Oh, man.
[01:17:16] And probably...
[01:17:18] because...
[01:17:21] Yeah, request thing.  Yeah, OK, cool.  So I'm going to just assume handler.  And this just handles API slash joke, so it handles
[01:17:29] I wonder if it's different between Git and Post.  Not important for our example. Let's move on.
[01:17:35] First thing I want to do is let's just try and port the...
[01:17:42] the landing page, so to speak, for Hacker News.  Because what we need here is--
[01:17:50] I mean, I could start here.
[01:17:55] But probably should start with the name one, page props.  Oh, this is convenient.  Just looking at this, you get it straight into the page props.
[01:18:03] If I'm right,
[01:18:05] this should still work with Star Road?  Or is it like this?
[01:18:13] Interesting.
[01:18:15] OK?
[01:18:18] Because sometimes I have problems with topable--
[01:18:23] Thanks.  So this is hello.
[01:18:26] This should be this. So lower priority than name.  OK, so I actually have to delete name probably.
[01:18:34] I kinda don't wanna delete it,  'cause I wanna keep a reference to it.  Maybe I'll just make a folder.
[01:18:39] I just call it garbage.  Just it's the one problem when you do this.
[01:18:46] delete stuff that you want for reference later.
[01:18:49] Thank you.
[01:18:50] Peace.
[01:18:51] Beautiful. Right. So the slash work, though.  So it's the same problem I have with Remix. OK, that's fine.  We can work around this. One of the problems I have is some some frameworks don't support top level star roads.  And that's something I need for this Hacker News example. So I can add this to the list on that.  OK, so let's see what we want to do here. I'm going to I'm going to use Remix.  I think is probably the easiest one to use as a base. Open.
[01:19:22] Examples.
[01:19:24] Thank you.
[01:19:25] RICK VISCOMI: Remix Hacker News Workers.  That's probably the one.  OK, cool.  All right.
[01:19:32] Yeah.
[01:19:34] See, what you'll see with the remix example is I actually needed to
[01:19:40] have both a kind of like a dynamic road and an index road. But let's --
[01:19:52] Oh, I guess the fun thing from Remix.
[01:19:55] is
[01:19:56] is that we're going to have to rename all the twos
[01:20:00] Hmm.
[01:20:03] OK, I'm going to try one more.  Let me think of something.  New window.
[01:20:06] The other one we can look at it actually is Astro.  And I know that that might seem funny,  but Astro in certain ways is very, very, very JSX.
[01:20:15] In other ways, it is not. So I'm just going to kind of look at this one. Let's look here.
[01:20:22] Astro, Astro, Astro.
[01:20:25] Why am I not Astro Hacker News?
[01:20:28] Yeah.
[01:20:28] Thank you.
[01:20:29] Thank you.
[01:20:31] Thank you.
[01:20:31] My luck is this is going to be--
[01:20:35] Different one than the one I'm thinking of.  Okay, that's fine.  Let's open that one.
[01:20:41] Beautiful. Let's look here.
[01:20:44] Yeah.
[01:20:45] Stories.
[01:20:49] Yeah, actually, that's a good question.  My first question I should come in here is wondering, is there a shared layout?
[01:20:56] Essentially, because if you notice in...
[01:21:02] I guess I could just make it myself.
[01:21:03] If there's a shared layout, I can just make it myself.
[01:21:06] because this is an MPA framework, right? So
[01:21:11] Yeah, I think that's the key here, right? If I was using a, like, Remix, for example,  you will notice that there is a root.tsx, which has, like,
[01:21:22] the document and all this stuff. But here, each page is its own page. So this is going to be a little bit different, right? So essentially,
[01:21:32] Yeah, but where is the...
[01:21:34] It's funny, though.  This starts at div.
[01:21:36] Still.
[01:21:38] Where...
[01:21:39] is
[01:21:40] the document, so to speak. Like where's the HTML?
[01:21:45] Thank you.
[01:21:46] That's what docs are for, right?
[01:21:48] Thank you.
[01:21:51] I understand.  Let's take a look.
[01:21:55] Handle request, handle, handle, handle.
[01:21:59] Interact by lens.
[01:22:01] Thank you.
[01:22:02] Thank you.
[01:22:05] Mm-mm-mm.
[01:22:09] Thank you.
[01:22:09] Thank you.
[01:22:11] Thank you.
[01:22:12] Thank you.
[01:22:13] Thank you.
[01:22:14] Thank you.
[01:22:16] Thank you.
[01:22:17] through static.html. Did I miss that?
[01:22:19] No, there is not.
[01:22:25] Thank you.
[01:22:26] Okay, well, we can do a little experiment here, can't we?
[01:22:32] I can take control of it if I want someone to sing in the chat.
[01:22:37] Where do I take control?
[01:22:43] Yeah, okay.  Let's just...  Let's...
[01:22:48] What we're going to do is we're going to make a component here, and we're going to call it layout, essentially.
[01:22:55] I think these folders out here don't matter
[01:22:58] So I can call them whatever I want. I can go like a folder.
[01:23:02] Sorry, I'm not in garbage. We can folder out here.
[01:23:05] Call it components.
[01:23:08] And then I can make a new file and make this file, I don't know.
[01:23:13] layout.tsx.txt.
[01:23:17] And let's see if we can export default.
[01:23:23] Thank you.
[01:23:24] Thank you.
[01:23:25] uh,
[01:23:26] some kind of layout.
[01:23:30] That's-- thank you, Copilot.
[01:23:34] Thank you.
[01:23:35] Yeah, I mean, for beginning, I'm just going to see if our div
[01:23:41] I don't care honestly that much. The layout I want to get is similar to the Astro layout,  which we've done here before.
[01:23:54] Thank you.
[01:23:57] Thank you.
[01:23:57] Components, layout.
[01:24:01] Because one of the beautiful things about this is I don't actually need all the link components, right?
[01:24:07] I don't need
[01:24:08] like
[01:24:09] the links. This is all server
[01:24:11] I would love to set the title, but I'm not going to worry about that. What I actually need here is just this.
[01:24:18] Right?
[01:24:18] Thank you.
[01:24:20] header and then slot, essentially. But we don't have slots. So really what we want here is just,
[01:24:28] Thank you.
[01:24:29] Ooh, there we go.  Dino is telling me where stuff has failed already.
[01:24:36] All right, what am I doing wrong, Dino?
[01:24:41] It's because I don't have the JSX import source probably  that all the other files have here, right?
[01:24:49] We need to do this thing.
[01:24:52] Yeah.
[01:24:53] Thank you.
[01:24:54] Thank you.
[01:24:57] That is not why.
[01:25:01] Thank you.
[01:25:04] All right.
[01:25:07] built with
[01:25:09] Fresh.
[01:25:10] Thank you.
[01:25:13] And we can link to
[01:25:19] Fresh, we're gonna do that.
[01:25:24] Thank you.
[01:25:25] Yeah.
[01:25:27] It's fine. It's a GitHub link. I'll worry about that later. But presumably, if we do this, props,
[01:25:37] Children.
[01:25:41] We actually just put children and it can be cool like everyone who LCD structures.
[01:25:48] Thank you.
[01:25:49] All right, and I'm going to have to probably learn all the TypeScripts.
[01:25:56] - Oh, fragment for pre, you need important explicitly fragment for preact?
[01:26:00] Okay, is it like this?
[01:26:03] Thank you.
[01:26:04] Like this?
[01:26:07] Thank you.
[01:26:10] Thank you.
[01:26:11] Beautiful.
[01:26:15] Thank you.
[01:26:22] Okay. Something about named exports.
[01:26:28] It's weird, I'm so not used to using named exports.
[01:26:33] Will this work, though, just out of curiosity, if I just kind of--
[01:26:38] I just want to go to my routes and I just want to
[01:26:42] kind of
[01:26:43] wrap this thing with our layout.
[01:26:50] Thank you.
[01:26:53] Thank you.
[01:26:54] Thank you.
[01:26:54] Thank you.
[01:26:56] Thank you.
[01:26:57] I want to import layout.
[01:27:01] Thank you.
[01:27:02] Um...
[01:27:06] Thank you.
[01:27:07] Thank you.
[01:27:09] Still not used to using Copilot.
[01:27:17] And put anything in here.
[01:27:20] Okay. So it still works, even if TypeScript is complaining at me.
[01:27:25] Probably, but we'll actually see if it does still hydrate. Yeah. Beautiful. Okay. Okay.
[01:27:30] Nice.
[01:27:32] Um...
[01:27:34] All right, so...
[01:27:36] I guess because this example just uses static CSS, let's start getting that CSS in here.
[01:27:44] It's just...
[01:27:44] Go here.  Where is it?
[01:27:47] Thank you.
[01:27:48] public you know where did i put it in the other
[01:27:51] Examples, source.
[01:27:56] Styles, okay. Global CSS. Let's just copy this over.
[01:28:00] Copy global CSS.
[01:28:06] Probably just--
[01:28:07] paste it in here.
[01:28:11] Thank you.
[01:28:13] And then,
[01:28:16] Thank you.
[01:28:17] Thank you.
[01:28:18] Thank you.
[01:28:21] Yeah, that's not the color we want.
[01:28:24] It's just
[01:28:26] Yeah.
[01:28:27] I need to figure out actually how to get styles on the page.  That's one thing I actually didn't actually check  in the original example.  Was there any CSS in the original example?
[01:28:39] Yeah.
[01:28:41] Thank you.
[01:28:42] I thought I installed the Dino extension.  I just don't--
[01:28:45] know what it does.
[01:28:48] Thank you.
[01:28:50] Thank you.
[01:28:55] Yeah, I don't know.  I'm not used to tooling, so forgive me.
[01:29:00] I used CoffeeScript for like 10 years, had no use for anything.
[01:29:04] Bye.
[01:29:05] Let me see here.
[01:29:08] OK, so CSS, I would--
[01:29:12] If I want to put CSS on the page,
[01:29:15] I need--
[01:29:17] I need the document, ideally. I mean, I could just import it in my layout component, I guess.
[01:29:24] Um...
[01:29:25] I'm going to guess that works, but that...
[01:29:32] Yeah, so like, I mean, this is a long shot, but let's try import.
[01:29:42] Thank you.
[01:29:48] Where are we?  I put in static.  I'll move it later.
[01:29:55] See if it actually does anything.
[01:30:00] He doesn't know how to deal with it.  It's probably because it's
[01:30:03] thing
[01:30:09] Head component, yes, that's what I need. I need the head component.
[01:30:17] Okay, so fresh has a head component.  Is it documented?  Let's find it.
[01:30:22] Thank you.
[01:30:24] Thank you.
[01:30:27] Thank you.
[01:30:30] Yeah, that's fine.
[01:30:36] Thank you.
[01:30:37] Thank you.
[01:30:39] Thank you.
[01:30:41] Thank you.
[01:30:42] Thank you.
[01:30:45] Thank you.
[01:30:46] Thank you.
[01:30:47] Thank you.
[01:30:48] Let's see.
[01:30:53] Hmm. Maybe not documented.
[01:30:58] Okay.
[01:31:01] Great route, dynamic routes, custom handlers, fetching data, adding and directing to blood
[01:31:06] We can try running down here, running locally.
[01:31:08] Sounds good.
[01:31:10] Critter out.
[01:31:11] Sounds good.
[01:31:13] Peace.
[01:31:14] Dynamic routes, we already talked about.
[01:31:18] Custom handlers.  OK, that makes sense.
[01:31:22] you can define
[01:31:25] So this is like the API good.
[01:31:29] Yes, handlers get-- OK, good.
[01:31:33] fetching data.
[01:31:37] Thank you.
[01:31:38] Thank you.
[01:31:39] Beautiful. Okay, I'll need this in a minute.
[01:31:42] Okay.
[01:31:47] Thank you.
[01:31:49] Thank you.
[01:31:50] Okay.
[01:31:52] Okay, so let's look for our head component.
[01:31:59] Okay, it's in the source which,  oh right, there's no known modules.  So that's something I'm gonna have to get used to.  That's fine.  We can go find the code where it lives.
[01:32:15] Um, refresh.
[01:32:17] Thank you.
[01:32:20] All right.  All right.
[01:32:26] Helpers? Nope.
[01:32:29] Let's see what we export from index here.
[01:32:33] element node store.
[01:32:36] Yeah.
[01:32:38] Thank you.
[01:32:41] Thank you.
[01:32:46] Um, hmm.
[01:32:49] This is not the right fresh.  Good call.
[01:32:53] Let's just go back here.  Let's go fresh.
[01:33:00] Um...
[01:33:03] That one looks better.  There we go.
[01:33:08] All right, so we have our...
[01:33:11] Dev server server.
[01:33:14] Runtime.
[01:33:15] Okay, well, let's see.
[01:33:18] if I pick the right place.
[01:33:21] Yeah.
[01:33:21] What does this explore?
[01:33:24] Bundle to this export.
[01:33:28] Let's see, main TS seems to be the pattern instead of index TS.
[01:33:32] This is just...
[01:33:35] running stuff.
[01:33:38] Thank you.
[01:33:43] Yeah.
[01:33:44] All right. Head. Am I looking at it? Head.
[01:33:48] Thank you.
[01:33:49] head.
[01:33:53] Thank you.
[01:33:54] Thank you.
[01:33:56] All right.
[01:33:58] export function head.
[01:34:00] OK, let's see what we can do here.
[01:34:04] Thank you.
[01:34:06] Thank you.
[01:34:07] All right, so what we want is
[01:34:11] Let's see. Where is...
[01:34:13] Is there any example where actually
[01:34:17] installed from
[01:34:19] Maybe it's in garbage. Where's garbage? It's dollar sign fresh. Okay, I'm gathering this is
[01:34:27] where we need to go.
[01:34:34] Something like that.
[01:34:36] Thank you.
[01:34:38] Thank you.
[01:34:40] Okay.
[01:34:41] Thank you.
[01:34:42] Thank you, whatever completion that is.
[01:34:48] Okay.
[01:34:50] Maybe from fresh.head.ts?
[01:34:55] Thank you.
[01:34:57] Okay.
[01:35:00] I'm in runtime.
[01:35:05] Bye.
[01:35:07] Thank you.
[01:35:08] I'm just guessing my way through here. OK.
[01:35:11] Ah, there we go.
[01:35:13] Beautiful. Okay. Let's do it.
[01:35:18] Thank you.
[01:35:19] So what does head accept?
[01:35:22] Thank you.
[01:35:24] Thank you.
[01:35:27] Thank you.
[01:35:29] Thank you.
[01:35:32] All right. Head.
[01:35:34] Okay, sweet. So we can get our title in here.
[01:35:39] And then we can get our links.  Okay, so let's go back and copy what we need to from Astro.
[01:35:48] Yeah.
[01:35:50] All right, so...
[01:35:52] Thank you.
[01:35:53] Thank you.
[01:35:56] Thank you.
[01:35:57] Thank you.
[01:35:59] Thank you.
[01:36:00] This presumably
[01:36:03] here.
[01:36:09] Interesting, but I don't care. And then this is fresh.
[01:36:18] is--
[01:36:20] Uh,
[01:36:21] And then what we need is...
[01:36:26] Just a good old...
[01:36:28] What is it, Link?
[01:36:30] All right.
[01:36:32] But I did so long.
[01:36:37] Thank you.
[01:36:40] Thank you.
[01:36:44] Thank you.
[01:36:46] Thank you.
[01:36:48] Uh...
[01:36:49] Oh.
[01:36:51] Thank you.
[01:36:54] Yeah.
[01:36:56] Okay. We don't want Astro Purple. Good. We're making progress. We want...
[01:37:04] we want some fresh green, right?  So let me see if I can find that.  I think I jotted that down earlier.
[01:37:13] Yeah, here we go.
[01:37:16] CSS.
[01:37:20] Thank you.
[01:37:21] Bye.
[01:37:23] Thank you.
[01:37:24] Thank you.
[01:37:28] Thank you.
[01:37:29] All right, that's the worst I've ever come up with for accessibility. Don't hate me on me and that. We'll worry about that later. But now we can at least see that we have a fresh based header. Yeah, clearly, when using this color, you need to use black text.
[01:37:47] Don't worry about that after. Not here for the CSS.
[01:37:52] Okay, sweet. Thanks for help from chat. I appreciate that a lot. Okay, cool. So...
[01:37:57] Okay, now...
[01:38:00] Let's see what we can do here.
[01:38:03] Because--
[01:38:05] Um...
[01:38:06] Yeah, let's see what we can do here.  Because it's funny.
[01:38:09] I wouldn't have expected Astro to be where I was going to get my main source from, but I actually think--
[01:38:16] I think Astro is actually the closest
[01:38:19] Its JSX is very similar.
[01:38:23] Thank you.
[01:38:25] So let's just copy this after code right over.
[01:38:30] Good. Okay. No support for HTML comments. Fine. And we're missing a bunch of variables  that I have declared here. And these are going to come through crops and page.
[01:38:47] Oops.
[01:38:50] import from somewhere.
[01:38:57] and
[01:39:00] We're going to send these through.  We need story eventually too.  OK, cool.  So let's look at how we fetch data.  That's the next thing.
[01:39:10] Okay.
[01:39:11] *throwing*
[01:39:14] Thank you.
[01:39:15] All right.
[01:39:17] Bye.
[01:39:20] So according to the Fresh Docs, fetching data.
[01:39:29] Yes.
[01:39:32] And then this puts it into here.
[01:39:34] Lovely.
[01:39:35] But what's this context render user?
[01:39:39] Huh.
[01:39:40] Thank you.
[01:39:42] Thank you.
[01:39:42] Interesting.
[01:39:46] Thank you.
[01:39:48] Thank you.
[01:39:51] Thank you.
[01:39:56] Yeah, I'm going to just, we're just going to take this one right here and just drop  it right in here.  So it looks like this is mostly what we want and we want to.
[01:40:07] fix up all these imports, plus we need to get our types.
[01:40:11] Thank you.
[01:40:12] Thank you.
[01:40:13] Yeah.
[01:40:14] Let me see if I can grab my types. I don't think I did the types in Astro, but I can grab them from Remix. Version.
[01:40:24] Thank you.
[01:40:24] Yeah.
[01:40:25] Copy.
[01:40:29] Pfff.
[01:40:31] All right.
[01:40:34] Not in routes, we're going to put it out here somewhere.
[01:40:37] paste
[01:40:40] Thank you.
[01:40:41] Thank you.
[01:40:42] Thank you.
[01:40:45] Thank you.
[01:40:46] Thank you.
[01:40:48] Thank you.
[01:40:49] Yeah.
[01:40:50] Thank you.
[01:40:51] Thank you.
[01:40:52] I don't know.
[01:40:53] Story comment. Okay, we'll need those in a minute though. I actually probably actually only put the types in the
[01:40:59] Top level story thing.
[01:41:01] Thank you.
[01:41:02] Thank you.
[01:41:03] Thank you.
[01:41:04] Thank you.
[01:41:05] Thank you.
[01:41:08] All right.
[01:41:11] Thank you.
[01:41:17] We want to get that from...
[01:41:23] They're...
[01:41:25] And then this is going to be...
[01:41:27] Thank you.
[01:41:29] Thank you.
[01:41:29] Story.stay.no. And handler is coming from there.
[01:41:35] Yeah.
[01:41:38] And--
[01:41:40] OK, sweet.  And then we just need to make our API calls.
[01:41:44] Thank you.
[01:41:47] All right. Um...
[01:41:49] Thank you.
[01:41:51] Thank you.
[01:41:52] Thank you.
[01:41:54] I probably don't need this anymore,  but I'll leave it for a second.  I'm gonna make another API folder that's on the outside.
[01:42:01] I'm just going to copy the stuff that I've been doing in the other projects over because it's--
[01:42:07] APITS?
[01:42:09] Thanks.
[01:42:11] Thank you.
[01:42:13] Thank you.
[01:42:15] I guess we're gonna find out if, it looks like from that example that we have fetch on the server.  So I think, oh yeah, we're in Dino, of course we do.  Some things become very easy.
[01:42:25] Damn it's going to copy this one, too.
[01:42:27] Thank you.
[01:42:28] We'll worry about tidying up the folder structure later.
[01:42:32] Thank you.
[01:42:32] Thank you.
[01:42:33] Not in here, out here.  Move, yeah.
[01:42:36] All right.
[01:42:40] Yeah, so then our fetching just becomes essentially
[01:42:48] Thank you.
[01:42:49] Thank you.
[01:42:50] Thank you.
[01:42:52] this.
[01:42:54] Okay.
[01:42:56] the equivalent to whatever this is.  I'm going to move this over so we can see it side by side.
[01:43:01] The difference.
[01:43:03] A remix loader and a fresh loader.  Okay.  So we don't
[01:43:10] Do we need the URL to get the search parameters?  I guess is the first question.
[01:43:19] -
[01:43:22] Okay.
[01:43:27] What are we getting params from?  Not sorry, context.  Context is what I care about.
[01:43:32] Okay.
[01:43:35] Oh, it's because of this crap.  I'm coming it out for a minute.  Context.
[01:43:41] Okay.
[01:43:42] Yeah.
[01:43:43] Thank you.
[01:43:45] Thank you.
[01:43:46] Never mind. We have to learn how to move around in Dino.
[01:43:54] Well, actually not.
[01:43:56] Let's do this the trial and error way.
[01:43:58] Um...
[01:44:00] - Thank you.
[01:44:00] which is,
[01:44:02] Thank you.
[01:44:03] Essentially, let's just log what we get on context and see how giant this object is.
[01:44:13] It's plugging it.
[01:44:15] Happened terribly.  Page is not defined.  That's fine.
[01:44:21] Okay. Let's...
[01:44:25] Let's do something like this. Let's add page equals.
[01:44:33] I think.
[01:44:35] Now let's look what we get.
[01:44:41] - Stories G.
[01:44:44] Yeah, okay.
[01:44:46] Okay.
[01:44:47] I don't necessarily see query parameters on anything here, but it looks like it's got an X, so it's like a middleware setup, and then it has render.
[01:44:56] OK, we're going to hard lock the page for a second,  and then we'll go from there.
[01:45:02] So we're not gonna worry about that.  We're gonna bring Paige back.
[01:45:05] And we're just going to...
[01:45:08] Actually, I'll keep this commented for reference.  Let's just work backwards.  We're going to go--
[01:45:14] On page equals one.
[01:45:20] - Bye.
[01:45:22] equals, um,
[01:45:26] Actually, what did that come up? Stories. Beautiful. Okay. It's going to be stories.
[01:45:34] - Pop.
[01:45:36] And then...
[01:45:41] Move this here, up here.
[01:45:46] Thank you.
[01:45:47] Thank you.
[01:45:49] And then...
[01:45:52] We're going to...
[01:45:57] Thank you.
[01:45:58] Thank you.
[01:46:02] Oh, I see. I'm going to have to rename it something different. That's fine.
[01:46:07] I'm going to do something like this.
[01:46:11] We need to get fetch API.  Where did I get the fetch API?
[01:46:17] Curiosity, where did I...
[01:46:20] Yeah.
[01:46:22] Thank you.
[01:46:23] Thank you.
[01:46:25] Thank you.
[01:46:26] Mm-hmm.
[01:46:33] All right, and then...
[01:46:39] Thank you.
[01:46:42] Don't do that.  And then return render.
[01:46:49] Stories...
[01:46:54] All right, and...
[01:47:00] Thank you.
[01:47:02] Thank you.
[01:47:05] Thank you.
[01:47:10] - Yeah, that's that TypeScript error.  I'm not gonna worry about that.
[01:47:17] Thank you.
[01:47:20] Thank you.
[01:47:21] All right.
[01:47:27] Well, actually, we got the...
[01:47:34] Did I delete the wrong thing? That's funny.
[01:47:42] but it just didn't delete enough things.
[01:47:47] Thank you.
[01:47:50] Thank you.
[01:47:52] I'm not going to worry about this for a second.
[01:48:00] Because they...
[01:48:02] We'll worry about that later.
[01:48:05] Thank you.
[01:48:07] Thank you.
[01:48:08] And while we're in here, let's console long stories to make sure that we're
[01:48:16] We're getting them. We still have to fix a lot more of our app here.
[01:48:21] Thank you.
[01:48:23] Thank you.
[01:48:26] That's fine.
[01:48:28] It's...
[01:48:28] build this up a little bit.
[01:48:32] Okay.
[01:48:33] I'm just going to...
[01:48:34] Start over again.
[01:48:37] Doctype is not valid JSON. That's interesting.
[01:48:42] All right.
[01:48:46] Did I not get to my console log?
[01:48:48] This is console log debugging.
[01:48:51] Thank you.
[01:48:52] *clap*
[01:48:54] Thank you.
[01:48:57] hi okay hi again
[01:49:06] Oh.
[01:49:08] Thank you.
[01:49:15] All right, so we're getting hooked up on probably, let's see if we get here.
[01:49:26] Thank you.
[01:49:26] Thank you.
[01:49:29] Thank you.
[01:49:30] This is always where we get hooked up, though, too. There's usually something around the fetching that I'm missing. Type G.
[01:49:41] All right, yeah, yeah, that makes sense.
[01:49:43] That makes sense.  Let's just make this top for now.
[01:49:47] All right.
[01:49:52] Beautiful. OK, yeah.  It's because I was messing with stuff. OK, cool.  See, this is a lot of beautiful Hacker News data coming in.  OK, sweet.  So now we actually need to do this.
[01:50:02] Um...
[01:50:04] Thank you.
[01:50:05] um
[01:50:06] I probably should make my props...
[01:50:09] It's interesting how it passes it through. Let's find out.
[01:50:15] Thank you.
[01:50:16] Thank you.
[01:50:17] Thank you.
[01:50:18] Thank you.
[01:50:18] Thank you.
[01:50:19] Thank you.
[01:50:23] Let me remove my Stories console log.
[01:50:27] Let's see if it just passes it through transparently.
[01:50:35] Prams URL data. Okay, it's under data. Beautiful. Okay, so then we know that
[01:50:42] Is this a generic?
[01:50:46] Yeah.
[01:50:47] So then which--
[01:50:53] Thank you.
[01:50:56] We're getting some stuff from chat here.
[01:51:04] Response faker.
[01:51:06] That's interesting.
[01:51:08] OK.
[01:51:11] Thank you.
[01:51:12] OK, let's see what we can do here.  Sorry, I probably should have grabbed that right off the docks.  I think it might have been in here.
[01:51:22] Although I was looking at this one specifically.
[01:51:26] Thank you.
[01:51:29] Thank you.
[01:51:31] Let's see if that's--
[01:51:33] That lets me use my stories data.
[01:51:40] Thank you.
[01:51:41] Okay.
[01:51:45] Thank you.
[01:51:47] Thank you.
[01:51:48] Thank you.
[01:51:49] Thank you.
[01:51:50] Thank you.
[01:51:51] Cool. And then all I need here is... The funny thing is I kind of...
[01:51:58] Kind of what I actually want to do is I actually want to do this. I mean, I could, I'm assuming  that I'm going to have to calculate some stuff in here. So I'm actually going to pass,
[01:52:08] page and type through with the stories.  And then that way--
[01:52:14] It's a little bit more complicated. It'll be stories data array. Is that stories data already in array?
[01:52:25] No, actually, it's already...
[01:52:27] Yeah.
[01:52:29] It's already here.
[01:52:31] This is actually what we want.
[01:52:34] So,
[01:52:37] Data should be stories data are null.  And then essentially--
[01:52:47] Thank you.
[01:52:47] Maybe structure this further. I mean, it's going to get angry at me from a TypeScript standpoint, because I'm not like checking for errors, but I should be able to go stories type page.
[01:53:02] It doesn't. OK. That's fine.
[01:53:07] We're going to TypeScript when it's useful.
[01:53:12] Story is not defined. Beautiful. Okay.  So it actually doesn't render the story because it doesn't exist.
[01:53:19] But...
[01:53:23] OK.
[01:53:28] I have probably ignored TypeScript for as long as I can possibly ignore TypeScript.
[01:53:36] Yeah, just say it's never null.  And I could probably do that by doing this.  I mean, I'm lying.
[01:53:44] Let's lie for a minute.
[01:53:51] Thank you.
[01:53:52] and see if we can--
[01:53:55] All right. All right. Okay. Making progress. Beautiful. Thank you.
[01:54:09] All right, so now we just need a story component.
[01:54:14] All right.  And I'm going to add that one in.  It's going to be new.
[01:54:23] Yeah, we'll new file it.
[01:54:27] As much as I can just copy almost everything directly from Astro, funnily enough, we still need the, what do you call it?
[01:54:35] The wrapper kind of stuff.  Let's try a remix for this one.
[01:54:44] Yeah.
[01:54:45] Story components, story component.
[01:54:49] Mm-hmm.
[01:54:53] Yeah, that looks beautiful.
[01:54:56] At least this one should be almost identical.
[01:55:03] Don't need the link.
[01:55:06] Thank you.
[01:55:10] And we need our preact.
[01:55:16] Thank you.
[01:55:17] Um...
[01:55:19] Hey.
[01:55:22] Come up. All right, because you need to--
[01:55:26] Yeah.
[01:55:27] And...
[01:55:29] Then
[01:55:31] Oh, where are we?
[01:55:37] fragment. I didn't need fragment.
[01:55:41] Thank you.
[01:55:42] Yeah.
[01:55:42] Okay.
[01:55:45] Thank you.
[01:55:45] Thank you.
[01:55:46] Thank you.
[01:55:48] Thank you.
[01:55:49] Okay.
[01:55:50] - True.
[01:55:56] Thank you.
[01:55:57] Thank you.
[01:56:00] Thank you.
[01:56:05] Thank you.
[01:56:07] Thank you.
[01:56:08] Thank you.
[01:56:11] Bear with me as I edit in this very small code window because I blew it up. Okay. And then the last fragment.
[01:56:22] Thank you.
[01:56:22] Thank you.
[01:56:25] at work? I'm missing one.
[01:56:30] OK.  So--
[01:56:33] What's going on?
[01:56:38] I probably crashed something a while ago and I have to restart the server. Either that or I imported it. I haven't imported it yet. That's probably more likely. Import story from...
[01:56:55] Up doing that.
[01:56:57] Amen.
[01:56:59] Thank you.
[01:57:06] Yeah, cool. Part one.
[01:57:10] Thank you.
[01:57:12] All right.  So...
[01:57:17] Thank you.
[01:57:18] We actually have to get the navigation working for real right now, but I believe
[01:57:24] Thank you.
[01:57:25] No, no, we need to get that.  And I need to handle that route.  OK, so--
[01:57:33] First thing is
[01:57:37] We can change this to story cram or top.
[01:57:44] Which means now when we-- no, don't do that one.  Do any other one.  When we switch between the pages,
[01:57:51] Thank you.
[01:57:52] Thank you.
[01:57:53] Thank you.
[01:57:55] we can see our new stories. Okay. Just out of curiosity, just to verify the claims here, now that we have this working, I'm in dev right now. So it might be a little bit different in dev. I just want to see what's going on with the network tab. Because this page, as you notice, there's no islands, you don't need to do anything, right? So it's literally just a page of HTML that renders on the server. And yeah,
[01:58:16] As you can see, there is just some Refresh.js, which I'm gathering is for hot reloading because I'm in dev. Out of curiosity,
[01:58:26] Thank you.
[01:58:29] how do you not run in dev, right?  Because if I looked at the DinoJSON,
[01:58:36] There's depth, yes. Okay, well...
[01:58:39] Thank you.
[01:58:40] I'm gathering if I take this command and do main TS...
[01:58:47] Thank you.
[01:58:48] I can do the same thing.
[01:58:49] And then
[01:58:51] No, did I do that wrong?  Well, maybe it's because I got watch and some other stuff on here.
[01:58:59] Yeah, do you know run main TS? It's like I put a whole bunch of extra stuff that I don't need.
[01:59:09] Sure, why not?
[01:59:16] Yeah, why not?
[01:59:20] Thank you. This is why Dino
[01:59:26] Actually, I can't give them requests for that domain.
[01:59:33] Thank you.
[01:59:34] This is why Dino is more secure.
[01:59:36] Right to Windows Vista.
[01:59:39] But that's a good thing.
[01:59:45] I don't own that domain.  I wonder if that's why that's being weird.
[01:59:49] Thank you.
[01:59:52] Allow and bypass this prompt.
[01:59:56] Let's go.
[01:59:58] dash dash allow.
[02:00:00] Oh, and.
[02:00:08] Thank you.
[02:00:08] - Okay, well, it's fine. You know what?
[02:00:12] We'll deploy this in a little bit and then we'll do it for real.  I was just curious because I like kind of,
[02:00:17] introspecting as I go, kind of figure it out. But you know what? We can leave that to the end. I do want to
[02:00:25] continue here because I want to make an example with an island, obviously, right? So, um,
[02:00:29] Yeah, okay, so we have our stories.
[02:00:32] and they load, because this doesn't handle the base route,  we're going to need--
[02:00:41] Oh, that's a good question.
[02:00:43] How do you do the index road?
[02:00:45] I think I...
[02:00:47] I had that originally, didn't I?  Main.tsx?
[02:00:54] Thank you.
[02:00:56] Thank you.
[02:00:57] -capa.
[02:00:59] Thank you. You guys in the chat are the best.
[02:01:04] Yeah, and you can see...
[02:01:07] You can see
[02:01:09] Bye.
[02:01:10] Thank you.
[02:01:12] Thank you.
[02:01:13] Okay, there we go.
[02:01:15] It's gone. It's all gone.
[02:01:19] Thank you.
[02:01:19] No, it came back. Okay. I don't know why that's there. We'll just continue going and we'll figure this out. Okay. So
[02:01:28] Okay, we got our story params and we have our stories loading.  The only challenge we have right now on this first page is that it doesn't handle slash
[02:01:39] And if I remember the original example handled slash,
[02:01:46] I'm just-- I'm like memory fog.  It wasn't main-- was it main TS?
[02:01:52] Is that how we handle slash?  Like if I go like something simple like export default.
[02:02:01] Thank you.
[02:02:02] Thank you.
[02:02:03] I like...
[02:02:07] Thank you.
[02:02:12] Thank you.
[02:02:14] I turn the server on first, right?
[02:02:17] Yeah.
[02:02:18] *breath*
[02:02:21] Thank you.
[02:02:24] Amen.
[02:02:29] I'm not remembering this.  This is my memory fog here.  Because the slash route we had at the very beginning,  before we even started--  remember, I was putting stuff in a garbage folder  so I wouldn't forget.  I actually forgot what it is.  Because in most things--
[02:02:49] it would be index, right?  But I feel like that's very not-- oh, it is.  What do you know?
[02:02:57] Some stuff's main, some stuff's index.  Okay, sweet.  It's index, okay, cool.  So what we actually wanna do for index,
[02:03:03] is basically copy this whole thing and hard code it for now.
[02:03:09] In a real app, we wouldn't do this, but this is just going to speed up the missing part.
[02:03:16] So we're just going to do this.
[02:03:19] I'm going to do this, and we'll worry about everything else  later.  OK.
[02:03:23] And now when we go here at least,
[02:03:28] Bye.
[02:03:29] We actually have navigation.  I'm seeing an interesting CSS flicker.  I assume that's dev mode, though.
[02:03:36] Okay.
[02:03:37] - We'll get there, okay.  Okay, so the reason we wanna go and do pages next, right?
[02:03:42] So let's do that next.
[02:03:48] Okay.
[02:03:51] Now that we have the pattern, I'm actually more confident that I don't need this other stuff because we're going to basically just repeat this pattern again.  But what's going to be interesting is we're going to...
[02:04:03] We're going to...
[02:04:05] essentially add
[02:04:07] some, some
[02:04:11] Hopefully by the end, we're going to add some--
[02:04:14] recursive partial hydration. So the first thing I'm going to do here actually is I'm going to make the nav
[02:04:21] Sorry, I already made the nav.  I'm going to make the comment component.
[02:04:27] And we're going to do this
[02:04:30] the unoptimized way first.
[02:04:35] I'm just like all thumbs or whatever today.
[02:04:42] And then we'll try and make the optimized version later.
[02:04:45] Okay, so an optimized version looks like this.
[02:04:50] Thank you.
[02:04:55] Okay.
[02:04:59] Thank you.
[02:05:03] Thank you.
[02:05:06] *sad music*
[02:05:10] Thank you.
[02:05:11] - Axie.
[02:05:12] This is our first...
[02:05:14] Oh, this is interesting. Can I actually do this on optimized?
[02:05:19] I mean, I obviously can, but
[02:05:23] Yeah, I mean, this is an island. This is our first island, actually.
[02:05:30] So let's just move it into islands.
[02:05:34] And
[02:05:36] Thank you.
[02:05:38] Thank you.
[02:05:39] And we need use state.
[02:05:42] Thank you.
[02:05:43] Thank you.
[02:05:45] Thank you.
[02:05:46] And we need one types dot.
[02:05:49] Yes.
[02:05:51] And all these links become--
[02:05:55] That's -- oh, sorry. Anyway, anchor. All these twos become --
[02:06:03] a trap.
[02:06:07] And fragments become fragments.
[02:06:10] And
[02:06:12] Thank you.
[02:06:13] Report from Remix. Okay, cool.
[02:06:21] Yeah, what's gonna be cool here is we're gonna do  recursive islands in a minute,  but I just wanted to see if we could,
[02:06:28] because you see how the comments are in the comments, this will be the
[02:06:34] the easy version of it.  Hopefully, I hope, we'll try some stuff here.  So let's make routes, new folder, stories.
[02:06:51] I'm gonna call the folder.
[02:06:52] and then I'm going to make the new file in here.
[02:06:55] Um...
[02:06:59] Thanks.
[02:07:00] Story.tsx.
[02:07:04] Thank you.
[02:07:05] Thank you.
[02:07:06] Thank you.
[02:07:07] See what we do here.
[02:07:09] Story, story, or I guess, yeah, I'll keep the naming, rename.
[02:07:16] Thank you.
[02:07:17] **** Yeah.
[02:07:18] - Okay, that's exactly right.  - And then, this page is a lot simpler than the first page.
[02:07:24] So
[02:07:25] I'm going to just...
[02:07:27] Yeah.
[02:07:30] Copy. This one doesn't have as much stuff. I'm going to copy this over from...
[02:07:36] from Remix.
[02:07:39] Then we can go from there.  First of all, we don't need any of this stuff.
[02:07:44] And this is .ps...
[02:07:48] And this is capital comment.
[02:07:52] God.
[02:07:54] TSX.
[02:08:03] All right, it's an island.
[02:08:05] Thank you.
[02:08:06] All right. And then this is .ps.
[02:08:13] Okay. And then...
[02:08:19] Okay, sweet.  And then we use a similar setup that we used here  where we,
[02:08:25] grab a parameter and we call our fetch API and call render.
[02:08:30] Wow.
[02:08:32] Thank you.
[02:08:33] Actually, I just grabbed this whole thing.
[02:08:37] Okay.
[02:08:39] Thank you.
[02:08:42] Thank you.
[02:08:46] Okay.
[02:08:47] And this time our data is of type istory.
[02:08:56] Thank you.
[02:08:57] I'm not.
[02:08:58] Thank you.
[02:09:03] All right, and I do need to grab something from up here.
[02:09:08] Probably need this in the middle.
[02:09:10] Thank you.
[02:09:12] Thank you.
[02:09:13] Thank you.
[02:09:14] Mmm.
[02:09:16] Our fetch call just becomes this.
[02:09:25] Thank you.
[02:09:26] This just becomes...
[02:09:30] Thank you.
[02:09:31] Thank you.
[02:09:34] This...
[02:09:37] And this just becomes this.
[02:09:43] And this goes away.
[02:09:51] And then copying the same pattern here.
[02:09:56] We need...
[02:09:58] Something like this.
[02:10:01] Okay.
[02:10:03] Okay.
[02:10:04] This one, like this.  And it's going to be, data is going to just be,
[02:10:14] the pillars, the story, and then it's just going to be
[02:10:18] Thank you.
[02:10:18] I
[02:10:21] And then...
[02:10:23] Don't forget the...
[02:10:30] react
[02:10:34] Okay.
[02:10:36] of the loader.
[02:10:42] Move extraneous references to link.
[02:10:46] And
[02:10:47] To me, Trev.
[02:10:51] uh
[02:10:51] Thank you.
[02:10:55] I wonder where the...
[02:11:01] Something didn't come across properly, but--
[02:11:06] Thank you.
[02:11:07] Huh.
[02:11:08] Oh, Paige, you need to lay out.
[02:11:13] Do not forget the layout.
[02:11:17] Thank you.
[02:11:18] Thank you.
[02:11:19] Thank you.
[02:11:21] Thank you.
[02:11:25] - The right place, yeah, and here.
[02:11:29] Bye, Flavio.
[02:11:33] I'll use port layout from the other one.
[02:11:38] Thank you.
[02:11:40] Okay.
[02:11:42] Or at document.
[02:11:45] And I have some extra...
[02:11:51] Thank you.
[02:11:54] And that's it.
[02:11:58] all right
[02:12:02] Thank you.
[02:12:03] Story and...
[02:12:07] Oh.
[02:12:10] Mm-hmm.
[02:12:12] Okay.
[02:12:14] Thank you.
[02:12:18] Oh, I see. Okay. Yeah. So yeah, this was my, my problem.  I had the stuff in the wrong place. Okay.
[02:12:32] - Okay.
[02:12:33] - Collapses, okay.  Okay, well, this is, all right.  I always have to remember this, the JSX thing.  There's an and in here that should,
[02:12:43] Thank you.
[02:12:44] that
[02:12:45] should be--
[02:12:47] Should be a-- is it that one?  No, I don't think it's that one.
[02:12:54] of these conditionals in here ends up returning a zero when there's no comments. So I think it's,
[02:13:01] I think it's...
[02:13:07] Thank you.
[02:13:07] Yeah.
[02:13:09] I'm trying to remember where it is.
[02:13:11] Um...
[02:13:13] Yeah.
[02:13:14] I'm just not seeing it right now, but that's fine.
[02:13:17] It's like--
[02:13:19] Let's look here.
[02:13:21] This happens only on the JSX ones, and I always forget to get to it because it's...
[02:13:26] text and then it's zero. It's got to be in the comment component.
[02:13:30] Thank you.
[02:13:31] Yeah.
[02:13:32] Thank you.
[02:13:37] Thank you.
[02:13:37] Thank you.
[02:13:42] Thank you.
[02:13:49] Okay.
[02:13:49] Thank you.
[02:13:51] All right.
[02:13:54] Oh, and we'll worry about that in a minute.  I just-- I've seen this one a few times.  The problem is, when I copy it from the different sources,  they all treat stuff a little bit differently.
[02:14:05] Um...
[02:14:07] Anyways, let's worry about that in a minute.  Okay, so the first thing that I'm noticing here is that when we
[02:14:13] go into the network tab,
[02:14:16] Now, more than a refresh, we're getting the rest of the JavaScript in and we get the comments.
[02:14:23] Um,
[02:14:24] Thank you.
[02:14:25] If I go back to the main page,
[02:14:28] And I look here.
[02:14:30] I'm gathering, I'm not going to see any sort of data serialization, because there's no islands, right? But when I go into a specific story,
[02:14:37] and i look in here i'm going to see this fresh islands props and it's going to pass in  all the data for all the comments on the page you all should be able to see this right and
[02:14:49] Thank you.
[02:14:52] Yeah.
[02:14:53] Yeah, it's, yeah, okay. So let's do something about that. That's what I want to do. I want to take this as a simple example. So the problem right now is once we enter the first comment island, the whole page essentially needs to be client side. But I'm suspecting that we won't need to do this. When you have islands, you can do some pretty smart stuff by hoisting and passing stuff through as children.
[02:15:19] There's a question in chat.  Is there context for a cool API routes?
[02:15:25] My understanding with Astro is it just literally renders the page. So you don't have to call it, it just goes down the page and it's as far as it gets. So if you return a response, it returns a response. If you don't, it'll continue rendering the page. So essentially, you just read it top to bottom with Astro.
[02:15:43] So it doesn't really need to call it out. Okay, so...
[02:15:48] Anyways, let's--
[02:15:51] Oh, no, I found it.  It says one, props, comment, dot, length, and length is 0.
[02:15:55] Um
[02:15:56] So yeah, sorry, it's this one.
[02:16:02] Thank you.
[02:16:05] I'm going to change all the rest of the stuff.
[02:16:07] All right.  Because Booleans are stripped in JSX, but--
[02:16:14] Other stuff isn't.  OK.
[02:16:18] Cool. All right. Awesome. So we have Hacker News working on that. And now let's see if we can do something smart here. So we have our comment island. But
[02:16:30] What I actually want to do now is apply a technique that I've only so far--  that I've been able to apply in Marco quick,
[02:16:38] hydrogen and
[02:16:42] Okay.
[02:16:42] and Astro.  And I want to do it here, which is our ability  to do recursive partial iteration.  We don't need this counter anymore.  And to do that, what we're going to actually do  is we're going to make our comment component
[02:16:56] actually a component and make a what I call the toggle island. So,
[02:17:02] I mean, already you can see some benefits here on the network side.  Like we're only loading about 7.6 kilobytes of JavaScript here, but we can do better.  Right.  So let's.
[02:17:14] And
[02:17:15] And I think we can get rid of that big blob of data serialization.
[02:17:20] To do that, I'm going to make a new file and call it toggle.
[02:17:26] uh psx and
[02:17:29] I have a solid version of this.  So let's port this from solid, because in my Astro version,  I use solid to do the islands.  And I have it right here.
[02:17:40] So,
[02:17:42] Let's see if I can port solid looking component here.  OK.  We don't need that.
[02:17:51] Okay, so we're gonna make a few little changes here,  'cause we don't have that.  We don't have, actually, hydrogen might be the easiest one.  You know what, actually, let's open hydrogen.  Let's open hydrogen.
[02:18:04] Let's do that.  This might be the easiest way to look at this.  Open development.
[02:18:13] Examples.
[02:18:16] Hydrogen Hacker News. Let's look at that.
[02:18:18] Thank you.
[02:18:20] All right, so in hydrogen,
[02:18:25] server server clients he toggles the client component and then we have this common server component
[02:18:29] Okay.
[02:18:30] Yeah, I think this is going to be the easiest way to go.  We're going to take this toggle.
[02:18:35] from there.
[02:18:39] Beautiful.
[02:18:41] Okay, and then what we're going to do is obviously grab our
[02:18:48] Preact specific.
[02:18:50] Thank you.
[02:18:51] top stuff.
[02:18:55] And then what we're going to do is get our fragment.
[02:19:00] Thank you.
[02:19:03] And use props here.  Yeah, for passing props, children.
[02:19:07] Thank you.
[02:19:09] Thank you.
[02:19:10] Like everybody else does.
[02:19:14] Okay. And okay, so
[02:19:18] What we have here now, for people to understand, is I've taken the comment component here, and I've extracted the toggling, like this thing.  You see how this is recursively passing comment?
[02:19:32] through, like it's comment, calling, comment, what we're going to do instead is
[02:19:36] put the state in the smallest possible component, which has the toggling, and then pass
[02:19:42] the server rendered static code through
[02:19:45] the layers of dynamic client components.
[02:19:51] This will make more sense when I grab the comment server from them. So I'm going to -- we're now going to make a new file under components, which is comment.tsx. And it's going to be a slight alteration of our existing comment component. So I'm going to be able to take --
[02:20:13] most of this stuff and move it across.
[02:20:18] Thank you.
[02:20:19] Thank you.
[02:20:20] Thank you.
[02:20:20] Thank you.
[02:20:21] But instead, what we're going to do here is we're going to grab toggle from...
[02:20:28] Skylands.
[02:20:30] Paul Berger.
[02:20:32] Bye.
[02:20:33] I think we're going to be sure.
[02:20:39] Thank you.
[02:20:45] And
[02:20:46] Thank you.
[02:20:48] I'm going to change all these to anchors, actually.
[02:20:51] Thank you.
[02:20:53] Thank you.
[02:20:56] Thank you.
[02:20:57] And
[02:21:00] See what we're doing here? Comment calls itself still, but it wraps it in this toggle. So the only client component we actually use here, right? So now we can get rid of stuff like use date.
[02:21:09] in our comment.
[02:21:11] So it's not stateful.
[02:21:13] And
[02:21:14] Thank you.
[02:21:16] 2 becomes 8.
[02:21:20] And did--
[02:21:24] Thank you.
[02:21:29] And then...
[02:21:32] Some more fragments here.
[02:21:35] Yes, my biggest question right now,
[02:21:39] but it's capital B. Cool.  So you can see this is actually very similar  to our previous component.
[02:21:46] Except now,
[02:21:48] Actually, I didn't check about the dangerously set HTML.  Did I do that over here?
[02:21:55] Does Preact do the dangerously set HTML thing?  I guess it does because the stories are working.  OK.  So--
[02:22:04] Yeah.
[02:22:05] All right.
[02:22:06] Yeah, so essentially, instead of having a whole comment island, we've actually shrunk our island to just the toggle part.  And the rest of this is actually going to be server now.  So now, if we switch and we go here to our story and we import it from components instead of from islands...
[02:22:31] Thank you.
[02:22:31] Oh no. This is what I was worried about.
[02:22:37] Okay.
[02:22:41] I thought there was a chance this might not work.  But I wanted to confirm.  The problem is it's...
[02:22:52] Okay.
[02:22:55] Okay.
[02:22:57] Let's see if I'm -- before I discount this, let's make sure that I'm not doing something stupid.
[02:23:06] Thank you.
[02:23:06] Thank you.
[02:23:09] right um
[02:23:14] Yeah, let's make sure that I haven't
[02:23:18] - Circular convert, type error, converting circular structure to JSON starting at,
[02:23:25] Because I'm wondering if I'm causing like a...
[02:23:29] A loop.
[02:23:30] somehow.
[02:23:32] um
[02:23:34] Mm-hmm.
[02:23:35] And
[02:23:38] Thank you.
[02:23:39] Okay.
[02:23:42] Thank you.
[02:23:43] Thank you.
[02:23:45] We can give this a minute to make sure that I'm not missing anything.  You know, like this is a minor.  There is a chance that recursive partial hydration wouldn't work.
[02:23:55] because this is still very, very new.
[02:23:57] But the challenge here is that
[02:24:01] Thank you.
[02:24:03] I'm calling myself
[02:24:06] Thank you.
[02:24:07] from the server component
[02:24:10] and passing it through a toggle, which then calls a toggle. They actually nest.
[02:24:15] And this, as I said, what this should do is remove the need to serialize all the data.  We've seen this in the other islands frameworks.
[02:24:27] I like using this case because it's basically...
[02:24:30] impossible for a single page app to make this optimization.
[02:24:34] And it highlights really nicely for the performance characteristic of
[02:24:42] of partial hydrated pages. Okay. So just let's double check our logic here. So we have our layout, we render our story, our stories map over the comments first level. Okay. And we pass
[02:24:55] We have a key on the comment ID, and we pass in the comment.
[02:24:59] Okay.
[02:25:01] To be fair,
[02:25:03] I probably am missing a key.  No, I do have the key.  So the comment ID and the best comment.
[02:25:08] on
[02:25:10] the island version. Let's try it. Let's see this version.
[02:25:15] Bye.
[02:25:16] OK, I mean, I don't think that's what's causing the problem.  But I am noticing that I am missing a key here.  nested.id. But--
[02:25:27] I don't think that's the problem.
[02:25:31] If I remove the recursion,
[02:25:34] Thank you.
[02:25:35] How do I remove the cursion?
[02:25:39] without like obviously if I just comment out this whole block
[02:25:45] We're just not going to see very much here.
[02:25:48] It's all top-level comments. We don't see any of the nested comments.
[02:25:54] The second that we...
[02:25:58] Now, what if I remove the toggle?
[02:26:02] Let's play that game.
[02:26:04] Let's remove the toggle.
[02:26:06] So--
[02:26:08] There.
[02:26:09] in there.
[02:26:12] Thank you.
[02:26:14] Thank you.
[02:26:17] Thank you.
[02:26:20] Oh, it's because we don't need these extra ones too.
[02:26:23] Move the toggle.
[02:26:26] Now...
[02:26:28] Thank you.
[02:26:29] Thank you.
[02:26:30] Interesting.
[02:26:36] Just navigate around. I just want to...
[02:26:41] 66 comments.
[02:26:44] Okay.
[02:26:45] Thank you.
[02:26:48] It renders.
[02:26:51] But I guess we have none of the UIs to indent it,  if I remove the toggles.
[02:26:57] we end up with more comments than before, and it renders.  The second that I put the toggle in,
[02:27:06] OK, let's go the other way.  Let's put the toggle in, but not render a comment.
[02:27:14] I don't know if that'll make it angry.
[02:27:19] toggles in, don't render, we're fine.
[02:27:22] And then...
[02:27:24] Render the comment recursive.  OK, yeah.
[02:27:29] I'm...
[02:27:34] Thank you.
[02:27:35] Yeah.
[02:27:43] Yeah, I think I'm gathering that this is just something that's not implemented yet.
[02:27:52] Yeah.
[02:27:54] Yeah, I don't know if I actually addressed this earlier, but
[02:27:58] The thing is,
[02:28:00] The trick here with the recursive partial hydration is that
[02:28:06] The...
[02:28:08] This is so much easier to explain to people who are familiar with
[02:28:13] to clear this, people who are
[02:28:17] Thank you.
[02:28:18] familiar with the Shadow DOM, but essentially,
[02:28:24] Maybe it's not easy to show with this.  This kind of shows what I'm talking about.  This comment is a server component, right?
[02:28:33] So what ends up happening is,
[02:28:37] You can pass
[02:28:40] Okay.
[02:28:40] A server component can't
[02:28:43] contain, sorry, a server component can contain client components, but client component can't  contain a server component. Otherwise, some client state change could cause a server component  to need to re-render and you'd have to go back to the server for it.
[02:28:57] right? But what this means though is
[02:29:01] on this boundary between client and server component,
[02:29:04] generally speaking in most of these frameworks, is that if you have a
[02:29:08] client component and you pass the server component through it like the children, what you can do is  actually the server component will still get rendered on the server. So this logic still  gets rendered as part of the server and then it gets passed in as the child prop to the client  prop already pre-rendered. So what I've managed to do with this pattern is essentially you render  the comment and when it has child comments it's still rendering these on the server and then  their child comments come in again and still render on the server, still render on the server
[02:29:38] these islands
[02:29:40] that rap...
[02:29:42] all a completely static server tree. And the benefit of doing this is if you look at this client component that I'm using, it gets past no props. And because it gets past no props, and it just maintains its own state, we don't need to serialize any of the data for that prop. So if you notice here, even though we're doing the
[02:30:00] They're just kind of passed through. So the cons are always rendered on the server, regardless. They're just passed through this tree. And because none of the state needs to get passed through, we don't actually have to serialize any of the data required to render those components. We just hide them here using like a class, right? We're just toggling the visibility.
[02:30:21] And for that reason, what we can do is we can both shrink the size of the JavaScript now in the client. Our island only needs to be this big. We don't need the whole comment island. And secondly, what we can accomplish by doing this approach is we saved all need for all data serialization. So instead of having that double data problem, you know, like...
[02:30:39] I'm going to have to go back here for now and change this to the islands version of the comment.
[02:30:51] - I was showing earlier, when you go here,
[02:30:54] Essentially, because we started the island where the comments started, we had to render all, sure, we're hydrating it fine, but we ended up actually having to hydrate and pass all the data for all of these comments. So when you actually look at the network,
[02:31:08] you actually see all the data passed and
[02:31:12] If I go into the div item view here,
[02:31:15] in here, you're going to see all the data again in the form of HTML.
[02:31:20] See? It's all here. This is the whole blob of data.
[02:31:29] Again, this is something that obviously every SPA framework has to deal with because they need to hydrate the whole page. But one of the cool things about islands is you can actually, by clever, kind of the same tricks you use to hoist memo, I don't know if everyone's read Dan Abramoff's, sorry, it was overreacted.
[02:31:46] Um,
[02:31:48] He wrote something called Before You Memo, and he explains to people how you can improve  React's performance by hoisting the state up, essentially, and changing the tree.  Or one's moving state down, but he calls lift content up.
[02:32:06] He's talking about how he can...
[02:32:09] basically do this trick of passing things through.  And it changes the render characteristic because
[02:32:15] the pass through gets associated with the parent. And I think, yeah, this, he wrote this to help people not use memo, but you can tell that this was all just a preamble so that he could help get people used to server component.
[02:32:30] patterns because this is the trick to islands. This is how you actually optimize it. You actually want to arrange your code in a certain way if you actually want to be able to optimize for islands. And this is true for React Server components like with Hydrogen or Astro or all of these. You end up kind of doing this kind of state hoisting pattern.
[02:32:51] Thank you.
[02:32:52] Hopefully that
[02:32:54] That answers the question a little bit.
[02:33:01] Thank you.
[02:33:03] Thank you.
[02:33:04] Yeah.
[02:33:05] Anyways, I'm going to leave this part of this now.  Let's get this deployed and moved on.
[02:33:12] Essentially, there's a fixed fork.
[02:33:16] Thank you.
[02:33:17] I can try. I don't know enough how Deno works. Usually I'd be just messing with stuff in my node modules, but there is no node modules here. So I'm a little bit out of my element.
[02:33:34] Just to be fair.
[02:33:40] Yeah, I can revisit it.  I'm going to leave the code for the other...
[02:33:46] solution in line so I can change this. I want to kind of switch over to talk about what the deployment story is. I've had some I've done some work with Deploy in the past.
[02:33:57] But
[02:33:59] mostly through Netlify.  I also have a specific Deno deploy adapter for SolidStart.  But let's get this up.  I'm not going to worry right now about...
[02:34:09] the user page is not that important. So I think we've spent enough time in this example for now. If the current version works,
[02:34:21] Let's see what it looks like in prod.
[02:34:24] And I think that's the answer. We do have the current version working. Okay, sweet. Okay, so...
[02:34:31] Um...
[02:34:33] Yeah, if I remember correctly,
[02:34:38] There's a couple ways to do this stuff, actually.
[02:34:42] Deploy CTL.
[02:34:44] is one of them.  And the other one is I can just make the GitHub repo.  I actually did make the GitHub repo.  So maybe that's just a...
[02:34:54] better story
[02:34:56] Right. You know, deploy.
[02:34:59] You know what?  Maybe I'll just do that.  I think I made--
[02:35:03] Where did I...
[02:35:05] I think I, yeah, I made the GitHub repo. I'm just going to,
[02:35:11] Yeah.
[02:35:17] I'm so lazy.
[02:35:21] Actually, I don't want to add read me.  But yeah, you get the idea.  I'm just going to copy this stuff over here.
[02:35:31] And...
[02:35:33] Let's push all our files up.
[02:35:36] And then...
[02:35:46] Thank you.
[02:35:47] Thank you.
[02:35:48] Thank you.
[02:35:49] Thank you.
[02:35:52] All right.
[02:35:55] Cool.
[02:35:57] All right.  And then I think...
[02:36:02] We're good, yes.  All right.  There we go.
[02:36:06] Okay, we'll update that a bit. But now we have a repo. And then I think
[02:36:11] all I have to do is if I go to my Dino deploy and sign in,
[02:36:17] I think...
[02:36:19] I just have to link the GitHub.
[02:36:21] Thank you.
[02:36:25] Why is that one there?
[02:36:27] Weird.
[02:36:30] Thank you.
[02:36:31] Thank you.
[02:36:34] Thank you.
[02:36:36] Give me one second while I get this in.
[02:36:42] Thank you.
[02:36:45] Sorry, please.
[02:36:48] Yeah.
[02:36:55] And I want fresh Hacker News.
[02:37:09] Sorry, it looked like I lost internet for just a second.
[02:37:15] Main...
[02:37:17] Thank you.
[02:37:18] Thank you.
[02:37:19] Yeah.
[02:37:21] Main...
[02:37:27] I'm gathering main TS is the entry.
[02:37:32] And then...
[02:37:36] I need to add...
[02:37:37] Um...
[02:37:40] Was it Dino?  Dino?
[02:37:45] Let's just try linking this now and see if this works.  I think I have to add the--
[02:37:49] the token token.
[02:37:57] Maybe I'm wrong because I did it from the UI.
[02:38:02] Thank you.
[02:38:04] Thank you.
[02:38:05] Beautiful.
[02:38:06] Okay.
[02:38:08] Ryan Solid, fresh Hacker News, Dino Dev.  There we go.
[02:38:18] Okay.
[02:38:20] We have,
[02:38:21] Thank you.
[02:38:22] Thank you.
[02:38:23] Thank you.
[02:38:25] Oh, did I never...
[02:38:27] I never fixed-- we're missing one thing.  I never fixed the--
[02:38:32] The page navigation. Let's fix that really quick.
[02:38:37] Um,  um,
[02:38:38] We never fixed the...
[02:38:41] All right.
[02:38:42] the page navigation.
[02:38:47] Um,
[02:38:48] All right.
[02:38:49] Let's -- I kept it at page one because
[02:38:53] I wasn't sure how to get...
[02:38:56] Let's do something here.
[02:38:58] Thank you.
[02:38:59] What's underscore and what's contact?
[02:39:05] See this again and see what we're dealing with.
[02:39:07] Thank you.
[02:39:17] - Yeah, I imagine, is underscore request,  is that what that is in that example?
[02:39:22] I'm guessing that's what it is.
[02:39:25] All right, I'm going to go to--
[02:39:27] Get it.
[02:39:31] Okay.
[02:39:35] Thank you.
[02:39:37] Thank you.
[02:39:38] Thank you.
[02:39:40] Yeah. I knew it would be something simple like that. I was just missing it earlier. Let's copy that over.
[02:39:50] Thank you.
[02:39:51] There we go. How did I get this here?
[02:39:58] Thank you.
[02:39:59] Thank you.
[02:39:59] Okay.
[02:40:02] Thank you.
[02:40:03] Thank you.
[02:40:04] Thank you.
[02:40:05] I don't need...
[02:40:07] I should be able to do all of that stuff.
[02:40:13] Actually, this.
[02:40:16] Thank you.
[02:40:22] Eric.
[02:40:24] their normalized URL that's because of React server components.
[02:40:28] And then your own page, page.
[02:40:33] And then...
[02:40:34] Telling me.
[02:40:36] Thank you.
[02:40:41] All right.
[02:40:43] And then...
[02:40:44] I can apply this in both places.
[02:40:48] Okay.
[02:40:53] Both here and here. Beautiful.
[02:41:01] Thank you.
[02:41:04] Thank you.
[02:41:06] Thank you.
[02:41:07] And now if that's all right, I should go back to localhost.  Yeah, someone's like, you're not on localhost.  And they're absolutely right.  It's 8,000, isn't it?
[02:41:17] Thank you.
[02:41:20] Yeah.
[02:41:20] We should have the pages working now. Yeah, beautiful. Okay. My bad.  But that means we get to test the other feature. Fix page navigation. We should
[02:41:35] Auto deploy, right? Because it's all linked up.
[02:41:38] Thank you.
[02:41:39] Okay.
[02:41:42] Alright beautiful.
[02:41:46] Thank you.
[02:41:49] All right. And
[02:41:51] If everything works the way I...
[02:41:55] Hopefully, magically works.  That's probably a deploy I was seeing.
[02:41:59] page navigation works.
[02:42:03] *laughter*
[02:42:04] -
[02:42:05] Okay.
[02:42:09] Yeah, it should be the text nav accessible to--
[02:42:15] How much of this do I...  The funny thing is...
[02:42:17] Yeah, okay. We'll just worry about the talk now.  Um...
[02:42:22] Actually, too.
[02:42:24] Let's look here.
[02:42:29] It's in our layout component.
[02:42:32] Nav class inner.  OK, let's see.  The funny thing is, I actually didn't write this original example.  If anyone's wondering, I actually
[02:42:42] This came from...
[02:42:46] No
[02:42:47] This came from...
[02:42:51] What do you call it?
[02:42:55] What is it?  This came from you, funnily enough.
[02:43:02] I probably have stuff that's overriding other stuff.  Yeah, it's right here.
[02:43:06] Thanks.
[02:43:08] I'm not super familiar with
[02:43:12] with--
[02:43:14] with what they ended up
[02:43:17] doing
[02:43:18] Here originally-- this is just opacity.  Never mind.  You can tell how much I play CSS.
[02:43:25] Thank you.
[02:43:26] Mm-hmm.
[02:43:26] Thank you.
[02:43:27] Thank you.
[02:43:28] Thank you.
[02:43:31] Yeah.
[02:43:32] Thank you.
[02:43:32] I'm actually going to have to figure this out.
[02:43:36] Thank you.
[02:43:41] Thank you.
[02:43:42] Thank you.
[02:43:43] I keep on looking at the deployed one. Localhost. Silly me.
[02:43:50] Yeah.
[02:43:51] Thank you.
[02:43:53] I mean, that's the brute force way of making it accessible.
[02:43:58] So
[02:43:59] Thank you.
[02:44:01] Thank you.
[02:44:02] um
[02:44:03] Thank you.
[02:44:06] Yeah, I probably should, but I'm...
[02:44:10] I'm lazy.
[02:44:13] All right.
[02:44:14] Don't want to be white.
[02:44:16] Yeah, or something slightly-- actually, this is going to work  against block, is it?
[02:44:24] I'm just playing.
[02:44:29] Yeah, it's not four against black.  Maybe just...
[02:44:37] Thank you.
[02:44:38] I am not a designer. Forgive my terrible, terrible-- it's going to be like a green color now when I hover.
[02:44:47] No.
[02:44:48] Can you see the difference?
[02:44:50] Ah.
[02:44:52] By looking at the post, yeah.
[02:44:56] Oh, thanks. I'm like, what's going on here? Oh, man. If it was possible, I made it less accessible.
[02:45:12] Oh, man. I'm just the worst here.
[02:45:22] Oh.
[02:45:28] Okay.
[02:45:33] Thank you.
[02:45:35] Okay.
[02:45:36] It's going to see there's a hover state, and then built with fresh is somewhere else.  Let's inspect that.
[02:45:42] I'm just going to hard code that in really easily.
[02:45:46] GitHub.
[02:45:49] Okay.
[02:45:54] Thank you.
[02:45:56] Thank you.
[02:45:59] Okay.
[02:46:03] Make text.
[02:46:07] readable.
[02:46:09] Bye.
[02:46:12] Okay, so let's move on here.  Okay.
[02:46:20] So now our example...
[02:46:23] It's readable and good, OK.
[02:46:27] Okay, so.
[02:46:28] Yeah.
[02:46:30] I'm going to move this to a browser where there's no browser extensions or anything else, just so I can see it a bit better.  All right.
[02:46:38] Thank you.
[02:46:40] So I can get an idea.  So just kind of get an idea of where we're sitting on this.  Obviously, um,
[02:46:48] Thank you.
[02:46:50] Thank you.
[02:46:51] no JavaScript on the initial page load, because this is completely static page. And then when we go into something at the comments,
[02:47:00] um,
[02:47:01] It's pretty smart. We don't need very much JavaScript at all. We could do better with the recursive thing, but this is a very simple example here where we can...
[02:47:14] see that we can get 6.8 kilobytes.  And for people wondering how small 6.8 kilobytes is for this page,  it's still pretty freaking good.  Because even without the recursive, to give you some ideas here,
[02:47:29] You know, let's go in here, SvelteKit.
[02:47:32] you know, will on this page be 20 kilobytes.
[02:47:37] Hell, solid start.
[02:47:39] on this page.
[02:47:41] will be 12.6 kilobytes.
[02:47:44] Like, we're like that this this fresh page using these techniques is already half of like a spa.
[02:47:54] Obviously, there's things like quick.
[02:47:57] where, you know, they can be like, oh, look, no kilobytes.
[02:48:02] you know, as soon as you do this comment,
[02:48:06] Wow.
[02:48:07] This is 16.5 kilobytes.
[02:48:09] So, um,
[02:48:12] You know, there's like this.  This is a pretty good starting point.
[02:48:20] Hydrogen.
[02:48:21] Thank you.
[02:48:23] Let's just look at this one.
[02:48:26] Yeah.
[02:48:27] Thank you.
[02:48:28] 58 kilobytes.
[02:48:30] Right?  Smallest React framework.  But yeah, if you want to start talking, you know, I mean, if we bring out React, it's  sort of like shooting fish, 61.9.  And I don't even want to load next.
[02:48:43] But I have it here, so we can.
[02:48:46] Just kind of give an idea of the difference that islands can make, right? 129.
[02:48:52] Obviously, I left some of my favorite contenders to end here.  We got Astro Solid, just to kind of give an idea.
[02:49:03] 4.5.
[02:49:04] 4.8 kilobytes, obviously.  But this has a recursive hydration trick,  which we are yet to add to our...
[02:49:15] Fresh example, and then
[02:49:17] I got Marco six here. Why not?
[02:49:20] deploy to DNO deploy, and this one's 1.6 kilobytes.  And I mean, that's fine.  Nothing is going to be Marco when it comes to this stuff.  So we just use this kind of a guideline  to kind of know where things are at.
[02:49:33] Thank you.
[02:49:34] The...
[02:49:36] But this is just JavaScript load. Honestly, JavaScript load is not going to make the hugest difference. It's important to understand as a baseline what the islands are doing for you here. The smallest single page app example I have here is 12.6 kilobytes of solid and Preact with Fresh is already half of that.
[02:49:58] Right?
[02:49:59] So, you know, without probably even it can be optimized further in the future.  So I think I think this is like a good understanding of where that kind of sits.  The other thing I want to kind of look at is let's just kind of get an idea of what
[02:50:13] of what the load is.
[02:50:16] not what the load characteristics look like here.  I'm going to just load this comment page.  Which one are we on?
[02:50:25] I feel like I should be on the same one for everybody.
[02:50:28] So,
[02:50:29] Which one?
[02:50:30] Thank you.
[02:50:33] Um...
[02:50:34] Which one did I go to?
[02:50:36] Yeah.
[02:50:37] Sorry, just looking here. Unhappy users notepad. Is that the one that I looked at with everyone? Yeah.
[02:50:45] I think I might have been looking at a preloaded page though.
[02:50:48] Because I don't think unhappy users know better. Oh, there it is.
[02:50:52] Still here.
[02:50:54] It's funny, though, because...
[02:50:55] It looks like
[02:50:57] OK, there we go.  Yeah, let's look at the load.
[02:51:01] characteristics here and just do a quick
[02:51:03] Timer profile.
[02:51:08] - Yeah, yeah, yeah, yeah.  The data serialization size does have an impact here,  but I'm gonna let perf tests show the impact.  I mean, what you will see,
[02:51:19] And we can look at that in a second too. We'll look at both. Okay, yeah. So this timeline's pretty typical of an async render. We have the initial load. Let's give it one more run.
[02:51:29] Thank you.
[02:51:31] Just to kind of get an idea.
[02:51:34] All right.
[02:51:37] Um.
[02:51:39] Let's do that one more time.
[02:51:42] Didn't like that one.
[02:51:46] Better.
[02:51:47] 206.
[02:51:49] async render, load our assets,
[02:51:53] Global CS being processed, get our chunks in,
[02:51:57] And then...
[02:52:00] we get our first paint.
[02:52:02] Um...
[02:52:04] Thank you.
[02:52:05] 409, and it's all the same because it's async rendering. This is going to, I imagine, is very, very similar to the kind of scenario that we see with something like Astro, right? Just kind of do that. Let me just get an idea. Both of these, interestingly, are on DinoDeploy, so I think that's kind of interesting.
[02:52:24] Let's give it another go.
[02:52:29] Thank you.
[02:52:30] Yeah.
[02:52:33] Same idea, right? First paint.
[02:52:36] and Contentful Paint in that all around.
[02:52:39] Yeah.
[02:52:42] Bye.
[02:52:42] Yeah, so we use 310.  Yeah, OK, so this is the same kind of ballpark scenario,  where you have about this thing, have the assets all load in,  first content.  Hydration is something that I wouldn't mind seeing.  But I guess it's hard to compare apples to apples,  because we're not doing the recursive thing.  But yeah, it seems about in the range, right?  So this is pretty typical.
[02:53:02] for this, right? We can take something like
[02:53:04] and then the other one is
[02:53:07] and look at the performance profile here.
[02:53:09] And--
[02:53:10] Let me do something.
[02:53:13] Thank you.
[02:53:15] Right.
[02:53:15] Thank you.
[02:53:18] Let's try it one more time.
[02:53:22] Yeah.
[02:53:23] Better. There we go.
[02:53:25] No, still not better.  Let's keep on doing it again.
[02:53:28] This one's not on Dino, so I think that might be actually the biggest difference here.
[02:53:33] I've been pretty impressed with, you know, this is...
[02:53:35] Cloudflare, okay, yeah, I'm not,
[02:53:39] I'm not getting what I want here, unfortunately.
[02:53:41] Um...
[02:53:43] Let's not trust my local profiling that much more.  Oh, there we go.  Here we go, 340.  I think the biggest thing you want to notice here  is the difference in hydration timing.  Let's see.
[02:53:58] Yeah.
[02:53:59] Let's look here.
[02:54:01] - That's interesting.
[02:54:04] I'm not seeing...
[02:54:06] much in the way of hydration here.  Although I know this works, we tested it, yeah.
[02:54:13] That's interesting.
[02:54:15] Because it looks like the hydration stuff's happening
[02:54:17] here.
[02:54:19] Which is, why is the first paint delayed is interesting.
[02:54:23] If you look at the timing, this is probably
[02:54:27] the hydration stuff happening here.  But if they compare the timing to when I was doing Remix,
[02:54:34] You do the first paint, then you see the hydration stuff.
[02:54:36] here
[02:54:37] Right.
[02:54:39] That's interesting.
[02:54:41] OK.
[02:54:45] Right.
[02:54:47] Very different timing than the other ones.  OK, let's just run a few page insights, you know, just kind of get an idea of where we're at.  These are always kind of fun to do.  I'm kind of curious, actually, for completely different reasons, because as you...
[02:55:04] all know
[02:55:06] There is that...
[02:55:07] terrible, terrible page that I have here.  Right? So I'm going to run solid right off the bat here.  Because I actually know I should run the Dino version, shouldn't I?
[02:55:15] Um...
[02:55:17] Yeah, let's run the Dino version.
[02:55:21] uh...
[02:55:23] Thanks.
[02:55:25] Or Netlify Edge is probably close enough.
[02:55:30] Let's...
[02:55:33] Let's just do that version.
[02:55:35] Thank you.
[02:55:37] This page is just mean. I'm wondering if the API people are ever going to block me from just doing this.
[02:55:44] No, there's no, no, there's not.  Only Quick does that waterfall request thing by default.  All the other ones just...
[02:55:54] load the JavaScript that's needed.
[02:55:58] Bye.
[02:56:00] Let's just
[02:56:02] get a baseline and kind of work from here.  Yeah, you guys are all familiar with the page of doom,  which basically is this single page app killer. Yeah.
[02:56:11] I-- this page is brutal.  OK.  So it's hard for a single page app to get past 50 on it, right?
[02:56:21] I'm curious where our hybrid state gets us,  because I feel like we're going to still pay the serialization  costs, and it's actually going to be a real cost here,  unfortunately.  So let's take a look here.  I expect an improvement over the spa.  I'm using Solid as a guinea pig so that--
[02:56:44] Just know that SvelteKit Remix and them are all about the same.
[02:56:48] Thank you.
[02:56:49] I'm just kind of curious what the timing--
[02:56:53] is here.
[02:56:54] Yeah.
[02:56:56] This page is brutal.
[02:57:00] Because it's like a page of--
[02:57:02] 14,000 comments like
[02:57:05] just to kind of put it on...
[02:57:07] on similar
[02:57:10] Yeah, it doesn't really matter which spot framework you put in here.
[02:57:18] It's going to be brutal.
[02:57:21] Quick is pretty good, but Marco is probably -- I'm going to pull Quick up in a minute. I've had some issues with Quick's server rendering performance. Like, I think they've improved it. I've got some improved stuff and I was able to do the recursive thing. I'm worried about -- this page can cause workers to time out sometimes.
[02:57:43] OK, so yeah, there's something that
[02:57:48] We're going to run that again, but I think we still need to--
[02:57:51] Oh, yeah, something is hitting the APIs hard right now because nobody should be scoring
[02:57:57] No one should be scoring 22 on this.
[02:58:01] Thank you.
[02:58:02] Let's see what's going on.
[02:58:05] Yeah.
[02:58:07] Thank you.
[02:58:08] I wonder if the APIs are being slow to respond.  Is there what's going on?  Because we've run this many times before.
[02:58:19] Yeah, OK.
[02:58:20] Yeah.
[02:58:21] Okay, yeah, so we got some stuff to investigate, perhaps.  Okay, yeah, let me pull quick up just because I can.  Although...
[02:58:32] Thank you.
[02:58:33] Quick's interesting because they don't load anything.  So they kind of bypass...
[02:58:40] this
[02:58:41] test a bit. But then if you've ever seen, like, I need to make this so it loaded eagerly,  because if you've ever seen this, like, can I show you what it is?
[02:58:50] I've shown this before.  I take slow 3G and I load this.  You're like, OK, whatever.  Takes a while.  Understandable.
[02:58:58] The thing that always kind of gets it is
[02:59:02] is
[02:59:04] For a page like this, which has such minimal interaction, you should preload it. But if you don't, this happens. You click it and then I'm talking to you still and you're waiting and it's loading and then eventually it collapses.
[02:59:14] So that's kind of the trade-off that can happen if you go too aggressive here.  So that's...
[02:59:25] My quick example I haven't figured out.  Yeah, and this is very low for quick.  Yeah, I think what we're having right now is we're hitting API
[02:59:34] um
[02:59:35] We're hitting some kind of API.
[02:59:37] throttling thing happening here.  Because let me see if I can pull up something like Marco.  Actually, maybe just even just the--
[02:59:47] Let me pull up, see if I can pull up like Marco six.
[02:59:50] I imagine we've hit...
[02:59:55] Bye.
[02:59:56] I think maybe the APIs are talking.  Either that or...
[03:00:00] Something has changed in Page Insights since I last checked.  So let's see what's going on.
[03:00:07] Yeah, I think the external data API, so far it's been...
[03:00:13] It's usually relatively consistent within the same zone.  Yeah.  OK.
[03:00:18] Maybe we're just at a point right now, yes, where everything's a little bit slow, because it's still kind of proportionally in the right place.  Let's try...
[03:00:27] I got one more right now. I got
[03:00:30] Astro.
[03:00:32] Aster of solid. Yeah.
[03:00:34] Because this one's actually one of the higher scoring ones too, because again, it tricks it by using idle load time, right, but not loading the scripts up front.  And this seems to play with into it.  But I am actually curious because...
[03:00:54] I am seeing...
[03:00:56] really fast render times, but then...
[03:01:01] I'm seeing an interesting thing. I'm going to try this one more time.
[03:01:06] Yeah, Astro 66, Marco 74, yeah.
[03:01:11] Thank you.
[03:01:12] Remix 39.
[03:01:16] What?
[03:01:18] I think it's...
[03:01:21] Okay. Yeah. Know what I want to do?
[03:01:25] I want to use something else here.
[03:01:28] to check this out.
[03:01:30] Because...
[03:01:31] Initial response time is good.
[03:01:35] Yeah, sometimes I'm confused by this, because it's telling me the first Contentful Paints at 6.6 seconds, but
[03:01:42] But like...
[03:01:43] Thank you.
[03:01:44] There's no good reason for that.
[03:01:47] Unless data serialization is that expensive,
[03:01:51] We can scale down the example. We can try. Let's view this for ourselves. Let's just take a look here.
[03:02:01] and do this for ourselves.
[03:02:06] Okay.
[03:02:07] What are we seeing?
[03:02:10] Yeah.
[03:02:13] Because the responsiveness is pretty fast.  It's no throttling.
[03:02:19] Thank you.
[03:02:23] What's going on?
[03:02:26] Yeah, there's something interesting about Fresh's profile that I've never seen before.
[03:02:31] And I think this is something. See how this JavaScript all runs before it registers the first paint event. This is highly unusual.
[03:02:44] which is interesting.  I wonder if it does it on other pages, too.
[03:02:50] The page actually loads fast, but Lighthouse isn't reporting it properly. Let's try something.
[03:02:58] else on this page um
[03:03:01] Yeah, let's use the Astro.
[03:03:04] version because that's probably going to be the closest...
[03:03:08] to
[03:03:09] to what we're looking at.
[03:03:14] Okay.
[03:03:15] Because it should have a similar island timing profile kind of thing.
[03:03:23] Thank you.
[03:03:24] Thank you.
[03:03:27] Yeah.
[03:03:28] No.
[03:03:30] OK, so there's some initialization stuff.  Then there's a big layout piece.  And then there's a paint.  And then there's the hydration.  OK, well--
[03:03:40] Hmm.
[03:03:42] Let's try this one more time.
[03:03:47] Well, I hope not.  We just did Dino deploy, right?  And it looks like I'm not seeing...
[03:03:55] Thank you.
[03:03:56] OK, I'm going to--
[03:03:59] Thank you.
[03:04:00] Let's do this one.
[03:04:06] Yeah, this is interesting.
[03:04:09] Sometimes you find weird stuff on these timelines.  And it always kind of gets me interested.  Because one point at Astro, we had accidental script tags.
[03:04:18] mid-page, which is causing early paint flushes, which actually was good for performance, but it was completely unintentional.
[03:04:25] And I've been kind of
[03:04:27] curious ever since then to see if there's like actual notable differences on these timelines.
[03:04:35] Thank you.
[03:04:37] Yeah.
[03:04:38] Okay.
[03:04:40] Thank you.
[03:04:42] Marco is just kind of
[03:04:44] stupidly fast but I mean we expected that um okay
[03:04:50] Yes, like it's usually this is this is kind of the typical profile. Like if you look at the look at this, there's the page loads, you listen scripts and stuff. But there's a bunch of tasks layout rendering because this page is stupidly long. Then you see a first paint. And then you see some scripts that happen for hydration, right? If I fall
[03:05:07] We see a bunch of rendering, first paint, and a bunch of scripts with hydration. If I take something like remix,
[03:05:16] Same deal, this. Sorry, let's get a bigger page on them.
[03:05:23] You know, it's a single page app.  The hydration is just going to be much, much, much bigger.  But it's the same...
[03:05:31] It's the same thing again.
[03:05:33] Thank you.
[03:05:34] Um,
[03:05:37] Thank you.
[03:05:39] But what's really interesting about the fresh example is
[03:05:43] This stuff happens here, then there's the layout, and then the first paint.
[03:05:48] I'm,
[03:05:49] Is there a place...
[03:05:52] I can't trust this is what I'm getting at.
[03:05:54] So,
[03:05:55] I'm positive the first paint happens
[03:05:59] earlier.
[03:06:00] We saw that even on the timelines.  So let's go to--
[03:06:05] What is it?  What's the other one?  It's webpagetest.org.  And actually, let's do something a little bit different.  Slash video.
[03:06:16] Thank you.
[03:06:18] Let's actually try this with a more detailed timeline to get an idea of what's going on.
[03:06:27] Thank you.
[03:06:28] Yeah, um
[03:06:31] Yeah, let's do that. Let's take--
[03:06:35] Thank you.
[03:06:37] I'm trying to choose which ones I want to take for this.
[03:06:42] Um...
[03:06:44] Not worried about quick.
[03:06:45] Let's take,
[03:06:47] fresh
[03:06:48] Thank you.
[03:06:52] Let's take fresh.
[03:06:57] Let's take--
[03:06:59] Let's just take
[03:07:02] solid spa, something that's
[03:07:05] not even probably particularly performant.
[03:07:11] I guess I could do--
[03:07:12] Because I'm just going to take
[03:07:16] solid-- actually, let's--
[03:07:19] Let's just do this one.
[03:07:23] And then I need to make sure that's on the same page.  Slash stories, slash--
[03:07:30] Bye.
[03:07:31] And then--
[03:07:35] And 4G, and let's just--
[03:07:38] Actually, I'm going to add one more. I'm going to add...
[03:07:43] Marco probably just because I want to see almost like a
[03:07:49] baseline.
[03:07:51] Thank you.
[03:07:52] Thank you.
[03:07:52] Thank you.
[03:07:54] Yeah.
[03:07:55] Okay. Okay, let's, this will take a minute. Appreciate. I've probably lost a few people  over the course of the stream, but just, just this is a,
[03:08:07] Just curious, obviously,
[03:08:10] Um,
[03:08:11] Anytime you kind of play with something new, you're going to discover some things.
[03:08:17] Thank you.
[03:08:18] These are all actually on Dino.
[03:08:23] I think through Netlify, maybe, for one of them, but...
[03:08:27] I believe they're all from Dino.
[03:08:36] I guess the problem is solid Marco versions to streaming.
[03:08:41] So the timing might be a little bit different.
[03:08:45] Thank you.
[03:08:47] Thank you.
[03:08:50] Yeah, the thing is that Netlify edges, do you know?
[03:08:54] And I'm positive that-- I'm pretty positive that--
[03:08:59] We did Marco on the Dino Edge stuff,  because we were doing all the request response stuff.
[03:09:06] Um,
[03:09:07] Yeah, we hadn't got the serverless function stuff going.
[03:09:11] It's a creative benchmarking game show.  Yeah.
[03:09:15] The problem is I don't usually use this one all the time when I would stream because it  actually takes a little bit to actually calculate what's going on. It's a little bit more --
[03:09:28] How should I put it?
[03:09:29] Thank you.
[03:09:30] trustworthy than page speed from lighthouse because i feel like what we're seeing here on the fresh stuff is
[03:09:39] is like-- I don't know.  Maybe they truncate the timeline.  But they're saying initial response to 0.8.  And then they're showing this timeline where the stuff's  right there.  And if you look at, let's say--
[03:09:52] Solid, okay, it's within the same range.  And then again, okay, so this one's good, but we're streaming, so we don't see the content right away.
[03:10:01] Where is
[03:10:02] Thank you.
[03:10:03] Where's it going to--
[03:10:04] Remix.
[03:10:05] Initial response 1.1. What I'm getting at is, and it's a little bit further down too,
[03:10:11] Thank you.
[03:10:12] - Ah.
[03:10:13] Why it's the first console full take paint delay. That's insane here. Right? Like,
[03:10:19] Solves 3.2, Remix 4.6,
[03:10:22] 6.6 here, even though I can see it. This metric is not getting reported.
[03:10:28] properly, perhaps.
[03:10:30] Thank you.
[03:10:31] If you can see it this early, it should be in the threes.
[03:10:35] Thank you.
[03:10:36] Thank you.
[03:10:38] Thank you.
[03:10:39] Maybe even the twos.
[03:10:43] So, yeah, I think that's interesting, to say the least.
[03:10:48] Thank you.
[03:10:53] Thank you.
[03:10:55] Thank you.
[03:10:57] Yeah, see, so...
[03:11:00] Oh, yeah, right. The Marco 6 doesn't support streaming yet.
[03:11:04] Interesting.
[03:11:07] OK, so what I got here on this run was solid rendered first,  but it's streaming it in.  And then these two came in around the same time, probably  because the data serialization.  And then Marco won because it has less data serialization.  That makes sense to me.
[03:11:27] And then let's look at the film strip and let's actually
[03:11:32] change it to show no not largest contentable paint let's let's
[03:11:38] Let's look at document complete.
[03:11:41] How does that change the timing?
[03:11:45] A little bit longer.
[03:11:47] Let's add fully loaded.
[03:11:51] Thank you.
[03:11:53] Interesting.
[03:11:55] OK.
[03:11:58] Sorry, did I reset fully loaded?
[03:12:00] Okay
[03:12:02] Thank you.
[03:12:03] Okay, so what's going on here?
[03:12:07] Thank you.
[03:12:08] Huh.
[03:12:10] Interesting.
[03:12:13] Thank you.
[03:12:15] Thank you.
[03:12:18] Thank you.
[03:12:19] Thank you.
[03:12:19] Thank you.
[03:12:21] Yeah, that data is-- I need to compare it to more things.  But it is suggesting--
[03:12:26] though that the first Contentful paint
[03:12:29] is happening
[03:12:33] that late
[03:12:35] Okay.
[03:12:36] So my guess, if I had to make a hunch here, is the data--  what we're seeing is data serialization cost.
[03:12:43] Um,
[03:12:45] It might be just...
[03:12:47] slightly more expensive than whatever approach Fresh is using for data serialization, maybe. And it's pushing this back a fair bit.
[03:12:56] Right, because obviously I jumped straight to the death test, right? Obviously, if we pick something much more reasonable, like say here,
[03:13:08] Thank you.
[03:13:09] um
[03:13:10] this is easy hundreds, right? Um,
[03:13:14] So I'm trying to...
[03:13:18] What?
[03:13:20] Thank you.
[03:13:22] Yeah, it's...
[03:13:26] Yeah.
[03:13:27] Thank you.
[03:13:28] Yeah, 1-1-1-1-1.  That's very nice.
[03:13:31] Yeah, I'm gathering it's hydration.  It can be some other stuff too, like...
[03:13:37] Part of it could be loading that serialized data. And yeah, but yeah, it's probably hydration. It can also be...
[03:13:48] I mean, we can look at the timeline here again.
[03:13:52] See, like I don't see anything--
[03:13:54] particularly outlier here in terms of total time.
[03:13:58] So I think, yeah, I mean,
[03:14:02] This is 12:41. There's nothing particularly bad here.
[03:14:06] locally. So
[03:14:09] Thank you.
[03:14:11] Yeah.
[03:14:11] I've actually had similar issues with Astro taking time.  I'm not sure what the difference is between fully loaded and document complete.  Because if I go document complete...
[03:14:25] like,
[03:14:26] I can see it's pretty similar.
[03:14:29] Last change.
[03:14:32] Thank you.
[03:14:33] No, that's basically the same as First Paint.
[03:14:38] Mm-hmm.
[03:14:43] The recursive comment stuff would actually-- we don't have here on the Fresh one. That one would actually improve performance because it reduces serialization. That's why Marco is so far ahead.
[03:14:52] is generally the serialization cost.
[03:14:55] But what's interesting to me is
[03:14:57] I was expecting these to be about the same.
[03:15:01] You know, like, and it looks like Fresh actually comes in a bit sooner.  Maybe the time solid does for the streaming, like slightly, we're talking like
[03:15:07] very-- I don't know what the exact timeline is.
[03:15:11] Yeah, this is interesting.
[03:15:16] OK.
[03:15:17] I mean, if people are going to bear with me, I want to do one more.
[03:15:21] I want to go back here and do one more.
[03:15:27] It's always good to run these things a couple times too.
[03:15:32] Um.
[03:15:34] Thank you.
[03:15:40] Thank you.
[03:15:43] um
[03:15:44] Brian?
[03:15:47] this one. We're going to run just the two of these one more time. I'm going to put an astro in just to get a
[03:15:56] That's probably the closest to similar.
[03:16:02] Thank you.
[03:16:04] work for.
[03:16:05] Mmm.
[03:16:09] Yeah, the recursive client hydration.  But like Solid has the recursive client hydration too, right?  Any single page app has the recursive client side rotation.
[03:16:21] And that means they have to serialize all the data and stuff.
[03:16:26] So, I mean, yeah, this is probably worth...
[03:16:32] It's still early, and I think, like...
[03:16:35] I usually-- like, I don't click on here usually because--
[03:16:41] quicks.
[03:16:42] in the past at least its serialization costs are actually the worst out of all the frameworks. I  didn't like showcase its highlights. I'm just kind of a little bit curious. Like this page,  again, this is like stupid test as usual because it's kind of derived,  but I'm just kind of curious because I'm less curious about this as
[03:17:04] as I mentioned before, as this timeline that puts the first paint after the fact is kind of crazy, right?  Like, why...
[03:17:13] Why would the first paint, sorry, it's not, let me get up here, be,
[03:17:19] like why is the layout like there's nothing there's nothing happening over here like if I zoom out far enough
[03:17:26] I know it's hydrated and there's nothing running over here.
[03:17:31] Thank you.
[03:17:34] But there is a bunch of scripts that run
[03:17:38] before the first paint event, which is very unusual.
[03:17:46] Thank you.
[03:17:47] Thank you.
[03:17:54] Thank you.
[03:17:57] Yeah. Oh, yeah. The Astro one is. Yeah. But you know what's funny about the client idol? I think and that's kind of why I'm testing this here.
[03:18:04] The client idol
[03:18:07] Yeah.
[03:18:08] The client idol--
[03:18:10] will actually
[03:18:12] come and bite you usually on this part of the test.
[03:18:17] because it will take longer.
[03:18:23] Thank you.
[03:18:24] Yeah, OK.  I have no explanation for this.
[03:18:27] Thank you.
[03:18:32] Thank you.
[03:18:33] Hmm.
[03:18:34] Thank you.
[03:18:36] Thank you.
[03:18:37] Thank you.
[03:18:38] I'm pretty...
[03:18:39] Bye.
[03:18:42] Thank you.
[03:18:42] Let's look here.
[03:18:46] Thank you.
[03:18:47] Thank you.
[03:18:49] All right.
[03:18:52] Thank you.
[03:18:53] Thank you.
[03:18:55] Well,
[03:18:57] Thank you.
[03:18:58] The timeline looks...
[03:19:01] better here.  I don't actually see that much--
[03:19:05] JavaScript execution, to be fair,
[03:19:07] Thank you.
[03:19:08] See, on this side, we have fresh.  On this side, we have astro.  Astro's doing a whole bunch of hydration stuff at the end.  That's why it's taking so long.
[03:19:14] But on the fresh side,
[03:19:23] Right.
[03:19:24] Thank you.
[03:19:27] Thank you.
[03:19:31] What is coming up here?
[03:19:34] Hmm.
[03:19:37] Hmm.
[03:19:41] Because the idol just pushes back work.
[03:19:44] and Vivi.
[03:19:45] If any of you are wondering, I'm going to jump back in my history and see if I can go back to this timeline between the three.
[03:19:56] Visually complete solo takes the longest.  Makes sense.  Or depends, I guess.  It's close enough.
[03:20:02] But then...
[03:20:03] Full on load time.
[03:20:05] Thank you.
[03:20:06] CPU busy time.
[03:20:08] Yeah, I think this is probably worth more investigation.
[03:20:13] It's not very clear...
[03:20:16] Something on the client side of Fresh is not...
[03:20:20] happy here.
[03:20:26] as well. So it's both the weird delayed first paint and then something on the client side. Yeah, I know.
[03:20:32] Thank you.
[03:20:34] Yeah, it's weird that the first paint is delayed.
[03:20:41] But it's also,
[03:20:43] a little bit like this long tail is unusual too.
[03:20:51] Thank you.
[03:20:54] So the thing that's kind of...  Let me explain this a bit.  See, Marco has async like this one, which is why...
[03:21:01] The problem is with stuff that renders async, you load everything at this point.  You get the page, you start loading the document, and usually it is a bit longer.  With streaming, we're already doing a bunch of work at this point, so if
[03:21:14] this can be shorter because the page actually loaded back here.  And it's loading assets, doing stuff, getting JavaScript warmed up, doing all that.  So when we get to hydration time, we're actually covering things.
[03:21:26] So it is natural, but this is still a little bit.  And if I fast forward all the way to the Astro ones, which is also async, these are both async,
[03:21:34] Again, like Marco, it's about four.
[03:21:36] And this is, yeah, I don't know.  It's just like a little bit.  Not much, but it's a little bit.
[03:21:43] Yeah.
[03:21:46] Thank you.
[03:21:47] No, I don't, well, maybe...
[03:21:52] I actually--
[03:21:54] Let's look at what we're doing here. Let's look. Do we get any kind of
[03:21:58] thing because I don't think so. It looks like the script tags in line.
[03:22:04] And it's at the bottom of the page, which is good.  And then you have type module.
[03:22:07] which is...
[03:22:10] where the hydration happens. Okay? So revive, which is hydrate,
[03:22:15] doing this. So technically speaking, everything should load in before. We should get our first paint, hit the script tag,
[03:22:22] and we should be good to go.  So this looks all fine from my perspective.  It isn't doing any idle loading.  If you look at Astro's code--
[03:22:36] It's doing-- I mean, this is because of the recursive hydration.  We got like a lot of these.
[03:22:43] Thank you.
[03:22:44] But it's doing-- you can see these--
[03:22:47] There's like...
[03:22:49] There's--
[03:22:50] There's code to delay it.  Unless-- well, I guess we can look at what Fresh does.
[03:22:56] But
[03:22:58] It looks from what I can see...
[03:23:01] that it just...
[03:23:02] ES6 straight up imports the comment at this point.
[03:23:06] The scripts module, so just
[03:23:08] Async timing just loads in
[03:23:12] deferred timing, I guess, technically, it loads in
[03:23:15] you know, when the document's ready, pulls in these files.  Like, there's no lazy loading or anything here.  It's not like, like, after you saw, like, the promises and stuff.  I think this is just, like, client load.  Yeah.
[03:23:27] Thank you.
[03:23:29] Thank you.
[03:23:30] Thank you.
[03:23:34] Yeah, I mean, this is all single page.
[03:23:36] app, but trick, but I mean,
[03:23:39] I think it might hurt, like if you're already doing the work to like do islands and reduce hydration costs, I think like this would hurt perception.
[03:23:50] Yeah, well, LCP, yeah, I mean, LCP is useless on this one because there's so much content on the page.  I'm pretty sure LCP is based off visual page.  So basically, if you load two stories, you have LCP and the page is like, you know what I mean?
[03:24:13] Thank you.
[03:24:14] Anything else in the head?
[03:24:15] Let's look.
[03:24:17] Head.
[03:24:19] Link, link, link, script.
[03:24:24] preloads for
[03:24:27] No, actually, this is not preloads.  This is just...
[03:24:29] Yeah.
[03:24:30] Okay.
[03:24:31] Entry file and...
[03:24:35] Thank you.
[03:24:37] Island code. Okay.
[03:24:39] So it's just the JavaScript code loading.
[03:24:42] in the head.
[03:24:44] Thank you.
[03:24:45] Yeah, it's not lazy to sit in it.  Yeah.
[03:24:49] Thank you.
[03:24:50] Thank you.
[03:24:51] This is all in the head in Astro.  Yeah, no, it looks eager like I'd expect, if that makes sense.
[03:25:00] See if I can.
[03:25:01] actually look at the Marco one here.
[03:25:05] Script.
[03:25:08] Sure.
[03:25:10] Yeah.
[03:25:10] That's all the islands.
[03:25:13] Yeah.
[03:25:14] Yeah.
[03:25:16] async type module support streaming eventually,  but it doesn't need to be.  Yeah, no, this looks, the fresh one looks pretty much  what I'd expect it to look like.
[03:25:25] Yeah, that's interesting.
[03:25:27] I mean...
[03:25:28] Hmm.
[03:25:32] We can mess with it a little bit.
[03:25:35] I mean, I'm probably getting kind of long in the stream here, but what we could do is
[03:25:39] The browser flushes when it hits a script tag.
[03:25:46] So...
[03:25:47] We could do something like--
[03:25:49] Okay.
[03:25:50] on this page.
[03:25:52] Thank you.
[03:25:52] Thank you.
[03:25:53] before
[03:25:55] We like draw all the comments in.
[03:25:58] we could do something like just like--
[03:26:01] get the...
[03:26:03] Like maybe I'll just put in the nav.
[03:26:05] Like, let's see if we can force an earlier first paint.
[03:26:09] like just for fun, like we can go the layout here.  And then after the--
[03:26:13] After the header before this, we can just do script.
[03:26:20] I don't know if it actually needs to contain anything.  This is a good question.  But we're just going to put a script.  And this will be a synchronous script,  which will tell the browser that it needs to...
[03:26:31] flush paint right away.
[03:26:35] So,
[03:26:37] Yeah, we're going to have to deploy the check. So we're just going to do like force early
[03:26:43] First paint.  Let's see what this does.
[03:26:46] Thank you.
[03:26:50] Let's see if this works.
[03:26:56] Thank you.
[03:26:57] Bye.
[03:26:59] Thank you.
[03:27:01] Okay.
[03:27:05] I think this is...
[03:27:07] Thank you.
[03:27:08] We were looking at the performance profile here.
[03:27:16] Okay.
[03:27:17] Thank you.
[03:27:18] Okay.
[03:27:18] Thank you.
[03:27:20] I'm not.
[03:27:21] Thank you.
[03:27:23] Okay.
[03:27:24] Let's try this timeline.
[03:27:26] Thank you.
[03:27:28] Thank you.
[03:27:31] Thank you.
[03:27:32] Then...
[03:27:33] do what I wanted.
[03:27:36] Thank you.
[03:27:37] Thank you.
[03:27:38] Is it deployed yet?  No, it is.  It's right here.
[03:27:42] Maybe I actually need to put something in the script.  Like maybe, maybe, maybe a blank script tag isn't going to do what I, what I, what I want.
[03:27:52] Maybe we have to actually execute JavaScript.
[03:27:58] Because...
[03:28:01] Thank you.
[03:28:04] Thank you.
[03:28:05] This didn't pull it forward at all.
[03:28:09] What module is this that it's evaluating forever? Anonymous function? Can we look and see what code we're running?
[03:28:16] Thank you.
[03:28:17] Yeah.
[03:28:18] It's probably all minified, but...
[03:28:21] Thank you.
[03:28:22] Thank you.
[03:28:26] Thank you.
[03:28:32] Thank you.
[03:28:33] What is this?
[03:28:38] This is HTML. Let's look back at the...
[03:28:45] performance profile and see if we can load
[03:28:48] Oh, right, because what they're saying is this is a script that's on the actual page.
[03:28:55] It's this...
[03:28:56] Thank you.
[03:28:57] big hydration blob.
[03:29:01] Let's go back to the--
[03:29:05] Thank you.
[03:29:06] Thank you.
[03:29:07] Thank you.
[03:29:09] Thank you.
[03:29:11] Thank you.
[03:29:13] Thank you.
[03:29:14] Interesting.
[03:29:23] Thank you.
[03:29:26] Thank you.
[03:29:28] Yeah, why is this-- it's running-- like, you'd think to get down here, it would-- first paint would have to trigger, but it's like running before first paint.
[03:29:36] Thank you.
[03:29:37] It says...
[03:29:39] exceptionally weird. Okay. We're going to try one more thing here and make the inline JavaScript
[03:29:45] do something.
[03:29:48] Like...
[03:29:48] Like, let's just...
[03:29:51] maybe have it
[03:29:55] do a query selector or something, something that would cause it to have to check the page
[03:30:00] page.
[03:30:00] Right. Something like.
[03:30:02] Thank you.
[03:30:03] Thank you.
[03:30:06] It escaped or something.
[03:30:07] Thank you.
[03:30:14] Thank you.
[03:30:24] Thank you.
[03:30:25] We just document get element by
[03:30:31] All right.
[03:30:31] Something that would cause it to read. I'm trying to think of what would be a good one.
[03:30:38] Thank you.
[03:30:40] Thank you.
[03:30:43] Thank you.
[03:30:44] Let's see if it's actually even--
[03:30:48] works properly because
[03:30:51] Let's look at our--
[03:30:57] Yeah.
[03:30:57] Local host.
[03:30:59] Thank you.
[03:31:00] Are we getting a...
[03:31:03] Thank you.
[03:31:05] Here we are.
[03:31:07] Thank you.
[03:31:08] It's funny, every once in a while you come across weird things. Another weird one for me is Next.js does the exact opposite to this.
[03:31:17] OK.
[03:31:19] That's more promising.
[03:31:24] It's the script split at least. Okay, let's try and deploy this.
[03:31:29] Okay.
[03:31:30] Thank you.
[03:31:31] Thank you.
[03:31:32] Actually, yes, I'm trying to end this stream, but it reports
[03:31:37] first paint-- a gap between first paint and largest  contemporary paint, which makes no sense when it's an async render.
[03:31:44] constantly confused by Next for that reason.
[03:31:51] Thank you.
[03:31:52] Thank you.
[03:31:53] Yeah, okay. Let's...
[03:31:57] Thank you.
[03:31:59] Let's try this one.
[03:32:06] okay
[03:32:09] And then let's--
[03:32:11] Try this.
[03:32:12] Bye.
[03:32:22] Yeah.
[03:32:23] - Success.
[03:32:25] *laughs*
[03:32:26] You see, First Paint's up here now.
[03:32:30] And the saddest thing about this is this stupid hack, which we shouldn't do.
[03:32:35] Again, I don't know, but...
[03:32:38] What it's going to do here--
[03:32:41] .
[03:32:42] Thank you.
[03:32:44] Thank you.
[03:32:44] Stories.
[03:32:47] Good for me?
[03:32:50] Thank you.
[03:32:51] 301-- how this practically memorized at this point.
[03:33:00] Thank you.
[03:33:08] Thank you.
[03:33:09] Thank you.
[03:33:11] This is just to show you how much, if I think is right,  how much Next.js or sorry, how much Lighthouse
[03:33:19] weighs in on the first paint.
[03:33:22] No, okay. Only slightly better.
[03:33:25] Okay, well that's still not...
[03:33:29] too helpful but it changed our local timeline we can actually see the first paint happening here now  instead of at the end
[03:33:37] It actually splits the layout.
[03:33:39] Yeah, that's interesting, to say the least, that--
[03:33:44] Thank you.
[03:33:48] Yeah, that is very interesting to me.
[03:33:53] Hmm.
[03:33:55] You think the first paint event would generally happen before all the scripts run at the end of the file, but for some reason it doesn't in the typical place.
[03:34:06] I think I'm done playing with this.  I don't know if there's anything else specifically.
[03:34:13] We can do, yeah, make the flesh component.  I'm just going to remove this and just go back to--
[03:34:21] Thank you.
[03:34:22] Yeah.
[03:34:23] go back to where we were. But yeah.
[03:34:31] It's interesting. Yeah, I don't know. As I said, sometimes you get these weird side effects when you do rendering on the web. As I said, Next.js for some reason reports early first paints always. Maybe it does something like that. But I mean, the HTML generally being returned here looks pretty...
[03:34:52] normal.
[03:34:56] Yeah.
[03:34:59] Thank you.
[03:35:00] Thank you.
[03:35:01] Thank you.
[03:35:03] Yeah.
[03:35:04] I wonder what revive is doing.
[03:35:07] I'm going to assume Revive is their--
[03:35:12] their hydrate because it takes
[03:35:15] in
[03:35:16] a keyed component, and I'm gathering this is the name comment.
[03:35:20] And so that they can like, they take the component island, take the comment, and that key is probably used somewhere without and they connect it to the data and do the hydration.
[03:35:32] um
[03:35:33] There isn't any other code in the page, so they basically just inline the hydrate script.
[03:35:38] Makes a lot of sense.
[03:35:43] I'd look at my build folder to kind of reverse engineer it,  but there isn't one.  I mean, so, you know, I mean, we can,  that's the browsers for, right?
[03:35:53] Okay.
[03:35:53] You can look at the minified
[03:35:55] code.
[03:35:57] See what we're dealing with.
[03:35:59] .
[03:35:59] Yeah.
[03:36:00] Thank you.
[03:36:02] Thank you.
[03:36:04] Thank you.
[03:36:06] Thank you.
[03:36:08] H is revive. Here we go. H.
[03:36:11] I'm not.
[03:36:12] looks for stuff that matches a certain pattern.
[03:36:17] Probably for hydration data.
[03:36:24] you know,
[03:36:25] Can we break point in any of this?
[03:36:27] Thank you.
[03:36:29] Thank you.
[03:36:29] Thank you.
[03:36:31] Oh, I'm in the response. I want the source.
[03:36:34] Thank you.
[03:36:36] Yes.
[03:36:37] Thank you.
[03:36:38] Thank you.
[03:36:39] Thank you.
[03:36:40] Thank you.
[03:36:42] Okay.
[03:36:43] Thank you.
[03:36:44] Thank you.
[03:36:46] Thank you.
[03:36:47] Yeah.
[03:36:48] At this point,
[03:36:53] Thank you.
[03:37:06] - Let's...
[03:37:08] Thank you.
[03:37:09] Thank you.
[03:37:09] Let's see here.
[03:37:13] Because if we refresh, hopefully we'll hit a--  oh, right, because it--
[03:37:18] I redeployed, which probably screwed that up.  Okay, let's try to...
[03:37:24] get in here just
[03:37:26] The reason I'm doing this breakpoint here is I just
[03:37:29] Yeah, so I mean, the page is here when hydration starts, right?  Like, let's try this again.
[03:37:36] Yeah.
[03:37:39] Bye.
[03:37:40] Mm-hmm.
[03:37:41] Thank you.
[03:37:42] This is called Purr.
[03:37:45] Interesting.
[03:37:47] I wanted to-- where is it?  H is revive.  H, E, function, T, T of document body.  OK.  Let's go there.
[03:37:57] Bye.
[03:38:01] Thank you.
[03:38:02] Thank you.
[03:38:03] What? Okay, wait, wait.
[03:38:07] Yeah.
[03:38:09] You guys might be onto something.
[03:38:11] Something not working properly.
[03:38:14] Oh, it's weird when I breakpoint here.
[03:38:18] The page, okay.
[03:38:23] Thank you.
[03:38:23] See, it's still loading, and then when the load times out, it fails, and then when I continue,
[03:38:31] Yeah.
[03:38:34] Thank you.
[03:38:36] Thank you.
[03:38:38] Thank you.
[03:38:39] Thank you.
[03:38:41] -
[03:38:42] I'm curious.
[03:38:45] Thank you.
[03:38:46] Thank you.
[03:38:47] Thank you.
[03:38:49] OK, no, that's fine.  It's just the pausing.  Yeah, it's part of those load characteristics, though,  that are causing it.  The page is still loading.
[03:38:57] according to the browser,
[03:38:59] while the
[03:39:01] Yeah, this is interesting.
[03:39:06] Thank you.
[03:39:07] Thank you.
[03:39:08] Thank you.
[03:39:10] Yeah, thanks for looking.  I think this is something that we're just going to have to...
[03:39:16] figure out in the future here because it's, it's, it's, it's curious to say the least. Um,
[03:39:26] Thank you.
[03:39:27] Thank you.
[03:39:29] Yeah, I mean, module type...
[03:39:31] are scripts of type module
[03:39:33] always get deferred to the page load event generally.  But I don't know why the first paint would get pushed back.  So very weird.  OK.
[03:39:41] Well, hmm.
[03:39:45] Definitely, uh,
[03:39:51] Definitely some interesting stuff going on.  In general, though, I look forward to being able to get the recursive hydrated version of this up and going in the teacher.  I think the interesting thing for me about Fresh was...
[03:40:05] I kind of...
[03:40:07] I'm also hi cousin. Yes. Hi Jonathan. I didn't actually notice at first. I was just like, oh yeah, this could comment and then it's like,
[03:40:15] -
[03:40:17] Um...
[03:40:19] Yeah.
[03:40:20] What I was going to say is
[03:40:23] Thank you.
[03:40:25] Yeah, I'm just going to make one more banner right here,  so I can break it up later.
[03:40:30] Thank you.
[03:40:31] Okay.
[03:40:32] I'm just going to give some overall thoughts now on what I've seen so far.
[03:40:39] Okay.
[03:40:40] I think that...
[03:40:42] Having everything in the JSX is really kind of cool.  The one thing that became really immediately obvious to me when looking at the structure
[03:40:52] of just doing the islands versus like, it's funny,  because you've seen it with .server, but the islands...
[03:40:58] approach, it just makes it so obvious that everything else
[03:41:03] is server.
[03:41:04] Do you know what I mean?  You don't have to worry about it in the same way  and have a bunch of interlacing files and different .server.client,  all that.
[03:41:12] And it very strongly says server is our default.
[03:41:17] Right.
[03:41:18] I mean, obviously saying dot server is a strong way of saying that.  But if you ignore the islands folder for a minute, everything here
[03:41:27] is
[03:41:28] is server.  And I think what's really cool about that is
[03:41:32] if other frameworks...
[03:41:35] wanted to adopt...
[03:41:39] Mwah.
[03:41:40] Yeah.
[03:41:40] like JSX frameworks, like Remix or SolidStar. This is kind of an interesting pattern. Because
[03:41:48] You do it in two steps. You go to your root TSX,
[03:41:52] and you remove the script tags.
[03:41:55] And then you'd have an islands folder,
[03:41:58] specifically and then just pull in the island components and that transformation
[03:42:03] doesn't seem too crazy.
[03:42:06] Right. When I was looking at Astro and Marco and all that, I was always like, oh, man, you know,
[03:42:11] this is like such a perfect environment for this. Everything's set up for it.  Like it's worlds apart in your, in your thinking, but
[03:42:18] This is the closest I've seen to a full JSX solution, where
[03:42:24] Thank you.
[03:42:25] like it does the stuff and it just feels
[03:42:30] Thank you.
[03:42:31] and it feels like it just kind of
[03:42:35] Yeah.
[03:42:35] works really naturally.
[03:42:38] I think getting used to Dino is going to take a longer time for me, though.
[03:42:42] I like looking at build outputs.
[03:42:45] I like looking at source code in my node modules.  So like having it missing,  and there's probably ways you can do it.  And people are mentioning using extension  was really, really, really strange to me.  I'm not going to lie.  I was just like, I was just like,
[03:42:57] Okay, if I hover over this and I hold command,
[03:43:02] And I can look at the code.  OK, so that works.
[03:43:07] OK, so yeah, it is doable.  I was just having trouble with this earlier for some reason.
[03:43:14] We go to fret. Okay. Yeah. So a little bit of getting used to it actually seems to be working now.
[03:43:20] Um, so we can, we can trace into the code to see what's going on. Um, but yeah, it was just,
[03:43:26] I like debugging things.  I'm kind of old school.  You saw them with the console logs.  So having the ability to kind of just
[03:43:33] Kind of go in...
[03:43:35] It's something I'm used to. I'm not used to
[03:43:37] I know Yarn 2 did this too a bit.  I'm not used to having my modules.  PMPM had a version of it.
[03:43:45] Anyways, I'm not used to having my node modules go away.  Not used to not having my build output to look at.  So it definitely like,
[03:43:53] took me like a moment there. But once you forget about that,
[03:43:58] As I said, the setup here is really natural.  Didn't worry too much about import maps yet,  but I can see how that can work.
[03:44:05] I know it's like no config, but I mean,
[03:44:09] I count multiple KFIG files in here.
[03:44:14] So that part isn't a different sell. I mean, people can sell on that if they want to. But to me, this isn't really the no build thing doesn't really matter at all from where I'm sitting. But, you know, I did mention the eBay use case at the beginning. But in general, it felt like taking down a modern framework kind of starter. Obviously, the docs are going to are new and we got to do some work.
[03:44:44] Cacker News before they had any docs. So it's perfectly kind of fine. And I think things are  coming around. I think it's really cool that Dino is kind of embracing this first class. I'd love  to see more frameworks take on this. I think the pattern here with the islands folder is actually  just really makes a lot of sense. I guess that's my biggest thing. Obviously, I look forward to  better docs in the future. I look forward to giving that recursive hydration so I can finish this
[03:45:13] that in general,
[03:45:16] As I said, it's kind of funny. I was copying stuff from Astro and from Solid and from Remix. Coding in these frameworks is all really, really similar for the view templating part of the code. So,
[03:45:30] Yeah, there wasn't too much to get tripped up on.  It's kind of funny how we've kind of developed out that way.  You know, some people are like, oh, closer to HTML.  But I don't think...
[03:45:39] frameworks that are closer to HTML actually can offer that same experience. If I'm moving  between view and stealth, I actually have to change my code a lot more. So it's
[03:45:48] It's kind of interesting.
[03:45:51] It is all just templating. That is one thing I have noticed from doing all this. In general,
[03:45:57] I think Fresh is a little bit early, but I think it's really cool.  I think what it's doing is very timely, and I think it's the right kind of thing to launch  early.
[03:46:08] with Deno or Deno with
[03:46:12] Thank you.
[03:46:15] Yeah, so any questions before we wrap up the stream?
[03:46:19] I'm going to take off banner.
[03:46:22] Yeah, I'm just going to look what we got here.  What if hydration is screwed in and removes the land  on the original page?  That's what I was suspecting for a moment, which is why I put  in the comment.  I was trying to break it there, but I actually--
[03:46:35] I mean, it's still possible something like that's happening.
[03:46:41] But I don't know if that's what it is. When I was doing the breakpoint, I was hitting
[03:46:51] I was hitting basically the page load failing.
[03:46:55] uh
[03:46:57] I wonder if there's something that I can put further down to kind of
[03:47:02] debunk that, but my gut is that's not what is happening.
[03:47:08] Thank you.
[03:47:09] I see hydration happening here, I think.
[03:47:14] This looks-- this is calling removeChild here.
[03:47:20] Yes.
[03:47:22] It's us.
[03:47:24] Maybe we should see if it actually gets in here.
[03:47:28] Thank you.
[03:47:28] Removing some stuff, but I think it looks like it's removing maybe--
[03:47:35] They're comment markers.
[03:47:37] OK.
[03:47:39] But...
[03:47:40] Yeah, I have no reason to believe that that's what's going on.  But that is another reasonable--
[03:47:48] But you'd still get the first paint.  The thing is, even if it painted and then did the really bad hydration of removing and painting, you'd get the first paint score.
[03:47:58] weird there, the way
[03:48:00] Lighthouse is reporting it  with something's going on.
[03:48:07] Thank you.
[03:48:09] - Yeah, I mean, I guess so to me almost,
[03:48:13] Thank you.
[03:48:15] almost all the next generation of frameworks do this.
[03:48:20] pretty well.
[03:48:21] where they put the request response model right in.  I mean, Remix is an obvious example, but so SvelteKit,
[03:48:29] Solid start.
[03:48:31] Yeah, I think there's some legacy there.  But almost all the new ones that came out kind of edge first  in the last year or two are very much on the same
[03:48:39] page here.  Next and Nuxt have a bit of a longer legacy,  but I think all the new ones had the benefit  of having the spec in the browser  and having all the runtimes converge on it.
[03:48:54] I don't know if I saw anything particularly unique about Fresh in that sense,  but as I said, as a Dino launching thing, I think it's,
[03:49:02] Great.
[03:49:03] It highlights what they should be highlighting.
[03:49:07] MPAs are just better at the edge.
[03:49:10] you know, than other places perhaps. And then just being able to be lightweight. Preact is  one of the lightest VDOM libraries. It just carries the message really well.
[03:49:24] Yeah, yeah, yeah. It's definitely optimization technique. And it's, it's, it's, it's something that like,
[03:49:30] We used a lot of eBay and with Marco, and so that's why I was very familiar with using this pattern.  And it's funny, as I said, that Dan Abramoff article, "Preparing People for React Server Components" talked about it.
[03:49:43] What's interesting about it is
[03:49:46] It's also something that I'm hoping-- and the Marco team are hoping in the future just goes away, right?  It's components and the need for components which causes this need for this structure, right?  It's like that's why we have all this hoisting thing is because components have a runtime element.  And that's why you're seeing frameworks like Solid and Quick and Marco basically get rid of the runtime element of components so that they don't have to play this game.
[03:50:12] As I said, QUIC is very quickly catching up to where Marco is.  And where Marco is is kind of crazy.  You know, to use the reactive graph, similar to solid,  and basically just split everything up that way.
[03:50:27] these kind of optimizations like I'm showing here, you know how we did the island moving trick? In Marco, you literally just write the code and the compiler automatically generates even stuff more optimal than what we did with the recursive partial iteration. It just works automatically. You just write like normal code to like your React app and it just does that, right? So I think
[03:50:48] I think that...
[03:50:51] Yeah, I think these optimizers are great. I think they're going to get it even better to the point that people won't have to worry about it and they'll happen automatically.
[03:51:00] Yeah, you mentioned the compiler, exactly.
[03:51:03] -
[03:51:05] The only thing I think for SolidStart that might be interesting here is if we ever wanted to do that MPA switch. I think the fact that you can just be like, look, islands folder, and then you just go, how to make an MPA? You just create the root, TSX, remove the script tag, and then go islands folder, like that kind of thing. After seeing this, I realized that an MPA mode
[03:51:26] would be...
[03:51:27] much more
[03:51:28] easier than I thought. That being said,
[03:51:31] It's an effort itself. Are we going to make an MPA framework right this second to do that? Or can you just go use Astro?
[03:51:39] I have bigger fish to fry when there's good solutions out there. And I think this becomes the most appealing to us when we actually accomplish that thing that's better than islands.
[03:51:51] the thing that Quick does, the thing that Marco does.
[03:51:56] But it's going to take me a while to get there.  So what I suspect actually is...
[03:52:01] Someone will just write a beat plug-in
[03:52:03] to do this, and we'll just slide it in and it'll just work.  And that's why Veed is so amazing.
[03:52:07] So
[03:52:09] I'm not actively looking at adding MPA mode of partial hydration to solid start.
[03:52:14] But looking what I can see here,
[03:52:16] I think someone could do it relatively, like, in a reasonable way  if they wanted to do the work of making an MPA framework.  And if you're just making it for solid,  I'm sure that'll be less effort than trying to, like,
[03:52:28] do something astro, which...
[03:52:30] works for everything, but it's not my personal priority, but I can definitely, Fresh gives  me an insight on how we can just like add this to the check mark.
[03:52:39] Thank you.
[03:52:40] Okay.
[03:52:44] Thank you.
[03:52:46] Do you know any solutions to pre-pile a parsley clone at build time, basically reducing the output delay?  It depends on what you're talking about. There's stuff like prepack from Facebook, which was kind of interesting, which, like,
[03:52:59] pre-calculated stuff it could and reduce the JavaScript.
[03:53:03] I think...
[03:53:05] the biggest savings you can make right off the bat here is just looking at stuff like these partial  hydration frameworks. We didn't focus on it too much here, but they essentially know
[03:53:16] that certain part of the JavaScript only happens in the server, and the rest only goes on the client. That's why it's so small here. We only need to ship that comment component. That's why
[03:53:26] fresh is so small on JavaScript load compared to any single page app.  And those kind of optimizations
[03:53:33] are present
[03:53:35] mostly are basically today only in multi-page apps. You lose the client side navigation because of the
[03:53:40] tree hierarchy and i've explained that in other streams so are there if you're looking at  solutions to reduce javascript load in the browser so like less hydrates less runs
[03:53:51] in general.
[03:53:53] Yeah.
[03:53:55] I would say...
[03:53:57] On the MPA side, there's quite a bit.  You know, I mentioned them.  Astro, Marco, Quick, I don't know.
[03:54:03] I think what's interesting to me is,
[03:54:06] as I said, is this escape from components.
[03:54:10] when you escape from components and use something like reactivity, like solid scales
[03:54:15] on interaction.
[03:54:16] not on component size, not on view size.  Like, yes, the template gets bigger with the clone.  But if there was ever a partial iteration story,  you just not shift the template.  So it's only the interactive points that actually  ship any JavaScript.  Like, if you see a solid app, like, if you make--
[03:54:33] all static HTML, there's basically no code. It doesn't matter how many
[03:54:37] Like the component calls are basically no ops.  Like they just call one function.
[03:54:41] it doesn't matter how big...
[03:54:44] your pages.
[03:54:46] it matters how many points of interaction. And I think
[03:54:50] I think that mindset shift and using compilers to support that is basically how we're going to accomplish these things more so.
[03:55:02] Yeah, exactly. We have the fresh experience. And I think it's interesting, people like Alexis in Solid Community has already made a solid kind of thing called Solitude, which is basically a...
[03:55:17] An island's architecture made all with solid components. But I think
[03:55:22] I think it'd be really interesting to see this almost as a beat plugin that you could just slide right in.
[03:55:28] Thank you.
[03:55:30] disappearing application now, we hope. As I said, I think the most successful at that so far is Marco, upcoming Marco 6. It's, as I said, it's not even close, right? We looked at this, right? Marco 6 for this page, which is like,
[03:55:46] 70 kilobytes in a React framework like Next,
[03:55:51] is
[03:55:53] 1.6 kiloytes.
[03:55:55] And for information here, someone actually wrote the code in vanilla JavaScript, was surrendered to see how big this page would be. And obviously that's,
[03:56:05] fairly easy to do. You can just use a selector and add each comment thing. And it was about
[03:56:11] 200...
[03:56:13] I'm sorry, it was about 400 bytes.
[03:56:15] Sorry, it's about 300 bytes.
[03:56:19] Essentially, the Marco version is about six times bigger  than the vanilla version.
[03:56:25] If you put that in the scale, the Marco version is also
[03:56:28] you know, 35 times smaller than the Next.js version. So like,
[03:56:34] Yeah, I think we're going to see more innovation. Obviously, not everyone's going to be using Marco's compiler. It's kind of space age. And I worked on it. And that's why I know that I'm probably, I don't know, it would take me years to reimplement it. So I'm not, it's not like the top of my priority list. But I think it's interesting. And I think more great work is going to go in there.
[03:56:55] Thank you.
[03:56:56] All right. I think we're good. I think it's been
[03:57:00] Four hours. Wow. And so many people are still here. That's amazing.  Thank you so much for joining me today.
[03:57:08] It was a lot of fun.  We got to learn some stuff.  And next week, yeah, we're going to be back.  We're going to talk about Solid's routing solution.
[03:57:17] And I think we've been doing a lot of updates and this is kind of
[03:57:22] in anticipating stuff coming for SolidStart. And I'm going to have Ryan Turnquist, the co-author of Solid App Router on stream with me. So you double Ryan's and we can take you through routing and solid, what it looks like today, what's it going to look like in the future, and, you know, all the cool stuff that is involved in that.
[03:57:44] All right.
[03:57:46] Have a good one, everyone.
[03:57:49] So until next time, see ya.
[03:57:52] Thank you.