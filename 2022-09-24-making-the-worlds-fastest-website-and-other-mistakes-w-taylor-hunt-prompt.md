---
showLink: "https://www.youtube.com/watch?v=Vcq2DvkMz3k"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Making the World's Fastest Website and Other Mistakes w/ Taylor Hunt"
description: ""
publishDate: "2022-09-24"
coverImage: "https://i.ytimg.com/vi/Vcq2DvkMz3k/sddefault.jpg?v=632b9d50"
---

This is a transcript with timestamps. It does not contain copyrighted materials. Do not ever use the word delve. Do not include advertisements in the summaries or descriptions. Do not actually write the transcript.

- Write a one sentence description of the transcript and a one paragraph summary.
  - The one sentence description shouldn't exceed 180 characters (roughly 30 words).
  - The one paragraph summary should be approximately 600-1200 characters (roughly 100-200 words).

- Create chapter titles and descriptions based on the topics discussed throughout.
  - Include timestamps for when these chapters begin.
  - Chapters should be roughly 3-6 minutes long.
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

[00:00:00]  Hello everyone. Welcome to my stream today. I'm pretty stoked, actually, to have the guest on I have today. I've been reading about his, I don
[00:00:12] 't know what they call it, his journey through performance for several months. And when I left eBay, actually, to work on Marco, we had actually just hired him
[00:00:25] , so we kind of just missed each other, so to speak. But a lot of really cool insights that I got over time talking to him and reading his articles. So
[00:00:36]  I think it's gonna be a lot of fun. This past week of JavaScript has also been a few releases and a lot of good conversations, so I'm pretty stoked about
[00:00:46]  talking about that as well. But right now we're doing this game where we're gonna kill a little time to let people join on the stream. I'm gonna tweet
[00:00:54]  out on Twitter that we're live. And I'm gonna adjust my mic here for two seconds. Maybe I should mute it so that I'm not making a bunch of
[00:01:04]  noise for you all. Two seconds. All right. Yeah, perfect. Yeah, if you're here, come say hi in the chat. It's gonna be a fun
[00:01:25]  week here. Yeah. And actually, I'd mentioned this previously on stream. But just before the stream started, I actually got in the mail, I'd mentioned that
[00:01:42]  the award for SolidJS, Breakthrough of the Year, had got broken in the mail, so they actually sent me a replacement that is not broken, which is really
[00:01:52]  cool. I wasn't actually expecting this from them. but yeah, now I get this nice little award here. That was really cool of them. I did not
[00:02:05]  expect them to actually send the replacement. All right, people coming in, starting to come in now. Let me actually send the message out on Discord too, get some more
[00:02:15]  people in here. Let's see here. Let's see here. General. Yeah, I want to make sure people check this out. I'm starting. So
[00:02:33]  how, how, how, how, how, how's everyone doing today? You had a good week? Alright. And one more. Let's, let's just
[00:02:51]  go on all the channels. Taylor Hunt on stream. All right. Let's see. There we go. All right, cool. All right, cool. Fl
[00:03:12] ugged it in all the right places. All right. Yep. People doing fantastic. That's, that's great to hear. Yeah, no, I, I took
[00:03:20]  a week off and now I'm back. I went to Finland, did a react key, did a solid keynote at a react conference, which some people thought was kind
[00:03:31]  of interesting, but it was a lot of fun. We'll talk about that a bit later, but I'm glad to be back. Yeah. Twitch bigger than YouTube.
[00:03:39]  I mean, that is a topic. And to be fair, I probably should share the YouTube link because I, as I said, I just made affiliate and now you're
[00:03:50]  probably getting blasted with pre-rollers. Pre-roll ads right now, which I'm not, I'm not sure if that's a good thing. I
[00:03:57]  was, I was kind of confused on this. I was like, should I be pushing the YouTube or pushing Twitch? Twitch chat is nice. There's a lot of nice
[00:04:06]  features of Twitch. It looks like the chat that I got going on here is all, is mostly all YouTube though today. I got one person to come, come and join
[00:04:13]  us from Twitch right now. Oh, no, there's two. Hey, Ben. Um, but generally speaking, uh, uh, I don't know where to
[00:04:22]  sit on this. I, I, I, I've never heavily relied on, um, Twitch. Yeah. My first ad on this channel. On this channel
[00:04:30] . Yeah. That's the thing. Uh, people are smart, smart and they do like pre-roll thing or they do like rolls like every 30 minutes. 30
[00:04:36]  minutes. I don't know how I want to handle this. That's like, I'm pretty honest. So I, once I signed up and I realized what this meant
[00:04:43] , I kind of like, I don't care enough. I like, I want the promotion and I feel like playing the game might do it a bit, but on the
[00:04:52]  other hand, I could care less about the small amounts of money that I make when I do this. So it's kind of like, um, the ads are kind
[00:04:58]  of like a net negative perhaps. Like, and the problem is every 30 minutes you can stream ads, right? Like you can like, and then you don't have to
[00:05:07]  worry about people getting the pre-roll ads. But the unfortunate thing about that is that's not how we roll here. Like if, if you know our stream, we
[00:05:15]  tend to go long and we go deep on topics. That kind of interruption is actually really, really annoying. Um, I have to admit, right? So like
[00:05:27] , yeah, just, there we go. Give us some solid emails. Yeah. I don't even know how Twitch works. I'm so maybe that that's the secret
[00:05:35]  here. Maybe I, maybe with the right help, the trade-offs will be worth it. And then we'll get emotes and subs and whatever. Like I started
[00:05:43]  on YouTube because it was like point and click is the easiest thing in the world for me. I was just like, okay, now I make stream go YouTube, right?
[00:05:51]  Um, I, I keep on hearing that Twitch is really great. Um, although, I mean, you, many people probably missed it, but, uh, Theo
[00:06:01]  had an amazing, amazing, um, uh, uh, space on Twitter, where he pulled in a whole bunch of people, ex Twitch devs. Uh, people have
[00:06:10]  worked on Twitch for years. And the talk about the new change to the partner program where they, where now it's like a 50, 50 split instead of, I
[00:06:18]  think it was a 70, 30 split on subs, not ads. See ads apparently never were big money anyways, but they're actually cutting out of the subs, the,
[00:06:25]  the money that the users actually give directly to the streamers, which, yeah, I mean, I don't know how I feel about it because I've the money
[00:06:32]  and content, like that's not where I'm at, but it seems like a big deal. I've watched a lot of speed runners, like the, the, their
[00:06:41]  world was all kind of upturned very rapidly. So yeah, yeah, exactly. Yeah. We don't care about Twitch and drama, do we? Yeah.
[00:06:53]  Yeah. Okay. How are we doing here? Just wanted to make sure everyone had a chance to get past those pre-roll ads. Really? That's my concern here
[00:06:59] . If I talk long enough, everyone will join on, get past the pre-roll ads. Otherwise we're going to miss some really good Taylor content here because you have
[00:07:07]  to deal with Twitch. And I feel like that's kind of my fault. I, I, this is my first stream since being an affiliate. So we'll,
[00:07:14]  we'll figure it out. As I said, rolling in the middle seems complicated. Like it's weird that as a streamer, I have to worry about that. I
[00:07:21]  get, I guess it makes sense because it gives me the most control. But honestly, I, I like you stream yard. It just pushes out like this. This is
[00:07:29]  a whole new level of stuff and admittedly not one that I was ready for. So I probably got ahead of myself. Yeah. I don't, yeah. I mean
[00:07:37] , I don't, I don't actually know what the deal is with subs. I'm sure there are a great thing. And actually I just realized that I don
[00:07:45] 't have everything plugged in properly. Two seconds. And, you know, with that, let's move on from this topic because. Yeah. Pre-roll is one
[00:07:56]  of the reasons I use a countdown scene on semantics. Yeah. Like the people who've done this a while know, know the drill and know what to do. Me
[00:08:05] , myself, I'll just ramble for a few minutes and you're not missing anything important right now. Yeah. You know, this is the thing. Maybe this
[00:08:12]  will force me to up my content game. I'll get better production. But now that I've killed enough time at the beginning here so that everyone can have a chance to
[00:08:22]  get past those pre-rolls. And yeah, if anyone has ideas, like do help me. Send me links, chat, reach out, DM. I don't
[00:08:29]  know. Like this is, this is all new, new to me. I was like kind of surprised with the affiliate thing. I guess I just had the stream a
[00:08:36]  little bit more. But now that I'm here, I don't even know if I want this. So we'll figure it out. Anyways, sorry for that tangent.
[00:08:45]  I think every, I think everyone's here. So let's, let's, let's bring, let's bring, let's bring Taylor on. He might do a
[00:08:52]  better job of introducing himself than, than I have. Although if you read the description from the video, he's been doing amazing work from inside the company, you know
[00:09:04] , e-commerce consideration where performance actually mattered a lot. And we talk a lot on the stream about like how to maximize performance. And it gets in a very kind of
[00:09:16]  theoretical range and show benchmarks and small demos. But what does it mean in large scale? I've seen some of this from my, when I worked at eBay, but it
[00:09:23] 's nice to see a corroboration of, of this kind of thinking. So without any further ado, let's welcome Taylor to the stream. Hey Taylor, how are
[00:09:32]  you doing today? I'm all right. How are you? Pretty good. Um, as, as I said, uh, it's been kind of an interesting week
[00:09:40]  and a lot of different things going on, but I was like super stoked to have the ability to have you on stream and talk, talk about this stuff. Cause I,
[00:09:48]  I've read all, all the articles, like right from when you first put the first one out, and I was like, like, I haven't seen people talk
[00:09:55]  about it as much. We always get these kinds of gleams into different companies. Like there's that, uh, tweet, uh, back in May that probably if I
[00:10:03]  looked through my bookmarks long enough, I'd find it. But you were basically some, uh, former Amazon. I don't even know if they're former,
[00:10:10]  but basically an Amazon employee was basically saying, look, we can't use react for SSR at Amazon. It is literally too slow. This blew my mind. Um,
[00:10:18]  we tried all these different things and it literally was not good enough. Like we just couldn't get what we needed out of it. And that's a pretty powerful statement
[00:10:27] , but we only ever get like hints of it. Um, very rarely do we see the process that goes in like to do the bake offs or like to go through and
[00:10:35]  analyze and look at all the, you know, pieces that can go into that decision. Cause it's not a simple decision. You don't just like go pull down the
[00:10:42]  JS framework benchmark and be like, ha ha ha there. That one's the fastest on the list. Um, this is an area of your entire job. And you do
[00:10:50]  that constantly every day. Right, right. Right. So that's a place where I work on from micro optimizations. That's how I, I find where slow
[00:10:57]  downs are. But, um, sometimes the, you know, not sometimes, almost always the result is more than the sum of the individual parts. So I, I feel
[00:11:05]  like you could, you have incredible insight there. Um, so yeah, I don't know, Taylor, maybe easiest to start this. Just tell us a bit about yourself
[00:11:13] , how you got into web dev. Let's just walk back a little bit and, and just talk a little bit about you. Okay. Um, I, I
[00:11:23]  failed out of college three times, and then I was diagnosed with adult ADHD, which explained a lot about failing out of college. Um, I was working as a barista
[00:11:31]  and behind the counter. And during nights, I taught myself self web development backwards because I was really into web comics and I wanted to make my own. And I felt
[00:11:40]  that I had a fairly good idea of what made a good comic, but I didn't really know anything about what the good web. And it turns out when you search
[00:11:50]  Google to find out how to make a good website. It ends up giving you different results than if you just search how to make website. And so I taught myself,
[00:12:01]  um, and so I taught myself, um, with influences such as Jeremy Keith, Rachel Andrews, uh, Jen Simmons, kind of the old vanguard, I suppose
[00:12:09] , of the web. But they're still very active today where I learned essentially that an ideal website turns no one away, um, regardless of the user's device,
[00:12:22]  their connection, uh, what browser they're using, what their abilities or disabilities are. Um, and ideally if you can afford the translation fees, which language they speak
[00:12:30] . But I couldn't handle the translation part, but I felt as a developer, I could do the other stuff. So as you might imagine, when I got hired to
[00:12:39]  work on a giant react spa for Kroger.com, there was a little bit of a culture shock that manifests in a lot of disagreements between myself and, uh
[00:12:50] , other developers. Well, how did you end up there? Like, so you, you, you, you told the story and it's interesting when I've been
[00:12:57]  talking to a lot of people, um, recently who, who, you know, kind of made their name, got successful, uh, you know, what they do.
[00:13:04]  There's a lot of interesting stories there. It's very, everyone gets into web dev a very different way. And, um, I don't necessarily, we don't
[00:13:13]  necessarily need to go through like the whole journey, but even, even just getting, getting in the door of Kroger, like, where were you at that time?
[00:13:19]  How, how did you end up you know, there in the first place? Um, at first I got a job to work on the website for Reynolds and Reynolds, which
[00:13:29]  is a car insurance for dealerships company in Dayton, Ohio. Um, and then after that, I got a position in a small, uh, marketing agency called LM
[00:13:44] G also in Dayton. And after quitting from there, just because ultimately I don't like marketing. I feel like my work there was kind of a net negative for the world
[00:13:57] . Um, um, my former manager at Kroger, uh, walked in the door while I was holding it open for a bunch of attendees at the local Dayton
[00:14:07]  web developers conference. And so he recognized me, but the reason he recognized me is that he had previously given a talk at that local web developers meetup, um,
[00:14:21]  where he was talking about the new Kroger.com design system and component library, which at the time used web components. And he asked the audience, uh, if
[00:14:32]  anyone had never heard of web components, and I was the only person who raised my hand and, uh, he made the mistake of asking me what I thought about him
[00:14:41] . And I told him the truth because I said, ah, they suck. They don't really do anything that actually makes life better for my users. It's just like
[00:14:49] , I forget what I exactly said at the time, but, uh, you know, ultimately it's true. It's a web, web components are a standard for inter
[00:14:59] op on the back end, but they don't until recently with stuff like, uh, declarative shadow dom and that sort of thing, they don't really change the
[00:15:08]  game for how server side rendered web pages worked, especially not then. So just so I understand they had a web component, uh, set up and then they migrated from web
[00:15:20]  components to react, or was it always kind of like a mixed bag library started as web components because he wanted it to be framework agnostic, but then the,
[00:15:29]  um, inexorable gravity of react happened. And so it became a rack component library. Hello, my cat is here. She's being annoying. I will introduce her briefly
[00:15:37] . Go for it. It's a sneezer. She is 17 years old and she is a goblin. Interesting. So first that's an interesting first impression, but
[00:15:54] , uh, what you're saying is that it eventually led you to working there. Um, yeah, I, I ruined his talk and that made him remember me.
[00:16:02]  So, uh, I feel a little bit bad about that, but at the time he did say, what do you think about them? And I told him that I didn
[00:16:10] 't like them. All right. All right. All right. For any web component fans out there, I have, uh, changed my opinion for the rosier.
[00:16:18]  So don't worry too much about that. But okay. So when, when was this about just so I can kind of just get the timeline here, like, uh,
[00:16:26]  beginning of 2018, I'm going to say January, 2018 is when I first joined Kroger. Okay. Cool. Cool. Right. Right. So, okay
[00:16:34] . So that's what four years ago ish. Okay. Cool. Cool. And then, yeah, I guess we can fast forward a little bit now. So yeah
[00:16:44] , you said you, when you joined Kroger, um, it was a bit of a culture shock for you because of the, this kind of pull, you
[00:16:51]  said the gravity of react kind of had pulled the, these web components into them and generally Kroger's website is a single page app, uh, built with reacted and
[00:17:00]  with, with server rendering or. Yes. Um, this was before stuff like next existed. So they had a homegrown react SSR thing, which replaced the previous architecture
[00:17:14] , which was multiple single page apps, uh, subdivided by teams, but that had performance so slow that the business side actually asked the engineering side, please make
[00:17:24]  the website faster. And so it became a single single page application. Well, I mean, I mean that, that, that is that kind of push will do it right
[00:17:34] . If the, I guess if the business felt it, so I guess the, when you said that it felt really slow, I guess, is it because navigating between each
[00:17:42]  of the siloed single page apps, brought such an overhead. Um, yes, it was something like the business had identified that just actually buying groceries from the website
[00:17:53]  took X amount of seconds, just loading. And it made, uh, using the website, not, I don't have to be polite here. It sucked. Right
[00:18:04] . Right. Right. Okay. I mean, that's, that's, that's, that's fair, but yeah. So, so that we can understand it essentially
[00:18:10]  when you talk about these single page apps, like a process in the process of buying, I don't know, let's say I want to buy some eggs. How many
[00:18:17]  of these apps would I walk through to get from the finding the eggs to the checkout? Just like it's not exactly just roughly just to help me imagine what this was
[00:18:27]  like five probably because it depended on however the teams were, uh, siloed by vertical. Um, and I don't know what it was like back then.
[00:18:37]  This was before I got hired on there. Uh, it was kind of Conway's law to the extreme though. Right. Okay. That makes a lot of sense
[00:18:45] . Um, because I, um, I imagine to a certain degree, they might've started as almost multi-page in a sense. And then like these, each section
[00:18:55]  just got bigger and more involved and then they, they never united them. Cause you said the organizations are all separate or I don't know. I mean, I'm,
[00:19:03]  I'm speculating at this point. So I'm, I really don't know what the reasons behind it either. It wasn't really multi-page app because they tried
[00:19:10]  to do code sharing between the different single page applications, but that was a technological bet that didn't pan out. Gotcha. Okay. Yeah. Okay. Well, that
[00:19:18] 's interesting. Okay. So this, this is helping me at least establish the kind of ground floor, how, how, how you, you got in here and w what
[00:19:27]  it looked like. So what happened? How, how did you find yourself for those who aren't aware Taylor Taylor spent around two years looking at how they could improve performance at
[00:19:38]  Kroger. I want to know how, how you got to that point. Like. So when I was hired for Kroger, it was to maintain said
[00:19:46]  component library. Um, I had, I was essentially hired on as the person who would merge the pull requests, listen to other teams, uh, do bug fixes, that
[00:19:57]  sort of thing. And eventually that turned into a funded design system effort. And so as the person working on the component library, naturally I got transferred to the design system
[00:20:11]  and that team started exploring a lot of different stuff because in theory, the design system had to be platform agnostic. So we looked at various ways of server-side
[00:20:21]  rendering, uh, vanilla web components. We looked at ways of sharing react components into angular, a lot of different stuff. And at some point tailwind happens because nobody
[00:20:35]  shut up about tailwind when it first came out. And, um, in a fit of passion, uh, my tech lead at the time added it to the website and
[00:20:43]  some other employees and I looked into how much that impacted our performance metrics. And it ended up being half a second on desktop in terms of time to first paint. And
[00:20:55]  when we complained about that, he countered with a very fair question, which was, I get that it loses us money, but does it make up for the amount we
[00:21:03]  gain in developer experience? Right. Right. It's always that balance. Right. I mean, I think it's a, uh, stupid balance because developer experience is one
[00:21:13]  of those things where it's like trickle down UX, but in this particular case, it was fair. We had no idea how much money 500 milliseconds in first paint
[00:21:24]  even roughly cost us. So my coworker argued the need for a performance team and he and I started one essentially. It was like a small performance sub team where we just
[00:21:38]  started, uh, you know, monitoring and measuring Kroger.com looking for hotspots, looking for ways to improve, writing up issues, suggesting them to
[00:21:47]  other teams. And when we picked up a third member, his job was to compile a rough estimate of how much money would working on performance, uh, make Kroger
[00:22:01] . Like even just a very rough ballpark number. So managers could be like, oh, if we devote X hours to this, then it will be worth Y amounts
[00:22:10]  of money. And therefore it's worth prioritizing this over the other thing. You know, it's, it's a necessary number, um, for business purposes, but
[00:22:18]  it's not sufficient because what we ended up happening is, uh, the other teams didn't really believe in it, I guess, emotionally. So performance just never got worked
[00:22:27]  on unless we were doing it. And when it's three people against an entire company adding features, uh, we were not winning. Yeah. Interesting. Yeah. Because
[00:22:37]  so previously to this, there wasn't actually a performance team. Everyone kind of had it. People had a hunch that there was some correlation between performance and sales, like,
[00:22:46]  but it wasn't being measured in that way, or at least as fine-grained. Cause I'm just, my experience at eBay was that, um, they have
[00:22:54]  their speed team. And when they migrated from Java to JavaScript, which is a big lift, like that, that there could be no regressions on performance. The
[00:23:03] , the, the, the, they were measuring like every single, there was a study that Adi, uh, Asmani worked with eBay and they published, uh,
[00:23:11]  uh, uh, I think, uh, three years ago where like some performance improvement at eBay, like every X amount of milliseconds directly correlated with X amount of dollars.
[00:23:23]  Um, I, and I've seen several studies to this kind of effect, but I guess it was interesting. Like how, how much did that play into the, the
[00:23:32]  way Kroger was thinking about how they were building the web, the website at that time? Uh, there was no such thought. Okay. And that was explained
[00:23:42]  by Kroger.com has been around since the nineties. If you go to the Wayback machine, you will find some very nostalgic iterations. There's a 256
[00:23:51]  color, uh, palletized version of the old gradient logo, and it's very web 1.0. It's nice. Um, but when I was there,
[00:24:03]  it had just been after like a big recent effort to kind of have a startup inside of Kroger, the large grocery company, to make a website that people could
[00:24:12]  actually buy groceries from. So up until that point, it was pretty much startup mentality in terms of like make something, anything ASAP. And then once you have a revenue
[00:24:23]  stream, then we can worry about other stuff. Okay. So now at least there's a team, um, and you're working and you're working on it. So
[00:24:32]  I guess, I guess my question is, I guess the, the, what was the first step? Was it collect, you were suggesting it was collecting analytics. What,
[00:24:39]  what did that look like? Well, what do you say collecting analytics? What do you mean? Well, just figuring out if there's correlation between revenue and page metrics
[00:24:50]  and stuff like that. Yeah. So there was kind of a catch 22 with that because ideally the way you get those sorts of numbers for your site in terms of how much
[00:24:57]  money does performance make us, you would make a big performance change and then see how much your metrics improved by. To do that, you would need to invest a lot
[00:25:08]  of money in a major performance improvement and to get the approval to do such a thing. So you're starting to see how this is a problem. So instead we,
[00:25:16]  uh, cheated off others' homework and we went to WPOSTats.org and thinkwithgoogle.com, looked at the case studies that were, you know
[00:25:24] , other e-commerce websites, uh, crunched the numbers, ran our own, um, metrics like average order value and conversion rate through what we found. And we
[00:25:35]  ended up with a very rough ballpark number that was not very precise, but it doesn't have to be, especially, um, for that first push where you want
[00:25:44]  to be able to invest enough in a performance improvement to find out what the actual amount is. Yeah. Uh, yeah, that, that seems like a tricky place. Cause
[00:25:55]  you, you were supported by the company to be able to build this team and actually look into it, but then actually to show value of it is a whole other step
[00:26:02] . I was just actually just, I just pulled open your, your original article, the first article in the series, and you, you were talking about looking at these W
[00:26:11] PO stats and, and you, you, you basically used it to calculate, what is your kilobytes of JavaScript, uh, size, like how that impacted load time
[00:26:22]  milliseconds. I actually love this table. I found this really amusing, interesting where you said, um, this, this, the developer experience, um, um, thing
[00:26:32] , right. Where it's fast enough is where it starts. And two, I love my slow website. This is, this is quite a range. Um, but you
[00:26:40] , you, this is something you feel like you experienced when you were going through this. So I mean, not in such a clean and narrative form, but yeah,
[00:26:50]  essentially it was just like, Hey, uh, checkout team, we noticed you are loading a crypto library that you do not actually use on the front end, but it got
[00:26:59]  into the bundle. If you do the work to isolate it to a backend server, then it will be this much off of your route. Um, and there were,
[00:27:08]  they just never dedicated time to that sort of thing. The other teams did, which it was a culture problem ultimately, because everyone got to where they were in that company with
[00:27:17]  the startup mentality. And we were the new weirdos who were telling everyone that they actually had to care about something they never had to care about before. Right. Right
[00:27:26] . So the way that happens is unfortunately you need someone in charge to start making that argument instead of us who were just lowly peons. And, uh, I don
[00:27:36] 't know how you do that, but we tried. I see. So yeah. So it starts there. You start identifying stuff, but the problem is you have nothing,
[00:27:44]  you have no way to actually prove it because you have to do the improvement to see the benefit. So like, what did you do? Like, that sounds like a really
[00:27:52]  tough place to be in. I mean, we were able to do some of the improvements ourselves. Um, but again, we were a tiny team and there was so
[00:28:03]  much churn happening everywhere else that whenever we made an improvement and then that combined with content updates, uh, traffic usage patterns, because we used to have a free digital coupon
[00:28:14]  Friday. So Fridays were our most visited day by a long shot. It was one of those things where it's like to get statistically significant results. We needed one of
[00:28:23]  our improvements to stick in production for at least a week, ideally more than one week. But by that time, so much had changed from underneath us that it was hard to
[00:28:32]  correlate. Right. Yeah. So ultimately I made the decision on my own that I was going to show these react developers emotionally, how much better a fast website could be.
[00:28:44]  Um, you know, if you want to picture a mad website going, I'll show them, I'll show them all. Uh, that is probably close. And
[00:28:51]  the weird part is I succeeded. Um, and that's where the story starts. Right. So you finally like, okay, enough is enough. I'm just going to
[00:29:00]  show you how to build a super fast website. Um, that has, you know, the basis of this functionality. Like how did, how did you decide what,
[00:29:09]  how to scope that prototype, like how to make, make that thing? How did you have any, like this, how did you decide what you wanted to show and how
[00:29:17]  to show it? I guess what I'm asking. Could you, you made like a small version of Kroger essentially, or yeah, just tell me a bit about
[00:29:24]  that. Yeah. It was an alternate front end that sat in front of all the same APIs. Um, because I knew I wasn't gonna be able to touch those
[00:29:33] , but, uh, the node servers that talked to backend APIs, which talked to warehouses and in-store servers, and probably thousands of different kinds of machines that I
[00:29:43]  can't even begin to understand. Um, that's eventually just made it into API calls for Jason somewhere. And that came into the front end, the front end would
[00:29:57]  render a react page and then spit that out. And so I just wrote a different Docker container that could slot into the same, uh, production slot in our current cloud solution
[00:30:08]  at the time that tried to make the front end of Kroger.com as fast as I possibly knew how to make it. Okay. Okay. That's that sets
[00:30:19]  the stage. That's incredible. So you're, you're like, okay, if I could do anything with this, you know, minus touching the backend, if
[00:30:26] , if the backend services exist, that's their own domain. How could you possibly deliver the best possible experience to the end user that in terms of like speed performance, like
[00:30:38]  what, what, what would feel really good? Okay. And yeah. So, I mean, that in itself probably took some learning and investigation too. Right. Cause
[00:30:49]  like, I mean, you had some ideas coming in, but I'm, I'm sure, uh, I'm sure not everything you thought on the onset was how it
[00:30:56]  ended up in the end. So how did you get started? Like where, where did this start for you? I knew I wanted to go from login to checkout as the
[00:31:07]  core user flow, because if the e-commerce website doesn't let you do electronic commerce, then it's just a toy, not, not even a demo. Right
[00:31:15] . Um, so the things that I haven't shown in videos were things like, oh, select your store, um, your account settings, those were there, but they
[00:31:22]  were all kind of stubbed. Like the, uh, the location for the demo was hard coded in there and the UI and the interface, and even some of the API
[00:31:31]  calls were there, but it wouldn't physically let you change your zip code just because letting people do that sort of thing during a demo is a recipe for the demo,
[00:31:40]  not working. Um, one, one, but I, I'm going back to your, to your article here, the first one where you kind of laid it out.
[00:31:51]  Ultimately it sounds like the, maybe, and correct me if I'm wrong. One of the biggest early revelations you made was that the size of, and I guess
[00:32:01]  the execution cost of JavaScript was a big part of the performance issue, um, of, of these pages. And that really kind of set you on a, on a,
[00:32:11]  on a certain path. Like how, how did you figure out that? Cause I, I mean, to jump to the headline of the first article, you decided that your
[00:32:18]  app needed to be 20 kilobytes of JavaScript, 20, 20 kilobytes of JavaScript. That's, that's, that's a pretty low number. That
[00:32:26] 's probably insane to a bunch of people kind of, you know, they're like what? 20 kilobytes of JavaScript? How do you 20 kilobytes of JavaScript
[00:32:31] ? But the, the, I, it'd be, I think it'd be good to understand like how you got there a little bit. Sure. So, uh,
[00:32:38]  I actually cleaned this up for the article because the narrative wasn't this clean. Originally I was shooting for 14 and it wasn't just JavaScript. It was JavaScript plus the HTML
[00:32:47]  of given page plus the CSS to render that page. Um, yeah, sorry. Why 14? Yeah. So I had heard, and this used to be true from
[00:32:57]  what I understand that on average by default, almost every server will be able to send 10 TCP packets as part of its first response when you're connecting over HTTP, which
[00:33:10]  until very recently was over TCP and 10 TCP packets minus overhead roughly gets you 14 kilobytes. So in theory, that was the fastest your response could be. That's
[00:33:20]  no longer true because as it turns out, that was over unsecured plain HTTP and HTTPS has its own handshake process that requires multiple round trips. And
[00:33:30]  then, so by that time TCP is like warmed up its window. How much do you actually have? Then it turns out CDNs have been sending more than just 10
[00:33:38]  for the initial response for years. So that ended up not being an important metric, but that's where I started. Gotcha. That was a mistake as I have just stated
[00:33:47]  for reasons. But ultimately when I found Alex Russell's article about, Hey, if you want to be fast on a garbage town, ancient Android phone, here's the calculation
[00:33:56]  you run. And I ran that calculation. It was like, Oh, 150 kilobytes. That's a lot better than 14. And then it was like,
[00:34:03]  well, okay, but the business requires some analytics. How much do I get to keep? And I don't remember the exact number at the time, but Kroger
[00:34:11]  had something like 300 kilobytes of third party JavaScript, even though it wasn't necessarily all from different origins. So it was either I had to invent the negative kiloby
[00:34:23] te or I had to look into what we actually needed. Right. Right. That, that, I mean, that's, that's steep. Like basically third party
[00:34:31]  scripts had already killed your whole budget before you started, which is why, um, obviously solutions like party town coming out. Um, which I, I do want to get
[00:34:40]  a chance to try and see what the impact are, um, are really addressing that problem. But obviously at the time you were doing this party town was not a thing.
[00:34:47]  And you were like, It was a thing. It just didn't work for anything yet. Like they announced it and the idea behind it, but it had no integr
[00:34:53] ations with analytics yet. So. Right. Because I said two years. So technically you, you were building this stuff around 2020, which is about right at the time period
[00:35:02]  that, uh, it would have been announced. Yeah. Gotcha. Yeah. And to solve Alex Russell's math equation, I had to pick a target device and a target
[00:35:09]  network. And I actually have that device, uh, right now. Nice. I bought 15 of them for an internal demo back when, um, having a bunch of people
[00:35:18]  in an office is a thing you could still do. And that phone was $40 at the time. It is not that much now, but it is still the best
[00:35:26]  seller because the bottom end of the Android market is remarkably stable in good and bad ways. So you're saying like, even though we're sitting here two, three, four
[00:35:40]  years later from like you're initially looking and playing around with this stuff, those, those phones are still probably out there in the market still being used. Does that mean
[00:35:47] ? Yeah. Yeah. Uh, it's, I, I went to get photos today at Kroger's eye wireless stand and it's still there. Um, it
[00:35:54] 's still this 1.1 gigahertz of Android with, uh, like every year, either the cost goes down a little bit or they have a phone with like a
[00:36:02]  larger battery or a brighter screen or something, but the chip fabs are from 10 years ago and they're not going anywhere. The factories are still making those. I
[00:36:11]  think it's cool though, that you, you like, you know, again, I do want to simulated tests. You, you guys had the actual devices on hand.
[00:36:18]  I mean, that's a whole topic in itself, I imagine, but maybe we'll get to that a little bit later. You just knew from, uh, uh
[00:36:26] , from the math from Alex Russell that you roughly had 150 kilobytes. You had way too many third-party scripts that wouldn't even fit into it. Uh,
[00:36:38]  yeah. Where did you go from there? Cause I mean, that, that seems very prohibitive. Um, well, I talked to my boss and, uh,
[00:36:43]  he said, the business is never going to let you get away without this script and the other scripts. So I said, fine, those are the ones I'm keeping.
[00:36:49]  Um, and those ended up being roughly, you know, 130 kilobytes. So I had 20 left over 20. That was still better than 14. Okay. So
[00:36:59]  there you go. 20 kilobytes to work with. Um, and for reference, Google has an official 30 kilobyte budget for phones like this, which is another
[00:37:10]  phone Kroger sells. It is, uh, it runs KiOS, which is a fork fork of the old Firefox OS. And it cost me $15.
[00:37:19]  They are not expensive. Yeah. Sorry. I'm glad that you have this and you can show this off because as I mean, I, and I, I'm guilty
[00:37:27]  of this. We, I I'm living in, uh, San Jose, California. I have gigabit internet now. Um, thanks to my company paying for my
[00:37:37]  internet bill. So I, this is not the, we don't always get to, you know, empathize with the different devices and the different, you know, like
[00:37:45]  networks. You can be like, okay, if it's a little bit slower than what I have. Yeah. You know, but this is, this is, this is
[00:37:51]  a very different scenario where you pulling out these flip phones that sell for 10, 15 bucks. And, um, so for, for you at home, the thing you can
[00:38:02]  do to find out a good target device is you go to Amazon's best sellers page, uh, for phones in like whatever region your amazon.com is located at.
[00:38:12]  Uh, like if you're in great Britain, you go to amazon.co.uk probably. And then, uh, the first thing is almost always refurbished iPhone
[00:38:21] . And then either the second or the third bestseller is usually a phone that you can't believe people are buying. It seems so slow. Pick that one. It
[00:38:28] 'll be cheap. Right. Okay. Okay. The developer seller, you can probably buy a cheap Android. So, okay. So 20 kilobytes. Okay.
[00:38:40]  So the, the, the, the, now the, the stage is set 20 kilobytes. Um, and I mean, I, we, we, we crunch
[00:38:46]  numbers all the time on the stream to do benchmark synthetic stuff. So like everyone here probably knows that 20 kilobytes doesn't even get you react. Um, 20 right
[00:38:55] . There's more than twice that. Yeah. Yeah. Yeah. Exactly. 20 kilobytes. View. Maybe not, not, not even view three. Like,
[00:39:03]  like it's like right on the edge. Um, so that then you wouldn't get any code. Um, you know, you're kind of in like a preact
[00:39:12]  felt, maybe solid kind of range. Um, um, yeah. Like how, what did you do next when you're like, I got 20 kilobytes.
[00:39:20]  I mean, maybe just vanilla JavaScript, you know, I, I don't know what, what were you thinking? No, nothing was off the table. Um, I
[00:39:27]  just knew that I needed a streamed HTML because of the facts that any given Kroger page is probably made up of at least 10 different API calls, um, probably
[00:39:37]  more. And each of those APIs is owned by a different team. Each of them probably has their own uptime guarantees. And some of them are flakier than others
[00:39:45] . Um, and if you do the math on, okay, so in a given user session, there are going to be, let's say 10 pages. And then
[00:39:54]  each of those pages has 10 API calls. What are the odds that if each of them fails only 1% of the time, you will have a fast user experience. And
[00:40:03]  the answer ends up being, uh, don't bet on it. Right. Right. Cause okay. Because it basically, if you serve everything as a single chunk, you
[00:40:12]  basically tied together the fates of all the services. Like it's, it's the, it's the slowest service. It's like, like the, you
[00:40:18]  did the map that kind of like all multiply against each other, like in terms of probability. And then suddenly it's, it's just the, it's the worst.
[00:40:25]  Yeah. And from doing performance analysis on the existing website, I knew about things such as the recommended products endpoint, which, uh, if you weren't careful with how you
[00:40:34]  called it, it would give you every recommended product for a given user, which was a lot. Um, right. So, so essentially to get here, cause people
[00:40:46]  don't streaming is something that's kind of come up recently a lot. Like react was like react 18. We have out of order streaming now. Um, but there wasn
[00:40:54] 't very many solutions that were actually doing streaming before react. And if you go back to 2018, I mean, 2020, there was a couple more, but if you
[00:41:04]  go back to 2018, there was almost none, like they're very, at least in the JavaScript side of things. Yeah, absolutely. So I remembered from back when I
[00:41:13]  was teaching myself web development in like the early 2010s that, uh, performance pioneers like Steve Souders or Stojan Stefano had talked about some way for
[00:41:23]  browsers to display a page as the server was generating it, but I couldn't remember what that was called. So I had to start searching for it. Um, and it
[00:41:32]  turns out the reason for that is because everyone called it something different. Like Steve called it multiple early flushes. Stojan called it progressive rendering, like that sort of
[00:41:41]  thing. Progressive rendering is the one that where I was first introduced to the, to the idea. Definitely. Yeah. And then the way you actually tell if an
[00:41:48]  HTTP response is using it is called chunks transfer encoding. So it's just a bunch of different things, but it's been around since like very early Netscape, uh
[00:41:57] , yeah. Google uses it whenever you have a search results, because it'll show you the header. And then while it's chewing on the search results, it'll stream
[00:42:05]  that chunk of the page to you, but it'll show you the header first. Right. Right. And if I remember, yeah, I, I don't know exactly
[00:42:11] , but I'm pretty sure it's, it's been in the spec since late 96 or 97 time period. That was, that was the time period that at least
[00:42:17]  when I did my own research into it. Um, but yeah, I'm trying to think of how to, before we move on from this, I just want to,
[00:42:27]  the best way do you have you found to explain to people why streaming is important? Uh, and then we did talk about it, but I'm trying to think if there
[00:42:34] 's an illustrative way or an easier way to extreme explain why streaming is really important for situations like these large companies with lots of services. I mean, you could look
[00:42:44]  at the article I wrote, there's that picture of, uh, in front of the whiteboard of microservices. Yeah. Let's, let's, let's do
[00:42:51]  that. Cause I have stuff here. It's in the second article. Um, cause the, the weirdly obscure artists streamed HTML. Yeah. I mean, that'll
[00:42:58]  have a video in there that you can show what the difference is going to be like. And, uh, oh yeah, you, you found it. This. So
[00:43:04]  that, well, no, that's the picture of, um, a satire of microservices at a large company, but. Right. Right. And then this is
[00:43:12]  where you're doing the failure rate math. Okay. And then here's your simple streaming example. Yeah. Yeah. Okay. Yeah. So both of those pages take a
[00:43:21]  simulated five seconds to show search results, but, uh, they don't feel like they take the same amount of time. Right. Because the, this one, the
[00:43:28]  first left side has to wait for the, everything to load and the right side actually puts placeholders in cause it streams the whole page. And then this is out of order
[00:43:35]  streaming where it actually slots. I think it's out of order. Yeah. We're in order that there is no job script being used on that page. Oh, crazy
[00:43:41] . It's just cause I saw the, I guess you can use CSS to move the footer down smart. Well, actually no, there is no footer. Um
[00:43:47] , that's just the header, but, uh, in position fixed. Right. Right. Yeah. Got you. But that's, I mean, it's styling
[00:43:53]  is why it's down there. Gotcha. Yep. Which when you would move it up to a desktop, that kind of like bar at the bottom did place itself back in
[00:44:01]  the header. So it did belong there, but on a phone, it's just so much easier with the navigation is on the bottom as we know from the fact that Apple
[00:44:09]  uses it on everything, but it's impossible to actually do that pattern on iOS without messing with nonsense. Yeah. Dylan was mentioning that since it's similar, the streaming probably
[00:44:18]  looks worse than it is also. I mean, maybe that's a minor point, but I guess the difference is when you stream something, you get the header content,
[00:44:25]  you can start loading the other assets sooner as well. Um, Oh yeah, absolutely. And then the other thing about it was sometimes the search response would respond immediately. Like
[00:44:34]  if you search something like eggs that everyone searches for within the last five minutes, it probably had it cached. And in that case, it sends the whole thing as one
[00:44:41]  chunked if it got there fast enough. So best case scenario, it's as fast as the page can be worst case scenario. It's not as slow as the page
[00:44:49]  could possibly be. Right. So, I mean, this sounds pretty good because basically at a very little overhead, you just get a net positive by going this way.
[00:44:59]  Like at worst, it's as worse as it can be, but at best it can be much better. Um, I, I, there, there are trade-offs
[00:45:05]  to streaming. I'm sure you, I, we talked a bit about them on stream. We don't have to get too deep, but, um, w w w
[00:45:12]  did you have any concerns about that? Uh, at least is, is what, what I'm asking. Yeah. Because I wrote that gigantic pull request to the Marco repository
[00:45:21]  about how to correctly, uh, signal streaming errors. So the too long didn't read of that one is you cannot have like 400 or, uh, uh, yeah
[00:45:34] , you can't have like four X, X error semantics midstream. Like you can't four or four on something. You can't really do that other thing,
[00:45:40]  but you can redirect during a stream because HTML lets you do that. And you can signal an error condition like midstream. You can say, oh, the stream is
[00:45:50]  damaged. Do not cash it. Please retry. It may fix itself, which ultimately that's kind of all you need. Five X, X errors for, um,
[00:45:57]  all the different ones are just different ways of blaming the backend for developers. But as far as user facing code is concerned, it's not really something you have to care too
[00:46:08]  much about. Gotcha. Okay. Well, so yeah, redirects are the big ones and which, as you mentioned, you can send something which cause it can cause
[00:46:16]  the browser to redirect. You can flush that. And then I, I'm a little less clear on the error condition, like the 500, you can tell the stream to
[00:46:23]  retry. Sorry. This is me nerding out a bit, but can you tell me a little bit more about that? Yeah. In chunks transfer encoding, you
[00:46:31]  can mark the transfer encoding stream as damaged, um, essentially by the HTTP spec says it has to be formatted in this certain way. If it stops being formatted in
[00:46:39]  this certain way, or if it's not ended with the success terminator at the very end, then consider it damaged. And the HTTP spec says for a damage response
[00:46:50] , do not cache it unless like there really isn't anything better, um, to show the user. Like, you know, if you, uh, downloaded it once and
[00:46:59]  then disconnected, it might be okay to show it. Um, but also the nice thing about error semantics in an HTTP spec is they were defined as retrying may or
[00:47:09]  may not fix the problem. So like for a 500 error, it's like, oh, the server screwed up somehow. That's not the client's fault. You
[00:47:16]  may retry and it might get fixed. Right. That's the sort of thing that marking a stream is damaged, uh, lets you do, which is good because as
[00:47:23]  it turns out, um, the way users fix those errors is by hitting the refresh button. So you want that semantic anyway. Right. That makes sense. Yeah. And
[00:47:32] , and that's easy enough for those. I see the problem with the 400 errors because 400 usually means something is wrong coming from the, like the client side, like we
[00:47:39] 're asking the wrong questions, trying to do the right thing. They're unauthorized. They're there. There's something like that. And no amount of ret
[00:47:44] rying is going to fix that situation unless their state changes. Yeah. Like, unless you change how you are asking for the request, you are going to get the same 400
[00:47:52]  error back. Right. Right. You know, there are exceptions. I'm sure it's like how technically all of the 300 XX, uh, status codes are redirects
[00:48:02]  except for the 304, not modified that sort of thing. But overall, um, the primitives were enough that it made sense how people have been using streaming for
[00:48:12]  almost 30 years at this point, because it's not ideal that you can't set an error code, but you can work around it well enough that you don't necessarily need
[00:48:22]  to. Yeah. I mean, Dylan's like designing a solution right now in the chat as we talk. Um, yeah, for the specifics of my demo, whenever it
[00:48:30]  was something that could result in a 404, I would block on that API call. So it would look up a product to see if it existed first and only then
[00:48:38]  would it start streaming the response. Right. Yeah. I mean, this is an interesting place where I'm sure if more, as more people like, this is one of
[00:48:45]  the things I was happy, like when react announced that they're going to add streaming, I mean, I I'm sure everyone who's gone through these troubles was pretty stoked
[00:48:53] . Cause that means more people are looking at this and something probably has to change or improve. Uh, because I mean, if, if everybody starts picking up streaming and
[00:49:01]  start hitting these sort of issues, like something's got to change. Right. Um, Oh yeah. There was a, uh, in one of the rack working group discussion
[00:49:09]  threads, uh, one commenter linked the big PR I had made to the Marco community repo saying, oh, these guys have already thought about this. And I was like
[00:49:17] , you bet I have. Someone's asking how large contentful paint uh, like is computed for stream. Um, like how does this impact it? Uh, the
[00:49:27]  same way it is for regular webpages. Um, it's because what happens is even if your server doesn't output a webpage as a stream, your browser will still
[00:49:36]  download everything as a stream, just because it's coming in over the network stuff gets lost mid transit. It has to be retransmitted that sort of thing. So
[00:49:43]  all of the existing performance measurements are already okay with streaming just because the browser does not know a different way to receive webpages. Right. This is really important point
[00:49:54]  from an authoring, cutting through the marketing BS side of things. Cause a lot of people are like, when they see streaming and they start trying to make a demo where
[00:50:02]  they stream, uh, stuff like one line at a time. Like they're just like, look how I can stream like one, one line, a thing at a time
[00:50:08] . And, and, and it's like, uh, and it's not because it's async. Cause if it's async, that that's a reasonable use
[00:50:15]  case perhaps. But the, the, the thing is if the more content we can send at a time, the better we can compress, it's better. You know
[00:50:24]  what I mean? And the more content that we like, it can get to the user sooner and the browser is handling the streaming for you automatically chunked encoding. Um,
[00:50:32]  you know, the spec is so that you as the writer of the backend have the ability to control this and to be able to send it out that way. But the
[00:50:40]  browser gets, if it gets a large enough piece of HTML coming over the wire, like it does, there is propagation time. Like it does come over the wire. So
[00:50:48] , um, stuff does naturally stream into the browser. Yeah. Like even before chunk transfer encoding existed back in 1970, 1997, I think you said, uh, it had
[00:51:00]  already existed as far back as HTTP 0.9, which was the one that was released, um, without headers. It was literally just 200. Okay. And then
[00:51:09]  it started giving you HTML. Um, and the thing about that was there were websites that streamed even before that, but the way they signaled the connection ending was like
[00:51:19]  by early termination of the underlying TCP, uh, connection, which was indistinguishable from the client having a network error mid, uh, transmission. So
[00:51:29]  they introduced chunk transfer encoding into a spec to disambiguate between, oh, I successfully received the response versus, uh, oops, something bad happened. Right. Right
[00:51:40] . Yeah. So, I mean, very important thing and something that the early founders of creators of the web had in mind because yeah, I wasn't aware of that piece
[00:51:49]  in 0.9, but by 1.1, we had our chunked encoding and this is, this is all in the first five years of the web, you know
[00:51:56] , like figuring this stuff out. And now here we are 25 years later. Um, you know, so it's, yeah. And I mean, the good news
[00:52:05]  is, uh, you remember computers back then they were all slow and bad. So if it works 30 years ago, it's going to be pretty easy for servers to do
[00:52:12]  it now. Yeah. Yeah. Yeah. Okay. Like Amazon proved it worked back when Amazon first got started. So, right. So the thing with the streaming thing is
[00:52:22]  it's not new, which I think many people already knew, but it's like, it's, it's been at various points of time. And for those who
[00:52:29]  cared to do it, it's this, a technique has been used all over the place. Any, any like large scale e-commerce probably, well, not any,
[00:52:36]  but a lot of them are, are, we're using these techniques. They might've been using it even with Java and stuff like with, with different backends to it
[00:52:43] , because you have a bunch of services. Why have a single failure point? Why have a single like performance crunch? Like this, this is how you make the web kind
[00:52:54]  of, I don't, I don't want to use the responsive because responsive now means responsive designs, but it is kind of how you make the more web, more
[00:52:59]  responsive, um, from a performance perspective. Right. It guarantees more consistent performance at the very least. Yeah. So yeah, this, yeah, I'm glad to have
[00:53:10]  this background. Um, so yeah. Okay. You know what? Yes. Let me share. I I'm just sitting here talking about this stuff and I actually didn
[00:53:21] 't, I linked the article on Twitter when I, when I advertised this stream, but I did not link it in the notes and I should have linked the article in the
[00:53:29]  notes. I will do that after the stream, but for anyone in chat right now, you want to see what I'm talking to. This is, uh, uh,
[00:53:36]  the link to the first article in this five part series that Taylor wrote, which is, I said, the whole series is great. We're going to be talking about
[00:53:42]  a number of these things while we have them here, but if you want to kind of like some background and more to it, um, definitely read this whole article series.
[00:53:50]  It's amazing. Okay. So streaming clearly streaming, but streaming in 2020, um, probably took like, are you going to build it yourself or is there any tools
[00:54:02]  out there that do it? Cause in 2020, there were frameworks that claim they had stream, but not streaming the way you want streaming. Like, I believe there was a
[00:54:09]  render to stream and react, which, you know, basically let you stream that. Yeah, I did. I did look in that and it turns out it doesn't even
[00:54:16]  let you stream in the HTTP sense. It just rendered to an underlying node stream instead of a string, which was more efficient for SSR, but it didn't matter for
[00:54:25]  the users and perspective. Gotcha. Right. And react 18, did add the proper streaming support and we, we have that now, but if you go back to 2020
[00:54:35] , 2019, 2018, there, there isn't very, that many solutions, um, that had streaming at that time. And, um, I, I'm gathering,
[00:54:43]  I mean, that's how you found Marco. Um, I mean, I'm not going to lie that could stream. Um, and the one I found was dust.
[00:54:52]  And for those of you who don't know, dust was a language, a templating language, much like handlebars or mustache that was designed to be able to stream
[00:55:01] . And then it got deprecated by the first guy who invented it. And then LinkedIn picked it up and then they deprecated it again. Uh, so I
[00:55:09]  didn't like the idea of using dust, but luckily I found some old GitHub repo that was comparing tempting language features. Um, and that one was like, oh, dust
[00:55:19]  can stream. And then also this weird thing called Marco can stream. I'm like, well, I don't like dust. Let's look at Marco. Yeah.
[00:55:25]  Yeah. Then it turned out Marco had exactly what I was hoping for. Yeah. That's, that's, that's interesting. Yeah. Cause like, I'm like
[00:55:32] , uh, in 2020 solid added streaming, but it was all Marco. Like Marco is how I found out about this. I was just, geez, what are these guys
[00:55:41]  doing? This is crazy stuff. And before this sounds like I'm, we're just getting into a Marco advertising stream. I do want, I think I found the benchmarks
[00:55:49]  we were talking about. Um, of course I have all the benchmarks at my fingertips. That's what I do. Um, but this, this, the templating
[00:55:56]  benchmarks from Marco, is this how you found it? It compared dust from LinkedIn, handlebars, pug, Marco, nunjucks, um, react, swig,
[00:56:05]  a whole bunch of templating languages. That looks familiar. Yeah. Yeah. This is, this is kind of interesting because, um, Marco at this time, actually
[00:56:15]  it's, it's not like, you know, the best at everything, but it was actually crazy that you, people think stuff like handlebars, you know, just
[00:56:22]  normal string compat. Marco was, was competing here with like pug, like, like here, like it, it, the fastest template, like, you know, standard handle
[00:56:31] bars, like templating that you'd use on a server. Um, this JavaScript framework was actually kind of like neck and neck. Right. And to put in perspective,
[00:56:41]  like in a component example, which a little heavier than these Marco was still getting pug like performance compared to, I guess, react at the time we had better benchmarks.
[00:56:51]  React has now got better on server rendering all that time. But if we're going back to when, when was this benchmark first created nine years ago, but let's say
[00:56:59]  last updated about five years ago. So 2017, let's say we were looking at in some of these benchmarks Marco being like, what is this a hundred, almost a
[00:57:12]  hundred times faster at server rendering. It's, it's kind of crazy. Um, yeah, react has gone a lot faster since then. Yes, exactly. I've
[00:57:22]  been benchmarking it a lot more than people have seen on the stream, but like this, this kind of go back a few years in terms of where people's priorities were
[00:57:30]  like literal a hundred times faster. Um, anyways, sorry. Yep. No. So that was one of the other things that, because at first I was like,
[00:57:37]  okay, so Marco can stream, what else, what else do I have to care about? Because if I'm really proposing to do this at Kroger, I knew
[00:57:44]  there were going to be some things that our developers were going to be persnickety about, let's say. And then I was like, oh, nice. It
[00:57:51]  has components in a JSX style syntax. Okay. That makes my life a lot easier. It's like, oh, and it lets you isolate client-side JavaScript
[00:57:59]  to just state islands. Okay. That, that, and essentially it was like, I kept looking for reasons to not like Marco and it kept, uh, foiling me
[00:58:08]  on that regard. So I realized that the amount of work I was going to have to do to make my demo, um, all of a sudden became a lot easier because
[00:58:17]  as it turned out, Marco was already solving the problems that I had set out solving and it did it 10 years ago. Right. Right. Which is pretty big,
[00:58:27]  but I guess, I guess the, the tricky part was, um, okay. So performance streaming, but Marco sort of comes with another decision point you had to make.
[00:58:40]  I mean, I don't know if you'd already made this decision, but, um, Marco is a multi-page app framework. Like we've been talking about single
[00:58:48]  page app frameworks, like, uh, like, uh, react so far. And we talked about using pre-act or Svelte or something small, um,
[00:58:55]  even solid in this case, which are basically all single page app frameworks, even though they're really small ones. Um, how did that play into that? The whole.
[00:59:05]  So I did write a whole article where I tried giving a very fair and balanced decision-making process that didn't exist. Um, you know, I, I learned web
[00:59:14]  development from people like Jeremy Keith. I didn't like spas. I was out there to show them that a multi-page app could be better than the thing they
[00:59:22]  made. So for me, it was never a real decision. And I was happy to see that Marco did not do anything of the sort in terms of client side navigation.
[00:59:31]  Right. So, I mean, you said you learned the web that way from kind of the, the, the old guard as you called them. So you were already very
[00:59:39]  much aligned with this, uh, anyway. Um, yeah. And I, and I believe, um, you had in one of your article, um, you said
[00:59:47] , I'm not smart enough for a single page app. And it was all about the complexities of routing, which is a whole other thing, but maybe, maybe that,
[00:59:55]  I don't know if that's the next logical place here. Cause I, I, where do you want to go to next? Cause just thinking about this, we've
[01:00:03]  got streaming, you've figured out the harness for the architecture, have your framework, but that's, that can't be the end of the story. Right. Um
[01:00:12] , like, yeah, that was 90% of the work, but then I had to do the second 90% of the work. It's always like that, isn't
[01:00:21]  it? Yeah. So, and that was, uh, this period where I went from vaguely researching after work, what I was looking for to, okay, I
[01:00:33] 'm actually going to do it. I'm going to learn how to do a web pack. I'm going to write the components. I'm going to going to make the
[01:00:39]  website that happened over maybe two, three, four months tops. Um, and that was essentially just nailing the details. Cause I had my theory and I had a
[01:00:55]  foundation and a platform that I could use to build it with, but the, you know, making technical decision based on theory and platform usually ends up, uh, with you
[01:01:07]  making bad decisions unless you actually prove your assumptions. So it was, it was time for me to put my money where my mouth was. If I thought this sort of
[01:01:15]  thing was faster and made a better user experience, it was time to prove it. Right. So, yeah. Um, again, I keep asking, but where, where
[01:01:25]  did, where did you end up starting there? So you, you, you, you, you've got the Marco project, you've kind of set up a build
[01:01:35]  thing. I just, cause I imagine even with Marco in place, you still probably like there, there's some interesting challenges and way things playing to size. I actually seen
[01:01:47]  your next article. You mentioned a bunch of stuff about fonts and stuff and like, yeah, I mean, a lot of the designs, one thing that was nice about working
[01:01:57]  with such, um, strict constraints is that a lot of decisions make themselves. Like if you know, you need X, Y, and Z, then usually most of
[01:02:06]  the alternatives fall away until you only find one or two things. So in theory, deciding to go full system fonts and not, and no web fonts can be a hard decision
[01:02:16] -making process, but I had 20 kilobytes of budget. I was not spending 14 kilobytes of them on fonts. Like that's just absurd to even propose
[01:02:25]  that, uh, yeah. What is that? Something like 80% of the budget. Yeah. So yeah. And I, and I'm gathering stuff like images,
[01:02:37]  which would load in later, weren't really part of that budget as well. Correct. I did do a lot of work in terms of proxying and resizing images
[01:02:44] . Um, because the existing backend did not, it was entirely handled by Akamai, which was nice, but for our internal demo, we did not have Ak
[01:02:53] amai on our side. So I had to write it myself. That was actually the least scalable thing in that demo is that the same node server that was, uh,
[01:03:00]  serving those pages was downloading and resizing images on the fly. There was no caching whatsoever. Oh, wow. Okay. That's fair. I mean, that
[01:03:08]  wasn't the main goal of what you were trying to show off here. And I guess the other thing is we talked a bit about devices and stuff. You were, you
[01:03:15] , this was targeted for mobile, right? Like you, like the phone you're holding in your, in your hand down there. Like you were like, I'm going
[01:03:22]  to run it on here. So you were building a mobile designed site generally. Um, was there any, it was mobile first, uh, but it was responsive on
[01:03:31]  desktop, that sort of thing. Um, in theory, it would have worked on internet explorer. In practice, I did not bother debugging my CSS in it. So when
[01:03:39]  someone loaded it up in internet explorer to see if it worked, it worked, it just, uh, you know, looked like what you would expect it to. Like the
[01:03:47]  flex box was broken, that sort of thing. Right. Were there like a, a number of like mobile specific considerations on two as well? Just, I'm just thinking
[01:03:57]  the hardware constraints are like the CPU there's network, which is, you know, the bottleneck that we always talk about when we're doing all these loading things,
[01:04:06]  but there's CPU constraints as well. Um, like there's a lot of constraints. Yes. Um, it's hard for me to kind of summarize them. Cause it
[01:04:15] 's not at that point, it's no longer the one silver bullet of streaming. It's like I had that, but I also needed a thousand lead bullets. Right.
[01:04:24]  So it was like, resize the image so that the browser doesn't have to resize it for you because that takes CPU. Um, instead of using a scrolling carous
[01:04:33] el that could act as a, uh, scroll trap on a cheap touch screen, cause cheap touch screens often get the initial direction confused when you start a swipe. If you
[01:04:43] 've ever like tried to scroll through a Google maps embed and it wouldn't work, you know what I'm talking about? Um, then there was things like, uh,
[01:04:52]  web kit. What's the property? It's like, web kit touch action color, um, tap highlight color. I think that's it. Uh, it turns
[01:05:01]  out every single reset gets rid of that. And every single re threat reset is throwing money away when it does that. Don't get rid of it, set it to your
[01:05:10]  brand color, set it to like a neutral gray. That's what I did, but don't get rid of that touch highlight because that is immediate, obvious, loud,
[01:05:19]  zero JavaScript feedback for, oh, the computer is indeed responding to the button. I just tapped or something like that. Right. So when you say reset, you mean
[01:05:28]  like, like normalize CSS or whatever they call that? Normalize. I don't think does that, but it's like the first line of code. Every designer,
[01:05:34]  uh, uh, write CSS rights. Cause it's ugly. And in theory, you can do better than it in practice. Um, unless you know your active state is
[01:05:42]  sufficient and better. Um, you shouldn't get rid of it and you definitely shouldn't get rid of it by default for everything because you have to, you know,
[01:05:53]  design your own better active style in order to get rid of it. But you can't do that for literally everything because you need the context. Yeah. There was a comment
[01:06:03]  in the, or section of your article that I thought was actually kind of cool. Cause we're talking about design. Cause you, you did have to diverge from the
[01:06:08]  original design to get performance. And one of the areas here, you're talking about box shadow and more like boy shadow. Um, I, I, I mean,
[01:06:15]  it's, it's a little bit funny, but yeah, I mean, this, this is an interesting thing. Like, I guess when you're getting that nitp
[01:06:22] icky on design and the restraints are that like tough to meet, like these things make huge differences, eh? Yeah. Box shadow used to be a lot worse than it
[01:06:32]  is now. Um, and that section used to be much, much longer, uh, before I realized most people probably don't care that much, but if like you
[01:06:39]  like scroll down to see what the program website is using shadows for, um, it's just, it's, it's subtle, right? And that's nice. But
[01:06:48]  first that means it can't be an accessible signifier of interaction because it doesn't meet contrast guidelines. And if it's not good enough to indicate interaction for all of our
[01:06:58]  users, then technically it's just a nice to have. And if it was a nice to have that would risk higher repaints and animation and CSS processing times, then
[01:07:08]  I didn't need it. Right. Yeah. I mean, this is just the, like the kind of next, like, it's like a bunch of design systems start
[01:07:17]  from material UI and they all had the drop shadow, like the, the previous version. That's what I'm seeing here. This reminds me of like a, an offs
[01:07:25] hoot of like the, the, I guess Android has it too, that the levels with the shadow on the buttons, but you're saying from an accessibility standpoint, this
[01:07:32]  affordance is not sufficient in order to indicate that this is a button or anything. So like it doesn't actually matter. And then for native Android, they have a way
[01:07:40]  to, uh, hardware accelerate the shadows and that sort of thing, but web does not really. Um, it turns out blurry rounded semi-transparent box shadows are expensive
[01:07:52] , especially the more you spread them out. That's the greater the blur is so if you really need them, you can fake them with border image and gradients and
[01:08:02]  that ends up surprisingly faster. But like that was just, if we really needed to do that, then that would be spending one complexity token. And for a project like this
[01:08:11] , we had three of those. It's like, okay, well, if you want web fonts, that's going to take all three. If you want box shadows,
[01:08:17]  that's going to take one. Do you really want to eat up our wiggle room on a extremely subtle box shadow? And the designers I talked with that were like,
[01:08:26]  no, obviously not. There's going to be something more important than just that. Right. It is interesting. Like I really like how you got into it, like
[01:08:36]  you were holding the device in your hands, so to speak, to try and understand what the, what, what the experience is going to be, all these little things.
[01:08:46]  Like, I'm just curious, like how, how did you even realize that you called box shadow, a career performance criminal, um, historically, although it's better now
[01:08:54] , how did you like even realize where you were hitting these expenses? Cause sometimes like we all sit there and we like benchmark the JS and it's really obvious. You
[01:09:02]  go in the Chrome timeline and you're like, look at all this JS running. Uh, was it similar? You're like, oh, this is spending a bunch of
[01:09:08]  time painting or like, how did you find these kinds of things or just reading or, I mean, probably just from reading, like one of the links in there is when
[01:09:16]  people realized Facebook's new header shadow, uh, in the FB five redesign, wasn't actually a shadow as a gradient. And someone at Facebook tweeted, oh yeah,
[01:09:25]  it used to be a box shadow. And then it just destroyed performance on low end Androids like compositing a blurry box shadow over a video in the timeline would
[01:09:36]  just like make the entire video flicker in and out. And I was kind of like, I know I don't need them. And everything in my research is telling me
[01:09:46]  that it's a risk. So I either could do, as you said, a lot of work investigating and seeing if I can be certain I'm not running into, uh
[01:09:56] , performance pitfalls, or I could just avoid the problem. And it turns out when you are making an entire, um, MVP proof of concept in several months,
[01:10:06]  uh, the best strategy is usually to just avoid whatever you can get away with. Yeah. I see you actually call out material design. Like what I was talking about before
[01:10:15] . It's very, all these light shadow elevation type things are all over the place, but they don't necessarily. Google does a lot of performance work to make that
[01:10:26]  stuff work well. Um, like I think I linked to some point in the flutter thread where flutter is like Google's new cross, um, platform. It's
[01:10:36]  like their version of react native plus then some, I'm not really certain, but there's just like one thread about natively making a loading spinners or something's
[01:10:45] , uh, shadows, uh, perform acceptably. And it's like a ton of back and forth from engineers, a ton of like code and that sort of thing.
[01:10:52]  And it's like, uh, that's great if you can get it, but I am one man and I would rather not do that work. Right. And I guess
[01:11:00]  the last design thing here was the carousels versus the tiles. Um, yeah. So the carousels, as it turns out at Kroger.com
[01:11:08]  have been the pinnacle of Chesterton's fence where it's like, unless you know why something is there, no one is going to let you tear it down because
[01:11:14]  we tried killing that thing on the performance team at least twice, if not three times. Um, the content management team didn't like it because they know it converted super badly
[01:11:25] . The, uh, designers didn't like it because it's like a bunch of text encoded in an image and it doesn't load fast enough for most users to
[01:11:34]  see it. Um, it was bad for accessibility because you know, carousels are just very hard to make, make accessible. So we tried doing like the tile approach
[01:11:43]  you see on the right. And eventually what happened was, oh, we sell e-spots to advertisers and they pay X amount for this many pixels on above the fold
[01:11:52]  for the homepage. And so until we figured that out, we weren't able to be like, what if we, uh, told them to knock that off and instead
[01:12:00]  we would make this much more money than making this much advertising money. Right. So this, did this lead to this ribbon design you're talking about here? Yes. Um
[01:12:10] , this essentially is just on very small screens instead of trying to use time to show three things in the same amount of space, just use space to show three things in the
[01:12:21]  same amount of space. And especially on my target connection, images do not load quickly. You can see them pop in over a few seconds there, but the text loads
[01:12:30]  pretty fast. Right. Right. Okay. But yeah, which means it's effective at least people starting to read what, what's, what's there. Okay. Oh
[01:12:39] , sorry. There is one other design consideration. No modals, tooltips, toasts, et cetera. Yeah. Uh, the short answer is I couldn
[01:12:48] 't afford them. The long answer is these things are ubiquitous because they're very easy to design. You can just overlay them over something and you don't actually have to
[01:12:55]  do the hard work of deprioritizing other things to introduce something new to a design. Um, but if you don't use them, users are a lot happier about it
[01:13:05]  anyway. Like, do you like modals? Does anyone like modals? No. Designers like modals, but I don't think users do. Well,
[01:13:13]  and only to a point, if you, if a designer likes a modal, the second you go, Oh, but then you need a second set of options. Designers
[01:13:21]  hate nested or double layered modals. Those are like unforgivable. So the second that you have a situation where you need double modals like that, they'll
[01:13:29] , they'll come up with a different design to avoid having the second modal anyways, which usually involves changing the top. It's not the, the modal is the last one
[01:13:36]  on the step. Usually it's usually because you're already in cramped space. So it's usually changing the top level affordance and maybe using a modal. If
[01:13:44]  you really, really have to, because once you've changed one top level affordance, then you're like, why are the other ones inconsistent? So you have to go
[01:13:51]  change all the other top level affordances. And then, yeah, anyway, sorry. No. And then just like, it's particularly on mobile. If you're using
[01:13:58]  a modal, it's like, well, it looks like you're navigating the entire page anyway. Right. Because it's taking up the entire screen. So in my case
[01:14:06] , I was like, well, instead of modals, I'll just do, you know, a new page. I've already made it as fast as possible that
[01:14:11]  it's near instant. It won't be that much of a big deal. Yeah. So. Oh, interesting. You really even, yeah. People should read the article
[01:14:23] . You even dig into the fact of why these patterns are used so much, um, even though they're not very accessible. That's, that's interesting. Okay
[01:14:30] . Yeah. I mean, there's a lot of depth in this one. Um, yeah. Okay. That's probably, that's probably more than we can get
[01:14:41]  into on the design side. But I think, I think that's, I think that's really an interesting, um, how you recognize that you need to change the design
[01:14:50]  to do, to reach your goal as well. Um, part of it was obviously a simplification to actually getting this project out and show that the MVP is possible,
[01:14:56]  but, uh, but I, I really liked that you looked at it and go, okay, what do we actually need and how does that affect accessibility or, you know
[01:15:03] , baseline? Cause you don't, you, you didn't want to sacrifice anything that was required in order to do this. You want, you wanted to make sure
[01:15:09]  that you had accessibility covered, had like, like the, the affordances were such that you knew that this was a practical goal to reach. Right. I didn't,
[01:15:20]  uh, the, the real reason I was still prioritizing security and accessibility and those sorts of things over performance is because I, it felt right. It was just part of
[01:15:29]  my principles, but I also wanted to include it in the speed demo to prove that I wasn't showing something that was fast just because it got to ignore the responsibilities of
[01:15:39]  a real site. So it's like, no, this is still fast, even, um, while catering to accessibility and like not having glaringly obvious security holes
[01:15:50]  that we would need to add more potentially slower code on top for. Right. It's just, it's funny when I, when I read the arc of the series,
[01:15:58]  and this is probably why I'm coming back to this point, you started off by saying like, look, I had this goal, I calculated what my goals were and
[01:16:04]  how I did it. Then you, then you'd spent a whole detour on streaming, which we did as well, which I think is really important because people need to
[01:16:10]  understand what it is like to integrate services from a big company where these different teams all kind of weaving together. This is, this is what happens when you get to a certain
[01:16:18]  kind of scale. Right. And then if it's just a small website with a single database, you can still use stream in a good effect because, you know, instead
[01:16:27]  of having the database chew on several different queries and then showing the page, you can be like, okay, get me the post for this ID. And then you stream
[01:16:36]  like recommended posts later. Right. Yeah. I mean, yeah, don't get me wrong. Like, uh, this is why I've been making such a big deal
[01:16:44]  about it the last couple of years, you know, Marco tipped me off on it. And then I just like, it's one of those things where like the
[01:16:52]  awkwardness is come from maybe lack of platform support, not from capability. You want this. If it wasn't for those like awkwardness on the platform, this is almost
[01:17:02]  just like the smallest amount of overhead for just the potential of just significant gains. Even if you're a small guy, like there was some conversations that were going on and someone
[01:17:13] 's like, just fix your backend. Yeah. And it's things like also, hopefully for those small guys, they could see something like, just don't, don
[01:17:24] 't do modals because that would be something that their scope allows them to do. It would be a hard decision to make, but it would be a lot easier than having
[01:17:33]  to do modals. Right. Which is very hard. I mean, I got to ask at any point, was someone like, say, fix your backend to you
[01:17:42] ? Like, like, like, like, did that ever come up in this process where, because I, I forget which article in the series was, was, but you
[01:17:48]  suggested that performance was always someone else's problem. Like the mentality there that was we're finger pointing like, I mean, I would have loved to fix our back ends
[01:17:59] . I was not allowed to, I did not have the clearance. I, uh, was not cleared to make my own database or anything like that. So, uh,
[01:18:07]  I just had to suck it up. I had to make it my problem because nobody else was making it theirs. Um, there are some comments in the chat about, uh
[01:18:15] , the design stuff that I think I should address just because there are people making points. And I agree that things like sometimes pop over pop overs are a good compromise or
[01:18:24]  something like that, but it's always better to have a design that doesn't need them. Like if you can write good micro copy that already suggests what the popover would
[01:18:34]  tell you, then it is just objectively better having it already there than, um, you know, needing an interaction to look at it, which, you know, that's
[01:18:45]  hard. That's, uh, the hard kind of design is figuring out what to show and what not to, and that sort of thing. Um, so there are
[01:18:54]  things like the dialogue element in the spec. Uh, you can ask the accessibility community what they think about that element because it's still not good enough. And the spec mostly
[01:19:02]  is just trying to introduce something that, um, though everyone on the web is already doing and doing it badly. Because in theory, if you do it as a built
[01:19:12] -in element, you get accessibility for free, but that hasn't come, that's not true yet. Maybe someday, right? The web used to have a perfectly good
[01:19:20]  dialogue primitive for modal dialogues. Do you remember that? The old show modal dialogue, the JavaScript API? Uh, I'm, I might have not actually used that one very
[01:19:31]  much. I'm like thinking this is like the middle step. Like after, like, I remember doing a lot of alert stuff, but that those you can style them or
[01:19:37]  do anything with them. Was show modal nicer than that at least? Show modal dialogue, uh, you passed a URL to it and then it would show whatever arbitrary HTML
[01:19:46]  was in that URL inside of a modal window floating over the webpage. Right. So almost like a floating iframe, if I'm. Exactly. Essentially, it was
[01:19:55]  an iframe that acted as an actual modal. Like it blocked access to the back of the page. It did everything you wanted, but Chrome removed it because it was
[01:20:01]  too hard to make it fast in their JavaScript engine. Essentially. It was one of the few times that the web has just gotten rid of a feature, period. Yeah
[01:20:08] . That seems very uncharacteristic. You always hear about like how, you know, you can't like backwards compatibility. I guess maybe it was something that only Chrome
[01:20:17]  had at the time. Was it like, like kind of experimental kind of thing? No, it was something internet explorer invented back in the bad old days. And, uh
[01:20:24] , Chrome said, we don't want to support this anymore. So we're getting rid of it. Um, we're, we only see it used on terrible int
[01:20:31] ranets anyway. All right. Well, there you go. Uh, I guess when you've been doing stuff the way you have for so long, you, you,
[01:20:40]  you hit a lot of these, uh, exception cases where the rules have been bent over the time. Um, yeah, the unshift stuff, if it's not
[01:20:47]  popular enough. I, yeah, it's, it's an interesting cause you don't, maybe cause it's not popular. You don't, you don't see as
[01:20:53]  much. I always thought that was stuff that was in like the stages that wasn't fully through, like, you know, object dot observe and stuff like that, which
[01:20:59]  never was finalized. It was just like, like a thing that we thought was going to be cool. Yeah. I know a bunch of them unshipped support for
[01:21:09] , uh, the special is index input name and the is index element. Um, have you heard about those things? Nope. Okay. I'm not going to get into
[01:21:19]  them cause that is a rabbit hole, but it predates forms. Essentially it was the search form before the form elements existed. Okay. Fair enough. Okay. So
[01:21:28]  long history in the web, a lot of inconsistencies, these things you just kind of work through and do the best with what you have at that time. So,
[01:21:36]  um, yeah, the reason I was calling out that order in the article there at the end there was because after going through all this, figuring out the perfect design or what
[01:21:46]  was reasonable, figured out streaming pool of this, that's when, when in the article series, you actually decided to talk about the single page apps versus MPA apps
[01:21:55] , uh, thing. And maybe this is just because was this just more of a, you said you were kind of already set. So I think the way we've been
[01:22:03]  talking about is actually sort of way more on your thinking, you know, like where you just kind of started at this place and you're like, you get MPA
[01:22:11] s. That makes sense. That's how the web works and you can move forward. My intuition was if I wanted to be as fast as possible, then I had to
[01:22:16]  strip everything down and be as minimal as possible. Um, but it was reasonable for others to challenge me on that and say, well, can you back up your intuition?
[01:22:24]  And so that's what this article was. It was like, Hey, I could have tried using Preact. Here's why I thought that was a bad idea.
[01:22:31]  Right. That's what I was gonna say. I'm sure there was pushback and that's, that's sort of the time. And I think a lot of people
[01:22:36]  who've been reading, reading the articles probably got to this point and go, okay, that's all good. But you know, what, like, what, what's
[01:22:42]  the, like, what, what's the trade-off? You know, we can do stuff like code splitting and lazy loading and all these other speed techniques, um
[01:22:50] , that I like to talk a lot about on stream. In fact, um, and you know, you, you do have some good, um, some good, some
[01:22:59] , some good, uh, kind of responses to that. Um, do you want to talk about that? I think it's a good opportunity now to talk about a few
[01:23:08]  of those things because you, you talk about accessibility and you talk about security, um, and you talk about raw speed. And I think those are probably the three pillars of
[01:23:16]  what kind of, where you kind of said, like, this is why I went with this foundation. Right. Um, apparently internally at Google, they're called the
[01:23:23]  three boring pillars because they're not features, but you must have them. Um, and so I think, um, I learned one of the things I learned from Jeremy Keith
[01:23:34]  was that if you have design principles, you should check to make sure they're reversible because otherwise they don't mean anything. And the idea behind that is, you know,
[01:23:42]  you, one of your company's design principles is be user friendly. And it's like, can you imagine a company would have be user unfriendly as one of
[01:23:51]  their design principles? Like that doesn't help you prioritize anything because ultimately that's what your principles are supposed to help you do. Um, right. But let's say,
[01:23:59]  you know, for a grocery commerce, I was like, security is the most important because if we leak your credit card number, that's the worst possible thing. Like not
[01:24:09]  only are you not getting any groceries, but we've opened you up to risk that you didn't have before. We have to nail security period. We will lock out
[01:24:17]  older browsers. Um, if they don't support good enough HTTPS, like it sucks for them, but it's better than opening them up to risk. Right.
[01:24:26]  Let's say you're a video game company. Um, the most important thing is flashiness and fun and having like a very slick UX and then performance is important because
[01:24:38]  you know, 60 frames per second and that sort of thing. But even the best video games nowadays with amazing, uh, frames per second performance will often make you stare at
[01:24:46]  a loading screen for like a minute or two, but that's a trade-off that makes sense for them. And then accessibility is nice, but ultimately it's like,
[01:24:54]  well, it's a video game. If certain people with certain disabilities can't play, that's a shame, but they're not blocked from something that like, you
[01:25:04]  know, it's not something like, oh, signing up for a government service or buying groceries or doing anything with your daily life. Games are fun, but they're not
[01:25:12] , um, that important. Right. And then as far as security is concerned, you know, if video games don't even have an online component, then they don't
[01:25:21]  have to care at all about security. Like what would be the point? Right. So from your, I like this because from your perspective, speed was actually third on the
[01:25:30]  list, right. Security and accessibility take the highest precedence, then speed, and then slick this. This is a pure UX perspective. Like in terms of what the
[01:25:39]  experience, the end user gets, this is a separate conversation. We already talked about developer experience a little bit earlier, but essentially, even though you're building a demo to
[01:25:46]  prove speed, you speed was third, third, third priority. And I think that's pretty great. Yeah. Um, and there was, I didn't publish the,
[01:25:58]  this publicly, but I did a lot of stuff like, I, tried making a content security policy that was actually restrictive in the good way, but not gigantic. Cause
[01:26:07]  if you've ever looked at like Twitter's content security policy, it's really big. Um, so I went, I went down a rabbit hole of like how to min
[01:26:16] ify content security policy, how to like a bunch of stuff like that. Um, and then my demo was also using, uh, nonsense for like, you know,
[01:26:26]  sub-resource integrity, that sort of thing. Um, and then I also. Yeah. Nonsense for anyone who's not familiar. It's a way of generating
[01:26:33] , um, specific, um, what would you call it? What do you call it? Like a string code, like on the server, the client bring it so
[01:26:40]  that they match. So, you know, that the script or whatever code's gonna execute in the browser, it was provided by that exact server. Right. Essentially. It
[01:26:48]  just, um, protects you from cross site scripting attacks from unfiltered user input. Um, which would that have mattered for this site? Not until we added like
[01:27:01] , you know, user reviews or comments or something like that, which my demo didn't have, but it would have them eventually. So, you know, I implemented
[01:27:08]  it because I didn't want to be, um, disingenuous about saying we could be this fast, but also I didn't implement the things that we would need.
[01:27:16]  Like I wanted to give the arguments Kroger. We could do this. This is a website we could ship. Right. So, I mean, from a security standpoint
[01:27:26] , the single page app versus MPA thing, um, my understanding, like when you have some more stuff on the server, you have, it's easier to contain
[01:27:34]  it, but for the most part, um, a lot of the techniques you had to use, you probably would have had to use on either side. Right. As far
[01:27:41]  as, uh, multi-page apps and single page apps are concerned for security, they just have to care about the same things. It'll be the same attacks. It
[01:27:48] 'll, they change slightly in terms of like, oh, what's more or less feasible, but ultimately it's like, you need to protect against everything for both.
[01:27:56]  But the difference is if you're going to write code that protects against something, it has to live somewhere. Where are you going to have it live? And it turns out
[01:28:05]  if it's in a single page app, most of it, maybe not most of it, but a large part of it will have to live on the client. It's
[01:28:12]  like non, non-negotiable. Right. And so when you consider that it's like, well, then I would have to revisit my estimate in terms of
[01:28:20]  how much space do I have to fit a spy into? Because if security is going to eat up, you know, maybe say five kilobytes of my budget, that
[01:28:30]  means I will have to, uh, go back to the drawing board. Right. But accessibility was a little bit different because the, the, and this is why I'm
[01:28:37]  going to get going with the security stuff, super important and, you know, we can get into that. But as I was, what I was trying to frame it
[01:28:43] , it was mostly that like, you have to be aware of the same sort of things, uh, MPA server rendered architectures make that like slightly easier, but I
[01:28:52]  mean, you still have to deal with that, but for accessibility, I guess, single page apps offered a whole different level of consideration that you might not have had to consider
[01:29:00]  before. Yeah. Essentially when you do single page apps that like navigate between views, which I hope you're doing, otherwise I don't know why you did a single
[01:29:09]  page app. Um, in that case, it's literally just a single page, but that's fine. Then it's just a single webpage. Um, those exist.
[01:29:18]  Uh, the problem is you have to add code to accessibly expose navigations to screen readers, which a lot of people have done the work to do that. There's
[01:29:30]  like plenty of community libraries and that sort of thing. But then it kind of goes back to my original point where it's like, uh, that code isn't free
[01:29:36] . You have to download it. And then even on top of that, um, those libraries will be the first to tell you they can't get it 100% right.
[01:29:44]  There are some things in terms of the accessibility story that JavaScript cannot do today. Uh, there is an upcoming web standard to fix that. Yeah. Uh, call me
[01:29:55]  in, you know, five years after it's shipped in most browsers and most accessibility tools have also updated to support it. Yeah. I mean, this is, this is
[01:30:05]  one of those tricky things because, um, I, at least the standards on the way, I think for a lot of things and a lot of sites, um,
[01:30:14]  they're going to continue pushing the boundaries on client side navigation. For example, I know you're talking about accessibility specifically and there's, there's these, this kind of
[01:30:25]  part of the list, but client side routing also has the same set of similar kind of new considerations. Um, both, um, in both cases, I expect that
[01:30:37]  the client, the client people are going to be pushing, like, you're going to see people trying to do MPAs with client side routing and stuff like you,
[01:30:45]  you, it's probably going to precede the spec getting in. Um, but it does come with a cost, right? It obviously came with the cost of JavaScript,
[01:30:54]  which you didn't have room for. Um, and accessibility, um, is obviously very, very important. So it's a, it probably a very difficult balance when you
[01:31:03]  have such a small budget to deal with. Yeah. But again, when it comes back to the budget, some decisions just made themselves. It's like, oh,
[01:31:12]  I don't have space for this. Well, it's not worth considering. Like I just couldn't. Yeah. Yeah. But so people don't take that for an
[01:31:20]  answer. Someone said I had to write this thing where I justified why I thought that was the right decision. Yeah. I just love the detail into, into here.
[01:31:30]  Um, um, yeah. Yeah. No, there's just, there's so much in here. Premature optimization. Yeah. I mean, having less, I love
[01:31:43]  how you quote Alex Russell and stuff. He's been speaking about this stuff a lot, um, for years. And, and recently there's been a lot of like,
[01:31:51]  he, cause he's, his sentiment towards react has gotten more and more negative over time. He was never a fan, but like, it seems, uh, it
[01:32:00] 's almost like, like if you have trying to be well, meaning, good messages. And then over time you're shouting out and going like, Hey, the wolf is
[01:32:09]  coming, you know, like the, what's that story, you know, with the, the, the boy who cried wolf, not the right thing. Cause obviously
[01:32:17]  that's something that's not coming, but you, you, after a while of shouting and no one listens to you, um, like you probably like, what do you
[01:32:25]  do? Right. Like it's the message that maybe isn't strong enough, or maybe it's not, you know, it's, it's interesting. Cause there,
[01:32:33]  there are so many great tweets and quotes of, about the impact of, of these things. Although I'm probably highlighting something right now that has nothing to do with what I
[01:32:41] 'm talking about, but I just, no, I know what you're talking about. Like it in years past, Alex would tweet things like, um, make sure
[01:32:49]  you have strong budgets and strong measurements and that sort of thing. And then, and only then choose react. If you know, it will fit your, uh, like goals
[01:32:58] . Um, and then as of like a couple of months ago, he finally just tweeted thing. He actually wanted to say, which was, if you want to be fast
[01:33:04] , just don't pick react, please. It's just like, ah, he finally said it. But the interesting thing is he's not the only one saying it
[01:33:10] . Um, and I think part of it is the react kind of stayed in its lane for a long time and single page apps, um, let's not single out react
[01:33:18]  in this in general. Um, they're just larger, um, and newer frameworks have actually been approaching, sort of trying to be smaller, but it doesn't completely solve
[01:33:26]  it holistically. But like for the longest time, he was like, okay, I've got to build an app. Yeah. You need JavaScript, go for it.
[01:33:32]  But now there's kind of like this thing where it's like, I can use my JavaScript framework to build any sort of app. Like let's go use react and
[01:33:39]  next. Yes to build e-commerce. Well, that might not work for you. Yeah. You know, that, that might not work. And there's some good
[01:33:47]  points in the chat right now where it's like, uh, you know, there was the idea that if you only ship the Jason, then incremental updates will be far more
[01:33:55]  efficient. And that's true. Um, however, in practice, that is not always true. Like for example, on Kroger.com, I looked at
[01:34:04]  the Jason response to populate our footer and it weighed more than the entire footer HTML did anyway, which we were already SSRing. So, and then,
[01:34:14]  you know, it's also a, uh, blurred line in terms of multi-page apps can have in-page interactions. Like in my demo, when you added a
[01:34:21]  product to the cart, it didn't do a full page reload. It did a, uh, fetch request in the background and it, like optimistically updated the stepper
[01:34:29] . It had like a little bubble appear in the cart, that sort of thing. But because it was scoped to those very small things instead of the entire page or
[01:34:38] , you know, entire regions that don't need rich client side re-rendering, um, I was able to sneak in. Right. Yeah. I mean, you
[01:34:46]  still have, you're still doing islands, you know what I mean? Like you're, you're still, you're still, you still have a lot more flexibility.
[01:34:52]  And the thing that I, I, we didn't really show here and I kind of love showing it sometimes if I can see it is with streaming and the way the
[01:34:59]  browser holds the paint, um, like streaming is also really good for MPAs. Just in general, we were talking about like, you know, because MPAs
[01:35:08]  reload the page more than a single page app in theory. Sometimes you find you, you refresh anyways, cause you don't believe what you see. But in general MPA
[01:35:17] s, uh, generally reload the page more. So they're going to hit that impact more. And what, with streaming APIs, I, let me actually go back
[01:35:25]  here. This article is a little bit. Another good point in chat right now while you're scrolling is, um, like, uh, page refresh is very latency dependent and
[01:35:35]  that's true. Um, there are two things that I was betting on to help mitigate that. Cause I really didn't want to fall into that. Cause that, that
[01:35:43]  does suck. Like, um, not knowing when the form submission will complete. And the first one was browsers have shipped paint holding since 2019. So that made page to
[01:35:56]  page navigation feel a lot smoother and less disconnected. Um, like a lot of people, when I was showing them this demo thought I was doing spa navigation just because the page
[01:36:06]  updates didn't seem interrupted and that sort of thing. I can't show it here because of this, but you can picture that see the same way this shows up immediately
[01:36:16] . Like there's a flicker here cause it's the first light page low, but if it was holding the navigation, this header would stay the same, even as you
[01:36:23]  navigate to the next page because they hold the paint. So what you actually would see, and again, this won't show the thing is you would see that this content is
[01:36:32] , you basically see a page, then you'd see those placeholders show up again in here and it would look like the header doesn't even refresh. So you get
[01:36:41]  the loading indicator and then the content would load in. And what's really happened is you start on a page, started streaming, immediately get the header, same header, no
[01:36:50]  flicker. And then the content puts in a placeholder. So now you've replaced the content, you have a loading indicator, and then the content finally finishes streaming in
[01:36:59]  that whole interaction actually gives people, um, because you're streaming gives people, um, affordances to understand that things are loading and it gives them the, uh,
[01:37:10]  feeling like the shell didn't unload on them. Like they still have the header and the search bar and all this stuff. It actually, this is why they might confuse it
[01:37:17]  for a single page app because, uh, this navigation that's happening while the MPA is streaming, right. And to be fair, that was a wonderful compliment to receive
[01:37:25]  that people accused me of secretly using a single page app. That's like probably the best thing I could have heard. Right. Um, so there is one thing that
[01:37:33]  unfortunately I didn't get to talk about in my series. Cause I decided to cap it when it was still, you know, short and sweet. Um, if you can
[01:37:39]  call these short, like scrolling, yeah, short and sour, let's say. Um, but I did have like a very scrappy prototype running where a service worker would
[01:37:51]  eventually upgrade in the background. And that knew enough about rendering parts of the page because on the server, Marco just renders to a stream, right? Right. And
[01:38:02]  what do service workers render to? Right. Yeah. I mean, yeah. So I had a little bit of Marco transpiled inside of a service worker to do offline M
[01:38:10] PAs, which that was something I thought was super important, especially inside of a Kroger where connectivity is spotty, that sort of thing. I want offline,
[01:38:19]  but I don't want to download two versions of the app to enable it. Right. Like I don't want the offline version that's all client side rendering. And
[01:38:27]  then if you haven't gotten the service worker, cause it's not a guarantee, you would still need the server version. That's, that's two apps. But instead
[01:38:34]  of most of the like rendering code was the same between the service worker and the server and the Dom part was still agnostic of where it was coming from. That,
[01:38:45]  that is not exactly just one app, but it's more like 1.3 apps, right? Right. Like I would still have to go out of my way to make
[01:38:52]  sure that the service workers fetches, um, were, you know, equitable with the servers fetches and that sort of thing, but it was still far less work
[01:39:01]  and it didn't like risk junking up the main thread and the huge memory increases and that sort of thing. Right. Yeah. No, that, that makes, that
[01:39:09]  makes a lot of sense. And I can, you didn't, what you're saying, did you made it something small, but did you, did you actually demo
[01:39:17]  that piece or did you just kind of like distinct take it like, did you finish that or did you? Um, it, I had it working for Kroger.
[01:39:28] com specifically. It was, it was one of those things where it's like, first you make it work and then you try to figure out the API for other developers to
[01:39:33]  do it. I had not done that second part yet. It was, it was hard coded into the cart page specifically. Cause that was like the MVP for offline support is
[01:39:41] , oh, I have a list of things I I want to buy in the store. I want to look at it as I'm walking through the aisles and my
[01:39:48]  connection keeps going up and down. And then I want to like remove them from the list as I check it off. That was like the, the minimum viable product for offline
[01:39:57] . Right. Um, so I had that and I hadn't generalized it and that sort of thing. And unfortunately I can't show that off because, uh, I left
[01:40:05]  Kroger shortly after I actually did that thing. Right. So, which is kind of wrapping us towards the end of this thing. Cause I, I, you
[01:40:14]  did all this, you showed the demo. Um, like did you hit your 20 kilobyte goal? Yes. Um, at first I didn't. And I was
[01:40:24]  very upset about that. Like I was just barely above it. And then I'm like, well, no, one's going to hold this against me, but it's
[01:40:32] , it felt bad. And then, uh, my coworker who was like, he wasn't necessarily working on it with me all the time, but he was like,
[01:40:40]  interested in acting as a sounding board for a lot of the problems I was encountering. He's like, didn't you say you weren't using Bratley?
[01:40:47]  And so then I did the work to like make Bratley compression work in my web pack config. And, uh, then I fell under 20 kilobytes. And
[01:40:55]  so I got to have my cake and eat it too. Uh, the initial demo I showed off internally also accidentally left Marco in D in, uh, development mode.
[01:41:04]  So I fixed that just by setting an environment variable and then, oh, weird. I'm now at 19 kilobytes. Oh, wow. So, um, let
[01:41:15] 's see here. Um, I'm thinking, I'm trying to think of the best way to do this. Should we just show them that video you did the one that
[01:41:22]  you posted on Twitter? Like, is it, I feel like just to, there's going to be more takeaways after this and where this all went. But I think
[01:41:30] , I think, I think everyone needs to see this just to understand, um, just where this all went to, let's see, how do I want to get there
[01:41:38] ? Yeah, actually, no, we'll go this way so we can see this. So on the left hand, we have the demo on the second, we have
[01:41:48]  Kroger.com, which is, um, the current website. Can you, can you tell me how you chose the remainder of these? Um, well, amazon
[01:41:57] .com was seemed obvious because that's the e-commerce that everyone is competing against, even if they are not an e-commerce, um, business yet. Uh
[01:42:11] , and then walmart.com just because they were our closest competitor. And like we on the performance team, we frequently would do performance comparisons between them and us to make
[01:42:20]  sure we weren't falling behind. Um, the native app one was, I just sort of had in the back of my head. It's like, people are going
[01:42:29]  to say this sort of hardcore optimization is why native apps exist. Like, uh, Kroger sells phones. They probably have the Kroger app pre-installed
[01:42:38] . And then out of like a perverse sense of curiosity, I checked to see how fast it was. And then once I realized my thing was faster than the native app
[01:42:45] , of course I put it in the video that that's, uh, any, any web developer worth their salt would do that. Right. So just so I, I
[01:42:52] , before I press play, cause we can keep on talking over this video while it's playing because it goes for a little while. Um, what, what, what
[01:43:01] , what, what is the demo that we're about to see? Like what, what does it show off? Um, you boot, whatever it is, you search for
[01:43:10]  eggs, you add them to cart and then you begin the checkout process. So it skips logging in and it skips, um, actually checking out just because otherwise I
[01:43:18]  would have to put credit card details in, in front of you. But essentially it's the, the core user flow it's by thing from site. Right. Okay
[01:43:27] . Right. So yeah, this isn't just like a single page load experience. Um, you know, where we just like get our lighthouse scores and go away and you
[01:43:36] 're running this on, how, how did you do, how did you actually run this? Like, so the, that is on this very device. Um, and
[01:43:45]  I was using a app called ADV screen recorder to do what it sounds like. Um, so it's running with overhead, um, the overhead of the screen recorder.
[01:43:54]  Cause Android didn't have native, um, double buffering screen recording support for these phones. And then it is over a throttled connection at the packet level.
[01:44:05]  I think we were using IP config on like a, uh, tethered Mac book to simulate a bad 3g connection. Right. If you don't know, if
[01:44:15]  anyone doesn't know this yet, um, the Chrome team is very open about the fact that the dev tools performance throttling cannot and is not as good as the real
[01:44:23]  thing. Like it's a fair approximation, but it breaks down if you actually want to measure what it's like under a slower network. So we were like, all
[01:44:32]  right, we want to put our money where the mouth is. Let's make this as hard as possible. Let's do the real thing. So I considered writing a blog
[01:44:41]  post of how we did that, but I don't even, I looked at the code we were using in the shell scripts and I'm like, I don't know how
[01:44:46]  to explain this. I've forgotten how this works. Fair enough. Yeah. Okay. So, yeah, so this is a full process. And like, I guess the
[01:44:54]  thing is you're using the device manually with your hands. So like there's some delay in terms of like that variance in terms of like how long it takes you to
[01:45:04]  type something or click on some theory, if I was like using web driver or something, these could have gone faster, but I also didn't want to do that because I
[01:45:11]  had to, uh, the take you see of Kroger.com in this one was like my seventh take. Cause I had to keep recording. Cause it's like
[01:45:21] , I would maybe hit something too fast and the UI wasn't expecting it and it would show a big error. And I'm like, well, people are going to
[01:45:27]  accuse me of making this look bad. So like I, I kept doing takes over and over again until I saw something. I'm like, okay, in theory, this
[01:45:35]  is as good as it's going to get. Um, and I still get people in the comments saying things like, oh, when I try doing this on Kroger
[01:45:42] .com, I don't get the full page refresh, uh, glitch that you did. And I'm just like, uh, trust me. I tried to get rid
[01:45:49]  of it. Right. So this is progressive enhancement at work, right? Is this a situation where, uh, we hear this a lot cause a remix team likes to
[01:45:58]  talk about how their stuff still works when the JavaScript hasn't loaded. But in this case, if you move too fast through Kroger.com, you were actually triggering
[01:46:07]  maybe like full page reload logic instead of the client side JavaScript. And it actually would slow you down if you didn't do stuff slow enough. Yes. Okay. Yeah
[01:46:18] . This is, this is interesting. This is the thing that we're progressing. Yeah. Let's just get going. Yeah. Sorry. It's just one of those
[01:46:25]  things where the progressive enhancement is like an interesting, uh, trade-off. It's not just a, like a simple win. It's good to have for many reasons
[01:46:33] . It just, okay, let's play the video. So here we go. It's, it's funny how long native's taking here. Um, I talked
[01:46:41]  to some of our Android developers and they're like, oh yeah, that'll be the analytics calls. And I'm like, that makes a lot of sense. Kro
[01:46:46] ger.com is definitely the slowest to get loading on that initial thing, but I love how you're already checking out here in your demo. We're at like 20
[01:46:54]  seconds here and yeah, you're done. Wow. Okay. So that was probably too fast for people to see, um, if they're trying to watch all the screens
[01:47:01] , but where are we at searching for eggs? Amazon's got the eggs. Amazon's doing not bad. I don't know what's going on at Walmart here.
[01:47:09]  Um, the Walmart website that also took a bunch of different takes because their UI confused me because I wasn't familiar with it. Okay. Yeah. Okay. There we go
[01:47:18] . Now the eggs are coming in. Amazon's actually not doing too bad. Yeah. It looks like Amazon didn't really sell eggs, or at least if you type egg
[01:47:26]  in Amazon, it gives you very different search results than what you would think. So I think for Amazon, it's actually like flour or something, whatever. Right.
[01:47:33]  But okay. 60 seconds. Not bad. So Amazon's actually second, which interesting. Amazon's also an MPA. Yep. And from what I remember, it actually
[01:47:43]  does use jQuery still. Like I, I hit view source recently to confirm that I'm like, yep, there it is. All right. So how are we doing
[01:47:50] ? Kroger website, still having some time. Mobile's doing interesting lookups and stuff. Okay. And there we're, and there we're done. So
[01:47:58]  yeah, Amazon, man, Amazon's pretty impressive. I have to say. Um, I mean, if you want to make the world's fastest website, I hope you
[01:48:07] 're faster than Amazon. Like they are a good competitor to beat in that regard. Well, in the fact that they're like, this is the large scale. Like,
[01:48:14]  I don't know what's going on with Walmart or Kroger at this point. Are we just searching for the eggs now in Kroger? Uh, yes
[01:48:22] . Okay. Okay. And Walmart's just getting the eggs back. So like, it's your demo, obviously you, you, we already went into when it went into
[01:48:34]  it and it's why it's so fast, but like, sure. You give Amazon some slack. They're huge. Um, the mobile slack, but like,
[01:48:44]  we're, we're still just kind of going here. I, I, this is probably why you cut the video short. Uh, there we go. Walmart just finished
[01:48:51]  at two minutes. Um, this is why you probably cut the video short on, on Twitter. Cause after some while you're like, is the audience still with me?
[01:48:59]  Have you guys dropped off? I had to cut it for Twitter. Cause Twitter did not allow videos that long. It would not let me upload the full thing. Yeah
[01:49:10] . I mean, this is a different kind of thing. It's not like a scientific benchmark, but I mean, I'm sure people could go back and rewatch this
[01:49:18]  and get a feel for these flows. Cause it's not, it's, it's not unexpected. Actually the first 20 seconds is probably the most illuminating of this.
[01:49:25]  Cause it looks like this video is still going, we're at like the three minute mark and, and we're just like getting to the checkout. I can see why K
[01:49:32] roger was interested in improving, um, the performance here because like the mobile app, you know, it is what it is. People probably pretty accustomed to this kind
[01:49:42]  of flow, especially cause if Amazon's your gold standard, like you're, you're within range, this is obviously lightning fast. Um, but you know, again,
[01:49:52]  comparing a demo to a full production website is always a bit of a challenge, but like Walmart here is over double Amazon and Kroger.com. I mean,
[01:50:07]  can I fast forward a little bit? Yeah. I mean, you were, you were almost there. So three minutes and 44 seconds. I'm just going to go back
[01:50:15]  to the beginnings because maybe you didn't see it. Let's watch the first 20 seconds again. And I'm actually going to watch the demo and see what happens now,
[01:50:22]  like closely. So you're searching eggs cause it's right on the search bar before anyone else is actually loaded. Search results come in. There's the eggs. Did
[01:50:28]  the client side update of the add to the cart, go to the cart link, another MPA look, reload, click it, reserve pickup. So you went through about
[01:50:37]  four or five pages, get the users in twenties. Okay. Yeah. Like even at that point, you're still waiting on, there's the eggs at Amazon. Yeah
[01:50:47] . Yeah. Obviously everyone doing these demos, like you already practiced the flow. Most people aren't going to be like that efficient at getting through the progress. But yeah
[01:51:01] , I mean, this is yeah. I mean, yeah. It's one thing if you're like, here's my lighthouse scores now by, because what usually happens then
[01:51:14]  is you have a Twitter argument where people point out, it's like, well, by loading all the SPA code up front, then the following interactions become much faster
[01:51:22] . And then it's like, are you sure about that? Right. Because this was actually the conversation that was happening in the chat a few minutes ago. Someone was like
[01:51:31] , well, if I always go to the SPA and get the JSON data won't for future interactions, this be an improvement. And in theory, yes, there
[01:51:42] , there, there are, there are the, that is definitely possible to do it that way. But it's interesting, maybe in practice, not so much, um,
[01:51:50]  that it in certain ways, these things aren't that different. Like you're still going to be at a situation where you're actually requesting a bunch of stuff from the server
[01:51:57]  when you do a navigation, whether it's client routed or not. And is it possible because of the overhead of what you do in the client that you're actually
[01:52:06]  requesting more stuff or different stuff, you know, like, right. Like I think Alex Russell recently posted about Gmail doing this, where it was like, on what we consider
[01:52:15]  normal Gmail, you click on an email and then it makes a bunch of requests to render that email. Cause you know, some emails have images in them. It has to
[01:52:23]  actually fetch the content. Cause you don't want to fetch the entire contents of your inbox, um, in the first render. Cause that would be a terrible idea.
[01:52:31]  But then he pointed out, if you go back to the basic HTML version of Gmail, and then you use like an old fashioned hyperlink to look at an email, it
[01:52:39]  actually makes fewer requests and it completes faster than the spa version. So I think that was a, a, uh, comparison he's been sitting on for years, but
[01:52:49]  he wasn't allowed to do it previously cause he worked at Google, but now he can do it. Right. So like, yeah, this, this is, this is
[01:52:57]  definitely kind of interesting cause it, it's no longer so cut and dry. And I mean, the one thing that's clear in the, in these examples, and again
[01:53:09] , it's the constrained device and everything to playing into it is that the single page app frameworks, the stuff that was built in react are significantly slower than the other options
[01:53:18]  and also significantly slower than your demo, but like actually slower than even like amazon.com. Like, like the, on one side, I'm like, give amazon.
[01:53:29] com a break because they're such a big e-commerce thing. But I, I, I wonder if you had a smaller e-commerce vendor, someone who could perhaps
[01:53:36]  have an easier job optimizing their single page app, uh, uh, shops could, you know, you'd hope they'd be able to compete with Amazon's performance.
[01:53:47]  Um, it'd be interesting to know at what point of scale does that actually get really difficult, um, with the single page app architecture. I think that's the whole
[01:53:55]  thing is scale question, right? Because like at a certain point, uh, single page apps as they are today, at least make certain assumptions like that, like everything is
[01:54:04]  going to make its way to the browser eventually. And I wonder sometimes if that's the right assumption. Well, it's kind of like if you are in a company
[01:54:14] , um, and you are going to let's see, be better than Amazon at something. Um, are you going to be able to out engineer them? Uh, probably
[01:54:23]  not unless you're one of the other big five or whatever it is. Um, are you going to be able to out decision, make them in terms of, we won
[01:54:32] 't do this one thing. We will do this one thing. We will optimize for this one thing. Uh, you probably should, because that's the only way you
[01:54:38] 're going to beat them at something. You have to be able to out prioritize them. Um, because otherwise people just go to Amazon instead. Right. Yeah. So,
[01:54:48]  yeah, I mean, that's interesting. Uh, it's just taking me a second. Cause that's such an, for me that when I saw that, that was
[01:54:57]  such a, uh, you know, like it was like, it was, I didn't see a demo like that for, you know, and it, it was
[01:55:03]  a pretty impactful one for me. I remember obviously Alex was there being all like, notice which ones use react, you know, being a little snidely, but if
[01:55:10]  it, putting that aside for a second, um, it's just, it's not the conclusion that people necessarily might've expected coming in. So you, you got to
[01:55:21]  do this, you got to show the demo and, and do all this stuff after, you know, doing investigation. You got to, uh, you know, do
[01:55:30]  kind of this, you know, work with the teams, do performance updates, finally decide, like, I'm going to do this myself set, spend a few months,
[01:55:39]  kind of getting set up, getting the right structure, looking at design, looking at accessibility, security, build the demo, do the whole thing. Um, so,
[01:55:50]  so what happened? Where, where, how, how, how did things go for you from there? Cause this demo was pretty impressive to me. Um, but yeah,
[01:55:58]  you think it's impressive in video form, uh, imagine actually using it. Cause that's how it was demoed internally. Like I said, this is labeled number four
[01:56:05] . Cause there were 15 of them. Right. You just loaded it up and go here. I made people use our website on the phones that we sell essentially. That
[01:56:15] 's, that's awesome too, because I, we also talk about low end devices and being like, uh, the, the, the, the bar is raising, right
[01:56:21] . We, we've, even Alex kind of upped his, his budget in his 2021 article where he's like, you know, before I said it was one point
[01:56:30]  out that it wasn't the devices that made those improvements. It was the networks and the browsers that have improved. Right. The devices are still stuck. Right. And the
[01:56:39]  fact that Kroger sells the phones themselves, uh, is like such a strong matches are like, you're telling people they can use this device. Our website better
[01:56:48]  work on said device. Right. Exactly. A lot of people responded to that idea for that exact reason. Cause like it, like, uh, you know, it's
[01:56:58]  like the synergy or integration argument or something on the side. It's like, well, if they don't work together and you're leaving money on the table, they should
[01:57:04]  work together. Yeah. So, I mean, yeah, I don't know. I mean, it's up to you how, how much you want to say,
[01:57:14]  I would love to hear some thoughts about, um, just how the demo was perceived and maybe what you learned from it and stuff. Cause interestingly, obviously a few months later
[01:57:24] , you're now working at eBay, um, on the Marco team. Cause obviously a lot of respect for Marco through this process and what you, you learned in like
[01:57:31]  being such a powerful tool to help you in, in this scenario. But, um, so I, I'm gathering things didn't completely go the way you, you might
[01:57:40] 've hoped. Uh, but. Well, they did at first, um, initial reaction was overwhelmingly positive. Um, it was just a question of, well, how
[01:57:50]  do you get from the vision to actually shipping? And I don't know the answer to that because I failed. I tried a bunch of different things and none of them worked
[01:57:57] . Um, and I wish I could give you information on like why some of those things didn't work, but I can't because I was not a full-time
[01:58:07]  employee. I was a contractor and for legal reasons, I was not allowed to hear about internal decision-making like processes and reasonings because I think, I think it has
[01:58:18]  something to do with like stock, um, insider trading or something like that law comes from, but essentially I could be told no, but I couldn't be told why.
[01:58:30]  So I can't tell you why it didn't work. I can just tell you that I tried everything I could that I thought had a shot and it didn't.
[01:58:39]  Right. Fair enough. But so the company ended up not going with that. I'm sure there's a multitude of little reasons here and there. You tried showing it in
[01:58:50]  different ways. Um, clearly the demo had an impact. People walked away from it going, wow. But then putting it into practice was obviously a much more challenging endeavor,
[01:59:00]  but how, how about you? What, what do you feel like you got out of this? What do you feel you, you learned from this experience? That's
[01:59:06]  a really good question. I'm not, I'm not entirely certain. Um, maybe I learned nothing because I started, uh, with a bias that I could do better
[01:59:25]  and, uh, in the end nothing happened. So maybe I couldn't do better, but in theory I could have, who knows? Um, I do know that
[01:59:34]  I did show a lot of developers who previously were very hardline react fans in terms of like, uh, what you're proposing is unrealistic. Like it won't scale that
[01:59:43]  sort of thing. And then I showed them a prototype that in theory had all the same characteristics of the things that did scale and they use it for themselves. And they're
[01:59:52]  like, I don't like, I don't like your methods. I'm not entirely certain that this would be a good business idea, but you have my attention now
[02:00:00] . Like, uh, you have at least made me reconsider some things and that's all I really could have asked for. Yeah, no, that's fair. I
[02:00:09]  mean, I, I, it's, it's interesting, um, how the ecosystem kind of sits right now because of the dominance of react in general and just like the
[02:00:21]  certain amount of developers that web in the web frame that are react developers. Like, I don't know how else to put it because like that is the frame for how
[02:00:30]  the web, um, works and puts everything in that context. And you kind of were like, look, there is another way. And it's a little bit different maybe
[02:00:40] , and maybe not what you like or thing, but it's capable of doing things you may have never thought possible because of those base assumptions you had. Right. And like
[02:00:50] , yeah. So like one of the things that came up, this always comes up whenever you propose anything but react is that someone will go, but it'll be so
[02:00:56]  much harder to hire for. And it's like, that does seem like a reasonable fear. I haven't seen any proof behind it or numbers or anything like that. I
[02:01:04] 'm sure it seems like it probably holds in reality, but then it was also the thing that it's like, all right, we know how much money speed makes us at
[02:01:12]  Kroger. Let's just, uh, run the calculations. Oh, okay. It will make, um, umpti million dollars. If we get this much
[02:01:18]  faster, maybe we can take some of that money and then give it to recruiting or, you know, something like that. Or even just like beyond that, it would
[02:01:26]  be along the lines of, because those figures that I say in the thing where it's like, oh, $40,000 per millisecond or like $100,000
[02:01:36]  per kilobyte of JavaScript. Those are good approximations for incremental improvement. Right. But you know, if you take something that used to take minutes and now it
[02:01:47]  only take seconds, that's not going to be a linear graph. It's going to instead look linear for a small part of it, and then it's going to do
[02:01:56]  completely, um, unguessable nonsense as it approaches zero. Like user behavior starts changing the faster software gets. Completely. It's like, it completely changes the paradigm
[02:02:09]  of what you think you could do or how you could interact with. You actually change user patterns. When things like, look at, I mean, this is such an
[02:02:16]  extreme example, but you saw this, the impact of the web early days, even when we went from like dial up modems to, to cable or DSL, like
[02:02:24]  people suddenly started viewing the web differently. Yeah. And it was, it's funny because I used to think that dial up was, um, sort of like a, uh
[02:02:35] , small motorcycle and that it had amazing latency, but then it can't carry very much at once. It has, like low bandwidth. And then I recheck my
[02:02:43]  assumptions recently. It turns out that was not true. Um, modems and dial up actually had a significant amount of latency because of the modulation and demodulation step where
[02:02:53]  it had to like translate between the two. So the latencies we see in cellular data connections are actually pretty comparable to what they were back then as well. Yeah.
[02:03:05]  Hmm. It's something I have not looked into, but that's, that's, that's interesting. There's a question from the chat and I, if people have
[02:03:11]  questions for Taylor, now is a really good time to get into them. Cause right at the beginning, you talked about how you learned, um, to make good websites.
[02:03:18]  And, um, it, we've been talking a lot about how there's been like a react path to learning. And this is the thing, how, where,
[02:03:26]  where do you suggest people look if they want to, you know, maybe follow a bit of your own journey about how you found these great resources on the web, um,
[02:03:36]  about the web that aren't necessarily too filtered perhaps by the, the trends of today. Uh, I don't know because when I started on that journey, uh, the
[02:03:45] , those trends of today did not exist. So when I was looking stuff up, those were the only options. Um, what, what, oh, there's a
[02:03:54]  followup. I'm asking because most learning resources basically regurgitate docs to you instead of talking about real concepts and real world challenges. Yeah. That's challenging. I
[02:04:04]  mean, I guess in that case, the problem is you have to learn how to do your own research and that sounds like, like draw the rest of the owl, that
[02:04:12]  sort of thing, because it is a hard skill. Like doing your own research is something that should be taught in more schools, but it's not like even people whose
[02:04:20]  entire jobs revolve around doing research. They only learn about it like in the later years of their college experience where it's like, okay, we've given you the textbook
[02:04:28] , but now you have to figure out and go how to learn for yourself from things. And it's like, well, how do I do that? And it's like
[02:04:34] , well, that's a great question. Um, so in that case, I would say if I'm going by that analogy, the first thing you have to do is
[02:04:41]  you have to start to learn to look for primary sources. Like if a paper cites something, go look at that citation, read it very frequently. It will contain
[02:04:52]  details that completely change the conclusion you otherwise would have gotten from it. Like that famous paper about like human computer interaction delays where it's like, oh, um, a
[02:05:01]  hundred milliseconds feels like an immediate reaction, that sort of thing. I just read that paper when I was trying to cite it for the talk I was giving up. And at
[02:05:10]  no point does it have a table like that. Instead, it talks about 17 different specific kinds of human computer interactions and what humans would tolerate for each of those. Like
[02:05:20]  for one example it gave was, oh, try to fit, um, typing a letter into it most between hitting the keyboard and it appearing on screen for like 0.2
[02:05:29]  seconds. And like, we would never put up with that today. If you had to type and have a fifth of a second of latency between each character, you would stop
[02:05:38]  typing. It would not be fun anymore. : Right. So the, the, and this is an interesting thing. And I often talk about this, uh, they
[02:05:46] 're like the, that it's a moving target, right? Some old paper suggested that this was acceptable. They, they, they understood in the paper that it was in
[02:05:57]  specific scenarios that were specific to where they were at. But yeah, like that bar for UX also rises. We have, once we've seen something as possible, it
[02:06:09]  instantly raises the bar and we're like, yeah, everything should be faster. Everything should be like be possible. And I think, yeah, that, that, that,
[02:06:17]  that means that this is like an ongoing thing. : Right. And then the other trick for the problem that, uh, Manon brought up about learning resources, just reg
[02:06:28] urgitating docs is, um, actively seek out disagreement when it comes to like learning about concepts, like find someone who is saying something different than the first thing you found
[02:06:38]  and see what their actual point of contention is, see what the differences are. And then usually that leads you down a rabbit hole where you learn more about the fundamentals because
[02:06:46]  it's very possible. And it oftentimes is that they're both rights, but they're talking past each other about something slightly different or like the context is different. Like I
[02:06:57] 'm not saying never choose a single page application, but for the website I was working on grocery e-commerce, I was saying that a spa was the wrong choice.
[02:07:06]  : Um, but for something like a game, like a Minesweeper clone, you probably should do that in a spa. In particular, one trick I used
[02:07:15]  a lot when I was learning web development was if you really want to learn about technology, you have to learn about its weaknesses, as well as its capabilities and its strengths.
[02:07:25]  So one thing I would frequently do is if I really wanted to learn about something new, I would type in whatever the name of the technology was in Google and then add
[02:07:32]  sucks. And then I would look for angry blog posts by people saying that whatever I wanted to learn about sucked for X, Y, or Z reasons. That makes a lot
[02:07:42]  of sense that way. : That makes a lot of sense. Actually, the, the, the question asker said, that's how I found Ryan streams, probably
[02:07:50]  because I was disagreeing with someone. : Searching for solid sucks. : No, probably searching for, for some kind of counterpoint to the current trends of,
[02:08:01]  of, of, of, you know, single page apps or, um, needing a V dom or whatever. V dom suck. I actually never have written that to be
[02:08:09]  fair. You'd probably find rich Harris if you search that, but, um, : No, so the other problem with, um, me giving advice on how to do
[02:08:17]  better research is that unfortunately a lot of the decisions I made for this demo and that sort of thing are the results of 10 years of accumulated reading about making fast, accessible and
[02:08:28]  fate and safe websites. : Right. So to a certain extent, unfortunately to get the same results I did first, you must spend 10 years, uh, making mistakes
[02:08:37]  and doing research and learning things. Um, hopefully you don't have to do that. So if you want a website as fast as the one I made, I can guarantee
[02:08:46]  you that, uh, using Marco and Marco's rollup plugin will get you there. Um, I can't tell you it's going to be sufficient to get you all
[02:08:55]  the way there. Cause I had to make a ton of other micro decisions and that sort of thing. And I'm sure there are other things that can be that fast
[02:09:01] , but I can't personally guarantee that it will do that. Cause I only made the one. : Yeah. Yeah, no. And, and that's the thing,
[02:09:10]  right? Each of these scenarios, you're, you're always pressed for that choice of tools and what, how to accomplish the goals. And even though we've talked a
[02:09:18]  lot about performance today, you even said yourself like a minute ago, about hike, like if you're building this thing, maybe that's single page app architecture makes sense
[02:09:27] . But for what you were doing, it did, it did not fit within, um, the parameters. And in a sense, um, what was really cool, as
[02:09:35]  I said, is you took something, which for some people might seem kind of obvious, but also kind of unconventional by today's standards and showed that what was completely
[02:09:44]  possible. And I, in my opinion, just blew past ex expectations. Um, so. : Yeah. So, and again, with that, like, uh, head
[02:09:54]  to head of the five things, it is true that my thing hadn't yet sustained ongoing feature developers by a feature development by a horde of developers. However, I
[02:10:03]  also didn't get to implement some performance optimizations. I really, really wanted to. So hopefully those two balance each other out. Like, um, it was a bunch
[02:10:12]  of, uh, things like configuring HTTPS to be faster. Like it would need one less round trip. It would stream more efficiently with smaller record sizes. Um
[02:10:21] , I wanted to do the thing with a service worker where every response would pretend to be responding instantly and maybe even do page transitions in the MPA architecture. Um,
[02:10:32]  but I didn't get to do those things yet. So in theory, you could probably keep that demo, maybe not quite that fast, but let's say, you know
[02:10:44] , it would go from 20 to 25 seconds for the whole, uh, page checkout. I think that would be realistic. : Right. And here's the thing.
[02:10:53]  you might even be giving developers too much credit, but that demo went to 35 seconds. Like you're still in, in a pretty good place, you know, like compar
[02:11:06] atively, like the other thing was, where were we three minutes and something like by the time the, yeah, it's just not even comparable. It's still an order
[02:11:16]  of magnitude. Yeah. And it's like, and then again, I was doing some really inadvisable things with that demo. Like, uh, the node server
[02:11:23]  was resizing everything on the same thread as the server that was generating HTML. Like never have your image resizing server be the same CPU core, let alone even the same
[02:11:36]  box is the one that's like generating HTML pages. Don't do that. but I did that. Cause it was, uh, the fastest thing I could get to
[02:11:44]  work for the demo. : That makes, makes sense. I mean, you're going to make those trade-offs and that's the thing, the demo is never exactly
[02:11:49]  a thing, but I like, even I forget something where like you ask a developer about something and like the, your expectations should be that it should take three times as long
[02:11:59]  to come out and be twice as slow or something like if by that criteria, you still won by a landslide. So like, I, I think, I think
[02:12:09] , I, I think there's much more than the technology that goes into the decision making. Um, and there's a lot of factors that play in that, you know
[02:12:17] , we don't always get to see here, but I am so stoked that you had the opportunity to go through this journey. So you could tell us about it.
[02:12:25]  and so that others can learn from it. Um, which is really why I was so stoked to have you on here. Cause as I said, I read those articles and
[02:12:33]  it like every single one was like, I was just like, wow, this is, this is, where else am I going to find this kind of content? Um,
[02:12:39]  it's not, it's not a regurgitation of the docs, you know, uh, that's, that's part of what's, what's hard to find
[02:12:47] , you know, is to find real, genuine content like that. And I, I'm super stoked to have found it. Um, let's see here. Let's
[02:12:54] , let's see if we can address some of the comments in the chat here. Yeah, no, there's some really good ones. Um, like the first one
[02:12:59]  is gray restful's point that you need, uh, to treat performance regressions as like, uh, showstoppers. You do absolutely. Uh, no,
[02:13:07]  I was saying when I was hoping they would balance each other out that I also would be there fighting that fight while other developers were like adding features to it. I would have
[02:13:18]  to have like a zero regressions policy or something like that. Um, absolutely. Yeah. Yeah. Um, before we do another one, how many years of
[02:13:27]  process, we need to see this level of performance becoming average. It's cutting edge. Is it cutting edge? I don't know. It's weird, right? Cause
[02:13:34]  I'm using a 30 year old technique, um, and writing code with file sizes that we would think were normal in the nineties. Right. With a framework that
[02:13:43]  has been doing this for what? Eight years in open source. Almost a decade. Yeah. So it's funny. It's more that we're getting attention drawn to
[02:13:52]  this now. So people like, okay, this is actually maybe important. And that's why the focus is there. I mean, to be fair, I talk a lot
[02:14:00]  about taking that knowledge, taking what we've been doing the last few years and talking about that convergence, like how can we get the best of all worlds if possible? And
[02:14:09]  that's a big focus in my stream and the technologies we look into. But if the, depending on what's important to you and what you prioritize, like Taylor priorit
[02:14:18] ized, you can get what you need today. Um, and you know, if, if, if, if it's important to you. Yeah. Cause ultimately, like
[02:14:29]  I did spend a lot of, um, performance expertise and research on finding Marco. But at the end of the day, I wrote components in a framework that mingled
[02:14:42]  API back-end data to make HTML. That is the job of every web developer ever. That is not a ground-breaking new thing for you to be doing.
[02:14:51]  Um, The other thing people are asking about, um, because, uh, this has kind of been threaded throughout. And this is an example. Did you check out El
[02:15:03] ixir? Uh, Phoenix live view came out. People are talking about HTMX. This kind of weaved through the chat and I was mostly ignoring it as it
[02:15:09]  was going because I wanted to focus on your story. There are infinite, um, other alternatives for like, could this technology do the same thing or be just as fast
[02:15:18] ? Um, and the answer to that is I hope so. However, at Kroger, uh, the only approved languages to develop in were node.js and
[02:15:32]  java and like none of those other things yet. So like, I'm sure Elixir is very nice. I'm sure it has different, but equally competitive performance
[02:15:43]  like aspects. But, um, I was not going to be able to get, uh, I forget what line, is it Erlang that Elixir is based on
[02:15:51] ? I believe so. That was just like, if I was seriously proposing, here's how we do an alternative front end at Kroger. Um, using a
[02:15:58]  non-approved runtime was just, it was a non-starter. I couldn't choose that. Right. Yeah. Um, yeah, yeah, I got to.
[02:16:07]  And then like, that's why the Phoenix live view HTMX is relatively newer approach. And I guess that one does potentially use Java, JavaScript. I think HTM
[02:16:16] X is something I'm going to have to look at in the future on the stream because it has elements of, have you, have you heard of HTMX actually
[02:16:23] ? Have you seen that at all? Yeah. Yep. That's the one where it uses like web sockets to sync an MPA with the server. Right. Right
[02:16:30] . And you write all your directives in the HTML almost, and then it like swaps out parts. Yes. Um, I, I actually was steered away
[02:16:37]  from that sort of thing by an older developer on our team who used to be a giant Meteor fan boy, which I don't know if, if anyone here remembers Mete
[02:16:44] or, but what Meteor did sounds a lot like what HTMX is doing now. And he was just like, it wasn't worth it. Like what,
[02:16:51]  you have no idea how much trouble web sockets are stay far away. And maybe that was biased and I shouldn't have listened, but like, I was trying to narrow
[02:16:59]  down what I should do to one choice. So I was going to listen to his expertise. Right. No. And then that's completely fair. And I, I
[02:17:06] , some of these technologies that are on that side are on the web socket side. Um, it's an interesting thing because when you like, we were, we're all
[02:17:14]  saying more server reliance, depend on the server more, do, do more with the server as a way of reducing cost. This approach generally, it goes as far as
[02:17:23]  expecting you to like really have that active server. Like it's part of the responsiveness of your, of your experience, even at a micro level, because like,
[02:17:32]  I think HTMX, like all client side interaction is handled pretty much unless you write like a separate JavaScript layer on top. Like the framework itself does everything by swapping
[02:17:41]  in HTML from the server, which I don't, maybe that's too extreme that side. Maybe, maybe you can get 80% of the way there with that sort of
[02:17:48]  approach, which I think for a framework, offering the 80% solution is the right choice, right? If you're a framework, like if you try to cover every single
[02:17:57]  possible thing, someone could want to do with a website, um, then you're end up going to just essentially have a framework that's like, this is Apache.
[02:18:07]  Uh, it is a web server. You may build anything you want on it. Goodbye. Yeah. Um, it's interesting. Yeah. Cause there's, there's
[02:18:15]  more discussion just going on in the chat. You got people talking about wasm react server components. Yeah. Gray restful is mentioning that Java could do it. And
[02:18:22]  that's true. Um, especially because Kroger did support Java at the time they've changed, which languages they support now. So this may no longer be true.
[02:18:29]  Um, in terms of like, I was restricted to only Java and JavaScript. But the funny thing is after like the day after I posted that, the weirdly obscure art
[02:18:38]  of, um, streamed HTML post, a guy showed up in the Marco discord who was so angry, but not at me. He was angry because he was a Java
[02:18:48]  guy who worked in Java web services. Then he read that article, learned about like streaming HTML. And then he joined the Marco discord just to tell me that he wanted
[02:18:57]  it so badly and he couldn't find a single Java framework that did it for him. He was like, I have to grab the raw connection and write raw bytes to it
[02:19:05] . If I want this. I thought that was funny because it was just like, oh, I didn't include job alternatives in the article just cause I couldn't find any
[02:19:12] , but you're telling me they just do not exist in general. Right. So this is, it's so weird. Like, um, yeah, the streaming thing is
[02:19:21]  an enigma. Um, I've talked about this on stream before cause I actually showed Dan Abramoff, uh, Patrick's item steals article, um, about
[02:19:32]  streaming in Marco from 2014 and it described fragments. I mean, suspense, I mean, almost the same thing. Um, and, and Dan was just like, yeah,
[02:19:41]  this, it's kind of crazy. Cause like he, he went and posted how like they've been working on this the last couple of years. Like that's why suspense
[02:19:49]  exists in react was because they were trying to solve streaming. Actually. It was like, it's part of a bigger puzzle, you know, what they put all together
[02:19:56] , but it was like, that was like the beginning points. And this, you know, when he said, well, well, he's like, we didn't look
[02:20:03]  at Marco specifically, but the stuff that Patrick cited as influences is, it was the same stuff that we got like big pipe from Facebook, um, had, had streaming in
[02:20:13]  it. And then he's like, and then if you go back further, it cites other articles from there. Cause he's like, you could just go back the
[02:20:20]  whole tree of people at every conversation, every five years going, why ha why isn't anyone doing this? And then like they linked to an article from five years ago
[02:20:29]  that also said, why is not anyone doing this? Actually, I almost want to do this really quickly on the street in the show. People, what I'm talking about
[02:20:36] , cause I am not joking with my article. Cause I have that section on there where I link to it and that sort of thing, honestly. Um, but if you
[02:20:43]  know for certain that the other ones go through that way, I can't guarantee that my breadcrumb trail is unbroken right? It's just funny. Cause like
[02:20:50] , uh, what was it? Uh, um, yeah. I mean, Patrick's article, which was Marco, uh, fragments, something like that. Yeah. Okay
[02:21:01] . Rediscovering progressive HTML. He didn't call it streaming progressive HTML rendering with Marco. So this is 2014. And then he had, Oh, where is it?
[02:21:12]  2000. Okay. Speeding up the web. So we've got big pipe open, like a new thing. What's this? Nope. Not logged in. Oh
[02:21:19]  yeah. Unfortunately it's no longer publicly accessible. They're big pipe, uh, post that like changed in the last year. Okay. Progressive running via multiple flushes
[02:21:30] , 2009. Um, and then this one always gets to me. I found that Jeff Atwood wrote this article that was the lost art of progressive HTML rendering in 2005
[02:21:43] . He's calling it the lost art like 17 years ago. Um, I mean, we can, and he, um, he, yeah, I mean, where,
[02:21:54]  so I think honestly, if we really do want to like make this happen, we do need to answer that question in terms of like, why do we forget this every five
[02:22:03]  years? Um, I would love to know the reason. I don't pretend to know what the reason is. I had theories, but I wouldn't say any of
[02:22:09]  them are the smoking gun. Um, it might be that it's like a solution to a problem that only becomes a problem. You cannot ignore once you hit a certain scale
[02:22:18]  with it. And until you force a new technology to that scale, you don't know that it needs the ability to stream yet. Yeah. Yeah. I mean that
[02:22:27] , that, that could be it. Like maybe they only got serious about doing, um, streaming and fragments and react when, uh, they decided to use it for all
[02:22:36]  of Facebook and then all their performance metrics for the rest and their performance engineers were unhappy about it. And then they're like, well, don't worry. We'll
[02:22:43] , we'll get that performance back. We'll improve react. Well, in this 2005 article, he's basically criticizing ASP.net because it renders the entire webpage
[02:22:53]  and memory before sending a single bite to the browser. And it's just funny because like, it doesn't matter what the framework is at the time. ASP.net
[02:22:59]  by the way, is like one of my least favorite things. It was like, I call it the dark ages of time, but it's worse than just ASP.
[02:23:07]  But like, it just, it's just, it, you know what I mean? Is there an ASP.net page that was embedded data grade that relies on
[02:23:13]  10 complex database queries over 15 seconds? Like he's explained the same, the same scenario. And maybe this, as I said, doesn't get caught up by the hobby
[02:23:20]  developer. Um, and that's why, you know, like, is it, are we over-optimizing it? Like, are we getting ahead of ourselves?
[02:23:26]  But the thing is like, other than the weirdness of browser support, this is just a win. Like it's just, it's just straight up win. Like,
[02:23:33]  right. And then, I mean, honestly, it's like one of those things where it's like, um, my site actually could have been faster than it was
[02:23:41]  if it was a static HTML site, right? Like that's the fastest you could be until you need things like search, where it's like, oh, you can't
[02:23:50]  even pre-cache those results because users could put anything into search. You have no idea. Like, and in that case, you need some sort of dynamism.
[02:23:59]  And in that case, that's what pushed me to, to streaming. You're, you're baiting me. Dylan's baiting me. It's because,
[02:24:06]  like, Brian. Yeah, just fix your backend. You just fix your, yeah. Um, man. So if someone had come to me with that at Kroger
[02:24:15] , I don't think internally anyone did because we knew what our backend was like. And it's like, I'm not saying it was bad. Um, because I actually
[02:24:23]  think that given the stuff it had to do, I am actually kind of impressed that our backends were as responsive as they were, but it would be things like,
[02:24:30]  okay, to get the availability of an item in a store first, you have to connect to that store. Um, find out if like any of the scanners had recently
[02:24:39]  like checked out that one when like a stock person was going through and checking that sort of thing. And it's like, oh, what sort of a software is that running
[02:24:46] ? And then they just look at you and they get that look in their, in their eyes, where it's like, if I tell you what software these, uh
[02:24:52] , barcode readers are running, this is going to be the next two hours. And then it's like, then it's like, yeah, every store has a server
[02:25:00] . It's air gapped. You have to use like radio waves to communicate with it unless it's during a certain access window part of the day, in which case,
[02:25:08]  and it's just one of those things where it's like, the real world is so full of nonsense that a sufficiently good backend for grocery could only be hairy and ridiculous
[02:25:20] . So saying to Kroger, just fix your backend. It's like, okay, are you going to pay for it? Yeah. I mean, I like this
[02:25:27]  too, because let's face it. If I'm thinking groceries, I'm thinking, okay, like how hard can this be relational database, maybe some products, some
[02:25:36]  product listing, like it's a typical storefront. Like you've, you've got a, you've got the product SKUs, you have inventory, you have,
[02:25:44]  you, you basically have a bunch of tables that are related. And at any point you're kind of going, what are the products? Um, you know, so you
[02:25:52]  can handle search, you're asking, you know, what the variants of those products are, get pricing information, you know, inventory information. And then you kind of put
[02:26:01]  it out there. It doesn't seem the most complex thing to someone perhaps, but, uh, obviously experiences have demanded a move more than that. And real world of
[02:26:11]  patching all this stuff together is also beyond my simple, perfect database model that I'm picturing in my head. Yeah, no, I, I truly couldn't tell
[02:26:21]  you what the full thing looked like just because I couldn't conceive of the entire, like, uh, part for me, the backend was just this vague nebulous,
[02:26:29]  uh, Kirby dragons land. And I was like, I am fine not fixing the backend. I will do my best to make the front end as fast as possible.
[02:26:36]  And then as it turns out, that's usually a good idea because as performance, um, experts have said for years, it's like 80, 20, like a slow
[02:26:44]  backend is bad. Um, you really don't want that because you're kind of doomed to being slow. If your backend is always slow all the time. But for
[02:26:53]  most webpages, if you just measure where the time is taken during their loading process, 80% of it is front end. So always start there. Um, if
[02:27:02]  you have a really terrible backend, probably start there, but you would know if that was your big bottleneck. Um, usually in the form of a server bill,
[02:27:12]  you would know. Yeah. It's interesting because sometimes these things get measured on a whole different order of magnitude, right? Like when you're talking about database queries, you
[02:27:21] 're talking in the tens of milliseconds, uh, usually not in the hundreds of milliseconds, but usually in the tens, uh, it can be over a hundred, but
[02:27:28]  usually not in the hundreds too far. Um, and and then when, but when you talk in the browser and you're talking about load times and you're talking about restricted
[02:27:37]  devices, we are definitely talking in the hundreds of milliseconds, the difference of hydration, uh, and JavaScript shipping and network and stuff. These are much more constrained environments where the
[02:27:48]  overall performance implication might actually be a lot heavier on the front end simply because, um, you're talking almost a whole different order of magnitude in terms of what you can
[02:27:58]  optimize. To be fair, um, it might be really hard to optimize that zone because you're dealing with the network or devices and things that are out of your control.
[02:28:06]  But on the other hand, the, the room that you have to improve performance, I feel like is a lot larger of a range. Right. And then like when it
[02:28:14]  comes to, um, some, so like something I really like about Remix is how much they're encouraging, pushing server rendering to the edge. You absolutely should do
[02:28:22]  that. I wanted to do that so desperately. My demo did not do that. Um, but essentially it's one of those things where it's like, if you are
[02:28:30]  making network calls to render a page, um, then would you rather make them from the user's phone to the entire internet and then back to whatever database holds that information?
[02:28:42]  Or would you rather do it as much as you can between a CDN node and that database and then like funnel it all into one HTML response? Because like Akam
[02:28:52] ai and other CDNs are very happy to tell you how fast you can talk to one of their servers from anywhere in the country. Like they, their entire core product
[02:29:01]  is building a second private internet that's faster than using the public internet infrastructure for you specifically, they will build you a highway. All right. Um, yeah, no
[02:29:16] , I'm glad we got to discuss this and kind of entertain people's, um, questions here in chat. Uh, is there anything else you, uh, we're
[02:29:24]  going to let Taylor go pretty soon here. Is there anything else you want to tell us any last points, any last little words of wisdom you want to put on the
[02:29:32] , uh, or anything you even want to plug? Do you want to, to, to the audience here? Uh, I mean, Marco six is coming out and it
[02:29:43]  promises stuff that would make my demo a lot faster. Um, it's not out yet, so I can't guarantee you those results, but it's the kinds of changes
[02:29:53]  coming up where I looked at them and I'm like, oh, I don't know if I like that. And then Michael Rawlings and Dylan Piercy were like
[02:29:59] , but by doing this weird thing, you would save 10 more kilobytes of JavaScript. And I was, and I did the, you know, I was like a
[02:30:07]  cartoon wolf that just saw a sheep and my eyes, like bugged out and my jaw drops. And so I'm like, okay, I'll put up with a little
[02:30:13]  bit of weirdness if it is that much faster. I mean, yeah, you're, you're working on the team that's putting this out now. So yeah
[02:30:21] , disclaimer, they, they do pay me to work on Marco now, but at the time when I was, you know, investigating it for making the fastest possible Kro
[02:30:29] ger.com, I was just some weirdo in their chat that was asking about things. Nobody had ever asked about Marco before. I remember some of that. I came
[02:30:39]  in late in the game, but you had a very interesting, unique knowledge on very specific parts of like the spec that it's pretty invaluable. And I'm hoping the
[02:30:49]  team is leveraging you to, to make the, well, I mean, we've already seen it. The, the feedback you had on streaming and streaming errors is definitely influencing
[02:30:58]  how we're approaching stuff in the future. So yeah. Yeah. Once my talk at UX DX is over, um, hopefully you're going to see a lot of
[02:31:05]  stuff changing in the docs because that's what I'm in charge of. Nice. Nice. Yeah. Yeah. I, I, I got to play a little bit in
[02:31:12]  it, just trying to rip modernize it, but, um, docs, docs are challenging thing. And I might even talk about that a bit more, uh,
[02:31:20]  a bit later in the stream, but yeah. Um, I think we're at a good place now. Um, I, I had a lot of fun, uh,
[02:31:25]  talking to you Taylor and I think everyone learned a lot, um, from the stream. So, um, I, I, I'm going to let you go now.
[02:31:33]  Um, thank you so much for joining us today. Thank you for having me on. All right. Uh, that was awesome. Um, I'm glad we got a
[02:31:45]  chance to have that conversation. Um, Um, so this is very, very, very cool stuff. Um, and really to kind of go through that whole spectrum,
[02:31:56]  um, from single page app, multi-page app, and kind of find what works best for the situation. I, we don't always get the chance, right.
[02:32:05]  To, to do that kind of exploration. And, uh, I, I'm, I'm, I'm pretty, I'm pretty happy to kind of hear that level
[02:32:13]  of insight because it's, it's better than any number of lighthouse benchmarks I show you, right? Right. Like it's, it's better than my hacker news demo
[02:32:24] . Yeah. No, Taylor Taylor was awesome. I'm hopefully he's still, he's still in the back room for a bit. See all the thanks coming through in
[02:32:31]  the chat. There's always like a little bit of a delay, but, uh, that, that was amazing stuff. Um, but yeah, on and forward. I
[02:32:40]  just need a second here, drink some water. Can I get myself regrouped? Cause we're going to talk about, uh, this week in JavaScript. And
[02:32:48]  there was a lot of different tangents and stuff that I want to talk about. Actually it was, it was, it was really, really quite cool. Well, the
[02:32:54]  overwhelming thank yous coming through the chat for Taylor. It's like every single person watching the stream just put thank you in. Um, yeah, no, honestly,
[02:33:03]  so much to learn there. No Long Island iced tea. No, I had some orange juice, but I already, I already downed that one. Sorry this way.
[02:33:11]  Yeah. Um, it's some like murky looking ice melted water here. Um, but yeah, I've, uh, since moving to my earlier time, I
[02:33:23]  am no longer drinking alcoholic beverages on stream. Not that I ever did if there's any legal repercussions from Twitch or whatnot, but, um, I am not doing that
[02:33:33]  currently this week in RxJS. Oh no, not, not RxJS. Um, I mean, I might bring up that tweet, uh,
[02:33:41]  if it makes sense, uh, how it fits in. I appreciate his thirdness. He, the art of investigator, research and engineer all at once. Yeah. Brilliant
[02:33:50]  stuff. No, it's, it's, it's amazing. Um, as I said, we don't always get the chance to do that or we do it in
[02:33:57]  smaller amounts. And this is how you find that content. You know, we're talking about, um, this, this is like, I knew instantly when I read
[02:34:08]  it that I'm like, at some point in the future, I'm going to talk about Taylor, talk to Taylor about this stuff. It's just, we talked for
[02:34:15]  two and a half hours. Like we didn't even need much of a demo or coding or anything. Just so many things happen in a two year period when you're on
[02:34:22]  that pursuit. Uh, amazing stuff. Let's see if I can get, get us all ready for this week in JavaScript. Um, just going to throw some stuff
[02:34:34]  together. It's a good time to ask me any questions in the chat too, while I'm kind of prepping all of this stuff. I think we're in a
[02:34:41]  pretty good place though. Though I'm probably going to forget stuff. I always forget stuff. That's, that's usually my problem here. I kind of, uh,
[02:34:49]  I kind of get started and then I completely forget stuff. Um, hopefully the Twitch ads haven't been too bad for people coming in. As I said, I'm
[02:34:57]  an affiliate now. I don't know if I regret that decision, but you know, here we go. I, I think my viewer, I think our viewership on
[02:35:05]  YouTube is still like, like, like four times on Twitch. So maybe it's cause the no emotes. Yeah. People want to hear about as no. Yeah,
[02:35:15]  of course, of course we can talk about as no, but that's not the only thing we're going to talk about. Do I have opinions on party town? Party
[02:35:21]  town is great. Like here's the thing. Party town is solving a problem that is so prevalent that affects everyone. You'd go like, why isn't this built
[02:35:30]  into the browser? Like, um, I'm hoping that more primitives come out to make this possible, but Adam Bradley from builder, just, I don't, I
[02:35:38]  don't know even how he thought of it. It's such a clever little hack. And then it worked and everyone's just like, I don't even know if they
[02:35:46]  believed it themselves when it happened. They were just like, like, Oh, like in a way this is the most framework performance and all that, but in a real
[02:35:57]  world setting, this is the biggest performance boost we've seen in like, like five years. Like, like you, when you, the thing, if you've ever done
[02:36:06]  benchmarking or done performance, you know that it's not like a linear progression, you improve this. And then this goes, like, it's usually, you just find
[02:36:12]  that you go move from one bottleneck to the next bottleneck. So it's not like this suddenly fixes it. It's something like, Oh, something else is
[02:36:19]  now the bottleneck. Third-party scripts have been the bottleneck for a long time. You know, JavaScript framework, raw performance, neither here nor there. Um,
[02:36:30]  but like, this is just win, win, win, win across the board. Um, I don't know how things work in the politics of it, but if I
[02:36:37]  was like Google or something, I don't know, I'd be pouring all my money into this. Like this is, this is, this is super relevant and super
[02:36:44]  important and everybody should have access to this. So yes, big fan of party town. what do we got here? My job allows us to use temporary work on project
[02:37:02]  one. I want to speed up, test our angular front end and then build and compare the same function with quick. Okay. Any session where to learn how to do this
[02:37:08] ? I mean, that's, I think it's, this is kind of the problem, right? Cause it's benchmarking tools. There's ways of measuring stuff.
[02:37:18]  We can, we can go and like talk about specific tools, but you know, stuff like, uh, what webpage perf or what was the name of it? I
[02:37:27]  can look it up for you and put that in, but the truth of the matter is it's probably going to take a combination of different tools and you need to decide what
[02:37:37]  the target metrics are, like what you're going to build towards. Because like Taylor is very clear. He's like, look, I got this phone. I literally,
[02:37:42]  he said he bought 15 of them and he knew that like, that's how he was going to go about measuring and where he's going to put this thing. Uh
[02:37:48] , it's a pretty wide open question because there's so many different angles of performance where things can actually change very differently depending on what the constrained element is. I told you
[02:37:56] , it's all about bottlenecks. So you testing with a real app, smart, um, figuring out what tools are available. You got to decide what aspects you want
[02:38:04]  to look at. Are we looking at rendering performance? Should we be using tools that, uh, you know, kind of spam requests, but how does that play in
[02:38:12] ? Should we look at, um, you know, page load scores? Do you care about that? See Lighthouse scores getting optimized right now have everything to do with SEO
[02:38:20]  and business side rather than actual performance to a certain degree. Like, I mean, good performance is good for the users, but, um, the real keen I'd focus
[02:38:27]  on Lighthouse scores is because it lets your Google page, rank higher. So like, there's a lot of aspects here and sorry, I go on a tangent about this
[02:38:37]  for quite a while and maybe that's a topic that I should shelf and consider how we can approach it in the future. Um, but yeah, definitely, um,
[02:38:45]  definitely something where, uh, I would start just looking for tools and looking at previous comparisons and seeing if you can find different aspects because holistically testing is hard. Uh,
[02:38:57]  Taylor's example, it was a very holistic test. Um, when I was talking to Dan Abramoff in the Twitter space, not too long ago, he was like
[02:39:04] , we don't actually use performance metrics. We use like not, not in the way you think we don't like test how fast the website works. We test our
[02:39:10]  conversion rates. So we, he told this crazy story about how they built a feature that should have made everything better for performance, but their conversion was going down and it actually
[02:39:18]  helped them find a bug because like some bad assumptions they made, but it was actually the results oriented metrics rather than looking at the paid performance. So there's a lot of
[02:39:30]  ways to, to do this and put it together in ways that show or don't show what you want. So it's important to be honest to your goals and figure
[02:39:39]  out what you want to accomplish with this. Um, sorry, it's very vague. Um, we've covered some of the tools on stream. Uh, we can look
[02:39:47]  at it more too, in the future, because I, I've, I've, I've wanted to do some benchmarking. I've already done some around SSR
[02:39:53] , but I want to do some benchmarking around hydration. I've worked a bit with the builder team specifically about doing some of that, but I want to, I
[02:39:58]  want to get more to a lower level core library framework level rather than like testing the meta frameworks. Cause meta frameworks bring a huge, not a huge, but a significant amount
[02:40:07]  of overhead and you, you don't care as much because you want that overhead. Cause you want the capabilities of say next JS or whatnot, we can do better, which
[02:40:13]  is why I'm glad that they're making the benchmark. But, um, for me, I make benchmarks so that I can learn how to make improvements. And I
[02:40:22]  think it's not as a way of choosing which tool I use as much as understanding, um, places where, uh, like improvements can be made and, you know,
[02:40:37]  maybe this a very, like a thousand slices kind of take, you know, if you, if I can make improvements in various places though, I'm hoping that the
[02:40:47]  total result for you specifically, or you or whoever uses it, um, can benefit from it. But that's, that's, that's largely, um, why I
[02:40:55]  like benchmarks. And even when I'm benchmarking other products, I'm kind of looking at that and looking at the characteristics of how it impacts performance, not necessarily like,
[02:41:03]  oh, this is slower, but like, why is this slower here? And does the implementation have impact on that? And can I use that knowledge to, to do better
[02:41:12]  implementations myself? So, sorry, I kind of went way off on that. Um, so yes, this is what we talked about in the stream. Yes.
[02:41:24]  Um, optimizing pre-act signals article. Yeah, this is a great in-depth article and we might look at it a bit. I actually got a bunch of time
[02:41:33]  to, to benchmark it, uh, pre-act signals, uh, recently. And so we'll probably talk about that today as well. Um, and it's interesting
[02:41:41]  because there's different scenarios that you want to optimize for. And, uh, I think pre-act what they're doing actually really fits well with their VDOM
[02:41:49]  model. And I, I think, I think, I think it's interesting to see like the different, uh, trade-offs that like, say I made with solid
[02:41:56] . Um, so yeah, what do we got here? Web page test. Thank you. That was the one I was thinking about. Yeah. Part town weights.
[02:42:06]  Yeah. This is the specific thing, you know? Yeah. Atomic array support. Uh, this is the one where the browser supported, but I, I feel like
[02:42:13]  if this approach works well enough, I almost, I don't know what it takes and I'm not close enough to see, but I almost feel like this, this whole
[02:42:23]  area should just not be something that developer has to worry about. Um, I'm hoping I, I very much prefer the low level primitive approach than the higher level.
[02:42:33]  Um, especially as you're kind of feeling out the space. Um, right. We, we don't necessarily want another web components thing happen, but on the other hand
[02:42:42] , like this feels like one of those things that it would be great that like no developer ever had to worry about this again. Yeah. I mean, it's possible
[02:42:54] , uh, Phoenix framework. Um, I don't know enough about this area. I focus on in JavaScript. Um, it's interesting though, because yeah, I need
[02:43:04]  to think about this one a bit more because like, you're right. I'm not a big, as big of a fan of this approach, but I can't concret
[02:43:16] ely put down why exactly other than, um, what I did in my JavaScript paradox article. It's the best way to put it. Anyway. Okay. So I
[02:43:29]  think, I think I'm in an okay place. I already talked this week about, uh, being a Twitch affiliate. So I can, I'm just gonna skip over
[02:43:40]  all of that. And, um, are we ready to get started? Yeah. Chats all here and present. Um, maybe I'll switch to this view.
[02:43:47]  Yeah. I like switching to this view. This is good. Um, Phoenix does JavaScript. Um, that's, that's good. I, I, as I said
[02:43:59] , I need to look further because does it like, yeah, I mean, I have a lot of questions. I'm not going to ask them all on stream right
[02:44:08]  now. Cause then we'll kind of go down there. Um, which I'm not prepared to have that conversation. I need to do more research, um, to confirm
[02:44:16]  some of my suspicions. Okay. So let's, let's go here. Okay. Ready? I'd like to talk about this week in JavaScript. Um,
[02:44:24]  and it's funny, this looks like an advertisement because I like popped it right up here, but this is literally what it started for me. It's been two weeks because
[02:44:34]  I was, um, in Finland, which I'll talk about in a minute, but, um, our next meetup for a solid JS is happening October 5th
[02:44:43]  and, uh, in Montreal. And basically just as I was kind of getting ready to go out the door, David's like, tweet this before you go. Um,
[02:44:53]  so yeah, do come out, do check it out. We've, this is our third one. We've met already in New York. We met in San Francisco and
[02:45:01]  now we have one in Montreal. Um, so I think this will be great. Um, I'm, I've, this is, we, we, we,
[02:45:09]  we don't have a solid JS conf yet, but this is sort of building our way up to this, just kind of going to different areas and kind of ignite, ign
[02:45:15] iting, um, smaller communities at this point, um, to check out solid. So very cool. Um, but yeah, uh, the, the, I'm
[02:45:26]  going to start with, uh, this, this tweet also, as I was on the way out, um, felt summit, uh, happened. And for a lot of
[02:45:36]  you, maybe this is old news because that was, I don't know, two weeks ago, but, um, there's a lot of really cool stuff announced like
[02:45:45] , uh, uh, SvelteKit finally being, um, RC, which is awesome. It's been a long journey and I'm not saying that in any critical
[02:45:53]  way. Um, it's been a long journey with solid start as well. Um, and we're not even beta yet. So I, I, I'm,
[02:46:01]  I'm generally a little, I guess, more guarded, which is why it's taken us so long. But, um, I, I, I fully see how S
[02:46:10] velteKit has been over a year, um, in beta and rich kind of came in and did the final house cleaning to get the release out. So I, that
[02:46:19] 's really awesome. But for me, obviously I fixate on some of the interesting points. And this one stood out to me is this Swix talk where, um
[02:46:29] , he talked about how Svelte and Svelte Society has grown over these years, blah, blah, blah. But the biggest thing that I got from it is
[02:46:36]  he's trying to guide the ecosystem and how to grow. And I think when you talk about ecosystem growth, React is probably one of the best examples of that. And what
[02:46:47]  he, he talks a bit about, you know, writing real apps, showing real examples, don't just make demos, which is great. Great. But I think
[02:46:54]  even though the focus here was like, we don't need to ship styles, ship actions and stores over components. They're much more reusable. This is what I focused laser
[02:47:03]  focused on because this is the truth. If you have composable pieces, like those are the, those are the primitives. Those are the things you can give out to
[02:47:12]  people and they have the most, the most reusability. That's how you expand out the ecosystem because you've made the pieces as reusable as possible. And my sort
[02:47:21]  of observation here was that the most reusable parts of Svelte don't use Svelte language. Uh, the actions of stores are written in plain JavaScript. Um,
[02:47:33]  and obviously self-contained reactive primitives have all been, have been the way the frameworks have been growing the last couple of years, um, is a real win
[02:47:41]  for architecture. It lends to like this headless pluggability, composability is king. I've, I've always said like, that's the most important piece
[02:47:48]  in terms of framework design. So it's very interesting to see that alignment here from the Svelte community. And yet, as I mentioned, those are the only things
[02:47:55]  where you don't use a Svelte compiler, um, to help author. So I don't, I wouldn't call it a contradiction, but it's,
[02:48:04]  it's, it's interesting to me because that sort of acknowledgement suggests growth and maturity in their ecosystem, which is really important, but it's, it also helps kind of
[02:48:13]  play the question of how the compiler fits into the story. Um, right. So yeah, it's definitely interesting to me because we want to leverage the compiler. We
[02:48:26]  want to have that DX story, you know, but the best way to help Svelte today is not use Svelte, um, language. Interesting. Um,
[02:48:38]  yeah. The rest of the stuff was talks, um, confirm modern frontends in, in UK, not thing, had a great time. I actually went to,
[02:48:46]  this is actually before a session. I went to speak at this, to the students, um, um, at the university in Helsinki when I was in Finland, um
[02:48:54] , with a lot of great other people here. Um, and, uh, that was a really cool session because the promoter thought that we would be talking a lot about
[02:49:05] , um, technical stuff and all the students were basically like, what do I need to learn? How do I get a job? All that stuff. And it, it
[02:49:11]  really, I realized almost immediately like when the first question was asked, like what skill is the most important to have as a developer? And I answered like almost unconsciously
[02:49:22]  communication, like that this was going to be a very different kind of conversation. Um, and I think it was a great session and I, this is probably what my highlights
[02:49:33]  of actually going to this conference was actually talking to the students at the university. Um, really cool opportunity. Um, but the talk itself was fun. Um, obviously
[02:49:44]  always a little intimidating when you go in front of a, uh, uh, audience of react developers and then you're like kind of like suggesting that maybe there's a different
[02:49:55]  way of doing things. Um, but yeah, this was actually my first conference in person too. So it was a little nerve wracking, but I got to thank the
[02:50:03]  streaming for making that a lot easier. So yeah. And they did like really cool art things, um, for each talker, uh, speaker, sorry. Um
[02:50:11] , I'm just kind of speeding through this part because probably the least interesting part, but this is just what I've been doing the last week. Um, it's really
[02:50:18]  interesting to get this feeling. I keep on talking about this temperature around react. And, um, what I felt at the conference was that I think it's going to
[02:50:29]  get addressed soon, but there's a lot of confusion. Um, and this one talk, uh, by Nicholas here was just, I was, I was laughing, even
[02:50:37]  though I like empathize with the position of the react team, he created a component and I just want to talk about this for a second because it's just a simple
[02:50:47]  component that you put under strict mode that just kind of tells you, Hey, um, stuff, this is what's going on. This is why your console logs are happening
[02:50:55]  twice. He called it, uh, react, reduce stress. And this is such a simple idea, but what the problem was he was using code sandbox and code sandbox automatically
[02:51:04]  strict mode stuff without telling you. So he's just like, look, you just import this component. It removes itself and prod. You just literally just put it in
[02:51:12]  your app and then your stress can go away. Cause it'll tell you what's going on. Um, like tell you if you're in strict mode, tell you that
[02:51:19] 's, and he actually used the double console log to, to do the detection of whether you're in strict mode or not. I don't know. It's, this
[02:51:26]  is, this is really clever and really funny, but it's, it's kind of, it's just one of those things, you know, I've been looking for
[02:51:33]  hints of where react is and the reacting ecosystem is, and this sort of acknowledgement and acceptance, um, says a lot in my opinion. Um, so just, just
[02:51:45]  kind of, you know, this is just a small thing, but I, I quite enjoyed kind of feeling that perspective. It was, I, I'm, I,
[02:51:54]  I don't know what react conferences were like years ago, but, um, I, I learned a lot of things, um, through this whole, this whole thing
[02:52:02] , which, um, probably brings me up to something that I should talk about today, because I feel like there's some big stuff on the horizon, um, on
[02:52:13]  react and, uh, I want, I want to, I want to kind of dig into this conversation that was going on. Um, it starts with, uh, Sebastian
[02:52:22] , um, which many, you know, kind of visionary behind modern react and now works at Vercel going, getting really excited for, I imagine an upcoming announcement about
[02:52:32]  server components. Could it be at NextConf? Quite possibly, but he's using a framing that I've been using very commonly in my stream, which is that he can
[02:52:42]  use it like MPI MPA Island architecture, but with none of the downsides. It's very similar architecturally, but it can be upgraded to a single page app
[02:52:38] . And yes, that's kind of how I view server components as well. It's basically a version of partial hydration, very similar to the island's architecture. Um
[02:53:01] , of course saying with none of the downsides is very strong, um, and started this whole conversation, obviously. Um, and some people obviously took that not as well
[02:53:16]  as others. And, um, it kind of spun out into a whole bunch of conversations. Right. Um, I'm trying to get down to the bottom of this
[02:53:30]  one because it also made me want to re-examine the, the idea of selective hydration. And I don't know if, if we talked about selective hydration much on
[02:53:42]  stream, we talked about partial hydration um but selective hydration that is in react 18 is actually different than partial hydration and dan's drawing basically shows it um and i actually got
[02:53:58]  into a conversation with andrew clark afterwards about this because this is this is kind of a complicated topic because maybe maybe this maybe it is escala draw time right um
[02:54:14]  we talked about time slicing before um let me quickly not save the image actually let's just i keep on pressing the wrong button this one i'm gonna just save this one call
[02:54:29]  it time slicing just in case i want it again okay cool now let's i'm just chunk this for a second the the the way this whole idea here is when you
[02:54:43]  have an app you have components right and then those components have other components that are they use under them you can see these as children components and those have other children under them and
[02:54:56]  we get this tree right so this tree that i'm drawing right now is all a bunch of components and this is very similar to what dan was trying to show me in
[02:55:04]  that image right um and actually i'm going to add one more but um and maybe center this a little bit differently maybe add another one too why not but the the whole thing
[02:55:17]  here is there's this kind of graph going on because generally speaking because the components are in actually no these arrows probably should be going the other direction but okay no no one
[02:55:31] 's gonna no one's gonna criticize me on that because we're talking about hydration progression and the hydration progression does go in this direction so let's let's do this okay and
[02:55:42]  maybe i'll do that and i'll do this just because no one asked about selective hydration doesn't mean i'm not going to tell you all about it so essentially the
[02:55:51]  thing is if you have any kind of top down system like a single page app this is a pretty good representation of how components work in a single page app whereas in a say
[02:56:03]  something like an islands framework case the only difference is instead of having a single top component you have multiple so maybe these trees aren't as deep because these ones are all separate and
[02:56:16]  you like you basically delete this part of the graph and then this is your top level that's but in any kind of single page app type framework you have this head of
[02:56:26]  the component you have to hydrate top down because that i've talked about this with resumability before basically the each component wraps over state and view code that is other
[02:56:37]  components and in order to get the proper state and the proper components you have to go down the tree this is true of any single page app true of solid cell react whatever
[02:56:47]  and the the idea is that means we also also have to hydrate top down so um essentially uh let me select that one as we hydrate i might kind of so go
[02:57:03]  okay this one's hydrated right yeah i i could talk about islands here but the islands part isn't actually that important to to to where i'm going with the selective hydration
[02:57:18]  the idea is this has to hydrate before anything else it doesn't matter if you interact down here or interact here maybe this is a button down here this has to hyd
[02:57:29] rate before anything else so um let's let's uh let's draw another shape let's draw maybe a box and let's pretend that someone interacts with this node over here and
[02:57:46]  i'm i'll fill i'm gonna go transparent on that and i'm just gonna put it like a red box here so this is this is this is something where someone
[02:57:54]  clicks right the thing is in a naive approach you're probably just going to start going down you're going to go okay well hydrate this then hydrate this sorry wrong one
[02:58:07]  black okay sorry then hydrate this and then actually it's usually kind of depth first if it's all available so then you'll probably hydrate this and then hydrate this
[02:58:18]  and you're starting to see why um this might not be the best um if it's fast like maybe who cares but you definitely have this top-down progression right and
[02:58:32]  the whole idea of selective hydration is essentially is pretend you've gone down this far in the hydration tree right and at that point someone clicks it well what react um 18 is
[02:58:47]  smart enough to do is go okay stop what we're doing instead of going to this next node like this is clearly where we want to go next so i don't know uh
[02:58:58]  let's let's give it a like this it's like this is where we think we're going to go next react goes okay stop that and instead they're going to go
[02:59:07]  up to here and go okay we need we know that this is part of this subtree and we're going to start hydrating here um so there and then here and
[02:59:19]  i don't know how this works sorry wrong wrong box um i don't know how how this works uh where can i get in here a hundred percent from this point on
[02:59:32]  this was i was kind of talking to andrew clark about a bit it probably continues on to here and then might resume this one and then continue on but the idea
[02:59:43]  is um and in fact with the interruptible hydration with react it's possible that after this point it actually has to restart from here because that's the closest parent that contains the
[02:59:56]  nodes they might have had the interrupt here so they actually have to re-render both of these again potentially um the way the interruptible suspense works in react um but essentially
[03:00:07]  the whole idea is they can choose between siblings um when to hydrate if the end user interacts with it that is what selective hydration is not partial because um they it will hyd
[03:00:23] rate everything eventually this will all be green and it's so i i view this more as like a progressive technique it's about you know the order of when um things hyd
[03:00:35] rate like when when you're streaming stuff uh it isn't available to hydrate see this is assuming that everything's on the page right um which sort of gets me to my
[03:00:47]  conversation with andrew clark about this because if everything's on the page this makes a lot of sense because you can if if you're doing all this hydration work and
[03:00:58]  something else could take priority and the end user interacts with it like think of the difference instead of waiting to hydrate one two three four five six seven eight components to get to
[03:01:09]  here you can hydrate one two three the depth of tree still matters but you can you can essentially skip hydrating stuff that you don't need right away and push it off
[03:01:22]  so this is this is a win already but to be in this state you need to be doing expensive hydration work um and it needs to all be available and what i was
[03:01:32]  trying to figure out from from um from andrew's perspective is because i said these are components but really um from a selective hydration standpoint it's not at a per component level
[03:01:41]  it's at a per suspense boundary level so these are actually suspense boundaries not not components so um these are things that load independently and i started kind of wondering i'm like
[03:01:55]  if i'm in a world where i have like what world do i live in where i have loaded all the data for all these different separate services and then have to make the
[03:02:07]  choice because in reality what will probably often happen is like maybe this data finishes and you start hydrating it but this hasn't this whole tree hasn't come in yet like
[03:02:19]  the suspense boundary here has not loaded yet um like this is this is this is still you know hasn't been streamed in yet and neither you know neither has this maybe
[03:02:34]  like the the thing is at the point at which the end user can interact how many parallel suspense boundaries are you hydrating at that time is is sort of it's sort of
[03:02:44]  my question because obviously you can't interact with this if it hasn't loaded so i'm picturing if if there's any delay between these so like say this loads first and
[03:02:54]  it starts hydrating like if this doesn't load first it's going to and this loads first it's going to start hydrating this way anyways so for this scenario to
[03:03:01]  happen this has to load first start hydrating then this has to load at which point then someone can click on it and then this still has to not be done hydrating at
[03:03:10]  that point to then interrupt it to go back and hydrate over here like this is what i was trying to get my head around because it seemed and to make things even
[03:03:22]  more complicated once you change state like let's say this actually causes a state update higher up in the tree let's say by clicking that now you change state here you can no
[03:03:35]  longer trust what was rendered on the server here because then hydration can't happen because the state no longer matches what's on the server so and i asked andrew and he does
[03:03:45]  the same thing we do in essentially if we know that the state's out of date then we can't keep the rendered html so to speak right like we could
[03:03:56]  try hydrating in some cases we could try hydrating it with the old state if it's available but if we haven't gotten it yet we're better to just client render
[03:04:03]  from that point so or or triggered again and this was basically the conversation that i had on twitter because this is another one of those places kind of like time slicing where the
[03:04:17]  benefit comes in when the computational cost is expensive because remember we're not actually doing any rendering here this is hydration so this is just the computational cost this is prioritizing our mem
[03:04:29] os essentially um so this is sort of this is sort of one of those interesting questions of where the value lies because theoretically i see the value here there's like you saw
[03:04:43]  the original demo like this can save a lot but this is going to be another one of those challenging ones for people to benchmark to actually show show the improvement and i think
[03:04:53]  that this is this is this is really the challenge um moving into this stuff today and the topic of benchmarking in general because we're kind of going into an age where
[03:05:05]  it's like when we move from the single core processor to the multi-core processor some workloads still were better on a single core processor like you can't parallelize everything right
[03:05:17]  there's certain workflows that are very parallelizable in this case if you have all this work these computations it is parallelizable but the thing is any random dev that goes and
[03:05:27]  goes huh i see this fast framework i'm just going to go test it and they go in they go test it they're they're gonna they're gonna be disappointed because
[03:05:37]  like they'll pick up something that's has fast single core processing capability like solid or svelte and they'll just be like very easily very be able to verify their assumption
[03:05:47]  they're like wow this is way faster you pick up this and you try and do that and it's going to be like no this is actually slower um i forget if i
[03:05:54]  actually showed this um but like you know our old friend js framework benchmark they added concurrent rendering to it which i was like what do you what are you guys doing right but
[03:06:04]  i mean let's see can we can we isolate it here let's go none we got react um here we go react no i don't want to do something i want to
[03:06:15]  do hooks hooks with use transition here we go hooks hooks use transition and let's put in vanilla for um or vanilla js1 let's put that in for good measure as
[03:06:26]  kind of a way of capping this this and let me blow that up so everyone can see it this is the difference on a raw rendering step and not the way you should
[03:06:39]  be measuring it between react hooks and and um concurrent mode or concurrent like this is like this is this is this is like very kind of brutal drop off here and obviously select
[03:07:05]  row these are the more partial ones everything else is actually kind of the same creation is relatively unchanged and and like actually clear roads looks like the memory uh maybe the memory release
[03:07:19]  is a bit better but generally speaking fine-grained updates get hammered and it makes sense why they would because those are the ones where the overhead is like of the
[03:07:31]  framework is most seen because if you create i don't know 10 000 dom nodes like it's the dom taking up the speed but if you're selecting stuff and doing little interactions
[03:07:42]  the framework overhead or reactivity or whatever is what you're actually measuring so this is not terribly important like like the performance isn't bad like if i go back here and
[03:07:53]  let's cap something on the back end let's pick something that's relatively known and okay ember there we go see react with with transitions is it's still you know ahead
[03:08:07]  of ember so like this is just kind of on on average but this is just kind of showing how this doesn't actually um cause um like it's it's not
[03:08:21]  it's not like free but it also kind of doesn't matter that much but it's something that an end developer if they just went and just did a dumb test like how
[03:08:31]  often does this text node update they're going to instantly see a performance regression and i don't think that's fair but that's kind of where we're at so yeah so
[03:08:41]  there's some questions coming in from chat about this um where are we here first question is selective hydration logic only applied on first rendering hydration of the app or is it all
[03:08:57]  supplies up which renders um it's for hydration so this would be the first render however i i do wonder if the server component paradigm makes this happen after the fact because like
[03:09:11]  if if you're doing client-side routing of islands so to speak hydration happens on navigation as well so i i suspect that in the server component world it's possible that
[03:09:23]  this logic might apply again later um but generally speaking for like you go pick up your react app do some streaming and stuff like why would hydration lead to inconsistencies when
[03:09:39]  you seed your state management using the same data as sr from your channel well the problem is what if people start interacting with your page before you get to render it i
[03:09:54]  mean you have a choice there you can at the point of getting this chunk try to replay it with the old data and then apply the new changes on top and i believe in
[03:10:08]  certain cases react does it do that but at a certain point if the state changes like we we might serialize the the global state at different points right but i'm like
[03:10:20]  to talk in next js in the next js app where you just have this big blob of json at the top i'm not talking islands on a prop thing or stuff you
[03:10:28]  know like quicker marco does you have this big blob of json at the top um and you have local state like from the component all of this plays into this it
[03:10:38]  is possible if you want to do a double render essentially to hydrate and then reapply the changes but i think at a certain point in complexity like i did talk to and
[03:10:46] rew about this because we were like he's like i could we could solve it probably you know and he's like i'm like what about context and he's like yeah yeah
[03:10:52]  context like the there's some interesting implications of what happens when you have uh state being injected into your components lower in the tree but like essentially the html you're
[03:11:07]  getting back is no longer in the state the app is in so i mean we talked about some streaming downsides this is one of those considerations if people do interact fast enough you
[03:11:17]  might and the services are slow enough um you might end up throwing away some of the work the server did it's just inevitable like usually everything happens fast enough you don't
[03:11:29]  really hit this but but like this is a zone that we have to go like at a certain point throw away what the some of the work the server did it's it just
[03:11:44]  it it the one of the the rules of hydration is the server and the client much must match and if the client has moved past the server that is not true right you
[03:11:52]  can replay them but here's the thing you want this stuff to be interactive before this stuff comes in so like you do apply the state changes you don't just hold the events
[03:12:07]  in this case like if if you can hold the events if you know that you have the html here like and this is what react actually does i was talking to
[03:12:16]  andrew like where he's like if it's just a matter of hydration propagation you can do smart stuff solids event replaying um that i showed on the one of my old
[03:12:23]  astro streams can handle this as well this the reason i was asking this is because i have like three quarters four fifths of the solution to do selective hydration and solid if
[03:12:33]  i want to because i already do the the event queuing and replaying aspect like i already have the ability to do that but then i asked and then when i found
[03:12:42]  out that they also throw away um the stream parts if like they aren't available i was like i'm like 90 percent of the way there but is it worth it for that
[03:12:51]  little chunk to to do this algorithm i'm not sure um maybe like the theoretical gains are there but i want to i want to understand their measure this more because as i said
[03:13:01]  we're already doing 90 percent of this anyways but that's why this is of such interest to me so it is interesting because it basically it fits in it's basically if
[03:13:16]  your hydration expense this is this is why this is a dilemma right because if your hydration expense is expensive enough you need to consider this right like you're going to throw it
[03:13:26]  away anyways if it under certain conditions but it but when you get here and you click this button and and you're like okay but it's still hydrating over here or something
[03:13:37]  you would like to shortcut it and come over here you know the tree is big enough the expense is high enough my question the reason i posed it is i want to see how
[03:13:44]  narrow the solution is right which i got my answer because the other option is resumability if your hydration doesn't cost really anything then the this prioritization doesn't actually
[03:13:58]  matter at all so this this is just uh you know investigation to understanding um what the the various trade trade-offs here so i i think i think it is definitely interesting though
[03:14:13]  right um like we're we're reacts looking at how to prioritize um hydration costs where others are looking at how to reduce or eliminate hydration costs so yeah i don't know
[03:14:27]  uh we're gonna have to see where this goes but this this was a really eye-opening conversation for me let's see what he said right now that does by starting
[03:14:39]  over with the update unapplied finishing hydration then replaying the update on top of the hydrated tree theoretically we could do it in a single pass which is happening easier to
[03:14:46]  do it in a double pass yeah yeah context i'm trying to say yeah see if hml hasn't been streamed in yet it reverts to client rendering this is what
[03:15:05]  i was kind of getting at so um yeah this is yeah this is a great conversation if you want to see it but the the reason the other thing and look this is
[03:15:17]  dan's version i am i'm so appreciative of dan when i say stuff and i'm like trying to understand and he did he gave me the diagram that we needed so that
[03:15:26]  we could actually do the the full the full picture here um so very helpful but this as i said this conversation was a little bit uh racy so to speak because when
[03:15:37]  you say none of the downsides sometimes people are kind of like come on right and what this started kind of a funny back and forth that of sub tweets that you probably
[03:15:49]  needed to be there to kind of follow but this is why we do this right um matthew phillips who um actually i'm just securing but i'm hoping to
[03:16:00]  have him on stream next friday and to talk about his uh framework course that if we don't get him next friday we will definitely get him very soon in the
[03:16:09]  future um but uh he wrote find someone who loves you as much as react team loves tweeting about how much better their unreleased projects are than current tech um this is definitely related
[03:16:20]  because obviously um working on astro it's islands framework react is basically saying that they've recreated islands with none of the downside and no one has it so it was
[03:16:32]  a little bit spicy not nothing too spicy that i expect out of uh matt he's he's he's always never shies away from showing his opinion but this one took me
[03:16:43]  way off because dan doesn't usually get pulled into this stuff and he goes i agree that unreleased things haven't earned the claim to be thought as the future but neither have
[03:16:53]  clear evolutionary ends in my opinion smile well that's that's that's that's spicy maybe people didn't pick up on that um but i definitely did um this is people
[03:17:07]  some people are like what what are you talking about it's like no this this is says to me something this says to me that react server components are very close to being
[03:17:18]  released um i obviously next conf coming around might be hint of that and react com december but you don't get pulled into this conversation unless you're like look i literally have
[03:17:28]  the thing right in front of me i know what it looks like um so um yeah and i i left a rather cryptic response i'm looking forward to the next 12 months
[03:17:42]  because react isn't the only one innovating here um i hope that people on the react team are looking wide the way that we have been to look at the different technologies
[03:17:52]  because what i see is an overall industry trend and i've learned the most by looking at different solutions to understand what that looks like but um you know i'm not gonna lie
[03:18:04]  i'm kind of stoked that my v talk v comp talk happens before next conf because i think i'm going to show a demo there um that many of you have already seen
[03:18:12]  on stream um when it did solid start but i think for people who haven't seen that demo is very eye-opening in terms of the potential to do things like
[03:18:21]  server components not in react not with server components much smaller much more efficient so i'm i'm looking i'm looking forward to that it's still prototype it's not it's
[03:18:31]  not like the full solution and i think for that reason i'm also doing this future tm thing a bit to be fair so but that's more to combat the idea
[03:18:42]  of where our clear evolutionary ends i do not think we're a clear evolutionary ends jason gets into an example where you know applying there's a false uh dichomity um
[03:18:53]  they're um rare to find dead ends most thought that are truly dead ends people just kind of evolve stuff and this is true reactivity everyone thought was dead it's coming back
[03:19:03]  again in waves but they they get into this crazy thing when they're talking about go-to statements and stuff read that if you're interested but i i think i think
[03:19:14]  i think this is this this is heating up um that if if you want any takeaway from that this is this this whole thing is heating up a bit um so so so
[03:19:26]  yeah what do we got here um that's a good question but i mean i think part of it is uh the the whole scenario here is react is presenting a holistic view of
[03:19:45]  the future we talked to talk about dan's comments a few weeks back when i asked him about um like uh are we where the abstractions are getting too big and he
[03:19:58] 's like no we're just we're just not there yet we gotta go further and that's something i i'm trying to place and identify with um but i think i think
[03:20:05]  the truth of the matter is preacts branching off from react shadow so to speak so i i think like you you're wondering why preacts getting pulled in i think
[03:20:17]  fresh and is also kind of like their bet too right it's it's like astro fresh is also an mpa islands framework signals happen to be a really good way for
[03:20:27]  islands to talk to each other there's no secret why it's like solid astro is like peanut butter and jam and preact with fresh like they built their own solution
[03:20:36]  in like this is very very powerful stuff and that's probably where this is coming from will they kill islands it depends they're not going to kill islands for taylor hunt right
[03:20:50]  they're good they might do a decent job the thing is it's none of this moves that's the thing it's not they can only kill islands if islands are the evolutionary
[03:21:00]  end of this approach and it's not we've already seen on stream that we're exploring other approaches right i i have this theory that anything you can do with a diff
[03:21:09]  you can do without a diff more efficiently so that's what we're going to see in the future that that's what this boils down to xml is like violence and with
[03:21:24]  all the yeah i'm gathering this is going back i don't know if this is the html xml thing or more of like using xml for like ap
[03:21:32] is like we used to use for soap because i i feel like i feel like uh oh man sorry reminiscing let's keep on going so yeah this this this was this was
[03:21:44]  my drama for for this week um maybe not my only drama but this this was definitely a interesting exchange and that's the thing over the next 12 months everyone's working in
[03:21:56]  this area everyone we've been focusing on the last six months but now these projects are starting to come to fruition so this is really exciting there's so much potential in new innovation
[03:22:06]  and frameworks here um right so like i mean it really kind of sets the stage of where we're at um let me kind of get back to my profile because this is
[03:22:21]  usually how i crawl this thing right um let's get back a bit sorry i'm going i'm jumping through right compilers and language like this this uh alex
[03:22:34] is from solid community here um he's been cooking up another new compiler i think this one is actually based on a new fork of reactivity that he's been working on he
[03:22:44]  he's kind of going like can we read to redefine the language here and this one does have elements of say views setup scripts and stuff but i think that the interesting
[03:22:55]  observation here is he he's actually defining blocks where reactivity is true um which um is interesting it's almost like componentizing svelte's reactivity which is a way
[03:23:08]  of putting it like making it into something that's not single file components breaking those boundaries because as we mentioned a few minutes ago svelte's the best way to expand
[03:23:17]  its ecosystem is actually get away from its language um which is interesting but this is an experiment so like what if we could take that language further and i think this is very relevant
[03:23:29]  when we talk about uh esno coming up in a second here but that's not the only thing that happened this week quick went into beta we've been waiting for this for
[03:23:39]  a while um we're talking about hydration here selective hydration if i went back to this drawing with quick you know what happens quick can be a tree like this but if we
[03:23:50] 're in quick and they've been adding streaming and stuff and the this diagram looks a lot different in quick because i'm just going to reset it just so that people can appreciate
[03:24:06]  the difference in quick just a second in quick it doesn't really matter when the stuff streams in because when it streams in then it'll be visible you can't click on
[03:24:19]  something before it's visible so who cares right but in quick when you click first of all nothing hydrates so it's fine and then when you click on this button down
[03:24:32]  here sorry selecting the wrong thing when you click on this button down here come on get me in there yeah what's going to happen is that a portion of that component probably but
[03:24:46]  most of it it's going to hydrate because they serialize at the component boundaries or whatever the async boundary is here and then they're going to hydrate this one
[03:24:53]  first and then go oh this one updates this one so then they're going to update then they're going to hydrate this one and then but it's not hydrate
[03:25:03]  actually hydrates the wrong term i use green unfortunately but they're not going to hydrate like it's going to be in the blue like it's going to be actually like
[03:25:11]  already running like i should have used that in my original diagram to show the difference between running and hydrating because then it's just going to rerun it's going to run
[03:25:19]  this one because because of the change not because it has to hydrate because literally it changed what it's doing like it's actually applying that new state change and then maybe
[03:25:27]  this affects this component over here so then it's going to so it's also going to run this component over here um essentially but that that's what quick does so what
[03:25:40] 's faster than you know like it's not incomparable because there's no hydration um so this this this is this is this is pretty exciting stuff um i got dragged into some
[03:25:57]  uh performance uh conversations around this too because obviously i'm a big supporter of quick and what quick is doing and uh people like okay then what's what's more performance and
[03:26:09]  efficient solid or quick and i'm like how do i even answer that question but i understand because it's a fair question and the answer is nothing is going to be more perform
[03:26:25] ant than hydrating like this so when it comes to page loading i mean okay i should step back technically given granularity there's a theoretical way to be more performant
[03:26:36]  than this um and but it hasn't been released yet it's it's called marco 6 but generally speaking this is within spinning distance it's basically a very very similar idea
[03:26:47]  so any framework that doesn't do this can't be considered optimistic from uh like a page low perspective like just like there's there's no comparison um and we've seen
[03:26:59]  this on stream but when it comes to anything anything else um rendering raw performance updates all that stuff um we're still we're still waiting on the benchmark there so to speak right
[03:27:13]  um they they've been making actually some good progress uh uh because i originally created a benchmark and actually made an issue on the repo um just to kind of uh draw attention
[03:27:26]  to it because people start coming on the js framework benchmark and they're like where's quick right um like multiple like at opening issues because when you talk performance people want to understand
[03:27:39]  performance um and to get it to get an idea of what's been going on um i i'll show the light for people who can't wait for the official results we
[03:27:49]  can kind of go here and look at closed issues after i did an original run um and kind of highlighted a few performance issues for the quick team they were able to go in
[03:28:03]  and actually make some really nice improvements here this is actually fine this is dev mode so like ignore this but um oh we didn't post the results never mind i thought it
[03:28:13]  was in here but um oh no it's yeah it's right here yeah so uh this is still a work in progress they're gonna make their official benchmark thing but roughly speaking
[03:28:24]  we're looking at about 18 percent behind preact on this without vanilla i always like having vanilla for for the comparison but let's put preact into our little matrix and
[03:28:40]  interpolate where we think uh quick's browser performances yeah okay this is good so 145 about 17 18 roughly so we're looking for a framework that is roughly in the 55
[03:28:54]  62 160 range so a little bit faster than react and react hooks so actually you know what let's just remove all the filters here for a second and go to all and
[03:29:10]  just kind of do a little scroll and this will give us an idea of what just ballpark where the performance is of quick in the browser and angular actually there you go
[03:29:24]  quick is very similar in the browser performance to angular um this is not the best display of what quick is good at because quick is amazing like uncomparable on page load so and
[03:29:40]  it so this is an area that's very easy not very easy but it's it's it's quite possible to make more gains right get to preact range get to
[03:29:52]  svelte get to view you lit right inferno inferno okay and then get get to solid so there's there's definitely there's definitely you know this is old
[03:30:19]  news so to speak so there's there's definitely like there's a good reason not to have focused on this this is an eventuality to go this way um this is much
[03:30:30]  much much much harder to to get to but um this just kind of helps kind of on the balance where where things are at today um so yeah uh i i think that
[03:30:45] 's not what you focus on you focus on quick city also into beta so they have the full package people you know like taylor now if you found marco um which is
[03:30:58]  a great option but now there's astro with astro ssr there's quick you you saw how hard he had to try and find solutions that actually uh you
[03:31:10]  know fit the bill like actually did what he needed now there's plenty of options just in two years this is completely flipped so i think i think that's uh super super powerful
[03:31:24]  and um we'll have like better benchmarks in the future on hydration and ssr so right so like this will just have to do it but the thing is this is
[03:31:36]  this is a manual process because manual hasn't rewritten it well he hasn't rewritten it multiple times right because uh the the first this was to get to the beta stage
[03:31:47]  they still got time before 1.0 uh at the time that they wrote the original version that we i'm not showing the benchmarks for it was obviously even it was slower than
[03:31:58]  that so it like this is one of those things where incredible progress i think i think the first approach that i tried um was very much in line like was on the other
[03:32:08]  side of ember so to speak so this is this has been this is this is still you know it's beta it's a work in progress so yeah i mean i think
[03:32:18]  i think there's i think there's a lot of uh of incredible working on here we talked about um quick we talked about party town keep watching the space quick is now
[03:32:29]  ready to use in some real projects this is really exciting all right um yeah we announced the fellowship program um i i do want to talk about this a bit more because it
[03:32:44] 's really important um being able to use what we get from our open collective and actually support people in the community doing great work and solid um we're still actually looking for a
[03:32:55]  third position it's hopefully one that we can help address some of the stuff around docs because docs has been a challenge um it's it's just such a huge effort we couldn
[03:33:03] 't get enough people working on docs so i'm i'm i'm really excited about the potential here um i know it's for a lot of people it's not much
[03:33:14]  it's like i think we're offering like a thousand dollars a month um this this this that doesn't feel much for some people right in terms of how much hours or time
[03:33:25]  they put in but we we just want to be able to put in what we can afford to try and help push um the community forward and push uh push you know development
[03:33:37]  usage to solid board so um very very excited uh about that um oh yeah sorry also related to quick.dev they got their fireship video which is hot that made such a
[03:33:48]  huge difference for us um if you haven't check it out definitely very very very cool um yeah so i've already caught up to today i'm going to be doing some more
[03:33:59]  talks uh dylan's stream with the builder guys uh or steve yesterday was amazing do check it out um i dylan was on my stream last week or two weeks
[03:34:09]  ago so you probably saw some of it but this one actually really got into the thinking behind marco um kind of like a very more general purpose one so if you want to
[03:34:18]  kind of like get caught up where marco is at this is a good one to check out um okay a couple other cool things pete hunt you might remember my early
[03:34:31]  facebook team um released a project that does a video summarization which is actually really cool um you know how much time i spent making those thumbnails i'm ho or not thumbnails those
[03:34:44]  uh like markers on the video for people to go to this could like auto generate it i think this is really cool some people played with it and they're just amazed with
[03:34:51]  it i just wanted to give that a shout out um super stoked to see the change around uh around remix i know kent isn't with remix anymore but just super great to
[03:35:03]  see like this kind of handshake happening between like um alex the creator of trpc and the and uh kent you know sort of be like hey i'm
[03:35:12]  sorry i was rude i i've noticed in general a complete change in attitude the last month or so so um really really quite cool at least pub like publicly the remix guys have
[03:35:23]  always been great um i think just the public relation thing was strained for a bit and this just a lot of more goodwill i'm glad to see that extend out um
[03:35:33]  further you know we've been talking about goodwill between frameworks um on stream a lot so i'm i'm i'm pretty pretty happy to see that um okay okay let
[03:35:43] 's talk preact for a minute because this is this is really cool um i i met i don't know if i probably don't say his name problem properly is it like
[03:35:55]  yokim or i apologize i actually met him when i was in finland he was he actually tweeted he was like literally working on this while i was like well he's
[03:36:04]  in the conference room at the talk and we actually had a really good conversation he was like well when this context releases should we release them the computers and this so we actually talked
[03:36:13]  about i gave him some insights into uh some reactivity designs to kind of figure out like what the expected or best behavior was um and he came up with this he made a
[03:36:25]  huge huge improvement on uh pre-act signals performance uh just enormous um um in in private i i mean the twitter persona thing might have been much but i mean they've
[03:36:48]  they've always been pretty friendly in general um maybe just not on twitter um yeah yeah yeah kim yeah kim yeah so i'm i'm so i'm my apologies but essentially
[03:37:07]  we already talked about pre-act signals last week and i was like i was like best case they land here and uh but we i couldn't test it because there was a
[03:37:19]  memory leak and then i did test it after the memory leak and i was and it was okay but it was not what i'd call best case pre-act signals looked
[03:37:29]  like they were just like like similar to the state management where we did that whole thing we're talking about like how if you add state manage to react to get slower on average
[03:37:36]  and that was the same case i had with pre-act signals i kind of went in and i was like ah like i mean like let's see here solid and solid
[03:37:45]  uh it's funny uh it's funny because of how big the gap is here because of stuff but solid stores i mean stores have an impact over solid core right there's like
[03:37:55]  seven percent performance thing if in this hyper benchmark if you use proxies it's been smaller at times um actually hasn't been this large for a long time usually it's
[03:38:05]  about four or five percent but my point is you add some fancy state management it's going to take a small hit on performance so when i saw that i was like yeah
[03:38:16]  i guess that's fine although i was if you remember my last stream i was optimistic and i was like i bet you if pre-act had the optimal performance they could
[03:38:25]  get like maybe five percent on average faster than the non um the non thing they'll take the hit on creation but the updates will make as big of a thing but and sure
[03:38:36]  enough this improvement sorry not this one uh sorry this one this this pre-act signals improvement did it like like he has a great article where he goes into all the steps
[03:38:53]  that he took i probably should i only found it this morning probably should retweet it really incredible work but now this isn't the final one they're gonna they're gonna res
[03:39:03] ubmit it but i feel comfortable now because the like the the memory leak solved they've done this big performance boost i'm gonna at least show some preliminary things run on my
[03:39:12]  own computer not the official results just oh actually this is the wrong one haha this is the old one sorry this is this is the one that before uh before the performance gain
[03:39:24]  um give me a second uh let me see if i can find the latest one two seconds people it's funny someone someone saw a clip of the of the me setting up for
[03:39:36]  the conference and they were like you can tell that it's it's uh ryan's desktop because the the this it was like literally all js framework uh benchmark uh comparisons
[03:39:50]  oh damn it you know what i didn't get the screenshot of it we might have a local let's just run it right now like not run it but run the results um
[03:40:02]  let's see i think i think i have everything local so we should be able to do that okay local host 8080 framework preface okay yeah where am i looking here
[03:40:22]  oh right but i have the wrong version of preact uh just give me two seconds i have to i have to i have to i have to i have to do something
[03:40:32]  like a little bit funny here because i updated preact when i ran the tests so i can't use this let me go preact was i used 10.10.6
[03:40:43]  a preact when i ran the test no i also have 10.11 okay so it doesn't actually matter which one what one's actually installed here but when we go
[03:40:53]  in here and tell the package json i guess i probably have to tell the package lock as well that i want 10 11.0 a preact here and if i go
[03:41:05]  here not here sorry if i go here and go npm init to get the package json up to date i don't have to rerun the results i just need to
[03:41:15]  rerun the table generation thank you all for waiting for me tada yeah yeah what a different world this is let me remove some of the noise so let's get
[03:41:33]  let's get a few of these in let's get vanilla let's get react hooks solid preact preact signals um maybe like a a view or something okay okay just to
[03:41:51]  kind of level out here preact signals now on average let me blow that up and they're going to probably have their own custom thing they might find a few more optim
[03:42:01] izations i missed it's conceivably possible but preact signals now on average is faster than preact because of this thing it went from being like on the other side as
[03:42:09]  i mentioned like a showed in like a different run where it was um you know five percent slower to being what seven percent faster mostly because of the incredible performance gains here and here
[03:42:23]  over regular preact the memory usage is still fairly high which means that they can probably do some work here to optimize even a tiny bit more but key thing is partial updates
[03:42:32]  the things you get from fine grain they basically match solid on so that is impressive um select row uh is still taking a bit of a hit though it's a significant improvement over
[03:42:47]  preact regularly um this is like when you have a table and you select the rows um and then the rest of the stats do take a bit of a hit um over
[03:42:56]  regular preact because the higher memory usage harder to clear slower creation but it's it's these nominal like they're just they're smaller differences um all together and you can see
[03:43:06]  when you put react in the equation i mean i guess it is actually impact compared to react because react and preact are almost the same for creation so this is actually is
[03:43:17]  a bigger percentage but my point is the the the sheer benefit of having uh partial more efficient partial updates essentially um gets them kind of in the same boat um this looks like it
[03:43:29]  wasn't actually the best solid run because 109 is a little bit on the slow side but this just gives this this kind of just puts it in perspective um uh of like
[03:43:39]  roughly uh the kind of benefits you get from preact signals and a huge part of this came from from that uh in in the in the release they actually talk a bit
[03:43:50]  about different benchmarks um one of them is a cel x benchmark um i don't know if i i've shown this previously on our on our on our um on our bench when
[03:44:01]  my benchmark streams this is not my favorite benchmark because it basically certain frameworks react frameworks actually just crash before they even get to like 2000 or 2500 simply because this is just an
[03:44:14]  absurd amount on on this end um and so this is this is usually my regression benchmark that i use when i'm like i mean if you want to see what this benchmark looks
[03:44:26]  in actuality if i i have it it's funny the preact guys got it from maverick who got it from uh fabio from volby who i believe got
[03:44:34]  it from me like it's this long chain um the cel x benchmark is is basically this kind of crazy benchmark where you can choose how many layers of depth and you can
[03:44:46]  choose which framework you have and then essentially they do this thing where they build up this tree where each level has like four different kind of computations um the cel x's version
[03:44:57]  maybe i'll use solids and the knockouts like it's all kind of the same mob x computed solid sure we basically make a bunch of memos and then like feed
[03:45:07]  them through computers and different layers talk to different layers but essentially like you have 5 000 layers of like propagation like this is not anything you ever hit in a real app like i
[03:45:17] 'm actually surprised if real apps even get past 10 or 20. so i don't actually use this benchmark for anything except to make sure that like i haven't broken stuff in
[03:45:24]  a way that just like goes off the rails but you have to admit that for that use case which actually a lot of it comes to not executing computers that don't need
[03:45:33]  to run um they're they're getting um incredible performance gains here um so really really uh huge performance improvements there and then um another thing that was actually uh um i actually this
[03:45:51]  inspired me because i was like wow this is this is huge it's been a while since i've seen this kind of movement on the reactivity um uh uh side so
[03:46:00]  i have lots of benchmarks like endless benchmarks um one of the ones that that i end up using quite often uh i actually snuck into the solid js repo and people don't
[03:46:12]  even notice it um which is if you go packages solid bench this is actually the one that i use more than anything because what it does is it it it simulates really
[03:46:25]  shallow dependency graphs but it's it's talk it looks at fan out and fan in like seeing like if you have one signal that updates a thousand different computations or a thousand
[03:46:35]  updates into a single computation this kind of shallow depth thing is a thing that you find in ui and it and it really puts a focus on creation over update because that
[03:46:43] 's what's going to that's where you're going to get bottlenecked if we've seen anything from the js framework benchmark it's that yeah fine-grained updates are
[03:46:51]  fast but how if you look at the whole history of reactive frameworks you find most of them at the end here because not because they're not fast here like fine-grained
[03:47:01]  is fast it's because if they're slow at like everything else creation memory this is the problem you need to optimize for creation um generally so i so like i i use
[03:47:12]  a very different set of benchmarks when i'm testing uh reactive libraries stuff like selects like as i said i don't really care much about but i did add preact and
[03:47:21]  use signal from web reflection and it actually there's some impressive stuff going on here um well yeah that's the question and the answer to that is actually sort of but not
[03:47:35]  really so this is why i wanted to talk about this a bit it's all the second one in that table yes i believe solid is the second on that table in the select
[03:47:47] s benchmark if you look here um that yeah like we're very this is sjs on the top and i often talk about how sjs is super fast but solves like a
[03:47:56]  tiny bit slower you can see that very consistently solid is like a tiny bit slower than sjs in a sense we're not optimized for this benchmark because we eagerly evaluate
[03:48:08]  computers which doesn't really cost us much as something i want to look at in the future but doesn't really cost us much in actual ui rendering it's a reason why
[03:48:17]  solid's performance and stuff like like dom rendering benchmarks is so high because like like this optimization doesn't matter very much but yeah solid is right here sjs is here this
[03:48:29]  is mavericks i believe and i forget who's the last line here but but i did actually want to see i'm like okay you know what preact has a real
[03:48:43]  thing and part of the challenge i've had with solid is a lot of the benchmarking i do for reactivity is based on features that i want to support so right
[03:48:52]  now with solid with transitions and time slicing everything in um we this benchmark that i run in the repo has two categories has creation and it has updates and on the creation side
[03:49:06]  solid is a 150 on the updates of 175 and that averages out to about 325 which is not great um i have cairo in here which has a much nicer 270.
[03:49:19]  cairo doesn't support stuff that we need especially like hierarchical rendering pieces but like if you have two unrelated states and then they update you can have issues with the order
[03:49:30]  with like if statements like nesting rendering um most a lot of frameworks actually don't support so i'm gonna have to check preact and stuff but most frameworks that do react
[03:49:39] ivity actually don't have extra guards that we need mobx actually has it but most framework our most reactive libraries actually i i'd have to modify them i can't just use
[03:49:47]  them solid and a lot of solids de-optimization in the cell x benchmark actually comes from that um but but that's a different thing preact here also 270
[03:50:00]  different split cairo slower on creation a bit faster on update preact has a nice 135 135 split also pulling in 270 just put in there you signal however was a 556
[03:50:13]  um much heavier hit on both of these even compared to solid today but again because you signal focused on i think that's the last one on the table they focused on um
[03:50:24]  the lazy computation side and not about you know the part that i say is more important um i also got view in here just to put you in comparison this might be an old
[03:50:35]  earlier version of view reactivity i've got to remember when i pulled it but essentially it was about 1200 so just just throwing that out here just to kind of show you this
[03:50:45]  benchmark super hyper aggressive on the reactivity side but just to show you like 1200 for view um and it's sinuous a thousand right even with these really creation focused benchmarks
[03:50:59]  here where you can see this kind of difference js framework benchmark where were we here to do sinuous isn't they're using a different architecture which is why they're marked and
[03:51:09]  why it's faster than solid here so it's kind of like that's why they have better score in this one which is causing that but i just want to throw out
[03:51:16]  there because i remade solid with different reactive libraries knockout view mob x something that looks like a thousand in like these micro benchmarks ends up being like sometimes 0.1 or
[03:51:32]  something in or in in like 0.01 in like a dom rendering benchmark so i just to put on scale um which will be relevant in a second here because um i
[03:51:44]  also modified other libraries like sinuous also doesn't really work to solid spec like we couldn't use this approach um they can't do conditional notification of memos so i started
[03:51:56]  modding other libraries to do stuff that i want so like sjs mod is faster than solid um because they have a certain memory allocate uh optimization that i didn't want
[03:52:05]  to do because it took more code but um you look at their creation 93 we haven't seen anything like sub 120 here but sjs is incredible for creation um and their update
[03:52:18]  is still pretty good too so 250 i think this is a slow the fastest we've seen so far i also tried the mod sinuous to do what i wanted i got to
[03:52:25]  800 but it was still not good enough the creator mobx also made something called rval i like it because it's only 200 lines of code it's super small but
[03:52:33]  1500 so definitely like trade-offs i have all the implementations of repos and i use this to kind of compare different reactivity algorithms right so what i do like about
[03:52:45]  this benchmark is there's no cheating on laziness like literally it's like one to one two to one four to one like this is straight the pure cost of simple low-
[03:52:57] level propagation and creation costs but i also have experimental stuff and this will help you understand because solid has all that time slicing and trans stuff you know which actually gets tree shaken
[03:53:09]  out of the code but i can't do it in the repo because i'm not bundling this so this might be closer to solid's actual performance which is 300 essentially this
[03:53:19]  is the same algorithm i have in solid with all the transition stuff removed so um 143 and 158 so from this perspective pre-act signals is definitely faster than what
[03:53:32]  we use in solid today um uh by about 30 in this benchmark i also have one with a memory optimization the same one that sjs does but i as i mentioned i it
[03:53:46]  costs like 30 lines of code and i saw zero difference the js framework benchmark and that one gets us down to 230. see sjs is creation cost with with faster update
[03:53:58]  costs so if we want to with solid and i brought this up before we can add about 20 lines of code or 30 lines of code and we can we can now jump up
[03:54:08]  um past the pre-act numbers in this particular benchmark because this is just pure the stuff that matters more on the like the rendering side but like this the 70 or 30
[03:54:17]  difference or whatever didn't actually make a difference in the in like my dom updates so i didn't bother doing it i also tried to rewrite the mob x algorithm and that was
[03:54:27]  kind of cool um and i was able to get 282 which is really quite nice which is very um similar performance characteristics actually to the pre-act implementation um because it's
[03:54:37]  not a linked list but the way we traverse the dependency is kind of like a linked list so there's there's some similarities on that and then finally applying the sjs
[03:54:45]  optimization to the mob x algorithm um i i got 212 which is today we're my fastest and you get the creation of sjs and you get unparalleled update
[03:54:56]  performance um this is the fastest version of the reactive uh synchronous reactive thing i don't have mavericks in here and a couple others because like they're async like select
[03:55:05] s like i i just can't use them they they i tried to like force the the code to work and it just didn't really i don't think i'll be
[03:55:13]  showing the right stuff but um essentially this is my lead runner so you're you're like well if i've developed this approach why doesn't solid use the fastest approach and
[03:55:25]  the answer to that is that um essentially i can't time slice and you're like what time slicing who cares about time slicing i can do transitions i do concurrent running but i
[03:55:40]  can't time slice it very easily because it's a depth first propagation it's hard to interrupt a depth first propagation i'm as critical as i might sound about some of
[03:55:49]  the stuff reacts working on i'm not going to preclude my us from the possibility to do what they do so is it worth that performance here you know that the nice bump
[03:56:05]  that clearly would put you know solid pretty far ahead on the on some of the reactivity activity to give up the ability to do time slicing i i don't know so
[03:56:17]  i'm playing it safe so just this for people wondering about where we sit with stuff with solid it's mostly that um i am aware of faster techniques and we're working on
[03:56:27]  stuff for 2.0 like i did implement this like right after the 1.0 release i'm like oh i can make things faster but um there's certain features and things
[03:56:36]  that i want in the reactive system that are really important so i probably have very high requirements of what the reactive system could do and i'm willing to take small hits and
[03:56:45]  performance to ensure that it works as long as it means that's basically solid can still be the fastest like overall kind of thing you know so like yeah i mean let's let
[03:56:59] 's let's remove all the implementations which kind of break the rules there we are vanilla mikado which doesn't use a declarative pattern so it's it's questionable
[03:57:14]  and solid like and then blocked on which is a vdom just just neck and neck vdom non-vdom so don't criticize the vdom um yeah anyways tangent
[03:57:25]  obviously a little bit but as i said very very seriously taking the the look at how benchmarking has been uh evolving in the space um especially because reactivity is a hot topic
[03:57:39]  right now and like he's done amazing work on the pre-act signal stuff enough for it's been a very long time since i've actually gone okay i'm gonna
[03:57:50]  actually re-look at this and look at the performance characteristics and and see what's going on so really cool to see that um and as i already showed um if with the
[03:58:01]  local uh run of the uh of the of the benchmarks uh pre-act signals are generally a nice performance maybe a small one but a nice performance gain on top of pre-
[03:58:16] act and if people love the dx this is just win-win all around i actually saw a post where someone quoted something i'd said on stream where i said that uh
[03:58:25]  signals with pre-act or through react is a trojan horse um i think jason miller quoted that um as the new thing the trojan horse i i still love
[03:58:33]  that i love that people picked up on that and kind of use the trojan horse thing i i we're entering a new age of reactivity which is really cool okay
[03:58:43]  but we're still going um all right all right got a couple more things to do um and i hope you i hope everyone's still with me here um i did end up
[03:58:58]  uh it's funny sorry there is a mention of comments about rxjs um yeah yeah there solid at one point used observables and i'd probably have to dig through
[03:59:13]  my my notifications to find the the exact tweet um because it came up in a conversation about like where reactivity came from because everyone's like what's the etymology signals
[03:59:24]  from preact came from solid and solid got it from where and shared this uh observable uh thing that i had in the solid repo and um it's funny i i
[03:59:36]  i like my response uh more than anything it's just i was i was messing with uh uh how should i put it i was messing with um um observables because t
[03:59:51] c39 added was uh observables to the spec um essentially like not to the spec but they were working on it as a primitive thing kind of like web components and i was
[04:00:00]  like yes i'm gonna be closer to the platform if i use observables as my reactive core then one day when everything gets out of the platform web components observables you like
[04:00:12]  my framework will be the platform right um that's a really silly thought and rx primitives are terrible for this fine-grained thing don't get me wrong if
[04:00:22]  you look i actually with the help of uh uh the creator of uh um what was his what was his library called um uh uh damn it i can find it uh what is
[04:00:36]  it rx js js um i will find it here um based on rx js auto run someone basically made a fine-grained wrapper over rx js um uh
[04:00:50]  yes uh i i was actually on this live stream with him one of my first ones we're talking about reactivity he basically took rx js and added like the fine-
[04:00:59] grained model over it i built it into the into a solid like framework so you can use this with dom expressions and actually have rx js like behavior subjects triggering your
[04:01:12]  stuff and actually accessing it like solid style you need behavior subjects this is the only primitive in rx js that actually makes sense for our kind of rendering um i suggest getting
[04:01:34]  a little bit uh going a little bit further back on the stream um uh just because i did actually talk about quick on the performance the general answer is at what quick works on
[04:01:48]  which is like the hydration side the page low stuff you can't compare someone doing work to someone not doing work quick is just way faster there's just it's it's
[04:01:56]  like it's like comparing a divide by zero like it's there's there's no comparison um all i was pointing out is that um as a framework itself once you get away
[04:02:05]  from the this architectural piece um quick is in the zone of what i've categorized before as uh performance aware frameworks it's not like the fastest but it is it is
[04:02:16]  definitely improves upon the like popular it's popular one so generally speaking initial page load nothing well maybe marco six but pretty much nothing compares to quick um all these other frameworks are
[04:02:31]  varying degrees of performance after the fact like stuff like solid for example is arguably one of the faster approaches after the fact but it's it's not so cut and dry essentially
[04:02:44]  um so we'll just yeah leave it at that and more detailed explanation a little earlier stream yeah people mention me a lot on twitter about performance and reactivity stuff so like i
[04:03:02]  this stuff always is going across my my radar yeah yeah exactly so like what i was showing before here is like in a benchmark like this where you're testing browser stuff um
[04:03:17]  you know solids here quick is probably what did i say it was about the same as angular yeah about here but like that's only one one aspect of performance this is like
[04:03:31]  how expensive it is to render lots of items in the in the browser how expensive it is to update um sort move tables like all the kind of update partial updates updating only part
[04:03:42]  of the dom removing things from the dom uh like it you know clearing and injecting large parts of html it's it's all the update stuff but it's like
[04:03:51]  a different realm oh thank you the only problem is i literally can't copy and paste this out of stream yard which is brutal can i copy and paste it out of twitch
[04:04:03]  maybe maybe that's that's gonna be the the thing am i going to cause inception if i try and go to my own stream on twitch hopefully the audio is turned off
[04:04:14]  it's not okay thank you this is my secret now yeah yeah thank you for this um this is solid readme style docs from from back in the day where i explain actually
[04:04:32]  that observables are kind of garbage for what we're doing we want them to be hot and multicast and observables are um what are they called they're um they
[04:04:41] 're unicast and they're cold and for people who don't know the difference hot means that this like they when you create them they're working a cold means that you
[04:04:50]  actually have to subscribe for them to turn on but the unicast multicast multicast means they're like an event emitter like you change it and everyone gets notified so
[04:05:00]  you each all the subscriptions end up in a list and you do it unicast means that each subscription makes its own producer like it's actually responsible for it so pretend
[04:05:11]  if you had a dom event multicast would be like listen to this dom event run a for loop and call every single uh subscriber unicast would be make a dom event
[04:05:22]  per subscriber so we want hot and multicast and we don't want um cold unicast for this scenario so observables are just like not the right fit and it
[04:05:37] 's it's kind of funny because i was trying so hard to be like follow the platform here um and one of my observations here that i think is really kind of funny because
[04:05:48]  people talk about react hooks and stuff is let's go here streams operators blah blah blah advanced creating observables let me see pipe where was i i want to look for something signals
[04:06:01]  i had signals back here but my the problem is i i thought they were like not the main thing i talked about observables and computations and stuff but then okay i talked
[04:06:11]  about signals look at the signal api pass in the name read it calling dot value and then setting it by calling a function called dot next on the function like i really
[04:06:25]  was trying to get that read write segregation this is why like thank react hooks for this because if if like we might have ended up with something very similar to this i think i
[04:06:38]  would have gone to calling it as a function instead of a dot value but essentially it would have been it would have been like name call of the function name dot set or
[04:06:49]  something that i did not think of the tuples until i saw react hooks but um yeah this is this is amusing to me but yes this is not my acknowledgement that angular
[04:07:01]  was right all along and that rx is where in any way where i want to be with this stuff some people are kind of crediting it to me when i look at
[04:07:10]  rx and fine grain they're like different systems the fact that both used observables is pure coincidence and they almost are nothing alike um so i don't some people are going
[04:07:21]  oh angular is right about reactivity in the beginning this is this is very different reactivity um uh but yeah so sorry for the tangent but yeah that interesting stuff um from
[04:07:33]  my perspective at least when i get in these conversations but um we got we got more news people probably it's a view style but it wasn't even view style because i was
[04:07:44]  still calling the setter as a function i'm very much against using assignment uh mutability because i want to make it really clear right that this is something that updates the
[04:07:54]  you know and as i said react solved the problem for me indirectly even though they weren't trying to okay so finally some of you probably been waiting for this i actually have more
[04:08:04]  stuff to say but we'll see if we actually have time we'll see how stuff runs esno not enzo esno this is the new compiler from collida wave um
[04:08:18]  ben and if you don't know who ben is um you should because he does amazing work i've retweeted talked about his stuff on stream before you just might not
[04:08:32]  have realized it for example i wrote a post a little while ago about why efficient hydration in javascript frameworks is so challenging and i talk about different approaches everyone took i talk
[04:08:43]  about the fundamental problem the double data the double view code all this stuff and i talk about how we can do really minimal things like making static routes like you find in remix
[04:08:56]  or or you know next js or whatever um i talk about you know progressive lazy loading of stuff you know like on interaction or interview but one of the things is not many people
[04:09:09]  have tried because it's hard and almost impossible that you'd think to fully do it but to actually extract the data from the html to solve the double data problem
[04:09:19]  there's architectural ways like partial hydration which let you do the saving but what if this is always like the last stage optimization but ben a couple years ago was like no no no
[04:09:29]  let's let's do this first stage can i make it can i make a framework that extracts the data from the html so it doesn't have to serialize
[04:09:38]  that giant blob obviously there are limits to it and i've talked to ben about this often at lanes and he's like well look we have to serialize some stuff but
[04:09:48]  this is just like a big win where you can do it um right and i use an example here why this is hard but you know someone has to try this stuff or you
[04:09:57]  never get anywhere right so prism was that um that project can he's archived it now you can't do you can't really use it it's been almost two
[04:10:07]  years since he touched it but i saw this it caught my eye big time because when you have that level of serialization this is two years ago so 2020 same time you essentially
[04:10:25]  don't need to re-render on hydration what essentially what he's saying is he had a this is a resumable framework um we didn't have the term res
[04:10:32] umable back then but this puts two years ago means he was working at the on this exact same time we were working on resumability in marco quick was working on
[04:10:41]  resumability kind of all independently arriving at the exact same conclusion so when i saw something like this you better believe i paid attention and it didn't stop with prism
[04:10:55]  the prism compiler which by the way he acknowledges the worst name ever if you go on google right now and you're like oh yeah i'm gonna i'm gonna look
[04:11:02]  at prism js or something well prism js is something else okay let's try prism github um basically there there's so many projects including before you even get
[04:11:18]  to prisma that no one even could find this thing but um luckily for all you i have the link right here well i guess in my article um actually let's pop
[04:11:30]  that open one more time i'll post this stuff also in the show notes later but let's i'll post this right now if you want to see what's going on with
[04:11:40]  this thing because it it's kind of it's kind of cool so okay but he prism is cooler than just a hydration story i mean he at the time i think
[04:12:03]  he was 19 he's 21 now he was just kind of hacking away on this stuff and another example was he's like okay well i think like myself he's like well
[04:12:11]  if i can use the platform then i need less javascript code and framework specific code so he kind of got into web components for a bit too i mean we all do
[04:12:18]  for a while until we kind of realize where that goes wrong um so if you ever looked at this great comparison of all the ways to make web components i always like this one
[04:12:27]  because like they've spent a lot a lot of time um to actually try and get all of them in there really like there's stuff right so like uh like what i
[04:12:41]  what i want to show here about this one is they have they do they show you how the you can write the code they put the code examples in here they show tell you
[04:12:55]  about bundle size of one and bundle size of 30 and i actually love this because no one ever does the bundle size of 30 comparison right and then they also have performance benchmarks
[04:13:04]  first of all i want to talk to performance this is a fine grain scale it's very hard to figure out it looks like solid has a bit of variance but for the most
[04:13:13]  part salt and svelte for these this web component startup performance are basically identical okay um we keep on trading spots and we're like literally like here this new thing just came
[04:13:23]  out ready made i hadn't seen before these this is vanilla and this is like a a vanilla helper's library and then you got prism and you're just like what
[04:13:30]  how is how is something faster than vanilla html i don't know but prism is which is his compiler and if you go up here and talk about size prism
[04:13:40]  is bigger than h vanilla html and this like kind of helpers thing but and readymade is kind of new and it looks like it's kind of getting there but
[04:13:49]  prism is like here and like what's what's a reasonable uh what's another reasonable kind of uh let me see if i can blow this up what's another reasonable
[04:13:59]  framework that might be svelte svelte is pretty small double prisma and if you're getting because this again this is like a counter so this is where svel
[04:14:07] te does really good when you get larger things svelte scales differently let's see here solid's about 366 which isn't bad um let's see you preact
[04:14:17]  four kilobytes where are we haunted 486 um okay here we go lit framework 528 um uh there's a few stencil 540 so this is where you kind
[04:14:35]  of get like lit and stencil size around here um and some like stuff made with view or some react stuff kind of at the end of the list but essentially if you go through
[04:14:47]  this whole list on size like prisms half the size of svelte here when you go to 30 comp and it's the fastest and if you go to 30 components um
[04:14:57]  it's the story changed a little bit because suddenly some of this the stuff like solids here which is kind of middle of the pack on size and it's actually next to
[04:15:06]  lit because once you start scaling stuff's a little bit different and pre-act here but you know and stencils still a little bit larger but then you get on this side
[04:15:17]  and suddenly svelte is like way further on the other side because again um the component size scales worse and prism there is no library in this because so you're
[04:15:29]  wondering what prism is in this context prism is basically compiled to web components he actually looked at the code you wrote and essentially made optimal web components out of it's kind
[04:15:39]  of like picturing like svelte and then like having the output being web components like specifically optimized for web components so he compiled away the framework and he actually compiled it away
[04:15:50]  completely which is why this is so bad for scaling um at 23 kilobytes you see there is no there's no there's no actual framework code this is all end
[04:15:59]  user code it's larger kind of like if you look at svelte in this table you can see that too component code library code little little sliver so he created a
[04:16:10]  truly disappearing framework right svelte still library this guy not so much this obviously isn't to your benefit in this scenario when the components scale worse but it is interesting on
[04:16:22]  the single case that you know this kind of approach definitely makes like having one component smaller but anyways crazy work he's done how does that all tie into where we're what
[04:16:36] 's going on with esno right well as no is another one of his experimental compilers and the thing is some people are like a lot of the takeaways if you go
[04:16:52]  back on twitter and you look and people talk about quote tweets and takeaways i'm going to grab like other than people saying this is very cool which is good because it is really
[04:17:00]  cool what you'll notice is people talk about instead of porting the typescript type checker to a native language take this opportunity to build something better so people really focusing
[04:17:09]  on this typing thing uh let me see if i can find um amazing initiative imagine if typescript actually understood the values of your code with dependent types you get much more intelligent type
[04:17:19]  inference like there's an example in this article where it knows that four plus two is six so six can't be applied to type of five like they're not like this is
[04:17:29]  a next level of type script um and typing which is why people are really excited about this but that's not why i'm really excited about this i mean i am because
[04:17:39]  obviously this has incredible value here but essentially yeah what's it as knows type checkers built from scratch and to be fair others have tried to build typescript again from scratch and
[04:17:53]  it's a lot of work um so i'm interested in how that goes but essentially he's taking the typing further enough and obviously has probably with a trade-off of
[04:18:08]  having expectations on terms of guarantees on typing and you might be going why is he doing this he is still a framework author um i i'm very excited about this but you start
[04:18:17]  seeing he's talking about all this typescript stuff and then he's like sneaking in stuff he's like effects and he starts effects are part of the language interesting and then
[04:18:27]  talking about constant functions jsx awesome honestly this got me excited i i i love jsx but one of the hardest things about jsx is if you tell me you're like
[04:18:40]  this is a paragraph element typescript it is impossible to have this return and be a paragraph element you have to cast it it assumes it's jsx element we opened an issue
[04:18:49]  on typescript like years ago now being like can a div be a div and the answer to that is all it's complicated because react doesn't need it it's not
[04:18:59]  going to get prioritized but like solid would die for this and this is just oh yeah this is how it works this is super powerful because again it's because of his goals
[04:19:13]  here with the framework and the reason for this is this is his solution for eliminating the virtual atom if you actually read between the lines here he's making a fine-gra
[04:19:23] ined reactive system like solid right it's like he's explaining it but this is he's explaining fine-grained updates here right he's talking about voltio and other stuff
[04:19:40]  but essentially he's talking about fine-grained updates and being able to use the compiler and the type system to know what's reactive this is how you get away from
[04:19:52]  weird rules about destructuring or cross file thing because you know from the types like we've been focusing so much on syntax as javascript framework right we've been like
[04:20:04]  you know i wrote a whole article about reactive script a while back i don't know if you remember and there's view ref sugar and svelte's thing and let
[04:20:11] 's see if i can find it again i brought this up on last stream too where it's talking about the gist with rich harris svelte language maybe maybe i
[04:20:21]  can find it again truth about svelte right and i've been thinking about this a lot because i worked on marco which was a language which is a language here right
[04:20:30]  and he mentioned that the problem with these is that they take over the world right he's what where did he play you have to justify them he says and well i don
[04:20:40] 't agree completely on marco's case as we talked about in the last stream he goes these projects are all very cool but there's a reason they haven't hit mass adoption
[04:20:47]  they want to control the entire world you can't adopt imba or elm incrementally they need to be dedicated tooling just for the compiler blah blah blah and he basically
[04:20:54]  said that with svelte we just kept javascript and i think that this is a fair take because we that's kind of like what dan abramoff was suggesting
[04:21:14]  we're just not thinking big enough the the problem is if we try to extend the abilities of our templating language to be this all-encompassing thing we do
[04:21:30]  hit challenges right because now you're in a svelte file you're in svelte script we've left javascript even if we do clear the best we can
[04:21:39]  do is get clear boundaries and i saw it in marco and i was like wow marco is so amazing at how clear and workable this is but the truth of
[04:21:48]  the matter is we needed a different syntax to make that split and when i i wrote my reactivity article i mean i'll see if i can find it here there and i
[04:21:58]  we did a stream about this a little while ago on reactive script reactive uh actually let's see if reactive script i i was basically saying can we do marco without mar
[04:22:10] co syntax can we get close to javascript and ultimately even though i didn't put that in the end of this article i was just like showing all the different syntaxes
[04:22:18]  and approaches the problem ultimately boiled down to the fact that um i realized after writing this article that it was not not clear where the javascript began and the declarative zone
[04:22:30]  uh split and i i showed you what alexis was doing a few minutes ago on stream where he was doing this dollar sign thing to indicate the zones but that's
[04:22:39]  like the best we can do because um like these worlds don't collide very nicely if their syntax is the same because like like am i supposed to like a dollar sign means something
[04:22:52] 's different like it gets into this kind of sub language meta language that makes it really challenging so the question is what if right right that's something what if the type system
[04:23:11]  instead of syntax what if the type system knows something's reactive and that is incredibly powerful and let me explain why that's incredibly powerful because in a sense typing is syntax but
[04:23:24]  um the the the consideration here is that that snow is good yeah the the the the consideration here is working marco we created a cross file um um compiler that basically understood
[04:23:49]  what every marco file in your whole project did and then use that to construct the language to create the optimized output do you what other tools are cross compiler like that um your
[04:24:03]  bundler is another place where we do this cross thing but that happened a little too late in the chain the other place where where we do this cross file and analysis is
[04:24:13]  the type system like if you know something returns a reactive value in from the types and the type system a localized compiler can still probably make the optimizations we need to make that
[04:24:28] 's my theory at least i mean i'm sure dylan or someone in the in the audience probably argue with me a little bit about this or gets up but i mean
[04:24:36]  it's a big ask that you know in the past to ask someone to use a type system but what if you could come up with a language that was general purpose we keep
[04:24:45]  on talking about dsls and specific purpose language because templating has specific needs but what i saw here is uh typescript or something like typescript is general purpose enough
[04:24:59]  that you might not feel like you're leaving javascript but you would have that crossed file ability in a way that svelte only dreamed of this does control the whole
[04:25:16]  world like the the fact that svelte doesn't control the whole world is why when we were looking at this thing earlier and i was talking about isn't it funny
[04:25:28]  that swix is suggesting that um that we should you know where was it it was at the beginning here that like we should build the stuff that's not in svelte
[04:25:37]  language like those are the composable parts like isn't that funny well with this i don't think you need to choose like it's not svelte script it's like
[04:25:51]  typescript or like esno or whatever whatever type language it is you basically treat this like a generic type language and if it gave us the information we needed from a type
[04:26:04]  at a type spaces we could solve a lot of the issues that we face with modern reactivity in a maybe even a svelte-like way without any of the limitations
[04:26:14]  that svelte has today without introducing syntax maybe as alien to some people as marcos syntax that's my hunch i'm i was looking a a lot at reactive script
[04:26:25]  and all this stuff but the problem was i was thinking too small i was thinking of like how do i make a framework dsl what i should we should be thinking about is
[04:26:36]  actually maybe how to fix typescript because part of our pain here is typescript is so painful and secondly are we yet in a world where people would be willing to say
[04:26:47]  i mean we've seen this in the past only develop in typescript so to speak or whatever this thing is uh as an entry level um to the framework because it could interrupt
[04:26:58]  with javascript just fine the same way typescript does but the potential here from an analysis standpoint this this fills the missing gap everything that we've been doing has been
[04:27:09]  been pointing towards compilers right like like i i i in consistently are having this issue where i'm trying to figure this out and i mean this is very intentional this is
[04:27:27]  why this speaks to me because as i said ben is a framework author um he ends up runs on fine-grained react trivially directly on the dom like he
[04:27:37] 's describing basically solid js here um he tried to solve the same problem and instead of focusing on a template dsl he was like what if we could use the typed system as
[04:27:49]  i said this is so much more ambitious like this project might take months and stuff i reached out to ben immediately i'm like how can i help how can we get more
[04:27:57]  attention on this how can we make this the thing because you know in my head at some point i was like oh you know there'll be like a solid 3.0 or
[04:28:05]  something we'll kind of like look at reactive language or something at some point and see if we like it this seems like the better path i'm not like i know people like
[04:28:14]  sfcs and they like class components and the you know all these other stuff this this actually to me seems way more powerful and it goes beyond that have you seen the assembly
[04:28:27]  script project right like it's it's trying to take type script and convert it to wasm right and the thing is that's really hard to do with type script because j
[04:28:40] avascript is such a wonky library but if you had like a slightly sorry wonky language a bit which is fine i mean we all love it but if you if
[04:28:49]  you were willing to like go a little bit further with the types don't you think that something like this would be an easier wasm target so like i'm just seeing so
[04:28:59]  many pieces collide here that if someone could effectively do this do this properly then this is also the the almost more pro javascript approach depending on how familiar it felt and
[04:29:16]  how they use it of actually finding that escape hatch into back end into uh wasm only runtimes like at a certain point people go like why don't you use rost
[04:29:26]  or whatever but i feel like this aligns more with what we're doing already and i i said we need to look further but like he's he's already thinking about he
[04:29:41] 's talking about the framework stuff and the double data problem he's back to extracting stuff stefan prism and his framework might be really awesome that he's building here um
[04:29:53]  but this is this whole thing sounds like an incredible amount of work which is probably why he published this because he needs help um the amount of goal alignment here is incredible um
[04:30:07]  i i i i think i think this reversibility thing might be slightly overplayed i know i've talked about this before um we've we've we've we have some
[04:30:18]  reverse ability stuff you know talked about marco um and quick obviously we get a lot from the html but to me that's like a last stage um optimization we
[04:30:28]  can get so many architectural optimizations before we even get to that point so yeah i mean i'm just putting stuff out here i'm gonna talk to ben more about this obviously
[04:30:38]  but this the potential of what he's sitting on i'm not sure if you're fully following it but but like it seems incredible to me because even look at the reaction
[04:30:47]  here people want a better typescript and through that potentially we have a way to solve the issues we have with reactivity today in a way that's way more powerful than any
[04:31:02]  kind of single file component system reactive scripts felt script whatever approach this this this this this has a potential to keep that feeling of like just js in a way that as i
[04:31:14]  said goes beyond even what we've been seeing so far with svelte i'm i am i am floored um this this like this is like another one of those things
[04:31:26]  kind of like bun where you're like looking at the potential of the runtime this is about the potential of the language i would love to see all this stuff uh kind of
[04:31:35]  come together in a really powerful way yeah i mean i've talked about it before people like why don't you just use typescript to to make the compiler smarter and like do
[04:31:48]  i want to force people on typescript and i wonder how much that reservation comes from such simple stupid things like the fact that i can't make a div a div you
[04:31:57]  know four or five years later still can't make a div a div like like this is interesting to me whether everyone's ready to make this thing whether this is like too far
[04:32:14]  but i think that even from an interop story you could take something that was fine grained manually and just feed it through whatever the esno file system is and actually
[04:32:29]  have this interop like this seems like it has what we need from an interop standpoint i hope the jet i hope he keeps things generic like the way handling jsx like
[04:32:38]  it's cool that he's building a framework to it but i think that's the trap if you build the language to a specific framework you're going to be back in
[04:32:47]  where we are today what you keep those separate and i i think this initiative for what it enables for frameworks like i mean choose your battles where you want to do stuff i think
[04:33:06]  the tricky thing is ben has a natural like desire to be do stuff on the framework side but if he can get the language side going i mean i'm sure people would
[04:33:19]  be into it like so much i i i mean i've got you all in the stream i mean i bet you a whole bunch of you would use solid with this something like
[04:33:31]  this like i know he's showing the framework specific stuff but like this is this is um just to be able to leverage that that kind of stuff from a compilation level i
[04:33:44]  mean yeah i'm very excited um but as i said between stuff like this and bun which are attacking different pieces if we can only figure out how to get this all aligned together
[04:33:54]  somehow um i think it'd be amazing yeah that's my rant on uh on this um as i said i i think this is just tip of this of the iceberg i
[04:34:06]  think i think i think you know people are focusing on the typescript bit and i think that's cool and i think that's why this will succeed if if it gets created
[04:34:15]  people will just like immediately identify with like that portion of it but as i said this this this this goes beyond that when i think of applications to reactive frameworks i think of
[04:34:29]  applications to a web assembly um you know through something similar to assembly script i bet you there's a lot of people knocking on ben's door right now and being like hey how
[04:34:39]  can i get involved with this because this for me this was suddenly put razor focus on a lot of the thoughts i've been having for a while i i've been getting a
[04:34:49]  little pushback because you know i i i didn't want to go like a svelte language approach and stuff and it just never felt right this feels right whatever this
[04:34:59]  is it's not actually out yet but this this this is this is this is this is what we should be looking for how are we doing on time i got about 25 minutes
[04:35:14]  left and i have one last topic and i hope you all stick around for it because i think this topic is still actually quite important um and it's it's something that
[04:35:26] 's been on my mind more than even the technology and i think we all have a kind of responsibility to talk about it a bit um i just want to pull up a tweet
[04:35:35]  right now because um some people are talking about the content of of the streams here and you you are all in in the stream and if you really want to learn about framework
[04:35:45]  design follow ryan carniato this guy is a living university on the topic and then what is it university professor teaching me about the history and nitty gritty so i
[04:35:53] 've been getting a lot of comparisons i mean this is just two here but i it's the last few weeks i've been seeing it here um where i've been getting called
[04:36:02]  like the professor so to speak and maybe and maybe that's a earned enough title it could be my use of escaladraw um sorry theo i did it first but um
[04:36:14]  essentially you are the way we look into deep deep subjects here and talk about how they work but it's kind of brought something to my attention and we focus so much on this
[04:36:27]  channel and stream about performance about improving the web looking at every technology out there i took i just went on a spiel about how we need more of it more innovation more
[04:36:37]  frameworks more pushing of boundaries and um that's just the reality that i live in i'm so close to this stuff i love talking about it i love teaching it i love answering
[04:36:49]  your questions i love understanding you know what really goes into how we can build for the future the best the best uh you know websites and web applications but um the web is
[04:37:04]  a really wide and diverse place and people coming with all different experience levels and um you know different understanding of you know what you know what it means different backgrounds and i've started
[04:37:23]  to realize like one of the challenges i've had with solid is you know at the beginning you start as one person and i wrote all solid stocks initially you know we've
[04:37:31]  had people come in and update them improve them but the structure the narrative even a lot of the marketing stuff i was involved in because you start going how do you differentiate and you
[04:37:41] 're like well you have all the same features and you look the same um how like how do you find ways to you know almost like if you do marketing you go and
[04:37:52]  think there's like buzzwords and keywords a problem in in in draftscript frameworks is those buzzwords and those keywords um are are basically a lot of like technical jargon
[04:38:05]  like you know like because if you don't if you choose something more generic it sounds like it's memable like if i say no one can say blazingly fast
[04:38:14]  with a serious face anymore right like a marketing side you'd be like blazingly fast blah blah blah blah and you try you try and sell on some kind of value stuff
[04:38:24]  but solid has every right to call itself blazing fast uh next year some point i'll probably try and take it back because it's been five years of being the fastest
[04:38:34]  framework i i feel like at this point i can take blazingly fast back but but what i want to get at is that there's more like so you have memable
[04:38:49]  stuff on one side and then you have like technical stuff on the other side and nothing means anything so you're trying to find it out and ultimately what it's come down to
[04:39:00]  realization and stuff i knew this all along is you don't want the professor to write your docs right professor can teach stuff but you don't want the professor to be your
[04:39:10]  entry page or write the docs and it didn't become more clear to me until some incidents that happened this past week um because yeah i i'm gonna i'm gonna throw something
[04:39:24]  up here um we're gonna get audio switch to uh do this but i just i just want to kind of i i wasn't gonna bring this up at first because honestly um
[04:39:33]  there was almost no overlap with our community no one saw discord twitter or anything was talking about this topic and then i realized that was kind of a terrible thing it's sad like
[04:39:47]  on one hand i could be like oh that's good and you'll see when we talk about the comments and the the the sort of uh response to this video i i like
[04:39:56]  on one hand i was like oh i'm glad that's not our community but on the other hand it's it's a complete miss if there's a whole group of
[04:40:04]  javascript developers out there that don't um that don't uh see um what we're doing because maybe the professor's docs uh turned them away before they even could do
[04:40:21]  anything like you just completely missed the point of what brought them to web dev so um yeah i'm gonna just switch this around again so hopefully everyone can hear it and i
[04:40:32] 'm gonna switch back to screen sharing now she did delete the tweet but i she didn't delete the tick tick tock um so it's it's fine i i i feel
[04:40:43]  bad because i i like she got such bad feedback from it and it can like was hard and that's why they delete the tweet but the problem is the message is right
[04:40:54]  like she is a hundred percent on in terms of the problem i i wouldn't consider myself a tech bro which is maybe slightly offensive on that side but maybe i am maybe we
[04:41:05]  all are tech bros and we should stop and think about it so that's why i want to talk about here because on one side i can be like can we kind
[04:41:14]  of be like okay at least that wasn't us but on the other side like how different does this get i'm just gonna play this for a second you can see what i
[04:41:24]  say you can't speak to developers like that when they're trying to make an informed decision solid follows the same philosophy as react immediately assuming that you know what philosophy react follows
[04:41:39]  like i don't know what philosophy react follows so immediately you're alienating your audience who don't know react at this point but they might be interested in solidjs right and
[04:41:51]  then with unidirectional data flow like number one right now why would i like maybe this is just me why would i specifically pick a tool for specific unidire
[04:42:06] ctional data flow if you're going to get unidirectional data flow in there tell me why give me some context again read write segregation immutable interfaces like tell me why
[04:42:22]  this stuff is relevant it's however has a completely different implementation that forgoes using a virtual job you've just thrown virtual dom in there when you might not again alien
[04:42:33] ating people who don't know what virtual dom is this whole few sentences it's just like that's speaking temperate sometimes when i say stuff like this people might assume oh pam
[04:42:44] phlet solidjs i don't i'm just telling you that that paragraph is one of the worst inaccessible alienating temporary things you've ever read i have to
[04:42:55]  admit when i saw this i was like i was like a little bit like oh man because it's a challenging thing which we already talked about before because of like the the
[04:43:10]  differentiation story and i was like my first impression was like am am i uh like is is this a common theme am i like are we seeing being singled out and um
[04:43:23]  so should i write a new javascript framework each week around 300 glazing fast game changing full stack javascript frameworks are released into the developed ecosystem it promised the dis
[04:43:35] cerning developer radical new approaches life-affirming developer experiences zero config maximum config all bells no whistles in the dope in high falling in love over and over again should
[04:43:46]  you write a new javascript framework the answer to this question is far beyond the scope of this post instead i built a website this website takes you on an inspiring journey through
[04:43:56]  the essential concepts to consider when building your new javascript framework and gives you the confidence to finally make der best framework dot js and get in it start your journey here
[04:44:08]  should i write a new javascript framework dot lol so should i write a new javascript and yeah i mean i have to admit um sorry i just gotta fix my
[04:44:24]  audio again uh i have to admit this was the second thing i saw i was just like okay yeah we're coming from very different places that i'm probably more offended by
[04:44:38]  the second video than the first video i get people think it's funny but i am so past being funny after being like like years of like i could pull out the hacker news
[04:44:50]  stories and the reddits and this like the criticism like we we need this change we need this innovation and i understand it's a joke but like i was just like
[04:45:01]  okay i i need to stop and reflect and step back from this because like like there's clearly a good message somewhere here but it's like almost the antithesis of what
[04:45:14]  i stand for um and i understand that's such a serious way to take it right like we the problem is the every like this is you're stuck between tech bro i
[04:45:28]  guess is what we're gonna call the language and like blazingly fast right this this this this shows the full spectrum say what you mean in two sentences and i mean it
[04:45:47] 's this is probably why people hire marketing people like it is very challenging and the this this this sort of kind of got me like thinking okay there's got to be a
[04:46:02]  bigger picture point to kind of to consider here because like this this the while this tweet got like a it's funny the the this tick tock got 3 000 views this
[04:46:20]  one got 24 000 views so clearly this is a more acceptable message to people but it's the one that actually i have a harder time with this this this one i i completely
[04:46:30]  the tech bro thing i completely agree about the problem in our docs and the the sad thing is when i looked through the replies here they are some of them are whatever and
[04:46:42]  most of them are kind of like neither here nor there there's a lot of good stuff that i got where people are like solid is experimental software for react developers looking for better
[04:46:51]  performance okay um essentially while there's a lot of whatevers there was a lot of really ugly terrible stuff that was said to her for this perspective when looking at the
[04:47:10]  docs she is completely right and i think this is something that we sometimes have to be aware of when we're we're we're kind of airing our our kind of like
[04:47:23]  the way we talk about technology when we're out in public it's not just the docs this just got me reflecting on the whole thing because um i would be it'd
[04:47:32]  be well as i mentioned this like this tick tock group here and just from the stuff like i can tell this isn't largely our community um i i started picturing like
[04:47:45]  what if this was dropped in our discord like what if this was dropped in our community would we be that different because one of the one of the things is i always say
[04:47:54]  it's solid and our community generally i've we've kind of gathered a bunch of know-it-alls um there i've said it um uh this is just kind of
[04:48:08]  kind of goes with it people who care about benchmark performance we talk about these topics every week we we go into um a lot of learning pieces right and while like the intro
[04:48:22]  page of the docs is a really key place to kind of hook people and that's why it's important like there's articles there's resources to teach stuff there's been no
[04:48:33]  lack of desire to teach but it assumes a desire or need to learn and i think this is a tension between the web as an engineering platform and the web as a accessible
[04:48:44]  platform for everyone and it doesn't have to be attention as long as you figure out how to properly scope and communicate your ideas and the thing is i i took this know-
[04:48:56] it-all thing and i was like geez do like is our community a community full of like the well actually reply guys right and i i was debating that for a while
[04:49:08]  and then i realized i was probably not quite right um i actually went on twitter and i saw some people replying to some messages and i noticed them using the phrasing that
[04:49:21]  i always use and i was like oh that's funny that i i it even been imitated because i i don't well actually people i say i mean people probably laugh at
[04:49:30]  this i say to be fair that that that's like my common lead-in and there's a huge subtle difference between saying well actually and to be fair i i know
[04:49:42]  it's it's funny but it's one is correcting the person before you even said anything you just saying what you said is wrong and the other one is like well maybe there
[04:49:52] 's something else that should be added to the conversation now to be fair not everyone wants your opinion not everyone needs that something else but to come off right off the beginning and not
[04:50:01]  be correcting the person is already a huge win so we're not the well actually community we're the to be fair community from my perspective and i i think that's a
[04:50:13]  banner that i want to get behind because let's face it we're kind of cursed and blessed to have a lot of knowledgeable individuals associated with the thing a lot a lot of
[04:50:25]  communities and a lot of stuff starts with kind of grassroots you get beginners you get people learning the stuff and they and they find their way solid sort of found itself with a
[04:50:35]  community of experts before that happened we we have the framework authors people working on other frameworks people working on various libraries when we have these you know we have these discussions on discord people
[04:50:49]  go in and you know ask the question try and fill the gaps i'm like helping someone on on a support channel and being like hey you should do something where and someone
[04:50:57] 's like well um ryan did you did you also consider this like i i get interrupted um and you know people trying to help fill the gaps and you know on knowledge all
[04:51:09]  the time myself so i don't think much of it and i love it because that's how we innovate and that's how we do better but all of this has a
[04:51:18]  time and a place and the truth of the matter is we have to be very aware of how that affects other people um people who don't have that knowledge um this as i
[04:51:32]  said this sentiment here speaks to a lot of people i believe this is a real thing even if i am so close in my little zone that like it's difficult to picture
[04:51:46]  it as much because i'm like i'm like trying my best to be like you know the professor here this is how selective hydration works it's how partial hydration works it's
[04:51:53]  the difference you can progress and there's a certain base amount of knowledge that needs to happen to be part of that conversation and it's not out of reach of anyone i
[04:52:07]  strongly believe that we can we can do this and we can do better um it's our job to make stuff more accessible right and this is part of that docs initiative and the
[04:52:22]  fellowship that we were talking about um and like we take this we take this very very seriously i i wanted to bring this up because i don't want this to happen in
[04:52:36]  the future i think it's enough to actually we need to talk about it i i might not be respecting selma's wishes which she deleted the tweet and she got so much
[04:52:45]  like negative feedback because people like people are like in here going like it's because you don't know what a virtual dom is go ask your your manager or something and it's
[04:52:52]  like oh man like she she's been doing web dev for years at least a decade i don't know her full history but like like this is not this is not how
[04:53:07]  you you treat someone who's who says this stuff um and she's representing a group of people that as i said right now in sol's community is a complete miss we we
[04:53:24]  are missing these people right we have all the authors and the innovators and the people who get an argument in the discord and then go create each create their own css
[04:53:34]  and jss library to prove each other wrong like i love that but there's all types of developers right like and it starts with trying to find a way to make things
[04:53:52]  accessible so that people get in the door um david's mentioning that we have um representation um i i agree and is it reflective like look at the guests on my stream
[04:54:03]  i haven't actually had any female guests on the stream i i thought about that too i was like i i'm like interviewing framework authors um i get and are most framework authors
[04:54:16]  tech bros so to speak i mean i i have a hard time with this term because of the negative derogative this doesn't come from a one upmanship it
[04:54:23] 's not because the need to create javascript frameworks for like i i joined twitter two years ago because i i need like i needed to talk about stuff and it got at
[04:54:39]  that point it was not about a show-off thing i legitimately built solid by myself not expecting anyone to ever use it it it comes from a place so i i'm
[04:54:50]  i'm going to tend to try and assume the best from from people who are working on these projects spending the time uh giving you know selflessly to open source but someone pointed
[04:55:02]  out to me that open source perhaps is a privilege it's it's like it's it's a definition of privilege because you already can do your work during your like day job
[04:55:11]  so to speak and you found extra time to do that it's like philanthropy essentially like you're you're giving back to the community because you already have so much so yes
[04:55:21]  i the in a sense there's a certain type of entitlement there as much as it comes from a place you know a a place of you know pure desire for innovation
[04:55:39]  and making things better there's there's no separating that right right perhaps you bring people completely different spaces like sarah yeah and and that that's that that is a very good
[04:55:54]  point and it's kind of and it's probably reflective of the whole thing i i don't know i i know actually you know accessibility is probably a fine topic i could do
[04:56:04]  i i worked a lot with screen readers and i worked in education but like there's certain areas where i actually don't know um about the topics and it wasn't because
[04:56:13]  of a um as i say gender basis bias or whatever i just focus on topics that are very close to what i where i spend my time right um you know and and there
[04:56:24] 's this long stigma especially with like i mean also like a different sarah sarah drasner who did a lot of early stuff through css and stuff like where i
[04:56:34]  don't think it's it's it's it's interesting where how the industry and how career growth and how positions and all all this stuff kind of filters into where um
[04:56:48]  you know different i guess successful women dev from a public perspective like don't get me wrong i've worked with incredible uh women developers doing the most technical stuff um like uh
[04:57:02]  uh like just recently even at ebay like driving whole divisions in terms of like the engineering in terms of getting micro front ends at ebay and um i've worked in companies
[04:57:14]  with with almost 50 50 equal diversity and actually what's one of the coolest things about working at netlify um uh is just how diverse and how um uh like how
[04:57:26]  balanced from a diversity standpoint though though the whole company is but yeah this is this is something that i'm definitely reflecting on and um like it's it's it's i
[04:57:45]  think i want to bring it up on stream because i think it's important i actually think it's very important um even even if like like even if you go out set
[04:58:01]  out to do something that is like very uh like how to put it like i believe that we need more frameworks i need i believe that we need more innovation i believe that
[04:58:16]  um we need more choices and in a sense that puts an incredible burden on the new developer that's coming in to to try and learn stuff and it it takes people like so
[04:58:31]  like selma here to to actually help those people navigate this potential minefield of options and potential it's not the area where i focus on i'm always like on the
[04:58:43]  bleeding edge and sometimes when you're on the bleeding edge you cut a bunch of stuff and leave things bleeding um so this is all like part of the same system and that's
[04:58:54]  why we have to respect the whole system um to make this work i'm just looking at some of the comments here the kind of people who join solid are absolute nerds because
[04:59:06]  the right career and business move at the moment is to go with react yeah yeah i mean it's it's it's funny like it's kind of crazy how many people
[04:59:17]  might actually get value from that paragraph that she read like um it's funny like for me like obviously when i talk like if i went to a framework and they just gave me
[04:59:31]  that summary off the front and i was like okay i get it and i like that answered the whole thing for me i understand that's not everyone but like i talk about
[04:59:38]  it a lot i think the philosophy of frameworks is actually more important than the implementation because that gives you a bigger indicator where things going features are not it i i was actually working
[04:59:47]  uh talking to someone a bit about uh you know this approach of how to choose a framework for someone and i was like i i wonder if we should just myers-br
[04:59:54] iggs it if you're not familiar that's like the personality test because like essentially there is so many aspects of it that are not on the technical but more on like the
[05:00:06]  like how you feel about things i i like in like aesthetics and like values on like explicit versus implicit um your tolerance for tedious repetitive work and boiler plane like there's so many
[05:00:24]  pieces that i feel like you could probably come up with a crazy question matrix and then like go this is the framework for you and not even be talking about the technology um
[05:00:33]  so yes we've got we we got we got all the nerds here so to speak um because and and it's natural um but where this community of nerds goes from
[05:00:47]  here is up to us um yeah i'm just scrolling up there's so many comments in here yeah yeah i mean i know i know people identify with our my position people
[05:01:06]  would watch the stream because like yeah i mean we can always do better but we can do yeah i think docs let's get some good i think docs should be expressed how
[05:01:17]  developer wants to and just hyperlink words the phrases that have lots of content yeah and that's something we could do i've written now on almost every one of these topics so
[05:01:25]  to speak um but the problem is still the professor teaching them um this is why dan uh work in docs and doing he's actually moved a bit from docs to just content
[05:01:35]  and and side of things just because there's so much educational stuff that lives beyond the docs and he's doing an amazing job we really like realized his skill and his love is
[05:01:47]  more than that he likes just he loves teaching he loves getting out there with people so he's doing conference talks uh talking about solid he's doing um he's doing uh
[05:01:58]  educational videos and stuff so he hasn't even gotten the docs effort which is why we're like we're looking at reinforcing stuff on the doc side because there's so much teaching
[05:02:07]  to be had here and i think that's part of it like embracing both the fact that we are in a technical vocation that actually has prerequisite knowledge and that we have
[05:02:16]  to make it accessible to people but like still accepting that there is knowledge that needs to be to happen so um yeah this is an ongoing effort um let's see here yeah
[05:02:31]  so this is a this is a good point those experts are in discord answering simple questions from absolute beginners too yeah i know um i sometimes try and get in there and try
[05:02:49]  and help lead by example at times it's challenging i it's better to have an answer in the most part than having no answer but i sometimes worry that we confuse people um
[05:03:01]  it it comes so honestly biggest thing that i hope on the help channels is if someone picks up the question and they answer it in a way that makes sense and works just leave
[05:03:11]  it don't get in a debate with them in the learning channel about some subtlety of their answer because this is this is where we get caught off it's not
[05:03:18]  the person answer it's not the problem that they answer the question it's the problem that it it starts like a debate where people start debating over like which solution is the best
[05:03:28]  solution i understand some questions are loaded and a beginner doesn't understand how loaded the question is um but someone once told me answer with docs essentially if you can find any real
[05:03:40]  docs any article push i know this sounds bad because again this is kind of maybe this is not great to tell someone to go read rather than answer the question but um in the
[05:03:50]  case of our experts it might be better to give people the background knowledge in a way that they can consume it rather than get technical on them like obviously there's balance here
[05:04:03]  but i just want to kind of put that out there uh let's see here yeah i mean there's a lot of great comments here i'm sure there's some correlation
[05:04:27]  between accessibility to minorities yeah yeah i mean we put the new docs effort in place like almost a year ago but you have to like it's just in such incredible effort and
[05:04:44]  as i mentioned dan starts writing stuff and the next thing you know like stuff comes up and he's making a video for it like and then he's talking at a conference about
[05:04:51]  like we need we need we need to keep focused and salt start actually needs docs desperately right now um and like it's hard to keep up with the innovation so to speak
[05:05:02]  um and the problem is if no one's steps up or stuff i mean i'm gonna try my best but the professor will be writing docs again um as i said i try
[05:05:13]  my best as you guys know in the stream to teach and stuff um and obviously the the choice of language there in the front page was a little bit intentional because it's
[05:05:25]  like the fourth paragraph so like you say a bunch of kind of generic stuff and then we figured like for to a certain degree at the time for the audience that was a really
[05:05:34]  cut and dry way of just like saying this is why we're like react but not react because otherwise i mean are you ready to read three four pages on that like for those
[05:05:44]  who know that makes all the difference but the problem is it's for those who know honestly it's such a hard place because react differentiation i can't explain in two sentences
[05:05:55]  i don't think we tried we have a growth channel on discord i don't know if people have seen it um it's probably a private group and i shouldn't shouldn't
[05:06:02]  be sharing anything but i i'm like not making this stuff up like we literally have a channel on discord for growth and it's literally like been going on for months where
[05:06:17]  people like are coming up with different ways the progressive javascript approach like trying to figure out how to position solid in a way that is universal and we have documents with like
[05:06:29]  11 different approaches and we we analyze the marketing stuff around here right like for example from svelte write less code no virtual dom right like they mentioned virtual dom um so
[05:06:42]  like there's there's a they do a good job of explaining why that matters although they don't actually explain what a virtual dom is but i mean maybe that's the balance
[05:06:50]  um like this is this is this is a tricky area and i'm sure airing lawn dirty it's not even dirty laundry i mean all these discussions you know uniqueness components
[05:07:06]  like this this this is like i can scroll this for forever like this is probably the hardest challenge that we've had with solid is actually figuring out how to position it because people
[05:07:19]  clearly see value otherwise we weren't wouldn't be where we are but actually to explain that value right now the best we've come with requires teaching someone something like we've got
[05:07:31]  that we've got that we've got the pitch the teaching pitch down to 10 minutes but that's still 10 minutes too long so it's it's ongoing right i i
[05:07:46] 'm talking about big effort i'm not even talking about the translation internationalization effort i think solid's current docs that i wrote are now translated into 17 languages like this is
[05:08:00]  just and they're not even that complicated i i can only picture how it would be if we like to give the docs that we need and then the translation like this is this
[05:08:13]  is like a hundred times the effort of maintaining the framework i kid you not i know people kind of been talking about this you know like it took me six weeks or six
[05:08:25]  to eight weeks to write the original docs like the amount of work people put in since then this is exponential people people go to the flame graph and solid and they're like oh
[05:08:35]  of mostly a single contributor and i'm like go to the doc site if you want to understand how people contribute go or the website or the repl or somewhere else because yeah
[05:08:44]  the core library i i i would like to get more people working on the reactivity with me but i i'm not sweating it too much because i can i can manage that
[05:08:53]  but the rest of everything to where we get today that took incredible thing i might have written those original docs but the effort for the translations the website uh way more people working on
[05:09:07]  that to actually make solid accessible than it takes for me to write a few hundred lines of javascript to make something fast now you're a bro yeah this is what
[05:09:17]  happens you watch my stream and you become a tech bro we'll make everyone tech bros no i don't know it has a negative comment connotation and my understanding of what
[05:09:30]  like the tech bro connotation is i don't think that's our community and i i i didn't i don't like that association but i mean how am i i
[05:09:39]  mean read the doc i mean it's fair criticism you come in you see all this techno babble i i could argue in our case it's actually really valid because this is
[05:09:49]  how we differentiate and it's on this nuance which i mean you can decide what that says about the framework i i i the appeal to solid is universal differentiating it is harder
[05:10:03]  in this space so we can do better it's absolutely worth a personality test yeah let's get those myers briggs going if anyone cares i am an intj generally sometimes
[05:10:15]  an infj occasionally on the borderline but if you're interesting interested intj that's generally where i sit i wonder how many of you are are the same yeah
[05:10:42]  i i think i think the stuff we were talking with taylor the bar has rises that the bar has risen we the the web is so miraculously powerful that it's it
[05:11:00] 's requirements shift with us like it's it's the ever evolving software it's the thing that never ends innovation here ends and i'm sorry about the javascript fatigue
[05:11:13]  but i think people are starting to get it now i mean a couple years ago jokes like the framework joke were really uh popular you know and um now you know i think
[05:11:25]  i have a dev my favorite my favorite version of that joke um the framework every week joke now is this one because i feel like we've gone from what something like what someone
[05:11:38] 's videos got was saying to this one this is my favorite version from madison here everything okay babe you barely touched the newest javascript framework it's not it's not
[05:11:45]  a question of if there should be another javascript framework definitely it should be like should you write a javascript framework yes unequivocally completely you should
[05:11:55]  write a javascript framework but it still weighs on people right there is a there is a javascript fatigue thing we're past it in a sense because like this
[05:12:09]  is a reality we live in the the problem was if we if we like hide our heads in the sand and and go no there's no new javascript framework no new
[05:12:22]  innovation stuff all stays the same then when the new thing comes we get freaking blindsided it's like what this is a revolution and then we go like chase over that to
[05:12:32]  find out that it isn't the only way to actually combat javascript fatigue is education and knowledge which is terrible because that means everyone has to do more work but like like
[05:12:42]  a boat flooding with water you have to like bail it out you can't just like pretend like you know that's like the meme with the house on fire or whatever and i
[05:12:52] 'm not saying it's even a bad fire it's just like like you can't pretend that this can't happen this is not happening indefinitely for your choice of application
[05:13:00]  you can make a sound judgment without getting decision paralysis because any choice you make is going to be relatively reasonable for most things go with what you're familiar with go with with what
[05:13:10]  makes sense to you i i've talked about this a lot i think there's a few places where performance is really critical like e-commerce where maybe you shouldn't use react
[05:13:19]  at a certain scale or something but that isn't the norm usually just use something make the website get the web out there so it's okay that there's choices because you
[05:13:31]  like just go with the popular one or flip a coin or whatever like this innovation has to happen right there was a time period where this stuff was really volatile and then react
[05:13:47]  solidified things and people i think were generally pretty happy with how react solidified things um which is why the conversation went down and we started bundling things up again and got
[05:13:58]  our next js's of the world but how long do you want to be on this thing like maybe react is the end-all be-all i remember kent c dod
[05:14:05] d saying that he wouldn't have any reason to move off react until uh ai started writing our programs or something and okay that's fine position for him to take but for
[05:14:16]  the ais to get smart enough to do it they have to figure out smarter ways to do stuff like for we need to teach the ais we need to write better compilers
[05:14:24]  we need to write better run times someone's going to do it you don't have to use it someone's going to do it that person is me that's person is
[05:14:32]  taylor that's person is a number of people probably in this chat because that's what we believe in and that's what we do let's see yeah but this is an
[05:14:53]  interesting thing when we talked about even pushing our help support channel into like stack overflow uh it's like a way of doing it but like who better i mean in one sense
[05:15:02]  we need to do better about how we answer questions and help people but on the other hand who better to answer questions to a sense than experts this is where the content comes down
[05:15:13]  we we have a trickle down effect we have some of the greatest minds are working around solid and i am so happy to have the like these people i like in our
[05:15:26]  discord working telling me about how they're doing things better in their own framework awesome like that's the kind of thinking i want um we all need to do better but on the
[05:15:40]  other hand like if not for those people and that trickle down of knowledge like how do we like we have the community we have and i'm proud of the community we
[05:15:53]  have um because for the most part they they aren't jerks they might be know-it-alls but they're not jerks and they're not zealots they
[05:16:01]  they don't go proclaim everything in my name or something like every every conversation is a discussion everything's a trade-off but we need to find a path forward where where
[05:16:18]  we can where we can you know widen things bring more people in and i think it starts with language and communication at the you know the the homepage level or the docs level
[05:16:30]  then more people find their way in and then more people find their way in and it just self-propagates yeah this this is a very relatable message i might be
[05:16:43]  like so far removed is like you know from this that that it's harder for me to relate but i still deal you know answer questions with beginners every day like i'm
[05:16:56]  still like i understand why it's a lot you do you you open the door and it seems like so much it's like this wall and you're just like how am i
[05:17:05]  ever going to get there and then the answer is just build something but that's still intimidating you don't know what questions to even ask like what what are the questions that i
[05:17:15]  ask to figure out what i need to learn to to ask better questions this is a very relatable position it's but you have to understand part of this comes with this thing
[05:17:29]  is i built solid as already kind of a senior web developer solving problems i cared about as it turns out there's more general appeal to it than i originally realized and that's
[05:17:42]  why we're here but it did start as an engineering project written by an engineer you know to do engineering yeah i mean tech bro feels because there's bad there's negative
[05:18:00]  computation another one that comes up a lot is gatekeeping i i've been called a gatekeeper once before it hasn't happened in a very long time um because i made
[05:18:10]  a comment i was like most svelte devs don't realize that what they're using is an actual javascript and i i think that discrepancy is
[05:18:19]  actually really potentially long-term harmful because like it's you know like there should be some kind of base knowledge there and they're like well that's gatekeeping and i
[05:18:32] 'm like well no it's it's tools of the trade but like there's there's an argument to be made there like there's such a thing as unintentional gatekeeping
[05:18:44]  um i i find this very hard though as i said is in a technical field because like there is knowledge these terms aren't just jargon for the sake of jargon like
[05:18:56]  um i wrote an article let's see if i can find it here probably um i wrote an article earlier um this year called patterns for building javascript websites in 2022
[05:19:13]  and this is this article is freaking full of jargon it is covered with jargon i try and explain everything link articles do a whole bunch of stuff like resources resources resources
[05:19:27]  uh put them in a comparative table but every part of this is jargon jargon jargon and it's because that is if that is the best way to condense the
[05:19:40]  knowledge and the learning put here look again references reading materials like there is so much knowledge in this space i even have at the end of this i have a table of ac
[05:19:51] ro of explaining what every acronym means because there are way too many three letter acronyms in here um so like like there's two sides of this because this article is
[05:20:11]  probably still trying my best it's probably too this is not for beginners it's there's too much here but anyone just a little bit step up this this is the open
[05:20:23]  this is the this is how you get into under getting to that next level and yeah i mean i if i if i didn't have the acronyms and i like had
[05:20:33]  to explain every topic this would be like 20 30 40 50 articles like there's such a wealth of a web dev and this is all about being able to make that decisions ultimately
[05:20:44]  this came down to how can i find what did i use i used holotypes i think it's at the beginning of the article maybe like what characteristics do do different types
[05:20:56]  of sites want and how does that play in because i was going to use frameworks the problem is by the time i post this about frameworks it's out of date someone's gonna
[05:21:05]  be like oh my framework now does blank all the ssg frameworks now do ssr so this goes like am i making a blog site am i making a content site
[05:21:17]  a storefront but my point is to try and condense this amount of information in one article is basically insane um but sometimes we need to step out at a bird's eye
[05:21:28]  view to understand how these decisions are made and as i mentioned there is a technical trade here there are there is industry terminology it's not jargon for the sake of jar
[05:21:42] gon um so this is this is a challenging balance because this is not how you bring the beginner in you show them that the web is for everyone i learned javascript programming
[05:21:53]  by viewing the source code that's that's the kind of web that we all kind of aspire for but you know software development you know is an engineering trade it is it
[05:22:08]  might be the thing that makes it so accessible and so powerful is the fact that you can take any idea and realize it and anyone can take any idea and realize it that is
[05:22:16]  incredibly powerful you can just have an idea and make it real it's harder to do that with other types of engineering but it is still engineering so this yeah this is this
[05:22:30]  is a very challenging range because we have everybody all within this one space i mean it's it's like anything you know it's it's the world right it's a reflection
[05:22:42]  of our world so um all different skill levels all different experiences and backgrounds um i would love to see this explained it like on five solid stream um uh dan has done some
[05:23:01]  stuff but like yeah i mean this is what i want to see this is the hardest thing if you ever i saw this study once with uh people having different levels like they like
[05:23:12]  categorized levels of mastering a subject to one to five and they like showed that putting the level one with the level five was not really helpful because by the time like level one
[05:23:21]  is like here are rules you must follow level five everything is like intuitive you know and somewhere in the middle you you know you go from rules to um guidelines to best practices
[05:23:34]  eventually until it it's a feeling it's like level five because there nothing is so cut and dry but it should be so kind of dry for someone learning so i am the
[05:23:44]  worst person to do the explain it like a five i've been doing reactive programming for 12 years um in javascript frameworks i you know this is it was funny thing
[05:23:54]  in that uh dependency array uh discussion there when i was talking about explicit dependencies and stuff and i was like yeah i was doing that for a few years before i started solid and
[05:24:02]  it occurred to me most people have only been doing dependency arrays and react for a few years because hooks have only been around for four years um i i you know like that
[05:24:12]  that was me like i don't know seven eight years ago so you know sometimes you just find yourself in a lucky spot where um you you you just have some weird experience that
[05:24:23]  other people don't have but it also means that i am no longer the best person to to do this um um which is why it's so such a fresh air when
[05:24:34]  you have like dan doing um intro solid stuff to complement you know the professor over here yeah yeah our yeah our experts are helping not correcting i'm that's what that's my
[05:24:47]  hope and that's what i've witnessed it's still intimidating for people i we've had people definitely um come into our community and be like i don't know if this is
[05:24:57]  for me and it makes me sad every time i i see that because like i don't see mal intent i just see like people who are really passionate about this stuff and
[05:25:11]  really trying to do the best to help and they help me immensely so i yeah who's leading the solid start effort um myself and nakil um we're bringing more people on
[05:25:23]  but this is the thing as i mentioned before if if we don't do it then like no this is the thing with open source like it's all volunteers and community we
[05:25:32]  will rally people we'll get work and stuff but someone has to lead the effort and um like if people aren't available or whatever and stuff still has to go down you end
[05:25:45]  up doing a lot of stuff yourself and that's just the reality of it um so you know but people come on in the second pass but the challenge really is we need to
[05:25:56]  have the right offset from the beginning this is why we desperately need help with docs because as i said we'll try to do our best yes i actually like this i like
[05:26:10]  this framing i think the takeaway is that not idealize one way of being a developer like we shouldn't think of being a framework author as an ideal for all developers needs
[05:26:23]  to aspire to yes um and this came up when i was in that uh with the students when i was doing that uh um that uh kind of fireside chat um at the
[05:26:32]  university because they were asking like what developer do you look up to and i realized early on i looked up to one of my bosses uh quite a bit and he ended up
[05:26:44]  kind of burning out a bit and like but he was a framework author that overworked and was just like he was a 10x developer and i was like oh i could
[05:26:53]  be like that someday and then i realized like maybe i didn't want to be like that exactly but then afterwards i replaced him with other framework authors ones with different qualities ones that
[05:27:04]  were great at communicating um ones that were incredible um uh like just really really smart incredible problem solvers but that's just because it it's what i do and what influences
[05:27:22]  inspires me there's so many amazing people doing amazing things um in the web that aren't like that and like easily deserve um you know same kind of inspiration and like like
[05:27:38]  they they are inspirations to people um so yes i i i i love that this this this is a very good takeaway um dan has a stream um i could probably find
[05:27:54]  that um he also if you ever go on the solid uh youtube channel he's he those videos are pretty much all him all the solid stuff he does like shorts for twitter too
[05:28:04]  sometimes but like um he's got a stream called breaking down the web on twitch um that he usually he he i turn around do you stream on sundays or tuesday
[05:28:18] s it's always a time that i never get to actually watch it which is the unfortunate part um but um yeah yeah i i think this important topic i know the viewership
[05:28:29]  is going down at this point but i i think this is very important yeah but sometimes it's not even the community edit it because you have to structure how should i put it
[05:28:40]  you have to structure the docs in a smart way otherwise it lends to being a point where you need to summarize using um technical language where you're like you're like
[05:28:49]  it let because otherwise that section would be too long like i i think you you have to be very smart right from an organizational standpoint about how you approach the subjects um i've
[05:29:00]  had several conversations about this with dan and he like because we like for example solid we're like do you start with the jsx you start with the reactivity that completely changes
[05:29:07]  the path i start with reactivity which is kind of the the technical approach and that works really well for us because that instantly people goes okay solid's different you start with
[05:29:18]  the jsx it's not very impressive you're like oh it's react they don't see the advantages but for a big true beginner that is an easier place to go they
[05:29:27] 're like okay this is how i render some html that's where your mind is starting from you you you you don't care if it's the same or different
[05:29:34]  from react so like that this is a structural thing as much yeah perfect yeah let's put that up on the stream jutanium that says his handle on github on
[05:29:46]  twitter or twitch perfect thank you fuzzy yeah yeah yeah yeah for that we could definitely do that um to be fair that i think that copy is from our home page where is
[05:30:04]  it is it just the top level like do do view docs oh that's not great that didn't that didn't go to the right place why i'm in the api
[05:30:21]  reference that should have taken us to the get started section maybe learn solid that should take that should take us to learn solid i'm pretty sure because we actually like there is
[05:30:36]  a link right there and we talk about our philosophies and stuff again this stuff is probably esoteric for most people um but it's like what i believe and what we
[05:30:44]  believe simple is better than easy i talk about read write segregation but i mean this can be definitely elaborated on probably not right away because it's technical right but they didn
[05:30:59] 't bring it up we brought up the v-dom because we need to bring out a differentiator yeah i mean as i said we'll take let's take blazingly
[05:31:11]  fast back yeah yeah like yeah this is the you can't go that way like there is a balance here and even when you try and generalize like if you look at
[05:31:27]  our growth channel we said stuff like this the thing is like what like what does that mean it's it's tricky right you have to accept that there's a certain amount
[05:31:42]  of marketease that you need i mean here's the problem dave kind of comes in with some really good ideas and then he's like and then i'm like yeah
[05:31:49]  i don't know if i'm comfortable with that i i like i'm the i'm i'm part of the reason if you've ever looked at our like simple performance reactive
[05:32:00]  thing we used to have like something really really simple to like uh something like this whole something for building user interfaces and stuff i just i didn't want to i didn't
[05:32:11]  want to push things too far i just wanted to like keep the message simple because um like it's it's too much yeah it's very challenging yeah i mean that's
[05:32:31]  the thing that's why like even as a framework author like good ideas will collate people and they'll grow and if not then the community never grows and then someone else learns
[05:32:40]  something from that framework and it just keeps on you know cannibalizing itself and just kind of like eventually we get some like super voltron like mega robot of all the built
[05:32:52]  from sorry i've got like terrible imagery here i'm like combining zombies and and like uh anime robots um forget that um but you know you know what i mean this all
[05:33:04]  kind of builds together to be the foundation of the next thing and if something doesn't catches well then maybe the next thing will brah it's not in my lingo
[05:33:15]  i i i was i was the kind of kid who uh i mean like i think it's true a lot of nerdy kids like like i i didn't really watch sports
[05:33:23]  or i wasn't really into cars as a kid um i i felt like the strong masculine identity was really awkward it made me uncomfortable it's funny because my dad isn't like
[05:33:34]  that at all like he wasn't he's not he's not like the man's man either it just i never i never felt comfortable with it and bro culture in general um
[05:33:46]  college like that just not me um i mean it's years out now but it's yeah yeah yeah yeah yeah i mean i feel like that stuff has changed over time right
[05:34:07]  like i've i've found myself more of an extrovert perhaps but maybe that's not how it is and maybe it's just yeah i don't know yes i wonder
[05:34:16]  how much of those things fit into like your self-reflection of your own thinking and as you grow because to accomplish things you other people are involved you generally grow to
[05:34:27]  having to deal or to i say deal this is like the hint that i'm still an introvert because when i talk about working with other people i said deal with but i
[05:34:35]  mean you have to like expand and the thing is you can be very social and be an introvert it just means that it's like uh it's a it's kind of
[05:34:45]  like the someone was talking to me about this i forget what it was but they're saying that being an extrovert like you talking to others fills you up and being
[05:34:53]  an introvert is like something you you spend um yeah actually i think it was jen from uh react finland who was we were talking about this um so yeah anyway yep
[05:35:05]  yeah i mean it's easy to do because it's like this in any professional or technical field or even community field i played magic the gathering um as some you know and
[05:35:20]  we had our own language completely right yeah funny things like i mean some of them are obvious from game mechanics like mana screw probably fairly easy to say but there's there's terms
[05:35:31]  for different types of plays and like just things like some things we borrowed from other games like uh cantrip and and whatnot but there's a whole language behind any kind of
[05:35:44]  community even if you ignore the fact that there is like a technical reason for it it's because specific language makes it easier to communicate certain ideas you can carry nuance without like going
[05:35:56]  this blood this this is this like so instead of every time having to say something but like add a tense 10 word sentence to clarify you can just go blank and people like
[05:36:07]  who know or just like oh yeah so yeah it's interesting yeah so the question is is in my position to tell people that problems are harder than they think it is i kind
[05:36:19]  of hope they find it on themselves um i don't need people to come and use solid until like when people are ready they'll come and use solid but that that doesn't
[05:36:27]  change the fact that we like being ready could be my first framework and i i heard solid has a really good mentality towards how to build web apps so um i want to
[05:36:38]  i want to enforce that too because i think we do have a we might not be the easiest framework like even if we do a good job on docs there is a bit of
[05:36:47]  a learning curve but i think we have the one of the shortest paths to mastery and i think there's a simplicity angle there that's not about being easy but being simple
[05:36:56]  and i think that's could be really valuable if not to the absolute beginner but to the you know intermediate or you know what's the term novice yeah imagine if people said
[05:37:08]  don't write new songs i haven't listened to all the new songs yet i guess that aligns close to where my thinking is but you know it's why bun and
[05:37:21]  enzo came out of nowhere yeah yeah i i'm definitely catching up on chat now from 20 minutes ago which is why um these are a lot of old comments and i'm
[05:37:30]  sorry about this but yes we're talking about the head in the sand kind of thing i've been following jared for and ben for a couple years now you can tell when
[05:37:41]  people are are when you come across someone who's who's doing something a little special um and if if you follow me i'll point those people out to you as soon
[05:37:51]  as i can if you've been following me a while you know that i already have been promoting and talk about ben's work um so like yeah um if you if that's
[05:37:59]  what you're into you're in the right place yeah i'm just reading through there's just so much so many great comments here yeah it is often harder to find the
[05:38:18]  the intermediate or advanced concept stuff you can find the beginner stuff you know people talk about regurgitating the docs and stuff there is a ton out there for popular solutions you just
[05:38:30]  go out there and go like react there's like endless supply we also need more that in solid but that's not going to happen right away um not until people can make
[05:38:40]  their living off of it and stuff but it's starting to happen we're finding people coming up with new and simpler ways to describe what we're doing i am so stoked because
[05:38:50]  it'll all happen in time but we you know the the core community is is is a more advanced one intermediate to advanced one and and we just it grew organically that
[05:39:01]  way and we're we gotta we gotta we're gonna work with what we have because on the one side this makes certain parts of growth difficult but this is amazing other communities sometimes
[05:39:13]  dream of this they want to be able to have those advanced users have the people who understand the thing because otherwise there's no one else to answer the question except for the framework
[05:39:21]  author you go if you go and ask an advanced question in the solid discord there are dozens of people who can answer the question as well as i can dozens that's that
[05:39:31] 's rare especially for a framework with the ecosystem our size right now you have extras saying i made this a bit faster you should make solid do that you need people saying i
[05:39:54]  have this problem to solve solvent and have so the problem is like every solution solves most problems so it's like the difference is an is a nuanced thing but on the flip side
[05:40:05]  i do think that is important not not it's more of like because knowing that the answer is yes so it's like i have this problem how do i solve it with solid
[05:40:19]  i think i think i think i think i think that's like i i agree with the alignment i i just want to point out that like this there is a bit of
[05:40:28]  everything does everything but maybe some do it better than others and maybe that better doesn't matter to every single user they're they're here because they already think that the potential of
[05:40:38]  doing it is better right that they they won't be in the forum or the discord if somewhere they hadn't heard that solid does this thing better so that we're past that
[05:40:48]  step now we just got to help them build what they're going to build yeah yeah it's a self-reflection i'm really happy to have all you though um
[05:41:06]  like as i i was telling someone recently who was having some challenges with our community because they felt like they're worried about this inclusivity and i was like on one hand
[05:41:18]  like i like i completely agree this is why this topic's been on my mind so much recently but then on the other hand i'm like like they're exactly they're
[05:41:31]  exactly like who i like like they helped me so much you know being able to kind of push these ideas forward and like it's yeah i don't know it's it's
[05:41:44]  like every person in the community makes makes makes a big difference from my perspective okay dinner is ready 20 minutes ago this is a problem with catching up chat 20 minutes ago okay
[05:42:01]  so let's see if we can get through this this is the thing i i knew that this was a big topic and i probably left it too late in the stream but there
[05:42:09] 's so much good stuff today taylor's story is incredible there were so many important releases and this community thing is so important and they all came up at the same time
[05:42:20]  and i couldn't push any of them back a week learning through source code not so much in the future this will be better right now that part especially on the core is about
[05:42:37]  optimization and i people have been trying to go in and document to make it better and i said just don't bother we're going to be working on stuff for 2.
[05:42:42] 0 that's when we get the chance because what's happening in 2.0 is we've got a working group so i bring more people in and we're talking about react
[05:42:48] ivity and i'm made kind of breakout groups where we kind of go and do experiments and this is already running um not all of it's in public and github though
[05:42:56]  i'm trying to do better with that with the discussions and the working group thing but essentially i'm not going to have to write the reactivity for 2.0 i'm
[05:43:03]  pretty sure i i'm sure there's going to be other people who work it and because i incorporate their ideas and because we're working together on this the next version will
[05:43:11]  be a community effort instead of a solo effort and that's that's how we get there um so don't look at that code there's some code in the repo that is
[05:43:20]  a bit cleaner and the prototypes to kind of show the basic ideas but uh i some uh oran made a good version of solid it's not actual solid but it's more
[05:43:28]  explainable i i think that's uh we could find that resource for you um i think that would be great sushi friday night tradition um yeah or every second friday
[05:43:40]  but yeah it's been two weeks yeah so people asked about salt start yeah i do miss this in vancouver sushi is so cheap like i like it's probably gone up
[05:43:57]  now because the pandemic and stuff but literally like like the the lunch style sushi combo with like the three maki rolls which again not everyone's into but just simple like cucumber
[05:44:05]  tuna salmon it's like at the cheaper place it's like six dollars canadian so that's like four dollars us i can't find that for like twelve dollars us here it
[05:44:14] 's and it's not just the cheap rolls it scales all the way up it's like four times more expensive for sushi here than it was in vancouver before i left
[05:44:24]  no i'm like in san jose this is still pretty close to the coast for beginners i think the past i mean this is probably good advice but there is a question
[05:44:45]  people do want to come in and be like hey can i learn solid straight and libraries i don't think are a limiting factor so much um we're gonna have actually ag
[05:44:53]  grid releases coming up in a couple weeks and we're gonna have the guy from ag grid neil um on stream we're gonna talk about ag grid i think the library stuff
[05:45:02]  and like we have like material component libraries i think that stuff's heating up the job market though is a very good incentive of not starting with solid it's it's it
[05:45:17] 's i have to say it feels like it might be the easiest way to appreciate solid i think people are starting to find ways to articulate the value elsewhere but like if you have
[05:45:26]  that tech pro knowledge solid is just like wow it just wove all the pieces together in that way that like you didn't think was possible so like there's some magic there
[05:45:37]  but it's my hope that if you're not trying so hard to differentiate from svelte and react that there's a really nice message that we don't have to
[05:45:45]  go all the way there i do make it hard for you i'm sorry the future oh nice sorry i should hide this out solid swiper see like there's new libraries every
[05:45:59]  day that's awesome i that's so good here's the plug there solid swiper oh wow there's so this is like the best chat i've had ever on stream
[05:46:11]  my sushi is getting warm it's definitely getting warm thank you taylor you wrote that like four minutes ago meanwhile my wife's in the chat just laughing at me and everyone
[05:46:28]  all right we're gonna wrap up pretty quick here um okay because it's been like 20 minutes maybe he'll learn no he won't all right eat all the sushi anyways on
[05:46:44]  principle i'm halfway through almost uh you you all are great we're gonna end the stream here because yes i do want to eat my sushi um thank you all for joining
[05:46:56]  me and those who stayed all the way to the end because i i know it's it's it's it was a long stream today and heavy topics uh but yeah i mean
[05:47:07]  every stream's a little different every experience a little different i am so stoked about you know having the opportunity to to talk about all of the things today um and next week
[05:47:18]  i don't know even more exciting