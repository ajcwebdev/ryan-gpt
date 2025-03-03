---
showLink: "https://www.youtube.com/watch?v=Q0mXYbA86Qo"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Islands, Partial Hydration, & JavaScript Frameworks"
description: ""
publishDate: "2021-10-16"
coverImage: "https://i.ytimg.com/vi/Q0mXYbA86Qo/sddefault.jpg?v=6169b8a0"
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

[00:00:00]  Hi, welcome to my stream tonight. Today we are going to take a look at partial hydration or islands or whatever else you want to call it. Honestly, this subject is
[00:00:13]  pretty huge and probably right now one of the most confusing things about JavaScript and JavaScript frameworks. I'm hoping that if I spend enough time on this, can I really dig in
[00:00:25] ? We can all kind of get a better understanding of what's going on. To that end, some people mentioned that when I try and explain expensive or complicated things that
[00:00:36]  it kind of gets lost sometimes even with showing the code. So I'm going to try something new today. I'm going to actually try and use Excalibur to
[00:00:46]  do some drawing, some visualizations. I haven't prepared anything, so you'll just have to enjoy my finger art. I'm using a laptop to do this.
[00:00:55]  So I will be drawing with my index finger on a trackpad. So you know, we'll see how that goes. But yeah, if you're joining in, come
[00:01:06]  say hi in the chat. And I'm just going to kind of ramble a bit while this whole thing gets started. Hi, Brendan. All right. So how
[00:01:23]  do we want to start today? Actually, no, before we get into the hydration, I'm going to talk about this week in JavaScript. It's kind of a regular
[00:01:31]  thing on my streams these days. Basically, the first few minutes, I go off about what's been going on this week, bit of a rant. I think that
[00:01:44]  the biggest news for me, at least, is that Remix has gone completely open source. I'm pretty excited about this, honestly. To a certain degree, I was
[00:01:57]  kind of curious how well, you know, their model would work. It's different. You know, this idea of having something that's basically open source, but kind
[00:02:08]  of hidden behind a special security token setup where you get it from a special repository. I was really intrigued by that. You know, it's like a potential future model.
[00:02:20]  But on the other hand, the fact that Remix is now open source is great, because it will be that much easier to download the project, you know, look
[00:02:28] , you know, look at what it's doing, reverse engineer it, steal all its secrets. Wait, did I say that out loud? Yeah, no, I'm
[00:02:36]  pretty, I'm pretty stoked to see it. I think Remix adds a lot for the React ecosystem. And I think that, you know, its original model might
[00:02:51]  have had trouble getting a wide adoption. Like, people who, you know, knew what it was capable of know that it was amazing. But it's a lot easier
[00:02:59] , you know, when people can try it and see it without having to, you know, pay the money. And they knew that. But, you know, honestly,
[00:03:07]  at the end of the day, they also need to get paid for the amazing work they're doing. So I get it. And I'm super stoked that they were able
[00:03:15]  to raise money and get funded. So this is really interesting, really great for everyone. The other thing for this week, and actually kind of ties into our main topic
[00:03:25]  today is I released a new article and it was looking at the size of JavaScript frameworks. And this sort of ties into the conversation about partial hydration because islands and partial hydration is
[00:03:42]  sort of like the next extent. But I'm going to take a couple minutes here and kind of review this a little bit just in case anyone had missed this or could understand
[00:03:49]  what I'm really trying to say. Sometimes I write articles and I feel like the point is sort of missed. Essentially, what I did was I took this comparison that
[00:04:02]  Evan Yu had done back in May, and he was basically comparing Svelte versus Vue in terms of component size. And the way he did that, let's see
[00:04:21] , I mean, I can probably pull up the original here, but the way he was doing that was through basically taking that classic to do MVC example. Every framework
[00:04:32]  has implemented it. And he separated the vendor code from the code to actually make the to do MVC. And in the case of Svelte and Vue, these
[00:04:39]  are just single file components to do it all. And what he ended up doing was essentially just looking at if he took that vendor chunk and then multiplied the number to do
[00:04:55]  MVCs, he could kind of see how the components code scaled versus the vendor or the library runtime. Because obviously with Svelte and Vue, there's quite
[00:05:10]  a big difference. Vue runtime is almost 17 kilobytes. Svelte is 1.85 kilobytes, right? So 2 kilobytes versus 17 kil
[00:05:23] obytes, or, you know, rounding up 20. Like it's almost 10 times larger. Obviously component size is a real consideration because you only pay for the cost
[00:05:31]  of runtime once, but he wanted to see at which point they intersected. This test or approach is a little imperfect. And admittedly, you know, someone does a
[00:05:40]  lot of benchmarking. I was aware of that and sort of, you know, cautious there. The thing you have to understand is especially with compression, like Brot
[00:05:51] ley or Gzip, common things will get compressed even better. Like if you use state in five components, you know, that use state will be able to compress better than
[00:05:59]  if you compressed one component and then multiply it by five. So keep in mind, this is all framers are kind of affected by this to a certain degree. It's
[00:06:07]  possible that Svelte is even the most affected because of the larger size. But, you know, what its template gets generated to, but essentially the takeaway from this
[00:06:18]  original one was that look, even though there's this huge difference in runtime between the -- I will zoom in a bit so it's easier to see for people -- between the
[00:06:29]  17 from Vue and the 1.85 from Svelte, the component size for Vue was 1.1 kilobyte versus Svelte's 1.8
[00:06:41] . And that doesn't seem like much. But that's a 70% difference in component size. And that adds up pretty quickly. They're almost double, you know
[00:06:51] , essentially for every component. And in fact, at the point of 19 to 2 to-do MVC apps, the difference in Vue and Svelte has been
[00:06:58]  eliminated. And obviously, a to-do MVC app is not the smallest component. And the interesting thing is I think Vue versus Svelte, this kind
[00:07:10]  of comparison, is not bad because essentially they're both single file components. Essentially, you're used to kind of jamming a lot of logic in that single template. If
[00:07:22]  you use something like React, you know that you split stuff into lots of components. And part of that is because the way the update model works, components are the route
[00:07:29]  of updates. That's true in Vue and Svelte. But generally speaking, because of the reactivity and the way they approach the splitting, they don't care
[00:07:38]  about as much. It is true that for Vue that actually has been a performance concern because they are still a VDOM underneath. But they have other ways of mitig
[00:07:47] ating it. It's interesting. But essentially, for people who use Vue and Svelte, a to-do MVC might be considered a component or a
[00:07:55]  large component. Mentally, if you're a user of something like React, I would just multiply all those numbers by about three to get a feeling in terms of your perspective
[00:08:06] . The components are not the same to everyone. And I think that's kind of important to understand. So essentially speaking, whether it's 19 to-do MVCs
[00:08:15]  or, you know, 57 components, that's essentially where that trading point is. It's not impossibly hard to picture that we'd get there. And I thought that
[00:08:28]  was interesting. So I was like, okay, let's add solid to the mix for the comparison. But after I did that, and obviously solid's kind of a sweet
[00:08:36]  spot there, I was like, you know what? I think that Preact and React should be in this. Actually, I wasn't the one who pointed that one
[00:08:46]  out now. On Twitter, I was kind of prompted. I was like, where's React? And I was like, okay. And the truth of the matter is,
[00:08:54]  since I put out this article, people have asked for like a whole bunch of frameworks. But honestly, I just took the -- Evans used VEAT and I just took
[00:09:01]  the ones that I had easy access to VEAT templates. So that meant solid, which I had my own VEAT template and the ones that were all part
[00:09:07]  of the starters. So, you know, I wish I could do more of it. It is what it is. Especially because I put this together pretty quickly. But the
[00:09:14]  thing was, my suspicion was that Preact was actually going to be the best in this comparison. Because VDOM compilation actually reduces really small, because it's just
[00:09:28]  a bunch of function calls. And Vue is VDOM, so it does that translation. But I knew that solid and Svelte did more. So, there
[00:09:40] 's more to this comparison, obviously, because state management makes a difference. Like, libraries based on mutation have less code. Immutable stuff, you do all that structural
[00:09:49]  cloning, you know, like spreads and stuff. You know, I can actually show you exactly what I'm talking about. Because I ended up having to implement React and
[00:10:01]  Preact myself. And the reason for that was -- let's see if I can find a Preact example here. The reason for that was all their official ones used
[00:10:10]  classes. So, their actual to-do MVC examples were pretty large. They were not as large as Svelte. But they were like 50% bigger than V
[00:10:18] ue. And I knew if I just took that, I'm sure I'd show that like, yay, solid is really awesome. But I don't feel that's really
[00:10:26]  representative. So, I wrote the smallest possible Preact and React implementations that I could reasonably do, just because I wanted to really be representative. Because I know that hooks
[00:10:37]  are really -- are much smaller than class components. And I know that the JSX compiles smaller. So, I knew that I'd be able to optimize it. So
[00:10:44] , I took the solid one. But what I wanted to point out here is that -- let's see here, if I can show you like a state change app. Yeah
[00:10:50] , look at what it takes to like, remove or edit a to-do in Preact or React, right? This is just -- set store here is just like a
[00:10:58]  use -- I copied some solid, some of the naming's wrong here. But it's literally a use state. Just so you have that reference. But essentially, if you
[00:11:09]  have to edit a to-do, you basically have to map -- I'm cloning the state, mapping over the to-dos, finding the one that's the
[00:11:20]  one that I want to edit, and then merging the values together. This sort of structural cloning is actually fairly large and something that's pretty common in, you know,
[00:11:28]  these kind of immutable libraries, right? So, you can immediately see the difference in this code. Like, honestly, the JSX compiles really tight, which is
[00:11:35]  why they're small. But, you know, this example 223 lines, or whatever, for Preact and React. Like, they're in that kind of range
[00:11:43] . Whereas, like, solid, which is basically the same, but a couple differences. It uses components for control flow, and it has this nice store, like, syntax
[00:11:53] , which is closer to mutation. They kind of compress it, where it uses this path syntax to do stuff. It ends up compressing, like, much nicer in terms
[00:12:02]  of writing less code. Now, in this -- because of how powerful that syntax is, solid actually might be in contention with self for writing the least code. But
[00:12:13]  you can tell when you get into Svelte review, stuff like mutations are -- like, where's our remove to-do? Items, slice, concat list
[00:12:22] , yeah. Like, or where's edit? Edit's probably the best one, if I can find an edit one. They might be doing it. And I'll
[00:12:30]  edit it. No. Submit. Filter. I didn't really review too closely what they're doing here on the view or Svelte one. But let's see
[00:12:40]  if we can find it. my edit to-do in this example is, like, when you toggle. Yeah, I mean, you get simple stuff like just,
[00:12:56]  like, one-liners instead of all that structural cloning. To be fair, I could have separated the to-dos, I guess, into separate state objects in
[00:13:04]  React, like, separate things. But then it might have been more fun in terms of serialization approach. I don't know, because then you'd have to,
[00:13:14]  like, write -- sorry, I'm getting into too much details. I'm kind of rambling. But my point is, yeah, I mean, you can see,
[00:13:20]  actually, in terms of line counts, it's solid and Svelte are actually very similar, as well as -- and view is pretty similar too, probably. Yeah.
[00:13:29]  Versus React and Preact ones. But the key point was that I shrunk it down so that it was comparable. And in the process, what I actually managed to
[00:13:38]  do is have Preact and React have smaller components in solid, just slightly, because that is pretty much the reality of it. It's felt at 1.8 and
[00:13:48]  view at 1.10. And that is pretty typical here. And you can actually see, in order to get hooks in Preact, they have to add the hooks package
[00:13:56] , which actually makes Preact larger. Preact really granularly bundles stuff, which is kind of interesting, because, you know, they advertise a 4-kil
[00:14:06] obyte framework, right? And when you look on Bundlephobia and look up Preact, you'll see that Preact is 4 kilobytes. But obviously
[00:14:18] , when you look up solid on Bundlephobia, it'll tell you it's 6 kilobytes. And you're like, oh, so Preact's smaller
[00:14:25] . Well, as it turns out, if you're using hooks, using kind of standard stuff that you typically be used, solid actually is smaller than Preact. Not
[00:14:34]  by much, but just slightly. But the components are smaller than Preact. So this is pretty -- I was pretty happy with how the ranges are here. And when I
[00:14:43]  did my comparison, you could kind of see that Preact and Solid really stand out in terms of size through most of the range. In the beginning, Svelte
[00:14:54]  is smaller, but once you get to five components, Svelte is already bigger than these two. And once you get to, like, 20 components, Svelte
[00:15:04]  and Vue react at the same time. And by the time you get to between 40 and 80, somewhere in here, Svelte has overtaken React, surprisingly.
[00:15:14]  So it's interesting how size scales. 20 components. Now, these are to-do MVCs. Do you need 80 to-do MVCs on your page?
[00:15:24]  I mean, some people are kind of thinking, oh, well, I have a big app, then Vue's got to be the way, right? The thing is
[00:15:31] , once you've loaded the initial page, you're kind of scot-free. Like, not every internet connection is the same, but you essentially have at your fingertips
[00:15:43]  the ability to choose when you load that JavaScript. You're not blocking anything. People are just doing their stuff and you can kind of go, oh, I'm going
[00:15:51]  to preload that. Or, like, basically, even if it takes, I don't care, it takes five seconds in the background. Unless someone, like, immediately
[00:15:58]  clicks as soon as the page loads, you're okay. And obviously, people have data considerations, but none of these frameworks are are that big in a reasonable range.
[00:16:10]  Like, how many to-do MVCs do you need on an initial page, you know? Or even on the second page, you know? Like, how much do
[00:16:17]  you have to actually load in a single chunk? And I'm pretty sure the answer is not 80. I did kind of do the inflection point analysis, if anyone
[00:16:28] 's interested. And basically, Preact was quite impressive. It's all in Preactor, like, neck and neck, pretty much until about 40, it starts flooding.
[00:16:37]  But like, in the end, it's like a couple kilobytes off, like, no one's going to sweat over it. But it means that, basically
[00:16:43] , from 0 to 3, to do MVCs, South is the smallest. From 3 to 10, Solid's the smallest. From 10 to 113, Preact's
[00:16:53]  the smallest. And then if you have more than 113 on the page, then View is going to be the biggest. Basically, after that point, React never intercepts
[00:17:03]  with anyone. It does intercept with South and Solid, interestingly. As we saw Svelte and React intercept. Right? Whereas, you know, Solid, it's
[00:17:20]  1080 to do MVCs. It's pretty much never intercepts for any point. You can be confident if using Preact or Solid or View, they just never intercept.
[00:17:31]  Yeah, this isn't about the community. And I'm glad that the narrative has changed about Svelte to a certain degree. Because when it came out, this
[00:17:41]  was the whole narrative, you know, disappearing framework, fastest performance and stuff. It's hard. When you come up with a framework and you're like, I'm the
[00:17:48]  smallest, I'm the fastest. That's a lot of pressure. You know someone is going to come out who's smaller and faster. It's going to happen. It
[00:17:55] 's an inevitability. Right? So marketing yourself on those points is pretty dangerous. Because if someone does, it's like something that takes away a little window to your
[00:18:05]  sales because that was your selling point. You know, we, every time someone tries to sell on performance, you know, give it a little time and someone will come up
[00:18:16]  that's faster or, you know, kind of shows them up. And I'm sure some of you are like, like, but solid, right? Like, isn
[00:18:26] 't that what you're selling it? Um, I, I guess so. You know, I made maybe the same mistakes at the beginning of doing so. I feel
[00:18:36]  okay with it a little bit. Mostly that solid approach has been the fastest for frameworks and benchmarks for about five years now. Um, I basically, like I did, I
[00:18:49]  mentioned before I wasn't the first person to use this approach, uh, SJS and surplus was, um, and that, so basically if you go back in time
[00:18:59]  before Svelte was ever even created, um, a library like solid was already more performant and, you know, smaller in the ranges that I'm talking about,
[00:19:09]  basically. This isn't as essentially like, um, there, there was already technology that was faster before Svelte ever came out. So I, you, you feel
[00:19:18]  a little bit more confident to go on those claims, but in general, I'm glad that the, that, that, you know, the, the focus kind of
[00:19:26]  comes off of it. I tried very hard to, to, um, to kind of change that narrative a little bit, because even it's a shadow that we have to
[00:19:35]  get out of with solid. Yeah. I mean, it's, it's the easiest way to, you know why? Because empirical things, things that can be measured are
[00:19:46]  always the easiest to kind of thing, you know, Svelte's demos, they are the smallest, you know, I mean, I, I can name a
[00:19:53]  couple of frameworks that are smaller to do NBC's, but like, it's not completely about that. Like what you, when you're the smallest or you're the fastest
[00:20:01] , it's a legitimate claim. Even if, you know, it's just in a couple of benchmarks or all the benchmarks, but like essentially like it, it's something
[00:20:12] . And I'm glad the narrative has changed because the truth of the matter is the DX is what's interesting. And I think that's the more, by far the
[00:20:20]  more interesting debate and discussion to have, right? Like I like explicit APIs mostly, right? I'm a big fan of React. Everyone knows that. So like, that
[00:20:29] 's why, you know, I'm, I'm partially challenged by Svelte and, you know, I've come to really respect React's philosophy, but you
[00:20:38]  know, the fact that this exists and it does that, you know, is really cool because it lets us explore different sorts of spaces and see what happens. You know,
[00:20:49]  with Marco, which I'll talk about a bit more in the stream a bit later, I've been, you know, we've been really looking at reactive activity as a
[00:20:58]  language, very similar to what Svelte said, but you know, we wanted to kind of look at some of those limitations and do more. And it's partially
[00:21:04]  because Svelte has kind of pushed the limits that really started considering and talking about these kinds of things. So I, I'm, I'm pretty stoked in general.
[00:21:12]  And if I, it's in everyone's best interests to try and portray things in as much of a fair and reasonable way as possible, because otherwise you don't see
[00:21:22]  the opportunities to change. Right. Um, I realized after I wrote this article that this might be another one of those ones that gets the Svelte community, like on
[00:21:31] , on, like I'm on their hit list. Um, I've, I've had some tension with them before, but like rich and, you know, the,
[00:21:37]  the actual core contributors, they, they know what's up, right. Without being able to kind of have this sort of discourse, this kind of analysis, you don't
[00:21:44]  find the opportunities to improve and look at how you can approach things. Right. Um, benchmarks aren't really realistic things necessarily in like how it works, but it gives
[00:21:56]  you avenues to optimize and improve what you're building. And I think that's really important. Um, and this, this was cool that Evan gave us this gift of another
[00:22:06]  sort of comparison to, to work off, to work off. He kind of standardized what this is. And I I'm pretty, I'm pretty happy about that.
[00:22:13]  Um, generally though, um, I realized that the most valuable piece of this analysis would actually come from reversing the, the, the, the, the table a little
[00:22:26]  bit, instead of going like how many, how big is N number of to do MVCs? Cause I said, you don't know how many to do MVCs you
[00:22:36]  necessarily want. Let's change this around. Let's look at performance budgets in size. And this is pretty familiar for me because as I said, at eBay, we
[00:22:45]  use performance budgets on our pages, which might seem kind of crazy for you. You know, when you consider how feature scale and health stuff has kind of progressed over the,
[00:22:54]  over the time, but you can picture most of the pages that eBay existed in the Java land at some point. And they had an idea of what that performance should be
[00:23:01]  back in, you know, the two 2010, let's say, or 2008 or whatever, you know, that should be. So they were, they were tracking it.
[00:23:08]  So for, for eBay to move to node JS, they actually had to be like, oh, we didn't lose performance because performance equals sales, like direct correlation. And
[00:23:16]  this will talk, this all ties into our topic today. And if you take this further, you know, that's what drove the creation of Marco was looking at how
[00:23:28]  can we keep those performance. So it's all the way till today, 2021, you know, we still aren't regressing from the performance budgets that we might've set
[00:23:39] , you know, a decade ago. So let's, let this table, I found really interesting because if, what should we be talking, we're talking just framework
[00:23:52]  and component code. Honestly, a lot of code is third party libraries, you know, sometimes it's formatting like moment and, and, uh, low dash, but it
[00:24:01]  can also be, um, you know, like the, the tricky part when you build a single page app is you, um, you end up like pulling in routers
[00:24:11]  and Apollo and what, like whatever other stuff you need to make your framework run. And that actually takes a bigger chunk out of your code than just your code and the
[00:24:20]  framework code. But so you, we should be looking, you know, at smaller numbers on this side. And I, that's why I've worked on this range because
[00:24:28]  the truth of the matter is for initial page load, which I said was the important part, we shouldn't be getting bigger than this. And what's really cool. And
[00:24:36]  the kind of conclusion that I wanted to all kind of get from this sort of analysis is that, um, you know, even on the, let's say the upper
[00:24:45]  end of a hundred kilobytes at this point in this range, all the frameworks are kind of the same. Like sure if you preact install, we'll get about
[00:24:54]  30% more to do MVCs, but like Svelte and, and react are almost identical. Like you, you got, you got a good amount of room here
[00:25:03] , right? This, it doesn't really matter. Like, what's the difference of a couple more components. Like we're talking like 10 kilobytes, 20
[00:25:10]  kilobytes, that's not going to kill you too much. You know, you should be looking at the other way, like less components rather than getting too big.
[00:25:20]  But what's more interesting is there is a whole different range when you, when you're looking at the sub 40 kilobytes scenario. And I think for e-commerce
[00:25:29] , you should be looking around the 40 kilobyte range, basically at that range, like react is just not even a viable option. There's like, you might
[00:25:38]  as well draw an X through it, three, three to do MVCs. You probably can't do enough. Um, probably might not be true. And that's going
[00:25:44]  to, that's why we're talking today about, um, partial hydration, but essentially you can build full app experiences of 40 kilobytes pretty, pretty easily in
[00:25:52]  almost any other, these frameworks. And that's still kind of with us to do from this, uh, single page app perspective. And that's really what I want to
[00:26:05]  get into today because this conversation about partial hydration and about islands is really an extension of the debate that's been going on for years and on Twitter and whatnot about single page
[00:26:20]  app versus multi-page app, right? People have been getting in on that conversation recently and kind of championing it. It's a, it's a hot subject.
[00:26:28]  I really enjoyed, uh, I mentioned last time Rich's video where he gave a lot of good examples of the differences in terms of like real world things you'll feel and
[00:26:36]  challenges with going with either approach. Um, but the, the truth of matter is a lot of the, those can be mitigated or depending on the type of app you
[00:26:48]  have might not matter. Like, are you building an app? Are you building a website? There's, there's different deals. And even though this is a whole
[00:26:54]  range of possible solutions, uh, essentially there, there are different, there, there, there can be different objectives here slightly. And while I agree looking for the one tool
[00:27:07]  is the way we should be going, we're, we're not really there yet as much as you know, some of the spot frameworks are kind of me too-
[00:27:14] ing in right now and being like, yeah, we, we, we care about your JavaScript and they do like, look, they're small enough. Like, I react
[00:27:22] , solid, svelte 20k range, like even 40k range. They are small enough to, to do a lot of stuff as a single page app.
[00:27:32]  If you're scaling that to something bigger, you should be, and page load matters, you should be thinking about other ways to reduce JavaScript and multi-page is not a
[00:27:44]  bad option. So that's kind of the preamble to get into the conversation today. Um, so, um, we will be getting started now and I'm
[00:27:58]  going to kind of shift the con shift this over to this whole topic of, um, how should I put it? Um, islands or hydration or whatever, whatever you want
[00:28:13]  to call it, because that is really the core of what our discussion is today. It's basically this concept of shipping only parts of the page that are interactive. And
[00:28:29]  there's a lot of ways to do that. And there's a lot of confusion and let's, let's try our best here to clear that up. To do that
[00:28:35] , I'm going to actually go a little back in time. I've, yeah, I keep on talking about my age because I keep some, I feel very conscious of
[00:28:46]  it. Web dev came up with myself and my generation, so to speak, I built my first webpage at probably about 11 years old, maybe, or maybe 12 years
[00:28:59]  old. And, um, honestly, within two years, when I was 13 or 14, I was building websites for local businesses. Um, for me, I actually started
[00:29:10] , I was building websites for my band and bands I was in. And, um, I started playing bands when I was about 12 as well. And everyone needed a
[00:29:18]  website. That was the thing. Um, the reason was this is 1995, 1996. Um, everyone was just, every business needed to get on the web. And honestly
[00:29:29] , it wasn't hard to do, right? Websites were a little bit more than static pages. And I said, forgive the history lesson if you're already kind
[00:29:39]  of familiar with this stuff, but I, I, it's, it's important for what, what I'm getting to. And essentially all we did was create a folder
[00:29:52]  full of static HTML pages. And we just write in our HTML code, FTP it up or whatnot. And essentially people would just go to the site and load the page
[00:30:01] . And most of your experience was actually based around, um, the, the landing page. Like if you had a hot page, you basically had like an image map
[00:30:10] , it was called where you just put like an image on the screen and it had links built into it and you kind of layered it on top. And that was like,
[00:30:17]  that was like the epitome of where you want to do it. Otherwise, uh, otherwise, basically it's, um, how should I put it? Otherwise
[00:30:30]  it w it was basically these really simple table based layouts. So I'm going to show you a website right now. Um, this is space jam. And actually my band
[00:30:43]  had a site very similar to this. You can see it's image map for the links and essentially you can see 1996 space jam came up. This, this is,
[00:30:53]  this is the epitome. Like usually maybe you had a counter to see how many people visited the site, but you know, clicked here and look at this wonderful page
[00:31:00] . It's got some table layouts, awesome colors, cool background. This, some people look at this, like how retro it is. Like literally every website was like
[00:31:11]  this. I think I, I found, I tried to find my Mr. Solid website on tripod. Um, Oh, and I think I took it down with a redirect
[00:31:20]  link. Yeah. Yeah. Damn it. But you could even tell by the font colors in the background here that like this, this was the, this is the time period
[00:31:30]  that, uh, that this stuff is going on. And they're basically people were happy with this for some people. This was like the, the high point of web
[00:31:38]  dev, because literally you just throw some files down, maybe wrote them up a notepad and like you were on the internet, you know, a 12 year old could
[00:31:45]  do it. And the, the hardest thing that I actually came across was something called a guest book. This was super common, um, in, in these older sites and
[00:31:53]  you don't see it much anymore, but essentially it was a way for you to write a comment and have people kind of like, just like say, like I was here
[00:32:01]  kind of thing and like have a bit of a discussion and suddenly your static site wasn't good enough. So you need to come up with ways that people could, you
[00:32:10]  know, take a form post and then write, rewrite your HTML file. And then now that'd be the new page that you, that you serve out statically. So
[00:32:18]  sites felt static, but when an end user did an action, it would actually rewrite the, the, the HTML static file on the fly. And the next time it
[00:32:27]  reloaded, you could see the new comment. Um, and that was kind of what we're doing. We, we've used some, there's like a CGI bin
[00:32:35]  and we use like pearls, pearl scripts to, to have it write the HTML. So bit of a history lesson, but that's kind of like the web from like 94
[00:32:43]  through 97 kind of time period. Just these kinds of, these kinds of sites, maybe a guest book for some interactivity, um, where you had these pro scripts.
[00:32:52]  Um, obviously we needed more interactivity, um, and pearl, you know, evolved into, you know, PHP and.net and whatnot. And I programmed web
[00:33:02]  during that time period as well. Um, essentially the rise of, uh, server rendered pages, which aren't too different from this. The only difference is now suddenly when
[00:33:16]  you refresh a page, it was on demand. Instead of serving directly from a file system, you'd have a server, um, capture that response and then render the
[00:33:25]  HTML and send it up to you. And I'm sure everyone's, you know, familiar with this kind of mentality, but basically the, the first thing about this,
[00:33:34]  and sometimes you can find some like old websites, maybe some government sites less so common now, but like travel agencies I used to work on too, where let's like,
[00:33:43]  you can picture something like, do we have like an Airbnb kind of scenario here? I don't actually. Yeah. See these cascading drop downs where you'd
[00:33:56]  like go, let's select a location. Um, Miami, not nearby skirt. What my let's go Miami. Okay. And you change it and then you can see
[00:34:06]  what dates and then, you know, you do all this and then you change your information in this initial dynamic stage. Like this, this example wasn't perfect because they
[00:34:18]  already knew Florida, but I was kind of hoping that if you had like a dropdown and then you picked your country and you picked your city, you'd have to send the
[00:34:25]  whole fricking page. You'd basically have to refresh the whole page to load the new data. This was very common. You just like, you'd be interacting in a
[00:34:31]  form and the whole page would reload and under you with the new data. And then you get the, you basically fill in the next dropdown, which you filled out in
[00:34:39]  the new, send the page back and do this. This, this is, this is a good old dynamic rendering. I, it's, it would be hard to find
[00:34:47]  a site that awkward these days, honestly. Um, and I'm glad we're, we're gonna pass that, but essentially this was, this is the, this is
[00:34:57] , this is like rails. Like that, that was what it was like Ruby on rails was like big, um, during that time period, because essentially let you scaffold
[00:35:06]  your app really, really easily, really, really quickly. If you've ever seen, um, the video from DHH, it was like amazing. He showed how you
[00:35:14]  could the whole app with like database and everything like 15 minutes. Going a little bit further and it's, it's important to have this historical context, because otherwise you
[00:35:25]  don't really get where the, like the, the MPA arguments coming from it. Um, we kind of realized that sending the whole page was really bad, honestly,
[00:35:37]  as much as people didn't, but we had a problem. This second generation of web developers who now kind of coming in kind of enterprisey didn't like using JavaScript.
[00:35:45]  They thought JavaScript was dirty. It was like, you know, not for real programmers. Uh, I I'm dead serious. And essentially what ended up happening was they
[00:35:58] 're like, okay, well, how can we make our page not completely reload every time we change a dropdown. And essentially we, we, at the same time that JavaScript
[00:36:09]  got Ajax or asynchronous calls in the browser to, you know, to be able to fetch data, you know, after initial load and do this asynchronous data fetching
[00:36:17] , they were like, okay, that's our solution. We can take our server rendered app and instead of rendering the whole page, we can render a partial and maybe,
[00:36:27]  maybe this is just easier to visualize than anything. So I'm going to, I'm going to see, try my hand here at AccelerDraw. Let's,
[00:36:35]  let's pretend we got our page here, right? Sweet. We got, we got a page and, um, essentially you might have, you might have on your
[00:36:46]  page. Um, I mean, this one isn't as hard to imagine, but maybe, maybe you got your header. Maybe you got a, maybe you got a foot
[00:36:55] er and let's add a sidebar and what else can we do here? And let's add maybe a banner section, a nav bar and a content section. Okay
[00:37:24] . Now pretty typical website, let's say. Generally speaking, what, what would happen is let's say that you created, um, second, I love how you
[00:37:43]  can actually just clone it. Um, let's say you created like a form on, on, on your, uh, on your page here, right? So you got
[00:37:52]  some input fields, right? And essentially what you would do is you'd server render the whole page, right? And, and, and this would all be done in
[00:38:08]  your rails or C sharp or whatever, whatnot, but you might have broken your page into partials or components. So let's say this whole section down here is a component
[00:38:19] , right? This, uh, this, this content section. So basically if you, if you select something on the dropdown and then you needed to have a casc
[00:38:28] ading dropdown, let's say that has a dependent value. So that this is the first one, let's say is country, right? And then this one is city as
[00:38:37]  this essentially what you could do is define this component as kind of like a updatable panel. Let's say, and this is this, I'm going to use.
[00:38:47] net approach here, but essentially what they would do is when you updated and you realized you needed to get new fresh data, it would own, it would basically send a request
[00:38:59]  to backend going, I need this partial. And it would send the data related to that partial to the backend. And then the backend would send back just the HTML for this
[00:39:08]  partial and the new updated data, maybe some updates from the database, maybe the missing data. And then it would replace this panel with JavaScript, um, with the new
[00:39:19]  HTML and the new data that you fetched. But basically you could write your code as a server wrap and then have it just replace this little section. When you did the
[00:39:30]  dropdown, it was still clunky as hell because you have to restore focus. And I mean, I guess with the dropdown, it's not too bad. You drop it
[00:39:37]  and then you come, you're done. And then it, but essentially it would, they basically had this way of just replacing the section of the page. And this
[00:39:44]  is not new technology. This is like 2006, they were doing this. Um, and that kind of became, um, the de facto way to solve this for a time
[00:39:55]  being. The problem was it was still clunky as hell. It was still slow because you had this problem. Like, like if this form needed all the data on
[00:40:01]  the page, like maybe this is a user section with all the information and like you'd be serializing and sending back this data back and forth, like a ton, like
[00:40:14]  it got nasty. I worked on some really big, nasty.net projects. And, you know, this, this, this was like the way like they did it because
[00:40:23]  you didn't have the right JavaScript. You could use your backend templating language here to define some controls. And then they'd be like, Oh, on click refresh
[00:40:33] , like redraw it. Like you could keep your server side mentality and have it just replaced these sections. Yeah, exactly. That that's, that's the idea
[00:40:46]  here. And this was, this was the go-to solution for, for definitely a few years there. It's funny because when I see turbo and I know they've
[00:40:56]  moved, got better at this. And I see like what the rails community is doing. It's a variation on this. This is not a new technique, right? The
[00:41:05]  difference is here. We had to make these clunky kind of update panels and, and whatnot. They've, they've gotten to a point now that they've made
[00:41:15] , been able to make it more granular and like every button is just individually wired and it's, it's more efficient, but essentially, you know, and you can nest
[00:41:25]  update panels. I'm sure like, you can say like, this is a panel and then you can say this whole thing's a panel. Like, uh, like,
[00:41:33]  uh, yeah, let's just, let me get another color so I can show you what I'm talking about. Like, right. Cause like, sure. This is
[00:41:39]  a panel. But then maybe this whole thing also is a panel and you can kind of see how you can kind of onion it. Because if this whole thing's a panel
[00:41:50] , you can, when you navigate, you can replace the page and you, and basically you can keep the, the server render stuff on the outside that didn't, didn
[00:41:59] 't ever change. And you can do this all with almost writing no JavaScript, right? They've, they've kind of improved it a little bit now because their,
[00:42:06]  their approach is using libraries like stimulus or Alpine to kind of just add some JavaScript for like some forms or stuff like little increments. But the challenge and difficulty with this
[00:42:18]  pro approach, um, is essentially you have two apps, you have your rails app and sure this, these partials work well, but enough, but when you want
[00:42:33]  to like have the interactivity, now you have a stimulus app or an Alpine app on top. And that's, as I said, nothing that I've seen in
[00:42:43]  the last decade makes me want to go back to this. I mean, it's, it's fine. They're, they're really stoked that we're looking at
[00:42:48]  the server again, but this is, as I said, people got lost at their different time periods for me. I'm a little bit of that old school guy who like
[00:42:57]  fell in love with that, the space jam time period. I love that. I could just like view the source and see the JavaScript. I make fun of it a lot
[00:43:04]  when people talk about going back to no tools, because I don't think that's practical, but like for me, that was web dev. You just throw some JavaScript
[00:43:13]  on the page and a simple HTML. This phase for me, I call the dark ages. That's pretty strong terms, but it was when I got started professionally, the
[00:43:23]  convoluted NIST that we went through to avoid JavaScript was insane. And picture having sites basically designed to do full page reloads and then running part, like different
[00:43:38]  paths, partially through the same code in order to have it run partials instead, they've made things a lot better now. And there are use cases for this, but
[00:43:48]  I just wanted to kind of highlight, this is if, when people are talking about turbo, it's, it's basically the next step on this, making it smooth or
[00:43:56]  even Phoenix live view, essentially the ability to kind of stream in and replace in parts of the HTML from the server, basically what they're calling the smart server technologies.
[00:44:05]  It's fine, but there's a reason people like rest and they like statelessness. Like this isn't an approach, but it requires, it requires the network to
[00:44:20]  be like in your back pocket. And I think there are times and places and the whole MPA argument is saying that, you know, it's okay to reload pages
[00:44:33] . But if you're trying to make an app, doing stuff in JavaScript is just going to be better. Like it's going to be faster. This, this is
[00:44:43]  clunkier for like this, a spa like experience. I think there's probably a happy middle ground, but just, I wanted to kind of start here because this is
[00:44:55]  where the kind of old MPA thinking is rooted, right? Either you're doing these partial replacements or you just replacements or you just render your page and you
[00:45:05]  have some, something like stimulus or Alpine or a little bit of JavaScript and vanilla just sprinkled on. The funny thing is at the, at the time this was going
[00:45:14]  on, we ended up with the complete opposite paradigm coming up on JavaScript. And for me, this was a light and a revelation instead of sending this page like this to
[00:45:30]  the, to the screen, we sent nothing. We sent a blank screen. And instead we had JavaScript render the whole thing. What's, what's really cool about this
[00:45:43]  is as you can imagine, it's a return to just putting those files in the FTP. And as I said, I love dabbling in a little bit
[00:45:52]  of JavaScript back in 97. And now I could do that again, early JavaScript frameworks like jQuery and jQuery was still mostly manipulation, but like knockout JS and backbone
[00:46:04]  made it possible for us to describe full views and basically just write our apps on these static pages. So deployment was easy. Again, you didn't need the whole server.
[00:46:13]  You didn't need this convoluted partial multiple app managing thing. It was really great. And the best thing is once you load the JavaScript, you could do stuff
[00:46:23]  you could never do before. Like just, you know, because the Ajax should be like loading data and replacing stuff, changing this dropdown to get to this dropdown happened kind
[00:46:33]  of seamlessly in the background. It was like magic. As I said, some people on the MPA side will be like, oh, you know, you know,
[00:46:39]  it's what disposities improve the user experience by like 5%. There was an article I read recently that said that it was quite comical. No, like for this kind
[00:46:50]  of stuff or like really interactive things, you know, your Twitter's and Facebook's world, it's game changer. And that was all fine for a while. So
[00:47:00]  basically, so far, I've introduced three mechanisms. Actually, four mechanisms, completely static, where you just have these rendered pages in a little JavaScript server rendered with the
[00:47:19]  same. Then the sort of update panel, replace sections with HTML approach. Which, you know, is essentially, I don't know what you want to call that these days
[00:47:35] , like the turbos of the world and the Phoenix live views. And then client side rendering, where you send a blank page, essentially, have the browser draw it
[00:47:48] . As you see, there's a lot of ways to make websites. As someone saying that it's a, it's a, what do you call it, a spectrum
[00:47:59] , they're not lying. But it's a little bit trickier than that. So this, this was fine. And it was the status quo for, yeah,
[00:48:11]  I don't know, five years, we basically had this renaissance on the client side of different technologies to do better client side rendering. And then, you know,
[00:48:21]  all the way through to react. So I'd say from like 2009 through 2014, 15, by then, most of the other low, lower, less popular options kind of
[00:48:31]  died off. We basically had like crazy burst of frameworks and technology and new techniques. You know, that time period was one of the funnest to kind of develop
[00:48:42]  through because it wasn't, there was no single thing that was totally oppressive. So any framework goes, and it was very wild west, solutions are missing. So you
[00:48:51]  could just kind of build what you want. And also the period time period that I fell in love with knockout.js, obviously. So there's a, we
[00:49:00]  were building apps and no one really cared until suddenly everyone cared. Essentially it got to the point where people were like, well, we want to use this for enterprise. We
[00:49:10]  want to use this for different types of sites. We want to use this for e-commerce, which like things this is not made for. So we went to server side
[00:49:16]  rendering. So most, most of you probably seen server side rendering, essentially you almost run the app this again, the same. So you, on the, on the
[00:49:26]  server, you run the app and you render it, you send the HTML and then you run the app again on the client and you hydrate it. The earliest forms of
[00:49:37]  this was like really bad where we just blow out the HTML and replace it on the client. So there'd be like a flicker. The MPA folks will never let
[00:49:44]  you live that down. It has not been that year way in like, I don't know, six years, but essentially you run the app twice so that you can
[00:49:57]  fill it in. So you might go to the server, grab all your data and basically render a page, ship the page and the serialized data so that when the
[00:50:12]  client library reads that data, it can basically render the same page. It knows not to actually do any rendering, but it lets it pre-fill all its state so that
[00:50:19]  when you do the next change, it can pick up where it left off. It essentially goes through this full render process. And this will be important when I talk about some
[00:50:26]  of the framework solutions in a little bit, but essentially this is what we call SSR these days, if you want to go on the acronyms. This is
[00:50:37]  our fifth method that I've gone over here. I feel like I, do I have text here? Can I just like start typing stuff or does that not work? How
[00:50:47]  do I do this? I'm not familiar enough with this program to know. Yeah, can I go? So we have, oh, pick a better text color,
[00:50:55]  line. Let's go. Static. Static. We have dynamic server render. Static HTML, dynamic server render. What was next? dynamic server plus update
[00:51:26]  panels, I'll call it. Client side render. Let's go. Client side render. And JS server render. I think that's all the methods I
[00:51:48] 've discussed so far. But the biggest problem with this is it's freaking huge. And you can already tell you're doing a lot of work. So essentially as apps
[00:52:01]  scaled, you start paying the price like triple, like you paid the price. essentially. It's just a lot of JavaScript. So we tried to find ways to mitigate
[00:52:22]  this. And that isn't necessarily. I'm taking this from the SPA perspective first, because there were other technologies developers in this time period, which I'll get
[00:52:40]  back to. But more or less, we were kind of talking about this kind of progression of realizing that as our apps got bigger and more complicated JavaScript, they didn't actually
[00:52:52]  make sense for everything, yet we're still trying to solve it. So the next big one one that I'm going to talk about is static generation, which we call
[00:53:06]  SSG. And the way SSG works is, funnily enough, it isn't that different than the SSR that I just described, essentially. Except now,
[00:53:20]  instead of the server doing this on demand, we generate stuff that's more like the static HTML. But once you're in the client, you essentially pick up like a
[00:53:33]  single page app anyways. I've demoed this in our previous streams. But the idea here is that you might render your site out to a dozen pages, or hundreds of
[00:53:46]  pages, let's say, like a user's page and one for each, or let's say, let's use store, you've got like product pages for each
[00:53:53]  product. But once you've loaded the app, you're still navigating. And this is, these are the kind of things you very common in frameworks like Next and Nu
[00:54:02] xt. And essentially, they've invented new terms that you might be interested in, things like ISR and whatnot. But it's variations of just deciding when you do that
[00:54:16]  rendering. There isn't anything too magical about this. You know, it's like, oh, do I render or do I serve this regardless of the approach we've
[00:54:29]  taken here? We're still rendering the whole thing in JavaScript, and hydrating the whole thing, and parsing it and shipping it all, and turning and having our single
[00:54:42]  page app. And the bigger and more complicated, the bigger it is. As I said, I showed you the sizes. For small frameworks, maybe it's not a big
[00:54:49]  deal. But essentially, same process, we're just choosing when they do the server rendering. So everything up to this point, I think, is what most people are
[00:54:59]  probably pretty familiar with. I know, I've been I've been talking a lot about this. But there is a different way, and a different approach. And that's
[00:55:10]  really one of the talk about today. And it's not based off single page apps like work is still being done on this side. One of the trends that we're
[00:55:21]  seeing on the SSR and static generation side is like doing partial, like saying that this route is static. So it doesn't use JavaScript. So we can send zero kil
[00:55:35] obytes of JavaScript, and then you basically don't include the script tag. And then when you click a link, then you might navigate to a page that does work,
[00:55:44]  like one of these that is dynamic, basically, that's sort of the solution that they've been looking at for MPAs, essentially, or multi page apps,
[00:55:52]  where basically, if you think about it, if you take a client rendered app, or not client rendered, server rendered app, even one generated by Next.js or whatnot
[00:56:03] , and just don't put the script tag on it, as long as the links and the post forms and all that stuff work, it is still essentially, you know
[00:56:16] , you've you've created number one, again, you've created a static HTML page, so it still works. So essentially, they were just sneaking, you know,
[00:56:25]  or dynamic render depending, they're sneaking one and two into five and six, as an opt in. That's basically the approach, you either have pages that pay the full
[00:56:33]  price, or you have pages that don't. And this is a very binary thing. I've, I've been discussing this a little bit on Twitter. And then there
[00:56:39] 's great tweet by my colleague from eBay, who's actually in the stream right now. Hi, Dylan. And essentially, like today, just kind of going like,
[00:56:54]  he kind of mentioned the fact that like, as much as, you know, the single page app frameworks are working on this and coming up with new solutions, like I'm
[00:57:02]  mentioning in Next.js. It's kind of binary, I think it's a great way to explain it's like, it's on or it's off. So what
[00:57:08]  can we do, you know, differently, like, if you're already willing to say that this page is static and forego all the nice stuff on, you know
[00:57:18] , the JavaScript and all the nice app-like features, can we do better than on and off? And the answer for that is most definitely. So let's,
[00:57:29]  let's start actually looking at the options. And we'll come back to this drawing and update it to kind of get an understanding of how this works. But, but
[00:57:37]  essentially, let's, let's, let's, let's change gears a bit, unless anyone has any questions right now, and start talking about some specific solutions and approaches
[00:57:47]  to this. And it's funny, I'm not going to cover these chronologically, because as much as I'd love to, some of the most advanced solutions here
[00:57:56]  are actually the older ones. So any, yeah, anyone got any questions right now? I've been talking nonstop for almost an hour. Otherwise, I will just
[00:58:09]  move on. All right. One last look at Space Jam before it goes away. Yeah, really a marvel. Okay, let's, sorry, not where I want
[00:58:29]  to go. Let's, let's, let's go to the next section here. And let's talk about Astro. Astro is relatively new. But I feel
[00:58:39]  like this is a good entry point for people who are kind of interested in this whole technology and approach. And it's because, yeah, Astro is not a revolutionary
[00:58:51]  concept. I love how they just put that right at the beginning. And not, not enough people describe their, their frameworks that way. I think, I, I think
[00:58:59]  that we need a little bit more humility in terms of mindshare in JavaScript ecosystem in general. Almost everything's worked based on the basis of older technology. In any
[00:59:12]  case, Astro is based off the idea of using manual islands. And by islands, I mean, literally like islands, you can picture an ocean with little, little,
[00:59:26]  you know, islands sticking out of it. If the idea is that you define some static HTML, and then you just say, put some components in those, and those
[00:59:39]  components are the dynamic interactive parts. I demoed this actually, a week or so ago, using solid, but I can show you again really quickly, because I just happened
[00:59:51]  to have it open here in the background. Essentially, the way Astro works is you might have a page like an index page, and they have their foreign, you
[01:00:02]  just write some HTML. I'm going to blow this up. So you guys, you can all see this a little better. Shrink down the debug. But essentially
[01:00:12] , you have your HTML page, you have a document, they have a format that lets you import some stuff, essentially, this page, you know, is just static HTML
[01:00:22] . And then, oh, you can just import some components. And in this case, this tour component doesn't get sent to the browser because it's just another Ast
[01:00:33] ro component. But you have the control of that. If you don't put anything on your component, it does not get sent to the browser. In this case, I
[01:00:41] 'm indicating that I want this component to load and run when it's visible. So if we run our Astro example here, and open it up on localhost. And
[01:00:58]  it opened up on the wrong window, of course. You can see a simple tour and then here is our counter hydrated by solid at the bottom, right? Basically,
[01:01:16]  they did not need to send the JavaScript for this whole page. And only sent the JavaScript for this one component. Now, this is not miraculous. If you've ever used
[01:01:28]  web components, you can do a pretty good impression of this as well. You can just put the web component on the page. The difference is that web component would be client
[01:01:34]  rendered. I mean, we have other means to do it now. But traditionally, it would be client rendered. And what we what we're doing now with is is
[01:01:44]  a little different. We're actually server rendering this component. And then we are hydrating it, but only this one component. And this makes it this makes a big difference
[01:01:55] , right? Because if we open up our debugger, and we have the network tab going, and we refresh the page, with Astro, oh, yeah,
[01:02:09]  this always is annoying because I'm in debug mode. I have to remember this. If you want to do the demos, you have to actually be in production mode.
[01:02:19]  So let's let's go NPM run build. And also have to not be used, should be using an incognito window. Because Grammarly likes to load
[01:02:33]  JavaScript in all my pages. So we can see if we can ignore that for a second. Actually, okay. So it loads a small 200 byte visible JS. Ign
[01:02:46] ore this hook JS. This is freaking, you know what, don't ignore it. It's not your problem. Let me open up a window here that is not going
[01:02:57]  to do that. And let's reload our page. Here we go. Essentially, let's do it like this. We load it to a small 200 byte script.
[01:03:17]  Let's disable cache. Let's make sure this is right. 200 byte, sorry, 700 byte script to load it when it's visible. But otherwise, scroll it to
[01:03:28]  view, then Astro loads some stuff, solid loads at small component. And basically, we've managed to reduce our JavaScript size on initial load, and even in general
[01:03:40]  a lot. And this is huge because we we saved ourselves from having to send all the component code for the rest of the page. So like, if you if you go
[01:03:49]  back to our Excel draw example here, you know, and our use of islands, essentially, I call this approach islands here. Yeah, essentially, we can just pick
[01:04:10]  a piece of our page, maybe, you know, one of these inputs or buttons, and just send the code just for that. And the rest of this just doesn't
[01:04:19]  get sent. And this is not if you're using a multi page app, we're re rendering the whole page on navigation. This is not unexpected. Like, if
[01:04:27]  you ever seen like a page on a store front, maybe you just need the cart to be interactive. And maybe just, you know, the buy now button, like,
[01:04:37]  your links will work because they just navigate to different pages, your form posts will work, you just need some small interactivity, like to update, you know, add
[01:04:46]  to cart, essentially, islands give us a really nice way of doing that. And it's when I was showing off the the Astro sorts code here, you can
[01:04:58]  see that this is just you basically have Astro files, and then you have the components and a few new frameworks are kind of doing this, this kind of approach of separating
[01:05:12]  it down. I think it's interesting. This does still suffer a bit from like the two app feel a little bit because you're like, okay, here's the Ast
[01:05:20] ro stuff. And then here's my framework components, it is lovely how you can just like, put in components from anywhere, and shrink your size, right? Because
[01:05:28]  if you go back to that original article and comparison I made, like, how many to do MVCs do you need on your page? If you don't have to actually
[01:05:40]  ship most of your page? That's that's sort of the idea behind islands. And it's really cool with Astro that you can just take react like, maybe
[01:05:50]  you may even react small enough. I mean, this is on the fringe, but maybe 40 kilobytes, three to do MVCs is enough for your page to kind
[01:05:59]  of be in a reasonable range. You might be wondering why I'm being so harsh on the size. But just read those articles by like, Alex Russell or Addy Osman
[01:06:11] i in terms of like the cost of JavaScript or this. If you care about people with slow devices, networks, whatever, you really should be aiming to keep that initial
[01:06:23]  page load under 130, which means you should be aiming to keep like realistically keep your components under and your framework code under this 170 to 100 kilobyte range. It's
[01:06:33]  just it's what you should be considering. Maybe if you're making a blog site, who cares? But if you're making a blog site, you know, use whatever
[01:06:40]  is easiest for you. But also maybe you don't need all this stuff, right? Moving on. So that's, that's Astro and that's Islands.
[01:06:50]  And as I said, Astro is the first to kind of come in here in modern JavaScript. It's not going to be the last you're going to see this because
[01:06:58]  this is it's hard to make this in a framework agnostic way. And it's really impressive what Astro has done. It is not hard to make this
[01:07:05]  for a specific framework, especially because at least right now, like Elder made the same thing for Svelte. These are kind of restricted to static site generators right now because
[01:07:16]  that's where they get the most value. Let's face it, most people building a blog site. How easy is it to just, sorry, where is it?
[01:07:25]  It's here. One more. How easy is it just write, make a bunch of pages, drop them in, write your HTML, and then, you know, grab
[01:07:33]  a couple of components you need. In that case, you know, this is already going to do plenty for you. And I think that's really amazing. But there's
[01:07:43]  a few other frameworks involved here and techniques that are a little bit more ambitious, let's say. Astro is going to be moving to dynamic rendering. And you can
[01:07:55]  bet that, you know, that will, you know, continue this trend. But how else can we send less JavaScript? And that's, that's what's going to
[01:08:06]  bring us to our next thing. I don't know if anyone has any questions on Astro. I can talk about more to it. But I did cover it in my
[01:08:14]  stream last week. And you, you all are probably somewhat more familiar with it, just because it's been kind of hyped and talked about a lot recently. The fact
[01:08:23]  that you just drop any framework, this comes up, whether you're a Vue user, Svelte user, React user, you've probably heard about Astro.
[01:08:30]  But we, I've got more to cover. And the next one I want to talk about is slightly different approach. Astro had the islands, which are fine,
[01:08:48]  but it was really manual. And you still kind of, the tricky part with islands is once you denote something an island is, is an island, like maybe this whole section
[01:08:59]  here, or maybe this whole block here, you're kind of done. It's stateful, it gets shipped, you have to send all that JavaScript. What if
[01:09:08]  you aren't so fortunate to just have a few individual things that you need to hydrate? What if you need to hydrate? You know, different portions of the
[01:09:22]  page that are more nested? And maybe there's some state up here. And it's that you can rearrange your components through projection to, to solve that problem. And
[01:09:31]  I'm going to show that in a bit, a bit later, but maybe there's a different approach. And that other approach that is quite innovative, and I want
[01:09:39]  to talk about a bit today next is, is quick. I don't know if, if many, many, as many people have heard of this one, but essentially,
[01:09:47]  Misco Hevery, basically the creator of Angular, left Google, joined a startup as a CTO, to basically build a new framework from scratch. I mean, if
[01:09:58]  that's not exciting, I don't know what is. Obviously, I've never been the biggest Angular user, but to, you know, make that decision, that
[01:10:08]  life change to kind of move. I mean, he obviously saw an opportunity, and I do see that opportunity myself, right? He works for Builder.io, which
[01:10:18]  is kind of a CMS setup where it lets people use low code to kind of build sites. And the whole idea is, there are a lot of businesses looking for efficient websites
[01:10:29]  right now. Ever since Google's made their page score rankings more important, there's more people looking at the charts, like the one that, that I, that I
[01:10:37]  made, and kind of going, okay, is this going to be good enough to get that SEO ranking that I need? And Builder, being like a builder for people
[01:10:46]  making those sites, make things easy, was like, okay, we need to get ahead of this. We need a solution that is the absolute best at getting lighthouse scores
[01:10:56] . And honestly, the approach they've taken is probably the absolute best at getting low lighthouse scores. They've taken, the secret to, to the Astro, and maybe
[01:11:07]  I should make this a little bit more clear here in my thing. These are, these are basically manual, lazily loaded islands. That's, that's the approach
[01:11:25]  that they use. Essentially, I showed you like, you define these islands, and you might not even load them at first. But, you know, hover, scroll,
[01:11:34]  whatever interaction, we're going to lazy load these predefined things when you do. But what they've done is, they've basically said that the hydration and JavaScript loading
[01:11:42]  points are the same points. And that, you know, it works fine. But that's basically the restriction they said, it keeps it easy. But if you want to
[01:11:51]  get that last little bit, we need to break things apart a little bit more. And that's sort of where QUIC comes in. QUIC is probably going to be
[01:12:00]  the most confusing approach that I'm going to talk about today, because they, they use some new terms that you might not have heard of, like resumable hydration
[01:12:11]  and HTML first. Like, what does HTML first even mean? You can go watch some videos by Misko to kind of get an idea there. But I'm going to
[01:12:24]  kind of summarize it a little bit and hopefully show it. I've actually got a quick to do demo right here. And if all goes well, and I refresh the
[01:12:33]  page, and it actually loads, I've had some, I've had some inconsistent luck here with stack blitz. It's really cool. But sometimes it just doesn't
[01:12:44]  work. So let's, let's hope that we actually get what we're looking for here. Essentially, I showed you how to do something simpler, simple in Ast
[01:13:00] ro. And the reason that a to do MVC is really interesting here is because this is not your typical hydrated app, like I was showing you a minute ago. But
[01:13:11]  it's good to kind of show off what quick does quite well in this way. You know, this is tricky, because hopefully you can see most of my screen. But
[01:13:26]  this is tracking the requests down here. Pay attention to it, we'll probably have to refresh this again. I don't know if I can do this all in one go
[01:13:35] , but I want to show you. So we have our to do app here. And we've loaded a quick loader. Yes, that's it. This is I
[01:13:43]  think it's like two kilobytes. It's like nothing. They you basically load this little loader. At this point, nothing else is loaded. It's
[01:13:51]  not unlike the Astro demo I showed you in terms of lazy loading. The difference is Astro, you said, Oh, when it comes into view, or when you
[01:13:57]  hover, whatever, quick doesn't does in concern with that. What quick does is it, it waits for you to perform an action. So let's, let's
[01:14:07]  see, I'm going to click in here, what happens? Nothing. Okay, sure. Let me cross one of these. Watch the request bar in the terminal down below
[01:14:14] . Bang. By crossing out this item, it suddenly load the code for the items that code to toggle the items, the code, the request that to do main template
[01:14:24]  item footer. It basically jumped a whole bunch of JavaScript code for all the components that needed to do that action. Right? If I do the action again, it's
[01:14:32]  not going to do it again. It just waited until I click the button. Now, there's some more actions we can do. What if we want to apply a filter
[01:14:39] ? Okay, so filter was already loaded as part of this, because I guess it was entwined. But let's clear that one to do. Oh, now
[01:14:48]  we just, to do archive and item remove were just loaded at the bottom here. Let's add a to do. Oh, header template loaded now that I'm typing in
[01:14:58]  it. And then when I click enter, add to do. It's called, basically, they granularly load every piece of JavaScript to make this page work as you
[01:15:12]  need it on demand. This is really interesting. Because you can kind of load stuff as needed. And you can load stuff out of order, as you can see, you
[01:15:27]  could get like the item before the page and before the header. And this is unconventional for hydration and lazy loading. So a technique like this could even be, if
[01:15:43]  you think about it, applied to a single page app, perhaps, if you engineered in the right way. And the way Quick handles this is it doesn't pass props.
[01:15:56]  When you have a component, it doesn't pass props to the children. Everything is handled by dependency injection, which is basically the bread and butter of Angular as well. You
[01:16:07]  can tell where he got his ideas from. By using dependency injection, it knows which data each component needs. So when you click an event handler or do an event,
[01:16:21]  it basically knows to load the data for that event handler. And then from that action knows which components to mark dirty, which components to load. And it just loads exactly as
[01:16:33]  little as what's needed. What's cool about this is you didn't have to specify anything. It's basically completely based on what you used. That's how you
[01:16:43]  get that granularity, which is kind of insane, right? But how does it send that information? How do you wear this? Check this out. The way it
[01:16:54] 's doing this is it's actually serializing into the HTML certain attributes, like declared template UI. Like basically, it puts URLs into the HTML. This is a technique actually
[01:17:07]  also used by stuff like Turbolinks in terms of noting where to hit like the HTML to do those HTML replacements. They use this to load the JavaScript to do in
[01:17:15]  the client. So you see to do's data, to do entity, item, to do item entity. And I'm sure if I go down here into the to
[01:17:22]  do's, we'll see like number increments and stuff for the item one. Basically, you serialize, you obviously can't serialize all the data this way.
[01:17:32]  You know, but you can you can you can basically see there's this kind of ownership where each component can at least indicate where the data is located. And this is
[01:17:45]  all based off the dependency injection. So really kind of clever solution in that it didn't require manual islands and it just knows to load exactly what you need. And yeah
[01:18:00] , the interesting part is no props, not really like so the render bodies or what's the term like prop render props, like having the child render the component children is not
[01:18:17]  an option here. Right. And that they're working through those kind of those kind of challenges to figure out the best patterns. But essentially, this is a perfect example
[01:18:32]  of of like experimentation to figure like out what we can do. I feel like this is intermediate stuff. If you know the people from builder IO, they build mitosis,
[01:18:42]  which kind of started its life as taking something very similar to solid syntax basically to generate components in any framework. I've often said that reactivity is a language and that
[01:18:52] , you know, the API for solace primitives or basically could be extended to generate any sort of equivalent to any framework. Right. But and they've kind of shown
[01:19:07]  that the other way isn't always true. Trying to go from react to something else doesn't always work. But even if you if you're trying to generate that code,
[01:19:16]  there's there's a chance that like even if you have a difficulty, you can always use a reactive system at runtime to drive the differences. So, you know,
[01:19:25]  these guys have figured are really good with compilers in terms of figuring out how to map to different outputs. And I think that's key in their strategy because using quick
[01:19:36]  today is challenging. Maybe if you use Angular, you're kind of used to this more than than than I'm used to it. But I've never seen a to
[01:19:46]  do MVC example with more files and more code in it. In like, as you saw, I was doing to do MVC kind of bring this all around at the
[01:19:54]  beginning and I showed you the examples. They were 130 lines to do to do MVC in solid or spell. To do to do MVC in quick is like 25
[01:20:05]  files and all about, you know, 30 lines of code. I don't, you can do the math, but it's it's considerable. And this is because obviously
[01:20:15] , maybe a smarter compiler could generate this and stuff. This is because the need for this granularity. What header template, like here's the JSX. And then
[01:20:27]  you can see stuff like events are basically handled as URLs. You basically say what the URL is, and then you go, okay, header to do to do's. And
[01:20:36]  then header, where's header add to do's. Is it here? Yeah, you basically wire up. It's kind of like importing files, you kind of just wire
[01:20:46]  up the code. And let me make this a bit bigger. So you can, you all can see, but you basically wire up the code you need via like these
[01:20:55]  events via URL. The key to it is they've split every component into three parts, a template, the events and the state. And this way, they can be all
[01:21:09]  loaded separately as needed. And this idea of code splitting a component is actually really important, really powerful with this approach, if you want to get make things more granular,
[01:21:20]  but they slice it that way by, by concern, almost the classic way, like you do with NBC, almost you have state or model, you have the view, and
[01:21:30]  then you have the controller, like that's essentially the way that they slice the components here. And as I said, it's a very, it's a very powerful effect
[01:21:38]  when you can do these demos, because you can literally load nothing, and then just load exactly what you need. And the app actually doesn't have to do any smart
[01:21:46]  analysis, or manual, it just, it just works. As the limitations and getting yourself around these APIs is definitely a challenge. But I feel like this is where they're
[01:21:57]  going to make big improvements in the future. But you can see the potential here, because I haven't talked about one important part, I talked about the serialization of
[01:22:04]  the HTML. But what I haven't talked about yet, is this idea of resumable. Because they take this a bit further than that. And I'm sorry,
[01:22:14]  I missed demoing this. Let me see if I can get in here and inspect. Read Quick Docs. Can I edit? Yeah. Look at this line here
[01:22:27] , or not here, that's the text. Let's see what happens as I edit this. I should, I don't know where it is. Obviously, the HTML
[01:22:38]  is editing, but we should, we should, there should be an opportunity, maybe data item one. Oh, there's a bug, it's, it's air
[01:22:50] ing out on me. What I wanted to show is they actually serialized the state back into the HTML. But, which is interesting, if you were ever to like resume
[01:23:02]  that page, I don't know if that's a common use case, per se. But the whole idea with the resumable is because they serialize the data
[01:23:08]  aggressively at a per component level, this is so they can hydrate things out of order. So you can like basically not need to run the parent. This is why they
[01:23:16]  have a dependency injection, why you can't pass children through is they can go, okay, let's just hydrate this component and not hydrate the parent. They can
[01:23:25]  do that because all the inputs are actually serialized into that template, all the props are serialized. In this way, they don't run any code on hydration,
[01:23:34]  more or less, because they're just like, we have all the data we need, the next time the component runs, we'll just rerun the component using the inputs
[01:23:44]  that we've already serialized and the state. It's an interesting approach, because to me, it's granular, but it's kind of hybrid in that it uses almost
[01:23:57]  like a V DOM and JSX. So while it does no work at, it does less work at hydration time, it needs to recalculate everything when you
[01:24:09]  actually make a change. So it's interesting. As you know, I'm big on fine-grained reactivity and, you know, once you start representing your data
[01:24:22]  that way, you start realizing that you have state and you have derivations. This is true. Even in your components, you have state that's derived. Essentially,
[01:24:30]  this approach lets you skip hydration, but it still needs to rerun everything at a component level. So it still needs to recalculate stuff. You still need to
[01:24:42]  ship code to recalculate that stuff. Like if you're using moment or stuff, you defer loading it, but you still, you essentially end up with a,
[01:24:51]  with your spa in the end. If you load everything, use spa. And this is one of the challenges with this approach. I think they're going to look at
[01:24:58]  ways of optimizing and bundling it together, because if you were using this as a spa and you navigate to the next page, you saw what happened when I clicked that check
[01:25:06] box and it did like six or eight data requests. Picture navigating to a new page that you're going to render on the client. You could, this is, this is
[01:25:15]  a death by a thousand cuts. You could do 250 requests. This is one of the biggest challenges with this approach, because it isn't smart yet. It just knows
[01:25:23]  what you've interacted with manually because you've broken up the files that way and you've wired it up that way. It's very clever, but the actual mechanism is actually
[01:25:32]  pretty simple. And that's why, as I said, I still consider this an MPA framework because you're not realistically going to get there yet, but really.
[01:25:40]  really interesting possibility. So this is one way, another way of attacking this whole approach. I don't know, anyone got any questions about Qwik? I think Q
[01:25:49] wik is super interesting. I'd love to talk more about it if anyone's kind of interested to kind of talking to it. I was fortunate enough to be one of
[01:25:57]  the early people that Misko, I'm going to do because I have a close relationship with Steve who runs Builder.io and, you know, we'd work on
[01:26:05]  mitosis a bit, you know, has some thoughts and he wanted me kind of weigh in on Qwik and I was like, oh, wow, this is
[01:26:11]  really cool because I didn't realize other people were working on stuff similar to what we've been working with on Marco and it's clear that, you know, see people invested
[01:26:20]  in this kind of ability to send less JavaScript is really cool. So I wrote quick here, but what I want to call this is like, almost like granular, lazy
[01:26:30]  loading, plus resumable, this is like the longest name ever, resumable hydration. Okay. Hopefully that'll make sense to everyone so far. I mean,
[01:26:47]  that one is complicated. To get back to our diagrams kind of show what I meant is that each of these boxes, pretend they're a component, they actually serialize
[01:27:04]  all the inputs at all of them, like all the props at server render, write them into the, say the outermost HTML element of it. And some of those
[01:27:17]  props, it's dependency injection. So if they own the state or, you know, own the props, like they can just write it in, but if they can
[01:27:25]  kind of, they can basically trace it back. So if you, if you have an item that's been used in three different components, it's, it can point to
[01:27:33]  that single location. So they, they all know that it's the same, it's the same piece of data. So that when it updates, it updates, it's
[01:27:40] , it's kind of like reactivity. It's, it's like granular reactivity on top of a coarser components system, but it's not coars
[01:27:49] er. It's just, it's, it's a split the other way. It's still component, it's component grained, but it's split. It's
[01:27:57]  split almost NBC style, as I mentioned. It's a little bit technical, but hopefully, hopefully you can get a feel for what this is doing. because this is
[01:28:06]  arguably today, one of the only ways I could picture easily, not easily because of also the trade-offs, but going from an MPA to a spa. As I
[01:28:16]  mentioned earlier, stuff like SvelteKit or Next aren't really addressing this. They're just kind of going, turn off the JavaScript here. This actually lets you
[01:28:26]  do out of order hydration, which is, which is crazy. But yeah, let's move on. Is there, is I, as you saw with Astro, it
[01:28:42] 's simple, but obviously not as optimized as quick can be. You, you, you know, you can pull in any framework, pay its cost, and you,
[01:28:56]  you, you're kind of up and going. Quick, they had to completely design something from scratch to be able to fit this requirements. But once it's working, it
[01:29:06] 's kind of amazing. The last, maybe not the last approach I showed today. I'm trying to decide if I want to talk about React server components, because they
[01:29:18]  sometimes get thrown into this conversation. But React server components are not unlike Astro, except you have the ability to nest. Yeah. Yeah. This is, this is,
[01:29:43]  this is, this is a, this is, this is a question, right? Yeah. I mean, on one hand, you can say this is good enough for
[01:29:54]  the, like, the Phoenix live groups and, you know, kind of stuff. But yes, I mean, it, there's a balance here. If you,
[01:30:04]  if you aggressively lazy load everything, yeah, there's, I mean, obviously with HTTP2, we can do, like, more requests at the same time and parallelize
[01:30:15]  stuff. But, you know, then you don't get the leverage to leverage the browser cache. Like, having that constant communication is actually, you know, can be
[01:30:29]  a challenge. Obviously, you can look at strategies to preload, right? You know, can you use a PWI? Yeah, exactly. Right. In that sense
[01:30:37] , like, who cares, right? You loaded almost no JavaScript and then you kind of deferred and that. And I think more aggressive loading strategies are what you,
[01:30:39]  you, you're going to have to do with something like quick to kind of mitigate the, the death by a thousand request kind of scenario. It's interesting though,
[01:30:59]  as I said, because elements of it are really, really powerful. And I, I just like elements of, of Astro are, but yeah, I was saying I
[01:31:10]  could, I could look at react server components, but I feel like basically Astro has islands. And we, I showed you where you, you can essentially pick, though
[01:31:24] , this one, component, this section here needs to reload or not reload needs to be hydrated. And, you know, you can make that choice. We've been
[01:31:33]  kind of toying around with the term is islets is what if you actually have almost a sort of onioning, right? One thing that quick and react server components have
[01:31:44]  in common is they can go static, stateful, static. And by static, I mean server rendered. And that, sorry, actually static, stateful, static
[01:32:00] , everyone can do that. Sorry. Basically it's, it's possible to go static, stateful, static, stateful, like basically nested in such a way
[01:32:09]  that you can independently load nested stateful components without their parents and even have, you know, server rendered stuff in between stateful stuff. Because it's completely independent
[01:32:24] . The way quick. Oh, there we go, referencing quick is use a service worker to both preload before some interaction and cache to avoid network issues. Yeah,
[01:32:35]  exactly. What I was getting to is both this and server components, because the way we actually want to let you re render sections on the server. essentially they, they
[01:32:48] , they, they have strong stipulations in terms of what, you know, those ones not being stateful versus being stateful and basically handle those boundaries explicitly. I
[01:33:01]  mean, anyway, I want to actually get into Marco next, a big part of what, look at the stream because Marco's kind of an interesting one is that this lazy
[01:33:12]  loading techniques are something that's much more recent. Yeah. And, um, essentially, um, Marco is actually kind of old. Um, and I don't mean
[01:33:30]  that in a bad way at all. It's just, Marco's been doing this stuff since 2012, 13 time period. And in some ways it's not as advanced on
[01:33:42]  the lazy loading scenarios because like, like it's a different problem to solve instead of like cut by a thousand. Right. Like we've been talking about with quick or
[01:33:53]  even Astro's lazy load. What if you just looked at the page and was like, this is stateful. This is stateful. This is stateful. This
[01:34:00]  is stateful. You know, and just did it almost like Astro's islands, but just did it with a compiler. That that's, that's, that's
[01:34:08]  Marco today, Marco tomorrow. We, we, we could probably, I can probably add a number 10 on the list here, but Marco today is. Is, is
[01:34:15] , is almost just look at your code and find the islands. And now what is the difference between that and, and, uh, islands really? Cause the term here that
[01:34:28]  this gets is partial hydration. Um, the two approaches that we, we, we talked about just now, some may technically partially hydrate, but they're also,
[01:34:39]  they're not really classically, um, partial hydration. And where the term came from originally was essentially just not sending all the JavaScript down. That's what partial hydration
[01:34:48]  is. That's what partial hydration is. And obviously the other two do accomplish that, but in slightly kind of different ways, mostly. Astro does it by manually
[01:35:02]  saying where the boundaries aren't quick. Does it just by chance that you don't actually, there's nothing to interact with on a static component for you to load it.
[01:35:10]  Um, essentially they, they kind of get it from that spoke, um, the approach that Marco took right from the beginning was what if we used a compiler to look
[01:35:18]  at your code and then decide what was stateful. And then you don't write the islands, but we do essentially. So what's that look like? Um,
[01:35:28]  I've got another example here in code. So let's, let's, um, let's, let's look at that. Um, not that one, this one
[01:35:40] . All right. Now, some, some of you probably aren't familiar with Marco syntax and that's fine, but essentially. Um, I've got my hacker news
[01:35:52]  demo. It's always my, my favorite demo to do for this stuff. And we're almost back at Astro again, where we have some pages using file-based
[01:35:59]  routing. Looks kind of similar to next or anything else you've used. Right. And the key part is kind of like our, our, um, I'm gonna start
[01:36:10]  here. There's a kind of like our, um, Astro example. There's some code I got at the top here, and then we just have some market up
[01:36:18]  and this layout. Layout is actually this layout component, which is just our HTML. So in some ways you're already kind of seeing a, uh, similarity to
[01:36:29] , to Astro because it's like, uh, um, it's essentially just, you know, some HTML. The difference between Astro and Marco is that it
[01:36:41]  just continues to be the same thing, right? We have some code here to pull some page data. Um, we have a, a weight tags similar to Svel
[01:36:51] te's weight tag, um, in a sense where you can just like pass a promise in. And this promise get stories is from, you know, an API, right
[01:37:02] ? Um, which is just, uh, some JavaScript functions that I exported on, you know, ESX kind of used to this stuff. And then essentially you
[01:37:13]  could just lay your Marco components in like this layout or whatever, or, you know, these built-in ones and whatnot. Ifs and elses, just like anything
[01:37:24] , basically you're just building a single app experience. You just like call some API calls, build some components. Um, let's see here. There's a for
[01:37:33]  loop that, that shows some stories. And then when Marco, you don't import the components. They just detect them based on the folder structure. So we're going to
[01:37:41]  iterate over the stories and we're going to just show some, you know, some stuff. And this, some conditions and some stating you just literally, you're just writing
[01:37:54]  your code pretty similar to what you do with. What you do with most frameworks. Um, you know, there, there, there wasn't like an island. Like
[01:38:02]  this is the Astro. This is not, there wasn't like here. We built this into 20 different files for you. Like, or you, here's a 20
[01:38:09]  different files. You need to create. You're just using the framework the way you would typically use it. There's some syntax stuff you might have not seen before. Like
[01:38:18] , but especially viewers who seem solid using control flow as tags should be pretty similar to you. Um, it's kind of nice at times. It keeps things really compact
[01:38:29] . The, the Marco syntax, the, we did like, there's a little bit. It's a difference here. They, this square, this bracket here is how
[01:38:40]  you pass like props in, uh, into like the for loop. So like, you can use the, it's the scope slots and felt for view. You don
[01:38:49] 't want to see what that looks like in Svelte review. It's much more convoluted, but it's same here. Like this promising, it's like
[01:38:55]  a weight. Then stories, it takes a little bit to get used to, but you can kind of generally see that you just do that. And like, maybe you
[01:39:04]  got a component that does something like here. Here's a class component that has a state, some state for be open toggle. And then when you toggle open, you kind
[01:39:14]  of swap the state and it hides and shows stuff. My point is you just kind of build your app out. And what's really cool is like this toggles in
[01:39:24]  the comments, right? Comments. If this comment toggle, Marco's just fine to do this with you and for you. Right. And then, yeah, so we
[01:39:35] 're running on port 3000. Did I start this one up? Yeah. Okay. Let's look, let's look at this Marco demo. I've shown this off before
[01:39:44]  in a different stream. Um, but we let's just go home. See, so it's kind of cool. You've had your weight tag and then it has
[01:39:53]  like the placeholder state. I didn't actually show that, but, um, let's, let's show that for a second. It's kind of cool. Like
[01:39:59]  you go away then, but you can also just put a placeholder in. I think Svelte has a very similar feature to this. And it's kind of like
[01:40:06]  your like react suspense kind of, kind of thing. I'm, I'm, I'm, that's a great question. I'm purposely being vague here because my
[01:40:20]  point is. You sort of don't care. Is this server rendered? Yes. So you're rendering a walkable cacheable HTML page. Um, let's continue.
[01:40:33]  I'll try and answer this a bit better for you. But essentially this you saw, we can just import our JavaScript. We can just do typical stuff. Here's
[01:40:44]  our loading state. So we loading it and then we load the page and we click more loading and loading the page. Hopefully this, you can see this, which the
[01:40:54]  category and, you know, works pretty good. Right. Hacker news. No big deal. So what's, what's going on here? Well, first of all
[01:41:06] , this is an MPA. I love using this Hacker News example is because I showed this on the Space Jam site too. If you have an MPA or
[01:41:15]  like, if you have a server render page and you refresh it, you probably noticed that most browsers don't white flicker anymore on it either. I was talking about how
[01:41:25]  hydration was unfairly portrayed by the MPA crowd earlier saying like you, you re-render everything and it has a flicker. That doesn't happen anymore on, um
[01:41:33] , on single page apps really for hydration. Similarly, browsers are pretty smart now that when you navigate, if the content doesn't change, it doesn't do it.
[01:41:43]  It doesn't do it. And this is MPA. When I click more, this, this goes back to the server and grabs the new content. Now you might be
[01:41:50]  thinking. Okay. So then how does this work? So this is clearly server rendered. Does it send the loading? And then how does this load? Is this client
[01:42:03]  rendered? Or like what's going on here? Right? Well, the answer to that, I've answered in a different stream before, is it's streamed.
[01:42:14]  And essentially it's all getting server rendered, but it sends the loading placeholder down the pipeline. And this stuff, which loads so quick, you don't even see a
[01:42:28]  flicker. And then as the content comes in, it streams it in. So you get almost like a client side thing. I'm not really good with CSS enough
[01:42:35]  to have like a nice placeholder, but you could picture a nice big placeholder here. And this, as the data loads, you kind of get this kind of experience
[01:42:42] , but what's really the best part about this. And I feel like I've done this enough times that this is no longer a big reveal for people is. Do
[01:42:50]  you think how much JavaScript do you think gets loaded here? Well, let's, let's, let, let me do something. What I'm going to do is I
[01:42:59] 'm going to turn off dev mode again, run build. And then, cause this is, this is always the, this is always the problem with these things. That
[01:43:11] 's an NPM runs start, I think. Okay. Run start. Okay. And then, as I said, this was unfair before. What we need is a new
[01:43:23]  on Cognito window. Cause otherwise we see this other stuff. Local hoax 3000. Sweet. Now let's do this. Okay. So we're navigating around.
[01:43:33]  So you can see the full page load. See page two. But loading. let's, let's, let's focus in on this. I love showing this off
[01:43:48]  because. This is giving you a client side loading experience with loading states and stuff. You could have content below it. You can have placeholders and all that stuff. And
[01:43:56]  it's not loading any JavaScript. And that's because it's streaming. It's streaming. And as the point of this, this, this cast isn't so much
[01:44:07]  about streaming. Although streaming is pretty cool. And I already mentioned that it's probably the single most important thing that, you know, could be done to optimize single page apps
[01:44:17]  these days. Reacts working on it. Obviously, you know, solid has a version of it. Okay. So. Yeah. Do you want to see? I
[01:44:26] 'm gathering you, you want to understand what's going on a bit. Let's see if we can actually see the HTML come in here. Nothing too fancy here to
[01:44:39]  stream our view and our page and stuff. But at the end here, I won't be able to show this fast enough. You see this div here. This is display
[01:44:53]  none. What's happening is. It renders the page with the loading spinner in here. And then this content gets is still getting streamed into this div that's
[01:45:06]  display none. And this small little script that gets serialized here, which there is JavaScript just for this. If it was in order streaming, there isn't JavaScript actually,
[01:45:18]  but the small little chunk of JavaScript just tells it to grab the content of this div and insert it where that placeholder was. So there is JavaScript running. It just there
[01:45:28]  is no bundle. And the power of this. I mean, streaming obviously adds a different dimension is because this is all communicated via HTML. Essentially. The island. This
[01:45:41]  is not a boundary for an island is what I'm getting at. If there was something stateful inside here, you know, something that would need to be an island,
[01:45:48]  then we could ship ship the JavaScript. But nothing about this needs the marco runtime, essentially, so we can continue the island splitting even into the stream, so to
[01:46:01]  speak. This is not a boundary. This does not need to be an island. So I'm hoping that makes a little bit more sense essentially. Like, maybe I
[01:46:11]  should go back to my solid draw here. If I can help. But maybe I'll make a new one. Let's just make a new one here. I probably
[01:46:21]  won't need that. Essentially, what's going on here is. Let's draw something good. So it draws the header. Right. You know, and then it
[01:46:36]  draws the loading state now with the placeholder. Right. And then it draws an invisible div. And let's let's let's use a different color. It basically
[01:46:57]  continues. Basically, that's all it renders at first when you see the loading thing synchronously. While the stream's still open, it sets up this invisible div down
[01:47:04]  here. And that invisible div draws in the content that we see, you know, the list of to do's, you know, all of these all get get drawn
[01:47:19]  in into into this div, you know, as the data loads. Once these have all loaded in. Once you went once like it's sent that HTML and finished to
[01:47:34]  the stream in this content. Basically moves it into place using that script tag that I just described. If you view the original source, preferably with formatting, you should see
[01:47:55]  the stream source order and can show where the scripts are moved. Are to move the content around. So are you talking about using it in dev mode? So are you
[01:48:06]  talking about using it? So are you talking about using it? So are you talking about using it? So are you talking about using it? So are you talking about using
[01:48:10]  it? So are you talking about using it? So are you talking about using it? So are you talking about using it? So are you talking about using it? So
[01:48:15]  are you talking about using it? So are you talking about using it? So are you talking about using it? So are you talking about using it? So are you talking
[01:48:19]  about using it? So are you talking about using it? So are you talking about using it? So are you talking about using it? So are you talking about using it
[01:48:23] ? So are you talking about using it? So are you talking about using it? So are you talking about using it? So are you talking about using it? Okay
[01:48:36] . No, that's not going to. Yeah. So like web pack fun stuff. I don't know if I want to dig too much into this. Do do do
[01:48:55]  do do do. Not fun. Oh, God. Sometimes, sometimes I'm dumb. This is why I have smart people on the stream. Yeah. Yeah, of
[01:49:20]  course, because this shows this and I've got line wrap, hopefully, to make this nicer somewhat, but it's no, not great. Right. So essentially,
[01:49:34]  it's hard to see the beginning point. But essentially, let's see if we can see, see the loading here, loading, div, span, and then it ends
[01:49:44] . This is the original page that we sent. And then when you see with the loading, then here's our div with the display none. And then here is the
[01:49:52]  content that all came in for all those stories. It's a huge amount of content. And then finally, at the end, you see the script that actually moves it into
[01:50:08]  place down here. What's really cool about this, though, is we don't actually have the double data problem here. The network panel lets you do that with formatting
[01:50:22] . Yeah, see, I'm just -- I'm just -- network panel. Refresh. Don't highlight on the JavaScript. Focus on all page four. Response
[01:50:41] . Is that it? Pretty here? Wow. See? Dumb, dumb, dumb, dumb. Here we go. Same thing, but head, navigation links,
[01:50:54]  our loading indicator, our invisible div, all the content we ended up loading, which includes the replacement for the navigation for the forward back, the main content of our stories,
[01:51:09]  and finally the script to stick it all in place. So, essentially, what I was saying here is because it's completely server rendered and there's no interactivity,
[01:51:23]  we actually don't have the double data problem with this approach. We actually just centered the rendered HTML. Of course. Why wouldn't we? This is static. And,
[01:51:33]  you know, this is fine. I mean, you know, I was joking earlier on, you know, just don't include the script tag, right? It's
[01:51:41]  a static page. Any framework could render it like that. But what's cool about this is what if you do have JavaScript, you need to load the page. And
[01:51:57]  I'm actually going to go back to the built mode because I want to be as -- okay. Well, if you do -- what happens if you do have JavaScript? Let
[01:52:14] 's go here. 15 comments. Okay. Now, we do have JavaScript. And we actually loaded Marco, which is basically 13 kilobytes. We are working on
[01:52:24]  making it smaller. And some code for the specific page, which is 1.5 kilobytes. And what is that code? It's our toggle to hide that
[01:52:33]  -- this one comment here, essentially. And now that, you know, we have this kind of set up, you can see, like, we don't actually need JavaScript
[01:52:48]  for all this. And what's really cool, and this is something I wanted to show is -- kind of show off, and I mentioned it earlier, is that essentially
[01:52:58]  Marco knew to only include that toggle because it's the only component that I've showed you so far that has a class in it. Like, sure, there's some code
[01:53:08]  that does some formatting and that, you know, calculates pages and helps with the routing, you know, and we have all this logic. But Marco's like, well
[01:53:18] , the only thing that actually is stateful is this class. So, going back here, you might be looking at this and going, okay, that's great.
[01:53:34]  What does the page that we send actually look like here? And let's do this again. For this one, we actually do still stream in the content. But there
[01:53:49] 's a difference. There's no placeholder here, and it's not out of order. So, you can actually see the content actually come in exactly as it would.
[01:54:01]  The only reason there's even that script tag is to help set these toggle hydration points, basically these hydration routes. You can see the comments in here, hopefully. essentially
[01:54:13]  what we've done here with in-order streaming is just kind of draw part of the page and then draw the rest as it comes in. And again, this can be
[01:54:25]  all done without JavaScript. The only reason there is JavaScript is because we have all these little comment markers. But the cool thing here is I still don't have the double
[01:54:35]  data problem because these comments are server rendered, even though technically they're recursive and they can be compacted. Let me show you what I mean because there's comments
[01:54:48]  inside that toggle. And if you -- this is too shallow. Let's get a hot story here. Something with like a ton of comments, 250. I'm sure,
[01:54:58]  yeah. Like this one, and this one, and this one, and this one. But we actually don't have the double data because we're actually doing all the fetch
[01:55:07] ing on the server. And we do something a little clever here in that if you look at the comment, toggle is stateful, but its children here in the for
[01:55:21]  loop are not. We know that this is not stateful input so that this for loop can run once and it never actually gets rerun. If there was, you
[01:55:32]  know, if toggle was doing something more interesting in how it renders its children, maybe that would be a different story. But, you know, like if it had the
[01:55:42]  for loop or whatnot. But in this case, we can know that the parent has successfully rendered the children and it's just, it can just insert it in. And we
[01:55:51]  never actually need to send those comments to the browser because they never actually need to rerender them. They're just, they're just using display to hide and show them
[01:56:00] . So we can even pass stateless components into stateful components and not have them rerender. This is a little trick. You sometimes do react around memos. So
[01:56:13]  kind of like the hoisting state thing so that you can avoid rerenders. In our case, we can actually use this as a way to do the minimal amount of
[01:56:22]  code sent to the browser by extracting out the toggle from the comments component. This is the only component code we need to send to the browser. This did take a little
[01:56:31]  bit of consideration, obviously. So in a sense, you know, maybe this would be the island and you could do the same thing in Astro, right? You could
[01:56:38]  just build the whole app in Astro and then this be your only island. And I feel like as people use Astro more, they're going to lean on Ast
[01:56:45] ro more and its own templating to do stuff and figure out how to pull those components down. As I said, Astro, it's all explicit with Marco.
[01:56:57]  You kind of do it as needed. And this, as I said, the key difference here is it's a single app experience mentality. And from there, essentially,
[01:57:13]  we are choosing what to hydrate. So there's a very thin line here between, say, partial hydration and, like, some of these earlier methods that I was
[01:57:24]  mentioning in terms of, like, more classic dynamic server rendering, like the Rails guys who, like, if you use Rails with Alpine and then Alpine's just,
[01:57:36]  you know, putting a little bit of JavaScript on your page to sprinkle it on. And even to a certain degree when using Astro, you have this definite, like
[01:57:45] , here's the static part, here's the JavaScript part. Marco aims to kind of reduce that barrier and basically streaming being a key part of this equation because it lets you
[01:58:00]  continue that ability to only ship the least amount of JavaScript into the async part. As you can see in our to-do example, this code only actually is in
[01:58:12]  the async island, right? Like, technically, we render the header right away while we're loading the data on the server. And then as the data comes in,
[01:58:23]  it streams in the rest of this content. But we still only needed the code to collapse the comments. We didn't need to send the code for all the comments.
[01:58:33]  Like, basically, when you work with something like Astro or kind of, your islands are the boundaries. Here, you can have async stuff and continue having smaller,
[01:58:47]  smaller pieces. So, yeah, that's Marco today. And what I was kind of referring to is partial hydration. I don't know if anyone has any questions about
[01:58:57]  that so far. So, how does this all kind of come together, right? Because I've shown you nine different ways things are being done right now. This
[01:59:21]  is why server rendering is such a headache. Someone requested on Twitter, was it Magnus? Like, a while ago that, like, he saw this great video where they
[01:59:32]  showed three different methods of server rendering with Rails and explained how they ended up TurboLynx. It's like this best of both worlds scenario. And I was like,
[01:59:41]  yeah, that's not a bad video. I just missed the other six different ways that we can approach this problem. You know, if you look at the small slice
[01:59:50] , you're only going to, like, consider those in the round solutions. Because basically, out of all of these solutions, only a handful of them keep both the
[02:00:06]  vision of single application and the ability to kind of optimize at this granular level. you know, ship less components, you know, going back to my original to do example
[02:00:21] , you know, make it more relevant to, you know, where you fall in the size measure. And basically, I would say dynamic render with update panels or whatever
[02:00:40]  you want to call the TurboLynx view approach today. That is like, or Phoenix live view, that approach is like, everything is server rendered. Even if you
[02:00:49]  interact with something, the client, you can kind of view it as server rendered. And sometimes it's clunky. I said, Rich's Harris's video showing GitHub
[02:00:58]  and stuff is a great example of this kind of thing. But essentially, you still kind of get to a point where it feels sort of consistent. Like, they do still
[02:01:12]  bring in Alpine because it's clunky. Like, that tells you that, or stimulus, it tells you that it haven't quite covered the gap properly, like completely
[02:01:20] , but it's pretty close. On the opposite end, you have these MPA frameworks essentially making everything JavaScript and then figuring out ways of not sending that JavaScript. So
[02:01:35]  it's like the opposite. You have, and in a sense, because JavaScript is always needed in the browser, that's the one constant here. That might be the
[02:01:46]  only way to actually achieve, might be the only way to actually achieve, like, the single app feel, right? So I guess the real question comes into, like,
[02:02:02]  what is the, what is there a way that we can compress this whole list here into one? And honestly, that is a hard problem and one that, you know
[02:02:15] , people have been kind of looking at. And I think each solution has elements of what we want to see. And in a sense, those turbo link panels approach of
[02:02:27]  routing and being able to do return to server render pages has a lot of the same benefits we see from streaming. It means like if you can, you know, when
[02:02:37]  you do a navigation, you know, and, you know, go to that new page, you know, when you're, when you, when you're going to replace
[02:02:44]  like this part of the app, you know, maybe you click on a link in the sidebar and then replace this part of the app. It might make sense to
[02:02:52]  go to the server because then you can partial hydrate again. See that the challenge, and this is a bit like react server components when you think on that side, because
[02:03:01]  the challenge with a single page app is this. Once you know, it is going to be rendered on the client, you need the code to render it on the client.
[02:03:12]  So if you use client side routing, you need all the code below that point. Like if you have navigation here and a footer and header, in theory, even
[02:03:23]  a spa, if you never re render this, you can just leave it. But you need all the code underneath this panel that I just highlighted here. If you can navigate
[02:03:33]  away and re render it. And if you need all the code, there's, there's no partial hydration, partial hydration in a single page app and a pure sense is
[02:03:40]  just the same. As a quick out of order thing works nice way of being kind of transitional because you can like not load the JavaScript initially and then maybe load the router
[02:03:56]  when you need it. And then, but when you go to the next page, hopefully you preloaded everything because otherwise this, this section might do a thousand requests on
[02:04:03]  you on the, on the flip side. So the common practice in single page apps is, is to client render this and just fetch the data. But as I said
[02:04:15] , you need all the code to render this. So is there a happy middle ground? Probably. But it looks like pretty challenging. As you can see. Just turning
[02:04:29]  on and off the JavaScript. Like Alice next or Svelkit isn't necessarily addressing the, the challenges here of actually trying to figure out how to reduce the JavaScript, the
[02:04:43]  JavaScript of these kind of sections or pages. So what I would like to see, you know, this is my chance to kind of talk a bit about the future here
[02:04:53]  is I'd like to see a couple of things. I'd like to see that we see more frameworks look into the potential of resumable hydration, right? One
[02:05:03]  of the things we've been working on, on the Marco side is this idea of being able to, you know, very similar to quick, you know, the serialized
[02:05:12] . But instead of, if you, instead of serializing at component boundaries, if you can basically use reactive language and serialize at derivations. Or, you know
[02:05:25] , even the DOM itself, essentially, if you can pull that serialization, it's close to the bindings or to the side effects as you can. You have
[02:05:33]  the potential to not only kind of skip the hydration like quick does, but also on recalculation, not redo those computations, like not redo that work. Act
[02:05:50] ual true resumable hydration more so than even quick, quick can do. If you take it to the fine grain level using reactivity and that out of order thing
[02:06:02] , as I said, I think quick has kind of figured out is working is is is is on the edge of kind of figuring out the solution of how we can transition.
[02:06:13]  But it's also something I said we've been working on with Marco side. The other thing is we need to figure out how not to combine our lazy loading boundaries with
[02:06:25]  necessarily our hydration boundaries. It's simple when you it's the simplest way to do it manually, but you don't want the death by a thousand requests problem. It
[02:06:41] 's okay to maybe load a slightly bigger chunk of JavaScript, but not run the hydration code right away. The lazy hydration is good because it saves CPU parsing time, obviously
[02:06:54] , but maybe we don't need to make all those requests. Right. So basically what I want to see is Marco's compiler analysis, quick resumable hydration and
[02:07:11]  and and the ability to kind of opt in to to opt into the hydration like Astro all wrapped into one bundle, if that makes sense. So basically let the framework
[02:07:26]  decide the minimal and the compiler, whatever the minimal amount of JavaScript that needs to be sent and kind of calculate that out instead of you with your islands. Let the let the
[02:07:38]  mechanism be smart enough to serialize so that it's resumable and then give the end user the ability to to target their rules around hydration like after this, you put
[02:07:49]  all of those together. You should be able to and actually maybe even add the that turbo links navigation to, you know, some like partial page stuff you should be able
[02:08:05]  to have a system which seamlessly transitions between MPA and spa. You should be able to have a system, but you should be able to do. You should be able
[02:08:12]  to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that
[02:08:17] . You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should
[02:08:21]  be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to
[02:08:25]  do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that.
[02:08:30]  You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should
[02:08:34]  be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to
[02:08:38]  do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that.
[02:08:43]  You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be
[02:08:47]  able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do
[02:08:51]  that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that.
[02:09:04]  You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be
[02:09:08]  able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do
[02:09:12]  that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You
[02:09:17]  should be able to do that. You should be able to do that. You should be able to do that. You should be able to do that. You should be able
[02:09:21]  to do that. You should be able to do that. You should be able to do that. To be able to do the analysis for state to know what to send
[02:09:37]  to the browser or not also needs a really sophisticated compiler and analysis. The one that we haven't seen before. That's a lot of work. And as I said,
[02:09:46]  I'm only aware of one framework that's working on that. And then, obviously, the manual hydration stuff that Astra does is a lot simpler. So, any alternative
[02:09:58]  from the more SPA type approach to kind of meet in the middle is going to take figuring out. Obviously, you could do the Astra piece a bit. But you need
[02:10:14]  to figure out a way of breaking the components apart like quick. That's the only other option, as I said. And do it in a way that doesn't completely kill
[02:10:24]  the DX. That's the same thing. Now, Vue has actually been doing some stuff here, if anyone's kind of interested to know about that. Because,
[02:10:30]  like Solid, they split the static parts from the dynamic parts. In their case, it's VDOM nodes, not string templates. But he's been finding strategies of
[02:10:40]  not sending the template to the browser initially and then sending it as needed. So, lazy loaded templating, it might be an approach that a SPA can work on.
[02:10:52]  But you still need -- it's all about routing. You need to figure out how to reduce the impact of routing in your application. And that's a fundamental change
[02:11:03]  that I don't think current SPA solutions are looking at or are really there yet. So, we still have more work to do. As I said, I suspect that
[02:11:14]  an MPA framework will kind of bridge the gap first. But that's the space. That's the domains. Those -- these are the -- these are the methods.
[02:11:24]  This is -- this is -- this is -- this is the game being played. You know, this is what's going on. Oh, okay. Almost done my drink
[02:11:33] , which means we -- you know, if there's not any questions, we're almost -- we're almost at an end here. My hope is that some of this
[02:11:47]  at least made sense. Yeah, I mean -- yes, we need smart hydration, but it's -- it's a tricky problem. If you start -- if you
[02:12:11]  start getting into it and realizing it, you have to be able to define or decide what's stateful. One of the -- one of the -- one of the reasons
[02:12:29]  that a lot of the, like, design decisions in terms of, like -- like, at least we have stuff like hooks now to kind of indicate statefulness. But if
[02:12:40]  you look at Marco, it was able to -- how should I put it? It was able to look at those -- where's the code? It was able to kind
[02:12:50]  of iterate over things like -- where is it? Story -- no -- stories. It was able to iterate over things like await tags and for loops and know that those are only
[02:13:03]  on the server, right? And in a sense, the heuristic here is really simple because it just looks for a class component. But if you consider, like
[02:13:14] , React hooks and use state, you'd have to kind of bridge the gap a bit because you might be tempted to just always use state, which then would be stateful
[02:13:28] , right? And that's why, like, languages like Svelte are kind of interesting because then you're kind of leaving it to the compiler to go, oh,
[02:13:36]  does this letable variable ever change? You know, when you bring it into the language like that, it's not just the convention, like, this is used,
[02:13:44]  this is stateful. You can actually do analysis and be like, oh, this actually isn't stateful. But in order to do that, you have to actually know
[02:13:51]  your whole app. You have to walk through the components. You have to -- you have to do that. And that's actually what Marco does is a cross-templ
[02:13:57] ate analysis approach that we brought into the compiler Marco 5 and will be in the next version as well, where you can actually, like, go, hey, child template.
[02:14:07]  What, what stuff, you know, is stateful and actually choose which inputs to import essentially, like, like what functions to call. It's, it's,
[02:14:19]  it's nuts. But that's why when people ask me about partial hydration and solid, I'm just like, oh, we're not going down the Marco path right now
[02:14:26] . That's going to take, you know, years of effort. We'll see if we can approximate things in a different way. So, yeah, I mean,
[02:14:38]  it's, it's, it's, it's a big, it's a big effort. Whew. Yeah. God, that's a hard one. I mean,
[02:14:48]  unifying it all, we're, we're a couple of years off. Like, I keep on talking about Marco Marco six and that is, is kind of like
[02:14:57]  getting maybe to like 40% part. Like we're focusing on some of the things that are important to us and important to, to eBay and important to like, like,
[02:15:08]  like in terms of like, we're still focusing on the MPA focus part of it. Like we're going to make MPAs as efficient as possible. Taking
[02:15:16]  that final step from MPA to spa is, is like the next step. So as I said, and this is going to be true about quick to, or even Ast
[02:15:24] ro, if they follow along this path is there's enough business and invaluable to things like e-commerce that optimizing the MPA cases is definitely, you know, where,
[02:15:35]  where this starts. We can look at, you know, we can look at seeing, you know, how we can bridge the gap with spas, but I feel
[02:15:47]  like we're going to optimize MPAs first, at least from this approach. Yeah. So, you know, I would say quick, I, the next evolutionary
[02:16:00]  step for SSR is already happening is my point. Quick might not have the smooth API yet, you know, maybe give them six months to a year. Marco six isn
[02:16:11] 't out yet, you know, maybe give us another six months, you know, to kind of iron out those details. What you're, you're going to see
[02:16:18] , what you're seeing right now is, is the, even react server components. Like they're all kind of just in that range where we have working prototypes. We know
[02:16:28]  the approach works, but there's a lot of details to actually make them consumable, right? Like react was able to get that demo out, but react server components aren
[02:16:37] 't even part of react 18. And I'm saying these efforts are, are, are, are going to be the, the things, right. And they are,
[02:16:49]  as if they're already happening, we're just on the precipice for the next step. I feel like what Rich Harris was getting at in the transitional apps and actually truly
[02:17:00]  bridging that gap. That's the one after that, that one, we said, we still got a couple of years till we actually bridge the gap, you know
[02:17:06] , maybe even a few years. But, but at least the next step I imagine is going to be happening in the, in the, in the next year. And I
[02:17:15]  mean, I said that at the beginning of this year too, you know, just, these are hard problems. And, you know, we actually working on suspense for
[02:17:23]  years, it is SSR that drove the whole thing. Um, I was talking to Dan Abramoff and he was like, yeah, you know, suspense was actually
[02:17:30]  us trying to solve the same, very similar problem to, um, what you got some Marco called fragments back in that, uh, you know, back, you know,
[02:17:38]  back when you. Started like he, I, I shared with him an article that Patrick, uh, the critter of Marco had, had authored and he, and
[02:17:45]  he, he read it and he was like, yeah, you know, this is basically why we're doing suspense too. And they're both based off basically big pipe
[02:17:52] , um, from Facebook. Um, so yeah, this is, this is gonna be the next couple of years. This is, this is a progression. As I said
[02:17:58] , Astro is doing an amazing job of bringing this all to people's attention. But I think that, um, there's a lot more work to do. I was
[02:18:07] , before Astro came out, I was like saying, well, like most SSR solutions I feel are like a two out of 10. I think, I think we
[02:18:14] 're, we're getting there. That's just that. And obviously I'm always kind of chasing the leading end of the stuff. And, you know, so excuse
[02:18:21]  my crassness when I sound like I'm dissing stuff like next all the time. It next is an amazing framework and makes developing stuff as easy as, as you
[02:18:32]  can imagine people love it for that. But like, we can do better, way better. Um, especially if where counts for things like e-commerce. Um,
[02:18:44]  smart hydration framework agnostic. That's, that's hard. Honestly, this is, this is Astro is going to be Astro's challenge here. I
[02:18:56]  like that they've taken the approach and they've just let it all bring it in. So the coordination of data serialization and stuff and, you know, using streaming
[02:19:07]  to really leverage it. This is a hard problem to do in its frameworks generic way. The problem is once frameworks have the tools you need to do this, they would
[02:19:15]  just, they could just use their own solution and not use Astro, so to speak. So, um, not everyone's interested in this space. You know,
[02:19:23]  there's plenty of opportunity to just do simple spas, small things, you know, it's not, but framework agnostic for some smart hydration. I think is
[02:19:31]  going to be like, you can't, if it's a compiler and analyze based solution, then definitely not. You see what I'm getting at? Like this is,
[02:19:43]  I, I, at least for now expect very specialized solutions. As I say, quick and Marco are the, are the first at the line. Um, yeah,
[02:19:53]  I, I, I think, I think it'll be interesting. As I said, I, I know Astro is not interested in writing their own framework. I've
[02:20:01]  talked to Fred K Scott, you know, but when I see Matt, do you feel it's post stuff asking the right questions? He's like right on the, he
[02:20:10] 's right on, he's right on the right thread. You know, you go like, is it going to happen? I don't know. It's important.
[02:20:20]  Yeah. Well, it doesn't matter. It looks smart of compiler. This is, this is no, this is no different, right? Um, marcos, HTML
[02:20:26]  templates might have all be JSX. It's not the templating that matters. It's the state we need. We need to be smarter about how we look at state
[02:20:35] . Um, and how we, and we have the tools. As I I'm big on reactivity. We, we, we do, we know signals, deriv
[02:20:44] ations, reactions, whatever you want to call those three. You know, our signals memo. A factor, whatever, you know, atoms. We have the language for state
[02:20:54]  built into reactivity. That's the key. We need to know about statefulness. The templates themselves kind of read themselves, like kind of manage themselves to a certain
[02:21:04]  degree. I mean, obviously, uh, Marcos for loop is not like solid. It's a compile time. One can more like spelled. Um, but that's
[02:21:12]  not a limitation because with Marcos, uh, tags API, we're going to be bringing, you know, it'll be easy to do kind of custom for loops and
[02:21:21]  all that stuff. So this, this will be able to be done with this kind of analysis will be able to done regardless of your type playing language. We just need
[02:21:31]  to know about state. Yeah, completely. Right. That's, that's what the, the restrictions there, right? Like we can use conventions, like react has done
[02:21:42]  a really good job of telling everyone to use use. It might, it helps a linter, but in a sense, they've maybe set the groundwork to do
[02:21:49]  smarter compiler stuff. I know where they're hesitant because like, it's a, it's a gamble when you like, if you can't fill all the gaps, you
[02:21:58]  know, that you introduce the own kind of inconsistencies. Obviously it comes with a game and the benefits are worth it. But like, if you played around with
[02:22:07]  the reactivity is felt sometimes you can see like these things you're like, Oh, weird. That doesn't work when you're like, Oh, I see why it
[02:22:13]  doesn't work. But like, it's an artifact of the method rather than like how you think it would work in a pure sense. And that's just because the
[02:22:24]  limitation, the compilation, you know, but to combat that you make your templates syntax, you make, you make it more analyzable, more limited. You, you
[02:22:35]  basically get to combat that. So, and that that's why, as I said, specific language compilers feel like that's how you get the DX and the performance
[02:22:45]  and get the whole piece together. What are your plans for solid assets? Yeah. So I have this blessing and curse of being aware of what Marco is doing, which
[02:22:59]  both gets me excited and gives me the incredible ideas, but also makes me like incredibly depressed as knowing that, like, I've been looking at this, you know, maybe
[02:23:09]  for, I've been looking for like two years now, but, you know, building each piece along. And I'm like, where, you know, I'm
[02:23:15]  at with solid and SSR in some ways is like where Marco was at six years ago, like the gap of, of, of doing that. And like, it's
[02:23:25] , it's, it's challenging for me. So I, I, I have a more pragmatic approach of how I'm looking at attacking this. And that's that
[02:23:35]  right now we have a pretty good SSR solution. I'm actually really happy with it compared to popular frameworks. Solid has one of the best SSR solutions. not
[02:23:48]  only is it arguably the fastest for a raw rendering perspective, we support streams. We support rendering. We have a good serious serialization and async rendering thing. Like the
[02:24:00]  people, people don't realize, I don't even realize sometimes the shortcomings of, of other solutions, just because I assume they would have done it. Like,
[02:24:07]  you know, a perfect example of this is the wait tag in Svelte. It just doesn't run on the server to my knowledge. Maybe they updated that recently
[02:24:21] , but essentially like, like, like, like without a serialization mechanism, you either just don't run on the server and run on the client or you, or double
[02:24:35]  executes essentially. Right. Little details like that. We've taken care of with solid and we have streaming and we, we have like the main, the main pieces,
[02:24:44]  but how do we move on from here? First of all, I, I made, I made streaming data in solid, which is pretty good, which means it rend
[02:24:52] ers the templates synchronously. So I love using the Marco example, just because it's the most visual one for this, but you know, solid has a hacker news demo
[02:25:02]  too. Where does it, uh, this one, the one that's, that I did with solid start and that's deployed to Cloudflare. Um, this one
[02:25:09]  has streaming too. Um, see, see that loading it's, it's, oh, it's gone now. Yeah. Um, and, but the streaming is
[02:25:20]  different. Let's use the same trick. We, we, we, we did with, with Marco. And to, to really understand what the difference is. The reason
[02:25:28]  this is so fast and part of the reason I absolutely love it. Streaming and MPAs, this whole story gets way better when you consider the cloud and serverless
[02:25:37] . the latency for your page load, um, is shorter when you're on the cloud or edge, but maybe you're now farther from your database. That doesn't
[02:25:48]  matter. Respond instantly with your MPA. People aren't really paying that cost much. Um, have the, have the HTML stream stream in. So even if
[02:25:59]  it's taking longer, you still get that client loading state and you don't load the JavaScript. It's just, it's just win-win obviously solid is a
[02:26:06]  spa here. It's not a big spa, right? Like if you, if you look at the JavaScript load here, when we reload this page, it's like three
[02:26:16] , 13.7 kilobytes. Like no one's crying, but it's not zero kilobytes. Right. And, but if you want to, if
[02:26:23]  we look at all the stuff, we look at the page. Let's, let's, let's look at the, let's look at the HTML here. Maybe turn
[02:26:31]  and blow this up a bit more. We have our HTML that's rendered. That's some stuff. And this is blown up. Now we see our hydration script. So
[02:26:44]  you see, you see the page up to the loading here, right? Okay. So this is our nav and we have more hydration markers than Marco does. This is
[02:26:54]  something I didn't optimize at the beginning, but it doesn't. Basically we have the lit HTML version of solid when you use hydration. Um, lit does this whole thing
[02:27:02]  where it wraps everything. But, um, essentially we have our script here, which, which, um, is this, the, the, the, the, what I
[02:27:12]  call it, the, uh, hydration script that, that we load kind of. In line on the page, um, to kind of handle it. But then the
[02:27:22]  streaming does this. It, it basically sends. All the data. Instead of sending the HTML. So it's not quite the full streaming solution because while this lets us
[02:27:36]  do the request on the server at the same time, lets us send it over the same stream, you know, essentially gets the primary benefits of streaming. The HTML content
[02:27:49]  doesn't render until hydration. So if your JavaScript bundle takes longer to come in, um, you don't, the loading state shows longer. So technically speaking. The
[02:28:02] , this does have most of the benefits. And if you are going to need to hydrate the section of the page anyways, probably negligible impact. Right. Since
[02:28:13]  solid the client side renderer, you're, you're, you're going to hydrate it anyways. But if you wanted to partial hydration, you, you, you
[02:28:21]  need want to send the HTML so that it can actually show it before the bundle shows up, or even if there wasn't a bundle, obviously. So I know this
[02:28:29]  is a really roundabout answer. What I'm getting at is the next thing for solid in terms of SSR is we're going to get true streaming like Marco and what
[02:28:37] 's coming in react 18. Um, this is a central, uh, cornerstone for, you know, other technology and improvements here. Once we have that streaming. And
[02:28:49]  as I said, with solid case, it's a little bit, we we've had the already consider some more edge cases and you might have hit already. We,
[02:28:56]  with a lot of marker code, like solids, um, hydration already works through lazy components, you know, you, and it already works through suspense, you know, suspense
[02:29:08]  boundaries and all that stuff. But if we make it be able to hydrate, um, streamed HTML, we've actually unified the async render in the streaming render
[02:29:17] . Cause right now there's like a different mode almost because the async render, which renders the whole page on the server and weights. Um, which is useful
[02:29:26]  for, um, doing like static site generation. Well, it lets you like use the same code and not like have to write special, like get static data, whatever methods
[02:29:37]  or whatever next does that. You basically could just take the same code base and apply it to any solids render methods. And it works. Um, you know, cause it
[02:29:44]  does the fetch as you render approach. Um, that is built to handle, um, pausing and resuming hydration. Whereas the stream method doesn't need it right
[02:29:53]  now. Cause if it hits a place that would have paused, it just assumes that the client's going to render it when the data comes in. So a little bit
[02:30:00]  technical, but essentially by getting streaming HTML into solid, um, we can finish unifying all the hydration and servicide running methods. I wanted this thing for 1.
[02:30:14] 0, I just, I ran out of time and I wanted to get 1.0 at the door to push things forward. Once we have that, um, and un
[02:30:23] ify it, it'll be easier to extract the, to use the same mechanism for passing the data. Um, or serializing the data between the different hydration methods,
[02:30:33]  rather than having special things for streaming. And that will allow it to make it easier to name space, uh, resources and hydration, which will right now. So it only
[02:30:43]  supports synchronous, um, islands and Astro. This will allow us to support async islands and Astro, and more importantly, just having our multiple async islands and
[02:30:53]  Astro. Um, and this will allow us to actually generate islands, so to speak, essentially, um, and leverage suspense and all the stuff that we, that
[02:31:04]  we've come to love. So streaming HTML, then multi-hydration route, um, uh, async hydration. That one will be a lot easier once we get
[02:31:17]  this going. And once we have both of those, you know, then we can kind of make a decision on how we want to handle partial hydration. My gut says
[02:31:28]  that short of having something as sophisticated as, as Marco's, uh, state analysis, what I want to do with solid is look at the router and look at being able
[02:31:42]  to use the fact that. With nested routing and they kind of go this year nested routing. Essentially. It's very similar to, to what I was talking
[02:31:55]  about earlier when I was drawing these boundaries, right? Essentially you have. The page, which doesn't really change. Then you have this route. And then if this is
[02:32:04]  a tab bar navigation, maybe inside of it, you have this route, right? Essentially you have, you have three levels and you know, this can be swapped out
[02:32:16]  when the tabs change. This can be swapped out when the side nav changes. If, if, if these are actually truly isolated right now, it's all, we have
[02:32:25]  the ability to not ship top level templates. Um, because we, we know, like if you start rendering the JSX from the HTML, from the root, I
[02:32:33]  think I showed this before in a stream, you can just go server only. Or if you start from HTML, we just know that you couldn't be re-rendering
[02:32:38]  it. So we don't send it. And that reduces a lot of code because a lot of the code is just static templates. The rest of it is just walking
[02:32:46]  the JavaScript. If we know that we're in a, in a hydration mode, we could also just jump straight to the nodes that need to be, you know, inserted
[02:32:55]  or whatnot. So solids, a static component solid has almost no JavaScript in it. Um, because it only generates the code that needs to bind the fine green reactivity
[02:33:06] . We don't actually create stuff. It's a clone operation. Um, I've shown this before, but, but why not just really quickly? I mean, you
[02:33:14] 've probably seen this before, like it, there's a template and then we call clone. So we can just not ship the template. And with, with a static component
[02:33:23] , there's almost no code here. So to speak, like you don't have any of this code. So the, the approach that I'm thinking is. If
[02:33:30]  we can use the router to reestablish the top of the app, so to speak, it might be, it could be possible to have, um, a router that
[02:33:45]  does server rendered page partials using basically the same analysis we use for, um, you know, like this sort of routing. You can see the routes here, you
[02:33:57]  know, you know, like, you know, what the structure is. You know, what the nesting is. And in solid, we have these data components, which
[02:34:05]  I talked to in the last session on routing. You could essentially know what, what the data is, know the nesting of the routing and essentially look at for big enough
[02:34:14]  navigation. Do doing this sort of re not sending the top level templates and basically starting our page over again as a way of almost, uh, partial, um, simplistic
[02:34:27]  partial hydration. Um, it's the best way to put it. It's not, it's not fully. Partial hydration. We just figure out how not to
[02:34:35]  send the top level templates at each nested route level. So basically using the router as a way of reducing code, but essentially we're still taking a very spa first.
[02:34:46]  I feel like this approach is the best way to kind of try and bridge the gap from the opposite side from the spa side. I don't know if people are working
[02:34:55]  on this as much, but this is, this is, this is the, that's the part three. But the truth of the matter is, you know, tying
[02:35:02]  this all together, we have to decide at what point that level of optimization is worth it essentially. Cause if we have streaming, we have a small size already, you know
[02:35:16] , we have to evaluate that. But as I said, it's that's three stages for me to get to with solid. So that's probably a couple of years
[02:35:26]  or two to fully realize that whole picture realistically. Right. We might get, we'll, we'll get streaming pretty quickly here. We'll get the, the, the
[02:35:34]  other hydration stuff. But, you know, I think it all kind of fits in this, in the, in the same timeline, so to speak, you know? So
[02:35:42]  I'd say we, we, at least 12 months till you start seeing stuff come together, but yeah. Okay. That was a great question. Yeah. I guess
[02:36:01]  I suppose in answering that people have had plenty of times to ask, ask, ask any other questions, but feel free to shoot right now while I'm here. I'm
[02:36:08]  actually been trying to. Yeah. I mean, yeah, it's, it's also cause these are tricky problems. I'm speaking pretty high level here, but I
[02:36:22]  just, I just know from working through them that there's so many edge cases. You, it's dangerous. It's dangerous. You can't like just present a
[02:36:30]  partial, partial solution. Right. And the truth of the matter is, yeah, there's time constraints too. Cause at a certain point you just got to draw the line
[02:36:37]  and be like, okay, this is good enough for that release. I drew a line on 1.0. No, I'm going to have to realistically with solid
[02:36:42] . What's going to happen is do a bit of the work. Funnel that back into the ecosystem. Things like solid start, you know, so people can actually leverage
[02:36:51]  it and benefit it. So, you know, streaming, if, if, if I can get streaming to work. Right. And I can get the multiple hydration routes
[02:37:00] , you know, for stuff, we'll have a really strong solution for solid, both on. MPAs using the Astro and for using, and for,
[02:37:07]  you know, more traditional spa types of stuff, you know, spell kit or whatever, using solid start. And that's going to be good for the, the short term
[02:37:18]  for at least for the next year or so. Right. That that's, that's, that's going to be the store. And I think given, you know,
[02:37:25]  the solids performance size, little optimizations we do, you know, and DX, I think that's going to be plenty. To, you know, make it a
[02:37:34]  very compelling approach compared to even Svelte or, you know, other competitors on the side, but, you know, always looking for opportunity to do more. I love
[02:37:43]  looking at new tools, new frameworks, new approaches, stuff like the prison compiler and all that, because. You got to know what, where things are headed or what we
[02:37:52] 're, you know, where things can go so that you can, you know, build the best stuff you can do. Just acknowledge, you know, like I am
[02:37:59]  today that we don't have partial hydration and solid and, you know, that's okay. You know, I don't have to go chase it. I don't have
[02:38:05]  to rush out an MPA mode or something just to be part of the conversation. We can, we can just, you know, appreciate what the work being done and
[02:38:16] , you know, have hope and, you know, work towards a better future. Yeah. Yeah. I mean, besides that, you know, I'm, I
[02:38:28] 'm always looking for ideas for streams. I'm thinking maybe I can get some guests from the ecosystem on to kind of talk about different topics with me in the future.
[02:38:40]  I've been covering a lot of in-depth stuff with solid, which obviously is great, but also, you know, at a limit, you know, I'm,
[02:38:50]  I'm, I was on the discord earlier trying to figure out, you know, what, what can we, what can we cover? One, one of the,
[02:38:57]  one of the suggestions was like, like, let's make Alpine JS in a stream or like, like petite view, you know, because, you know, if you
[02:39:05]  already have a reactive system, you know, building something like that, you know, maybe, you know, a few hours work or something. Can I get a sketch up
[02:39:13] ? And another cool suggestion was like, let's do like a universal renderer kind of thing, but I'm not, I'm not familiar with what I want to do
[02:39:23]  universally. Um, so, uh, Federation. Oh, do you mean like module, module of Federation? Did you see Jack Harrington's, uh, videos where
[02:39:37]  he's basically created a really quick way to do, uh, micro friends using module Federation? I think it's, I think it's worth checking out and it's kind
[02:39:45]  of, it's kind of interesting. Um, it's interesting. It is interesting to me. I can, I can dig into this one for a minute too.
[02:39:54]  because, uh, I don't know if I should say too much. It's just, I think module Federation is really powerful. And I think it's going to be
[02:40:08]  the bridge for people who have react apps to kind of get solid into their apps and kind of figure out how they can kind of do this. Astro is another way
[02:40:14] , but that's a more radical way because they, they, they have to be willing to embrace MPAs. Um, you know, if you already have react,
[02:40:23]  you already have the bloat there. Um, you know, we're good that is why I didn't want to talk. I actually have concerns that module Federation is
[02:40:32]  just the wrong solution altogether. Um, mostly like inherent waterfall situations. I think, I think you want, I don't apologize. I think, I think you
[02:40:53]  want to coordinate, if you're going to get into SSR and hydration, you want to coordinate this stuff on the server. And you can use module Federation on the
[02:41:00]  server, but that's not really how we're seeing it being used. We're seeing it being used as a way of like going, Oh, maybe I need this.
[02:41:07]  Let's lazy load. Like it's a, it's a mechanism for almost like lazy loading. Um, and you know, that's, that's, that's fine
[02:41:15] . And it's powerful. And if you already have the bloat of a react app, like who cares, but you still need this organization and coordination to kind of
[02:41:23]  make module Federation, um, you know, do what you want, which includes often client side JavaScript. If you really want to do more with it, it would be like
[02:41:37] , can we actually federate on the server and interweave the streams and stuff? And okay. I can do a plug right here. Like, why not? We
[02:41:44] 've been working on this exact problem with Marco. So, you know, I'm going to take, I'm going to take us, I'm going to, I
[02:41:49] 'm going to show you, um, a new repo that we, we have been going and Dylan. I don't know if he's still around, but this, this
[02:41:57]  is, this is, this is, this is actually his baby to a degree. Um, he's been working on this, uh, this new thing called micro frame and
[02:42:06]  maybe demoing this sometime in the near future will be worth it. But what micro frame is, is it's almost. Like an eye frame in terms of, uh
[02:42:16] , API, but the idea, and this is a Marco component, obviously, but the idea here is that. It's a streaming I frame that works on the server
[02:42:27]  or the, or the, or the browser. So you can basically stream. It exposes HTML. So you can basically extreme HTML from one service on the server into another
[02:42:39]  service, kind of interwine the streams and make that your output. And what streaming HTML lets us do is keep the benefits of stuff like partial hydration. Right.
[02:42:48]  Because that's the top level app that can be partially hydrated. Right. Um, which, which is really quite powerful. Um, so, and it works on the server
[02:42:58]  or the clients. So obviously the, the, the, if you, if you have like a client rendered app, the idea is, well, treat it like a
[02:43:07]  client rendered app, just stream the script tags and stuff you need for that part of the, of the app to work. And then it will load in the browser,
[02:43:14]  lazy loaded, however you want, if it's, you know, but you can also like after the fact, you know, render something, the client render one of these
[02:43:21] , these, um, microframes and have it actually stream the HTML into the browser as well. But taking this approach means that the default of not loading the code in the
[02:43:32]  browser means that there's no client side overhead for being able to do micro front ends. You're not like going, Oh, here's a waterfall, like, Oh
[02:43:39] , I need this component and let's go to the server and fetch it. It's all happening. Uh, at initial load and it's happening streaming. So you can
[02:43:47]  still handle the async. You can still handle the timing of the stuff. It just all kind of comes together. And I think this is really, really, really cool
[02:43:55] . Um, right. Like if you just read some of these things, controls loading and error states does not break. Navigation does not appear differently on screen readers did not
[02:44:06]  cause issues. These are things that are improvements over iframes. Content can be rendered with the rest of the page. You can actually escape it because it's not
[02:44:11]  an iframe. So there's no resizing issues, flows and performance. It shares a single connection with the host. So no round trips like the iframes
[02:44:17]  is, does not impact SEO. Um, it's high priority, avoids additional windows. Spoiler plate. Spoiler plate. Like the solution is just really,
[02:44:27]  really quite cool. Right? Obviously, if you go into micro front ends, that's what this whole warning is here. It's like, you know, you have to
[02:44:38]  do a bunch of, you know, you, you now have to manage multiple services. It's, it's definitely an overhead. But what's cool is like this
[02:44:48]  still works with stuff like model federation. If you want to, you know, have a way of, you know, choosing which modules and getting all that de dup
[02:44:58] ing stuff if you want. But essentially, if you make the interface HTML, you have a really powerful way of just doing micro front ends. Um, you know,
[02:45:06]  here's, here's an example here using Marco syntax, but realistically, this, this approach is framework agnostic. You could stream a react app with someone react gets
[02:45:16]  streaming react 18 or a solid app into the Marco app. And eventually we'll look at having hosts that aren't Marco, uh, essentially. Um, so you could,
[02:45:26]  you know, have a solid app that streams in a react app. It's kind of like a microservice, you know, it is microservices. So it's
[02:45:32]  not unlike, you know, Astro or whatever, but it's built with server side rendering and streaming as a first class citizen. That's basically thing. So I do
[02:45:39]  suggest you get a chance to check it out. There's still early days. Um, you know, but this, this is, this is a solution that we've been
[02:45:49]  building, um, at, um, with the Marco team at eBay to basically have a micro front ends set up. That's actually optimized for things like partial hydration.
[02:46:03]  Sorry, tangent. It's just, uh, this one's close to the work that we've been doing recently. And I, and while I think module federation is
[02:46:10]  super powerful, there's like, like the, I don't know if it's loaded only to web pack right now. Like there, there's something really, there
[02:46:19]  is something pretty powerful about using HTML as the interface for your services. Um, yeah, sorry. I've like lost all the viewers when I went on my little sp
[02:46:30] iel, but, uh, you know, it is what it is. Yeah. No, I, this is, this is, this is, this is the interesting part
[02:46:40] . And this is where, you know, things are heading and where we have to think, um, I've been blessed, as I said, to be part of the
[02:46:47]  Marco team here because I've had the opportunity to be get exposed to type of problems. It's funny, like I'm, I'm being thankful for being exposed to
[02:46:56]  really hard problems because developing a framework like solid or react. You're kind of like on this happy path, um, because you know, popularity react and the kind of,
[02:47:05]  you know, solutions and tooling that's been built around it. Marco's had to like carve its way through brambles, you know, before there was beat, they
[02:47:14]  had to do lasso for on-demand bundling. You know, these are, these are the kinds of things you want with like server rendered based frameworks and
[02:47:21]  stuff. And they basically had to have to do everything themselves, solve these solutions because no one was interested in solving them at the time. And so the exposure we're seeing
[02:47:33]  here is just only positive. You know what I mean? Like having Astros and quicks and stuff in react acting, adding streaming, you know how big that is?
[02:47:42]  Like AWS serverless does not support streaming. Um, most serverless functions don't support streaming. Um, you know, even like, uh, stuff like Kuro
[02:47:55] ku. I doesn't think, don't think do like, there's a huge amount of the, of like service for sale. Like that don't, I don
[02:48:02] 't believe support streaming, but if react support streaming, you better believe suddenly that's going to change. And I think, I think that's sort of, you know,
[02:48:14]  the, the shift we're seeing here and, um, just having the exposure to the problems earlier, being able to see, um, what solutions could look like has really
[02:48:24]  shaped, um, my thinking in terms of where things are heading. Are heading and I said a lot of thanks goes out to the team, Dylan. He's in
[02:48:31]  here and, uh, and Michael Rawlings who have literally been working and thinking about these problems for years longer than most other people have been. Um, really, really smart
[02:48:40]  guys who, who, who've really gone deep in, in these areas. So, um, I hope more people take it off to check on Marco, especially as
[02:48:49]  next versions come out and, uh, um, you know, kind of get, get a picture of, you know, where things are heading. And I know there's
[02:48:57]  always this conflict between solid and Marco to degree, but at least for the next few years, there's, there is a, uh, there's a gap. Um
[02:49:08] , MPAs and single page apps are not the same thing as much as we want to tell this transitional stories. There is a, there's a chasm. I
[02:49:15]  feel sometimes like when people are on the spa side there, you know, they're right. They're right. They, they, they look at the old guard of
[02:49:22]  the MPAs and they're like, you know, these guys are completely in a world where we were just never going back there again. And they're right. But
[02:49:29]  I think they're also kind of doing that thing. It's like, if you've ever climbed up a tall hill or a mountain and you can see the next mountain on
[02:49:38]  the other side and you're like, Oh sweet. I just go there and then we're almost there. And then we're there. And what they don't realize
[02:49:46]  is there is actually a valley in between the two mountains. You're at a certain point, you can only see the mountain and the next mountain ahead of you. And you
[02:49:55]  don't realize where the huge pit is. And, um, it just so happens if you're coming from the other side, we just happened to already see where that pit
[02:50:04]  is. And we've been working on building the bridge and I think it's going to come around. And I think like innovation, we're going to see a lot
[02:50:10]  in the, in the next little while, but, um, you know, we got to be realistic. And, uh, I I'm, I, as I said
[02:50:18] , I'm thankful for the opportunity to, to basically have my eyes open to this. All right. I think that just about does it. I don't know if anyone
[02:50:31]  else has any questions or whatnot. Probably talk about these kinds of topics and subjects forever, but you know, there's always the other streams. I said, if anyone
[02:50:39]  has any ideas for streams, things they want to see, please, you know, tell me in the chat, um, go to the discord, you know, what's
[02:50:48] , what's the cheesy line? Everyone says like follow and subscribe or whatever. I just, uh, I'm gonna, I'm gonna keep on making content the best I
[02:50:56]  can. And, uh, hopefully you all continue to enjoy it. All right. All right. All right. Um, yeah, I'm gonna, I'm gonna
[02:51:07] , I'm gonna call it tonight. Thank you all. See ya. All right. Um, yeah, I'm gonna, I'm gonna, I'm gonna call
[02:51:11]  it tonight. All right. Um, yeah, I'm gonna, I'm gonna call it tonight. Thank you all. See ya. See you then.