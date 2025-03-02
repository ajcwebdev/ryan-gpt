---
showLink: "https://www.youtube.com/watch?v=tcwe85p7M9c"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Petite Solid?! Let's build a Micro View Library"
description: ""
publishDate: "2022-01-08"
coverImage: "https://i.ytimg.com/vi/tcwe85p7M9c/sddefault.jpg?v=61d88837"
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

[00:00:00]  Hey. Welcome to my stream tonight. Just going to spend a moment here getting started. Sorry about the fan in the background. Been going like this the last few times.
[00:00:15]  Hopefully it's not too loud. Come say hi in the comments. Show me that you're here. I know there's a bit of a delay. We'll be getting
[00:00:27]  started here in just a minute. All right. I'm actually pretty excited about this topic here because I'm going to cover a technique that's used to render views that was
[00:00:27]  basically the go-to for the early days of JavaScript frameworks. Originally it wasn't expected that you'd be running JavaScript on the server. So it was always expected that
[00:01:10]  you'd be running some other backend in HTML and that your JavaScript would run on top of that. It was actually hydration first. So I'm pretty, I'm pretty
[00:01:24] , I'm pretty psyched about, about this, about this, this topic in general. Okay. Anyway, sorry, actually give me two, two seconds. I
[00:01:43] 'll be back in 30 seconds. Thank you. Sorry about that. My youngest had a little bit of a thing, so he wanted a good night hug. Thank
[00:02:42]  you all for joining the stream. We can get started here pretty quick. As usual, I'm going to start talking a little bit about This Week in JavaScript first.
[00:02:53]  It's been a few weeks. We've been off since, I guess, it's been three weeks since we've lasted the stream. And you'd think that we'd
[00:03:02]  have a lot of stuff to talk about there. But honestly, I've been really heads down working on a lot of the work around the new solid release. That
[00:03:14] 's been a big part and I'll talk about that in a minute, but a few things did catch my eye over the last week here since we came back. It was
[00:03:23]  kind of funny. I don't know if you saw this Twitter post that was going around about five topics you can talk about for 30 minutes without any preparation, which instantly made
[00:03:32]  me think of this stream. Because generally, I'm always throwing stuff together last minute, but it's cool if you were part of this thread. It's really interesting
[00:03:41] . A lot of people have a lot of interesting interests, and I thought it was actually really cool. A lot of people were participating in it. The other big one
[00:03:50]  for me was we had an interesting discussion with Ryan Florence from Remix about streaming. And streaming has kind of been a hot topic because of React 18 coming out with streaming and
[00:04:03]  obviously Solid's release that came out this week also has streaming. And he brought out an interesting point, which was that he said, the more experiment with streaming, the
[00:04:16]  initial document, the more it seemed only useful for the following case. When the user has a fast network and the server is slow at preparing that response. Better invest in making
[00:04:27]  your server fast. And in some ways, he's not wrong. Like, it's the latency to your data that's going to make streaming more apparent, right?
[00:04:39]  The whole trick to streaming is the faster you can get the static content to the person and how much that differs from the data, that's the more beneficial it's going to
[00:04:49]  be. So I agree with him on that side. What I was trying to say in this discussion here was that it always just falls back to the original rendering method,
[00:05:02]  right? Like, if you have a slow network, it's not going to be any worse because you're streaming, right? But you know, he brought up the trade
[00:05:12] off. The problem with streaming is we have to respond with the headers when we send that first chunk. So if we start streaming the response before we load all the as
[00:05:21] ync data, we have to say that it's, like, 200, even if something might error later. And this causes a lot of -- it makes things a lot trick
[00:05:30] ier, right? This is the big tradeoff. You might be getting, you know, certain parts of the content sooner, but you're not necessarily going to, you
[00:05:41]  know, know everything up front. But Remix has been built off this concept of, like, fetching all the data up front, knowing what you need based off
[00:05:50]  the nested routing, which I think is really, really, really smart. Oh, hi. I have a bunch more people saying hi in the chat. So many.
[00:06:04]  But essentially, where I was getting at is there is a lot of complication here, but I think there's a lot of potential here. And most of that comes
[00:06:14]  in that there's lots of different types of experiences. And I guess what I'm saying is the more we move towards patterns that enforce less JavaScript, things like partial hydration,
[00:06:25]  things like -- oh, I see. Cool. Thanks, Leo. More like we approach things like partial hydration, more like we approach things, you know, React server
[00:06:40]  components, streaming starts looking more beneficial, right? Because the more you can push those interactive parts into, like, islands and things down and have separate pieces coming in, the
[00:06:50]  more you're going to notice the difference. I made kind of a comment about, you know, I don't know, if you go to the edge, aren't
[00:06:58]  you more likely to have faster static response times and slower data response times? Like, and sometimes you're not always in control of your backend. Like, sometimes requests take
[00:07:10]  different lanes. Sometimes you're using third party APIs. So, essentially, streaming is just kind of this great equalizer in that it makes the worst case better. You
[00:07:21]  know, and I put up an example and whatnot. And, you know, this is kind of an interesting kind of point in general, though, because it isn't just
[00:07:33]  like a straight win. My examples are kind of terrible, I show a loading state for, like, 100 milliseconds and everyone knows that a quick loading state isn't the
[00:07:41]  best user experience. So, you know, it does take a little bit of consideration that, you know, these demos that we've been seeing from streaming so far, like
[00:07:50]  the React one, haven't really. So, you know, you're going to have, you know, mostly unchanged content, right? And my final kind of conclusion
[00:08:14]  or thoughts on this topic of streaming from this thread was that, basically, streaming is beneficial when you have higher data latency. When you have multiple data dependencies with different response
[00:08:27]  times, you know, that related, like suspense boundaries, and when things like the shell, like the static part, make a greater percentage of the page and contains other types
[00:08:39]  of assets like images. Because in theory, you know, if you can start loading those images sooner, you're not only, like, kind of progressively loading the page in
[00:08:49]  front of the user, you're going to actually make the total response time of the whole page. faster. It's not just, it's just not, it's
[00:08:55]  not just the pieces that you can load in sooner. It actually affects the whole load time. And truthfully, we're probably leaning on the browsers a little bit hard for
[00:09:04]  this because, you know, as I kind of followed, you know, thinking about kind of characteristics, a lot of the SPA framework apps we have today might not benefit
[00:09:14]  from this as much as, you know, islands architecture or MPAs. But I think with, you know, things like React server components, the question, you
[00:09:21]  know, of where this value comes changes. It's really hard to see today, because we haven't seen very many implementations like that. One final comment from Ryan
[00:09:29]  Florence that I thought was really kind of interesting was he, he said he, he basically showed the difference between streaming and not streaming and keep in mind, this is a remix
[00:09:39]  app. So there's like a ton of script files. I don't know why, why it built up this way, but let's see if I can get on the
[00:09:44]  screen. It's still pretty small. You know, he's got a whole bunch of scripts. What he's showing was with async where he waited the whole time
[00:09:53]  and then loaded the resources versus with streaming where you can see that the resources start loading while the page is loading. The total response time was basically the same. And the
[00:10:06]  funny thing you're noticing here is these resources are actually taking longer to come in in this version than in this version. Like that you can see that they're actually visibly
[00:10:17]  shorter. They spend less time waiting. So some of this might just come down to the way the browser schedules multiple parallelized requests. It might be out of our control
[00:10:26] . Right. So as much as this. Right. Like as much as like in theory, this should be good, I, we might be still hitting cases where, you
[00:10:41]  know, this platform itself isn't set up to leverage it as well as it should be like, it's hard to understand why the total load time is the same in these
[00:10:52]  two examples. Cause as I said, look here, they're clearly starting earlier and like, it's a, it's, it is, it is a bit better
[00:10:59] . You can tell that it's a bit better, but you know, not as beneficial as you, as you'd think. So I think we need to keep our eye
[00:11:06]  on it and where the benefits are and see how the future progression of how we build apps affects how we actually, um, how beneficial this is. I think the other
[00:11:17]  side of the argument is, um, if you guys haven't heard of it, there's HP status 103, um, which lets you respond early to requests with resources to
[00:11:24]  preload. That might be a big changer for this graph, because then this graph could start also loading assets before this finishes sending. Um, and in that case,
[00:11:35]  you know, maybe that's enough. The benefit of streaming comes in more. So when you have other types of assets, not just the, these JavaScript assets coming in,
[00:11:44]  but you, it actually benefits you to render parts of the page sooner. And, you know, different data lanes. So yeah, I mean, there's trade-
[00:11:51] offs and I, I, I'm most excited that I think this is an area where there's a lot of expert exploration, um, possible. HP two for the wind
[00:12:03] . Yeah. I mean, yeah, there's been a lot, a lot of good benefits made to, to the biggest, the biggest unfortunate part was that the push didn
[00:12:12] 't end up solving our problems as much as we'd like. Uh, they did some smart stuff with the purple architecture from Google, um, in terms of kind of
[00:12:20]  a shell app architecture. It's funny though. Everyone was talking about it in 2017, 2018, and then it just disappeared. I don't know what happened or why people
[00:12:29]  stopped talking about it. Even, even Google stopped talking about it as much, but like polymer kind of pioneered this, this approach that really took advantage of push and whatnot
[00:12:39] . It still had this problem that it didn't know what to invalidate and what not to send. Like there, it wasn't perfect. Um, and I guess
[00:12:47]  maybe that's why it fell away to the wayside. But, um, I, I think that, I think that they are aware of this, you know, the
[00:12:54]  browser vendors and they are working stuff. I think early hints is going to be a game changer. And maybe in the end, streaming's role in this whole picture is much
[00:13:04]  more subtle. Like maybe, maybe it isn't about like just streaming everything as soon as possible. Maybe, you know, if we have granular control over the resources and
[00:13:14]  data sources we have in our app, maybe we selectively decide, you know, at what point we want to stream stuff. Um, and, you know, kind
[00:13:22]  of certain things caught the stream to wait and other things don't. I think maybe it gets that level of control. That seems like something pretty complicated and something you maybe you
[00:13:32]  wouldn't want to manually figure out yourself, but, you know, that's why framework designs and stuff are coming in here. You know, do experiments, find ways
[00:13:40]  to make this usable. Um, you know, this is a complicated area. There are benefits, but, um, maybe it'll take us a while to figure out how
[00:13:47]  to leverage them. That's me speaking optimistically. Realistically, this technology has been around since 1997. So you've got to ask yourself why more people aren't using
[00:13:54] , uh, streaming. Um, and because like, you know, it's been available. It's been, it's been called the lost art so many times I've
[00:14:03]  lost count. I pulled it up once. There's a Brian. Was it Brian Atwood? I'm trying to remember. Jeff Atwood. Yeah. Article for
[00:14:11]  2005, where he was already calling a lost art. And then, you know, when Facebook released big pipe in 2008 or nine, they were still like, oh yeah,
[00:14:18]  no one's doing this anymore. And same thing with Marco in 2014. And then, you know, react in 2022, you know, we keep on going back to this
[00:14:28] . It's just, I, at a certain point, we, we want to push the ability of what we can do with performance. And maybe, maybe it's
[00:14:34] , you know, architectural shifts that have this get away from us every time. Um, but I think we're on the precipice of another architectural shift in front end.
[00:14:45]  And I, I don't know. I, I think it's going to be interesting to see if streaming plays a part of it. Um, some bigger players, bigger
[00:14:52]  companies, people with, you know, maybe different needs than the average developer think it's important and have been investing in it. So probably something to take notice of.
[00:15:00]  Yeah. Yeah. Definitely. I was going to say that's a good, good point. Hmm. Ajax. What came out in 2005. And yeah, I mean
[00:15:12] , I think the problem back then was we just didn't have good tools to use. I remember using Ajax and like.net update panels, which is horrific experience
[00:15:26] . jQuery came in and wrapped it. Um, and you know, like, it, I think at that time we just didn't have an ecosystem. It was
[00:15:36]  like the most amazing thing that ever happened to JavaScript. And then, um, like we weren't there ready to, to pick it up when it came in. Um
[00:15:44] , it took well into 2008 or nine for the first JavaScript frameworks to come out. And, uh, you know, part of that too, was the browsers at the time
[00:15:57] . You got to remember JavaScript was like slow, like really slow back in the day. And it wasn't until 2007, 2008, suddenly all these browsers like really invested
[00:16:05]  in it. You know, um, Chrome came out, uh, what web kit. Uh, I remember what Mozilla engine was out at that time, but essentially around
[00:16:15]  2000, 2008, suddenly everyone started investing in their JavaScript engines. And they all got like 10 times faster at the same time node came out. Um, it was just,
[00:16:22]  it was so fast that no one was already in the space. It was, it was kind of funny. Um, I, as I said, I, I was,
[00:16:28]  I, I jumped on there, but I was like. working in.net and backend stuff at the time. So, you know, it, it was, it
[00:16:34]  was definitely a different time, but what's cool about that whole thing is that different time is basically, um, sort of where, where I'm thinking of tying into what
[00:16:46]  we were, you know, talking about today, really. Um, because, you know, I, I'm going to do a little bit of a, what should I
[00:16:54]  call it? History lesson, um, for a second, kind of, as I talk. Um, I'm going to say, but let's, let's just
[00:17:03]  open a, uh, co actually, before we, before we do this history lesson, sorry, I'm, I'm getting ahead of myself a bit. Let's,
[00:17:09]  let's first just talk about today. We're going to, we're going to look at, um, what I was saying, uh, building something similar to petite view
[00:17:17]  or Alpine. And if you guys aren't familiar with that, um, I've let's take a moment and just kind of look and I'll show you what
[00:17:24]  I'm talking about. Cause Alpine JS and petite view. Use a technique that was very prevalent in 2010, 2009 period frameworks. And I think that's what makes this
[00:17:34]  kind of interesting. cause we'll be able to kind of do, I I'm going to use this an exact, as an, uh, a chance to basically do
[00:17:42]  a bit of a history lesson while we kind of go through this. Um, streaming assistance, 1994. Yeah. I, I wonder if you could control it as far
[00:17:52]  as I know, um, 1997 chunked encoding, uh, HTTP 1.1 was, is officially the, the beginning of when people, uh, like were doing stuff
[00:18:04]  with it. It was HTTP 1.1. Um, anyways, back to Alpine, uh, essentially, uh, and I can blow this up a bit. Sorry
[00:18:12]  for a wrong window. Um, what Alpine is, is you server render this or use a static HTML page and you maybe put a script tag on your page and
[00:18:20]  then you write your template right in your HTML. And as the document loads with the JavaScript, it, it basically hydrates this template, but this is a little bit different
[00:18:33]  than, uh, hydration or server side templates. Um, in that essentially in those, what you're seeing is the final realized version of, of your app generally with
[00:18:50] , with, with, with those kinds of templates where this is really sort of a client rendering technique. It does augment content per se, but, but what, what,
[00:18:58]  what you, what you're doing here is actually writing the bindings. Like the expressions into the HTML and then, and client rendering them. It was just really common
[00:19:09] , you know, to have a rails backend or PHP backend and you want JavaScript to do dynamic stuff. Um, but you know, it, it was, you were kind
[00:19:20]  of limited by, by the tools, like people hadn't even really thought about doing much in the way of like, like the whole, like modern, like isomorphic
[00:19:28] . Wasn't a thing back then. So you had two options. You, you basically, um, you know, we're dumping strings into HTML, like inner HTML
[00:19:37] ing it, or, um, this was like basically the first chance of being able to do something declarative with it. Yeah, this is, this is a good
[00:19:46]  point actually. Um, you can't really have reusable components in Alpine. Um, it's a, it's a slightly different model. I think you can, you
[00:19:56]  could kind of force it, but it's not really the, the default, uh, position. And I'll, I'll see if I can explain that a bit
[00:20:04]  later. Cause, um, I use knockout JS, um, for years and knockout JS works exactly like Alpine and petite view. See if I can find petite
[00:20:15]  view here. Um, here it is. Petite view. Petite view is, is basically the same sort of thing. Um, yeah, here's an example
[00:20:24] , right? Script tag and then scope. And then. You bind account and account plus some people call these progressive enhancement. But if you think about it, these frameworks don
[00:20:36] 't work if you don't have JavaScript on the page. Like, I don't know if that's someone's like whose definition of progressive enhancement that is, but this isn
[00:20:45] 't progressive enhancement because it. You're, this isn't like the page you render in HTML is actually workable. This needs JavaScript still to actually render anything. But
[00:20:55]  as a very popular with like the PHP Laravel crowd, um, who, you know, don't need a JavaScript on the backend. And then they can kind of like
[00:21:03]  use these frameworks for like the more interactive components on their page. Um, so this, this, as I said, made a comeback with Alpine and Alpine is,
[00:21:14]  is pretty popular framework here. You know, um, what is, let's see almost 20,000 stars on GitHub. Um, basically kind of reinventing your,
[00:21:25]  the pattern that we were using back in like knockout in 2010. Um, and, and whatnot. And if you're, if you're wondering why this approach kind of
[00:21:35]  went away, uh, you know, the way that the Dodo bird, so to speak. Um, that was because, um, essentially the performance of going through
[00:21:50]  and, um, kind of parsing the Dom nodes. Wasn't, wasn't, uh, sorry. Framework wasn't actually great. Um, it's to
[00:22:03]  be fair. I've definitely, when I was first working on solid before I went to JSX. Um, I, I did, um, managed to get okay performance
[00:22:15]  out of this approach, but just to, if you, if you want an idea of, of where frameworks like this sit. Um, here's Alpine over here
[00:22:24] , right at like the end of the list and here's knockout right over here. And I can't remember if reactive uses this approach too. Um, but you know
[00:22:36] , view supports this approach, but that's not generally how they're going to be doing their templates when you enter the benchmark. But this approach is definitely on like the
[00:22:45]  blazer side of the table, not on the, you know, well, solid side of the table. So, um, essentially just, just to kind of get a
[00:22:56]  perspective of why we moved away from it. Even with server rendering, you know, when we have full control, we can do a lot more with our compilers and
[00:23:03]  our tooling in the JavaScript side. So slowly by slowly most frameworks stopped supporting this. Um, and over time, um, it actually became a niche enough that Alpine
[00:23:16]  JS came out like way after the fact and kind of brought this back. back, but to be fair, people still, um, uh, people, people, uh
[00:23:30] , still ended up, um, having this need. So I still get asked about this, you know, weekly perhaps. So yeah, that's, that's, that
[00:23:38] 's, that's kind of my introduction. I don't know if anyone has any questions about these, uh, frameworks and as mentioned here, there there's, there
[00:23:45] 's some, some mechanisms to make this experience nicer. Yeah. I think that's a pretty powerful one. Cause we're going to see as we kind of go ahead and
[00:23:58]  build this that like, we, we have to do a few little tricks here to make our experience nice. So, um, yeah, let's, let's,
[00:24:07]  let's, let's, uh, sorry. I don't know why there's a solid hacker news demo in the middle of this whole thing. Um, let's,
[00:24:14]  let's just start building stuff. Um, I think it's funny. It's funny. I, I got through the whole intro without actually one last interruption before
[00:24:23]  we get into building stuff. There, there was a couple other things that happened this week. Um, more specific, um, to, oh, thank you, Jacob.
[00:24:34]  Um, more specific to obviously my, my neck of the woods, which is solid JS had a couple of big announcements. So I'll just repeat them here in case
[00:24:45]  you hadn't seen them. Uh, that was interesting. Um, where are we going here? All right. First of all, that's, that was a promoted ad
[00:24:56] . Interesting. Uh, solid hack, uh, was announced this week and it's a hackathon. It's a long run hackathon. It's going to go over
[00:25:06]  the next three months, uh, $12,000 in prizes that we raised from sponsors. There's basically three different categories and we're just hoping to kind of energ
[00:25:15] ize people building solid projects and checking it out. Um, so really excited about that one. And the other big one is we released 1.3, um, this week
[00:25:26] , which, um, has HTML streaming. Like I've been talking about, it has some, some cool tricks with error boundaries to work with streaming and, uh, on
[00:25:34]  the server. Um, better support for things like Astro with multiple async hydration routes and some really cool stuff with, uh, third party, uh, reactivity
[00:25:44]  without wrappers. Like being able to use mob backs directly in your solid views. Really cool stuff. Someone actually made a meteor tracker today. And he was just saying like
[00:25:51] , he was so stoked. He was like, this is this, he's like this, this could just replace the default templating for meteor. It's so much
[00:25:58]  nicer to use than something like react for this because meteor is all reactive and it just feels like it's a native solution. So I'm really happy that this one went through
[00:26:05] . Okay. So that's, that's, that's enough solid news unless all the rest of this is, I mean, big shout out to Alexis. Every other
[00:26:13]  tweet here is probably him, uh, showing us a new ecosystem library. He made what we got MDX support, um, error overlays, new version of the Bab
[00:26:23] el labels plugin. Definitely check out his work if you get a chance. It's crazy. Yeah. Honestly, I would Theo. I actually don't know how to
[00:26:34]  do that from within my interface in, in here. Um, cause I'm just in stream yard. You're going to help me get a better streaming set up soon.
[00:26:42]  Um, this is, this is like the, the most, I don't know what the term ghetto. Maybe that's not politically correct to say anymore version of, of
[00:26:50] , of streaming that we can do here. So you're going to help me. Um, we'll, we'll figure that out. Uh, anyways, without much
[00:26:59]  further ado, I'm just going to throw a quick banner up here so that I can, uh, so I can edit it later. Let's build. Right. Let
[00:27:11] 's, let's, let's, let's, let's do something. Thank you. All right. So I'm just gonna do this in code sandbox. Why
[00:27:23]  not? Anyone having a problem with that? Let's, let's, let's just, uh, create a new vanilla code sandbox and commandeer it for our purposes
[00:27:32] . Styling. Uh, yeah, we don't need styling. Um, yeah. So what we have a script tag with the index and the app. Okay. That
[00:27:40] , that looks beautiful. And then, all right, here you go. So history lesson number one, this is the, this is, this is how I used to
[00:27:47]  make JavaScript frameworks. No, just talking to inner HTML. No, um, essentially what we're going to do here, I think is we're going to, let me
[00:27:56]  make my screen a little bit bigger so you can see what I'm doing. And what I want to do is I'm going to load a couple packages in here.
[00:28:06]  We're going to load solid JS. Cause we're going to use solid JS is, um, as a reactive system here. And we're going to load another library.
[00:28:15]  This one's actually one of the, an older library that, um, I know because I used this back in 2015 or 16 or whatever, when I was doing stuff
[00:28:23]  before I got into JSX, basically riot. I don't know if you heard the riot framework. It's, uh, it was really cutting edge in terms of single
[00:28:30]  file components back around the same time view came out and, um, they, they made a, they exported their templating language. And that's, that's where
[00:28:39]  we're going to start here. Um, cause you can use stuff like mustache or low dash. And if you look, well, if you look at stuff, even like
[00:28:48]  felt or whatever, you still see, you know, basically handlebars or mustache like templates. And this, this is, this is kind of the baseline for building any of
[00:28:57]  these, uh, tools to build something like petite view. You need three pieces. You need a reactive system. You need a templating expression. JavaScript expression parser
[00:29:09] , and you need to have your Walker that, um, walks the live Dom tree nodes and actually does the work to update and keeps everything in sync. So, um,
[00:29:21]  we're going to focus on the third, one of those, um, because we have the reactive system with, with solid. And one of these two kilobyte libraries
[00:29:29] , we can just pick up off the shelf and it'll do the trick for us. Um, so yeah, let's, let's just, let's see if
[00:29:35]  we can pull that in and get that working. And I, I'm going to, I apologize ahead of time. Cause I'm not as usual, not the most prepared
[00:29:45]  here. I am familiar with this library and it's, um, and it's like, uh, riot riot. I haven't even, I haven't even imported
[00:29:56]  it yet. That's why. Um, and it's API, but essentially let's, let's see if we can get it. Some simple example showing how this
[00:30:06]  works. Cause it's just like a console log. Um, and then we go temple and we'll, we pass it in some kind of expression string with, you know
[00:30:18] , like high and then name. And then the second argument is, it's going to be an object with what we want to set. We go high, um,
[00:30:34]  and if all went right well here, our, our templating language turned our high name into high Joe here. So nothing too special here. And this is going to
[00:30:49]  be kind of the, like the baseline, what we're going to use here to, to build this out. So the, I mean, the first thing we might want
[00:30:59]  to try here is let's just import, um, create signal from solid JS. And just kind of see, let's go name, set name, see if we
[00:31:15]  can make this resemble something. This is, this is the thing I love about reactivity points of the name was Joe. Um, is that you don't need anything else
[00:31:28] , you know, to do it. Right. Yeah. It's still, we're still high Joe. And what, what if I set, I set the name
[00:31:43]  now to Jack. Does this work? No, because we didn't call temple again. So what we need is create render effect. Um, which is a solid print
[00:31:58]  primitive. It's like an effect. I'm just using render effect because it's basically. For rendering. Um, just the way it executes. I'm not gonna
[00:32:09]  worry too much about that. So yeah. Beautiful. Hi Joe. Hi Jack. Um, probably unsurprising to a lot of people. Um, but this,
[00:32:18]  this, this should be kind of the basis of what we're doing here. Right. We're, we're just going to take some template and then we're gonna take
[00:32:28]  the reactive system and have it create effects around, you know, something like this, but we need to do a little bit more. So where to, where to next
[00:32:39] , right? Okay. So we're updating text and in the most basic thing. And you could almost say the way like something like backbone used to work in the day would
[00:32:51]  be instead of console logging this. They would have probably just done something like, um, element dot inner HTML equals this essentially. And if we're luck, let's
[00:33:06] , let's, let's, let's see here. Const L equals document dot get element by ID app. I think, I think we have, um, yeah,
[00:33:21]  we've app. Yeah. Oh, I mean, I'm already seeing it here. Essentially. Okay. Yeah. I mean, this happens so fast. Let's
[00:33:31] , let's, let's set a timeout so we can actually get a feel for this change. Um, make it one second. Okay. So there we go.
[00:33:45]  Hi, Joe. Hi, Jack. I mean, yes. If you go in the console, it's complaining at me. Um, best kept secret. I
[00:34:04]  don't like telling people this because well, it's, it's not good because bad stuff can happen. You can create stuff outside of a reactive route. It just will
[00:34:15]  never get cleaned up. And in this case, I don't care that much. Illustrated works. This render effect will never go away, but in our case,
[00:34:23]  that's, that's fine. But yes. So here we go. Hi, hi, Joe. Hi, Jack. Yeah. Yeah. Yeah. Yeah. I
[00:34:33]  mean, but that, and that, that's, that's where these things kind of started from. That's what I'm saying. This is kind of full circle.
[00:34:40]  When people see solid, I like it should, it's, it's basically from a time period before react and view to, to a certain degree, you are correct before
[00:34:54]  1.3, but in 1.3, I changed it. So now with a normal effect, this does work. I did some kind of hacky scheduling thing
[00:35:04] . So it does work now because it was confusing people. Again, I, I, I, I'm pretty, I'm going to move on for this for a moment
[00:35:13] , but okay. So now we're, we're rendering. And in a sense, we, this, this is 2009. We just, we, we just recreated
[00:35:21]  backbone essentially. I mean, they, they use their models to do it, but essentially this, this is, this is, you'd make a view. And you
[00:35:27]  picture whatever your view was. And whenever it changed, we would replace it. Like, you know, let's, let's, let's, let's, let's
[00:35:33]  do, let's do this. Right. H1. Like this, this, this is the first, this is the first version of JavaScript frameworks. Um, this
[00:35:46]  is also kind of really terrible too, because essentially you're recreating this H1 and reinserting it every time through this inner HTML. Um, you can be a little
[00:36:00]  bit smarter than this, which is like the very first time actually with this approach, you can't be smarter. This approach is just dumb. So, you know,
[00:36:10]  we're going to move on from this. So what the thing is in a sense, this approach is kind of still alive today because things went two different ways. Um,
[00:36:22]  one way is like the fine grain reactive way, which is, I'm going to show you today and where things went first. But the other way was, okay,
[00:36:30]  instead of making real dom notes here, let's make fake dom notes or, you know, like create some kind of virtualized system and then have it set. And in
[00:36:40]  a sense, those two directions basically spawned or split off from this initial starting point. Um, because at this point we were just redoing everything. And one group was
[00:36:52]  like, let's just focus on name. And the other group was like, let's make this not expensive. They just took two D separating paths at that, the
[00:37:01]  early, the early days of JavaScript frameworks. So like, like even today to a degree, like how far is this from, um, like a lit, like, uh
[00:37:16] , you know, like using a tag template literal, like doing like HTML. Like, like, you know, you, you've probably all seen this, you know
[00:37:28] , how, how far, how far is that from, from the. Um, sorry, HTML is not defined, but you, there's one huge difference though, between
[00:37:43]  lit and this approach and why, um, most fine grained libraries don't use this approach. It's because with, with lit, these holes, you don't
[00:37:54]  have access to it. It was like what I was just saying a moment ago, the, the fine grained people focused on the holes and the like V dom top down
[00:38:02]  people focused on like, you know, like making this part cheap, making the, the part that wasn't the whole street, because the difference. Um, is,
[00:38:11]  is this, see how I'm calling name here and it's working. What if I called name here. It's still working. That, that is sort of the different
[00:38:25]  mentality here, because, um, when you have something like lit, you don't get to analyze or look at the holes. When you have a string template, you
[00:38:35]  do so here, we can actually clean up our code of it and pass name indirectly and have the template color signal. So, okay, let's what's our next
[00:38:46]  step from here. Cause obviously, uh, we didn't come here to build backbone. Well, templating is still going to be the center of this, but now
[00:38:59]  we want to put our template in our HTML. We want it in here. So stuff's gonna be broken for a little bit, but let's, let's move our
[00:39:11]  template into here. Right. That that's, that's what we're really after. And right now, since our inner HTML, well, actually you can see it
[00:39:22]  for a second. See, isn't that lovely? Um, but yeah, essentially this is, this is the direction we're going. We want, we want our template
[00:39:32]  to be in our, um, HTML. We're gonna build out our template over here. So now we need to kind of re-examine this. So we have
[00:39:40]  our mount element. Um, I'm just gonna call them out here and have a reactive system. Uh, yeah, that's fine. We have our, I'm
[00:39:50]  just calm this up for a second. We have a reactive system. We have our templating language and now we need to get our kind of Dom tree walker going.
[00:40:01]  So, um, what I'm going to do is I'm going to start this building. Let's just start building something up here. We're going to need like a
[00:40:08]  render method and a render method is going to take, um, probably our amount element. And it's going to take, let me call it context. The system is
[00:40:21]  all built off this kind of idea of context. Uh, as, uh, it was mentioned earlier, you don't really have a component system in here. And it's
[00:40:28]  sort of true because your data is, this is very like old school MVC or MVVM where your data is like its own tree that you pass in top level.
[00:40:40]  So if you had components and pieces, they kind of need to all come in through, through your app. And then your views all are all kind of being rendered
[00:40:49]  from your, your template, your, for HTML. So there are different contexts, you know, different kind of conceptual components and reusable pieces, but essentially they all have to
[00:41:01]  be wired in top level. So, um, yeah, let's, let's do that. And what, what's our render method going to do? It's
[00:41:09]  going to probably, um, create a route, right? It's a solid app and it's going to, let's see what else we're going to do here.
[00:41:21]  We're going to need to, let's see. Yeah, we're going to, we're going to need to create, um, a walker essentially. We
[00:41:34] 're going to need to create a way of, um, kind of like walking through our, walking through our, our DOM. So, um, let's, let
[00:41:43] 's, let's first resolve our thing. Actually, I'm going to, I'm going to call this maybe data for now, because I'm going to use context throughout
[00:41:51] . And, um, let's define our context as, um, it's kind of like that. So the, the signature of render is going to basically take a function
[00:42:06] , kind of like solids, normal render function. Um, I, I guess I, I've reversed the order of these. Maybe this is more natural, um,
[00:42:16]  for people used to kind of solid or react kind of put them out in a second. And then we're going to need a walk function. We could use tree walker
[00:42:23] , but I'm not going to bother where we have our mount element and our data context, essentially. Um, so that, and, and the basic idea for this walk
[00:42:32] er is going to probably pretty simple. It's, it's, it's essentially going to, let's see here. We need to get our element and our context
[00:42:42]  and we need to kind of, yeah, the mount elements, the initial one. So let's see here. We can basically just walk to the children. Right? So
[00:42:51]  we could be like, let, we could maybe make a next equals element dot first child, maybe. And then be like, wow. Next. Let's. I
[00:43:02]  don't know. Maybe next equals walk. Think of how we do this. Yeah. L context. Oh, I'm, I'm missing something. Or. Cause you
[00:43:10]  want to walk into the children first or L or. Or. Don't mind me. I just, I'm just going to think about this. Yeah. Next context
[00:43:16]  or next dot next sibling. What we're, what we're just doing is a very simple tree walk. That's depth first. So we go into the child and
[00:43:23]  then we see if it has a child and we. don't mind me i just i'm just gonna think about this yeah next context or next dot next sibling what we
[00:43:37] 're what we're just doing is a very simple tree walk that's depth first so we go into the the child and then we see if it has a child and we and
[00:43:48]  if it doesn't have a child then we we move on to the next sibling we just kind of walk all the way through the tree so um let's clear our console
[00:43:57]  here for a second and let's maybe if we console log every let's let's just console log every element here to make sure that what we're doing makes sense right we
[00:44:09] 're not we're not even calling this yet what's our mount point here um let's go um we'll do it here let's go render name we'll just do
[00:44:24]  that for now or it's a function okay that looks probably good right our root element then a text element then our h1 element and then a text element and another text
[00:44:56]  element okay so essentially um yeah see this text element is the text inside and then this last text element is the on the outside so essentially we have if we're looking at
[00:45:09]  our index html it's because i there's a text element here for like the new line there's this the text inside and then the text here we're the
[00:45:18]  new line so um our very basic walker appears to be working um all right let's let's kind of continue along this path here um okay so that's good what we
[00:45:36]  need to do next i think is we need to do some work other than console logging here so let's um um let's let's figure out i think it's going
[00:45:47]  to be the work's going to be in here technically so let's just make like a process node maybe let's call it my problem for like making this the stuff out
[00:46:00]  before i make the stubs so and then we'll press next and context the whole thing here is about passing the context over and over again so um we have a render function
[00:46:09]  we have our walk okay and then we have a process node so function process node l context okay so what are we going to do in process node well we're going to
[00:46:25]  first thing we want to know is what kind of element we're dealing with i think so we're going to go like um once type equals l dot node type this is and
[00:46:39]  basically depending on if it's a text node or uh other code an element we can do different stuff so we're going to do like if type equals one which is an
[00:46:51]  element and do something else if type equals three um so the sandbox is probably not going to play nice with anything this is a text node so right now we're just focusing
[00:47:17]  on the text node though so i don't i don't think it probably matters too much so yeah okay uh it's not airing anymore is it let's see here sorry
[00:47:27]  am i am i liking for you for you all um how is my internet connection is it oh i see what's going on i wonder if i can change international while on stream
[00:47:40]  without it uh without it all dying on me um because i'm on my 2g 2.4 g network not on my 5g network all right should i risk it
[00:47:58]  or should we just keep on going i'm like i'm like i'm like i'm in the furthest part of my house yeah i'm at the furthest part
[00:48:13]  of my house from the network it's just because that's where the kids where they where they where they with where my uh my kids sleep so okay let's hope this is
[00:48:24]  okay yeah yeah theo that was me switching the the network to 5g 5g has worse um what do you call it um distance though yeah i did switch and it didn
[00:48:46] 't kill the stream but it did blow up for a second and i think that's what you guys just saw sweet okay so let's let's continue with this example um
[00:48:58]  all right text node so this is if we get a text node now what can we do here well i think the first thing we need to do is um kind of let's
[00:49:10]  see here i i think temple if i remember template they have a nice helper here for us let me see if i can find it best way to learn the docs is go
[00:49:26]  to the tests right they have two extra helpers that i think are help going to help us here the one i'm looking for is like a has key or something or is
[00:49:38]  is expression a second threat expression sorry just bear with me here it's been a while um i'm pretty sure we'll find it when we're looking for here in the
[00:49:56]  tests okay okay loop keys this is this we'll need that later has expression okay has expression temple dot has expression okay cool that's what we want okay so what we're
[00:50:11]  going to do is like if temple dot has expression and for now i'm just going to assume that like it's going to be reactive you know um we can we can basically
[00:50:26]  well let's just not enter html anymore but we can we should be able to just uh do something very similar to this right create render effect and have it go
[00:50:40]  like um l dot this is not going to be a text node so we can go l dot data equals and then this will be context and then this will be the the
[00:51:00]  data right so um let's let's let's let's let's let's let's let's we need to get the data first i think so all right let's go
[00:51:11]  next dot data or sorry l dot data so if it and then what we want to do is we want to store the template see the the thing is this template we need to
[00:51:24]  reuse over and over again as it updates so we actually want to like store like the i can't use template let's just call it text from the original text from the
[00:51:33]  data because this this this will be the our our original like handlebar text thing right and then what we want to do is we want to pass that text into here and that
[00:51:44]  way we can reuse the template over and over again okay so what did i do wrong unknown tag name is not a function interesting oh this is this is like uh this is like
[00:52:09]  uh this is like javas i should there we go there we go um arrow function thinks this is a function parameter is not passing an object you know that whole thing but
[00:52:26]  okay sorry that kind of defeated our big moment here uh we we did it well wait see now our template is not nowhere to be found here and it is it is right
[00:52:41]  here so high name except we have this lovely high name before we do joe jack yes some great comments here thank you um uh you're right the way i did the
[00:52:58]  walk was so they return next lucky there's only one element right now so yeah let's just uh let's let's let's just fix that up a bit um so
[00:53:08]  walk needs to return next um whatever is the final well yes let's see here what am i missing here because it's going to go next yeah it's not next
[00:53:33]  though that it it needs to return yeah that's actually a good point we need to think about this for a second because the problem is it's going to keep on going until
[00:53:46]  it's exhausted itself through all its children so when it comes when the only time we need it is actually when it goes into the first child which means that's the only
[00:53:56]  time we need to actually actually return um that first child yeah that's actually that's that's actually interesting because it's actually it's it's it's actually um i
[00:54:19] 'm just going to hack this for a minute um and we'll just worry about this later but essentially it's it's it's actually actually no it's not first it's
[00:54:33]  actually the last sibling that it wants huh yeah this loops wrong because essentially we we want the last value before it becomes null right because once it's null um essentially we're gonna
[00:54:50]  we're gonna we're gonna have a an issue here um so this this is this that that's actually a very good point um the funny thing is nothing's breaking yet
[00:55:20]  so part of me wants to continue until we actually break something but uh essentially it's almost like we want yeah it's almost like we want one more temporary variable um
[00:55:42]  like like like this essentially um and then essentially and then more like when we start the next loop we set current to next there's probably a nicer way of doing this which
[00:56:08]  means i technically don't even i just need to let current um but and then so basically like this and then if it if it returns null null and then it'll
[00:56:43]  null itself out and okay let's let's leave it at this for now i think this is essentially are there did i just break it no yeah here we go okay so
[00:56:52]  the first thing you're gonna notice right here is this is ugly like what the hell is this right and this is what they all used to do they all used to flicker
[00:57:00]  really really terribly um because you your server would render the template and you would see that template um so we actually get so we're like um we're gonna do something funny
[00:57:19]  here and render it i mean it's just silly here but we're gonna we're gonna go we're just gonna we're just for now we're just gonna go style equals
[00:57:26]  there's other ways to do this but we're just gonna go display none and then in our render function we're going to take the mount element style equals their default i
[00:57:52]  don't know let's just do block for a second and make sure i'm not insane okay there we go beautiful got rid of showing the template and i can probably do
[00:58:01]  this at the end there we go so that cleans it up a little bit hi joe hi jack okay so we we have our first thing we have text binding going now
[00:58:16]  okay yeah this is i i as i said i believe there's probably better um i'm gonna remember this and come back to it if i broke something later but let's let
[00:58:29] 's just kind of i'm just gonna go with this for now just so the fun part of doing the stuff on the fly you never know how how it's gonna turn
[00:58:39]  out okay so what's what's the next thing we want to do maybe we want yeah yeah yeah you know this timeout let's try and make this more like um maybe
[00:58:51]  how we'd write our actual what we're going to do so we're going to do that um we're going to do that um and then we're going to return
[00:59:05]  name and one of one of the cool things i think you're going to you might immediately notice about what what's happening here i'm going to put the create signal in here
[00:59:17]  and kind of get that going is this should start looking like a view setup function to you like there's no there's there's no uh coincidence like what we're doing
[00:59:30]  today is going to is view came out of this time period um all right yeah we can't we can this also needs to go in here but yeah you know what like
[00:59:46]  so here's our top level component but it's just returning its data um let's see here joe jack okay so let's get rid of the set time out look maybe
[00:59:55]  that's the next thing let's let's add like an event handler or let's let's let's add events to this simple setup here so instead of doing a timeout
[01:00:04]  maybe we can have a button that we click and then essentially that will uh that that will that will do the trick for us so um let's yeah let's let's
[01:00:17]  let's let's let's change this around a bit i'm just lazy let's just make our h1 into a button okay you have multiple versions of solid all right i
[01:00:31]  forgot about this code sandbox is really touchy you can do edits and it'll update with their like hmr here but if you don't save the file and you refresh
[01:00:40]  it'll all the html will always be out of date where the js will be updated it's just a little quirk of code sandbox okay so we want to get
[01:00:46]  rid of the set timeout so what we want is the past set name to our data function and see this is another reason why unidirectional flow was probably never popular
[01:00:59]  with these libraries you know where you generally like have a signal single that was also a writer because when you're returning the data like this it gets very verbose to return
[01:01:09]  these tuples all the time right um so you know i can i i feel like like you start I start feeling views kind of inspiration here a lot when going through this
[01:01:20]  kind of example. So we have name, set name, and then we need to do something with a DOM node. So let's kind of, let's just walk through
[01:01:32]  the attributes, I think is what we need. So we're gonna, let's like, let's do like maybe like a four of loop. And I think we can
[01:01:42]  just, I think attributes are spread or iterable. So I think we can do like a, we can do something like key value, maybe key value of spread L
[01:02:00]  dot attributes, I wanna say. Let's try that. And then like, well, let's see what we get here. Console log key value. Let's see
[01:02:16] . Okay, well let's first console log and see if we actually have any elements here. But so I'm doing something wrong. Okay. Okay. Let's go
[01:02:33]  L. Good. L dot attributes. Okay. Seems fine. Hmm. Let's think here. Okay. Let's see if it is actually iterating something here.
[01:03:03]  Maybe if I put like a string here, we'll see it. No. Okay. So. Well, actually I got rid of that console log because it's seamless
[01:03:28] . An empty array. Interesting. Let's see what the L is. Oh, of course. There are no attributes. I'm like. Brian, we got to
[01:03:51] , we got to add what we want before we do it. So how do we do it in view like this? Right? At click. And then you go like.
[01:03:59]  Yeah, there we go. There's our attribute. And what are we going to do? Set name to. Jack. So. Save our file. And. Okay
[01:04:18] . So the, I'm not crazy. This is, this is right. It's not. Key. Is wrong. Maybe it's. Oh, it's name.
[01:04:28]  Dummy. Name. Click. Okay. Perfect. So that's what we're dealing with. Okay. So let's go and find our click attribute and then name
[01:04:39]  value. So how do we know that it's a, it's an event handler? Well, because it has an at sign. So we can go if name index,
[01:04:48]  or actually just if name zero equals at, we know we have an event handler. So what do we need to do at that point, it's just element dot add
[01:05:05]  event handler, and then we want to slice what like name slice one, like everything after the first, and then we want the value. So I think it's just
[01:05:18] , we can just use our temple thing again and just go value context. I think we're going to be doing this a lot today. What am I missing? Is not
[01:05:30]  a function. What am I doing here? This is the fun part. Uh, oh, it's event listener. God, why am I tired this week?
[01:05:53]  Oh, okay. I see the problem. Do you know why this isn't work? Do you know why this isn't working? Let's console log value for a second
[01:06:05] . I think I know why. Because I didn't wrap it in our, in our nice little, uh, curly braces, but I think we don't need to do
[01:06:14]  the curly braces here because we have the at sign. So I think this is slicker. So why don't we just, um, why don't we, yeah
[01:06:23] , why don't we, yeah, see, yeah, there's no at sign here, or why don't we just change this slightly? So it's like,
[01:06:33]  uh, like, uh, like, let's just add the brackets around it here, like that. All right. It's, oh, right, because I need to
[01:06:50]  make it function. Nice. Nice. It works. So we load it, draw a high Joe. We click it. It turns to hijack. Okay. Sweet
[01:07:01] . Yeah. I'm just sloppy tonight. Thank you. Thank you. So, all right. We're, we're, we're, we're, we're
[01:07:13]  getting there. So now we have an event hand, now we have event handlers in our, in our template here. So what do we want to do next?
[01:07:23]  So we have text, we have events. Um, let's add data binding, right? Yeah. Let's, let's, let's, let's add, let
[01:07:36] 's add data binding, um, or nothing too fancy. Why, what if we let the button have a title so that it has like a, uh, over.
[01:07:53]  I don't remember you, what do they do? Yeah, they're not going to show me here. Let's see. It's cool. Let's just go with
[01:08:06]  call. It doesn't really matter. We can change the delimitator later. If you don't, if you don't like making a dollar sign, let's
[01:08:10] , let's, let's make another template. One of the cool things here is because we're using these kind of delimitator characters, we don't actually have
[01:08:16]  to leverage the interpopulation characters here. So let's make it, I mean, get. So let's just use name again. Um, let's just go
[01:08:29]  like, hola, um, name. So, and right now when we hover it, or maybe we have to save the template. Oh, right. Because this isn
[01:08:45] 't actual title. This is, yeah, you know what? We should probably clean up after ourselves too. Because it occurs to me when I, when, when we
[01:08:56]  look at this, we're going to see the at click on there still. And we probably don't want that. Just like we have this title. The reason we're
[01:09:04]  not seeing the title is because it has a colon in front of it. It's not, it's not, it's not, you know, interfering with the other one
[01:09:10] , but it's also like completely unnecessary. So we almost want a pattern where we actually, um, remove these, um, essentially. Um, but let's,
[01:09:21]  let's, it's not probably not a big deal. Let's yeah, if here we can, we can go, uh, L dot, um, remove attribute
[01:09:37] , I'm not even iterating it, you know, let's, let's not, let's just click doesn't click some nice notification. Let's not worry about
[01:09:45]  that. Let's do, let's do another one. Let's go if name zero equals colon. So now we're gonna do the data binding case. This one
[01:09:54] 's kind of a cross between the other two, because, um, we're going to want to make a, a render effect again, essentially for here. And this time
[01:10:05]  it's a date data. We're going to go set attribute, um. So we need to get, instead of text this time, we have, we have to
[01:10:28] , we have to get the attribute, so, um, attribute equals, um, l dot, get attribute, uh, I guess I'll do that to const.
[01:10:58]  So, um, so we don't have to do this all, multiple times. And then, this value is now our new template. And it's else attribute.
[01:11:20]  All right. No, okay, we're, we're, we're getting there. No, okay, beautiful. So we are setting a title. We're just
[01:11:35]  not setting the right one. Uh, let's, let's see here. Um, why are we not setting the right one? And while we're at it, we
[01:11:48]  probably should go, um, l dot remove attribute. Um, attribute, um, attribute, um, attribute name. Okay, it's null. Let's figure this
[01:12:07]  one out. Okay, so, uh, what do we, what do we got here? Look at our template. Is it because I'm not calling name as a
[01:12:22]  function? No, okay. It was, all right, let's double check, but. We're, we're going to keep solving here. So, okay,
[01:12:43]  not that, but worth a shot. It's because we, we didn't have the curly braces again. So we need to do this, this little, this trick here
[01:12:52]  to add the curly braces. We're kind of, we need to do this, we need to do this, we need to do this, and when we hover.
[01:13:03]  Okay, still not working. Okay, let's, let's look at what we're dealing with here. Uh, adder, context, oh, sweet, okay
[01:13:22] , so adder is nothing. Okay, so that's our problem. We don't, what I'm doing here is wrong. Yeah, of course, it has
[01:13:47]  a, yeah, uh, see here. No, sweet. And adder name. Right, 'cause it's just me being stupid. We need to get the original
[01:14:06]  one, not the, and the attribute we need to remove is the original one. Uh, essentially, uh, where did I add an extra thing or it didn't
[01:14:22] . Okay, so we want to get the original name. Why does that break it? Okay, and then we want to. Okay, and then we want to,
[01:14:51]  but that's, that's better. We're just breaking something else now, and then we want to move. And then, yes, you are absolutely right. This
[01:15:16]  one doesn't actually need the wrapper, because we are using the interpolation. I am, I'm not, I've got, I've got, I've got,
[01:15:23]  for some reason, I, yeah, for some reason, I just wasn't. Yeah. I mean, I don't need to, it's just, it's
[01:15:35] , yeah, you're right, we don't need to, it just clouds up the stuff. So, yeah, all right. Yeah, I was getting ahead of
[01:15:50]  myself here a bit. Okay, so now we have attributes, and we have, as you can see here. Well, Jack. So, we have attributes, we
[01:15:59]  have event handlers, we have text. The next thing we need is probably more interesting. I think, like, this, with just data binding attributes and data binding click
[01:16:13]  handlers, you can do a lot. What we need now is control flow, right? Our template is not very useful as it is right now. We can't
[01:16:22]  really do much with it. All right. So, let's, let's, let's, let's, let's take this to the next level. I mean,
[01:16:33]  to be fair, you can do a lot with, with just this kind of, with just these alone. But we want to, we want to conditionally render something
[01:16:42]  or do a loop or something. Which one should we do first? Should we do a loop or should we do a list? Let's do, let's do, let
[01:16:54] 's, let's do, let's probably, sorry, loop is a list or a conditional. If is probably slightly easier to do. So, maybe, maybe,
[01:17:07]  maybe, maybe we should do if, yeah, let's, I guess we should do if. What if, let's, let's, let's make, let's
[01:17:19]  move our text to a, let's, let's move it here, maybe. Here. Interesting. This is, this is, this is showing me how our walk
[01:17:36] er is broken. Probably. Yeah. So, maybe we should fix that up first. Yeah. Yeah. So, the walker is broken right now. Knew
[01:17:57]  that we would hit an error with that eventually. Let's, let's kind of look at that for a second. So, what's happening is it's going in.
[01:18:10]  And then the last current one was that. Oh, that's interesting. Yeah. That's the, the, my, maybe my walk mentality here is just, it
[01:18:26] 's just wrong. Because like. Go next. Go next. Yeah. My, I think. I, I think. I don't. I, I think I
[01:18:40]  just was. Yeah. Or I could use tree rocker. Yeah. I think, I think, I think, I think. I think I was just thinking about this
[01:18:48]  maybe a little bit wrong. Because this. This, this seems to work here. Yeah. So, I'm, let's, let's just, yeah, let
[01:19:04] 's just. Okay. Let's just continue on here. Okay. So, what if we wanted to. See. Yeah. Okay. Let's. Instead of.
[01:19:26]  I mean, we can just leave this here too. Because let's just keep on going. But let's add another signal. Maybe like a. Visible. Signal.
[01:19:36]  Like. Visible. Set. Visible. And then, actually. Okay. I got an idea. We won't do that. We'll do. We'll
[01:19:56]  just, we'll just keep it like this for a moment. And let's just, let's, let's just do something silly. Where we're like. Only show
[01:20:02]  this. So, let's, let's, let's invent something. S. If. You know. It was a B if. Or something. If. Um.
[01:20:09]  And our condition will be. If. Name. Is bigger than. And. Name dot length. Is bigger than. Two. Essentially. So, the idea here is
[01:20:29] . When it's Joe. It won't show the hide. But then when we click it to Jack. It'll be bigger than two. And then it'll show it
[01:20:34] . The way the directives work. Is you put them on the element. And it's the element itself. That actually. Goes in and out. So, yeah
[01:20:42] . Yeah. Let's, let's just do that. Okay. And then. Now we need. Some different logic here. Because the way. Um. The directives
[01:20:51]  work. Is actually a little bit. Interesting. Because. Because it reuses the node. Like I was talking about. You actually have to. Cache and handle a
[01:20:58]  node. Completely separate. From this like loop. We're doing here. Like it. It kind of pulls it out. So. We actually have the special case.
[01:21:07]  The directives. Before we do the attribute loops. Because we're not. We're actually going to not. Process. The. Um. We're not going to process
[01:21:15] . The attributes. Uh. Right away. Um. We're going to actually wait. Until they get inserted. Because it's potential. Them not getting inserted. So.
[01:21:23]  It's more like. We first have to go. Go. Like. If. Uh. L dot. Get. Attribute. Or. Maybe. Maybe has
[01:21:33] . Has. Attribute. S4. Or whatever we want to call it. Then we do some logic. And it's actually going to. Happen. Before
[01:21:44] hand. So. We need to. Do a little work here. Essentially. We need to be able to. Um. Cache. The node. Um. I think
[01:21:54] . So. We. We have to kind of think about this. First. Let's. Or actually. We're doing. S. If. Why didn't I
[01:22:01]  do S for? S. If. Did I do. S. If. I did. S. If. Right. We need to. We need to get the expression
[01:22:07]  first. Right. That we're going to be using. So we can. Go. You know. Uh. L dot. Get. Attribute. If. And
[01:22:18]  then. What else do we need to do? We need to. We need to. Ultimately. Remove it. Um. Remove. And then. This one we have
[01:22:30]  to move. Um. The other ones we didn't need to. But this one we do. Because it'll create an infinite loop. Otherwise. Because it'll. Like
[01:22:36] . It will prop. When we go to insert it. It'll see the if again. And then try and. Try and. Like. Process it again. We.
[01:22:45]  We need to process it. Only once. So this one is. Is. Essential that we remove it. Um. And then. We're going to need some.
[01:22:53]  Uh. Conditional logic. And I've written this one enough times. That I kind of. Know. Know what it looks like. But essentially. Do an if.
[01:22:59]  Um. In solid. You need. We use two memos. One to wrap the condition. And then. One to wrap the. The whole thing. And this way
[01:23:07] . You know. We're not. If the condition. Doesn't change. It's boolean. We can isolate the change. Um. So. We.
[01:23:14]  We gotta. We basically boolean cast. Whatever. The template expression is. So that. Like. Like. The problem here. Is like. If. If name
[01:23:23]  is. If we were changing. Like the name. One. Two. Three. You don't want to rerun. The whole thing. You only want to. To
[01:23:30]  actually. Re-render this. Or change anything. When it switches from false. To true. Or true to false. You don't want. For every single step.
[01:23:37]  To re-render the whole element. So. This is why we split into two memos. So. In here. We'll need a template. That will.
[01:23:44]  Um. Uh. Take our. Um. Yeah. That'll take our. What should we call it? Um. I think this one. We aren't escaping. So
[01:23:57]  this one. We will need to do. This again. And. I call it expression. And pass it to context. All right. Get memos not to mind.
[01:24:11]  Okay. Sweet. And then. Next thing. Besides that. Is we're going to need to actually. Write our conditional logic. Which will be another. Memo.
[01:24:26]  I'm thinking. Let's. Call it. What do you call it? Call it show. Yeah. Basically. Like our. And then in this one. We
[01:24:37]  read from our condition. So I guess. Get our value. Right. Const. We're. Do we already have value in the scope? Maybe. We don't
[01:24:45]  want to. Const value. Equals. Our condition. And then. Basically. Our actual condition statement. So if there's a value. Do some stuff. Else.
[01:25:01]  Um. Well actually. There's no else. We did. Else. We just return nothing. Right. And then. Finally. We're going. We're going to
[01:25:10]  want to. Insert it in the dom. Um. Hm. Yeah. We have a few options here. Since we're using solid. I'm. How are we
[01:25:22]  doing for time? It depends on how far. I want to. I want to implement. This. Okay. We're at 125. And I still want to do the
[01:25:31]  for loop. Yeah. No. I'm. I'm going. I'm going to. I'm going to actually. Since this. I'm going to do this.
[01:25:42]  Um. If we have time. We'll get back to this. But I'm going to. I'm going to. I'm going to pull. Uh. Insert
[01:25:49]  from solid JS. Web. Which. Uh. What the hell is. Why am I. That was really. Weird. I don't know why there's a. Type
[01:26:05] Script file. Showing up here. Insert from solid JS. Web. And. Uh. It's. It. It. It. It's. It's going
[01:26:15]  to. Um. It's going to insert. Our. Text node. Um. And. Handles a few of the extra cases. Um. Essentially. So. We
[01:26:28]  need a parent. Which we haven't got yet. And then. Oh. Sorry. And then. We need. The expression. Which is a show expression. And
[01:26:43]  then. Possibly a marker. I think we're going to do. We're going to use a marker. To be safe. So. Okay. So. That probably
[01:26:50]  doesn't mean a ton. To any of you. Right now. So let me explain. What I'm. What we're going to do. First. We need
[01:26:55]  to get. Our parent node. So before. We. We. We're. We're doing anything here. We need. Let's just. Let's just get.
[01:27:02]  Yeah. Let's. Let's get our parent. Because we haven't done it yet. But we actually have to. Remove. This whole element. From the view
[01:27:12] . As part of this process. So. Pretty early up here. We probably want to. The parent. Before we remove it from the view. So we'll be like
[01:27:23] . I'll go up. Parent. Node. And then. So we're going to insert in our parent. And then we are going to. Have our accessor.
[01:27:36]  Which is show. And then we're going to have a marker. And marker. Is just going to be a text node. So we're going to go. This
[01:27:42]  will just keep track. So when we're. As we're adding and removing stuff. We have an anchor. So that. It knows. Like where to insert it.
[01:27:51]  You can think of this as basically. A fancy insert before. I just know that this handles. A few edge cases. So I didn't want. Like. I could
[01:27:58]  probably just. Do insert before here. And it probably just. Work. But this handles the reactivity. Resolution. A bit. So. Okay. Let's.
[01:28:06]  Let's. Let's. Let's go. So let's. Marker. Is. Marker. Equals. Document. Dot. Create. Text. Node
[01:28:16] . And then. We're going to go. Maybe. Maybe replace with. Let's go. L. This is a newer. DOM API. But I've just
[01:28:30]  been. I've just been. I've just been. I've just been. Loving this one recently. See. Now. It's gone. Which is. Right
[01:28:37] . The reason we had to do that. And actually. Before we do that. We should. Cast. Stash it. I mean. We don't. Have
[01:28:46]  to. I guess. Actually. We don't have to. Because we. We always. Have this. L. Now. The. The. I'm not explaining
[01:28:55]  myself. The best here. I admit. So if you have questions. Do throw them in the chat. But essentially. We. Kind of like in the same way.
[01:29:03]  That we had to keep. This text around. To know what the template is. We have to keep. The element around. Because what we're going to be doing.
[01:29:12]  Is every time. That it's true. We're going to. Our first thing is. We're going to. Make our new node. And we're going to do
[01:29:18]  that. By cloning it. So. We need to clone. The node that was there. So that. We basically get a new node. Every time. But
[01:29:28]  that node is a. Is a fresh node. That hasn't been processed yet. So. We need to process. That node. And then. Potentially walk. Through
[01:29:40]  any of its. Children. And. Finally. We need to return that node. As. As the value that we're inserting. And. Context. And then
[01:29:55] . Context. Context. All right. Not quite. Almost. That was interesting. Um. Because. It. Half worked. But we're seeing the old value
[01:30:16] . I know why. I know why. The reason we're seeing the old value. Is because. On the initial render. Even though we're removing the node and
[01:30:26]  stuff. It's. Like we're not. It's still going through and walking. And doing all this stuff. And. And. And um. And. And
[01:30:35] . And. Processing the children. Return. What happens? Okay. Still same problem. So we actually have to tell it. To stop. Um. Processing.
[01:30:45]  And where to continue from. So actually we're going to return the marker. Because the marker is the one thing. That we know is always going to be there.
[01:30:51]  And it's always going to be at the end. Of our. Of our. If statements. So by returning the marker. We. We kind of get that.
[01:30:58]  But it means that we need. To. Change our logic for our walk. Because. If process node. Returns. Something. Then we have to actually. Like.
[01:31:10]  We don't want to walk to the children. Essentially. Is. Is. I think that's the logic that we're going to use here. Um. Because. Yeah
[01:31:18] . So let. Let. Yeah. I'm not going to worry about this. I know I went through and made everything current. But I'm not going to worry about
[01:31:25]  this current thing. Because it seems to be messing. With stuff right now. Or it's just not doing anything. But let's. Let's just. If.
[01:31:35]  It's going to be another variable here. To store the node. That comes through. But if. This is the else. Else we just walk. To the children.
[01:31:47]  And continue. But if. If there is something there. We need to. We need to kind of continue. To the next sibling. And skip over the children.
[01:31:57]  Essentially. So. Let's. Let's just. I don't know. Let's call it. Something else. Let's call it. Stop. I know that's
[01:32:04]  probably a terrible name. But. Stop. Equals. This. Then. Next. Needs to become. Stop's. Next sibling. That's walking to the sibling
[01:32:17] . Not to the children. And then. We. Clear it. I think. Oh. Code Sambo. Loves this. Like. Oh right. It doesn
[01:32:29] 't like assigning. In an if statement. Well. Whatever. Hoo hoo. Yeah. It works. Okay. Yeah. Yeah. Essentially. We needed. If. If
[01:32:44]  we're processing. A directive. We don't want to walk. Into the children. Because what we do. Is we. We hoist out. We actually grab
[01:32:50]  the original element. The one that had. You know. All of this stuff. And all the templating stuff. And we save it for later. Essentially. We.
[01:32:59]  We. We. We just hold on to it. In this closure. Essentially. So that when we go to render it. We get to process it. For the first
[01:33:05]  time. Here. And actually. If these were ever nested. We probably. Don't want to walk. The children. If. There's like another. If
[01:33:18]  there's like. Layer directives. Like. Ifs and fours. On the same element. Or something. So. Let's see if that. That does what
[01:33:24]  we want. Yeah. Okay. Okay. So. This is basically. What a four. Directive looks like. It's a little bit complicated. I suppose. But
[01:33:35] . This is. This is essentially. How we. How. How we would do. a conditional. In our template. Let's see here. Yeah. That definitely
[01:33:47]  took. A little bit. Of mental gymnastics. Let's. Let's do a loop. Next. I think. That's. Yeah. I think that's probably.
[01:33:57]  The loops. The. The. The other. Primary one. I think. If you have. A conditional. And you have a loop. And you have attributes. And
[01:34:05]  you have. Text. And you have. Event handlers. I think. You actually have. All the basics. To build. Most. Like simple. Type.
[01:34:17]  Demo type things. So. Let's try and make a. Let's. Let's. Let's. Let's try and make something here. Is there any
[01:34:26]  value. In the. If. Using clone node. When you're not looking at. Having any components. In the system. Hmm. That's an interesting question. So
[01:34:36]  you're saying. Just like. Insert. Well. Mostly. It's because like. It's because like. We're. Oh. Yeah. I see what you
[01:34:46] 're saying. Because you're not making a new context. So you could actually. Just keep it bound all the time. And then. Have it updating off the screen.
[01:34:52]  I get the four needs it. And actually. Now I'm realizing. It needs it. Because of that. Yeah. Yeah. Like using them in combination. Yeah.
[01:35:00]  That's a good point. Yeah. Let's do four. I think four is probably like. the. I left it. As like the last of our fundamental.
[01:35:06]  Building blocks. But I think it's actually. Probably the most complicated. Of the bunch. Because four. Actually needs to create. Child context. And this is one of
[01:35:15]  the things. When I was early. Days working on solid. I mean. You can do smart stuff. And shared context. But the context. Was actually the performance.
[01:35:24]  Thing. I was actually using. A templating language. Very similar to this. At the beginning. Before I chose JSX. And when I went to JSX.
[01:35:31]  I suddenly got. This performance boost. So. To be fair. I'd already. There's a. There's another step. Between this. And getting to JS
[01:35:38] X. Which is. Instead of. Walking the live. Dom nodes. You know. Taking this in. As a string. And parsing it. Doing the AST
[01:35:47] . But even then. Um. Like. It depends on. The approach you're taking. To compilation. I was taking a very. Like very similar. To this mentality
[01:35:58] . We were always building. These nested. Child context. You know. And binding to them. And yeah. Compared to JSX. Is kind of just like
[01:36:07] . Using the existing. JavaScript scope. Um. It was definitely a lot. Uh. More involved. And it would. It had a bit of a performance cost. But
[01:36:14]  also like. Advanced compilers. Like Svelte. Don't take that hit. Okay. So. Let's. Let's continue on. I know this is
[01:36:21]  pretty heavy. I knew this was going to be. One of those. Topics or streams. Where we were. Um. Kind of. You know. Doing some coding
[01:36:28] . Uh. Definitely. Requires some thinking. So. Okay. So we have. If. And I think if. Is like. The higher level one. So
[01:36:35]  let's. Like we did last time. Let's build what we want to build. Before we. Uh. Like make what we want to build. Before we make it
[01:36:42] . So that. Um. We can. Like see the stuff. So let's. Go into. Index template. And let's. We have a conditional. With
[01:36:49]  a P. Let's. Um. Let's. Make a list. And then. Let's. Um. List item. And then. This item. We'll have
[01:37:06]  an S4 on it. And. I. We were looking at the template here. And it. Had a. This loop thing. Which is really cool. This
[01:37:17]  is why I chose Riot. I remember this back in the day. It actually supports like. These kind of syntaxes. Like the key in. So. I'm not
[01:37:24]  going to worry about the index so much. We're just going to be key in I. That's what. Let's. Let's. Let's build. Towards that
[01:37:29]  at first. As a first step. So let's go. And again. Because it has a special. We don't need the. Interpolation. So let's
[01:37:36]  make it. Or. Um. Item in list. And then. The item in here. We'll just keep it. Simple initially. All right. And this is
[01:37:58]  why you build the HTML first. So you can see. The errors you make up front. So. We. We now have. A list item. With undef
[01:38:08] ined in it. Because. It doesn't. It doesn't have this stuff. Okay. So. Let's. Let's make. Another signal. Yeah. Let's
[01:38:19] . Just. Just. This way. We can. Add. Interactivity to it. When we go. And what did I call it? I call it list
[01:38:24] . And. Let's. Initialize our list to. Apple. Banana. Orange. And again. And I see why. Vue has helpers for.
[01:38:53]  Their set of functions. If you're always like. I mean. They don't have the. The. The. The tuples. But like. You're. You
[01:38:58] 're always like. Declaring it. And then like. Passing it to like. Out of the function. Like this. So. Okay. So. Set name
[01:39:09] . Has already been declared. Oh. That's probably just. Out of date. Beautiful. Okay. So. It's. Our. Our for loop. Is going
[01:39:21]  to work. Somewhat similar to this. Right. We're going to. We're going to. We're going to do this. And. Okay. So. Do
[01:39:34]  we have four. And then. Similarly. We're going to get our. Expression. And we're going to remove it. And we're probably going to get the
[01:39:42] . Fact. I think we're probably going to do. Almost all of this. Right off the bat. I mean. It's going to be four this time.
[01:39:56]  But. We're probably going to do all of this. Okay. And then. Then is where things kind of change up a bit. We're going to do all
[01:40:09]  of this. Yeah. So. I guess. We probably want to get like the information. About the for loop first. So let's. Let's. Let's.
[01:40:26]  Let's. Let's kind of. Let's look at that. Return this. Just as I can. Okay. Sweet. So. That information. Actually. It
[01:40:38] 's. It's probably returned. Marker again. Isn't it? Yeah. Okay. That information is going to be. From that helper. I was saying. So
[01:40:46]  what's this console. Log it. With. Temple. Dot. Loop. Keys. Expression. Okay. I mean. Oh. It's because. We need
[01:41:06]  to. Put our delimiter. On it again. Beautiful. So. Key item. Invalued list. Okay. Yeah. That's useful. Because it actually
[01:41:20] . Puts the parentheses back in for you. It's actually. Actually. They built it in a pretty. Smart way in that sense. To actually. Kind of help
[01:41:28]  on that. All right. So. Let's see here. How this is going to work. So. We know. We get our. Let's just destructure.
[01:41:38]  The key and value. Key and val. Actually. Out of this. Key. Val. And. Okay. Cool. Cool. Now. Some ways. This one
[01:41:57]  might actually be a little bit easier. Because. Mapping. Is a common. Thing. You have to do in a reactive system. Even without. View code. So
[01:42:04] . If you. If you have a reactive map function. We could probably. We can just use that straight up here. Right? So. We can go. What do
[01:42:12]  you call it? Not list. Because I'm already using list. Am I already using list? No. List isn't in this context. It's in our variable.
[01:42:22]  So I can go. Cons list equals. Create memo. Map array. And then our map array. Takes an accessor. Which is going to be. Our.
[01:42:31]  Expression. For. The vowel. I think. So it's going to be. Temple. Vow. And. And it's going to. Is it vowel
[01:42:48] ? Or. God. I can't remember. Did I lose that? Okay. Yeah. It's vowel. That's right. Temple. Vow. Context.
[01:42:56]  So that's. And then our. Credit kit. Is going to be our. V. Which is going to be our list iteration. And what are we going to do
[01:43:06]  in here? And again we're just going to insert. The list. Parent. List. Before. Marker. And then. For the value. This is probably
[01:43:25]  going to be. Kind of similar to this. But there's one. There's one key difference here. We're going to need to make a new context. Right?
[01:43:31]  Because. Now. Context has changed. Kind of thing the best way to do this. Because. We. Have. The key. Which is the item. So
[01:43:42]  now we need. We need. We need to basically assign. The value from the loop iteration. To the keyword item. So our context has an item. Because that's
[01:43:57]  what we. That key. Or whatever is what we call it here. We need to. We need to have items. So that when. This processes. It has
[01:44:02]  item. Right? So. We need a new context. With item. But the thing is. That. I don't think this is sufficient. Because. We need to
[01:44:11] . Spread. The. Existing context. So we. Let's call it inner. Because. You want. To have. The outer context. Still available. Like
[01:44:23] . What if you wanted. To use name. In here. Inside the for loop. You. You don't. If. I just made the new context. So
[01:44:32] . We. We actually need. To make sure. To get name. In the. In the. In the context. As well. So. We're going to.
[01:44:37]  We're going to spread it. So. We have. Inner. Context. Key. So. Just. If you want. To see. What. What. That
[01:44:45]  looks like. Let's see. If we can. Console. Log in. See. If we're on the. Right. Track here. Name. It's a
[01:44:51]  signal. Set name. Listener bound. And then we have a new. Item. Orange. Yeah. So. Essentially. We took the existing context. And we.
[01:44:58]  Added the new. Key value. Onto it. Okay. Nice. And then. What are we going to do next? We need to. Clone our node.
[01:45:07]  Right. It's basically. The same here. It's. It's almost. It's almost. Identical to this. I imagine. Actually. Maybe something. We
[01:45:16]  can refactor out. Here. Almost. Right. All right. Context is now. Inner. All right. All right. Okay. So we're displaying our
[01:45:42]  list. Let's make sure it's reactive though. Let's make sure that we did this right. So what if we. Go in our. Template. And
[01:45:51]  instead of the button. Setting the name to Jack. It. Um. We. We. We. We. We. We. We. I'm just going to.
[01:46:00]  Add Jack to the name. What is it? Set list. And what's solid. We can go. List. List. Function. Form is. Spread.
[01:46:10]  Existing list. Add Jack at the end. Like this. That's right. So we click it. Malformed arrow function. I wonder if this thing can't
[01:46:25] . Handle. Arrow functions. This. This. This. The thing is pretty old. That's fun. You know what? Okay. So. This is probably
[01:46:47]  the fun part of. Of having this. Let's make it. Let's. Let's just make like a new. I'm going to pass this in. Unfortunately
[01:46:55] . It looks like we. We've found. We've. We found the limit. Of our. Of our. Of our. Templating language here. So. Let
[01:47:03] 's make a new. Add. Thing. And let's. So. Let's. Let's. Maybe it says set list. We'll do like. Add.
[01:47:17]  Value. Equals. Set list. L. List. Spread. List. Value. Something like that. Yeah. And there we go. Now we had Jack. Okay
[01:47:35] . So. Okay. Our. Our. Our. 2015. Template. Language. Isn't a. Isn't a perfect fit. With modern arrow functions. So
[01:47:46] . Maybe. Maybe. Maybe we need to do some work. On our parser side. Okay. It's. I'm pretty sure when I was doing. This last
[01:47:55]  with solid. Maybe arrow functions. Weren't as prevalent back then. I wonder if anyone ever. Opened an issue on here. But. Okay. It's.
[01:48:03]  It's cool. So. We have a conditional. That works. And we have an array. And let's actually double check. That our list works properly. Then we
[01:48:11] 're not doing something. really stupid here. Right. Let's. Let's look here. Because we have. A bunch of elements. Marker. Marker.
[01:48:21]  Marker. Marker. And then. When I click. Add. It should add. And. What's. Why is there another ul there? Interesting. Are we
[01:48:32]  not removing something? Okay. Let's. Let's just try. Click add. It should. Add. Only the one item. And not re-render anything else.
[01:48:40]  And that looks to be. What's. What's happening there. Okay. Interestingly. We have a. Orphaned. UL. So. Am I
[01:48:51]  not. Did I forget. To. Replace it. Or remove it. In this process. Um. Where is it? Huh. I did. Okay. Well
[01:49:06]  that's interesting. Okay. Let's. Probably track that down. But that's. That's most of it here. Okay. Cool. For the few of you that
[01:49:17]  are still here. Hopefully. Hopefully. That you see. This. Got some value from this. But this. This is. This is kind of. The majority.
[01:49:28]  Of. This. This is like. What. JavaScript frameworks. Were. Were. Were like. In 2011. Or 12. Or alpine. Or petite view.
[01:49:36]  This is how they're able to get them so small. Because. Essentially. You only need a. Maybe like a small subset of the reactive system. Whatever you want to
[01:49:43]  support. Um. We're. Using insert. From. From solid JS web. Which. For the arrays. Is a little bit cheating. Because I didn't really.
[01:49:52]  Um. Show it off. Obviously for the for loop. It's just insert before. But technically. Um. We need to diff. The arrays as they're. As
[01:50:02]  they're coming in. And to do that. There's libraries out here. But one. One popular one. Udom diff. Here. Essentially. Um. Which
[01:50:14] . It will look something like this. I'll take the parent. It'll take the current nodes. Take the future nodes. And then I'll give you. Ability
[01:50:20]  to interact with them. That. All you do. You. You can basically just. Patch that. Essentially. To. To. To basically. Pass in. The.
[01:50:33]  Like. The. The way this is working. Right now. Is. Map array. In. In here. Is mapping. All of the. Data. To real
[01:50:42]  dom nodes. So you. You're going to have. Essentially. Whenever you read from list. You're going to have. Um. A list of. The. Like
[01:50:52]  the dom nodes. That. And some of them might be connected. Some of them. Might. Not be. Because this is. This is only. Calling this callback
[01:50:59]  function. When new data comes in. If existing data. Is maps to the existing dom nodes. We're not creating new dom nodes. Every time. And then.
[01:51:06]  Essentially. You have this list. Of dom nodes. And it. All you do. Is you store the previous version. Um. Uh. List. Each time you go
[01:51:16]  through. And you. And you pass. And you pass in the new list. And essentially. A helper like this. Will take the. The. The current list
[01:51:25] . Or the previous list. And the current list. And. Um. Like. They have this get. This is for like. V dom. But you can just.
[01:51:34]  Refactor that out. Essentially. And this is for our marker. That we added. And essentially. This almost. This basically just. Diffs the list. For you
[01:51:44] . Um. What. What this looks like. Is. Kind of. A bit of code. But it's not. As much as you might expect. It's
[01:51:54]  just. It's just. A pattern. Where. Essentially. It. It looks at both lists. And it compares the indexes. On the. Um. From.
[01:52:05]  From both sides. It goes from the start. And from the end. Essentially. And as long as the start. And the end. Are the same. It basically shr
[01:52:12] inks the list. Down. Walking. From both the start. And the end. Until. It finds. The first thing. That doesn't match. Between the two
[01:52:20]  lists. And then. Now. You're dealing with. Only a smaller subset. Of the list. And then. It checks. Um. And this is. Kind of
[01:52:30]  funny. But it checks. If the head. Head or the tail. Is. The thing that the other one expects. So. You know. If. If you
[01:52:38]  just. It's very common. In lists. To do like. A swap. Or move. Move. So. If. If. If. If your operation.
[01:52:44]  Is only on a single node. Um. You know. Where you moved. Or swapped. Or them. Quite often. When you hit that thing. It will. The
[01:52:51]  end will be the starter. The start will be the end of the other one. So. It just quickly checks that. And swaps. And then continues on. Sh
[01:52:57] rinking it. And finally. If. If. If. If it just. Bails. Through those. Kind of simple swaps. And shrinking. Um.
[01:53:04]  It starts. Essentially. Adding. Um. This is the else statement here. Adding them to a map. And then checking. If. Um. If. If. If
[01:53:16] . If. If it has that node already. And repositioning them with a map. So. This. This is a little bit more advanced. You could have just
[01:53:23]  done the whole thing with a map. And it's a smaller algorithm. Um. But it ends up. Um. Being. A little bit slower. Because it's
[01:53:31]  not optimized for the fast path. There's. There's some really smart ones. Uh. Stage zero. Um. Uh. He kind of generalized it. So if you
[01:53:39]  ever like. Want to build your own framework. Um. Sorry. Not this one. This one. Stage zero from freak six to one thirteen. Um. He actually.
[01:53:49]  Remade. Um. The. The. Version of the reconcile. That you'd use for keyed. He has. Reuse nodes. Which is unkeyed
[01:54:02] . And he has. Reconcile. Which is like. The referential one. That like solid uses. It doesn't use keyed. But it's the same
[01:54:08]  as keyed. He actually has all three versions here. Using a much bigger algorithm. But very similar. But this is the fastest. Least move. It's
[01:54:17]  called. Um. It's called the list algorithm. Um. Which is. I always mess it up. It's like. Longest. Um. Damn it. Why
[01:54:29]  do I never. Get the name of it. Right? Something sequence. It's like. Longest increasing. Longest increasing sub sequence. Um. And this lets
[01:54:43]  us. Basically identify. Um. The. The smallest pieces. That we can. Replace. And by. Algorithmically. If you do. The changes
[01:54:55]  in. In this order. Um. Going from the longest. Of the sequences. To the shortest. It's. It's the least possible. Theoretical moves.
[01:55:03]  For any kind of sorting. Um. So. We were using this before. We actually went to the. Slightly more Bruce. For a simple one. Because it was
[01:55:10]  faster. For the majority of cases. But. Um. Again. This is. This is a good. Good algorithm to use. When you look at most. UI frameworks
[01:55:18] . The. They're actually. Fairly dumb here. Um. To be fair. So. Like. This one might be. This. The smartest. For like
[01:55:26] . A completely random shuffle. U dom diff handles. Decently well. Because it optimizes. The common cases. And then it. Kind of defaults. And
[01:55:35]  then if you just use. The map straight. Like if you ever. I don't know if I want to. Pull it out right now. But like. Svel
[01:55:41] te has a very. Very small. Diffing algorithm. It's less performant. But I mean. For the most part. You're not going to. Sorry
[01:55:51] . It's in the. Svelte runtime here. The runtime that doesn't exist. According to some people. Where are we? Internal. Loop. Here it
[01:56:08]  is. Where is it? Clear loop. Loop. No. That's not it. Where is the helper? It is not this one. Okay. Not this one
[01:56:18] . Just a second. It's not loop. It's. It's going to be in here. Keyed each. Here it is. Because without a key. You
[01:56:30]  literally just do a for loop. And just replace everything. It's really simple. But essentially. Yeah. This version is. You just use two maps. And then
[01:56:42]  you just kind of wild loop. And do the maps. And it's it's it's. It's it's pretty small. Like there's the inserting stuff here.
[01:56:51]  But the actual diffing algorithm. Is just. Update keyed each. It's just. You know. Actually. It goes to here. It's not. It
[01:57:01] 's not the smallest. But it's yeah. It's like 100 lines of code. Instead of 300 lines of code. Versus like. Some of the bigger ones.
[01:57:07]  Which are like. You know. You know. A little bigger than that. So. The great thing is. All these libraries. That do this are out there. So
[01:57:20]  like. Most of the time. There's a certain type of person. Who works and perfects these. Like the creator of Evie. Forrest call. You
[01:57:27]  know. Works through. Comes up the best algorithm. Every. Then everyone else just uses it. Like. If you look in the beat on libraries. Like. 70%
[01:57:34]  of them use snap dom. And. You know. You dom diff. We've been using. In solid. And actually. There's a list. Biff. Ben
[01:57:44] chmark. I forgot. I think I forgot to show this. In my previous. Benchmark episode. But there. There is a list diff. Benchmark
[01:57:53] . Let me. Just. Bye bye. Bye bye. And the list diff. Benchmark. Let me see if I can find it here. Who is it
[01:58:04] ? It's a guy from. Sinuous developer. Let's find it. Sinuous. Another reactive. Library. I'm going to put JS on the end. Otherwise
[01:58:21]  you never find. Loop. Yeah. There is. Rest diff. Or JS diff benchmark. Everyone's probably using. Like a version of this. Stage zero is basically
[01:58:38] . The EV algorithm. And you can see the size. Of the algorithm. And then there's like. A comparison chart. For a bunch of different. Things.
[01:58:45]  So. I saved us the time. Of going through. And re-implementing this. Or. You know. Making it work. To our thing. So that
[01:58:52] 's just. What the solid insert. Thing goes. Like. If it's an array. Do the diff. If it's a simple value. Insert around the marker.
[01:58:58]  Basically. I kind of saved us. From going through this. But. Essentially. Um. You know. This. This looks a lot. Like the JS framework benchmark
[01:59:08] . Because. A lot of lists. It just tests. A lot of different. Lists. Things. The only thing. Is this. This benchmark. Doesn't test
[01:59:14] . The cost of the DOM. So it unfairly. Make. It only tests. The overhead. Of. Of. The. Like. JavaScript part. Which is.
[01:59:25]  A little bit unfair. Um. To some of the algorithms. Because. Like. Stage zero. First. I forget which one. There's a. There's like
[01:59:36]  a. Sorter swap one. Yeah. Here. Shuffle. It. It shuffles. A thousand rows. In 18. Uh. 1888 moves. And
[01:59:48]  this is like a. It's. It's. It's not random. It's randomized. So like no. Algorithm can game it. But they all get
[01:59:54]  the same. Problem to solve. Well. Whereas. Some of them. Most of them. Like. Some take 2000. A lot of them take. You know.
[02:00:03]  1980. U DOM diff. Only saves two moves. Of them. Out of the. Like. Typical map. Possible moves. In this case. Whereas. Um
[02:00:11] . Stage zero. Is like. Saves hundreds of moves. So for actual. Dom. Uh. Where you're doing. A lot of shuffling. This algorithm
[02:00:18] . Has some benefits. It's just like. Three times larger. Than the other ones. So. Kind of cost size. Evaluation there. Um. Yeah.
[02:00:26]  I don't know. Uh. So that. That explains like. The missing part of insert. Essentially. So. I don't know. Does anyone have any other questions
[02:00:34] ? I don't know what else to do with this right now. We could like. Play around a little bit. And make something. But for the. For the most
[02:00:39]  part. Um. I'm going to just. Name this. What am I going to name this? Uh. Uh. It's not even progressive enhancement. As I
[02:00:47]  already explained. But like. Simple. Uh. HTML. Render. And. Uh. Quote that in chat. You can kind of play around with it.
[02:01:05]  And. Uh. I don't know. If there's nothing else. Maybe we just call this one a night. Um. Maybe not the most enthralling content.
[02:01:14]  But this is the kind of. Stuff. That the internals of frameworks work. Even when they're not using this kind of technique. When they're using like. A
[02:01:22] ST compilation stuff. The runtime. Still tends to look. A lot like this. At least for a react. A reactive runtime. This has all the fundamental pieces. It
[02:01:31] 's just a little bit. Buggy. The question is. Do I take this further? And actually release library with it? I'm probably. Not going to do that
[02:01:41] . Probably not. We already saw some limits in the templating language. Which means we probably need to find one. And we'd have to. We probably want to make
[02:01:49]  sure that it's small. So we'd have the performance. Um. You know. Benchmark it. And look at like the different stuff. But this this
[02:01:56]  hopefully. You know. If you ever felt like. You know. Getting started in building your own frameworks. This could be. You know. A little bit of a lesson
[02:02:04] . Yeah. Okay. Thank you. Um. Yeah. So yeah. Let's call it. Thank you all for joining me. Um. I hope you had a great
[02:02:16]  holiday break. And you didn't all get COVID. Um. Which is. Very serious right now. But uh. Yeah. Till next time.