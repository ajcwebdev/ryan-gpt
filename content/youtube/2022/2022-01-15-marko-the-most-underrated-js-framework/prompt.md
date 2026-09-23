---
title: "VanpBTKLFNM"
slug: "VanpBTKLFNM"
duration: "2:14:16"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/VanpBTKLFNM.mp4"
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
[00:00:02] Hello, welcome to my stream tonight. Starting a little bit later today. Tried to give myself a bit of a breather. I don't know if you've ever been in that scenario where you have like afternoon meetings back to back to back to back. That's how the 730 start felt on my on my streams generally. From finishing up work and then dinner, hanging out with the kids, putting them to bed, and then like running here basically to get the stream started.
[00:00:27] So today I took a moment, gave myself a little bit of time to get myself ready.  Never seemed to actually be ready on time, but, you know,
[00:00:36] That's how these things go.
[00:00:39] Anyone who's joining me here, why don't you say hi in the chat?  Introduce yourself.
[00:00:44] Before we get started.
[00:00:50] Oh yeah.  I'm kind of excited to do the stream tonight.  A little bit, I wouldn't say nervous,  but like this is one that I've known that I wanted to do  for like quite, quite some time.
[00:01:03] Hi.
[00:01:06] It's, it's,
[00:01:07] It's also on Marco, which is another JavaScript framework, but it's not any JavaScript framework.  It's obviously the one that I do at work and
[00:01:18] I got into Marco after I'd created Solid. So it's kind of,
[00:01:24] you know, a bit of an interesting story, at least from my perspective.  I wasn't here for Marco at the beginning, right?  I, uh...
[00:01:30] Thank you.
[00:01:31] Thank you.
[00:01:32] I wasn't
[00:01:35] Um,
[00:01:36] I wasn't there, so I kind of had to piece together what I know from talking to the other guys.  And they're definitely more experts than I am. But
[00:01:45] You know, Marco is kind of incredible and I think it kind of is
[00:01:50] been worth more attention than it's gotten over the years.  So I kind of want to look into those origins of it and talk about how Marco is today.  We'll talk a little bit about Marco in the future, but I think Marco, what Marco's doing  already today is already
[00:02:05] quite amazing when you kind of put into the context of the whole JavaScript ecosystem. And I think it's even a little bit hard to appreciate, given where things are today. So we're going to explore through that a bit, and just kind of do a very introduction overview of Marco, you know, where it's been, where it is, and where it's heading. That's kind of the rough plan for the stream today. So hopefully you guys enjoy. I know there's gonna be people like
[00:02:32] Dylan, who is from the Marco team, so I've got to make sure I represent properly. He knows a lot more of the details than I do, so he'll probably correct me anytime that I say something wrong. But
[00:02:45] Yeah, I'm looking forward to this one.
[00:02:47] But, yeah, let's first get started talking about this week in JavaScript a bit. I'm going to...
[00:02:53] share my screen here and get started.
[00:02:57] All right.
[00:03:00] Alright.
[00:03:04] Let's share and I'm going to go switch over to Twitter.
[00:03:08] A few things happened in JavaScript this week.
[00:03:12] Last week was all for me, at least all about all about solid.  We did the one point three release and whatnot, and
[00:03:21] launched that hackathon.
[00:03:24] which I'm just gonna plug again for a moment because
[00:03:28] You know, I can.
[00:03:29] If you haven't heard about it,
[00:03:32] We have a very long running hackathon, like a three month one, $12,000 in prizes, different categories.
[00:03:40] do check it out. I didn't really plug it on the last stream.
[00:03:43] Uh,
[00:03:44] And I was told...
[00:03:46] by other members of the solid community that I should have done that.  So, you know, this is exciting for us.  I think it's a real opportunity to build up the ecosystem and show people what we're doing, what we can, you know, what we're capable of.  But yes, quick plug for for solid hack.  But, you know, back this week for me has been a lot about Marco and I'll go over that in a minute.  But there's been a couple of other interesting things I think are worth mentioning.  First of all, which which you already see here on my screen is Astro is now.
[00:04:16] the astro technology company and um as you know we love astro and uh
[00:04:22] This is big news. They were able to raise $7 million of seed round and
[00:04:29] I think it's all well-deserved. When you consider the potential what Astro has, it lets people use all their existing technology and be able to build faster, smaller websites.
[00:04:39] I think Astro is amazing, and I think this is a really...
[00:04:44] really cool thing to see happen. We see these open source projects, Remix a couple months ago, gets similar money to kind of take kind of the meta framework level further. We haven't seen the same kind of investments on core frameworks, but meta frameworks are definitely a business towards it because it gives like the fuller polished experience. And I think it's really exciting in terms of Astro. The other thing for me, I guess this week,
[00:05:10] Let me go to my profile. There's some quick in my
[00:05:14] views, but JavaScript, state of JavaScript survey is up. So do
[00:05:20] try and fill it out i understand that that might be tricky i had a hard time it is very buggy this year
[00:05:29] I had to refresh like three times to get it working, but...
[00:05:33] you know,
[00:05:34] Thank you.
[00:05:34] It's important. You do it. Projects you care about get good visibility.
[00:05:39] And more than just that,
[00:05:41] You know,
[00:05:43] You don't have to choose your favorites in here, right?  Well, the best thing about this survey,
[00:05:47] Thank you.
[00:05:47] is
[00:05:48] almost everything has a freeform field where you can fill as many options as you want. So, you know, take your time, think about it, try to give credit to like anyone you can can think of, you know, that you appreciate the projects and the projects. I'm really happy this this year that solid was actually in the shortlist. So it was actually one of the preset options. So people didn't have to find it in the freeform field, which is awesome.
[00:06:13] After the whole, we managed to, I didn't mention this last week, but we were number fifth in front end frameworks for most stars this year. So I guess we're starting to get noticed. So I'm pretty stoked on that. But
[00:06:26] Hello. This stream is not about Solid. This stream is about Marco, but I just wanted to kind of
[00:06:33] kind of
[00:06:34] point that out.
[00:06:36] So, yeah, what's been going on with Marco, right? We had a really good week, and that's part of why I wanted to talk about Marco today, because
[00:06:44] Honestly, we've had a string of really cool announcements the last little bit here.  Let me go.  Oh, I didn't.
[00:06:51] Let me--
[00:06:53] It's always like advertisements sneaking into my feeds here.
[00:06:58] What I want to find is, yeah, yeah, first of all,
[00:07:02] We've released
[00:07:04] from Marco
[00:07:05] template with VEAT plus Fastify, which was pretty sweet. So again, just straight up, write this in  your console, you get bootstrapped to the VEAT Fastify project. This doesn't use the standard
[00:07:17] the Fastify plugin, because Marco has a lot of specific stuff around bundling, which we'll get to in the stream. But super easy way to get started with Marco.
[00:07:27] The one that I'm, another one I'm super excited about was the Vite Cloudflare one.  This one I worked on a bit myself too, because I've been really stoked on getting, showing  Marco on the edge, as you can imagine.  And again, this template is, you know, I've been doing this.
[00:07:41] is pretty cool.
[00:07:43] Install it, command line, same deal.  Dylan was actually doing a little bit of some more experiments on here.  Added a different form of file-based routing and stuff to kind of make things nicer.
[00:07:55] we actually took this and took my Hacker News demo that I keep on making again and again on every platform.  And we
[00:08:03] we released a Cloudflare Hacker News demo, which we'll look at a bit later for comparison. It's really cool to see partial hydration and streaming at the edge here. I think I mentioned one of my retweets that I think this is the first template that people can just go out and use and have both partial hydration and streaming at the edge. So really exciting stuff. And...
[00:08:31] The other thing,
[00:08:34] which kind of brought around the stream was
[00:08:37] Um,
[00:08:38] Pierre, Fireship was asking what are the most underrated open source libraries out there?  Number of libraries and great projects got mentioned.  But he made this retweet mention that Marco was definitely the most underrated framework  of all time.
[00:08:56] I feel like
[00:08:57] That's pretty accurate.
[00:09:00] you know, he mentions that most people never heard of it,  yet it powers EOA's front end,  and it's been doing partial hydration streaming since 2017,  if he recalls correctly.  And actually, it's actually since 2014, even longer.  And we'll go a bit into the history today, but like,
[00:09:13] It's one of those enigmas for people because it didn't really break on the open source side.  It's been open source the whole time, but it didn't really break as much as other projects.  But people in the know know what's up.  Again, this is one of my favorite quotes from Dan Abramoff where he said,
[00:09:32] I haven't looked too closely at Marco, but this 2014 article describes mechanisms that are ahead of what most mainstream solutions, including React, do in 2020.
[00:09:40] He wrote this in 2021, so I think he was trying to prepare for the potential of them releasing React 18 in 2021, and he didn't want to get misquoted. He's pretty clever on that. But here we are at the beginning of 2022, and this is still quite true.
[00:09:53] You know, they've been adding some of these features to React since 2018.
[00:09:58] But it's kind of crazy how much like this is a lot of the stuff Marco is doing is actually stuff that even predates Marco.  It's older techniques that kind of found their way into JavaScript frameworks much, much, much later.  And yeah, this is both the best testimony you can get from Marco. But this can give you kind of perspective of where Marco
[00:10:21] you know, might have been surprisingly, you know, undervalued. So yeah, that's what made me want to  do this stream. Now, I've been trying to, you know, think of how to approach it. But this is  this, this, this, this was a great little thing going around. The other, the other reason is, I  think, I think the conversation is kind of come back around here, right? On on these, on these  sort of topics, right? Like, Astro, which we already mentioned today is all about islands and
[00:10:51] sending less JavaScript.
[00:10:56] Another great one that I saw this week was Justin Fagnani, the creator of Lit HTML. He was talking about Google's internal framework Wiz.
[00:11:06] which also is basically kind of zero KB JavaScript framework.  And I've admittedly, I haven't looked at Wiz myself,  but I've heard about it several times before,  talking to Misko and Igor and various members of the Angular team.  And they always kind of point back to it as like this kind of thing that's like,  and it's kind of nasty and hard to use ergonomically,  but, you know, it does when it needs to.  And, you know, it was very innovative for its time.
[00:11:36] And he's saying how he wants to explore these techniques with lit, right?
[00:11:40] And
[00:11:42] So basically, it kind of started a conversation with myself and Misko a little bit about it, because Alexis, one of our community members, was like, well,
[00:11:53] You know, if QUIC is clearly very based on the same idea of whiz as like lazy loading stuff, how does Marco fit into this picture? And that's part of what I want to kind of answer tonight, right?
[00:12:07] And I was mentioning that there was like a fundamental difference in that Marco was never really about lazy loading.  It was about you were instead of making a framework which would figure out how to best eventually load JavaScript.  Marco, you know, had a different use case at eBay where, you know, most of the shop front page is mostly actually static.  And there's only a few points of interaction that Marco was more focused on just figuring how to send the least amount of JavaScript, period.  So instead of.
[00:12:36] figuring out how to find the right ways to defer and find the right interactions to load that JavaScript. Marco
[00:12:44] Instead, focused on syntax and compiler to figure out exactly what JavaScript needed to be
[00:12:53] in the browser automatically.  That's kind of the hook for Marco, right?
[00:12:58] I was kind of talking about that, right?
[00:13:01] Um,
[00:13:02] that Marco never really initially cared about lazy loading.  It was more of just about figuring out  how to send the absolutely least amount of JavaScript.
[00:13:11] And this led to a little back and forth with Misko, who was like,
[00:13:16] You know, DX is important, but if you start with DX, you get a sub, you know, suboptimal performance.  I disagree with that.
[00:13:22] somewhat, he is right if you only care about DX. I was trying to explain that with Marco, it was a look at syntax and compiler analysis, which I guess is
[00:13:33] kind of
[00:13:35] nowadays considered a DX first kind of approach, instead of looking at like loading mechanisms. Ultimately, in a lot of cases, the difference between Quick and Marco are like they become the same thing. But essentially, the final take or nuance point in this conversation was that
[00:13:55] Current framework syntaxes unintentionally hinder startup times by preventing decomposition and lazy loading. Quick tries to make minimal changes to that syntax to get what developers are familiar with and allow them to do this decomposition and lazy loading. And you can see that they did some announcements a couple weeks ago where you can see the how that what that looks like. They have JSX and they have
[00:14:19] like these kind of wrappers around the render function,  and event handlers and their components,  that lets them identify the key granular points  to break apart with your compiler,  but it lets you mostly author things the way you're used to.
[00:14:32] Marco, which is a little bit older, which we'll get to, took...
[00:14:36] a completely different choice.  It was like, what if we just controlled all the syntax  and designed the language exactly the way we needed it  to be to do our task?
[00:14:45] And that's the premise. That's the difference. So
[00:14:49] With that, I think, is probably a good point to kind of switch over.
[00:14:56] to our topic for today which is obviously talking about marco but i i would i i want to kind of
[00:15:04] I want to kind of dive back a bit.  I did that last stream when I was talking about petite solid or petite view.  I was mentioning that these are techniques used in the 2010 time period.  But I want to kind of...
[00:15:19] you really need to get back in time to really understand the perspective that this was coming from.  So let's do that, right? Let's kind of...
[00:15:31] go back in time. And part of it is obviously talk about the technologies that were available at that time. But
[00:15:38] Another part of it is actually talk about how people were.
[00:15:40] and what the perspectives were coming into this time period.  Because Marco was created, to my knowledge, in 2012,
[00:15:50] ish internally at eBay.  Really, if you look at Marco's timeline,  it's very similar to React.  But we live now in sort of a post-React world,  is my best way of kind of putting it.
[00:16:05] I don't know if there's ever going to be another react. Essentially, it came up at the right time with the right technology and
[00:16:12] essentially
[00:16:13] even like most of tech Twitter and like the communities and stuff we know today around front end were built as part of that wave of growing.  Like it's it's so big and influential even today that it will be a very long time before.
[00:16:32] you know,
[00:16:33] that would ever not be felt.  Even if React fell out of favour...
[00:16:37] it's,  it's last,  it's made a probably a permanent impression on things.  So,
[00:16:43] Where I'm getting to here is,
[00:16:45] Just to kind of,
[00:16:47] actually
[00:16:48] If you go back to 2012,
[00:16:51] 13, 14, as people had been building buildings
[00:16:57] classic websites using .NET and Rails and whatnot, you know, these server rendered websites, and they were heavy and bulky and they sucked for interaction. They caused these full page reloads and whatnot. And it was kind of brutal. I still call my time in .NET the dark ages. And what
[00:17:18] When JavaScript became a viable option, we wanted it more than anything to be the solution.  We pulled more and more stuff in the client and it felt so good.  Like every time you got rid of those heavy back and forths and stuff and you had more and more stuff in the browser...
[00:17:38] it just made your whole life feel easier when you're building really complex stuff.  People wanted mobile apps basically in their web browser and like,
[00:17:47] the tools we had weren't really set up for that.
[00:17:51] And that mentality is,
[00:17:54] kind of is what
[00:17:56] you know,
[00:17:58] that React grew out of. And I mean, the thing is, these days, you know, everyone's talking about SSR and partial hydration and being, you know, good web citizens and using the platform and all that stuff.  But go back even a couple of years, and that wasn't a sentiment. I said myself quite often that, you know, when I built Soledad, I didn't care about SSR, you know, client side rendering was fast enough, you know.
[00:18:22] But now I'm here, big proponent of partial hydration.  And it's not just...
[00:18:27] you know, me.
[00:18:28] Like, it's not just stuff like that. This was like the whole community. Here's a quote that I came across in December, because Sunnyel retweeted it again. But no, I'm not calling anyone out. I just want people to understand how different things were even five years ago.
[00:18:46] This is Michael Jackson, the creator of Remix, which we all know is a big proponent of just using the platform.
[00:18:55] as you know literally the only thing server rendering is good for these days is seo and search engines and
[00:19:01] that are not Google. That's it.
[00:19:03] Which, you know, that's pretty heavy.
[00:19:07] Thank you.
[00:19:07] Thank you.
[00:19:09] Right, because I'm sure...
[00:19:14] I'm sure he probably wouldn't say that, and I'm probably taking this message out of context.
[00:19:19] Um,
[00:19:21] Yeah, people think it's their answer to performance problems. It's not. SSR alone doesn't solve performance. But, you know, Remix is a big champion of progressive enhancement. And...
[00:19:31] It's as I said, it's not just me. It's not just Michael Jackson.
[00:19:36] How about...
[00:19:37] We just saw Justin talking about how he wanted to bring Wiz into lit HTML.
[00:19:43] Right?
[00:19:45] this is web components, Mr. Use the platform himself.
[00:19:52] Right. Again, I'm taking these quotes out of context, but I want to kind of
[00:19:57] emphasize Marco
[00:20:00] came up.
[00:20:02] in a world very hostile.  When people ask me why Marco isn't more popular than it is,
[00:20:08] I only have to kind of point back at understanding how much people did not want
[00:20:15] to be...
[00:20:16] based on some kind of server rendering technology.
[00:20:21] So,
[00:20:22] This is 2018.  So, like...
[00:20:27] Can you picture even a few more years early when everyone's on that like react honeymoon, what it was like?
[00:20:33] Thank you.
[00:20:34] I know I was there.
[00:20:36] Yeah.
[00:20:37] Honestly, something like Marco is probably the last thing we were looking for.
[00:20:41] Yeah.
[00:20:42] So,
[00:20:43] Why Marco though, right?
[00:20:46] I mean, we've heard the rhetoric a lot more now.
[00:20:51] I was actually, I was doing like a presentation for eBay a little while ago, and I'm just going to share this one slide here that I think is kind of relevant.
[00:21:00] No, not share, share, damn it.  Just present it here for a second.
[00:21:06] I pulled this off one of Adi Osmani's articles, the left-hand side.  And the right-hand side, I pulled off something else.  I could probably dig it up.  Essentially...
[00:21:17] They were saying in the cost of JavaScript article that
[00:21:21] The median web page--
[00:21:24] loaded 350 kilobytes of JavaScript back in 2017. I think that number has actually gone up. But
[00:21:30] On a low-end mobile phone like Moto G4, that can take up to 15 seconds
[00:21:36] to be interactive, which is
[00:21:39] A lifetime.
[00:21:41] Thank you.
[00:21:42] Yeah, we started at 8:00. You haven't missed yet much. We're just getting into Marco. I like to give a rant on this week in JavaScript before I get into it.
[00:21:54] You know,
[00:21:55] That's a lot of time. And then the thing on the right, which is how much of a user drop off you have based on how many seconds it takes for your site to load.
[00:22:10] So,
[00:22:11] Thank you.
[00:22:13] If you look...
[00:22:15] one second, two seconds, minimal amounts, three. Once you get above three seconds,
[00:22:22] 24%, 38%.  These are considerable drop-off amounts, right?  And now picture...
[00:22:29] You are an e-commerce site and you're trying to get referrals off Google search results.
[00:22:36] And
[00:22:38] your site takes, like it doesn't take much,  350 kilobytes of JavaScript for the 13 seconds.  Your site takes,
[00:22:45] Four seconds to load on that.  Like you're losing almost half your customers before they even bought anything.
[00:22:52] And these numbers are not
[00:22:55] like,
[00:22:55] unique. You'll find them all over the web.
[00:22:59] And eBay has their own internal numbers, which I can't share, but essentially
[00:23:04] Picture being one of these companies with like a Java, the classic, you know, server backend.  And you know, you need to move to JavaScript.  You know, you that like that's where things are heading, but you can't risk that.
[00:23:18] you know, losing that time. And people come to me and they'll be like, oh, but Amazon uses react and blah, blah, blah.
[00:23:23] There's a system around it. Google has had Wiz, eBay made Marco. I'm sure Amazon has some kind of micro services lazy loading mechanism that they're doing it even if they're using React.
[00:23:38] it
[00:23:39] And probably the core static parts of page aren't doing that because
[00:23:44] This is a death sentence for e-commerce.  This is why Quicken Builder have been doing their thing, you know, with more modern tooling.  But this this is like this is like not going to work for you.
[00:23:57] for a lot of things. So
[00:24:00] One of the...
[00:24:03] And actually, it also matters where you are around the world, right? I didn't actually show this earlier, but I actually love this little tweet. The response to Michael Jackson's tweet about SEO, Fonsaniel, was India would like a word with you. I'm not saying internet is terrible in India, right? But the thing is, not every network is built the same. So you have a slow network. It's...
[00:24:28] It's a big deal.
[00:24:33] I hope so. First input delay is...
[00:24:37] is a better metric.  And the reason it's a better metric  is because if you just do lazy loading,
[00:24:47] you cheat the metric, right?  If you just go, oh, I'm not going to load any JavaScript  until you click something, and then you download your one megabyte  when the first person clicks something,  you're just cheating the benchmark.  And this is our biggest...
[00:25:01] thing we have to watch out for with these new frameworks and stuff. Because lazy loading alone
[00:25:09] isn't enough of a solution.
[00:25:12] frameworks, and this is what Misko was talking about in terms of the decomposition and the structure, most frameworks can't
[00:25:20] they have to hydrate top down.
[00:25:22] this is like React, Solid, Svelte, you name it. We hydrate top-down and
[00:25:30] For that reason,
[00:25:32] If you have a button nested way deep on the page, and you built your whole app as a single app, and you click that button, you're like, you might not need to bring some other leaf nodes off, but you're bringing the whole freaking trunk down the wire.
[00:25:45] You know, depends on what you're doing. It's fine. You know, I'm not going to tell you how to use other frameworks. I wrote other frameworks.
[00:25:53] But I want to be kind of understood that,
[00:25:57] Like from eBay perspective, 2012, I mean, you got to remember,  JavaScript wasn't even a real player until about 2008.  Like, yeah, there was Ajax in the browser, but that's when the –  around 2008 is when like Chrome, V8, WebKit, Safari, and like whatever –  what was in Mozilla?  I'm trying to remember.  Like the modern – was it Spider Monkey?  The modern –
[00:26:24] JavaScript engines came out and they were a big deal because like the performance was like 10x what was before.  That's what enabled Node to finally be a real thing. And, you know, which came in 2009 right after.  You have to understand for enterprise and bigger companies, betting your back end on JavaScript seemed risky. Right.  So you had the if you're going to make a large company move from Java to JavaScript, you better know what you're doing. Right.
[00:26:54] had to really like prove out this concept. You know, Marco was released in 2014, but it was,  I believe it was started building back in 2012. It took a couple of years, kind of, you know,
[00:27:06] It's a bit of a different story than React.  And that's because React mostly was like kind of a layer on top of the PHP.  Marco, right from the start, was a replacement for the back end.
[00:27:17] So and
[00:27:19] I'll get a bit more into how and why, but this is also  from that article from Adi Azmani,  and the real cost of JavaScript.  And here's the problem.  Even if you have the same size--
[00:27:31] ACID.
[00:27:33] This asset is half the medium page size, the 170 kilobyte. A JPEG, yeah, sure. So on a slow network, it took 3.4 seconds to send this asset across.
[00:27:45] The image took 0.064 seconds to code and 0.028 seconds to rasterize or paint on the screen. The JavaScript took two seconds to parse and 1.5 seconds in execution. To be fair, browsers have done an amazing job to make this better now. But my point is, the bytes aren't equivalent.
[00:28:04] This added, it doubled the time. It was 3.4 seconds across the network, and then it was another 3.5 seconds to parse and execute on this device. So you're essentially doubling the time.
[00:28:16] that it takes to
[00:28:19] to do work here just because it's JavaScript.  The JPEG, like this doesn't even add to 100 milliseconds,  you know, put together here.  So like essentially the image costs the network time,  the JavaScript costs twice the network time.
[00:28:33] So,
[00:28:34] This is a real concern, right?
[00:28:37] They go on him and Alex Russell wrote a great article in 2017.
[00:28:42] Can't remember the name of it off the top of my head right now, but they basically suggested you should be really.
[00:28:46] aiming that first page load or whatever to be in the 80 kilobyte range.
[00:28:51] Right? Like...
[00:28:52] This is sort of the mentality, at least, that bread has.
[00:28:57] Marco.
[00:29:04] There was execution at the bottom of this chart. It's two seconds to parse compile, 1.5 for execution in this example. So, yeah, it's basically double with parse and execution. But I mean, that's obviously going to vary.  But...
[00:29:18] You know,
[00:29:20] Essentially,
[00:29:23] Where they started was okay.
[00:29:27] I need to make a node backend.
[00:29:30] So this is very different.  React was like, how do we make our web experience  like a mobile app?  That's why they created it.  Marco was like, how do I make a node backend?
[00:29:39] So,
[00:29:41] Go back in time and you might, it used to be called Jade, but have you guys ever seen Pug?
[00:29:50] Let's see if I can plug here.
[00:29:52] I want to actually give pug template. This isn't fun. Do they have a repl?
[00:29:59] Okay.
[00:30:00] Your homepage is supposed to be like,
[00:30:02] a nice thing showing your actual syntax.
[00:30:06] Like, this is nothing.
[00:30:07] Um,
[00:30:10] There's really no basic pug example.
[00:30:14] OK.
[00:30:15] Pug was a node language where it was basically like white space matters. You got to remember this was a thing back in the day. But essentially you could just write your div and this would turn into HTML.
[00:30:29] This is probably one of the most popular templating languages  in the early 2010s because it was very concise because you wouldn't have to
[00:30:37] You wouldn't have to write like a...
[00:30:40] brackets.
[00:30:43] Yeah.
[00:30:44] - Yeah, Nunchuck's another good one.  Well, the one that eBay was really interested in  was the one that was used by LinkedIn at the time,  which was called Dust.  And less people know about Dust, I didn't know about Dust,  but Dust was special.
[00:30:56] So Dust.js by LinkedIn.
[00:30:59] um
[00:31:00] Dust was special.
[00:31:02] Because, okay, it looks like
[00:31:05] What they're saying is...
[00:31:07] Yeah, I don't actually know what they're talking about here, but Dust didn't have the nicest...
[00:31:12] syntax to be fair. But what made Dust special
[00:31:16] was it was really pluggable in terms of these little widgets, which again, you can get that with handlebars or whatever, but it allowed you to put async stuff
[00:31:25] in your template.  And I can't-- I wonder if I can find an example of this.
[00:31:33] because there's a lot of syntax stuff here.  Partials, blocking inline partials, what's a partial?  Partial is probably their name for...
[00:31:42] like injecting stuff.
[00:31:44] advanced topics.
[00:31:47] Compiling, rendering, no.  I'm probably not going to find it here because honestly, I don't know.
[00:31:53] I'm not -- I'm not --
[00:31:56] I'm not a master of Dust by any means, but just in case you're wondering, Dust was LinkedIn's templating language.
[00:32:05] The cool part is that they let you put async stuff inside the template. And the reason is Dust was the only node templating language that actually supported node streams. So it would actually stream the data and then
[00:32:21] when you hit something async, you could block it and then
[00:32:24] or you know or it could i think it could i can't remember if it can fork it but it  could actually process the stuff and then stream it all out as it finishes
[00:32:31] essentially, which is really cool because
[00:32:36] But
[00:32:36] So most server rendering, you know, and it's still true today, you go pick up Next.js, I mean, before React 18, or, you know, any of that, you know, Remix or whatever, you just...
[00:32:50] do all your data requests, then render it,  then send it back to the browser, right?  There was even a while, and I was in this crowd where I was like,  oh yeah, client-side rendering is faster than server rendering  because you can start loading the assets  and start doing stuff preemptively.
[00:33:04] Um,
[00:33:05] before the server even finishes. And to be fair,
[00:33:09] That's only really true in fast networks.
[00:33:11] and with bigger latency to your database perhaps.
[00:33:16] you know, essentially...
[00:33:21] Dust allowed streaming.
[00:33:23] which is basically one of the core tenets or features of Marco.  And it's getting more popular in attention now.  But essentially, this is where they started.  But they realized that Dust really wasn't going to do everything they wanted for them.  And that's really where Marco started from.
[00:33:38] Right.
[00:33:39] You got to understand that at this time period,
[00:33:43] people were still mostly rendering their templates on the server.
[00:33:47] Right. They were using something like pug or dust or something. And then they would add JavaScript
[00:33:54] to do stuff. The earliest JavaScript frameworks were just like Petite View or Petite Solid, which I, you know, that I was showing off, you know, last time or Alpine JS, you know, they were these little apps that kind of got embedded on your server side page and added interactivity.
[00:34:11] almost all of them were able to parse HTML  to create their templates and do their work.
[00:34:17] But now,
[00:34:19] you
[00:34:20] This is where things diverged.
[00:34:23] Essentially,
[00:34:24] React and Angular and those frameworks started doing more and more client side rendering. And Marco,
[00:34:33] stayed on this path.
[00:34:36] So that's kind of like our history lesson. Let's actually look at the
[00:34:43] Let's actually take a look here at Marco, I think.
[00:34:48] because we should kind of get a feel for it.  Because I think one of the most...
[00:34:56] Maybe
[00:34:58] The thing that might repel people about Marco sometimes is the syntax. And I just, I think you need to get into that mindset of pug and dust to kind of understand where Marco came from.
[00:35:09] So let's take a look here.
[00:35:14] Marco, if you've been to the homepage,
[00:35:18] HTML reimagined, that's as good of a description as anything.  But it started from this templating language.  And for a lot of times, I think someone actually  put in a quote somewhere this week's response  is that Marco was the pug of 2020.
[00:35:33] In a way, maybe that's a fair judgment, but Marco does so much more.  It's easy to see how that gets...
[00:35:39] kind of
[00:35:40] blown over. But essentially, we have some Marco here that looks kind of like normal HTML. Let me blow this up a bit. Sorry, wrong window. Let me blow this up a bit so you can see what I'm talking about. This is what Marco looks like. It's single file components. Remember, this is from
[00:35:59] like 2013, 2014 time period, right?  Nowadays, single file components are like commonplace, you know,  and people are used to this kind of ease because it's felt, but
[00:36:08] Marco predates Svelte by several years.  So just kind of put that in perspective.
[00:36:15] Essentially, this is part of why Marco might be underappreciated or have its time. It was doing this compiler stuff way back in the day. So, yeah.
[00:36:28] basically HTML and then
[00:36:31] It uses tags, right?
[00:36:33] for control flow.  So if you have an if statement or for,  it actually uses tags for them.  There's some interesting syntax that I'll discuss  in a minute, but essentially,
[00:36:42] And you can even tell the interpolation using stuff like dollar sign, which again is pretty standard in our tag template literals. But it's it's this is more of a kind of holdover from
[00:36:52] say pug.  And then on the right side, we've got an interactive example  here.
[00:36:59] essentially
[00:37:01] in marco
[00:37:02] to
[00:37:04] have state it uses a class.
[00:37:08] There's different syntax that we've introduced this summer to do this in a different way.  But talking to this classic Marco,
[00:37:15] This is their single file components. You make a class, give it some methods, use it in the template.
[00:37:20] Um,
[00:37:21] Thank you.
[00:37:22] Pretty straightforward in terms of that.
[00:37:26] But...
[00:37:29] Marco has some great features, right?  Right from 2014, as mentioned, streaming,
[00:37:34] which
[00:37:35] you can kind of--
[00:37:36] already see how maybe this could lend to a better experience when you have lots of pieces that kind of load in.
[00:37:43] Um,
[00:37:44] And the biggest thing you should notice about this image is look at the image, the time that it takes for this image to load.
[00:37:50] by being able to load
[00:37:53] start loading the asset earlier, even though the page finishes at the same time,
[00:37:57] the thing that streams the content sooner has the advantage even on total load time.
[00:38:02] Thank you.
[00:38:03] And then the other big part with Marco obviously the selling is the ability to send the least JavaScript.
[00:38:10] Those are all selling points.  Let's just...
[00:38:12] Let's just kind of.
[00:38:13] I'm going to dive into an example in a minute, but I wanted to kind of show one more thing because I'm not going to use it.
[00:38:19] Remember I mentioned Pug?
[00:38:21] Marco has concise mode and, uh,
[00:38:25] Okay.
[00:38:26] Honestly,
[00:38:27] I'm past my White Space Matters days, but it is definitely...
[00:38:33] kind of gives you that feeling of,
[00:38:36] of
[00:38:37] of the time period in which it was brought about, right?  This started as basically a server templating language.  You just wrote your HTML,
[00:38:47] you know, or your pug template, essentially. And then you're like, oh, I want to do some  small bit of JavaScript. I'm just going to put a class here. And when you
[00:38:55] when you click on
[00:38:56] click on it, you know, it'll do the thing.
[00:39:00] That's like the starting point. They were like, okay, if we can stream HTML, make it non-blocking and just
[00:39:06] produce HTML as fast as we can, then all we need to do is
[00:39:10] take this class,
[00:39:12] and this click handler and send it to the browser.
[00:39:15] And then now our app is interactive.  That it's starting from a place where all you have is HTML and you just go, oh,
[00:39:22] Now I'm just going to add some JavaScript.
[00:39:26] That's kind of the root of Marco.
[00:39:30] Mm.
[00:39:32] Thank you.
[00:39:33] *sad*
[00:39:34] -
[00:39:35] So I already gave you
[00:39:37] Showed some links to getting started.
[00:39:39] Templates.
[00:39:41] We can probably dig into one of those.  I'll dig into the Hacker News demo in a minute.
[00:39:46] I'm...
[00:39:48] I'm just going to quickly pull up the try it online right now.
[00:39:51] I say quickly, but clearly my internet connection's not playing nicely, wouldn't it?
[00:39:56] Because...
[00:39:57] Haha.
[00:39:59] That's interesting.
[00:40:00] not built for mobile.
[00:40:03] Okay. Let's see if I can blow this up. We actually have a new Trita online.
[00:40:09] with the new syntax, but I want to use this one because it has examples. Let's see if  I can blow this up a bit.
[00:40:17] All right, okay. So this is just some basic Marco syntax just to kind of get a feel for it.
[00:40:24] - Thank you.
[00:40:25] In Marco, you can put JavaScript literally anywhere in your template by just putting a dollar sign in front of it.  So even though it's a single file component,
[00:40:33] It's super, super dynamic.
[00:40:35] And in this simple example here,
[00:40:39] it's just showing that
[00:40:42] based on this array of colors, and I think I can just edit it.
[00:40:47] It will contain the color, can I add a color orange?
[00:40:51] Yeah, it will basically iterate over this list.
[00:40:56] with the for loop and if the colors dot length
[00:40:59] Basically, if you've used JSX before,
[00:41:02] This idea of using components for control flow actually
[00:41:06] might seem weird to you.  But on the other hand, if you've used suspense or error boundaries,  it's not too far.  If you've used solid, this should be fairly...
[00:41:13] much more similar. But the key bit of syntax that I want to show here is
[00:41:20] Unlike most single file components, Marco uses
[00:41:25] basically has the same as render props in React, where you can pass
[00:41:29] props from the parent into the child body here.  So in a sense, this color is almost like a callback function.  Like this, I know other frameworks have different syntaxes  for this thing, but this essentially works on
[00:41:44] like basically any component. If you want to build a component that
[00:41:49] takes a function, if you're thinking JSX, you can do this in Marco's templating language.  So it's kind of an interesting templating language in that it started as a server templating  language, but it's one of the, because of the dedication to syntax, it's one of the few ones
[00:42:03] that actually
[00:42:05] So,
[00:42:06] has
[00:42:08] most of the flexibility that you find in like
[00:42:10] JavaScript. You can even make multiple components in the same file.
[00:42:17] Hi, welcome. Yeah, just kind of introducing some Marco syntax, just kind of get a feel for it.  I understand this is not everyone's cup of tea, but I just wanted to kind of show because
[00:42:28] The syntax actually plays a really important role in terms of
[00:42:32] analysis on the server.
[00:42:35] Because Marco controls the control flow,
[00:42:40] Because it knows this is an if, it knows this is a for,
[00:42:43] You can look at this template and be like, oh yeah, well,
[00:42:48] Here's a static array.
[00:42:50] This array never changes.
[00:42:53] So we know that we don't need...
[00:42:56] this for loop in the browser.
[00:42:59] because it's never gonna change.
[00:43:03] essentially it can look at what's stateful and what not and make that kind of decision.
[00:43:07] The heuristic in Marco might be a little bit simplistic because it just looks at classes, but essentially you get
[00:43:13] like astro partial hydration.
[00:43:16] without making islands manually. If you ever use Astro, you can go, oh, client visible, and then go, oh, this works in the client, or, you know, and you load in these components in your template. Marco, you actually just build an app from scratch. And then you don't really think about it. And then it just automatically does what Astro does, but actually,
[00:43:32] maybe
[00:43:33] slightly more because it's not when you enter the child framework that's something you have to bring all the javascript. It's when you actually do something that needs javascript. So,
[00:43:42] You probably don't know what I mean. Let's bring up a real example.  I got a Hacker News example.  I was trying to find this blog site I made when I first started, but
[00:43:50] Let's look at the good old hacker news because...
[00:43:55] This demo has been worn out to, you know, I made it with Remix.  I made it with Solid on stream. Let's look at what a Hacker News demo looks like in Marco.
[00:44:08] So this is not using the latest template. I'm just
[00:44:11] I just grabbed this just so that you can kind of see this is using Marco serve.  This is like next.js style routes.  But first thing you're going to notice in here is,
[00:44:20] We just got some simple file-based routing.
[00:44:22] And then
[00:44:24] In Marco,
[00:44:27] Okay.
[00:44:27] You don't need to actually import any of the other components or the control flow. So,
[00:44:33] In a Hacker News page, for example, you have, you know,
[00:44:38] Actually, let me just...
[00:44:40] pull up one right now, our HN, what's it, HN?
[00:44:43] Sorry, each end.
[00:44:46] God.
[00:44:47] Marco.js worker. Yeah, okay, cool. I'll just pull up one of these Hacker News demos. You got a page and you're listing a bunch of stories, right?
[00:44:55] So essentially,
[00:44:58] Amen.
[00:45:00] This page that does that, I pull in
[00:45:03] something from API.
[00:45:07] you know,
[00:45:09] In this case, I'm fetching from Hacker News API.  But this could be some database.
[00:45:14] Like we don't really care what this is.  You're just fetching in your data.  I decided to put it out here.  Doesn't really matter.  As long as you pass a promise into the template,  you can then use an await tag.
[00:45:24] And this introduces us to another little fun bit of syntax.  But basically, in Marco--
[00:45:29] you have the ability to, and I was going to do it here,  to just put in a wait tag and then put then for the success case  and placeholder for the loading case.
[00:45:41] place. I believe Mark Svelte has a similar tag. You might be wondering what these @ signs are.
[00:45:46] This is the other kind of fun bit of syntax.
[00:45:49] I mentioned how Marco supports basically
[00:45:53] render bodies, but -- or so not render bodies, render props.
[00:45:59] These at...
[00:46:01] things basically get mapped to attributes.  So, you know, in JSX, you can like assign JSX  to any prop on it.  Like it's like you can go,
[00:46:14] you could have a tab or a table and go header equals some JSX.
[00:46:20] Marco basically lets you use these @ signs to basically make attributes that can be blocks of HTML. Most single file component things use slotting like web components, but this allows for a little bit more
[00:46:34] Um,
[00:46:35] because essentially,
[00:46:38] for you React people who are wondering what this is, I'll just write it out really quick for you.  But essentially this would be the same as if you had a wait.
[00:46:49] Ben equals stories.  Draw some JSX, essentially.
[00:47:00] Okay.
[00:47:02] Marco has the ability to basically
[00:47:06] kind of pass in markup to any prop very similar to like--
[00:47:10] a JSX type framework.  So just if you've, this is pretty powerful,  but it kind of plays out nice  'cause it just looks like HTML.  So essentially here we have our,  this is like our suspense component.
[00:47:24] I sometimes joke that Marco invented suspense back in 2014, that Danny Ibramoff, quote, that's sort of what he was kind of referring to, essentially, that...
[00:47:35] In that article that Patrick wrote,
[00:47:39] posted back in 2014, he was basically describing how one would use server side suspense, which is coming to React this year.
[00:47:47] but with React 18. But essentially, this is kind of what Marco was doing back in 2014. So this is the component that enables it. And
[00:47:57] Essentially, you know, we see our logic with ifs and else's, and you kind of just build out your page for loop. And then story, we don't import, it's automatically detected in the components folder. And it's just another component like this. Don't really have to build it out. I think anyone can kind of see that this is basically HTML, standard HTML, just littered with some special control flow components.
[00:48:22] And essentially, we have our...
[00:48:26] Yeah.
[00:48:28] our app, our landing page.  And the reason that I want to show this example is,  when you're building this,
[00:48:37] it is kind of a server-centric mentality, right?  You could put a database query in your API call or whatever,  and you just kind of build it out.  And then you kind of template it, and it renders.
[00:48:50] I often ask people when they see Marco, you know, actually, let's just build this example.
[00:48:57] OK, it's already running on localhost.  Sweet.  Let me just pull this out.
[00:49:03] over here.  And actually, I'm going to open this in an incognito window,  because it's better for us to kind of see this.
[00:49:13] Thank you.
[00:49:15] I always ask people whenever I show this on stream,
[00:49:18] Okay.
[00:49:19] How much JavaScript do you think it takes for Marco to render this Hacker News page? You know, we did an API recall, we awaited some async data, and then we basically show a placeholder and then when it's finished loading, we show the content. And if I refresh this page, you should see that. This is a really terrible placeholder. I'm sorry, I'm pretty bad at this. But essentially,
[00:49:44] You see that loading, and then when we navigate around,  you can see my terrible-- like I said, it's like suspense.
[00:49:51] You know, you can see this pretty terrible place.  But you can picture something nicer, you know, with not using my CSS skills.  And you might be going, OK, well, how much JavaScript do we send on the page?  And the answer to that.
[00:50:06] is a bunch in dev mode. But let's build this for real in production. Build.
[00:50:18] Builds our packages up.
[00:50:20] NPM run.
[00:50:23] Start the node server.
[00:50:28] And the answer to that, as you can see quite clearly,  is we send no JavaScript.
[00:50:34] Thank you.
[00:50:35] And the reason for that is because Marco...
[00:50:42] There was nothing interactive about what we were doing. In Marco,
[00:50:46] these links you're seeing are actually links.  Like if we go back into our hacker news example and look,
[00:50:53] These are just anchor tags with Ahrefs on them. We didn't bring in a router or anything. This is  a old school, in a sense, multi-page app. But, you know,
[00:51:05] Streaming.
[00:51:07] makes all the difference.  Because now, instead of having that flicker of white that  drives people crazy, and we can actually  show probably even better loading states here,  because we don't block the rendering.  You get the static content as fast as you would  in a client-side rendered app.
[00:51:26] And then you get the content loading in the way you're used to.  You know, you've used Twitter before, right?  This is not going to work here because I'm not logged in.  Sorry, wrong window.  But you use Twitter before.  You see that little bird come in, the placeholder, you know?
[00:51:40] You get that experience.
[00:51:43] essentially
[00:51:44] without loading any JavaScript on the page.
[00:51:48] Thank you.
[00:51:49] Because we don't, because of streaming, we don't block.  We can show the stuff right away.  And if data takes a while to come in, it's fine.  'Cause it gets sent on all over the same stream.  Now, to be fair,
[00:52:01] This is not 100% zero JavaScript because
[00:52:06] this shows the loading spinner in place. And you're like, well, how the hell would you have zero JavaScript and show one thing and then show another thing? Technically speaking, and sorry, not this example. I'm going to, sorry, I need to switch back to the other window. Technically speaking,
[00:52:23] Here's a script tag on this page.  One little script tag at the end here.  It's not even.
[00:52:29] It's probably not even...
[00:52:32] 20.
[00:52:33] kilobytes. There's the whole thing.  It just goes...
[00:52:39] When this content for the page loads in,
[00:52:42] Replace the placeholder spinner.
[00:52:45] And to be fair,
[00:52:47] With...
[00:52:49] Marco, you can actually tell it to do it in order.  And actually, if you want to see what that looks like,
[00:52:56] We can get rid of the loading
[00:52:58] placeholder and go get rid of that client reorder.
[00:53:04] This forces it to stream from top to down to bottom.
[00:53:09] We can actually...
[00:53:12] Let's see now when we load it.
[00:53:15] There's no loading state this time.  But we can actually load the page, and there is actually  literally no JavaScript.  If I disable JavaScript in my browser,  this would still stream in.
[00:53:25] All right.
[00:53:26] That's essentially the power of streaming. And it makes a huge difference for multi-page apps like this.
[00:53:35] Thank you.
[00:53:36] I mean, this is a bad example because it's like literally just the header that's fixed, but picture your app with a sidebar like Twitter or whatever. You can navigate around and it doesn't really feel that bad or clunky compared to a single page app.
[00:53:49] And this is the message that Astro and them have been quick and stuff. But the difference with Marco, as I said, is you literally just write HTML with some stuff in it. You don't go, oh, load this when you do this stuff. Marco isn't a lazy loading framework. It's a compiled framework.
[00:54:09] So I'm going to put this back for a moment.  But what if you do have JavaScript, right?
[00:54:17] So let's look at that for a second, because--
[00:54:22] Thank you.
[00:54:23] I use a Hacker News example a bunch because--
[00:54:25] Oh, right. I'm not started.
[00:54:30] Thank you.
[00:54:30] We do have JavaScript. For example, let's go to this comments page. In this comments page, we have the ability
[00:54:38] to
[00:54:40] shrink and hide comments. So obviously there is JavaScript. So in this case, we are loading  JavaScript. In the case of Marco, the Marco runtime in Marco 5, you know, isn't the smallest runtime  we've ever seen on the stream, but it's 13.9 kilobytes. And then basically some page specific  stuff's about 1.5 kilobytes. So altogether it's about 15 kilobytes of JavaScript. But what I want  to show you is the end user doesn't really worry about that because when they load the page, this
[00:55:10] and then, you know, so no JavaScript.  And then when you go here, it loads JavaScript  'cause it needs that JavaScript.  But it's only loading,
[00:55:17] the JavaScript needs.
[00:55:19] And
[00:55:20] I can show this a little bit better here.  But I think the interesting thing about that is,  have you ever seen what...
[00:55:33] You saw this Hacker News page where we just have this little script to move stuff into place and it streams in.  Have you ever seen what this example looks like?
[00:55:42] in a different framework.
[00:55:45] Like...
[00:55:46] Let's pick one. It doesn't really matter.
[00:55:53] It's pretty spelled.
[00:55:56] Um...
[00:55:58] What do we have?
[00:56:00] I'm looking for it.
[00:56:03] Yeah.  Okay, this one, I guess, was built with Sapper.
[00:56:08] Most of the time, you...
[00:56:11] You render in the page, which here's our page.  And you have all the articles and stories.
[00:56:17] And all of them with their data and all this stuff.  And you have this giant blob of data that you need to send to the client to hydrate.  So...
[00:56:28] You both...
[00:56:29] send a bunch of JavaScript.  And I mean, in the case of Svelte, it is not a ton of JavaScript.  What is it?
[00:56:36] 13.4 kilobytes.
[00:56:38] Um,
[00:56:40] I could definitely pick an example that is less nice.  Next.js.  I mean, this is like shooting fish in a pond,  but you get the idea.  How big is Next.js?
[00:56:51] 121 kilobytes, that sounds about right.
[00:56:55] Thank you.
[00:56:56] And you can start to see, like, this is a world away. Let me see here. In terms of, like,
[00:57:08] the amount of JavaScript to do the page because Marco, you're not going to find
[00:57:13] those assets serialize the page because Marco knows that it doesn't need that data at all.  It doesn't need to be stateful.
[00:57:20] So it doesn't need to send information
[00:57:23] that data to the page.
[00:57:25] Right. And the thing is,
[00:57:29] But this gets a little bit trickier, right?  Because if you go to, say, the comments page--  let's go to the comments page here--  and refresh.
[00:57:38] Okay. So, 13.6. This one's a little bit bigger. Here's our script page with all the posts  and all the comments and all that kind of stuff, right?
[00:57:49] And I don't know if Svelte doesn't do the shrinking, but in the Marco example,
[00:57:54] we actually have to hydrate this page.
[00:57:58] But, you know,
[00:58:00] Okay.
[00:58:01] Again, there is a bit more data because it needs to basically know where the islands are.
[00:58:08] essentially where it needs the interaction. And this did serialized stuff, but this is much, much smaller.
[00:58:15] because we didn't actually have to send the data.  And the key to this is because Marco knows that the async stuff
[00:58:21] It's only like it's
[00:58:23] they can tell that it's not stateful, it's not driven by something stateful. So it knows that the request only happens on the server, which means it knows that the only data it needs to send is the data that is the input of any components that are stateful.  So in this case, unfortunately, you can see all these little empty arrays in this data structure. That's it, Marco going, oh, here's your props components. In this case, there isn't any, so it's an empty array, but essentially...
[00:58:51] Essentially, this is why there's a bit of data here, but Marco automatically creates the islands. And the way we did this example did take a little bit of cleverness because essentially
[00:59:07] Let me show you here.
[00:59:10] Thank you.
[00:59:10] When you go to the story page in Marco, sorry, where is it? Pages, pages, stories. No, story ID. It's like the other one where we await our info. But what I did here...
[00:59:22] Thank you.
[00:59:23] Yeah, we show the story.
[00:59:25] which we know there's no classes here.  There's nothing interactive.  And then we loop over the comments.  And the comments also...
[00:59:34] are not interactive, essentially, on their own.  So we just-- again, you don't see any state.  The way I did this in this example-- and this is a bit like--  I don't know if anyone's read Dan Abramoff's When to Use Memo.  He talks about solving a problem by hoisting it.  And that's essentially what I did here.  You see this toggle component?
[00:59:56] This is the only stateful component.  It wraps our for loop.
[01:00:00] which makes sense. It wraps it, right? We can compress all the children, but
[01:00:04] Because...
[01:00:06] for you
[01:00:06] We know that this...
[01:00:09] is coming from outside and there's no like render crop here.  There's no like arguments being passed in from the component.  Marco is smart enough to know that, oh,
[01:00:17] This is statically rendered on the server.
[01:00:20] even though it's a child of a stateful component,
[01:00:23] It doesn't actually need to pass its state, which means that the comment and all these comment fields are also static.
[01:00:32] And the toggle...
[01:00:34] It's really simple. It is simply a button that changes state. See, on create, create the state.  It's kind of like a React class component. And then when we press toggle, we switch it. And then,
[01:00:43] Marco's syntax is kind of in the middle between React and Svelte.
[01:00:49] in that you can just do simple assignments,  but it's still like at this state kind of thing.  So it's basically component level reactivity
[01:01:01] where you don't have to call set state calls, but it still works very much like any other VDOM today with Marco5.
[01:01:11] We just toggle the display between open and close here, essentially.  And because the children...
[01:01:21] Um,
[01:01:22] because the children are static, it knows that nothing in here actually reads from the comment,  which means we don't need the comment in the browser. Now, if I was to do something,
[01:01:35] to kind of fool Marco and be like, ha, we have stateful stuff here in this comment component, our output gets quite a bit different.
[01:01:46] Thank you.
[01:01:47] Thank you.
[01:01:48] Oh.
[01:01:50] Thank you.
[01:01:51] Marco goes, oh,
[01:01:52] This is a stateful component, and it has...
[01:01:57] So it reads from some comments.  So when I refresh this page now,  we're gonna see a very different script.  We're gonna see all the comments serialized  just like Svelte or Solid or Next.js or whatever.
[01:02:09] because we were doing some staple stuff in here.  So you can't just do this completely dumbly.
[01:02:19] Like you can't just like put a class and just go blah, blah, blah.  You might be aware of this to a certain degree,  but especially when you come to optimization,
[01:02:29] But the key part is,
[01:02:31] you know, outside of these kind of like use memo or, you know, type scenarios, you author your code in Marco like it's HTML.
[01:02:40] And Marco can just tell
[01:02:43] what not to send to the browser. It's automatic islands.
[01:02:46] Right. And, you know, this in Marco four or five, this is, you know, a simple does it have a class thing, but it actually holds up pretty, pretty well.  As I said, this is obviously me kind of playing around with the system, but like your authoring experience is just.
[01:03:03] It's just this, you know, pass in some promises, write some HTML.  Like it's hard for me to picture
[01:03:12] Um,
[01:03:13] building especially like content sites or simple websites like in an easier way there's no like  you're not going oh like what like
[01:03:22] For the simple stuff, you're just writing some simple JavaScript and basically using a templating  language. It's like pug. And then when you go, "Oh, I want to add a little JavaScript,"
[01:03:34] That's literally all that Marco does.  It adds the JavaScript where you add the little bit of JavaScript.
[01:03:40] So, I mean, that's kind of like what the authoring experience is. I remember the first time I did this and the feeling, because I was like, I was just like making my Hacker News example and I was copying it over. And then I saved it and I ran it and I refreshed in the browser because I was like, okay, I want to see how this compares to solid. And then there was no JavaScript there. And I stopped and I was like,
[01:04:01] Oh, yeah.  Like, I forgot...
[01:04:04] Mm-hmm.
[01:04:04] that there should be JavaScript, like, or it shouldn't be JavaScript. It was kind of like,
[01:04:10] the framework kind of fooled me because I wasn't thinking about it.  Like in this example, my API is a client-side API.  It's just a Hacker News API.  So I never really had to think about it much.  But you can understand that this benefit...
[01:04:26] that kind of comes from-- sorry, I'm going to rebuild this one again.
[01:04:31] with our toggle or-- sorry, back to normal.
[01:04:36] This benefit that sort of comes from being able to just
[01:04:40] author stuff in a very simplistic way and with HTML and just use stuff.  Let's make it really easy to forget that you're dealing with a client server interaction.  It's a really cool model, especially because you don't have to import tags like other tags.
[01:04:54] I'm usually not a big fan of single file components, as you know, but I'm
[01:05:00] If I'm built this, this, I sometimes say that like a lot of these systems aren't built in a way that scales to like complex state management and all that stuff. But the thing is,
[01:05:11] if you don't need the state management anyways,
[01:05:15] You know what I mean? Like for...
[01:05:17] person building a blog site or a simple e-commerce store that doesn't need app-like behavior and crazy stuff. This is very compelling. Of course, this isn't the end of our story for Marco. This is just kind of the feel for Marco today, right? And I mean,
[01:05:35] Let me see here.  As I mentioned, we actually--
[01:05:40] deployed -- deployed --
[01:05:46] Open my other window here.  Is it still open?  We actually deployed--
[01:05:51] Stuff recently to Cloudflare.
[01:05:55] Where is it?  Let's make sure I can-- yeah.  And this example is basically the Cloudflare version of it.
[01:06:05] Yeah.
[01:06:06] Oh, my Grammarly extension.  This is why I opened the other tab.  Essentially, you have the same...
[01:06:12] the same experience right on the edge.
[01:06:17] So, um...
[01:06:20] We already talked about size.  We talked about the kind of hacker news example.
[01:06:26] Thank you.
[01:06:28] Thank you.
[01:06:29] Just to lay in the point before we move to the next topic, just to make sure everyone's going to clear on this.
[01:06:35] What you're saving in the scenario when you have true partial hydration is you're not only saving the JavaScript running on the page.
[01:06:45] Um,
[01:06:46] you, sorry, you're not saving, shipping the JavaScript. You're not just saving, um,
[01:06:53] running the JavaScript, you also tend to save the double data duplication problem because you only need the bits of data that are actually connected to the things that are actually interactive on the page.  And depending on your site, that can be actually very little.
[01:07:06] Um,
[01:07:07] But, yeah,
[01:07:09] That's Marco today. We knew we wanted to do a little bit more.
[01:07:14] Where am I at? We're about an hour in. We're in a pretty good place.
[01:07:18] Thank you.
[01:07:19] Yes. Great, great, great, great question. It depends which benchmark you're doing, right?
[01:07:27] Let's pull out the JS framework. Thank you. Thank you for asking. Because I'm a big fan of this benchmark, as everyone knows.
[01:07:37] Why is Marco not doing good in this benchmark?  Well, this benchmark,
[01:07:42] Only tests...
[01:07:44] One thing.
[01:07:45] It tests how fast can you client-side render after you've already loaded the page, essentially.  That's all this benchmark.  So I will tell you right now.
[01:07:55] The fastest client rendering techniques
[01:07:58] except for block DOM and a few ones that are using these new kind of experimental purchase, are generally not BDOMs, generally.  Like, there are a few in here.
[01:08:07] And so there are fast VDOMs and there are still VDOMs,  but essentially Marco is very much
[01:08:14] the product of the front end technique that they use at the time.  Cause I want to,  I want to see if I can find it here,  but if I remember correctly,  Marco and react are about,  uh,
[01:08:24] exactly the same place. Where is it? Marco?
[01:08:28] react.
[01:08:30] Um,
[01:08:32] It's not terribly impressive.  I actually looked at seeing if I can improve the benchmark for, you know,  current Marco, because one of the main reasons is,
[01:08:41] for uh list sorting it has a like half the frameworks have a smart algorithm for sorting  lists half the frameworks have a dumb argument group uh or like a very naive approach to sorting  lists marco is on the naive side as long along with react so those frameworks immediately get  kind of sent to the back of the list whereas once you get past here you notice that it's all green  no no one on the front of the list has has it so this is a big one basically
[01:09:05] The gist of the matter is Marco today,
[01:09:09] is not the fastest client side framework.
[01:09:12] It's comparable to React.  But what if we...
[01:09:18] wanted to look at server side rendering.
[01:09:22] which is a different kind of benchmark, then you have a very different world. Because in server side rendering,
[01:09:31] It looks more like this.
[01:09:33] Um,
[01:09:36] Marco
[01:09:38] These are client side.
[01:09:42] This one is the only service I want. This is actually not -- this table -- yeah, I'm
[01:09:48] just
[01:09:49] Thank you.
[01:09:50] Maybe I'll just look at the numbers, it's easier. We need a better display for this. But the gist of it is, if you look at the server side benchmarks, Marco is almost 10 times faster than React or many of the popular solutions.
[01:10:02] Like, it's not even...
[01:10:04] Close. I mean, Inferno,
[01:10:06] actually has a bug in there escaping, which is why this is so fast. Inferno should actually be slower than this. They have a security issue. But essentially,
[01:10:16] Compared to most front-end frameworks,
[01:10:20] Marco is like
[01:10:22] view 9000, easily three to 10 times faster. So this isn't
[01:10:29] Everything I showed you has been about server rendering, less about client side rendering.  And Marco's hydration is super fast.  So while on the JS Framework benchmark, it's going to be slow,
[01:10:40] If we do like...
[01:10:43] kind of the load thing, like what about web dev, what about web dev, um,
[01:10:49] slash was it measure?
[01:10:52] We all like running these benchmarks, right?  Let's go to Page Insights tools.
[01:10:58] If we do something like this and you take Next.js,
[01:11:03] And just stick it in here. Let's do it.
[01:11:06] Thank you.
[01:11:08] Thank you.
[01:11:09] Thanks.
[01:11:11] I mean, this is a hacker news page.  This page is basically nothing.  It's just like a list of stories.
[01:11:19] Um,
[01:11:20] 73%.
[01:11:22] 1.7, 1.7, 3.9 seconds interactive.  That's not great.
[01:11:28] Right. And
[01:11:31] let's
[01:11:32] Let's give them another shot.  Let's now add server components with Next.js.
[01:11:39] and streaming in the latest best
[01:11:41] This example probably still needs a little work, but let's do experimental React with Next.js.
[01:11:48] and do the same thing. This is another Hacker News. I have every Frameworks Hacker News at the
[01:11:53] at the two of my frameworks.
[01:11:57] Yes.
[01:11:58] Right? So
[01:12:00] 96 is a lot better, right? Half the time they interact in our classic next example. But still,  the largest content load is 1.8. First content load is not bad. This is a pretty decent place.
[01:12:11] Let's...
[01:12:12] People like Remix, right?
[01:12:14] I've got Remix's demo right here too. Let's just run Remix through here.
[01:12:20] - Jesus.
[01:12:22] Sorry, I'm burying the lead a bit because I already kind of know how this goes.
[01:12:28] Oops, something went wrong. Let's
[01:12:30] Oh, did I copy some extra stuff here?  Yeah, let's try to be Mexican.
[01:12:35] Right.
[01:12:38] Thank you.
[01:12:38] Thank you.
[01:12:40] Remix is a bit better than Next.js, you'll find, but 97.  So 1.2, 1.2, 1.2, 1.5.  So another 300 milliseconds.  They're pretty fast at getting the paint and stuff,  but another 300 milliseconds until hydrated.  And I blame this on React.
[01:12:55] Because if you--
[01:12:58] Sorry, that's the wrong one.
[01:13:00] If you take like
[01:13:03] Solid.
[01:13:05] Thank you.
[01:13:06] you know,
[01:13:08] I got to do it in this order because if you take solid,
[01:13:12] Uh-huh.
[01:13:14] Essentially, let's see how this one goes.
[01:13:17] And as I said, this
[01:13:18] We're just taking the first go.
[01:13:22] Well,
[01:13:24] Those are much better numbers than
[01:13:27] than what we've seen so far.  0.8 faster, zero content, but timed interactive is one second.  It's still costing us like 200 milliseconds to get interactive, even with solid, right?
[01:13:40] And
[01:13:41] How it's felt.
[01:13:43] So that's another good one.
[01:13:45] Let's do this. As I said, I have everybody's hacker news at the tip of my fingertips here.
[01:13:51] Um.
[01:13:55] This one...
[01:13:56] Should be close to solid, but it doesn't stream.  So it should be slightly slower.  Yeah.
[01:14:02] - Okay.
[01:14:02] Yeah, so 1.1, 1.1, 1.1 across the board.
[01:14:06] Pretty good.
[01:14:07] the,  like,  the,
[01:14:09] the hydration cost with solid, as I said, it usually between 100 and 200 milliseconds.  Svelte's hydration here actually looks pretty good.  So, but...
[01:14:19] Again,
[01:14:20] a little bit slower on the load on mobile, but essentially, in the end, we're both about one second, right?
[01:14:25] Let's...
[01:14:26] Take Marco. I've been obviously
[01:14:31] waiting for this one for last. Let's take the Marco example. Here we go.
[01:14:38] Quick needs to get in on here too, but to be fair, Quick's going to be very similar to Marco, but let's do Quick or let's do Marco.
[01:14:48] Shit.
[01:14:49] *pick*
[01:14:49] *sips*
[01:14:51] Thank you.
[01:14:52] This should be 0.8 across the board.
[01:14:56] Yeah. I don't know what the speed index is.
[01:14:59] I have no clue, but look, first control 0.8, just like solid, largest control 0.8, just  like solid.  Streaming is awesome.  Time to interact.
[01:15:09] Like, this is...
[01:15:13] This is the difference. To be fair, when Remix first posted their demo, they took the script tag off their page when they compared to the next, and their numbers were pretty good. They were pretty similar to Mark over here. I think they were 0.9, but essentially they were basically the numbers. But the difference is,
[01:15:32] you had to take the script tag off the page  and then on the next page,  add the script tag back  or like make that decision  and do all that stuff.  Like Marco, you like, you saw me,  you just like write the code  and it just automatically makes things fast, right?  You don't even have to like...
[01:15:47] And
[01:15:47] Like the syntax is the catch.
[01:15:51] but not anything mechanical.  You don't have to like
[01:15:54] like wrap things in special wrappers or do anything special. You just write HTML and with some syntax. If you couldn't swallow the fact that there's some slightly different syntax,
[01:16:06] Like, you know, there it is.
[01:16:11] Thank you.
[01:16:13] Thank you.
[01:16:20] Yeah, and that's the whole thing.
[01:16:25] It doesn't because it's MPAs are like a different
[01:16:30] thing.
[01:16:32] There are trade-offs here. Obviously, I'm selling Marco on its strengths here, but there are different trade-offs with different types of architectures.
[01:16:41] The reason Marko doesn't have an easy to use router rule,  it's 'cause it has the easiest to use router, the browser.
[01:16:48] like you change the URL,
[01:16:50] and it renders the page, right?
[01:16:53] But like state management, yeah. Marco is lacking on state management and
[01:17:00] I've recently made a GraphQL client for Marco, but it's lacking on like some of the like state management and data service thing and a lot of that kind of ecosystem.  Mostly because primary use case for Marco, which we've been probably terrible at selling people on it. It's just.
[01:17:15] building e-commerce sites or blog sites or stuff.  Like, yes, if you need advanced state management,  yeah, sure, you can probably pull X data in and figure it out,  but there's not a Marco integration for that, right, as of today.  Like...
[01:17:25] essentially like
[01:17:28] There is ecosystem considerations here, but
[01:17:32] in some ways,
[01:17:33] it doesn't affect Marco as much because it's a completely different architecture that doesn't lend to those patterns.
[01:17:38] That's the thing. Every time someone comes in and goes, oh, where's the router? We're like,
[01:17:42] There is no router.
[01:17:45] Um,
[01:17:47] I'm not going to say that that makes Marco perfect for everything.
[01:17:52] I think, and that's what I'm going to talk a bit more about the future in,  but I just wanted to kind of show you that just, you know,
[01:17:58] If you care about your page loading as fast as possible,
[01:18:04] This is for you, right?
[01:18:09] Should I just go with solid? Yeah. See, some people probably were wondering, like, as I said, I had no qualms as someone in solid, you know, creative solid coming and working on Marco because our starting points are on the opposite side. I had a great conversation with Dan Abramoff a few weeks ago on Theo's stream and
[01:18:27] or a source base and essentially he was talking about the left hand and the right hand side that  was sort of his his metaphor for this he was saying that like react you know coming from the  right side and making the apps and these really interactive things but there's also websites and  blogs and reacts kind of making the progression over and i was like yeah and
[01:18:46] Marco or you know these other new framework some of these new kind of MPA frameworks are starting on the left side and he was like he was trying to kind of suggest that react is covered a wider range and I was like yeah.  You should check some of these out because they're making the move to the right like both sides seem to be converging in the middle right if there's one thing you know.
[01:19:06] Rich was dead on when he was talking about transitional apps.  There is a convergence to the middle going on right now.
[01:19:13] this these both frameworks on both sides are going to expand out their capability we're starting to  see mpas with different type of client writing so right now it's starting with very turbo links rails  can influence but i think i think think where things are going are going to be a lot more  interesting but i'll talk about that a little bit later i want to i want to keep trying to keep this  on on track on the rails but the in terms of should i go with solid
[01:19:37] Today, the answer is, is your application more app-like?  Is your application have like a dashboard or has lots of interactivity?  I would still go with solid for that.  I would go for solid on maybe, yeah, anything that scales, like building social media or that.  Am I building a blog site or an e-commerce site?
[01:19:58] Like,
[01:19:59] People have...
[01:20:01] different comfort levels. So like, like I'm, I'm, I kind of like JSX. I like that feel.  If you're building, you know, a small, simple site, like a blog site, you could go with anything.  And especially something small, like Svelte or solid, if it fits your feel, like,
[01:20:14] That 13 kilobytes of JavaScript wasn't really killing anyone.  You know what I mean?  You know, whether it's 13 or zero...
[01:20:21] whatever. But yeah, if you're building an e-commerce site or something where load actually matters,
[01:20:28] like,
[01:20:29] I wouldn't choose next year.
[01:20:32] JS, I think Seltzer Solid would be fine.  But if I actually, if I had a large, large site  and I knew that I had lots of content  and like it was a big thing and my business depended on it,
[01:20:46] Definitely Marco, right?  As in the middle, I think we have a lot of choice.  That's what's great for us.  The middle, you just go with whatever feels natural.  Personally, if I was building a blog site, I'd probably--  or a simple contestant, just being able to edit HTML  and have a designer dump that in, I feel like something like Marco  seems really good for that.
[01:21:07] But in the middle, none of the solutions are that bad that you couldn't really just choose to go with any of them.
[01:21:12] But
[01:21:13] Definitely, there are definitely cases where Marco just far exceeds other options. And where page load is concerned, there is basically no comparison.
[01:21:27] So anyway, yeah, let's talk a bit more about, where are we right now?
[01:21:35] 121.
[01:21:37] Thank you.
[01:21:39] Thank you.
[01:21:39] - Let's kind of go into the next phase here.  Marco next, we talked about benchmarks,  we talked about performance, we talked about hacker news.
[01:21:49] The syntax and everything I've been showing you so far,
[01:21:53] Okay.
[01:21:54] Came out in 2017.
[01:21:56] Okay, the modern Marco that we know came out almost five years ago. We released Marco 5, which is a big technology update, but all the syntax hasn't changed. Like the core of it from the outside perspective hasn't changed that much. So Marco's had the modern features that we know since 2017. It had...
[01:22:18] They had them before that, but they had different syntax and different things.  But Marco, the future, is taking a slightly different direction.
[01:22:25] And it's one that I'm actually pretty excited about.
[01:22:30] Mm.
[01:22:31] We've seen reactivity.
[01:22:33] kind of
[01:22:35] come over as a wave, sweep over the front end ecosystem, svelte, solid, like, you know, you know the deal. And,
[01:22:44] I can go back. I find an article from Michael Rawlings as early as I think  2000 to 2017 or 18. Like he knew,  they knew they wanted to take Marco this direction, but he,
[01:22:53] So hydration and this kind of performance is still the biggest problem.
[01:22:56] goal here and
[01:22:58] Runtime reactivity
[01:23:00] is challenging here because runtime reactivity has to run.
[01:23:05] It has to actually
[01:23:07] Collect the dependencies.
[01:23:09] Like you run it, then you know it changes.  It makes it incredibly dynamic.  It's quite likely that Solid's approach to client side rendering  from a pure performance standpoint
[01:23:20] is not going to
[01:23:22] ever, I don't want to say ever, but isn't going to be
[01:23:26] trumped by...
[01:23:29] these compiler-based approaches.
[01:23:31] just because of the level of dynamicism.
[01:23:34] And as long as you can optimize memory allocations fine,  you can do stuff with nested routing.  And that would be--
[01:23:44] would be much more verbose for the compiler and fight against where they want to go. But on the hydration side,
[01:23:52] Being able to use the syntax analysis is something that is very difficult for a runtime approach to
[01:23:57] the handle. Like it's not just a matter of like
[01:24:01] compiling in the dependency arrays.
[01:24:04] so to speak.
[01:24:07] And Svelte actually has a really good approach here, where they basically compile away the reactivity. The problem with Svelte's approach was it kept everything in the single file.
[01:24:17] Like you can't compose.
[01:24:19] reactivity. You can't use stores, but now you're on a runtime approach. You can't use things like  hooks. So what Marco wanted to do is they wanted to make their own hooks that worked
[01:24:33] We wanted to make our own hooks that worked with compilation.
[01:24:35] Um,
[01:24:36] and worked with hydration. And that's essentially where we went. And what we came up with is something called the Tags API. Actually, if I got the Marco Twitter open.
[01:24:51] It's the tags API preview.
[01:24:52] Thank you.
[01:24:53] I'm going to show the pegs API for a moment because I think it's kind of interesting.
[01:24:59] But essentially the tags API is,
[01:25:02] Looks like this.
[01:25:04] which you know, if people weren't already put off by some of the syntax, but essentially,
[01:25:11] It lets you...
[01:25:14] declare state
[01:25:15] As.
[01:25:16] variables, or sorry, state variables, like instead of using class, it lets, it basically lets you use tags. And while the syntax, you know, might take a bit to get used to, it has an incredible power because
[01:25:30] It is analyzable.  I've written some articles on it.  My reactive script article kind of goes into it a little bit.  But essentially, we know that this is stateful, kind of like a hook.
[01:25:40] We've denoted it. And what's cool about this is, sure, this is let, but this could be anything. This could be any hook you want. Because it's a tag, we know to treat it specially, you know.
[01:25:52] We have effects here and most kind of
[01:25:55] things you expect. Let is basically use state, and const, if you see it, is basically use memo,  or in solid, create memo. So essentially, you can just write
[01:26:07] reactive statements in your template
[01:26:09] And then they just kind of work.  This is essentially the gist of it.  Your templates, instead of having that kind of break into the class components like Mark was now, everything is markup.  The for loops, the effects, and even the custom ones.  And...
[01:26:28] I go over a lot of it in this article, Context API.
[01:26:33] But the reason for this is that we can essentially, I'm trying to find the example here,
[01:26:44] But...
[01:26:45] Yeah.
[01:26:46] Thank you.
[01:26:47] Yeah, I mean, we can basically make custom
[01:26:51] tags that have the same thing. Yeah, here's my example I want to show everyone.
[01:27:01] Picture you wanted to make
[01:27:04] your
[01:27:06] core signal or data persist in local storage.
[01:27:12] You see this is the top of every to do MEC example.  So I kind of made this example here,  so you can kind of see it.
[01:27:19] With Marco tags API, instead of let, you can now use, say, local to find your own tag.  And because it's Marco, you don't have to import it.  Pretend these are two different files.  It just finds the local component and lets you initialize the count.
[01:27:34] and set a key.  And then you use it just like state.  Like if this was a let, this would have been the same, right?
[01:27:39] It shows the count and when you click on it, it updates it and it's your typical counter.
[01:27:44] Local.
[01:27:46] like a React hook, essentially.  It defines these props and Marco,  we call them attributes or actors.  And then essentially,
[01:27:54] When we first initialize this, we pull the value from local storage. It's like solid. It runs once. And then basically it's the expressions that run multiple times. Then essentially we parse out the value and then we write an effect that whenever...
[01:28:18] essentially our storage key is fixed, but whenever the dynamic part in here changes, we update. In this case, it's our store, which is our let variable, which is just kind of like a signal. And I know I might not be doing the best job of explaining this, but essentially,
[01:28:33] It's like the cross between Svelte,
[01:28:36] and solid.  It's fine-grained compile-away reactivity.  It works cross-file, but it has the same reactive semantics  as solid.  Some people understand Svelte reruns components.
[01:28:49] It's not as well known, but essentially when you update something, they go, oh, you need to rerun this component, and they just do this really simple diff to check it.
[01:29:01] So in a sense, Svelte under the hood works like React.
[01:29:06] And React forget is a lot like Svelte, surprisingly,  what they presented at that JS comp, because essentially,
[01:29:15] they just started putting these dirty checks all over the place so that when things re-ran and  they memoized they were able to say oh only this change I only need to run it. That's exactly how  Svelte works. Where this approach with Marco is actually
[01:29:29] Kind of like if you compile the way solids reactivity, instead of rerunning a component,
[01:29:34] It actually breaks the component into a whole bunch of different fine-grained reactions and then
[01:29:40] when it,
[01:29:41] through the use of
[01:29:44] topological sorting, kind of like Svelte,  and setting up the execution,  it only reruns the reactions that depend on the data.
[01:29:52] There is a limitation.  It's not dynamic.  It doesn't know if you have a conditional, which side of the branch.  It looks at everything that could be tracked inside of this.
[01:30:00] fact, essentially.
[01:30:02] It's only this effect that reruns.
[01:30:05] when the store changes.  And obviously this one,  because this is the store, but
[01:30:12] Just kind of showing you, it's compiled
[01:30:16] It's compiled fine-grained reactivity.  And as I said,
[01:30:20] On a pure performance level, this probably won't quite get to where Solid is in the browser.  But we've done some early benchmarks.  And...
[01:30:30] Um,
[01:30:32] I can't reveal the exact numbers just yet, but...
[01:30:37] I would say, all I can say is right now the numbers look to be closer to solid than they are to, say, Svelte.
[01:30:45] just in terms of where things are on client-side performance.  But the key to this is,
[01:30:52] This fine-grained analysis
[01:30:54] Sure, that's great.
[01:30:56] for
[01:30:58] performance, right? We can tell, we can basically like solid, it can do even less diffing than most of the frameworks, less diffing than Svelte, less diffing than React or Vue or whatever. But
[01:31:11] The real secret here is because it knows the fine-grained data dependencies,
[01:31:18] It even knows better what can change.
[01:31:23] Right. And, um,
[01:31:25] Thank you.
[01:31:28] And this allows for something which we've been kind of talking about is subcomponent hydration.
[01:31:35] Thank you.
[01:31:37] And I'm going to explain subcomponent hydration in just a minute, but before that,
[01:31:41] Before I'm going to, because that's kind of the future here,  I wanted to show you, because the Tags API is available right now  as a preview demo and you can install it.  But if I go try it online new, you can actually just...
[01:31:57] We're going to release this, but this essentially is...
[01:32:05] is our new playground, and we can just--
[01:32:08] Let me see here. We can just do it right in here right now.
[01:32:17] And Marco.
[01:32:21] Thank you.
[01:32:22] And what was it?
[01:32:26] More semantic.
[01:32:30] You can use the tags API right now in Marco. I've been really enjoying some of the new syntax like this shorthand.
[01:32:42] One of the coolest things is it's super, super concise.
[01:32:46] But essentially, the authoring experience
[01:32:51] of it is I think the real win here.  And, um,
[01:32:57] I actually had an example again from this presentation,  and I posted on Twitter,  but I feel like this makes it like way more obvious
[01:33:07] obvious.
[01:33:09] I mean, we've all kind of been here before. You want to write everything in the framework the best way you can, but sometimes you got to bring in that jQuery chart or something.  And the thing that I didn't really impress on anyone yet about the tags API, which makes it so powerful, it's the same with solid. And this is the power fine grain reactivity.
[01:33:31] but it's easier when you have the syntax in a sense is that,
[01:33:35] Because everything runs once and components aren't a real thing, you can put state wherever it makes sense. So this example is kind of a great example of that. I hope everyone can kind of see. It's like, I don't think I can't make this slide much bigger.
[01:33:50] But essentially...
[01:33:52] Thank you.
[01:33:53] This simple example, we show, you know, pretend you have something.  I don't have the address tag in here.  This is from a slightly older demo, but essentially we're getting a reference.  Again, we're using the tag variable syntax to get the reference out for this element.  And what we're doing here is we're getting a reference to this div and then...
[01:34:10] This mount hook is kind of like on mount and solid. We actually...
[01:34:16] currently don't have this in the tag API, you could just use an effect, but you essentially
[01:34:21] On mount, when this component mounts, you create a chart.
[01:34:25] with the ref to that element,
[01:34:27] and some input data, say that you pass them to your component, and then you return the
[01:34:33] you return the cleanup function.  So this is just kind of like useEffect and React.
[01:34:39] The exact-- you can see on React, the exact same code would begin.  Declare an element.
[01:34:45] Create this use effect.
[01:34:46] which is very similar, set your empty dependency array,  and then draw the stuff in here, right?  Draw it in the devil.  And as I said, I'm using this kind of effectful thing,  because it's always easy to show--
[01:34:59] really emphasize the difference from React by using effects, because the effects APIs are always the clunkiest examples.
[01:35:06] But...
[01:35:07] jQuery, third-party chart library, we got the ref.
[01:35:13] new requirement comes in,
[01:35:14] what do we do if we have to conditionally show this chart?
[01:35:19] Like if we basically need to go, oh, only show this chart if there's a prop for, um,
[01:35:27] make it visible.
[01:35:29] And, you know,
[01:35:31] We've all done this with React, I'm pretty sure.  What we'll do is we'll put some extra logic inside our use effect and we'll set a dependency there.  And then maybe we'll add some conditionals around the logic and stuff.  So let's look at what it looks like in React.  I'm going to focus on this side first.  So first, now we need to...
[01:35:51] tell if we're enabled and then create the chart.
[01:35:55] And if enabled, and then...
[01:35:57] Do maybe a
[01:35:59] optional chaining to tell like if the chart's been enabled, release it and then make the thing depend on the chart and then
[01:36:07] you know, we will mount our element based on whether it's enabled or not.
[01:36:11] So,
[01:36:13] Basically, if you remember that old React hooks example where they showed...
[01:36:20] you know, a class component and you, when you had to change something, you had to change in like six different places because the colors were split, like the different concerns were split all across your template between the life cycles.
[01:36:32] Marco's taken that approach.
[01:36:35] a step further, so to speak, because
[01:36:38] In Marco,
[01:36:40] If you want to make the chart conditional, you literally just wrap it in an if statement.
[01:36:45] And all the life cycles and the refs and the internal state  all will be handled.
[01:36:50] simply by the fact whether this mounts or not.  Because components don't matter.
[01:36:56] here. You don't have to have hook rules or any of that kind of garbage. To be fair,  this is identical and solid, but you can see how much
[01:37:05] um,
[01:37:06] simpler this is in a certain sense in Marco because in solid you have to go back into javascript land  from the jsx to kind of do this you have to go oh okay well
[01:37:16] Now I'm going to, you know, define my effects.  So if you wanted to...
[01:37:22] do this if statement thing, you would still most likely have your effects like react at the top.
[01:37:28] in your JSX at the bottom. So you would probably still, you wouldn't need this array, but you still probably write some logic like this, even though you could nest it, you know, doing some tricks in the JSX. But with Marco, because you use tags, you're more likely to have put the effect next to where it's, where you authored it. So this sort of if statement is
[01:37:49] just,
[01:37:50] does it and while this looks like two changes if you think about it
[01:37:55] you probably just typed the if,  and then cut the whole block and inserted it.
[01:38:00] And in my original example, although I don't have a highlighted version of it here, I took this and was like, what happens if you wanted to actually split it out into a different component?  And again, with Marco, you could just cut out...
[01:38:12] this essentially is taking a different component, and then put the component in here, and
[01:38:18] With React, you'd have to almost refactor back  to the original version and then wrap the component  with a conditional.
[01:38:27] it was way more maintenance.  Essentially, by using markup,  it's kind of like using HTML.  You create a...
[01:38:35] cut and paste editing experience for maintainability. So it's not just write less code now,
[01:38:41] which is like this felt thing.  I'm definitely playing off that.  It's actually write less code in the future.  And this is something that is like a superpower  of fine-grained reactivity.  But as I said,
[01:38:55] Because of Solids templating, we don't really leverage it as much,  because you still tend to write stuff this way with separating.  But with the Marco tags API, we expect that people will have just
[01:39:05] cut and paste WYSIWYG refactor stories, essentially,  because they'll just author--
[01:39:12] the co-located stuff. So essentially,
[01:39:14] It's like the next step of that components are pure overhead story that I've been telling people for a few years because...
[01:39:21] Essentially,
[01:39:23] With React, you chose to break components up
[01:39:27] based on
[01:39:28] how they effectively work.  There's a performance consideration.  That's why this whole React memo thing is--  React forget is happening, because if you don't break up  components, you over-update.  Like, if you put a for loop inside a component that
[01:39:44] has other state and that other state updates, it's going to rerun the for loop when that other state updates.
[01:39:50] Right. That was the whole React for Git example.
[01:39:53] A framework like felt is kind of on the opposite side, most reactive frameworks, because they
[01:40:00] They don't
[01:40:02] want you to make components because components are there,
[01:40:05] like their effects essentially.  They're the things that we run.  So the more of them you have, the more memorization,  the heavier they get.
[01:40:13] So essentially, they're like, don't use components as much as you want.  The bigger you make your templates, the better.
[01:40:21] fine-grained reactivity
[01:40:24] basically makes the component not a consideration.  I know it's not about performance, it's about
[01:40:29] not letting performance dictate how you
[01:40:31] organize your code.
[01:40:33] And when you take something like this approach to templating with Marco, it's taking it even beyond that. It's not only that
[01:40:40] that you get to choose...
[01:40:44] how you break up your components,  and components have no effect on your performance.  You can just do it however you want.
[01:40:52] With Marco, this approach, it's
[01:40:55] It's more of like...
[01:40:57] Components have no effect on how you structure
[01:41:00] structure your code.
[01:41:02] Ever.
[01:41:03] Like in solid, for example, you'll still probably decide to structure it like the react way. So while components don't really matter, you'll just do whatever makes sense. But maybe down the road, there'll be a bit of a refactor job you have to do with Marco.
[01:41:19] refactoring is not a concern.
[01:41:23] Okay.
[01:41:24] So that's the selling point on the tags API on the,
[01:41:29] ergonomic standpoint, because it's all just tags.
[01:41:33] But...
[01:41:36] The other big side of this is where it's getting on the hydration story.
[01:41:43] The hydration story is really powerful because
[01:41:47] we can
[01:41:49] analyze
[01:41:50] granularly
[01:41:51] what's stateful.
[01:41:53] And that means...
[01:41:55] that we can effectively
[01:41:58] Split.
[01:41:59] a component.
[01:42:01] into
[01:42:02] multiple different pieces.  And I actually covered this in my compiler
[01:42:08] stream towards the end if you want to see it. So I'm not going to go
[01:42:12] too much in details about this topic. But what that means is, let's see, did I have another example up?
[01:42:21] No, I didn't.
[01:42:23] But
[01:42:24] Yes.
[01:42:26] Yeah.
[01:42:29] Yeah, let me see here.
[01:42:31] Thank you.
[01:42:32] Thank you.
[01:42:34] Maybe it was-- no.  Yeah, OK.
[01:42:39] maybe there's a good example in here essentially
[01:42:46] We can look
[01:42:49] at those dependencies. It was the constant example I was talking about, wasn't it?
[01:42:56] Um...
[01:42:57] when I was talking about this earlier,
[01:43:02] Yeah, I mean, this is as good as anything. But essentially, we can track and know
[01:43:09] based on
[01:43:10] what stateful,
[01:43:12] which
[01:43:13] which things depend on it using basically a fine grained reactive graph. So
[01:43:18] You can picture...
[01:43:20] If you had a component,
[01:43:26] If you have a component essentially,
[01:43:29] you and you passed and the parent
[01:43:34] passes in data to it that is static,
[01:43:39] We know.
[01:43:41] like,
[01:43:41] like in our uh
[01:43:43] in our, you know,
[01:43:45] Yeah, like, let's...
[01:43:47] Maybe I'll pull up this silly example again, but
[01:43:51] like even in this example here,
[01:43:55] If
[01:43:57] If input enabled,
[01:44:01] is set to true or never passed in from the parent,
[01:44:05] we know that
[01:44:08] it can never update.
[01:44:10] which means that we know that we don't actually need
[01:44:15] to send the JavaScript to be able to render this div or whatever.
[01:44:22] On a per binding level...
[01:44:26] based on the inputs being passed into the template,  based on the dependency graph across files,
[01:44:31] we have the ability to know exactly what could update and only send that part.  And the way Marco is doing that is actually compiling these components into
[01:44:43] a bunch of separate components. You can picture
[01:44:47] Yeah, you know what? Give me two seconds here and see if I can pull it up. I did show this on the previous stream, so I'm just going to see if I can pull this up out of my Google Drive again.
[01:44:59] So,
[01:45:00] If I can find
[01:45:03] find it because I
[01:45:05] pretty sure I grabbed this
[01:45:07] - All right.
[01:45:08] talk from Michael.
[01:45:11] I saw it a little bit earlier. Give me just a minute.
[01:45:15] Um...
[01:45:18] Thank you.
[01:45:27] Oh, man, I have so many of these talks.
[01:45:30] This is my fault. I should have prepared this one
[01:45:32] I wonder if I might stream notes from last time.
[01:45:36] Compilation notes. I might actually have it.
[01:45:40] Yes. Thank you, Ryan.
[01:45:45] Yes.
[01:45:47] Thanking myself from the past.
[01:45:51] *laughs*
[01:45:53] All right.
[01:45:54] let's let's let's spend a couple minutes talking about this one
[01:46:01] I'm just going to.
[01:46:02] Thank you.
[01:46:03] Thank you.
[01:46:03] This is the key on the hydration part, right?  Find the component, most frameworks,
[01:46:08] when you have to hydrate something, you find the component boundaries,
[01:46:12] We render the component,
[01:46:13] basically in the browser, you don't re-render the div, but you compare what was re-rendered  to what was server sent and then attach the vent handlers.
[01:46:23] where all we want to do is find the button and attach the vent handlers, right?
[01:46:27] this is a lot of work that can be avoided if we can make our hydration resumable.  And this is kind of the selling point on that quick swing going on.  But the thing is, there's lots of ways to make your hydration resumable.
[01:46:39] Most frameworks aren't set up for it, but there are different ways to do it.
[01:46:44] And I've been showing this counter component. This should kind of look familiar to you now.  And hopefully people who watch the compilation stream before...
[01:46:53] going to be too concerned about me going over the skin. Maybe it'll make more sense now.  Right. I already showed what the tag variable was. We show the count. We click on it, whatever.
[01:47:01] But Marco...
[01:47:02] hide compiles it into multiple different exports. The component actually
[01:47:08] becomes granular. And this is actually very, very similar to quick, except our granularity
[01:47:14] Quick go, so here's the event handlers, here's the view code, here's like the component state code.
[01:47:20] where Marco splits
[01:47:23] all the templates here, the view code,
[01:47:25] this is some encoded walk thing in terms of how to walk through the elements. This is actually like element first child, next sibling, next sibling encoded. But it's something Marco splits
[01:47:36] the code paths between
[01:47:38] stuff that needs to be rendered in the client, stuff that needs to be hydrated, and splits those by inputs to the template.
[01:47:47] everything is split fine grained. We don't just have like a single state. We actually have
[01:47:53] not only split out the event handlers, which
[01:47:56] need to be added during hydration, but we actually split
[01:48:00] based on each separate input so that when the parent imports it, parent can go, oh,
[01:48:07] Am I passing from its own analysis, am I passing static data? If I am, I know that I don't need
[01:48:14] to import the dynamic version
[01:48:17] of the
[01:48:19] of the code and we can actually tree shake it, essentially, as our ability to do this. So essentially in this example here,
[01:48:26] for a button.
[01:48:27] which is a completely stateful client-side component.  We can have a render function, essentially.  This is like the client-side render, which basically
[01:48:37] initializes a count to zero, essentially. So going back to our example, this is letCount0.
[01:48:45] And it calls Hydrate. And when you render in the client, what you do is you
[01:48:52] initialize it with the value.  It does write, which is kind of like a dirty check.  That's what this if is.  And if it is, update the div.
[01:48:58] But if we were rendering this on the server,  we wouldn't call render, we'd call hydrate.
[01:49:05] and all hybrid does is add the click handler.
[01:49:08] which is here. And it doesn't actually need
[01:49:13] the other code, essentially.
[01:49:16] And Michael actually kind of shows this in this example,  essentially, because when you call hydrate,
[01:49:25] Essentially, you need the click handler,  you need the ability to set the new count,
[01:49:32] But we don't actually need the code for the template.  We don't need the code here for the walks.  And we don't need the code for--
[01:49:43] the rendering. And this is kind of like our default export for the component. It's not that important. We don't need that either. And while this seems like a bit of code,
[01:49:52] when you minify it,
[01:49:54] we actually, on this very, very simple component,
[01:49:57] shrink the component in half.
[01:50:00] This is a stateful component too.  This is like a class component today in Marco.
[01:50:04] we've shrunk the component in half on something that's stateful.  If it wasn't stateful, the whole thing would be gone, right?
[01:50:11] But this is just a normal stateful component.  But because nothing really revenders,  we just update some numbers and attach a click handler,  we were able to use our analysis of the reactor  graph to actually split the component code down to 50%.  And yeah, that example is just showing  that if you send static data in, then we could even
[01:50:37] like remove more stuff. But my point is for a stateful component,
[01:50:42] because we break things up into these imports,
[01:50:45] I mean, this is a simple stateful component, but you could pretend if you had two different states coming in from the parent, you could choose what to actually import and actually tree shake parts of the component out of the compiler.
[01:51:00] So this brings up a really good question actually, which was, what about reducing data sent to the client like you showed with adding class the Hack News? Will this be a concession of the tags API? Yeah.
[01:51:12] That's the thing. With the class component, we always had to serialize the inputs coming into the top level components. The approach that we're going to take with hydration, with the subcomponent hydration, is a little bit more interesting because
[01:51:29] Thank you.
[01:51:29] It's not guaranteed to send less data, but it only needs to send the data that is read
[01:51:37] in
[01:51:38] An effect?
[01:51:39] or in an event handler, because those are the only things that need to be
[01:51:44] Um,
[01:51:47] essentially ran in the browser.
[01:51:50] So we have the initial state
[01:51:54] in whatever signal we initialize, right? If we did need to
[01:52:01] handle it, but essentially what we can do, and I don't have a good graphic for this to explain, but essentially
[01:52:08] The memos or, you know,
[01:52:11] um, consts or whatever, like the, the derivations that run on the server don't need to rerun on the client if their inputs aren't stateful.
[01:52:20] Essentially. So
[01:52:23] We have this ability to
[01:52:26] Prune off parts of the reactive graph.
[01:52:29] and not send them to the browser,
[01:52:32] and serialize only the data closest to the stuff that's actually being used in the browser, which means that this is this is a huge difference from something like Quik.
[01:52:41] Because quick...
[01:52:43] Hydration is very similar to this.  They just have the event handlers, and then
[01:52:48] Um,
[01:52:50] when they go and hydrate, they just go, here's all the event handlers. And then when you click that button the first time,
[01:52:57] It goes and loads all the code, but let's forget about the code loading aspect. Let's pretend it was already there. Like they knew this part of the page was a place you used.
[01:53:06] they then rerun their components.
[01:53:09] So hydration resumes, but execution
[01:53:13] is like a BDOM.  You rerun your component code, and you generate it.  With Marco, because it's fine-grained,  and we serialize the data closest to where it's used,
[01:53:23] we can actually resume...
[01:53:26] from the middle of the component.  Like we don't have to rerun the component.  We've already calculated the derived values.  Like, you know how they can solid, like if you update,  if you have a computed
[01:53:39] or a memo, sorry, you have a memo, and you have another signal, and they're read in your view, and you update that signal, even though it calls both functions, the memo doesn't run again. Like, you know,
[01:53:52] You've already calculated that value. The memo only reruns when that value is changed.
[01:53:57] Marco, you know, and it gives that really fine-grained updates. Marco 6's approach here basically lets you resume fine-grained updates like that from server-rendered code. So,
[01:54:10] it's more than resumable hydration.  Like the term resumable hydration is being kind of thrown around right now as like, you know, basically...
[01:54:18] not redoing work from the server at hydration time. But Marco actually doesn't redo work from the server
[01:54:24] on update time either.
[01:54:26] In my mind, that's actually true, presumable hydration.  But I mean, it's hard to say, as I say, quicks already kind of
[01:54:32] taking that term. So
[01:54:36] it's always kind of hard.  So more truer resumable hydration.  But essentially, the idea here is,
[01:54:48] Marco can literally...
[01:54:51] resume where the component left off. It's not like
[01:54:55] just don't do any work at hydration, and then re-render the component when something updates.  It's like literally render the component with as much information as you know, send  exactly the minimal amount of data you can to the client,
[01:55:08] you know, that you need. And then when the component updates,
[01:55:13] only rerun the small separate little things that actually update. Don't rerun any components.
[01:55:18] So yeah, like this is pretty crazy stuff.  We don't have this completely yet.  We're working on the first demos of it on the client side.  And that's kind of--
[01:55:29] Marco, you know,
[01:55:33] is, yeah, we're kind of like building the alpha now.  We're past the prototype stage.  We've proven this out.  We're now essentially in the process  of building the first version of this and building the compiler.  But the runtime approach seems to work pretty well.
[01:55:48] So hopefully that answered the question about the data reduction.  I'm not going to say the data reduction is less than we have now, but it enables...
[01:55:58] This crazy ability. And we haven't talked about async and async is a little bit more complicated, but what you realize in this approach, and this is the real clincher here is if you serialize the data closest to where you use it.
[01:56:12] and you don't rerun the component when the component loads in the browser.
[01:56:15] You don't need a cash card.
[01:56:18] to resume. One of the biggest challenges when you do isomorphic fetching is that
[01:56:28] You fetch it on the server.
[01:56:30] And you get the data and you serialize on the page and you fetch it on the client and the client and the client goes, you don't want to fetch on the client. But when you hit the code to fetch it, you go, oh, it's okay.
[01:56:40] I already have this data, don't fetch it.  And that's basically how Solid works right now with its resources.  And it's very common.  You basically pre-seed a cache so that you don't have to fetch again on the client.
[01:56:50] And then you now can hydrate everything with that data.
[01:56:54] In the Marco case, because
[01:56:57] that data fetching is
[01:57:00] like
[01:57:00] is--
[01:57:02] How should I put it? It's before you get to the event handler or the view.
[01:57:07] It's output.
[01:57:09] if red
[01:57:11] by the effect, like close to the fact, that's what gets serialized. So when it goes to run in the browser, it knows not to rerun the async function, because it's not it's going to be in the render function, it's not going to be in the hydrate function.
[01:57:24] So we don't actually have to send
[01:57:27] the whole cache, we can actually, we can actually, um,
[01:57:31] just send the data that's used in the event handlers and the effects and
[01:57:39] be confident that we're not actually going to refetch because it's outside of that scope.  I hope that makes sense.
[01:57:51] Yeah, fine grained reactivity is the key here. I mean, this is a large part of how I ended up working on Marco. I was viewing all this stuff about solid and, you know, fine grained reactivity and, and about the, you know, no component overhead and all this stuff. And Michael and Dylan were like,
[01:58:06] Like kind of like, that's it.
[01:58:08] Like we weren't sure what the solution would look like, but they're like, this is the answer to the hydration problem.
[01:58:14] essentially, like basically fine-grained execution semantics.
[01:58:20] The problem was we actually kind of played around with the idea of bringing something solid in and it probably would have made development. Like Marco6 is probably already out if we went that way.
[01:58:29] the ability to, we wanted this resumable hydration,  and it's hard to do that with a runtime approach.
[01:58:37] But it's hard to do a compile time approach with fine grain unless you have the
[01:58:43] semantic execution. This is why I've been talking a lot about the language reactivity, because I believe
[01:58:49] with the language of Reactivity, the ability to compile is infinite. You can describe the intent very well through the language. And even React has talked about how they're used as a language. And it does have a lot of that similar compilation analysis. If in solid we forced everyone to use a prefix, then we could probably do something similar. But
[01:59:14] you know,
[01:59:15] There's different paths to take here, which actually brings us into...
[01:59:21] Maybe the last and final section of our conversation today, which is...
[01:59:28] Sorry, just making the banner. It doesn't matter how much more time I give myself. I'm
[01:59:36] I'm never ready.  MPA is in the future.  This is...
[01:59:39] This is even more futuristic because right now,
[01:59:42] with Marco Six, which should be coming out this year.
[01:59:47] definitely have Elphabeta. I don't know if the final release, these things take time.
[01:59:52] Yeah, I people expect that now after you know how long reacts 18 is taken so I don't feel as bad saying
[02:00:00] that, but these things take time.
[02:00:02] And I think that's a good question.
[02:00:03] Where do we go from here?
[02:00:06] I'm basically showing the way that we could have the most
[02:00:10] optimal
[02:00:12] compiler analyze
[02:00:14] partial hydration combined with streaming. This is pretty incredible stuff from a technology standpoint.
[02:00:21] As I said, we got kind of deep dive on the technology here, but
[02:00:26] The authoring experience that I showed you is just use some tags.  So guy who makes his blog site and just writes HTML gets the benefit.
[02:00:35] But
[02:00:37] I think there's a bigger question here and Rich Harris kind of posted it to post it to me a while back because he was like,
[02:00:45] But you know,
[02:00:47] ultimately no one actually really wants an MPA. We want client-side routing. We want that flexibility. We want that ability. And
[02:00:54] So this aspect is not lost on Marco or the Marco team and stuff.  Like, obviously, you can add client-side routing.  I think I mentioned that was kind of like a trend in December where a bunch of frameworks like Quick and I'll started adding...
[02:01:12] turbo-like routing or just experimenting with it.  But that's generally...
[02:01:17] clunky.
[02:01:18] So where we need to, where this goes is,
[02:01:25] I feel that MPAs will have...
[02:01:28] some form of client-side routing, as I said,  for your simple apps, I just showed you,
[02:01:34] like I'm all about apps and like interactivity and JavaScript and all that kind of stuff but like
[02:01:41] the blog site or the content site or whatever, like you're not really suffering from having the MPA. But
[02:01:48] You know, I said that side, the Marco quick side, they are trying to approach the center too, right? They want to do more app-like things. I think the way this is done and the way we do this is
[02:02:02] involves, definitely involves client-side routing.  And what that looks like,  we're still obviously figuring out.  But I think the key part about it
[02:02:09] is how do you...
[02:02:13] swap the HTML from the server,
[02:02:17] Yet.
[02:02:18] keep fine grain
[02:02:20] updates, right? React server components have to come in in this conversation because
[02:02:26] they are sort of a version of this coming from the single page app side.  And for something like solid, I imagine, um,
[02:02:34] that's where the research will go, because I don't think we'll ever be able to
[02:02:39] compile
[02:02:40] like Marco does. It's just
[02:02:42] this is  incredible stuff, honestly.  And these guys were already on this track  to a certain degree. They were on it  before I even joined the team.
[02:02:54] But  for the Marco side and the  NPAs, I do think there is an  interesting convergence because I think
[02:03:01] client-side routing in an MPA that is  presumable like this.
[02:03:05] that is hydratable out of order like this.
[02:03:08] essentially will want the ability to hydrate a button or section of the page when you click on it
[02:03:15] And then
[02:03:16] choose when you interact
[02:03:19] say with the router,
[02:03:20] to load the router at that point and kind of be able to
[02:03:26] navigate to a new page that is server rendered,
[02:03:30] but not necessarily...
[02:03:34] you know, wipe everything out. Obviously, when you go to a new page, you can just wipe it out with HTML and we don't care, right? But
[02:03:39] Pretend you're on a search page, you know?
[02:03:42] Like everyone's favorite search page, whatever.  Not favorite.
[02:03:47] This is an MPA.
[02:03:48] Yeah, very minorly.
[02:03:51] The page reloads, you can tell because of the way the browser interacts.
[02:03:56] Like,
[02:03:58] What if we wanted to...
[02:04:01] I mean, this maybe isn't even the best example, but what if we want to persist elements underneath the part that changes?
[02:04:08] And I think that's going to take a different type of approach,  one that we haven't seen yet.  It's not turbo.  We need a way of actually...
[02:04:19] perhaps fine-grained even,  be able to
[02:04:25] send updates from the server
[02:04:29] with the new content,
[02:04:31] but not necessarily replace all the content HTML that's already there.
[02:04:37] Yeah.
[02:04:37] And just how that works
[02:04:39] I'm not sure, but I think fine grained has the tools and that's the research that's going to go into, as I said, I think
[02:04:45] it's possible that everyone is actually going to be looking for the same  solution. This is my prediction part of the show here, but it,
[02:04:52] You know, I actually think there is
[02:04:54] Obviously, VDOM libraries like React have an angle, but
[02:04:58] The solution for non-VDOM approaches to this might
[02:05:03] be the same across single page apps and MPAs.
[02:05:06] So,
[02:05:08] I think Dylan guys on the Marco team have some really good ideas here.
[02:05:12] This has been something that I've been racking my brain about,
[02:05:16] I think that's the next really cool thing.  I want to see more projects trying to make things like server components.  I want to see different types of routing that are smarter than like XHML or TurboLinks or whatever.
[02:05:33] you know,
[02:05:34] approaches in non-VDOM things. I think that's the gold rush. As I said, for Marco,
[02:05:42] Yeah.
[02:05:43] the focus versus this.
[02:05:45] this ability to...
[02:05:48] Because once you have this, you can just build upon it because you know you're sending the least JavaScript.  You know that you have the most efficient hydration.
[02:05:55] you know that you have the ability to load JavaScript out of order.  But...
[02:06:00] It's going to be interesting to see what other kind of solutions or how you can build upon this in this space. I think that's the future. I think MPAs still are going to be good for the majority of apps, but I think you're going to see MPA frameworks.
[02:06:14] come at the single page app frameworks.  I think the convergence is real.  Transitional apps is real.
[02:06:21] I'm excited to see what that looks like.
[02:06:25] We always have to remember, like those quotes I showed you from big proponents of SSR and use the platform basically saying it was useless a few years ago. What we think we know now,
[02:06:36] might be completely wrong in a couple of years.  So, you know, take it all with a grain of salt.  But it seems to me that that would be a really interesting and fun thing to research into.  And it's definitely something that has my attention now that I've got streaming and Solid and I've kind of finally finished the story of Solid having...
[02:06:57] React, Parity, and Marco, as I said, when Marco 6 comes out,  we're going to see the state of the art on MPA stuff.
[02:07:05] At that point...
[02:07:07] I don't know.
[02:07:09] Do they meet in the middle?  This will be really exciting.  But...
[02:07:13] I definitely am very interested in all the technology being developed.  I think Quix got part of the answer in there.  I think...
[02:07:19] Astros.
[02:07:20] client visible and like they're very simple API. I think while it might not be the best solution for partial hydration, like in terms of like how granular it is, it's a good solution for lazy loading. And I think that
[02:07:36] I think that in the future,  we're going to need to separate lazy loading and partial hydration boundaries.  There are things that it doesn't make sense.  When you get super, super granular on –
[02:07:51] partial hydration, you don't necessarily need to be super, super granular on lazy loading.
[02:07:56] Sometimes...
[02:07:57] You just want to save the work being done in the browser.  But it's OK to ship a little bit more of the JavaScript,  because the last thing you want is someone clicking a button  and having to like--
[02:08:06] oh, now it loads.  That's why Google probably is looking at changing the metrics.  It's hard to measure this, but we might have a middle zone  before we get there where people are essentially...  How should I put it?  Essentially...
[02:08:22] just like turning off the script tag, so to speak, and then loading it lazily. Like there's a lot of ways to do really poor, poor lazy loading and score good on Lighthouse. And my biggest fear is
[02:08:34] like we're going to see that we're already seeing not that but we're already seeing like you know
[02:08:40] the zero kilobyte JavaScript banner being raised by frameworks that essentially aren't partial hydrating, right? They're like, "Well, look, we can do zero kilobytes of JavaScript because it's percussive enhancement." So, and I'm like, "Yeah, every framework can. You just remove the script tag." But the difference is,
[02:08:59] When you add the script tag back,
[02:09:01] in Astro or Marco or Quick.
[02:09:04] you don't bring all the JavaScript with you.  You just bring the stuff you need.
[02:09:09] were in other frameworks.
[02:09:12] Popular frameworks, it does mean that, it's binary.
[02:09:19] Thank you.
[02:09:22] Do you mean server-side rendered islands?  Yeah, yeah.  This whole conversation is kind of about islands.  Marco just makes islets.  It makes the smallest possible islands.
[02:09:33] our island, like the possible, smallest possible islands, and it does it automatically. So,
[02:09:39] Yeah, partial hydration in islands are kind of like the same term. So what I'm
[02:09:46] I'm talking about islands and islands.  When I talk about this routing solution, I'm talking about client islands inside...
[02:09:53] inside server islands, like...
[02:09:56] and different parts of the page being replaced
[02:10:00] with server chunks and then still being able to reintegrate those client  parts. This is pretty complicated stuff, but I think, you know, like,
[02:10:08] React, I'm
[02:10:10] Like,
[02:10:11] For a single page app and server components, the way React is going is probably the right sort of research.  I want to see what that looks like outside of VDOM.
[02:10:20] But I think the convergence is happening there on server components.
[02:10:25] As I said, I've been critical of server components  because to me, they don't actually solve the...  They're good for this...
[02:10:32] Thank you.
[02:10:33] the initial load is not their win.  Like just going to server components with React
[02:10:38] like that alone, like doesn't solve like the same stuff as partial hydration. Like that's not going to make React good at e-commerce, you know, like if just because you have server components, you haven't suddenly like solved that. But it is good for scaling large applications. There's a lot of applications for server components. And I think
[02:10:56] I think, you know,
[02:10:58] There might be an opportunity for server component like things to actually be decent enough for something like e-commerce if done with a small enough framework and done in a smart way.  So I am interested to see how that works.  Does Marco provide anything interesting around data mutation remix and forms cool again?
[02:11:16] We don't have a built-in.  Dylan actually made this the other day.  We took it out of the template  because we didn't standardize on it,  and we didn't wanna be too opinionated.
[02:11:26] He's got the code, if anyone's interested. He completely remade the... He saw Remix and he was drooling. He was like, man, if this just wasn't React, it was like, he's like, this is how I've always wanted my stuff to work.  So I don't know if we're going to publish anything about that, but he does have the code to do this kind of magic form mutation that works perfectly in our Cloudflare template.  So...
[02:11:51] yeah we'll we'll see what we can do about that it is definitely very nice to have this mutation story  um and obviously with something like marco which is already just you just use the html  like forms are the way you should be doing things right like it just it makes sense for the model  um and so like this was a no-brainer i i'm pretty we don't have an official solution but yeah i mean
[02:12:14] In the.
[02:12:16] we will. It's a pretty obvious thing for us. We already actually built it.
[02:12:22] It's actually surprisingly easy to build, so...
[02:12:25] Thank you.
[02:12:27] Yeah, okay. That is actually most of the content in the stream. I talked about the features of MPAs, I talked about Marco, I talked about a whole bunch of awesome, awesome stuff. So, um,
[02:12:38] I'll field a couple more questions here while I finish my Long Island, but...
[02:12:43] Um,
[02:12:45] Other than that, I'm good to call this one.
[02:12:48] I hope this shorter, more focused stream approach works for people better.
[02:12:53] I start a little bit later at 8 o'clock because, as I said, I get more time for myself. But yeah, I'm
[02:13:00] I'm pretty excited.
[02:13:04] This is all going to be posted on YouTube and whatnot.  But yeah.
[02:13:09] It was a good stream. Thank you everyone for joining me tonight and hope.
[02:13:15] gained a little appreciation for how incredible Marco is,  both from just an authoring experience standpoint and from a technology  standpoint. And hopefully, you know,  you'll give it a consideration in the future and, you know,
[02:13:28] As I said, go to the JS, the state of JavaScript survey, look it up.  I know it's buggy.  Go in there, give Solid a nice nod and go type Marco in the box.  It does autocomplete.  The survey is aware of Marco.  So...
[02:13:43] Give us a shout out in the survey. Get a little attention for
[02:13:49] both the projects i'd definitely appreciate it and actually anything astros in there  just just just support the projects you love please do fill out that survey and uh what's the term here
[02:14:02] Like, comment, subscribe.
[02:14:06] We'll see what we do next week, but until then, have a good one and enjoy your weekend.
[02:14:14] Have a good one.
[02:14:16] Thank you.