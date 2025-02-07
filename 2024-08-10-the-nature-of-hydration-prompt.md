---
showLink: "https://www.youtube.com/watch?v=oOhfZtUm-pE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Nature of Hydration"
description: ""
publishDate: "2024-08-10"
coverImage: "https://i.ytimg.com/vi/oOhfZtUm-pE/maxresdefault.jpg"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 10-15 minutes long.
  - Write a two-paragraph description for each chapter (75+ words).
  - Ensure chapters cover the entire content (note the last timestamp).
  - Let descriptions flow naturally from the content, avoiding formulaic templates.

Format the output like so:

    ## Episode Description

    One sentence description of the transcript that encapsulates the content contained in the file but does not exceed roughly 180 characters (or approximately 30 words).

    ## Episode Summary

    A concise summary of a chapter's content, typically ranging from 600 to 1200 characters or approximately 100 to 200 words. It begins by introducing the main topic or theme of the chapter, providing context for the reader. The summary then outlines key points or arguments presented in the chapter, touching on major concepts, theories, or findings discussed. It may briefly mention methodologies used or data analyzed, if applicable. The paragraph also highlights any significant conclusions or implications drawn from the chapter's content. Throughout, it maintains a balance between providing enough detail to give readers a clear understanding of the chapter's scope and keeping the information general enough to apply to various subjects. This summary style efficiently conveys the essence of the chapter's content, allowing readers to quickly grasp its main ideas and decide if they want to dig deeper into the full text.

    ## Chapters

    ### 00:00 - Introduction and Overview
      
    A comprehensive description of the content, serving as an overview for readers. It begins by introducing the main themes and concepts that will be explored throughout the chapter. The author outlines several key points, each of which is examined in detail. These points are discussed in terms of their significance and potential impact on various aspects of the subject matter. The text then explores how these core ideas are applied in practical contexts, highlighting their relevance to current issues and challenges. Throughout the chapter, connections are drawn between different concepts, demonstrating their interrelationships and broader implications within the field of study.


