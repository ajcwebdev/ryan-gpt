---
title: "Compilation in JavaScript Frameworks"
slug: "2021-12-11-compilation-in-javascript-frameworks"
duration: "3:41:54"
channel: "Ryan Carniato"
url: "https://www.youtube.com/watch?v=FB_kBYO_vIw"
publishDate: "2021-12-11"
thumbnail: "https://i.ytimg.com/vi/FB_kBYO_vIw/hqdefault.jpg"
channelURL: "https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw"
description: "A lot of recent talk and even my own focus has been around compilation in JavaScript frameworks. Truthfully tooling extends throughout the whole toolchain to the point what you put in is nothing like what you get out. We will look at the progression of compilation techniques and the impact on how we approach developing web applications.

[0:00] Introduction
[4:17] This Week in JavaScript
[42:53] Introduction to Compilation
[45:43] History of Compilation in JavaScript
[57:08] Early Templates
[1:06:47] JSX/HyperScript
[1:10:04] Tagged Template Literals
[1:26:07] Solid Templates
[1:33:54] Svelte Templates
[1:44:11] React Forget
[1:46:50] JSX vs DSLs
[1:51:16] SSR Templates
[1:53:35] Frameworks as a Language
[2:12:53] The Marko Language 
[2:20:36] Aggressive Colocation
[2:31:14] React Forget Example Revisited
[2:36:05] Components are Pure Overhead
[2:44:28] Sub-Component Partial Hydration
[2:57:30] Fine-Grained FTW
[3:05:54] Is Syntax just Superficial?
[3:13:55] Innovation in Contradiction
[3:16:41] Language vs Paradigm
[3:21:03] Product of their Environment
[3:26:45] ASTExplorer.net
[3:33:08] Binding Analysis
[3:38:35] Mitosis
[3:41:16] Ending"
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
[00:00:02] Hello, welcome to my stream tonight.
[00:00:05] Thank you.
[00:00:06] I'm going to give it a couple minutes as always.
[00:00:11] It's been kind of a long week.
[00:00:13] Gotta say.
[00:00:14] My hair is sticking up on the back here.  I've been up to 3 a.m.  I feel like every single day I've been working on...
[00:00:22] error boundaries with suspense in solid server-side rendering, essentially. Error boundaries through streaming suspense boundaries. It's pretty tricky stuff. And that's just like every single day. And at work, it was a long week. Pushed the end. I was actually working on a
[00:00:46] GraphQL client.
[00:00:48] Um.
[00:00:49] And it was an interesting endeavor because it was based on...
[00:00:58] for Marco, and we wanted an isomorphic client that supported both streaming and partial hydration, which is a
[00:01:06] Pretty tricky thing to pull off.
[00:01:12] Hi, welcome. Yeah.  Anyone else to come and say hi in the chat.
[00:01:15] But, yeah, just kill some time here while people join.
[00:01:21] Maybe I'll share my screen here for a second.
[00:01:26] Yeah.
[00:01:27] Thank you.
[00:01:27] Thank you.
[00:01:29] Thank you.
[00:01:31] Thank you.
[00:01:32] Yeah, no, as I was saying, working on a GraphQL setup for Marco, and I managed to publish it literally at 5:00 PM, like at the end of the workday, just as I was doing. It's just a purple wrapper, but it was surprisingly tricky to do because the truth of the matter is a lot of streaming solutions
[00:01:59] like a lot of solutions don't support streaming yet.  So trying to make something work that supports that with the cache for GraphQL isomorphically was actually tricky because there's no guarantee that all the data would be finished at the time you wanted to preset the cache.  So you have to bring the cache in incrementally and even more so, which was kind of tricky.
[00:02:20] was and one thing that we were doing here with is,
[00:02:26] not even sending the client to the browser if there's nothing stateful so that it could support partial hydration.  So just having GraphQL queries on your page doesn't mean that you need to actually send it to the browser.  And Marco's compiler can automatically detect those conditions and know whether or not to send the client to the browser or not.  So, yeah, it was a lot of fun kind of working out those problems.
[00:02:56] and I managed to get the streaming error boundaries. Everything's working except for ironically the simplest case, which is the synchronous case.
[00:03:09] Thank you.
[00:03:10] You're right.  OK.  Yeah, no, it was actually kind of a challenging--
[00:03:19] It is really interesting, these streaming problems, because they're a whole new realm.  Like, things just work differently when you can't depend on
[00:03:28] everything being finished or present ahead of time.  And I was playing with Remix last week, as many of you know, and
[00:03:36] Nice. Hey. And it was actually
[00:03:40] really cool the way they handle their boundaries and handled errors.  And I was like, oh, man, that reminds me I have to I need to go back and look at our solution for solid.  And it's timely because we're working on a big improvement to streaming.  And Cloudflare is actually I found out today.  I knew already, but they're already starting to beta test the new readable stream API.  So I'm going to get some early access to that and see how we can use that with solid.  So I'm pretty stoked about that.
[00:04:08] Okay, so let's start how I start every stream  now that I've kind of bantered for a little bit  and talk about this week in JavaScript.
[00:04:19] This week in JavaScript was a funny one. It really started
[00:04:25] where we left off last stream.
[00:04:29] We were working on Remix.
[00:04:30] What we did live on stream was make a hacker news demo.
[00:04:34] And, you know, pretty typical demo. I chose it specifically because I'd already done the same demo on Solid Start. And because we also have nested routing in Solid, and we, you know, have the data loading and the paralyzed, like a lot of the, like,
[00:04:49] like that kind of core feature that Remix is built on.  I knew that just porting the solid project over would be pretty easy.  And it was a couple of little snags, you know, when you get used to new stuff,  haven't played with it before, but it went smooth.  Performance is good. I was very, very happy with what we saw with Remix.
[00:05:06] And
[00:05:07] As it turned out, Michael Jackson saw the stream and we actually talked a little bit about it and they were actually doing the same thing.  They had the same idea. They were preparing their own Hacker News clone and.
[00:05:21] they posted it on Twitter and wrote an article about it because they decide, you know, kind of like we did towards the end of the stream, like, oh, let's pull out that Next.js React server component streaming demo and, you know, compare it.
[00:05:36] As we know, like
[00:05:37] That demo
[00:05:39] wasn't the most impressive in terms of performance.
[00:05:43] And actually after this article got heat, Dan kind of went on to Vercel and was like, hey, guys, I think we should change the demo to make it more realistic to the expectations because it's getting kind of cited as showing like a
[00:06:00] you know, a bad example of, you know, like react server components are streaming and
[00:06:06] Yeah.
[00:06:07] It definitely needed a little bit of work, and it looks like they're fixing it up. But conversely, Dan came back to look at the remix demo, and he noticed something about their remix demo.
[00:06:17] And it took me a while to notice it at first because I was like, wow, the scores are really good. It was actually better than the
[00:06:22] performing the demo that we put together,
[00:06:25] And I was like, what's their secret?  Well, their secret was they turned off the JavaScript.
[00:06:30] They removed the script tag. And, you know, that's something you can do with Remix, something you can do with a solid start. I mean, technically it's something you can do with any SPA framework, but Remix was built in a certain way where, you know, especially for forms and for, you know, anchors and everything that it just works with JavaScript turned off. And, you know,
[00:06:50] I think that's really cool and it's one of the best features about Remix, but it also was kind of cheating the comparison. You have like this
[00:06:57] React server component demo going on with streaming that was
[00:07:02] maybe not quite the best patterns i noticed for example they were using defer instead of async  tags so they were actually waiting to hydrate until the end and like it was you know it wasn't  the best demonstration and putting against something you know uh that had no javascript  on it what tipped me off was i wasn't even looking at the javascript panel i'm like  i just put it through the score and it scored the same as marco and i was like
[00:07:21] Wow.
[00:07:23] How do you do that? Well, yeah, no JavaScript, right?  I think it's a cool trick and Remix has kind of been pushing it a lot this week  and kind of talking about those kind of benefits.  I think the no JavaScript trick, though, is really
[00:07:35] mostly just a trick.
[00:07:36] to be fair like there are cases where you want that behavior built into your framework you want  that ability and you want to promote people to have the best patterns in case javascript does  fail and you know keep things responsible but like turning it off as a performance trick is kind of
[00:07:50] You don't do that. You're not going to actually do that. You're going to have JavaScript on and
[00:07:56] You know, it's kind of just like skirting around the thing.  They went back after Dan made the PR to note that their upvote wasn't...
[00:08:07] especially when it wasn't interactive, which forced them to put the jazz records on the page.  Because unlike Marco or Astro, Remix still reacts.  And to be fair, server components get around this a little bit.  But generally speaking, if you have...
[00:08:22] interactive stuff on your page you need to send all the javascript and once we did that the the  updated remix demo performed very similar to our netlify demo and uh it's pretty representative of  what was going on um you know last last week uh with with what we were doing too so um it's really  cool though but as i said i got to talk to michael jackson and a little bit actually to jacob ebay  too reached out and who knows remix was solid they're pretty similar we have the same kind of uh
[00:08:52] background. So I'm hoping to see where that goes and see if that is a possibility. I think both  sides are really interested about the possibility of kind of seeing that happen. So, you know,  something to our eye out for the future.
[00:09:04] So,
[00:09:06] you know, it's kind of cool to kind of see the continuation of the conversation from last week.  What else happened this week? Well,
[00:09:14] One other thing that happened this week that was
[00:09:18] there's this dialogue going around because, you know, continuing with the whole Bersel thing and, you know, everything was moving to Rust, right? That's the conversation. And I forget where I saw it. It was on a thread. And someone said, let's rewrite React in Rust. And I was like, I was like, I first wrote a comment that was like, I'm pretty sure it would be slower. But then I realized like, okay, I mean, maybe that's just me being a jerk about it.
[00:09:48] Um,
[00:09:51] Thank you.
[00:09:52] Thank you.
[00:09:52] Thank you.
[00:09:54] Possibly. I mean, the core to it is the nested routing and having a solution for that. They said that their stuff is framework agnostic mostly in their whole transitions. So if we get the nested routing figured out, I think that is a possibility too.
[00:10:13] Um,
[00:10:14] Thank you.
[00:10:15] Thank you.
[00:10:16] Thank you for not rewriting React and Rust. Yeah, no. Yeah. Did you know that's today's stream? We're writing React and Rust. No. Compilation is a big topic and we'll get there in a second. But this all kind of ties into where I'm going with this, right?
[00:10:34] Because
[00:10:36] that was the conversation.  And I was like, well, I haven't looked that much recently.  How are JavaScript frameworks doing in Rust?  And I posted this thing up and I was very selective  what I showed in this demo because you have vanilla JS.
[00:10:51] Thank you.
[00:10:53] I mean,
[00:10:54] It almost already exists and actually can talk a bit to that. If you see this library here, Sycamore,
[00:11:00] Um,
[00:11:01] This guy who authored it has come on our Discord a lot and asked about the detail. He kind of reversed engineered part of the DOM expression library and then rewrote it in Rust. Sycamore has signals and stuff. It's basically solid in Rust. It's a little bit different. There's different choices they have to make because it's Rust.
[00:11:20] Um,
[00:11:21] But sycamore is actually kind of along the same lines, kind of similar idea to solid and rust.
[00:11:30] Mm.
[00:11:32] Thank you.
[00:11:33] Can you guys hear that? It looks like my heat just kicked in. And it hasn't done that before while I've been on stream.
[00:11:39] I'm not sure. Is it coming through?  Can you hear the...
[00:11:42] The...
[00:11:43] the background noise, it's kind of unfortunate.
[00:11:46] I've been doing this since September, and this hasn't come on while I was streaming.
[00:11:51] but
[00:11:51] Yeah.
[00:11:52] Do let me know in the chat if you can hear that, and I'll have to think of what I can do about that.
[00:11:57] -
[00:11:59] Anyways, this is a fine demo 'cause I liked showing
[00:12:04] I like showing it
[00:12:07] in here because, you know, obviously, Sala does very well. Because the first couple libraries here, Wasm, Bindgen, and Standard Web, are like the vanilla JS. Like, they're the ones you should be comparing to vanilla. And it's not the Dominator, Sycamore, and U that you actually have a, you know, something that actually
[00:12:25] Um,
[00:12:29] you know, until we have something that actually is like a higher level framework.  So when you look at it, solid is what, seven percent
[00:12:37] roughly
[00:12:38] slower than vanilla.
[00:12:40] Dominator is still 13% slower than WasmBindGen.
[00:12:49] Thank you. I don't have the best streaming setup. I've got some audio people on here and people who do other streams. You've got Theo who worked at Twitter for ages and also does a lot of streaming and audio stuff.
[00:13:01] And then obviously,
[00:13:05] It's funny, I didn't name, I was Discordaholic on Discord here, who also,
[00:13:11] who also does a lot of streaming.
[00:13:16] Maybe React and Solid and Rust makes sense only for SSR. Yeah. And there's some interesting work being done on WebAssembly, too, and AssemblyScript. Part of what you might have seen is we've been doing a really heavy overhaul of TypeScript and Solid recently. And part of that is in hopes of supporting WebAssembly or, sorry, AssemblyScripts in
[00:13:39] in the near future to be able to even look at doing this kind of compilation for server-side rendering.
[00:13:45] Yes, I am on a Mac. M1 MacBook Air, 16 gig.
[00:13:51] Probably not the only person in this stream who has that computer.
[00:13:55] Um,
[00:13:56] But...
[00:14:02] Yeah, I mean, if you guys know something like StreamYard that's better, let me know.  I mean, I guess I did pay for it.
[00:14:08] I get some money through, you know, open collective and stuff.  And I think this is probably a worthwhile investment on that kind of side.
[00:14:18] But to put this a bit better in the whole picture, just for a second, I'll just pull up the actual JS framework benchmark before we kind of move on, just to kind of
[00:14:29] exemplify like how this looks in the bigger picture and which implementations
[00:14:36] Yeah, I can't.
[00:14:38] do none because of these.  You can see 772 means this is like a vanilla implementation.  It basically uses stuff directly.
[00:14:48] For that reason.
[00:14:50] I need to include these because
[00:14:52] For the longest time, these vanilla implementations were slower than solid
[00:14:58] was. But just to kind of put this perspective, the vanilla
[00:15:02] WebAssembly is about here, which look, all of these, it's a tie across the board between these at 107.
[00:15:09] And then
[00:15:12] if you get kind of go sideways a bit,
[00:15:14] You see some of the other fine-grained libraries, some of the fastest VDOM libraries, like
[00:15:21] Petit Dom and Evie.
[00:15:24] Thank you.
[00:15:24] Then you kind of get into Inferno,
[00:15:28] And then you get to Dominator. So Inferno is also kind of out ahead of these Rust libraries. And then you get to
[00:15:37] Some old lit
[00:15:38] ones that are kind of hacking it a bit too, and then Sycamore
[00:15:43] And then
[00:15:44] felt.
[00:15:45] and view. So stealth and view come in around 125. They're actually very close these days.
[00:15:51] And why, we'll see in a bit later in the stream.  But essentially,
[00:15:56] Thank you.
[00:15:58] - It's too.
[00:16:00] I'm still sad about Jyothai's place here.
[00:16:03] Jyotai is interesting and I could talk about that. I actually wrote  a benchmark implementation for Recoil and then I just didn't submit it.
[00:16:13] Um.
[00:16:15] Okay.
[00:16:16] I feel like Benchmark was written specifically to screw over to the same models. I mean,  maybe. It just...
[00:16:23] Like, I wrote it...
[00:16:25] I don't know. I mean, I like this benchmark because
[00:16:30] It's
[00:16:30] not a it's not like a snapshot benchmark. A lot of them are just like splatter the screen with these big data things. This is like taking to do MBC, like taking a normal list and just
[00:16:42] doing stuff with it, kind of in a normal, like updating a row or swapping it, like fairly normal thing.  It is an extreme case because there's, you know, a thousand rows and we're...
[00:16:53] putting it on a mobile device that's out in outer space with a poor network. Like, you know what I mean? Like, we're making it go to the extreme to kind of exemplify the differences. But like,
[00:17:07] like if Jyoti, like here's the thing, any state library,
[00:17:12] in React is going to be slower than React. Like the change management that comes from React core,  if you can run in a state library, you can write it manually. So state libraries are  a convenience thing. Like the core framework is always going to be your limitation.
[00:17:25] And from that perspective, like I haven't looked at Joe Tyre recently in here, like
[00:17:30] React Focal. I had some trouble with what was the other one?
[00:17:35] FITFALTO
[00:17:37] React Recoil, when I was doing Recoil, I was having some trouble.
[00:17:41] basically without selectors, these kind of
[00:17:45] libraries just get killed essentially, because they're not granular enough.
[00:17:53] Well, the thing is, composable atomic state primitives are great.  Right. Fine grained reactivity, very similar
[00:18:03] concept. The problem is you need memoization.
[00:18:07] which also ties into what we'll be talking about in a bit too. But like you need, you need, even just because you drive stuff, you still need a way of like,
[00:18:15] React is very pure, classically, this pure derivation immutable
[00:18:21] - Cool.
[00:18:22] The problem is, yeah, you need to look at memorization and select your APIs. And that was sort of why I had a hard time with Recoil. And I think Jyotai has a similar approach.
[00:18:33] constraint.
[00:18:34] What's the metric?
[00:18:39] What does the benchmark do exactly? Convert it to a WebAssembly and run something? No, no, no. That's the thing. This benchmark is just a JavaScript benchmark. It literally, the reason I'm bringing up Rust is because in the end, everything is JavaScript that runs. So, or like it's in the browser. So this is just taking Rust frameworks.
[00:18:58] and putting them against
[00:18:59] like actual javascript frameworks like it's kind of impressive
[00:19:04] that Dominator and Sycamore outperform Svelte, the most popular. I don't consider Soled yet in that group.
[00:19:13] the fastest rust libraries have pulled out um in front of the fastest javascript libraries other  than like
[00:19:22] Inferno and solid.
[00:19:25] like it is legit. The problem is, can we can we look down here?  Theo was mentioning this earlier. I mean, it's not bad.
[00:19:32] min zipped and everything uh we're coming at or minified or whatever it's coming at 189.2 so
[00:19:38] but to just put it like you can see in this in this crowd it's much bigger it's like 40 kilobytes
[00:19:44] um
[00:19:47] you know, minified and zipped bigger than than solid is. But I mean,
[00:19:53] Let's or any of these, these are all like 40, 50. Svelte will be down there too. But let's go down here on the other side.
[00:20:01] I mean,
[00:20:03] React ain't doing too swell either. Where is it? React hooks, 260. Like to be fair,  that's just vanilla. So let's look at something like dominator.
[00:20:14] Yeah, yeah, I mean, they've been working on this. Let's look at something like Dominator, like an actual library. Okay, see, yeah, there we go. See, I think the WebAssembly version here has been kind of tweaked down to a point.
[00:20:28] You know, like I think there's people who work on this benchmark are
[00:20:34] actual people who like know what they're doing with this stuff. I wouldn't make, it's not just that I like the series of tests here. Rich Harris committed this felt thing. Evan Yu when new version of you came out, he made the PR himself.
[00:20:46] Like this benchmark actually
[00:20:52] actually has the creators of the framework working on it, actually has -- Justin gave input on the  lit one. Everybody's been here except the Angular team.
[00:21:02] It's funny, I talked to the Angular team a couple weeks ago about that. I even bugged Misco about at one point we were talking about QUIC, and I'm like, why do you guys just not come play, right? But Angular is in here, but it wasn't written by the Angular team.
[00:21:15] P3 reactivity's API and so follow,  they're all pretty similar outside.  I like it, yeah.  I love this language thing.  And we're gonna, again, get to that in a minute.  This is gonna be a very ambitious stream.
[00:21:25] Thank you.
[00:21:26] Yeah, no, exactly. And I mean, sure, this is a stupid test in a sense.
[00:21:31] And like, you know, it actually came up in something else that I was I was had a conversation or had a conversation also this week. Right. I told you I was talking to Michael Jackson about remix, but I also had a chance to talk to Dan Abramoff, which I'll talk about in a minute here. But I just want to kind of show that. Yeah, I mean, but this isn't that much bigger than react to 74. How about how about Sigmar? But, you know, Sigmar is getting a little bigger. But, you know,
[00:22:01] We've lived with worse.
[00:22:03] Hello, Amber.
[00:22:04] I don't even know what to say about that. I don't know what they-- I asked them. I wrote this in the last article. And I mean, I'm a huge fan of the Critters member. I think they're way ahead of their time in their thinking. That'll also come out in this article, or sorry, in the stream. But there's polyfills and who knows what else, but like Ember is a beast. For this simple benchmark, we're pulling in like half a megabyte compressed of JavaScript.
[00:22:33] yeah i don't know but
[00:22:36] yeah i mean i'm just to put in perspective web assembly  maybe not that bad as we we've been saying but on the other hand i do want to point out that
[00:22:46] It's it's.
[00:22:47] it's still core slower than vanilla.js and maybe that'll change i keep on hearing about it but i  think one of the interesting things about this and this comes down to compilation is the javascript  ecosystem has been building kind of into this meta language thing where we're like using the language  to build itself and for that reason stuff has evolved in a very different way than it has so like  these rust frameworks
[00:23:10] don't leverage the same kind of analysis and optimizations that we do in JavaScript, because you write them like a normal Rust program. And like, we were so hyper optimized in this space. That's why there's JavaScript libraries that are like that this close, like 7%, or even 4%, like Mikado here, which is not declarative, quite the same like solid, but so close to vanilla.
[00:23:32] where the gap between like higher level WebAssembly and WASM and BindJet is bigger. You'd think it would be less because when you have the power of, you know, compilation and like this kind of optimization, you know, you think the overhead of the framework abstraction would be less. But we've been so hyper optimized along this path. And through the use of things like compilation,
[00:23:54] and analysis, which we'll be talking about, that that's why, in my opinion, we're like,
[00:24:02] I don't know, even if Wasm gets, say, 10% faster than Vanilla.js, and they get pushed the other way, I'm not sure the WebAssembly frameworks will be faster than Solid.
[00:24:13] You know,
[00:24:14] So yeah, it's going to be interesting.  And as I said, if it ever gets to that point where there is a potential, you know, keep your eye open, so to speak. Right.
[00:24:26] Yeah.
[00:24:27] Thank you.
[00:24:30] What's here?  Size isn't that important when it's just two times  smaller or larger since when...
[00:24:37] Yeah, I mean, size is a tricky, tricky thing. It depends on what the what you're going for. I was saying how like,
[00:24:46] Yeah.
[00:24:47] For Remix, turning off the JavaScript was a difference in the Lighthouse score. It depends on who your customer is and where you're going. Size has been a big focus, maybe a little bit too much, but I think...
[00:25:01] I think it's the natural place right now where JavaScript frameworks are looking to optimize.  We've been adding so many features, making the experience so much better,  making things smaller and actually having less JavaScript throughout the browser is like the new
[00:25:14] place of exploration and one of the types of optimizations  that we're gonna be doing with compilers.  Again, everything this week made me think about compilers,  WebAssembly, Rust, and the next thing, React Conf,  which also happened this week.
[00:25:28] Right.
[00:25:29] Thank you.
[00:25:30] But sorry, I guess the conversation is not quite open over on this. Yes. This is the problem. WebAssembly has to go through the JavaScript layer. They have to do like these references and allocations. And it's nasty. It's funny because the DOM generally like in V8 or whatever is written like in C. So WebAssembly has to jump through this like JavaScript layer.
[00:25:52] hurdle essentially so maybe the performance would be way better
[00:25:56] like even better than 10% of benchmark like this.  And if that happens, then yeah, we're gonna see a shift,  I think maybe on how we look at this.  Like not all WebAssembly has to be huge.  Obviously this is pretty big, but I think I saw something  like in Go that was super small.  It just depends on the way they press the runtimes  of polyfills, honestly, I don't know.
[00:26:15] Thank you.
[00:26:16] Thank you.
[00:26:19] .
[00:26:21] Thank you.
[00:26:22] React is, the only reason I'm chuckling about this one is this takes me back a little bit.
[00:26:31] The day that felt society...
[00:26:34] unfollowed me on Twitter was because
[00:26:38] Someone came in and was like,
[00:26:39] It's...
[00:26:41] Svelte's only two kilobytes, and React is 40-some odd kilobytes.
[00:26:47] And they're right. Because React core library is 3 kilobytes or whatever, but React DOM is 40 kilobytes. So the whole thing is 43 kilobytes or something.
[00:26:57] I was pointing and then I'm like, but you're only counting the three kilobolt part of Svelte. There's also a
[00:27:02] There's also the
[00:27:04] Svelte DOM that's not counted in bundle phobia. And I mean, I'm like, it's still small. Don't get me wrong. It's way smaller. And truthfully, you don't pull it all in because the tree's shaking, but just wanted to mention that. And then that was the end of my relationship with Svelte Society.
[00:27:18] But...
[00:27:21] Yeah, it's a funny one, right?  Dan, basically after React Conf, Theo, who's on here,  was having a space.  And he--
[00:27:34] He essentially, I don't know, Dan crashed. I don't know how it happened. Like he was just doing every Wednesday, Theo does a like a coding dev kind of space where he talks to developers. And first time I heard it was actually talking about game development and that, you know, performance optimizations there. We had this great conversation where we were like, I actually ended up jumping on that one as well, where we're talking about similarities in terms of perspective, in terms of optimization.
[00:28:01] And
[00:28:03] Okay.
[00:28:03] and
[00:28:04] Basically, Dan just jumped on the stream and I was also happened to be on Twitter at the time. So I jumped on the stream and the unfortunate part was I didn't watch React Conf.
[00:28:14] Um,
[00:28:16] Yeah, I mean, to be fair, Theo's going to be doing one of those interviews with Dan for the coding interview. And I...
[00:28:25] um and essentially i guess they've been in contact a bunch recently um and
[00:28:31] And and essentially so they were doing the space and I just jumped in at the perfect moment because they were talking about islands versus react server components, which is like something I've been writing about a whole bunch for a bit here.  And it's funny because I said I didn't watch react comp that much because I eBay had their internal conference exact same day. And I was like, oh, man, and I was actually speaking at it.
[00:29:01] talking about it. And I just had no context, actually missed the whole the whole thing.  And luckily, the conversation in the space is completely off topic.
[00:29:11] So
[00:29:12] essentially, but it did kind of bring up a lot of these things about like benchmarking and whatnot and like the value of the test because Dan told this very
[00:29:23] amazing story that about how they introduced a new feature uh or basically they were trying to fix a  bug and they it was a performance bug so what they did was they completely refactored everything in a way so that um
[00:29:36] how should I put it, like, essentially it would be more performant. They decide, like, we're just going to re-architect this and kind of slide it in and see if it worked. And
[00:29:47] basically the metric that they couldn't really tell if it was better or not from like performance metrics.  They can only tell basically from how people interact with it and less people were liking.  So they're like, oh, likes went down.
[00:30:00] you know, something must be wrong. And it was, they actually
[00:30:04] from looking at
[00:30:06] like the drop in like user metrics, it actually led them to actually eventually finding the bug.  But what they actually ended up having to do is after trying to do all these fixes, unwind it all and then apply things incrementally until they could find the commit, which caused the problem.  And sure enough.
[00:30:23] it was just they'd broken something like it was just like some missing logic that in some edge  case was causing like the button not to be clickable and you know basically this is a story  about uh how they measure at scale because benchmarks like this are kind of a bit silly  by by comparison right like they test a very specific thing and you know you kind of have  these two extremes like the like measuring by like button counts or measuring by the specific test in
[00:30:53] is actually something that's hard to test.
[00:30:57] Oh, I got some comments coming in while I was talking. More important than the framework size is the impact the framework has on your application code you write in for it.
[00:31:07] Yeah, yeah, yeah, yeah, yeah.  I mean, component size and stuff.  And I actually did a comparison about this not that long ago,  where I took--
[00:31:16] love veed everyone's been building stuff and i just took beats kind of vendor bundle on a on a to do  mbc and just did the comparison across and obviously tricks with like partial hydration  the islands can like completely
[00:31:30] change the math completely but even there you could see the difference in approaches on compilation  um affect the component size and that had a bigger impact than the library size um at a certain point  um maybe not that big but when we got to 150 kilobytes of javascript which is you know a big  size you wouldn't necessarily want that to be your main bundle load but easily something you  did over the course of a single page app you know navigating around svelten reacted basically
[00:32:00] big the Svelte components were comparatively.  And it was an interesting study because I didn't know  how the end result was.  I knew Solid was small.  I knew that it had eked out Svelte on the kind of like  lower mid-range because of,
[00:32:12] I've been making the same demos and been doing the Hacker News and all the, like the stream demos, I call them, the one where people can have enough time to make the demo kind of on the stream, but it's not like a real app.  And as it turned out,
[00:32:24] Uh,
[00:32:25] Preact ended up being kind of the winner of that day because they kind of snuck in a little bit smaller and solid, a little bigger in the runtime and where the convergent points came in. But I mean, you know, I'm nickel and diming here. It's just interesting to see that like
[00:32:39] your bundle phobia isn't like what's dictating this and
[00:32:44] compilation and approach that actually have a big impact on how this turns out.
[00:32:50] Thank you.
[00:32:52] - Oh, what do you got?  We got Jason Miller here, speaking of Preact.
[00:32:58] WellZone might end up being net faster for apps  where all the logic isn't WellZone, yeah.
[00:33:02] Okay.
[00:33:04] Yeah, yeah, yeah. That's been the suspicion. And the thing is, JavaScript is so accessible to people. I don't know if this ever changes, but
[00:33:14] like this isn't like a replacement thing.  There might be cases where like,
[00:33:19] Who knows, like when that happens, when like a pure rust thing and those like finding layers disappear, you might have like specialized frameworks, you know, built in rust and whatever, and they'll be targeted to be like, this is the.
[00:33:31] this is how you build super great whatever apps.  But the lovely thing about JavaScript, as we all know, is
[00:33:42] I'm on the wrong window. Sorry. One second.  I was trying to do this in one flight.  You just do this, right? Hello, JavaScript.
[00:33:51] like
[00:33:54] you know oh i'm terrible and it's his high back right like this is this is kind of  the thing you know that makes the web great so yeah it is interesting though definitely
[00:34:11] Thank you.
[00:34:12] Thank you.
[00:34:13] Thank you.
[00:34:14] Yeah, yeah. I mean, yeah, I jumped on the stream just because I want to hear what Dan was saying and maybe catch up on what I missed about React comp. And I literally walked into the islands versus React server components conversation, which is
[00:34:27] It was interesting.  If I had known the content of React Conf,  I might have actually pressed down on the compilation stuff  and some of the other pieces.  It's interesting, though, because like--
[00:34:40] Thank you.
[00:34:41] Yeah, very similar things that are kind of targeted at different stories like
[00:34:46] Server components, because of their ability to
[00:34:50] you know, not ship parts of the page. You kind of go, oh, it's like partial hydration or islands or maybe in reverse, like, you know, you're shooting a bunch of holes through something instead of, it's not islands, it's more like Swiss cheese, right? But,
[00:35:03] The funny thing is that it completely changes  the initial load dynamic.  Like, you know, you need the JavaScript upfront  to orchestrate more and stuff like that.  So it's gonna be interesting to see
[00:35:14] like where that fits in or how these hybrids form.  Because like, you know, I've been looking a lot of quick  and it has a really nice way of kind of scaling in reverse.  Unlike most approaches where you can actually hydrate inside out.
[00:35:27] You know, maybe you can hydrate a component, then get the router and then, you know, route away to a different page. It's very interesting to see kind of where that goes. But it,
[00:35:40] I for me, honestly, it's all about keeping your ear to the ground and just seeing the different approaches that are going on.  So much of the stuff already exists before it gets kind of shown in the big framework drop, you know, like, like there's a lot of experiments going on and that's
[00:35:59] I guess when you're interacting with people who are always kind of looking for cutting edge solutions or participating things like these benchmarks stuff, you start seeing these things kind of before they happen.  And then that's a big part of what informs a lot of the decisions and directions of the solid and.
[00:36:13] you know,
[00:36:14] Thank you.
[00:36:15] I find that that part very, very informative.  Like the conferences don't always capture that because by the time something's in a conference, like it's already kind of an old idea.
[00:36:27] And, you know,
[00:36:30] Thank you.
[00:36:32] Thank you.
[00:36:33] Yeah.
[00:36:35] yeah yeah yeah and i i i was sorry i i i will get back to that i get kind of scatterbrained a bit but  yeah the this is about the algorithm we used to diff the the the lists um uh lowest common sequence  or whatever or shortest common sequence uh it it's basically the the the the approach to make  sure that like um sorting lists um which is kind of core to the the swap rows benchmark it finally
[00:37:05] as much. That's why everyone's kind of similar scored. It's the most like
[00:37:09] maybe computational part of like a benchmark like this might, you know,  opportunities to kind of offload that. I've been also looking at offloading like, you know,
[00:37:19] maybe there's just expensive computation type stuff like if the end user the way they just kind of like
[00:37:23] go like this, kind of send this somewhere else.
[00:37:26] Maybe. I hope not.
[00:37:34] Yeah, never chat thing.  But I was going to say, OK, so let's go back to React Comp  for a second, right?
[00:37:39] it was it was a big deal like coming from a perspective of you know not having seen a lot  of stuff coming before it's finally here do you know what i mean so like i i think everyone should  be pretty excited about that the thing is we've been hearing about it for a while so it didn't  it didn't maybe have the impact and what was actually the thing that people started talking  about was the again the experimental stuff that's not here yet um and there was the i think his name
[00:38:09] react and immediately kind of ring bells of like other work.  Obviously you think of things like Svelte, you think, obviously I was thinking of the work that we've been doing on Marco.
[00:38:20] And again, this kind of ties in all to why I wanted to talk about compilation tonight, right? Because
[00:38:28] I
[00:38:30] There is all these different things going on right now, and
[00:38:36] by the time you hear it in a conference,
[00:38:39] you know,
[00:38:40] it
[00:38:41] it's later and it's fine.  Not everyone has to be on the bleeding edge of everything.  It's just
[00:38:46] i want to you know if possible unearth kind of the thinking behind this stuff and then you know we can kind of
[00:38:52] go from there
[00:38:53] and can expand our knowledge and not be surprised. I think the problem is, and I'm glad on a certain degree for React's transparency on this stuff, is every time the new thing comes, we're just like, oh my God, I can't miss this out. This is the new thing. And quite often, it's not the new thing. It's like,
[00:39:08] It's been going on.
[00:39:10] somewhere else in a slightly different form, you know.
[00:39:13] tech, we always got to hype and jump on the thing, but it all borrows. And even sometimes it's already been kind of done in very similar ways in the past.
[00:39:25] Obviously I work with Marcos, I was very familiar with stuff like the islands architecture, like we were talking about. And also, but like, even, you know, the compilation techniques, you know, there were libraries trying to do some stuff similar to earlier Svelte before Svelte came out, you know, they were in this benchmark. That's how I found out about them. You know, it's
[00:39:45] Solid was directly inspired or very inspired by one of them, it's called Surplus that was on here for quite some time. And it was compiled JSX and it was 2016 time period. So like,
[00:39:59] you know there's a lot of stuff going on so let's let's kind of transition now i think  that's enough talking shop for now maybe i'll look at the comments before i do that um
[00:40:10] Dan is an experiment. We got some Dans in the chat.
[00:40:16] But let's move on. I love talking, you know, the stuff as it goes on. But I did say that I was going to talk about compilation. And honestly, that's such a huge topic that, you know, I'm already sort of regretting it now. I knew that. Sometimes these streams go three hours.
[00:40:46] this topic, so let's kind of transition a bit here. And for me at least,
[00:40:54] this kind of
[00:40:56] the conversation
[00:40:58] around compilation has been going on for obviously
[00:41:02] a while. Like we know
[00:41:07] Mm-hmm.
[00:41:07] it's been going for years. And if you go back to JavaScript, like you can look at
[00:41:15] you know, CoffeeScript or, you know, early, even like back to, I guess, like 2010 is time period, people were finding ways to use compilation to make their experience in JavaScript better. And in a sense, like even.net and like PHP kind of time period, I mean, when.net, you'd write like C sharp code, and that would generate JavaScript in the 2000s, essentially, because no one wanted to dirty their hands with it. So like, JavaScript, this has kind of been part of our identity, but what I want
[00:41:45] wanted to more talk about is JavaScript frameworks, obviously.
[00:41:49] On the JavaScript framework kind of perspective,
[00:41:54] I like kind of going back to this article. This came out back in 2017. Tom Dale, one of the co-creators of Ember, and
[00:42:07] It's not a long article. I'm not going to read it to you, obviously, but essentially his final conclusion here is his compilers on the new frameworks.  And so here's my advice for anyone who wants to make a dent in the future web development, time to learn how compilers work.
[00:42:19] That was the takeaway.
[00:42:22] the takeaway phrase, right?
[00:42:25] Um, he, he basically, I, Ember was working on stuff, I guess with like byte code and  kind of reducing the size of the templates and looking at that stuff.  And, you know, there's a lot of.
[00:42:35] initial work during this time period, and he just called it straight up.  And he's right. This has been the conversation.  It continues to be the conversation. So, um,
[00:42:45] That was like...
[00:42:47] the starting of the bookend and the other side.
[00:42:51] for me was
[00:42:54] Thank you.
[00:42:55] SWIX article.
[00:42:57] So,
[00:42:58] Sean here basically
[00:43:03] he's been kind of
[00:43:04] noticing some of the trends. He basically said that language versus the new frameworks, which is the other stream, he basically said, this might have started as
[00:43:12] talking about compilation, but now it's actually
[00:43:17] Instead of looking...
[00:43:23] We're all starting to look at languages. And for me, there's a lot of truth to this statement.  And we can talk a bit more about what this means as we progress in the stream, but that's  kind of the bookends of the conversation for what I'm looking at here. Kind of like from  the idea of compilers as frameworks through to this idea of compilers basically as, sorry,  frameworks as languages. And I think
[00:43:47] It goes beyond that even to the future, but that's kind of the
[00:43:51] the scope that I want to focus the majority of our stream of conversation on tonight, which is still a huge amount of stuff.
[00:44:00] yeah this is december 5th 2020 so this article is uh about
[00:44:05] is just over a year old now.  And the other one was 2017.  So how much has changed in that three years?  I mean, three years in JavaScript is an eternity,  as many of you know.
[00:44:17] Yeah, that's kind of
[00:44:19] how I wanted to frame this.
[00:44:21] Oh, where am I? Let's check the chat.
[00:44:30] This was also a Rich Harris talk. Yeah, I mean, yes.  And that talk is actually great.  And I'm going to get back to it in a minute here.
[00:44:39] Um,
[00:44:43] Yeah, they first started experimenting, or at least thinking about 2017, 2018. I mean, I don't know if it actually came out till later that the as we all know, with JavaScript frameworks, we like to talk a lot about stuff that's going to come and then it takes years later to show up.
[00:44:58] I'm this and that's not just a jab at react. Sometimes there's hard problems. We've been  working on one of those with Marco with automatic partial,  subcomponent partial hydration now for good year. And, you know,
[00:45:13] you know,
[00:45:15] These things sometimes take time. You do experiments, figure out what works, what doesn't work.
[00:45:20] disappearing frameworks of the promise. And we'll get to that, too, hopefully.
[00:45:26] But essentially,
[00:45:28] That Rich Harris talk is actually here. Before we can even get here, I want to bring us really quickly up to speed on this whole compilation thing, the history compilation JavaScript frameworks.
[00:45:43] I'm going to play a little video here. It's from a Ratera talk.  It's super short, but it is.
[00:45:49] Um,
[00:45:50] Oh, did I not?
[00:45:51] Yeah, let me see if I have it saved here.
[00:45:55] I'm just gonna pop this one up. - I perform this advocate saying that we should use the platform which is often interpreted as don't use
[00:46:03] Sorry, give me two seconds. This is my fault for not prepping this ahead of time.
[00:46:09] this
[00:46:10] is react and this is one of my favorite interests we talk ever it's only going to take 30 seconds here but um or not three seconds to take about two minutes but
[00:46:21] Here.
[00:46:23] Many moons ago, the wisest of the JavaScript elders came down from the mountain and said, I have created
[00:46:29] jQuery.
[00:46:30] And the villagers said...
[00:46:32] jQuery
[00:46:33] The actor from Zombie Business.
[00:46:35] An elder Rezik, for it was he, said, "No, it is not a man. It is magic. With these spells we shall tame the capricious browser gods and bend them to our will."
[00:46:44] And the villagers rejoiced, for the browser gods were indeed capricious and cruel, and visited much misery upon their lands.
[00:46:51] And they replowed their fields with the new magic, and at the time of the next code harvest,
[00:46:55] all agreed that the fruits of their labors tasted sweet
[00:46:58] an Ajaxi.
[00:46:59] there were conferences and t-shirts and other assorted merchandise and that
[00:47:04] It was the end.
[00:47:05] of the first JavaScript error.
[00:47:07] The tide came and went.
[00:47:09] The moon rose and fell. Years passed, and while jQuery was still the dominant religion, there were some who grew fearful that it was not powerful enough, the elaborate design of the modern age. Then one day a traveler came from the western lands of Zuckerbergia and said, "Hear me, for I bring a message of great import."
[00:47:26] You're all doing it wrong.
[00:47:28] Thank you.
[00:47:30] These primitive incantations do not befit our modern age of science and technology,
[00:47:36] Look at these wretched structures you have built.  I would not step inside for fear of my safety.
[00:47:41] In Zuckerberg, we build not these mud huts, but magnificent towers that reach the very heavens.
[00:47:46] And we do it not with magic.
[00:47:47] but with machines,
[00:47:48] Huh.
[00:47:49] Let me show you.
[00:47:51] And the villagers looked upon the machines and they liked not what they saw.
[00:47:54] The traveler was cast out as a heretic.
[00:47:59] And yet some felt that these machines could perhaps help them meet their own ambitions. And the heretics grew in number until the heresy became the new orthodoxy and the land was covered in machines.
[00:48:09] And that
[00:48:10] It was the second era of JavaScript.
[00:48:13] I'm here today to talk about the third area, the chapter that's being written right now.
[00:48:16] Thank you.
[00:48:18] Uh...
[00:48:20] Thank you.
[00:48:20] Thank you.
[00:48:21] I honestly that intro to the talk was
[00:48:25] is one of my favorites. Yeah.
[00:48:28] uh
[00:48:30] Rich is great. And that, as I said, it kind of very briefly covers the kind of history, what got here. But I want to talk a little bit more specifically. I already mentioned CoffeeScript and TypeScript, you know, and the kind of use of compilation, you know,
[00:48:49] in like Java and like.net kind of early days, kind of into JavaScript. We're kind of used to it. But the next big thing obviously was was bundlers.
[00:49:00] And bundlers are amazing thing.  Like just like some people talk about, you know, no build and kind of get back to
[00:49:08] to that, you know, we've got ESM models, import maps, all that thing.  But bundlers are, I don't think they should be kept out.  They're not specific to the conversation today so much, but I don't think they should be kept out of the conversation in terms of the power of, you know,
[00:49:21] you know,
[00:49:22] com
[00:49:23] compilation javascript they're part of the piece they're just like a different phase if you if you view um
[00:49:30] our build cycle is like several different kind of phases.  Bundlers might be the last phase, but they are still part of that compilation story.  They're still doing a lot of work and
[00:49:41] If you want to see what I mean, I made this example in the role of REPL.
[00:49:48] I like this because it's just such a simple way of showing this.  Hopefully I got this big enough that you can see it.  It's always hard.
[00:49:58] But essentially,
[00:50:02] Um,
[00:50:03] Yeah, you know what?
[00:50:05] Can I...
[00:50:06] Thank you.
[00:50:07] Let me post this...
[00:50:09] In the chat, the Rich Harris talk, it is.
[00:50:13] it is awesome um it's one of his earlier this is 2018 this is before svelte 3. svelte 3  it was a game changer in terms of the compilation story but this is before it this is he already  kind of had this kind of direction and mostly that was originally in the templating not in the  quote-unquote language part but uh it is it is definitely a great talk and it's consistent with
[00:50:43] for a second.
[00:50:45] This is why bundlers are insane and why I consider them part of this compilation story.
[00:50:50] We all know Babbel injected itself in our lives around 2015.  Browsers, we had the support Internet Explorer, and we couldn't
[00:51:01] We couldn't...
[00:51:03] you know, get rid of it.
[00:51:05] Okay.
[00:51:05] Pretty much like we, our choice is not use new features or
[00:51:10] or not support every browser.  And Babel came in and let us transform stuff.  And you started this kind of transpilation thing  that has dominated web dev now for what, six, seven,
[00:51:24] Seven years?
[00:51:26] Bundling is also kind of part of that story. Maybe started a little bit earlier, but essentially we have these combination tools these days that people aren't really even differentiating them when you get stuff like Vite and, you know, WMR and all the different kind of like
[00:51:42] parcel, advanced bundler, minifier solutions.  But I just want to show this as part of the compilation story.
[00:51:52] I have two files here. I have our library and I have our main if you want to see this.  And in our library, we have an optional feature and we have a core feature that has maybe slightly different behavior if we use this optional feature.
[00:52:04] And in our app, we have
[00:52:07] We're calling our optional feature, we're importing it, and we're calling our core feature.  And on the outside, our bundler puts us together and includes all our code just the way we'd expect.
[00:52:16] Right.
[00:52:17] This is not surprising.  But the best thing about JavaScript bundlers and stuff is,
[00:52:24] If I comment out this optional thing,
[00:52:28] Look what Rollup did.
[00:52:34] Mm-hmm.
[00:52:35] Thank you.
[00:52:36] it was able to remove
[00:52:41] the code out of core.
[00:52:43] Like the whole like...
[00:52:45] the choice of optional versus normal flow,  it just said, okay, I'm doing the normal flow.
[00:52:51] It didn't even bother importing it or bringing in this optional function. It didn't
[00:52:57] You don't even see this Boolean here.  And there's your library.  Your library now is just core.
[00:53:04] and you called core.
[00:53:05] Thank you.
[00:53:06] And
[00:53:08] This is super powerful. This is happening all the time. When people talk about tree shaking, it's not just like, oh, you didn't import that so you didn't bring the whole file in. When you're talking about what bundlers do in terms of compilation, they can literally rewrite the code with inside the same function. It's not just like, oh, you didn't use optional so you didn't bring optional in.
[00:53:28] it can actually change the code that you do import.
[00:53:33] And that's not happening in a browser-only runtime site thing.
[00:53:41] I know this because I use this heavily inside solid.  This is how if you don't use suspense or concurrent mode in solid,  it literally compiles out of the output.
[00:53:49] So,
[00:53:51] So I just wanted to show this, that compilation is happening even if you're not trying to do anything fancy in everyday stuff you do with your JavaScript framework. It's right there, right? You kind of know it. Like obviously Babel is doing the transforms, but it's more than just
[00:54:08] supporting older browsers or doing that kind of stuff this technology is um you know  pretty advanced i mean obviously this is another thing written by rich harris so props to him on  that too but
[00:54:21] Thank you.
[00:54:22] This is what we come to expect as a baseline. I have a hard time picturing ever going back simply because of the power of the tools that we use.
[00:54:32] I'll show you one more time, watch, I'm calm with this.
[00:54:37] Like everything is here, right? Look at how much less code we get simply by commenting that.
[00:54:45] Thank you.
[00:54:47] So little side tangent, but I thought that was a great example to show the power of like Webpack, maybe not as efficient at this, but does it to dead code elimination. This is just part of our tool chain, right? And
[00:55:04] like today obviously we're going to focus more on on um
[00:55:10] on JavaScript frameworks and not just on bundlers and TypeScript and CoffeeScript and that. But  I just want to kind of really emphasize that this is already part of what we do. So, yeah,  where should we start? JavaScript frameworks generally... Actually, you know what? I'm going  to throw a banner up right now because it helps me edit the video later.
[00:55:29] um actually you know what no address the comments first can webpack do that too yes maybe not as  efficiently but webpack does have dead code elimination um the big thing that made rollup  cool when it first came up out was because it was like we were esm only so like tree shaking  and the guarantee of no side effects is way more powerful guarantee to make to be able to  do those that type of analysis because you're like oh okay i i'm
[00:55:53] I already closed the example, but you're like, you know, you don't import that function, which means, you know, you could never set optional to true, which means you could you know that you can hard code it to false, which means you know that conditional can never evaluate a different way, which means then here's the thing.
[00:56:07] Webpack had dead code elimination way before that, but it just couldn't be that smart because it didn't know about side effects, didn't have the guarantees of the tree shaking.  It could tell the more obvious things, but the limitations presented by being able to analyze ES6 import syntax actually really opened things up.
[00:56:30] And sometimes that's what it takes. A more strict syntax is easier to analyze. And
[00:56:38] you know the fact that the imports are top level and they're not like lazy or you know you could  put a require statement anywhere that that completely changes the dynamic right you can  you can adjust the string dynamically in a requires statement i mean obviously any kind of an analysis  would know that it couldn't optimize that but as what i'm saying is like restrictor syntax better
[00:56:58] ability for a compiler to analyze.
[00:57:01] You can see that trend a bunch today, right?
[00:57:04] So let's throw the banner up.  So we're onto our next thing.  I'll talk about templating because templating is really where  this started for JavaScript frameworks.  The earliest JavaScript frameworks,
[00:57:17] had really simple templates like
[00:57:20] I wonder if it's still up. I'm sure it's still up. I mean, there's obviously jQuery, but backbone.
[00:57:30] I don't know if they have any examples. It's been so long. Oh, underscore had the exact same doc set up.
[00:57:37] Yeah, you know what? Screw this. Okay, forget it. Backbone was just like inner HTML. That was the thing. You just write some HTML in a template. When your view changed, it would go, okay, I need to update some...
[00:57:49] some data.
[00:57:51] re-interpolate that string to put it in the template, and then inner HTML it. That was state of the art rendering back in 2009.
[00:58:02] Right. And it was big.
[00:58:04] it was actually kind of declarative.  Like we had mechanisms now to define programs in structured way.  You got to figure before that jQuery was kind of, you know, it's, it's,  it was kind of like the DOM API is today, like a little bit different.  They had some libraries and stuff, but essentially you were doing query  selectors and you're just like,
[00:58:20] writing code in a very like
[00:58:22] you know, kind of like specific way, like, okay, I'm going to grab these DOM elements and do this with it. It was very kind of imperative. Backbone was like, no, we're NBC, we're going to help you kind of structure your code. It wasn't the most efficient, but it kind of got us thinking like,
[00:58:37] we can do this in a real way you gotta understand like i got started javascript to 96 97 and i
[00:58:44] During that time period, JavaScript was not very capable at all, and you kind of used it just to decorate some things. Through the early 2000s, it was mostly dominated, like, back-end, like, PHP and stuff really kind of came into its own more dynamic server rendering, and they kind of treated JavaScript as an output format, like, not really as, like, the thing you built your apps with. And
[00:59:08] to come back now and have javascript be the center stage was huge and i mean this coincides  obviously with like um v8 spider monkey uh web kit like all the modern higher performance  javascript engines came out around the same time right like
[00:59:23] That essentially was like 2007, 2008 thing.  It happened in really rapid succession.  I'm going to say thanks to Ajax for that.  Once we could do asynchronous JavaScript fetching in the browser to be able to load stuff in and not having to go back to the server for full page loads.  I mean, it started in those full page load services as like update panels and really convoluted post back systems.  But it was obvious that we would be able to build apps in the browser for real.
[00:59:53] At that point, I think all the browser vendors invested.
[00:59:56] Thank you.
[00:59:56] Right. So from that perspective,
[01:00:00] Backbone was like the first time we got to do this stuff. And I'm going to show another one of my favorites. Everyone knows I'm
[01:00:08] This was my first love, you know, it's not really, but like this was, this was when I came back to JavaScript, this was, this is the thing. And let me see, I'm sure maybe not a tutorial, maybe.
[01:00:20] Ah.
[01:00:24] Thank you.
[01:00:25] Yeah, okay. Yes, yeah, here we go. This is perfect. This was like the next kind of templating that  kind of came out. Angular had a version of this and I'm just using Knockout here as an example. But essentially,
[01:00:37] you have these elements and
[01:00:41] you add special attributes.
[01:00:44] and strings to them.
[01:00:47] As I said, Angular originally was like this, and Vue's heritage comes from this as well.
[01:00:55] the
[01:00:56] What would actually happen is you'd render this on a server, maybe, or maybe statically served from a CDN.
[01:01:06] the page would load.
[01:01:08] render the original, initial JavaScript, and then it would, then you'd walk over the Dom tree,
[01:01:16] And
[01:01:16] pick up all the data bind attributes and parse them at runtime and make the thing do the thing  so it was kind of funny because like if you had a for loop um in knockout is there an example list  yeah listing collection you know for loop in in knockout um
[01:01:36] Can we solve it?  Of course we solve it.  I love this tutorial in the sense that everyone likes  this Svelte tutorial.
[01:01:45] Thank you.
[01:01:45] And
[01:01:47] This for me was the first like simple tutorial.  Knockout always had great documentation.  Like you would have the thing, you could play with it, and then you have the solve button.  This format carried obviously over to solve tutorials, but Knockout had this...
[01:02:01] I think 2011, like very early on.  But okay, data bind for each.
[01:02:08] Makes sense.  And then inside here is the template.  So technically it's using something you already rendered  to the DOM.  So you get like flickers and stuff in this  because you'd render a TR that was like didn't have data,  you know,
[01:02:21] like empty and then uh when
[01:02:25] the jasker bloated knockout would come through, parse through the tree from where you, the mount points, the KO apply bindings basically was the mount point. And then it would like find these, parse these and go, oh, this 4-H
[01:02:40] pull that out of the DOM, that's our template, and then we'll clone that every time you, for each  iteration of the seats. But this was templating and this was 2010, 2011. And I
[01:02:54] basically,
[01:02:57] this is what went. This obviously wasn't going to last forever because it was kind of heavily
[01:03:05] unperformant to be fair, especially on initial load.
[01:03:09] Thank you.
[01:03:10] Yeah, yeah, Knockout has changed a bit over the years. Well, when I say over the years, like between 2010 and 2013.
[01:03:19] at its core essence kind of stayed was the same back then like
[01:03:23] this this was a this was a big influence on all my work um to be fair and
[01:03:29] When I look at this, I'm just like, they had all the pieces right here.
[01:03:33] Thank you.
[01:03:34] Yeah, Angular. When I say Angular,
[01:03:36] I'm not in the Angular crowd.  I'm talking about AngularJS.  It was also around the same time as Knockout.  I might have-- I forget which one was first.  Maybe Angular beat it up by six months.  But Angular--
[01:03:49] big part from google knockout was actually steve sanderson developed it um and worked uh microsoft um
[01:03:57] And Knockout was often used as kind of like on top of like a server rendered, like,
[01:04:04] I worked for Microsoft shop through the 2006 to 2012.  And that's when I was working on with Knockout towards the end of that.  And we were using it to kind of update the old ASP dot net forms  in a way that would like make the JavaScript more interactive.  So we kind of like replace it.  So you had a lot of these like pseudo half server rendered in Microsoft  on that pages would not go on top.  That was kind of how it was kind of common pattern, but not to digress too much.  My point is
[01:04:32] We went from backbones like just--
[01:04:37] inner HTML essentially to these languages where we can parse the DOM, kind of like tree walk it, and apply the bindings kind of in time. The next natural evolution though, was what if we could walk the tree ahead of time?
[01:04:52] and the
[01:04:55] And that essentially is where templating was getting to around 2013.
[01:05:06] This is 2013 is also where our timeline splits a little bit  because that's when React was open sourced.  So we have kind of two different ways of thinking this.  There's the data mining libraries,
[01:05:18] And then there was the React, obviously.
[01:05:23] And it was funny because I was trying to find a REPL to show off.  And I was like, oh, Preact is a REPL, but they don't show the source code.  I mean, the reason that they don't need to is because
[01:05:33] jsx compilation for the most part is very uninteresting i i like looking at it for  comparison's sake but luckily babbles repl has like the stock one i was trying to change it to  like hyperscript but it didn't work but i'll show you what i'm talking about in a minute but  essentially the first the next step was as i said taking these templates and parsing them um
[01:05:54] as strings essentially.
[01:05:57] instead of doing the dom to walk it, you could just look, basically analyze the structure and convert it into
[01:06:09] something that would actually
[01:06:11] render it, like change it into expressions
[01:06:15] instead of into
[01:06:18] um,
[01:06:19] instead of using preexisting nodes.
[01:06:24] Thank you.
[01:06:25] Thank you.
[01:06:25] Yeah.
[01:06:26] Yeah, it's 2013. That's what I was getting at. So yeah, I'm going to leave templating for now because
[01:06:36] It's less interesting in the interim years.  And we're going to switch gears.  I'm going to look at React, Preact for a second,  in terms of our compilation here, to kind of get context.
[01:06:47] React, as we all know, introduced JSX. And there's a lot of extra noise in here.
[01:06:54] because of the way the Babel preset is set up.
[01:06:59] like these pure functions and i guess they do that because they want to show that it's pure  and this is the actual compiled output
[01:07:05] I wonder if-- is this classic mode?
[01:07:09] Yeah, whatever, doesn't matter.
[01:07:13] This is actually a solid component that I just dropped in.  It doesn't matter.  But what I wanted to just simply show here is that,
[01:07:19] Let's make a wrapper or a layout component. Essentially JSX, for anyone who might not be familiar with it, it's XML in JavaScript language.
[01:07:34] actually outputs quite simply here.
[01:07:38] if you have a nested hierarchy like this now puts into something basically we call  hyper script react version is a little bit different but to be fair all you do  you see here is your code up here whatever it is like what is it use state
[01:07:53] You know, whatever you're caught up here.
[01:07:57] stays the same nothing changes transport and then your jsx each element gets turned into a create  element call
[01:08:04] where you pass in either a component or a string to a native element.  And then any attributes on that, like...
[01:08:13] I don't know, theme, dark, whatever, I'm making stuff up.  It gets kind of passed in as a props object, essentially,  on it, and through these function calls,
[01:08:26] and this function could be anything really, it constructs
[01:08:31] a virtual set of nodes, which then get diffed.  And essentially, that's the whole VDOM thing, right?  Whether you're using React.
[01:08:40] Preact.
[01:08:41] inferno generally inferno does have a custom one uh jsx and view or whatever  the basic idea is you have these calls this this is something called hyperscript generally um
[01:08:51] Thank you.
[01:08:52] All right, let me see here.
[01:08:56] - HyperScript,
[01:08:59] is it looks like this, essentially.  Like this could be create React.
[01:09:05] Preact keeps the H convention with it. And sometimes they do cool things like
[01:09:11] like this but if you're compiling from jsx you're not going to end up doing these kind of short
[01:09:15] cutty things. This is like a class. It's ID. Generally look more at this where it's essentially gets compiled into
[01:09:22] the element or the component name and then
[01:09:26] The children potentially or an object for the props is a second thing if it's there. This is your JSX compiles to this and it just runs the series of functions.
[01:09:37] That's
[01:09:38] That's sort of, and as I said, every, pretty much every framework has some kind of template  conversion. You're, as I said, you have the JSX frameworks that compile to this, you have
[01:09:51] um
[01:09:52] the I got I got called out for calling string template or data binding ones, but that compiled to know DOM operations like
[01:10:03] Many of you might be familiar with something called Lit. They have a playground. Lit has a playground.
[01:10:12] but they're not going to show me the output.  That's fine.
[01:10:16] Yeah, if Flit's not going to show me the output, I don't really care.
[01:10:21] Actually, let's go back there two seconds.
[01:10:29] Take template literals.
[01:10:31] Right.
[01:10:33] It looks like a string.  It has some escaping.  But essentially,
[01:10:38] This is sort of it's a very similar process. The thing with Take Temple of Literals is what they do is they actually take
[01:10:44] your string, they assign it to a template element, and then they use a tree walker, essentially, to and they stash the nodes and to figure out where the dynamic parts are.
[01:10:55] And then they insert it.  And if that doesn't make any sense to anyone, that's OK.
[01:11:02] - Thank you.
[01:11:03] We can possibly look at this a bit more, but what I'm getting at is
[01:11:07] every
[01:11:08] thing, whether it's runtime based or pre-compiled,  is doing some kind of magic transformation with your template.
[01:11:16] right it's all actually very very similar
[01:11:20] you know,
[01:11:21] In Knockout, we had the DOM nodes.
[01:11:24] you know, that we parsed and added the behaviors to.
[01:11:28] In JSX, we compile ahead of time to something that could potentially output DOM nodes and with lit,
[01:11:37] We
[01:11:38] transform-- we basically almost inner HTML these into a template, and then
[01:11:43] basically analyze the
[01:11:46] we basically analyzed the holes to know how we can stuff in.
[01:11:53] I mean, the Be Fair template literals
[01:11:56] are nice in that you can just run them in the browser without the build step. I was trying to emphasize at the beginning that I think that in general, if you're building anything real, build step is important. But if you're just throwing something out, doing demos, education, especially learning, I think it's great to be able to do this. And actually, Jason Miller has a great library for Preact or any VDOM. It's called HTM. You definitely should check it out. GitHub. GitHub.
[01:12:22] And
[01:12:26] you-- this keeps almost the JSX semantics here.  But essentially, it takes your HTML here,  and it outputs Hyperscript.
[01:12:36] Like, so as I said, you can do kind of anything with this, right?
[01:12:42] lit
[01:12:43] makes a template that you can clone
[01:12:46] And
[01:12:47] This one turns it into
[01:12:49] Where is it?
[01:12:50] into this or into the
[01:12:53] into this, essentially.
[01:12:56] you
[01:12:58] Thank you.
[01:12:59] We do have a template literal solution also in solid, but it's a little bit different.
[01:13:05] because I wanted to actually get to compile the same as my Babel plugin, which is,
[01:13:10] a little bit ambitious to do in the browser.
[01:13:13] It--
[01:13:14] It works mostly, but there had to be some key differences to how we approached it.
[01:13:23] As I said, every framework has this kind of template compilation.
[01:13:27] Are there differences between the different approaches?
[01:13:30] Sure, there are.
[01:13:31] Right.
[01:13:33] One of the big differences about templating is,
[01:13:40] like when you have something like hyperscript
[01:13:45] it's designed to be a bunch of function calls. It could be objects too,  but essentially it's designed to create a tree.
[01:13:52] Um,
[01:13:54] So we have this one side, which, you know, like the V DOM side, which creates, use the templates to be able to create a tree. And then you have like the
[01:14:03] lit side, which uses it to almost literally be
[01:14:07] templates that you clone.
[01:14:08] And as it turns out,
[01:14:11] There's trade-offs to both sides. Cloning a big blob of HTML
[01:14:16] is incredibly fast.
[01:14:19] Um,
[01:14:20] Rather than creating the elements one by one, Dom can
[01:14:26] you know, kind of batch things together to set the memory allocations.
[01:14:30] Another side effect
[01:14:33] of kind of Hyperscript is when every time you re-render,  like it's inherent to the render model,  you're calling a series of functions.  If there is something conditionally in here,
[01:14:44] you don't know you like if the props change, you have to call the functions.  And the funniest thing about it.
[01:14:51] what people might not notice at first is,  if you're looking at this block of functions,
[01:14:56] which function executes first?
[01:14:59] I'm hoping everyone can see this. Which function executes first in this
[01:15:07] in this example here.
[01:15:12] I believe...
[01:15:14] It's this one.  Correct me if I'm wrong, but this is the function that executes first.
[01:15:22] JSX or Hyperscript actually ends up executing inside out  because you're passing the functions,  pass the functions, pass the functions,  which is really,
[01:15:32] interesting
[01:15:34] dynamic, right? Because you don't know your children until later. So this is actually the root of a lot of the classic conversation that, you know, template DSLs are more analyzable than JSX. Part of it is because you can have dynamic expressions like JavaScript right in the middle of your templates all over the place. And
[01:15:56] doing inserting whatever the hell you want but it also this is designed to kind of run
[01:16:03] in sequence it's actually kind of backwards and because it's backwards it's hard to do this as a  single pass like you actually create h1 classy before div header before div page and you actually
[01:16:14] kind of
[01:16:14] compress them back in.
[01:16:16] you know, as children and the parent handles, the child handles the child and it compresses up the tree. So from that perspective,
[01:16:24] this isn't this is actually built
[01:16:27] for multi-pass.
[01:16:29] approaches essentially like VDOM because
[01:16:32] you, you, you,
[01:16:34] you just don't have
[01:16:38] You don't have the parent beforehand.
[01:16:40] Like this is not aware of its parent.
[01:16:43] Um,
[01:16:44] I hope that makes sense.  I'm going to look at the comments and see if anyone said anything while I've been doing this.
[01:16:50] do the template in a different order?  Well, it depends on what it compiles to.  The thing is, template literals, if you've ever
[01:16:58] I wonder if I should show an implementation. They just compile to a
[01:17:03] a
[01:17:05] I'll just throw some code down here.  When you write a tag template literal, it's basically a function
[01:17:12] So, you know, like our HTML function is essentially a function that
[01:17:16] has
[01:17:18] Um,
[01:17:20] an array.
[01:17:21] which is the static parts. So, you know,
[01:17:25] you know,
[01:17:26] Maybe give open.
[01:17:29] Thank you.
[01:17:30] Thank you.
[01:17:31] Give...
[01:17:33] Clothes.
[01:17:34] Thank you.
[01:17:34] Thank you.
[01:17:36] And then a list of all the arguments, so count.
[01:17:42] essentially this list of arguments is always one less than this, right? Because it just starts, enter, enter. And that's essentially what it possibly, the coolest thing about them is it actually,
[01:17:56] When you write a tech template literal, this argument gets cached.  So even if you hit it a second time,
[01:18:03] it uses the same nodes, so to speak.  So whatever you transform this to,  you can actually kind of use it as your marker  from a compilation standpoint.  So you can just like go like, this is my template  that I clone that you make from this.  And essentially every time it runs,  it can just like use this as like a key essentially  to look up the template
[01:18:22] Like it doesn't redo the work every time. It treats us as static.
[01:18:27] And you can change the dynamic parts. That's basically the secret to how Lit works. But it depends on what you generate out of it. Most of the time, this
[01:18:36] becomes just a static
[01:18:38] template essentially that you clone um so it doesn't really render out of order i mean
[01:18:44] It depends. If you nest HTMLs inside HTMLs,
[01:18:48] Um,
[01:18:49] then
[01:18:50] Those are going to show up over here, right?
[01:18:52] like we have another HTML statement in here or whatever.  And so from that perspective, the inside still executes  before the outsides, to be fair.  It's-- I think it's just kind of interesting that there  is this kind of dynamic in general.
[01:19:09] *ding*
[01:19:11] Thank you.
[01:19:12] You figured out Solid's secret. This is how Solid works. We wrap everything in thunks.
[01:19:20] Um,
[01:19:22] That's the main reason we can't use a generic compiler
[01:19:27] And I was kind of getting there, but we wrap things in thunks so that they,
[01:19:35] they execute an order.
[01:19:37] um so we can keep the reactive context
[01:19:40] But yes, that is the secret here. You don't need to, but it is actually...
[01:19:49] It is actually our little trick.  So anyways, talked about tag template literals a little bit.
[01:19:56] as found in lit.
[01:19:58] As I said, this generally turns into two things.
[01:20:03] Basically, the first time you call it, you write some processing on it.
[01:20:08] I mean--
[01:20:10] Thank you.
[01:20:12] Thank you.
[01:20:13] Let's see if it's still here.
[01:20:15] GitHub.
[01:20:16] Packages, HTML.
[01:20:23] source
[01:20:27] It's been a little while since I've been here.
[01:20:30] Let HLTS...
[01:20:33] No, no, I want something called like template  or template parts.  They've probably refactored this a whole bunch that I'm not,
[01:20:41] Oh, maybe it is still here.
[01:20:44] Okay.
[01:20:47] Thank you.
[01:20:48] I don't know if Beth's worth template results.  Getting close.
[01:20:56] Thank you.
[01:20:57] Bye.
[01:21:00] Essentially...
[01:21:06] Tag.
[01:21:08] Yeah, I don't know if this, I did kind of reverse look at this before. Essentially, I'll pseudocode it right now for your benefit. Essentially, the HTML function,
[01:21:24] which takes those arguments we said, list and args or whatever. The first thing you do is you go like,
[01:21:35] - Yep.
[01:21:36] have like a maybe a week map or something here like const map equals new week map or something  or you know and and like you go like if if map dot get list
[01:21:53] And you usually put something on here like
[01:22:00] Run template or something. Okay.
[01:22:03] with yards, essentially. Otherwise, it's like,
[01:22:07] Thank you.
[01:22:08] process.
[01:22:11] the list.
[01:22:13] It's
[01:22:16] So.
[01:22:17] They get basically, sorry, let's go up.
[01:22:21] run template equals i'm hoping this makes some sense to you and then like
[01:22:31] Thank you.
[01:22:33] This is generally what a top-level HTML function works in, like, one of these kind of renderers, is that they essentially look up, based on the static args, the template, and the first time they run, they compile it.
[01:22:50] first, essentially, into a render function that takes the arguments, and then they run it again.  And that's essentially the gist of it.
[01:23:00] not rocket scientists science so to speak.
[01:23:08] So,
[01:23:09] uh
[01:23:11] You get the point.
[01:23:16] But.
[01:23:18] Or maybe it's not on here.  Maybe it's more like get...
[01:23:23] And
[01:23:25] template equals this and then run it. Sorry, this is a little bit cleaner.
[01:23:34] Thank you.
[01:23:36] Thank you.
[01:23:41] Thank you.
[01:23:43] Thank you.
[01:23:43] Okay.
[01:23:45] There we go.
[01:23:48] oh yeah sorry about that that's the one problem i can't actually change the  location here in streamer can i scroll up yeah there we go sorry about that
[01:23:55] This is the...
[01:23:57] essentially what the
[01:24:00] Thank you.
[01:24:03] HTML in something like what it does.
[01:24:07] Thank you.
[01:24:07] Yeah. So, okay. I'm going to move on from here because this is like the,
[01:24:17] the runtime approaches.
[01:24:20] You're probably wondering what this run template is.
[01:24:24] And
[01:24:25] Thanks.
[01:24:27] That's fair. And actually,
[01:24:29] There's a little bit more in here than this because they have to have to clone the nodes,  but essentially they split it into
[01:24:36] a template that can be cloned and a render function that takes the args. And in a sense, this is very similar to even like React or something because you still kind of do this top down render. You pass the new arguments in and it basically, instead of necessarily cloning the nodes, you clon the nodes once on create, but you still basically
[01:24:59] use the args to insert them inside that template.
[01:25:05] - The quest for side rendering now,
[01:25:09] But essentially,
[01:25:13] essentially that's kind of the the scenario here um server size a little bit easier and we'll show  some more concrete examples here in a second okay so let's let's let's move on from from lit here  for a second okay so i've talked about hyperscript i've talked about lit um and those kind of came  out around the same time in a sense
[01:25:39] Angular also came out in 2016, not AngularJS, and it was doing its own kind of compilation of templates. But I want to fast forward a little bit further now and let's talk Svelte, let's start talking solid and start looking at
[01:25:56] you know what those that kind of compilation works this is important because it's going to  it's going to tie into um into a few other things here uh
[01:26:07] I'm going to do solid next because even though it's a relatively newer library, I wanted to show...
[01:26:14] kind of
[01:26:15] I
[01:26:18] how compilation affects this because solid is actually more like react and preact and  hyperscript type variants than it is like svelte and that's why it's actually easier  to show this in terms of compilation because remember a minute ago i showed you babble
[01:26:33] and I showed you how this doesn't get changed and it's only changing it to a bunch of create element calls.  This create element call could be an H function.  It could be whatever you sub in depending on your framework.  Essentially, it's like that. What solid does
[01:26:47] is
[01:26:49] it's kind of like a cross between lit, which we just talked about, and
[01:26:55] these Hyperscript things in that this doesn't run again,  but what we actually compile the JXX to  is a template that we clone
[01:27:04] And then
[01:27:05] a bunch of dynamic reactive expressions that run. So, I mean, let's go count times two.  You've seen this. This is just like a counter and I'm going to make it count by two every time we
[01:27:21] This insert expression is a side effect. Let's pick something a little bit.
[01:27:28] It's going to do text content because it's an attribute. It compiles in a way that's easier for people to see.
[01:27:35] Thank you.
[01:27:36] um
[01:27:38] But essentially,
[01:27:40] Yeah.
[01:27:41] Create an effect.
[01:27:43] around
[01:27:45] the count here, like essentially,
[01:27:48] we don't touch your kind of component code  and the JSX becomes,
[01:27:55] code to clone a template,
[01:27:57] See, template clone, this is a domino that we clone.  And then we attach event listeners  and we create effect calls.  And these are the things that run over and over and over again.
[01:28:07] That's essentially the...
[01:28:10] Thank you.
[01:28:10] the compilation here. So in a lot of ways,
[01:28:15] It's not crazy because
[01:28:18] I mentioned about wrapping things in thunks before.  That's what solid does.  But this expression here, sorry, not the data in this case,  but this expression here, it's just a direct translation of what's
[01:28:31] of what's in here right so you know we can put any legal javascript expression here like uh
[01:28:38] I don't know, I did a multiplication. I can't think of something we can, we could have like a format function. If you watch as I type here, it's just going to directly insert. We just take the holes and insert them in the effects. That's essentially the compilation for Solve. That's why a lot of people call it very transparent because it's kind of, it's not unlike
[01:29:01] here, right? When we wrote this count, you saw this count function ends up being a child, but let's pretend that React had a text content.
[01:29:13] Attribute
[01:29:15] This is an example.
[01:29:18] Okay.
[01:29:19] And he did and
[01:29:23] Okay.
[01:29:24] Thank you.
[01:29:26] it's a content equal count and whatever expression that we put here this becomes
[01:29:34] Thank you.
[01:29:35] that expression here, right? The only difference is instead of making it into a bunch of consecutive functions, they get called every time, so it fits with the kind of VDOM mentality of generating a tree.
[01:29:48] What's all it does is it runs at once and then creates these effects, which are the only things that rerun. So in that sense, a lot of times we get kind of skewed in.
[01:30:00] It was felt like everyone's like, oh, you know, the framework that, uh,
[01:30:03] you know, like a compile away framework to just plain JavaScript, you know, that whole thing, you know, disappearing framework, runtime, all that. And it's not it's not terribly accurate. We are small, but preact small too, right? Like we already kind of talked about. It's just that the reason that solid stays so small is that the render is just built with solid itself. It's the same primitives like the create signals and effects that actually
[01:30:33] that code compiles to.  So everything is just compiles to the same thing, essentially.  Like, it's like the same as if you'd written it by hand.  Like if someone told you they're like, hey,
[01:30:42] i want to create a button that updates you know how how would you write that by hand i mean we can
[01:30:48] You can see this compiled output here.  If I just duplicate this tab over here,
[01:30:55] Essentially.
[01:30:56] Sorry, I got to get rid of that format because format doesn't exist.
[01:31:00] right okay sorry format let's do this get rid of that format
[01:31:07] if someone told you so it's up by two if someone told you hey you don't have jsx you don't have  a compiler how would you write a button that did this you might be like okay well  i will make an element it will be document dot create element
[01:31:30] event. So, l.add event listener. And on that event listener, when that happens, we will call an  increment function, I guess. Sorry, we have to see what the event for. Was it clicked?
[01:31:47] We want to click a bit. And then we might be like, okay. And then we want it to update every time. So let's go create.
[01:31:56] Effect.
[01:31:58] and let's make an effect so that l.textContent equals count
[01:32:05] Thank you.
[01:32:05] times two, right?  Okay.  And then let's return that element.
[01:32:12] and create effect.
[01:32:15] Thank you.
[01:32:17] Thank you.
[01:32:19] And there, we just hand compiled the code.  Essentially, if you were to write it yourself,  this is what you would do.  And that's all that Solid's compiler does.
[01:32:32] It just like this code is essentially identical to.
[01:32:40] this code. I mean, this is a delegated event handler, so it's a little fancier, but
[01:32:46] oh it's updating a text node that already existed we do some fancy tricks like see how there's an  empty gap here by walking into that it's faster than replacing all the text content but like
[01:32:56] let's not squibble over details i just trying to show that um you know
[01:33:01] This is sort of the approach here that Solid uses.  So it's kind of like a hybrid between,  we'll look at Svelte in a second,  but in terms of templating,  you know, it's just a slightly different JSX transform,  essentially.  And to be fair, stuff like,
[01:33:17] angular which is still component centric like it does it and svelte do this sort of create element  conversion is kind of their their trick um so let's move on from here though that just wanted  to kind of quickly show um that let's see is there any questions in the chat i haven't checked in on  it for a while
[01:33:37] No, good, then we'll just keep on moving.  So that's like, that's all there,  that is all there is to compilation here.  And let's close a few of these windows.
[01:33:50] We've got too much stuff open.
[01:33:53] um let's look at
[01:33:56] Thank you.
[01:33:57] Svelte.
[01:34:00] So...
[01:34:03] uh
[01:34:04] So,
[01:34:06] This is a simple hello world example, but let's change this to our brought in
[01:34:14] Thank you.
[01:34:14] update account just because um
[01:34:20] making all things equal, so to speak. So let's make that account. That is zero. We'll talk about  this compilation language in a minute. But I just wanted to just kind of -- let's inline it. I don't  know why the solid version doesn't. What is it? On -- I can't get it.
[01:34:40] So click this and then we are just gonna go count plus plus plus plus.
[01:34:48] Okay.
[01:34:49] Now,
[01:34:51] um plus plus and then we count times two right okay
[01:34:57] Remated.  So it's pretty sweet how terse that is, right?  Pretty nice.
[01:35:02] Okay.
[01:35:03] And if you look at this example, the compiled code,  you might have a slightly harder idea
[01:35:11] of what's going on here,  'cause Svelte doesn't really leave any of your code alone,  it completely transforms it.  But there is some key things that we can look at.
[01:35:19] They have helpers to do the create calls,  but this is document create elements.  So they went document create element,
[01:35:26] Yeah, that's kind of fun, right? But see, this, you know what, they have a human readable form.
[01:35:35] Where is it?
[01:35:37] Is it dev?
[01:35:38] Thank you.
[01:35:39] Thank you.
[01:35:42] Okay, so now you see the names here.  It's the same idea 'cause they call it C,  but the create function,
[01:35:50] Thank you.
[01:35:51] Thank you.
[01:35:52] oh i mean lit is similar in that it pulls the static parts of the template out into something  that you can clone similar to solid you know how solid does clone node lit does the same clone node  except solid when it instead of making a render function that reruns and inserts the updates it  makes specific granular effects but in a sense it's very similar like you get a template that you call clone on
[01:36:18] when you create and then when you update,
[01:36:21] Lit basically remembers the index,
[01:36:27] to where to insert it.
[01:36:29] And
[01:36:31] Solid.
[01:36:32] wraps it in an effect, but rendering wise, uh,
[01:36:36] like the compilation part is kind of similar
[01:36:44] yeah less granular yeah exactly it's doing a kind of like at per template level  anyways back to svelte so create element
[01:36:53] set the text into T value,
[01:36:56] And
[01:36:57] they have some kind of ad location thing. But what is T value?
[01:37:02] You might be asking, well, T value
[01:37:04] Thank you.
[01:37:05] is
[01:37:07] So,
[01:37:09] this value in a context. They have this idea of a context. And context is an array, kind of like slots
[01:37:15] um in
[01:37:18] like if i if i add another value like this i mean if i don't use this this might not
[01:37:24] show up.
[01:37:25] But
[01:37:29] And what we should see, maybe this one isn't going to show up because we don't use it.  What happens if I add it to our template?
[01:37:40] Yeah.
[01:37:40] What we should see is that now we have a context one. Essentially, they keep an ordered list
[01:37:50] of your state variables in a context object.
[01:37:53] And essentially they create the element, they set the text.  So this is the create function.  And then I'm trying to work claim does, doesn't matter.
[01:38:03] Thank you.
[01:38:03] they do a bunch of the inserts. So these are like insert, like DOM insert, append insert. And then
[01:38:10] They register some event or cleanup code
[01:38:15] Actually, if not mounted already,  then we're gonna add our click handler,
[01:38:19] Thank you.
[01:38:20] And then you get a big object, the update function, which we're going to get into, which is the interesting thing.  What's because essentially what Svelte does is it breaks.
[01:38:32] your component that you write like this into a bunch of class life cycles.
[01:38:36] more or less.
[01:38:37] Um,
[01:38:38] You have a create lifecycle, you have a mount lifecycle,  and then you have an update lifecycle.  What's the update lifecycle?
[01:38:46] Well,
[01:38:47] It's a dirty check.
[01:38:48] they basically every time it calls update it goes has they check some kind of flag and they go has this value changed if this doesn't equal
[01:38:57] the new value.
[01:38:58] then call.
[01:39:00] a set function.
[01:39:02] And that set function
[01:39:05] basically passes the new value in that updates it.
[01:39:12] Thank you.
[01:39:15] Now, there's a little bit more here, but once the updates,
[01:39:20] This is...
[01:39:22] Let's see if we can find that.
[01:39:25] Sorry, is that data?
[01:39:27] Can we find that here? Where's the other location?
[01:39:34] Where is the other one?
[01:39:38] It's the only challenge with this.
[01:39:45] It knows there's two in here. I'm just, the browser's not helping me here.
[01:39:50] That's too bad.
[01:39:52] Let's not worry about that too much.
[01:39:54] What I'm getting at here is Svelte does like every time on the update cycle, it checks each individual value if it's changed and then applies the change only if the values aren't equal, then it applies the change.
[01:40:13] Yeah, I mean,
[01:40:16] -
[01:40:18] yes and this is why it's felt it is much much larger i i i i didn't pull this up earlier but
[01:40:25] -
[01:40:26] I actually did this article a little, the one I was talking about earlier in the stream.  If you actually look, Svelte's runtime is...
[01:40:35] insanely small.
[01:40:39] Sorry.
[01:40:41] 1.85 kilobytes.
[01:40:44] Right, that's small-- like React 36, views 17,
[01:40:51] Preact.
[01:40:52] four and a half solid, just under four.
[01:40:55] But Svelte's components are like double the size of Views components.
[01:41:00] Okay, so...
[01:41:02] just kind of keep keep keep that in mind in terms of scaling because as i said they catch up quickly  but essentially and then they have like a couple other different life cycles and a  destroy life cycle but what i wanted to show is where's the click handler
[01:41:15] wherever the click handler happens, yeah, click handler.  The click handler is the last piece  that I wanna talk about here on Svelte,  'cause we have a dollar sign invalidate,  which updates the count and stuff.  And if this looks familiar to you,
[01:41:28] Like I already showed you the class component with the life cycles.
[01:41:32] And then dollar sign invalidate, can you guess
[01:41:36] what that is.
[01:41:37] like you've seen before, if you're a React developer, it's called set state.
[01:41:41] Thank you.
[01:41:42] essentially
[01:41:43] Thank you.
[01:41:44] Svelte.
[01:41:46] compiles into a smarter version of React.
[01:41:51] like
[01:41:53] It's still a component that reruns,
[01:41:55] But
[01:41:56] And they let you do this, but that just turns into set state.  So they call set state for you, which reruns the
[01:42:04] the components thing. And they did separate the create, so it doesn't do the create again.  But then when you run your update function, which we saw here,
[01:42:12] It just goes through and dirty checks each value and decides whether to apply the change.
[01:42:18] Compiler does this upfront.
[01:42:20] But essentially,
[01:42:23] E.
[01:42:24] Essentially, the way this works, as I mentioned, is
[01:42:28] Thank you.
[01:42:28] You have slotted data slots that happen at a certain index.
[01:42:32] kind of like
[01:42:33] say React hooks.
[01:42:36] You have something that tells the component to rerun when the event happens, which I showed you here, like invalidate.
[01:42:45] Right? And then you have a very simple shallow data diffing routine that sets the data.
[01:42:55] um
[01:42:56] and
[01:42:57] That's pretty much it, right? It pulls it into the components instead of putting it a lot into the framework, which keeps the runtime small. And it is very beneficial. Like Svelte is the smallest framework under 12 kilobytes. Like if you're making a demo, like you're making a site that's smaller than about 12 kilobytes compressed, Svelte will be the smallest.
[01:43:18] Once you get over 12 kilobytes, solid or preact is a much better choice.
[01:43:23] But if you're making really quick
[01:43:26] demos, you know, maybe you work for the New York Times and you just
[01:43:30] make it a small throat thing. The size will be unmatched with Svelte. It's the best demo framework that's
[01:43:37] ever existed. But obviously, size isn't everything. It's just kind of like this is how the compilation works, generally speaking.
[01:43:47] Um...
[01:43:50] This is super powerful though, because
[01:43:53] now that you kind of got this picture in your head of how Svelte works, it's really cool because
[01:43:59] these aren't actually anything special.
[01:44:03] variables like T value, they just get set in a specific array.
[01:44:08] and that reruns and stuff.
[01:44:11] this talk from React Conf suddenly starts making a lot more sense.  We're not going to watch the whole thing here, but he was making this to-do MVC,
[01:44:20] of thing that you might have seen kind of this example of.
[01:44:24] And, you know,
[01:44:26] React's problem is when it reruns, it reruns. So he kind of went through a whole bunch of
[01:44:33] transformations here. We took his filter to do MVC list and
[01:44:38] he started going, oh, has changed, has changed, introduced a bunch of intermediate
[01:44:43] values and then
[01:44:46] did a lookup against an indexed cache with the numbers where these memos were.
[01:44:52] If you look,
[01:44:53] at this example for a moment,
[01:44:58] It kind of looks familiar.
[01:45:02] Like, are we looking at Svelte or are we looking at React?
[01:45:06] - Thank you.
[01:45:07] Thank you.
[01:45:08] And I think,
[01:45:10] I mean,
[01:45:11] This is kind of where the thinking has come.  You can tell it's the kind of component model here of
[01:45:19] of kind of
[01:45:21] slotting in these memo for these simple dirty checks, makes it kind of granular. You can still rerun whole components
[01:45:33] whole component trees potentially,
[01:45:35] depending on the conditionals,
[01:45:37] like
[01:45:38] If this doesn't change, then you don't have to run the child map function or whatever.  You don't have to update the to-dos if they haven't updated.
[01:45:48] power here. And this is what React's been looking at. It's automating this into a compiler stage,  right? But essentially, it is very, very, very similar to Svelte, which is,
[01:46:01] which I don't know if that really...
[01:46:03] people probably don't spend much time looking at the compiled output of this, or so the compiled output is spelled enough to actually kind of notice the differences or similarities. But I just kind of wanted to show this because the kind of big reveal of here is React is considering what it would look like to do this kind of memorization. To be fair, view
[01:46:24] um has a certain optimization like this too but it's a little bit different  um i'm not as versed with view so i don't want to like speak out of turn on this um but
[01:46:34] I think...
[01:46:36] If we talk about template and template automation for a moment here, in terms of improving performance, and that's what this is about. This is all about performance, about not rerunning parts of your template.
[01:46:50] The key part to this, I mean, this is more, this has memos and it's part of the language piece as  well, like the actual component code. But the key to this whole thing is recognizing that
[01:47:01] it's a matter of static pieces and slots.
[01:47:04] That's essentially the whole dynamic.
[01:47:10] When...
[01:47:12] People look.
[01:47:14] it doesn't once you look at a template in terms of being static pieces or slots, it doesn't matter
[01:47:20] how it's written so to speak right you could be looking at jsx like solid i mean this is a big  this isn't a big jsx blob but you know what i mean like you can be looking at this and go static  static button static on click slot text content slot you could you know you could be looking at  jsx you could be looking at our lit template that i already closed down you could be looking at
[01:47:43] at Svelte.
[01:47:44] static slot it actually the difference between
[01:47:48] JSX and a custom template syntax is actually
[01:47:55] fairly
[01:47:56] minimal. The only actual difference
[01:48:00] is what can be inserted.  This is the key, key difference.  When you have a restricted template DSL, like Svelte or whatnot,  you only-- like, the only thing you can put here  are things that could be inserted in the DOM.
[01:48:15] right, if this was capital bought in component, you still
[01:48:22] there's only certain things that are allowed to be put in here. Whereas, and then they use slots for this way, very similar to web component mechanism to kind of make sure that the reason slots
[01:48:36] are the APIs because it ensures that you can't do much with them. Essentially, they get
[01:48:41] hoisted from one position and insert directly in another position intentionally. And view is kind of similar too.
[01:48:48] Whereas React, you have this props children, which is dynamic. That's the only difference.
[01:48:53] these holes can be like anything in JSX.
[01:48:58] But I mean, only to a degree.  If this is a native element,
[01:49:04] These can only be legal things that you can inject in the DOM ultimately.  Like even if you have a child component here, even if this is button,
[01:49:14] You know,
[01:49:16] or child or whatever, I don't care, you know that what this return has to be something that's insertable into the DOM. So it's not as loose as you might
[01:49:26] might think in terms of analysis.  You're still just dealing with static parts and slots.  And in case of something like Vue or Infernal or all libraries,  it's an exercise of splitting the static stuff
[01:49:38] so you don't redo the work and only updating the dynamic stuff.
[01:49:41] Right.
[01:49:42] Um,
[01:49:44] In Svelte, this happened.
[01:49:47] essentially by having a create block that is separate from
[01:49:52] amount and an update block.
[01:49:55] with solid, it's us hoisting this template out.
[01:50:02] It's also the fact that this only runs once,  so this is also kind of all part of the static part,  but it's a difference between this stuff
[01:50:08] and the updatable part here, right?  Obviously installed, this is a very small part  compared to the others which run full functions,  but essentially,
[01:50:19] it's a matter of separating static from the dynamic. View does the same thing. It even keeps  hoisted static references to VDOM nodes so it knows not to diff them. That is how template  optimization works. It doesn't matter what templating language you use, for the most part,  at least on the client. On the server, it's a different sort of challenge, which we haven't  really talked about. People don't actually talk much about it, but I'm going to take a moment
[01:50:49] Before we move off the topic of templates and get to the next topic, which is languages, I want to kind of.
[01:50:55] at least spend a moment on the server portion of the rendering.  Let's see how the chat's going.
[01:51:02] Yeah, no, that's fine. Some of you guys are still here. I knew this would be a heavy topic. This wasn't going to keep everyone's attention all the time. Maybe people come back and check it later. But this is really a big topic. But
[01:51:16] Luckily here in solid, we actually, and Svelte,  we have this ability to change to server template.  I'm gonna do the Svelte first,  'cause it's really illuminating.  'Cause we saw this code here in Svelte,  and this is all because they have to separate stuff,  because stuff in the DOM updates.  You know what happens when Svelte,  when we change it to mode SSR?
[01:51:33] Let's watch.
[01:51:35] Oh, there's a whole component.
[01:51:39] It's now back to 10 lines of code. And the reason for that is because on the server, ultimately you just have to render a string. So this just turns into a template literal where you escape the things that could possibly be escaped and you just use normal variables.
[01:51:59] In solid?
[01:52:00] Thank you.
[01:52:02] Thank you.
[01:52:03] It's a
[01:52:05] It looks almost the same. It's kind of crazy just...
[01:52:10] um the slight difference in solids like escape logic and stuff that causes it to be about three  or four times faster than svelte on server rendering because honestly when if you were  looking at these two you would think that they were the same library um
[01:52:23] essentially. But like,
[01:52:27] This is set up to hydrate, I don't know what the version is, but essentially my point is that on the server side, we just turn it into strings and we escape stuff.
[01:52:41] This might be the only place that I felt that it
[01:52:43] deficit in terms of the compilation approach.  Because if you can insert anything, you have to escape it.  And there's certain conditions because of a more restricted  templating language like Svelte or Marco or Vue,  where you know not to escape it.  And escaping is the most expensive part on server rendering.
[01:53:01] It's like,
[01:53:03] Thank you.
[01:53:04] all the time spent rendering is not escaping if you didn't have to escape and work about like um you  know these these these like cross scripting attacks or whatever uh server rendering in javascript would
[01:53:16] a hundred times faster.
[01:53:18] So anyway, just wanted to kind of make a note on this in terms of where the limits of template analysis might work on the peer templating side. Okay. So,
[01:53:30] I'm done with templates. Let's move on. That was a long subject.
[01:53:36] And I want to talk about our next topic here, which is frameworks as a language.  I think this will be more interesting to some people because we already looked a bit at Svelte, and we talked a bit about templating languages.
[01:53:48] But.
[01:53:52] using the actual viewing the framework of the language is a very
[01:53:58] it's kind of a departure from what we've been talking about so far, because most of this stuff here has been about performance optimization, eking out a little bit extra of the templating, figuring out how we can, you know, do more with less or whatever, so to speak.  Right. Or maybe more in the case of Svelte because their components get quite large.  But framework as a language is mostly a DX thing.  Right. When you look at something like Svelte,
[01:54:24] Yeah.
[01:54:24] you know you you've uh you have this uh
[01:54:28] you know, like this experience here, and let's move this back, sorry, where you can just declare normal variables and it just works. I mean, it's quite nice. And to achieve that, like we already showed that Svelte actually doesn't do anything special here, which is really cool.
[01:54:58] template. That's why Svelte stores exist. You can't just kind of like suddenly there's no composition. There's no like, oh, now I want to, instead of like, instead of this being stored locally, I want to use local storage state or something like you don't you don't do that in Svelte because you're
[01:55:18] like the reactivity is just this compiled thing as you saw that there is no actual reactivity here  it's like literally just the these are just sorry i'm looking at ssr but these are literally just  variables in an array and then it's a set state call like it's not it's not like uh it's not like  um a runtime reactive system where there's subscriptions and we do updates and stuff like
[01:55:48] and rerun this component call, right? It's not very reactive. But
[01:55:52] I mean, it's still reactive because it reacts to what you're doing, but it's like not, it's just like the data isn't reactive. It's just variables.
[01:56:02] Yeah.
[01:56:03] So, when you can get away from the composition element, it opens a lot of doors. And I recently wrote an article on this, which was this, where was it? The Quest for Reactive Script.
[01:56:20] Part of this comes from
[01:56:23] looking at what framework's been doing to try to solve this problem of reactivity from an API  standpoint, right? And I talked a bit about something called the destiny operator, which  is this idea of basically the whole idea with reactivity here is that you want it set a variable  such that it always reflects the update. So like if you have a equals 10, and you say that b is a  plus one, it should always be one of,
[01:56:49] above so like when you change a to
[01:56:52] you know,
[01:56:53] 20, like I'm doing here, it should be, should be 21. That's the whole kind of concept here,  because UIs are all about synchronization, right? And it's felt, you've probably seen this,  it's just a dollar sign operator.
[01:57:06] And what this has caused is actually, in my opinion,
[01:57:11] three
[01:57:12] distinct separate solutions to how to treat frameworks as a language.
[01:57:18] essentially like this approach
[01:57:21] Thank you.
[01:57:22] two of them are popular one of them is not as popular um so i'm going to categorize them  straight up one of them i'm going to call is the identifier um which is this idea of  marking variables as reactive
[01:57:37] And then basically,
[01:57:39] using this marking. This one is not as popular or as common as other solutions, but essentially,
[01:57:48] If you create a reactive variable and you mark it,
[01:57:53] Yeah.
[01:57:56] you now know that it's reactive wherever you use it. This is just a compiler trick, though. It's really just syntactic sugar. I'm going to jump ahead to what's more common, which I'm going to call the keyboard decorator labels. And this is how Svelte works, essentially, as a language. It knows, it treats all lets as our signal. And sorry, I didn't give you guys much of a preamble here, which I should have.
[01:58:20] I'm going to propose and I've proposed this in a lot of my articles that
[01:58:24] you can define almost any framework in terms of three base primitives and
[01:58:33] those three braids primitives are
[01:58:36] Thank you.
[01:58:37] Thank you.
[01:58:37] are essentially
[01:58:42] state
[01:58:44] um curivations
[01:58:48] and effects. This obviously has been kind of like, people call it like my thesis here or whatever. But essentially, if you use this, it doesn't matter like,
[01:59:00] what they're called, signals, atoms,
[01:59:07] what what else do people call these things refs like
[01:59:16] Yeah.
[01:59:17] Ironically, Svelte has stores for different types of ones of these. But essentially observable. Sorry, I missed that one. There's this idea of the staple atom. There's this idea of derivations which are
[01:59:37] kind of calculations are pure, they're based on it.  They don't have any side effects.  So memo in react or like computed in view or stuff, or maybe even selectors,  like in things like Joe tire or whatnot, like there's this kind of derived state.  And then finally the side effects, which, you know, are also like watch in view
[02:00:00] work.
[02:00:00] affects him a lot of white whereas auto run in mobax
[02:00:06] uh,
[02:00:07] Thank you.
[02:00:08] and hopefully this is visible technically svelte stores can be both state and derivation  they have derived stores and normal stores but essentially if you
[02:00:19] use this. So if you use this language here and you can basically this is the language, so to speak, I've like people.
[02:00:30] people talk about frameworks as a language,  but I actually don't even think they're different languages.  I think they're actually all the same language.  So Svelte might call
[02:00:40] So let's see, so-called
[02:00:43] - A wet.
[02:00:44] Right.
[02:00:46] And then they call derivations a dollar sign
[02:00:50] operator or like variable and this is just dollar sign expression like
[02:01:00] I
[02:01:03] Marco actually has this too, which I'll talk about a bit, has const. Essentially,
[02:01:09] Thank you.
[02:01:10] almost all UI framers can be talked about in this language.  They run slightly differently,  they have a different execution model, but essentially,
[02:01:19] We have these three things. And the problem is that if we want to isolate the language from, like, the component cycle, like, so that it isn't tied to it, which I haven't explained why we want to do that too much, we have to use reactivity because it has its own ability to change. If you have something like Svelte or like React where the state is actually just tied to the component,
[02:01:42] it's not necessarily transferable. But as I said, they can still use this language as well. It's just kind of a matter of
[02:01:51] if you
[02:01:54] It's kind of jarring to switch modes when you suddenly just want to use something in a function or a different file, and you can't use it because it only works locally.
[02:02:04] React lets you use hooks. Even though the reaction rule is at runtime, it has to run the same way under each component. It has to be called from a component, but it is still essentially composable.
[02:02:18] Svelte's compiler doesn't allow for that, so you have to switch to stores.  But even with stores, you still have the same three things.
[02:02:28] Svelte's pushed the boundary in one way, but it's very limited in a different way. This is a challenge  with compilation because you do it because you want the syntax. You want to be able to have more  restricted language to be able to better convey intent, but it usually means you lose escape hatches,  which is a design consideration. One of the reasons one might be
[02:02:53] skeptical, more skeptical of stuff like that react, forget talk because of
[02:03:01] like you're kind of giving away a certain amount of control.
[02:03:05] give into it, that it might not be a problem, but you do lose a certain power in that tradeoff.  And this kind of always comes with compilation.  The reason I want to point out this kind of this relationship here is...
[02:03:20] is because it's very relevant in terms of how we talk about
[02:03:25] frameworks as a language because to me all frameworks do kind of have the same language  there's just subtle differences okay question now years after do you think reacts decision  not to go into state the good idea or assignments yeah it's kind of funny
[02:03:42] I this was something that
[02:03:44] This is what killed me about React.
[02:03:46] Because, and you can tell the difference. React was like, we're just a view library, which is interesting because it kind of is because
[02:03:54] you just,
[02:03:55] It's like backbone, kind of like you just read. They don't enter HTML it. They do a smarter
[02:04:01] in your HTML, but essentially they're like update some state and then re-render my template.
[02:04:06] Right?
[02:04:07] Angular was a bit like this, though Angular made the whole tree  into a big mess of dirty tech.  So again, Angular 1 or AngularJS or whatever.  But essentially, React was like a smarter backbone.
[02:04:18] Okay.
[02:04:19] Knockout, which is
[02:04:21] around, you know, back in that back one days was just a state library. So,
[02:04:27] There was a split there.  One was I'm just a state library essentially and one was I'm just a view library.
[02:04:33] And for me, I'm just a state library was the obvious choice, but it actually didn't
[02:04:38] play out that way.
[02:04:40] Thank you.
[02:04:41] I think to answer this question is,
[02:04:49] Thank you.
[02:04:51] I don't know if it was a mistake. I think they wanted to leave things open and make their opinion on it. So they kind of developed stuff out. The problem is they are changing their mind about it.
[02:05:02] React, to orchestrate what they want, they have to be a state library.
[02:05:05] hooks, the move to hooks, like it's kind of interesting.  All these things that we've been seeing going on React,  like the way that they've kind of been migrating,  has been very intentional path.
[02:05:15] They are changing what React is. This is all an incremental migration and people have been excited along the way, which is great. But essentially,
[02:05:24] reacts changing its identity over this.  And hopefully people still like it when it comes out the other side.
[02:05:31] But there is a slow thing. The one thing they haven't changed, though, is their update model, which maybe we'll talk about a little bit later.
[02:05:41] But essentially,
[02:05:43] Um,
[02:05:45] React is turning into
[02:05:49] a framework, it cares about view and it cares about state. And that might not be as comfortable
[02:05:55] Um,
[02:05:58] you know that that might not be as like comfortable for you know people who kind of got accustomed to  being just a viewed library that's why there's kind of like a backlash from like the x-state  type side of things like oh do we need suspense we can just
[02:06:10] represent it because with state you can represent anything.  Solids can go to the extreme where we're just like, oh,  rendering is a side effect.  It's like the exact opposite mentality is React, which  are like, oh, rendering is pure.
[02:06:24] So,
[02:06:26] Different philosophies.  I'm super stoked that React is taking stuff  a completely different way because like,
[02:06:31] I know that they're working on stuff and approaching problems in a completely different space.  And because of that, you learn things from that.
[02:06:39] Um,
[02:06:40] But I mean, that's me thinking like a science
[02:06:43] scientist sort of perspective, not necessarily like what I believe is better, so to speak.
[02:06:49] - Yeah, yeah, the VFR background had models.
[02:06:52] and they made it part of their solution. React never added the models, but in a sense, early React expected you to bring the models.
[02:06:59] So the fact that they were there and out there doesn't change the equation, so to speak, to a certain degree, other than who's responsible for holding the bag in the end.
[02:07:09] So yeah, I mean, that's fair enough.
[02:07:12] What I'm trying to get at is we've seen this language before.
[02:07:17] And
[02:07:19] Okay.
[02:07:20] attacking reactivity as a language
[02:07:23] right now.
[02:07:25] there's basically two approaches. I showed the identifier approach, but I don't think it's really viable because it's just a compiler, syntax, sugar. And
[02:07:34] the two approaches we've seen,
[02:07:37] is the one
[02:07:38] enforced by or done by Svelte. And this is kind of overdoing it.  I'm showing a signal or state and an effect as a label.  But, you know, with React, this is our service felt.  This is let and this is dollar sign like.
[02:07:51] Oh.
[02:07:53] right like essentially this kind of labeling is is is the approach that they've taken to like to  language and while this is really powerful the problem with this as i mentioned is it  doesn't escape the file you're looking for these symbols
[02:08:06] how do you turn the symbol into a use
[02:08:11] lager or something, right?
[02:08:13] You don't.
[02:08:16] Thank you.
[02:08:17] .
[02:08:22] - Right, and then I talk a lot about this kind of composition, King. We did a stream a few weeks back where I showed how to turn a for loop into a paginated component in four different frameworks. And it's the same kind of problem, like view or a few of them like Svelte with their template and language.
[02:08:39] Like you could always use the language on the outside and try and change it.  But in the case of something pagination where the child needs to control the  pagination, you actually need to change the API you present.
[02:08:59] So this is a big constraint. And it's funny because when Vue introduced the Sugar RFC, the V1, it was like Svelte. They just did this. It was like ref colon. And this is where people kind of go to, but it has this terrible shortcoming.
[02:09:15] Um,
[02:09:16] Whereas
[02:09:18] version two, which I'm calling function decoration, is
[02:09:22] And
[02:09:23] I'm using Marco here as an example, but you can see,
[02:09:26] Um,
[02:09:28] Yeah, this looks a lot like Svelte. I mean, yes, there's angle brackets on the tags here, but essentially the key difference is because you know that this is a tag, you know that it's special.
[02:09:38] like,
[02:09:39] It's not just a variable.
[02:09:41] It is
[02:09:44] this.
[02:09:45] The problem with this is if you want to use Doubler,
[02:09:50] or whatever, this is a special symbol that can't change. Here,
[02:09:55] you can just rename this to a different tag. This is already doing the job of identifying for you in a universal way. It's composable because we're decorating the function call
[02:10:06] instead of
[02:10:07] decorating the
[02:10:09] Instead of saying this is a type, this is kind of like typing it, saying,
[02:10:14] this is a reactive double value.
[02:10:17] where this is saying,
[02:10:19] like.
[02:10:20] Doubler is.
[02:10:22] essentially.
[02:10:23] is a function that returns a reactive value.
[02:10:28] Vue is actually
[02:10:31] doing this. See, they put the dollar sign and the new ref sugar on here. And if this seems weird to you,
[02:10:36] per second.
[02:10:38] React,
[02:10:40] is also doing this.
[02:10:42] you've been typing it yourself this whole time.  It's just three letters instead of one letter.  It's not dollar sign ref.
[02:10:48] use ref.
[02:10:51] They're not using a compiler to do this, but they've actually set up the steps here.
[02:10:55] And really, this shouldn't be a surprise for anyone.
[02:10:58] Right. Like,
[02:10:59] I think actually someone said this the other day,  and they were like an awestruck.  I was like, oh, I thought that was kind of obvious.  That's why they made that decision with hooks a few years ago.  But I guess that's what we're doing in the stream,  because it isn't maybe obvious.
[02:11:10] In a sense,
[02:11:12] If React really wanted to, they've been telling you all the use use and use it conventionally is very strong because
[02:11:19] of this dollar sign thing. And to be fair, in hindsight with solid, I might have
[02:11:24] I keyed in on that a little earlier, but the problem is I was already using these reactive primitives before React Hooks came out, so I didn't think of standardizing on a convention here. But from a compiler's perspective, you know, having this makes all the difference in terms of composability. If you put it on the label, it's not transferable. If you put it on here, it is. Whether it's a tag, whether it's a symbol,
[02:11:47] This is the way you solve composition in a compiled language, at least
[02:11:54] right now. I offered a third solution in this article, or fourth solution technically, and I don't know if we'll ever get there, but
[02:12:03] it was it was what if it was the other way around essentially like if everything was the dollar sign  by default instead of the other way around we could have a something that looked like svelte and just
[02:12:16] always updated. But I think that needs to be proven and it's a whole other craziness.  But I just wanted to kind of point out that this thinking...
[02:12:25] as as a language has actually been converging on this function as a decoration thing right um  not sure i probably don't still have dylan in the chat i'm trying to there's uh was
[02:12:40] Oh, Marco.
[02:12:43] I want to see if I can do it.
[02:12:48] Thank you.
[02:12:48] Yeah.
[02:12:49] Thank you.
[02:12:52] Okay.
[02:12:59] Thank you.
[02:13:03] Thank you.
[02:13:05] All right.
[02:13:07] use concise mode but
[02:13:10] I'm just going to quickly make our bot an example again.
[02:13:13] when I open.
[02:13:15] uh,
[02:13:15] I'm still here.
[02:13:18] I'm just going to use our button example in Marco,  and kind of show what I'm talking about.  But in a sense--  oh, what was there now?
[02:13:30] Marker is a funny language because it's because of the fact that it's markup, it is literally like,
[02:13:37] you can't write less code than it. It's basically impossible.
[02:13:43] And because Marco's taking a different extreme,  it lets, instead of trying to stealth,  like we'll try and make it look as much like JavaScript  as we possibly could.
[02:13:54] Um
[02:13:56] There we go. Marco is like, we're going to add exactly the syntax we need to do the job. So there's nothing there's no framework out there that writes less code than Marco. And if and if anyone actually comes and does it, we go, oh, I don't know if people remember there's something called pug.
[02:14:13] Um
[02:14:15] And in pug,
[02:14:18] or originally Jade, white space mattered, right? And in a white space matters framework, did I do that wrong with space?
[02:14:31] Oh.
[02:14:32] Thank you.
[02:14:34] All right.
[02:14:36] the whitespace matters framework, this example is not great.  You can write even less code.
[02:14:43] Right. I think some people were saying like, oh, the sweet spot is if you do this. But just wanted to show off this kind of cool language for a second because
[02:14:59] Um,
[02:15:00] Again, it's funny, but this slash denotes essentially that it's a tag. And, you know, like, essentially, it allows the same kind of advantage as something like refsugar in view, essentially. And, you know, it's a tag.
[02:15:17] can compile like this.
[02:15:19] I just wanted to kind of talk about this kind of convergence of language,  because with Marco, what we've chosen to do is we use let for our state  and we use const for our derivation.  So if you wanted to make it double count.
[02:15:33] double equals what um
[02:15:37] X times two.
[02:15:39] and then if I put double in here instead,
[02:15:44] you know, whatever, right? Weird language for some people, but I think once you start using it, you realize just how concise it is.
[02:15:54] So,
[02:15:55] Yeah, this is kind of the language conversation that's been going on. And it's the second kind  of part of why about the React memo conversation we saw going on. Because essentially,
[02:16:07] with their whole React Forget thing,
[02:16:10] they wanted to get rid of having to call memo to do this, right? Because the problem with React is the whole thing reruns. So like, you kind of having to worry about when to memo stuff or use callback is really awkward. Can't the compiler help us? And the answer is, is, is, is mostly yes, if, if you can kind of trace where things are being used. But,
[02:16:37] as i said the the real powerhouse of these of of the approaches and where like the simple  stuff usually falls apart is um what do we want to call this double
[02:16:50] is...
[02:16:51] Thank you.
[02:16:51] um
[02:16:53] So, I think that's a good question.
[02:16:55] um
[02:16:58] Just a second, I'm just going to...
[02:17:01] is if you can essentially
[02:17:05] Thank you.
[02:17:06] Thank you.
[02:17:07] Thank you.
[02:17:10] you
[02:17:11] Thank you.
[02:17:12] Use this example.
[02:17:14] Yeah.
[02:17:15] Hoping I'm doing this right. It's been a little bit.
[02:17:22] Um,
[02:17:23] is
[02:17:24] I guess I didn't need these tags here. I could have used concise mode if people are into that.
[02:17:33] is retaining that
[02:17:36] that
[02:17:38] consistency.
[02:17:46] What am I doing wrong?
[02:17:48] You know what, let's just do this just in case. See if Dylan can tell me what I'm doing wrong.
[02:17:58] Bye.
[02:17:58] Just in case.
[02:18:06] It's also possible that this is just a limitation of the playground. This is very, very, very new.
[02:18:11] Though I swear I did this a few weeks ago.
[02:18:16] I'll be the happy part of the guess of it.
[02:18:20] interesting maybe maybe we'll move on from this for a sec but
[02:18:25] essentially
[02:18:27] Let's...
[02:18:30] uh
[02:18:32] I think I might actually be...
[02:18:37] Thank you.
[02:18:39] Do you know what it is?  Oh, I'm sorry about that. It was literally just because of missing an S.
[02:18:52] - Thank you.
[02:18:53] Thank you.
[02:18:54] um
[02:18:56] Yeah. How bad am I botching this, Dylan?
[02:19:02] Atchers restructure.
[02:19:04] Thank you.
[02:19:05] Thank you.
[02:19:08] Thank you.
[02:19:10] Right, right.
[02:19:12] Thank you.
[02:19:13] Thank you.
[02:19:17] It's because...
[02:19:20] uh
[02:19:23] Sorry, silly me.  I call it really written this in a shorter form.  This is basically like the props object  and you can alias it and then here.  My whole point is that composition is still alive here  even with a compiled approach essentially, right?  Like we can just change the keyword  because we know this is like the use hook.  This is basically what I wanted to kind of show.  But that's kind of like the baseline for today, right?
[02:19:53] obviously is that
[02:19:56] All right.
[02:20:01] is that if we...
[02:20:04] is that if you look at something like PEG, then I'm going to kind of...
[02:20:09] Let's switch to the next section here because this is mostly what I want to
[02:20:13] Um,
[02:20:15] kind of talk about, in terms of the language stuff, we're going to talk more about it.
[02:20:24] Thank you.
[02:20:25] I didn't make a banner for this one.
[02:20:28] Thank you.
[02:20:29] Thank you.
[02:20:32] Second.
[02:20:34] Thank you.
[02:20:35] Taking compilation further, let's kind of go into this section. I want to talk a bit more about, you know, doing more that we talked about server side rendering, we talked about templates, we're talking about this, often this kind of nice composable language thing.
[02:20:48] like where does this lead us, right?
[02:20:51] One of the cool things that I like to show off about this is
[02:20:57] Thank you.
[02:20:57] is
[02:20:59] Thank you.
[02:20:59] If we can, I'm going to forget about double for a minute. If we can, uh,
[02:21:06] And let's just...
[02:21:09] Thank you.
[02:21:11] Um...
[02:21:12] Thank you.
[02:21:13] I don't know what was it again. Maybe a span here. I just want to separate the button from the...
[02:21:23] from the display of the count.
[02:21:27] Let's make it a .
[02:21:30] Thank you.
[02:21:31] Thank you.
[02:21:34] Yes.
[02:21:36] is maybe if you've been seeing how we can,
[02:21:42] with things like React,  break things into really small components.
[02:21:49] Right.
[02:21:50] that's that's super powerful but what what if and you we've been we've been co-locating our state  everything we've been doing if you look at things like suspense if you look at things  where we're kind of inverting the control we're trying to write
[02:22:02] our state with our components. First we had class components. Class components
[02:22:07] are
[02:22:08] Um,
[02:22:10] you know, big blobs of life cycles, right? We've seen that. Then we got React hooks.  And I don't have the image in front of me.
[02:22:17] Most of you have probably seen it. Maybe I'll pull in a scale draw, but it looked, it looked something like this, right? They showed, they showed the class components and then they, they showed the code with the life cycles in it. And they were like, okay, there's this code block here that relates to thing black and this code block here that relates the thing black. And then maybe this code here in render that rinse of thing black. And then
[02:22:43] Thank you.
[02:22:45] And then essentially,
[02:22:47] The hooks version versus the class, sorry, that one.
[02:22:52] Now, maybe think purple that goes here.
[02:23:03] And then think purple that goes.  I mean, you guys can tell me if you've seen this example before.  You know what I'm talking about.  But someone-- this was kind of a very popular example  after React hooks came out that you could-- and let's add maybe  a turquoise thing here that happens here.
[02:23:23] Only.
[02:23:24] and maybe down here too,  that the class component looks something like this.  And then the hook component was like,
[02:23:33] Do you think?
[02:23:36] And...
[02:23:38] circle of purple and then turquoise.
[02:23:42] Hook component was like this.
[02:23:44] And you're like, which one would you prefer?
[02:23:47] Um,
[02:23:48] Thank you.
[02:23:50] essentially, one where the logic is spread through these life cycles, or one where all the stuff comes together. But the challenge is,
[02:24:00] either
[02:24:01] that
[02:24:02] you know, the granularity of this change, because if, sure, the class life cycle was a pain, but when you got here,
[02:24:10] What if you wanted
[02:24:14] Uhm?
[02:24:15] to split this up even more. What if this component gets too big? You now have to take code from here,  take code from here, take code from here, and make that into your new component, essentially.  You have to chop it from a bunch of different places to extract it out into a different component.
[02:24:31] So one cool area of research that I want to mention here is in Marco. This isn't necessarily the case, right? Because
[02:24:41] essentially
[02:24:43] If you had a component that showed a counter,
[02:24:47] Thank you.
[02:24:48] and say had some state that was like
[02:24:52] Show equals...
[02:24:56] True.
[02:24:59] uh
[02:25:03] Actually, I'm trying to think of the best example here to do this. But like, you pretend  you have this counter component, right? And then like,
[02:25:13] a requirement comes in that says, hey,
[02:25:15] I need to decide
[02:25:19] If...
[02:25:21] Thank you.
[02:25:22] if this should be visible now, like a new prop comes in.  Well, with Marco, what you can just do,
[02:25:31] for example, and this is one cool thing, is essentially go
[02:25:38] like this.  Suddenly-- I don't know if you've ever done this with React
[02:25:48] before.
[02:25:50] But
[02:25:52] Thank you.
[02:25:53] Thank you.
[02:25:53] Like, see, it works.
[02:25:57] If you suddenly have to add a new state to toggle, like what you're showing, you have to add it to a whole bunch of different stuff.  There's like, what if these things have their own life cycle in it?
[02:26:06] Um,
[02:26:07] you know, this all gets handled granularly.
[02:26:12] simply like this state actually gets created inside this if only if show is true.
[02:26:22] Right.
[02:26:24] And essentially, now if you want the polls to do a different component,
[02:26:27] Well, you could just...
[02:26:29] copy and paste
[02:26:31] this out in a single go.
[02:26:33] and pop it into that other component.
[02:26:35] um
[02:26:37] I'll delete this one.
[02:26:40] - Yeah, I tried the indent, but the shortcuts don't work.
[02:26:44] This must not be Monaco.
[02:26:47] but
[02:26:47] Yeah, sorry.
[02:26:48] um
[02:26:49] like,
[02:26:51] Thank you.
[02:26:53] Basically, you can write code in such a way
[02:26:57] Thank you.
[02:26:59] Thank you.
[02:27:00] Thank you.
[02:27:01] Thank you.
[02:27:03] Thank you.
[02:27:05] Thank you.
[02:27:07] Thank you.
[02:27:08] Thank you.
[02:27:09] that
[02:27:12] It's so co-located that you can literally just pull it out as you want it.
[02:27:20] I think it's a good thing.
[02:27:22] Yeah, I think this is fair. And this is the question. This is Svelte's key to success, right? And I think this is kind of why I wanted to talk about this a little bit, because Svelte looks similar, even though it executes completely differently.
[02:27:36] Like it couldn't be further from plain JavaScript.
[02:27:38] But
[02:27:39] like it looks familiar. Marco, for example, is the complete opposite concern. But it looks different
[02:27:50] and actually behaves differently. So I guess not completely opposite, but it just, it just, I agree. And I,
[02:27:56] I think this is one of the challenges of creating something that's special purpose that actually works really well.  Right. As I said, nothing is shorter, more concise, more analyzable, but it's unfamiliar and it's always going to be a barrier.
[02:28:17] can you explain a little bit more the reason i was using the if and lets and just like let  you drop them in here
[02:28:32] Thank you.
[02:28:33] The reason I said we use the tags, the let's and whatnot is to denote that special thing so that we can replace it. It could be anything. It could be double or it could be something. If you use like a label based thing,
[02:28:48] Marco actually has a syntax right now with dollar sign that lets you just write any console log, any kind of JavaScript anywhere in the template.
[02:29:01] this doesn't work in tags API mode that I'm in right now,  but I just wanted to kind of,
[02:29:06] you know,
[02:29:07] like
[02:29:09] show that like
[02:29:12] Thank you.
[02:29:12] fact
[02:29:17] Thank you.
[02:29:18] This is how you write an effect.
[02:29:29] - Well, you need the thing to denote that it's special,  unless you don't, which is what I was getting to  with the reactive script thing.  That the whole key is you have to identify that it's a hook
[02:29:40] right, so to speak.
[02:29:43] the...
[02:29:44] I mean, I'm not going to get into the language design too much on Marco right now. There's a great article where we talk about it that I'll post in chat. I just wanted to brief, there's a couple more things that I actually want to get to here, which is, where is it?
[02:30:00] que
[02:30:01] y
[02:30:04] Gracias.
[02:30:06] Gracias.
[02:30:06] y
[02:30:09] y
[02:30:12] Sorry, it's not in UI language.  Yeah, this one.
[02:30:15] Sí.
[02:30:17] So I'm just going to drop that in the chat.
[02:30:26] Gracias.
[02:30:27] Pero, básicamente, puedes escribir tu propio let tag
[02:30:31] y lo que no, como...
[02:30:37] Los otros son
[02:30:40] y los otros tipos de oponentes, son los que se han usado.  Así que se trata de la dureza.  Pero el beneficio es que es aún analizable, que puede ser otra cosa
[02:30:50] de optimizaciones, ¿no?
[02:30:53] Es como la forma que la redacta usa.
[02:30:56] Ok, so...
[02:30:58] ¿Puedo decir, que me gustaría que...
[02:31:01] para
[02:31:03] quiero volver a este ejemplo una vez. Algunos de ustedes han visto
[02:31:08] de la red.
[02:31:10] que
[02:31:12] Gracias.
[02:31:13] y
[02:31:14] Evan Yu remade...
[02:31:16] el todo MVC, el ejemplo en VIEW.
[02:31:21] y
[02:31:23] y lo hizo
[02:31:27] muy fácilmente lo que hizo es crear
[02:31:31] Y es Reactive, y Reactive es en proxies. Y ha hecho el filtro de computador. Y esto es el derivación, y el estado.
[02:31:42] Si miras en este ejemplo,
[02:31:44] cuando cambia estos, los que se pueden ver, pero cuando cambia estos,
[02:31:47] estos no se han update y cuando se han cambiado el color
[02:31:51] These don't update.
[02:31:52] Y, como dije, React era usando el compilio para la componente de compilio. En VIEW, solo usaba la reactividad, ¿no?
[02:32:01] y
[02:32:03] Y esto...
[02:32:04] Este es un tipo
[02:32:08] y esto es todo ron time y muy similar y solid, así que lo que si
[02:32:17] ¿Qué es lo que si...
[02:32:20] y también, ¿no?  ¿Dónde está el mismo ejemplo?  Y, sorry, la conversación, ¿qué es?
[02:32:38] ¿Espera?
[02:32:42] El beneficio de XML, y es por eso que voy a mostrar este ejemplo, es porque co-locate  es fácil en el Marco ejemplo.
[02:32:51] cuando se ha el si statement
[02:32:53] en aquí,
[02:32:56] y
[02:33:05] Gracias.
[02:33:06] y el estado es nesta. Si intenta hacer esto con JSX, tienes que escapar con brackets, ¿no?
[02:33:17] ¿Y qué es?
[02:33:19] ¿Qué es lo que es?
[02:33:21] pero
[02:33:23] Este estado es el estado de la sub-thing.
[02:33:26] ¿Qué?
[02:33:26] Esto me da cuenta de este ejemplo.  Así que, "Ok, vamos a hacer esto en solid".  Y yo he hecho esto en solid.  Y lo que es cuando estaba haciendo esto,  lo que me ha hecho aquí,  todo lo que se llama cuando se llama.  Pero, cuando te apete esto,  solo una call.  Así que, vamos a hacer esto.  Y se, solo se llama una calla una vez.
[02:33:45] y cuando activas esto, no cambia el "updato".
[02:33:49] ¿Qué es lo que se ha hecho?
[02:33:50] y cuando cambia el color, no es tan triggerno. Y, como Vue,
[02:33:59] no
[02:34:01] El motivo es que en nuestro listo de a la Store, que es como Vue's Reactive, y es finegraint.
[02:34:10] no necesito re-run los componentes. No re-run. Es solo lo que cambia. Cuando te togles a store, es un cambio de una to-do. Cuando te lo re-re-re-re-un, no re-run todo en la memoria. Para ser un hecho, Svelte funciona porque es separado. Es un poco menos granular.
[02:34:27] más como lo que
[02:34:29] pero es un hecho de que se ha hecho un framework que no hace esto, que es lo que la pointe fue. Pero entonces, me di cuenta algo cuando estaba haciendo esto.
[02:34:41] El memo...
[02:34:43] que empezó a esta conversación
[02:34:46] Porque esta conversación empezó porque...
[02:34:50] ...there was this filtered...
[02:34:53] Gracias.
[02:34:54] y
[02:34:55] Gracias.
[02:34:56] en React Use Memo.
[02:35:03] Gracias.
[02:35:04] Gracias.
[02:35:07] Eso es lo que empezó. El idea era que no se hagan el membro. Después de hacer un filtro, se hagan clic en el color, y si no se hagan el componente.
[02:35:19] y
[02:35:23] en el vídeo de la que se ha cremado para hacer el mismo, para hacer el mismo, para hacer el mismo.  En este caso, porque de la reactividad de la fine graineda,
[02:35:32] No necesitas
[02:35:34] el memo.  Y puede escribir este ejemplo con no memo y es granular porque el list no cambia, solo el todo lo que el todo.
[02:35:44] y
[02:35:46] y
[02:35:48] Gracias.
[02:35:49] Y, sin embargo, no hay que preocuparte sobre los datos que ocurren en el componente.  Es como, la checkbox fue y lo que fue.  Es completamente isolado.  Pero, Vue puede hacer esto, también.
[02:36:05] ¿Qué si ponemos el componente de todo?
[02:36:08] inside
[02:36:10] Gracias.
[02:36:11] El ajo de la lista, perdón.
[02:36:14] y en línea y en este, no hay todo componentes.
[02:36:19] que básicamente tiene una componente con su propio propósito de datos internamente en aquí.
[02:36:27] y esto es el marco ejemplo, excepto en JSX, es más verboso. Es el idea que podemos crear state si queremos, o tener que estar nestado, no importa
[02:36:42] el componente no importa.  ¿Cómo podemos hacer esto nesta porque no va a tratar de la otra componente de nuevo?
[02:36:48] y
[02:36:49] Just because of the nature of fine grained is you don't need all the memos because it's never going to call it again.
[02:36:55] no te voy a llenar y no te voy a memorizar. Así que, así que, es interesante que la solida, que ya he mostrado, es solo un rúntime. El compilado es un montón de clonemos y un
[02:37:07] CrateFX.
[02:37:08] y
[02:37:09] aplicar a la
[02:37:12] A reactive language.
[02:37:13] ¿Puedes decir que hay un compilado?
[02:37:19] Esto es un VDOM. Si nos hemos visto esto,
[02:37:24] Gracias.
[02:37:25] Este es un VDOM como React. La próxima versión de Marco no será.
[02:37:33] Gracias.
[02:37:34] Essentially,
[02:37:37] que se usa el estado de aquí porque no es sobre el componente.
[02:37:43] Gracias.
[02:37:44] Gracias.
[02:37:44] Gracias.
[02:37:46] Sí, un poco, pero los compilables no tienen eso.
[02:37:53] El desgrado es que es posible que pierda reactividad.
[02:38:01] Es difícil para los compilers, ¿sí?  Para hacer esto, ¿sí?  Por eso hay un análisis y, como, estos especial...
[02:38:11] con los resultados de la redactividad.  En realidad, con los resultados de la redactividad,  con los resultados de la redactividad,  podemos ver cómo se puede deslizarse el resultado.  Pero es posible que desistruzse la redactividad y pierde la redactividad.  Generalmente,
[02:38:31] It should require more memory to create these subscriptions.  But because of optimizations ahead of compile time  to do the clone templates, i.e., not have that tree  that we saw here of like--
[02:38:44] CREATE CREATE CREATE CALLS
[02:38:47] Soled has...
[02:38:49] y mejor creación performance. Es como la mejor forma de la parte de los lados.  La mejor updates es la granulación de reactividad, pero no puedes matcha
[02:38:57] y
[02:38:58] el call se más optimizó que se ve en otros frameworks.
[02:39:03] Svelte puede optimizarlo un poco, y eso es lo que estamos haciendo en marco 6.  Pero generalmente, los tres elementos de...
[02:39:09] Separar las partes de los clases, la capacidad de hacer supergranular updates sin diffe, y el final, para poder usar proxies o nested reactivity para isolar las partes de la tree, es el motivo de la solución.  Es fácil, básicamente, scores top scores en todos los tres categorías. Other approaches can only usually get dos de tres, a best.
[02:39:39] Bueno, cross-file significa
[02:39:43] Si importas algo de otra...
[02:39:46] un nuevo file.
[02:39:48] Like, solid just passes  a function around, essentially, right?  So, reactivity is retained  because you can always call that function.  It's felt you can't, like, get  the let out of the file, really.  Like, there's two-way binding, but  you can't just, like, make a function and import it.
[02:40:05] lo que se pierde la actividad. Esto es lo que se trata de composición.
[02:40:11] Y en Marco, nosotros usamos esta información un poco a que nos ayudamos
[02:40:18] decidir qué podría ser reaccionado. Pero esto es solo posible. Y en general, por eso, por eso,  por eso, es por eso, que es el resultado de la solución. Y Marco es usando un versión de compiletime,  que tiene un poco de traje de traje en ciertas áreas. No tiene el proxies,  así que el reactivity tiene un poco más de un poco. Pero, básicamente, es que la trifecta es
[02:40:48] no necesito pensar en la memoria de memoria, si es muy expensiveo, si es como, "Okay, esto va a tomar tiempo" porque es que es que se ha sido construido por la forma de design.
[02:41:00] Gracias.
[02:41:01] Oh, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah. Svelte doesn't do composition. Like, you can use stores to do it, but you've kind of switched the model, and then once you're back to stores, you're just doing full invalidate calls, which are fine. It'll do the diff loop, but, like, you can't nest state in Svelte, you know, you can't go, like,
[02:41:20] y que no importa mucho, es muy bueno de una historia de la Dx,
[02:41:29] y es que se puede hacer cuando quieres hacer los componentes. Svelte es muy top-down.
[02:41:35] Y, ironically, view in Solid are actually more granular. So, as I said, it's a slightly different tactic, but it's why, I mean, if you look at the JS Framework Benchmark, Solid does outscore Svelte on pretty much every single, like, every single category.
[02:41:56] Pero, generalmente, lo que quiero mostrar es que Marco está viendo si puede hacer esto con un compilación, solo hace que lo haga en el ruta, pero el key gist de esto es que es sobre...
[02:42:09] como esta idea de que los componentes son puros de overhead.  No estoy diciendo que no escribamos componentes,
[02:42:16] El reaccionamiento de la conversación es sobre
[02:42:21] Components.
[02:42:23] Es como memoria de componentes y asegurarse de que no se rean. Si construimos tu propósito, eso es el granulado que te está trabiendo.  Podemos hacer cosas más si podemos mover de esa granulada. Rich Harris en su Virtual Dom, Pure Overhead, usa este ejemplo. Es muy, muy similar a la mvc.
[02:42:53] You can write this in a different component so you can memoize it so it can have its own kind of separation.  But generally speaking, if you do it kind of...
[02:43:01] como
[02:43:03] en un modo de hacer un trabajo extra cuando hay un VDOM.  Svelte solucionamente esta problema, pero es...  Es un problema diferente, los componentes son los boundaries,  básicamente.  Son las cosas que reactan...
[02:43:20] Y ya está automemolizando.  Tiene un costo.
[02:43:24] lo que tenemos que hacer es salir de los componentes, que es no solo sobre la redacción reactiva o compile-time,  puedes usarlo con ambos los aportes, es un completamente diferente de la paradigma.
[02:43:39] Gracias.
[02:43:42] Gracias.
[02:43:43] Sí, sí.
[02:43:45] Anyways, I'm going to move on from this to kind of showing what else we can do with compilation here.
[02:43:53] El motivo de la granulación es que es un área de investigación. Otra cosa que es muy interesante es que
[02:44:07] Oh, where are we? Sorry, I have so many...
[02:44:10] ¿Tienes que abrir ahora?
[02:44:13] es...
[02:44:15] Gracias.
[02:44:16] Gracias.
[02:44:17] Gracias.
[02:44:18] Gracias.
[02:44:21] es...
[02:44:22] Sí, no es aquí. No es aquí.  Reciente Michael Rawlings gave a presentación internamente en eBay.  Y yo quería mostrar cómo esta compilación de lenguaje,  como lo que Marco es haciendo,
[02:44:44] puede ser que le déjame
[02:44:46] improvements not just in performance like this but uh you know like for rendering but like stuff  for like sending less javascript this is and doing less work this this is kind of the cutting edge  stuff and i thought it'd be interesting to kind of end this session talking about um what what can be  done here
[02:45:07] Gracias.
[02:45:08] Gracias.
[02:45:08] Gracias.
[02:45:09] Ok, there's a question here about the same demographic, because it's not exactly top-down execution. Yeah, the interesting thing is with a declarative system in theory, you only need to debug the imperative escape hatches in theory, unless there's a bug in the library, because it's like, how does one,
[02:45:28] Debug.
[02:45:30] HTML.
[02:45:32] ¿Puedo debug html?
[02:45:34] Declarec stuff is an extension of that.
[02:45:47] El derivación y la ejecución se puede ser un poco más complicado, pero sí.
[02:45:53] No sé si es más complicado que la rules de hook, ¿verdad?  Solo necesitas herramientas de herramientas.
[02:45:59] Vamos a hablar sobre la hidratación por un momento.
[02:46:01] Gracias.
[02:46:03] En los frameworks, la presencia de hidratación es básicamente que se haces un botón de un sistema y hay que bootstrap para que el javascripta funciona cuando se empieza a.
[02:46:14] y
[02:46:17] En los frameworks, lo que significa que básicamente se encuentre donde el HTML es, donde la componente es en el HTML, re-render
[02:46:26] que se puede hacer que la componente, se puede hacer que lo que se puede hacer, comparar lo que se puede hacer, lo que se puede hacer en la página de BDOM, en la página de BDOM.
[02:46:38] Y comparte lo que fue antes y luego attache. Pero si con el compilero, puedes encontrar ese botón y agregar el evento y no hacer ningún tipo de trabajo?
[02:46:50] Y eso es lo que hemos estado viendo en el análisis.
[02:46:56] Este es el que se veía familiar.  Yo hice un marco repl.  Pero estamos viendo el count, y estamos viendo el código.  Hemos visto este código todo el día.
[02:47:08] Sí.
[02:47:09] Pero una cosa cool con la compilación de análisis
[02:47:14] es
[02:47:15] Esto es lo que compiles ahora. Y se puede ver que es un poco de código, ¿no?  El solido y el hyper script son muy pequeños. Este es más más que Svelte. Svelte, el counter, fue como...
[02:47:28] como tres páginas o algo. Pero, y es, y esto también no se resuelve lo que escribimos, pero lo que quiero  hacer es que tenemos el templado que clonemos, que es la misma que soled, que hablamos de esto. No preocupes por este walk. Es encoded
[02:47:58] Marco aquí es, esencialmente,
[02:48:02] encoded into a string that gets called, don't worry. But essentially, what if we could separate stuff
[02:48:11] en la función que se llama "when we render" y "when we hydrate".  Es lo que es lo que es lo que es aquí.  Cuando se haces en el browser, tienes que hacer el render y la inicialización,  y tienes que hidratar por el primer momento, essentially.  La diferencia es que...  Cuando se separa el static y el dynamic parts,  como hemos hablado de esto todo el tiempo,
[02:48:32] ¿Qué es la diferencia entre
[02:48:36] entre el inicio y el hidratación.
[02:48:40] En la initial render, tienes que cloner los nodes y luego hacer un walk.
[02:48:45] para añadir la reactividad. En hidratación, no clonemos los nodes.
[02:48:49] Pero entonces...
[02:48:51] y el walk to have la interactividad.  Entonces, es muy interesante que la hidratación es una subjet
[02:48:58] de lo que un cliente-side render sería.
[02:49:02] Gracias.
[02:49:02] En Arc simple ejemplo, cuando se renderá en el browser, tenemos que
[02:49:08] Vamos a volver a ver.
[02:49:13] So our count equals zero, right?  This is like the hook, let's say.  Then we call hydrate, and then hydrate adds our button handler.
[02:49:24] Pero, sí, ¿qué does RenderCount do?  Bueno, RenderCount...
[02:49:32] y el valor que se envió en el caso de la defensa es porque el rey de la red statement returns a  dirty check y como lo que hemos visto en react forget y con el
[02:49:44] y si pasa el dirty check, entonces se llama data function, que es el que se llama Svelte, como se ve como el elemento en el dato, es un wrapper de la DOM, es un texto, no se trata de data, y entonces
[02:50:00] No te preocupes mucho sobre esto.  Esto es solo el index.  En Svelte, los 0 y 1 y cosas para que el indexe es en el contexto.  Esto es solo un index y estamos en el valor.
[02:50:11] y el clic handler
[02:50:15] El último pedazo de código es que es un update donde dice "on click"
[02:50:25] Update Count.
[02:50:27] con el nuevo count.  La revisión de valor de la cuenta y más 1.
[02:50:31] Ahora,
[02:50:33] Esto esencialmente
[02:50:35] es lo que esta componente se convierte en, así que se separa a la parte.
[02:50:44] ¿Qué pasa si
[02:50:47] We server rendered it.
[02:50:48] Y sabemos que esto no es...
[02:50:51] y no se puede volver a client render.
[02:50:55] no necesitas
[02:50:57] no necesariamente el código, no necesariamente el templado,
[02:51:02] no necesitas las walks aquí
[02:51:05] y no necesitas la exportación. Si miras aquí, hay un export que exportó la componente. All we necesitas es la función de hydrate
[02:51:13] el RenderCount y el ClickHandler.
[02:51:17] Sí.
[02:51:18] porque lo que se llama Hydrate, y en vez de
[02:51:22] para la primera vez, no lo que se puede hacer es un evento de la venta.
[02:51:31] y el evento handler se llama un update.  Así que, ya que skipamos este código inicial.
[02:51:37] Gracias.
[02:51:38] Y así, ok, bueno, no es mucho.
[02:51:40] Cuando es actualmente minifed,
[02:51:44] We just actually reduce the size of our component by half.
[02:51:49] Esto es un gran componente,
[02:52:01] con un botón, pero la picture tiene un buen html y más cosas. Nos reducido el componente
[02:52:07] por 50%.
[02:52:09] simplemente desde el conocimiento de que esto no va a re-render en el browser.
[02:52:15] Y el funny de esto es que es un componente que te apoya, y te apoya y te apoya en el browser. Pero nosotros pudimos
[02:52:24] para enviar el código
[02:52:27] porque no necesito re-render.
[02:52:31] Y esto es un pensamiento que puede ir a más adelante.
[02:52:34] ¿Qué si... lo que si...
[02:52:40] Sí.
[02:52:41] y
[02:52:42] ¿Y qué?
[02:52:48] ¿Qué si...
[02:52:50] Esto tiene no propiedad, pero si cada propiedad
[02:52:56] fue realmente escrito como su propio
[02:53:00] Function here.
[02:53:01] y
[02:53:04] el padre
[02:53:06] que
[02:53:07] import them
[02:53:09] based on whether it knew
[02:53:10] si se llamó con stateful o static data.
[02:53:14] Porque si es statico
[02:53:16] que sabemos que no tenemos que hacer ningún trabajo
[02:53:22] Essentially, and I hope I'm kind of watching this part of the explanation a bit is
[02:53:28] y
[02:53:29] y saber
[02:53:32] ¿Qué es stateful en aquí? ¿Qué necesita ser para render? ¿Qué necesita ser para hidratación?
[02:53:38] y si no es procesado de la perspectiva de la persona que puede hacer la decisión de lo que es importante para el componente.
[02:53:48] el parque
[02:53:50] No es.
[02:53:51] en la hora de ver el parent conoce de datos que tiene que ver
[02:54:00] que no es tan dynamic,  puede no importar esa parte de la componente.
[02:54:05] y todo subterráles.
[02:54:08] Gracias.
[02:54:08] Y el impacto... y el impacto que podemos hacer esto es que...
[02:54:14] porque de esta componente syntax
[02:54:17] porque de la análisis
[02:54:21] como si es un variable, si es un hook, podemos decir, esto es stateful.
[02:54:27] Esto puede cambiar.
[02:54:30] y ver si el cambio cambiado en este escenario, por ejemplo.  Así que porque sabemos que está en el campo,
[02:54:36] y el poder de hacer las decisiones de lo que puede cambiar y no puede cambiar y no puede cambiar y no puede cambiar.
[02:54:44] Shave off.
[02:54:46] un montón de cosas, no solo no enviando
[02:54:50] ¿Qué?
[02:54:51] que son estatic, como un header o un footer que nunca cambia, pero que realmente
[02:54:57] Take a stateful component and split its code
[02:55:00] Esto es un componente, un componente más complejo.
[02:55:03] ¿Qué es lo que se ha hecho?
[02:55:06] todo por el mismo tipo de habilidad de analizarlo.
[02:55:11] Este experimento que hemos estado haciendo con Marco, es compiling cosas como la reactographia en una serie de separaturas
[02:55:23] topological sorted functions like
[02:55:26] Así que todo es granular.
[02:55:29] Como la ejecución es solid, pero sin suscriptores.
[02:55:34] No sé si eso es muy complicado. Pero yo quería mostrarles a la edad qué cosas pueden hacer si se puede hacer el lenguaje o el poder de la identificación.
[02:55:49] y no hay un poco de talk y hablaba de la primera vez que se dice que se ha convertido en el javascript
[02:55:55] con un approach como este
[02:55:57] no puedes dejar el javascript y no puedes cambiar el código para el browser
[02:56:03] Quick is...
[02:56:04] como un diferente de esto. Pero con Quick,  lo haciendo lazo-loading based en interacción.  Esto es lo que la compilera nos está en el front.
[02:56:15] Sí, sí, sí. Lo que estoy en la pregunta es que cuando se hace un run, la persona puede saber lo que está en cuenta de la persona, y la persona puede ver lo que le permite a la decisión.  Y puede verlo todo el árbol para prune de lo que no puede haber en la página.
[02:56:32] Automatically and Marco, for example, is used mostly for multi page apps where you navigate actually takes you to a new page so you can actually make that assumption for like.
[02:56:43] todo lo que es lo que es lo que es
[02:56:47] You could put a for loop component, something that's dynamic,
[02:56:51] y decir, pero esta data se está en la fecha y nunca se está en la fecha.
[02:56:56] no necesitas enviar el for loop a la web, no necesitas enviar
[02:57:00] el dato de la pantalla.
[02:57:02] como la solución de la problemática de la problemática. Cuando tienes la habilidad de analizar, basado en la estatalidad. Y esto es posible porque
[02:57:12] He's using a clearly defined language.
[02:57:15] y compositores.
[02:57:18] porque las cosas como los forloops o lo que no, son parte de la misma biblioteca.  Así que esto es un extremo de lo que es.
[02:57:28] y
[02:57:30] El motivo de los ejemplos que he estado dando al final es porque
[02:57:33] En mi opinión,
[02:57:35] Gracias.
[02:57:36] Hay muchas diferentes técnicas
[02:57:40] y
[02:57:41] o sorry, we're going to see a lot of the same techniques  being applied in different places  as ways of optimizing.  I talked about the separation of the static pieces  from the dynamic pieces,  talked about ability to do nested.  Like there's different...
[02:57:56] y las cosas que pueden aplicar el problema. Pero la interesante parte es
[02:58:02] Creo que hay un pregunta de la pregunta de si
[02:58:06] el modelo de component top-down
[02:58:09] es preferable compared to the fine-grained
[02:58:12] Creo que es donde la diferencia es. No es obvio ahora porque no es obvio ahora porque no es lo que se ve.
[02:58:22] y
[02:58:23] Esto es un muy interesante
[02:58:26] cuando considera que
[02:58:28] Si...
[02:58:29] con la lengua de reacción, tienes la habilidad de la bienes graines de esto, de hacer este tipo de análisis.
[02:58:39] En un sistema de top-down, es un top-down.  Tú puedes memorizar.
[02:58:45] Pero no puedes
[02:58:48] y no lo ejecuta.
[02:58:49] Esto es un extremo.
[02:59:02] y no, solo cortamos la forma que Svelte o React Forgets.
[02:59:06] Esto es extremo. En la copiola parte, te puedes decir, "Bueno, si no es nunca funcionar, no necesito que ese código".
[02:59:15] Y eso es el interesante.
[02:59:20] Entonces,
[02:59:21] Cuando se ve react forget,
[02:59:24] We know marco 6 is heading this way, which is completely beyond that, but we implemented something similar to React for Git when we did the tags API.
[02:59:36] que hace esto que hace esto, que hace esto que hace esto, que hace esto que hace algo similar a React. Porque esto es un top-down VDOM.
[02:59:44] como React, pero es behaving
[02:59:47] como un libro de la biblioteca y es el provecho
[02:59:51] en mi opinión, para que se puede tomar este paradigma
[03:00:00] it to any sort of
[03:00:01] technology or framework without a breaking. You can't say that about React execution model.
[03:00:06] it's the reason why they haven't, they've had no,
[03:00:09] luck with like compilers it's not like
[03:00:12] the way they're looking at compilers now is like optimizing to fit their workflow, but they can't like, they couldn't remove the VDOM.
[03:00:22] you know there's this talk about you know vdoms just uh
[03:00:25] Implementation detail. Well, in React, it's not just an implementation detail. They're kind of like their model is based on it.
[03:00:35] even if if they transcend to a language they would have to change the semantics and maybe  that's the long-term plan for them.
[03:00:42] But as long as they're thinking top down,
[03:00:46] they like, that's what there's, that's what they have.
[03:00:50] It's just a bunch of memorization. There isn't a problem with it. We're getting into really into the weeds here a little bit, but I just wanted to kind of mention that like,
[03:01:00] there are repercussions.
[03:01:08] Thank you.
[03:01:12] yeah yeah i mean that's the thing but they they kind of are sorry i didn't leave that up long  enough they kind of already
[03:01:20] are like if you think about hooks and stuff like i've told people this before but hooks
[03:01:28] you know, people go, oh, yeah, you see you like really inspired by reacts API,  you know, with solid you chose to do it that way.  I'm like, honestly, the tuples were genius, but.
[03:01:36] Hooks.
[03:01:37] look like Knockout from 2010.
[03:01:39] like i i'll say it now i'll say it again um they've already made that trans transformation
[03:01:47] Thank you.
[03:01:48] Thank you.
[03:01:49] Thank you.
[03:01:50] Yeah, but, and that's the funny thing. What's the simplest solution? This is kind of the fun part, right? I think the idea of easier, simple is a thing. And I'm glad this is coming up here at the end of the kind of this talk about compilation, because like, on one hand,
[03:02:08] like Marco here or Svelte might be the simplest.  You write the least code.  I mean, maybe the syntax is too much.
[03:02:18] for some people, maybe that's like too much of a barrier.  But you go like, here's show, you know, X, you update it.  You just write something like this.
[03:02:29] But, you know, we've already seen it.
[03:02:33] Marco's stuff's actually fairly traceable, but we've already seen with Svelte,
[03:02:36] what, you know, like you get a class component, you get something kind of
[03:02:40] already out there.
[03:02:42] Yeah, sorry. React Forget is this talk that they did at React.comp. And it's React without a memo. I showed this for the to-do MVC example, but essentially,
[03:02:58] This is this is
[03:03:01] This is the compiler experiment that they're doing here.  It's an interesting name because they're kind of playing on the whole idea of memo or memorizing.  The only unfortunate part about this, and this has already come up in a few places I've seen, is some people just reverse the name.
[03:03:18] Someone responded to my tweet.  They're like, react, forget, forget react.
[03:03:23] So, you know, yeah.
[03:03:27] Okay.
[03:03:27] you know, naming things is fun. But essentially,
[03:03:38] Thank you.
[03:03:40] What I'm getting at is like, there's the semantics and stuff  that come from like what you look at it,  there's what it compiles to.
[03:03:49] as i mentioned the marco six compilations a lot simpler but you know hyperscript
[03:03:55] or solids output, sorry, not in this example, this one, is very transparent.  This is a different type of symbol.  Like the fact that what you would write is what you would write is like a different type of symbol.  So I think it depends on what you value.  And that's the biggest thing here.  There's a lot of, you know, syntaxual...
[03:04:15] considerations and preferences.  And the thing is,
[03:04:18] um i got a great you know talking along those lines uh was it uh solid labels right i love  the name of the package fits along uh get out
[03:04:31] What's it?
[03:04:34] Thank you.
[03:04:35] Yeah.
[03:04:36] I will plug into all labels.
[03:04:39] Check out this project here. This is solid.
[03:04:41] Right.
[03:04:42] But um.
[03:04:45] Thank you.
[03:04:50] it's also svelte essentially right let count i mean i don't know about the naming here exactly but essentially
[03:05:00] effect labels and effect. And actually, the creator of this library has actually been working on a solid
[03:05:11] FSC, which
[03:05:13] It's interesting.
[03:05:19] Oh, this isn't -- I hate when this happens. When you open the repo and it's not the repo.
[03:05:26] It's basically, yeah, here it is.
[03:05:30] Thank you.
[03:05:31] It essentially looks like a cross between astro and like svelte.  So you are sort of you refs, you go let count equals dollar sign signal, and then effect does this effect.  And then underneath the dash dash dash, you can just write JSX, for example.  So the reason I'm bringing this up is...
[03:05:54] I think...
[03:05:55] there's a question to be asked.  SWIX said that language servers were the new framework.
[03:06:04] And this is the thing, right?
[03:06:12] One way to describe it is,  you need to forget JavaScript to learn the language.  It's one step, yeah.
[03:06:17] when it's just, it's not a problem, right?
[03:06:20] Yeah, and I mean, people are gonna have  different preferences here.  What I was getting at is like,  some people prefer this kind of like, minimize thing.  I mean, this isn't quite svelte  because they wanted to call out,  but if you think about it, if they were,  if the author of this library was fine  making all lets into signals,
[03:06:37] which has a performance implication right cells approach does have implications it's reduced  because they don't have a runtime reactive system but you know maybe with smart analysis you can see  if something ever updated then make it a signal or if there's ever tracked or something but you  know and we are doing that basically with marco so and doing it cross-file so i mean it is possible my
[03:06:59] Thank you.
[03:07:00] you're already there like even if you get rid of this dollar sign signal it's not javascript anymore  but you could fool people and as i said maybe that's enough svelte's kind of angles to kind of
[03:07:12] I don't think it's deceptive. They're not trying to be hard. They want to make things easy.  They're not trying to trick you. But it is a bit of a trick. It goes, oh, I just said count and it  just updates when the dollar sign. But you've completely changed how it operated. And it's
[03:07:27] you know,
[03:07:29] people just don't realize that so that's how they skip that first step.
[03:07:33] um
[03:07:35] But essentially, like there's a couple of schools of thought here, like,
[03:07:43] You can attack this different ways.
[03:07:46] you know, SWCCCIDs, um,
[03:07:48] you know, the language is the framework.
[03:07:54] Yeah, yeah, I think it's valid too. That's why I actually wrote that reactive script article because I was like, can we fool people even more? Like, can we can we get composition and svelte? That was essentially what that article was. Um,
[03:08:06] I was interested in for Sol's case too, but I'm like, could we run an Svelte-like API that actually wasn't very limited the way Svelte?  I think Composition is a non-starter.  It's the reason I think React exists today because of its composition model.  People didn't even like it that much at first.  But it won people over because of its adaptability.  Not its flexibility, but its adaptability just because you can compose and build stuff how you want it.
[03:08:32] Thank you.
[03:08:34] Right.
[03:08:37] Thank you.
[03:08:40] Yeah, yeah, yeah, that's true.  What's nice about Marco is because of the separate syntax,  it's very distinct when you're in JavaScript land.  And when you're not-- one of the problems with my React script idea
[03:08:51] It all looks like JavaScript, so the back and forth is
[03:08:55] not less clear and it's felt it's like that too you're kind of like you're in the dollar  signs or you're in special zone but it's like there's other rules that carry outside the dollar  signs because lets are also like it's it's it blurs the line there's benefits of having the the clear  separation
[03:09:10] In a sense, solid cheating. Well, I'd be interested to know what you mean by that, because I view solid as a purely runtime mechanism that I would just write by hand. It's like programming with promises.
[03:09:23] Thank you.
[03:09:24] Yeah.
[03:09:26] Thank you.
[03:09:28] Right. So like, yeah, there's there's some test considerations. But the thing,
[03:09:35] The thing that I'm trying to get at is,
[03:09:38] Is the framework the language?
[03:09:40] Right, like, is it the syntax that it defines it when we're all converging? And in the case of Marco,
[03:09:45] It kind of is like the explicit syntax made that decision kind of it's carved its own ground. It has exactly just as much syntax as it means to be effective. Like it's it's it's built with that in all in mind. And maybe this is true as spelled, although spelled as a missing composition features.
[03:10:01] at its core language level not in its thing you can use stores but i just i mean in terms of language or
[03:10:08] Like, and this is why I'm kind of exploring both sides here on the compilation side, because
[03:10:12] Or another way of looking at framework is like what I'm doing with Solis, it's just,
[03:10:18] primitives like
[03:10:20] You could take Soled's primitives and...
[03:10:24] use any language you want, like
[03:10:28] this is a very imaginative version, you know,
[03:10:33] of using someone came up with this and the cool thing is sure they've spent many hours and you  know days on this stuff but
[03:10:43] Because of the power and flexibility to primitives, you could just design whatever syntax or whatever is fashionable for you and make it benefit from the approach to solid. So these are two very different extremes.
[03:10:58] Right. Like, like,
[03:11:02] is
[03:11:03] is the language is the framework the the language like are you are you identifying with this like  or with svelte syntax like if if if someone rewrote svelte with a different implementation  but had the same api would it still be svelte
[03:11:20] Or is, you know, like the lines are blurring or like, or do you just write a framework and you can write it any way you want?
[03:11:28] Right now, in my mind,
[03:11:33] Marco and almost Vue are the two complete opposite perspectives on that. I mean, you say Sol is also on the Vue side, but Vue is
[03:11:43] how many different ways can you write a component in view?
[03:11:45] I think there's three right now.
[03:11:47] You know, it's like every two years when the fashion changes, Vue will come up with a new way to write components, perhaps.
[03:11:54] Right? Like the Composition API, given the primitives kind of like solid, but then they're like, okay, well, we want to make it easier or like make something so they came up with another language. I wonder if
[03:12:04] If like,
[03:12:06] Thank you.
[03:12:06] VIEW is like the please everyone framework. So from that perspective, it makes a lot of sense because
[03:12:12] If something becomes popular, they'll just...
[03:12:15] ape it on the surface API because if syntax and that's what makes dx that's what you care about then
[03:12:22] like
[03:12:22] Maybe this is the easy part. Like, you know, look, you know, I have an example where I mock views API using solid or whatever. Like, it's just like a surface layer.
[03:12:33] But
[03:12:35] if you use compilation for good like marco
[03:12:39] it unlocks completely different doors.
[03:12:42] And I mean, that's that's that's harder to do.  And that's something you need a language for. So
[03:12:49] You know, it's one of those games where it's like, I kind of like the extremes. I like, I want to see both velocity of the extreme. I think the middle or the compromise zone is the place that's the least interesting because.
[03:13:01] like,
[03:13:02] if you're if you kind of have a language but you're a compiler but you're not exploiting it to your full usage then like
[03:13:11] You've just introduced
[03:13:13] something like like what is it doing like someone else can just copy that dx it doesn't have huge value if if
[03:13:22] you know, that's basically where my thinking is here, right? I think compilation has incredible potential.
[03:13:31] But it's not just about performance, like sheer performance, and it's not just about developer experience. As I said, the developer experience part is
[03:13:40] is copyable.
[03:13:42] Um.
[03:13:43] So, yeah, I mean, take what we have for whatever that means. I just need some water.
[03:13:52] Hello.
[03:13:53] Thank you.
[03:13:56] - It's interesting 'cause as I said,  this React memo thing's happening  'cause people are calling for it.
[03:14:08] Thank you.
[03:14:09] Right. That's sort of like the thing that's going on here, right? There's a big uproar in the React community a few months ago. And I think that...
[03:14:23] apparently Sebastian or, you know, Mark, I can never say his last name. He's been thinking about this for a while. And I don't blame him. I've been thinking about this myself for a while, too, because you kind of like, well, maybe compiler kind of solves it. It's just, it's one of those things where
[03:14:39] How hard are you fighting your model
[03:14:42] to kind of do it.  When I was talking to Dan and he was kind of going, well, you know, I only see the are immutable way of moving forward.  And he was kind of basically suggesting that.
[03:14:55] frameworks that
[03:14:56] didn't do it the way React was doing it, perhaps like didn't want to have the same kind of capabilities. I just go, no, like, you can take a very different technical solution and kind of force it into where you want it to be on the edges. You kind of, you know, shim the gaps, so to speak, right? Like this stuff, like the react, forget, and even like the hook rules and all that is really trying hard to force something that is a little bit unnatural on top of react, like,
[03:15:24] like,
[03:15:25] on top of that model, and they're finding ways to balance it and for it to make sense. And a lot of my work was always like that, like using the JSX and stuff. I love JSX because it's completely transferable. You can just take a snippet of it and move it around. It's composable. But, you know, that's unusual for a reactive framework.
[03:15:44] And I think this...
[03:15:46] I think this thing about like seeing different languages have different semantics on async. Yes. And that I think,
[03:15:53] what I showed here about state derivation effects,  I think they'll have slightly different
[03:16:01] things around this, but this is the core. This is the language we're doing. There is some convergence here. I said it when hooks first showed up because they, for the first time ever, VDOM libraries looked like reactive libraries, but there are still slight changes and our differences and
[03:16:18] like does it converge i don't know um there's a lot of different experimentation going on
[03:16:30] Yeah, so this was a possible answer to my question.  So I say if solid is a collection of ideas  that makes solid work as it does,  then yes, language doesn't matter,  it's called solid everywhere.
[03:16:38] Yeah.
[03:16:40] This is the question, right?  Maybe it's language versus paradigm.
[03:16:45] Maybe that is how we fixate on this.
[03:16:50] Svelte is saying that frameworks are language. React has always said that frameworks are a paradigm.
[03:16:55] They're like a
[03:16:57] a collection of best practices.
[03:16:59] Like, you know, you build these
[03:17:03] primitives and stuff. And I feel like in a sense, solid,
[03:17:07] represents.
[03:17:09] in a very not in technology exactly, like not in like implementation, but in philosophy,
[03:17:16] kind of what reacted when it started.
[03:17:18] Like that kind of mentality towards just a library kind of thing and that kind of
[03:17:25] like,
[03:17:27] that
[03:17:27] purity in terms of not having to walk these harder compromises, because it's newer, let's face it.
[03:17:36] gives it a lot of the same qualities that React had back in 2014 or 2015.  That's what kind of makes it exciting. And the idea is it's just reactivity.  It's the paradigm. You can model anything with it.
[03:17:47] And that's a very different idea than it's a language that can be implemented anyway. I think that perhaps is
[03:17:57] is the convergence point, or like is the, like,
[03:18:03] This versus that.
[03:18:07] Thank you.
[03:18:10] People choose the language first, not the paradigm.  I know I'm taking this a bit out of context,  but I think that is true.
[03:18:17] I think people have a you get a gut reaction when you look at how something writes, when you see how it looks like, which is kind of the challenge in a Marco face in terms of adoption.  We could literally like.
[03:18:30] I've said this before, it's funny because I'm using it too hyperbolic on stuff.  Like I understand the limitations of solid performance.  I understand that there's no clear trade offs and like there's trade offs and there's there's like places where different solutions are better and you can do that.  But for building a website, there's nothing better than Marco.
[03:18:47] like empirically
[03:18:49] like,
[03:18:50] I can...
[03:18:51] And
[03:18:52] I feel more comfortable because I also didn't write Marco initially and stuff.  But like if you're not like,
[03:18:57] multi-page app stuff, the technology is so far removed from where the competition is, it's just not even, it's not comparable.
[03:19:08] And this isn't me floating about myself.  It's just like when I found Marco, I was like, what the hell?  How could this possibly exist?  And people just not be like all over themselves on it and
[03:19:19] And it's
[03:19:20] You know, maybe it's like this, you know, like, I mean, Mark doesn't have this syntax today, but like, or it does in the type preview, but like, this is new. It's people getting over that hump when they look at the language.
[03:19:31] Because from a pure
[03:19:34] technology standpoint, think about how excited people are getting about Astro.
[03:19:39] you know, in terms of like partial hydration and stuff.  Marco does that automatically.
[03:19:44] And does it
[03:19:44] better. So it's like, like, and it
[03:19:47] It's considerably better when you consider it can work in dynamic stuff.  And this isn't a slight against Astro. It's just like,
[03:19:53] It's just not even close. I don't. But the
[03:19:57] I don't say this as someone who
[03:20:00] Like there was no competition.  There's like no other framework.
[03:20:04] until like last year that I was doing this and Marco's been doing it for like eight years, like
[03:20:08] It's like
[03:20:10] Thank you.
[03:20:11] like,
[03:20:14] These are real barriers. It's an interesting game when you look at language and syntax and people's reactions and stuff. Designing a language is hard because the best design language might be just missing the it factor, the thing.
[03:20:32] It's much harder to design a language and a framework. So I think that speaks a ton to Svelte's success.
[03:20:40] As much as I might be critical of some of the limitations for me,  as someone who likes control and sees those limitations almost like
[03:20:48] a non-starter for like my experience
[03:20:52] I like what Svelte does, and I think that there's room to improve in the future.  So, like, you know, take that for what it is, right?  Because
[03:21:00] Like, how should I put this?
[03:21:02] These things are the product of the environment they're built out of.
[03:21:06] Marco was built at eBay.
[03:21:08] were page load speeds and making sure you didn't lose milliseconds was
[03:21:13] was the thing they couldn't move off java unless they made sure that they didn't lose an inch of  performance
[03:21:20] Right.
[03:21:23] React was built at Facebook, kind of like
[03:21:27] to build
[03:21:28] almost a mobile experience in the web.
[03:21:32] Right. They did switch over to
[03:21:36] you know,
[03:21:38] react native but i mean it's it's still they they realize that like using web technology won't get  them there but essentially they wanted to build the most interactive  powerful apps and thing and it shows in terms of just
[03:21:50] the way that they view everything like it's mobile.
[03:22:01] So like, like,
[03:22:08] Yeah, yes, it is true that Marco
[03:22:12] is is is imperfect today marco six will solve those problems but i mean
[03:22:20] Any island's architecture, the state has to be in the leaves, too.
[03:22:25] Sure, like at worst,
[03:22:28] a Marco app is like, this is like,
[03:22:33] a view app or something or you know what I mean, like in terms of size or whatever. But at best,
[03:22:39] It's which is like where the like and where the mean sits.
[03:22:44] It's just better at islands in general.  But what I was trying to get in my little spiel here about it being the product of its environment,
[03:22:54] Yeah, and here's the thing.
[03:22:56] Where did Svelte come from?  Svelte was built on the newsroom floor for projects that needed to come out rapidly.
[03:23:03] short-lived, maybe a few weeks, but really flashy animations, looks good.
[03:23:11] but churn them out like quickly as possible.  Rich talked about that on a podcast I listened to, JS Party, and he kind of nailed it.  You know, like you can tell this, you know, he's not worried about nested
[03:23:25] state, you know, management, like causing too much re-renders or whatever, not re-renders because Svelte doesn't re-render that bad, but like causing like too many parts of the app to update or whatever. Like, it's just not the case they're going to hit. Right. And that thing.
[03:23:40] And if people want to understand where Solid came from,
[03:23:46] How about maintaining...
[03:23:48] Uh,
[03:23:49] maintaining a single
[03:23:54] rather large single page app, like social media, like think something like a Twitter, but private.
[03:24:00] for 10 years.
[03:24:02] and trying to piecewise
[03:24:05] change the stuff. It was built on Knockout, but essentially
[03:24:08] keep things up to date by piecewise swapping out the pieces.
[03:24:13] You can see it in its design. Everything is designed thinking in terms of large scale and in terms of control, like being able to and replaceability. It's a framework built for change and maintenance.
[03:24:28] it's not easy to adopt solid. It's
[03:24:31] It's
[03:24:32] you know, there's a bit of a learning curve, but it's a framework where like if you learn the pieces, you just apply those pieces forever. So like I'd say it's basically a framework that was designed
[03:24:42] for maintenance so you don't hate yourself in two or three years.
[03:24:46] That's not a good selling point, but it's
[03:24:49] it it it it's essentially like where the roots is like i i haven't cared about the floor so to speak  like the learning curve when i've designed solid i cared that the uh you know an intermediate or  expert engineer wouldn't hit foot guns and would be able to refactor things mercis mercis similarly  start like slipped on that word but like with with without reservation
[03:25:15] So you can just see it reflected in the philosophies of these different frameworks, what they want to do.
[03:25:26] I'm trying to remember what Vue's story was, but I think Evan was also working in a place where he was doing fast prototyping. It's very similar to Svelte, actually.
[03:25:36] in that sense. So, you know,
[03:25:41] different kind of thing in a sense maybe solid story is actually closer to to react um in terms of
[03:25:48] Okay.
[03:25:50] influence and how it was created, which means probably why I respect Reacts decisions more than other ones. So
[03:25:57] It's kind of...
[03:25:58] as long as these different perspectives different types of experiences exist  and different you know kind of gut impulses we have towards um syntax or you know
[03:26:09] you know,
[03:26:11] you know, patterns, we're going to have differences here. These things aren't going to converge,  even if they get to leverage the same techniques in certain places.
[03:26:20] huh well that was that that was my spiel and then that was a 20 minute one too so
[03:26:26] This is my longest stream to date.
[03:26:29] And I knew it would be because the topics that I covered were so wide and varied.
[03:26:35] Yeah.
[03:26:36] I'm going to give people a chance to ask any kind of last questions, but I think I said my piece today. We got to look at some stuff. Oh, you know what?
[03:26:45] I've got one more tool for you.  One more thing.  I forgot to do this earlier, and I feel really...
[03:26:53] bad about it because I felt this would have been really, really quite useful. I jumped right into compilation and showing you the outputted code, but I didn't talk at all about how we actually do it. And
[03:27:06] You know, people write parsers and tokenizers.
[03:27:10] Sorry, this is like -- this is not the thing you want to put at the end, but I just -- I did intend to cover this a little bit, and it's fairly short.
[03:27:21] Babel here is what I'm using here.  But if you've never seen it,  AST Explorer is an amazing, amazing resource,  because you can just literally choose your parser,
[03:27:33] turn on what transform you want to use this is not just javascript you can you
[03:27:39] CSS, GSL, HTML, you know, there's a whole bunch of stuff in here. And I'm not, I'm going to tell you straight up,
[03:27:46] I,
[03:27:47] I wrote
[03:27:50] solid
[03:27:52] I wrote solid in the browser, essentially. What you see down here is just DOM expressions. It  started much smaller, but now it's like 2000, you know, 2000 some odd lines. But this is the whole,
[03:28:08] Solids compiler right here in the browser.  I just, this site remembers like what you have here.  So every time I come back, the thing is here.  So like, you know, const b equals div, you know,  this will output,
[03:28:26] solid code, like template, div, clone node div. It's DOM expressions. It's not solid specifically, but
[03:28:37] Yeah, yeah, I mean, that's the whole thing.
[03:28:42] Yeah, this video is going to stay on my YouTube. All my stuff gets posted when it's done. Yeah, but the thing is, some people use TypeScript, right, to figure this stuff out. TypeScript used to not be great in Babel, so I'd be like, oh, geez, how do you go F? Like, what the hell does...
[03:29:03] or like what's this operator called? I don't know.
[03:29:09] This operator is called a logical expression.
[03:29:13] See this on the side here is the AST.  So you can write anything you want,  and they'll show you the tree.  So it starts with a file.  This is Babel's AST, but file, and then it has a program in it,  and then there's an expression statement.  And inside that, there's a logical expression,  and the operator is--
[03:29:31] dollar sign dollar sign and the right side there is a string literal
[03:29:35] And on the left side, there is an identifier.
[03:29:38] Whenever I don't know what something is or I need to figure out for the compilation, I just write something here and you basically get to see what the AST is.
[03:29:47] Um,
[03:29:48] So, you know, let's go back to const d. This is how it was so easy. People go, oh, why
[03:30:00] GSX.
[03:30:02] I opened this up.
[03:30:04] And here we go.
[03:30:05] Variable declaration, cool.
[03:30:07] and the id is this identifier and its name is d and the initiating of the variables the jsx element  who is this opening element and actually let's add an attribute um title equals something
[03:30:24] - Sure, there we go.  It has attributes and the name is this identifier,  which is a title and the value is this.  Essentially,
[03:30:33] This is more than half the work.
[03:30:39] being like...
[03:30:41] TypeScript knows what to do with JSX. ESLint knows what to do with JSX. Prettier knows what to do with JSX.
[03:30:49] It was just a matter of like looking at these trees and go, okay, I want to output this instead.
[03:30:56] Right. And how do I know what this is? Well,
[03:31:00] Thank you.
[03:31:02] figure out what I wanted to output.
[03:31:08] and then drop it here.
[03:31:11] And then
[03:31:12] go, "Okay, it's a call expression.
[03:31:16] With the call is a member expression, because that's what you call when you access a property on it.
[03:31:21] and then the arguments are here. Essentially
[03:31:26] Like,
[03:31:27] I could use it both to figure out what the code is  that I was interpreting and the code  that I was gonna generate is.
[03:31:34] AST Explorer is just
[03:31:37] the best.
[03:31:39] Thank you.
[03:31:40] Thank you.
[03:31:41] like
[03:31:44] I like the solid was written in here. Right.
[03:31:49] When people talk about, you know, oh, switch to SWC or whatever stuff like if they had rust in here and like if I could do this,
[03:32:01] with SWC, I do it in a snap.
[03:32:07] It's hard.  There's so many, all the different nodes and the properties and stuff.  There's a great handbook here, Babel, um...
[03:32:17] what was it uh handbook it's written by jamie kyle uh for he's he's done tons of stuff he's um he was  he he works in the rome team he he he i think he was co-creator of babel um he worked for discord  for a while too um and this this is a great guide i'll drop this in the uh in the chat as well but
[03:32:45] Thank you.
[03:32:46] Thank you.
[03:32:47] Thank you.
[03:32:52] Right? Like, but
[03:32:55] You know, like this is helpful, but this is a billion times more helpful.  I mean, there are features you just learn about by exploring.  I learned more stuff working with the Marco team than I did before.  Can I show you an example of the cool stuff that Babel lets you analyze?
[03:33:14] Well, if you've ever seen the Svelte repo, there's this example, right?  And it's like let name equals world and it says hello world, right?
[03:33:25] Thank you.
[03:33:26] And
[03:33:28] If you look at the JS output, we saw that. It's a lot, right?
[03:33:36] And here it is.  Here's our text content finally coming into our name.  And if you look at the SSR, it's a little simpler.  And we can see that it escaping the name  and doing all this stuff.
[03:33:46] Um,
[03:33:47] But here's the thing. With Babbel,
[03:33:53] Sorry, where is it?
[03:33:56] let's just let's just do the svelte thing let's let name equals world
[03:34:04] Right?
[03:34:07] Apple knows how to analyze variable usage, right?  So look at what solid outputs for this hello world example.
[03:34:19] it just clones the node because it knew because world is assigned to the static variable essentially  that and there's no like there's nothing else that it could calculate what the value is
[03:34:30] I'm able with solid to go, oh, this can't actually change.  So it's you doing this is the same as you doing.
[03:34:37] doing this.
[03:34:39] essentially. So the comp-- see, it didn't actually change there. When I changed-- let's do it again. See? Because we can-- Babel has the ability to actually analyze
[03:34:52] the trees this way.
[03:34:55] And getting advanced functionality like that does take a little bit of digging, but this is how we can do that crazy type of static analysis and stuff. We know which expressions...
[03:35:08] are static.
[03:35:09] We know expressions which could be stateful by looking how they're used in the syntax.  There's a ton of stuff you can do with analysis.
[03:35:16] Um,
[03:35:18] This is just like the tip of the iceberg here, right? Yes, sir. Where's the server rendered version?
[03:35:24] I have to introduce the hydrogen. I just wanted to show the
[03:35:31] like the power of compiler analysis.  It does, this is why tag template literals  doesn't get you all the way.  Tag template literals can analyze the static part,  and that's like 90% of the problem.  But with solid, we know like, we're like, oh,  if this is dynamic, let's get back here.
[03:35:57] Now it's gonna, see, we skipped escaping
[03:36:01] Now we know that this is dynamic and we could potentially be dynamic, so we do the thing here.
[03:36:10] So,
[03:36:11] What I'm getting at is we use this knowledge. We know that this is a function, so it could be dynamic. That's why we know to wrap things.
[03:36:27] if you had something that was more expensive, like, you know,
[03:36:35] Um...
[03:36:38] Like...
[03:36:41] In a dom note injected in here, and I know you can't put a div in each one humor me.
[03:36:47] Solid can look at the whole and go, oh, I actually have to put memoization guards up here so things don't over execute to make sure that div isn't created unnecessarily whenever name changes, only when the condition trains is from true to false. This kind of analysis is
[03:37:06] is the kind of stuff that you can do with a compiler.  Well, solid doesn't actually change your code out in the,
[03:37:14] the JavaScript world inside the JSX, we have a little thing.  We don't actually do that much.
[03:37:21] of this kind of trickery because we like to keep things transparent but for things like ternararies
[03:37:27] conditionals.
[03:37:29] Obviously, there's like
[03:37:31] there are, there are,
[03:37:33] We...
[03:37:34] like
[03:37:35] it's the same reason we have the show components and stuff in solid. We, we,  we have this ability to, um, you know,
[03:37:41] analyze conditions so that they can perform optimally.
[03:37:48] Yeah, so
[03:37:51] Yeah, AST Explorer is,
[03:37:54] the best
[03:37:56] best, best thing
[03:37:57] ever. And
[03:38:00] Thank you.
[03:38:02] It's really what's made a lot of this stuff possible. I just wanted to give it a quick shout out. Obviously, I intended to do this earlier because I want to talk more about the specific types of analysis we do, but
[03:38:18] you know,
[03:38:19] There's a lot you can do by looking at the syntax tree and
[03:38:25] kind of like understanding what your code does, even in JavaScript.
[03:38:30] Right.
[03:38:31] So.
[03:38:32] This is how, I don't know if I'm going to shout out one more project on compilation. If you've ever seen it, mycosis from the
[03:38:42] Guys who built quick. Builder IO is a right component once.
[03:38:48] library that you can basically write your component in any framework and it outputs it in a different framework.
[03:38:55] Part of this is understanding the language thing.  And when they started,
[03:39:00] your input code would basically had to be solid.js. You can actually see this if you
[03:39:05] Let's see that.
[03:39:05] if I can
[03:39:06] Oh.
[03:39:08] If you...
[03:39:08] If you can see the example, their use--  yeah, no, this isn't-- they changed the example from the website.  But essentially--
[03:39:17] They started as something that looked very much like solid.
[03:39:21] And then
[03:39:23] compiled to the other frameworks because Solid's language is more analyzable than React, let's say, but still use JSX because of
[03:39:32] you know, just our use of control flow components and, um,
[03:39:36] our reactive models simpler. It's back to those primitives we talked about. There's no use callback or whatever. So they used something that looked a lot like solid and can compile it to view React, Liquid. There's a full list down here.
[03:39:52] Thank you.
[03:39:53] uh
[03:39:57] So,
[03:39:58] Yeah, here's the list. React, Vue, Liquid, Builder, Solid, Figma, Angular, Svelte, Web Components, React Native, Swift. Simply from doing that, they have changed their approach now. They're actually now using a subset
[03:40:13] of
[03:40:14] of react to do it so that they like their mapping map functions and stuff but it's a much trickier  tool because they can't actually take any react component and convert it to the other languages  where in theory they could have taken any solid component converted to it not very useful from  obviously my perspective in terms of like why would you take a solid component to change it to view  per se um
[03:40:37] We want it to go the other way, but it kind of goes to show what I was talking about in terms of language being kind of like a commonality.  And as I said, there are those slight differences.  So, you know, I was...
[03:40:52] You know, this isn't a perfect tool, but it's cool to show you show like what you can do if you take that concept and kind of extend it.
[03:41:01] so to speak.
[03:41:02] see like this example here you can actually see the show component is like this is solid
[03:41:08] Four.
[03:41:10] Um,
[03:41:12] Yeah, this is basically solid.
[03:41:13] Thank you.
[03:41:15] Okay.
[03:41:19] I've seen, I gave people enough time to ask questions and we're getting almost three hours and 40 minutes. I think this was a good stream. I hope people get more value when they rewatch it again, because there's this one was dense.
[03:41:31] But thanks, everyone, for joining me today.
[03:41:34] I'm going to
[03:41:36] call it a night i think so uh
[03:41:39] Yeah, good night, everyone.
[03:41:42] See you next week.
[03:41:45] Yes, you made it to the end.
[03:41:48] Thanks Dylan.