---
title: "dnuh-jKuDpk"
slug: "dnuh-jKuDpk"
duration: "3:01:12"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/dnuh-jKuDpk.m4a"
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
[00:00:02] Hi, welcome to my stream tonight. I am late. Thank you, Michael. I am late.  I got tied up reading a couple things, but here we are. We can get started pretty quick here.  Thank you, everyone, for joining my stream tonight.
[00:00:15] Um,
[00:00:17] Sorry to make you all wait, but...
[00:00:20] This has been quite a week for performance talk and React, and I'm absolutely thrilled  to talk about some of the stuff we're talking about today.  Obviously, a lot of topics about the edge and streaming and SSR, which...
[00:00:35] It's something very close to what I've been working on.  But also there's been a lot of discussion on...
[00:00:40] uh,
[00:00:41] Thank you.
[00:00:42] Sorry, yeah, that's the main thing on that side. But that's one half of the stream I want to talk about. And that's what I do with current events. And the other half is that I've never actually taken the time to really look into React server components. I've kind of been wrestling with the concept of them.
[00:01:01] And
[00:01:02] you know, that's all fine. But I had some misconceptions I realized until very recently.  And I think it's important to actually look at it and get a feel for it because what I've realized is server components are a lot closer to the partial hydration techniques that I've been studying and implementing in various solutions. So I think
[00:01:26] We're in for some interesting stuff hopefully tonight.  So thank you all for joining me.
[00:01:32] All right. If you're here, come and say hello in the chat.
[00:01:36] Thank you.
[00:01:39] Thank you.
[00:01:40] Hopefully the audio and video is fine. You can hear me.
[00:01:47] Thank you.
[00:01:48] All right.
[00:01:50] Thank you.
[00:01:51] But without much further ado,
[00:01:57] I guess I'm going to get started on
[00:02:01] Oh, here we go.
[00:02:03] There's always this delay, right?  You just kind of got to sit there and pause and wait for people to come in and say hi.
[00:02:09] All right. So we're doing okay? All right.
[00:02:13] Well, then let's get started with This Week in JavaScript.
[00:02:20] As I was saying, a lot of talk about...
[00:02:27] about performance and streaming and whatnot.
[00:02:31] Where last week, a bunch of news about Marco, and the week before I was talking a lot about Solid, Solid Releases, Solid Hackathon. It's been all remix. Like, let's just face it, this week's been all about remix. And, uh...
[00:02:45] It all kind of started with this blog post.
[00:02:50] I
[00:02:52] One question, they did it. They basically decided to make the Next.js remix comparison. And  that's pretty cool. I've got to admit, I was pretty delighted to see this article. I do a lot  of the same kind of testing and benchmarking, you know, on page load and looking at different  performance. But for me, it's always kind of like an apples to bananas kind of comparison.  I don't get to compare React against React, generally speaking, because
[00:03:16] Usually it's solid or Marco or whatever other...
[00:03:24] you know, tools that I'm kind of working on.  And in the case of Remix,  they get to do the React-React comparison.  You can't just kind of hand-wave and go,  well, React slow or, you know, whatever.  This is just pure looking at the architecture.  And I think...
[00:03:41] I think that's great because a lot of the conclusions and a lot of things that Remix has been putting out there
[00:03:46] I agree with completely. So to actually have it codified as a well-written article and kind of see it in practices actually just
[00:03:56] Absolutely awesome. So,
[00:03:58] Yeah, let's just start there for a moment here and kind of take a quick peruse of this article because I did read it. I didn't actually read the whole article. I was trying to read it again before the stream started, which is why I was late. But
[00:04:14] You know, Brian Florence decided to answer the question finally, you know, what's the difference between Remix and Next? And he's trying to do it in a way that's not dramatic. But I mean, let's face it, anytime that you're doing this sort of thing, you are kind of
[00:04:29] putting it out there. You've got to tread carefully. You've got to make the comparisons as  similar as possible. But I mean, there is a point being made here. He's got a big list of TLDRs,  the takeaways, right? Basically, Remix is as fast or faster than Next at serving static content.  Remix is faster than Next at serving dynamic content. Remix enables fast user experience  on slow networks. Remix automatically handles errors, encourages client-side JavaScript for
[00:04:59] There's a whole bunch of differences here.
[00:05:02] But the big takeaway that I found when reading through this article was largely...
[00:05:08] Remix is trying to position that static site generation
[00:05:13] isn't necessary to get the best performance.
[00:05:18] there are other architectural tricks you can do to get that performance. And in that, I agree.
[00:05:24] Completely. So they went and they actually rebuilt an e-commerce page that...
[00:05:34] that had been built in next previously. And they did it in two different ways. I honestly read this article if you want more background. Essentially they did like the port where you know you just lift and move it into Remix. Being a react app they can do that. And the second thing they did was actually rewrite it the way they would write it using Remix. And
[00:05:55] they're kind of justifying that.  I don't know if everyone remembers this  from a couple of months ago,  Lee was kind of going off telling, saying like,  hey, look, it's really good to see this competition  because it's kind of pushing other frameworks to improve.  And when that happens, developers win.  And I think that's a pretty accurate statement.  Although I think sometimes when you're the big name  or the encumberant, like say, Svelte pushing React,  I don't know,
[00:06:24] I don't know how much like a, you know, a feather pushing, uh,
[00:06:30] I don't know, 300 pound elephant kind of
[00:06:33] has that kind of impact by comparison.  But you know that at least the mind shares there.  And honestly, maybe this was prophetic because...
[00:06:43] React forget.
[00:06:45] is a perfect example that even if React doesn't go that way,  the fact that they were talking about that,  that they demoed that at React Confs,
[00:06:52] does suggest that they heard it, right?  So there is a lot of truth to this statement.  And he called it out right there  that Remix was pushing next.
[00:07:02] I don't want to open this. No. Okay. So anyways, skipping ahead, blah, blah, blah. They're doing a much visual page test. And I love this because you can actually see the visuals here of the timing of it when it loads. And obviously the remix rewrite
[00:07:17] tends to be the winner here.
[00:07:20] Mm-hmm.
[00:07:22] They tested on a number of scenarios and
[00:07:26] Thank you.
[00:07:27] Honestly, the initial results are not terribly surprising.
[00:07:32] Yeah.
[00:07:32] What did I say here? Okay. This one is that all three versions are so fast, it's not even worth comparing who's faster. Yeah, I mean, between the port and next, it's probably not that much of a difference. The rewrite definitely is faster. He says not care, but 300 milliseconds for visual for a e-commerce site actually will make it dimmered some money. It's been shown.
[00:07:54] But essentially changing the speed to like something slower, um,
[00:08:04] Let's see what's going here, slow-mo cable.
[00:08:08] Oh, they're just showing it back in slow-mo, so you can actually see the time.
[00:08:15] visually speaking,
[00:08:18] Oh, I see.  Yeah, this is actually good that they went this far in the analysis.  Because the truth of the matter is the total load time is longer on Next.  But the main content has actually loaded.  Like, the largest contentable paint is actually in around the same place as a Remix port.  So this kind of shows that there isn't actually that much difference.  And this is probably the least interesting part of this comparison.
[00:08:40] But essentially what they're saying is that
[00:08:45] Next is actually using static site generation.
[00:08:48] and the pull the data, and then the stuff that essentially they can't
[00:08:54] know ahead of time, they fetch from the client.
[00:08:58] Thank you.
[00:08:59] But, okay, so, Remix doesn't support SSG, we support HPD scale well revalidating caching directive. Blah, blah, blah. And result of the same. Static document at the edge, even though it's the end. So, it's essentially the same thing, right?
[00:09:16] Instead of doing static site generation, they're just caching the document until that new version has been
[00:09:23] put out. So in a sense,
[00:09:26] Someone once said that the whole difference with all the SSR strategies are when you do the rendering. Do you do it at build time? Do you do it at runtime?
[00:09:40] to do it on request. This kind of mentality is really basically the difference here. The biggest thing about this article, and as I said, I'm kind of skimming through here pretty quick is I don't think most people should find any of the stuff that surprising. And here they go. Now they're showing the difference.
[00:10:01] Yeah, so because S&T doesn't scale the dynamic pages. Yeah. Switch to client-side data fetching. Okay, yeah. So, okay, sorry. I was wrong. This was all just cached, these examples, and they're roughly equivalent. What they're showing here now is this is what happens when you actually have to do client fetch in these examples.
[00:10:31] before doing that...
[00:10:35] Before doing that, um,
[00:10:37] Thank you.
[00:10:38] the request. So you're naturally waiting on it. And it's actually really awkward if you both have to do dynamic rendering on the server and dynamic fetching on the client because you actually end up paying twice.
[00:10:51] Sorry, are you saying my volume is a little quiet?
[00:10:57] Just anyone can confirm.
[00:11:00] I can see if I can adjust that. What's my audio that? Yeah, you're right. I'm a little  bit on the quiet side.
[00:11:08] Let me see.
[00:11:11] See if I can...
[00:11:12] Hmm, maybe it's the angle where I'm sitting.
[00:11:19] Thank you.
[00:11:21] Thank you.
[00:11:22] I turned your volume down. Yeah, okay.
[00:11:26] It's fine. Okay. Yeah. All right. Let's just continue here. Okay. So,
[00:11:31] Because SSG doesn't scale dynamic pages. So this shouldn't be surprising, but all they're saying is,
[00:11:39] is that as soon as you start fetching in the browser, things get slower.
[00:11:45] Yeah, I mean, most of this is talking about
[00:11:49] how they can use the cache to load things faster.
[00:11:53] So as much as I'd like to pull some crazy,
[00:11:59] element out of this.  This honestly  is a fairly...
[00:12:05] uninteresting
[00:12:07] um
[00:12:09] comparison, at least up to this point.
[00:12:12] Thank you.
[00:12:14] So where things start getting more interesting is they were trying to show that Remix was faster on a cache miss.
[00:12:23] And I think that's interesting because...
[00:12:27] Essentially, it doesn't take very long to render a page.  I don't know if people know this.  Like, the actual time it takes, if you ignore the data elements...
[00:12:40] If you ignore the time it takes to do the data fetching,  to actually render a page only takes maybe
[00:12:46] handful of milliseconds in any framework.  So when certain frameworks are like, oh, we're 20 times faster on the server, 10 times faster on the server, it's like,
[00:12:55] oh, that means you take one, like,
[00:12:58] 0.5 milliseconds and someone else takes
[00:13:01] 10 milliseconds.  Like, it's not a huge range of difference.  But I actually-- as I said, these results  are really kind of interesting because--
[00:13:10] This is all about the effect of the cache. And one of the arguments here, and I'm going to get into this a bit later, is you're saying that on a server,
[00:13:20] you can make the connection to the API or the database stuff like ahead of time. Like you have the ability to to have already like warmed it up. Where on the client, all you can use is this link pre connect tag. And
[00:13:33] Essentially, they're dealing with pretty fast APIs here. He mentioned, you know,
[00:13:38] Turns out the Shopify API is quite fast.
[00:13:41] you know,
[00:13:42] If the user browser could make the request to Shopify that  quickly, the Remix server can certainly do it faster.  The user's connection to the cloud is always  going to be slower than your servers.  Probably best to keep the data fetching there.
[00:13:52] Thank you.
[00:13:53] Generally, yes, but I'm going to show you something pretty cool in a minute. But bottom line is caching is nearly pointless when using the Shopify API cache hits or misses will be virtually indiscriminate from each other. It's best illustrated by slowing down the user's network and seeing what happens, right? And do
[00:14:06] Well.
[00:14:08] Do you see this? Yeah.
[00:14:11] Thank you.
[00:14:12] Thank you.
[00:14:14] Next can't load images until the data loads,  but it can't load data until it loads JavaScript.  It can't load.  Yeah.  So this essentially is just showing the client side  rendering.
[00:14:24] is
[00:14:24] kind of
[00:14:25] terrible when your network's slow.
[00:14:29] So,
[00:14:31] you know,
[00:14:32] There's this whole thing and
[00:14:35] you know,
[00:14:36] Shopify, Coors, Handshake, all this stuff.  I think this is all true.  The funny thing is I'm going to show you something that actually suggests
[00:14:45] almost the opposite of these conclusions in a minute.  But I generally think for the most part, this is true.
[00:14:52] I just think it's interesting because there was a time...
[00:14:58] when, and I talked about this in the last stream, where people were pretty content with client-side rendering.
[00:15:03] And, you know,
[00:15:04] This is why Jamstack exists.
[00:15:07] What Remix has done is shown a very optimized path to React.
[00:15:12] Yeah.
[00:15:13] But you're still kind of paying other costs. There are so many costs when you're doing when you're doing service side rendering and hydration and whatnot.  So I love how in depth this article is. I'm going to be reading and referring to this one for ages to come.
[00:15:31] Thank you.
[00:15:32] OK, Edge native.
[00:15:35] Yeah, okay.
[00:15:38] Thank you.
[00:15:39] I need to kind of review and see where we are here.
[00:15:44] Yes, so showing the difference of deploying to the edge.
[00:15:48] Cloudflare, blah, blah, blah.
[00:15:51] Did they actually show a comparison on this one?  I don't know if anyone knew this.  Other people, I assume, have read this article.
[00:15:57] Thank you.
[00:16:02] Because this image
[00:16:04] Like it's very clear that the remix rewrite is much, much faster.  And I'm assuming this is a, you can see it in the network graphs.  And also you'll be able to see this over the stream.
[00:16:14] But we're talking...
[00:16:17] We're talking page load in about 400 milliseconds.  The most resources come in a quick waterfall.  Whereas on the other side--
[00:16:26] Go here.
[00:16:27] Thank you.
[00:16:28] they're seeing almost 1200 milliseconds. I'm gathering this is because it's from Hong Kong  and the network connection is super slow, but they're just kind of showing this
[00:16:36] Slide off.  Okay.  So client side transitions.  Yeah.  I mean, they, the rest of this article is about their, um,
[00:16:44] UX. And I think, I think a good point here, but on the other hand,
[00:16:50] I mean, I got to put out there, there's a lot of React devs in this chat, I imagine, people who've used React.
[00:16:58] Everyone kind of hates use effect.  That's kind of the thing everyone kind of goes on and on about.  But isn't it mostly, I mean, I wonder if,
[00:17:09] people are using it too much.
[00:17:12] My feeling is the most common place you're gonna hit use effect
[00:17:16] where, you know, maybe end users shouldn't be  is around data fetching or the data layer,  like that side.  As soon as you abstract the data fetching later,  you basically use effect goes away.  And I think everyone who's used React query knows this, right?  That's kind of the thing.  So on one hand, like,
[00:17:34] Thank you.
[00:17:35] Remix of loaders and actions and kind of abstracting that in a common pattern is awesome.
[00:17:42] But because, you know, it takes the data fetching out of the thing.  In the end, you get something, you get your own, it's basically React query.  That's the thinking.  Where Remix actually has the superpowers on mutations.  And I haven't seen this in other solutions so far.  I've seen optimistic updates, most optimistic update solutions involved.
[00:18:03] doing the update, basically saying, this is the update I'm going to do.
[00:18:06] putting it in the cache kind of imaginarily or just like temporarily,
[00:18:12] and then having the ability to roll it back if it fails, essentially. So you end up writing this code that's like, okay, this is the change that I think is going to happen with this data. And then as long as it, um,
[00:18:24] doesn't fail, then we can commit it, or maybe actually commit, you know, commit the real thing from the response, or maybe refetch. That's generally the pattern. But what's interesting about Remix's optimistic updates is it's declarative optimistic updates.
[00:18:42] Yeah.
[00:18:43] - So you're saying the URL, right?  Yes.
[00:18:46] Yeah, I mean, that's probably the other half of the equation, right? Because the web was based off the URL, all the common patterns. If you want your stuff to be progressively enhanceable, like it's the place where you can resume.
[00:19:02] especially in the early days of single page apps, we were terrible at this, being able to resume. But, you know, now,
[00:19:09] you know, most tools are a little bit better, but Remix does take it to the next level by using this even through your, you know, data mutations through form posts and whatnot, and basically following those patterns. But what I want to get about is, do they have an example in here? We did a stream all about Remix, like a month or so ago. So people probably should, you know, they've seen it, they've tried it themselves, they can have an idea. But what I'm getting at is,
[00:19:33] This is their action code, blah, blah, blah. Unfortunately, the article doesn't really, it just talks about it, doesn't really give examples. But the key, you know,
[00:19:43] The key part about Remix's forms is essentially that you get state back and the state's ephemeral.
[00:19:51] So if you're going to do this change, they just push that back to state. They're like, OK, this is the form data that you sent. So this is like your model or, you know, you're adding it to do. Here it is now.
[00:20:00] have a different declarative part of your DOM. Actually, Ryan Florence did a great video this week that we probably should probably look up. I don't have it at the tip of my fingertips, but you can search for it where he does like an agenda with Remix and
[00:20:16] He kind of shows you optimistic updates.  I think most people, like, it is worth checking out, understanding.  But basically, it's like if you had a to-do list, have two for loops.  Have a for loop.
[00:20:25] for the to-dos that you already have, and then have a for loop for, or sorry, map, list map for the
[00:20:32] for the items that would be optimistically added. And so you don't actually merge your data ahead of time. And what's really cool about this pattern is you never have to write the cache update code. Like, as I was mentioning, and I've talked to a lot of people use Apollo or, you know, different GraphQL clients, they all have caches, but when they're like, oh, do you do the cache update? A bunch of people have been like, yeah, or I just refetch the data. It's too much work because you
[00:20:57] And optimistic updates kind of force you into that pattern,  where you're like, OK, you have to do the cache writing.  It's like the most painful part about using those systems,  where with Remix's approach of declarative data,  you just describe how you want the optimistic update to look,
[00:21:09] And then...
[00:21:11] So when it finishes, then the data updates,  and the optimistic update goes away.  But if you do this kind of refetch model, which  is common in React query--
[00:21:23] Essentially, you never have to write the cache updating code
[00:21:27] yourself.
[00:21:28] Because you have, say, the new to-do item, you just display it, and then when you're done, you refetch, you now get the list with all the to-dos. You never had to write the code to add the to-do to the list. Obviously, a to-do to the list is a simple example, but in reality, doing these kind of optimistic updates is usually really, really painful, and Remix's approach completely alleviates it.
[00:21:49] Unhandled errors. Yeah, I mean, there's just more stuff here. I think we're going to move on probably from this article because I got some cooler stuff. But
[00:21:56] React hasn't really
[00:21:59] implemented error boundaries on the server.  So their ability to have error boundaries on the server  is really quite nice.
[00:22:06] And, you know, I think there's some good innovations. I think this is the big thing about Remix is good innovations here in the way that they've kind of taken the web model and just kind of made it seamlessly work with React.
[00:22:24] Yeah.
[00:22:25] you know, like these are real web request objects, and they've kind of basically pre-built it this way. I don't know if they mentioned this at all in the article, but I think one of the coolest things that people might not realize off the hand is a lot of the
[00:22:40] edge deployer deployments like Cloudflare, whatever.  They're just like really simple--
[00:22:46] you know, maybe based on V8, like JavaScript engines,  but they're not like Node, they don't have all the tools.  So when Remix kind of came in and added,
[00:22:55] their own request response wrapper and wanted to kind of
[00:22:59] consolidated across the board, they also had to bring all the stuff that was kind of missing. Like, say you want to manage a session. So Remix has session management that essentially works based on these, you know, web requests and this universal interface. So in so they basically brought like
[00:23:14] express type stuff in a consistent way across
[00:23:18] all of the platforms and which is really powerful for some of the really like bare bones platforms  like a Cloudflare worker because now you can kind of treat it like a regular server and  Remix lets you just use that pattern. I think that's I don't it doesn't seem like they're  talking about it here but maybe what's personalization? No, I just I just think  that that's really a powerful thing. Anyways enough enough on this article for now.
[00:23:42] That was conversation number one. Conversation number two,
[00:23:47] Let's see.
[00:23:48] Sorry, I'm pulling my...
[00:23:50] stuff off another screen here. Yeah, conversation number two was this one. And it's also related to Remix because, you know, middle of all the conversations here.
[00:24:00] Dan Shepard goes, "Hey, web devs, if you intend to build a website that has significant traffic and mostly static, but has a few dynamic elements, that is not an app, usually shallow navigation, needs connected to CMS, what kind of tech stack or framework do you use?"
[00:24:16] Right. And this is this is right coming into the heart of our
[00:24:20] single page app versus MPA islands, partial hydration conversation, right? This, this, this is, this, this is, this is the e-commerce is one place. The other place where this kind of comes in is like, this is the use case. And Kent, of course, who goes, well, choose Remix.
[00:24:36] We can make it work all without JavaScript.
[00:24:39] you know,
[00:24:40] you know, feels free to sprinkle in as needed.  Then when you decide to hydrate,
[00:24:44] you can do so without re-architecting your app.
[00:24:47] And Dan asks a very great question.  He goes, interesting.  Can it also do partial hydration for a page that is 90% static
[00:24:55] SSR 100%, but only download and execute the code that I need, basically.
[00:24:59] up with.
[00:25:00] And of course, Fred jumps in, you know, the man behind Astro, he goes, you know, Astro and Slickly are the only two frames that support partial hydration, as far as I know.
[00:25:11] I think he might mean React.
[00:25:13] based frameworks, he knows about Marco and he knows about Quick.
[00:25:16] Um,
[00:25:17] So, but essentially he's pointing the conversation this way.  And he's like, by sprinkling JavaScript as you need it, I mean, it means literally sprinkling in script tags, which is different than what you're asking here, which is actually a very fair assessment.  Because the problem, it's not a problem, but the difference here is when you have partial hydration, you only need to send the JavaScript you need.
[00:25:47] Essentially, you're just removing the script tags.  Once you need JavaScript, you get all the JavaScript, right?  So, you know, we...
[00:25:57] You know, there's a bit of a more of a discussion here. And essentially, I was just like, look, because Kent was suggesting that.
[00:26:07] you know, the performance, you know, was he's like, if the UX was better, you know, maybe we'll consider it.  I'm like, no, no, no, you can't. You don't just consider partial hydration. It's an architectural change.  And essentially, I brought up.
[00:26:18] the stream we did last week where we did the benchmarking.  And I think this is probably one of the more interesting things.  I compared the hacker news of remix next JS,  um,
[00:26:30] uh,
[00:26:31] of the next RSC example, Solid, Marco, I put them all in the pit and we did a bit of a comparison here. And the results were
[00:26:42] Um,
[00:26:44] Not the best for remix, I guess. I thought it was pretty fair, but I was informed that
[00:26:50] The solid and Marco examples were from Cloud for workers, and the Remix example for Cell was just a serverless function. And that even the React server thing was a serverless function.
[00:27:02] we followed up a bit more and we came to realize that that was actually true. I didn't realize this because solids for cell example is completely Cloudflare worker. There was like a bit of a misunderstanding because
[00:27:18] Apparently, I've been using a new API that not even Next.js uses. Solid, I guess, is the first framework to do full edge, like have a full edge deploy on Vercel. I thought the next example did that. I thought the remix example did that, but they didn't. So it was a bit of an unfair comparison.
[00:27:48] Thank you.
[00:27:48] Lee confirmed that Vercell Edge is in fact workers, and everyone got really excited about the potential of Next.js and Remix being on these edge workers.
[00:27:59] I was like, but it was my bad. I assume they already were because we've been doing this for months with Solid. Because like when I did that demo, they came to me and was like, oh, you don't need to use Next.js to go on the edge, you just use this API.
[00:28:13] And I was like, oh, sweet.  And I just did it.  I didn't realize no one else was doing it.  So I think we're going to see some awesome stuff here  from Vercel soon in terms of that.  Because I got to use the file-based system API  from Vercel, and it is absolutely amazing.  You do not need Next.js, and you get to basically,  let's see if, I think it was linked somewhere in here.
[00:28:32] But essentially, you get to...
[00:28:36] do something very similar to next where you, based on your folder structure, you just make an output folder, you can put stuff on the edge, you can use the CDN, you can put stuff in serverless functions. It's like next where you can just
[00:28:46] organize your files in a way, and Purcell deploys it across the stack.
[00:28:50] but it's completely independent of Purcell.  And while I guess it's behind beta right now,
[00:28:56] You can do this with any framework.  And that's been what we've been doing with Solid  and with Solid Start is leverage this incredible way to just
[00:29:04] define basically this file system and have Vercel deploy it with no Next.js. And yeah,
[00:29:13] I'm glad other people know about it. I didn't realize we were the only ones. So, yeah, this is coming, I guess, for next and Remix soon. So it's going to be pretty exciting. But as I said, I felt bad. Kent went and, you know, made some comments and stuff on the YouTube video going like, hey, you know, this isn't a fair comparison.
[00:29:32] So I went back and we built Hacker News on the stream a few months ago. So I was like, okay, well,
[00:29:40] Why don't I finish that demo and deploy it to Cloudflare?  And that's what I did.  So now we can do a real comparison.
[00:29:50] benchmarks, writing. And
[00:29:53] I want to show you a slightly different story than what we've been hearing here, perhaps, because
[00:29:58] The interesting thing
[00:30:00] part was.
[00:30:00] I obviously I have solid and Marco demos and on, on,
[00:30:05] on Cloudflare.
[00:30:08] Um,
[00:30:10] But I
[00:30:12] Thank you.
[00:30:13] I was like, what if I took my original client-rendered
[00:30:17] version of Hacker News.
[00:30:19] and put it on Cloudflare site.
[00:30:21] So not the SSR plus client thing like Next was doing, because as I mentioned, that's usually the worst of both worlds.  What if I just took that very first demo that I did that's completely client rendered and throw it in the mix?  Because I told you I wasn't into SSR because I believe that client rendering outperformed SSR back in the day.  It wasn't really my fault. I was just comparing it to Next.js and...
[00:30:44] and Zapper and whatever, Nuxt.  And it just seemed that client-side rendering could outscore it.  So I was like, it's been a couple of years.  Let's put on a Cloudflare worker, and let's throw that in the mix, too.  So let's do that right now.  Let's just go into our page insights, our page speed web dev,  and run a few tests and get a feel for stuff.
[00:31:06] Yeah, I hope you all will indulge me because I actually have a second little story. This Hacker News demo that I wrote three years ago or whatever, it started as a client only demo, which means that...
[00:31:20] What happened was I was having this problem with speed.
[00:31:25] Essentially, it was much slower than I thought it should be. And the reason was all the Hacker News demos did these requests using, I guess, was it Firebase against the Hacker News API. And there's a Hacker News PWA site. Like, this site is long dead. All the links are dead. But you literally can find Hacker News for every single framework in this list. Unfortunately, they're all dead.
[00:31:55] I was like, why is it so slow?  And it was because the way the Hacker News demo loads is it loads--
[00:32:01] The API gives you a list of all the IDs for all the stories, and then you have to fetch each story in a separate API request.
[00:32:08] And all the server rendered
[00:32:10] versions were really fast, and the client rendered versions
[00:32:14] were slower because they were doing freaking 30 requests or 31 requests to load that first  hacker news page. And I was like, man, this sucks. I'm like, am I going to have to make an API server? And then I looked through this list and I found this Angular one. And it was client, I think. Was it this one? I forget. One of the Angular ones. It was client rendered. And it got pretty good scores. And I was like,
[00:32:33] Okay, and I looked and they were using a different API. So I took that API, and I used it on my  Hacker News demo. So every demo might be a little bit different. But I built one that I grabbed an  API that would be efficient. So I can do stuff in a single request. And I've been using that API for  my Hacker News ever since. But my gut suspicion is that API wraps the other Hacker News API. So we have kind of a
[00:32:58] ping pong, essentially. Right? And that might make this even though it was a huge performance improvement for my client side app, it kind of makes maybe that request a little slower than you might find in another example, you know, where they're doing their own server back end. But
[00:33:16] I love what this illustrates because
[00:33:19] Essentially,
[00:33:21] Not all APIs are fast.  You might not even control everything.  And when you move it to the edge, maybe some latency  increased. And that's
[00:33:29] what I want to talk about on the show today.  Maybe not all APIs are made equal.  So I've got the exact same demo that I've made  with the same code, same hacker news, identical,
[00:33:39] in these frameworks. And let's look at what happens here, right? So we've seen me demo this on several streams, but, you know, and every run's a little bit different, but let's start with our solid Hacker News
[00:33:55] Um,
[00:33:56] test here, right?
[00:34:03] And we'll use the mobile scores.  And we'll just kind of look, right?  Yeah, see, every time I run it, it's a little different  depending on the network speed.  So what we have is 1.1, 1.1, 1.2.
[00:34:14] Yesterday when I ran this,
[00:34:16] And I'll run it one more time. We'll run everything twice. Just kind of average it out. We got point aids. And it depends sometimes on my network or where we're at, whether we get it. But okay.
[00:34:28] So best of two runs. We've got 1.1s across the board. As I said, sometimes we get lower numbers. So,
[00:34:36] Here we go. And we've obviously got 100 here. Okay. Now,
[00:34:42] Let's take...
[00:34:45] Thank you.
[00:34:46] our Remix demo. And I've shown this one before. And as I said, this is the one we built on the  stream, except now I've deployed it to a worker. And the point isn't so much about the initial  rendering time, because I doubt it should be different, that different. We probably should  see another 1.1 or 1.2. Yeah. So I'm getting different results right now than when I've done
[00:35:16] Um,
[00:35:19] Yeah, so this is actually a pretty good score.  And let's run it twice just like I said I would.
[00:35:24] Thank you.
[00:35:28] I think the biggest thing to notice in this scenario,  in '98, so slower this time,
[00:35:34] But now this is about the same speed.  So the rendering was about the same,  but the hydration and the blocking time  is significantly more.  And this isn't Remix default.  This is React, right?  It takes...
[00:35:46] Instead of in the last solid run, it was 1.1, I think pretty much across the board.  It takes 300 or more milliseconds faster and increasingly more blocking time because of
[00:35:56] of
[00:35:58] because of, mostly because of React's element here.  Now, I actually ran this earlier from my computer  and I got this from my desktop and I got the 0.8s  and the remix was around the same range,  but it was a 97 or a 98.  But I was kind of,
[00:36:18] As I said, now that I'm on stream, I'm probably not going to get the same results I got earlier. I actually have screenshots of them.
[00:36:23] Let's run the client side render and see how different it is.
[00:36:29] This is purely client-side rendered. It actually sends a blank page to the browser and then does its rendering.
[00:36:36] *Ding*
[00:36:39] Now the funny thing about this is,  Largest Contentful Paint is way later.
[00:36:44] 1.9 seconds.
[00:36:47] Like, because it has to load on the client is exactly the scenario that they were showing on the next on the next JS example, right.  But the because of because like the hydration cost, there isn't any and the load cost of them.  It basically looks the same other than this.  And Lighthouse gives it a 99.
[00:37:07] I've run it earlier, but essentially,
[00:37:10] This is a very simple example, but
[00:37:13] Lighthouse
[00:37:15] will score my purely client-side rendered page higher than it will score a Remix app in general.
[00:37:22] And
[00:37:24] with this because of the time it takes to do the data fetching. It's not a remix app. If I did solid -- not just a remix app, if I did solid
[00:37:35] Well, I guess it is the React hydration cost,  plus the wait till finish on the API calls.  But essentially--
[00:37:42] When the API is going slow, that's more blocking when you don't stream or don't client side render.
[00:37:50] And because the client gets the content earlier to load the resources, the JavaScript loads earlier. And when the JavaScript loads earlier, you can actually get more performance, right?
[00:38:00] Right now when I'm running it, the results are much closer than they were earlier. But generally speaking,
[00:38:07] A purely client-side rendered page
[00:38:09] with the right parallelized code split architecture, fetching and doing the parallels fetching,  kind of like what Remix does on the server, but doing it
[00:38:19] in the browser.  You can do it without a meta framework.
[00:38:23] actually outperforms SSR in terms of Lighthouse score. Not in thing. This is slower, like 100% slower. But
[00:38:32] Lighthouse is not aware of it. So this is one of those funny things. I said, this is what started  my quest on SSR. But looking back in hindsight, if you run this, you know, a dozen times,
[00:38:42] Um,
[00:38:44] you know, you run this thing, the client side render will be faster than Remix in the majority of them, not in a meaningful way, just from the Lighthouse score. So this is just a perfect example of showing where benchmarks are kind of flawed. And it's a funny thing, because these page speed insights are what are used to judge like performance for SEO.
[00:39:05] Well, the original solid example was streaming. It was 100. It's 100 every time. It shouldn't
[00:39:13] As I was saying, I can run Marco again. It's kind of weird. Sometimes,
[00:39:21] Let me run solid one more time.
[00:39:28] it,
[00:39:29] I'm just going to do this right now. I actually want to show one more thing here in a second. Yeah, here it is. There we go. This is what I was looking for. This is the results we got last time.
[00:39:42] Thank you.
[00:39:42] About half the time, solid streaming approach pulls these numbers, which is 0.8. I've never seen 0.8 on the weight for the non-streaming version of
[00:39:58] of this. The streaming version seems to be the only version capable of getting the 0.8s.
[00:40:05] So,
[00:40:06] Thank you.
[00:40:08] It can because you get to load the page sooner.  Like it might essentially you,  you get to load the,  the assets in the head sooner.  Like the,  the HP early hints can do that too.  But like picture,  if you're waiting for all your data load before you send anything,  then that's how much later it takes to load the JavaScript,  which means that it's going to take that much longer.  And if you're,
[00:40:34] Data is quick.
[00:40:36] then it's no problem. But as I said, when it's not,
[00:40:39] Then you are going to see this scenario where
[00:40:46] a streamed page will have faster time to interact.  And actually, you know what?  I'm just using the Marco website for this example,  because we have a silly example here.  But this is exaggerated.  But watch the timing as stuff loads in on the streaming on the right  versus on the full page load.  So on the right side, this is Marco and Solid and React 18.  And on this side, this is Remix or whatnot.
[00:41:13] Look at when the image loads.
[00:41:15] See, the whole page content loads at the same time, but the image...
[00:41:21] is able to load faster on this one because it was there first.  And it's the same with the JavaScript and any kind of other interactive parts.  You get the process starting earlier. You can just do it earlier.  Now, not every site can benefit from this, but...
[00:41:36] It's just kind of like a baseline.  And to kind of show you what I'm talking about, I'm just going to
[00:41:41] pop in a new incognito tab and just do something really quick here, right? We've all seen this before. So I'm going to take -- I'm going to start here. See, the difference is when you have a fast local network, your results are a little bit -- are going to be a bit different, right? Okay. So I just did a thing.
[00:42:02] Um,
[00:42:03] I just ran this the client render version first paint
[00:42:07] is $150,000.
[00:42:08] Thank you.
[00:42:09] And then Largest Contentful Paint is much, much later,  at about 263, because it had to do this request from the client,  and it took 92 milliseconds.
[00:42:19] So,
[00:42:20] there's no hydration cost because this is when it renders, but essentially,
[00:42:24] for here, we end up with 263 milliseconds for the full time thing. And this is a client render. So it was a white page and then it loaded in. Now, if I took the solid streaming example, this is sort of the extreme side of it. What you're going to see, unfortunately, is
[00:42:40] the client render is going to beat it for some reason.  And I don't know exactly why, but you can see the streaming  because you can see the page load, the assets load,
[00:42:50] before the page finishes streaming in the data.  And the client, the first paint is going to be 159.  It's very similar range, but then
[00:42:58] The largest control paint and the hydration's finish at about 389, okay?  So in this very fast network scenario, when the JavaScript's available to me instantly and I'm on the edge and it's as fast as possible, the client actually loads, the client render is actually faster than the streaming.
[00:43:16] with this slower API. But the thing is, if I take the Remix demo here,
[00:43:23] With the async rendering in this example, when we have this scenario and we do it one more time,
[00:43:28] Thank you.
[00:43:29] Look what happens.
[00:43:33] We have to wait the whole time.  So we're at 480, and then we load the assets.  Then we do the first paint.  And the first paint's not happening until 566, and then we're going to do the first paint.
[00:43:43] And the largest control is at the same time.  So everything, and then finally hydration.  It's not that far after 6.30.  So essentially...
[00:43:50] it takes twice as long as the purely client rendered one.
[00:43:54] Thank you.
[00:43:55] What?
[00:43:57] I thought this was at the edge and I thought this was fast. Why is client-side rendering the fastest  in this when we're at this fast network?
[00:44:04] Thank you.
[00:44:05] Thank you.
[00:44:06] Thank you.
[00:44:07] Thank you.
[00:44:08] Right?
[00:44:11] I've seen this result consistently for years.
[00:44:16] The thing is not everyone has the fastest network that not everyone's sitting in Silicon Valley like I am.
[00:44:21] But
[00:44:22] This is a well-architected client-side app.
[00:44:28] in this scenario is beating the edge function on streaming,  and especially on async.  The edge function on stream-- but you notice the difference.  The streaming one, which I actually kept here just so  that we could compare it.
[00:44:40] The streaming one
[00:44:41] And, you know,
[00:44:42] The client one,
[00:44:44] both first paint around the same time which is is a misnamer for the client one because that's not  really it's not i don't think it's like a
[00:44:52] I guess it's just the header.  But then...
[00:44:57] In this case and scenario, it takes a little bit longer.
[00:45:01] The async one is like, it's just way later, right?  And as I said, I blame the API.  I think the API...
[00:45:10] is for some reason closer to me than it is closer to the worker or something.  I can't explain why this is so exaggerated.
[00:45:19] But from a lower perspective,
[00:45:21] Like this is the advantage of streaming.  And it's pretty weird to see client side rendering  kind of come out at top here.
[00:45:30] Thank you.
[00:45:31] But the thing is, there's a reason why this isn't good.
[00:45:35] Because look, let's go back, let's go, let's do fast 3G for a second and do this all over again. Um,
[00:45:45] Yeah, OK.
[00:45:46] Now we're on a slow network. Let's watch what happens.
[00:45:51] Right. This should actually bury the lead a bit. I'm going to go. I'm going to start with the solid Hacker News. We'll do that one first. OK, so.
[00:46:00] On a slow network,
[00:46:02] Um,
[00:46:03] Our first paint now is what?  1,200?
[00:46:06] And our confo 1200 and our largest confo,  everything comes at basically the same time on a slow network.  Streaming didn't end up,
[00:46:15] doing anything and we basically got effectively async rendering in the end because it couldn't really do anything early.
[00:46:22] So in this case, the streaming and
[00:46:27] the wait till the end like Remix does,  it's gonna give you like the exact same results.
[00:46:34] More or less.
[00:46:35] Um,
[00:46:37] Let's see here.
[00:46:39] Let's make sure what's here.
[00:46:43] Thank you.
[00:46:44] Okay. Yeah. So what we got 1165. Yeah. So basically, basically on the slower network, the difference between waiting till the end of streaming is almost nothing. Right. But
[00:46:58] The problem is for the client side version here,
[00:47:04] This is a death sentence.
[00:47:07] You can even see it the way the page loaded there.
[00:47:11] The first paint,
[00:47:14] 1262. So it's even a little bit slower. But look, look what happens. We don't finish till 2,100. It's like 900. It's almost a second slower. This is what Remix was basically showing in that article when they're going to Hong Kong or whatever.
[00:47:44] When I saw this, this is why I started doing SSR in solid.
[00:47:48] So,
[00:47:49] Generally, yes, if you're sitting in Silicon Valley, it's possible that a client rendered app is faster.
[00:47:56] so to speak, you know, if you're like right on the network hub,  but generally speaking, if you scale your app around the world,
[00:48:01] You want to do server-side rendering.
[00:48:03] And streaming is the only solution that actually scale--  takes advantage of the fast network and the slow network.  That's why I love streaming.  But it is interesting that this is not just like
[00:48:15] This is always better.
[00:48:16] That's what I wanted to point here.  If your data latency is long enough, this is a real example of that.
[00:48:23] So, yeah, yeah.
[00:48:27] this this is this is interesting i said i wouldn't recommend client-side rendering um for you know  things where you care to have performance in a universal way and make things  you know accessible to people like this only gets worse like
[00:48:41] like if I went to slow 3G, the difference between client fetching and...
[00:48:49] and like any of the SSR techniques is like three seconds or something like it's absurd. It's like three, three, three seconds for e-commerce to the death sentence. That's like, I think the first three seconds lose you 25. The second three seconds loses you like an additional 40% of your customers.
[00:49:10] Anyway.
[00:49:11] So that's just our silly little performance thing.  I just wanted to kind of throw that out there because I think it might not be as widely understood why...
[00:49:25] um,
[00:49:29] Thank you.
[00:49:29] And this performance data is against cache client side render.
[00:49:33] What do you mean cash? No, there's no cash.
[00:49:36] Um,
[00:49:38] Yeah.
[00:49:40] Thank you.
[00:49:41] Yeah, there's no cache.  This is literally loading all the assets, cache disabled,  from things.  The client side render is just that much faster  in this scenario.  Obviously, once you slow down, it's freaking terrible, which  is why the page insights scores that we were looking at earlier
[00:49:58] What were the page insight scores?  Let's see if I can flip window here.
[00:50:04] why, um,
[00:50:07] why they were so much worse. The solid one, the desktop ones are bad, but these guys, when they do the mobile tests here, you see they put it through slow 4G throttling with a Moto G4 or whatever.
[00:50:23] Yeah, no, the JS assets are not cached.  I can actually show that in the timeline.  This is client-side rendering...
[00:50:31] done well, small framework, good network, looks a lot like streaming. Usually when the API is in lane, they're kind of similar. You don't get the SEO.
[00:50:43] Um,
[00:50:45] Thank you.
[00:50:46] Yeah, and that's a good point too. Caching might even change the equation at a different thing. Honestly, I think it's, I think SSR because the way it scales is like way more beneficial. Like, like once, once you move off a super fast network, client side is just, is just terrible. In terms of like the waterfall, client side rendering is actually pretty fast. But like, in terms of like,
[00:51:12] The waterfall effect is pretty brutal.
[00:51:16] So,
[00:51:19] Yeah, I mean, the caching, there's so many details here, which makes this really, really interesting topic.
[00:51:25] Thank you.
[00:51:26] Thank you.
[00:51:27] Mm-hmm.
[00:51:28] With CDN, I mean, it should work with CDN caching or with caching. I mean, I don't know. Maybe Michael or Dylan might be able to answer this more. But the thing is, when you stream a page,
[00:51:41] I did test this before.  Let me see if I have it here.  Let's go to one of these.  I've kind of shown...  The thing is...
[00:51:53] It's just HTML you have with a little script. Let me do it over the network here. I want to do solid.
[00:52:02] Where is it?
[00:52:03] Where's one?
[00:52:05] Okay, let's do it.  The actual...
[00:52:09] page and I'll make this a little bigger so you can see. It's just the HTML. It might be out of order,
[00:52:15] Let me see if I can...
[00:52:18] Yeah, make it bigger, but it's actually harder to see. It might be out of order. Like we have this, we, we, we, we, uh,
[00:52:26] In this example, we actually render the header
[00:52:30] And then some scripts, then the data, and then...
[00:52:35] down here
[00:52:36] we render the content and then we insert the content.  But essentially, I mean, I guess I can see this by turning--
[00:52:46] by going here and
[00:52:50] turn, like, don't disable the cache.
[00:52:53] Thank you.
[00:52:54] Essentially, if I don't disable the cache, you don't even see it stream in.  That's the whole thing, right?  Because guests technically...
[00:53:03] The JavaScript moves it into place.  But it all happens before the time it first rendered.  So essentially, it looks like it was completely rendered
[00:53:11] Because the scripts are inline, there's no JavaScript you have to wait for it to load it in. It's just part of the page load. It basically looks like a normal rendered HTML page. So yes, I believe the caching will work.
[00:53:24] Um, fine. Uh, Marco actually has in order streaming as well, not just out of order where you do the swap in. And in that there's no, there's not even any JavaScript. It literally just, you just, you just,
[00:53:34] send the page in pieces as they've come in, and then you can do it.  So stream responses can definitely be cached.
[00:53:41] Okay, so...
[00:53:44] It's funny because this stream, actually, my intention isn't
[00:53:50] So much to talk about streaming, but I didn't want to talk about the edge here because I think it is interesting.
[00:53:56] Yeah, see what Dylan got here.
[00:54:03] Yes, exactly. And it's just HTML. So, yeah. The thing is, do you have as much value when you have lots of dynamic pages? Probably not. But that's a caching problem in general, right?
[00:54:16] But yeah, I think, I don't know if anyone has any other questions. It's a good time because I think it's probably...
[00:54:27] Thank you.
[00:54:28] Probably a good time to move on to our next topic here. I think I'm done with streaming and
[00:54:36] and the edge and that for now.  I think there's more questions.
[00:54:42] There's more -- how should I put it?
[00:54:46] More considerations here, especially what the edge is going to mean, because obviously there's a lot of work going in right now to moving data sources to the edge so that like you don't have that long latency and like things like MongoDB have really fast access through AWS networks and stuff. So I'm pretty sure.
[00:55:06] And I know what there's a DAO from like with Cloudflare,  a lot of people have concerns about security.  Not all data can go on the edge, all that kind of consideration.  I know I worked in education with information about children.  So like that was a no go for us.  But, you know, there are solutions to deal with that latency.  But I think streaming is particularly well positioned in this world where we're moving the stuff as close as possible.  Right. I think streaming is.
[00:55:33] at the edge is like the new Jamstack, right?  Remix has showed us that you can use caches,  you don't need the static site generate,  and you can get that really quick performance.  Streaming is like that extra little boost now where you can get--
[00:55:48] when you do cache myths, you can get the page immediately. And even if the data takes a bit longer,
[00:55:53] Um,
[00:55:55] that you're not really paying for it any worse than client fetching.  The huge, huge difference there is you don't have to wait for the JavaScript to start the request to get your data.  It happens all at the server time.  You basically send the stuff that you would have rendered and had in the client anyways,  except you started the request that much sooner.  Instead of waiting for it to ping pong, wait for the browser to go, oh, I need this JavaScript file.  Pull it in, then run it, do the request.
[00:56:25] know the the worker is going and fetching the data for you so it's just like a better version  of the kind of static shell um dynamic content model that you have a jam stack it's just that's  essentially how i view it streaming at the edge is is is basically the new version of that
[00:56:43] Thank you.
[00:56:44] All right.
[00:56:47] Any more comments?  It's your last chance.  No, I'm kidding.  You can keep on asking me questions.
[00:56:53] But yeah, let's move on to...
[00:56:58] the other part, because I'm kind of I'm kind of I'm pretty stoked about talking about server components because
[00:57:05] I feel kind of dumb.
[00:57:06] I spent so much time
[00:57:10] looking at how I could find other ways to do the same stuff that server components did,  that I never actually looked at how server components worked.
[00:57:19] And that was a bit of a mistake, I feel.
[00:57:23] it's just because I was immediately put off by the complexity.  So hopefully...
[00:57:28] Maybe some of you don't know what I'm talking about or what server components are, so maybe that's where we should start because
[00:57:33] React server components.
[00:57:35] are
[00:57:37] something that React introduced a year ago. There is no new announcement. Me talking about server components right now is not because there's been some great breakthrough or progress that they've announced. I just, it's taken me a year to get back here. I spent the last year on streaming and the edge and all that. That's been my whole last year. And
[00:57:56] We finally put out solid 1.3 and I'm just like, okay, time to take a serious look at this stuff again.
[00:58:03] And I've been really into the partial hydration. You, you, you've seen you, many of you have seen my streams about partial hydration, you and, and, you know, the different techniques and islands.
[00:58:13] and how that works. But
[00:58:16] Server components has been the one that I just haven't talked about. I've talked about Astro, I've talked about Quick, I've talked about Marco, you know, in a stream, one of my streams coming up in the next couple weeks, I'm going to be looking at Isles, which is based on Vite, which I'm very stoked to look at. But I have not talked about React server components. And
[00:58:34] It's because I honestly
[00:58:38] didn't understand them and I wanted to make sure that I did.  I wrote some articles kind of figuring out  where the benefits are.  Because the thing is React Server Components
[00:58:47] are capable of so many things
[00:58:50] that it's easy to like look at the features and not understand that this is a different architecture. In my mind now,
[00:58:58] This is as big as the difference between a single page app and a multi page app. This is not like,
[00:59:06] I thought this was just like a fancy data fetching technique.  No, this is an architectural...
[00:59:11] decision.
[00:59:15] a different way altogether to view
[00:59:18] what how your browser app should
[00:59:23] should behave.
[00:59:24] And I think maybe a good indicator of this, you know, for the future, in case anything else that's groundbreaking comes out is ask yourself if the routing paradigm has fundamentally changed.
[00:59:38] That's the backbone of any web app.  And if the routing paradigm has fundamentally changed,  maybe you're dealing with a completely different architecture.
[00:59:47] Because...
[00:59:49] We know that ClassicWeb
[00:59:52] You have your route in the URL.  Every time you change the URL, you go back to the server,  send back a page.
[00:59:58] These days we call those multi-page
[01:00:00] But that was the routing paradigm.
[01:00:03] Single page apps change that so that they can intercept the change of the URL, not go back to the server and have the client render what it needed.
[01:00:10] Thank you.
[01:00:11] over time that got more complicated.
[01:00:13] And we lazily loaded resources, you know, code split and all that.
[01:00:17] But essentially, we had a new paradigm for the web that didn't involve full page reloads, but involved basically virtualizing our pages.  And there's been improvements over time, like nested routing and layouts and all that stuff, things that you can only do because of the way single page app routing works.  You can save and only render parts of the page, kind of onion it, like I've shown on the previous router stream.
[01:00:46] React server components?
[01:00:48] is another one of those fundamental changes in my mind.
[01:00:51] And I'm going to talk about that and show that a little bit more.  Tonight marks the return of Excalibur, and I'm kind of excited about this.
[01:01:00] Okay, we've got some comments that I need to catch up on.
[01:01:10] Okay.
[01:01:11] Thank you.
[01:01:12] I'll take a moment to answer the questions in the comments here before I move on, because these are related to the last topic. Could it be?
[01:01:20] Could this whole prompt frame to run first visits? Yeah, of course. If you cache the stuff in the browser, it's going to be faster if you have the content in the browser. This whole conversation is about first page, which is why...
[01:01:32] it's definitely a concern that is more worried about things like e-commerce  where you're coming in from search results and SEO matters.  Even blog sites and content sites where, you know, you know,  links and stuff like this, this whole thing,  once they have your JavaScript, then like it's client rendering is fast.  And that's where you want to be. And this does sort of tie into what,  what, what we're going to be talking here with server components, but yeah,
[01:02:01] It's kind of interesting because we spent the first five years of single page apps.
[01:02:09] focusing so much on how we can make an app-like experience.  That's where React came out of from about 2008
[01:02:16] And 2008 to 2008,
[01:02:19] Well, actually...
[01:02:20] Maybe a little bit later.  Let's say from 2008,
[01:02:23] Because of the early, early web between 2000,  or of like the modern JavaScript framework from 2006 to 2010,  it wasn't so much about mobile.  Mobile was like iPhones or what was it, 2006, 2007.  It wasn't felt how much of an impact it was.  At that point, we were just really excited that we could just make
[01:02:40] apps in JavaScript in the browser.  Like we now suddenly had the tools that we needed to do AJAX and asynchronous requests, and JavaScript was getting faster, and we can do really cool things. And we didn't have like,
[01:02:53] I used to work on sites for like travel agencies, like an Airbnb type thing, but way back then.  And you have like a list, like a dropdown where you would...
[01:03:06] have a list of like the countries and then the cities and these cascading drop-downs like in the  old web you'd change one of those drop-downs and then you'd have to reload the whole page  to get the list of the cities and then to like
[01:03:17] the dates you'd have to reload the whole page. It was so painful. And just moving the stuff client side with JavaScript was like, oh my God, like how did anyone use the internet before?
[01:03:25] That was the first age. Then from about 2010 to 2015,
[01:03:30] I mean, that's not the first age of JavaScript. I'm just talking about modern JavaScript frameworks. There was JavaScript way before that. The next five years, we spent our time obsessing about mobile, like mobile was getting all the traction, things were moving out the desktop, you know, and this is where React came out. We're like, how can we make our apps more like mobile apps?
[01:03:50] Right. And, you know, PWA and everything like that is just like the further realization of that goal.
[01:03:56] But the last four years or so, since about 2017-ish, I guess it's getting on five years, the shift has all turned back to SSR again.  It was like we realized that we were putting too much JavaScript in and we're like, OK, we've got to change the pattern again.  And that's it's kind of being felt.  I think I saw a tweet from Devin Critter Parcel talking about, like, why can't we focus on app stuff?  What's all this SSR stuff? Not everything needs to be SSR, you know, and.
[01:04:24] I mean, that's an interesting conversation in its own right, because I actually really enjoyed Sebastian, former meta, now works at Vercel, React core team member, saying that, you know, on that side, it's not even about web apps.  It's about, like, React native for web and abstracting in a way.  I'm not sure everyone's going to agree with that take, but I think it's very interesting and very interesting.
[01:04:46] promising show of where reacts mindset is at.
[01:04:50] But, you know,
[01:04:52] SSR has been dominating our thinking and that's where, you know, the last couple of years have been. And that's where this is coming from. So, um,
[01:05:03] Yeah. Okay. So now let's, let's get into it because, um,
[01:05:09] Yeah, I had some fun with my kids before the stream. Essentially,
[01:05:16] Hello?
[01:05:18] And the interesting thing, and I don't know if people get that granular.  I've shown off how partial hydration works or islands work in the Marco and Astro streams.  But I don't know how familiar...
[01:05:30] people are on how the tree actually works or web components in the shadow dom are the exact same um
[01:05:38] mechanism. And I'm going to do the circles because that's what everyone does here. But essentially,
[01:05:43] Any partially hydrated app,
[01:05:47] Yeah.
[01:05:47] and let's make them feel great. The root of the app is going to be
[01:05:54] rendered on the server.
[01:05:56] Okay.
[01:05:57] And
[01:05:59] Maybe underneath it, you're going to have a few other things.
[01:06:05] Thank you.
[01:06:06] a few other server modules.
[01:06:11] But at a certain point,
[01:06:13] Thank you.
[01:06:14] you're going to hit...
[01:06:16] Client module. I'm just going to put a couple more down. Okay. And then let's see that. And let's make the client modules look like
[01:06:25] this.
[01:06:27] Okay.
[01:06:27] Beautiful. And
[01:06:30] You'll see trees like this used in the examples a bunch where they
[01:06:35] where they show
[01:06:37] Thank you.
[01:06:39] where they show this kind of weaving of client
[01:06:42] And, and
[01:06:45] server
[01:06:48] components, so to speak.  But I don't know.  This isn't the most...
[01:06:53] How should I put it? This isn't the most accurate...
[01:06:56] or easy to visualize tree here.
[01:06:59] Because the truth of the matter is the server tree and the client tree are completely
[01:07:06] separate in that
[01:07:08] A client component is not allowed to actually...
[01:07:13] have
[01:07:14] a server component inside of it.
[01:07:17] in terms of partial hydration.  This is true of Marco.  It's true of Astro.  So if we're just focused on this side of the tree,  I can kind of explain a bit how I have this server component  under this client component.  And the reason for that is--
[01:07:35] let's think of the best place to show this is
[01:07:40] I mean, we've all kind of seen this far. I'm just going to open a playground just easier. But
[01:07:46] Essentially, if you have
[01:07:50] Some HTML, like maybe -- let me blow this up a bit. If you have some HTML like this,
[01:07:56] Thank you.
[01:07:58] Okay.  And then...
[01:08:02] Inside that div, you have--
[01:08:05] You know, a component.
[01:08:09] Okay.
[01:08:12] Thank you.
[01:08:13] And inside component, you have
[01:08:17] He passed on his child.
[01:08:23] Hopefully everyone can see this. What ends up happening is if this was a web component,
[01:08:31] - Okay.
[01:08:32] What you see here,
[01:08:34] would be considered the light DOM.
[01:08:37] Inside our component, let's pretend we have a component here.
[01:08:44] we can have our own
[01:08:47] representation, right? We can have our own divs and spans and whatever, right?
[01:08:54] And
[01:08:55] We can...
[01:08:57] I don't know. Which one?
[01:09:00] Thank you.
[01:09:02] Thank you.
[01:09:03] Thank you.
[01:09:04] We can insert our children wherever we feel like.
[01:09:10] in this tree.
[01:09:12] But from the outside,
[01:09:14] Thank you.
[01:09:16] perspective.
[01:09:19] Thank you.
[01:09:20] Thank you.
[01:09:20] It's just so broken, whatever I'm doing.  I like broken syntax highlighting even.
[01:09:27] So,
[01:09:29] I don't even know why.  Oh, yeah, it's because of this.  Not closing.
[01:09:33] Thank you.
[01:09:33] from the outside,
[01:09:35] You don't see these internal children.
[01:09:38] essentially.
[01:09:39] Like you just see this.  And if this was like style DOM or shadow DOM styling and web components, this span would be styled the same way as this div.
[01:09:49] even though it gets inserted here,
[01:09:52] it actually is part of the parent tree.
[01:09:55] - Okay.
[01:09:56] And this...
[01:09:58] works in a sense because in the DOM, for example, these are eagerly created. Like this span is created
[01:10:08] with this tree.  And essentially, if you had a conditional that was like--
[01:10:13] you know, false...
[01:10:15] or whatever.
[01:10:18] or false--
[01:10:22] Show and props children.  The child might not even choose...
[01:10:29] to actually run it.
[01:10:32] like insert it, but
[01:10:35] In these models, this...
[01:10:37] has already been created.  You can't avoid the span from being created.  It is created in this parent scope.  The child can choose not to insert it in its own representation.  It might never make it to the final DOM.
[01:10:51] But it is created as part of this tree.
[01:10:54] And,
[01:10:55] This is how...
[01:10:58] Thank you.
[01:10:59] you can get fancy with islands and partial hydration.
[01:11:04] Thank you.
[01:11:05] Thank you.
[01:11:06] Well...
[01:11:08] Maybe.
[01:11:12] Quite possibly. Yeah.
[01:11:17] Yeah, and that's what I'm trying to get at. I mean, in case of the web component, technically, this is also a DOM element, so it's created at the same time. But like, from a pure, like,
[01:11:28] from like,
[01:11:30] In a sense, this whole representation is created.  I think the virtual DOM actually works kind of similar to this  as well.  Like this representation is created,  and then it gets inserted.  This is very different than like--
[01:11:45] There are other patterns where you can do render props and that's how you can lazily render them.
[01:11:51] So if you do render props, then you don't have to render this until they call it. But generally speaking,
[01:11:58] This is created as part of this template.
[01:12:04] Thank you.
[01:12:05] Well, JSX in itself builds whatever you want it to. Generally, it's usually like a virtual structure.
[01:12:12] In Solids, since we use real DOM nodes, for example,  we always lazily create everything,  because we don't want to create this unless it's shown.  But this model, I wanted to kind of show--
[01:12:25] show is that generally speaking,  if you're talking web components with light DOM and shadow DOM,  or if we're talking partial hydration, this is how this works.  Because with partial hydration,
[01:12:36] Taking this example further.
[01:12:39] You can say that this is our server component, right?
[01:12:44] And this is our client component, right?  Hopefully you all are following so far.  And if we do that, essentially...
[01:12:56] Thank you.
[01:12:56] We know that this is only rendered on the server, and this can update in stateful on the client. Maybe it has some, you know, some fate.
[01:13:05] Thank you.
[01:13:06] Right?
[01:13:10] But like regardless whether you're talking Marco  that automatically analyzes and finds this,  or you're talking about Astro, which goes,  oh, this is a framework component,
[01:13:18] Essentially, you have these trees. So when you see
[01:13:24] a server part underneath a client component, it's because of this. Technically, this span is still part of the server component. It's still part of the server tree. If you think about it, it makes sense. While this client component could choose to render it or not render it, it has no way of changing this part's contents.
[01:13:49] If you think about it, like there's nothing, this is still following the stateless rules.  This still can't be updated.  So we know that this will never technically be re-rendered.
[01:13:59] As long as you evaluate it ahead of time, as long as you can pretend that Props About Children is literally holding a span in it.
[01:14:08] It's not lazy. It's literally props children equals span.  This works because you can choose to show it or not show it.  But essentially, this is still part of the server tree.  And that's what I was trying to show here is that technically speaking,
[01:14:23] This server is actually part of this one.
[01:14:27] And you can't actually, like inside the client component, server components are not allowed.
[01:14:33] This is basically the rule because in here,
[01:14:38] We don't know, like, as I mentioned, this props children here in our example. We know that it can't be changed. We know that it exists. It's just like static. If we
[01:14:48] We created a server component under here, like another one, we just went like, hey,
[01:14:55] we don't, if we, it wasn't initially rendered, perhaps. Like, we don't know that. And
[01:15:03] you know, it could be affected by state too, right?  So this is...
[01:15:09] And the thing is, even if we were smart enough,
[01:15:12] to kind of figure out a pattern where we could do these disconnected server trees
[01:15:17] This...
[01:15:18] would be kind of terrible.
[01:15:20] because it would cause waterfalls innately because, you know,
[01:15:26] Essentially,
[01:15:29] If we have, you know, const data equals fetch data or something in here, like we're doing some data fetching on the server.
[01:15:41] And,
[01:15:42] We fetch our data and we pass something here like data,
[01:15:51] field one here. Okay, I'm just gonna do this. The thing is,
[01:15:57] depending on whether the client decides to show this, decides whether the server component can render. And this is kind of awkward, like the nested one, because
[01:16:10] Let's say we go, oh, let's re-render this top server component.
[01:16:16] I'm going to call this one server two, just not to confuse you.
[01:16:19] At the time of fetching, we don't know what props
[01:16:23] this would have or what input this would have if we could nest it.
[01:16:27] We actually have to go to the server,
[01:16:29] do some work, pass it to the client component, have the client component update, and then go to the server. This returns the waterfalls back to the client. This just doesn't work.
[01:16:40] Right. There's a reason
[01:16:43] why even React server components don't work this way. I thought they did initially, and I was like, oh, that's kind of weird, but they don't. They actually are the same as Astro and Marco, in a sense, in terms of the way that these rules work, because...
[01:16:57] Essentially, as long as you can't nest them  in the client components, but you can put server two here,
[01:17:06] Thank you.
[01:17:09] In fact, you can put server two
[01:17:13] Thank you.
[01:17:14] in here, if you think about it, because it's still in the server space.
[01:17:19] As long as they're in, like, continuing that chain in the server,
[01:17:23] When this changes,
[01:17:25] Like when you know you have to re-render this, you can address this all at the same time. If this was fetching different data, sure, you have waterfalls, but the waterfalls are on the server.
[01:17:35] essentially within that single request,
[01:17:40] you have the ability to hit all the server components.
[01:17:45] Which kind of leads to the difference.
[01:17:48] Okay, yeah, sorry about that.
[01:17:51] Yes, you're right. Sorry.
[01:17:55] Yes. My demonstration here was that this server
[01:18:01] Thank you.
[01:18:02] component is fine out here, you know, inside our server component one, we can put it. And if we
[01:18:07] put it, but we can also even put it in here and nest it inside the client component as long as it's this way, because there's no way for the client to pass data to this. So we can basically know whether we have to re-render server two and server one purely from
[01:18:23] like on the server. We don't have to go back to the client. That's essentially what I was trying to show here.
[01:18:29] Thank you.
[01:18:30] So,
[01:18:33] Okay.
[01:18:35] I kind of got ahead of myself when I was talking about React server components, but when talking about partial hydration, this is basically the key rule.  Because you know that this will never re-render on the client the way that Astro or Marco works.
[01:18:56] Essentially, you have this great ability here because...
[01:19:01] The only
[01:19:04] The only thing that can possibly change is the stateful stuff inside the component, essentially, or their children.
[01:19:12] And
[01:19:13] the only data you need
[01:19:15] is
[01:19:17] Thank you.
[01:19:18] field one in my example here.  So you could fetch a giant blob on the server,  but you only need to serialize the one field from the blob.
[01:19:28] because
[01:19:29] Technically speaking, you know that the rest of this data isn't reachable
[01:19:34] from inside the client tree. This is the secret here. I don't know if frameworks like Astro leverage this yet, but this is how Marco can basically serialize no data, solve the double data problem in a sense, because you know
[01:19:51] that all you need to serialize your top level inputs. This behavior also is why
[01:19:57] is key to how quick does out of order hydration. In their case, they don't have explicit islands. They don't know what is server client at all. They lazy load based on what you interact with. But the only way you can
[01:20:17] hydrate stuff out of order is if this is always, always
[01:20:22] eagerly evaluated because then you can go, okay, I know that I'm not responsible for the children here, that they already exist. So you can basically
[01:20:31] treat them like
[01:20:34] like they're static.
[01:20:35] even if they are dynamic.
[01:20:38] So I mean, I can attend it a little bit, but I just want to explain.  This is one of those like interesting quirks like we're we on the server client boundaries.
[01:20:48] You have Astro that's very explicit where you're like,
[01:20:52] this just has to work this way. You know this will never hydrate, because it's part of the server tree. In Marco,
[01:21:00] You can write stuff however the hell you want.
[01:21:03] But it will find this stuff and go, oh, this is part of the server tree. Essentially, you don't have to think about it. It will make the decision based on how you structure your code. It's still beneficial today in Marco because there's no subcomponent hydration to
[01:21:20] to basically know about this.  You can use this trick to add some stateful code
[01:21:26] Thank you.
[01:21:27] and still not send all the data.  Because you can pretend, what if down here,
[01:21:31] Picture our server comment here, picture this is like a post, like a blog post, right?
[01:21:38] Right. We fetch our post and then we need a stateful component because we need the ability.  So we pass maybe the idea or something. We need the ability to like it.  But maybe we don't want to send the content of the blog post. Well, if you
[01:21:59] If you actually have another server component down here that actually is responsible for rendering the blog post,
[01:22:05] So it takes all the blog post data.  You actually...
[01:22:11] don't need to send the blog post data to the client.  You just need to send the ID so it has the ability  for people to like it and do requests based on that ID.  But you don't actually need to send any of the data.
[01:22:23] Um,
[01:22:27] So essentially, this is kind of the mechanical...
[01:22:33] aspect of how all these
[01:22:36] kind of frameworks work, right?
[01:22:39] Um,
[01:22:41] But...
[01:22:42] Sorry, I didn't finish my little example here. I was saying that Astro, you have to follow the rules and you're explicit about it. Marco will detect the scenario and decide where these boundaries are. And then with Quick, you can never have...
[01:22:57] your children always have to evaluate eagerly because any component could be loaded out of order.  So you basically can never have render props.
[01:23:05] Thank you.
[01:23:06] OK, what does this have to do with React Server components?
[01:23:11] Yeah.
[01:23:12] Yeah, there's a question here.
[01:23:15] Probably, but as you'll see where I'm getting here is
[01:23:20] I did this too. We're asking the wrong questions.
[01:23:24] It isn't about how we can get around this shortcoming. This is powerful because of the way that you can basically save sending the data. Like, we saw this
[01:23:39] We saw this like on the Hacker News examples that we've been doing here, right?
[01:23:46] You're going to see this on Remix, and you're going to see this on every framework that goes in here.
[01:23:53] when we go in, there's going to be
[01:23:57] I mean, I saw-- where is it?
[01:24:00] Um...
[01:24:02] Hackman-resolid dev, or is it--
[01:24:05] There's that huge blob of...
[01:24:12] Maybe it's easier to see it from the network tab, because I can blow it up. But there's that huge blob of data.
[01:24:19] Let's refresh the page.  It's a huge blob of data that shows up on pretty much every SSR page ever.
[01:24:28] And
[01:24:29] yeah see this big blob i'm sending all the stories over the wire
[01:24:33] here and
[01:24:35] all again serializes HTML.
[01:24:38] Whereas with a partially hydrated framework, like...
[01:24:43] Like, what's it?
[01:24:46] I have the link from the last stream. Two seconds.
[01:24:52] Thank you.
[01:24:55] It's funny. I didn't actually copy it down.
[01:25:04] Let me just start typing and hope that it works.
[01:25:12] Thank you.
[01:25:13] Yeah. With a framework like Marco,
[01:25:19] This is all the stuff. I can show the network here.
[01:25:26] Thank you.
[01:25:27] You don't actually, it doesn't need to send any of the extra data. There's the script to move the stuff into place, but essentially none of the data is serialized. And this is the advantage of partial hydration and server components, all this technology. It's not just sending less information.
[01:25:43] component code.
[01:25:44] you know, like zero cost components, it's actually, you remove the data serialization cost as well. You actually make your HTML pages smaller. You solve both the template problem and you solve the data problem. So getting back to it, what the hell is React Server components? Is it just partial hydration?
[01:26:05] Yeah.
[01:26:06] And the answer to that question is no.  React server components,
[01:26:10] are kind of crazy because on one hand,
[01:26:14] they have this restriction
[01:26:16] The same as
[01:26:18] all the other partial hydration frameworks. But React being React is like
[01:26:23] We don't want to be an MPA. We want to render in the client. So the biggest
[01:26:26] Ironic part about React Server Components for most people is
[01:26:30] they basically always render in the browser.
[01:26:33] And they're called server components,  but they actually render in the browser.
[01:26:36] And you which you like what? Essentially,
[01:26:40] They create server components and this whole mechanism is basically a client side mechanism. You can SSR initially, although I don't believe like they've ever shown a demo of that doing that. But essentially you have you have these
[01:26:56] top points where we have our client components. And
[01:27:01] Basically, where we enter in there, let's kind of
[01:27:06] do a little drawing here, like around here,
[01:27:10] And-- sorry, not that.  Sorry.  Basically, around here.
[01:27:16] around here.
[01:27:19] and maybe around here.
[01:27:22] Thank you.
[01:27:23] Our topmost client components have props that come in and essentially are hydration routes.  So you can picture it like you typically call hydrate on these ones when you server render.  But they basically update like three independent elements.
[01:27:37] Apps.
[01:27:38] And this is the same, they're islands, essentially.  They can have other client components under them or whatever,  but essentially they become automatic islands.
[01:27:47] But the difference is with React Server Components, at any point, you can just go,
[01:27:54] even though you can't tell the server components, like give them state or props, really, you can go re-render the whole page.
[01:28:02] with the new data.  So any of these components--
[01:28:07] Any of the ones here can go, OK.
[01:28:09] You?
[01:28:12] We render.
[01:28:13] Or maybe, you know, maybe this one can do it. You can go,
[01:28:19] you re-render.  So they basically tell the whole page re-render.  It's like an MPA.  It's like you click a link  and you re-render the whole page.  And
[01:28:29] If people have seen things like Turbo or like...
[01:28:35] which is used by Rails, you might go,  is that really kind of clunky?  'Cause what Turbo and Rails do is,
[01:28:40] even though you're in the client and you've rendered it,  essentially you have...
[01:28:47] you have a shell for your page.
[01:28:52] And
[01:28:53] All right, and let's remove the hashing transparency.
[01:28:59] Inside the shell, you might have
[01:29:05] like,
[01:29:06] Thank you.
[01:29:07] You might have the nav and then underneath you have your main page content.  So I'll draw a nav, I guess, as part of the shell.  So we have our shell and we have our nav.
[01:29:17] And then we have the page content.  And as you navigate, it does full page reloads of the HTML underneath it.
[01:29:24] essentially.
[01:29:26] And you might be thinking, OK, well, server components like that, they're like semi MPAs.  Some of the MPA frameworks are looking at this.  They're going, OK, well, can I render an MPA in here?  Because if you render an MPA in here, your root goes back to being static again, and you can just hydrate the islands like we've been doing.
[01:29:44] Right? But...
[01:29:46] React server components are not that. They start re-rendering right from the root again, like an MPA. They're not swapping out the HTML. Instead, I don't know if you're going to be a good example.
[01:30:00] How many of you are familiar with VDOMs?
[01:30:03] The classic...
[01:30:05] thing was when you call in a VDOM, when you call...
[01:30:09] Um,
[01:30:10] Render.
[01:30:12] you render your tree.  So you render your document.  And then the next time you call render,
[01:30:21] Yeah.
[01:30:23] You render a new document.  And let's make this one.
[01:30:28] And then over here somewhere,
[01:30:33] I'm sorry, light green.  Over here somewhere,
[01:30:36] you have the actual DOM.
[01:30:39] Okay.
[01:30:41] And
[01:30:42] They're not there.  You have the actual DOM.
[01:30:50] And
[01:30:52] Every time you render, you just go, OK.
[01:30:56] What's the difference?
[01:30:58] between this and this, what's the difference?
[01:31:01] And then...
[01:31:02] Any little differences you find?
[01:31:05] apply them to this.
[01:31:07] And you just repeat this cycle, right, of
[01:31:11] Next.
[01:31:19] Thank you.
[01:31:21] previous...
[01:31:25] And
[01:31:26] the DOM. So you just do this process and in the middle you have
[01:31:34] This process is called diff.
[01:31:36] And this process is called patch. OK?
[01:31:41] So get the next state, you diff it with the previous state,  then you patch the DOM.  That's a VDOM for you.  All React is doing with server components
[01:31:52] is sending the whole page
[01:31:56] The next they just send this this the biggest difference is suddenly this like this all happens on the client for normal react component. Now with the server components, this happens on the server.
[01:32:08] And then everything else here happens in the browser.
[01:32:13] That's the secret of server components.  Essentially, they render that component on the server,  as in make the VDOM, like the...
[01:32:21] version of it. Send whatever
[01:32:25] temporary artifact they have to the browser where the browser can go, oh, is this different  than what I had before?  And then it can patch the real DOM.
[01:32:34] And the key is they treat these islands as just...
[01:32:39] opaque places that they don't
[01:32:42] update. Now, we haven't looked into this yet, and I haven't, so I haven't confirmed  this, but this is to my understanding how this works. So essentially,
[01:32:52] Thank you.
[01:32:52] they can retain client state
[01:32:56] even because they're not inner HTMLing.  They're not trying to go, oh, where's this component,  or where's this DOM element, and keep it there.  It's the same VDOM diffing that they have always done.
[01:33:09] Like if you're doing a big navigation, you're kind of re-rendering everything anyways, right?  So why don't we just re-render the whole app?
[01:33:17] Thank you.
[01:33:19] Well,
[01:33:21] Yes and no, though, because do you know what's really cool about this? And this is where we're going with this, is that what they've achieved by doing this is you are getting that benefit I told you about data serialization. You are not sending the server components as part of that initial bundle, so you are getting smaller size.
[01:33:42] But –
[01:33:43] At the same time, it's not an MPA.  If you had an input field,
[01:33:50] down here, again, I don't know why you have an input field in the stateless part of the app, but let's pretend it wouldn't lose focus.
[01:33:58] If you have child components and you're navigating or refreshing a search or something,
[01:34:03] they aren't getting...
[01:34:05] blown away. You're not just  it's not clunky like  Turbo is.
[01:34:12] And you might be going, well, why are they doing the whole page?
[01:34:15] consistency. It's kind of like when in Remix when you do a mutation,
[01:34:21] you just refresh all the data along the route.
[01:34:25] You know, like,
[01:34:26] It's copying the multi-page app paradigm
[01:34:31] without
[01:34:33] without reloading all the JavaScript assets and losing all your state.
[01:34:38] They basically are building a browser inside the browser.
[01:34:43] Sure.
[01:34:46] Thank you.
[01:34:46] Thank you.
[01:34:52] So, listen, this is not what I thought they were  when I originally looked at certain points.  I was like, okay,
[01:34:59] you know, what's the big deal? Like, so you don't send, you know,
[01:35:03] some Lodash stuff to the server. A well-written API could do the same thing.
[01:35:08] But this is actually...
[01:35:10] react virtualizing the browser in the browser. And you're like, well, why the hell is react virtualizing the browser in the browser? Well, it's probably part of their bigger plan. This could probably work on platforms outside the traditional web. I don't know exactly. And in a sense, VDOM diffing your whole page all the time, probably
[01:35:27] isn't
[01:35:29] that performance, but again, who cares, right? And this is a technique that's uniquely React. It's pretty much impossible
[01:35:37] to do this without a VDOMer. It's very challenging. I wonder how you would do this. But on the positive,
[01:35:46] On the positive, these trees are completely independent.
[01:35:55] And that's really powerful because...
[01:35:59] Just like Astro and partial hydration,
[01:36:03] I kind of wonder
[01:36:05] Are server components a framework agnostic mechanism?  I actually went around and I started tapping people like Ben from Slinkity and I started going to Astro Chat this week and just going like, hey, you guys are going to implement server components?  And they're like, what? I don't think anyone really realized this. When I looked closer at it, I realized this thing.
[01:36:22] is very, it's just like,
[01:36:25] because the tree is completely separated because they had those rules that are  exactly the same as partial hydration rules.  It seems possible that you could basically weave everything,
[01:36:35] a vdom diffing framework around an islands framework and essentially have framework agnostic
[01:36:42] kind of server component architecture.  And you might be like, well, it's not framework agnostic if you're
[01:36:48] Server components are like a framework.  But the thing is,
[01:36:51] Think about the qualities of server components.
[01:36:54] They don't have state.
[01:36:56] Right. They can't be stateful. They can't do updates in the client. They are, for the most part,
[01:37:01] just templates that do data fetching. So yeah, sure. It's nice to write them in your same
[01:37:07] format like you know if if you're using react use the jsx it kind of fits in seamlessly or whatever  but think about it if you're using something like astro you already have astro files you know
[01:37:19] It's just a different compilation of astrophiles is one way of looking at it.
[01:37:24] There are trade-offs, though.
[01:37:26] You know, conceptually, you can see it.
[01:37:28] with partial hydration, there's like no runtime.
[01:37:31] So you just send the islands as you need it.  Maybe you lazy load them.  But you just send the island code and you just
[01:37:37] it updates and you send the least amount of code you need.  This needs a runtime to do all this diffing.  You basically need to always load it in the browser.  So this is better scaled for larger apps.  You know, like as I mentioned before,  this actually makes React, I think, 10 KB larger.  So like you're at 50 KB with React,
[01:37:56] even before you started.
[01:37:58] But this is kind of
[01:38:00] why I don't see it being quite the same.  But for large, large sites,
[01:38:05] maybe this is a good scaling option.
[01:38:09] So, yeah, like...
[01:38:13] Don't feel bad if you don't get this right away. I didn't. I looked at this stuff for a year and I didn't really click on me because you start going, well, how the hell does routing work then?
[01:38:22] You're not using React Router.
[01:38:25] You just tell the server, like, I moved to a new location.
[01:38:29] Honestly, I have a lot of questions. This is what I've kind of figured out simply from reading stuff. But
[01:38:35] Maybe we should try it. Let's look and see how server components actually work. I'm excited  about trying the demo app because maybe that can give more insights.
[01:38:45] Um,
[01:38:47] Right.
[01:38:50] So let's open up the demo.  I'm glad I actually installed it earlier.  I actually...
[01:38:56] I didn't leave it.  Usually I leave these things last minute, and then I install them, like, while I'm working on the stream.
[01:39:02] I'm so glad I didn't this time because you actually have to have Postgres installed and stuff.  And I actually ran into like some issues there because I was like, I didn't have it.  And I was like, oh, damn it, this isn't going to work.  I can't do the stream today.  But luckily, I figured it out and realized that...
[01:39:18] You know, read the readme, probably a good recommendation for anyone.
[01:39:23] So I have the server component demo that React
[01:39:28] had in that original video. So let's take a look and see what we're dealing with, right?
[01:39:35] I'm just going to put a banner up.
[01:39:38] One second.
[01:39:45] All right.
[01:39:46] Thank you.
[01:39:50] Yeah.
[01:39:50] Thank you.
[01:39:51] I'm kind of excited about this.
[01:39:55] Thank you.
[01:39:56] Because...
[01:39:57] Honestly, I just got the page up and then I was like, okay, okay.
[01:40:02] That's it. Let's look at this first time, do real live
[01:40:07] kind of reaction to this stuff.  So, okay, we have...
[01:40:12] a project and it has notes.
[01:40:16] OK, this is probably what they used to seed the data.
[01:40:21] Because the demo has some notes.  Actually, you know what?  Maybe we should open the demo window first, just so that we can see what we're dealing with here.  It's on port 4000.  That's an unusual one.  OK.  Yes.  OK.  So for those who haven't seen the demo, essentially, it's a note app.  We have notes on the side.
[01:40:40] In a search, okay, yeah, yeah.
[01:40:44] Yeah, okay. Search. And you can create a new note. Okay. And then -- oh. Oh.
[01:40:50] one
[01:40:51] *gasp*
[01:40:53] Wait a second.
[01:40:55] And you can click and look at the notes.
[01:40:58] Oh, it's not even using browser history.
[01:41:01] I was like, naturally, how do I go back?  So I click back, and it takes me right out of it.  So yeah, this is what I'm talking about, routing being a different consideration here.  There's not even...
[01:41:12] Browser history.
[01:41:14] I'm sure like they can address that and have ways of doing this, but just it's kind of interesting. Okay, so let's move on. Okay, so public...
[01:41:29] Um...
[01:41:31] OK, just static assets scripts, some stuff for building.
[01:41:36] Thank you.
[01:41:39] Okay.
[01:41:41] This looks like...
[01:41:46] server.
[01:41:48] This looks like just a typical Express server
[01:41:53] Thank you.
[01:41:54] Thank you.
[01:41:55] Okay, yeah, okay.  I kind of was hurt about this,  but I think the way this works is,  it's not that fancy,  but I think server components work off a single...
[01:42:05] end point.
[01:42:07] The
[01:42:07] And as I mentioned, it makes sense because you re-render  the whole page.
[01:42:12] Yeah, based off that state. Okay. We'll look into this more in a minute. But essentially,  this looks like where they set up their notes for their API.
[01:42:19] posts so that you can create nodes.
[01:42:22] Yeah, update a note, delete a note.  This is a REST API and the React server point.  This is just your server entry and then your server code and then here's the REST API.
[01:42:32] Here is our whole tree of server and client components.
[01:42:37] Um...
[01:42:38] all kind of co-located with each other. Here's our entry app.
[01:42:42] Thank you.
[01:42:43] OK.
[01:42:46] So we have our header.
[01:42:49] Then we have our search field. Search field is...
[01:42:53] Client component.
[01:42:55] We have our edit button, which is a, I feel like you'd be doing a lot of that.  I mean, maybe you should use naming conventions, but you're kind of like, which one's the server component?  And they have a suspense boundary.
[01:43:06] Interesting, in the server component,
[01:43:09] So you can suspense in the server component around a note list.  And the note list--
[01:43:15] is a server component.  So they're rendering the notes on the server.  So this is probably again, so they never have to serialize  that data and send it to the client.  You avoid the double data problem and you just send the HTML,  and then suspense, and then
[01:43:31] notes selected. Maybe there's some
[01:43:34] editing information.
[01:43:36] Note selected.
[01:43:39] It's also a server component. Okay, cool. So
[01:43:43] All right.
[01:43:44] All right.
[01:43:45] Yeah.
[01:43:47] Is there anything else in the project? Okay, so we're going to spend most of our time looking at how these occlusions work, but essentially
[01:43:56] This is funny because this new probably technically is server rendered, but the edit button is client, but the new can never change.
[01:44:06] OK, well, let's look at the demo for a minute.  And let's get our console open because we probably  want to see what happens.  First of all, I think they mentioned in the readme  that this is client render, not server render.  So I'm sure the initial page load is just the pits.  Yeah, OK.
[01:44:23] Yeah, let's not worry about that. But...
[01:44:26] Essentially, we have our HTML and let's look at our HTML.
[01:44:33] Yeah, this is like a full div root.  Yeah, this is a client's rendered app.  Here's your mount point.
[01:44:40] And then main...
[01:44:45] OK, so this is like your vendor bundle or like your--
[01:44:49] thing.  No, it's small.  It's only 268.  Let's disable cache.
[01:44:57] Cache. Yeah, okay. 283 kilobytes. Yeah, okay. Yeah, this is
[01:45:01] This is React.
[01:45:04] Okay.
[01:45:06] And then...
[01:45:08] Client, so these are probably the separate islands, client five, client one, client six. These are probably the separately isolated client islands code, each separately lazy loaded.
[01:45:20] And then...
[01:45:22] That's it for the JavaScript.  And then this looks like a request to the React endpoint.  Okay, cool.  I don't know if anyone can see this.  This must be their format.  I guess there's no prettier on this.  But it's...
[01:45:35] It's like almost like a VDOM node thing or...
[01:45:41] It's like, or maybe it's like almost like JSX, children,
[01:45:46] Yeah, it's basically encoded
[01:45:48] view code. You can see class name, sidebar, stuff like that. Okay. So that's cool. Now,
[01:45:55] Okay.
[01:45:56] When we select a node,
[01:45:59] It renders some stuff.  And I guess it renders this.  We know already this is a server component.  And it needs to update this.  But this list is a server component.
[01:46:11] But maybe it's, but I think it's wrapped in a client component.
[01:46:16] Um,
[01:46:16] Let's look at the request, because it did another request on the new location.
[01:46:20] It's funny because it's not reflected in the URL, but--
[01:46:24] Huh, see? Oh, that's funny. Yeah, so you can see it's going from the top because it's, it's the data is actually almost identical. It just added this line at the bar or it added a line in here.
[01:46:37] UL and then div. It adds like this line at the bottom, which I'm gathering it was adding this. So this is just new stuff. But generally speaking,
[01:46:46] you can see it's the whole tree kind of being rendered.  So if I click here again,
[01:46:52] Will this basically be the same?
[01:46:55] Yeah, so every time I click, React keeps on sending
[01:46:59] the full page again.
[01:47:01] Oh, wait, actually, no. Wait, wait, wait, wait. Okay, let's watch that again.
[01:47:07] We only care about the Ajax requests. Let's watch that again.
[01:47:11] Thank you.
[01:47:12] So we land, we get our initial data, we select one, it shows it. We select two, it shows it. We go back to the first one. It doesn't show it. Okay, so they're caching the same location, it looks like. I don't know if they always do that, but they seem to be doing that in this demo.
[01:47:28] But essentially, if you look at each request as we select them,
[01:47:33] Thank you.
[01:47:34] It's like 99% the same data being sent over and over again because the stack part of the page doesn't really change much.
[01:47:41] That's interesting, but I guess it could.  That's the point.  I guess that's like an optimization.  They can probably decide not to send the whole page.
[01:47:49] if they know that, but generally speaking, it's,
[01:47:54] This is interesting. OK, let's jump here. So new again, cache.  So right now, basically the first time you load a page, they load it and then it gets cached and it never happens again.  This is even when we need to save them the cache. So this is like a JavaScript level cache in their app that's doing this behavior.
[01:48:12] different reactions I love it
[01:48:15] Yeah, I mean...
[01:48:19] It's interesting, right?
[01:48:22] I mean, you can tell...
[01:48:25] that this is super powerful in a sense.  I mean, on one hand, you're kind of like, I don't think...
[01:48:33] I mean, this is obviously dev mode and whatnot, but obviously not everyone wants like the full React package. Like there's a lot of JavaScript for a solution that's all about no JavaScript.
[01:48:45] But I...
[01:48:49] but like,  uh,
[01:48:52] Let's let's oh, I'm also in fast 3G. That's why this is so slow. Sorry. Let's refresh.
[01:48:59] Thank you.
[01:49:00] Yeah, there we go. We were still in slow-mo mode from when I was doing the benchmarking.
[01:49:07] Okay.
[01:49:08] That's a little bit better. But same pattern. Okay, so interesting. It does seem wasteful in a sense, but you start thinking maybe there's like ways to optimize this. But essentially, the reason it's always the same is because it's not the dynamic parts that are changing.
[01:49:26] So let's do a search, right?  Like, how does that work?  Let's go here and go like,
[01:49:32] W.
[01:49:33] Thank you.
[01:49:35] Thank you.
[01:49:37] Okay.
[01:49:38] Okay.
[01:49:40] That was the new one. Let's clear the console again.
[01:49:43] Okay. Original state doesn't matter, but now we go W.
[01:49:46] Let's do --
[01:49:49] Um...
[01:49:53] M.
[01:49:54] Okay, there we go.
[01:49:56] Thank you.
[01:49:59] Thank you.
[01:50:01] Yeah, I wonder...
[01:50:04] It's hard to see because we'd have to...
[01:50:08] like pull this out. I mean, there's no formatting this like with a prettier type thing because it's like its own thing. I don't think preview looks any nicer than response.
[01:50:18] Thank you.
[01:50:19] It's hard to tell the differences. My assumption is
[01:50:23] Well, let's do this. Let's just do this. It's like text diff. Text compare. Did that load up? I'm just curious. Sorry if not everyone is as curious about this as I am, but
[01:50:37] I just want to kind of understand
[01:50:40] what-- like a little bit better what's going on here.  So let's load our initial page.
[01:50:45] and get the location, get this stuff, put it on side A.
[01:50:53] It's a special format.  I think it's streamable.  You notice how each key is independent.  It's not all connected.  I think it's because they can actually stream it in chunks.
[01:51:04] And it's,
[01:51:05] That's was W.
[01:51:08] Yeah.
[01:51:09] And it's...
[01:51:12] Thank you.
[01:51:14] Thank you.
[01:51:21] Yeah, okay.
[01:51:23] So essentially,
[01:51:25] you're seeing the -- because that list is server rendered, we're just seeing this part of the  JSON essentially removed from the results. That's what I was expecting to see. But
[01:51:38] Thank you.
[01:51:41] Yeah.
[01:51:43] It's interesting. It's a little bit hard to read, but I don't think this is supposed to be human readable. But you can tell each one of these keys is independent. It's not tied to the same object. So you can serialize this in a session. This is a special JSON format that's made specifically for this. But it's, yeah, basically re-rendering the whole page and then doing some sort of diff against it to make it render in the client.
[01:52:08] I mean, this is pretty cool stuff because...
[01:52:11] As I said, they don't need, if this was SSR, they don't need to actually send the data, except for what would be an input to a component. Let's look at the project. Are there any components that take any interesting data?
[01:52:30] Thank you.
[01:52:31] Thank you.
[01:52:32] Yeah.
[01:52:34] They are stateless. Yeah, that's the whole thing. Server components aren't allowed to contain state.
[01:52:43] They basically just get called with their location or their input, essentially.
[01:52:48] And it makes sense because
[01:52:50] As I said, in partial hydration, you can't have stateful components because they could re-render.  So it's actually perfectly consistent with the partial hydration model.
[01:53:00] Right, but I don't think that gets persisted per se.  I mean, you can make a caching layer if you want, like, outside of it, but, like,
[01:53:08] Yeah, like essentially it's like an API request or like a like restful thing. You just request with the input and then it does the work fetches the data does whatever I'm assuming that.
[01:53:21] each time it probably fetches the data and then renders what it needs to. Like pretty typical thing. It's just all bundled together. Okay. But I was interested though was do
[01:53:30] Do any of the client components have...
[01:53:34] input. And the problem is this one's a server component, this one. So let's look at node  server component and see if it has any client component C.
[01:53:42] Okay.
[01:53:43] These are static. There's nothing...
[01:53:46] Oh, right, but it makes sense because a server component can't be...
[01:53:50] But it could, no, but no, no, no, see, that's, huh, that's too bad.  It's funny.  In a server component, passing different arguments here, like passing a variable here, would be perfectly okay.  Because each renderer could actually change what that value is and send it differently.  Without being quote unquote stateful.  But it looks like our client components in this example...
[01:54:15] edit button.
[01:54:17] Eric Flint: And it button.
[01:54:19] don't have any actual...
[01:54:22] dynamic props.
[01:54:25] OK, the ID is dynamic.
[01:54:34] Okay.
[01:54:36] Interesting. If it is editing.
[01:54:39] Thank you.
[01:54:41] This is going to be so hard to actually see, though. I think that's the tricky thing.
[01:54:46] Thank you.
[01:54:48] Mm-hmm.
[01:54:50] Yes.
[01:54:51] Yeah, unless you're driving it from the input.
[01:54:54] you're literally not allowed to use hooks inside server components.
[01:55:00] Like U-State is not allowed.
[01:55:03] Thank you.
[01:55:05] Thank you.
[01:55:06] Thank you.
[01:55:08] Thank you.
[01:55:12] So, yeah, I don't know if we're going to be able to diff this, but it's interesting because I kind of want you kind of interested because you're like, OK, if I if I.
[01:55:22] Let's forget about this, let's close this again.  If I get into this preview here or inspect this element,
[01:55:28] and then I click on it,
[01:55:31] Yeah, like...
[01:55:32] Peace.
[01:55:33] you saw it, like it's a fine grain change.  Like it's been diffed and patched  only in this one specific place.  Because the interesting thing for me  is this component is server rendered technically,  but I think the wrapper...
[01:55:51] I'm not sure if the wrapper comes in on that. What's this?
[01:55:55] Thank you.
[01:55:57] And this is...
[01:56:00] I don't think that up actually made another request.  We get that one and then we press the app.  No, the data was already there.  Okay.
[01:56:09] Yeah, it's interesting because this whole ability to toggle this,  I think that that's kind of what they're displaying the power of here,  because this is server rendered, but this toggle, this is client wrapper.
[01:56:19] around a server component.
[01:56:24] Right.
[01:56:26] So,
[01:56:28] I kind of want to see what the code for that looks like, just to kind of get an idea of what
[01:56:36] I'm pretty sure it's just the transclusion that we've been talking about before, but if we go to notelist server,
[01:56:42] there's a sidebar note, which is a shared component,  which means it matters where it's rendered under,  but since it's rendered under a server component,  it's technically a server component here.  And then each sidebar note
[01:56:58] also has a client component in it.  And the client component, yeah, this is a perfect example  of what I was looking for, right?  The client sidebar node,
[01:57:08] wraps the sidebar note.
[01:57:11] So the actual node itself,
[01:57:14] Yeah.
[01:57:15] has a title.
[01:57:18] And last updated ad, which is what we're seeing
[01:57:22] Here's the title last updated at.  And then this description.
[01:57:27] isn't part of
[01:57:29] of the server
[01:57:30] side of it.
[01:57:32] They...
[01:57:34] The...
[01:57:35] Well, actually, they pass it here.
[01:57:38] Who wants to bet that this is still server rendered?
[01:57:41] even though it's getting passed as a prop.  See, they're passing JSX as a prop here.  It's no different than sending children,  if you think about it.  But essentially,
[01:57:54] Interesting.
[01:57:55] and then they pass the ID and title to the child.
[01:58:00] OK, OK, let's look at it.  This is the kind of thing.
[01:58:04] that I was looking for.  So this is client sidebar note.
[01:58:10] Okay.
[01:58:11] Use my trend location.
[01:58:15] OK. This is probably how they do the routing.
[01:58:19] I'm going to guess, but essentially we have...
[01:58:26] Some animation stuff.  We have our button that goes back and forth.
[01:58:30] And then when we click it, they start a transition.  This is a React transition where they set their location.  So they know that it's going to take time to think so they can do the pending state.  So they don't.  The transitions and suspense are so key in all these technologies because they kind of smooth out all these async interactions.  And then basically based on the client side is an expanded thing.  They either...
[01:58:55] Show the different Chevron
[01:58:58] and then show expanded children.  And expanded children
[01:59:04] is...
[01:59:06] the prop.
[01:59:08] Yeah, OK, so that's exactly what we were thinking.
[01:59:13] I don't.
[01:59:14] I don't know why
[01:59:17] There's
[01:59:19] Oh, it's summary. That's why I can't see it. Okay, it's summary. So essentially this
[01:59:26] Going back to our example here.
[01:59:28] Both...
[01:59:31] The minimal.
[01:59:33] or nothing here in this case.
[01:59:36] So both this view
[01:59:39] and this view are server rendered, but the client component controls whether to show it, but it actually isn't responsible. Like the server component passed in the essentially the rendered HTML
[01:59:54] as props.
[01:59:57] So this is a perfect example.
[02:00:00] of what I was talking about.
[02:00:02] Nothing about the note.
[02:00:04] needs to be sent back.
[02:00:05] to the browser, like if this was SSR, this is all client rendered.  But if this was SSR, we wouldn't serialize the data for the node.
[02:00:13] And
[02:00:14] who
[02:00:15] the cool thing is we can keep on updating it, essentially.  I think that's the next thing we want to look at, right?
[02:00:23] Because...
[02:00:24] We can update this, right?
[02:00:28] You can even link.  So if I go in here,
[02:00:31] Click edit.
[02:00:33] Okay.
[02:00:33] Thank you.
[02:00:34] Now, I'm sure this is all client side,
[02:00:38] Thank you.
[02:00:39] But I want to see it update the server component that we have selected and expanded on the outside.
[02:00:49] add this thing. We got some client side mirroring going on here. This thing is
[02:00:56] is cool, period space. Now, when I click done, let's watch the sidebar and see what happens.
[02:01:05] This is cool.
[02:01:06] yeah yeah
[02:01:08] So this is sort of the mechanism.  Let's actually...
[02:01:14] Yes.
[02:01:16] Let's...
[02:01:18] Let's look a bit at that edit experience,  'cause I wanna find that done button, handle save.
[02:01:26] request location, blah, blah, blah, await save, and then navigate, which again,
[02:01:32] Should we act writing their own router?
[02:01:36] Don't tell the remix, guys.
[02:01:39] -
[02:01:42] Do you see what I'm saying?  It's like they're bypassing
[02:01:51] the whole like
[02:01:54] like the whole browser, like the whole experience that we've come to kind of expect from ClientSide.x. As I said, I suspect as much as sort of confirming what I'm saying is this is a different paradigm, like
[02:02:06] completely. This is like virtual MPA.
[02:02:12] They're like, how can we recreate MPA without, you know, reloading everything?
[02:02:19] So, yeah, they await the response and then they navigate and then they
[02:02:24] Because they navigate, I don't know how navigate works.  I think we'd have to reverse engineer the router.  But let's pretend we understand how this works.
[02:02:34] essentially, I wonder if you can kind of have a redirect, in a sense, have the ability to basically go, oh, actually...
[02:02:42] while we're here, let's redirect to a different server tree  and re-render it within new data.
[02:02:47] Actually, well, actually this is the client.
[02:02:51] navigating, isn't it?
[02:02:54] That's weird. Where are we? Note editor. Is that a that's a client component.
[02:03:00] It's saving the node.
[02:03:02] We're safe note.
[02:03:03] And then it's navigating.
[02:03:06] Thank you.
[02:03:07] Use mutation. Okay, so it's posting. Okay. Let's
[02:03:13] Let's do this again and watch what we get in the network.
[02:03:16] I think it's actually doing two trips, which is fine. It's probably like a -- I was thinking it would be interesting if the mutation model could be part of the same thing. Like, think about it like a form post. You post with the data and then you get back the new server stuff. But that would be kind of cool.
[02:03:33] Right? So let's edit this again.
[02:03:36] Thank you.
[02:03:37] All right, and go cooler.
[02:03:40] That's done.
[02:03:43] Okay.
[02:03:45] I did not see an Ajax request, just this.
[02:03:50] Thank you.
[02:03:51] They are doing something smart here.
[02:03:59] - I don't know what save note is, or use mutation is doing.
[02:04:08] It's funny.
[02:04:13] It's like a codified route thing, but otherwise, yeah, it's a pending state.
[02:04:19] It would be very easy to turn this into an optimist.
[02:04:23] I've been looking at this recently, but let's decide the point.
[02:04:26] No, it doesn't appear to be sending a post request.
[02:04:30] So it must be handling this
[02:04:37] it must be handling this.  Like, that's what I was looking for.  I'm like, where's the post request?  Because the way the code's written,
[02:04:42] Makes you think that, but look,
[02:04:44] Request payload.
[02:04:45] See?
[02:04:47] We haven't been looking at the payload,
[02:04:49] But most of the time when we navigate, it's just like, here's the new navigations thing.  But when we do this, it actually did send a body and title.  So it is doing it in one trip like we thought.  The code made me confused because I was like, how does this work?  But essentially, they're posting.  It's like a form post.  They're posting the data and then re-rendering the server on the way back up.
[02:05:11] This is really cool.
[02:05:16] No, this demo doesn't have GraphQL or anything fancy.  I don't know how the API works exactly, but essentially...
[02:05:25] They're just going, OK, we're on the client.  We're going to send this data.
[02:05:30] And,
[02:05:32] against the React endpoint, it's going to
[02:05:36] I guess realize it's a post.
[02:05:40] I don't even know.
[02:05:42] Mutations must get registered in some way.
[02:05:45] And then essentially...
[02:05:48] Yeah, this is interesting.
[02:05:52] Okay. Yeah. Yeah. So it's a combination, the location, uh,
[02:05:56] is like the URL that tells you where things,  because you see is editing false.  Like,
[02:06:00] Uh...
[02:06:02] I'm kind of lazy here, but let's--
[02:06:06] Let's get a tool. What is it? Like a URL.
[02:06:11] E-code or something.
[02:06:14] That's all.
[02:06:15] Let's just decode this URL and see what the location looks like.
[02:06:19] Select-- yeah.  So on the URL, they are sending the location information.
[02:06:24] And then...
[02:06:26] In the body, they're sending the data they're updating. So
[02:06:30] And then
[02:06:32] It's a put.
[02:06:34] Okay, where this one is a, again, like it's literally like the browser, right? Like you're, they're like putting or posting.
[02:06:43] to
[02:06:45] to resource locations and then responding with their re-rendered
[02:06:55] browser page.
[02:07:00] Yeah, exactly. This isn't, we were looking at Remix earlier, right, using this kind of like rest, like location based thing, like posting back to your own page and this is essentially the same model, but done with a virtual browser.
[02:07:16] See you.
[02:07:20] I don't know, when you heard about React Server Components, was this what you were thinking?
[02:07:26] It wasn't what I was thinking.
[02:07:30] that I
[02:07:31] As I said, I got that hint when I realized, wait, this works like partial hydration.
[02:07:36] everything starts clicking once you make that connection.  And for some reason, that original demo didn't
[02:07:43] Do that for me.
[02:07:49] Like, I saw it and I was like, oh, okay. They're just doing some fancy diffing over the wire. But this, this is actually an MPA paradigm. They're actually doing server side routing and, and basically full page postbacks.
[02:08:07] like Rails or Remix.
[02:08:09] but using a completely different paradigm and using completely different libraries.
[02:08:15] This is, yeah, this has got to be like the long-term game.  I don't...
[02:08:20] This is so crazy though, right? When you kind of like piece this together, you're kind of like, huh,
[02:08:25] Like,
[02:08:27] stuff that you've taken as the backbone of your apps, like React Router, like what makes Remix Remix,
[02:08:33] Does that fit in here? This isn't the web anymore. This is like React VM machine, right?
[02:08:41] But it's kind of cool.
[02:08:46] Yeah.
[02:08:47] Thank you.
[02:08:48] And I should have done this early, like ages ago.
[02:08:52] Thank you.
[02:08:52] I don't know if I would have appreciated it as much, you know, a year ago, but...
[02:08:57] man.
[02:08:58] This is so much like when you look at the benefits, you're like, oh, okay.  So you don't have to send data or you, you know,  this is a really nice model for, um,
[02:09:07] for data fetching, you know, like you can kind of like, you know, this is not an API thing. This is like, this is, this is, this is MPA and
[02:09:16] This is MPA in the, in the, in fully MPA in the browser sort of thing. Okay. What else can we look at here? Cause that's the, that's the moment. I didn't even know, I didn't even know it worked like this. This is
[02:09:29] This is really cool.  So puts and posts, like let's make a new one.
[02:09:34] I mean, we probably have an idea of what this is going to do.
[02:09:38] What are we going to do?
[02:09:40] Hello, stream.
[02:09:44] In this stream.
[02:09:47] We are looking at react server.
[02:09:53] I'm holding this.
[02:09:57] Thank you.
[02:09:58] Yeah.
[02:10:00] And
[02:10:01] Thank you.
[02:10:02] Thank you.
[02:10:04] Thank you.
[02:10:06] Really unique. Okay. So, we got a preview panel. And then let's clear our logs. But  we know what's going to happen. We're going to hit done and we're going to post.
[02:10:18] Oh, that's different.
[02:10:20] Huh. This is an actual proper...
[02:10:25] Post, this isn't against our React endpoint.
[02:10:30] This is different, but it's still returning it.
[02:10:35] So there's more...
[02:10:39] Thank you.
[02:10:42] Oh.
[02:10:45] Okay.
[02:10:46] Okay.
[02:10:48] I got a theory why this is like this.
[02:10:51] 'cause it's still React server component.  So this defeats my initial thinking.  There is more than one server component endpoint.  It's not just the React endpoint.
[02:11:00] Essentially,
[02:11:02] So Remix is basically going to make this more easy for people to make the transition.  This is a resource route.
[02:11:09] If you've used...
[02:11:12] If you're making a new one.  Well, yeah, sort of like...
[02:11:19] You can only use a single HTTP verb against the same resource. Like when you have
[02:11:28] If you know your REST APIs, you have post, put, delete, get,
[02:11:35] um patch and a couple other ones that no one uses but um
[02:11:39] your URL and combination of verb are the unique combination.
[02:11:46] Essentially,
[02:11:48] to make up i'm gathering what's happened here is the other routes we're doing at  you're already on that page so you're just posting back to the page so you're like
[02:11:58] It's like in Remix, you can have pages that have loaders on them.  And when you hit that with a get, it runs the loader and loads and always returns the HTML.  But if you have another...
[02:12:10] resource route, so a file that doesn't have the component in it and just has the loader and the action in it, in that page, it doesn't return the HTML and it just performs the action. And you need that sometimes because, like,
[02:12:27] like,
[02:12:28] There's no...
[02:12:30] Thank you.
[02:12:31] There's no posts page here.
[02:12:33] So, like, there's no, like, you're going to have, yeah, like, this is sort of my theory.  I mean, I guess we can look at the code and kind of make this out.  But essentially, sometimes you're going to have routes that still end up returning HTML or doing that, you know, doing your work.  But they're not tied to, like, a page.
[02:12:53] or like a server component.  So I'm gathering the notes endpoint is for the things that aren't
[02:12:59] like tied to the same resource location as the server component, but still need to be able to process stuff and then like redirect to render it.
[02:13:11] Thank you.
[02:13:13] Thank you.
[02:13:14] But if that's the case, they could just use React. This is obviously a post. Post is for creating and put is for updating, definitely. But I'm saying they chose specifically not to go against the React endpoint here.
[02:13:33] I was expecting them to post against the React endpoint, and they posted against the Notes endpoint.
[02:13:39] Thank you.
[02:13:41] which is,
[02:13:42] As I said, so that's note editor save.
[02:13:46] Oh.
[02:13:46] I mean...
[02:13:49] I don't even, is there a difference between, yeah, see here, ID, put post, and note ID,
[02:13:57] See?
[02:13:59] Wait.
[02:14:01] Maybe I wasn't paying attention earlier.
[02:14:04] Maybe these all go against the note.  I thought the save didn't go against the note, but maybe I'm wrong.  Let's edit this again.
[02:14:10] to learn more.
[02:14:15] Let's try the save again. I might have been mistaken here when I looked at the save. I thought it went against the react endpoint.
[02:14:24] Because I just saw the number and I didn't think of it.  No, it's against notes.  Okay.
[02:14:30] So...
[02:14:31] OK, nothing so fancy.  It's more of just like, I guess you can have your API endpoints.
[02:14:38] essentially, like they basically have an API that returns server component code. It's kind of like doing the redirect, so to speak. So when you do edit the notes, it always hits the notes endpoints. But it's interesting, you can have multiple endpoints that serve it up. I kind of want to see what that looks like.
[02:15:00] Yeah, no, I completely understand that if there's anything like that. It wasn't about the difference between put and post. I just couldn't figure out why they're hitting different endpoints.
[02:15:09] But they weren't. That was my mistake.  I thought they were, for some reason, putting against the React endpoint and posting against the notes.  But in both cases, they're hitting...
[02:15:20] In both cases, they're actually hitting a variation in the nose time point.
[02:15:27] Right, with a post, you hit the top of a resource because its job is to allocate you the resource ID on the sendback.  And on the put, you get the route with the ID because it already has its location.  You're just updating it.  But let's go back here for a second because this is...
[02:15:46] This is interesting because
[02:15:48] It means that everything's in here.
[02:15:53] Thank you.
[02:15:55] Yeah, OK, so it's just updating the MD.  So we've been writing to a local thing.  So here's our new note here.  See, there's MD5.
[02:16:04] It's funny because there's a SQL database involved in here too, but that's interesting.
[02:16:14] Insert into notes with this data, a weight rate file.  So that's a post.
[02:16:19] and then put,
[02:16:22] And then send response.
[02:16:25] Thank you.
[02:16:26] Thank you.
[02:16:30] Thank you.
[02:16:30] Yeah.
[02:16:32] I'm not sure how they bridge this all together. I think there's another technology that I don't understand quite yet.
[02:16:39] But my suspicions
[02:16:41] Like, because you don't see the redirect.  They all just call send response.  And the codes are in a way that they're almost like they're  separate, but they're getting sent together.
[02:16:49] There's got to be a technology that React's using here that they've developed specifically to kind of handle this kind of multi-in-flight technology.
[02:17:00] thing, you know, but in either case, I kind of like this, this is the, I kind of love the model  from like a pure MPA standpoint. Like it's, it's just like,
[02:17:12] Thank you.
[02:17:13] Thank you.
[02:17:14] you know post or put the update return the new stuff diff it yeah this this is this is kind of  cool as i said this is a very purist vdom kind of approach as i said
[02:17:25] it
[02:17:26] I've always been kind of like,
[02:17:29] but
[02:17:30] When the VDOM got popular,
[02:17:33] There's a lot of benchmarks like DB Mon, and I've talked about this before, where it's like stock to craps and they're like spamming the page with all new data.
[02:17:43] Who the hell would ever do that?
[02:17:46] Right. Like, why would you spam the whole page of data? That's so wasteful. Yeah. And it honestly killed the fine green reactive libraries back in the day. Obviously, I built solid in such a way that it can handle those scenarios. But like, essentially, that was like, oh, look how perform react is. And I was like, what a stupid example. Why would you ever do that? It's wasteful. You're sending way too much from the server. You're doing you're sending too much data. You're sending it way too often.
[02:18:16] and you do fine-grained changes,
[02:18:18] And
[02:18:19] You can't, you know,
[02:18:21] this is just like the extreme terrible like worst scenario like you'd never do that um so when you  work with like fine-grained reactivity and stuff it's like it's like it's not hard to make something  more performant you know um
[02:18:38] when you take that, this approach,
[02:18:41] is like it's i i think it's it's good for the the wide grain stuff you wouldn't want to spam  something with this but
[02:18:49] If you're going to do a full page navigation anyways, do a full page navigation.
[02:18:54] So the real question is,
[02:18:57] for me on this is
[02:18:59] Can someone do server components without bringing in 50 kilobytes?
[02:19:05] Right.
[02:19:06] Thank you.
[02:19:07] Yeah, that's interesting.
[02:19:09] because like this is a fun place,  like a completely different place to live in
[02:19:18] But it looks like it requires a little bit of like the way the notes and the location stuff works and the post, like the way that they handle it. You need some infrastructure behind this and you need some stuff running in the browser. It's complicated.
[02:19:34] But...
[02:19:35] In another sense, once you have that infrastructure,
[02:19:38] the client side islands can kind of stay exactly the way they always been.
[02:19:43] So like--
[02:19:44] Mm-hmm.
[02:19:45] in a way,
[02:19:46] React server components aren't even like, I mean, they're doing diffs, so they are like React, but they're like a different framework. It's like two frameworks being wrapped around each other.
[02:19:55] And their interfaces are
[02:19:58] fairly simplistic or basic.
[02:20:01] It's just like passing props.
[02:20:04] So yeah, this is interesting. I think it would take a lot of work to make a proper server component infrastructure like this. And as I said, there's clearly something going on more than I'm seeing, especially the way that they're handling the put and post and combining them.
[02:20:18] you know, but
[02:20:20] Thank you.
[02:20:20] Thank you.
[02:20:22] Okay.
[02:20:23] As I said, it's like a different platform.
[02:20:28] Honestly, this is so cool.
[02:20:31] I have not played with them in the whole one year.  I seem kind of stupid for saying that at this point.  But when you consider the implications here,
[02:20:42] Right.
[02:20:43] Because like...
[02:20:44] Bye.
[02:20:45] There's this thinking, right?
[02:20:49] MPAs are good enough for most things, and they're incredibly fast for e-commerce because you never need to load that extra data.
[02:20:54] But, yeah.
[02:20:56] There's always this nagging thought.  You're like, well, what if I could do the server,  the client side rendering?  Like, that's why people are looking to using like Turbo  with their Astro frameworks or aisles or whatever,  because they're like, okay, let's bring client side framework  and get like the partial hydration and, you know,  a very small runtime to kind of do client side rendering.  Like in the back of their minds,
[02:21:16] They want to go back.  They want to be able to have client-side.
[02:21:20] capabilities. Everyone kind of innately knows that for a certain class of apps,
[02:21:27] that is beneficial. Rich Harris, who's been coining the whole transitional app thing,
[02:21:34] He straight up stood on Twitter when I was talking to him. He's like, let's face it, even though he's talking about this transitional piece, he was like, there's basically no reason to do MPAs anymore. And I'm like, no, that's not true at all. But he's
[02:21:50] He's like, well, in an ideal world, no one would be using MPAs.
[02:21:53] And
[02:21:56] I don't know, but like, I don't think no one is the right word, but I think this is an interesting middle ground that's quite compelling.
[02:22:12] Thank you.
[02:22:13] I see a few people in the chat of,  are having their minds blown away.  They're very similar to the way I have been like,
[02:22:23] This it's interesting because I said we're starting to look at some of the stuff with solid as well, you know, and Alexis has been making like some partial hydration demos and stuff. But this is even more different than I thought.
[02:22:36] Um,
[02:22:38] Thank you.
[02:22:39] This is very close. This has to be close to the endgame.
[02:22:45] Like not the end game, like reaction to keep on improving.  But if you look at the progression, if you kind of step back and go, okay,
[02:22:54] If everything they were building
[02:22:57] was to get to this point
[02:23:00] Does everything that they've done up to this point suddenly make sense?
[02:23:05] Yeah.
[02:23:07] So that's sort of what the question is for you, because I'd mentioned that when React, you know, showed off suspense for the first time and the lazy loading trick, you know, with it and, you know, people are like, oh, yeah, that's cool.  You can render some placeholders.
[02:23:26] I was like, okay, yeah, that's cool.  You can render some placeholders.  And then they showed off transitions.  And then I find out like a year later, Dan's like, oh, no, actually,  we started working on suspense because we were trying to actually do the same  thing Marco's doing basically.  Like we wanted to have a –
[02:23:43] out of order streaming on the server.  That's actually why we made suspense.  So if they were already there in their mindset,
[02:23:50] then like
[02:23:53] you can kind of backtrace it because,
[02:23:57] The truth of the matter is streaming...
[02:24:01] is best in a partial hydrated environment because
[02:24:04] you can remove...
[02:24:07] When you have partial hydration, you can remove the duplicate data problem.
[02:24:11] and keep the HTML payload small.
[02:24:16] Basically,
[02:24:19] And by maintaining HTML,
[02:24:23] Essentially, you can keep like they work hand in hand.
[02:24:27] Right. Because you could always just start.  You could always like render HTML and like stream the data.  But why you stream the HTML is because you get to preserve
[02:24:36] that experience, you get to preserve being able to send less JavaScript code.
[02:24:42] you know, even with async, like in Marco, something data related,
[02:24:47] like on a weight tag or something like the equivalent to suspense.
[02:24:51] doesn't mean something is stateful.
[02:24:54] how much of our code, I talked about use effect earlier  and saying that, you know, a lot of time we write use effect  is for that data layer.
[02:25:01] But how much of our stateful code and Remix hinted at this as well, because Remix is like, oh, I built this whole demo without using use state or use effect.  Because, again, they abstracted the data layer.  90%, you know, most of your state is that a lot of your state is derived from that data layer.
[02:25:17] If that data layer essentially
[02:25:22] can be removed completely to the server.
[02:25:26] you know, and
[02:25:28] partial hydration enables that like all the pieces fit.
[02:25:33] Yeah.
[02:25:34] Thank you.
[02:25:38] Thank you.
[02:25:40] I'm not sure.
[02:25:42] This is where I come in. This is where I start brainstorming because I've shown numerous times that things that can only be done with the BDOM can be done without the BDOM.
[02:25:56] Right.
[02:25:57] That's what I've been doing with Solid.
[02:26:01] from JSX and analysis there, from the type of hydration we do, to concurrent rendering.
[02:26:10] I've never found a problem that I couldn't solve without the VDOM.
[02:26:14] This one might be one of the hardest ones yet.  So maybe...
[02:26:19] Thank you.
[02:26:20] But it's literally...
[02:26:23] It's literally like a purist version of virtualization.  So I'm not sure how you do that with Vdom.  I mean, you could, or what makes sense, right?  All my state comes from React query.  Yeah, exactly, right?
[02:26:38] Think about that because suddenly you don't have client-side caches, right? Like,
[02:26:44] This is...
[02:26:46] This is...
[02:26:47] This is completely different.  I don't know if...  It seems wasteful to send the whole page every time.  But again...
[02:26:54] It also seems wasteful to
[02:26:57] like MPAs have been doing that forever. Right. And the,
[02:27:01] Like, that might be an okay middle ground. It's also wasteful to diff the whole page every time. But we're just talking about places where you can optimize.
[02:27:15] It's so funny, it's taken so long to get to this point, right?
[02:27:19] Thank you.
[02:27:20] I
[02:27:22] Yeah, you actually like that you react query.
[02:27:30] Like, it's taking...
[02:27:33] It's taking them so long to get to this point, right?  Yeah, there's also an option for VDOM hybrid.  Well, yes, because it's two framework.  You could have a VDOM framework that's a VDOM library that's super small, that's really good at doing the server component part, wrap a fine-grained reactive library that's incredible at doing client-side updates, and get, like, maybe invest in both worlds.  Yeah.  I mean, that's possible, you know.
[02:28:03] as a poet together, React's been kind of like,  they've been on this road so freaking long,
[02:28:09] And if it pays off,
[02:28:12] No one...
[02:28:13] no one, almost no one can follow them in the same, this way. Like, like what, what's,
[02:28:20] Like,
[02:28:21] Everyone was like, oh, yeah, React, you're wasting your time.
[02:28:27] Not everyone, but a lot of the framers, the people who have proudly put on the badge,
[02:28:33] Thank you.
[02:28:33] we don't do transitions or concurrent rendering.
[02:28:37] You don't need that because our framework is so performing.
[02:28:40] Oh, man.
[02:28:46] I mean, I always say to keep an open mind.
[02:28:52] But
[02:28:53] Like this is a starting point.  I mean, don't get me wrong.  This is going to take a long time.  And it has taken a long time.  But it's...  And people who come later, once they know the pieces, they will be able to replicate them better.  It's always like this.  But...
[02:29:06] This is...
[02:29:08] This is such an incredible amount of things.  Like Meteor was kind of trying to do stuff like this back in the day, perhaps.  And, you know, they had their own model and people, people have been trying stuff with Websockets and all this.  And maybe that's where the optimization goes.  Maybe there's different ways to achieve the same thing, maybe different patterns or architectures.  But the goal. Wow. That's that's that's a goal to have.
[02:29:30] to basically...
[02:29:32] have
[02:29:33] the classic web mental model
[02:29:37] without...
[02:29:39] having to deal with multi-page navigation.
[02:29:46] Thank you.
[02:29:51] Yeah, I mean, to be fair...
[02:29:56] This still takes a lot of code.
[02:30:00] you know,
[02:30:00] Um,
[02:30:01] Eh.
[02:30:03] In a sense, this could cap the limit. Maybe React apps start from 50 KB
[02:30:10] And now...
[02:30:11] it's very rare that they ever go over 200 KB.
[02:30:16] Like that's what I see this doing.
[02:30:19] Um,
[02:30:22] Yeah.
[02:30:24] There are
[02:30:25] How many to-do MVCs can you put on a page with 50 KV? I did this comparison, you know, let's go back for a second. How many, I say this because I'm comparing this to pure partial hydration like you have with,
[02:30:40] Um...
[02:30:42] what do you call it?  Like you have with...
[02:30:47] like Astro, Marco, whatever like that.  Let's just kind of do that sort of thing.  So 50 KB, how many to-do MVCs can you get at 50 KB?  I've got a table for that, don't I?  One of these.  50 KB.  Okay, 40 KB gets you...
[02:31:07] Yeah, okay. So let's say 35 to do MVCs.
[02:31:11] So basically, before you even get to this point,
[02:31:15] Before you even get to this point where you would want to use this React server component technology,
[02:31:22] you could have a pretty complicated
[02:31:27] MPA partially hydrated and be like happy and never get to the point to need this. Right. Like this is still a pretty steep cost. I don't know how many like e-commerce sites.
[02:31:39] like
[02:31:40] need 50 to do MVCs on them. Or not 50, sorry, 35 to do MVCs on them or whatever. Maybe there are, like, maybe that's just like where the sweet point is. Maybe they're like, but so this might be still kind of bloated on that side. But this is kind of, this is really...
[02:31:59] interesting once you get above that, right?
[02:32:03] Okay, let's catch up with the comments.
[02:32:10] Yeah, yeah. Quick is an interesting framework.
[02:32:13] because it,
[02:32:16] It does veto him Diff, but it's still...
[02:32:21] I mean, they'd have to change their architecture too.
[02:32:23] quick understands
[02:32:26] the rules of how to hydrate out of order.
[02:32:29] And I think...
[02:32:31] You know what? Actually, you're right.  Quick could implement this.
[02:32:36] Because
[02:32:36] Their mechanism doesn't rely on...
[02:32:41] on
[02:32:43] knowing
[02:32:45] anything.
[02:32:46] Oh, but that's the problem. Yeah. Quick couldn't reproduce the data serialization. Like the thing with Quick is you
[02:32:53] It's lazy loaded.  So like at each component level, so...
[02:32:58] But they don't know what server or client or what stateful or not.  They don't denote it with server or client components.  They don't have a compiler that's smart enough to do it.  They're literally like, look, every component can run independently.
[02:33:10] So if you interact with it, and that has a cost, but let's say we know the places where you interact,
[02:33:18] we can load that content in.  No, Quick is like Battleship.
[02:33:23] You know what I mean?  You've played Battleship before, right?  Like...
[02:33:27] You've got a grid and...
[02:33:31] And depending on where you guess, you hit or you miss.  And every time, if you could pretend that...
[02:33:39] every time you're playing the same game of Battleship,  you go, okay, well, I actually...
[02:33:44] I know like things don't really move much.  You go next time.  I know I can just guess because I already know where the boats are.
[02:33:51] That's how Qwik does stuff. But the thing is, in that model, you don't know what's stateful or what could potentially render. So it's very difficult for you not to serialize all the data.
[02:34:05] Right. Like without the knowledge, well, like reactor, like, oh, we need it to be called server.  Right.
[02:34:11] Right? Like we needed to be called client and to do this.
[02:34:16] I don't think that's true. Now that I know that it works like partial hydration, like it actually has the same rules, Marco's compiler analysis could automate the server component thing.
[02:34:25] I'm pretty sure.
[02:34:27] Now that I understand it's the exact same, you do not need to be explicit like this. A compiler could do it, I'm almost certain.
[02:34:37] But...
[02:34:38] he
[02:34:39] Both of those approaches, whether they're manual, like,
[02:34:42] React Server Components or Astro Islands or a compiler like Marco, they need to have that knowledge.  Quix...
[02:34:50] as I said, it's just, it's a different approach. And it's really cool to see everyone kind of work in these different zones. As I said, React's like really trying to change the game, but they're not
[02:35:00] maybe that optimal about it. They just go, look, this is the paradigm, but they're kind of doing it in wide strokes.
[02:35:06] Marco is the smartest in that it's like a sculptor.
[02:35:11] Every time they optimize, the block gets
[02:35:14] clearer, like you can kind of see more detail in your sculpture. They peeled it away. Your islands aren't just components, they're subcomponents. Like you basically
[02:35:28] shedded the stuff, but the problem is it's still a block at its core. Like it's still tied to the tree.
[02:35:33] Um,
[02:35:34] You know, just like React server components,  like where you know that it's all part of, you know,
[02:35:40] like under the island.
[02:35:42] Everything has to come in client side.  In Marco, you just make the island so small that you can eliminate that much more of the code.  Kind of like the sculptor cutting for details.  And then quicks like Battleship.
[02:35:54] But the difference with Quicken Battleship is,
[02:35:57] they don't actually care about having the knowledge.  So they can just do every piece, like light it up as it comes in.  So in the end, maybe your creature looks more like--  like your app looks more like Minecraft.
[02:36:09] But it doesn't really matter because they'll even not load some of the stuff that could be rendered in the client
[02:36:17] that like the other frameworks come in just because they're like,
[02:36:20] you didn't use it. So in a sense, they have the potential to do the least amount of hydration  possible in a dumb way. What you really want to do is push all three of those together.
[02:36:31] Right. Because then you want.
[02:36:34] Maybe the mechanism of Marco or sorry, the mechanism of react, the brains of Marco and like the, the, like the ability to, um,
[02:36:46] kind of
[02:36:47] lazy load and optimize quick.
[02:36:52] you know, based on like how people use it.
[02:36:55] There is a fair question, though. If you have a certain floor to get up to, like, say, using this, like, React, right, like, you have to have a site big enough to benefit from it.
[02:37:12] And if you have...
[02:37:18] how should I put it?
[02:37:20] something that like Marco's mentality and analysis,  which is actually ironically based completely on fine grain language,  basically Marco's smarts, the reason that it can do this stuff, you know,  without denoting the islands in the future and even get smaller is it's  basically using the same,
[02:37:40] concepts is solid.
[02:37:41] But instead of applying it to fine grain updates,  it's applying it to hydration.  It's like the same mentality is solid, but applied to that.  If you've already jumped that level and then got that smart with Marco  that you've already eliminated...
[02:37:56] 80, 90% of the code.
[02:37:59] Maybe the lazy hydration thing just doesn't matter.
[02:38:03] Like at that point, you're just like, look,
[02:38:05] My page has six sections.  I'm just going to lazy load...
[02:38:12] these ones and do this one. Like maybe you don't need to rely on lazy loading to get your granularity if you already have something that's that's smart and already that like that capable like the React thing like maybe
[02:38:29] It takes the pressure off the lazy loading.
[02:38:31] Do you know what I mean?  If you've already eliminated 90% of your code,
[02:38:35] Um,
[02:38:37] You can be a lot more crude with the lazy loading. And what's kind of cool about that is some of those rules about transclusion don't have to be similar. Like, it's okay if some component children are lazily evaluated and you have control flows and convenience because...
[02:38:55] Sure, those things get grouped together, but who cares?
[02:38:59] loading one extra sub fragment
[02:39:03] here or there isn't going to make a thing is if you can already break it up granularly.
[02:39:07] Yeah, I don't know.
[02:39:08] It's interesting. In some ways, they all need a little bit of each other. But then on the other way,
[02:39:14] If I was betting, I would hedge more towards React Server Components and Marko.
[02:39:19] Um,
[02:39:21] Yeah, anyways.
[02:39:26] Let me look at this. Do you think at this level discovery is unique to interacting?
[02:39:32] Oh, level of discovery.  So can you clarify a bit on the discovery bit?  I think, I think reacts,  I think this ability to diff the top level  is very VDOM centric.  I think the ability to be really,
[02:39:46] good at partially hydrating and abdent in the islands is actually beneficial from what Marco's doing with fine grain reactivity. So,
[02:39:54] Um,
[02:39:55] But they're solving different parts of the puzzle.  One is trying to figure out how to re-render the stuff  outside of the islands, and one is trying to figure out  how to make the islands as small as possible.  You put them together, that's amazing.  So maybe explain Discovery a bit for me that would help.
[02:40:09] um
[02:40:10] What do you mean by that?  You said Marco can automate it,  but it doesn't need to decide that I saw a quote  worth being on the client server.  No, no, that's the thing.  Maybe, but when you get to component level,  supplement level hydration,
[02:40:23] you kind of don't, you just write your code,
[02:40:27] And then if it's stateful, it ends up.  And if it's not, it's not like this isn't.  I think the key thing that I'm starting to kind of piece  together talking this through is
[02:40:39] Okay.
[02:40:40] partial hydration
[02:40:42] Boundaries and lazy loading boundaries shouldn't be completed.
[02:40:45] I know they are today.  Everyone has their...
[02:40:48] islands and they're kind of the same thing.  But I think the question of lazy loading and partial hydration
[02:40:54] probably should be separate.  I think the compiler analysis
[02:40:58] could be smart enough to handle the partial hydration stuff for you.  So you don't have to worry about defining what the island is, so to speak.  If that's your definition of island.  It can split out the code and break it into the...
[02:41:13] get rid of all the dead stuff, or basically the stuff that needs to be React server components.
[02:41:18] The compiler can go, these are the server components, these are the client components.
[02:41:23] and use that kind of analysis.
[02:41:25] Then...
[02:41:28] Thank you.
[02:41:29] Maybe the end user has to decide, oh, this is what's lazy load and this is not.  So kind of like Astro, you just go client visible, client intersection.  You just wrap sections of your code in that, but that doesn't define...
[02:41:41] what like everything below this gets sent to the browser instead
[02:41:45] It's only
[02:41:47] the subcomponent level hydration that gets sent to the browser,  you define the lazy loading boundaries by simple rules, just going like, oh,
[02:41:56] Like, you don't, like, one of the challenges with playing Battleship is,
[02:42:00] It's the first time you play battleship, you don't know where any of the ships are and you have a lot of misses. So what do you do? Do you just guess everywhere? You know what I mean? Like, you can't have analytics before you have analytics.
[02:42:10] You can make smart defaults, but you don't know.
[02:42:16] I think...
[02:42:18] Once you have the granularity, you don't actually need...
[02:42:21] You don't actually need the, like, you don't need the, give the partial hydration, sorry, give the lazy loading to the end user as islands, have the partial hydration, i.e. the server component, client's components split automated, and then...
[02:42:39] I don't know how we achieve server components without VDOM, but right now I'm thinking VDOM on the outside, fine-grained on the inside.
[02:42:46] you know,
[02:42:48] Business in the front, party in the back.
[02:42:53] Thank you.
[02:42:59] Yeah, I don't know.
[02:43:02] Thank you.
[02:43:05] Yeah, maybe like a fine-grained TurboLynx is the way of doing it, but TurboLynx is kind of clunky, right? Like you send this HTML. The thing is,
[02:43:13] You're right. We haven't talked about the downsides of this, right?
[02:43:16] like are the missing parts.  This is client rendered,  what we've been looking at today, right?  Like this, we've seen everything here as client rendered.  You still need the server components to be able to,
[02:43:28] also output HTML.
[02:43:29] Right. Like, so you this is complicated. You have multiple modes. You're going to have HTML rendering.  And part of me wonders, like, should you be smart enough that on partial hydrant partial navigations that it does work like turbo?  Like when you go somewhere new, should you be sending the HTML? Because that's going to be better than the diff.
[02:43:50] So it's like...
[02:43:51] new navigations, HTML, update navigations,
[02:43:57] this JSX format and let's get even crazier, let's interweave it based on what's new and what's not new.
[02:44:03] I think this is a whole new world of possibility here.  But I do think the VDOM part might be...
[02:44:10] essential here to actually get the diff and not lose the state. You can't just replace
[02:44:15] the HTML, you lose focus and stuff.  Like there's people who are trying to like replace the HTML  and then bring back the focus  and then bring back the islands and do that.
[02:44:24] I
[02:44:25] Maybe, but I do think the BDOM is valuable here.
[02:44:31] Yeah, yeah.
[02:44:32] Thank you.
[02:44:33] Yeah, I mean, this is like this kind of like a better version.
[02:44:39] Thank you.
[02:44:41] Yeah.
[02:44:42] Thank you.
[02:44:43] you
[02:44:46] Oh, man, you know, that's worth a whole other discussion, because maybe not Flutter.
[02:44:51] itself,
[02:44:53] But
[02:44:54] This is what I was talking about.  Seb was really pushing React Native for web.  And so has Dom Ganaway.  Every time I've been talking to him for the last six months,  he's just, the reason Solid has a universal renderer was because Dom,  the critter of Inferno, just kept on nudging me.  He's like, oh man, this is like,  if I was to build a framework again from scratch,  and you know, I look up to that guy.  He was working at a time when performance was still improving.
[02:45:24] in JS frameworks. Like I came in at the end. I was there to see them reach that place, but I didn't like solid and, you know, like the fine grained stuff. It was just like pushing the last 10% of it. Like they'd already saw performance. Like client side rendering has not got faster in the last five or six years. Um,
[02:45:48] which is why I'm usually pretty confident  to talk about solid and performance,  because this approach has been the fastest approach  to rendering for half a decade.  So nothing's changed, right?  But man...
[02:46:02] If he's excited about that stuff, you know, I take a listen.
[02:46:07] Thank you.
[02:46:08] Thank you.
[02:46:11] Yeah, like, right, but...
[02:46:14] Here's the other thing to consider.  You're always sending like full pages, right?  So like think of the format  and what you wanna be doing there.
[02:46:23] Like, do you want to replace the whole DOM and then rehydrate it?
[02:46:31] That can't be. Is that more performant than diffing?
[02:46:35] And patching?
[02:46:37] Is inner HTML better than diffing and patching?  I think we know the answer to that is no, right?  That's where React even exists.
[02:46:42] Um,
[02:46:44] Because React was an improvement over backbone.  Just turbo linking it is basically bringing backbone back.  Like, we can do better.
[02:46:56] Yeah, Flutter itself was terrible, but I'm talking like...
[02:47:03] Would you feel the same way about React Native for the web?
[02:47:06] Thank you.
[02:47:09] Thank you.
[02:47:15] Yeah, okay. This is an interesting idea, right? A similar approach to Marko 6 is fine-grained hydration to have the pentylent fine-grained updates without it be done.
[02:47:25] Thank you.
[02:47:28] But how...
[02:47:33] Yeah, I guess I guess the I mean, you're right. There is there is a thought here. And let me let me explain a bit.
[02:47:43] When I was being pessimistic about...
[02:47:48] Yeah, exactly.  This is what I was saying a few minutes ago when I was saying that on the initial render,  like the big slide navigations, which probably make up the 80% case, you want to be sending  an HTML because that is better than trying to diff something that's completely different,  like you're wasting your time.  It's way better to send the HTML in that case. But what I was saying is,
[02:48:14] Part of the reason my attraction to what was going on here is the promise of zero KB components.
[02:48:24] But I don't know how important that is.
[02:48:26] Because a completely other different take is if your hydration is granular enough,
[02:48:33] and that the static stuff
[02:48:35] Um,
[02:48:36] is static. You know, the amount of code you need to do fine-grained updates
[02:48:41] is relatively minimal, right?  This was always my thinking with partial hydration, right?  Like if something's not stateful,
[02:48:48] then
[02:48:50] you don't send any JavaScript anyways.  Like you don't need fancy partial hydration.  If,  if,  if you can know what's stateful at a granular level,  because like I've talked about it as the three modes of hydration as being  the middle mode,  like sure.  It takes a little bit more,
[02:49:07] then jumping right to the node that needs to update.
[02:49:10] But...
[02:49:13] But a component that only has a couple things in it  that updates can still eliminate its template.
[02:49:19] like not send it to the browser and then like
[02:49:23] you know, walk to those places that do update and be super, super performant and send a tiny bit of JavaScript to get to those locations to update.
[02:49:34] in a fine-grained way, but save the majority of the code  by not sending the template.  And in a sense, React server components,  because every time you freaking do anything,  send the whole template and data again in a verbose thing,
[02:49:47] All they're doing, like if you're being kind of like a pessimist,
[02:49:51] you're like, this is just lazy loading templates.
[02:49:54] Like we can all just lazy load our templates.  You don't need to diff
[02:49:59] if you just have the minimal fine grained code to
[02:50:03] to update it, right?  You don't, like, it takes, like,  if you take a small fine-grained library like Marco, right?
[02:50:12] Solid.
[02:50:13] And then you...
[02:50:15] Just send the code.
[02:50:16] for the little places that change.
[02:50:19] It's not 0 KB.
[02:50:21] But it's going to be a lot smaller footprint than this React Server Component solution.
[02:50:27] by the time they catch up to each other,
[02:50:30] Like you could probably show that they never catch up to each other.  So maybe there's a completely different way of doing this that, you know,
[02:50:38] you know, isn't zero KB components, but essentially is so much smaller, you know,
[02:50:47] and technically they'd be way more performant too, that there's other options out there. So, I mean,
[02:50:54] I think that's fair. Thank you, Michael. I was so focused on the 0KB bit, but if you let that part loosen...
[02:51:06] then you can get the performance back.
[02:51:09] So, yeah, I mean,
[02:51:11] Thank you.
[02:51:12] Thank you.
[02:51:15] Yeah, exactly. Right. Over time, you're not sending everything. It'd be completely fine grained.
[02:51:23] I mean, honestly, I'm a little hyped about how cool this is.  React server components is cooler than I thought.  But when we get back to the drawing board,  when you have people as smart as Michael Rawlings here  working on the problem, I'm sure we're  going to find other ways.
[02:51:40] So like...
[02:51:42] Yeah, I just think this is our first hint of what that future can look like.
[02:51:51] Like, is this, even if the implementations are different, is this our goal?  Do we want to recreate the classic MPA model?
[02:52:01] in the browser
[02:52:03] without...
[02:52:04] Thank you.
[02:52:06] doing full server back and forth without losing state? Is that our goal? Is this
[02:52:13] the first hint of where we go and React is the first implementation, but we're going to do this even better. Is this what web development looks like in the 2020s?
[02:52:25] Thank you.
[02:52:31] Thank you.
[02:52:32] I know many of you have shown some excitement in this stream about this.  I mean, this is a year ago.  I feel bad, as I said, that I didn't look at this before, but I think...
[02:52:43] I think what we've seen with Remix,
[02:52:46] has kind of prepared us mentally for it. The work that I've been, you know, Astro and
[02:52:52] And this, I think React team, core team has this funny challenge that I always say this, I'm just like, they share something.
[02:53:00] And then I'm like,
[02:53:02] Yeah, I have two reactions. Usually I'm like, oh, man, I was literally thinking of this today, how to solve this problem. And you just showed me how to solve it. Like, that keeps on happening because I'm working on the same problems. And then suddenly, they're like a few months ahead, and they just drop it. And then you're just like, oh, man.
[02:53:20] You know, a lot of smart people working on that team.  The second one that happens to me often  is that six months later after they drop something,  I just wake up one day and just go,
[02:53:29] Oh, obviously.
[02:53:31] Like, ding.  Like, and...
[02:53:35] I guess it's so hard to be working that far in the future, right? There's this, there's this, like, there's,
[02:53:42] not, you know, the not appreciated in your time thing.  I think this is really cool stuff.  And I think this is only the starting point.
[02:53:52] And I am so enthusiastic about where this is heading.
[02:53:57] I said like it took seeing Astro and maybe Remix this year for this to actually probably make sense to a wider audience.  If we tried to do the stream and looked at this a year ago, I don't know if anyone would be able to like, I don't know if we'd be making the same connections or have the same point of context.
[02:54:14] Thank you.
[02:54:16] Thank you.
[02:54:18] Okay.
[02:54:20] I don't know if the main advantage is really nice.  Like the DX is nice.  You're right.  The ability to simplify things by a simple client-server model seems kind of nice.  But...
[02:54:33] And it is...  The performance is nice-ish  because you're not...
[02:54:39] maybe inner HTMLing in places where you shouldn't be.  But if you think about it, if I rewrote...
[02:54:45] an app as simple as this in Svelte,
[02:54:48] And more thing.
[02:54:50] Actually, I guess Marco doesn't have to call it, but I'm thinking of spot framework, so spelt or solid.
[02:54:57] it would be super small, it would be super fast,
[02:55:01] And it would be less JavaScript than this React server component thing.
[02:55:05] And who knows, the DX could be wonderful.
[02:55:09] and it could be super performant.  It might just...
[02:55:12] Maybe the DX wouldn't be as good.  Let's leave that on the table.  But what I want to say is like,
[02:55:18] Building this app with like Svelte Solid or something like this is just not the right app for this, right? Or, you know, like it's not big enough.
[02:55:28] it's going to be better than anything you do with server components.
[02:55:32] Thank you.
[02:55:32] unless the DX is way better.  So it's not like a performance thing really.
[02:55:39] But...
[02:55:41] at least on the surface level.  But I think when you get further out,  when you get to like...
[02:55:46] when you get to the higher scale, this doesn't keep on shooting up, this kind of flatlines. You know,
[02:55:56] it's changing the way the code sales.  Like, I think there was something that was talking about,  like fine-grained systems scale with interactivity.
[02:56:03] Like the more interactive your code is, the more code you need.
[02:56:07] And then,
[02:56:09] VDOM scale with your tree size.
[02:56:13] Thank you.
[02:56:14] That's essentially the rule.
[02:56:17] React desperately wanted to stop scaling with tree size.  So this solves that problem.
[02:56:24] Because by moving the tree to the server,
[02:56:28] they basically find a way to flat line their size in terms of their tree size.
[02:56:34] Um,
[02:56:35] I think a system that scales with interactivity like fine grained stuff does has an interesting different potential or path perhaps like Michael was suggesting just simply because
[02:56:49] It's already so well suited for large trees. It doesn't really have the same thing it has to worry about in terms of the cap.
[02:56:55] Thank you.
[02:56:58] It's the main problem solving double data. This is the thing I said at the beginning of stream or release the beginning of the Rack server component part that we couldn't just look at the feature.
[02:57:06] Double data is mostly solved by partial hydration. And in fact, the more granular partial hydration is like what Marco is doing, the better you get at this.
[02:57:17] So Marco 6 is something equally as exciting about this in a different way.
[02:57:21] in a different realm, because when you consider the fine grain partial hydration, the resumable, um,
[02:57:27] hydration like it
[02:57:29] like truly resumable, like actual, like, leave computations where they start off, like what  I talked about in the last stream. Like, these are incredible kind of ways to do it. So,
[02:57:43] I just think server components or something like this just finally puts everything together. There's multiple reasons. If you focus on any one feature, you're just going to be like, I can do this another way.
[02:57:53] But put it all together. That's where it's at.
[02:57:59] All right. Well,
[02:58:02] I don't know if anyone is this is this isn't like a space.  So I can't have like a good conversation with you guys.  I'm just talking to the air.
[02:58:09] Um,
[02:58:10] But...
[02:58:12] Like if you have more questions now, there's a time to shoot. I know people are starting to wind down. The stream is getting to that three hour mark, which is I try and keep my streams like to two hours these days. But this this was really quite cool. I mean, does anyone see anything more from the demo? I think we got a gist without like reverse engineering any further. I'm sure you guys can download the project and take a look if you want to do that. But I don't know if there's any more discussions. Now's your time to get those questions in.
[02:58:40] Um,
[02:58:42] I think I've given my initial spiel.  This is really me seeing it fully wide open, like eyes wide open for the first time.  So I'm going to have to sit with these thoughts.
[02:58:52] and, you know, figure out what this means even more.  I do a lot of that kind of analysis and, you know, thinking us on the Marco team are constantly –
[02:59:02] working through problem spaces like this.
[02:59:06] But so I don't know if I have much more to give on that side, but if people got questions. Yeah, Michael's tired. That's what happens when you're in the East Coast.
[02:59:17] - Double data, no component code already too.  Yeah, exactly. Yeah. Like, yeah.  The get the, remove the double data, like you can't completely remove it,  but to remove it to a certain degree, all you need,  you just need a smart compiler that knows what's stateful.
[02:59:33] Anyway.
[02:59:35] You know what? Let's wrap this up then. Let's call this a stream. It was a good stream. This was a really fun one, right from the benchmarks and the remix and all that stuff all the way through React server components. Completely...
[02:59:47] mind-blowing paradigm. As I said, I suspect  it as much, but the  execution still needs a little bit  to probably get to the full story, but you can  tell that a lot of really cool things are  happening here, and I
[03:00:00] more than anything, the ability of this demo to kind of expand
[03:00:04] our minds in terms of where things get headed is incredible.  It's funny.  It's funny.  People may have forgotten about this already.  I am so much more excited about React Server Components  than I am by React Forget.
[03:00:18] I feel like that was them just kind of tossing something like, oh, you guys kind of like Svelte?
[03:00:24] Oh, here's something. Like, like,
[03:00:28] This is the real deal.
[03:00:32] Ha.
[03:00:33] This is really cool stuff.  I'm kind of lost her words.
[03:00:39] All right. Good night, everyone. Thank you for joining me on the stream.  This is really awesome. I think, yeah, I think we'll look at aisles maybe next week.
[03:00:52] Another partial hydration framework that works with solid, maybe slinkity.  I want to get into slinkity. I don't know anything about 11D, but I'm curious.  So maybe line one of those up in the next couple of weeks.  But yeah, everyone have a good night and until next time.