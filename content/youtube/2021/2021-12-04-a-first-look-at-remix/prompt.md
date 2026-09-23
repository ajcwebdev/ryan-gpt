---
title: "CQm52h3Ukng"
slug: "CQm52h3Ukng"
duration: "3:00:01"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/CQm52h3Ukng.mp3"
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
[00:00:01] Hey everyone, welcome to my stream today.
[00:00:05] I am looking forward to this one a bit.  A little bit nervous.  It's been actually a while since I've sat down and coded in React for...
[00:00:15] like longer than, you know, like 20 minutes or 30 minutes to whip up a quick demo.  But I'm really excited to...
[00:00:23] look at Remix Run.
[00:00:24] Okay.
[00:00:26] So I'm going to give everyone a couple minutes to join on.  This is when people who have slick production and stuff actually have, you know, some music playing in the background and let everyone join on the stream.  But instead, you get to look at me, sit here nervously and drink my drink.
[00:00:42] Thank you.
[00:00:42] But if you're joining, come in and say hi in the chat.
[00:00:50] Thank you.
[00:00:51] Let me know you're here.  I'm just going to give this a moment.
[00:00:57] It's been two weeks since I last streamed.  It came to my attention, actually, that the last time that I was on stream, I was demoing a bunch of concurrent stuff where, like, the whole key to it was how much, how should I put it, like, speed and performance smoothness.  And it just wasn't coming in over the stream.  I kept on saying stuff like, oh, look how smooth it is.
[00:01:21] Everything looked jagged and
[00:01:22] and out of sorts, which is really unfortunate because, um,
[00:01:27] but it pretty much defeated the whole point.  So if you did catch that stream,  know that it was very smooth on my computer.
[00:01:36] Um,
[00:01:37] And unfortunately, it just didn't translate over to the stream
[00:01:41] You know, that's the break, so to speak. I need to invest in better streaming setup, better streaming software. But,
[00:01:50] You know, that's just how it goes sometimes.  All right.
[00:01:55] Yeah.
[00:01:57] Nice.
[00:01:58] Hi, everyone.  Thanks for joining on the stream today.  OK, well, enough preamble here.  Let's get started.  I'm going to talk a little bit about this week in JavaScript.
[00:02:12] share my screen here.
[00:02:16] Thank you.
[00:02:17] As I said, it's been two weeks. So a lot of stuff's going to happen over that time. For me, it started actually a couple weeks ago, I dropped an article about reactive script, the sort of idea of could we approach a
[00:02:36] a reactive language, essentially.
[00:02:40] Thank you.
[00:02:41] using basically purely the syntax to play in JavaScript.  And I thought this was kind of interesting idea.
[00:02:48] No matter where you look and you look at reactivity, the biggest problem is it drops off, essentially.
[00:02:54] It doesn't leave the file you're in or someone destructures a prop or something.  You always have all these situations where you can lose reactivity.  So what if the language was just built for reactivity in a way that you couldn't lose it?  That was sort of the idea here.  Honestly, I don't know if it's actually viable.  It might be confusing as hell.  But after...
[00:03:10] watching how people kind of
[00:03:12] quickly adapted to Svelte, it seems quite possible
[00:03:16] that you could use similar syntax and people would actually be amenable to it.  I think it's weird to change the semantics of the language
[00:03:23] But
[00:03:24] You know, who knows?
[00:03:27] We also had our first solid community meeting, which was cool.  Other than Discord has a 25 person limit, which we realized about
[00:03:34] five minutes into the call. There were so many people pouring in that we,  we basically capped the call at 25. I'm sure there would have been, I mean,  there probably would have been 40, 50 plus people in that community meeting,  but we basically chopped them off. So we do better next time. Um, and then, uh,
[00:03:51] Yeah, I think...
[00:03:54] Also, obviously, Learn With Jason did that session, but I wanted to dig into some stuff that's actually more interesting. A couple things that I thought was actually interesting this past week.
[00:04:07] Builder.io,
[00:04:09] rebuilt their web page in Quick and using PartyTime. And I think this demo is actually really quite cool. I want to spend a moment to show this off before we get to the guts of our stream today.
[00:04:25] If you haven't seen this, this is like a full e-commerce style site here. Let's look at this for a second. Where is it? BuilderEye. Yeah, just their homepage, right?
[00:04:38] And obviously, like, it is mostly static stuff.  There's some links to sign up and a few other...
[00:04:44] But can I show you something here?
[00:04:46] Like, look, there's a hamburger menu. This is
[00:04:49] fully interactive and everything, right?
[00:04:52] Let's reload that page again and look at the performance tab. Let me blow this up a little bit so you can see it better. But let's look at the network tab. Let's refresh that page.
[00:05:04] And actually, let's just change it to just JavaScript.
[00:05:09] Thank you.
[00:05:11] Thank you.
[00:05:12] This page is fully interactive and actually only loads 1.7 kilobytes of JavaScript.
[00:05:18] I mean, you've seen this with Astro and to be fair,
[00:05:22] That preload time is a little bit longer than I would like to be interactive. Like, it looks like clicking again, it's instant. But this is the danger of waiting everything to clicks. But if you look, this is actually pretty, pretty powerful stuff here. This is built with a quick framework, which is really quite cool.
[00:05:40] basically no JavaScript on the page and it just loads up.  And the really cool part about this is this page has ads.  It has stuff like this,
[00:05:50] this was a discord thing and a whole bunch of other,  other like little layer ons.  And they've managed to reduce the load significantly thanks to party town,  Google analytics, all this stuff is actually there,  but it's not slowing down their site.  Getting a hundred obviously in lighthouse is relatively easy to do in like  when you just build a site, but this is everything. This is,  this has all the analytics, everything present that you'd expect.  And they're just not getting hit by that.  I think that the work they're doing at builder is quite amazing in terms of
[00:06:20] of pushing this stuff forward.  The other thing that was cool this week was actually
[00:06:27] Ben Awad interviewed Dan Abramoff doing React coding questions and stuff and some algorithm questions.  And it was kind of funny.  If you haven't seen it, you should definitely check it out.
[00:06:39] It's pretty cool, I have to admit.
[00:06:45] I bookmarked it here, but essentially, Dan whizzes through all the easy questions until there's a really hard one at the end.  But I think the thing that got a lot of people kind of excited or interested was Ben asked him about Redux.  I mean, it's been a few years and people, you know, to ask him about Redux.  Check this little clip out. It's kind of funny and I understand where he's coming from.  But, man, I...
[00:07:09] I empathize with the difficult position that Mark Erickson is in promoting and trying to contribute and keep Redex flow when stuff like this happened.
[00:07:18] Thank you.
[00:07:19] Okay, so if you're starting a new project today, you would only use Redux if you had a piece of data where you could not figure out where to put it anywhere else. Like Redux is the last place you're putting it, it sounds like.
[00:07:32] Yeah, and maybe I wouldn't even use it then.  But yeah.  Yeah, I mean, obviously, that's a little bit sensationalism  there, but it was definitely a fun video.  Do check it out.
[00:07:49] But yeah, this has just been, you know, mostly I've watched a lot of videos this week, essentially. That's been the thing between Dan's and all the learn with Jason stuff. There's a great...
[00:08:05] introduction to Remix with Ryan Florence there. And also, Misko did a video about the Builder  homepage, which is also a must-watch. But yeah, I mean, that's pretty much it for this week in  JavaScript. Let's talk Remix run for a minute here.
[00:08:26] Because I think I need to give this a little bit of a preamble  before we actually get into building something.  Mostly that--
[00:08:34] I'm not sure.
[00:08:35] This is kind of fun for me to kind of take a moment and look at Remix because generally speaking,
[00:08:41] Thank you.
[00:08:42] I am...
[00:08:45] Thank you.
[00:08:46] Sorry, there was a comment here from a minute ago.
[00:08:50] Is there any audio issues?
[00:08:56] Just let me know in the chat if there is.
[00:08:59] It's kind of fun for me to come and look at this because essentially I'm not really involved in the React community at all.  I have no stake in it.  I don't work on the React core team.  I don't have to watch my words.  As I mentioned, Dan works on React.  So when he talks about a third-party library, it has impact.
[00:09:19] Yeah.
[00:09:20] And, uh,
[00:09:22] And
[00:09:23] Basically,
[00:09:26] You know, I get to look at this. And as I mentioned, like, solid isn't really, it's just like a mini school thing, like reacts like this. And so it's like this little thing, maybe I can move my fingers apart a touch now in the last couple months. But essentially, we're just, you know, there's no issue here. I actually love the work that's been going on here.
[00:09:56] at all to actually anything I do.  So this is just pure fun.  And I've always liked the work that Ryan and Michael have done right from early demos  around React, around Florence doing early benchmark demo that was really interesting.  And then even moving forward to all the work on React Router over the years.  And every time I've watched every single beta preview video on Remix that I had.  So this is not my first first look at it.
[00:10:26] But I've never installed a project. I never had the license when it was closed. So I didn't influence a couple of people close to me to buy the license and report back to me, so to speak. But I've yet to install the project.
[00:10:38] yet so you know i'm just really stoked from what i've been seeing and as i said every time i watch  ryan or uh or michael talk i feel like a bit of a kindred spirit they somehow mix both the elements  of pragmatic kind of grizzled you know experience old developer with you know this still being so  excited about about what's going on you can you can see that excitement when they talk about remix
[00:11:08] super stoked to see what they've been kind of putting together and, you know, see how, you know,
[00:11:15] what it does. The truth of the matter is, I mean, obviously I have a few biases kind of coming in  that I have to address and put out front, even with that kind of open-minded thing. Mostly that
[00:11:25] For me, at least, the most interesting part about Remix is the nested routing.
[00:11:31] and the way that they're handling progressive enhancement,  especially with forms.  A lot of the techniques that they use have existed
[00:11:41] for years and years.  And even you could even use them in React.  So like on one hand, I look at Remix and I'm like,
[00:11:47] Well, I mean, this doesn't actually change the equation.  It's still React.
[00:11:51] You could have always done that.  You should have always been using good patterns.  But, you know, some of the libraries and stuff in React  haven't always made that easy.  So, like, I think...
[00:12:00] you've got to turn off the analytical side of the brain  there a bit and be like, how does it feel?  And that's sort of a bit what I want to get into today.
[00:12:10] And as I said, those are the two main areas.
[00:12:15] The first, nested routing, is something that I'm well familiar with.  I wrote my first nested router back in 2014, and the thing is,
[00:12:24] When you don't have a virtual DOM, which can just key match when you switch page, nested routing is essential. So the first nested router that I saw on the client side was from Ember, and I used that back in 2012. And I'm pretty sure the original React Router 1 was very influenced by Ember.
[00:12:43] Ember router. And that was the same influence a lot of our work here. And as you know, Solid has a nest router very, very similar to
[00:12:51] to React Router 6.  And it's no coincidence,  mostly that nested routing was essential in a framework like Solid  where in a VDOM you could get away with it until you don't want to.  And that was the thing.
[00:13:06] The guys on Remix were like, we want to make React sites performant and
[00:13:14] you know,
[00:13:15] you know, like every time they're seeing their projects being used in places that they weren't there, it kind of bummed them out. So like, no, this is the right way to build a website. And with that, I agree completely. So this is kind of, this is really cool.
[00:13:31] So I think one more thing before we kind of dig into the code is I just want to talk about the concept of nested routing for a minute, just to make sure everyone's familiar before we dig in and understand that this is actually where a lot of the performance gain is.  The other API stuff is really nice. It looks nice. It's good patterns, like the way accessibility is good in terms of progressive enhancement. But the actual thing that is translating directly to performance here is nested routing.
[00:14:01] a little bit previously on my routing stream.  But I think now that I have Excalibur at my disposal,  I think we can explain this a little better  for those not familiar with this topic because
[00:14:13] Honestly,
[00:14:14] every day in the solid Discord will ask me about nest routing.  And we're not quite at a point now where I can just go,  oh, look at React Router 6, you know,  or like some place that has better docs than the ones I've managed to put  together because, you know,
[00:14:27] Truth of matter is React router had nested routing through V3, I think, and then they got rid of it in V4.  So most people in the React ecosystem, that's like the last three or four years, have no idea that this is just the best way to do routing and...
[00:14:40] I'm so glad it's back in React Router 6.  It definitely influenced our design.  So let's do a quick example that kind of visualize  or understand what nested routing is.  And actually, I'm going to use Twitter as an example,  because this is a perfect example of a place
[00:14:57] where nested routing would be beneficial.  And then we're just going to take our Twitter example  and explain it a bit using a ScalaDraw.  As I said, I love teaching along these topics.  And obviously--
[00:15:07] If you understand nested routing remix, well, you understand solid.  We use the same stuff.  So let's do that.  OK, so here's Twitter.  Most of you have seen this, I'm sure.  At the side, you have a sidebar navigation, right?
[00:15:19] And if I go to something like home,
[00:15:22] I swapped out my whole section and the sidebar remained, but here is my main content. Now, when I go to my profile,
[00:15:32] It's now replaced that main content here.  And you already see that something like the sidebar doesn't change, right?  But...
[00:15:41] We can go further. What if we have tweets, tweet, replies, media, and likes?
[00:15:45] If I go to tweet replies,
[00:15:47] Well, this panel changes, but we don't want to do anything here really, right?  Because it would be wasteful.  Now, this is a question.
[00:15:54] A lot of times, classically with React, you're just like YOLO, like...
[00:15:59] Just go for it. Just redraw everything. VDOM is cheap. We'll key it up. We won't affect change. But this wasn't a luxury of non-VDOM libraries, which is why Nestorata came out.
[00:16:12] So Remix kind of brought that in.  And I'm going to use Excalibur just so that we can, you know, make this real again.  I'm going to use the Twitter homepage as kind of our model.  But essentially, we have our Twitter page.
[00:16:26] We have--
[00:16:28] our sidebar navigation
[00:16:32] OK, and I'm going to call this layer one.  So this is the thing that-- this is the root, right?  And then we have--
[00:16:42] Let's go in blue.
[00:16:43] This
[00:16:44] is...
[00:16:47] our main content panel.
[00:16:49] Right. And in our main content panel, we have our like hero thing.  This I'm just in the user pane and we have
[00:16:58] another navigation panel.
[00:17:00] Right?
[00:17:01] Now, if I was more talented, I would draw my stuff in.  But then finally, we're going to add our third area.
[00:17:08] which is
[00:17:11] our content page section. There we go. Ta-da. Three colors, three distinct zones, and they're  actually in each other. You see that the black layer actually wraps the blue layer, which wraps  the purple layer. This is basically the thing. And okay, I can do like a little bit more. Let's  add some, you know, buttons here. Let's fill them with a crosshatch or something. Can I do that?
[00:17:41] Thank you.
[00:17:41] Let's just, yeah, sure.
[00:17:44] Thank you.
[00:17:45] Thank you.
[00:17:46] Wait, that's the wrong shortcut key.
[00:17:51] Just add some buttons on our section here.  And similarly, we're going to add some buttons--  do these ones with our blue--  and add some more buttons.
[00:18:05] Crosshatching there. Over here. Okay.
[00:18:08] So these are these nav buttons.
[00:18:11] Amen.
[00:18:12] So this is like our Twitter page, but this could be any page.  Everyone's seen this before, right?  You have the user page, and you've got the user settings,  and the user profile, and whatever.  And you just swap around.  So here's my completely poor drawing.
[00:18:26] As I mentioned,
[00:18:28] The trick to this whole nested routing thing is when you change the,
[00:18:33] like layer one, then you have to re-render everything.
[00:18:36] If you change layer two, then you only re-render this.  And if you change layer three, you only re-render this.  That's all nesting routing is.  This is different.  And like, sometimes-- let's just add.
[00:18:50] Can I just add some text here?  Yeah, let's add some text here.  Like, let's pretend this was URLs.  I didn't look at Twitter, but, like, let's say we're looking at user...
[00:19:01] feeds, right?
[00:19:03] Um,
[00:19:05] And give them an ID feed. This is good. And then
[00:19:11] You know, when we change to the other thing, it's going to be--  well, let's look here.  What do we have?
[00:19:20] Replies. OK, sure. Let's use replies.
[00:19:23] Thank you.
[00:19:24] Thank you.
[00:19:25] What? Right?
[00:19:32] As long as I'm under user ID, I'm going to be drawn this blue section. And then the red section changes when I switch between feeds and replies, right? But there might be another section here that's like feeds altogether, right?
[00:19:48] And if there was a user listing page, maybe there's users. But if you notice,
[00:19:54] Thank you.
[00:19:55] If you've ever seen apps where they have listing and then you click and go to the details, that's not nested routing. See, that's nested paths. Like these might share the same prefix.
[00:20:06] Like they're both slash users, but...
[00:20:08] What makes it nested routing is that you actually draw the components inside each other.
[00:20:15] And the reason this is important, though, is because this informs you a lot about your page.
[00:20:21] And the best way to explain this is essentially
[00:20:26] Thank you.
[00:20:29] If you set up your page layout this way and tie your data loading to the specific sections of your page,
[00:20:40] At any point when you navigate...
[00:20:43] You know...
[00:20:45] that say, like if you go to user ID feeds, you know that you need to load
[00:20:51] Twitter.
[00:20:52] You know you need to load the user information and you know you need to load the feeds simply from the URL.  Like you've encoded that information.  And sure, you can encode that without using nested routing.  But because you've defined these separate entry points in your routes and potentially separate data loading mechanisms with your routes, you can just...
[00:21:12] Fetch all the data up front
[00:21:16] Without having actually gone there yet.  Like if you didn't have the nested routing,  you'd have to wait for the parent to render the child  and render the child.  And we've got code splitting and lazy loading.  And you end up with this waterfall thing where you go,  okay, I load Twitter and then I have to load the user panel.  And then I go, okay, well load the code for the user panel.  And then, okay, now I'm going to fetch some data  for that user panel and load the code for the feeds.
[00:21:46] then I'm going to, oh, now I got the code with feeds.  Now I got to fetch the feeds.  You end up with this cascading effect.  And what's really cool about nesting routing,  where you can just set up the data loading,
[00:21:57] as part of the route definition is you can just go, oh, you're going there.  I know exactly what to load right off the right off right off the start.  You navigate there and you load it all in parallel.  You load the components and you load the data all in parallel.
[00:22:13] Um,
[00:22:14] Obviously, there's other ways to stop the waterfall. A lot of things like Next.js have that link hover preloading and whatnot. But what I'm trying to get at here is that
[00:22:25] That's all fancy, but that also has like interesting things like do you
[00:22:29] Do you have to worry about the cache on the preload and all that kind of stuff?  Like this pure, simple mechanism of using nested routing gives you all the information you need for your page up front.  And...
[00:22:42] with, you know, you can, you can do lots of stuff with it. You can, you can know that if,
[00:22:47] If you do keep stuff in a cache or global store, if you are editing stuff on this page, well, you know exactly what data you need to refetch.
[00:22:56] simply because of the route you're on.
[00:22:58] And as I said, this is the power of nested routing.  This approach has existed for eight, nine years  in JavaScript.
[00:23:08] You know,
[00:23:09] you
[00:23:10] A lot of stuff in React is like, eh, good enough, right?  And thankfully...
[00:23:15] the guys in Responsible for Remix were like,
[00:23:20] No, not good enough. Let's do something about this. Right. And as the same motivation, right? We have the same system in Solid. It is the way to do things. I'm super stoked to see React get this kind of stuff because when it comes to React, that means it's on people's radar. You can sit here on a soapbox and spill it for ages and no one's going to listen to you because, you know, they're on React and it just doesn't apply to them. But
[00:23:48] You know?
[00:23:49] good performance and good practices on the web are universal. So that's part of the reason why I'm so excited about Remix. So this is a little bit of an intro for nested routing for people.
[00:24:03] Okay. So, yeah. Comment here. I mean, V4 still hadn't messed around. It just wasn't not at the top level. Okay.
[00:24:09] Um,
[00:24:10] Yeah, I mean, how do I... Yeah, they didn't have the way to define it all in one place anymore. They used to originally. But then, yeah, you can nest...
[00:24:24] stuff. But the nesting, when I was talking about nesting routing, and you can still do this in v6,  you can make a component and put a router in it, and then in that component make a router in it,  and make a router in it. The whole key for nested routing, at least what I'm talking about,  is being able to define it in one place so that you can have this kind of knowledge.  It's an older pattern, but React kind of moved away from it.
[00:24:49] So, yes, you could nest routes, to be fair.  And I'm overplaying, I guess, a little bit the...
[00:24:58] the
[00:25:01] like the key thing of it.  But people did nest routes and did do this.  It just-- the power of doing upfront is really what  makes Remix special and this kind of route declaration.  To be fair, outside the React community,  this sort of nested routing like you see in Remix is
[00:25:20] de facto, the common thing.  It's funny.  Next doesn't do the nesting routing like this, I believe.  But Nuxt does.  Svelte historically did not, but I believe they have nested  routing in SvelteKit.
[00:25:36] uh,
[00:25:37] EMBER is nested routing.  It was just for some reason--  React really liked the fact that how dynamic you can make  the function DSL to the components.  So it was a pattern, and then people moved away from it  because they're like, oh, we can distribute stuff.  But here's the thing.  Routing is the backbone of your application.  And while it's great to have these patterns where you can  distribute stuff-- and I'm all about aggressive co-location--
[00:26:04] I mean, it just inherently leads to waterfalls.  And if done well,
[00:26:11] you can actually benefit here.  Like, the benefits of what I just explained  is obviously easy to see  for something like server rendering, let's say,  or, you know, client-side navigation.  You don't want to...  Like, where you can just start those...
[00:26:26] the fetch ahead of time for all the pages, and then just go render it. Because if, if, if, if,
[00:26:32] If you've seen classically something like Next.js had something called pre-pass where essentially
[00:26:40] You would render a page to figure out
[00:26:44] like what requests needed and then basically use that data to
[00:26:50] to then render it for real again.
[00:26:54] What Remix has done here is hoist that out upfront. It's more efficient to just do the data fetch and then do the rendering.
[00:27:04] Honestly, that's not the end of the story.  That's Remix today.
[00:27:08] But what I've been doing with Solid and what Remix is
[00:27:12] I have no doubt is going to go to very soon when React supports it,  is you can start the fetch early and then feed it into suspense components.  And as it's,
[00:27:24] rendering on the server.  And in so, basically have the ability  to start all the fetching as soon as you get that request  from the server, start streaming the response out,
[00:27:35] and then fill it in as it comes in.
[00:27:37] essentially. So have like non-blocking server-side rendering with the fetching happening up front as  soon as possible. That's the dream, right? That's what we do with Solid. Remix will be doing it soon.  I'm positive.
[00:27:49] So,
[00:27:50] Yeah, nested routing, yes, it takes away a bit, but you could still nest nested routers.
[00:27:58] If that makes any sense, like you can, you can still do the react router five trick and put them in your components. So you can still have teams operating independently in their own subsection of the routes and doing all that. It's just, you don't have the same ability to link it all up.
[00:28:13] up front that you have when you do it all top level. But, you know,
[00:28:18] at a certain point in a certain scale,
[00:28:21] You don't get to...
[00:28:23] You just don't get that benefit of being able to do everything up front.  This pattern works really well in the small to medium case and still doesn't break apart when you go big.  That's essentially all I'm saying.  Okay, so sweet.  So that's my little spiel on nested routing.  I don't know if anyone has any questions.  I feel like they've done a decent job of explaining it, but...
[00:28:47] Thank you.
[00:28:48] You never know, especially if I'm going to cover some of this stuff today.
[00:28:54] Let's...
[00:28:58] Let's--
[00:29:00] let's let's let's get started remix big thing here as i mentioned i've never installed a remix  project yet so don't expect huge revelations coming from my side in terms of um advanced uh  features and stuff and all that i i am literally doing this mostly so that i can get a feel for for  for what for what they have going and honestly my plan here is going to is mostly around um
[00:29:27] running one of these tutorial docs, I think.
[00:29:31] and we're going to kind of get a feel for some of the features.  I think they should show off a couple of the key features.  And then I was thinking,
[00:29:38] Let's just take that demo that I do all the time, that Hacker News demo.  I haven't seen a Hacker News demo in Remix.  Let's just make the front page.  I recently saw one with Next.js and server components.  I have the solid streaming one.  Let's just make a Remix one and see what we can do with it.  So...
[00:29:54] Let's do this getting started thing and see what that's all about.
[00:30:00] All right.
[00:30:03] Make sure to read the readme.  Yeah, see what's to learn with Jason.  Yeah, if you don't read the readme,
[00:30:10] You know, bad stuff can happen.  I, yeah, let me see here.
[00:30:18] And actually, I didn't showcase it off.  If you haven't seen it, the Remix website is pretty awesome.  They've done this cool scrolling effect where things can, yeah, you know,  usually I'm not a huge fan of this, but yeah,
[00:30:30] Yeah.
[00:30:32] They're showing stuff.  I'm zoomed way in, so maybe it doesn't look as good, but...
[00:30:38] I see.
[00:30:39] like having these active demos while you scroll,
[00:30:42] Yeah.
[00:30:44] Right. Basically,
[00:30:46] Thank you.
[00:30:47] A lot of the stuff that Remix is doing, in terms of the loading  and all that stuff in their transition stuff,
[00:30:54] A lot of at the similar purposes of suspense and transitions, which you're familiar with if you use Solid and are coming in React 18.  Remix kind of just went around that and just made it themselves.  I am interested to see if they actually change their approach to leverage these React 18 features once they kind of grok how to put them in.  I actually think that Remix's core approach and the React 18 features are actually really suitable pairing.
[00:31:24] completely on board there yet, but to me, it's actually very obvious how they could benefit  from each other. And as I said, that's why...
[00:31:32] in a sense, SolidStart, our starter, is essentially that.  It's that mixture of those things.  I think that's the way to go.  So I'm really excited to see as Remix starts embracing more  of those React mechanisms.
[00:31:46] Yeah, so let's get started.  MPX create makes the latest.
[00:31:51] They have these two starters, and I probably should pick the more advanced one.  I'm going to do the quick start one, though, because I feel like this might be just my easiest way to go.  So let's just get going here.
[00:32:07] What is it? mqnx create remix at latest.
[00:32:12] Thank you.
[00:32:13] - Yeah, and actually, did it say anything?  Do I need to go into the folder
[00:32:18] Okay, let's just follow the CLI and hope I don't just put everything everywhere. Do I want to proceed? Yes.
[00:32:25] *sniff*
[00:32:27] Nice touch. Yeah, sure. Yeah, let's call it MyRemixApp.
[00:32:35] Um,
[00:32:36] Yeah, why not?
[00:32:38] Thank you.
[00:32:39] people.
[00:32:39] And I want to remix app server from what I read.  Oh, and you can actually choose where you want to deploy to.
[00:32:47] That's interesting.
[00:32:50] Okay.
[00:32:51] I'm going to go with Remix App Server. I'm pretty sure in all the tutorials, they say, important you pick Remix App Server. Yeah. It says that in every single tutorial. TypeScript or JavaScript? What does the tutorial use?
[00:33:04] I can use TypeScript.
[00:33:06] I don't love using TypeScript, but I can use it.
[00:33:10] The tutorial uses TypeScript.
[00:33:12] Guess what?  We're going to use TypeScript.
[00:33:15] All right. Let's do this.
[00:33:22] I'm going to go to the next episode.
[00:33:23] Give it a moment. Probably won't be that long. Pretty much everything in the world is faster than create React app these days. Yeah, see, that was nothing. Okay.
[00:33:35] And we're going to actually open our
[00:33:39] up our workspace. Development examples, my remix app. Let's see what we got here. Okay.
[00:33:50] Yes, I...
[00:33:54] Yeah.
[00:33:55] I'm going to trust the authors.  All right.  So...
[00:33:59] Okay. TSConfig, RemixConfig, RemixMDD. Okay. Yeah, pretty standard. And then we got a public folder, probably static assets, no modules already installed. And then we have our app. So this is like the source folder. Okay, cool. So root TSX.
[00:34:20] Thank you.
[00:34:21] Import a bunch of components from Remix, links functions, some global styles.
[00:34:29] They have an app entry point.
[00:34:32] that
[00:34:34] has a document layout outlet. Okay.
[00:34:41] And then they have an error boundary, which has a document with a specific layout in it.
[00:34:47] And then...
[00:34:49] Not sure the difference between error boundary and catch boundary,  but they have great links to the documentation.  This is really smart.
[00:34:58] and...
[00:35:00] Then the document itself, hydrated from the head.  It's a cool trick.  This is the first time I actually saw this was with Remix.  I ended up copying it with Solid, but this is really nice, because--
[00:35:14] you basically get a bunch of, you can just like insert the stuff where you want. And like,  if you want to turn off JavaScript, just remove the scripts. I always, I always kind of joke to  people because I, you know, MPA frameworks like Marco or Astro, they start with zero JavaScript  and they progressively add just the JavaScript you need when you need it. And, you know, and quick,  which I already demoed at the beginning. That's really, really powerful. And it's completely
[00:35:44] a single page app kind of style thing.  Like what,
[00:35:47] solid start SvelteKit remix does, it's much more binary. So I often kind of use this joke that like,  oh, if you don't want JavaScript, just remove the script tags. I actually love that remix  just makes it like that easy where you can just remove the script tags.
[00:36:05] You know, I don't know.  Scroll restoration is new and live reload.  Both of these I did not see at the time of the beta demo.  I've watched a lot of videos on Remix,  and I haven't seen these.  I'd be obviously interested to know  what scroll restoration does.  So maybe we'll look at that.  I'm pretty sure I understand what live reload does.
[00:36:25] and then the layout component.
[00:36:29] Yeah, it's interesting to set the default.  This is-- it makes it less noisy.  So I've got to give them some props like this to just kind  of split up.  They could have stuck--
[00:36:37] the whole like the doc like these aren't exports these are just
[00:36:41] a choice to make this more manageable for you.
[00:36:45] you know, the cool thing about this is you might never really touch much in root TSX,  maybe just the layout. I guess that's not true. You touch the layout, but I guess that's why  the decision there, they split this off. So you're like, okay, I'm going to leave the document stuff.  It's pretty standard. And then I'm going to do the layout, you know, and they just keep it in  the file because like truth matters, once you configure this, it's a little sudden forget.  I imagine you kind of just move on to authoring your app. But I think this is,
[00:37:10] This is kind of cool SVG.  And this is just a nice little highlight here.
[00:37:18] Yeah, document, layout, and then -- sorry, this is the real one. And then outlet. And  the outlet -- what is outlet? Outlet is the nested routing.
[00:37:31] I was showing all the stuff with the nested routing,  but the key to nested routing is you need to tell the component  where to drop the stuff, right?  Like if you define all the routes up front, you need a place to.  And you notice that there's no routes here.  That's because I'm positive they're using file-based routing.  So you just make the decision.  You're just like, where do I draw my content?  And that's it.  Remix takes care of the rest for you.
[00:37:57] So this is definitely pretty cool. Entry server.
[00:38:04] An entry client is how they give you access to the entries.  Cool.
[00:38:08] Pretty straightforward.  It's just the kind of-- how should I put it?  The boilerplate.
[00:38:16] I don't know if I would ever...
[00:38:19] I mean, maybe some server stuff you might want to change.  I don't know if you'd ever really touch much in here.  I mean, a little nice touch here is that they're just giving you the request and response objects here.  And this isn't like Express or anything specific.  If you've done any work with like Cloudflare workers or like anything like that, it's getting super common in those environments to just use like the universal like web request and response objects.
[00:38:49] just uh
[00:38:50] You still have control.
[00:38:52] over what you're sending, like if it's not completely abstracted away from you, but, um,
[00:38:58] you can write it a certain way and then not really worry about whether it's a node backend or whatnot.  So this is a nice little mix.  So they said, in a sense, these two files for most projects could just get thrown off a cliff  and you never even need to look at them.  But the fact that they're here gives a certain level of flexibility.  I think that's cool.
[00:39:21] Thank you.
[00:39:22] I wonder if slotted outlets could be interesting for some experiences.
[00:39:28] on it.
[00:39:30] Do you mean like named outlets almost? Like not just the one outlet, like parallelized routing?
[00:39:36] Thank you.
[00:39:37] Thank you.
[00:39:40] I'm just going to give Dylan a chance to clarify if that's the case.
[00:39:49] Ember had had some stuff like that where you could do like double nested routing and stuff. I think it's interesting. I
[00:39:58] Good morning.
[00:39:58] I haven't really come to, to, I haven't hit that scenario myself, but actually today in the solid  discord, Joe Pia was actually talking about exactly this and using schemes in the URL to like  have multiple apps controlling the path, which, I mean, I thought it looked pretty crazy, but I mean,  technically it could work. So yeah. And I'm,
[00:40:23] We actually did a little experiment to see if we could do that with Solid App Writer, and we could, which, you know,
[00:40:30] It wasn't named outlets, though.  We did nested routes, essentially, which is like the cross route definition, cross outlet component.  And given that that works, I wouldn't be surprised if React Router 6 could do the same thing because it's the same architecture, more or less.  Yeah, I don't know.  It's an interesting question and definitely one to get the brain thinking a bit.  Anyways, let's keep on going here.  Styles, some stuff.
[00:41:00] Thank you.
[00:41:01] and routes, yeah, index, which is probably just slash,
[00:41:05] You know what? Let's run this app to see what it looks like, because I feel like we'll have more to say or look at when we actually look at what this app's doing. So...
[00:41:15] Or actually, no, sorry, read the readme.  I already forgot.
[00:41:19] Yeah.
[00:41:20] NPM run dev. There we go. We're in the right place.
[00:41:25] Right. Real close to 3,000. Nice.
[00:41:29] And let me see if I can get us into-- it's going to need to--
[00:41:39] Oh, I like this.
[00:41:42] They have automatic detection for dark mode, you can tell.  I'm always in dark mode.
[00:41:50] I've seen this demo and I saw it white before and that this actually...
[00:41:54] This actually makes sense.  OK, so we have our-- oh, right.  Demos in this app.  Nice.
[00:42:01] Do we have an act?
[00:42:03] Oh, beautiful. Okay.
[00:42:06] Thank you.
[00:42:07] What's more useful when it's broken?
[00:42:11] An egg? I don't know.
[00:42:14] Thank you.
[00:42:15] Okay, we got to look at that. Okay, cool.
[00:42:20] This still has enough stuff in it, which is actually really, really good.  Because I'm not going to lie.  I have a tendency a lot of demos just to have a counter on it or a spinning
[00:42:33] spinning logo or some kind of garbage like that. This looks like it has some functional stuff in it, which I guess makes sense from meta framework stuff. You have the router, you have all the pieces already there for you. So like, why not? Right. Okay. So
[00:42:45] Bye.
[00:42:46] Let's look at what they have.  I know their demos have some more stuff in it.  Yeah, you can see the post request down here.  Nice, okay.
[00:42:56] Let's look at the code here.  So we have a demos...
[00:43:01] slash about slash parameters.  Okay. And then,
[00:43:06] You already see the nested routing at work here.  If you have a folder and a file that are the same name,  this is how you tell the nested router that it should do that.  Because you can have...
[00:43:18] you know, a folder like about here or about is and when actions.
[00:43:23] Params, params. Okay, these are actually mostly nested. That's interesting. You can have a folder and then have a bunch of files in it. And like that's, that's not nesting it. The trick to get it nesting is you actually need to have a parent component that matches it. And if you look in this about component, what you're going to see is you're going to see an outlet. And that outlet is where it tells the parent where to insert slash, which is the default here at index or woe. So this is essentially the trick to nested routing. And let's go back to our demo and see if we can.
[00:43:53] find where that is.
[00:43:55] Um...
[00:43:57] Bye.
[00:43:58] Nested Roads.
[00:44:03] Thank you.
[00:44:10] Thank you.
[00:44:10] Thank you.
[00:44:12] - Okay, they're using the CSS only import.
[00:44:16] is only included in this route and his children.
[00:44:19] Okay.
[00:44:20] Yeah.
[00:44:21] OK, let's look here a second.  So what do we have going on and about?
[00:44:26] Thank you.
[00:44:28] OK, so here's the road.
[00:44:30] And then it goes all the way down to read all about nested.  And then there's an outlet.  And then in the outlet.
[00:44:41] Okay.
[00:44:44] Bye.
[00:44:48] Thank you.
[00:44:48] Okay, yeah.
[00:44:50] So they're just swapping out this section without re-rendering the rest of the page.
[00:44:59] Not anything too fancy, but you can kind of see that.  Look at the URL, slash about, slash about woe.  And only this part of the page is changing.  And obviously like a VDOM diff can do this anyways,  as I mentioned before, but just know that essentially  it's only re-rendering these components.  These aren't being touched that you know where you are.  Okay, interesting.  Okay, cool.  So nested routing isn't,  we kind of already have gone over that a significant amount.
[00:45:29] Well,
[00:45:30] So let's look at something else.
[00:45:36] Thank you.
[00:45:37] The links at the top of the parent page for the CSS overrides.
[00:45:48] All right.
[00:45:49] Okay, so, okay, now this is just a, okay, about TSX, what did we do here?
[00:45:58] styles, meta.  So they set the title this way.  So this is how they're handling meta.  That's neat.  You notice a bunch of uses of export named things as a way  to--
[00:46:12] essentially, um,
[00:46:15] get your configuration in your component.
[00:46:19] At some point, I would love to dissect the output bundle  and see how they're code splitting this.  But if they're minifying and stuff,  it might be hard to do this.  One of the, I'm sure they're using virtual modules  of some side.  One of the tricky things always with this is,
[00:46:33] Parts of a page should belong in the main bundle and parts belong in the nested bundle on the code splitting. So it takes a little bit of work to actually make sure that it actually goes that way. Because when you, the problem is when you lazy import a file, you don't get the code split anymore, you bring the whole thing in, right, even if you're just trying to get the default export, and you kind of, I mean, this is nothing, but you don't want to import this.
[00:46:57] in your -- when you do that. You want this to be part of maybe the main bundle or the thing that can -- not this one maybe, but like the thing that can be parallelized -- parallelly fetched like we talked about earlier. And you want the component to be lazy loaded but not bring in a bunch of extra JavaScript you don't need. But yeah, so let's see here. Yeah, REL style sheet. So this is the trick right here.
[00:47:20] They're adding the link to the head.
[00:47:23] essentially  uh
[00:47:26] when you navigate to this page.  And then when you navigate away, it goes.  So this is basically like their React helmet  or whatever approach using these same things.  This is pretty nice and pretty slick,  especially 'cause it gives you this kind of page focus thing.  Like sure, you can have components  and do all that kind of stuff, I'm sure.  But this, like the power here is in the pages, okay.
[00:47:47] Yeah, definitely cool. Okay. Now,
[00:47:52] I want what's correct.
[00:47:55] You got it right, yeah.  And params, I didn't see that one.
[00:48:03] We'll see what that one is.  The one that I want-- actually, maybe we'll do params first.  What's this?
[00:48:10] OK.
[00:48:11] Bye.
[00:48:12] This is more routing fun.
[00:48:16] So I hope you can, I can blow this up a little bit,  but I don't think the URL bar gets to blow up.  So let's see what we can do here.  Demos, params.  So params one.
[00:48:28] Okay.
[00:48:29] Yeah, so we're seeing--
[00:48:32] Thank you.
[00:48:34] Thank you.
[00:48:35] Yeah, so here's the thing to understand.  Because the params page is like the parent page.
[00:48:41] This whole section is getting replaced.  So they're under the same thing.  This will be a 404.
[00:48:48] 401.
[00:48:50] This one will throw an error and you caught the error. Okay, cool. So what does that look like?
[00:48:56] Thank you.
[00:48:58] Because params essentially, again, the links and everything,  this bar is part of the parent layout.
[00:49:04] And then in here we have-- OK, there we go.  We have a dynamic section and we have index page.  So the index page is the one where they explain everything  that we saw.  And then they have this dynamic section.  So they're not using the same syntax as next or nuxt.  They're using-- it looks like dollar sign for dynamic section.
[00:49:28] So, dollar sign ID probably is the dynamic section on your thing.  So, for people to understand what this means, is this route is...
[00:49:35] demos slash about slash params
[00:49:41] Sorry, not slash about.  So it's demo slash cram slash...
[00:49:44] what wildcard ID is, right?
[00:49:48] Everything we do here, the one, the two gets passed in over the prams here and then
[00:49:55] Based on the ID, they're simulating a bunch of stuff in this loader function.  We haven't talked about the loader functions, but essentially at the top of their...
[00:50:06] files, they have...
[00:50:12] essentially
[00:50:14] um
[00:50:16] another export they can use, which is Loader.  I got to get used to these export lets.
[00:50:22] I realize that this just doesn't matter, but it's funny.  I develop in reactive languages and with reactive stuff,  like signals and things, you never actually reassign it.  You always like,
[00:50:36] you always said it. So
[00:50:40] I almost use const religiously because everything is a const.
[00:50:45] Um,
[00:50:45] Like literally everything is a console except for refs.  There's like no lets.  So this is less characters.  So I'll give them that.  It's just,  it's for some reason,  I don't know why I found that jarring.
[00:50:57] but let's
[00:51:00] It's funny.
[00:51:03] All right, so...
[00:51:07] Yeah.
[00:51:08] This record does not exist. Yeah, okay. So where am I going here?
[00:51:12] Okay. And then in here, use loader data. And this hook will pull the data from the loader, whatever you return. I believe this runs on the server. And what they do is they use...
[00:51:27] Basically, the wire -- so when you call this on the server side, it runs the function.  But when you're on the client, it aliases it.  You can see it right here, all the stuff we were doing.  It aliases it to basically like an API call.  And that way, you just write this, runs on the server, then essentially --
[00:51:47] And ta-da, you get the data isomorphically, and you don't have to really worry about it.  So you can write SQL queries or whatever the hell you want in the loader.  And then ta-da, you have in your component, and it runs on both client and server as needed.  Okay, so...
[00:52:03] um yeah i mean i guess that's the point of this demo i mean they have a bunch of
[00:52:08] they have this catch boundary which is i guess their way of defining error boundaries so this is interesting so
[00:52:14] Thank you.
[00:52:14] That's good.
[00:52:15] Oh, no, this is error boundary.  I couldn't understand the difference here between fetch.  I guess the catch boundaries are for
[00:52:22] things that aren't actually errors.
[00:52:26] things that aren't actually errors. But if you've ever used a request library, I mean,  this being a big deal in SuperAgent back in the day, classically, the request doesn't fail  if you get a bad response. It's just like, as long as a request doesn't fail, it hasn't errored.  You can get a bad error status or something, but a request doesn't fail. It's only an error if it
[00:52:51] if it actually fails making the request.
[00:52:54] And at some point, they decided to switch that
[00:52:58] suddenly. So any like non-200 or 300 response would cause like the callback or the promise to reject or whatever. And it just caused havoc everywhere.
[00:53:10] And it was just kind of, it was kind of,
[00:53:15] it was kind of funny and chaotic. Um,
[00:53:19] So, yeah, I think it's obviously probably need to read more about this, but I think that's why there's a separation because these things are...
[00:53:30] gracefully able to be handled. And these things are like,
[00:53:34] He's something went wrong.
[00:53:37] Right.
[00:53:38] This is interesting. This whole idea of like all the exports defining a structure.
[00:53:44] I know there's a few other libraries that do this.  I think maybe is it Redwood that does it?  The first time I actually saw this kind of structure was something Sean Swix or whatever was proposing.  He was kind of looking at how you could break things apart into almost single file components.  What I like about this is the pages are really the only place that are naturally like this in React.  So you can make use of it here, but you're not...
[00:54:11] like the
[00:54:12] Yeah, I think that makes sense in the sense that the default exports the component and then all these other things.  Anything else you don't have to actually export. So it works fine. Yeah, this is an interesting one.
[00:54:24] Okay, so now the last one that I wanna look at here is actions, just to get a feel for
[00:54:32] Let's see here.  Actions are...
[00:54:36] about forms.
[00:54:38] I don't know how far deep we want to go into it, but essentially,
[00:54:45] We already saw the action earlier when I went to the actions page.
[00:54:52] Thank you.
[00:54:53] Thank you.
[00:54:54] And it asked me the question.  Let's see what happens if I get it wrong.  Let's put something--
[00:55:00] random answer.
[00:55:04] Sorry, random is not right. And then when I get it right,
[00:55:12] You got it right, OK, so redirect.  So let's use that information and kind of look  at what's happening here.
[00:55:19] Thank you.
[00:55:20] Yeah.
[00:55:21] Thank you.
[00:55:21] Right. So,
[00:55:24] Action gets the form request data and this is the actual form, like this is the actual  request.  So they're actually getting like the standard DOM form data off the request.
[00:55:34] And
[00:55:36] form get the answer, checks the answer.  Okay, so this all runs on the server.  And then if you get it right, they redirect you.  Otherwise they return a JSON response.  Okay, now that's cool.  So it controls,
[00:55:51] you don't always have to do-- you can redirect or return JSON.
[00:55:56] Um,
[00:55:59] I wonder how it handles it if the JavaScript's
[00:56:04] But I guess it doesn't because it knows...
[00:56:07] - Oh yeah, that's clever, right?  'Cause if JavaScript's off and you click on the,  the whole reason forms are interesting here is because
[00:56:16] Thank you.
[00:56:17] If you have no JavaScript on your page, the only way you get to update things like is you click on anchor tags to navigate to a new place.  That's like your get or you do forms and you post and then it goes to the server and returns with some data and then it comes back.  So if you want a page to work with no JavaScript, you have to wrap all your interactivity in a form, essentially.  So using this model here is what is what they've done here.
[00:56:47] Right. Because essentially,
[00:56:49] with JavaScript.
[00:56:51] you can handle the stuff in the browser.
[00:56:55] there's the redirect here, but maybe it'd be nice to dig into that as well. But you can handle JSON coming back. But if this is on the server,
[00:57:04] And it's like a full page post.
[00:57:07] um like they'll know that and then they they they don't have to respond with the javascript they can  just
[00:57:13] render it on the server
[00:57:15] with the updated data.
[00:57:17] Thank you.
[00:57:18] So--
[00:57:22] I think that's pretty cool. Yeah, let's turn off JavaScript and test that.
[00:57:27] It's a great idea, Dylan.  That's what I'm doing here.  I'm just saving you time from trying this stuff yourself.  Let's do that.
[00:57:40] Thank you.
[00:57:41] So it should be in the top-level layout component here.
[00:57:46] Not app, it should be in the document, document, document.  Search, docu.  Oh, I'm in like the wrong window.  Document.
[00:57:56] All right, not document.
[00:57:59] No, it's in document. It's in actual...
[00:58:02] Documents is the worst thing I can search for. It's literally in every single -- okay, there we go. Scripts.
[00:58:10] That should do it.
[00:58:15] Thank you.
[00:58:16] I mean, no, I want to do random here.
[00:58:22] All right.
[00:58:23] Oh, yeah. Okay. I had to refresh the page because I have to make sure it's not there.
[00:58:28] Thank you.
[00:58:30] Thank you.
[00:58:32] Let's actually open something and actually see this happening.
[00:58:37] Thank you.
[00:58:38] Okay.
[00:58:39] Thank you.
[00:58:40] Thank you.
[00:58:42] Thank you.
[00:58:43] Thank you.
[00:58:46] Thank you.
[00:58:47] Thank you.
[00:58:48] Thank you.
[00:58:50] Thank you.
[00:58:52] Thank you.
[00:58:54] Right?
[00:58:55] Thank you.
[00:58:58] I wonder what that code is. It's fine. Let's prettyify this. But yeah, I mean, essentially, what you can see here is what's happening is when I'm clicking this button,
[00:59:10] clear everything
[00:59:12] it's actually doing a full page reload and re-rendering this.
[00:59:17] Thank you.
[00:59:19] Right, whereas when you have the scripts enabled,
[00:59:26] Thank you.
[00:59:26] It actually reloaded here.  When I have my error,
[00:59:33] Instead of re-rendering a page, this is just going to be
[00:59:37] the payload, the JSON, it's handled smoothly.  Yeah, this little thing is very nice.
[00:59:44] It's interesting because...
[00:59:46] Everything should be formed from a progressive enhancement standpoint.  But I wonder what happens.  Like, I work on a lot of apps.  This is not the world that I work in traditionally.
[00:59:57] And...
[00:59:57] I'm trying to picture like wrapping every button
[01:00:00] individual form.  This setup is really set up for the page  to have a single form and view the post back page.  I mean, this takes me back to when I worked on .NET a lot.
[01:00:13] Yeah, yeah, yeah. Yeah, definitely. But I like the options here. This is one of the things that I wasn't sure. I was like, well, is everything just going to be a redirect or something? But you get the ability to play it both ways, which is really cool.
[01:00:30] Thank you.
[01:00:32] How are they updating text without a redirect?
[01:00:37] Thank you.
[01:00:38] They reload the whole page.
[01:00:42] Like when you have JavaScript off, you're actually doing a full,
[01:00:47] I think you're doing like a full...
[01:00:51] page reload, like you're actually posting and handing the reins over to the server,  and then they re-render the whole page and send it back to you.
[01:01:00] Um,
[01:01:02] So...
[01:01:03] Yeah. Where was I? Okay, so...
[01:01:07] Yeah, I mean,
[01:01:10] This is nice. And this is coming from my framework perspective, because people who are in the solid community know I've been playing with different actions. I've been playing with RPCs and like thinking of ways that the premise here.
[01:01:24] from Remix standpoint, looking at this,  is that there is only one loader and there's only one action.  This is sort of in what's been crippling me to make these kind of
[01:01:35] kind of make these kind of
[01:01:40] these decisions, right? Because
[01:01:43] This is super powerful, right?  But is it limiting?  Do I want to be able to post multiple different things?  Do I want to load from multiple different...
[01:01:58] uh,
[01:02:00] granular endpoints or granular data sources that can all
[01:02:06] stream in independently and all this stuff. That's something that cripples me. The thing is,  this is so nice from the 95% case thing that you just go, here's my loader, here's my actions,
[01:02:22] And
[01:02:23] Thank you.
[01:02:26] you know, like,
[01:02:29] Thank you.
[01:02:31] Yeah.
[01:02:35] That keeps things really simple.
[01:02:39] Yeah, you do have a point.  What must be happening is they must be – you have this hook.
[01:02:50] with use action data, right? And they must somehow know that it's a post-bac
[01:03:00] Yeah.
[01:03:02] Yeah.  Yeah, do we need to reverse use action data and see what it's doing?
[01:03:09] Let's see. What have we got in here? Remix.
[01:03:17] QRS, whatever, where my remix.
[01:03:21] -
[01:03:23] Thank you.
[01:03:24] Let's see if we can backtrack use...
[01:03:31] Oh, okay. So this has probably got some kind of...
[01:03:34] export
[01:03:36] Yeah, OK, so that's not going to help me.
[01:03:40] server?
[01:03:42] Okay.
[01:03:43] Thank you.
[01:03:45] No.
[01:03:48] Actually, maybe I should just look at the TypeScript to know what --
[01:03:53] OK, so now that's server specific stuff.
[01:03:57] Thank you.
[01:03:58] Client server platform.
[01:04:01] Thank you.
[01:04:03] Okay.
[01:04:05] Thank you.
[01:04:07] Thank you.
[01:04:12] Because this is just a...
[01:04:14] OK, so everything's in the client here, even if it's server 2.  So use-- and this is found in remix run slash react.
[01:04:24] This is interesting because do you know what this suggests?
[01:04:27] I mean, they've been saying it, but...
[01:04:31] I mean,
[01:04:32] It's tied to React, but they did author it in a way that React is outside of the main...
[01:04:39] bundle.
[01:04:44] Right. So like essentially,
[01:04:49] you know
[01:04:50] That is interesting. I know they're working on Preact. Someone was like kind of nudging them and being like, hey, Svelte, you know.
[01:04:58] And we were actually talking today with Marco. We're like, Marco, solid. Who knows? I think it's interesting. I think one of the tricky parts is so much the backbone of this is based on the router. And sometimes the routing isn't compatible with...
[01:05:14] the other frameworks as easily. So that might be the challenge there. But like Preact, I can  definitely see and I'm sure it's coming, but some of the others, but they have at least tried to  keep these things separate.
[01:05:30] So, yeah,
[01:05:31] Yeah, where are we going? We're going to remix run react.
[01:05:37] Bye.
[01:05:37] Remix run react.
[01:05:39] All right. Nice.
[01:05:42] Thank you.
[01:05:44] Nice, nice, nice, nice, nice, nice, nice.
[01:05:48] I wonder what the server.js is in here.
[01:05:53] Okay, I should just trust TypeScript.
[01:05:56] It's going to tell me everything I need to know.
[01:06:04] Route data, no.  Actions.
[01:06:08] Thank you.
[01:06:10] Oh, here we go.  Use.  OK, so that's from--
[01:06:15] The React router.  OK, so this is where they do all the aliasing.
[01:06:18] Okay, use.
[01:06:21] Thank you.
[01:06:22] action data from components.
[01:06:26] Thank you.
[01:06:27] Thank you.
[01:06:28] Activate us.
[01:06:34] Thank you.
[01:06:36] Okay. Yeah, some, okay.
[01:06:42] Action transition manager get state.
[01:06:45] So there's a transition manager and there is a route context.
[01:06:51] Okay.
[01:06:57] Manager. Did I get that wrong?
[01:07:00] Bye.
[01:07:02] - Excuse.
[01:07:04] Okay.
[01:07:07] Use remix entry context.  Remix entry context.
[01:07:12] I'm just being a vetting person.
[01:07:18] Yeah, maybe I'm trying to dig a little bit too much.  Remix entry.  Either that or it should be.
[01:07:24] Thank you.
[01:07:25] It makes an entry context.
[01:07:28] Thank you.
[01:07:29] Thank you.
[01:07:31] Thank you.
[01:07:37] Yeah, that doesn't tell me much, does it?
[01:07:43] I was trying to get the shape of it.
[01:07:50] But it looks like, obviously, I'm not, if I was looking at the source code, like on GitHub, I'd probably have a better chance here.
[01:07:55] This has already been kind of separated out.  So we only see the DTS for the exported interfaces.  I mean, let's see if I...
[01:08:05] Like, this is internal. We probably don't get to see the types here. Anyways.
[01:08:13] Yeah, let's move on from this.  As I said, I imagine that when they know that the page is being created,
[01:08:22] there because of a post request.
[01:08:24] Because the client didn't--
[01:08:28] just to like a Ajax request, but actually, like the request is actually like a full on  form post, they're able to go, OK, when we render the response here, we'll
[01:08:42] will use the data through the hook and just return the--  like, just assume that without a redirect,  we're always going to re-render the current page  with the data hooks, you know.
[01:08:54] So, okay, let's keep on going.
[01:08:58] Okay. So --
[01:09:03] I mean, that's the gist of it here.  I mean, you can put anything in here, but I think that's pretty cool.  I think this is about as...
[01:09:12] as far as I want to go with that.
[01:09:18] Thank you.
[01:09:18] Bye.
[01:09:19] Let's look at building something from scratch here.
[01:09:26] I
[01:09:27] Yeah, let's just gut this baby.  And I think in one of the tutorials, they actually mentioned, like,
[01:09:39] About gutting it. I don't I don't know
[01:09:44] Yeah, you know what? Screw that. We'll figure it out.
[01:09:50] Okay, let's delete everything.
[01:09:54] Thank you.
[01:09:57] Let's, we need routes.
[01:10:01] Thank you.
[01:10:02] So let's just do it.
[01:10:07] Thank you.
[01:10:07] Thank you.
[01:10:09] Oh.
[01:10:13] You would say that. Let's go on to our next phase. Let's just see if we can
[01:10:25] We can throw together a hacker news clone or something here, just the main page.
[01:10:30] I don't have the code all prepared for this, but I'm pretty confident that I will be able to port one of my existing Hacker News clones very quickly into React and using these patterns because it's very familiar for me the way this works.  Okay, so...
[01:10:50] I guess the first question is, okay, all this looks good.  And then these styles and this is how you get the global styles.  Okay, cool.  So, um,
[01:11:02] And I might not even mess with that.  I might just dump all the styles out.
[01:11:06] in
[01:11:08] in here. Okay, cool.
[01:11:11] Thank you.
[01:11:11] I actually don't even need this index.route probably.  Maybe I'll leave the loader around for a minute  for reference.
[01:11:21] But...
[01:11:24] Let's look here. Client and this, we're not going to need to touch. Root,
[01:11:29] We will.
[01:11:31] Thank you.
[01:11:32] I'm just going to get rid of -- I'm going to leave global style. I'm going to get rid of this one because it's fine.
[01:11:40] Um...
[01:11:41] Thank you.
[01:11:44] Thank you.
[01:11:45] And...
[01:11:48] I'm going to...
[01:11:51] Clear out demo, delete, move, that's fine.  And then what else are we gonna do here?
[01:11:58] Document layout outlet seems like a good pattern.  We'll leave the errors.  They're fine.  Catch boundaries seem perfectly fine.  OK, document, head, head, head, head.  OK.
[01:12:14] Interesting. Okay, I'll leave that for now.
[01:12:18] leave this for now. Let's just quickly pull up something for reference here. I have
[01:12:25] Solid Hacker News example and I hopefully can just sorry I'm doing some experimenting with
[01:12:35] Streaming here. Let's let's just go to the source code
[01:12:39] And Bricell, okay.  So, so we go to a root TSX,
[01:12:44] OK.
[01:12:46] Thank you.
[01:12:48] Yeah, OK, so no suspense, but that's fine.  Outlet scripts, same header.
[01:12:57] Yeah, I just had a hard fix header. I don't think there's anything fancy we need here. No service worker. Let's just grab the CSS here. It's already minified. Let's just dump that in global.
[01:13:12] CSS.
[01:13:14] Thank you.
[01:13:16] And then
[01:13:19] Actually, it looks like it's complaining that I still have the--
[01:13:24] demo
[01:13:25] open where it's a 404. Let's just go localhost. And then
[01:13:34] Thank you.
[01:13:34] root psx.
[01:13:37] I made a nav component in solid for this.
[01:13:45] I'm just gonna copy the component over.  And I mean, this is React, so this isn't just gonna work,  obviously out of the thing we're gonna have to,  we're gonna have to do a little work here,  but the nav component is going to be pretty similar.  I think all the Ahrefs become,
[01:14:04] Two.
[01:14:07] And all these server onlys get deleted.  Arcel hydration trick we have going.
[01:14:16] And all the classes become class name.
[01:14:23] And
[01:14:26] Everything else probably looks fun and built with Remix now.
[01:14:32] And it's not solid app router. It's
[01:14:36] Let's look at the root. Is it just remix? Yeah, OK. Remix.
[01:14:46] Thank you.
[01:14:47] Alright, sweet. Converted to solid. What's wrong with this 2?
[01:14:58] It's your problem.
[01:15:06] That's--
[01:15:07] unusual.
[01:15:10] Oh, because it's an actual anchor.  My bad.
[01:15:16] All right. This is the only one that's actually not too. Okay, sweet. So now we have a nav component and presumably
[01:15:24] We will be able to just bring that in here, import nav from...
[01:15:33] Um...
[01:15:35] Thank you.
[01:15:37] - Opponents, sweet.
[01:15:41] And
[01:15:43] Now in our
[01:15:46] Layout. Is it even in our layout? Do we want this?
[01:15:53] I think it's in our layout.
[01:15:55] Yeah, we just remove all of this lovely remix stuff.
[01:16:04] There's an outlet here somewhere.
[01:16:07] Or props children. Props children is what we need. Whereas children--
[01:16:11] Children.
[01:16:13] Where are you children?
[01:16:15] - Fine, make me look for it.
[01:16:18] Thank you.
[01:16:19] Okay.
[01:16:22] We'll just cut this.
[01:16:28] And then let's go...
[01:16:31] Fragment.
[01:16:34] Thank you.
[01:16:34] put our nav in here.
[01:16:40] and our children.
[01:16:45] Yeah.
[01:16:46] Is there stuff looking--
[01:16:48] Okay, we're half and half, see?
[01:16:54] We've got some hacker news going here, but not quite yet.  Okay, so let's keep on going.  Okay, so...
[01:17:02] OK, that's all I really care about for the main layout.  That's reusable parts.  So now we're going to be--
[01:17:13] - Yeah.
[01:17:14] and we can get rid of this Remix logo, I guess.
[01:17:18] Okay, now we need a wildcard route, not a dynamic section,  but we need an actual full on wildcard route here.  So let's take a look here.  I'm sure they support it.  I know the routing convention for it, it's star.  So let's go back here and look.  Oh, conventions, this is beautiful.  Let's see, routes.
[01:17:40] Yes, I want that. I want star. So --
[01:17:45] How do I do a star?
[01:17:47] File name conventions, here we go.  Special files, okay.  Do, do, do, do, do, do, do, do.  It's fine, route file names.  Do, do, do, do, do, do, do, do.  Routes, star dot, no, but that's not it.  That's just telling me that I can make my routes that.
[01:17:57] $1.00, okay, we already saw this.
[01:18:01] Yeah.
[01:18:07] Oh.
[01:18:08] Interesting.  So if you just don't put a parameter and just put a dollar sign,  it becomes a catch-all.
[01:18:16] Huh.
[01:18:20] Okay.
[01:18:21] Okay, let's give this a shot. Because the interesting thing is, in this, what I'm trying to build here is we have the main page, right? And here I'm using a splat because I actually want to grab the stories. And if it's blank, I...
[01:18:39] Basically, the reason that you can't just use a parameterized route, if you've ever been to a Hacker News demo, is see the homepage is slash.
[01:18:48] And then...
[01:18:50] slash new, but this is this, but it's still the same page. So I want to support slash and a  parameterized route. And usually a parameterized route will not match on it. You need to use a star  if you actually want to get the whole thing. So yeah, let's, let's do that. I guess it's good.  I did choose to TypeScript, the solid examples in TypeScript too, although it's probably gonna be
[01:19:20] Okay, so let's go here.  So our routes, we don't want index TS, we want,
[01:19:25] We want rename to...
[01:19:27] $tx.
[01:19:31] Yeah.
[01:19:31] And
[01:19:33] I'm going to leave the loader here for now.
[01:19:38] And...
[01:19:40] I'm not going to worry about
[01:19:44] meta, we can -- whatever. And --
[01:19:50] Okay.
[01:19:52] Default, okay, use loader data.  This part, I think, is going to be the same.  Use data, stories data, yeah.  So this is...
[01:20:01] basically the same thing. Okay. So,
[01:20:07] Before we worry about how we use the data,  let's just make a giant blob of JSX and copy this over.  Again, we're gonna have to do a little bit of conversion here  because this is solid and React does not have a show component.
[01:20:25] So we gotta, and okay, so let's do all the class equals.  Okay.
[01:20:32] Asmeem.
[01:20:34] And, I think,
[01:20:38] Okay. Okay. So let's start getting busy with curly braces.
[01:20:43] Um...
[01:20:47] Let's assume that we're going to have some of these variables.
[01:20:55] is bigger than 1.
[01:20:58] Then we need to do more.
[01:21:03] All this.
[01:21:07] Thank you.
[01:21:10] And then...
[01:21:13] Otherwise, it's not.
[01:21:16] Do...
[01:21:18] This.
[01:21:20] Thank you.
[01:21:21] Bye.
[01:21:22] Thank you.
[01:21:24] Thank you.
[01:21:26] Bye.
[01:21:27] Thank you.
[01:21:29] nasty as hell, but format doc, and that's way of prettier on our side. And then all these href equals
[01:21:38] are now two equals.
[01:21:42] And then I'm going to assume that we're going to have a type
[01:21:45] And get rid of the extra function calls because all these are signals. But in here, this will not be. And then stories, stories. Okay.
[01:21:58] And then same deal again.  Curly braces.
[01:22:04] Stories. It's kind of interesting. Ternary operators are nice and all, but for stuff like this, they're just like so much more verbose, especially when you get prettier involved and you like got to like, like find the blocks inside the JavaScript instead of just being like this solid, like just like
[01:22:28] consistent markup blocks.
[01:22:31] Thank you.
[01:22:33] Okay.
[01:22:34] Matt
[01:22:37] Thank you.
[01:22:37] And then these are going to be type page.
[01:22:42] And then--
[01:22:46] This is probably why people do preparation ahead of time. But you know me. I do these streams so I don't have to prepare. I'm much too busy. And actually this one, there is no fallback. So it's just stories and...
[01:23:03] Yes.
[01:23:05] Thank you.
[01:23:06] I suspected that I'd be able to just convert solid into React
[01:23:11] Let's demo this simple, like, easily.  So, right.  And then the four becomes stories...
[01:23:23] But map.
[01:23:27] So, yeah.
[01:23:30] like this.
[01:23:34] All right, curly braces.
[01:23:36] Thank you.
[01:23:40] Thank you.
[01:23:42] Uh,
[01:23:43] Hold this format for me.
[01:23:48] Thank you.
[01:23:49] Thank you.
[01:23:51] It's on the wrong side.
[01:23:56] There.
[01:23:59] All right.
[01:24:01] So...
[01:24:05] That's fine. Okay. So essentially we are just missing our data here. So let's, let's make our data layer.
[01:24:13] We use this loader function.
[01:24:18] And...
[01:24:19] we're probably going to
[01:24:22] I'm going to copy this from Solid's demo here.  I'm just going to go types.com.
[01:24:28] Thank you.
[01:24:29] Yes, I think. Let's see.
[01:24:34] Thank you.
[01:24:35] Same difference.
[01:24:39] OK, beautiful.
[01:24:42] I can do TypeScript, too.
[01:24:46] I've been using TypeScript for like two and a half years now, I think. And I still just, I feel, people like one day you're going to like hit the curve and it's going to work for you. And I'm like, no.
[01:24:59] Two and a half years later, I'm like, no, I don't think I'm ever going to like TypeScript.  But let's just keep on going.
[01:25:09] So, yeah.
[01:25:13] Meta function of need.
[01:25:17] It's like, why am I importing all this stuff?  It's TypeScript at all.
[01:25:27] And then let's give stories data.
[01:25:32] Something...
[01:25:35] These won't be functions because they react.
[01:25:39] Thank you.
[01:25:40] Okay.
[01:25:42] Thank you.
[01:25:43] Thank you.
[01:25:44] My story is...
[01:25:49] Pipes.
[01:25:52] Thank you.
[01:25:53] And we'll have the important story to...
[01:25:56] Okay.
[01:26:00] Here.
[01:26:04] Oh, it's because stories-- this is the only problem with doing it like this. We actually have to-- I'm trying to do it as fast as I possibly can, but let's face it here.
[01:26:16] Thank you.
[01:26:19] I'm still doing a huge amount of coding on the fly here and not knowing if this is going  to work or not.  But I'm just optimistic.  Right?  See?  Yeah.  Beautiful.  So, bear with me.  This might be a little bit boring part, but we're going to make this work.
[01:26:38] Because story...
[01:26:41] Thank you.
[01:26:42] It is the same deal again. Okay, beautiful. Okay, so this becomes Remix.
[01:26:48] Thank you.
[01:26:49] Thank you.
[01:26:50] Thank you.
[01:26:51] Thank you.
[01:26:53] Next, this becomes...
[01:26:59] Nothing.
[01:27:02] How does Remix handle, how does React,
[01:27:10] Yeah, whatever.
[01:27:12] YOLO. Do this.
[01:27:19] Thank you.
[01:27:20] Thank you.
[01:27:23] Thank you.
[01:27:24] This.
[01:27:27] I'm in the wrong file.  Sorry.  Same idea.
[01:27:31] We're probably not even going to get to comments.  We're going to do a story here.
[01:27:38] Props.
[01:27:39] Mm-mm-mm-mm-mm-mm.
[01:27:50] There's probably nicer ways to do this with React. I just, as I said, I have never programmed in React with TypeScript before. So this is just...
[01:27:58] seat of my pants trying to do this. But I have confidence because React is such a great framework and I'm already familiar with a lot of the stuff that we will be able to just figure this out.
[01:28:14] All right.
[01:28:16] And this.
[01:28:23] See, if this all goes well the way that I'm hoping it will,
[01:28:27] In a couple minutes here, we're going to have a fully working main page of Hacker News, just blindly
[01:28:36] Thank you.
[01:28:36] copying the stuff over.  Oh, right.  I'm going to need a...
[01:28:42] Because there's no component wrapper, I'm going to need to add an extra fragment here.
[01:28:46] Thank you.
[01:28:47] Interesting. Funny little benefits you get from using components that you control flow.
[01:28:57] This is the stream I should do when people are like, why do you use control flow and solid? Because it's just way nicer for handling, like,
[01:29:06] Random like...
[01:29:10] blocks of HTML. Let's format that.
[01:29:13] Yeah, okay.
[01:29:17] here.
[01:29:18] Let's do this.
[01:29:22] Thank you.
[01:29:23] Few months.
[01:29:24] Be fair.
[01:29:25] This is mostly all disk.
[01:29:28] Thank you.
[01:29:29] Thank you.
[01:29:30] boilerplate-y kind of stuff here that I'm doing that it's like really matter what syntax you use. I think being too concerned with syntax is overrated if it doesn't have a mechanical implication, right? Like who cares what you're typing?
[01:29:48] There we go.
[01:29:50] And then the last one.
[01:29:55] All right.
[01:30:04] All right, this one can get an because there's no or.
[01:30:08] Okay.
[01:30:09] Thank you.
[01:30:10] Amen.
[01:30:11] Sometimes it's like when I was doing the demo, I wrote an article about, what do you call it, to do MVCs. And I had to like just remake my own to do MVCs in all of them because I was doing a size comparison. And the solid version was like much smaller than the preact and react version. And there's like no reason for it. So sometimes I just end up liking doing stuff myself.
[01:30:32] but um
[01:30:33] -- undo everything in here. We're probably never going to get to the comments. Let's see.
[01:30:41] OK.
[01:30:42] Okay.
[01:30:44] Okay. So, it looks like it's rebuilt.
[01:30:50] That's not ours. We're not that far yet.
[01:30:55] We were-- where are we?
[01:30:58] Thank you.
[01:30:59] OK, sweet. That's about where we should be. There's an error because we haven't loaded
[01:31:05] data.
[01:31:07] So let's get some data going here.
[01:31:11] Thank you.
[01:31:12] All right.
[01:31:15] Where is our letter? Okay.
[01:31:17] So back to remix, loader, okay.  So loader,
[01:31:24] Thank you.
[01:31:25] function,
[01:31:26] Thank you.
[01:31:29] Thank you.
[01:31:30] Thank you.
[01:31:31] just returns data that it, yeah, return, okay.  So this is the trick.
[01:31:37] JSON.
[01:31:39] Beautiful, okay.
[01:31:40] So we just need to...
[01:31:44] I mean, this is going to be like the-- this is going to be the--
[01:31:50] Let's see what arguments are here because I don't know what they are.
[01:31:56] Tell me or am I going to have to reload the page?
[01:32:02] So this is borked already.
[01:32:07] All right.
[01:32:08] Oh, it's because I'm an arrow function.
[01:32:13] Whatever.
[01:32:15] Tch.
[01:32:16] Thank you.
[01:32:17] Thank you.
[01:32:21] Thank you.
[01:32:22] Thank you.
[01:32:24] Thank you.
[01:32:28] It's really mad at me. I did something very bad.
[01:32:32] But it's probably because of the errors.  If I just like--
[01:32:38] If I just go like return nothing here, probably not going to get mad at me anymore.
[01:32:46] Oh, no, I did make it mad at me.
[01:32:50] Which is interesting because right now we just have an index file that returns nothing.
[01:32:57] Thank you.
[01:32:58] Thank you.
[01:32:59] Okay.
[01:33:01] Thank you.
[01:33:01] Thank you.
[01:33:03] does get...
[01:33:04] to hear though.
[01:33:07] Why is it mad at me? Well, let's not worry about that. Let's worry about the loader. We can't worry about the loader because we can't actually see the loader running.
[01:33:17] Thank you.
[01:33:20] Let's see if we can continue to load it running.
[01:33:25] Yeah.
[01:33:26] I'm not seeing loaded running.  Beautiful, okay.  So, okay, empty index or whatever, wildcard component.
[01:33:34] Route is...
[01:33:36] slash
[01:33:38] What do we make a new? No, okay.
[01:33:43] So it's complaining at me that...
[01:33:45] The HTML server is to contain a matching head in HTML case.  So what are we actually sending?
[01:33:53] Thank you.
[01:33:54] I wonder if this is because I removed the meta--
[01:33:58] like what
[01:33:59] One is...
[01:34:01] So this is fine. This is fine. This is fine. This is fine. Okay. So
[01:34:06] Okay.
[01:34:10] But
[01:34:12] Remove the children here.  Let's just-- let's just--  no?  OK.  Let's remove the children here for a second to ensure  that we get out--  OK.
[01:34:25] Interesting.
[01:34:26] I figured if we just didn't bother rendering anything,  like just render the nav, it would just stop complaining  at us.
[01:34:34] There's nothing special in this nav.
[01:34:36] It is literally just a component.  OK, well, let's not render the nav too.
[01:34:43] I'm sorry.
[01:34:44] Thank you.
[01:34:46] Thank you.
[01:34:47] Thank you.
[01:34:49] Thank you.
[01:34:52] OK, see?  OK, so the request is being made now.  OK, so it's an app that's broken?
[01:35:01] That's fine too. Okay, so it is children. So we are seeing the request from the server. Not sure.
[01:35:09] What breaks here?  If I go children.
[01:35:15] Thank you.
[01:35:17] We can see now what we have.  We have the request, we have the context,  and we have the params.
[01:35:23] Okay, sweet.
[01:35:32] Nice. And you can see the prams. That's beautiful. See? Star blank. That's how you get the prams. Okay. So we've got what we need. Awesome. So...
[01:35:41] From here, I want...
[01:35:45] I want params.
[01:35:47] Thank you.
[01:35:49] It's crammed star that I'm actually looking for because--
[01:35:55] Let's go back to solid.
[01:36:02] Kids.
[01:36:06] Yeah.
[01:36:07] This is not going to be the same, but it's a start.
[01:36:15] Thank you.
[01:36:17] Get rid of the functions.
[01:36:21] Thank you.
[01:36:25] Mm-mm-mm-mm-mm.
[01:36:27] Whew.
[01:36:30] So it's prams.
[01:36:33] star that I want.
[01:36:36] It's not a
[01:36:40] a legal character.  So we want star or top.
[01:36:45] And then...
[01:36:47] I want to get the query off of this.
[01:36:53] uh,
[01:36:55] Let's do one more experiment with args before we move on.
[01:37:00] Thank you.
[01:37:01] So I probably, again, I'm going to break everything, knowing me.  Comment this out.  Console.log args.  I should have done this experiment before.
[01:37:13] So let's add...
[01:37:17] Like page equals to this.
[01:37:23] What do we get?
[01:37:28] does
[01:37:29] It passed this along to me in a way that I can get at it easily.
[01:37:37] - Okay, 'cause like, I know React Router has like,  use search params, but I was thinking,
[01:37:44] that I might...
[01:37:46] See it here.
[01:37:48] Let's double check. It's not like some other thing wants to--
[01:37:53] Jobs.
[01:37:55] Thank you.
[01:37:58] Thank you.
[01:37:59] Okay.
[01:38:00] I'm gonna have to do work myself to get the queries off the query parameters. Okay, does request have a URL on it?
[01:38:09] I'm just not seeing.
[01:38:12] All right.
[01:38:16] Ergs0.request.
[01:38:21] I don't know why I'm spreading anymore. I already know that it only has one on it.
[01:38:28] Beautiful, okay.  So I'm gonna parse, I mean, maybe we can look,  but otherwise I'm just gonna parse the query parameters myself.  I mean, it's not too difficult thing to do.
[01:38:41] Yeah, let's go here, docs.
[01:38:46] Not conventions, I want...
[01:38:49] Data loading.
[01:38:51] route prams.
[01:38:53] Thank you.
[01:38:53] How about route query params?
[01:38:58] Thank you.
[01:39:00] Say search.
[01:39:03] Pfff.
[01:39:09] - Okay.
[01:39:12] Yeah, okay, yeah.  This is what I meant by, it's not hard to parse this myself.  They're just like, use the platform.  See, this is what use the platform means.
[01:39:21] it means...
[01:39:24] It means exactly this.
[01:39:28] Thank you.
[01:39:29] Thank you.
[01:39:30] This request.
[01:39:33] Interesting that they give you the convenience of--
[01:39:38] for the...
[01:39:40] The prams, but...
[01:39:42] Yeah, so I want page.
[01:39:46] is page and then
[01:39:51] or one, and I guess it's...
[01:39:58] Uh.
[01:39:59] Thank you.
[01:40:02] Make it a number.
[01:40:06] Thank you.
[01:40:07] Thank you.
[01:40:08] Thank you.
[01:40:09] Beautiful. And then...
[01:40:14] Yeah.
[01:40:16] This is going to be JSON, this one.  We're all done.
[01:40:20] Thank you.
[01:40:22] Thank you.
[01:40:24] All right.
[01:40:27] And then we just need to set up our API. So I'm just going to make top level, I'm going to make a new file and I'm just going to call it API.ts.
[01:40:40] Thank you.
[01:40:41] And from here, we should be able to just--
[01:40:47] What did I do?  API.notts here.
[01:40:51] I already kind of...
[01:40:54] Thank you.
[01:40:55] Thank you.
[01:40:57] I wonder how they can handle fetch. I'm going to trust that they can handle fetch. Is server
[01:41:06] It's always server. So we don't actually have to worry about that. We're just going to assume anything that says server is true is just going to be necessary here. So we're just going to do this.
[01:41:17] Thank you.
[01:41:18] Thank you.
[01:41:19] Okay.
[01:41:21] And...
[01:41:25] Thank you.
[01:41:26] Thank you.
[01:41:29] Okay.
[01:41:31] And then what we need to do in our route here is just
[01:41:40] pass it. So yeah, this becomes cons stories equals await.
[01:41:47] Fetch API...
[01:41:51] Thank you.
[01:41:53] this fun thing.
[01:41:57] And then
[01:42:02] this becomes...
[01:42:07] Async function.
[01:42:11] And then we just need map stories, which--
[01:42:15] Is--
[01:42:18] this
[01:42:19] Yeah.
[01:42:20] mapping because the URLs don't match what actually the Hacker News APIs use.
[01:42:29] So--
[01:42:32] Thank you.
[01:42:32] Type.
[01:42:36] Age is not a function.
[01:42:40] God, I hate TypeScript.
[01:42:47] Good luck.
[01:42:48] Oh, man.
[01:42:49] you
[01:42:51] It's complaining because it's a string, and it's not exactly one of these values.
[01:42:57] Hmm.
[01:43:01] Mm-hmm.
[01:43:04] I could make a union type out of it or type of something or other.  There's so many comments in the comment thing that people are probably--
[01:43:12] But no, people are just chatting with themselves.
[01:43:16] important.
[01:43:17] I'm glad there's some interesting conversation going on in the chat.
[01:43:26] Oh, why can't I just make this?
[01:43:29] Yeah, that's why I tried it. It didn't work. I was like, as any, please.
[01:43:35] If I can do this one as any.
[01:43:37] as any.
[01:43:39] Yes.
[01:43:41] Way.
[01:43:44] Yeah.
[01:43:45] Thank you.
[01:43:47] Thank you.
[01:43:49] Can any of it?
[01:43:53] Bye.
[01:43:55] This is why TypeScript is my favorite language.
[01:44:02] Maybe this didn't need to be a const.  Maybe this is just being annoying.
[01:44:09] Yeah, you're right. That's the solution to every problem.
[01:44:13] Thank you.
[01:44:17] Thank you.
[01:44:18] Thank you.
[01:44:20] So,
[01:44:22] .
[01:44:24] Thank you.
[01:44:28] Thank you.
[01:44:29] Thank you.
[01:44:30] Thank you.
[01:44:31] Oh, nice.
[01:44:32] I mean,
[01:44:33] It seems to be ignoring TypeScript, so that makes me happy.
[01:44:39] Okay, yeah, so it's complaining...
[01:44:42] about the fetch request because it's not getting the right data.  Okay, so this is actually going through.  The problem is...
[01:44:50] It is,
[01:44:51] doesn't
[01:44:55] It...
[01:44:56] the type will yeah let's let's console here cons or let's let's see what this would
[01:45:02] But what we're getting here, console.log, page, and type.
[01:45:13] it
[01:45:16] Thank you.
[01:45:17] Thank you.
[01:45:24] Thank you.
[01:45:31] Thank you.
[01:45:34] Thank you.
[01:45:36] No, TypeScript hates me.
[01:45:42] Thank you.
[01:45:44] It's interesting, though.
[01:45:48] It's actually not getting to the console log again anymore.
[01:45:52] Thank you.
[01:45:53] Thank you.
[01:45:58] must have...
[01:46:00] Thank you.
[01:46:02] All right, yeah, okay.
[01:46:05] Thank you.
[01:46:08] Thank you.
[01:46:09] Type as t.
[01:46:15] of map
[01:46:17] - Peace.
[01:46:20] Thank you.
[01:46:22] Pfff.
[01:46:26] Let's get rid of the annoying stuff.
[01:46:37] Okay. Well, let's see if we can get to a state where stuff console logs again.
[01:46:51] Thank you.
[01:46:53] Thank you.
[01:46:59] Thank you.
[01:47:04] Okay.
[01:47:06] It consulogs here, but something I'm doing below here is pissing it off.
[01:47:13] because it's not getting to this one.
[01:47:18] Thank you.
[01:47:19] Although it is...
[01:47:20] Fetching it.
[01:47:24] Thank you.
[01:47:25] That must be a nice world you live in. This is not the first time I've had stuff like this happen. This happens all the time to me.
[01:47:37] Thank you.
[01:47:38] Okay. So what is our problem? It's called conflog debugging.
[01:47:48] Thank you.
[01:47:49] Thank you.
[01:47:50] Thank you.
[01:47:53] Thank you.
[01:47:54] Thank you.
[01:47:58] Yeah.
[01:47:58] Thank you.
[01:47:59] Okay. Well, if you can get here, then hopefully you can get here.
[01:48:04] Thank you.
[01:48:06] And
[01:48:09] Oh, because type's undefined.
[01:48:13] Right.
[01:48:17] Oh, no, no, it's here. It's T jobs, too.
[01:48:20] Thank you.
[01:48:22] Thank you.
[01:48:24] So why is node fetch thinking that -- I'm passing undefined here. Because jobs --
[01:48:38] Oh, that's interesting.
[01:48:40] Thank you.
[01:48:40] How is it?  Oh, it's because I typed it myself.  I'm just being dumb.  I'm sorry, guys.  If I'd actually gone to job, it would have worked.  It's just because I typed it myself.  And it wasn't matching the map.
[01:48:52] Thank you.
[01:48:54] This is-- that's on me.  Sorry.  That is completely on me.
[01:49:00] This is why you code live on stream with something you have not tried before.  So you can show people all the great stuff.
[01:49:09] Okay, sweet.
[01:49:11] Thank you.
[01:49:12] Um...
[01:49:13] OK.  So other than TypeScript being a jackass, we are actually OK.  And then let's let it rip.
[01:49:25] Yeah.
[01:49:27] There is something that I've fundamentally done wrong with the application structure.
[01:49:35] making Remix upset at me.
[01:49:39] which is unfortunate because what's happening here is if we go to the network tab and look at the page as it's loaded, we essentially...
[01:49:54] Thank you.
[01:49:55] Thank you.
[01:49:57] Render the header.
[01:50:01] And
[01:50:02] No children. Why is there no children coming from the server? Did I do something here? No. Why is there no children coming from the server?
[01:50:13] children, children, layout component.
[01:50:16] Yeah.
[01:50:17] into outlet.
[01:50:19] Thank you.
[01:50:21] Okay.
[01:50:24] New.
[01:50:25] Sweet, so this actually works. The problem is it's not handling slash properly.
[01:50:34] Um,
[01:50:36] basically I was trying to get a catch-all route and slash is nothing.
[01:50:44] Thank you.
[01:50:48] - Index is returning.  Is this something I'm doing?  Or is it's the way that the router is matching?
[01:50:57] Thank you.
[01:50:59] He would know. This guy, you want to thank someone for solid app router? It's this guy.
[01:51:05] But, you know,
[01:51:09] Okay.
[01:51:10] But let's...
[01:51:12] Let's ignore that for a second.
[01:51:13] What we built actually works.
[01:51:16] Thank you.
[01:51:16] Thank you.
[01:51:18] So we did build it.  We lost a few people along the way, a few casualties to the issues I was having, but...
[01:51:29] Oh, right. It's React. It's complaining about keys.
[01:51:34] Man, I haven't dealt with this in years.  Oh, this is fun.  There's keys.  Oh, man.
[01:51:41] And you want keys because if you don't put a key--  you definitely want keys.  Story--
[01:51:49] I haven't seen a key for ages.
[01:51:52] Woo-hoo.
[01:51:55] This is a fun.
[01:51:57] I don't know why it's complaining about that, but we're not going to, hopefully we don't have to worry about that warning.
[01:52:02] Thank you.
[01:52:03] So interestingly enough,  this all works.  And if we go to the,
[01:52:09] Yeah, it's just the router doesn't work this way.  OK.
[01:52:12] OK.
[01:52:14] Whew. That's interesting.
[01:52:19] Because the whole reason I did it this way using the star route was because I was hoping the star route would match.
[01:52:25] on this, but it doesn't. So
[01:52:28] Thank you.
[01:52:30] but
[01:52:32] So, I mean, my expectations were a little bit different there.  Okay.  But as I said, honestly, this is the app I want to build here.  I'm not going to bother with anything beyond that.  What I'm going to do is I'm going to make...
[01:52:52] dummy page for the
[01:52:55] Like, we're not going to--
[01:52:56] I don't.
[01:52:57] think I'm going to bother with
[01:52:59] with
[01:53:01] Thank you.
[01:53:02] Wait, did it just delete the whole folder? Of course it did.
[01:53:09] Thank you.
[01:53:11] God, VS Code's awesome, isn't it?
[01:53:14] Thank you.
[01:53:15] Thank you.
[01:53:17] Did you guys catch that?
[01:53:19] All right.
[01:53:20] It deleted the whole folder with all the files in it.
[01:53:24] And then it
[01:53:26] Thank you.
[01:53:27] Then when I restored it, it didn't bring the files back.
[01:53:32] Thank you.
[01:53:33] Thank you.
[01:53:36] I mean, it didn't remove most of our work, to be fair.
[01:53:42] like the important work, but it did remove the story component, which is unfortunate.
[01:53:50] Because I can't undo to it, which means when we can do this again, it's just going to take me three minutes.  Sorry about this.
[01:53:57] We lost the nav end story.  Oh, man.  That's funny.
[01:54:04] Because I wanted to clean up. Okay. Sorry, people. I'm just going to do this really quickly again.
[01:54:13] Now that I know that what we're doing,
[01:54:15] This will be-- actually, it was pretty fast last time.  But this will be just the tiniest bit faster.
[01:54:22] Thank you.
[01:54:23] It was definitely really cool how
[01:54:27] how similar the pattern is here, that it was really easy.
[01:54:31] for us to just convert stuff from solid to React.
[01:54:36] The only thing is, can we get a code mod to ternary all the show components here? Because, man, that would have been nice. Definitely.
[01:54:53] Because...
[01:54:58] Yeah, there's just no--
[01:55:04] quick way to do this, I think.
[01:55:07] Microsoft doesn't like me. Yeah. That's so unfortunate. You, like, select something, and then it's like, no, it's not quite what you selected.
[01:55:18] I probably should have been paying more attention, admittedly, but like...
[01:55:24] I
[01:55:25] Yeah.
[01:55:27] And then at least this part was like really, really easy.
[01:55:32] Where's the fallback?  There's the fallback.  Because everything's off props for this part of it.  So I didn't even have to do any single transformation  or anything.
[01:55:42] This is a place where other than the clunky ternararies we're doing here, solid and reactor identical.
[01:55:54] Oh, sorry, everyone. It's a perfect time for this to happen since I get everything working.  I don't know if someone in the chat wants to research and figure out how we can  do the index route, I'd be pretty stoked about that. It doesn't look like it's giving me a  catch-all top level that catches the index route, which, again, doesn't surprise me because I actually hit this before with
[01:56:23] was it Ember Router?
[01:56:26] the algorithm that they used didn't match star against index.  And I had to change it when I wrote my own routers.  But because it just seemed, you know, that reasonable use case.  So you know what?  Let's just go this way.  But--
[01:56:49] I can understand why that might not be the case.
[01:56:54] This one's actually just a
[01:56:57] And...
[01:56:58] And
[01:57:00] Amen.
[01:57:03] that document.
[01:57:06] And then--
[01:57:09] Nav, this one's way easier.
[01:57:12] Bye.
[01:57:13] It's just class name...
[01:57:19] Bye.
[01:57:20] Thank you.
[01:57:22] Href 2.2.
[01:57:27] Except for the last one, I'll change it back.
[01:57:30] This one's a real HF.
[01:57:33] I'm gathering this is just because of legacy. Because given how, like, used the platform they are on the Remix team, I think if they did it again, I suspect they wouldn't use two on the link component. It's just...
[01:57:47] It's just...
[01:57:48] Like it's being different for like no reason.  When you could-- you know what I mean?  Like this could be href and it would just feel more natural.
[01:58:02] Bang.  Hacker news demo working except for this weird warning that I don't know why that's happening.
[01:58:09] essentially here. Now, the only thing is,
[01:58:15] this route route route doesn't match properly. So what we need is the problem is this is this is this is how wildcard is I can get so I don't think I can do this without using some different type of routing. Like either I copy the file, which, you know, knowing me actually is something you know what that is completely something I would do. I
[01:58:40] I-- for something like this, I don't feel like it's worth wasting people's time by me, like, looking things up, right?
[01:58:49] I could spend a minute looking things up, but--
[01:58:54] Generally speaking,
[01:58:58] I mean, this makes life really easy.  This just becomes top.
[01:59:01] Thank you.
[01:59:03] Yeah.
[01:59:05] Thank you.
[01:59:07] Mm-hmm.
[01:59:09] You need this stuff.
[01:59:12] Thank you.
[01:59:13] Excellent.
[01:59:16] With top news.
[01:59:21] Thank you.
[01:59:24] Um...
[01:59:26] Thank you.
[01:59:28] Thank you.
[01:59:30] Thank you.
[01:59:33] Thank you.
[01:59:33] I mean...
[01:59:38] Yeah.
[01:59:39] There you go. I mean, this is taking a bit too extreme. You know, the whole thing about wet versus dry code bases, I have no problem duplicating. But in this case, it is actually the exact same thing. So that's not a fair thing. I think they actually have a way of defining routes. Let's just let's just play this, because I think they have a way of
[01:59:57] actually
[02:00:00] saying like, hey, you can also add routes and not bother with
[02:00:08] just the file-based routing.
[02:00:11] I know it...
[02:00:13] and
[02:00:15] Yeah, we already did that.
[02:00:16] Yeah, yeah, yeah, yeah.
[02:00:24] No.
[02:00:25] No, no, not that.
[02:00:29] What else do we have?
[02:00:32] Not found handling.
[02:00:40] Yeah, see, it's because I'm not...
[02:00:42] Thank you.
[02:00:43] Mm-hmm.
[02:00:44] All right.
[02:00:46] Yeah, it's because the error handling can...  Like, sometimes you use...
[02:00:52] Star Rouse is like sort of air handling.
[02:01:00] Thank you.
[02:01:01] I'm pretty sure there's
[02:01:07] There is a
[02:01:10] Mm.
[02:01:12] because I need to get it into the same router is the thing.  I can't just make like a new routes component.
[02:01:18] I need to actually...
[02:01:20] essentially
[02:01:22] get it into the same router.
[02:01:25] Yeah, you know what?  I didn't figure it out.  So we're not going to worry about that.  We're just going to...
[02:01:32] That's enough time on that. Let's take this to the next step. Okay? So, ta-da, we have a remix app, sources, console, elements, network.
[02:01:45] Okay, yeah.
[02:01:47] I just want to-- can we build this for real and not do dev?  That's what the readme is for, right?
[02:01:54] what's the next step?
[02:01:57] NPM run build.
[02:02:00] All right, beautiful.
[02:02:02] Thank you.
[02:02:05] Thank you.
[02:02:06] npm run start.
[02:02:10] Okay.
[02:02:12] Beautiful, okay.
[02:02:16] Okay.
[02:02:18] Thank you.
[02:02:19] No, that can't be right.
[02:02:20] It is right. Crap. Just a second.
[02:02:27] It is Jesus.
[02:02:29] Thank you.
[02:02:31] Thank you.
[02:02:32] Can I-- OK.
[02:02:35] - She have a script?
[02:02:37] Thank you.
[02:02:37] Refresh.
[02:02:40] what
[02:02:42] Oh, React DevTools.
[02:02:45] Die in a burning pit, React DevTools.  It's funny because it...
[02:02:50] Yeah, this is my browser extension stuff.
[02:02:54] Thank you.
[02:02:55] Can I just kill React F-Tools?
[02:02:58] like manage extensions.
[02:03:01] Yeah.
[02:03:03] Go away from React DevTools.
[02:03:06] It's funny, I forgot I even had that.  As I said, I haven't probably used it in years.
[02:03:11] All right, let's do this.
[02:03:14] Better. Okay. 63.9 kilobytes payload. Um,  uh,
[02:03:20] Okay. I always like checking this to kind of understand the initial payload. For React app, that's not bad, actually. The next JS demo that I saw was about 120. I think if someone did it now, they could do it a little bit smaller.
[02:03:37] Svelte is 13.5 kilobytes solid is 13.6 kilobytes. Um, I think I saw a preact one at about 22 kilobytes and, um,
[02:03:53] Yeah, that's not bad on pure size.
[02:03:57] Can we deploy this sucker? That's probably the next question, right? Because I want to put this somewhere so that we can actually try it out in a real deployment environment.
[02:04:07] I guess the other thing I want to do, yeah, okay.  So they're smart enough to do the module preload on the chunks.  And let's see what they do here.  So the module preload on the chunks here,
[02:04:17] Do...
[02:04:19] All right.
[02:04:21] I didn't, okay, let's do a little experiment here.  What I didn't do that I should do is,
[02:04:28] What do these go to? These go to story slash ID. Okay. Let's make a -- let's make a -- let's
[02:04:34] A quick question.
[02:04:36] route here that's just going to be, like, not complete yet. And it's just going to be
[02:04:46] And then--
[02:04:49] New file, dollar sign,
[02:04:52] Mm-hmm.
[02:04:54] Right. And then we'll just like go export.
[02:04:59] default
[02:05:01] Thank you.
[02:05:03] whatever.
[02:05:06] Thank you.
[02:05:07] and just have it like return if...
[02:05:14] uh
[02:05:17] Thank you.
[02:05:18] Thank you.
[02:05:19] Thank you.
[02:05:20] Thank you.
[02:05:21] All right.
[02:05:22] I may be naming it.
[02:05:30] Okay.
[02:05:31] The reason I'm doing this is I just want to check really quick what happens when we
[02:05:38] When we go here, what story is plural?  No, it is plural.  OK, so that's solid version.
[02:05:45] plural...
[02:05:47] So we're defaults.
[02:05:53] Thank you.
[02:05:55] Thank you.
[02:05:56] Uh-huh.
[02:05:58] Thank you.
[02:06:00] Yeah.
[02:06:02] - Oh, that's interesting.  'Cause there's no data loader on this route.  So I wouldn't expect,
[02:06:09] it to match on it because it's more specific than this route.
[02:06:14] OK, let's just make sure--
[02:06:18] this is clean slate.  Because what should be happening is  assuming that it can match on stories,
[02:06:24] ID. This should take prevalence over the star match.
[02:06:28] which means that, and there's no matching here.  So this should just be a straight up nested router.
[02:06:37] Unless I screwed up something on their conventions. Let's go back to route file names.
[02:06:44] Thank you.
[02:06:46] Nested URLs, but not nested routes, yeah.
[02:06:49] Yeah, there's no nested thing.  So this should be...
[02:06:57] This should be this.
[02:07:01] Yeah.
[02:07:01] Do they do anything spoofed?
[02:07:05] Oh, you are right. I'm no longer in dev mode. Silly me. Let's just double check that in dev mode. This is obviously great. Not implemented. Thank you.
[02:07:21] Thank you.  Sometimes you do stuff like this.
[02:07:32] All right.
[02:07:34] Thank you.
[02:07:36] All right, so we could probably implement that page pretty quickly, but let's just for now leave it at that. And the reason I want to do this is I want to see how it handles preloading, like how aggressively does it preload by default? Like,
[02:07:53] Thank you.
[02:07:54] If I click to this page, does it load another chunk?  Okay, good.  It does.  Okay.  So it is only reloading the chunks that are on that page.  So this 64...
[02:08:04] 0.4 kilobytes are real.
[02:08:06] It's funny that it just got bigger, though.
[02:08:10] You know, like I added a page and the main bundle got bigger.
[02:08:15] For some reason.
[02:08:18] the turtle.
[02:08:19] before us.
[02:08:20] Thank you.
[02:08:21] Hmm.
[02:08:22] Anyway, OK.
[02:08:25] Interesting enough. Okay. So yeah, how do we, how do we deploy? I guess this is a remix project. So
[02:08:32] I can't just get away with...
[02:08:36] Yeah, I wonder if I started the project in the wrong mode.  I guess the question is, if you-- let's read the readme.  If you go through this thing and you make it,
[02:08:47] OK, it is just a node server.
[02:08:51] I see. Or they're just saying pick up and...
[02:08:54] Drop the F.
[02:08:57] Thank you.
[02:09:00] Yeah, okay.
[02:09:02] Yeah, look...
[02:09:05] Okay, you know what? Yeah, we're going to do that. We're going to keep both copies so I don't have an accidental VS code malfunction again. But we're going to go back and we're going to go...
[02:09:19] MPX create remix.latest.
[02:09:25] And we're going to--
[02:09:27] Pick up that cool animation again.  And we're going to call it remix hacker news.
[02:09:35] And we're going to make a
[02:09:39] We didn't need any other outside dependencies.
[02:09:50] Thank you.
[02:09:57] - Okay, sweet.  And then I'm gonna open up a Nubius code window.  And while there's all those great,
[02:10:06] Actually,
[02:10:09] Yeah, you know what?
[02:10:10] I'm hopeless with that stuff.  So let's just...
[02:10:14] Thank you.
[02:10:14] I grew up on Windows.  I apologize to everyone.  I used Windows for years.  I never had any problem with it.
[02:10:22] I'm used to GUIs, so I am not going to run a terminal commands right now.  I am just going to...
[02:10:31] Thank you.
[02:10:31] basically wholesale...
[02:10:35] Got the app folder.
[02:10:38] And...
[02:10:39] Thank you.
[02:10:45] Go here to this project.
[02:10:49] And
[02:10:50] Copy this app folder. I love that VS Code at least lets you do stuff like this.
[02:10:58] What?
[02:10:59] outside there.
[02:11:01] And then...
[02:11:06] Let's read the readme.
[02:11:09] Thank you.
[02:11:10] OK.
[02:11:14] I already have the CLI. Let's see if I'm logged in.
[02:11:21] I'm already logged in, of course.  OK, perfect.
[02:11:26] And is that all I need to do?  Netlify.
[02:11:30] - Isn't it?
[02:11:35] Thank you.
[02:11:47] Thank you.
[02:11:49] Thank you.
[02:11:51] Sure.
[02:11:53] *snap*
[02:11:54] Remix.
[02:11:55] Hacker News.
[02:12:04] All right.
[02:12:05] And then
[02:12:08] until
[02:12:10] Netlify to do some stuff.
[02:12:15] Beautiful. And then let's just, before we do anything, let's just make sure our app still runs.
[02:12:24] Um,
[02:12:25] We can probably, well, let's make sure our app runs before we do anything.
[02:12:31] Okay, our app still runs. Okay. This one, solid, I'll leave open for a minute. This  remix one, we can close.
[02:12:41] And then this is our new Remake Hacker News one. Okay, perfect. So it works. npm run build.
[02:12:47] Be a run start. Let's just make sure.
[02:12:53] Oh, the netmify. I guess the way you start in each is going to be different based on the adapter. We have similar kind of adapters in SolidStart, except I alias them all to npm run start. But I have to admit, they don't all work.
[02:13:12] beautifully because there's like different deploys preview deploys and all that stuff okay so i'm
[02:13:18] Let's just find the toy.
[02:13:23] .
[02:13:29] Thank you.
[02:13:32] Thanks.
[02:13:33] And let's go to the draft website.
[02:13:40] And we,
[02:13:41] Have a wonderful day.
[02:13:43] Remix Hacker News example.
[02:13:47] And actually, you know what? Let's just do all the way. Let's go to prod.
[02:13:52] Thank you.
[02:13:54] While we're doing that, I'm going to load up solid HN.
[02:14:04] Thank you.
[02:14:05] Yeah.
[02:14:08] Just a second.
[02:14:12] Let's see.
[02:14:13] I'm not going to do any of that.
[02:14:16] Let's see this.  Beautiful, okay, sweet.  Actually, let's go to Twitter and just scroll down really, really fast.
[02:14:26] because what i want to do is
[02:14:28] I
[02:14:29] I just like looking at--
[02:14:35] So what I'm going to do here
[02:14:39] is...
[02:14:40] have some fun with this.
[02:14:44] Oh yeah, here we go.
[02:14:51] I've never done this, so.
[02:14:53] Honest, honest, see?
[02:14:54] Oh, built-wide solid.  Ooh, let's fix that.  Sorry.
[02:14:59] Let's fix that really quick.
[02:15:02] I think I fixed some of this stuff.
[02:15:05] previously.
[02:15:07] when we were doing this stuff.  But I think what happened was because I deleted the component  folder by accident.
[02:15:16] Let's fix that. Built with remix.
[02:15:20] Okay.
[02:15:21] And
[02:15:26] What is it?
[02:15:27] Remix.run.
[02:15:30] Thank you.
[02:15:32] Thank you.
[02:15:33] You have to know what H2E has on that. That sounds terrible. What's their website? Remake Stormramp, yeah.
[02:15:40] Let's fix that real quick.
[02:15:46] Thank you.
[02:15:48] All right. Cool. Okay.
[02:15:56] see
[02:16:00] I think Remix has got a bunch of really cool stuff.  And they've really thought about how they deliver the experience.  This is the area I'm not as strong in these days.
[02:16:10] just to kind of understand
[02:16:12] Yeah, OK.
[02:16:14] That's resources. Let's talk network tab. Yeah, OK.
[02:16:19] Yeah, let's go all...
[02:16:21] All.
[02:16:22] Okay.
[02:16:23] Okay, okay.
[02:16:24] Let's do one of these.
[02:16:28] Okay.
[02:16:30] Thank you.
[02:16:31] Let's do a dev timeline.
[02:16:33] What are we dealing with here?
[02:16:38] All right.
[02:16:41] Um...
[02:16:43] I'm sorry, guys. I'm going to zoom out. I can't see anything when it's so sting. So hopefully you can see what's going on. Beautiful. Right. So we got a first paint.
[02:16:55] event uh network yeah all the resources come up front and pay by account i guess we can  ignore network for the most part yeah first pain event coming in
[02:17:05] at
[02:17:06] 306, first content full paint,
[02:17:11] Loss, Comma 306, DLC, and then final load event 398.  But Largest Contentful Paint, that's what we care about mostly.
[02:17:21] 306. Let's do this a couple more times. I just want to get a feel for this.
[02:17:27] Sometimes
[02:17:28] 348
[02:17:31] 348
[02:17:32] yeah yeah it's all the same i forgot that we're both we're not using streaming  netlify uses aws functions doesn't support streaming so
[02:17:40] like this is just the core experience.  Just kind of get an idea here.  It's always interesting to see like the work being done by React
[02:17:48] any kind of framework when they do hydration. This is what Misco like showing when he's doing the quick demos, right? Because you can kind of
[02:17:56] um
[02:17:57] Thank you.
[02:17:59] see these long tails where everything's happening.  And the trickiest part, obviously, with async rendering is you don't get to do much work until...
[02:18:09] till later. Okay. So that's cool. That gives me kind of a ballpark.  Let's see how we're doing here. I just want to
[02:18:17] Let's do one of these.
[02:18:22] I imagine these are going to be really similar.
[02:18:26] 298.
[02:18:29] 298, let's just do another one.
[02:18:35] Yeah. This...
[02:18:37] Yeah, this one is 3.36 this time.
[02:18:42] Yeah.
[02:18:43] Thank you.
[02:18:45] 277.  OK.
[02:18:47] Yeah, the biggest thing is like,
[02:18:49] everyone's going to ace a lighthouse score with a site this, you know, this simplistic 348. It's interesting, though, because
[02:19:01] When-- does the final--
[02:19:04] like when does the hydration end and I think
[02:19:07] I think...
[02:19:09] Thank you.
[02:19:11] I think for the most part,
[02:19:13] all that work is happening up front.  Let's look at these timelines.
[02:19:18] Yeah.
[02:19:20] Thank you.
[02:19:21] What's this one at 314?
[02:19:24] Let's switch through a few of these different timelines  and look at-- the fastest one was our first one.  So we'll use that one.
[02:19:33] Everything's done by 339.
[02:19:37] This one was actually end up being the actual fast one.  Actually, we should probably look to here.  So about 320.  Okay.  And then...
[02:19:47] Same kind of, well, actually, I guess this is where the hit happens.  This is, let me do this again.  Because the first paint is,
[02:19:57] That was a bad run. We're not going to count that one. Let's try this again.
[02:20:01] Thank you.
[02:20:02] First paint is...
[02:20:05] Yeah, that's a good one.
[02:20:07] And the load is 414.  Yeah, yeah.  So that's interesting.  It takes like a whole extra 100 milliseconds for react to hydrate.
[02:20:14] Um,
[02:20:15] You don't always get to do these sort of comparisons.  But the initial page load is actually very similar,  the time and server rendering.  This is something I like to point out to people.  Because if you look at Benchmark Sol,  it's 10 times faster rendering than React.  But it doesn't actually--
[02:20:34] matter. The latency here is on the data fetching to the API. And then at that point,
[02:20:40] Um...
[02:20:42] you know, the, the load timing is going to, um, really depend on how much hydration work you need  to do. So yeah, that, that, that, that's kind of like that, but let, let, let,
[02:20:54] Let's see what happens. Like, does this get exaggerated or worse if someone's on a bad network?
[02:21:00] Let's do a couple of fast 3Gs and just take a look  and see how that kind of affects our experience here.  So fast 3G is not the slowest network,  but it's slow enough.  You gotta, okay, let's go.
[02:21:15] Yeah.
[02:21:15] Yeah, yeah, look at this baby, fast 3G, very fast, 1268.
[02:21:23] And yeah, it's just going to be a single number.  This is why I like streaming, because the way it works on different networks is a little bit cooler.  OK, let's do this, Fast 3G.
[02:21:37] Run again.
[02:21:40] All right.
[02:21:45] Thank you.
[02:21:47] Again, about 1270, very similar.  And then...
[02:21:53] 16 for document finish.
[02:21:56] Thank you.
[02:21:57] 13. Oh, yeah. Wow.
[02:22:00] Is that because of the script loading time? Let's run these two again. That's 300 milliseconds difference. It's like getting close to half a second difference. That must be just a blip. Let's do that again.
[02:22:14] Thank you.
[02:22:14] Because like this isn't CPU, this is just network.  Yeah, what do we got here?  11, yeah, yeah, that was just a blub.
[02:22:23] Oh, no, 16.  What the?
[02:22:25] Interesting. Well, this isn't Remix's fault. I'm sure this is React, but that's interesting.
[02:22:32] That is like a huge...
[02:22:35] difference in hydration time.
[02:22:38] like hundreds of like
[02:22:40] for really like a nothing app.
[02:22:43] but like 300 milliseconds.  - Okay, yeah, that's interesting.  Okay, well.
[02:22:51] Thank you.
[02:22:52] Thank you.
[02:22:53] OK, but I mean, the core thing is--  this is just React server rendering and stuff.
[02:23:02] I imagine when-- maybe when they move to Preact or whatever,  we have kind of different numbers here.
[02:23:08] But mostly...
[02:23:12] It was really easy to build this page.
[02:23:18] Look at this.  Sorry, that's a long one.  We were able to just like go in, build our routes exactly how we wanted to, just build
[02:23:29] load the data, just fetch it right in here.
[02:23:32] Use the data.
[02:23:34] And then it just works.  I like this pattern a lot.  I especially like it being in the same file.  It just feels really connected.  And there's no use effect or anything.  This is really, really simple to do.  You can just picture just authoring your pages that way.  I think I might go and borrow this for Solid, actually.  I really like this loader thing if I can-- as I said,
[02:24:03] it's interesting because it's non-granular, but maybe that's fine. Like if you, if you look here,  the solid example, the component's the same, but then we put the data in a separate function and  it's a little bit different. I guess it's kind of the same thing, but really, really, really cool  pattern to just kind of like be able to use that. Sorry, that's a solid one again. Sorry,  to use the, the data this way and just have it like, uh, just, uh,
[02:24:27] This makes data fetching so much easier.
[02:24:31] I don't know. Anything else anyone wants me to try? This stream is already a bit longer than I was originally intended. But I think it kind of got a feel for stuff. I especially think I need to dig more into the actions a little bit and understand that a bit, especially like the way you can return JSON or redirects. I think that's like...
[02:24:52] brilliant, and this common API that they've offered here.
[02:24:58] um the way yeah it just json redirect works for loaders works for actions very consistently  um i think the i think the pattern is great um i didn't do optimistic form updates that's  probably like the next place that i really want to dig into i was just curious about  if the how like the deployment story or like how the
[02:25:20] Like the, like it,
[02:25:23] I mean, truthfully, like,
[02:25:26] as I said, it's still React under the hood. So like, you can't fundamentally change the math.  But I think this will really help people author apps in a better way.
[02:25:35] Um,
[02:25:36] So I think that's pretty cool.
[02:25:40] We deployed our NetFly app, and I'll just post this in the chat in case anyone wants to try it. I might actually go and implement the rest of the Hacker News demo.
[02:25:54] you know, give people a chance to kind of play with it more. But I think this gives me groundwork. It's always hard because there's different APIs. I'm sure there's faster APIs and stuff, but this gives a kind of level of playing ground and you can kind of see yourself.  As I said, it's not like this site is going to be fast. Like, let's just do this.
[02:26:15] Thank you.
[02:26:16] Right.
[02:26:20] Thank you.
[02:26:22] Thank you.
[02:26:24] Like easy-- let's run it one more time.  I'm sure that was a blip.
[02:26:31] Thank you.
[02:26:38] Or maybe not.  OK.  I mean, these scores are good.  I don't know why it's giving it 99.  I guess it's the time to interactive.  I guess it's just the hydration.
[02:26:46] that's doing it, which is really unfortunate,  because it's not Remix's fault at all.
[02:26:51] Yeah, desktops.  Fine.  Like, these numbers are good numbers.  I think this is the killer right there because, like...
[02:27:00] I'll show you actually. These numbers are all going to be almost identical except for that.
[02:27:10] Yeah.
[02:27:11] Thank you.
[02:27:13] Thank you.
[02:27:14] I mean.
[02:27:16] It's also kind of maybe an unfair thing.  It's not just the hydration time.  It's like you're comparing a 14 kilobyte demo  with a 64 kilobyte demo, right?
[02:27:25] Yeah, see, look, these loading times weren't actually much different, but one--
[02:27:32] It's basically interactive immediately at the time the content loads instead of almost half a second later.
[02:27:39] So,
[02:27:40] I think that's probably going to be the biggest difference here.
[02:27:45] I mean...
[02:27:48] Yeah.
[02:27:51] Yeah.
[02:27:51] I'm not sure that any React framework is going to really escape that, honestly.
[02:27:59] the Next.js demo.
[02:28:02] Well, actually...
[02:28:04] Do I even have-- have you seen this?
[02:28:07] Not with delays.
[02:28:09] Thank you.
[02:28:09] This is the Vercel Next.js demo. I don't think it's quite the same thing, right? But let's just...
[02:28:18] feed that in.
[02:28:20] To why not?
[02:28:23] Here's server components and streaming and all the bells and whistles with React.
[02:28:29] Yeah.
[02:28:31] Thank you.
[02:28:32] for it.
[02:28:33] To be fair, I think this demo can be optimized more.
[02:28:38] Yeah. Wow.
[02:28:40] I mean, this is interesting, but this is it.
[02:28:45] Time to interactive.  A little gut punch.
[02:28:49] Um...
[02:28:51] Thank you.
[02:28:52] Um...
[02:28:54] Yeah, no, I mean, that's definitely is a hit.
[02:29:04] I mean, these are still 99s.  It's just like...
[02:29:08] 100 in Lighthouse for a demo like this is table stakes.  You know what I mean?
[02:29:17] It's like 99, like this kind of range. It's just this is definitely where slowdown is, where optimization. Like on a desktop, you're not going to notice it.  Oh, wow.
[02:29:34] That is good.
[02:29:38] Yeah, no.
[02:29:39] Okay.
[02:29:40] Thank you.
[02:29:43] Yeah, no, definitely. And it already has, if I haven't been clear. The reason I was able to port stuff so easily across when you're watching the demos was because
[02:29:54] like this whole react router influence thing is the same in solid and they call used loader data we
[02:30:00] that use data.
[02:30:01] these patterns are already, like, I look at Remix,  I said, again, with great detail.  I think I want to look at the actions and see, you know,  and the forms and see what I can do there.  But, like, the nested routing was already a thing,  actually, honestly, before even Remix.  But, like, and this, like, very similar kind of mentality.  And seeing such similarity, it's easy to kind of, like,  for us to, like, look at and see where tweaking it.  I think it's really awesome, actually.  I think the API and the experience part,
[02:30:31] at like just how they're using the like the request objects and the things that are already there and not inventing this thing. And I think the coolest thing it's in a demo I didn't get to do it today is the optimistic updates. The fact that it's just as simple as using a hook to get the form submission is just
[02:30:46] brilliant it's such a simple solution that just that just simplifies like the whole thing like I
[02:30:52] I'm pretty sure everybody's going to have something like that within the next six months.  It's just it's such a really cool thing.  It's they see that kind of movement.
[02:31:03] Thank you.
[02:31:04] Yes, you can't. I mean,
[02:31:07] I wonder though,  if everyone adopted party town,  like the offloading the scripts,  how much of a difference certain types of hydration is?  Well,
[02:31:18] You know, like, yeah, it's interesting because
[02:31:25] I mean, how many more Hacker News demos can I find? Marco.
[02:31:30] News, let's see if we...
[02:31:33] Thank you.
[02:31:34] I mean, I wrote this one, so that's not really looking very far, but you know that it's the same. Oh, freaking Heroku. You know, never mind.
[02:31:42] Um,
[02:31:44] Mm-hmm.
[02:31:46] Yeah, I mean, I don't know if there's much else to do on the performance thing at this point. I think that where you're going to feel this is larger apps, just having a better architecture is just going to be better.
[02:32:02] Just in terms of making sure you parallelize that data fetching like we talked about earlier. I think that's enough on the page insights.
[02:32:13] But yeah, the patterns are great, all in all.  It's really easy.
[02:32:17] to build the stuff with Remix. And I look forward to seeing new projects being built in and find new interest, like just kind of really dig into the APIs to understand like what they're doing and how they work. I think this is like a reverse engineering paradise, so to speak. So I'm pretty excited about that. Okay.
[02:32:42] Uh-huh.
[02:32:44] Thank you.
[02:32:45] Thank you.
[02:32:46] I'm sorry. I'm sorry, Marco. I think there's something weird. And I watched the logs on the demo. I seriously I watched the logs on the demo.
[02:32:57] I mean, maybe we can get in here.
[02:33:00] Um...
[02:33:02] And
[02:33:04] And like it's
[02:33:06] The stupidest thing ever.
[02:33:09] Oh, really? Oh, come on.
[02:33:11] Later, yes, later.
[02:33:13] That's security for me. Okay. And it's like,
[02:33:18] It just fails at some point on one of the AJAX requests in the background and then it just crashes the server and it stays crashed forever.
[02:33:24] Honestly,
[02:33:26] I will have to fix this, but one little trick we can do is we can just deploy this right now for two seconds and get this back.
[02:33:38] Amen.
[02:33:39] just long enough to test it.
[02:33:41] Where was it?
[02:33:45] Bye.
[02:33:48] I was on Heroku.  I don't know if Heroku...  Heroku doesn't have...
[02:33:55] um
[02:33:58] It's still building. Heroku is like...
[02:34:03] Doesn't have quite the same performance stuff as some of the serverless functions and whatnot.  We're going to get a new demo that's going to be a lot nicer.  But...
[02:34:11] Um,
[02:34:16] Man, Heroku was such a game changer for its time, but think of how things work now. I did a stream  all about deployments. It's just so easy now with everything to just go serverless and the new stuff  like for cells been doing with like the file system stuff is just insane. I've shown this demo  before in case people have missed it. Just I wanted to show you something. You know how we always sit  here and we look at this stuff and we go, oh, wait, the coolest thing about the Marco version of this demo,
[02:34:44] is that.
[02:34:46] there's zero kilobytes of javascript because even though it all works um
[02:34:53] It's using an MPA-based thing, so it actually does all full-page re-renders all the time.  And sure, you can do that with Remix or Solid Start and just remove the script tag.  But the difference with Marco is when you go somewhere where it does need the JavaScript, it does have the JavaScript.  It's not binary like no or not.  You just bring in the JavaScript you need as you need it, which is why Marco, Quick, Astro are so powerful.
[02:35:23] by waiting too long.
[02:35:26] Let's just look what this actually means.  This is probably...
[02:35:29] I'm not going to lie, I don't know if this is actually going to have as big of an impact.  Because when you're dealing with a Hacker News demo, and you're already so close to the
[02:35:38] to the thing.
[02:35:40] I don't know why this is a low speed index.  I'm Blake Moroku, but...
[02:35:44] This has a faster first contemplative paint,  largest contemplative paint,  and time to interactive than anything that we've talked about.
[02:35:53] Thank you.
[02:35:56] - Right.
[02:35:57] But I blame Heroku here for this, because this isn't based on any of that.  And I think if this was on, well, I mean, we can see right here.
[02:36:06] Let's look at the performance time of when this loads.  If it's the front loading issue, then you know it's a problem, right?
[02:36:17] Thank you.
[02:36:20] Because it's sure the hell not hydration.  Yeah, look, this is all done by 246.  Like, that's 50 milliseconds faster than the solid example  and 150 milliseconds faster than the remix on a fast network.  You slow things down and it gets even more exaggerated.  But, yeah, like...
[02:36:40] It's Google just being biased.  What the hell does that mean?  Anyway, I'm
[02:36:46] Can't you bring JS per page with React?
[02:36:50] Yeah.
[02:36:51] Sort of, yeah, I mean
[02:36:52] Well, how?
[02:36:55] - Exactly, like from the server you can make that decision.
[02:37:00] but otherwise your client-side routing so you i guess you could choose not to include that
[02:37:06] fundle, but
[02:37:08] Like,
[02:37:09] Thank you.
[02:37:10] The difference...
[02:37:11] is like
[02:37:13] Yeah.
[02:37:15] it's,
[02:37:16] Yeah, I mean, sure, you can just
[02:37:18] based on the route, choose whether to include the script on the page or not. That's basically it. But it's interesting because like, and this is actually how SvelteKit in that, too. It's just so binary. Like you can't just like, because in that Marco page, we weren't including the JavaScript for the page, sorry, to be clear, when I went here.
[02:37:48] But
[02:37:49] The JavaScript being brought in for this page is literally just for the comment component. It doesn't even ship all the JavaScript. Per page is just very clunky. I mean, research is being done here, but generally today,
[02:38:07] Remix, Next, SvelteKit, SolidStart.  Like, we're pretty much trapped to ship all the JavaScript or ship none of the JavaScript.
[02:38:17] Like, there's some tricks that we're working on with Solid and Vue is doing similar things.
[02:38:26] But yes, if you use Astro, then you basically get like a Portman's Marco in a sense, which is fine because essentially...
[02:38:37] it's probably good enough, probably. But like
[02:38:40] I have a separate stream where I talked about this stuff from Marco, where you like Astro has the islands and you're thinking about it and quick has the quick hooks and you're thinking about it.  The difference with Marco is you just like write the app and then it's...
[02:38:51] Presto, you get this for free without even doing anything.  But that's a different stream off topic for this.  But yeah, essentially just kind of showing some kind of different characteristics and stuff.  So this fundamentally changes the characteristics of how the page loads versus not, right?  MPAs are just fundamentally different.  Quick is working on kind of bridging the gap and Marco and stuff.  And we'll see when we get there.  There's a lot of really cool technologies coming out that are going to get there.
[02:39:21] but like today we basically have single page apps that know how to remove  the script tag and or not.  And we have multi-page apps that, um,
[02:39:30] are pretty much stuck in multi-page zone,  but they have ability to ship significantly less JavaScript  while offering a consistent JavaScript build environment.
[02:39:40] Thank you.
[02:39:41] Yes, I will do a Marco stream coming up.
[02:39:46] Um,
[02:39:47] Yes, and especially when I want to talk, there's so much.  I could talk about Marco today.
[02:39:52] which is pretty crazy anyway.  But I actually want to do a stream about Marco 6  because people are getting excited about Quik,  and they should be.
[02:40:00] But I think Marco 6 will blow their minds.  It's like combining elements of that with Marco's compiler, like Svelte, and just like
[02:40:11] It's really incredible stuff. We've taken the ideas of resumable hydration and automatic analysis to a whole different level. So I look forward to being able to do a stream on that. As I said, right now, though, there is still very, like Hacker News is a perfect Marco demo, so to speak, and maybe a less perfect remix or solid demo because like,
[02:40:35] This is an MPA in its heart.  Like you don't need a lot of JavaScript here.  You don't need much interaction.  It's, you know, this is a good demo for that.
[02:40:47] Basically, if you're building a simple site,
[02:40:51] like,
[02:40:52] you couldn't go better than Marco, right?  It's, you know, if you're building Twitter today,  I probably wouldn't suggest using Marco.  You could, but like there's different right now.  And I think what's interesting is,
[02:41:07] it's converging.
[02:41:09] Right?  But, you know, which is like the hashtag transitional apps.  It's just we are still pretty far away from it converging.
[02:41:20] If I maybe I'll use Excalibur to emphasize this point.
[02:41:26] So,
[02:41:29] Thank you.
[02:41:31] A lot of people are going to build the kind of sites with Next or Next anyway, if it's not the right use case.  Oh, yeah, of course they are.  Yeah, whatever.  I mean, but in a lot of cases, it won't be that bad because the site will be simple.  Like, I like using smaller frameworks.  I think SvelteKit or Solid Start are going to, like, have a key in that zone because, like, okay, so you loaded 10 or 15 kilobytes of JavaScript.  Like, it's not the end of the world.  You know, like, this...
[02:41:54] This is mattering if you have a business based on it.  Why do you think Builder built quick?  eBay built Marco.  See a pattern?  If you actually...
[02:42:07] If you want e-commerce,
[02:42:09] If that's what you're about, you want fast page speeds,
[02:42:12] like,
[02:42:14] Yeah, I feel like I've already demonstrated that.  But what I'm trying to get at is if we have a line here, in my opinion,
[02:42:26] Like...
[02:42:28] Thank you.
[02:42:29] Thank you.
[02:42:31] And this is the golden center here, right?  Like where we're like, okay, MPAs and it's more like a range,  but if MPAs and yeah, it's not that, it's a range.  If this is the golden center where we've merged MPAs
[02:42:47] and single page apps and everything in this lovely zone right now.
[02:42:54] Like client-side rendering, which was like the starting point of all this stuff, is here.
[02:43:01] Right.
[02:43:02] And like rails...
[02:43:05] is over here.
[02:43:09] Thank you.
[02:43:09] Hotwire?
[02:43:11] is kind of like
[02:43:13] Here.
[02:43:16] Thank you.
[02:43:17] So yeah, maybe I should use labels and stuff while I'm doing this.  But so what did I say?  Rails?
[02:43:27] CSR.
[02:43:34] Hotwire.
[02:43:41] Thank you.
[02:43:45] Marco Six and Quick...
[02:43:48] are like
[02:43:49] here.
[02:43:52] Okay.
[02:43:54] Quick, Marco, six.
[02:43:58] uh
[02:44:00] Or like here?
[02:44:03] And I
[02:44:07] OK, let's put some lines over here.
[02:44:11] Thank you.
[02:44:14] Thank you.
[02:44:18] This line here is like--
[02:44:24] X.J.S.
[02:44:27] Okay.
[02:44:30] And this line here is like--
[02:44:33] Okay.
[02:44:34] SvelteKit.
[02:44:37] Remix.
[02:44:42] I'll start. So like in my mind, this is like, like there's some view and some stuff in here,  but my mind, this, this is, this is sort of like where the spectrum is sitting. Like,
[02:44:53] Like there's this idea of this transitional perfect app here.  And like--
[02:45:02] Like the gap here is like this and we're like,
[02:45:09] on the solid Svelte side are like way over, not even like halfway yet. And we're all going to get there, but some before others.
[02:45:21] if that makes sense.
[02:45:23] To be fair, Next.js has been moving the line
[02:45:26] David Vogelpohl: Sideways so they're coming right up next to us over here and it's all start remix Sveltec zone a little bit like, but you start you kind of this, this is the spectrum from my perspective of what it's going to look like because we're seeing a mad rush towards the center and.
[02:45:46] It's just...
[02:45:48] I mean, the tricky part that I had-- and I'm sorry.
[02:45:55] I'm a huge fan of Rich Harrison and all that stuff.  He basically did this.
[02:46:05] and was like
[02:46:08] Thank you.
[02:46:11] Yeah.
[02:46:14] hashtag transitional apps.
[02:46:25] Thank you.
[02:46:26] Thank you.
[02:46:27] Sorry, I missed a line on this side.  Astro is...
[02:46:33] is right...
[02:46:35] I missed Astro and Isles and all of them. They're like right.
[02:46:45] here.
[02:46:47] Let's use black. Yeah. They're like right here. Astro and Isles and stuff. They're right here.
[02:46:55] OK, so--
[02:47:00] Thank you.
[02:47:01] Thank you.
[02:47:04] Thank you.
[02:47:07] Let's move this so it's a little bit more readable.
[02:47:09] Okay, so here's our spectrum, okay?  This is just, I don't mean to be like mean or cold.  This is just why I found like the,  I had to say something about the transitional app stuff.  'Cause you have basically these frameworks  that are sitting here looking at this mountain  and it's right in front of them like,  oh man, this is a big,
[02:47:34] climb like
[02:47:37] It's like--
[02:47:39] It's humongous, right?  Like, let's draw a mountain, right?  Yeah.
[02:47:44] So we have this big mountain, right?
[02:47:49] And
[02:47:50] And, you know, whatever.  So you have like Astro and Marco all kind of like sitting here,
[02:47:59] looking at the base of this mountain and going, how are we going to climb this mountain? And
[02:48:05] What you have on the other side here
[02:48:07] is
[02:48:08] Looks kind of like this.
[02:48:13] Thank you.
[02:48:14] And maybe this dip is a little bit...
[02:48:17] unfair like maybe it's more like
[02:48:22] Like that.
[02:48:24] And, and,
[02:48:27] So let's put our guys on here.  So this is Astro and Marco and all that here.  And then this right here.
[02:48:37] is like Solid Start and Next.js and Svelte.  And they're just...
[02:48:44] below the peak.
[02:48:46] of the mountain in front of them.
[02:48:48] And they're like, oh, once we get here, it's that mountain right there.  So they're picturing like...
[02:48:56] like this. They're like picturing that there's this like, I'll just get over here and it's just  a little bit higher over here. But reality is, it's like this. It's like a, it's like, it's like,  it's a lot farther than it looks like.
[02:49:13] I mean, this is kind of a silly visualization, but this is, in my opinion, what the state of things are.  These guys are just like, wow, this is going to be really hard.
[02:49:26] I don't know...
[02:49:27] how long it's going to take. This is going to take a lot of work. But they see the mountain. This side is like
[02:49:33] They see the mountain, but they don't see the ravine between them and the goal.
[02:49:40] Um,
[02:49:41] I hope that makes sense to people.  This is just my take on things.  I also didn't draw this in the article.  I'm just saying there is a long way to go.
[02:49:53] And I think it's awesome that we're climbing the mountain because the truth of matter is a couple of years ago,
[02:50:02] We were down here.
[02:50:03] Right.
[02:50:04] collectively in JavaScript land. We were down here and we were just like,
[02:50:08] We're going to look in that way.  Like, oh, there's some mountains over there.  Like, screw that mountain.  We're just playing here.
[02:50:15] Right.
[02:50:16] Bye.
[02:50:17] Right. And I think it's awesome. Like, this is still a steep climb. Like, I think, I think this, I think this, this, this growth, you know, I think doing this.
[02:50:30] is--
[02:50:31] is amazing.
[02:50:33] But like,
[02:50:36] We just got further to go.  So hopefully people can appreciate my terrible drawings.
[02:50:45] You know,
[02:50:46] It's OK.  If you want to-- you might be like, oh, well, crap.  What's the next new framework that I should learn or whatever?
[02:50:55] The thing is, it's okay to...
[02:50:58] that not everything has to live here or live over here or live over here. Like, it's perfectly fine that you're like, oh, I'm going to do something over here. And oh, I'm going to do something over here. It's, it's, it's perfectly okay.
[02:51:13] You don't need to
[02:51:17] to absorb the whole space.  But everyone's looking for the,  there must be one kind of thing.  I just think it's okay.
[02:51:32] But yeah, this is my perspective.  I'm sure people will disagree, but this is my perspective.  I don't know. Anyway.
[02:51:39] I was trying to do shorter streams, but this ended up being a longer stream again. So thank you for joining. I'm going to give people like one last chance to ask any questions or whatnot, but I think I already made my long tangent on this stuff.
[02:51:59] But,
[02:52:00] I know sometimes people are kind of interested in these topics.  So I'll give them a chance.  But...
[02:52:08] Yeah.
[02:52:10] a lot of exciting stuff going. I mean, as long as we're climbing mountains, exciting stuff is happening.
[02:52:16] Um--
[02:52:20] OK, sure.  I'm going to do this more in detail in a future stream.  But quick answer to this is--
[02:52:26] Okay.
[02:52:27] So even when Marco six first comes out, we're going to have partial hydration.  We're going to have, um, acing handling, uh, all that stuff.
[02:52:38] lazy loading is going to take a little bit more work, even though the approach to resumable hydration would
[02:52:45] allow for out of order hydration, we're going to need to figure out ways to manage lazy loading and actually develop
[02:52:53] techniques, like if we do want to do partial client-side routing or whatever, we're going to actually have to build stuff to leverage it.
[02:53:01] Right?
[02:53:02] Like Marco six will have the technology.  That's what I say.  And quick,  it's the same reason why quick isn't in here.  Quick can technically already do that.  Like it can already like start as a multi-page app,  just load the code you want,  navigate to new page and then load that page,  do it all client-side.  It already has a way to actually transition,  but you need specialized routers to handle this.  You need,  um,
[02:53:28] You need basically a way to mitigate lazy loading and not death by a thousand cuts.  Like Quick has an optimizer that they're using to figure out how to bundle stuff.  It's really interesting.  I didn't get to talk about this last time, but they actually have set it up.  So they use your own analytics to figure out how to code split bundles based on how users click on your website.  Yeah.
[02:53:50] And that's fine for the basic case, but the problem is,
[02:53:53] What if you click to a whole page that needs to be re-rendered from scratch? The way Quicks split up, depending, you might need to load
[02:54:02] I don't know, like hundreds of JavaScript bundles. So figure out the best strategies and ways to  automate that and like handle those different scenarios is what's going to be the game. And  you're either going to look at doing it manually, which is incredibly hard. This is what, you know,  it's something like Astro might not make that climb ever. You're going to look at compilers,  which will automate it for you, which is what Marco is looking at, or you're going to look at
[02:54:32] As I said,
[02:54:33] When you go to actually navigate to the next page, you kind of got to figure out how to approach this. And the thing is, Quik's approach is hyper lazy loading. So
[02:54:44] And
[02:54:45] what that means is like you need to,
[02:54:49] Like it's...
[02:54:50] Sure, you can split stuff apart, but then you can bring stuff back together if you want. So don't split as granularly. But it's their decision of how to split stuff is based purely off usage, off lazy loading. Like, they don't know a component will never load, or if it needs to be loaded or all that stuff. Whereas like the compiler approach,
[02:55:10] you know, it's taking the opposite thing.  It goes, okay, we know exactly what JavaScript we need.
[02:55:15] but we don't know when we need to load it.
[02:55:19] Ultimately, when you want to make the transition from multi-page app to single page app, I personally believe that
[02:55:27] you
[02:55:28] Knowing what JavaScript you need will be more important than the lazy load thing because when you are faced with a new page and, you know, not and like, like you need to, it would be better if you just ship the least amount of JavaScript you needed to begin with, rather than like death by 1000 cuts.
[02:55:48] essentially. So like, I think there's gonna be a happy balance, but
[02:55:54] quick might not know how to put the pieces together in a way that works for single page apps is  essentially the thing because at least version right now I'm pretty sure they're going to move  to compiler stuff if you see mitosis you know that that there's people there who knows who know how  to handle compilers and and stuff like they've they can take a react component and almost change  into any framework so I see it coming but I think it's the same reason I think the core technology
[02:56:24] are there to make the transition on that side, they just haven't figured out how to apply them.  And when I think about that, that's why I know that the single page app side is even  further because the single page app side is just
[02:56:35] they don't have that, those kinds of smarts, um,
[02:56:40] They didn't build it into their systems at all.  So it's a longer journey.
[02:56:47] So, yeah.
[02:56:49] As I said, this...
[02:56:53] I know what the pieces are.  I don't know how they're going to come together  in a marketable product way necessarily.  I'm making some hedges with Marco.  I'm not even sure if the center zone is...
[02:57:09] like it might be Everest. Like I'm not even sure if we ever completely get there in the way,  completely thinking. Like maybe we borrow something from Hotwire,  like or React server components, we end up kind of that as the strategy. But
[02:57:26] Like,
[02:57:30] Okay.
[02:57:31] It's there. All I'm trying to say is that there needs to be more than the core mechanisms for us to get there. The MPA libraries have the pieces to make sure that we can basically serve the minimal JavaScript to begin with.
[02:57:48] but have a harder time transferring.
[02:57:51] So like, as I said, just maybe both sides will eventually learn from each other.  That's the best we can hope for.  But I don't think...
[02:58:00] I don't think we'll realize this centerpiece
[02:58:05] like in the next year, it's going to take longer.
[02:58:08] So hopefully that answers the question and I hope I haven't rambled too long.
[02:58:14] I think there's a lot of potential here.
[02:58:18] So...
[02:58:18] That should be the real takeaway. I think, I think,  I don't know if this should be the goal is what is, is the other side.  I think,
[02:58:27] it's good that we're all working towards this to make the web better.  And maybe in the middle, there is like that golden, like this is the solution for the web, like the one.
[02:58:37] I don't think that should stop people from innovating and using tools to make sense for them for their use cases is the thing.  Like we will be waiting for quite some time to get there.  I just want people to understand that these things are still moving and the definitions and stuff are still loose.  Like, I'm sorry for JavaScript fatigue.  I'm sorry for, you know, people getting tired of of this stuff and wanting stability.  But like.
[02:59:04] this is new territory. It's when people go, oh, Reacts discovered PHP or Rails or whatever. No,  like, look at my graph here. That's, that's, no one's even, we're not even talking about that.  That's outside of the, that's outside of the box, you know. The real thing is that,  you know, it's somewhere here in this middle. Maybe we never,
[02:59:30] fully bridge the gap, but that's what's going on.
[02:59:32] Anyway.
[02:59:34] Yeah, I, you know, but...
[02:59:37] Still, this is what most people have had at the end of a stream.
[02:59:43] I'm going to go.  I need to save some material for next week.  So let's have a good night.  And until next time.
[02:59:55] Keep an open mind.
[02:59:57] All right.
[02:59:58] See you.
[03:00:00] Thank you.