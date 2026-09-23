---
title: "E5amN0_1XyE"
slug: "E5amN0_1XyE"
duration: "1:02:28"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/E5amN0_1XyE.m4a"
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
[00:00:00] The promise.
[00:00:01] But I'm looking here at purely client side
[00:00:05] rendering
[00:00:06] What, you know...
[00:00:08] So I'm not focusing on primary backend frame, which you won't find an XJS on here.  And I'm looking at declarative libraries, jQuery,
[00:00:15] um, just doesn't make sense because it's like vanilla JS. Like there's no, like you can write  it as infinitely. If you want to know vanilla JS is God tier, it's above S tier. It's not even
[00:00:27] on here, but I mean,
[00:00:30] I'm not sure.
[00:00:31] Yeah.
[00:00:33] So like, yeah, yeah, jQuery is God tier as well from from that perspective.
[00:00:38] Right.
[00:00:39] We just had some fun here because I actually laid them out.
[00:00:43] in the order that they were released.
[00:00:46] Would you believe it that the very first
[00:00:48] declarative JavaScript framework that was released, not the most first to get popular,  but released by date was actually my buddy here, the big K, KnockoutJS.
[00:00:58] Um,
[00:00:59] At least so...
[00:01:01] I was thinking I'd just go in order, right?  Right from start to beginning.  But the truth of the matter is I realized  as I kind of sat and looked at this list  that there are definite reasons
[00:01:12] Anchor points.
[00:01:14] Right. And almost this whole chart has to be anchored around the most successful, most popular.
[00:01:21] most known JavaScript frameworks. Otherwise, you guys watching won't have a state of reference to understand what we're talking about.
[00:01:28] Yeah, there's three views. Actually, yeah.
[00:01:30] I mean, let's start with React because React is the
[00:01:37] it's the thing that everyone probably has experience with that they can put on a state of reference.
[00:01:42] Where?
[00:01:44] Should I put
[00:01:46] React.
[00:01:48] What do you guys think? I have an idea where I should put React, but I want chat to help me out here.
[00:01:54] Thank you.
[00:01:55] Bye.
[00:01:56] Anyone guessing where I'm going to put React?
[00:02:00] All right, we got an E. Come on, chat. I need some participation. An F.
[00:02:05] F, we got C.
[00:02:09] Raxian, I think it says it all C or D.
[00:02:13] C. Yeah, okay. B.
[00:02:16] C right in the middle.
[00:02:18] Z or B.
[00:02:21] Have to day.
[00:02:23] D, C, D, yeah, B, C. Yeah, so all over the place, right? This is why we have to start with React, because without React, we don't have a frame of reference. So...
[00:02:33] For me, React is a solid D tier.
[00:02:37] I think it is basically...  It's not the worst we've seen.  It's far from the best.
[00:02:46] Um,
[00:02:48] It's...
[00:02:49] still considered a passing grade.
[00:02:51] But...
[00:02:52] Barely.
[00:02:55] Let's keep on going. Okay, so now we have our frame of reference.
[00:02:59] All right.
[00:03:00] Let's go back to the beginning.
[00:03:02] Where should we put...
[00:03:05] Knockout JS.
[00:03:07] if React is a D.
[00:03:09] Where should we put Knockout.js? The first declarative JavaScript framework.
[00:03:13] used signals back in the day.
[00:03:16] - Yeah.
[00:03:17] Because I'm a stickler to performance, surprise, surprise, surprise, I see some B's going in there, B's, B's. Knockout's actually an E.
[00:03:27] I get why you guys see when it came to updating very specific parts of the Dom, Knockout to this day still runs circles around react. The problem with Knockout, though, was you had to create
[00:03:39] The page.
[00:03:40] You had to actually render the stuff initially.  And Knockout would go through your HTML templates and find all the data,  bind things, and then reprocess it, making it...
[00:03:50] making it actually incredibly slow to render.
[00:03:55] So, all right.
[00:03:56] Knockout.
[00:03:58] No, Knockout was a fine grained render. Actually, this this is actually why I'm doing this chart.
[00:04:05] Knockout, the very first framework, was a fine-grained renderer.
[00:04:09] It doesn't just have signals, it has what we're going to define as fine-grained rendering.
[00:04:16] It was the first fine grained rendering framework.
[00:04:19] It was the first one of the first
[00:04:21] possibly the first declarative framework, but it was it actually was a fine grain render and it had
[00:04:26] Signals.
[00:04:28] It just was so bad at actually...
[00:04:32] rendering the HTML. Like, that, like, Knockout was smart. If you changed a control flow, it didn't re-execute the whole tree, it did partial, like, it had all the aspects of, of, of,
[00:04:45] In fact, Solid's original control flow, I learned how to write Solid control flow by looking at Knockout's internals.
[00:04:53] Pinpoint updates.
[00:04:54] and modern fine grained control flow.
[00:04:58] It was a fine grained render. It just was bad at rendering.
[00:05:07] Yeah, so let's go. Backbone.
[00:05:10] Okay.
[00:05:11] Backbone is a tricky one.
[00:05:14] Back on...
[00:05:16] as described,
[00:05:18] would re-render
[00:05:20] the whole...
[00:05:24] Like, people would use Backbone and then they put, like...
[00:05:28] almost like jQuery type enhancements.  If I use pure backbone and had it redo the templates,
[00:05:33] Um...
[00:05:36] The thing you have to understand is this is all pre-virtual DOM.
[00:05:40] Knockout said...
[00:05:42] Hey, put a bunch of...
[00:05:43] you know, observable signals in there and update little things.  Backbone was like, we have models and then we revalidate views,  which means completely recreate them from scratch.
[00:05:55] Yeah, it's hard because part of me says that backbone should be like E.  I don't know if there's actually a considerable difference between backbone and knockout.
[00:06:05] Um...
[00:06:06] It's on the fence. I'd say it's below knockout, but is it an F tier?
[00:06:10] Um...
[00:06:12] I...
[00:06:13] Thinking of the benchmarks at the time, like the spinning circles and stuff, Backbone was actually fairly good on updates.
[00:06:20] I think that's going to put in the same category as Knockout.  This one's controversial, but let's keep back going with Knockout.
[00:06:29] -
[00:06:31] Mm-hmm.
[00:06:34] These are all client-side frameworks  that basically all do the exact same thing.
[00:06:39] They are literally there to create apps and update.  This is not something you choose because of a use case.  These are almost all completely equivalent.  They have special defining features,  but they're all almost equivalent.
[00:06:53] Right. And we are considering legacy here because we are starting historically.  Right. I haven't caught up to react yet.
[00:07:00] Um,
[00:07:01] AngularJS.
[00:07:06] Thank you.
[00:07:07] So
[00:07:08] AngularJS like Angular 1
[00:07:12] is a tricky one.
[00:07:15] It
[00:07:19] It
[00:07:20] It actually, and because of Benchmark of Time, look at Hype.js, React 14, or whatever, it's
[00:07:26] Actually, I'd say on average ahead of Knockout, but below React.
[00:07:30] which sticks it
[00:07:32] solidly in an E tier for me.
[00:07:35] It's close to D.
[00:07:37] Um,
[00:07:38] But...
[00:07:43] But like for me from performance and stuff angular one was never a
[00:07:49] like it was dirty checking. In a sense, you can say that Angular 1 was the first block DOM  approach. We'll get to that later. But it was a dirty checking system that did a lot of
[00:08:02] unnecessary cycles and re-rendering, and those things cost more.
[00:08:08] And the last one that I'm going to talk about that came out before React is Ember.
[00:08:13] Ember was like knockout.
[00:08:15] It had...
[00:08:17] Originally, Ember is over time has evolved. I probably should have more Ember on here. The only reason I won't have more Ember on here, because the newer versions of Ember did not actually ever change its performance profile.
[00:08:28] Ember to this day still is in the same place, even though it's completely been rewritten and new engines and glimmer and all this kind of stuff.  Unfortunately for Ember...
[00:08:38] Um,
[00:08:38] not everybody can be a winner.  Um,
[00:08:42] From a performance standpoint, Ember had great features. I was an Ember developer. I was a knockout an Ember developer. Brian Florence was an Ember developer.
[00:08:52] But
[00:08:53] Like,
[00:08:54] It was...
[00:08:56] It was basically just slower at everything.  Even though it used reactivity to do some kind of fine-grained stuff,  it was still even slower doing that reactivity.  And then they replaced their engine with almost something like a VDOM,  and it was still the slowest VDOM.  And then basically every...
[00:09:11] historical line of the way Ember has always
[00:09:14] been pretty slow. Don't get me wrong, there are
[00:09:17] frameworks,
[00:09:19] on this list that are slower than Ember and we'll get to them. But this is this is what the first  four years, three to four years look like. There was more frameworks but you guys wouldn't have  heard of them. I tried to pick frameworks that have like over 10 000 stars today. There's a few  exceptions but they're ones that possibly you could have heard of.
[00:09:37] Look.
[00:09:39] Now this is up to 2014. We're sitting at 2014 right now.
[00:09:43] React?
[00:09:44] Looks pretty sweet here.
[00:09:47] in 2014.
[00:09:51] We talked a little bit about each one. React, the first virtual DOM library comes out at this point, and it is significantly better, a whole category better than every other library that came out at its time.
[00:10:04] It was not the first declarative thing. It wasn't the first like, I'm just a view. Knockout was actually has the exact same advertisement.
[00:10:11] You know, but
[00:10:14] it was significantly better than everything up to this point.
[00:10:18] Right?
[00:10:19] You'll be like, where is it?
[00:10:21] Okay, this R?
[00:10:23] I just included this one because I needed something else also from that time period, 2013, 14 time period.  This is reactive.  This is Rich Harris's originally reactive framework.
[00:10:34] It...
[00:10:35] was used get.set  and set for its like signals  implementation. It's
[00:10:41] very early work in him making kind of like a knockout ask framework.  And in,  so it is also pretty solidly E tier.  But just want to give a quick shout out there because Rich Harris was already  there pre his felt days.
[00:10:56] Um...
[00:10:58] Thank you.
[00:10:59] Now we're getting into 2014. What else came out in 2014? Marco.
[00:11:04] Marco
[00:11:05] primarily a server-based framework, right?  They invented islands, out of order streaming, basically suspense.
[00:11:13] By 2015, they had all the features that we talk about these days.
[00:11:19] but we're talking about client-side rendering.
[00:11:22] So Marco...
[00:11:24] Surprisingly, I don't know if you guys know where Marco goes.
[00:11:28] Where do you, where do you, I see some S's and A's in there. I don't want to, I don't want to disappoint you all.
[00:11:35] But...
[00:11:36] Marco is not
[00:11:38] for client-side rendering thing.
[00:11:41] Marco is actually I'm gonna put D these days. I think it's kind of slid to an E  but
[00:11:48] It's always been very close to where React is.
[00:11:52] Thank you.
[00:11:53] Yeah, right
[00:11:55] Now we got view, and I'm gonna count this category as view 1 and view 2. I know there was improvements over it, but
[00:12:05] is actually an interesting one.
[00:12:09] You're guessing B tier? That's not a bad guess.
[00:12:13] Not a bad guess. C, I think. D tier, maybe C. Yeah.
[00:12:19] Yeah, view!
[00:12:21] I'm gonna give it our first C tier.
[00:12:23] Um,
[00:12:25] Bye.
[00:12:26] It, I don't know what about it. I think it was a slightly faster virtual DOM. They had signals under the hood to kind of make its re-rendering process a little bit.
[00:12:36] better. But generally, if I go back as far as I can, view has been basically
[00:12:43] just a category
[00:12:46] above
[00:12:47] React. Vue always underrated.  Yeah.
[00:12:50] Right, so view is pretty good.
[00:12:53] But Vue was not the only one. Around that time, single file components started showing up. We had things like Riot. I don't know if anyone's familiar with Riot. I imagine not, but I'll help you out.
[00:13:01] Riot.
[00:13:02] is...
[00:13:03] Also a C.
[00:13:06] Um...
[00:13:09] Like Vue, these are new VDOM libraries that use signals, essentially, or under the hood, some reactivity to trigger their VDOM.
[00:13:19] in the 16 period.
[00:13:21] You guys might not know this one, Mithril.
[00:13:24] This one was like a faster, pure functional approach to the VDOM.  I'm also going to put that as a C.
[00:13:29] Basically, people saw React and they're like,
[00:13:33] We can do better.
[00:13:37] Right.
[00:13:39] Yeah.
[00:13:40] And
[00:13:41] They did.
[00:13:43] Honestly.
[00:13:45] As
[00:13:47] as time kind of went on, we start seeing things fill in.
[00:13:53] Pfff.
[00:13:55] Where's Aurelia? Yeah, I don't have Aurelia.
[00:13:59] To be fair, I--
[00:14:00] And I just realized I don't have Elm either.
[00:14:06] Yeah, this is one of the first...
[00:14:12] like compiled to JavaScript framework pieces.  So let's get Elm in here.
[00:14:22] 'Cause Elm...
[00:14:25] Is
[00:14:27] Might be...
[00:14:29] It's hard. It's it's either C or
[00:14:32] Or it's
[00:14:34] Yeah, I'm trying to think of, because I know offhand where Elm sits...
[00:14:39] These days?
[00:14:40] Right. It's kind of a
[00:14:43] It's kind of a C.
[00:14:45] Maybe.
[00:14:47] But I feel like historically it might have been more of a B.  So it's like...
[00:14:53] Oh, it's tricky. Let me...
[00:14:57] I'm actually going to pull up an old GS Framer.
[00:14:59] benchmark with Elm back in the day.
[00:15:02] Just to kind of get my bearings here, yeah, let's look at this.
[00:15:08] Elm. Because like
[00:15:10] Okay, mithril 122.
[00:15:13] View 2
[00:15:14] 115.
[00:15:16] Uh...
[00:15:19] Yeah...
[00:15:21] Elm is...
[00:15:23] 1.34.
[00:15:25] Ember is 2.14, just to give you... I don't know why Mithril is slow on this one. This is pre-release, yeah. Mithril is like 1.22 there, okay. Yeah, okay, that's good enough for me. I'm going to put Elm as a solid C.
[00:15:36] Thank you.
[00:15:37] Okay, so there we go. We got L in here.
[00:15:40] You certainly see a trend, right?
[00:15:43] Um...
[00:15:45] Okay.
[00:15:46] It was a VDOM like React. But again, what we're seeing here is a bunch of VDOM libraries that are slightly improved over React.
[00:15:56] So
[00:15:57] The next one on here is important. This one, honestly, I think is going to be the most controversial thing.
[00:16:02] placement for me.
[00:16:05] Where does Inferno go? Because there's clearly a trend. You're seeing how we're kind of building up. We started in E
[00:16:11] React showed us that D was possible...
[00:16:14] And then, you know, Marco came in and then a bunch of these guys improved. But then...
[00:16:18] out of
[00:16:19] left field, we get Inferno. And
[00:16:23] Inferno, if you go look at tests and stuff today, it's probably verging S tier, but...
[00:16:30] The thing is, the funniest thing about Inferno is...
[00:16:34] About two years ago,
[00:16:36] something changed in the browsers and Inferno suddenly got faster without the code changing.
[00:16:41] So like, should have it always been faster?
[00:16:44] most of Inferno's life,
[00:16:46] It's been a solid, sorry.
[00:16:50] A solid A tier.
[00:16:52] Oh, why can't I drag anymore?
[00:16:54] So I'm gonna put it here for now.
[00:16:57] It's questionable.
[00:16:59] But...
[00:17:01] But it's...
[00:17:02] It's it's
[00:17:04] It was the first framework that was like, like it just skipped the category. There was no B frameworks. Things that people are just kind of creeping past React to see. And Inferno was like, yeah, yeah, you guys, this space is a lot bigger than you thought. Like when React came out, people were like, oh, we probably hit web rendering performance pinnacle, you know, and Inferno was like, you guys aren't even halfway there. Um,
[00:17:28] What's questionable is whether Inferno should be S tier.
[00:17:34] Yeah, Power Static Analysis is in JSX.  Dominic Ganaway...
[00:17:40] way ahead of time in its approaches in terms of optimizing.  He took something that looked like React,
[00:17:45] and made it way faster by clever engine level optimizations and using static analysis on JSX, which would later lead him to get hired at Facebook to work on prepacked for the React core team. And
[00:18:02] his compiler skills to come up again because he was also the lead on Svelte 5.
[00:18:06] Um,
[00:18:07] So this is, I already mentioned where Rich Harris kind of jumped in the game, back with Reactive, but
[00:18:13] Dominic made quite the...
[00:18:16] Debut.
[00:18:17] irrelevant for the stream.
[00:18:19] Yeah, he worked on Lexical at Facebook as well.
[00:18:23] kind of the React core team,  the tricky part with compiler analysis  is you need...
[00:18:30] to set some certain boundaries or rules or constraints around it.
[00:18:34] And the React core team with the concurrent model wanted to go a different way.
[00:18:38] So basically they weren't able to apply his optimizations.  And he found himself kind of sitting on the React team and being like,
[00:18:46] How do I...
[00:18:47] fit in, the projects that interest stuff that they hired him for, you know, because like, he basically blew everyone away with Inferno. He found himself like not being able to actually
[00:18:55] work on React moving forward. So we picked another incredibly difficult problem, which is getting high performance in text editors, along with accessibility.
[00:19:06] Thank you.
[00:19:07] So there we go.
[00:19:09] We got Inferno.
[00:19:10] - Yeah.
[00:19:11] All right.  Next is Preact.
[00:19:14] Where do we think Priyat come up? Those two came up almost, I think, a month or two apart from each other. We're right at the end of 2015 right now.
[00:19:23] Thank you.
[00:19:24] Thank you.
[00:19:25] No, I will not be placed. I follow benchmarks. Preact actually from a performance standpoint has always basically been another one of these C's.
[00:19:36] It's.
[00:19:37] It's a good C, but it actually, most of its life has lived very close to view, maybe even slightly behind view.
[00:19:47] So, Preact's gonna be a C.
[00:19:54] And
[00:19:55] Next one, I'm using the modern logo, but I'm only going to give Angular a second thing. It's arguable that Angular 19 forward or the next version of Angular, like there should be another Angular at the end of the list and it should use this new logo, but I'm now doing Angular instead of AngularJS.
[00:20:13] Order doesn't matter.  I'm just putting them in the order that they were released  at the specific tier.
[00:20:20] So,
[00:20:21] Angular 2, 3, 4, 5, whatever.
[00:20:25] *laughs*
[00:20:26] D, maybe even E. Anyone else got any guesses where I should put this?
[00:20:38] Thank you.
[00:20:40] Thank you.
[00:20:41] I'm waiting on ya.
[00:20:43] What do you got? E, D, C, S, D, C, yeah.  Angular.
[00:20:54] Angular has always, this is the weirdest thing,
[00:20:58] I don't know how they do it. Angular?
[00:21:00] and React have been lockstep
[00:21:03] for basically
[00:21:04] forever I like
[00:21:07] Only recently, that's why I mentioned it, in the last year or so, I've been seeing stuff, maybe different types of control flows and stuff, like things starting where Angular is separating itself.  But no matter the release, no matter what came out, React got a little bit faster, Angular got a little bit faster. They basically have been lockstep for all of time.
[00:21:26] Thank you.
[00:21:28] Right?
[00:21:30] Is the same at the... The funniest thing is most frameworks actually move up at the same time. So generally, actually, yes. There's not enough. It's very rare that frameworks actually move more than maybe half a tier away from where they were sitting, comparative to their competitors.
[00:21:53] No, this is not Angular powered by signals. This is...
[00:21:57] Angular, like for the last, like this is Angular 2 through...
[00:22:02] I don't know, 17 or whatever.
[00:22:06] Um...
[00:22:07] Yeah.
[00:22:08] Angular with signals is probably a C.
[00:22:12] Maybe even a B. The funny thing is, Angular tends to actually always be just a tiny bit ahead of a React.  It's funny because when you talk to the Angular folks, they're like, React, I don't...
[00:22:21] I don't pay attention to React. I don't look outside of Google, you know, like historically.  But they've always somehow managed just to be like right there or like right in front of.
[00:22:31] All right.
[00:22:34] Now, we get spelt.
[00:22:38] One.
[00:22:39] and two. So let's, we get Svelte one and two. I'm not that familiar with Svelte one, but I'm,  so this is basically Svelte two.
[00:22:48] Svelte
[00:22:49] one and two,
[00:22:51] is...
[00:22:53] Any guesses?
[00:22:55] I know because I'm the one who did the upgrade from Svelte 2 to Svelte 3 in the JS Framework benchmark.
[00:22:59] Um,
[00:23:01] But this is Svelte 2. This is before it got the updated syntax in the new compiler and all that kind of stuff.
[00:23:10] Got some Cs, some Bs, some Ds, B or C, yeah.  I'm going to say that's felt too.
[00:23:15] Oh man.
[00:23:17] was a significant improvement over, or Svelte itself was a significant improvement over Reactive, but it is also C tier.
[00:23:26] Yeah.
[00:23:27] A little bit.
[00:23:29] The disappearing framework thing really caught on with Svelte 3.  If you've never seen old Svelte 2, it looks more like Reactive.  It had like...
[00:23:38] single file components, but it had like .get and .set for state.
[00:23:42] There's no like let variables. Svelte 3 is a svelte that everyone knows.
[00:23:46] This is the Svelte that...
[00:23:48] Now, that was 2016.  That was actually the end of 2000s.  Towards the end of 2016.  This framework might have actually come out before Svald and I might have put in the wrong order.
[00:23:58] But we have Inferno at A.
[00:24:02] And...
[00:24:03] Um...
[00:24:04] Everyone else is kind of below it
[00:24:06] I'm gonna... this one here is a small framework
[00:24:13] Blazer has a client...
[00:24:15] rendering framework.
[00:24:17] to my knowledge.  HTMX does not.
[00:24:22] Blazor actually has like a JavaScript framework that does rendering.
[00:24:29] This one here is a small one. This one's called Imba. It was made by like the Scrimba people. It was a compiled language kind of like Elm concept.
[00:24:38] And they...
[00:24:40] They...
[00:24:43] they kind of called it out as like the fastest framework.  They made this stupid benchmark that Rich ended up using  in the Svelte 3 release where they showed it was like  20 times faster than React.  The reality is,
[00:24:56] It wasn't.
[00:24:57] But
[00:24:59] If you're looking at the time and the type of frameworks that were popular and available,
[00:25:03] There were other faster frameworks. I don't have the fastest VDO on things. They weren't that popular. You can imagine when Inferno came out that there's half a dozen other smaller frameworks that work like Inferno, but nothing that caught on.
[00:25:18] Imba
[00:25:19] Solidly
[00:25:21] Many of you probably don't know it, but it's going to be our first...
[00:25:26] be...
[00:25:28] Bye.
[00:25:28] Can't drag on this computer at all because it's stupid.
[00:25:31] It's going to be our first B tier framework.  It actually did have significant performance improvements over what had come before.  But it was it wasn't quite the same.
[00:25:43] Again, it was a virtual DOM approach.  It was leveraging a compiler, just not as efficiently as...
[00:25:50] Inferno. Its big point of sale though was like the DX. If you've ever seen it, it's like CoffeeScript almost. And the templating like CoffeeScript. It's like this, it's completely its own language.
[00:26:01] Yeah.
[00:26:02] Yeah, the marketing on IMBA was really good. I remember that.
[00:26:08] All right.
[00:26:09] So we're
[00:26:11] basically at 2016 right now and
[00:26:14] Between 2010 and 2016,
[00:26:17] we went through half the list. It was a very fast period. We went from 2013-14 with React to filling in the rest of this chart in almost no time.
[00:26:26] Right?
[00:26:31] Um...
[00:26:32] Next one I got here is HyperApp. It's got like almost 20,000 stars on GitHub, you probably don't remember. This is when libraries started, like Preact kind of started this small library thing because Preact was only 3 kilobytes. Hyperact was like, can we do it in like 1.2 kilobytes?
[00:26:47] Um,
[00:26:49] HyperApp
[00:26:52] is...
[00:26:55] performance-wise was, you know, a VDOM or whatnot.  So it's...
[00:27:00] It's...
[00:27:01] It was small so it loaded faster.
[00:27:03] But it is still going to be... this dictionary popping up is so much fun.  It's still going to be in this category, I think.
[00:27:11] Um, that's why I feel like I don't know if anyone knew it.
[00:27:16] Why was Preact faster than React even before signals? Preact always went with a slightly lighter, more optimized version of it as VDOM.  Preact and React historically have been closer in performance than people give them credit for.
[00:27:28] Um...
[00:27:30] But they've generally always just been a bit ahead.
[00:27:34] A lot of people, when Inferno came out, they assumed that Preact was up with Inferno.  Those are the two leading things.  But Preact and React were a lot closer than Preact was to Inferno.
[00:27:49] It, Preact was created probably for size, I think. I don't know, we'd have to ask Jason Miller, but Preact was considerably smaller. React even back then was still like 30 some odd kilobytes. Preact was 3 kilobytes. Inferno split the difference around 8 or 9 kilobytes, or maybe 10 kilobytes. But,
[00:28:06] Inferno was about speed.
[00:28:14] No, Preact is still a VDOM until this very day.
[00:28:18] Preact is...
[00:28:19] Yeah.
[00:28:20] It...
[00:28:23] This is why there's a lot of misconceptions out here. I really want to clarify on some of these parts.
[00:28:29] Um,
[00:28:31] If there was a major change like Preact stopped being a VDOM,
[00:28:34] um i i we will get to it um and we'll have a separate category but
[00:28:39] Preact is still here.
[00:28:40] So
[00:28:41] Okay, I got one for you all. Lit.
[00:28:47] There's any...
[00:28:49] It's funny because I didn't put this out here because people start saying like their favorite web component frameworks like shoelace or whatever. Generally speaking,
[00:28:56] Web Components will add a tier
[00:28:58] to your performance. So like if you're an A framework and you made the web components, actually, that's not true. If you're towards the top end, like an S or an A, it'll take two tiers off.
[00:29:08] And then if you're like maybe like D, it'll take one tier off.  So if you had React and put in a web component, now you have E.  If you had an S tier,
[00:29:15] and you put it in web component, now you'd have a B tier thing. So lit
[00:29:20] itself, I'm talking about the renderer. I'm not talking about the web components. I preact. Yeah, no lit has no VDOM. It's a dirty checking system, but it and another lighter HTML, I think, or what was the original one hyper HTML, hyper HTML by
[00:29:36] which actually came out before Lit and did exactly the same thing.
[00:29:39] Just, as I said, not as popular. And he made like four different frameworks. Every time he came up with a new version, Andrea Diomache ended up like making it different and then getting different GitHub stars, unfortunately. So it never got...
[00:29:52] popular but hyper HTML,
[00:29:54] in the spring of 2017,
[00:29:57] pioneered a completely new type of renderings
[00:30:00] bringing back dirty checking,  but leveraging the fact of cloning templates.  And more specifically, template literals.  Because template literals have this weird property.  I don't know if you guys know,  with tag template literals,  it remembers...
[00:30:12] the static array, like the static strings that you pass to it. So if you have a
[00:30:17] I mean,
[00:30:18] I can just put something in here so you can see what I'm talking about.  But if you have a tag template literal, like HTML,
[00:30:24] and you have a function like
[00:30:26] Let's say function.
[00:30:28] my component.
[00:30:29] Right.
[00:30:31] And then in here you have this, right? So you return HTML.
[00:30:35] And then...
[00:30:37] You put like, I don't know.
[00:30:38] Div.
[00:30:41] really care, whatever. And then you have some interpolation in here where you have like some value five, whatever.
[00:30:48] This gets converted into essentially HTML function, and then it's like an array of static.
[00:30:59] And then like a list of...
[00:31:02] the holes, right? And this static array
[00:31:09] is static forever. If you call this function 10 times, they don't recreate this array.
[00:31:14] They just know
[00:31:15] this array exists, which means that you can use this array as a stable reference, even if you re-render or re-call this component over and over and over again. In a sense, it works like a VDOM.
[00:31:26] But,
[00:31:28] Um,
[00:31:29] it only fills in the holes by dirty checking the values in the holes. And the static arrays serves as a stable reference, kind of the same way that React hooks would keep references or whatever. Like, and this is an interesting property built into the base of the tag template literals, but it basically invented a whole new type of rendering back in 2017.
[00:31:48] It works like an Inferno V-DOM, kind of, yeah.
[00:31:50] And
[00:31:52] in so
[00:31:54] lit.html is small
[00:31:57] Fairly small, maybe about 12 or 16 kilobytes.
[00:32:00] And it's our second A tier. Something finally joined Inferno at the top. So, um,
[00:32:08] Credit goes or, you know, credits do, so to speak.
[00:32:13] Even if.
[00:32:15] Lit.
[00:32:16] you know, with the web components and everything ends up maybe a B to C tier. Lit HTML is a
[00:32:22] brilliantly fast render.
[00:32:27] Thank you.
[00:32:29] all flames is a pattern right well i mean blazingly fast you know this is this is the  original or the original blazingly fast inferno right so these flame logos were  a good way of showing people that you're blazingly fast
[00:32:47] Okay.
[00:32:48] Okay, now we're getting into 2018.
[00:32:53] This one you guys might have heard of.  It's called Alpine.
[00:32:57] Um...
[00:32:58] It... let's see if you can guess where it goes.
[00:33:01] It's a fine-grained...
[00:33:03] rendering
[00:33:05] system, like some of the earlier ones we saw, like Knockout, it uses signals. It does not use a VDOM.
[00:33:12] And it uses template data binding, kind of like Knockout did.  So when it renders the template, it has to parse through the HTML to...
[00:33:23] to get its bindings.
[00:33:28] Thank you.
[00:33:33] It is based on Vue's reactivity package, but as people should know, reactivity performance actually doesn't impact render performance very much.  Like if your reactivity package is very slow, it will, but if you take...
[00:33:46] almost any modern one and swap it, your framework won't be faster.
[00:33:53] That's not true of like five years ago, but these days, like the optimal change between reactivity doesn't make a difference.
[00:33:59] - Thank you.
[00:34:00] Alpine
[00:34:01] is going to be our second one to go in the F category, actually. Alpine
[00:34:09] has fast reactivity, but its templating is slow, even slower than knockouts.  They didn't optimize
[00:34:17] things like control flows, even though it was fine grained.
[00:34:21] Um...
[00:34:22] It's...
[00:34:23] Interestingly enough, because they got the view reactivity in their own stuff, it's not even particularly small.
[00:34:31] Um,
[00:34:32] Like, if you remember, there was a petite view thing Evan made over a weekend.
[00:34:36] Um,
[00:34:38] Because someone made some comment about, you know, Alpine being like a better view, even though they was using views JS reactivity. And I think that you don't piss off in you, especially when it's something that like literally he could spend a couple hours because view one was kind of like Alpine or closer to knockout and...
[00:34:58] So essentially,
[00:35:02] Thank you.
[00:35:03] It's
[00:35:05] It's basically knockout.
[00:35:07] but maybe slightly smaller than Knockout, but generally just
[00:35:12] Similar approach to Knockout.js, just kind of worse.
[00:35:25] Um...
[00:35:27] Yeah, I don't know. It's an interesting one because
[00:35:31] In some ways, it's really easy to adopt Alpine for
[00:35:36] backends the same way it was easy to adopt Knockout or Backbone or some of these original tier ones for backends, which has made it popular. It's like a retro version.
[00:35:43] But in some ways,
[00:35:44] it hasn't actually improved and maybe even slightly worse than the original.  Like in some ways Alpine is better. They're better at
[00:35:53] handling what I call like hydration type scenarios where you're like trying to  wake it up in the client, the knockout, knockout never really considered those kind of scenarios.
[00:36:02] But on a raw performance level in the client, Alpine is...
[00:36:06] Yeah, see, everyone says it'd be biased, but the benchmarks don't lie. Solid, I'm gonna obviously...
[00:36:13] Where am I going to put solid?
[00:36:19] A tier? No.
[00:36:20] So it was the first S tier according to the modern, to the mod.
[00:36:25] Did modern, the funniest thing is it kind of did.
[00:36:29] But it didn't do anything.
[00:36:31] The browser's
[00:36:32] changed. So this is why I said Inferno was the most
[00:36:36] controversial thing here because the browser changed and now Inferno and Solid are almost next to each other.  Inferno might be like slightly behind, but it was from no change on Inferno's part.
[00:36:46] the browser changed.
[00:36:52] I'm not.
[00:36:53] So we've seen some compiled JS libraries.  Yeah, Blazor also came out in 2018.  And we're getting into the compiled languages that aren't JavaScript.
[00:37:01] Blazer
[00:37:03] Some people made a joke that Blazer could have its own category, and they're not wrong.
[00:37:08] Blazer
[00:37:11] Blazer is basically
[00:37:14] It almost feels bad putting Blazer next to Alpine and Ember because
[00:37:20] Alpine and ember are
[00:37:23] at least a tier's worth better than Blazor.  Blazor is essentially
[00:37:29] Like it's hard to, like if you went out
[00:37:35] And just...
[00:37:38] took some JavaScript and then like...
[00:37:43] JSON stringified it, and then...
[00:37:46] inter-HTMLed it everywhere and like,
[00:37:50] didn't
[00:37:52] like didn't do anything you could think of optimally, it would probably be faster than Blazor.
[00:37:57] Um
[00:38:00] it's not Blazer's primary purpose,
[00:38:03] But it's like...
[00:38:07] Yeah, I don't know.
[00:38:10] HTML is fine. It's just that.
[00:38:15] Okay, next one.
[00:38:17] Another first of the Rust libraries. This one was based on React. It's called U.
[00:38:22] It's a Rust framework that renders
[00:38:26] a BDOM, just like React.
[00:38:29] See, what I'm hoping you get at here, for the most part, is from this point on, we can start getting more accurate at guessing where these things go.
[00:38:41] Yeah, you spelt Y-E-W, like the tree.
[00:38:50] Okay.
[00:38:52] Any guesses for you?
[00:38:54] Did anyone even know you?
[00:38:56] *sniff*
[00:38:58] Bye.
[00:39:02] Probably fast and reactive slower than me.
[00:39:05] There is an overhead of doing Wasm in the browser that people have to get over, and you was not the one who figured out how to do it. That being said, you was impressive.
[00:39:13] because as the first Rust compiled framework, it actually did a decent job of
[00:39:18] matching its...
[00:39:20] its influence. So you here is
[00:39:25] I can spread these out a little bit. U here is actually a D tier.
[00:39:30] Yeah, Wasm has overhead.
[00:39:33] because of the communication and the serialization boundary.
[00:39:41] So,
[00:39:43] Pretty cool to see Rust on it. We've got
[00:39:45] Blazor, some C#. We got Elm. We got Imba. You know, where's Imba here? Some different, you know, compiled languages.
[00:39:56] But, I mean, U has almost 30,000 stars on GitHub.
[00:40:03] Okay, now we're in for a big one.
[00:40:06] One that really revolutionized the way people think.  This is Svelte 3.
[00:40:10] Um...
[00:40:13] Svelte 3
[00:40:15] Um...
[00:40:17] was a pretty significant jump up from Svelte 2.  Not the biggest, to be fair, but Svelte 3 definitely...
[00:40:25] was an improvement here.
[00:40:27] Technically...
[00:40:29] It...
[00:40:30] Everything had been revised with the new compilation, but mechanically it was the same general idea where it was doing dirty checking that was compiler optimized.
[00:40:39] Um,
[00:40:40] But I think Rich had moved away from...
[00:40:44] I don't know if he compiled the signals in one or two, but he'd moved away from from the like old reactive co-
[00:40:50] reactivity and almost went straight to like, let's get rid of it all. Let's just use the compiler on the language.
[00:40:56] So yeah, Svelte.
[00:40:58] We got some guesses. We got B plus B, A. Yeah, B plus is actually probably...
[00:41:04] the, the, where this Svelte 3 goes.
[00:41:08] I think, I think...
[00:41:09] It is a good B framework. It is...
[00:41:12] I'd say slightly better than Imba for performance.
[00:41:15] We're going to copy one of these.
[00:41:18] I'm
[00:41:19] Thank you.
[00:41:20] So we have seen over time, libraries kind of start getting up there.  But like in terms of a timeline...
[00:41:27] I
[00:41:29] *buff*
[00:41:31] - This group has been taking a little bit more  to move up, right?
[00:41:35] We're now, this is 2019, right?
[00:41:38] So
[00:41:40] By the time Svelte 3 comes out, we already have Inferno, we have Lit, we have Solid.
[00:41:44] It is a sizable improvement to Svelte though.
[00:41:50] Thank you.
[00:41:53] Right. And then the next one I have on my list
[00:41:56] I guess I'm jumping right to 2020. I guess the rest of 2019 was a quiet year.
[00:42:01] Um...
[00:42:03] which is
[00:42:06] So
[00:42:08] View three.
[00:42:11] Was that 2020 or 2021? It doesn't really matter. They were working on it long enough.
[00:42:15] So we're going to put view three in. And can you guys guess where view three is?
[00:42:23] Thank you.
[00:42:24] Yep.
[00:42:27] slightly behind Svelte.
[00:42:30] Little bit slower than Svelte, but...
[00:42:32] Thalad B-tier.
[00:42:43] The interesting thing about these is,
[00:42:47] Going from two to three
[00:42:50] They updated their change management systems, both of these frameworks.
[00:42:54] but they didn't actually change their mechanics for rendering. This is still dirty checking, this is still a VDOM.
[00:43:01] Just like this is a B-DOM.
[00:43:06] Yeah, September 2020. Yeah, so I'm...
[00:43:08] I'm pretty accurate here.
[00:43:14] The F tier stands for flutter. Flutter and Blazor can battle it out.
[00:43:19] Flutter Web. I don't know if Flutter Mobile is any good, but Flutter Web is not.
[00:43:23] particularly impressive.
[00:43:26] Preacti
[00:43:27] react equals view but react at this time
[00:43:32] No, Preact is still in the same place. Preact has not moved at this time. Preact is still solid C. 2019, 2020, Preact is in the same place.
[00:43:46] Okay.
[00:43:48] Now we're getting to...
[00:43:56] 2021.
[00:43:59] And the next framework I have on the list is QUIC.
[00:44:04] incredible non-hydrating framework.
[00:44:07] has signals, um,
[00:44:09] Right.
[00:44:10] Of the frameworks that we have listed today at this point,
[00:44:13] Um,
[00:44:15] the only one that has signals that was created after
[00:44:20] I mean, it's hard to say.  If you had signals...
[00:44:23] under the hood. So then Vue 3 actually still has signals plus a VDOM. Svelte has an optimized compiler. Quick is
[00:44:32] Let's see if you can guess. Quick
[00:44:34] has
[00:44:37] signals
[00:44:38] plus a VDOM.
[00:44:44] Where do all the signals plus VDOM libraries go?
[00:44:48] The difference between... Vue is a weird exception because they did incredible compiler analysis.
[00:44:54] But all these signals plus VDOM libraries
[00:44:57] are actually right here.
[00:44:59] So quick comes in as a C tier.
[00:45:05] Thank you.
[00:45:06] Thank you.
[00:45:07] Thank you.
[00:45:08] Thank you.
[00:45:09] Yeah, in terms of performance in the client, Quik was great, but in terms of performance client, it's not.
[00:45:15] Uh...
[00:45:16] outstanding. It's actually
[00:45:18] It and Preact, I think they might even have the same base on their VDOM implementation, like the same inspiration. There's a couple like, oh God, what is it called? There's a few different VDOM implementations that were created back in the 2014-15 period. Yeah.
[00:45:33] Yes.
[00:45:34] So VDOM plus signals.
[00:45:37] They generally...
[00:45:41] highlight
[00:45:42] really well.
[00:45:44] for the single...
[00:45:46] Pinpoint update case?
[00:45:48] But then you're paying more on the re-render because the signals are heavier than the VDOM.  So if you're re-rendering stuff, signals work against you.
[00:45:55] If you're doing pinpoint update signals work for you, they're kind of
[00:45:58] at odds with each other. Vue, through careful compiler analysis, with Vue 3 managed to just break out of that
[00:46:06] But they are the only one.
[00:46:08] That...
[00:46:10] and I think it might be true to this day, that does signals plus VDOM.
[00:46:14] above a C tier.
[00:46:15] That that
[00:46:17] again makes view three
[00:46:20] A view impressive.
[00:46:22] -
[00:46:23] Okay.
[00:46:24] You guys see the line face? I got one for you. Million.js.
[00:46:28] It uses...
[00:46:30] a mechanism of using a compiler to
[00:46:35] to basically...
[00:46:38] Um...
[00:46:39] flatten out all the VDOM nodes into cloning...
[00:46:42] Um,
[00:46:43] Similar to a solid...
[00:46:45] and it does cloning but keeps the holes in like VDOM-ish.
[00:46:54] Yeah, from its description,
[00:46:56] It should be an A tier list.
[00:46:59] But from its actual score and performances in benchmarks,
[00:47:03] We've got our second S tier.
[00:47:08] Million is very fast. Aiden came out and did this whole video where he's like showing 70% fast in React. That was not accurate.
[00:47:23] Right.
[00:47:24] But million...
[00:47:29] is definitely
[00:47:31] faster than other solutions block dom in general slash because it's basically
[00:47:36] it's basically an optimal mentality of the VDOM.  It's essentially a...
[00:47:43] place where you've erased everything
[00:47:46] Um,
[00:47:47] But the holes.
[00:47:48] The way that, you know, Dominic Ganaway always described to me what a VDOM was.
[00:47:55] Right.
[00:47:57] It's funny because you see Svelte 3 and View 3 here, but a lot of people at this time period thought Svelte 3 and View 3 and Solid were all the same.
[00:48:05] This is not the case.
[00:48:09] I wonder...
[00:48:11] So, yeah, I mean...
[00:48:15] It's arguable that in practice, Million might be
[00:48:19] an A tier because it still has to deal with a re-render model.  Maybe if you add million plus signals, you know, you could do something smart there.  But from a raw rendering benchmark performance standpoint, you know,  when people are clocking it, million is about as fast as it gets.
[00:48:37] Million is actually...
[00:48:39] And those can attest faster than solid.
[00:48:42] But...
[00:48:44] It also can't
[00:48:46] Hide.
[00:48:47] Um...
[00:48:49] Like, it doesn't solve the architectural problems, so there's cases where a million would be worse.
[00:49:06] If we remove spas, do we need reactively?
[00:49:09] No, I guess. But if you can't remove, I mean, when you say single page apps,
[00:49:14] Okay, no, it basically depends what you mean by single-page apps. If you need client-side  interactivity, you need reactivity.
[00:49:22] So I guess I'll put it that way.
[00:49:29] Well, it's still a VDOM library that depends on re-renders.
[00:49:34] So
[00:49:35] even if
[00:49:37] You...
[00:49:39] render the stuff fast. It's like the exact opposite of the knockout problem. When we talked about knockout earlier, we're like, it's incredibly fast at updating the one thing, but then it sucks at rendering.
[00:49:49] because it also does template processing  and whenever you switch page,  you know, it's slow.  Million is incredibly fast  at just rendering,  but it's not as good at rendering
[00:50:01] like theoretically at doing the
[00:50:03] the more granular work.
[00:50:05] architecturally because it could,
[00:50:08] It can cause revenders. We'll get to that. As I said,
[00:50:13] We're getting pretty close to the end of the time here on the tier list so that we can actually get into the guts of fine-grained. I just wanted to get people thinking about the kind of terminology and things we talked about.
[00:50:31] How...
[00:50:32] How relevant is rendering speed in 80% of the kids?  I mean, it's a good question.  If you're talking apps--
[00:50:38] Rendering speed is...
[00:50:40] It can impact...
[00:50:43] like the sluggishness and the feel of the apps to a certain degree.  But...
[00:50:50] How much hard to put into numbers when you're in a certain range here, how much of a difference is each one making? I'm not.
[00:50:57] Sure.
[00:50:58] I will say it makes a bigger difference than reactivity performance.
[00:51:02] But...
[00:51:03] Um...
[00:51:05] I don't know if it makes...
[00:51:08] a huge,  uh,  difference,  but,
[00:51:11] I again,
[00:51:13] This is mostly about
[00:51:15] talking about, I mean, thinking about things architecturally and if they have the impact.  You're right. None of this could matter conceptually.
[00:51:21] But this is just where the tools sit.
[00:51:25] from my perspective.
[00:51:30] Well,
[00:51:31] This is a good time to kind of bring this up because adding signals to another system
[00:51:36] has overhead.
[00:51:39] In a sense, solid signals plus power
[00:51:43] millions rendering technique
[00:51:45] is what Sol it is.
[00:51:48] He does the same...
[00:51:50] Thing, the cloning the nodes.
[00:51:53] And
[00:51:55] Like I told you how Leo from Mithril's big helpers,  uh,  you know,  experience and bounce ideas when I was starting,  um,
[00:52:04] I spent a lot of time with Aiden when he was first developing Million.  And you'll see a lot of...
[00:52:10] solid type influence in Million. Although he also was looking at the other block down library, um,
[00:52:16] Block Dom, it's actually called Block Dom. So to be fair, there are other impacts on that as well, but it
[00:52:23] In a sense, the modern rendering technique is kind of that.
[00:52:30] It's just like a rendering benchmark. You're not going to tell the difference
[00:52:33] Like, you'll see the signals overhead.
[00:52:36] but you won't see the lack of signals not overhead.
[00:52:46] Um...
[00:52:48] Inferno still has a VDOM.  It caches VDOM nodes, but it still has a VDOM.
[00:52:53] Browser changes have closed the gap, I think, of the overhead of doing that, where million actually gets rid of the static nodes.
[00:53:02] like just turns the most into templates. It doesn't care about them where, um,
[00:53:07] You're still dealing with VDOM nodes with Inferno.
[00:53:15] Yeah, this has nothing to do with server-side rendering and first contemplate paint. It was funny, I was reading a benchmark or some client performance choice thing where they're comparing all the client-side frameworks and they were literally using Lighthouse.
[00:53:26] That makes...
[00:53:27] No sense. Like it makes sense from the perspective of like, I want to compare back in technology or whatever. But if you take this list of frameworks and then only compare on Lighthouse, like you're, it's SSR you're testing. You're not testing the frameworks render speed.
[00:53:45] Okay. Next one.
[00:53:50] Leptose. Leptose is a signals-based
[00:53:54] reactive library written in Rust. It's basically Solid.js if it was ported to Rust.
[00:54:01] Thank you.
[00:54:02] The only rust I've ever looked at was when I had Greg from Leptos on stream. I... I...
[00:54:07] It sounded really novel, but I don't know.
[00:54:11] Yeah, every framework in this list will get 100 in a hello world.
[00:54:14] Pretty much. I don't think Blazor will. It is arguable that these F-Tiers can't make that 100 in Hello World. Maybe that's the... yeah.
[00:54:30] Yeah.
[00:54:31] Leptose, I think you guys know, there's a slight overhead
[00:54:34] Getting pretty good at guessing. Leptose is an A.
[00:54:40] Thank you.
[00:54:42] Thank you.
[00:54:44] So
[00:54:49] Thank you.
[00:54:50] Yeah.
[00:54:52] This next one's Dioxis.
[00:54:54] It's a block dom.
[00:54:56] built in it.
[00:55:00] Thank you.
[00:55:03] Thank you.
[00:55:12] Yeah, Leptos is in Rust and Wasm, right? We have a few of them. We have Blazer.
[00:55:16] We have you.
[00:55:18] Leptose
[00:55:20] was huge because it actually showed that you could be fast
[00:55:25] and use Wasm. Like, these ones are all in, like, React range. And people are like, oh, this is, like,
[00:55:30] Look, if you want to write a highly interactive app where you don't care that much about maybe page load times,
[00:55:38] You can use Leptos and it will probably be smoother and outperform a React app.  That's what this is basically suggesting.
[00:55:47] Yeah.
[00:55:48] Dioxys is also an A, says Greg.  It's weird though because if I...
[00:55:52] If
[00:55:53] I wasn't going to give it an A, but that's only based on the JS Framework benchmark performance.  Can you explain, maybe Greg, maybe this is...
[00:56:01] Not fair.
[00:56:02] Maybe this is incorrect, but this is where I was going to put it.
[00:56:09] Um...
[00:56:12] Thank you.
[00:56:15] Thank you.
[00:56:16] Greg says that it's an A. So should we trust Greg? I don't know. Maybe.
[00:56:21] Greg knows what he's talking about, about Russ more than I do.
[00:56:23] Fine. Greg, you've convinced me it's going to be an A.
[00:56:33] It's possible for the old version.
[00:56:36] This is my list.
[00:56:40] This, though, in a sense, is this.
[00:56:43] Do you know what I mean? It's solid a million, but in Rust. It's happening right here.
[00:56:49] Okay, this is React compiler.
[00:56:56] Fun one, where does the React compiler go?
[00:57:01] raw rendering performance.
[00:57:04] This isn't about the code you write, this is about just raw rendering performance.
[00:57:09] Yeah, I think this one's going to be fun.
[00:57:16] Thank you.
[00:57:18] Thank you.
[00:57:21] For all you guys saying D, why are you saying D?
[00:57:37] Thank you.
[00:57:38] Same as React, yeah.
[00:57:40] Yeah, I did get him too much of a hint.
[00:57:43] Yeah, it's a D.
[00:57:44] React compiler,
[00:57:46] is...
[00:57:48] writes really good React code,
[00:57:50] But if you...
[00:57:52] What happened to the
[00:57:54] Did I crop it by accident?
[00:58:01] It lets you write really good React code.
[00:58:03] But...
[00:58:05] It also...
[00:58:12] doesn't really change much.
[00:58:13] Similarly,
[00:58:15] If quick.
[00:58:17] A beat on with signals is here.
[00:58:19] You can guess that Pre-Active Signals is also still a seed here.
[00:58:23] it doesn't change the quality of it.  Have you noticed to go from C to B  has almost requires compiler...
[00:58:29] Um...
[00:58:31] Interference?
[00:58:34] going from B to A
[00:58:37] has required dropping the VDOM for the most part.
[00:58:43] to either a block dom or a reactive thing.  Inferno...
[00:58:47] is just so optimized that Dominic somehow
[00:58:51] change the math.
[00:58:58] Thank you.
[00:58:59] Yeah. Just...
[00:59:00] Just kind of putting that out there.
[00:59:03] Yeah, so yes, the React compiler doesn't change anything.
[00:59:05] Yeah, benchmark code is already written in an optimized way. Exactly.
[00:59:11] I'm not.
[00:59:14] It just means you don't have to write the optimizations of your dev.
[00:59:17] That being said,
[00:59:19] If you look
[00:59:21] at
[00:59:21] the optimized code
[00:59:23] for frameworks that aren't called React, you'll find that
[00:59:27] Um,
[00:59:29] or like the non-rerendered frameworks, you'll find that funnily enough,
[00:59:33] the basic code
[00:59:35] is the optimized code.
[00:59:36] Um,
[00:59:38] it's an interesting thing that we started noticing is that
[00:59:42] the
[00:59:43] Idiomatic code for solid was the optimal code, where the idiomatic code for react was not the optimal code.
[00:59:49] It's interesting.
[00:59:59] Thank you.
[01:00:01] - Thank you.
[01:00:03] I mean, the million.js that goes in the benchmark, people use million in React, but it's not React doing the rendering.
[01:00:11] So I don't count million as like you're he in a sense million maybe doesn't belong on this list because.
[01:00:18] Um...
[01:00:20] Aiden didn't really want to make a full framework and push it.
[01:00:24] But like...
[01:00:26] There's basically nothing
[01:00:29] Million is more like a parasite that lives in your React app.
[01:00:33] Like, there's nothing about the part that Million does that is React.
[01:00:41] So we've got two left.
[01:00:43] We got Svelte 5.
[01:00:45] And we got View Vapor.
[01:00:52] Yeah, I mean, people kind of can guess where this is. Where does Svelte 5 go?
[01:01:01] I already...
[01:01:03] kind of revealed this earlier.
[01:01:04] Svelte 5 is S tier.
[01:01:15] Cell 5 is not any slower.
[01:01:19] really Svelte 5
[01:01:20] and solid are basically identical.
[01:01:24] Um, this, and it's because they are also very identical, like very close in implementation. Um,
[01:01:31] So
[01:01:32] Um,
[01:01:34] It signals, it's fine-grained rendering, a lot of the stuff that I talked about today.
[01:01:40] As I said, we started with reactivity and we're back here, you know,
[01:01:43] 15 years later.
[01:01:49] Vapor
[01:01:51] I don't know where Vapor goes because it hasn't been released.
[01:01:54] Vapor?
[01:01:55] in Evan's original show.
[01:01:57] Was S tiered?
[01:01:59] in the current benchmark it's A tier.
[01:02:02] I'm gonna be an optimist.
[01:02:03] And stick Vapor up here.  Because I trust the Vue team does good stuff.  And that it will get there when it gets there.
[01:02:12] I'm not.
[01:02:13] But...
[01:02:15] But that is my...
[01:02:17] completed list, I think. We can shrink this down.
[01:02:22] Little bit.
[01:02:24] Blow it up.
[01:02:26] But.
[01:02:27] Okay.