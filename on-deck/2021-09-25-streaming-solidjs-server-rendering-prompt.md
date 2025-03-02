---
showLink: "https://www.youtube.com/watch?v=0zadjVUV7zM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Streaming SolidJS - Server Rendering"
description: ""
publishDate: "2021-09-25"
coverImage: "https://i.ytimg.com/vi/0zadjVUV7zM/sddefault.jpg?v=614e0353"
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

[00:00:00]  All right. Hello. Welcome to my stream today. Today, I will be talking about SSR, or I guess server rendering in general, SSR, SSG
[00:00:12] , whatever SS abbreviation we want to go with. While I'm waiting for some people to join on, I guess I can talk again about some current events. Not that
[00:00:23]  there was as many, I'd say, this week compared to last week. Last week, there was a lot of conversation. It feels like it just kind of carried
[00:00:32]  over. All the discussions around MPA versus single page apps and whatnot, still kind of ongoing. Not a ton new here. I figured if I mentioned it last week,
[00:00:46]  but we're seeing more and more frameworks like add an MPA mode or announce that they're going to add an MPA mode. So I guess we're going to have
[00:00:54]  to see how that goes. But yeah, you know how it is. Other big news for Solid was Netlify joined on as an official sponsor. You're going
[00:01:07]  to see some deploy with Netlify logos coming in pretty quickly here. And having some extra money in the bank is definitely going to help us set up some illegal properties
[00:01:20]  and things we need to do to get this rolling. You'd be surprised how much actually other stuff needs to come in. You know, we don't want someone stealing
[00:01:28]  our name on us. And other that, another really cool thing. I don't know if you guys got the chance to check out Party Town. It's from the creators
[00:01:44]  of Quick and Mitosis, Builder.io. And it's basically a way of getting all those pesky analytic scripts, like off your main thread and putting them
[00:01:58]  on another thread. It's actually really clever how it's implemented using a proxy and synchronous XHR requests. They basically block the WebWorker thread so that they can
[00:02:10]  synchronize, keep it in sync with the main thread. But it's fine because then the main thread doesn't get blocked. your page loads quickly and it just works
[00:02:18]  for you. And yeah, I mean, probably worth checking out. And actually, probably one of my favorite things this week was Swix did an interview with Sunil,
[00:02:29]  a former core team member for React. And honestly, just listen to that whole thing. It's, they touch on so many points and it's, and it's completely
[00:02:37]  on point. From like, discussion about React server components. And I thought there was some really insightful stuff there carrying on from where we talked about last stream where like,
[00:02:50]  essentially, SEO isn't really the consideration there. It's not about like server side performance or anything. This is like a means for them and their teams to be productive,
[00:03:03]  you know, kind of like micro front end kind of mentality where they can, you know, stuff makes sense on the server, do it on the server and whatnot. So
[00:03:08]  yeah, it's just kind of interesting to, to kind of hear, someone, you know, closer to it, say that out loud, because that's what I
[00:03:16]  suspected. But, you know, like, it's amazing when you think of what it does for the development experience, especially for things like Next.js, where, you
[00:03:23]  know, you don't need to pull in a graph too well or whatnot. But on the other hand, it's not quite the same as, you know, being done
[00:03:32]  with multi-page apps and, you know, the work being done with Marco or Quick, like I mentioned a few minutes ago. So, you know, it's
[00:03:41]  definitely check out the podcast. He, he, it was called the thief, but in the best possible light. So I quite enjoyed that. So, you know, yeah
[00:03:50] , if anyone's out there, say hi in the chat on YouTube. Let me know you're, let me know you're there. All right. Yeah. So
[00:04:06]  less stuff to go off at the beginning here. So, um, I guess if that's about it, I'm going to, um, share my screen and start talking
[00:04:14]  about, uh, server-side rendering. Oh, hey, thank you guys. Yeah. It's good. As I said, it helps me when, when we
[00:04:23]  interact and stuff and ask questions along the way, helps me know what to explain. Cause as I'm, I didn't mention the stream yet, but it's pretty imp
[00:04:30] romptu. I don't have like a ton of stuff prepared. I just have a lot of material that I can share. I've been working on this stuff for
[00:04:36]  years. So, um, you know, if you have any questions about solid or even not about solid shoot, um, I had to study a lot of stuff to figure
[00:04:43]  out how to make this all work in service side rendering, as you guys know, is, is a huge topic. Um, like, monumental and that's actually a
[00:04:53]  good place to start. Um, cause when I built solid, I was not thinking about server-side rendering at all. Um, I was really trying to create, um
[00:05:06] , a framework in knockouts image to a certain degree, like just, you know, primitives that you could build upon, you know, good patterns in terms of composition
[00:05:16]  and then, you know, showing that it could be performance. I, I think I mentioned many times before, um, a lot of benchmarks came out around 2014,
[00:05:25]  15 that like basically destroyed, um, these kind of, they used to be called key value observable frameworks, KVO, um, you know, like knockout,
[00:05:36]  even Ember at the time. And I wanted to build something that, you know, had good performance. I could tell like the update performance is so good. So I
[00:05:44]  felt like there's something we could do there, but server-side rendering was not even on, on the map for me, honestly. Um, I didn't really
[00:05:51]  see the point. Uh, I, I'd only worked on application, like things like, uh, which I call it, like, um, I w I worked in
[00:05:58]  social media, private social media for education, like photo sharing. And like, so you could have the kids and the families engage in the teachers and stuff. Um,
[00:06:07]  and, you know, it was behind logins and I just never had any use for server-side rendering. And, you know, a lot of the kind of myths
[00:06:14]  or thoughts that people have about it, you know, um, there's some truth in it. And I think I'll get into that a bit today, but when I
[00:06:23]  built solid, I was like, okay, let's just see how fast we can make a client-side framework. And what I found was actually really fast when
[00:06:32]  I, when I first kind of was putting these demos together, if you notice a lot of like my real world demo and original hacker news demo and all of those were only
[00:06:40]  client-side only they were beating service rendered like sappers and next JS frameworks, um, at lighthouse scores, like first paint, you're just like, how is
[00:06:51]  that possible? And the pure client-side rendering. And the reason is historically server-side rendering, um, it's been done pretty crappy. I mean, I don
[00:07:03] 't know, no, no sugarcoating it. It's just, it was just a very kind of simplistic approach. And it's not about just like raw speed
[00:07:10]  or performance of service-side rendering. It just simply the fact that architecturally the way we've approached the single page apps, um, you know, isn't as good
[00:07:23]  as it, as it could be, right? Like this is why Jamstack got popular to be fair. Um, if you have like an app shell and you load
[00:07:32]  some JavaScript and then render it in the client, you know, as long as your network is relatively fast, you know, most places in North America, Europe, you
[00:07:42]  know, it's perfectly fine. Client-side rendering is going to beat your classic render everything on the server and then ship it. It, it, it is,
[00:07:51]  um, it seems surprising because it's just the, your time to first bite's going to be faster because your, your page loads kind of immediately. And then, um
[00:08:02] , and then what happens is like, sure. Some stuff might take a while to load in, but the biggest problem with server rendering is when you don't, when
[00:08:14]  you wait to send all the content until you're done, you can't preload the scripts and stuff. And by the time you take hydration and stuff into consideration, your
[00:08:22]  whole load time is actually longer and slower. And I'll actually show you guys what I mean about that in a few minutes, but I was, I was basically just
[00:08:28]  trouncing server rendered frameworks with client only, um, rendering. And I don't think it was unique to solid. I just had more consideration around paralyzing, fet
[00:08:39] ches, fetching and code splitting stuff. And a lot of like naive approaches would. And, um, like you can still see it to this day. If you
[00:08:47]  pull up the real world demo, um, and although it's down right now because they had some cores issues with their backend, but if you pull it up and do the
[00:08:57]  lighthouse score, solid still one of the fastest and it's a client only rendered representation. So, um, it took me a bit to get one over on server rendering
[00:09:06]  and that, and what it really comes down to is slow down that network tab and see how things change. So, so I'm going to show more detail. I'm
[00:09:18]  talking about it a bit, but suffice to say that server side rendering beyond SEO also can have performance benefits. And if they're in the right sort of app, it
[00:09:27]  makes sense to have it. And I think most people aren't actually building closed gate logged in, like want to be a mobile app, things like I've always built
[00:09:38] . I think the vast majority of people are trying to make, you know, interactive websites and, and, you know, you know, yeah, you know, not everything
[00:09:48] 's behind a login. So in those cases, actually there's probably different techniques you should be looking at as well, which we can also get into, but essentially at some
[00:09:58]  point I changed my mind. I was like, I'm going to look into server rendering. That was about three years, two, two, two years ago, two
[00:10:04]  and a half. And that completely changed approach. So the question is, okay, we're going to start server, server rendering, you know, how, where do we
[00:10:11]  start from? Right. And for me that started from kind of, I thought, you know, I've got a client-side framework. What if I just,
[00:10:27]  you know, went in and used the DOM, right? Because I don't know if you guys have ever looked at what solid compiles to. I love the playground for
[00:10:33]  this, but, you know, it's pretty minimal in terms of DOM operations. And you can see, you know, I've got a button here. I didn
[00:10:44] 't really show it too closely, but you know, button here, you click it, it goes up. The way solid works is we clone a template and then we basically
[00:10:54]  keep your code. And then the JSX just becomes like clone that template, add click handler, make an effect around the dynamic part and, you know, insert that
[00:11:06]  element of the DOM. So I was thinking I could do this. And I actually, for the longest time when I was like not caring that much, I said, hey
[00:11:13]  guys, let's use JSX DOM. And I did that. And it just wasn't really the best is the best way I can put it. It was,
[00:11:24]  it was really quite slow and I could, I could actually feel how slow it was. So I realized I had to rethink my, my approach here a bit and what
[00:11:36]  I came up with ultimately is rendering to a string. And if you guys want to see what that looks like, I can show you pretty quickly here. In some ways,
[00:11:52]  this code is not unlike what we saw a moment ago. If you, if you look at this right off the bat, you can actually see, um, our signal
[00:12:04]  still getting created and we can see a template, but now instead of it being, you know, like the HTML template, it's actually an array of string parts with holes
[00:12:15] . And all we do is basically pass that array in and then pass in the holes. This is the reason it looks like this is I actually started this as a tag template
[00:12:25]  literal. Um, and then actually I found out that the tag template, the world using it was actually slower. So actually just calling it as a function and not as
[00:12:33]  a tag template literal actually improved rendering speed. Um, this is a note, you know, if you're on the lit team and you're working on SSR, maybe
[00:12:41]  this will help you. Um, but essentially, um, it, it looks kind of similar, except we just have some other things. We, we had a hydration key
[00:12:51] , which I can talk about, um, in the future. And then we, we have to do some escaping on dynamic parts, but essentially, um, things just
[00:12:58]  become strings. Uh, and the process here is just adding the strings together. I'm actually going to make this view a little bit bigger, just help people see stuff.
[00:13:12]  If we go in here, not gonna actually spend that much more time in the playground to be fair. Um, I just wanted to kind of give kind of an overview of
[00:13:20]  what the compilation looks like. Um, it, there isn't actually much more to it, right? If we can add some divs and, you know, whatever
[00:13:30] , give around it, we're just adding more stuff here. You know, if it's static, like class equals, hello, it'll just, you know, get
[00:13:41]  in our section here. And it's just, it's basically, we just gather up the strings. Um, how about let's, let's add another component here
[00:13:51] . Because the, the funniest thing is compilation isn't actually that different, um, than, than you might expect, because we want the execution to be the same on the
[00:14:02]  server and the client. So like, if I make a button function here, uh, component and let's return button, button and, you know, put props children
[00:14:23]  in. Actually, I mean, we probably actually just want to do this, right? Spread on props, but, um, as you can see here, um,
[00:14:39]  we still do the same like getter wrapper thing around this and, you know, components actually file almost identically. And then there's just a few different helpers,
[00:14:52]  right? Where this one's SSR spread on the client side, it's just spread. So small differences, right? These kind of just almost directly run the effects
[00:15:03]  on, on the, uh, the elements. We're on the server side rendered version. This is the client side I'm showing you right now on the server side render
[00:15:10]  version. Um, we're, we're essentially just kind of like lining them up to go into this basically equivalent of a tag template literal function. All right. So
[00:15:20]  it's funny cause I, it actually took me a while to get here cause solid is actually a little bit tricky in this area. Cause if you notice this stuff imports from
[00:15:34]  solid.js web and I actually had to figure out how I wanted to handle this cause I wanted it to be isomorphic. I wanted what you imported to work
[00:15:44]  on both sides, but there's, there's, there's some funny things here. Like we don't actually need reactivity on the server. This is the other secret
[00:15:52]  that I figured for performance. And I'm going to go a little bit more into like what that means a bit later, but we actually, um, have different versions of
[00:16:04] , of solid for, for these different cases. And I can actually show you this. I'm going to, I'm going to share my VS code window here right
[00:16:13]  now. Uh, let me use a switch. I'm actually doing the stream completely from a, um, my, my, my, my, my MacBook, um,
[00:16:30]  it's an M1 and essentially stuff's a little bit small in here. Let's blow it up. Essentially, uh, uh, to, to avoid like,
[00:16:41]  you know, the infinite loop look thing in the screens. I actually have to jump windows a little bit awkwardly because if I look at the chat, it actually ends up
[00:16:50]  getting into the, like the streaming view, but okay. So I've, I've shown off dom expressions in a previous stream. I'm, I'm actually got solid
[00:17:01]  here in front of us. Um, the, the, the repo, and there's a few packages in here. There's the babble preset, which wraps the
[00:17:08]  plugin solid elements, solid SSR, which is actually just for now, just a utility around doing static generation. But when I want to show is inside solid source here,
[00:17:20]  there's a few folders and most of these sub modules that can like, um, the main one stores, they have like a server thing. There's like a server folder
[00:17:31] , a server TS. And that's because solid, solid by using something called conditional export maps, um, which, uh, let me show you here. No,
[00:17:41]  no, here, here, something using, um, see these, this, this big chunk of exports here. This is a feature that, that they added late node
[00:17:54]  14 and into node 16, I think we're basically, this is also how dev works in solid, by the way, basically tied to certain keywords, you can import,
[00:18:04]  you can just directly map, which, you know, this you, um, import or output. And if you look for all of these, um, I have development
[00:18:13]  for the dev scripts, I have browser, and then I have node and the default, but there's a server version of solid. So I actually have a different version of
[00:18:23]  the library for SSR. Um, and it's, it's actually true for all the main library pieces. Um, and to get, basically I wanted to remove
[00:18:33]  the reactivity from solid cause nothing needed to update on the server. And even after I moved to string rendering and I, and I just used the normal reactor runtime for solid
[00:18:44] , I was doing this benchmark made by Marco cause the isomorphic benchmark. I'll show you that in a minute, but I was basically getting scores that were like 70
[00:18:53]  or 80% of reactor preact. So like they would score on a test for me on my old machine, like 400 or something and solid would score like 270 or
[00:19:05]  300. And I was like, Oh my God, like, I guess I can accept that this approach is just really bad for, uh, you know, performance on,
[00:19:16]  uh, on what do you call it on, um, on, you know, fine grain doesn't really work with server rendering, but then I looked at what Svel
[00:19:25] te did and Marco. And I realized that they weren't doing anything special. They were just, you know, how they, they use like simple language, like Svel
[00:19:35] te uses let, they literally were just passing the let straight through. Cause they knew it would never update. They basically just avoided the reactivity. And I was like,
[00:19:42]  huh, I wonder if I could do that. Obviously I had challenges because I wanted to do serialization. I wanted to do suspense on the server and a bunch of other
[00:19:51] , you know, tricky stuff. But I realized that I could do that if I changed the rendering model a bit. So, um, big work that I did about
[00:20:01]  a year ago, uh, yeah, maybe a little less than a year ago. Um, like the last thing for 1.0 was kind of unifying all the render
[00:20:10]  server side rendering mechanisms. So anyways, my point is that we have different versions of solid and I'm, they give you an idea of what it looks like. If
[00:20:20]  you were in like the previous reactive session I did before. The create single implement implementation here. It's going to look a lot like the first thing that I showed you when
[00:20:34]  I was teaching you how to create a reactive library from scratch. The type script definitely muddles what's going on here a bit. Um, God, does it mud
[00:20:48] dle it? Okay. Because it's, it's literally return a function that closes over value or do a setter. Um, this is because we support function setters
[00:20:57]  actually that gets a little bit nasty, but essentially, or the setter set the value equal to that value or call the function with the value. A little bit nasty,
[00:21:06]  but my point is, there's no reactivity. So you're the, the like reactivity like computed is literally set a context, call the function, close the
[00:21:15]  context. And by doing this and the string rendering, I was able to actually, um, like you can just see all of these are just so simplistic. All these functions
[00:21:28]  is like batch call the function. Cause there's no need to batch, right? Um, on mount on cleanup or just no ops. This actually helps even with like
[00:21:38] , um, dead code elimination. Um, not that it's a big deal. I don't know if you guys noticed in the playground earlier, the, uh, click
[00:21:46]  handler disappeared. Like the server, you're not counting bytes anyways, but it's just, it's just, you know, how it goes. But, um, basically
[00:21:53]  through doing this, I was able to get the performance I was looking for. And I, I just kept on fighting at it and fighting at it. Um, you
[00:22:06]  know, I wanted to really kind of showcase the approach once I realized that reactivity wasn't going to be the bottleneck. So what I ended up doing, and
[00:22:18]  I'm just going to share my Chrome screen again, is what ended up happening was, let me see if I can pull it up here. Sorry. I don't have
[00:22:32]  this, um, prepared at all, but, uh, it's under my own profile probably. Um, excellent. Let's do this. I so morphic
[00:22:45]  UI benchmark now, but I want my version. Okay. Second. So I'm just gonna pull this up. I was able to take what I had, had done and
[00:22:57]  surprisingly got pretty decent results. I was very close to Marco or Inferno. Um, and then somebody from the solid community was like, Hey Ryan, I think
[00:23:13]  the escape algorithm you're using, which I actually grabbed from Svelte originally is not very fast. And they actually submitted a community submission and the, the end results were
[00:23:25]  incredible. Um, this is actually kind of the latest, uh, to, to kind of get an idea here, but this is going to give you a ballpark.
[00:23:34]  Um, sorry. Am I on my branch? Yeah. So I need to go on to update it. Um, it's, it's, it's really kind
[00:23:43]  of incredible. I tried to test all the, the popular frameworks here and I don't know if you guys can see this. Tell me if you guys can, I can
[00:23:50]  blow it up a little bit more because it's a lot of text, but just to kind of get an idea of where this landed. Um, sorry. There we
[00:24:01]  go. Um, like basically they're two very simple tests. There's one that does a search results page. That's basically based on a page from eBay, like the
[00:24:12]  search results, which being Marco, um, it makes sense why they did that. And the other one is like a simple color picker that the Marco org always has on
[00:24:21]  it, where you can just like change some colors, both of them. One is kind of just like a mini kind of app thing. And the other one has a
[00:24:27]  huge amount of static text. Cause like footers and all this stuff, right? This is designed. So Marco can show off its rendering speed, right? Cause then you
[00:24:34]  can see that Marco is about 8,000 operations per second where something like it's like 10 times faster than react or preact. They're like 900. And when I
[00:24:43]  was running solid originally, I was getting like, like I'd be getting like six or 700 here. Right. Um, view and inferno are, are definitely nice
[00:24:56]  bump ups, right? Over react. Right. And, and even, uh, Svelte too, they, they, they basically using kind of better rendering techniques,
[00:25:08]  preact and reactor actually kind of the dogs on the server side rendering side, but solids, you know, I got like completely different range of numbers. It was once
[00:25:21]  I fixed that escape, it was like a, an X three. And, um, um, similarly for the color picker, um, Inferno is actually pretty
[00:25:32]  good here, but I actually found that they have a bug in their, um, escaping for attributes, which is actually what puts them up front of Marco here. Um,
[00:25:40]  but again, it's the same story again, this, this one, which is less static HTML and just a kind of a small app. You can kind of see
[00:25:48]  that, you know, react and preactor in this four or 5,000 range of Marco's this time only, you know, five times faster, you know, and
[00:25:58]  views double, I can preact and Svelte is like, you know, a little bit better there. Solid's like over double of them and, and 10 times
[00:26:07]  Svelte. So server side rendering with this approach is, is, is incredible. I, I, Marco had some old comparisons and you can basically think of it
[00:26:19]  very similar to like pug or handlebars. Um, like basically we're literally just concatting strings and getting rid of all the extra overhead. Of course, these examples
[00:26:30]  are only static, not static rendering. These are only, uh, um, synchronous rendering, and there's a lot more to, to, to SSR than that.
[00:26:39]  So, um, I'm going to get into, I'm going to get into that here in a second. Does anyone have any questions so far? Sorry. I
[00:26:46] 've been talking for a bit. I need to wet the throat, so to speak. I need some water. Okay. Well, let's dig into it a little
[00:27:02]  bit here then. Um, I've got, I got a few examples and I thought it would be fun to, and actually I'm going to, I'm going to
[00:27:12]  share my, my screen here for, for a moment, the whole screen, because it's just going to be easier. So ignore the, let's, let's,
[00:27:20]  let's just share the whole screen. All right. Um, just to get into the code here, I've got an example project that I've been doing in the
[00:27:32]  solid, uh, SSR repo here. And it's, um, it's, it's, it's, it's my good place to start. It's,
[00:27:40]  it's a very, very simple example. Um, basically I created the one application and then I used four different render techniques to do it. This is kind of the
[00:27:51]  problem with SSR in general. Everybody has a different use case. Um, it's, it's, it's kind of, it's really difficult. And when I
[00:27:58]  was looking at this at one point, I was like, am I going to need 16 different implementations? Like actually went through the permutations of like what the optimal
[00:28:04]  thing was. And I was like, holy, you know, like there's, there's too much I've managed to kind of over time, narrow it down and come
[00:28:11]  up with strategies. And I think it really comes down to, you know, a couple of things, but, um, essentially depending on your use case, you know
[00:28:22] , there's, you, you might want static generation and then there's different types of SSR. Do you want synchronous SSR? Kind of like you render the app
[00:28:32]  shell and then have the client do the data fetching. Do you want async where all the data fetching happens to the server? Or do you want streaming,
[00:28:38]  which is kind of the best of both worlds? Um, and it actually depends in some cases, um, because there's trade-offs that we can get into, but
[00:28:48]  basically my, my basic site here was something super simple. And this router is not even like a real router for this example. I just literally threw something together, but the
[00:29:00]  idea is on the client side, the code's always the same. It's just, you hydrate your app. Right. But I made a very simple app where
[00:29:07]  the entry point, and this is something I've been playing with recently. I'm sure I saw Remix run. Um, I actually can show you something kind of cool
[00:29:15]  with this. Um, but we start, um, from the HTML tag, and then we can insert our assets or hydration scripts here. And then here's our basic router
[00:29:26] . There's three pages. There's a homepage of profile and settings, and then I wrap it in suspense. And then I have a basic router in this example.
[00:29:34]  Um, I have a more involved in example. I might pull up in a minute. I put a script tag on the page with async important. This is how it
[00:29:41] 's non-blocking for streaming. And beyond that, these routes are lazy loaded. The home and settings profile is lazy loaded too, but I use an older technique
[00:29:56]  that I used to use where I have a synchronous part that loads as part of the project where I actually do the data fetching. And then I lazy, I fetch the
[00:30:05]  data and lazy fetch the profile at the same time. This is important because it removes waterfalls. If you do the data fetching inside the profile component and you wait
[00:30:13]  to load it, you have this terrible pattern where you, you go to the next route and you actually have to like load the page and then have the page do the fetch
[00:30:22] . So it's like a double cascading waterfall. And these are the kinds of things that you find super common in a lot of, uh, a few years ago
[00:30:30]  in a lot of like SSR frameworks. And part of the reason I had these kinds of patterns all the time on the client side, I was doing so well with purely
[00:30:38]  client side rendering. Cause I just kind of built this into my patterns. Um, but essentially I kind of have this data wrapper around the profile component and the profile component
[00:30:48]  itself is just another kind of thing. I'm the it's worth showing that in this data component, I'm doing two cascading fetching. So this is kind
[00:30:58]  of like a waterfall situation where you load the user and then you load the user info. And I'm doing this by using the user as the check in the first part
[00:31:07]  of create resource. I've kind of gone over this before this is static. So it always just runs, but for the second one, if, if you have a resource
[00:31:14]  that's null and then, um, it doesn't fetch, but I wanted it in this case, and this made it a little trickier for server render. I wanted
[00:31:23]  it so that it could load this one. And then only once it's loaded, hence has a value, then it loads the other one to kind of simulate waterfalls
[00:31:31]  that happen, you know, and this way you can see the effect of the waterfall, both on the client and the server in these examples. So what, what I ended
[00:31:39]  up doing, and then I got the console log just to prove that what's happening, what I'm saying is happening. Essentially there's two of these loads using the load
[00:31:48]  info. And for that reason, the profile, we say that we can draw the profile once the user's information is there, but then we have a S because there
[00:31:55] 's a suspense wrapping the whole route. So the lazy loading and the user being loaded are part of that outer suspense boundary. And then the info is only being read in the
[00:32:07]  inner suspense boundary. So you can, once you have the user, you can show this part and then you'll see the loading info and then this will come in essentially
[00:32:16] . Hopefully that makes sense. Yeah. Data fetching on the server without reactivity. Yeah. Yeah. I will get there. Yeah. So essentially, as you guys
[00:32:32]  know, data fetching on the server is actually the only thing that is kind of like reactivity, but he, I had the revelation moment kind of at the same
[00:32:42]  time. I was, I was just telling you how fast solids, uh, client side renderers. So actually I'll, I'll take a moment to explain this a
[00:32:47]  little bit. I showed you how it was basically, I, I, I didn't tell you this just to brag. Um, the reason I was showing you that it
[00:32:54]  was like 10 times or 14 times or whatever faster than react and preact was the, the cost of putting the string together isn't that expensive. So solids render on
[00:33:05]  the server is actually almost top down. Essentially the resources are kind of reactive, but we don't have fine grain reactivity. When, uh, when, when we suspend
[00:33:18]  with a suspense boundary, we actually re-render everything under the suspense boundary. Again, um, we, we have a way of keeping track of the resources. So we
[00:33:30]  don't refetch and, you know, do that kind of stuff like a bit, bit of a caching mechanism, especially because, and we, we need it
[00:33:36]  anyways, because we, we serialize the data and send it to the client or serialize in some ways. So we need that cash anyways, but essentially solid on the
[00:33:44]  server works more like react just with no diffing, you know, in the client, that would be just freaking bonkers because you don't want to recreate the dom nodes
[00:33:53] , but think about it. Like how much your page is going to re-render with this and how much you, or how much wasted rendering are you going to do?
[00:34:00]  You know, if you get to a certain point of the suspense boundary, you'll have no info to render. So you're just going to stop there anyways. So
[00:34:06]  maybe we take another 10 or 15% overhead for doing a little bit of re-rendering of the strings dumb without diffing or without anything, but it's just string
[00:34:16]  rendering. So like I started doing the math and I was like, what, what's the worst case that could possibly happen here? Like at worst, what we have to
[00:34:26]  render the whole app twice. We're still going to be five times faster than the competition. You know what I mean? Like it doesn't actually matter. And that
[00:34:36] 's, and that's sort of what freed me, you know, sometimes performance can actually change the question on the design when you, when you feel comfortable at a certain level
[00:34:48]  of performance, right? We talk about like removing component boundaries and stuff. And yeah, and this is a slightly different conversation, but it kind of came up, you
[00:34:57]  know, about, you know, you, you know, people say, Oh, you're just showing this thing where solid removes the components and the performance thing. Cause you
[00:35:05]  know, you just want to show that it's, you know, performance matters. I'm like, no, no, I'm saying performance is why you, we can
[00:35:11]  remove the component boundaries. We don't have to rely on things like memoizing around components and stuff. If you guys don't know what I'm talking about, I
[00:35:18] 'm sorry. It's just, I wrote an article called components are pure overhead. And it would talk a lot about performance, but I was the real point of the article
[00:35:27]  is out of actually about developer experience saying that if you remove components, like as a thing that matters for updates, and you can just freely organize code, however you want,
[00:35:38]  that's incredible for developer experience. And it's only having such great performance that lets us get away with, with changing that because otherwise, like in a VDOM
[00:35:47]  library, you, you actually need the components to do the updates. And if you miss align those boundaries, your performance is tanks, right? I don't know if you
[00:35:59]  guys saw view 3.2. And part of the reason that view 3.2 jumped performance so much in the JS framework benchmark is they added a memoization mechanism similar
[00:36:08]  to like React memo. Let's see. So like it matters for VDOM. It's kind of funny that like on a, in a reactive library, he wanted
[00:36:18]  the least number of components as possible. Like, and if you start getting too many components, wrapping them, you, you start having to make more reactive context. If your
[00:36:27]  framework's based on components, if your frame is based on components, that's the unit of change. That's the, that's the thing that needs to like have the
[00:36:35]  observer, the, like the effect wrapped around it. So like mob, mob X with react or view or spell. So you don't want to have more components,
[00:36:46]  but on, in a VDOM library, it's the opposite. The more components you have, the more granular, you can update the change when you memoize.
[00:36:51]  So like for framework like view, it's like conflict. It's like, like, no matter what you do, you're going to get bad performance. Right.
[00:37:00]  But Evan geniusly came up with a solution for that. We're using the memo because that way he could keep the giant components that were good for reactivity, but then
[00:37:13]  he can still memoize sections of the VDOM the way you need with the react library. Sure. It's like an advanced optimization technique and you start to be
[00:37:23]  conscious of it. Whereas in a fine green reactive system, it just works, but at least, you know, there's a solution there. So anyways, this is,
[00:37:31]  I know that's a weird analog to make. I just wanted to kind of throw it out there. So you guys can kind of understand sometimes perform, like if you have
[00:37:41]  a good enough performance, it's actually liberating because it gives you more things you can do. Sorry. Little spiel. Back on topic. So let's see
[00:37:52]  what this looks like. Right. I'm going to show the simple version of the demo. I'm going to -- the first version I'm going to do is SSR
[00:37:59] . This is kind of like, you can picture this almost like Jamstack. It is dynamic, but if it was static, like I don't have a static version
[00:38:08]  of this type of rendering in my examples here. But you can kind of view this as as the Jamstack example if Jamstack serve dynamic pages. So let
[00:38:18] 's just do this, right? Okay. So refresh the page. You can barely see it, but there's a slight load here. We have a counter. There's
[00:38:28]  suspense on this and transitions. I didn't show you, but you saw that? Because this next tab has to load data. So what happened there? Sorry. That was
[00:38:37]  weird. Yeah. There we go. You can see the counter still counting. No. Something is weird. That is interesting. Yeah. Anyways, you see the counter
[00:38:48]  still counting while it's transitioning. I might have to look into that. Maybe I did introduce a new bug. Hmm. I've been working on reactivity a little bit
[00:38:55]  recently, and I can watch into that. Anyways. And then settings. This is just another dynamic thing. These settings and home page don't really matter much. You
[00:39:04]  get server render, then you can do some stuff. But the profile page, that grayed out is like the transition. When you load it, see? Suspense
[00:39:16]  into suspense. So user loads first, then this. And if we look at our Chrome tab here in the console, you will see that we load user and load info
[00:39:26]  right here in the browser. Let me change this slightly. I'm going to put the logs on here so you can see that nothing's happening on the client. See?
[00:39:41]  Nothing on the server. And the client's doing the data fetching. So, yeah. Like, let's just profile this. Oh, right. Because sometimes I
[00:39:52] 'm not in a cognitive window. God. Grammarly just kills me. See this hook.js? Just so terrible. I actually probably have an article where I actually
[00:40:03]  have the exact benchmark numbers for this exact test if anyone's interested. What was it? Rendering, SSR, optimizing for performance or something. Yeah. Yeah,
[00:40:16]  yeah, yeah, yeah, yeah, yeah, yeah, yeah. Yes. Let's see if I can blow this up big enough. Yeah. You know what?
[00:40:44]  I don't -- I mean, this is not going to do what I want. You know what? Let me just switch windows here for a second. It's just better
[00:41:06]  if I do this properly. Oh, I see. I'm still actually using all this. I forgot that I was in, like, full window mode. Sorry about
[00:41:33]  that. Okay. So, you guys can see this. Sweet. Let's get back to what we were doing here. Yeah. Okay. Cool. So, let
[00:41:42] 's quickly just do a start pre-profile and reload. Okay. Okay. What do we got going on here? I haven't actually ran this in a while.
[00:41:56]  But essentially, what you'll see in this sort of timeline -- it's all here at the beginning -- is you -- oh, I see, right. You won't
[00:42:06]  see -- no, the problem with this one, we're not actually doing real data fetching. So, you can't actually see the data fetch. This isn't a
[00:42:12]  good one to show off the timeline I forgot. I'm doing simulated data fetching using a timer. So, this doesn't actually show the data fetching, which is
[00:42:22]  what's missing here. But essentially, you get first paint and first contentful paint, like, really damn fast, because it synchronously renders. And then,
[00:42:33]  you know, profile loads in and stuff. And then -- yeah. This isn't going to show on the timeline. I'm not going to worry too much about this.
[00:42:41]  But the key point is that the work here is happening on the browser after the fact. On a fast network, this loads pretty quickly, because the first page loads fast
[00:42:54] . And then we're just running our data out. The -- sorry, let's go here. The -- the way this -- this app works with SSR, just
[00:43:07]  for your information, is -- I just call -- rendered a string. This looks like classic React stuff you've probably seen before. It gets an HTML string. And it just
[00:43:17]  sends it. But you can see the loading state. Now, I'm going to show SSG for a second, because, honestly, nothing really beats SSG in
[00:43:29]  terms of performance. I'm actually going to build -- first thing you can tell with SSG is when you build SSG, we're going to see data requests happen at
[00:43:45]  build time. Because it actually requests right now when it builds it. And then, when we start SSG, here on the stream, it's going to have a
[00:43:56]  slightly different behavior. This -- you don't even see a flicker. You notice that? You see the zero to one, and the page doesn't even flicker.
[00:44:09]  And the reason is that the browser holds the page, essentially. So, since this page is rendering fully complete, when you do -- and this is true for MPA
[00:44:21] s and all that stuff. It basically, if you don't -- until you send that content over, the browser is going to try and hold the previous page, which means
[00:44:28]  you don't even see a refresh. And it's the same thing here. You can't even tell. So, obviously, if you have the data ahead of time,
[00:44:39]  static generation is going to be amazing. And I know I said I wouldn't, but I just can't help it. You can just see that compared to what we
[00:44:52]  had previously on our last little run, the static page is untouchable. We have all the paint events happening in the low 20 milliseconds and then the full load here.
[00:45:05]  And the only reason is it still takes a moment to hydrate. But compared to the client render, which needs to still do, like, some fetching and stuff
[00:45:15]  to finish, there's -- it can just beat it out. Yeah. It's unfortunate that I'm not -- yeah, let's -- I'm surprised. Sorry. I
[00:45:27]  want to try one more thing here. But you can -- SSG is just the best baseline. But obviously, we don't always have the ability to use SSG
[00:45:34] . Let's go back to our SSR example and try this one one more time. Yeah, yeah, yeah. I just zoomed in too far that you guys
[00:45:45]  didn't see it. The page isn't actually done. Like, stuff isn't actually done until about the 899-second mark. The main content loads in after
[00:45:59]  that first request right here, the paint. But basically, the benefit of this app shell with SSR loading on the client that I was talking about previously, is that it
[00:46:12]  can start loading assets right away. And it does take a moment, but we end up, you know, being done at our, you know, wherever this is,
[00:46:27]  870-something milliseconds, okay? I mean, SSG obviously isn't comparable. Let's compare it to something else. I want to show you guys async.
[00:46:37]  And what async is, Solid has another render mode, which is build async, which basically waits until everything's done. And I'm usually not a huge fan
[00:47:03]  of this mode, although this is the most common mode in frameworks. Like, if you pick up Next.js, this is how installKit, this is how they
[00:47:17]  work. Actually, most of them work synchronously, but they combine it like a fetch and then they do it. But if you wanted to -- sorry, it's not
[00:47:31]  stream, it's start. Yeah. See, async is almost the same as SSG. You don't see the flicker, right? And this is good
[00:47:45]  sometimes if you have some requirements for that kind of thing. But let's do the profile here. Okay. Do you see what happened? I told you there's two
[00:48:07]  400 millisecond requests. The async wasn't able to show the content until that it was done. So, look when it's actually done. Like, we're not
[00:48:26]  even getting anything painted until 800 seconds. I said, this is kind of extreme case, but I just want to kind of show you the difference here in terms of what
[00:48:35]  the experience is. Yeah. Okay. Let's actually look again, because we have both of them. Let's look back to our SSR example here. Because I was
[00:48:50]  probably unfair to it a little bit in terms of timeline. Because I think -- yeah, that's just a weird look. Yeah. So, this one finished at 8
[00:49:03] :51. And there's some variance here. And async finished at 8:54. So, it's not actually that different, to be fair. And obviously,
[00:49:15]  local computer and stuff. But I just -- like, this is the difference between the app shell and the way to render is that you just don't show anything until the
[00:49:27]  end. And to do that in solid, our async starter looks like render distinct async string and we await it and get the result. And if you notice, the
[00:49:39]  fetching is happening on the server now, not on the client. And so, you might be like, well, how do we do this? Well, let's
[00:49:50]  actually view page source. Line wrap. We float out one of these lovely scripts, which does a few things like capture event listeners while it's loading and a few other
[00:50:10]  nice stuff. We actually kind of do this like event capture, pre-hydration and playback. But hydration resources equals first name John Snow info here. So, you actually
[00:50:20]  see the serialized data right here that we load in. So, on an async, that's what that hydration script does. It actually serializes the data into the
[00:50:29]  page. And it's there right when it starts being loaded because it does all the work ahead of time. Okay. Sorry, some questions coming in. Oh, you
[00:50:39]  guys can't see anymore? Crap. That's like five minutes ago. It's funny because it thinks that I'm sharing, but you're actually... Oh, that
[00:50:53] 's funny. I'm sorry about that. I'm gathering you guys can see my screen now. Sorry about that. Luckily for you guys, it was mostly talking and
[00:51:17]  you didn't actually miss anything other than me showing a bunch of graphs. I'm going to... I'll show you what I was talking about. You guys lost me
[00:51:30]  while I was basically showing the different examples of the loading and I was trying to... Basically, when I moved into the incognito window. Can someone confirm that you can
[00:51:48]  see this window right now where I'm showing page source? Still can't see... Interesting. Okay. I... Okay. Okay. Let's try this one more time
[00:52:10] . Entire screen. Sorry about that. Okay. So, let's just rewind the last five to ten minutes here. Yeah. I showed the layer of the
[00:52:53]  project and then what I was doing was I was basically loading stuff in the browser. All right. So, going back. Okay. So, the SSR project essentially is
[00:53:07]  set up here using render to string. Very similar to what you'd see in React. And I'm going to walk around in here for a second. Not that one
[00:53:23] . Sorry. This one. This one. Okay. All right. Right. So, you guys can see the cascading loading. You can see it move and stuff
[00:53:35] . I'm going to just start this whole section over here again. So, I'm going to use the profiler here for a second and kind of show you the
[00:53:44]  behavior of how basically the different versions of solids rendering work. In this case, this one is just... If I view page source again... All right. So, I
[00:54:01] 've got it right here. Essentially... It just... It serializes loading into the page, essentially. Because it only does the synchronous part of rendering. And then everything
[00:54:13]  fetches on the client. So, you can actually see every time we reload this page, the load user load info. So, I'm just going to kind of give
[00:54:22]  it a little whirl here in the profiler. And I'll just stop it now. And you can kind of see the characteristics here. We have two 400-mill
[00:54:31] isecond requests happening that I'm simulating. You don't see them on here because they're not real. They're simulated. But essentially, our page gets... The
[00:54:40]  outside of our page gets rendered pretty quickly here. Like, 34 milliseconds in. And then, essentially, after the first request comes in and loads the majority of the section,
[00:54:55]  you have this longest contentful paint event fire, which happens what here? 449 milliseconds. And then, the second event doesn't come through to finish rendering it until
[00:55:08]  about here. And our JavaScript execution kind of ends around 839 milliseconds, right? So, but you'll see, like, stuff like during this time period, you
[00:55:27]  know, if you look at the timeline, because of, like, fav icons already loaded, the lazy loaded stuff is already loaded for the page. Because what we have here
[00:55:39] , I already showed you guys when I was going over the app, hopefully you guys did see that, that we lazy load the profile component. You guys did see that,
[00:55:50]  right? Yeah. Okay. So, essentially, because we server rendered and sent it to the browser as soon as possible, we were able to load all this stuff.
[00:56:04]  And then, the client, after it loads the script, starts the request, which takes a little bit of time, right? It was about 39 seconds. And you can
[00:56:13]  see that delay all the way throughout, both when the first request comes in, and then, finally, about 839 when we're done. Basically, everything's offset
[00:56:24]  by the amount of time it took to load that initial JavaScript. And that's kind of the characteristic we have when we're doing the static render. So, you can kind
[00:56:34]  of think of this like Jamstack, if that helps, in terms of perspective, because while they don't do the dynamic rendering on the server, it's kind
[00:56:41]  of the same. You have this app shell, and then the client kind of picks up the rest of the data green. So, next, I'm going to do as
[00:56:49] ync. And async is similar, except it's a wait for render async string. And in terms of behavior, async, everything is available. But it
[00:57:08]  takes some time. Actually, you know what, you guys missed me showing static. So, I'm going to show static for a second. So, let's actually do
[00:57:17]  static. Let's do static first. If you watch static here, if you look at my build at the... I'm going to build it again. Sorry. Let
[00:57:25]  me build static. Build static. You guys probably didn't see this before, but the requests actually happen on the server at build time instead of the client around the server.
[00:57:39]  So, with this version... You guys probably had no clue what I was talking about. That's hilarious. Sorry. If we just sit here and kind of refresh the
[00:57:50]  page, you can't even tell the page refreshed because of, like, the browser holds the navigation, and all the async waterfalls are happening, like, on the
[00:58:03]  server. So, everything's been... It's actually at compile time. It happened ahead of time. But... And the difference is, if you look at the page source
[00:58:11] , where this just has some event capturing stuff before... I know this isn't very reasonable. I can add a little bit of size to it. But when I refresh
[00:58:20]  this now, what you're going to see is we now serialize the data into the page. There's this hydration resources piece and a unique identifier. And then we get
[00:58:31]  first name, last name, and then we get our interesting data. So, Solid automatically takes the resources and serializes them into the page here. And then the client
[00:58:42]  actually on initial render, essentially, when it goes to go, "Hey, I need to make that request," it actually just goes, "Oh, I actually already have
[00:58:54]  all the data here for the initialization here." And it knows because it can use the same ID. You can think of this ID the same as create unique ID.
[00:59:01]  Solid has a create unique ID helper. We basically use that on the resources to match them up on that first render. So, it just skips fetching them on the
[00:59:12]  client. And the only tricky part, and it's surprising here is... And I'll show you in the timeline here. Let's do performance profile now of this one
[00:59:25] , of the SSG. It's like so fast you don't even see it. I'm just going to stop it because it's so fast. In SSG,
[00:59:33]  this is like the idealized form. Obviously, you can't always do this. But if you look at this one, first paint happens even faster. You know, I
[00:59:42]  mean, there's some variance here, but instead of being what... The last one's what, like 34 or something. This one's like 28. But my point
[00:59:50]  is, look, profile still has to load code split load. So, hydration doesn't happen until after the profile loads. But, you know, favicon comes in as
[01:00:02]  soon as it can. And we're like, we're all sit and done. Like the majority of the JavaScript execution is done at the 40 millisecond mark, right?
[01:00:11]  But my point here is that obviously nothing beats SSG. All the work is done ahead of time. You don't have to wait for the fetching. But what
[01:00:17]  I'm getting at is what's really cool is we automatically handle code splitting. So, we pause and stop hydration and auto serialize the resources. So, like, basically
[01:00:29] , it just loads like this perfectly without you having to do anything, more or less. This is a good baseline. But as I said, my focus is more going
[01:00:42]  to be on dynamic stuff than SSG. Just because... I mean, we'll talk about SSG, but I just want to kind of show the difference between the different
[01:00:48]  rendering techniques and why they're relevant to people. Okay. Just making sure you guys are still here. You guys can still see my screen yet? All right. I
[01:00:57] 'm going to keep on going. Okay. So, let's do async. Because async, now, when I build, it's going to be different. You
[01:01:11] 're not going to see the request here. But when I start async, the difference is when I refresh the page, again, it's like SSG. Do
[01:01:24]  you notice that? No flicker, no nothing. No loading states, no nothing. But requests are on the server. Not in the client compared to the SSR before
[01:01:36] . But one thing you'll notice is, look at the fav icon, if you can see in the corner when I do this refresh. See how much longer that is
[01:01:43] ? This is kind of a cascading situation where I have two 400 millisecond requests. But I want to really highlight the difference here in this kind of scenario where you
[01:01:55]  have data coming in, cascading requests, and long fetch. In reality, those would be probably less than half. But I just kind of want to highlight this
[01:02:07]  right now. So let's show what async looks like. Okay. Perfect. This is a world of difference. Nothing loads for the first 800 milliseconds, because it has
[01:02:23]  to wait for all the data to come in to even load the page. And what I was getting at is, this is how like Next.js and Svelte
[01:02:29] Kit and pretty much every current SSG solution works today. There's a reason that Solid's client-side render stuff was doing so well when this is the competition. Because
[01:02:43]  if you look at it, it's not just -- it actually affects the total time. Like, this isn't -- this didn't even do its first paint until after
[01:02:55]  the client-side rendering was all done. like, it's 20 milliseconds to actually draw anything longer. And the client rendered -- or like the synchronous and then client-
[01:03:11] fetched version had the nice -- you could already had the shell, you already had the favicon, you know, you already had like the page loading and the loading
[01:03:20]  states. This took longer to even show anything. Right? And as I said, this is -- this is what I kind of talk about the state of SSR.
[01:03:34]  And the reason is, it couldn't even start fetching the profile of the hydrate. It couldn't even start fetching any of this stuff until after it sent it
[01:03:44] , which was based on after the data was sent. And again, you know, it's because we serialized this data here and it has to be all present at that
[01:03:54]  time. So -- and you see it's all server rendered into the page here. There's no loader. There's, you know, these long IDs. If
[01:04:03]  you think these IDs are long and nasty, I actually -- I actually did a version where I like uglified them into like short little strings and like hashed them up
[01:04:15]  and made them look nicer. But you know what happened? They gzip first. So this is actually smaller because I use a lot of dots and like zeros and stuff
[01:04:25] . Like this actually gzips actually quite well. Just side note. So if you're if you're wondering if you come with a request to come up with like short
[01:04:35]  shorteners here or something, just think about that. Because like is your -- I mean, unless you're hashing compression is better than what gzip can do across the
[01:04:45]  whole file, then you're probably not going to do as well. Anyway, just a side note. Where was I? So this is -- this is what most SS
[01:05:00] R looks like. So I showed you Jamstack. Now I'm showing you Next.js essentially. They do it a little differently. And this is Next.js
[01:05:09]  with solid to render, not with React, which we already kind of -- but let's look at the next thing. Okay. Yeah. Yeah. You can see all
[01:05:20]  those. Let's -- oh, I think there's only one left, which was -- let's build screen. Yeah, okay. All right. Well, the behavior
[01:05:46]  of streaming looks a lot like that initial synchronous server side rendering one, right? You see the loading placeholders? And, you know, see the suspense hold and --
[01:05:57]  sorry, I mean, that's the thing. I'm just -- you can see the loading spinners come in. And -- but here's the thing. The loading is
[01:06:06]  still happening on the server, not in the client. So if you want to be the page source. Oh, that's cool. The page source actually updates. It
[01:06:24]  shows the whole -- it shows it completing. So you actually see what's -- what streams in, which I actually didn't notice before. We actually flush down markers to tell
[01:06:33]  that the resources are -- like, the register of the resources in the client. Because we don't have them when we start streaming the rest of the content. And then
[01:06:43]  as the resources finish, we -- we serialize script tags to send the data across. This is what I was talking about, solid streaming, solutioning half and half.
[01:06:50]  We don't actually stream HTML today. It's -- it's -- ideally, if we're streaming HTML, you could send the HTML along here. And you could actually have
[01:07:00]  it slot into the place, replacing those loading indicators without -- before your runtime even loads. But I didn't prioritize that for a couple of reasons. First of all, solid
[01:07:10]  is it's a single page app, primarily. So stuff isn't going to load until it's like you can't do much with it until it's going to
[01:07:20]  hydrate anyways and hydration is a guarantee so generally speaking for it to render at hydration time um is not a big deal right like i mean it's it's it's still
[01:07:33]  better than client side rendering because technically you started the requests on the server which means you didn't have to wait for the response to come back to the client to start those
[01:07:46]  requests and when you get the data um you know like it's it basically like we just we basically sped up client side rendering it and we know we know we have to
[01:07:59]  hydrate anyways it's a little bit different on an mpa framework i think um or with stuff like react server components in the future i guess although i don't know how
[01:08:07]  that plays in but essentially in in the case of something like marco we might never hydrate the lazy loaded content that comes in so actually like streaming it in without the
[01:08:20]  runtime is beneficial because you can actually get zero kb javascript where this approach that i have today will doesn't give you zero kb javascript it still relies
[01:08:29]  on uh client rendering so it's kind of a hybrid zero kb javascript but it's still good enough to illustrate my point here of the benefits of streaming because
[01:08:40]  let's let's reload this what what what about that first paint same as we've been getting around 30 right but look the the like the client side one we got the
[01:09:09]  load stuff ahead of time like the profile and the fav icon but because the data request started sooner we actually it came back earlier right and in so i'm sorry actually fav
[01:09:31]  icon still took its time it really just waits till the end while there's some paint task here the actual javascript execution time for hydration and stuff all happens around 8
[01:09:43]  13 if you remember like you you can actually almost visually see this on the timeline like i guess technically the the longest contentful paint is around 8 38 but my point is streaming
[01:09:57]  is faster than all the other solutions or very similar to the client side rendering performance it is faster in the async uh like the s like the next js is of the
[01:10:11]  world um because um it doesn't it doesn't push off loading those resources but it it basically just gets both benefits you get to load the data sooner and you get to load
[01:10:21]  the resources in the browser sooner and then everything just works and what's beautiful is you you just get both sides of it right you you get the automatic serialization the the
[01:10:30]  suspense on both sides the loading states it it it it's really where you want to be why can't okay question game why can't you do zero kb with solids current
[01:10:44]  approach that's funny um the answer to that is well you could but how should i put it zero kb for like like like like like being advertised right now in frameworks
[01:11:02]  that are not marco or quick or or or um svelte are like basically like not including the script tag on the page like it's it's kind of all or
[01:11:12]  nothing because like you need to load the framework to get the routing to like to rent like it's the do the hydration like it's top level from so it's kind of
[01:11:23]  all or nothing whereas like in something like astro or marco um i guess technically speaking when they're in zero kb mode it's the same deal but my my
[01:11:37]  my point is like how do i put it like it's incremental based on the javascript you need whereas in a single page app like the way solid works you kind
[01:11:48]  of need it need it all but i guess more pointedly is the current version of the streaming streams the data not the html so we if you look here loading is
[01:12:02]  actually what's being sent over we're actually sending the fallback over and then it's being client rendered so this is sort of half and half we get the the speed
[01:12:13]  benefit of of streaming the data but but essentially we're still client-side rendering the the holes so to speak so this version that i have right now works very well when you
[01:12:32]  know that you're going to hydrate anyways but if if we didn't load solid script it would never leave the placeholder with the approach that i have right now i
[01:12:40]  hope i hope that answers the question like it like um it basically we still need client rendering for this for this current approach to work this is one of the things that's
[01:13:00]  on my list to address this fall but what i did want to but the key part to understand though as well as this though is that the performance is is still is still quite
[01:13:09]  good um yeah it's hard to think the the the signing timeline doesn't show but essentially we kind of get um the we kind of get the best like this this example
[01:13:22]  is a little bit exaggerated but you know in terms of database latency but also network latency kind of can change it too um the biggest benefit but i already showed i basically showed
[01:13:40]  how streaming is basically faster than async rendering but i i there's a couple more things i want to show before we move on related in this vein and i want to go
[01:13:51]  back to our simple ssr example and i want to show you this is the one that does the jam stack style right i want to show you how crazy different this gets
[01:14:04]  when we decide that we want to do fast 3g i'm not even talking slow 3g fast 3g let's let's let's run this again now let
[01:14:16] 's let's see what happens in our in our nice client side example yeah so everything is kind of ballooned out um i'm actually trying to think of the client side
[01:14:33]  example you know what actually i can't i can't do this part of the demonstration on this example because we're not doing real network requests so we can't see the
[01:14:54]  impact of the fetches here using simulation i'm gonna have to pull up a different example to do this part um essentially because the slowdown is not going to be visual
[01:15:05]  i'm pretty sure look let's yeah yeah we're not going to be able to we're not going to be able to show this i'm sorry the simulation is great for
[01:15:19]  showing the fast speed because but for in terms of simulating um network requests i need to use actual net request so let's let's i actually remade this example again
[01:15:34]  in a in a different repo and i think um i think it's actually might be nice to kind of open that one up because it's a more advanced version of the same
[01:15:44]  example and you guys can probably see a little bit more there um which is what is it solid ssr workbench all right this example is almost the same except
[01:16:10]  this time it uses solid app router and it inlines placeholder tags and it does real json request the only challenge for this one i imagine is is um is in terms
[01:16:30]  of uh what do you call it uh fetch caches um naturally which kind of makes it a little bit awkward so we might not be able to see what we need i
[01:16:40]  might actually it might be best if i just go back to the article and actually pull this one up in the article right in the incognito window for in a second um
[01:16:51]  let's just do this all right and ended up a little messier than i was hoping for here for the because i basically ran a very similar example when i was doing
[01:17:14]  this and i was showing that like async had to wait till the end and that with streaming like the whole time was earlier this is kind of what what i was showing
[01:17:25]  before um but let's see if i can load this timeline here yeah oh right it's sorry it's because the let's just duplicate this dev2 as much as i love
[01:17:45]  writing on it it has this really awkwardness that when you load any images um it essentially just takes over your tab so you have to like open them in a new tab
[01:18:00]  yeah so this this is the this is this is the difference because i i kind of showed you how client and streaming had an advantage over async rendering on fast networks but if
[01:18:14]  you go on a slow network the kind of opposite happens on your on your on your timeline loading and this might be a little bit hard to see but let's zoom this
[01:18:23]  in with streaming essentially when the network's really slow suddenly and it's taking like several milliseconds for the page load now now we're not even getting the html back
[01:18:35]  until 600 milliseconds and you know we're loading in our profile and our index javascript because we have pre-loading in this example now and essentially our first paint doesn
[01:18:50] 't happen until 1200 but it there's a little bit of time here but basically with streaming or async at this point because it's taking this long the data is already
[01:19:02]  fetched finished fetching on the server by this point so whether you use streaming or async you can just render the whole page almost immediately and you can see this is streaming
[01:19:11]  there's no gap anymore even though that like these look like they're in time they're actually sitting all on top of each other basically at this point here you know around
[01:19:20]  you know between these points here between like the load happens where the red line is i don't know if you guys can see it's really small and the first paint here basically
[01:19:26]  around 1300 milliseconds for the slow network um we we've essentially loaded everything on streaming and async would have basically the exact same profile but on the client rendering with the jamst
[01:19:40] ack version in this scenario at that 13 milliseconds yeah it loaded the app shell but now it has to go do the the data requests here see these are the data requests coming
[01:19:52]  in and these aren't long data requests now in this example they're actually um uh like the ones that i was showing like they're just against like this json placeholder
[01:20:05]  thing but because the network's slower they take longer to come back and it you're not done till about 2600 milliseconds it actually takes twice as long for a client side rendered
[01:20:17]  um thing on i think this was quote fast 3g network so essentially in my examples that i was giving in this article if you do want to read about it in the
[01:20:30]  server rendering a performance article essentially client-side rendering or client-side fetching and rendering and streaming are are faster than waiting for everything to load on the server generally on
[01:20:44]  fast networks but on slow networks async and streaming are almost indetectable but client-side can be like double or triple like your performance tanks and that when i realized
[01:20:59]  this this is when i knew that i had to do server-side rendering for solid like it's one thing you know to kind of sit here and be like oh my
[01:21:10]  network is fast but if for people who need page loads and stuff this is vitally important something um like if you can't do static and you need to do dynamic fetching
[01:21:21]  doing it on the client um for a slow network is like a death sentence it's like it's it's it's just it's just not even close so the only
[01:21:31]  way to get the best of both worlds is streaming and that's why i think everyone will be doing streaming like it's it's it's just it's kind of um
[01:21:42]  it's just a no-brainer from that perspective that's why it's so important in react 18. that's why i've been i originally did the first implementation of
[01:21:50]  streaming over a year ago and as i said it's not complete yet and marco and stuff like this this is the next thing on ssr um it affects mpas
[01:22:00]  and spas just as well um because it's it's it's faster on all networks the problem is not every platform supports it um cloudflare um is one of
[01:22:11]  the few ones that supports it um for serverless functions right now so i'm excited about that i'll see node servers do that um but i've been talking to people um
[01:22:22]  i don't know if aws will will support or whatnot but you know i i'm hoping with react cloud people will you know like have to start supporting streaming uh marco
[01:22:35]  team's been kind of shouting this at the top their lungs for like years but um it's it's definitely underrepresented um i was actually um doing a bunch of demos
[01:22:48]  with marco and kind of trying to show it off and i was like oh where's the loading state and it's like oh it's because like i don't think her
[01:22:55] oku supports streaming you know maybe not or whatever setup i had so you have to be very kind of conscious of that that do it basically is just the best in both scenarios
[01:23:09]  i mean from a pure performance perspective which you know is something i tend to care about so sorry um it's a little messy but does that does that make sense so far um
[01:23:22]  i just wanted to kind of show this and and how does that streaming work in solid i forgot to actually show you guys what the streaming example looks like but it's actually
[01:23:34]  kind of kind of cool it isn't actually that different let me look at the index here pipe to node writable um in this one i got a manifest for preloading
[01:23:46]  um compared to the previous path i was showing you but the same idea we're you know for ssr it's like uh oh where is it's build files it
[01:24:01] 's you know um rendered a string then we have rendered async string and then we have um for for the ssg and the async examples i had here and then
[01:24:10]  finally for streaming we have pipe to node writable um there's some few more options there but essentially it just takes your render function and takes your response stream and there's
[01:24:22]  also a pipe to writable which is what we use for cloudflare which and technically i guess would work and if you've made a version of solid that worked in well
[01:24:29]  then don't have to make a version but if you like i don't know want to stream from like a service worker or something probably run solid in a service worker um
[01:24:37]  it uses the web stream standard so um that that that's more or or less like like the api there um this example has a few more features so maybe i can show
[01:24:52]  them off here um in that we show off our no hydration script as a way of loading and pre-loading tags and then this is our hydration script it's just
[01:25:05]  this thing that we boot strap um that and again i want this is a this is a how should i put it this kind of rendering from the head isn't necessary and solid
[01:25:20]  you can use like the string and then the usual input it's just something i've been playing with recently of course the question you might have is like doesn't this affect
[01:25:30]  stuff hydrating from the document and the answer to that is actually kind of cool let let me let me show you what happens for hydration from the document i knew i knew the
[01:25:43]  i knew the playground was good for something right um let's do this you know we can still generate the output without importing the libraries that's fine now if this was normal
[01:26:00]  ssr or sorry normal client-side rendering you'd have this giant like script right but um we we can do a little better than that and the way we can
[01:26:20]  do that is let me show you client-side rendering with hydration oh it's gone basically um there is some code extra code um for for hydrating uh from the top
[01:26:40]  i suppose uh but it's minimal because we we we know that this starts from html so it can never or includes html tags so it can never be rendered
[01:26:51]  in the browser so basically that whole higher level template here we know automatically not the ship and then essentially we have some shortcuts which jump to the head and jump to the body
[01:27:04]  tag there is a little bit of extra body uh walking because it needs to like handle these slots but generally speaking um we have this ability to to kind of remove that and
[01:27:18]  you see this link module preload if we know that this is never going to come in i actually added a direct of the solid where you can just go server only and bang
[01:27:29]  the template just disappears i don't know if you guys saw that so technically speaking you know you could have like a zero kilobyte javascript thing with solid if
[01:27:48]  you wanted to or like obviously but you could also have like poor man's islands i call it without really doing anything because you can you can just render your html page
[01:27:58]  you can do it in jsx here like this and then you can just put in a couple com put in whatever components you want and it basically just won't ship the
[01:28:07]  template for the the main html page and just ship the code for those components so i mean it's not fancy like astro but it's also like no effort um
[01:28:15]  if you really wanted to do that i don't to me i don't call this partial hydration this is i'm sure some people would be calling this like partial hydration mode or
[01:28:25]  something but i don't consider this real partial hydration but it just it is just interesting that if you want you can basically tell any template not to get shipped to the browser
[01:28:34]  um and automatically the top bubble html template will not get shipped to the browser so you know if you ever see something like this minify you'll understand why this is
[01:28:44]  important because a lot of this code you know shrinks up pretty nicely or gzips pretty nice like how many times do you write the word next sibling here but these
[01:28:52]  strings that's like you know larger apps and absolute larger static content that's where all your your code is because like look if we didn't have this hydration tag here like bl
[01:29:07] ip right if we didn't actually have stuff that needed to be interactive you know um you know stuff is all this you know what i mean like one of the interesting things
[01:29:31]  about this approach that solid uses to hydration which we haven't talked about much is that we separate the template creation from the walking and adding and this is true even for client
[01:29:40] -side rendering if you know it's like it's the same pattern where we do the separation so what that means in general is that we only add as much hydration code as
[01:29:49]  we need to hydrate like it's only as much code as you need like we don't need to like it's not like the same concept of like re-rend
[01:29:56] ering the component like we don't need the view code in this case we can we can peel it all out there's all this code is is just walking to the elements and
[01:30:05]  adding the stuff there like i mean i mean this is overly simplistic but if you had a completely static template um what in here is not static oh it's probably these classless
[01:30:18]  selectors whatever um yeah yeah because these are stateful it could be actually that's why this didn't minimize like if you if you had a actually static template in solid
[01:30:34]  oh where did all the code go right like yeah yeah like yeah what oh this is already not even there because we're not using it anyways you you you get you get
[01:30:56]  what i'm saying right like um yeah it's interesting pure annotations maybe fix this this is funny because create single is not used so the thing's smart enough to know that
[01:31:06]  it doesn't need to be there but it thinks it might produce a side effect so it's there but i i think there would be a there's a way to make it
[01:31:13]  even get rid of this create signal if you wanted to but not neither here there but you get my point um essentially this is why i've kind of held my opinion that
[01:31:24]  with the proper partial hydration solution for something like solid um and this ties back to the beginning conversation we're having about react server components you you might not need something like react
[01:31:40]  server components to lazy load or not send the templates you know i mean like stuff like that the components aren't allowed to be stateful that's technically free server components so they
[01:31:50] 're basically like api routes at which point if you just had a way of identifying the static parts not sending them then you basically get the same effect because we only send
[01:32:01]  as much code as we need to hydrate okay hopefully that makes sense to you guys oh yeah you guys aren't as talkative this time less questions i hope i'm i
[01:32:12] 'm not uh just like saying something like way way out there um all right yes yeah because i'm gonna go on i guess to the next thing then if there's no
[01:32:39]  questions at this point all right so yeah i don't think there's much more to show on this demo i showed i showed the performance aspect of it and i kind of
[01:32:53]  showed you know like what a setup might look like here um using like suspense and stuff as i said the the the this this example here using a data component with the comp with
[01:33:07]  the with the profile to use create resources a little bit closer to a real scenario and then the profile itself from the suspense it's it's it's kind of cool how
[01:33:19]  it just kind of all wires up and works for you and then you just literally can take the same app and without any other code consideration have it pretty much client only server only
[01:33:31]  like you like other than the entry point admittedly other than the fact that i chose to start from the html tag rather than the div id um like that makes
[01:33:44]  a difference with client only versus um client and server but more that i was getting at it's like all the different rendering modes all kind of work with the same app right and
[01:33:48]  really trying to go for this isomorphic feel where you kind of abstract the details of how your data fetching works kind of into um the like the resource api
[01:34:09]  here like this fetcher here i'm just using fetch and in our case i poly filled node fetch at the top level so it works on the same on both sides but you
[01:34:20]  could you could basically have it like you could basically have your fetcher be something more like oh like once you do all this work like instead of maybe passing this URL if
[01:34:35]  you were passing something like i don't know users 2 or something or you know you know like some other kind of encoded data format that you need you could you could
[01:34:51]  do something like um import the server from solid js web right and then you could be like if his server else this right and you could basically just go like you know whatever
[01:35:20]  you know pg pg query like some sql thing and then you know select whatever and basically take the same like request and based on where you are and because of
[01:35:37]  the way the code splitting works it should just not include pg in the client because they don't see that it's not used and then you can basically if you abstract
[01:35:47]  it at the fetching level here you can basically wrap the you can basically set up the exact same app and have it just run on client and server automatically all with the same
[01:35:56]  imports and everything um that's the that's the goal here um all right anyway uh moving on to the next example undo this so the last thing we're going to look
[01:36:14]  at today is let me open what am i going to open let's go a little bit higher up development is solid start example you guys are probably a little bit curious about this
[01:36:32]  this is me just playing around a lot so you know this isn't quite an empty project and honestly i probably have to rediscover it again while i look at it because
[01:36:41]  it's been a while since i've looked at it but essentially um this is solid start and i'm just going to run it in dev mode here for the most part using
[01:36:52]  beat and when you install a new project you basically get this folder structure and we'll look at that um and yeah let's just going to look too quickly if anyone any
[01:37:07]  questions to recap client versus streaming question where the bytes saved on slow connection is it the lazy loaded hydrated content is less bytes than the fetch parts or reduce support js um biggest part
[01:37:28]  is that you can start your async requests on the server like when you when you when you do client side rendering um you you're like so basically you you maybe have
[01:37:41]  an app shell or something and then you you have to wait for the javascript to load in the browser and then you do the request and then your data comes in with
[01:37:53]  streaming when you do the initial request to the server you start doing the data request and it comes in over the stream as it finishes and the difference is if if there's
[01:38:04]  always this kind of double cascade right where you have to load the html page and then you have to load the javascript if your network is slow you have to
[01:38:14]  like the the initial page instead of taking you know whatever 80 milliseconds or whatever suddenly it's 500 milliseconds and then the javascript starts and instead of being 80 seconds it
[01:38:24] 's also 500 milliseconds and then you do your data request and because you know your network's slow that's also you know 500 milliseconds or longer you know whatever but if on streaming
[01:38:40]  side i can't do anything about the fact that your javascript takes 500 milliseconds or your page takes 500 milliseconds because it's still gonna take that long to load but
[01:38:50]  we started fetching the data right from that first request to the page so while that a thousand milliseconds or a second is passing that the client side rendering would have to like wait
[01:39:05]  before it even gets started we're we've already fetched your data and we're sending it along on that initial stream so it's coming in with that you know first
[01:39:15]  500 milliseconds like maybe it comes in a bit later like it's 700 milliseconds or whatever but like depending like it shouldn't actually like it depends whatever like it's still taking a
[01:39:25]  while to go over the wire per se but my point is by the time the javascript finishes loading all the data is there it's as if it was async
[01:39:35]  as if you like it was all present there on the client side at that exact same point you're like oh now i have to go fetch all over the network and it's
[01:39:42]  a slow network so you like you're literally doubling the amount of time it takes when you do that client side approach compared to streaming or even async rendering hopefully that answers the
[01:39:54]  question um what is it going to take the implant real partial hydration um depends on what our goal is like i i i maybe i'm being a bit of a stickler
[01:40:13]  elitist or snob or whatever like i don't consider even necessarily like what people call partial hydration these days like the island stuff like actual partial hydration like if we
[01:40:27]  if we wanted to do something like astro does which would be fine and useful in its own right um and thinking mpa style we could do that and i think it could
[01:40:39]  even be once i do a little bit of work around supporting multiple routes which i need multiple async hydration routes which i need to support astro anyways i think for like i
[01:40:49]  think it's actually pretty easy for any framework to go and implement something like astro for the specific firm the tricky part about astro is that like you have to make
[01:40:57]  it work for all the frameworks but like any specific framework um if that just wants to set up an island on the page you can do that and then all you have to do
[01:41:09]  is do a little bit special something special like i don't know like i already showed you how i was doing it here all we all you have to do all we'd
[01:41:18]  have to do is instead of walking the tree you know like i was doing just go okay i know everything outside of this is going to be static so let's just instead of
[01:41:29]  walking let's just take the hit and do document query selector or whatever and just grab those nodes and make that the starting point of hydration you know look at the template
[01:41:41]  and make that call because it's all very explicit um the the difference um the only reason i don't do that right now is obviously it takes more work and more specific stuff
[01:41:52]  and i solid's optimized right now to do the walking because walking like that is faster than query selectors when just doing hydration or rendering in general so for the most part once
[01:42:01]  you're in the hydration route you don't want to be using document query selector you want to be doing um like you want to be doing like the first child next
[01:42:10]  sibling stuff that i was showing off but one like all it would take would be to kind of like recognize that you're in that mode and just like basically treat everything is static
[01:42:26]  until you hit a component that's registered like that and then from that point on just treat it as its own kind of sub sub app or something i i there's a
[01:42:37]  little bit more to it but i i i'm i i believe that's all it would take um and even what we have right now like as silly as it sounds you can
[01:42:48]  you can you can achieve something very similar um simply by using like type template literals or like sort of template literals like to do your html tag and to
[01:43:00]  do a string and then you know how like when you use normal server rendering you just like put it put in your entry point just make multiple of those right just like that's
[01:43:10]  that's the poor man's version right if you want to get stuff like astros like intersection observers and stuff you need to you need to load a script on the page
[01:43:17]  that does a little bit of extra there so like my point is it's not cheap and it takes consideration there's a reason there's a team of people working on this especially
[01:43:25]  support all the frameworks i'm just saying like it's an involved problem but not a not a not a not a not a challenging one the the only thing is you have to
[01:43:34]  do the work you have to decide that's what you want to do like do you want to work on do you want to optimize for mpa right um and my my
[01:43:43]  thinking is if i if we can support like multiple hydration routes and stuff like why don't you choose astro like i mean like it already kind of handles the case like i
[01:43:55]  don't know if it has any it doesn't seem to appear to have much overhead i don't i don't i don't really know if that alone adds much benefit
[01:44:07]  for what we're doing i mean if someone wants to make their framework elder js and built on svelte to do it some we could make like a kind of framework built
[01:44:14]  on solid to do this as well um kind of like i was talking about essentially so it can be done but if you want to know what i'm personally interested in i
[01:44:26]  want to see what i can do for single page apps i want to see if there's other techniques we can do to reduce javascript load in the smart way um and
[01:44:37]  part of this is probably because i know on the mpa side that anything i do won't be able to touch the work that marco does like it's so much smarter
[01:44:48]  and better in terms of analysis and the amount of work to get there like the support of the language specific qualities and the analysis and like like it would take us years and
[01:45:01]  maybe it's a worthwhile challenge but it's as i said our multi-page apps where where you're going with this um like like me personally i don't i don't
[01:45:17]  need to compete with myself right i'm already working also on a framework that is just really good at multi-page apps so i kind of want to see solid as being
[01:45:27]  like something that's you know really good at single page apps like it's it's a svelte or react competitor right it's it's you know i think there's
[01:45:39]  your view or whatever i think there's a lot we can do to reduce javascript there and do smart things for template loading and maybe in maybe in the end both
[01:45:47]  approaches kind of merge or something or we get to a point where you can kind of get best of all worlds but i i i think it's most beneficial that we attack this
[01:45:56]  from from that side because that's what solid's good at um i i think i think mpas are important i think that they they there's a lot of use cases for
[01:46:09]  them they just weren't the use cases why i created solid and when i put it up against and when i consider that there's you can both use something like astro
[01:46:17]  which does the trick already good enough and then when i especially put it against marco which just it's it's just not even close on the mpa side like it it
[01:46:27] 's so funny because you know some people talk about you know boasting and all that kind of stuff on the performance benchmark but it's like marco is so far ahead
[01:46:38]  that i i don't even feel ashamed of talking about it that way um that um like it it's just hard for me to be motivated but i said someone wanted to make
[01:46:51]  something you know and maybe like the jsx and like the experience of solid i think i think there is space there it's just personally i feel like we could leverage solid
[01:47:01]  in different ways and benefit like basically push boundaries in ways that no one's seen before in you know in terms of code reduction and performance and stuff and just a different way that
[01:47:12]  isn't islands anyways i hope that answers that question yeah yeah yeah that that's that's like generalizing it it just the truth of the matter is you can use you
[01:47:38]  can use marco for a single page app if you wanted to right like nothing's stopping you it has all the pieces the performance today on the client is like not amazing but
[01:47:49]  i mean it's it's right up there with react and angular and those are popular and then as i said the next version of marco is gonna have much better performance
[01:47:57]  much better and i think you know after marco six ends up people might actually play with it with single page apps but when you talk about multi-page apps and the types
[01:48:05]  of optimizations when you put the streaming in conjunction with things like automatic partial hydration you know it like it almost feels criminal that you're not using it and especially when you just
[01:48:17]  consider the design philosophy of marco html first and all that kind of stuff you it feels like you're just building a website because you're like if most your
[01:48:25]  page is static you want to start with html if you're making an app i feel personally that i want that control i want to i want the javascript for
[01:48:32]  first right and that's where i've always sat and that's where i i still said you know like this these are even though i work on two frameworks like because of certain
[01:48:41]  kind of use cases i see that balance but like if someone came to me and was like oh do you want to use solid at ebay i'd be like i mean
[01:48:48]  maybe for these kind of certain kind of little things here or there but like for the main site like marco is like clearly a better choice like it just it's just not
[01:49:01]  even again not even remotely close so um it's mostly marco marco hat is optimized for this use case in a way that no framework is it's it's you
[01:49:14]  know what i mean like facebook built for facebook's problems marco built for ebay's problems um what's interesting is you could always take an mpa framework and use it
[01:49:26]  as a spa framework so from that side they have both bases covered so you might be like well then mpa optimizations are what matter right but i don't think there
[01:49:37] 's a problem generally speaking mpa optimizations don't work with single page apps you're basically just throwing it away so it's it's not clear it's not so clear
[01:49:47]  cut if that makes sense okay so where was i i was going to show you guys solid start yes so welcome to solid start so if you just install a new project you
[01:50:00]  would basically be looking at what i'm showing you here um i added a couple stuff here like these terrible terrible links which are completely unstyled um and you'll see when
[01:50:14]  i start this in a second but essentially solid start what it does and there's this little meta tag so that it knows that if you change anything this file to actually reload
[01:50:23]  the whole page and not try and do like client side um hmr i actually had to do a little fancy thing there because i was having some problems but essentially solid start ships
[01:50:35]  with a bunch of basic components for you links meta outlet and scripts and this handles the injection of stuff like your the meta tags you use um and the preload links and
[01:50:46]  outlet is for is the routes that you have to use and then the scripts are like the hydration scripts and all that stuff so with this setup you don't really have to worry
[01:50:55]  about all those those other things and and the outlet you're like oh what's this doing well it's it's looking at your page structure this is your classic file based router
[01:51:07]  um in in your pages here essentially we have an index ts and then i made a user list data here and honestly um this is just me playing so don't take too
[01:51:24]  much from the data component by calling it user list data the router the file based router automatically knows that this is the data component the resource that it needs for for here and i
[01:51:34] 'm going a little quickly here because i'm going to show how this works in a second but essentially um yeah you know what let me just comment out a couple of these
[01:51:48]  and just give you that solid start thing right what is it npm run dev dash dash open i can't remember although i'm full screens that probably isn't going to open
[01:52:03]  it properly can't even remember actually it's like what's the readme for it's because i'm an npm if i was using yarn or something dash dash dash
[01:52:18]  dash open okay where is it probably open it like in the wrong browser or something there it is um okay and there's some extra links here i had it but this is this
[01:52:34]  is just uh oh i guess the counter is supposed to be there sorry my bad what did i do i'm gonna i got too many windows open let me close it down
[01:52:42]  what's the counter doing i got i got the look here because i actually did hijack some stuff okay yeah the counter is working perfectly normal sorry guys this is this is my
[01:52:53]  this is my playground um so let's let's just add the counter back on our page all right more updated yeah so here we go welcome to solid server side rendering and
[01:53:14]  by default solid uses streaming um just makes our life easier this part's abstracted from you your entry point literally is this point and start is like a provider but you can
[01:53:24]  add your own providers around around start and around your app so like this is this just handles the details there's in terms of config oh i'm just using the defaults but
[01:53:37]  there's there's a there's a few options here like you can go like prefer prefer streaming false if you don't want to stream and you can change your adapters but
[01:53:47]  generally speaking um uh this is kind of like the base base setup here so we and in our case i just loaded some css and in our root ends root and basically
[01:54:00]  beat handles most of the rest um so yeah let's let's let's let's actually add a page here i made this user list page and i i want to let's
[01:54:13]  let's add a different page because let's let's add a what page should we add let's add um let's add a hello page okay hello okay so hello page
[01:54:28]  and uh what are we going to do here export defaults hello and yeah i know i already have a component called greeting so it's not lost on me but let's
[01:54:51]  just just kind of show how the router works in action here because i mean you guys probably have a fairly good idea of how this works but if i just add this here
[01:55:02]  and go like this and we should now have a hello page all right now we have hello in here all right so our hello is not showing what did i do wrong see sometimes
[01:55:22]  this is this is one of those things that i kind of i i wonder a bit about with with vite because i suspect that glob import yeah doesn't work so there's
[01:55:39]  so there's some rough edges on beat still um it's a little bit unfortunate but here's our high page this is actually pretty nasty if you think about it because obviously
[01:55:53]  you don't want to restart beat every time you add a new page so the there's there's some rough edges i think that's a lot of reasons why these starters are
[01:56:01]  taking a while that being said feed it's awesome but we still need to kind of work through it so i mean that's all it takes to add a page here um
[01:56:09]  and you can add parametrized roots or whatever like if i wanted to um let's rename this to like oh what do you want to call it let's just
[01:56:32]  go id i mean it's lame let's do this and then let's change um we're using the router here so what is it uh import use use these params
[01:56:58]  um so yes router see there's a lot of still a little bit of loose ends here but let's just kind of do some stuff here let's i think it's just
[01:57:12]  i think it's just like this if my memory serves i think i should be able to just go hi params dot hello if if if if my memory serves correctly so
[01:57:41]  yeah there we go hi hello that's funny um but obviously it means that if i put in something like my name yeah you know so we we have the basic file based
[01:57:58]  router it can be we we actually support things like nested routing too and then you use an outlet component kind of it's the same pattern all the way down if if you
[01:58:05]  use nesting then you put an outlet and that's where the children go on but for for for basic stuff like showing a list and then showing the detail view um you
[01:58:13]  don't actually nest if you think about it because you don't want it's nesting is for sure layouts um more than anything okay so let's uh let's show off
[01:58:23]  something else so i made this user listen user data thing is is our kind of trick for code splitting because the data gets part of the main package and the list gets part of
[01:58:34]  here and this way we can kind of paralyze things but one thing that i've been playing around with is i thought what would it be cool if we just had functions
[01:58:42]  here so um one thing that i i haven't decided on it but i was like this kind of idea that we can basically if if you use this actions extension here like dot
[01:58:54]  actions ots and i haven't finalized on this you can actually just write a function um and and have and and it basically expected to be um to be an as
[01:59:06] ync function as well but essentially just you just write a function that takes parameters and returns data and essentially you just write this function just normal like this and then if you look here
[01:59:19]  i'm actually calling i'm passing this as the promise essentially because even if you don't write it async it becomes async you basically is you import um uh the
[01:59:30]  the actions i did act for short i don't know who was i'm just being tacky i don't know whatever basically it uses the name as a namespace for the
[01:59:42]  file and then and then basically you go actions dot users dot the name of your function so see here um like get all and then calling since it since it requires no parameters
[01:59:54]  and returns a uh a promise it's essentially just perfect for create resource so i'm just called this function and what's cool about it is let's go back um did
[02:00:05]  i what did i kill see this this is this is sort of what i'm i'm talking about here so i don't need to open it again keep on opening it let
[02:00:14] 's go back to the start go to users here's our users right so what happened here if you remember our previous example and we have suspense and everything baked in um essentially
[02:00:32]  if i put a console log in here um let's do that actually um not that one sorry this one if i just go console.log get all let's get on all
[02:00:55]  right fresh okay maybe i'm not streaming the logs out that's annoying okay that's it rough edges okay so let's try a different way my point is what what's
[02:01:11]  happening here is we've made this function when the page gets server rendered we should be able to see this view page source we are actually streaming the data out see here is
[02:01:35]  the the data coming out um so it's it's fetching the data on this on the server and streaming it into the client like this right but if if you do
[02:01:52]  if i go here i'm going to refresh refresh so you see that there is no streamed uh it's not oh it's because i'm on the wrong page sorry if
[02:02:05]  you page source again um there's no stream data here okay okay now when we go to when we go to users on the client side uh sorry do that one more time
[02:02:19]  uh you will see get all called here and you'll see the data fetch this way so so basically the whole idea with this actions feature that i've been working on is
[02:02:35]  essentially you just write function like a normal javascript function and whether it's called on the server and the client it doesn't matter and it just it abstracts that whole
[02:02:43]  detail away so if you pass into a resource like i'm doing here um essentially it just works isomorphically right um in this way you don't have to like think
[02:02:57]  too hard about writing an api this isn't like rest controllers or whatever like you essentially just write the functions you need and to kind of take this a bit further i actually
[02:03:05]  made an example where i made a a greeting component and let me do this let's add the greeting component back and the greeting component i showed a different see this was showing
[02:03:15]  the use of an action to do some data fetching right but we can also use our actions to do things like mutations or something in this case this is just a greeting function
[02:03:25]  so we wrote say hello say hello and uh what did i call i call a dollar sign here i'm honestly just trying to play with conventions here but i was like okay so
[02:03:34]  greeting say hello tom then set greeting so basically it calls basically on mount in this case i'm again this is probably you probably use a resource for most of the stuff if
[02:03:48]  you're going to do this but essentially just showing that you can use call it as a promise and then set it in a signal and see it but then you can also on
[02:03:56]  the click i called it with the value from the element and then set it on the signal so this is a really simplistic example obviously but see you saw hi tom load in
[02:04:07]  there and now if i do this and greet we should just yeah exactly right and we we see the the data come in and what it's doing is from the client side we
[02:04:25] 're actually we're actually we're actually fetching the call um but also as i mentioned before if we refresh the page on the server see in dev mode you sometimes get
[02:04:39]  fun stuff about you can see the css loading in dev mode on beat and prod it's fine but there's a flicker um in beat um you oh right it
[02:04:53] 's because it always fetches on the client because i set it to always fetch because it's on mount okay but my my point is basically you you just you just basically specify
[02:05:02]  any of these functions if you want and then you can call them both sides so it's really useful for for if you don't really want to design an api you can
[02:05:11]  just use these to bootstrap and because you know that they'll always execute on the server no matter where you call them whether if you call them the server the client
[02:05:19]  you can put your sql or your stuff straight into these functions and then just use them to see your resources or whatnot that's that's basically what the actions feature is
[02:05:27]  um yeah someone pointed out to me that this is actually something that a framework called blitz has i i wasn't aware of that i but apparently that's the thing but um
[02:05:41]  this is sort of kind of one of the features for solid start as i said this is still a little bit rough but essentially what you're seeing here is is kind of
[02:05:48]  a bootstrapped isomorphic experience where we can kind of swap in different adapters and then uh more or less kind of an authoring experience where you use file-
[02:06:03] based routing and then you know a few other extras there's a couple other features that we have coming down the pipeline some stuff we're working on around routing preloading but
[02:06:12]  essentially it's built on sold's ssr solution beat solid app router and right now solid meta though i'm debating changing it as if there's a lot of rough
[02:06:21]  edges you can see um but the the core mechanics are more or less here um and because we use beat we get a lot for free stuff like environment variables and whatnot and then
[02:06:33]  again we can just go go npm run build and this will build our actual production build here which kind of ends up here um so there's a server side and then
[02:06:48]  our assets and then you can run npm run start and then now we will have the production build yeah of course it's broken sounds about right fun times okay cool that
[02:07:05] 's that's that's that's about where solid start is um file paths reduce is not a function i'm not going to develop that right now essentially stuff's been changing
[02:07:18]  enough with beat and whatnot that uh um i would say it's still unstable but i just wanted to kind of show you guys a bit of just a taste of like how the
[02:07:30]  pieces kind of work together and what you know some of the features are honestly it's still pretty early days but i i i was doing some work on here um the project
[02:07:43]  as i said when it's worked i use that to make the uh the cloud flare demo and i've seen this one um uh this one uses streaming and whatnot and it's
[02:07:58]  pretty fast um and basically yeah anyway um we we we still got some some work to do that's that's the short of it um i don't know if anyone has
[02:08:14]  any more questions um i didn't really have a ton of other stuff here i just wanted to kind of introduce you guys to some of the ssr stuff and hopefully ask
[02:08:27]  answer any questions people have but there there there doesn't seem to be that much in the way of questions right now i honestly in terms of content i'm familiar with what
[02:08:40]  pieces are what they are but i don't know where people are trying stuff i guess most of the time it's just a matter of uh like because i haven't documented a
[02:08:52]  lot of the sr pieces i imagine people haven't really tried them that much um and some it's intentional as you can see directionally i want to get the the
[02:09:04]  html streaming in and i want to get the multiple hydration routes in and both of those are going to be really big for where solids heading to next on solid start side
[02:09:14]  we're doing more work with the router around pre-loading caching as i mentioned i mean you don't actually need that much in the way of features when you
[02:09:23]  have beat behind you honestly if we add that and you know get rid of the wrinkles around feet and showing off you know and get the build configs more solid you have a
[02:09:34]  good enough foundation to kind of do stuff i understand it's not fully features that's next but like there's just a a lot of things you get for free basically as
[02:09:42]  long as you have a good solution for for you know routing metadata data loading um you you're mostly covered for the basics but i said a lot of refinement and a lot
[02:09:56]  of like niceties we need to kind of work around the beat build so if people are interested in helping out i would definitely appreciate it i've i haven't been giving
[02:10:07]  salt start as much attention as i would like but i think there's a lot of important things that still need to be worked on as i said the stuff around ss
[02:10:16] r um i've been doing some refinement on the reactive system um recently um performance improvements um and i imagine that um that will delay my personal work on solid start but
[02:10:33]  i guess if anyone's interested please come by the discord volunteer or whatever i'm it's a bit of a mess i in well it's not that messy i mean like it
[02:10:44] 's just it could be a lot nicer and there's a lot of kind of edge cases and things that break so every i haven't really set up a lot of tests per
[02:10:53]  se so that's probably why it seems that every time like every week something new breaks without me even you know realizing it necessarily so i haven't been giving it enough focus
[02:11:06]  so yeah and and the server-side rendering needs its own documentation i i definitely agree on this um the the biggest thing is because i imagine the apis don't change but
[02:11:24]  the behavior is going to change a little bit when i add the other streaming pieces in that i don't i've been hesitant to to document it too far i know there
[02:11:32] 's a desire i know people are really interested in this stuff and it works today um it's just i know that some of the behavior will change the documentation will change um this
[02:11:44]  is just this is just kind of the piece so i my lack of documentation is semi-intentional i was really hoping to kind of just push solid on its client
[02:11:56] -side merits initially um but the world has changed a bit you know in the last couple years um you know with things like next.js and even and you you got to
[02:12:06]  respect like the quality product they've managed to put together in terms of like ironing out all those rough kit edge cases that takes a lot of work and that's that
[02:12:16] 's the piece that like we're we're missing and obviously documentation will get people on board but i think it's it's going to be like when it's ready kind of
[02:12:25]  scenario i want i really want to be able to present what i consider the the whole solution i mean we can obviously add optimizations and stuff afterwards partial hydration for me is in
[02:12:33]  that optimization category or like variations on that but i feel like finishing the streaming story and having multiple hydration roots in the client are just fundamentals for where things happening to basically support
[02:12:47]  as i said islands or these streaming solutions i think it kind of ties it up you know um yeah i don't know if anyone has any more questions a little shorter stream today
[02:13:01]  but as i said this one was based mostly on interest or whatever in terms of things i knew people want to talk about ssr so i figured i could show off
[02:13:10]  a couple things but i wasn't sure if there's any specific topics but i i think uh i think that there you know there's there's there's just so much more
[02:13:28]  and i i think that i i think maybe that's the challenge i've been writing articles about this but it a lot of there's a lot of like people not even
[02:13:36]  understanding what options are available to them and so like a lot of frameworks have kind of taken on themselves to be like oh you want a server render solution here one button press here
[02:13:48] 's the server solution and it doesn't tell the whole story but maybe that's good enough um i've been really working on the mechanics of it right i want i want
[02:13:59]  to i want to make sure that when we deliver our our service solution that it's you know top notch it's the best way to put it okay yeah i was chatting here
[02:14:10]  you know kind of rambling just in case any more questions kind of came in here over the last uh five minutes but it looks like uh we are at an end here
[02:14:19]  if there's nothing else anyone wants to ask about so i'm i'm going to end the stream today here and uh wish you all a good weekend all right see you
[02:14:32]  guys and girls