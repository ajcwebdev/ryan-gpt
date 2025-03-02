---
showLink: "https://www.youtube.com/watch?v=FB_kBYO_vIw"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Compilation in JavaScript Frameworks"
description: ""
publishDate: "2021-12-11"
coverImage: "https://i.ytimg.com/vi/FB_kBYO_vIw/sddefault.jpg?v=61b38de9"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp, HH:MM:SS, which means the transcript is HH hours and MM minutes).
  - Let descriptions flow naturally from the content, avoiding formulaic templates.

Format the output like so:

    ## Episode Description

    One sentence description of the transcript that encapsulates the content contained in the file but does not exceed roughly 180 characters (or approximately 30 words).

    ## Episode Summary

    A concise summary of a chapter's content, typically ranging from 600 to 1200 characters or approximately 100 to 200 words. It begins by introducing the main topic or theme of the chapter, providing context for the reader. The summary then outlines key points or arguments presented in the chapter, touching on major concepts, theories, or findings discussed. It may briefly mention methodologies used or data analyzed, if applicable. The paragraph also highlights any significant conclusions or implications drawn from the chapter's content. Throughout, it maintains a balance between providing enough detail to give readers a clear understanding of the chapter's scope and keeping the information general enough to apply to various subjects. This summary style efficiently conveys the essence of the chapter's content, allowing readers to quickly grasp its main ideas and decide if they want to dig deeper into the full text.

    ## Chapters

    ### 00:00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Hello. Welcome to my stream tonight. I'm going to give it a couple of minutes as always. It's been kind of a long week, I've got to
