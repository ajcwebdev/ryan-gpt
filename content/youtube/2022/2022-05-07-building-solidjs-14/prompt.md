---
title: "2UPX0HZxXEQ"
slug: "2UPX0HZxXEQ"
duration: "3:12:34"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/2UPX0HZxXEQ.m4a"
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
[00:00:05] Hello everyone. Welcome to my stream tonight. I'm glad you can join me. I'm going to be talking about some new stuff going on with Solid.
[00:00:15] Seems like chat's already been going on before I even got here.
[00:00:18] I'm just going to catch up a minute. Wow, there's a bunch of people here already.
[00:00:24] Ryan likes anime because it's one of the...
[00:00:27] of a kind of anime, so it's unique unraveling on time travel.
[00:00:31] Yeah. People talking about the thumbnail. Yeah. Big fan of Stearnsgate. Um,
[00:00:36] But honestly, I was just looking for cool programming images. And
[00:00:43] So, yeah, I don't know. I'm still looking for a codename for 1.4 release. So people have ideas. But yeah, I don't think it's a time travel one. I think we're going to be looking. We're going to be looking at a few things, mainly updates, resources, updates to stores and.
[00:01:06] I'm going to bucket it that way.
[00:01:11] If you're here, come say hi in the chat. Glad to have you.
[00:01:16] Right.
[00:01:17] Change up my drink tonight.
[00:01:20] All right.
[00:01:23] Thank you.
[00:01:25] Thank you.
[00:01:26] and
[00:01:27] Yeah, how are you doing?
[00:01:30] Thank you.
[00:01:31] Thank you.
[00:01:33] Hi, thanks. Thanks for saying hi.
[00:01:35] Thank you.
[00:01:37] All right.
[00:01:38] Yeah, I'll just give people a minute or two to join on.
[00:01:43] I'm actually pretty excited for this week in JavaScript, too, because there's some conversations, some React ones, and...
[00:01:53] Yeah, actually, you know what?  This week feels like vindication.  So yeah, we're going to have some fun with it.  Yeah.  Bye.
[00:02:00] Yeah.
[00:02:04] Steins Gate in full effect today.
[00:02:09] - Yeah.
[00:02:12] Yeah, thanks for joining.
[00:02:14] Thank you.
[00:02:15] Hey, Orin. Oh, yeah.
[00:02:20] Hmm. Okay. Well,
[00:02:24] Let's see here. Let me share my screen at least.
[00:02:29] Make sure it doesn't die like it did the other time.
[00:02:35] Thank you.
[00:02:36] Bye.
[00:02:37] All right, I think we're good. All right.
[00:02:39] Yeah, the dishwasher finished. Yeah, thank you. That's what that notification was. Yeah, just in time.
[00:02:46] Two, yeah.
[00:02:49] See my kitchen sort of blurred out in the background.  Yeah.
[00:02:52] Oh, I left the cupboard open. Give me one second. Otherwise, Michael Rawlings from Marco's wife will make a comment.
[00:03:00] I'll be right back.
[00:03:06] .
[00:03:08] Thank you.
[00:03:13] Oh.
[00:03:16] Thank you.
[00:03:17] Is Solid JSX and Solid template the same thing? Very, very close.
[00:03:25] As close as I could get it. It has most of the optimizations. It doesn't have the effect grouping optimization. And it's a little heavier on load up. The biggest thing with the template literals is that the code side is bigger because you have to bring in like an HTML parser. The approach we did to temporal literals isn't just like use Hyperscript like most people do. We actually do a mini compiler. So it actually compiles sort of very similar to the JSX, which is why solids template literals are
[00:03:55] one of the
[00:03:56] possibly most performant template literal solutions that's out there, period.
[00:04:02] Thank you.
[00:04:03] Hey, okay, good. Yeah, I think we got some people here now. That's great. So why don't we get started with this week in JavaScript?
[00:04:12] OK, so let's let's let's
[00:04:15] Let's get my screen up here now.
[00:04:18] Okay, well...
[00:04:21] I'm going to start off with this little demo here. I saw this and I thought it was so cool.
[00:04:27] We talked about this. I think we've even talked about it on the stream when the Marco guys are here. But
[00:04:32] It might be hard to see here without zooming in a bit, but essentially someone took Astro and have it rendering in a service worker.  But what's really cool about it is it's a partial thing.
[00:04:44] service workers. So like you go to one page here, it loads it from the service worker without going to the server.
[00:04:50] go to a different page, it goes to the server. And what they're doing here is they're toggling offline mode to show you that when you go to that page, it actually is gone. Other pages is fine when you're offline. The reason this is interesting is
[00:05:02] When I first saw this kind of stuff, I was just like, what gives? Who cares? A single page app is probably simpler if you're going to render everything in the client, single app view. But if we're moving to this world where we have this kind of more multi-page app, partial hydration kind of mentality,
[00:05:19] Putting the server in the service worker lets it keep a single...
[00:05:25] app mentality, like not single app, but rather like a single approach. You're not like going,  okay, now I'm in spa mode. I was in MPA mode, now I'm in spa mode. Like you get to keep the same  paradigm. So I think we're going to see more of this in the future. And you can see the layers,  right? It's like service worker,
[00:05:41] edge worker,
[00:05:43] something near the server. I think I wouldn't be surprised we get to a point in the future in which you go and click deploy to Cloudflare or Netlify or whatever and
[00:05:51] M4cell and you literally just spread it across the infrastructure. Like I have code that runs close to the database, I have code that runs on the edge close to the end user, and then I have, you know, code that, you know, maybe runs in the browser. And what's cool is if you use this paradigm, it is conceivable that you could have a single paradigm across it all. So I think, I think this is really cool. And
[00:06:15] It was kind of an inevitable progression, but this is the first I've actually had a chance to see this.  So I think that's awesome.
[00:06:22] Thank you.
[00:06:23] What do we got here?
[00:06:25] Thank you.
[00:06:26] Thank you.
[00:06:28] I have more people talking off the main thread for the win. Yeah, I would, I'd like to see more on this. Honestly, there are some discussions this week talking about that. And so far...
[00:06:39] It's been prohibitive from a framework perspective. Don't get me wrong. Things like Party Town do really cool things offloading the main thread. You're fine if something takes longer if it's not important. But...
[00:06:50] Integrating it into the framework itself is interesting. And I think, I think,
[00:06:56] We're going to experiment and see where that goes.  Thus far, just like WebAssembly, it's just not quite there yet.  But I feel like we're getting closer and closer.  I got a WebWorker framework was actually shared with me this week.  And then I kind of like, OK, I want to benchmark this.  It's been a few years.  I don't expect it to do amazing, but maybe we'll
[00:07:17] get close to it. This might be a topic for another stream. Okay, let's keep on going.
[00:07:23] What have we got here? Obviously SolidHack finished up.
[00:07:29] This was just the announcement for that.  I can kind of jump ahead to talk about that for a second, because, like, why not?
[00:07:36] But more warning.  Yeah, here we go.  It's over now.  Three great projects won.  Honestly, there were so many amazing projects.
[00:07:47] I couldn't be happier with the results. We started this and thinking like, okay, well, maybe some people will
[00:07:55] like try solid and, you know, have a reason finally to jump in and try it. And, you know, in the process, maybe we could get some useful libraries, you know, like, and it exceeded my hopes, especially with stuff like Hope UI, SUID, I think you pronounce it the material design port, we got solid table, which is react table port, and like, just so turbo query, which is like react query, like so many, you know,
[00:08:21] really useful
[00:08:23] um foundational libraries we have one for forums i think one for uh
[00:08:27] Yeah, like there's just so many libraries and cool showcase apps and
[00:08:33] One thing that I think we found is like...
[00:08:38] A lot of this wouldn't have maybe happened if Solid had React Compat.  It's kind of a funny way of looking at it.  But in hindsight, I think it's maybe kind of a blessing, right?
[00:08:47] Because like...
[00:08:50] Yes, now in order to make a library, someone has to go through the effort to port it. That's, that's, that sucks, perhaps. But if someone wants to port it and goes through the effort and now, now it's their library, it's their thing. So in the end,
[00:09:03] The hackathon wasn't really just about having more libraries in the ecosystem. It actually brought us new, really talented, amazing people who built these libraries and projects.  And I hope they stick around to see the outcome of what they built, because I think we're starting on our own foundations and it's amazing.
[00:09:26] it's happened way quicker than I expected.  The hackathon was amazing from that perspective.
[00:09:34] to be able to start on solid and be like, yeah, I feel like I want some material UI or I want to do something kind of like chakra or do like headless thing and just have those pieces available to you. It's like a game changer. And, um,
[00:09:47] I mean, it's kind of proving the point in the vision like that, you know, this is a framework that can do those things. Right. So
[00:09:55] Yeah, I'm pretty stoked about the hackathon all together.  OK, let's scroll back a bit because I kind of jumped  straight there.  Because there's a lot of spicy ones this week.
[00:10:07] Yeah. Am I there yet? Yeah, yeah.
[00:10:10] I want to talk about this one.
[00:10:12] They haven't shown it to us yet, but Next.js has teased their router.
[00:10:17] I've been sort of suggesting that this was going to happen on stream for
[00:10:22] months now, in fact.  I've been waiting for this.  Every time there's a router conversation,  I flag this week in JavaScript so that everyone  pays attention to it.
[00:10:33] This is very important.  As I said, this isn't just about nested routing.  Nested routing has been around forever.  For people who aren't clear on that,  Ember Router in 2012 brought nested routing
[00:10:45] to the client.
[00:10:47] React Router 1.
[00:10:48] in 2014, I think, had nested routing.
[00:10:53] My web component router you can check out from 2014 also had nested routing. At some point,
[00:10:59] patterns changed, we kind of got away from that in React land. I think it was React Router 4.
[00:11:05] But for certain types of frameworks like ours,
[00:11:09] Um,
[00:11:10] you know, ones that didn't use VDOM, you need to use nested routing, otherwise it's very wasteful. So it's like no surprise to me that we're kind of coming around back to nested routing. It's just a really good pattern for data parallelized fetching and stuff. And
[00:11:24] even though it's getting a lot of
[00:11:26] attention now because of Remix and Next. I just wanted to kind of point out that we've had it
[00:11:32] This isn't like a secret. We've had that forever. However,
[00:11:37] this is a big deal because it,
[00:11:41] The read between the lines here is they're looking for a nested routing solution that works with server components. That's why they think Next.js, you know, they've been fine with their patterns, what they do. They didn't need to make a nested router.
[00:11:53] The reason this is here is because
[00:11:55] Server components essentially work off like a full page reload and diff and that's kind of heavy sometimes when you don't need it.
[00:12:02] And I think, and I've been saying for a while, that in the future of this transitional app type thing, that
[00:12:09] Nested routing is going to be a key part to reduce the pieces, like the partialness of it.  If you are interested on this topic, though, to get more into it, watch the stream I had with the Marco core team and myself.  We spend a lot of time talking about the routing and what the future of the web is.  That's probably one of the best streams I have on kind of like future facing what it looks like.  But this is showing me that Next and React is well on its way.
[00:12:39] this way, Remix will probably begrudgingly harass me at first, but they'll adopt it too.  This is, we're starting to see the future of where things are happening from the React  ecosystem side.
[00:12:52] The rest of us got to keep on pushing forward because we don't want to be playing catch up here.
[00:13:01] Thank you.
[00:13:01] I did a stream you can find on my channel. I'm not going to pull it up right now. But with the Marco team where I talked a lot about the routing.
[00:13:14] And it actually came up on my screen with Misco Hevery.
[00:13:18] Thank you.
[00:13:21] I'm sorry for Nuxt, to be honest, auto imports, deploying the edge along the Nitro engine.  Yeah, Nuxt is something I don't know a ton about. I might actually cover it  on another stream because they've been really pushing innovation,
[00:13:35] I think more on the, like what I call it, like the deployment side, like make sure like the whole
[00:13:42] like the system is robust where I focus a lot on the rendering and like the core raw mechanics. So this is an area where it can inevitably gets you when I was talking earlier about splitting your stuff along with your infrastructure, I feel like Nuxt is going to be there before others, like understanding how that works, you know, and yeah, I
[00:13:59] I'm interested to see that, too.  One of the things is like right now,
[00:14:04] Almost all the frameworks have the same story. You have like
[00:14:08] beat under the hood and these deploy adapters and literally
[00:14:14] Everyone is...
[00:14:16] They all work on the cloud. They all work on the edge. They all use request response. In a sense, you can look at Remix, FeltKit, Solid Start, Astro,
[00:14:28] And Marco actually is in that category now too.
[00:14:31] - Yep.
[00:14:32] There's probably more. I'm gathering that Nuxt is on that train. And they're all kind of the same from that perspective, like that capability thing. What's interesting to me is where, you know, some libraries like perhaps Nuxt are building more on top of that. That's not really an area that I'm focusing on so much, but the fact that work is being done, I have a lot of respect for and probably something I'm going to want to dig into sometimes in the future.
[00:14:55] Thank you.
[00:14:56] Thank you.
[00:14:57] Anyway, next one I got here is
[00:15:01] Mishko Hevry has been on a roll, you know. We've been talking a lot about
[00:15:05] resumability and hydration. We talked about that last stream. Not my most viewed stream,  I have to say. Whenever I talk about hydration, those streams don't seem to do as well.
[00:15:15] Funny enough, it's like...
[00:15:18] I don't know. Just for anyone who knows, my most viewed stream to date right now is the one that I did with Next.js.  And I think that's kind of funny because for me, that stream was just kind of like a vanilla stream.  You kind of just go in, try it, realize that Next and Remix are basically the same thing.  And they say, well, good stream, guys.  And probably the highlight of that stream was realizing that Next had anchor tags inside their links and people watching me refactor every single one, one at a time.
[00:15:46] If there was a silver lining out of it, it was that a week later, Next announced that they were getting rid of the necessary anchor tag.  That probably had nothing to do with us, but, you know.
[00:15:57] Good timing, but...
[00:16:00] Okay.
[00:16:01] I think the stuff, especially like the Marco stream, the quick stream and the hydration stream, the last two I did, especially on like the breaking down the web, have a lot of really, really good content for people who don't know much about these topics.  Michiko has been digging up.
[00:16:17] deep though, like finding a specific topic and really getting down to the core of it. Because,  I mean, you got to figure out where he's sitting right now. It feels a bit like a goldmine. Like  he's on to something with QUIC, you know, and we feel the same way with Marco6. And so he's,  this latest one, he's citing that it's not your fault your site's slow, it's the framework.  So you need a better framework.
[00:16:42] Um,
[00:16:44] That's a pretty bold message.
[00:16:47] You can go read the circle and see if you agree.
[00:16:51] I think, you know, it's a complicated issue.  And whether you believe or, you know,
[00:16:57] that you should drop what you're doing and pick up quick right now or not. The clear thing from the  article that I think you should take away is that bundling is slowly creeping into the domain of  the framework. And whether you do that from a meta framework standpoint,
[00:17:11] Like, you know, like the fact that like it's all in like, like, you know, like, like remix or something where you're like, here's your solution. Don't worry about it.
[00:17:19] or next, same idea. But I mean more specifically even stuff like, you know, Marco,
[00:17:26] they actually built their own bundler back in the day because of the need for  it. And, you know, quick and astro the way like partial hydration,
[00:17:35] and you know quick progressive resumability
[00:17:39] are bundler tricks.
[00:17:41] So the framework has to be able to have control over it. And I think that's really should be the takeaway. Basically, the framework's region of control has expanded.
[00:17:53] to kind of combat this, you know, site getting slow as complexity grows thing. So yeah, whether you,
[00:18:00] agree that it's the framework's fault or not. There was actually a really funny discussion a few weeks back that we covered, I guess it was a month back, where Evan You and Alex Russell were discussing this very topic and
[00:18:12] And Alex was like, it's the framework's fault.  And Evan was like, the frameworks don't get to fix this.
[00:18:20] They're both kind of right.  I think the frameworks can do better.
[00:18:26] But I think there is a bit more to it than that.  But anyway, it's a good article.  You can check it out.
[00:18:34] Okay.
[00:18:38] So let's talk about use event.
[00:18:41] Right.
[00:18:41] Thank you.
[00:18:43] All right.
[00:18:44] Okay.
[00:18:46] Thank you.
[00:18:48] If you're involved in the solid community, you know this one was a heyday for us. It's always going to be a heyday for us when this happens.
[00:18:55] I don't want to...
[00:18:56] I didn't want to be like too much on it because...
[00:19:00] Like, let's face it here.
[00:19:03] React has a different model, and we'll talk more about that in a minute.  But it is a model that works, that is consistent.
[00:19:09] they've had to kind of jump through hoops a bit to kind of get it to where they want but for them
[00:19:15] It is...
[00:19:16] a sound approach, you know, based on academic functional programming patterns that they've kind of
[00:19:24] adapted or adopted into their world.
[00:19:28] So when I see use effect, or sorry, use event, I'm like, yeah, this solves a real pain point, you know.
[00:19:36] there was that whole set interval example that everyone likes to show with solid. Use event is like here is the
[00:19:44] the way to do it. Like here's the solution. Don't play around with this other stuff. We're giving you the solution. And it's a solution that makes sense. You can do it today. You can basically just use a ref in React and use callback in combo and pull this off.
[00:20:00] But they made a hook that just makes it easy. And I don't know if, does everyone understand what this hook does?
[00:20:07] Because...
[00:20:08] Essentially,
[00:20:10] I think it confused some people, but all it does is
[00:20:13] it reruns every time as if you didn't even have a hook there except
[00:20:18] it keeps a stable reference. And by that, I mean the thing that it returns
[00:20:22] doesn't change. So it doesn't trigger downstream changes. So you're kind of safe
[00:20:28] to get rid of the stale closure, to have it always update  on every render, and not worry about the stuff below it  rendering.
[00:20:37] So in a sense,
[00:20:40] there
[00:20:41] Thank you.
[00:20:41] Yeah, I mean, it's kind of like their untrack, if it helps you from a reactive standpoint. It's like their version of untrack. I always find it funny because React's versions are always like the opposite of ours. Like, it works like exactly opposite. How is something that always reruns untrack?
[00:21:00] You're probably asking, but that is actually...
[00:21:03] the way that you can look at these as analogous.
[00:21:10] Okay.
[00:21:11] Now, if...
[00:21:13] The reason it was interesting to me wasn't because of what it did.  It was because it's called use event.
[00:21:18] And
[00:21:20] That's a very specific language. Why do you call it use event?
[00:21:25] And the answer to that for me was, you're trying to tell the developer how to use it. You're not saying this is what it does.
[00:21:33] You're saying...
[00:21:35] Use it for events.
[00:21:37] or this indicates it's an event.
[00:21:41] a fairly general sense of the word.
[00:21:43] Not just event handlers like
[00:21:45] Like, you know, you register the DOM.
[00:21:48] But any kind of like thing where something would call you from the outside,  like a set interval or something and where you're going to kind of like
[00:21:55] enter into your reactive system, set some state.
[00:21:58] That's an event.
[00:21:59] And
[00:22:01] I saw that and I was like, compiler hook much?  Like, that is why they're doing this.  This is a language thing.  They're gearing up for compilation.  Like, we saw React for Git.  I was kind of skeptical.  I'm like, is this for real?  This is telling me 100% it's for real.  They are serious about React for Git.  Because when you start adding these kind of hooks, you start building up.  This isn't just a mechanical hook, like use effect.  This is like use event.  This is an event.
[00:22:29] Thank you.
[00:22:31] Bye.
[00:22:33] Thank you.
[00:22:34] So, like, yeah, this is very much like an intentional language thing. And then, like, four hours later, our compiler guy, Huxpro, who's been working on the React, forgets, saying, goes, this use event has a deeper meaning to React than yet another nice use callback. Otherwise, it wouldn't be worth to introduce a new first class concept. It's a step towards our new automated world.
[00:22:58] So thank you.
[00:23:00] Thank you for confirming that this is all about the compilation. I've been following Huxpro here recently and been really getting into the conversation like what's reactivity and stuff. I think they're really...
[00:23:15] kind of opening up their mind to kind of look at what that whole problem space is.  See, I have a theory here, and I don't know if it's going to hold up, and we'll have to see.  But when you start getting into heavy memoized land, which is basically what this React Forget is,  and kind of actually how Svelte works, Svelte is still kind of top down, but it's heavily memoized.
[00:23:40] So there's a ton of similarities in Svelte and React Forget.
[00:23:46] Okay.
[00:23:48] Even though it's this kind of still top-down run thing,  things don't always run.  And once you get into a model where things don't always run--  and you can say, well, hooks things don't always run.  But the thing is, once you kind of bury that,  and it's not the hooks, you're actually naturally memorizing,  the end user no longer has the indication of why or when  things no longer run.  The easiest explanation for that is it's declarative.
[00:24:12] That it's reactive, in fact.
[00:24:14] It doesn't matter that it isn't actually using a reactive system like Vue or Solid.
[00:24:20] like Marco six to degrees along this lines,  it's that once you no longer are looking at a pure top down or at least  augmented reality,
[00:24:30] top-down kind of like you know with
[00:24:32] data points to hint it, mechanism, you no longer can make sense of it in that way. And it's easier to view it like code that executes
[00:24:43] when things change.
[00:24:44] You invert it, kind of like the way reactivity works.
[00:24:49] Dan explained
[00:24:51] somewhere in here, I'm probably going to find it again, but he was actually explaining effects to someone in here, the way I explain effects in solid, which is not how they look and react. Someone pointed out to me and they're like, they're like,
[00:25:05] This isn't true. And I'm like, no, I mean, technically, React doesn't work that way. But he's explaining it to them talking about dependencies of effects, you know, the same way that we talk about in reactivity. So
[00:25:17] I've been saying for a while now that...
[00:25:19] Reactivity is a language that it transcends implementation.
[00:25:25] The further React approaches memoization, the closer they come to converging with
[00:25:33] of reactive type mentality.
[00:25:35] The thing is,
[00:25:39] it's not necessarily reactive in the classic sense.
[00:25:43] So they can kind of keep it like that.  It's their mentality that they've always had.  But I think it's going to, it's a bit of a stretch.  We'll see.  But that's my hunch here.  And honestly,
[00:25:55] That leads right to my next post here.
[00:25:59] And I think we should get into that, but I'm going to check out what's going on with chat for just a second.
[00:26:04] Why is it called useEffect the same thing they tried to ask you not to do is set state inside useEffect?
[00:26:09] Sorry, it's called useEvent. I said useEffect by accident here.
[00:26:16] Thank you.
[00:26:18] Thank you.
[00:26:21] I saw Solid Docs and really press Solid provide store rating photo. It's a definitely solid,  one huge pain point of React. So how do you learn? Yeah, I mean, honestly, the reason Solid has a  store and has this stuff is I had like a store before I had a renderer, if that makes sense.  Like when I started Solid, I wasn't like figuring out rendering techniques really well. I was  actually working with proxies. I was like, how can I do reactivity with plain objects? You know,  I knew I'd get into rendering and I did some like string template kind of stuff, kind of really
[00:26:51] actually. But I really focused on having these kind of primitives right from the start, you know,  back in, you know, 2000, I guess early 2016. So yeah, I mean, for me, this is just a logical thing.  I actually pulled stores further out to kind of help people differentiate them and realize that  there's a point to get to. But we're going to cover stores a bit tonight more. And I think that  it'll make more sense.
[00:27:18] Okay.
[00:27:19] Yeah, yeah. Nick's talking about this. Yeah, yeah. Do you agree, Nick, that essentially he described effects in React the same way we would describe effects in Solid? It's not like actually the way React works. I think they're testing this communication mechanism because people are like...
[00:27:36] It makes sense.  Reactivity makes sense.
[00:27:41] Hooks are more complicated. They still make sense. I actually have appreciation for hooks when you start thinking about it, like, in terms of the patterns they have. But hooks obscured behind a memoizing compiler
[00:27:52] I am concerned they stop making sense unless you explain them like reactivity.  We actually hit this one brainstorming with Marco because we had a bit of a  split, you know, so I love being on a team of three guys in that,  in that sense. And cause Dylan was like initially really on that, like, well,  let's keep a top down mentality. You know, I like the V dom.  I like the way that executes. And I'm just like,
[00:28:11] What are you talking about?  Like fine grade stuff all the way, like just do this.  Like we hit a problem like with a set timeout  and we're like, should the inside of the set time out  track or not track?  And I was like, not track, it's obvious.
[00:28:23] And Dylan's like, well, no, it should track.  It's obvious.
[00:28:26] And poor Michael's in the middle going,
[00:28:28] Well, I
[00:28:31] I think for this one, it should track.
[00:28:35] But, you know, and we kept on putting him in the middle.  And my point is, eventually...
[00:28:42] Realizing where we came to, Dylan actually kind of revised and came around a little bit because he was like, he was like,
[00:28:47] He was like, don't get me wrong, Dylan's...
[00:28:52] - Yeah.
[00:28:52] was ultimately the one who convinced me on two-way binding for Marco.  But the thing is, we realized when we ran it,  no matter how much we tried to keep the top-down VDOM model,  once we added the level of optimization and memorization,  it no longer made sense as explanation.  We couldn't explain it to someone that it worked that way.
[00:29:10] anymore.  And I suspect the React team will find the same.  So they're going to start explaining stuff.  And the explanations might start sounding a bit more like solid,  even if they don't actually execute that way.
[00:29:20] So I think that's interesting.
[00:29:27] Thank you.
[00:29:29] Yeah, yeah, yeah, yeah, yeah, exactly. It's a good way to explain things.
[00:29:36] - That's all I'm gonna say.
[00:29:38] I mean, it makes my life easier.  It makes our life easier because I've been trying to explain people's this stuff ways.  And people come at me and they're like,
[00:29:45] Someone described Solid as riding your bicycle with the handlebars turned backwards.
[00:29:51] And I'm like, how do you know you haven't been riding with the handlebars turned backwards this whole time?  And I just fixed it for you.
[00:29:58] So,
[00:30:00] .
[00:30:01] If React and the messaging continues to turn this way, it's just going to make it look like
[00:30:07] like that. I think this is a tricky place to be in. But it's, you know, I think
[00:30:13] On the other hand, the React team
[00:30:16] knows where they're going,
[00:30:18] And I think they will figure out how to ease everyone into it.  And that's what this is about. At some point in this thread, someone someone's like, hey, Dan,
[00:30:28] You know, thanks for this whole thing. Seems like use event is expanding on the react to the language thing, you know, blah, blah, blah. This is great. After playing with libraries like Solid, however, it's nice not to have to worry about any of this stuff. I mean, I'm just paraphrasing, but he's basically saying, I've never scaled up Solid, so I don't, you know, understand what the tradeoffs are, but basically it seems really super great. That's essentially what they're doing.
[00:30:46] You know, I'm going to look more at this. That's essentially what he says.
[00:30:50] And Dan goes,
[00:30:52] I agree with you, it would be nice not to worry about it.  And our hope is the compiler work will solve this.  I think sometimes it comes off like we're locked into our current approach, though.  We generally like our program model.  If we thought Solve was better, we'd move to that.
[00:31:04] Okay.
[00:31:05] I like this quote very,
[00:31:08] for so many reasons.
[00:31:11] Because...
[00:31:15] Not I mean, some people saw this and they're like, is he kind of giving you guys like a backhanded thing, you know, and I'm like, no, no, no.
[00:31:23] That's not what he's saying here. He's saying they believe in what
[00:31:29] they're doing. And if they believe differently, they would have built something different.
[00:31:34] Like, they're not like second guessing themselves. This has been a long run trajectory. And
[00:31:40] and they know their path. And this is true.
[00:31:43] even when they introduced React hooks,
[00:31:45] They gave zero...
[00:31:47] You can still find the document. Let's do this right now. I'll show you what I'm talking about.
[00:31:56] What was it? Release.
[00:32:00] Let's see if we can find it.
[00:32:04] or maybe React hooks prior
[00:32:08] Thank you.
[00:32:09] - All right.
[00:32:11] Thank you.
[00:32:12] Is there a prior...
[00:32:17] Hook synthesize ideas of several different sources. Our old experience in React feature repository
[00:32:24] React community experience with render props, including Rand Florence's, Dominic Ganaway's adopt keyword proposal,
[00:32:31] state variable of the state cells in DisplayScript,  reducer components of reason,
[00:32:37] So Christian's in Rx.
[00:32:39] And ultra break effects in multi-core OCaml.
[00:32:45] Do you know something that's not on this list?
[00:32:49] Fine-grained reactivity.
[00:32:52] And I've been saying this for a while now.  Fine-grained reactivity looks a hell of a lot like hooks.
[00:32:59] is what we use in Solid and it was in Knockout and you and older Svelte and like
[00:33:06] So that did not influence Hooks.
[00:33:10] while looking identical to it.
[00:33:13] And
[00:33:14] The reason is
[00:33:17] The React team very much believes in what they're doing.  They are not going to...  MobX is in React...
[00:33:25] and had
[00:33:26] similar things that look like hooks. And again, not even a nod here.
[00:33:31] Thank you.
[00:33:32] they're not going to
[00:33:35] go this way, they've never liked this way, they still don't like this way. You know, there is no risk
[00:33:43] here of React absorbing solid space in the ecosystem.
[00:33:49] They legitimately dislike...
[00:33:53] the approach and think that it's limited in some way.
[00:33:57] And
[00:33:58] Maybe that's fair, but that's, I mean,
[00:34:02] I am kind of almost the opposite. I am so confident in this approach.
[00:34:09] You know, it puts us a bit at odds, but this draws a line here for people because people keep on seeing solid and they go, oh, oh, React is going to do that.  You know, React is never going to do it.  Like, yeah.
[00:34:21] This is so, I've been waiting for someone on the React team to actually just say that. He says, if we thought it was better, we'd just move to that. But that's not what he's saying. What he's saying, he's not saying like, oh, if at a point solid, you know, shows that it's models, you know, really good, we're going to move to it. No, what he's saying is we're not doing it.
[00:34:41] And, you know, that's good. I like that React is different and they are going down
[00:34:47] that approach because they're showing they're taking that paradigm and taking it as far as they  can as well as they can and
[00:34:54] All we can do
[00:34:56] is show respect to that, is take the other paradigm  and take it as far as it can.  I got into this.
[00:35:02] Because I kind of
[00:35:04] felt that fine-grained reactivity was criminally underrepresented.  And I could blame React because React sort of killed it last time.  Like React came out killing
[00:35:12] Library is like solid. That's what it came out of. Like the older versions of the predecessors.  React basically was like, no, that's not how you do it. This is how you do it.
[00:35:20] Yet when Hooks came out, I was just like,
[00:35:22] Whoa, you guys are treading pretty close there.
[00:35:29] And
[00:35:31] you know, that's fine. Maybe they learned something. So, you know, I learned something from React. And that's where Solid came out of. And
[00:35:39] Regardless of how I feel about Dan's statement and how the React core teams feel about reactivity,
[00:35:47] They know where they're going and they know what they're doing.
[00:35:49] So don't bug reactor Dan about solid.
[00:35:55] Like they're not going to change.
[00:35:56] Like ever, ever.
[00:35:59] If you want to show Dan, as I said,
[00:36:02] how good this approach is, just
[00:36:05] Let's build some stuff. That's my takeaway here.
[00:36:12] Like,
[00:36:14] Like, it's-- I think that that's really the thing here, right?  Because this use event thing obviously
[00:36:29] let me get back here, kind of did trigger more conversations, right? Like, I didn't show this  yet. But like, if I go back to this thread, you know, where they're talking, you know, some people are like,
[00:36:42] you know, kind of sarcastically like,
[00:36:45] Oh, seems like so much discussion thought time, resources, company, employees money is important to an idea that doesn't even need to exist in libraries like Solid.
[00:36:52] you know, patch to patches.
[00:36:54] And I was like, well,
[00:36:57] Someone's going to make a meme out of this.
[00:36:59] Like use event is just
[00:37:01] It's like use callback and use ref.  And sure enough, 500 likes, this is better than any post  I've done myself.
[00:37:12] This is how you went on Twitter.
[00:37:15] All right.
[00:37:16] Right. I mean, some people don't get the joke. I think sometimes
[00:37:22] Solid Group makes jokes that are kind of a bit too...
[00:37:25] Cerebral, like someone was like down here, they're like Svelte version, you know, like
[00:37:31] Thank you.
[00:37:32] The joke is that this is nothing. It's just a function that returns itself. It's an identity function.
[00:37:39] As I mentioned, some people went a little crazy. I'm surprised I didn't get a PR for this one.
[00:37:46] Thank you.
[00:37:47] But...
[00:37:49] It really has no place in the reactive models, and it is invented for this purpose. But I think this
[00:37:55] This actually did spawn an interesting conversation.  And I'm going to share that with you all here a bit because I,
[00:38:02] Thank you.
[00:38:03] It pulled out our man, Sebastian Marc Bage, who I have an incredible amount of respect for. He's the guy who's been building that router over and next we talked about. He's been the visionary behind react for years now. And he's been the visionary behind react for years now.
[00:38:17] He basically was...
[00:38:20] curious, I guess, how to remake this using something like Solid, right?
[00:38:26] He used one of the examples.
[00:38:30] Thank you.
[00:38:31] And this is--
[00:38:34] And what he was like, he was trying to show this kind of let create use callback, create keys, crypto stuff and show like where you have a case where you have, you know,
[00:38:44] a function that depends
[00:38:46] on one thing. And then when you call it,
[00:38:49] somewhere else needs this.  So it has two dependencies, one that's kind of bundled  with the function and one that's where you locally use it,  like in the effect that use it.  And he was trying to say, this is why we need this pattern.  And he's like, I tried to do it in solid.  I think it's something like this.
[00:39:07] I think he'd write like signal and he, he, he does this whole thing.
[00:39:12] And he's wondering if there's a more idiomatic way.
[00:39:14] And I love this thing because I think this is so illustrative here.  If you see what he's done here, he's creating a signal,  and then he has a render effect that listens to the public key,  and then it sets a function...
[00:39:25] This isn't quite the right syntax for Solid.  He doesn't know if Solid has function centers,  but he sets a function.
[00:39:30] So that create keys as a function and then somewhere else you'd call it like a function that calls function essentially. Like you'd have like a double function call. You'd like have a signal with a function in it.
[00:39:40] And he went on and he's like, I think in Svelte, it's like this.
[00:39:45] Okay.
[00:39:47] which is a little bit better, right?  He has it.  And then in here, it tracks and it sets it to keys and this.  And I looked at this and I'm like, okay, well,  we can do better than your example, right?  So like, if this is the equivalent Svelte,  and if you know Svelte, like this is a derivation.  It's you assigning a function to key  and it's under $0.  I was like, the equivalent to that Svelte code in solid is this.  So we've already shrunk it down a bit.  It's just literally create keys, create memo,  public key, return the function, you know?
[00:40:16] But then I was like, you know what, Seb?
[00:40:19] In Soled, you wouldn't do any of this.
[00:40:22] In solid, you literally just write a function,
[00:40:27] that calls a signal.
[00:40:30] And then where you use it, you just call your argument.
[00:40:32] And
[00:40:34] it automatically can track both dependencies.  You don't need to...
[00:40:38] You don't need to ever pretty much memoize a function.  Like, why are you memoizing a function?  You just have two data dependencies.
[00:40:49] have one wrap close over one data dependency, have the other close over the other dependency where you call it. Like you still, in all his examples, he was only showing this part. He wasn't showing this part, you always need this part in his example, you always need the effect that you call the great keys on. So essentially,
[00:41:04] Our answer is
[00:41:06] to his whole thing where he was showing the use callback and all that stuff is literally write a function.
[00:41:12] Yeah.
[00:41:13] Thank you.
[00:41:14] So I think there's still...
[00:41:22] parts that are missing in our model from their perspective. And I hope these kind of conversations continue because, like, as I said,
[00:41:29] Solid version, create keys.
[00:41:32] pass it's just literally a callback function. You don't need any create callback, don't need  any dependencies, you just literally have function calls a thing compared to
[00:41:40] the React version, use callback. It's the same thing.
[00:41:48] Right. It should have been obvious at the beginning. You just
[00:41:52] erase the use callback,
[00:41:55] And that's how solid works.
[00:41:58] Yeah, I do have a nice shirt. Check this one out. You guys check that out?
[00:42:02] Yeah.
[00:42:04] Thank you.
[00:42:06] Yeah.
[00:42:07] Right. So like when we joke about, um,
[00:42:13] Thank you.
[00:42:14] Oh, you want to see what Seb said at the end?
[00:42:17] It's a fair response.
[00:42:19] He was like, yeah, that's pretty neat.
[00:42:22] That only works if you call it inside something that attracts, which
[00:42:24] Again,
[00:42:25] is what you're doing here because you're calling it in fact and not async callback sure. You almost  want to tag it especially in that case which seems like a reasonable answer from where he's sitting.
[00:42:36] until you realize that like literally everything in solid works this way. Do you know what I mean? Like that is
[00:42:41] the model.
[00:42:43] Thank you.
[00:42:44] I kind of joke about it because people talk about like the hook rules and stuff. And I'm like, Solids like Fight Club, like we only have one rule.  It's not the same rule as Fight Club, admittedly, but we have like literally this one rule that will smack you in the face over and over again until you listen to it.  But it's not like a bunch of different rules. You just have to respect that.
[00:43:09] retaining reactivity. You have to access values where they're tracked. That's the rule.
[00:43:14] don't destructure, don't put, like it's literally just this one rule. And maybe that's, and Vue has that rule too, and Movax, and it just comes with this kind of reactivity. Maybe that sucks, maybe the user experience is too complex. But if you
[00:43:27] If you're in this world, this kind of thing is a good point, but you're already building this way.  This is not even like a thought.  It's just literally the model.
[00:43:37] And it's kind of funny because when I started Huxpro about reactivity, he did this poll, and he was like, is reactivity the source of the reaction?
[00:43:46] And I'm like, no, it has to be both.  Like, it's a system.
[00:43:50] Reactivity is a declarative system living in an imperative world.
[00:43:55] So,
[00:43:56] It's kind of like to itself,
[00:43:59] It's the universe, but we live--  it's like pretending you're on a 2D plane,  and all you can see is in 2D.
[00:44:06] And that is the world.
[00:44:08] And that's our declarative reactive system.  It has no sense of time.  Everything is synchronized.  It only has its dimensions, which is like--
[00:44:17] State always reflects what it is.
[00:44:19] Unfortunately,
[00:44:21] We live in a world, a 3D world, where we can see that the reactive system is just like a piece of paper on our desk.
[00:44:27] But, yeah,
[00:44:28] Essentially,
[00:44:30] in its zone.
[00:44:32] It has complete domain.
[00:44:34] It's only when you look at it from the outside of influence that you start talking about like
[00:44:40] these imperative things. It is kind of pure in itself. And
[00:44:44] I guess that's just like my kind of view on it, but I just like,
[00:44:49] you you enter this paradigm that's how it works this kind of comment  makes sense from the outside but if you use solid for a bit you're just like
[00:44:57] Yeah, I mean, of course, like it's like it's akin to like
[00:45:02] Of course hooks go in a component.
[00:45:05] I mean, in our case, they don't.  But you know what I mean?  Does anyone question React why hooks are in components?
[00:45:14] So yeah, I mean,
[00:45:18] Yeah, I mean, this is an easy thing to make when you're used to the other patterns.
[00:45:26] But...
[00:45:27] It is just the one thing, right? Like so.
[00:45:31] Yeah, I mean, that's the conversation here.  I thought this was really...
[00:45:36] really great though, because this, you can see this development of this conversation, because you can see,
[00:45:42] Starting here,
[00:45:45] thinking reactivity like this when really most of the time
[00:45:50] It isn't about creating all these extra signals and synchronization.  The beauty of reactivity is once you're in that world,
[00:45:58] you actually just delete stuff.
[00:46:00] You just go bye-bye use callback.  You actually subtract.  It's not more, it's less.
[00:46:07] So, anyway.
[00:46:12] Thank you.
[00:46:13] Okay. So yeah, let's, let's keep on going on.  Unless anyone has any questions about this.  I thought this was a great conversation though. This, this whole, uh,
[00:46:22] react reactivity use event thing really kind of highlighted it. And the way they changed their language to, you know, talk about effects and stuff, I think is just grand. I think I think
[00:46:33] This is one of those situations where...
[00:46:35] we're just sitting in a really nice spot. Because the further React explores this way, the better Soliz looks. And the, you know,
[00:46:45] who
[00:46:46] they're kind of validating our approach. Well,
[00:46:50] saying it's completely different. I think this is just great, honestly.
[00:46:56] Thank you.
[00:46:58] Thank you.
[00:47:00] Thank you.
[00:47:01] Thank you.
[00:47:04] Thank you.
[00:47:06] Yeah, I mean, where did that expectation come from though, right?
[00:47:11] It creates something, right?
[00:47:14] The funny thing is like before Hooks,
[00:47:17] I've talked about this before.
[00:47:20] I was sitting on different APIs, right?  I mean, I can pull up a playground right now to show you what I was talking about.  But before Hooks, I was sitting there and I was like, OK, I got my signal.  And the most obvious one, I was like, knockout.  I'd be like, signal, I'd be like, let's just go.
[00:47:37] Like this, right?
[00:47:40] And then be like,
[00:47:44] Set.
[00:47:49] And read, right?  Let's just do this-- play this game for a second.
[00:47:54] Thank you.
[00:47:55] And...
[00:47:58] So, read is going to be like this.  And then set is going to be like this.  This is the most obvious starting point.
[00:48:09] I didn't like this. I use Knockout for ages. And the fact that it's the same function and like someone accidentally does, you know, something like, oh, let's set timeout.
[00:48:22] signal because I'm like really think or how about promise dot resolve
[00:48:31] you're like something stupid like this I mean obviously like this is obvious don't do this but  this this bugged me and I didn't like how it kind of lended to this like
[00:48:42] anytime you pass this around, someone could read and write to it, right?
[00:48:47] Thank you.
[00:48:47] Thank you.
[00:48:49] Thank you.
[00:48:51] Thank you.
[00:48:54] And then I was like, okay, let's look at what MobX does. And MobX was like, okay, this is easy. We go signal.get.
[00:49:02] And signal.set.
[00:49:05] And I was like, okay, this isn't bad.
[00:49:09] And I was like, well, it's kind of bulky.  So maybe what we could do here instead is be like, what if we just did get set and there.  I kind of don't like this though very much.  So instead, I'm going to -- I was like, I mean, you could do some cool stuff here.  You can go alias like in this would be called count and then --
[00:49:37] I mean, this isn't too bad, right?
[00:49:40] This is too much. I'm never going to do that. I might as well just call it name the variable
[00:49:45] count and then go count.getterSet. It just wasn't worth it. And then I was like, okay, I'm really clever here. This is where I got to before Hopeless came out. I was like, okay, I got it. I got it. We're going to keep our create signal, right? And instead what I'm going to do is
[00:49:58] read,
[00:50:00] like the first one, like here.
[00:50:03] and write
[00:50:05] like the second one.
[00:50:07] Do you follow me? Let me show the third one. I'm going to go signal, read like this,
[00:50:14] right like this.  This is where I got to right towards the end.  And I was like, see, a function is an object.  So we can hang stuff off of it.  So we can make the read first class,  and then we can kind of hide a setter on it with a dot set.
[00:50:31] And my stored proxy design at the time, it was kind of similar.  You would read it normally, and then you'd have like a special set property that you  could call on it.
[00:50:41] And
[00:50:43] I was like almost pulling the trigger, but I'm like, man, this is too, this is too clever.
[00:50:49] Like I know that objects are functions or objects and people who use JavaScript do, but trying to teach a beginner the syntax like
[00:50:57] like this.
[00:50:59] I think this is really good. It's probably one of the better options. But trying to teach a beginner the syntax, I was like,
[00:51:06] How do I explain to them they can do this?
[00:51:09] Why am I teaching them
[00:51:11] like what some people might consider quirks of JavaScript.  So I'm sitting here playing with this for like two years,  I kid you not, and just being like,
[00:51:20] You know, like just being like, you know, like not getting anywhere.  And then I see the React hook demo and I'm just like,
[00:51:26] Oh my God, the answer is so simple. It's so simple. You know, why, why go through all this pain?  You can just name it whatever you want and just go set count, like done. Like,
[00:51:41] Okay.
[00:51:43] That's what I got from React Hooks.
[00:51:45] This.
[00:51:46] We were already using these primitives and doing all this stuff. Literally this. I was just like,
[00:51:51] This is such... Why didn't I think of this?  I'm just like...
[00:51:56] Thank you.
[00:51:57] Yeah.  Like, so I think there's a bias that comes in from using React.  But like--
[00:52:04] To me at least, this is just like...
[00:52:07] it
[00:52:08] It's the obvious solution. If you want that read/write segregation. Because even with this, I didn't like it because you still always pass the setter around. And I really like unidirectional flow. I used old Knockout and old reactive libraries. It was like the butterfly effect. You'd like have some data down somewhere and someone would write to it. Like mutable proxies are the worst. Like, because someone can be like, someone can be like, okay, cool. I got a store here.
[00:52:32] And then I'm going to pass it in through my div and be like, OK, here's some prop. I'll call it like some user. OK. And then I'm going to go.
[00:52:41] store.user. And now in my-- let's call this one user.  In my user component.  And then somewhere else further down the line,  I'm going to be like, OK, well, actually, I want an address.  And in address, I'm going to actually pass in--  let's call it address.  But it doesn't matter.  But it's going to be props.user.user.
[00:53:07] dot address.
[00:53:11] And then in this component somewhere, someone's like, well, OK, I'm going to store the address locally somewhere because I need to do some work on it. So I'm going to do that.
[00:53:23] And then...
[00:53:24] Um...
[00:53:27] And then what
[00:53:29] you know, are actually maybe temp address. And then they're like, okay, well, temp, or
[00:53:38] Address.
[00:53:39] street.
[00:53:42] Let's change street to Mulberry.
[00:53:48] Thank you.
[00:53:49] Do you see what they've done here?
[00:53:56] Thank you.
[00:53:58] They actually updated our store.
[00:54:06] And like, this is bad.  Like it doesn't matter if your framework  has two-way binding checks.  Like if you have mutable things,  there is no like two-way binding.
[00:54:16] there's no two-way bindings to checks. Like, further down here, it isn't user.address.  Sorry, we passed it here. It's actually crops.address.
[00:54:28] Thank you.
[00:54:31] you know,
[00:54:32] Maybe they destructured it.
[00:54:37] Yeah, whatever. You get my point. Like...
[00:54:40] yeah with knockout and the functions it was like he was like terribly bad like you just you're  playing ping pong like someone changes something here and then like up five components three  components down like everything's firing i i i was not playing this game um that's fine people in  view seem to like this but i like svelte guards against this but this literally you can override  two-way binding because you can always get past any read-only level to get to the next level unless
[00:55:10] read only everything on purpose.  Like you have to like,
[00:55:13] or make memos around them, like wrap them in--  like you basically have to use other mechanisms to wrap things  that are expensive and more computations
[00:55:23] You know, like if we wrap this in a create memo or computed, then you can't edit it.
[00:55:29] you know, in the same way. But like,
[00:55:32] essentially,
[00:55:33] like,
[00:55:36] This just solves the whole thing.
[00:55:41] Like, I just really didn't want to do this.
[00:55:45] Right, and which is the same reason why we didn't talk about it. But there was a third option,  our signals could have done something like const signal
[00:55:54] equals create signal zero and we could have done something like signal dot value
[00:56:03] signal value equals 10 or something like this.
[00:56:06] This is just...
[00:56:08] I mean, beyond the obvious problem, you can't destruct your value.  Sure.  I mean, we have that problem anyway.  But you're opting straight.
[00:56:17] into--
[00:56:20] I don't know. It's just... It's a lot of...  I mean, you can make the word value shorter.  It's just, like... At the beginning,  we were looking for stuff that was ergonomic.  Like, this is always  going to be plus six characters or whatever.  Like, I don't know. And the mutation  problem stuff, I just...
[00:56:35] React hooks are a brilliant API. I've always loved their API. So that's
[00:56:42] That, that, that, that, that's enough of me probably spilling about that.  Let me see if I can catch up with chat.  You guys have been going a mile a minute.
[00:56:49] Yeah, exactly. Or whatever. Yeah.
[00:56:55] Thank you.
[00:56:56] Thank you.
[00:56:57] Thank you.
[00:56:58] Yeah, I mean, it's fine. If you want to name it, git count, then go for it. I just,
[00:57:04] What's really cool is everything is a function on the accessor side in Solid. We did keep that bit of knockout-ness, so never got into the whole git thing because
[00:57:16] like every function that wasn't a setter would start be calling get. What's cool is
[00:57:22] I mean, I guess you could wrap setters into it.  I feel like the set being really explicit is really a good thing,  especially the naming.  But, like, you know, count beginning...
[00:57:35] Double count, you know, because, like, what's double count, right? Double count, for example, is just count. Should this be get double count? Like, should we just keep on, like, I mean, it's possible, you know, and if that works for you, I think people should try it and see if that works for you. But nothing, the beautiful thing of the tuples is you can name stuff however the hell you want. So, like, as I said, just really brilliant API design.
[00:58:06] Thank you.
[00:58:06] So, yeah, essentially, we tangented pretty hard here, but I don't even remember how we got here, honestly. It was just a comment in the chat.
[00:58:21] it
[00:58:22] I think React has taught us to be a certain way.
[00:58:25] I'm challenging that.
[00:58:28] that's what we're doing here. We're challenging that. So
[00:58:34] Right. That's essentially it. It might be good in training materials, yeah. But yeah, that's what we're playing here. Okay.
[00:58:42] Let's keep on going. This week in JavaScript is the longest week in JavaScript, but it's a good one because I said this is this is stuff that needs to be said.  And to have this kind of acknowledgement, this is like the first time I think Dan's ever publicly used the word solid.
[00:58:54] on Twitter.
[00:58:56] That was like a other hidden thing.  I mean, obviously, I've talked to Dan before.
[00:59:02] We know each other.  I had a nice chat with him a month and a half or so ago.  But in public, this is a pretty big acknowledgement for my sense.  Even if it sounds like he's saying we...
[00:59:16] If we thought this was good, we'd do it. Like it sounds a bit like that. That's not what's going on here. As I said, it's just it's not they're setting their ways and they're doing their thing, which is great because it challenges us to think of how we can do good things, too, you know.
[00:59:31] If it wasn't for React, I probably never would have thought of doing something like time slicing concurrent rendering. I still don't know if that's something worth doing, but it's a lot of fun making those kind of demos.
[00:59:43] You know, so...
[00:59:45] you know,
[00:59:46] Oh.
[00:59:47] Like there's a lot for everyone to learn all around.
[00:59:52] So I think we're getting over that.  All right.
[01:00:00] Let's get into more React.
[01:00:02] I don't think anyone got my joke.
[01:00:05] See, I thought I was being funny here.  Ryan Florence gave a great talk about streaming in Remix.  And I made some joke about we're all on the same page.  And I was trying to joke about the...
[01:00:17] Thank you.
[01:00:18] like that in like Solid and Marco, we've been on this page the whole time, you know, and Remix was on this page and now we're on the same page. Yeah, okay. Not really, not really funny, I suppose. But, yeah.
[01:00:37] get into streaming. I honestly thought they were not going to. I had a bunch of conversations with Ryan Florence and
[01:00:46] Back in January, he went as far as saying, the more experiment with streaming, the initial dogma includes resource hints, the more it seems that it's only useful when the user has a fast connection, the server's slow, and better investment to serve fast.  Basically, he said that he didn't believe streaming was a thing.
[01:01:01] Four months later, that's his React thing.  And he's explaining to people how the benefits of streaming are.
[01:01:09] I'm glad we're on the same page because it's a lot harder. This is something you face. We talk a lot about performance. We look into these things on the stream.
[01:01:19] It's hard to kind of go out there and like talk about it. And then like, you know, guys are like, oh, it's not worth it. Partial hydration, same kind of thing. And then you're like, no, it is. We can show you. And it's like, person with 5,000 followers against person with like 100, like three people with 100,000 followers, you get squashed. It doesn't matter what you say.
[01:01:39] like the message that carries is whatever they say so now that we're on the same page and with  the same message that makes that makes me happy because now i don't have to fight like re-educating  everyone afterwards they're like but ryan said this it's like okay i'll try and debunk it in the  most politically nice way because there there is some big gaps here and i i am i you know i don't  want to discredit anyone but now we don't have to worry about it remix is on board with streaming
[01:02:09] Um,
[01:02:10] to be fair, Ryan says he's not completely on board. I still think it's better to use Redis and Skips for streaming. So there it is. There's some skepticism there. But I mean, the talk was really great. And I'm glad that's what people will hear. They won't hear him do this. It's only 16 likes, not like 500. But yeah, let's look at the talk.
[01:02:35] There we go, 736. This is what people will walk away with. This is the important part. So yes, streaming is great. And
[01:02:44] One thing that is buried here, and the reason I want to bring this up, is that
[01:02:49] There's a secondary benefit here, if you're paying attention. Streaming unblocks
[01:02:55] Server rendering, Remix has, like, maybe I should use a scale draw for a second here, but the way Remix has been working to date is pretend like you have,
[01:03:06] a nested route, right?  And I hope you guys know what that is now, right?  A nested route is like you have a page,
[01:03:15] And then there's maybe a section there.  And then there is...
[01:03:20] a nested route one here, which is I'm going to do here, different color, and then
[01:03:26] We'll put nested row two in here.  Different color again.
[01:03:31] One, two, three. And
[01:03:34] The thing is, the way Remix works is you get a request and essentially when you're serving that request, Remix goes, okay,
[01:03:45] What's the route?  So it figures out, say, all three levels and goes...
[01:03:48] I'm going to run
[01:03:50] So the first thing -- let's get some black text here so I can write.  The first thing is they go -- get the request and go run loaders A, B, C.
[01:04:03] Um,
[01:04:05] And they can run these in parallel, which is pretty sweet. Because they know the route information at the beginning.
[01:04:11] They basically go like Promethal...
[01:04:14] So it's more like,
[01:04:16] Thank you.
[01:04:17] Promise.
[01:04:19] Thank you.
[01:04:20] All.
[01:04:23] run these loaders, right?
[01:04:27] Thank you.
[01:04:29] Okay.
[01:04:30] And then after that, they're like, okay, render to string. That's how this works in
[01:04:40] But if you want to do streaming, you can't do this. This is blocking. You have to do all of this before you do this.
[01:04:49] So the way to get streaming to work
[01:04:51] is,
[01:04:52] a slightly different series of things.
[01:04:55] It starts the same. This is how it works in solid and how it works in Marco. You don't  come in solid. I guess Marco doesn't have a nested router. Run loaders A, B, C. While  those are running, you go, okay, render.
[01:05:16] Under A.
[01:05:19] And then we'll make it 2A, render
[01:05:25] B,
[01:05:28] And let's think a--
[01:05:31] 3, I don't know, 2B, render C. But it can't render everything because there's some suspense  boundaries and stuff here. And then maybe --
[01:05:41] You know, you're you're in here.
[01:05:45] And there's actually -- actually, yeah, now I regret my numbering.
[01:05:53] It should be...
[01:05:55] prea and fora.
[01:06:01] She's like...
[01:06:03] - Okay.
[01:06:04] What actually happens in here is that there's secretly other, let's say, 2B.
[01:06:12] which is like suspense.
[01:06:15] In not all cases, sometimes suspense will block the child from coming in.
[01:06:21] But we're just going to pretend in this case that it doesn't.
[01:06:26] It's kind of like this.
[01:06:30] And...
[01:06:31] And I guess I should add the fan to it.  OK, cool.  So what happens when you're working on kind of like solid  or like a streaming solution is you run the loaders.
[01:06:48] Then you render A, hit the suspense, it's fine. Maybe that blocks you, but maybe that continues. Render B, render C. But you can't resolve the suspenses, right? But once you get to the end of the list here, once you get down to five here, like, so let's say...
[01:07:02] These bees, like, are-- I mean, maybe-- can I make them a different color to show that they don't run yet?
[01:07:07] Thank you.
[01:07:08] That's not a good enough color.
[01:07:11] I need something lighter.
[01:07:12] Let's make something up. Let's make a -- I can't do it. No winning here.
[01:07:24] Thank you.
[01:07:24] Thank you.
[01:07:25] Essentially, we skip all the suspenses the first time, we get to five, and then we stream the response.
[01:07:34] and stream the shell. So at this point when we stream the shell, we actually have maybe the outside of this stuff and we just don't we don't have some some content inside. And then as a and B and C finish and they can finish
[01:07:49] independently.
[01:07:51] we then fulfill these suspenses and tag them on the end.  So you end up with, you know, you might end up with, sorry.
[01:08:01] Let's get into this. You might end up with 6A, which is resolved.
[01:08:09] Since...
[01:08:12] A and so on. I don't know why I called it 6A.
[01:08:19] 7 resolves.
[01:08:24] B and A result.
[01:08:28] And the reason I'm showing you all this is not because
[01:08:35] the cool streaming effect and the fact that everything loads early. It's not because of this table here.
[01:08:41] It's because...
[01:08:44] Um,
[01:08:46] Thank you.
[01:08:48] Look at all the work you did.
[01:08:50] ahead of time.
[01:08:52] while you were waiting for the loaders here.
[01:08:59] In the end,
[01:09:00] you rendered maybe most of the page.  Who knows? Maybe not.  But you may have rendered most of the page.  And you literally just have to...
[01:09:06] fill in the gaps in some cases.
[01:09:09] Like sometimes, as I told you, these wraps, so it's more complicated.  But it's, in a sense...
[01:09:14] It is possible here that by unblocking the rendering on the server, you're actually not only because they're streaming soon, you're actually improving like the.
[01:09:23] what concurrency or whatever, like the ability to use the CPU on, on your server as well. Like  ultimately, I guess maybe switching context might be more expensive on the overall CPU,  but you're actually shortening the, the whole, the total time of your response, because like  you're instead of like, wait for this rate to this, you're actually able to parallelize the  rendering cost while the loaders are running and then finish the stuff that happens later. And like  if A finishes before B, then, you know, you can finish this one up. You're, you're, you're actually
[01:09:53] you go this way. So this is actually streaming, or at least it doesn't even have to be streaming.  Even if you wait to send the whole page at the end,
[01:10:00] you're actually improving your server rendering by using non-blocking patterns.
[01:10:05] So, yeah, this is my perspective on here.  Even if you want to be skeptical about streaming itself,
[01:10:12] It actually, I think, makes a better server rendering performance story when you render this way. And obviously, solid async and streaming both work this way. Very consistent with this thing. So I think for me, the exciting part about it wasn't that Remix got streaming other than the fact that the social impact is good, you know, people will actually like embrace it more. But that
[01:10:32] They...
[01:10:33] are getting rid of this enforced waterfall.  In order to do it, they're actually going  to improve their rendering.  So I think this is actually a really good thing for Remix  as well.
[01:10:44] Yeah, it's kind of one of those hidden things perhaps, but I'm just glad the conversation's here. No more fighting with people trying to explain the benefits. It's now going to be pretty clear to everyone, I think. And this chapter is over for now. Okay.
[01:11:07] And I think that brings us up to the end of this week in JavaScript.  If you're still with me.
[01:11:12] you know,
[01:11:13] Good on you.
[01:11:15] Thank you.
[01:11:19] Thank you.
[01:11:22] All right. Okay, cool.
[01:11:27] So, time to switch gears, everyone.
[01:11:32] And let's talk about some stuff of solid.  I'm actually really excited about this.
[01:11:36] I'm going to throw a banner up really quickly.
[01:11:40] Because I can.
[01:11:42] Um...
[01:11:46] Amen.
[01:11:47] Throw this one up here.  So let's talk.  Solid 1.4.  Solid 1.4 is...
[01:11:54] Might be the longest I've taken to release another minor version of Solid since I started.
[01:12:01] 1.3 came out like the beginning of January and it's been like, what, four or five months? It feels like it's been it's been a while. And
[01:12:08] Part of it is I've been working on Solid Start. I've been trying to find patterns. I've done a lot of experimentation over this time period. And it's funny enough, usually what ends up leading to a release isn't
[01:12:17] that. It's actually
[01:12:20] you know, recognizing that you need to, like, add some feature or thing that would be backwards  breaking, essentially. And you're like, okay, it's time to kind of do all this stuff. For us,  it's often the compiler that did it. And, you know,
[01:12:32] We got a bunch of issues that kind of came up on the GitHub.
[01:12:36] a bunch of bugs. Not a ton. But I figured -- oh, actually, this one is solving 1.42. Let's add that milestone.
[01:12:45] Thank you.
[01:12:46] essentially 1.4 is going to solve every bug here.
[01:12:50] As I mentioned before, there's basically three areas. Most of the stuff here is
[01:12:57] there's some actual legit bugs like this error handling one, which is kind of interesting to  fix. But we had a bunch of issues around inconsistent handling in the compiler. And
[01:13:11] Especially around things like classes and attributes.  And yeah, I want to show you all something.  This first one, what I'm excited most about 1.4 is I think it's a quality of life.
[01:13:24] improvement.
[01:13:25] Um,
[01:13:27] This bug
[01:13:28] It's very easy to reproduce.  If people set class equals undefined and solid,  your class name would literally be undefined,  because we would compile it.
[01:13:39] this and I mean if you know what I'm talking about
[01:13:43] You can kind of see this. If you create an element,
[01:13:48] Oh.
[01:13:51] Like, let's make a div. Okay. And then you go L dot class name equals something. Doesn't matter. And let's
[01:14:07] I think, let's see if this works. Let's console.logl.
[01:14:12] I think we'll get a visual of it. Yeah. You see class something, right?
[01:14:16] Now,
[01:14:17] If you go L dot class name equals empty string,
[01:14:24] Thank you.
[01:14:25] This is kind of the fun part about the DOM.  You get class with an empty string, unsurprising.  If you go L dot class name,
[01:14:34] null.
[01:14:37] we get literally the string null.  And if you go l.className undefined,
[01:14:43] Thank you.
[01:14:44] Thank you.
[01:14:45] Yeah.
[01:14:47] Well, you get classical, it's undefined.
[01:14:50] This is kind of--
[01:14:53] I'm gonna change my view here so I'm not blocking the screen. This is kind of frustrating.
[01:14:59] Because you're like,
[01:15:01] Yeah.
[01:15:03] Thank you.
[01:15:04] How...
[01:15:05] Do you...
[01:15:09] Get rid of the stupid class.
[01:15:13] Right?  And the reason we use class name is class name is more performant.
[01:15:18] Right?
[01:15:21] Thank you.
[01:15:22] Thank you.
[01:15:24] That's why you use it.  Even though this is a property,  this just isn't helping us here.
[01:15:29] And for a lot of things, undefined is fine.
[01:15:32] It's called using the platform. Thank you. Yeah, that's, that's exactly what it's called. It's called using the platform. Well,
[01:15:39] I looked at Inferno for some sage advice, as I often do. Inferno, when I want to know how  to solve a problem in a performant way, I looked at Inferno.
[01:15:50] Um,
[01:15:50] I feel like there are spiritual Godfather,  different approach,  different kind of view of VDOM and stuff.  But,
[01:15:59] I have incredible respect for what the work
[01:16:04] Dom and Sample have been doing over the years.
[01:16:13] The answer to the solution is
[01:16:16] There's only one way to fix this problem, unfortunately.
[01:16:21] Thank you.
[01:16:23] Only one way.
[01:16:27] L
[01:16:29] dot remove attribute class.
[01:16:34] Thank you.
[01:16:35] So now class has to be special cased so that it sets with a class name and removes as a,  so it sets the property and removes
[01:16:45] with the attribute.  So I can't use the attribute helper for it.
[01:16:50] because I don't want to take the performance hit.  Clasp getting set is a thing people animate with.  So performance is important.
[01:16:57] But we're moving it, we have to switch it.  So we actually, it works dual mode,  half prop, half attribute.  So moving forward, Solid is going to have a class name helper  that does exactly that.
[01:17:09] Yeah, yeah, this is great, isn't it? So I'll show you the class name helper. I'll just pull up DOM expressions here for a second.
[01:17:18] Thank you.
[01:17:19] actually
[01:17:22] Oh, yeah, it's on main because I already released it.
[01:17:25] Thank you.
[01:17:26] Essentially,
[01:17:28] This is our new thing, unfortunately. Class name, value.
[01:17:34] double equal, so we coerce null or undefined.
[01:17:39] I'm false for class probably actually
[01:17:42] you don't want, but if someone...
[01:17:45] Did you ask that's an interesting question, isn't it?
[01:17:48] Hmm. Anyway, generally speaking,
[01:17:51] But yeah.
[01:17:54] For other things like attributes, you actually need the support false, technically speaking, because there are, don't get me started, there's Boolean attributes and then there's non-Boolean Boolean attributes.
[01:18:05] But yeah, node remove attribute, otherwise set the class name.  So now we have to have one extra helper, unfortunately.  It's one that can get inlined, but just wanted to kind of show the kind of fun you have when you're working on a framework.
[01:18:21] Thank you.
[01:18:22] Right, but this isn't a JSX problem.  This is like literally the DOM.
[01:18:26] We actually don't use class name in our syntax. We use class for people. If Vue is handling this properly, for example, they're doing exactly this or they're just using the attribute and not going for the performance. This has nothing to do with the templating. It's literally how the DOM works.
[01:18:49] Like, yeah, like, yeah.
[01:18:58] It's, as I said, like in solid, our actual syntax for doing this is what div class.
[01:19:07] Thank you.
[01:19:08] equals something. You don't need to use the silly JSX stuff. We'll see if I get rid of this one. The first one will still log properly. You just do this. Sidewalk note.
[01:19:21] For anyone who's skeptical of JSX, this is why I love JSX.
[01:19:24] Look what I just did.
[01:19:26] That's why JSX is sweet. You can literally just be like, oh, I need a div. I'm just going to write some JSX.
[01:19:32] You don't need no template or anything.  Just like, here's a real DOM element.
[01:19:38] Bam, right?
[01:19:43] But, okay, so, yeah, this one was kind of...
[01:19:49] This is kind of a pain.
[01:19:51] I mean, it is what it is.
[01:19:53] And I think I either do
[01:19:56] When you fix something in solid, you've got to fix it in three places. You've got to fix it in the compiler.
[01:20:00] And, you know,
[01:20:03] And obviously like the class, I need to fix it.
[01:20:07] Sorry, like, so the compiler generates stuff and they have this helper. And then I also have this fixed spreads and what's called assign. So, yeah, sorry, assign prop. So,
[01:20:19] Spreads are stuck because this is when you have to basically revert back to VDOM.
[01:20:23] Yeah, this, yeah, prop class or class name,  call the class name helper.  Yeah, so yeah, this one's not too bad,  but like we had to hit it a couple of places.  Side note on this release, guys, big news.
[01:20:37] deprecating class name. We're not removing it, but TypeScript will no longer have a class main type. I'm going to
[01:20:43] having to merge the props, especially between spreads and not spreads and the complexity that comes with that,
[01:20:49] I do as much as I like giving people flexibility.  One thing that we're doing in 1.4 is gearing towards eventual removal.  We need a single way to set a single attribute because we want to get the most of our compiler.  And if we have a runtime mechanism like a spread and a compile time thing and they can't see each other, having multiple ways to set the same attribute creates a huge amount of complexity.
[01:21:15] because they can trample each other without being known to each other. So,
[01:21:21] I did it originally to be flexible and be like, oh, you can just take your React code.  In the future, you will have to change all those class names back to class, unfortunately.  Obviously, 1.4, we're not removing it yet.  But we're going to start gently guiding people with TypeScript types and what do you call it?  Deprecation warnings and kind of things.
[01:21:45] Yeah.
[01:21:47] Thank you.
[01:21:48] Thank you.
[01:21:51] Thank you.
[01:21:53] Yeah, pretty much. And HTML4. Both of those are like Reactisms that don't need to exist. They're not JSX, they're React. And we just don't need them.
[01:22:06] Bye.
[01:22:07] Yeah, so I mean, I know it sucks. You guys have seen me on stream renaming classes to class name and, and like doing that whole dance, you know, back and forth.
[01:22:18] going between React, it is a bit of pain.  This is just worthwhile pain.  We'll load from the framework, and this lets us optimize things.  It also might mean a future where class and classless become the same thing,  and we just have one super class mechanism that makes sense.  I don't want to promise that just yet, but essentially, we're just inviting edge cases  when you have two ways to do the same thing, and they can be done simultaneously between a compiler and runtime.
[01:22:48] most out of our compiler.  So, you know,
[01:22:54] Yeah.
[01:22:55] Yeah, I'm not going to lie. I like use CoffeeScript for years and like I never use ESLint. This is something we need to improve.
[01:23:04] some people like make jokes that it's because I know what I'm doing.  No, I've just, I've just never gone to tooling.  Coffscript had crap tooling. So I'm like the worst person.  Evan, you makes the best tools in the world. Um,
[01:23:17] Thank you.
[01:23:18] And like, that's just not me.  I'm sorry.  Like he probably caters to the devs in a way that they understand.  I'm like a mechanics guy.  I've just never, that's never been the thing, you know?
[01:23:33] Yeah, you know why? React pollutes the global namespace. They're literally like global is us.
[01:23:39] Other JSX frameworks are a bit nicer.  So you have to make sure your TS config  wires stuff for solid.  Otherwise, React just will come.  You're just like, where is it?  No, React is behind every corner.
[01:23:58] Anyway, yeah, so I just want to mention some of these ones. I want to start with the bugs because these -- I think this compiler stuff is important, but it's also the least exciting stuff. Spread null or undefined props. It's another similar kind of issue.
[01:24:11] Did you guys know here things you learn while working on a framework they never thought of?  Let's let's let's let's let's do this one.
[01:24:21] You can do this.
[01:24:26] Why? You know what you can do? Can you do this?
[01:24:31] You can.
[01:24:32] Yeah.
[01:24:33] Why, why, why, why? But you can't. So
[01:24:40] Solids, these are the kind of weird edge cases. The reason why you want to kind of reduce and just get as close to the platform and sense it as you can underneath. And when I say close to platform, I don't mean web components. Those
[01:24:52] Those are
[01:24:53] something else. But I just mean like, yeah, this is kind of fun. Can we do this one? Let's see. Can we do false too?
[01:25:03] Thank you.
[01:25:06] Can we literally spread anything? Can I spread a number?
[01:25:10] I don't even know if this is working anymore.
[01:25:16] Thank you.
[01:25:18] Okay. Here you go. Here's some JavaScript. Okay. I'm not worried about numbers because if people are spreading numbers, I mean, that's on them.
[01:25:28] But essentially,
[01:25:31] We wanted to be able to solve that problem. And I mean, on the surface,
[01:25:37] These ones were actually mostly fine. You just need a null check when you iterate. But the compiler
[01:25:45] actually
[01:25:48] Actually, I'm going to go solid now for this one. The compiler for components actually --
[01:25:58] Thank you.
[01:25:58] Uh-oh.
[01:26:00] uses a helper that we have in Solid under Solid.
[01:26:05] Source.
[01:26:07] Render components, something called merge props. And let's see if I can get to our next branch.
[01:26:15] Um,
[01:26:18] All right.
[01:26:20] Oh,
[01:26:23] It wasn't too bad, but yeah, it's fine.  We just went in and do now like these hidden...
[01:26:30] null checks inside that. This one isn't actually that interesting. It's just I thought the solution is not interesting. I think the problem is a little bit interesting, though, like.
[01:26:41] In any case, it's all I just wanted to show that one just  because it was like, you know, these kind of things, you know,  and the way they work with the compiler and it's like, made me  want to finally cut a release.  This last issue actually has to do with stores.  And we're going to talk about stores in a minute.  But I think before we get to stores,
[01:26:59] I want to talk about the other big part of this release, and that is...
[01:27:05] resources.
[01:27:07] A lot of thought because I've been working on Solistar has gone into resources.  And I'm going to just go to the next branch here and see if I can pull up the change log.
[01:27:14] I got two really cool features I want to show you about resources tonight. And the first one,
[01:27:21] is something that I call resource-deferred streaming.
[01:27:24] Essentially,
[01:27:29] We've been hitting this problem. We introduced streaming 1.3 and people have been playing with it and it's really cool. But sometimes
[01:27:37] The challenge with streaming is once you start the response, you have to send the headers and the status code.  And you no longer get to say, like, it's a 404 or it's an error.  So sometimes there's some data fetching that you want to do.
[01:27:50] before you start the stream. You're just like, okay, it's fine. You're like, I'm streaming,  you know, I mean, but like, I want to know the user's at least logged in first, right? I don't  have to fetch all the data maybe, but you know, but I need to at least do one thing. And there's  a solution to that, right? Right.
[01:28:05] you can always just do the request before you call the render function. In fact,
[01:28:10] We saw it right here.
[01:28:12] This doesn't have to be rendered stream. This can be rendered stream here. We can just
[01:28:16] run some stuff. I'm not saying the loaders, but we can always like block it and then start.
[01:28:20] As we mentioned before, maybe not the best idea.
[01:28:24] But it's something you can do.
[01:28:26] the thing is when you build a meta framework like solid start and you're trying to like wrap all  these things into like nicer bundles you don't want people really like messing like they can but  you don't want like to be like oh the answer to your problem for this very common thing is to just
[01:28:41] go in and change the root file, you know, where we pre-configured everything for you.  You know, you don't want that to be the pattern.
[01:28:48] And, like, essentially, I was like, how do I solve this? And, you know, I was thinking, okay, maybe I can hold suspense boundaries and stuff. But the answer is actually, you know, much simpler. And I came up with this a couple months ago, but, like, it's been taking me forever to get here. Like, what if we just say, hey,
[01:29:08] I just want this resource to wait.
[01:29:10] I'm going to pull up an example here.  And I use this example a lot previously.  But it's not Hacker News.  I'm going to pull up.  I've got solid here in the repo.  Let's make it a little bigger so you guys can all see.
[01:29:23] And
[01:29:24] I've got this example that I like to use, and I'm going to --
[01:29:29] Thank you.
[01:29:29] Um,
[01:29:30] build the streaming version of this example.
[01:29:34] Thank you.
[01:29:35] It's the SSR example I have inside the solid repo. I think it serves on 8080. I didn't start the server. Sorry, my bad.
[01:29:45] you can run these learner commands. I know learner is dead, but whatever. Or someone picked it up.
[01:29:52] These examples show async, streaming, all the different stuff.
[01:29:58] Okay. I'm going to go with the profile.
[01:30:00] Okay. And the way this profile page works is it loads a John profile and then it loads  the information about John. So we actually --
[01:30:10] We have console logs.
[01:30:12] in this data fetch and I can show it here.  I'll pull up the code example.  Let's give ourselves a little bit more.
[01:30:19] window room here.  No, apparently not.  This is why I hate pulling up the window.  We have this kind of like data loading function  where we create two resources.  And we console log in the first one load users.  And in the other one, we console log load info.  And essentially, they feed into each other.  They're cascading.  Like you could do this across loaders or whatever.  But essentially, there's a user.
[01:30:39] and that user is the source for the second resource.  The first resource has no source and it just loads,  and the second one feeds in.  So initially when it runs, this is undefined,  so it doesn't run it, so it actually cascades.  It loads the user and then presumably, you know,  uses that information to load  this more information about the user.  That's essentially what we're simulating here in this example.
[01:30:58] What happens is when we load our page, we see that there's this double loader cascade  where it goes loading and then loading.  Obviously, if I had better placeholders and stuff, we could do better things that don't  cause layout shifts.  But what I wanted to show is you can see the first data loads and then the second data  loads.  In fact, you know what?  Let's make this more visual because we're on stream and you guys might not see that.  Let's up this to a second each.
[01:31:26] makes it less realistic per se, but let's do this to be visual. Okay. So I'm going to try it again. Loading, loading. Okay. And what you'll see here is those two calls are called on the server.
[01:31:41] And in our console here, they're not called. Sure, if we leave and we come back, we're going to see one and two.
[01:31:48] You're seeing an async transition there, a suspense, which is why it held. But essentially,
[01:31:55] We'll talk about those more later, one, two.
[01:31:58] Okay. Now,
[01:32:00] Thank you.
[01:32:00] What if that first user information is important enough that you don't want to kind of like go through that loading state and you say like there's no point showing the page or maybe you need to do off or something, right?
[01:32:10] All I'm saying is take your resource,
[01:32:13] And just go--
[01:32:16] Differ stream. So just take our existing code, build it again.
[01:32:28] And now when we do it,
[01:32:32] We don't see that first load. It does take a longer to use the load because it takes a second. But what you're seeing here is the page actually loads with the first section and then only streams the remainder.
[01:32:44] Um,
[01:32:45] And in fact, if we wanted to, we could probably defer stream true whole thing.
[01:32:59] This was what we were into. And essentially, now, this is
[01:33:07] I mean, I'm going to see it loaded.  This is the same as async rendering in Solid.  It's streaming, but we have control at a resource level
[01:33:17] essentially this loading behavior. So, and what's cool about it is,
[01:33:22] If I go back to the original version, cut back.
[01:33:37] What you'll see if I if we look at the network capital can pull it out.
[01:33:44] Thank you.
[01:33:45] Yeah.
[01:33:45] and view this, you'll see header content of the page.  You see some scripts for hydration setting up.  We'll see some initialization scripts.  This is how it knows to wait.  Like if you don't have these scripts,  Solv will like client render, like it kind of falls back  that way.  And then you'll see the initial part of the content of the page
[01:34:04] which is the nav right here.  And then you'll see a placeholder loading for the first one.  And then if you go down further, you'll see this hidden section, which where we swap in the John's thing in the section,  could be about you with the second loading indicator and then some scripts that actually set the data and move
[01:34:23] the the this hidden content into place and then further down we'll see
[01:34:30] the second section with all this information, the thing that passes the serialized data, and then the one that is calling the same function again, that moves that hidden content into place so that we get our final results.
[01:34:47] What's cool about this is if we...
[01:34:50] Thank you.
[01:34:51] Thank you.
[01:34:51] Add the first stream, like I just did.
[01:34:59] Now we're just going to wait for the first one and not the second one.
[01:35:04] This is resource level two. The reason they're holding is each suspense boundary reads from a separate resource. So, like, it goes ping-ping, but if they both listen to one or something, like, it's based on the resource, not on the suspense boundary. What you'll see here is
[01:35:24] Now our initialization script has a bit more stuff in it.  It actually has the first data.  And if we look in here, the first flush actually has
[01:35:32] John's
[01:35:33] profile.
[01:35:35] in with the loader and now we only have a single section for doing the second replacement and and moving it up and as you can imagine.
[01:35:44] If we go all the way.
[01:35:49] Do this.
[01:35:51] Thank you.
[01:35:52] We reload the page.
[01:35:55] no loading indicator and everything
[01:36:00] is
[01:36:01] serialized in the header.
[01:36:04] everything renders in place, and there's no additional script tags. So this is basically async rendering. This work
[01:36:11] is kind of like
[01:36:15] getting us to a point where async and streaming are essentially the same thing. They already kind of were, but this work helped consolidate this because when I first made this improvement,
[01:36:27] I wasn't actually compressing it back up.  It would still move into place, even though it would wait to flush it.  It would still move into place.  But now we're actually...
[01:36:35] put it in. So it basically, um,
[01:36:39] You don't do extra work in the browser if you don't need to, essentially, is the way this works.
[01:36:46] So, yeah, question.
[01:36:49] Yeah, the thing is, this doesn't block anything. It's kind of like Mike's calendar. The reason I showed you guys this whole thing was these all run in parallel and they finish as they finish. All we're doing here is instead of streaming the response shell here,
[01:37:08] Essentially.
[01:37:10] Instead of doing this, we just took this line,
[01:37:12] number five, and we moved it under six.
[01:37:17] Essentially.
[01:37:19] It's all non-blocking.  If we sell one resource to defer the stream,  it still loads and does all its normal suspensing.  It doesn't affect the way the execution happens on the server.  It doesn't make it any more blocking.  We're not using like a single waiting going, you can't pass.  Instead, we're just holding the queue at the front.  It's like the bouncer who's letting you in.  They're just like, OK, now you go.  Now you go.  We're just like, OK, we're going to hold it a little longer.
[01:37:53] Thank you.
[01:37:54] Thank you.
[01:37:54] If you await until render string there will be no parallel request.
[01:38:01] Well...
[01:38:04] Thank you.
[01:38:06] Thank you.
[01:38:07] Well, no, I mean, the thing is...
[01:38:11] How should I put it?
[01:38:15] None of this is blocking.  So like...
[01:38:19] Like, even if I move it all the way to the bottom,
[01:38:23] Thank you.
[01:38:24] Yes, the server doesn't get
[01:38:27] or doesn't send it to the client, but it doesn't change the fact that we were preemptively running.  It's like this is even if we render at the end here, it is different than this because this literally didn't do any rendering until all the data was loading.  This was rendering while we were loading. It just chose not to send it to the end.  And the benefit of that, obviously, is if you do need to know, like you don't want this page to stream, like you do need to for some reason.
[01:38:57] load all the data,
[01:39:00] because you haven't sent the response yet, you do have the ability to do a redirect or a 404.  See, the way Solid start handles this with streaming is if you've already flushed the  outer shell and you get an error or redirect, well, we just go, okay, server stops where it is,  sends it through the stream, and the client actually handles the redirect or the error  the way it would once it's hydrated. And because it is hydrated. Because while you're streaming,
[01:39:30] so you have an interactive page while the stream's coming in so
[01:39:34] So, yeah, I mean, it's kind of a...
[01:39:37] interesting scenario here because essentially
[01:39:43] If you embrace streaming completely, the out of order streaming, you can handle these cases in the client because like if you it's kind of it is a hybrid like you can always do a redirector handle an error in the client and the server can error and throw the errors across the network.
[01:39:59] So like that, but in some cases, you know, maybe just like the first request, you just know, like, I always have to check if the person's logged in.
[01:40:11] you can hold the stream for-- maybe it's in Redis.  Maybe it's like a 6 or 10 millisecond hit.  You can hold the stream and not send it right away.
[01:40:20] In fact, you could hold rendering and not send it right away.  But in our case, you don't have to make that sacrifice.  You can literally just...
[01:40:26] Go out to Redis async, keep on rendering, and then
[01:40:30] you know,
[01:40:31] When Redis goes, oh, yeah, the person is logged in, then you can just send whatever you have at that point.
[01:40:38] So
[01:40:40] It is non-blocking. There is a huge
[01:40:42] There is a difference between these two,  is what I'm trying to get at.  Okay. So I think this is a really cool feature.  Again, it's super easy to use,  'cause essentially all you have to do,
[01:40:54] Just go like defer this.
[01:40:55] You know, just for the stream.  I'm still playing around with the names.  I was saying wait before, but it's not actually wait.
[01:41:03] So, yeah, I think that's wait.  I was trying to wait before.  We can, you know, bike shed APIs all we want,  but you kind of get the gist of it here.  It's essentially you just mark any resource,  you know,
[01:41:17] Any suspense boundary that depends on that resource obviously can't flush.
[01:41:23] If
[01:41:24] you wait for that resource and the suspense already happens to be able to flush at that  time you can skip doing the um kind of load in
[01:41:32] fallback state in the client. That's just it's a smooth transition from it.
[01:41:38] I think this was actually kind of fun because it wasn't too hard.  I'm going to see if I can pull up our DOM expressions again here because it's --
[01:41:49] And do--
[01:41:52] Maybe you don't. Yeah, okay.
[01:41:54] because essentially
[01:42:00] I'm just going to show this here, server.js. We already have this mechanism for writing resources. We have to serialize them. We have to send those data. You saw there's the initial call and then when I set the data. So,
[01:42:15] The answer was actually really, really, really, really stupidly simple.  As long as we keep track if we first flushed or not, essentially, I made a variable for it up here, first flush.  As long as we keep track that we flushed, all we have to do is when we-- where is it here? Write a resource.
[01:42:33] We check and go if it's set that, you know, for the stream or wait or whatever, and it's not
[01:42:38] Flushed yet.
[01:42:39] Push the promise.
[01:42:42] into an array.  See, because generally we have to listen to this promise anyways,  because when it's completed, we have to serialize the data  or serialize the error.  So we already have the promise.
[01:42:51] resource registers itself while suspense is running so that we can serialize it. So at that point, I was just like, okay, if you know that it has the defer stream option, push into a list. And then when you call pipe later on here, when we pass back like the pipe APIs, we just go promise settle all blocking resources and basically done.
[01:43:09] This took me like 20 minutes to do the basic implementation of because essentially,
[01:43:18] You just hold it on those promises.  And there you go.
[01:43:25] Yeah, I think this is a super powerful feature.  And it's a very easy API to use.  And it lets you kind of scale.  There's always this concern when you're streaming because of the status that you can't do all the use cases.  And you have to fight with it.  With an API like this where you don't have to think about it, the end user can just
[01:43:43] choose. And I think I'm really excited about this one.
[01:43:48] Thank you.
[01:43:48] Thank you.
[01:43:50] The other really cool thing we did with resources was...
[01:43:56] another kind of tricky pattern that I've been seeing. And
[01:44:03] That pattern is...
[01:44:06] I'm actually going to pull up a code sandbox to show this demo, I think.
[01:44:12] And I think the demo that I want to show
[01:44:15] is called
[01:44:17] Still resource, yeah.
[01:44:21] Okay.
[01:44:23] I'm going to fork this so that I don't mess with my copy of it, but I,
[01:44:28] We've been kind of...
[01:44:32] Okay.
[01:44:33] We've been kind of playing around a bit with suspense and resources here.
[01:44:39] Yeah, let me...
[01:44:41] Picture
[01:44:42] I'm going to strip everything out at first to make it easier.
[01:44:48] But essentially, picture you have a button.
[01:44:52] Thank you.
[01:44:53] Where...
[01:44:54] When you click on it,
[01:44:56] It cycles through a bunch of users.  And I'm actually going to
[01:45:01] Pull out.
[01:45:03] Even...
[01:45:04] these suspense boundaries.
[01:45:07] And I'm going to
[01:45:10] I'll leave some of the stuff in, but it probably won't make a ton of
[01:45:13] sense to everyone. I'm going to pull out these suspense boundaries and show the most basic, basic
[01:45:21] case I pulled up too much.
[01:45:28] All right. It's because I need to replace this with a fragment. My bad.
[01:45:32] So let's do this.
[01:45:37] So if you have solid, and I'm just using a resource, it could be Signal, whatever, and essentially if you...
[01:45:45] If you
[01:45:47] we've got this cascading thing where we have details and we have a,
[01:45:52] profile timeline, let's call it, these two things.
[01:45:57] One listens to the user and the other thing looks at their list of posts.
[01:46:02] Okay. And
[01:46:04] essentially
[01:46:05] the timeline or the post is just like a for loop. Now,
[01:46:11] I've got like a mock API here as well, and it's just creating
[01:46:16] a few resources and a way of triggering them.  There's the set which changes the ID, so to speak,  which triggers the next resource.  And this git ID is just a matter of like,
[01:46:27] saying what the next resource is in this.  And let me see, I don't actually even expose
[01:46:33] the ID.  It's kind of wrapped in here.  It doesn't really matter a ton.
[01:46:40] But...
[01:46:42] Actually, you know what? It does matter. I'm going to expose it here. Let's call it
[01:46:48] ID and we'll...
[01:46:50] for me.
[01:46:51] Yes.
[01:46:53] I'm doing wrong.
[01:46:55] um
[01:46:57] Oh, it's an array.
[01:46:58] Oh, OK. Yeah.
[01:47:01] It's like not...
[01:47:03] uh
[01:47:06] Maybe...
[01:47:08] Thanks.
[01:47:10] Thank you.
[01:47:14] Essentially, just made a small tweak to this and
[01:47:19] Thank you.
[01:47:23] Thank you.
[01:47:26] Thank you.
[01:47:27] Thank you.
[01:47:28] It's like,
[01:47:30] Thank you.
[01:47:30] Not even on the latest, am I? It doesn't really matter. I guess this stuff is still good.
[01:47:35] Okay.
[01:47:36] Yeah.
[01:47:37] This is actually probably a mistake, trying to get the new version.
[01:47:42] Code Sandbox is probably going to be like, I don't know what version this is.
[01:47:47] OK, OK.  So if you don't have any suspense and you load this thing,  what ends up happening is you see this kind of-- you have no loading indicator.
[01:47:53] And then this loads and then this loads, right?  Kind of see this thing.  And then we're going to actually...
[01:48:01] grab resource dot s. And I'm going to stick it in here just as like an extra indicator of where we're at. I'm going to add like a span maybe.
[01:48:12] Because the original example didn't have this. Let's go -- what is it? Resource.
[01:48:22] I think I called it.
[01:48:26] So ID zero, right?
[01:48:29] And then when I click next, you're going to see ID one.
[01:48:32] Thank you.
[01:48:33] Actually, let's do something like H3.
[01:48:38] Thank you.
[01:48:41] OK, there we go. This isn't the prettiest, but it should serve. So you see zero. I click  next and immediately changes to one.
[01:48:48] Then this loads and then this loads.
[01:48:50] This is what happens when you have...
[01:48:53] Thank you.
[01:48:53] no suspense or transitions or anything on a page.
[01:48:57] So initially loads.
[01:48:59] One, two, three, waterfall.  This, this, this.  One, two, three.  Okay.  Now, what?
[01:49:08] - Yeah.
[01:49:11] The thing is some people you could handle loading state yourself,  but one really nice, cool thing you can do is add suspense. So, um,
[01:49:20] Thank you.
[01:49:22] It's funny. I'm actually going to-- I'm too lazy.  I'm actually going to pull the original version back,  so that I can just copy the suspense stuff over again,  so that I don't have to worry about it.
[01:49:36] So let's grab it.
[01:49:37] So,
[01:49:40] A lot of people get this far,  'cause they're working on solid and they're like,  okay, cool, I need suspense.  So they might add one suspense boundary around this thing.  And they're like, okay, sweet.
[01:49:49] So,
[01:49:51] you get this like
[01:49:52] loading, and then this happens.  And when you go to the next page, you get loading, and this happens.  It's cool. You see the number and the loading happens at the same time, right?
[01:50:01] Here we go. Welcome to Suspense.
[01:50:03] our problems have been solved.
[01:50:05] This is what you get when you use suspense in Preact,  and when you use it in Vue.
[01:50:12] Okay.
[01:50:13] Sweet. Suspense is awesome.  No, this is kind of garbage.  I mean, it's okay, but this is not great.  Like, the first thing, and you might be like,  well, I don't...
[01:50:25] actually care about these details
[01:50:28] I want to actually--
[01:50:29] defer this a bit
[01:50:31] I mean, this loading state's better.  Now I know this stuff's loading, but, you know,
[01:50:35] Maybe I don't need...
[01:50:36] to wait
[01:50:38] for everything. Maybe I'm okay
[01:50:41] like getting the top level stuff, and this can load later.  So then you add, cool thing is you can just add a second suspense boundary.  So you can isolate it.
[01:50:50] with suspense.
[01:50:52] Thank you.
[01:50:54] I'm going to shrink this so we can get more visibility on here. Let's add our second suspense boundary around here.
[01:51:04] Now we're cooking, okay. So, sweet.
[01:51:07] Now it's a little better, it loads.
[01:51:10] and loads.
[01:51:11] pretend it's not just a header, pretend you have content.  So like you actually see the, you don't have to wait.  And this is very much like we were talking about  with the streaming APIs.  Like maybe you actually, this is so important  that you actually wait on the server  and only stream the second part or whatever, right?
[01:51:26] And when you click Next,
[01:51:29] Well,
[01:51:31] The same thing happens.
[01:51:33] as you get around.
[01:51:35] Yeah.
[01:51:36] Thank you.
[01:51:38] And as it's really jarring because it's like what it is, this might be slightly better, but it's also kind of worse because the other one, at least you just loaded the whole thing at once.  So you're kind of like, oh, like.
[01:51:49] Maybe if this stuff's below the fold or lower down, you don't mind this kind of thing. Pretend this is a long post and these are the comments. It's okay, but...
[01:51:58] This is still really jarring navigation.
[01:52:02] But it is improved over our original nothing version,  because our nothing version was 1, 2, 3.  You saw this number update.
[01:52:10] And then this updated and this updated.  So this would show two.
[01:52:16] when it was still showing the old version.
[01:52:20] You know, I mean, like you go next and you see three and then it would be showing to the thing from two and then that will load and that look like it was this really awkward thing where you weren't seeing consistent state now at least.
[01:52:31] Since we had a suspense, it's consistent.
[01:52:34] We can see that it's one.
[01:52:36] And we're going to see this stuff for two or whenever it gets in.
[01:52:40] But yeah, jarring.  So we have a solution to that problem.  And that solution...
[01:52:47] is
[01:52:49] transitions.
[01:52:50] And transitions are great because essentially,
[01:52:55] Um,
[01:52:57] Mm-hmm.
[01:52:57] They allow us to...
[01:53:00] not fall back to that skeleton state.
[01:53:03] Right. So when you first load, you don't have anything. So you're like, okay, cool. I'm loading. But then when you go to the next one,
[01:53:08] It kind of tells you it's loading.
[01:53:10] And you can use gray out or whatever.  And this styling is bad because I changed it in such a way  that it's part of the layout shift.  Like maybe we actually want to move
[01:53:19] this loading indicator into our header or something. Just so it doesn't do that as badly. Let's do this. So,
[01:53:28] Here we go.
[01:53:30] So,
[01:53:32] Thank you.
[01:53:34] Yeah.
[01:53:35] Now, instead of showing the fallback,
[01:53:37] When we press the button, we still see zero, but we see it's loading.
[01:53:42] And then it's consistent.  So this is kind of like back to when we had the single suspense  boundary where we waited and then we showed.  And the thing is--
[01:53:56] Thank you.
[01:53:57] this is less jarring than falling back to the skeletons for most people. Okay. But
[01:54:06] This still might not be preferable because yeah, sure,  initial loading, we can handle placeholders,  but you might be like, you know what?
[01:54:13] This stuff just isn't very important.
[01:54:17] I don't want to wait for it.  Like, I want this first.  That's where we split the suspense.
[01:54:25] I don't really care about this stuff.  It can be out of date.  I just need a way of indicating it.  So...
[01:54:31] React is something called create deferred value. But I was like, it was a weird API where you had  like compare like stuff and I didn't like it. So I was like,
[01:54:39] What if,
[01:54:41] there is a way that you could listen to the latest value
[01:54:49] of a route or server resource without it triggering suspense.
[01:54:55] What could you do with that? Well, there's a lot of things like there's a lot of things that the first time they load, that's all you care.  Like if you're wiring observable into into like a resource and it has like a bunch of like steps that shoot, you don't you only really the skeleton state the first time.  You don't want to like fall back to it. So even if we're like forgetting about transitions for a second, using using something which doesn't trigger suspense might be valuable.
[01:55:25] Thanks.
[01:55:25] actually
[01:55:27] When it realizes it's never had a value, it does trigger suspense.
[01:55:31] But if it's ever had a value...
[01:55:34] then it goes, okay, I'll just show you the latest value instead.
[01:55:38] When you load the page here with latest,
[01:55:41] What you're seeing,
[01:55:43] is
[01:55:44] still the double suspense triggering but when you go to the next page
[01:55:49] I'm actually going to comment this out for a second,  because I'm going to explain that.
[01:55:53] When you go to the next page,
[01:55:55] Thank you.
[01:55:57] Watch it, it loads.
[01:56:00] holding this and then as soon as George loads,
[01:56:04] It actually updates the number in George, but it keeps this in the past because we don't care about that and then eventually shows it.  So let's watch it again.  Loading.
[01:56:12] See?
[01:56:13] This?
[01:56:14] So these two change together.  So it does wait to show the tab change until the data is loaded.  Like it finishes the outer suspense.  But in here, it never tracks the inner suspense.  So it thinks it's done.  And then this updates when latest does.  And it's completely independent of suspense.
[01:56:30] Bang.
[01:56:31] Thank you.
[01:56:32] So you're like, ah, but I mean, the only problem with that is it's you don't know this is out of date.  Like, what if this takes a while? Like, you don't know it's out of dates.  But this is actually a really cool trick.  You know when the resource is loading and because it gets held under suspense,
[01:56:46] the loading state won't show until-- or sorry, under transition.  The loading state won't show until the transition is done.
[01:56:54] We can actually gray this out here as we navigate.
[01:56:57] once it's stale.  When it's consistent, we're fine.  But the second that this loads and this is out of date,  we'll make this a different color, slightly gray.
[01:57:06] I don't know if you guys can see this on stream, but see?
[01:57:09] Thank you.
[01:57:10] Thank you.
[01:57:11] Thank you.
[01:57:13] Thank you.
[01:57:13] Thank you.
[01:57:14] So, yeah, maybe it took a bit to get up to this example, but what I'm trying to show off here, and there's a lot of applications of being able to grab this latest value once you have it without turning suspense.  But essentially, we have now a third mode, essentially.  I guess it's fourth if you count no suspense, but you have the ability to...
[01:57:35] you know, not use suspense, obviously, and show everything kind of torn.
[01:57:41] You have the ability to use suspense and force everything into a placeholder state.
[01:57:46] You can use transitions to stop falling back to placeholders after the fact.  And now with the use of latest, you have the ability to selectively...
[01:57:56] opt things out
[01:57:57] of, um,
[01:57:59] out of suspense. So you can have partial tearing if it makes sense.
[01:58:03] for your application.  And as this is probably a bit of an edge case,  but there's other cases where you're just like,  I only care about suspense the first time,  and I don't want to worry about it.  The thing about this is,
[01:58:14] You can remove this transition here.
[01:58:17] now, essentially, with this move, I believe.
[01:58:22] We can find out.
[01:58:26] Oh, right. Yeah, we can't see it because the outer resource.
[01:58:29] Okay, let's pretend we really didn't care.  Let's change this to latest.
[01:58:34] Bye.
[01:58:35] Thank you.
[01:58:36] Now neither of them are tracking. They initially have the loading state.
[01:58:40] When I click Next,
[01:58:43] I mean, I'm opting into tearing for both of them.  We aren't falling back to suspense necessarily.
[01:58:51] even though we don't have a transition.  I'm not saying that this is the best UI
[01:58:57] Like this, you see what happens now when we click Next, this updates immediately again, like the original example. So there is this tearing. But my point is,
[01:59:07] There is now a mechanism for this.  This is probably one that only certain people are going to find a use for,  but the fact that it exists is a very powerful third mode.
[01:59:19] Thank you.
[01:59:20] Okay.
[01:59:21] Thank you.
[01:59:22] Thank you.
[01:59:23] So, that's sort of the conversation on resources. I think this stuff is super powerful, both between the
[01:59:29] the streaming holding APIs. And yes, I think this might be one of the first SSR specific ones on one of the reactive primitives.
[01:59:38] We do have some specific components, assets and no hydration that have kind of SSR wear. But in terms of like
[01:59:49] specific piece. It's mostly because our permanents are actually fairly simplistic. They don't  have very many options. Create resource might have the most options. But
[02:00:00] It's super powerful because people wrap it.  When people make like a solid query wrapper,  they use resources under the hood.  And they get the ability to opt into these abilities themselves  quite easily.
[02:00:12] They can add their caching layer, do all that kind of stuff, and still have the ability to kind of
[02:00:17] control it. Like some people are like, oh, we should have like a turn suspense on and off, kind of toggle on the resource. And I'm like, no, no, it's not about the fetching. It's about the reading.
[02:00:27] You don't want to show inconsistency.
[02:00:33] Like, like latest, if you have never loaded a value latest,
[02:00:38] will still trigger suspense that first time. If you really never ever want to trigger suspense,
[02:00:43] will just give the resource initial value.
[02:00:45] Resources have an initial value field.  If you set the initial value, then it'll satisfy that.  The resource will be like, oh, OK.
[02:00:55] I have initial value.
[02:00:56] I know that I don't need to
[02:00:58] Um,
[02:00:59] you know, suspend that first time. So, you know, this is a very powerful, versatile API.
[02:01:06] OK, hopefully that makes sense. There hasn't been much questions or conversation about this part of the demonstration. So it's been pretty quiet the last few minutes, but
[02:01:18] Let's move on to the next one here.
[02:01:22] And that next one,
[02:01:24] is...
[02:01:27] Yeah.
[02:01:28] We'll talk about stores.
[02:01:31] I'm going to go into here.
[02:01:34] Wait a second. Sorry, it just comes to a good point.  Develop it to start Jyotai.
[02:01:40] Hmm.
[02:01:42] That's Jason Miller, creator of Preact.
[02:01:46] Wonder what he's working on.
[02:01:49] OK.
[02:01:52] Um...
[02:01:52] Let's go to next and look at our changelog again.
[02:01:55] Thank you.
[02:01:56] -
[02:01:58] A couple of things I've been doing with stores.  This might be the best feature of the whole release.  Maybe I've been holding the thing.
[02:02:06] You know what? I almost don't want to ruin it. I want to go straight to CodeSandbox and show you
[02:02:13] how awesome it is.
[02:02:16] Sorry, actually, you know what? I got ahead of myself. I didn't actually show you guys how I implemented that resource thing. Sorry, it takes me two seconds because once I realized that I could use loading for the lazy state, the implementation for this is so simple.
[02:02:32] Sometimes the hard problem is actually finding the--  like, figuring out what the solution should be,  rather than the problem.  Check this out.  Latest.
[02:02:39] is a getter that if it's ever been if it hasn't been resolved before
[02:02:44] called Read, which is like our...
[02:02:46] like
[02:02:48] our normal accessor, like on the resource, like the expensive one that triggers suspense.
[02:02:53] Otherwise, if there's an error, throw an error.  Otherwise, just return the value.  And what value is...
[02:02:58] is the underlying signal that's under the resource.  Like basically there's a signal that drives the resource.  It's internal storage.  I just exposed the internal storage  instead of wrapping it in our like
[02:03:12] read thing that triggers suspense.  So this one also was surprisingly simple.  It was just a matter of wrapping, writing this getter  to get it to work.
[02:03:23] Anyway, sorry. Let's talk stores. So I'm going to pull up a demo you guys have probably seen before. Solid, simple,
[02:03:36] to-dos. And so I probably forked it. But I'm going to do this again from scratch.
[02:03:42] And we are going to fork it again.
[02:03:44] I have so many copies of these now.
[02:03:48] Solid simple to-dos.  Okay, so this is a simple to-do example.  It's not even to-do MVC, although it's very similar.  It has like the local storage synchronization.
[02:03:58] And
[02:03:59] We're going to...
[02:04:02] You know, bump this up.
[02:04:04] Yeah.
[02:04:05] Yeah.
[02:04:06] I think we can bump this all the way up.
[02:04:08] It doesn't matter. Okay.
[02:04:11] So what is this example?
[02:04:16] Thank you.
[02:04:19] We have our local storage store, which it doesn't really matter for the case of this, but essentially it just creates a store and then it has a to do list and a title.
[02:04:30] And we do some operations here when we added to do.
[02:04:38] You can do some operations like change
[02:04:42] update the to do.
[02:04:44] Thank you.
[02:04:45] remove the to-do from the list, et cetera. Nothing too crazy here. But
[02:04:51] The thing is...
[02:04:55] Thank you.
[02:04:57] There's always this big shift when you go between the signal version and the store version. If you've  been to solidjs.com and used the tutorials, you know what I'm talking about. There's that tutorial  where we introduce stores for the first time somewhere near the end and we're like,
[02:05:14] I actually bother showing what nest reactivity, but let's look at Craystore.  Because you start with a signal.
[02:05:21] And your signal was to-dos, set to-dos.
[02:05:24] Here's the array.  And then you have to do like all these immutable operations  to kind of do the operations.
[02:05:31] I mean, this is basically the same example, right? Ta-da.
[02:05:39] The point of this exercise,
[02:05:40] if I remember correctly, is every time you change this,
[02:05:45] Thank you.
[02:05:47] Yeah.
[02:05:47] it's triggering. And the reason it's triggering is because we're recloning the whole item. You can solve it
[02:05:55] See, it's funny, this tutorial, A,  isn't telling you to use nested reactivity  because it's like a good thing that,  because it's like a solution we provide.  It's just showing like the natural way to solve this  is by nesting signals so you don't recreate full objects.  But the problem is,
[02:06:13] when you go, okay, screw this, I want to use the build, like the good solution, and you switch it to go solve it and use a store, suddenly it becomes store set store, which has a to do's object on it. And everything's been kind of pushed down. And now you your API's and all this stuff. And now you have a store thing. So even though it works the same, and it solves our problem, you know, you kind of feel invested in it, like, yes, this won't trigger again, when you're using the store, because it's using nested reactivity. Now,
[02:06:43] The thing is,
[02:06:45] Yeah.
[02:06:46] you know, this is all fine and it works and there's a good reason for it. Reactivity is based on property access. And, you know, if you don't track it, you can't run it. But
[02:06:57] This has been bugging me because
[02:07:01] What I really want to do here
[02:07:04] is I kind of want to-- I'm going to pull Create Signal in here.  But what I want to do is I want to--  sure, the store is kind of cool, and I made everything to store.  And for a while, I thought this is how people would use Solid.
[02:07:18] You know, I'm going to get rid of this local storage thing,  because it's just noise.
[02:07:25] Thank you.
[02:07:26] What?
[02:07:28] Thank you.
[02:07:29] Thank you.
[02:07:30] But what I kind of want to do here is
[02:07:33] I actually...
[02:07:34] Pulling everything in store doesn't really feel like idiomatic solid anymore. It feels more like we should have a new title and
[02:07:44] You know, people using React are kind of more accustomed to, you know, making everything  these separate things. When I created the original story API, I was -- it was during
[02:07:59] And Signal API, but most important story API, it was during when React sell classes. And I thought people would want to use plain objects the way they use, like, state and set state in React class components. And that's why it used to be called create state in VAC, which is even more confusing with it being different than use state. But essentially, sorry, I imported it from the wrong place.
[02:08:23] That's essentially--
[02:08:29] I thought people would just put everything in an object  like I just did here.  But the truth matters, that's not really what you wanna do.  It feels like this should actually be its own thing.  The only reason I put this in was because it kind of felt
[02:08:40] like, well, if I already had a store, might as well just put everything in the store, right? Because like, it didn't feel like it's natural upgrade. But we can change new title to be like this, right? And
[02:08:55] And it's more explicit too. It's a set state. You can just go like set new title to this. Right? Like, I'm actually -- this is actually reducing the code a little bit. I mean, sure, this one might not reduce the code. But you remove that one line.
[02:09:11] And
[02:09:13] Okay. Well, I'm like the guy who's like eating everything here. And replaces it with set new title
[02:09:22] So, I mean, arguably this is a little bit worse, but I think everywhere else is fine. Okay. Yeah. So,
[02:09:28] Now this should work. And now -- thank you code sandbox. The only way I'm not using the playground is because I'm using experimental versions of -- experimental but beta versions of solid. Okay, I'm not doing this right because I'm not reading from the store in the right place. I missed this one.
[02:09:46] Thank you.
[02:09:48] But essentially, unsurprisingly, like this.  The problem is this.
[02:09:57] you know, store to do's. What I really want is to just
[02:10:03] So create,
[02:10:05] to-dos, right? Like think about how much nicer this would be if I could just go
[02:10:11] set to do's, right? Because then all this garbage goes away. You don't sit on the object. You're just like, okay, I want to just
[02:10:20] set the new to-dos.  I could just do that, maybe.
[02:10:27] Back.
[02:10:29] No.  I mean, that's not bad.  Maybe or even just do me and my single letters.  Maybe pass in the previous state like this.
[02:10:38] kind of deal, like whatever suits your style.
[02:10:43] And -- oh, sorry. Set todos.
[02:10:49] This isn't any...
[02:10:50] more readable for the matter. And instead of like,
[02:10:55] That I just kind of want to do that.
[02:10:58] And
[02:10:59] I don't want to get rid of the string paths.  I just want to just--
[02:11:05] This...
[02:11:08] Here, we can use the T here. And get rid of all these.
[02:11:13] Thank you.
[02:11:15] We just want to be able to-- oh, that compresses a lot.  So nice.
[02:11:21] It's kind of like-- it's nicer because you can say what this thing is.  You're like, these are just to-dos, and you're setting the to-dos.  There's no set state and dot this and having all this stuff.  And then you want to be able to just type here and have it just work.
[02:11:34] And...
[02:11:37] The thing is, this has never worked in solid before, unfortunately, because of this property  access thing.
[02:11:46] I had enough of it.  So coming with solid 1.4, we finally  have top-level arrays in stores, which I think  is a huge boon for teaching and explaining.  Because remember that poor tutorial  that we were looking at where you went from signal to store?  Well, now you literally just change--  you keep the variables the same.  You just change this from create signal
[02:12:13] trade store and
[02:12:17] Um,
[02:12:19] Like, especially if you were using the functional form,
[02:12:24] you might even be able to keep most of the same code.
[02:12:28] Yeah, so this one's funny because I'm making a big deal out of it. The reason this didn't work before was because of this sucker right here.
[02:12:40] This
[02:12:41] isn't reactive.
[02:12:46] Thank you.
[02:12:47] Thank you.
[02:12:47] Thank you.
[02:12:49] Thank you.
[02:12:51] And I think I need to explain a bit about how stores work to understand the problem here.  But yeah, this one isn't reactive.
[02:13:01] And...
[02:13:02] There is a solution to this problem, but I didn't really want to make specialized array types and stuff and
[02:13:09] It's a little bit tricky because there's two problems.  Because you can conceptually look at this and go, well, who cares if it's not reactive?  If this is a for loop, it's going to access each key.
[02:13:22] So shouldn't it just track the keys? And it should track the length too. So if the length changes or any of the keys change, then it should update.
[02:13:32] So this is why I finally moved this way, because it conceptually made sense. The only reason
[02:13:36] that
[02:13:37] It wasn't
[02:13:39] working,
[02:13:41] Thank you.
[02:13:43] was because I'm a
[02:13:45] I'm so big on performance.
[02:13:49] It would be incredibly think about it.  If you change an array, you have to differ or reconcile it.  There's no escaping that reality.
[02:13:57] Because you need to like, I mean, there are some ways, but they're complicated. But generally speaking, it's the one place where diffing exists in Svelte or Solid or whatever, right? I mean, I guess technically there's a couple other smaller places. I shouldn't include Svelte in that because Svelte actually does this dirty check thing. Okay. But generally, like this is the guarantee place for most frameworks where they still do diffing. And I
[02:14:21] The thing is, if you know that any change array is always going to change the array,
[02:14:26] There's no point tracking every key separately.  So if you ever look at Solid and look at the map array implementation, well, in fact,  we can look at it right now.  We have it in front of us.
[02:14:39] MapArray, which is our underlying function underneath four,
[02:14:44] It sets some stuff up and then returns a function, which  isn't that important, which is our memo, which is our thing,  where it reads the list.
[02:14:54] Right. And then
[02:14:56] The first thing it does is call on track.
[02:14:59] And why does it call untracked?  Because I don't want to track every single index.
[02:15:04] And, you know, if your list is 10,000 items long, I don't want to track 10,000 indexes and check...
[02:15:11] All of those.
[02:15:13] You change or move one item in the list, I'm going to reconcile the whole thing anyways.
[02:15:18] I mean, I realize that might seem inefficient, but...
[02:15:23] The reconciliation code has to be there anyways, because of arbitrary list dumps. You might think, well, if you just swap an item, you can just swap it in the DOM and be fully reactive. But it goes out the window when people start random sorting, jumping stuff at you, especially with batched weight. You could do it.
[02:15:44] a random sort as a series of individual moves.  But applying it in a batch where order matters, like the complexity there of keeping that in check and applying it simultaneously,
[02:15:55] Um,
[02:15:56] is no
[02:15:57] less complicated than diffing.
[02:15:59] Okay. So, you know, I work on benchmarks that do crazy stuff like that, spams, like snapshots, like DBmon or UI bench. And yeah, it was just like, just diff, right? Sometimes diffing is the right solution. You know, people over-critically are the VDOM, they shouldn't be. Like, there's a time and a place.
[02:16:21] Thank you.
[02:16:22] Thank you.
[02:16:25] Hey, Ryan, some people catching in now.
[02:16:29] Right? So,
[02:16:32] So the trick here is I untrack everything so it didn't work because I only want to track the list, this one thing. And you're like, well, how does that work? Well,
[02:16:43] It comes down to the way the stores work. Can we save this? No, I don't want to save it. I'll just save this to my computer.
[02:16:50] Export, save to disk.
[02:16:52] Thank you.
[02:16:54] What do I call this one?
[02:16:58] Parallel.
[02:17:01] Cool, let's save that, okay.  Now, we're just gonna clear this and start over again.  It's because, okay, when you got a proxy,
[02:17:09] Let's say, and I'm gonna draw proxy as a node.  Okay, you've got proxy.
[02:17:13] You can pretend this is like...
[02:17:17] I guess we want something that has a list.  So this is going to be our store.  And then...
[02:17:23] Our store is...
[02:17:26] going to have
[02:17:28] A few users.
[02:17:32] All right.
[02:17:33] Thank you.
[02:17:34] three users in our list.
[02:17:40] It doesn't really matter what these are, honestly.
[02:17:43] Thank you.
[02:17:44] Thank you.
[02:17:45] Thank you.
[02:17:46] Thank you.
[02:17:47] and our users are going to have
[02:17:51] some properties.
[02:17:53] I mean, it looks like a reactive graph, but it's actually--
[02:17:57] Not exactly.
[02:18:00] So our user has some properties.  Okay.  Now, the thing is,
[02:18:06] The store itself doesn't track is the property access. So
[02:18:10] Let's make this index zero.
[02:18:13] index one,
[02:18:17] Thank you.
[02:18:17] index 2.
[02:18:20] you
[02:18:21] Thank you.
[02:18:22] First name...
[02:18:30] Thank you.
[02:18:33] Okay.
[02:18:34] Thank you.
[02:18:36] And
[02:18:37] Thank you.
[02:18:38] Last name.
[02:18:41] Thank you.
[02:18:42] But what I'm trying to get at here is...
[02:18:46] is that essentially when we have this kind of like,
[02:18:52] set up.
[02:18:55] You can access the property, obviously, and each one of these,
[02:19:00] will need a
[02:19:02] a signal
[02:19:04] underneath it somewhere.  And then, assuming this is an object,  we wrap it in another proxy, and it just ducks all the way down,  essentially.  Until-- well, this one, first name and last name,
[02:19:16] are primitive values so you can't wrap them.
[02:19:20] So they're just strings. But essentially each one of these
[02:19:27] He's
[02:19:29] the signals for its children, essentially, right?
[02:19:32] based on what key they're at.  So this top-level store has three signals.  This one, each of these has two additional signals,  potentially.  In Solid, we actually create the signals lazily,  only if you're listening.
[02:19:45] But, you know,
[02:19:47] Which is an important fact here because...
[02:19:52] I was trying with proxies to figure out how I could...
[02:19:57] have them be as super, super performant, essentially.
[02:20:03] And
[02:20:04] It was a tricky move.  And what I realized with my little trick of only listening is it's possible that
[02:20:13] to not have a signal
[02:20:16] Um,
[02:20:18] like only have the signal for the array,
[02:20:20] and not...
[02:20:22] for the others. Now, as you can understand, there's a problem here for  with with generally speaking, and solid stores have always had this, is how do you
[02:20:33] trigger
[02:20:34] yourself, essentially, right? Because I told you that this has three children on it,
[02:20:41] And now we're seeing that there's potentially another signal for yourself.  And what we did with Solid is we did it in two ways.
[02:20:51] Whenever you...
[02:20:52] access,
[02:20:54] Um,
[02:20:55] any property. So let's call it data access. Whenever you are, yeah, state access, store access. Whenever you access a property, we would
[02:21:08] we'd essentially you have the proxy and you have the key.  That's the way that it works.  So you would go track.
[02:21:15] property.
[02:21:18] And then what I would do.
[02:21:20] is I would actually walk into this.  And if this has a self,
[02:21:27] which not everything did, essentially, track...
[02:21:33] Thank you.
[02:21:33] properties,
[02:21:35] Bye.
[02:21:36] Does that make sense?  Now on the other hand, when
[02:21:41] Thank you.
[02:21:42] When you write,
[02:21:45] Access.
[02:21:47] Or I guess right.
[02:21:51] potentially
[02:21:53] Usually you just--
[02:21:55] essentially, like you'd say, I'm writing to this property. So I'm like replacing index zero, you  generally would just set property signal. However, I said that if it was an array,
[02:22:10] but also set self.  This is basically how we did this approach.  And we only...
[02:22:19] Basically,
[02:22:21] Only if it existed, because we here, when I say track property, it's like,
[02:22:26] It's actually and create if not existing.
[02:22:32] And
[02:22:37] Yeah.
[02:22:38] This is basically was the whole...
[02:22:44] I guess this one...
[02:22:47] All right.
[02:22:49] existing
[02:22:50] Bye.
[02:22:52] Yeah.
[02:22:53] So essentially, if you wrote to something,
[02:22:59] And so it sets self, I should say,
[02:23:02] if array set self. It was actually two things. It's actually if array
[02:23:09] And
[02:23:12] or
[02:23:14] New property or new delete property. Essentially on objects two, we would trigger it if it was a new or deleted property. Because if you iterate over objects, you basically had no way of knowing what's going on.
[02:23:30] Um,
[02:23:32] If, if, uh,
[02:23:35] Yeah, basically no way of knowing if something new is added.  Because, yeah, sure, if it's an object, you track and walk over the keys.  But if someone adds a different key...
[02:23:45] like let's say we add a middle name,
[02:23:47] you never track middle name so you would never know and you never iterate.  So I made it that whenever a new or delete happened, we actually triggered
[02:23:55] the self, which if you saw during the track,  when you access to zero, it actually tracks this one  and the self of this one.  So essentially it would overlap.
[02:24:07] um so as so writing a new um writing a new property to to this user would actually
[02:24:17] trigger
[02:24:18] this, which would actually cause the array of the top level object to run.
[02:24:25] And,
[02:24:27] This works pretty good, and this is what we were doing in solid for the longest time, but the top level one could never play this game because there was no way for it ever to trigger itself.
[02:24:39] That was basically...
[02:24:41] the whole problem because you just pass it in and there's no there's no self trigger.
[02:24:47] And I kind of didn't want there to be because I was like, oh, that's weird because like,
[02:24:52] sure I could expose it but then like someone like would have to know how to do it and then
[02:24:57] I realized recently that I was just being really dumb because the truth of  the matter is the only reason we hit a problem is because of the optimization.  If someone just goes right, it's a for loop, they're going to hit,
[02:25:07] all of these in the length and they're going to track them and it's going to  work.  The only reason you need to track self here is because the,
[02:25:15] I untrack all these accesses.
[02:25:18] So...
[02:25:20] Yeah.
[02:25:21] Yeah, I realized it was being dumb. So, but there's a, there's a problem here. The top level arrays are really cool, but the problem, and you may have seen this in solid before. So not many people have seen this before, but if I go const.
[02:25:36] store.
[02:25:38] Set store.  And I go create store...
[02:25:43] Let's go to do this because that's the game today. And put something in title I
[02:25:58] Um,
[02:26:01] What's the other one? Done.
[02:26:09] Awesome.
[02:26:11] Or this.
[02:26:14] Thank you.
[02:26:15] Thank you.
[02:26:17] Thank you.
[02:26:18] Thank you.
[02:26:19] Thank you.
[02:26:20] Thank you.
[02:26:22] Thank you.
[02:26:23] If I went into this, right?
[02:26:27] And
[02:26:29] and then made--
[02:26:33] Essentially, console.log.
[02:26:40] Store.
[02:26:41] Thank you.
[02:26:42] zero dot done. Let's say we just care that's time and import that. Import.
[02:26:49] Great. Thanks.
[02:26:51] that
[02:26:53] um
[02:26:54] You guys are like, where's the render in the reactive root?  Yeah, sorry about that.  I actually probably should be adding that.  I should update it.  New thing in solid--
[02:27:06] 1.4 is create effects are-- I batched them to the micro task queue top level because I thought it made sense, but no longer. They'll just run immediately like a create root would. It's more consistent. So that's another changing coming in 1.4. But what I was getting at here is that
[02:27:22] Um,
[02:27:23] If...
[02:27:25] OK, so why is this not--
[02:27:28] Yeah, let's just grab our example and pull it into a new playground.
[02:27:38] Let's go for Playground.
[02:27:43] Thank you.
[02:27:45] Move this up here.
[02:27:49] Thank you.
[02:27:50] Thank you.
[02:27:51] This is just my lazy way of --
[02:27:56] Thank you.
[02:27:57] That was a prettier format document of getting a route.  And I didn't need to do this, obviously.
[02:28:04] Okay, so...
[02:28:06] What am I doing wrong?
[02:28:10] Because this is--
[02:28:12] Strangely weird that we're not getting it printing at least
[02:28:17] once.
[02:28:19] Is it not--
[02:28:24] That's interesting.
[02:28:26] Thank you.
[02:28:27] I'm like, this is like you've been going for a while,  and you're just like, oh.  See, I'm already used to top-level arrays.  I didn't even see what I was doing.
[02:28:36] Probably that might have been it. No, that's not it.
[02:28:39] What am I doing wrong?
[02:28:43] Yeah.
[02:28:44] Thank you.
[02:28:45] You're right, I forgot to import render. Oh man. Import render.
[02:28:54] Oh, dear.
[02:28:57] The funny thing is, yeah, thank you.
[02:29:01] Yeah, thank you. You guys in the chat are quicker than me. Yes, right.
[02:29:05] Thank you.
[02:29:06] But what I wanted to show everyone was that
[02:29:09] If I...
[02:29:12] Thank you.
[02:29:13] I guess I didn't need the component because I need to set a timeout for this anyways.  If I set timeout to a second, I'm going to set timeout.
[02:29:23] and then set store and went to dos.
[02:29:28] One.
[02:29:31] Um...
[02:29:34] added something here.
[02:29:38] Hello.
[02:29:40] Thank you.
[02:29:41] Boo or something. Okay.
[02:29:44] When I went on the show.
[02:29:47] is...
[02:29:49] This kind of sucks.
[02:29:52] we're only listening...
[02:29:55] to one-- or sorry, we're only listening to zero.
[02:29:59] And
[02:30:00] When we set one, it's the new property rule.
[02:30:09] Mm-hmm.
[02:30:10] So, I'm going to say,
[02:30:13] So
[02:30:15] This method works most of the time, but I was kind of over subscribing and I was also didn't like the fact that I couldn't expose the stuff.  So I figured...
[02:30:26] It's funny, there was a discussion on Discord, and I realized there was actually a really, really, really simple solution to all my problems.
[02:30:33] which is that
[02:30:35] Thank you.
[02:30:37] Yeah.
[02:30:38] We were already doing this double thing, but what if we just change the rules a bit?
[02:30:44] What if,
[02:30:46] I
[02:30:50] Thank you.
[02:30:51] We are
[02:30:54] Always set self.
[02:30:57] Okay.
[02:30:58] But
[02:30:59] Thank you.
[02:30:59] Beamer can only create it here.
[02:31:02] Thank you.
[02:31:03] We put the condition here.
[02:31:07] If...
[02:31:11] Um,
[02:31:14] If something special, essentially.  You don't always track it.
[02:31:20] And that's if something special
[02:31:24] It turns out
[02:31:27] We can basically only choose to track self or create the self
[02:31:33] If...
[02:31:35] we're doing iteration.
[02:31:36] Okay. So,
[02:31:39] Let me go into the store implementation, show you what I'm talking about.
[02:31:46] Essentially,
[02:31:48] Let's go here. Own keys.
[02:31:50] - Track's all. Own keys.
[02:31:55] Thank you.
[02:31:56] essentially
[02:31:57] creates this. Let's see, is track self called anywhere else? Where is track self called? Let me --
[02:32:03] I think there might be a second place track itself.
[02:32:08] places.
[02:32:11] on keys
[02:32:12] which you trigger when you go like object.keys, or you know, that kind of thing, contract self, right?
[02:32:21] And the other place that can track self essentially is,
[02:32:26] is I added a new symbol to the proxy  that if you call $track, it calls track self.  And what this means is we now have this special property that
[02:32:39] and some people ask for this too, and I think it's kind of powerful, is that
[02:32:42] If you track it,
[02:32:44] it changes whenever any properties on it shall change. So essentially it triggers
[02:32:53] Basically, if you track it, if you change first name, it triggers this.
[02:32:57] or if you change the last name, it triggers this.
[02:33:01] Essentially
[02:33:03] what I did here was...
[02:33:08] For normal iteration, I don't have to worry about it.  Because people will either hit the keys
[02:33:13] specifically, they'll call length. So if someone for loops over, over just like a normal for loop, they're going to sure they hit the specific keys and you'll be like, well, what if they add one, they're not going to know if there's a new one, but they listen to length.  So if length changes, then it will trigger basically all the normal iteration without my optimization will work for in.
[02:33:34] The thing I had to handle was objects. So, object.keys has a special track self. And the other thing I had to do was
[02:33:42] in arrays,
[02:33:44] helpers, which purposely on track.  I just had the--
[02:33:48] add this one extra access here that goes,  oh, just check if the array has a track property.  If it does, then we're going to track it.
[02:33:57] And it's a small thing, and it means that anyone else who does these kind of optimal, like, untracked arrays, which basically people who write for control,
[02:34:06] loops.
[02:34:08] which we have for an index, and I think there's a key in solid permanence. They just got to do this. And I think there's lots of other applications, perhaps.
[02:34:15] for this kind of track symbol.  But between these two now,
[02:34:21] Um,
[02:34:22] essentially our example here in the playground,  if I took this example now and copied it to an environment  where we have the latest solid,
[02:34:37] - This works.
[02:34:39] Thank you.
[02:34:40] Thank you.
[02:34:41] it only console logs once.
[02:34:44] We're smart enough to know
[02:34:49] that this is only listening to this key, and we didn't touch that key. However,
[02:34:55] if we do a for loop,
[02:34:57] As you saw in my previous example,
[02:35:00] It still works.
[02:35:02] So we're able to identify when you're doing iteration tracking versus non iteration tracking.
[02:35:08] and keep perfectly fine-grained updates when you're not tracking iteration.
[02:35:14] So this is the hidden part, which is really cool. I don't know how to advertise it. So yes, we get top level arrays.
[02:35:21] in solid, but even, you know, it actually comes out of our ability to do even finer grain tracking.
[02:35:28] and be able to identify the difference between iterating over reactive state or stores rather compared to just accessing it.
[02:35:37] Mm-hmm.
[02:35:40] Bye.
[02:35:41] Thank you.
[02:35:43] Thank you.
[02:35:44] Thank you.
[02:35:44] Thank you.
[02:35:46] Thank you.
[02:35:46] Thank you.
[02:35:47] Thank you.
[02:35:48] No.
[02:35:50] No, but splice will -- actually splice might trigger light, but even if it doesn't trigger lights, you're hitting --
[02:35:57] the index. As long as the index changes,
[02:36:00] you're still fine. Like, obviously in my four helper, I'm
[02:36:07] purposely triggering the track. So it's going to work. But in a normal situation where you're  not doing that, Splice is changing the index.
[02:36:16] Right.
[02:36:18] So technically speaking, Splice isn't going to be a problem.
[02:36:24] So,
[02:36:25] Yeah, this is cool. This is an improvement. What's really cool about Solid's proxy approach, it doesn't have specialized types for -- someone asked if we support weak maps and all that stuff. No, we don't. Honestly, the problem with those are they're mutable. They're basically mutable APIs.
[02:36:47] I wasn't like our APIs are...
[02:36:52] read/write segregated. So if someone puts a set in a store,
[02:36:56] Like now something set store needs to know like what does it mean to set
[02:37:02] If you got to a map and you try, what do you call it? Do you call add? Does putting an index on it do something? Do you set a key? It would need special logic the way we're doing it. It doesn't make sense for those to go inside our immutable version. The immutable version is an interesting question, but essentially, yeah, I mean, maybe Solid should have always done this from the get go, but
[02:37:25] I think this is a really nice kind of addition.  And I mean, to prove my point again, let's just get rid of this now because it works top level.  And we should be able to...
[02:37:44] If I change this to to-dos,
[02:37:48] Did I miss one? It works top level, too.
[02:37:54] Yeah, I mean, maybe, obviously, we should have always done it, but this is still, like, just a really nice improvement.
[02:38:01] Okay, so...
[02:38:05] There is...
[02:38:07] I'm often really...
[02:38:09] critical on the mutable side.
[02:38:12] But, um,
[02:38:15] I am throwing Mutable a bit of a bone, so to speak, in the next release.
[02:38:21] There's actually more store work going on here.  And it's related to the issue I pulled up on GitHub.
[02:38:28] earlier, although let's see here, we talked about deferred streaming, talked about top-level
[02:38:34] federal scale resource reads,
[02:38:38] Um,
[02:38:40] Yeah, so I've got a couple things.  Let's talk create mutable for a second.
[02:38:44] Do-do-do-do.
[02:38:47] Yeah.
[02:38:48] Mutables need batching.  Okay.  This is an overstudy to my point part because I never used create mutable.
[02:38:55] Um,
[02:38:57] Yeah.
[02:38:58] like ever, ever.  I don't see a reason for it for the most part.  I created it so that like, do you know what I use  create mutable for?  Have you ever seen the X state solid integration?
[02:39:09] Sometimes there are APIs out there which don't let you
[02:39:14] get in there. They're just like, we handle stuff ourselves.
[02:39:18] And I'm like, I want to make you reactive.  So I'll sneak create mutable in there and be like, what  if I proxy your internal state and then you don't even know  you're dealing with a proxy and now I can intercept it.  And that's why I did it.  Basically, my first x state solid example
[02:39:37] was basically hijacking their internal state by wrapping it in create mutable.  And Xstate has no idea it's dealing with the mutable and the,
[02:39:45] Solid's basically able to
[02:39:48] listen to it and then reconcile the changes or whatever and essentially
[02:39:53] Ta-da, we have fine-grained state machines,  something you haven't really seen ever anywhere,  at least in JavaScript.  But I mean, okay, I don't know that for certain,  but if you look at all the other X state stuff,  even the stuff with reactive libraries, like Svald and Vue,  they don't do that.  The Vue could because create mutable is like they're reactive.  But we have reconcile, which is kind of our super power here.  But what it meant was,
[02:40:23] This...
[02:40:25] some weird stuff started happening because solo doesn't batch by default.
[02:40:30] So like,
[02:40:31] You'd like pop.
[02:40:33] And like, what the hell is going on?  The list is getting bigger.
[02:40:42] -
[02:40:44] So...
[02:40:45] Like,
[02:40:48] I mean, is this one actually doing push nodes?  Sorry, this is push.  Someone actually changed this example.  Okay, my bad.  But essentially, we're having this problem
[02:40:58] I wanted one of the ones that actually--
[02:41:02] Is this pop?
[02:41:04] Yeah.
[02:41:05] Yeah, it doesn't work. Essentially, the
[02:41:09] that
[02:41:10] The problem was that solid doesn't batch.  And when you're doing mutable, you're doing a bunch of--  our set state function batches.  So if you do a bunch of changes in it,  it all kind of works together.  But create mutable, you're doing line by line by line by line
[02:41:24] you can get in a weird state where you're halfway done moving something.  And it would trigger the array.  And then it would see the wrong thing.  And it would try and insert the same DOM node in two locations.  There's weird stuff like that.  Like it's keyed.  And then--
[02:41:39] you
[02:41:39] essentially just terrible stuff would happen. And, uh,
[02:41:44] I was pressed with this problem. I have to fix this. But the problem is I don't want to have special array types. The solution to the problem is when you have push or pop or these array methods, if you have a weak set or something, if you have some sort of mutable array methods,
[02:42:05] The proxy doesn't know what to do with it.
[02:42:07] Do I want to make custom wrappers for everything and bloat the library size? I want to deal with all this stuff. No.
[02:42:12] I like proxies because they're simple, and I didn't want to deal with any of this stuff.  Luckily, we actually figured out a really smart solution to this problem, which is kind of cool.
[02:42:23] I hope you understand the problem. The problem is you can literally
[02:42:29] be mid doing something you like pop something off
[02:42:32] It was erroring is essentially the thing.  I don't think we see the error here.  Yeah, here's the error.  Yeah, here's the error.  The reason it's not working is it's telling you can't find  reading name of undefined.  So what's happening is it pops.
[02:42:46] when you run the pop operation against a proxy,  what, yeah, this deserves more,
[02:42:54] more explanation, I'm sorry. If you create a proxy, you ever created a proxy before? You have const p equals new proxy
[02:43:04] Let's proxy an array and intercept gets. And target and whatever the property is. Okay? So,  we're not going to do anything special here. We're just going to return target property as  if we were never here. You're supposed to use the reflection API, but whatever. And
[02:43:22] This works too.  But what we're gonna do is we're gonna console log  what property we hit, okay?  So here we go, we got a proxy, okay?  Now, when you go,
[02:43:33] P.hop.
[02:43:37] Bye.
[02:43:38] you get two console logs. You get the pop event and you get the length.
[02:43:42] OK.
[02:43:43] And actually, I think to be more explicit, I'll show you what, because the read isn't that important. The set is more important. So what's cool about proxies is, even though you're calling pop, it's intercept everything. So, so I think it's
[02:44:02] So return true to say that I handle it.
[02:44:05] And then...
[02:44:07] I'll have the log set property.  Is that right?  Yeah.
[02:44:12] Thank you.
[02:44:14] Thank you.
[02:44:15] Get.
[02:44:21] Pop is not the best example. What's another operation? We've got to put some numbers in the array too.
[02:44:29] Thank you.
[02:44:31] Let's see, is this better?
[02:44:33] Thank you.
[02:44:35] Thank you.
[02:44:37] Pop isn't bad because pop just reduces a list, but let's try something like
[02:44:43] on let's start something like shift.
[02:44:46] Thank you.
[02:44:48] Here you go.  Shift is a good one.  Look, this is part of why I tell people  that using mutable proxies is--  proxies have-- you take a hit when you access them.
[02:45:00] And people kind of talk about, oh, you're always cloning arrays.  That sucks, right, when you're using immutable stuff.
[02:45:10] look what happens when we shift.  How many times do we hit the proxy?  Now times this by like 10,000, you know, like in a benchmark.  It's faster to not mutate.
[02:45:24] Anyway, so...
[02:45:26] get shift, so it needs to get it off the proxy first of all,  then get the length, then get zero.
[02:45:33] and get one.
[02:45:34] and then set
[02:45:36] zero, presumably with the value from one.
[02:45:40] get to set one with the value from
[02:45:44] to, you know, it just shifts them all up.  You can see get set, get set, get set, get set, get set.  And then finally set the length at the end to shorten the array.
[02:45:51] The problem was,
[02:45:53] without batching this in solid,
[02:45:56] What happens is
[02:45:58] Thank you.
[02:45:59] You get here.
[02:46:02] And then you set...
[02:46:04] Actually, these will all work fine. There might be some duplicates, so maybe that's a problem. When you get to the end, you set two.
[02:46:11] So you basically move four into three.
[02:46:15] Maybe this isn't the -- I'm missing -- do you know what I'm missing? Sorry, guys. I keep on missing the important part, lead property.
[02:46:28] Thank you.
[02:46:29] This is what happens when you do things impromptu. You miss really obvious things.
[02:46:38] delete.
[02:46:40] Target.
[02:46:43] property
[02:46:44] Thank you.
[02:46:46] True. OK.
[02:46:51] This is what I was missing.  Pop was actually fine too, probably.  If I do pop, you'll see it too.  Yeah, exactly.  Sorry, pop shorter.  It calls delete before it sets the length.
[02:47:04] which is nothing, it's not that important, you'd think, except it means that you put a hole in the array
[02:47:10] So when you don't batch this update, Solid sees the delete and sees an array that looks like, in this case, one...
[02:47:20] two, three, undefined, right?
[02:47:26] And then it iterates it with a for loop.  And then it hits undefined.  And it tries to read some property of undefined here.  That wasn't this example, was it?
[02:47:36] Where did I have it?
[02:47:40] This one, yeah.  See, cannot read property undefined reading name.  So essentially it gets here, does the for loop,
[02:47:48] tries to read cat.name, but it's undefined because
[02:47:53] We ran it.
[02:47:56] immediately.
[02:47:57] Sorry, which one is it?
[02:48:01] Thank you.
[02:48:01] Yeah, it's because we ran it here on the first mutation instead of waiting for all the mutations to happen.
[02:48:07] Right?
[02:48:10] Yeah.
[02:48:11] And
[02:48:13] I mean, there's an easy solution to this problem.  I'm not saying it's a good solution, but there is an easy solution to this problem.  Right.
[02:48:23] Yeah, batch everything. No, that's not the solution. But batch this, right? You can just go
[02:48:29] What if we just batch--
[02:48:33] You never hit this...
[02:48:36] when using
[02:48:38] the set state API or using produce because they're wrapped in set state
[02:48:42] and set state batches. If I do it now,
[02:48:45] after I fix this, Popworks, because it waits till the apply changes. So anyways, I didn't want to intercept everything. I was like, oh man, this is going to be a pain to solve. But the solution actually ended up being really, really, really quite simple here. Luckily, once we figured it out,
[02:49:05] Bye.
[02:49:06] if we figure if I mean this I only hacked it for a raise because this is all we have essentially if if the value is
[02:49:13] is
[02:49:14] a function that's on the array prototype,
[02:49:17] Instead of returning that function,
[02:49:20] proxy it. We already have a proxy, so just replace that function with a batch version  of that and apply your arguments again against the proxy itself. If anyone knows the third argument  to a proxy is called the receiver is the proxy object. You get the underlying target, you get the property, you get the proxy itself.  So you're able to basically apply it, the batch against the proxy again. So essentially,
[02:49:44] With
[02:49:46] solid 1.4, we can take
[02:49:51] this example, remove the batch. Again,
[02:49:57] You never hit this problem in Vue, probably, because they back everything all the time.
[02:50:02] But again, performance, right?
[02:50:05] And if we just drop this one in here,
[02:50:10] Upworks without batching because we inject batches automatically now on these array methods.  I didn't need to make an observable array. If you look into the source code, they have special array types.
[02:50:24] we have no special array types.  This one-liner basically saved us from a bunch of pain.  And it's why proxies are so cool.  And now you don't have to worry.  All the native array methods will automatically
[02:50:43] have this behavior and batch automatically for you.
[02:50:48] There was one additional example in here that
[02:50:53] was a good point.
[02:50:55] push...
[02:50:57] Recon-- Recon-- Reconcile.
[02:51:00] which usually people use a set state, but you can use manually with this unwrap kind of thing.
[02:51:07] Um,
[02:51:09] essentially
[02:51:11] Reconcile is doing a whole bunch of extra work here because it's triggering the partial states. What Reconcile does is it takes an immutable kind of structured clone change and reduce it into fine-grained updates. It's basically a differ for your data. And this is really terrible, whereas if you just change this call with a batch,
[02:51:35] Suddenly,
[02:51:36] And this only happens with create mutable. All our other APIs don't have this problem. So I never, you know,
[02:51:44] Saw it.
[02:51:45] If you put in batch,
[02:51:47] can do the same thing.
[02:51:50] now it stops. It does mount the original five initially, but then when you do the reconcile,  to remove the one item, it only removes the one item. Whereas before, when we didn't batch here,
[02:52:03] Thank you.
[02:52:03] Essentially, it was doing a bunch of moves.
[02:52:06] Yeah, mount the original items, but then after it
[02:52:10] remove three, it would recreate four and five.
[02:52:13] So, I think,
[02:52:15] This, though, isn't solved by my little proxy trick.  And I don't want to -- I was like, I could batch reconcile, but instead, I came up with actually a really simple solution.  I came up with a new API.
[02:52:27] for this.
[02:52:29] for mutables called ModifyMutable.
[02:52:32] It's kind of like a set state kind of thing, but it gives mutables now a really easy way to use modifiers the same way set state does.  So in this case, you could just pass the mutable in and pass the reconcile in, and then it'll just work and it'll be batched.  I mean, it's a small helper function, but it just makes our lives easier.  Sorry, I forgot to mention this.
[02:52:56] Since create mutable is actually based on all the same
[02:53:01] internal state and all the fun stuff we've been doing here with the stores.
[02:53:07] um you know all the all that stuff
[02:53:11] essentially
[02:53:12] simple clues.
[02:53:18] Thank you.
[02:53:19] CreateMutable now also supports top-level...
[02:53:25] Thank you.
[02:53:26] Thank you.
[02:53:26] I mean, I kept local storage in here, but this one's using create mutable. But again, you know,
[02:53:32] essentially to do's--
[02:53:34] you can actually see the batching in process in here. So this actually has both the batching and the top level arrays working with each
[02:53:44] CreateMutable if that's your style, so to speak.
[02:53:48] That's weird. Why are there these? Yeah, that's fine. So essentially, if I do this, we can push and everything works. Okay.
[02:53:58] Yeah, yeah. In my opinion, that's the main reason for this. I mean, I'm showing an example here where like
[02:54:09] you can do this kind of thing.  But yeah, I mean, I don't ever--  I almost never recommend CreateMutable.
[02:54:19] almost never.  I think there's some tree structures,  but most people who went that way  ended up using produce anyways.  So yeah, I...
[02:54:26] I think mutable proxies are super, super dangerous.  They're about the biggest foot gun I could give someone.
[02:54:37] And the thing is, like, Vue gets away with it because they have a VDOM.  Like, the worst thing you can do is trigger a re-render.  And as we all know from React, re-rendering over and over again isn't really that bad.
[02:54:49] Right.
[02:54:50] So like
[02:54:53] Yeah.
[02:54:54] In our case,
[02:54:55] If you did that butterfly effect earlier,  you could be recreating the actual DOM.  This is the trade-off.  There's less kids gloves with Solid.  That's how you get the performance.
[02:55:09] So I do my best to try and encourage people away from awkward patterns.  But you can do it, you know, and there are places, as I said, integrations are a big, big part of it.
[02:55:22] Thank you.
[02:55:23] Yeah.
[02:55:24] I'm
[02:55:26] I actually have more features, not that many more to dig into on the code side, but I actually have...
[02:55:34] Just a couple more things.
[02:55:37] notable mentions, I think, is the best way to call it. So yeah, we talked about deferred streaming, we talked about top level arrays and stores and like what that implication is, we talked about stale resource reads. But we haven't talked about this one, combining multiple custom renders. This one is kind of a little bit of a left field about what we've been talking about. But
[02:55:56] And you've seen this demoed on the stream before by Nikhil. And he made solid three, essentially. But he was sitting there and he's like, this really sucks. I made solid three, but I want to have DOM transformations in here. And sure, I can make a custom DOM renderer. If you guys saw that stream, it's pretty cool. I benchmarked it in the JS framework benchmark. And the custom DOM renderer that was like just a, I think we made it in code sandbox.
[02:56:26] that...
[02:56:27] Custom.
[02:56:30] DOM render, this custom DOM render we made in Solid on stream, that was -- where is it
[02:56:37] all of 62 lines of code.  I ran it in the JS framework benchmark,  and it actually came out almost the same performance as Inferno,  like ahead of LID, ahead of Svelte, ahead of Vue, just for this like--
[02:56:51] this really simple implementation.  But he was like, that's not good enough.  He's like, I want solids like...
[02:56:59] Vanilla JS level performance, and I want my 3JS too. So,
[02:57:05] You know, and like for some custom renders, it doesn't matter.  If you're in the terminal, you don't need the DOM or whatever.  If you're solid native, you probably don't need the DOM either, right?  But he was like, no, I...
[02:57:16] I want...
[02:57:17] the best of the best.  So he figured out a way that you can have multiple compilers working on the same thing
[02:57:25] You can actually have like template and have like three JS like native elements and the
[02:57:32] DOM native elements next to each other in the template,  and they'll get broken up the same way components get broken apart  from the static DOM nodes.
[02:57:41] And they can be compiled with separate compilers within the same file and essentially stitched together.  So with this little example, he took his universal solid three render, took the ultra efficient solid web render, stuck them together.  And he's got the both the best renders working together.  And now his little fork hack that he did himself is now an official part of our Babel plugin.
[02:58:11] renders within the same project, within the same template.
[02:58:15] So this, again, might seem a little edge case to some people, but it is super, super powerful.
[02:58:22] way of being able to kind of like, as I said, make the-- you know, maybe you have a canvas renderer and still be able to leverage Solid's DOM renderer.
[02:58:34] Um,
[02:58:35] Yeah. So yeah, let's see if I talked about everything else. Class name HTML4, deprecated.  Experimental refetch resources has been removed. This was something that we introduced in 1.3. It was a bust.
[02:58:49] We're still looking at other patterns here, but refreshing all the resources just
[02:58:52] doesn't work. Talked about synchronous top-level creative fact.
[02:58:57] Thank you.
[02:58:58] Bunch of TypeScript improvements.
[02:59:01] Our current component type
[02:59:04] was like had this optional children like it was a good default but it was hard to extend so now  our component type makes no assumptions about children and we're going to have a new parent  component which is one that could have children or flow component which means that it must have  children and and also avoid component which means no no children so we've improved the types around  components now which you know helps a lot being able to indicate whether children are necessary
[02:59:34] or not at all.
[02:59:35] Some other small changes I didn't mention, create resources, sources are now memos. So when you trigger them on refetch, they don't rerun the source again. We talked about create mutable. So yeah, that's most of the list here. There's actually one more feature that I'm working on right now that I hope to get in the release. And it's
[02:59:57] Um,
[02:59:58] I'm not a hundred percent
[03:00:00] I'm just unhappy with the solution, which is why I didn't showcase it off tonight.
[03:00:03] um,
[03:00:04] But there is...
[03:00:06] And you guys might view this more as a bug or something, but...
[03:00:10] I have a solution for it and I'm going to get to it, but you may have seen
[03:00:17] You may have seen this behavior before, essentially.
[03:00:24] I guess it doesn't really matter.
[03:00:29] Hmm. Signal. Create.
[03:00:33] Thank you.
[03:00:34] And
[03:00:35] Let's go const create.
[03:00:39] I guess it doesn't really matter what I put in the signal.
[03:00:44] And
[03:00:46] Let's go count, set count, for some other matter.  Now, if down here somewhere-- actually, I should have kept this at timeout.  I don't know why I've been getting rid of it.  I don't need it necessarily in these cases, but it helps separate stuff a little bit.  If I go in here.
[03:01:05] And they go console.com.
[03:01:08] Oh, my God.
[03:01:10] Thank you.
[03:01:10] count and we're going to go recount in this in here.
[03:01:15] And then I go,
[03:01:19] Set count count.
[03:01:23] plus or count plus one.
[03:01:29] and console log it again.
[03:01:36] Thank you.
[03:01:37] Thank you.
[03:01:39] Thank you.
[03:01:41] Thank you.
[03:01:42] Did I miss importing something again?  I guess I can check in there.
[03:01:47] This is the one fun thing that happens sometimes when you're in the playground. There it is. What's with that delay? Okay. Yeah, I broke something. Anyways. So, sorry. Count zero, count one. Unsurprisingly, right?
[03:02:00] You updated the account.
[03:02:03] batch from SolidJS.
[03:02:07] It has this behavior of applying all the changes, but it does more than just apply all the changes. It ensures that you have consistency within the timing of the batch. So if someone reads like a memo or something, it's going to be in the past because you haven't updated it, which means that the count also has to be in the past. So this is basically opt-in to React.
[03:02:24] like behavior.
[03:02:30] I don't know what's going on.
[03:02:31] The playground is like...
[03:02:38] There we go. Okay. So I have to open the debugger or something. Something's up. Okay. So,
[03:02:46] What?
[03:02:49] Yeah.
[03:02:50] Thank you.
[03:02:51] This is so weird.
[03:02:56] Thank you.
[03:02:57] Thank you.
[03:02:58] Thank you.
[03:03:00] Thank you.
[03:03:01] We saw it a second ago.  I just wanted to refresh this showcase it off.  And now it's like not...
[03:03:07] Doing it.
[03:03:09] Okay. That's --
[03:03:11] Fun.
[03:03:14] Oh, it's because I have 10 seconds.  I'm like blaming the playground.  Thank you, Brendan.  Everyone's like, yeah, 10 seconds is a long time.  Thank you.  Dumb me.  Yes, 10 seconds is a long time.  Okay.  See, this is opt-in to React mode, let's call it, right?  There's a reason.  Consistency is important.  Some people criticize React about this, but this is legitimate.
[03:03:35] There's a reason for this. So this is how batching works, and then it applies all the changes at the end.
[03:03:40] Now,
[03:03:42] It's crazy.
[03:03:43] As I said, there's reasons for it.
[03:03:47] However...
[03:03:48] Again, let's just change this to--
[03:03:52] something else.
[03:03:53] for various reasons and nesting and whatnot.
[03:03:58] um
[03:04:00] I suddenly changed this
[03:04:03] to store.com.
[03:04:07] Talent.
[03:04:13] or account
[03:04:17] And then change this to
[03:04:23] So, sec is it?
[03:04:26] store count
[03:04:33] Thank you.
[03:04:34] One.
[03:04:38] Thank you.
[03:04:39] You do see the update, even though you're in a batch.
[03:04:42] So this is kind of bad and kind of terrible.  I've known about this forever.  And unfortunately, this is actually tricky stuff.
[03:04:50] to solve because of the nested nature of stores.
[03:04:54] But I actually have a solution that works.  I'm just not sure I'm happy with it because it adds 200 bytes of code to the store implementation and requires me to expose something internal from signals.  So I'm working through the details of it.  But in the next version of Solid, this will be fixed.  And this will ensure consistency, not just with batching, but with transitions and stuff.  Stores kind of leak.
[03:05:24] detrimental of effects, but we're fixing it finally.  So stores, they are the most complicated  reactive primitive have, will now have proper async  and synchronous consistency through batching.
[03:05:42] If you ask, this is how it should be.
[03:05:45] Yeah, yeah.  Yeah.  Yeah, and even  a bit of
[03:05:53] There's a bit of a view take too.  I mean, if you've seen that old tweet,  like the reason batching is important is
[03:06:01] And I can kind of show this with...
[03:06:08] Let me get rid of the stores, because the stores clearly garbage now. Let's just go backwards so we can see myself work.
[03:06:16] The reason that the reason batching is important is because
[03:06:22] .
[03:06:24] If you...
[03:06:27] Let's count const.
[03:06:29] Hold count.  Holds.  Three, no.
[03:06:38] Count.
[03:06:39] Thanks, too.
[03:06:41] Right?
[03:06:43] We've all seen this before.  Let's call it--
[03:06:49] No.
[03:06:51] Thank you.
[03:06:53] Yeah.
[03:06:57] The problem is
[03:06:59] All right.
[03:07:00] The problem is this.  I'm going to get rid of our...
[03:07:03] batch for a second. And as people know, solid, um,
[03:07:08] And if we go--
[03:07:10] Console log count
[03:07:15] Thank you.
[03:07:16] Thank you.
[03:07:18] Times two.
[03:07:21] Thank you.
[03:07:22] equals
[03:07:24] Thank you.
[03:07:25] Double count. Okay.
[03:07:32] Thank you.
[03:07:34] Let's go.
[03:07:38] There we go.
[03:07:41] We'll make this console log again.
[03:07:44] Thank you.
[03:07:45] Unsurprisingly, because solid's like always update immediate kind of thing out in the wild, we get consistent. Zero times two is zero, one times two is two.
[03:07:55] Right, and actually, let's start from one. So, okay.
[03:08:00] Thank you playground. Okay. One times two is two, two times two is four. Unsurprisingly. Now,
[03:08:06] Think about it.
[03:08:10] Thank you.
[03:08:12] Thank you.
[03:08:14] Thank you.
[03:08:14] Thank you.
[03:08:15] Yeah.
[03:08:16] Thank you.
[03:08:18] This is telling me one times two is two,  and one times two is two.  And even though we set it up to two here,  once we get out of the batch,
[03:08:27] Thank you.
[03:08:28] Once we get here and we're done,
[03:08:34] Thank you.
[03:08:36] You'll see the update. But the reason we keep it inside is because when you're batching, so double count can't update.
[03:08:44] while we're batching.
[03:08:46] because we haven't notified it.
[03:08:47] And,
[03:08:49] If we let count increment,
[03:08:54] without notifying double count.
[03:08:57] we essentially create a glitch.
[03:09:00] You would see count...
[03:09:03] 2 times 2 equals 2.
[03:09:08] Thank you.
[03:09:08] Thank you.
[03:09:11] Amen.
[03:09:12] And
[03:09:14] Essentially, like...
[03:09:17] Yeah, I mean, there's different opinions on how this should go, but the old thing is,
[03:09:26] It's--
[03:09:27] In React, it works like what I just showed you.  Like you see the past all the time.  In Solid, you tend to, by default, see the future, right?  You see it right away.  If you open up Svelte and do this kind of...
[03:09:48] I don't know if I want to do this right now. It's fine. If you open it,
[03:09:52] You'll see...
[03:09:54] you'll see 2 times 2 equals 2.
[03:09:59] And that's why we say it's on glitch-free.  If you open view, you'll see the future too,  but they don't apply effects yet.  So if you added like a...
[03:10:10] a dom ref on the end here, you would see like
[03:10:14] 2 times 2 equals 4, but the DOM still thinks it's 2.
[03:10:21] So like there's a whole bunch of different opinions here, but essentially I didn't need to get into this probably right now.
[03:10:29] Batching.
[03:10:31] Like if you want consistency, either update everything right away or keep everything in the past until you can notify.  If you split it, it's called glitched.  And solid and react are both glitch free.
[03:10:45] because of this thing. And that's why the batching is important. And right now, solid stores break  my contract. So they are not good. But we will be fixing this in 1.4. So again, this is a small  thing that you probably haven't noticed or kind of slipped in the cracks. Maybe you don't use  batch very often. But now in 1.4, we're going to ensure we're glitch free across the board,
[03:11:15] Really cool stuff here.  I hope you all enjoyed.
[03:11:19] looking into that and understanding that. Yeah.  We did three hours on this stuff. It's amazing. I am...
[03:11:29] not
[03:11:30] Going to be around next week. So there's no stream next week. I hopefully will have stream the following week, but I'm actually traveling on Fridays, two Fridays in a row. I'll be back in town, but I'm not 100% sure I'll do that. So we might have a little silent radio silence, speak on the stream stuff at least. But I'm
[03:11:51] uh,
[03:11:52] When I come back, hopefully we'll be in a good place to pick up and start looking at some of the progress we've been basically, let's look at Solstard and see what's going on with that.
[03:12:08] Thank you.
[03:12:09] Anyway, yeah.
[03:12:13] I wish everyone have a great weekend. Thanks for joining me today.
[03:12:17] Thank you.
[03:12:18] Thank you. And I will see you all probably in a
[03:12:25] I guess two weeks or so. So until next time.
[03:12:31] Thank you.
[03:12:32] See ya.
[03:12:33] Thank you.