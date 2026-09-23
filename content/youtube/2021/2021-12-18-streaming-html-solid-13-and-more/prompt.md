---
title: "Streaming HTML, Solid 1.3, and More"
slug: "2021-12-18-streaming-html-solid-13-and-more"
duration: "2:28:59"
channel: "Ryan Carniato"
url: "https://www.youtube.com/watch?v=8hlo9uPrpr4"
publishDate: "2021-12-18"
thumbnail: "https://i.ytimg.com/vi/8hlo9uPrpr4/hqdefault.jpg"
channelURL: "https://www.youtube.com/channel/UCLLVlcmcCP4CUe7xSqVEnxw"
description: "This stream I want to focus on HTML Streaming (looking at Solid, React, and Marko) and cover some of the other features that are coming in Solid 1.3.

[0:00] Introduction
[1:54] This Week in JavaScript
[36:53] What is Streaming?
[1:08:13] Streaming Demo
[1:20:10] Streaming Performance Profiles
[1:40:10] Isomorphic Error Boundaries
[1:54:31] Namespaced Hydration
[2:04:09] Universal Reactivity
[2:15:31] Improved React Server Components Demo
[2:22:38] Q & A
[2:26:04] Outro"
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
[00:00:01] Hey, welcome to my stream today. Sorry if there's a little background noise. I had my heater kick in just now, but
[00:00:10] Today we are going to stream about
[00:00:14] streaming.
[00:00:16] And this topic I've covered a little bit.
[00:00:19] Hey, Daniel, how's it going?
[00:00:23] I've covered this topic a little bit before.
[00:00:27] Thank you.
[00:00:28] But back then, I did not have a Scala draw.  I probably did not a terribly great job of explaining it.  And really, it's been what I've been focusing on the last
[00:00:39] couple weeks. To be fair, a lot of focus has come in towards streaming recently because the recent React demos and it's shown up definitely
[00:00:50] on
[00:00:52] Thank you.
[00:00:52] you know, like previous streams. So I thought it would be good to actually approach this with a like,
[00:00:58] you know,
[00:01:00] explain it like I'm five kind of mentality.
[00:01:03] Yes, like honestly, that was the whole change, right? I've been trying to teach, obviously, and being able to illustrate is huge.
[00:01:14] Yeah, streaming about streaming.
[00:01:18] It's an interesting topic because as as many of you know, I've been pretty bullish on this one, but I think
[00:01:29] you know maybe it's not as cut and dry as i made it out to be um
[00:01:34] too. So we're going to see some of the tradeoffs, going to see what comes with the territory when doing this kind of stuff. And
[00:01:43] Yeah, but this is just me rambling right now, giving people a chance to join on.
[00:01:49] Thank you.
[00:01:50] I think we're going to cut over to
[00:01:54] This week in JavaScript pretty quick here.  It's been a week, I'll say that.
[00:02:04] Thank you.
[00:02:05] There's been a few big things. First of all, obviously,
[00:02:10] like Bricell
[00:02:12] um like what what have they been what are they what have they been doing over there at purcell  they've been hiring everybody up i mean if you've been on twitter or checked anything this is all  everyone's been talking about making jokes even pretending like they got hired by versell um but
[00:02:25] Jared Palmer, who did the mono repo, I think it's called Turbo Repo, was a recent hire. But the big one for me that I did not see completely out of left field, obviously, was Sebastian Markovage. I can never say his last name properly, but seriously,
[00:02:47] Thank you.
[00:02:48] Thank you.
[00:02:48] That's huge, right? For those of you who don't know, Sebastian is core team member of React, and not just a core team member of React. He's largely seen as kind of
[00:03:00] like maybe
[00:03:03] the visionary behind it, things like suspense and the whole throw the promise things have largely been credited back to him. And even just their whole vision in terms of concurrent rendering. And it's really interesting to see someone so core to the React team not be working at meta.
[00:03:23] I don't know what that will mean for the future, but it's interesting that such a vital member of that team is actually not working for Meta.  I know this from working at eBay.
[00:03:33] there's a lot of pull that comes from
[00:03:36] like the company too, in terms of what features you get to look at, what you get to work on a little bit, you know, they have real needs too. So you don't always get to do exactly what you want, what you think maybe is best for the community. So Vercel is like the opposite though. Vercel's mission is make things easier for developers. So that's a big shift and might even kind of change the face of React. I think that's super exciting, even more than the fact that Vercel's picking everyone up.
[00:04:08] .
[00:04:08] Yeah.
[00:04:11] Thank you.
[00:04:14] - Yeah, I don't know.  Is it worrying about React?  I mean, maybe this is a good thing.  They started referring to themselves at the React org  during React Conf and it didn't really click on me,  but they already probably knew what was happening.  I think they realized that they were gonna be spreading out.  I mean, React's too good to belong to one company.  I don't know, maybe that's the mentality.
[00:04:34] Yeah, I mean, they've been picking people up like crazy.  The big thing, though, is
[00:04:41] Okay.
[00:04:41] Vercel clearly has a mission and their mission is to make stuff easier.  They've been focusing on tooling
[00:04:50] And even with the pickup of Rich and Svelte,  I feel like what they're exploring is how to create
[00:05:00] developer experiences that everyone would be enviable of, right? They kind of like in a sense,
[00:05:07] like a lot of investment into Rust, a lot of investment into these build tools.  And I think that's their aim.  I don't.
[00:05:16] I don't know if the
[00:05:19] I don't know if UX for them comes nearly as important as DX.  Obviously, you can't have one without the other.  But I think in terms if you look at who they'll hire,  that was the interesting thing about Seb, because as I said, he he is like,
[00:05:34] largest unit core of React. And he lesser fits the mold than some of the other recent hires. So I think it's really interesting to see where that goes.
[00:05:46] Thank you.
[00:05:47] um but yeah so i mean that was probably the biggest thing um then then there's a a lot of uh  cool technology stuff um that i saw i don't know did did any of you see this demo i'm just gonna  throw this up on the screen here but um it's kind of related to the topics we're talking about today  but um uh
[00:06:09] Jacob Ebay, who works for Remix, was playing around with seeing how fast he could get assets fired over. And essentially, he's using something called
[00:06:21] what are they called? Preload headers, essentially. Instead of, quite often you can put tags in the head of your document which do preloads, but you can also set them in the headers so they can even get processed before any HTML goes over the wire. And this is pretty good, especially when it takes a while to render your document. Like, let's say you're doing a bunch of data fetching and you don't have streaming, which we'll get into in a minute.
[00:06:51] then it takes a while for you to respond with HTML.  It's possible to flush your headers early if you want to,  and that way start preloading your assets  before you send any HTML.
[00:07:00] I actually was playing with this feature myself
[00:07:03] And
[00:07:06] Unfortunately, I didn't see the same sort of gains.  I was getting the same performance I was getting with streaming.  But it definitely perked my interest.  It's possible that he's using this in combination  with another feature, which is called early hints, which  isn't-- they let you flush part of the headers ahead of time.  One of the biggest challenges is once you flush the headers,
[00:07:25] like you're kind of done and that's your that's your last chance. So a lot of times you want to wait till you know the status of your request before you flush the headers. But with one of with one or three response, which is this early hints, it's possible to start flushing these asset headers before you're comfortable even setting the status. And
[00:07:46] He might be using this in combination to see these kind of games, but it's really cool. One of the hardest parts and one of the reasons that we even look at streaming is kind of the front load, the asset loading. And I'll get more into that in a minute. We'll come back to this demo, but I thought it looked really cool. And it's definitely worth checking out. If you see it, I'm going to actually post this in chat right now, in case you didn't get to see this. It might be a little small on my screen, but there you go.
[00:08:16] What else was kind of cool on technology side?  Yeah.
[00:08:20] Some stuff has been going on in the MPA side of the world.
[00:08:26] Well,
[00:08:27] Yeah, where was it?
[00:08:31] So,
[00:08:32] They've been we talk a lot about multiple page apps and islands on the stream, and they've been both quick and another framework, which is similar, which I haven't talked as much about.
[00:08:45] IELTS, which is kind of like Astro, but written with view templates. They do have solid integration, by the way, so we'll be checking that out in a future stream. But both of those frameworks ended up using a Turbolink style router as a way to preserve their partial hydration, essentially. So basically, you can send the least amount of JavaScript to the page,
[00:09:10] And then when you navigate,
[00:09:12] without doing a full page reload, send
[00:09:16] an HTML partial.
[00:09:19] and then partially hydrate that.
[00:09:21] We talked about partial hydration previously on the stream. And one of the challenges is that once you navigate somewhere else, either you have to reload the whole page because you don't have the code to render the page.
[00:09:32] that part of the page.
[00:09:34] or
[00:09:35] you have to basically load all the JavaScript,  which defeats the purpose.  This is a nice compromise because, well it's not even a compromise,  this is a really nice solution for these  'cause they get to basically go back to the server to re-render.  It's kind of like server components.
[00:09:49] And I think we're going to see more of this. I'm not sure.
[00:09:53] that this will be the final version of this, because I think with
[00:09:58] the way hydration works and quick and even Marco six coming out, we'll be able to do some even more interesting stuff by being able to hydrate inside out.
[00:10:07] But it's really cool to kind of see these MPA technologies come here.  And it's not surprising, honestly.  Turbo is a technology created by the Rails
[00:10:17] people they've been doing this for a while i think one of the more interesting things  obviously is if it's just keeping it all in javascript makes it feel like a little bit
[00:10:25] more together, a little bit more native.  But I think there's still a lot to go on in user experience  and the problems to solve.  One of the challenges when you do this kind of routing  with fragments is how do you handle assets?  You already have the header of the page there.
[00:10:38] when you navigate, you need to load more CSS and whatnot. And you don't necessarily want to render it into the fragment. You need you need to have ways to handle different assets, you know, CSS, unloading and loading. It's there's some complexity there. So
[00:10:51] Interested to see what they do and how those experiments go. But as I was suggesting, you know, this drive towards maybe hash change transitional apps is probably going to start on the MPA side. We have some more work to do on the single page app side. Right.
[00:11:08] Let me see actually if I can just pull up one of these demos right now to show you what I'm talking about actually.
[00:11:15] Yeah, because where is this? Yeah.
[00:11:19] they remade the...
[00:11:26] Where is it?
[00:11:28] They remade part of the view docs, I think, with this.  Oh, no, maybe this isn't the right one.  Let me see.  We can take a look here pretty quickly  and see if this is doing what I think it should be doing,  but I don't think it is.  No, that's a full page refresh.
[00:11:45] Okay, so it's not this one.
[00:11:47] I thought there was a link in this issue.
[00:11:50] Blah, blah, blah.
[00:11:53] Ha.
[00:11:54] Is that it?
[00:11:57] Let's watch here.  Let's read more.
[00:12:00] Thank you.
[00:12:01] No, full page refresh.
[00:12:04] That's interesting. That's not doing what I thought.
[00:12:08] Maybe the quick one will.
[00:12:11] I did test the quick one, I didn't look at the IELTS one.
[00:12:15] The only thing is I think this is actually their official Builder.io site.  They're experimenting on this all the time.
[00:12:23] Let's see.
[00:12:25] Thank you.
[00:12:27] Thank you.
[00:12:28] Thank you.
[00:12:29] I don't know, that looks like,
[00:12:31] Full page refresh to me.
[00:12:33] Thank you.
[00:12:34] Hmm. Okay. Well, maybe they were overselling it. At least they're working on it, which I think is really cool. So we're going to see more of this nature in the future.
[00:12:46] obviously, because this is kind of where NBAs are
[00:12:48] likely heading but on the spa side on that node um evan you actually posted something  views probably the furthest along on the partial hydration story  on the single page apps side um so to speak like there's been a lot of partial hydration
[00:13:06] Okay.
[00:13:08] Work going on.
[00:13:11] especially with islands, obviously we've seen Astro and we've seen Quick and, you know, Isles and whatnot. And we've seen
[00:13:19] like preact, doing a lot of these early experiments even before that.  But again, in a multi page setting, Evan's been kind of playing around  with these ideas he's calling shell hydration and it's not
[00:13:32] Quite the same thing.  You still hydrate the core of the doc in terms of you bring in the route,  the client side router and the framework.  But then he's looking at ways of lazy loading parts of the document.
[00:13:44] And I think that's really interesting.
[00:13:48] Looking at these numbers, he's still paying fairly steep hydration costs, like not super steep, but you'll see compared to some of the demos we'll be doing, there's still a
[00:13:58] pretty big hydration cost here, but not  enough to stop getting 100 on  Lighthouse. And
[00:14:04] I think this is interesting. I think this works really well for something like I've got to use as V press or whatever, because it's like basically a doc site with MDX. So it's fairly shallow. So being able to lazy load the specific interactive parts on a docs page that's fairly shallow would work pretty well with this technique. One of the challenges is
[00:14:25] our single page apps still need to hydrate top down.  They still hydrate from root down to leaf.  So even if you try and like do some fancy lazy loading stuff, you end up just like
[00:14:36] just shelving off the cost. It works well with a really flat structure, but with nested structure,  you basically just take the full brunt a few seconds later, so it's kind of not worth it.
[00:14:46] Still, this is the furthest we've seen this approach go.  So I like that Evan's really starting to explore it.  He actually, in this
[00:14:55] this series of tweets actually mentions that like,
[00:15:00] He didn't actually see much of a solution outside of Quick. And some of the things we're working on with Marco, of actually getting out of the fact that this top-down nature of rendering makes it really hard to break up hydration when you have a single page app mentality. Everything has to come from the root. And sure, you can break it up with an MPA, but then client-side routing becomes...
[00:15:23] difficult like because there's no single orchestrating piece so it's i mean and let's use  something like turbo so as i said for a while now for a while i think we're going to see the  separation where we're going to see like very mpa like approaches and then you know maybe a little  longer in development on the single page apps side so this is something i'm actually looking  into as well uh coming up here pretty quick but i think it's really cool to start so that evan's  already done in this range and it's clearly working for him i mean he went as far as to say
[00:15:53] mobile per score is a single page app. Why reload the page in every navigation?
[00:15:58] So,
[00:15:59] That's a little baby. If you want the maximum performance on that initial load, you're not going to be loading the client side framework in the router and the libraries like MPA still have you there. But for most of us who aren't doing large e-commerce sites,
[00:16:18] Yeah?
[00:16:19] And this is true, the smaller your framework gets.  If you include techniques like he's working on here  and combine them maybe with small frameworks like Svelte or Solid,
[00:16:30] maybe maybe pretty good experience all around.  It would be interesting.  As I said, I don't think every kind of site can leverage this kind of optimization,  but that's why we're still looking into it.  I actually dumped a huge blog on solids that GitHub essentially on the partial hydration thread.  If you do want to check out my current thoughts on that, I'll link that.  But it's it's it's it's a bit of a read.  I basically
[00:16:57] I was thinking single page app and this, yeah, this big blob of text here that we're not going to get into today. No, wrong one. Back, back.
[00:17:07] I'll just drop this here for anyone who cares. This is my current thinking on partial hydration.
[00:17:12] Thank you.
[00:17:14] All right.  So yeah, that was kind of cool technology one.  The other conversation that's been happening,  and it's been happening a lot, is this idea
[00:17:24] of
[00:17:27] framework versus library again, you know? When React came out, that was like the hot topic.
[00:17:33] Everyone was like,
[00:17:35] building frameworks, JavaScript frameworks, and React is like, no, no, no, no, we're just a library. And some people commented in the last few years, React maybe has moved away from being a library. And
[00:17:49] You know, there's this tweet that I saw that's got a little bit of attention this week.
[00:17:54] that basically was like, back in 2017, Angular is a framework, React is a library, use the library. And then 2021, React is a framework, Sol is a library, use the library. This was kind of a funny comment, but it got people's attention, because there is always this sort of conversation happening between frameworks and libraries. And I actually
[00:18:19] there was a there was actually um a state of the react ecosystem uh conversation going on i think  back in march and i mean this panel here was stacked i'm just going to pause it here but  it's tanner lindsay uh who we got here um uh guillermo lee robinson hunter miller david like  blitz redwood next js plus you got you know mark erickson redux lindsey ward like you have a whole
[00:18:49] ecosystem here.
[00:18:52] And and.
[00:18:53] And essentially,
[00:18:56] So,
[00:18:57] I asked them this question, this exact same question, and they actually had a really good response. They were talking about this constant, we constantly bundle and unbundle things as a way to kind of, you know,
[00:19:09] make things easier and then redefine the basis, make things easier, redefine the basis. And we've  seen this happen over and over again in the evolution of front end frameworks. And the
[00:19:19] you know,
[00:19:21] It happens to varying degrees, right?
[00:19:25] Even Rich Harris kind of touched on this on his recent chat he had with Vercel.
[00:19:34] right like it just it's just kind of it's just kind of funny because yeah like let's see i don't  know if you if you've if you haven't listened to this and this one's this one's pretty great um  but his big thing was like why would a library not ship with css or why would a javascript  these days not shipped with css and actually i'm gonna play a little clip from this if i can  the the react way is is kind of a blessing and a curse yeah
[00:20:02] uh it's a blessing in that it means that
[00:20:06] you're sort of forced to create these very extensible primitives and you um instead of having
[00:20:12] like the ability to work on these things locked up inside the contribute like the the team that  contributes the framework itself like the entire community can can solve problems like
[00:20:22] motion and so on
[00:20:25] But at the same time, some things are just really, really hard to do that way.
[00:20:30] uh,
[00:20:32] And...
[00:20:33] as a developer using
[00:20:36] react like
[00:20:37] How do you add styles to your app?
[00:20:40] Like it's true that you have all of these different options. It's true that
[00:20:45] By leaving it to the community, we've had a lot of innovation in CSS and JS.
[00:20:51] But it's also the case that if you're starting
[00:20:54] um a react app today there is no one answer for this very simple question that every single  developer has to answer every single time they build a web app how do i add css to my project
[00:21:06] Thank you.
[00:21:06] I mean, he goes on a little further, but I think that kind of captures that question, right? Clearly Svelte sees themselves more on the framework side. I mean, they see themselves as a language and a compiler and a number of things, but there's this philosophical divide here. And it's one that I kind of got into a bit on our last stream, where I was talking about paradigm versus framework, but it's interesting. Things kind of go on both sides. And this distinction is
[00:21:32] so subtle. Like if you look through this thread that I was talking about here, like there's there's people going, they're all frameworks or
[00:21:41] they call themselves frameworks, like, or they call themselves a library, or where someone made this same thing back, joke about React calling themselves a library and whatnot.
[00:21:52] Honestly,
[00:21:54] I usually don't try and get into that debate. It's too nuanced. But I do think that the  driving philosophy is better than the definition. It's not about like setting some criteria on  what makes something a framework for library. It's about the philosophy deriving the design  from that. Right. And like a similar thing is like, I would definitely consider Remix  more on the framework side of things. It's a meta framework, in fact, built on top of
[00:22:20] Kent C. Dodds was actually going, you know,
[00:22:24] Thank you.
[00:22:24] He kind of did this nice little thread here where he was saying, well,
[00:22:28] there's something awesome about, wow, look what I can build in 10 minutes.  But often that's followed by several months of, oh, this is really hard to change  and customize for my ever changing use cases. And that's part of the
[00:22:39] the
[00:22:40] the conflict, right? When you make things necessarily easy for the sake of easiest, not necessarily adaptable. And he goes, yeah, Remix obviously strives for both speed and getting started long term changeability. But we prioritize the simplicity and changeability first.
[00:22:58] That's why we limit the magic and expose you directly to the platform.
[00:23:01] Thank you.
[00:23:02] And I love this part here.  He goes, I immediately knew we were onto something huge.  It was because they were nailing a solid foundation of primitives.
[00:23:10] Once you get that foundation of primitives right, then the things that you can build on top of it are really powerful.
[00:23:15] you know,
[00:23:17] And that is the
[00:23:19] that that's the message right it's all about you know if you believe on the you know like the  library side versus the framework side it's all about building up those primitives right that's  the basis of of you know what we do with solid even you know how many times do we use the word  primitives on our home page um you know uh the it's essentially this idea and i i think i'm going  to do a stream in the future where i actually really emphasize and get down into that that was
[00:23:49] streaming is timely now and we'll probably come back to this topic. But I think this library  versus framework thing is going to be a continuing conversation, especially as React enters like  this phase. It's already happened. React is in that framework, you know, bundle phase. And once  the key player enters that phase and things just kind of grow that way, there's going to be new  players that unbundle. It's inevitable. And obviously Solid is one of those. But even, you  know, some of the work in these MPA frameworks might classify into that, right? Changing the
[00:24:19] minutes again. And I think it's interesting how you can even do this.
[00:24:23] you know, in a
[00:24:24] you know, smaller way, like say in the way that Remix is built on top of React, they can still  kind of take things back to the primitives in a different way. So I think, I think,
[00:24:34] You know, I'm definitely on the side.
[00:24:36] Mostly Solid was built out of me working at a startup, maintaining the same app for almost a decade.
[00:24:43] that experience of looking at how things change over time was the first
[00:24:47] thing. Like I know a lot of people like talk about, you know, you can tell Svelte was built in a newsroom.  They make new apps every week or so, and then they start again and they got a quick on, you know, make something, get it out there, you know, give it
[00:25:01] you know, all the nice jazz and ship it. It's a different game when you, you know, working on a startup where we were under resourced, underfunded.
[00:25:11] Thank you.
[00:25:11] And
[00:25:14] you know, one of those maybe startup for life companies, unfortunately.  And
[00:25:19] essentially
[00:25:21] Mm-hmm.
[00:25:21] we never got to do, we didn't get to do completely greenfield. We never got to build new stuff. We had to build on what we already had, but there's always a need for new features, always the need to adapt. And for that reason, I value primitives above almost all else. But as I said, I'm going to cover that in another stream. I just thought this was an interesting conversation that's going on right now. And it's kind of meta to, you know, what's, what's been, you know, like the whole bigger picture of how the different players fit in, in the ecosystem.
[00:25:50] So I'm going to take a stop here for a second before we move on to streaming and take a look at what's been going on in chat because I've been just talking my head off.
[00:25:58] What are we going here?
[00:26:04] Thank you.
[00:26:05] Alright, what do we got here?
[00:26:11] I got downvoted a bunch on Reddit for saying React as a framework. Somebody said add me
[00:26:19] it's funny how people get angry about this maybe it's the philosophical thing but it's like
[00:26:24] React is treading on framework water these days, and it's not...
[00:26:29] necessarily because they're trying to do concurrent mode and suspense or something. Although I think that was one of the responses in here to this.
[00:26:37] because I wrote something along the lines of, like, I love the thinking and then Michael
[00:26:42] Yeah, I forget, someone said that.
[00:26:46] yeah i forget it but like essentially that react is getting more framework like and
[00:26:52] I don't know. It's probably not worth getting into those arguments.
[00:26:55] It's...
[00:27:00] Yeah, this was the earliest definition of a framework versus a library.
[00:27:04] And
[00:27:06] There's a...
[00:27:08] Okay.
[00:27:08] I get you know what? Every reactive library is a framework then right?
[00:27:15] Because the whole idea is with the reactive libraries, you set the rules, but it calls that code.
[00:27:20] I know that's why I like and since most UI programming
[00:27:25] reactive, like maybe we're all frameworks, right?
[00:27:29] This is the definition, though, that I was always taught.  And this is the definition that we like.  I think this goes back to like C days.
[00:27:36] Yeah, primitive love.
[00:27:39] There's that great, I'd probably have to go down in my feed, but there's that really great
[00:27:45] Um,
[00:27:46] AWS talk that Brian
[00:27:50] Leroux,
[00:27:51] Yeah, yeah, look at this one.
[00:27:53] Shh.
[00:27:54] Well...
[00:27:55] Isn't that awesome?
[00:27:57] I'd love to be on a stage that big and have that behind me.
[00:28:01] Thank you.
[00:28:02] All right.
[00:28:08] Yeah, yeah, no, I've been talking to them. We'll see what we see what we can do. I think,  I think there's potential here and Jacob does too. So we'll see what we can do. Generally  speaking, my experience is framework agnostic solutions have are very difficult and they  only work if there's complete isolation, which you can get with something like Astro, which  has islands. But when you try to do smarter things and pull it together, you know, like  client side routing, it becomes really, really hard. So we'll see.
[00:28:37] Yeah, yeah, I saw this.
[00:28:42] I have to admit,
[00:28:45] I think that's stretching it a little bit. I mean, if they want to go that way, they can. The use in front could be used as a compiler hint. It's basically the same thing that I was talking about in my last stream where I was saying like, function decorator, like view refshipper does dollar sign and Marco their tags, but essentially function wrappers is an easy way to give the compiler
[00:29:10] a knowledge of composable
[00:29:12] cross file reactivity. So they could, they could, they could use, use as a mechanism for it, but
[00:29:18] I mean, React can take that flight, too.  I think the challenge is I'd rather it be more clear cut.
[00:29:24] It's interesting. I mean, Vue is trying to be everything to everyone. Svelte is very clearly on the one side now. React was always clearly on the other side. Are they losing their identity when making phrases like this? Maybe that's their long term vision. Maybe this is all like a migration strategy. Maybe hooks and everything was a migration strategy to go from one point to the other. I mean, there is some truth to the fact that certain problems are much easier to solve compilation if you have the right tools, right?
[00:29:54] JavaScript. There's just
[00:29:55] It's really hard for the end user to be able to hand optimize that.
[00:30:00] value there, but I'm wondering if this is intentionally laying the groundwork for a change because React historically is not a language. So I think, I think, I mean,
[00:30:10] I have considered how you could apply a compiler analysis and this and
[00:30:15] And I'm pretty sure the use of use was intentional for this as a way out.  But I think there's a lot of ways this can still go.
[00:30:28] Thank you.
[00:30:28] Thank you.
[00:30:30] Thank you. Yeah, I mean, I don't think maybe it's not a real definition. Like maybe the framework library distinction doesn't matter, like the names you gave them, but maybe it's just like the...
[00:30:44] Like the philosophy is the important part.
[00:30:48] Yeah, this is awesome.
[00:30:53] Thank you.
[00:30:54] Thank you.
[00:30:56] Yeah, I mean, and I guess that's the way that I talk about reactivity, to be fair,  kind of just jumping back to the Dan conversation.
[00:31:05] But
[00:31:06] The end.
[00:31:07] There are, as I mentioned, there are three kind of primitives to it.  I mean, I guess the language similarities come in the fact that is if you folks let React focus on primitives,
[00:31:18] And when you focus on primitives and you try and keep
[00:31:22] the minimal set, it is very similar to the tokens you could find in a language, I suppose. But I think the option to compose and build makes that
[00:31:34] trickier because
[00:31:36] like there's a difference between having defined syntax and having conventions.  So I mean, conventions are fine.  They become like a new syntax, I guess. But
[00:31:43] It's
[00:31:45] like
[00:31:47] React, or sorry, Svelte claimed to be a language kind of in the same way.
[00:31:54] Thank you.
[00:31:55] It's interesting.
[00:31:58] if,
[00:31:59] If React really does want to become a language,
[00:32:02] Yeah, actually, no, I'll hold off on that thought because like I think I think that the thing is like these are kind of very grandiose ideas, but it's weird because they're limited to the scope of their components or the things.  And this is true as felt to like the things that that are very.
[00:32:19] part of the framework.  It's not universalized.  And that's sort of why I was looking at stuff like reactive script  or whatever, like in that blog post.
[00:32:27] Because...
[00:32:28] it is still very much
[00:32:30] a library, so to speak.  Like it doesn't escape the boundaries.
[00:32:34] And I wonder if it maybe doesn't need to, but maybe this framing helps people kind of better
[00:32:41] understand it.
[00:32:46] Yeah, always. I enjoy doing this.
[00:32:49] Thank you.
[00:32:51] Thank you.
[00:32:52] Yeah, a lot of different opinions here on frameworks versus libraries, eh?
[00:32:57] Thank you.
[00:32:58] Thank you.
[00:32:59] Yeah, it's interesting though, like React historically was always like about best practices. So, you know, and those patterns change. So,
[00:33:08] I don't know.
[00:33:10] i i we could talk about this forever and maybe maybe the next stream or whatever when  we do get into this a bit more on the solid side we will but um it's it's uh
[00:33:21] It's this is just a wide open topic and can of worms, and we probably should move on.
[00:33:27] Oh, this.
[00:33:31] This is a good tie in, though.  I made major props to to our community member, Joe, Joe Pia, True Skater.  He he he just had him.  He's he's been having some friction with TypeScript because almost everything in TypeScript was made
[00:33:47] for React and VS Code and everywhere you go, everything JSX related is clearly
[00:33:52] React.
[00:33:57] Thank you.
[00:33:58] Thank you.
[00:33:59] Thank you.
[00:33:59] Right. Like and
[00:34:05] basically he was like, he's telling VS code, he's like,  can you change it from TypeScript react to TypeScript JSX?  And honestly, if you haven't been here, maybe do so.
[00:34:18] give this thing an upvote it doesn't really need any more it's almost at 200 but
[00:34:23] Why not? He's just saying like, there's a lot of frameworks that use JSX, obviously like the react clones, the pre acts and the, and the infertos and whatnot, that are becoming less react clones, as the days go by. But you know, things like stencil solid, you know, others, maybe it's time to move on from JSX or TSX just being a react thing. But yeah, he was immediately met with a little bit of, you know, pushback, but it seems like this is a fairly popular idea.
[00:34:53] and
[00:34:54] You can tell an idea is doing well when there's like the one or two people downvoting it.  It tells you that you're doing a good thing.  If no one downvoted it, then not enough people have seen this.
[00:35:06] So, you know.
[00:35:08] It's a good sign. This must be a good idea.
[00:35:12] Okay. Yeah.
[00:35:15] Yeah, it's funny, tie into the language thing.
[00:35:20] Yeah, I mean,
[00:35:22] This is true and this is painful.  React JSX pollutes the global namespace.  Most other libraries don't.  Most other libraries now actually use import source  and have a mechanism.  But basically, if you just put JSX somewhere,  React will--
[00:35:41] take it so
[00:35:43] It's really a pain.
[00:35:48] yeah yeah i feel that pain um definitely definitely struggled with that in the past we we were  polluting the namespace before too it was a mess luckily the one good thing that came out of the new
[00:36:01] uh react compilation that came with react 17 in the new gsx transform was that they got rid of the  pragmas and the files which means suddenly you didn't need that and you had a different way to  denote uh the import source which finally worked for solid consola doesn't actually have a factory  function so until react made that change we made issues and stuff but we were largely ignored people
[00:36:24] I mean,
[00:36:25] Thank you.
[00:36:26] The other ones use factory functions.  So pretty happy with the, when the progression kind of goes  in your favor, even unintentionally.
[00:36:35] Sorry, I disassembled.
[00:36:38] Go.
[00:36:39] There we go. I'm not going to get started on the topic of testing and write types of tests.  We can also be here forever. Let's turn this around. What else are we talking about?
[00:36:53] What is streaming? Let's get to the topic at hand. We've been going now for 36 minutes. I think everyone is here. Let's talk about streaming.
[00:37:02] Well, streaming is probably a really poor name for something that's been around forever. Streaming started --
[00:37:16] Basically,
[00:37:18] Streaming is also known as
[00:37:21] HTTP chunked encoding. It's basically the ability to send the HTML back to the browser
[00:37:27] in pieces, like instead of just like
[00:37:30] making a big thing and just setting it all at once, we can control sending it back in
[00:37:35] pieces or parts. And
[00:37:38] basically all HTML has the ability to be streamed.  But when we're talking about streaming,  we're talking about techniques that leverage the fact.
[00:37:50] The thing is, browsers are smart or resilient. I forget what the term is. But essentially,
[00:37:56] When you
[00:37:59] Send back your response.
[00:38:02] you know it gets the the hv headers first then it starts rendering the hml tag and the doctype and  the head and then the body it can start working and rendering those pieces even before it gets  all the closing tags you don't need to close the html um xml tag or whatever um before it can start  rendering and that's really cool and something you can leverage and you can tell that the the
[00:38:32] stopped using it or leveraging it.
[00:38:35] Some backend services used it through, as I said, it was 97.  I think that trying to code and became a thing,  but they used it, you know,
[00:38:42] through late 90s, early 2000s.  You know, remember there's things like dial-up modems.
[00:38:49] getting things in piecewise actually made a big difference.
[00:38:54] And then it kind of disappeared.  And the funniest thing is if you go searching for it,  it's pretty funny because you might come across streaming because of, say, React,  or React.
[00:39:06] Um.
[00:39:07] React 18, right? And that's kind of publicized it. We also have the same feature in Solid, but
[00:39:15] Let me see if I can find it. Just a second here. Bookmarks.
[00:39:19] I might have to go down a little bit.
[00:39:21] But essentially,
[00:39:25] Yeah.
[00:39:26] uh
[00:39:27] So,
[00:39:28] This tweet from Dan kind of thing. So you're looking at React and looking at streaming. And then at one point I showed him this and he goes, I haven't looked closely at Marco, but this 2014 article describes a mechanism that's ahead of what most mainstream solutions, including React do in 2020. We've been trying to add this to React since 2018, but it's peculiar how this is almost lost art. So we have React working on this feature for, to give you kind of connotation, suspense is the streaming feature. Suspense does a lot of other
[00:39:58] stuff, but suspense is essentially the streaming feature.  The reason we've been waiting for suspense
[00:40:05] is because of streaming, largely.  I did cover that in an article I wrote this week.
[00:40:12] um
[00:40:13] and where I talk a little bit about, you know, what suspense is.  But essentially, if you go looking, you're like, okay, so streaming did not get...
[00:40:22] did not show up in React 2021 out of nowhere.  They started working in 2018.  And if we go back another four years, Marco had it.  So we can look here and in this,  we're talking all about screaming and already,
[00:40:38] The Marco guys in 2014 are talking how they're rediscovering
[00:40:41] streaming HTML in 2014.  They're rediscovering it because the truth of the matter is
[00:40:48] There was an article called The Lost Art of Streaming back in 2005, if you go back. Basically every decade we decided that we've essentially forgotten about streaming.
[00:41:02] It's been like 30 years now or something.
[00:41:06] And, or I guess not that long, it's been like 25 years almost. And like every five years we realize that we've forgotten about streaming.
[00:41:15] I find it hilarious that in 2005 it was a lost art and it was rediscovered in 2014 and rediscovered in 2018.
[00:41:26] I'll get a bit more into this, but essentially,
[00:41:30] Probably the biggest use is just streaming and that kind of got popularized in more modern age. And this is I'm saying modern, but this is back in 2008 or 2009 was Facebook.
[00:41:43] Facebook had an architecture called BigPipe. And BigPipe,
[00:41:50] was through PHP service,  but it allowed them to kind of weave together  all their assets, CSS, HTML, and serve them, you know,  performantly by kind of streaming  all the different pieces in.
[00:42:02] Yeah, no, I was going there. I realized as I was speaking that I sounded like an Eminem song.
[00:42:11] Anyway.
[00:42:15] But essentially Facebook had solved this,
[00:42:23] You know, and it was in PHP, but they had a really good foundation.  And when eBay came around to be like, oh,
[00:42:32] we need this too when we design our new web foundation, but we're going to build it on JavaScript this time.
[00:42:39] you know, an eBay built Marco, it's kind of started back in 2012. They're like, okay, we need, we need to send the least amount JavaScript, we need partial hydration, and we need streaming. Streaming is super, super important right from, from the beginning. And
[00:42:53] That's because eBay is a company that values page loads because when you have SEO concerns like loading content from
[00:43:03] you know, search results, let's say someone has a Google search and they see some, I don't know, some item of desire and they click on it to go to your page.  It better not take forever. And especially if it's a slower device and whatnot, you're going to lose sales that way. And it is a measured thing. Like we have departments at eBay that that that basically are
[00:43:25] anal to the points of hundreds of milliseconds and correlating that to sales losses. So, you know,
[00:43:30] I had a great talk on Theo's stream with Dan, and we were talking about how the metrics you use sometimes aren't related directly to performance.
[00:43:41] But sometimes they provide different use.  In Dan's case, they were losing light counts.  In eBay's case, it's like, are people buying?
[00:43:49] It can be misleading, obviously, but essentially
[00:43:53] those metrics drove Marco there.
[00:43:58] React didn't go through, like Facebook didn't do a big rewrite to like, they had React in lots of places, but I believe they didn't do like the big React rewrite until 2018 time period.  So is there a coincidence that Facebook and React got into streaming around that time period? I think not. I think suddenly, you know, performance at a large scale became a concern.
[00:44:23] I still love Sunil, who's the former React Corp team member, made some whole thing.  It's like, oh, React doesn't give a F about SEO.  That's not why they did it.  And it was all about developer experience and kind of streamlining stuff at Meta, which I thought was funny.  Because, you know, in terms of talking about why server components, they started working on the streaming thing.  But it is interesting, though.
[00:44:53] in
[00:44:54] has the potential, especially for large sites, to be one of the biggest game changers in terms of performance. And we haven't
[00:45:03] especially for single page apps which haven't got the leverage it's big on multiple page apps too  because you get to keep on sending html even after the fact which means you can  still partially hydrate stuff you stream in later
[00:45:14] - Always. Well, I mean, he's the one who said it, it's funny.
[00:45:23] uh matthew phillips i i didn't search the tweet i'm not going to search it up right  now but matthew phillips said um in january 2021 he's like
[00:45:32] 2020 this year is the year of partial hydration.  And in a sense, he wasn't
[00:45:37] he wasn't wrong, right?
[00:45:40] I mean, maybe there's more to go there, but Astro made a big splash and quick and a lot of new tech showed off what we could do with that. And Sonny, not that long ago, I retweeted it.
[00:45:55] It's actually funny, JetBrains guys said it was their tweet of the month, actually.
[00:46:01] Thank you.
[00:46:01] But I don't really need to search it up.  But he basically said that next year is gonna be the year of streaming and that everyone should get prepared for it because
[00:46:10] because yeah, here it is. 2022 is the year of streaming responses and streaming APIs, which means clients, your actual super engine implement will have to be rethought for that use case. Take note.
[00:46:27] Mm-hmm.
[00:46:30] Thank you.
[00:46:31] Thank you.
[00:46:33] I actually don't know how to do any of that stuff.
[00:46:35] Thank you.
[00:46:36] But it looks like I can.
[00:46:42] There we go, done, done, thank you.
[00:46:45] Okay.
[00:46:46] Okay.
[00:46:48] We can talk about the streaming setups, different types of stream setup at a different time. I think you could help me a lot, Theo.
[00:46:56] Thank you.
[00:46:59] Thank you.
[00:47:00] Moving on here.
[00:47:05] Thank you.
[00:47:07] Yeah.
[00:47:08] Streaming's a big deal, but what is it? Okay. I've clearly...
[00:47:13] clearly got the history going here. It's a long time coming, but the basic of it is hopefully simpler than this explanation is giving here.
[00:47:26] This is why I got a scale draw. Let's do some drawing, okay?
[00:47:30] Okay.
[00:47:31] I mean, it's not hard to picture sending your HTML document  in pieces.  That's kind of uninteresting, right?
[00:47:38] Um,
[00:47:40] I mean,
[00:47:41] I mean, let's just draw a page to consider our scenario and then we'll get back to it.
[00:47:49] Let's consider a page.
[00:47:56] let's say our page has
[00:47:58] a top nav
[00:48:02] Thank you.
[00:48:03] Let's even say our page has a side nav.
[00:48:08] Thank you.
[00:48:08] And
[00:48:11] I use this page all the time.  You guys have seen this page before.
[00:48:16] Here's our page, right?  We're technically like there's a maybe hero image  and then some content.
[00:48:23] The thing is,
[00:48:25] If you were to lay this out as HTML,
[00:48:29] For the most part,
[00:48:31] I imagine the layout would something be like one,
[00:48:40] Not that, maybe it's easier to just draw it.
[00:48:43] to
[00:48:45] No, never mind. I suck at drawing.
[00:48:50] I'm gonna type two,
[00:48:54] Three...
[00:48:58] for. Even though there's a layout, generally it might flow out like this.
[00:49:07] Yeah.
[00:49:09] The thing is, for this top nav, you probably don't need to load very much information.
[00:49:14] You may need the load information for part two, but you most definitely need the load information for three and four and three and four might need separate different information.  Right. You can see this in any kind of real site.  You know, I mean, we're looking at it like profile page on Twitter.
[00:49:29] I mean, I shrunk it down, but, you know, this nav and the header and
[00:49:35] tab bar and content.  You've kind of seen this before.
[00:49:39] Now,
[00:49:41] Thank you.
[00:49:41] The problem is,
[00:49:45] and this is common in most frameworks and solutions,  is you just wait for the whole thing to render  and then you send it.
[00:49:51] But
[00:49:53] You know,
[00:49:54] That doesn't help you that much if you want to get
[00:49:58] assets earlier because you have to you know the process of loading a page in a in in a browser  involves well i mean again we've all seen it but involves you know the header section of your page  you have you have like all the link tags and the javascript and all that stuff at the load and if  you're not sending the page you're not requesting that javascript you like you you're setting the  whole thing back
[00:50:21] So,
[00:50:22] Streaming immediately gets you that benefit.
[00:50:25] But
[00:50:27] You know what?
[00:50:28] Marco probably has the easiest way to show this.  I don't know if you've ever seen this.
[00:50:35] This little demo thing Michael put together, I think, is a lovely example of what the difference between async and streaming rendering, essentially.
[00:50:48] And I'm going to use this example here because it kind of highlights it. He's not doing
[00:50:58] Well, I guess he is doing out of order streaming here,  but he's not showing placeholders or anything.  But if you look at the way the one on the right loads,  you should notice something.  The header comes in first.
[00:51:08] Right. And then he's able to load this content. And while he's on that content, the image loads in. And while that image is loading in, he's still waiting on
[00:51:19] you know, the comments and stuff coming in.  So this is kind of a streamed page experience, right?  Even though it's all server rendered, not client rendered, you basically get
[00:51:29] you could have loading states and stuff coming in here.
[00:51:32] Now, with an async render, in theory,  it should finish at the same time,
[00:51:38] But it doesn't.  If you look at here,
[00:51:42] this is showing stuff sooner but
[00:51:45] Thank you.
[00:51:46] When it's all done and the last bit of data comes in and this one draws,
[00:51:50] it's still waiting for the image because it didn't get to load the image sooner.  Because you were streaming, you were able to tell the browser to get that image sooner and load it in.  But on this page,
[00:52:01] it has to wait for everything. So it's not only that the first paint happens sooner,  it's not only that you get to see stuff sooner,
[00:52:09] you actually the whole page loads faster thanks to it.
[00:52:13] And and.
[00:52:15] That's
[00:52:16] That's essentially...
[00:52:18] This visual, I think, helps explain this a lot.  But the reason I wanted the politics scale draw
[00:52:24] is
[00:52:26] is we aren't really talking too much about how this happens, right? Because
[00:52:31] Thank you.
[00:52:31] In Michael's images, he didn't put any placeholders. The truth of the matter is you can put placeholders in here if you want. You could say,
[00:52:41] essentially draw initially the nav,
[00:52:45] And then,
[00:52:47] Essentially, let's put green and give it a stroke.
[00:52:54] Maybe.
[00:52:55] and then draw some loading stuff over here.
[00:53:01] And you've got maybe some loading placeholders.
[00:53:06] And then
[00:53:08] essentially
[00:53:11] When this loading placeholder gets lifted off,
[00:53:14] Maybe.
[00:53:16] Thank you.
[00:53:16] this still hasn't loaded. So you
[00:53:20] you have a loading placeholder here.
[00:53:23] And then finally,
[00:53:25] It loads in.
[00:53:26] Yeah.
[00:53:28] depending on how you set up, maybe you want this whole section to have the loading indicator, and then you'll wait a little bit extra long.
[00:53:37] And then when you remove it, the whole thing appears.
[00:53:40] There's different ways you can break this down, but the thing is with streaming,
[00:53:45] You can serve the initial...
[00:53:47] results and then replace it in place.
[00:53:53] -
[00:53:54] Can you mentally prioritize?
[00:53:57] Um,
[00:53:58] Thank you.
[00:54:00] it depends right
[00:54:02] - Okay.
[00:54:02] It depends on the mechanism on the server, right? Because
[00:54:08] -
[00:54:09] Yeah.
[00:54:09] The server is just trying to spit out HTML strings as fast as it can, right?
[00:54:14] Generally speaking, you would just serve everything
[00:54:17] as fast as you can. We're not streaming because rendering is taking too long, generally.
[00:54:23] We're streaming because there's blockages in IO, that there's
[00:54:30] like how should I put it?  That there's like, you're waiting on some data.
[00:54:35] So it's less hydration is a prioritization question and we'll get into that.  But the stream rendering itself is less so a prioritization question.  It's it's it's it's more just like do as much as possible.
[00:54:49] as soon as you possibly could do it.  It is possible, and I've seen this in some of the more advanced React threads, that you
[00:54:54] they can prioritize pieces in case
[00:54:58] certain pieces want to start rendering.
[00:55:01] and like multiple of them have queued up.
[00:55:04] and then they can like make the choice and be like oh is it my turn yet so i
[00:55:10] I think the answer is yes.
[00:55:11] Um,
[00:55:14] And React is looking into that.  And maybe that's something that's important.
[00:55:17] at their scale. With Marco, we don't prioritize. We just split everything into its own
[00:55:24] separate thread or
[00:55:27] uh,
[00:55:28] task or whatever the term is in JavaScript. And essentially, we just fork at that point. And the  main reality continues on and the side reality doesn't. So we just parallelize everything.  Marco's solution is really quite cool. With Solid, I haven't done that. I haven't looked at
[00:55:46] looked at that yet, but, you know,
[00:55:50] it
[00:55:50] Yes.
[00:55:52] It is a consideration if you have lots of these coming in.
[00:55:58] Thank you.
[00:56:00] I think you can make ASync finish and...
[00:56:03] Straight.
[00:56:05] Yeah, I mean...
[00:56:07] There's different ways to coordinate that.
[00:56:11] Right. And
[00:56:13] And your timing for flushing depends more. Like you can choose to go, I want to send  all this at the same time or not send this at the same time. Because, you know, once  you send it, then the browser has to do work. But what
[00:56:26] Yeah, generally speaking,
[00:56:29] at least for anything relatively mid-sized, that's probably not going to be a blocker.
[00:56:34] rendering is fast, like really fast.  Like I've mentioned it before, you know, I got some benchmarks that show that's like solid's
[00:56:42] very, very fast rendering, maybe 10 times faster than React.  But in practice, like no one cares except for the people doing the metering  on your serverless functions, you know, that's that's that's that's not what's going to do it.  Um.
[00:56:57] If the page is big enough and there's enough stuff, maybe, but
[00:57:01] Generally, it's the I/O stuff.
[00:57:06] Um,
[00:57:08] HTML early flushing.
[00:57:10] I mean, that is what streaming is, if I wasn't clear.
[00:57:15] It's just chunked encoding.  So like if you're using Express or Node or whatever, you might have seen like res.write versus res.send.  When you call res.send, it sends the headers and does everything.  So if you--
[00:57:31] if you're doing like a typical response in node you'll do a bunch of stuff and  then you go res dot send at the end and then it's knows to send everything whereas in uh
[00:57:41] Res.write just sends a bit of it out.  And at that point, the first time you call write,  node will send out your headers at that point.
[00:57:48] And then it'll just continue from there until you call res.end yourself. You can't call send on a stream, essentially.
[00:57:57] Yeah, all streaming is, is just sending HTML in pieces. It's not like some new WebSocket technology or something fancy. It is just HTML chunk, or H2P chunk encoding. It's like just standard
[00:58:12] stuff that's been built in the platform for 25 years or whatever.
[00:58:15] Um,
[00:58:17] So,
[00:58:18] What I'm getting at is
[00:58:21] you have these placeholders essentially is the common thing. Marco actually has a version of streaming and
[00:58:26] we actually use it at eBay a fair bit for top level things,  which is called in-order streaming,  where essentially, even though it'll fork the processes  and do stuff, if three finishes before two,
[00:58:40] it will wait for two and or four finishes before three it'll wait for three to flush it and the  reason in order streaming actually does layer the document from top to bottom  the one benefit of that approach is it it requires zero javascript
[00:58:54] Um,
[00:58:56] like absolutely zero JavaScript. So it works even with, um,
[00:59:00] like bots that can't run JavaScript.
[00:59:03] Out of order streaming, like you find in React and Solid and Marco with these placeholders does require JavaScript, but it doesn't require the main bundle.  It doesn't require very much JavaScript, but you need JavaScript to move stuff because the way this works.
[00:59:19] is
[00:59:20] Let's pretend that three and four have data in our case.  And let's look at the, let's now instead of this,  look at our HTML document, okay?
[00:59:32] Let's rethink this as an HTML document. So this is our document kind of
[00:59:38] coming in, right?
[00:59:41] Our first bit here is going to be
[00:59:45] our synchronous chunk, right? So we're going to send
[00:59:48] We're gonna send one.
[00:59:51] And this is
[00:59:52] This is the HTML, right?
[00:59:55] I'm going to send one.
[00:59:57] and we're gonna send two and I'll put the numbers on it.
[01:00:00] Thank you.
[01:00:02] Actually, you know what?  To make this demo better,  I'm gonna change this example slightly.
[01:00:07] We're going to have a footer too.
[01:00:08] This will just make it easier for me to illustrate.
[01:00:12] And
[01:00:13] The footer technically
[01:00:16] Um,
[01:00:18] I don't feel like
[01:00:21] Thank you.
[01:00:23] The footer, I'm going to give it its own number too, but unfortunately I have to move all the numbers down. The footer really should be,
[01:00:30] The footer really should be-- sorry, what did I just do?
[01:00:38] like moved everything. This is this is my awesome
[01:00:41] Excellent.
[01:00:42] lack of skill address skills.
[01:00:44] Okay, nope.
[01:00:47] Thank you.
[01:00:50] I don't think I got everything still.
[01:00:55] Oh, there we go.
[01:00:56] Thank God.
[01:00:59] The footer should get a new number here.  So let's give it, let's make the footer
[01:01:05] Thank you.
[01:01:06] 3.
[01:01:07] And then
[01:01:09] update these appropriately.
[01:01:12] Thank you.
[01:01:12] Thank you.
[01:01:13] for
[01:01:19] So, I'm gonna go ahead and do this.
[01:01:22] Thank you.
[01:01:24] What this is gonna do,
[01:01:26] essentially.
[01:01:28] is
[01:01:30] And this is actually probably--  I should actually edit this example just a tiny bit more.  Because in reality, the way this works--  and you're probably familiar with this--  is 4 actually wraps 5.  It's pretty standard.
[01:01:44] for four to wrap five, like,
[01:01:47] it's the page and the page, it's usually more like this.
[01:01:53] So one, two, three, four that wraps.
[01:01:56] Five, that's the more standard set up here.
[01:02:01] And essentially,
[01:02:05] What it will do is we'll make one more here.
[01:02:14] On the initial flush,
[01:02:17] Thank you.
[01:02:18] Thank you.
[01:02:20] In the initial flush here, what we're going to do is we're
[01:02:26] Yes.
[01:02:29] Thank you.
[01:02:30] We're going to render,
[01:02:32] Thank you.
[01:02:33] Thank you.
[01:02:34] One.
[01:02:35] Thank you.
[01:02:36] Thank you.
[01:02:37] Thank you.
[01:02:38] It's so weird that it resized.
[01:02:41] Thank you.
[01:02:43] Thank you.
[01:02:44] I have no clue why I decided to resize like that, but whatever.
[01:02:49] Thank you.
[01:02:50] Thank you.
[01:02:51] And again,
[01:02:53] Two. Sorry, this is messing with everything.
[01:03:00] Thank you.
[01:03:01] Thank you.
[01:03:03] Thank you.
[01:03:04] Clearly not an Excalibur wizard.
[01:03:06] Thank you.
[01:03:09] Maybe you have to draw a box, one, two, three, four,
[01:03:13] Thank you.
[01:03:13] Thank you.
[01:03:14] Thank you.
[01:03:15] Two, there we go.
[01:03:18] Thank you.
[01:03:19] Thank you.
[01:03:20] Thank you.
[01:03:20] Thank you.
[01:03:21] *pfff*
[01:03:22] Three, and we're going to render,
[01:03:25] Thank you.
[01:03:25] four placeholder, okay?  That's essentially what happens on that initial render, okay?  So it renders one, two, four placeholder three.
[01:03:37] So you actually render the footer in place.
[01:03:44] Then when four finishes,
[01:03:47] I'm going to assume that four finishes before five. This is not always the case. But when four finishes, it just appends it below the footer here.
[01:03:58] Thank you.
[01:03:59] maybe in a hidden field or something, but it depends below the footer.
[01:04:04] And then...
[01:04:07] we will give this four
[01:04:11] Thank you.
[01:04:12] - Bye.
[01:04:13] And then
[01:04:15] Thanks.
[01:04:15] It'll also flush with it a small script tag, essentially.
[01:04:21] And that script tag--
[01:04:23] will tell it to insert 4 where 4P is.  So it'll actually do it.  But in the case of 4 as well,
[01:04:31] We also have
[01:04:34] Thank you.
[01:04:35] Thank you.
[01:04:36] inside of four, sorry,
[01:04:39] We have...
[01:04:41] Thank you.
[01:04:42] Thank you.
[01:04:45] I'm going to change the color of this one again.
[01:04:47] Thank you.
[01:04:50] Thank you.
[01:04:52] Thank you.
[01:04:53] Thank you.
[01:04:54] Thank you.
[01:04:55] Thank you.
[01:04:59] Thank you.
[01:05:00] set for we have
[01:05:03] Thank you.
[01:05:03] Thank you.
[01:05:04] Thank you.
[01:05:05] Thank you.
[01:05:06] Five placeholder as well.
[01:05:12] -
[01:05:13] And this is also that later when five loads in, five does the same thing again.
[01:05:21] Thank you.
[01:05:22] 5 gets rendered on the bottom with its
[01:05:28] own script tag.
[01:05:30] Sorry.
[01:05:30] five
[01:05:31] Thank you.
[01:05:33] And then
[01:05:34] with its own script tag.
[01:05:36] Then we're going to stick here.
[01:05:39] So this is essentially our setup.  And let me just put the number five in here.
[01:05:48] Cool.  So you get this kind of weird onyning going on, right?  So essentially--
[01:05:55] Yeah.
[01:05:56] We first draw one, two, four placeholder, three.  Then when it finishes later,  we draw four with the placeholder for five in it,  and our script tag.  It runs that script tag which inserts it.  So at that point,
[01:06:12] we've actually
[01:06:14] Thank you.
[01:06:15] we've actually moved
[01:06:18] Um,
[01:06:19] this up to here.
[01:06:21] Right? So now you'll see four in place, right? This doesn't, the framework might have not even loaded at this point. You might be still waiting. Hydration may or may not have started at this point.
[01:06:34] Um,
[01:06:35] And
[01:06:37] Thank you.
[01:06:38] Yeah, and an X, let's change this arrow.  This arrow is the blue arrow, right?
[01:06:42] And then...
[01:06:44] when five changes sometime later, this is up here, and now five inserts into there, essentially.  So we have this kind of, I don't know what it's called, like those like Russian dolls or whatever  going on, essentially that it just inserts into each other using script tags that get flushed  synchronously. That's the trick.
[01:07:03] um it does require javascript but it does not require the main bundle does not require um
[01:07:10] It doesn't require very much, in fact, to do this.
[01:07:16] The hard part of coordinating is while this is happening, you're loading other assets, you're loading your CSS, you're loading your your.
[01:07:24] uh sorry you're loading your javascript so it might start actually um hydrating that's  the whole key here if if you wait
[01:07:33] until the end.
[01:07:35] like document ready or which is the default i don't know if you if you all are aware but by default  scripts tags don't execute for type module until the document right before the document load event  if you wait till the end
[01:07:49] you're not hydrating or doing any work until this all finishes but if you if you have the ability
[01:07:55] If you have the ability to use the async descriptor on the script tag, it will start loading as soon as possible. So that means that this whole process, while it's sort of outside of the framework, the framework has to be aware of the different states in order to handle it. So I'm going to show a quick demo now of what this actually looks like.
[01:08:22] Essentially, let's see here. Do I have a banner for that?
[01:08:28] No, we're still here. Okay. So essentially I've written an app and I've used this example before. I'm going to, don't worry, I'm going to blow up my screen so you guys can all see it here. Um,
[01:08:42] Thank you.
[01:08:48] Let's see here.  Here, this is in the solid repo.  Right in the SSR examples, I actually  have different versions of the same app.  I've used this app before in previous streams.
[01:09:02] But essentially, the gist of this whole thing is,
[01:09:05] We have a simple app. It has a home page.
[01:09:08] as settings.
[01:09:10] panel and a profile and the profile um basically does a little bit of data loading
[01:09:18] This is kind of a mess, but I've made a couple of resources that are cascading. And then the profile,
[01:09:26] essentially
[01:09:30] shows the first information based off the first thing,  and then uses a suspense boundary for the second one.  And that's the whole thing.  If you've been looking at all this data loading stuff,  when I showed the placeholders and thought this looked like  the suspense, as I said before, it's because it is like suspense.
[01:09:46] Essentially, what we've done here is our index route,
[01:09:50] is wrapped.
[01:09:52] in suspense.
[01:09:53] This is our quick makeshift router. And our page has a second suspense that relies on the cascading data. So having two suspense boundaries lets us not wait for the whole thing, but do it in chunks as it comes in, which is helpful for the choice of this demo. And essentially, if I can run this one, let's build it first just in case.
[01:10:20] buildExampleStream.
[01:10:23] just in case it's out of date and then
[01:10:28] All right.
[01:10:31] in this
[01:10:33] I'm going to open this one up, local ADD. Okay. So,
[01:10:37] This is a simple demo where we have our pages navigating, right? And there's just some stuff on it, just garbage. This one's a counter. There's not the counter, it's to show concurrent rendering, because when you go to profile, it's still rendering the counter while it's rendering this off-back.
[01:10:53] And the reason it takes so long to load  is because this is our cascading data.  This is what we're gonna be looking at.  When we refresh the page,
[01:11:01] you can see loading the john's profile and then we load the second section this is 400 milliseconds  cascading it's kind of a
[01:11:10] it's a lot but i just want to do it do this because it's easier when you have data latency to show off streaming
[01:11:17] So fairly simple example.
[01:11:19] load, load. Now, if you want to see the
[01:11:24] Wow.
[01:11:25] What does this look like is kind of the interesting thing.
[01:11:33] Yeah.
[01:11:34] in a simple app,
[01:11:36] Thank you.
[01:11:37] where this is client rendered,
[01:11:41] you would you would expect to see requests happening in the client and it would use suspense and look very similar.  In fact, I do have that demo here and maybe that's the easiest thing, although you can actually see here because the console logs, this is loading on the server.  But let's very quickly show.
[01:11:59] Before we show the streaming, let's actually show what the Amstack version of this is. This is  essentially rendering a synchronous shell and then all suspense and data loading happens in the  browser. In fact, sorry, let's refresh.
[01:12:13] it looks almost identical to what we just did.
[01:12:17] Right.
[01:12:18] If you look here,
[01:12:21] I'm actually going to move this off to another window because I have browser extensions that are...
[01:12:28] But if you look here what's going on,
[01:12:33] We just have a head tag.
[01:12:35] Solid has this little thing for hydration called Hydration Script, which does cool stuff like event playback and some other stuff, support streaming and all the other hydration stuff. But other than that, it is just our app with our suspense and our
[01:12:51] it just loads in. There's nothing else to this page. We just reload,
[01:12:56] bang now if you were using something like not this one if you're using something like  next.js or gaxby you you might or stop kit or something you you might be used to
[01:13:11] the next mode that I'm going to show really quickly here just to kind of explain this. I'm building up the streaming because I think it's important to sort of see the difference and how it kind of progresses from one to the other.
[01:13:29] I have shown this a little bit before,  but I think it's kind of illustrative.  This is your typical, the first app I showed you was Jamstack.
[01:13:37] pre-rendered shell, essentially. It could be SSG'd, it could be on-demand, but then it does the requests in the browser. And if we looked at the console here, you see the load user load info, and it as it cascades in. The Jamstack, or sorry, the more typical Next.js or CellKit page is more like this.
[01:13:57] And as you saw, there's no loading here.
[01:14:00] Right? It is reloading.  You can see the counter reset,  but you don't see the loading  because the page comes in fully rendered,  like over the network.  If we look at this, let me format that.
[01:14:13] And shrink this window.  What we get is our hydration script and then our fully formulated HTML.
[01:14:24] The key part here is we write that data into the browser, right?
[01:14:29] here's the john snow and here is the the list basically we serialize the data into the into the  head and
[01:14:36] we render the full thing.  And I mean, this example is a little bit trickier  than I think some of those frameworks support, mostly that
[01:14:44] this is lazy loading components right so we solid um it does support lazy loaded hydration which is  already a little bit complicated because it means that not all the javascript is necessarily there  when we go to hydrate
[01:14:58] So we actually have to pause and resume hydration as the JavaScript loads in.  But the important part here is you never notice a loading state because it waits for it all.  And we'll see the implications of that in a minute.  But I just wanted to kind of show how this builds up because our first page, we didn't  send the data.  And as you see here on the console, there is no there's no logs here.  As you'll see, we're doing all the work on the server.
[01:15:21] Streaming, and here's the data being written into the head right here.
[01:15:30] Okay.
[01:15:31] Streaming is basically...
[01:15:36] the kind of combination in the middle. Build stream, or we'll build the stream again.
[01:15:48] And we'll start the stream.
[01:15:50] Thank you.
[01:15:52] Yeah.
[01:15:53] The streaming example.
[01:15:55] Good.
[01:15:57] It looks a lot like the client case, but we have slightly different HTML.  And I'm going to go back to the network tab here because it's easier to see it in its original form than it is to see it in the final form.  The final form is exactly what you expect, but in its original form is a little bit more interesting.  So we have our hydration and scripts, and then we flush out all these initialized things.  And I need to do this to basically tell the browser that, hey, you're going to wait on this.
[01:16:21] on this on this information that's going to be coming um these are our unique hydration keys um  they're not the prettiest things but they do they use it pretty well but essentially  when when we render the page we render
[01:16:35] our nav, see, home profile settings, and then we render our tab component and bang, placeholder, loading spinner.
[01:16:43] in the span.
[01:16:45] And then we finish our body, branch through the rest of the page, render our async script tag into the page, and there the HTML closes.
[01:16:54] It's over. Well, no, it's not.
[01:16:57] Thank you.
[01:16:58] As when the first async request finishes, we actually send it along the stream, the data,
[01:17:05] we create a hidden div
[01:17:07] where we
[01:17:08] put in the content here of the panel, the John's profile, where we server rendered it. And then the section could be about you. And we actually render in this other spinner. It's exactly what I showed in Excalibur a minute ago.
[01:17:21] We have another placeholder, see the PL at the front, for this one.
[01:17:26] Then
[01:17:27] we flash the script and this very simple script here just replaces the nodes it finds
[01:17:33] element with the IDE,
[01:17:35] and replaces it with the child nodes and then it triggers the suspense to say hey you can continue  hydrating now behind the scenes our hydration script basically uses promise resolution where the server
[01:17:46] basically set when we call it it sets up these units it sets up a promise that if hydration gets to it first it reads the promise
[01:17:57] And
[01:17:58] When we set the data, it resolves the promise, which lets the client continue where it left off if it's fast. And if it's fast, it's like this. You get to see that loading state. It feels like client side rendering.
[01:18:10] But
[01:18:10] you know, if the JavaScript bundle hasn't loaded, it's still going to behave like this on the HTML.  It just won't hydrate and the data will be available right away.  And then.
[01:18:20] So we define our function and then we call it. Then we also initialize another suspense
[01:18:29] boundary, right, the second one.
[01:18:32] Now some time passes again.
[01:18:35] And
[01:18:36] the second data chunk comes in,
[01:18:39] flushes
[01:18:41] the rest of the page.
[01:18:42] and then inserts into place.
[01:18:44] kind of finishing finishing up the hydration story so
[01:18:48] This is exactly pretty much what I was showing in our Excalibur here, where we have two cascading ones. Right. A lot of cases it's simpler. There's a single one, but I wanted to kind of show how we do the insert in the insert kind of.
[01:19:02] Chain up.
[01:19:03] What's really interesting about streaming is, yeah,
[01:19:07] On a fast network, this feels fast when you get this loading state.
[01:19:11] on a slow network,
[01:19:14] I just went to Fast 3D. Look what happens.
[01:19:20] you don't see any loading state.
[01:19:23] Thank you.
[01:19:25] Thank you.
[01:19:26] And the reason for this is there's no delay by the time
[01:19:31] that it serves it, all the HTMLs here.  And that's a huge difference.  When you do client rendering,  you always have to render that loading state.
[01:19:39] because the client has to render it.
[01:19:42] If the main bundle hasn't run or you don't have the data, you have to do it.  But with streaming, because it's separate from that,
[01:19:50] you know, it scales with the network. If you have a slow network,
[01:19:53] It looks just like normal async.  If you have a fast network,
[01:19:56] it looks a client.
[01:19:58] And,
[01:19:59] The results are actually
[01:20:01] really cool here. Let's just do
[01:20:05] Let's take a moment before I got some better examples I want to show.  But let's take a moment here and kind of look at the performance profile of this stuff just to understand.
[01:20:17] as i said this is a pretty contrived example but what's nice about it is it's steady
[01:20:21] these are exactly 400 millisecond delays.
[01:20:24] So we can see a fairly consistent results across the different approaches in terms of how performance changes on fast and slow networks.  And I think that would be interesting to kind of get an idea of the benefits of streaming versus other approaches.
[01:20:36] So let's set it up. We've set the stage, right?
[01:20:42] There is a fourth mode in my demo, which is SSG.  And SSG is just unfair because
[01:20:47] it has perfect knowledge because it fetched and pre-rendered it once.  Obviously nothing beats SSG, but it does give us a baseline.  So maybe that's where we'll start here and we'll take a look and kind of understand that.  So I'm going to build the SSG example. This is
[01:21:03] This
[01:21:04] but if you see load user load info this ssg is basic it's all about when you do the queries  ssg does the queries at build time
[01:21:13] Um,
[01:21:15] Our async and streaming SSR do the queries on the server, and our shell approach does the queries on the client.
[01:21:24] That's basically the difference between the approaches. So obviously,
[01:21:28] as a baseline
[01:21:30] Thank you.
[01:21:32] Our SSG example can't be beat, but we'll just run our SSG example, okay?
[01:21:39] So let's just do this. And we're going to take most of the window up here. We're going to do a little bit of performance profiling here.
[01:21:50] OK?
[01:21:51] So,
[01:21:52] I'm going to give it a quick reboot.  You can't see SSG. You can't even see the load.  So I'm going to I'm going to.
[01:21:58] I'm going to start profiling.
[01:22:02] So this is about as fast as things can possibly get because it's all pre-rendered, okay?
[01:22:07] including the data fetch. So on my system here,
[01:22:11] Thank you.
[01:22:12] while I'm streaming with you guys, we get a first paint of about 39 milliseconds.
[01:22:17] and the full content full paint at 39 milliseconds.
[01:22:20] And
[01:22:21] or sorry, the first contentful pane, and then the largest  contentful pane, which is basically around the time the header comes.  And this isn't when it's finished.  For this example, it thinks this is the largest contentful pane.
[01:22:30] It's
[01:22:31] also at the 39, unsurprisingly.  They all come at the same time because it's pre-rendered on the server.  And then the onload event happens at about 54 milliseconds, and essentially,
[01:22:42] Yeah, we're all done.
[01:22:46] around the 54 millisecond
[01:22:48] Thank you.
[01:22:50] mark. Nothing beats SSD.
[01:22:52] But
[01:22:53] Thank you.
[01:22:55] Thank you.
[01:22:56] Thank you.
[01:22:57] Let's now run SSG on our fast 3G network.
[01:23:03] I love that they call this one fast.
[01:23:05] And we'll use that for comparison.
[01:23:07] Okay.
[01:23:08] I think it's still done.
[01:23:11] Yeah.
[01:23:11] Thank you.
[01:23:12] On our fast 3G network, things are significantly slower, but SSG comes in
[01:23:18] at about 1154 milliseconds.
[01:23:22] and
[01:23:23] everything comes at the same time and
[01:23:25] You notice here that the
[01:23:28] This takes a little bit longer and
[01:23:32] essentially
[01:23:35] I guess hydration...
[01:23:38] here is done at 1798. Okay.
[01:23:45] That's interesting.  This example doesn't have preloading, so this might not be the--
[01:23:50] the best example of
[01:23:53] Uh-huh.
[01:23:53] for hydration time, but it's good to show off rendering time at least.
[01:23:58] Okay, so let's move on.
[01:24:02] And let's build our--
[01:24:04] Um,
[01:24:06] Thank you.
[01:24:07] Let's do async text.
[01:24:08] Let's do SSR next, which is our...
[01:24:11] Actually, we've already built these all.
[01:24:14] Let's just go straight to the comparison.
[01:24:16] Let's refresh the page once.
[01:24:20] Okay. So I'm going to go back to no throttling.
[01:24:27] Fresh.
[01:24:29] And we'll run the
[01:24:30] performance comparison.
[01:24:33] Okay.
[01:24:35] No throttling.
[01:24:38] Thank you.
[01:24:38] Yes.
[01:24:40] Thank you.
[01:24:40] We have a first Contentful Paint at 25 milliseconds.  So this one was really fast, actually.  There's going to be some variety between our runs.
[01:24:48] But Largest Contentful Paint comes much later because it's at 4:37 because it has to wait  for the first request to happen. And we're actually not all done because I told you there's  two 400 millisecond requests. We're not all done until about...
[01:25:04] over here, about eight
[01:25:06] 50.
[01:25:07] essentially.
[01:25:08] So,
[01:25:10] essentially there's a slow, it paints right away, but then there's like,
[01:25:16] a slow,
[01:25:17] there's a slight overhead it's basically offset the whole thing like that 25
[01:25:21] becomes 37 and becomes 50. There's a slight bit of offset, but essentially,  you're just seeing the length of the requests here. Now, if we
[01:25:29] add
[01:25:30] fast 3G throttling, the story gets a little bit different with client-side rendering.
[01:25:38] OK.
[01:25:41] Sorry, I didn't hit this.
[01:25:44] loading, loading, okay.
[01:25:46] Perfect.
[01:25:49] Thank you.
[01:25:52] It's the same about 1170 for initial load, but
[01:25:57] but essentially now, our largest contentful paint
[01:26:00] has moved to 2000 milliseconds.
[01:26:03] because of the speed of the network.  It's taken longer than the data request to actually draw it.  And by the time we're done,
[01:26:11] Um,
[01:26:13] and hydrated, we are actually sitting at
[01:26:18] about
[01:26:19] 2.5.
[01:26:21] Yeah, two, two, four, three milliseconds, essentially.
[01:26:25] Thank you.
[01:26:28] Thank you.
[01:26:31] Now I'm going to do async next.
[01:26:35] Thank you.
[01:26:36] Thank you.
[01:26:40] Back to throttling, refresh once.
[01:26:50] Right.
[01:26:51] With no throttling, async waits the whole 800 milliseconds before it sends anything back to the page.
[01:26:59] This one, that means first paint doesn't happen to 8:35.
[01:27:03] and then it's not done till about 8:46.
[01:27:08] Thank you.
[01:27:08] I mean, obviously the first paint deficit isn't good.
[01:27:12] But even more than that,
[01:27:15] it's taken that much longer to kind of finish up.
[01:27:19] And let's do, sorry, slow 3G.
[01:27:25] However,
[01:27:26] when we have a slow network,
[01:27:28] And we run this again.
[01:27:31] with the async.
[01:27:33] Thank you.
[01:27:34] Thank you.
[01:27:35] Thank you.
[01:27:36] First paint comes in
[01:27:38] um
[01:27:40] That wasn't a good run.  Sorry, let's run it one more time.
[01:27:45] Thank you.
[01:27:46] Thank you.
[01:27:47] Oh, maybe it's realistic here.  OK, first paint's coming in at 14.
[01:27:52] And then...
[01:27:54] It's finishing also Hydration 122, okay.
[01:27:59] Thank you.
[01:28:00] Thank you.
[01:28:01] And let's finally do streaming.  I think one of the interesting things  about doing this live on stream, I realize,  is that the network conditions are different  when I'm streaming, live streaming,  than when I'm running it locally, which, without streaming,  which might be affecting the results here.
[01:28:18] a little bit, which is unfortunate.
[01:28:22] Let's run streaming one more time.
[01:28:26] Let's run streaming.
[01:28:27] Thank you.
[01:28:29] First thing you notice on the fast network with streaming is
[01:28:33] 27 in.
[01:28:35] 14.
[01:28:37] and 8.17.
[01:28:38] It's even in this silly example here, the streaming example is faster than all the other ones.  It's the same first paint as client side because it doesn't have to wait to do anything.  Or so it's like shell rendering.  But every other marker, it's faster because it gets to preload stuff.  And when we run it with...
[01:29:02] network throttling.
[01:29:05] Thank you.
[01:29:07] Thank you.
[01:29:09] It's funny, again, you don't see the reload in this case. It basically performs
[01:29:15] Huh, see, it came in faster than async at 1194.
[01:29:21] Thank you.
[01:29:22] and it hydrated
[01:29:24] at two seconds.  So this one isn't good because we're not preloading the profile.  It's not loading till this point, which is unfortunate.
[01:29:32] But again, streaming beat all the other mechanisms, even without preloading the profile.
[01:29:38] properly here um simply simply from from the fact that it got to load stuff sooner at every point
[01:29:47] um
[01:29:48] The interesting thing is as this digresses, the client side rendering and the streaming, which were very beneficial on the faster network situations, the client side gets
[01:30:00] much, much worse.
[01:30:01] because it takes that much longer to do real async requests and
[01:30:07] And that's the thing that we're missing in this comparison, because these are simulated.
[01:30:12] *thinks*
[01:30:14] Thank you.
[01:30:14] Bye.
[01:30:15] Okay.
[01:30:18] I know that that was a bit dry, but I wanted to take a moment to,
[01:30:21] to kind of show the different characteristics. Obviously, I care a lot about benchmarking more than other people, but essentially
[01:30:29] Yeah.
[01:30:29] I do also have examples where we can do the same thing with preloading and more variable data, but essentially,
[01:30:41] streaming kind of
[01:30:44] has the ability to improve performance
[01:30:49] at every point. This is a nothing app.  When you consider the fact that there's basically nothing here,
[01:30:54] the like it's it's it's it's it's no surprise it's surprising that you can even notice the  difference uh between these even up to a couple milliseconds on kind of like a kind of crappy  network anyways that that is most of it let's see i'm going to switch back to chat and see if there's  any questions here
[01:31:15] Yeah, yeah. I think that pretty much...
[01:31:20] I think that pretty much is the thing, because this is dictated essentially by challenges that I have within
[01:31:28] within our own local network here.
[01:31:32] Yeah.
[01:31:33] and with me streaming at the same time, it makes it kind of harder to see and probably harder to appreciate because like,
[01:31:40] Thank you.
[01:31:41] Like,
[01:31:44] uh
[01:31:47] The fast 3G comparison,
[01:31:51] um
[01:31:52] Like here's one with some real data, and it's a little bit heavier.  The fast 3G comparison is significantly more different between streaming...
[01:32:02] So,
[01:32:03] with real data,
[01:32:07] Thank you.
[01:32:07] Yes.
[01:32:08] and say
[01:32:14] Thank you.
[01:32:16] Thank you.
[01:32:17] like client side rendering.
[01:32:20] Thank you.
[01:32:21] Thank you.
[01:32:22] Thank you.
[01:32:23] This is with real data fetching over the network.
[01:32:27] just give like the and with proper preloading in place i probably should use this example  in the beginning i was trying to show the the difference um
[01:32:36] with a control, but when you use real data loading,
[01:32:42] first paint,
[01:32:43] happens here at 1162 and largest can rotate at 1274 and we're basically done our work
[01:32:53] Cure.
[01:32:55] like hydration finishes like right over here.  Like we're around like 1.2 milliseconds for the streamed version.
[01:33:03] But when you do client rendering like Jamstack,
[01:33:06] You're not done.  You're not done until...
[01:33:10] Oh, wow.
[01:33:14] 2.4 seconds. It's over a whole second slower on Fast 3G.
[01:33:24] Right? It's like...
[01:33:29] Right, like it's a whole second slower and async, you know, under these, under this condition.
[01:33:44] right
[01:33:47] Okay.
[01:33:49] is
[01:33:50] Thank you.
[01:33:51] better than client-side rendering or client-side fetching, but it's still worse.  Like, let's run this one more time to make sure that wasn't
[01:34:02] you know,
[01:34:03] Thank you.
[01:34:04] Yeah, OK, there we go.  That's better.  Yeah, so async.
[01:34:07] Async here is actually very similar. Your standard, in a slow network, your standard Next.js approach or SvelteKit, it's going to be very similar.
[01:34:18] in profile to the streaming one, which-- or not that one, sorry, streaming one, which is this one,  where it kind of all finishes up around 1,200 milliseconds.
[01:34:30] the client side jamstack version is like twice as slow
[01:34:35] And, you know,
[01:34:38] But as I said, the dynamic completely changes  on the fast network where async is much worse  and the client side rendering actually beats it.  This was something that I,
[01:34:48] I kind of learned early on when I was working on solid, I was I was doing a lot of client side rendering and I was like, why do I need SSR? It's much faster to client side render than SSR. But it's just because the solutions weren't using streaming.
[01:35:02] Thank you.
[01:35:03] Thank you.
[01:35:05] Thank you.
[01:35:06] - We send data in both cases, both streaming and async.  It's just, if you wait till the end,  you're waiting to the end, you're hitting the bottleneck.
[01:35:15] Um.
[01:35:18] Yeah, I mean, it depends, right?
[01:35:22] Client side fetching on a slow network has to wait to process the JavaScript to start the fetch. So even a quote unquote fast 3G network on a single request, no cascading, nothing fancy, we basically doubled our time. Streaming kind of lets you get the best of both worlds. It lets you do all the work on the server, but doesn't kind of block you from loading the assets on the client at the same time. That's really my whole point here.
[01:35:52] But I think I do, I do,
[01:35:55] I do think like, I mean, I already showed you how much like client side is so much slower. But if you go the opposite direction, as I said, and
[01:36:05] I should have done this example in the first place.  I'm kind of sorry about that, but.
[01:36:11] If I go here and go, okay, now we're on a fast network.
[01:36:16] Let's go.
[01:36:19] client side
[01:36:21] First paint, 55, largest contentful, 116, and the whole thing is done by like 140, right?
[01:36:33] Thank you.
[01:36:33] Thank you.
[01:36:35] Thank you.
[01:36:36] streaming
[01:36:41] I wonder.
[01:36:43] Streaming is going to look really similar to this.
[01:36:49] Sorry, that was weird.
[01:36:52] Oh, I was testing different modes.  Crap.
[01:36:56] Damn it, this is a streaming example in a second.
[01:37:01] Thank you.
[01:37:03] Is I testing a different mode?
[01:37:09] Sorry.
[01:37:13] Okay. Let's go to the async. Streaming performs basically the same as client on the fast network, but
[01:37:29] Look at the difference here.
[01:37:32] everything done but it had to wait for 286 essentially so even if
[01:37:37] on the fast network client side rendering
[01:37:40] Thank you.
[01:37:41] Thank you.
[01:37:42] which,
[01:37:45] Thank you.
[01:37:46] Thank you.
[01:37:47] had basically done all of its work
[01:37:50] So this is not the fast network.
[01:37:53] That's it.
[01:37:54] Thank you.
[01:37:57] Thank you.
[01:37:58] All right.
[01:37:59] And I just showed it off a minute ago.
[01:38:02] - Hmm, anyways, my point is that on the fast network,  client side rendering had already basically done  all its work before async even started essentially.  So it's a big difference.  It's a big improvement, like client and streaming are best  on fast networks.
[01:38:19] async and streaming are best in slow networks. Only streaming is best on both. That's essentially it. It's not like it's way faster in a lot of cases. It just covers the spectrum better. That's essentially the gist of it on the performance profiling.
[01:38:36] Thank you.
[01:38:38] Yeah.
[01:38:38] I might just move
[01:38:41] Right. I did have a couple more things. There's one more thing I want to show. We're done talking  performance now on streaming. I think you get the benefits of there. I wanted to show
[01:38:53] Thank you.
[01:38:53] I wanted to show the streaming example again.
[01:38:57] um
[01:38:59] Thank you.
[01:39:00] Yeah, all right. The other one running.
[01:39:06] Thank you.
[01:39:07] I'll show the streaming example again.  And I want to show--
[01:39:11] Right.
[01:39:13] I'm going to throw up.
[01:39:16] Um
[01:39:19] Let's do shit.
[01:39:20] Thank you.
[01:39:23] uh
[01:39:25] Let me refresh the page. I have this one I minified a bit on purpose because I want to show you.
[01:39:33] Thank you.
[01:39:34] Sure.
[01:39:35] Thank you.
[01:39:36] Thank you.
[01:39:38] Thank you.
[01:39:39] Thank you.
[01:39:40] Let's go in here. I'm going to put a breakpoint here because you can kind of actually see at each point,
[01:39:50] how this resolves, right?  First step,
[01:39:53] Okay.
[01:39:54] It was loading, then when the first suspense resolves, we actually insert
[01:40:00] this in place.
[01:40:02] but it hasn't hydrated yet.  Then when the second suspense resolves,  we insert this in place and then it finishes.  The reason I wanted to show this is what happens if there's  an error while you're streaming?
[01:40:14] It's kind of an interesting problem when you have the page split across multiple places. And this is one of the things that we've been working on because we didn't have error boundaries on the server for Solid. So I wanted to kind of play with this. And like, obviously, the simplest thing you could do is if you have a synchronous error,
[01:40:38] You know, this should be...
[01:40:41] Hopefully, pretty easy, right? Throw new error.
[01:40:48] Thank you.
[01:40:48] Thank you.
[01:40:49] All right.
[01:40:51] And with the synchronous error, it is kind of
[01:40:54] It is kind of simple, right? We build our example.
[01:41:02] Thank you.
[01:41:03] I use streaming for this mostly.
[01:41:06] Thank you.
[01:41:07] I think.
[01:41:09] Oh, like an extra...
[01:41:17] It's never going to hit that, right? Okay, that's fine.
[01:41:23] Let's start.
[01:41:26] I'm gonna throw.
[01:41:27] Okay, not too interesting.
[01:41:32] Yeah.
[01:41:32] And this one's always going to air.  If I go to a different page and reset, it'll work fine.  But my point is,
[01:41:37] it
[01:41:41] In this example, because it happens  during the synchronous rendering,
[01:41:45] Um,
[01:41:46] Oh, interesting.
[01:41:49] Did I actually break the error boundaries?  That's fun.  This is my fault for messing with this stuff.  It does seem to mostly be working.  OK.
[01:42:00] This is pretty easy to handle because it's all rendering on the server and our rendered HTML
[01:42:07] essentially.
[01:42:11] Yeah.
[01:42:12] Thank you.
[01:42:13] Yes, but I've got a solution for that.  That's what I want to show off here, which is cool.
[01:42:22] Because the reason I'm showing the simple case here  is because if we look at what gets streamed out this here,  we just stream out the error boundary,  essentially, synchronously.  There's nothing fancy here  because it happens synchronously.
[01:42:38] Right? So,
[01:42:40] you know, we streamed out the error boundary, we hit it. But what's more interesting is what if
[01:42:48] What if the error doesn't happen synchronously? What if the error happens when we're
[01:42:56] loading information. What if
[01:43:01] What if it happens down here in that second suspense boundary when the first suspense boundary is already flush? What if I make this res?
[01:43:09] And instead of resolving it after 400 milliseconds, what if I reject it after 400 milliseconds?
[01:43:20] Thank you.
[01:43:21] Thank you.
[01:43:24] What if I do this instead?
[01:43:29] because you get the problem, right?  It's it's it's streamed out the first one.  And there's I didn't show you the structure of my app here, but
[01:43:40] - Yeah.
[01:43:40] error boundaries happen where read is. So it's going to, it's,  this content's already going to be in the client.
[01:43:46] And this suspense boundary is going to trigger the error  when it reads this data, the info down here.  And the error boundary is all the way up here.
[01:43:56] outside at the top of our app already in the browser.
[01:44:02] My luck is I've probably broken this since I was testing it, because I've been working on some new stuff. But let's let's let's
[01:44:09] Let's see if we can handle this.
[01:44:17] .
[01:44:19] Let me show you that again.
[01:44:25] Thank you.
[01:44:27] What we're actually doing is we're throwing the error on the server,  and if it hits the topmost suspense boundary without hitting an error boundary,
[01:44:37] it actually throws the error across the network.  And the client catches the error, and the client error boundary
[01:44:44] actually does the error boundary in.
[01:44:53] Pretty crazy, eh?
[01:44:55] Thank you.
[01:44:59] Thank you.
[01:45:02] This is what I've been working on.
[01:45:07] Yeah.
[01:45:08] Yeah, this is one of the considerations that's coming in
[01:45:15] solid 1.3 hopefully next week.
[01:45:18] So synchronous ones still render on the server, but our error boundaries can go across client server boundaries. It means that the error doesn't actually
[01:45:28] propagate until hydration time, but it is definitely a cool trick, right?
[01:45:33] Um,
[01:45:35] Thank you.
[01:45:36] i i'm still ironing out the pieces but essentially i was sitting there and it's like how do i solve  this right like there's a lot of talk we have stuff on marco um where we talk about it and you  can do redirects and like full page reloads because you know if the page is erred then maybe you should
[01:45:55] tell the browser or something, but
[01:45:58] At a certain point, if you've already sent the page, you already sent the status, it's kind of on us. It's like GraphQL.
[01:46:04] GraphQL,
[01:46:05] has the ability to error out completely, but it also
[01:46:10] usually you just handle your errors fine grained.  I think if you get past that initial shell render,
[01:46:16] like,
[01:46:18] you know, you've determined the main stuff, person's authorized, whatever, you've kind of got to the main shell render and it errors at that point, then, you know, it's kind of like what happens on the client. You can handle it piecewise. You can gracefully recover and navigate out of the situation. And that's and that's and that's kind of the idea here.
[01:46:35] Yeah.
[01:46:35] I...
[01:46:37] I'm glad you all like it.  This is, as I said, handle both the synchronous and asynchronous cases, even with streaming.
[01:46:44] if, if,
[01:46:46] I wonder if I can show this in slow motion a little bit.
[01:46:49] Like if I show it here,
[01:46:52] we see it better because first,
[01:46:55] there
[01:46:56] then there,
[01:46:58] than there, yeah.
[01:47:00] See?
[01:47:01] Thank you.
[01:47:03] How does reset work? Reset is something that solves error boundaries have built in, where it just tells it to try and re-render everything below the error boundary again. It was just a, it was like a, technically you should fix the state before you do it if it's reoccurring, but you can pretend like if, if, if, if in our example here, let's pretend the error only happens on the server. I mean, that's kind of silly, but
[01:47:26] What if
[01:47:28] We were like is server reject else respond. Let's just pretend like this was our code. Solid has like a is server that is exported from --
[01:47:46] So JS web.
[01:47:47] Let's do this instead.
[01:47:53] Thank you.
[01:47:59] If we did that, it fails on the server,  then when we click reset, it'll load in the client.
[01:48:04] Um,
[01:48:05] essentially. This is client side suspense. So just to kind of show you, usually you have to, if it's always going to error, then it's always going to error when you click reset because it runs the same code again. But because the code on the client is different than the code on the server here, we can kind of showcase this working.
[01:48:28] Um,
[01:48:30] Thank you.
[01:48:31] It's interesting. With the original streaming approach that was client rendered, this wasn't a problem at all.
[01:48:41] The big change in Sol 1.3 is we're doing HTML streaming.  Originally, we only streamed the data, which means the client would render it.  I need to test how that works with style components again, because the trick that we typically do is we flush the styles
[01:48:58] at
[01:48:59] Um,
[01:49:01] we flush the stiles at shell time, which means that the stuff that's lower down in the tree,
[01:49:09] basically triggers the styles at hydration. So I need to see what that looks like in terms of doing partial. I think styling solutions are going to be the place where we're going to have to do the most work. Solid is
[01:49:23] will be shipping with a data only option,  which preserves the current streaming behavior.  So we can do that.  But yes, this is definitely a place  where we're gonna have to work on,  especially some of the CSS libraries, definitely.
[01:49:43] This is an interesting one. And I think, generally speaking, it should be fine. We need to look at the fallbacks. I think the placeholders might be the one place that styling breaks. I use Marco's technique. We might have to revisit this. As I said, the HTML streaming is still has...
[01:50:02] some cases that we have to consider.
[01:50:09] Yeah, I mean...
[01:50:14] Yes, it is client based for the retry because it's like the effects only run in the browser.
[01:50:19] there's really but like you have you have everything you need at that point do you know i mean like by  the time you're there you've already loaded the javascript anyways there's no point going back to  the server like you already have
[01:50:29] the stuff, like in general.
[01:50:32] and I was kind of pointing at this streaming HTML is good because it saves round trips and stuff at the end.  Generally speaking,
[01:50:38] like doing stuff with JSON APIs versus going to the server with HTML,  like there's not really a huge amount of difference. Like the JavaScript just
[01:50:46] JSON stuff might even be slightly faster in a lot of cases.  If it's peddled properly,
[01:50:51] Thank you.
[01:50:51] But like
[01:50:53] if it was a case where it was a partial hydration consideration, maybe.  And I said a lot of a lot of people could do that.  But I mean, you could also just
[01:51:01] In your error boundary, just go reload the page.
[01:51:05] Like that could be what the error boundary does.
[01:51:11] The stream component failed to send data.
[01:51:15] basically that would be handled like a client side error because, um,  it's resolving a promise in the client. So then the client would,
[01:51:24] Like if it failed to send the data, I guess if it failed to send the data,
[01:51:28] hydration would hang.
[01:51:30] Um,
[01:51:31] unless it actually rejected, it'd be like a promise
[01:51:35] that never resolved essentially if we failed to send the data
[01:51:40] - I feel this here.
[01:51:42] Like if it failed, like actually error, you'd be fine.  But if it if it actually like just didn't send it, then it'd be like,
[01:51:50] Bye.
[01:51:50] Yeah, it would be like if a request timed out and didn't send it.
[01:51:58] Thank you.
[01:51:59] Mm.
[01:52:01] That's basically the error boundary.
[01:52:07] functionality, does both synchronous and async error boundaries across
[01:52:13] across as it, if you can handle on the server,  it'll handle it and send it like I showed you.  But like in this case,
[01:52:19] We didn't look at the network here.
[01:52:21] But if we look at the rendered HTML, what we're going to see here is that...
[01:52:28] it actually got as far
[01:52:31] as like
[01:52:32] it sent the first bed
[01:52:37] and
[01:52:39] Then...
[01:52:40] or is it we should yeah and then placeholder and then it rendered the second bit
[01:52:47] and placeholder.
[01:52:48] And then
[01:52:50] It just...
[01:52:51] finished by sending our error through CR YOLO.
[01:52:55] It just sent our error through in the last script and triggered the error boundary.  That's essentially what happened. So there's some refinement here.
[01:53:06] But I've got the core mechanisms working. I'm mostly just working on testing and bug fixing at this point. And I think some of the more next piece, and I've been, as I said, testing some of the CSS libraries is going to take a little bit of work here.
[01:53:26] But essentially, you can opt into the current behavior with data only.  And obviously, you can always just do async.
[01:53:38] to get suspense on the server still, essentially.  So we have the three modes
[01:53:43] No suspense on the server.
[01:53:46] Suspense on the server, wait for everything to finish, and then suspense on the server, actually four modes, streaming, but just the data, and then suspense on the server streaming HTML. So my hope is obviously that streaming HTML just becomes a de facto way, but I understand that there's still some work, especially with third-party libraries that we're going to have to kind of round out.
[01:54:09] While we're in this demo, there is actually
[01:54:15] i'm gonna sort of remove all the errors here for a second there is one more cool feature
[01:54:27] Thanks, yeah, I'm hoping this turns out to be a good pattern.  There is one more cool feature that I wanted to kind of show off here, which is
[01:54:37] This one doesn't matter.
[01:54:39] so much for all projects, but some of you might be familiar with Astro.
[01:54:46] And
[01:54:49] And with Astro,
[01:54:53] you can have multiple routes and our problem with async is they could collide with each other  so we've added a new feature in 1.3 where we can set a prefix id um on both sides so when you hydrate  we can use my favorite
[01:55:09] my favorite ID, if we can do that.  And then when we server render, I'll just  do the streaming example, for example.  Where is it?  Render to stream.
[01:55:19] We can also...
[01:55:22] Add our render ID. And if it matches, everything will hydrate as expected, which is here. So,
[01:55:33] Thank you.
[01:55:35] Okay.
[01:55:40] in the window.
[01:55:42] Thank you.
[01:55:47] Thank you.
[01:55:48] interesting it's like i accidentally closed the window or something  because this isn't the right window this is this is hacker news example
[01:55:57] The window just disappeared on me.
[01:56:01] Thank you.
[01:56:02] Okay, there it is. Yeah, I must have just missed it.
[01:56:05] Build example stream.
[01:56:08] Third example stream, okay, beautiful. Okay.
[01:56:15] See, and this example hydrated perfectly fine, right?  But if I mismatched the ID essentially,
[01:56:23] And you're like, why would you do that?  I just want to show like you can have multiple hydration roots now.
[01:56:29] on the same page not conflicting with each other
[01:56:33] perfectly namespace. So now if I do this, this won't hydrate properly. See how it's not updating? See how this counter doesn't work? It's an error. But essentially, my point is, we'll be able to support async rendering in Astro as soon as they give us the ability to
[01:56:50] to provide unique IDs from the renderer, which is something that I've been talking to them about.  So I'm looking forward to that.
[01:57:01] I don't know if that feature makes sense,  but it's basically just to support islands better.
[01:57:08] Thank you.
[01:57:09] Thank you.
[01:57:10] It's weird.
[01:57:17] I don't know why it's not opening the right window up ever.  Okay, there it is.  Okay, and one other thing to mark over here is,  update to the streaming API.  I don't know if you noticed this, it's rendered to stream.
[01:57:30] options and then pipe and this gives us a lot of ability of when we send the stream so we can wait  to flush till the end or flush um immediately like i am here and i've set it up so that's the  same api for both web streams and for node streams for node you use dot pipe for web stream to use  pipe to essentially and it pipes to a writable stream so in this case pipe is is just our response  like from express but on a like a cloudflare worker you'd pipe to um one of the writable
[01:58:00] streams or whatever. So essentially,
[01:58:03] kind of unified the API, that's another big one here.
[01:58:07] Yeah, how does streaming handle meta async page trials and assets?  There's some great write ups that I love that are coming up from the React team on this.  Generally speaking,
[01:58:17] You've only got two options here.
[01:58:19] You either figure it out on the synchronous part of render, like before you pipe it through.  So essentially on that first render, collect all the...
[01:58:28] async stuff so you know as you go through your routes or you know start your route loading you  know what page you are set on the meta tags or you're going to be setting it in the client when  it hydrates that's basically the two options you have streaming there is no real way to get around  it like if you want the right stuff you basically have to do it up front you could you know if  there's some stuff you could load you could but the problem is the second you stop things to load  data you're blocking the stream and you're back to async again you're basically missing the point so if
[01:58:57] all possible.
[01:59:00] you don't want to wait before you start streaming back the content. And obviously the head is what streams first. So that's kind of the conflict. Either you kind of got to pick whether you have a more performant page or
[01:59:17] And you stream the stuff
[01:59:21] with the headers that you have, or you block the page and
[01:59:27] Wait till the end.
[01:59:31] Unfortunately, there isn't really a great answer here.
[01:59:36] Thank you.
[01:59:39] Thank you.
[01:59:41] Think of offloading client side render.
[01:59:52] Thank you.
[01:59:56] Oh, okay. Yeah, that's interesting. I see what you're saying. Yeah. I,
[02:00:00] I mean, here's the thing. If you already have the content in the browser,
[02:00:08] Like,
[02:00:10] Client side rendering in the main thread is the fastest, most performant way to do stuff. There's concerns about blocking for sure.
[02:00:20] But generally speaking, like,
[02:00:23] it's always faster. Web workers can't write to the DOM
[02:00:27] directly um you have to like go through a bit of a song and a dance and like encode it and send it  back like essentially the only the main thread has access to the dom so like they're doing cool stuff  quick and stuff with like party town and like playing around with this but like performant  rendering only happens on the main thread um manually hydrating is another question uh which is interesting
[02:00:52] As of right now, we're still kind of just hydrating top down.  I've thought about patterns to hydrate as you need it.  As your project gets bigger, it definitely is a consideration, the hydration costs and how lazy loading plays in.  I'm just going to need to explore it more.  Right now, obviously the small demos where you can see quite notably like a 400 millisecond gap for hydration when you're using React.
[02:01:22] it hydrates almost immediately.  Our hydration costs are actually relatively cheap  because of the way we render. It's all fine  grain and we just literally just  almost, we hook up,  we just run like  some of the fine grain stuff. We don't like build  a whole feed on. But
[02:01:38] That being said, obviously you always want to do less.
[02:01:42] Thank you.
[02:01:46] Sorry, with the thing. You can get better.
[02:01:52] Yeah, I mean, I suppose. It depends on the network speed. As I was saying, I was beating server rendered stuff with client-side rendering for the most part, just because of the delay.  Like, they have to actually wait to do this stuff before they start sending other assets and then loading in and causing the waterfalls and stuff.  I'm just saying, like, how does the worker get the content?
[02:02:16] like
[02:02:17] I guess I'm thinking mostly first page load, and then I'm thinking after the fact,
[02:02:24] um
[02:02:26] like
[02:02:27] like
[02:02:28] It needs to load at some point. Maybe I'm just not quite following.
[02:02:33] I think it's interesting, and Marco, we were thinking about this, is when you have a framework that's primarily set up for
[02:02:40] server side rendering, it might be interesting to just move that server closer, like put it in a worker. So, you know, that, you know, we're already moving closer on the edge, why don't we just take it all the way to the worker. But on the other hand, it's like, it's only I feel like the benefit comes mostly if you can unify the paradigm, like it's always works like that conceptually.
[02:02:59] Because as the client side rendering is also can be very, very fast.
[02:03:03] um
[02:03:04] anyway okay so we talked about the streaming apis we've talked about  the uh what are they called the render ids essentially the uh
[02:03:17] the new ability to do async islands. We talked about error boundaries.
[02:03:24] Um,
[02:03:25] There's one or two other things that I wanted to talk about  from solid 1.3.  Let's just look at it for a second here.  I'm gonna call solid.  I've got the change log.  I'm still working through bugs here, as I mentioned,  but if we go to the next branch,  you can see what I've been doing.
[02:03:48] And
[02:03:51] Often when I get close, sorry, when I get close to release,  I start putting, oh, I guess I didn't put it in the nested,  it's the top level package.  I start putting stuff in the changelog.
[02:04:01] to give stuff.  So we talked about HTML streaming in the new streaming API.  We talked about error boundaries.  We talked about isolated.  Yes.
[02:04:09] The next thing I want to talk about actually is
[02:04:12] is a really cool thing um i should say here is universal reactivity um
[02:04:20] This is the last
[02:04:22] big feature most of the other stuff we've been doing is like a lot of work on  typescript support and some improvements to source maps but um
[02:04:31] I think, and there's a bunch of bug fixes,  but I think this one's a really interesting one,  and I'm going to pull up a code sandbox  to show you what I'm talking about.  I shared this on Twitter, and people were kind of mind-blown.  The creator of Cairo, Shane, he was like,
[02:04:46] I don't know if any of you have ever tried to use an external store.
[02:04:50] in a framework, right?
[02:04:54] If you've ever seen like MobX, they have this ability to just like make classes reactive.  You just go make auto observable and then you can essentially...
[02:05:05] like,
[02:05:07] wrap normal property access getters and stuff, to make them reactive. It's kind of a cool thing. But most of the time, if you were to go through the process of taking a state library like MobX and using it in React,
[02:05:20] Thank you.
[02:05:21] or using it
[02:05:24] Yeah, using it in something React.  You'd usually have to wrap your component in like an observer, decorator, kind of wrap it in an effect.  Because they need something to trap.
[02:05:35] And that generally causes them to render whole components.
[02:05:39] If you're not familiar, I apologize. I don't have an example of that in front of me right now. But essentially, actually, maybe I can see MobX React. Just pull it up to kind of show you what I mean.
[02:05:54] yeah here's the timer and then essentially you use this observer and you actually wrap  your component in an observer and then it reruns the whole component the problem with
[02:06:08] reactive libraries playing with other reactive libraries.
[02:06:12] is what if you don't want to re-render the whole component like often you have no reason to use  mob x in view or solid because we have our own state management we have our own reactivity why  would you why would you do that but you know just like mob x state tree there's some interesting  applications like specific state patterns and the thing is with react you might just wrap the  whole thing and re-render everything that's not going to work in a more granular system
[02:06:36] and what you end up happening it's very similar to when you interact with mob x is you'll you'll
[02:06:42] Essentially,
[02:06:44] have to map
[02:06:46] you know each thing to a signal so you'll you you maybe like this this is a class which is nice  it's like almost like a proxy it has like the whole thing but like quite often you'll have to like
[02:07:00] you make like a use observable hook and inside that you'll subscribe to the mob x
[02:07:07] observable essentially and have it right to a signal.
[02:07:12] Like, it'll look something, if you're MobX programming, you might have seen this before.
[02:07:20] auto run and then you'll be like never
[02:07:27] Thank you.
[02:07:31] Whenever you know,
[02:07:34] timer.seconds.pass changes.
[02:07:38] um
[02:07:40] Set signal.
[02:07:46] Thanks.
[02:07:47] Thank you.
[02:07:49] Thank you.
[02:07:49] Thank you.
[02:07:51] Thank you.
[02:07:52] Thank you.
[02:07:54] Thank you.
[02:07:59] uh,
[02:08:01] What you'll do is you'll write a wrapper kind of like this.
[02:08:07] And
[02:08:09] Thank you.
[02:08:10] It'll look like...
[02:08:12] Let me roll it like this.
[02:08:14] you
[02:08:15] Thank you.
[02:08:18] Use observable.
[02:08:25] OK, let's pretend this is our useObservable function.
[02:08:29] Thank you.
[02:08:31] Thank you.
[02:08:32] And.
[02:08:35] You'll sorry, this is set and then you'll return it. Yes.
[02:08:42] you
[02:08:44] And so let's say you make your new timer and then you go use observable timer.
[02:08:59] Got seconds.
[02:09:01] Thank you.
[02:09:02] Asked.
[02:09:04] And then you'll be like, let's call it seconds.
[02:09:11] Thank you.
[02:09:13] Thank you.
[02:09:14] Thank you.
[02:09:16] and then you'll put it in here and you'll use it.
[02:09:28] Thank you.
[02:09:29] Thank you.
[02:09:32] And it works and you click and you reset.  This is the typical way.  And let me give my screen a little bit bigger  so you can see it a little better here.  But this is the typical way that,
[02:09:45] I'm gonna comment this out the proof that I'm not doing any tricks.  This is the typical way that you would do this in most libraries.
[02:09:55] Thank you.
[02:09:56] Let me see if I can save this.
[02:09:59] So I probably don't wanna save it  'cause there are people who
[02:10:03] I should fork this.
[02:10:04] Thank you.
[02:10:06] Anyways.
[02:10:07] You make a special wrapper, you use a signal, you set up an auto run, and then everywhere you want to use a mobx variable in solid, you wrap it in a use observable.
[02:10:17] thing, and then you get a new signal and you use that in your template. This is the standard  process of that. And then if you want to use different things in MobX, you might have a  whole set of wrappers, like use computed, use observable.
[02:10:33] use auto run or whatever.
[02:10:36] it's kind of this awkward process of rappers.  And to be fair, it's very similar
[02:10:43] Um,
[02:10:45] like
[02:10:46] It is similar in other libraries. It kind of uses a hook wrapper when it doesn't fit the paradigm properly. Like even React, you just make a hook and then now it's in React state, essentially. But what's really cool about this thing that
[02:11:02] that Shane came up with here was he was like, what if we just
[02:11:06] I registered it right at the beginning.
[02:11:09] and made it so that anytime solid makes a computation,
[02:11:14] It can listen for non-native atoms.
[02:11:17] atoms that come from an external system.
[02:11:19] Essentially, what if you could just provide a simple config where
[02:11:23] You return a track and dispose.
[02:11:25] lifecycle functions and
[02:11:27] When it tracks, your only responsibility is to set up MobX's tracking
[02:11:34] and make sure that you return
[02:11:36] the result of that function.
[02:11:39] and then
[02:11:40] have this for teardown. Really simple API. So whenever you make a new source,
[02:11:46] create a new reaction.
[02:11:48] Track and dispose.
[02:11:51] And if you could do that, well,
[02:11:54] Now,
[02:11:55] When we get a MobX observable here,
[02:11:57] we can actually read it straight inside the JSX.
[02:12:02] Right.
[02:12:03] because it's actually solids effects and computations are now aware of
[02:12:08] MOBX.
[02:12:09] It doesn't matter what it is. It could be create effect, right? We can console log it.
[02:12:16] - Yeah, two.
[02:12:17] if we wanted to.
[02:12:18] Solid now knows.
[02:12:22] that MobX observables are trackable.
[02:12:27] Thank you.
[02:12:29] Thank you.
[02:12:30] And
[02:12:30] Obviously,
[02:12:32] see here is console logging obviously but you can also use
[02:12:36] Because you're using MobX, you can also use the MobX ones too.  You can do like this.
[02:12:40] Thank you.
[02:12:44] I have to import it from Ovex first, but we can also go auto run.
[02:12:51] There we go. And it's still working. Essentially,
[02:12:56] So...
[02:12:58] You can use, you can basically write your whole app in mob X with the JSX and not even think about it, or use solids primitives and use them interchangeably because basically their atoms can be read by the other's computations.
[02:13:13] Technically, the MobX ones won't be able to read the solid primitives.
[02:13:18] Um,
[02:13:18] but the solid permanence will be able to read all the MOVX ones.
[02:13:25] Thank you.
[02:13:27] It's kind of cool. So if you had an app written in MobX State Tree, now you can
[02:13:39] you could just pull it in and drive a solid app without even using any solid primitives. Technically, this is going to be a little bit less performant because there's this little overhead. But if you're just using MobX's
[02:13:53] primitives here solid subscriptions will be
[02:13:57] will just be the single signal yeah so i mean it's it's not really it's
[02:14:01] It is an overhead cost, but if you don't actually
[02:14:05] read from it. We don't create the subscription arrays, which means that we don't actually
[02:14:12] it's not really as that expensive. So I think this is a good option. We're still, this is still considered experimental because we haven't figured out how this works with concurrent rendering completely. But we'll be experimenting with this. And it's really kind of a cool feature to be able to use any reactive library almost natively and solidly.
[02:14:31] All right.
[02:14:33] Thank you.
[02:14:34] -
[02:14:39] Thank you.
[02:14:43] *chewing*
[02:14:44] Thank you.
[02:14:45] Um,
[02:14:46] Yeah, I think that mostly covers the 1.3 release.
[02:14:51] and mostly covers the streaming topic.
[02:14:54] Thank you.
[02:14:56] That is most of actually what I wanted to cover today.
[02:15:00] I...
[02:15:02] I've been doing a lot of streaming demos and stuff.
[02:15:06] I did want to show off here for a moment
[02:15:11] Um,
[02:15:12] I've showed off enough timelines
[02:15:14] uh obviously um
[02:15:17] But what I wanted to show is that React did update their
[02:15:23] streaming demo, the Next.js streaming demo.
[02:15:26] from a little while back.
[02:15:28] So I think...
[02:15:30] If you haven't seen it, they've actually improved the performance
[02:15:34] considerably
[02:15:36] on.
[02:15:37] on this Vercel
[02:15:39] server component demo.
[02:15:42] See the new placeholder they have?  They got rid of that cascading placeholder,  and it's much nicer now.  The only problem is they seem to have some kind of HTTP caching  going on.  But when I refresh, I don't see the streaming again.
[02:15:54] I'm pretty sure
[02:15:57] If I wait like three or four seconds, it'll show it.  Or if I like a little bit, it'll show it.
[02:16:03] even with everything disabled, they're doing and the
[02:16:07] service worker disabled, they're doing something where the streaming doesn't
[02:16:12] doesn't come through um it's quite possible that
[02:16:16] They're caching the HTML.  And as I said before, when you have streaming like this,
[02:16:23] if you have the data immediately, you don't see the loading state.  So I'm pretty sure that's what's happening here.  But if you look at React, it is
[02:16:31] and what they're sending over the wire just in case
[02:16:35] You're curious as well about what React streaming solution looks like.
[02:16:39] Um,
[02:16:40] Yes.
[02:16:42] I'll spit this out.
[02:16:44] you're going to see a lot of the similar kind of stuff. You're going to see some
[02:16:48] CSS coming in, they're inlining the styles, which is good for performance.
[02:16:52] But
[02:16:53] The thing here is,
[02:16:58] Yeah, where are we?
[02:17:02] -
[02:17:03] At the bottom here, we should see
[02:17:06] We should see this is their script. Here's their data, the script to do the replacement.
[02:17:14] call and this is how they do the element replace, this code snippet here.
[02:17:19] And then
[02:17:25] the, I wanted to say here is the majority of the content here should be coming in
[02:17:31] through, let's get up to the top of the stories here.
[02:17:34] They should have,
[02:17:37] yeah this is interesting i don't see it which is interesting uh there should be
[02:17:44] I'm trying to find the insertion point for
[02:17:46] Yeah, here it is, div hidden.  So everything in here is the part that's streamed in after the fact.  And then this is their place.
[02:17:54] This is--
[02:17:55] This is their placeholder stuff here.
[02:17:58] See?
[02:17:59] template p1 as their placeholder and then div hidden and they they they probably insert this  in very similar to what we're doing in solid marco works the same way too
[02:18:08] There's some interesting stuff going on, but
[02:18:13] Generally speaking, it's a very similar mechanism.
[02:18:17] Let's see if I refresh if we can see the placeholder again. See there's a placeholder, yeah.
[02:18:21] So,
[02:18:22] Yeah.
[02:18:31] .
[02:18:32] Could something similar to the last feature be used to seamlessly use solid components inside view with use primitives?
[02:18:39] Well,
[02:18:40] I don't know if
[02:18:41] The rendering difference is a challenge. We could probably natively use Vue and Solid because the reactivity works like that.
[02:18:52] Um,
[02:18:54] Right.
[02:18:55] Yeah.
[02:18:57] But rendering is different. Vue has a VDOM. So it's kind of like with React, we have the same problem with what's it called? Transclusion. Like inserting children and whatnot. I guess the interesting part is you...
[02:19:12] You could share state easier, like if you had like, but you wouldn't have context to use it. So but you could probably use views.
[02:19:22] reactivity pretty natively to have solid components like run off the same global store. So I mean, that's kind of cool.
[02:19:30] How do you handle scope with streaming? I wonder about page refresh. Streaming is just pulling in the HTML response. So I imagine if you're interacting with the page a bit, it's
[02:19:44] Like if you're adding stuff to the middle of the page,  it's going to jump much like client-side rendering  when you add to the page.  Hopefully you create your placeholders to roughly,
[02:19:55] be the same size of your content.  But it behaves a lot like client side rendering in the sense  that the hidden content is not going to affect too much  because it's removed out of the flow.  But any content that you then insert
[02:20:06] basically very like client-side rendering is kind of jumping into into view
[02:20:13] Back and forward navigation, well, it depends on how you're handling it. If the browser is handling it,
[02:20:20] generally speaking, like all the examples I've shown, same with React, are single page apps. So
[02:20:28] like,
[02:20:31] if you move forward and back after that fact you're doing everything in the client like it  turns into a single page app.
[02:20:36] Obviously, if it's the first page you're gonna get back,  you're gonna leave the site.  But generally speaking, if you go into the site,  click onto another tab, and then click back,  you're not streaming again.  Like everything's client-side.  The streaming is literally just the serving  of the initial HTML file.
[02:20:51] So, um,
[02:20:53] It's not unlike the experience, as I said, of client-side rendering for the way that it pops in.  And then it goes kind of full client-side after that point.
[02:21:04] generally. I mean, it depends on the solution. Marco doesn't.
[02:21:07] Yes.
[02:21:08] right marco's multi-page app so when it streams like you you stream again but i mean the cool  thing as i mentioned before streaming is if the page is cached um it does have the ability to  like play pretty quickly so you don't even see the loading states
[02:21:30] But basically all HTML streamed in a sense,  it's the out of order stuff that messes things up  when you do the insertions.  So it has all the same characteristics of inserting HTML  when you insert with JavaScript, 'cause it is JavaScript.
[02:21:42] essentially.
[02:21:44] Yeah, so as I said, big ups on them improving this demo. I did some page insights and stuff, and the performance here is much, much, much better than where we were before, right, for this one.
[02:22:01] Thank you.
[02:22:02] Thank you.
[02:22:06] When I covered this two weeks ago, they were hydrating in about 1.8 seconds on mobile.
[02:22:11] And
[02:22:14] OK, well, I mean, the time to interactive is still kind of slow,  but way better first content full paint, way better large paint.  And yeah.
[02:22:24] Thank you.
[02:22:25] I mean, I guess it's still React, but...
[02:22:29] this is where the benefit comes in streaming, getting the content sooner.
[02:22:39] Thank you.
[02:22:39] Sure, while I'm answering questions. What's the EDMAC way to track the previous value of a signal in solid?
[02:22:46] Thank you.
[02:22:48] Thank you.
[02:22:49] That's a good question. It depends on where you want to use it. Generally speaking,
[02:22:55] Solid's mostly concerned with synchronization. So getting the previous value requires a little bit of extra work. Things like memos and effects have this, have the ability to
[02:23:06] Um.
[02:23:08] how should i put it they have the ability to pass the previous calculation value back in like they're  all reducing but generally speaking previous values of signals are tricky like you'd have to  store them somewhere or put them in a different signal essentially you don't have to worry about  signals like redrawing the page like it's not like react where like oh if it's stateful then you're  going to redraw that component signals can work in isolation it's only the things that  subscribe to them that matter but for wiring the past you kind of have to
[02:23:36] do the specific wiring.
[02:23:40] Right.
[02:23:41] Thank you.
[02:23:42] Yeah, I mean, there aren't really refs in solid.  Like, they're just, refs in solid are just a variable.  So you can, because the thing doesn't re-render,  like, you don't have to store it in a special object.  You can literally just assign it to a value, and that's fine.  Like, we don't have use ref.
[02:23:58] um the components don't rerun so it's just
[02:24:02] Let.
[02:24:03] whatever so you could always get the previous value store the previous value like that
[02:24:09] Things like concurrent rendering could cause some tearing,  theoretically.
[02:24:17] - Thank you.
[02:24:18] But yeah, I'd have to understand the use case.
[02:24:22] Thank you.
[02:24:23] Thank you.
[02:24:24] All right.
[02:24:26] I think that's good.
[02:24:30] Thank you.
[02:24:31] Thank you.
[02:24:31] Thank you.
[02:24:35] Thank you.
[02:24:35] - Oh, I'd be interested in reading that.  One of the things is like, as I said,  we've been using streaming a lot in Marco with MPAs,  but I think part of our saving grace is because we use MPAs,  you know, like full page refresh and stuff like you,
[02:24:49] maybe the state of things...
[02:24:52] doesn't get as convoluted be be be interested in that
[02:24:56] But most of the, there's a threat right now going on.  And I think, let me see here.
[02:25:03] go to github some discussion that's going on that i thought was interesting  maybe i can't yeah maybe i'm not going to find it right now but there is like a
[02:25:13] There's a whole thread about...
[02:25:17] Yeah, I'm not going to find it right now.
[02:25:20] There's basically like a whole thread about us kind of deciding, kind of talking about
[02:25:25] different error cases and different potential ways of handling them.
[02:25:33] Thank you.
[02:25:36] Yeah, it's probably worth sharing, definitely.
[02:25:41] Thank you.
[02:25:44] Thank you.
[02:25:45] Thank you.
[02:25:47] Yeah, the comments section definitely doesn't. But do links work in chat or do they just get blocked?
[02:25:54] Hmm. Anyway, um,
[02:26:00] i can always drop it on our discord if possible but yeah i'd definitely be interested i think the thing is
[02:26:05] Streaming opens up a different set of questions, because there's a whole bunch of different constraints. And as Sunil was saying in terms of different
[02:26:17] Um.
[02:26:19] like,
[02:26:21] libraries have been considering because it's not it's not just the frameworks like I was working at GraphQL for Marco to support streaming and the problem was they assume that all the hydrated data was there upfront.
[02:26:32] which made things really difficult because they were like, like they assume that gather all the hydrated data at the end of rendering async like, you know, everything. And then it's there before you start any hydrating. And like, that's not how streaming works. I think kind of create an incremental cache and stream the data as it completed and then restore the data for the cache as it as it finished up on the client because like,
[02:26:56] it just tools like that just aren't built that way today um reacts working with them but i think that's like
[02:27:04] Maybe that's why I was a little less concerned with some of the third-party libraries, just because it's not just the changes that we do with the framework in terms of supporting them.  It's just like they actually have to change to address this.  This streaming stuff is potentially a bigger change than even all the concurrent stuff people were worried about.  Obviously, we ease into it and take our time, but essentially, maybe this is largely why it keeps on becoming that forgotten art, so to speak.
[02:27:34] there are you have to approach things a little differently when you know everything's kind of  concurrent non-blocking um so like libraries will have to change with it
[02:27:46] Thank you.
[02:27:47] Thank you.
[02:27:48] Thank you.
[02:27:53] Anyway, yeah, this is good for today.
[02:27:58] Unless we're going to try and drop that one article over chat while it's still open, I'm going to call the stream and...
[02:28:07] And
[02:28:09] We'll see. I probably won't do one next week. It's Christmas Eve.  And then it's New Year's Eve. So it might be a couple of weeks.  I'll see if I can stream midweek, maybe a different day.  So keep an eye out for it. But I think we've covered streaming as far as we're going to cover it today.  Obviously, a lot of looking at some of the performance stuff.  But I think it's really cool. And I think there's a lot of potential here.
[02:28:39] take a little time for it to go mainstream, but
[02:28:43] Who knows? With React leading the way, I think there's a real potential here.
[02:28:50] All right, perfect. You all have a great weekend.
[02:28:54] Until next time, see ya.
[02:28:57] Thank you.