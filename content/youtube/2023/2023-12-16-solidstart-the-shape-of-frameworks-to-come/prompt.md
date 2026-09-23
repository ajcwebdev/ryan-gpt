---
title: "RzL4N3ZavxU"
slug: "RzL4N3ZavxU"
duration: "5:02:35"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/RzL4N3ZavxU.m4a"
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
[00:02:59] I muted the mic in StreamYard, my bad. Sorry about that.
[00:03:03] How's everyone doing?
[00:03:05] All right.
[00:03:06] Little sound clip from...
[00:03:11] from The Refused, which inspired the stream cover.  That song came out in 1998.
[00:03:17] Um,
[00:03:18] It was pretty ahead of its time.
[00:03:22] mixing bits of electronic with post-hardcore punk.  I have to admit, I didn't...
[00:03:29] first catch on to them until about 2000.
[00:03:33] obviously dating myself a little bit, but, um,
[00:03:36] They had an incredible impact on the next 10 years of post-hardcore.  Even rock music.  Even bands like Lincoln Park citing them as a major influence.  I think Mike from Lincoln Park said that they wouldn't have existed if it wasn't for The Refused.
[00:03:54] Yeah.
[00:03:55] Yeah, anyway.
[00:03:58] Obviously, absolute banger of a song.
[00:04:01] But...
[00:04:02] Not why we're here today.
[00:04:04] But...
[00:04:06] It's...
[00:04:09] I've been thinking a lot about meta frameworks with SolidStart and the work we've been doing there.
[00:04:16] It would be amazing, obviously, if someday the work that we do could be as influential, you know, in our in our realm.
[00:04:23] And that's where the stream cover came from and the whole thing.
[00:04:29] I was hoping to give you a couple minutes to...
[00:04:32] hear the tunes. Maybe not everyone's cup of tea, so to speak, musically, but...
[00:04:38] Thank you.
[00:04:40] Yeah.
[00:04:41] you
[00:04:48] - No, no, I am using a green screen.
[00:04:51] There's a funny story behind this.
[00:04:54] I really liked the Theo had like an aperture effect, I guess, on the lens.  Like he's like nice cameras.  So he was really clear and his background was blurred.
[00:05:03] And
[00:05:04] I just took a picture of my own office and slightly blurred it.
[00:05:09] So if I got rid of the green screen, it's almost the exact same background.
[00:05:12] There's more Lego figurines on my shelf.
[00:05:15] You can see Grogu back there right now, but I have a few more.
[00:05:19] Yeah.
[00:05:21] Thank you.
[00:05:22] Bye.
[00:05:23] Thank you.
[00:05:25] -
[00:05:27] So anyway.
[00:05:29] I should probably...
[00:05:32] get started here. And I have to share my actual screen now instead of the refused.
[00:05:40] So let me see here.
[00:05:43] Share a screen.
[00:05:50] all right here we go
[00:05:52] Um...
[00:05:55] We're going to talk about a few things today, but mostly related to Solid Start.
[00:06:00] um the stream's gonna have a lot of live coding um so bear with me because
[00:06:06] I haven't
[00:06:07] This is my first time trying to do everything that I want to do on the stream. It's going to be a lot. I'm going to try and go fast.
[00:06:15] But...
[00:06:17] I guess...
[00:06:18] The first question is, why are we here? Why am I doing a live stream?  But let's start at this point. So big picture thing is solid start.
[00:06:26] Uh...
[00:06:27] is
[00:06:28] has been in beta for over a year now.
[00:06:31] I've been working on it.
[00:06:33] since February 2020.
[00:06:36] Two, I want to say.  Um...
[00:06:39] Although I think it's actually...
[00:06:40] When did VEAT, I mean, we can actually look up when did I start working on.  Maybe it's 2021.  I can't even keep track.  VEAT.
[00:06:46] to release. When did Beat 2.0 come out?
[00:06:49] There, yeah, February 2021.
[00:06:52] It's almost been three years since I started on Solid Start.  That's right.  I started Solid Start before Solid 1.0 had even gone out  because I wanted to vet my ideas on server-side rendering  before I could release Solid 1.0.
[00:07:05] So that's a long time.
[00:07:08] didn't go to beta till the end of
[00:07:11] of 2023.
[00:07:13] Um,
[00:07:14] Just, you know, there was issues and stuff and things that we had learning over the way.
[00:07:21] But then
[00:07:23] spent the last
[00:07:25] Year?  Year?
[00:07:26] you know, since we went on beta.
[00:07:28] basically almost immediately realizing that I needed to change some things. And what
[00:07:34] kind of rewrote the app. Someone phrased it that we rewrote Salt Start multiple times. And I think  that would be fair. You know, even in the last year, you know, the first time we I wrote, I
[00:07:45] you know, we wrote Solid Start, it might have taken us quite a while, like 18 months, almost two years.  The next time it took, you know, six months and the last time it's taken us four months.  So we're getting faster at rewriting Solid Start. You'd be like, OK, well, why rewrite Solid Start?
[00:07:59] Um...
[00:08:00] It's because...
[00:08:03] It's really important
[00:08:05] for us and ecosystem and given the amount of resources we have to create something that's sustainable.
[00:08:13] I know that might seem weird when we live also in a world where we have VC-funded companies
[00:08:20] frameworks and projects.
[00:08:23] And
[00:08:24] you know,
[00:08:25] A lot of money is going into meta frameworks.
[00:08:29] So why...
[00:08:32] you know, am I concerned about this? It's because Solid as a project
[00:08:36] you know,
[00:08:37] might not always have the same amount of resources or funding as other projects. And
[00:08:42] Even if there's good points and there's low points, the most important thing for me is longevity and maintainability.
[00:08:49] So I do apologize this is taking a lot longer than I would have liked.
[00:08:54] But,
[00:08:55] We're here today because we're close. We're basically at the next milestone, which is
[00:09:01] is not 1.0 release yet, but this one feels like it's going to be the one that leads to the 1.0 release.  We have all the pieces in place.
[00:09:12] Like,
[00:09:12] When I started SolidStart, I had like a checklist.  And if you go open some old issue on GitHub,  we could probably find it.
[00:09:20] We finally are checking all the boxes.
[00:09:23] Plus...
[00:09:24] I don't see any barriers to where the future is heading.  This has been a very tumultuous...
[00:09:30] time period because while we were building SolidStart, the whole way we approached and looked at server-side rendering has evolved. And I knew that was already happening. If someone asked me,
[00:09:41] you know, two years ago, three years ago, around 2020, what I thought about the state of
[00:09:46] actually I'm just going to go ahead here. When I thought about the state of JavaScript  frameworks for server rendering,
[00:09:52] You know, like, oh yeah, you know, we got Surfside running, we have Noxt and Next or whatever.  I would have told you it was about a 2 out of 10.
[00:09:59] And I know that seems pretty harsh, but the reality is...
[00:10:03] we were kind of not great at it.
[00:10:05] And
[00:10:07] The stuff that I'd seen starting to work on eBay and Marco, I was amazed from a performance standpoint what they'd accomplished.
[00:10:16] I knew that we were at this turning point where people are going to expect a lot more out of their SSR solutions.
[00:10:22] And tying that together with, you know, new platforms, things like Edge coming out, which enabled JavaScript, you know, being deployed in a way that's never been deployed before, meant that pretty much the whole ecosystem is going to get turned on its head.  So how do you feel comfortable putting out something that's basically the best of last gen?
[00:10:43] You need to because you need the project, right?  Everyone needs to, not everyone, but a lot of people need server side rendering.  It's an important feature. It's the thing I get asked about the most, like, you know, where's your next JFC?  It's like, okay, solid's really cool, but where's this? It's like the first question people ask for.
[00:11:00] So I knew
[00:11:02] that it was absolutely essential that even if the future wasn't here yet, that we need to
[00:11:08] build for now, and anticipate this future.
[00:11:11] and do it in a maintainable way so that we didn't bury ourselves.  Because I didn't want to create solid start originally.  I was worried.  I was hoping someone else would because it's a lot more work to add these opinionated layers.  There's more churn, you know.
[00:11:24] trends change. It's like fashion. Sometimes for good technical reasons, but generally the way we build apps, if you look, some people talk about framework churn, you know, like, you know, there's too many JavaScript frameworks, they last six months.
[00:11:36] I mean...
[00:11:38] If you go more micro on that,
[00:11:41] the way we actually built apps like best practices changed way more rapidly than JavaScript frameworks. And those architecture at each one of those architectural points, you could have just replaced the framework.  React is a perfect example of this over the years, going back to like original React, React with Flux, TypePounds React with Redux.
[00:12:00] then the change to GraphQL. And I know I'm just naming libraries, but these fundamentally changed the way you approach stuff. We got to the...
[00:12:09] point when we had stuff like, what's it called?  Recompose where we started doing Hawks.
[00:12:15] Spartan Dumb Components
[00:12:17] And while you can view some of these as
[00:12:21] techniques or storage they actually fundamentally change the way you built your app to the point  that i've seen i saw this a lot people would come into a project and that was a new project built  you know greenfield on like the latest trends and they and they'd be like this isn't react in react  you should use this and this and this and it's like no that was how we did it two years ago or  you know a year ago you know uh you know the the rise of tan stack and then the rise of trpc and like
[00:12:47] These
[00:12:48] changes have
[00:12:50] more of an implication on the architecture of your app
[00:12:53] perhaps than choosing React does in itself. And you could say that this is a good
[00:12:59] vouch for the flexibility of React, right?  Because it could always support all these different patterns.  And I think it is.
[00:13:06] But, and honestly, that's what I respect and love about React the most.
[00:13:12] But it's also like the goal with solid to be
[00:13:15] Like that's what solid's the best at.  Like that's where its strength is.
[00:13:19] And I think...
[00:13:21] We've shown that, but I mean...
[00:13:23] Honestly, we're talking micro details. Between Solid and React in this case, who cares? They're both good at that. Some other frameworks may be not as good at that.
[00:13:31] But...
[00:13:33] Okay.
[00:13:34] I think what's interesting is something changed.
[00:13:38] about a year ago.
[00:13:39] And it just set me off on the things.  React kind of abandoned that principle when they told everyone that they need to use a meta framework.
[00:13:46] when they need to use Next.
[00:13:48] I...
[00:13:49] That was the turning point for me.  And some people are like, well, it's because all the React team works at Vercel.
[00:13:55] Yeah.
[00:13:56] That's not completely true.
[00:13:59] but like
[00:14:01] Yeah.
[00:14:02] That I think.
[00:14:06] That premise, that basis is what we need.  Someone can always come in with their opinions.  You can always get a Redwood for your...
[00:14:14] your React or create T3 app for your next JS or whatever.
[00:14:18] But
[00:14:19] But where those boundaries lie, that's the important part.  And...
[00:14:25] I realized that Salt Start did a lot of good stuff.  Server functions, I think we introduced to the world.
[00:14:32] pluggable routes and a bunch of like there is a really good stuff with that release.
[00:14:37] But...
[00:14:39] I knew that it just wasn't there yet.
[00:14:50] - I'm just catching up a bit on chat here.
[00:14:52] Like, swear to shit, yeah.  Yeah, yeah.
[00:15:00] Thank you.
[00:15:08] I would love... I know calling shots on this sucks, but I would love for Solid Start to hit V1 and a Q1.
[00:15:16] you know, around March-ish.
[00:15:18] you know,
[00:15:18] I think it's going to take a lot of testing and bringing up from the community,  but at least we're at a point now where I don't,
[00:15:26] feel bad about presenting the APIs.  When I did the beta last year, I was like, in my head, I'm like,
[00:15:30] We're going to change a bunch of stuff.
[00:15:32] I know it. Like...
[00:15:34] It might not come till V2, but we're going to change stuff.  Like we're going to, we're going to.
[00:15:40] put this out, make a V1, have to support it and do the thing.
[00:15:45] and then we'll do v2 and we'll change everything.
[00:15:47] that
[00:15:48] And
[00:15:50] I was okay with that because we need something out now.  But...
[00:15:53] V1 proved harder than I anticipated.
[00:15:58] And now it just doesn't even make sense to wait for a V2.  You know, like some features...
[00:16:03] There's a future here and we'll talk about that later on in the stream. But
[00:16:07] I do want to make it very clear that
[00:16:12] - Thank you.
[00:16:13] Because a year has passed, we know that much more and our patterns are better.  And I'm glad we took the time, as usual.  Sala took the time originally and...
[00:16:23] while there's flaws and issues, SolidJS itself
[00:16:26] You know,
[00:16:28] you know, wouldn't be where it is today if we hadn't taken the time and care with it.
[00:16:35] Okay. So...
[00:16:39] Who wants to see Saul start?
[00:16:42] Right. Look. Oh, wait, did I forgot to tell everyone I was streaming?
[00:16:47] I got so like in my intro talk
[00:16:49] Give me like two seconds here.  I should tell people that we're live on Twitch.  I haven't even opened Twitch yet.  Are people around?
[00:16:57] I guess other people, I mean, opening Twitter shows me that
[00:17:01] that people have already taken it on themselves to tell
[00:17:04] tell everyone but
[00:17:06] you know,
[00:17:07] We are live, so I think I should tell people that.
[00:17:10] This is a solid signal.
[00:17:13] Okay, fine. A lot of people are telling people we're live. Okay.
[00:17:18] Alright, fine.
[00:17:21] We're live.
[00:17:24] All right, give me two seconds here.
[00:17:28] Thank you.
[00:17:28] I say we're, but it's like I am live.
[00:17:31] No, we're live.
[00:17:33] We're in this together.
[00:17:35] Thank you.
[00:17:37] Okay. All right. Here we go.
[00:17:46] Alright.
[00:17:49] *sigh*
[00:17:51] Let's signal everyone. Those jokes are going to come forever.
[00:17:56] Okay, so what am I going to do today?  I am...
[00:18:00] not
[00:18:01] going
[00:18:03] to just do a highlight of the features.  What I do have here is the new SolidStart docs,  which look a lot like the actual SolidStart docs,
[00:18:12] You know,
[00:18:14] You'll just notice one huge difference.
[00:18:17] API reference?
[00:18:19] is this
[00:18:21] New one API reference is...
[00:18:23] is this, I don't even have to scroll.
[00:18:25] Obviously the docs are incomplete, so there's that, but actually for the most part,
[00:18:30] This is...
[00:18:32] going to be the takeaway today is just how much less is in solid start.  And I know you guys are like, what you're selling us on less.  How is.
[00:18:41] How is this a good thing? Well, sometimes less is more.
[00:18:44] So...
[00:18:46] You know...
[00:18:49] Yeah.
[00:18:51] Yeah, that's the theme here today.
[00:18:57] Thank you.
[00:18:57] I want to tell a story instead, and this story is going to take you on...
[00:19:03] my journey
[00:19:04] through web development the last decade.
[00:19:07] because I think it puts SolidStar into perspective.  And in the meanwhile, we'll get the showcase off all the features,  and I'll have the docs for reference, and we can talk through stuff.  And as I said, I have not done this demo live before.  It's going to be some live coding. It's going to be messy.  Like last time where I spent like 20 minutes figuring out that you can't put
[00:19:26] you know, what's those called? The certain type of quotes on use directives?
[00:19:30] You know,
[00:19:31] I've learned enough that I'm not going to do that again, but
[00:19:34] Right.
[00:19:35] So where, like...
[00:19:37] Where do you start?
[00:19:38] when you do that. Like,
[00:19:40] I'm going to start here, actually.
[00:19:44] Thank you.
[00:19:44] I've got an example that I did update a couple files, but I'll explain it in a minute.
[00:19:51] I just grabbed...
[00:19:52] solid started, I went PMPM create solid at beta.  You can do this right now.  And I just pre downloaded this thing  and it has everything, all the latest dependencies,  the config, all this stuff.  And there isn't much to it.  What I wanna do is actually focus here
[00:20:06] on the source folder because inside the source folder is our app.
[00:20:10] And
[00:20:11] This is the bare solid example for SolidStart.  And inside it,
[00:20:17] There is a entry server, which is our document.  If you've used Veep before, you can think of this as like index HTML.  It's a little bit...
[00:20:25] fancier.
[00:20:26] But there is a document in here.
[00:20:28] HTML head, you can put your stuff in here, tells you with script tags, where to insert your app.
[00:20:33] Okay?
[00:20:34] There's an entry client.
[00:20:35] which calls mount. Why does it call mount?
[00:20:38] This is because it can handle render and hydrate and different types of scenarios.
[00:20:45] This is just an alias over...
[00:20:47] Um...
[00:20:49] over our renderer hydrate calls.  And you can see solid.js start client here,  and on the server one,
[00:20:57] Unsurprisingly, Solid.js starts server.
[00:21:02] We can ignore these files. People probably don't even touch them most of the time.
[00:21:06] and focus on what matters, which is our project in an app TSX.
[00:21:11] And what is our project?
[00:21:12] Well,
[00:21:15] Let's PMDev and look what this project is.
[00:21:21] Because you've probably seen it before.  I wanted to play on your nostalgia here a little bit.
[00:21:26] and
[00:21:27] Let's actually, I'm going to use an
[00:21:30] incognito window.
[00:21:32] for most of this demos today because I always like that.
[00:21:35] Hello.
[00:21:37] Thank you.
[00:21:39] Okay.
[00:21:42] You probably...
[00:21:45] Seen this before.
[00:21:47] All right.
[00:21:49] This is...
[00:21:50] a lovely spinning thing. And you probably remember the first time you went in here,
[00:21:55] into the, sorry, I can't.
[00:21:57] I should get this one out of the way.  You went in here and you played on the template and you went...
[00:22:02] And you add a bunch of exclamation marks to the end, and you're like, look,
[00:22:06] Hot module reloading.
[00:22:08] You know?
[00:22:09] This is nothing fancy, but this brings a lot of nostalgia for me because this was Create Solid App, as mentioned, but I'm talking about Create React App here.
[00:22:19] Right.
[00:22:21] Thank you.
[00:22:22] like you opened up your app
[00:22:24] your app basically was
[00:22:27] app.tsx, you put your code in it,
[00:22:31] and bam, you're off to the races.
[00:22:35] There's nothing too special about this app.
[00:22:38] at the network call for the doc.
[00:22:41] You're going to see some debug stuff because I'm in debug mode right now.  Some NUCS stuff from Nitro, but don't worry about that.
[00:22:47] If we look at our HTML,
[00:22:49] you're going to see something very familiar.
[00:22:52] You're going to see...
[00:22:54] Where is it? Oh, yeah, it's so small I missed it.  Body div ID app div ID.  And the reason is this is a client send rendered app.
[00:23:02] Essentially.
[00:23:03] We just went div ID app div.  And then our mount call, as you saw,
[00:23:10] in here.
[00:23:12] Okay.
[00:23:13] Just was like, okay, mount...
[00:23:17] in element app,
[00:23:19] And our server call, well, you know what?
[00:23:24] I'm just going to give this a title, why not?
[00:23:27] Solid demo.
[00:23:29] Let's update that.
[00:23:31] page reload. Hopefully
[00:23:33] Ah, interesting.
[00:23:36] Thank you.
[00:23:37] Thank you.
[00:23:38] Yeah, HMR did not work on my entry file.
[00:23:42] I should I should check up what's up with that.  It's possible because we're in
[00:23:47] CSR mode.
[00:23:49] Anyway.
[00:23:52] Now we have our solid demo. I'm just going to prove that we actually
[00:23:56] Um...
[00:23:58] have a HTML document,
[00:24:00] with
[00:24:02] a lot of nuxt dev stuff this stuff goes away on the bill but here we go right so
[00:24:07] Pretty straightforward.
[00:24:10] We are missing that.  And to be fair...
[00:24:19] the actual demo has it. I just wanted to start here for nostalgia purposes because
[00:24:26] I just wanted to take us all the way through because what do you do now?  You have your beautiful demo.  You go PMPM build.
[00:24:34] Right?
[00:24:35] And we're going to we're going to
[00:24:37] We're going to build this.
[00:24:40] Oh, sorry. Am I in the...
[00:24:42] Am I in the right thing? Yeah.
[00:24:44] And
[00:24:46] We're going to look at our output folder from there, and we're going to see a lovely index.html.
[00:24:52] that if I format this document for a minute so we can see it,
[00:24:55] Oh, really? HTML files don't have a... I never use this computer, apparently.
[00:25:01] What I wanted to show was that
[00:25:04] This is, you know what, I don't need to show it because we're just going to use
[00:25:09] We're just gonna MPX serve. You guys ever use serve before?
[00:25:13] We're just going to use serve the public folder.
[00:25:16] Go back to our localhost3000, refresh the page,
[00:25:20] And we have our lovely thing.  And now this time when I look at the document,
[00:25:24] There's some manifest stuff from Vinci here.
[00:25:27] I got to talk to Nikhil what this actually does. This might be a little bit
[00:25:30] excessive.
[00:25:32] But...
[00:25:33] We have our div, app, div, our title, our rendered stuff.
[00:25:37] That's basically...
[00:25:40] That's basically it.
[00:25:41] There's even, you know, our style sheet loads in.
[00:25:44] And...
[00:25:46] How much JavaScript's on the page?
[00:25:48] Well, 5.7 kilobytes.
[00:25:50] That's it, you know?
[00:25:52] You built your Hello World single page app.  It's five kilobytes like it's supposed to be.
[00:25:57] Right?
[00:25:57] And that
[00:26:00] is the start.
[00:26:01] of Solid Start.
[00:26:03] It...
[00:26:04] is
[00:26:05] Create React App.
[00:26:07] It's built on beat.
[00:26:09] So, you know, there's a vconfig, you can do way more stuff, but
[00:26:12] At
[00:26:12] It's bass...
[00:26:14] I just have five kilobytes of JavaScript and I threw the stuff.
[00:26:19] in an app.
[00:26:20] dot TSX
[00:26:21] And
[00:26:23] I think we've all been there before.
[00:26:28] Okay.
[00:26:30] Thank you.
[00:26:31] Yeah, yeah, okay. Yeah, this is like create React app, but the nice stuff, right?
[00:26:40] Yeah, none of this injecting, ejecting, whatever stuff, right?
[00:26:50] I actually don't know and I'm gonna have to figure out like this next step tool thing like what Nitro is doing.
[00:26:57] Yeah.
[00:26:58] So
[00:27:00] Thank you.
[00:27:00] Okay, let's continue on from here.
[00:27:05] Thank you.
[00:27:05] 7 kilobytes of solid. It's so funny because some people come to me and they're like, I went on Bundlephobia and I see that solid's 8 kilobytes. And I'm like, yeah, that's like if you're using everything, right? Like,
[00:27:15] This 5.7 kilobytes is the demo code and solid and, you know, like...
[00:27:23] Solid itself in like a Hello World app, I think is more like four kilobytes or four...
[00:27:31] Yeah, four points.
[00:27:34] I guess it's a bit larger now. This tells me it's about actually... the code for this component would be about 1.1 kilobytes. So it's almost 4.5 kilobytes. We've grown a little bit. Eh.
[00:27:43] I'll think about that.
[00:27:47] Oh, Nikhil has the answer. We are building DevTools inspired by Nuxt DevTools.
[00:27:53] They should not be there by default if not opted into. Okay.
[00:27:57] Well,
[00:27:58] There we go. We have Nikhil Sarraf with us, who is the creator of Vinci.  I don't know if you guys saw the cover, the updated one.  He's a big part of SolidStar Project, and he also built the foundation that we built SolidStar on  because it is built on Nitro, which I've already mentioned before, which is the same thing that powers Nuxt.  It's built on Vinci.
[00:28:18] And
[00:28:20] Both of these are built with VEED.
[00:28:22] And then I just sprinkle on the solid, which is why there's just so little of it.
[00:28:27] Right?
[00:28:28] So,
[00:28:29] I mentioned before that
[00:28:32] this isn't exactly the base template, because I did it for nostalgia. If I go back here now,
[00:28:39] And,
[00:28:41] undo my changes here.
[00:28:45] This is the actual base template you get when you install the app. No more logo.
[00:28:50] Um...
[00:28:51] So,
[00:28:52] We're gonna move forward a little bit.  We're gonna get our dev mode back going.
[00:28:56] And...
[00:28:58] Thank you.
[00:28:59] Let me refresh.
[00:29:00] And
[00:29:01] Hello world. And also dev mode, you see all the lovely JavaScript stuff. You get into dev. But this demo, I mean, if you guys don't believe me, this demo is also 5.7 kilobytes.
[00:29:12] Right? It is a counter. Hello world counter.
[00:29:21] Thank you.
[00:29:23] It is offensive. Yeah.
[00:29:27] Thank you.
[00:29:29] You're just baiting me. Of course, five kilobytes is less than quick. I think quick is 17 kilobytes.
[00:29:35] Or 18 kilobytes.
[00:29:37] Um...
[00:29:39] But...
[00:29:40] like when you load the framework.
[00:29:42] But it's zero at the beginning or like whatever the inline script is.
[00:29:46] You guys are just baiting me, okay? I should know when a troll is a troll.  Okay, sorry, just give me a second, I gotta have some orange juice.
[00:29:53] Thank you.
[00:29:54] Okay.
[00:29:57] Okay.
[00:30:00] So,
[00:30:03] Okay, so what? Now we have CRA, eventually, and we have a counter.
[00:30:07] *cough*
[00:30:09] What's the very first
[00:30:14] thing that
[00:30:16] Yeah, anything under 20...
[00:30:21] is like, who the hell cares, honestly?
[00:30:24] Um,
[00:30:26] I'm just going to throw that out there.
[00:30:33] I
[00:30:37] Okay, so let's just continue here.
[00:30:41] I'm...
[00:30:43] I gotta get the stupid... I gotta get the start project out of my... we'll look at it again in a few minutes, but I gotta get it out of my view.
[00:30:49] - -
[00:30:50] What...
[00:30:51] Where do we go from here? What's the very first thing you do
[00:30:55] When you got your client-side app. Okay, so it's great. We have a counter. Um, I think I
[00:31:00] We want a router, don't we?
[00:31:02] So I'm gonna go in here and I'm gonna install a router.
[00:31:07] Okay? And the router I'm going to install is...
[00:31:11] I'm gonna go with SolidJS router, 'cause that's the thing.  And I'm actually gonna install the router  you might be familiar with, 'cause I could put 0.10 in,  but instead I'm gonna go 0.91.  I'm gonna go,
[00:31:23] with the previous version of the router,  because that's probably what you've used
[00:31:28] before, so let's pmpm install.
[00:31:33] This isn't
[00:31:34] This will be important in a minute.
[00:31:37] Um,
[00:31:37] But...
[00:31:38] Let's just go in here and let's replace
[00:31:41] Thank you.
[00:31:42] I don't know. Let's just replace some stuff in here and just put a router in here. Let's get router.
[00:31:48] And come on.
[00:31:51] quick fix from solid.js router.
[00:31:54] And...
[00:31:56] Thank you.
[00:31:57] What do we want to put in here?
[00:32:01] Maybe I'll...
[00:32:03] put
[00:32:04] I need routes component, probably a route component.
[00:32:08] and some anchors. So,
[00:32:10] Let's just kind of go at it.  Let's go...
[00:32:13] Let's make a bit of a nav bar, maybe anchor.
[00:32:16] We'll make a like what, Href.
[00:32:20] equals
[00:32:22] and we'll call that one home.
[00:32:24] And we'll...
[00:32:27] Make another one.
[00:32:29] and say slash.
[00:32:31] to do's or something.
[00:32:33] We'll figure it out as we go.
[00:32:35] And then we will...
[00:32:37] Um...
[00:32:39] make a routes component. I think that's the pattern we use here. And then
[00:32:45] We'll put a route in it.
[00:32:48] And our first route will be
[00:32:50] Path.
[00:32:53] Thank you.
[00:32:54] Actually, this can be self-closing.
[00:32:58] I don't think I'm going to do any nested routes at the moment.  It doesn't really matter.
[00:33:02] and we'll go component
[00:33:04] equals
[00:33:05] Home.
[00:33:08] And we'll make another route and we'll go path.
[00:33:15] to dos,
[00:33:16] component
[00:33:18] equals to do's. And obviously, I don't have these components yet.
[00:33:21] We need to create them somewhere. I'll just make a folder in here. I'll call it like pages or something. Doesn't really matter what it's called. And inside pages, we'll have two new files. We'll have a folder.
[00:33:33] Home.  Home.  Dot.
[00:33:37] I'm going to home.tsx
[00:33:41] And I'll make a new file. I'll make what's the other one called?  Todos.tsx. Okay, beautiful.
[00:33:47] and
[00:33:50] We'll import those here.
[00:33:54] Import.
[00:33:55] home from
[00:33:58] That's it.
[00:33:59] squiggly pages slash
[00:34:03] home,
[00:34:04] and we'll do basically the same thing
[00:34:07] from
[00:34:09] Let's see other one. Do's. Okay.
[00:34:16] Listen, I'm going to do a lot of live coding today. We'll see if this is any good. We will export default.
[00:34:23] function home
[00:34:25] and
[00:34:27] Our home will just have, I don't know,
[00:34:30] I could have kept the counter, but for now, we're just going to go
[00:34:33] We're just going to put
[00:34:34] Home.
[00:34:37] And we're going to put
[00:34:42] to-dos
[00:34:43] in to-do is actually it's the other way around
[00:34:47] So the one I wanted to make cap.
[00:34:48] Right.
[00:34:49] And sorry.
[00:34:52] If everything works properly,
[00:34:55] I'm hoping that when I get in here,
[00:34:58] We'll have home and then to-dos.
[00:35:00] And then we can go back between home and to do's. Okay. That's
[00:35:04] Not terribly surprising, right?
[00:35:09] Thank you.
[00:35:10] All right.
[00:35:11] So there, we have a router.
[00:35:18] Let's continue a little bit further here.
[00:35:22] Because I want to expand this out a little bit.
[00:35:26] I close a bunch of these.  The hardest thing about...
[00:35:29] demoing on screen with this stuff is that you have to make the stuff so large so people can see it.
[00:35:36] Let's...
[00:35:37] Let's go const.
[00:35:39] to-dos
[00:35:42] equals an array.
[00:35:44] And we'll, I don't know, we'll
[00:35:46] We'll put something in here like ID one.
[00:35:48] Um,
[00:35:51] Huh?
[00:35:53] Hello, world.
[00:35:57] And
[00:36:00] completed
[00:36:02] False, okay.
[00:36:03] Just do that. And then
[00:36:06] We're gonna get some solid code in here.
[00:36:10] Um,
[00:36:11] we're going to go what const
[00:36:14] Let's go to do's.
[00:36:21] So not create, sorry, that.
[00:36:24] todos equals create,
[00:36:26] Signal.
[00:36:30] to-dos
[00:36:32] Now, I'm not going to make a full to do app right now.
[00:36:39] But I, I, I,
[00:36:41] Well, I'm not going to make the full to-do MVC app, but we're going to just quickly...
[00:36:46] you know, put something in here. Let's go what
[00:36:50] What do you want to do?
[00:36:51] Thank you.
[00:36:52] We probably need a four.
[00:36:55] component.
[00:36:56] to show our to-dos for each
[00:37:00] And then...
[00:37:05] We will go...
[00:37:10] honestly for a to-do app, I'd probably use a store,  but I'm just being, I'm trying to
[00:37:17] be a little bit
[00:37:18] light here.
[00:37:21] So I'm just going to...
[00:37:24] to do
[00:37:25] Dot.
[00:37:28] Title...
[00:37:30] Um...
[00:37:32] We should import for.
[00:37:37] Thank you.
[00:37:37] Okay, does that give me anything on the screen?
[00:37:42] Beautiful. OK, looks good. All right.
[00:37:46] Let's actually make this a unordered list.
[00:37:52] I probably should like add that like text decoration none.
[00:37:56] I never remember this stuff. This is my problem. I don't do enough
[00:38:00] stuff anymore.
[00:38:02] the
[00:38:03] to actually
[00:38:04] What's the CSS property? Is it text?
[00:38:07] decoration.
[00:38:09] How do I get rid of the bullets?
[00:38:10] Someone in chat tell me.
[00:38:12] I can't... I'm...
[00:38:14] This is not it.
[00:38:17] Thank you.
[00:38:18] Thank you.
[00:38:19] I wanted to get rid of the bullet.
[00:38:22] I can like look it up, like the really lazy way.
[00:38:29] List style month. Thank you. Okay.
[00:38:32] Yes, yes, yes, yes.
[00:38:36] Thank you.
[00:38:37] Thank you.
[00:38:38] There sweet of course it's indented. I don't care.
[00:38:43] Let's continue going.
[00:38:46] Thank you.
[00:38:48] Thank you.
[00:38:50] *sigh*
[00:38:56] probably, is add some mechanism
[00:39:00] to
[00:39:01] actually added to do right.
[00:39:05] So,
[00:39:06] Thank you.
[00:39:07] Let's put... I don't know.
[00:39:11] An input.
[00:39:12] here.
[00:39:15] And what's the...
[00:39:17] value, I don't actually care about the value I need on it.
[00:39:22] actually not even on input,
[00:39:24] It's...
[00:39:26] It's on change technically. It's not even on change. I'm just going to actually, I'm going to make a form. Um,
[00:39:33] That might be
[00:39:34] Like, I don't need a form here, but...
[00:39:36] Let's make a form.
[00:39:39] Okay.
[00:39:41] Let's just make a form.
[00:39:43] And then...
[00:39:45] We'll make a
[00:39:46] button.
[00:39:50] That's like add
[00:39:53] And then...
[00:39:56] Thank you.
[00:39:58] Let's
[00:40:00] that's like, what do I want to do another signal? I want like,
[00:40:05] New to do.
[00:40:08] that new to do.
[00:40:11] Honestly, I'm not.
[00:40:12] This is why you should practice.
[00:40:15] But you should practice stuff before you actually do it. We're just going to go in a little bit here.
[00:40:20] I don't actually need the value I just need.
[00:40:24] on input. Yeah, I do need on input.
[00:40:26] event
[00:40:27] And then we'll do like set.
[00:40:30] new to do.
[00:40:31] equals like event dot target dot current
[00:40:36] or sorry, just dot value.
[00:40:39] Dot trim.
[00:40:42] I'm sure that will cause issues without validation and then
[00:40:46] on submit of our form.
[00:40:49] we're going to simply
[00:40:53] For now...
[00:40:57] Go event. It's probably painful for people who who make
[00:41:01] Um,
[00:41:03] to do apps regularly in their day job.
[00:41:07] Sorry, I'm just being so...
[00:41:09] What we're going to do is we're going to go set to dos
[00:41:15] Um,
[00:41:16] T
[00:41:17] We're just going to go
[00:41:19] Clone it.
[00:41:21] Um...
[00:41:22] Add a new object.
[00:41:24] which reminds me that now we need a counter.
[00:41:28] Let counter.
[00:41:30] equals one
[00:41:32] And then it's simply
[00:41:35] Heidi.
[00:41:37] Counter.
[00:41:39] Plus plus.
[00:41:42] title is going to be
[00:41:46] Thank you.
[00:41:47] the title is going to be the
[00:41:50] new to do text,
[00:41:53] and completed will be false.
[00:41:58] And what does it complain to me about?
[00:42:03] Is this one I tell PypeScript to be quiet?
[00:42:06] No.
[00:42:12] id number
[00:42:17] Thank you.
[00:42:20] Title.
[00:42:21] String.
[00:42:23] Completed.
[00:42:25] Boolean.
[00:42:27] I'm sure everybody
[00:42:29] came here to see me.
[00:42:32] Make...
[00:42:33] make a to-do
[00:42:36] um
[00:42:39] All right, what am I doing here?
[00:42:44] Thank you.
[00:42:46] Bye.
[00:42:48] Theo's not watching as safely as any.
[00:42:51] Thank you.
[00:42:54] All right.
[00:42:56] I know the last step here is going to be set
[00:43:00] New.
[00:43:01] to do
[00:43:02] To...
[00:43:05] undefined again.
[00:43:06] We'll do mpString.
[00:43:10] Thank you.
[00:43:12] Thank you.
[00:43:14] It's weird that I can't, I don't know what I'm doing wrong here. Give me two seconds.
[00:43:20] Let me remove this and see if this still complains.  It doesn't.  So the problem is--
[00:43:25] that
[00:43:29] It doesn't think this is a to-do.
[00:43:32] Did I get the shape wrong?
[00:43:39] Fair enough.
[00:43:44] Oh right, this should be a string.
[00:43:48] Thank you.
[00:43:50] In fact, we can initialize it to this.  And then you're saying that now that it's a string,
[00:43:57] Yeah, see?
[00:43:58] Pipescript developers are helpful.
[00:44:01] Yeah.
[00:44:03] All right. Okay, cool.
[00:44:05] Thank you.
[00:44:05] And if we did everything right,
[00:44:12] What did we not do right here?
[00:44:18] Oh. Ha.
[00:44:20] We do need value.
[00:44:23] Um...
[00:44:28] Silly me. I mean, I don't really need new value because I could also, depending on where I did the trim, whatever, I don't care.
[00:44:36] We can make it non-controlled, but whatever. Hi.
[00:44:40] Thank you.
[00:44:41] This is to do's. Okay.
[00:44:43] Sweet.
[00:44:46] Now, this is...
[00:44:49] Now this is...
[00:44:50] You know.
[00:44:52] I've refreshed the page, which kind of sucks.
[00:44:55] So...
[00:44:56] The reason I did that whole little setup here is because
[00:45:00] which took way too long, unfortunately, is that
[00:45:04] The very next thing you do
[00:45:07] Thank you.
[00:45:08] is...
[00:45:10] Probably...
[00:45:12] load data from a backend somewhere.  Right.  And,  and,
[00:45:17] I'm like, we're still doing a client rendered app. So I'm gonna make a new folder here. I'm gonna call it
[00:45:22] routes, okay? And routes is a bit magical, I'm not gonna lie. We'll talk more about that in a minute. But
[00:45:30] Um,
[00:45:31] I'm just gonna, in the routes folder, I'm gonna make,
[00:45:35] A to-do's...
[00:45:38] .ts file.
[00:45:40] Okay.
[00:45:42] And in here, I'm going to export const
[00:45:47] Get.
[00:45:50] And
[00:45:51] Thank you.
[00:45:53] I'm going to also maybe make a folder here for my server content.
[00:45:58] Like, why not?
[00:46:00] And
[00:46:02] I'm going to, what should we call this file?
[00:46:05] It's going to call it todos.todos.todos.
[00:46:08] I don't know, whatever, to do is dot to get. Yes. And we're going to move
[00:46:13] our lovely to do stuff.
[00:46:16] out of here into our server.
[00:46:20] And
[00:46:21] I'm going to be the sort of lazy way. I'm just going to put a types.
[00:46:26] dot ts at the root here.
[00:46:29] just so that I don't have to worry about TypeScript.  I can just like, there's probably like a better way to structure this,  but we're just going to
[00:46:36] do this,
[00:46:38] So that our types file would go export.
[00:46:43] type to do.
[00:46:45] And then.
[00:46:46] In here, we can go...
[00:46:49] import
[00:46:51] To do.
[00:46:54] Like, I like being specific.
[00:46:57] Thank you.
[00:46:58] From...
[00:47:00] Googly.
[00:47:03] Type.
[00:47:04] That's the root folder shortcut.  We alias it.  OK, and then from our to-dos here,
[00:47:10] We're going to actually have to do some work.
[00:47:13] We're going to import
[00:47:17] Thank you.
[00:47:19] We import a couple methods here.  We're going to import
[00:47:24] Get to do's.
[00:47:28] and add to do.
[00:47:30] from
[00:47:34] Bully server
[00:47:36] to do's.
[00:47:37] All right, sounds good.
[00:47:39] That's going to crash right now probably because it
[00:47:42] It's having some issues. I knew it would the second I saved it because this is all wrong, but we'll get there in a minute.
[00:47:50] And then...
[00:47:53] In our todos.ts here in the server,  we're going to export get todos.
[00:48:02] Sorry, function get to do's.
[00:48:06] And it's going to be
[00:48:08] Um...
[00:48:11] Make it a little bit more realistic. I'm making it async. It doesn't really... I'm just so I don't forget later.
[00:48:17] But now we're just going to return to dos.
[00:48:21] And then
[00:48:23] export async.
[00:48:26] function
[00:48:29] Add to do...
[00:48:31] We take a todo of type todo, which we will import.
[00:48:36] And then...
[00:48:39] Thank you.
[00:48:42] You actually have to think of how I want to handle this on here because
[00:48:47] we were just pushing to it, but realistically,
[00:48:51] I think we're going to actually...
[00:48:54] clone here.
[00:48:56] Um...
[00:48:59] Okay.
[00:49:02] Interesting, actually,
[00:49:04] This isn't right. We actually should make it the title...
[00:49:08] because
[00:49:09] the counter is managed by the database, right? Who gives you the ID? The database gives you the ID.
[00:49:16] So,
[00:49:17] Um,
[00:49:19] And to be fair, we could spend the time converting this to like unstorage because this will get like a little bit broken, but I'm hoping I won't need to spend the time to do that. Unstorage is a great alternative where you can just basically set up the database however you want. And then
[00:49:34] Title and then completed balls. All right. So look, we didn't even need the types. Yay. Now,
[00:49:42] If we are in here,
[00:49:46] and we have a get.
[00:49:48] we can just return
[00:49:52] Um...
[00:49:53] Get...
[00:49:54] to-dos, I think.
[00:49:56] I think I can just return it.
[00:49:59] um
[00:50:01] Git has a type of any.
[00:50:03] Uh, right.  Uh...
[00:50:07] What was the...
[00:50:09] This is like when I have to, I should like refer to my cheat.
[00:50:13] notes.
[00:50:16] But...
[00:50:18] Should I return to my cheat notes?
[00:50:24] It's because I'm being dumb.
[00:50:27] It's because...
[00:50:28] It's...
[00:50:30] It's because of this.
[00:50:31] I'm so sorry.
[00:50:33] Ha ha ha ha.
[00:50:35] And interesting, actually, add to do doesn't belong here, does it? You guys know rest, right? So get to do's
[00:50:41] Oh, no, actually, no, it does. It's a post, right?
[00:50:44] Yeah, so this is beautiful.  We can go const post equals...
[00:50:49] here.
[00:50:51] And
[00:50:53] What are we sending?
[00:50:56] Thank you.
[00:51:01] We're sending the title in the post body.
[00:51:04] I actually...
[00:51:06] I actually am interested. I haven't used the API routes
[00:51:09] to do a post yet because of the next feature that I'm going to show in a minute.  So we're going to we're going to actually
[00:51:15] Figure out what we're gonna do here because what we get here is an event and
[00:51:19] which is a type API event from Solid Start.
[00:51:21] You shouldn't need that type texter. Yeah, there we go.
[00:51:25] Um,
[00:51:26] So we're gonna get there in a second.  Let's first see if we can actually show the to-dos properly,  because we're gonna go in here,
[00:51:33] And what I'm going to do, what's the create resource
[00:51:38] Thank you.
[00:51:39] to-dos, and we're going to
[00:51:43] um,
[00:51:45] We're going to...
[00:51:48] I think we're just going to call...
[00:51:51] Um...
[00:51:53] Fetch.
[00:51:56] Thank you.
[00:51:57] Where did I put it?  API slash
[00:52:02] to-dos
[00:52:05] Thank you.
[00:52:06] Um...
[00:52:07] All right, let's do a little bit more here.
[00:52:11] It's fun. I've never done this before.
[00:52:14] It's like,
[00:52:15] I haven't used this feature in Solid Start yet.
[00:52:18] Because...
[00:52:19] You almost never do this, but we're being nostalgic. I'll explain in a minute
[00:52:24] why we almost never do this.
[00:52:27] Thank you.
[00:52:28] But I think you got to feel the process here.
[00:52:34] to understand
[00:52:37] what I'm getting at because
[00:52:42] Alright, I have to wait it to...
[00:52:51] I'm just trying to like force it in a way.
[00:52:54] Not going to let me do that.
[00:52:58] Oh, right. It's not. Okay.
[00:53:03] Res is used before it's assigned.  Is this because I'm missing like a--
[00:53:07] Semicolon.
[00:53:09] Huh?
[00:53:09] Uh...
[00:53:11] Okay.
[00:53:13] Do I get to do this?
[00:53:15] Does this make everyone happy?
[00:53:17] Create resource, quick fix.
[00:53:20] Okay, sweet.
[00:53:21] Now what's wrong?
[00:53:24] All right.  Yeah.
[00:53:26] Thank you.
[00:53:29] High script's great.
[00:53:32] Now, this whole submission logic is all wrong.  We'll get to that again in a minute.
[00:53:38] What's wrong here?
[00:53:41] Oh, I have to actually return something, don't I?
[00:53:46] Thank you.
[00:53:47] Thank you.
[00:53:48] Alright.  You guys still hear?  Sorry.  Alright.  I killed the server while I was...
[00:53:58] While I was doing this.
[00:54:00] Good to know that.
[00:54:01] that we can still do that.
[00:54:03] Okay, our to-do's show up. Success.
[00:54:07] Okay.
[00:54:08] Thank you.
[00:54:09] Thank you.
[00:54:10] Thank you.
[00:54:11] *licks*
[00:54:13] Thank you.
[00:54:14] Yeah, thank you. Thank you, chat.
[00:54:17] Thank you.
[00:54:18] I
[00:54:21] yeah it's it's
[00:54:24] I've built these demos.  I should be a master of these demos.  I just...
[00:54:28] I usually have so much of a starting point that I just copy and paste over and over again.
[00:54:32] that I don't, and actually I don't build in TypeScript 90% of the time.
[00:54:36] I think
[00:54:37] Like, I just...
[00:54:39] It's just not usually where I'm at. Okay, so
[00:54:44] That's great.  Now we need to...
[00:54:47] do a
[00:54:50] post
[00:54:52] Right.
[00:54:53] I'm like,
[00:54:57] Now, you know what? I don't feel like doing a post.
[00:55:04] I'm just going to throw this out here. Do you know why I don't feel like doing a post? And the reason I haven't done a post? Like, I can do a post, we'll make another fetch request, and then we'll put a post, a method post, and put a body, JSON stringify the JSON to send the body, and then we'll parse it on the other side.
[00:55:20] And I think Nitro handles that  automatically for us in the water too.
[00:55:24] But
[00:55:28] Eh, this seems like a lot of work.
[00:55:30] Right? So,
[00:55:33] Let's change this up for a bit, 'cause yeah,  this route API thing is lovely.
[00:55:39] And to be fair,
[00:55:42] You could go use that. I actually have a demo here.
[00:55:46] where I do use API routes. And I'm
[00:55:49] I can show you very quickly what that demo is because...
[00:55:52] It uses a library everyone loves.
[00:55:55] Um, trpc.
[00:55:56] Inside the SolidStart repo,
[00:55:58] You will see this example where
[00:56:01] If I go into routes API, trpc,
[00:56:04] I just create an event API handler like we just did.
[00:56:08] Fetch request, a trpc endpoint.
[00:56:11] assign it to both the git and post methods,
[00:56:13] And
[00:56:14] Tadaa!
[00:56:15] TRPC.
[00:56:17] Right. So.
[00:56:22] You know, there is a use for API endpoints.  It's for using trpc or expanding an external API.  But I found...
[00:56:31] this all, I find this like a bit tiring to kind of type out, you know, you saw what I just had to do. So let's, let's not do that. Let's do something different.
[00:56:41] Let's...
[00:56:42] Um.
[00:56:43] Let's go back to the drawing board again.  Um...
[00:56:48] and instead
[00:56:49] you know,
[00:56:51] Let's pull this out for a second. Let's call it, what are we going to call it? Get to dos.
[00:57:00] Thank you.
[00:57:01] Thank you.
[00:57:02] const get to do's.
[00:57:06] Okay.
[00:57:06] Right? A little bit cleaner, I can see what I'm doing now.
[00:57:09] Yeah.
[00:57:14] I kind of...
[00:57:15] I, yeah, I mean, this is all fine.
[00:57:18] But...
[00:57:19] Oh.
[00:57:21] Let's see. Actually, do I already have a get to do this function? Oh, yeah, it's right here.
[00:57:27] Yeah, yeah, yeah, exactly. That actually makes my life a lot easier, right? Because then it, let's forget about this. What if we could just import
[00:57:35] Get to do's.
[00:57:39] from
[00:57:41] are
[00:57:42] our server folder, right? Like what if we were just like,
[00:57:46] Server.
[00:57:47] to do's like
[00:57:49] Okay, what if we could just do that?  And then maybe in here, we could just be like,
[00:57:55] Guys, keep this on the server.
[00:57:57] Right.
[00:57:58] And
[00:58:01] Hopefully...
[00:58:03] our app would keep on working.
[00:58:08] Yeah, see, we just fetched it from the server.
[00:58:12] There we go. When we page loads, we fetch the service.  Because you remember, this is a client-side rendered app. This is CSR.
[00:58:17] Right.
[00:58:21] Right? Like,
[00:58:22] there's no SSR going on right now.  This is just...
[00:58:27] client rendered app, but I honestly don't want to set up an API endpoint.
[00:58:33] You know, like...
[00:58:35] You saw all the stuff I was doing trying to wire it up.
[00:58:38] I feel bad for you guys, but I had to show you the work. Sorry, TRPC.
[00:58:43] I, I,
[00:58:44] I love you, but...
[00:58:47] Um,
[00:58:48] Do you know what's really cool about this?
[00:58:50] Because I'm going to
[00:58:52] go into
[00:58:54] You know, let's just delete the whole freaking API routes folder.  Like, we're done with that.  You're done, API routes.
[00:59:01] What did I delete?
[00:59:03] Shit, that didn't delete.
[00:59:05] I feel like I probably deleted something else. Let's undo
[00:59:13] Would you like to undo create server? No.
[00:59:17] Okay.
[00:59:20] What?
[00:59:22] What's going on? Okay.
[00:59:24] Okay, yes, API routes are gone.
[00:59:26] Okay.
[00:59:28] Okay.
[00:59:29] Thank you.
[00:59:30] Okay.
[00:59:34] What is useServer? Well, useServer is a mechanism so that when we call a function on the server,
[00:59:42] it just calls the function. But then when we call the function,
[00:59:45] on
[00:59:47] The client, it does an HTTP request and it just looks
[00:59:50] at these exports.
[00:59:53] to decide
[00:59:55] Um,
[00:59:56] you know, make these calls. Now,
[00:59:58] I could get fancy and
[01:00:00] I could put uServer inside
[01:00:02] a function scope and then like put that in the to do app.  We might do that a bit later.
[01:00:07] But...
[01:00:09] Um...
[01:00:10] I, I...
[01:00:12] Yeah, I just wanted to...
[01:00:14] Yeah, let's see if I can...
[01:00:19] Because what do we actually want to do here, right?
[01:00:23] We want to take...
[01:00:26] We want to take our to-dos...
[01:00:28] And then we, what's this, refetch?  Yeah.  And then what we want to do is when we submit...
[01:00:33] We want to go add.
[01:00:35] to do
[01:00:37] with
[01:00:39] new to-do
[01:00:44] Right? We want to send it and then
[01:00:48] Not new to...  Yeah, and then we want to go then...
[01:00:52] Um,
[01:00:54] Then after we succeed, hopefully, we're going to refetch
[01:00:58] our data okay
[01:00:59] Now, why is this complaining at me? What if we don't have ad to do?
[01:01:02] OK, let's add add to do here.
[01:01:04] Right?
[01:01:06] And guess what? Add to do.
[01:01:08] It takes a string and returns a promise of this title and completed.  Oh, that's interesting.  So TypeScript just works out of the box.
[01:01:15] Right.
[01:01:16] Um,
[01:01:17] It makes sense. You imported it.
[01:01:20] So this is why I had to say goodbye to tRPC for a moment.
[01:01:24] um, TRPC does amazing stuff, middleware, interception, and all this stuff. Because you gotta recognize
[01:01:30] something right off the bat. I'm going to tell you right now,
[01:01:33] These are endpoints.
[01:01:36] If there is auth security or whatever, you need to take care of it.
[01:01:42] Luckily for you,
[01:01:45] All of these travel through Solid Starts middleware.
[01:01:48] So you can intercept it and put off things on it.  But still, generally speaking, inside the endpoint, you got to check, right?  You got to be like, is this user logged in?  You know, the same way you would do any endpoint.  So it doesn't remove
[01:02:01] All the work.  But, like...
[01:02:04] You know
[01:02:06] it removes this in the, so like technically speaking,  what I was just about to do was a lot more complicated.  Now I think this just works because TypeScript works.  We don't worry about parsing and then we'll just refetch.  Right?  So hopefully let's refresh for good luck, but I go, hi.
[01:02:22] and I add it.
[01:02:24] Okay, what didn't work?
[01:02:27] Thank you.
[01:02:27] Let's try doing it again.
[01:02:29] Okay, I have an idea what's wrong.  I don't like, unfortunately, I don't like what's wrong here.
[01:02:35] The...
[01:02:36] Um...
[01:02:38] Okay, so we have ID Hello completed. Okay.
[01:02:42] And then when I put this
[01:02:46] What do we get?
[01:02:47] A post
[01:02:57] Huh, that's very interesting.
[01:02:59] Thank you.
[01:03:03] Oh, do you know what the problem is? This is so dumb. I'm being dumb.  Did you guys see what the problem is?
[01:03:08] I'm returning the new array instead of assigning the new array.
[01:03:11] Like we don't need to return anything for a mutation, right?
[01:03:13] We just need to do this, right?
[01:03:16] So what it was doing was returning all the data
[01:03:21] But we just need to do this. We need to set the new data. We don't need to return anything for  the mutation. We do it via revalidation. So now when I go
[01:03:29] Hey.
[01:03:31] It works.
[01:03:33] Thank you.
[01:03:35] Thank you.
[01:03:36] Thank you.
[01:03:37] Thank you.
[01:03:38] Thank you.
[01:03:40] Next got it right.
[01:03:43] It's hard to fight React in terms of the convention.  I realized this when I was talking to Jared from Bunn.  He came to me about...
[01:03:53] a year ago and he's like, look, Ryan, I got server components working and server functions working, you know, in an agnostic way that's not tied to React. But he used use server and I'm like, we use server dollar sign. And he's like,
[01:04:04] Yeah, but basically...
[01:04:07] I didn't want to go to every bundler
[01:04:10] and figure it out. In fact, Vinci project is based off of Bun app, which is a Bun concept that I don't think Jared actually ended up releasing, but
[01:04:19] Nikhil took the idea, put it on top of VEAT, and ran with it. So...
[01:04:24] Yes, in a sense...
[01:04:26] their syntax one. We may have been the first to do server functions. We proceed quick. We proceeded Next.js.
[01:04:34] you know, by several months.
[01:04:37] But.
[01:04:38] I honestly like...
[01:04:40] with other things, React kind of ends up
[01:04:43] being like the little details on the API have a
[01:04:47] big impact on how the rest of the ecosystem moves.  I mean, to be fair, solid signals way pre-exist hooks by years and years and years and years.
[01:04:57] But that...
[01:04:59] change to the tuple was inspired by React, like the array.
[01:05:03] So,
[01:05:04] You know,
[01:05:06] I think it's fair to say that...
[01:05:11] Sometimes because they make
[01:05:13] good, you know,
[01:05:15] micro decisions on the APIs sometimes because the whole ecosystem, you know, is a customer familiar with stuff means React has a lot more power in these decisions than maybe they should.
[01:05:26] But ultimately,
[01:05:27] I'm fine if it gets us in a good place.
[01:05:32] Thank you.
[01:05:34] Thank you.
[01:05:37] Thank you.
[01:05:38] There are trade-offs, don't get me wrong.  Server $ is better for configuration, like sending options in. It's better for TypeScript.
[01:05:45] It's better for like, there's actually a lot of reasons server dollar signs better than you server, but I was not going to fight the battle there. It just wasn't one, you know, I was talking about making things practical. The reason Vinci works like this is because Nikhil has react problems.
[01:06:01] You know, he was building his sites on RCs and Next, and Next was way too slow for the build process.  So he's like, I'm going to build my own Next.
[01:06:08] So that wasn't slow.
[01:06:09] I know Next, I think 14 or recently, at least, made it faster again.  But he had a whole year where he's like, I want to use the latest tech, and Next is way too slow.
[01:06:17] So he built it and he built the server function functionality in an agnostic  way.  So I was like,  okay,  let's use it.  I mean,  to be fair,  I could have converted it into a dollar sign,  but why are we doing this extra work when,  when,
[01:06:28] the stuff's already out there. Same way JSX.
[01:06:32] Anyways.
[01:06:36] Thank you.
[01:06:43] Thank you.
[01:06:46] Does server-deliver allow to have a different client code in the same file? Yes, and so does use server, to be fair. I mean, I didn't do that here, because, like, this was just so easy, right? I just put this here, but, like,
[01:06:56] *laughs*
[01:06:57] I can do this too.
[01:07:00] Thank you.
[01:07:01] And now...
[01:07:03] Thank you.
[01:07:06] I think...
[01:07:07] If I go like this,
[01:07:08] I got to see this.
[01:07:09] High on client.
[01:07:14] It's on the server. Interesting. So maybe our tree shaking is incorrect. No. Okay. Yeah.
[01:07:20] Sweet.
[01:07:22] See you.
[01:07:25] Thank you.
[01:07:28] Thank you.
[01:07:30] because it gets important in both places because it has to run the function.
[01:07:33] But
[01:07:33] If I
[01:07:36] move this up here.
[01:07:39] IonClient should not run in the browser.
[01:07:42] Hopefully it doesn't. See, it's only on the server.
[01:07:48] Right.
[01:07:52] So, yes, we didn't go all the way to what React's doing.  Our server functions are like our existing server functions where they can work in the same file for your CSR.
[01:08:06] By the way, yeah, we haven't talked about React server components or solid server components or anything.  I'm still just building client-side apps that...
[01:08:14] with an API endpoint at this point. We're not there yet. I just wanted
[01:08:19] to show you. We haven't SSR'd a single thing today.
[01:08:23] This is just, this is still create React app.
[01:08:26] Sort of.
[01:08:32] Thank you.
[01:08:38] Okay, I'm just trying to catch up on chat, you guys go.
[01:08:40] Go way too far from me.
[01:08:45] Yeah.
[01:08:47] All right.
[01:08:50] Thank you.
[01:08:53] So basically the whole point of this little piece here is
[01:08:58] Same old server functions, the same thing you guys have been using for over a year.
[01:09:02] Next came out after...
[01:09:04] But...
[01:09:05] you know,
[01:09:06] Thank you.
[01:09:07] They're obviously more popular, so we
[01:09:10] changed our syntax to match theirs.
[01:09:12] But...
[01:09:14] Generally speaking, same thing we've been doing all along.
[01:09:16] Okay.
[01:09:19] Okay, cool. So yeah, this high on the client does not run now. So well, now we have routing.
[01:09:27] Now we have simple to-dos.  We have...
[01:09:29] API endpoints, we can do them the traditional way or use server functions.
[01:09:35] what are what do we need next right well
[01:09:39] One thing you might have noticed so far
[01:09:43] And you probably haven't because we didn't spend any time on the network tab.
[01:09:46] is that
[01:09:48] If we look at our JS,
[01:09:51] Oh, you can't see it because of freaking dev mode.  Okay, let's build our app. We haven't built our app for a while.
[01:09:57] So let's go PMPM build.
[01:10:03] And then
[01:10:07] PM PM start.
[01:10:10] Okay.
[01:10:11] We're going to do the production app now.
[01:10:13] Okay, now you see this one client JS, and when I go to to-dos I go home,
[01:10:18] The same because
[01:10:19] Even
[01:10:20] Though we haven't
[01:10:22] And...
[01:10:22] Um,
[01:10:24] Well, this client JS is much bigger now. It's 16 kilobytes because it has the router, it has
[01:10:31] server function capability, it has resources, it has some stuff, right?
[01:10:37] Um,
[01:10:39] Thank you.
[01:10:40] You know what I actually didn't do?
[01:10:42] Although it probably should have been, we missed one thing on our, in our async example here.  It's not going to matter because our to-dos load really, really freaking fast.  But we probably in our app around our routes here,
[01:10:54] Probably a good idea just to throw a suspense boundary in here.
[01:10:58] I mean, it doesn't really matter because we're not server rendering, nothing's waiting, but
[01:11:03] You know, when we first load the page,
[01:11:06] the to-dos aren't there yet, right?  So let's...
[01:11:11] Let's go...
[01:11:13] What should our fallback be? Fallback...
[01:11:16] equals
[01:11:19] Whatever loading.
[01:11:21] Okay, whatever. We'll probably never see it though.
[01:11:25] because of how freaking fast it is.  Oh, right, I'm in build mode.  But the reason I wanna show this is,
[01:11:31] Usually you don't load your whole app, no matter what page you go to. You need to add code splitting to your routes. So let's go back to our app. Our app's pretty easy. We have this.
[01:11:41] If we want to code split these, well, you know, this also is...
[01:11:44] not too hard.
[01:11:46] We can go const home...
[01:11:51] equals lazy
[01:11:55] And then we can go
[01:11:58] import
[01:12:01] This
[01:12:06] quick fix, and then we can do the exact same thing for
[01:12:12] Thank you.
[01:12:13] to-dos.
[01:12:16] To-doos.
[01:12:21] And now
[01:12:24] when I build this.
[01:12:31] Thank you.
[01:12:32] And start it.
[01:12:36] I'm hoping, I see the main entry  and then I see a little one for home.  And see, it's only 13.4 kilobytes over that,  which is still locked to the router.  But then when I go here,
[01:12:46] Well, we have, you know, a little bit extra for the server function handling and the more
[01:12:51] heavy page, it's got like data loading resources and stuff. So you see that we,
[01:12:56] We only needed to load...
[01:12:58] The stuff.
[01:12:59] you know,
[01:13:00] on the routes that we visit.  So that that is how we get code splitting, obviously, with our router.
[01:13:08] But there's like a small little problem here because
[01:13:13] Let's see if we can see the problem.
[01:13:16] It might be hard to see the problem.
[01:13:18] But...
[01:13:20] When I...
[01:13:21] Go.
[01:13:23] here for the first time.
[01:13:26] Oh, it's hard to see the problem.
[01:13:29] Can I see this?
[01:13:31] Okay, let's see if I can see it by going fast.
[01:13:37] Like my dev tools just can't be big enough.
[01:13:40] Maybe I can...
[01:13:44] Tryna...
[01:13:44] But I want to show you guys here...
[01:13:47] is
[01:13:53] Thank you.
[01:13:54] Should I just like...
[01:13:57] record the choice record. Let's just record a timeline here. Let's just go record.
[01:14:05] and then go to to-dos.
[01:14:07] and stop.
[01:14:09] I'm sorry.
[01:14:10] Um...
[01:14:14] All right.
[01:14:14] I'm not seeing anything. Oh, here it is. Okay.
[01:14:19] It's like almost like I got my dev tools so blown up that I'm not actually
[01:14:24] seeing the
[01:14:26] the events,
[01:14:28] Bye.
[01:14:32] I'm trying to snoop in on one very specific interaction.  I'm not going to see it here.
[01:14:38] Um,
[01:14:39] there's a waterfall.
[01:14:41] Thank you.
[01:14:43] Um,
[01:14:44] Because if you look at our code,
[01:14:47] Thank you.
[01:14:49] We're sitting on home.  We navigate to to-dos.  The code for to-dos hasn't loaded yet.  So it has to go load the code for to-dos, get that back, then load to-dos.
[01:14:59] our to-do data.  So we do a cascade.  We wait for the JS, and then we do the data fetching.
[01:15:05] - The President and the President, the President,
[01:15:06] So...
[01:15:08] It would be nice if we could actually fetch the to-dos for the page before we fetch the code to parallelize it.  Now, our to-do fetch is pretty fast as our other resource, so I'm not...
[01:15:20] "Seeing it here,
[01:15:23] Like,
[01:15:25] Thank you.
[01:15:26] I would love to see the JS load in.
[01:15:29] It's probably...
[01:15:32] 'cause
[01:15:32] The caching, I'm not seeing it, but...
[01:15:36] Like when did the JS load in? Why am I not seeing the JS here?
[01:15:40] This timeline should have
[01:15:44] The network timeline should also have it too. We should see the
[01:15:52] If I go home
[01:15:59] Thank you.
[01:16:00] I mean, it's so freaking fast anyways in this example, but like these cascade, these two events cascade, but we want to hoist it.  So one way we can hoist it.
[01:16:11] is if we go back into our router, we can now go to our ToDoos and go,
[01:16:16] Let's add a data function, okay?
[01:16:19] Keep in mind, you guys, this is not the current version of SolidRouter. I'm using the old version of SolidRouter. I just want to show you what I'm doing here.
[01:16:25] But our data function, let's say it's to-do's data, we need...
[01:16:37] We need to get that.  And you don't want to part of the lazy loaded,  you want it part of the main route.  So we need to go get to do is data, right?  So we need to get that from,
[01:16:47] Where are we going to get that from?
[01:16:49] I mean,
[01:16:52] So generally speaking, classically, I do stuff like
[01:16:55] Pages.
[01:16:57] Maybe we can get it from...
[01:16:59] Yeah, let's let's try this pages slash to do's dot data or something that seems reasonable. And then
[01:17:08] Because for code splitting reasons, you don't, you can't be part of the to-do's page.  It has to come in a separate bundle.  So we're going to go to dos.data.ts.  Okay.  And then.
[01:17:20] Right now, this is actually this function, but I'm just pretending like we had to do more here,  like maybe get parameters and stuff from the route. So we're just going to go here and go what,
[01:17:30] export.
[01:17:32] function
[01:17:34] to-dos...
[01:17:37] to-do's data.
[01:17:40] Thank you.
[01:17:41] And this is a router load function.
[01:17:44] Um,
[01:17:45] And then we're going to return. Actually, you know what? We're going to
[01:17:49] Move.
[01:17:50] this whole
[01:17:52] Create resource call.
[01:17:54] into it.
[01:17:58] Thank you.
[01:17:58] Thank you.
[01:17:59] Thank you.
[01:17:59] So we're just going to do this.
[01:18:03] And we're actually just going to return this.
[01:18:07] Quick fix.  So as you can see, this has some client side
[01:18:11] Code
[01:18:12] get to do's, we're going to
[01:18:15] get from there. We're going to quick fix this one as well. So we have our data function that is not  part of our components, it's not part of the same thing. And then here, we can do like,
[01:18:27] use route data
[01:18:30] And
[01:18:32] Yeah.
[01:18:35] Here it's okay if it references it.
[01:18:38] Let's move get to do's.
[01:18:40] To do.
[01:18:42] So what we're actually going to do here is import
[01:18:46] Um,
[01:18:47] What is it called?
[01:18:49] What did I call this?
[01:18:51] To use data, yeah.
[01:18:52] Import.
[01:18:54] Actually...
[01:18:55] to do's
[01:18:56] data.
[01:18:58] Thank you.
[01:19:00] from
[01:19:02] Use data.
[01:19:04] And then we're going to go.
[01:19:07] This is...
[01:19:09] Type.
[01:19:10] Was it return?
[01:19:12] Bye.
[01:19:14] type
[01:19:15] of
[01:19:17] of
[01:19:18] To do's.
[01:19:20] Data?
[01:19:22] Quick fix, we'll get that from the router.
[01:19:26] Yeah, are these to-dos? Oh, okay.
[01:19:30] Okay. So...
[01:19:34] Now...
[01:19:36] What will happen?
[01:19:37] is...
[01:19:39] When the router...
[01:19:41] Um...
[01:19:43] loads
[01:19:45] Let's see, did I get the app right here as well to use data?  Yeah, okay.  Let's see if this still loads properly.  What will happen is, and we'll go here first and we'll fetch...
[01:19:56] What'll happen is the server call,  you can actually see the green being the same spot,  the server call and the to-do's call,
[01:20:02] Um...
[01:20:03] So to get the JavaScript and to get the server call happen in parallel now at the same time.
[01:20:09] Thank you.
[01:20:11] So this is just something built into the router to enable...
[01:20:16] parallelized fetching.  And you might be like, why bother doing that in the router?  Well, it's important because if you have nested routes,  and you don't only show them conditionally and stuff like deeper in,
[01:20:27] you need the code to show the outlet. So like if you want to hoist all the fetching up, you have to at least define it above the route level. You can't just stick it in the page components because nested routing won't
[01:20:38] run
[01:20:39] Until...
[01:20:40] it goes to render the next section. So hoisting is very important. And this saves us now because we don't have the waterfall. We aren't waiting for the JavaScript to load to fetch the data for the next route.
[01:20:54] Um,
[01:20:55] So this is very, very, very common.  As I said, we're still in our CSR app, but honestly,
[01:21:04] I don't want to do this every freaking time.
[01:21:07] uh... you know
[01:21:09] I don't want to do this every time. Do you want to do this every time?
[01:21:13] Do you want to...
[01:21:14] code split it, create the function, create a separate file to figure out, you know, how to do it, to hoist it, to get the kind of performance you want. I don't want to do this.
[01:21:26] But all people love the fetching components, yeah. I know, and all people are wrong. It's simple.
[01:21:30] Waterfalls are unavoidable when fetching your components.
[01:21:38] There's...
[01:21:40] It's very hard to avoid them in all cases because layout concerns and data concerns are different.
[01:21:44] It's that simple.
[01:21:47] But this feels cumbersome, right?
[01:21:50] So,
[01:21:51] Let's not do this.
[01:21:53] Let's not do this.
[01:21:56] Let me show you a little secret. Can I show you a little secret?
[01:22:00] Thank you.
[01:22:00] I'm going to take these routes
[01:22:03] No, I'm gonna take these route definitions here, okay?
[01:22:08] And then I'm going to console.log them.  Okay.
[01:22:12] We'll just make a second copy of the routes.  It doesn't, I don't think it really matters  because they're never going to get instantiated.  So we're just going to,
[01:22:21] I don't know, we'll just make an array.
[01:22:23] And we'll put these two in here and put a column in between them, okay?
[01:22:27] I want to show you what routes look like in SolidRouter.  So hopefully now let's go back to dev mode  so we can see my updates.
[01:22:36] And
[01:22:38] When I refresh, you're going to see it doesn't really matter if it's server or client. We're going to see
[01:22:42] Thank you.
[01:22:43] children at undefined component props path this,
[01:22:47] Um...
[01:22:49] QuotaProps, data function, this, you know,
[01:22:53] Thank you.
[01:22:54] Oh, that's funny to say that.
[01:22:57] I
[01:22:57] It's because of solid refresh.
[01:23:00] I actually should
[01:23:03] I wonder if this actually makes a difference.
[01:23:07] Do something.
[01:23:13] Didn't actually make a difference in this thing. It's just curious.
[01:23:18] If this changes what's
[01:23:21] What's going on?
[01:23:24] Did I miss, did I forget saving in one spot?
[01:23:27] All right.
[01:23:28] There it is.
[01:23:34] Thank you.
[01:23:35] Oh, there we go, that's better. Okay. Yeah, so... the heuristic around what's a component
[01:23:41] is a little bit tricky with solid refresh. Anyways, my point is you can see that these are just config objects. This JSX just creates configuration objects. Okay.
[01:23:55] Thank you.
[01:23:56] So
[01:23:59] Thank you.
[01:24:00] *sigh* Yeah, you- you-
[01:24:05] Thank you.
[01:24:05] Yeah, I...
[01:24:07] This pattern that we're showing here
[01:24:10] Ironically, it pre-exists Remix and their loader pattern by over a year, but...
[01:24:17] Um,
[01:24:18] It was very influenced by the same thing.  Remix and Us...
[01:24:24] basically got our influence from Ember and Ember router.
[01:24:29] And...
[01:24:32] Bye.
[01:24:32] Essentially...
[01:24:36] I've been using this...  My first router had this kind of pattern way back in, I think, 2014.
[01:24:44] Um, so, but like we've been doing,
[01:24:48] We've been doing versions of this.  What happened with React Routers,  they had something like this up to React Router 3,  and then they got rid of it.
[01:24:55] And then they brought it back in React Router 6, ironically.
[01:24:58] Like, this is where we started like 10 years ago. But then everyone's like, Oh, let's just fetch in the components and not define our routes high up and just do stuff all over the place. But then we added code splitting and stuff got bad again. And that's kind of how we ended up back here again.
[01:25:14] But yes,
[01:25:17] Anyway, yeah, this is a lot of work.
[01:25:19] So what are we going to do? Well, one thing we can do
[01:25:24] is...
[01:25:25] Delete
[01:25:27] Everything we just did.
[01:25:31] Thank you.
[01:25:32] Can I delete all that? Yeah, I can. Yeah, let's just delete everything we just did. Yeah.
[01:25:36] So,
[01:25:37] What if instead of doing all of this,
[01:25:42] We, uh...
[01:25:48] We just went, let's get the routes from a file system.
[01:25:54] We did this.
[01:25:57] And then
[01:26:01] weird completions.  I mean, I could show you
[01:26:05] We'll take a look in a minute, but...
[01:26:08] We'll go file routes.
[01:26:10] Right.
[01:26:12] Let's console.log.
[01:26:14] this again, file routes,
[01:26:17] And we'll see what we're doing now.  What if I were out?  Well, I'm just going to rename this folder from...
[01:26:23] Pages to Routes
[01:26:25] And,
[01:26:27] I'm going to grab this data function here.
[01:26:30] Okay.
[01:26:32] Fortunately, I think I have to grab all this again.
[01:26:34] And we go back into our Todo app,
[01:26:36] And I'm just going to go export.
[01:26:38] const route.
[01:26:40] Which is...
[01:26:41] Just a route config.
[01:26:43] And then we're going to
[01:26:46] bring this back up here and we'll worry about
[01:26:48] reconciling this stuff in a minute. But we're going to basically, in our route configuration, we're going to
[01:26:57] Add a data function here.
[01:26:59] And
[01:27:02] Yeah, what am I missing? There was an extra.
[01:27:05] format.
[01:27:07] and
[01:27:08] Now we don't need this anymore, no todos.data. We'll just stick it in the same file.
[01:27:13] because we don't have to worry about code splitting with the file system router.
[01:27:16] Great.
[01:27:18] And
[01:27:20] type of what route?
[01:27:23] Data.
[01:27:25] And then, what is this? What's my...
[01:27:30] satisfies
[01:27:32] I think for this version,
[01:27:37] partial of route
[01:27:38] definition.
[01:27:40] is what we need.
[01:27:41] Because now we will know that...
[01:27:43] that our data function, like we will know what these parameters are.
[01:27:49] So,
[01:27:50] There we go. And
[01:27:56] I think...
[01:27:59] I mean, does this just work?
[01:28:04] Oh yeah, yeah. Here's our file routes now, console logging. You see there's a few more,  there's some more information on the route definition, but our file routes,
[01:28:13] component again is just a config
[01:28:16] objects. So honestly, as long as you know how to handle that config object,
[01:28:23] Um,
[01:28:24] you know, you're good to go.  So you could just call as a function, do a little wrapper,  you know, have your own router with your own conventions.  I don't really...
[01:28:31] It doesn't really matter.
[01:28:33] Obviously, these are key to solids conventions, which is like component equals
[01:28:38] path equals, but you can do that. But now we don't have to worry about lazy. Lazy happens automatically. We don't have to worry about code splitting happens automatically.
[01:28:46] Um...
[01:28:48] And we, you know...
[01:28:51] We get this, it's a little nicer, a little less imports. We can do that. And actually,
[01:28:56] Just to
[01:28:57] prove that this still actually works.  Let's just build it and run it for real.
[01:29:02] Right.
[01:29:04] And start.
[01:29:07] Run it.
[01:29:09] network,
[01:29:11] Interestingly enough, we're getting a little bit more JS here.
[01:29:15] But...
[01:29:15] Let's see here.
[01:29:17] Okay, so here we have this.
[01:29:19] Oh, right, because I didn't put GS only filter.  It looks like they chose to split the bundle a bit for some reason.  Um...
[01:29:28] Oh, interesting. Did I lose home? Oh, do you know why I lost home?
[01:29:33] because home doesn't follow the convention, because it should be index, right? Slash home  would work. So I did have to change one thing. And in solid, if you want to name your index file,  just put it like this, then you don't have to worry about
[01:29:48] about that.
[01:29:50] essentially.
[01:29:51] So
[01:29:51] Let's do this again.  Because I could just make this index, because that's what it is.  It's the index.
[01:29:57] we can also do that.
[01:30:00] Now...
[01:30:02] HomeWorks, we have the JavaScript for home.
[01:30:05] And then when we switch,
[01:30:08] we'll get the new JavaScript for the to-dos.
[01:30:12] Okay.
[01:30:16] That's essentially it. Code splitting still works. Parallelized fetching still works.
[01:30:25] And
[01:30:26] Instead of doing all that work we did for the last 20 minutes,  you literally just put in a file with the right name,
[01:30:33] Um...
[01:30:34] And
[01:30:36] We're there, okay?
[01:30:40] Bye.
[01:30:43] Thank you.
[01:30:44] Yes, yes, very much inspired by Refused.
[01:30:52] Thank you.
[01:30:55] Yes, yeah. I mean, it's funny because Sapper had isomorphic data fetching and they had it earlier, except then they went to like adding server prefixes for server specific stuff. We don't...
[01:31:08] We don't have.
[01:31:10] that, right? You can just stick the server stuff wherever with use server.
[01:31:14] Um,
[01:31:15] But
[01:31:16] Because the data loader runs on both sides, but the biggest difference
[01:31:20] I guess, technically speaking, is this is like SvelteKit in that I think SvelteKit has a CSR mode.  We haven't done any SSR yet, guys.  I'm sorry.  I know you guys are probably expecting SSR.  We're an hour and a half into the stream, and we have not done any SSR yet.
[01:31:32] Um,
[01:31:35] How does the data function get code split? Well, I wonder if we can see in dev mode how that works.
[01:31:41] Let's look.
[01:31:43] Because it's because of the router...
[01:31:46] Um,
[01:31:47] Yeah.
[01:31:48] It's because of the way that Vinci has configurable file system routing system. The routes we actually got back that is console logging actually tell the whole story. But let's see if we can actually look at the transformed source code here. Because if I'm right,
[01:32:04] to-dos
[01:32:06] will have
[01:32:07] the page component, there it is.
[01:32:10] And then...
[01:32:12] there will also, and you see that there's no route data here.
[01:32:17] But then...
[01:32:20] If I go into client, oh yeah, I guess it's getting bundled together.  We're probably not going to see it because what are we looking for?
[01:32:28] Is it client or web?
[01:32:30] Do do do do.
[01:32:31] Okay, maybe this is less obvious to sing,  but Vinci lets me configure...
[01:32:36] exports from the file and then they get created into virtual modules.
[01:32:41] automatically.
[01:32:44] Yeah, but the important thing to understand is that the function is isomorphic, right? So that essentially this runs on the client.
[01:32:55] and on the server if you're doing SSR.
[01:32:57] Um,
[01:32:58] *chop*
[01:33:00] In fact,
[01:33:02] Honestly, at this point in the progression...
[01:33:06] This is when SSR...
[01:33:09] actually kind of started because we, why did we code split?
[01:33:14] And go through all that hassle.  I've been trying to show you...
[01:33:17] the progression so far because we started with a simple app
[01:33:21] create React app, then we added a router  'cause we need pages.  And then we added data fetching because, you know,  when you go to different pages,  you can't just serve the same data every time,  you want the update.
[01:33:31] And then
[01:33:33] We code split. But why did we code split? Well, it's because our app was getting too big. We were loading all the JavaScript at once. And we're like, oh, this slows down our page.
[01:33:43] we had to do all this wiring because the performance got worse because now we  had all these waterfalls and then we're like,
[01:33:50] doing this wiring sucks, let's use a file system router, right?  But even with the file system router and the server functions, the prevent the waterfalls, everything compared properly for you,  the initial page load might still be slow because you're waiting for the, you request, you hit the server, get the HTML file back,
[01:34:09] It has a script tag on it, which goes and gets...
[01:34:11] the JavaScript, get that back.  Now you render the page.
[01:34:14] go to the server, get the data,
[01:34:16] You see that? We went to the server three times in our client-side rendered app.
[01:34:20] in cascading waterfalls.
[01:34:23] What if we could, and until that last one comes in, we're not going to see the content of the page.
[01:34:29] What if we could render the page initially on the server, so on that initial HTML we already can see the page?
[01:34:35] And
[01:34:36] then, you know,
[01:34:38] let stuff load in as it's ready, which is pretty fast,  but we wanna do that.  Well, the answer to that is really quick, easy.
[01:34:46] Okay, now we're done. Now we're server rendered.
[01:34:49] So our Create React app,
[01:34:51] now
[01:34:52] a
[01:34:54] Oh, well, maybe I got ahead of myself.
[01:35:00] Hahaha. First bug on the stream. We knew we were going to hit some.
[01:35:04] Um,
[01:35:08] *sniff*
[01:35:09] Aha. Yes, I know what this is. This is something that I haven't backported into the...
[01:35:15] into
[01:35:16] the...
[01:35:19] the new, the new, the old router. I just added this yesterday. Give me two seconds. We'll, we'll,  we'll just bypass the module preloading on the old router. Two seconds to do. Sol JS start.
[01:35:33] Server, start server,
[01:35:36] Thank you.
[01:35:37] *Doo doo doo doo*
[01:35:41] We don't need any of this.
[01:35:45] Comment out.
[01:35:46] Beautiful. Sorry. I was like literally merging PRs this morning.
[01:35:50] Okay, back to my effect.
[01:35:53] You just click Server Render True.
[01:35:57] And now...
[01:35:58] When we look at our network and we look at
[01:36:02] at our response here. Let's get
[01:36:05] Let's do one with a little bit more content on it. And we look at what's in our response now, you know, besides the Nux scripts for the dev mode, what you're going to see now is we actually have a new
[01:36:18] server render content. Our div app is not empty. We are server rendering, we are hydrating,
[01:36:24] it's
[01:36:25] Everything works.
[01:36:28] and all I had to do was flip a switch.
[01:36:35] So, we went from...
[01:36:40] our CRA app,
[01:36:43] to basically... This right here is kind of like Solid Start is today. It's SvelteKit. It's Next12.
[01:36:53] I mean, plus server functions. It's like if next12 had server functions.
[01:36:58] Like...
[01:36:59] This is kind of where web app development has been for years.
[01:37:05] But the jump from...
[01:37:08] CRA to that
[01:37:12] can happen
[01:37:15] by just hitting a switch.
[01:37:18] -
[01:37:20] Why is that? Well, lots of reasons.
[01:37:23] And if you don't believe me, I mean, the first benefit you can see right away.  Want to see the first benefit right away?
[01:37:30] Let's look...
[01:37:31] at the network network,
[01:37:32] Fetch calls when I refresh the page.
[01:37:36] there are no
[01:37:39] Server calls.
[01:37:41] We, you know how we, when we load the page, we have to get the to-dos? How is this hydrating?
[01:37:48] And we don't have to fetch the to-dos.
[01:37:50] Oh, I know what's going on here.
[01:37:53] This is why I use a file switch in store. Sometimes when you have a dev server
[01:37:58] Um...
[01:37:59] you get different versions of memory between the HMR.  You should use a real database.  You'll never have this problem,  but if the persistence is in the JavaScript code,  weird stuff can happen.
[01:38:10] I'm
[01:38:11] Bye.
[01:38:12] We won't worry about that too much for the second year.
[01:38:17] What I'm getting...
[01:38:18] What I'm getting at here is the reason you didn't see that initial server call is because
[01:38:24] Solid fetches it on the server.
[01:38:26] It serializes...
[01:38:28] the data
[01:38:30] into the JSON on the page. You're like, "Okay, that's great. Next does that too."
[01:38:34] But
[01:38:35] You know, everybody does that.  But the key part you have to understand here  is that because you use resources in Solid,
[01:38:43] Um,
[01:38:44] You know, like that, that
[01:38:46] create resource call that we were doing. Where is it in here?
[01:38:53] Solid automatically knows how to serialize.
[01:38:56] And luckily for everyone, because we have data fetching with suspense and everything built into the framework,
[01:39:00] If we go and we change
[01:39:05] what this create resource call is, like for say, tan stack query or something, it will also, it uses create resource under the hood. So it also automatically handles data serialization and streaming and all the features, just all these features just work because they're built on top of this primitive. So
[01:39:20] Turning on SSR,
[01:39:23] is trivial because you don't have to change how anything works. You already wrote it the right way to enable us to do it because we know, okay, we don't have to refetch it in the client. We can just take the serialized data on the server. We can run to the server. So you already get your optimized data fetching with basically every library out in the solid ecosystem.
[01:39:45] Um,
[01:39:47] So,
[01:39:49] And I'll show you what I mean by that in the next section here. But you can see that
[01:39:55] We didn't have to change how our app worked at all to change it to SSR.
[01:40:00] because
[01:40:01] Just server rendering initially and handling that handoff of data serialization is built in to create resource.
[01:40:08] Thank you.
[01:40:09] But,
[01:40:10] Okay.
[01:40:12] That's pretty good.
[01:40:16] Let's talk about...
[01:40:20] Thank you.
[01:40:20] Thank you.
[01:40:22] Let's talk about... Yeah, actually, you know, toggling this feature is cool.
[01:40:29] Vex cannot do this. I mean, this is why I'm talking about this because I think I
[01:40:34] we figured out the right boundaries. I think that we
[01:40:37] we are building towards
[01:40:40] the shape of frameworks to come. That's where the title of the stream came from.
[01:40:45] Of course there's more, there's always more.
[01:40:47] Okay, let's keep on going.
[01:40:49] I want to show this in practice to you all because
[01:40:52] The truth of the matter is I was really happy with this data routing pattern for like 10 years, but
[01:40:57] It changed.
[01:40:58] Data patterns change.
[01:41:00] You know, this
[01:41:02] is a stink. I got to thank Theo Brown on this side, you know, T3 Theo. He gave us a half point  on our TypeScript because our actions are really good because we could do this.
[01:41:13] You know, but he's like, what is this freaking garbage?
[01:41:16] return type of type of route data. This sucks.
[01:41:21] And the reason we have to do it is because...
[01:41:24] we want to parallelize our data fetching and then you got to hoist it up.  And, you know, I went on a stream and I was really happy.  I was like, oh, create server dollar sign action, whatever.  And I'm like, this stuff is so cool. Everyone's going to love it.
[01:41:35] And he gave me real hard
[01:41:37] Feedback, you know, he's like, this is confusing.
[01:41:39] which functions the server function.
[01:41:42] which I think we've addressed now by removing all the special dollar signs.  There's just like the one used server.
[01:41:48] And he...
[01:41:49] he pointed out that TypeScript wasn't the best.  So I was like, okay, let's go back to the drawing board.  How do we enable the future of everything we want to do?  Well, it actually turned out we have to change the router.  So how do we change a router in Solid Start?
[01:42:01] Right?
[01:42:03] How do we change the router?
[01:42:05] Oh right, we just install a new one.
[01:42:08] Why not?
[01:42:09] Let's do this. PMPMI.
[01:42:12] Let's get a new router.  Because Solstart isn't tied to a router.  We don't actually--
[01:42:18] We don't actually...
[01:42:19] you know, care which router you use.  There's a couple interface points,  like the one that I just aired out on us.  Remember when we went in here and I was like,  "Oh crap, I know what I did wrong."
[01:42:29] You know, these things need to better...
[01:42:35] gracefully, you know,
[01:42:38] There's a couple points that need to be documented.
[01:42:41] The couple places like this is for adding the link preloads for the JavaScript in the header.
[01:42:48] Um,
[01:42:50] We're using a shared context thing, so if you
[01:42:53] go in here and you
[01:42:55] right to that shared context
[01:42:57] as part of your router, then you will be able to get preload.  So there's like a couple things like that.
[01:43:02] But for the most part,
[01:43:04] And this should just not, like, basically, if this doesn't exist, like, we should just have a check here that's like, does this exist? If not, like, this is just bad coding, like,
[01:43:13] It should be like
[01:43:16] Like, you know what I mean? Like null check it.
[01:43:21] But what I'm getting at is...
[01:43:25] Let's forget about internal solid start code.
[01:43:28] Now that I've got a new router,
[01:43:29] Let's just change how the routes work.  So first thing in the new router is
[01:43:35] The setup's a little different.
[01:43:36] There's no routes component.
[01:43:39] And in fact, if I let's let's do the old
[01:43:42] Restart.
[01:43:43] TypeScript server because this is like it's so funny. Was it or was it
[01:43:48] It's not restart, what is it? Reload, restart TS server, yeah.
[01:43:54] something I've never used so much until recently.  Well, um...
[01:43:59] You can see that there's no Robots component.
[01:44:02] So I'm going to, right now, we're just going to update our app to the new router.  And guess what? The new router doesn't need capital A's. So
[01:44:09] Yeah, different convention. Like, yes, I need to go in and I need to
[01:44:12] I mean, you can use the capital A, but that's not how it works.  There's no routes components.  So the way the new router works is...
[01:44:20] We're going to...
[01:44:23] Go...
[01:44:25] here.
[01:44:26] It's got a different API. It's kind of like a different router. We're going to stick the file routes.
[01:44:33] into here.
[01:44:34] And then...
[01:44:36] This goes away...
[01:44:37] And then there's a root component.
[01:44:40] we're going to use and it's going to have props
[01:44:44] And...
[01:44:46] I'm just going to
[01:44:49] What is it going to be? It's going to be...
[01:44:51] Give me a second to do the refactor here, but
[01:44:55] This stuff...
[01:44:57] can go
[01:44:58] inside the root
[01:45:03] There's reason for these design decisions.
[01:45:07] I want
[01:45:08] stress them too much. You can read all about them. I might even talk about them more.  But okay, here's our new, our new router has a different API.
[01:45:16] Our file routes still go through, but there's another difference in our new router, which we're seeing right here. Our new router doesn't have a data function. We changed the mechanism. It wants to use a different data function.
[01:45:27] fetching mechanism.
[01:45:30] And...
[01:45:32] The thing is,
[01:45:36] use route data doesn't exist anymore either. So we got a little bit more work to do to change this. But
[01:45:42] TypeScript told us, and in fact, our new writer has a load function that is very similar to the old one, but...
[01:45:48] We're going to use some of the new router patterns here.
[01:45:54] We're going to...
[01:45:57] Call get to do's here.
[01:46:00] and
[01:46:03] I'm going to get rid of this.
[01:46:04] We're going to...
[01:46:05] Go create.
[01:46:08] Thank you.
[01:46:09] Async.
[01:46:10] which is a new primitive from the router.
[01:46:14] Create async.
[01:46:18] It's basically a resource.
[01:46:21] And it's just going to return to dos.
[01:46:24] And what do we want to do? We want this ASIC function to
[01:46:28] I guess it's just...
[01:46:29] get to do's right
[01:46:32] Okay.
[01:46:33] And no refetch.
[01:46:36] Um,
[01:46:37] I'll talk about how we do mutations with the new router in a second.
[01:46:43] Um,
[01:46:45] um
[01:46:46] But yeah, okay.
[01:46:47] This should work.
[01:46:49] Um...
[01:46:51] Todos here, TypeScript works.
[01:46:54] That's good.
[01:46:56] create resource, we don't need any more. We'll worry about add to do in a minute. Okay. So,
[01:47:00] Let's see, did we convert to the new router?  Did that successfully work?
[01:47:07] Looks like it, okay.
[01:47:09] We just switched which router essentially was in SolidStart, and it still works.  It's basically...
[01:47:17] a different router.
[01:47:20] but because it can understand the file routes config object,
[01:47:24] Now we're in a different world.  And what's really powerful about this is because it's a hybrid of routing approach, you can like basically we say that this is your component.
[01:47:33] But then you can set whatever other fields your router supports
[01:47:37] in a config on your route, we can support whatever your router is, like TanStackRouter.
[01:47:43] I believe has a load function.  You can just...
[01:47:46] put it in here, and then if there's a solid version of Tanstack Router, go for it.
[01:47:53] Right. So
[01:47:54] We are not tied to the router. That's why I started with a 5KB solid demo, because I wanted to show you that solid start is not the router. There's a file system router in here, but you're not tied to...
[01:48:09] Mm-hmm.
[01:48:10] Tanner has written an amazing router. I think when there's a solid version, a lot of you guys are going to use it with Solid Start.
[01:48:16] You might not use the solid router.  Maybe we can merge our efforts and that would be even better.  But my point is...
[01:48:22] Because you're using solid start, it's not like...
[01:48:24] you need solid start router. It's not like Remix or Next or any SvelteKit in this way.
[01:48:33] Like,
[01:48:33] This is...
[01:48:35] On one end.
[01:48:36] Low level, just create React app.
[01:48:40] So let's let's keep on going.
[01:48:44] Well, there's a problem here.
[01:48:47] Thank you, Dave.
[01:48:51] It is doing something. In fact, it's doing too much.
[01:48:54] It's actually fetching twice.
[01:48:57] Uh-oh.
[01:49:01] What's going on here?
[01:49:04] It's fetching
[01:49:08] Yeah, so we got a problem here because the load function
[01:49:12] is call and get to do's.
[01:49:14] And create async call and get to do's.
[01:49:17] And
[01:49:19] Well, I mean, the first question is,
[01:49:21] What like?
[01:49:22] We've...
[01:49:24] Yeah, we've got some issues here. I'm actually kind of wondering why createAsync is calling getToDo's because
[01:49:30] by my best estimation,
[01:49:33] create async should not be calling get to do's.  Well,  well,  it's possible that,
[01:49:39] We'll see what's going on in a second.
[01:49:43] Thank you.
[01:49:48] you
[01:49:48] You're using useEffect. But my point is, yeah, I was expecting multiple fetches. Like, stuff is, this is not quite right. This is, so what do you do in this situation? Because we could get rid of the load function.
[01:50:01] Right?
[01:50:03] Thank you.
[01:50:04] And if we get rid of the load function,
[01:50:09] Why is this doing this?
[01:50:18] I
[01:50:21] Let me just sanity check that
[01:50:25] This isn't the problem.
[01:50:30] I want to see what's going on here.
[01:50:36] Interesting. Okay. I'm going to have to look at that. I'm actually not sure why we're even seeing any
[01:50:45] here, because
[01:50:47] Obviously when we change page we have it, but this should actually be getting caught up by the resource serialization.  It should not be fetching again on the client.
[01:50:58] We'll look at that in a minute. But what I want to point out here is
[01:51:03] You can always not
[01:51:06] Um.
[01:51:08] do the load function.  But the problem is, if you don't do the load function,
[01:51:12] you aren't going to have that hoisting.
[01:51:15] and link preloading, like hover preloading, isn't going to work.  The reason we switched to the new router
[01:51:20] let's say it's because we want hover link preloading.
[01:51:24] I didn't show it here for an example, but if I go back into
[01:51:31] this and I add this back.
[01:51:38] Thank you.
[01:51:39] and I hover now I'm on the let's go to the home page.
[01:51:43] And I go to Network.
[01:51:46] and I hover over to dos,
[01:51:48] it's prefetching the data for the next page for me, right?  So, you know,
[01:51:52] This is why we want the load function, but now we have, you know, a different API constraint. We want a cache. And the reason I, I,
[01:52:00] I'm mentioning this in an example.  I want to pull up another...
[01:52:05] repo example for you. We'll go back to what we've been working on, but
[01:52:09] Let's open up.
[01:52:12] a file new window.
[01:52:17] Let's open up
[01:52:20] Let's hope I actually have it on here.  Solid Hacker News.  Yeah, beautiful.
[01:52:24] Okay.
[01:52:26] We're going to,
[01:52:28] grab a specific
[01:52:30] fork of solid hacker news. Solid. I haven't updated solid hacker news for ages until very recently.  So this branch is probably way out of date. Let's pull...
[01:52:43] Let's pull Netlify.
[01:52:45] All right, where are we?
[01:52:47] Okay, yeah.
[01:52:49] Okay.
[01:52:51] Well,
[01:52:52] To make my point here, I implemented
[01:52:57] Hacker News,
[01:52:59] using the new router with 10 stack query.
[01:53:04] Um,
[01:53:09] All right, this is all like
[01:53:15] Close all that. Okay. That's PM PM.
[01:53:18] I
[01:53:20] And all I did was I set up
[01:53:24] That's my fetch API.  And then I set up a new query client from tan stack query.  And then in my routes, like we were just doing,
[01:53:30] I...
[01:53:32] Thank you.
[01:53:33] I just in my load function,
[01:53:36] Query client prefetch query.
[01:53:38] And then inside here, create query
[01:53:41] with the right query keys.
[01:53:43] So this pattern that I'm showing here
[01:53:49] doesn't require a native...
[01:53:51] Um...
[01:53:53] fetching pattern because the combination, the auto-serialization, the resource, the fact you can use server anywhere
[01:53:58] means that you can just
[01:54:00] put in whatever data fetching mechanism you want for caching, right? Here, we're using query, and then we're using can stack to prefetch the query. And if I
[01:54:09] Run this.
[01:54:13] Hopefully I'm safe to do it on 3000, I am. And I reload our page.
[01:54:18] Thank you.
[01:54:19] You see, actually, you saw the streaming work there, right? With the loading coming in?
[01:54:24] Um,
[01:54:26] And yeah, we have the prefetching on Hover from Tanstack.
[01:54:29] Um,
[01:54:32] So this is just like CanStack actually feels, the query feels almost native here because
[01:54:39] Like you could picture using, if you really like the TanStack app, using TanStack router and using TanStack query because it's,
[01:54:46] like the same data patterns apply here.
[01:54:50] This load function lets you ensure your cache and then you click on it and your data is there.
[01:54:56] Um,
[01:54:57] Obviously not everyone is going to use TanStack, but
[01:55:01] This is just an example of how you could take a Hacker News example and use Tanstack, right?
[01:55:08] I took this same Hacker News example
[01:55:11] And
[01:55:12] I used Soled's
[01:55:15] data APIs.
[01:55:17] And
[01:55:18] If I do that, and I go to
[01:55:21] Yeah, this one.
[01:55:23] Good C.
[01:55:24] It's very similar. It's a little bit different.
[01:55:28] Thank you.
[01:55:29] Solid's new-- Router's new-- sorry, not Router-- Start.  Solid Router's new API, well, we just
[01:55:35] wrap your fetcher in something called cash.
[01:55:39] and then we give it a key, and then you can call that function multiple times, and it's only going to get called once.
[01:55:45] This cache lasts the request on server rendering.
[01:55:49] And it lasts, it's kind of like a navigation preload cache.  It doesn't...
[01:55:56] When you go back and forth in pages, it basically lasts for five seconds, just long enough to do preloads.
[01:56:03] and then it exists as a back cache for browser navigation to make sure that the content's still  there.
[01:56:08] But generally speaking, this is a very non-invasive catch.  It's not there to be stale or revalidated.  It's not long-lived.  It's super short-lived.
[01:56:20] But if you want a longer live cache,  use HandStack or use a different caching solution.  This is basically a default solution
[01:56:27] to do it. You just take, this could be your server function, take whatever you want, stick it in the cache,
[01:56:34] Call it.
[01:56:35] In the load function, call it again in your create async call,
[01:56:39] And then we're good to go.
[01:56:40] Um,
[01:56:42] I can show this in action here.
[01:56:45] Let's see.
[01:56:50] Yeah, streamed in.  When we hover, we get the preload.  We go to the next page.
[01:56:55] Go to the next page, hover back. We were just there. We still have it in our cache, but
[01:57:00] If we wait a little longer than five seconds,
[01:57:05] Everything fetches once, and then when you do your initial render, no data fetching because it does it on the server properly.
[01:57:13] Yeah.
[01:57:15] I'm actually kind of curious what's wrong with our example, but let's
[01:57:20] Thank you.
[01:57:20] Thank you.
[01:57:21] If I was to take our example here to use the new router stuff, let's stop this one here.  This is the...
[01:57:30] solid hacker news, but if I was to take
[01:57:34] are things that we've been working on to do this.  I would take this get to dues,
[01:57:39] And I just go...
[01:57:41] you know,  cons,
[01:57:45] I'm just going to do it here. I could do it in the other file.
[01:57:48] and then put the userver inside the function.  But I'm just going to go get to do's.
[01:57:55] equals cash
[01:57:56] Get to do's.
[01:57:58] To do's.
[01:58:02] Thank you.
[01:58:02] And then quick fix.
[01:58:06] Thank you.
[01:58:07] Again, you don't have to use this API.
[01:58:10] It just makes things...
[01:58:13] Nice. Because...
[01:58:16] This cash
[01:58:18] it can be
[01:58:20] it can be referenced other places.  It basically uses the arguments you pass to the function as cache keys.  And then you can like,
[01:58:28] Like,
[01:58:28] You can go get to-dos.
[01:58:31] dot like key for you know whatever the argument is here this doesn't take any arguments so i can't  show you but if it you know because if i try to do it it'll type triple error out but basically
[01:58:41] It uses a combination of this plus the arguments as a way of setting the cache.
[01:58:47] Thank you.
[01:58:51] We're gonna talk about invalidation of the cache in a minute, but I just wanted to kind of show this in action because we should be able to now...
[01:59:01] Thank you.
[01:59:04] We load our app back and go to to-dos.
[01:59:09] Yeah.
[01:59:10] Interesting, with the cache it's working properly, where it's not double fetching.  I've got to look into that.  Create Async should work on its own.
[01:59:16] But my point is that
[01:59:19] Yeah, this now only fetches once.
[01:59:23] not at all on SSR and
[01:59:27] Thank you.
[01:59:28] This gives us that powerful ability to do preloads. See, already loaded the data for the next page.
[01:59:34] So,
[01:59:35] You know, different router, new data patterns.  What's cool about the cache is actually that
[01:59:42] We also have
[01:59:43] the other side, right?
[01:59:45] we can do invalidations. I'm going to do this as
[01:59:49] AT.
[01:59:51] We have const, I'm going to put it here.
[01:59:54] we have something called actions.  Because server functions are just functions.  But if I want to do a mutation or something,
[02:00:00] I can make addToToDo equals an action of aT.
[02:00:04] And, um...
[02:00:07] This will be fine because it's a server function.
[02:00:12] Let's quick fix it because I'm missing an import.
[02:00:15] Beautiful. And now,
[02:00:18] I mean, the first thing with an action is
[02:00:20] I can just call it in our submit here.
[02:00:23] And
[02:00:24] I don't need this refetch anymore.
[02:00:26] Um...
[02:00:31] When I do this, this should just update right away.  But we have a problem.  What is our problem?
[02:00:39] I saw an error flare out.
[02:00:44] Mm-mm-mm-mm-mm.
[02:00:48] Oh, sorry.  I missed this myself.
[02:00:51] This is my fault.
[02:00:53] If I want to use an action inside a component, we need to inject the router into it.  So we actually sort it.
[02:00:57] We actually have to call
[02:01:00] use action, my bad. So,
[02:01:03] Let's go here, const, what if it's called add,
[02:01:07] to do equals use action.
[02:01:11] Add to do action. I'm going to do it like this. We're going to name this one, add to do action.
[02:01:19] Sorry, my bad.
[02:01:22] Thank you.
[02:01:23] Now, when we do it,
[02:01:25] Uh-huh.
[02:01:26] Huh?
[02:01:27] Our ghost data is still somewhere in there.  That's funny.
[02:01:35] I think, oh, it's because of the microbeautomit.
[02:01:39] Okay.
[02:01:43] Okay. Okay. Sorry. HMR.
[02:01:47] Use real databases or file system stores when doing HMR. Otherwise weird stuff can happen.  But you see that it's doing the updates automatically thanks to the action.  So...
[02:01:59] Yeah, and what's cool about this API is this add to do action can be used to do optimistic updates, right?
[02:02:05] So what we can do is...
[02:02:08] We could go const...
[02:02:11] adding
[02:02:13] to-dos.
[02:02:15] And we can go use submissions.
[02:02:19] Thank you.
[02:02:20] or add
[02:02:22] for our add to do action.
[02:02:27] And then now we actually have the submission.  So what we can do actually, which is kind of fun is
[02:02:36] in our list.
[02:02:38] we can
[02:02:41] We can.
[02:02:41] I think we can just go adding...
[02:02:44] To do's
[02:02:47] And then
[02:02:48] I think it's just the title that we have, right?
[02:02:51] What's this title?
[02:02:55] Thank you.
[02:02:56] Oh, right. No, no, no. It's...
[02:02:59] I'm going to call it sub, and then it's sub.title, I think it is.
[02:03:04] sub dot
[02:03:06] input,
[02:03:07] Dot title.
[02:03:10] You can tell I haven't used these APIs enough, have I?
[02:03:15] It's an array of submissions and each
[02:03:19] Imports.
[02:03:20] and put
[02:03:23] Oh, it's just the input. I'm so dumb.  The input for this thing doesn't have a name, right?  We're literally just passing...
[02:03:30] It's actually input zero.
[02:03:32] I'm just being stupid.  The input is the arguments that you pass to the submission.  So when we're adding our to-do, we have an array of string.  And it knows the arguments, so it gives you a little hint  of what the arguments are.  So when you call it, you pass one argument, which is title.
[02:03:52] which is a string. So input zero is that string. So for each adding to do, because the thing with our functions is they can have any format, you can have as many arguments as you want.
[02:04:03] They don't have to be named. It's transparent.
[02:04:07] Essentially, what we have here is sub input
[02:04:10] zero will be our adding to dues.  And then if we do something funny here like style,
[02:04:15] equals I don't know color
[02:04:18] Red.
[02:04:20] Thank you.
[02:04:21] what should happen
[02:04:24] is that, I mean, this might be way too fast. We might have to introduce a delay
[02:04:28] Or ghost ones.  The new to-do, while it's optimistic, should be read.
[02:04:33] I don't know if you saw that. It was really fast.
[02:04:39] Thank you.
[02:04:41] Yeah. Did you see that? It was red.
[02:04:49] That one is a lot faster.
[02:04:51] But...
[02:04:52] Essentially, we have optimistic updates to this. And the reason that this is important is because this action, like why do we have this use action when you know why am I putting the action out here is because this can be imported anywhere you can use submission in different components like you don't have to do it all locally, you can have optimistic updates.
[02:05:11] in different
[02:05:12] in different places, just using the action as the key for the optimistic update, essentially.
[02:05:18] Obviously, it's convenient in the place we're using it here because, you know, we created the action here and we're using we're using the action here, but we can also put this in different components. And what's beautiful now between the cache in that and the action API is that
[02:05:36] We have TypeScript.
[02:05:38] all working properly here.
[02:05:41] without any of those type of return ofs.  And we have preloading, and we have optimistic updates,  cross components, and, you know,
[02:05:51] all the other kind of fun stuff. So again, but look, look, have we imported anything from SolidStart here?
[02:05:59] Nothing here is actually solid start.
[02:06:03] We could have used TanStack query.  We could use TanStack router solid when it's available.  My point is...
[02:06:11] that
[02:06:12] Thank you.
[02:06:15] SolidStart isn't really anything here. We just happen to be using this
[02:06:20] Library.
[02:06:24] Right?  This is one pattern.  I like this pattern.  I think it's a very good pattern,  but it is just one pattern.  It's a very TypeScript happy pattern.
[02:06:33] So, you know, now we're kind of like...
[02:06:37] caught up to things like remix. I mean, I haven't talked about all the features. We're SSRing.
[02:06:42] We could.
[02:06:43] We could pre-render.  Do you guys like pre-rendering?
[02:06:46] Ooh.
[02:06:47] We can go into our start options.
[02:06:50] here and we can
[02:06:52] you know,
[02:06:53] Go...
[02:06:55] we can pass options directly to Nitro.  We can go like server,
[02:06:59] Um...
[02:07:00] pre-render, all the nitro options go to server. And then we can be like,
[02:07:05] Let's pre-render one of the routes, you know, and then like we can go routes array and then we can we can pre-render that.  Right. We can go slash. We can also do something really cool that Nitro supports.
[02:07:16] We can go...
[02:07:18] Crawl
[02:07:20] Links.
[02:07:21] True. And then it will try and pre-render
[02:07:24] your whole site.
[02:07:27] I'm just going to do build to see if we can actually see this.  We should have two pages, right? We should have slash.
[02:07:34] Um...
[02:07:35] And then we should have...
[02:07:36] To do's. Yeah, it found both of them. Slash into do's not a hard thing, but it means that like dynamic routes, it actually looks through the links of the rendered pages and see where you link to other pages on your site and then it pre renders them so you can even get dynamic stuff. I don't do this on hacker news because you'll literally like pre render the whole website because you'll keep on fetching more through links.
[02:07:55] There's way more config on Nitro, but what I'm showing here is
[02:07:59] Our client side thing we were doing this whole time, like our CSR, that was just pre-rendering the index page.
[02:08:05] But I'm using the same mechanism, essentially.  There's nothing special with CSR mode  except for not rendering the...
[02:08:13] the server, when we have the server side, not rendering the
[02:08:18] the body essentially, like leaving it
[02:08:20] at the document and then telling it to pre-render index.
[02:08:24] Here you have the power to pre-render as many as little pages as you want.
[02:08:29] So this is something Solstart never had previously.  So now we have per page pre-rendering.  So just wanted to throw that out here.  So SSG fans rejoice.
[02:08:40] we can do pre-rendering.
[02:08:42] Okay.
[02:08:46] Okay, but I'm not done.
[02:08:48] Thank you.
[02:08:52] Do you want to see some? Well, this is kind of why it's taking me so long because every piece has to have the right responsibilities to truly make something disappear.
[02:09:06] Because...
[02:09:08] The problem is
[02:09:09] If the responsibilities misalign, you have overlap, and that's where bloat comes in, both from performance, maintenance, everything.  You have to find the right boundaries of responsibilities.  That's why the Unix principles are, you know, philosophy is so important.
[02:09:22] powerful. And this took a bit of time to find where that right balance is.
[02:09:28] Thank you.
[02:09:31] Okay, well, the reason I said we're not done  is I want the message SSG because people care about SSG.  But the other reason we're not done is...
[02:09:40] you you might be like looking at this and you might be going okay
[02:09:44] You told us that there was too much JavaScript, so we code split.  Then we had all this complexity and we had file system routing to handle it.
[02:09:51] Um,
[02:09:52] So you told us, you know, API routes were, you know, you need these when you have it at spa to get your data, but then there's too much, you know, wiring. So then we got server functions to handle it.
[02:10:04] Um.
[02:10:05] What?
[02:10:06] What if JavaScript doesn't work?  What if the pages don't have JavaScript?  What can you do here?  Because none of the code that I wrote actually works.
[02:10:18] would work because you're handling this form submission and all this stuff. So can this work without JavaScript?
[02:10:26] And the answer is yes.
[02:10:28] Because...
[02:10:30] Yes, I used our action
[02:10:32] here and I like submissions for optimistic updates obviously but but
[02:10:38] But what if we didn't use the action like this?
[02:10:43] and
[02:10:46] What if
[02:10:48] Thank you.
[02:10:50] What if instead...
[02:10:54] We just said, hey, form.
[02:10:59] Adding add to do action.
[02:11:02] Well, I have a problem here.
[02:11:05] because...
[02:11:08] Add to do action.
[02:11:09] Thank you.
[02:11:11] doesn't... it takes a string, and the form doesn't know what its string is, right? So, I mean...
[02:11:19] Okay.
[02:11:19] Now I have a little bit of work to do.
[02:11:23] Yeah.
[02:11:26] So let's go into our to-dos here.
[02:11:32] I kind of want...
[02:11:35] Now I have to do something like this.  And you're like, oh,
[02:11:38] You'll see where I'm going in a minute.
[02:11:40] but I'm going to do it the way you're supposed to do it, which is
[02:11:44] form data,
[02:11:46] And then we're going to go const title equals form data.  Was it string form data?
[02:11:57] dot get title
[02:11:59] I want to say.
[02:12:01] And then...
[02:12:03] That should probably work.  We also have to make sure that our form input name
[02:12:10] equals
[02:12:13] what is it
[02:12:16] Fidel.
[02:12:19] And because we're using a server function, there's no JavaScript really required for this. So let's see here.
[02:12:28] What's wrong with the sub?  Oh, yeah, right.  Now...
[02:12:32] we have to
[02:12:33] Git title.
[02:12:35] Oh, and that's not a string, so we have to
[02:12:39] Thank you.
[02:12:40] We have to...
[02:12:42] Do it now.
[02:12:44] Okay, let's...
[02:12:46] Let's get in dev mode.
[02:12:49] and make sure this still works.
[02:12:54] Thank you.
[02:12:58] Oh, form posters are forms for actions need to be posts. My bad.
[02:13:03] This action API only supports posts. So good error message to catch me here. So we should make it method post. Okay, there we go. All right.
[02:13:19] Thank you.
[02:13:19] Now I've really screwed things up.
[02:13:21] Let's hope I get out of this pit.
[02:13:25] Thank you.
[02:13:26] We were looking at the dreaded hydration error.
[02:13:29] Okay.
[02:13:32] HMR is not perfect. I think that's something we can all respect.
[02:13:37] God, you guys, chat is just on point today. Sorry, I missed this one a bit earlier.
[02:13:43] I'm going to go to the next one.
[02:13:45] Obviously with form data parsing, you need to actually...
[02:13:49] *sniff*
[02:13:50] Uh,
[02:13:52] What do you call it? You need to do validation and stuff, but
[02:14:00] Let's continue.  I hope that this works.
[02:14:05] Okay.
[02:14:08] Of course it's not going to work on my lovely demo.
[02:14:15] Why doesn't this one work?
[02:14:18] This is why you prep your demos ahead of time. I do have working demos, but of course,
[02:14:23] Oh, do you know what it is?
[02:14:24] This is the stupidest thing. I gotta remember this.
[02:14:29] I think I know what it is.
[02:14:32] It's one of the most awkward things.  The zeroing out of the
[02:14:37] of the set to do.
[02:14:38] messes with the submission.
[02:14:41] It has to happen after it submits, which is a pain in the ass.  This is...  There's some things we have to talk about on that side.  Because, like...
[02:14:51] I
[02:14:52] the timing of a submission
[02:14:54] is interesting because
[02:14:56] you get the on submit event and then it submits,  which means if you want to do stuff like after you submitted,  like there isn't a great way, um,
[02:15:04] Anyway, you see the optimistic updates.  Everything still works.
[02:15:07] Right. Okay.
[02:15:09] so
[02:15:12] I guess the real moment of truth here is we're going to build this for real.
[02:15:16] Right.
[02:15:21] And then we're going to
[02:15:23] Start.
[02:15:29] Thank you.
[02:15:30] And we're going to refresh.
[02:15:33] you
[02:15:35] And yeah, I mean,
[02:15:36] Who cares? It's probably still working. What we're going to do is we're going to
[02:15:42] go to the network tab.
[02:15:45] Yes.
[02:15:46] Whatever, actually, I don't even think we have to do this.  We just have to go disable JavaScript.
[02:15:51] Okay, now there's no JavaScript.
[02:15:53] So when I load the page,
[02:15:57] That's interesting. These are all blocked. Yeah.
[02:15:59] That's cool that they show that, they never used to.
[02:16:01] I can still navigate around because...
[02:16:03] It's doing full page refreshes now because these are just anchor links.  Like we're not doing a spa mode.  There's no JavaScript in my browser, but if I go
[02:16:11] Hi, and I add it.
[02:16:14] What is this?
[02:16:15] Boast of work.
[02:16:19] It's going to be like another one of my things. All right.
[02:16:26] What did I miss this time?
[02:16:29] Thank you.
[02:16:30] All right.
[02:16:33] Action is
[02:16:36] Add to do. Add to do is
[02:16:40] Well, actually, let's inspect our form for a second and see what's going on.
[02:16:46] See, our...
[02:16:48] form actually has the encoded server action encoded into
[02:16:55] into the name.
[02:16:57] So we can see that it's server ID this name this.
[02:17:02] Technically speaking...
[02:17:04] we do this preserve log,
[02:17:08] and we do this. This should be all that we need.
[02:17:11] Um.
[02:17:13] We should see the post to this.
[02:17:17] which should return
[02:17:19] a redirect back to itself,
[02:17:23] with the new to-dos.
[02:17:27] Interesting. I wonder if this is still the persistent problem of using this stuff in memory. That sucks. Okay.
[02:17:36] I'm going to show
[02:17:38] the exact same demo from inside the solid start repo with uh with the with
[02:17:44] the completed
[02:17:46] Hacker News Demo.
[02:17:48] or not HackNews, to do MVC demo.
[02:17:50] I will look into
[02:17:52] that
[02:17:54] in a minute
[02:17:56] Okay, so...
[02:17:58] Let's go in here.
[02:18:00] And let's do...
[02:18:02] PMPM -S filter.
[02:18:05] Example.
[02:18:07] to do MVC
[02:18:11] Um...
[02:18:14] I wonder if the difference between build and dev
[02:18:17] Can we sanity check that first?
[02:18:20] before I give up. This might be just me not
[02:18:23] spending way too much time in dev and not with build until recently.
[02:18:28] because I'm in dev.
[02:18:29] JavaScript is disabled.
[02:18:33] No, not the difference between building depth. Good to know.
[02:18:35] OK.
[02:18:36] Let's go into...
[02:18:40] Um...
[02:18:43] Apple Hacker News, let's just do dev here.
[02:18:50] localhost 3000.
[02:18:55] actual to do MVC.
[02:18:56] JavaScript disabled.
[02:19:01] Sweet. So this one actually works.
[02:19:03] So, I think that's a good question.
[02:19:05] You can see that it does full page reload whenever I do the edits.
[02:19:09] here.
[02:19:14] So same exact pattern in this example.
[02:19:21] Where is it?
[02:19:22] Ch-ch-ch.
[02:19:26] Thank you.
[02:19:26] Thank you.
[02:19:27] I wonder if looking at SolidStart will actually show me the error of my ways.  Because the actual HackerNews, not HackerNews, I keep saying HackerNews, the actual ToDoMVC example here,
[02:19:39] The biggest difference is it's using a...
[02:19:42] Unstorage for file system...
[02:19:44] handling so like the data isn't just in memory
[02:19:48] Um,
[02:19:49] And then...
[02:19:50] Which, and then...
[02:19:53] which might actually be the root of our problem, I actually think.  I think server functions and non-server functions
[02:20:00] end up in two different
[02:20:03] copies of memory.
[02:20:05] which is interesting.
[02:20:09] I don't.
[02:20:10] want to delve into that. This is something like there's a little there's a in a real situation with actual database, you'd never have this problem.
[02:20:17] Um...
[02:20:19] So.
[02:20:19] Let me see here. Yeah, because this this is the full blown example, right?  Cash action, action, action, action, all the actions.
[02:20:27] Um,
[02:20:29] bunch of submissions
[02:20:31] And IDs.
[02:20:33] Yeah.
[02:20:35] So we're basically seeing the full picture here,  and it's using forms, add to do method posts.  This looks very similar to what...
[02:20:45] what we just did, right?
[02:20:48] Oh, we got a raid?
[02:20:51] Thank you.
[02:20:52] This is why I need to check Twitch more often.
[02:20:55] I'm just showing people, um,
[02:20:59] So...
[02:21:00] solid start, which is the solid meta framework or non meta framework.
[02:21:11] It's funny, I didn't actually get...
[02:21:12] A raid notification, that's weird.
[02:21:15] Am I just like
[02:21:19] Yeah.
[02:21:20] Thank you.
[02:21:23] Thank you.
[02:21:24] Thank you.
[02:21:26] All good. I will continue on my... I'm showing progressive enhancement right now in Solid Start.
[02:21:34] Um,
[02:21:35] by using actions directly in forms.
[02:21:41] Yeah.
[02:21:43] But, okay, let's go back.
[02:21:45] Let's turn the JavaScript back on.
[02:21:51] Thank you.
[02:21:51] Enable JavaScript.
[02:21:56] Okay, let's turn the...
[02:21:58] JavaScript back on and let's go back to the demo that we've been working on this whole time.
[02:22:04] Um...
[02:22:10] All right, let's start this one up again.
[02:22:15] Amen.
[02:22:16] Thank you.
[02:22:19] We had to do a little work to get this to work with form data, which was kind of a pain in the butt.
[02:22:25] Right.
[02:22:26] We we.
[02:22:27] What if we didn't want to work with form data?
[02:22:31] Like,
[02:22:32] You're like,
[02:22:32] Man, why do we need...
[02:22:34] to do all this
[02:22:35] Crazy.
[02:22:37] crazy stuff, right?
[02:22:40] and
[02:22:41] Okay.
[02:22:43] There is a solution for this that also works for progressive enhancement.
[02:22:47] I'll show you this, but...
[02:22:51] Wouldn't it be nice if all the changes we just made here, we didn't have to do? Like we could just undo this?
[02:22:57] Like,
[02:22:58] We already have our server...
[02:23:01] Stuff.
[02:23:02] Why give up?
[02:23:03] Why give this up just to get progressive enhancement?
[02:23:06] Right?
[02:23:08] Like, why do we want this casting stuff to strings?
[02:23:11] Actually, we probably still need that.  But why do we want to cast stuff to strings
[02:23:18] Um...
[02:23:19] That doesn't seem like fun.
[02:23:21] uh,
[02:23:23] Why do we want to, you know, worry about all this?
[02:23:27] When we can just go
[02:23:32] Thank you.
[02:23:32] Thank you.
[02:23:33] Like this. See, when you don't have an empty action,
[02:23:39] or a form data, it knows, TypeScript knows.  They're like, no, no, no, no, no.  You can't pass this action to the form.  You have different arguments.  But this with function knows the arguments.  So you can use partial application here.  So I'm just going to take...
[02:23:58] With, what was it, new to-do.
[02:24:02] So now,
[02:24:03] Um,
[02:24:04] I have the new to-do text.
[02:24:07] in here.
[02:24:09] And I'm good to go now to be fair.
[02:24:11] Thank you.
[02:24:12] This exact example is not where I would use this. You see the problem here. This new to-do only updates with JavaScript because it's an input field and doing this. To be fair, this one
[02:24:26] you would probably still handle as form data, probably.  It just makes sense.  The place where it gets a pain in the ass is,  let's say you want to delete something in a to-do.
[02:24:36] You have to pass the ID. Now you're putting all these hidden fields in.
[02:24:40] How do you get the ID in and have it work with progressive enhancement, right?
[02:24:44] So going back to our
[02:24:47] Hacker News example here, yes. Here I'm just using add to do. But if I'm going through my rows,
[02:24:53] And I'm like showing my stuff.  I'm like,
[02:24:55] I want a button that toggles a to-do on and off.  I go toggle with to-do ID.
[02:25:01] Or I want
[02:25:03] a button that deletes the to-do. Where is it? Here, too.
[02:25:07] Um,
[02:25:08] remove to do with to do ID. And if you notice, these use the same form, and I'm using form action here, instead of action, this also works. This is part of the reason for this API, because now you can
[02:25:21] you can just use action and form action.  And this knows how to serialize this into a string for SSR.  And it means that if the JavaScript's not there,  we can still post this form with the correct data.
[02:25:34] The thing you have to understand is when you have
[02:25:39] one of these actions, and you are rendering it from the server, so JavaScript does not work in the client with it, this needs to make it to the client, it needs to be encoded.
[02:25:53] So anything you
[02:25:56] call with this will end up in the client,  even if it was initially server rendered.  So I do want to point that out to people.  I feel like this API is much more explicit than using stuff  like closure extractions with server functions.
[02:26:10] Nothing will accidentally end up in your server function from a localized state because we literally don't do closure extraction. So we don't have that same problem Next.js has. But...
[02:26:24] Um...
[02:26:26] If you need to localize it, you can just use this with
[02:26:30] and then put past the parameters directly.  But just understand, if you're calling a function...
[02:26:36] passing the parameters in,
[02:26:39] Submit it from the client.
[02:26:40] It's going to be on the client.
[02:26:45] What's the difference between action form and action?  Action goes on the form and it's the single action.  You can in fact have these overrided.
[02:26:54] individual buttons in the form
[02:26:56] can choose their own action, and so you put it on the button instead. That's basically the difference. You can actually have action
[02:27:03] button form action and like another button that's not has a form action that submits the forms action. This is all HTML.
[02:27:09] So this is just a...
[02:27:12] I didn't need two forms.
[02:27:14] So I just did it this way.  I could have actually put a hidden field in here  that said to do ID.
[02:27:22] And then
[02:27:24] you know, not done this and then parse the form data.  But this is a lot nicer because now toggle to do.
[02:27:29] It's just an ID number, which means all the optimistic updates are much simpler. You're just dealing with, you know,
[02:27:37] like values instead of form data all over the place.
[02:27:40] Um,
[02:27:41] As I said, I kept the form data for the
[02:27:44] for this one, for like the actual showing of the to-dos. Where is it?
[02:27:50] Where's the second for loop?
[02:27:51] There's one for loop, yeah. See, so I am actually doing it still here. Form data makes a lot of sense when you have form fields.
[02:27:58] like
[02:27:59] Input fields.
[02:28:00] Form data does not make a lot of sense when you're just doing actions based on an ID, like deleting something.
[02:28:06] Like when you're not actually doing form like behaviors,
[02:28:11] Form data doesn't make a lot of sense. But if you want to be progressive enhanced,
[02:28:15] You can do it. You can also not and ignore this whole topic.
[02:28:19] But I wanted to show you
[02:28:21] The pain in the asset was to use form data
[02:28:24] and to show you how you can avoid it and still get progressive enhancement.
[02:28:30] Thank you.
[02:28:33] Thank you.
[02:28:36] Thank you.
[02:28:38] 180 to close your action. I'm wondering if we could pass into it the name of the input that will be automatically extracted from the form data and passed to the action as a parameter.
[02:28:49] Yeah, I mean, yeah, I...
[02:28:56] Yeah, I don't know. You have to think of how progressive enhancement works in that scenario. I'm not sure.
[02:29:02] Yeah. Yeah. The thing is you have to understand the reason that this is the case is check this  out. Let me explain a little bit quick side note on closure extraction. I am not a big fan of  closure extraction. This is one of those things though, that it's,
[02:29:15] up in the air enough that I can understand that like if I'm wrong in you know a year or two and I changed my mind
[02:29:21] Like, don't hold me to this too hard because it's a new area.
[02:29:24] But
[02:29:25] What I want to explain is this:
[02:29:29] Okay, I'm just going to scratch pad this for a second to explain. Top level, we have function something. Okay, I'm actually going to turn off this so that we don't have to worry about function something.
[02:29:40] And
[02:29:41] Out here we have import
[02:29:45] database. Okay? DB from
[02:29:48] TV, okay?
[02:29:50] And then if in here this is, you know, use server,
[02:29:53] Whatever.  And then I go DB...
[02:29:57] Dot
[02:29:59] Stop.
[02:30:00] This is not closure extraction in the classic sense because
[02:30:05] we don't,
[02:30:07] We don't need to, and the client,
[02:30:10] You don't need to send anything...
[02:30:12] to the client to do this, right? And if this has, you know, ID something, you know, whatever,
[02:30:18] Or sorry, no, it's like some kind of argument and we pass that to here.
[02:30:22] Like obviously the client is going to call the ID. So the ID is coming from the client, but this isn't closure extraction because
[02:30:31] We can just make this a module on the server and we're good to go.  We don't actually care about...
[02:30:37] about
[02:30:38] This.
[02:30:40] This works and has no risk of leaking from the perspective of like,
[02:30:46] The chance of this leaking is from side effects and tree shaking not working. It's not because
[02:30:54] Like...
[02:30:55] Let's take this further.  Const secret.
[02:30:57] This has no freaking side effects. It's very clear this has no side effects. If I go like this,
[02:31:04] This is never going to get to the client.
[02:31:08] Assuming that use server bundling works like this the
[02:31:11] It's just not how these things work.
[02:31:15] The closure extraction problem is that
[02:31:19] You define this somewhere.
[02:31:21] Right.
[02:31:22] inside another function.
[02:31:24] So you go...
[02:31:27] Something.
[02:31:29] else. Okay.
[02:31:32] because like I don't call this closure extraction because you don't serialize anything.  You don't bind it.  It's just literally in the code references.  The problem with this one is
[02:31:40] This
[02:31:41] belongs to the instance of this.
[02:31:45] Right? Like, every time you call something else, you get a new something.
[02:31:48] So if secret
[02:31:52] is here.
[02:31:58] You have to call this to make this. The problem is, we need this to be a separate module that gets called. So when the code actually gets transformed,
[02:32:05] in a JavaScript framework, like when it's doing these server functions,
[02:32:09] This becomes
[02:32:11] This becomes...
[02:32:13] This again.
[02:32:16] Essentially.
[02:32:18] You know, it registers some stuff, but you're like, well, how the hell do you get secret from here to here?
[02:32:24] Well, it sees the call site
[02:32:26] Essentially, like it's where you define it here and he goes, OK, I'm
[02:32:31] It makes essentially something...
[02:32:34] Two.
[02:32:36] And he goes, okay, something too is something...
[02:32:39] Thank you.
[02:32:40] something
[02:32:42] Thank you.
[02:32:43] Um,
[02:32:46] bind or, we can use my with, it doesn't matter, but with secret.
[02:32:53] This is essentially what it does.  And then you can, like, what I didn't include in the original examples, I'm assuming somewhere down here you have something...
[02:33:00] Two, right?
[02:33:03] This now has
[02:33:06] So you do all this transformation. You have something too...
[02:33:11] Two, right? Did I?
[02:33:13] Okay, whatever. It doesn't matter.  You see what I'm getting at?  So secret gets bound.  So when it creates it, it creates an instance,  but the actual thing gets hoisted.  And then this...
[02:33:24] like this binding or whatever transforms your function to basically have like
[02:33:31] This. It's like... so... it... it...
[02:33:36] Like it's a little bit more generic than this.
[02:33:38] But like, I just want to show it so you understand.  So you're actually changing the input arguments  to your function.
[02:33:44] essentially, or like using some kind of context injection into your function.
[02:33:49] and then binding it at the call site to get each copy of it,
[02:33:53] and then you can call it with just the argument you have,  and the other one secretly gets in. But basically closure extraction
[02:33:59] automatically does
[02:34:01] all of that for you. So you don't even re this just works.
[02:34:06] It does an error or whatever.  And you don't realize this secret got sent as an argument that now is in the client.
[02:34:12] To be fair, I think Next only does closer extractions on forms, and they do the special form behavior.  Quick had to figure out something there too, and they do this encoding stuff.
[02:34:23] You can just avoid all this stuff
[02:34:25] by having an explicit API for this.
[02:34:28] like,
[02:34:30] Maybe the convenience of this is so great, but the fact that it is not clear that this is
[02:34:36] This looks like, if you remember our original example with database, this database, top level here, stays on the server.
[02:34:42] This doesn't, but it's not obvious
[02:34:45] Why?
[02:34:53] Thank you.
[02:34:55] Yeah, the thing is, there's two problems. The Taint API is, I think the biggest value of the Taint API is,
[02:35:02] is largely to do with like
[02:35:06] You don't know what a client...
[02:35:07] component is further down, like for RCs. You pass some kind of property around, you're passing it around, and at some point it crosses the client server boundary. And
[02:35:16] Where you define the secret is over here and whoever decides what the client
[02:35:21] you know, goes to the client serialization with the client component or island or whatever is over here. And now you don't
[02:35:27] you don't know because
[02:35:29] You're...
[02:35:30] Initially, you consume a component, it's another server component, and you pass a prop and you're like,
[02:35:35] I'm good, this is a server component. I don't have to worry about the client. But then someone else who actually implements
[02:35:41] that server component goes, oh, to do this new feature, we need more on the client.  So we're going to pass more of those props or that data through.  And you as the ultimate consumer don't see that change.  However, now suddenly something that wasn't serialized before is now making it to the client and
[02:35:58] There you go, leak.  That's why you need stuff like the Taint API, because...
[02:36:03] Essentially,
[02:36:05] the disconnect between that. And for the longest time I was like, we need to make the boundary between client server more obvious.
[02:36:12] That actually doesn't help the consumer of upstream server components.
[02:36:16] Anyway.
[02:36:20] Thank you.
[02:36:22] Only tiny bit. The idea of encryption, yeah. First of all, now you need encryption, which is a lot. But the thing is,
[02:36:28] you kind of don't want like the problem with this is not just secret.  It's like,
[02:36:33] Let's change this now to
[02:36:36] super large JSON blob that
[02:36:41] that I happen to be reading.
[02:36:50] Like,
[02:36:51] It...
[02:36:52] I don't...
[02:36:53] I care about serialization...
[02:36:56] even if it wasn't about secrets.
[02:36:58] So that's ultimately, like, that doesn't do it for me.  Like, I know this is all automatic, but I also worked with .NET when we used to freaking  serialize the universe back and forth on every page request.  Sure, we can do that, but...
[02:37:10] I'm not...
[02:37:12] I'm not buying.
[02:37:16] Thank you.
[02:37:17] Thank you.
[02:37:25] So, anyways, little side note on closure extraction. This avoids the need for closure extraction and it also
[02:37:35] is explicit.
[02:37:37] So,
[02:37:38] We'll see if people like it, but for me, this is win-win.
[02:37:42] Right, so I showed off the to-do MVC example.
[02:37:49] As I mentioned,
[02:37:50] Very little coming from Solid Start right now.  So the Solid Start...
[02:37:54] actually do anything.
[02:37:59] Does it?
[02:38:00] Well, it does a couple things.
[02:38:06] - Right. It does the server functions,  but there's no import for that.
[02:38:09] Um,
[02:38:11] What?
[02:38:12] Let's refresh our memory what Solid Start does.
[02:38:15] Well, it has file routes. We talked all about the file routes.  You can just inject them in your router or whatever.
[02:38:19] It has an HTTP header status code.
[02:38:22] code components to help you with branching and errors.
[02:38:26] It has app TSX.
[02:38:29] where you can like inject your context for routers,  add your router, do whatever you want.
[02:38:33] It has entry client, which is the mount point.  It has entry server, which is basically like your index HTML.
[02:38:39] you know, or like where you can get the assets kind of injected in.
[02:38:44] We could have used index HTML. I just like doing everything in JSX.  You know, you can choose. You can do that remix trick  where you don't include the scripts, and then, you know,  you're like, look, I'm...
[02:38:52] I have a 1998 website with full page reloads and no JavaScript, you know.
[02:38:58] Yeah.
[02:39:01] Thank you.
[02:39:02] We have a vtconfig, which
[02:39:06] can help us deploy to different places by using Nitro presets, the server
[02:39:11] thing. A lot of them are actually detectable, so you don't even need this. If you just deploy, take a solid start project, deploy to Vercel or Netlify, it will automatically know what platforming is being deployed for. You don't have to worry about adapters at all. This is a nice improvement of using Nitro.
[02:39:26] We have our dev and build.  Start right now is just an alias for the node.  Local, we could do more.  There's use server.
[02:39:33] which we talked about with server functions that can be done module level or can be done function level.
[02:39:42] We can serialize lots of data types
[02:39:44] with use server. This is from Cerevel. It's the same serializer that Solid does. If you care about  this, watch my stream about server functions and server actions because we can do crazy stuff with this.
[02:39:58] Sorry, I got a little ahead of myself.
[02:40:01] localhost 5000 I think I put the docs on right now. Okay.
[02:40:06] Um,
[02:40:09] So we talked about routing.
[02:40:12] This is so funny because I had a hard time writing the docs because I'm like, okay,
[02:40:16] talking, this is fine, hasn't changed.
[02:40:19] Okay.
[02:40:20] This whole head of metadata section uses solid meta, but we haven't talked about solid meta today because you literally don't need it.
[02:40:26] You just import it and use it like any other library?
[02:40:30] The reason this works, again, is because Solid has a use assets thing that just injects stuff automatically in the head.  So you can use any SolidMeta library. SolidMeta is not part of SolidStart the same way the router isn't.
[02:40:41] public folder conventions, CSS and styling.  Again, you can use whatever you want.  We have examples with solid style, then tailwind  inside the solid start examples.
[02:40:52] Route pre-rendering, we talked about this.
[02:40:54] You can pre-render specific routes, you can crawl links, this is all from Nitro.
[02:40:59] Data loading?
[02:41:00] I talk about the cache and actions we just showed, but honestly, you can use hands-back query and forget like this. Like this isn't even really part of this.
[02:41:09] Same thing.
[02:41:10] We haven't talked about...
[02:41:13] handling redirects, to be fair. So let's look at the
[02:41:17] We talked about API routes, like just using get.
[02:41:20] Thank you.
[02:41:21] This state management is a work in progress from an open source contributor. We haven't talked about sessions, middleware, or like handling redirects and stuff. So let's go there.
[02:41:35] Thank you.
[02:41:36] Generally, our load functions are a void.  It does technically return stuff and it can pass to the component, but this is more of a
[02:41:43] that me backwards compatibility. I recommend using the load functions because they can be called multiple times. I recommend just using them as like a load or preload function and not think of them as a data function.
[02:41:56] Thank you.
[02:41:58] So yeah, let's keep on going.
[02:42:01] Yeah.
[02:42:01] I love how these examples all still work on the API side. So I'm the, you know, trpc. Um,
[02:42:08] Yeah, let's go back to our demo. What do we want to do?
[02:42:13] No, actually, no. I think we took our demo as far as we're going to go. I'm going to show some more specific examples now.
[02:42:20] from this point on to show...
[02:42:24] different features of Solid Start. So let's
[02:42:27] Let's look in an auth example.
[02:42:31] with auth. This example you can get off the, off the endpoint. What I did, I mean, sorry, off the CLI script.
[02:42:40] Again, simple routers set up.
[02:42:43] The biggest thing here is we have
[02:42:45] an index route where you have to be logged in, which uses loads get user
[02:42:51] which is just some Git user call.
[02:42:54] And then...
[02:42:55] I'm using it with create async here.  There's a login page where...
[02:43:00] Um,
[02:43:02] You can use the submission to show error messages.
[02:43:07] And then essentially,
[02:43:09] Under here on the API, I have our kind of data layer where I have cache, action, and action.
[02:43:16] And these are wrapping...
[02:43:18] our used server, which is all our database stuff.  Like I often like using used server like this top level.  It just keeps that separation for people.
[02:43:28] I...
[02:43:29] I like the flexibility. I think this is also just
[02:43:32] Yeah.
[02:43:33] you know,
[02:43:34] just doing it for because it's
[02:43:36] It can be nice.  What you're going to see here is that those three functions I showed you, login and register,
[02:43:41] Um,
[02:43:43] um
[02:43:44] They do take form data in this case because...
[02:43:47] If you look at a login page,
[02:43:50] It's kind of basic. It's just like I am a form.
[02:43:54] There might be a redirect hidden. But other than that, it's like, this is very much form stuff. So I'm just using form data. Like if I was trying to use actual API is either not like actual like,
[02:44:03] interactive stuff. I'd either not use forms and not care about progressive enhancement, or I would use like with and use data. But for a login screen, you just want a form that always works, right?
[02:44:14] So,
[02:44:15] Pretty simple.
[02:44:16] on that side and the logout button
[02:44:19] Also very simple.
[02:44:21] you know,
[02:44:22] so
[02:44:24] Let's go back to...
[02:44:28] our server implementation.
[02:44:30] What's cool about this is...
[02:44:33] error handling and redirects. And I want to talk about this for a moment because
[02:44:37] I'm rowing readrex and you might be going, okay, that's a little bit weird.
[02:44:42] I thought you threw errors.
[02:44:44] And
[02:44:44] You're going to love this even better.
[02:44:46] I'm returning...
[02:44:48] errors.
[02:44:49] No, no, that's git user, sorry. I'm returning errors and throwing readreqs, which seems kind of weird, but...
[02:44:59] If you think about it, it actually makes sense because
[02:45:04] Look, if it's an uncaught error, that's different. We catch the error. Error boundary handles it. But a lot of times when you're doing form submissions, you have like 400 level errors. And now I don't need to use an error object. I can use whatever I want. But by returning errors,
[02:45:17] I have a promise of error, essentially.
[02:45:19] Like, either this logins or I get an error back. And why this is beneficial is that
[02:45:26] When I look at my login screen and I want to show an error,
[02:45:28] I know that this result
[02:45:30] is an error. So I know TypeScript works
[02:45:33] perfectly
[02:45:35] for displaying the error information if there's an error.  See, most actions are probably void.  Like you don't need, they might be a success message,  that's a reason not to, but the type is,
[02:45:44] Like actions are not the same as gets.  Gets, generally speaking, you're returning some kind of data.  You care about that data.  That's a thing.
[02:45:53] If you're not authorized, you might get a redirect.
[02:45:57] or there might be some kind of error state that is unexpected.
[02:46:04] But for actions
[02:46:06] like doing stuff, generally it's a void.  The only thing you have to care about is the error.  And this, like this temporal state, this doesn't last.  Submissions don't last forever, right?  You don't, this is only like
[02:46:16] while you're in error.
[02:46:18] There's options on submissions to clear them and all this stuff, you know. So generally speaking,
[02:46:24] this is what you want.  You don't want redirects as your return type.  You just want to be able to redirect.  And some APIs I've seen just call redirect,  but the problem with that, which is kind of,
[02:46:36] Awkward is...
[02:46:39] Like, does it throw?  Like if it throws, then the next line of code  will never actually run.  Like this is very explicit in what's happening here.
[02:46:46] Um,
[02:46:46] you call redirect and you throw the response.  And let's show this example.
[02:46:53] here example with
[02:46:55] off
[02:46:56] And obviously this works
[02:46:58] with JavaScript turned off, progressive enhancement, the whole
[02:47:02] fun thing. But
[02:47:04] If we go here and we refresh, we're trying to get in, log in, no, redirect us. Let's go back to the index fix. Nope, you're not logged in. You cannot get in.
[02:47:13] This about page, funny enough, is not protected, so you can go there.  It's a not found page, but you cannot get into the protected page.
[02:47:20] And when we do this,
[02:47:23] Nope.
[02:47:24] Passwords must be at least six characters. Okay, that sucks.
[02:47:26] You know?
[02:47:27] Well, now it's six characters.
[02:47:30] Oh no, password, sorry. Wrong message. I meant to do this one. Usernames must be at least three characters.
[02:47:35] Now let's make our password like something super long.  It's invalid login, whatever.  Like...
[02:47:41] Um,
[02:47:45] This is this kind of mechanism in practice.  And we use cookies as a mechanism for handling these errors.  Like if I...
[02:47:55] go in here and I turn...
[02:47:57] This is a fun thing. Certain screens, command P does different things. Let's disable JavaScript here for a second. Disable JavaScript.
[02:48:04] Let's reload the page, no JavaScript,
[02:48:08] This still works because...
[02:48:11] We use cookies to basically do it. You can tell the difference in JavaScript on and off because the input...
[02:48:18] loses its state.
[02:48:19] Um, we could...
[02:48:21] probably use the submission to repopulate
[02:48:24] the input on the server because we have like flash messages the same way we do this.
[02:48:28] I didn't implement it, but this is like very easy for me to demo to show the difference of like
[02:48:33] when
[02:48:34] this works and doesn't work, right?
[02:48:36] JavaScript's off. We're still not going to let you do the redirect because it goes to the server on everyone. But...
[02:48:42] Yeah, let me do, let's enable JS again.
[02:48:48] So,
[02:48:50] Let's actually succeed at logging in.
[02:48:52] with
[02:48:53] the password, right?
[02:48:55] Thank you.
[02:48:56] And now we're in. And then again, we can just log out.
[02:49:00] I...
[02:49:02] Okay.
[02:49:02] We're done with this demo.
[02:49:07] I'm going to make this one big.
[02:49:09] So this is the basic pattern. And I'm actually using some cool server stuff in this example, because I'm actually using server from H3, which is part...  If you're not familiar, Nitro and UnJS use something called H3 as their HTTP server, and I'm re-exporting them through SolidJS server.  So they have... This actually uses session management. And for H3 to use session management, you just basically...
[02:49:33] Um,
[02:49:34] pass in the event. This get request event I haven't showed off yet. Solid.js web has a new way of using async local storage to inject events.
[02:49:45] the event and this is how you can get the request.
[02:49:47] The request event has a specific form, but we can pass it to H3 helpers like use session to set up
[02:49:54] sessions and then it's automatically handled for us.
[02:49:59] So for example, in this example, when we get the user, we get the session, see if there's a user ID on the session. If not, we throw a redirect.
[02:50:09] Then we try and get the user in our database.
[02:50:11] if not through a redirect.
[02:50:13] And then we return the user without their password, obviously. Um,
[02:50:18] Similarly, when we log out, we get the session, and then we remove the user off the session.
[02:50:25] Essentially.
[02:50:26] So,
[02:50:27] And actually, sorry, when we log in, we add the user to the session right here.
[02:50:32] So
[02:50:33] These are, we have the full power of H3 at our disposal here with solid start. I don't know if you've seen H3 before on JS. I imagine it's probably criminally under documented.
[02:50:47] Um...
[02:50:48] But it gives us a lot of information
[02:50:52] handlers and helpers to, you know,
[02:50:55] to handle them stuff. H3 has all this stuff. You're not going to worry about all this. This gets wrapped for you. But like,
[02:51:00] Git
[02:51:01] read raw body, read body, read validated, request, get queries, see all these helper functions.
[02:51:06] These are all available
[02:51:07] to you, cookie management, session management,
[02:51:13] cores, headers,
[02:51:15] This server runtime basically is completely at your disposal here.
[02:51:22] Thank you.
[02:51:23] Thank you.
[02:51:25] Thank you.
[02:51:27] Yeah, no, I don't know how much this trickles down to Evan because the driving force of NJS is more the Nuxt team and I'm not sure how much Nuxt and Evan and Vue kind of...
[02:51:41] you know overlap but i mean beat being agnostic was a key game changer for all of us um
[02:51:48] Although my understanding is that this effort for on.js started before at least V2 added support for non-view frameworks.  Like they were doing this...
[02:51:58] They started this during
[02:52:01] NUX 2 time period.
[02:52:06] Yes, yes. Because you can use that same Git request event
[02:52:14] The only thing you have to consider, though, is that calling
[02:52:17] those functions there, it's isomorphic.  So technically speaking, you can...
[02:52:25] you can grab it and it won't be there on the client,  but you're not going to like these methods are not going to exist for you.  So like trying to parse cookies on it,
[02:52:35] Doesn't make sense.  But you could like wrap that call in maybe an is server call.  I don't know if there's very many cases where you would actually want...
[02:52:44] to do it purely like you might want to grab some data off of it like say is the user logged in  you know like something you tag on like the the middleware and the locals and then read that  in the in the request event but i'd probably do that like at one point high up and then feed it  into the other mechanisms uh
[02:53:03] like, uh, like context or whatever, because like there, there, these kind of, this kind of code  makes no sense in the client.
[02:53:11] Right.
[02:53:12] So for the most part,
[02:53:14] you're gonna be
[02:53:17] handling this stuff on...
[02:53:19] That's why we have rappers like when I was showing before, like around...
[02:53:26] HV header and status code because like these could happen during initial render but like
[02:53:31] these are safe that they end up on the client. They're just no ops. Like you have to kind of guard for this scenario for things that actually directly impact the request response. An is server will probably do enough.
[02:53:46] But yes, they are definitely accessible.  Async local storage runs all the way through the page request.
[02:53:54] Thank you.
[02:53:58] Thank you.
[02:54:06] Sorry, can you expand on what you mean by use server directive programmatically?
[02:54:15] Thank you.
[02:54:17] Yeah, just interesting.  Our user is just functions, which as pointed out here, is Next does--  I think they do behavior like to throw the redirects and stuff.
[02:54:29] Yeah, I mean...
[02:54:31] It doesn't make sense to me that like...
[02:54:34] Like if you tried to write something the next line and it like, yeah, I don't know.  I guess it's cleaner, but it's not.
[02:54:41] clear. So maybe TypeScript yells at you.
[02:54:45] I don't know. Maybe they've got special tooling. I'm just using what I got.
[02:54:49] Like our forums,
[02:54:51] like when I was showing that cool with example and all that,  that is not compiler tricks.  It's actually all runtime.  We don't actually
[02:54:58] We don't actually do anything special for our server functions because our actions are compiled.  Like...
[02:55:04] The only compilation piece is hoisting the server function out when it's inlined as a  function and a client component.  We don't do anything special with forms, we don't do closure extractions, we don't do  a lot of stuff.  Everything is very explicit.
[02:55:18] Sometimes that means more code and it's more work,  but I actually think what we've done here,  and I think you'll see from what I've shown everyone here,  is that it actually doesn't have to be bad  to use from a DX standpoint.
[02:55:31] you know, like we're talking about like
[02:55:33] the tiniest of maybe code savings for everything.
[02:55:38] in my mind, a huge, huge improvement in terms of clarity and understanding.
[02:55:43] Thank you.
[02:55:44] Okay. So, you know, I get it. Throwing redirects is weird. Some people will knock you down, but it tells you very clearly what you expect back from your action, which is...
[02:55:56] Chef's kiss from my perspective.
[02:55:59] because then all the
[02:56:01] optimistic updates and everything work properly.
[02:56:10] Thank you.
[02:56:10] Thank you.
[02:56:11] Thank you.
[02:56:12] No. Good question, though.  We have serialization for a lot of things.  We can serialize streams. You can serialize response objects.  You can do that trick where you're like...
[02:56:24] like you
[02:56:26] I think Misko did a demo the other day where he was like,
[02:56:29] watching his file system and having an update in the browser over a server function.  Yeah, we can do all that stuff.  The one thing that we have not done is serialization of functions.  That is very tricky because
[02:56:43] it's the closure extraction problem.  You need closure extraction to do that.
[02:56:48] Um,
[02:56:49] because you're just arbitrarily creating a function in scope. Well, I guess you don't need need it.
[02:56:56] But like it's a closure, it's like a function of a function, which is a very difficult thing to work out.  The reason Quick can do it largely is that the thing that causes the function to be serializable, they split it out already as one of their pieces.  And then they can reference that code directly.  We have no other code to do that right now.  Like we don't.
[02:57:17] We like server functions work one way and that works the other way, which is the same way quick works. Usually when they're like doing their stuff, they break all their stuff into a bunch of different closures and a bunch of different functions and then lazy load those pieces. So they already have a mechanism for doing that serialization where.
[02:57:34] We don't, don't, we only do server functions only go this direction, not the other direction.  If that makes any sense.
[02:57:42] Um,
[02:57:43] But
[02:57:45] Um,
[02:57:46] It definitely is a cool demo.  I will say that.
[02:57:55] Okay, so, but the funny thing is here,  I just pointed out here,
[02:57:59] You session has come from salt start server from H3.
[02:58:02] So we have another thing.  This is redirected from the router.  So like these server functions know that they're being used
[02:58:10] in actions, essentially, because they're part of the router. This is not
[02:58:15] built in to solid start all this throw redirect stuff. This is actually it. I didn't show it earlier, but
[02:58:22] I mean, and I can't do this exactly because of the...
[02:58:25] What?
[02:58:27] What I'm saying is you can have purely client actions with solid router,
[02:58:31] like if we didn't have session or this database thing, you know, and
[02:58:34] The throw redirects could work in a pure client-side app that had no backend, that wasn't using server functions.
[02:58:40] So like, like kind of like, uh, remix did with, uh, react router 6.4 and they backport all the remix stuff into the router. Uh, the latest release of solid router does that essentially everything works purely client side.
[02:58:54] but then it also works server side and also supports server functions in a generic way.
[02:58:59] All of this reducing a huge amount of weight out of solid start and putting the work in the server.
[02:59:05] So...
[02:59:06] You can kind of see when you remove those responsibilities how much simpler everything gets.
[02:59:13] Thank you.
[02:59:15] Thank you.
[02:59:21] To be fair, the demo of serializing a promise that serializes another promise kind of shows off almost the same kind of way because you can like,
[02:59:31] load data.
[02:59:33] from a server function
[02:59:34] and then wait and wait.
[02:59:36] Sometime later.
[02:59:38] Tiffany.
[02:59:39] To...
[02:59:40] Await.
[02:59:42] the promise you returned from the function. So it's like delayed.
[02:59:46] So like,
[02:59:48] Yeah, or like any of those streaming examples are perfect examples. It's with async iterators where you can see like the code come in and then the client actually chooses when it wants to pull the next piece of data from the server.
[03:00:00] Anyway, sorry. I demoed a bunch of that stuff and I think one of my recent streams, if it wasn't the last one, it was the one before it. Okay.
[03:00:11] So, progressive enhancement off.
[03:00:14] session management,
[03:00:17] thanks to H3, all those things from H3 we get for free.
[03:00:20] Um,
[03:00:22] What else do we got here? Uh...
[03:00:25] Middleware.
[03:00:27] I've been playing a lot with different examples here for middleware,  but the pattern for middleware right now,
[03:00:33] could be one where we could get more feedback. Right now you just specify a middleware file in your start config
[03:00:40] We could make a convention like middleware TS is always middleware or something, but for now it's like an opt-in feature where you just specify a file and its location.
[03:00:49] And then you can define two types of middleware, onRequest and onBeforeResponse.  And essentially, the way this works is you get your event, the event we've been talking about this whole time,
[03:00:59] Um...
[03:01:00] And then you can
[03:01:02] you know, do stuff with it.  And these just run in order.  Yeah.
[03:01:06] And, uh,
[03:01:08] If you return, it early exits and considers itself doing the response.  That's basically the key to it.  Like the default, there's no next or forward.  This is based on Nitro's pattern.
[03:01:19] Um,
[03:01:21] I don't know how everyone feels about this.  This is just what was kind of built in.
[03:01:26] for us. And essentially, you can just intercept it. If you don't early return, then you essentially it just progresses down, and you can process it, right. So one example is adding protected routes, right.
[03:01:40] Here there's an event and you check for the protected routes, you get your user, and if not user, send or redirect. This is using H3. Otherwise,
[03:01:49] put it on event.locals,
[03:01:50] And...
[03:01:51] you know, you're off to the races, right?  So very simple middleware mechanism,  maybe the oversimple, I've seen people who have like,
[03:01:59] per route based middleware and they intercepted like a bunch of different places.
[03:02:05] My gut.
[03:02:06] I haven't built a big enough project to need that,  but my gut is that like...
[03:02:12] And
[03:02:13] Middleware is something you don't want to get lost.
[03:02:15] It's fine to have colocation,
[03:02:18] on, you know,
[03:02:21] things that, you know, are very localized.
[03:02:24] And maybe the middleware is localized and I'm just missing it.  It's just...
[03:02:28] Yeah, this is a place that we're definitely open to more opinions to think about.
[03:02:33] Generally speaking, the reason we have it set up like this outside of our handler and doing this kind of in this global fashion is because it applies to API routes, it applies to server functions, it applies to page rendering.  So this middleware gives you make sure that you can intercept stuff for all the different types of things coming in and out of your server.
[03:02:52] So it's, you know, it's a little bit low level, but...
[03:02:55] Here we are.
[03:03:00] Thank you.
[03:03:01] Thank you.
[03:03:03] Yeah, see, I've heard about this, but this always gives me pause.  I...
[03:03:09] there's a certain complexity
[03:03:12] that comes into that. It would be interesting though. One of the challenges we've had is that we support any routes. So like you, I showed you how you could just insert the file based routing, but you can actually combine file and non-file based routing.
[03:03:27] because it's just like an additional config step.  So trusting that the file-based routing  is the whole story on routing  is not something that we could ever...
[03:03:35] take for granted. I mean, some of the other benefits of file system writing that you don't  get with the normal one, other than the lazy loading, the code splitting is also like ACID  CSS preloading. There's a whole bunch of things that come with benefits, so you should probably  just use the file system writing and the config
[03:03:49] you know, the export route gives you enough power to do more with it. But
[03:03:56] But on the other hand, like it's hard to
[03:04:00] like force people down that path.
[03:04:03] Like some people will never touch file based routing.
[03:04:06] And
[03:04:07] I support them.
[03:04:10] Of course, you could say then they don't they don't need to get this feature either.  And then they can like look into it. But
[03:04:15] Yeah, it's...
[03:04:17] It's interesting because...
[03:04:20] Generally speaking,
[03:04:23] For an API route, I guess it kind of makes sense because it has a location, but server functions
[03:04:29] don't have a location.
[03:04:32] Um...
[03:04:33] And
[03:04:35] page routes
[03:04:36] Like, the nesting doesn't really...
[03:04:39] impact middleware.  You know what I mean?  Like it's,
[03:04:44] Yeah, I don't know. It's interesting.
[03:04:50] Bye.
[03:04:55] Thank you.
[03:04:56] Next, used to have middleware, colloquially defensive running, and moved away, favor global middleware.  Yeah, it'd be interesting to understand that decision.
[03:05:03] This seemed reasonable to me, high level, but I could be completely wrong.
[03:05:08] *sigh*
[03:05:09] All right.
[03:05:10] So...
[03:05:12] That's kind of
[03:05:13] It.
[03:05:15] Like, I mean, that's
[03:05:17] Like, you know, are we ready to ship?  Like...
[03:05:20] Pretty close. There's some bugs, but I mean...
[03:05:23] Not as many. I have an example with Prisma, MDX, our doc site.
[03:05:27] I absolutely loved going into our doc site and just being like, pre-render crawl links true. Like...
[03:05:33] But I do want to talk about...  There's a few more things because...
[03:05:38] Thank you.
[03:05:39] Like...
[03:05:41] I guess I didn't give you guys a good invalidation example.  Can I do one right now? I'm just going to show you something.  So this is not solid start, but
[03:05:50] Um...
[03:05:52] Okay.
[03:05:54] Oh, actually, I want to go here.
[03:05:56] They want to sign in. Why am I not signed in?
[03:06:01] Thank you.
[03:06:02] Okay, let me look at my recent sandboxes here. I want to show you all an example
[03:06:09] here solid router next okay
[03:06:13] just the kind of
[03:06:14] show the power of
[03:06:16] route invalidation here because the one thing that might not be clear from
[03:06:20] from what I've been showing off today is that
[03:06:23] With data,
[03:06:25] with the cache APIs, you get automatic fine-grained updates.
[03:06:30] I made this silly app.
[03:06:32] And where's the console?  Is it?
[03:06:34] Here? Yeah.
[03:06:39] So you can like see loading, prefetching, and motion see?
[03:06:45] Fetching...
[03:06:48] Fetching user one, loading in, running.  I'm just kind of showing, like,  I made this example a while ago, but one of them,
[03:06:57] And I've showed this on stream before, but one of the more interesting things is how the new data APIs came in.  And...
[03:07:03] um,
[03:07:05] and
[03:07:07] I got a chance to basically define some actions. Of course, this isn't not using solid start, I was just hand showing it. So this is still like the bulkier way where this is what you do if you weren't using file system routing, where you define a few of your actions and caches here in the data function. So the code splitting works properly. And then you this is your load function for the route.
[03:07:25] Um,
[03:07:27] But what I was kind of showing is that
[03:07:30] you can kind of control what happens on the page a little bit.  Again, I don't know why anyone would ever want to do this, but in this example, I have Joey settings, and I'm going to click update to add explanation.  Joey's name did not update because I said revalidate none. If I do
[03:07:44] Nothing for revalidation right now. If I just leave it alone,
[03:07:48] We'll refresh the page.
[03:07:51] Right.
[03:07:52] Thank you.
[03:07:53] And I do the redirect and I go,
[03:07:57] You're going to see an explanation update on Joey's name because we update it.  We're just going to add another explanation mark and you see it updates, right?
[03:08:04] And if I do something like...
[03:08:07] Go here.
[03:08:09] and go here.
[03:08:11] you're going to see
[03:08:13] double explanation mark on the list.
[03:08:15] Thank you.
[03:08:16] But we could trick it a little bit, right?  You'd think.  What if we...
[03:08:19] caused
[03:08:21] we were here,
[03:08:22] And then we cause the user list to preload.  Then we click update and quickly switch it.
[03:08:28] Um.
[03:08:29] You know,
[03:08:31] This is why...
[03:08:35] Because these are two different caches.
[03:08:38] it's possible to kind of get around this, which might be why you would want to revalidate more
[03:08:45] than just
[03:08:47] Um,
[03:08:48] the one particular cash for this for this thing.
[03:08:54] that's or what's on the page so one thing we can do is we can say like let's re-invalidate  all the user ones because here we have users
[03:09:04] for this cache.
[03:09:06] And then I'm also using...
[03:09:09] For the top level data, where is it? User's data?
[03:09:14] I'm also using as the cache key because this is basically users with no arguments.
[03:09:19] And this is...
[03:09:21] users
[03:09:23] with arguments. Now, the thing is, if there was multiple and they had different keys, it's fine. We could stick an array here.
[03:09:29] Um,
[03:09:32] So what we can do is
[03:09:35] Joey.
[03:09:37] Settings.
[03:09:39] Hover.
[03:09:40] Update.
[03:09:44] And you can see that the exclamation mark
[03:09:48] propagated.
[03:09:51] So,
[03:09:52] I just want to do a little note about here.  The biggest thing is that generally speaking,
[03:10:00] We've removed the revalidate option again.
[03:10:03] The default behavior...
[03:10:05] I'm actually surprised that the default behavior didn't do what I thought it would do.
[03:10:08] because the default behavior actually
[03:10:12] should be the invalidate.
[03:10:14] Everything.
[03:10:15] Sorry. See, I have some problems with code sandbox, which is why I shouldn't demo it.
[03:10:22] What's going on? I wonder if I have an outdated, this isn't actually using the actual router directly.
[03:10:28] Oh, that's lovely.
[03:10:31] Basically, the default...
[03:10:33] um, behaviors, we revalidate everything essentially on mutation. Otherwise you can set keys and then you can also use a dummy key if you want to reevaluate nothing. Keep in mind the cache only lasts like five seconds. So this is mostly just around forcing preloads around navigations under different scenarios.
[03:10:52] But I just wanted to kind of show that
[03:10:55] You know,
[03:10:56] And you can always, if you're not sure what the key is,
[03:10:59] any cache API, like get user, you can go get user.key or key for and pass in the same argument again to get the specific key. So like if you want to know what, like what the key is for the specific ID, you can always go like, as I said, what is it? Revalidate.
[03:11:16] Um...
[03:11:19] get user dot
[03:11:21] Key for...
[03:11:24] whatever the idea is that you want to.  I guess it's the idea that's coming in from here. So.
[03:11:30] There is a...
[03:11:33] There's a lot of power in this API,  but my gut is most people are just going,  because it's just for preloads,  most people are just not going to bother to revalidate
[03:11:41] option and just let it do its thing.
[03:11:43] But I just wanted to show that there is granular invalidation.
[03:11:48] And that, um,
[03:11:51] You can do it either for redirects or reloads of the same page.  You can also throw a reload.  That's another thing that the router provides.  This is router based APIs.
[03:11:59] And know that the cache actually does data diffing. So it will only update like the use the store under the hood.  It will only update the exact field that changes essentially. So you don't have to worry about like things re-rendering even like you could.
[03:12:13] like I didn't show it in the to-do MDC example where I probably should have,  but like,
[03:12:19] when we are updating like
[03:12:21] text in the to do or whatever.
[03:12:23] It does...
[03:12:25] revalid, like send back the data for the whole to do list.
[03:12:29] But it only updates the one...
[03:12:32] field, essentially, because it automatically does fine grained updates.
[03:12:38] Thank you.
[03:12:40] Okay.
[03:12:50] So, yeah, this is essentially...
[03:12:57] the router piece I wanted to talk about.
[03:13:03] But yeah, let's talk about what's coming.  A couple things.
[03:13:09] People are probably, the number one thing you're probably wondering about is, can I go into this Hacker News example?
[03:13:14] Can I go in the vconfig?
[03:13:16] Can I go start...
[03:13:18] And then do something like islands.
[03:13:21] islands true and then it be basically like astro like can i just go
[03:13:26] Example with
[03:13:28] Example.
[03:13:29] Hacker News,
[03:13:33] And can this produce islands for me?  And then what do I do?  I go into...
[03:13:37] Locos 3000.
[03:13:39] Open my page.
[03:13:41] have it do full page navigation, but if I go into a specific story, this still works and is able to  only load the minimal JavaScript? Well, the answer to that question is yes.
[03:13:54] There are the island solution is still there. It's still considered experimental.  It works still about as good as it did before, except for literally
[03:14:01] Last week.
[03:14:03] something broke in the prod build.
[03:14:05] I will get this fixed before Solid Start Beta officially comes out.
[03:14:10] for Beta 2, but...  Or maybe not.  Islands is still considered experimental.  It's still there.  The Islands piece...
[03:14:18] So like Astro-like experience is...
[03:14:22] still there and is as easy as turning SSR on and off. You just go islands true.
[03:14:28] The thing is...
[03:14:30] we want to get something like server components. We want the hybrid router and that
[03:14:35] doesn't exist in this repo anymore, if you think about it, because the router does not exist in  this repo anymore. It makes absolutely no sense for this router, for us to actually have,  SolidStart actually have the kind of server components type stuff like the hybrid routing  with islands. So that's going to be in the router repo, and it's going to take us some time to port that over. But generally speaking,
[03:14:58] Uh...
[03:14:59] We're, Alexis is working on the island solution,  and we'll, we at some point in the future,  we'll update the router to support, um,
[03:15:09] support islands. Solid Start probably won't actually need
[03:15:15] much of a change. It'll probably need some stuff, but generally speaking, most of the work for that  is actually going to be in the router to get like the server component type stuff.
[03:15:25] Other things that are cool, even before we talk about hybrid routing and server components is that
[03:15:32] you know, like Remix, like TanStack, like all of this,  whenever we were doing mutations,  you saw there's two requests.  There's the post and then there's the revalidate.
[03:15:41] Because of what I was showing,
[03:15:44] in this example here, where we know what to revalidate,
[03:15:48] And we know what the next page is.
[03:15:50] and we know how to preload the next page,
[03:15:55] It's completely possible
[03:15:57] for us to actually
[03:15:59] return the data with the redirect on the next page.
[03:16:03] and basically do single flight mutations.
[03:16:06] without server components.
[03:16:08] Obviously, server components do that, and that's one of the benefits, but you could do this with pure JSON APIs in a spa.
[03:16:15] Basically.
[03:16:16] Um,
[03:16:17] We don't support that yet.
[03:16:19] But this is another reason why I like the API design,  handling invalidation through headers essentially,  like this response, is that we have the power here  to basically enable
[03:16:35] features that you can only get in stuff like server component architectures in your create  react app.
[03:16:42] server functions, server functions with single flight mutation and invalidation. This is,
[03:16:47] This is the power here.  If you're not ready for SSR, it is a switch,  but sometimes your libraries don't work properly with SSR.
[03:16:55] Don't worry, you're not going to miss out on anything.
[03:16:59] You know, you're not ready for islands and reducing the JavaScript or hybrid RC stuff, whatever, you know.
[03:17:05] You can still use suspense and stream on the server.  You can still, you know, have progressive enhancement, you know, like,
[03:17:14] work with no JavaScript.
[03:17:17] This is all progressive.
[03:17:20] This isn't like you have to buy into a single solution,  because that target is always moving.  We just gotta make sure we're building the right pieces  to enable people to do what they need.  I'm not gonna pretend like I know  what that final product is completely.  I have good ideas, I've put a lot of work into this,  but I am not here to sell you a product
[03:17:39] If you want to know what maybe the fundamental difference, maybe this is why SolidStart is where it is today, what it's like is,
[03:17:45] We aren't one of those VC startups.
[03:17:49] You know, like...
[03:17:51] This is a different perspective.  I...
[03:17:56] And the team working on Solid care deeply about enabling you to build
[03:18:02] the best possible app you can build.
[03:18:04] And if that means using solid, that would make me very, very, very happy.
[03:18:08] but I'm not here to sell you a product.
[03:18:13] Thank you.
[03:18:15] Thank you.
[03:18:17] Thank you.
[03:18:18] Sell us a lifestyle.  I was thinking the same thing.  I like that.
[03:18:23] Right? So what is solid start? Solid start? Yeah, solid is a lifestyle, not a product.
[03:18:33] Thank you.
[03:18:36] It's true, he makes it so hard.
[03:18:41] I know it's taken a long time in beta and we're not even out of beta.
[03:18:45] But like, let's face it, Next13 was a beta. The whole year was a beta. So we've all been there.
[03:18:51] Right?
[03:18:57] Like things are changing, stuff's hard to get right.
[03:19:01] I don't even know if we're 100% right here.  I just know...
[03:19:04] that
[03:19:06] that like the potential and the direction
[03:19:10] seem to be aligned and we're at a place where I think it's reasonable to say like, yeah, this is good.  We can put a stamp on that.
[03:19:16] Right.  Um,
[03:19:18] Like there's so many features I can think of that can be built on this base.  Another thing we're missing right now is Git for server functions.  Like sometimes like hashing works better with Gits on server functions.  We could...
[03:19:30] It's completely doable with the APIs for the serve function to have like a .get
[03:19:34] and then like change it to get requests.  We just have to like handle it properly and solve a start.  What else?  Tour side-person caches.  This cache is the router's cache version  and that it is for preloading and simple.  But like, what if we wanted cache to go to like,
[03:19:49] I don't know, like,
[03:19:50] CDN, like we wanted like to cast sections of our markup or something.
[03:19:54] you know,
[03:19:56] I've been working with the team at Netlify
[03:19:59] looking at what's possible there for, um,
[03:20:03] for static partials.
[03:20:06] these are infrastructure questions.  And the thing is,
[03:20:12] We, you know, we got to kind of like
[03:20:14] weigh in and figure out like what the best
[03:20:18] a way to approach these things because like the truth of matter is the end of  the day,
[03:20:21] I was talking about the VC thing. I do work at Netlify, just like full transparency here, but like
[03:20:28] I'm not going to release something that doesn't work
[03:20:31] on everywhere that could support it.
[03:20:33] I'm not going to go like, "Okay, here's the new version of SolidStart."
[03:20:39] This only works on Netlify.  I mean, if that's a limitation, it's going to be because we haven't
[03:20:44] Like, no major feature is going to roll out like that.
[03:20:48] Because like,
[03:20:50] It doesn't make sense.
[03:20:53] So I think
[03:20:55] I think that's why async local storage took us so long to get these APIs.  The reason server functions work so nicely is that inside any server function, you just go request...
[03:21:04] get request event and that works. Our old server dollar signs had to pass the event through because it was really awkward to actually pull it off without async local storage.
[03:21:16] I mean, our timing is pretty good now because we...
[03:21:21] It's supported now in every single platform pretty much. And that's when we ship, right? It's supported on Netlify.
[03:21:30] functions, Netlify Edge, for cell functions, for cell Edge, Cloudflare, Dino,
[03:21:35] I gotta thank Nex for that, to be fair.
[03:21:38] because they push the gambit, but where we are, we don't get to push the gambit.  So it's a careful balance.
[03:21:45] Thank you.
[03:21:48] Well, that's the whole thing. Solid start. I told you at the beginning of the stream,
[03:21:52] that I wanted to give people the building blocks
[03:21:57] for their meta framework and not tie them down to any particular thing. Like if you really like Tanstack, go ham. Tanstack time.
[03:22:05] And that's why
[03:22:08] React, historically, has prided itself on being that composable piece thing.  I think we're better at it.
[03:22:16] like things like Create T3 app
[03:22:20] Think of what they have to do for next.
[03:22:22] Create T3 app.
[03:22:24] And things like that in the future,
[03:22:26] Like that's what I built SolidStar for.  Everyone can build their own Crate T3 app.
[03:22:31] Maybe not everyone. It takes a bunch of work. But do you understand what I'm getting at?
[03:22:38] Thank you.
[03:22:43] Thank you.
[03:22:45] Thank you.
[03:22:50] *Sigh*
[03:22:54] That's interesting.
[03:22:55] Thank you.
[03:22:56] So, function versioning is an interesting question on its own.
[03:23:01] I guess this is the biggest problem with like deployed apps that have like existing long live sessions.  Because like GraphQL, the funny thing I'm going to say about server function versioning though is GraphQL is,
[03:23:13] Thank you.
[03:23:14] Yeah, I'm actually kind of surprised this is a thing. Someone's going to have to explain this to me. Because like GraphQL also had the criticism about server function, you know, versioning. And the thing is, when you're building apps that deploy and you control both sides, and they deploy as a single unit, it's like, the only reason things get out of sync is that the person's client is out of sync.
[03:23:34] Otherwise, server function versioning is not a thing. So it's only if you have
[03:23:39] something that's like
[03:23:41] Yeah.
[03:23:42] I guess the question is,
[03:23:45] What should happen?
[03:23:48] Because if server functions produce stable hashes, like they have the same URL,
[03:23:53] then you're right, this becomes a problem.
[03:23:56] This is a good question to look into.  I can see that.  If server functions...
[03:24:02] Yeah.
[03:24:04] This is a fair question.
[03:24:06] I guess because the thing is like what happens you do the deploy and the person's like still got the website open?
[03:24:13] Like, after...
[03:24:14] they refresh the page or 30 seconds when you ping or whatever.  This is not a problem anymore.  But like at the exact moment deploy, there's an issue.
[03:24:24] Versioning with headers seems reasonable.
[03:24:27] But that puts onus on the end user to do that.
[03:24:37] Thank you.
[03:24:39] Yeah, yeah. Old client is another thing. PWAs are still a thing. I think I watched a stream somewhere where someone was telling me like they asked if PWAs were still a thing. They're probably still a thing.
[03:24:51] But yeah, versioning and headers is a good idea.  I mean, you have full access...
[03:24:59] to
[03:25:00] to the headers
[03:25:03] I mean, this redirect mechanism is like the direct thing.
[03:25:07] But...
[03:25:09] you.
[03:25:10] you either redirect or whatever with the headers here this is actually a response in it option like  like there's
[03:25:18] headers like
[03:25:19] Yeah.
[03:25:20] Or...
[03:25:21] You can literally use your H3 stuff here like I was talking about before. You have access to H3 in here so you can basically set the headers on the response on whatever you return.
[03:25:32] So you could definitely...
[03:25:35] You could definitely set headers.
[03:25:38] That is on you, though.
[03:25:40] I could see where it might be interesting to try an auto version, but I'm not sure how I'd do that on a framework level.
[03:25:46] I mean, I could think of ways, but I'm
[03:25:48] I don't know if you guys would want me to do it.
[03:25:54] Yeah, middleware to roll, yeah.  Except version 1.
[03:26:00] Thank you.
[03:26:02] Thank you.
[03:26:06] Yeah.  Are they handling on Vercel's side?  Or are they like...
[03:26:12] - Thank you.
[03:26:13] Or are they like...
[03:26:14] Thank you.
[03:26:15] Just showing you...
[03:26:16] best practices to handle it. Because like, you do have control of the request response in the middleware there. So like,
[03:26:22] There's an easy answer being like,
[03:26:24] Here's how you do it and get you to do it.
[03:26:27] It's very different than the framework handling it.
[03:26:40] I mean, that's fair too.
[03:26:48] Yeah, so this is like an infrastructure solution.
[03:26:53] Yeah.
[03:26:55] Okay.  I mean, that's...
[03:26:57] Great for them.
[03:27:02] I think it's
[03:27:03] I think it's interesting. I mean, it's funny.  I mean, similarly, Netify, you have those deploys like forever.  So maybe...
[03:27:11] Maybe it can be handled, but then all you have to do is you have to make sure that every build gets a build ID.
[03:27:18] kind of fed into the
[03:27:21] the URL somehow.
[03:27:23] That's interesting.
[03:27:26] Thank you.
[03:27:27] Okay. But that's like a very infrastructure-y kind of solution that only works on both sides.  Man, I don't know how Next does it sometimes, because it's like the decisions they make would like only work on Vercel or unless someone tries to copy what Vercel is doing, which is great because it gives them like this incredible power of like uniting these two pieces, but it's like a different type of lock-in, which is fun.
[03:27:48] Again, fine, but it's like...  It makes it very hard for...
[03:27:52] like everyone to use it in the same sort of way.  Like,
[03:27:56] like
[03:27:59] It's interesting when all those pieces align like that. It's like it's
[03:28:04] It allows them to do stuff...
[03:28:06] easier in certain ways,  but it also kind of makes it like,
[03:28:12] That can never be the standard way of doing things.
[03:28:16] Yeah, it's a tricky one.
[03:28:19] Thank you.
[03:28:20] Thank you.
[03:28:21] Yeah, I mean, that's the thing. If you change the data and the function tries to access, like at some point,
[03:28:26] the secret, like the party's over, right?  If the reason that you have a new version of the server function  is because you did a database migration, well...
[03:28:35] Yeah.
[03:28:39] Does anyone actually believe that?
[03:28:42] I'm sorry, like, that is a joke, right?  Like, I get it, but, like, not really, like...
[03:28:50] Like, they don't have Vercel representatives actually saying this, right?
[03:28:56] Like being like, or next, people working next to me like, like,
[03:28:59] it
[03:29:00] The next JS that gets sold is not the next JS that works everywhere.
[03:29:07] Like,
[03:29:08] you have to be like smoking some pretty hard stuff to take this line seriously.
[03:29:20] Thank you.
[03:29:21] You have to find runs.  Yeah.  I mean, it does run, right?  Like, I mean, I guess the thing, it's like progressive enhancement.  Like, certain platforms have features that don't.  The problem is, like...
[03:29:31] I literally, you could just open up their docs or something and pick, or their releases and just pick a feature.
[03:29:37] what's the last big feature they released?  And let's see if that runs on any other platform other than
[03:29:42] next on Vercel.
[03:29:45] What did Next 14 release?
[03:29:50] Like, I'm so confident that, like, literally everything is perfect.
[03:29:54] Like...
[03:29:56] Uh, d-d-d.
[03:30:00] What do we got here? Okay, it's partial pre-rendering.
[03:30:02] I bet you that doesn't run on anything but Purcell.
[03:30:08] Okay.
[03:30:13] I mean, I think there's a certain amount of this, like, we have to view different platforms, kind of like we used to view browsers in the past.
[03:30:23] But like,
[03:30:24] It's...
[03:30:24] kind of hard work.
[03:30:28] It's kind of like...
[03:30:30] I can't even think of a good historical reference to it, but it's kind of hard.  Like when not all platforms are equal or they do the same things, but like slightly differently.  And then you make a framework and you work at the one on the one platform and they fund the development of that framework.  And then you're like.
[03:30:48] Well, I'm gonna add this feature I want.
[03:30:51] I'm going to make it for Vercel.
[03:30:53] And no one else.
[03:30:55] and then be like,
[03:30:56] Well...
[03:30:58] You know, Vercel supports it. Others don't. But it's understandable. This is a thing that Vercel has specifically.
[03:31:03] But if you don't make the effort to go to the others and develop the same feature and just say, oh, you could maybe implement it.
[03:31:11] Like, you know what I mean?  Like, I mean, it'd be like if...
[03:31:17] Like, if the Angular team...
[03:31:19] And this is not even good, but like they work at Google.  So they're like, yeah, this feature works in Chrome.  We're going to say like, you know, maybe you can figure it out for Firefox or Safari, but yeah, check out Angular because of this feature that only works in Chrome.
[03:31:35] Yeah.
[03:31:42] Thank you.
[03:31:45] Thank you.
[03:31:48] Oh, next server actions too.
[03:31:54] Thank you.
[03:31:55] Yeah, okay. So...
[03:31:58] Yeah.
[03:32:00] It doesn't take looking very far to be like, yeah,
[03:32:05] I mean...
[03:32:06] It's fine. People can make their own... I don't have to be too heavy-handed here. I think people  can clearly make their own judgment on how important that is.
[03:32:15] But...
[03:32:19] Thank you.
[03:32:20] Thank you.
[03:32:24] Thank you.
[03:32:25] Yeah, I mean, it can. It can run.
[03:32:30] Is that the next JS I'm excited about?
[03:32:36] So,
[03:32:38] Thank you.
[03:32:41] I think there's going to be more of this in the future, which means that it's more and more important.
[03:32:46] that we find
[03:32:49] ways to align and winter CG tried but it kind of failed a bit. I think Guillermo put out a post
[03:32:57] about about web standards and winter CG. I think we we we looked at it on stream.
[03:33:02] Right? He...
[03:33:03] Not this, where is it?
[03:33:06] Is it bookmarks?
[03:33:08] Do we look at, we looked at this on, no, no, no, no, no.
[03:33:12] We'll get to that.
[03:33:13] We still have this week in JavaScript, but I think we looked at it on stream.
[03:33:17] Web API only which is viable.  It's not node as a true standard.  Okay, sure.  But like the extension of it was like,  when they introduced async local storage,  which again, thank you,  because now I can use async local storage.
[03:33:30] it kind of got strong armed in.  It wasn't a standard.  And then it was like,
[03:33:34] That's what Dino and everyone got really upset about, because they were like, "Okay,
[03:33:38] Next version of next.  And they're like, yeah, we're standards plus.
[03:33:42] *sniff*
[03:33:44] The thing is, it's reasonable to be standards plus when the platform doesn't support the thing you want to support. It's the reason we have frameworks and we don't all use web components.
[03:33:54] Right?  It's just...
[03:33:57] You have to...
[03:33:59] be aware of it. And now we're not just talking about what JavaScript library you're using,  we're talking about what infrastructure you deploy on.
[03:34:07] This is no longer a choice that only impacts
[03:34:11] Like...
[03:34:12] How you...
[03:34:14] Like,
[03:34:16] Thank you.
[03:34:16] things you can use to build your app. This affects where you spend your money.
[03:34:23] So,
[03:34:24] Yeah, I mean, I don't know how far we want to go down this rabbit hole. I just want to
[03:34:28] Like...
[03:34:29] Like...
[03:34:30] It makes sense.
[03:34:32] I think Next is doing incredible things in this space.
[03:34:37] Right? It's just like...
[03:34:41] Thank you.
[03:34:42] Like there is a trade-off.
[03:34:48] Okay.
[03:34:53] Thank you.
[03:34:57] Thank you.
[03:35:00] I think it's cool. Like from a startup VC standpoint too, it's like they have a product, right? Like,
[03:35:06] G-
[03:35:07] The only part that's always tricky with this is you've got to...
[03:35:13] *sniff*
[03:35:13] It's
[03:35:15] It's hard not...
[03:35:17] to be
[03:35:18] like a little defensive and be like, look, look, we do run on everything.  We don't care that others can use us, but like, obviously we're going to optimize for ourselves.
[03:35:26] Like, that's perfectly fine. It's just like when the messaging doesn't reflect that, you know, kind of like,
[03:35:31] Ooh, like, do I believe you?  But I have a problem with marketing in general.  Don't listen to what I say.  This is why Dave can't market solid.  Every time he says something that's even like white lie-ish, I'm just like, no, that's bullshit.
[03:35:43] And, you know, that's why I'm not a marketing person.  So...
[03:35:47] If I'm critical here, you know, take it for take take that for what it is.  I don't.
[03:35:52] I don't, I don't, I've done this with JavaScript frameworks too.  Like you could tell, like, it's like, it rubs me the wrong way.  Like everyone's felt used to call themselves disappearing.  And I'm just like.
[03:36:03] It's war.
[03:36:05] Like...
[03:36:06] You know?
[03:36:08] Thank you.
[03:36:09] Thank you.
[03:36:10] Thank you.
[03:36:11] Bye.
[03:36:13] *sad music*
[03:36:16] Okay.
[03:36:18] Thank you.
[03:36:19] That's not how the world works. People want to hear nice things. Swix had this post where he talked about the 30 things he learned at 30 or something. And he was like, people don't want to necessarily hear the truth. And I was just like...
[03:36:35] No, but he's right.  Swix is right.  It's just like...
[03:36:40] That was really my problem when I first joined Twitter.  I'd just be like...
[03:36:45] I just feel like,
[03:36:46] I wasn't in even a harsh way, but I just feel like, look, let me help you question what you think you know.
[03:36:53] Let's just open it up.  I'm not saying you're wrong,  but let's expand our viewpoint to consider more options.  And people are just like,
[03:37:03] Like, ups angry about it.  I mean, it's Twitter.  Of course, they're angry about it.  But, like...
[03:37:09] Yeah, anyway, enough talking about me.
[03:37:14] Thank you.
[03:37:15] I can't even remember why we were talking about...
[03:37:19] about next.
[03:37:21] Walk in.  I, but yes, I, I, I.
[03:37:25] I'm excited about these primitives.  I want...
[03:37:28] The next person who goes out and goes like, I'm making a Crate T3 type of app, to see that Solid is the best platform to build upon from that perspective.  Between Solid.js, Solid.start, all these pieces.
[03:37:40] I know we can't give you the product.  We don't, products take time.  That's where like,
[03:37:46] 80% of the effort is, you know, like all the work is actually delivering the real thing.
[03:37:53] But it also perfectly skews...
[03:37:56] with
[03:37:57] the resources we have.
[03:37:59] you know, build the tools,
[03:38:02] Other people can do the amazing things with them because you,
[03:38:05] There's a lot more of you than there is of me or David or McKeel or Alexis or Milo.
[03:38:12] You know, um,
[03:38:15] Thank you.
[03:38:17] like solid core team appreciates it there's even going farther a bit further than the ecosystem you  know
[03:38:22] people like Fabian, people like Joe, people building these amazing libraries.
[03:38:31] You know.
[03:38:34] Eh.
[03:38:35] So, yeah, I mean, I get very excited when I hear about people doing the real work, like Brendan, who migrated like three giant 300 route.
[03:38:45] apps
[03:38:46] like type I think he's I should have added all the routes together.  I think he's probably migrated something like
[03:38:52] 800 pages to solid from react like that's that's the real work what what i'm doing is this is it's  small by comparison you know so
[03:39:03] Yeah.
[03:39:04] Thank you.
[03:39:05] Yeah, yeah. And now I'm glad other people are seeing because we're starting to get more representation like on the DevRel side on people who actually talking about solid and educating people about solid. Amazing recent talks by and, you know, the video by Attila.
[03:39:22] Daniel and Eric...
[03:39:29] Can't say his last name, Raz.
[03:39:32] You know, like just seeing that spread out, you know.  So, I mean, these are all things that...
[03:39:38] are amazing that go beyond the boundaries of like
[03:39:42] you know, what we just do here.
[03:39:45] Yeah, I agree.
[03:39:51] Thank you.
[03:39:53] Yeah, yeah, yeah. Yeah, yeah, yeah. That's my point.
[03:40:04] From that perspective, I don't think what we do on Solid is that...
[03:40:09] you know, exceptional or whatever, because like literally
[03:40:14] The hard part is building the actual apps and maintaining them year over year.
[03:40:23] And in doing that, I'm very blessed to be doing what I'm doing. I've worked on product teams for like
[03:40:29] I don't know, 15, no, 17 years of my career was working on product teams.
[03:40:35] building products, you know,
[03:40:38] Thank you.
[03:40:39] Thank you.
[03:40:41] So, I didn't even get to give my rant about waterfalls that I wanted to.
[03:40:48] Thank you.
[03:40:49] - Yeah, well we can do that.  We're gonna get into this week in JavaScript in a minute.
[03:40:53] But, um...
[03:40:55] Thank you.
[03:40:56] I do want to talk about waterfalls one more time.
[03:40:59] Theo was doing his JS survey and he was
[03:41:03] And he was trying to explain why waterfalls on the server
[03:41:07] weren't
[03:41:08] as big of a deal
[03:41:12] And I started realizing this whole alignment between that message and what has been going on with Next.js and RSCs and stuff, because it's kind of funny.
[03:41:23] is that
[03:41:26] I
[03:41:27] If you look...
[03:41:28] at the data fetching mechanisms that we've introduced
[03:41:31] and the new router that we introduced in Solid Start.  It basically has a lot of similarities with the stuff from the app router.
[03:41:38] And.
[03:41:39] you know, like the cache API. So this is all anticipating stuff like server functions in the future.
[03:41:44] But we still have load functions, which is
[03:41:46] kind of odd, because you could be loading in the component.
[03:41:50] And
[03:41:52] I think we all can understand that when you fetch in the component,
[03:41:57] you open up the n plus one problem.
[03:41:59] and you open up the you know like when you fetch users and they all have their friends and you have to you know you end up
[03:42:06] having to fetch all their friends, you know, so that's like,
[03:42:10] If you had a list of 10 users and they each have 10 friends, you end up with a hundred requests.
[03:42:17] But, you know, we've always had that on the client, and we've known the answer to that is simply hoisting it.
[03:42:25] things like GraphQL let us do it for us.  The interesting thing is before...
[03:42:31] I worked.
[03:42:33] On...
[03:42:34] Solid start.
[03:42:37] before I worked on Solid.js.
[03:42:40] Mm-hmm.
[03:42:41] Back when I was working on one of those product teams,
[03:42:45] I...
[03:42:47] It's working on an ORM.
[03:42:49] People don't know this about me, I guess. I was working on a project called Backbone ORM. You could probably search it up and find it. And the public open source version doesn't have all the magic I was doing. This is how I got good at compilers.
[03:42:59] I was compiling JSON into SQL queries using Mongo type syntax and supporting things like relational database queries and joins and stuff.
[03:43:07] And the reason I did so much work there is because
[03:43:10] I was trying to avoid server waterfalls.
[03:43:13] from an ORM standpoint.
[03:43:15] because it was actually causing performance issue
[03:43:18] The company.
[03:43:21] And this wasn't anything special. This was just like AWS deploy between servers. It wasn't even like
[03:43:28] you know, crazy. It was just the fact that
[03:43:30] This was actually the problem space that I had to work in.  And I did a ton of compiler work.  I didn't use Babel at the time.  I was just generating ASTs myself and doing these transforms.  And I think anyone who's actually lived in that world knows that server waterfalls are real.  And while some are unavoidable...
[03:43:50] Um,
[03:43:52] you would want to award them if possible.  They're not as bad.  What's a latency on a server request to a database?  Well, for us back in the day,  it was between 30 to 60 milliseconds.
[03:44:03] Which is a lot shorter than the 200 millisecond round trip that we'd have from the client.
[03:44:12] Right.
[03:44:13] And...
[03:44:15] What I'm trying to get at here is like, there's obviously different scales there, but if you can avoid
[03:44:24] waterfalls and you can't completely on the server. I think people take it for granted, right? Because you like
[03:44:29] off. You have to get the user before you do the next thing. Like there are a bunch of
[03:44:33] those inherent waterfalls that you can't
[03:44:36] avoid, but why welcome the ones you can't? I think where this gets really interesting
[03:44:41] is if you kind of just give up on the waterfalls and just assume that like the app complexity is too
[03:44:47] hard and that people you know just use a cache and hope it gets there which is a fair um you  know in a lot of cases like you'll probably be okay as long as that latency you know
[03:44:58] is manageable, but every waterfall you can save there makes considerable noticeable difference on your on your page.  That's why, you know, big companies ultimately get to a point where they're combining requests together, things like GraphQL.
[03:45:11] or server equivalent protocols that let them do this.
[03:45:16] And
[03:45:17] It's interesting to me because we've been working so hard the last
[03:45:21] year or two to go to the edge.
[03:45:24] But the data can't come with us.
[03:45:26] So,
[03:45:28] When you deploy...
[03:45:30] stuck to the edge.
[03:45:32] That distance latency might be closer to a client latency than...
[03:45:37] than a server latency.  So if your goal is to go,  "Hey, I'm gonna deploy my stuff to the edge in the databases,"
[03:45:44] Server waterfalls definitely make a difference.
[03:45:47] Right?
[03:45:51] Thank you.
[03:45:55] And funny, Dave, you actually posted it. Yeah, it's a real thing.
[03:46:03] Um...
[03:46:07] Well, I mean, is that is that what the thing is like?  Everyone's like, oh, we'll get edge databases.
[03:46:12] But like partial pre-renders, I think that feature is kind of tied to this kind of mentality because
[03:46:17] Yeah.
[03:46:18] That initial sendback without the suspense...
[03:46:22] Yes, sending it from a CDN is fast, especially one on the edge, fast.
[03:46:28] But if you have to boot up the edge function,
[03:46:32] there's a bit of latency there. Not as much as booting up a server function, but let's say there's a little bit.
[03:46:36] And if you
[03:46:38] The difference between...
[03:46:40] sending it back from the CDN and the difference from booting up an edge function and then fetching it from the CDN
[03:46:45] and then sending it back.  I don't know if that, like...
[03:46:49] adds much or not.  But the time it takes to render the shell of a page,
[03:46:53] in client rendered framework.
[03:46:56] is
[03:46:56] I mean, it depends on how big the page is, but like my experience is, is very short.
[03:47:02] Like,
[03:47:03] Like,
[03:47:05] It depends, again, how big the page is, but if you're waiting on the data, we're talking maybe a couple milliseconds, maybe.  Like...
[03:47:13] The, like, it doesn't make a huge amount of sense, I think, unless...
[03:47:22] you're accounting for that you want to reduce the impact of the waterfalls because you instead put your renderer
[03:47:30] close to your database.
[03:47:31] you can waterfall as much as you want.
[03:47:34] short communication and then you send the final stream along
[03:47:38] to the edge and you only take the hit once.
[03:47:42] Which is pretty reasonable.  So like I feel like.
[03:47:46] This is sort of why...
[03:47:48] partial pre-endering is is the thing, right? It's it's kind of like
[03:47:53] It's kind of like, okay, yeah, what?  I mean, it's two problems.
[03:47:56] Edge is always going to have data problems probably because of GDPR and privacy considerations.
[03:48:02] Not all data will be able to go to the Edge.  And there's also support for, like, Node and stuff.  Like, can you use Prisma on the Edge?  I think I saw when I saw Prisma 5 that, like, the...
[03:48:11] They enable it.
[03:48:13] But the other side of it is simply the fact that if your architecture promotes waterfalls on the server,
[03:48:21] then it's not really a winning game to...
[03:48:24] Push.
[03:48:25] the server to the edge.
[03:48:28] Like you're, that's where that cost will actually matter.  So it's good.  Instead, have...
[03:48:36] Two...
[03:48:38] server function instances.
[03:48:40] and distribute the work, which I think makes a lot of sense.  I don't know how that applies to cost or anything, but it is interesting to me.
[03:48:48] Like there's different types of solutions to a problem.  There's like the solve it using engineering, right?
[03:48:55] Or...
[03:48:56] like solve it by changing
[03:48:59] like,
[03:49:00] changing what you're doing. And I think that kind of thinking out of the box is actually really good in general. It's just
[03:49:07] Sometimes you can be pragmatic and solve stuff anyway.
[03:49:12] Thank you.
[03:49:13] Thank you.
[03:49:15] or not deploying on the edge.  Yeah.  The funny thing is,  before I was ever deploying on the edge,  server waterfalls were a problem.
[03:49:23] Like, I mean, yeah, not everyone writes an ORM, so like, you know, like, that's probably not like what they're thinking about.
[03:49:38] Yeah, and automating the generation of that, right?
[03:49:44] Thank you.
[03:49:48] Thank you.
[03:49:50] Thank you.
[03:49:51] The problem is to find a data-friendly application inside UI. It's the wrong place to do it, but people do it because it's easy to just stuff everything inside a React component, but it's bad. Yeah.
[03:50:00] Okay.
[03:50:02] Thank you.
[03:50:05] Yeah, people, not everything runs on the edge. But I mean, I'm not willing to give up the edge for that reason. Like, every day we get more APIs and more capability. We just, it's not there yet, you know. And this is so funny, because I'm like, am I taking the standards?
[03:50:20] Position...
[03:50:21] Here,
[03:50:21] Like, I'm usually the guy who's like, yeah, standards aren't moving fast enough for me.
[03:50:27] But...
[03:50:28] I think the difference is, is when you work in the browser and the standards aren't working fast enough for you, you just build something better on top of it.  You don't go...
[03:50:36] well, the way that we did it before differently is better.  Like, you know what I mean?  Like we don't just go back and say,  yeah, no, it's the way to go.
[03:50:45] That's not the solution.  That's pragmatic.  That's practical.  But that's not a direction for the future.
[03:50:52] We know why
[03:50:55] We want Edge to be good. We know why we want these web APIs.
[03:51:00] It's not practical today. You know, it's kind of like,
[03:51:04] in some people's view
[03:51:06] I use React today, solid's not ready.
[03:51:12] And I'm not saying React won't be good in the future. I'm not saying Node won't be good in the future.
[03:51:18] But there's a certain pragmatism to choosing the solution.  But that...
[03:51:23] can't be where things stop.
[03:51:25] because we already know that there's benefits of going the other way.
[03:51:33] Thank you.
[03:51:35] Thank you.
[03:51:37] You guys are having too much fun.  Server components, SQL queries between server components.  Yeah, let's just store them in the database.
[03:51:48] It's funny I'm like saying this joke but then we'll like find a use case next week for this we'll be like.
[03:51:53] There, that's how we solved our versioning.
[03:51:57] Uh...
[03:52:05] Yeah. All right. All right. All right.
[03:52:11] So,
[03:52:12] Yeah. Um...
[03:52:15] Thank you.
[03:52:17] I just wanted to rant a bit about waterfalls because...
[03:52:21] Yeah, obviously server waterfalls in theory are not as bad as client waterfalls.
[03:52:27] We know this.
[03:52:30] But like...
[03:52:32] It's kind of like
[03:52:33] Why even invite people?
[03:52:35] this situation in the first place.
[03:52:39] I mean,
[03:52:42] I like that next docs actually show the pattern for preloading.
[03:52:47] Next cache preload. Like if I do something like this,
[03:52:52] And look here, they actually have like a...
[03:52:54] best practice or data fetching or whatever. There's like an example where they show it  exporting the server function and then like using it in a
[03:53:03] like exporting and
[03:53:05] the whatever you're going to await, and then using it.  I don't know where it is.  It's somewhere in here.  They have an example that actually...
[03:53:12] Yeah, here.
[03:53:13] Where they're like,
[03:53:15] What if we make our cache function and then export a preload function and then call that higher up in the route tree?
[03:53:22] That solves the same thing. If you look at this, this is the, this,
[03:53:26] This is like the API that we use for the new router.
[03:53:30] Right.
[03:53:32] So,
[03:53:33] you know.
[03:53:36] Seems reasonable. Like there are paths forward, but it's almost like the resistance for people to like,
[03:53:42] push this as a standard or do it,
[03:53:45] is because they need those demos to be really hot, even though it doesn't scale.
[03:53:55] Oh, sorry, yeah, you're right, I stopped sharing my screen.
[03:53:59] Yeah, I'm talking about this.
[03:54:03] the...
[03:54:04] the example of them using the cache API with the preload and whatnot.
[03:54:11] Thank you.
[03:54:13] Thank you.
[03:54:16] I think my wife's telling me something.
[03:54:23] Thank you.
[03:54:30] Yeah, I said this earlier in the stream, beta two,
[03:54:34] is imminent. I just  gotta decide which bugs are...
[03:54:40] worth squashing before I make it official. Don't get me wrong, this is going to be a release that breaks things. The router was a release that changed things too. We put the RFC up forever, not forever, but for a while, we worked through it, and I did the exact same approach with Solid Start.
[03:54:58] Um, there's a PR that is just sitting here, um,
[03:55:01] ready to get merged. I got to get this in first probably. But like, you know, there's hundreds of commits here, it changes everything new docs, there's so many changes that honestly, and I hope you guys have, like, my understanding here, I'm probably going to close every issue on the solid start repo, because almost none of them are relevant, because either the stuff has been moved out of solid start, or
[03:55:23] Or it's so like into another repo, if it's relevant, or it like just doesn't apply because now it's like Nitro or Vinci and it's not what we're doing anymore. Like all the CSR stuff doesn't make sense. All the adapter stuff doesn't make sense.
[03:55:36] Um,
[03:55:38] I could release it today if I wasn't streaming, but it looks like, like, you know, I'm, I always want to make sure that there's, you know,
[03:55:47] you know, a few less bugs, you know, so to speak.  We're also, which gives me to talk about the gaps.  I need help with TypeScript.  If you guys like TypeScript,
[03:55:58] Solid Start is still using its weird
[03:56:00] at build time approach where it's not like pre-type scripting,  which pisses everyone off, but it was easy to develop that way.
[03:56:06] And the stuff that's like server only is often JavaScript.  And then the stuff that's shared is TypeScript.
[03:56:14] or like sort of client like runtime only as TypeScript,  but I'm missing types.  Stuff is bad.  It's passing the type check, but I,
[03:56:21] And as a user, I don't notice the type issues, but I'm probably not a very power user. Someone needs to vet the TypeScript. I think that would help get SolidStart out, beta2 out.
[03:56:41] we need to probably start a new docs effort.  The current docs...
[03:56:44] I mean, I showed them off today. They're there. This will work.
[03:56:48] But yeah, feature-wise, I'm happy for this to be where we're at. Obviously I'd like to fix the islands, but islands are still experimental and we have more work to do there.
[03:56:59] SolidStore Beta 2 is ready to go because I want to push this. I want us to, over the next few months,
[03:57:05] really worked getting solid start version one out of the end of Q1.  I think in the next couple of months we know, like I already feel confident.
[03:57:13] from the pieces we have. This is just bug fixes and
[03:57:16] you know, a chance to hear from people using it about all the stuff that I didn't think about when doing this.  I just feel a little bit more confident this time because this is like our third time doing it.
[03:57:28] Thank you.
[03:57:29] Thank you.
[03:57:34] Thank you.
[03:57:36] Never release on the Friday. That's the other thing too. But the other similar thing is, do you ever release the week before Christmas?
[03:57:44] Like, I wanted to, not lie, I wanted to do the stream last week and I wanted to release this week.
[03:57:50] I've learned a bunch of stuff. It's good. It took time. I realized that the routes weren't being handled properly with performance issues, route freeloads. I learned that the deployments weren't working properly with async local storage across all platforms. I worked with the Nitro team to do that. I put two PRs into Vinci to fix some other bugs. I've been busy on like...
[03:58:11] you know, really testing out the platform under SolidStar.  Because, like, when I'm building the features,  I'm, like, just doing it locally.  So it's, like, really easy because it's, like, you know,  works on my machine, right?  But this last week was really a time to start, like,  doing the preliminary, you know, works on your machine.  And I think that...
[03:58:30] you know,  there's going to be more stuff along that line.
[03:58:35] Thank you.
[03:58:36] Yeah, I'm sorry, the router changes probably caught you off guard. I'm like, yeah, so those are that router RFC that I've been floating around for the last month, I implemented it finally now. And you're like, so yeah, we have to update docs. I'm like, yes, there is a lot of docs changes. And you're like, what, when, when, when, when are you releasing? I'm like, probably in like, you know,
[03:59:00] two days or a few days.  And yeah, sure enough, like, I think I told you on Thursday and released it the next Wednesday.  It's like less than a week.  That's just not fair.  I'm sorry.
[03:59:09] Yeah.
[03:59:11] Thank you.
[03:59:12] At this point, try it on new projects. I think we're there. I think you can install it at npm init or pmpm create solid at beta and just give it a shot. That's where we start to find bugs. I think we're kind of feature repeat. We just got bugs. I'm close enough. I just know about a couple bugs, so I want to fix them. But I'm close enough just to pull the trigger on this and start working on it Monday morning.
[03:59:41] Thank you.
[03:59:43] .
[03:59:43] Always quit your job on a Friday.
[03:59:48] Thank you.
[03:59:50] Thank you.
[03:59:52] Thank you.
[03:59:56] Yeah, exactly. That's why people are like, yeah, you
[04:00:00] at least after Christmas, because you don't want to be on the hook for people.  Because this is the tricky part is like I changed the router.
[04:00:05] People can still use the old version of the router, but everyone wants to get very angry about like,  how I broke all their apps. And it's just like, fix the version, like,
[04:00:14] I showed you today.
[04:00:16] Other than one thing that I gotta go fix, you know, there'll be like a solid router 9.2 or whatever.  Um...
[04:00:22] SolidStart and the old router also work quite nicely together. Right? So, um...
[04:00:31] You know, it's okay.  We're not always on the front of the...
[04:00:34] front of the update curve.
[04:00:37] I,  it's funny.  I'm very slow to do releases from the sense of like,  I really care about Semver and I want to make sure that's 1.0 and do all  this.  So I'm very careful.  But when it gets to the last,
[04:00:47] midnight hour, I am very much more tempted to just get it because the longer I have to like
[04:00:53] find more bugs and just not just push it out, then it never gets out.
[04:00:58] So I'm...
[04:00:59] I'm at that point where it's like,
[04:01:00] It's been a long time.
[04:01:08] query parameters and where you can get it off the route or you can get it off the API event.  It's like in the... Yeah, I...
[04:01:17] Although I think the APIs were missing that until last week.  I think we're in a good place now.
[04:01:23] Yeah, if anyone's interested,  reach out on Discord.  Definitely, definitely.
[04:01:31] Sounds like an RPG. That's a problem. I've had to learn how to turn off. It's challenging.
[04:01:39] Do you expect people to build meta meta-framings to tell us all start? 100% yeah I said this a little bit earlier in the stream. This is my expectation.
[04:01:49] Um...
[04:01:52] I wanted to make sure that the pieces are low level enough that yeah,
[04:01:55] This...
[04:01:56] I, I, this is, this is what I expect.  I, the, the, the problem we're trying to solve here is that Vite isn't quite enough to do  SSR for your specific framework.  Yeah.
[04:02:07] You can't just like webpack config it.  You need like a little bit more.
[04:02:11] you know, with modern things.  I showed you in real time as I went through  how hard it is to do it manually  and what Solid Start enables for you.
[04:02:18] Like, so this isn't necessary, but beyond that,
[04:02:21] I'm not the guy who...  I don't want to be like...
[04:02:24] To use Solid, you should use a meta framework. Use...
[04:02:27] You know, blank, blank, or blank.
[04:02:29] That is not us.
[04:02:31] In a sense, I'm telling you all that you saw at Start.
[04:02:35] But
[04:02:36] I've tried to make solid start
[04:02:37] as unopinionated, as low level as I possibly can
[04:02:41] so that there's no friction there.
[04:02:43] The reason it starts on CRA like it did is
[04:02:45] You know, like in my examples, I don't see any reason for a solid start not to replace all our beat templates on solid templates.  We can literally just go in and be like...
[04:02:54] All our templates are solid start. Solid start is called start because it is a starter template maker.  It is kind of a meta framework, but that is why I call it start.
[04:03:05] You know, I could even drop the solid in front. When I talk about it, I don't always go solid start, I just call it start.
[04:03:10] Because that's what it is.  It's a starting point.
[04:03:15] Yeah, okay, see, here's the other thing. Part of it is you could like, put like, beta 2 tag on it and maybe I won't close all the issues on it. But like, I'm gonna if I'm gonna go issue bankrupt, and you're trying to report on it, it's kind of awkward, I almost want to release, go issue bankrupt, and let's just start clean slate again, it'll be a lot clearer to see the feedback.
[04:03:38] That's an argument for releasing.
[04:03:40] It's also an argument. It's also like the most asshole thing for people currently using it when I'm just like off a cliff.  And I'm warning people in here that it's off a cliff.
[04:03:49] Um, you know, I've suggested before on stream,
[04:03:52] I suggest it in the docs, I suggest in the CLI, I suggest it literally everywhere that SolidStar can break at any moment.
[04:03:58] But like, how long do I do I wait? You know,
[04:04:02] December 8th.
[04:04:03] So exactly a week ago,
[04:04:05] I told...
[04:04:07] everyone that we were going to issue bankrupt.
[04:04:10] I don't know.
[04:04:14] Thank you.
[04:04:21] .
[04:04:23] I have many internal-related hosted on Apache Cere, certain static solid, and everything that's made of. Yeah, exactly. But the thing is...
[04:04:30] It's nice to just be able to do what I did today, to take your CSR app and go, oh, I want to server render it today.
[04:04:39] I want an API endpoint today.
[04:04:44] Thank you.
[04:04:46] We do have a solid start channel. It's not the best way to collect stuff, but it's there.
[04:04:52] Thank you.
[04:04:53] Let's go and then release. Yeah.
[04:04:56] Thank you.
[04:05:00] Thank you.
[04:05:01] I mean, I'm not gonna lie, I'm probably just gonna close pretty much everything.
[04:05:06] If you have a new issue, you can market beta too.
[04:05:09] Yeah.
[04:05:10] Bankrupt on Christmas.
[04:05:12] I love it.
[04:05:15] That's where JDEV opened up over it.
[04:05:19] -
[04:05:21] Benton, you're the worst.
[04:05:23] Thank you.
[04:05:24] Thank you.
[04:05:25] Thank you.
[04:05:26] Oh, man.
[04:05:30] uh...
[04:05:32] Thank you.
[04:05:33] It happened in the opposite direction, ironically, because SolidRouter is using future Solid2.0 APIs, like kind of proxied, not like fully implemented.
[04:05:45] Solid 2.0 will be the real Solid 2.0 release, which
[04:05:51] be the real like
[04:05:53] Maybe solid 2.0 will be the real solid start release by the time it gets out.  But my intention is to get solid start out before solid 2.0.  There might be a bump up.  We might call it solid start 2.0 to get that bump up, right?  But like...
[04:06:05] Because like...
[04:06:08] You kind of get what I'm getting at, almost nothing changes from an external API standpoint because we don't own anything.
[04:06:15] Yeah.
[04:06:16] All right. All right. Are we ready for this week in JavaScript?
[04:06:23] Alright, people are still with me? I appreciate the people who stay on the stream this long.
[04:06:29] Um,
[04:06:30] it.
[04:06:34] I'm just checking Twitch now to see because sometimes I miss
[04:06:38] There's some first time chatters. Okay, good. I didn't miss any subscriptions.
[04:06:43] I guess the Twitch ads don't bug people enough.
[04:06:47] Alright.
[04:06:50] Thank you.
[04:06:50] Thank you.
[04:06:54] Thank you.
[04:06:58] Thank you.
[04:07:00] All right. We're running out of time quite quickly.
[04:07:06] My work face. This is the setup, right?
[04:07:13] All right. All right. Let's see here. Am I, am I ready?
[04:07:17] to talk about This Week in JavaScript.
[04:07:24] It's two weeks, isn't it?
[04:07:31] When's the last time I streamed?
[04:07:37] So I can check on my own timeline.
[04:07:47] December 1st. Okay, good. We're good.  All right, let me flip this around and let's get started.
[04:07:56] All right.
[04:07:57] Thank you.
[04:07:58] And with that, let's talk about this week in JavaScript, which as it turns out is the last two weeks in JavaScript.
[04:08:04] I don't know if I missed a bunch of stuff.  If you've been paying attention to the stream so far, I have been working...
[04:08:09] like crazy on solid star beta 2 getting those finishing touches in so I probably missed a  whole lot that happened but I'm here to chat so let's chat and take a look at what's been going on
[04:08:22] All right.
[04:08:27] Thank you.
[04:08:29] All right.
[04:08:33] Thank you.
[04:08:34] I'm just going to put this one out, little solid thing.
[04:08:37] I haven't seen a nice boost from Theo on this kind of stuff for a while, but it was definitely...
[04:08:44] Funny, why do frameworks keep on evolving to Solid JS?
[04:08:48] I see.
[04:08:50] Nice pat on the back on validating our approach, but he's referring to the fact that like the next version of you, the next version of Svelte.
[04:08:56] Not just signals, but like...
[04:08:57] Obviously, a bunch of them, Angular, Quick, Preact, all have signals as well, but Vue and Svelte are even basically compiling into the same kind of output and renderer as solid in their next version.
[04:09:09] Yeah, I mean...
[04:09:12] I guess this comes, is this a play off my name?  Carniato Carson Isaacian?
[04:09:19] Um, but.
[04:09:20] Definitely it was fun.
[04:09:24] Let's see here.
[04:09:30] Yeah, okay. While we're kind of playing through solid-esque news, someone went through and actually...
[04:09:36] built a very simple list component in a bunch of frameworks and showed that that was 24 lines and this many characters. This character count is not fair to solid or react, to be fair.
[04:09:48] because it counts white spaces.
[04:09:51] and it counts a bunch of other stuff.  I think if I go down in the thread...
[04:09:56] He amends his stuff.
[04:09:58] He and he wasn't using the right view.
[04:10:01] APIs will be used the same at 24 lines.
[04:10:04] And
[04:10:07] You know, view three, there we go.
[04:10:09] 24 lines, 471 characters.  And...
[04:10:13] It boils down to that essentially with these kind of code examples. Why am I talking about code examples here? Because this never gets old.
[04:10:20] Two-way binding is basically the only difference in code lines. Frameworks have gone so similar in terms of their state thing, like what I was just talking about with Theo, about everything becoming signals or whatever, or like hooks that look like signals, that the code savings thing is kind of...
[04:10:38] you know, funny. It's basically like, do you think two-way binding is good?
[04:10:42] Okay, that adds...
[04:10:43] you know, X number of lines, like 10 number lines on your Hello World app.
[04:10:48] You know,
[04:10:49] Do you think that you have an FSA
[04:10:52] So should you wrap your thing in a function or just put it in a script tag?
[04:10:57] Well, that adds another couple lines. The actual type number characters is much, much closer. It's something along the lines of like, I think at the end, view and svelte are basically the same off by about like 30 characters and react and solid come down to like the 600s.
[04:11:13] So they're about 200 characters apart, which is typing on a Hello World app.  It's definitely something that I take...
[04:11:19] you know, somewhat seriously. And for that reason,
[04:11:23] While solid is not optimized,
[04:11:26] for typing experience,
[04:11:27] It is still a very important metric.
[04:11:30] So I worked on another framework.
[04:11:32] called Marco. And if you guys are interesting, if typing is a very important metric for you, Marco is...
[04:11:40] Almost twice as good as Svelte.  It's that much better.  I didn't bother with the character count,  but I ensure you that this is only...
[04:11:50] 15 lines of code instead of 24, which is like another 30% improvement. And it's even less characters.
[04:11:58] To the point that I wouldn't be surprised if it's like half a svelte again. So I
[04:12:03] If you care about important metrics, like how many characters you type,
[04:12:08] I strongly
[04:12:10] recommend using Marco, not just for the performance aspects, because, you know,  especially with Marco 6, the performance is going to be really good.
[04:12:17] - Thank you.
[04:12:18] But the number of characters, if that is your guiding metric, it's very hard to be Marco.
[04:12:24] Thank you.
[04:12:27] Thank you.
[04:12:31] I'm having a little fun with this, to be fair.  There are trade-offs of the single component file thing  that it's very easy to make an example  that makes them look way,
[04:12:42] clunkier. Ironically, Marco doesn't suffer for the single component file thing because it's  almost like they're optimized for this. You know, this is the two-way binding, like,
[04:12:54] Yeah.
[04:12:55] I think it's definitely Alien.
[04:12:58] I think...
[04:12:59] It's important to understand.  I like using Marco as a bit of a, what do you call it?  Foil on these kind of discussions because...
[04:13:07] you can always think of a more concise syntax.
[04:13:11] um, that is more powerful. But like,
[04:13:15] At a certain point, you have to decide how far away do you want to get from, say, JavaScript or language or firmware. Technically, this is like JavaScript in here, but then like,
[04:13:24] you know, this is a different templating DSL, you know, this is actually
[04:13:28] like pug or, you know, jade, essentially.  This is white space matters, essentially.  These are HTML elements.  This whole thing is HTML elements, in fact.  This is an input element.  And I think...
[04:13:43] You know, a lot of this comes down to familiarity. So I just wanted to highlight this for a moment because
[04:13:52] It's,
[04:13:53] It's like the thing that's important is whether you think two-way binding.
[04:13:56] matters or if it's dangerous. I think those kind of philosophical decisions are way more important  than...
[04:14:05] Like did you type less characters because you can always find a way to type less characters.
[04:14:10] But you can't always find a way to make a
[04:14:14] you know, stable, predictable app.
[04:14:16] You know, I mean,
[04:14:18] This relates even to the Svelte 5 thing, where some people are having a hard time with ruins. They're like, "Oh, it's more to type."
[04:14:24] But it's like a way better model, makes way more sense.  It addresses all the gaps in Svelte.
[04:14:30] The typing metric, and people who are upset about it are probably the same people making comparisons like this. The typing metric just is so irrelevant, especially when shown in Hello World app.
[04:14:43] But
[04:14:44] Thanks to people who post stuff like this.
[04:14:47] I can always show people why Marco is just the best framework ever made.
[04:14:54] Thank you.
[04:14:56] Thank you.
[04:15:01] Yeah, it's actually markup. I went for concise mode. Yeah.
[04:15:09] Yeah.
[04:15:10] I don't think Michael's joining us today, unfortunately.
[04:15:15] Um, let's see, let's go.
[04:15:19] Thank you.
[04:15:21] So yeah, what else did I do? Well, I told you, I posted my huge router thing, hoping to get feedback and tell people that it was coming. There's good responses. We actually released it. So SolidJS new router is out.
[04:15:33] It...
[04:15:34] enables incredible stuff.  I do...  This is the first time that I've...
[04:15:39] changed my routing paradigm in like a decade.
[04:15:43] I understand it's a big shift and it was a big shift for me and it's gonna be even longer
[04:15:47] long tail, as I said, feel free to use the old version of the router version nine for as long as you feel comfortable.
[04:15:53] you might have no reason to use the new stuff.  The new stuff does unlock
[04:15:57] some really powerful things out of the box with like the fine grain updates of the cache.
[04:16:03] and validation through actions,
[04:16:06] things like create async primitive,  which is like a proxy for solid 2.0.  Everyone will get it eventually.  Stuff like on link,  hover preloads,  really a lot of really cool features.  I think it's worth it.
[04:16:19] But I understand, you know,
[04:16:21] If your app, you can't just change it.  Writer is probably the most opinion part of your app.  If you remember, everyone remembers, I did a VEET conference talk a little while ago.  Let me see if I can if I can.
[04:16:33] I'm going to grab this off screen for a second. Drive.Google. What am I looking for? What was my VT conference talk called?
[04:16:44] Decomposing the meta framework, right?
[04:16:48] Let's do this.
[04:16:50] I showed this image.
[04:16:53] No, not that image. That's a good image, but I showed
[04:16:56] this image on stream.  And it's,
[04:17:00] are on the talk.  And this...
[04:17:03] is why, like for example, I could see releasing 1.0
[04:17:07] of
[04:17:07] solid start before getting to 1.0 of the router. Um,
[04:17:13] Solid start.
[04:17:14] basically sits.
[04:17:16] like right on this line.
[04:17:18] So, you know, Nitro, Vinci, slash Viet,
[04:17:24] you know, and then like solid start and solid kind of sit here.
[04:17:28] and then the router sits up here.
[04:17:31] I think...
[04:17:33] I think this is like a important thing because the most churn happens here.  It's so funny when we talk about standards and stuff,  because we,  we want the thing below us to be able to support anything we want us to want  to do.  But then the thing above us,  we don't want to,  we want to like,  you know,  offer as least API area to like,
[04:17:53] like do just exactly what we want because the more options we work we want to support the more work it is for us
[04:18:00] Um,
[04:18:01] And ultimately it means that when you get higher up in the stack, you just start like
[04:18:07] getting really opinionated to save people on complexity of the decisions. I like living right  here, but it's funny that it makes me a hypocrite sometimes in terms of my expectation of what comes  below and what I want to offer above.
[04:18:20] So, as I said, it's very important to find the right spot.
[04:18:24] Um,
[04:18:26] But yeah, I hope that makes more sense in terms of how the router fits into my view of the world.
[04:18:33] and solid sphere of the world, I guess.
[04:18:36] No, the router is 0.10.  So, you know...
[04:18:41] I did...
[04:18:42] bump 0.9, because what I did was I anticipated future solid start features. We were on 0.8,  and I was anticipating future solid start features, and I wanted to support
[04:18:54] Um,
[04:18:57] It's funny, I wanted to support SolidStart, but I knew that it would use stuff like async local storage, so it would only work on newer versions of Solid.
[04:19:04] and maybe moving forward 2.0.  So I went back and bumped the minor version
[04:19:09] before I did the new version to give us space so that we could like
[04:19:15] basically split off between the old and new versions.  So people who actually want the existing versions  of solid router use 0.8.  0.9 is the old router with updates into the future,  and then 0.10 is the new router.
[04:19:33] Thank you.
[04:19:35] Okay.
[04:19:38] Thank you.
[04:19:41] Yeah, a little bit more solid news before I move on.  I just want to say I've been very stoked to see the community.  I already talked about it a little bit.  But these guides are starting to show up to use common things like...
[04:19:52] you know, Sentry,
[04:19:55] clerk,
[04:19:56] I don't know if this is the best way I wanna use clerk, but like,
[04:20:01] I'm just putting it out there like Solid's ability to just kind of
[04:20:05] work with its composable premise makes it really easy to just
[04:20:10] Thank you.
[04:20:11] integrate with these other libraries even if there isn't official stuff yet. So
[04:20:15] I'm very stoked to see this kind of progression.
[04:20:20] Then there's other things like people in the community working on Solid.js compiler plugins for Bun.
[04:20:26] This is very cool.
[04:20:28] Um...
[04:20:30] new was this new component library? Unstyled customer pruners? Yeah.
[04:20:34] So like,
[04:20:36] very stoked over the last couple weeks to see
[04:20:40] More people getting out there, releasing libraries, talking about this stuff.  Just want to highlight a few of them.  Okay.  Let's go back here.  Yeah, big release.  Okay.
[04:20:49] You know how everyone knows how big of a fan I am of Astro. Astro 4.0. It feels like Astro 3.0 was just the other day. And it was. We had Matt Phillips on stream in...
[04:20:58] August, end of August, August 25th, I think, to talk about Astra 3.0 and the view transitions.
[04:21:06] Thank you.
[04:21:06] Let's take a look at what Astra 4.0 brings.
[04:21:11] Astro Dev Toolbar, so better dev tool experiences.  Internationalization, I-18 routing, sounds good.
[04:21:17] Let's see, DevTubler, that's nice.
[04:21:19] convenient i love the work they're doing on this kind of stuff this is the kind of polish that i've  that that
[04:21:26] I've always liked to see...
[04:21:30] On a series of tests to audit the common accessibility issues. Nice, nice.
[04:21:35] Thank you.
[04:21:38] Yeah, no, this is lovely.
[04:21:42] We partnered with Sentry to design the initial version of the toolbar to the own run platform.
[04:21:47] Storyblock, yeah, okay. Internationalization.
[04:21:51] Nice.
[04:21:53] This is something that I'm still interested to look at.  One of the cool things about the work we did on Solid Start to pull the router out is that
[04:22:02] We have more flexibility there. If people want to use SolidStart to build mobile apps or whatever, and they want to use a completely different routing setup or whatever, I think it should be possible, right? And I think similarly, I think as we explore into internationalization, I don't know...
[04:22:16] much about it, but we can prototype this in user land before we get the right internationalization solutions. Incremental content caching.
[04:22:26] Experimental feature to dance. You have to build. Okay, so they now have a cat in front of their static builds. That's cool.
[04:22:33] Yeah. Yeah. That's a big performance thing for people doing pre-rendering. It's not a world I live in very much. I thought it starts pre-rendering is probably like
[04:22:44] pretty slow now. Our old one was fast because we literally just fired a node process,  and I didn't even make a real HTTP server, I just faked it. Now that we're using Nitro,  we're going through whatever their process is, it's probably a little bit heavier.
[04:22:58] But...
[04:22:59] It's way more powerful, so.
[04:23:02] Not primary use case, but...
[04:23:04] This
[04:23:05] This is going to make a difference for a lot of people.
[04:23:08] Ooh, new view transition APIs. This is what I care about.
[04:23:12] Um...
[04:23:13] What do we got here?
[04:23:16] animate, persist, morph, common elements, one page, another slide, fade, okay
[04:23:22] Forms.
[04:23:23] Ah, so the added form interaction makes sense.
[04:23:30] Nice. Prefetching?
[04:23:36] Okay, so yeah, it's much broader.
[04:23:39] Oh, nice. Yeah, Route Announcer. This is something that we probably should look at a solid router as well.
[04:23:44] They have a client-side JavaScript Navigate call.
[04:23:48] This is interesting.
[04:23:54] Eh...
[04:23:55] I bugged Fred a few years ago saying that he was going to build a JavaScript framework.
[04:24:00] And I think he's only starting to realize it now.
[04:24:03] I mean, what...
[04:24:05] They're building a router over at Astro.
[04:24:09] Essentially. Now.  Because this stuff is an MPA...
[04:24:12] stuff
[04:24:14] So we're getting to a point where...
[04:24:17] Yeah, this is interesting.
[04:24:19] I think the biggest tricky part about this is...
[04:24:22] The persistent global state problem that I talked about before, I think this is like.
[04:24:27] a huge gap from building apps
[04:24:29] But for building client navigable, navigable,
[04:24:34] Um,
[04:24:35] kind of like content sites, which is what they specialize in,
[04:24:39] This is kind of nice.  Like, they filled in the gaps.  Now you use Astro Router with the islands of your choice.  Like, at some point, you're just wondering, like, are they going to push out the framer...
[04:24:49] islands altogether and be like, "You don't need islands anymore. You can just use this new astro feature."
[04:24:57] This is, they're kind of taking on more and more.
[04:25:01] Which is interesting.
[04:25:05] And I like Astro's clean focus on it, because they're like, we're a content site app.  Like, there's clear gaps if you're trying to make apps here, but...
[04:25:14] Yeah, no, this, I do like, I do find it interesting to see that they're doing more
[04:25:20] Logging, redesigned docs.
[04:25:24] Cool.
[04:25:25] Sounds like a good release.
[04:25:33] Yeah, and I think there's a lot of space here. Everyone's in the app space and then trying to get more, you know, like,
[04:25:41] You can do basic sites with it and then try to simplify it.
[04:25:45] These guys are like...
[04:25:46] almost unapologetic about it. They're like, oh yeah, yeah, that's completely broken. But
[04:25:51] you know,
[04:25:51] You could, you know, like, like they're just like,
[04:25:54] Because their starting point is like the content site. They don't
[04:25:57] Yeah.
[04:25:58] Because like the answer is that you can put a client site
[04:26:02] app on an Astro page.
[04:26:06] You know, you can actually use Astro's router to client navigate between pages and then make one of those pages a single page app.
[04:26:13] Like you can completely do this.
[04:26:16] I think the...
[04:26:18] the part that's
[04:26:19] interesting is like
[04:26:22] I think that's a great story too for a migration standpoint, right?  Because you're like, there's a lot of CSS...
[04:26:27] like client rendered pages that just
[04:26:29] don't work or they can't migrate to server side rendering right now.
[04:26:33] So like it kind of fits with this whole story.  On the other hand, if you...
[04:26:38] were going to tell me that I could have two systems doing it versus one system to just handle everything. I'm always going to take the one system. So it's like,
[04:26:48] Thank you.
[04:26:48] You will see how Astro, the JavaScript framework, comes along because
[04:26:53] At a certain point,
[04:26:56] the gaps in RSCs,
[04:26:58] the gaps in meta frameworks today aren't going to exist, and you're just going to have solutions that can handle all situations.
[04:27:05] pretty decently. We're not there yet, but
[04:27:08] I'm interested to see what happens when we do
[04:27:11] Get there.
[04:27:14] I tried to put solid start inside of Astro ironically, but that's a whole other story.
[04:27:24] Thank you.
[04:27:24] Thank you.
[04:27:26] Thank you.
[04:27:27] but yeah, it's interesting.  As I said, like,
[04:27:31] like if you're building something app-like
[04:27:34] It's almost...
[04:27:36] Like, if you could get into a single system, you'd be in a much nicer place. It's just unfortunate that we're not there yet.
[04:27:42] Like Astros...
[04:27:44] approach is a lot easier to get to. It's actually almost a simpler version of what we did with hybrid islands routing a year ago.
[04:27:52] But it's like...
[04:27:53] Thank you.
[04:27:54] I
[04:27:56] The gaps are not, you know, maybe I'm a perfectionist, the gaps are not
[04:28:01] It's not okay with me. We have more to do.
[04:28:06] We've got more to do. Everybody has more to do.
[04:28:10] Uh
[04:28:10] Okay, let's keep on going. I found this one interesting. Tanner tried to see if people preferred concurrent rendering.
[04:28:18] versus
[04:28:19] fine-grained updates and what would you
[04:28:22] I found this conversation really interesting because it's really hard to write external state.
[04:28:27] that people talk about how you know people fetch in the components and react and that's how they want to do it and it causes waterfalls but react innately whether you consider it
[04:28:35] for better or for worse, that's like React's biggest...
[04:28:39] Simplification, its biggest flaw.
[04:28:42] They are basically equating your data tree with your view tree.
[04:28:46] That's just how they innately do it.  You can obviously pull state out, an external state, you know, and...
[04:28:51] That's what a lot of libraries do.  People like Hannah are working on.  But innately, all their concurrent rendering,  everything is the fact that state and UI...
[04:28:59] are the same thing. Like the component,
[04:29:02] owns it. Even that waterfall thing. That's why they work so hard to prove that that is viable. But it's
[04:29:10] It is a fundamental misalignment. They are related, but they are not the same thing.
[04:29:15] And
[04:29:15] This means that people who are trying to work in React's world and they are managing external  state have a horrendous time at trying to make this stuff work because it's like they're fighting the  system.
[04:29:27] And
[04:29:30] He's got to a point where he had to choose...
[04:29:33] one way or the other way.
[04:29:35] And in the end,
[04:29:39] He chose fine-grained updates rather than concurrent.
[04:29:43] Obviously there's like
[04:29:44] reply guys in the chat.  I'm probably one of those reply guys.  I'm like, you solid and get both.  But like...
[04:29:50] Like,
[04:29:51] Like,
[04:29:52] I can only imagine the internal struggle that was behind this post  where you are fighting every part of your body,  being deep urged to just throw it all away,  channel all this effort into rewriting nozzle.
[04:30:00] in Solid.js instead.
[04:30:03] Thank you.
[04:30:03] You are not wrong.
[04:30:08] So like...
[04:30:15] Actually, what's maple left to say?
[04:30:23] I read the same conclusion, whenever I have data heavy UI that I need to optimize this never clean solution. Even with something like MobX, you're forced to break down components more than you would otherwise, this applies regardless of your pick.
[04:30:33] Regardless of what you pick.  Yeah, I think I got to be a reply guy here.
[04:30:37] regardless of what you pick.
[04:30:41] Yeah, I'm just being a prestigious...
[04:30:45] It is interesting. He ended up doing a poll. He chose fine-grained updates.
[04:30:50] Um,
[04:30:53] But it was definitely a struggle.
[04:30:55] It's interesting to see how
[04:30:59] Like,
[04:31:01] So you're basically weighing the React model of the universe, which is kind of they haven't been secret about it. They've been telling us this the whole time and people just fought it. Like if you were using MobX with React, you're kind of doing it wrong.
[04:31:13] Of course, no one officially says that.
[04:31:15] But like...
[04:31:16] you know what they think about signals, right?
[04:31:19] Like,
[04:31:20] They're like, oh, you can do it.  It's kind of like when people write extensions for solid that enable two-way binding.
[04:31:27] You know, you just smile and be like, "Wow, that's very creative."
[04:31:31] You know what I mean? Like two way binding, I think is like the absolute worst. So like, but the thing is the ecosystem evolved like this. React went silent for a few years while working on like the new model. New model is pretty good, but it's not like things diverged.
[04:31:52] And the people who are sitting at that divergence point
[04:31:55] stuff like solid makes way more sense to them than where React goes.  I think where React went actually makes a lot of sense.
[04:32:02] But it's like,
[04:32:06] They haven't reconciled the gap here.  And it's hard to do that because these guys are kind of playing outside of the rules.
[04:32:20] Yeah, yeah, that's right. Dan compared signals to go-to statements. Dan Abramoff. I remember that one...
[04:32:29] That one, like, he said it in a way that he thought, like, I wouldn't be offended by it, but I was like, come on.
[04:32:38] Thank you.
[04:32:41] Thank you.
[04:32:43] Transitions are really good.
[04:32:46] I feel like if I was in his position, I would pick concurrent rendering, like,
[04:32:51] It sucks, but then you're kind of just like...
[04:32:53] I mean, no, in his position, I couldn't.  In his position, I care about performance.  I care about how my app updates.  You can't.  But if I was a library,
[04:33:01] developer for React and I cared about, you know, doing the React thing, I would pick concurrent rendering.
[04:33:07] Fine green updates.
[04:33:09] are great, but you don't need them.  Your app might be slower.  Things might be, you know, there might be downsides of it, but like,
[04:33:16] you're not embracing React for what it is.
[04:33:20] I think the problem is like,
[04:33:21] React has too much of the market share, so everyone's like, oh, just, you know, no one got fired for choosing React.
[04:33:26] The truth of the matter is,
[04:33:29] Some people should get fired for choosing idiomatic React.
[04:33:34] Thank you.
[04:33:36] I'm gonna put it out there.
[04:33:38] Thank you.
[04:33:43] Thank you.
[04:33:45] .
[04:33:49] Thank you.
[04:33:50] I... the thing is, it's not about the time slicing.
[04:33:56] It's about coming up with a consistent async model that prevents tearing, that makes the whole system unified.  And you can do stuff yourself and not worry about it.  We were fine without...
[04:34:07] concurrent rendering for like
[04:34:09] years and years and stuff like signals even make it easier to kind of like do these kind of isolated updates but like
[04:34:16] Directionally, design-wise, you know when a designer shows you the new design system?
[04:34:22] And they explain to you why the slight slant on this...
[04:34:26] touches this other slant and that like this evokes some kind of thing and like the whole thing was  this genius about like how much this line slanted or how much you know the spacing and it just it  has this like incredible metaphysical thing where every all the pieces in the world collide in  there like this is when i knew that i figured it out that
[04:34:46] like everything just kind of stacked up,  and then the whole thing was consistent.
[04:34:51] and perfect and beautiful.
[04:34:53] Current rendering is one of those kind of things where like,
[04:34:56] Maybe you might say that's in the eye of the beholder, but it's kind of beautiful the way all the pieces work together.  And you think of the story of suspense and on the server and streaming and everything just kind of...
[04:35:06] the transitions, all the pieces are like,
[04:35:09] I saw what they were doing and I went to implement it as soon as possible.  Cause I was like,
[04:35:13] Damn.
[04:35:16] like what it enables, how it changes the way you fundamentally approach async.
[04:35:21] is incredible.
[04:35:26] But, like, we've been doing it the other way for a decade. It's still good. You know, don't update to the new version of Solid Router. Like,
[04:35:34] It's okay.
[04:35:36] It's really, really quite okay.
[04:35:38] I'm not.
[04:35:41] Thank you.
[04:35:42] Thank you.
[04:35:44] It's a fancy delivery, but... yeah.
[04:35:54] Thank you.
[04:36:00] *sigh*
[04:36:01] Anyway, um, yeah, I don't envy his position. He's making the exact type of app where he should be using Solid.
[04:36:11] He knows that. We all know that.
[04:36:17] React's really flexible, though, so he can do what he needs to get done with React.
[04:36:21] So huge props to him, but you can see it's like paddling upstream.
[04:36:29] Okay, if we talk about the router. I mean Tanner just had hits all week. There's so I don't know if anyone saw this video.
[04:36:37] But...
[04:36:39] But like, I'm not, I kid you not.  It's funny on so many levels in a subtle way.  This is mostly around the routing conversation.
[04:36:48] Because actually, if you actually pay attention, us old guys...
[04:36:53] and we'll get to all guys comment in a minute, but me and Ryan Florence,
[04:36:56] even though historically we've had like
[04:36:59] public disagreements, so to speak, you know, like issues.
[04:37:03] We actually, technically, I,
[04:37:05] I believe we believe in a lot of the same things when it comes to architecture and, you know, building performing apps.
[04:37:12] I think his opinions are dead on. I think that
[04:37:15] I'm a huge Ryan Florence fan.
[04:37:17] might surprise people, even if I poke fun at a couple things.
[04:37:24] This whole...
[04:37:28] like struggle. I just love this clip.
[04:37:32] Peace.
[04:37:33] Because he's talking about his journey with the router.
[04:37:36] You could see, you know...
[04:37:39] you know, it's funnier with audio on too, but it gets to the end here somewhere and
[04:37:46] And everything goes...
[04:37:47] crazy and
[04:37:51] And then we just have Next.js going like,
[04:37:54] What are you fools doing?
[04:37:55] I honestly...
[04:37:57] Tanner definitely had a fun week.
[04:38:01] Um...
[04:38:03] -
[04:38:05] But anyway, I just wanted to
[04:38:08] point this out because like this for me there's been a Tanner arc here.  I don't think I posted the last thing where he made his decision.
[04:38:15] But, um...
[04:38:17] Yeah. Oh, no, here it is. Yeah.
[04:38:19] Here's the Tanner arc.  "So moving to Tanner's arc right about the fine-grained reactor, our app's route components  are now only updating the exact state that relies on change.
[04:38:27] Yeah, so...
[04:38:29] That is the Tanner arc.
[04:38:31] Um,
[04:38:33] I think he'll be happy with his decision.
[04:38:35] I just think
[04:38:37] that
[04:38:37] This is one of those places where
[04:38:40] reacts.
[04:38:42] kind of becoming more opinionated.
[04:38:44] is causing this kind of fork.
[04:38:49] Thank you.
[04:38:50] And Tanner's been like streaming stuff on the router.  I think he did a stream earlier today.  I'm pretty stoked.
[04:38:55] on where that's going.
[04:38:59] Let me see here.
[04:39:02] Did I catch up here?
[04:39:05] Yeah, OK, so I'm done with the SolveJayus stuff.  We bookmark time.
[04:39:09] Second.
[04:39:12] Thank you.
[04:39:15] Thank you.
[04:39:19] No.
[04:39:23] I talked about this last stream, right?
[04:39:26] Yeah, I did. I talked about the Remix React Router
[04:39:30] stars thing yeah i did i did that last week um
[04:39:37] Okay, another release I want to actually call out right now while we're still kind of going.
[04:39:42] Um...
[04:39:43] Analog?
[04:39:45] Brandon Roberts, some of you guys know.
[04:39:47] K1 Stream talked about this. This is the VEAT Nitro framework.
[04:39:52] built on, yeah, for Angular.
[04:39:56] They're getting very close to 1.0, so I'm pretty stoked about this.
[04:40:01] Mostly that...
[04:40:02] this is part of the angular renaissance as we call it um
[04:40:06] They have a legit
[04:40:08] Um...
[04:40:10] They have a legit...
[04:40:11] JavaScript full meta framework.
[04:40:14] here.
[04:40:15] Currently,
[04:40:16] This is...
[04:40:18] a few little
[04:40:19] pieces that they need to get worked for migrations, but this is
[04:40:23] I love the approach here. They're basically taking NX modules and just
[04:40:29] mapping them to analog JS modules, and then saying we're good to go. I think this is
[04:40:35] This is a...
[04:40:37] This is going to be interesting to watch the angular entering the fray with signals entering the fray with meta frameworks.
[04:40:44] Um,
[04:40:45] We'll have to see where it goes, so I'm definitely paying attention.
[04:40:49] Okay. Okay.
[04:40:50] Now we get to talk about some
[04:40:53] Other stuff. OK.
[04:40:58] Performance is no longer
[04:41:00] Yeah, I remember what this was was subtweeting. I'm pretty sure this was subtweeting. I mean, this is more comment on what Theo again, you know, pointed out earlier about all the framers becoming solid like.
[04:41:12] Um,
[04:41:14] I think, do you know what this is about?
[04:41:15] I think.
[04:41:16] I know what this is about.
[04:41:17] I think this happened because JS Framework benchmark
[04:41:20] If I go on the JS framework benchmark,
[04:41:22] And I checked the updated Chrome.  I think they did a rerun.  Yeah, and the Svelte 5 beta, for the first time ever, shows up in front of Solid.js.
[04:41:32] which is quite impressive.  I believe this is not the final release,  and the final release is a little bit slower,  but Svalid had a very good run.  Svalid had a slightly bad run, but...
[04:41:44] And, uh,
[04:41:46] you know, these numbers tend to move, you know, a couple of points.
[04:41:50] and the new version of Chrome brought some improvements and
[04:41:55] This was the first time a major framework or a version of a major framework showed up in front.
[04:42:00] of solid
[04:42:02] in the JS frameworks benchmark. So I think this is what prompted this because
[04:42:08] You know,
[04:42:09] It's been...
[04:42:10] God, it's been like five and a half years now.
[04:42:13] since this has happened. And, um,
[04:42:17] I think we're at the beginning of that new era now.
[04:42:22] Thank you.
[04:42:23] Now, you shouldn't be too surprised of it.  Million actually has consistently shown, not run to run,  that it is a little bit faster.  Main reason for that,
[04:42:33] is
[04:42:36] Okay.
[04:42:37] Probably creation memory costs. Yeah. Replace rows. Yeah. It's our cleanup. We get hit on cleanup.
[04:42:43] harder than VDOM libraries because the signals hold more memory.
[04:42:48] If you look at it, that's also where Svelte gets hit.
[04:42:54] See?
[04:42:55] million as a cleanup of 13.
[04:42:58] where we have cleanups of like in the 14 range.
[04:43:01] Um...
[04:43:03] for solid and spelt, and you see them replace rows,
[04:43:06] Actual row creation
[04:43:10] Yeah, we might be like slightly dragging 409.
[04:43:14] Um...
[04:43:16] What about replace row? 2022?
[04:43:19] similar with invariance.
[04:43:22] Yeah, it's mostly garbage collection.
[04:43:25] Um...
[04:43:29] And to be fair, Dominic did some optimizations there that I haven't put into solid that might might give us like the get us here or whatever.
[04:43:39] So like, it's really cool to see people actually working on these kind of micro optimizations again, because I haven't like touched this in solid and
[04:43:46] I think I spent the first couple years working on the benchmark a lot.
[04:43:50] But I don't think I've updated it, like really done anything since
[04:43:53] 2019 and uh
[04:43:56] Yeah, I think that that was a large influence on this because as I said,
[04:44:00] Like five years ago,
[04:44:03] Vue and Svelte weren't even in sight.
[04:44:06] And then like.
[04:44:07] Slowly by slowly, you know, things like Million came out and others have come out, but we've been kind of like sitting at the same performance place for about for over five years now.  So it's like we knew it would come to an end one day.
[04:44:21] So whether that's official, like when I think when we'll see when the actual Svelte release comes out, it'll be a bit slower.
[04:44:26] But like,
[04:44:28] The writing's on the wall.
[04:44:30] The thing you have to understand...
[04:44:31] It's a benchmark.
[04:44:33] doesn't consider any structural stuff.  It's like literally one table.
[04:44:38] So,
[04:44:39] Million can be fast here because it just optimizes the spitting out all the rows. Million is still trapped by
[04:44:47] the VDOM re-render of React.  So as soon as the logic gets nested or bigger,
[04:44:53] it's going to get hit more.  For a pure renderer thing,  which is what Million cares about,  they can go fast.  They actually introduced stuff  like four components from Solid  to try and optimize  some of the control flow stuff,  but it's still...
[04:45:06] it's still react and VDOM style re-renders that it ultimately makes that kind of difference.  So,
[04:45:13] On a micro level, I would expect something like Million to be faster because they're not dealing with signals.  But on a macro level, I would not expect the same kind of performance, if that makes sense.
[04:45:26] This isn't a bummer, no. I mean, this was expected.
[04:45:29] I...
[04:45:30] thought it would happen sooner.
[04:45:32] I mean, I was pretty drinking my own Kool-Aid, so to speak.  So I figured people would copy what we were doing a lot sooner.
[04:45:38] Um...
[04:45:39] you know,
[04:45:40] I thought like spelt
[04:45:42] They brought in Svelte 5, but I thought this would be like much like years sooner. The fact that Solid
[04:45:49] Like, at this point...
[04:45:51] the difference here.
[04:45:52] I wouldn't even call saying which one is faster.  I think Svelte 5 in this version might be, I'll say, like, within varying degrees, it could be considered faster.
[04:46:01] Let's see.
[04:46:03] Yeah, I'll give them that.
[04:46:05] It looks like it's with it, but...
[04:46:08] It's not...
[04:46:10] But like...
[04:46:11] Thank you.
[04:46:12] Yeah.
[04:46:13] I think generally speaking, like,
[04:46:19] Mm-hmm.
[04:46:22] The difference between Svelte 5, let's say, and Solid.js now
[04:46:27] is basically nothing compared to the difference that there's been for like the last five and a half years. So like,
[04:46:33] We knew that
[04:46:34] I'm not too bothered by it. I thought it would happen sooner when I was actually like still
[04:46:40] you know, working on this stuff. I haven't worked on this stuff for a very long time. So 2.0 is an opportunity to work on this stuff again. Um,
[04:46:46] but
[04:46:48] I...
[04:46:49] there isn't much room to grow.  It's more likely, I'm going to be honest,  that for trying to make developer experience better  or to change something that's solid,  like stays around the same or, you know,  kind of like that, like...
[04:47:04] Huh?
[04:47:04] It's more likely that we lose
[04:47:07] tiny micro points and gain some in other areas and there'd be trade-offs than us to get considerably faster into this benchmark. This benchmark is like anyone who is below
[04:47:17] I'd say 0.15%
[04:47:20] is basically now just gaming the benchmark between Chrome versions. Like if you are faster than 0.15 on that test, it doesn't matter how fast you are. I've been saying this for years. We've slowly seen that section grow and grow and grow. But you have to understand, like when Solid first came out, there was maybe like surplus, there was maybe an EV, there's maybe like two other frameworks that were in that range of performance.
[04:47:43] And like...
[04:47:44] Now we have a lot more there. Like it's just, it's just a completely different world where like
[04:47:51] that range where like
[04:47:53] the...
[04:47:54] The statistical difference between runs and because, you know, browser changes this slightly is more significant than the actual performance performance.
[04:48:05] thing.
[04:48:06] Right now, Svelte has joined us up the front.
[04:48:09] Um, Inferno,
[04:48:10] because the Chains of Testing also joined us up in the front recently.
[04:48:13] But the other frameworks are not there.
[04:48:20] Thank you.
[04:48:22] Really? They were offended?
[04:48:26] Thank you.
[04:48:27] That's funny.
[04:48:30] I mean, I can see the React folks being it, but like...
[04:48:33] Like...
[04:48:34] I mean, ViewVapor and Svelte 5,
[04:48:39] are undeniably
[04:48:41] boring the approach we took.
[04:48:43] Like.
[04:48:44] So,
[04:48:45] I think that's
[04:48:46] like okay to kind of point out they acknowledge it themselves you know what i mean
[04:48:52] I mean, Svelte 5 kind of pushed more on knockout and signals, but if you look at the renderer, we're talking solid.
[04:48:57] If you know,
[04:48:58] Vue always had signals even, you know, under the hood, even before solid went open source. So,  you know, I can't take credit for giving them signals. I mean, technically,  they had the Composition API came later, but like Vue would have
[04:49:10] probably gone that way anyways because of React books, not because of anything I did.
[04:49:15] But the renderer,
[04:49:17] for VueVapor, yeah, Solid definitely impacted why they went that direction.
[04:49:23] Thank you.
[04:49:26] Yes, exactly. Or they will be soon. That's Dave's whole point.
[04:49:32] This used to be an edge, but we always knew it.  This is why I didn't like marketing on performance.  Like we talk about it.  It'd be like a flag and it's obviously on the homepage, but I didn't,
[04:49:40] I stopped talking about performance almost around the time, before 1.0 especially, because
[04:49:47] We had already...
[04:49:49] Think about when Solid 1.0 came out, Solid was the fastest framework already for three years.  Like it wasn't new news.
[04:49:55] Like,
[04:49:56] Like it just wasn't worth
[04:49:58] Like, I just...  I thought...
[04:50:00] Things will catch up.
[04:50:01] sooner um
[04:50:03] I guess we still have server-side rendering. We can be fast server-side rendering.
[04:50:08] This is a good thing, like that everyone is kind of in this zone.
[04:50:12] No
[04:50:13] I mean, part of it is because, yeah,
[04:50:16] Um...
[04:50:17] Everyone getting faster apps is a good thing, but it's also because for us, people like frameworks becoming more solid like is a good thing because it validates our approach.  You know, it says that we've done a good thing.
[04:50:30] Yeah, I mean, I've been saying that for years. That benchmark has been done since
[04:50:36] Like, when Inferno came out,
[04:50:38] they shot way up the benchmark.
[04:50:41] And then surplus.
[04:50:42] an EV, different VDOM and EV, and Surplus, basically the predecessor of what Solid does, jumped up.  And then I was able to kind of just push it at
[04:50:50] bit more faster than surplus.
[04:50:52] And then.
[04:50:53] like,
[04:50:55] Until block Doms started showing up, there wasn't anything else.  But the block Doms are also in the same range as signals back then.  With updates, it looks like block Doms are a little bit faster now.
[04:51:05] But
[04:51:07] you know, for this benchmark. But basically from Dom's perspective too, he was like, this benchmark was done when Inferno showed up. I think it was done a little later when we showed that reactivity was viable. Like when Surplus showed up on the benchmark in 2016, that was about when we knew all that was going to go. I, as I said, I was able to get another three or 4% over Surplus by doing template cloning.
[04:51:30] Um, but
[04:51:32] which I got from a different library that used to be out on top Dom C.  But that was the last time we had significant uptake in this benchmark.  It's too close now.
[04:51:42] All right.
[04:51:43] Come on.
[04:51:45] Speaking of Million.js,
[04:51:46] He's hiring.
[04:51:47] This is an opportunity. I just want to give a big shout out to Aiden. Aiden is awesome. It's awesome that he got funded like this for open source.
[04:51:55] Um,
[04:51:58] Thank you.
[04:51:59] So...
[04:52:00] Yeah, I mean, and this month, I get it.  There's money in this because people want to make their react faster, right?
[04:52:06] I wonder how much this is at odds with what React core team wants.
[04:52:10] But,
[04:52:11] I think there's people willing to invest in legacy.  One of the biggest challenges with Solid we have
[04:52:15] Where we wouldn't get this kind of investment probably is
[04:52:18] that, um,
[04:52:20] you don't get to keep your React code, right? It's a new framework, a new paradigm.
[04:52:24] But for anything short of taking the full jump,
[04:52:28] Million is very compelling. So I, I,
[04:52:32] This is awesome for Aiden, and this is awesome for whoever gets hired for him.  So this is an immediate repost.
[04:52:41] Meta-frame benchmarks were challenging, to say the least.
[04:52:47] Our measuring tools aren't good enough. Alexis did some work, but at a certain point I just like had to pull them off and be like, let's just build the features and then we'll get back to the benchmarks.
[04:52:57] Eh?
[04:52:58] Our way of measuring isn't tight enough, and that's going to take years of work, probably.
[04:53:04] I've seen some good demos, I'd like to explore it more, but we have to shift focus and work on features.
[04:53:12] Thank you.
[04:53:13] Thank you.
[04:53:15] I'm probably not going to support this, but I would be interested in supporting
[04:53:20] solid inside React. I like the other direction. I've made prototypes for it. Someone's made a  version that works in Next. I'm pretty stoked on making that work. The thing is, we don't want the  bulk of React stuff coming in.
[04:53:33] It's interesting. I realize that up to a certain point, it's easier to pull solid into React, which is why I'd want to focus that. Then in the next point, you're like, okay, now I have solid apps and I want to pull React in.
[04:53:42] I want people to resist the urge to do that.
[04:53:46] To be fair,
[04:53:47] I built
[04:53:48] code sandboxes that show how you can do it. If you're client-side only, you can 100% do this,  and it's not very hard.
[04:53:54] Um,
[04:53:55] I have code to show for people who want to do this.
[04:53:59] But the hardest part of the bundler, it's getting both JSXs to compile differently.
[04:54:04] but
[04:54:05] That being said, I don't see this that direction being a focus.  I think it's kind of a
[04:54:12] a lot of time spent for
[04:54:15] Or something that like...
[04:54:17] is
[04:54:19] I mean, we should ask quick how well this has worked for them.
[04:54:26] Thank you.
[04:54:28] Thank you.
[04:54:30] Are you talking after beta two? Like we are changing the API right now. But after beta two, most of the API, API surface is being defined by other libraries, not by start itself. So I can say yes to this.
[04:54:47] Yeah, solid in React would be more beneficial, I agree.
[04:54:53] If you have a client-side app,
[04:54:56] I can probably direct you on the right way to do it.  Server-side running is a bit harder.
[04:55:01] I'm sorry.
[04:55:02] All right.  Um...
[04:55:05] Where are we going?
[04:55:06] Okay, bookmarks. Last section for today.
[04:55:11] Talked about analog.
[04:55:14] I love this.
[04:55:16] Thank you.
[04:55:19] If you don't force reload your page every five minutes regardless of what your user was doing at the time you ship too late.
[04:55:25] I like this attitude. I mean, it explains next 13 as well, but I do like this attitude.
[04:55:31] In all fairness, like...
[04:55:34] At a certain point, you gotta make the call, and when it's that edge, like, that edge out, like, you're probably okay.  And this is why I was talking about Solid Start beta 2. I'm even, like, nervous to release beta releases. It's time to go, and, uh...
[04:55:47] If you guys...
[04:55:49] have a
[04:55:50] have a problem with that, you can
[04:55:53] Blame Guillermo.
[04:55:54] *sniff*
[04:55:55] Truthfully, I bookmark this because I'm going to be able to use this tweet for years to come.
[04:56:00] Whenever someone says something about Next.js,
[04:56:03] not being ready or a feature missing, I'm just going to
[04:56:05] I'm just going to use this tweet.
[04:56:11] Completely out of context, because it is actually showing someone reloading after five minutes.
[04:56:17] But
[04:56:18] But this is my ultimate Guillermo tweet to respond to anyone complaining about Next.js.
[04:56:25] Okay.
[04:56:27] So there was a whole conversation about SPA versus MPA and...
[04:56:33] I know this is good for apps and dashboards, but it's different. Part of this thing is,
[04:56:40] I think Yoramo considered CSR spas,  and he doesn't consider what Next.js does as a spa.  And Malte came in, the CTO, and I was like,  no, I consider them all spas.  I have a slightly different definition, and if you...
[04:56:54] We'll look at this in a minute, but...
[04:56:56] This whole thing got blown up when Dax basically was like...
[04:56:59] Oh yeah, is that so? Check out this awesome developer experience on nextjs.com, you know.
[04:57:06] Yeah.
[04:57:06] And I mean, there was apparently a bug or something in this. The only thing that I, that was,
[04:57:15] that that i immensely enjoyed about this on the other hand because this this argument is tired and
[04:57:24] What framework do you think made this awesomely fast app that we're looking at here?
[04:57:30] Can you guys, anyone guess?
[04:57:32] what framework he used to build this awesomely fast app.
[04:57:36] I guess people didn't...
[04:57:39] Yeah, I guess people miss the subtitles. But the thing is, people who were looking at this whole story and doing the back and forth, the app that was the example of the fast app and the app that was the example of the slow app was actually solid versus Next.js.
[04:57:55] I know not everyone picked that up
[04:57:59] So, this is...
[04:58:03] This is just a little bit of fun.  I do think this is a definitions problem, right?  Fun facts, people on Earthspot do not share a definition of those terms.
[04:58:13] I got flagged on something where someone was like,
[04:58:17] Ryan Carniota coined the term, I didn't coin it, but about single entry versus multi entry, I agree with this. With all respect to Ryan, he's not old enough to have been around. I don't know what he's talking about, maybe there's some joke I'm missing, because I consider myself one of the old guard, but...
[04:58:33] You know...
[04:58:34] I think he means coined.
[04:58:38] Yeah.
[04:58:40] I did not coin it.
[04:58:42] But, uh,
[04:58:44] I still hold by this definition. I think
[04:58:47] I think we have to retroactively talk about spas in terms of those client-side rendering and server-side rendering, and we shouldn't.
[04:58:53] like they are still single-page apps.  I do think server components are something different  because of the aspect of
[04:59:00] partial hydration. I think,
[04:59:02] how it manages hybrid routing.  I think it is not classically.  He himself says he thinks  Turbolinks and the AstroView transitions  aren't classic spas.  I consider...
[04:59:15] I consider React server components in the same category,  or they're in a different category from those, but they're...
[04:59:22] they're like approaching it.  They're not the same as single page apps.  But whether you render on the server  or your client side render only,  these are all single page apps.  So this is why I've had a lot of amusement with,  especially Guillermo's post.  Because if I go back far enough, I'll have a Guillermo post  where he's like,
[04:59:38] SPA's where it's zero interest rate phenomenon.  And it's funny, like according to multi...
[04:59:44] all of Next.js' spas, so like,
[04:59:47] Yeah, Garmo sometimes makes tweets that I know I'll be using forever. So...
[04:59:53] I think, yeah, I use it on my slide decks.
[04:59:55] Okay, let's keep on going.  SvelteKit 2, another announcement.
[05:00:00] This one didn't have a ton of features on it,
[05:00:02] except supporting Svelte 5 and shallow routing.  Shallow routing is interesting  because it lets them update state
[05:00:09] without
[05:00:11] causing a navigation,
[05:00:14] so they can add a history entry.
[05:00:16] I think it's interesting. I didn't look at the actual implementation, but it seems like something reasonable to add to a router.  But I think the bigger one is Svelte 5. Support, even though Svelte 5 isn't out, they want to kind of prepare it for Svelte 5. So this is just, this is like when Solid Start 2.0 comes out, it's probably going to be like this kind of release.
[05:00:32] So
[05:00:34] Probably not a...
[05:00:35] a big thing to talk about.
[05:00:37] Um...
[05:00:40] Yeah.
[05:00:40] Let's.
[05:00:41] Let's let's go on because I'm almost out of time.
[05:00:46] Uh...
[05:00:48] Yeah, Ryan Florence, Svob versus...
[05:00:52] It's all valid. The trick is being able to leverage this
[05:00:54] around the single project instead of the right tool for the job.  Remix is getting good at this with clients data, SPA mode coming, and really powerful stuff.  So they're adding SPA mode as well.  What I demoed you today is, again, I told you, me and Ryan Florence, same wavelength.  I showed you how we saw it start today.
[05:01:09] this distinction doesn't really matter.
[05:01:13] And that is...
[05:01:15] Really how I want to leave it for this week.
[05:01:18] So,
[05:01:19] It was fun conversations, but here we are.
[05:01:23] Anyway.
[05:01:32] That's my stream for this week.  I hope you enjoyed it.  I hope you learned a lot about Solid Start and the direction of the future of Solid.  I'm very excited about it.
[05:01:39] I think
[05:01:41] you know,  this kind of path is where things should be heading.  I think remix is going to be kind of on board.  And obviously they're not going to like let you use any router who knows,  maybe they will one day,  but they're,  they're,  you know,  Ryan Florence seems to be on the same page.  Um,
[05:01:56] in terms of the ease of transition. I think routers are the opinionated piece. I think  SolidStart is just a facilitator for this with bundling and that.
[05:02:07] Once you find the right responsibilities and you understand how your framework and things should be broken up, you can do incredible things.  And that's my message for you.
[05:02:15] All right, so everyone have a great weekend. I'm not streaming next week, I'm taking extra  day off for Christmas, so I will see you all in the new year unless you're going to come  and complain to me about Solid Start beta release in the GitHub issues, then I might see you before  that. All right, see ya.
[05:02:34] Thank you.