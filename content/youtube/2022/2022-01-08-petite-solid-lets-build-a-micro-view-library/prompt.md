---
title: "tcwe85p7M9c"
slug: "tcwe85p7M9c"
duration: "2:02:37"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/tcwe85p7M9c.mp4"
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
[00:00:01] Hey.
[00:00:02] Welcome to my stream tonight.
[00:00:03] Thank you.
[00:00:05] uh we're just gonna spend a moment here getting started sorry about the fan in the background
[00:00:11] Yeah.
[00:00:12] Thank you.
[00:00:14] Been going like this the last few times.
[00:00:18] Hopefully, it's not too loud. Come say hi in the comments.
[00:00:22] Show me that you're here. I know there's a bit of a delay, but
[00:00:26] Thank you.
[00:00:28] Thank you.
[00:00:30] We'll be getting started here in just a minute.
[00:00:34] - Yeah.
[00:00:34] All right.
[00:00:42] Thank you.
[00:00:43] I'm actually pretty excited about this topic here because...
[00:00:48] I'm going to cover a technique that's used to render views that was basically the go-to
[00:00:56] for the early days of JavaScript frameworks.
[00:00:59] Originally,
[00:01:01] It wasn't expected that
[00:01:04] that you'd be running JavaScript on the server.  So it was always expected that you'd be running some other backend in HTML  and that your JavaScript would run on top of that.  It was actually hydration first.
[00:01:18] Could you hug him?
[00:01:20] Congratulations.
[00:01:22] So I'm pretty psyched about this.
[00:01:28] Okay.
[00:01:29] this topic in general.
[00:01:32] Okay.
[00:01:33] Thank you.
[00:01:34] Anyway, sorry, actually give me two seconds. I'll be back in 30 seconds.
[00:01:41] Thank you.
[00:01:43] Thank you.
[00:01:47] Thank you.
[00:01:54] Thank you.
[00:01:55] Thank you.
[00:01:56] Thank you.
[00:02:20] Thank you.
[00:02:28] Thank you.
[00:02:29] Thank you.
[00:02:30] Thank you.
[00:02:31] Thank you.
[00:02:33] Sorry about that. My youngest had a little bit of a thing. So he wanted a good night hug. So thank you all for joining the stream.
[00:02:44] We can get started here pretty quick.  As usual, I'm going to start talking a little bit about this week in JavaScript first.  It's been a few weeks.  We've been off since...
[00:02:56] I guess it's been three weeks since we've lost this dream.  And you'd think that we'd have--
[00:03:03] you know, a lot of stuff to talk about there.  But honestly, I've been really heads down working on
[00:03:11] on a lot of the work around the new Solid release.  That's been a big part.  But, um...
[00:03:17] And I'll talk about that in a minute, but a few things did catch my eye over the last week here since we came back.
[00:03:23] It was kind of funny, I don't know if you saw this Twitter post that was going around about five topics you can talk about for 30 minutes without any preparation, which instantly made me think of this stream, because generally that's I'm always throwing stuff together last minute.  But it's cool if you were part of this thread, it's really interesting. A lot of people have a lot of interesting interests, and I thought it was actually really cool. A lot of people were participating in it.
[00:03:49] The other big one for me was we had an interesting discussion with Ryan Florence from Remix about streaming. And streaming's kind of been a hot topic because of
[00:04:01] React 18 coming out with streaming and obviously Solid's release that came out this week also has streaming.
[00:04:07] And he brought out an interesting point, which was that he said, "The more experiment with streaming the initial document, the more it seemed only useful for the following case. When the user has a fast network and the server is slow,
[00:04:23] at preparing that response.
[00:04:25] Better invest in making your server fast.
[00:04:28] And in some ways, he's not wrong.
[00:04:31] Thank you.
[00:04:32] Like,
[00:04:34] It's the latency to your data that's going to make streaming more apparent. Right. The whole trick to streaming is
[00:04:41] the faster you can get the static content to the person,
[00:04:44] and how much that differs from the data, that's the more beneficial it's going to be.
[00:04:49] Um,
[00:04:50] So I agree with him on that side.  But what I was trying to say in this discussion here was that,
[00:04:59] it always just falls back to the original rendering method.  Like if you have a slow network, it's not going to be any worse because you're streaming.
[00:05:08] Right.
[00:05:09] Um,
[00:05:10] But, you know, he brought the trade off is the problem with streaming is we have to respond with the headers.
[00:05:16] when we send that first chunk.
[00:05:18] If we start streaming the response before we load all the async data,
[00:05:22] We have to say that it's like 200, even if...
[00:05:25] something might error later.  And this causes a lot of
[00:05:29] it makes things a lot trickier, right?  This is the big trade-off.  You might be getting, you know,
[00:05:34] certain parts of the content sooner.
[00:05:36] But
[00:05:38] but you're not necessarily going to
[00:05:41] know everything up front.  Remix has been built off this concept of like,  fetching all the data up front,  knowing what you need based off the nested routing,  which I think is really, really, really smart.  Oh, hi, I have a bunch more people saying hi in the chat.
[00:05:57] Yeah.
[00:05:58] So many.
[00:06:03] But essentially where I was getting at is,
[00:06:09] there is a lot of complication here but i think there's a lot of potential here and most that comes in that
[00:06:17] There's lots of different types of experiences.  And I guess what I'm saying is the more we move towards patterns  that enforce less JavaScript, things like...
[00:06:25] partial hydration, things like
[00:06:30] Oh, I see. Cool. Thanks, Theo. More like we approach things like partial hydration, more like we approach things like,
[00:06:40] you know, React server components, streaming starts looking more beneficial, right? Because the more you can push those interactive parts into like islands and things down and have separate pieces coming in, the more you're going to notice the difference.  I made kind of a comment about, you know,
[00:06:56] I don't know, if you go to the edge, aren't you more likely to have faster, faster,
[00:07:02] static response times and slower data response times.
[00:07:07] And sometimes you're not always in control of your back end.  Like, sometimes requests take different lanes.  Sometimes you're using third party APIs.
[00:07:14] Essentially, streaming is just kind of this great equalizer in that it makes the worst case better.
[00:07:21] you know,
[00:07:23] And I put up an example and whatnot. And, you know, this is kind of an interesting kind of point in general, though, because it isn't it isn't just like a straight win. My examples are kind of terrible. I show a loading state for like 100 milliseconds and everyone knows that a quick loading state isn't the best user experience. So,
[00:07:43] It does take a little bit of consideration that these demos that we've been seeing from streaming so far, like the React one,
[00:07:51] Haven't really...
[00:08:02] Um.
[00:08:03] you're gonna have mostly unchanged content.
[00:08:09] Thank you.
[00:08:10] Thank you.
[00:08:11] Right. And my final kind of conclusion or thoughts on this topic of streaming from this thread was that
[00:08:19] Basically, streaming is beneficial when you have higher data latency.
[00:08:24] when you have multiple data dependencies with different response times,
[00:08:27] you know, that...
[00:08:31] related like suspense boundaries and when things like the shell
[00:08:35] like the static part, make a greater percentage of the page,  and contains other types of assets, like images.
[00:08:41] Because in theory, if you can start loading those images sooner, you're not only like
[00:08:47] kind of progressively loading the page in front of the user,  you're going to actually make the total response time of the whole page faster.  It's not just the pieces that you can load in sooner.  It actually affects the whole load time.
[00:09:01] And truthfully, we're probably leaning on the browsers a little bit hard for this because
[00:09:06] As I kind of followed thinking about characteristics, a lot of the SPA framework apps we have today might not benefit from this as much as Islands architecture or MPAs.  But I think with things like React Server Components, the question of where this value comes changes.  It's really hard to see today because we haven't seen very many implementations like that.  One final comment from Ryan Florence that I thought was really kind of interesting was...
[00:09:33] He basically showed the difference between streaming and not streaming. And keep in mind, this is a Remix app, so there's like a ton of script files. I don't know why it built up this way, but let's see if I can get it on the screen. It's still pretty small.
[00:09:48] You know, he's got a whole bunch of scripts. What he's showing was with async where he waited the whole time and then loaded the resources.
[00:09:55] versus with streaming where you can see that the resources  start loading while the page is loading.
[00:10:03] The total response time was basically the same. And the funny thing you're noticing here is these resources are actually taking longer to come in in this version than in this version. Like you can see that they're actually visibly shorter. They spend less time waiting. So,
[00:10:20] Some of this might just come down to the way the browser schedules multiple parallelized requests. It might be out of our control.
[00:10:29] Right. So as much as this, I'm
[00:10:34] Yeah.
[00:10:35] Right. Like as much as like in theory, this should be good.  I we might be still hitting cases where, you know, this platform itself isn't set up to leverage it as well as it should be like.
[00:10:47] It's hard to understand why the total load time is the same in these two examples, because as I said, look here, they're clearly starting earlier.  And like it's it is.
[00:10:59] It is a bit better.  You can tell that it's a bit better,  but not as beneficial as you'd think.  So...
[00:11:05] I think we need to keep our eye on it and where the benefits are and see how the future progression of how we build apps affects how we actually, how beneficial this is.  I think the other side of the argument is, if you guys haven't heard of it, there's HP Status 103, which lets you respond early to requests with resources to preload.  That might be a big changer for this graph because then this graph could start also loading assets before this finishes sending.
[00:11:35] that case, maybe that's enough. The benefit of streaming comes in more so when you have other  types of assets, not just these JavaScript assets coming in, but it actually benefits you to render  parts of the page sooner and different data lanes. So
[00:11:51] Yeah, I mean, there's trade-offs and I'm most excited that I think this is an area where there's a lot of exploration possible.
[00:12:00] HP2 for the win.  Yeah, I mean...
[00:12:05] Yeah, there's been a lot of good benefits made to the biggest unfortunate part was that the push didn't end up solving our problems as much as we'd like.  They did some smart stuff with the purple architecture from Google in terms of kind of a shell app architecture.
[00:12:23] It's funny, though. Everyone was talking about in 2017, 2018, and then it just disappeared.  I don't know what happened or why people stopped talking about it.  Even Google stopped talking about it as much. But Polymer kind of pioneered this approach that really took advantage of push and whatnot.  It still had this problem that it didn't know what to invalidate and what not to send.  It wasn't perfect. And I guess maybe that's why it fell away to the wayside.  But yeah.
[00:12:51] I think that...
[00:12:52] I think that they are aware of this, you know, the browser vendors and they are working stuff.  I think early hints is going to be a game changer.  And maybe in the end, streaming's role in this whole picture is much more subtle.  Like maybe...
[00:13:07] Maybe it isn't about like just streaming everything as soon as possible. Maybe, you know, if we have granular control over the resources and data sources we have in our app, maybe we selectively decide, you know, at what point we want to stream stuff. And, you know, kind of certain things caught the stream to wait and other things don't. I think maybe it gets that level of control.
[00:13:37] and stuff are coming in here, do experiments, find ways to make this usable. This is a complicated  area. There are benefits. But...
[00:13:46] maybe it'll take us a while to figure out how to leverage them. That's me speaking optimistically. Realistically, this technology has been around since 1997. So you got to ask yourself why more people aren't using streaming. And because like,
[00:13:59] You know, it's been available. It's been it's been called the lost art so many times I've lost count.  I pulled it up once. There's a Brian. Was it Brian Atwood? I'm trying to remember. Jeff Atwood.  Yeah. Article of 2005 where he was already calling a lost art.  And then, you know, when Facebook released Big Pipe in 2008 or 2009, they were still like, oh, yeah, no one's doing this anymore.  And same thing with Marco in 2014 and then, you know, React in 2008.
[00:14:25] 22, you know, we keep on going back to this. It's just, I, at a certain point, we, we want to push the ability, what we can do with performance. And maybe, maybe it's, you know, architectural shifts that have this get away from us every time. But I think we're on the
[00:14:43] the precipice of another architectural shift in front end.
[00:14:47] I don't know. I think it's going to be interesting to see if streaming plays a part of it. Some bigger players, bigger companies, people with maybe different needs than the average developer think it's important and have been investing in it. So probably something to take notice of.
[00:15:02] Yeah.
[00:15:03] Yeah, yeah, definitely. I was going to say that's a good point.
[00:15:07] Thank you.
[00:15:08] Thank you.
[00:15:08] Thank you.
[00:15:09] Mm.
[00:15:12] Ajax, what, came out in 2005?
[00:15:15] And, yeah, I mean, I think the problem back then was we just didn't have good tools to use. I remember using Ajax and like .NET update panels.
[00:15:25] which is horrific experience.  jQuery came in and wrapped it.
[00:15:31] And
[00:15:32] you know, like,
[00:15:33] I think at that time we just didn't have an ecosystem was like the most amazing thing that ever happened to JavaScript. And then like we weren't there ready to pick it up when it came in. It took well into 2008 or nine for the first JavaScript frameworks to come out and
[00:15:52] You know,
[00:15:54] Thank you.
[00:15:55] Part of that, too, was the browsers at the time.  You got to remember JavaScript was, like, slow, like, really slow back in the day.  And it wasn't until 2007, 2008, suddenly all these browsers, like, really invested in it.  You know, Chrome came out, WebKit.  I'm trying to remember what Mozilla engine was out at that time.  But essentially, around 2008, suddenly everyone started investing in their JavaScript engines,  and they all got, like, 10 times faster at the same time Node came out.
[00:16:25] It was kind of funny.
[00:16:27] As I said, I jumped on there, but I was working in .NET and backend stuff at the time.
[00:16:34] You know, it was definitely a different time.
[00:16:37] But what's cool about that whole thing is that different time is basically sort of where I'm thinking of tying into what we're talking about today, really, because...
[00:16:51] You know, I'm going to do a little bit of a, what should I call it?
[00:16:56] history lesson for a second, kind of as I talk, I'm going to say, but let's just open a, actually, before we do this history lesson, sorry, I'm getting ahead of myself a bit. Let's first just talk about
[00:17:12] Today we're going to look at what I was saying,  building something similar to Petite View or Alpine.  And if you guys aren't familiar with that, let's take a moment  and just kind of look, and I'll show you what I'm talking about.  Because Alpine JS and Petite View
[00:17:29] use a technique that was very prevalent in 2010, 2009 period frameworks. And I think that's what makes this kind of interesting because we'll be able to kind of do I'm going to use this as an exact as a chance to basically
[00:17:43] do a bit of a history lesson while we kind of go through this.
[00:17:47] Streaming existence, 1994.
[00:17:50] Yeah, I wonder if you could control it.  As far as I know, 1997 chunked encoding, HTTP 1.1  was officially the beginning of when people--
[00:18:02] were doing stuff with it. It was HTTP 1.1. Back to Alpine. Essentially -- and I can blow this up if you had
[00:18:12] Sorry, wrong window. What Alpine is, is you server render this or use a static HTML page and you maybe put a script tag on your page and then you write your template right in your HTML and as the document loads with the JavaScript, it
[00:18:28] It basically...
[00:18:29] hydrates this template.  But this is a little bit different than hydration or server side template.
[00:18:40] In that, essentially, in those, what you're seeing is the final realized version of your app, generally, with those kind of templates, where this is really sort of a client rendering technique.  It does augment content, per se, but what you're doing here is actually writing the bindings, like the expressions into the HTML, and client rendering them.
[00:19:10] to have a Rails backend or PHP backend,  and you want JavaScript to do dynamic stuff.
[00:19:15] Um,
[00:19:17] But,
[00:19:18] You know, it was...
[00:19:21] You were kind of limited by the tools.  Like, people hadn't even really thought about doing much in the way of, like,
[00:19:26] Like the whole like modern like isomorphic wasn't a thing back then.  So you had two options.  You basically...
[00:19:35] you know, we're dumping strings into HTML, like inner HTMLing it, or, um,
[00:19:40] This was basically the first chance of being able to do something declarative with it.
[00:19:45] Thank you.
[00:19:46] Yeah, this is a good point, actually.
[00:19:48] You can't really have reusable components in Alpine.
[00:19:53] It's a slightly different model.  I think you could kind of force it, but it's not really...
[00:20:00] the default position.  And I'll see if I can explain that a bit later.  'Cause I use Knockout.js
[00:20:09] for years and Knockout JS works exactly like Alpine  and PetiteView, see if I can find PetiteView here.  Here it is, PetiteView.  PetiteView is,
[00:20:22] basically the same sort of thing.
[00:20:26] Yeah, here's an example, right?  Script tag and then scope and then
[00:20:30] you bind account and account plus. Some people call these progressive enhancement. But if you think about it, these frameworks don't work if you don't have JavaScript on the page.  Like, I don't know if that's someone's like whose definition of progressive enhancement that is, but this isn't progressive enhancement because it you're this isn't like the page you render in HTML is actually workable.  This needs JavaScript still to actually work.
[00:20:55] render anything.  But as I said, very popular with the PHP Laravel crowd,  who don't need a JavaScript on the back end,  and then they can use these frameworks for the more  interactive components on their page.
[00:21:09] So this, as I said, made a comeback with Alpine.  And Alpine is a pretty popular framework here.  You know, what is, let's see, almost 20,000 stars on GitHub.
[00:21:24] basically kind of reinventing the pattern that we were using back in like Knockout in 2010 and
[00:21:33] and whatnot. And if you're wondering why this approach kind of went away, you know, the way the dodo bird, so to speak, that was because
[00:21:44] Essentially,
[00:21:46] Yeah.
[00:21:46] The performance,
[00:21:48] of going through and
[00:21:51] kind of parsing the DOM nodes wasn't -- sorry, framework -- wasn't actually great.
[00:22:03] It's to be fair,
[00:22:05] I definitely, when I was first working on Solve, before I went to GSX,
[00:22:10] Um,
[00:22:12] I did manage to get okay performance out of this approach, but just if you want an idea of where frameworks like this sit,
[00:22:24] Here's Alpine.
[00:22:26] over here, right at the end of the list. And here's Knockout right over here. And
[00:22:32] I can't remember if Reactive uses this approach too,  but, you know, Vue supports this approach,  but that's not generally how they're going to be doing their templates  when you enter the benchmark.  But this approach is definitely on, like,
[00:22:46] the Blazer side of the table, not on the, you know,
[00:22:51] well, solid side of the table. So essentially just to kind of get a perspective of why we moved away from it. Even with server rendering, you know, when we have full control, we can do a lot more with our compilers and our tooling in the JavaScript side. So
[00:23:07] Slowly by slowly, most frameworks stopped supporting this.
[00:23:12] And over time,
[00:23:14] It actually became a niche enough that AlpineJS came out like way after the fact and kind of brought this back.
[00:23:20] But to be fair, people still...
[00:23:24] Thank you.
[00:23:25] uh,
[00:23:26] Yes.
[00:23:28] Thank you.
[00:23:29] Thank you.
[00:23:29] people still ended up having this need. So I still get asked about this, you know, weekly, perhaps. So,
[00:23:38] Yeah, that's kind of my introduction.  I don't know if anyone has any questions about these frameworks.  And as mentioned here, there's
[00:23:45] There's some mechanisms to make this experience nicer.
[00:23:50] Thank you.
[00:23:51] Thank you.
[00:23:52] Yeah.  I think that's a pretty powerful one because we're going to see as we –
[00:23:58] kind of go ahead and build this that like,
[00:24:00] We have to do a few little tricks here to make our experience nice. So
[00:24:05] Um,
[00:24:07] Yeah, let's let's let's.
[00:24:09] Let's -- sorry, I don't know why there's a solid Hacker News demo in the middle of this whole thing. Let's just start building stuff, I think.
[00:24:19] It's funny, I got through the whole intro without...  Actually, one last interruption before we get into building stuff.  There was a couple other things that happened this week.  More specific...
[00:24:32] Oh.
[00:24:33] Thank you, Jacob. More specific to obviously my neck of the woods, which is,
[00:24:41] Solid.js had a couple of big announcements.  So I'll just repeat them here in case you haven't seen them.
[00:24:47] That was interesting. Where are we going here?
[00:24:52] All right. First of all,
[00:24:55] That was a promoted ad. Interesting.
[00:24:58] Solid Hack was announced this week, and it's a...
[00:25:04] Hackathon, it's a long run hackathon. It's going to go over the next three months. $12,000 in prizes that we raised from sponsors. There's basically three different categories. And we're just hoping to kind of energize people building solid projects and checking it out. So really excited about that one.
[00:25:21] and the other big one is we released 1.3 this week,  which has HTML streaming, like I've been talking about.  It has some cool tricks with error boundaries to work with streaming on the  server, better support for things like Astro with multiple async hydration routes  and some really cool stuff with third-party reactivity without wrappers,  like being able to use MobX directly in your solid views, really cool stuff.
[00:25:51] saying like he was so stoked he was like this is
[00:25:54] this could just replace the default templating for Meteor.  It's so much nicer to use than something like React for this,  because Meteor is all reactive, and it just feels like it's a native solution.  So I'm really happy that this one went through.  OK, so that's enough solid news.  And all the rest of this is-- I mean, big shout out to Alexis.  Every other tweet here is probably him showing us a new ecosystem library he made.  What do we got? MDX, support.
[00:26:21] error overlays, new version of the Babel labels plugin.  Definitely check out his work if you get a chance.  It's crazy.
[00:26:29] Thank you.
[00:26:30] Yeah, honestly, I would, Theo.  I actually don't know how to do that from within my interface in here  because I'm just in StreamYard.  You're going to help me get a better streaming setup soon.  This is like the most, I don't know what the term, ghetto,  maybe that's not politically correct to say anymore,  version of streaming that we can do here.  So you're going to help me.  We'll figure that out.
[00:27:00] further ado, I'm just gonna throw a quick banner up here  so that I can edit it later.
[00:27:09] Thank you.
[00:27:10] Let's build, right? Let's do something.
[00:27:13] Thank you.
[00:27:14] Thank you.
[00:27:16] Thank you.
[00:27:16] Thank you.
[00:27:18] All right. So...
[00:27:22] I'm just going to do this in code sandbox. Why not?  Anyone having a problem with that? Let's just...
[00:27:27] create a new vanilla code sandbox and commandeer it for our purposes. Styling, yeah, we don't need styling.
[00:27:37] Yeah, so we have a script tag with the index and the app.  Okay, that looks beautiful.  And then...
[00:27:42] All right. Here you go. So history lesson number one. This is how I used to make JavaScript frameworks. No. Essentially, what we're going to do here, I think, is we're going to
[00:27:56] Let me make my screen a little bit bigger so you can see what I'm doing.
[00:27:59] And...
[00:28:02] What...
[00:28:03] I want to do is
[00:28:04] I'm going to load a couple packages in here.  We're going to load SolidJS because we're going to use SolidJS's...
[00:28:11] This is a reactive system here.
[00:28:12] Yeah.
[00:28:13] And we're going to load another library.  This one's actually an older library that
[00:28:19] I know because I used this back in 2015 or 16 or whatever  when I was doing stuff before I got into JSX.  Basically Riot, I don't know if you heard the Riot framework.  It was really...
[00:28:29] cutting edge in terms of single file components,  background, same time view came out.  And they exported their templating language.  And that's where we're gonna start here.
[00:28:41] Because you can use stuff like Mustache or Lodash.  And if you look...  Well, if you look...
[00:28:47] Add stuff even like Svelte or whatever, you still see, you know, basically handlebars or mustache like templates.  And this is kind of the baseline for building any of these things.
[00:28:58] So build something like PetitView, you need three pieces. You need a reactive system, you need a templating JavaScript expression parser, and you need to have your walker that walks the live DOM tree nodes and actually
[00:29:16] does the work to update and keeps everything in sync.
[00:29:22] We're going to focus on the third one of those, because we have the reactive system with solid. And one of these two kilobyte libraries, we can just pick up off the shelf and it'll do the trick for us.
[00:29:32] So, yeah, let's just see if we can pull that in and get that working. And I apologize ahead of time because I'm not...
[00:29:43] as usual, not the most prepared here. I am familiar with this library and it's like
[00:29:51] Riot.
[00:29:54] I haven't even imported it yet, that's why.
[00:29:58] And it's API, but...
[00:30:01] Amen.
[00:30:02] Let's see if we can get a simple example showing how this works.  It's just like console log.  And then we go temple.  And we pass it in some kind of expression string with, you know, like, hi.
[00:30:20] and then name.  And then the second argument is it's going to be an object  with what we want to set.
[00:30:28] Um...
[00:30:31] Thank you.
[00:30:32] Yeah.
[00:30:34] And if all went right well here, our templating language turned our hi name into hi Joe here.
[00:30:45] Thank you.
[00:30:46] Nothing too special here.
[00:30:49] And
[00:30:50] This is going to be the
[00:30:52] like the baseline, what we're gonna use here to build this out.
[00:30:57] Okay.
[00:30:58] The first thing we might want to try here,
[00:31:01] is let's just import
[00:31:04] create signal.
[00:31:06] From solid JS.
[00:31:09] And just
[00:31:12] kind of
[00:31:14] Let's go name, set name.  See if we can make this resemble something.  This is the thing I love about reactivity.
[00:31:23] points of the name was Joe, is that
[00:31:26] Thank you.
[00:31:28] You don't need anything else to do it, right? We're still high Joe.
[00:31:35] And
[00:31:36] But if I said,
[00:31:40] I set the name now to Jack.
[00:31:44] Thank you.
[00:31:46] Does this work?
[00:31:49] No, because we didn't call temple again. What we need is create render effect.
[00:31:57] which is a solid primitive. It's like an effect. I'm just using render effect because
[00:32:03] it's
[00:32:04] basically
[00:32:06] built for rendering, just the way it executes.  Not going to worry too much about that.
[00:32:11] So yeah.
[00:32:12] Beautiful.
[00:32:14] Hi, Joe. Hi, Jack.
[00:32:15] Probably unsurprising to a lot of people, but
[00:32:19] This should be kind of the basis of what we're doing here, right?  We're just going to...
[00:32:25] take some template,
[00:32:27] and then we're going to take the reactive system and have it
[00:32:31] create effects around something like this. But we need to
[00:32:37] do a little bit
[00:32:39] more. So where to where to next? Right. Okay. So we're updating text and in,
[00:32:45] The most basic thing, and you could almost say the way,  like something like backbone used to work in the day,  would be instead of console logging this,
[00:32:54] they would have probably just done something like
[00:32:57] Um...
[00:32:58] element.innerHTML equals this.
[00:33:03] essentially.
[00:33:05] And
[00:33:06] If we're luck, let's see here.  Const.
[00:33:11] L
[00:33:12] equals document.getElementByIdApp, I think.
[00:33:18] I think...
[00:33:19] we have
[00:33:21] Um,
[00:33:22] Yeah, we have app. I mean, we're already seeing it here.
[00:33:26] Thank you.
[00:33:29] okay yeah i mean this happens so fast let's let's let's set a timeout so we can actually
[00:33:34] Get a feel for this change.
[00:33:38] Thank you.
[00:33:39] Let me get one second.
[00:33:44] Okay, so there we go.  Hi, Joe. Hi, Jack.  I mean...
[00:33:51] *sick*
[00:33:52] *sad*
[00:33:54] All right.
[00:33:55] Yes. If you go in the console, it's complaining at me.
[00:34:02] Best kept secret, I don't like telling people this,
[00:34:06] Because, well,
[00:34:08] it's it's not good because bad stuff can happen you can create stuff outside of a reactive root it  just will never get
[00:34:16] cleaned up and in this case I don't care that much because I'm
[00:34:20] illustration works this render effect will never go away but in our case that's that's fine
[00:34:26] But yes, so here we go. Hi, Joe. Hi, Jack. Yeah. And
[00:34:32] Yeah.
[00:34:34] Thank you.
[00:34:35] Yeah, I mean, but that's where these things kind of started from.  That's what I'm saying. This is kind of full circle.  When people see solid, it's basically from a time period before React.  And view, too, to a certain degree.
[00:34:53] You are correct before 1.3, but in 1.3, I changed it.  So now with a normal effect, this does work.  I did some kind of hacky scheduling thing.
[00:35:04] So,
[00:35:06] It does work now because it was confusing people.
[00:35:09] Again, I'm pretty...
[00:35:11] I'm going to move on for a moment.
[00:35:15] Now we're rendering and in a sense, this is 2009. We just recreated Backbone, essentially. I mean, they use their models to do it. But essentially, you'd make a view and you picture whatever your view was. And whenever it changed,
[00:35:31] we would replace it. Let's do this.
[00:35:37] Thank you.
[00:35:39] Like, this is the first version of JavaScript frameworks.
[00:35:46] Um,
[00:35:47] This is also kind of really terrible too, because essentially,
[00:35:52] you're recreating this H1 and reinserting it every time through this inner HTML.
[00:36:00] You can be a little bit smarter than this.
[00:36:03] which is like the very first time
[00:36:06] Actually, with this approach, you can't be smarter. This approach is just
[00:36:09] Dumb.
[00:36:09] So, you know, we're going to move on from this.
[00:36:13] The thing is, in a sense...
[00:36:16] This approach is...
[00:36:18] kind of still alive today because things went two different ways.
[00:36:22] Um,
[00:36:22] Thank you.
[00:36:23] One way is like the fine grain reactive way, which is I'm going to show you today where things went first.  But the other way was.
[00:36:30] OK, instead of making real DOM nodes here, let's make fake DOM nodes or, you know, like create some kind of virtualized system and then have it set.  And in a sense, those two directions basically...
[00:36:44] spawned or split off from this initial starting point.
[00:36:48] Um,
[00:36:48] Because at this point, we were just redoing everything. And one group was like, let's just focus on name. And the other group was like, let's make this not expensive. They just took two different
[00:37:00] separating paths at the early days of JavaScript frameworks.
[00:37:05] So like
[00:37:07] Sure.
[00:37:08] Even today to a degree, how far is this from
[00:37:12] Um,
[00:37:14] like a lit, like, you know, like using a tag template literal, like doing like HTML,
[00:37:21] Thank you.
[00:37:22] like
[00:37:23] Thank you.
[00:37:25] You know, you've probably all seen this, you know, how far, how far is that from, from the,
[00:37:32] Yes.
[00:37:33] Bye-bye.
[00:37:34] Thank you.
[00:37:37] Thank you.
[00:37:41] Sorry, HTML is not defined, but you...  There's one huge difference though,  between lit and this approach.
[00:37:46] and why
[00:37:47] Most fine-grained libraries don't use this approach.
[00:37:51] is because
[00:37:52] with
[00:37:53] with lit these holes you don't have access to is like what I was just saying a moment ago, the fine ground people focused on the holes and the like B dom top down people focused on like,
[00:38:04] you know,
[00:38:05] like making this part cheap, making the part that wasn't the holes cheap. Because the difference
[00:38:11] is this.
[00:38:14] See how I'm calling name here and it's working?
[00:38:16] What if I called name here?
[00:38:21] It's still working. That that is sort of the different mentality here, because
[00:38:28] When you have something like lit, you don't get to analyze or look at the holes.
[00:38:33] when you have a string template,
[00:38:35] you do. So here we can actually
[00:38:38] clean up our code of it and pass name indirectly and have the template call our signal.
[00:38:44] So, okay, let's, what's our next step from here? Because,
[00:38:50] Obviously, we didn't come here to build Backbone.
[00:38:53] Well, I think it's a good thing.
[00:38:55] Templating is still going to be the center of this, but now
[00:38:59] We want to put our template in
[00:39:02] per HTML.
[00:39:04] We want it in here.
[00:39:07] stuff's gonna be broken for a little bit, but let's,
[00:39:10] Let's move our template.
[00:39:13] into here.
[00:39:16] Right, that's what we're really after.  And right now, since we're inter-HTML
[00:39:21] Well, actually, you can see it for a second.  Isn't that lovely?
[00:39:27] Yeah.
[00:39:28] Thank you.
[00:39:29] Yeah, essentially, this is the direction we're going.  We want our template to be in our HTML.  And we're going to build out our template over here.  So now we need to kind of re-examine this.  So we have our mount element.  I'm just going to call it mount here.
[00:39:46] have a reactive system.
[00:39:47] Thank you.
[00:39:48] Yeah, it's fine.
[00:39:50] We have our-- I'm going to calm this up for a second.
[00:39:53] interactive system.
[00:39:55] Thank you.
[00:39:56] we have our templating language and now we need to get our kind of dom tree walker going so um
[00:40:03] What I'm going to do is I'm going to start this building -- let's just start building something out here. We're going to need a render method. And a render method is going to take --
[00:40:13] Um,
[00:40:14] probably amount element.
[00:40:17] And it's going to take-- let me call it context.  The system is all built off this idea of context.  As was mentioned earlier, you don't really  have a component system in here.
[00:40:29] It's sort of true because...
[00:40:31] your data is
[00:40:33] This is very like old school MVC or MVVM where your data is like its own tree that you pass in top level.  So if you had components and pieces, they kind of need to all come in through your app.  And then your views are all kind of being rendered from your...
[00:40:51] your template for HTML.
[00:40:54] There are different contexts, different conceptual components and reusable pieces, but essentially they all have to be wired in top level.
[00:41:03] So, yeah, let's do that. And what's our render method going to do? It's going to probably create --
[00:41:13] a root, right? It's a solid app.
[00:41:17] And
[00:41:19] It's going to, let's see what else we're going to do here. We're going to need to
[00:41:26] Let's see.
[00:41:28] Yeah, we're going to need to create a walker, essentially.  We're going to need to create a way of...
[00:41:38] kind of like walking through our DOM.  So let's first resolve our thing.  Actually, I'm gonna call this maybe data for now,  'cause I'm gonna use context throughout.  And let's define our context.
[00:41:55] as
[00:41:57] it's kind of like
[00:42:01] that. So the signature of render is going to basically take a function, kind of like solid's  normal render function. I guess I reversed the order of these. Maybe this is more
[00:42:14] natural for people used to have solid or react, put the mount element second. And then we need a walk function. We could use tree walker, but I'm not going to bother, where we have our mount element and our data context, essentially.
[00:42:44] of
[00:42:47] The mount element is the initial one. We can basically just walk to the children. We could  be like let -- we could maybe make a next equals element dot first child maybe. And then, like,
[00:43:04] Let's--
[00:43:06] Mm-hmm.
[00:43:07] I don't know.
[00:43:08] Maybe next equals walk.
[00:43:12] think of how we do this. Yeah. L.
[00:43:15] context.
[00:43:18] Oh, I'm missing something.
[00:43:21] Because you want to walk into the children first or I'll...
[00:43:26] Don't mind me. I'm just going to think about this. Next context or next
[00:43:34] dot next sibling.
[00:43:38] Well, we're...
[00:43:40] What we're just doing is a very simple tree walk that's depth first.  We go into the child and then we see if it has a child.  If it doesn't have a child, then we move on to the next sibling.  We just walk all the way through the tree.  Let's clear our console here for a second.  Maybe if we console log every element here to make sure that what we're doing makes sense.
[00:44:09] Right, we're not even calling this yet. What's our mount point here? Let's go
[00:44:16] Yeah.
[00:44:17] I'll do it here. Let's go render.
[00:44:22] Thank you.
[00:44:22] Um...
[00:44:26] name. Let's do that for now.  Or it's a function.
[00:44:32] Thank you.
[00:44:36] Thank you.
[00:44:42] Okay.
[00:44:45] That looks...
[00:44:46] Probably good, right?
[00:44:49] Yeah.
[00:44:50] Our root element, then a text element, then our H1 element, and then a text element and another text element. Okay. So,
[00:44:58] Right.
[00:44:58] Essentially,
[00:45:01] Yeah, see, this text element is the text inside and then this last text element is on the outside. So essentially we have, if we're looking at our index HTML, it's because there's a text element here for like the new line. There's this, the text inside, and then the text here with the new line. So our very basic walker appears to be working.
[00:45:23] All right.
[00:45:26] Thank you.
[00:45:27] All right.
[00:45:28] Let's kind of continue along this path here. Okay. So,
[00:45:34] That's good.
[00:45:36] What we need to do next, I think, is we need to do some work other than console logging here. So let's
[00:45:46] Let's figure out. I think it's going to be -- the work is going to be in here technically.  So let's just make like a process node, maybe let's call it. My problem for like --
[00:46:00] making this stuff out before I make the stubs.  So, and then we'll press next and context.  The whole thing here is about passing the context  over and over again.  So, we have a render function,
[00:46:10] we have our walk. Okay. And then we have a process down. So, function process node L context. Okay. So,
[00:46:21] What are we going to do in process node?
[00:46:24] We're going to...
[00:46:27] First thing we want to know is what kind of element we're dealing with, I think. So we're going to go like...
[00:46:33] Once type equals L dot.
[00:46:36] node type. This is -- and --
[00:46:40] Basically, depending on if it's a text node or other code, an element, we can do different stuff. So we're going to do like if type equals one, which is an element.
[00:46:53] comment.
[00:46:56] Okay
[00:46:59] do something else if type equals three.
[00:47:11] This is a text node.
[00:47:16] Thank you.
[00:47:17] Right now, we're just focusing on the text node, though.  So I don't think it probably matters too much.  So yeah, OK.  It's not airing anymore, is it?  Let's see here.
[00:47:29] Sorry, am I liking for you all?  How is my internet connection?  Is it, oh, I see what's going on.
[00:47:37] I wonder if I can change it while on stream without it
[00:47:41] Thank you.
[00:47:42] Thank you.
[00:47:44] Without it all dying on me.
[00:47:47] Because I'm on my 2G, 2.4G network, not on my 5G network.
[00:47:54] Thank you.
[00:47:54] Thank you.
[00:47:57] All right. Should I risk it or should we just keep on going?
[00:48:06] I'm in the furthest part of my house.
[00:48:11] Yeah, I'm at the furthest part of my house from the network. It's just because that's
[00:48:17] where my kids sleep, so okay.
[00:48:22] Let's hope this is...
[00:48:25] OK.
[00:48:30] Yeah, Theo, that was me switching...
[00:48:35] the network to 5G.
[00:48:39] 5G has worse-- what do you call it?
[00:48:43] Distance, though?
[00:48:45] Yeah, I did switch and it didn't kill the stream, but it did blip for a second. And I think that's what you guys just saw. Sweet. Okay. So let's continue with this example.
[00:48:56] Thank you.
[00:48:57] All right, text node. So this is, if we get a text node,
[00:49:01] Thank you.
[00:49:02] Now, what can we do here? Well, I think the first thing we need to do is kind of
[00:49:10] Good.
[00:49:12] Let's see here. I think Temple, if I remember, Template, they have --
[00:49:18] A nice helper here for us.  Let me see if I can find it.
[00:49:23] Oh, my God.
[00:49:25] Best way to learn the docs is go to the tests, right?  They have two extra helpers that I think are going to help us here.  The one I'm looking for is like a has key or something or,
[00:49:38] is expression or something.  So I can try expression.
[00:49:44] Thank you.
[00:49:45] Sorry, just bear with me here.  It's been a while.
[00:49:50] Thank you.
[00:49:51] I'm pretty sure we'll find what we're looking for here in the tests.
[00:49:58] Okay.
[00:50:00] Okay, loop keys. We'll need that later.
[00:50:03] Bye.
[00:50:04] has expression, okay, has expression, temple.has expression. Okay, cool. That's what we want. Okay, so what we're gonna do is like if temple.has expression
[00:50:17] Thank you.
[00:50:18] And for now, I'm just going to assume that it's going to be reactive.
[00:50:24] We can basically...
[00:50:29] Let's just...
[00:50:30] Not inner HTML anymore, but we should be able to just...
[00:50:35] do something very similar to this, create render effect.
[00:50:39] and have it go like
[00:50:42] This is not going to be a text node, so we can go L dot --
[00:50:47] Data.
[00:50:51] And then this will be context. And then this will be the data. Right. So, um, I'm going
[00:51:03] Let's -- we need to get the data first, I think.
[00:51:14] dot data.  And then what we want to do is we want to store
[00:51:20] the template
[00:51:22] See, the thing is, this template we need to reuse over and over again as it updates.  So we actually want to store the -- I can't use the template. Let's just call it text from the original text from the data.  Because this will be our original, like, handlebar text thing, right?  And then what we want to do is we want to pass that text into here, and that way we can reuse the template over and over again. Okay.
[00:51:47] So what did I do wrong?
[00:51:52] Unknown.
[00:51:54] keg.
[00:51:56] Name is not a function.
[00:52:02] Thank you.
[00:52:03] Interesting.
[00:52:06] Oh, this is like a...
[00:52:10] This is like Javis. I should have--
[00:52:15] Thank you.
[00:52:16] There we go. Arrow function thinks this is a function parameter, it's not passing an object.
[00:52:24] you know, that whole thing. But okay, sorry, that kind of defeated our big moment here.
[00:52:30] We did it. Well, wait.
[00:52:33] See, now,
[00:52:35] Our template is nowhere to be found here.  And it is right here.  So hi name.
[00:52:44] Except we have this lovely high name before we do Joe Jack.
[00:52:50] Thank you.
[00:52:51] Thank you.
[00:52:52] Yes, some great comments here. Thank you.
[00:52:57] You're right, the way I did the walk was so they returned next.  Luckily, there's only one element right now.
[00:53:03] So, yeah, let's just fix that up a bit. So, yeah.
[00:53:09] Walk needs to return next.  Whatever is the final--
[00:53:16] Thank you.
[00:53:18] Well,
[00:53:21] Yes.
[00:53:23] Let's see here, what am I missing here?  Because it's going to go next.
[00:53:27] Thank you.
[00:53:29] Yeah.
[00:53:31] Thank you.
[00:53:31] Thank you.
[00:53:32] Yeah, it's not next, though, that it...
[00:53:36] It needs to return...
[00:53:40] Yeah, that's actually a good point.  We need to think about this for a second because the problem is it's going to  keep on going until it's exhausted itself through all its children.  So when it comes back,
[00:53:52] The only time we need it is actually when it goes into the first child, which means that's the only time we need to actually return the birth.
[00:54:01] that first child.
[00:54:06] Thank you.
[00:54:10] Thank you.
[00:54:11] Yeah, that's actually interesting because it's actually
[00:54:18] All right.
[00:54:20] I'm just going to hack this for a minute and we'll just worry about this later.
[00:54:28] It's actually...
[00:54:31] Actually, no, it's not first. It's actually the last sibling that it wants.
[00:54:36] Huh. Yeah, this loops wrong. Because essentially we want the last value before it becomes null.
[00:54:45] Because once it's null,
[00:54:49] Essentially, we're going to have an issue here.
[00:54:55] So that's actually a very good point.
[00:55:00] Hmm.
[00:55:01] Thank you.
[00:55:01] Thank you.
[00:55:04] Thanks.
[00:55:05] Right now,
[00:55:10] Well...
[00:55:13] Yeah, okay.
[00:55:16] Hmm.
[00:55:17] Thank you.
[00:55:18] The funny thing is nothing's breaking yet. So part of me wants to continue until we break something. But essentially,
[00:55:29] It's almost like we want...
[00:55:34] uh,
[00:55:38] Yeah, it's almost like we want one more temporary variable.
[00:55:41] Um...
[00:55:45] Like this, essentially.
[00:55:49] Um,
[00:55:50] And then
[00:55:54] And then more like
[00:55:57] When we start the next loop,
[00:56:00] We set current to next.
[00:56:05] There's probably a nicer way of doing this, which means I technically don't even...
[00:56:10] I just need to let current.
[00:56:17] Thank you.
[00:56:17] Thank you.
[00:56:21] And then--
[00:56:25] Thank you.
[00:56:29] So basically, like...
[00:56:33] this and then
[00:56:40] If it returns null, null, and then it'll null itself out.
[00:56:45] Okay. Let's leave it at this for now. I think this is essentially -- did I just break it? No.  Yeah, here we go. Okay. So the first thing you're going to notice right here is this is ugly. Like,  what the hell is this, right? And this is what they all used to do. They all used to flicker  really terribly because your server would render the template and you would see that template.
[00:57:07] Um,
[00:57:08] So we actually get--
[00:57:15] Thank you.
[00:57:16] So we're going to do something funny here and render it.  I mean, it's just silly here.  But we're going to go-- we're just going to--
[00:57:24] For now, we're just going to go style equals--
[00:57:27] There's other ways to do this, but we're just going to go display none.
[00:57:32] Thanks.
[00:57:33] Thank you.
[00:57:33] And then in our render function, we're going to take the mount element.
[00:57:40] Style.
[00:57:43] Thank you.
[00:57:45] Let's play rules.
[00:57:51] Let's do block for a second to make sure I'm not insane. There we go. Beautiful. Got rid of the template. I can probably --
[00:58:02] do this at the end.
[00:58:08] Okay.
[00:58:08] There we go, so that cleans it up a little bit.  Hi, Joe, hi, Jack, okay.  So we have our first thing,  we have text binding going now, okay?
[00:58:18] Yeah, this is, as I said, I believe there's probably better
[00:58:25] I'm going to remember this and come back to it if I broke something later, but let's just kind of...
[00:58:30] I'm just going to go with this for now. Just...
[00:58:35] So the fun part of doing the stuff on the fly, you never know how it's going to turn out. Okay, so what's the next thing we want to do? Maybe we want
[00:58:44] Yeah, yeah, yeah. You know this timeout?
[00:58:47] Let's try and make this more like...
[00:58:50] maybe how we'd write our actual app a bit. Let's see. Let's go.
[00:58:59] Um,
[00:59:01] Render and then we're going to return name. One of the cool things I think you're going
[00:59:10] you might immediately notice about what's happening here.  I'm going to put the create signal in here and,
[00:59:19] kind of get that going is this,
[00:59:24] should start looking like a view setup function to you.  Like, there's no coincidence.  Like, what we're doing today is going to-- is--  view came out of this time period.
[00:59:35] Oh, right.
[00:59:36] Yeah, we can't, we can't.
[00:59:38] This also needs to go--
[00:59:41] in here.
[00:59:43] But yeah, you know what?
[00:59:46] So here's our top-level component, but it's just returning its data. Let's see here, Joe, Jack, okay. So
[00:59:54] Let's get rid of the set timeout.  Maybe that's the next thing.  Let's add an event handler.  Or let's add events to this simple setup here.  So instead of doing a timeout, maybe  we can have a button that we click and then
[01:00:09] Essentially, that will do the trick for us.
[01:00:16] Yeah, let's change this around a bit.  I'm just lazy.  Let's just make our H1 into a button.
[01:00:23] Okay.
[01:00:26] Okay.
[01:00:28] Could have multiple versions of solid.
[01:00:30] All right, I forgot about this.  Code sandbox is really touchy.  You can do edits and it'll update with their like HMR here.  But if you don't save the file and you refresh,  it'll all, the HTML will always be out of date  where the JS will be updated.  It's just a little quirk of code sandbox.  Okay, so we wanna get rid of the set timeout.  So what we want is the past set name.
[01:00:53] to our data function.  And see, this is another reason why unidirectional flow was probably never popular with these libraries, you know, where you generally like have a single that was also writer.  Because when you're returning the data like this, it gets very verbose to return these tuples all the time, right?
[01:01:12] So, you know, I feel like you start feeling views kind of inspiration here a lot when going through this kind of example.  So, we have name, set name, and then we need to do something with a DOM node.  So, let's kind of...
[01:01:31] Let's just walk through the attributes, I think, is what we need.  So we're going to let's do maybe like a for of loop.
[01:01:41] I think we can just I think attributes are iterable.  So I think we can do something like.
[01:01:50] Thank you.
[01:01:51] Key value, maybe? Key value?
[01:01:56] of
[01:01:58] spread L dot attributes, I want to say. Let's try that. And then, like, well, let's see what we get here. Console log key value.
[01:02:15] Thank you.
[01:02:16] See you.
[01:02:19] Thank you.
[01:02:20] Okay, well, let's first console log and see if we actually have any elements here.
[01:02:27] But so I'm doing something wrong. Okay, let's go L.
[01:02:35] Good.
[01:02:36] L.attributes.
[01:02:41] Okay.
[01:02:44] Seems fine. Let's think here.
[01:02:54] Okay.
[01:02:55] Thank you.
[01:02:58] - Hmm, okay.  Let's see if it is actually iterating something here.  Maybe if I put like a string here, we'll see it.
[01:03:07] Thank you.
[01:03:08] Thank you.
[01:03:10] Thank you.
[01:03:15] That's it.
[01:03:19] No. Okay. So, well, actually...
[01:03:26] I got rid of that console.
[01:03:31] an empty array.
[01:03:35] Interesting.
[01:03:37] Let's see what the--
[01:03:39] L is--
[01:03:44] Oh, of course. There are no attributes.
[01:03:48] Ryan, we got to add what we want before we do it. So how do we do it in view? Like this, right? At click. And then you go like, yeah, there we go. There's our attribute. And what are we going to do? Set name to...
[01:04:07] Jack.
[01:04:09] Okay.
[01:04:11] Thank you.
[01:04:12] So
[01:04:14] Type of file.
[01:04:17] And -- okay. So, I'm not crazy. This is right -- it's not. Key is wrong -- oh, it's name.
[01:04:32] Click, perfect.  So that's what we're dealing with.  Okay.  So let's go and find our click attribute and then name value.  So how do we know that it's an event handler?  Well, because it has an at sign.  So we can go if name index...
[01:04:48] or actually just if name zero equals at,
[01:04:55] Thank you.
[01:04:56] we know we have an event handler.  So what do we need to do?  At that point, it's just element.addEventHandler.
[01:05:06] Handler, and then we want to slice what name, slice,
[01:05:12] one, like everything after the first, and then
[01:05:15] We want the value. So I think it's just we can just use our temple thing again and just go value.
[01:05:23] I think we're going to be doing this a lot today.
[01:05:27] What am I missing?
[01:05:34] Thank you.
[01:05:36] is not a function.
[01:05:38] What am I doing here? This is the fun part.
[01:05:44] Thank you.
[01:05:45] Uh...
[01:05:47] oh it's event listener god where am i
[01:05:52] Tired this week.
[01:05:58] Oh, okay, I see the problem.  Do you know why this isn't work?  Do you know why this isn't working?  Let's console.log value for a second.  I think I know why.  'Cause I didn't wrap it
[01:06:09] in our in our nice little uh curly braces but  i think we don't need to do the curly braces here because we have the at sign
[01:06:16] So I think this is slicker.  So why don't we just...
[01:06:19] Um,
[01:06:22] Why don't we--
[01:06:24] Yeah, why don't we-- yeah, see--
[01:06:26] Yeah, there's no ad sign here.
[01:06:29] Why don't we just--
[01:06:30] change this slightly so it's like uh like let's just add the
[01:06:37] with brackets around it here.
[01:06:40] Like that.
[01:06:45] All right. It's-- oh, right, because I need to make it function.
[01:06:55] Nice, it works.  So we load it, draw a hijo, we click it, it turns to hijack.  OK, sweet, yeah.
[01:07:03] I'm just sloppy tonight. Thank you. Thank you.
[01:07:08] Thank you.
[01:07:09] Thank you.
[01:07:11] All right, we're getting there. So now we have an event hand, now we have event handlers in our, in our,
[01:07:18] template here. So...
[01:07:20] What do we want to do next?
[01:07:24] We have text, we have events.
[01:07:27] Yes.
[01:07:28] Um...
[01:07:29] Let's add
[01:07:32] data binding, right?
[01:07:34] Yeah, let's let's let's let's add data binding or.
[01:07:38] Nothing too fancy. What if we let the button have...
[01:07:43] a title so that it has like a uh over
[01:07:55] Thank you.
[01:07:56] .
[01:07:58] Remember you, what do they do?
[01:08:03] - Yeah, they're not gonna show me here.  This is going to be a colon.  Let's just go with colon.  It doesn't really matter.  We can change the delimiter later.  If we don't like making a dollar sign.  Let's make another
[01:08:13] One of the cool things here is because we're using these kind of Delimator characters, we don't actually have to leverage the Interpolation characters here. So let's make it...
[01:08:21] I mean,
[01:08:22] Good afternoon.
[01:08:24] Let's just use name again. Let's just go like, hola.
[01:08:31] um name so
[01:08:35] of
[01:08:35] person.
[01:08:37] And right now when we hover it, you have to save the template.
[01:08:44] Oh, right, because this isn't actual title, this is
[01:08:48] Yeah, you know what?
[01:08:50] - Thank you.
[01:08:51] Thank you.
[01:08:53] We should probably clean up after ourselves too.  Cause it occurs to me when I,  when we look at this,  we're going to see the at click on there still.  We probably don't,
[01:09:02] want that. Just like we have this title. The reason we're not seeing the title is because it has a colon in front of it. It's not, it's not, it's not,
[01:09:08] you know, interfering with the other one, but it's also like completely unnecessary.  So we almost want a pattern where we actually
[01:09:16] remove these.
[01:09:18] Um,
[01:09:19] essentially. But let's let's
[01:09:23] it's not probably not a big deal.  Let's,
[01:09:26] Yeah, if here we can go.
[01:09:29] L dot, okay.
[01:09:33] Remove attributes.
[01:09:39] iterating it.  You know, let's just...  Click doesn't...
[01:09:43] quick, nice notification. Let's not worry about that. Let's do, let's do another one. Let's go if name zero
[01:09:50] equals colon. So now we're going to do the data binding case. This one's kind of a cross between the other two because
[01:09:57] Um,
[01:09:59] we're going to...
[01:10:01] want to make a render effect again, essentially, for here. And this time it said data. We're
[01:10:12] Thank you.
[01:10:14] Okay.
[01:10:17] Okay.
[01:10:18] Yep.
[01:10:19] me.
[01:10:20] - Thank you.
[01:10:22] Slice one value is.  So we need to get-- instead of text this time, we have--
[01:10:30] we have to get the attribute, right?
[01:10:33] So,
[01:10:35] Thank you.
[01:10:36] Pause.
[01:10:43] attribute
[01:10:45] Thank you.
[01:10:53] I guess I'll do that too, const.
[01:10:55] Uh-huh.
[01:10:57] Thank you.
[01:10:59] Thank you.
[01:11:00] So you don't have to do this all multiple times.
[01:11:05] Thank you.
[01:11:08] And then this value is now our new template.
[01:11:12] Thank you.
[01:11:17] And it's else attribute.
[01:11:22] All right. No. Okay. We're getting there.
[01:11:28] Yes.
[01:11:30] No, okay, beautiful.
[01:11:32] Thank you.
[01:11:33] So we are setting a title, we're just not setting the right one.
[01:11:37] Uh...
[01:11:38] Let's
[01:11:39] Let's see here.
[01:11:42] Why are we not setting the right one?
[01:11:48] And
[01:11:49] While we're at it, we probably should go
[01:11:52] um l dot remove attribute
[01:11:56] Thank you.
[01:11:57] Actually,
[01:12:02] Thank you.
[01:12:04] Okay, it's null. Let's figure this one out. Okay, so,
[01:12:11] What do we got here?
[01:12:16] um
[01:12:17] Look at our template.
[01:12:20] Is it because I'm not calling name as a function?
[01:12:29] - No, okay.
[01:12:31] Double check, but...
[01:12:34] Thank you.
[01:12:36] Thank you.
[01:12:37] We keep so...
[01:12:39] Thank you.
[01:12:41] me.
[01:12:42] --here, so OK, not that, but worth a shot.  It's because we didn't have the curly braces again.
[01:12:50] So we need to do this trick here to add the curly braces.
[01:12:54] See, f-
[01:12:55] We're kind of--
[01:12:56] We need to do this.
[01:13:00] Uh
[01:13:02] And when we hover, that looks like...
[01:13:10] OK, still not working.
[01:13:12] Let's look at what we're dealing with here.
[01:13:15] uh, after.
[01:13:19] Thank you.
[01:13:19] context.
[01:13:21] Thank you.
[01:13:24] Oh, sweet.  OK, so adder is nothing.
[01:13:28] Okay. So that's our problem.
[01:13:32] We don't what I'm doing here is wrong.
[01:13:41] Thank you.
[01:13:43] Thank you.
[01:13:46] Yeah, of course.
[01:13:50] See here.
[01:13:52] Thank you.
[01:13:53] No.
[01:13:53] Sweet. And at your name.
[01:14:01] Right. This is just me being stupid. We need to get the original one. The attribute we need to remove is the original one.
[01:14:12] essentially--
[01:14:14] Thank you.
[01:14:17] Where did I add an extra thing?
[01:14:21] or didn't.
[01:14:23] Yeah.
[01:14:24] Thank you.
[01:14:25] Thank you.
[01:14:27] Pfft.
[01:14:30] Yeah.
[01:14:32] So we want to get the original name.
[01:14:39] Why does that break it?
[01:14:41] Thank you.
[01:14:42] Thank you.
[01:14:46] Yeah.
[01:14:47] Okay.
[01:14:49] And then we want to...
[01:14:51] Thank you.
[01:14:54] But that's, that's,
[01:14:56] But...
[01:14:57] Thank you.
[01:15:00] you
[01:15:01] Thank you.
[01:15:02] We're just picking something else now. And then we want to move
[01:15:08] Thank you.
[01:15:09] And then--
[01:15:12] Thanks.
[01:15:13] Yes, you are...
[01:15:15] Absolutely right. This one doesn't need the wrapper. We are using interpolation. I'm
[01:15:21] I'm not, for some reason, yeah, for some reason I just wasn't, yeah.
[01:15:29] Alejo, click.
[01:15:31] Bola Jack, yeah.
[01:15:34] Thank you.
[01:15:36] I mean, we don't need to.  It's just –
[01:15:41] Yeah, you're right. We don't need to. It just clouds up the stuff.
[01:15:46] So yeah, all right.  Yeah, I was getting ahead of myself here a bit.  Okay, so now we have attributes.
[01:15:53] And we have...
[01:15:54] As you can see here,
[01:15:57] So we have attributes, we have event handlers, we have text.  The next thing we need is probably more interesting.
[01:16:10] data binding attributes and data binding click handlers,  you can do a lot.  What we need now is control flow.
[01:16:17] Right. Our template is not very useful as it is right now.  We can't really do much with it.
[01:16:25] Thank you.
[01:16:26] Thank you.
[01:16:27] All right.
[01:16:29] So let's take this to the next level.  I mean, to be fair, you can do a lot with just this kind of...
[01:16:37] with just these alone.  But we want to conditionally render something  or do a loop or something.
[01:16:47] Which one should we do first? Should we do a loop or should we do a list?
[01:16:52] Let's do...
[01:16:58] Let's probably...
[01:16:59] Sorry, loop is a list or a conditional.  If is probably slightly easier to do.  So maybe we should do if.  Yeah, I guess we should do if.  What if,
[01:17:12] Let's...
[01:17:14] Let's
[01:17:17] me.
[01:17:17] Thank you.
[01:17:19] Let's move our text.
[01:17:22] Do a-- let's move it here, maybe.
[01:17:26] Thank you.
[01:17:26] - I'm here.
[01:17:29] Interesting. This is showing me how our walker is broken.
[01:17:38] Probably.
[01:17:41] Thank you.
[01:17:42] Thank you.
[01:17:43] Maybe we should fix that up first.
[01:17:53] Thank you.
[01:17:54] Yeah. Yeah. So the walker is broken right now.
[01:17:57] knew that we would hit an error with that eventually.
[01:18:01] Let's kind of look at that for a second.
[01:18:05] So what's happening is it's going in
[01:18:10] And then the last current one was that
[01:18:20] That's interesting.
[01:18:22] Yeah, maybe my walk mentality here is just wrong.
[01:18:28] Because like...
[01:18:30] - Go next.
[01:18:33] Yeah.
[01:18:35] I think--
[01:18:37] I think...
[01:18:39] I don't-- I think I just was--
[01:18:41] Yeah, or I could use tree rocker.  Yeah, I think I was just thinking about this  maybe a little bit wrong because this...
[01:18:51] Yeah.
[01:18:55] This seems to work here.
[01:18:58] Thank you.
[01:19:03] Yeah. So let's just-- yeah.  Let's just-- OK.
[01:19:08] Let's just continue on here. Okay, so...
[01:19:13] What if we wanted to...
[01:19:18] See.
[01:19:24] Yeah, okay. Instead of
[01:19:28] Thank you.
[01:19:29] We can just leave this here too because let's just keep on going. But let's add another signal, maybe like a visible signal.
[01:19:38] visible, set invisible.
[01:19:47] Thank you.
[01:19:48] And then actually...
[01:19:51] I got an idea.
[01:19:53] Thank you.
[01:19:54] We won't do that. We'll just keep it like this for a moment. And let's just do something silly where we're like only show this. So let's invent something S if it was a B if or something.
[01:20:09] If--
[01:20:11] And our condition will be if name--
[01:20:15] is bigger than
[01:20:20] Name.length is bigger than...
[01:20:25] - Two.
[01:20:27] So the idea here is when it's Joe, it won't show the high, but then when we click it to Jack, it'll be bigger than two and then it'll show it. The way the directives work is you put them on the element and it's the element itself that actually goes in and out. So
[01:20:42] Yeah, let's just do that.  Okay, and then...
[01:20:46] Now we need some different logic here.  Because the way the directives work  is actually a little bit interesting.  Because it reuses the node like I was talking about,
[01:20:56] you actually have to cache and handle a node completely  separate from this loop we're doing here.
[01:21:02] Like it kind of pulls it out.  So we actually have the special case,  the directives before we do the attribute loops,  because we're not,  we're actually going to not process the, um,
[01:21:14] We're not going to process the attributes
[01:21:17] right away. We're going to actually wait until they get inserted because it's potential them  not getting inserted. So it's more like we first have to go like if
[01:21:28] L dot get attribute or maybe.
[01:21:32] Maybe has attribute.
[01:21:37] S4 or whatever we want to call it, then we do some logic and it's actually going to
[01:21:43] happen beforehand. So we need to do a little work here, essentially. We need to be able to cache the node
[01:21:54] I think so.
[01:21:56] We have to think about this.  First, let's-- or actually, we're doing SF.  Why didn't I do SF?  Did I do SF?
[01:22:04] We need to get the expression first that we're going to be using. So, we can go get attributes.
[01:22:17] If and then what else do we need to do?
[01:22:22] We need to ultimately remove it.  And this one we have to move.  The other ones we didn't need to.  But this one we do because it'll create an infinite loop  otherwise.
[01:22:37] When we go to insert it, you'll see the if again and then try and--
[01:22:42] try and process it again. We need to process it only once. So this one is essential that we remove it.
[01:22:50] Um,
[01:22:51] And then we're going to need some conditional logic.  And I've written this one enough times that I know what it looks like.  But essentially doing if in solid, you need to use two memos.  One to wrap the condition and one to wrap the whole thing.  This way, you know, we're not -- if the condition doesn't change its boolean,  we can isolate the change.  So we basically boolean cast whatever the template expression is
[01:23:21] The problem here is like if name is,
[01:23:24] If we were changing the name 1, 2, 3, you don't want to rerun the whole thing.  You only want to actually...
[01:23:30] re-render this or change anything when it switches from false to true or true to false. You don't want for every single step to re-render the whole element. So this is why we split into two memos. So in here we'll need a template that will
[01:23:46] take our...
[01:23:49] Yeah, that'll take our -- what should we call it?
[01:23:54] I think this one we aren't escaping, so this one we will need to do.
[01:23:59] this again.
[01:24:01] And I call it expression and pass it to context.
[01:24:08] All right.
[01:24:11] I'll get my word right behind. Okay, sweet.
[01:24:15] And then --
[01:24:18] The next thing besides that is we're going to need to actually write our conditional  logic which will be another memo I'm thinking.
[01:24:28] Let's call it, what do you call it? Call it show. Yeah, basically like our...
[01:24:35] And then in this one, we read from our condition.  So I guess get our value, right?
[01:24:43] We already have value in the scope.  Maybe we don't want it.  Cont value equals our condition.  And then, we're going to do this.
[01:24:55] Basically our actual condition statement. So, there's a value, do some stuff, else.
[01:25:02] There is no else. We just return nothing. And then finally,
[01:25:09] We're going to want to insert it in the DOM.
[01:25:13] Yeah.
[01:25:16] Yeah, we have a few options here.  Since we're using Solid,
[01:25:20] I'm--
[01:25:22] How are we doing for time? It depends on how far I want to implement this. Okay, we're at 125 and I still want to do the for loop. Yeah, no, I'm going to...
[01:25:35] I'm going to actually
[01:25:37] Since this, I'm going to do this.
[01:25:39] Thank you.
[01:25:42] If we have time, we'll get back to this.
[01:25:47] I'm going to pull insert from Solid JS web, which
[01:25:55] So,
[01:25:57] Bye.
[01:25:58] What the hell is...
[01:26:02] That was really--
[01:26:03] Weird. I don't know why there's a TypeScript file showing up here. Insert from Solid.js web. And,
[01:26:17] It's going to insert
[01:26:18] her
[01:26:19] text node.
[01:26:24] It handles a few of the extra cases.
[01:26:27] essentially. So we need a parent, which we haven't got yet. And then -- oh, sorry.
[01:26:35] And then--
[01:26:36] We need...
[01:26:38] the expression
[01:26:41] which is a show expression, and then...
[01:26:45] possibly a marker. I think we're going to use a marker to be safe. So, okay. So that probably doesn't mean a ton to any of you right now. So let me explain what we're going to do. First, we need to get our parent node. So before we're doing anything here, we need, let's just get it.
[01:27:04] Yeah, let's get our parent because we haven't done it yet, but we actually have to remove this whole element from the view as part of this process. So,
[01:27:16] pretty early up here, we probably want to
[01:27:20] the parent before we remove it from the view. So we'll be like parent node.
[01:27:27] And then--
[01:27:29] Thank you.
[01:27:30] So we're going to insert in our parent.  And then we are going to have our accessor, which is show.  And then we're going to have a marker.  And marker is just going to be a text node.  So we're going to go-- this will just keep track.  So as we're adding and removing stuff,  we have an anchor so that it knows where to insert it.  You can think of this as basically a fancy insert before.  I just know that this handles a few edge cases.  So I didn't want-- like I could probably just do insert before
[01:28:00] probably just
[01:28:01] work, but it handles the reactivity resolution a bit.  So OK, let's go.  So let's marker is--
[01:28:11] Marker equals document.createTextNode.
[01:28:17] Thank you.
[01:28:19] And then we're going to go.
[01:28:23] Maybe replace with, let's go...
[01:28:25] This is a newer DOM API, but I've just been loving this one recently.
[01:28:35] See, now it's gone, which is right.  And the reason we had to do that,  and actually before we do that, we should stash it.  I mean, we don't have to, I guess...
[01:28:48] actually we don't have to because we always have this
[01:28:52] I will now. I'm not explaining myself the best here, I admit. So if you have questions, do throw them in the chat. But essentially, we kind of like in the same way that we had to keep
[01:29:05] this text around to know what the template is. We have to keep the element around because what we're  going to be doing is every time that it's true, we're going to, our first thing is we're going to  make our new node and we're going to do that by cloning it.
[01:29:20] So we need to clone the node that was there.
[01:29:24] So that we basically get a new node every time. But that node is a fresh node that hasn't been processed yet. So we need to process that node.
[01:29:36] and then potentially walk
[01:29:39] to any of its children.
[01:29:44] Yeah.
[01:29:44] And
[01:29:45] Finally, we need to return that node as the value that we're inserting. And context.
[01:29:53] And then
[01:29:55] context. All right.
[01:30:00] Not quite.
[01:30:02] Yeah.
[01:30:03] Thank you.
[01:30:04] Thank you.
[01:30:05] Almost. That was interesting because it half worked.
[01:30:13] but we're seeing the old value.
[01:30:16] I know why.
[01:30:18] .
[01:30:19] Yeah.
[01:30:19] The reason we're seeing the old value is because
[01:30:23] on the initial render, even though we're removing the node  and stuff.
[01:30:28] It's still going through and walking and doing all this stuff.
[01:30:34] and processing the children.
[01:30:37] In return, what happens?
[01:30:40] Okay, still same problem.  So we actually have to tell it to stop processing.
[01:30:45] and where to continue from. So actually, we're going to return the marker because the marker is the one thing that we know is always going to be there. And it's always going to be at the end of our of our if statement. So by returning the marker,
[01:30:56] we kind of get that. But it means that we need to change our logic for our walk because
[01:31:04] If process node returns
[01:31:08] something, then we have to actually
[01:31:10] like we don't want to walk to the children, essentially.  I think that's the logic that we're going to use here.
[01:31:17] because
[01:31:18] I'm not going to worry about this. I know I went through and made everything current,  but I'm not going to worry about this current thing because it seems to be messing with
[01:31:28] with stuff right now. It's just not doing anything. But let's
[01:31:33] Let's just-- if--
[01:31:38] It's going to be another variable here to store the node that comes through.
[01:31:42] But if...
[01:31:44] This is the ELF. ELF we just walk to the children and continue.
[01:31:49] If there is something there, we need to continue
[01:31:55] to the next sibling and skip over the children, essentially. So let's just, I don't know, let's call it
[01:32:02] something else. Let's call it Stop. I know that's probably a terrible name, but
[01:32:06] stop equals this, then
[01:32:11] Next needs to become stops next sibling.
[01:32:17] It's walking to the sibling, not to the children.  And then we clear it.
[01:32:23] Okay.
[01:32:25] Ooh, Coach Tamar just loves this.
[01:32:28] Oh, right. It doesn't like assigning in an if statement. Well,
[01:32:32] Whatever. Boohoo.
[01:32:33] Thank you.
[01:32:34] Thank you.
[01:32:35] Thank you.
[01:32:36] Yeah, it works. Okay. Yeah. Yeah. Essentially, we needed -- if we're processing a directive,  we don't want to walk into the children because what we do is we hoist out -- we actually grab  the original element, the one that had, you know, all of this stuff and all the templating  stuff, and we save it for later, essentially. We just hold on to it in this closure, essentially,  so that when we go to render it, we get to process it for the first time.
[01:33:06] And actually, if these were ever nested, we probably don't want to walk.
[01:33:14] the children
[01:33:16] If--
[01:33:17] there's like another if there's like layered directives like
[01:33:20] ifs and fors on the same element or something.  So let's see if that--
[01:33:24] That does what we want.
[01:33:26] - Yeah, okay.  Okay, so this is basically what a four directive looks like.
[01:33:34] It's a little bit complicated, I suppose.  But this is essentially how we would do a conditional  in our template.
[01:33:43] Thank you.
[01:33:44] Let's see here.
[01:33:46] Yeah, that definitely took a little bit of mental gymnastics. Let's do a loop next, I think.
[01:33:53] That's...
[01:33:56] Yeah, I think that's probably the loops, the other primary one. I think if you have
[01:34:02] conditional and you have a loop and you have attributes and you have,
[01:34:07] text and you have event handlers, I think you actually have all the basics.
[01:34:13] to build most simple things.
[01:34:16] type demo type thing. So let's try and make a let's try and make something there.
[01:34:25] Thank you.
[01:34:26] Is there any value in the if using clone node when you're not looking at having any components in the system?
[01:34:33] Thank you.
[01:34:34] Hmm. That's an interesting question. So you're saying just like insert, well,
[01:34:39] Thank you.
[01:34:39] Mostly...
[01:34:41] Oh.
[01:34:44] It's because like, oh, yeah, I see what you're saying, because you're not making a new context.  So you could actually just keep it bound all the time and then have it updating off the screen.  Yeah.
[01:34:54] Thank you.
[01:34:55] I get the four needs it and actually now I'm realizing it needs it because of that. Yeah, yeah, like using them in combination. Yeah, that's a good point. Yeah, let's do four. I think four is probably like, I left it as like the last of our fundamental building blocks, but I think it's actually probably the most complicated of the bunch because four actually needs to create child context.
[01:35:14] And this is one of the things when I was early days working on Solid. I mean, you can do smart stuff and shared context, but the context was actually the performance thing. I was actually using a templating language very similar to this at the beginning before I chose JSX. And when I went to JSX, I suddenly got this performance boost.
[01:35:34] To be fair, there's another step between this and getting to JSX, which is instead of walking the live DOM nodes,
[01:35:42] you know,
[01:35:43] taking this in as a string and parsing it, doing the AST.  But even then, um,
[01:35:52] Like, it depends on the approach you're taking to compilation. I was taking it very similar to this mentality. We were always building
[01:36:00] these nested child contexts and binding to them.  And yeah, compared to JSX is kind of just like using  the existing JavaScript scope, it was definitely a lot
[01:36:11] more involved and it had a bit of a performance cost.
[01:36:14] But obviously like advanced compilers like Svelte,  don't take that hit.  Okay, so let's continue on.  I know this is pretty heavy.  I knew this was gonna be one of those topics or streams  where we were doing some coding.  Definitely require some thinking.  So okay, so we have if, and I think if is like  the higher level one.  So let's, like we did last time,  let's build what we wanna build before we,
[01:36:41] like make what we want to build before we make it so that
[01:36:43] we can see the stuff. So, let's go into index template. We have a conditional with P. Let's
[01:36:56] And then let's list item.
[01:37:04] And then this item will have an S4 on it.
[01:37:08] And
[01:37:10] We were looking at the template here, and it had this loop thing, which is really cool. This is why I chose Riot. I remember this back in the day. It actually supports like,
[01:37:21] these kind of syntaxes, like the key in.  So I'm not going to worry about the index so much.  We're just going to be key in I.  Let's build towards that at first as a first step.  So let's go...
[01:37:32] And again, because it has a special, we don't need the
[01:37:35] interpolation, so let's make it for
[01:37:39] Um,
[01:37:40] item in list.
[01:37:44] Thank you.
[01:37:45] And then--
[01:37:50] The item in here, we'll just keep it simple initially.
[01:37:54] Bye.
[01:37:55] All right.
[01:37:59] This is why you build the HTML first so you can see the errors you make up front. So
[01:38:05] we we now have a list item with undefined in it because
[01:38:10] It doesn't.
[01:38:11] doesn't have this stuff. Okay. So,
[01:38:14] Let's
[01:38:15] Let's make another signal.
[01:38:19] Just this way we can add interactivity to it when we go.  And what do they call it?
[01:38:26] Thank you.
[01:38:28] Thank you.
[01:38:31] And let's initialize our list to apple, banana,
[01:38:38] Orange.
[01:38:41] All right.
[01:38:43] Oh.
[01:38:46] And again,
[01:38:49] Thank you.
[01:38:50] I see why Vue has helpers for their setup functions.  If you're always like, I mean, they don't have the tuples, but you're always like,
[01:39:00] declaring it and then passing it out of the function like this. Okay. So,
[01:39:09] Set name has already been declared.
[01:39:12] Oh, that's probably just...
[01:39:13] on a date.
[01:39:16] Beautiful, okay. So,
[01:39:19] - It's, our for loop's gonna work.
[01:39:23] somewhat similar to this, right? We're going to
[01:39:25] We're going to...
[01:39:26] Thank you.
[01:39:28] We're gonna do this.
[01:39:31] And so do we have four?  And then similarly, we're going to get our expression, and we're going to remove it.  And we're probably going to get the parent.
[01:39:42] In fact, I think we're probably going to do
[01:39:48] almost all of this.
[01:39:53] right off the bat.  I mean, it's going to be four this time, but...
[01:40:00] We're probably going to do all of this.  OK.  And then is where things kind of change up a bit.
[01:40:11] So,
[01:40:12] Hmm.
[01:40:17] I guess
[01:40:19] we probably want to get the information
[01:40:22] about the for loop first. So let's kind of
[01:40:27] Let's look at--
[01:40:28] that
[01:40:31] Thank you.
[01:40:32] Return this just as I can.
[01:40:37] That information, actually, it's probably return marker again, isn't it?
[01:40:41] Yeah, that information is going to be from that helper I was saying. So what's this console log it?
[01:40:49] with a pimple
[01:40:52] .loopkeys.
[01:40:57] Expression.
[01:41:02] Okay, I mean, oh, it's because we need to put our delimiter on it again.
[01:41:12] Thank you.
[01:41:12] Thank you.
[01:41:14] Beautiful.
[01:41:16] So key item in value list.  OK, that's useful because it actually puts the parentheses  back in for you.
[01:41:24] actually
[01:41:25] They built it in a pretty smart way in that sense to actually kind of help on that.
[01:41:30] All right. So let's see here how this is going to work. So let's just destructure the key and value, key and val actually out of this.
[01:41:42] key val.
[01:41:46] Thank you.
[01:41:48] And
[01:41:50] Okay, cool, cool.
[01:41:54] Ah.
[01:41:56] Some ways this one might actually be a little bit easier because,
[01:41:59] Mapping is a common thing you have to do in a reactive system,  even without view code.  So if you have a reactive map function,
[01:42:09] We can just use that straight up here, right?  So we can go, what do you call it?
[01:42:16] not list, because I'm already using list.
[01:42:18] Am I already using list? No, list isn't in this context. It's in our variable. So I can go const list equals create memo map array.
[01:42:27] And then our map array takes an accessor
[01:42:29] Which is going to be our expression for the bow, I think so it's gonna be temple.
[01:42:37] Vow.
[01:42:40] And...
[01:42:47] And it's going to... Is it Valor? God, I can't remember.
[01:42:51] to
[01:42:51] Did I lose that? Okay.
[01:42:53] Yeah, it's val, I was writing. TempleVal.
[01:42:56] Context.
[01:42:59] And then our predicate is going to be our...
[01:43:04] which is going to be our list iteration. And what are we going to do in here?
[01:43:09] And again, we're just going to insert the list.
[01:43:13] Parent.
[01:43:16] list before marker.
[01:43:20] Thank you.
[01:43:23] And then for the value, this is probably gonna be  kind of similar to this, but there's one key difference here.  We're gonna need to make a new context, right?
[01:43:32] Um,
[01:43:33] because
[01:43:34] Now context has changed.
[01:43:38] I'm trying to think of the best way it is because we
[01:43:41] We have the key, which is the item, so now we need
[01:43:45] We need
[01:43:48] we need to basically assign
[01:43:51] the value from the loop iteration to the keyword item.  So our context has an item because that's what we, that key or whatever is what we call it here.  We need to have items so that when this processes, it has item.
[01:44:04] right so
[01:44:05] we need a new context of item. But the thing is that I don't think this is sufficient because
[01:44:11] we need to spread
[01:44:13] eat.
[01:44:14] existing context. So we
[01:44:17] Let's call it inner because...
[01:44:20] You want to have the outer context still available.  Like, what if you wanted to use name,
[01:44:27] in here.
[01:44:27] inside the for loop, you don't
[01:44:30] If I just made the new context, so we actually need to make sure to get name in the context as well.  So we're going to we're going to spread it.
[01:44:39] So, we have inner context key. So, just if you want to see what that looks like. Let's see if we can console log in and see if we're on the right track here.
[01:44:50] name is a signal, set name, listener bound, and then we have a new item, orange. Yeah. So,  essentially, we took the existing context and we added the new key value onto it. Okay, nice. And then
[01:45:03] What are we gonna do next?  We need to clone our node, right?
[01:45:09] It's basically the same here, it's almost
[01:45:12] It's almost identical to this, I imagine, actually.
[01:45:15] maybe something we can refactor out here.
[01:45:19] Almost right.
[01:45:21] Um,
[01:45:22] All right, context is now inner.
[01:45:28] Thank you.
[01:45:29] Thanks.
[01:45:30] Thank you.
[01:45:32] All right.
[01:45:38] - All right, okay.  So we're displaying our list.
[01:45:44] Let's make sure it's reactive though.  Let's make sure that we did this right.  So what if we,
[01:45:49] go in our template
[01:45:51] Instead of the button setting the name to Jack,
[01:45:55] It...
[01:45:57] we we we we i'm just gonna add jack to the name was it set list
[01:46:03] and with Solid we can go
[01:46:05] list function form is
[01:46:08] - Yeah.
[01:46:09] Spread existing list, add Jack at the end like this.
[01:46:16] I think that's right.
[01:46:19] So we click it.
[01:46:21] malformed arrow function.
[01:46:24] I wonder if this thing can't handle--
[01:46:28] arrow functions?
[01:46:31] The thing is pretty old.
[01:46:39] That's fun.
[01:46:42] You know what?  OK, so this is probably the fun part of having this.  Let's just make like a new--  I'm going to pass this in, unfortunately.  It looks like we found the limit of our templating language  here.
[01:47:03] Let's make a new...
[01:47:05] Add
[01:47:08] um, thing and let's
[01:47:12] So let's-- maybe it says setList will be like add value equals setList.
[01:47:22] L list spread
[01:47:26] List value.
[01:47:29] All right.
[01:47:31] Yeah.
[01:47:33] Something like that.
[01:47:34] Yeah, and there we go.  Now we had Jack.  Okay.  So, okay.  Our 2015 template language isn't a perfect fit with modern arrow functions.  So, maybe we need to do some work on our parser side.
[01:47:51] Hmm, okay. I'm pretty sure when I was doing this last with solid, maybe arrow functions weren't as prevalent back then. I wonder if anyone ever opened an issue on here, but yeah, okay, it's cool. So we have a conditional that works and we have an array and let's actually double check that our list works properly, that we're not doing something really stupid here.
[01:48:14] Right.
[01:48:15] Let's look here because we have a bunch of elements.  Marker, marker, marker, marker.  And then,
[01:48:24] When I click add, it should add an
[01:48:28] Why is there another UL there?
[01:48:30] Interesting. Are we not removing something? Okay, let's just try it. Click add. It should
[01:48:37] add only the one item and not re-render anything else.  And that looks to be what's happening there.
[01:48:45] Thank you.
[01:48:46] Okay. Interestingly, we have an orphaned
[01:48:50] So am I not, did I forget to write
[01:48:54] replace it or remove it.
[01:48:56] in this process.
[01:48:59] um
[01:49:00] Where is it?
[01:49:05] Hmm.
[01:49:06] I did.  Okay, well, that's interesting.  Okay.  Let's probably track that down.
[01:49:12] But that's...
[01:49:14] That's most of it here. Okay, cool. For the few of you that are still here, hopefully, hopefully you got some value from this. But
[01:49:23] This is...
[01:49:25] This is kind of...
[01:49:27] the majority of this is like what JavaScript frameworks were like in 2011 or 12 or Alpine or PetitVue.  This is how they're able to get them so small because essentially you only need maybe like a small subset of the reactive system,  whatever you want to support.  We're using insert from SolidJSWeb, which for the arrays is a little bit cheating because I didn't really show it off.
[01:49:57] Technically,
[01:50:00] we need to diff...
[01:50:01] the arrays as they're coming in. And to do that, there's libraries out here, but one popular one here, essentially
[01:50:12] And I think that's a good thing.
[01:50:14] which
[01:50:15] It will look something like this. I'll take the parent, it'll take the current nodes, take the future nodes, and then I'll give you ability to interact with them for that.
[01:50:23] All you do, you can basically just...
[01:50:26] Thank you.
[01:50:26] patch that essentially to basically pass in the--
[01:50:33] Like the way this is working right now is map array in here is mapping all of the data to real DOM nodes. So you're going to have an essentially whenever you read from list, you're going to have
[01:50:48] Um,
[01:50:50] Thank you.
[01:50:50] a list of the like the DOM nodes that and some of them might be connected some of them might not be because this is this is only calling this callback function when new data comes in if existing data it just maps to the existing DOM nodes we're not creating new DOM nodes every time and then essentially you have this list of DOM nodes and all you do is you store the previous version
[01:51:13] um list
[01:51:15] each time you go through and you pass in the new list. And essentially, a helper like this,
[01:51:21] we'll take the...
[01:51:24] the current list or the previous list in the current list.
[01:51:29] Um,
[01:51:30] Like they have this get-- this is for like VDOM.  But you can just refactor that out, essentially.  And this is for our marker that we added.
[01:51:39] And essentially, this basically just diffs the list for you.
[01:51:45] What...
[01:51:46] what this looks like
[01:51:48] is kind of a bit of code, but it's not as much as you might expect.  It's just a pattern where essentially it looks at both lists and it compares the indexes on the...
[01:52:05] from both sides. It goes from the start and from the end, essentially. And as long as the start and  the end are the same, it basically shrinks the list down, walking from both the start and the end,  until it finds the first thing that doesn't match between the two lists.  And then now you're dealing with only a smaller subset of the list. And then it checks,
[01:52:28] And this is kind of funny, but it checks if the head or the tail
[01:52:33] is
[01:52:34] the thing that the other one expects. So, you know, if you just, it's very common in lists to  do like a swap or move. So if your operation is only on a single node,
[01:52:45] you know, where you moved or swapped them, quite often, when you hit that thing, it will, the end will be the start or the start will be the end of the other one. So just quickly checks that and swaps and then continues on shrinking it. And finally, if it just fails,
[01:53:01] through those kind of simple swaps and shrinking, it starts
[01:53:06] essentially adding--
[01:53:08] This is the else statement here. Adding them to a map and then checking
[01:53:14] if it has that node already and reposition them with a map.  So this is a little bit more advanced.  You could have just done the whole thing with a map.  And it's a smaller algorithm.
[01:53:26] But it ends up
[01:53:28] Um,
[01:53:29] being a little bit slower because it's not optimized for the fast path. There's some really smart ones. Stage zero. He kind of generalized it. So if you ever want to build your own framework. Sorry, not this one.
[01:53:44] Stage 0 from Freak 6 to 113. He actually remade
[01:53:51] um
[01:53:53] the
[01:53:54] the
[01:53:55] version of the reconcile that you'd use for keyed.
[01:53:59] He has...
[01:54:00] reuse nodes, which is unkeyed.
[01:54:02] And he has reconcile, which is like the referential one that like solid uses that doesn't use key, but it's the same as key. He actually has all three versions here, using a much bigger algorithm, but very similar. But this is the fastest least move. It's called
[01:54:18] It's called the LIS algorithm.
[01:54:22] which is, I always mess it up.  It's like longest...
[01:54:27] Damn it, why do I never get the name of it right?
[01:54:32] something sequence. It's like
[01:54:37] longest increasing sub sequence.  And this lets us basically identify
[01:54:47] the smallest pieces that we can replace. And algorithmically, if you do the changes in this  order, going from the longest of the sequences to the shortest, it's the least possible theoretical  moves for any kind of sorting. So we were using this before. We actually went to the slightly  more Bruce Forrest simple one because it was faster for the majority of cases. But again,
[01:55:17] frameworks, they're actually
[01:55:19] fairly dumb here, to be fair.  So this one might be the smartest for a completely random  shuffle. uDOMDIF handles--
[01:55:30] decently well because it optimizes the common cases and then it kind of defaults. And then if you just use the map straight, like if you ever, I don't know if I want to pull it out right now, but like Svelte has a very, very small diffing algorithm. It's less performant, but I mean,
[01:55:48] For the most part, you're not going to -- sorry, it's in the Svelte runtime here.
[01:55:54] the runtime that doesn't exist, according to some people.
[01:55:59] Where are we?  Internal loop.
[01:56:08] Here it is. Where is it? Clear loop. No, that's not it. Where's the helper?
[01:56:15] It is not this one.
[01:56:16] Bye.
[01:56:17] Okay, not this one, just a second.
[01:56:24] It's going to be in here.
[01:56:26] Key to each. Here it is.  Because without a key, you literally just do a for loop and just replace everything.  It's really simple.  But essentially...
[01:56:37] Yeah.
[01:56:38] This version is you just use two maps.
[01:56:42] And then you just kind of wild loop and do the maps. And it's pretty small.
[01:56:50] Like there's the inserting stuff here,  but the actual diffing algorithm is just--
[01:56:55] update key to each. It's just...
[01:56:57] Yeah.
[01:56:58] Yeah, well, actually, it goes to here.  It's not the smallest.  But, yeah, it's like 100 lines of code instead of 300 lines of code  versus some of the bigger ones, which are like, you know,
[01:57:11] a little bigger than that.
[01:57:15] The great thing is
[01:57:17] All these libraries that do this are out there.  So like most of the time, there's a certain type of person who works and perfects these,  like the creator of Eevee, Boris Kahl, you know, works through, comes up with the best algorithm.  Then everyone else just uses it.  Like if you look in the VDOM libraries, like 70% of them use SnapDOM and, you know,  you DOMDiff we've been using in Solid.  And actually there's a list.
[01:57:42] Biff.
[01:57:45] Benchmark. I forgot. I think I forgot to show this in my previous benchmark episode, but there is a list of benchmark. Let me...
[01:57:54] Just bye bye.  And the list if benchmark, let me see if I can find it here.
[01:58:04] Who is it? It's a guy from...
[01:58:07] It's a sinuous developer.
[01:58:14] Let's find it. Another reactive library. Yeah, there it is.
[01:58:25] Best if.
[01:58:29] or GSDF benchmark.
[01:58:35] Everyone's probably using like a version of this.  Stage zero is basically the EV algorithm.  And you can see the size of the algorithm.  And then there's like a comparison chart  for a bunch of different things.
[01:58:46] I saved us the time of going through and re-implementing this or, you know, making it work to our thing. So that's just the solid insert thing goes like if it's an array do the diff, if it's a simple value insert around the marker, basically, I kind of saved us from going through this but essentially
[01:59:04] You know, this looks a lot like the JS framework benchmark because a lot of lists, it just tests a lot of different lists things.  The only thing is this benchmark doesn't test the cost of the DOM.  So it unfairly make, it only tests the overhead of the like JavaScript part, which is a little bit unfair to some of the algorithms because...
[01:59:28] Like...
[01:59:29] Stage zero
[01:59:31] for...
[01:59:34] I forget which one.  There's like a sword or swap one.  Yeah, here, shuffle.
[01:59:40] It shuffles a thousand rows in 18 years.
[01:59:45] uh 1888 moves and this is like a it's it's not random it's randomized so like no algorithm can  game it but they all get the same problem to solve whereas some of them most of them like  some take 2000 a lot of them take
[02:00:02] 1980, UDOM diff only saves  two moves out of the...
[02:00:07] typical map possible moves in this case.  Whereas stage zero is like saves hundreds of moves.  So for actual DOM, where you're doing a lot of shuffling,  this algorithm has some benefits.  It's just like three times larger than the other ones.  So kind of cost size evaluation there.
[02:00:25] Yeah, I don't know.  So that explains like the missing part of insert essentially.
[02:00:31] so I don't know does anyone have any other questions I don't know what else to do with  this right now we could like
[02:00:37] play around a little bit and make something.  But for the most part, I'm going to just name this--  what am I going to name this?  It's not even progressive enhancement, as I already  explained, but like simple--
[02:00:52] **** Yeah.
[02:00:55] Render.
[02:00:57] And
[02:00:58] Pooks that in chat.
[02:01:04] You can kind of play around with it.
[02:01:06] And--
[02:01:08] If there's nothing else, maybe we just call this one a night.  Maybe not the most enthralling content, but this is the kind of...
[02:01:17] stuff that the internals of frameworks work, even when they're not using this kind of technique, when they're using like AST compilation stuff, the runtime still tends to look a lot like this, at least for a reactive runtime. This has all the fundamental pieces. It's just a little bit buggy. The question is, do I take this further and actually release library with it?
[02:01:39] I'm probably not going to do that.  Probably not.  We already saw some limits in the templating language, which  means we probably need to find one.  And we'd have to-- we probably want to make sure that it's  small so we'd have the performance--
[02:01:52] you know, benchmark it and look at like the different stuff. But this, this, hopefully, you know,  if you ever felt like, you know, getting started and building your own frameworks, this could be
[02:02:02] you know,
[02:02:03] a little bit of a lesson to you. Okay.
[02:02:06] Thank you.
[02:02:06] Thank you.
[02:02:07] Thank you.
[02:02:10] yeah so yeah let's call it thank you all for joining me I hope you had great holiday break  and you didn't all get COVID which is very serious right now but yeah till next time
[02:02:30] Thank you.