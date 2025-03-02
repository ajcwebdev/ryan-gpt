---
showLink: "https://www.youtube.com/watch?v=YxroH_MXuhw"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS: Routing"
description: ""
publishDate: "2021-10-09"
coverImage: "https://i.ytimg.com/vi/YxroH_MXuhw/sddefault.jpg?v=6160aebc"
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

[00:00:00]  Hi. Welcome to my stream tonight. Today, I decided it'd be a good time to talk about routing. Routing is a pretty core part of pretty much any application
[00:00:14] . It's basically the foundation of what the web is built on. And there's a few considerations that come into SOLID when working with routing, and that's why I
[00:00:26]  figured it also a good opportunity to talk about control flow. And also you can maybe show some more of the suspense and transition stuff that I didn't get to show last
[00:00:36]  time because Code Sandbox decided not to be working. If you're joining the stream, come say hi in the chat. Let me know you're there. Hi, George
[00:00:49] . This one might not be quite as, you know, in vogue as the, you know, Astro one that we did last week. But I think there
[00:01:04] 's still a lot of, you know, good stuff here, especially for those into SOLID. Oh, hi, Daniel, Brendan, Oren. Good to see you
[00:01:13]  all. But yeah, before we get started and give some people a chance to join the stream, I figured let's talk about current events in JavaScript. So you get
[00:01:25]  all the juicy stuff anyways, right? This past week, for me, at least, the most interesting thing that's been going on was actually Jamstack Conf. I
[00:01:37] 've never really checked it out much in the past. But there's been kind of a, obviously with Netlify sponsoring SOLID, definitely started paying more attention along
[00:01:49]  those lines. And Astro is, as you guys know, I'm a big fan of Astro. I decided to kind of check it out. And it was actually
[00:01:57]  really interesting for me because a couple of talks even touched on things that are very close to what I've been working on and what I'm interested in, especially really cool
[00:02:07]  to see that my, many, you know, I work, my day job is actually working on a different framework, not SOLID, called Marco. And it actually got
[00:02:15]  nice mentions in a couple different talks, both one by Yang on Twitter, I'm sorry, grab your full name, but, and another one by Rich Harris. And
[00:02:27]  that was really cool to see, because it's definitely kind of entering the consciousness, this whole, you know, it's more than zero kilobytes of JavaScript, but
[00:02:39]  this whole, you know, multi page app, single page app discussion. And it was kind of interesting to see that I think they won an award, I think,
[00:03:00]  best innovation, which is really cool for them. But in general, the one talk by Yang kind of really went into like showing how partial hydration works in practice, which I
[00:03:12]  thought was really cool, kind of looking at like different patterns and ways you have to build stuff. And the reason for this is because of, you know, the basis on
[00:03:21]  components, because components of those you actually end up playing this game, not unlike something you do even with React. There's an article by Dan Abramoff, who
[00:03:37]  I'd say maybe six months back where it was saying when, how do you use react.memo properly? Like when should you memoize components? And the whole point
[00:03:48]  of that article was saying that you shouldn't actually need the memoized all the time, as long as you structure stuff in a way. And that's the kind of
[00:03:55]  game you play with components. And if you don't know what I mean, is sometimes you need to be able to kind of like hoist state or out or like move
[00:04:06] , basically pass things in as children rather than have the child component render them as a way of sort of isolating state and not causing re-renders. And in the
[00:04:16]  case of partial hydration in islands is really important because you can send static content as a child into a stateful component and not required to send the JavaScript to render that child
[00:04:36] . So, yeah, yeah, I suppose, I suppose so. This might be a fair statement. But then again, maybe not. Actually, let me think here.
[00:04:52]  Because the one thing I will say is that if you view this from like a purely functional programming standpoint, which obviously be clear, react isn't, there is, like
[00:05:06] , memoizing a function is a perfectly natural way of dealing with this, right? You basically, if you view your components as functions, and then you're like, don
[00:05:15] 't redo the work, you know? I don't mind this as much as other things, but I found really interesting. I know this little tangent here, but,
[00:05:23]  you know, the question came up is that view in 3.2 recently added their own, like, V memo. And that one's, like, really interesting to me
[00:05:33]  because I think I've mentioned this before, but essentially in a reactive system, components usually mean reactive boundaries, not in Solve and all the other ones. And you
[00:05:50]  don't want too many boundaries, you don't want too many components. So, generally, when you build stuff with view or Svelte, you just, like,
[00:05:57]  kind of make a big template and then just kind of layer in your state and do it. Whereas React, you break things into more components more often because they control the
[00:06:03]  change. And that's because of V DOM. But view is both a V DOM and a reactive system. So, the V DOM wants as many components as possible, and
[00:06:11]  the reactive system doesn't want any, which causes this really awkwardness and always kind of hurt a view's performance. So, they actually came up with a binding so that
[00:06:19]  you could keep your components large and then actually V memo on nodes. I would consider that one much more of an abstraction leak by comparison because, you know, it's kind
[00:06:29]  of juggling both sides, but a very clever solution on the less. So, just kind of thinking about that. But yeah, there are definitely abstraction leaks. I
[00:06:36] 'd say the biggest abstraction leak in React is the whole clone children or clone element thing. Like, at that point, it's like you know you're dealing with V DOM
[00:06:45]  nodes. Like, any pattern where you basically render your children and then, like, introspect them and kind of, like, add stuff to the V DOM nodes, that
[00:06:54]  pattern is I'd consider a huge abstraction leak for React. Not every, you know, supporter of React is really a big fan of it, but you find it in
[00:07:04]  tons of libraries. It's really useful, but it's also, like, really kind of awkward pattern. Anyways, sorry, got a little tangent there. I love digging
[00:07:14]  into those kind of comments, as you all know. But in any case, I think it's interesting to see this conversation about, like, single page apps, multi
[00:07:28] -page apps. And I think I really felt that it was highlighted in Rich Harris's talk from Jamst.conf in that it was a weird talk. I love,
[00:07:41]  Rich has given my favorite talks of all time. I'm like, but I was trying to come figure out where it was going to, because everything was more or less
[00:07:53]  true in building a case. But then, like, it kind of tangented it at the end and talked about how different JavaScript frameworks are, you know, approaching these problems
[00:08:04] . And then it kind of tended to spell kit in this whole transitional app thing. And what's interesting to me is, I can see a future in which, you
[00:08:13]  know, everything is on the same playing ground, so to speak, but we're not really close to being there yet. There's a lot of complexity still on this whole
[00:08:24]  server side rendering thing and multi-pages, a single page app. It's really interesting that routing actually plays such a big part in the considerations here. I guess
[00:08:34]  it makes sense, right? As I said earlier, it's a backbone on the web. But essentially, knowing that you don't need to re-render something in the
[00:08:44]  browser gives you incredible amount of freedom in terms of what you send. And I think we're -- even though there's a lot of hype around the zero kilobyte JavaScript
[00:08:53]  thing today, I think really what we have to get past before we start seeing real solutions here is conflating the partial hydration with the lazy loading. I know it
[00:09:06] 's like a very -- it's a practical boundary. You go, here's my island, let's like identify it and lazy load on that and hydrate on that.
[00:09:17]  If you put those together, it keeps things simple and makes a great great experience that we saw last week. Astro is so easy to use and it just does what
[00:09:27]  you need. But thinking further out and kind of tying into Rich's idea that, you know, MPAs are basically pointless and single page apps should just absorb them all
[00:09:37]  eventually. You know, for us to actually get there, the first step is actually breaking apart that. Understanding that while we should identify where we can lazy load code,
[00:09:49]  it's different from where we can eliminate code. And, you know, that's going to take some more research. It's going to take some more work. But,
[00:09:59]  you know, it's interesting. I mean, the truth of the matter is, it's funny because I saw a couple of things where they're talking about Astro and
[00:10:07]  like a couple of ads on the jams.com where they're calling, you know, where Astro sends less JavaScript compared to, you know, the bloat
[00:10:13]  of larger frameworks like Next, Nuxt, and SvelteKit. And I was like, I'm pretty sure that's the first and last time I'm ever going
[00:10:21]  to hear someone call SvelteKit bloated. Like, the truth of the matter is, the amount of JavaScript that you're going to send in a Svelte
[00:10:28] Kit app or a solid startup is not probably going to sink the ship, you know, like maybe for a large site. And if I cared about loading, like initial
[00:10:40]  load to the utmost degree, like e-commerce, like eBay's case, you know, that thing, yes, that would still make a bit of a difference. But
[00:10:48]  we're not talking like Next, where it's like 70 kilobytes without even writing a line of code. Like, like, I think our challenge right now,
[00:11:01]  you know, well, I've got the soapbox here and you all are listening, is that not to get too distracted by the zero kilobyte JavaScript thing. I
[00:11:12]  think there's good work that's coming. But everyone adding Islander MPA mode isn't actually going to serve the best. Like, have certain libraries work, take
[00:11:23]  that direction far, you know, like Marco or Astro or whatever, like, you know, a few others, you know, push that boundary. The truth of the
[00:11:31]  matter is, we have a lot of work to do on the single page app side to catch up. And we're not going to do it by copying them. That's
[00:11:38]  the truth of the matter. We need different approaches, you know, QUIC has elements of that. But again, there's challenges with just lazy loading at such a granular
[00:11:49]  level, especially when you consider full page, um, navigation. You don't want to death by a thousand cuts. And I think, you know, I know like
[00:11:59]  before the weeks through every framework is going to be like, look, MPA mode, like next will add it next. And everyone will be like, oh, look,
[00:12:05]  we can do it too. That that's missing the point. Um, especially the zero kilobyte JavaScript thing, because a lot of the MPA modes we're going
[00:12:15]  to see are going to be like, we didn't put your script tag on the page. Look at us. We can do it too. See zero JavaScript. Um
[00:12:22] , and as I mentioned in a tweet, this, this, this, uh, week earlier, or maybe it was last week, it's not about not putting the script
[00:12:32]  tags on the page. It's not about node JavaScript. It's about only loading the JavaScript need when you do need to load JavaScript. That's, that's the
[00:12:40]  key part. That's the distinction. Um, how much impact is JavaScript bundle size versus JavaScript execution time? Especially for more app-like projects. I feel like execution time
[00:12:50]  can be a bottleneck. Yeah. Yeah. I mean, that's, that was my premise behind developing solid, right? Usually, if there's a meaningful difference
[00:13:00]  on performance on the runtime side, I wouldn't trade the bytes. I mean, that that's the thing. Like there, there are ways that I could make solid even
[00:13:07]  smaller. And there are some ways that I could get some more, very menial performance gains at a solid for some more size too. Like I try and strike a
[00:13:18]  balance there, but here's the thing. Both of those depend on what you're constrained by it's network versus CPU, right? Like it, the thing is there's
[00:13:31]  those great series of articles by, I think it was, was it Adiaz Mani? Like, or Jake Archibald. I can never remember. The
[00:13:40]  real cost of JavaScript articles. I recommend them from 2017, 18, 19. They did it three years in a row. And the thing is, on lower end devices,
[00:13:53]  the cost of executing JavaScript is, is expensive, you know, like it does add up. I think, I think they had like some Moto G4, which everyone
[00:14:06]  loves using as like the baseline for, for this kind of thing. And if I remember correctly, the, if you looked at the, in 2017, if you looked at
[00:14:18]  the median page size, it was 350 kilobytes. And for that amount of JavaScript to fully hydrate, um, on a Moto G4, it was something
[00:14:31]  like 15 seconds on a, on a, it did on a, on a fast 3G network, you know, whatever the lighthouse calls a fast 3G network.
[00:14:42]  And basically in their example, it was almost 50 50. It like, it was the, it spent basically as much time loading on the network and as much time executing.
[00:14:53]  Like if the CPU is slow enough, it is actually fairly equal. And the interesting part to me, um, I mean, I did some measurement under throttle conditions,
[00:15:03]  obviously a benchmark a lot is that 10 kilobytes of JavaScript, um, doesn't like gzip doesn't necessarily translate to a whole lot. Like, I think I
[00:15:17]  was trying to remember what it was, but I remember once seeing something like on the fast 3G kind of working out that it was, it was roughly 10 kilob
[00:15:25] ytes for every 10 to 20 kilobytes of JavaScript, it was like, uh, a hundred milliseconds or so. Um, so, I mean, it does add up
[00:15:33]  quickly. You, you get up, if, if, if, if you, you know, if you're two, if you had 200 more kilobytes, um
[00:15:41] , that could be two seconds on those slower networks, right? Or did I do the math around what, you, you know, you, you know, you, you
[00:15:48]  know what I'm getting at, right? It can be, it can be several seconds. Um, but execution time can also be, um, be, be a
[00:16:00]  big, big deal. But I mean, that's not where the performance usually is. It's not the framework's execution usually. Um, I mean, obviously with partial
[00:16:10]  hydration, it's win-win because in those situations, you're, you're, you're executing less JavaScript time and you like, you're just doing less of
[00:16:19]  everything, less shipped over the network, less parsing, less execution. Yep. Yeah. And like, maybe, maybe I'm, I'm supposed to pull up that
[00:16:27]  article. Um, the, the parse time was, was, was, was similar. Although in the 2018 and 19 article, I'm sorry, by similar, I meant
[00:16:40]  the parse time was almost the same as the execution time. Like it was almost half of that block that they called the execution time. The, the big thing in the
[00:16:46]  2018 article was they were like, we drastically improved the parsing time of JavaScript. That was like their, their big thing, right? Because these, these guys work on
[00:16:55]  the Chrome team. Um, sorry, where, where is I going with this? The, the, the big thing here is, um, and why I was talking
[00:17:08]  about this whole thing is like, you know, a Svelte kit or solid startup isn't going to sink the ship on a block site or whatever, like you're
[00:17:16]  like hacker news in Svelte kit or solid is about 13 or 14 kilobytes for that initial page. Um, like it, it doesn't matter, you know
[00:17:28] , obviously when you need to scale it to something large, larger, it's a bigger deal. Right. I think I've shared before the stats with Marco, uh
[00:17:35] , like it was, I think it was two years ago, maybe a year and a half, two years ago where they kind of looked and they're like, okay,
[00:17:42]  let's, let's take the homepage of eBay and skip a couple things. Like this is just initial load and what the Marco app does. There is some jQuery
[00:17:52]  there, um, that they just eliminated off the top. The fact that jQuery is still there is, has to do with some legacy stuff. You know how hard it
[00:17:58]  is to remove jQuery from an app once it's in there. Like, I think there's like a couple apps, like, like the header has it in there.
[00:18:06]  And since then it's like, no one feels it's safe to remove the jQuery, but remove jQuery from the equation. Just look at the Marco app. Um
[00:18:13] , the eBay homepage, you know, before all the lazy loaded ads and all that stuff came in was about 70 kilobytes of JavaScript with partial hydration turned off.
[00:18:23]  It was like 500. So like, this is significant for, for, for, for, for, for static sites that are like large and interact, like big pieces,
[00:18:34]  you know, with where, you know, there are interactive pieces, you know, we can't get away with zero KB JavaScript at eBay. Obviously there's dynamic parts
[00:18:43] , you know, and the, this, I mean, this was a large part of, you know, why eBay, um, you know, designed it like right
[00:18:55]  at the beginning, they're like, okay, we need to replace our Java set up, you know, with, we want to use JavaScript, how are we going to
[00:19:05]  do this? And they, they looked at the dust, they're like, we need streaming and we need partial hydration. That was like the, the first thing,
[00:19:11]  like other, other frameworks are getting there and other sites are getting there, but like, they, they're like, if we're, if we're realistically going to replace
[00:19:18]  our Java setup with JavaScript, we need these two things. And that's why Marco was built, like with that right off the bat back in, you know, 2012,
[00:19:26]  13, it was just like, they knew that was a thing. These are not old ideas by any means. Right. But I digress a bit, but the
[00:19:35]  funny thing to me is this has everything to do with routing again. Um, and the reason is because that is the distinction really between, um, between single page and multiple
[00:19:47]  page apps to a degree. And I don't mean, you know, the fact that there are multiple pages, you can have multiple pages in a single page app,
[00:19:55]  you know, like that whole, like, oh, it's SSG or it's multi-page and then turns into a single page app. That's still a single
[00:20:01]  page app. Cause your app is still conceptually, uh, a single entry point. You, you have a client side router, right? The, the tricky part with
[00:20:11] , with hydration and partial hydration is it's, if you know that it could be re-rendered in the client, like it's below a decision point of something
[00:20:19]  that could change in the client, you need to ship that JavaScript, maybe not right away, but you do need to ship it. And with this multi-page app,
[00:20:26]  you just never need to ship the stuff because without a client side router, you can get right down to the islands where with a client side router, that decision point of what
[00:20:37] 's dynamic is like at the top of your page. Anyway, routing is really the, the, the key consideration. And I think it's honestly the backbone of pretty
[00:20:48]  much. Yeah. I mean, I say pretty much, but it's the backbone of every application. It's the, it's the critical piece. I was, I
[00:20:56]  was talking about performance a few minutes ago and I was saying, um, usually it's not the framework and you know, the dom operations are like the, they're like
[00:21:07]  physics or like gravity. Like you don't escape from them. They just, they're just there. So don't worry about it using vanilla, using a framework.
[00:21:14]  It's, it's all the same, but what is different is how people handle routing and how apps handle routing. And historically that has been the way that I was able
[00:21:27]  to make really fast client side rendered stuff in solid versus some really poorly done stuff. Um, server side rendered stuff and why I was always very critical of server side rendered
[00:21:40] , um, frameworks. And it's kind of funny because now I work on Marco and I got a taste of server side rendered frameworks and I don't hate Marco. And
[00:21:48]  I didn't right away because they addressed the problems, but it's, it's, it's funny. Cause as I said, it's never been, it's kind
[00:21:55]  of an unfair place. I know a lot of people like are really into the server side thing and they love the kind of DX you get from something like, uh,
[00:22:03]  you know, next JS or whatnot, but I'm, I'm just predisposed to be kind of biased against something like next JS. Um, and it's not
[00:22:12] , it's not a fair bias. It was just like people were coming up with the surrendered next apps and stuff. And, you know, part of it's reacts large
[00:22:23]  obviously, but just the whole approach to how they're loading data and doing everything. And then I would build a client side app with solid and then we do lighthouse.
[00:22:32]  Like the thing that's supposed to be like, yeah, service side rendering wind and solid would just kill it. Even on like first paint and you're like, what's
[00:22:39]  wrong here? Why would anyone use something like next JS? And it's hard, even though I understand it years later to still be like, why would anyone use next JS
[00:22:48] ? Um, so I have to kind of shake that a little bit to be, to be fair, but the truth of the matter is, and I keep on saying
[00:23:00]  the truth of the matter. Cause I kind of trying to get to some kind of semblance of a point here is if you don't handle your data fetching properly and
[00:23:10]  waterfalls and whatnot, you're going to, and that's where you're going to hit the performance. That's where your app's going to seem slow and slugg
[00:23:18] ish. And stuff like streaming is the key to unlock it, you know, and things like partial hydration help for, you know, multi-page app, but it
[00:23:26] 's not even necessary if your app's small enough, but you have to look at how your data is loaded and how you handle navigation and all these kinds of elements. And
[00:23:33]  that is the router. That is the core of your app. That's the backbone. And that's why routing is so important. So I think that's enough of
[00:23:43]  an introduction. Anyone new, come say hi in the chat. But otherwise, let's dig into some of the content that I wanted to talk about today. So I
[00:24:01] 'm going to share my screen here and let's see. Let's get this going. Let's make sure. All right. I'm not going to start right away with
[00:24:14]  routing. I want to, I want to start for a second talking about control flow. And the reason I want to talk about control flow is this inspires the routing solution a
[00:24:24]  little bit. And just, just to kind of understand it a bit. Many of you have seen control flow in solid before, but the reason I want to focus on
[00:24:32]  it is because this is still, this is one of those things. This is one of those things that, um, um, sorry, I, I just was so am
[00:24:45] used, amused by that one, but, um, this is, this is one of those things where when someone tells you that your component renders once and then
[00:24:56]  just the little bits update, they, they kind of get it on the attribute level. You're just like, you, I show the creating, the create effect example and
[00:25:04] , and, and you're like, oh yeah, that makes sense. You know, you just have some dom nodes and you just update the thing. But what about big
[00:25:11]  structural differences? Right. Um, like what, what, what, what, how does that work? And I have done some videos, a good series with Kevin,
[00:25:23]  uh, a while ago where I actually went over it, but I want to just pull out this example again, my apples, bananas, tangerine example, just to
[00:25:30]  really kind of bring it home to, to explain what's going on. As many of you should know now solid JSX produces real dom elements and, um, that
[00:25:44] 's great. Right. We, we know how much less work it is, but the problem is it's, it's not, um, efficient to do extra work in
[00:25:55]  this case. And this, this will come and tie into routing. I promise. But just, just be patient with me. I'm going to, I'm going to
[00:26:02]  blow up the sound box a little bit. I have been very mean to people who try and watch this stream on mobile. I apologize. I, I just, I
[00:26:11]  love seeing all my code on the screen. I was a coffee script developer. We managed to make every file 30 lines of code and you could always see everything. And it
[00:26:20]  was always concise. And there's like that, that is where I live and it's so hard. Like when I have to scroll horizontally, it drives me nuts.
[00:26:30]  Um, but I, I understand some people will watch the stream on mobile. Um, but all right. So I have, I have a simple list here. Um,
[00:26:40]  and what I, all I'm doing is I'm just joining it with a space and I've created a signal here to basically tie to our input. This is not the
[00:26:51]  only way to do it. I probably should use a ref, but I was being lazy and I was literally doing this. This is why I was a minute late to
[00:26:55]  the stream. I was just like, I should type up an example. I should look semi prepared. Right. Um, last time with Astro, I was like not
[00:27:01]  prepared at all. Um, so I made a little example where we have our list. See this scrolling drives me nuts. We have this list of apples, bananas and oranges
[00:27:12] . And then, um, essentially the input is going to set the item. And then when we click add, we're going to just add the item to the end
[00:27:21]  of the list. We're just going to do a nice little spread, grab the current value. As in there's nothing really reactive about item, but I just wanted to
[00:27:28]  do it this way. Just made it easy. So apples, bananas, oranges, tangerines. I'm not even going to clear the input. I'm that lazy
[00:27:34] . Right. Okay. Right. Now, as, as, as you all imagine, I'm just adding some text. So I'm going to open the debugger
[00:27:46]  and this, this is why zooming in a ton is kind of fun because we got too many windows going, but let's, let's see if we can hover in on
[00:27:57]  this. And actually I'm going to refresh it first. So we can do this all over again. As you can imagine, if you have a div with some text in
[00:28:06]  it, and you add tangerines on the end, it's going to re-render all the text in the div because it's a single text node. We
[00:28:15]  are just adding text to it. It re-renders everything. No big deal. Right. And this is what I kind of meant about the attributes thing. Everyone kind
[00:28:21]  of grocks or understands that, um, when you have compiled output with solid here, it's not terribly difficult to picture that you are inserting some text. This JS
[00:28:34] X just gets converted into, um, you know, an insert statement, which is really just create effect around a text content. That's a little bit more complicated because we
[00:28:43]  can insert JSX and other stuff, but that's like the core of it. It's, it's, you know, what I will show this one more time
[00:28:50]  just because I can, this is, if you don't get it at this point, this is the easiest way of doing it. Like let's just put it, see
[00:28:58]  this example now still works and effectively I just removed the insert. Um, and the way I did that is by just using the text content property, but it's essentially doing
[00:29:13]  the same thing. All we're doing is we're saying, Hey, the text content is a string. This is the thing that's kind of easy to understand,
[00:29:20]  right? If, if we look at here in our, here, we just have an, create an effect, set the data on the text node. If you're not
[00:29:27]  aware, text nodes have a data field. It's the fastest way to update the text on text mode is faster than replacing the text or using text content or doing any of
[00:29:35]  that stuff. If you already have the text node, just replace its data. We were just putting a string in. So obviously browser has to do all the work. Um
[00:29:41] , sometimes there are V dom diffing algorithms that can actually diff the string, um, like the text in the string and, um, surplus actually does some diffing
[00:29:54]  on strings. I just never bothered. It just, there's some things that are worth doing and there's some things that are probably not worth doing. This one for my
[00:30:01] , on my list was just like, I didn't have a reason. I'm sure someone can think of a reason. Maybe you're working on like some kind of
[00:30:11]  text editor and you want to diff it. Yeah. And this then write the diff yourself, you know, I, I mean, I don't know if you're dealing
[00:30:18]  with a single text node, ultimately like you, you, you need to do this. Otherwise you need separate text nodes. Okay. So little bit meandery point is
[00:30:30]  we have our, and I'm just gonna put this back just because it looks more sane this way. Um, we, we, we have our list and every time
[00:30:38]  we add an item with root thing. So the first thing you're going to do, and the reason number is we we we've used react before, right? So,
[00:30:46]  or maybe you haven't, but sorry, let's, let's, uh, let's do something like list map, um, item. And let's add,
[00:31:00]  um, let's, let's add an element in here so that we're doing a bit more and let's get this out of our way. Let's do this.
[00:31:14]  All right. We've lost my night spaces. Add them back in a cheap way. No, I know I can't cause or can I can never remember. It
[00:31:25] 's a white space rules. Anyways, anyways, I've got, I've got, I've got a nice, uh, element in here span and now let's look
[00:31:38]  at what happens when we add stuff to the list, right? We know these are real DOM elements. We've, we've gone through that before. We're actually
[00:31:49]  literally mapping to a span. So what happens to our apples, banana and orange now? See, very nice. And now let's add our panderine. Oh,
[00:32:04]  do you see how everything flickered? Maybe I'll do it one more time. Look, look at all the spans. Flicker, flicker, flicker. Well
[00:32:11] , the unfortunate little. Yeah. Yeah. This is like, this is like my best friend, like me and non breaking space. It's a typo there,
[00:32:29]  but, um, our, our, our, our, our, our good friends. Uh, yeah, I I'm, I've revealed my age a few times now
[00:32:37] , so I'm not too ashamed of it. But, um, um, when I started working on the web, everything was still in tables. That's how I
[00:32:45]  learned. Everything was in tables. So I, I'm that old school. Um, then yeah, if you want a space, that's how you make a space.
[00:32:55]  I used to do layout to the BRs. Like that's, that's, that's what I'm talking about. Right. So you see how you see how
[00:33:05]  this like renders everything. So the reason is if you, every time you call it, once you get to a map and you call the, it goes, Oh,
[00:33:13]  list is updated. Let's call map. It has to go to completion. It's like for each, like when you have a for loop and you have for each
[00:33:21] , the decision between choosing whether they use for loop or for each is usually if you need the break, because for each, you don't get the break. You have to
[00:33:28]  go, does the whole list. In a sense, map is the same thing. You're actually going to the end and it's grabbing all it's basically taking your data
[00:33:35] , mapping it to a new span and it's inserting it. We're basically at the mercy of how map operates here. This can never be the efficient way. Like,
[00:33:46]  it's fine. Like if we never add anything to the list, um, sure, you know, but if we ever have to update anything, this, this isn
[00:33:56] 't going to fly. Right. And how do you, how do you solve this? Right. Um, how do you solve this? Yeah. I'm yes. I
[00:34:07]  mean, we had the right help helpers here and there's a map array helper, but I'm not going to bother with that because, you know, I don
[00:34:15] 't really care that there's a map array helper. I, one thing like it's a, it's a minor detail, but components are inert. So if you use
[00:34:27]  the map array helper, it actually creates one extra reactive wrapper, unless you hoist it out, because it actually needs to, it tracks the, it tracks extra context
[00:34:40] . It like doesn't, it's not a big deal. Four is, is neater anyway. So let's, let's switch in four. And this, this
[00:34:47]  is why solid has a four, you know, people, I'm not a big fan, but the truth of the matter is like, let's just grab this out.
[00:35:02]  It's not here. It's not that different and each list, but the reason, the reason, the reason we have this four is, is so that instead of
[00:35:21]  blindly iterating over everything solid goes, Oh, has the data changed? If the data has changed, then we'll remap it. Otherwise, you know, just
[00:35:33]  insert it in place. And this is not unlike the diffing algorithms you find in any kind of VDOM library. I mean, every single framework handles lists at runtime
[00:35:48] . There's no compile ahead solution here. This is the same thing, whether you're solid, Svelte or react. And you might be like, Oh,
[00:35:58]  where's the key? Well, here's the thing. Solid is actually based on mutation. I know I make a big deal about making everything read only and unidire
[00:36:07] ctional flow, but the actual data structures underneath are actually either shallow atomic like this list, or if you want to update stuff inside the item. Like if it's an
[00:36:22]  object, you'd make use a store and then, or nested signals, and then you'd update those independently. Basically we can just check by references. Um,
[00:36:30]  as mentioned, there is a index component and the index component actually looks, it's actually a lot simpler. Um, four actually goes, it goes over the list and go
[00:36:46] , has the reference changed? And if the reference has changed, remap it and sorted and do all that stuff. Index is just like, it does do the same
[00:36:55]  kind of reference change check, but it like doesn't care in terms of sorting or like this one, it has to be kind of smarter. It goes, Oh, is
[00:37:03]  this already in the list? Can we move it? You know, keep the references and moving around index is just like, is the thing in the place what I expect it
[00:37:11]  to be? No, like wipe it out, like just replace it. Like, um, but for like simple stuff, you know, like these kinds of values index
[00:37:20]  is actually probably the right solution here. Um, because we don't actually care. Like if we move apples between apples and bananas, we don't actually need to like,
[00:37:32]  there's, there's no con there's no state being really bound here. There's no concept of model. And I can, I can, I can show what,
[00:37:42]  I can show what the difference is between them actually in a second year. That's a great question. I wasn't even thinking about that, but it's, it
[00:37:47] 's all related. Right. Um, but the thing is, uh, someone posted, I forget who was, maybe it's Scott Talinsky, uh, who's on
[00:37:56]  that podcast syntax FM. Yeah. He was saying like, Oh, you know, the best part about Svelte is you don't have to use keyed on four
[00:38:02] . And it's like, no, no, no, no, no, no, no. Svelte and view and react and most frameworks, not solid,
[00:38:16]  not knockout, need the key because they actually do a keyed comparison. Um, if you don't put the key on Svelte, it basically reverts
[00:38:28]  back to index mode and, and view and Svelte for some reason made that the default, even though like, it is very common knowledge that this is a bad thing
[00:38:38] . Like there's articles, like many, many articles about how that's an anti pattern, but that's the default they give you out of the box. Cause they don
[00:38:45] 't want to explain keys to people. But if you're doing anything with real model data where you have IDs and stuff, you should be using key. And that means
[00:38:52]  in Svelte for is solid keyed thing. Like it's using references, but it is still keyed conceptually. Um, always, if you can use key
[00:39:01] , you there's considerations when you have, um, animations or any kind of state that can possibly be represented on the, on the dom. Um, the dom is not
[00:39:11] , even though we like to pretend that it's like this projection of our data, it means it keeps its own state, whether we like it or not. Um,
[00:39:18]  obviously animation is an obvious one. If you're into web components, another great example, state is actually being kept in the dom there. Ironically, most web component frameworks
[00:39:28]  default to index as well. So it's, I don't know why react and Vdom libraries are the only libraries actually promoting doing things the correct way. But like
[00:39:40] , this isn't this, this, like this won't always bite you, but, but it is a real thing. I mean, here's the thing using index because
[00:39:54]  of the way that it changes things can sometimes be more performing because it moves less dom elements around, but it can cause tearing and yeah, I'm, I'm a
[00:40:06]  pretty big proponent of basically like giving people the tools to do things the right way, rather than giving them tools where they probably won't get caught. And then maybe,
[00:40:17]  you know, when they need to learn how things actually work, they can do that. That's just, that's just not where I'm at. So let's
[00:40:25]  continue. Sorry. Come on the stream, get, get all my ranting as, as someone already said. So let's, let's, let's continue. Let
[00:40:33] 's continue here. So, okay. We got our apples, bananas, oranges. Now we got our four. So as you can imagine, hopefully you can see what I
[00:40:41] 've got highlighted on the side of the screen here. When tangerine comes in, it should only just highlight the last span. See, we fixed our problem. Let
[00:40:50] 's add it again. We are not re-rendering everything. We're only rendering what changed. And this is the same if we sorted it or did something else
[00:40:57] . But four kind of helps us here. And if we wanted, can I, can I, I think this might be easiest way to show the difference between four and index
[00:41:14] . I'm going to start adding stuff to the front of the list instead of the end of the list. Okay. And if you add stuff to the front of the
[00:41:21]  list, watch what happens. It's not bad. We saw span glow in and apples and bananas got pushed down, but they did not re-render. And if we
[00:41:30]  add tangerine again, that was weird. Let me, let me double check. I want to sanity check there. Because it didn't do what I expected,
[00:41:45]  which is weird. Oh, you know why? It's because I'm using four on basic primitives. Referential check is value check. So it kind of, okay
[00:41:59] . This is actually expected, but it's a little bit weird. It doesn't matter. It's because I use the exact same word. If I use tanger
[00:42:11] ine, it basically, it's adding it second. It's just the way that the diffing works. It doesn't actually do anything terribly wrong. But look, if
[00:42:27]  I go tangerine and then I make this tangerine one, it'll do what we expect. It's just the order in which the, like, it
[00:42:35]  runs backwards or forwards basically through the diffing. Right? It just, it's just because it, you can't refer and actually check our basic value. But let's
[00:42:47]  change this to index now. Right? And you can already kind of see the difference with index right off the bat. Because with index, the item isn't fixed.
[00:43:02]  Right? With index, the item is actually a signal. Because with four, the item is fixed and the index is a signal. Because you only render it once. And
[00:43:14]  then even if you move it, the index might change. But with index, we only care about the index. So it's actually better for this example. So it
[00:43:22] 's actually the index that is not a signal. And it's the item that is a signal for this one. Because for when you render something, it's never the,
[00:43:31]  it's never the index of change. You don't move it around. You actually change the data. So in some cases, this is bad. In some cases, this
[00:43:41]  is more performant. Because now when I add tangerine, you can't see the right order. But look at what happens to all the divs. Do
[00:43:49]  you see that? They all flashed. And you're like, wait, is that terrible? Let's watch it again. Except for oranges. You notice how oranges is
[00:44:03]  not flashing here? Can anyone guess why? The span flashed, but not the text. The reason for this is what's going on with index is, as you
[00:44:23]  lengthen the list, it just adds another span to the end. So it's adding the last span with oranges as is. So while it flickers, it just
[00:44:42]  adds a new item with oranges on the end. But the reason they all flicker is they're not actually recreating the spans. I know Chrome dev tools aren't doing
[00:44:49]  a great job of showcasing this. But what's actually happening is they're hijacking the previous span, essentially. It's just the signal inside the span that's
[00:45:03]  changing. So when I added tangerine, let's do this again from the beginning. It's actually tangerine is rewriting apples. Apples is rewriting
[00:45:15]  bananas. Bananas is rewriting oranges. And a new span at the end is getting added with oranges. So I'll do it again. See? So you might
[00:45:24]  be going like, wow, that just updated everything. That's kind of terrible, right? Well, the truth of the matter is, it's not for certain things.
[00:45:37]  If it's just some text like this, it's more expensive to move the DOM nodes around than updating all the text. So if you've ever seen the JS framework
[00:45:45]  benchmark, and there's a keyed and non keyed section, right? You know, let's just pull it up. I can do this. Can't I?
[00:45:53]  Oh, yeah. Right. I never talk about the non keyed section. Because, you know, as I mentioned, it's novel, but it's not,
[00:46:10]  you know, a big deal. It's like, I should put it, I'd never use it if I could avoid it. What I want to get here is,
[00:46:18]  there is an option here, which is like, put everything in a single table. I think maybe they got rid of it. Yeah, I guess they got rid of it
[00:46:36] . There used to be an option in the older versions, which was like, put everything in a single table. There's too many frameworks. But we, generally speaking
[00:46:48] , if you take something, you know, near the front of the list here, you know. Ooh, one more had a good run. Nice. Anyways. That
[00:47:01] 's on both sides. And you notice, my frameworks are not on both sides. Because, again, but what's the framework that's on? Like, Svelte
[00:47:13]  is actually pretty high on this non keyed side here. And Mikado is just like faster than vanilla because they're not playing fair. There's actually a new vanilla
[00:47:26]  implementation coming out for non keyed. That'll be take the front again. These vanilla implementations are almost implemented too much from a keyed perspective, even if they're
[00:47:36]  not trying not to be keyed. I actually wrote vanilla JS one, because vanilla was too slow. And we needed to improve performance. Although it seems like they jumped
[00:47:45]  back and forth in terms of which one's the fastest. But my point is, if you look for certain things, non keyed is way faster. Creation, 79.
[00:47:56]  It's basically the same on both sides. But when you, when you replace the rows, so when you have a thousand rows on the page and then you, and then
[00:48:04]  when you're like, I want a new thousand rows. Well, you know, basically, replacing the data with keyed, it has to destroy all a thousand rows
[00:48:12]  and insert all new thousand rows. But when non keyed, this is significantly faster. 33. I don't know. Maybe I need to blow this up a lot.
[00:48:20]  Yeah. It's significantly faster. It's like 33, 37 or whatever versus 86, because it doesn't actually blow up the rows. It just hijacks it with the
[00:48:30]  new data. Another place where this is swap rows. Swap rows, 48. And down here. Swap rows. 30. Looking at the vanilla implementations.
[00:48:44]  Because swapping rows, instead of moving two DOM elements from like row five down to row 99 or whatever, row two to 99, they actually just switch the text. So
[00:48:56]  non keyed is a really good way to win at some benchmarks. But as I said there, don't trust me. There are tons of articles about why this is
[00:49:08]  like, not what you want to do if you can avoid it. Anyway. Um, yeah, even room. Yeah. Remove row. Remove, remove row should be another
[00:49:20]  one. Right. Although interesting. Remove row is more. Yeah. Remove row is more expensive for non keyed in most cases, because what remove row does is in
[00:49:34]  keyed, it just finds the row and it removes it and everything shifts up in non keyed. It removes the last row off the table, but then has to shift
[00:49:43]  all the data up. And in that case for that single row operation, I guess it's faster they do a keyed. Um, I'm sure Mikado basically
[00:49:53]  is doing whatever is possible to optimize. So whether they approach a keyed or non keyed for the specific benchmark, because Mikado is basically written in a way that it
[00:50:03] 's, you can write exactly what operation you want to happen. Um, so it's kind of gaming this benchmark a little bit, but, um, it's the
[00:50:16]  fact that they basically created a better vanilla JS here is it's good for kind of, um, um, um, you know, having a baseline, as I said,
[00:50:26]  I don't really look at the non keyed at all, but I just thought kind of pointed out that that's the difference. So just to understand there are performance considerations
[00:50:35]  that come with a key versus non keyed. It's not always, um, faster or slower. Um, I think it even affects memory usage. Not really.
[00:50:45]  Okay. Yeah. So yeah. Memory usage in Chrome has been going down every year. It's just like something you can kind of bank on, I guess. Um,
[00:50:56]  in any case, lovely tangent, but that is the difference between index and four, which I think is a great kind of point. But the reason I wanted you all
[00:51:08]  to think about this is this is the baseline we have to come into when we talk about routing. Yeah. I promise I'd talk about routing. Right. Um, so
[00:51:24]  I'm going to pull up, um, actually, you know what, we probably have a solid JS.com in this example section, but I can probably just Oh
[00:51:39] , right. No, we don't. We can't because the one downside of the, of the playground is we can't actually, uh, show off route routing
[00:51:52] . Um, the playground doesn't actually support, uh, changing routes. So I'm going to see if I can find my old, old simple routing demo. Yeah.
[00:52:03]  Let's do this. Some people thought this was really cool when I first released solid, like right at the very beginning. Um, and again, let's see if
[00:52:12]  we can collapse that, make this all bigger. Okay. Um, of course now I need to find the files. Okay. Let's go back. Okay. So.
[00:52:25]  Oh, interesting. So I made the silly little example and you can see it here when you look at the URL bar, when you switch from profile and you switch the
[00:52:38]  settings, it's, it's, it's routing, it's changing the URL and yeah, I'm, I'm, I'm using hash change, not pop state
[00:52:47] . So I can't remember if refresh and refreshing works. Okay. Yeah. So essentially here we go. Routing, simple, simple routing. And the way that we
[00:52:56]  accomplished this in solid was using switch match. A lot of people thought this was really cool that solid shipped with switch match. They're like, Oh, you have a
[00:53:04]  router built in. I don't recommend this as a, as a router necessarily, but for stuff like tab navigation, it is kind of nice. Right. Um, the
[00:53:13] , the solution that I used to routing here is pretty simplistic. Um, the when conditions just match on a string, uh, like basically on the route string. And
[00:53:23]  then this implementation about the smallest router imaginable is basically a signal that pulls the hash off or defaults to home. And then whenever the hash change event happens, it basically
[00:53:38]  slices off the, the, the part. So this doesn't handle like deep routes or like anything. It's just literally just a string match and then cleans up for
[00:53:47]  moose event listener. And then the match function that it returns is literally like, is the string you're asking equal to the current value of the signal. And because it
[00:53:56]  does signal read in here, this will trigger the, the match conditions for the switch whenever, whenever the location updates. So pretty straightforward and simple and something kind of built right
[00:54:11]  into solid. And this does the trick, right? Like if you want to switch here, render something else, the thing is this is also routing, right? And
[00:54:26]  by that, what I mean is all the configures, you never look at. Perfect. Okay. Right. When we switch our settings here, we are redrawing
[00:54:38]  this whole thing, even though we've already been there before. Some, some, some people ask me when you're like, oh, if you have tab, tab
[00:54:45]  navigation, how do I not like blow everything away and re-rendered it again? And I mean, you can do display none and you don't need to use switch
[00:54:53]  match. Like it's, it'd be pretty easy to convert this example to basically, you know, get rid of the switch match and then wrap each like in a div
[00:55:05]  that had like a, I should call it like a style attribute. And then just use this the exact same way. Obviously when your UI is more complicated, there is
[00:55:17]  some benefit, like it's worth unloading stuff because like, it's interesting. As long as your reactive graph is there, it's live, even if it's off
[00:55:24]  the screen or, you know, in this case, it is on the screen if you just display none. So like, there were some requests to be like, oh,
[00:55:31]  can you just keep it alive in the background? I mean, you control the DOM nodes. You can just kind of like hoist and keep reference to the DOM nodes
[00:55:36]  and reinsert them and do all this. And it's like, if you want to do that, go for it. But like you're, you're, you could
[00:55:43]  actually have it, you know, actually not just display them, but actually remove the DOM nodes and reinsert them and, you know, do that whole game to a certain
[00:55:52]  degree. But the reactive graph is still live. So if someone changes something, it's still connected. If you've seen my previous stream or talks about reactivity and
[00:56:02]  dynamic, you know, you know how we don't have the arrays for like create effect and solid, you know, like the explicit dependencies. It's more than that.
[00:56:13]  We actually can change the dependencies at runtime. So like when something is not on the screen, we are not subscribed. It does not update, you know, I mean
[00:56:21] , that that's kind of obvious, but just kind of restating the, the kind of core reactive thing that's, you know, sometimes it's just, it's
[00:56:31]  okay to re-render portions of the screen, but I just wanted to point to that. Like you, you could easily switch this around so that these are always rendered
[00:56:43]  and, and you just display none based, based on this. It just wanted to kind of show the most basic approach to routing. And a lot of the early routers
[00:56:52]  that were created for solid used this approach, um, uh, based on switch and actually our real world demo is probably the most complicated version of this. I, I hadn
[00:57:05] 't really built a router yet when I was building it and I was like, oh, okay, well I'll just make the match function, accept query parameters and other
[00:57:13]  stuff. Like basically just make it more sophisticated. And you could build a router like that. We've, we've moved past that with solid app router. Um, and
[00:57:23]  you know, but I just kind of the baseline here and this is all fine and good, but what happens when you have nested routes and by nested routes,
[00:57:44]  I don't mean deep, I don't mean like, uh, deep routes necessarily. I already showed you that this is limited for that, but let me, let
[00:57:56]  me, let me replace it. Let's show me, let me show a better, a better example of what I'm talking about here. This one. Now we're
[00:58:06]  going to switch over to the solid app router and can I start talking about that a little bit? Why is this so weird? Okay. Yeah. It's like, this
[00:58:16]  wasn't there a second ago. Okay. Now it is perfectly valid to have some kind of route that has like a long path, like slash users, slash blogs,
[00:58:36]  slash ID, you know, that, that, that, that isn't necessarily a nested route. That is just a route that has many layers to it. And if
[00:58:46]  you use solids router to do it, you could just add a route here. Right now what we're looking at is slash, which is home. But if, if
[00:58:55]  I wanted to make, you know, make something that was, uh, you know, why not let's just for fun, let's just add something here. Let's
[00:59:06]  make much longer route. Okay. And we'll draw, we'll just make an, that's fine. This one's element. I don't know why I have
[00:59:19]  them mixed in maps. This one should be, it should be component. Let's just like, but you know, and then I mean, I could make a link,
[00:59:39]  but let's just put it in here much longer route. Um, it's just gonna, it's, it's just gonna work, right? You can, you
[00:59:53]  can make the path. You can put even wild cards in it. You can make it as long as you want. That is not a nested route. Um, you
[01:00:00]  could, you could build your whole site off this and most routers are kind of flat and that's what they do. You can just list as many reps you want
[01:00:08] . Maybe there's an order matters. Maybe there's a sorting bit, but essentially you just change it and it draws a new page. That's a basic writer on the
[01:00:15]  server. That's a writer. You just define your routes and, and you just render a new page. Every page re-renders everything. Well, maybe not the
[01:00:23] , the kind of header and our nav link or whatever, like in our example here, we have, uh, some navigation links and then we have suspense, but don
[01:00:36] 't worry too much about that. And then we have, um, I don't know what I call that. Stardec. It's the outlet. It's the
[01:00:44]  use route outlet thing from, uh, from, um, uh, I'm just gonna rename it to outlet. This makes more sense to me, but it's,
[01:00:55]  it's just the, uh, the starting point of our router here. Um, when defined the, uh, an object solid router also supports like react router style, where
[01:01:07]  you can like put the components in like a routes object and, uh, uh, uh, like inline it. So if for, for those of you who are
[01:01:16]  familiar with react router, um, maybe, and maybe that's a better familiarity thing. We do support that. You've probably seen this sort of example before. Um,
[01:01:30]  don't worry too much about the nesting yet. This is, I'm using the other example to showcase it better, but essentially you can go routes and then route.
[01:01:37]  And wherever you put that, if essentially we'll match on the path and draw your element solids router does work very similar to reacts router, but I wanted to support thing
[01:01:50] , a couple other things, um, mainly, um, file-based routing and nested routing. And for that reason, took a slightly different approach to also support objects
[01:02:04] . And when I started solid app router, it was only objects. Basically we had two official routers for solid. One was JSX style. And then I was
[01:02:12]  building this one that was like object style like this. And we saw react router six and we're like, oh, we can just make this into a single router. So
[01:02:22]  literally the two of us, uh, joined together, Ryan and Ryan. Um, and we made, so we made the new version of the solid app router. It
[01:02:29]  was actually more of the other Ryan who did most of the work there. He deserves the credit. Um, but, um, it was kind of based on combining both of
[01:02:36]  these ideas and what those ideas are or what I intend to kind of show here. Right. So what I'm getting at is yes, you can essentially define as many of
[01:02:48]  these routes and components. And most routers work like this, but you can go back to home here. Um, what is interesting is we do not want to do
[01:03:04]  extra work with salt. That was the whole point of that intro, right? Why I was, why I was kind of stressing about control flow and for a bunch of pages
[01:03:17] . And solid as I mentioned before, perhaps the wrap the routes with suspense for this silly loading fallback. If you look really carefully here, you slow so freaking fast
[01:03:34] . You can't so fast. You can't even see it. Oh, maybe I'll be on a page. You can kind of see, oh, you see the
[01:03:40]  loading for a second. Um, really poor CSS being done here, but you get the gist of it. Um, essentially we can kind of like load in the
[01:03:51]  routes as we, as we want, what I've actually defined here for, for the routes is all the pages are actually lazy loaded routes. And we have a lazy component
[01:04:02]  like react does. And essentially this just is just like an empty shell of a component that takes props. And then when you render it somewhere at that point, it asks
[01:04:15]  for the JavaScript code for that component. And then when it loads, passes the props through and without suspense, solid still works fine with lazy. It'll just not render anything
[01:04:26] , but suspense gives us a way to set our custom placeholder. Right. I talked about suspense a couple of weeks ago. It has relevance here. So it'll probably
[01:04:32]  come back into the conversation, but I just wanted to kind of establish that. So when I say nested routing, then what am I talking about? What I
[01:04:44] 'm actually talking about is shared layouts, right? Now, if you've ever made a simple CRUD app, I'm sure many of you have, there are often the
[01:05:00]  page that has the list of things you're managing, let's say users like this. And the thing that has like the specific details page user ID. And what I
[01:05:11]  wanted to kind of show off here is you notice that these are not nested. This is kind of to my point that the details list and the, the details and the
[01:05:21]  list are usually completely separate pages with completely separate layouts. That's very common. So we take our homepage, we go to users, we're going to see a bit
[01:05:30]  of a, of a, of a lazy load because of it's, it's a transition at that point. I'll talk more about that in a minute, but when
[01:05:37]  you go from users to specific user, I know this layout share, but that's because this layout is like top, top level, this user's panel and this whole thing
[01:05:46]  goes away. Right. Um, these are completely separate pages, right? The user page has its own set of things here. And you can see it, it's
[01:06:00]  defined by a completely parallel, separate route. Now there's some shared layout and every app has that starting point that shared that shared layout. But what, when you go to
[01:06:13]  the user's page, you want to manage it. You have a few things you have the, about the settings and special, whatever specialist, but you know what I mean
[01:06:22] ? You just have a few more tabs, things you want to do there. But now when you switch in here, like pretend this, there's a banner or an
[01:06:29]  image, you don't want to redraw it. This, this, this thing shouldn't redraw. Right. And if we define our routes and let, let,
[01:06:38]  let's go inspect this stuff again. Um, right. So we have see this H2 for users and this whole thing here. Now, if, if I switch back
[01:06:50]  to users, you're going to see the whole thing compressed in here because we re-rendered a whole page users. And when we go to the specific user,
[01:06:59]  whole thing re-renders like whole thing. But now when we go between about, which we're sitting on right now and to settings, we don't want this top
[01:07:07]  user to re-render. So when I search settings here, oh, see, it didn't re-render. The user thing stayed. That is what nested
[01:07:18] , nested routes are for. It's, it's about this kind of onioning. And this is not a new idea. Nested routing on the client has been
[01:07:27]  around for ages. The first time I actually saw it was an ember router back in 2011, I think, but since the react era, it kind of has faded
[01:07:37]  out a bit. And the reason is because the VDOM doesn't care. Like you like base level, you switch to a new page, you just re-render
[01:07:47]  it, you know, we all saw that. Okay. But if you care a lot about sharing the layout, well, you can put a key property on the node and
[01:07:56]  the VDOM will go, oh, it's, it's the same component as the last time we just won't re-render it. This is one of
[01:08:02]  the few places where keying for VDOM actually makes like a big difference outside of lists. A lot of times, how should I put this? A lot of times
[01:08:17]  I heard some people boasting a few years ago that they like the VDOM was the future and that, and because they had figured out how to basically move elements through
[01:08:25]  different parent owners throughout the DOM and keeping it keyed. I've never seen this work effectively, efficiently, and even the experts in the field, people I consider experts
[01:08:36]  like Boris Kahl, creator of EV, Dom McAnnery, creator of Inferno, like they're not suggesting you, you do that. It's like
[01:08:43]  not worth the effort, but a couple of years ago, there was someone like saying like, they figured it out there. But I mean, their framework, I guess,
[01:08:52]  I don't know, I haven't heard any more of it in two years, so I guess it didn't actually pan out. But my point is, for
[01:08:59]  something like this, the shared key is actually valuable. But we don't have shared key because we don't have diffing. And old frameworks like Backbone did not have
[01:09:09]  diffing. You didn't have that lecture. You render the DOM, you don't want to redo the work. So the way you solve this is through shared layout,
[01:09:17]  essentially. It's just like nesting conditional if statements and stuff. We don't want the end user to have to go through all the things. But if you view
[01:09:24]  your whole app as a bunch of switch statements that are nested, we can granularly trigger only the switch statements that have actually changed. That's the idea, right?
[01:09:33]  If you're just changing that sub route, like we are here with settings, then we don't need to re-render the rest, just the part down here. And
[01:09:45]  if we do, well, then we do. The point, though, is this on its own, like React Router 1 actually worked like this. It was basically
[01:09:58]  off Ember Router, and then they actually by React Router 4 had gotten completely away from this. But it came back in React Router 6, right? Why
[01:10:08]  did it come back in React Router 6? It's funny. A couple times now, I've been working and cooking up these ideas for years, and then someone
[01:10:23]  else beats it to the market for the same reasons, right? It's obvious that from a pure standpoint, not doing extra work is beneficial. In some ways, with React
[01:10:38] ivity and the DOM and Novidom, you're kind of forced to think about this earlier, right? But it's not really... So, I mean, that
[01:10:49] 's good or bad. But generally, if you do something stupid in some... It's hard to say. There's different kinds of doing stuff stupid. If you render too
[01:10:59]  much DOM in Solid, you're going to find out, you know, if you... fairly fast, probably. I mean, maybe not. Modern things are fast.
[01:11:08]  I think that's the funniest thing about Svelte. Sometimes there's unoptimal patterns people use in Svelte, and it's still fast enough that people don
[01:11:14] 't really even notice. Kind of like the key property thing I was talking about before. But, like, React's VDOM and Views VDOM kind of
[01:11:23]  protect it from doing stuff that's too stupid on the DOM side. The trade-off is you can do really stupid stuff on the user code side that completely, like,
[01:11:31]  ties yourself up and re-renders and, you know. But on the DOM side, you're unlikely to do something stupid. Where in Solid, if you do
[01:11:40]  something stupid, so to speak, you know, not to insult anyone, but you will do excessive DOM work, and that can be even more noticeably expensive. So,
[01:11:53]  while it's really hard to do excessive DOM work in React, it sometimes gets buried in, like, the web of, like, component updates and stuff. It's
[01:12:03]  a trade-off. But what I'm trying to get at is we need these layouts, these shared layouts, if we don't want to, like, do much re
[01:12:16] -under. I mean, you'll be fine. But this is one of the problems we've had, actually, on universal solutions for Solid. Like, there's
[01:12:22]  always a few caveats here. Some of it's fine-grained reactivity, where we don't really have a render function. So, framework agnostic solutions
[01:12:30]  that, like, model things as, oh, we'll just call your render function. Yeah, it doesn't work for us, really. I mean, you could kind
[01:12:36]  of render to props and then have that. But it's, like, you lose a lot of the benefits. Or some framework agnostic solutions don't have nested
[01:12:43]  routing. Well, I mean, it's, you can do it. But this is the power of nested routing from a pure, you know, like, performance
[01:12:58]  standpoint. Like, it's always better to be able to do this. Even with a VDOM, you do less work. But with a real DOM, you want
[01:13:04]  to, you need to do less work. But there is a positive here that's more than this. And something that I was aware of right off the data, or sorry
[01:13:11] , right off the beginning. I'm kind of Freudian slipping here a bit. And that is that nesting router routing gives you more opportunities to kind of break your
[01:13:24]  page out into layouts and sections in a way that navigation is aware of. And this is super powerful. Right? I've got, I've got a base, it
[01:13:36]  might be hard to see this all on one screen. But I've defined a structure here where we have users, which are parallel to user ID. But once you're in
[01:13:45]  user ID, we have our index, which is what we saw the, the, the about page, so to speak, we have settings, and we have this custom
[01:13:54] . And then we have all this is how we can handle stuff. I mean, we haven't really showcased this stuff. But if you, if you do, I
[01:14:00]  mean, can we do that? No, I think it's, it's one, sure, like, true, the page, this is page not found. So if
[01:14:16]  this is the top of all, all, and then if you go to a specific user, and try and go to a route that doesn't exist, you will,
[01:14:24]  oh, no, this all will never get hit because of custom. Whatever. This is, this is, this is, this was a bit of a playground for me.
[01:14:33]  So don't worry about it too much. But essentially, where was I going with this? The Okay, nevermind, I forget where I was going on that one
[01:14:48] . Let's, I just, I wanted to show what the structure we have here, we essentially have a top level, then we have, including a listing, then
[01:15:01]  we have a details page that is has these children that are nested, which also include a dynamic, a dynamic route in it too. So, and some other static routes
[01:15:13] . So essentially, this is just a nested, nested structure. And it means that when you navigate to any thing, well, let's see what the special
[01:15:23]  adjusts other, it just split special does is it takes the URL here, and then feeds it out to to this, if I show you the special components, so to
[01:15:32]  speak, when our pages here, and actually laid this out the way kind of a file based router would do it just for sake, but a custom is doing here is it
[01:15:42] 's literally taking the URL, and I don't know what happened here. It's basically taking the URL, and it's feeding it down into via the use par
[01:16:08] ams or the router into something you can see. So, all right, let's do this. And then it's using, yeah, this button just goes back to the
[01:16:19]  user's page. Yeah. So if I put something else here, like a wild card, it will be high 8888. Okay, so not a ton.
[01:16:31]  The router itself has these hooks built in that let you kind of read from use the navigate function or read from the parameters. But the reason that the routing structure is important is
[01:16:46]  because one of the biggest problems with performance is not the DOM rendering or the framework, which is what I was talking about before. While this was the baseline on why I
[01:17:02] , you know, why nested routing exists, and why I got interested in nested routing, it is not the reason, the sole reason why this is incredibly powerful to
[01:17:14]  structurally know about your app. Because with this description, we know which panels load. So if you tie your data fetching to said panels, we have the
[01:17:30]  ability, based on the route, the second you navigate to it, to know all the data you're going to need for your page. That is the reason. How
[01:17:50]  we accomplish this is actually building something that I call data functions into the router. You'll see, you'll see these like data, custom data, data, user data,
[01:18:03]  users data, data, user data. And what these are, is they're almost like components, but we bring them in synchronously. So these become part of the main
[01:18:11]  bundle where the component code is, is, is lazy. And this is why I did separate files. It is possible to split the files and use a bundler to
[01:18:19]  do some really smart stuff that I haven't figured out. But generally when you lazy import something, it brings the whole component in. And I didn't want to bring like
[01:18:27]  a get static props or whatever next is using like into the component code. Like I don't want to bring all of that JavaScript code in. And it was the, the
[01:18:35]  router here is kind of bundler agnostic. So by having a separate, you know, function, you use like a data file or whatever, like convention,
[01:18:44]  this way, also convention, I use install start, we have this ability to basically, how it's separated to begin with, you're just like, this goes with the
[01:18:54]  main bundle, this gets lazy loaded. And what this allows us to do is define these data functions and users.data here, pretty, I'm baking it in
[01:19:09]  this example, obviously, but you know, I use solid to create resource. And what that does is based on users being read somewhere, it will trigger that suspense up above
[01:19:23]  that we've been looking at. And if you've been watching here, and you've been noticing this browser like loading bar that happens, some of it's lazy,
[01:19:33]  obviously, but after the lazy components loaded the first time, it's never going to trigger that what you're seeing is a fake data load, more or less. And This
[01:19:41]  is using suspense transitions to indicate that it's loading. It actually stays on the first page until the data loads, and then it renders it. And this is part of
[01:19:52]  the suspense transitions. Now, I can show a little bit more examples because I finally have access to CodeSandbox here. But essentially, we're just creating a resource
[01:20:00] . I'm delaying it 300 milliseconds here, and it's returning this data object normalized kind of reduct style. And then the data function just returns whatever that data
[01:20:10]  is so that our component can call useData and get that data. And it's just an object with users, so it's just iterating over that user list.
[01:20:22]  What's cool about create resource and just using kind of signal type API is child components or this user's component doesn't even need to know that it's a resource or
[01:20:36]  it's a signal or whatever. It just handles props and stuff the way it would. I guess, technically speaking, it needs to know that potentially that it's nullable
[01:20:47] . So that it does need to be part of the contract, technically. But beyond that, essentially, it's the same interface you've seen before. And okay,
[01:21:01]  so what? This is convenient. It's nice because what it lets us do is when you're sitting on home and you click on this user's button, what essentially happens
[01:21:16]  is at the exact same time, it goes, okay, I need to lazy load this component and I need to fetch this data. Both requests go off in parallel and
[01:21:26]  whichever one comes back first, it doesn't matter. Like if the code comes back first, it will start rendering it immediately. Hit that async read of the user list
[01:21:38] , which is here. Basically render what it can, get as much work done while it's still waiting. But if users isn't there, it goes, hey,
[01:21:49]  I'm still suspending and it'll know not to attach it. It'll show the placeholder on initial load or hold the transition. Essentially, if the page loads first
[01:21:58] , it's going to wait for the data, but it'll try and do as much rendering work as it can ahead of time. If the data loads first, well
[01:22:06] , that's fine. You have no page to load. And the second the page loads, it'll just render properly the first time and show up. That's essentially the
[01:22:14]  power here. As long as you design it so that the data is nullable, so to speak, your pages will just render and you don't have to worry too much
[01:22:26]  about the timing of when they render or whatnot. Solids doesn't like re-render components, so to speak. So this is kind of a pause resume thing that
[01:22:36]  I showed cased off on the suspense video, but we render as much as we can. And then it's so like, we'll render this H2 and UL
[01:22:45]  and whatever, and then it'll go, oh, I don't got the users here. Well, stop. And then when the users come in, then it'll render
[01:22:52]  the rest of the list. The biggest advantage of making it work in nullables and not like doing the throw the promise like react is first of all, we don't
[01:23:03]  want to re-render everything. These are real DOM nodes, but this, and we get benefit from actually doing work ahead of time. But it's also, um
[01:23:11] , it's not blocking in a sense, like sure, this is blocking. We can't draw the children, but if there was more stuff after this for it, like
[01:23:18]  you could continue rendering what it, maybe there's a different resource. So you, you got further down or you can, you can, you can render almost like an
[01:23:25]  app shell and with its own placeholders kind of in, in not placeholders, but you can basically render the shell of everything. that doesn't need to be dynamic
[01:23:33]  ahead of time while you're waiting anyways, like it's just saving you work long run. And that's a bit more on suspense, but the key part about this and
[01:23:44]  the thing I want to kind of highlight here is sure on a single level, that's not a big deal. It's pretty easy to just split it. I mean,
[01:23:53]  you, you could do this without suspense or fallbacks. You could just have your, you could kind of like abstract from your router and go like, Hey, on this
[01:23:58]  route load, do this. But with nested routing, let's go to Joey and special, special here has a fake data function. It's not really doing anything
[01:24:14] , but when I want, when I want to get at here, let's, let's, let's see. I don't, I'm not a hundred percent sure
[01:24:21]  on the timing and the new router, but let's, let's see here. if I go console log in our, in our main user page, like let's
[01:24:32]  call it main. Okay. Main. Okay. I guess fun. So why are, am I not, oh, I didn't, did it, I didn't
[01:24:47]  save it. Oh, it's cause I'm not loading on. Sorry. This is not the main that I'm thinking. It's, it's actually this one,
[01:24:57]  just the main page. Console.log main. This is the page with the ID. Refresh. Do you, do you see what happened? Getting user, which
[01:25:16]  is from its data function, getting user. Custom data, do it then main, then returning user, which is what happens when the data loads. So we actually parallel
[01:25:31] ize the loading of your nested routes. So even if your page layouts are nested like this inside this, when you refresh on that page in parallel, we're
[01:25:46]  loading the code for the main section, the user section, the user section, the content for the like specific section, like in this case, special, but like the nest
[01:25:56] ed section. So we're, we're fetching both of those, um, chunks and to be fair on a SSR app, you'd actually have them pre
[01:26:06] loaded. Um, you'd have them like preload in the, in the header tags, but like on, even on a pure client side app where you don't
[01:26:15]  know ahead of time, the second the page loads, we are fetching both chunks and doing both data fetches at the exact same time for requests going out in parallel
[01:26:27] , this, this gets rid of all the waterfalls and suspense handles all the, all the differences, like all the, you know, what hasn't or has loaded the
[01:26:39]  time and making sure the user experience is nice and smooth. And this is what I was doing when I was talking about client side rendering, smoking server side rendering. It's
[01:26:49]  because if you have like a static site, like Jamstack style, maybe you host your, um, on your page on Netlify plug, um, you
[01:26:58] , and you, and you load data this way. You're going to get that page immediately. You don't have to wait for anything. And then the client's going
[01:27:06]  to fetch immediately. And it's going to fetch all four of these things and your CSS and, you know, any kind of other assets, it's all just going out
[01:27:13]  right at the beginning. As soon as that page loads in the browser compared to a classic next JS style app where it's not going to send you anything until it's
[01:27:24]  loaded all the data on the server. And that's fine because maybe the data loading, you know, it takes the same amount of time or whatever, you know,
[01:27:32]  like all things being equal, but you did not get to start loading those other CSS assets or, you know, maybe static images and stuff. You know, uh, obviously
[01:27:43]  there's some load time of the JavaScript bundle, but you also load time on the hydration side on the server render. Basically I found with solid with this sort of architecture
[01:27:54]  before I even had like the app router doing this, we were getting incredible client side performance, uh, like lighthouse scores and paint scores compared to the common solutions like next without
[01:28:05]  ever doing server side rendering. And this is why I was like such a hold on on server side rendering. I'm just like, who needs it? Then you go into
[01:28:11]  lighthouse and you slow down the network and then you go, Oh yeah. Okay. And that story completely changes when your network is not, you know, privileged, you
[01:28:24]  know, North American network or European. Like when you go into some, some areas where you don't have the best network, you're the client side story just falls right
[01:28:34]  off the map, but small JavaScript, parallelized fetching. You're going to see more gains from this parallelized fetching than you are going to from, from like
[01:28:46]  how fast your framework is. your framework is, is, is, is, is, is rendering things in tens of milliseconds, you know, units, your network is
[01:28:56]  in hundreds of milliseconds units, right? Like it's a whole order of magnitude difference. Um, and that, that is why I built the router this way. As I
[01:29:05]  said, I'm not the only one react router six works this way. And the reason they came back to it is because the guys there were like, Oh, we
[01:29:13]  can do this to do, to do this data fetching thing. And they built remix. As I said, I wasn't aware of remix at the beginning, but
[01:29:22]  it's, you know, great minds think alike. Um, this, this is essentially the, the, the kind of the, what, what I, why I wanted
[01:29:32]  to make a router like this. Now this is only the tip of the iceberg, because obviously you can picture, you can do all this data fetching. It also
[01:29:44]  means that when you hover over a link, you know, and do all that preloading stuff, you could also do this nested data fetching. Like,
[01:29:50]  you know, all the data for that route and the remix guys that took this even further, where what they, they, what they do is they go, okay, I
[01:29:59]  know what route you're on. So I know exactly what your data you're fetching. So if you are on this page and you're like, Hey, I've
[01:30:06]  mutated something, I'm just gonna refresh, not all the cache data, maybe, maybe, maybe, but I can definitely refresh all the data that I'm showing.
[01:30:19]  And, and, and, uh, this is the power of driving caching and, and data fetching off the router. This, this, this is where these
[01:30:31]  things are heading. Um, I had a great chat with, uh, Dan Abramoff on Twitter talking about S S W R and I was like, trying to figure
[01:30:43]  out how it fit. And I started working on, I started working on S W R type solution for solid, like reporting react query. And, and basically having,
[01:30:57]  using transitions and suspense this whole time. I was like, it doesn't make sense. And I'll get into that in a second. Cause I actually have great thought here
[01:31:06]  coming in from chat. I have a library to handle private routes and actually yes. And one of the decisions I make was to handle everything in the client, because the client
[01:31:13]  at least can put in a loading spinner. And that's, that's kind of where you end up getting to jam stack has basically popular as this idea of almost app
[01:31:20]  shell, like rendering, whether it's dynamic or static, and then putting in the client loading spinner. Right. Right. Because you don't want that whole blank page
[01:31:31] . Now to be fair, if you respond fast enough, you won't get the blank page. Like the browser will, will kind of hold the previous page and then show
[01:31:43]  it. But, you know, that's not always something you can count on. Sometimes when I say fast enough, I mean, in the couple hundred millisecond range or
[01:31:50]  whatever, like, and not everyone has a fast network and you know, there's considerations there. Um, but there, there is a best of both worlds solution.
[01:32:00]  Um, and I've been harping on it for the last year or so. Right. Um, streaming streaming, which is finally come to react 18, but like the
[01:32:12]  corner post of Marco. And one of the pieces that we've been doing with solid, I want to do better actually gives you the best of both worlds. Right?
[01:32:21]  Like you just render the stuff like a synchronous client app, but the data, instead of waiting, the usual process here is you render client app, you load the JavaScript,
[01:32:33]  and then the JavaScript executes. And then it makes some data requests and this is what I've been kind of advertising here. You have to send what we're building
[01:32:41]  here. The router also applies isomorphically. Um, but, uh, I'll get there. You, you load the data in the client and then you replace your
[01:32:49]  placeholders and you're, you're happy, but with a stream process starts the same. Do the synchronous, render the page, you know, comes in across rendering
[01:33:00]  those placeholders, except at the time you did that page fetching, you can fetch the data on the server and then have that stream over on the original request. So
[01:33:11]  you don't have to wait for the initial JavaScript to load and hydration start to start fetching the data on the client. So it happens sooner and you showing the loading spin
[01:33:20] ners. And then it, the, as a stream completes, it replaces the loading spinners. So you've, you've just taken one waterfall out of it.
[01:33:28]  And this is why I'm so excited about this pattern because look at this, this whole create resource thing. Why can't this just run and data functions, it can run
[01:33:36]  on the server too. So when you write your app the single way, and when it knows the data you need for the routes right off the start on the server and
[01:33:47]  starts that data fetching right away. And then the resources just handle this auto serialization. And basically it's like a promise that starts on the service server and gets resolved
[01:33:58]  in the client. That's at least the way it works today. I want to add full HTML streaming and it's on my list, but essentially we just, we
[01:34:05]  just start loading that data right away and have it complete in the, in the, on the, on the client. Cause we don't have reactivity on the server,
[01:34:12]  but the client does. So it made it really easy to have it just do the heavy lifting, but yeah, streaming is amazing. Streaming is like the single best
[01:34:25]  thing for, you know, the, I mean, besides parallelizing the fetching and stuff that you can do, but you can see that this architecture that we have here
[01:34:35]  actually continues to, to work on the server. Um, yeah, yeah, I did actually want to talk about the service side thing, but I was actually, before
[01:34:55]  I kind of got kind of thinking on that side, I was actually wanting to talk a little bit more about the client side implications. mostly that, I mean, this
[01:35:04] , that was a perfect example. Like what can you do if you know about, about the, your route definition, what data you have. And I want to, if
[01:35:14]  actually, I don't know, you, you all have been asking questions as we go, if anyone has any more questions or comments, kind of, um, throw them
[01:35:23]  out there, especially anything about the router. Cause I actually want to take the last bit to kind of tie it together here, and I think part of that is,
[01:35:32]  um, I say last bit, but this might take a little bit too. I want to kind of talk about the role of suspense and transitions in terms of isomorphic
[01:35:41]  rendering and how the router and the data and the caching all play together. that's where, that's where I want to go. So, um, if you
[01:35:48]  have any specific questions about the router right now might be a good time to ask her about the, the data functions stuff we've been talking about so far. Cause I,
[01:35:57]  right now I have this router code right in front of me and it's pretty easy, um, to kind of showcase it. But generally speaking, um, yeah,
[01:36:07]  generally speaking, these data functions really powerful because you can use create resource and kind of like in the way that the layouts are shared, the data, these data functions are stay
[01:36:21]  shared too. So when you update the child route, it's the data function only gets called once, just like a component. So it's our reactivity again,
[01:36:29]  that tracks, we just listened to the parameter change and then it just feeds it through. It just, we've kind of crossed the boundary between lazy and, and, um
[01:36:38] , statically loaded bundles essentially. And suspense is our glue. So suspense being our glue, um, is part of the reason I, you know, I'm going
[01:36:47]  to talk a little bit about things like react query and stuff in a moment, but let's, let's, let's just go back to show those code sandbox demos that
[01:36:55]  I didn't get to show everyone last time about suspense. Um, cause yeah, it was, it was, it was, it was, it was breaking, it
[01:37:02]  was breaking my heart on this one. Okay. So I'm here's, I'm going to start actually, let's start by, yeah, I'm going to,
[01:37:11]  I'm going to, I'm going to backpedal. I'm going to fork this one so that we don't, uh, corrupt my beautiful demo that I show
[01:37:18]  everyone. Okay. So let's do that. Okay. First thing I'm going to do, I'm going to backpedal a little bit because this is, this
[01:37:27]  is what this example is, it's very similar to that first example I showed you with the switch and match. Um, you know, but you can kind of see
[01:37:33]  how this is going to apply to the router. It's the router is just like a super nested version of this switch match statement, but essentially I'm going to comment
[01:37:44]  this out and I'm going to get rid of our transition. And I'm going to say that when we click on it, uh, where else pending comes somewhere else
[01:38:02] . Oh, it is fine. Uh, let's just make pending into functions that does nothing pending equals. False. Yeah. Okay. Here you go. Created
[01:38:19]  a signal. Um, this is suspense in every framework, except react, you know, they all claim they have suspense. This is what it looks like loading, loading,
[01:38:36]  loading, loading, loading, refresh. Oh, I mean, okay, let's refresh without a transpiling loading, loading, loading. I mean, if this,
[01:38:47]  if this was actually nice placeholder that was content and grayed out, you might be like, oh, this is pretty nice. You know, it's pretty typical
[01:38:55] . This is, this is, this is your life in a spot. I have a timer here to tell you how long the loads I'm, I'm being kind of
[01:39:04]  nice here in this version because, um, I was trying to make it realistic, but let's be a little meaner. Let's, let's, let's
[01:39:14] , let's make the, let's make the baseline like larger. Let's make it like never, I think it always take at least 300 milliseconds, probably longer. Yeah
[01:39:26] . We get some good long ones, right? You really get a feel for, for this loading state here. I actually did a study on this one for a while.
[01:39:36]  I don't mean real study. I just walked around the office at the old startup. It's easy to do and be like, hey, how do you feel about
[01:39:41] , how do you feel about this, uh, this kind of loading experience? I want, I showed them this and to be fair, this is kind of easy to do
[01:39:52]  in any framework. I was helping the Svelte guys work on a suspense proposal as well. Um, they haven't added, and I think it's cause it's
[01:40:00]  kind of like when you have reactivity, this is really, really, really easy to do. You don't need like suspense. So you just gotta go like show
[01:40:09]  fallback, you know, like if component suspense is interesting because it inverts the control. Like it's the reason that this is suspending is because it's actually in
[01:40:20]  this case, there's actually a resource that's nested in the child, but then sometimes it's the parent passing a resource down and it happens to be read.
[01:40:27]  And if you've ever seen my suspense list demos and stuff, you can kind of see where the read it's, suspense is all based off the read. Um, that
[01:40:34] 's the, that's the core mechanism. It's, it's where the, the data is read. It's not where it's fetched. Like if nothing
[01:40:41]  ever reads the fetch data and nothing suspends, and it's only the nearest suspense boundary that actually does suspend. But what I'm getting to is transitions. I'm
[01:40:55]  going to do this a few more times just so you can like really get a feeling for this loading. Right. I mean, yeah, this, yes, Twitter is
[01:41:11]  definitely this. The problem is it can be worse than this. I mean, if you do a good job with your loading stage, you're fine, but if you've
[01:41:24]  ever been in a state where you have a loading spinner and then it finishes loading and then you get multiple child loading spinners for the items underneath that. And like,
[01:41:33]  like you have this like loading cascade, sometimes you want that and you can control it. That's what suspense for, but naively done, you, you just, I
[01:41:42]  used to work in a social media, myself, private social media, mind you, or education sector. That's why I got into this stuff. Um, people ask me
[01:41:51]  questions sometimes and I'm like, honestly, I haven't built a traditional website in like years. I'm, I'm, I'm sorry. I've been, I
[01:42:00] 've been building apps essentially. Uh, coming to Marco and that was like a refresh, like a back to roots kind of thing a little bit, but I, um
[01:42:09] , yeah, I've been there in loading spinner hell, you know, where you're like, do the first loading spinner into the next loading spinner. You have like
[01:42:18]  page load, then sidebar section, individual images, or feed individual images, you know, like cascading kind of thing. And sometimes, you know, you,
[01:42:29]  you want control over that, but what, what the, sorry, I took too long to pause. I've got to really drill this loading into everyone again. OK
[01:42:38] , good, good, good. We're feeling it. OK. I don't even think I've done a good enough job of making this seem longer. But what I
[01:42:50]  want to point out is let's bring in the transition. And it's worth pointing out the transition here because the router has transitions built into the navigation. That's where
[01:43:17]  they belong. They belong in your design system, essentially. So the whole idea with transitions is at the beginning, we don't have anything to show you. So we show
[01:43:29]  you this loading state. Now, when I switch to docs now-- we don't fall back to the loading state now when we change. But we don't actually switch
[01:43:45]  the tab until the data loads. And it's funny. I did a basic study. I'm like, I didn't tell people exactly what I was doing. I
[01:43:57] 'm just like, which experience do you like better between these two? I don't even have pending stage showing, which I think is really important to kind of finish the picture
[01:44:07] . But I just compared these two straight up. And people are like, well, obviously, the second one. It loads way faster. It wasn't everyone. I
[01:44:20]  only questioned the office. And I was in a startup, so marketing. I talked to developers. I talked to people in marketing. I talked to people in customer service
[01:44:32] , sales. I even showed the demo to the CEO. And 15 out of 17 people just basically say it is because the second one loaded faster. 15 out of 17
[01:44:47] . And obviously, this is a small sample, right? But it was just like, it was so anonymous. And I'm just like, I'm just like,
[01:45:00]  I mean, I didn't have the timer here. But you guys can see that this is the same thing, right? So let's make this a little bit nicer,
[01:45:11]  right? Let's put pending back in. Where is there? I have a red-- Oh, is it because? Send me colon. Now, I'm only fading
[01:45:29]  out after a bit of a delay. So if it's fast enough, the problem is this is like-- this is like a-- I upped the delay now, so
[01:45:42]  it's not as natural. But you can even still see that-- because of all those times where it doesn't flicker or just flickers a little bit, like
[01:45:54]  this gives a bit of better indicator. And people still were pretty stoked on that. And then you can kind of also do this, right? And now we can use
[01:46:03]  appending to make our browser-style loading bar. But essentially, this is what React has been harping on. This is the part that I don't care about time
[01:46:15]  slicing that much. I showed you the triangle demo and have fun with it. You know, maybe it will make your really slow code faster, but a solid already kind
[01:46:25]  of punishes you enough for writing slow code. But this is what transitions are about, right? And your design system should kind of build this into your buttons, into
[01:46:38]  your routing. Like, maybe not design systems, but like your core services, essentially, component wrappers. And solid app router has transitions built right into it, because
[01:46:51] , you know, this is part of the core experience. The thing is, if you do not put suspense on the page, and I explained this last time, we actually
[01:47:01]  code split out all the transition code. And it's just, it's gone, which is why rollup is a marvel, you know, and ES build or whatever
[01:47:12] . Like, essentially, based on the imports, we can basically set a global that equals false. And in the import, go, like, when it runs, in this
[01:47:27]  case, the first time you call use transition, or, or basically, when we create the suspense context, essentially, it, it can go, oh, I'm
[01:47:39]  going to set this to true. So at that point, it's true. And now the rest of the app knows it can do it. But the thing is, if
[01:47:49]  you never import that function to set it to true, rollup and ES build and whatever, they'll just go and go, there's a variable set to false that can
[01:47:57]  never be changed. I know that every if statement in this code, where it sets it to false, and never changes, it has to always be false, which means
[01:48:11]  I know that I never need any code under this if statement. I already talked about this last time, or with the server rendering one about like how we use is server to
[01:48:20]  kind of just remove all the code out. But this applies to features to so essentially, it's, it's like almost no cost for developers and designers to just third
[01:48:34]  party authors or components to just put transitions where they make sense into your components, because the end user can choose whether they use suspense or not. There is funny enough transitions
[01:48:46]  do have a bit of a one thing is that they don't run synchronously. This is actually one of the changes I've been working on recently. they do run
[01:48:54] , they do defer to the next micro task to prevent entanglement, but it's, it's, it's, it's, it's fine. No one's
[01:49:03]  going to notice it when it's like an action triggering it, you control the flow. You know what I mean, like you click a button, whether this happens immediately
[01:49:11]  or in the next micro task is not a big deal, right? Once it starts with propagation, it's completely synchronous, except for when it hits resources. And the transition
[01:49:19]  technique is a cool one where it, when it hits those resource reads, it essentially goes, oh, I know that in my own forked reality branch, I'm not
[01:49:29]  going to merge it back in until everything's finished. And then the current reality can continue and I actually have a demo to show, show that off, I hope everyone
[01:49:38] 's kind of kind of following along here. Thank you, code sandbox, but I brought this demo back, but now we have a counter on the screen, why is it
[01:49:47]  doing it again? Sorry. It just, yeah, changes the look and then I can't hide this. Okay. So same demo with a counter on the screen. This
[01:49:57]  one is set to be slower now. Okay. I mean, this one's different, but let's, let's just go between these two. Do you see what
[01:50:15] 's happening? So even though we are rendering the new page off the other screen, doing the data fetching at the exact same time. Our current page, which into
[01:50:30]  normal rendering would have been released is still doing an animation. It's not animation. It's actually counter. We're actually updating the state. We're actually rendering the current
[01:50:40]  page while we're entering an off screen page at the same time. But if you think about it, they both exist under the same control flow. So how can they
[01:50:48]  both exist simultaneously? That's, that's what the concurrent rendering is. That's what transitions give you. They basically fork reality. So you have a bit of a
[01:50:59]  Schrodinger thing going on. Right? So it wasn't enough to just go, Oh, gray this out. Like the first, my first attempt at suspense was
[01:51:09]  like that. I just showed that I just, our transitions were like that. I basically showed the current page when you navigate away, it basically released the page in front
[01:51:20]  of you. And then essentially did the new logic and just held when it inserted it. But the reactive graph needed to like release. Cause if, if you've learned anything
[01:51:30]  about how reactivity works in solid, essentially every time it re like re-executes a context, it releases, it cleans up after itself and then runs again.
[01:51:38]  Right? If, if, if the second ice check, click on dose, I'm setting this tab, I'm setting a signal. Right? Which means that that
[01:51:49]  triggers this stuff, this, the change, which means it will release it. So naive approach was release it, but just hold at the end of control flow before you insert
[01:52:04] . So, but a better approach like we do now is fork reality. Let the current page still update. And then when everything is done. So merge them back together
[01:52:15]  again. And that is the power. That's why you need concurrent rendering. And some people will tell you that only react can do this, or you need a V
[01:52:29] DOM, but they are mistaken. You, you, what you need is granularity. Whether it's fiber internally. Or signals, fine green reactivity externally.
[01:52:43]  Same deal. You need, you need scheduling and you need granularity. That's what you need. So that's what this demo is. And I, I,
[01:53:00]  I was just showing this. The thing is the way this, this example works right now is Trey is a little bit different because there's an outer suspense. I
[01:53:12]  mean, I'm going to, I'm going to, I wanted to kind of show, show, I mentioned this a moment ago, but for most of these components for
[01:53:20]  uno dos. We just, it, this is the same as our last example, right? We just, we just have a counter that comes in from the parent that we
[01:53:28] 're rendering. And then, you know, it swaps, right? But for Trey here, we put a suspense boundary, sorry, inside the component we render
[01:53:42] . So we show the count and then we show a suspense boundary, but because we only, our resource is time in this example, because we only read time. Inside
[01:53:54]  the suspense boundary, the lower one, the outer suspense boundary, the outer suspense boundary doesn't need to suspend. There's, it's not reading anything async. It
[01:54:10] 's not reading a resource. It's only the inner suspense boundary. So, well, these ones get picked up by that outer suspense boundary and why the whole thing changes.
[01:54:17]  When we go to Trey here, we see the loading indicator. We see the placeholder. So, it's because it is a new suspense boundary created. So
[01:54:27] , it starts the transition and it, it only cares about suspense boundaries that existed at the start of the transition to, to, to, to actually, to, to like
[01:54:45]  suspend, like hold it. So, if there's no read under an existing suspense boundary, when you change the new page, it will go, okay, I'm
[01:54:54]  not, I'm not doing the transition thing. But the inner boundary, a new suspense boundary is like a refresh again. So, basically, if you ever want to
[01:55:03]  say, I don't want the parent to handle it, or I want, maybe you have two different things that are async, you know, something that you need immediately
[01:55:11]  when the page loads and something that can be lazy loaded, you can always, you can already lazy load. You can just wrap the thing that takes longer, lazy load
[01:55:22]  it in another suspense boundary. So, you know, show this one more time. In this case, we just went straight there. And now we're loading the content
[01:55:28] . So, picture, it's a blog article. And we need the article before we show. So, you're on the first article and you click to the next article
[01:55:38] . We hold it and do the pending until the article shows, but we don't wait for the comments. Instead, the comments are taking longer and they have their own
[01:55:49]  loading indicator. If the comments load first, who cares? It all shows when the article switches. But if the comments take longer, we don't delay showing the page and
[01:55:58]  we show the page immediately and let those comments come in with their own placeholder. So, that's how nested suspense works. Why is this not already a thing
[01:56:19] ? React's been trying. It's funny. I think they do a good job of explaining things, but maybe I'm like a little techie here. Someone made a
[01:56:28]  joke last stream when I see something React does and I'm like, oh, yeah, I could probably do that. And they're like, yeah, only you think
[01:56:34]  that way. But, like, this is -- Dan did his -- one of his first talks in suspense. I think it was React Iceland in 2017. And, like,
[01:56:45]  essentially, he showed the silly tab demo. And for me, I was just, like, lights on. I was just, like, immediately understood that, like, this
[01:56:56]  is something important. Like, I understood the complexity of -- like, you can do this really simple at a shallow, but what if you have nested levels? How
[01:57:07]  do you communicate back that up to coordinate this? Having a systematic way built into the framework makes a ton of sense. And you can see how this ties back into the routing
[01:57:16]  and nested routes. Like, this is all part of that same equation here of being able to, like, you know, you'll wrap your whole router in suspense
[01:57:25] , but then you can have nested sections with your own suspense. And it just kind of handles itself as long as you follow this pattern. So, suspense transitions are
[01:57:37]  big here. And this is where I was getting to because this behavior actually mirrors the native browser. I talked about how, like, if you have that async rendered
[01:57:57]  page like Next.js, if you respond fast enough, the browser will hold the current page before it shows. And basically, what's cool about this loading experience is
[01:58:11]  we know the data is fresh. I mean, it might not be fresh here, but presumably the data is fresh. We show you content. You don't have that spinner
[01:58:21] , like, pulled out of your experience thing. You just kind of feel naturally like you're in your experience. And we show the data that's available. Now,
[01:58:28]  I tried to attack caching by looking at SWR and React query. And the thing that kept on going with me is I was like, this doesn't play with transitions
[01:58:39] . Because what SWR does is resolve things as soon as possible to show you the old data. And then magically new data pops in. And I found that really disorient
[01:58:51] ing. And it killed all my transitions. I was like, all the SWR libraries say they support suspense. But they support suspense the first way I showed you,
[01:59:01]  where we turned off transitions and there's a loading state. So they support suspenses. And when you initially load the page and you have nothing, no stale data to
[01:59:10]  show, or you don't have the stale data in the cache, they'll show a placeholder. And then when you get the data, they'll show the data
[01:59:17] . That's how they support suspense. But transitions, I mean, that's good, right? For the basic experience. But the thing is transitions already sort of handle
[01:59:30]  bridging the gap. I mean, we can look at this again. But this experience is nicer, in my opinion, than switching immediately to the old version of the
[01:59:42]  data and then having it flicker on you. In my conversation with Dan, it's funny. because I was asking the SWR people, you know, in Red
[01:59:50] ex Toolkit and whatever, like, how they approach suspense here. And they weren't giving me answers. And then Dan basically chimed in. And he essentially was like
[01:59:59] , we found a Facebook that people didn't trust when we used SWR patterns. They were never sure that their data was up to date, and they'd want to
[02:00:09]  just refresh the page anyways. And anyone who's used HMR knows exactly what he's talking about. Like, you ever, like, program a change and you're
[02:00:22]  like, did it actually update? Like, it'll show up in a minute. Like, that kind of delay when you do something, see the old thing, and then
[02:00:31]  the new thing may or may not come in, always leaves you uncertain. You don't have that uncertainty with transitions, and it's smoother. Like, it's way
[02:00:42]  more jarring to have your content suddenly switch under you. I mean, there is benefits for, like, when you leave a tab and then come back and you're pulling
[02:00:49]  data in the background and all the other neat features. But I realized that the caching mechanism, like, that I'm trying to do something against SWR was not where
[02:00:58]  I wanted to go. And I had no clue how to reconcile this. You know, you can tell the guys at Facebook, like, as much as I'm showing
[02:01:08]  you this, and I've been working on this stuff for a couple years now, they've been working on this a couple years longer than that, right? It's pretty
[02:01:17]  clear that all these ideas kind of spawn back to 2016 for them. And Dan was like, well, we think the cache actually should be based on the routing. See
[02:01:27] ? Router. That, like, in the same way the suspense that I showed you has this sort of, like, you know, suspense boundaries that are already existing.
[02:01:47]  So they, they, when you transition, it's smooth. And then ones that are new that, or like when you reload that are, that are, that are
[02:01:55] , that are new and essentially have the loading state. You, you kind of have this, um, the, the, he described it as like a here and there concept
[02:02:03] . And essentially that duality continues to the cache, right? He, you know, I don't know if this is completely uniformed in that, but the thinking
[02:02:13]  was generally speaking, when end user clicks a button, does something, does an action, they want fresh data. That's, that's the, that's the concept
[02:02:23]  when they are back navigating, or, you know, that kind of thing to go back to where, how things were, or maybe within like some tabs on a local page
[02:02:34] . Then it is okay, perhaps to cache, but how do you capture the intent of that navigation, whether they want fresh data or not. And their, their
[02:02:43] , their idea was around the intent around routing. Like, I'm not sure, honestly, I was thinking maybe we could use transitions as a way of capturing that intent.
[02:02:53]  But essentially at the time you perform the action, you kind of make this, you, there, there's kind of a decision being made of whether it's you,
[02:03:05]  you're okay with stale data or whether it should be, um, fetched again. And when you have transitions like that outside of, you know, network conditions and
[02:03:15]  those kinds of situations or, you know, low network speeds, you know, and like those kinds of scenarios. If you, if you, if the, um,
[02:03:24]  what do you call it? The, the, the pair, not paradigm, but like the, there's a term for it in design. The, I'm not going
[02:03:34]  to remember the word right now. It's going to bug me and it comes back. If the affordance is, that's what I'm looking for. If the afford
[02:03:42] ance is one that, that suggests like navigation or like new, you know, fresh page, you should be showing them fresh data. I mean, that's the,
[02:03:51]  that's essentially it. It doesn't mean bad users face. I know there's lots of studies and stuff on this. So, you know, people can, uh,
[02:03:59]  go and check those out, but essentially, um, any kind of cash solution we do here, um, needs to, uh, potentially consider that. And I,
[02:04:14]  I did try and work on a few things here. Um, to be fair, I am not, let me see if I can find it. Let me see if
[02:04:23]  I can find it. I'm not really done. And I can't even remember what state I left it in. So maybe this isn't that useful, but I was
[02:04:33]  playing with the, this kind of idea of the cash with the same kind of thing. Right. Yeah. Yeah. Yeah. Yeah. This isn't going to be
[02:04:44]  really evident of what I'm doing here. Yeah. It's yeah, it's fine. I left this in a broken state. I was, I was playing with
[02:04:56]  the idea that providing an, a cache API where you could refresh, where you can basically refresh, um, the data on the current page. One thing that remix has
[02:05:10]  kind of been sporting is this whole idea that when you do a mutation, like a form post, they know which data you need to fetch for that specific page. So that
[02:05:16]  you, they can be like, just refresh the data you need to refresh the, for the page. And if you combine essentially just, just follow me here for a
[02:05:24]  second. If you combine the, uh, the, if you combine the, the concept that you generally want to fetch new data, not SWR, and you use these
[02:05:33]  transitions and you combine the idea that. So that when you, um, do, you know, mutation on the page for the most part, I mean, you can have
[02:05:45]  local level caching, but for the most part you, you want to just refresh exactly the data. you need for the route. So if you use the routing information
[02:05:52]  and the knowledge that you'll generally fetch new data, and this is how MPAs work, but you know, spas, you know, have more stuff to them
[02:06:02] , obviously. But if you kind of follow this kind of design paradigm, what you see, end up seeing is stuff like this create resources that we've been doing here,
[02:06:10]  actually, um, you know, this kind of react query type pattern. I'm not saying doing SWR, but this kind of pattern lets you drastically reduce on the
[02:06:19]  need for global state management, because all you need to do essentially is go like on mutation invalidate. And if, if 80, 90% of your stuff is coming
[02:06:33]  from a backend server, um, like your state management is like controlling the theme or stuff, you know, like typical context kind of kind of scenarios. You, you
[02:06:43] , you can basically use the information from the routing and from the page and use the transition mechanisms and whatnot to kind of potentially get rid of the need for even things like Red
[02:06:55] ux. And obviously solid, we don't worry about that because everything's just a signal and state management is built in, but it's, it's kind of a
[02:07:05]  really nice story even for, for solid because, um, the co-location of the reactivity is one of the things that we value a lot. You know
[02:07:15] , you could take solid and do something very MVC, like, like pull the reactivity out. And a lot of people use like RCS do that. But the
[02:07:21]  reason I like, um, fine grained reactivity is because the way it fills into the expressions, you just write an expression like this, or, you know, some
[02:07:31]  kind of thing. And it just tracks, you don't have to worry about like how you pipe the data transforms. Um, so in that sense, we like the
[02:07:44] , the co-location simplifies things a lot. Like what you saw this on our, our router example, when you go on the page and you're like,
[02:07:52]  oh, I have like, here's my user stuff here. You go, okay, here's my view. Here's my data. Here's my data. Like
[02:08:00]  this, this kind of co-location makes it easier. Maybe you have multiple teams, you know, there could be shared pieces here. And one of the challenges obviously
[02:08:13]  is while this does a pretty decent impression of GraphQL on a certain side, it's still pretty open to the end user, how they handle the data fetching.
[02:08:21]  And obviously, uh, you know, something like GraphQL is an option, but you know, this is why I've been looking at a lot of isomorphic solutions
[02:08:32]  on for the server rendering, like things like RPC calls and stuff. So we can just kind of make these data functions like simple, you know, calling simple function
[02:08:42]  calls and they, they, they be isomorphic. Essentially. If you call the function on the server, does the database call. If you call the function, the
[02:08:49]  same function on the client, it does a request that hits an endpoint that does the database call. Essentially abstracting that layer for the end user. And I, I
[02:08:58] , I showcase these quote actions on the solid start when I was talking about the server, the server rendering stuff, but essentially that it all builds into these pieces, the transitions
[02:09:09]  and the suspense. Now, this is a very true comment. Um, there's, there's always exceptions and it might be, I think it's probably pretty hard
[02:09:20]  to generalize the, this back button behavior. I think, I think there has to be some, some decisions here and I'm, I'm not sure. Honestly,
[02:09:28]  I got, I feel the caching problem is pretty tricky and it's one that I kind of want to defer on if possible. The only reason it's even coming
[02:09:35]  up right now is because there's this desire by a lot of people to do this route preloading and that has, you can do a pretty naive, simple thing.
[02:09:42]  And whenever I wrote preloading or prefetching, I mean, it's like, if you hover the link, it loads the next page ahead of time. Um
[02:09:49] , I think it's not bad. I think, I think the data is fresh enough. That's probably okay. If you have pretty aggressive timeout limits, but you
[02:09:59]  know, any kind of prefetching also means your data is that. much more stale when you get started. I, I there's def there's certain kinds
[02:10:08]  of things that are very app, like where the back button just doesn't make sense. Like payment or, uh, checkout processes. But, you know, if you're
[02:10:19]  trying to give, you know, more website, like feel this is the backbone and stuff that's being said is, is, is kind of interesting. And the truth
[02:10:31]  of the matter is, um, a lot of things are kind of in this hybrid space. That's what rich Harris's whole transitional app speech was about. Right. Um
[02:10:39] , at the, at the conference. Um, yeah. Yeah. Some of this stuff might be just too ambitious, but I, at the core mechanisms, at least
[02:10:46]  the stuff they implemented so far, I'm pretty excited about. Now I I've been kind of pushing this off a bit. Um, because I want to finish that thought
[02:10:54] , but I want to mention a bit about how this works on the server and how service side rendering kind of plays into this conversation. Um, essentially what's lovely about
[02:11:07]  surf side rendering. I kind of showcase this off before. Um, when I was, when I was, uh, doing the demos last week was, or was it sorry
[02:11:19] , a couple of weeks ago was it's the same thing. Like I already mentioned about the isomorphic Ness of the data functions and like maybe using like R
[02:11:30] PC and actions to do them. But the actual way the rendering works on the server is a little bit different. You get to write your code identical and the code gets
[02:11:41]  to run the, like appear to run the same way. But, um, I mentioned this before and, and, but not everyone probably present for that stream is essentially on
[02:11:50]  the server. Um, solid actually operates more like react than it does. Like it, like in the browser, we don't necessarily throw promises. It does keep the
[02:12:03]  same kind of render through approach. Um, because I, I want behavior to be the same essentially, but essentially at the suspense boundary point. If we hit a reason when
[02:12:17]  we hit the resource reads, we, we, um, know that it's suspended, so to speak. And if it's synchronous, we, we, we just
[02:12:26]  render the placeholder because now we know it's suspended and, and by synchronous, I mean render to string. We, we render the placeholder, like the loading state
[02:12:39] , and we ship that off to the browser. And when the browser loads, it will also see that it doesn't have the data. Right? So it will,
[02:12:50]  it will immediately, even though it's kind of doing its own re-render thing, it'll immediately go to fallback itself. And then when it's done, it
[02:12:57] 'll replace the fallback. And basically you just do everything client side fetched. Now async and, uh, streaming are more interesting, right? Because streaming is
[02:13:11]  actually kind of simpler in this. It, it, it does the same thing as the client render where it just sends it, but it tells the client that, Hey,
[02:13:21]  these resources you can expect a value from. So when you hit them, even though you're still doing that suspense thing, don't fetch. So essentially when the data
[02:13:32]  comes from the server, it will go, Oh, I've completed the promise and I'll replace those placeholders. Um, but, uh, with, um, as
[02:13:45] ync, we actually wait till the end. Um, so in, in that scenario, everything just gets resolved and the data gets serialized in. And when it hits
[02:13:54]  those, because everything is rendered and you don't see any of the placeholders. When it hits those suspense boundaries, it'll go, Oh, is the data there?
[02:14:01]  Okay. Don't, don't, don't suspend and just continue hydrating. The only tricky part is lazy components. Cause lazy components aren't there, even though the
[02:14:12]  page is rendered. So when we hit lazy components on hydration for, for async, we actually pause and then let the lazy components load and then resume the hydration.
[02:14:22]  But essentially, um, it never triggers suspense. That's a little bit technical to kind of just hand wave admittedly. Um, so I don't know if I
[02:14:32] , I explained it, but beneficially, but the thing is with the whole routing solution and whatnot, you get to write the same code and have, you know, it
[02:14:45]  basically do the fetching up front while it's rendering in the exact same way. And then based on the different method, it will serialize the data appropriately. Um
[02:14:54] , yeah, resume effect. Uh, yeah. I mean, I could pull up the code there, but resume effects is actually, um, for normal suspense, non-
[02:15:08] transition, you know, um, it doesn't get fired too often, but essentially one thing that we do have to do. Even without transitions with, even though
[02:15:18]  forking transitions, we fork reality, we don't actually need to worry that much. Um, and because we're just going to have our own thing. We're
[02:15:29]  going to have our own copies of effects and our own, our own thing. However, for normal suspense or nested suspense under transitions, like where it's in that initial
[02:15:42]  loading state, like the one that, that, that I showed in the, this demo. Like when you come here and there's this initial loading state, um, for
[02:15:52]  those, we still don't want to run the end user effects until they resolve. They resolve. So what actually happens is when an effect is created under a suspense boundary
[02:16:03] , um, regardless of whether it's a transition or not, it goes, it basically. It basically goes like, it adds it to a special list. And basically
[02:16:17]  instead of it, um, running immediately and, you know, uh, marketing queued immediately, it gets added to the suspense. So that the second that the suspense boundary
[02:16:29]  resolves and goes, okay, I am not in fallback. Like it might have never gone to fallback. Maybe the data was there to begin with. Uh
[02:16:35] , but the second that it finishes that, um, you know, results suspense, it'll just push those effects onto the queue. So it's basically just a way of
[02:16:44]  capturing first time effects that get created under a suspense boundary, um, regardless of whether there's transitions or not. Um, that's basically what it's there for.
[02:16:52]  Um, and the reason we do that is because in solid, and I mentioned this before, it was kind of an interesting choice. Um, and one, some people
[02:17:04]  might find it kind of interesting, I guess, is that we have no idea if the dom is rendered. Like we have absolutely no idea what's going on with the dom
[02:17:16] . Um, everything's a side effect. So we kind of wipe our hands clean of it. Right. We're just like, okay, run this. Like there's
[02:17:23]  no diffing. There's no nothing like solid is pretty much unaware that the dom exists. Um, and for that reason, stuff like on mount. Like I really
[02:17:32]  hesitated on making that one because it's a lie. Um, there, there's, there is no such thing as mounting. Like solid has no idea that your,
[02:17:43]  your div is connected to the page. Right. And because, um, we have no idea at all. Um, generally speaking. Um, classically what we did
[02:18:01] , everyone hated this and it was like, what do you mean? Is before create effect used to be the same as create computed. There, there was no create computed for
[02:18:12]  the first couple of years of solid create effect. And there's no create render effect. And there's no create render effect. Even basically we just had create signal,
[02:18:23]  create memo and create effect. And create effect works the same way. Create computed work today. And we use create effect to do our rendering, or we did use create effect
[02:18:34]  to do our, you know, syncing our system or whatever, how we want it. Any, any kind of reaction was create effect and made it pretty simple.
[02:18:42]  And everyone was, you know, pretty happy on it until they were like, well, how do you, how do you do life cycles? I'm like, well,
[02:18:49]  there's on cleanup. And they're like, well, no, but how do, how do I handle? Yeah. I mean, I mean, you have creating
[02:18:55]  of cleanup. You, you, you have the two pieces. I, I sometimes talk about how solids all about like rendering effects. Like essentially, um, like all of
[02:19:05]  rendering is an effect. If you haven't seen my react, uh, Finland talk, kind of get into the, what that means. And, uh, you know
[02:19:11] , in that sense, it's like create effect inside, create effect, create effect. And as we all know, there's, I mean, anyone who's react knows
[02:19:20]  there's two parts. There's create, and then there's the return function. That's a tear down. Solid has both of those. I'm like, that's
[02:19:26]  all we needed. I mean, I, I, I was, I was holding that line way before hooks came out. Like that's, that's, some people are
[02:19:34]  like, oh, how do you do stuff without class life cycles? And like easily, like you don't need them if everything's granularly updating, like update is
[02:19:42]  not a real phase. You have create, you have tear down and then updates are as they happened. Right. Um, you can see why I was like skeptical that anyone
[02:19:53]  would actually like solid because I was like, man, I explained this to people and they just look at me like I'm crazy. Like they need life cycles. And I
[02:20:00] 'm like, you really, really don't. Um, but react hooks came out and I was like, oh, sweet. Now I don't have to explain this
[02:20:08]  to people anymore because the react is telling them that this is true. So essentially, but everyone kept going, well, I want to know if something mounted the Dom.
[02:20:19]  So I, I came up with like a simple, a funny solution. And actually, you know what? I can probably even find it here. Let's, let's
[02:20:25]  see if, let's see if we can find it here. What was it called? Uh, mutation. If I can, maybe if I just scroll through the,
[02:20:37]  my draft section here, I can find it really quick, but essentially I came up with a demo where not persistent document fragment. That was me trying to get fragments in the
[02:20:47]  browser using. Was it Dom life cycle? Here we go. Um, gotta love quotes like this. Um, I was like, okay, if you read, like
[02:21:04] , basically when people want to know if something is mounted and solid, I'm just like, you set timeout zero. And this seemed to bug people. Uh,
[02:21:12]  they'd be like set timeout zero. That just doesn't feel like resilience or stuff. And I'm like, well, I've been using it for like half a
[02:21:21]  decade, like knockout, same, same thing. I'm like, works fine. Set timeout zero. And they're like, and then people are like, oh
[02:21:29]  no, that's really awkward. So I'm like, okay, I'm going to make a primitive. And I called it like after effects or something. And literally
[02:21:37]  if you look at the implementation, it was like set timeout zero. I just, I just renamed it to a hook. So people felt better about themselves. Um,
[02:21:44]  because, um, like that's all I could do. And then some people were like, no, I really need to know if the Dom's connected. So I was
[02:21:53]  like, okay, fine. You can make a mutation observer. So I was like, here, really simple idea. You can create a mutation observer and you can patch.
[02:22:05]  Um, you can basically patch the Dom to look for the, at the elements. And if they have a, an event on them, then this will work. So
[02:22:17]  essentially like, forgive me TypeScript. I just made up my own attributes here. You know, um, essentially, ta-da. Uh, if I, I'm
[02:22:26]  sorry, I don't have the console open. That's way less of a reveal. Um, okay. A is connected. A is disconnected. B is connected.
[02:22:36]  Presto. This is actually is detecting when the Dom, when the Dom is. And you just, now any element can have connected, disconnected. And the funniest thing is
[02:22:46]  using, uh, solids, um, directives, I guess you can accomplish this in a, in a slightly different way. And this, but I, I was
[02:22:53]  just like, I don't care. Right. Um, this is why I love JavaScript and not TypeScript. Sorry, TypeScript fans. I, I love the fact
[02:22:59]  that I can just do whatever the hell I feel like. Combination, both being a control freak and wanting to just like, do whatever comes to mind. Makes Type
[02:23:08] Script like, like something that I like go run and hide, but that's a whole other topic. Um, here, here you go. Here's a solution. But
[02:23:17]  the truth of the matter is at a certain point, I realized that, um, I realized that, uh, there, there's an argument for some amount of scheduling.
[02:23:33]  Right. And refs came to mind, you know, people wanted to deal with refs knowing that I was settled. And it's the same thing here and set
[02:23:44]  timeout zero well is fine. And even my fake hook, eventually I was like, I, once I knew that I was going to do this transition thing, like react
[02:23:50] . I was like, okay, I'm going to create a, a separate primitive as a way of, of running after render so that we can separate the purity from the
[02:24:01]  non purity. Right. And it's funny to say, cause I said, everything installs a side effect, but the thing is, it's an effect that the
[02:24:09]  world only sees when it gets inserted into the dome. So essentially anything it's the same. It's the same. I told you there's just like here and there
[02:24:24]  concept or like existing suspense, new suspense concept. Create effect always runs at the end. And that solved all my problems. Didn't have to tell people that you set time
[02:24:36]  out, but it, it, it, it's kind of, it's always scheduled. And it's also nice because with create computed, which is like the,
[02:24:46]  the, like the core reactive auto run function, you can run that as many times as you want before rendering. And you can kind of like let the react instead of settle
[02:24:54] , you get this kind of pure stage. You can, you can, you know, have memos and have them all kind of bounce around and you don't have
[02:25:01]  to worry about stuff getting rendered, but everything is an effect in solid. Everything is a side effect. So how can you possibly, if you, if you kind of
[02:25:13]  falling along, you might've gotten like, how can you possibly render something like off screen? If you're holding the effects. And I hold all the end user effects,
[02:25:27]  everything called create effect gets held to the end, whether it's in suspense or whatnot, but I still need to render those DOM elements. So there's this interesting divide
[02:25:37]  and that's where create render effect came from. This is really sad. Cause we used to just have like three easy concepts, you know, like the way I teach react
[02:25:46] ivity where I'm like signal memo reaction or, or whatnot. Suddenly I needed three concepts for my old single create, create effect. Now I have create computed, create
[02:26:02]  effect, create render effect. And some people didn't like the change. Cause I was basically, I was, I did twofold when I did the change. First of
[02:26:11]  all, I forced everyone's create effects to run later. So if people wanted that create computed thing, they'd need to use a new primitive, but I also buried that
[02:26:20]  primitive. Cause most of the time I don't think you actually need it. You should be using memos. Derivations are better than setting signals. Cause you
[02:26:25]  can trace through derivations and actually make them more performant. If you keep on setting signals. There's no guarantee that the graph won't re execute. Cause I can
[02:26:35] 't know what the dependencies of a crate, like of a signal are like signals. Don't have dependencies. Don't have dependencies. They only have observers, but essentially
[02:26:47]  I had to split the reaction to three, three things. There's clearly still the need for the crate computed. Like what I call it computation. Like where you're just
[02:26:56]  doing the, it's not pure, but it's pure enough. Don't make side effects and create computed. And really speaking, it should just be re updating the graph
[02:27:04] . It's this part that's pure that just runs and can rerun as many times as you want without affecting the outside world effects. I hold them. Don't
[02:27:12]  worry. It happening after render is probably a good thing. 90% of the time. Anyways, it's that's what react realized. And I know this is the tangent
[02:27:20] , but essentially they were like, Oh, if we force everyone into using this use effect thing, they don't block rendering. And what you saw is react actually improved
[02:27:30]  in benchmarks after adding react hook. Everyone's like, Oh, hooks have to be worse than classes. And I know I've said this probably a hundred times, but you
[02:27:37]  know, all those function closures and all those recreations, but simply smart scheduling alleviate a lot of bottlenecks. People didn't even realize existed, but create render effect
[02:27:51]  is this middle ground where the first time it runs, it runs like create computed. It is side effectful, but because any new render effect will will create something,
[02:28:03]  but won't. It needs a parent to attach it to the DOM. We already looked at control flow. You know, there's insert hidden in there. You can go
[02:28:11]  create some DOM elements and do some stuff with it, but it needs a parent in order to insert it into the DOM. So you're, you are safe as long
[02:28:18]  as that parent doesn't rerun again. So existing render effects at the beginning of the suspense of the transition, they get queued like normal, like create effects. They
[02:28:30]  happen at the end, but any new render effect runs immediately at the same time as create computed or create memo. So essentially we create the nodes. We do have the
[02:28:41]  side effect, but it's a side effect. The world can't see because we're banking on the fact this kind of duality between, you know, on creation versus
[02:28:52]  existing. Maybe a bit technical. Yeah. Lost a few people, but that, that, that, that essentially is the difference between the three. And why I say
[02:29:02]  you almost never need to use create render effect. This is a detailed that I use for rendering and that, you know, but essentially under the hood, that is the split
[02:29:16] . Oh, that was a fun little tangent. All right. How are we doing folks? I don't, I think this is mostly what I wanted to cover today
[02:29:32] . So here's your last chance to get a few more questions out. Do you hear any more of my hot takes? I mean, yeah. Is that the problem you
[02:29:46]  like, how should I put it? Oh, it's doing this again. It moved. Sometimes it likes to move my window. Yeah. Yeah. Yeah. So
[02:29:57]  if that's the case, let me, let me, let me, let me show you what I'm talking about. It's I should have done this at the beginning
[02:30:04] , but I, I can show you the code. Let's just, let's just look at the code here for a second. Um, uh, did it,
[02:30:14]  did it, did it, did it, did it, did it, did it go up to the top. Okay. So yeah. Create route, create signal. Okay
[02:30:26] . Okay. So the next three things will all look kind of similar. Create computed is the simplest of the bunch because all it does is create internally the computation. Basically
[02:30:43]  all, whether they're a memo or, or, uh, how should I put it like memo or a reaction or whatever. There's, there's this computation,
[02:30:54]  it's a thing that tracks, right? And then it calls update on that computation immediately. So we create it and we update it and it doesn't return anything because there
[02:31:03] 's nothing to return. We don't care. Right? Like it's, these are void. Create render effect. It looks pretty much the same. So you're
[02:31:16]  going, well, what's the difference here? Well, one small difference, create computation. The third argument is pure and compute, create computed is true. So it's
[02:31:31]  pure. Create render effect is false, not pure. All that means is it affects cueing later on. Um, and then create effect. This one's a little
[02:31:44]  bit trickier. Um, ignore this, this basically, if you never use create effect in your program, solid can ship a smaller runtime because it only needs to split.
[02:31:55]  Um, I actually make sure that all rendering happens before effects run, but I put all effects in the same queue. So there's a more complicated queuing mechanism where
[02:32:05]  I actually go through the effects queue and go, oh, is this a user effect or not a user effect? And I run the not ones first and the user effects,
[02:32:13]  you know, after, but if, if you, there are no user effects, I can just run the queue. And it's the same queue that, um,
[02:32:20]  computations run on. So we can reduce code. So if you never use create effect, but this is not a reason not to, it's like, it's like
[02:32:28]  four line sentence. It'd be, it's just me being ruthless again, because it'll run the original. And because if you don't import create effect, it
[02:32:38]  can never assign it roll up as smart enough to go, oh, this has to be this function and never import the other function. It's, it's, it's
[02:32:45] , it's, it's, it's, it's those shenanigans, but okay. This time we create a computation and then we look to see if suspense exists
[02:32:53] . This is what I was talking about, that resuming thing before. And if suspense exists, we go, okay, we are going to set what the owning suspense
[02:33:02]  boundary is for this computation. And we'll need that later because the whole resume thing I talked about before, we set it as a user effect, and then we push it
[02:33:14] . This is the reason why you need create route, um, to run create effects, um, outside. Cause if, if otherwise you're just pushing it into nowhere
[02:33:26] , um, because yeah, sure. It goes in this effects queue, which is just a list. It's global. But if you're just running something outside, see
[02:33:35]  these other ones, they run, they run right away. So the subscriptions are made. This queue will never run without create route, create like the, it needs that initial
[02:33:45]  run to actually like get to the end. So it can run the effects and then create memo again is create. It has a few other things. Like it's set
[02:33:57]  up to have observers where the other ones don't have observers. And it has a comparator function for its value, but then it calls update right away. And then it
[02:34:05]  returns, um, the ability to, uh, basically read the value. Um, essentially, uh. Interesting. Yes. Don't realize what branch is working off of
[02:34:27] . Anyways. Um, all of them basically have that same underpinnings, except with a few separate changes. Does that make sense to people who are asking about or
[02:34:45]  trying to follow along? The signal piece of the code base is definitely the most complicated. I've been playing around with like different optimizations recently, but, um, I
[02:34:58] 'd say generally it's in a pretty good place. Any more questions, this is your chance. I did finish my drink though. So I won't be much
[02:35:08]  longer for this stream, I feel. Yeah. Well, if that's the case, I think I will, uh, call it, call it a night. Everyone
[02:35:25] , uh, to have a, uh, good weekend. Yeah. I don't know. I don't have any actual wrap up this time, but, uh,
[02:35:48]  hopefully you found something valuable. I was kind of concerned that, um, initially I was like, what am I going to cover? I was like, what am I
[02:35:56]  going to cover? And honestly, I don't know what I'm going to cover next week. So if you have any thoughts, you know, come over, share them
[02:36:03]  in the discord or write them in the comments. Um, a lot of topics around this, as you can tell, started with something as simple as routing, but. You
[02:36:12]  know, it's all parts of the, you know, same thing, you know, we just kind of onioning out, adding more layers. So, um,
[02:36:21]  yeah, anything you want to see me cover, you know, solid related, or maybe it says integration, you know, write in the comments. Let me know. I
[02:36:32] 'll, I'll try and see what I can do it. Some people have asked, you know, to show some more specific use cases or examples, like integrating with CMS
[02:36:39]  and that. And that is fine. Um, but it's also tricky, um, because then I have to do some prep work to actually like set that up.
[02:36:49]  If I actually had an API to work against or something, then I would do that. Thank you. Um, yeah, I, I thought about this and I did have
[02:37:02]  some fun with that, uh, with the Astro thing. But the truth of the matter is most of what I do, um, isn't, I don't think
[02:37:12]  it's that streamable. Do you know what I mean? Like, um, sometimes there's like, I'm working on integration or like I whip, whip up
[02:37:20]  something specific, you know, and it goes pretty well. But a lot of times, you know, I'm like debugging something and it might take hours. Replay
[02:37:30]  has actually completely changed. Replay.io has completely changed my developer flow, but it's, it's other times like I'm doing planning and it's like, I
[02:37:39]  have a document of several now, but they're like pages and pages of me scribbling down notes and then kind of like working through, you know, ideas just like on
[02:37:50]  paper, essentially. Kind of like possible, possible things that I, that we can do, but, um, in terms of like reactivity or scheduling and, you
[02:37:59]  know, optimizations and stuff. But, um, yeah, I don't think it makes for a stream. Let's stop Twitter highlights for a week. Yeah,
[02:38:10]  I, there always seems to be enough content, but because I do a little bit each week, I'm not sure. Um, I'm not sure if, if I
[02:38:19]  can, uh, do a whole episode on that though. It's good. Like to have questions and kind of get into some of the topics, but I feel like,
[02:38:27]  I feel like this, the SPA and the MPA topic has been the one that's been hot and well, I have opinions on it. I've been,
[02:38:35]  I've been pretty good about giving them already. So I don't know if there's that much more extra for other people, but you know, like, I don't
[02:38:42]  know how many times I say that I am learning and coming with new insights, but I feel that's a gradual thing. Um, yeah, I'm sure I'll come
[02:38:50]  up with something. I only, for the help of the discord only came up with the, doing the routing thing yesterday. And, uh, Astra was also last minute
[02:38:58] . So who knows? Um, it's something always seems to happen. So I'm sure, but yeah, any help or any suggestions definitely can definitely helps me. So
[02:39:08]  anyway, um, yeah. Thank you everyone for joining and, uh, you know, hopefully see you next week. Bye. Bye.