## Transcript

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. All right
[00:04:05] , everyone. Welcome to my stream today. How are you all doing? Sorry for the little delay. I was getting a few windows organized, and actually, I hadn't
[00:04:24]  poured my drink yet. Sorry, one second. Sorry for the little delay. Sorry for the little delay. Sorry for the little delay. Sorry for the little delay.
[00:04:26]  Sorry for the little delay. Sorry for the little delay. Sorry for the little delay. Sorry for the little delay. One second. All right. How are you all doing
[00:04:32] ? How are you all doing? How are you all doing? How are you all doing? How are you all doing? How are you all doing? How are you
[00:04:36]  all doing? How are you all doing? How are you all doing? I have to put my straw in upside down. Looks like my wife is signed into my own
[00:04:49]  account. Yeah, no, this is a fake background of my own office. Oh, nice. Good. People are starting to join in now. Have you looked at
[00:05:09]  things like inertia? Oh, it's not super up to me, but pretty well liked inside its community. Yeah, I briefly looked at it. Um, what was
[00:05:19]  his name? Uh, Kelvin, um, did some, uh, spaces with him on Twitter or X or whatever you want to call it. And he was into inertia and
[00:05:31]  we were talking about implementing a solid inertia adapter. Um, yeah, I don't know. I just never got around to doing that. It was like on my list of
[00:05:42]  things. He reminds me periodically about going there. Um, it's, I know it's gotten a lot better initially. I would kind of like, when I first
[00:05:51]  looked at it, I'm like, this is what Astro would look like if Astro wasn't good. But I'm, I've seen that inertia has improved a
[00:06:00]  lot. See, one of the things is like when islands, you know, as a concept of like having a part of your page for client, like not islands,
[00:06:13]  like as we have officially, you know, islands TM, but the idea of like having these client sections independent on a server render page has existed from the dawn of the internet
[00:06:22] . Pretty much, you know, even when you think of things like, you know, uh, like applets and, you know, it's flash and all that stuff
[00:06:31] . So like picturing you, you surrender something and then have these nice like windows of client components stuff makes a lot of sense. But the whole reason that Astro
[00:06:40]  or all this stuff is actually interesting is because the server renders the JavaScript as well. And this is something that I believe that they've been getting working in inertia recently,
[00:06:50]  but classically my understanding is inertia didn't, uh, client rented the JavaScript. So it it's like a nice framework for being able to like get these build processes
[00:07:01]  working and playing all together. But it also kind of just like miss the whole like benefit, so to speak classically. Like if, if, if I was just gonna
[00:07:11] , you know, make a little section of, you know, like leave a space for my JavaScript rendered components, no server thing. Like, you know, it's
[00:07:20]  kind of like my HTMX argument. It's like, like I, I didn't really have to try too hard. I guess the problem is a lot of people
[00:07:26]  have a hard time building JavaScript libraries. So like, oh, how do I handle this web pack? How do I handle all this stuff? My understanding with tools like inertia
[00:07:33]  is a lot easier, but it's also like in that realm of like, doesn't solve anything within the spectrum that I'm looking at. But as I said, I
[00:07:41]  hear that's changing. Yeah. It does SSR permitting a node process that completely changes things, you know, but classically I understand that like, this is
[00:07:57]  a feature that's probably within the last 12 months, last year. I looked at inertia first, like a couple of years ago. Anyways, how's everyone doing?
[00:08:12]  We've got some people showing up. Oh, hey, Brandon. I missed you right at the beginning. Yeah. Hydration. Oh, man. I, I honestly
[00:08:21]  didn't know what to do for a cover today. Cause like this has been happening recently. There's like a whole bunch of topics. I have a whole bunch of
[00:08:27]  topics. I have a whole list that I, that I, that I want to, you know, touch on today and hydration kind of weaves through them. But yeah
[00:08:34] , we'll just see how we have time. Um, yeah, anyway, uh, let me, sorry. I'm like looking at myself in OBS right now
[00:08:47] . Get that out of my way. Okay. I was going crisp in a little while. Uh, yeah, let's break down hydration. I don't know.
[00:08:58]  It, it, it's a, it's, it's a, it's a funny topic because. There's no need to pick a single topic that struck your
[00:09:06]  mind. Yeah. But you need a single topic for the stream or stream cover. Like you need to be like, I dunno, like the other options not have stream covers
[00:09:14] , but then like, it's even, I can say it's already not obvious, but it's even more apparent that like I should be getting my videos chopped into smaller
[00:09:23]  pieces. The problem is then I have to actually concentrate this into like segments. Like I love, you know, like I try to do this for the, a bit
[00:09:31]  with this week in JavaScript, but I love when Theo is just like, okay, you know, it's, it's kind of like to use an old reference, kind
[00:09:38]  of like Wayne's world, like game on, you know, like he's like doing his thing, chatting with you guys in chat. And then something he's like screen
[00:09:44]  jacked on and he's like, okay, I'm ready. I'm in business mode. And then he's like, like you tell his whole composure completely changes
[00:09:51] . And then he delivers his video and then he's back again and he keeps it tight. And then he reminds the editor when he like forgets stuffed ads in it
[00:10:00] . I would have a, such a hard time with that. Cause I like, I like answering people's questions. I like going down the rabbit hole. So it's
[00:10:07]  like, it's funny. Cause I have had some people recently offering to do the editing and I should reach out and see if we can get that going. But like,
[00:10:15]  man, I think my content would be the hardest content to edit. Like obviously not everyone focuses their stuff down like Theo does, but like, I mean, like.
[00:10:28]  Yeah. You, you'd have to have an incredible understanding of the relevance of the topic to be able to weave the conversation. So I know in such a way that it
[00:10:36] 's like consistent and put it together. Like I've watched tons of really nice edited, like speed running videos. You could tell the guy's been, was running for
[00:10:43]  like 10 days, 10 hours that day. And then you get out like 30 minute video and you're like, yeah, but like careful selection of conversations, putting it all
[00:10:53]  together, making a narrative. That's amazing. Picture just trying to do that with just. Yeah, I don't know. Maybe someone's up to the task.
[00:11:01]  Anyways. I am not nearly as prepared as that. So let's, let's, let's, let's kind of flip this around a bit and probably get ourselves started
[00:11:15]  because I got to decide, like, are we Scala drawing stuff? Are we? How do we approach this topic in the first place? Cause I'm looking at my
[00:11:24] , my list here and. Okay. High level. Just kind of like put the concept in people's heads. That we're going to be talking about in many different
[00:11:36]  ways today is. Hydration classically was considered, you know, something classically can. It is, it is this. Running the JavaScript code necessary to make the page
[00:11:52]  interactive after it has run on the server. And I think, uh, Michael Rawlings once said something along the lines of like, it's like basically getting the page
[00:12:05]  into the same state. It would be as if it had been client rendered something along, along those lines. things. But a lot of, of this makes assumptions about
[00:12:16]  how we've classically done hydration, right? Like in the earliest days of JavaScript frameworks, when hydration first came out. Well, we didn't do a lot of advanced
[00:12:29]  stuff on the way we delivered our JavaScript or delivered our HTML. What I mean by that is we didn't do a ton of code splitting. And we also like,
[00:12:38]  I'm talking like 2015 ish. And we also like basically. Fetched all our data, rendered all our HTML on the server and sent it across. So
[00:12:48]  these days I call that async rendering, like wait to send, wait to hydrate. So like, it was very visible. The difference between, um, like being
[00:13:03]  able to like get a page quickly rendered in the client and like, wait for it longer. See all the content, then spend that time when the giant bundle comes across
[00:13:13] , not being able to interact with it and then. Have it suddenly turn on at some moment and then be working at it kind of invisibly to the end user. We
[00:13:22] 've come a long way from there. Yeah. Yeah, I don't know. Today is not coconut water. Today is suja. I don't know if you
[00:13:36]  guys have seen that. It's like, it's like cayenne and ginger and a bunch of stuff. Hmm. Maybe I put this on camera so people can see it
[00:13:45] . Like this one doesn't have cayenne actually. It's the lemon love that has the cayenne. This one's not spicy. Oh no, no. Pa
[00:13:56] ired with stevia. I don't know. Is that like fake sugar and cayenne? So there you go. Nevermind. Anyway. See what you did there.
[00:14:10]  Hijacked my thought train. Um, in any case, hydration these days is not like that, right? It's not simply like wait for it all to come.
[00:14:20]  Um, the, the content of the page comes in pieces. We code split our JavaScript. Some of it's lazy loaded. We code split our HTML. Some of it
[00:14:31]  is streamed at different points as it's available, right? Some of it's static pre-rendered. Like the whole, we have a whole spectrum from essentially.
[00:14:42]  Static pre-rendered dynamic on request. And, um, even like stuff lazily dynamically on the server, which is the stream stuff all the way to laz
[00:14:59] ily dynamic on the client, which is, um, like, um, like the server islands. And you could argue things like, um, single page apps, like
[00:15:10] , like the, the whole spectrum now of when things come in both for the markup and for the JavaScript is. It's quite spread. It's quite spread.
[00:15:21]  And more interestingly, what it means to be interactive is, is something that, you know, what, what are we even considering interactive anymore? Right. Uh, Ryan
[00:15:33]  Florence and the remix guys are very, you know, strong in their stance that, you know, if you use web fundamentals, like anchors and forms, then it's
[00:15:43]  interactive. The second the HTML shows up. Right. Right. Right. But is that, you know, actual interactivity? Like the fact that it works without JavaScript
[00:15:54]  is great, but your experience is going to be. It's going to be a lot worse than if the JavaScript was present. You, you know, things that could
[00:16:06]  be handled smoother things, the optimistic updates, things that could be handled in the client now are being forced back to the server. So it's an, is it interactive?
[00:16:17]  Yes. It passes that test. You can click on it, but what, but is it the interactivity you want? Um, you know, so like on the
[00:16:29]  other side of the spectrum, you know, people talk about, um, stuff like resume ability, right? Where it's like this idea that, okay, we don't
[00:16:39]  have to run any JavaScript until you interact with it. And I mean, obviously that, that, that has to be a huge benefit, but like, is that still hydration
[00:16:55] ? Like when you're, when you're on that side of the spectrum, when you're like, some people like to claim it's not, but there are rules
[00:17:02]  that have to apply still. You can break. Resume ability. Just like you can break hydration in terms of like content on the server and the client, not matching.
[00:17:11]  That'll break it just as well. So like, like there's a lot of gray areas. And, and I, I mean, the classic example that people use
[00:17:21]  with quick, even though this is not necessarily quick preload stuff anyways, but like picture, if you can click something right away and we don't lose that interaction, but
[00:17:31]  then you have to wait for the code to load. So it actually takes longer overall for the result of that action to happen. Then say if someone had eagerly hydrated
[00:17:41]  it and. And it could do the thing right away. So like. I'm not going to say that perhaps that obviously, like, I think something on the res
[00:17:53] umable or lazy side of the spectrum is obviously definitely better. I'm just kind of pointing out that within this range, what it even means to be interactive. Like
[00:18:02] , when are we done? When is it hydration is kind of all over the map. No, I skew versioning issue is sort of related. I mean,
[00:18:28]  we could talk about skew. We can talk about it. We can let let's just put that on the list somewhere. I I'm going to talk about it sooner
[00:18:35]  than later than if we want to talk about it. I'm just going to put it on my list that I have off screen here. Because the challenge, I mean,
[00:18:43]  I almost want to talk about it now, but I just want to finish my current thought. I'm going to talk about it. I'm going to talk about it
[00:18:49] . I'm going to talk about it. When we lazily load a page using lazy and suspense, is that a form of hydration? Well, I mean, I guess
[00:18:59]  it depends when it happens, right? This is the whole thing. What is hydration? What is client side rendering? Once are the lines blurring? I got an
[00:19:09]  issue. Let me open up my GitHub. And I'll show you show you this issue. I'm just going to share my screen. Okay, sweet. And I
[00:19:36]  want to talk about this more specifically a bit further down, but there is there is a question here. Where was it? Data is being refetched on the client
[00:19:53]  when the user interacts during streaming SSR. So they, they showed this video here. Okay. Right. And see if you see it. So they have a page.
[00:20:08]  That's streaming. Now. They're only mocking things. So I think that's why this break, but you see it loads and it streams in the content. Then
[00:20:19]  they click the count a couple of times. And because of the way they're mocking it, the data doesn't come in. What should happen is the data should still come
[00:20:28]  in, but they mentioned that. Oh, no, there, there came in. I don't know about the, the empty, the empty bit. The empty bit
[00:20:36]  is actually weird. It should have kept the loading. But there, the, this, this is part of this is probably a bug that I think I just fixed a couple
[00:20:43]  of days ago. But the, the point is that it fetched the data again when they click the count. And they were surprised by this and the reason,
[00:21:00]  although as I said, there's a bug in solid here that I just fixed that I'm proud to look into it here. The reason is simple. So if you
[00:21:10]  update the state, how can you possibly know that you can hydrate some future section that you haven't even rendered yet properly? Right? Like there's the, I talked
[00:21:32]  about this during the Astro stream and we'll talk about, not the last one I did, but the, the one I did for Astro three with Matthew Phillips about
[00:21:39]  a year ago. And I talked about this like thing around, you know, lazy hydration. And I, and I, I did some fixes or some small updates and
[00:21:46]  solid that I actually want to test today. See how it is in Astro, but the, we, we have this kind of problem that if you don't know.
[00:21:54]  What this blank section of state depends on in this case, count and star Wars movies have nothing to do with each other. But if you don't know that there is
[00:22:06]  potential that if you update the state up here, let's say count impacts the number of results you show for star Wars movies. If you update the state, there is
[00:22:20]  no way until you run the section that, you know, that you could possibly hydrate it properly. If you update state outside of the hydrating boundary, unless there
[00:22:34]  was some way to communicate that this won't be impacted. Um, the client has to re-render because the chance of hydration mismatch is real. There's a
[00:22:48]  difference between a hydration mismatch that happens because, um, how should I put it? Like someone's using the browser extension or someone coded their app incorrectly where they're intentionally
[00:23:02]  like checking if window object is there. And then they render two different things or use local storage. And they basically render something different on the server and the client, but it
[00:23:10] 's a whole other problem. If hydration errors can occur when people just do interact with your page differently. Hydration errors should be mostly deterministic. Like you should be
[00:23:23]  able to know that, like, look, look at the code. You made a hydration error, but this kind of behavior is, is not acceptable. Now to be
[00:23:34]  fair, if you built your app and solid start, you're not going to have this problem probably because you're going to hoist your data fetching to the top level
[00:23:48] . So as long as the data fetching happens, like the problem here with this stream is the data fetching happens in the stream and it doesn't even get to the
[00:23:57]  code yet. Like the server is like the way the setup, if the data fetching is hoisted, then when it finishes, it knows that, yes. Even
[00:24:08]  if you have to click it like 10 times, it knows that it can't necessarily keep the streamed in content, but it knows that it doesn't have to refetch
[00:24:15]  the data because, um, it's, it can't be impacted by this changing. But if the data fetching isn't hoisted, you don't use cache
[00:24:27]  function, you're not doing that. And you're fetching underneath the suspense boundary underneath the stream. We don't know if that data fetching could depend on what if
[00:24:37]  count is the ID of the movie that you want to fetch. Suddenly. Like you, you only have a couple options in this kind of case. If, if someone
[00:24:48]  like, let's just watch the video again and think about it. Someone comes here. Sorry, let's go the one when they click. They're loading the movies.
[00:24:56]  And then they, sorry, the later one, they load the movies and then they click the count here at this point in the of the thing. And the count is
[00:25:05]  actually the idea of the Star Wars movies that that are loading in now. You have two options, right? Cause the state has updated at this point. Something else like the
[00:25:17] , the count is three. Like you're displaying the count. Like you, you can't keep the results from the server. The server was showing, was using zero
[00:25:31] . Hopefully you don't have to refetch cause your data fetching is hoisted, but you can't keep these results because if the server draws ID one and the client
[00:25:46]  tries to hydrate with ID three, then. Mismatch. And you could be like, but what, what if you just wait to hydrate until everything's
[00:25:55]  done? Well, then the whole page is in inactive until the last piece gets touched. Right? Pick. So you're, you're sitting there and clicking count once
[00:26:07] , twice. Wait, why is this not working? Don't get me wrong. Solid has event replaying, which means that if you do get to the hydrating
[00:26:17]  parts, you know, before they finish, you know, most often from like a lazy component kind of scenario, it'll handle it. But there's a huge difference
[00:26:28]  between handling a lazy component and like waiting for the data stream to come in and you getting no responsiveness. We should be able to hydrate or make parts of the page
[00:26:39] , not just capable of receiving input, like, but also showing the results of that. That's what I was talking about a bit earlier, like the difference between being
[00:26:50]  able to receive input and actually show the results of that, because like is, is, is something truly interactive when you know that your count isn't going to be lost when
[00:27:01]  you click on it? Or is it interactive when this actually updates to three? I hope you guys are following along so far. In general, this is part of
[00:27:36]  the reason why hydration is such a messy topic, because a lot of times frameworks concerned with what I told you about, will do everything in possible to force hydration errors into
[00:27:51]  a deterministic thing. Most of the time with hydration errors, most of them get reported. I can literally see in the code example, why it doesn't work. Now
[00:28:01]  it's hard to communicate this to the developer from error standpoint, because even you, you could usually see the mistakes in the written code, not in the outputted HTML.
[00:28:14]  The outputted HTML just doesn't match. So then you're like, you know, I react recently had a tool where they show the, the diff of the output
[00:28:24] ted HTML. Solid's case. It's actually harder because we don't actually have the input. Do you know what I mean? Like react, they go, okay,
[00:28:30]  we built a tree. Here's the existing ones. Here's where they don't match. Here's where they don't match in solid. We actually hijacked the
[00:28:37]  existing tree and try and build it from only the pieces that are already there. That's how we hydrate. So I can't actually show you what it should look
[00:28:47]  like because I don't have it. So again, slight difference between a virtual DOM and non virtual DOM approach is that we don't build something to know that it doesn't
[00:29:00]  work. It's as we're like doing the action that we can tell. So that does make hydration errors harder to communicate to the developer. So they get like a
[00:29:09]  cryptic message that's saying like some ID doesn't match. But usually on the code, like there is an issue reported another issue reported. You know, let me see
[00:29:25] . Yeah, here. Was it this one? No. No, not this one. This one. You see all these hydration errors. I was showing this. You
[00:29:40]  can tell if you use solid before. I think you can tell from the code why this causes a hydration error. First of all, what's going on here? Well
[00:29:55] , we're destructuring props. There's a reason we don't destructure props. But essentially, we destructure the props. So we've written, we render
[00:30:04]  the children here, and then we return null. So we don't actually insert them. So we build a bunch of stuff on the server. Who knows what those children is
[00:30:13] , it could be a freaking giant part of the tree that we never going to render. And then we go to the client, and we go and say, hydrate
[00:30:21]  this. And it goes, okay, let's build all this stuff. And then it goes, oh, I can't find that in the DOM tree. Well, because
[00:30:29]  it's not there. And you might be like, well, we could just allow it to build it on both sides. And then like, you know, in the
[00:30:37]  client, if it, if it can't find it, just create it, right? We could do that. But like, we would never know the difference between someone
[00:30:48]  doing that, like building out a bunch of children that they literally should never do because they're never going to insert them. And someone doing some other kind of weird hydration error
[00:30:59]  where they're like, something's kind of like mismatched because they, you know, grab something out of local storage. Like basically we lose the ability to actually error
[00:31:11]  on this because really the problem is here. They, why render stuff you shouldn't, you don't need to render. And obviously this is like a, how much of
[00:31:20]  solid, you know, and it turned out that in the end. Indeed, removing the destructuring solves the issue. So it was like a simple fix, but
[00:31:38]  I think this kind of gets into the heart of why people are, you know, have a challenge kind of thinking about the hydration issue. Because I don't mind issues like
[00:31:48]  this because they're determined, like, as I said, from the code, deterministically, I can see the problem right away. But if the behavior is something that
[00:31:58]  can change dynamic, dynamic time, that is a whole other category. And that's been my fear. I'm a big Astro fan. Oh, hey, hey fuzzy
[00:32:09] . But Astro gives people just enough weapons to create this undeterministic hydration behavior on their own and not realize it. So I've been, as a framework
[00:32:26]  author, like kind of concerned because, I mean, I get issues reported and I'd be like, huh, how could this ever work? Why do you think this can
[00:32:37]  work? It's like, oh, it's because Astro has a page view page transition API or, you know, it has a client view directive that says only hyd
[00:32:47] rate when it comes into view. And it's like, yeah, those, those are terrible ideas in a certain sense, right? Like, like, if you expect
[00:32:56]  to be able to hydrate lazily. And the answer is, unless you can somehow figure out exactly what state updates what state in code that you have never run in the
[00:33:13]  browser. The second some state is updated inside your app on the client, you can no longer hydrate. That's the crux of it. You have to
[00:33:29]  resort now to client, client rendering. It's a reason that react server components on navigation never render client components again on the server. It's the reason that, you know
[00:33:45] , most frameworks eagerly hydrate their stuff, even their islands. Like the thing is, if you're, if you don't share any state, if you,
[00:33:58]  they don't, if things are purely islands, like actual islands of interactivity, then yeah, you can bring the code in independently as much as you want. But
[00:34:09]  as soon as there's reactive state dependencies, persisted shared state, and someone updates that state. Well, you're going to have a potential problem, unless you can know
[00:34:22]  all the dependencies up front without running them. And the reason I'm, I'm focusing on this a bit is because there is actually a solution that knows all the dependencies
[00:34:31]  up front without running them. Right. Resumable solutions, they are the only ones that can take a non holistic view of it. Like they can take like a
[00:34:47] , they can go, okay, no, I'm not going to stop my hydration. To be fair, resumable solutions don't hydrate in the same way.
[00:34:53]  They can just go like, it's just this one thing. So, in a sense, resumable solutions that of that nature, have a slightly leg up in
[00:35:12]  hydration in that they prevent the indeterminate hydration issue, they still have all the fixed hydration issues, right? Like if someone tries to render something different from the server
[00:35:27]  and the client, like they have all that, but they fix the inter determinant one. And I decided this week as working through bug fixes that I too want to fix the
[00:35:35]  indeterminate one. I, you can still do it without presumability. You just have to very simply be like, when hydration is done, hydration is done. It
[00:35:44] 's the, you know, and that just takes it out of, out of our concern. So I'm hoping a little bit later today, we're going to play
[00:35:56]  around with a demo with Astro and actually show that. Fuse. I thought components couldn't execute an update state before, before hydration is done. So, well
[00:36:09] , it, which components? See, the thing is, I'm talking about how resumability is like the solution to being a little bit more granular here. But
[00:36:27]  the truth of the matter is most, not most, but like react solid, maybe soon angular. I was listening to the, some influences they're getting from whiz.
[00:36:34]  Um, but definitely react and solid. Obviously anything resumable, like quick whiz. We are interactive before the page has fully hydrated. In fact, we're
[00:36:51]  interactive, not by the interactivity I was saying at the beginning, but we, we can capture interactivity before we even load our frameworks on the page. We,
[00:37:01]  we, we use a mechanism of, uh, of event replaying capture. So what happens is when you load the page, if the JavaScript hasn't loaded, um,
[00:37:14]  we can click a button like 10 times. And then when our framework hydrates, you'll suddenly see the button jump to 10. We have some form of interactive capturing
[00:37:25]  even before we can do anything with it. But what I'm getting at is if you, it's fine that it's fine. If you're in a, in a
[00:37:38]  zone where like you hydrate that section of the page and you make sure you're hydrated in order or in a way that you don't run the events until you run the
[00:37:46]  code that could hydrate it. So like if you, if someone has a button and like, we make sure you hydrate the whole synchronous chunk that you got.
[00:37:57]  So like, if you have a stream, I mean, stream isn't a good example because the content doesn't get there until it gets there. But like, yeah,
[00:38:05]  this is the problem I had with react selective hydration and trying to explain it to people. But like if it essentially it, you don't have to, it, uh
[00:38:19] , how do I want to phrase this? It's you can make sure that the events run in the right order. Like if someone goes click button one and clicks button two
[00:38:27]  and then clicks, um, button one, you don't want to run the last button one click event until after button two is run. And if button two is in
[00:38:37]  some lazy loaded code that loads after the first section, you can actually, you know, do one. And then as soon as two comes and go to one again.
[00:38:48]  Um, my, my point is like, because of lazy loading of code, it doesn't make, it's quite possible that you can interact with a part of the page
[00:39:01]  that is already hydrated and have other parts of the page that haven't hydrated yet. And if they, if, unless you're in, unless you're going to just
[00:39:10]  defer all hydration until everything is done, you're going to have places where state is updated before things can hydrate it. Like you don't either you show the three on
[00:39:21]  the counter or you don't, you know what I mean? Like you don't, there's, there's no real half measures here. Um, so like,
[00:39:37]  I guess what I'm trying to say is, I mean, maybe people don't even realize this fact, but like, if there, if you server render a page,
[00:39:49]  okay. Like, and you see the page and it's whole, let's say like forgetting even about streaming. You just have a whole page that server rendered. Right
[00:39:58] . And, but different sections, different nested routes. Um, actually, you know what? Maybe I have a stack blitz for this. Um, different nested
[00:40:15]  routes. Um, it's been a while. Uh, it's been a while. Never easy. Sorry. Oh, weird. I'm only sharing the one tab
[00:40:37] . It looks like. Sorry. One second. So the reason I was saying is never easy is that. Um, there, there, I'm, you know,
[00:40:51]  two factor authentication. I haven't signed into stack blitz on this computer for a little bit. It's like, do I have my phone in my pocket or not
[00:41:03] ? Give me two seconds. GitHub. Uh, GitHub in this case. Uh. All right. Oh, did I not? Oh, never mind. half the
[00:41:26]  time. I'm not even signed in. just. To stack blitz. To stack blitz. So like when I play with these things, I'll start with
[00:41:37]  nested route config forked. Yeah, this isn't even it. I was, I was playing around, not signed in. Never mind. Sorry about that.
[00:41:44]  So what I'm, what I'm getting at is like. So I don't have the example right in front of me right now. Um. What I'm getting at
[00:41:52]  is that like. Maybe I don't know if I should Excalib draw it. I just wish. OK, actually not like we have a real example. We've
[00:42:05] . Hacker news is a perfect example, right? I'm just going to. Netlify. Yeah, right? Not not. Sorry. PMPM dev
[00:42:16] , right? He's going to open a hacker news example. We always have these in front of us and. We get this streamed in, but I can. I
[00:42:26] 'm going to change this right now. Not the streaming. I'm going to go into the source code here and then I'm going to go. go. In and
[00:42:38]  then. For our main stories page. Where is it? The this one. I'm just going to say like this async thing. Um. Let's just defer that
[00:42:51]  first stream. True. OK, now. That we deferred the stream. When we refresh, you're like, oh, look. No placeholder, right? So
[00:42:59]  the code looks like. It waits till it's all there. Right? Um. So even when. I'm refreshing this page. It's all this. This all
[00:43:09]  the same page. It's no longer streaming it in. It just waits for it to show up. And it does that. But even if I have the whole point of
[00:43:16]  data here. this is nested routing. There's a nav section and then there's a page section. So there's two chunks of JavaScript. It is quite
[00:43:23]  possible that you have the main chunk and you don't have this chunk yet. Even if you can see the full HTML in front of you, even if there's no visible
[00:43:34]  suspense boundary, there are two separate chunks of JavaScript because when I'm on a different page like this page, I still have this nav bar. I don't want to
[00:43:43]  send the JavaScript for the other page. So there needs to be a separate chunk of JavaScript. And as if that's the case, these will hydrate at different times.
[00:43:59]  The question is, unless you wait for everything. Now, in the case of this, you could wait for everything because it all comes at the same time. Right?
[00:44:10]  But in other cases, let's remove the defer stream now. It doesn't come in at the same time. We get the header much sooner now because we're streaming the
[00:44:27]  rest of the content in. So like code splitting affecting the time of hydration happens potentially even when the HTML happens at the same time because sometimes it has a possibility of not
[00:44:42]  happening at the same time. Just like waiting till the end to hydrate is not a good plan if you have the potential of streaming. Yes. Partial loading of
[00:44:59]  codes. So this is when I'm talking about the modern nature of hydration. We have HTML flying in at different times. We have JavaScript flying in at different times. And
[00:45:11]  we're supposed to just coordinate this in a way that's just, you know, just works, right? The developer can make the choice, right? They can choose
[00:45:21]  whether to load stuff together or whether to stream stuff in and wait for it. I actually thought this was a little bit funny. I don't know if you guys saw saw
[00:45:28]  this. I wrote, I posted something on Twitter and yeah, yeah, this, this thing, right? I post something on Twitter and someone was like, no, P
[00:45:40] PR is like the best thing ever because it solves this problem. And they're showing me how in their old page, you know, see the new one, there's
[00:45:54]  no loading spinners, but in the old one there was loading splinters. And I think we can see this for ourselves. I kind of remember the, the original
[00:46:01]  author actually responded somewhere here. Yeah. For those see without PPR. You can see this. If I go here loading spinner, right? Let's do it again.
[00:46:11]  I know it's already loaded the first time. So let's go to getting a loading spinner. Right? And then they're like, and then they're like, oh
[00:46:18] , okay. And then with PPR first time, no loading spinner. PPR solves this. No, this hasn't, I was trying to figure out what was
[00:46:27]  causing this. Like if it was like some fancy mechanism, it's actually really, really simple. Um, they're just choosing to hold the stream until the main content there
[00:46:39] . Now this is pre-rendered. So the stream obviously can be held because it's like basic synchronous. It's available immediately, but you have to understand that it
[00:46:48] 's still not immediately from the browser. The browser still has that time from the page request to actually make that decision. So like they've just decided that in this case
[00:46:57]  that, you know, to not send it to the browser with a loading state. They're sending it with the content right away. Whereas the previous version. Um, yeah
[00:47:09] , sorry. Yeah, sorry. Yeah. I actually know what the, do the trick. I showed it client side navigation because it's RSCs. It doesn
[00:47:18] 't really make a difference, but to actually prove the point more. You can see when I refresh this page here, there's no loading spinner. And then when I
[00:47:27]  go to without PPR and I refresh the page, there'll be a loading spinner as well. It's, it's just a matter of choosing when to stream.
[00:47:37]  And obviously it's completely safe to hold the stream if you're going to get the content right away. But this has nothing to do specifically with PPR. It's
[00:47:47]  just the fact that PPR let them hold the stream. I, I, I, as I said, I like this demo because it's an example of something that should
[00:47:57]  be easy for developers to do. And, but it got kind of bundled under this feature, right? To be solid has defer stream, which we showed off today.
[00:48:07]  Remix, guess what also has a defer mode that they, that they also added. So like, it's this, this commentary on this is kind of like a
[00:48:19]  bit of an aside. Um, but my point is that the control here manager, when it went to stream is in the developer's hands. Um, mostly, uh,
[00:48:32]  so solutions have to be able to be dynamic along this way. which means we do have to consider what modern hydration means. Like this is obviously a streaming example, right
[00:48:42] ? But you know, at the very extreme, you have quick breaking your app into a thousand pieces of JavaScript that can all come in at separate times, right? Like they
[00:48:51]  can run separately. Yeah. What's PPR is partial pre-rendering. Yeah. The thing is last week I did a demo. Um, and like,
[00:49:07]  maybe it's not the time to go into it. I basically made the same next site and after Ion site, but didn't use partial pre-rendering. Didn
[00:49:15] 't use CD and cache. I was just like, what if we just edge render it? Because like, let's face it, edge rendering of a small page that's
[00:49:23]  basically static HTML strings is going to probably take all of about two milliseconds or maybe five milliseconds. So like, I don't see that being the difference. Right. Um
[00:49:33] , and surprise, surprise. It wasn't. But yeah, isn't this just caching the PPR is, but we you're missing is let me, let me
[00:49:45]  show you, uh, let, let, uh, I have to go back to his example. It's it's not completely static. I don't think if I
[00:49:54]  can find his example here with PPR, he has multiple suspense boundaries on his page. So if I scroll down here, maybe we see it. No, this content
[00:50:04]  doesn't have multiple suspense boundaries. So it's not. It doesn't show it. The fact that it's the PPR fact that it's caching it is why
[00:50:12]  it's basically ignoring that the suspense boundaries there. It's like, but it's equivalent of holding the stream, so to speak. Right. Is, is what I mean
[00:50:21] ? Like the fact that it's cached makes it the tiniest bit faster, but it doesn't actually, it's not the thing dictating this behavior.
[00:50:34]  Right. Like it, it is why this behavior is happening here, but you don't need that. Right. Um, in my, uh, in my partial prer
[00:50:43] ender demo, I also held the stream for the, um, I also held the stream. Where is it profile? Yeah. I also held the stream for the top level
[00:50:57]  content and surprise, surprise. Um, let me just grab a page. As you can see, the main content, this is loaded right away while the rest of it
[00:51:09]  streams in. I, if I pull it not to defer the stream, then this would very briefly because this data is already cached the way to the demo would show a
[00:51:18]  loading state as well. But because I held the stream, you have the same effect without PPR. But yeah, what I'm getting as the caching aspect of
[00:51:31]  this versus streaming is very, is, is kind of minimal. But you start seeing though, in a world we're going to with this stuff where you can interact with
[00:51:43]  these things before other things come in and stuff that we have to. You know, like if it picture, if, if, if this was like, especially slow or
[00:51:52]  something else was especially slow, you would make sense that you couldn't interact with the page. Like you wouldn't feel like it's hydrated. The, it's funny that
[00:52:02]  when we were client rendering, we didn't notice these problems too badly because you couldn't show anything until you could interact with it. And then when we got initial SS
[00:52:13] R and we held the whole page, like I was showing before, we first got our taste of, oh, I can interact with this. And, and it doesn
[00:52:23] 't do anything at first, but the second you add streaming. It's like a whole other dimension now because you get the static stuff even sooner. So it's sitting
[00:52:35]  there in front of you even longer. And if you're saying that you can't interact with that, you know, until the very end, like your uncanny valley,
[00:52:47]  so to speak, goes from being like maybe a couple hundred milliseconds to being like 600, like, or maybe a second, like depending on how long this data comes in and
[00:53:00]  you know, the slowest part of your page. Like when you get to that point, it is definitely noticeable. I mean, I had people report a bug,
[00:53:10]  um, that I, again, fixed and solid related to all this. Um, let me, let me pull, show you what I'm talking about. Cause I,
[00:53:17]  we already had, we already had some of the mechanisms, but I had to bugs in them because people weren't testing them. Check, check out this issue. I'll
[00:53:25]  show you what, what I'm talking about. Um, flaky cash all route after hydration. Um, let's watch this video. See path one home one refresh
[00:53:38]  quickly. Go over and click. Okay. About path, not updating. Now it did. The reason is if they, this was a bug in solid where we started
[00:53:56]  hydrating. We, we basically overrode the, the events for things that shouldn't have happened yet. I, I'm not getting the details yet, but
[00:54:05]  my point is like, I mean, I already made my point, right? Like it's, it's, it would be brutal. If you, you know, like
[00:54:19]  there's purposely doing a slow down so that we can do this, like make lazy slower, but it'd be really brutal if you couldn't interact with the page.
[00:54:27]  Um, this, this small timing bug, as I said, I fixed in the latest version of solid, but I wanted to kind of. Point out that like. You
[00:54:39]  need. To, once you have streaming, you need to consider this. Yeah, it should be, or at least it's able to capture interactive activity. I mean
[00:54:58] , there's. With streaming. You're kind of, it's kind of like, uh, with streaming, when the new content comes in, you have the benefit usually
[00:55:11]  that the JavaScripts probably beat it there. So there's a good chance that the hydration time is like in the sub, you know, like single digit milliseconds. So like
[00:55:19] , you're not like the difference between you seeing it and interacting with it is basically nothing. Um, when, but I mean, not always. It depends on the
[00:55:26]  length of the request, but like. Um, so there's a possibility that the add to cart hasn't been hydrated yet, but like. Generally speaking, it at least
[00:55:38]  pushes the visuals back, but. The stuff in that main shell that comes in. Sorry, actually. Let me look here. Is the add to cart in them?
[00:55:47]  Yeah, it's in the main shell. Like. We, we should be able to collect the stuff ahead of time. Like, I don't know if I can show
[00:55:54]  this. I don't think I can get over there fast enough. Oh, what's the shortcut? Is it like on a Mac? It's like command a five
[00:56:01]  or something. Sorry. I'm like two windows user. How do I, what's the shortcut for reloading the browser? Okay. Let's just, let's just
[00:56:07] , let's just sit right on the. I gotta do it here. Let's sit here. Like this did update before the content came in. Um, anyway.
[00:56:34]  No commander, no command shift R. No. Like doing something else. Okay. Nevermind. All right. Do you want to enable addiction? Not now.
[00:57:04]  Oh, it's maybe I was like focused on the wrong page. Yeah, there we are. Yeah, nevermind. Yeah. I mean. The top section is just
[00:57:15]  doing synchronous work right now. I like gutted it. So yeah. Oops. Anyway. Yeah. I almost have to artificially put into slowdowns to actually show
[00:57:32]  some of this stuff off. but sort of. Anyway. Sorry about that. Um, but yeah, I mean, I guess I can talk about this now cause we
[00:57:48] 're deep into it, but like, I, I took the same thing we talked about on stream and I actually ran it through page speed just to see stuff. And
[00:58:02]  I thought this was kind of interesting. Um, maybe before we go to this, let's just answer any questions about what we talked about so far. Um, let me
[00:58:13]  scroll up. Is it possible to replace hydration with a transition from backend run logic to frontend logic once everything is loaded in the frontend? I mean, that is
[00:58:20]  kind of hydration. The problem is these things happen in stages. Right? So like, it's not like, yeah, I mean, forgetting about like server components or whatever
[00:58:29] , like purely isomorphic approaches I said would already fall in to this. because you write, you only write the logic in one way and it, and you move
[00:58:41]  it across the wire. So I'm not quite sure I'm following on that. I know I'm getting late to this comment that was like 15 minutes ago, but
[00:58:56]  the issue with PPR and caching is exactly the point you made at the beginning. If partial that as a small TTL is outdated while it's streaming, then
[00:59:08]  issue old patching gotchas pre spot, right? So you you're talking about, uh, I don't know. Yeah. Are we getting back to like the
[00:59:20]  skew thing? Hmm. Can we benefit in any way from PPR and pages behind off since the cash would only be an empty shell? Well, I mean.
[00:59:47]  I wonder if next is trying to figure out ways to do that. Like in theory, if you had a way of rendering the page, like a mock user, you could
[01:00:04]  PPR those pages, right? Like you could, if you had a way to like get past the off that do the pre render. And like, basically if,
[01:00:11]  if the off guarding was only around the, the, the data part of the page, it's, it's funny. Solid router and off pisses people off. I
[01:00:26]  know this innately. Cause they're just like, how do I do off? I don't get it. And it's because we off the data, not the page
[01:00:34] . Like it's the, it's when like, we assume that there's going to be some kind of async or whatever question. And then, but we don
[01:00:42] 't block. So we actually render the, the, um, we start rendering the page essentially while you're figuring out if it's authenticated. And at a certain point
[01:00:52]  you put the block where you say show if authorized or whatever. Right. And what, what I'm trying to get at is in theory, in a setup that's
[01:01:02]  data driven off, like I'm talking about, like we do in solid. Yes. You could pre-render everything because the auth would be async, which would be
[01:01:11]  under suspense boundary, which means that while in some ways it's more wasteful. Think stuff isn't terribly expensive. You could basically like shell it out and then anything that
[01:01:20]  have actual consequence. The biggest thing is PPR, um, server islands, all this category of stuff is much less beneficial. If the LCP content is the large
[01:01:36]  content paid is not static. So I'm assuming that. That, and I could be wrong, but like in this case, your storefront, the reason, like
[01:01:48] , even though technically your author, your author authentications, you know, around the, you know, the card and stuff, it's a lot easier to say like the
[01:01:55]  rest of this, we don't really care about. And then you have these little windows of it. But like, if you're behind a whole off page, you're
[01:01:59]  like, I can't show anything without it. I'm gathering your LCP is going to be dynamic. Like it's going to be based on users. So unless you
[01:02:06] 're caching results per user level, you know, maybe that's something you could do. Maybe you could like run PPR for your, your, your best customers
[01:02:15] . Um, like, unless you're doing that, I'm going to say that your, your LCP is probably going to be dynamic, which means my whole comparison here
[01:02:28]  is actually very important. You know, with the streaming, because the difference of that static part for your stream page doesn't matter very much. And it's the dynamic
[01:02:36]  part is going to consist of most of the page. The difference between streaming and PPR is almost nothing. And the difference between. Um, streaming and server islands is actually
[01:02:51]  going to be way worse. You, you don't want server islands in your use case. I'll show, I can show why in a minute. Um, I
[01:03:07]  have a stream about this topic specifically, but the, the gist of it is we keep on appending stuff to the bottom of the document. And then we flush
[01:03:16]  script tags that flush them out. Like if I look at this hacker news demo, let me see. It's got. It's streaming. It's streaming. I
[01:03:24]  can, I can show you the, the network. You can see it. It's all in the HTML, which is quite nice. Um, let's go doc.
[01:03:32]  Click. Okay. Let's look at the document. No response. Let me. My problem with my super zoomed in view that I use so that I can show people
[01:03:47]  stuff on stream. It's sometimes a pain to find the. The right. Right now my window of actually showing the stuff is super small. I mean, I can
[01:03:56] . I can. I can shrink the dev tools a little bit. Okay. Um, okay. So what do we have here? Head document. Some hydration script, some
[01:04:06]  initial setup stuff for hydration, blah, blah, blah. Some inline styles that are coming from beat. I'm in dev mode. So. Ignore this. Okay
[01:04:16] . Oh, this, this hasn't, doesn't even have the latest solid. I, I shrunk these anyways, not important. Um, but I, what
[01:04:25]  I'm going to show you here is here's the header. Here's the anchor tag. Right. And then you're going to see this in our case, this template
[01:04:35]  ID. That's like a marker that I put in. Um, I did, I use an element cause it's easier to find an element than a comment tag or
[01:04:45]  something, but then you're going to see loading, which is the loading. And then this, this ID is actually the same as this ID. They just kind of
[01:04:53]  match up. And then. We've actually finished the body, finished the HTML and we're done. Then some time later, a template with that same ID will show up
[01:05:01] , which happens to have all the rest of the content for our page. And HTML, you know, and really care. And, and then we flush a script tag
[01:05:10] . That's like, hey, find that element. It calls this function with that element, but it's just like, get that element by ID, get the other element
[01:05:17] . Go through, find the zone of the placeholder. So go through next sibling until you find the comment. And then if hydration has been canceled, just remove the
[01:05:31]  stuff from the DOM. Otherwise just replace the content. Just insert this template's content into, into up here, essentially this. So you just flip it and ta-da
[01:05:49] , we have out of order streaming. It takes JavaScript, which a whole other topic. So I was looking at trying to do this with shadow DOM and shadow DOM is
[01:05:58]  very limited because you, you have to do the, the, the content at the same scope. The template is. And because template has scoping for styles, like you
[01:06:07] , it's very awkward to have nesting like template and template and template. Like the thing, this is, this is single streamed in content, but what if you
[01:06:17]  had content that has content in it? Yeah. I have an example in the solid repo where you load a user page and then you load their comments. And those are
[01:06:28]  separate requests. So you, you know, the comments take longer. So you stream those in as a separate thing. It's very hard to do that. So basically it
[01:06:35] 's basically you need JavaScript for streaming to work out of order in order streaming, you could pause it and do it. And if you've ever been to a site like
[01:06:44]  eBay, they do a combination of in order and out of order streaming. But generally speaking out of order streaming requires JavaScript. So that's how it works. If you
[01:06:55] 're streaming plus hydration, why not do client only at that point? A lot less hassle out of order streaming is going to require JavaScript anyways. Yeah. I mean,
[01:07:11]  it's just about, it's, it's an interesting question, right? This has been the question people have been asking for a while. Like, do I care
[01:07:17]  about any of this? Um, if, if, uh, if I'm going to be like behind a login wall and I don't know the last time I made a
[01:07:29]  single page app behind a login wall, I did not use SSR. But if you do, then you do. All right. Okay. Okay. Yeah. Yeah
[01:07:52] . I mean, I, I, I could stand behind the statement to a certain degree. Um, but like, to me, the whole thing, just a giant spectrum
[01:08:02]  of like stuff. Like, like we're kind of all doing data and view and stuff conceptually high level. You could say that, but that a board is streaming
[01:08:18] . Yeah. Yeah. This is one of the classic questions about streaming, like how to handle cancellation events. I don't think, um, we're handling them quite
[01:08:35]  properly. Uh, but yeah, I, I remember Marco team, like there is the browser can become aware that, that the page is canceled, but the server can't
[01:08:43] . So you kind of got to leave the browser to kind of, I think the server can't. Yeah. Yeah. There's a whole section of Marco. Uh
[01:08:53] , I don't know if you remember Taylor. Um, he came on the stream a couple of years ago. He did a bunch of research into this area. Um
[01:08:56] , I honestly haven't, I assume at the point that someone's willing to cancel the page, then they're also willing to refresh the page. Okay. Okay.
[01:09:15]  Okay. Okay. Okay. In case I have a chance to do we send all the scripts and templates together with the initial HTML when all the scripts get resolved within the
[01:09:28]  rest of data? No, I generally we're sending the HTML in chunks. Like we're not, we're not sending the templates aren't really their template elements. They
[01:09:38] 're actually fully resolved. There's no holes in here. This is actually, unless there's other suspense boundaries, it's basically fully server rendered content. Um, so we
[01:09:47]  don't. Like client rendered after it, like the big benefit of this approach of because we used to do data streaming in solid like pre 1.3. Um,
[01:09:58]  and it worked, like you said, the big benefit of this approach is if you're on a really slow network and the JavaScript for your framework hasn't loaded yet, these
[01:10:07]  inline things will still get you in there. So basically this streaming approach of sending the finished HTML and using this inline script tags to flip in is not impacted by
[01:10:17]  the speed at which you can start hydrating. Like this will happen before like you streaming works. If solid hasn't even been loaded on the page yet, like the,
[01:10:28]  the HTML will come in. So you will see the content sooner, which is still generally the goal. If there's really, cause there's really true and I don
[01:10:42] 't see anyone counts the page other than desktop yet. Anyway, I forget why I went down this, this, this particular avenue. I think I was trying to show.
[01:11:02]  Yeah, I think we were building up to this visual test cause I was trying to impress on the, this example here. Cause we talked about this last, my last
[01:11:11]  stream, but I actually went in and just kind of ran them through webpage test and we, I did it in super slow mo. So you guys can kind of see,
[01:11:20]  so we can stop at some key points. First key point was this one. If I go back here. Yeah. 1.3, I guess. yeah, 1
[01:11:29] .3, I don't know why. Vercel edge has been just, I, Matthias, uh, from, uh, uh, uh, Billman from
[01:11:45]  net by my, my, my boss, you know, he was on the stream explaining some of the complexity of Vercel's edge solution. But one thing that
[01:11:52]  I saw while I was doing my test was that Vercel edge was consistently slower than Vercel PPR and consistently slower than Netlify edge. And while there
[01:11:59] 's variance, we'll see a 0.1 difference here and there through different tests and different networks. It was very clear to me that on average for cell edges is slower
[01:12:09]  and often like a hundred milliseconds or so slower. Again, I don't know why I just, I just saw this, right? Oh, you know what fuzzy,
[01:12:21]  uh, this article is based on a Minko's talk and we actually two streams ago covered Minko's talk like live and I reviewed it. So I'm
[01:12:35]  pretty sure that I probably already covered this content. So like, they forgot to remove the delay 100. Yeah, no, that's, that's a lovely thing,
[01:12:53]  but no, this, this, the Vercel edge demo here, it's not apples to apples. This is next. The Vercel demo here is actually solid
[01:13:00] . Um, it's the exact same code across both of these. Now don't get me wrong. There's going to be variance of like 0.1 or so between
[01:13:07]  different runs. Um, it, it just makes sense, you know, like it, it's not all the same, but on average, I mean, you can
[01:13:15] , you can kind of see it here. Let's keep on going. There we go. 1.5. Now Vercel, uh, edge starts coming in.
[01:13:23]  Now what gets the paint is also variable. Uh, the browser tries to make its best assumption or whatever they end up. So it's thing, but one thing that
[01:13:33]  is really interesting is that by this point, the solid demo has already fetched this content. This, this is the fastest. This one takes 200 milliseconds where the Verc
[01:13:43] el is still fetching here. And the, the reason is I think that we don't need the double proxy through, through the origin. I, I, I
[01:13:51]  would have expected these to be similar, but I also consistently saw, I don't know, like there's saw that for the stuff that happened dynamically after the fact, the
[01:14:02]  streaming example, uh, were faster at loading them in. Then, then Vercel's PPR one, it might have to do with like the double hop they do
[01:14:09] , but let's continue on. There 1.6, the images get in and this page is actually done. I mean, there's more stuff happening in the background
[01:14:20] , but visually your LCP content is done. To be fair, they would have counted LCP on this page pro no. It's when the image comes in. I
[01:14:28]  think both of these would have been counted probably LCP at this point, but this page is actually not finished yet. Continue. Did I go too far? No,
[01:14:42]  I did not then at 1.8, the Vercel page is visually finished. And then this one is still loading that other content because probably the still from the initial
[01:14:54]  delay of, of that. And there it is at 1.9, uh, 1.9. Yeah. And then finally, yeah, this is pretty much the
[01:15:04]  end. I don't know why they decided to end. There's nothing else that flickers on the page after this point. But you know, stuff's happening off
[01:15:12]  screen, some other dynamic loading, whatever. But my, my point is that like, this is pretty much in line of what I kept on seeing when doing these examples.
[01:15:30]  Um, but it was interesting to me that Vercel edge did seem slower than like Vercel PPR is definitely, was definitely an improvement over Vercel
[01:15:39]  edge. Um, and interestingly enough, like, I guess it's the difference between being hosting the same. Uh, like thing, my understanding that like from the,
[01:15:53]  if you talk to someone from Cloudflare, they're, they're going to be like, these guys, Netlify Vercel, they don't do true
[01:16:01]  edge. They don't bring the stuff as close as possible to the end user. They're leveraging the fact that, um, these are quicker boot up run times, running
[01:16:15]  a more sleek, improved performance runtime at the edge to, you know, get faster. results, you know, closer to the CDN, so to speak, you
[01:16:23]  know, kind of thing, but it doesn't like, it, it, it, it doesn't, um, it's not the same as like true edge. If
[01:16:32]  you talk to someone from Cloudflare, so to speak. And the difference between Netlify and Vercel is that Netlify's Dino, like basically
[01:16:42]  their edge is right next to, it's like in AWS and like the same region. And they're just like, Hey, Hey buddy. You know, like we
[01:16:50] , we got this Vercel edge does this dance where it goes first to AWS before going out to the Cloudflare worker. And then I think it still gets rout
[01:17:01] ed back through again. So again, you know, this routing might only take, you know, a couple dozen. milliseconds, I think on average, you see it
[01:17:13]  and I don't know if there's a startup cost initiative, but PPR somehow Vercel negates the overhead of their typical edge offering, at least from what I
[01:17:22]  can tell. But this isn't the only reason that I want to look at this demo, right? It's because the JS size has no impact in terms of being
[01:17:32]  partial here. Right. Because like in this demo, the solid version was smaller than the Astra, which I'll show in a minute or the next version. Right.
[01:17:39]  Um, the next version is like considerably bigger, but even in this like simulated 3G or 4G environment, um, I think this is still in the US, like
[01:17:50]  maybe in like countryside US that they're testing this. Um, like the size is not impacting this because you don't need to hydrate for this stuff to work.
[01:18:01]  It's all streaming and you don't need the only JavaScript you need is the stuff in line into, into the page. So JavaScript size is doesn't matter because it doesn
[01:18:10] 't impact the visual here, nor does the, you know, the JS execution time. Cause if you actually look in lighthouse, we, we tested it last week.
[01:18:18]  I think you remember this was like blocking for like almost half a second. And these ones were like more like, you know, 40 milliseconds or something. What did I say
[01:18:27]  here? Or no, I guess. Yeah. Or sorry. It was more like a hundred and Astro versions, like 50 or whatever. Basically it didn't matter because
[01:18:35]  the running, the running scripts did not really impact the visualization of the page. Right. So like. Yeah. Um, all the stuff that we, we kind of
[01:18:51]  benched towards doesn't really impact, make much of an impact on the static case. Right. I, I did, however, run the same test with start on Net
[01:19:02] lify edge next PPR and Astro server islands. And again, you know, we're going to see some variation here. I think if this is the right one
[01:19:13] , um, where we get it, but 1.3. Okay. So in this, in this run, the next PPR did win the battle, but as
[01:19:22]  I said, this is, it's, it's, it's, it's, it's, uh, they're, they're all unlike the Priscilla edge example
[01:19:33] , where you actually saw it like 200 milliseconds. This is like a rounding error amount of difference PPR server specific use case. Yes. And Astro server islands,
[01:19:48]  I would argue is for an even more specific use case. PPR is actually designed almost in a way that you could think that it would be good for the general case.
[01:19:56]  Right. Um, let's keep on going. So at 1.6, again, consistently our start edge thing is done for cells, still waiting on this and Ast
[01:20:10] ro is still waiting on, on this. So this is pretty consistent with our previous run with slightly slower response this time for these guys, but you know, it's
[01:20:20] , it's, it's within the range. Still not there. So, okay, this one took a little longer this time for next PPR to get there at
[01:20:33]  20 at 2.1. And then let's keep on watching for Astro. There 3.1 A whole second slower, the next PPR and, uh, you
[01:20:54]  know, almost a second and a half slower than, um, than, than solid start server islands for this, for this to come in. Now, the truth is
[01:21:04]  the old Astro demo had longer delays on them, but this is a new version of the Astro demo that I created, which I shortened delays. And the next step
[01:21:14]  did the delays in this kind of weird way where they like added them on and then Astro copied it. And then next like changed the way they do the delay. So
[01:21:24]  I had to go back and change the Astro version to do the delays in a different way too. Right. Like it was, it was, it was, it
[01:21:29]  was actually like a little bit funny game to play because in any case, the reason. is this i'm gonna do it's because ppr doesn't take any specific
[01:21:51]  hit over edge streaming it's just edge streaming i've been saying from the beginning it's like edge streaming with static render like if i had if if i had my edge function
[01:22:03]  go get me static html for the first chunk and then continue my normal streaming on that rendering on the edge it'd be like the same as next ppr next
[01:22:12]  ppr is like is basically just edge streaming astro as we showed on the last stream let me show scala draw scala draw not this stream yeah see out of order
[01:22:32]  i mean i moved the cdn in the edge around a bit um but if you look at i i mean this diagram shows everything what is the difference between out of
[01:22:43]  order and ppr they are identical basically like there's very little difference here server islands talk to the cdn but then they go to the origin from the client they don
[01:22:54] 't use the edge as an intermediate here and that means that when you do your initial request so when you do that you end up with this and as i said if your
[01:23:14]  lcp is the main content do i care that this came a little bit later no i don't freaking care i can interact with it do all my stuff i don
[01:23:23] 't care but if this is your lcp is your main content like here i do care if my main page takes you know a second longer to a second and a
[01:23:41]  half longer to show up i do so like server islands are like the idealized form they're the new jam stack as i said like the new way of just like making the
[01:23:47]  static part really fast and say i don't care about that it's so much nicer though because the mechanism is all in html now instead of like heavy javas
[01:24:04] cript frameworks like you remove that weird hydration cost bottleneck that old single page apps had for doing ecommerce like people using jam stack classically for ecommerce had some struggles
[01:24:06]  the astro solution basically gets rid of the core of it but i'd say ppr is more general because it's just edge streaming like the the dynamic content or sort of
[01:24:22]  static content is fast and the dynamic content is as fast as you can get it which is the same as edge streaming so the only downside is there might be a little is
[01:24:36]  the extra infrastructure overhead cost and all like the the stuff that's specific to versell and all that kind of stuff but otherwise it is basically like edge streaming more or less
[01:24:53]  like edge streaming more or less sorry did i do an okay job of explaining the difference like if most your lcp content is static you like like this exact page server islands
[01:25:09]  make a ton of sense because as i've shown here for this case perhaps the it there's no real benefit on the static side and it's actually slower for the server side
[01:25:21]  but to make server islands an astro is mind-numbly simple and works on every single infrastructure and you don't need anything and it's framework agnostic and
[01:25:31]  it's like there's so many wins that you can just be like i really don't care how fast just six rooms left comes it's got you've been on websites where
[01:25:38]  the whole thing takes that long i was using realtor.com the other day and man that's brutal just an aside but like like this is very simple agnostic
[01:25:54]  very good for this use case you don't want your heavily dynamic lcp content to use this approach ppr in theory won't suffer from either side except for all the
[01:26:06]  complexity it's the exact opposite right and then edge streaming like i showed in the start example is like the middle ground that frameworks like solid and remix and whatever been doing and
[01:26:17]  generally is fairly agnostic um but it's a little bit more complicated you you gotta like the framework you know has to know about something it's not something that's as
[01:26:26]  easy for like a third party like astro to implement so like they have to depend on react or like solid to give that functionality so like it's understandable where where it sits
[01:26:36]  but it's that's kind of like the spectrum here yeah i mean the thing is there's a hope of the there be eventually being a unified approach i've stepped back
[01:26:59]  from this you can see this a bit in solid starts design um while we support ssr and we support a very efficient patterns of ssr i think ssr
[01:27:08]  can is very can be beneficial for things that could classically be spas it's i'm not so hounded on that initial page load stuff um to kind of walk
[01:27:20]  through these as i said if someone is on that spectrum like if this is your website use astro i'm always big and pushing use astro and solid and i'm hoping
[01:27:30]  you know some of the other stuff i want to show today makes it really obvious that could even be easier um obviously we have experimental islands it's all start everyone wants the
[01:27:38]  one solution for everything so like that's why this work is happening but i do feel like next has def and rscs like react core definitely focus themselves more on addressing this
[01:27:52]  gap it's almost like you they're looking at like what react good at and they're like okay how can we be good at this as well um so they're expanding the
[01:27:58]  capability where you know would that always come to complexity astro versions is like how dirt simple can i be you know it's like it's like not quite htm
[01:28:09] x levels but it's like that same kind of path like i feel like if you do a spectrum you could show like htmx kind of off the edge astro
[01:28:17]  is somewhere in a reasonable place and then you start getting you know other people crazy on the other side yeah thanks dave for just summarizing what i said so quickly
[01:28:59]  interesting thing that ppr shines at large dynamic celsius but but then at that point it's not much different than regular edge streaming except more complex exactly yeah that's that's
[01:29:07]  the way i would put it the thing is when astro server islands didn't exist next was like cornering this side right they're like look ppr you know but
[01:29:18]  server islands are like i love when astro does stuff like that they just like basically on one side you know like stuff like where i get frustrated where it can break frameworks and
[01:29:28]  stuff like i was talking about at the beginning stream but on the other hand this is such a great example of like oh we just did the simple obvious thing you know but the
[01:29:36]  thing is it's not it's not the simple obvious thing for react or next that care to be a bit more general astro serving exactly astro's customers in exactly
[01:29:48]  the best way they can so like yeah i mean it's genius because they they took a path that next won't follow i don't think and they just like showed them who
[01:29:58] 's boss in a certain way like yeah i don't know i think it's pretty cool yeah the apps that i building made i love stuff and benefit loss yeah that's
[01:30:13]  awesome to hear yeah exactly like there's there's i think in general as like a bigger moving process it's like the pendulum thing but like we we swung too far client
[01:30:25]  there's a downside of being too client heavy we need to find the right mix right balance again so server has value i think it might be it might be overhyped it
[01:30:35] 's just that there there was a gap here and you just look look at react like react needed to come up with ways to address that gap i'm sometimes surprised at how
[01:30:48]  the length they went um but like they're also dealing at a different scale than the average developer it's this was kind of leading up to my other post that i tweeted about
[01:30:57]  simple demos not being able to show off the benefits of these things it's like this also doesn't show the whole story right i sometimes being in the middle is a good
[01:31:09]  place to be but you're always going to be smoked by things on either side it's less sensational yeah there you go server islands yeah sure get htmx in
[01:31:33]  there too why not but like yeah i mean this this all is kind of related to topics right i'm just putting check marks besides things that we talked about we put server
[01:31:53]  islands performance we talked about what is interactivity we haven't talked a ton about streaming interruption i guess we did talk about streaming interruption what else do we have on my
[01:32:09]  list yeah let's look okay let's talk about i forget if i showed this on stream oh i did it part of it but um while we're doing performance type of
[01:32:27]  things you know in this zone um i wouldn't mind talking about vmr how i scored like my first 80 but i was like i was like i was like i
[01:32:47]  was like i was very excited um on the last stream i was like i was like man if this is possible if we can get in this ballpark of the partial hydrated solutions
[01:33:03]  without partial hydration that's incredible right because the problem is i think i mentioned this before and i actually went and hung out with misco um the other day and i've
[01:33:17]  i can talk a bit about our conversation in a minute but i was saying that like even when you add client-side routing to quick it becomes like server components per wise uh
[01:33:26]  in terms of initial page load it loots loses its serialization edge so you get from an mpa and like the the only demos that client-side route and score
[01:33:42]  in the like 85 90s are ones that are fundamentally broken from like the ssr uh state persistent tearing model that we'll talk about a little bit more um so like
[01:33:55]  either you're an mpa essentially or you can't score better than 65 and my solid start demo my server component demos my quick demos they all scored basically the same don
[01:34:11] 't get me wrong there are definitely losers in my comparison ones that score worse than that but they are there and then i went and made that demo last week where i basically kept
[01:34:22]  the serialization out of the script and then did a callback over hdp2 hopefully and get the content to hydrate as it kind of streams in and we
[01:34:30]  saw an 80 um on that test and it was like crazy so i i ran it through webpage scores and i think i actually showed this on stream where i showed the webpage test
[01:34:40]  and people are like i don't get it am i supposed to see that the astro version is slower or faster and i was like well i don't actually have an ast
[01:34:45] ro you know streaming version so i can't actually benchmark the difference between a framework that doesn't serialize the data and one that does and ultimately when i ran my timeline
[01:34:57]  between the one that like does that trick and whatnot there was very little differences like the streaming was basically started at the same point and this one seemed to flash in the content sooner
[01:35:08]  and end a little bit sooner and i you know i i looked at some of these these numbers to try and understand like was lazy beating ssr where does lazy beat
[01:35:18]  ssr versus not having to serialize well we can't really trust visuals for astro here because it doesn't stream but i generally speaking i saw this very small open
[01:35:34]  up basically could be between runs difference between lazy being better essentially on every single metric except for the total number requests so obviously because it does an extra request so yeah it was
[01:35:49]  basically a wash from this which suggests that perhaps my ad is no good i was talking to miss go and he's like you should go talk to the lighthouse people this is probably
[01:36:00]  you it's probably a problem with lighthouse not a problem with like that shouldn't be that shouldn't score higher than what we're already doing with streaming he suggested that like
[01:36:13]  lighthouse is just has a flaw in it and that i should talk to the chrome team so i might do that um but it is very very interesting to me that that we're
[01:36:25]  in this kind of zone where the data serialization could impact stuff so severely enough to basically knock frameworks out like when i talked to misco about the the fact that quick
[01:36:40]  when soon you had client-side routing basically um tanked the performance not tanked but went back to the same as basically any hyper-optimized single page um app
[01:36:52]  kind of a framework um he said the problem was context and i thought that was an interesting perspective he said that it was the shared data state and he was like if we could
[01:37:05]  tell people that almost like uh like a spy movie that like this context will self-destruct you can only read from it once then we don't have this problem because like
[01:37:14]  then we don't need to serialize it because no one would write code that could ever read from it again in the future i don't know how practical that is when
[01:37:21]  you have like nested routing you have shared state that you need to change to the next page you might access new pieces of that data that you haven't yet but he's
[01:37:30]  like we'll make them opt into it um because in a case like our hacker news demo here you never need any content on this page after the fact in terms of navigation
[01:37:48]  i it is interesting though that if you hide these comments and then you have to render them again maybe you know you would but this actually uses css to hide it that
[01:37:58] 's the whole trick um why you don't need to serialize the data um in like an mpa like astro or whatever because this is all the whole page including all
[01:38:09]  the hidden content is all pre-rendered and sent along and then we're just using javascript to hide it so you never need to render it again on the
[01:38:15]  client so if you could somehow make that guarantee with your data um then you could skip serializing it um it was an interesting conversation regardless but i just kind of wanted to point
[01:38:31]  out that it's quite possible that my hack uh to push the serialization off the main uh html body might not be as impactful as lighthouse um would suggest um
[01:38:47]  just something kind of put out there to be fair we should know that lighthouse it's probably it's it's it's it's a diagnostic it's a guideline at best
[01:38:57]  um i think there was a where was it uh bookmarks there was a theo video that i saw um the other day and he was uh actually highlighting uh selma's
[01:39:13]  article um used to work with selma at netlify um devrel um that was talking about how to like mess with the numbers to score well in lighthouse i i think
[01:39:25]  it's worth pointing out people who might just like see this on surfaces lighthouse is exactly for people like me and sometimes people who are working on their sites and they want a quick
[01:39:38]  idea of like if something's a good idea or a bad idea lighthouse does not really give a true indicator of the overall performance of your site there's something called core web
[01:39:47]  vitals which they is what they actually use lighthouse is just like a lab test so to speak that being said lab tests are still incredibly valuable i think people are really too quick
[01:39:56]  to basically be like oh you know it's just lighthouse who cares well sometimes lighthouse can point out when you're doing stupid stuff um and and essentially i think i think it's
[01:40:09]  it's just it's a good as you're developing your site and you care about page speed it's a good thing to develop against but it's not it'll hopefully
[01:40:17]  put you hopefully put you in a good range you don't need to be obsessed with the hundred but hopefully it will you know put you in a in a decent place sometimes i
[01:40:25] 'd suggest if possible be obsessed with the hundred because the truth of the matter is in some cases the hundred is easy to get but once you move out of that range then
[01:40:35]  like you know at least you're thinking about the right things just kind of an aside but it can mislead you so always important to have a second point of measure that
[01:40:49] 's why i like things like web page test is a little bit more real world for lab style tests none of this is going to be as good as web vitals which
[01:40:57]  will test on real devices around the world but you need to be able you know to make decisions before you have that information lab tests are valuable so just throwing that out there um
[01:41:08]  okay do do what was this in relation to right right right right it was in this the web stuff yeah so we still got we still have some stuff to figure out i
[01:41:23]  there might be potentials we should rerun again and see if we can like there might be no hundreds of milliseconds to be gained here still that i'm not fully seeing but
[01:41:34]  this is far from conclusive which is my my whole point here okay um so that's done for that let's talk skew for a bit hopefully patrick's still
[01:41:47]  around because i would love to to understand better where the you know the concerns are around protectancy the funny thing is on to a certain level we've always had this problem with
[01:42:02]  long-lived client applications right the scoop skew problem is you have an app you've deployed it maybe even use a service worker you know do stuff in the background great
[01:42:19]  great and then people are using your app they keep it open all day like twitter you know it's always that tab on the other side you know and then someone goes deploys
[01:42:30]  the latest version and your api has changed so communicating with the server now is is gonna have some problems because you're missing required fields that need to be sent on the
[01:42:46]  ap on the specific api or um you know yeah i mean that's probably the most common one uh maybe you you you call an endpoint that doesn't exist anymore um
[01:42:59]  etc right in in a certain degree we've had these sort of issues way back i remember graphql being the first place i started really thinking about it because it used to
[01:43:11]  be the practice that you generally would version your apis you'd be like v1 v2 and you you'd have these crazy urls where the version would be in
[01:43:25]  the path and that was kind of the standard way people would build their apis it'd be like v1 api slash users and then when it sometimes i've even seen
[01:43:34]  it nested the other way you'd have like slash user slash v1 slash v2 depending how complicated it would get pretty big because as you can imagine things things do
[01:43:48]  change over time on the positive it really made it hard to change the api so people were very very careful in their api design and don't get me wrong things could
[01:43:59]  still break because people could bug fix and things behind the api wall change the behavior of it and you know unexpected things but for the most part the interface stayed the same so
[01:44:07]  people didn't really concern themselves with it too much but we kind of all over a decade ago i feel like kind of start scaling out that because graphql came out
[01:44:18]  and it was like a new paradigm which was like okay guys let's just make this schema and every time you need to add a new endpoint add a new endpoint you know just
[01:44:27]  just it basically said don't version you know just keep on adding stuff as you need it you know the idea was if you have like i think the idea is like if
[01:44:37]  you're fetching different types of data that those fields like the base data fields aren't probably going to change much maybe you can mark one as deprecated or something but
[01:44:44]  generally speaking like your ability to map the specific fields and then if you want to have like projections or like more you know calculated things you know you could just add them as you
[01:44:56]  needed and over time we would more or less just put in everything that you would need and it would just always go forward never backwards you just never remove anything from your schema
[01:45:07]  and uh i don't know if you've ever used any of the public graphql apis out there i think it's they're very uh representative of this design decision
[01:45:18]  um internally you're building your startup or whatever like who cares right it's the same kind of the same kind of people that can use trpc can probably get away with
[01:45:28]  that mentality but graphql for your external api it's a little bit harder when other like you can't control um what others do with it skew version is
[01:45:40]  more of a risk related because we're moving towards tight coupling and back and server points and loosely covered api yours yes yes this is this is all where i was building up
[01:45:53]  to right because it's very different when your your api is um these distinct endpoints i'd even argue that while server functions have this problem as well to a certain
[01:46:06]  degree like people can change the arguments that you need to pass to them and then suddenly like stuff gets messed up even those aren't as consequential because they're still defined you
[01:46:18]  like you're building an api you're like you use server and you're like this is the output these are the inputs if you do change it you're going to impact
[01:46:26]  it's it it is a lot like changing that rest endpoint it might not be as obvious for people and that's where they get trapped but you are very much saying like
[01:46:34]  here's a function signature when you start releasing server functions you should actually like this we're going to probably get to a point where people are going to start designing server functions with
[01:46:45]  object-based apis instead of argument-based apis and then they'll have the ability to add more options you kind of see this it's a classic kind of
[01:46:53]  pattern where you start adding more arguments and then you're like okay crap i need an option object and then you start just adding more things to the options i some sort of component
[01:47:02]  apis actually start you there because it's kind of like smart like that's what tanner did i think he just like skipped right past the transparent argument thing because he was
[01:47:09]  like or it's not sort of from a server function because he's just like who cares like ultimately you're going to end up here um there's a purist part
[01:47:17]  of me that wants to keep things transparent so i went with function to function mapping but in practice i imagine you use objects and then you're kind of back to you know a
[01:47:27]  graphql level okay but server components that's that's a whole other zone right because the problem is what's your api it's literally any prop that you would
[01:47:40]  pass to a client component like it's the interface between the client and server components every single place every projection every single location that you you know say you have a server and then
[01:47:53]  you have a client component then you project server children to that client component that have more client components in it every little piece every prop passed from server through client now is your
[01:48:05]  api endpoint essentially um so we've gone from having top level distinct function or declared apis where you can like clearly see what the arguments are to literally someone changing a prop
[01:48:20]  on a component and the whole thing blowing up yeah so this is this is this is this is one of those things where uh i haven't personally been spending as much time
[01:48:36]  like don't get me wrong server functions do get us a bit into this zone concern um single flight mutations um in solid for example we have this ability that when you hit the
[01:48:49]  server will send you back data for the next page that could be impacted by this on the positive at least if there was a mismatch like that um you know like yeah
[01:49:02]  it might be missing data coming back uh but if there's like a a function or key mismatch type situation and the client didn't have it it just fetched new data
[01:49:11]  do you know what i mean like um it's not as dire as basically breaking the render model it's just like um as long as you don't like remove fields so
[01:49:22]  to speak of the return json and you're only adding fields it's the graphql case then like you're not going to get into trouble but server components like we
[01:49:32] 're we're in a whole new world so this is probably one of the craziest parts about about this approach right part of it i guess i've wondered about this a little
[01:50:01]  bit because things like astro things where you like and they're partial that you know they're they're uh page view view page transition or whatever page view whatever you you
[01:50:19]  get the new html you just kind of swap it in and then do the islands like that and maybe you can preserve islands like i'm trying to think of like the
[01:50:25]  islands router is there something specific about the react approach that makes this harder like it's because they almost like it's because they diff the vdom and they expect that like
[01:50:39]  they're still dipping the non-client rendered sides of the stuff i guess that's where this challenge comes in just deploy to versell right well i mean this is this
[01:50:47]  is one of the challenges this is why we're getting to a point where i mean how do you put this right the react wants server components moving forward but the amount of
[01:51:02]  infrastructure to support this is so specific is so specific that like i mean it's awesome from reaction management next is working along with them to solve this but you don't just need
[01:51:12]  next to work along with you them you need versell to work along with you like this is this is this is really why this has been so challenging a thing is they're
[01:51:24]  building not just a framework a primitive that works for all the react frameworks they have to build it to they have to force infrastructure to move along with them and like there's
[01:51:37]  a reason why next is kind of locked in to like for sale like you can run it on other other you know what i mean like it's i i see these teams
[01:51:52]  i interact with them obviously you know they're adjacent to me at netlify you know i have good relations with people cloudflare you you know like you know open next
[01:52:05]  you know like i don't really blame herself for this or next for this or anyone for this it's just like a reality you can't pretend it's not reality you
[01:52:16]  know um because it's like essential building blocks needed to support this architecture and if you're setting it it's possible this should be just standard this is how you push it forward
[01:52:28]  but it's like it's it makes it pretty tricky right yeah yeah it's true right so i'm sure i haven't seen i haven't checked netlify's
[01:52:45]  skew thing but it means that everyone else is always a step behind so i mean maybe that's just the trade-off yeah yeah exactly yeah yeah i mean this is
[01:53:00]  an interesting trade-off um i guess that we're getting a little bit out from the hydration topic but it but yes this this is this is one of the challenges here because
[01:53:14]  people do feel the lock-in and it's the other platforms are trying to catch up but it's like who's responsible to make sure that that happens like is it
[01:53:26]  the reacts team should the react core team from meta go around and be like hey netlify hey cloudflare we think rcs have this kind of concern would you work
[01:53:42]  with us they know that their level interactivity interaction is with next so is it the next team that should be going around you know like i mean in a sense what i
[01:53:52] 'm a framework when i wanted streaming remember i wanted streaming so badly um i for years i was pushing and getting in on issue threads talking stuff at cloudflare aws you
[01:54:07]  know netlify funny jokes they they wanted to be our official sponsor and i turned them down because they didn't have streaming initially and they're like no it's okay
[01:54:17]  we'll still do it but like you know we'll still work together but i was like i don't know if i can recommend you um you know and all honestly you know
[01:54:27]  i'm i'm gonna if someone asked me what the best way to do you know ssr and stuff is i'm gonna say a platform that supports streaming so i
[01:54:35]  feel you know i felt conflicted so i said no and jason langstrom just kind of laughed at me and was like it's okay ryan don't worry about it
[01:54:43]  if that's your reasoning i will just go ahead um don't don't don't concern yourself but like isn't is the next js team gonna do that are they gonna they
[01:54:54] 're gonna go to these different input providers and make sure that the pieces that they needed to happen i i don't know i don't i don't see it happening is
[01:55:04]  open next forward rscs i'm that's a good question i i don't imagine skew i'm not sure skew protection is part of what their offering is to
[01:55:13]  bring back hydration if server component apps offline then what happens and in a spa app of what happens i mean the offline is a whole is an interesting topic in its own sense
[01:55:29]  it depends completely on how you handle your data pieces because like a spa offline can be just as broken as an rc app offline i've built plenty of broken spa apps offline
[01:55:43]  like you you can't do very much without talking to the server unless you specifically go out of your way to not talk to the server so yeah i don't know
[01:56:11]  it's it's it's this is a i think this is more just representative of zona problems that we're running into that we don't even realize we have like another
[01:56:31]  example was closure extraction requiring encryption of data right you the whole like you have data on the outside on the server you put it in a server function you're like sweet it
[01:56:50] 's still in the server and then you nest that inside basically you wrap over client state of that server function actually don't even have to wrap over client state literally actually it's
[01:57:04]  just server dynamic server content in a closure over over server function because server functions and server components are running at two different times there's two separate requests after the fact so any
[01:57:21]  data that flows between them has to go over the client wire right it's just it's just it's just like math right just that's how it works and the fact that
[01:57:31]  that's implicit got people in trouble like obviously we're understanding the security things the further we go along we get like better identifying them but like depending on the solution you know
[01:57:43]  you you it might depend you know like i don't know like you start having to build more of these kind of tools in to into the frameworks themselves to kind of handle this
[01:58:04]  there's no mutation rsc offline would work okay right rc is just used to create a static shell i mean yes well yes yes navigation though navigation requires navigation requires going
[01:58:19]  back to the server always in a single page app you could argue that it doesn't but in reality it probably still does i mean spa because usually code around the fetches
[01:58:32]  in cash versus not local versus yeah yeah you usually code around the fetches yes right yeah i mean rcs is not a great someone can make this argument like rcs as
[01:58:50]  a format doesn't need to have a server you can use rcs without a server technically um you could cache rc responses in the same way you can cache json
[01:59:03]  responses you could yeah i don't know i probably wouldn't use rscs if i was trying to do offline first app but i don't think because it's like kind
[01:59:16]  of jumping through hoops for no reason but i also on the other hand probably i think these are like what do you call when they're like 90 degrees they're like
[01:59:25]  orthogonal yes yeah yeah yeah orthogonal yeah that's that's yeah so like so you you could yes but i mean you wouldn't because rscs you you to get the
[01:59:57]  benefit of rcs you want to have it you don't want like waterfalls so you want to kind of make the whole tree connected and pull them through so it's
[02:00:09]  not quite tan stack i guess see that that's where the problem comes in the the tree the tree causes all these things that could have been separate before to be all one thing
[02:00:20]  and once they're one thing it's harder to cache them you can cache individual things a lot easier but it's like you know like it was like i don't want to
[02:00:27]  use this argument always because like people talk about js bundles and they're like well if you if we use esm purely and only kept the separate modules those change a
[02:00:36]  lot less but if you bundle it then like it's a new bundle every time you do an update right it's the same kind of concept here with rcs because you get
[02:00:43]  the benefit of them you're trying to force everything into a single tree and again here's another infrastructure concern caching now suddenly you're literally using blob cache storage whatever for
[02:00:54]  almost every piece of data in your app it's not like i'm using redis for the specific thing that i know is high volume it's like no everything has to go
[02:01:02]  through a cache layer otherwise we're going to do a lot of extra fetching on every single request because we're just grabbing everything that same architecture makes rscs much harder
[02:01:15]  to cache because while you could it just takes one of those data sources to change for your stuff to be invalid yeah so like the remix approach is you know it's kind
[02:01:34]  of like the tan stack let's say it's backwards and kind of misses the point like at that point we're just talking serialization stuff we're like okay do i
[02:01:43]  prefer my stuff in json or not like it's just an encoding question and the encoding thing doesn't give any of the serialization benefits doesn't like it just doesn't
[02:01:52]  matter yeah same reason why page load is why i i work really big on granular caches and solid we almost have like tan stack query built in to start essentially um because
[02:02:15]  now the invalidation can happen from the client side and it's much much much much more granular that way yeah yeah well and it's like what are you using to cache your
[02:02:34]  data like yeah i think the remix works this is this is this is this is this is like so hard because remix looks really good on crud pages like but when i
[02:02:47] 'm building yeah it's like there's these zones it's like astro is like encroaching on remix's area like more readily every single day and then remix is really
[02:03:01]  good when you like and then next rcs and scale past that easier i mean both based the way to get out of it in remix and the way to get out of
[02:03:11]  it in next is the same which is like screw your loader stuff and do my own stuff but then it's like why are you doing all this and it's two separate
[02:03:19]  things and the problem is it's the i call it the mutation cycle problem like you have to get back to the root if you mutate something you have to go back to
[02:03:27]  the root of the data fetching and if that's like you have to close the cycle it's it's really awkward yeah i know don't you wish you're using
[02:03:43]  solid start i don't always say that but yes that's the thing because this is the problem i had with the cash headers approach it is interesting though this is this is
[02:04:02]  why i didn't want to batch my requests people were like you should batch the requests going out and i'm like then how do i cache them i mean i guess the page
[02:04:10]  might be good enough but i i the approach that we took in solid start to uh key based cache on the client could also work with something like netlify cache headers
[02:04:24]  i mean you could do it like because i guess the initial fetch is the whole we can't but it's ssr so if it's ssr we don't
[02:04:35]  need like like basically if you render data on the page and then on during the server and then serialize over the client your client caches in javascript will be
[02:04:48]  evaluated but the browser has no idea of those api requests because they're they're not from the browser so and then if you update a query parameter that only causes one thing
[02:04:59]  to fetch from the client we're not going to rerun all your loaders we're literally going to update the one piece of data that you need to fetch um when
[02:05:08]  it goes to the server uh at that point obviously client cache handles but we could also at that point for that query um cdn cache it and then if a mutation would
[02:05:22]  change that specific query um we could uh cdn and validate it as well on the server inside the action so like yeah it's it's imperfect in all cases but
[02:05:42]  it's you can you can do you can do a decent java cdn caching with the granular kb approach we've taken anyway i should quote that uh anyway
[02:05:56]  um yeah it's it's yeah it's i i i think we're done with this q topic let's go next one hmm okay let's get back right into the
[02:06:16]  deep of hydration i i want to try an experiment and let's just code it live on stream if we can no that's not what i'm looking for but i have
[02:06:30]  so many windows open sorry hacker news no no no no okay okay no um i want to open i might have to start a new project see i was going to do this with
[02:06:50]  react but what what i wanted to do was what's it's like i started wondering like what my examples are like source components what's in here counter tsx is this
[02:07:04]  a react project or uh or a solid project this is this is this what this is a solid start astro project never mind never mind i was just hoping that i could
[02:07:26]  shortcut my my work here but i might have cleaned up most of my examples oh no astro solid hacker news what what i want to do is is is i want to
[02:07:45]  yes this is exactly what i'm looking for i remember on stream like a year ago we were playing with astro and solid right and we added the view transition api and
[02:08:01]  i i was trying to like all these interesting decision points stuff and to kind of show broken hydration and i want to revisit this because this has bugged me for a while
[02:08:21]  and i i want to what i want to do is i want to update astro to the latest stuff 832 let's see if we can update our hacker news example
[02:08:35]  and then from there we'll we'll kind of go okay okay 832 we're going to use solid 1.8 point 19 what version of astro are we on
[02:08:52]  4 4 3 1 2 2 is that right no 4 1 3 4 13 2 doesn't matter and astro is on 4 4 okay there's a chance this app won
[02:09:12] 't just update right away but let's let's just let's just let's just do this you know we can't even trust the walk files let's just get rid of
[02:09:25]  package lock json let's remove node modules okay my fan turn off yeah my fan getting hot in here two seconds much better let's let's actually use pmp uh
[02:09:54]  pnpm yeah all right now what i want to do here is first let's see if our let's do what is it dev yet or start let's just get
[02:10:16]  our hacker news example working again and i should make sure that i'm not running any other solid hacker news examples at the same time so it probably am oh yeah they're
[02:10:28]  on a different port anyways okay localhost four three two one beautiful hacker news demo page view page transition lovely anyway okay and then if i'm ready if i'm right we did
[02:10:52]  stuff like this test yeah we were looking at the nature of of of of when server rendered stuff happens and the reason this is relevant is that yeah yeah what did i
[02:11:18]  do here test and test two oh right right right it's because ah test two is where we want to be and when you click test okay i don't remember this example
[02:11:35]  we'll just use this simple setup to get ourselves set up again because i want to i want to look at what did i set up okay we set up a global signal that
[02:11:47]  has a count on it we don't care about that okay so global signal that has a count on it okay and then in components we have layout what's layout to okay
[02:12:04]  this is just for our demo page okay don't care about it okay we have our other component our other component is very important because if count is bigger than five we're
[02:12:22]  going to say too big okay other let's let's make this an h12 yeah i'm trying to remember what the decision component was for i care more about other component
[02:12:51]  this is this is there's one component that's like this and then there's the counter that increments we're just using we grab our signal and we use it to update
[02:13:00]  a counter okay and then let's go back to our pages okay looks like i was doing some great experiments here i want it's funny this this feels like backwards to
[02:13:39]  me i'm gonna ignore the decision component we don't need the decision component anymore yeah i'm not i'm not doing decision we're just gonna we're just gonna this is
[02:13:50]  this is our basic component count bigger than five count okay and then we have two pages we have a page that is basically just a link and a counter yeah that's right
[02:14:09]  a link and a counter i like do we even need a page to do this does astro astro has a way of uh of um hydrating something off the screen
[02:14:26]  right like is it like client view astro load idle visible client visible that's what i want okay let's let's let's let's this this is much funnier
[02:14:56]  than trying to do view transitions right now we don't care about view transitions anything that would break under view transitions is going to also break under here so we're gonna we're
[02:15:07]  gonna we're gonna go client visible here. I have to use solid to show this, although this should break literally everything. And then we'll do something. This is
[02:15:27]  like a trick that I can't remember the exact CSS code I want to do here, but misco used to use this all the time to show quick. Like you
[02:15:41]  put a clock off the screen. That's what I'm trying to do here. Can I do like something like this? Let's go test two. That's not
[02:16:02]  it. Okay. What's our counter component doing? So I can remember what it does. Okay. 100 VH. Okay. Yeah. Okay. Thanks guys. Tell
[02:16:22]  how much time I spend on this stuff these days. Yeah. Not that one. Test two. Yeah. 100 VH. Sweet. So why am I, what
[02:16:39] 's going on here? All right. I have to tell my counter to hydrate. All right. Client load. Okay. Sweet. So have it shows one
[02:17:00]  down there. Click it three times, seven times, two big nine. Okay. Okay. So what we're going to this. I'm just going to adjust this
[02:17:10]  so it's more visible. Our layout sucks. We need to like just do something here. I don't know. File. Padding. Padding. I don
[02:17:25] 't care. Just bugging me. Okay. So I I've refreshed year one. I click here. And then two big eight. Okay. But if I do.
[02:17:41]  Okay. We need a console log. We need a console log in our component. Our counter. We'll console log. Hydrate. Counter. Sorry. Counter.
[02:17:58]  And we'll put a. Inside our other component. We will put. Hydrate. Other. Okay. Okay. Sweet. So. Hydrate counter. Hydrate
[02:18:18]  other. Sweet. Right? One, two, three, four, five, six, seven, eight, nine, 10. Screw up. Uh oh. Hydration error
[02:18:31] . Right? And this doesn't have to happen from scrolling. It could happen from. View page navigation. Problem is we shared state. We updated the state. We
[02:18:47]  go to hydrate it. And it's broken. Now. If. This was simply just a matter of delaying the hydration. Solid has event replaying. So like
[02:19:04]  I, I think once we broke. Astro's. Hydration timing somehow. Like. If we. If I went into. Let's. Let's see if
[02:19:22]  I can do this. If I went into solid. And I purposely. Delayed hydration. Like 100 milliseconds or something. Yeah. Yeah. Let me see if I
[02:19:36]  can do this. Solid JS. Web. Dist. Dev. And then I went like. Found the hydrate call. I think there should be another one. Another hyd
[02:19:57] rate call. Yeah. This one. Enable hydration. If I just went something like. Set time out. Oh. Arrow function. Oh no. This is fine
[02:20:09] . Because I'm not taking actual arguments. Okay. Two seconds. And then. Let's let's just. Make sure that there is no V cache or anything.
[02:20:26]  I don't know if Astro has their own cache. Okay. If we do this. We refresh the page. And then I click like a bunch of times.
[02:20:34]  You can see the delayed hydration. Right. So I go there. And I go click, click, click, click, click, click. After counter. We're nine
[02:20:42] . Right. I need to make this page bigger. Okay. Let's try this again. One, two, three, four, five, six, seven, eight.
[02:20:51]  Right. So this is, this is what I was talking about. Like with event playback. We, in fact, we can like, you could, we can collect
[02:21:02]  this stuff before it even happens. The problem is, guess what happens when I scroll down? Oh, did I screw up? Oh. Hydration error. Because this was
[02:21:12]  rendered as a one from the server, but it thinks that it should show too big eight. It doesn't matter if it was initially rendered from the server. Or if
[02:21:24]  you navigated to it. Right. So this, this was bugging me a bit. So I actually. I was like. This is so easy to reproduce. You
[02:21:39]  literally try and build anything non trivial, like from an app stance. And you're going to basically be broken immediately. So I was like, I tried to, I tried
[02:21:48]  to do something. I tried to fix this in solid one in new solid. Even though it feels like it's kind of on Astro side. I was like,
[02:21:56]  what if I was responsible for the hydration on our side? What if. What if. I already told you once hydration is done, hydration is done. What if.
[02:22:05]  What if we made it so that. Oh, I have. That this actually worked. Let's try that again. Hydrate counter. I'm updating the count.
[02:22:21]  I have to add back in the delay if we want to actually see what's going on. one. But let's let's do that again. Because I at first
[02:22:47] , as I said, I was very quick to blame Astro for this behavior. Because like they're the kind of the ones causing this by introducing APIs without considering the
[02:22:56]  implications that you can't update state with hydration. It's not not fair to put this on the developer. But then I was like, you know what? We have that
[02:23:05]  script that sits on the page that plays back events. We can kind of know that when certain. people interact with the page that hydration is done without being as smart as
[02:23:16]  quick, knowing exactly which graph we can just kind of bail out early. So why don't we just like. Make it so that. We can refresh the page. Okay
[02:23:27] , now I need to restart the server with my hack. Let's remove beat. Let's start again. You know, the way that react solves this is the only
[02:23:45]  client render. Client components after the fact. They never server render them again, right? That's how react fundamentally solves this. I was like. You see, you
[02:24:02]  see what happened. All I did was say that once we know the hydration is dead. We client render it. We just know that there's no point trying to hyd
[02:24:15] rate it. Such a simple thing. But we know from the fact that you interacted with it. And the funny thing is hydration isn't dead. Until. We actually hyd
[02:24:24] rate this component. The whole time that this is going and I do these clicks. Hydration isn't dead at that point. That was the bug in solid. In solid
[02:24:34]  before the second that. Um, you interacted with it. Once it started hydrating. If there's like lazy components and stuff. Before it would like the events.
[02:24:44]  Listener would be attached. And it would start trying to run the code. And at that point. It would go, okay. Hydrations over. But I decided.
[02:24:52]  I, I, I fixed the bug. And now that it defers until the section where the button exists. Hydrates. At that point. We cancel hydration. So
[02:25:00]  you can't cancel yourself. So to speak. And this basically solved my problem. Of course. It's showing the wrong content. Until, until it can client render
[02:25:10]  it. Because I delayed hydration. Right. But, but we don't get a hydration error anymore. And as I said, the delay is the secret to it.
[02:25:22]  So where I'm getting to here is now I've kind of taken it out of Astro's hands. Essentially. To, to mess, to mess with things. Okay
[02:25:39] . So even though Astro might try to lazy hydrate stuff. We're like, no, we've detected that you've updated state. Hydration's off the
[02:25:49]  table. Which as I said, it's. Means that lazy in Astro might not be the most use or visible or some of the other ones. But at least you
[02:25:57] 're not going to. Like end up with a hydration error. And the reason that I did this is that more importantly. I showed the scroll version of this. I want
[02:26:11]  to make, I want to, I actually haven't tested this part yet. This is kind of one of the things I wanted to play around with. Was what if
[02:26:17]  these components are on two separate pages. And your view transitioning between them. So. What if. We persist the counter. Right. Between both pages. And then we
[02:26:46]  move the other component. Not down here. We just move it. To the other page. Just easier. Just easier. Just to grab. In here. Why is
[02:27:16]  it? Okay. So. Same. Busted scenario. Right. Instead of scrolling down the hydrate. It's the next page to hydrate. Right. If
[02:27:40]  I went back. And. Change solid back to 19. And I said, this is not solid specific. This is literally just how hydration. Works. And then.
[02:28:02]  I go to two. That works. Because the state didn't change. Right. But if. If I was here. And then I went. One, two, three
[02:28:14] , four, five, six, seven, eight, nine, 10. Then I switch. Hydration error. Are we still delaying the hydration? Sorry. Yeah
[02:28:43] . Okay. That's actually not a good sign. So here. Go to two. What do I. I miss. Why is it taking so long to. Hyd
[02:28:57] rate counter. What's going on. So do we. Do we already have dev open. Okay. So. I think. This is just an example of where
[02:29:44]  it's like. Didn't freaking listen to me. And install it. Okay. Yeah. Yeah. There we go. Hydrate counter right away. Go to test
[02:30:13] . Works. If we go back. See the view transition. And I go. One, two, three, four, five, six, seven, eight, nine.
[02:30:24]  Then click test. Okay. Okay. Fortunately, we get a hydration error, right? Unsurprisingly, as I said, any JavaScript framework is going to get.
[02:30:35]  This is not solid specific. If you try to hydrate after you change state, your stuff's broken. This is react. Same thing. I, I just can't
[02:30:40]  show global state and react very easily because react doesn't really have global state and Astro. I don't think supports context for react through islands. I've been meaning to
[02:30:50]  support that in Astro through solid. I did that in solid start, so it wouldn't be too hard, but. Okay. So then what. I did all
[02:30:57]  that so that. We can try this demo again in the latest solid. And see if this is actually passable UX. That's really what I want to see here because
[02:31:08]  I'm hoping. First of all, basic. Example. Test works nice, smooth transition with the view transition API. Then. Refresh. And then I'm
[02:31:19]  going to one, two, three, four, five, six, seven, eight, nine. I got to see that again. Like it's, I'm kind of
[02:31:28]  wondering if, if, if, if we see the one flicker for a moment. I wonder if the transition is just hiding it. I mean, that's,
[02:31:40]  that seems, that seems, that seems good. Um, right. What I did, what we essentially did was make. React server components for Astro. Right.
[02:31:53]  Like a really. Dumb version of them comparatively perhaps, but we, we, we like without Astro is doing solid just automatically handles that case. That's kind
[02:32:05]  of what I'm going here is what I'm going to do is I'm going to turn off the view, trying to for a moment and see like how visibly
[02:32:12]  obvious this is. OK, so there. But. OK, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 transition. All
[02:32:20]  right, because we don't preserve state. You're right, this is only a view transition thing, so it's not that I want to turn off view transitions. Can
[02:32:29]  I change what the default animation is? Yeah, except the biggest. Except like, yes, I guess you could you could view it like that. But what I'm
[02:32:46]  getting at is like the biggest like I guess I'm probably the one most worked up about this, but like. This was brittle and broken from my perspective, like not like
[02:33:01] , oh, yeah, that's an edge case, no, like like this is unusable for these use cases, like like very, very bad. Like unaccept
[02:33:12] ably bad. And it's one of those examples where Astro can do only so much and the and the framework isn't incentivized to play nice with Astro. So
[02:33:24]  the stuff is just fundamentally broken and people act like it isn't or they don't hit it right away. but this is busted behavior and it bugged me. So
[02:33:34]  that's that's that's why I was fixing a bug. And I realized I was like, wait, does this actually fix the Astro problem? And it does because
[02:33:43]  I, you know, as frameworks take these hydration things more into consideration, you know, they have to account for these kind of things. I said quick likely works under
[02:33:58]  the scenario likely because they will actually they quick would work under my page scroll scenario. I don't know if quick would work under my view view transition scenario because it's
[02:34:16]  like I think they might because they might just like circumvent after all together mostly, but like quick itself works. But I'm in quick and Astro like quick it's
[02:34:25]  handles is fine. I'm just mean because they account for state. I'm talking about quick and Astro. yeah, yeah, I mean, yeah, or S
[02:34:36] velte or like view potentially like to be fair, they could probably implement something similar, but it just occurred to me that this this is just another reason why using solid with
[02:34:49]  Astro, you know, I continue to kind of push along. Like when we add the context API, I think you could almost build apps with this, right? Which
[02:34:59]  was the goal here. I I mean, this, this, this thing, this is so much simpler than RSCs that like, it's almost. It's
[02:35:11]  almost worth bringing back experimental islands router just to like. Like make this work. I mean, it's it's like the dumbest approach. I don't know if it
[02:35:20]  scales. This is why I wanted to play around with this because it's like, what if it wasn't like? Is there a way is there a way to set what
[02:35:29]  the transition is like? because right now it's like a simple fade. Can I say like no transition or something? Astro view transition. No animation. That's
[02:35:47]  what I want. That's what I want. Fade slide in none, none. OK, so how do I how do I say none? Thank you.
[02:36:29]  Transition animate. Yes, okay. That's exactly what I want. It's because I don't want that to distract from what we're testing here, you know
[02:37:07]  what I mean? I mean, this all looks nice and smooth. But what I want to do is see, I mean, it's fast. Okay, what if
[02:37:19]  this HTML difference is substantial? What if, um, let's use something big and colored to do this. Um, where's our other component? Yeah. What if
[02:37:35]  instead of like putting this, what if we did something like make a div that? I don't know, I don't know, style with. It's big
[02:37:55]  enough 500 height, 500 pixels. Color. I guess background. color. I guess. I guess. I guess. I guess. I guess. green.
[02:38:17]  Green. Green. Red. Green. Red. I mean, I guess to our merit, this is not, uh, switching a color isn't even, I
[02:39:01]  mean, you can see it, it flickers, you see a red green flash, um, I wonder if the default though, with the fade, just like mass
[02:39:24]  this enough, you know what I mean? Like. Okay. Doesn't tell. Yeah. Yeah. Okay. Fair enough. Okay. But yeah, I, I
[02:39:39] , I, it just occurred to me like, yeah, it's just. I, I, this is the same thing where you should be able to tell from your
[02:39:52] , your code. If a hydration error is like, it should be very obvious. It shouldn't be like an incidental behavior. And. Astro's just like
[02:39:55] , oh, don't worry. Like in a sense, it's like, you can use any weapon you want with us, you know, like, here's a basket
[02:39:56]  of loaded guns. Go, go to it. Um. Um, I, I need it. It's probably good that I've built the same thing. Yeah
[02:40:01] . Um, yeah, it's just, I, I, this is the same thing where you should be able to tell from your, your code. If a hydration error
[02:40:05]  is like, it should be very obvious. It shouldn't be like an incidental behavior. And Astro's just like, oh, don't worry. Like in
[02:40:11]  a sense, it's like, you can use any weapon you want with us. You know, like, here's a basket of loaded guns. Go, go to it
[02:40:23] . Um, I, I need it. It's probably good that I've built the safety into solid, so to speak. Um, rather than, you know, before
[02:40:33]  I was just like, why are you guys, why are you guys handing out loaded guns? Um, so yeah, I don't know. It's not, it
[02:40:44] 's, it's, this is not rocket science, but this is the, the thing is. Technically speaking, I could picture an implementation that had like a little bit more
[02:40:54]  internal knowledge where we could actually do the flicker off screen and then put it in like what we're doing with the server islands and solid. So like. Um,
[02:41:09]  yeah, it's, I mean, this is not an ideal thing because you're actually rendering the wrong components on the server, but this is like the no effort on your
[02:41:18]  part, make it work thing. you, you understand the problem, right? Like for a lot of conditions though, it's not going to be that drastic of a
[02:41:31]  thing. Right? Right. So like, obviously like if we were just changing the count of one text node, solid is not going to hydration error even before.
[02:41:41]  And now you're actually doing more work because you're actually re-rendering the div and stuff. But it's like, this is just a safe default. Um,
[02:41:48]  I don't know. That's, that's, that's a, that's a successful experiment from my perspective. Okay, cool. Yeah. I don't know
[02:41:56]  if you highlight that. It's always simple, better, but after time sold in the sport. Yeah. I mean, this is, this is a safety net. I
[02:42:00]  don't think you should lean on it too much maybe, but I guess if I give you the safety net, then it works, right? So many people are going to
[02:42:02]  hit less hydration errors now. It's always simple, better, but after I'm selling this for you. I mean, this is a safety net. I don't
[02:42:10]  think you should lean on it too much, maybe, but I guess if I give you the safety net, then it works, right? So many people are going to hit
[02:42:16]  less hydration errors now. Anyway, that's next. What's next on the list? Okay. Astro. Okay, I have two more topics. Okay. All
[02:42:36]  right. We're going good today. Yeah. Yeah. I mean, the first part of the stream, I was basically showing why you don't even need islands for a
[02:42:54]  lot of things. And if your stuff's interactive, you should just use like an interactive framework and not bother with this. But if Astro fits your place in the
[02:43:03]  world, like your zen, right? Like, and you're just like making HTML pages, you don't care about nested routing and all that fancy stuff. And
[02:43:13]  you just want to put a view transition API on the page. And you're like, oh, I've got some signals that I want to update stuff with and I
[02:43:21]  don't want all my app to break. Like, here you go. So, this is my gift to you. So, this is my gift to you.
[02:43:28]  Right. So, this is my gift to you. So, this is my gift to you. So, this is my gift to you. So, this is my
[02:43:35]  gift to you. So, this is my gift to you. So, this is my gift to you. So, this is my gift to you. So, this is
[02:43:38]  my gift to you. So, this is my gift to you. So, this is my gift to you. So, this is my gift to you. So, this
[02:43:41]  is my gift to you. So, this is my gift to you. Definitely have lower viewership. We're only getting, you know, peeking around, like
[02:43:46] , just over 100, 110. It's not like the, you know, 180, 200 streams that you get to in the rest of the year. But I do appreciate
[02:43:53]  you all being here. Liking really helps after the fact playback. So, thank you. Didn't miss too much. No, the last couple streams, I feel like
[02:44:05]  have been jam-packed. I'm coming in with focus. So, maybe you did miss some stuff. But not too hard to catch up on. It's
[02:44:12]  been really fun to dig into stuff again. And, yes, Dev, that's one of my two topics. I got one topic to hit before that, though. So
[02:44:23] , let's do it. And that next topic is, as I mentioned, I saw this stuff. Because I was watching Theo stream the other day, as I tend to
[02:44:33]  do from time to time, when I'm not too busy doing, you know, benchmarking or something that's really focused, heavy. Or attention focused, heavy.
[02:44:43]  But he, one of my bookmarks I had here, he said something on his stream. He almost, he basically threatened to, he basically threatened to boot someone out of
[02:44:57]  his chat. If, because he was showing some kind of library and they're like, well, why do you use that if you can just do in 10 lines of
[02:45:04]  JavaScript? And he's like, you know, blah, blah, blah. And he's like, he's like, you got 30 minutes. If you don't
[02:45:09]  come back with your 10 line, I think, drag and drop library, then, you know, you're banned, essentially. He's like, I'm tired of people
[02:45:19]  saying this garbage during the, you know, you're in the middle of the stream, acting like, you know, you know. And it's like, it's so
[02:45:27]  funny because some people were like, oh, can I do that challenge too? And it's like, sure, go ahead. You know what I mean? It's
[02:45:34]  not the point, but there is a cost to size. It takes very careful consideration to kind of figure out, you know, what you're like, you could do the
[02:45:51]  basic thing, you know, like the old, I think I said, like, you can write a JavaScript framework over a weekend, but like maintaining it or like having it
[02:46:01]  do more than like a single benchmark is going to do. It's going to take, you know, endless amount of time. Trust me. I was there that the
[02:46:12]  guy didn't come back with the code. Yeah, no, he didn't. Someone else came back with an example. It was more than 10 lines. It was like
[02:46:24]  40 lines of code. The other guy did. He took the challenge and it took him about 40 minutes, but still like good on you. Like, it's fun to
[02:46:31]  do the exercise, but the original guy just left. Yeah. Oh, hopefully a primogen fan. You guys are brutal. Yeah, yeah, exactly. Yeah,
[02:46:40]  exactly. Yeah. Yeah, exactly. This is why, you know, tree shaking. You're never going to win. And here's the thing that's the most challenging
[02:46:51]  about this is because you start from a perspective and there's a philosophy behind your perspective. And you've got to stick to it because that's why people bought into it
[02:47:00] . Solid at some point got bigger than solid was at a previous point. Archery shaking still is incredible. But I remember at one point someone noticed their bundle size g
[02:47:09] zipped went up 0.7 kilobytes. Like under one kilobyte, it went bigger. And they were just like furious with me. And it was
[02:47:22]  like, I mean, I had good reason. It's you add features, you fix bugs, stuff happens. You try your best to keep it. But he was
[02:47:30]  very, very upset that we made his bundle size almost a kilobyte bigger. And I remember thinking like, I mean, part of it was because the promise of solid
[02:47:44]  was as incredibly fast, incredibly small. So people like felt like this is something they could identify with. And if I, you know, started catering to other things
[02:47:54]  or making it more general or whatever, I'd kind of moved away from that. There's a small library, a lot of libraries in the Preact ecosystem are like this
[02:48:02] . I got big respect for this, the small size of stuff in the Preact ecosystem, like the style solution. That was like our blessed style solution for a while there
[02:48:10] . One of the CSS and JS solutions. I think it was like, again, like a kilobyte in size in total, and they actually put bounties
[02:48:18]  on people shrinking the code size of the of the library. So it's a good culture to have on a certain sense. But then it's also like. People use your
[02:48:28]  framework, you know, there's going to be some variance. Yeah, if if solid when if if solid's portion of contribution to your simple site that didn't use
[02:48:39]  advanced features went from like around 4K to suddenly being like 10K, I'd be concerned. But if if if it went from 4 to 4.5, you know
[02:48:48] , over a year or so, like it happens, you know, I mean, putting in the spectrum of like React, you know, in the 40s, you know
[02:48:57] , you're still trying to do a lot, right? I mean, you're still trying to do a lot of stuff. I mean, you're still trying to
[02:49:05]  do a lot of stuff. I mean, I mean, you're still trying to do a lot of stuff. I mean, you're still trying to do a lot of
[02:49:07]  stuff. You're trying to do a lot of stuff. I mean, you're trying to do a lot of stuff. You're trying to do a lot of stuff.
[02:49:11]  I mean, you're trying to do a lot of stuff. I mean, you're trying to do a lot of stuff. I mean, you're trying to do a
[02:49:13]  lot of stuff. You're trying to do a lot of stuff. I mean, you're trying to do a lot of stuff. You're trying to do a lot of
[02:49:16]  stuff. You're trying to do a lot of stuff. I mean, you're trying to do a lot of stuff. Yeah, I mean, everyone likes to have
[02:49:35]  the benefit then, like, obviously. So you buy into that. If solid suddenly become really slow, people will be disappointed, right? If you set the expectation low
[02:49:45]  to begin with, then you're kind of fine, right? Like, react always kind of set the expectation low. Other people hyped it up. But the react team was
[02:49:50]  like, look, we just re-render everything. I mean, it's hard to disappoint people when you read out the gate, say, like, look, we're
[02:49:57]  slow, right? But it doesn't really matter. That was kind of like their argument. But it's hard to kind of leave that perception. And so I was,
[02:50:10]  I was, this is all not because of that. This built up to, I was, I was like, you know, framework, benchmark. I get notification for
[02:50:18]  certain repos. Oh, geez, benchmarks, benchmark. All right, it's crossest. Just JS framework benchmark. Yeah, thanks. OK, so I got a
[02:50:30]  notification come in on a pull request and I, I saw this. Add, oh no, client side benchmarks. And I was like, what the hell is going on
[02:50:41]  here? Oh, no. Isn't that like that express light thing? Kind of like H3 library. Yeah. So I think it's tough to care about bundle sets
[02:50:57] . I wrote a solid F is under 20 KB. I was so happy. I wanted to drop menu. So if one cobalt and it shot over a
[02:51:01]  hundred KB. Yeah. Some things are expensive. Three made components that handle all the accessibility properly and all that stuff. It's hard to get small and hard to get
[02:51:11] , you know, like it is there. It's hard. Component libraries are generally hard. I don't know if the logic. Size, you know, like
[02:51:23]  hopefully there's good tree shaking on a per component basis. And if not, that's something that you'll address with them, but like general. Yeah. Like one drop
[02:51:31]  down a hundred KB seems a lot, but like in general, you will pay the cost for, because a lot of those libraries have shared pieces that like you're,
[02:51:40]  I imagine you're up at least 30 or 40 kilobytes. If you add anything to your page, that's like that. A library. I reuse recently update
[02:51:56]  Cosmic Commuter every language in the sun, including a few can be insane. Yeah, that would be crazy. Right. So anyway, something. So yeah,
[02:52:04]  I, I know, I mean, yeah, from, uh, um, round the community benchmark solid stuff. So they, they decided to add the Hono implementation and
[02:52:17]  I, and they decided to compare it to solid. They could have compared it to vanilla, but it was like, it actually didn't finish running. I think, which
[02:52:24]  is actually the problem. And it was like the, basically the slowest thing I've ever seen in this benchmark, according to this. So this is a local run
[02:52:35]  computer. And I was like, what, what is this? So I was like, okay, let's, let's first take a look. Oh no. GSX
[02:52:42]  client components. Okay. Hono GSX supports not only server side, but also client side. This means that it's possible to interact with UI that runs in the browser
[02:52:51] . We call it client components or Hono GSX DOM. Is fast, very small kind of program to hone is only 2.8 kilobytes of broadly compression
[02:52:58] , but 47.8 in react or probably four. Actually, if it's just a counter. It's probably about three and a half kilobytes in solid and about
[02:53:11]  this preact. I don't know if it tree shakes as well, but around the same kind of zone, around four kilobytes felt can probably make it about 2
[02:53:19] .5. Just give you kind of with their compiler to give you the kind of idea here, but. I did not realize that Hono was in the client side
[02:53:29] . Library side. Cause building a client side framework. I'm sorry, you guys. I, I, it seems appropriate to bring up Theo's tweet again. Like.
[02:53:45]  Oh, it must be easy. Right. So like, I mean, this is impressive. They actually mock all of react. So this is like, not just.
[02:53:58]  React. And like, uh, like preact has re react compat so that like if some of these features they don't implement and the other ones are basically just shelled
[02:54:07]  over. And that's like an extra four kilobytes. So in the end, preact comes about eight kilobytes. If you want like the full react
[02:54:12]  version, these guys are like, you know, obviously the counter doesn't use all those features. So it's probably tree shaking pretty aggressively, but this is a pretty,
[02:54:19]  you know. Yeah, I mean, I'm sure authoring it would be easier, easy enough. Yeah. It's just, it's just interesting to me that
[02:54:34]  there's a reason, you know, there are frameworks out there that people are building on this stuff to introduce your own client side framework. I think Astro was tempted
[02:54:44]  to do this at one point too. You're so you're freaking crazy. Um, unless like, I know this is for him, you're kind of crazy. Anyways
[02:54:55] , um, they've built a client side framework, apparently. And I, I want to see if this is true, like have they has blazer finally, you know
[02:55:11] , passed on the crown. Um. Right. Blazer is notorious on our stream as basically the slowest framework that I've ever had the privilege of running in my
[02:55:30]  browser. So slow that Selma's. Lighthouse score things. Where, you know, in that article that we talked about earlier, where you could hack lighthouse when L
[02:55:40] CP paints and all that blazer was so slow. Uh, several years ago, it's, it's improved since then that it was hacking lighthouse without even intending
[02:55:49]  to. Um, So if you've seen that video, you know, you know what I'm talking about. Like it literally would fool Google Chrome to thinking that it
[02:55:57]  was painted when it hadn't painted anything. It was, it was that slow. And it looks like from these, although I don't know if I trust this, that
[02:56:06]  Hano is actually going to be competing with blazer. So I am, I mean, I, I, we've had some, you know, backend oriented,
[02:56:15]  uh, component, uh, sorry, not this one, uh, front-end stuff before in the past. Um, one of, I think Alpine JS was one
[02:56:26]  of the, was one of the ones that, um, I ended up implementing at one point. Where's Alpine? Where's Alpine? Uh, someone remove
[02:56:39]  it. No, it's right here. There's Alpine right here, but this is, this is, this is pretty steep competition at this end of the graph,
[02:56:46]  right? Blazer clearly the winner, um, ahead of time losing slightly to the classic blazer, but like. The. I, I, I'm not,
[02:56:59]  the problem is I'm not going to run blazer locally. Um, it requires a bunch of stuff. I don't think I'm gonna try and benchmark it, but
[02:57:06]  I kind of want to see what's going on with this Hano thing. Like, why is it so slow? According to this, is it even slow? Is it
[02:57:13]  just the guy's computer? Let's find out. No, I, I would have said that would have been like a PM in like 2020. Wasm winner.
[02:57:37]  It's probably dioxis. It's pretty impressive library. Um. Just out of curiosity. Do, do, do, do, do, do. Block dom solid
[02:57:47] . Maverick Molina. Sinuous felt. The fact that. Both. No, actually, no, these are. Are these the same thing? I don't
[02:57:56]  know why they're in there twice. Inferno. Wasm bind gen. This is like, in theory, the fastest wasm can be. Like this is
[02:58:05]  like the core binding. So all these Jatsby frameworks are as fast as vanilla JS written. Awesome. And then let's keep on going. Um, hyper app
[02:58:16]  lit render. Where is it? I thought it was dioxis. I could have sworn it was dioxis. I don't know. Do light is spare. Is this
[02:58:26]  one wasm? We can actually tell by the. Sometimes you can tell it's wasm from the bundle size. Like if it's like 300 or something, it
[02:58:36] 's there's a chance that it's wasm. Um, I don't think scarlet frame is, but, but silken web, maybe spare QR. Maybe of
[02:58:48]  the ones that. Yeah. What's, what's going on? I don't see leptos or like dominators here and dominators. It's always been
[02:58:59]  here. Did I skip over? Like, cause what's dominator at? Yeah, 130. Yeah. Where's leptos? Where's there's sycamore
[02:59:07]  right here. Yeah. Left. They should be over here. What happened? Oh, there's a warning. Isn't there? Which frameworks? Are they there? D
[02:59:21] ioxis is there. Yeah. What's going on. Huh? Something has changed. Something has changed. I don't know why leptos is suddenly slower
[02:59:47]  than sycamore, according to this, but something has changed. According to this, Sycamore is, and dominator are probably the, I think like sycam
[03:00:00] ore. I think like sycamore. Yeah. This is weird. I don't know why. I thought Dioxis would be higher, but they,
[03:00:21]  they, they're like a VDOM library that recently added signals. And I was like, so you guys still VDOM? They're like, yes. So
[03:00:27]  they're kind of like preact. I don't know if that's the best path forward, but they added signals, which was interesting. Um, but yeah,
[03:00:36]  I don't know. It's interesting. This old view vapor thing is jumped back to, I don't know something. Yeah, I guess we'll, we'll
[03:00:46] , we'll, we'll see how, how this, how this comes out. It looks like some people have been finally doing alternative vanilla JS implementations. I need
[03:00:54]  to check these out because I wrote vanilla JS one and that's my knowledge of what's fast. It looks like someone has written vanilla JS light and has edged it out
[03:01:07] . So whatever this implementation is doing, it might know some secret that, that I don't know about how the DOM works. Um, these ones usually, I don't
[03:01:14]  know what sonnet is, but my guess is sonnet probably deserves a seven, seven, two. I'm, I'm pretty sure we'll, we'll see
[03:01:22] , but my, my guess is that this is not a, uh, declarative framework in the same sort of way. And then it needs to self-reference there
[03:01:33] 's, there's usually some catch when you have frameworks in that zone, but I have not seen that one yet. Usually this involves some sort of proxy like Mikado where
[03:01:47]  they're basically like one for one and updating the dom directly instead of using any kind of data projection. But anyway, interesting. But that's not what we're here
[03:01:58] . We want to check out Hono, right? Uh, or Hono, how do you say it? Does anyone know how to say it? Sorry, I didn
[03:02:13] 't mean to close that down. GS framework benchmark. I'm trying to think the best way to do it, we could try and run it locally, but that,
[03:02:27]  I guess I could pull down the specific PR, but my, I don't actually know. I could like go to this repo. It just, then I have
[03:02:43]  to like set everything up again, it's probably, probably fine. Let's just do that for now. Usually, what I would do is I just, oh,
[03:03:08]  I mean, this is such a brute force way of doing it. But if they'll just like, um, maybe I'll just like copy the folder into my already
[03:03:24]  set up folder. Yeah. Yeah. Yeah. I, I, I want to take a decent look, but let's, I want to spend a few minutes here
[03:03:42] . because I, my understanding, I did do a preliminary look is that it is a, um, how should I put it? I'm just going to take
[03:04:04]  the implementation right out of keyed and just drop it in my branch that they call it. Oh, I have, I have to, I have to actually check out the
[03:04:20]  specific. Is it? I think actually check out their specific branch, don't I? Um, is there, this is like when you, when I show my,
[03:04:32]  my weakness on the, on the command line here. Where was I? Um, is. What does it get? Get guys, just give me the git command. I
[03:04:50]  literally have been using this stuff forever. I just need to grab the Hano, Hano branch pronounced. Right. Okay. Ha no. Okay. Ha no.
[03:05:07]  All right. Perfect. All right. That hopefully will do what I need to do then. Frameworks keyed. Beautiful. Keyed. It's not going
[03:05:56]  to let me paste in here. Sometimes, sometimes, sometimes, Mac. Okay. That's fine. Whatever. Development. Not that one. The other one. Yes
[03:06:20] , framework, benchmark. Frameworks keyed. Can tell that I was originally a Windows user. That's that's all I'm going to say about this. Because at
[03:06:42]  the time it's taken me to navigate this, I could have just like literally done the CP command in the terminal. But you know. All right, let's open
[03:06:55]  this. Oh, you know, I already have this open another window. Of course I do. Four years of both. I never used the finder. Yeah.
[03:07:28]  Yeah, yeah, yeah, yeah, yeah, exactly. This is vanilla JS. It should be written as 772. Yeah. So, okay, then let's
[03:07:44]  figure out what's going on. So, first thing to do is verify that this is actually. Just messed up as we think it is. So I think. Let
[03:08:03] 's inspect the source code and make sure that we're not doing something dumb here. Okay, so this was a react compiler stream, right? That's where we were
[03:08:14]  running this last time. Let's look at this. This looks almost identical to the react implementation. That we've covered on streams a number of times before. Okay
[03:08:38] , so let's go back here and build and install on those to do. Okay, and then it's MPM I. MPM run. Build prod. Yeah
[03:09:08] , I'm going to assume that it's fine. Let's look at the build output of this. Format document. No, it's not going to give it
[03:09:23]  to me. Fair enough. Okay. Okay, so we're actually going to do see if they have a build command here. No, I was trying to see if they
[03:09:34]  had a version of it. Let's see the using beat and we tell it to not minify. I'm trying to remember if there's an option for this.
[03:09:44]  It was like minify isn't build for all of options build minify balls or something. I just want to see what our output is doing. What's lovely about this
[03:10:00]  benchmark is you can usually get an idea of what the framework is doing. Like from a vanilla JS stance, because like the code framework all in for a small framework is
[03:10:09]  going to be like a thousand lines, maybe. You know, like 800,000 lines. So you can actually see. So right off the back JSX devs.
[03:10:19]  So this is the, this is the standard JSX transform. So they're probably just using a V DOM kind of set up. This is our user code. Okay.
[03:10:32]  New JSX node tag props. So that's their node format. Form action. Use callback. Okay. Some stuff that we probably don't need. That's
[03:10:44]  fine. What's this? On submit. Use callback. So yeah, they have their form action stuff all built in. It doesn't probably matter though. Style document
[03:10:56]  script. New JSX nodes. So, but everything's so this is like a pure JSX implementation. So much of the framework code in here. Yeah, this
[03:11:09]  isn't getting tree shaken, but I don't think that's going to matter here. It's about execution, not about loading time for this benchmark. build node bo
[03:11:18] olean boolean boolean boolean. I'd love to see if they have like a different patch function that you can actually see where they apply this stuff
[03:11:24] . Okay, I'm getting it. We have time to look at the code while this actually runs. So like, let's just. See, let's let's
[03:11:36]  just. Do that. Let's just let's just copy this into into another file. Let's just new text file because we're going to. Yeah, that's
[03:11:49]  fine. And then we're going to. Go back to building the prod build. And then do this. Okay. Now we should be back to normal. Yeah, okay
[03:12:03] . Beautiful. And then. Let's. NPM. Server is it? No. What was it? NPM. Might. It might just be NPM start
[03:12:21] . Server. Okay, so. First thing we can do is let's make sure that this is built properly. Let's try this. So this is a local host.
[03:12:35]  I think this is on 8080 and it's like. Oh, it's been so long. I don't even remember the. The. Might sound. Might say
[03:12:46]  don't actually on their website. GS framework benchmark. Web driver. It's like web driver TS. That's the folder. But yeah. That's the results.
[03:13:07]  I want. I want to see. Actually. I might be able to just go straight to frameworks. Heed. Oh, no. Why am I not seeing anything here
[03:13:30] ? Why is this not rendering anything? This is this is the. This is the first question. We should be asking ourselves here because. Okay, let me pick.
[03:13:55]  One of the other frameworks that does work. I might just. Solid. Yes. Okay. See, that's what happens when you don't do it. Don't
[03:14:08]  do correct route. Okay, so. No, my problem is not with this. My problem is something is out of date. Can from when I last run. Okay
[03:14:20] , frameworks keyed. Dist main. Why would it be looking there? That's. Odd. Okay, so my problems my setup not. Not that. Okay, it
[03:14:35] 's been a while since I've. It feels like it wasn't that long ago. I know we did the stream, but. Where is it? Terminal.
[03:14:55]  Yeah, this is this is kind of a little bit. I got to admit I'm a little bit. I'm a little bit surprised that I haven't. I
[03:15:05]  don't want to rebuild all now. This is. It's weird for this part to be the part that's airing out. 'cause it should just set up the
[03:15:17]  server CD server node index. And then it should be able to just. 'cause this this part doesn't require the the web driver. I don't think. What
[03:15:29] 's it putting on the page? Huh? That's too bad. Frameworks keyed. It's weird though. because like I haven't touched the top level.
[03:15:56]  Stuff since. Since we ran those react tests. Could rebase. It just it's annoying. It's just. What's what's my unedited file here?
[03:16:18]  You know, it's the one where I wanted to look at the source code. It's just kind of. Weird that the. It's literally can't find the
[03:16:30]  bundles. Which is so weird because it's like it renders the HTML. Like the. Like the. Like the. But then the bundles in the wrong
[03:16:39]  location. Just want to. I just want to see what's up with the solid version. just. So I'm vanity check that. Solid. Disc main. Disc
[03:17:04]  main. And then it's complaining that. This is this like a trailing slash problem. Like is this like a. Like this needs a slash at the end.
[03:17:19]  Oh yeah. Oh. We all have moments like that. Don't we? Okay. Sweet. Oh, it's real though. Hey, can you can you feel
[03:17:38]  that? Strict false is, is this, is this, is this something? Yeah, I mean, look, maybe we can solve the problem. What? St
[03:18:08] rict false. Um. I mean, this. I don't see any new Hono unless this is just like a joke. And I'm like overthinking it. It
[03:18:31]  looks like you just rendered the APIs. Okay. We're not going to debug yet. Now that stuff's working. We're going to just jump straight into. Bench
[03:18:41] marking it. We're in web driver TS. And we're going to run. Bench framework keyed. And we're going to run. Vanilla JS.
[03:18:53]  You know, I'm just going to run Hono right now. This isn't like our final results. Let's we're just, we're just, we're just
[03:19:08] . We're just wrapping it right. So let's see if this starts benching for me properly. If it does, we should start seeing windows popping up. Yeah
[03:19:20] . Beautiful. Okay. We're in action. Let's, let's just, let's just give this a quick run. All right. All right. Oh,
[03:19:37]  Hono strict false. If you don't want this slash problem. The thing is that it's not using Hono on the server. It's literally just testing the performance
[03:19:44]  of the client components. So. Yeah. We didn't actually check if all the operations work. So I'm almost interested in watching it. Cause you can actually see
[03:19:54]  all the tests running here. Cause now we're like, this is creating clear. And obviously this is like watching paint drive. Don't, don't get me wrong.
[03:20:01]  But we're not. If you have never watched these tests before, you can get it, get an idea of what they're doing. This is. This is create
[03:20:10]  and replace. See, it now counts up to 5,000. It goes. You just. Anyway, then this one will be deleting rows. Ryan watches these tests when
[03:20:27]  he can't sleep. It's like. Oh man. Yeah, I mean, it could be the person's local computer. I could notice the leg visually when testing
[03:20:51]  it against next to solid. But I mean. Which is, is a pretty poor sign, but I don't know if that means blazer slow. Right. We,
[03:21:05]  I mean, if we will, we'll see, depending on the results of this, we can decide where we want to go to next on this topic. But.
[03:21:11]  It's quite possible that. Like if we're in like beat on range, like react or whatever, I get the feeling that these guys are, would be fine if,
[03:21:24]  if their performance was the same as react. Because that's not really their focus. But yeah, I, the, the, the person who ran the test. That
[03:21:38]  it didn't finish. This is update every 10th row. This partial updates. One of my favorite tests. See the exclamation marks dance across the screen. But
[03:21:55]  it, I, I know I started this. Oh, it changed the focus. It's, it's now because I was on the other, my other screen. It
[03:22:04] 's now running it on the other screen. I'm, I'm, yeah, I don't know. This is select row. This is one of the hardest tests
[03:22:20]  for frameworks. No, I know Hono's good on backend. It's just like, if you're good at something, why would you do this to yourself? Right
[03:22:30] ? I guess they could be saying that about us. If we're good at front end, what, what, what business do we have on the backend? You know
[03:22:39] , fair enough. You know, but it's, I, I have noticed a trend with stuff like stimulus and Alpine. And I, I started asking people, I
[03:22:58]  guess your point, like, like people swearing by that stuff. And I mean, like clearly if you used preacts felt solid, you'd be, you know
[03:23:10] , these guys care about shipping lots of JavaScript or the least they say they do. You'd, you'd be shipping like way less than, than, than these, you
[03:23:17]  know, lightweight frameworks. Like. Yeah. All right. What do we got next? Swapro. Well, it looks like the benchmarks might finish here. We
[03:23:36]  got jokes. If. Yeah. Probably. It's just. I, I get it. I, they already made a JSX processor for templating on the backend
[03:23:59] . So like, why not like bring it across. Right. The real memory intensive ones. See what I'm hoping the best result. The thing that I noticed was that
[03:24:19]  the person who ran the test their machine timed out. like, it couldn't do the, it couldn't do some of the tests. And. I'm, I
[03:24:34] 'm hoping. that it's like a memory leak, something that we can really obviously know notice and just fix. Right. And then that's, you know, you
[03:24:49]  can tell pretty easily on these tests when there's a memory leak involved and then you can usually find it. I mean, that's why these tests exist, right?
[03:24:58]  It's, it's not about the exact rank. It's so that you can see what you're doing inefficiently. It's so that you can see what you
[03:25:19]  can see. That's why you can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you
[03:25:22] 're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing.
[03:25:26]  You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see
[03:25:29]  what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're
[03:25:33]  doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing.
[03:25:38]  You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see
[03:25:42]  what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're
[03:25:47]  doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You
[03:25:51]  can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what
[03:25:55]  you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're
[03:26:08]  doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You
[03:26:12]  can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what
[03:26:16]  you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing
[03:26:21] . You can see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. You can
[03:26:25]  see what you're doing. You can see what you're doing. You can see what you're doing. You can see what you're doing. and warming up the
[03:26:38]  code paths. Which is not something you always have the benefit of doing, but I guess if you're here about update performance, this is better, but like how many times
[03:26:50]  is the actual problem that you navigate to a page for the first time? I guess network costs and stuff will outshadow that it's the okay. What are we doing
[03:27:01]  here? Are we on memory tests already? All right. All right, this is the only problem with running the benchmarks. It's like you don't really get to
[03:27:18]  do much right? Yeah, sorry. I haven't been off on the Twitch stream today. I missed any subs that might have come along. Yeah, I mean,
[03:27:39]  the buttons are basically what the benchmark is. It will say like create rows. Why is it running update 10th again? What is it doing? What is it doing
[03:27:48] ? The thing that I'm confused about is it seems to be running tests again that it already ran. It does run them for when it does memory though. So maybe
[03:27:56]  we're already on the memory test. It's just. Yeah. We're probably on the memory test. Yeah, we're probably on the memory test. Yeah
[03:28:01] , we're probably on the memory test. Is it going to create the 10,000 rows? Oh, man. Oh, man. Oh, man
[03:28:17] . Oh, man. Oh, man. What's going on? It's just, yeah, we're probably on the memory test. Is it going
[03:28:27]  to create the 10,000 rows? Oh, man. What's going on? There's a chance that my computer is just going to die mid, like, what
[03:28:57] 's, did I? Okay, no, no, I think it's done. Create 10,000 rows failed, and so did 26 run 10K. Okay,
[03:29:12]  okay, okay, well, let's just see if we can even create 10,000 rows with Hono. I haven't, we didn't actually test the button.
[03:29:23]  Does it work? Console. Maximum call stack exceeded. Okay, wait, wait, wait, wait, who the hell's console logging? What the, what the
[03:29:41] , is something, is there like debug code in here and it's slowing everything down? That's going to, that's going to piss me off because then it means our
[03:29:53]  test is basically garbage. I mean, it's, and it's in the row creation code. Okay. That's annoying. I mean, let's, let
[03:30:19] 's, let's, let's, let's look at the results while we're here, but. What was I going to, it's like NPM, NPM
[03:30:31]  run results, I think. But does that, yeah, we, we need to rebuild it without the console log. My guess is that the build and the build prod
[03:30:55]  commands are identical. Yeah, they are. Okay. That doesn't matter. What was the results table one, this one? Okay. Yeah. I mean. It
[03:31:22] 's definitely on pace. To beat blazer. What, what do we see here? Memory usage is high, but this doesn't indicate a leak actually. Cause.
[03:31:40]  The leak usually, if, if things just, if there's a leak. We usually see things growing in a more exponential way as you get further down the test.
[03:31:59]  If, if, if, if, if, if, if what I just did will help with that. No, it's a straight up call stack. Why is it
[03:32:13]  a call stack error? It's like the way it's like the way they recursively evaluate can't handle 10,000 rows. Well, let's remove.
[03:32:36]  Well, let's remove. Create 10,000 rows. Where is it? Create many rows. Hmm. I don't know. It's kind of just bad at everything
[03:32:56] . So it's like. Hmm. And it's, it's not necessarily a memory issue. It is heavy on memory. Like. This isn't a good sign
[03:33:10] . You'd like your, your ready memory. To be the same as you're. Creating clear memory. So there. There, there, there, there, there
[03:33:20] 's probably a memory leak here. Um. Now that I look at it closer. It's not a major one though. It's a small one. Probably. Like if
[03:33:33]  you look at these. There's always going to be a bit of a gap. But considering that it starts at basically vanilla. Yeah. I, I, I looked
[03:33:51]  at the source and it's, it's, it's a little bit convoluted for me to figure it out. Cause it's like, I, I've looked
[03:33:57]  at preact. I get it. I look at most of it on, I get it. You'd almost have to profile the runs of the specific functions to get a
[03:34:05]  better idea of what's going on here. Um. I, I, because. Yeah. It's interesting that replace rows. Is better than create rows, but like
[03:34:27] . Hmm. Yeah. I don't know. This. This is probably outside of the realm of which we will. I was hoping that I said to see a
[03:34:49]  very blatant, like one thing we can do is we can go to the memory tab here and we can create a, um, what do we want to do? Is
[03:35:01]  it heat snapshot? It's been a while since I use this. Um, let's see what happens. Okay. Okay. Yeah. Yeah. Yeah. Yeah.
[03:35:15]  That's where we want to be. Okay. Sweet. So let's refresh the page, create a heap snapshot, create a thousand rows, clear thousand rows, create another
[03:35:29]  heap snapshot, and then do a comparison between the, this one and the last one. And this will show you, um, what didn't get released like this,
[03:35:42]  this delta of things that didn't get released. Right. And the thing is, if you look. And do the same exercise in let's let's say, this
[03:35:53]  is how I initially optimize solid funnily enough, I was looking at the fastest frameworks in this benchmark. All right, trailing slash and then what I did was
[03:36:06] , I tried to see like what was necessary versus not necessary, right? Because then what you end up doing is, okay, so refresh, keep snapshot, create a thousand
[03:36:17]  rows, clear a thousand rows, keep snapshot. And then comparison, right? And then comparison, right? So there's certain things in the ways switched by delta,
[03:36:27]  certain things and gets at the thousand thousand is a magic number, there's certain things that like generally are harder to figure out what the hell's going on with, like the
[03:36:40]  system and compile code thing, but if you notice other than that, a few like random strings and stuff. And if we do this multiple times, you'll see that
[03:36:48]  this base compiled code, this is the only memory overhead. Right. Whereas if I look at the Hano example, we're not talking about a thousand, we're talking
[03:36:59]  about like 20,000 in this thing, like here's, here's, here's, here's our first problem. Dom elements aren't getting released. So yeah,
[03:37:09]  there's definitely a. Um. A memory leak, right? A memory leak, right? We have 15 html buttons that now have shown up, which is
[03:37:22]  odd because I don't think there are even 15 buttons on this page. Even when you put it, there's no buttons, but also you have html developments.
[03:37:31]  We have eight. What's going on here? Table rows. Six. These are very odd numbers. Okay. I'm going to, we're going to run one more
[03:37:41] , um, run. We're going to a thousand. Clear. Record. Okay. Okay. Maybe that's a better comparison. Let's compare this with our first
[03:37:54]  snapshot again. Okay. No, I know what we're going to do. We're going to refresh. We can go a thousand. Clear. Then we're going to
[03:38:03]  record a benchmark. Then we go a thousand. Clear. Record again. Record again. Beautiful. Okay. So this, this is better. Sorry. This is much
[03:38:13]  more. Sometimes there's garbage at the beginning. That's hard to handle. And then we're going to do Delta. Okay. Nevermind. Yeah. I, it
[03:38:24]  might not be a memory leak. Let me do the same thing here again. Sorry. Clear. So clip. Thousand. Clear. Benchmark. Thousand
[03:38:38] . Clear. Benchmark. Person. Yeah. See, this is just table scraps. There's nothing in the thousands. Similarly with the Hano example. It
[03:38:44] 's nothing huge. So memory on the a thousand rows is not really. Yeah. I don't think memory is their bottleneck. I, it seemed a little bit high
[03:38:51] , but it's also not leaking per se. So memory on the 1000 rows is not really, yeah, I don't think memory is their bottleneck. It seemed
[03:39:02]  a little bit high, but it's also not leaking per se. They just use more. Like each iteration is not causing more to happen. Yeah, I'm trying
[03:39:28]  to decide how far deep we want to go into this. Sorry, chat, how are you doing? No, I'm not gonna I'm not gonna run it again
[03:39:53] . You guys probably figured out. Thanks for creating rows. How exactly? Well, it looks like this. They're Dom. Like, I don't. I think they
[03:40:04]  have a function that's probably like process node. And then it's like. I mean, okay, let's see if we can find the problem. My guess is
[03:40:16]  that it's like, they have a function that recursively calls itself. And even then, like, how deep is this? This isn't deep. Yeah, that
[03:40:28] 's that's weird. Yeah, maybe I do have to check the source. Oh, yes, talking about the rest operator. Yeah, I mean, there's micro optim
[03:40:46] izations, but this is this is a whole different level. I mean, yeah, yeah, can we see a flame graph? That's that's that's essentially.
[03:40:51]  That's essentially. where we're where we're getting at here, right? We can. Let's let's see. Let's see where. Yeah, let's
[03:41:03]  do it side by side, right? Let's do. Let's see why a thousand rows is so slow. What happens when they create a thousand rows? Right, that
[03:41:17] 's what they do. That's what we do. Our task takes 31 milliseconds. Whole thing takes 73 but. And then, but the like the actual framework work non
[03:41:41]  paint work is about 31 about half of it in the whole example, it takes 300 milliseconds and the framework side of it is 300. Yeah, so this part's about
[03:41:49]  stack 50. So something they're doing here is just yeah. Okay, let's let's let's fine. We're doing it. Okay, fine. If this was
[03:42:01]  my project and I was debugging it, this is exactly what I do it going to beat and remove the minification. Fine. Let's do it. Build. I
[03:42:11]  would do this. Let's record. Let's create a thousand rows. Actually, you know what? Didn't like that. I wanna, I wanna. I wanna.
[03:42:24]  I wanna. Let's do it now. I wanna get the initial stuff out of the way. Okay, let's look. What am I doing here? Yeah,
[03:42:38]  so 350. It's way too long. Why am I so big? Request animation frame. Self time. Okay, well. That's something. You gotta look
[03:42:54]  at self time and total time. Total time is, is, you know, like, includes children and stuff. Self time is me, myself. So they are doing something
[03:43:07] , I think, very dumb on request animation frame. Because it's making up almost all the time of this thing. I don't. They're probably trying to do some
[03:43:17]  fancy queuing thing to simulate with how they think react works. But like, this is, this is an insane amount of time in request animation frame. Self time. It
[03:43:27] 's like, almost the whole thing, right? When I, when we look here, when we look at the bottom up graph, we see that. Layout, paint
[03:43:36] , like, where are we spending the most time? Oh, Grammarly check. Don't, don't like the Grammarly slow you down. Okay.
[03:43:48]  See, yeah, garbage collection. This is more typical. Okay. And then clone node. We spend one millisecond clone noting in this zone. That, that, that
[03:43:56] 's our JS costs guys. And then it's, you know, basically the whole cost of this operation is garbage collection. This is like, these are slow, find
[03:44:12]  insert before apply node. So their actual DOM operations are slow. Yeah. Let me see. Am I in the wrong? I'm on the wrong section. Sorry. Here
[03:44:22]  we go. This is better. Why is Grammarly in here? But yeah. Okay. Yeah. There, slow down. Let's, let's see who
[03:44:31]  calls it. Apply node object. Apply node object calls request animation frame. Apply node. Apply node object. Apply node. I think we're starting to see the recursion
[03:44:43]  guys. Apply node. Apply node object. Apply node. Apply node object. And each one of them requests animation frames. No, not each one of them. Only
[03:44:54]  the one at the end of the tree. Okay. So let's find our apply node object object. Let's, let's go in here. Oh no. Dist.
[03:45:08]  Where do we think it is? Do they have a dom? Actually should be able to tell from the. From the. This is. That's not it. Is
[03:45:24]  it? That's. Hano node server. I want. What's the name of the client package? Hano JSX. No, no at. Okay. So
[03:45:36]  it's not in that. It's. This. Can I just. It's not gonna be so nice. It's gonna take me to TypeScript. At least
[03:45:45] . Get me in the ballpark. Show. Can I just like to tell it to show to the left. Whatever. Okay. This types. Get. Okay. So
[03:46:05]  it's. It's. Okay. That's fine. that's fine. Oh no. Oh no. We have G. Oh no. Dist. GSX dom
[03:46:18] . Alright. I mean I could also just search for the function. I guess. But what was it called? Apply. Sorry. Apply node object. Yeah. Yes
[03:46:45] , because I kind of want to just go in here. You know what? We could also just. Easiest thing is we could just butcher. Forget the source. We
[03:46:53]  could just butcher the dist output, right? We can just. What if we just remove this? this request animation frame? Like just. Just for fun. Let's
[03:47:03] . Let's remove that. But they usually. It's for each is scare me a little bit. Yeah, let's forget their source code. Let's just. Monkey
[03:47:15]  pass the disc. This is also something that I used to do a ton. Like when I was trying to get fast SSR. I would just like write the vanilla JavaScript
[03:47:21]  that I wanted to run. Add update task. God, there's. That's an animation for. Okay. So. Problem solved. Yeah, probably not. Let
[03:47:37] 's let's see. If this changes anything. First of all, does it still work? It does. Okay. Second of all, let's do a new timeline
[03:47:49] . Clear. Record. Stop. Better. We have to. We doubled our rendering speed just there. Okay. So. What they need to do if, if they
[03:48:17]  want to have a micro task. Set up like. They need to not. They need the sub. I think they need to schedule it themselves instead of calling request animation frame
[03:48:31]  a thousand times. They need to like call it once and then manage their own queue and then do the work in their own queue. Call it. Calling request animation frame
[03:48:42]  like a billion times is like. Um, it puts a lot of work on the browser. You could just like call it. Yeah. I think they just, I wrote
[03:48:50]  a library for this a while ago called like micro task queue or something. It was like basically it's not the same as request animation frame, but the idea is like
[03:48:58]  you. The framework only needs one, you know. Scheduled time and then you can manage that time. This used to cheat benchmarks in a certain way, but the way
[03:49:11]  they're using it is not great. I'm gathering. Okay. So then now our self time is all in find insert node before. Let's look what's going on
[03:49:20]  in this one. Okay. So this is just a real hot path and it's recursive. So it's like, if not node return null, that's fine
[03:49:39] . Otherwise node tag equals portal element bind insert before node. Otherwise node E or no Z or no blah, blah, blah, or, and find enter before no V
[03:49:48] CC thing or finance. So that being said. Okay. So this is just walking. You want, this is a hot path, but you wouldn't expect it to be
[03:50:05]  super expensive. I'm not going to lie. You wouldn't expect it to be super expensive purely because unless you're like doing an insane amount of extra traversal,
[03:50:18]  but this does appear to be the hot path now. Because our apply node object self time is basically nothing now. So like where's our other one garbage collections where it
[03:50:30]  should be? Apply node. Yeah, nine. Yeah, I mean, these aren't great numbers, but I can live with them here. It at least looks like it
[03:50:37] 's something relatively normal. They're probably doing the request animation frames for a reason, but this is still. Yeah, and this is top level. Yeah, it's
[03:50:53]  just. This recursive function is what's killing them. I don't know what it does. But it. It's probably look, let's see. Can we do
[03:51:05]  10,000 rows yet? Yeah, this, this is, this is the whole problem. Find insert before. No clue what it does. But this is, this
[03:51:24]  is basically the killer. How many times does it run? I can we tell that from here? We can tell how long it runs. But yeah, I'm not
[03:51:39]  actually sure. Because each, each execution, like, look, like, look at this. It's like a sea of this. The basically, the scheduling might have been
[03:51:50]  fine. If it wasn't for the fact that like, they were like, cascading them almost. But yeah, like, let's, let's, let
[03:52:01] 's, let's walk down one of these stacks. How many times is it called during one of these operations? It's like, I don't know what this does
[03:52:15] , but I feel like it's one of those problems that you, where you need to like memoize the function or like where you, like, you could use the work
[03:52:21]  of previous things to like shortcut. And instead, it's literally just calling it for everything every time. Summary. Yeah, okay. Can we, like,
[03:52:46]  it's going to look at the specific execution of it. Yeah, I'm sure we'd have a good chat about this stuff. But yeah, this, this,
[03:53:05]  this. Yeah, I mean, we could just. Yeah, maybe we can put our findings in the GitHub issue just to kind of say. I don't know who's
[03:53:18]  in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in
[03:53:27]  charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of
[03:53:30]  it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it.
[03:53:33]  I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don
[03:53:36] 't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know
[03:53:40]  who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who
[03:53:44] 's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's
[03:53:47]  in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge
[03:53:50]  of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it
[03:53:53] . I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I
[03:53:56]  don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't
[03:53:59]  know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know
[03:54:03]  who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's
[03:54:06]  in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge
[03:54:09]  of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it
[03:54:12] . I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I
[03:54:15]  don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don
[03:54:20] 't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know
[03:54:24]  who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's
[03:54:27]  in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge
[03:54:30]  of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it
[03:54:33] . I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it.
[03:54:37]  I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don
[03:54:40] 't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know
[03:54:43]  who's in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's
[03:54:48]  in charge of it. I don't know who's in charge of it. I don't know who's in charge of it. I don't know who's in charge
[03:54:51]  of it. I don't know who's in charge of it. I don't know who's in charge of it. My computer is obviously different than the test computer
[03:54:58] . But let's figure out where's React sitting over vanilla roughly. The ratios change on slower computers. But if we can go and find React, and if it's around
[03:55:08]  1.48 or 1.5, then our numbers are probably in the same ballpark. Where's React classes, React hooks, React signalis. No, React hooks
[03:55:22] . Here we go. 1.6.5. Okay. So my computer here is actually probably more performant than the test computer. And I remember seeing that 19
[03:55:41]  slowed things down slightly or changed the test slightly. So generally speaking, yes. The slower the computer, the more exaggerated the results are. Which suggests to me that it
[03:55:54] 's very, very quite likely that Hono at seven. It would even be higher. Maybe like an eight is actually. Blazer might be two or three times faster than
[03:56:06]  Hono in its current state. current state. Depending on the specific benchmarks. So Hono is. The winner. I think. But hopefully they do something about it
[03:56:17] . Anyway. Okay. Okay. I think I'm done on this topic. That was interesting to say the least. Thanks for putting up with my, my, my
[03:56:31]  benchmarking. Um, stuff. But yeah, I mean, it's been a while. I almost forgot how to do it. You know, so to speak,
[03:56:39]  but. Um. Yeah, memory profiling. Lane graph and then you can go in and you can see the hot execution paths. You know, you've got a
[03:56:51]  lot of tools in the browser to do this stuff. Yeah. All right. Let's talk reactivity. That's where we're on to next. Uh, that
[03:57:03] 's my last topic for today. Um, so yeah, I, I released. Um, I mean, I say last topic, but we got like this week in JavaScript
[03:57:16]  type topics as well. Um, and we'll probably hit a few other things while we go. But, um, I, since we last streamed, I actually
[03:57:25]  released three articles. Um, I released, uh, the. God, I wrote it such a long time ago. Where was it? Um, two way binding is a
[03:57:37]  two way street article. I think we'll just talk about that in this week in JavaScript. The other two articles I wrote were the scheduling derivations in JavaScript and async
[03:57:45]  derivations in, or sorry, in reactivity and async derivation reactivity. And both of these, uh, articles should come as almost no surprise to anyone
[03:57:53]  who's been following the stream so far, because literally I just recycled a lot of the content added some, you know, perspective from having a few more weeks looking at this
[03:58:04]  stuff. The scheduling one. I think the biggest thing that I realized while doing this was, um, not actually not much. This, this whole article was mostly about
[03:58:16]  convincing people that effects need to be split. split. That's really the gist of it. Um, I, I wanted to also point out the people that as
[03:58:29] ync. If you want it, lazy async is dangerous. It's water fall inducing because you, you, you can, you're more likely to like have
[03:58:44]  situations where the guards get in the way of, of you actually fetching stuff the way you want it to, even with pure data graphs. Um, so yeah,
[03:58:54]  I mean that, that was kind of the gist of that one. The second article I think is a lot more interesting and probably more interesting people in the stream.
[03:59:03]  Um, because it's a continuation of the last hack MD that I shared with, with you all. Um, but I've, I've had some refinements since that
[03:59:16]  as typical, I go on the stream. I talk about the subject and then we realize like, as soon as the stream's over, it's like, Oh, why
[03:59:23]  didn't I realize this before? Right. Right. I did make the base of this. Um, and the examples very similar to my previous article, because I really
[03:59:36]  wanted to spell out. The whole async, um, problem. Like the fact that like types and like coloration, I, I make a comment in here about why
[03:59:48]  signals are really good for this problem. And I, and I realized that I might've not really made this very clear to people. I, what do I say here
[03:59:55] ? Um, they are lazily evaluated to where you read, which pushes the resolution down to the leaves of the UI tree. You can write the await higher in the UI
[04:00:08]  tree, but only block lower where it's used. that. Um, I thought that was obvious, but the challenge is that there's basically three points of time that
[04:00:23]  you care about when doing, when doing the async stuff, right? Like there's, there's, um, there's like when, when, when you fetch,
[04:00:34]  right? Let's blow this up a bit when you fetch, right? And then there's. When you await. And then there's when you use the data
[04:00:53] . Right. So we have three points of time. And generally speaking, the, the, the problem is that between these zone things, you have to deal with different
[04:01:15]  sort of, I don't know what they call it coloration concerns, right? The first one here between these two, between when you fetch and when you wait.
[04:01:23]  Um, it's cause I made them one block. It's my fault. You have to worry about, um, like, is it a promise, right? Like between
[04:01:41]  a fetching and awaiting you, you now have this, this question. And then between when you await. Well, I, between when you await and when you use
[04:02:00]  the data, there isn't actually, there isn't actually any coloration in this slide. I'm sorry. I was trying to think of how the visually show this,
[04:02:15]  but like, cause once you await, you block, right. It's only when you have like a different. Yeah. Sorry. This, this isn't, this
[04:02:25]  visualization isn't going to work the way I want it to. It's fine. Um, I'm trying to think of the best way to show this then.
[04:02:38]  because react has no, has, has no difference between this. Right. So because you await where you use the data, like at a component, like you block the component
[04:02:57]  level. component level. So it's where you use the data, like, because of the way react works. Um, Um, the only awkward part is,
[04:03:07]  is this, is the, is it a promise thing? So to try and solve this problem, react encourages you, um, to await high, because you, this is
[04:03:20] , this, the, this is relative. The, there's like no real downside between the awaiting and the data. It's actually. Like the. Actually, that
[04:03:29] 's not true. The, the distance between awaiting and the data is, um, is like. Yeah. Yeah. Let's. Yeah. How. Blocking.
[04:03:40]  Is this right? Which is like, because it's like, this causes, if you wait too high, you can cause waterfalls. Um, so what ends up happening
[04:04:01]  is because this is a problem that. That. From the DX authoring standpoint is like more annoying, right? This is, is this a promise is like a DX
[04:04:12]  concern. And this is a UX concern. You can guess. What ends up happening here because it, it, it pushes people to a weight higher than they should because,
[04:04:27]  or, or to fetch lower than they should basically. Um, and both of these tie to each other when you do nesting. Because essentially if you fetch lower.
[04:04:41]  In general, you're more likely to be caught in someone else's a weight. Does it, does that make any sense? Yes. A weight means I am by
[04:04:53]  waiting. I mean like resolving it. Right. But I wanted to show that there's three points in time because it matters for us, but almost because of this being like
[04:05:05]  bad for DX. People will try and push the await and the fetch together. Whether that's. Awaiting too high. Or fetching too low. Not
[04:05:18]  really because you have to enter back into the components again. Anyway, like all the fetching outside of the components does is, is it's hoisting. You
[04:05:36] 're fetching higher, but yes, if you don't have to drill the props down, but you're still passing promises around and. Presumably what you fetch is
[04:05:45]  hierarchically based on what you're displaying to some degree. Like if you're on the users plays versus the profiles page, you are fetching different things. So even
[04:05:53]  if it's not a direct. Async. Like, like, sorry, even if it's not a direct like prop drilling problem, it's an ownership conceptual problem.
[04:06:02]  Like if you are on this page, you fetch certain data. All that putting outside the components does is it's, it's a form of hoisting essentially. Moving
[04:06:11]  the fetch up, but it doesn't change the, it doesn't. I don't think it actually, it makes the DX maybe for, is this a promise slightly
[04:06:20]  less painful, but it actually doesn't change the mechanicalness of this very much at all. Because like you, this is still based on something higher up on the page.
[04:06:32]  It's just when you fetch higher, you're capable of giving better DX. I'm sorry, better UX, if you still a weight lower. And it makes it
[04:06:47]  a little less painful. I think when people pull it out of the component tree or hoist it as high as possible. Um, and pull it out of the, like
[04:06:55]  remix use bloater kind of thing. Like to be fair, they await high as well, but they don't block. You, you, you, you put an
[04:07:05]  awake component in where you block, right? They separate like that. It's an example of putting the, the, I mean, yeah. I mean, how does the
[04:07:17]  streaming and remix work? Right. They must be passing promises through still with defer. So yeah, actually, you know what? This is still, um, an example
[04:07:28]  of just fetching higher and then using context injected in. And. And awaiting lower. You're still priced from a DX standpoint to want to await higher. So let's
[04:07:39]  do like, think about it. If you wait lower, now you have up maybe a few different components that now have to await. Like this one uses user. This
[04:07:47]  one uses user. This one uses user. This one uses user. If you await higher, you can, you know, like conceptually bringing it. Then you don't
[04:07:58]  have to do the place like hit as many touch points, right? Even with context, you're still using context here, here, here, and here. Right? Like
[04:08:07] , yeah. Yeah, but I'm thinking is if you don't want to block, how do you show? How do you make the suspense boundary work? Like,
[04:08:23]  let's say you, you don't block, like you block some stuff, but then stuff you don't block has to travel back into the UI to know where it gets
[04:08:30]  rendered. So if they, the stuff you don't block ends up as a promise. Right? Which the distance, you know, you can use context, but what I
[04:08:39] 'm getting at is. It's way easier in remix. If you just await everything up top. And, and like, as again, they, they made it easier
[04:08:49]  to make this separation, but generally this is the problem, right? Nothing's easier than just saying a weight and fetch together. So you put them at pop. You know
[04:08:59] , you block everything and you don't stream worse for UX, but. It, you know, like this is the tension. Yes. you wait where you want
[04:09:15]  and there doesn't block. It just adds requests to the buffer that unroll progressively as soon as the next entry is resolved. Right. So are you dealing with promises
[04:09:33]  or you're dealing with like, uh, refs or signals? Like I, the, the whole premise here is. Like looking at this. What's interesting about
[04:09:57]  a signals with lazy read. Yeah. Yeah. So you're dealing with promises here, right? Yeah. Okay. Which is, which is fine. It's just
[04:10:05] . Like. You're still have to be aware that you're working with promises or the framework has to handle promises. I, I mean, I give an example of
[04:10:14]  this, like directly in here where I'm like props user that like, how do you drive in the system where you're like, oh, I want to show the first
[04:10:20]  name. Right. What you're saying is like, oh, you can just await wherever, which is fine. And it doesn't block. Well, I mean, I
[04:10:27]  guess you can await inside like here. Right. Is it, is it, you can go like, oh, wait props user dot. Like, I, I guess
[04:10:36]  bindings would become like, I don't know what the API is for, for view, but my point is compared to just using refs or signals. Like, like
[04:10:47] , I think it's more cumbersome. Like there is this question. I'm, which is what I was getting at in my Excalibur here, which
[04:10:57]  is hard DX. Um, but anyway, there's ways that people make this DX easier, but like my whole point was that if you look at something like, um
[04:11:13] , you, I mean, where was it? I was trying to say is that if you just like had like a signal for it, where what I'm saying is
[04:11:27]  the await happens here right next to the fetching. And then essentially you remove this whole thing. There's no gap between the, the await and the fetch. The problem
[04:11:41]  with that typically is that's when it resolves. So like when you look at things that just use async functions, top level, you have this really awkward problem
[04:11:52]  that even promise all doesn't fix is either you have to pass promises around or you have to block it. Right. Like this doesn't continue. Um, but what's
[04:12:01]  cool about what I was gonna say about the signals approach is now you have user. And if users and computed or memo or an effect filing into the render, you can
[04:12:10]  basically build your AI UI such a way that you, the awaits right here. I didn't write it. Maybe that's where the confusion is. If I had actually explicitly
[04:12:18]  awaited here, I think people might, might've gotten it better. I never even thought about doing that. I mean, you don't need to, this is actually
[04:12:23]  more efficient because it gets rid of the extra promise. But like what I was trying to say is that user here can go through this user component, get all the way
[04:12:38]  down to here without actually blocking anything because, and it's not a promise. It is a user, right? Or so like the, this, this component's aware
[04:12:51]  of suspense, um, the way I wrote it. But if this suspense was on the outside of user here, this component, and I show this with the address component,
[04:13:00]  I think somewhere. This component doesn't, wouldn't even need to know about async in, in this model that I'm talking about. So like you take the fact
[04:13:08]  that reactivity lazy evaluates stuff where it loads, which means that it doesn't need to block until it loads. You need to block until where you use it.
[04:13:15]  And at the same time you compress this, which basically means that from our scale drop standpoint. The answer of how blocking is this is not really your concern because you block as
[04:13:29]  low as possible. And is it a promise is not really concerned because you await and fetch right next to each other. So you literally solve both problems, like without,
[04:13:39]  by just the very nature of this, of this type of solution. You suddenly aren't, I'm sure there's other things you might have to be worried about, but
[04:13:48]  you know, generally speaking, this classic DX UX split, you know, goes away. There is a question when you fetch, like from a, from a, how
[04:13:56]  blocking is this standpoint from like a, not blocking, but from like a hoisting standpoint. Like if you have code splitting and stuff, because the thing that I,
[04:14:06]  I didn't mention here is the, there's another impact kind of between the abyss and the fetch, which is like. Um, which is like the, the
[04:14:19] , like the parent waterfall or like when you ask when to fetch, it's like, is something above blocking, whether it's like, you know, it could be another
[04:14:43]  one of these cycles. It could be code splitting. You, you basically have these three questions and this is obviously a UX problem. Again, everybody wants to fetch inside
[04:14:57]  their components. So they ignore this one, but there's like, basically, once you recognize that this problem's gone and this problem's gone, the only problem left is
[04:15:11]  this one. And this will encourage you to fetch higher, which is basically what the goal is here because fetching higher is always better. if you don't have
[04:15:24]  to worry about how blocking this is and you don't have to worry about, is this a promise? Anyway. Yeah, so I mean, yeah, they wait.
[04:15:47]  So it's, it's kind of like, it's kind of like react. The challenge that I have with that is that that's great for SSR. It
[04:15:54] 's kind of a pain when that component has other stuff. It does other state like the article gets into it. I don't need to dig too deep on that,
[04:16:09]  but I, I, I, I wasn't sure how in the article to explain this phenomenon. Cause I think it's actually the key part to understanding this, right?
[04:16:19]  Right. The address code doesn't need to wear a very same drive state. Like first name can be accessed without null checks. There's no cost of hoisting
[04:16:24]  or fetching. That's a key. If user was passed to other components for show and tell, we don't need to block anything. We can eagerly render everything
[04:16:30]  except for those text nodes. Although we might not want to show them yet. That's why use things like suspense, expensive credit anywhere above the first read to manage placeholders
[04:16:36] . That's the case would be triggered by the render effect hierarchy, but async would flow through the pure part of calculation. So the challenge with this though, is
[04:16:44]  that I realized that, and this is, we talked about this in previous stream, but generally speaking, um, everything is reactive. When you go async in this manner
[04:16:56] , it's unescapably because anything could become reactive. If it's ace, if it could come from an async source, which means that stuff like implicit unt
[04:17:07] rack is no good. And what I, the big discovery while writing this article is not discovery, but it kind of understanding is, and we actually talked about this
[04:17:14]  in the last stream of it too, but I formalized it is that it's not even untrackable because it needs to be able to run again to resolve,
[04:17:24]  which means that, you know, it's fine. There's a mechanism you can throw right through and untrack it. You know, like the, if prop.
[04:17:30] count is async, it can escape, basically ignore the untrack and say, Hey, create memo. You know, resolve again when props account goes, but
[04:17:38]  the problem is top level. This is a disaster. Um, right. You have to be strict about, about deriving stuff. Essentially. If, if there's a
[04:17:49]  potential, something can change, then it needs to be derived. Right. That's basically the gist of, if you took an approach like this. And what I
[04:17:58]  end at it is I, I kind of realized while writing this article, and I think this is kind of the important part is. Have you ever written a component in react
[04:18:08] ? Like, let's go playground, like ground. Like, yeah. Have you ever written a component in react? That's like, that's like, that's
[04:18:19]  like, um, let's bring props in here. Okay. Use state. Props.count. Okay. And then. Let's just do a, I
[04:18:38]  mean, this is kind of silly, but I'm just going to do cons double count equals. Um, use memo count count and then times two. Okay. This
[04:19:04]  is, this is just illustrative. Don't, don't worry too much about this. I, my, my, my point is, and the DSX here doesn
[04:19:10] 't even matter. My point is, sorry, I'm going to put props.count here as well. I know react, you don't write, you destructure
[04:19:20]  stuff generally, but just, just for the sake of this, I'm going to, I'm going to put this here. Is it odd to you that if the parent
[04:19:31]  re-renders, I mean, I can ask you this question and I, I, I kind of got myself stuck for a moment. Parent updates and updates props.
[04:19:40] count. Okay. So actually let's set up the scenario. We render our component. Props.count is one. We use our button. We use our button
[04:19:48] . We click it a few times and now it's up to four. Okay. And then our double count is eight. Right. And then the parent sets props.count
[04:20:01]  to two. What happens? And actually answer your question. You're right. There must be at least two passes to render the whole thing if we wait anywhere.
[04:20:09]  Yes, you are right. Yes. You are right. But. Those passes don't have to be. full passes. They can be partial passes. They can
[04:20:15]  be partial passes. Because they only need to continue from where they're blocked. in theory. Right now. that's not how we do it.
[04:20:20]  Right now. That's not how we do it. But just want to put that there. Danny Brumoff yells at you. No. No. Okay. Okay
[04:20:27] . So. Danny Brumoff yells at you. Yeah. No. What ends up happening is. Double count. That's not how we do it. But just
[04:20:35]  want to put that there. Danny Brumoff yells at you. No. Yeah. No. What ends up happening is. Double count. That's not how we do
[04:20:43]  it. No. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it
[04:20:48] . That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's
[04:20:52]  not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how
[04:20:59]  we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it
[04:21:03] . That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's
[04:21:07]  not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we
[04:21:12]  do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it.
[04:21:16]  That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's
[04:21:28]  not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we
[04:21:33]  do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it.
[04:21:37]  That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not
[04:21:42]  how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do
[04:21:46]  it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it.
[04:21:50]  That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not
[04:21:55]  how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do
[04:21:59]  it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That
[04:22:03] 's not how we do it. That's not how we do it. That's not how we do it. That's not how we do it. That's not how
[04:22:08]  we do it. That's not how we do it. That's not how we do it. That's not how we do it. You state here to to update
[04:22:23] . So that when the prop changes. This does do what you expect to do. Do you guys guys know the answer to this question, right? Right from your very
[04:22:52]  first example, you're forced into use effect when use effect is the worst thing. Now, to be fair, the react official docs actually don't suggest you do this.
[04:23:02]  What react official docs suggest is you just do this now. I think bails out of half the rendering. It'll like render the first half the component and then it
[04:23:23] 'll render the top half again and then continue the JSX one and can tell that it changed during render. They have like a double cycle, but the my thing is most
[04:23:33]  people don't know this and this seems kind of counterintuitive. So a lot a lot of people like actually this is where the whole use effect thing started. And I
[04:23:40]  don't know if react was actually like older versions was smart enough to actually handle this properly. I'm not sure like 16 or whatever, like whenever hooks are introduced 16
[04:23:52] .8 or something actually handled this properly. But they've definitely got better behavior for this currently. But my point is. Right off the beginning. You're in this
[04:24:04]  kind of weird place when realistically react everything should update and it doesn't and it puts you there immediately. So I started kind of going well, why did we all follow suit
[04:24:17]  like you can understand in a in a framework where your components run once like solid where this is create signal. There's no expectation of this updating. There's no expectation
[04:24:25]  of this updating. Right. But. But, you know, like, why do we immediately go to an effect when we really want a derivation, which kind of led
[04:24:38]  me to this to this thing, which was like, don't do this. Don't try and synchronize state. Why can't we just do this and say this
[04:24:46]  signals based on props or count? And then, you know, essentially it can update itself and were the prop ever the change, it would reset to the prop again.
[04:24:55]  But essentially it's, it's been, it's now a drive signal. Right. I've talked about this on stream before. I call it create writable. I
[04:25:03]  call it create writable memo, whatever. But at a certain point when you're just talking about like, I am a user and I'm just creating my signal. There
[04:25:12] 's something very clean about this sort of like here, here, you know, I have a signal or I have that's initialize a value or this one. One
[04:25:24] 's derived from props. And, you know, that's kind of like, we, we haven't done that to this point because react never had its own reactivity,
[04:25:34]  right? I suppose they could have introduced a way of, of doing this. It almost worked the opposite. I feel like in react, like if you pass the value,
[04:25:46]  it would be update every time. And if you pass the function, it would keep the original or something. I don't know. I don't know, but like
[04:25:52] , like, I don't know. There's, there's something just odd about this inconsistency in a framework that always wants to render. And in our case
[04:26:06] , how this inconsistency that we never had a way of updating in a, in a, in a framework that never re renders. Do you know what I mean
[04:26:14] ? Like it's, it's really odd how we, how we got here. Yeah. I mean, the, the other thing that I missed in the react version
[04:26:30]  is they sometimes suggest putting a key on the outside, which is also like just re render everything, which is brutal. The count. The count, the counters parents should
[04:26:42]  hold the actual value in the provide the bill. Yeah. But what if you don't know? What if you want to make something that is controllable? This is actually
[04:26:49]  where it ties into the, the thing, because I was saying two way binding sucks. But then, uh, um, Michael Rawlings from the Marco team went and he
[04:26:58] 's like, okay, no, no, two way binding is good. You know, and he shows, you know, or like if you do it a reasonable way
[04:27:04] . So I wrote that about two way binding in the words, Michael Rawlings one, do, do, do, do, do, do, do, do, do
[04:27:10] , do, do. But a followup where he, he tried to show Marco two way binding approach. And yeah, he brings up all my points, which are all
[04:27:16]  great points. Why two way binding is terrible. But then he was like, he shows this approach that I still think is somewhat similar to view, but what I love about
[04:27:28]  his example here. Isn't him talking about the way two way binding works on the inputs is that in Marco state is tags. So they can bind to state. He
[04:27:50]  can go, where is it? Let count bind input dot count. And even though this had nothing to do with what I've been working on, like directly with this
[04:28:02]  stuff. It occurred to me that Marco is actually a language where signal binding like this is actually a built in feature. It's a, it's, it's kind of
[04:28:15]  genius. This, this supports both directions, which is the whole other conversation. Um, the up direction. I'm still whatever on a bit. I think there's
[04:28:24]  details that are important for it. But like what I'm getting at is like, essentially. This is forcing that derivation. Right. Um, like, and what's
[04:28:36]  cool about this is, and what they should, he layers here in this example is. If the parent doesn't provide a signal down the component can work uncontrolled perfectly
[04:28:49] . And if it does, and the parent doesn't listen to the up, the way back up, um, or sorry. And the, or if the, if
[04:28:58]  it does, and it at the link, both sides, like the up and the down, then it works perfectly as controlled. Essentially. And then you can basically with
[04:29:07]  this approach, the component author can write their stuff a single way. And the component be both controlled or uncontrolled depending on how the person uses it. So like, I
[04:29:17]  can't say that going to controlled is always the right answer essentially. And so like there's, there's situations where going to control doesn't make sense. And trying to
[04:29:30]  make stuff work in the middle is actually really hard because of this stuff. Yeah, yeah, I, the, there, there's probably a way to set the default
[04:29:57]  value. I mean. Yeah, I guess this, this example is assuming that this is not that unique. It's not about default value. It's assuming that this
[04:30:14]  is not a non, like this is a required prop. So either you pro you have to provide initial value here. See if you, if you, if you only provide
[04:30:23]  an initial value and it's not a signal, like if you just pass the zero in. This just works. It still, it, it, it, it basically
[04:30:32] . Like it depends on what you pass in. So this, this, yes, this is assuming you could go input dot value or zero, I guess is, is,
[04:30:42]  is the way I would handle it. Cause it's. Cause it's. Yeah. Cause this value is the value. Right. Anyway. I don't know
[04:30:51] . I, this, this idea was controversial. Um, in the solid discord a little bit. Cause, uh, I think Dave came through and he's like, well
[04:30:56] , why don't we even need memo? Let's just create signal everywhere. And I'm like, there's different use cases for this. I think it's enough
[04:31:03]  to differentiate on the, this there's technical reasons why this is hard to do in an efficient way. Because. You know, what, if this isn't reactive, you
[04:31:13]  don't want to create an additional memo that you don't need to create. So there's like, like, what if, if props account is just a five, you
[04:31:19]  don't want to bother creating like some background stuff, but like from the AI. There's also the fact that if functions like this are. Do this, you know
[04:31:27] , in the same way you can't pass functions to setters. Cause they could be the setter function. Well, same thing here. If you want to have a
[04:31:32]  signal of function, you'd have to pass a function that returns a function. Right. You know, the same way they do for the setters. I don't think
[04:31:37]  that's the biggest deal. Cause we already do that for the setters. We're kind of like that. We brought that bridges. You know, boats already sailed,
[04:31:42]  so to speak. But. You know, the same way we, they do for the setters. I don't think that's the biggest deal. Cause we already do
[04:31:48]  that for the setters. We're kind of like that. We brought that bridges. We've already sailed so to speak, but you know, there are trade-
[04:31:54] offs on this, but on the positive for someone coming in and going like, I have a signal and then I have a signal props. You never, you never go to
[04:32:03]  effect as the answer. Like immediately you have your answer. You don't have to go look for something else. You just have signals. Anyway. So this is uncont
[04:32:15] rollable two-way binding. It's, it's the other way. It's, it's, they, they call this control, control a bowl. But I
[04:32:25]  guess their half and half state is if you do one and not the other, then you, you have a weird scenario, but they call this controllable. Cause it can
[04:32:32]  be both uncontrolled and controlled. No, I can't say half. Um, anyway. Interesting thing. I, I, I'm going to continue in the next
[04:32:50]  article and talk about base primitives and to talk about mutability. Um, like some of the stuff that I also talked about in the previous article, you know,
[04:32:57]  that whole like mutable and mutable split. Uh, you guys have already seen that stuff, so I, I'm not going to dwell on that too much. But
[04:33:03] , um, I, I think, I think this is probably the most interesting piece out of this is that I, I started writing create writable and that's like,
[04:33:11]  why, what the hell is a writable? What's a writable memo? Is that what I'm thinking? No, I'm thinking of a, I just have
[04:33:18]  a signal that's derived. Maybe it's create drive signal, but then it's like, yeah, I don't know. Yeah. I don't know. This
[04:33:25]  is still, you know, up to debate, but it's just something I wanted to throw out there. Okay. Okay. Let's, let's, let's flip
[04:33:31] . Uh, let's flip gears here for a second. Let me get set up for this week in JavaScript. I don't think it'll be a long one, but
[04:33:37]  I'm going to just get this all set up now. And hopefully take a drink of water or something. What's this? All right. Yeah, I'll talk about
[04:33:50]  this probably more in the future. Okay. I had a meeting. Apparently this is being developed in solid. So that's pretty cool. Okay. Um, with create
[04:34:03]  async, every prop is potentially async signal from the component point of view. Yes. And as you know, that's exactly what I've been trying to tell
[04:34:20]  people to do anyways. And ES Lint tells you to do that anyways. You should, I, I think that's how you should be authoring stuff. We let
[04:34:30]  people get away with half assing it, so to speak with untrack, but you know, being implicit, but yes. Treat every prop is reactive and you
[04:34:40]  keep locality of thinking this just enforces it like a sledgehammer. So from the component point of view, it's more like, don't worry about it.
[04:34:54]  It's not like every prop is potentially async signal. It means that like treat everything is reactive and you won't have to worry about async. So,
[04:35:05]  here's the question though. And this is, this is my hypothesis and we'll have to see what people feel about this. I think it's the responsibility of the person
[04:35:19]  who introduces the, the async to put the suspense boundary in. The initial, like if you add the create a sync to your app, you put the suspense boundary
[04:35:36] . And I think people, and I know this is kind of the crazy part that people, maybe there's a mismatch in my thinking here is suspense should follow layout.
[04:35:46]  It's a layout concern. So like, ideally what happens is people layout suspense, not based on blocking. So here's the thing suspense blocks the UI, but it
[04:35:58]  doesn't have to block the rendering. This is a subtle difference. So if you go, okay, I have a new page section. I'm going to put suspense here
[04:36:05] . Cause this is where the placeholder is. I have the, the detail section. I put suspense here. Suspense doesn't block. That's the beauty of
[04:36:13]  it. So the component author at the end shouldn't be worrying about suspense. If, if they aren't fetching the data, it's not their responsibility. Like
[04:36:24] , especially the like micro, like the components, like the design system, not worry about suspense. If someone, you know, like this is why when we have something to
[04:36:33]  cache API, it does let you push the fetching a little bit lower. That's like one of the benefits. So it gets a little bit, you know,
[04:36:41]  more co-located, but if you kind of know, you're like, these are the regions that I care about from a loading perspective, where they should go from
[04:36:52]  a layout design. I, I don't like the naive thing is the person can just fetch at the top and put a suspense boundary over the whole page. That's
[04:37:01]  where you start. And then someone's like, oh, we, we don't need both of these. We can just like, we, we can wait. We can
[04:37:12]  show this first and show this later. And then you add another suspense battery. You you're, you're now you've just like added that cascade. I don't think
[04:37:20]  that like. Okay. I don't think this becomes a micro concern for a component level. Yes. Yes. That's what the whole thing is. Yeah. Everything
[04:37:34] 's async because nothing is asynchronous. Yes. Yes. Yes. That that's, that's the gist of the idea, which is crazy. It also gets rid
[04:37:43]  of null checking a lot in TypeScript too, because I imagine that it becomes much less common of a problem people have. with with stuff that we're doing. All
[04:37:55]  right. It's funny because this, this topic actually is really relevant to something. So I think I know how I'm going to start this week in JavaScript because.
[04:38:11]  I've been, I've been a little bit slow. Let me see here. We already talked about that. Let's go back to there, there, there,
[04:38:19]  there, there, there. Okay. Yeah. Okay. I've got everything lined up now. I think solid. Is there much solid news in the last little bit
[04:38:33] ? Okay. Beautiful, beautiful. Don't need to cover that. Sorry. Just give me a second. I'm just getting. Yeah, there's not a ton.
[04:38:41]  Okay. Okay. Okay, perfect. Let's do this. Let's talk about this. We can JavaScript. All right. Yeah. Yeah. Um, we
[04:38:51]  were just talking about component fetching and component co location. And I think that's how I actually want to start talking about this week in JavaScript because. I missed this
[04:39:14]  article and appropriate that you're here. Um, Theo has been, as I said, just hanging them out of the park recently with his coverage of articles. I'm usually
[04:39:24]  like right on the, on the, I'm, I'm usually right on the mark, you know, right away when I, when I, um, I, I
[04:39:31] , I look, I look for articles by this author pretty much as soon as I can find them because they're, they're always great. And there, this was
[04:39:41]  like an interesting look at the co location composition, you know, thing in react. And it's very related to what we're talking about here. Um, I missed this
[04:39:51]  initially, so I never got to retweet it. Um, honestly, I love this, this, this quote. Um, I think this is a good article for
[04:40:11]  everyone to get to. Theo's already covered this in, in depth, to be fair. So I don't need to go and do it again. He did a very
[04:40:20]  good job. Um, I, I, I think this article is really good. I, I don't, I forget where I was. I think I was like in
[04:40:27]  vacate on vacation somewhere or something that I somehow missed this. I remember, I remember Tanner's tweet though. Um, and I think. I'm not using SS
[04:40:39] R level loader. Your solution probably results some kind of hook, blah, blah, blah, blah, blah, blah. Relay one of the few libraries. Yeah
[04:40:45] . It's just talking about the local versus thing co location. And I feel like. In a sense, we almost already talked about that in the last segment before we
[04:40:54]  started into this week in JavaScript about my opinions about this. RCs are not the only answer to local data. data exactly are extra buy-in blah, blah,
[04:41:04]  blah, blah, blah, blah, blah, blah, blah. Yeah. Still a big, big fan. Please don't kill co location. It's interesting. A
[04:41:14]  lot of this non blocking work. Let's you co locate easier because you, because you don't have to worry about the levels. But the thing that prevents co location ultimately
[04:41:28]  is code splitting. And like the, the main, um, the main theme of this whole stream is we're doing a whole much more dynamic loading streaming code streaming.
[04:41:42]  HTML, all this stuff with, with what we're doing with the server rendering stuff, even client in general, like these, the stuff's all getting cut up. It
[04:41:50]  makes. Co location. Pure co location. Hard. Yeah. So the path, even if you can like write the queries in line so you can see them, it
[04:42:01]  makes preloading almost necessary. So. RCs. Make it easier for people not to add the preload step, but they're not getting rid of the waterfalls
[04:42:09] . They're just pushing them to the, the, to the server, which means don't stream from the edge, use PPR. I, at this point,
[04:42:17]  I I'm, I'm pretty much thinking that's the main benefit of PPR. It's literally. So people can use our people can still waterfall easier and pretend like
[04:42:27]  it's all right. Um, when I mean, reality is a little bit different than that, but. Um, in general. I think co location's in a
[04:42:38]  hard spot. Um, I think we can still make nice DX though. Um, stuff like hand stack query plus the preload hook, things like router cache API are,
[04:42:50]  are good alternatives that are incredibly powerful. So anyways, um, I just wanted to, yeah, maybe, maybe I should just, as I said, I'm not
[04:42:57]  going to do this in depth, but I just, I just want to shout this out. I thought the coverage is great and I'm going to get the article, um
[04:43:05] , in the links here so people can check it out. Um, I do really like this whole thing about the, the role of the component and the fact that the component
[04:43:15]  is becoming less of a thing, um, in a certain way, but also what reacts betting on. Like there's just this huge tension right now. And I think
[04:43:23] , I think, oh, I got Kang. Hopefully I said your name correctly. Always seems to nail that tension in terms of articles. So very, very cool stuff.
[04:43:32]  All right. Um, let's do some solid JS news real quick. First of all, Daniel's been killing it with those, um, monthly newsletter. He's been
[04:43:41]  doing it for six months now. So like, thank you so much more people should catch, check it out. Um, if they get a chance, I think, I
[04:43:48]  think he's been doing it for six months now. I think he did the classic, everyone knows you get better. The fights. This is so funny. Twitter algorithm
[04:43:55]  thing says, if you don't put the link in the main post, you get better engagement. But it's also means that it gets buried. If you're not like
[04:44:02] , it's an interesting tension. If the, if the post ends up not being super, um, popular, but yeah, you got to subscribe to it. But
[04:44:11] , uh, generally speaking, um, I've, I've, I've read it. It's a good way to stay up to date with solid stuff much better than
[04:44:19] , than what I'm doing. I, I forget a lot of stuff. Fun fact. Once PPR is more available, you could write Astro adapter. That
[04:44:31]  automatically turns your server island into PPR. Yeah. Sure. I, I, I, I, I'm, I'm having a harder time understanding, like, who
[04:44:41] 's going to make it more available though. Like it's literally edge streaming. Like Astro could probably just do edge streaming too, if they wanted to. Right.
[04:44:52]  Yeah. API wise. It it's not a, it's not really a limitation for sure. Okay. Um, let's keep on going. Um, yeah,
[04:45:08]  this was cool. Um, Prisma has been, um, you know, like I, I keep on seeing like little projects that I don't expect, you know,
[04:45:27]  and this is actually official Prisma. like the, um, solid is, you know, in the list of frameworks and, you know, they, they, they
[04:45:34]  push these out for all the frameworks they support, but it's still nice to be included in the list. Um, two, two, two, two. Yeah. Not
[04:45:41]  a ton of solid news. Uh, bookmarks. We talked about that. We talked about this. Um, more Astro stuff really quick. I love what Ast
[04:45:59] ro has been doing on the marketing side. Like this is like pure, like windows 95. Like feels like, like, or like my first, like, I forget what
[04:46:09]  program it is. We used to make like, uh, presentations and like the Microsoft word or something. This just, just has this, you know, oh, right.
[04:46:17]  I didn't share the link to the newsletter and I closed it down already. Damn it. Um, yeah, yeah, yeah. Yeah. Yeah. Yeah. Yeah
[04:46:26] . Yeah. Microsoft word. Yeah. No. Yeah. I, I, there's a really good reason. Actually they have the capital a, I was trying to
[04:46:38]  go to lowercase a, I would love it. The really good reason for capital a that will make or link that people will not let go of is, uh, hierarch
[04:46:47] ical in nested routing. And you can go like, well, why do you even need nested routing? Well you do, if you don't want to re
[04:46:52] -render your whole layout. Um, but otherwise you have to actually put the, the, the nested routing behavior into the encoded into the href and no one
[04:47:03]  wants to do that. So there's, there's a very good reason for that. I know that's how they meant, but I was enjoying these things. Here's
[04:47:09]  another one. It was like, this form has zero JavaScript. And I was like, I was like, yeah, most forms of zero JavaScript. And then I'm like
[04:47:16] , oh, it's the view transition. Here's here. I, I do have a question about this. Does this mean that, that the MPA view transition
[04:47:27]  API is live? Because right now don't believe me open it in Chrome. Okay. But I won't be able to do this. Will I like, will I be
[04:47:40]  able to open this in a new window? Not this. Damn it. Okay. Open preview in a new tab. Yes. That's exactly what I want to do
[04:47:52] . No. I can't. Open preview in a new tab. No. I can't. I can't. Open preview in a new tab. No. Can
[04:48:00]  I, maybe I have to get the source. Can I disable JavaScript? Because. The view transition API doesn't work without JavaScript to my knowledge. Right?
[04:48:13]  Like obviously doing a form. I think they're just selling their, their form action feature, which is, which is cool. But. The only thing that like,
[04:48:24]  obviously you can submit a form without JavaScript. The only thing that makes this look cool is the view transition. And I think that requires JavaScript. So I think this actually
[04:48:31]  isn't true, but again, great marketing, like people like this, but I, my gut is, this is a lie. Chrome 126 supports it. Is that
[04:48:42]  what it is? The only thing that makes this look cool is the view transition, and I think that requires JavaScript. So I think this actually isn't true. But
[04:48:51]  again, great marketing. Like, people like this. But my gut is this is a lie. Chrome 126 supports it. Is that what it is? What version are
[04:49:01]  we on right now anyways? Oh. So that's what it is. View transitions are live. Oh, okay. Very nice. So that's what this is announcing.
[04:49:18]  See, this is the news. There we go. I didn't even check. Does that mean that my hacker news demo didn't? Okay. Oh, now you guys
[04:49:30]  want me to confirm. Now I want to confirm this. Did I close it down? That's interesting. No, no JS benchmark. Let's stop running the server
[04:49:45]  in the background. New window. Open recent. Samples. Astro solid hacker news. That's fine. That's fine. Stop pestering me. PMP
[04:50:00] M build, PMPM serve, PMPM, what's that, preview? What do they call it? Four, three, two, one, sources,
[04:50:31]  there's no, it's so funny, I thought I actually saw disabled JavaScript as an option a second ago, it's fine, it's, I've never seen that
[04:50:42]  as a direct option, what's it, disable JavaScript, okay, do I have to do more than this? I don't think you might not be able to
[04:51:03] , oh, it's like a YouTube video? Works on latest Chrome, works for you in dev, do you think it rocks, looks like aggression to most of your users
[04:51:21] , yeah, oh, you removed the view transition tag, I see, so the tag is just a polyfill, all right, all right, okay, yeah,
[04:51:39]  there's a reasonable chance here that I don't actually figure out how to get this working in the moment because, but where did I put it, but I mean,
[04:51:54]  even with the tag gone, like, I would have figured if I turned off JavaScript then it would still, you know, maybe work? Yeah, I don't know
[04:52:18] . Yeah, but I mean, it's more than that. It's more than just the CSS, I'm pretty sure, like, everything's reloading, this
[04:52:34]  isn't even... I see, so you don't get the, you don't automatically get the fade resolution. Okay, yeah, this is beyond the scope of what
[04:53:00]  I'm going to look at right now. That's cool, though. I was talking to someone just the other day, and they were, like, surprised that the
[04:53:15]  MPA version hadn't shipped, and I was like, no, they thought, like, you know, and I'm like, no, Astro releases a year ago
[04:53:22] , we didn't, we haven't had it. So that's what, that's what this is. I see. That's cool. I would, as I
[04:53:37]  said, I, StackBlitz doesn't, I don't think lets me turn off the JavaScript as easily. I, like, my gut is, like, if I
[04:53:42]  turn it, if I turn the JavaScript off here, like, we're not going to, we're not going to have a good time. Yeah, we're not
[04:54:02]  having a good time. Anyway. Not going to worry about this. Very cool, though. This is good to know. I'm glad we talked about it. Yeah,
[04:54:17]  exactly. That's what I'm saying. That's why I was trying to, like, figure out if I could, like, open the preview window in, like
[04:54:27] , a different window. Yeah. Change of mind on DTS files. Writing applications should never use them. Let me explain. Okay. That's fine, but library authors
[04:54:39]  can use them. Yeah. I don't know anything about TypeScript, but that seems reasonable to me. Skip. Since you told these types, you shouldn't receive
[04:54:47]  errors from them, so there's a setting which is going to table. It's called skip lib check. Yes. Recommend for all. However, this unfortunate that's
[04:54:53] , I mean, DTS, skip, skip. Ah, okay. So basically only override type stuff should be in it. Good. Oh, so can you do
[04:55:05]  overrides? Okay. Okay. You've convinced me, Matt. All right. That's not a hard one, but this is, as a library author,
[04:55:29]  I still need these buggers. Okay. All right. I'm still waiting on someone to show me the coolest app built using only HTMX. Nuance
[04:55:42]  opinion. They don't exist. I think that's the point. HTMX enables an older, simpler architecture, provides a lot of UX goodies to get you pretty far
[04:55:51] . React imprints can create even better apps, but hard to do well, not because of React, but the goal itself. At first I was going to say he was
[04:55:57]  being kind of snarky, but I actually, this is the, this is the, this is the correct answer. I think. The longer I play with Go
[04:56:04] er H, that's more. I want to just go back to Next.js. Sure. And you'll love it. Maybe someone to show me the coolest. Yeah
[04:56:11] . Yeah. I don't know. I just love this exchange. Obviously I agree wholeheartedly. I think that's like the nature of it. Someone actually did make
[04:56:21]  his Trello demo in HTMX. I saw it. It was like the most convoluted thing ever. like it was doable, but very hard. I
[04:56:29]  don't only think he got optimistic updates, but I was, I was impressed. It was like. Like it was like 30 files distributed just to get the one board going
[04:56:40] , but I was impressed. Yeah, the open preview tab should work, but I couldn't get it. I kept on clicking the button. It wasn't doing anything.
[04:56:48]  Yeah. Nice. Okay. MPA demo. Thank you for sharing. I should go on. Twitch. To actually get it. nice okay mpa demo thank
[04:57:01]  you for sharing i should go on twitch to actually get it because where am i channel yeah and i and i i'm gathering the whole point is if i disable javas
[04:57:41] cript obviously this still works okay am i just not on the right version of chrome like it it says relaunch to update i don't want to kill the stream so i
[04:58:00] 'm not going to but i'm i'm like did 26 just come out that seems yeah i don't know hmm i mean the funny thing is that this was posted like a
[04:58:14]  few days ago but i don't use this computer very often to be fair so it's possible that my chrome is out of date here um anyway all right let's see
[04:58:25]  what else we got here um we're at an interesting time we're being told we need new technologies islands rcs people are yet the simple tech demo can't effectively show their
[04:58:35]  benefit these matters when things scale but blogs they will never show it we can make blanket statements but it lacks nuance or we first focus on the dx i i don't know
[04:58:44]  this this is just my whole extent existential crisis out in the opening here it's no clear where they determine the impact of options the types of buying real with lacks at least some
[04:58:53]  fault safe is chosen inspection tend to fall yeah i just like annoyed like a little bit like i was looking at like some of these next js examples and i'm like you don
[04:59:01] 't need any of this technology to accomplish the same thing you know like you know but the problem is like these are the demos we show and they're just not hot demos
[04:59:12]  it's like it's not hard to take a site that doesn't do something well and then changes to do something better and and and say yes it's because of this technology
[04:59:19]  so i don't know it's an interesting thing because i'm trying to find benchmarks and trying to find ways to show the difference of these techniques and the importance of them and
[04:59:28]  it's it's challenging um to say part of it is has led me to back off from some of these texts some of these approaches generally anyway that you need to find
[04:59:42]  something worth investing in i don't know it's interesting i don't blame people for having challenges with being able to like accept this stuff sorry this if this is around the
[05:00:00]  htmex comment i think you can build something pretty awesome in a different way completely client side right you don't need need the server to show something cool like there
[05:00:13]  used to be when spas were first coming around people were doing really cool stuff that hadn't done before it wasn't great ideas but like stuff that wasn't capable before so
[05:00:21]  yeah i don't know it's possible that they're slowly loading it this one is zero json yeah yeah you're on 127 yeah so my gut is i don't
[05:00:47]  know if this is what they were announcing but it's cool that it that it works anyway um yeah led perfectly into the ppr thing and then where are we uh last
[05:01:12]  note um uh nile crosby who we had on the stream um passed away he was in a helicopter accident um i believe he was piloting um he's a guy did
[05:01:27]  age grid really excited about benchmarking solid and stuff i met him a couple times i'm fortunate enough at conferences um that's um i had a lot of you know i
[05:01:37]  i it was it's definitely a you know shock when you hear the news and uh he was a really cool guy he we were at the conference who uh shall be named the
[05:01:49]  modern front ends i guess they called it and ag graded sunk like quite a big amount of sponsoring money and i think north of a hundred thousand into this conference that was
[05:02:00]  basically nothing and nile was still like hey let's like let me cover dinner for the group of speakers or whatever who were with him you know or drinks whatever like just generous
[05:02:11]  guy even when crap you know happened um as i said you could always tell his passion so um just yeah i don't know people who are fortunate to to know him you
[05:02:24]  know oh i wasn't expecting that he still had the stream pinned anyway um he will very much be missed he was he was i know uh talking with other people like tanner
[05:02:40]  and that you know he had a big impact on uh like the table and form side of uh js so sad note but worth kind of putting out there yeah yeah um i
[05:02:57]  wish i had more positive news i guess my last thing here is vcom's coming up i have no clue what i'm going to talk about because solid starts out it's
[05:03:04]  like i only i don't have any cool new research to tell a few guys but i'll i will try and come up with a talk in the next month hopefully so
[05:03:11]  you know the lineup stacked by the way i mean it always is and loves i'm pretty much most stacked lineup yeah i love that you guys are all trying to figure out
[05:03:37]  how to get this to work with no js in the in the didn't roll it out i believe yeah oh all good anyway um thanks for joining my stream today um hopefully got
[05:03:53]  some cool value from what we've been working on i had a lot of fun um don't know where we're going next uh but uh very excited on multiple fronts as
[05:04:04]  you can tell so uh wish you all a uh good weekend and uh till next time