[00:00:14]  say. I think my hair is sticking up on the back here. I've been up to 3:00 a.m. I feel like every single day I've been
[00:00:21]  working on error boundaries with suspense in solid server-side rendering essentially. Error boundaries through streaming suspense boundaries. It's pretty tricky stuff. And that's just like every
[00:00:37]  single day. And at work, it was a long week. Push to the end. I was actually working on a GraphQL client. And it was an interesting endeavor
[00:00:55]  because it was based for Marco. And we wanted an isomorphic client that supported both streaming and partial hydration, which is a pretty tricky thing to pull off. Hi
[00:01:13] . Welcome. Yeah. Anyone has to come and say hi in the chat. But yeah, just kill some time here while people join. Yeah. Maybe I'll share my
[00:01:22]  screen here for a second. Yeah. No, as I was saying, working on a GraphQL set up for Marco. And I managed to publish it literally at 5
[00:01:42] :00 p.m., like at the end of the workday, just as I was doing. It's just a purple wrapper. But it was surprisingly tricky to do
[00:01:54] . Because the truth of the matter is, a lot of streaming solutions, like a lot of solutions don't support streaming yet. So trying to make something work that supports
[00:02:04]  that with the cache for GraphQL isomorphically was actually tricky because there's no guarantee that all the data would be finished at the time you want to preset the cache.
[00:02:13]  So you have to bring the cache in incrementally. And even more so, which was kind of tricky, was, and one thing that we were doing here with is
[00:02:25]  not even sending the client to the browser if there's nothing stateful so that it could support partial hydration. So just having GraphQL queries on your page doesn't mean that
[00:02:37]  you need to actually send it to the browser. And Marco's compiler can automatically detect those conditions and know whether or not to send the client to the browser or not. So
[00:02:47]  yeah, it was a lot of fun kind of working out those problems. But managed to do it. Got that out, as I said, today at 5pm.
[00:02:56]  And I managed to get the streaming error boundaries. Everything's working except for, ironically, the simplest case, which is the synchronous case. You're right. Hey.
[00:03:12]  Yeah, no, it was actually kind of a challenging -- it is really interesting, these streaming problems, because they're a whole new realm. Like, things just work differently
[00:03:26]  when you can't depend on everything being finished or present ahead of time. And I was playing with Remix last week, as many of you know. And -- nice
[00:03:36] . Hey. And, you know, it was actually really cool the way they handled error boundaries and handled errors. And I was like, oh, man, that reminds me
[00:03:45] , I have to -- I need to go back and look at our solution for Solid. And it's timely because we're -- I'm working on a big improvement to streaming
[00:03:52] . And Cloudflare is actually -- I found out today -- well, I knew already, but they're already starting to beta test the new readable stream API. So
[00:04:01] , I'm going to get some early access to that and see how we can use that with Solid. So, I'm pretty stoked about that. Okay. So, let
[00:04:10] 's start how I start every stream now that I've kind of bantered for a little bit and talk about this week in JavaScript. This week in JavaScript was a funny one
[00:04:22] . It really started where we left off last stream. We were working on Remix. And what we did live on stream was make a Hacker News demo. And
[00:04:35] , you know, pretty typical demo. I chose it specifically because I'd already done the same demo on Solid start. And because we also have nested routing in Solid and
[00:04:45]  we, you know, have the data loading and the paralyzed -- like, a lot of the -- like, that kind of core feature that Remix is built on,
[00:04:52]  I knew that just porting the Solid project over would be pretty easy. And it was. A couple little snags, you know, when you get used to new stuff
[00:04:59] , haven't played with it before. But it went smooth. Performance is good. I was very, very happy with what we saw with Remix. And as it turned
[00:05:08]  out, Michael Jackson saw the stream and we actually talked a little bit about it. And they were actually doing the same thing. They had the same idea. They were
[00:05:17]  preparing their own Hacker News clone. And they posted it on Twitter and wrote an article about it because they decided, you know, kind of like we did towards the end
[00:05:28]  of the stream. They're like, well, let's pull out that Next.js React server component streaming demo and, you know, compare it. And as we
[00:05:36]  know, like, that demo wasn't the most impressive in terms of, like, performance. And actually, after this article got heat, Dan kind of went on to V
[00:05:50] ercel and was like, hey, guys, I think we should change the demo to make it, like, more realistic to, like, the expectations because it's
[00:05:57]  getting kind of cited as showing, like, a, you know, a bad example of, you know, like, React server components or streaming. And yeah, it definitely
[00:06:07]  needed a little bit of work and it looks like they're fixing it up. But conversely, Dan came back to look at the Remix demo and he noticed something about
[00:06:15]  their Remix demo. And it took me a while to notice it at first because I was like, wow, the scores are really good. It was actually better than the
[00:06:22]  performing in the demo that we'd put together. And I was like, what's their secret? Well, their secret was they turned off the JavaScript. They removed the
[00:06:31]  script tag. And, you know, that's something you can do with Remix, something you can do with a solid start. I mean, technically, it's something
[00:06:37]  you can do with any SPA framework. But Remix was built in a certain way where, you know, especially for forms and for, you know, anchors and
[00:06:46]  everything, that it just works with JavaScript turned off. And I think that's really cool and it's one of the best features about Remix. But it also was
[00:06:54]  kind of cheating the comparison. You have, like, this React server component demo going on with streaming that was maybe not quite the best patterns. I noticed, for example,
[00:07:04]  they were using defer instead of async tags. So they were actually waiting to hydrate until the end. And, like, it was, you know, it wasn't
[00:07:10]  the best demonstration. And putting against something, you know, that had no JavaScript on it. What tipped me off was I wasn't even looking at the JavaScript panel
[00:07:17] . I'm like, I just put it through the score and it scored the same as Marco. And I was like, wow, like, how do you do that?
[00:07:23]  Well, yeah, no JavaScript, right? I think it's a cool trick. And Remix has kind of been pushing it a lot this week and kind of talking about
[00:07:30]  those kind of benefits. I think the no JavaScript trick, though, is really mostly just a trick, to be fair. Like, there are cases where you want that behavior
[00:07:39]  built into your framework. You want that ability and you want to promote people to have the best patterns in case JavaScript does fail and you know, keep things responsible. But
[00:07:47] , like, turning it off as a performance trick is kind of, you know, like, you don't do that. Like, you're not going to actually do that
[00:07:53] . You're going to have JavaScript on and, you know, it's kind of just, like, skirting around the thing. They went back after Dan made the
[00:08:02]  PR to note that their upvote wasn't interactive, which forced them to put the JavaScript on the page. Because unlike Marco or Astro, Remix still reacts.
[00:08:16]  And to be fair, server components get around this a little bit. But generally speaking, if you have interactive stuff on your page, you need to send all the JavaScript.
[00:08:26]  And once we did that, the updated Remix demo performed very similar to our Netlify demo. And it's pretty representative of what was going on, you know
[00:08:36] , last week with what we were doing, too. So it's really cool. But as I said, I got to talk to Michael Jackson and a little bit actually to
[00:08:44]  Jacob. eBay, too. You've reached out. And who knows? Remix was solid. They're pretty similar. We have the same kind of routing and background.
[00:08:52]  So I'm hoping to see where that goes and see if that is a possibility. I think both sides are really interested about the possibility of kind of seeing that happen.
[00:09:01]  So, you know, something QR out for the future. So, you know, it's kind of cool to kind of see the continuation of the conversation from last week.
[00:09:10]  What else happened this week? Well, one other thing that happened this week that was, there's this dialogue going around because, you know, continuing with the whole Pur
[00:09:23] cell thing, and, you know, everything was moving to Rust, right? That's the conversation. And I forget where I saw it. It was on a thread.
[00:09:31]  And someone said, let's rewrite React in Rust. And I was like, I was like, I first wrote a comment that was like, I'm pretty sure it would
[00:09:42]  be slower. But then I realized, like, okay, I mean, maybe that's just me being a jerk about it. Possibly. I mean, the core
[00:09:56]  to it is the nested routing and having a solution for that. They said that their stuff is framework agnostic mostly in their whole transitions. So if, you know
[00:10:07] , if we get the nested routing figured out, I think that is a possibility too. Thank you for not rewriting React in Rust. Yeah, no. Yeah
[00:10:20] . Did you know that's today's stream? We're writing React in Rust? No. Compilation is a big topic, and we'll get there in a second.
[00:10:30]  But this all kind of ties into where I'm going with this, right? Because that was the conversation. And I was like, well, you know, I haven
[00:10:40] 't looked that much recently. How are JavaScript frameworks doing in Rust? And I posted this thing up. And I was very selective of what I showed in this demo because,
[00:10:49]  you know, you have vanilla JS. I mean, it almost already exists. And I actually can talk a bit to that. If you see this library here, Sycam
[00:10:59] ore, this guy who authored it has come on our Discord a lot and asked about the detail. He kind of reversed-engineered part of the DOM expression library
[00:11:10]  and then rewrote it in Rust. Sycamore basically has signals and stuff. It's basically solid in Rust. It's a little bit different. There's different
[00:11:18]  choices they have to make because it's Rust. But Sycamore is actually kind of along the same lines. Kind of similar idea to solid in Rust. Can you
[00:11:30]  guys hear that? It looks like my heat just kicked in. And it hasn't done that before while I've been on stream. But I'm not sure. Is it
[00:11:40]  coming through? Can you hear the background noise? It's kind of unfortunate. I've been doing this, you know, since September and this hasn't come on while
[00:11:49]  I was streaming. But do let me know in the chat if you can hear that. And I'll have to think of what I can do about that. Anyways, this
[00:11:59]  is a fine demo because I liked showing -- I like showing it in here because, you know, obviously solid does very well. Because the first couple libraries here, Was
[00:12:12] m, VineGen, and StandardWeb are like the vanilla JS. Like they're the ones you should be comparing to vanilla. And it's not the Dominator,
[00:12:20]  Sycamore, and you that you actually have a, you know, something that actually, you know, until we have something that actually is like a higher level framework.
[00:12:33]  So when you look at it, solid is what, 7% roughly slower than vanilla. Dominator is still 13% slower than Wasm, VineGen. Thank you.
[00:12:46]  Yeah, I don't have the best streaming setup. I've got some audio people on here and people who do other streams. You've got Theo who worked at Twitter for
[00:12:57]  ages and also does a lot of streaming and audio stuff. And then obviously -- it's funny, I didn't name -- I was Discordaholic on Discord here who
[00:13:10]  also does a lot of streaming. Maybe React and Solid and Rust makes sense only for SSR. Yeah. And there's some interesting work being done on WebAssembly,
[00:13:23]  too, and AssemblyScript. Part of -- you might have seen is we've been doing a really heavy overhaul of TypeScript and Solid recently. And part of that
[00:13:32]  is in hopes of supporting WebAssembly -- sorry, AssemblyScripts in the near future to be able to even look at doing this kind of compilation for server-side rendering
[00:13:42] . yes, I am on a Mac. M1 MacBook Air, 16 gig. Probably not the only person in this stream who has that computer. But -- yeah,
[00:14:02]  I mean, if you guys know something like streamer that's better, let me know. I mean, I guess I did pay for it. But I get some
[00:14:08]  money through, you know, Open Collective and stuff. And I think this is probably a worthwhile investment on that kind of side. But to put this a bit better in
[00:14:21]  the whole picture, just for a second, I'll just pull up the actual JS framework benchmark before we kind of move on, just to kind of exemplify, like
[00:14:30] , how this looks in the bigger picture and which implementations. Yeah, I can't do none because of -- you can see 772 means this is like a vanilla implementation
[00:14:44] . It basically uses stuff directly. And for that reason, I need to include these because, as I said, for the longest time, these vanilla implementations, both
[00:14:55]  web controls and WASM were slower than solid was. But just to kind of put this in perspective, the vanilla WebAssembly is about here, which you -- look,
[00:15:05]  all of these -- it's a tie across the board between these at 107. And then if you get -- kind of go sideways a bit, you see some of the
[00:15:15]  other fine-grained libraries, some of the fastest VDOM libraries, like Petit Dom and Eevee. Then you kind of get into Inferno
[00:15:26] . And then you get to Dominator. So the Inferno is also kind of out ahead of these Rust libraries. And then you get to some old lit ones that
[00:15:39]  are kind of hacking it a bit too. And then Sycamore. And then Svelte and Vue. So Svelte and Vue come in around
[00:15:47]  1:25. They're actually very close these days. And why, we'll see in a bit later in the stream. But essentially, still sad about Jyot
[00:15:58] ai's place here. I mean, Jyotai is interesting. And I could talk about that. I actually wrote a benchmark implementation for Recoil. And then
[00:16:09]  I just didn't submit it. I feel like benchmark was written specifically to screw over to students and same models. I mean, maybe. It just -- like, I
[00:16:23]  wrote it -- I don't know. I mean, I like this benchmark because it's not a -- it's not like a snapshot benchmark. A lot of them are just
[00:16:33]  like splatter the screen with these big data things. This is like taking to do MVC. Like taking a normal list and just doing stuff with it. Kind of
[00:16:44]  in a normal -- like updating a row or swapping it. Like fairly normal thing. It is an extreme case because there's, you know, a thousand rows. And
[00:16:53]  we're putting it on a mobile device that's out in outer space with a port network. Like, you know what I mean? Like we're making it go to
[00:17:01]  the extreme to kind of exemplify the differences. But like -- like if Jyotai -- like here's the thing. Any state library in React is going to be
[00:17:13]  slower than React. Like the change management that comes from React core, if you can write in a state library, you can write it manually. So state libraries are a convenience
[00:17:22]  thing. Like the core framework is always going to be your limitation. And from that perspective, like I haven't looked at Jyotai recently in here. Like
[00:17:30]  React Focal. I had some trouble with -- what was the other one? Valtio. React Recoil. When I was doing Recoil, I was
[00:17:39]  having some trouble. Basically, without selectors, these kind of libraries just get killed, essentially, because they're not granular enough. Well, the thing is, compos
[00:17:54] able atomic state primitives are great, right? Fine-grained reactivity, very similar concept. The problem is you need memoization, which also ties into what we
[00:18:08] 'll be talking about in a bit too. But like you need -- you need -- even just because you derive stuff, you still need a way of -- like React is very
[00:18:16]  pure, classically, this pure kind of derivation, immutable, kind of trained. The problem is, yeah, you need to look at memoization and like
[00:18:26]  selector APIs. And that was sort of why I had a hard time with Recoil. And I think Jyotai has a similar constraint. What does the
[00:18:35]  benchmark do exactly? Convert it to a WebAssembly and run something? No, no, no. No, no. That's the thing. This benchmark is just
[00:18:44]  a JavaScript benchmark. It literally -- the reason I'm bringing up Rust is because in the end, everything is JavaScript that runs. So -- or like it's in the
[00:18:52]  browser. So this is -- this is just taking Rust frameworks and putting them against like actual JavaScript frameworks. Like it's kind of impressive that Dominator and Sycamore out
[00:19:06] perform like Svelte, like the most popular -- like I don't consider Solid yet, you know, in that group. But like the fastest Rust libraries have pulled
[00:19:16]  out in front of the fastest JavaScript libraries other than like Inferno and Solid. So like it is legit. The problem is -- can we look down here? Theo was
[00:19:29]  mentioning this earlier. I mean, it's not bad. Min-zipped and everything. We're coming at -- or minified or whatever. It's coming at
[00:19:37]  189.2. But to just put it -- like you can see in this crowd, it's much bigger. It's like 40 kilobytes, you know,
[00:19:46]  minified and zipped bigger than Solid is. But I mean, let's -- or, you know, any of these. These are all like 40, 50.
[00:19:56]  Svelte will be down there too. But let's go down here on the other side. Like, I mean, React ain't doing too swell either. Where is
[00:20:06]  it? React 260. Like, to be fair, that's just vanilla. So let's look at something like Dominator. Yeah. Yeah. I mean, they've
[00:20:15]  been working on this. Let's look at something like Dominator, like an actual library. Okay. See, yeah, there we go. See, I think the Web
[00:20:23] Assembly version here is been kind of tweaked down to a point. You know, like, I think there's -- people who work on this benchmark are actual people
[00:20:33]  who, like, know what they're doing with this stuff. I wouldn't make -- it's not just that I like the series of tests here. Rich Harris committed the
[00:20:41]  Svelte thing. Evan Yu, when the new version of Yu came out, he made the PR himself. Like, this benchmark actually -- actually, like, has the
[00:20:54]  creators of the framework working on it actually has -- Justin gave input on the lit one. Like, everybody's been here, except the Angular team. It's funny.
[00:21:03]  I talked to the Angular team a couple weeks ago about that. I even bugged Misko about at one point we were talking about QUIC, and I'm like,
[00:21:09]  why do you guys just not come play, right? But Angular is in here, but it wasn't written by the Angular team. V3 reactivity's API and S
[00:21:16] velte are all pretty similar outside. I like it. Yeah. Yeah. I love this language thing. And we're going to, again, get to that in
[00:21:22]  a minute. This is going to be a very ambitious stream. Yeah. No, exactly. And I mean, sure, this is a stupid test, in a sense.
[00:21:32]  And, like, you know, it actually came up in something else that I was -- I had a conversation -- or had a conversation also this week, right? I told
[00:21:43]  you already I was talking to Michael Jackson about Remix. But I also had a chance to talk to Dan Abramoff, which I'll talk about in a minute
[00:21:50]  here. But I just want to kind of show that, yeah, I mean, but this isn't that much bigger than React. 274? How about Sigmar?
[00:21:57]  But, you know, Sigmar is getting a little bigger. But, you know, we've lived with worse. Hello, Ember. I don't even know what
[00:22:05]  to say about that. Like, I don't know what they -- I asked them. I wrote this in the last article. And I mean, I'm a huge fan
[00:22:13]  of the Critters member. I think they're way ahead of their time and their thinking. That'll also come out in this article -- or, sorry, in the
[00:22:19]  stream. But I -- there's polyfills and who knows what else. But, like, Ember is a beast. That's -- for this simple benchmark, we
[00:22:27] 're pulling in, like, half a megabyte compressed of JavaScript. Yeah, I don't know. But, yeah, I mean, I'm just -- to put it
[00:22:38]  in perspective, WebAssembly, maybe not that bad, as we've been saying. But on the other hand, I do want to point out that it's --
[00:22:46]  it's -- it's still core slower than vanilla.js. And maybe that'll change. I keep on hearing about it. But I think one of the interesting things about
[00:22:53]  this, and this comes down to compilation, is the JavaScript ecosystem has been building kind of into this meta language thing where we're, like, using the language to build itself
[00:23:03] . And for that reason, stuff has evolved in a very different way than it has. So, like, these Rust frameworks don't leverage the same kind of analysis and
[00:23:12]  optimizations that we do in JavaScript. Because, like, you write them like a normal Rust program. And, like, we're so hyper-optimized in this
[00:23:21]  space. That's why there's JavaScript libraries that are, like, that -- this close, like, 7% or even 4% like Mercado here, which is not
[00:23:28]  declarative, quite the same, like, solid. But it's so close to vanilla, where the gap between, like, higher level WebAssembly and WASM
[00:23:36]  and BindJet is bigger. You'd think it would be less. Because when you have the power of, you know, compilation and, like, this kind of
[00:23:42]  optimization, you know, you think the overhead of the framework abstraction would be less. But we've been so hyper-optimized along this path. And through the use
[00:23:52]  of things like compilation and analysis, which we'll be talking about, that -- that's why, in my opinion, we're -- like, I don't know.
[00:24:03]  Even if WASM gets, say, 10% faster than vanilla JS and, like, is pushed the other way, I'm not -- I'm not sure the WebAs
[00:24:10] sembly frameworks will be faster than solid. You know? So, yeah. It's going to be interesting. And, as I said, if it ever gets to that
[00:24:20]  point where there is a potential, you know, keep your eye open, so to speak, right? What's here? Size isn't that important when it's just two
[00:24:34]  times smaller or larger than something. Yeah. I mean, size is a tricky, tricky thing. It depends on what you're going for. I was saying how,
[00:24:46]  like, for Remix, turning off the JavaScript was a difference in the Lighthouse score, you know? It depends on who your customer is and where you're going.
[00:24:55]  Size has been a big focus, maybe a little bit too much. But I think -- I think it's the natural place right now where JavaScript frameworks are looking to optimize.
[00:25:05]  We've been adding so many features, making the experiences so much better. Making things smaller and actually having less JavaScript throughout the browser is, like, the new place of
[00:25:15]  exploration and one of the types of optimizations that we're going to be doing with compilers. Again, everything this week made me think about compilers. Web
[00:25:22] Assembly, Rust, and the next thing, ReactConf, which also happened this week. Right? But -- sorry. I guess the conversation is not quite open over on
[00:25:35]  this. Yes. This is the problem. WebAssembly has to go through the JavaScript layer. They have to do, like, these references and allocations. And
[00:25:43]  it's nasty. It's funny because the DOM generally, like, in V8 or whatever, is written, like, in C. So WebAssembly has to jump
[00:25:50]  through this, like, JavaScript hurdle, essentially. So maybe the performance would be way better, like, even better than 10% of benchmark like this. And if that happens
[00:26:00] , then, yeah, we're going to see a shift, I think, maybe on how we look at this. Like, not all WebAssembly has to be
[00:26:07]  huge. Obviously, this is pretty big. But I think I saw something, like, in Go that was super small. It just depends on the way they press the
[00:26:12]  runtimes of polyfills. Honestly, I don't know. React is -- the only reason I'm chuckling about this one is this takes me back a little bit.
[00:26:30]  The day that Svelte Society unfollowed me on Twitter was because someone came in and was like, Svelte's only two kilobytes, and React
[00:26:44]  is 40-some-odd kilobytes. And they're right, because React core library is three kilobytes or whatever, but React DOM is, like,
[00:26:53]  40 kilobytes. So the whole thing is, like, 43 kilobytes or something. But I was pointing -- and then I'm like, but you're only
[00:26:59]  counting the three kilobytes part of Svelte. There's also the Svelte DOM that's not counted in Bundlephobia. And I mean, I
[00:27:07] 'm like, it's still small. Don't get me wrong. It's way smaller. And truthfully, you don't pull it all in because the tree's
[00:27:13]  shaking, but just wanted to mention that. And then that was the end of my relationship with Svelte Society. But yeah, it's a funny one, right?
[00:27:23]  Dan, basically after React Comp, Theo, who's on here, was having a space. And he essentially -- I don't know, Dan crashed. I don't
[00:27:37]  know how it happened. Like, he was just doing -- every Wednesday, Theo does a, like, a coding dev kind of space where he talks to developers. And the
[00:27:48]  first time I heard it, he was actually talking about game development and that, you know, performance optimizations there. And we had this great conversation where we were -- like
[00:27:55] , I actually ended up jumping on that one as well -- where we're talking about similarities in terms of perspective in terms of optimization. And basically, Dan just jumped on
[00:28:07]  the stream. And I was also -- happened to be on Twitter at the time. So I jumped on the stream. And the unfortunate part was I didn't watch React Comp
[00:28:13] . Yeah. I mean, to be fair, Theo's going to be doing one of those interviews with Dan for the coding interview. And I -- and essentially, I
[00:28:25]  guess, they've been in contact a bunch recently. And and essentially -- so they're -- they were doing the space. And I just jumped in at the perfect moment,
[00:28:36]  because they were talking about islands versus React server components, which is, like, something I've been writing about a whole bunch for a bit here. And it's funny,
[00:28:45]  because as I said, I didn't watch React Conf that much because eBay had their internal conference the exact same day. And I was like, oh, man. And
[00:28:53]  I was actually speaking at it. So I didn't have the option of just kind of checking out React Comp. So people were, like, you know, talking about it
[00:29:02] . And I just had no context. I actually missed the whole -- the whole thing. And luckily, the conversation in the space was completely off topic. So essentially --
[00:29:13]  but it did kind of bring up a lot of these things about, like, benchmarking and whatnot, and, like, the value of the test. Because Dan told this
[00:29:22]  very amazing story about how they introduced a new feature. Basically, they were trying to fix a bug. And it was a performance bug. So what they did was they
[00:29:31]  completely refactored everything in a way so that -- how should I put it? Like, essentially, it would be more performant. They decided, like, we're
[00:29:42]  just going to re-architect this and kind of slide it in and see if it worked. And basically, the metric that -- they couldn't really tell if it was
[00:29:50]  better or not from, like, performance metrics. They can only tell, basically, from how people interact with it and less people were liking. So they're like,
[00:29:58]  oh, likes went down. You know, something must be wrong. And it was. They actually -- from looking at, like, the drop in, like, user metrics
[00:30:09] , it actually led them to actually eventually finding the bug. But what they actually ended up having to do is, after trying to do all these fixes, unwind it all
[00:30:16]  and then apply things incrementally until they could find the commit, which caused the problem. And sure enough, it was just -- they'd broken something. Like, it
[00:30:26]  was just, like, some missing logic that, in some edge case, was causing, like, the button not to be clickable. And, you know, basically,
[00:30:34]  this is a story about how they measure its scale. Because benchmarks like this are kind of a bit silly by comparison, right? Like, they test a very specific thing
[00:30:43] . And, you know, you kind of have these two extremes. Like, measuring by like button counts or measuring by the specific test. In the middle, which is where
[00:30:52]  arguably the real value is, is actually something that's hard to test. Oh, I got some comments coming in while I was talking. More important than the framework size is
[00:31:03]  the impact the framework has on your application code you write Yeah, yeah, yeah, yeah, yeah, yeah. I mean, component size and stuff. And I actually
[00:31:11]  did a comparison about this, not that long ago, where I took, you know, love Veet. Everyone's been building stuff. And I just took Veet's
[00:31:19]  kind of vendor bundle on a to do MVC, and just did the comparison across. And obviously, tricks of like partial hydration in the islands can, like, completely change
[00:31:30]  the math completely. But even there, you could see the difference in approaches on compilation affect the component size. And that had a bigger impact than library size. At a
[00:31:39]  certain point, maybe not that big, but when we got to 150 kilobytes of JavaScript, which is, you know, a big size, you wouldn't necessarily want
[00:31:47]  that to be your main bundle load. But easily something you said over the course of a single page app, you know, navigating around Svelte and React basically crossed with
[00:31:55]  each other, like, there was no difference in size anymore. Just because of how big the Svelte components were comparatively. And it was an interesting study,
[00:32:03]  because I didn't know how the end result was, I knew Solid was small, I knew that it had eked out Svelte on the kind of like, lower
[00:32:10]  mid range, because of, you know, I've been making the same demos and been doing the hacker news and all the, like the stream demos, I call them the
[00:32:17]  one where people can have enough time to make the demo kind of on the stream, but it's not like a real app. And as it turned out, Preact
[00:32:24]  ended up being kind of the winner of that day, because they kind of snuck in a little bit smaller and solid, but a little bigger in the runtime and where the
[00:32:32]  convergent points came in. But I mean, you know, I'm nickel and diming here, but it's just interesting to see that's like, your bundle ph
[00:32:40] obia isn't like what dictating this and compilation and approach that actually have a big impact on, you know, how this turns out. Oh, what do you got
[00:32:53] ? We've got Jason Miller here, speaking of Preact. Wasm might end up being net faster for apps where all the logic isn't Wasm. Yeah. Yeah
[00:33:02] , yeah, yeah. That's been the suspicion. And the thing is, JavaScript is so accessible to people. Like, I don't know if this ever changes, but
[00:33:13]  like, this isn't like a replacement thing. There might be cases where like, who knows, like when that happens, when like, you get a pure rust thing
[00:33:22] , and those like finding layers disappear, you might have like specialized frameworks, you know, built in rust and whatever, and they'll be targeted to be like, this is
[00:33:30]  the, this is how you build, you know, super great, whatever apps, you know, but like, the lovely thing about JavaScript, as we all know,
[00:33:41]  is, I'm on the wrong window. Sorry, one second. I was like, trying to do this in one slide. Is it you could you just do this,
[00:33:49]  right? Like, hello, JavaScript. Like, you know, terrible. And it's as high back, right? Like, this is this is kind of the thing
[00:34:01] , you know, that makes the web great. So yeah, it is interesting, though, definitely. Yeah, yeah, I mean, yeah, I jumped on the
[00:34:16]  stream, just because I want to hear what Dan was saying, and maybe catch up on what I missed about react comp. And I literally walked into the islands versus react server
[00:34:24]  components conversation, which it was interesting. If I'd known the content of react conf, I might have actually pressed down on the compilation stuff and some of the other pieces
[00:34:35] . It's interesting, though, because like, yeah, very similar things that are kind of targeted at different stories, like server components, because of their ability to, you
[00:34:50]  know, not ship parts of the page, you kind of go, oh, it's like partial hydration, or islands, or maybe in reverse, like, you know
[00:34:57] , you're shooting a bunch of holes through something instead of it's not islands, it's more like Swiss cheese, right. But the funny thing is that, like,
[00:35:05]  it completely changes the initial load dynamic, like, you know, you need the JavaScript upfront to orchestrate more and stuff like that. So it's gonna be interesting to see
[00:35:14] , like, where that fits in, or how these hybrids form, because like, you know, I've been looking a lot of quick, and it has this
[00:35:20]  really nice way of kind of scaling in reverse, unlike most approaches, where you can actually hydrate inside out, you know, maybe you can hydrate a component, then
[00:35:29]  get the router, and then, you know, right away to a different page. It's very interesting to see kind of where that goes. But for me, honestly,
[00:35:40]  it's all about keeping your ear to the ground, and just seeing the different approaches that are going on. So much of the stuff already exists before you, it gets kind
[00:35:49]  of shown in in the big framework, drop, you know, like, like, there's a lot of experiments going on. And that's, I guess, when
[00:35:58]  you're interacting with people are always kind of looking for cutting edge solutions, or participating things like these benchmark stuff, you start seeing these things, kind of, before they happen
[00:36:08] . And then that's a big part of what informs a lot of the decisions and directions it was solid. And, you know, I find that that part, like
[00:36:16] , very, like, very informative, like, the conferences don't always capture that, because by the time something's in a conference, like, it's already kind
[00:36:30]  of an old idea. Yeah, yeah, yeah. And I was, sorry, I will get back to that, I get kind of scatterbrained a bit. But
[00:36:43]  yeah, this is about the algorithm used to diff the lists, lowest common sequence, or whatever, shortest common sequence. It's basically the approach to make sure that,
[00:36:56]  like, sorting lists, which is kind of core to the swap rows benchmark, and finally, not as much core in this benchmark, it doesn't get showcased as much
[00:37:05] . That's why everyone's kind of similar score. It's the most, like, maybe computational part of, like, a benchmark like this, might, you know,
[00:37:14]  opportunities to kind of offload that. I've been also looking at offloading, like, maybe there's just expensive computation type stuff, like, give the end
[00:37:22]  user the way they just kind of, like, go like this, kind of send this somewhere else. Maybe, I hope not. Yeah, never chat thing. But I
[00:37:35]  was going to say, okay, so let's go back to React Comp for a second, right? It was, it was a big deal, like, coming from a
[00:37:42]  perspective of, you know, not having seen a lot of stuff coming before. It's finally here. Do you know what I mean? So, like, I think
[00:37:50]  everyone should be pretty excited about that. The thing is, we've been hearing about it for a while. So it didn't, it didn't maybe have the impact.
[00:37:55]  And what was actually the thing that people started talking about was the, again, the experimental stuff that's not here yet. And there was the, I think his name is
[00:38:04]  Sean, Sean, a great talk about applying memoization patterns to react. And it immediately kind of ring bells of, like, other work, obviously, you think of
[00:38:15]  things like Svelte, you think, obviously, I was thinking of the work that we've been doing on Marco. And again, this kind of ties in all to
[00:38:23]  why I wanted to talk about compilation tonight, right? Because there is all these different things going on right now. And, you know, by the time you hear it
[00:38:37]  in a conference, you know, it's later. And it's fine, not everyone has to be on the bleeding edge of everything. It's just, I want to
[00:38:46] , you know, if possible, unearth kind of the thinking behind this stuff. And then, you know, we can kind of go from there, and can expand
[00:38:53]  our knowledge and not be surprised, you know, I think the problem is, and I'm glad on a certain degree for reacts transparency on this stuff is, every time the
[00:39:02]  new thing comes, we're just like, Oh, my God, I can't miss this out. This is the new thing. And quite often, it's not the
[00:39:07]  new thing. It's like, it's been going on somewhere else in a slightly different form, you know, tech, we always got to hype and jump on the
[00:39:16] , you know, the thing, but, you know, it all borrows. And it even sometimes it's already been kind of done in very similar ways in the past
[00:39:23] , you know, obviously, I work in Marcos, I was very familiar with stuff like the islands architecture, like we were talking about. And also, but like,
[00:39:30]  even, you know, the compilation techniques, you know, there were libraries trying to do some stuff similar to earlier Svelte before Svelte came out, you
[00:39:39]  know, they were in this benchmark, that's how I found out about them. You know, solid was came like, directly inspired, or, you know, very inspired
[00:39:51]  by one of them, it's called surplus that was on here for quite some time. And it was it was compiled DSX. And it was 2016 time period. So
[00:39:58]  like, you know, there's a lot of stuff going on. So let's, let's kind of transition now, I think that's enough talking shop for now,
[00:40:05]  maybe I'll look at the comments before I do that. Dan is an experiment. Do we got some Dan's in the chat? But let's, let's,
[00:40:17]  let's, let's move on. I love, I love talking, you know, the stuff as it goes on. But I did say that I was gonna talk about
[00:40:27]  compilation. And honestly, that's such a huge topic that, you know, I'm already sort of regretting it. No, I, I knew that sometimes these
[00:40:36]  streams go three hours. Um, this one, I'm going to try and keep tight. But by tight, I think if it went a couple several hours, a couple
[00:40:44]  hours, and you like, that would be tight for this topic. So let's, let's kind of transition a bit here. And for me, at least,
[00:40:55]  this kind of the conversation around compilation has been going on for obviously, a while, like, we know, it's, it's been going, you know, for
[00:41:09]  years. And if you go back to JavaScript, like, you can look at, you know, CoffeeScript, or, you know, early, even like, back to
[00:41:19] , I guess, like 2010 is time period, people were finding ways to use compilation to make their experience in JavaScript better. And in a sense, like even.net
[00:41:29] , and like PHP kind of time period, I mean, even.net, you'd write like C# code, and that would generate JavaScript in the 2000s, essentially
[00:41:37] , because no one wanted to dirty their hands with it. So like, JavaScript's been kind of, this has kind of been part of our identity. But what I wanted
[00:41:45]  to kind of more talk about is like JavaScript frameworks, obviously, and for on the JavaScript framework kind of perspective. I like kind of going back to this article, this
[00:41:58]  came out in back in 2017. Tom Dale, one of the co creators of Ember, and it's not a long article, I'm not going to read it to
[00:42:09]  you, obviously. But essentially, his final conclusion here is his compilers are the new frameworks. And so here's my advice for anyone who wants to make a dent
[00:42:16]  in the future web development, time building how compilers work. That was the takeaway, the takeaway phrase, right? Like, he basically, Ember was working
[00:42:27]  on stuff, I guess, with like, bytecode, and kind of reducing the size of the templates and looking at that stuff. And, you know, there was a
[00:42:35]  lot of initial work during this time period, and he just called it straight up. And he's right, this has been the conversation, it continues to be the conversation
[00:42:44] . So that was like, the starting of the bookend. And the other side, for me, was a SWIX article. Sean here, basically, he's been
[00:43:03]  kind of noticing some of the trends. And he basically said that language versus the new frameworks, which is the other stream, he basically said, we, this might have
[00:43:11]  started as talking about compilation. But now, it's actually, instead of looking, we're all starting to look at languages. And for me, there's a lot of
[00:43:26]  truth to this statement. And we can talk a bit more about what this means, as we progress in the stream. But that's kind of the bookends of the
[00:43:33]  conversation for what I'm what I'm looking at here, kind of like, from the idea of compilers as frameworks, through to this idea of compilers,
[00:43:41]  basically as lang, or sorry, frameworks as languages. And I think it goes beyond that, even to the future. But that that's kind of the scope that I want
[00:43:53]  to focus the majority of our streaming conversation on tonight, which is still a huge amount of stuff, it just, yeah, this is December 5 2020. So this articles
[00:44:04]  about is just it's just over a year old now. And the other one was, you know, 2017. So how much has changed in that three years? I mean
[00:44:12] , three years in JavaScript is an eternity, as many of you know. So yeah, that's, that's kind of how I want to frame this. Where am
[00:44:21]  I? Let's check the chat. This was also a Rich Harris talk? Yeah, I mean, yes. And that talk is actually great. And I'm going to
[00:44:37]  get back to it in a minute here. Yeah, they first start experimenting, or at least thinking about 2017 2018. I mean, I don't know if it actually
[00:44:49]  came out till later that the as we all know, with JavaScript frameworks, we like to talk a lot about stuff that's going to come in, and then it takes years
[00:44:57]  later to show up. I'm this and that's not just a job at react. Sometimes it's just hard problems. We've been working on one of those with
[00:45:06]  Marco with automatic partial subcomponent partial hydration now for a good year. And, you know, you know, these things sometimes take time, you do experiments, figure out
[00:45:18]  what works, what doesn't work, disappearing frameworks of the promise. And we'll get to that too, hopefully. But essentially, that Rich Harris talk is actually here,
[00:45:32]  because I want to kind of, before we can even get here, I want to bring us really quickly up to speed on this whole compilation thing. The history kind of
[00:45:41]  compilation JavaScript frameworks. And I'm going to play a little video here. It's from a Rich Harris talk. It's super short, but it is. Oh, did
[00:45:49]  I not? Yeah, let me see if I have it saved here. I'm just going to pop this one. Oh. Oh, I'm going to get hit
[00:46:01]  by ads. Sorry, give me two seconds. This is my fault for not prepping this ahead of time. This is one of my favorite intros to talk ever.
[00:46:15]  It's only going to take 30 seconds. 30 seconds. Or not 30 seconds. It's going to take about two minutes. But here you go. Many moons
[00:46:23]  ago, can you guys? The JavaScript elders came down from the mountain and said, I have created jQuery. And the villagers said, jQuery? The actor from zombie
[00:46:34]  business. And Elder Reddick, for it was he, said, no, it is not a man. It is magic. With these spells, we shall tame the
[00:46:41]  capricious browser gods and bend them to our will. And the villagers rejoiced that the browser gods were indeed capricious and cruel and visited much misery upon their lands
[00:46:50] . And they replowed their fields with the new magic. And at the time of the next code harvest, all agreed that the fruits of their labors tasted sweet and
[00:46:58]  Ajax-y. And there were conferences and t-shirts and other assorted merchandise. And that was the end of the first JavaScript era. The tide came and went
[00:47:08] . The moon rose and fell. Years passed. And while jQuery was still the dominant religion, there were some who grew fearful that it was not powerful enough, the elaborate
[00:47:18]  designs of the modern age. Then one day, a traveler came from the western lands of Zuckerbergia and said, hear me, for I bring a message of great
[00:47:26]  import. You're all doing it wrong. These primitive incantations do not befit our modern age of science and technology. Look at these wretched structures you have built
[00:47:38] . I would not step inside for fear of my safety. In Zuckerbergia, we build not these amazing mud huts, but magnificent towers that reach the very heavens
[00:47:45] . And we do it not with magic, but with machines. Come, let me show you. And the villagers looked upon the machines and they liked not what they saw.
[00:47:54]  The traveler was cast out as a heretic. And yet some felt that these machines could perhaps help them meet their own ambitions. And the heretics grew in number until the
[00:48:05]  heresy became the new orthodoxy and the land was covered in machines. And that was the second era of JavaScript. I'm here today to talk about the third
[00:48:13]  era, the chapter that's being written right now. Honestly, that intro to the talk is one of my favorites. Yeah. Rich is great. And as I said,
[00:48:35]  it kind of very briefly covers the history of what got here. But I want to talk a little bit more specifically. I already mentioned CoffeeScript and TypeScript and the
[00:48:47]  use of compilation in Java and .NET early days into JavaScript. We're kind of used to it. But the next big thing, obviously, was bundlers. And
[00:49:01]  bundlers are amazing thing. Like just like some people talk about, you know, no build and kind of get back to that. You know, we've got ESM
[00:49:09]  models, import maps, all that thing. But bundlers are, I don't think they should be kept out. They're not specific to the conversation today so much,
[00:49:17]  but I don't think they should be kept out of the conversation in terms of the power of, you know, you know, compilation JavaScript. They're part of the
[00:49:25]  piece. They're just like a different phase. If you view our build cycles, like several different kind of phases, bundlers might be the last phase, but they are
[00:49:36]  still part of that compilation story. They're still doing a lot of work. And if you want to kind of see what I mean, I kind of made this example
[00:49:45]  in the roll of REPL. And I like this because it's just such a simple way of showing this. Hopefully I got this big enough that you can see it.
[00:49:56]  It's always hard. But essentially, yeah, you know what I should have, let me post this in the chat, the Rich Harris talk. It is, it
[00:50:13]  is awesome. It's one of his earlier, this is 2018. This is before Svelte 3. Svelte 3, it was a game changer in terms of
[00:50:22]  the compilation story. But this is before it, this is, he already kind of had this kind of direction. And mostly that was originally in the templating, not
[00:50:31]  in the quote unquote language part, but it is, it is definitely a great talk and it's consistent with like general theme of where things have been going, you know,
[00:50:41]  since. Okay. So back to roll up for a second. This is why bundlers are insane and why I consider them part of this compilation story. But I mean,
[00:50:50]  we all know Babbel kind of injected itself in our lives around 2015. Browsers, you know, we had to support Internet Explorer and we couldn't, we
[00:51:02]  couldn't, you know, get rid of it. Pretty much like we, our choice was not use new features or, or not support every browser. And Babbel came
[00:51:13]  in and let us transform stuff. And you started this kind of transpilation thing that has dominated web dev now for what, six, seven, seven years. Bundling
[00:51:26]  is also kind of part of that story. Maybe started a little bit earlier, but essentially we, we have these combination tools these days that people aren't really even differentiating
[00:51:35]  them when you get stuff like VEAT and, you know, WMR and all the different kinds of like parcel, like advanced kind of bundler minifier kind
[00:51:45]  of solutions. But I just want to just show this as kind of like part of the compilation story. I have two files here. I have our library and I have our
[00:51:54]  main, if you want to see this. And in our library, we have an optional feature and we have a core feature that has maybe slightly different behavior if we use
[00:52:02]  this optional feature. And in our app, we have, we calling our optional feature, we're importing it and we're calling our core feature. And on the, on
[00:52:11]  the outside, our bundler puts us together and includes all our code just the way we'd expect, right? This, this, this is not, this is not surprising
[00:52:20] , but the best thing about JavaScript bundlers and stuff is if I comment out this optional thing, look, look, look what Rollup did. it was able to
[00:52:39]  remove the code out of core, like the whole, like the, the choice of optional versus normal flow. It just said, okay, I'm doing the normal flow.
[00:52:50]  It didn't even bother, you know, importing it or bringing in this optional function. It didn't, you don't even see this boolean here. And
[00:53:00]  there's your library. Your library now is just core and you called core. And this is super powerful. This is happening all the time. Like it's when people talk
[00:53:12]  about tree shaking and stuff, it's not just like, oh, you didn't import that. So you didn't bring the whole file in. When you're talking about
[00:53:18]  what bundlers do in interview compilation, they can literally rewrite the code with inside the same function. It's not just like, oh, you didn't, you didn't
[00:53:25]  use optional. So you didn't bring optional. And it can actually change the code that you do import. And that's not happening in like a, like a
[00:53:37]  browser only runtime type thing. And I know this because I use this heavily inside solid. This is how, if you don't use suspense or concurrent mode in solid,
[00:53:47]  it literally compiles out of the output. Um, so this, this, this, I just wanted to show this, that compilation is happening. Even if you're not
[00:53:56]  trying to do anything fancy in, in, in everyday stuff you do with your JavaScript framework, it's right there. Right. Um, you kind of know it like obviously
[00:54:05]  Babel is doing the transforms, but it's, it's more than just supporting older browsers or doing that kind of stuff. This technology is, um, you know
[00:54:14] , pretty advanced. I mean, obviously this is another thing written by Rich Harris. So props to him on that too, but this is kind of like, this is what
[00:54:24]  we come to expect as a baseline. I, I mean, I have a hard time picturing ever going back simply because the power of the tools that we use,
[00:54:32]  right? I'll show you one more time. Watch. I'm calm with this. I'm like everything is here, right? Look at how much less code we get
[00:54:42]  simply by commenting that. So little side tangent, but I thought that was a great example to show the power of like Webpack, um, maybe not as efficient at this
[00:54:54] , but does it to dead code elimination? Um, this is just part of our tool chain, right? And like today, obviously we're going to focus more on
[00:55:07] , on, um, on JavaScript frameworks and not just on, you know, bundlers and TypeScript and CoffeeScript and that, but I just want to kind of really
[00:55:17]  emphasize that this is already part of what we, we, we do. So, um, yeah, where should we start? Um, JavaScript frameworks generally, uh,
[00:55:26]  actually, you know what, I'm gonna throw a banner up right now. Cause it helps me edit the video later. Um, actually, you know what, no address
[00:55:31]  the comments first. Can Webpack do that too? Yes. Maybe not as efficiently, but Webpack does have dead code elimination. Um, the big thing that made roll
[00:55:39] up cool when it first came up out was cause it was like, we are ESM only. So like tree shaking and the guarantee of no side effects is way more
[00:55:47]  powerful guarantee to make, to be able to do those, that type of analysis. Cause you're like, oh, okay. I, I already closed the example, but
[00:55:54]  you're like, you know, you don't import that function, which means, you know, you could never set optional to true, which means you could, you know
[00:56:00] , that you can hard code it to false, which means, you know, that conditional can never evaluate the different way, which means then here's the thing. Uh
[00:56:07] , Webpack had dead code elimination way before that, but it just couldn't be that smart because it didn't know about side effects, didn't have the guarantees of the
[00:56:17]  tree shaking. It could, it could, it could tell the more obvious things. Um, but yes, the limitations presented by being able to analyze, um, ES6
[00:56:27]  import syntax actually really open things up. And, um, sometimes that's what it takes and more strict syntax, um, is easier to analyze. And, you know
[00:56:37] , the fact that the imports are top level and they're, they're not like lazy or, you know, you could put a require statement anywhere that, that completely changes
[00:56:46]  the dynamic, right? You can, you can adjust the string dynamically in a required statement. I mean, obviously any kind of analysis would know that it couldn't optimize
[00:56:54]  that. But as I, what I'm saying is like restrictor syntax, better ability for a compiler to analyze. You're going to see that trend a bunch today,
[00:57:02]  right? So let's throw the banner up. So we're onto our next thing. I want to talk about templating because templating is really where this start started,
[00:57:12]  um, for JavaScript frameworks. The earliest JavaScript frameworks, um, had really simple templates. Um, like I wonder if it's still up. I'm sure it's
[00:57:22]  still up. I mean, there's obviously, uh, jQuery, but, um, Backbone. I don't know if they have any examples. It's been
[00:57:32]  so long. Oh, um, underscore had the exact same doc set up. Yeah. You know what? Screw this. Okay. Forget it. Backbone was just
[00:57:41]  like inner HTML. That was the thing. You just write some HTML in a template. When your view changed, it would go, okay, I need to update some,
[00:57:50]  some data, re-interpolate that string to put, put it in the template and then inner HTML it. That, that was state of art, of the art
[00:57:59]  rendering back in 2009. Right. And it was big. It was actually kind of declarative. Like we had mechanisms now to define programs in a structured way. You
[00:58:09]  got to figure before that jQuery was kind of, you know, it's, it's, it was kind of like the DOM API is today, like a little bit
[00:58:15]  different. They had some libraries and stuff, but essentially you were doing query selectors and you're just like writing code in a very, like, you know, kind of
[00:58:23]  like specific way, like, okay, I'm going to grab these DOM elements and do this with it. It was very kind of imperative. Backbone was like, no
[00:58:30] , we're NBC. We're going to help you kind of structure your code. It wasn't the most efficient, but it kind of got us thinking like, we
[00:58:37]  can do this in a real way. You got to understand, like, I got started in JavaScript, uh, 96, 97. And during that time period, JavaScript was
[00:58:46]  not very capable, um, at all. And you kind of use it just to decorate some things, um, through the early two thousands, um, it was mostly dominated
[00:58:55] , like backend, like PHP and stuff really kind of came into its own more dynamic server rendering. And they kind of treated JavaScript as an output format, like not really
[00:59:04]  as like the thing you built your apps with. Um, and to come back now and have JavaScript be the center stage was huge. And I mean, this coincides obviously
[00:59:13]  with like, um, V8, Spider Monkey, uh, WebKit, like all the modern higher performance JavaScript engines came out around the same time, right? Like that
[00:59:23] , that, that essentially was like 2007, 2008 thing that it happened in really rapid succession, really rapid succession. I, I'm going to say thanks to Ajax
[00:59:31]  for that. Once we could do asynchronous, uh, JavaScript fetching in the browser, um, to be able to, you know, load stuff in and not having to
[00:59:39]  go back to the server for full page loads. I mean, it started in those full page load services as like update panels and really convoluted post back systems, but
[00:59:47]  it was obvious that we would be able to be able to build apps in the browser for real. And at that point, I think all the browser vendors invested. Right
[00:59:57] . So from, from that perspective, um, backbone was like the first time we got to, to, you know, do this stuff. And I'm going to,
[01:00:05]  I'm going to show another one of my favorites. Everyone knows I'm this was my first love, you know, it was not really, but like this was, this
[01:00:12]  was when, when I came back to JavaScript, this was, this is the thing. And, uh, let me see, I'm sure maybe not a tutorial,
[01:00:18]  maybe. Yeah. Okay. Yes. Yeah. Here we go. This is perfect. This was like the next kind of templating that kind of came out. Um,
[01:00:31]  angular had a version of this and, and I'm just using knockout here as an example, but essentially you have these elements and, um, you add special attributes
[01:00:43]  and strings to them. Uh, as an angular originally was like this and views heritage kind of comes from this as well. And these, what would actually happen is you'd
[01:00:57]  render this on a server maybe, or, you know, and, or maybe statically served from a scene in the end. Um, and essentially the page would load
[01:01:07] , render the original initial JavaScript, and then it would, then you'd walk over the DOM tree and pick up all the data bind attributes and parse them at runtime and make
[01:01:23]  the thing do the thing. So it was kind of funny because like, if you had a for loop, um, in knockout, is there an example list?
[01:01:31]  Yeah. Listen collection, you know, for loop in, in, in knockout. Um, can we solve it? Of course we solve it. I love this tutorial
[01:01:39]  in the sense that everyone likes the Svelte, um, tutorial. And this for me was the first like simple tutorial. Knockout always had great documentation. Like you
[01:01:53] , you, you have the thing you could play with it and then you have the solve button. This, this format carried obviously over to self tutorials, but this is
[01:02:00]  the knockout had this, I think 2011, like very early on, but okay. Data bind for each makes sense. And then inside here is the template. So technically
[01:02:11]  it's using something you already rendered to the DOM. So you get like flickers and stuff in this because you, you'd render a TR that was like, didn't
[01:02:20]  have data, you know, like empty. And then, uh, when the jazz script loaded, knockout would come through, parse through the tree from where you,
[01:02:31]  the, the mount points, the KO apply bindings basically was the mount point. Um, and then it would like find these, parse these and go, Oh, this
[01:02:39]  4-H, pull that out of the DOM. That's our template. And then we'll clone that every time you, for each iteration of the seats, but
[01:02:46]  this, this, this was, this was, this was templating and, um, this was 2010, 2011. And basically that this is what went this obviously wasn't
[01:03:01]  going to last forever because it was kind of heavily on performance to be fair. Like especially on initial load. Yeah. Yeah. Knock, knock out, knock out has
[01:03:12]  changed a bit over the years. Well, when I say over the years, like between 2010 and 2013, but at its core essence kind of stayed, was the same back
[01:03:22]  then. Like this, this was a, this was a big influence on all my work, um, to be fair. And I, when I look at this,
[01:03:29]  I just like, they had all the pieces right here. Yeah. Angular. When I say angular, I I'm not like in the angular crowd, I'm talking about
[01:03:38]  angular.js. Um, it was also around the same time as knockout. I, it might, it might've, I forget which one was first. I like
[01:03:45]  maybe angular beat it up by like six months, but like angular, um, big part from Google knockout was actually Steve Sanderson developed it, um, and worked
[01:03:54] , uh, Microsoft, um, and, uh, you know, knockout was often used. It's kind of like on top of like a server rendered, like I
[01:04:03]  worked for Microsoft shop through the 2006 to 2012. And that's when I was working on with knockout towards the end of that. And we were using it to kind of
[01:04:15]  update the old asp.net forms in a way that would like make the JavaScript more interactive. So we'd kind of like replace it. So you had a lot of
[01:04:21]  these like pseudo half server rendered in Microsoft on that pages, it would knock out on top. That was kind of how, how it was kind of common pattern, but not
[01:04:29]  to digress too much. My, my point is we went from back, uh, we went from backbones, like just inner HTML, essentially to these languages where we
[01:04:40]  can parse the Dom kind of like tree walk it and apply the bindings kind of in time. The next natural evolution though, was what if we could walk the tree
[01:04:50]  ahead of time? Um, and the, and that, that, that essentially is, um, where, where like templating was getting to around 2013. This is 2013
[01:05:05]  is also where our timeline splits a little bit because that's when react was open sourced. So we have kind of two different ways of thinking this. There's the
[01:05:16]  data mining libraries, and then there was the, uh, there's react obviously. Um, and I was funny cause I was trying to find a repl to show off and
[01:05:27]  I was like, oh, preact is a rebel, but they don't show the source code. I mean, the reason that they don't need to is because
[01:05:33]  JSX compilation for the most part is very uninteresting. I, I like looking at it for comparison sake, but luckily babbles repl has like the stock when I was
[01:05:41]  trying to change it to like hyperscript, but it didn't work, but I'll show you what I'll talk about in a minute. But essentially the first,
[01:05:48]  the next step was, as I said, taking these templates and parsing them, um, as strings essentially. So what we, instead of doing the DOM to walk
[01:06:01]  it, you, you could just look, basically analyze the, the structure and convert it into something that would actually render it, like change it into expressions instead of into,
[01:06:18]  um, instead of using preexisting nodes. Yeah. Yeah. It's 2013. That's, that's what I was, that's what I was getting at.
[01:06:31]  Um, so yeah, I'm, I'm, I'm going to leave templating for now because it's, it's less interesting in the interim years and we're
[01:06:39]  going to switch gears. I'm going to look at react, preact for a second. Um, in terms of our compilation here, can I get context, um,
[01:06:47]  react as we all know, introduced JSX and there's a lot of extra noise in here because of the way the babble preset is set up, but like these
[01:06:59]  pure functions, and I guess they do that because they want to show that it's pure. And this is the actual compiled output. I wonder if, is this, is
[01:07:06]  this classic mode? No, whatever. It doesn't matter. Um, this is actually a solid component that I just dropped in. It doesn't matter. But what
[01:07:16]  I wanted to just simply show here is that, um, let's make, let's make a wrapper or a layout component. It's essentially JSX for anyone who might
[01:07:28]  not be familiar with it. It's XML in JavaScript language actually outputs quite, quite simply here. If you have a nested hierarchy like this, now puts into something
[01:07:42]  basically we call hyper script react version is a little bit different, but to be fair, all you do, you see here is your code of up here, whatever it is
[01:07:49] , like, what is it? Use state, you know, whatever your, your code up here stays the same, nothing changes, transport, and then your JSX
[01:08:00] . Each element gets turned into a create element call where you pass in either a component or a string to enter a native element. And then any attributes on that, like,
[01:08:12]  uh, I don't know, theme dark, whatever, I'm making stuff up. It's kind of passed in as a props object essentially on it. And through
[01:08:24]  these function calls and this function could be anything really, um, it constructs a virtual set of nodes which then get diffed and essentially that's the whole VDOM
[01:08:36]  thing, right? Whether you're using React, Preact, Inferno generally, Inferno does have a custom one, uh, JSX and Vue or
[01:08:44]  whatever. The basic idea is you have these calls. This, this is something called hyper script generally. Um, all right, let me see here. Uh, hyper
[01:08:57]  script is, it looks like this essentially, like, this could be create at React, um, uh, Preact keeps the H convention with it. And sometimes they,
[01:09:09]  they do cool things like, like this, but if you're compiling from JSX, you're not going to end up doing these kind of short cutty things.
[01:09:16]  This is like a class as ID generally look more at this where it's essentially gets compiled into, you know, the element or the component name, and then the children
[01:09:26]  potentially, or an object for the props is a second thing. If it's there, this is your JSX compiles to this and it just runs the series of,
[01:09:36]  of functions. That's, that's sort of, and as I said, every, pretty much every framework has some kind of template conversion. You're, as I
[01:09:46]  said, you have the JSX frameworks that compiled to this. You have, um, the, I got, I got called out for calling them string template or data binding
[01:09:58]  ones, but that compiled to, um, you know, DOM operations. Like, many of you might be familiar with something called lit with HTML, lit dev. Actually
[01:10:09] , they have some new, they have a playground. Lit has a playground, but they're not going to show me the output. That's fine. Yeah. If lit
[01:10:16] 's not going to show me the output, I don't, I don't really care. Um, actually, no, let's go back there in two seconds.
[01:10:24]  Um, tag template literals, right? It looks like a string. It has some escaping, but essentially this is sort of, it's a very similar process. The
[01:10:40]  thing with tag template literals is what they do is they actually take your string, they assign it to a template element, and then they use a tree walker essentially
[01:10:49]  to, and they stash the nodes and to figure out where the dynamic parts are, and then they insert it. And if that doesn't make any sense to anyone,
[01:10:58]  that's okay. Um, we can, we can possibly look at this a bit more, but I, what I'm getting at is everything, whether it's runtime
[01:11:11]  based or pre-compiled is doing some kind of magic, like transformation with your template, right? It's all actually very, very similar. You know, in Knock
[01:11:21] out, we had the DOM nodes, you know, that we parsed and added the behaviors to. In, um, in JSX, we compile ahead of time to
[01:11:34]  something that could potentially output DOM nodes. And with LIT, we transform, we basically almost inner HTML these into a template and then basically analyze the, we basically analyze
[01:11:46]  the holes to know how we can stuff in. I mean, to be fair, template literals are nice in that you can just run them in the browser without the build
[01:12:00]  step. I was trying to emphasize at the beginning that I think that in general, if you're building anything real, build steps important, but if you're just throwing
[01:12:06]  something out, doing demos, education, especially learning, I think, I think it's great to be able to do this. And actually, uh, Jason Miller has a
[01:12:13]  great library for pre-act or any VDOM, uh, it's called HTM. You definitely should check it out. Uh, GitHub, uh, GitHub,
[01:12:21]  GitHub. And this keeps almost the JSX semantics here, but essentially it takes your HTML here and it outputs Hyperscript. Um, like, so it,
[01:12:37]  as I said, you can do kind of anything with this, right? Um, lit makes a template that you can clone. And this one turns it into, uh,
[01:12:50]  where is it? Into, into this or into the, into this essentially. Um, we, we do have, we do have a template literal solution also installed,
[01:13:03]  but, um, it's a little bit different because I wanted to actually get to compile the same as my Babel plugin, um, which is a little bit ambitious to
[01:13:11]  do in the browser. It, it, it works mostly, but there, there, there, there had to be some key differences to how, to how we approached
[01:13:19]  it. So as I said, every framework has this kind of template compilation. Are there differences between the different approaches? Sure there are. Right. Um, one of the
[01:13:33] , like, one of the big differences about templating is, um, like the, when you have something like Hyperscript, it's designed to be a bunch
[01:13:47]  of function calls. It could be objects too, but essentially it's designed to create a tree. Um, so we have this one side, which, you know, like
[01:13:57]  the V DOM side, which creates, use the templates to be able to create a tree. And then you have like the, uh, lit side, which uses it to
[01:14:05]  almost literally be templates that you clone. And as, as it, as it turns out, there's like trade-offs to both sides, like cloning a big
[01:14:14]  blob of HTML is incredibly fast. Um, like rather than creating the elements one by one, uh, Dom can, you know, kind of batch things together to set the
[01:14:28]  memory allocations. You know, another side effect of, of kind of Hyperscript is when every time you re-render, like it's inherent to the render
[01:14:39]  model, you're calling a series of functions. Like you, if there's something conditionally in here, you don't know you, you like, if the props change
[01:14:47] , you have to call the functions. And the funniest thing about it, people might not notice that first is if you're looking at this blob of functions, which function
[01:14:57]  executes first, right? Like I'm hoping everyone can see this. Which, which function executes first in, in, in this, in, in this example here
[01:15:09] ? I believe it's this one, correct me if I'm wrong, but this is the func, this is the function that executes first. JSX or
[01:15:21]  Hyperscript actually ends up executing inside out because you're passing the functions, past the functions, past the functions, um, which is really interesting, um, dynamic,
[01:15:35]  right? Um, because like you don't know your children until later. So this is actually the, the root of a lot of the kind of classic conversation that,
[01:15:45]  uh, you know, template DSLs are more an analyzable than JSX. Um, part of it is because you can have dynamic expressions like JavaScript right in
[01:15:53]  the middle of your templates all over the place and doing, inserting whatever the hell you want. But it also, this is designed to kind of run in sequence. It
[01:16:03] 's actually kind of backwards. And because it's backwards, it's hard to do this as a single pass. Like you actually create H1 classy before div header, before
[01:16:12]  div page, and you actually kind of compress them back in, you know, as children and the parent handles the child, hands the child and it kind of compresses up
[01:16:21]  the tree. So, um, from that perspective, um, this isn't, this is actually built for multi-pass approaches essentially like VDOM because you,
[01:16:33]  you, you, you, you, you just don't have, you don't have the parent beforehand. Like this is not aware of its parent. Um, I hope
[01:16:43]  that makes sense. I'm going to look at the comments and see if anyone's said anything while I've been doing this, do those templates in a different order.
[01:16:52]  Um, well, it depends on what it compiles to. The thing is template template literals, if you've ever, uh, I wonder if I should show an
[01:17:00]  implementation. They, they, they just compile to a, a, uh, I'll just throw some code down here. They comp when you, when you, when
[01:17:07]  you write a tag template literal, it's, it's basically a function. Uh, so, you know, like our HTML function is, is essentially a function that has
[01:17:17] , um, an array, which is the static parts. So, you know, you know, maybe div open, div close and then a list of all the arguments
[01:17:39] . So count, we could essentially, this is this list of arguments is always one less than the, the, than this, right? Because it, it just starts,
[01:17:50]  enter, enter. And, and that's, that's essentially what it piles through. The coolest thing about them is it actually, when you write a tag template literal,
[01:17:58]  this argument gets cached. So you, even if you hit it a second time, it uses the same nodes, so to speak. So whatever you transform this to
[01:18:08] , you can actually kind of use it as your marker from a compilation standpoint. So you can just like go like, this is my template that I clone that you make from
[01:18:15]  this. And essentially every time it runs, it can just like use this as a, like a key essentially to look up the template. Like you, it doesn't redo
[01:18:23]  the work every time it, it treats us as static and you can change the dynamic parts. That's, that's basically the secret to how it works. But it
[01:18:32]  depends on what you, what you generate out of it. Most of the time, this becomes just a static template essentially that you clone. So it doesn't really render out
[01:18:42]  of order. I mean, it depends. If you nest HTMLs inside HTMLs, then those are going to show up over here, right? Like we have another
[01:18:53]  HTML statement in here or whatever. And so from that perspective, the inside still excuse before the outsides to be fair. It's I think it's just kind of
[01:19:03]  interesting that there is this kind of dynamic in general. You figured out solid secret. This is how solid works. We wrap everything in thunks. That's the main reason
[01:19:23]  we can't use a generic compiler. And I was kind of getting there, but we, we, we wrap things in thunks so that they, um, they
[01:19:35]  execute an order. Um, so we can keep the reactive context, but, uh, yes, that, that is, that is, that is this, that is the
[01:19:44]  secret here. You don't need to, but it is, it is actually, um, it is, it is actually our little trick. So anyways, talked about
[01:19:53]  tech template literals a little bit, um, as found in lit. Uh, as I said, this, this generally turns into two things. Basically the first time you
[01:20:04]  call it, you, you, you write some processing on it. I mean, let's see if it's still here. It have packages, lit HTML. Source
[01:20:24] . It's been, it's been a little while since I've been here, lit hlts. No, no, I want something called like template or template parts
[01:20:38] . They've probably refactored this a whole bunch that I'm not. Oh, maybe it is still here. Uh, I don't know if this is Beth
[01:20:50] 's worth template results. Getting close. Essentially. Tag. Yeah. I don't know if this, I did kind of reverse look at this before. Essentially. I
[01:21:15] 'll pseudo code it right now for, for, for your, for your benefit. Essentially the, the HTML function, um, you know, which takes those arguments. So
[01:21:26]  we said, um, list and args or whatever. Um, the, the first thing you do is you go, like, you go, like, if, have
[01:21:36]  like a, uh, maybe a week map or something here, like const map equals new week map or something, or, you know, and, and like, you go
[01:21:47] , like, if, if map.get list. And like list. We usually quite like put something on here, like, um, run template or something. Okay
[01:22:02] . With, with the arcs essentially. Otherwise it's like process, you know, the list, get the, the, uh, they get basically, uh,
[01:22:18]  sorry, list, uh, run template equals. I'm hoping this makes some sense to you. And then like this is, this is generally what a top level HTML
[01:22:38]  function works in like one of these, these, these kind of renders is that they essentially, they, they, they look up based on the static args, the
[01:22:46]  template, and they, the first time they run, they compile it first, essentially into like a render function that takes the arguments and then they, they run it again
[01:22:56] . And that, that, that, that's essentially the gist of it. Um, not, not, not, not rocket scientists, uh, uh, science
[01:23:06] , so to speak. Um, uh, has or whatever you get, you get, you get the point. Um, but, or maybe, yeah, maybe it's
[01:23:18]  not on here. Maybe it's more like get, um, template equals this and then run it. Yeah. Sorry. This is a little bit cleaner. Okay.
[01:23:44]  There we go. Oh yeah. Sorry about that. That's the one problem. I can't actually change the location here in stream art. Look, can I scroll up
[01:23:53] ? Yeah. There we go. Sorry about that. This is the, this is essentially what the, uh, HTML in, in, in something like lit does.
[01:24:06]  Yeah. So, okay. I mean, I'm going to move on from here because this is, this is, this is like the runtime approaches. You're probably wondering
[01:24:20]  like what this rent run template is. Um, and that's, that's fair. And actually there, there's a little bit more in here than this because they
[01:24:32]  have to have to clone the nodes, but essentially they split it into, um, uh, a template that can be cloned and a render function that takes the arcs
[01:24:41] . And in a sense, this is very similar to even like react or, or, or something because you still kind of do this top down render, you pass the new
[01:24:48]  arguments in. And it basically, instead of necessarily cloning the nodes, you cloning the nodes once on create you, but you still basically use the arcs to
[01:24:59]  insert them inside that template. They, they, they've got server side rendering now. Um, but essentially, essentially that's kind of the, the, the scenario here
[01:25:16] , um, server size a little bit easier and we'll, we'll show some more concrete examples here in a, in a second. Okay. So let's,
[01:25:23]  let's, let's, let's move on from, from lit here for a second. Okay. So I've talked about hyperscript. I've talked about lit
[01:25:32] . Um, and those kind of came out around the same time in a sense. Angular also came out like in 2016, like not angular JS and it was doing its
[01:25:44]  own kind of compilation, um, of templates, but I want to fast forward a little bit further now and let's, let's talk like Svelte. Let's
[01:25:52]  start talking solid and start looking at, you know, what those, that kind of compilation works. This is important because it's gonna, it's gonna tie into, um
[01:26:01] , into a few other things here. Uh, I'm gonna do solid next because even though it's relatively newer library, I wanted to show kind of how compilation affects
[01:26:19]  this because it's all, it's actually more like react and preact and hyperscript type variants than it is like Svelte. And that's why it's
[01:26:27] , it's actually easier to show this in terms of compilation because remember a minute ago I showed you Babel and I showed you how this doesn't get changed and it
[01:26:35] 's only changing it to a bunch of, you know, create element calls. This create element call could be an H function. It could be whatever you sub in depending on
[01:26:43]  your framework, but essentially it's like that. What solid does is it's kind of like a cross between lit, which we just talked about and, um, these
[01:26:55]  hyper script things in that this doesn't run again, but what we actually compiled JX, X to is a template that we clone. And then, um, a bunch
[01:27:06]  of dynamic reactive expressions that run. So, I mean, let's go count times two. This you, you've seen this, this is just like a counter and I
[01:27:16] 'm going to make it count by two every time we click on it. So essentially this insert expression is a side effect or, um, let's, let's pick
[01:27:25]  something a little bit. It's going to do text content because it's an attribute. It compiles in a way that's easier for people to see. Um, but
[01:27:38]  essentially create an effect around the count here. Like essentially we don't touch your, your runtime, your, your kind of component code and the JSX becomes code to
[01:27:54]  clone a template. See template clone. This is a domino that we clone. And then we attach event listeners and we make create effect calls. And these are the things
[01:28:05]  that run over and over and over again. That's that's essentially the, the, the compilation here. So in a lot of ways, um, it's not
[01:28:16] , it's not crazy because I mentioned about wrapping things in thunks before that's what solid does. But this expression here, uh, sorry, not the data in this
[01:28:26]  case, but this expression here doesn't, it's just a direct translation of what's, of what's in here. Right. So, you know, we can
[01:28:34]  put any legal JavaScript expression here. Like, uh, I don't know. I did a multiplication. I can't think of something we can, we could have like a
[01:28:43]  format function. If you watch as I type here, it's just, it's just going to directly insert it. We just take the holes and insert them in the effects
[01:28:52] . That's, that's essentially the, the compilation for solve. That's why a lot of people call it very transparent because it's, it's kind of,
[01:28:59]  it's not unlike here, right? When we wrote this count, you saw this count function ends up being a child, but let's pretend that react had a text content
[01:29:13]  attribute. This is, you know, in this example and it did and content equal count and whatever expression that we put here, this becomes that expression here, right?
[01:29:37]  The, the only difference is instead of making it into a bunch of consecutive functions, like it called every time so it fits with the kind of VDOM mentality of
[01:29:45]  generating a tree. Um, what's all it does is it runs at once and then creates these effects, which are the only things that rerun. So in that sense
[01:29:57] , a lot of times we get kind of skewed in as it was felt like everyone's like, oh, you know, the framework that, uh, you know,
[01:30:04]  like a compile away framework to just plain JavaScript, you know, that whole thing, you know, disappearing framework, runtime, all that. And it's not, it
[01:30:13] 's not terribly accurate. Uh, we are small, but pre act small too, right? Like we already kind of talked about it. It's just that the reason that
[01:30:23]  solid stays so small is that the render is just built with solid itself. It's the same primitives, like the crate signals and effects that actually, that code comp
[01:30:33] iles to. So everything is just compiles to the same thing, essentially. Like, it's like the same as if you'd written it by hand. Like if someone
[01:30:40]  told you, they're like, Hey, I want to create a button that updates, you know, how, how would you write that by hand? I mean, we
[01:30:48]  can, you can, you can see this compiled output here. If I just, you know, duplicate this tab over here, essentially, sorry, I gotta get rid
[01:30:57]  of that format because format doesn't exist. Right. Okay. Sorry. Format. Let's do this. Get rid of that format. If someone told you, so
[01:31:08]  it's up by two, if someone told you, Hey, you don't have JSX, you don't have a compiler. How would you write a button that did
[01:31:16]  this? You might be like, okay, well, I will make an element. It will be document dot create element button. And then you might be like, okay
[01:31:28] , well on that button, we want an event. So L dot add event listener. Um, and on that event listener, uh, when that happens, we will
[01:31:38]  inc we'll call an increment function, I guess. Uh, sorry. And we have to see what the event for was a click. We had a click event and then
[01:31:48]  we might be like, okay. And then we want it to update every time. So, um, let's go create a fact and let's make it back. So
[01:31:59]  that L dot text content equals count times two. Right. Okay. And then let's return that element and create effect. And there, like the, we just hand
[01:32:22]  compiled the code. Like essentially, if you were to write it yourself, this is what you would do. And that's like, all that's solid compiler does.
[01:32:32]  Um, it just like this code is essentially identical to this code. I mean, this is a delegated event handler. So it's a little fancier, but,
[01:32:45]  oh, it's updating a text note that already existed. We do some fancy tricks. Like see how there's an empty gap here by walking into that. It's faster
[01:32:52]  than replacing all the text content, but like, let's not squibble over details. I just try to show that, um, you know, this is sort
[01:33:01]  of the, the approach here, um, that solid uses. So it's kind of like a hybrid between we'll, we'll, we'll look at Svelte
[01:33:09]  in a second, but in terms of templating, um, you know, it's just a slightly different JSX transform essentially. And to be fair, stuff like
[01:33:16]  Angular, which is still component centric, like it does and Svelte do this sort of create element conversion is kind of their, their, their trick. Um,
[01:33:27]  so let's move on from here though, that just wanted to kind of quickly show, um, that let's see, is there any questions in the chat? I haven
[01:33:35] 't checked in on it for awhile. No, good. Then we'll just keep on moving. So that's like, that's all there, that is all there
[01:33:45]  is to compilation here. And let's, uh, let's close a few of these windows. We've got too much stuff open. Um, let's look at S
[01:33:57] velte. Svelte, this is a simple hello world, example, but let's, let's change this to our brought in updates account just because, um
[01:34:18] , making all things equal, so to speak. So let's make that account. That is zero. We're going to talk about this compilation language in a minute, but
[01:34:31]  I just wanted to just kind of what, uh, let's inline it. I don't know why the solid version doesn't. What is it on? Click
[01:34:41]  this, and then we are just going to go count plus, count, um, plus, plus, and then we do count times two, right? Okay. Rem
[01:34:57] ake it. So that's pretty sweet. How terse that is. Right. Pretty nice. But I know I, if, if you look at this example, the
[01:35:07]  compiled code, you might have a slightly harder idea of, of what's going on here. Cause Svelte doesn't really leave any of your code alone. It completely
[01:35:15]  transforms it, but there is some key things that we can look at. They have helpers to do the create calls, but this is, this is document create elements
[01:35:23] . So they went document create L yeah, that's, that's kind of fun. Right. But see this, this, you know what they're, they have a
[01:35:33]  human readable form. Uh, where is it? Is it dev? Okay. So now you see the names here. It's the same idea because they call it C
[01:35:45] , but the create function. Oh, I mean, lit is similar in that it pulls the static parts of the template out into something that you can clone similar to solid.
[01:36:01]  You know, how solid does clone node. Lit does the same clone node, except solid when it, instead of making a render function that reruns and inserts the updates,
[01:36:11]  it makes specific granular effects, but in a sense, it's very similar. Like you get a template that you call clone on when you create. And then when you
[01:36:20]  update lit basically remembers like the index to, to where to insert it and, uh, solid wraps it in an effect, but rendering wise, uh, like the compilation
[01:36:37]  part is kind of similar. Yeah. Less granular. Yeah, exactly. It's doing a kind of like at per template level. Anyways, back to Svelte.
[01:36:51]  So create element, set the text into T value and they have some kind of add location thing, but what is T value? You might be asking. Well, T
[01:37:04]  value is this value in a context. They have this idea of a context and context is an array kind of like slots. Um, in like, if I, if
[01:37:21]  I, if I add another value like this, I mean, if I don't use this, this might not show up, but and what you, what we should
[01:37:32]  see, maybe this one isn't going to show up because we don't use it. What happens if I add it to our template? Yeah. What we should see is
[01:37:43]  that now we have a context one, essentially they keep an ordered list of your state variables in a context object and essentially they create the element, they set the text.
[01:37:58]  So this is the create function. And then I'm trying to work claim does, doesn't matter. On mount, they do a bunch of the inserts. So these are
[01:38:06]  like insert, like DOM insert, append insert, and then they register some event or cleanup code. Um, actually if not mounted already, then we're going to add our
[01:38:18]  click handler and then they like, you get a big object. This is the update function where, which we're going to get into, which is the interesting thing.
[01:38:27]  What's because essentially what Svelte does is it breaks your component that you write like this into a bunch of class life cycles, more or less. Um, so you
[01:38:38]  have a crate life cycle, you have a mount life cycle, and then you have an update life cycle. And what's the update life cycle? Well, it's a
[01:38:47]  dirty check. So they basically, every time it calls update, it goes, has, they check some kind of flag and they go, has this value changed? If
[01:38:55]  this doesn't equal the new value, then call a set function. And that set function basically passes the new value in that updates it. Now there's a little bit
[01:39:17]  more here, but once, once the updates, this, this, this is set data dev. Let's see if we can find that set, sorry, set data dev
[01:39:27] . Can we find that here? Where's the other location? Where is the other one? It's the only challenge with this. It knows there's two in here
[01:39:46] . I'm just, the browser's not helping me here. Ah, that's too bad. Okay. Let's not worry about that too much. What, what,
[01:39:54]  what I'm getting at here is Svelte does like every time on the update cycle, it checks each um, individual value. If it's changed and then applies
[01:40:05]  the change only, like only if the values aren't equal, then it applies the change. Yeah. I mean, yes. And this is why Svelte is much
[01:40:20] , much larger. I, I, I, I didn't pull this up earlier, but I, I, I actually did this kind of article a little, the
[01:40:30]  one I was talking about earlier in the stream. And if you actually look, Svelte's runtime is insanely small, like, uh, sorry, uh, 1.
[01:40:41] 85 kilobytes. Right? That's small, like, react 36. You know, views 17, preact four and a half solid, just under four,
[01:40:55]  but Svelte's components are like double the size of views components. Okay. So just kind of keep, keep, keep that in mind in terms of scaling. Cause
[01:41:06]  it, as I said, they catch up quickly, but essentially, and then they have like a couple other different life cycles and a destroy life cycle. But what I wanted
[01:41:13]  to show is where's the click handler, wherever the click handler happens. Yeah. Click handler, the click handler is the last piece that I want to talk about here
[01:41:21]  on Svelte. Cause we have a dollar sign invalidate, which updates the count and stuff. And if this looks familiar to you, like I already showed you the
[01:41:29]  class component with the life cycles, and then dollar sign invalidate. Can you guess what that is? Like you've seen for it, if you're a react developer,
[01:41:39]  it's called set state. Essentially Svelte compiles into kind of like a smarter version of react. Um, like it's still a component that reruns,
[01:41:55]  but, and they, they let you do this, but that just turns into set state. So they call set state for you, which reruns the, the certain,
[01:42:04]  the, the components thing. And they did separate the crate. So it doesn't do the crate again, but then when you run your update function, which we saw here
[01:42:12] , it just goes through and dirty checks each value and decides whether to apply the change. Compiler does this upfront, but essentially, um, essentially the way this works
[01:42:25] , as I mentioned, is you have slotted data slots that happen at a certain index, kind of like, say, react hooks. You have, uh, something that
[01:42:38]  tells the component to, to re to re to rerun when the event happens, which I showed you here, like invalidate. Right. And then you have a
[01:42:48]  very simple shallow data diffing routine that sets the data. Um, and that's pretty much it. Right. It pulls it into the components instead of putting it a
[01:43:00]  lot in the framework, um, which keeps the runtime small and it, it is very beneficial. Um, uh, like Svelte is the smallest framework under 12 kil
[01:43:10] obytes. Like if you're making a demo, like you're making a site that's smaller than about 12 kilobytes compressed Svelte will be the smallest.
[01:43:18]  Once you get over 12 kilobytes, uh, solid or pre-act is a much better choice. Um, but like, if you're making really quick demos
[01:43:26] , you know, maybe you work for the New York Times and you just, you know, make a small throat thing, like the size will be unmatched with Svel
[01:43:35] te. It's, it's the best demo framework that's ever existed. Um, but you know, obviously size isn't everything. I just, it, it just
[01:43:42] , it's just kind of like this, this is how the compilation works generally speaking. Um, this is super powerful though, because now that you kind of got this
[01:43:54]  picture in your head of how Svelte works, like it's, it's really cool because like the, these aren't actually anything special. They're just variables.
[01:44:03]  We like T value. they just get stuck in a specific array and that reruns and stuff. This talk from React Conf suddenly starts making a lot more sense. I
[01:44:15] 'm not going to, we're not going to watch the whole thing here, but he, he, he was making this to do MVC thing that you might have seen
[01:44:21]  kind of this example of. And, you know, React's problem is when it reruns it, it reruns. So he kind of went through a whole bunch
[01:44:32]  of transformations here where he took his filter to do MVC list and he started going, oh, has changed, has changed, introduced a bunch of intermediate values and then did
[01:44:45]  a lookup against, um, an indexed cache with the numbers where these memos were. And if you look at this example for a moment, it kind of
[01:44:56]  looks familiar. Like, are, are we looking at Svelte or are we looking at React? And I mean, this, this is a, this is a,
[01:45:12]  this is kind of where the, the thinking has come. You can tell it's this kind of component model here of, of, of kind of slotting in these
[01:45:23]  memo for these simple dirty checks, let makes it kind of granular. You can still rerun whole components, whole component trees, potentially, depending on the conditionals. Like
[01:45:37]  if this doesn't change, then you don't have to run the child map function or whatever. Like, like, like you don't have to update the to-
[01:45:44] do's if they haven't updated. It gives incredible, um, power here. And this is what, you know, React's been looking at. It's automating
[01:45:53]  this into a compiler stage, right? Like, but essentially it is very, very, very similar to Svelte. Um, which is, which I don't know
[01:46:02]  if that really, people probably don't spend much time looking at the compiled output of this, um, or so the output, compile output is spelled enough to actually kind
[01:46:09]  of notice the differences or similarities. But I just kind of want to show this because the, the kind of big reveal of here is React is considering what it would look like
[01:46:20]  to do this kind of memorization. To be fair, Vue, um, has a certain optimization like this too, but it's a little bit different. Um,
[01:46:28]  I'm not as versed with Vue, so I don't want to like speak out of turn on this. Um, but I think if we talk about template
[01:46:37]  and template automation for a moment here, uh, in terms of like improving performance, and that's what this is about, this is all about performance, about not rerunning
[01:46:47]  parts of your template. The key part to this, I mean, this is more, this has memos and part of the language piece as well, like, like
[01:46:56]  the actual component code, but the key to this whole thing is recognizing that it's a matter of static pieces and slots. That's, that's essentially the, the,
[01:47:07]  the whole dynamic. And when people look, it doesn't, once you look at a template in terms of being static pieces or slots, it doesn't matter how it
[01:47:20] 's written, so to speak. Right. You could be looking at JSX like solid. I mean, this is a big, this isn't a big JSX blob
[01:47:28] , but you know what I mean? Like you can be looking at this and go static, static button, static on click slot, text content slot. You could, you
[01:47:37]  know, you could be looking at JSX. You could be looking at our lit template that I already closed down. You could be looking at Svelte, static slot
[01:47:45] . It actually, the difference between JSX and a custom template, uh, um, syntax is actually barely minimal. The only actual difference is what can be inserted.
[01:48:01]  This is, this is the key, key difference. When you have a, uh, restricted template DSL, like, uh, Svelte or whatnot, you
[01:48:10]  only like, the only thing you can put here are things that could be inserted in the DOM. Right. Um, if, if you, if this was capital button component
[01:48:20] , you still don't, the only you, there's only certain things that you are allowed to be put in here, whereas, and that they, they use slots for
[01:48:30]  this way, very similar to web component kind of mechanism to kind of make sure that the reason slots are like the API is because it ensures that you can't do much
[01:48:39]  with them. Like essentially they get hoisted from one position and insert directly in another position intentionally. Um, and views kind of similar to, whereas react, you have this
[01:48:50]  props children, which is dynamic. That's the only difference. It's that these holes can be like anything in JSX. Um, but I mean, only to
[01:48:59]  a degree, if, if this is a native element, these can only be legal things that you can inject in the, in the DOM ultimately. Like even if you have
[01:49:09]  a child component here, even if, even if this is button, you know, or child or whatever, I don't care. You know that what this returns has to
[01:49:22]  be something that's insertable into the DOM. So it's not as loose as you might, might think. In terms of analysis, you're still just dealing with static
[01:49:30]  parts and slots. And in case of something view or infernal or all the libraries, it's an exercise of splitting the static stuff. So you don't redo the work
[01:49:39]  and only updating the dynamic stuff. Right. Um, in Svelte, this happened essentially by having a create block that is separate from amount and an update block with
[01:49:56]  solid. It's us hoisting this template out. It's also the fact that this only runs once. So this is also kind of all part of the static part
[01:50:06] , but it's a, it's a difference between this stuff and the updatable part here, right? Obviously in solid, this is a very small part compared to
[01:50:15]  the others which run full functions, but essentially it's, it's, it's a matter of separating static from the dynamic. Uh, view does the same thing. It
[01:50:24]  even like keeps hoisted static references to VDOM nodes. So it doesn't, knows not to diff them, but that is how template optimization works. And it doesn
[01:50:33] 't matter what templating language you use for the most part, at least on the client on the server. It's a, it's a different sort of challenge,
[01:50:40]  um, which we haven't really talked about. And people don't actually talk much about it, but I'm going to take a moment to talk about server template rendering just
[01:50:48]  because I think before we move off the topic of templates and get to the next topic, which is languages, I want to, I want to kind of at least talk,
[01:50:55]  spend a little bit of time. a moment on the server portion of the rendering to see how the chat's going yeah not that's fine some of you guys are still
[01:51:03]  here i knew this would be a heavy topic this wasn't going to keep everyone's attention all the time maybe come people come back and check it later but this this this is
[01:51:12]  this is this is really a big topic but luckily here in solid we actually and felt we have this ability to change the server template i'm going to do this felt first because
[01:51:22]  it's it's it's really illuminating because we saw this code here in svelte and we and this is all because they have to separate stuff because stuff in
[01:51:28]  the dom updates you know what happens when svelte when we change it to mode ssr let's watch oh there's our whole component it's now back to 10
[01:51:39]  lines of code and there and the reason for that is because on the server you ultimately you just have to render a string so this just turns into a template literal where you
[01:51:51]  escape the things that could possibly be escaped and you just use normal variables um in solid it's it looks almost the same it's kind of crazy um just um the slight difference
[01:52:11]  in solids like escape logic and stuff that causes it to be about three or four times faster than svelte on server rendering because honestly when if you were looking at these
[01:52:19]  two you would think that they were the same library um uh essentially but the the like this is set up to hydrate i don't know what this version is but essentially my
[01:52:31]  my point is that on the server side um we just turn it into strings and we escape stuff and this might be the only place that i felt at a deficit in terms
[01:52:44]  of the compilation approach because if you can insert anything you have to escape it and there's certain conditions because of a more restricted templating language like svelte or marco
[01:52:55]  or view where you know not to escape it and escaping is the most expensive part on server rendering um it's like all the time spent rendering is not escaping if you didn't
[01:53:07]  have to escape and work about like um you know these these these like cross scripting attacks or whatever uh server rendering in javascript would be like a hundred times faster
[01:53:18]  so anyway just wanted to kind of make a note on this in terms of the where the the limits of template analysis might work um on the pure templating side okay so i
[01:53:29] 'm done with templates let's move on that was a long subject um and i want to talk about the our next topic here which is frameworks as a language i think this
[01:53:40]  will be more interesting to some people because we already looked a bit at svelte and we talked about a bit about templating languages um but using the actual viewing the framework
[01:53:55]  the language is a very it's kind of a departure from what we've been talking about so far because most of this stuff here has been about performance optimization eking out
[01:54:07]  a little bit extra of the templating figuring out how we can you know do more with less or whatever so to speak right or maybe more in the case of svelte
[01:54:14]  because their components get quite large but um framework as a language is mostly a dx thing right when you look at something like svelte um you know you you've uh
[01:54:26]  you have this uh you know like this experience here and let's move this back sorry where you can just declare normal variables and it just works and i mean it's it's
[01:54:39]  it's it's quite nice and to achieve that like we already showed that svelte actually doesn't do anything special here which is really cool but that's not the case
[01:54:49]  um in all languages kind of approaching this and svelte has kind of shown us how the simplicity works the problem with an approach like svelte like this is you
[01:54:56]  don't get to export it out of the template that's why svelte stores exist you can't just kind of like suddenly there's no composition there's no like oh
[01:55:05]  now i want to instead of like instead of this being stored locally i want to use local storage state or something like you don't you don't do that in in s
[01:55:17] velte because like there's the reactivity is just this compiled thing as you saw that there is no actual reactivity here it's like literally just the these are just or
[01:55:28]  sorry i'm looking at ssr but these are literally just variables in an array and then it's a set state call like it's not it's not like uh it
[01:55:38] 's not like um a runtime reactive system where there's subscriptions and we do updates and stuff like you find a viewer solid it's literally just a variable and a and a
[01:55:48]  rerun this component call right it's not very reactive but or i mean it's still reactive because it reacts to what you're doing but it's like not it's just
[01:55:58]  like the data isn't reactive it's it's just variables so how when you can get away from the the composition element um it opens a lot of doors and i recently
[01:56:12]  wrote an article on on this um which was this uh uh where was it the quest for reactive script and part part of this comes from looking at what framework's been doing to
[01:56:24]  trying to solve this this problem of reactivity from a api standpoint right and i talked a bit about something called the destiny operator which is this idea and of of basically the
[01:56:36]  whole idea with reactivity here is that you want to set a variable such that it always reflects this the update so like if you have a equals 10 and you say that
[01:56:46]  b is a plus one it should always be one of above so like when you change a to you know 20 like i'm doing here it's b should be 21 that's
[01:56:57]  the whole kind of concept here because uis are all about synchronization right and it's felt you've probably seen this it's just a dollar sign operator and what this
[01:57:07]  has caused is actually in my opinion three distinct separate solutions to how to treat um frameworks as a language essentially like this approach two of them are popular one of them is not
[01:57:23]  as popular um so i'm going to categorize them straight up one of them i'm going to call is the the identifier um which is this idea of marking variables as
[01:57:34]  reactive and and then basically using this marking this this one is not as popular or as common as other solutions but essentially if you create a reactive variable and you mark it um
[01:57:52]  you you now know that it's reactive wherever you use it this is just a compiler trick though it's really just syntactic sugar i'm going to jump ahead to what's
[01:58:05]  more common which i'm going to call the keyword decorator labels and this this is how svelte works essentially as a language it knows it treats all lets as our
[01:58:14]  signal and sorry i didn't give you guys much of a preamble here which i should have um i'm going to propose and i've proposed this in a lot of
[01:58:22]  my articles that you can define almost any framework in terms of uh three base primitives um and those three base primitives are are essentially um state um derivations and effects
[01:58:49]  you could and this is obviously has been kind of like people call it like my thesis here or whatever but essentially if you use this it doesn't matter like what they're called
[01:59:01]  signals atoms uh what what what else do people call these things refs like actually ironically and svelte i might even call like technically svelte have stores for different types
[01:59:24]  of ones of these and but you know essentially uh observable sorry i missed that one essentially there's this idea of the staple atom there's this idea of derivations which
[01:59:37]  are kind of calculations they're pure they're based on it they don't have any side effects so memo in react or like computed in view or stuff or maybe even select
[01:59:47] ors like in things like jotai or or whatnot like there's this kind of derived state and then finally the side effects which you know are also like watch in view or
[02:00:00]  affects them a lot of white where's auto run in mob x and hopefully this is visible technically svelte stores can be both state and derivation they have derived stores and
[02:00:16]  normal stores but essentially if you use this um so if you use this language here and and and and you can basically this is the the language so to speak i've like
[02:00:29]  people people talk about you know frameworks of the language but i actually don't even think they're different languages i think they're actually all the same language uh so like svel
[02:00:38] te might call let's say svelte calls this a let right and then they call derivations a dollar sign operator or like variable and this is just dollar sign expression
[02:00:58]  like marco actually has this too which i'll talk about a bit has const like essentially you almost all ui framers can be talked about in this language they they
[02:01:15]  run slightly different they have a different execution model but essentially we have these three things and the problem is that um if we want to isolate the language from like the the component cycle
[02:01:26]  um like so that it isn't tied to it which i haven't explained why we want to do that too much um we have to use reactivity because it has its own
[02:01:35]  ability to change if you you have something like svelte or like react where the state is actually just tied to the component um it's not necessarily transferable but as
[02:01:45]  i said they they can still use this language as well it's just kind of a matter of if you it's kind of jarring to switch modes when you suddenly just want
[02:01:58]  want to use something in a function or a different file and you can't use it because it only works locally react lets you use hooks it even though the reactionary rule
[02:02:09]  is at runtime it has to run the same way under each component it has to be called from a component but it is still essentially composable svelte's compiler doesn't
[02:02:20]  allow for that so you have to switch to stores but even with stores you still have the same three things so svelte's like push the boundary in one way but it
[02:02:29] 's very very very limited in a different way so i just kind of know this is a challenge with with uh with um compilation because you you want you do it because you
[02:02:41]  want the syntax you want to be able to have more restricted language to feel the better uh convey intent but it usually means you lose the escape hatches which is a design consideration
[02:02:50]  one of the reasons one might be you know skeptical more skeptical of stuff like that react uh forget um talk because of like you're kind of giving away a certain amount of
[02:03:03]  control if you just give into it that it's it might not be a problem but you do lose a certain power in that trade-off and this kind of always comes with
[02:03:11]  compilation the reason i want to point out that this kind of this relationship here is um is because it's very relevant in terms of how we um talk about frameworks as a
[02:03:26]  language because to me all frameworks do kind of have the same language there's just subtle differences okay question now years after do you think reacts decision not to go into state is a
[02:03:38]  good idea of assignments yeah it's it's it's kind of funny i this was something that this is what killed me about react because and you can tell the difference react
[02:03:49]  was like we're just a view library which is interesting because it kind of is because you just it's like backbone it kind of like you just read they don't enter h
[02:03:59] tml it they do a smarter inner html but essentially they're like update some state and then re-render my template right like angular was a bit like this
[02:04:08]  although angular made the whole tree into a big mess of dirty tech so again angular one or angular js or whatever but but essentially react was like a smarter backbone knockout which is
[02:04:19]  around you know back in that backbone days was just a state library um so there was like a a split there one was like i'm just a state library essentially one was like
[02:04:32]  i'm just a view library and for me i'm just a state library was the obvious choice but it actually didn't play out that way so i think to answer this
[02:04:43]  question is i i don't know if it was a mistake i think they wanted to leave things open and make their opinion on it so they they kind of develop stuff out
[02:04:58]  the problem is they are changing their mind about it react to orchestrate what they want they have to be a state library hooks the move to hooks like it's kind of interesting
[02:05:08]  all these things that we've been seeing going on react like the way that they've kind of been migrating has been very intentional path they're they are changing what react is
[02:05:17]  this is all an incremental migration and people have been excited along along the way which is great but essentially reacts changing its identity um over this and hopefully people still like it when
[02:05:29]  it comes out the other side um but there is a slow thing the one thing they haven't changed though is their up is their update model um which maybe i'll talk about
[02:05:39]  a little bit later but but essentially um they they are react is turning into a framework it cares about view and it cares about state and that might not be as comfortable um
[02:05:55]  you know that that that might not be as like comfortable for you know people who kind of got accustomed to being just a view library that's why there's kind of like a
[02:06:05]  backlash from like the x state type side of things they're like oh do we need suspense we can just represent it because with state you can represent anything um solids kind of
[02:06:13]  gone to the extreme where we're just like oh rendering is a side all rendering is a side effect it's like the exact opposite mentality is react which are like all rendering is
[02:06:22]  pure um different philosophies i'm super stoked that react is taking stuff completely different way because like i know that they're working on stuff and approaching problems in a completely different
[02:06:36]  space and because of that like you learn things from that um but i mean that's me thinking in like a science scientist sort of perspective not necessarily like what i believe is better
[02:06:46]  so to speak yeah yeah the be fair backbone had models um and they made a part of their solution react never added the models but in a sense early react expected you to bring
[02:06:58]  the models so the fact that they were there or not there doesn't change the change the equation so to speak to a certain degree other than who's responsible for holding holding
[02:07:07]  the bag in the end um so yeah i mean that's that's that's fair enough but my what i'm trying to get at is we've we've seen this language
[02:07:15]  before and attacking reactivity as a language right now there's basically two approaches i showed the identifier approach but i don't think it's really viable because it's just a
[02:07:31]  compiler syntactic sugar and the two approaches we've seen is the one enforced by or done by svelte and this is this is kind of overdoing it i'm showing
[02:07:42]  a signal or state and an effect as a label but you know with react this is our service felt this is let and this is dollar sign like oh right like essentially this kind
[02:07:56]  of labeling is is is is the approach that they've taken to like to language and while this is really powerful the problem with this as i mentioned is it doesn't escape
[02:08:04]  the file you're looking for these symbols how do you turn this symbol into a use logger or something right you you don't right and then and this is the i
[02:08:24]  i talk a lot about this kind of composition king we did a stream a few weeks back where i showed how to turn a for loop into a paginated component in four different
[02:08:31]  frameworks and it's the same kind of problem like view or a few of them like like svelte with their template language like you could always use the language on the outside
[02:08:42]  and try and change what it's doing but in the case something pagination where the child needs to control the pagination you actually need to change the api you present
[02:08:57]  so this this is a big constraint and it's funny because when view introduced the sugar rfc the v1 it was like svelte they just like they did this
[02:09:08]  it was like ref colon and this is where people kind of go to but it has this terrible shortcoming um whereas version two which i'm calling function decoration is and i
[02:09:21] 'm using marco here as an example but you can see um yeah this looks a lot like svelte sort of i mean yes there's angle brackets on the tags here
[02:09:32]  but essentially the key difference is because you know that this is a tag you know that it's special like it's not just a variable it is this so if you like
[02:09:44]  the problem with this is if you want to make uh like use doubler um or whatever like this is a special symbol that can't change here you can just rename this to
[02:09:56]  a different tag this this is already doing the job of identifying for you in a universal way it's composable because we're decorating the function call instead of decorating the ex
[02:10:08]  like instead of saying like this is a type and stuff like this is kind of like typing it saying like this is a reactive double value where this is saying like doubler is
[02:10:20]  essentially is the is a react is a function that returns a reactive value and view is actually doing this see they put the dollar sign and the new ref sugar on here and
[02:10:35]  if this seems weird to you for a second react is also kind of doing this you've been typing it yourself this whole time it's it's just three letters instead of one
[02:10:46]  letter it's not dollar sign ref it's use ref they're not using a compiler to do this but they've actually set up the steps here um and and really this shouldn
[02:10:56] 't be a surprise to anyone right like i think i think actually someone said this the other day and they were like an awestruck and i was like oh i i
[02:11:03]  thought that was kind of obvious that's why they made the decision with hooks a few years ago but i guess that's what we're doing the stream because it isn't maybe
[02:11:09]  obvious in a sense if react really wanted to they've been telling you all they use use and use it conventionally it's very strong because of this dollar sign thing and to
[02:11:20]  be fair in hindsight with solid i might have keyed in on that a little earlier but the problem is i was already using these reactive primitives before react hooks came out
[02:11:30]  so i didn't think of standardizing on a convention here but from a compiler's perspective you know having this makes all the difference in terms of composability if you put it
[02:11:41]  on the label it's not transferable if you put it on here it is whether it's a tag whether it's a symbol this is the way you solve composition in
[02:11:51]  a compiled language uh at least right now i offered a third solution um in this article or fourth solution technically and i don't know if we'll ever get there but but
[02:12:02]  it was it was what if it was the other way around essentially like if everything was the dollar sign by default instead of the other way around we could have it as something that
[02:12:13]  looked like svelte and just always updated but i i think that that needs to be proven and it's a whole other craziness but i just wanted to kind of point
[02:12:24]  out that this thinking as as a language has actually been converging on this function as a decoration thing right um i'm not sure i probably don't still have dylan
[02:12:36]  in the chat i'm trying to there's uh let me i want to i want to see if i can do it all right let's use concise mode but i'm
[02:13:08]  just going to quickly make our bot an example again when i open i'm still here i'm just going to use our button example in in marco and kind of show what
[02:13:22]  um what i'm talking about but in a sense uh what i'm sorry now marco's a funny language because it's because of the fact that it's markup
[02:13:34]  it is literally like you can't write less code than it it's basically impossible um and because it marco's taken a different extreme unless it's it's cr it's
[02:13:48]  like we'll try and make it look as much like javascript as as we possibly could um there we go counter mark marco's like we're going to add
[02:14:00]  exactly the syntax we need to do the job so there's nothing there's no framework out there that writes less code than marco and if and if if anyone actually comes and
[02:14:08]  does it we go oh i don't know if people remember there's something called pug um and in pug or uh originally jade uh white space mattered right and in a
[02:14:25]  white space matters framework oh why did i do that wrong it's a space all right the white space matters framework this example's not great um you can you can write even
[02:14:41]  less code right i i i think some people were saying like oh the sweet spot is if you if you if you if you do this but just wanted to show off this
[02:14:54]  this kind of cool language for a second because um again it's funny but this slash denotes um denotes essentially that it's a tag and you know like essentially it allows
[02:15:10]  the same kind of advantage as something like rough sugar um in view um essentially and can compile like this but i i just wanted to kind of talk talk about this kind of
[02:15:21]  convergence of language because with marco what they chose we've chosen to do is we use let for our state and we use cost for our derivation so if you wanted
[02:15:31]  to make it double count um double equals what um x times two and then if i put double in here instead no whatever right um weird language for some people but i think once
[02:15:48]  you start using it you realize like just how concise it is but um yeah the the the this is kind of the language conversation that's been going on and it's the
[02:16:01]  second kind of part of why uh about the react memo uh conversation we saw going on because essentially with their whole react forget thing they they wanted to get rid of having to call
[02:16:13]  memo to to do this right because the problem with react is the whole thing reruns so like you kind of having to worry about when to memo stuff or use callback is
[02:16:25]  really awkward can't the compiler help us and the answer is is is is mostly yes if if you can kind of trace where things are being used um but as i said
[02:16:36]  the the real powerhouse of these of of the approaches and where like the simple stuff usually falls apart is um what do we want to call this double is um what is
[02:16:58]  just a second i'm just gonna is is if you can essentially use this example hoping i'm doing this right it's been a it's been a little bit um is
[02:17:23]  i guess i didn't need these tags here i could have used concise mode if people learn to that um is is retaining that that um consistency what am i doing wrong uh
[02:17:49]  double you know what let's just do this just in case see if dylan can tell me what i'm doing wrong if just in case it's also possible that this
[02:18:07]  is just a limitation of the playground this is very very very new um although i swear i did this just did this a few weeks ago interesting maybe maybe we'll move on from
[02:18:23]  this for a sec but essentially i think i might actually be do you know what it is oh i'm sorry about that it was literally just because of missing an s um
[02:18:56]  yeah yeah how bad am i botching this dylan atras restructure right right it's because of sorry sorry sorry silly me i call it probably written this in
[02:19:27]  a in a shorter in a shorter form this is basically like the props object and you can alias it and then here my whole point is that composition is still alive here even
[02:19:36]  with a compiled approach essentially right like we we can just change the keyword because we we know this is like the use hook this this is basically what i wanted the to kind
[02:19:45]  of show but that that's kind of like the the the baseline for today right what what gets more interesting obviously is that is that if if we is that if you if
[02:20:06]  you look at something like peg then i i'm going to kind of let's let's let's switch to the next section here because this is mostly what i want to um
[02:20:14]  kind of talk about i want in terms of uh the language stuff we're going to talk more but um i didn't make a banner for this one second taking compilation further
[02:20:36]  let's let's let's kind of go into this section i want to talk a bit more about you know doing more that we talked about surfside rendering we talked about templates
[02:20:44]  we're talking about this often this kind of nice composable language thing um like where does this lead us right um one of the cool things that that that i like to
[02:20:54]  kind of show off about this is is if we can i'm going to forget about double for a minute if we can and let's just i don't know what was again
[02:21:14]  um let's be uh maybe a span here i just want to separate the button one from the from the the the display of the count okay so if you know let's
[02:21:27]  make it a if is is is maybe if if you you've been seeing how we can with um things like um react break things into really small components right that's that
[02:21:50] 's super powerful but what what if and you we've been we've been co-locating our state everything we've been doing if you look at things like suspense if you
[02:21:58]  look at things where we're kind of inverting the control we're trying to write our state with our components at first we had class components and class components are um you know
[02:22:09]  big blobs of life cycles right we've seen that then we got react hooks and i don't have the image in front of me most of you have probably seen it
[02:22:19]  maybe i'll pull in a scale draw but it looked it looked something like this right they showed they showed the class components and then they they showed the code with the life
[02:22:27]  cycles in it and they were like okay there's this code block here that relates to thing black and this code block here that relates the thing black and then maybe this code here
[02:22:39]  in render that rinse of thing black and then and then essentially the hooks version versus the class the class black okay done now maybe think purple that goes here and then think purple
[02:23:03]  that goes i mean you guys can tell me if you've seen this this example before you know what i'm talking about but someone this was kind of very popular example after
[02:23:14]  react hooks came out that you could and let's add maybe a turquoise thing here that happens here only and maybe down here too that the class component looks something like this
[02:23:30]  and then the hook component was like do you and sir purple and then turquoise hook component was like this and you're like like which one would you prefer um essentially
[02:23:49]  the one where the logic is spread through these life cycles or one where all the the stuff comes together but the challenge is there you know the granularity of this change because
[02:24:04]  if sure the class life cycle was a pain but when you got here what if you wanted um to split this up even even more like what if this component gets too big you
[02:24:19]  now have to take code from here take code from here take code from here and make that into your new component essentially you you have to chop it from a bunch of different places
[02:24:29]  to extract it out into a different component so one cool area of research that i want to mention here is in marco this isn't necessarily the case right because essentially if
[02:24:43]  if you had a component that showed it showed a counter and say had some state that was like um show equals true and actually i'm trying to think of the best example
[02:25:07]  here to do this but like if you pretend you have this counter component right and then like a requirement comes in that says hey you know i need to decide if uh if
[02:25:19]  uh if if if this should be visible now like a new prop comes in well with with with marco what you can just do for example and this is one cool thing is
[02:25:34]  essentially go like this i guess suddenly i know if you've ever done this with with with with with react uh before but like see it works if you suddenly have to add
[02:25:57]  a new state to toggle like what you're showing you have to add it to a a whole bunch of different stuff there's like what if these things have their own life
[02:26:05]  cycle in it um you know this all gets handled granularly simply like this state actually gets created inside this if only if show is true right and essentially now if you want
[02:26:25]  the post to a different component well this you could just copy and paste this out in a single go and pop it into that other component um delete this one yeah i tried
[02:26:41]  the indent but the the shortcuts don't work this must not be monaco but yeah sorry um like basically you can write code in such a way that it's so co
[02:27:12] -located that you can you can literally just pull it out as you want it yeah i think this is fair and this is this is this is the question this is s
[02:27:26] velte's key to success right and i think this is this is what kind of why i wanted to talk about this a little bit because svelte looks similar even though
[02:27:33]  it executes completely differently like it's it couldn't be further from plain javascript but like it looks familiar the marco for example is the complete opposite um concern
[02:27:45]  um but it you know it looks different um and actually behaves differently so i guess not complete opposite but it just it just i agree and i i think this is one of the
[02:27:58]  challenges of creating something that's special purpose that actually works really well right as i said nothing is shorter more concise more analyzable but it's unfamiliar and it's always
[02:28:12]  going to be a barrier can you explain a little bit more the reason i was using the if and lets and just like let you drop them in here the reason i said
[02:28:34]  where you we use the tags the lets and and whatnot is to get to denote that special thing so that we can replace it it could be anything it could be double or it
[02:28:43]  could be something if if if you use like a label based thing um like you we we marco actually has a syntax right now with dollar sign that lets you just write
[02:28:55]  like any console log any like hello like any kind of javascript anywhere in the template um this doesn't work in tags api mode that i'm in right now but
[02:29:03]  i just wanted to kind of you know you know like show that like uh effect this is how you write an effect well you need the thing to denote that it's
[02:29:31]  special unless you don't which is what i was getting to the with the reactive script thing that the whole key is you have to identify that it's a hook right um so
[02:29:41]  to speak the i mean i'm not going to get into the language design too much on marco right now there's a great great article um where we talk about it
[02:29:51]  that i will post in chat i just wanted to brief there's a couple more things that i actually want to get to uh here which is where is it marco um
[02:30:12]  sorry sunny ui language yeah this one um so i'm gonna i'm just gonna drop that in the chat but essentially you can write your own let tag and and whatnot like
[02:30:37]  like none none these are just components they're just hooks so to speak um so they can be user land that's why i was trying to share with the doubler but
[02:30:46]  the the benefit here is it's still analyzable which can lead to other types of uh of optimizations right listen it's kind of like the way react uses use okay
[02:30:56]  so where i want to go next uh was i wanted to before i want to just go back into this example one more time some some of you might have seen from that
[02:31:09]  thread that i posted um evan you remade the that to do mbc the um example in view and he he did so by you know very easily what he did
[02:31:28]  was he created he used reactive and reactive is in deep nested proxies and he did he made the filter to computed call and this is very again this is the
[02:31:39]  derivation this is the state and if you look at this example when you change these they update but when you do this these don't update and when you change the theme color
[02:31:50]  these don't update and as i said react was using this compiler to compile to memoize the components in view you just use the fine-grained reactivity right and
[02:32:01]  and this this is kind of um you know as this is all runtime and very similar and solid so i was like okay what if we what if we um you know did
[02:32:20]  the same example and solid and sorry i'm gonna the conversation guys kind of got there it's not some special conversation it's a composition yes we need we want people to be
[02:32:30]  able to use different identifiers make their own hooks so to speak but we we need it to be analyzable which i'm going to get to in a minute um
[02:32:38]  essentially right the benefit of xml is is and this is why i'm showing this example next is because you co-locate it so easily in that marco example like
[02:32:51]  when we have the if statement in here you know go back a few steps it's not letting me go that far back but if when we have the if statement in here
[02:33:04]  and we were able to like the state is just nested if you tried to do this with jsx you'd have to escape in with brackets right and that's kind of
[02:33:16]  uh you know kind of awkward but this state is owned by the sub thing and this kind of brings me back to this example here i was like okay so let's make
[02:33:29]  this in solid and i i actually made it in solid and the funniest thing when i was making it you know i i made the console here so everything calls once when it creates
[02:33:38]  but again when you update this it's only one call so let's clear this you see it's only it's only calling it once and when you activate this it doesn't
[02:33:47]  change the the updated to do's at all let's do this a little bigger right and when you change the color it's not triggering again and again like view there's no
[02:33:59]  the reason for this is there's like we're using um in our to-do list we're using a store which is like views reactive and it's fine-grained
[02:34:10]  there's no there's no need to rerun these components they don't rerun it's only the stuff that changes like when you when you toggle a store it's just
[02:34:17]  changing the one to do when you're doing this it's not rerunning everything in the component memorization to be fair svelte um would work because it's separated it
[02:34:25] 'd be a little bit less granular more like what react forget is doing but essentially it's just built into the framework react is one of the few frameworks that actually doesn't
[02:34:35]  do this which is what evan used point was but then i realized something when i was making this i the memo that started this whole conversation right because this whole conversation started
[02:34:49]  because there is there was this uh filtered um bait memo or in in react use memo right and that's what started this the idea was without the memo react would just like redo
[02:35:11]  a bunch of work and filter to get called every time you checked it to do and and when you change the color it would run like a a billion times if you didn
[02:35:17] 't memorize the component in in in and in the view thing you know it's all we have create memo to kind of do the same thing to only update i realized in this
[02:35:29]  example because of fine-grained reactivity you don't even need the memo you can actually write this example with no memo and be granular because the list doesn't change
[02:35:42]  only the specific to do does um and since that happens you only have to worry about the updates that happen inside the to do component which is like oh which you know the check
[02:35:55]  box happened and we fired the event and whatnot it's completely isolated but you know view could do this too so i went back and i was like okay well what if we just
[02:36:06]  put the to do component inside the to do list sorry inline it and this you know there's no to do component anymore we just basically have a nested component with
[02:36:21]  its own kind of state updates internally in here and that still works granularly and this is kind of the reason pulling this through is this is this is the marco example
[02:36:33]  except for jsx it's just much more verbose it's the idea that we can just create state if we want to or have stuff nested it doesn't matter the
[02:36:41]  component boundaries don't matter right we can just do this nested because it's never going to trigger the outer component to render again um just because the nature of fine-gra
[02:36:51] ined is you don't need all the memos because it's never it's never going to call it again you're not going to differ you're not going to memorize
[02:36:58]  it so um as i said it's it's interesting to take a solid which already showed you purely runtime the compiled output is just a bunch of clone nodes and some crate effects
[02:37:08]  and apply it to a reactive language like um does this have the compiled uh i mean this is this is a this is actually a vdom if we actually looked at this
[02:37:23]  um this yeah this this is actually this is actually a vdom like react the the next version of marco it's not going to be but like you essentially can just use
[02:37:38]  the state nested in here because it's not about the component yes a little bit uh mostly but the compiler languages don't have it the the downside is that um it
[02:37:55] 's possible to lose reactivity um that's it's hard with the compilers you know to to to make this work cross-file that's why you know there
[02:38:08] 's an analysis and like these special like symbols with solids runtime reactivity we um or so where is it this one we we we're passing around functions so we don't
[02:38:23]  have to worry about the analysis side but it is possible you destructure props somewhere and you lose reactivity um generally speaking it should require more memory to create these subscriptions but
[02:38:36]  because of optimizations ahead of compile time to do the clone templates i do not have that tree that we saw here of like create create create calls um solid has better creation performance
[02:38:51]  too so it's like leveraging both sides of it the gre it has the best updates because the granular reactivity you can't match it and the creation calls are more optimized than
[02:39:00]  you're seeing in in other frameworks um spelt could look at optimizing that a bit and that's what we're doing marco six but generally the three elements of separating
[02:39:10]  the static parts is into like clones um the ability to do super granular updates without diffing and the final one to be able to um use proxies or nested react
[02:39:21] ivity to actually isolate hierarchical parts of the tree is the reason why solid is is fast it basically scores top scores on all three categories it's other approaches can only usually
[02:39:33]  get two out of three at best well cross file means like uh if you sorry if if you import something from another another file like like like solid just passes a function around essentially
[02:39:52]  right so reactivity is retained because you can always call that function it's felt you can't like get the let out of the file really you could like this two-
[02:40:01] way binding but you you can't just like make a function and import it um it loses reactivity this is what's talking about composition um and in in marco you know
[02:40:12]  we're using this information a bit to help us decide about what could possibly be react reactive but this is only possible and um so in general right now for that reason that
[02:40:27] 's why solid performance the best it basically is the only approach and marco is actually using a compile time version of it which uh has some slightly different trade-offs in certain
[02:40:36]  areas it doesn't have the proxies so the nested reactivity has a slightly bigger overhead but essentially it's it's that trifecta is why the performance
[02:40:45]  is almost always better like you don't in many cases you don't need to think about create memo unless something's like really expensive like unless you're like okay this is like
[02:40:53]  gonna take some time because like it's just built that way by design oh yeah yeah yeah yeah yeah yeah yeah yeah yes felt it doesn't do composition like you can use stores
[02:41:08]  to do it but you've kind of switched the model and then once you're back to stores you're just doing full invalidate calls which are fine you'll do the
[02:41:14]  diff loop but like you can't nest state in felt you know you can't go like create some state and stuff you have to make another single file template and while that might
[02:41:23]  not matter much um it's it's it's very nice from a dx story to be able to kind of choose when you want to make your components you know self still very
[02:41:34]  top down um ironically view and solid are actually more granular so as i said it's a slightly different tactics but it's why i mean you do look if you look at
[02:41:44]  the js framework benchmarks solid does outscore svelte on pretty much every single like every single category um but yeah i mean generally speaking it's not what i want to
[02:41:59]  show here is marco's looking if you can do this with compilation solid does it at runtime but it's the the key gist of this whole thing is that it
[02:42:08] 's about like this idea components are pure overhead that if you i'm not saying don't write components but all the whole react memo conversation is about components like it's about like
[02:42:24]  memoizing components making sure things don't rerun if if you built your whole thing around components that's the granularity you're trapped at you can do smarter things if you
[02:42:32]  can move away from that granularity um rich harris in his virtual long it's pure overhead uses this example it's very very similar to the two mvc example
[02:42:41]  they're using because the problem is if you change the selected state here in react it reruns the whole thing it reruns the map reruns this in in react you would
[02:42:50]  usually never do this you would you can write this in a different component so you can memoize it so like it can have its own kind of separation but generally speaking if
[02:42:59]  you do it kind of like in a dumb way or uh you know you do a lot of extra work when you have a vdom um svelte solves this problem but
[02:43:10]  it's it you have a different problem your components are the boundaries essentially um they're they're the things that that react like you you're just auto memoizing that has
[02:43:22]  a cost too we what we have to what we have to do is get away from the components which is it's not just about runtime reactivity or compile time you can use
[02:43:31]  it with both approaches it's just a completely different paradigm shift yeah so anyways i'm going to move on from this to to to kind of showing what else we can do
[02:43:50]  with compilation here um the reason i want to bring up this granularity though and kind of talk about its role kind of is because it is it is you know an area
[02:44:00]  of research another another cool one and kind of semi-related is um oh where are we so i have so many things open right now is is yes uh sorry it's
[02:44:22]  not open here i have it here i i was uh recently um michael rawlings gave a presentation internally at ebay and i i just wanted to show about how this sort
[02:44:36]  of compilation of language like stuff that you know in a sense svelte does or marco is doing um can actually lead to improvements not just in um performance like this
[02:44:50]  but uh you know like for rendering but like stuff for like sending less javascript this is and doing less work this this is kind of the cutting edge stuff and i thought
[02:44:58]  it'd be interesting to kind of end this session talking about um what what can be done here okay there's a question here about distinct demographics is a trigger because it's not
[02:45:12]  exactly top down execution yeah the interesting thing is with the declarative system in theory you only need to debug the uh imperative escape patches in theory unless there's a bug in
[02:45:23]  the library because it's like how does one um debug html like would you debug html like you might debug where you update a value or you know like
[02:45:39]  set something on an attribute or something but you don't debug the html itself and uh declarative stuff is kind of an extension of that right the derivations and the
[02:45:49]  execution get a little bit more complicated for sure but yeah i i don't know if it's any more complicated than hook rules right you just need good tools behind it okay so
[02:45:58]  let's talk about hydration for a moment in most frameworks if the process of hydration is like basically you render something on the server and then you have to bootstrap it
[02:46:10]  so that the javascript works when um it starts up and in most frameworks what that means is you you basically find where the html is like where the component is
[02:46:24]  in the html re-render that component essentially like run through its code initialize everything compared what was rendered to what the server was read and attached eventless this
[02:46:34]  is how it works in a vdom library at least uh essentially um you you basically compare what was rendered previously and then attach it the but what if for the compiler you could
[02:46:45]  just find that button and add the event listener and not do any of this diffing work and and that's that's sort of what we've been looking at using the
[02:46:55]  analysis for this this this counter should look kind of familiar i just made it in the marco repl um but we're you know setting a count and we're clicking upgrading it
[02:47:05]  we've we've seen this code all night but one cool thing with compiler analysis is this is what compiles through right now and you might be looking at this and going who
[02:47:18]  um that's a lot of code right um you saw the solid and the hyper script ones are really small this is still way less code than spell you know it felt our
[02:47:27]  counter was like like three pages or something but um you know it it is and this also doesn't resemble what we originally wrote but what i wanted to kind of lay this out
[02:47:38]  for you is look we have our template which we clone which is same as solid which we talked about don't worry about this walk array it's it's encoded travers
[02:47:46] al of the nodes to find them i mean solid we had all those element dot for uh template dot first element you might know it's like l dot first child instead of like
[02:47:55]  writing it out and just walking it um marco here is is essentially encoding it into a string that gets called don't worry but essentially what if we could separate stuff into
[02:48:11]  a function which we call when we render and one we call when we hydrate that's sort of what the thinking is here when you render something in the browser well you have
[02:48:21]  to actually do the rendering initialization and you have to hydrate it for the first time essentially the difference but when you separate the static in the dynamic parts like we've
[02:48:30]  been talking about this whole time you can start to see like what's the difference between between um initial render and hydration in initial render you have to clone these nodes and then you
[02:48:43]  do a walk to kind of add the reactivity in hydration you just don't clone the nodes but then you do the walk to have the interactivity right that's that so
[02:48:53]  it actually makes sense that a hydration is a subset of of what a client-side render would be so in our simple example when we render it in the browser well we
[02:49:07]  have to initiate our let variable our account i'm going to go back here it's so our count equals zero right this is like the hook let's say then we call hyd
[02:49:20] rate and then hydrate adds our button handler but yeah what does render count do well render count it sets the value that we passed in and the reasons that ef is because
[02:49:36]  this right statement returns a dirty check kind of like like what we've seen with react forget and with with uh um with svelte and then if it passes if it fails
[02:49:46]  the dirty check then it calls a data function which is setting the it's actually just like svelte you saw how there is like element and data it just calling it
[02:49:55] 's it's a wrapper over the dom thing this is just like text node set data and then don't worry too much about this this is just the index like you know so
[02:50:04]  we saw those zeros and ones and stuff for the where the index is in the context this is just an index and we're setting it the value um and the click handler um
[02:50:13]  the last piece of code here essentially sorry i assumed for is essentially is what we're gonna do is just queuing um an update where we say on click update count with
[02:50:26]  the with the new count we read the existing value of count and we plus one it now this this this essentially is what this component converts into essentially it still has the parts
[02:50:41]  we just separated it into a bunch of different parts now what happens if we server rendered it and we know that this will never render again in the browser like it will never be
[02:50:53]  client rendered well suddenly we don't need all this we don't need the render code we don't need the template we don't you know we don't need these walks
[02:51:03]  here and we don't need the the the the main export if you look here there's an export that exported like our component all we need is the hydrate function the render
[02:51:14]  count and the click handler um because we we'll just call hydrate and instead of you know setting this up for the first time instead of like writing and doing the diffing
[02:51:26]  and kind of setting up our data we just know that all we need to do is add an event handler and this event handler will call this one an update so essentially we
[02:51:34]  skip this initialization code and you might think okay well that's not much but when it's when it's actually minified we just actually reduce the size of our component by
[02:51:46]  half like this this this big verbose component minifies to this whole thing and the gray sections we saw here the stuff that we cut out is actually the large part like
[02:51:58]  the template like this is a small template this is just a div with a button but picture has some rich html or some more stuff we we actually reduced the component by
[02:52:07]  50 percent simply from the knowledge of that this won't re-render in the browser right so and the funny thing about this example is this is a stateful component this is
[02:52:19]  a component that updates like you click on it and it still updates in the browser but we we were able to ship ship half of the code because it didn't need to
[02:52:28]  re-render and this this this this kind of mentality can go further because what if uh looks like i didn't update this um what if um the you know sorry i didn
[02:52:44] 't actually explain this part well but what if this this this component had no props so we didn't see it but what if each input like each prop was was actually just
[02:52:57]  written as its own function here essentially beside the parent and the parent could import them based on whether it knew whether it called it with stateful or static data because if it
[02:53:15] 's static we know that we don't have to do any work essentially and i i hope i'm kind of watching this part of the explanation a bit is through using compiler
[02:53:29]  analysis by knowing what is stateful in here what needs to be set up for render what needs to be set up for hydration when this node is processed from a child perspective we
[02:53:42]  can provide the metadata for the parent to make the decision of what part of that component to to import and if the parent knows at runtime or sorry not runtime sorry if the
[02:53:54]  parent knows based on the the data that it has that it won't be dynamic it can just not import that part of the component maybe whole sub trees and if if the
[02:54:09]  impact that like the and the way we can do this is that because of this component syntax because of the the the the analysis of like you know uh like this is a variable
[02:54:23]  this is a hook we can go oh this is stateful this could change we can actually trace and see that count was changed within this local scope for example so because we know
[02:54:34]  what's stateful we have the ability to make the decisions throughout the tree of what code could possibly change versus not possibly change and just shave off huge amounts of code like
[02:54:47]  not only not send out um components which are mostly static like a header or footer that never changes but actually take a stateful component and split its code like this is a
[02:55:00]  small component picture more complex modem maybe in half maybe to a third all through using the same kind of ability of analyzing it so yeah this is the experiment we're kind
[02:55:12]  of been doing with with marco um is essentially compiling stuff like the the reactive graph into um a series of separate topological sorted functions like so that everything is granular almost
[02:55:29]  like the execution is solid but without any subscriptions i don't know if that makes sense to people it's pretty complicated but i just wanted to kind of show at the edge
[02:55:38]  what kind of powerful things can be done if you embrace the language or embrace the ability to do this kind of identification you could basically you know there's been a lot of talk
[02:55:50]  i talked about at the beginning like with remix where they're like oh you just turn off the javascript but with it with an approach like this you could not turn
[02:55:58]  off the javascript and still not shift most the code to the browser um quick is kind of like a different version of this but with quick you're doing lazy loading based
[02:56:08]  on interaction this is the compiler knows up front yeah yeah yeah what i'm getting at is when the when it does a run the child can basically know enough about itself to
[02:56:22]  inform the parent and then the parent can look at what it provides to make that decision it can kind of go all up the tree to basically prune out anything that can't
[02:56:30]  update in the browser automatically and marco for example is used mostly for multi-page apps where you navigate actually takes you to a new page so you can actually make that
[02:56:41]  assumption for like pretty much everything on the page you can just like look at it and be like oh like you can put a for loop component something that's dynamic and be like
[02:56:51]  oh but this data only gets fetched once on the server and it never gets updated don't need to send the for loop to the browser don't need to send the data
[02:57:00]  to the browser right like you kind of solve the double hydration problem when when you have this kind of ability to uh analyze based on statefulness and this is possible because you're
[02:57:12]  using a clearly defined language um essentially to to know what's stateful and you have composition because things like the for loops or or whatnot like they're all part of the same
[02:57:23]  composable library so like this is sort of like an extreme of it um and a reason i was giving some of the examples i've been giving towards the end here is
[02:57:33]  because in my opinion there's a lot of different techniques and and and uh and or sorry there's a lot of we're gonna see a lot of the same techniques being
[02:57:44]  applied in different places as ways of optimizing you know i talked about the the separation of the static pieces from the dynamic pieces uh talked about you know ability to do nested like
[02:57:55]  there's different types of analysis and stuff that we can apply the problem but the the interesting part is i think there's going to be a paradigm question of whether the component
[02:58:07]  top-down model is preferable compared to the fine-grained sort of thing i think that's actually where the difference is and it's not really obvious to people
[02:58:16]  now because they kind of just look at stuff and just go oh you know i just wrote some statement and updates but um this is this is like a very kind of interesting thing
[02:58:26]  when you consider that if like with reactive language you have this ability with the fine-grained stuff to actually do this type of analysis right um where in a top-
[02:58:40] down system it's innately top down you you you can memoize but you can't like not run it right like this is kind of an extreme right when in our example
[02:58:53]  of solid i was saying like we didn't need to memoize because it would just know that only run that subsection um rather than you know have to rerun and then
[02:59:02]  you know just shortcut out the way svelte or react forgets does this is extreme on the pilot side you can go well actually if it never runs then we don
[02:59:11] 't even need that code right and that's that's sort of the interesting thing um so you know when when we saw react forget we were like we know marco 6 is
[02:59:25]  heading this way which is as i said kind of completely beyond that but we actually implemented something very similar to react forget when we did the tags api this this demo that
[02:59:35]  we've been playing with here that does this nested memoization is actually doing something very similar to react forget because this is a top-down vdom like react but it
[02:59:45] 's behaving like a fine-grained library and that's the proof in my opinion to show that you can take this paradigm of fine-grained like we find in solid
[02:59:57]  or in this compiled thing with marco and literally apply it to any sort of uh technology or framework without a breaking you can't say that about the react execution model it
[03:00:06] 's the reason why they haven't they've had no luck with like compilers it's not like the way they're looking at compilers now is like optimizing to
[03:00:15]  fit their workflow but they can't like they they couldn't remove the vdom you know there's this talk about you know vdom's just uh implementation detail well in
[03:00:27]  react it's not just an implementation detail they're kind of like their model is based on it um even if if they transcend to a language they would have to change the sem
[03:00:39] antics and maybe that's the long-term plan for them but as long as they're thinking top down they like that's what there's that's what they have it
[03:00:50] 's it's just a bunch of you know memoization there's there's a a problem with it like we're getting into really into the weeds here a little bit but i
[03:00:57]  just wanted to kind of mention that like there are repercussions yeah yeah i mean that's the thing but they they kind of are sorry i didn't leave that up long
[03:01:17]  enough they they kind of already are like if you think about hooks and stuff like i i've told people this before but hooks you know people go oh yeah you so you
[03:01:29]  like really inspired by reacts api you know with solid you chose to do it that way i'm like honestly the tuples were genius but hooks look like knockout from 2010
[03:01:39] . like i i'll say it now i'll say it again um they've already made that trans transformation um yeah but and that's the funny thing what's the simplest
[03:01:52]  solution this this this this is this is kind of the the the fun part right i think the idea of easier simple is a thing i'm glad this is coming up here at
[03:02:02]  the end of the kind of this talk about compilation because like on one hand like marco here or svelte might be the simplest you write the least code i mean this
[03:02:16]  maybe the syntax is too much like for some people maybe that that's like too much of a barrier but you go like here show you you know x you update it you
[03:02:25]  just write something like this um but you know we we've already seen it marco's stuff's actually fairly traceable but we've already seen what's felt what you know
[03:02:36]  like it's you get a class component you get something kind of already out there um yeah sorry react forget is this talk um that they did at react comp and it's
[03:02:51]  it's react without a memo i'm sorry i showed this for the to do mvc example but essentially this is this is uh this is the compiler experiment that they're
[03:03:04]  doing here it's an interesting name because they're kind of playing on the whole idea of memo or memorizing um the only unfortunate part about this and this has already come
[03:03:14]  up in a few places i've seen is some people just reverse the name um you know someone responded to my tweet they're like react forget forget react um so you know uh
[03:03:26]  you know fun fun naming things is fun but essentially um what what i'm getting at is like there's the there's the there's the semantics and stuff you know
[03:03:46]  that come from like when you look at it there's what it compiles to as i mentioned the marco six compilation is a lot simpler but you know hyperscript or
[03:03:55]  solids output sorry not in this example this one is is is very transparent that's this is a different type of simple like the fact like that what you would write is what
[03:04:05]  you would write is is like a different type of simple so i think it depends on what you value and that's the biggest thing here there's a lot of you know syntax
[03:04:13] ual um you know considerations and preferences and and the thing is um i got a great you know talking along those lines uh what's it uh solid labels right i love the
[03:04:24]  name of the package fits along uh get out um what's it i will plug in solid labels check out this project here this is solid right but um it's also
[03:04:51]  svelte essentially right let count i mean i don't know about the naming here exactly but essentially affect labels and effect and and actually um the creator of this this library has
[03:05:08]  actually been working on a solid a solid a solid fsc which is interesting oh this isn't i hate when this happens when you open the repo and it's not the
[03:05:23]  repo it's it's it's it basically yeah here it is it essentially looks like uh a cross between astro and and and like svelte so you are sort
[03:05:40]  of you rest your you go let count equals dollar sign signal and then effect does this effect and then underneath the dash dash dash you can just write jsx um for example so
[03:05:50]  the reason i'm bringing this up is i think there's a question to be asked swix said that language servers were the the new framework you know and and you know
[03:06:07]  this is this is the thing right one way to describe it is you need to forget javascript to learn the language it's one step yeah when it's just it's
[03:06:17]  not a problem right yeah and i mean people are gonna have different preferences here what i was getting at is like some people prefer this kind of like minimize thing i mean this isn
[03:06:27] 't quite svelte because they wanted to call out but if you think about it if they if they were if the author of this library was fined making all lets
[03:06:36]  into signals which has a performance implication right selt's approach does have implications it's reduced because they don't have a runtime reactive system but you know maybe with smart analysis you
[03:06:48]  can see if something ever updated then make it a signal or if there's ever tracked or something but you know and we are doing that basically with marco so and doing it
[03:06:55]  cross files so i mean it is possible my point is you're already there like even if you get rid of this dollar sign signal it's not javascript anymore but
[03:07:05]  you can fool people and uh as i said maybe that's enough svelte's kind of angles to kind of like i i don't think it's deceptive they
[03:07:13] 're not trying to be hard they want to make things easy like they're not trying to like trick you but like it is it is a bit of a trick like it
[03:07:20]  goes oh i just said count and it just updates when the dollar sign but like you've completely changed how it operated and you know people just don't realize that so that's
[03:07:30]  how they skip that first step um but essentially like there's a i'm trying to get as a couple of schools of thought here like you can attack this different ways you
[03:07:44]  know swix says um you know the language is the framework yeah yeah i think it's valid too that's why i actually wrote that reactive script article because i was like can
[03:07:59]  we fool people even more like can we can we get composition and svelte that was essentially what that article was um it was i was interested in for solid's case too
[03:08:08]  but i'm like could we write an svelte like api that actually like wasn't very limited the way it felt like i think composition is a non-starter
[03:08:16]  it's the reason i think react exists today because of its composition model like people didn't even like it that much at first and you know but like it won people over because
[03:08:26]  of its adaptability not its flexibility but its adaptability just because you can compose and build stuff how you want it right yeah yeah yeah that's true what's nice about
[03:08:43]  marco is because of the separate syntax you it's very distinct when you're in javascript land and when you're not one of the problems with my reactive script idea
[03:08:51]  is it all looks like javascript so the back and forth is not less clear and it's felt it's like that too you're kind of like you're in the
[03:08:58]  dollar sign so you're in special zone but it's like there's other rules that carry outside the dollar signs because let's are also like like it's a it's
[03:09:05]  it blurs the line there's benefits of having the the clear separation in a sense solid cheating well i'd be interested to know what you mean by that because like i i
[03:09:15]  view solid as like a purely run time mechanism that i would just write by hand right it's like it's like programming with promises right so like yeah there's there's
[03:09:30]  syntax considerations but the thing the thing that i'm trying to get at is is the framework the language right like is it the syntax that it defines it when we're all conver
[03:09:43] ging and in the case of marco it kind of is like the explicit syntax made that decision kind of it's it's carved its own ground it has exactly just as
[03:09:52]  much syntax as it means to be effective like it's it's it's built with that in in all in mind and maybe this is true as spelled although it's felt as
[03:09:59]  a missing composition features at its core language level not in its thing you can use stores but i'm just i mean in terms of language or like and and this is why i
[03:10:08] 'm kind of exploring both sides here on the compilation side because or another way of looking at framework is like what i'm doing with solid it's it's it's just prim
[03:10:18] itives like you could take solids primitives and use any language you want like this is a very imaginative version you know um of using someone came up with this and the
[03:10:36]  cool thing is sure they've spent many hours and you know days on this stuff but because of the power and flexibility to primitives you could just design whatever syntax or whatever is
[03:10:49]  that's fashionable for you and make it you know benefit from the from the approach to solid so like these are two very different extremes right like like is is the language is
[03:11:04]  the framework the the language like are you are you identifying with this like or with svelte syntax like if if if someone rewrote svelte with a different
[03:11:15]  implementation but had the same api would it still be svelte or is you know like the lines are blurring or like or do you just write a framework and you
[03:11:27]  can write it any way you want right now um in in my mind marco and almost view are the two complete opposite perspectives on on that i mean you could say solid
[03:11:40]  also on the view side but view is how many different ways can you write a component in view i think there's three right now you know it's like every two years when
[03:11:49]  the fashion changes view will come up with a new way to write components perhaps right like the composition api given the primitives kind of like solid but then they're like okay
[03:11:59]  well we want to make it easier or like make something so they came up with another language i wonder if if like the view is like the please everyone framework so from that
[03:12:09]  perspective it makes a lot of sense because if something becomes popular they'll just ape it on the surface api because if syntax and that's what makes dx that's what you
[03:12:21]  care about then like maybe this is the easy part like you know look you know i have an example where i mock views api using solid or whatever like it's just
[03:12:31]  like a surface layer but if you use compilation for good like marco you know unlocks completely different doors and i i mean that's that's that's harder to do and
[03:12:44]  that's something you need a language for so you know it's one of those games where it's like i kind of like the extremes i like i want to see both
[03:12:55]  velocities extreme i think the middle or the compromise zone is the is the place that's the least interesting because like if you're if you kind of have a language but you
[03:13:05] 're a compiler but you're not exploiting it to your full usage then like you've just introduced something like like what is it doing like someone else can just copy that dx
[03:13:18]  it doesn't have huge value if if um you know that's that's that's basically where my thinking is here right i think compilation has incredible potential um but it's
[03:13:31]  it's not just about performance like sheer performance and it's not just about developer experience that as i said the developer experience part is is is copyable um so yeah i mean
[03:13:46]  take take what for for whatever for for whatever that means i just need some water it's interesting because as i said this react memo thing is happening because people are calling for
[03:14:03]  it right um that that's that's that's that's that's sort of like the that's the thing that's going on here right um there there's a big up
[03:14:18] roar in the react community a few few months ago and i i think that apparently seb uh sebastian or you know mark i can never say his last name he's been
[03:14:28]  thinking about this for a while and i i don't blame him i've been thinking about this myself for a while too because you're kind of like well maybe a compiler kind
[03:14:35]  of solves it it's just it's one of those things where how hard are you fighting your model to kind of do it i i when i was talking to dan and he
[03:14:45]  was kind of going well you know i i only see the the r immutable way of moving forward and he was kind of basically suggesting that frameworks that didn't do it
[03:14:56]  the way react was doing it perhaps like didn't wouldn't have the same kind of capabilities i i just go no like you you can take a very different technical solution and
[03:15:07]  kind of force it into where you want it to be on the edges you kind of uh you know shim the gaps so to speak right like this stuff like the react forget
[03:15:16]  and even like the hook rules and all that is really trying hard to force something that is a little bit unnatural on top of react like like in turn on top of that
[03:15:27]  model and they're finding ways to balance it and for it to make sense and uh a lot of my work was always like that like using the jsx and stuff i love
[03:15:35]  jsx because it's completely transferable you you can just take a snippet of and move it around it's composable but you know that's unusual for a reactive framework
[03:15:43]  and i think this i think this thing about like seeing different languages have different semantics on async weight yes and that i think the the the what i what i showed
[03:15:55]  uh here about state derivation effects i think they'll have they'll have slightly different things around this but this this is the core this is the language we're doing there is
[03:16:05]  some convergence here i said it when hooks first showed up because they for the first time ever uh vdom libraries looked like reactive libraries but there are still slight changes and our differences
[03:16:17]  and like does it converge i don't know um there's a lot of different experimentation going on yeah so and so this was a possible answer to my question so i say
[03:16:32]  if solid is a collection of ideas that make solid work as it does then yes language doesn't matter it's called solid everywhere yeah so this is this is the this is the
[03:16:41]  question right maybe it's language versus paradigm maybe maybe maybe that is how we we fixate on this because svelte is saying that frameworks are language react has always said
[03:16:53]  that frameworks are a paradigm they're uh like a a collection of best practices like you know the you build these primitives and stuff and i feel like in a sense solid represents
[03:17:09]  in a very not in technology exactly like not in like implementation but in philosophy kind of what reacted when it started like that kind of mentality towards just a library kind of thing
[03:17:24]  and that kind of like purity in terms of not having to walk these harder compromises um because it's just newer let's face it um it gives it a lot of
[03:17:36]  the same qualities that react had back in 2014 or 2015. that's what kind of makes it exciting and it and the idea is it's it's just reactivity it's
[03:17:44]  the paradigm you can model anything with it and that's a very different idea than it's a language that can be implemented anyway i think i think that perhaps is is is
[03:17:58]  is the convergence point or like is the is the like this versus that people choose the language first not the paradigm i know i'm taking this a bit out of context but i
[03:18:15]  think i think that is true i think people have a like you you you get a gut reaction when you look at how something writes when you see how it looks like this which
[03:18:24]  is kind of the challenge in a marco's faced in terms of adoption we could literally like i've said this before it's funny because i'm usually not like too
[03:18:33]  hyperbolic on stuff like i understand the limitations of solids performance i understand that there's no clear trade-offs and like there's trade-offs and there's there's
[03:18:40]  like places where different solutions are better and you can do that but for building a website there's nothing better than marco like empirically like i can and i feel more comfortable
[03:18:52]  because i obviously didn't write marco initially and stuff but like if you're not like multi-page app stuff the technology is so far removed from where the competition is
[03:19:03]  it's just not even it's it's not comparable um and this isn't me floating about myself it's just like when i found marco i was like what the how
[03:19:13]  how could this possibly exist and people just not be like all over themselves on it and and the it's it you know maybe it's it's like this you know like
[03:19:22]  i mean marco doesn't have this syntax today but like or it does in the type preview but like this is new it's it's it's it's people getting over
[03:19:29]  that hump when they look at the language because from a pure technology standpoint like think about how excited people are getting about astro you know in terms of like partial hydration and
[03:19:41]  stuff marco does that automatically and does it better so it's like like and it like it's considerably better when you consider it can work in dynamic stuff and this isn't
[03:19:51]  a slight against astro it's just like it's just not even close i i don't but you know i don't say this as someone who like there's there
[03:20:01]  was no competition there's like no other framework until like last year that was doing this and marco's been doing it for like eight years like it's you know like like
[03:20:13]  these these are real barriers you know trying and it's an interesting game when you look at language and syntax and people's reactions and stuff you know designing language is hard because
[03:20:26]  even the best design language might be just missing the it factor the thing um you know it's much harder to design a language and a framework so i think that speaks a ton
[03:20:38]  to svelte's success as much as you know i might be critical of some of the limitations for me as someone who likes control and sees like those limitations almost like
[03:20:48]  a non-starter for like my my experience um i like what's felt does and i think that there's room to improve in the future so like you know take that for
[03:20:58]  what it is right because like how should i put this these things are the product of the environment they're built out of marco was built at ebay where page load speeds
[03:21:09]  and making sure you didn't lose milliseconds was was the thing they couldn't move off java unless they made sure that they didn't lose an inch of performance right um
[03:21:23]  react was built at facebook um kind of like to build almost a mobile experience in the web right they they did switch over to uh um you know react native but i mean it
[03:21:40] 's it's still they they they realized that like using web technology won't get them there but essentially they wanted to build the most interactive powerful apps and thing and it shows
[03:21:49]  in terms of just the the way that they they view everything like it's mobile so like like yeah i yes it is true that marco is is is imperfect today mar
[03:22:13] co six will solve those problems but i mean any islands architecture the state has to be in the leaves too like this like like sure like at worst a marco app is
[03:22:30]  is like this is like a view app or something or you know what i mean like in terms of size or whatever um but at best it's it which is like where
[03:22:41]  the like and where the means sits it it it's just better at islands you know in general but what i was trying to get in my in my in my little spiel
[03:22:50]  here about it being the product with its environment um yeah and and here's the thing where did svelte come from svelte was built on the newsroom floor
[03:23:00]  for projects that needed to come out rapidly um you know short-lived maybe a few weeks you know but really flashy animations looks good but churn them out like quickly as
[03:23:14]  possible rich talked about that on a podcast i listened to a js party and and and he kind of nailed it you know like you can tell this you know he's not worried
[03:23:23]  about nested state you know management like causing too much re-renders or whatever not re-renders because felt doesn't re-render that bad but like causing like
[03:23:34]  too many parts of the app to update or whatever like it's just not the case they're gonna hit right in that thing and if people want to understand where solid came
[03:23:42]  from how about maintaining uh uh and um maintaining a single rather large single page app like social media like think something like a twitter but private for 10 years and trying to piecewise
[03:24:05]  change the stuff it was built on knockout but essentially keep things up to date by by piecewise swapping out the pieces it's you can see it in its design
[03:24:15]  everything is is is designed thinking in terms of um large uh large scale and in terms of uh control like being able to and and replaceability it's it's a framework built
[03:24:27]  for change and maintenance it's not easy to adopt solid it's um it's you know there's a bit of a learning curve um but it's a framework where like
[03:24:36]  if you learn the pieces you just apply those pieces forever so like i'd say it's basically a framework that was designed for maintenance so you don't hate yourself in two or
[03:24:45]  three years that's not that's not a good selling point but it's it it it it it it it it it it's essentially like where the roots is like i i
[03:24:55]  haven't cared about the floor so to speak like the learning curve when i've designed solid i cared that the uh you know an intermediate or expert engineer wouldn't hit foot
[03:25:05]  guns and would be able to refactor things merces merces slowly start like slipped on that word but like with with without reservation so like you can you can just see it
[03:25:18]  reflected in the in the philosophies of the of these of these different frameworks what what they want to do you know i'm trying to remember what view story was but i think
[03:25:27]  evan was also working in a place where he was doing fast prototyping it's very similar to to to um svelte actually in that sense so uh you know
[03:25:39]  different kind of thing in a sense maybe solid story is actually closer to to react um in terms of influence and how it was created which means probably why i respect react's
[03:25:54]  decisions more than other ones so it's kind of as long as these different perspectives different types of experiences exist and different you know kind of gut impulses we have towards um syntax
[03:26:08]  or you know you know you know patterns we're going to have differences here these things aren't going to converge even if they get to leverage the same techniques in certain places
[03:26:18]  well that was that that was my spiel and then that was a 20-minute one too so this is my longest stream to date and i knew it would be because the
[03:26:31]  topics that i covered were so wide and varied i'm going to give people a chance to ask any kind of last questions but i think i said my piece today um we
[03:26:41]  got to look at some stuff oh you know what i've got one more tool for you one more thing i i should i was i forgot to do this earlier and i feel
[03:26:52]  really bad about it because i felt this this would have been really really quite useful i jumped right into compilation and showing you the outputted code but i didn't talk at
[03:27:02]  all about how we actually do it and you know people write parsers and tokenizers sorry this is like this is not the thing you want to put at the end but i
[03:27:14]  just i did i did intend to cover this a little bit and it's it's fairly short um babble here is what i'm using here but if you've never
[03:27:25]  seen it ast explorer is an amazing amazing uh resource um because you can just literally choose your parser turn on what transform you want to use this is not just javascript
[03:27:38]  you can you css gsl html you know there's a whole bunch of stuff in here and i'm not i'm going to tell you straight up i
[03:27:47]  i wrote solids i wrote solid in this in this in the browser essentially what you see down here was is is just dom expressions it started much smaller but now it's like 2000
[03:28:02]  um you know 2000 some odd lines but this is this is this is the whole solids compiler right here in in the browser i just this site remembers like what you have here
[03:28:15]  so every time i come back the thing is here so like you know const b equals div you know this will output solid code like template div um clone node div it's dom
[03:28:30]  expressions it's not solid specifically but yeah yeah i mean that's the whole thing um yeah this this this video is gonna stay on my youtube all my stuff gets posted um
[03:28:47]  when it's done um yeah but my the thing is some people use typescript right to figure this stuff out um typescript use would not be great in babel so
[03:28:58]  i'd be like oh geez how do you uh go f like what what what the hell does our like what's this what's this operator called um i don't know this
[03:29:09]  operator is called a well it's a logical expression see this on the side here is the ast so you can write anything you want and they'll show you the tree so
[03:29:20]  it starts with a file this is babel's um ast but file and then it has a program in it and then there's an expression statement and inside that there's a
[03:29:28]  logical expression and the operator is dollar sign dollar sign on the right side there is a string literal and on the left side there is an identifier whenever like i don't know what
[03:29:39]  something is or you know i need to figure out for the compilation i just i just write something here and you get you basically get to see what the ast is um the
[03:29:48]  so you know let's go back to const d this this this this is how it was so easy to people go oh why did you use babel or jsx i open
[03:30:02]  this up and here we go variable declaration cool and the id is this identifier and its name is d and the initiating of the variables the jsx element who is this
[03:30:17]  opening element and actually let's add an attribute um title equals something sure there we go it has attributes and the name is this identifier which is a title and the value is this
[03:30:32]  essentially this is this is half the like this is more than half the work you know like typescript knows what to do with jsx eslint knows what to do
[03:30:44]  with jsx prettier knows what to do with jsx um it was just a matter of like looking at these trees and go okay i want to output this instead right and
[03:30:58]  how do i know what this is well figure out what i wanted to output and then drop it here and then go okay it's a call expression with the call is a member
[03:31:16]  expression because that's what you call when you access a property on it and then the arguments are here like essentially like i could use it both to figure out what the code
[03:31:31]  is that i was interpreting and the code that i was going to generate is um ast explorer is just the the best like solid was written in here right um i when people
[03:31:49]  talk about uh you know oh switch to swc or whatever stuff like if if they had rust in here and like if i could do this with with swc i i'd
[03:32:04]  do it in a snap like the like it's hard there's so many in all they know all the different nodes and the properties and stuff um you know there's a
[03:32:13]  great handbook here babble uh um what was it a handbook it's written by jamie kyle uh for he's he's done tons of stuff he's um
[03:32:26]  he was he he works in the rome team he he he i think he was co-creator of babble um he worked for discord for a while too um
[03:32:36]  and this this is a great guide i'll drop this in the uh in the chat as well but right like um but you know like this is helpful but this is a billion
[03:32:59]  times more helpful i mean there are features you just learn about by exploring i learned more stuff working with the marco team than i like did before like can i show you
[03:33:08]  like an example of the cool stuff that babble lets you analyze like um well if you've ever seen this felt this felt repo it's just like there's this example right
[03:33:22]  and it's like let name equals world and it says hello world right and if you look at the js output it's we we saw that it's it's it's
[03:33:33]  it's it's it's it's a lot right and you know here it is here's here's our text content finally coming into our name and if you look at the
[03:33:41]  ssr it's a little simpler and we can see that it escaping the name and doing all this stuff um but here's the thing with babble sorry where is
[03:33:54]  it let's let's just let's just do the svelte thing let's let name equals world right babble knows how to analyze variable usage right so look at what
[03:34:14]  solid outputs for this hello world example it just clones the node because it knew because world is assigned to the static variable uh essentially that and there's no like there's nothing
[03:34:27]  else that it could calculate what the value is i i'm able with solid to go oh this can't actually change so it's you doing this is the same as you doing
[03:34:38]  doing this essentially so the the comp see it didn't actually change there when i changed let's do it again see um because we can babble has the ability to actually
[03:34:50]  analyze the trees this way um and getting advanced functionality like that does take a little bit of digging but um you this this is how that this is how we can do that
[03:35:04]  crazy type of static analysis and stuff we could we know which expressions are static we know expressions which could be stateful by looking how they're used in the syntax there's a
[03:35:13]  ton of stuff you can do with analysis um this is just like the tip of the the tip of the iceberg here right um yeah so where's the server rendered version right i
[03:35:25]  have to introduce the hydrogen key but i just kind of wanted to to kind of show um like the power of compiler analysis um it does this is why tag template literals
[03:35:38]  doesn't get you all the way tag template literals can analyze the static part and that's like 90 percent of the problem but with solid um we we we like we we
[03:35:48]  know like we're like oh if this could if this is dynamic um let's get back here now it's gonna now it's gonna see we skipped escaping in that example
[03:36:01]  too um now now that now we know that this is dynamic and we we you know could potentially be dynamic so we we do the the thing here but um what i'm getting
[03:36:12]  at is we we use this knowledge like we know that this is a function so it could be dynamic so that's that's why we we kind of know know to wrap
[03:36:24]  things and it is like if if you had something that was more expensive like um like putting a dom node injected in here and i know you can't put a div in
[03:36:47]  h1 um humor me so solid can look at the hole and go oh i actually have to put memoization guards up here so things don't over execute to make sure that
[03:36:55]  div isn't created unnecessarily whenever name changes only when the condition trains is from true to false the this this kind of analysis um is is the kind of stuff that you can
[03:37:08]  do with the compiler while solid doesn't actually change your code out in the in the in the in the like javascript world inside the jsx we have a little
[03:37:17]  thing we don't actually do that much um of this kind of trickery um because we we like to keep things transparent but for things like ternararies um conditionals
[03:37:29]  uh obviously there's like there are there are we like it's the same reason we have the show components and stuff in solid we we have this ability to um you know
[03:37:41]  analyze conditions so that they can be perform optimally yeah so um yeah ast explorer is the best best best thing ever and it's it's really what's made a lot
[03:38:03]  of this stuff possible um i just wanted to give it a quick shout out um obviously i intended to do this earlier because i wanted to talk more about the specific types of
[03:38:14]  uh analysis we we do but um you know there's a lot you can do um by looking at the syntax tree and kind of like understanding what your code does even even in
[03:38:28]  even in javascript right so this this this is how i don't know if i'm going to shout out one more project on um compilation if you if you've
[03:38:39]  ever seen it mycosis um from the guys who built quick um builder io is a right component once library that you can basically write your component in any framework and it outputs
[03:38:53]  it in a different framework um part of this is understanding the language thing and when they started the your input code basically had to be solid js you can actually see this if
[03:39:05]  you let's see if i can if i can if you see the example their use yeah no this this isn't they changed the example from the website but essentially they started as
[03:39:17]  something that looked very much like solid and then compiled to the other frameworks because solid's language is more analyzable than react let's say but still use the jsx
[03:39:30]  because of you know just our use of control flow components and um our reactive models like simpler it's it's it's back to those those primitives we talked about there's
[03:39:43]  no use callback or whatever so they used something that looked a lot like solid and can compile it to view react liquid there's a full list down here um uh so
[03:39:57]  yeah here here's the list react view liquid builder solid figma angular svelte web components react native swift um simply from doing that uh they they have changed their approach now
[03:40:11]  they're actually now using a subset of of react to do it so that they like they're mapping map functions and stuff but it's a much trickier tool because they
[03:40:20]  can't actually take any react component and convert it to the other languages where in theory they could have taken any solid component converted to it not very useful from obviously my perspective in
[03:40:30]  terms of like why would you take a solid component change it to view per se um we we want it to go the other way but um it kind of goes to show what
[03:40:41]  i was talking about in terms of um language being uh kind of like a commonality i'm and as i said there are those slight differences so you know i was you
[03:40:51]  know this isn't a perfect tool but it's it's cool to show you show like what you can do if you take that um concept and kind of extend it um so
[03:41:01]  to speak see like this example here you can actually see the show component is like this is solid four um yeah this is basically solid um okay i've seen i gave people
[03:41:18]  enough time to ask questions and we're getting almost three hours and 40 minutes i think this was a good stream i hope people get more value when they re-watch it
[03:41:28]  again because there's a this one was dense but uh thanks everyone for joining me today um i'm gonna call it a night i think so uh yeah good night everyone and
[03:41:40]  uh see you next week yes you made it to the end thanks dylan