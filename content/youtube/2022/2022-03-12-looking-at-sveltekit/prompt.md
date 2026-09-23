---
title: "DYwI1eWkMcI"
slug: "DYwI1eWkMcI"
duration: "4:05:12"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/DYwI1eWkMcI.m4a"
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
[00:00:01] Hey, everyone. Welcome to my stream tonight.
[00:00:05] Today, changing it up from the narrative we've been carrying the last few weeks, I've been  really digging deep into partial hydration and a lot of the really, how should I put,  bleeding edge things going on around, I guess you'd call it multi-page app kind of architectures.
[00:00:27] We're going to take a break from that for a moment. The last stream we did with Marco, kind of represents the furthest we've taken that thinking.
[00:00:39] with like React server components and we looked at Quick and then we looked at Marco and kind of went through this whole progression.  But there's still a lot of details to kind of work out and I'm going to let that kind of settle for a couple of weeks.  I recommend anyone who hasn't watched it to watch the stream from last week.  It didn't quite have as many views as some of the other recent ones, but it's probably the most like future forward thinking stream that I've done since I've started streaming.  But...
[00:01:02] Today is going to be a little bit different. Yeah, hello everyone. Say hi in the chat as you come in.
[00:01:08] Today, we're kind of going back to the, looking at like the best patterns you have now. You know, we've looked at Remix.
[00:01:18] and
[00:01:19] We've looked a little bit even at solid start.  But the one that's been kind of--
[00:01:25] strangely missing from the conversation has been Svelte.  I haven't actually focused on Svelte once in the last nine months since I've streaming, which is
[00:01:33] which is perhaps unusual.  And I thought I would take this opportunity finally to come in and, you know,
[00:01:42] take a look at SvelteKit again.  I am somewhat familiar with SvelteKit in that when I started Solid  Start a year ago, I literally looked at SvelteKit  and reverse engineered it and lifted the whole adapter setup over.  But I've been hearing--
[00:01:59] that they've been working on some really cool things.  And they've really been adding a lot of features and polish  to this whole project.  And I kind of want to see what's going on here.  So we're going to look at that a bit while we kind of go  through the stream.  I actually have my Hacker News example that I always use.  I have that built in Svelte.  And we're going to port it from an old classic CSR one  to SvelteKit in a bit.
[00:02:25] I think this is really just a good opportunity to kind of talk about
[00:02:30] Svelte in general, we haven't really covered it.  I've showed a few of the compiler things.  I've compared and contrasted it previously on my stream,  where I showed-- where I did the REPL diving stream, where  I looked at each framework's REPLs and compared  making examples in them.  But yeah, I mean, there's been a lot of conversation.
[00:02:49] I'm not afraid to come in and, you know, answer any questions or share any opinions.  I know this is sometimes considered a little bit of a...
[00:02:58] Yeah.
[00:02:59] sensitive area are hard to talk about and and there's there's no history there's no like hiding  the history that um while um
[00:03:07] Generally, Rich Harris is a stand-up guy,  and I've gone along really well with him.  He's actually one of the first people that I interacted with on Twitter  that had a huge following, and he was really great  in terms of guiding me through the conversation  and getting in a civil way.  But I've definitely had friction with the Svelte community at times  just because my opinions are so different.  Part of the work I've done is solid.
[00:03:35] kind of calls a lot of that into question. So like, if you have questions for that, like, I feel more, you know, feel free to shoot them out here, you know, and we can we can talk about that.
[00:03:45] Rich has done a great job when talking about Solid. He was on a builder's
[00:03:52] meetup and someone asked him point blank what he thought.  And he gave-- a lot of this stuff comes down to DSL's answer.  And he mentioned-- he made the comment about solid being  what maybe React was meant to be.  And then he backpedaled that a bit because then he's like, well,
[00:04:12] I'm not saying that React isn't what React's meant to be.  And we're going to talk a little bit about that today as well,  because there's been a lot of conversation around that.
[00:04:21] Thank you.
[00:04:22] Do you think Svelte, Solace, and Solace are different?  Oh, yeah, yeah, yeah, very, very different.  But I don't think it's a bad thing.  This has actually been kind of part of my whole strategy  and my approach to the framework space  is understanding and acknowledging those differences  and kind of exploring what they meant.  And we could probably talk about that definitely a bit.
[00:04:46] Yeah, let's expand on that a little bit.  I'm going to instead, now that I'm done kind of rambling here  for the first couple minutes, do my typical--
[00:04:54] this week in JavaScript, just to kind of get this started.  There's been a lot of stuff, a lot of discussion,  a lot of stuff this week.  And I think it all kind of ties in.  And it's always this week in JavaScript that kind of spawns  the idea for the stream that I'm going to do.  And while this wasn't particularly a stout week,
[00:05:13] It just it felt right. And I'll kind of explain that as we kind of go through the different things.
[00:05:19] That's right.
[00:05:19] Thank you.
[00:05:20] um,
[00:05:21] Right. So, yeah, let's let's let's let's kind of just jump right into this week in JavaScript. First big thing is I'm just going to highlight right on the screen. You see that React 18 is an RC, which I think is a huge deal, regardless of use React or not. React 18 is a huge deal.
[00:05:38] represents
[00:05:40] that change that React has been working on forever. Like React 17 was kind of like this migration step, you know, kind of like bookkeeping, making sure things in the right place. React 18
[00:05:50] is the culmination of the baseline of what React's been trying to do since like 2016.
[00:05:56] But it's like six years in the making.
[00:05:59] It's huge. The ideas here spawned even before React 16 came out. They knew that the whole
[00:06:09] thing started, you know, from that time period. They basically ask the question, what comes next after GraphQL? And even though React 18, when it arrives, doesn't completely answer that question, it's the foundation that makes it all possible. So this is absolutely huge for anyone in JavaScript. I think
[00:06:29] We'll see how it plays out, but this is one of those moments coming here when React 18 is finally released.
[00:06:35] Thank you.
[00:06:37] But the rest of the conversation has gone in two ways. And I kind of decide which way I want to take it first, because half the conversations have been about syntax and half the conversations been about tooling this past week. And
[00:06:52] I think...
[00:06:53] I think the tooling one
[00:06:56] is interesting to say. We'll start with the tooling one. Why not? Okay, so what am I talking about tooling? Well,
[00:07:02] Essentially,
[00:07:04] Um,
[00:07:07] Hey, David. Essentially,
[00:07:11] There's a couple of camps for me right now,  and I've mentioned this before.  And some people think it's like the single page app  versus the multi-page app and all this stuff.  No, no, no.  There's like a bunch of people who,
[00:07:20] who
[00:07:21] Essentially,
[00:07:25] He came in, uh,
[00:07:28] Like there's basically the people who are, who have kind of grown up with this new stage of JavaScript. And yes, it is associated with single page apps mostly, but it's, you know, compilers, build tools and, you know,
[00:07:40] all the conveniences of modern DX.  You know, like they've gotten used to and grown into this.  And then there's kind of like a more old school perspective,  which has been fighting for years to kind of make a comeback  of this like no tools.  And it's a funny contrast for me because--
[00:07:55] I.
[00:07:56] I think I mentioned this.  I took the state of JavaScript survey,  and they asked how you learn JavaScript.
[00:08:02] And my answer wasn't on the survey.  That is, I learned by using ViewSource.
[00:08:09] Um,
[00:08:10] And
[00:08:12] There's a whole contingent of people who really wish the web to go back to ViewSource, like DHH is one of them on the Rails side. And
[00:08:19] While I would love to think that this is purely an altruistic perspective, they also kind of have their own...
[00:08:28] How should I put it? Like there's agendas involved there and technologies.
[00:08:34] - Yeah, yeah, it is very difficult when you get into threads and stuff. But that's why we got a moment here at the beginning here before we get into...
[00:08:43] before we get into this, to kind of
[00:08:46] you know, talk for a moment because...
[00:08:49] like,
[00:08:50] I myself do kind of walk that line a bit because my first retweeted this week was I mentioned Jamie Kyle.  You might know him as, you know, I think the co-creator of Babbel.
[00:09:01] People think that
[00:09:03] Because I work on tools that I love to use tools everywhere.  No, I avoid them as much as I can.  Spend as much time as you can focusing on the things that matter.  Do everything else out of only necessity.  And I can live by this.  When I make a small library, like something that could fit in a single file, I don't want TypeScript.  I mean, I'll write the types myself by hand.  Like, you just want, like, the less moving parts for maintenance, the easier and better it is.  You just go, look, here's the file.  And that was the whole point of his tweet.
[00:09:33] on the tweet line, but this is kind of like where he's saying like tools for certain things, not tools for other things. Like I said, he created Babel. So obviously, and he was involved in Rome. So obviously, he's very much on the pro tooling side. But when you create some libraries, you don't need that, like, it comes down to what fits the purpose. So I just want to put this out here, because I think it's a good introduction.
[00:09:53] Thank you.
[00:09:54] No, I'm actually rocking Mojito for the second week in a row. I've been really getting into these.
[00:10:04] Let's -- moving on here. And the reason -- this is a big one, right? Everyone saw this? TypeScript  in the build step. Could we have types in JavaScript? You know? And this is interesting. Again,
[00:10:19] The reason I mentioned this one is because at least this proposal is more or less glorified comments. So I don't think it actually saves you the build step, but
[00:10:29] It's funny how it's being positioned because yes,
[00:10:32] in the whole shift left mentality of the world where, you know,
[00:10:37] let's catch type errors as soon as possible, like in your IDE.
[00:10:41] Something like this could be pretty powerful, but it doesn't eliminate the build stuff.  And it's kind of interesting, again, because we're seeing the no build people come out  and champion it.  They're like, okay, well, if we have TypeScript...
[00:10:50] Maybe we don't need a bundler.  We can use ESM and import maps and...
[00:10:56] you know, maybe we don't need, you know, minification or, you know,
[00:11:01] What not and
[00:11:02] you know, it just starts a whole bunch of conversations. And, you know, wherever you sit on this whole TypeScript in the browser thing, I think
[00:11:10] I think it'll be useful in the same way that I think what Jamie just said was useful.  Like when you're just building a library, sometimes you don't need to bring the whole tool chain in.  I think, you know, when you have like the Rich Harris take on TypeScript where he's already just writing comments anyway ways.
[00:11:23] you know, it's kind of useful.  But I don't think it's...
[00:11:26] I don't think it actually...
[00:11:28] changes that much for mechanically people who really leverage these tools.
[00:11:36] You know, that's my opinion. Other people are going to have other opinions.
[00:11:40] Yeah, well, I mean, ES4 was crazy, right?  ES4 also almost had a JSX, which is another topic on this build thing.  As I told you, there's been a lot of things.  Devon was like, now do JSX, right?  You guys don't know Devon, Critter Parcel.
[00:11:58] This has come up a few times in the last couple of weeks. I've been very on the not JSX side. I like that it's kind of this universal DSL that anyone can leverage for their purpose. Once you go this direction, you kind of say what JSX is. And
[00:12:12] My gut?
[00:12:14] is more and more in the future,  people are going to want to make more optimization.  Solid's built on optimizing JSX, as many of you know.  But like Inferno,
[00:12:22] optimized JSX before, like Inferno, which is the VDON library, still has a different output. View,
[00:12:29] I'm pretty sure if they're not doing it already, are working would go that direction.
[00:12:34] where they'd optimize their JSX. Like it's just, I think it's inevitable growth there. So building  the browser is like the last thing I personally want, but it brought up an interesting conversation.  I just want to put this note in here because this is the kind of comment that'll probably  slide by most people, but I just wanted to put this there.
[00:12:50] Sebastian McBadget, I don't know if I say this.
[00:12:52] name correct, I apologize if I don't--  also known as visionary behind React, basically,  for the last seven years.
[00:13:00] He basically made this comment, and this one's more of a personal comment on my side, and maybe solid people could respect this, people have been using it. For what it's worth, this introspection is heavily deprecated. He's talking about props children, essentially, right? Deprecated in React, in my mind. If you've ever used a pattern in React where you clone the children, go clone element on the children,
[00:13:21] basically, 'cause they're talking about different patterns  for JSX and about traversing the JSX,  'cause Devin was saying that like, it's really useful,  how, you know, with a standard format,  we could just traverse it and learn about the nodes,  helps with accessibility analysis, all this kind of stuff.  And, and stuff like, you know, from my perspective,  it's already deprecated in React.  You shouldn't be doing it.  It blocks essentially all optimizations.
[00:13:41] we could do, and it's very rarely used.  We just need to provide suitable alternatives.  I think this is really interesting.  This is more on my side of things, because in Solid, as you know,  we don't have React clone node.  Because if you clone the node, you'd be cloning a real DOM node,  and that would be kind of terrible, inefficient.  So it's interesting that they're kind of pointing out that this--
[00:14:00] this one place is a place that they actually don't want people to use.  I mean, he admits later on that there isn't a good solution and
[00:14:07] And that, yeah, or Dan says, there are use cases, which is the only reason why it's not actually deprecated. But, but essentially, it's an interesting shift. And I know this is a little bit off topic, but I just wanted to bring this in because this is this is
[00:14:20] kind of obvious especially when you start thinking about the stuff we talked about with quick with breaking stuff apart and like
[00:14:26] Any kind of optimization in this pattern, you don't want to break the abstraction. And this is the one place where React's abstraction completely falls apart. I actually completely hate that pattern. It's something that's a gap in solved, so people always ask about it. But it's interesting that React team themselves consider it kind of an anti-pattern. Okay, sorry. Back on topic, right?
[00:14:48] Well, yeah, and this is one, right? Thomas asks, can you get the strongest version of this argument to avoid tooling? It seems to me that it doesn't get you much unless you can literally remove all tooling, which seems unlikely. Yes. And here's the thing. There are cases where you can remove all the tooling.
[00:15:05] Right. Like, I think in education, I think in scenarios where you're teaching people, it's really powerful to just be able to throw something in a file.  Like I did. I learned HTML on the web that way. You know, like Notepad++. That's how I learned things.  You know, it wasn't just view source. Then once you viewed the source, you copied and pasted it into a text file and then website, you know.  So I think if we can get back to that, you know, I mean, ESM was amazing for that.
[00:15:35] compiler.
[00:15:36] It's actually not
[00:15:38] The compiler is just like a syntax sugar for the JSX.  It actually runs completely runtime.  And the first time I had it running off one of the Skypack,  with the modern CDN on ESM, on just a text, like a notepad on my computer,  I was like, wow, this takes me back.  You know, this shows how old I am.  But it was just amazing, this kind of feeling.  But the problem is,
[00:15:59] Yeah, would I ship a production app like that? Never. Like tree shaking is freaking huge deal. I mean, some people talk about minification compression, which is the next topic I'm going to bring here. But like,
[00:16:09] The solid core has concurrent...
[00:16:13] concurrent mode, essentially, and time slicing, wrapped into it, you have to. The scheduling and stuff is all kind of intertwined and you have so many touch points.
[00:16:23] But in solid, if you do not
[00:16:26] use transition or and use it with suspense and enable scheduling one of our flags they basically  if you don't use the features we can tree shake it away solids people go on but if you're being like  oh solid's 6.5 kilobytes I see preacts 4 but like solids actual bundle if you're using the same  features that are in preact is like three point something like essentially like tree shaking is  huge when you start adding it up to like the multitude of libraries that you use in your  framework or in your application so that's a whole other thing but let's
[00:16:56] But,
[00:16:57] There are use cases.
[00:17:00] you know,
[00:17:01] For education, I would think you still...
[00:17:07] Yeah, I don't know. If you've ever used Babel standalone in the browser, it's kind of unpleasant or whatever. Like, there's something nice about being able to develop a text file. I think my problem is I can see the need, or not the need, I can see the want, and I can see, how should I put it? I can see, like, how it could work out, and it wouldn't be that bad, and it'd be fine, and, you know, but it's kind of only like a, okay, you know, it's not like, yeah, this is the way forward.
[00:17:37] the people who are kind of pushing it are really like, this is the way forward.  And part of it comes from like this, like,
[00:17:43] like anti-spa mentality.  It's a, it's a, it is, there is a line drawn.  You'll find that like web components  have somehow aligned with people  on like the rail side and all.  It's kind of interesting to see how these,  how these,
[00:17:54] kind of movements in JavaScript are going. Meanwhile, all the single page app people really focus on how to reduce JavaScript and solve the problem in a different way. There's like a couple of opinions how we can solve this problem. And I've been covering the last few weeks how we can solve the JavaScript problem using JavaScript. But there's a whole other group that's like, well, let's reduce tooling. Let's like, let's go back to how things were before. I think
[00:18:14] they're not going to find what they're looking for there. But the part that really is more
[00:18:20] irksome or more thing is just like how strong, try to put this one, this is like, this is peak what I'm talking about. Does minification matter if contents is gzoped? And the answer for that is
[00:18:34] Yes, like obviously not as much, but yes.
[00:18:37] And the TDR is not really, I have to bring this one up because this is just so ridiculous that, you know, sometimes things are worth being called out.  So here's the thing. This article is fine. And it's from Chris Corian 2015. And he's just talking about the maybe minification of CSS isn't that big of a deal. And he's kind of right. I don't know if you know, if you look at CSS.
[00:18:59] at all. Like, if you look at CSS at all, it's a lot of repetition. You can't compress any of the symbols because they're all key words or values. And all you can do is remove the white space. So he was showing that
[00:19:12] You know, 147 kilobyte file becomes 123 when you minify the CSS. But when it gzips, it gets down to 22, which is only two kilobytes more than when you apply both of them together.
[00:19:23] This is true and there's nothing wrong with this perspective because CSS, there's so little you can do. But think about the characteristics of JavaScript because Brian is trying to suggest that JavaScript works the same way and that's ridiculous because in JavaScript, not only can you reduce all the white spaces, but you can shorten and mangle like all the names. And in
[00:19:46] And if you think about it, it's a lot less repetitive.  Compression isn't actually as effective on JavaScript  as it is on CSS.
[00:19:54] So like,
[00:19:55] Like basically both factors
[00:19:59] you know, change the math considerably. But I mean, they're not going to find a study that supports that, you know,
[00:20:06] Thank you.
[00:20:06] only gzipping is good enough on JavaScript.  So he's going to use CSS here.  I just wanted to put this out here.
[00:20:16] Thank you.
[00:20:16] This is just something I had to call out. Okay, let's keep moving on. There's not much more to say about that one. And...
[00:20:27] I think what I wanted to, yeah. Let's continue on with what else has been going on. Let's switch the conversation a bit from tooling. I mean, we could talk a little bit about...
[00:20:38] about
[00:20:41] The other side of the puzzle, Matthew Phillips, as many of you know, works on Astro, really
[00:20:48] like insightful thinker trying to like change the game.  He's been exploring ever since he's like got past
[00:20:56] the islands at Astro, he was like, how can I make the islands smaller? And he actually started posting what his ideal framework would be. And in terms of how to make it smaller. And somebody's like, that sounds like Marco. And
[00:21:06] as people usually do.  And he's like, oh, no, I don't think so.  But it's like, no, Marco does actually do this.  And we've covered that.  And Marco's doing it even better.  The last stream I did, very good.  Do check it out.
[00:21:17] Okay.
[00:21:17] He introduced a new framework that's kind of like on the Alpine, Pratib view side of things.  And it's kind of cool.  It uses CSS selectors to essentially...
[00:21:29] I'm not going to use the word hydrate because hydrate suggests you wrote the HTML, but essentially add JavaScript back to an HTML file.  So you can basically render this in any backend. It could be your Go, Rust, whatever you feel like, PHP, Rails. And then
[00:21:42] It basically uses CSS selectors.
[00:21:45] to basically add the interactivity. And this just uses reactivity to do it. It's very similar to Alpine, but instead of embedding it into HTML, it's kind of like this separate, it's using selectors, essentially. And
[00:21:59] While this is, you might think it's kind of crazily different.  I mean, it works using tag template literals and you can do a lot of dynamic stuff.  Actually, he was kind of worried that sprinkles undersold how powerful it was.  And I was like, no, no, no, no.  Like because Alpine, for example, can compete in the JS framework framework.  It can do everything.  You don't need the HTML to do it.  So what he actually did was he actually showed, he shared with me a little example.  Let's see if I can find it here.
[00:22:29] with his library, CGS only. And
[00:22:33] Is it not going to load for me now because I'm here?  No, OK.  I mean, it's a silly example.  You just said, hello, Ryan.  But you can basically use the body selector  to attach a template, which is literally just a template  element that he created.
[00:22:46] you know, like hello with a span.  And then notice that there's a class with a name in it.  And then he uses the name to set the text to Ryan.
[00:22:55] Really,
[00:22:56] novel approach. And what's cool about it is because you keep it all the HTML, it actually makes it easier to play the two app game, I call it, right? Because you're not really messing with the HTML output. I don't know if you've ever done this. I've been there before. I'm not a huge fan of the two app thing. That's why I work so hard on these partial hydration things and completing the single app story, because it's
[00:23:16] Essentially, like...
[00:23:19] *laughs*
[00:23:20] you start getting templating languages in template language. You have ERB for Rails and Alpine, and they're sitting on top of each other. It's funny because sometimes stuff like ERB is dumb.
[00:23:34] semantic templating, it's just like insert the space templating or JavaScript or whatever. And then you have like the really kind of meaningful semantic thing and when you layer them on top of each other, it's kind of a mess. And I honestly, I never want to go back there again. This keeps them separate, though. So this is kind of like an interesting take where you can keep your HTML clean from your Rails or PHP app, yet have that same kind of
[00:23:56] reactivity and if you want you can
[00:24:00] you know, do, you know, some stuff.  This is a bit more like stimulus  because I don't know what type of bindings it has,  but, you know, you've got the full power of JavaScript  at your disposal.
[00:24:15] Yeah, a little bit, right? He was trying to show a point, but yes, I think so. You're right. If you've ever seen solid compiled output, it looks exactly like this. Create a template, set the template, and then clone the template. So
[00:24:29] Yeah, I think...
[00:24:31] I don't think every example like this is a pure client render.  You can picture the more base case of the HTML already being there, and then just being like this selector, put this in, this selector, this way.  So it's still very declarative.
[00:24:40] It's just keeping like a secondary tree  and it's using CSS syntax.  What I think is interesting about CSS like syntax is  if you can keep the benefits of the parser,  like one of the hardest parts about inventing DSLs  is all the tooling and tool chains around it.  I can back to tooling.  And that's why I brought this up now.  So if you can preserve
[00:24:57] If you can preserve your tooling by following the same syntax rules and whatnot, it's an incredible boon. This is why I chose JSX. I chose JSX for specific reasons because I have certain properties that I think are very important.  The fact that you can make a div element, just an HTML div, this portability where I can just pass it around, I think that's incredibly powerful.
[00:25:21] OK, if you're not going to use HTML as your DSL,  and you're not going to use--
[00:25:28] You know, why not use CSS? You know what I mean? Like, that's essentially what we're seeing here. So it's interesting. I think this needs more exploring, but as I said, Matthew's a trendsetter, and I think it's really cool what he's been playing with.
[00:25:41] OK, that's
[00:25:44] it on the tooling side, unless anyone wants to talk about that more. But now I want to talk about syntax, because that kind of gets us back into this conversation.
[00:25:53] with Svelte because
[00:25:55] You know, like...
[00:25:59] It's all about syntax, as Richard was saying. I actually have the recording at the Handy. I was actually going to kind of play that for if anyone heard it. It's a short little clip. Let me see if I actually have it on hand.
[00:26:12] I think I love how-- oh, here it is. Sorry. I love how--  Well, the name is in Japanese, so I'll just say the question. So they ask, "What do you think of Solid?" About before, what AST libraries would you recommend playing with?
[00:26:31] Okay.
[00:26:32] Okay, so Sonnet is very cool.  Sonnet is kind of like...
[00:26:39] react done right in a way.
[00:26:41] I shouldn't say that because now I'm suggesting that React was done wrong.  And that's a terribly impolite thing to say.  But Solid is a really well-designed platform.
[00:26:53] Bye, Bree.
[00:26:54] If...
[00:26:56] So a lot of this comes down to stylistic preference, right?  And I think we're at the point now where if you prefer the JSX-y way of doing things,  then Solid is a really great option.  If you prefer...
[00:27:08] a more template-y approach that combines styles with your markup and your javascript  then svelte is a really good approach um
[00:27:19] And it's really good to have those choices.  And the people who are using Solid at the moment...
[00:27:24] Seem to really love it.  I'm not using it for anything, but...
[00:27:28] I don't know if people saw the state of JavaScript survey that came out recently.  Solid brand new entry into the survey.
[00:27:36] got the top satisfaction of any front-end framework.
[00:27:41] Soledon's felt both got 90%.
[00:27:43] And you really can't argue with numbers like those.  It has a pretty small user base at the moment.  It's like a very early adopter-ish platform.
[00:27:53] prove that
[00:27:54] because people really, really love it.  So I would definitely encourage people to give it a look.
[00:27:59] It's...
[00:28:01] it's kind of disproving a lot of the
[00:28:05] assumptions that we had made about uh about front-end framework performance  um and it's kind of pushing every everyone to do a little bit better so solid is great
[00:28:15] Yeah, I mean, Rich is great.  He brought up the two points about pushing the boundaries  and about the kind of template.
[00:28:20] It's been coming up again because...
[00:28:23] Thank you.
[00:28:24] My position that I've had for the longest time is that
[00:28:28] It isn't.
[00:28:29] Just the shortness of Svelte.  Actually, I have a tweet here.  I was helping Pierre earlier.  He wanted to know what relations React hooks had to--
[00:28:39] Svelte 3 because someone's like, oh yeah, hooks inspired Svelte 3. And I pulled up this old thread because Rich was thinking, oh, maybe I can add hooks to Svelte. And then he realized that he could just reduce it down in terms of syntax. And this is like, you see, there's no dollar sign on this double. It's very early. But this is basically where he first realized the concept of what he was going to do with Svelte 3, their compiler, just compile in the hooks, right, so to speak. But
[00:29:08] I think the thing that's not always obvious with this thing is hooks don't exactly work like this. You know, I mean,
[00:29:19] In some ways,
[00:29:20] Um,
[00:29:21] React and
[00:29:24] And felt very, very, very similar. But the other -- but the -- where they're not similar is this -- is the perception of the execution model, where --
[00:29:36] you know, in those cases, salt does feel more like solid in that, um,
[00:29:41] essentially it's like this reactive model, right? You don't need the dependencies. And if you're,  you don't need the dependency in React, which I'll show in a minute, but it's still this kind of run once
[00:29:53] like the world runs once and then you have the expressions that change.  That's the kind of at least the visual they do in reality.
[00:30:00] React and Svelte actually rerun your components.
[00:30:03] Um,
[00:30:05] But...
[00:30:06] essentially...
[00:30:08] The execution model that is shown to you is one in which
[00:30:14] you know, in Svelte, which it runs once.  And this kind of ties into what it's doing here  because Tanner, React query and React location  and React everything really essentially was like,  well, I don't want the dependencies arrays in React.  So he actually...
[00:30:35] came in and
[00:30:37] I'm just going to put this on the screen so you can sync it in.  This looks a lot like solid if you've seen it.  And my point here is this is actually still React.  Because as I said, if stuff was solid, the component would only  run once.  In this case, the component is running multiple times.
[00:30:52] And there are hooks behind it.  What he did is a whole crap load of use refs behind the scenes to basically like keep mutable state behind these hooks.  And then there's there is a state setter behind the signal and it is tied to this component.  But essentially he's he's by cleverly.
[00:31:12] Yeah.
[00:31:13] Thank you.
[00:31:15] By cleverly having these objects in refs,  essentially he's storing the dependencies arrays  as refs in the background,  but he's not using...
[00:31:27] react's dependency array because react doesn't let you make the dependencies dynamic. Instead,  he's providing his own invalidation mechanism, essentially giving the array like say one  argument and based on his own heuristics deciding whether it's updated or not. But he's keeping  track of his own dependency arrays and then basically invalidating it himself all using refs  so that when you call this count under the signal effect, it is actually doing solid style tracking.
[00:31:57] And
[00:31:58] essentially when you set count again he knows from the dependencies whether to invalidate  the effect or not so it actually has dynamic dependency tracking like solid in terms of like
[00:32:11] If you had a conditional or something in here, I think he has an example. Let me see. Yeah,  the final example where it's actually worse when I make a pic. Maybe I can throw a way that I can  blow this up. No, it's not going to let me do that here. This might be too small to see, but  maybe there's like open image in a new tab.
[00:32:35] And then can we blow it up? Yeah. Let's look at this for a second. He's actually --
[00:32:42] Like, look at this one.  Use signal effect.  If should log, console log message.
[00:32:47] This is a classic example.  Michael Jackson, actually, when he found out about this behavior in solid and in these things, he was like, oh, this is really kind of smelly.  But I actually think this is like a superpower because if...
[00:32:59] If you don't
[00:33:00] If you set should log to false,
[00:33:03] and you change the message, this never reruns.  That's how dynamic dependency things.  It lets you turn things on and off by feature.  It's super powerful.  Like the rate, you can picture the rate changing length.  And he's actually simulated it here.
[00:33:17] Thank you.
[00:33:18] This is just like a prototype he's working on.  Let me see here, some comments.
[00:33:23] Thank you.
[00:33:24] Yeah, I mean, if you've used solid, that's...
[00:33:29] That's--
[00:33:29] That's basically what this is.
[00:33:33] Thank you.
[00:33:34] This is a little bit funny. He is observing the state, but the problem is the state is the component. It still reacts. So things do run over and over again. It's not like --
[00:33:47] fine-grained reactivity, but it has the same API.
[00:33:52] Thank you.
[00:33:52] Thank you.
[00:33:54] Yeah, I mean...
[00:33:56] Sure. I think everyone can acknowledge that a little bit. Even our man Adam Rackis, I was surprised by it. He actually tweeted, he's like, oh man, if Tanner Lindsay is into solid, I'm going to have to look at it.
[00:34:08] Good times.
[00:34:13] Yeah, so yeah, but the funny thing is it's not actually a package. It's 100% like I mean it is it could be a package, but it's like 100% done in refs. I've seen the implementation he shared it with me. I don't know if it's my place to share it on stream. He seemed like he wanted to be guarded. I do have access to it. I've looked at it. It is, it is clever. I've never wanted to write that many refs in my life. But in a sense, he's writing the refs so you don't have to, you know,
[00:34:38] Yeah, yeah, he did say that, but I do have access to it. I'm sorry guys, it's not my place.
[00:34:45] to share his work. But you can, if you want to picture it, it's just like a lot of refs and refs to refs. Like it's, it's, it's kind of crazy, but he did this. There's no like subscription model. There's no like, like third party. It's not like Rutsolidin or MobX or like even something like Jotai. Like he literally is just using refs using local state. This isn't global store. This isn't global state. He just wants to solve one problem. It's like, get rid of those freaking dependency arrays.
[00:35:13] And it actually works. And he made it dynamic, which is cool. As I said, it essentially changes the length of the array, even though React doesn't let it.  I mean, it takes an expertise in React that a lot of people don't have to do this.  But what's really cool about it is, you know, he put this, he was up to like 2 a.m.  He went, like, me and him were both up. I was playing around the Svelte demo and he was working on this.  And it's just like, man, it's got to go to sleep, right? I'm a little tired tonight.  But...
[00:35:39] He just kept on adding features because we were talking through it and we're like, okay, well, how do you do this, right?  Can we do this?  Can we do the conditional thing?  What if you have some props or some static stuff?  Like, essentially, you can still pass the dependency array and have that also work.  But essentially, it's tracking, you know, but if you have stuff that's like user reducer or something, it can still feed in through the dependency array.  So it works both or...
[00:36:05] Check this out.  That's a lasso thing.  Make a wrapper.  You can take something immutable state in React and use as a signal.  And now it's trackable in the same way, right?  If divisible over three.  He was really loving playing with the conditionals.  Once you are used to playing the conditional dependency tracking, even though it has like  the gotchas a little bit, because you're like, oh, if I could write something that's like  unrelated and cause things to update, it's so powerful in terms of reducing execution.  You know, like, you know, especially when the work you're saving is expensive.  This is not that expensive of a work.
[00:36:35] a big deal. But you can see, like, if  it isn't visible by three, well, then no, we don't  need to get random or  do count. And
[00:36:42] I enjoy this in Solid, and I've always enjoyed this in Solid.  But seeing it in React and seeing the joy that it brings people playing around with this React just makes me giddy almost.
[00:36:53] It is...
[00:36:54] It is interesting, right? Because as I said,
[00:36:58] You just-- as I said, it's just like using salt.  The only difference is it doesn't benefit from any of the performance gains.
[00:37:06] This use signal or whatever he's got here is tied to the app component. No matter where you update it, it causes the app component to re-render. It's not fine grained. It's not like causing this stuff to re-render. It's literally just React.
[00:37:23] But he did it without, as I said, introducing another subscription system at all.  There's no, like, this is even lighter than some of the Pomander libraries or whatever, like, that Daishi's working on.  I think it's, like, less effective.  You don't get that, like, pinpoint.  You know, with Jotai, everyone's like, oh, update.  It's like a scale.  This is, like, just React scale.  So, like, if you update it, well, everything below it in the tree is updating unless you put Memo yourself.  So there's no performance optimization.  It's just an API thing.
[00:37:53] specifically which components depend on the state. So if you change the state that you listen to,  re-render those components. And Preact is actually working on something like this too. I don't have  the tweet at my fingertips, but they're actually looking at adding a reactive module for Preact.  It gives you that kind of Joe type, MobX type experience.
[00:38:09] And then solid is like the third stage, where you don't actually even re-render the components, you just update what changes, like super optimized. So this is like the steps.
[00:38:20] to get there. But as I said, let's not linger here too much. This is the stream is going to be about Svelte when we get to it. But I wanted to bring this up because
[00:38:30] I think that it's interesting about how important syntax is
[00:38:37] is, right?
[00:38:39] as I said, my approach with solid hasn't been about syntax.  It's so funny because people are making a big deal about it.  Like, I don't know if I have the quote here,  but Rackus has been making,  Adam Rackus has been making a little bit of a fuss  on some of these things, right?  You know, actually, I don't want to pull it up.  It doesn't really matter.  But a week ago, he's like, oh, solid looks really nice  or I should check it out.  And the funniest thing is I wasn't,
[00:39:06] I saw a stream yesterday with Cassidy on Twitter, and she had a hard time getting to solve it.  And I understand. She looked at the counter example and was like, oh, it's like React, I get this, and just went at it.
[00:39:19] And she didn't go any further in the tutorial.  And then it hit our one rule, which is don't destructure.
[00:39:27] you know, every variation of it along the way. And the problem is you see something like syntax and it immediately evokes a certain thought or recognition pattern in your brain and kind of causes you to, you know, go, oh, I know what this is and make that connection. And
[00:39:43] For better or for worse.
[00:39:45] For Solid, we ended up like React and we're nothing like React. So it's very hard for people to make that shift, whereas if they see viewers felt, they might be like, oh, yeah, go, okay, this is different. My brain is now thinking in a different way.
[00:39:59] What I was getting at is the execution model, that run once execution model, makes something like Svelte and solid.
[00:40:06] at least on the
[00:40:08] appearance of execution.  As I said, solid is a little different, a little bit more  optimal in terms of how it executes.  But when you look at how the model looks to you,
[00:40:17] Yeah.
[00:40:18] It's analogous. It's almost line for line in terms of the same primitives to the same things. It's not like React where you have these other mechanisms like use ref and use callback. But as I said, the syntax feel, adding the dependency, this all kind of adds to this
[00:40:36] that I usually I don't really care that much about, but people do. And
[00:40:42] It affects you, as I said, when you learn a new tool, it's a familiarity thing.
[00:40:48] you know,
[00:40:49] Try something for the first time.  This has probably the biggest influence on you.  When people pick up Svelte and they see let in constant,  like, oh, this is just JavaScript.
[00:40:58] it has that kind of impact. Even if
[00:41:00] mechanically under the hood, it's doing a whole bunch of other stuff, right? And I think
[00:41:05] I think that's the thing I've been coming to suit. I'm not going to lie, I've been a little bit like eh. There's people in the Solid community, you can take Svelte templates and compile them to Solid.
[00:41:18] you can do that. And I've been kind of like, yeah, sure. You know, whatever is your cup of tea, right?  One of the cool things about working with primitives is it's really easy to make them do whatever the hell you want.
[00:41:28] But,
[00:41:31] Yeah, and I actually have a whole thread about that.  I know this is a Svelte stream, so I don't think it's worth getting into.  But if you do get a chance, do check this out.  I kind of reflect on how perceptions change around solid.  And it is about this whole idea of, you know,
[00:41:44] people look at it and see different things.
[00:41:48] And
[00:41:49] Thank you.
[00:41:50] I guess working on the framework or the mechanical side, this has been the least important part
[00:41:55] piece to me. And
[00:41:57] And
[00:41:59] Yeah, I saw a lot of...
[00:42:03] Yeah, yeah, yeah, yeah, this is a perfect example.  Yes, of course we could.  But here's the-- and we could even have an ESLint rule, you know.  And we do.
[00:42:12] I don't think it's incorrect behavior.  IT structure props...
[00:42:16] Sometimes. I do do structure.
[00:42:18] I tell everyone never to destructure, but I destructure.  And the reason is the model makes sense and is perfectly consistent.  It's just not what you're used to.
[00:42:30] We have this Babel plug-ins. It's not part of the main one, but we have two different Babel plug-ins that are destructured. And when people come from React, I sometimes say, like, use this plug-in. But...
[00:42:41] It changes.
[00:42:43] -
[00:42:44] To me, it changes the meaning of what's happening. It's just hiding stuff. I don't like heavy abstractions. I like being on the metal. Solid is almost an abstractionless framework. This is what...
[00:42:56] where that philosophy difference kind of comes in.  You know, I'm gonna do a stream on this at one point  when I really talk about what solid is,  and tonight is not that stream, but,
[00:43:06] Sure.
[00:43:07] like,
[00:43:08] we try and keep the abstractions at a minimum, right?  And that is kind of the opposite of what Svelte does.  And...
[00:43:19] it has different consequences.
[00:43:22] And there's different reasoning behind it, right?  Like, as I said, we can fix at least the easy cases.  I just...
[00:43:30] I mean, there's always a trade-off.  Like, okay, how do you know what a component is?
[00:43:34] Right?
[00:43:35] in solid. I enjoy the fact that a component is any function essentially, or, you know, some reactivity  is any function. You don't need to wrap it. You know, wrapping it has a performance overhead,  but in order to get the destruction of the work, you actually have to annotate to know what the  components are and go, does it return JSX? Does that make it a component? Maybe. That's not a bad  heuristic, but essentially you enter this zone when you have that level of flexibility and power
[00:44:05] just aren't worth it.  It's like, how hard was it for you not to destructure?  Just don't.  It's like, you know what I mean?  Like you're going to jump through a bunch of hoops  to not even really solve the problem.  And then if you pretend that's the abstraction,
[00:44:19] and someone finds the hole,
[00:44:21] Like that's when the earth shatters.  And I don't like that.  I mean, to be fair, they'll probably get really far  before they find the hole in the abstraction.
[00:44:28] And maybe that's good enough.
[00:44:30] But...
[00:44:31] It's like I built solid with my mindset.  And maybe I'm a senior developer or whatever.  And that's where I'm coming from.  That's what I value.  But I don't care if it means explicitness,  I don't mind typing a few extra characters.  I like having the control.
[00:44:49] reflective of what's actually happening unless like I don't mind having some conveniences
[00:44:55] But essentially, I don't like masking behavior.
[00:45:00] Thank you.
[00:45:03] Yeah, I mean, this was like -- and this comes from functional programming, to be fair. It's very common in functional programming to do a lot of destructuring.
[00:45:14] and  and
[00:45:17] People love it.
[00:45:20] You know, I'm probably going to be pushed at some point to, you know,  make that part of the standard preset for solid or something.  I just think it's kind of...
[00:45:29] I don't know. There are shortcomings in terms of recognizing these things. I don't like annotating components. I like the freedom. Like if you ever see me talk about solid, you'll see it's like
[00:45:40] It's like the most raw, powerful thing.  And it's like the complete opposite.  Like, it feels like something where, like...
[00:45:47] And this seems weird to people, but
[00:45:50] I feel like
[00:45:51] If the paradigm in front end
[00:45:53] completely changes tomorrow,
[00:45:56] I can still use Solid for that.
[00:45:58] Because I'm just like, oh, we're doing this now. Let's just switch around. It's like, oh, concurrent round? Sure. Let's just do this. Like the power of the reactivity in the primitives is literally like you just do whatever you feel like. You're just like, oh, okay. Like, oh, this is what we should be doing. Let's do this.
[00:46:13] Like, there's no framework, right?  I have the DOM expression compiler, but then you just  write a slightly different compiler.  Like, everything's runtime, and it's all mechanical,  and the core concepts are three primitives, you know?  And that's just how I attack these things.
[00:46:32] Sure, you can build layers on layers.  And someone else will do that because it will make their life easier.  Someone can build Svelte right on top of Solid, you know,  trade some of that power for some ease of use.  And good for you, you know, do that.  But that's not here.  I'm kind of a control freak.  I like having complete power and the complete ability.  Like Solid came out of this...
[00:46:52] time period.
[00:46:53] essentially where
[00:46:56] Thank you.
[00:46:57] It was the crazy part of the early 2010, 12, where everything was changing and React came out.
[00:47:03] And I was using stuff like Knockout.
[00:47:06] Like you can just see as a continuation of that.
[00:47:09] Bye.
[00:47:10] you could, you know, in some ways you could say that the current solid is just
[00:47:17] kind of imitating React on purpose because it seems like a good thing to do.
[00:47:23] not for any other reason. If the next paradigm is something else, well,
[00:47:28] We can do that too. And Vue plays this game a lot. That's why they have so many different syntaxes.
[00:47:33] I just don't care about the syntax game. I care about the mechanical game, like the more architectural game.
[00:47:38] Vue has fine green reactivity and has that same potential. That's why Vue is like, oh, we have now we have ref sugar. It's basically like Svelte. Because when you have these powerful prims, you can do whatever you want. The only thing is that the solid power goes even lower level because we don't have a BDOM. So
[00:47:54] Yeah, sorry. This is kind of tangent. But I knew we'd get here a bit.
[00:47:59] Thank you.
[00:48:00] you
[00:48:01] Yeah, yeah, exactly.
[00:48:03] Yeah, sorry, I had this up before, but I missed the key point, which is the familiarity. People see React and they just do it.
[00:48:10] Thank you.
[00:48:13] Yeah, I mean, this came out of that time period, as I said, because that's what I was doing.  I was in a company that was building apps with like Backbone.
[00:48:23] And somehow...
[00:48:25] When I left that company in 2018-19, we did move to React right at the end.
[00:48:30] I didn't feel for one moment in those six years that we were behind the curve.  I thought we were ahead of the curve the whole time.
[00:48:34] in patterns and stuff, hawks.
[00:48:37] components, all that stuff, just because we could do whatever the hell we wanted with Knockout. And Solid, I just was like, Knockout had problems.
[00:48:45] But I just was like, these are solvable.
[00:48:48] I don't know why people like came up with all these like fixed systems.  You can just make the thing do what you need it to do.
[00:48:55] And yeah, it's a different mentality. I don't think most people get what solid is just yet. And I'm going to try and alleviate that more in other streams. But that's where this is coming from, right? This is this kind of
[00:49:07] mentality.
[00:49:11] - Yeah.
[00:49:14] Yeah, I mean, and part of that is like too many variations, too many things.  And that's because it's hard to be everything to everyone.
[00:49:22] And that's not that's why I don't see that as my responsibility.  I want to provide the primitives on the building blocks.  I this is why, like, if you're going to provide the building blocks,  maybe you don't get into that syntax game.
[00:49:32] maybe give them their thing, let people build those experiences.  I don't mean to be insensitive to it.  I just don't care.
[00:49:44] It's just like typing characters.  What it does and...
[00:49:48] the mental model is so much more important to me.  So, you know, as I said, like here's the thing.  Solid has this explicitly, it has this composition model.  Svelte's composition model takes you to stores.  So you kind of level up.  You go from let something to like now it's a store.  And if you've ever seen a Svelte store, it's basically like one of our signals.  It's a little bit more verbose in its style.  And it's a little less granular the way the subscriptions happen.  It's basically like RxJS.  But essentially,
[00:50:17] like
[00:50:18] You kind of level up.  View kind of levels up.  I just don't feel like leveling up.  It's just not worth having multiple things.  Just...
[00:50:25] Give me the thing and have it work the best way possible that I can do what I want with it.  And then I'm done.  But maybe that's like a different kind of developer perspective.  That's not how you get beginners using your framework.  And new people even, that's a bit of a friction.  So we're working on it.  And I have people who care about this stuff so that they're working on it.  But for me, I just want to make like the best possible things that give me the most
[00:50:51] control over what I can do with it. Anyway, I think we're kind of getting off into tangent. We should start talking about Svelte here, right?
[00:51:00] Thank you.
[00:51:01] Yeah, exactly. Let's move on a bit. One thing, yeah, I mean, I already kind of covered everything here. I was going to mention here, I am not...
[00:51:12] a stranger to Svelte.
[00:51:15] Uh,
[00:51:16] And
[00:51:18] I just wanted to put that out here, just kind of that--
[00:51:22] I've used Svelte on and off for years as like for little sample things. I
[00:51:30] I write about Svelte.  That's why it's specifically interesting that I haven't,  to date, done a stream specifically about Svelte.  In fact, I was just pulling this up here because--
[00:51:42] In 2021 on Dev2, which is only one of the publications, I wrote five of the top ten posts of the year on Svelte. I'm very interested in how it works. I'm very interested in the kind of mentality behind it. Svelte was a big influence on Marco VI, in fact. It's funny, it's kind of full circle because...
[00:52:01] Marco influenced Svelte back in the day, and now, you know, being a compiler, Marco was kind of a compiler way back, even before Svelte was.
[00:52:11] Now, full circle, Svelte's compilation for Svelte 3 served as the basis for a Marko 6's compiler. That's how we figured out how to do lexical scopes, which end up being the key to resumable hydration. Svelte is very close. They're missing a few pieces that I think could get them on that path, mainly around composition, but essentially
[00:52:34] and compiler analysis.  But essentially, the basis of what they did, at a coarse-grained  level, we took Solid's fine-grained idea and took their--
[00:52:43] mentality around compilation.  And that's where Margo Sakes, the last stream goes into it  in way more detail.  But a lot of respect for the work of himself.  And I've looked into it a lot over time.
[00:52:55] So I am not...
[00:52:57] unfamiliar with. Oh, another example. I was the one who updated Svelte 2 to Svelte 3 in the JS framework benchmark. I actually put in a couple other optimizations that made it even faster, but I couldn't get buy-in from the Svelte community because it made the implementation look a little bit messier. And I think Svelte has this aesthetic value that's very inherent to it. So it just wasn't very representative. I could do these couple little things and it would have upped the performance a tiny bit, but it just wasn't worth it. And
[00:53:24] Over time, the framework, a benchmark, we actually now mark
[00:53:28] frameworks that do those tricks anyways, like with numbers and stuff. So it's good we didn't. And Svelte kept its true form without kind of hacking the benchmark. And yeah, so I'm familiar with benchmarking Svelte. I'm familiar with writing Svelte. You know, this is why I feel more comfortable talking about this stuff on stream.
[00:53:47] because you could tell Rich was being very diplomatic. He was being like,
[00:53:51] you know, I'm aware of Sol, but I haven't looked into it too much. I don't want to say anything  that's, you know, not quite right. I don't, I don't, I don't care. I've used Svelte enough  that I feel that I have enough information to at least talk about it to a certain degree.  Okay, so with that, I think we're on to part two.
[00:54:13] So what are we gonna do here?  Should we just start talking about SvelteKit?
[00:54:17] Right. For people who've been living under a rock, SvelteKit,
[00:54:24] SvelteKit is a meta-framer built by Svelte.
[00:54:32] and
[00:54:34] It's an SSR-first framework. It uses adapters as a way to deploy to any number of
[00:54:40] different platforms, and it kind of just has everything you need to make modern apps.
[00:54:48] And SvelteKit has been in development for...
[00:54:52] quite some time. I was following his development in the Snowpack days and then when it
[00:54:58] And it's funny, it was almost coincidental.  I didn't expect SvelteKit to go this way, but Alex on the SolidCore team was like, Ryan, you have to use Vue 2.  This is where everything's at.  So I'm like, okay, let's try and start building on Vue 2.  Like a week later, Rich is like, we're moving to Vue 2.  And at that point, or Vue 2, not Vue 2, Vue 2.  And once he moved to Vue, I was just like, okay.  And that's when I really dug into SvelteKit for the first time to kind of look at it.  Because Solid at the time only had one thing.
[00:55:24] I built a really nice data fetching nested router.  I knew that was going to be the thing.  I've been working on that for--  I had prototypes for years.  And I knew the key to the future was nested routing  with data fetching.
[00:55:35] Right from the start, my first version of it, that was back in 2014. You can find a web component version of it. But I built that router and I was like, I need to build a meta framework. Where do I start? Well, I looked at SvelteKit as that inspiration because, you know, it seemed to be doing everything right. And, um,
[00:55:52] In a sense, I haven't looked back at it as much recently because Remix came out and Remix, in a sense, is closer to what I was doing because they, too, landed on the same routing solution.  And it's funny how similar the Remix and Solid is, even though they were developed completely independently.  So in any case, I'm kind of enthusiastic to look back here at what's going on.  So we can build an app like this.  But before we do that, I'm going to show you what I want to port here.
[00:56:22] Thank you.
[00:56:24] Let's see here, 'cause I've made an app  and it's a very simple app and I love using this app  'cause it's simple, but it has some of the basic stuff.  Where is our app?
[00:56:35] Let's blow this up and get some more text on here so we can see it.
[00:56:43] built this app
[00:56:44] And
[00:56:46] It is a Hacker News demo. And I built this with Svelte app router. I threw this together just this week.
[00:56:58] It's...
[00:57:00] Interesting because it's a hash router, so I had to do a few little hoops to get it working the way we want.  But generally speaking, it didn't take me that long.  I just took that same solid Hacker News, Remix Hacker News, Marco Hacker News demo, and just copied it across.  You see this used link?  This is...
[00:57:18] Svelte app router.
[00:57:22] And yeah, yeah, yeah, exactly.  We're doing Hacker News again.
[00:57:27] Thank you.
[00:57:28] It's a very simple app.  You've got some routes.  You have a nav bar.  You have the router.  And then essentially...
[00:57:36] you have three pages.
[00:57:40] Yeah, you just missed my whole philosophical dive into the differences with solid and svelte  and that whole thing.  Now we're actually getting some real code.
[00:57:48] We also talked about Tanner's amazing stuff.
[00:57:51] Thank you.
[00:57:52] Um, so yeah, it, it,
[00:57:56] So this is, I'm using the same API that I used in all of them.  This like weird combination of the Firebase API.  And then from there...
[00:58:07] One thing I couldn't get working with this was parallelized fetching with the router. There didn't seem to be any dynamic
[00:58:13] resolution other than the ability to wrap components. I'm hoping that I can solve this  in SvelteKit, but it's basically waiting for the code, the separate code split bundle before it  fetches the data, which is a big, big no-no in terms of waterfalls, but it's fine. I made sure  that all the markup and stuff is right. I use await tags in the templates, some loading indicators.  Let's just run this right now and we can see what we're dealing with, right?
[00:58:43] Thank you.
[00:58:43] Okay.
[00:58:44] Let me give you an idea of what we're building here.  It should look familiar.  A slightly different color.  I hope that's felt orange-red or whatever it is.  But essentially, we've all seen this demo at this point.  You can change pages.  You can change the category.  You can go to here.  And you can shrink them and collapse them.  This is why this page can't be...
[00:59:12] completely red.  But essentially, you can do that.  And I think there's a user page that really sucks.  Yeah, exactly.  OK, there's some loading states.
[00:59:21] you know, using the away tag, nothing too fancy here.  But this is just kind of the baseline app  that I want to port from.  This is just your classic DGIT template for Svelte.  I want to support it to SvelteKit.  I haven't actually tried this yet.
[00:59:35] we might hit stuff along the way. As I said, I reverse engineered it from a technical perspective and not for an authoring. This is my first time actually writing an app in StoutKit. So
[00:59:45] We're going to see how that goes, okay?
[00:59:49] Let's get started. I got like a million IDs open here, but you know, it doesn't hurt to open one more, right?
[00:59:58] Okay, let's
[01:00:00] Let's get that going.  And actually, before we do that, let's just go here.
[01:00:08] And...
[01:00:10] I guess it's not true. I do have this kit example that I did back in the day. Let's
[01:00:17] Let's just follow the instructions.
[01:00:20] And get this going. Let's go -- yeah. Well, not my app. MP minutes felt at next. And yeah.
[01:00:30] This is probably not what you should leave to last minute.  I remember the React server component demo,  I did do ahead of time.  But it was funny because if I hadn't,  I would have hit it on stream and it wouldn't have worked.  I'm pretty sure this will work though.  So let's just go there.  So let's call this Svelte.
[01:00:47] Hacker News.
[01:00:50] What am I calling?
[01:00:51] Okay.
[01:00:53] Sure.
[01:00:58] Yes, I want to install that.
[01:01:02] Svelte demo app skeleton project.
[01:01:04] Thank you.
[01:01:06] Let's do demo app.
[01:01:08] Use TypeScript.
[01:01:10] I didn't use TypeScript here, so I'm just going to say no.
[01:01:16] No, add ESLINK for code linting.  No.
[01:01:21] prettier-- well, this is interesting.  I didn't realize-- yeah, we'll add prettier.
[01:01:26] Playwright? No.
[01:01:30] Thank you. Okay. So
[01:01:34] install.
[01:01:38] Okay, yeah, that's fine. So we're going to open up our new window now. And we're going to get started.
[01:01:48] Yeah.
[01:01:50] Yeah, people know.  I mean...
[01:01:53] TypeScript's fine.
[01:01:56] Thank you.
[01:01:57] Examples, Svelte Hacker News Kit.
[01:02:04] All right.
[01:02:05] Let's do this.
[01:02:07] Okay.
[01:02:10] And we chose to do the...
[01:02:14] The --
[01:02:17] the demo version because I actually don't know any of the conventions and that'll just make our life easier. We can get everything later. Like for example, routes is the convention, but they have a different scheme
[01:02:29] for naming stuff.
[01:02:32] underscore is API routes, it looks like.  Double underscore is,
[01:02:38] layout component
[01:02:41] I want to see what dynamic components are, but we can probably look that up in a minute. Let's run the example, right? NPM, install first.
[01:02:47] Thank you.
[01:02:51] Thank you.
[01:02:51] Yeah, I mean, I get some of the tooling often. I just...
[01:02:57] I just wasn't expecting prettier as an opt-in.
[01:03:02] I guess it's just the config.
[01:03:08] So let's just run this npm run dev.
[01:03:13] and it's port 3000.
[01:03:20] Thank you.
[01:03:21] Ooh, they've made this a little bit nicer.  So I'll try to literally copy their start page,  like I copied unapologetically.  But they now have a nice little graphic thing  in Home about to-dos.
[01:03:35] Oh, look, there's a little to-do with demo in here. Beautiful. Counter. It hydrates. Wonderful.
[01:03:42] Thank you.
[01:03:44] Thank you.
[01:03:45] through here.
[01:03:47] Okay, cool.
[01:03:54] Okay, yeah, maybe I'm going to double look at that again. Cool. So,
[01:03:59] Yeah.
[01:04:00] Thank you.
[01:04:02] Back to home.
[01:04:04] Thank you.
[01:04:05] Typical counter demo.
[01:04:10] Yeah, this is all nicely done. I like the gradient background and stuff. Let's look here for a second and see what that means. Yeah, because
[01:04:19] Thank you.
[01:04:21] It's used by the to-do's endpoint to make calls you.
[01:04:26] Thank you.
[01:04:27] Thank you.
[01:04:28] Thank you.
[01:04:30] uh-huh gotcha yeah yeah so it's not the api actually doesn't live here so this is like how  you just co-locate your lib stuff yeah okay that's that's cool i had it hoisted out but you know
[01:04:47] Sure, co-locate where it's used makes sense.
[01:04:50] it's
[01:04:51] We have--
[01:04:53] Some ideas sort of like salt start.  OK, so that's fine.  Some head.  Yes, this to do's.  I wonder what use enhances.
[01:05:05] Okay.
[01:05:07] There's probably a lot of APIs because these are
[01:05:12] These are libform. Okay. Okay, yeah. So they have some... Okay, so this is nothing special. They just... They want to... I bet you they want to show progressive enhanceable forms. It's all the rage these days, right?
[01:05:26] I mean, it's easy to do, but Remix has turned it into a standard now that everyone has got to pay attention to. But it's fun. Yeah, sure. Yeah, that makes sense. And then what else do we have here? Okay. So...
[01:05:43] Sure.
[01:05:43] Pre-render, OK, so there you go.
[01:05:47] Thank you.
[01:05:48] I suspect that this is a behavior setting thing.  This is how you handle config.  They have two script tags.  They have normal Svelte script tag,  and then they have...
[01:05:59] um
[01:06:00] Thank you.
[01:06:00] Special one.  And I guess this dollar sign is how they do prefixes.  So essentially, I wonder if any top-level folder  you can just put a dollar sign in front of  and then essentially just shortcut it.  It's easier.  We do something similar to insult start.  Okay, webp, blah, blah, blah, blah, blah, counter styles, blah, blah, blah.
[01:06:19] Hmm.
[01:06:23] One thing that I am going to wonder about
[01:06:26] is I wonder, okay, maybe I'll just do it like this.
[01:06:30] then
[01:06:31] Let's go.
[01:06:33] I do have global CSS, so I do want to get that in here.
[01:06:38] So that's the pattern for that. And then they have an index and then you see this. Yeah.
[01:06:44] This is very VEAT.  I was doing this with Solid, but then I was like,  wouldn't it be cool if we could just build the whole thing into the JSX?  Like, picture the whole thing being the Svelte file.  But I had to hack crazy around VEAT to make that work.  Not crazy, but it was a bit of work where I think  this just plays nicer with what they're doing.
[01:07:02] Hooks.js, what is this?
[01:07:06] Cookies, I don't know what this is.
[01:07:10] Cookie parser alert. Huh.
[01:07:16] Thank you.
[01:07:18] Interesting.
[01:07:21] Yeah, so maybe this is some of the special stuff  that we're going to kind of come into.  I mean, I get routes.  We're going to have to look in the conventions here.
[01:07:28] And
[01:07:30] I get what's going on here. I think that's cool. I think, though, maybe it's time to move on to Hacker News. Any questions so far? Sorry, I'm just looking in here. Maybe you all have some thoughts.
[01:07:45] Yeah, exactly. It's the alias for the source.
[01:07:49] Yeah.
[01:07:51] - Yeah, I love Veed and the plugin system,  and it's just great.  I've been having so much fun building stuff with it.
[01:07:59] I mean, it's also kind of like the biggest...
[01:08:03] pile of hacks on hacks when you get underneath and you realize what's going on.  Like when stuff doesn't work, you're just like,
[01:08:09] What?
[01:08:10] It...
[01:08:11] how is it working? It actually does that. But from the outside perspective, it's just like the nicest thing ever. And I think there is some work going on.  That was the whole point. They wanted to kind of like make it to be what people wanted to use. And then kind of they're in this process now. I kind of call this like the second stage where they're kind of going back and like,
[01:08:31] cleaning it up under the hood they kind of went really fast and out there to make it like make  it kind of like have the right api surface the right way and like it's so good from the outside  perspective that it's just going to get there there's amazing team working on it and yeah
[01:08:50] Hooks is a middleware. Yeah, I'm just not clear how it knows to be a middleware.
[01:08:57] I mean, that's what it does look like, right?  Here's your event, and then Resolve, obviously, is...
[01:09:02] finishing it. I just, I don't, I don't know if it's a special name thing or because it caused a  cost handle in it or it's, it's always fun playing this named export game.
[01:09:12] Yeah, cool. All right. So no, man, he's a, he's a wizard, man. A mad wizard. Uh, when it comes to putting together stuff on the developer experience side, like huge props on that. Um,
[01:09:29] Yeah, no, Vita is amazing. Let's, let's,
[01:09:34] Yeah, so if it's just some hooks that I don't care about, I'm kind of tempted to
[01:09:40] How to best strategically gut it.  If I go like this.  Okay.  So static is static stuff.  So I don't, won't need this.
[01:09:47] The biggest problem is I don't want to gut too much, right?  But I do want to gut a lot.  So lib...
[01:09:55] is the pattern that they're using for putting their components in it.  And like any random thing.  Okay, I can live with that.  So let's just...
[01:10:03] Start. I don't think I need this hook. This is not doing anything relevant here. It's
[01:10:10] It's...
[01:10:11] Yeah, OK.  For our purposes, we don't need this hooks, OK?  I don't-- yeah, I'm going to see with just file included.
[01:10:19] Yeah, I could have gone with the skeleton. You're right. But this also teaches us. That's one of the things teach by example, right? Um,
[01:10:27] I said no to TypeScript. Why are you here? It's fine. It's fine. Okay. So, I'm going to leave this. And this
[01:10:38] is clearly just--
[01:10:39] Pretty much what's changed has felt
[01:10:42] Hacker news. Done. Okay. And then...
[01:10:50] Let's port.
[01:10:51] stuff across. We have this. Okay. So,
[01:10:58] Thank you.
[01:10:59] Let's make this a little bit...
[01:11:01] bigger we need
[01:11:04] What do we need? Our first point is we need -- let's grab the CSS, global CSS.
[01:11:15] And that's now global CSS. Beautiful. Okay. And then HTML is fine. And then,
[01:11:21] We're going to empty the lib folder.
[01:11:25] Just delete it.
[01:11:27] Thank you.
[01:11:27] Thank you.
[01:11:28] And my gut here is we can just...
[01:11:32] pull-- we can just pull whatever we want from here over to here.
[01:11:39] She's...
[01:11:40] drop in our components.
[01:11:42] And then
[01:11:45] Let's drop our API in, too.
[01:11:49] Thank you.
[01:11:52] *sniff*
[01:11:52] I think these pieces are just going to stay the same.  Oh, except for the routing.
[01:11:59] because of the stupid link thing.  I think running is going to be a lot nicer.
[01:12:03] I didn't look at the routing before, but...
[01:12:07] the layout component should tell me everything.
[01:12:09] I need, right? Yes. Looks like, let's see, where is it? Where's the nav? Oh, I deleted the nav. My luck.
[01:12:20] Of course, that's fine. I got ahead of myself. That's what docs are for, right?
[01:12:29] Um, yeah.
[01:12:32] uh we've actually i i i already have this open i have to already have this open let's go to
[01:12:38] - The docs.
[01:12:41] No, actually screw this.  Let's just start by
[01:12:45] by...
[01:12:47] by filling out our layout component,
[01:12:51] And then kind of going from there, because I'm gathering we're going to have
[01:12:55] one main layout component that they have the header, but we're going to basically connect our nav into. So import.
[01:13:03] Is this an import nav from
[01:13:07] - Love.
[01:13:09] Now.
[01:13:13] Okay. And...
[01:13:15] Take it to their own.
[01:13:17] And then essentially from our other example, which is here, we're just going to
[01:13:26] Thank you.
[01:13:28] OK, forget about the routing.  We're just going to do this.  And how does this-- OK, slot.
[01:13:37] Beautiful. So this component's going to be really easy.  It's going to be nav.
[01:13:41] And it's going to be slot.
[01:13:46] And then
[01:13:48] So this is the thing with these kind of demos, which also makes some kind of nice script.
[01:14:02] interesting. It's completely...
[01:14:03] I didn't want to think about adapters so far, but
[01:14:10] What's--
[01:14:11] It was working, so I'm going to assume that's fine.  Okay.  And then...
[01:14:14] Just so that the nav doesn't...
[01:14:17] ruin our day. We're going to get rid of this garbage. And then all these use links, I believe,  just go out the window. I'm hoping
[01:14:28] It's just like this.
[01:14:32] Okay.
[01:14:34] Okay, now...
[01:14:38] Right.
[01:14:42] Yeah.
[01:14:43] Okay. Let's pretend that a warning doesn't exist and we're just going to run dev and hope that we see the Hacker News title war.
[01:14:55] Beautiful. Okay. Yeah, no, that's good.
[01:14:59] Wow, I went through that drink fast.
[01:15:08] Okay, so...
[01:15:13] Yeah, obviously the layout doesn't work because I gutted it.
[01:15:17] And
[01:15:19] Thank you.
[01:15:20] Yeah, I mean, it's fine.  We can delete about.  We can delete to-dos.  We aren't doing anything fancy here.
[01:15:28] Too trash.
[01:15:29] OK.
[01:15:31] And...
[01:15:33] Thank you.
[01:15:34] That's fine.  Okay, so...
[01:15:37] Okay, all good.  And then let's just do a quick look on routing here,  because the one thing that Hack News has that's unique,  and I hit problems with this with Remix,  is basically you want a wild card at the root,  because Slash and the title stuff both lead to it.  So essentially, you don't just want a slug.
[01:16:03] You want like a wild card route, like a not found route.
[01:16:07] In Next.js, it's dot, dot, dot.
[01:16:11] that, right? That's what I'm looking for.
[01:16:15] And I'm just saying that I've never used Next.js.  I've never even looked at Next.js.
[01:16:19] But just hoping that I can see support for wildcard routes.
[01:16:26] Like star routes.
[01:16:29] Um...
[01:16:32] Remix for some reason didn't do it easily either.  So I'm hoping, otherwise, I mean,  there's a really, really easy workaround.  We just copy the file twice, but this is the first thing  that we should figure out.  I'm gonna blow this up a bit.
[01:16:51] Thank you.
[01:16:51] Thank you.
[01:16:53] No.
[01:16:54] Yeah, okay, so...
[01:16:59] Thank you.
[01:17:01] This is all...  It's basically...
[01:17:06] I just want pages, which are now called routes.  But this is all I get in terms of docs so far, which
[01:17:15] Yeah.
[01:17:17] Hmm, okay.
[01:17:20] Yeah, I'm thinking...
[01:17:23] if they supported--
[01:17:25] That, I would see some note here.  I mean, we can try it.
[01:17:32] So let's just...
[01:17:34] We don't have the counter.
[01:17:37] I'm not going to worry about pre-rendering. We'll come back to that.
[01:17:41] or head.
[01:17:44] Mm-hmm.
[01:17:44] Let's just...
[01:17:46] put something like this in. Give it a style tag. Don't need it. And essentially
[01:17:53] index works. Let's see if index works.
[01:17:59] Okay. Yeah. And then
[01:18:03] What's going on?
[01:18:06] Thank you.
[01:18:07] Okay.
[01:18:09] Thank you.
[01:18:10] Thank you.
[01:18:11] I'm going to restart. It thinks the old routes are there and it didn't --
[01:18:17] We can update.
[01:18:19] Yeah, yeah. Okay. Yeah, exactly. Okay.
[01:18:23] That's not Svelte's fault. I've seen this behavior in Veet. Veet is
[01:18:27] not great with adding and removing routes dynamically.  One of those things.  OK, so this works.
[01:18:38] So the question is, does this work?  Or is it going to...
[01:18:45] shit
[01:18:46] Thank you.
[01:18:48] Thank you.
[01:18:50] A better question. I don't trust this now. This is the problem.
[01:18:57] Take away my trust.
[01:18:58] That works because...
[01:19:02] This work.
[01:19:05] Thanks.
[01:19:07] No. Beautiful. Okay. So it does look, even though they haven't documented it, it looks like they do
[01:19:13] the same convention, which is beautiful because
[01:19:16] Then in theory,
[01:19:20] um, the,
[01:19:22] They're already doing
[01:19:24] What I did.
[01:19:25] already. So, if we copy this and paste that second right here,
[01:19:31] Obviously, we got to do a little bit of reworking because there is no SvelteSpa router.
[01:19:38] And this has moved to--
[01:19:42] A more convenient dollar sign lib.
[01:19:46] as has this.
[01:19:50] But beyond that,
[01:19:53] Oh, right. I need to figure out how we get
[01:19:57] We do data fetching and stuff. But that's fine. One thing at a time.
[01:20:02] I'm OK with this doing it this way, but we need to figure out how to get the location  or the params or the query string from the router.
[01:20:10] Because I suspect, yeah, this is--
[01:20:14] Thank you. Yeah, it's good. It lets you add, but it doesn't let you delete. That's where the error is. Okay, so let's figure out how we get route data in. So how do you use the slug? It's going to be an export lead, isn't it?
[01:20:31] That would be smart. If I was writing Svelte, that's what I would do.
[01:20:35] Thank you.
[01:20:35] I would expose it through like a prop somehow or something.
[01:20:41] Thank you.
[01:20:43] Thank you.
[01:20:46] Thank you.
[01:20:47] Thank you.
[01:20:48] Thank you.
[01:20:49] I don't want endpoints. I just want to -- in the Svelte file, how do I get the data?
[01:20:54] So like,
[01:20:56] All right.
[01:20:57] Mm-hmm.
[01:20:58] Thank you.
[01:20:59] Thank you.
[01:21:00] Oh, yes, so they do have rest parameters right here.
[01:21:06] Thank you.
[01:21:06] Why am I not...
[01:21:10] There should be something.  This is probably my fault for deleting the example too soon.  But there should be a way to--  I guess I didn't show.
[01:21:25] Thank you.
[01:21:26] Thank you.
[01:21:28] Peace.
[01:21:29] Okay.
[01:21:30] Export let item.
[01:21:41] - One.
[01:21:42] Why is it called item?
[01:21:45] Because
[01:21:46] I am not.
[01:21:50] Thank you.
[01:21:53] - Okay, this is their approach  to parallelize data fetching.
[01:21:57] I see.
[01:21:58] Thank you.
[01:21:59] Okay, okay, okay. Yeah, yeah, yeah.
[01:22:03] Thank you.
[01:22:04] Thank you.
[01:22:05] Essentially,
[01:22:07] the
[01:22:09] If you name a file with the same name as the route,
[01:22:14] then essentially they will automatically do the data fetching and then
[01:22:21] I don't know why it's called item though.
[01:22:26] That's...
[01:22:29] Thank you.
[01:22:37] But I don't necessarily need a data loader.  Okay.  Okay.
[01:22:44] But I'm gathering, they're not saying it directly, but they're saying, sorry,
[01:22:51] This is like the remix loader thing.
[01:22:56] But I don't actually need it to be only on the server.  I think they used to actually-- this has changed a little bit.  I think they actually used to have a script tag.
[01:23:08] approach to this.
[01:23:11] So I think things have changed a little bit.
[01:23:15] Thank you.
[01:23:16] Right.
[01:23:17] Thank you.
[01:23:18] 'Cause
[01:23:20] Okay.
[01:23:22] Okay.
[01:23:24] Yes, I see.
[01:23:26] It's whatever this is named.
[01:23:29] OK.  And I'm gathering the parallelizes for us.  So this is the way to do it.  Then let's do it.
[01:23:35] Thank you.
[01:23:35] Seemed reasonable to me.
[01:23:38] So let's do this.
[01:23:44] We'll have a new file called stories.
[01:23:48] Okay.
[01:23:49] that
[01:23:51] Yes.
[01:23:52] Thank you.
[01:23:53] - Is that right?
[01:23:58] And
[01:23:59] It's going to...
[01:24:02] Thank you.
[01:24:03] Do some stuff.
[01:24:06] Peace.
[01:24:08] We don't have a database.  It's fine.
[01:24:10] Thank you.
[01:24:11] And it gets params right from there.
[01:24:15] We're going to see what it passes us in a minute, but let's assume that this whole
[01:24:21] thing that I'm doing here doesn't belong here.
[01:24:26] essentially, this whole fetching, data fetching.  It just doesn't belong here.  I know it's another API, and we could probably just  do a client side.
[01:24:34] We're playing the remix game, right?
[01:24:38] So let's just do that.
[01:24:42] Thank you.
[01:24:43] I'm gathering this is going to get rid of the need for these awaits and stuff.  So we're going to see how this works.
[01:24:50] following the pattern.  So fetch it.
[01:24:54] All right, we can pull this out.  This is-- all right, so--
[01:25:00] Thank you.
[01:25:01] And this is a constant we can pull this out to.
[01:25:05] Thank you.
[01:25:06] And we don't need these to be reactive, because this function is going to be called every time.
[01:25:11] So...
[01:25:14] we're returning an object to represents this response.  And this is where we pull our data.  So eventually--
[01:25:21] what we want to do
[01:25:23] is...
[01:25:25] Thank you.
[01:25:26] I'm going to get rid of all of these for a second.
[01:25:31] Um,
[01:25:32] And we're actually going to...
[01:25:35] It's funny.
[01:25:38] It's fine. It's fine. I mean, we...
[01:25:42] We're going to...
[01:25:43] I'm just going to do it here. It's a little bit funny to do it this way. But essentially,  we need all this information anyways.
[01:25:52] So, even though technically speaking
[01:25:56] Yeah.
[01:25:57] it might not be necessary.  I'm not going to worry about
[01:26:06] this weirdness right now. I'm just going to
[01:26:10] Await this.
[01:26:12] const stories. We'll just send this back like this.
[01:26:22] Stories.
[01:26:25] And now we just need to we need to get this stuff and.
[01:26:31] Technically, this is going to be params.  Probably params are top.
[01:26:37] And
[01:26:39] This is going to be...
[01:26:44] Yeah, we're going to find out what's...  We're going to comment this out for a second and just make it page one.  We're going to find out what Svelte gives us here.  But if all is right in the world, what should happen is...
[01:27:02] We should essentially...
[01:27:06] In here, I have an export.
[01:27:10] Let's
[01:27:13] And we should have stories export let page export let
[01:27:24] - Okay.
[01:27:27] Thank you.
[01:27:29] Yeah.
[01:27:30] And
[01:27:33] I probably crashed the server at some point, yeah, or turned it off.
[01:27:39] See this.
[01:27:41] Thank you.
[01:27:45] Oh, it's because story still has this garbage in it.
[01:27:52] Thank you.
[01:27:55] Um,
[01:27:56] Thank you.
[01:27:58] Garbage.
[01:27:59] Let's get rid of this. I knew when I was working on the app runner I'd be removing garbage.
[01:28:06] Thank you.
[01:28:09] I wonder if that's like Jason stringify the response myself or something.
[01:28:17] Well, let's see what we're getting. Well, let's look at the server error. Is it any more descriptive?
[01:28:26] Thank you.
[01:28:26] Amen.
[01:28:29] Thank you.
[01:28:30] Okay, let's restart the server.
[01:28:34] Thank you.
[01:28:36] Thank you.
[01:28:41] Thank you.
[01:28:42] Let's see if we get anywhere here first.  Let's just go console.log.com.
[01:28:56] We do good here.  Okay, sweet.
[01:29:01] That's good.  So, um...
[01:29:04] Let's take a look at arguments, too, while we're here. Why not? I just have arguments.
[01:29:13] Thank you.
[01:29:14] Beautiful.  So we have our request object, nice.  URL, nice.  Which looks like an actual URL object.
[01:29:22] And we have prams, which is nice.
[01:29:27] Oh, and it's smart enough to resolve.  Yeah, I like that.  Sometimes they aren't nice like that.  So we can use params.  And then all we have to do is essentially take the URL  search params off the URL objects.  We just go params URL.
[01:29:43] And then...
[01:29:45] it should be
[01:29:51] Yeah, I mean, actually...
[01:29:55] Thank you.
[01:29:56] This is very much like Remix.  I'm just going to do something really quick here.
[01:30:00] just because it's easier.
[01:30:02] File, new window, file, open recent, remix hacker news.
[01:30:08] This is actually almost identical.  So we should be able to--
[01:30:13] Just--
[01:30:15] Take...
[01:30:17] Thank you.
[01:30:18] this
[01:30:20] To get the page just because I'm lazy.
[01:30:23] Thank you.
[01:30:26] Thank you.
[01:30:27] Thank you.
[01:30:30] Yeah, sweet. So that still doesn't explain why we're crashing though.
[01:30:38] So,
[01:30:39] Thank you.
[01:30:41] Let's just make sure what we have is what we expect.  Stories, page, type.  And we can--
[01:30:53] Get rid of this.
[01:30:57] Thank you.
[01:30:58] OK, yeah, so I broke something before this.
[01:31:01] Because this is--
[01:31:04] What am I-- I'm doing something just--
[01:31:07] Wrong here.
[01:31:09] Which is fine.
[01:31:12] Thank you.
[01:31:13] Thank you.
[01:31:17] - Oh, of course, yeah.  I'm just like, global fetch, right?  But you're absolutely right.  They have a special fetch, don't they?
[01:31:28] I was thinking they'd just do node fetch for me, but it's this.  This is my problem, isn't it?
[01:31:39] And since this is always going to be on the server anyway,  so I can literally just get rid of this.  Oh, I'm going to leave it in case we do some fun stuff later.  Yeah, what's their deal with data fetching?
[01:31:52] Do they actually...
[01:31:53] What's the fetch they provide?  Can we search for fetch?
[01:31:59] Thank you.
[01:32:02] Thank you.
[01:32:06] Thank you.
[01:32:12] Thank you.
[01:32:13] Thank you.
[01:32:14] Thank you.
[01:32:17] Thank you.
[01:32:17] Fetch.
[01:32:23] .
[01:32:30] Okay.
[01:32:32] Is it just like import fetch from--
[01:32:36] Oh, it's part of the...
[01:32:38] Thank you.
[01:32:39] Yeah.
[01:32:40] Yeah, yeah, yeah. I think I see what's going on.
[01:32:46] OK, so I actually have to do this, which is fine.
[01:32:54] I think, right, because I'm going to have to essentially in here
[01:33:00] be like pass fetch to it because I get fetch from fetch.
[01:33:06] Sure.
[01:33:07] Thank you.
[01:33:12] Fetch is not a function.  OK.  I thought I was understanding this correctly.  Because it's like, where's fetch coming from?
[01:33:23] The load function receives the object containing URL params props fetch.
[01:33:27] OK.
[01:33:31] Okay.
[01:33:33] Is there a difference between the load function and the get function?
[01:33:37] That was a load function.
[01:33:41] Thank you.
[01:33:42] Oh, interesting.
[01:33:45] See, this is not what I'm doing right now.
[01:33:48] This is in the context module in the file.
[01:33:58] And this is what we actually want.  For this particular demo, fetching the client  tends to be faster than fetching on the server.
[01:34:09] Okay.
[01:34:12] But
[01:34:13] Sure.
[01:34:14] Yeah.
[01:34:17] - Okay, that was confusing.
[01:34:20] But I think this is what we're actually looking for.
[01:34:25] Yeah, sorry, I was ignoring chat for a little bit.
[01:34:27] All right.
[01:34:28] Thank you.
[01:34:29] Thank you.
[01:34:30] Thank you.
[01:34:36] Thank you.
[01:34:37] Thank you.
[01:34:37] Yeah, okay. Sorry, guys.
[01:34:43] Thank you.
[01:34:50] Yeah, thank you. Thank you. Yeah, it's funny because it's at the beginning, they have this whole thing about, you know,
[01:34:57] pages and stuff, but it's actually down here.  Yeah, this is what I'm looking for.  It's funny because Remix has--
[01:35:06] These things that I think...
[01:35:09] are like
[01:35:11] what we're doing right now. But
[01:35:13] Um,
[01:35:17] It also-- Solid's version works more like this, which SvelteKit is doing here with this load. So it's kind of interesting that there's
[01:35:27] Both.
[01:35:28] Um,
[01:35:30] Yeah.
[01:35:33] I get this. It's weird that they kind of occupy the same space. It's just when it runs. But yeah, let's switch it over to this one. Okay. So I think we're...
[01:35:51] It's funny we were closer to it before. Okay, so...
[01:35:54] Yeah.
[01:35:55] Now we want script.
[01:36:00] And we want type equals minus 1.
[01:36:07] context module. And then
[01:36:13] Thank you.
[01:36:15] The other changes we make actually all make sense. We just want
[01:36:20] Uh-huh.
[01:36:21] or this.
[01:36:25] All right.
[01:36:26] And it's defined in a export async function load.  Export async function load.
[01:36:37] Okay.
[01:36:37] All right.
[01:36:40] Okay.
[01:36:41] Okay, I need to copy the whole thing.
[01:36:45] So then we'll move back to it.
[01:36:48] All right.
[01:36:48] And then
[01:36:50] Thank you.
[01:36:51] I want params and...
[01:36:56] What do we want? The other one. Fetch.
[01:37:01] Thank you.
[01:37:02] Thank you.
[01:37:03] Thank you.
[01:37:06] New URL, OK.  And we need this as well.
[01:37:11] Jesus.
[01:37:14] Thank you.
[01:37:19] well
[01:37:22] Format document.
[01:37:24] Thank you.
[01:37:25] Thank you.
[01:37:26] prettier
[01:37:27] Ooh, svelte. Ooh, I don't know.
[01:37:30] OK, that's fine.  Let's get rid of this because it's probably aliasing it  in a really bad way.  Let's stop this because it's probably--
[01:37:45] Thank you.
[01:37:46] Okay.
[01:37:47] Thank you.
[01:37:48] And
[01:37:53] Amen.
[01:37:55] Thank you.
[01:37:59] Thank you.
[01:38:00] Status, response, status, props,
[01:38:05] It calls them props, okay.
[01:38:09] It's interesting that it has different...
[01:38:12] Thank you.
[01:38:13] Naming conventions?
[01:38:16] Thank you.
[01:38:18] Thank you.
[01:38:20] Thank you.
[01:38:21] Thank you.
[01:38:22] Thank you.
[01:38:29] all right
[01:38:30] Thank you.
[01:38:31] Are we still getting the same token error?
[01:38:38] Thank you.
[01:38:51] Yeah, they provide their own, yeah, because they do the sterilization. It's kind of like resources in Solid.
[01:39:03] They need to do something special to intercept it  to automatically handle the serialization.  Solid is just a primitive.  You just go like...
[01:39:10] and then you can use any promise with it.  For them, they've decided to single out the fetch parameters.
[01:39:16] This, yeah, let's see.  I'm probably doing something wrong in the fetch side.
[01:39:25] they're not happy with me.
[01:39:28] Did some typescript fit in here?  Let's get here.  Console.log.jpg.
[01:39:38] Yeah, OK.
[01:39:39] And we have fetch, right? It's a real thing?
[01:39:45] It is an atync function, good.
[01:39:50] Thank you.
[01:39:52] Okay.
[01:39:53] Thank you.
[01:39:55] So then this is...
[01:39:57] Interesting.
[01:39:59] And that's...
[01:40:00] Complaining about Link not to find it, I think I got rid of that crap.
[01:40:06] Thank you.
[01:40:07] Thank you.
[01:40:08] Thank you.
[01:40:10] Thank you.
[01:40:14] *Bad*
[01:40:16] Sorry, just minor annoyance.  OK.  Get less errors on my screen.  So the API fetch is just failing.
[01:40:33] Hmm.
[01:40:39] Thank you.
[01:40:39] Thank you.
[01:40:40] Thank you.
[01:40:42] Yeah, I don't get what-- the whole editor is not happy
[01:40:49] with
[01:40:50] this script tag, but it's been since the beginning for some reason. Like since I started the project, it's been unhappy with this. And there is an adapter
[01:40:59] auto, presumably.
[01:41:03] Svelte.js.
[01:41:06] Okay.
[01:41:07] Sorry, at Svelte.js adapter auto.  Like, it's here.  So I don't-- the editor complaining is, I think,  just a red herring.  I think--
[01:41:18] Thank you.
[01:41:19] I think it's...
[01:41:23] Thank you.
[01:41:24] All right.
[01:41:26] Is there a reload window?
[01:41:28] All right.
[01:41:30] Thank you.
[01:41:31] Thank you.
[01:41:33] Maybe I'll just--
[01:41:34] Let me just save any open files and reopen this whole editor again.
[01:41:40] that
[01:41:42] Thank you.
[01:41:44] Thanks.
[01:41:45] Thank you.
[01:41:48] Thank you.
[01:41:48] Thank you.
[01:41:49] Thank you.
[01:41:50] Thank you.
[01:41:51] Thank you.
[01:41:52] Thank you.
[01:41:57] Thank you.
[01:41:58] Thank you.
[01:42:00] All right, so--
[01:42:03] All right.
[01:42:12] - Sure.
[01:42:14] Thank you.
[01:42:18] We'll do that later.  Okay.  So, okay, at least...
[01:42:23] Some red stuff has gone away. Okay. Yeah. I mean,
[01:42:27] Yeah.
[01:42:29] I can--
[01:42:30] I wonder if we show the loading states now.  I'm not going to worry about that for the second.  I don't need to worry about this.  I'm just going to get rid of the await tag.
[01:42:40] Here, yeah. Let's clear this.
[01:42:48] OK, so there we go.  Extensions have been modified in disk.  Please reload the window.
[01:42:56] Okay, and now we're happy. Okay. So anyways, npm run dev.
[01:43:03] - Banyu, that was just the...
[01:43:06] the editor. I don't think that explains our unexpected JSON that's happening here.
[01:43:14] Okay.
[01:43:16] It's funny, I forget what I was doing  and I had a similar problem with fetch.  It just, the only thing is this time  we're using the built-in stuff, so it's like,
[01:43:27] Thank you.
[01:43:29] What don't you like? Maybe the header format?
[01:43:35] Um, although...
[01:43:37] I mean...
[01:43:39] That seems like a stretch.
[01:43:43] Uh...
[01:43:56] Yeah, I use it for all the demos. We were just looking at it a second ago. Hacker news.
[01:44:05] Yes.
[01:44:07] Okay.
[01:44:10] Yeah, okay, okay.
[01:44:16] Thank you.
[01:44:17] I mean,
[01:44:19] Thank you.
[01:44:23] It looks like just literally that it's failing to parse the JSON here from the response, which is...
[01:44:34] Interesting.
[01:44:37] Thank you.
[01:44:38] We saw this working on localhost on the other demo a minute ago.
[01:44:42] I,
[01:44:43] That is...
[01:44:46] tricky, and we definitely need to run this on the server.  I wonder-- OK, let's--
[01:44:54] Thank you.
[01:44:55] *sad*
[01:44:58] Thank you.
[01:45:00] Thank you.
[01:45:04] It is server.
[01:45:07] Yeah, is this like a compiler trick and like we're messing with their compiler trick? Do you think maybe that's what it is?
[01:45:15] Yeah, let's do that.
[01:45:21] Yeah, we just need to--
[01:45:25] Yeah, let's change this to here, get rid of this.
[01:45:30] And then we have to do a little bit more mapping.
[01:45:34] Um...
[01:45:36] We missed the rest of the URL.  This is a story URL, so it looks like that.
[01:45:42] And--
[01:45:44] Yeah, let's do that.
[01:45:48] point of the name of the one page.  And that'll fetch that and then it's--
[01:45:52] Um...
[01:45:56] And
[01:45:59] V.json.
[01:46:04] It's sad.
[01:46:09] Unless we need to set those headers,
[01:46:11] which
[01:46:12] Fine.
[01:46:15] Thank you.
[01:46:17] Don't think let's see I
[01:46:21] um
[01:46:23] - -
[01:46:24] Yeah.
[01:46:28] Thank you.
[01:46:29] This thing sometimes rejects if you don't...
[01:46:35] pretend you're Chrome on the server.
[01:46:38] It just doesn't send the data.
[01:46:40] Um,
[01:46:41] But just making sure I'm not missing anything else here,  because it looks like this.  Then you put the path in, which is we put the path in.  And then--
[01:46:50] Um,
[01:46:55] Thank you.
[01:46:56] And same thing.
[01:47:00] I mean, let's just sanity check.
[01:47:03] Maybe, you know what?  There's probably like a simpler solution.  It's probably like this isn't getting...
[01:47:09] like formed properly or something. Like there's like this, like our inputs mismatched and like we're just not creating the right request. And I mean, this is the most obvious thing and the first thing we should have tried.
[01:47:21] So let's just do that for a second, make sure that the URL's right.
[01:47:26] Yeah, undefined. Beautiful. Yeah, we found a problem.
[01:47:32] Yeah.
[01:47:36] Why is it undefined?  Because it should be top.
[01:47:42] And then it should be--
[01:47:48] Oh, right, okay. Yeah, this is -- I apologize. This is because the --
[01:47:56] Yeah.
[01:47:56] Other router, I think.
[01:48:00] It maps it to params directly and doesn't use name params.  I've never seen that yet.
[01:48:05] Thank you.
[01:48:06] Thank you.
[01:48:07] Thank you.
[01:48:08] Sorry about that. Here we go.
[01:48:15] Okay. Okay. So...
[01:48:19] Actually, what I'm going to do
[01:48:22] I'm pretty sure this all works.
[01:48:24] So I'm going to go back to here.  Make this prams.stories.
[01:48:32] Um...
[01:48:35] And then change the API, make sure the API is still there.
[01:48:39] Thank you.
[01:48:41] Thank you.
[01:48:47] Beautiful, okay. Looks good.
[01:48:50] I don't want to see my console logs.  I'm not-- oh, yeah, there it is.  Yeah, OK.
[01:48:54] Yeah, so that was just...
[01:48:57] Thank you.
[01:48:59] Selt app router is
[01:49:01] weird and it doesn't follow conventions and it was unpleasant to use. This on the other hand is actually quite nice. So, yeah, this was just a small little mishap. Okay, so we now have our loading page. Yay.
[01:49:15] Okay.
[01:49:16] and it navigates.
[01:49:19] And we go to the new page.
[01:49:23] Thank you.
[01:49:24] Thank you.
[01:49:24] Done, done, done. Okay, okay. Sweet. Okay.
[01:49:28] Um,
[01:49:29] This should only take a minute to finish the rest of the function. I want to play with a couple of things here.
[01:49:36] The server loading thing might actually be interesting to look at, but I also want to look at static routes.
[01:49:42] And what that looks like, I think that's kind of interesting.  But before we do that, actually, I don't know why I stopped it.  Let's just finish the rest of the app, because the rest of the app  is going to be relatively simple by comparison once we know  what the pattern is.  This is the most--
[01:49:56] complicated of the bunch.
[01:49:58] And yeah, it just wires in beautifully.  You just go, here is my props.  Here is this.  Yeah.  This is a nice pattern.
[01:50:08] And then, oh yeah, we are missing one thing.
[01:50:14] Loading state.
[01:50:17] Um...
[01:50:19] How do we get loading state?
[01:50:24] And do, do, do, do, do.
[01:50:28] Yeah, yeah, yeah, props. Okay.
[01:50:33] I want to--
[01:50:35] *Grunting*
[01:50:37] -
[01:50:38] There's got to be some placeholder thing while it's loading.
[01:50:57] Thank you.
[01:50:57] - Oh.
[01:51:03] Thank you.
[01:51:04] Thank you.
[01:51:05] Sorry, is this a suggestion for an area of the docs I need to look at?
[01:51:10] Thank you.
[01:51:11] Navigating.
[01:51:15] Packaging.
[01:51:18] Okay.
[01:51:22] Thank you.
[01:51:23] - -
[01:51:25] .
[01:51:26] - Yeah, but it's, if it works the way I understand,
[01:51:33] and let's actually look at the network  and actually confirm this, what it'll do,
[01:51:37] is -- and this is actually for people using SolidStart, this is actually how our route data works, is what it will do if we can look at just the XHR. When you load the page, you're not going to see anything because it loads it on the server and feeds the data in. But when I go to the next page now, it's going to make a client-side request. The code is isomorphic. It works on both sides. So,
[01:51:59] you could still want a loading state
[01:52:02] between this navigation, like some kind of pending indicator that, hey, this data for the next page is loading, right?
[01:52:09] Um...
[01:52:11] So,
[01:52:14] All right.
[01:52:15] So yeah, I don't know. If I don't find it right now, I'm not going to stress on it.
[01:52:21] Thank you.
[01:52:23] OK, yeah, so that is a hint, is navigating.  Let's try that.
[01:52:28] Isnav? No.
[01:52:31] Navigating.
[01:52:36] Uh...
[01:52:40] Thank you.
[01:52:41] It's a readable store.
[01:52:45] Thank you.
[01:52:46] Bye.
[01:52:48] Where?
[01:52:50] Okay. Yeah. So it's like the global is pending thing. So essentially,
[01:52:56] Gotcha.
[01:52:59] And
[01:53:05] uh,
[01:53:07] Not here.
[01:53:08] here.
[01:53:12] Navigating.
[01:53:14] So I should be using it with a dollar sign preceding it.
[01:53:23] Bye.
[01:53:24] should actually be-- I think it's in here.  It's like if--
[01:53:32] Okay.
[01:53:32] I'm navigating.
[01:53:35] And then
[01:53:38] Do all of this.
[01:53:41] Thank you.
[01:53:44] Thank you.
[01:53:46] Yeah.
[01:53:47] And then, that's it. Else.
[01:53:55] That's probably...
[01:53:57] And this one.
[01:53:59] Right out of here.
[01:54:04] Thank you.
[01:54:07] Thank you.
[01:54:11] All right.
[01:54:14] And--
[01:54:16] Forever loading.
[01:54:19] Okay, I'm not using this right.
[01:54:22] Navigating...
[01:54:26] Thank you.
[01:54:27] Bye.
[01:54:34] It's always true.
[01:54:39] What am I doing wrong?
[01:54:44] Thank you.
[01:54:45] Do I not need to use it like that inside the template?
[01:54:50] Okay, I don't need to use it that way inside the template. Okay.
[01:54:54] Interesting. Usually with Svelte stores, you put the dollar sign on them, but I guess
[01:55:01] Maybe it's where you use it. I have to submit. I've only really used them mostly like top level to feed into local state and I haven't used them directly in tablets before. So, okay, beautiful. So when we load.
[01:55:12] Oh, right, not streaming rendering, sorry.  But when we navigate...
[01:55:17] to a new page that we haven't seen before. Maybe we can see it.
[01:55:20] You know what, it probably happens so fast, we can't even see the loading state.
[01:55:25] Maybe it was all for nothing. Or maybe that just didn't work at all.
[01:55:29] And it's never navigating.
[01:55:32] Not a big enough deal.  I'm just going to pretend this is the right pattern.  And we'll kind of go from there.  I'm going to assume that it's working.  So let's just put in the next bit of functionality  from our app, which is porting--
[01:55:48] These two. Over.
[01:55:52] Thank you.
[01:55:53] Thank you.
[01:55:56] All right.
[01:56:03] Thank you.
[01:56:03] Thank you.
[01:56:05] Oh, yeah, sorry.
[01:56:09] Hmm.
[01:56:14] Oh, we're back to here again. Now we want the dollar sign.
[01:56:24] That makes sense. Okay.
[01:56:28] There we go. I had it backwards in the logic. See?
[01:56:32] There we go.
[01:56:34] I'm not saying this is a great experience here.  This is a terrible UI.  Like you'd have better loading states and timers.  But it's illustrative, which is the point.
[01:56:43] See, refresh, you don't see it because it's async rendered, not streamed. But as you move, you can see the loading state. Okay, good enough for me. Okay, thank you. Thank you, Adrian.
[01:56:52] Thank you.
[01:56:53] This is just silliness on my part. I obviously know the syntax and stuff, but it's easy to get hung up on the details. I haven't done much svelte recently. Okay, so sweet. Yeah, so then let's continue here. So
[01:57:07] users,
[01:57:09] Yeah, what's nice about this little thing here is, you can see how I already had the  script line.  This is one of the cool things, right?
[01:57:19] The reason I like the data approach over the loader approach sometimes is when you have  these apps that you built using CSR and you just want to move them to SvelteKit, you just  go like this.  You can almost take your script tag that does the data fetching.  You might have to break it in half, but you can almost take your script tag that does  the data fetching and --
[01:57:43] and kind of just port it over, essentially.  Because we should really just copy the same pattern here, right?  Export.  Export.
[01:57:51] This.
[01:57:54] And then...
[01:57:57] -
[01:58:01] Yes.
[01:58:02] And
[01:58:03] Need...
[01:58:06] Thank you.
[01:58:07] And then it should be as simple as what, const await.
[01:58:13] What are we calling this? This is a user. User equals that. And then
[01:58:20] It should be very similar logic like this.
[01:58:27] Thank you.
[01:58:30] And then if user return
[01:58:34] user--
[01:58:36] Let's give it a 404.  And then...
[01:58:41] Add a full script tag.
[01:58:45] Yeah.
[01:58:45] Uh,
[01:58:47] Or let user.
[01:58:53] And then instead of this await,
[01:58:56] It becomes if...
[01:59:02] Navigate if I'm navigating.
[01:59:09] You automatically imported. Else.
[01:59:13] Don't need this user here.
[01:59:16] And then...
[01:59:19] This becomes a slash.
[01:59:22] And if we just did our work properly here,
[01:59:27] We should have the user page.
[01:59:30] Like that, yeah, easy.  That's-- yeah, OK, sweet.  Let's do the last page.  It'll only take a second here.  But yeah, very, very straightforward at this point  of how this works.
[01:59:47] They must be so happy to have a good router now.
[01:59:52] Bye.
[01:59:54] Bye.
[01:59:55] Really interesting choice to make hatch routing your default approach.
[02:00:00] So let's do this for my city.
[02:00:05] It's easier to just copy this boilerplate, actually,  rather than port it.
[02:00:11] It's exactly the same thing.
[02:00:14] Fetch API.
[02:00:18] Don't mute here.
[02:00:20] Manage a big user, we're getting a...
[02:00:24] item.
[02:00:27] I call it item. I call it story.
[02:00:32] I'm going to go
[02:00:34] Let's change this to story.
[02:00:37] Story, story, and then...
[02:00:44] Read this. Story.
[02:00:49] And then--
[02:00:51] Yes.
[02:00:54] It's a snacking.
[02:01:02] Thank you.
[02:01:05] Thank you.
[02:01:10] Yeah.
[02:01:11] OK, I just made one small--
[02:01:16] The stick here.  I have too many script tags.  That's funny.
[02:01:21] I'm going to go.
[02:01:25] Okay.
[02:01:28] Okay.
[02:01:34] Stop.
[02:01:36] Is this formatted? Can't even tell. Okay, whatever. Looks good.
[02:01:41] Thank you.
[02:01:46] Oh, bad path.
[02:01:48] on here because I didn't update it to our new $lib.
[02:01:58] I guess comment has that stupid rudder.  Yes.  Sorry.  The rudder wasn't that stupid.  It's just I knew that this was going to be where--
[02:02:08] I had to do the most fun stuff.
[02:02:12] Oops.
[02:02:16] Sorry, that's solid JS. I missed porting that properly from solid. It's pretty clear.
[02:02:24] Class list.
[02:02:28] Yeah.
[02:02:30] Thank you.
[02:02:31] What is it?  Class--
[02:02:35] Maybe like if open...
[02:02:42] uh
[02:02:44] Okay.
[02:02:46] Thank you.
[02:02:47] I don't know what this is doing.
[02:02:51] Let's just not do this.
[02:02:56] Thank you.
[02:03:01] Yeah, this is probably bad accessibility, but I didn't make this demo.
[02:03:09] is actually, you can blame Vue.
[02:03:13] This is an old demo that I've been using over and over again.
[02:03:18] Thanks.
[02:03:22] Beautiful. And then collapsible. Okay, cool.
[02:03:26] All right, so now we have...
[02:03:30] Thank you.
[02:03:31] Oh, yeah, of course. Yeah, yeah, yeah. Yes. Yes. Have this hand and solid as well.
[02:03:42] So,
[02:03:45] advertise it.  It's what classless compiles to under the hood  into a namespace class thing.  Most people don't know about that.
[02:03:55] Thank you.
[02:03:56] Okay.
[02:03:57] Beautiful, okay. So I think we have a working Hacker News demo. So the next thing I want to do
[02:04:07] There's a couple of ways we take this,  but what I wanted to look at next, there's two places.  We can look at some of the features  and see what else we can do here.  I also kinda wanna look on deployment too.  I think I wanna do deployment first,  and then as we go, see what we,  like leave the advanced features to last.  I wanna put the adapters here,  'cause that's one of the coolest things about Focke.  So let's see what the docs say about adapters,  but let's get this demo up on Cloudflare.
[02:04:34] You know, that's what I like doing.  So let's do that.
[02:04:40] - Adapter.
[02:04:45] I know they have a workers adapter because I copied it.
[02:04:50] Thank you.
[02:04:51] Thank you.
[02:04:53] Okay, I didn't mean to be that.
[02:04:57] What?
[02:05:01] Okay.
[02:05:03] Thank you.
[02:05:08] .
[02:05:09] Bye.
[02:05:09] What?
[02:05:10] Thank you.
[02:05:14] Okay. Actually, maybe I will go here. They probably have the instructions right here.
[02:05:21] I'm going to use workers for now because it's probably...
[02:05:25] Yeah.
[02:05:27] It's probably... It's more...
[02:05:29] Well, I guess I can use either or it just it will make it the same as my other demos so that we use workers.
[02:05:36] Although technically it's a Pages app with a workers integration. So I guess it's like kind of the same thing.
[02:05:44] Okay, let's do it.
[02:05:48] Thank you.
[02:05:54] .
[02:05:56] *laughs*
[02:05:58] So config.
[02:06:01] I doubt I'm going to do this whole thing like that.
[02:06:04] Here
[02:06:08] Thank you.
[02:06:09] -- replace this one with this one.
[02:06:12] And then--
[02:06:15] Adapter, adapter.
[02:06:21] I don't think we need this.
[02:06:23] Thank you.
[02:06:27] Okay.
[02:06:28] Okay.
[02:06:30] What?
[02:06:34] don't need travel objects
[02:06:37] Thanks.
[02:06:39] I think--
[02:06:42] They don't mention the WranglerTomo. I can just copy one over.
[02:06:48] but they don't mention it.
[02:06:49] Thank you.
[02:06:50] Thank you.
[02:06:53] Okay.  I'm...
[02:06:56] Let's see how magic this is.  But I feel like I'm missing something.  OK, mpm run build.
[02:07:04] Okay, I complained about something, but I'm gathering it's just the thing I complained about before. Yeah.
[02:07:11] this anchor tag not having an href.
[02:07:15] OK, so--
[02:07:18] Nice.
[02:07:21] Very nice. Okay, cool.
[02:07:24] npm run preview.
[02:07:27] Pfff.
[02:07:28] Let's use Wrangler in the background.
[02:07:32] Oh.
[02:07:36] Sorry, it's the same API error we were having before, which is why I thought it was funny.
[02:07:43] like the JSON thing.
[02:07:47] um
[02:07:48] But I don't know what it's previewing it on.
[02:07:54] Sanity check that we didn't break the universe again.
[02:07:57] Everything's fine. Okay, so
[02:08:01] is preview doing, let's look at, I guess I won't know,  'cause preview is gonna call whatever preview,  SvelteKit preview does, and the SvelteKit preview  is gonna feed it out to the,
[02:08:17] is going to feed it into the adapter. I've looked at this code before in the past. Some  conversation in the chat. What we got here, Cosby pages is nice. Yes.
[02:08:31] Um...
[02:08:33] You're welcome. Use workers on the hood, yeah. I used to use Vercels. Is there any improvement of those? I've noticed that Vercel has slight latency over the underlying workers implementation. It's not a big deal, but my same pages deploy the CloudFlare edge are slightly faster than Vercel edge. I don't know exactly why, but it's minuscule, but I noticed it.
[02:08:56] But yeah, Vercel's edge is actually literally using Cloudflare workers under the hood.
[02:09:01] Thank you.
[02:09:02] They also have functions which aren't using the edge, but the whole new middleware stuff and the deploy that I do with Solid is literally Cloudflare.
[02:09:13] Yeah, I mean, I can look at what it's doing.
[02:09:17] Okay, let's pretend this works.
[02:09:22] Thank you.
[02:09:22] Thank you.
[02:09:23] What's our instructions for deploying it?
[02:09:31] Thank you.
[02:09:32] Thank you.
[02:09:33] Okay.
[02:09:35] Bye.
[02:09:37] Okay, yeah, like –
[02:09:40] Like, I...
[02:09:46] I've never used pages, but if I go Wrangler depth, it's going to tell me that I don't  have a Wrangler file, right?
[02:09:54] Vercel does use AWS Lambda for everything except for their new edge functions.
[02:10:06] So most people haven't used the new edge functions.  They announced them and they announced a Next.js demo at the same time.  And I just assumed that they were like, oh, server components on the edge doing streaming.  But no, Next.js...
[02:10:19] He's over here.
[02:10:20] like most of it and they can do some middleware in the edge as they did in a  demo, like doing some like routing stuff. And then like,  like the main next apps are getting deployed to serverless functions or  whatever other infrastructure they have. So, um,
[02:10:34] I think Solid was the first to do streaming full app from the Edge over cell. So I'll start. But OK, so OK, let's I'm just going to steal my Wrangler Tomo from one of my other apps because it's just going to be like almost the same thing. Just do this.
[02:10:55] Okay.
[02:10:57] And
[02:11:01] If this doesn't work, we'll just use the other adapter.  I don't know anything about pages.
[02:11:08] unfortunately, but weirdest thing is
[02:11:12] Um...
[02:11:14] Thank you.
[02:11:15] Mm-hmm.
[02:11:19] Like, I don't know if any of these settings are right.  Do you know what I mean?
[02:11:25] Like,
[02:11:25] I don't know.
[02:11:27] They don't tell you to configure a Wrangler TOML, but then they say use Wrangler to test it locally.
[02:11:33] But when you try and use Wrangler to test it locally, it complains. So it's like,
[02:11:38] Okay, please, you know what?
[02:11:40] Thank you.
[02:11:44] They gave me the instructions. I'm just not following the instructions.
[02:11:49] Thank you.
[02:11:51] .
[02:11:53] Thank you.
[02:11:54] Amen.
[02:11:56] Bye.
[02:11:57] Yeah.
[02:11:59] Yeah.
[02:12:00] This is probably what they went with pages.  It just makes life a little bit easier.
[02:12:07] Right? Exactly. I don't need the Wrangler file if I use Pages, which I'm used to using workers directly. But the thing is, I'm still missing something here because if I try and use Wrangler locally without the Tommel file, it errors at me. So like, there's something I have to do.
[02:12:25] Right. Because I do have adapter
[02:12:29] Cloudflare installed.  Where is it?
[02:12:33] Yeah, I didn't grab the workers one.  And they did say, oh, to test it, just use Wrangler.  So I'm missing something local here.
[02:12:45] Let's see, build output.
[02:12:48] Thank you.
[02:12:54] Thank you.
[02:12:57] Given that all these are around adapter Cloudflare,
[02:13:02] Because I don't...
[02:13:04] Is adapter work, just because my familiarity with workers is tempting for me to go this way.
[02:13:14] Yeah, yeah.  See, if I go this way, it's just going to work for me.  Yeah, I'm very, very tempted.
[02:13:19] Yeah, I'm going workers just because I've done workers like a
[02:13:23] billion times.  So let's just do workers.  And then I can just grab my toml file,  and I know how everything works.
[02:13:31] Um...
[02:13:33] Let's do this.
[02:13:37] Thank you.
[02:13:42] Thank you.
[02:13:44] Thank you.
[02:13:45] I know WorkCruz is considered a less nice interface and stuff, but I am pretty used to it at this point.
[02:13:58] Thank you.
[02:14:00] .
[02:14:02] We just need to know where --
[02:14:11] the config is here.
[02:14:14] Thank you.
[02:14:15] This is the important part.
[02:14:22] Thank you.
[02:14:25] Okay.
[02:14:27] See where that is?  OK, it's not in build.  It's top level.  But where's-- so they don't use--  OK, it's a different version of the site config,  but it's the same idea.
[02:14:39] Mm-hmm.
[02:14:42] Beautiful.
[02:14:47] Angular dev.
[02:14:51] Interesting.
[02:14:56] Interesting.  I wonder if this is a newer version.
[02:15:02] So I think
[02:15:05] Thank you.
[02:15:06] Thank you.
[02:15:07] Thank you.
[02:15:08] Huh.
[02:15:10] Cannot download cargo generate failed to download from
[02:15:15] That's interesting.
[02:15:18] Thank you.
[02:15:19] Thank you.
[02:15:20] you
[02:15:25] I've never had that happen.
[02:15:29] Thank you.
[02:15:30] Thank you.
[02:15:32] Thank you.
[02:15:33] Thank you.
[02:15:37] Thank you.
[02:15:39] Thank you.
[02:15:40] Thank you.
[02:15:41] the book
[02:15:43] Thank you.
[02:15:43] Thank you.
[02:15:46] Thank you.
[02:15:47] Thank you.
[02:15:49] Okay.
[02:15:51] What-- we said we had to install an ad next of what, specifically?
[02:16:01] Thank you.
[02:16:02] Yeah.
[02:16:03] I mean, we can go back to the other one.  The worker setup is...
[02:16:08] basically just use the toml file and you're good to go. But I wonder
[02:16:13] Thank you.
[02:16:13] I wonder why this is-- the problem is this stuff's been  getting updated pretty rapidly as well.
[02:16:25] Thank you.
[02:16:26] Thank you.
[02:16:28] Because...
[02:16:31] Mm-hmm.
[02:16:32] I can tell already that the format here is slightly different, right? Because it's a build worker site.
[02:16:42] You can see like
[02:16:45] Thank you.
[02:16:47] This format is different than this format.  I wonder if what's happened here--
[02:16:54] is like
[02:16:56] older versions.
[02:17:00] Yeah, all the adapters have to be on next. That's just how they do everything. It's more of -- I actually think maybe the worker -- like maybe there's a mismatch.
[02:17:13] I'm going to move.
[02:17:15] oh
[02:17:19] Maybe I'm on an old version of a Wrangler.  Like, I don't...
[02:17:23] I have Wrangler 1.1.
[02:17:26] 15 right now.
[02:17:29] Thank you.
[02:17:32] Thank you.
[02:17:33] Thank you.
[02:17:33] Thank you.
[02:17:35] Thank you.
[02:17:39] Yeah.
[02:17:40] I mean, backfire completely. You can update the latest and now nothing else works except  for this. But let's do that.
[02:17:50] Thank you.
[02:17:51] Yeah, I have one 15 installed. I don't know if that's the latest. I guess we're going to find out.
[02:17:56] Thank you.
[02:17:58] 115.
[02:18:02] Sorry, I hit the same command again. I didn't mean to.
[02:18:10] Um...
[02:18:21] That's weird. Okay. Let's try it a different way. I was hoping workers would just work because literally I just have it here. Now we get to go through the...
[02:18:34] the non-CLI way.
[02:18:38] Let's go back to doing the recommended approach of doing this.  Let's do pages.
[02:18:45] Thank you.
[02:18:50] And let's follow the next instructions to do pages.
[02:18:57] Thank you.
[02:18:57] Thank you.
[02:18:58] Okay.
[02:19:00] Thank you.
[02:19:01] Peace.
[02:19:02] Thank you.
[02:19:03] Mm-hmm.
[02:19:07] Mm-hmm.
[02:19:08] Thank you.
[02:19:09] Thank you.
[02:19:10] Thank you.
[02:19:12] Yeah.
[02:19:13] Thank you.
[02:19:14] Thank you.
[02:19:18] Thank you.
[02:19:20] All right.
[02:19:22] Oh, I see.
[02:19:28] Okay, then I'm going to have to actually initialize this. I see. So it's like that.
[02:19:35] That's the missing piece.
[02:19:37] Thank you.
[02:19:38] Thank you.
[02:19:41] Okay, so let's get this repo up.
[02:19:45] Thank you.
[02:19:45] Thank you.
[02:19:47] *clap*
[02:19:51] Hmm.  Probably people in-- what do you want to call this?
[02:19:58] Thank you.
[02:19:59] Svelte Hacker News.
[02:20:02] Yeah.
[02:20:03] - Seltkit Hacker News.
[02:20:09] Thank you.
[02:20:11] uh
[02:20:14] Thank you.
[02:20:15] Mm-hmm.
[02:20:19] Thank you.
[02:20:21] I'm so lazy.
[02:20:26] Oh, is there-- yeah, he's got to be getting more in here.  Thank god.  OK.
[02:20:32] Thank you.
[02:20:33] Literally not even going to write my own commit messages.
[02:20:37] Thank you.
[02:20:43] Oh, my bad.
[02:20:48] Thank you.
[02:20:49] Thank you.
[02:20:56] All right.
[02:20:59] Thank you.
[02:21:05] Thank you.
[02:21:06] Okay. Okay, cool. Now we have a repo.
[02:21:13] Now, what are we going to do?
[02:21:19] Thank you.
[02:21:21] Count home, go pages, create a project. Okay. Create a project.
[02:21:25] Connect to GitHub.
[02:21:29] Right. So...
[02:21:33] Sure.
[02:21:36] Thank you.
[02:21:38] I feel like maybe I should do some of this stuff off screen.
[02:21:43] Thank you.
[02:21:44] When they show you guys I don't remember my password.
[02:21:50] OK, we're in.
[02:21:58] Let's file the Hacker News.
[02:22:00] Thank you.
[02:22:01] Begin setup.
[02:22:05] All right.
[02:22:06] Thank you.
[02:22:07] Thank you.
[02:22:08] Thank you.
[02:22:10] No.
[02:22:11] I need to get solid on this list.
[02:22:13] Thank you.
[02:22:14] Is the remix on here yet?
[02:22:19] No.
[02:22:21] Hold on, it is.
[02:22:23] Thank you.
[02:22:24] Okay, I got some work to do, okay.
[02:22:28] Is there anything special on the config side?  I'm gathering most of the defaults would be good.
[02:22:31] Yeah, they don't say anything.
[02:22:35] Thank you.
[02:22:36] Thank you.
[02:22:38] Thank you.
[02:22:40] Thank you.
[02:22:43] Thank you.
[02:22:45] Amen.
[02:22:45] Thank you.
[02:22:47] Thank you.
[02:22:49] Thank you.
[02:22:54] Thank you.
[02:22:55] I got it.  Let's kill.  They don't--
[02:22:59] Mm-hmm.
[02:23:00] These guys don't...
[02:23:05] Thank you.
[02:23:07] Oh, weird, framework preset and none.
[02:23:12] That's
[02:23:13] Interesting.
[02:23:15] I wonder if that's out of date.
[02:23:18] Thank you.
[02:23:20] This looks right.
[02:23:24] I feel like some stuff has moved since then.  Environment variables?
[02:23:31] Thank you.
[02:23:32] Thank you.
[02:23:34] SDNode 16.
[02:23:36] Yeah.
[02:23:37] Thank you.
[02:23:40] Node version, OK.  Node version 16.
[02:23:48] Anything else?
[02:23:52] Thank you.
[02:23:53] Thank you.
[02:23:55] Thank you.
[02:23:55] Thank you.
[02:24:00] I don't know what they're talking about.
[02:24:05] But let's just continue from here. This looks good.
[02:24:11] Thank you.
[02:24:16] Thank you.
[02:24:17] Thank you.
[02:24:18] Thank you.
[02:24:19] Yeah, that's true. When Luke Edwards works on your team, it's kind of cool, right? Because he works at Cloudflare and he's one of the main contributors to SaltKit.
[02:24:33] Yeah, we're all good.
[02:24:35] Thank you.
[02:24:41] Thank you.
[02:24:50] Thank you.
[02:24:52] Thank you.
[02:24:53] Yeah, people have asked me to add pages to Solistar. I only have workers so far, but it seems like it won't be too far of a stretch.
[02:25:01] It's cool because it uses this functions thing,  and it's very similar to what we're doing with  a new file system API, I imagine.
[02:25:07] OK, continue to project.
[02:25:12] PagesDev.
[02:25:15] Thank you.
[02:25:16] Nice.
[02:25:18] Nice.
[02:25:20] Nice. Okay. Okay. This is the fun part.
[02:25:24] Thank you.
[02:25:25] Yeah.
[02:25:27] Thank you.
[02:25:28] Thank you.
[02:25:28] Sorry, I'm not sure. This is felt right here.
[02:25:33] But,
[02:25:38] But yeah, let's just see some stuff to understand what we're dealing with. What do we got?
[02:25:46] Interesting.
[02:25:49] So this is bigger than I expected.
[02:25:52] Is it loading?
[02:25:54] Do you have to do something to tell SvelteKit to lazy load the other routes?
[02:25:59] Thank you.
[02:26:00] No, it is lazy loading the other routes. Okay, so that's not it.
[02:26:04] Okay, so this is just the payload size.
[02:26:06] I wonder why this is bigger than I was expecting.
[02:26:10] Huh.
[02:26:11] I mean,
[02:26:14] Okay.
[02:26:17] Well, OK, 19.7 kilobytes.
[02:26:21] Thank you.
[02:26:22] I mean,
[02:26:23] Okay. That's not bad. I mean, it's -- I've been competing with this HN --
[02:26:29] Svelte dev hacker news, which is not equivalent to my hacker news demo, but I've been like
[02:26:36] What?
[02:26:37] Oh.
[02:26:38] It's 19.52. What?
[02:26:42] Okay.
[02:26:43] All right.
[02:26:45] Thank you.
[02:26:47] 14.1. When did Soli get five kilobytes smaller than Svelte?
[02:26:52] I'll take it.
[02:26:56] Okay, sweet.
[02:26:57] Um,
[02:26:59] OK, let's let's
[02:27:01] Let's look at
[02:27:04] Let's look at some stuff here now.  So now that we got this, I'm going to switch to an incognito window.
[02:27:10] Because...
[02:27:11] I like looking at loading profiles and stuff.  It's just interesting.  Who do we want to look at?  I have every hack in this demo.  Svelte.
[02:27:22] Solid.
[02:27:27] Bye.
[02:27:28] Remix.
[02:27:32] I should get a new React color.
[02:27:41] Who else? Yeah. So we got Svelte, Solid, React, and Marco.
[02:27:46] Um,
[02:27:48] Okay.
[02:27:50] Thank you.
[02:27:51] Yeah, I got to change the solid or the-- this is solid blue.  I need to get the React blue.  Then we can have a nice little setup here.  Yeah, actually, I'm not too worried about the other ones.  What I am interested in is that I want  to see what the loading profile is.
[02:28:06] when we look at this.  So let's do a quick page load and take a look here.
[02:28:11] Okay. Yeah, so...
[02:28:16] Very nice.
[02:28:18] 538 at blocking render, which pushes the first paint back. 942, that's not good. Let's try that again. I don't think that was accurate. Let's try that again. Okay.
[02:28:27] Better.  There we go.  Yeah, 497.  This is what I'd kind of expect.  With the page loading, blocking, async.  And if we look here, we go to Remix.
[02:28:36] I think we're going to see
[02:28:38] basically the same characteristic.
[02:28:42] Yeah, right. We, that was a, let's get,
[02:28:45] Let's give Remix another shot. No, that's not good. Let's try Remix one more time. We'll get there.
[02:28:52] Yeah.
[02:28:53] Beautiful, okay, yeah. So this is kind of thing, right? But 414, first paint coming in at about 527. First paint coming in, 497. It's the same kind of thing, right?  The biggest challenge here, and then it finishes its longest contentful paint around 497, because it all comes in the same time. And our friendly page load is at 593. With Remix, it's...
[02:29:17] A bit longer.
[02:29:19] Why is it so long?
[02:29:21] Thank you.
[02:29:22] - Hmm, that's a good question.  It's probably, I wonder, let's look at execution.
[02:29:27] Ah, why is hydration pushed back so far here? That's weird. Why are these taking so long?
[02:29:33] That is very strange.  OK, let's give Remix one more shot.
[02:29:39] I don't know what's going on there. No, come on.
[02:29:46] Okay, still, it's the timing of when...
[02:29:51] You know what it is?
[02:29:53] This JavaScript file,
[02:29:56] The main entry is just so much
[02:29:58] bigger, right?
[02:30:00] I think that's what we're seeing here.  It paints about the same time,  but over the network, Remix is sending 62.7 kilobytes of JavaScript,  where Svelte is sending...
[02:30:11] Um...
[02:30:13] Yeah.
[02:30:13] 20 kilobytes or whatever, right?
[02:30:17] And just while we're at this,  let's load solid in here too.
[02:30:24] Let's see here.
[02:30:25] performance. Let's just do this.
[02:30:29] That was not a fast one. Let's try that again.
[02:30:34] Thank you.
[02:30:37] Okay. First paint for solid is at...
[02:30:42] 182 milliseconds, and then it's done at 452.
[02:30:48] When's this will finish up?  4:52, yeah.  So yeah, yeah.  It's because with streaming, it responds right away.
[02:30:57] while the other ones are waiting for the data to load.  And then we get the first paint, which in this case is nothing.  It's just a silly navigation bar with the loading indicator.  But then the data loads.
[02:31:07] And then the page is still loading, which is what you see in the background. And then the largest  Contentful paint and stuff comes in at 452. And because everything gets pushed forward like this,  and all the resources start loading that much earlier than in here, see how it has like wait  for the whole page? Or here, waiting for the whole page. It just means that the whole thing just loads
[02:31:37] see what we're dealing with.  This is probably-- this is just not even fair, right?  Do Marco.
[02:31:44] First paint.
[02:31:46] OK, that was not good.  Let's try one more.
[02:31:49] You got to give them all the warm up run, apparently.  I don't know why.  The cache is disabled, so it's not like this is leveraging  the cache at all, if people are thinking that.  It's just-- I don't know what's going on.
[02:32:00] But yeah, okay, so what we get, we get first paint here, the Marco 1 287, and then it's done at 416. So it's even faster than solid 430. Yeah, so yeah, it's kind of interesting, different characteristics of loading, the difference of what streaming makes, you know, solid Marco with streaming, react, remix, and salt without.
[02:32:30] and we run this again. I think you're going to see all of these are going to perform very similar.  What have we got here? First paint at 1284 and
[02:32:40] Largest content full paint at 1284. And when are we done?
[02:32:44] I can't see it.
[02:32:47] Did I interrupt it?  Oh, it's because it's like loading stuff.  Yeah, so let's say 1284.  Let's do Fast 3G.
[02:32:56] :
[02:32:58] What's this one?
[02:33:00] 12:59.
[02:33:04] Okay.
[02:33:05] Thank you.
[02:33:05] Thank you.
[02:33:07] Thank you.
[02:33:08] Remix.
[02:33:12] Yeah, I think I'm cutting it off too soon because we don't see the hydration cost remix hasn't hydrated by this point
[02:33:19] Thank you.
[02:33:19] 1218. So Remix has a faster paint for async than the others. And then
[02:33:25] when you're under slower network, but it's the slowest when you're on a fast network.
[02:33:30] And then Marco
[02:33:32] 1250. Yeah, so they're all within, even on slow network, they're all within like 30 milliseconds of each other. So it's pretty good. Marco's just dehydrated like immediately though because of the side. Let's just run this through page and speed insights and then we can kind of move on.
[02:33:46] Thank you.
[02:33:48] -
[02:33:49] Do I have a Vue 3.1? No, I have a Vue 2.1 because I copied off Vue 2.1. But I don't trust the Vue 2.1 because it's not using any of the optimizations and parallelized data fetching type stuff.
[02:34:03] Thank you.
[02:34:05] So, yeah, let's just use PageSpeed Insights and give these a whirl. I'm interested to see how --
[02:34:20] how hard work goes here.
[02:34:26] All right.
[02:34:27] Thank you.
[02:34:28] All right.
[02:34:29] 100, unsurprising. Yeah, good numbers. .9.9, one 10 millisecond blocking.
[02:34:37] Yeah, no.
[02:34:38] That's nice.
[02:34:39] Ryan, I'll grab the remix one too while we're here.
[02:34:44] Yeah, it's pretty good.  Sometimes I don't know what the speed index is.  It's confusing.  Like there's nothing here that would make you think that this  is slow.  And you can see that it is taking this thing.  But these numbers are good.  0.9s are where you want to be.  And interactive is really fast.  I think that's really quite good.
[02:35:02] I think Solid needs to do a little bit work on our hydration  performance, actually.
[02:35:08] Let's do Remix here.
[02:35:14] Thank you.
[02:35:15] Thank you.
[02:35:22] Remix won't get 100, but you guys are talking about React hacks.
[02:35:28] Thank you.
[02:35:31] - Yeah.
[02:35:34] yeah  there's just
[02:35:36] Yeah. And in this case, architecturally, Remix and SaltKit are actually identical. They're both doing async block to render and they're doing parallelized data fetching and stuff. So I, yeah, this is basically just React tax is what you're saying, because they're on the same infrastructure with the same stuff.
[02:36:06] the MPA that does partial hydration is going to be the winner, which is not solid, which is Marco. But
[02:36:13] Yeah, I think our hydration could use some work.  Yeah, right?
[02:36:18] SvelteKit actually came out ahead on this run in the past. But you see this?
[02:36:26] It loaded faster.  So I don't know how they're determining this thing.
[02:36:32] I'm going to run it one more time just because I can, because those numbers are actually
[02:36:38] larger than normal. But
[02:36:41] Yeah, sometimes that's what he gets. Yeah. So all 1.1s.
[02:36:46] right? So, yeah, I don't know. Let's run -- let's run -- let's run --
[02:36:53] Marco, I think there is something I've noticed with PageSpeed Insights, and I'll show you again when we get back to here.
[02:37:02] Let's see, because you've seen solid get 0.8s for the exact same page previously.  See, like this, like Marcos, 0.8, 0.8, 0.8.
[02:37:11] Um,
[02:37:12] *Muuh*
[02:37:14] Let's-- I'm just going to grab this one one more time.  And see-- let me grab this felt one again.  And see how consistent these results are with the others.  Because I ran a couple of the others a couple of times.
[02:37:27] So let's just kind of look here.
[02:37:29] See, this time it's 1.1 across the board for Svelte.  So yeah, I don't know how much--  I think there's a bit of variety on runs here,  because we got 0.9 the first time.
[02:37:38] Um,
[02:37:40] Bye.
[02:37:41] Yeah, so now it's all .1, .2.  So let's give Remix one last shot, too.  Because I think the thing is, what I've witnessed with PageSpeed is that occasionally,
[02:37:56] there's like the good run and then like all the rest of them kind of normalize at the same numbers.
[02:38:04] Yeah.  Remix is consistently at 1.2, though,  with the extra hydration costs.  The other ones-- none of the other ones have such a big hydration cost.  And that's really just React coming into play.
[02:38:17] Let's run Remix one more time.
[02:38:20] See?
[02:38:22] Now we've got 1.1. So again, hydration cost.  Like 300 milliseconds to hydrate.  So yeah, I mean, you can get 100 with Remix as well.  With the other ones, like I don't think we saw any of the other ones not get 100 on this demo.
[02:38:39] in any of the trials.
[02:38:45] Kind of like, give me the good run.
[02:38:50] Right, give me the good run.
[02:39:07] Sorry.
[02:39:11] I lost the stream for a second.  Hopefully everyone's still there.
[02:39:15] Thank you.
[02:39:15] - Yeah, side note,
[02:39:20] Um,
[02:39:22] Thank you.
[02:39:24] Yeah, we're not going to run with Sol today. It's fine.
[02:39:27] Marco is ahead of the others because of partial hydration. Remix, Svelkin and Solid are very much identical. And then Remix is a tiny bit slower because of things.
[02:39:42] Yeah, I mean, to be fair, they all work without hydration. I mean, you just like remove the script tag and it's like, you know,
[02:39:49] Svelkit was actually, this is a funny thing, it kind of gets buried, but Remix did their  beta demo where they showed the forms off for the first time and they did this really  cool beta reveal and it's one of my favorite things from a presentation where they were  like sitting there and you're doing a Remix app and you're building it and you're not even  paying attention and they're like, oh, JavaScript's been turned off the whole time. And it's
[02:40:14] And, uh, and you're just like, what? And it was an awesome demo. But the funny thing was, Rich Harris gave the same demo four days earlier at a Svelte conference using SvelteKit. Um, he didn't like, he didn't like, he didn't have the showmanship. Um,
[02:40:31] But he did basically the same progressive forms demo with the JavaScript turned off.  So the truth matters.  This is a trick that every JavaScript framework has been able to do pretty much since the beginning of time.  Yeah.
[02:40:44] but people haven't been really focusing on it. You know, a lot of work on like, we want a mobile  thing. I'm glad the direction is heading this way and it's important for where things are going in  the future. I've talked about this in other streams, but I just wanted to kind of put it  out there. Like the, the state of the art today in terms of like,
[02:41:00] static routes. Well, actually, that kind of ties us into the next thing.  I want to know how smart static routes are. You know, I'm sorry, did I talk about this yet?
[02:41:12] Um,
[02:41:14] Vue 3.2 did have some really good client-side improvements.  And it's a funny one because the way they did it
[02:41:23] See, reactivity,
[02:41:24] I didn't talk about this earlier, and I wish I did,  because it makes sense more when we're talking about preact,  adding reactivity, and all that kind of stuff.  Reactivity and VDOM are naturally at odds with each other,  in that the way components break up.
[02:41:37] With a VDOM, you want really, really, really small components  as a unit of change.  But with reactivity,
[02:41:43] The smaller the moments of change are, the more overhead you have on subscriptions.  I know Solity is a granular approach, but we actually...
[02:41:52] kind of mess with the granularity and actually go less granular for certain things as a way of optimizing creation.  So,
[02:42:00] What I'm getting at is Vue has always been a puzzle to me because it's basically both sides of it are fighting with each other. It wants to do these fine grain updates because it's got that reactivity, but then it's got a VDOM that's punishing you for it. And what Vue 3.2 did, which was so clever, was...
[02:42:19] he let you keep the giant components, which are good for reactivity, and then Mark Dom
[02:42:27] or JSX nodes or template nodes as being static or like memoed as a way of preserving the granularity  that the VDOM wants. So it is a weird, it's like an optimization technique,  kind of similar to Inferno where you're doing these kind of
[02:42:42] like denoting stuff on the nodes.  It's kind of like a pro trick that's really useful,  you know, benchmarks and whatnot.  But it's really cool that they found a solution for it.  And that's the reason why if you go on the JS framework  benchmark now, Vue and Svelte are basically the same  performance.  He just did this little thing and he probably could have  done it ages ago, right from the beginning of Vue 3,  but now they actually have a way of doing it.
[02:43:04] It's very clever because it lets them
[02:43:07] mitigate that the inherent conflict of having a reactive system feeding into a VDOM. Vue's really  the only one that's kind of gotten to that level. I think we're going to see some reactive libraries  come in especially with the influence of the stuff we've been doing in solid into VDOM libraries and  people not realize that adding reactivity to your VDOM library while it's convenient actually slows  your library down. It's not just like makes it faster it's actually like it can it can make
[02:43:37] you needed to update, but it itself is an overhead.  Like if you just did that with React,
[02:43:42] built-in primitives yourself, then you'd actually have more performance than adding another library.
[02:43:47] Anyways, sort of tangent.
[02:43:49] Um...
[02:43:52] Yeah. So yeah.
[02:43:55] I don't have a Vue example.  Maybe one day.  Vue is the one that I have the hardest time with.  You see me on stream, I get really stuck with Vue.  Svelte, I can usually figure it out.  Vue kind of takes me back to like...
[02:44:08] Just not getting it today.  OK.  Views kind of takes me back to the early days of when I was doing web dev with Knockout.  And for some reason, certain parts of the patterns just aren't intuitive for me anymore.  I just have a hard time.  When I look at the docs, there's so many different ways to do stuff, I get confused.  Because it's tricky that way.  But this gets me to where I want it to actually go.  I just want to make sure I didn't miss anything.
[02:44:33] Yeah.
[02:44:36] Could it just be, yeah, I don't have context for this anymore. Generally though, it's cool. We all have the same API. What's cool about this test is all the same app, all the same APIs,
[02:44:46] deployed all in Cloudflare.  This is just like on the edge.  It's all like uniform.
[02:44:50] Anyways, what is it?
[02:44:55] OK, cool. So let's continue on for a minute here.  Let's see, we're at like over 2 and 1/2 hours. That's fine.
[02:45:04] What I want to know about is, you're probably wondering,
[02:45:07] Actually, OK.
[02:45:09] Yeah, I mean, I don't need it.  You're probably wondering how Marco is so fast.  And we covered that in previous streams.  And that's because--
[02:45:16] This page could be completely static.
[02:45:19] and it would still work.  Because if Marco does this automatically without you,  like the biggest difference with Marco,  and I've talked about this previously,
[02:45:28] is
[02:45:29] On a page like this, where there's 75 comments, and you have all this stuff, Marco can ship just the code for the component and not ship the rest of the data and stuff. And you have to see it. Basically, partial hydration is like Astro. It's the same kind of concept. It cuts pages down. But what I'm interested in is...
[02:45:46] How do static routes work?  I know Remix, you just remove the script tag,  you're literally in the head,  and Solid Start works the same way.  But how does it work to do static routes in SvelteKit?  Because I want to see if there's some other stuff  that maybe I'm missing that we should look at  in terms of features on SvelteKit.  So let's go back here.  We've got the deployment working.  What else do we want to look at?  And anyone in the chat, go ahead and suggest some stuff.  The reason I'm interested in static routes is...
[02:46:15] Svelte kit does something really cool and
[02:46:18] with its router and as I mentioned, Solid has always been on the nested routed remix stuff even before remix existed. Like we knew we're on that path. It goes back to Ember days. It's because in reactive libraries that don't have a VDOM, you can't waste your time re-rendering layouts. So you need nesting router. Otherwise, it's super unperformance. So I always knew that I was on that path. And then you're just like, well, parallelize the data fetching, obviously, right? But
[02:46:42] What I'm interested in...
[02:46:45] is Svelte
[02:46:47] What it does is it-- how should I put it?
[02:46:52] Bye.
[02:46:54] You're still using the anchor tag as normal in React Router, but in Svelte, they actually kind of delegate the event and listen to all the anchors on the page at the top.  And we actually added this in the latest version of Solid App Router.  And what's interesting about that is, in theory, you could have static pages with client-side navigation.  Now, I don't know that Svelte is doing this, but...
[02:47:16] I mean, if they had a trick up their sleeve that I didn't know about that would make me very, very impressed, that would be the one.
[02:47:25] We're kind of heading that direction with solid as we're getting to partial hydration and looking at these kind of techniques.  And Svelte has a lot of potential.  As I said, we used a lot of it for the basis in how we approached compiler Marko 6.  So Svelte has...
[02:47:41] While there's some certain limitations in terms of composition, it has the same analyze ability, even if they aren't leveraging yet in the compiler, potentially, that like something like Marco has.  So they have a future where they could go towards these other patterns if they choose to.  I don't think they choose to right now. I think they want to see what it looks like first.  But I'm wondering if some of their experimentation is taking them there.
[02:48:04] So,
[02:48:06] you know,
[02:48:08] Thank you.
[02:48:08] Yeah, I mean, what I'm interested in is, is this pre-rendering?  We saw this earlier.  Is it just pre-rendered true?  Or is, like...
[02:48:23] Or like the static routes, is it just, sorry, what do you say?  Hydrated?
[02:48:27] Thank you.
[02:48:28] Yeah.
[02:48:31] You can turn off hydration and/or routing.
[02:48:35] Yeah, let's see if we can find that.
[02:48:41] Thank you.
[02:48:43] If you're asking about the routing stuff I'm talking about, again, that Marco stream, the last one, has all the secrets of the future of the universe in it. People should watch it if you get a chance. It's a little bit dense, but...
[02:48:57] Like,
[02:48:59] It is incredible in terms of future technology.  I'm just wondering if they're playing.  I got a feeling like maybe they're playing with this stuff and I don't know about it yet.  So what am I looking for?  You can turn off on hydration and or routing.  Yeah.  How do I do that?  That's what I want to do.  Because that first page in Hacker News doesn't need to hydrate.
[02:49:20] And I want to know what that experience works looks like in Svelte.
[02:49:23] Um,
[02:49:25] I know it can't do partial hydration like Marco does on the second page, which is if you ever saw that demo I did with Remix and Marco, Marco's like beating it by like seconds, like it's just not even close. That's because of partial hydration and streaming. But what I'm wondering is, can we...
[02:49:40] How does it work?  Because we have pre-render, but I don't know what keyword to look for in the search here.  Is it...
[02:49:48] Uh,
[02:49:50] Static.
[02:49:55] Bye.
[02:49:56] No.
[02:49:58] Okay.
[02:50:00] Okay.
[02:50:01] I thought it was static routes for a second.
[02:50:05] Um,
[02:50:07] Hydration.
[02:50:16] Thank you.
[02:50:24] Okay, yes, these are good terms, but what do I get to do?
[02:50:30] Thank you.
[02:50:33] Export let hydration. Okay. Let's try looking for hydration again. Hydration.
[02:50:41] and these huge options.
[02:50:43] Beautiful.
[02:50:48] See?
[02:50:49] Thank you.
[02:50:53] Thank you.
[02:50:59] Okay.
[02:51:00] Yeah, okay.
[02:51:07] Okay, let's give this a shot. This is why I'm here. If there's a feature that they have that I,  they could potentially have that I think is interesting as this, because technically speaking,
[02:51:22] some of these pages don't need JavaScript.
[02:51:26] Although I don't know if me doing the data fetching here  messes with that.  Let's hope it doesn't.  Let's just do this.
[02:51:34] Pfft.
[02:51:35] Thank you.
[02:51:39] Carter and Rudder are both votes.
[02:51:43] Oh, they do have it. The way they're describing it makes me think that it's exactly what I think it is.
[02:51:50] Which is very, very exciting because--
[02:51:56] I haven't added this to SolidStart, but SolidStart can do the same thing.  And this is what I think it is.  OK, let's go localhost.
[02:52:05] No, not that.
[02:52:07] Thank you.
[02:52:08] Very, very fun then.
[02:52:09] Thank you.
[02:52:10] Come on.
[02:52:13] Thank you.
[02:52:16] Yeah, OK.
[02:52:18] Thank you.
[02:52:20] Thank you.
[02:52:20] Thank you.
[02:52:21] I'm probably not going to know until we actually do some stuff.  Okay, let's first...
[02:52:27] Let's get off fast 3G. Let's go back to no throttling. Let's -- let's -- let's -- let's --
[02:52:35] Thank you.
[02:52:35] Okay, so this is, let's confirm, this is still client side routing.
[02:52:41] Thank you.
[02:52:42] Thank you.
[02:52:43] beautiful
[02:52:47] OK.
[02:52:49] I think for us to really see this, though, we're going to just have to go and...
[02:52:56] should are deployed or whatever.  Let's just do this.
[02:53:01] And actually the user page,
[02:53:05] Um...
[02:53:06] The user's page is also static. There's no interactivity on this. So let's do this as well.
[02:53:15] Thank you.
[02:53:16] Thank you.
[02:53:20] Turn off. Actually before this, I want to check all elements of it. Before we do this,
[02:53:29] Let's look, I want to look at data serialization patterns.
[02:53:34] - Sure, 'cause
[02:53:36] I've mentioned this before on a page like this,
[02:53:39] Marco doesn't need to serialize any of the data,  'cause it knows.
[02:53:44] and I
[02:53:46] you know, everyone else, even if, yeah, yeah.
[02:53:52] Okay, so...
[02:53:54] Yeah.
[02:53:55] But where is it?  Yeah.  Big blob.
[02:54:01] And...
[02:54:01] Let's, where's our data serial?  This is in the head.
[02:54:05] Where is our data serialization for Svelte?
[02:54:09] Thank you.
[02:54:10] you
[02:54:11] Don't see there.  No.  Let's look at network.
[02:54:17] because they don't refetch it again, presumably, right?  So...
[02:54:23] Where is the data serialization?
[02:54:27] So let's look at the page.
[02:54:31] Where is it?
[02:54:38] Oh, there it is. I don't know why I didn't see it before. It's this
[02:54:45] this thing at the bottom. It's just -- why didn't I see this? Does it get absorbed?
[02:54:52] Thank you.
[02:54:53] Yeah, it looks like they remove it when they're done with it.
[02:54:57] Okay, that's fine. I found it. This is all the data being serialized in. Marco doesn't  need to, but everyone else does. If we go like this and turn off hydration for these two  pages but leave routing on, let's do this.
[02:55:15] Thank you.
[02:55:16] This should hopefully deploy a new page.
[02:55:19] Because I'm not...
[02:55:27] Oh, is it supposed to be in the module script? Yeah, that makes more sense.
[02:55:34] Yeah, sorry. I got into that a little bit too much. Let's look.
[02:55:44] It is in the manuscript. My bad. Let's do this one more time.
[02:55:48] Move it up. Yeah, that makes more sense because the module script gets hoisted out.
[02:55:54] Pfff.
[02:55:55] .
[02:55:57] For sense.
[02:55:58] And it's top level. Okay. And then --
[02:56:02] Let's do-- where is it?  Stories.
[02:56:07] I just saw those nice lined up exports.
[02:56:12] Thank you.
[02:56:13] Thank you.
[02:56:16] Thank you.
[02:56:17] Thank you.
[02:56:19] Hydration.
[02:56:23] Thank you.
[02:56:27] Cut again.
[02:56:29] Thank you.
[02:56:30] Thank you.
[02:56:34] Thank you.
[02:56:34] Uh...
[02:56:35] Thank you.
[02:56:36] - Yeah, this is cool. This is what I hope it is, because I want you to understand the difference between this and what Remix does in a minute, because what Remix does is the same as removing the router too, which is really...
[02:56:51] quite
[02:56:52] easy to do, where you just remove the script tag. This isn't removing the script tag. This is  piecewise removing it if it does what I think it does. And it actually can do other things too. So, I'm hopeful
[02:57:08] Yeah, okay. So this one's still the point. Let's give it a second here.
[02:57:16] Thank you.
[02:57:21] Because I'm not going to lie, this is secretly what I was hoping for.
[02:57:26] Thank you.
[02:57:27] Thank you.
[02:57:28] Because I was looking at this with nested routing, and it's a little bit tricky because once you turn off hydration at a certain point in the tree...
[02:57:37] you kind of got to turn it off for the rest of the way down.  So like you can't do--
[02:57:43] clever stuff with this. And since Svelte kit doesn't do the nested stuff in the same way, it's almost easier. But I think this is still solvable.
[02:57:55] I think if this works the way that I hope it works,  this is actually really, really cool.  Well, I mean, yeah.
[02:58:03] Let's see how our deploy is doing.
[02:58:08] Thank you.
[02:58:09] Thank you.
[02:58:12] SiteWiz deployed, did we get there?
[02:58:17] Okay.
[02:58:18] Thank you.
[02:58:27] Mm-hmm.
[02:58:27] Thank you.
[02:58:31] Thank you.
[02:58:32] Thank you.
[02:58:35] Thank you.
[02:58:36] Thank you.
[02:58:38] Thank you.
[02:58:41] Hmm.
[02:58:43] Mm-hmm.
[02:58:45] Thank you.
[02:58:46] Thank you.
[02:58:48] Thank you.
[02:58:49] Mm-hmm.
[02:58:51] Hmm.
[02:58:53] Mm-hmm.
[02:58:59] Thank you.
[02:59:03] Thank you.
[02:59:04] Thank you.
[02:59:09] Well,
[02:59:11] They got rid of the data.
[02:59:14] They didn't serialize the extra data.
[02:59:23] Thank you.
[02:59:24] Bye.
[02:59:25] Thank you.
[02:59:27] There's a couple of ways we can know it's not hydrating, but I think, I think, I think,
[02:59:35] Thank you.
[02:59:36] Thank you.
[02:59:37] Thank you.
[02:59:38] Hmm.
[02:59:41] Bye.
[02:59:42] And it probably makes sense.  Okay, yeah, okay.  So this isn't quite as cool as I was hoping,  but it's close.  Let's do the loading profile and see what it looks like here.  Let's get back to no throttling and do the load.
[03:00:00] Do it again. Let's just, this is.
[03:00:02] Thank you.
[03:00:05] Mm-hmm.
[03:00:07] Like the...
[03:00:08] Thank you.
[03:00:09] Why is this way out in here?  OK, let's try this again.
[03:00:14] Mm-hmm.
[03:00:17] Mm-hmm.
[03:00:19] Yeah.
[03:00:20] Yeah, yeah, yeah, yeah. Yeah, it's not. Let's get a good run.
[03:00:27] Yeah.
[03:00:28] First paint and then
[03:00:31] Mm-hmm.
[03:00:31] Thank you.
[03:00:33] Yeah.
[03:00:35] All right.
[03:00:37] Yeah, okay.
[03:00:39] Let's look at the CPU running.
[03:00:43] I should have kept the old...
[03:00:48] time, yeah, I'm pretty sure it's not hydrating here.  But the thing is they didn't eliminate the JavaScript packages  as far as I can see.
[03:00:59] which is what I was kind of hoping for.
[03:01:01] like
[03:01:04] The thing is,
[03:01:06] Once we move here, it needs to be present. Otherwise, like,
[03:01:11] Otherwise, this doesn't work, right? But that initial page, technically, stories doesn't need to be here. And I was hoping when we set to hydrate false, it just wouldn't even ship the script tag and actually reduce the initial JavaScript payload.
[03:01:26] Thank you.
[03:01:27] What looks...
[03:01:29] Yeah, we should double check that it's actually doing what we think it's doing.  But it does look like...
[03:01:36] It removed the hydration script, which means that it's probably not running the components
[03:01:42] Um...
[03:01:43] We're not going to see this on page speed optimizer or anything because we're already like 100 for this simple page. But what I believe what they're doing is they're not serializing the data and they're not running the hydration for that section, but they're still sending the JavaScript.
[03:01:58] Thank you.
[03:02:03] Yeah.
[03:02:08] Yeah, but if you turn off both, then it's like Remix.  It's kind of like, oh, you removed the script tag.  What's way more interesting here is the potential of...
[03:02:22] almost doing like a really dumb version of partial,  reverse partial hydration.
[03:02:26] Because we need the JavaScript for the router, and we need the JavaScript for the main page. So in theory,
[03:02:35] what we could do is render the whole page on the server,  send the JavaScript for the router,
[03:02:41] and not preload or prefetch the JavaScript  through load this page.  And then when you do that first navigation  at that point, load it, right?  So not only not serialize the data,  but also not send the JavaScript.
[03:02:51] For the static section.
[03:02:53] If we turn off the router, what's going to happen is when we click more, the whole page is going to reload like MPA style, which, again, isn't the worst thing.  That's what Marco is doing here.  Marco is reloading the whole page here.  You don't see the flicker because, well...
[03:03:07] is streaming and all this stuff and the loading.  There is a loading state.  I don't know why we're not seeing it right now,  but ignoring that for a second.  But essentially, then we turn it into that thing.  And sure, like any of these frameworks can do that  because it's like solid, remix, felt,
[03:03:25] they can all just remove the script tag.  What's interesting is situations where you can reduce  the JavaScript while still having JavaScript.  And this, don't get me wrong, this is good.  Not hydrating and not serializing that data  is going to affect your, can I show you what it affects?
[03:03:46] Yeah.
[03:03:48] - Um...
[03:03:50] But it affects...
[03:03:53] Let's reload this.
[03:03:57] Wait a second.
[03:04:00] - Why? I'm bypassing it.
[03:04:03] Why is it being like this?
[03:04:07] Bye.
[03:04:08] The page is more than four kilobytes.  That's not nice.  What is it doing?
[03:04:15] Thank you.
[03:04:17] when I wanted to
[03:04:20] Um...
[03:04:21] Bye.
[03:04:22] Yeah.
[03:04:23] Turn off the stupid thrilling document.
[03:04:27] Thank you.
[03:04:28] I thought, okay. Okay, see, solid. Seven kilobytes for this page.
[03:04:35] Remix.
[03:04:37] Thank you.
[03:04:39] Thank you.
[03:04:40] Thank you.
[03:04:41] I disabled cache.  Sorry, wrong one.  Turn off 3G.
[03:04:49] Doc, doc.
[03:04:51] I don't know why solid is so large right now.  We have to see.  Anyways, remix 5.8 kilobytes.  I think something's 5.9.  Something is weird going on right here.  Oh, right. Streaming is always a little larger.  And then--
[03:05:04] uh,
[03:05:06] Let me go dark.
[03:05:09] Thank you.
[03:05:10] Thank you.
[03:05:10] Mm-hmm.
[03:05:12] Yeah, these numbers aren't in the right range.  It should be like--
[03:05:18] It shouldn't be like four kilobytes.  It should be...
[03:05:21] Yeah.
[03:05:22] bigger than that.
[03:05:24] What?
[03:05:25] I don't know. Anyways.
[03:05:28] What we did when we switched this is we basically shrunk the payload of the HTML page.
[03:05:37] Bye.
[03:05:37] Thank you.
[03:05:41] Thank you.
[03:05:48] Thank you.
[03:05:49] Thank you.
[03:05:50] Anyways, yeah, this is cool though. This reduces the page size and it reduces the execution cost up front. And it seems like something fairly trivial to add to any system that does the smart data fetching in the routes.
[03:06:20] because that, I mean, it technically is loading it,  but in theory, it wouldn't load it.  And then when you click on the next thing,  at that point, it could load it or hover  or do preloading or whatever.  So yeah, this is a cool approach, technically.  I don't...
[03:06:34] like we could go MPA mode,  but to me, at least that's very uninteresting  because like,
[03:06:41] literally like
[03:06:43] you can just not, you can just decide not to send the script tags or whatever. You can just be like, don't send the script tags. This is slightly smarter than that. So this is like a good stepping stone. Like there's a lot of sites that are like this where like you have a page and there's no JavaScript, just don't run the code. In our case for this demo, it's felt
[03:07:05] He's already so performant.
[03:07:09] you know, that it's just not making going to make a difference that we're going to measure not doing the hydration.
[03:07:14] for any kind of like page score thing.  But in general, this is a nice hybrid  that I don't think is in Remix yet.  So this is really cool.
[03:07:24] But yeah, I think we can do a little better here. But this is what I meant. Once you're using the anchor tags, you can basically not have the link components and have the anchor tags delegate at the top. And we actually have the same ability with the latest version of the router. Okay, let's look at the comments for a minute, see what we've got here.
[03:07:45] Thank you.
[03:07:46] Yeah, have I addressed this one?  Yeah, yeah, for sure.  And Jacob from Remix reached out to me too  about getting it in with Solid.  They're not quite sure what they want to do  in terms of the compiler transforms.  But yeah, I think you're going to see  some different stuff there.  I don't know what the timing is on that  because it seems like the core team  at first was really welcoming of this,  especially because they got some flack,  you know, because people are like, look,
[03:08:10] guys, like--
[03:08:12] you're trying to win on performance.  And literally every other library is already doing that.  But other than Preact, I'm not sure if there's anything  immediately on the roadmap.
[03:08:27] Yeah.
[03:08:28] Yeah, we're getting close to beta. I'm going to be covering Solid Start very soon in the stream. My intention was actually to do it next week, I think. It's either next week or after. In the next couple streams, we're going to get to Solid Start.
[03:08:48] Um,
[03:08:50] Yeah.
[03:08:53] - Static routes actually haven't been something  that I've been working on yet in terms of optimization.  I've mostly been working on the, as you've seen,  the core page load mechanisms and like,  been working on like streaming and making that work  and data fetching.  We have data loaders.
[03:09:13] The approach that Solid Start is taking to...
[03:09:17] Data fetching is like, you know, see how SvelteKit has both ways. Solstart has both ways too, but it actually bases it off the original one. It's like this. We have isomorphic data fetchers, but we have the ability to annotate any function used anywhere with server, and then suddenly it's a type safe RPC call.
[03:09:37] And that means you can just feed it right into your resources or whatever. So you just write your app like it's a client side app. And then you're just like, oh, yeah, do this on the server.
[03:09:47] And you can literally do that anywhere in any file.  And you can do-- and we have some-- I'll showcase it.  We have forms like Remix with optimistic updates with an API.  And you can put as many of them as you want on a page and stuff.  Basically, we liked the progressive enhancement  and a lot of the stuff that Remix was doing.
[03:10:08] But we didn't
[03:10:10] Like, sure, I understand the classic web space stuff, the redirect model and the page and the single resource location. We were like, screw that. Let's just let you just do whatever you want anywhere and just have it work and be progressive enhanceable. So I think it's gonna be pretty cool when we showcase it off soon.
[03:10:30] Yeah.
[03:10:32] Thank you.
[03:10:33] Thank you.
[03:10:34] Um...
[03:10:42] Yeah, I mean, I've already shown the perfect demo to kind of debunk that.
[03:10:51] Thank you.
[03:10:51] Yeah, I mean, I think they're doing the right thing. This is what I hoped for. I mean, I think there's probably a couple more things. Maybe I didn't turn the option off. Right. Like, let's just triple check. Like, maybe I'm saying stuff and it's not working and this is just wrong. Right. But like,
[03:11:08] I think...
[03:11:10] export const hydrate false script context module. OK. And --
[03:11:17] script context, okay, I'm doing this right, okay, okay. But,
[03:11:25] And actually we saw this, right? They, they removed the hydration script.  We actually saw. So I think, I think as I said, this is what I was hoping for.  So I think it's really cool. And I think, I think,
[03:11:34] This is just all going to kind of a
[03:11:39] Thank you.
[03:11:40] laughing
[03:11:43] No, no, it's fine.
[03:11:48] There's always kind of like little frictions and stuff. I mean, and little things. I'm not too worried with that. I think if anything, I've just been kind of vocal, you know, the position on performance and like how it plays in and...
[03:12:02] You know, we'll probably start chatting again soon when it's the right priority.  I think Remix has been really focusing on their core values,  getting the conf out and all that kind of stuff.  So I'm not too concerned about that.  I know obviously Solid Start is a bit of a competitor, but
[03:12:19] If timing had been different, I'm pretty sure I would have worked really in, we would have seen Solid Start or Solid Remix instead of Solid Start maybe.  If they'd open source their project like nine months earlier or a year earlier when I started.  Because it is so close to the kind of stuff I want to do.  Although I have to say, I love the VEED ecosystem and I love that we can leverage it.  I think that might actually be the...
[03:12:44] Sometimes I feel like we accidentally fall into the happy path with Solid sometimes.  The JSX actually ended up being a really good thing, even though it was just what was there.  And in the other sense, I think Beat is so good that even though...
[03:13:00] things might have gone differently. I'm like, so happy. That's how, where we ended up.
[03:13:04] Um,
[03:13:07] Thank you.
[03:13:09] Thank you.
[03:13:10] Uh,
[03:13:12] Oh, the JavaScript is running on the client for all of these projects that I'm talking about today.
[03:13:20] for the routing.
[03:13:22] Um,
[03:13:24] To be fair, even the future routing I'm talking about,
[03:13:27] is a weird hybrid where the client is still kind of running JavaScript.
[03:13:31] But the server is fulfilling the rendering of the page.
[03:13:36] Yeah, ideally is the ideal approach that I've been talking about.  And the whole last stream was about that, the second half of it.  Again, if you haven't watched it, the last stream is the best stream to watch ever.  Just saying that the whole approach is it's a hybrid.  I think the best approach is.
[03:13:54] Okay, have a shot with us.
[03:13:56] Bye.
[03:13:57] it
[03:13:58] The best way...
[03:14:00] -
[03:14:02] In general,
[03:14:03] client,
[03:14:05] rendering when the stuff is already there.
[03:14:08] is the faster way to handle stuff.  You've been doing like
[03:14:12] API calls. You just go get the API and render it. And if you have the JavaScript already, client-side rendering is really fast. And I think just going to the API JSON, like there's no benefit
[03:14:22] there for typical navigation or gets.
[03:14:26] if you have all the JavaScript.  What's interesting is if you live in a world  where you don't need the JavaScript,  you don't need the complexity and you never will,
[03:14:35] then it's not really any more expensive to pass HTML back or hybrid HTML and JSON back when you do those gets.  But where the win comes in is when you do like mutations or mutations that cause redirects, then with a kind of more MPA style routing, you don't have to do a bunch of like jump back forth.  Like consider post a form when you're on a page for like creating a new post and it takes you back to your list of posts when you're done.
[03:15:03] In a client-side routed single page app, a typical thing, you do the post,
[03:15:07] then it succeeds and it comes back.
[03:15:11] And then he goes, OK, now redirect me back to the page where the list is.  And you go there.  And then at that point, maybe you use the results from there to refresh the list.  But to add it to the list.  But no, that's not what you tend to do.  Then when you get to the new page, now pull the data for the new list.  You can parallelize the fetch at that time, but essentially,
[03:15:31] the mutation causes
[03:15:33] one trip and then the new page loading causes a second trip to load it. And this is pretty common.
[03:15:41] With an MPA framework, you post the form,
[03:15:45] And then the response is the new page.
[03:15:47] And I think that's...
[03:15:50] where this is kind of going, where you're going to see the server--  the clients still have like a client routing,  and probably nested in terms of how it--
[03:15:59] interacts, but the partials that are new you want rendered on the server.  And where it gets really interesting is if you can kind of get to a hybrid format where you can kind of
[03:16:12] update existing stuff with JSON and new partials with HTML  interleaved and somehow do this in a fine-grained sort of way.  And that's what I want to work on in terms of ideal solution  and where things are heading.
[03:16:28] Thank you.
[03:16:29] Okay.
[03:16:32] Thank you.
[03:16:36] Be careful, there's a realist people about.  Yeah, yeah, I know.  It's funny because I'm generally pretty open to lots of ideas and working through like –
[03:16:50] like different trade-offs and different approaches but i think sometimes i'm i'm really hard on like  the no tools side of things and really hard on like the classic mpa side because
[03:17:01] from my perspective it it they've been the like the the really
[03:17:07] The thing that kind of
[03:17:09] makes the discussions a little bit harder.  Because on the single page app side,
[03:17:14] Yeah, we've done some terrible stuff.
[03:17:17] I mean, the benefits were great, but we've done some terrible stuff.
[03:17:22] And there's been a whole other breed of MPA, JavaScript MPAs and smart partial hydration  stuff.  It started with Marco, but we've seen other frameworks and other techniques over the years  kind of come up here.  And...
[03:17:35] they're
[03:17:36] They're...
[03:17:38] They are doing the stuff that they should be, but it's like a third group, right? Like the classic MPA, no tools, whatever group, then there's the single page app group, and then there's this group. And somehow, even though this group is basically has been MPA in the past, they never really got the respect of the other MPA people. And the single page people are just like, what?
[03:17:59] Why are you doing this old technique?  It's only now that it's starting to understand that that's the path forward to actually...
[03:18:06] like unifying everything, but I'm not sure the single page app side or the classic MPA side is ever going to acknowledge it. And
[03:18:15] I actually, I have more hope in the single page app side than the classic MPA side. So I'm, I'm,
[03:18:21] I sometimes refer to like the rail side as kind of like dinosaurs and stuff.  And it's not, it's not fair. It's just, it's just like,  it's like they're the stick in the mud that I like that are kind of blocking  it. And I get it because I'm suggesting a future that's all JavaScript.  And that's really the sticking point.  It's not about how much JavaScript's in the browser optimizing and all the  stuff. I mean, it's the same reason it's why it's no build. They, they just,  there's still this like, you know,  JavaScript's something different for them.
[03:18:51] That's never changing, I guess.
[03:18:56] Thank you.
[03:18:57] Thank you.
[03:18:59] Thank you.
[03:19:00] Yeah, I mean, yeah, that's, yeah.
[03:19:04] But, like, stuff like this, like I showed, that I've been showing, and stuff like this, like, hydrate, it's the start of this kind of change.  This is how, this is...
[03:19:14] There's multiple ways to attack this problem.
[03:19:18] And some might be in Wasm and there might be some SPAC and stuff.  But this is a real approach to where we can go with this stuff.  And I've been talking about it at length for weeks now.  I'm going to probably write another article.  I mean, every time I get a little bit more clarity here, I wasn't expecting much more clarity obviously talking about SvelteKit today.  Because SvelteKit is kind of like the forefront and Remix and Solid Starter, like forefront of the current single page app things, right?  Like this is not what I've been talking about.
[03:19:48] page.
[03:19:49] job thing, right?
[03:19:54] Like...
[03:19:54] But you can see it's starting on the journey.  It wants to get there.  It's going to be hard for single-page apps to make the full transition, admittedly.  But I do see that middle ground is starting to be kind of obvious.  But for the meantime, I think it is important...
[03:20:13] to keep the boundaries so we can keep an idea of where things live, like where that old MPA is, where single page app stuff like Svelte Kid or Remix or Solid Start is. And then where Marco and Quick Sit. These are three distinct places, but
[03:20:30] The progressive stuff on the single page app side and the Marco Quick stuff are quickly approaching each other. And I want to see where it meets. I don't know if every single page app framework is going to make that transition, if they're going to get there or they're just going to stay where they are. But
[03:20:48] Those on the MPA side are definitely interested in bridging the gap.  So I think this is going to be a really interesting time to see that.
[03:20:59] Thank you.
[03:21:00] Yeah.
[03:21:01] Yeah, yeah. But my point here is the new technology I'm covering the last few weeks, like on the more MPA stuff, the Quick and the Marco side, is not your typical single page app. Even this stuff isn't really classically your typical single page app.
[03:21:31] necessarily. Most of the stuff, conceptually, even though I told you the router is happening in the client, it is conceptually routed on the server, conceptually. And
[03:21:43] And I think this could appeal to those people other than the fact that I'm telling them to run JavaScript on their server.  I mean, after all, today started with me showing something from Matthew Phillips from Astro, where he's like, I don't want, you know, to alienate people who don't want to run JavaScript on the server.  And that's fine.  But that's the other approach.  It's the two app approach.  We've been there.  I'm...
[03:22:05] As I mentioned, I don't really want to go back there.  I think there could be potential to do other stuff, right?  The two app approach always had this weird double templating thing and, you
[03:22:14] Matthew solved that with a CSS kind of approach.  But you still basically have like two views that are going  to layer on top of each other.  It's fine.  CSS is like that in a sense.  It's like a second representation.  So maybe mentally, like you can view with a core set or whatever,  that essentially--
[03:22:38] server and client are like two different views,  like two different technologies or whatever.  Like you have your CSS file,  you have your JavaScript file,  you have your...
[03:22:51] HTML file and you have your core set file.  Like maybe that's the mentality.
[03:22:55] Um,
[03:22:57] I...
[03:22:58] I think hydration...
[03:23:01] is solvable. I'm going to go as far as saying that
[03:23:04] The solution to hydration
[03:23:07] that we've been challenged.  I wrote an article about the challenges.
[03:23:10] It's right here, honestly.  I was talking to Misko.
[03:23:17] It's funny, it happened the same time this week.  I was sitting down with--
[03:23:21] I was implementing use effect or effect tags in Marco.
[03:23:28] And we realized that there's some awkwardness with the cueing. Like you always have to cue effects because they have to happen after everything else. And
[03:23:37] We had already split hydration off from regular rendering.  And the only thing that happens at hydration is event listeners' effects.  We're like, oh, we don't want a third freaking queue.  And then I think it was Dylan, he was like,
[03:23:52] then let's not. We don't actually need to attach the event handlers at that point. They're kind of like already there through delegation on the server.
[03:24:02] And then we're like, oh, yeah.
[03:24:04] So literally all hydration is is calling the end user effects.
[03:24:08] i.e. code that only runs in the browser.  If you literally don't
[03:24:12] have any user effects, like don't use the effect tag or use effect.
[03:24:16] With Marco Six,
[03:24:19] There's no hydration, none.  And I didn't really make much,  I didn't connect the dots when I heard that at first.  Like we didn't actually say that out loud.  We're just like, oh yeah, don't do the event thing.  But Misko was like, I've decided  that Quick doesn't do hydration.
[03:24:33] we're resumable and we, we, we just do no hydration. And I'm like,
[03:24:38] Holy crap, that's what this is.  So...
[03:24:43] Yeah, we'll see this, but essentially, approaches like Quick and Marco basically
[03:24:49] in a sense, have...
[03:24:51] eliminated the JavaScript execution part of hydration. I think with partial
[03:24:57] mechanisms, I need to know what to serialize and not to serialize, finishes the puzzle, like the whole
[03:25:03] Marco's analysis or like server components like but if you take resumability and you take the  knowledge of what runs on the server in the client in terms of data serialization you basically have
[03:25:14] salt hydration.
[03:25:16] Like we, we, we, and I think, I,  I think with the knowledge that we basically have solved hydration, I'm,
[03:25:23] I mean, I don't think...
[03:25:26] We need to--
[03:25:28] go other ways. Like I think we can build a single JavaScript app and just not have hydration.
[03:25:34] I don't know if it's a crazy idea.  I'm not articulating it well.  But I think...
[03:25:41] To me, it's starting to look like we actually...  It's not just about partial or progressive hydration.  It's actually about eliminating hydration altogether.  And we're right on the...
[03:25:53] the edge of accomplishing that.  It's like we know how to do it.  We just haven't done the work to finish the story yet.
[03:26:01] Yeah.
[03:26:03] I'm curious why you consider routing fundamental rather than thinking of the URL just as one input  into function that returns markup. Is it because routes tend to change the whole page? Yeah. I mean,
[03:26:13] Especially on the server, this is the source of truth that everything else is driven off. What
[03:26:19] view to show, what data to load.  It's the most fundamental source of data.  So it makes it a very...
[03:26:27] a natural place like and this comes back to like the fundamentals of the web. Every time that we've had a big paradigm changed, it's it's it's the routing paradigm that's like it's the routing that defines that change. Right. Like what's the difference between an MPA and a single page app?
[03:26:42] Right?
[03:26:43] Um,
[03:26:45] it's it's mainly the routing it's the routing on the server versus writing on the client and  like it's basically the the backbone it's the it's the input of of it i understand the url itself you  could like use it different ways especially from a client side perspective you can do nothing with  it or everything with it but
[03:27:04] This is a piece of information that lives like outside of your...
[03:27:09] Like,
[03:27:10] It's in the browser, but it's outside of the world you live in.  It's the only actual...
[03:27:20] input. On server, it's the request and the route, essentially. But essentially, this is the input,  right? Especially when you consider stateless environments.
[03:27:31] where you don't have any persistent state, like it's all driven off the route.
[03:27:37] So yeah, from that perspective, it's the complete path.
[03:27:40] the complete back, like the backbone of all web applications.
[03:27:47] Thank you.
[03:27:50] Okay.
[03:27:51] Yeah, I think this is an interesting one. I don't know. Node has obviously had some concerns and some security. I don't know. Some people I've talked to think that Deno or Deno might change the game here. I don't know. It seems...
[03:28:05] The only reason I'm saying this, I've seen people more back-endy, excited about Deno than people on the front-end side.  But maybe that's just like the smallest slice of the smallest slice.  But if there's a path there, maybe that'll do it.  Maybe there's just certain parts about JavaScript back-ends that just doesn't jive with their thinking.  And maybe...
[03:28:28] We don't get it because I don't know. I've been a back end dev or full stack dev. I was for years, right? Like a pre single page app every web developer was I mean, unless you're like just a designer. Exactly. So, you know, I spent years doing websites and C sharp and some PHP and rails definitely so like,
[03:28:50] Yeah, I don't know.
[03:28:58] Thank you.
[03:28:59] Thank you.
[03:29:00] Thank you.
[03:29:02] Yeah, the router is the way you're working to integrate with the URL, which is the source.
[03:29:10] Thank you.
[03:29:12] Yes, this is the difference between state and stateless, right?  Don't get me wrong.  There are other sources that...
[03:29:20] For sure. And when you're like sitting there on a page, which like for anyone who doesn't know, Theo's apps are like video apps where like long session, you're basically on the same page, you know, like
[03:29:37] it makes sense.  But yeah, in those kind of things,
[03:29:43] Like, like,
[03:29:44] your app would basically be a single page anyways.  Like even if you go back to before single page apps,  like you pretend we live in an MPA world,
[03:29:52] Like,
[03:29:54] you probably would have built your app as a single page
[03:29:58] anyway, kind of like
[03:30:00] maybe there's some like setting screen or something you, you know,  it would have been a way worse experience. Don't get me wrong. Like, but like,
[03:30:09] you can always house interactive stuff within inside this model, right? It's the routing again that is the key
[03:30:17] the key thing.
[03:30:23] Yeah, yeah.
[03:30:25] Yeah, I'm a big proponent of Cloudflare and Cloudflare workers, but I want to see where this goes. This might be the more suitable platform.
[03:30:36] I mean, I'd love to see
[03:30:38] It's hard because Dino is just this platform that kind of goes anywhere,  Dino or whatever.  And,
[03:30:44] But workers have this really good platform.  So I don't know.  We're going to have to see how this plays out.
[03:30:54] Yeah, this is, yeah, the TypeScript and the error handling is, like, I forget, is it Rust the one? People are comparing it to Rust or whatever in terms of error handling being, like, really good. I haven't played with it.
[03:31:05] There's parts of it that just threw me off immediately, but...
[03:31:10] I think maybe this is what it's going to take.
[03:31:18] Yeah, I tried to do this. I got stuck. And you're right, I don't have patience for this stuff. So that's pretty much sums it up completely.
[03:31:32] Thank you.
[03:31:32] Thank you.
[03:31:33] Yeah, the comments are coming in so fast now that I'm barely keeping up.
[03:31:38] Yeah.
[03:31:40] Yes.
[03:31:41] It's easier with 18 hour session. Yeah, I, yeah, I can see it. That's amazing.
[03:31:46] Honestly.
[03:31:48] The things you can do with the web now. Yeah, no, that's so awesome.
[03:31:53] Yeah, the concern is about JS backend.  So yeah, and it's because it,
[03:31:57] Yeah, I don't know.
[03:31:58] You'd think that there would be something okay by this.  I don't use them enough, and maybe that's why.  But you'd think that there'd be some kind of...  I don't know about Nest.js or any of that stuff.  I've heard bad things.  I don't know.  But you'd think there'd be a full-fledged JavaScript backend framework.  It's been 10 years built on Node.  Is it that people are just happy enough with spin-up that...
[03:32:24] express up like
[03:32:26] I don't know.
[03:32:27] I lived at a startup that we did do that.  We just had Node Express.  We moved through different architectures,  eventually getting on serverless,  but starting on like Node servers.  I just, I never missed the stuff  that I had in .NET or PHP,  but I mean, other people,  like that's how their stuff works.  So I don't know.  I have to imagine the tools are out there,  but I'm used to just like throwing together  what I need and just going from that.  So like different mentality, different scale,  but like eBay, yeah,
[03:32:54] You know, we still have Java for like our on the API side, you know, like on the data side and the business layer. We did move all the web technologies all to node on the back end and other large companies have as well. But, you know, we still have a big contingent of Java. So yeah, there's probably real things there that I'm just not, you know, taking into consideration.
[03:33:19] Thank you.
[03:33:23] Thank you.
[03:33:23] Yeah.
[03:33:25] Mm-hmm.
[03:33:25] Thank you.
[03:33:26] Yeah, I think there's some really good stuff coming up with Rust and Go, especially.  It's just...
[03:33:33] Right now, maybe WebAssembly is going to be the change.  And you can always do other parts, certain parts and back end, but right now,
[03:33:40] I actually think that
[03:33:42] that we're at a precipice, as I was saying, where we can have...
[03:33:47] the full single app experience in JavaScript.
[03:33:51] front-end and back-end.
[03:33:54] with salt hydration.
[03:33:57] Optimal JavaScript.
[03:33:59] amazing user experience in terms of like navigation stuff. I think we're like right on the thing. And  right now, I think JavaScript on both sides is the only way to achieve that right now.
[03:34:11] It could change, but right now, that's where we're at.
[03:34:19] Thank you.
[03:34:21] Thank you.
[03:34:22] Yeah, I don't know.  I didn't highlight this with SvelteKit,  but Remix, SvelteKit, and Solid all pull their graphs based  on routing.
[03:34:33] Like by virtue of code splitting on the route, it automatically bundles stuff based on the route. And then we do all our preloading and everything. And we even like in the browser, like when you go, we know exactly what the fetch, everything's based on the router in these new meta frameworks. I don't know if that's, if that's happening.
[03:34:52] everywhere. I have to assume like Next is doing the same thing. Like this whole architecture that we do right now in SQL page apps is very much based on splitting along routing. Maybe it's kind of handled automatically for you in the background, but essentially routing is the key to that.
[03:35:09] Thank you.
[03:35:13] Sorry, this is funny stuff in the chat. Yeah, I mean, this is serious. And yeah, yeah.
[03:35:20] What would happen if we brought everyone together?
[03:35:25] It's interesting, yeah.
[03:35:27] Bye.
[03:35:30] Thank you.
[03:35:32] Thank you.
[03:35:34] Yeah, yeah. What if...
[03:35:39] What if you could...
[03:35:42] now move that to the edge.  That's the only thing I'm going to throw out there.  Like single edge function is basically what I've been doing with,  and these guys have been doing with all our starters.  That's the only little difference.  And the thing is,
[03:35:58] Cloudflare has higher limits than AWS's edge functions. It's just a better platform. So I think
[03:36:08] It's more practical, but to be fair, there are still limits and I'm not sure all apps would actually fit in there. But yes, I've been really digging serverless. And I think edge is the other thing here, right? If we're moving back to the server and the server is on the edge, I think this is all kind of part of...
[03:36:26] This is why, like, it takes a kind of perfect storm for this paradigm shift. It wasn't just enough that the JavaScript frameworks have the ability to do this, but having Edge, you know, being this, and like serverless being this kind of vehicle, we've had serverless for a few years, but I think stuff is just kind of aligning quite nicely right now.
[03:36:48] Thank you.
[03:36:48] Thank you. Yeah, we're going to be wrapping up soon. This is three and a half hours. It's longer than I thought again. But I'm glad we got to see some stuff in SvelteKit that, you know, I was pretty...
[03:37:00] stoked about. Yes. I think they all do.
[03:37:07] You know, like that's sort of where, you know, where like the current generation of isomorphic gaps are.
[03:37:17] Amen.
[03:37:17] Um...
[03:37:20] Thank you.
[03:37:25] Yeah, I mean, it's a good question.
[03:37:30] - I've wondered about this, right?
[03:37:34] Okay.
[03:37:35] Thank you.
[03:37:36] Thank you.
[03:37:37] I think there's potential there.  Obviously, I haven't learned Rust, and it's been on my list because of stuff like this.  I think...
[03:37:46] When this happens, it potentially could be a huge game changer. We're going to have to see what the performance is and how that kind of works out. One of the things I think I've pointed out to people before is the gap between optimal JavaScript frameworks and optimal JavaScript is much smaller than the gap between optimal Rust frameworks and optimal Rust.
[03:38:16] I'm not sure...
[03:38:18] Yeah.
[03:38:19] But if going straight to Wasm past JavaScript is like...
[03:38:26] a 20% performance improvements across the board,  then like...
[03:38:30] and it doesn't affect load times and stuff like that, like the right trade-offs, then yeah, I mean, that is where we are.  Like, maybe that is the next thing, and you should just wait past what I'm talking about and go there.  But I feel like from a timing point, we're going to hit these perfect Java, like not perfect, but like this realized JavaScript isomorphic frameworks like I'm talking about.
[03:38:51] in
[03:38:52] React server components is even kind of part of this story.
[03:38:55] next year sometime, 2023 sometime, we're gonna see what that looks like. We'll have Marco towards the end of the year, quick, we'll kind of finish the pieces it needs. Let's say 2023 is a year of that.
[03:39:07] I'm not expecting Wasm...
[03:39:10] for at least another few years, like 2025 at the earliest. So yeah, I guess we'll have to see.
[03:39:20] Thank you.
[03:39:20] Thank you.
[03:39:21] Yeah, I mean...
[03:39:24] streaming, I don't know. We'll see what happens with data. I wonder if
[03:39:30] I think we're, I think, I think,
[03:39:34] I think there's also potential to change the way that we distribute our apps.  I think we're just like the single...
[03:39:42] function.
[03:39:44] you know, at the edge might just not even be the thing. To be fair, this is probably something that matters more scale, like, and like, by scale, I mean, complex apps with lots of parts and pieces. So maybe this is just not really a concern. And
[03:40:01] you know,
[03:40:03] Any kind of serverless is just deploying now and it's easy and you don't really have to worry about those levels of details. I do think solving the data question is going to be the big question coming up. Obviously, I'm a big fan of
[03:40:15] Like,
[03:40:17] Yeah, I've been a big fan of streaming because I think that it makes it feel almost like Jamstack.  Like it's like just the apps are immediately there on the edge.  It's like hitting a CDN with the static content.  It feels like that.  And then dynamic stuff comes in almost like it was client rendered or client grab, but it was from the edge.  So it's like a little faster maybe.  But...
[03:40:37] I was talking to Guillermo from Rousseau and he was like, we're looking at all means of caching stuff.  He's like, we can even cache stuff at suspense boundaries.  He was telling me some really cool things.
[03:40:55] They kind of got this vision for what they call the dynamic static or something like that.
[03:41:07] wiring that all in as part of these solutions.  Like they're thinking some really cool stuff to kind of orchestrate this at a  wide scale. And I, I, I know, I,
[03:41:17] They're not the only ones. I know people, Cloudflare are thinking along these lines too, right? And I'm sure, you know, Netlify is working on the new edge solution, you know, and like, this is just the next thing in this infrastructure that's coming out.
[03:41:33] Yeah.
[03:41:34] Thank you.
[03:41:37] re-script it looks like a really sweet language honestly i i just wish it worked for us with solid  but it it looks cool i don't know i i think i think i think javascript has a sort of staying  power it wouldn't do whatever like typescript you know it's kind of supplanted a bit but it's  still kind of javascript i after this we're going to end up with
[03:42:01] some other kind of language that probably is like good on the back end and the front end and does a whole picture. But I said, I feel like we're still
[03:42:09] several years from that.
[03:42:15] Yeah, great comments all around on this chat. Sorry. One of the biggest problems with the Spots was taking things out of the URL and hiding them in a local state. Lately, we've been figuring that out. Yeah, yeah, yeah. I mean,
[03:42:27] that
[03:42:28] Yeah, we're just asking for it, essentially. It is tricky. I did live in the age of .NET, like postbacks and where you have to serialize everything and it was this really terrible back and forth. Like the whole isomorphic single app vision predates the single page.
[03:42:45] app or it was there right at the beginning of the Ajax. Like, before we saw JavaScript  frameworks really take off, you know, and become a thing, people were trying whatever they could  to make their server technology not like work in a really interactive way and not dirty your hands. Like, .NET circa 2005-ish, 2006,
[03:43:06] you could write whole apps without writing any JavaScript, like all in C# on the back end. And they were doing partial AJAX page swap outs, like kind of like turbo like stuff where you like doing HTML partials and stuff. And it's all JavaScript handled and they're serializing the data automatically back and forth with the communication and all this stuff. But you didn't write a single word of JavaScript. C# generated the JavaScript from like the code you wrote in .NET. And
[03:43:35] it was the biggest beast of garbage like ever. Like it just, it was terrible, but
[03:43:42] and the complexity was there. So I am sometimes worried about these solutions. Like I feel like
[03:43:47] Quite often, the secret to kind of getting that key new solution, that space that changes things, isn't about just solving the problem.  You actually have to simplify some aspect of it, make it easier.  And sometimes that often comes as a de-opt, but it's an acceptable de-opt in the new world of things.  And I think that's interesting because like React.
[03:44:10] React was a de-opt.
[03:44:12] Like, I know it's funny to call it, but they were less like, okay, look, this data binding stuff everyone's doing and all this reactivity, it's way too freaking crazy.  It's like bouncing around like ping pong and whatever.
[03:44:22] and all this imperative jQuery code and all this stuff,  just big pile of garbage.  What we're going to do is just re-render everything.
[03:44:30] That is a deopt. That doesn't make any sense.
[03:44:33] Why would you just re-render everything?  Like it's,
[03:44:36] Like--
[03:44:37] By its very nature, it's going to be worse.
[03:44:42] change some element of it.  It's not re-rendering the DOM.  And the simplification that came from that
[03:44:49] Okay.
[03:44:49] Completely changed how we built apps.
[03:44:52] But it's based in challenging an assumption
[03:44:56] that we took for granted.
[03:44:58] which was like, no, like we've got to get more granular.  We got to get better at updating stuff.  And they're like, no, screw it.  Just re-render everything.
[03:45:07] Thank you.
[03:45:08] That's the kind of mentality it takes to,
[03:45:11] to really change the world.  It often comes with a step back, two forwards kind of thing.  And don't get me wrong, I hated React for it.  I was like, you're wrong.
[03:45:22] Fine grain updates is how you get the most performance and all this stuff.
[03:45:27] Right. And here we are again, full circle.  And we're like, yeah, fine green updates is how you get most performance.  But like.
[03:45:34] React was right for its time.
[03:45:38] You know what I mean? Like they were correct. The solution back there were, were,
[03:45:42] were not great. They needed work.
[03:45:46] I think we've improved and we figured out the solutions for those problems.  But in the meanwhile, a completely different paradigm sprung out, and that's where we have it.  It's good that these different things exist.
[03:45:58] Thank you.
[03:45:59] you
[03:46:07] Thank you.
[03:46:07] Thank you.
[03:46:08] Yeah, yeah, exactly. I'm hoping this gets people thinking, come back, ask more questions. Let's just keep it rolling, right?
[03:46:18] Yes, I will do Cloudflare Pages. It's just, yeah, I've been so used to workers. It looks like Pages is a really nice deployment story, like I just saw in terms of just doing it on GitHub. It probably isn't that much work.
[03:46:33] So yeah, I will add pages.
[03:46:37] Thank you.
[03:46:40] Thank you.
[03:46:41] Thank you.
[03:46:45] Thank you.
[03:46:46] - It was the worst decision I made for moving up. It was miserable. Yeah, I, I,
[03:46:54] Yeah, I mean, KB has its uses.  I'm not sure if databases exactly, but I know they're working on stuff.  So I'm interested to see where that goes.  But I think there's certain practicality, like...
[03:47:07] In my opinion, it takes years to get solid...
[03:47:11] data, but like that's, that's, that's a field that takes a, it takes,  it's not like a, it's not like JavaScript frameworks, right? It takes,  it takes a long time to establish the right, like,
[03:47:24] Databases are not something you just go into...
[03:47:28] you know,
[03:47:29] willy-nilly, so to speak. And I think it's just going to take some time on that side.
[03:47:41] Is it here? Sorry, I'm like catching up. I'm like 10 minutes behind. Streaming would be slower than already live JS runtime in the browser requesting updated data.
[03:47:50] Yeah, I mean, streaming is only really a consideration on mostly initial data, right?
[03:47:57] So,
[03:47:58] Yeah, I think...
[03:48:02] Yeah, the situation that I was explaining with streaming 10 minutes ago when this comment was made was more along the lines of like, how should I put it? It was more along the lines of...
[03:48:14] Thank you.
[03:48:14] Yeah.
[03:48:15] like,
[03:48:16] when you don't have the data available at that point, you can just send
[03:48:22] you know, page layouts and it's,
[03:48:25] Like, there's other things that can kind of go out there.  But you're right.  There's nothing we can do about that latency it's going to take to get to the database.  We can just make it feel nicer.
[03:48:36] But ultimately, it doesn't make things any faster.
[03:48:41] Thank you.
[03:48:41] Um,
[03:48:44] Thank you.
[03:48:45] I...
[03:48:46] Yeah.
[03:48:48] Yeah.
[03:48:55] Okay, so back to here. It's back to the routing thing. We do code splitting where each route is an entry, but the depth graph doesn't know which modules invoke
[03:49:06] which routes because we use the routes.
[03:49:18] Yeah, I am...
[03:49:23] Yeah, I'm not sure if I completely...
[03:49:27] following here.  Because we do...
[03:49:32] Like I use plugins that analyze the bundle and then look at the route data paths from the code splitting to...
[03:49:40] to see what assets are loaded and stuff.
[03:49:43] I think there's tools working here.  I'm not sure I'm completely following what was...
[03:49:47] what's being said here, but I just wanted to--
[03:49:51] like,
[03:49:51] I think routing is given a lot of consideration in terms of how bundling and asset handling is.
[03:49:59] Thank you.
[03:50:00] Thank you.
[03:50:00] Bye.
[03:50:01] We did talk about this a bit at the beginning.
[03:50:05] Um,
[03:50:06] I have to admit, I don't have the biggest comment on this.  I'm not sure this achieves what people want it to achieve  or think that it achieves.  I think, though, that for the people who are using JS docs  already case, it's kind of nice.  But beyond that, I don't think this is necessarily  what everyone expects it to be.  But maybe that's OK.
[03:50:32] Maybe I just don't care enough because I'm probably not going to use it anyway. So...
[03:50:37] Yeah, but I did cover this a bit at the beginning of the stream.
[03:50:42] Okay, I think I've caught up to the end of the comments. That was a bit of a spiel there.
[03:50:50] It's good, yeah. No, I think I got what I wanted out as Svelte kit. I know there's more things to check out, but
[03:50:58] That was what I mostly wanted. I wanted to see how I was handling the kinesthetic routes and I wanted to see the performance. I wanted to see what the author experience was. I think all the stuff was really good. I was confused a bit, a couple points, you know, around the whole like,
[03:51:10] loaders, I think those are new or not loaders, sorry, that's the term.
[03:51:15] They have two concepts for data loading  in the page. While they're
[03:51:19] Yeah, they seem kind of conflicting.
[03:51:23] So, yeah, I think
[03:51:29] I can see why. It's just, yeah, I think,  I think what's happened is the targets mood during the course of developing  this. And they're just kind of like, Oh yeah, we need this too. And this,  and this has happened on solid start as well. I think it just,  we just need a little time kind of refine things out. But I,  I think salt gets already in a really good place.  It was really easy for me to pick up and whatnot. So I think it's,
[03:51:50] I think, and it looks like they are starting to play  with some of the exciting stuff  that I was hoping they were starting to play with.  So that is really cool.
[03:51:59] So what do we got here?
[03:52:02] uh
[03:52:03] I should try next. Yeah. Um,
[03:52:06] view for some reason I have just a hard time with for some reason. Even though Composition API is like,
[03:52:13] like my jam, like it's like, it's, it's like the same as solid, you know, for some reason, view templates and authoring and everything just feels so awkward and every time I try and go in, I haven't tried to be fair I haven't tried next js either so I missed the big ones.
[03:52:30] I was so focused. Next always was hard for me to get into because I, I, I kind of understood what suspense meant and transitions and all the stuff that React's chord was doing. So I, I,
[03:52:40] InSolid was kind of doing the same stuff. So I was trying to design a framework that would be built for those technologies. And Next.js always, I looked at it and I was like, oh, this is like completely in the past. Like, you're just not using the right patterns.  By the time I got into this, like I got into this game late. I got really heavily into SSR and JavaScript in 2019 time period. And Next had been established already for three years. But like,
[03:53:03] Yeah, I guess 2018 time period.  But at that point, I was just like,  yeah, next is not the way it is.  But they are changing.  I just...
[03:53:11] I just...
[03:53:13] got into it and Nux was kind of also on that boat. If I have time, but it's kind of like, if I have time I'll look at Ember and
[03:53:22] And
[03:53:23] or actually November, I mean Angular as well.
[03:53:26] soon.
[03:53:27] If not next stream, the stream after. I expect some solid content in the next couple streams. A lot's happened on the solid side and we've been exploring other frameworks. It's time to come home and kind of bring it all together. I mean, there's a reason we've been exploring. This is all...
[03:53:42] building towards the stuff we've been doing with Solid.  And so you can expect some more Solid content coming very soon.
[03:53:52] Thank you.
[03:53:53] All right. Yeah. Thanks for joining us tonight. Good night.
[03:53:57] Thank you.
[03:53:58] Mm-hmm.
[03:53:59] Can we do a stream together where I show off Next plus TRPC?
[03:54:03] Yeah, I mean...
[03:54:05] I saw you do solid with TRPC.
[03:54:09] And I think the patterns of next, like, they are fine.  I just meant, like, next is actually a core thing.  Like, get server props and all that kind of crap is...
[03:54:17] is just that. I think you build great apps with that. I just meant like, I think some of the core data loading primitives and all that kind of stuff, it's all changing.
[03:54:28] Thank you.
[03:54:32] Sure.
[03:54:41] Yeah, this is, it's like with any other kind of technology. It is interesting though, because it's, do you know what Edge is?
[03:54:52] It's the new JAMstack.
[03:54:54] It doesn't really suit everyone, but it's going to like...
[03:54:58] I think it's for like...
[03:55:01] I'm kind of surprised Netlify isn't there yet. I think this is going to be their jam. It's just going to be really easy to just deploy a function at the edge, CDN, get that whole feel. And except now instead of the client doing the dynamic parts, the edge functions doing the dynamic parts. It just fits really nice.
[03:55:18] I think...
[03:55:20] I think...
[03:55:22] it's going to take more work for this to actually be,
[03:55:25] the go-to application framework and the thing that scales. I think there's more pieces. But
[03:55:31] It is really cool.
[03:55:34] to have a network of compute so close to you.
[03:55:38] I feel like we can do something with that. It's just, it's not, it's not there yet.
[03:55:42] Thank you.
[03:55:44] Yeah, night. Everyone kind of signing off. We're getting to the four hour point. It's the longest solo stream I think I've done.
[03:55:51] Yeah.
[03:55:52] Yeah, yeah. I mean, it was good for its time, but like there's a lot of bad patterns around that. Like people, what's it called, like React pre-pass and stuff, where let's render the app once to figure out what the data fetching is and then render it again. Like just, I mean, it's fine, but just stuff like that is just not, like there's a reason React team's been spending years actually solving these problems.
[03:56:22] they're tied to the future.  Just like you see the patterns Svelte kit.
[03:56:27] Next is going to be the is basically the official React core team meta framework. It does put Remix a little bit at odds as React goes from a library to a framework more and Next is kind of that framework. So
[03:56:40] I think they'll work together, but I think if you felt friction about new React features like partial...
[03:56:48] you know, React server components  that's streaming from Remix.  I think it's just a sense or feel that React's
[03:56:54] picking favorites.
[03:56:57] You know,
[03:57:03] Thank you.
[03:57:05] Wait, what? I mean, it's kind of the same thing, right? Like you just view the edge as like a CDN kind of.
[03:57:13] And then,
[03:57:15] Yeah, I'm not quite sure I follow that one.
[03:57:25] Thank you.
[03:57:25] Thank you.
[03:57:27] If you do use in-sailies, then you can literally just push it to a CDN.
[03:57:33] Yeah, I mean...
[03:57:34] Well, I mean, there's still some latency, right?
[03:57:42] I mean, even if not, it depends on if the data is on demand or not.  I don't know if centralization is a thing.  I mean, obviously, that's a latency kick, but I mean,
[03:57:52] Like what I'm getting at is if you had Jamstack,
[03:57:55] you statically rendered most of your page, maybe,  and then you dynamically loaded some data on top.  I'm just saying that dynamic part
[03:58:01] Now,
[03:58:03] maybe is fetched at the worker level,  so you remove some of that cascading waterfall.  So essentially hit the edge function, return the page,  start streaming.
[03:58:17] in that data. So you start fetching on request time instead of waiting for the page to get to the  browser, then requesting the JavaScript, then running the JavaScript, then starting to fetch  to some data that's far away.
[03:58:27] It's just optimizing that kind of like static app shell kind of thing.
[03:58:35] Thank you.
[03:58:36] Yeah, I
[03:58:37] Yeah, I mean, but...
[03:58:40] I don't know if they're ready yet, too. I think that's a big bet on the future of React, too. I've seen people push up against it, like not like what React's doing and actually like server props.  You know, I've had even people in the solid community kind of being like, you should add Git server or whatever, static props or whatever the whole thing is to solid start. I'm like, no, I'm not doing that. But like they really believed in it. So, yeah.
[03:59:05] Yeah.
[03:59:09] Right, but I'm saying in Jamstack it was also fetching. All we're doing is, it's the same thing, we're just fetching sooner.
[03:59:18] Like you always presumably had some, like you could have a perfectly static page, sure.  But I'm saying is if you were fetching from a database, we just get the fetch from the database sooner.
[03:59:31] Like, I don't –
[03:59:35] I don't see how it's not a positive to use the, you know,
[03:59:41] the edge function here because we're just removing a bit of the handshaking, and we're just getting the day going sooner.
[03:59:51] Thank you.
[03:59:58] Thank you.
[04:00:00] Let's see. There'd be no need to cache something like user safe profile there.
[04:00:04] there.
[04:00:05] That's right.
[04:00:07] Thank you.
[04:00:09] Yeah, I mean...
[04:00:13] Thank you.
[04:00:15] I guess the edge itself doesn't change that equation. You could have already been doing that somewhere else. It's just the speediness of the initial response, right? To me, that's why I view it a lot like Jamstack. It's the stuff that's static.
[04:00:34] you're getting basically the same time,  and you're doing the dynamic stuff at the first request.  It's just-- it's minor, I suppose.  But it's like it's still happening sooner.
[04:00:56] Thank you.
[04:00:56] I just came in. What is self and why is self better?
[04:01:03] Oh, God.
[04:01:06] I don't know. I need more specific than that.
[04:01:16] Thank you.
[04:01:17] - So you didn't have an introduction,  the community was so slow at the point you had to manage.
[04:01:22] tomorrow.
[04:01:24] Mm-hmm.
[04:01:26] Yeah.
[04:01:28] Mm-hmm.
[04:01:31] Thank you.
[04:01:40] Okay, so what you're saying is you might as well just do everything. Yeah, I'm mostly concerned on the initial response to like...
[04:01:53] Yeah, it depends where the bottle--  you saw my streaming examples, right?
[04:01:58] You can load the HTML.  You can start sending the static assets, the CSS,  the JavaScript sooner.
[04:02:06] And
[04:02:09] That's mostly what I've been getting at, right?
[04:02:14] And if you can respond sooner and get that in place, it kind of, the data fetching is happening anyways. I suppose what you're saying is the handshake from the edge to initiate a
[04:02:29] is that much slower.
[04:02:32] like we're just pushing the latency back on the data somewhere else.  So even if we can load the assets in the browser,
[04:02:39] sooner.
[04:02:41] the database is taking longer for the data to come in.
[04:02:49] Thank you.
[04:02:53] Yeah, I mean, I think streaming is a big part of it.
[04:02:58] And yes,
[04:03:03] Thank you.
[04:03:05] Thank you.
[04:03:06] Thank you.
[04:03:07] Thank you.
[04:03:09] Thank you.
[04:03:12] Thank you.
[04:03:15] Thank you.
[04:03:16] Thank you.
[04:03:18] I'm just going to let you guys play out these comments here.  So get to the end of it.
[04:03:28] Yeah. As I mentioned
[04:03:35] already-- maybe not on this stream, actually.  It was when I was talking to Jason on Jason's AMA.
[04:03:43] The data fetching part is still obviously...
[04:03:46] The reason everyone's been trying to work on this, and I honestly don't know if there's a good solve, because even with distributed databases and capabilities like this, there's still certain industries and certain things where data privacy, data security are actually going to play in as a big piece of it.
[04:04:08] I don't even know how distributable some of this stuff is. I think basically, at least for now,  Edge is kind of like a toy where we get to try some stuff and from like a benchmarker's
[04:04:20] standpoint, like someone just kind of playing with like pure mechanics, it's very interesting.  You can see the potential there, but
[04:04:30] there like any of this new stuff there's definitely pieces that are missing um
[04:04:35] So I don't know.  We could probably go on about this for a while.
[04:04:42] Yeah, because I think we've stopped talking about Svelte and this stuff like 30 minutes ago.  So I'm going to end the stream now because this went on kind of a funny tangent.  But thank you all for joining.
[04:04:55] Thank you for asking your questions.
[04:04:58] The next couple of weeks, we should be bringing in some more solid content again.  So look forward to it.  All right.
[04:05:07] Thank you all.
[04:05:08] Have a good night.
[04:05:09] Thank you.
[04:05:10] Thank you.