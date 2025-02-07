---
showLink: "https://www.youtube.com/watch?v=aA7Xeh7WG4E"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Front-End's Existential Crisis"
description: ""
publishDate: "2024-01-27"
coverImage: "https://i.ytimg.com/vi/aA7Xeh7WG4E/maxresdefault.jpg"
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. Thank you. Thank you. All right. Hello, everyone. How are you doing
[00:03:02]  today? Sorry for a bit of delay. The spider cage on my mic completely came off, and I was like sitting there trying to like wind it back. Like the
[00:03:16]  name of my mic is too complex, obviously. Yeah, yeah. We'll talk a bit later about this whole complexity simplicity thing. I think it's important to get into
[00:03:32]  that. But yeah. How's everyone doing today? Okay. Yeah. Sorry for really making you guys wait. I'll have my preamble a little shorter today
[00:03:46] . Hey, hey, Dev. How are you doing? Yeah, no. Thanks, everyone for joining. Juice. Oh, sorry. Juice at the ready. No
[00:03:58] , I'm I just I have this lemon cucumber water again. I don't know. I don't know. I don't know. I don't know. Maybe
[00:04:07]  having less sugar actually will be a negative for the stream, lose energy over time. But I've been drinking less orange juice, even though orange juice has always been like my
[00:04:17]  favorite thing. Yeah. Yeah. Right. The Twitch pre roll. Yeah. Yeah. Yeah. Yeah. I like the coconut water. Definitely. OK, let's
[00:04:29]  let's see if I can tell people we're live and get get stuff rolling. I I've been I've been feeling mighty philosophical recently, if you can tell by the
[00:04:40]  title of the stream today. I've been looking at, let's get to my channel. Just look at Twitch, make sure everything's going. Yeah, I've
[00:04:53]  been looking a lot at how we got here in front end, because a lot of our conversation the last, you know, several, there's been a few arcs on
[00:05:05]  the stream, like long running arcs. And the initial one was just like, OK, I'm skeptical of meta frameworks. Let's talk to every meta framework creator
[00:05:15]  and see what the hell they're doing. And then the next arc feels like this long journey into understanding partial hydration solutions, especially stuff like React server components, like and wrapping
[00:05:31]  our heads around what the whole space is, data flow APIs, you know, what this all means. And I feel like we're getting to a point where. The
[00:05:44]  pieces are all kind of there and can start making some sort of conclusion. I know you're like you should have taken less than a year to figure that out, but our
[00:05:53]  understanding of these things continue to evolve, especially as people start developing patterns and like learning more how to use things. So, like, but like at a certain point,
[00:06:03]  you know, it's too easy to think like, hey, have I, you know, as Ryan Florence often goes, he always thinks he's getting nerd sniped.
[00:06:10]  Like, like, has have we like gone so far down on the specific avenue that like we were losing the big picture. And for me, I, I met
[00:06:20]  up one of those reflection points where I'm like, okay, let's kind of really question again why we're here in terms of where front end development JavaScript frameworks are today
[00:06:31] . Like, why have we spent the last three or four years doing what we're doing, like, you know, what's going on? It was really interesting when
[00:06:38]  I did the stream, um, last week that, um, there's a lot of people who are arguing about, uh, not arguing, but we're like, Ryan
[00:06:51] , why aren't CSC? Uh, why, why, why aren't, uh, like, why isn't CR, CSR SPA is fine. Like
[00:07:00] , why can't I just do client side rendered, uh, SPA is why, why are we even still talking about this? Right. Um, and you know,
[00:07:11]  maybe that's a fair question. Similarly, I got to a different part of the stream and everyone's like, why can't I just use rails all the time or HT
[00:07:19] MX? So like, it does feel like a time to justify where we, where we are. And I realized that like, I spent more time, even though
[00:07:28]  I was trying to talk about one specific thing in terms of HTML partials, like trying to get to the end of the conversation. I actually even kind of, by the
[00:07:35]  time I was too tired, I didn't even finish where I was going. Um, like what I was intending to do. Cause I spent so much time, um
[00:07:42] , really roundabout going about talking like Philly and back history, so to speak. Like, and I realized that maybe instead of like coming at it, like as
[00:07:51]  at a, in such a roundabout way, we should just actually just look at the whole spectrum with that intent. Instead of just getting kind of like sidetracked a
[00:07:59]  billion times, not that we won't get sidetracked a billion times. I just mean like, let's actually look at this instead of like jumping to the end of
[00:08:06]  the story. Um, I've been got to the end of the story now because we've been spending so much time over the months and months, but like, that
[00:08:14] 's who knows? That's like 50 hours of video to get from A to B. And that might not even contain the full context. So like, I think it
[00:08:23] 's worthwhile trying to look at the whole spectrum and trying to understand why we're here, where we are right now. If that makes any sense. So yeah, how
[00:08:36]  are you guys all doing in chat? I just posted on, on, uh, the Twitter or X or whatever that, um, I'm live. So hopefully some more
[00:08:46]  people will be joining in on Twitch here. Um, YouTube audience is strong. Twitch is just getting started. So yeah, how are we doing chat? Uh, let
[00:09:01] 's see here. Front-end is getting easier today with native accessibility, dialogue, container scope. Front-end technologies are better than they've ever been. Right. We
[00:09:16]  continue to improve on them. Like it's, it's, it's a long jump from where, where we started. We'll talk about that in a minute, actually
[00:09:26] . But, um, uh, but yeah, it's, it's, uh, let me see here. Um, what's the Twitch URL? Um, let
[00:09:39]  me see. Um, quotes, which URL, hopefully they're Twitch TV slash Ryan solid. Um, but sorry, those to answer this question. But going back to
[00:09:56]  this whole thing, it's like, even if the technology is more powerful than ever, the expectation of what you get out of front-end, um, like on what
[00:10:07]  you're building has continued to grow and grow and grow at a rate that I think the expectation of where we get to has far outpaced the ability for the platform itself to
[00:10:17]  keep up with just in general. I mean, it's the growth has been enormous in terms of what people expect out of the web apps and during different periods of time
[00:10:28] . There's been different reasons for that, which again, is why I feel like I just want to start, start today's conversation with a timeline and we start filling in
[00:10:36]  the blanks. Yeah, or signaling a change of front-end, we'll talk about that, but it's, yeah, it's not just about signals.
[00:10:44]  Baby Yoda? Um, yeah. I mean, I updated my, my background. See this, technically my background is my actual office, but, um, I, I
[00:10:55] 've been, I use a, um, a green screen. So over Christmas break, I added, you see all, I hadn't updated in over a year.
[00:11:04]  So like a lot of new Legos have, have, uh, snuck in there and different stuff. We got, we got some Grogu, um, Optimus
[00:11:13]  Prime, you'll see Groot behind Optimus Prime's gun. Uh, got the Transformers car, you know, there's actually even like a scene from the return
[00:11:24]  of the Jedi and like the Mandalorian and like mini ones all along the back. Guess might be able to see some Naruto gone from Hunter x Hunter. Yeah. Anyways
[00:11:34] , enough looking at my shelf. Yeah. Um, and I, yeah, I, I wrote, I wrote something again, beginning of the week about unifying the data
[00:11:49]  model and we'll, we'll get there, but it's like, this is why I'm, I'm here because I could just continue that conversation, you know,
[00:11:56]  that we left off on at the end of the last stream. Um, but like, we'll get there anyways. Yeah. I haven't heard anything recent from Alex
[00:12:10] . I'd love to hear. Alex is actually really fundamental in under, like he's sometimes seen a bit like over the top, a little bit too aggressive, but I
[00:12:20]  think it's important that he does represent a certain perspective that, um, I, I feel is actually relatively small. Um, like, like not as heard in a
[00:12:32]  thing in the ecosystem. Cause right now, and it hasn't always been this way. And we'll, again, this is a timeline important. We have this like
[00:12:39]  front end, back end, um, split, uh, which, you know, okay. For the most, the majority of the history of the web, there's a
[00:12:46]  front end, back end split, but like, um, uh, Alex Russell is not coming from the perspective of like, like the back end guy necessarily, he's
[00:12:59] , he's, he legitimately cares about front end. Yeah. He's a brace. Sometimes I hardly ever disagree with him. Yeah. That's a good way of putting
[00:13:09]  it because like, I, I, I posted, I posted my stream today. Right. Um, and I actually think I just had it on the head on,
[00:13:18]  on the screen again. Let's, let's throw this up again for a second. Uh, I, I had this quote for you while multiple back end frameworks are pushing
[00:13:28]  for UI rich SSR adepts of react mess crying over essential crisis. The biggest issue is that businesses are still pushing for react. Now you could argue that the
[00:13:39] , um, you know, the statement is correct, that maybe not everyone should be pushing for react. There's other options out there, but like, it also kind of
[00:13:47] , it kind of echoes for me and I'm not picking on this guy specifically. That's not really my, what I'm getting at. It's like, I do
[00:13:58]  think that there's still, the gap is being left in front and back end that the backend folks don't even understand the problem largely. Like they just, it's
[00:14:07]  so lost on them because perhaps in the realm that they're working on, there's no expectation. They don't have the same expectation, um, of what the, like
[00:14:16]  the experience should or could be like. So it's like hard to even like frame it in a way that like everyone can get on the same page to have this conversation.
[00:14:26]  Um, the split's been like so long and so hard down the middle that like, I'm not even sure if each side understands what the other side is like missing on
[00:14:35] . Um, Alex would say like, you know, the business is all pushing for react. It's a mistake, but I, but, and that's the
[00:14:44]  biggest mistake it's, it's, it's a management problem, not even a technology problem. Um, but I think that there is a bit of a miss right now
[00:14:55]  where, you know, the complexity, the involvement of these technologies gone such that, you know, there is really that specialization front end, front end, back end
[00:15:05] , and there's a bit of a gap of even understanding using the same language. the same language, understand what we're talking about. There's so much need to
[00:15:14]  be able to move with the mobile dev. I mean, that's part of the web's, uh, history, right? All right. All right. All right
[00:15:28] . Hey, oh, nice. Nice. Awesome. Yeah. Yeah. People joining on now because I posted on Twitter and I'm like six minutes behind the chat already
[00:15:37] . I got a question. Are the websites and apps are today on better average or second order the better in what sense? I mean, this is a fair question better in
[00:15:48]  that they are reaching the expectations that people would have wanted out of them. definitely, but they've lost other aspects, I think you could do much less, but I
[00:16:07]  remember being able to always play my six for everything someone wanted to do in the front end. Yeah. Let's start this dream of the timeline. Yeah, probably.
[00:16:23]  Yeah, I mean, this is an interesting observation. What? Why? Why? Why is there too much change? Right. Like a lot of the, a lot of
[00:16:47]  the backend technologies say that there's less flux in them and then they go to the JavaScript and like there's a new framework and new technology, a new approach. And
[00:16:55]  it's not like there isn't, you know what I mean? It's not like people are just like going between frameworks because the syntax changed generally. I mean, there
[00:17:07] 's a technology consideration here. And it's like, why can't we all, uh, like, why can't we, you know, just find the right solution
[00:17:25]  and go with it? Why does this keep on changing? Like, will it ever settle down? And these are all really good questions. Because it's one thing to
[00:17:37]  point out that, you know, too much change too often and it breaks everything. But it's like, why is the web that way is a better, more fundamental question
[00:17:46] . Because I don't think saying like, like you can use this argument for why everyone should continue to use React, for example. um, I'm not saying that
[00:18:03] 's the best way to go about it, but I think it's, it's fair to say that this happens for a reason. And just because we, like,
[00:18:17]  will it not to doesn't change this fact. I, in fact, I think the, the, like, I don't want JavaScript fatigue. I want stability, maturity
[00:18:27]  push has been so strong is largely why, um, react, you know, is so dominant. It's not just because there's a great ecosystem libraries and many users and
[00:18:39]  all that. It's because people don't want change. They've had enough change. So like, you can't kind of come at it. Like you don't
[00:18:48]  get it both ways, you know, like. You, you can't say you want change and then be like, but you know, we shouldn't choose anything but say
[00:19:00]  reactors or something like it just, it doesn't work like that. Yeah, just catching up on chat. Sorry, so many of you today chatting, we have already
[00:19:25]  over 200 people on the stream, um, which is incredible, which means if I do a little bit of math here, there's 64 of you on, um,
[00:19:36]  Twitch, which means that there should be at least 140 likes on the YouTube right now, right? I think there's too much change because there's too many people trying to
[00:19:50]  do the same things, or rather what you're saying is too many people trying to solve the same problems. But is that a problem? Like, isn't it good
[00:20:00] ? I guess your thing is like, if we all work together on the same solution to solve the problem, then we would like combine our efforts rather than that, right?
[00:20:11]  So like the idea is like, we should all just work on making React better. Of course, if we did that, we wouldn't have signals now, would we
[00:20:26] ? I see some chat people talking about comparing apps and web apps. This is always part of front-end conversation because there's different ways that people get their UI.
[00:20:45]  Because like, if we just took my timeline here, you know, this big long timeline, and we go back at the very beginning, I don't know what year this
[00:20:55]  is. We can pick a year. The web started like in '91 or something, maybe even earlier. My personal journey of the web started around 1995, '96
[00:21:07] . But let's say, let's just pick 1993. I don't know if most people used the web before 1993. I feel like this is when the ISPs started
[00:21:23]  showing up, and people would mail, like join our internet service in the mail. They would like mail you like disks, essentially, like floppy disks. You got
[00:21:39]  to remember, in 1994, we didn't really even have CD-ROMs in our computer. In '93, we didn't have CD-ROMs in
[00:21:45]  our computer. It was like '94, '95 that CD-ROMs showed up, that you could have that. And I mean, for a lot of
[00:21:53]  you, like I'm talking about 30 years ago. Just for context here, yes, I've been doing web development for about 30 years. So I'm hoping to pull
[00:22:05]  from my experience over that time to kind of paint a picture, at least from my perspective, of why we are where we are right now. But the funny thing about
[00:22:19]  the web, during this initial time period, and I will say, I'm not going to differentiate it much until... I'm going to put another marker here around 1998,
[00:22:32]  and we can talk about it. It happened a little bit earlier, but I'm just going to roughly put something around here. There's more important timeline pieces. If
[00:22:43]  you want a really detailed thing, I'd suggest watching Steve Sanderson's talk. Steve Sanderson... Web something. I can't even remember what it's called. Talk
[00:22:55]  Sydney. Let me... He did it in Sydney, Australia. Why Web Tech is like this. This is an amazing talk. Big inspiration of what we're talking about today
[00:23:06] . I'm going to just post this link for everyone if you haven't seen it. He does a much good job of going to the very specific details. But I
[00:23:15]  want to dwell on it more than you can do in a talk. Yeah, sorry. Just catching up so much chat here. All right. Steve is a legend.
[00:23:37]  For those who don't know, Steve Sanderson also is the creator of Knockout.js. And he's also... I don't know if he's the only creator
[00:23:46] , but he's like behind Blazor as well. All right. So what I'm getting at here is... Do you know what it was like building a website
[00:23:58]  generally between this time period 1993-98? You would like... I mean, maybe we can do it right now. I haven't done this in a while. Can I
[00:24:06]  go... You can tell it's my desktop because of all the benchmarks. But can I... Can I go like... Man, I'm such not a Mac user. What
[00:24:13]  is it? Text edit. Let's go to my desktop and let's make a new document. And then let's go like... HTML. I'm not even going
[00:24:27]  to like properly case this thing. Flash HTML. And then put a body in here. Like this was what WebDev was like when I started WebDev. We
[00:24:43]  kind of open up Notepad. And let's put an H1 in here. The only difference between this example and back then is everything was a table. I
[00:24:53] 'm not... I'm not kidding you. Everything... Everything existence was a table. But... Hello. And then... Button. Like I probably got some typos in here
[00:25:04] . And... Go click. Me. And then what do we want? On. Click. Probably going to be like security stuff to prevent this. Let's go alert
[00:25:17] . Hot. All right. Alert. I'll use single quotes. Hi. And then we want to go file. Save as. Sorry. See, I'm not...
[00:25:31]  I came to the Mac later, but this will hopefully give me a save as thing. Let's put this as home. And we'll save this as a HTML page
[00:25:42] . There we go. Home.HTML. And then I'm going to open it with Google Chrome, hopefully. Okay. Something did not work properly here because
[00:26:00]  It's... It's just showing me the text of the markup. Which is odd. To be fair. Did I... Did I screw that up? I'm...
[00:26:09]  Chat's probably going to tell me that I screwed it up somewhere, but... Some people mentioned Doctype, but I... We didn't even have Docty
[00:26:21] pe back then. Like, I mean, we might have, but like no one was... No one was paying attention to that. I feel like... I've done
[00:26:30]  this on Windows a billion times. I never... I mean... When is it like this? Yeah, it's just interesting because this sh... I would have expected this
[00:26:55]  to... Like, if I open this up in VS Code... This looks... No, this isn't... Thank you. I forgot. I still haven't updated my
[00:27:09]  device. Sorry, guys. Go away. The funny thing is I put an HTML extension on it, which is the funniest thing about this. Where is... Okay.
[00:27:33]  Not this one. Where's my text edit? Text edit. Okay, let's go here. Yeah, I'm just... Yeah, everyone's... It's just...
[00:27:44]  It's just funny because like... I thought that saving it with the right extension would be enough, but you're right. It's probably... It has everything to do with
[00:27:52]  how this is saved as, right? Because... It's weird, though, that the VS Code opening it didn't work. It's funny that I can't make
[00:28:09]  this go away either. It's like refusing to go away. I think they're getting more insistent here. Let me open VS Code. Because this is not the whole
[00:28:19] ... This is not what I wrote, right? Like, what's going on here in this home thing? This is... Oh, they literally encoded it. Okay
[00:28:32] , screw this. It's just text edit being stupid. Let's just take our text from text edit and put it in VS Code. I mean, it... This ruins
[00:28:45]  my magic a little bit because I didn't want to use a modern tool, but let's just do this. All right, done and done. Whatever. I didn
[00:28:55] 't have text edit back then either, so... You know... The funniest thing about this is I literally can't move this. So, it's like... Oh,
[00:29:14]  man. It's... This is... Let's get there with Finder. Open with Google Chrome. All right. Come on, alert. This is like the...
[00:29:41]  This is the worst demo ever. I'm sorry, guys. See, if I open up it this time... Yeah. This is so funny. Like, it literally...
[00:29:54]  The text edit is just not the app you want to use. You got to like... It actually shows me the rendered HTML. Okay. So... Screw you. Text
[00:30:08]  edit. I'm sure there's a way to solve this. Ooh. Looks like this is a good update. But we'll have to push that to later. I
[00:30:23] 'm... I'm probably done playing with text edit, right? All right. I think... This is like just such a combination of annoying things happening on my computer right
[00:30:52]  now. I'll open VS Code again. Open the file. I'll go in here. You're right. It's the stupid quotes. Hexedit actually doesn
[00:31:01] 't use... Like, Mac doesn't... Like, doesn't use real quotes. So now, we open up Chrome. Did I close Chrome? I don't feel
[00:31:14]  like I closed Chrome. But it's like, where is... Where did you go? No. Fun times. Okay. There we go. Chrome, Chrome. You go
[00:31:32] ... Let's open up... This... Inside Chrome. We click. We get our alert. Okay. There we go. Demo done. So this is all because
[00:31:44]  of how far the tools have gone. In... Back in the day, when you'd open a Windows Notepad, that would have worked first try. There would have
[00:31:51]  been no encoding of the HTML. There would have been no weird string wrappers or whatever. Like, essentially, you just... You know... Here you go. I built
[00:31:58]  my website. And... Deploying your website was really easy, too. Yeah. Painful. Yeah. The problem is I should have tried this before, right
[00:32:16] ? Like, literally any note... Like, back in the day, like, any text editor would have just let you do this. Because they weren't aware of HTML.
[00:32:26]  They didn't have fancy features to preview it. You would literally open the text editor, type the stuff in, update it, open it in the browser. And then
[00:32:35] , you know, change the text, refresh the page. You know, change the text, save, refresh the page. And then you're, like, off to the
[00:32:42]  races. Right? And then deployment was, yeah, FTP. You know, you would just use an FTP client, take all those files off your desktop,
[00:32:53]  stick them up on it. And the only reason I'm focusing so much on this is because the development experience, even though it was like... There was no front-end
[00:33:05]  and back-end of the web at this point. Right? You would just, you know, go on here. You would build a single page. You'd view
[00:33:12]  your page source. You would see all the code, the JavaScript, the HTML that other people used. You'd go back, you'd, like, figure out what they
[00:33:24] 're doing. And the whole app basically existed on this page. In a sense, everyone was a front-end developer. Like, some people could argue this is back-
[00:33:35] end, too. But it's not, like, basically, the beginning of the web, everyone was a front-end developer from my perspective. Like, I built
[00:33:43]  websites for people plenty like this. I built band websites. I built local business websites. I built, you know, I was, like, 12 years old at, I
[00:33:55]  think, when was I 12? Yeah, so, like, 95, I was, like, 12 years old. And then it was, like, it was better than
[00:34:01]  babysitting in terms of getting cash, you know? So, like, at this point, we weren't even thinking front-end, back-end, right?
[00:34:12]  But that's all I'm going with this here, okay? So, yeah, okay. But, like, it happened within this first couple years. It was before
[00:34:29]  1998. But, like, by 1998, real businesses had moved to the web. Like, you've got to understand, like, in '93, every website was like
[00:34:37]  that. You didn't have search engines. You had listing directories. You'd go to website and they'd, like, regularly update the links so that, like
[00:34:45] , you could, like, check out what was going on. You wouldn't search. You would just look at their curated list of website links. And, I mean,
[00:34:53]  you could think it's pretty easy to do. You just go update the text and now FTP it up and now your website has been updated. And everyone can see the
[00:35:03]  latest links, right? There's nothing dynamic here. And, as I said, the dynamic stuff did start somewhere, you know, earlier. But any -- I'm
[00:35:14]  just talking from a consumer standpoint and what people were looking for. Up until around '97, '98, no one really cared about to do much more. You know,
[00:35:21]  it was around then that people were, like, trying to do these, like, Java embed applets and trying to do, like -- we need to do dynamic stuff,
[00:35:30]  like, guest books and stuff. And these technologies were always existent through the early '90s. I'm just saying that it wasn't until, like, a
[00:35:38]  little bit later that, you know, it went beyond just having a Perl script in a CGI bin and, like, being able to, like, rewrite that HTML.
[00:35:45]  So, like, if you want the mental model of the early dynamic stuff, it was, like, you'd write scripts knowing that there was an HTML file in this folder
[00:35:56] . And then the script would load the HTML file, like, from the file system into memory. And then you'd, like, search through the text or whatever,
[00:36:06]  the HTML in this file. And then be like, okay, I'm going to find a certain marker, maybe, like, a comment marker or something. And then I
[00:36:14] 'm going to append more text to there and then save the file. So then, again, you're already on the server. So you just basically rewrote the
[00:36:24]  file in place and you've updated the website. And, I mean, like, like, a lot of times, like, I remember setting up simple websites for businesses where
[00:36:35]  I believe the form post just went to an email. You know how you can use Mail2 as a protocol? Like, the action was, like, anytime someone posts a
[00:36:43]  form, just send it to my email. Like, no validation or anything. Just, like, no need for a back-end. Just email me this form content
[00:36:53] . And this is kind of... The reason I'm bringing this up is because the early web was basically, as I said, front-end. At some point,
[00:37:11]  we needed to do more than that. It was a pain in the ass to manually stuff. Like, can you picture a site with a lot of pages? Like, how
[00:37:19]  many pages are you going to make? Every time you get a new page, you know, copy, paste, swap the content. I mean, this was a thing,
[00:37:26]  right? Yeah, ASP came out end of '96. That's what I'm saying. Like, gearing into '97, '98. Maybe I should say
[00:37:34]  '97 here, right? To be fair. So, or end of '96. But what I'm getting at is... So, if we call this region,
[00:37:45]  like, static web. The next region of time... And I'm going to draw a line here. That's going to say 2005. Is probably, you know...
[00:38:07]  I'm going to call it, like, dynamic... Backend. And what we got was we got technologies like ASP, PHP. Essentially, instead of, like
[00:38:26] , taking just simple Perl scripts that, like, wrote to an HTML file because you know it was there, you'd actually get descriptive languages that would template out what the
[00:38:38]  HTML should look like. Like, and then on request, instead of just necessarily serving stuff from a static location, you would render the appropriate response page based on, you
[00:38:50]  know, data you loaded from the database. But, like... Essentially... Instead of having, like, folders with thousands of files, you could write one PHP file that
[00:39:04]  could serve all thousand variations of those pages. Don't get me wrong. The static web didn't last very long for anyone trying to do anything dynamic. But it's important
[00:39:13]  to understand, like, the web started with file system routing. Right? Like, and basically everyone was a front-end developer. We realized the limitations there. And
[00:39:23] , you know, real back-end technologies, databases, you know, got involved. Because before that, if you wanted to do kind of semi-dynamic stuff
[00:39:32]  and with data back-ends, you'd basically have a... It's almost like a static generation. You'd just have databases spitting out HTML pages. Right? And
[00:39:43]  then, you know, upload those. Right? This is... You could do that with the static web. Whereas the dynamic, you know, web or the dynamic back
[00:39:54] -ends I'm calling here, it wasn't like that. Instead of, like, doing pre-rendering of the HTML, you would actually do it all on demand
[00:40:02] . Which was, you know, a lot more dynamic. I do. Twitch TV rhymes solid. Yep. Yeah. I mean, that's the thing. Like,
[00:40:17]  the earlier this technology was, like, the, the, you know... The more, like, you didn't have other options at the point. So, like, as
[00:40:32] ... Think about how much the web grew during this first 12-year period. It makes a lot of sense. Just reading the comments here. 2005 Google Maps.
[00:41:00]  It's 2005 Google Maps. It's funny because this switch was, isn't a concrete point in time, it's a range. Because people just realized the limitations of the
[00:41:12]  system and they needed to do better. This switch I'm putting on here was because a very, very important technology came out at this point. Very, very important.
[00:41:22]  And that technology is Ajax. You have to understand, before 2005, you couldn't do asynchronous requests from the client. Like, you essentially loaded a page and then
[00:41:43]  you were stuck with it until you went back to the server and reloaded the whole page. Like, like, there's no, like, if, if there was
[00:41:53]  a way of doing direct XH, like, direct request, it wasn't async, it was blocking, right? Like, there's no, like, basically there
[00:42:03]  was, there was no point even, I don't know, I honestly never even tried it. I don't, I don't know if there was any technology to actually
[00:42:11]  do synchronous requests before that from the client without reloading the whole page. There may have been, I've just never used it because it would have been completely, it
[00:42:19]  would have blocked the main threat. Like, you wouldn't have been able to do anything. It just, that's not how JavaScript in the browser works. I'm pretty
[00:42:24]  sure it just wasn't a thing. I could be wrong. Somebody technical out there probably knows the answer to it. But the big thing is Ajax came out in 2005
[00:42:33] . So yeah, flash existed somewhere in this dynamic period. Uh, it came out. I don't, I don't, you guys can tell me somewhere between 2007
[00:42:54]  to five, which ad allowed it's important to. Yeah. Maybe I should just could just call this dynamic web because it's not just dynamic backends. It's also
[00:43:03] , it's also, there was like flash, um, during this period, it basically it's continuing on the whole, like applets and stuff. Like there was
[00:43:13]  this idea with Java and ASP and stuff that you could like build these little mini apps that you would load into the browser. Like basically they'd be full applications because
[00:43:21]  people understand the app and server models were pretty far apart. You couldn't really do anything interactive if every time you like, especially before Ajax, every time you did something
[00:43:31] , it was like full page reload, you know, wait for it to come back. It's like, oh, he clicked there full page. Can you picture trying
[00:43:38]  to play, uh, like even like a snakes game? I'm the funny thing is people made stuff like, like snakes, you know, like where the snake, you
[00:43:46]  know, goes around, but it would like, the snake would move one step page reload. They should move a step page reload. Like, like, I don't
[00:43:57]  even know, like, like, like it just, the apps needed, you know, to be able to be interactive. JavaScript was dirt slow during this time period too.
[00:44:09]  Um, so like the, you know, people thought that it would never have the capability of what, you know, the being performant. It wouldn't need to
[00:44:21]  reload on a snake game. I'm saying is if you tried to build something with pure JavaScript and HTML, they're like, I guess it depends on the, you're
[00:44:33]  right. You're right. You're right. You're right. You're right. Technically speaking, you could, yeah, yeah. Sorry. The reload snake game is
[00:44:38]  a bad example. Cause there's no backend state. Yeah. That, that I'm sorry about that on the snake game. I'm just trying to say like, basically
[00:44:45]  a lot of times you'd like hit a dropdown in a form. And then be like, okay, whole page is going to reload to load the list of possible,
[00:44:53]  uh, destinations. And then, you know, drop down on a form, whole list to get the possible dates that are available and stuff. Like there's a lot of
[00:45:01]  back and forth right. A snake's game you could write completely in JavaScript. It'd be slow as molasses, but not because it needed to do page reloads.
[00:45:06]  But like what I'm trying to get at is like these tools using HTML, using JavaScript was not good enough to really build applications. ActiveX, yeah. And Java
[00:45:32]  is all non IRC type rooms work back then. So reason Ajax is a big deal is suddenly you could do partial updates. So these big things like ASP
[00:45:45] .net, um, and, uh, you know, PHP and all those things, suddenly we're like, okay, we can make our apps way more, uh,
[00:45:57]  interactive. You know, like all our, all, and I call them apps in the loosest sense, but like, you know, like admin sections of pages where you
[00:46:04]  were like managing crud stuff. We can now like potentially update part of a form and not have the whole page, go back, just swap out the panels. You
[00:46:12]  know, HTMLX, right? This is basically when something like HTMLX first became, uh, possible. And that's exactly the way people used it originally. Early
[00:46:23] , um, Ajax was largely to, you know, it's Ajax, asynchronous JavaScript and XML. Right? Like people were, people, people were using,
[00:46:39]  um, like sending like HTML X, you know, XML extensions, like SOAP, um, you know, over. XML was used for HTML, not for serialized
[00:46:52]  data. Yeah, it's true. But we actually used XML for serialized data too with SOAP. I know that like, like, uh, like the,
[00:46:59]  um, like RPC type stuff from back then. Um, but okay. The, the thing is. Even with these partials, it was getting really nasty because client
[00:47:20]  state kept on. kept on increasing, right? Um, and if the, um, the next line I'm going to draw is actually 2010. Let's go 2010
[00:47:36] . Okay. Let's put two. Because during this intermediate period of Ajax, we had like. Partials. We had, um, JS faster, you know
[00:47:57] , I'm not going to use slashes. Like Chrome showed up during this time period. Right? Chrome came out. And if anyone remembers, there's like this,
[00:48:06]  like this browser is like 10 times faster than any other browser. Like they, they optimized JavaScript, but all the engines did. Right? Um, V8, spider monkey
[00:48:15] , they all made huge like pushes in JavaScript performance in the, in this midsection. So, but people were still basically building websites either statically or dynamically. Mostly
[00:48:28]  dynamic. Most of the, most people have moved, had moved into like these big ASP things. And they were, the problem is like static web when you were building
[00:48:37] . I mean, I don't know if I should be using like color coded bar sections, but this time period was front-end oriented, right? I'm going
[00:48:49]  to put some, right? I'm going to use green for front-end oriented. This time period. I know there's front-end stuff with flash, but so
[00:49:01]  maybe it's not front-end versus back-end more like, like, uh, how should I call it? like, uh, single mental model, split mental
[00:49:10]  model. This time period was, was mostly like back-end or split model thinking, right? But the problem was it got really, really, really nasty because who owns
[00:49:29]  the state? Well, here, client owned the state. Here, for the most part, server owned the state. These are stateful servers at this, this time
[00:49:40]  period. And what ended up happening was that in order for the client to be really interactive, we did a lot of back and forth serialization. We'd like serialize
[00:49:51]  the state from the server. So the client would be aware of it. And then, sorry, when you updated the client, it would send back its updated state to
[00:50:01]  the server. So the server could update its state. And what ended up being was we're just like serializing this big blob back and forth, right? Yeah, see
[00:50:12] , here's a good stat. JS increased in speed 50 times between 2006 and 2009. Do you know how incredible much that is? Like, you know how there's Moore
[00:50:20] 's law and we watch like, this is harder again for you, for you younger folks, but like when I was a kid, computers doubled in speed basically every two
[00:50:31] , two and a half years. So like you'd, you'd buy a, you know, a PC and you'd be like, holy crap. This thing is 33
[00:50:38]  megahertz. Like the, you know, like before we had these 16 megahertz, but it's twice as fast. Right. And then like, by the next
[00:50:51]  time we bought a computer, there were like 200 megahertz, like four times faster. This time of JavaScript speed up between 2006 to 2009 makes that kind of jump seem like
[00:51:06]  nothing. Like it was incredible. Like I, I, it's hard for me to put into words. Right. So as I, as I said, in,
[00:51:26]  in, in, in general, like, yeah, this is when it comes to software, right. Cause HTMX is innately stateless, which is,
[00:51:38]  I think really, really smart. Like you can use it with stateful backends, but the fact that it didn't tie this, like, you have to understand the
[00:51:43]  technologies at this time assumed a stateful server. So even when they were doing partials, it was a, it was a mess. I called, I, I,
[00:51:49]  everyone has their own preference. See, I started the web here. So I was a front end developer. I got my first professional development jobs, you know, through
[00:51:58]  here. Right. By the time I was in here, I refer to this period here as the dark ages. And it's just because we got to a level of complicated
[00:52:09] ness, complexity, whatever you want to call it, like all factors that was just insane because the model no longer aligned nicely. Because this model was always, there's a
[00:52:21]  single model. This model started with like client server clearly separated. And by here, they were trying to merge it back together again. And it, it was just something
[00:52:32]  had to give. Right. Like it, it was so awkward that you'd get to this point where you'd be duplicating your logic between the JavaScript on your front end
[00:52:47]  and the backend. And that over time you're, you're watching because of the demands of interactivity. So see if you're building apps, right. You have
[00:52:54]  to understand most of the web was still here doing this 90%, still even today, you know, but you, people were trying to build apps because of mobile. See what
[00:53:03]  else happened in 2005 or 2006, the iPhone. So like we, a large part of like what was happening here was that the web technologies, you know, browser teams
[00:53:20] , Chrome, people who cared about the web were like, we can't lose out to mobile. Like that has to be what was driving a lot of the JS improvements
[00:53:28]  during that time period. It was like, they knew that people were expecting app-like experiences and they were not getting them. Unfortunately, the dynamic web stuff of the early
[00:53:41]  days of that worked really well for the type of sites that they, that we were making. It was way better than the static web. It was, it was perform
[00:53:48] ant. It was dynamic. You could do the stuff. But when it came to taking that technology and applying it to stuff that would be comparable to mobile apps, it fell
[00:53:57]  flat, like, like not even close. It was embarrassing. Right. And again, it was because by the time you got here and you're serializing the state back
[00:54:07]  and forth and you're running just as much logic in JavaScript, the apps are just ballooning in size. And this is because of a misalignment of expectations.
[00:54:18]  Like no one wanted to touch JavaScript in this period. JavaScript was a joke language back here. No one really did anything but like marquees across the page or like funny little
[00:54:27]  alert messages. Like people back in the static web days used to a lot of times, like hide Easter eggs in their website just because like, that's about all you could
[00:54:35]  do with JavaScript. Like was do something funny if you found, you know, a certain location on the page or scrolled somewhere. Like what, when we got to
[00:54:45]  here, the developers didn't even want to touch JavaScript. It was like, this is dirty. Like, don't get me wrong. J query showed up after Ajax
[00:54:52]  and most of the early JavaScript libraries, you know, to enable it's just because it was inevitable at this time period that you needed more. Right. This is, this
[00:55:02]  is when like, as I said, J, I'm just going to summarize this period with J query, query up here, you know, J query. I'm
[00:55:10]  just putting J query here. Um, but like, so yeah, I mean, here we should talk about, um, AS or PHP and flash just to kind of fill
[00:55:23]  that in. But like, even, I mean, this was pretty good. generally speaking for people being web pages, but I said, for people building apps, you
[00:55:36] , you use flash. Like it just, like there's a whole different technology. There was there, you wouldn't expect the web to be able to support applications.
[00:55:54]  basically just each one standard. Yeah. He forced it because you know, when he put out the iPhone, right? Like, uh, they, they actually were like,
[00:56:01]  yeah, what they didn't support flash at first. And then they, that like never changed. Everyone else followed suit was the, but essentially. A bunch of companies wanted
[00:56:09]  to bet on the web at this time as well. Um, Facebook did right. They, they, Facebook, um, if you go back to around 2000, uh,
[00:56:22]  I try to remember when you want to go to, but at a certain point they, they tried the bet on the web and then they decided later it was a mistake
[00:56:27]  and they focused on mobile development. And that's what led us to react native. But, but like everybody wanted to bet, was hoping to bet on the web and they
[00:56:36]  needed to get out of this. Honestly, the complexity and the disgustingness people feel with their tools these days, doesn't even touch on how bad it was. right
[00:56:49]  in this period because people were expecting one kind of experience and you were almost completely unable to, um, provide it with the tools given unless you like had some mismatch of
[00:57:02]  a bunch of different technologies that didn't really want to play together. All right. All right. people talking about the different logos and Mozilla. Yeah. No,
[00:57:16]  Mozilla was an Netscape navigator, right? Um, that, that was, but by 2005, 2006, we had the modern like Firefox and we had Chrome
[00:57:26] , you know, 2007, sorry, 2008. We had, we had the, like kind of the beginning of the modern web. Um, okay. Sorry. Just
[00:57:37]  catching up with chat here. Yeah. So what did we do, um, next? Cause I'm kind of, I'm going to put another line here and I don
[00:57:52] 't know if the lines in the, quite the right spot. I'm going to put one here and I'm going to, I'm going to put, we're
[00:57:59]  going to get a little bit more granular at the end of the end of the chain here. I'm going to put 2016 here. Roughly. This is not the right
[00:58:10]  year. It's like 2000. We're in a range again scenario. We'll, we'll, we'll continue going. Feeling so old right now. Yeah,
[00:58:24]  that's, I feel like that almost every stream. Uh. What I'm trying to get at is. The green came back and the green came back hard. People just
[00:58:43]  dropped. We'll figure out how long this green bar is in a minute. But. People just basically. Like. In the same kind of way. That like.
[00:59:00]  When you're doing static web. You know, when you're like making these files and doing like, like it was just dumb to try and like make like. Dynamic content
[00:59:11] . You're like, okay, I need, I need a declarative. Way of doing this. I need a structured way of doing this. Like. In that
[00:59:20]  same way. We had another one of these ones where people. Had gotten used to stuff like flash or whatever. Like. Like essentially being. Um. Um. You
[00:59:30]  know. The thing they had to use. Uh. So to speak to like build these like interactive experiences. So when it was shown that you could combine Ajax technology
[00:59:43] . Fast JavaScript. Like. These are already like apps loading it on the page. You know, HTML5 standards. All the. All the new technology. And actually
[00:59:53]  build. Stuff that was similar to flash. You know. Basically pushed as mentioned by the iPhone and Apple. People are like. Okay. Like. Don't get me wrong
[01:00:01] . Most companies stayed on this technology. For years and years and years. Probably not even thinking about switching until about 2015 and 16. Which is why. I think. That
[01:00:12]  this marker is important. But during this early period. All the people trying to build more application type stuff. Got freed up. And. It. It was amazing again
[01:00:23] . I remember 2010 seeing knockout. And I. People feel angular. It felt like this web again. Because you had that single model. And you like. Sure.
[01:00:31]  Like. You could. In fact. Go back to. Using notepad. To do all your development. Not a slow IDE. The thing I didn't mention on
[01:00:37]  here is. Like. During this time period. We got to the place where we were doing. We're waiting for like. 30 second minute long build times. And like
[01:00:45] . You know. Or even longer. You know. You're like. Compiling down that C# code. You know. It wasn't like. Text files.
[01:00:52]  Safe. Like. It wasn't that experience anymore. This got. Rather. Like. Bulky feeling. Here. It was back to like. Back to text files.
[01:01:01]  Safe. And the. Experiences you could build. Dwarfed. Anything you could do with this. Just. It wasn't even comparable. You had to accept.
[01:01:11]  That you're using JavaScript. But like. It got to a point. That there was so much. Loading back and forth. During this period. For anything that
[01:01:20]  was like. Complicated. That. Just like. Sending the JavaScript. On the page. On a blank page. Made your app feel like. Ten times faster
[01:01:29] . Like. And suddenly. You weren't like. Trying to layer. Like. Your JavaScript. Inside your ERB. Templates. You know. Like. Basically.
[01:01:41]  This was just. A large misalignment. In that. There was no. Good way. To build apps. On the web. You know. You had flash.
[01:01:48]  But like. Flash was getting. Phased out. You. Like. You didn't have. Like. Yeah. It's hard for me. To put in words
[01:01:59] . Because like. This. Like. When I. When I first. Went into developing. Again. Into this phase. When I left. From here to here.
[01:02:06]  It was like. The biggest weight. Ever had been lifted. Which is why. You find a lot of pushback. When people talk. Now about going back. To
[01:02:15]  the server. From the. A lot of people. Who. Who came up. During this time period. Because. A lot of them. Might have. Either started here
[01:02:23] . Or cut their teeth. During this time. And if they were building. A certain type of application. Like. You would never. In a million years. Want to
[01:02:30]  go back here. I had a CRA app. Take two minutes. To start three years ago. Yeah. I mean. We're getting. There again. But can
[01:02:42]  you picture. A CRA app. Taking two minutes. Every time you change. The line of code. Like. That's. More like that. But I mean. It
[01:02:50] 's fine. The difference is. A different feel. To development. Right. If. If you know your compiler. Takes a long time. You do more changes at once
[01:02:57] . You rely on the type system. You rely on all the tooling. To make sure. Like. If you ever use VS Code. During this time period. And
[01:03:03]  still to this day. Not VS Code. Sorry. Visual Studios. Visual Studios was amazing. Right. Like. It might have been slow. And all this. But
[01:03:09]  like. The code completion. For its time. Like. Documentation link. All this. You felt that you could just. Like. Write the code. And then.
[01:03:17]  Like. It would work. Like. You. Because. Like. You had all the tools. At your disposal. And. It was just very different. Than.
[01:03:26]  Notepad. Where the thing didn't work. But then you're like. Okay. It doesn't work. Where is it fixed? It doesn't work. Okay
[01:03:31] . Okay. Got it. Got it. Like. You could. In a notepad file. You could probably. Change. And refresh the page. Like.
[01:03:39]  Who knows. A dozen times. Before. You know. You'd get one. Thing. You know. Change. And. This is why. During this time period.
[01:03:51]  Stuff. Like. Again. Stuff. Like. I love stuff. Like. Even CoffeeScript. Or whatever. Because it was like. Hyper prototype. Kind of language.
[01:03:58]  We didn't have TypeScript. And JavaScript. And we didn't care. Because everything was so fast. Um. And. Because we got. Getting away from static
[01:04:07]  types. Was like. Very desirable. Um. Just. Like. Again. People. Felt like it was a lot of. Ceremony. It slowed down. The
[01:04:18] . Their development. Obviously. A large company. Wasn't ready. To take on these early. Like. This is all. The people. Adopting this stuff.
[01:04:26]  Early stages. Were all. Revolutionary. They're all trying to change. The way they did stuff. Big companies. Did not move. To this technology. In
[01:04:35]  2010. That's for sure. Yeah. Nothing could compare. To this. Debug in 2006. Definitely. Okay. So. We went through. A few cycles.
[01:04:52]  It's so funny. Because. If you watch. Steve Sanderson's video. He basically. Spends like. All of 30 seconds. Talking about. 2010 to 2016
[01:05:01] . He's like. And there's some. JavaScript frameworks. And then he moved on. But in a lot of sense. It's kind of true. When you
[01:05:09]  look at it. From full picture. Because whether you pick. Angular. React. Or React. Or Vue. Or whatever. You know. They're all kind
[01:05:16]  of. Just doing the same thing. Fundamentally. You know. We could talk in micro cycles. About React's virtual DOM. And some of the choices. React
[01:05:23]  made. Actually. End up. Impacting us down the line now. But generally speaking. From like. A high level perspective. New potential technology approach. Introduced
[01:05:33]  to the 2010s. It took till about 2013. For. Or 14. For a technology. That addressed most of the use cases. To. Kind of get out there
[01:05:44] . I mean. There's a lot of different stuff. Happening during this time. Right. And then. By 2016. We had a clear winner. Right.
[01:05:52]  But like. Essentially. And around that time. That's when large companies. Decided that maybe. They should move off this. Because they want to. Deliver better
[01:06:02]  web. Things. Because there's some benefits. To having. That single model. If you can have a developer team. Trained in. You know. In a single
[01:06:10]  technology. Like. Marco at eBay. Was developed in 2012. 2013 period. And. All of eBay.com moved to it. So. They. They bet.
[01:06:19]  On. JavaScript. On their back end. Not for their full back end. They have a Java back end. But for web. Development. The whole web server. Is
[01:06:26]  all JavaScript. And. Obviously. There was. Like. Being e-commerce. There's a huge. Push there. So the technology. Had to be very. Perform
[01:06:36] ant. That they couldn't lose. Against Java. Like essentially. In terms of performance. They had to maintain. The speed. So Marco was made. In a very
[01:06:45]  specific way. But the point. Was that like. The idea. And. You know. PayPal. A few. A bunch of. Companies started going. Okay.
[01:06:58]  If I can hire. JavaScript developers. Full stack. As they're not doing. Our APIs. Or our data services. But just. To do our web services. You
[01:07:05]  know. This simplifies things. From. Whatever the hell. We were doing back here. Because this was a mess. Right. Yeah. TypeScript did come out
[01:07:19]  in 2012. Which was interesting. Because obviously. People like Microsoft. Ahead of the curve. Going hard on JavaScript. They're like. Okay. Yeah. We
[01:07:31]  still need. A type language. Like. Let's face it. You know. It's hard to develop. Large projects. And not have contracts. But. I
[01:07:45]  just kind of. The reason. I'm focusing here. And let's put a few notes. Around this time period. Is. Is. I mean. Call them libraries
[01:07:56] . Whatever. JS frameworks. Because. Let's face it. Whether you. Call react. A library. Or framework. It definitely feels. Different than jQuery. There
[01:08:14]  was. There was. You know. This side. Went declarative. The same way. That this side. Went declarative. When it went to PHP. It
[01:08:26]  was. A significant. Improvement. Of quality of life. For a certain. Type of application. But. Obviously. Those. Days. There was. There was
[01:08:46]  a trade-off here. Right. And. I feel like. This is why. 2016. Is an important. Time period. For marking. That this mid. Life
[01:08:53]  zone. Is. I don't. Think. Anything. Particular. Was released. In 2016. That triggered. This change. Right. Like. One of the things
[01:09:04] . That happened. Around 2010. Well. Actually. People might know. Or 2011. Specs. We're talking. We had. HTML5. We had like
[01:09:13] . Like. But what I'm talking about. Stuff like push state. Stuff like. We started getting. Like. There were. We needed to enable. A new
[01:09:27]  router paradigm here. Because this is. This is the big dawn of client. Client side. Client side routing too. Like. Static web. Had one
[01:09:43]  type of routing. Which was literally. Static routing. Right. This period had. Server routing. And then this. Time period. Added client routing. Routing
[01:09:55] . Like you can see. Where the big. Swaps. Happened. Okay. Let me see. Chad. How are you doing? React is a framework.
[01:10:16]  Mentioned. Well. We'll get there. See the. The Chrome team. And the guys. Working in the browser. Basically. Were a huge part.
[01:10:33]  Of moving the web. In a way that could. Complete. Compete with mobile. Through. This 2005. 2010 period. But. As people started. Adopting
[01:10:44] . This. Technology. This. Kind of very early. Technology. They adopted it. A certain degree. Very quickly. Not. Not the biggest companies. But. This
[01:10:56]  was so new. At the time. Like there's a reason. Why react. Has such a huge. Market share. Like. You're starting from zero. Here at
[01:11:02]  this change. They came in. You know. Maybe later in the cycle. But. They were the winner. Of this. Of this time period. And. They
[01:11:10]  represented. Ultimately. This whole. Change. So like. In the same way. That this. Huge. This. Huge. So to speak. And. Yes.
[01:11:27]  Client routing. Is where we started. The drift off. Web standards. And native browser. Functionally. Definitely. Because. The problem was. The browsers.
[01:11:35]  Just. Weren't. Capable. Of doing. What was needed. To be done. They were moving. Too slow. I mean. It's. It's
[01:11:43]  no fault of anyone. They just. Literally. It just. Wasn't. Like. If you have. It's. If you're. If you're running.
[01:11:51]  Client state. And. Basically. Your idea is. To fight with an app. You know. With apps. Where basically. The whole thing. Is client state.
[01:12:00]  Like. What tools. Do you have. To do this. And it doesn't help. See sometimes. The thing is. There's always. Other. Macro things
[01:12:12] . That happen. During these changes. Right. Monolithic servers. Everything. You know. When do microservices. Get popular. Around 2010. Coincidence. I
[01:12:22]  don't know. Like. People. Realize. That this stuff. Got bigger. Didn't scale. People. Like. Things. Should have always been. Restful
[01:12:33] . Arguably. Stateless. But like. There was no. Impulse. Not to. You know. Like. This time period. Like. Think about. When
[01:12:44]  did Twitter. When did Facebook. All these companies. Show up. 2005. They needed. To change. The way. They were doing it. The dynamic. Wasn
[01:12:53] 't dynamic enough. Right. And don't get me wrong. They stayed mostly. On the back end. Dynamic stuff. PHP. Type solutions. But. They were
[01:13:02]  also mega companies. People. Wanting to get. Like. A cheaper version. Of that. Without. Going into. That level. Ended up. Just. Going
[01:13:12] . Fully. On these. Client side stuff. Rapidly. Too rapidly. Perhaps. Um. Things are still getting. Figured out. Especially during. This
[01:13:21]  time period. And. Essentially. Even. If. This is a single standard. In a sense. It wasn't standard. So. Everything kind of split off.
[01:13:34]  Here. Right. This. This. Red area. Continued on. And this. Green area. Kind of. Spurted out. Whereas. Like. Back
[01:13:42]  here. It's kind of. Clear. That. Um. Like. That. This. Was. Almost. Strictly. Better. There is. More. Comput
[01:13:54] ational. Cost. Required. Definitely. But. Like. Maybe not. In the end. But it is interesting. When you look at this web. And you look
[01:14:01]  at this web. The similarities. Like. Think about. When we start talking about. Static. Pre-rendering. SSG. And everything. Again.
[01:14:06]  It's a throwback. To this web. Essentially. In terms of tech. In terms of technology. Right. It's just like. It's like. Skip those
[01:14:15]  10 years. Go back. Go to these ones. Right. The challenge. Obviously though. Is. If you're not relying on the browser. You're not using the
[01:14:25]  standards. You're shipping. Lots of JavaScript. Right. JavaScript basically ran everything. The model was so much simpler. So much more capable of delivering. What was there
[01:14:37] . But like. You're like. It's just a ton. Of JavaScript. And. When people are making their small little apps. Or people were making. You know
[01:14:49] . These various things. That were fine. But then. The big companies. Started showing up. You know. Around 2014. 15. 16. They're like. Okay
[01:14:57] . React's the clear winner. We should. We should give this a shot. Netflix. Picked up. React. As I mentioned. Marco built their own framework
[01:15:03] . You know. All this work has been going on internally. In Google. You know. Everyone's kind of building. Their JavaScript frameworks. Because they wanted. To have
[01:15:11]  developers. Being able to be functional. You know. Writing interactive apps. And. It's. It's kind of. It's one of those things. Where like
[01:15:29] . At some point around here. We started becoming conscious of this. At a certain scale. But it was too early. This is kind of the problem. Around 2000.
[01:15:43]  I need to make this. Shorter. Because it's. Let's do that. Let's do that. CS routing. The thing is. This is. 2016
[01:15:58]  is probably when Next.js showed up. Probably. But. We started doing. SSR. Essentially. Other. You know. Because basically. People are trying to use
[01:16:11] . Single page apps. And like. This doesn't really work for SEO. Not really. And. Like. There's. Like. There's pieces. That are.
[01:16:19]  We. That the web platform is built on. That we need to leverage. And these. Tools. While they're. Like. You know. Powerful. Like
[01:16:28]  Flash. They're not. They're. You know what I mean. They're not like. Giving us the same experience. Right. You know. Page being white.
[01:16:37]  Low loading times. On JavaScript. But. It takes a while. It takes a while. Because these kind of migrations. Take years. So. What kind of
[01:16:45]  happened. Is. 2015-16. The companies start going. Okay. Yeah. Let's do it. Let's move to React. Let's plan a two to three
[01:16:53]  year migration. And it wasn't until 2018. That some people. Realized that. Oh. Crap. What a mistake. We built. See the funniest thing.
[01:17:02]  Is the developers were really happy. Right. But I doubt the company's bottom lines were. But it took three years. I remember like Netflix. Netflix was one of
[01:17:16]  the earliest companies to go on React in 2014-15. And then 2017 they released something saying like. Oh yeah. We're not using React on the client side. Like
[01:17:26]  what? We're using it for SSR. Well I guess the SSR. Even though React is pretty slow at SSR. I guess that they felt bigger impacted by
[01:17:36] . Like the hydration costs. And like the other rendering stuff in React. That they just. Server rendered React. And then used sprinklings of JS. To update it
[01:17:46] . Some companies like Amazon. Never were able to move to any of these frameworks. I'm calling out React. But it's not just React. It's basically every JavaScript
[01:17:54]  framework. With the exception for those built for this use case. You know. Things like Marco or Wiz or whatever. Which wasn't even. Isn't even open sourced
[01:18:03] . Like they realized. That for a certain category. The performance was not up to snuff. Right. But they were already kind of sunk. Right. And if
[01:18:18]  you listen to Alex Russell. This is what he goes on and on and on about. There we go. Next was really sometime in 2016. Right. Next. Sorry
[01:18:33] . No. My problem with current SSR. Is it stuck using JavaScript. Well. It's stuck using JavaScript for a really good reason. Like we can talk about this
[01:18:40]  from a fundamentals level in a minute. But. Think about. Single model. Split model. SSR is just pre-rendering. It's just the static web again
[01:18:50] . Like on top of. Of a model. There's no way. There's no way for SSR. Kind of not to be JavaScript. Unless you had a
[01:19:02]  different language. Producing the exact same output. Because. If you're trying to serialize. A declarative model across the boundaries. Like. There's data involved.
[01:19:12]  Right. The biggest thing with. With any declarative model. Versus imperative models. Imperative model. You have instructions. You have 1, 2, 3,
[01:19:19]  4, 5. You know. You do do do do do do. Declarative model. Suggests transformation. It's saying like. Hey. I have stuff
[01:19:26]  in a certain state. I've declared it. And then the output is. A related. But different. Output. So. Once you go declarative. And you
[01:19:37] 're going across. Boundaries. There's. There's a bit of complexity there. Especially because. You're also. Writing code that executes. This isn't
[01:19:46]  just static templates. You know. Like. There. There's no. Part of the. You know. Remember the old separation of concerns. That. Would help. In
[01:19:57]  this situation. Perhaps. But. But it was. In another sense. It was also the. The wrong. Not the wrong. But it was also an inconvenient. Mental
[01:20:06]  model. To have. When your whole world. Lives in JavaScript. Because it's like. The. Those boundaries are artificial. By. Merging it all. Like
[01:20:16]  what react. Does with JSX. You have complete control. Of every aspect. So like. And you can slice things. The other way. Which is important. In
[01:20:25]  the browser. For performance. Because. How should I put it. Like. You didn't. You didn't want the angular problem. You didn't want to like.
[01:20:33]  Dirty check. The whole page. I mean. Obviously. Like angular one. I'm talking about. Or angular JS. You. You want it. To have it
[01:20:42] . Slice the other way. Okay. Yes. Netflix is still using react. Yeah. And amazon.com. Is too huge. To use it too. But
[01:20:57]  they. I presume. They could have made that choice. At some point. The same way. Ebay. Did. Amazon. Over. Of like. Back in.
[01:21:06]  Say 2012. Could have made that choice. Or 2010. Could have. Amazon today. Probably not. Amazon uses. Amazon. Like. AWS. Uses react.
[01:21:21]  You might find react. In sections of Amazon. Like. We had this at ebay. Like. Companies would. Or. Sorry. Contractors and teams. Would put
[01:21:29]  react. On like. Like. Widgets around. Like. Ads. And stuff. But the core. Experience. That they need to load. Get those seo
[01:21:37]  scores. Is not going to use react. That depends a lot. On wasm itself. And. Right now. Wasm is not. It doesn't like.
[01:21:57]  It doesn't address. Some of the issues. That I want to talk about. In a minute. In itself. The biggest problem. Though. The crux. Is
[01:22:02]  that. To have the green model. You do need JavaScript. Because. You. They have the single language. Right. Like you. You. JavaScript is the only language
[01:22:11] . In the browser. You're stuck. So wasm can get. Could break the chain. Cycle. Wasm. Being good enough. Would be something. That
[01:22:19]  would be. Notable enough. To actually change the math here. Add maybe another one of these lines. But we're not there. Silver light. I didn't
[01:22:30]  mention silver light. But flash. Silver light. Almost the same kind of thing. Yeah. Wasm has. Use cases. Is very good for certain stuff. But.
[01:22:45]  The web. Still has. This whole spectrum here. Where. Loading. Speed matters. Because a lot of those performance. Concerns I was talking about. Aren
[01:22:55] 't update performance things. They just need to show the page. Pretty fast. You know. For e-commerce and stuff. But. During this time period. The
[01:23:02]  people who were in the react zone. Didn't really care. Because they were building apps. Or competing against mobile. Mobile. You got to download the whole app. Right
[01:23:10] . So. Around. Like. Up to this point. Coming in this frame. We were like. Offline first. PWA. Like. Like. Who cares about
[01:23:18]  the server. You know. But. So like. Yeah. Maybe this line should actually move further back. Like. More to 2018. Because I. I brought 2016
[01:23:30] . As being. SSR. You know. Becoming a thing. But the truth of the matter. Is the real change. Happened. After this. Like.
[01:23:39]  When. The companies that adopted in 2015. Realized the issues. Realized the performance thing. And then they're like. Yeah. We need to do something about
[01:23:49]  this. Right. Because. I don't know what happened. If you ever. Do you guys ever watch Google I.O. Or like the. Like the.
[01:24:01]  Like Chrome. Developer summits. And type stuff. Like. They do them every year. Well. If you watched it in 2017. They. Were talking about. And
[01:24:13]  maybe even. 18. I can't remember. But they were talking about. PWAs. Purple. AppShell. They're talking about. Polymer. And
[01:24:20]  web components. They were talking about. Like. This. Like. PWA. Fueled. Future. Offline first. Power of the browser. Mobile. And then
[01:24:31]  like. The very next year. Is either 2018 or 2019. Zero mention of all that technology. And like. It was just like. Let's talk about Next.js
[01:24:41] . And you're like. What? Well. It. This. Switch. I think. Was fueled by. And this is kind of. Where I'm getting at
[01:24:55] . Is like. Something. Took us off. What seemed like. A very happy path. And that reality. Is that when people. Built the full thing. With our
[01:25:08] . Client side rendered. Single page app. Technologies. It was not. Fully. To. Replace. The. The red stuff. Even if. Develop
[01:25:21] ing in the red stuff. To get the certain. App type features. And stuff we wanted. Was miserable. It. Wasn't. Strictly better. So to
[01:25:32]  speak. Yeah. Yeah. They ditched the PWA thing. People. It's interesting though. Because like. If you. If you look. At. The
[01:25:49]  way. Like a lot of the push. Towards. You know. The server again. Has to do with page load performance. E-commerce. Has to do with these
[01:25:57]  large companies. That were expecting a certain kind of like. Native experience. And getting slogged down. When they went to single page app. But ironically. If you
[01:26:06]  go to places in the world. That have the slowest internet connection. You know. Where they still have a lot. Large amount of commerce. You know. Where people
[01:26:13]  are buying stuff like. You know. Southeast Asia. Areas of. India. I believe. Like. They don't. Actually care as much. About. The page
[01:26:30]  load performance. Even though that's a metric. That we kind of shove down. Everyone's throats. They. They actually. A lot of stuff is like
[01:26:35]  mini apps. Like. Offline first. Actually is their savior. Ironically. Not. So like. Something though. Happened. And I. I haven't put
[01:26:44]  my finger on it. Exactly. But around 2018 to 19. Time period. We suddenly. Were like. Okay. Let's give up on offline first. And move to
[01:26:53]  a server centric. Model. We need to do better. So. I mean. SSR already existed. Back to 2016. But. We need SSR. The
[01:27:03]  problem. The problem is. SSR. Didn't solve. The. Didn't solve. The. Didn't solve. The problem. SSR. It's funny
[01:27:13] . I'm going to. I'm going to do a little aside here. On SSR. For a moment. Because. People are like. Okay. Yeah.
[01:27:19]  Now we can see the page. But SSR. Does not. Actually. Reduce. The size of your JavaScript bundle. It. Makes it probably larger. Like.
[01:27:28]  It could reduce it. Because you like. Move some logic. Into your API. If you wanted to. But generally speaking. It makes your JavaScript bundle. Larger.
[01:27:34]  Which means that. Although you see the page. Sooner. It doesn't become interactive. Any sooner. So like. And now. You are. Serializing
[01:27:46] . All the data. That you need to. Reboot. Hydrate the app. So. You're actually sending. Twice as much over the wire. Again.
[01:27:56]  Right. Remember like. I was. Lamenting over the. The red zone. Where you're sending all this data. Over the wire. I mean. It
[01:28:02]  was brutal on updates. Because you were. Every interaction was like that. But. Here. You know. That initial load. Took a. Significant hit. Like.
[01:28:13]  SSR. In some ways. Can be slower. But don't get me wrong. Like. CSR. Is. Also. Slow. Because then. You have to
[01:28:23]  wait for the JavaScript to load. To even fetch the data. So like. Don't. Don't. Don't get me wrong on that side. I'm just saying
[01:28:28]  like. SSR doesn't actually solve. The problems of CSR. On its own. Like it's. In fact. It. In some ways. It makes
[01:28:35]  a couple of problems. Nicer. Makes a couple of things. Slightly worse. On the whole. It's better. Like. It solves the problems better. Like
[01:28:43] . In the space. Like. On the whole. But it's. It's not comparing. To what we had back in the red days. Mostly because the red days
[01:28:51] . Were kind of broken. Like. They completely incapable. Of giving us. You know. That client side experience. We wanted. But. On the positive. For
[01:29:02]  loading a website. They didn't completely tank. The performance. You could like. Look at a page. Without. Downloading the whole world. And running a bunch of
[01:29:13]  javascript. And. And whatnot. Basically. SSR. Fixed. One aspect. Potentially. And. But it didn't. It didn't actually
[01:29:24] . Like. It still wasn't. As. Nearly as good. As the red zone. For. Just that simple use case. Of. I want to. Load a
[01:29:31]  website. Yeah. Yeah. This is a good point. Matty. Yeah. Because. This is. This is around. This. That happened. I think in
[01:29:44]  2020. We're already on this trend. I think Google saw. The danger. And was like. Okay. Things just keep growing. And growing. Growing. We're
[01:29:54]  going to put our. You know. We're going to put our. What is it? Put our. What's the saying. Where our mouth is. You know
[01:30:00] . Like. They decide that. They're going to take action on this. And correct the. Help correct the direction of the web. I believe that. This really.
[01:30:07]  Started becoming a factor. In 2020. Which is when things really. Started. Accelerating in the current direction. But. The seeds of it. Started back in 2006
[01:30:19] . Which. Was. The large companies. Trying to start. Or 2016. Which when large companies. Started to try and pick up this model. SSR. Plus
[01:30:39]  HMS. And Alpine. I don't know. If I should comment on this. Because it's like. What you're describing. Is using. Three different
[01:30:58]  technologies. And kind of. Making them interact. Together. To basically. Do something. That one technology. Could do. In one go. So to speak. Right.
[01:31:09]  Like. Like. Like. And. The weirdest thing. About Alpine. That always. Gets me. Is. It's designed. To handle the client side
[01:31:18] . Part. But it's like. One of the slowest. JavaScript frameworks. And it's like. Much larger. Because we use the way. People package it.
[01:31:25]  I guess. Because we avoid tools. Than other solutions. That would be. Better. Handling the client side. Aspect of it. It's like. It's
[01:31:32]  like a slower. Reactive. System. But like. What I'm getting at is. I don't know if there's. A specific stack here. The problem
[01:31:39]  is. People right now. Are like. Well how do I solve this problem? I'm going to. Pick a different stack. The problem is. All. It doesn
[01:31:45] 't matter. What technology. You choose. If you're still going to do. The same thing that. Like. Either solves. Or doesn't solve the problem. So
[01:31:54]  like. Sorry. Like. This is why I want to talk about. This is high level. Because. We actually got to talk about. What the actual problem is
[01:32:06] . Because. Like. There's relative scales. The cost for us. Or that is hydration. Right. But the thing is like. Hydration is not worse than CS
[01:32:22] R. So to speak. Right. Like. You still. Like. If you. If you SSR an app. The problem is. The problem is. The
[01:32:34]  problem is more that. SSR isn't a significant improvement. Over CSR. I think is. Is the problem. Like. In a sense like. Rendering on
[01:32:42]  the client. Is more expensive than hydration. Fetching the data. After the fact. From. From an endpoint. After the JS loads. In CSR. Is
[01:32:52]  more expensive. Than serializing it into the page. Generally speaking. The only place where SSR. Is slightly worse. Is that the code. Is probably slightly bigger
[01:33:03] . Than the. The CSR version. But like. When you include. Stuff like streaming in. Then like. The. Into SSR. Then stuff like.
[01:33:16]  The timing of. Of requests. It gets significantly. Better. Um. Than the CSR story. But. It's not enough. That. That's actually the
[01:33:28]  problem. And. The thing is. Is it enough. For you. Who buildings. Like. Not you. Matthew. But like. Some. Specific. Person.
[01:33:38]  Building a website. Using a spot framework. It might be. But. Generally speaking. As it scales. We know. It doesn't. There's a limit. To
[01:33:47]  it. Right. SSR. Can be better than CSR. You know. Like client side rendering. Um. Generally speaking. But. It actually. Didn't push
[01:33:59] . The dial. Enough. In. In. In the way. That was. Impacting. These companies. Moving. From the red. To the green. From this
[01:34:08]  zone. To this zone. So. I propose. As for the quick. I'm. Why not just use quick then? Honestly. Quick does everything that Astro does
[01:34:25] . Pretty much. Maybe not the content collections. But like. From a pure technical standpoint. I. I don't. Want to get completely into it. Because. It
[01:34:33] 's. It's. It's. It's. It's a little bit more complicated. than that. Let's. Let's continue here. Calling things together
[01:34:44]  with art and jQuery. Well. Yeah. I don't know. I disagree hard on this. But. It's. It's fine. I. People might
[01:34:55]  have rose colored glasses. But. Like. Yeah. I did plenty. I actually call this time period. The dark ages. For a reason. Yeah. Anyway. Quick
[01:35:10]  doesn't hydrate. But. It kind of does. Depends on your definition of hydration. Which. Let's. Let's get to. Yeah. Let's
[01:35:18]  talk about what. What. What. What these problems are. I think we're in the dark ages now. I think that's fair. I think we are. In
[01:35:31]  the same way. We are. We are in the end of the cycle here. We are the end of the cycle here. Or beginning of the new cycle. And we
[01:35:38]  haven't seen it yet. We are definitely in the dark ages now. Like. By comparison. I'm very uncomfortable. With. How stuff is going. In that
[01:35:49]  sense. Like. We haven't taken the full leap. On that side. I don't think we're quite as bad. As it was there. But every. Every
[01:35:57]  indicator suggests. That we're heading. Towards. Another one of these. Zones. Like. In that. In that time period. Right. See. In some sense
[01:36:11] . jQuery. Was freeing. So. Like. Because. It was the start. Of this. But. The. The mix match. Of the technologies.
[01:36:24]  Of the time. It was. Really. Awkward. Luckily. Nothing was too heavy. That you couldn't work around. Because they had clear responsibilities. Our problem right
[01:36:32]  here. Is there's no clear responsibility. This is. This is why. We merged everything together. Now we can't split it. But we merged it together for
[01:36:40] . We. We. We. We. Merged it together. Um. For good reason. This is all about. Boundary alignment. But sometimes. We
[01:36:53] . We. We got to. Realign our boundaries. Gary. Berner's talk on. Expansion contraction. Capability versus suitability. Fits a lot
[01:37:08]  here. Natural expansion phase. On capabilities. Now hitting pressure to contract. To suitable solutions. Yeah. Yeah. No. And that's. That. That's happening
[01:37:15] . Yeah. A ton right now. Um. It's why. We're so interested in stuff. That does less. Right. Uh. On one hand. Stuff like
[01:37:25] . HTMX. Is showing that. Hey look. We can just do partials. Nice. Or Astro. They're kind of in the same. Kind of
[01:37:30]  category. Um. Signals. Actually are that. We've boiled all of the. Modern front end. Web development. Now to a simple primitive. That just updates
[01:37:41] . That's why people are stoked on solid. Generally speaking. Because. Instead of like being like. Having all these frameworky things. We do have those constructs.
[01:37:49]  But someone conceptually can just walk in and go. Okay. Signal update UI. It's kind of like jQuery almost. Like in that sense. Where you're just
[01:37:55]  like. I declare some signals. And then my UI updates. Like you. You kind of. Have that same really low level. Simple feel. Especially when you go.
[01:38:02]  Div. And you get an actual div. In your hand. Not some virtual DOM element. Or something. So. I see it. Is it possible that the dark
[01:38:13]  ages. Are simply resulting in building more and more. Abstractions on the top and I. Than fundamentally wrong. No. That's exactly what. What. What.
[01:38:19]  What. What I think the problem is. But I mean. The fundamentally wrong. Might be strong. But like. Generally. It's like. You keep on going
[01:38:27]  down this path. And then you're like. You make too many assumptions at the base. That you can't. Like. Pivot. Or. Or. Like.
[01:38:36]  Change the direction. Most of it is in CW source. Right. So. I mean. We can blame. Large companies. Moving to this model. We can
[01:38:51] . We can blame. Google's focus on core web vitals. To be pushing this. But. Mechanically. We're in this zone. Where. There's
[01:39:03]  this tension. Now. Between. You know. A desire. Clearly. Because we're in a green phase. Right now. Of keeping. This model. And then.
[01:39:12]  Delivering. On the goods. So to speak. So. Would the component bond. I'll be wrong. This is one of the ones. That people. Argue
[01:39:21] . The most. And. The. The answer. To me. Like. Because. Matthew Phillips. Talks about this. A decent amount. My perspective on this.
[01:39:30]  Is that like. Yes and no. Usually we overcompensate. When we like. Go to the next phase. We like pendulum it. A bit too much.
[01:39:37]  My gut. Is that. The component model. Has a lot of nice. Properties. That we want to keep. But it's not. Like. We can't
[01:39:45] . Put it. Like. Can't take it in. It's. On a whole. I mean. This is. This is. This is. What my argument's
[01:39:53]  been. With solid. Right. That. Components are a useful. Abstraction. For the developer. But not useful. From the runtime. And it shows
[01:40:09]  it. Yeah. No. It's. And there's. There's companies. That do stuff. Like. Signals on the server. Like. Even like.
[01:40:19]  Stuff like. Convex. Actually. Going back to this comment. I should probably. Bent and see. What you linked. Just. You know. Because. You
[01:40:31]  linked it. So. Let's see here. Oh. This is a great one. Oh. I love. I love. I love. I like this. Because
[01:40:40]  I was literally talking. I was having this exact conversation with Dev. Before this stream. Sometimes another layer of abstraction is not the answer. And sometimes a path that led you
[01:40:48]  to believe that you needed one. Actually should tell you that you've built so many layers on the wrong foundation. That it's time to burn it all over and start over
[01:40:54] . I like this. I don't. This is. I'm going to. I'm going to bring this back in. In case I want to talk about this
[01:41:01]  later. And. I mean. It comes down to something. I mean. You can always add another abstraction. But it's almost impossible to take one away. So to
[01:41:13]  speak. Like. You can always make something. Easier. To do. But you can't. Make it simpler. Like. Um. And. The. The adding
[01:41:30]  of abstraction. Is basically. A sign of complexity. So. Yeah. I. This. This is. This is great. This is what I was trying to say
[01:42:00]  a bit earlier. CSR and spas are a bigger issue for emerging markets. They definitely are. But the ironic part is. A lot of them prefer. A lot
[01:42:09]  of those markets prefer offline first. Over to faster server rendered stuff anyways. Like. Was I mentioning mini apps and stuff. So it's like. It's. It
[01:42:17] 's kind of a really odd tension. Where. I wonder if we're missing the point. Like. Don't get me wrong. Large companies. Okay. Like.
[01:42:26]  Think of a global e-commerce company like eBay. Right. Collect metrics. Everywhere. Right. Like. Device speeds. Everything as much as possible. Sales directly related to
[01:42:37]  bounce rate. Like. There is a huge amount of research. Externally and internally. Stuff that I can't. I can't share. Obviously from my.
[01:42:44]  My time period being there. But. Like. It made a huge difference. The performance characteristics that I'm talking about. In terms of page load. In terms of
[01:42:54]  like. You know. Interactivity. Being. You know. But. There's. This other side that I always wonder about is like. If. They never.
[01:43:06]  If you never get there. Like. If you bounce. Like. If your internet is that bad. You're slipping through the metrics. Like. Sometimes you can improve the
[01:43:13]  performance of your page. And get worse metrics. Because now you're picking up. More of the people. Who have slower connections. Than you did before. Or like
[01:43:22] . Cases. We've seen this happen before. Which is really weird. Where you're like. I did a bunch of performance improvements. I can visibly see the
[01:43:29] . Performance improvements. So to speak. But I'm like. But. But like. I'm getting worse. Worse metrics. It's kind of like. It's
[01:43:39]  kind of like. I mean. I don't know. Any of you guys watch. Theo Brown and YouTube. And he likes to talk about like. Like. Talk about
[01:43:46]  his YouTube stats and stuff. And he'd see. He says like. Sometimes he wants worse metrics. Because like. Like. Worse click through. Because like.
[01:43:54]  The viewership's higher. Kind of scenario. It's like that effect. Where. Like. Sometimes. Like. Like. Like. Like. Sometimes. It's
[01:44:07]  better. To actually. Get more eyes on it. Like. Get more things through it. Than actually have. Like. Other metrics. And in fact. When you get
[01:44:15]  more eyes on it. It will drive down the other metrics. No. I'm. I'm not. I'm not there again. I was always. With everything
[01:44:28]  balanced. What if Vanilla JS was a framework. It would be the winner of the JS framework benchmark. Yeah. Well. And that's the whole thing. Right
[01:44:50] . Like. This is the thing though. Sometimes you just want to restart. Like. You pick up HTMX. For example. And then you're like.
[01:44:55]  You know what. I'm just going to write Vanilla JS. Because I don't need much. So. You know. Changes that go to the server. I
[01:45:01] 'll use HTMX. And then I'll just patch the rest of Vanilla. JavaScript. I don't need a declarative model. And. As I said before
[01:45:07] . If this is good enough for you. Then you're fine. But what I'm getting at is. There was. A need to go here in the first place.
[01:45:13]  And there was a need to go here. Afterwards. So. For this side. The green spectrum here. They've been trying to solve hydration. Right. That's.
[01:45:28]  That's been basically. The goal of. Of this whole. Era here. Right. So. They're like. They're like. We have to solve hydration. Because
[01:45:38] . The. The thinking is. If we. If we solve hydration. Like. Actually solve it. Then there's no. Reason. To. To compromise. Add
[01:45:51]  that. Add the complexity. In. In like. Make it. Not complexity. Make it more complicated. For the end user. I'm going to use the word.
[01:45:58]  Complicated here. Um. Because. We can keep our single model. And if you could solve hydration. So to speak. Then. Um. Like. Like
[01:46:12] . Like. Why. Would you not just. Keep. Over here. There's no reason to go back here. You have the full interactivity. View one of apps
[01:46:22] . And you have all the. Page load. Um. Considerations. That you have. Of. Uh. Of. Uh. Of. You know. This kind
[01:46:33]  of time period. Right. Like. What if we could like. Unify the models. What if this wasn't red. And green. What if. If the new
[01:46:39]  section out here. Whatever comes next. Um. I don't have that color. I'm like. What if it was purple. You know. Like. Um.
[01:46:50]  I don't think I have a purple. Whatever. Like. What if. What if. What if we could like. You know. Because. I'm going to say
[01:47:00]  that there's another line here. And that line. Is a moving target. Um. But. This is. What's driving everything. And the weirdest part of this.
[01:47:13]  This phase. Has gone. Like. You think we would have got here already. Right. Like. If you look at the history of the web. And the time
[01:47:20]  period here. Like. This was relatively short. This was about a 13 year period. This was about a 13 year period. Do you think. Like. We should be
[01:47:28]  here. Stuff like react server components. Suggest that like. Maybe we're on the. Verge of here. But. The problem is. Have we solved. The
[01:47:37]  problem. So speak. What is hydration. It's execution. Cost. On page load. It's. It's code. Actually. Let's start. Let's
[01:47:51]  start. It's. Code size. And this affects like. This is a bandwidth. Parsing. Cost. It's like both. It's execution cost. You
[01:48:10]  know. Of what you actually run. When you load up the page. And it's a serialization cost. That you also pay on both sides. Like the data that
[01:48:17]  you. Like. You need to send. And parse on both sides. Hydration can be broken down. Into basically three categories. And. The awkwardest thing here
[01:48:29]  is. No solution has actually. Like. Is this even solvable? I wrote an article about a year ago. About solving hydration. And I was talking about quick
[01:48:42] . And marco six. You know. Solutions that work on. Resumability. But. Like. In my opinion today. No solution has perfectly. Completely solved
[01:48:55]  hydration. Okay. Yeah. And I think this is important. There is always. Two sources of truth. Every website starts from the server. So. Like. Even
[01:49:28]  with the. The unified model. The only difference is. In one model. It's like. It's like. You know. It's. It's kind of like
[01:49:39] . Hmm. Yeah. I don't know how to put this. I'm trying to think of. If I can draw up with circles. Because like. Like in
[01:49:52]  the. In the. The more spa. Like. Model. It's more like. There's like a server. Over here. And. A certain subset. Of
[01:50:07]  the. The. Of the. Of the. The. The spa. So to speak. Is. Is. Is. Is kind of designed. Maybe. I'll
[01:50:16]  give it like. A little bit of. Like. To be. A proxy. Of the server. Essentially. And then. Like. Like. Like. Communicate
[01:50:27] . Both directions. Right. It's like. You have the server here. And then you have a proxy of it. Communicating both directions. And like. This is
[01:50:36]  kind of like. The spa model. Whereas like. You know. A. The. The more. Even keeled model. So to speak. Where you have like
[01:50:49] . The distinct split. These circles might be closer. In size. And. There. And. Interestingly enough. Maybe a little bit smaller. This is almost. Project
[01:51:18] ed. Out. Of it. Like. It's like you took a piece out of it. And. And. Put it up there. Let's get rid of.
[01:51:27]  Right. Like it. It almost like it shot out. From here. You know. That's. I don't know. My drawings are probably crap. But.
[01:51:40]  I don't. I don't know. If. If. If that makes any sense. Like one. There's also. Server. First. Models. Which.
[01:51:52]  Are. Basically. The opposite of this. Right. Where. This. Is. Bigger. And. Then. There's. A. Very. Small. Cl
[01:52:10] ient. That. Is. Essentially. Mimic. Of. A. Client. Synchronization. Place. On. The server. Right. So like
[01:52:28] . This last drawing. I'm doing. Is like. Phoenix. Live. Live. Live view. Or whatever. Right. Like. When you. Maybe use. Web
[01:52:35]  sockets. Or something. I don't know. Right. I'm not sure. If I'm conveying this. Properly. With my. Excalib
[01:52:49] ur. Draws. Here. This is. Not. Something I practice. I'm just thinking out loud. Let's get rid of the boundaries. Well. This is
[01:53:07] . This is not exactly simple. Okay. Let's talk about. Why not? Well. Okay. First of all. The reason I can still. Consider resum
[01:53:22] ability. A form of hydration. Is a weird one. It's a technical one. Not one that doesn't. Actually. One that doesn't actually. Probably makes sense
[01:53:36]  to a lot of people. When most people define hydration. As like. You know. Whatever it takes to make the app. Interactive. But I. I was trying
[01:53:45]  to. figure out a while ago. Why is quick different than jQuery? Because I always say. Like hydration wasn't a problem. That we had in the j
[01:53:50] Query days. You know. Classic. You know. Kind of statement. And. The difference is. That. jQuery. Is not declarative. So it has no
[01:54:00]  intent. It doesn't. Care about the state. Of the app. It inspects it. On execution. So like. I give this. The last stream. But
[01:54:10]  if you. Rendered a page. On the server. That may or may not. Contain a certain section. And you. run the jQuery code. That
[01:54:16]  updates that. You know. On interaction. The jQuery code. Is going to look at the DOM. And go. Oh. Is this here? Yes or no.
[01:54:24]  Then I'll decide to do the right. The right thing. But like. Even. With a resumable framework. You have the expectation. That. The thing that
[01:54:35]  ran. On the server. Is in the same state. As the client. Even if you're not. Hydrating it. You. You. You expect. That
[01:54:42]  your data. Is right. Like the state. That you serialized. Is correct. You know. Any modern. Declarative framework. Isn't going to. Int
[01:54:51] rospect the DOM. Because usually. You don't want to do that. On a per operation basis. It's slow. So like. Even if. Quick's like
[01:54:58] . I'm not hydrating. When it wakes up. It expects things to be there. So. Even if it's not doing. That extra work. It's.
[01:55:07]  Quick has solved. The execution cost. Problem. In a beautiful way. You. Are still. In the category. Of hydration. Because you need. The state to match
[01:55:23] . That's. That is why. I still consider hydration. Now. Why have I said. That quick hasn't. Completely solved hydration. That's a. That
[01:55:30] 's a slightly. Different. Question answer. It's. Because. And don't get me wrong. I'm. It is possible. Using. A technology like quick.
[01:55:42]  To. Basically. Zero. Or to. To kind of. How should I put. To solve it. To a certain extent. But. I describe. Serial
[01:55:54] ization. Or sorry. Hydration. As three pieces. And. Each of these. Has their own consideration. Resumability. Is the solution. Is a solution.
[01:56:04]  Is a solution here. To code execution. It's not the only solution. But it's an absolute solution. In the sense that. You just don't run the code
[01:56:15] . Partial hydration solutions. Are. Like. Islands. Or RSCs. Just don't run some of the code. But they do run others. Resum
[01:56:24] ability. For example. The ability to not run the code. Doesn't run the code. Right. Code size. Again. You can have different types of solutions. Part
[01:56:35] ial solutions. Like islands. Or. You know. React. Server components. Solve code size. Partially. Quick. Or. Resumable. Something that
[01:56:47] 's just. Resumable. Doesn't solve code size. So quick has a second mechanism. For lazy loading. Which is separate from. Resumability. It's
[01:56:54]  a. It's kind of like. Progressive hydration. Again. It's awkward calling it hydration. Because you know. It doesn't execute. But if. If we
[01:57:00] 're okay. Calling this hydration. Because of the. Fact that the. States have to match. Like there's still that requirement. Sorry. Let's get me. Out
[01:57:08]  of here. Then. Quick. Solves. Code size. Using progressive hydration. Which means. It loads incrementally. Versus. You know. Say like.
[01:57:23]  Islands or RSCs. Which load only parts. That it knows for sure. See. In this sense. On code size. Islands on RSCs. Are absolute
[01:57:31] . They know. This is server. This is client. Quick does not know. It could be either or. So. It just loads it. As it needs it.
[01:57:42]  And tries to be smart about it. It can use static analysis. Because it can use the fact that. It has a fine grained reactive system. So it can
[01:57:50]  go. Look. If you don't. If you can't write to the state. Then we know it can't change. Which means that. Which means that. We
[01:57:57]  don't need the code for that. Right. So. Quick is pretty smart there. For example. Which leads me to the last problem. Serialization. And
[01:58:07]  data. The double data problem. Now. Islands solve the double data problem. Because. The stuff you don't need. To hydrate. You don't need the
[01:58:16]  data for. So you can. Basically only ship the data you need. For the client components you need. So. Any kind of static HTML. You don't need the
[01:58:23]  data for. You know. Stuff that doesn't update. RSCs in theory. Could solve the problem. But they don't. Because. It's complex.
[01:58:32]  When you have the. Async model of something like react. And. They end up serializing everything twice. Both as HTML. In the rendered markup. And as
[01:58:41] . JSONX. Or whatever. The. The JSX. Transform. Port thing. So they actually don't solve the double data. Quick. Can use that same static
[01:58:53]  analysis. I was talking about before. In terms of what can change. To solve the serialization problem. Except. Here's the. Here's the challenge. What
[01:59:01]  happens. If. The point of change. Is at the top of your app. Like you say. Have a client side router. What happens. A system. With explicit
[01:59:20] . Boundaries. Like server components. Or islands. But not islands. Because. Islands are. Kind of like MPA. But. They're server routed
[01:59:29] . But. A system. With serialization boundaries. That are clear. And marked. Like server client. Knows 100%. Like this can't come to the server.
[01:59:37]  So it doesn't have to worry about it. But a system. That's based on. Analysis. Doesn't know. That. It can't. There isn't a
[01:59:44]  separation. Of the trees. You hit a decision point. It could go either way. You may need this code later. Right. And this applies to data too.
[01:59:53]  Right. Even though. You don't read from the data initially. You might need that data afterwards. It could be on code. You haven't loaded yet. It
[02:00:00]  could be on a different page. If you're talking about client-side routing. So once you've got client-side routing. Unless you can promise. Complete isolation.
[02:00:10]  And I know Quik's been working on some kind of solutions in that zone. But I actually don't know what the solution looks like. You actually don't solve
[02:00:17]  the data serialization problem. And it's tricky because the size of the data serialization might actually increase when you do resumability. Because that's what you're trading
[02:00:30]  for the execution cost. So I know that Quik's working on their next version that improves their approach to serializing. And that hopefully will make the resumability serial
[02:00:43] ization cost even less. You know than it is today. But what I want to point out here is. From a pure abstract theoretical standpoint talking about these different trade-
[02:00:53] offs. No solution actually solves all three of these clearly. Cleanly. There's always some kind of trade-off. Right. You could argue that islands come the closest
[02:01:05]  of ticking off all the boxes here. And that maybe resumable islands do so. But they haven't solved client-side routing. So if you're going into
[02:01:20]  application mode and you're dealing with data and you're in that zone of thinking. Then this isn't actually a solved problem. Because the difference between islands and RSCs
[02:01:33]  is that pegging client-side routing onto islands does not make them RSCs. That there's problems with that fundamentally. Which I've talked about in previous streams
[02:01:46] . That's actually what my last stream was about. It was about how just tagging view transitions, flamethrower, turbo onto islands does not make it RSC
[02:01:56] s. Anyway. I'm sorry. A little bit of side rant. But I hope that answers your question. I hope it wasn't blocking anything too important.
[02:02:26]  This is kind of the problem we have right now in general when we look at this problem space. It's that we're trying to... We've been approaching this like
[02:02:44]  it's something we can solve. Because we desperately want to solve it. But I'm concerned that every set of trade-offs is presenting us with a difficult challenge.
[02:03:05]  One of the kind of... The reason that I'm kind of getting cured right now is like another way to look at this that we haven't talked about is a theoretical R
[02:03:17] SC model could be the best option. That does everything. What if you had explicit client-server boundaries? So the code size reduced significantly. You had a solution
[02:03:33]  where the islands were resumable. So the execution cost was basically none. And because you're using server components and you do something smarter than what RSCs do today
[02:03:50] . You keep the properties of islands and you solve data serialization. This goal has been what I've been after for the last little while. This is why when people
[02:04:02]  talk to me about, oh, what if I mix Alpine with HTMX or whatever? I'm just like, sure, go for it if it works for
[02:04:08]  you. Because if you combine it like that, you're not solving this. Like, you're not building the system that can handle all three of these cases. You're
[02:04:21]  just kind of doing something that works for you. So, like, in this sense, it's why I think a lot of people are excited about RSCs.
[02:04:39]  That if someone could implement a better version than React has today, and React knows that they're still improving it. Could that be this next thing? And a lot of
[02:04:50] ... Yeah, so Shai's reiterating what I said about quick serialization costs substantially, which is reducing the resumability cost into serialization. But we still
[02:05:11]  have the core serialization data concern. I think this is interesting. I mean, this is the kind of out-of-the-box thinking you have to think of
[02:05:26] . The only problem is... How do you solve getting rid of client-side routing and making stuff still good? It's interesting. Because we want to persist state.
[02:05:52]  That's the whole point. If we did not... Like, no, this switch wouldn't have happened halfway through the red zone, like Ajax, if we didn't
[02:06:01]  want to persist state. But the challenge I've had on the RSC side, just kind of put it out there, and I wrote an article or another one of
[02:06:17]  my HackMDs. This is a... HackMDs is... I... I... This... I'll share this with you all here. See if you...
[02:06:27]  Fast servers... Yeah, no, I don't think that's enough. No, I... We need to persist. The persistence is the key. I actually... I
[02:06:52]  made a comment here. Because I was struggling with some data loading API stuff, right? I was trying to figure out what to do. Because I made a realization, I
[02:07:02]  was talking about it, where I was saying that, like, the problem... The interesting thing about RSCs is once you go to the server, once you invalid
[02:07:09] ate, you have to fetch all the data again, unless you have server-side caches. Which anyone who's doing a server backend goes, oh, of course,
[02:07:15]  you know. But it's because we've entwined the whole server tree together too much. I kind of laid it down in this article here where I was saying
[02:07:26]  that, like, when you talk about client versus server component data, like, client component data can be fetched initially during SSR, it can be stored in the browser
[02:07:36] , persist client navigation, and can be updated granularly and cause granular updates. Because you're not starting from an endpoint, you're not starting from a single source,
[02:07:46]  you're doing a bunch of, like, you can make it as micro as you want, you know, you can have signals attaching the data to every piece that updates.
[02:07:57]  Server component data lasts the life of the request, unless you opt into some other persistence. Rendering is always a new creation, it's never granular, it's always
[02:08:04]  top down. All data required to render UI must be present in order to render on the server. See, the difference of client models is because you persist that temporary state,
[02:08:14]  you don't generally fetch it all when you do updating a part that's not related. On the server, generally, if your life is only as long as the request
[02:08:23] , like you're restful, you're not stateful, then you have to, it's a little bit more constrained. Code data for UI is not required in the
[02:08:34]  browser, that's the benefit here. In a sense, people who've been building apps in React, you know, for the people who've been living in this zone
[02:08:49]  here, server component data doesn't necessarily give them that same level of control and power. It's the slippery slope that I was talking about last week from going from GraphQL
[02:09:01]  or the really client-cache-heavy stuff to the server-style. But, I like, it's not that important, I lay out how I could design
[02:09:11]  an API that could do everything in single flight, like mutations, do key-based invalidation, and basically, it doesn't matter, this is using solid. I explain
[02:09:22]  how every piece works from client-only routes, client-mutations, this is just like, it could be done in basically any server component framework, it's a different
[02:09:32]  pattern than what, I think like the Remix guys, if they implemented RSCs would be interested in this approach, because it kind of covers the whole basis,
[02:09:41]  but like, it's actually more like tan stack, it's more like tanners, like query, you know, with the data, because, and the key-based
[02:09:52]  invalidation, because if you combine the knowledge of keys and routing data together, you have the ability to do granular updates, single flight, and if you put that with streaming
[02:10:03]  and stuff. Basically, I came up with this really cool system that does kind of everything you want, except for there's this one little snag. If you
[02:10:11]  want granular updates and data, it has to be in the client, and if you, and the stuff that you don't, doesn't update often has to be in the
[02:10:18]  server. And that sounds like a reasonable split, I guess, but it means that for the stuff that, that updates that much, then you don't get to leverage all
[02:10:29]  the hydration benefits. So there's this argument that over time, you just move everything to the client anyways. And I think this is sort of where, like,
[02:10:44]  this tension arises, because ultimately, funnily enough, the server component model is two models beside each other, especially when you, as in React. And here I actually
[02:10:56]  presented a unified data model, so you can actually use the exact same APIs on client and server and have them do a wonderful handoff. I don't want to necessarily
[02:11:05]  get into this too much, but you can see that the client component and the server component both use create async. They basically both can leverage cache and action functions,
[02:11:16]  and they do exactly and invalidate exactly what they need to. But there is definitely two systems. Just having RSCs didn't save it. Like, you'll have
[02:11:30]  async components, if I'm talking React, and use components in the client using tan stack query or whatever. Like, we have two data fetching models to leverage
[02:11:39]  the benefit of both systems. And it's not only the data, but the view rendering that's impacted by the split of this decision. So, as I said, this
[02:11:50]  is a pretty sweet proposal. You know, I could see, you know, I even talk about, like, maybe React-type patterns where we get rid of the ho
[02:12:00] isted load. There's definitely trade-offs to there, you know, and I kind of dismiss it, ultimately. I think you need to be aware of, if
[02:12:13]  you're aware of route data, you basically have the ability to do single flight and get rid of waterfalls on the client. That's the biggest thing. React wants
[02:12:25]  to pull everything into RSCs so that you can remove client data fetching waterfalls. But then they can't allow, but then the granularity doesn't kick in
[02:12:34] . You need the granularity, you need to move the client. There's this tension. And ultimately, where it has me wondering, and this is kind of where I
[02:12:43] 'm kind of getting to, is we understand the problem space now. And we're understanding what these solutions are starting to look like, you start going, is the developer
[02:12:53]  experience actually better here? Like, I've tried my best to unify both models so that you're not, like, getting torn out and be like, have a whole
[02:13:04]  crap load of concepts. You don't want to, like, have, like, different data fetching models on the client and server and have to, like, think about
[02:13:12]  how that handoff. You just want it to kind of just work. That's why I designed this system. But if you go down this path, if the DX
[02:13:22] , the developer experience, isn't less, right? Like, you're basically just having the old system you had before because you still have to fetch certain data from the client
[02:13:33]  technically to handle its mutation cycle. It's declarative, right? It feeds in a single loop. Like, the source is the thing that does the rendering. You
[02:13:40]  can't, like, disperse it because if it's on the server, you won't have the code to render it in the client, right? And if it
[02:13:47] 's in the client, then, well, you need the code there. So, like, essentially, you lose the benefits for hydration. So, I started wondering,
[02:14:00]  like, at that point, are server components just an optimization, not a DX improvement? Because you still have to handle both. Which is interesting because, as I was trying
[02:14:12]  to say before, a lot of these DX and UX are not separate. I care about UX a lot more, but you have to actually think about both of these things
[02:14:21]  when designing because you want the developer to fall into the pit of success, so to speak. You want them, by using what you give them, to produce good UX.
[02:14:32]  That is the goal. I care about DX as far as you producing good UX. If something, if DX just impacts the developer and doesn't impact the UX, it
[02:14:41] 's much lower for me on my priority scale. But the interesting thing about introducing new models, things like server components, is you have a chance to realign the boundaries and
[02:14:52] , in so, find some simpler approach to it. And then, yes, there's going to be trade-offs, there's going to be other places, but
[02:15:01]  if you keep the model simpler, and can accomplish the UX that way, then the DX actually becomes quite important. You might even sacrifice a bit of UX if you know that
[02:15:13]  more people will be successful with that model. But if the model doesn't improve the DX, and is purely a UX improvement when you know what you're doing, then
[02:15:27]  you start questioning if there's not better ways to get that UX improvement. So, what I'm kind of saying is, are other technologies, like, if, I mean
[02:15:39] , it's related to, like, maybe client-side routing is the mistake. I'm not going to say it is, because I don't see another solution at
[02:15:48]  the moment there, but is the complexity to achieve something like an optimal version of server components worth the amount of work to build compared to investing in other optimizations like resum
[02:16:05] ability? That's the interesting question. And especially if nobody has actually solved everything yet. Is it even solvable because of the innate nature of declarative data going over
[02:16:18]  a boundary? The more we waste cycles here, I don't know if it's wasted, the more this is going to feel like the end of the red section before,
[02:16:27]  or that dark age is. But, when we're stuck, that's all we can do. We keep spinning our wheels until the next thing comes across. It suggests
[02:16:40]  that it's being led by red, but I kind of feel like the red side has completely missed the problem space. They just don't even understand what the problem is.
[02:16:51]  So, we're kind of at an impasse right now. We're kind of stuck. The things that make client-side rendering make the green the best are the
[02:17:05]  same things that are hurting it. The single model. The, you know, complete control. All the pieces that we've worked towards making it incredible are the same things that
[02:17:21]  are holding us back. And it's hard. Sorry, I'm just going to catch up with chat here for a minute after I gave my long rant. See
[02:17:45] , I should probably, the thing kept on scrolling a bit with me, but I almost have to go back to where I posted the article. How long ago did I post
[02:17:52]  the article? There it is. Yeah, yeah. 10 minutes of me ranting. Thank you all for still being here. We have like 300 people watching the stream right
[02:17:59]  now. This is my most viewed live stream that I've had to date. I guess, as I said, Theo was right. 80 people on Twitch, which means
[02:18:09]  that there are now 210 people roughly on YouTube. So, I'm hoping that the YouTube stars actually reflect that. I'm sorry for self-advertising. It just
[02:18:21]  helps so much when people actually go in and, like, it means more people are actually watching and stuff. Yeah, see, we got 108 stars. That means half
[02:18:35]  of the people watching have not thumbs-upped this video, which is a lot of you. Just, just, please help out. Right. It's, I have
[02:18:51]  to admit, this is probably a pretty interesting place for people because you're, you're out there and you're thinking, should I use server components? Is this worth it
[02:19:04] ? And the answer is, like, it is approaching solving those problems. But, kind of like SSR before, this is incremental. This is a really hard problem
[02:19:13]  space. People who don't recognize that aren't even on the first page. That's, that's why I'm having such a hard time here. Sometimes, answers come
[02:19:20]  from left field. But they, they also have to understand what the fundamental issue is. Sometimes, this is why I always look so wide out of, at the ecosystem.
[02:19:31]  Because, someone's probably figured something out and they don't realize what they, what they have yet. You know. So, like, this, this is actually
[02:19:44]  tricky. Sad part is most people in the bookends are never faced AJX here and are directly diving into React here. So, knowledge of data fetching, adaptation,
[02:19:55]  and rare-minded new data. Yeah, and this, this waterfall problem was for years in React. Other frameworks maybe had better tools to solve it. It's why
[02:20:03]  Remix pushed so hard on their loader patterns and stuff. It just, like, literally, for the long time, React, like, I think Seb wrote a post
[02:20:13] . And I think I've had it at the end where he said almost all the performance problems he'd ever hit in his career were related to waterfalls. And,
[02:20:20]  like, or loading, timing, race condition type stuff. And, to be fair, I've hit other type of performances, like, update performance kind of issues. But
[02:20:27] , yeah, for page, like, a lot of the initial thing people hit on page loading is just such terrible setup in, like, in terms of just loading the data
[02:20:34]  in the first place. I was telling people last stream that for the longest time, Solid was just absolutely demolishing all the SSR frameworks using CSR on initial page speed
[02:20:45] , like, lighthouse speed. And you're like, that makes no sense. It has to wait to load the assets. It doesn't know what page it's going
[02:20:50]  to be on. Like, how could it possibly outperform stuff that where everything's on the server? And it was just because they weren't streaming. Well, they didn
[02:20:56] 't support it. But, like, just the way everything was architected was just so waterfall inherent. And I'd basically implemented, like, something very similar to the load
[02:21:06] er pattern, you know? Because we've had that in other frameworks for years and years and years before Remix with nested routing and all this kind of stuff.
[02:21:17]  It's hard to say because when I'm talking about problem space where there's very complicated problems, it's understandable why people don't know the basics or understand the fundamentals.
[02:21:30]  We've abstracted it so far. Like, there is a desire to get back to the basics. It's just how do you get back there without sacrificing, like
[02:21:39] , in one other aspect that's actually important. Is there a way to know that the list with three items for hydration is exhaustive and fully orthogonal? Seems like there
[02:21:58]  might be more details. I mean, I don't know. As far as I know, these are the three things that affect hydration cost. Like, there's obviously
[02:22:09]  more details on to what degree. All of this has made me want to go back to benchmarking again. Like, go back to the fundamentals. When we started, Solid
[02:22:18]  got a big bunch of money come in from the Google Aurora, from the Chrome team, to help, you know, do research into improving this performance on the web.
[02:22:29]  And very grateful for that because first step was Alexa set up a benchmark as a baseline for us to do, you know, notice changes. We just wanted to know where things
[02:22:42]  were at. The problem was that it's always a lot of work to set up, like, different frameworks, different toolings, and make sure the, you know
[02:22:51] , stuff's accurate. But it was a starting point. But at a certain point, then, we were like, okay, we got a baseline. Let's start implementing
[02:22:58]  what we needed. And the thing that we realized is that certain pieces to solving this are commonplace, right? So, to be fair, I didn't dig as far
[02:23:08] . Like, what I use classically, the way that Solid got so fast, the way that we've always been so good at benchmarks is that I would take an
[02:23:18]  existing benchmark, I usually rarely wrote them myself, and then I would write the best implementation I could think of in Vanilla JS. What was great about the JS Framework
[02:23:27]  Benchmark was it had a Vanilla JS implementation. So, I rewrote it to make it faster. And to this day, I think both of the Van
[02:23:37] illa JS implementations are largely still. I don't think anyone's really updated them from when I updated them in the JS Framework Benchmark. In the,
[02:23:49]  I did the same thing in the Isomorphic Benchmark, the one that Marco did, to figure out, that's how Solid's so fast at SSR.
[02:23:54]  I figured out how I would write the code using Vanilla JS. And we need to do the same thing here for hydration. We need to get back to just being like
[02:24:05] , okay, what would this look like in a declarative way from JS? It's not just like writing Vanilla JS and going like, oh, Vanilla JS
[02:24:13]  is faster. It's writing it in such a way that it would be what you pictured the optimal framework would do. I do think this is the list, but I
[02:24:22]  can't tell you to what degree each of these things matter. And I think that's actually a very important detail that we're all missing right now. We're all spec
[02:24:29] ulating because it's hard to know what these real costs are. But these are the things that are taxing us. It's like the code size or like the bandwidth
[02:24:38]  coming in of the actual content that you need to use the page. It's the execution cost when it comes in. And it's that serialization cost. These are definitely
[02:24:47]  the things that are expensive. We don't understand the whole problem today, but isn't it all this performance related and specifically performance on first load? Are we actually building
[02:25:05]  different things with all this? Or is it just off in the first load for the things we're already building today? Yeah, that's, that's, well, the
[02:25:10]  perspective of people working in this green zone right now is that we're just trying to make the first load more performant. But because of the sacrifices or the trade-offs
[02:25:19]  to do that, it might be better to look at a different UI model, right? To like actually change, shift the boundary, so it's easier for people to write
[02:25:27]  performant code. Maybe there's something simpler hidden behind it. But it depends, right? Like sometimes, like if you have an MPA, every load is first
[02:25:43]  load. So, you know, there's an, there's an argument there too. How's chat doing? Just catching up here. I'm still so far behind
[02:25:59] . Yeah, this is how I'd describe Elm. Elm is a really strong structured language. It's got a really ahead of its time in terms of concepts,
[02:26:11]  language, compilation. It's like one of those things where it's like, it's a lot harder to write errors in, but it doesn't, Elm is
[02:26:18]  primarily client-side. Net negative on DX, in my opinion, boundary is much fuzzier. And use server and use client and I don't save client.
[02:26:34]  Yeah, the funniest thing is like this is actually one of those stronger contracts that we see. Like Astro is probably the strongest boundary between client and server in terms of like
[02:26:44]  that you have a different file format. This is like a bit fuzzier. But then when you're getting over to like Marco or like Quik, the boundaries are
[02:26:51]  like any piece of code could be server or client. we're going to, instead of worrying about where that shift is, you're only going to worry about that.
[02:27:00]  Like, hey, this has to be serializable for us to figure out the best thing for you. I do agree that it is definitely tricky to wrap your head around this
[02:27:12]  if you're thinking about it. I think it's more that when people see user server or user client, now they have to think about it. If there's a model
[02:27:21]  where you didn't have to think about it, perhaps the fuzziness wouldn't matter. But once you see it, you're like, oh, maybe this should
[02:27:30]  be harder. I went through this whole cycle and all you on stream went through it with me. I think I was talking about a universal JSX format for server components and
[02:27:39]  SFCs. About a year ago, on stream, you've watched the evolution of going through this whole cycle. Can we render everything in the client? If you
[02:27:54] 've been watching the course of the stream, the answer is no. I'd rather have CSR and backend separate than just solution. Yeah, but then can you deliver
[02:28:11]  the experience that's expected? I don't think RCs... You know, I mean, SvelteKit isn't doing anything special in general anyways. Like, from
[02:28:20]  this perspective, SvelteKit is the same as Remix, is the same as Solstart or whatever. RCs are different. Local first is consistent,
[02:28:46]  so that's good. But, like, are you... Local first is not... It's not going to satisfy the middle ground or the low middle ground on, like,
[02:28:57]  a lot of these e-commerce sites, which gets me to it. We've finally pushed it with the C, the Core Web Vitals score. So that's
[02:29:06]  what kind of pushed over the way. And we're in a very interesting zone now where we have, you know, Next.js working out of Vercel. And
[02:29:15] , you know, I see the same thing when I work in Netlify, is that, like, there's just a lot of companies that kind of bought in on
[02:29:23]  the DX and stuff at React, and now they're like, okay, you know, we want that performance. We want to get more out of it. So this
[02:29:29]  is the compelling argument. The question is, like, for them, RSC model might actually be really good. I always thought about that. When I saw Shopify, I
[02:29:38]  was like, RSCs seem, like, really good. I'm just saying, like, maybe it's okay that it doesn't, it isn't the silver
[02:29:47]  bullet. But then you have to decide what you really want to focus on. A lot of front-end people in the React crisis. Well, it's not just a
[02:29:57]  React crisis, though. It's fundamental. If I go pull up Lighthouse or, you know, kind of Core Web Vitals stuff, all single-page app
[02:30:09] -style rendering, not even React, faster ones, like, solid. Like, sure, we win a few points. But fundamentally, have the same problems. There are
[02:30:18]  some solutions that solve it, but, like, it's interesting. If there's still friction. For example, all the solutions that have resumability, people b
[02:30:29] alk at their syntax to a certain degree. Like, it's too much to adopt. Like, they, they, people are only willing to go so far so fast.
[02:30:38]  Signals are a hard sell on people. Can you picture them trying to pick up dollar sign, like, go, okay, now you need signals, and now you need
[02:30:46]  dollar sign serialization boundaries. Like, it's a simple thing, and once you get up that little curve, you're like, okay. But, do people,
[02:30:55]  you think people, like, will accept that? Where are we sitting today? No. It's almost like a hard stop. Like, it's almost like, no.
[02:31:03]  Like, non-starter. So, like, how, how do you meet people where they're at? Ooh, sorry. Did I miss gift subs? Oh,
[02:31:17]  I did. Insanity later. Thank you for, for tier one subs. Very, very much appreciated. And I'm sure everyone on the channel who got them
[02:31:31]  very much appreciates them, too. Thank you. The longer I've been a dev, the more apparent there is always a balance trade-off to everything. There's
[02:31:43]  no perfect solution that is easy to take things too far in one direction versus another. You may solve your current issue you have and create new ones that weren't a problem the
[02:31:49]  old way and constantly, yo, there's a balance somewhere. Yeah, the challenge is, though, is once you've been sitting at a certain spot for long enough
[02:31:57]  and, like, you know, it's because people will buy into a certain solution, though. Like, you'll inevitably hit a limit to it. And this is what
[02:32:06]  we're talking about at the beginning. Like, even back in the day, people used to be like, okay, this for this, this for that. But we're
[02:32:12]  so focused now on not changing that we're, like, we're forcing it. Like, if we're all going to be like, okay, we don't want
[02:32:22]  stuff to change. We're all going to buy into this React solution, for example. Well, then someone else is going to fall through the cracks. And then they should
[02:32:32]  be able to use different stuff. But then they're like, oh, no, we don't want different stuff. We're all going to use React anyways. Like,
[02:32:39]  it's kind of funny. The tension, like, we're doing this to ourselves by forcing everything along a single path. We shouldn't be so worried about different solutions
[02:32:49] . We're watching the stream on the stream. The view should be double. Yeah, that's how the math works. We need to make rubstock. See,
[02:33:13]  a lot of stuff is infrastructure. I told you micro frontends and the rise of single page apps happen at the same time. Well, what edge functions are also a factor
[02:33:23]  here. This is one, might be one of the biggest drivers to not have, and serverless in general, is one of the biggest drivers to not having stateful servers
[02:33:32] . Maybe we'd all be on Phoenix Live View by now if it weren't for the fact that infrastructure basically suggests that we should have a different model. My gut feeling
[02:33:43] , though, is that, like, the clients... The closer you move into, like, the processing of interaction to the client, the better the experience is. Server
[02:33:55] -first can never be correct for the end user completely. But then again, every site starts on the server. Yeah, we might be leaning on the wrong tree,
[02:34:14]  but it's like, are we going to do... Try and, like, hop it over? You know, like, you're at the top of the lavender and you
[02:34:23] 're like... You know? I don't think the tree is that far off. Maybe it's hard to say. It's like... Maybe something just fundamentally has to
[02:34:34]  shift here. It's too... There are requirements here to be met, and sometimes easing requirements is a way that we make the shift. But where I'm sitting right
[02:34:43]  now, and maybe this is because of my own bias and stuff, client-side routing, for example, is because of the persistence of states. Persistence of client
[02:34:52]  state, the importance of client state is very important. So any solution has to solve that. And that's why going back to here doesn't do it. That's
[02:35:00]  why all the stuff I was talking about, the HTML partials, persistence of client state is a problem for those. So, because you start getting fundamental, okay, well
[02:35:09] , then should we not be declarative? Well, there's a reason. Every time these changes happened, it was introducing a declarative system over an imperative one. It
[02:35:18]  was also, you know, marked a change in how we viewed routing. Static routing, dynamic routing, client-side routing. Here is actually a... I mean
[02:35:32] , push state happened earlier, but if you think about it, SSR was only enabled because push state exists, because you need to be able to refresh on the page.
[02:35:38]  Before we had hash state back in 2010. It's funny how many different aspects line up on each of these changes. See, I don't know. I was fully
[02:35:58]  on server components and said resumability later, because resumability is clearly an optimization. Like, it's just, it's the code that makes it to the
[02:36:09]  client runs less. It just, it's the smallest scope in terms of the problem space. But the real question is, like, this is why you got to look at
[02:36:16]  the fundamental models more. That's more important. In a sense, the thing that, like, you don't pick on, it's quick, the part that makes
[02:36:24]  quick hard isn't the, or like, a bigger shift. Not hard, but a bigger shift is not the resumability necessarily, but the progressive hydration that has more
[02:36:31]  of an impact on the way you have to think about it. RSCs are of that level, too. And if you, if you told me to choose between
[02:36:41]  RSCs and progressive hydration, like, lazy lid and code like that, I'd take RSCs every day of the week. But, um, it's,
[02:36:48]  it's, it's like, it's, it's time to step back, is mostly what I'm saying. Because I think that this requires more thought. We don
[02:36:59] 't actually know what the most expensive part of the equation is. We're just guessing and trying different things and hoping that the DX, which I've spent, I feel
[02:37:08]  like I've spent a year talking about DX. Like, how to accomplish the UX with a DX, you know? Like, how to get, like, certain mechanical things
[02:37:17]  happen to DX and then, like, basically niggle over these details to kind of produce that experience people like, that kind of mechanically check off the boxes. But I
[02:37:26]  think we're also at a point where it's not clear, like, wouldn't it be funny? I'm not saying this is the case, but wouldn't it
[02:37:33]  be funny if something like the code size didn't matter very much? That it was, it was actually serialization costs that was the most expensive and execution costs second. Then
[02:37:41]  you look at certain solutions and be like, what a waste. Or what if it was different? What if execution cost wasn't that big of a deal? It was code
[02:37:51]  size and serialization, you know? Then, like, you'd look at resumability and be like, man, you know, like, we don't actually
[02:38:02]  know right now. And I think that's the problem. And as much as Google's trying to give us the best metrics for this using, you know, their different tools
[02:38:10] , I don't know if they, there needs to be a connect on the framework side. So we understand this from the mechanics side and somehow correlate that to what we
[02:38:22]  see in the metrics. Websockets are underrated, but yeah, possibly a little bit blocked by stateless and by other, you know, other concerns like how
[02:38:37]  long they take the connect in the first place. All right, Chad, I'm trying to catch up because I'm like 10 minutes behind. Problems that we were
[02:39:07]  also looking for different generic solutions, different types. Because that's for us what a sign of maturity looks like in this ecosystem, right? Everyone's like, there should be
[02:39:19]  like one good solution. I'm just building a website. How hard can it be? That's interesting. Signals feel like it's the same niche audience mainstream rejecting
[02:39:40]  as RSCS. Perhaps. The only, the reason I think this is different a little bit is because. For everyone who's not a React, who isn't
[02:39:58]  developing React and React is the majority, you're going to be on signals. And the reason for that is because. Unlike RSCS, all the framework authors basically know
[02:40:10]  signals do what they want it to do. Even the React team knows that like, well, it doesn't fit quite with the model. The result of signals is exactly what
[02:40:17]  they're looking for. So, whether, you know, this comes down to like how a compiler kind of hides something that signals-esque. It's, it seems
[02:40:28]  pretty clear at this point that. At least for the next while, like in the same way, like we could be wrong. It's like the virtual DOM, right?
[02:40:37]  There was like this gravity well with React in 2014 with once people realized the virtual DOM was like legit. Every framework tried to make their own version of the virtual DOM,
[02:40:46]  even like every firm basically had a virtual DOM. Like even reactive libraries like Vue are like, okay, virtual DOM, you know. And. The whole ecosystem basically
[02:40:56]  gravitated around that hole. And now React was the biggest player in the, in the field, but we've seen that exact same gravitation around signals. Every framework is
[02:41:06]  picking it up. There's something legit here. Just because the biggest player isn't playing along doesn't, doesn't mean that it's actually just not like as big as
[02:41:14]  a gravity pole. I'm not, I'm sure 10 years from now we'll be like, oh yeah, signals, whatever. There's like some kind of aspect
[02:41:20]  we got to, but compared to like where we're sitting on the model right now, it's, I think, I don't think signal rejection is not something I'm
[02:41:27]  worried. I'm even relatively worried about it. It's, it's, we're already past that signals have won. What if we support, this is what Marco
[02:41:48]  does, right? But people are so sensitive about syntax. Right. Yeah, Jesus is right. We just need rails. Yeah. I mean, this whole, like in
[02:41:57]  one sense, if you could just pick a direction, you wouldn't have this crisis. The, the, the reason there's this crisis is that you basically have a bunch
[02:42:05]  of front end developers now who are like the very essence of what makes us so good is basically what's we need to fix. But we got to do it without losing
[02:42:16]  anything we care about. It's tricky. It's one of those paradoxes, just like the, the paradox of like, you, you know, if you want to
[02:42:25]  have less JavaScript, the best way to do that is use a JavaScript framework. Like, that's a paradox. Like, like, like, like, like, okay
[02:42:34] , vanilla JS is fine. But I mean, if you, if, if you want to improve, once you get to a point of statefulness, you know, you
[02:42:43]  want JavaScript on the server. It's, it's, it's, it's, it is very perplexing, these kind of paradoxes. And it
[02:42:52]  feels like if there's so many of these things that are like a little off, we must be sitting in the wrong place. Does anyone know why solid jobs are less?
[02:43:05]  Why they don't trust them? They were, I mean, there's, there's no meta, right? But, you know, Svelte's at V
[02:43:11] ercel, let's pretend like that's the same kind of push. Like, I honestly think it doesn't, the meta angle doesn't actually matter. I think it
[02:43:19]  is simply the fact that the ecosystem wants to mature. It wants to feel like it's legit. This has nothing to do with technology at this point. That's like,
[02:43:30]  I did a quote tweet. We'll talk about it this week in JavaScript where, where I, you know, Ben Lesh, RxJS guy was like,
[02:43:38]  you know, we'll, we'll talk about it. But essentially I, I, I was like, but is it 10x better? And, you know,
[02:43:45]  cause he was saying solid was better than react or something, which is kind of silly, but like it has nothing to do with any of the like concrete metrics. There's
[02:43:58]  nothing that I, as a framework developer can develop that actually like, there's no technological piece to this. Transition comes again, of course. Yeah. I mean
[02:44:19] , that's the problem with the react model. Generally, if you think about RCs are a way of trying to rip the tree apart of it, but on the flip
[02:44:30]  side, there's always overlap here. So, and, and there is modular like compartments compartmentalization, you don't like the extreme of pulling out of the
[02:44:43]  MVC, right? Where you have model view controller. But the thing is, we know, there's a reason we, we got away from model view controller.
[02:44:50]  Again, too simple of a model. Like there, I worked in MVC frameworks for years in a stateful environment. See MVC in stateless is lovely. MV
[02:44:59] C in stateful is a disaster. And I think that like, the truth is, you want regions that are tied to the tree, but you, but you don
[02:45:15] 't want it always to be one for one. This is why I like things like signals, because you can kind of live in the tree, but not be owned by
[02:45:23]  the tree one for one. You can kind of diverge in that. And I think, you know, RCs are kind of trying to do it and like make it
[02:45:31]  two trees. Just pulling it separate doesn't actually end up completely working because you, you actually have trees and there's a lot of duplication when you have, when
[02:45:46]  you have, you know, it's not one for one. That's the mistake. It's not a mistake. It just reacts over simplification, but it, it
[02:45:54]  is correlated acting like it's not, they don't correspond. It ends up making things a lot more complicated. Yeah. So, I mean, servers is, is
[02:46:13]  the critical change that we have to go back to stateful servers? Is that, is that, is that where the next thing is? Because nothing else I'm seeing suggests
[02:46:24]  any other thing, but if we have stateful servers, can we, can we still pull off what we want to? I mean, maybe, maybe that's the
[02:46:35]  solution, right? Convex, reactivity on the server, stateful, web SOC and communication, fine-grained updates in the client. Don't diff
[02:46:43] , use, use signals and solid. There, that's the future architect. We solved it. No, it's a little, there's always UI state. There's
[02:46:56]  always temp, ephemeral state related to how the end user works. And we need to, we need to, we need a way of persisting that. I
[02:47:02]  guess we could persist it back to the server in a smart way. But then it's like, stateful servers have all those trade-offs of like, persisting connection
[02:47:13] . This is, this is not, there's, there's not like a single solution here, unfortunately, which is what, it's interesting to, because we're still
[02:47:24]  exploring new space, circling around the same, perhaps, inevitability. I think it's good that, I think it's good that we are exploring this new space
[02:47:33] , because otherwise we, like, we don't know it until we explored it. But then again, like, going back is also something where it's like, we have
[02:47:42]  to make sure that if we look at the same thing again, we look at it differently. We can't just do the same thing, because we know that it won't
[02:47:49]  work still. I keep imagining how early we could take the current tooling back in time. There were some milestones from which I don't think it's possible, either technically
[02:48:02]  or mindset-wise. Yeah. Yeah. I mean, technology isn't, it's not always about the first to have the technology. Usually there's like some silly detail
[02:48:09] . Like, didn't we have like, like, not touchscreens, but we had, like, we, we had a, in, uh, inductive touch
[02:48:16] screens or, uh, sorry, not, um, sorry. We, we, capacitive touchscreens are what started with the iPhone, which let you use
[02:48:23]  your finger. Before that we had, um, resistant, uh, touchscreens. And, uh, you had to use a pen. We, we kind of knew
[02:48:32]  that we were going to have this tablet smartphone kind of future in the nineties, but like a little detail like that on the technology prevented us from getting to where it needed
[02:48:42]  to at the time. Even though like there were those things, obviously size improved and stuff, but like it took the right factors. It's almost like people are the
[02:48:51]  slowest thing to change. I don't know. I, I, I've been, uh, uh, yeah, maybe there's smarter people than me, but I
[02:49:04]  think the problem is because it's not a singular problem. Like you can't just like solve it, you have to put all the pieces together and find it on balance
[02:49:12] . And you don't really know that until you try it. If you've got me thinking of future references, use live browser matches and morph during runtime. This might be
[02:49:24]  a good idea of cool quick does do that. That quick has an amazing analytics for doing that quick is some of the coolest technology that I've seen, um, for handling
[02:49:35]  some of this stuff. It's just, there's some, there's some, there's some things that still need to get figured out. Time to revisit wasm
[02:49:58] . Yeah. I mean, the thing is wasm will allow us to use other languages, which will improve our server rendering price, but it feels like an optimization.
[02:50:10]  I think, I think our problem right now is we're trying to find an architectural solution and like, we're, you know, like the, it's tricky.
[02:50:24]  Like, it's not about the speed we render on the server. So wasm, it's not about the, yeah, it's like, it's, it's
[02:50:36] , it's about essentially these, it's either on one side. If you're saying like client routed, it's like about combining these things here with the ability
[02:50:51]  to persist client state on the other side. So if you take a server solution, ask how you can consistently, uh, persist client state. And if you take a client
[02:51:00]  solution, ask how you can consistently reduce the cost here. It's, it's, it's, it's, there's a lot of great chat here. I
[02:51:16] 'm trying to like highlight the pieces that I can. Yeah. You know, so I was trying to say, but I'm still 10 minutes behind. Cause you guys
[02:51:27]  are putting such great conversation in. I suspect Apple's locked down pivot from PWAs. Yeah. I mean, they killed it. I mean, I was building a P
[02:51:37] WA in 2017, 18, and they basically refused. It's so funny. Cause like Android got push notifications and it literally took Apple five years to get push notifications through P
[02:51:50] WA. Like, like, or six years, I think now it was just, it was just insane. They just really dragged their feet. But that being said,
[02:52:04]  I mean, offline first has a whole slew of other synchronization considerations and problems. Cause like offline is kind of the nicest when it's a short-term thing.
[02:52:15]  It's like, lets you do optimistic updates. It lets you do, you know, as soon as you're trying to consolidate larger histories of offline, you hit all
[02:52:24]  the distributed computing problems, which. You know, caching is one of those really hard problems in computing. So is distributed computation. All right. It's a conversation I
[02:52:44] 've caught up to the. It's a conversation I've caught up to the. It's a conversation I've caught up to the. It's a conversation I've
[02:52:52]  caught up to the. It's a conversation I've caught up to the. It's a conversation I've caught up to the. It's a conversation I've caught up
[02:52:59]  to the. It's a conversation I've caught up to the. It's a conversation I've caught up to the. It's a conversation I've caught up to the
[02:53:05] . It's a conversation I've caught up to the. It's a conversation I've caught up to the. It's a conversation I've caught up to the. It
[02:53:11] 's a conversation I've caught up to the. It's a conversation I've caught up to the. It'd be kind of interesting. We did a stream that tried
[02:53:20]  to imagine what. Front end dev would look like in five years. Like to go create a future view. I mean, this is why we're asking these questions right now
[02:53:28] . Right? Like we're trying to think about. What the. What characteristics we wanted in them. Because like I like characteristics of RSCs. But I don
[02:53:37] 't like some of the trade offs. I same. I can say the exact same thing about resumability. I. My gut is that the trade offs of the res
[02:53:45] umability. Are solvable. Are solvable. But. I think. I think the serialization problem. I think my current problem is I've been. I
[02:54:02] 've been focusing too much on the serialization problem. I think serialization. Like my gut is. I'll benchmark it. But my gut is serialization is a big
[02:54:08]  part of the cost. And. Essentially. Yeah. It makes it. It makes it. It makes it tricky. Because you're kind of. I wonder. If
[02:54:27]  there is. If there is a solution. Like if we move. Remove serialization from the equation. If there's. If there's a. If there's a happier
[02:54:38]  solution there. Because. Like there's different. If you take any individual. One of these problems. There's different solutions to them. Like. Code size. As
[02:54:52]  long as your core app. Is small enough. You can lazy load stuff. To a good degree. Right. So like. For example. If you're. If
[02:55:06]  your baseline of your framework. Already. Is like. Four. Five times smaller. Than. Another framework. It takes significant time to catch up. You might. Be able
[02:55:16]  to like. Build a good app. In. In the same size. Of like. Hello world. In the other framework. Then like. Code size might not.
[02:55:27]  Matter that much. Because anything beyond that. You can. You know. Lazy load. And. Yeah. I think. I think. We just. We.
[02:55:44]  We need. Better understanding. Of what. Where. Like. What. Of these constraints. We can loosen. forward with it. People helping with job advice. I
[02:55:57] 'm so happy to see that in chat. People helping other people. I think my problem is I'm not used to having so many people in chat, so I'm used
[02:56:08]  to answering everybody's interaction. I just can't do that. It's amazing to see you all here today. This is an exciting topic, definitely. Okay, I
[02:56:22] 'm still six minutes behind. Wasm won't save you from the creator of Leptos. There we go. Can we quote it? Don't get me wrong.
[02:56:34]  I'm kind of excited about the aspect that you start thinking Wasm and you start going, well, can I build something? When the boundaries are clear, like RSC
[02:56:47] s, you start thinking I can make like one part in my backend language and then another part, you know, the client components in JS. But the funny thing is
[02:56:55]  you still want to client render, server render the client components. So like, yeah, I don't know. I guess it's Wasm. Okay, I think I
[02:57:08] 've actually caught up to chat, which is amazing. GIF subs. All right. Let me, let me get there, chat. Oh, wow. Patrick JS
[02:57:26] , thank you so much for 20 GIF subs. I'm sure everyone's happy about that. This is, this is, this has been amazing. The last couple of
[02:57:37]  streams, we've had so many GIF subs on the stream, which helps out a lot. Sorry, I don't know what's up with my phone. And
[02:57:47]  there was a question here. Can I talk about the trade-offs between, uh, between, um, QUIC and RSCs? And I actually, I guess
[02:58:02]  I didn't put the list there, but I actually did, uh, I feel like a few minutes ago, I did a fairly good job of, of, of,
[02:58:12]  of doing that. I, I should have written it down while I did it. I don't feel like, I think I already covered that, like, uh,
[02:58:17]  maybe 20 minutes back. Hydration probably caught up, but even then, probably not a real issue making it real available as one issue. Well, the thing is, I
[02:58:29]  don't even know, like, if, if you load the code, but you don't execute it, like, if a tree fell, falls in the woods, does
[02:58:37]  anyone hear it? You know, like, I, I, yeah, my, I, I'm not actually sure the code size necessarily is the most important factor.
[02:58:53]  It's inside. Sometimes it's better to send a quote from, okay. I'm, I love insights here. Yeah. I mean, yeah, the, the
[02:59:09] , the, I should definitely look and see, I, I trust the creator of Erlang on this largely. Do we need one size fits all? Do, do
[02:59:20]  maybe we just need someone to make a best in class composition of the top solutions for each problem? Well, in a sense, RSCs are very close to that.
[02:59:32]  Like you could take my unified data fetching model here, which shows the best client side and obviously, and arguably the best server side model for a high, for that
[02:59:41]  add some resumability. And then like, you just stick them next to each other and maybe it's good enough. I just, I wonder, like, I guess
[02:59:52]  that's the thing, right? Maybe it's just a matter of what the focus on first, because like, if you, if you come into this zone, right
[03:00:00] ? If you're like here, does it, do you care if your islands get bigger, if they're resumable? Do you know what I mean? Like maybe
[03:00:09]  like, that's what it comes to. We just have to do both. We need, we need the power of something like resumability to reduce the cost of
[03:00:21]  our client islands. And then we need the division boundaries of something like RSCs to make sure that our serialization costs are reasonable. So it just still seems like a
[03:00:32]  lot. I'm very cognizant of this time period, right before we went here, and just how much right now feels like that. Hi, Dylan. Okay
[03:00:56] . Yeah, our, our programs are probably bigger than our data still. So we still have some room to grow the data. Maybe I don't know how much the
[03:01:08]  network. Um, okay. Did I miss something again? Damn it. Okay, five tier one gift subs from, from, uh, I'm gathering this is Greg
[03:01:37] , uh, GBJ Leptos. Thank you so much. And then Patrick dumps another, holy, hundred tier one gift subs. That's literally everyone in the
[03:01:51]  channel. I've, I, well, you're all subscribed. Thank you, uh, Patrick JS, um, lowercase X. You. Wow. There we
[03:02:05]  go. Aren't you glad you're on. You joined the, the, the Twitch stream today. Everyone gets a sub. It's a party. I don't
[03:02:23]  know. Um, I need to think of better incentives or people. I wish I had a better way to thank them if, if they had something they want to say or
[03:02:29]  whatnot, but, uh, thank you very much. I, this is, this is, yeah. Thank you. There you go. Thank you, Patrick. Party
[03:02:46]  kit. No, party wasn't party. You mean, uh, party town party kit was the, is the, is the multiplayer action stuff from Sunil. Um
[03:03:00] , party town is great for third-party scripts. Yeah, no, seriously. Thank you, Patrick. That's I, that's just, wow. Um, yeah
[03:03:14] . Uh, it's funny cause there's a whole conversation about the economy going on in chat and. There you go, Patrick and quick, we have dollar signs everywhere.
[03:03:28]  So I have to share it. There we go. Yeah. Patrick's, uh, definitely interfacing quite a few times on Twitter, always, um, talking about
[03:03:37]  the latest tech and quick. And we, uh, we had a good conversation about quick today. Cause as I said, quick, quick does a lot of really, really
[03:03:46]  good things. Um, I think, I think we're, I think there's still a balance to be found, but I think that like, when you look at it
[03:03:56]  on the technology side, it's incredible. Um, I think we need better state management tools. Hmm. I mean, it's cause it's quiet right now.
[03:04:11]  Cause outside of react, not even outside of react, every JavaScript framework is pulling their state management tools into the framework. They've decided that state is something that they do
[03:04:21]  care about. Even react. Think about it. Like to get concurrent mode, they needed to control the state. That's why there's like use external source or something,
[03:04:28]  but it's like, I'm, I hear it's kind of miserable, but like, generally speaking. Like react has pulled it all in when they went to hooks
[03:04:35] , they were on this path to pull it all in everyone using signals. They're pulling the state and angular switching pull. Like everyone's pulling the state into the framework because
[03:04:42]  it's the most optimal way to do UI updates. It doesn't have to be tied to the tree, but the framework being aware of the specific state mechanisms allows it to
[03:04:53]  optimize significantly. Taking them out from stream islands that automatically auto convert to continents at a certain size and maybe all the way up to. Yeah. Yeah. This is a
[03:05:08]  sub only chat now. No, honestly, you've hijacked the whole conversation, Patrick. Thank you so much. Uh. Here's a dumb day. Can you
[03:05:35]  use the 10 megabytes or so browser local storage as a way to cache just literal DOM state to speed up reducing? Yeah. I mean, this is interesting because at what
[03:05:47]  point are we talking about like doing work ahead of time and then caching it? I always feel like that's like my last resort, like stuff like a SSG
[03:05:56]  or ISR or whatever. It's like, I want the architecture to be sound before I optimize it with caching. I think this is probably my biggest resistance to R
[03:06:04] SCs. They almost tell you have to cache. And I, I really don't want to ever be in that state. Like, I understand now. I watched
[03:06:13]  this great video from Lee Robinson. Let, let me see if I can find it here for a second. I think it was in, uh, where did I drop it
[03:06:22] ? Not this. Uh, it was on my next channel. Do, do, do, do, do, do, do, do, do, do, do,
[03:06:26]  do, do, do, do, do, do, do, do. Seriously. Great, great video. Um, uh, let me pull this into the screen.
[03:06:36]  You guys can see, I'm not going to watch it right now, but he goes in detail. of every little way that Next.js does its caching.
[03:06:45]  Um, let's pop this into chat for those people. And. Um, it's really interesting because it all makes sense when I frame it in the way that I've
[03:07:03]  been talking about in terms of RSCs requirement for caching, like next looks at every route and if you don't read something off the request, it caches it
[03:07:11] . immediately. Like that's its default. Like everything is cash. Obviously like in my head, I'm like, I've only ever built apps. Like really like
[03:07:18] , I'm sorry. My, my experience was building stuff that looks a lot like, like I, I worked in social media for almost a decade. Then I worked at
[03:07:25]  eBay. eBay was sites, not apps. So I can understand it from the eBay side more. But when I was doing like, uh, you know, the app
[03:07:32]  side, when I was doing development, the difference that eBay has to work on the framework, but when I was building like actual products, like. I like we're
[03:07:45] , we're talking applications. So it's a lot harder for me to wrap around like all this caching. Cause basically I could cache almost nothing. I could cache.
[03:07:54]  Like everything was personalized. Every part of it was. So like I could cache like common shared organizational queries. I could cache. Sometimes we'd even like for our top
[03:08:04]  users or, you know, important people cache, like their, their newsfeed, like the first page of it. Like we, we did lots of different optimization caching
[03:08:13]  techniques, but like caching as an architecture was not on our list of things because it like, we'd have to invalidate it so often, especially because of the amount
[03:08:25]  of like write heaviness of like social media. So anyways, but yeah, like it's, this is a very interesting, uh, I got this link from Tanner
[03:08:39]  who at first, because of the key based caching thought he, we, he was talking about something to ask that query, but it's not actually in the client.
[03:08:44]  It's actually a server cache. Um, and in a sense, this unified caching model that I'm talking about would have the client cache and the server cache be the
[03:08:54]  same. So I don't know. I don't think next JS is going to hoist their loaders to get the full, like single flight multi-client
[03:09:04]  server communication thing. But, um, I expect that they're part of the server caching story is very similar to what I wrote up in that unified, um, cache
[03:09:14]  thing, but this is a great explanation. This is an amazing video. I'm surprised I haven't thumbs up yet. Oh, it's cause I'm on this
[03:09:22] . Yeah. I have no clue why this is a great video. People should watch it. Okay. Sorry. Uh, let's, how are we doing chat?
[03:09:35]  You should enable channel memberships on YouTube. Um, yeah, I probably should have, they added that after I started streaming. So I never looked at it. Yeah
[03:09:50] . MobX state tree is actually really, really cool. Um, it's fairly opinionated, but like building out a whole solution on mobX is cool. What I
[03:09:58] 'm the, the only challenge is mobX is it had the deal to react the whole time. The like picture of someone built mobX state tree on top of solid
[03:10:06]  signals. I mean, it would be amazing, right? Like you'd, if you cared about that level of state management, you'd also have the perfect renderer to
[03:10:15]  go with it. Like for anyone building reactivity, this should be like, like, I'm surprised people haven't done something like this because it's like, it's
[03:10:22]  exactly what they're looking for. MST was wasted on react. Thank you. Yeah. I mean, I built geo cities, tripod, my old band site,
[03:10:47]  right? If you ever want to feel nostalgic, you know, you can always still go to space jam 1996 and you know, where is it? And you can just,
[03:11:02]  you can just come back to the golden age. Kind of want to view source here. Okay. So we just have CSS image and the page. Okay. Is there
[03:11:19]  any JavaScript on this page? Probably not. Let's, let's actually view source. Let's see if there's a view source. I went to inspector where's
[03:11:27]  view page source. Why am I not seeing it here? God, what view source? I wonder if this page truly is on updated from there. Everything's a table
[03:11:45] . I already told you guys that. See, there's a table and then there's another table and there's a table on that table. Sometimes the TDS are capital
[03:11:50] ized. Sometimes they're not good times. Oh, it says alt text, which is incredible for this time period, probably because like, I mean, accessibility would have
[03:12:04]  been important for a major website like this. Like, I wonder if we can find hints in the HTML to say that this actually has been updated. Don't touch
[03:12:15]  the ad stuff. Don't touch the ad stuff. Okay. Understood. Oh, there's some JavaScript on here. Tracking code window data layer. Yeah. Oh,
[03:12:27]  this is just Google analytics looks like. Anyway, enough nostalgia for, for one moment. Yeah, I'm talking about Li, yeah, no, you, I mean
[03:12:57] , dev, dev rel is a critical area, right? Um, well, I mean, I guess, yeah, no, this has been one of the, the challenges
[03:13:13] , like, think about the challenge he has to, he has, where he's trying to move people to a new technology. The, I mean, even the react
[03:13:21]  core team has been working on this, have been having challenge explaining this stuff. I think, I think the, the amount of polish on a lot of explanations from Li when
[03:13:28]  it, and it's to the point because they get the focus on the specific problems or the space related to their specific product. Um, but he still manages to,
[03:13:38]  like, get deep enough that you, the general knowledge is there, so yeah, no, definitely. Service workers, client. I, I know, I know, like
[03:13:47] , technically, it's because it's in the browser. I understand it's like a, another layer, you could say edge, you know, but, um,
[03:13:56]  yeah, I mean, it's, it's interesting. You can run your service worker either way, right? You can act it, treat it like a backend framework
[03:14:05] , which is fair, but. Yeah, it's interesting. Get, but it, like, you need to open the, you need to open the page to get
[03:14:17]  it the first time. I, I think that's why, like, yeah, I don't know. That's interesting. It's your former external thing manager, yeah
[03:14:28] . Well, the thing is, client and server cache don't have, can't, they, they, they aren't in the same place, but the thing is
[03:14:47] , people's conception of what they are caching, the data, could be the same. So it's, it's really, when you have a client and server cache
[03:14:54] , you can basically just have, you can view it as actually layers of this, like, different caching layers on the same data, essentially. Like, people concept
[03:15:04] ually think about data, and as, and the funny thing is, like, depending where the root of the invalidation is, it doesn't actually matter as long as it
[03:15:14] , it invalidates through. Like, I don't see a problem with having the same API and the same key system in, in such a system, because you only invalid
[03:15:25] ate as deep as you go, as you care to go, yeah. Nice. Alright. Web 2.0 was a mistake. No quotes around HTML attributes. I
[03:15:54]  mean, it's optional, right? Right in the spec. Right in the spec. Taliban. Oh, I'm, I, I, yeah, he. People
[03:16:07]  still talking about MST. Okay. To be fair, I've never actually built an app with MST. I'm just, what, what I'm, what I
[03:16:15]  was trying to say is that, like, a very advanced state management solution based on top of signals seems like it would be very valuable for people who have a certain type of
[03:16:24]  needs around it. I don't know enough about the specific conventions to make a comment either way. It just seemed logical to me that someone would take the framework primitives
[03:16:32]  and build something more powerful on top. Oh, so you agree with me, Dev. Okay. Okay. All right. Anyway. So funny. When I get into
[03:16:48]  these chat stream parts, I kind of lose track of where I was at. But let's see if we can draw this together before going to this week in JavaScript.
[03:16:58]  I honestly, I imagine, I guess it's just you guys having YouTube and Twitch open at the same time. But this is, this is, this is significantly more
[03:17:06]  viewers than we have on, without like a raid. So. Okay. Actually, let's see here. You're not cashed without the full content. This is not
[03:17:15] , I'm building. Sometimes it is even out of our hands. I want to see if we are okay with. You can make assumptions around 90%. I can get that
[03:17:22] , but you can make a hundred percent. So as long as the API is under that, you need to opt out. That's all I asked. Otherwise, I'm
[03:17:26]  not even. Oh, yeah. Yeah. Yeah, and actually, generally speaking, I'm not a big fan of, this is why I'm not a big fan
[03:17:37]  of providing cache solutions. Like, even this universal data fetching thing where I have a cache primitive, it's not, its default behavior is ephemeral, essentially.
[03:17:46]  The cache, it lasts the length of the request on the server. And on the client, it's basically a preload cache that lasts less than like a couple seconds.
[03:17:56]  Because it's just literally over the course of a navigation. It, I did implement a, I did keep it around as a back cache. So people get the browser
[03:18:06]  back behavior. So like, if they navigate to a place they've been before, fresh data. If they press back in the browser, it, it loads the previously loaded
[03:18:17]  data. I wanted to kind of emulate how the browser works. But generally speaking, yeah, once you, the idea would be that we could extend this to allow people
[03:18:29]  to have their own caching rules and stores and stuff. Like, generally speaking, this is my problem partially with cache solutions is that, like, there's always different needs
[03:18:37]  and it needs to be customizable. And that is challenging, in my opinion. You can't just have one overall rule. And it puts a lot of, like,
[03:18:45]  no one wants to write to the cache and cache invalidation. Like, part of what makes Remix so beautiful is that they're like, we just aren't worrying about
[03:18:53]  any cache except for the HTTP browser cache. You know what I mean? Like, they're just like, generally speaking, you know, that's why, uh,
[03:19:02]  their optimization updates are so cool because it's like, literally, it doesn't involve cache reading or writing. So, yes, I, I actually aim generally to avoid c
[03:19:13] aches as an architecture for, largely for this reason, because the needs are different. Um, but the challenge is, if you have a, if you try and pull
[03:19:23]  everything together and you have, like, a diff-based, like, what you might want to do with a diff-based framework, you're going to find yourself relying
[03:19:30]  on caches more. Because you're going to be, it's like relying on memoization. You're going to be running code that you don't need to run because
[03:19:41]  it's not granular, which means that, like, you need to cache. Like, like, how else are you going to do it? Anyway. You were about
[03:19:53]  to give a solution to all friends of Rose after talking about the problems. Right, right, yes. Um, no, I, I, I don't, don't
[03:20:04]  have a solution, um, currently. I've been exploring this like crazy. I'm just trying to frame it for everyone here so you understand, like, it is this
[03:20:15]  challenge, right? Like, I don't think this is imagined. I mean, that's the problem. Like, it's funny because you talk to people very much
[03:20:22]  in the back end sphere and they're just, like, kind of laughing at us. And it's like, sure. You know, because, like, from a distance
[03:20:28]  they might even think, like, oh, they're just returning to service stuff that we've known for years, blah, blah, blah. You know, but it
[03:20:34] 's like, they have never solved this problem. And the closest they ever got to solving it, basically, right, like, right here, they haven't moved an inch
[03:20:47]  in over a decade. Like, like, it's, it's almost comical, but I mean, that's, that's how it is, you know?
[03:20:56]  Like, it's fine. We all have different problem spaces, but, but it's like, in this area. So, yeah, I don't know. I
[03:21:12] , I think, I think we need to kind of, I think front end needs to accept its flaws, needs to understand its true nature. And maybe we can't
[03:21:25]  fight it too much. We just have to, because right now, we're, it feels like we're trying really hard to go back against what we, what we are
[03:21:38] . And we probably don't need to. These things will improve incrementally as long as we let them to, or let them. And it's, it's not
[03:21:53]  about, like, I, I don't think it's about revolutionary change right now. I, it's going to be funny when someone figures something out that just cracks it
[03:22:05]  and like, everything flows through. But I think that might be the only way to stay sane right now. I think the best friend is not the cash and developers must take
[03:22:18]  responsibility. We should continue not think, you know, do it for them. Framework should probably keep it as they must be told on how to use the tools.
[03:22:27]  Neverland. And it's not a problem. Yeah. Yeah. Yeah. Yeah. I mean, this is part of the automation problem. We try to automate everything right
[03:22:38]  now because there's this incredible push to make things easier for people, which means we can take those things off their hands. But I'm, as I said, I
[03:22:45] 'm always a little bit uncomfortable on the caching side. That's why, like, it was, I was very shocked when next so aggressively cached. But I
[03:22:54]  think that's the only way it really works. This is the way to stay sane. I've just ignored front end and going back and going to back end. Yeah
[03:23:08] . Yeah. But that's kind of like, from my perspective, that's just like putting your head under a pillow, so to speak. Like, duh, it doesn
[03:23:17] 't exist. See no evil. You know, it doesn't actually solve the problem. Although, is your goal to find solutions to these problems that pretty much like React
[03:23:30]  and Next can get better? Or is it, I'm continually, I, I am just trying to find solutions to these problems. There are places where React won't follow
[03:23:40]  us. So I'm not too concerned. The space is different enough with our solutions. Like, perfect example, people don't realize this, zoomability kind of requires
[03:23:49]  signals, just putting it out there, or something signal-like. Otherwise, it doesn't quite work. In fact, early quick didn't, and it wasn't quite
[03:23:57] . I think in an article I called Misko out, and he's like, okay, okay, well, it's coming in a future version. And then, like
[03:24:03] , they got there. But, like, React can't follow everywhere because the solutions are different. Right? So I think it's okay. We're allowed to have
[03:24:17]  different solutions. That's kind of what I'm getting at. In a sense, RSCs are a lot easier for React than they are for other solutions. So I
[03:24:25]  think that's fair game. You can follow everyone everywhere. Sometimes, that makes for very happy developers. Should have stuck with Laravel. Yeah. It's like Pand
[03:24:51] ora's box. Once you open it, it's too late. Yeah, I mean, it's a thing. I mean, this is why there's pushback
[03:25:14] , you know? I'm actually really happy on that note. I don't know if I should show this off. We got a few minutes. I don't want
[03:25:24]  to switch gears yet. But I've added get server functions, i.e. cacheable server functions in solid start with the latest release, which I think will make people
[03:25:34]  excited. I don't know if I... We'll see if I want to talk about that. But I'm trying to get to something here. And the truth of
[03:25:50]  the matter is, this is a hard topic that I could probably ramble on for ages. I think the core of the content you guys get, you understand why this is
[03:25:57]  a hard problem. There isn't a simple solution. But I think we need to, I think it comes with acceptance and re-evaluation in terms of space.
[03:26:05]  I think perhaps my own, this is a reflection of my own expectations being too high. Maybe that's what has to be grounded a little bit. I'm always an
[03:26:17]  optimist when it comes to this stuff. And I try to be pragmatic when it comes to actual implementation. But I'm always an optimist when it comes to like the
[03:26:28]  direction of the web in general. And I think perhaps I have to be a little bit more realistic here. I'm struggling here. It's funny. I've talked
[03:26:44]  to a few people where they don't see what this next thing is. Right? People will throw out their suggestions. And it's funny. Dan Abramoff said something
[03:26:56]  along this lines a few couple years ago about like how nothing outside of React excites him. And I'm like, what are you talking about? There's plenty of
[03:27:03]  exciting stuff outside of React that's exciting and developing in these directions. I'm not saying that. I think there's a ton of interesting work going on. I'm just
[03:27:13]  saying that I don't, the reason I don't know what this is, like we haven't, if there is going to be something like this, I don't think
[03:27:20]  we've seen it yet. Not quite. It's possible that, like, someone fixes server components. Maybe that's a direction. It's possible that someone makes res
[03:27:33] umability easy. So, like, but it's possible that it's none of those. And usually when we're in these kind of stuck, tough places, we
[03:27:44]  have to just back off on one of our constraints or assumptions and rethink the problem. And I think, I think, for me, at least personally, it's going
[03:27:56]  to be to figure out, perhaps, through benchmarks or whatever, what is actually important. Anyway, that's mostly what I want to say. Okay, chat, how
[03:28:09]  are you doing? Were there friends on older donors in the 90s, 2000s? Yeah, completely. I was joking, like, to be fair, in this period
[03:28:29] , there was just web developers. There was no, like, back-end, really, front-end, but the split definitely happened during this time period. I
[03:28:40]  remember, I guess there wasn't, not in this phase, because front-end was basically nothing, but from about 2005 onwards, there's been front-end developer,
[03:28:51]  back-end developer split. This was, like, this jump was basically, like, all web developers kind of became back-end developers. And then this phase,
[03:28:59]  the front-end developers, I worked on teams, but back then, front-end developers usually meant, like, CSS more. Like, they did HTML and CSS,
[03:29:09]  you know, even through this phase. Like, they needed people to actually build the views and, like, what they look like. So, like, in a sense
[03:29:22] , this continued on into here. So, it wasn't like there was ever a gap. There's been front-end developers in the web the whole time. Right.
[03:29:35]  Yeah, I think this is fair. Like, depending on how you put it, in the 90s, there was just web developers. Like, yeah. But in
[03:29:45]  a sense, some of those web developers became the front-end developers of the next phase. Maybe it's because I don't know that it takes more time for it to
[03:30:01]  advance. I mean, we are getting there. That's why stuff is so slow. All right. You have two takes? Let's hear them. I've enjoyed
[03:30:17]  your discussion so far, so I'll air these out. Send the program to data. Read the free to send. I can send a WASM module instead of asking the
[03:30:26]  backend for data. System, not a single app. Architecture is eventually. Right. Yeah, yeah. I mean, CQRS is the trick to managing distributed systems
[03:30:41] , essentially, and eventual consistency. So, apply that to your web. I mean, how do you make that into an API or a surface area that works for everyone?
[03:30:56]  I don't know. It's interesting. But we're actually purely architectural. The first one, I'm not. Read the tweet I sent. Yeah, I might
[03:31:05]  have to go back and see that. The first one, I'm not clear what you mean, data sent. WASM should module instead of asking the backend for data.
[03:31:11]  The funny thing is, I know this isn't probably what you're saying, is that we're actually, server functions these days, like our APIs are actually sending live JavaScript
[03:31:24]  basically over the wire. Like, we're actually executing code. I showed this in a few streams back, but like, we're, our data is actually executing JavaScript
[03:31:34]  code. I don't know if that's kind of similar idea, but we're actually sending data as code. It's, it's cool. Interesting. Interesting
[03:31:51] . Yeah. You're saying that main advantage of WASM is a private excuse to adopt language level solutions. Yeah. I mean, we, we've been struggling against the
[03:31:58]  language of JavaScript for ages now. This is why we, all the frameworks have compilers, right? Like it doesn't quite fit what we're looking for. Interestingly
[03:32:06]  though, these days, JavaScript frameworks really just want compilers to make signals easier to use in JavaScript, I mean, basically you could, you could say that React
[03:32:14]  is different, but like another way of looking at it is that they just want, forget, so they don't need to write signals the way it signals work, but they
[03:32:21]  basically want them to act like signals. So, I don't know. We, anyway, yeah, see if I have local data pieces, yeah, I mean,
[03:32:43]  yeah, compared to, but I mean, yeah, nothing is without trade-offs. Yeah, I'm going to have to keep the rest of this conversation probably,
[03:33:03]  probably in chat. I don't think I'm a whole stream, like whole topic doing this, but you guys keep on talking about it. I'm going to move on
[03:33:10]  to probably the next topic. Oh, you're saying that Remix's approach is embracing CQRS. Yeah. Yeah. What I'm actually looking forward to seeing
[03:33:28]  is more, more data dependency driven stuff. In a sense, TANSTAC query and its keys is just signals, like, bear with me. Like it's,
[03:33:38]  it's, it's manual in that it's marked by keys as a way of like connecting the dots, but the invalidation system is basically like a dependency graph that you
[03:33:47]  trigger. So I want to see more solutions around granular invalidation and tying those systems together. That's, that's what I want to see. Alright, anyway
[03:34:06] , let's talk about a couple other topics and we're going to get into this week in JavaScript. I want to, I want to, I want to, I
[03:34:18] 'm going to take a bit of time now to talk about solid and solid start that doesn't bother anyone, hopefully. Um, uh, I do have a fairly,
[03:34:37]  um, important topic I want to talk about. Um, so yeah, let's talk solid start for those who aren't familiar though. I imagine a lot of you
[03:34:50]  are, although this is more viewership live than I'm used to. Um, solid start is solids meta framework like next, except it's, uh, it's an
[03:34:59]  anti meta framework in that we try and keep things low level that we don't include as many pieces as possible to leave it open for you to make your, to have
[03:35:09]  your own opinions. I'm not a big fan of shoving opinions on people. If I can get stuff as low as possible, I will try. Obviously sometimes it is
[03:35:21]  hard and my dislike of pushing opinions on people also makes me dislike accepting opinions of others. So it's, it's, it's, it's, it's one
[03:35:31]  of those interesting balances because the whole existence of solid start and this thing is basically, uh, a bit, a bit hypocritical because in a sense I'm, I
[03:35:44] 'm, I'm, I'm trying my best, but I'm, you know, struggling with the fact that I wish that it didn't need to exist anyway.
[03:35:58]  So I barely met a framework. Yeah. I mean, generally speaking, I view this mostly as a templating thing. We, we have a whole stream about it.
[03:36:06]  When I call you, uh, the, the shape of frameworks to come the, you, the initial load of solid start, if you just take the most base template or
[03:36:14]  just install it in your NPM and just like, you know, add the couple of files it needs to get started. Solid start is basically a client's client rendered app
[03:36:24]  in five kilobytes of JavaScript. It's basically like CRA if CRA was small, every piece, the router, everything else can be brought in. And it's
[03:36:33]  not solid start specific. It's just solid ecosystem. Generally speaking. All solid start is, is a way to get, so you can hit a switch and go SSR
[03:36:41]  true and be able to deploy it to for cell Netlify everything like that you need. It's not, it's designed to be open. It's, it
[03:36:50] 's router agnostic within the solid ecosystem. Um, but it has file system routing, but that it, we use convention as a way of driving configuration. So
[03:37:01]  it's not about like, obviously we could probably make the convention customizable at some point, but essentially the idea is that, um, everything is configurable. You can avoid
[03:37:15]  our convention essentially. So we just use convention as a way of shortcutting it. So there's a file system routing router that you can take the, the, the
[03:37:23]  configuration out of the file system router and plug into the router of your choice. Essentially. You just pass it in. So that that's like the high level gist
[03:37:32]  of it. So I'll start a library. Go on. I dare you. I thank you. I, this is the, I I'm that's my hope.
[03:37:59]  but who knows is solid start router capable of it's capable in different ways. Can stack router doesn't, isn't as at least, well, how should I put
[03:38:23]  it? It's built for react. Um, it has some great stuff. He's added granular updates and stuff. Solid's router is obviously built with solid in mind
[03:38:33] . It supports all the solids features as natively as possible, but it doesn't have tan stacks like typing ability. So like, they're just a little bit different.
[03:38:41]  If there was a solid tan stack router though, you could use it in solid start. That's, that's like my point, right? Slide it right in. Okay
[03:38:48] . So I'm going to post this up here because I want to talk about, it's been one month since we released solid start beta two and, uh, I
[03:38:58]  want to talk a little bit about it. Um, I'm pretty happy with how things have been going. There's been, you know, some growing pains with Vinci
[03:39:13] . Actually, you know what, let's take a moment to talk about Vinci. Vinci is kind of the core of solid start. It's a rapper over
[03:39:21]  nitro on NH three. And it's like, uh, Nikhil Seraph created it. The guy who did most of the first solid start beta, um,
[03:39:32]  solid core member does amazing work. He's also the guy we've had on the stream several times. He's also responsible for getting RCs to work in VEAT
[03:39:42] , um, for example. And the more I use it and follow the vision, the more excited I get about it. Because I just told you a minute ago how
[03:39:52]  important it is to me to shed convention. Vinci, everything is configuration. Like you can literally just go like, oh, I want our, I want it to work
[03:40:03]  like remix. And you just put it, you just put in some configuration. And then now your code splitting works exactly like remixes, loaders and actions. I was
[03:40:10] , I was showing it to Tanner Lindsley the other day, and I got excited about it again. Cause he, he was like, okay, well how do
[03:40:16]  I make tan stack SSR framework? And you know, he saw some demos, but he asked me about, he was working on some new code splitting for his router.
[03:40:23]  And I'm like, oh yeah, you just go on Vinci and just like drop this configuration and it'll do exactly what you want. It feels a little bit
[03:40:33]  like the, do you know what reminds me of the first time I use VEAT where it was like, you, you, you're like, you're like,
[03:40:42]  why does this, why has this thought about all the things I want? Why does it make it, let me make it feel like it's my own, you know?
[03:40:51]  And, and then you use it for awhile and then you're like, this is kind of brittle a little bit like VEAT one. You're like, somehow
[03:40:59]  they've hacked ES build and, or I guess that was VEAT two ES build, but like ES build roll up like a bunch of stuff all together. And on
[03:41:09]  the surface is exactly what I want, but you know, there's some, there's some stuff, but you know, a hundred percent that it's like the way things
[03:41:18]  should be. And then by the time you get to VEAT five, you're just like, you got the sunglasses on, you know, you're just like
[03:41:24] , that's what Vinci feels like. But for the server, like this kind of capability, being able to like handle stuff like server components, like it has a custom
[03:41:38]  setup for making your own use client, use server, use whatever kind of thing. It's all, it's all built in to this all via configuration and the bundler
[03:41:48]  handles those kind of directives that handles file system routing conventions and handles it. It's, it's, and then you, you basically take Nitro's like runtime
[03:41:58]  and bundling piece. And suddenly you're not worried about any of that. You just know that you can take these conventions and you can deploy it anywhere. So I
[03:42:11] 'm very happy about Vinci in general. There's bugs. Things that you're like, yeah, that's kind of weird, but it's coming along. Yeah
[03:42:30] , no. Yeah. This has been the joke in this solid discord for like the last little while. I know that like next has that stuff too, but it's really
[03:42:43]  funny when, when you have like, um, you have Vinci, you know, um, you know, like a system generically made for it, not just like
[03:42:54]  a specific implementation of a webpack plugin. Um, but yeah, people have been just, yeah. Anyway. Um, I actually don't know what it would take
[03:43:05]  to make that work, but it just, it is interesting. Well, whatever happened to bling is this essentially. The problem was bling was a compiler solution and
[03:43:18]  we needed a bundling solution. That's, that's the summary of it. In fact, to be fair, um, we need a bundling and compiler solution to
[03:43:27]  get stuff to work. You need a compiler to hoist, use sections or server functions out of the flow. But you need a bundler to do the proper code
[03:43:38]  splitting and you need a bundler to manage like the trees, so to speak. You don't want code behind a lazy load import not to run because your stuff's all
[03:43:49]  runtime. And like, you need to, it's a bundling problem. Bling could never solve the bundling problem on its own. Okay. So my comments
[03:43:58] , um, here. So, uh, there's four major topics, um, related to solid start that I think need to be addressed. And, um, that's
[03:44:07]  why I wanted to address this on stream since we have a few minutes. Um, first of all, thank you everyone for their patience. I'm, I'm going right
[03:44:16]  to the end here. Uh, solid start beta 2 switched the default from wait till render to streaming. We've had both modes for years. I, I thought it
[03:44:25]  was time. We were finding lots of bugs with solid SSR streaming. I am doing releases, um, to fix some of the issues around hydration with streaming. Um,
[03:44:35]  it's taking a little bit of time. I'm glad we're finally getting there. Um, you can always turn this off. You can just go SSR as
[03:44:42] ync, but I just wanted to kind of point out that, um, there are some streaming bugs and I'm, I'm thankful for the people who are braving,
[03:44:52]  uh, getting streaming to work. Does you server make bundling easier than service offering or are they the same? And the convention is the same as you, it's the
[03:45:03]  latter. It doesn't make it any easier for bundling. It's just that we needed a solution that, that included bundling. the, the syntax doesn't
[03:45:11]  actually matter. We just react syntax reacts kind of. There's a better chance that other solutions like Vinci was based on bun app. And this is where we like first
[03:45:23]  saw it. Uh, Jared Sumner came to me and he was like, Hey, what do you think of this solution? You can have server components in solid, essentially
[03:45:32] . He's like, this is a framework agnostic way of using these directives. And I was like, I was like, Oh, but we use server dollar
[03:45:39]  sign. And he's like, and I realized at that moment, I was like, the rest of the ecosystem is not going to play ball. So to speak.
[03:45:50]  Like we could build a compiler on top of it or whatever. But like, if I just want all the bundler support out of the, out of the box,
[03:45:59]  it's probably best to align with react. I'll, I'll show you some consequences there. in a minute, but I, I, I just want to talk
[03:46:10]  about the three main things coming and how this right now we're on 0.4. A solid start, um, how this is going to affect 0.5. First
[03:46:20]  thing, um, API routes. One of the funniest consequence, not funny, but interesting consequences of having, uh, bring your own router. Is it's really apparent
[03:46:34]  that page routes and API routes are different things because people can literally add routes programmatically. They can insert routes at different paths. And suddenly you're in the situation where the
[03:46:45]  file system router for the pages and for the API routes are not aligned at all. And there's no way we can even matching patterns that someone, uh, came in
[03:46:55]  and they made, uh, uh, what was it? Like a catch all API route. And they're wondering why the pages in that directory weren't getting hit. And
[03:47:05]  I'm like, it's because we have the process, the API route first, because the, we don't, if you can think of it as like a server router
[03:47:13] , essentially, um, we process the API first and then the catch all is the page router because we don't know what the page routes are until runtime, until the
[03:47:24]  point that we're actually rendering the page. We have the file system routing, but we can't, because it's completely configurable, we can't trust that that's
[03:47:32]  the final version of the routing. This is a trade-off that comes up with being, um, router agnostic. So what this means is that we're
[03:47:41]  going to split, um, the API routes or like the direct handlers out of the page routes. So essentially like the main route thing for your app, like where the
[03:47:51]  pages are, where, you know, where you like writing your app code, your server functions, all that kind of stuff going to be in one folder. And if you
[03:48:00]  want file system routings for generic handlers, that will be in another folder. And I know this is not the greatest from people, you know, trying to put
[03:48:08]  stuff side by side, but it actually makes sense from how things actually work. And if you think about it, stuff like server functions, page rendering, those are innately
[03:48:19]  tied together, whereas API routes can be separated out, like deployed to different serverless functions. Like, like they aren't, you know, a server function or a server
[03:48:30]  action case might redirect to a different, you know, server component or whatever, and like re-render on the server or feedback through the loop through some data fetching
[03:48:40]  mechanisms and stuff that I've been putting on. API routes are a lot simpler. They just spew out JSON or whatever you want. They're generic. They're just
[03:48:49]  like a basic route handler. So, um, they aren't the same. So we are going to split them out. It's just, it just removes confusion
[03:49:02]  and, um, I, yeah, it's, it's just, it's just an interesting trade off. Uh, just comment here. I love Nikhil's
[03:49:18]  energy and vision behind venti. What feels a bit off is how much it's focused on serverless for someone coming from PHP agent to node.js for the node.
[03:49:25] js use. Well, I mean, to be fair, almost all the meta frameworks are focused on serverless because that's like the path to deployment easiest. I mean,
[03:49:33]  to be fair, you can take a node server anywhere. Um, I do feel that we, we might be victims of being Vercel or Netlify users
[03:49:45] , generally cloudflare, big cloudflare fans over here as well. Um, so that might influence us. But if you look at all the, a lot,
[03:49:54]  most of the frameworks, remix might be a little bit different, but like most of them, it's all about these adapters and it's very serverless catered because
[03:50:00]  basically if you want a lowest common denominator here, we have to assume serverless essentially. Um, so yeah, there's some convention questions here about like having a names
[03:50:16] pace path or what folder naming. I'm very open to people joining this discussion, um, to give their input. Uh, base path fiasco. Uh,
[03:50:39]  are you purely thinking about the web server as a web server or a server? Sometimes you want the same route path because of yeah, I'm not sure actually what that means
[03:50:58] . Do you think there'll be SSD support? Yeah. I mean, Dax is already looking at it. So I imagine it'll be coming soon. The thing
[03:51:11]  is you literally, I think our start command literally just runs node right now, straight off the bat. Um, like if you, by default, if you build salt start
[03:51:24]  project and then just run node.output index.mgs or whatever it runs a node. Okay. Um, but there's a couple other topics here that are
[03:51:35]  worth getting into. Um, are you talking about using extensions to differentiate them? Or like a content type. It's interesting. I, this, this might be tricky
[03:52:02]  in general, but yeah, content type. Yeah. Yeah. And especially with the desire for splitting, uh, API routes, that kind of decision would have to happen
[03:52:22]  before you even hit like our application server. I don't know. That's interesting. Okay. Except header. Okay. But yeah, the, the content type.
[03:52:38]  Yeah. Yeah. Yeah. Yeah. I mean. That I think that's tricky in general. I'll keep that in mind if there's an easy solution, but
[03:52:57]  it's not the priority. If people can't. Yeah. App router for the way to combine them, but app router also doesn't, isn't router agnostic
[03:53:13] . So yeah, that's interesting. Okay. Moving on here. Yeah, we actually, I think we updated this in release. Uh, we're still working on
[03:53:34]  this, but just for, so people know we've had some issues with base path handling. There's a difference between where your assets go and a difference between what the server
[03:53:43]  thinks the base are. We didn't realize this and we treated everything as a base path. So I'm expecting this to be updated in, uh, Vinci coming
[03:53:52]  up very soon. One thing I do want to mention to people, though, is I think I might have overstepped in solid.js router version 0.1.
[03:54:03] 0. What I mean is I pushed everything back to lower anchor tags. There's lots of nice benefits of using lower anchor tags. It makes the templates larger. It
[03:54:12] , you know, there's no confusion in whether this is like a client component, it's just a link. The, and, but the problem I realized only after
[03:54:21]  the fact is a lot of routers have a way of setting the base path and we have no way to interact with the URL directly if we use lowercase anchor. The
[03:54:29]  base path can be applied to uppercase anchor, but not to lowercase anchor. So it means it basically makes the base path argument to the router useless if you use
[03:54:40]  lowercase anchor. And I don't know if that's acceptable. I mean, I was avoiding it because I wanted to keep this as a client component. If,
[03:54:47]  when we get to server component type stuff and keep this as a, you know, server component essentially, like we didn't need to send client stuff for the lowercase anchor
[03:54:55] , but resolving base path seems important. I don't think it's a feature that we can just remove because it puts the onus on the developer to go and add the
[03:55:04]  base path to every single URL in their app. Um, usually it's like an environment variable or something, but it's still like you don't want the person to
[03:55:15]  do that. The only way to keep anchor lowercase and not force people to like run it through a base path function or something like that would to be use the compiler and
[03:55:27]  a special directive kind of like Svelte does. That's just not us. So I think sadly, we might have to go back to capital A here as a convention
[03:55:37]  in the router moving forward. I just wanted to put this out there. I don't know. This was an oversight on my part. I was so anxious. Everything
[03:55:44]  was basically, I can't have all three things. I can't have progressive enhancement working. Um, or I can't have base path automatically applied. Um, essentially,
[03:55:59]  because we could just have the lowercase anchor lie and use the route interception to add the, make it the right path. Obviously that's awkward when you hover over
[03:56:09]  links and they're the wrong URL, but it would work without intercepting it. But then if there's no JavaScript on the page, then it would link to the wrong
[03:56:18]  place. And yeah, so there's, there's just like no winning. I can't, you can't have lowercase a progressive enhancement and, uh,
[03:56:32]  uh, base path. You can't have all three. Like we already have capital A. I just, I just was, uh, I was like, we never took
[03:56:45]  it away. People can use it. I was just pushing all our examples and everything to lowercase a. I think it's weird to have both. If basically,
[03:56:56]  yeah, I don't know. Maybe this is what people think. Maybe it's fine to keep lowercase age. If you know that you're never going to, uh
[03:57:03] , do base paths. We, we've, we, we do have both. We, we, we never took it away. I just pushed the lowercase anchor
[03:57:11]  as working. We, we had other ways to force regular browsing, like using target or rel external. Like there's, there's other ways to opt out of the anchor
[03:57:23] . I was never really worried about that. It was more that, um, there's a lot of really nice benefits to using lowercase a. In fact, can I
[03:57:34]  show you one of those benefits you get? This is the kind of stuff you get as a, as a framework author. Pick picture this picture, this fun one.
[03:57:42]  Here's a fun one. Okay. No, not that one. That's a type script thing. I don't clear about that. Top level anchor breaks out of SV
[03:57:55] G namespace. Okay. Here's a fun one. See how this is black. There should be a red square in it. If I get rid of this show.
[03:58:07]  There is a red square in it. Okay. And it's a link. See that? Do you know why this works? Because an SVG element, there is
[03:58:17]  an SVG anchor tag. Okay. It is not the same as an HTML anchor tag. So my problem is when you make this a show. If you look at
[03:58:28]  the compile output, you can kind of understand what happens. Let's remove this for a second. Okay. I'll keep the show up there first. You can see that
[03:58:35]  the anchor and the SVG are in different templates. So it knows this one's SVG. It does not know that this one's an SVG. If I
[03:58:43]  remove the show here and make it part of the same template. It's like, okay, well, it's in the SVG. It's the same template. Now
[03:58:51] , why does this matter? If I get rid of the anchor and use a rect, rect actually works. And you know why rect actually works? There's an interval
[03:59:06]  in here. That's why it's flickering. The reason the rectangle actually works is because we can see that rect is an is a XML element or SVG. And
[03:59:16]  we actually wrap it in an SVG element when we clone it. Okay, whatever. And then we pull it out. There's different ways to solve this problem. I
[03:59:23] 'm reviewing them right now. But generally speaking, we know that a rect is an SVG element. So it always creates it properly. However, an anchor tag could
[03:59:33]  be either or. So it's one of only four elements that we have, I think, that can be either or. But, you know, we have to default it
[03:59:45]  to being an HTML element. It occurs to me that I could look at this template and realize, because this child is an SVG element, that this should be an SV
[03:59:55] G. But what if this was just text? Hi, it's not very easy to know that this should be an SVG. We could say, okay, well
[04:00:04] , what if you analyze the whole thing up to function scope? Sure. Then you could probably figure it out. But like, generally speaking, each context is analyzed independently.
[04:00:14]  Like, what if this is an expression, you know, like not there. Like, what if we're entering in and out? What if there's a callback
[04:00:24]  here? You know, let's say I can still solve this. What if I pull this out into a capital A component? There is basically no way that capital A
[04:00:41]  could know whether it's used in XML or SVG or not. So like, this is, this is one of those things that like, there, there isn't
[04:01:13]  a great way to solve it. The way you could solve it is if you like, basically know that you're in the scope of an SVG and at runtime,
[04:01:23]  create the element the right way based on what the current running scope is. I'll tell you right now, Svelte doesn't even do that. Svelte
[04:01:33]  just analyzes the template, right? React probably does the scope type thing because it's, it can just, it can process the, it can render it all and then
[04:01:43]  process the VDOM in one go. For us to do this, we'd have to invent a context because like picture what would happen if, sorry, let me go
[04:01:53]  back to the issue here. Picture what would happen if you put a show component inside an anchor tag like this. You'd have to be able to like start and stop
[04:02:06]  the SVG again. Like, this is harder for me to explain, but like my, my point is like, if this was just a lowercase a, this would
[04:02:17]  be way, way simpler. Just putting it out there anyway. Like compilers have limits on the scope of which they can analyze. So it's always possible to
[04:02:31]  find a way to break the, uh, a compiler. If you were, if you depend on, um, scope analysis purely, but runtime, uh, approaches are probably
[04:02:43] , um, much more expensive. Basically you could never know what it would be inserted with. So you'd have to check for the X, the SVG scope,
[04:02:57]  even in an app that has no SVG. Do you know what I mean? Like, and you'd have to maintain that scope. Being able to start and stop it
[04:03:06]  when partials re-render. So my gut is we just say that like, okay, anchor is a weird special case. And we go with that, but I
[04:03:19]  just wanted to kind of point it out there that if this means that right now any capital anchor tag in SVG generally just doesn't work because, and as I said,
[04:03:32]  same deal with, with Svelte or whatever too, like this isn't solid specific. it's just, it can't know, um, from, from compiler
[04:03:41]  analysis. Who could check? Because the element gets created without knowing about its parent and then inserted into its parent. right? Like there's. No, no, that
[04:04:03] 's not enough to accept it. This is just a completely unrelated issue that just happened to happen, get reported this week. So I was like, I was like,
[04:04:11]  I was just, I was just, I wanted to throw this out here because like. This is just an oddity. Any other element, it would be fine. It
[04:04:24] 's just really, we like, yeah. This is part of that. Like you can never win, um, part, but yeah, just, just for people's information
[04:04:38] . If they're interested in why I went one way and then completely back traced in the next release, I apologize. This is, this is a oversight. Well,
[04:05:04]  at least it wasn't over three major versions. Um, yeah, I, I know where you're going with that. Um, anyway, last topic I want to
[04:05:26]  talk about, uh, with solid start before we get into this week in JavaScript is, um, kind of realizing that we have to take a stance here on wrapping or
[04:05:40]  not versus wrapping. What I mean by that is. Solid start uses V config, but it's not really V config. It's actually V config passed into multiple Vin
[04:05:52] ci configs. Which means certain properties don't work because Vinci handles it, which is fine. I can live with that. And there's certain other side effects
[04:06:05]  like you can have multiple instances. Builds use the same plugins. So you actually, you kind of want to wrap plugins in a function, but V doesn't support wrapping
[04:06:18]  plugins in a function. So, and, and there's a split between V and V test a bit because like you set things up differently. To be fair, we
[04:06:30]  could just name it solid config or start config, but it is basically V config. So I didn't really see a point, but it's something that I'm getting increasingly
[04:06:39]  sensitive to when we want to solidify for 1.0. Cause my point here is I actually think from features are pretty good. Um, we're, we're approaching
[04:06:47]  RC, you know, pretty quickly here. And my similar concern is with start dot server. It's basically nitro config, but it's again, not nitro config
[04:06:56] . Cause we don't do everything nitro does because Vinci only uses nitro, um, for your final build, not in dev. So yeah, I'm
[04:07:10]  looking for opinions or thoughts here. I don't know, uh, you know, any big, uh, you know, nitro fans out there, people who care about
[04:07:21]  these kinds of functionalities. Yeah. Like again, not wrapping the smarter idea. Cause essentially this is the Benton. You're exactly the kind of person that I
[04:07:32]  want to kind of blow the trade off shoot. Cause I knew, I know for sure you'd be on the not wrapping side. Um, I know that you're talking
[04:07:41]  about anchors, but actually I'm hoping you have an opinion about this. Yeah. Yeah. Yeah. I think this is a fair thing. The only funny thing
[04:07:53]  is it's, it's basically V config except for like a couple settings and those settings might actually get supported in the future. So there, there is, there is a
[04:08:05] , there is a, there is a, there is a question there, but we have the same problem with start server being not actually nitro. So there's a
[04:08:14]  big problem. So there's a big problem. There's a server utilities problem, right? Right now we re-export everything through solid start. Instead of going directly
[04:08:22]  H3 and largely that was because Vinci did the re-export because Vinci basically controls the version of nitro reuse and H3. So it didn't
[04:08:33]  make sense to go straight to it, but it's also, um, there's like some tension here a little bit because right now I kind of mashed H3 event and
[04:08:44]  solid's event together, which is awkward. I think that's a mistake. Solid needs its own event, you know, like, because it needs to be able to work
[04:08:53]  in the ecosystem libraries. That's how we can be agnostic server agnostic or server agnostic because we have our own idea of what like a server
[04:09:02]  request looks like. It shouldn't be H3s. They're separate, but it's awkward when you, you, what are you going to do? Like go like
[04:09:11]  event dot H3 every time. One way to, you know, here's my example. One way to solve this would be async local storage. Cause then you
[04:09:21]  could just get rid of this and just go set header, you know, name value and the event could come from a sync local storage. Um, obviously there's gaps there
[04:09:34]  today. And there's a reason that H3 doesn't support that yet though. It's on the roadmap. Similar. We could, I figured out a, you could
[04:09:42]  use a trick or like a special symbol where non H3 events could be passed to H3 handlers. Um, and, uh, you know, still work.
[04:09:52]  Uh, by looking for a special symbol, that's how rx.js compat works. There is a performance, slight mild performance consideration to this. But yeah, like
[04:10:03]  with eight, with the problem is if. Async local storage doesn't work and you don't accept the event, it's kind of awkward because like middleware and
[04:10:14]  stuff stuff that's innately async perhaps won't work properly. It's always fine to, to like, I have some, like right now we work on stack bl
[04:10:25] itz, um, without async local storage, because we can kind of depend on the fact that like at the beginning you have access to it. like when we,
[04:10:34]  you know, like most people don't do something async and then fetch our event. You can always hoist to the top of the context, the top of the API
[04:10:42]  you're using, the top of the server function you're using. But, um, when you pull it up to the middleware level, it's, it's troublesome
[04:10:50] . So there's like a temptation here to wrap h3 and functions and basically manage all these cases ourselves until some point in the future where h3 will support it essentially
[04:11:07] . Because otherwise trying to shift like this right now is really awkward. There's no like single purpose solution. And I understand why something like h3 wouldn't do that
[04:11:25]  today. Right. But I mean, you're not importing it from h3, right? This is, this is sort of where I started kind of working on a bit
[04:11:40]  of a, like bit of a proposal. So like we, we could do this, right? What I'm saying is we, instead of being exported from solid,
[04:11:57]  we note that this is a Vinci thing. And essentially the, I think one of the challenges we have here is we've been talking a lot about nitro. We
[04:12:06] 've been talking a lot about h3, which I would love to bring up to the surface, but if we can't bring it up to the surface, we shouldn't
[04:12:12]  be pushing people towards nitro. We should be giving like pointing people to where the thing is instead of saying like, go look at the nitro docs, which we
[04:12:20]  can't fulfill. And in fact, if you go look at the nitro docs, it looks like a very different thing. Auto imports. We don't do auto imports
[04:12:31]  routing. It has all these like hello.get. We don't do any of this, right? Like completely different conventions, all this stuff. auto imports, like
[04:12:43]  in the examples, you know, like maybe we shouldn't push people to nitro and instead push people to the consolidated, consolidated API of Vinci, so to speak.
[04:12:56]  That's, that's kind of where I'm sitting at right here. I would love if I, we could expose the stuff, but it doesn't make sense to,
[04:13:03]  um, h3 might at some point, but we get in a pretty awkward state if we wait for it. Nitro? I don't know if we could ever
[04:13:19] , I mean, it's interesting question. Could we ever just support its conventions? Like we want to have our own conventions. That's why we use Vinci.
[04:13:29]  We do store it inside the other event, but the thing is. It's what you're saying is like, you, you have to go both ways because not all places
[04:13:52]  you have access. Like for example, in a server function, you get request event, you're getting a solid event. And then you have to get back to the
[04:13:59]  h3 event essentially. So the question is like when you're in middleware, which event should you be getting? It's, it's interesting. I do think
[04:14:17] , I do think there is an argument for pushing the h3 event forward in some of the server space stuff, but it would never be consistent. Whereas like, if you
[04:14:29]  look at this proposal, when async local search actually works, you never actually see the h3 event anymore for me, it's simple decision. It's around asking
[04:14:56]  who owns the specification and the signature of the data you expect or to find the spec and data should give me the capability of dealing with that data because those. Yeah,
[04:15:03]  basically what I'm getting at is Vinci has kind of opted to own that level. So we should be nodding to Vinci essentially. If they're the ones who
[04:15:13]  decided to diverge from pure nitro, um, then that's who gets the nod. And I think that's essentially, even though that means that there's some underlying
[04:15:23]  thing that, uh, might change it's really on, on them, I think. Yeah, that would be the best case, but I don't see that happening
[04:15:36] . I think they're very happy with their conventions. It's just, it's odd to me because it makes nitro. Kind of unlike all the rest of on JS
[04:15:44] . Cause it like, it has file-based conventions and stuff. That's very. It's it makes it trickier. I I'm the thing that always goes
[04:15:54]  good for nitro is everything that's convention-based can be configured. So we should be able to get around it. And it's important to us because we want to
[04:16:04] , we want to, you know, use our conventions, use our approaches. Yeah. I was kind of downplaying Vinci early on because, you know, I
[04:16:17]  give a lot of credit to where credits do. Nitro is incredible, you know, but, um, it, if Vinci has wrapped, then we follow suit,
[04:16:29]  I think. And that's basically where the conclusion I came, came to, right? Like there's, we won't support all the nitros stuff. It's just
[04:16:38] , that's how it is. Right. Like in Nux, they have a server folder, which is like, you have Nux over here. And then you
[04:16:47]  have nitro over here in the like two worlds. That's not really what we're going for. Vinci is all about you setting your convention. So we have to
[04:16:57]  trust in Vinci, which means that Vinci's got some work to catch up with, right? It's not as, uh, proven as nitro, even if
[04:17:05]  we can take some of the good parts of nitro. So yeah, this is just something that we have to consider as part of stuff. Like even the docs are
[04:17:15]  missing pages on certain stuff, but, um, you know, that's a lot of pressure to put on our, our man, Nikhil. But I think the,
[04:17:25]  the, the thing we have to walk away with here is, as I said before, at the beginning of this, what I was very excited about Vinci is Vinci
[04:17:32]  allows us to build exactly what we wanted. We looked at bike, we looked at v plugin SSR. I kind of even saw nitro and skipped over it,
[04:17:40]  you know, and it all for the same reasons, right? These guys have their own conventions, their own way of doing things, which is fine. But Vinci
[04:17:54]  actually lets us deliver what we want. It's that simple. So yeah, it was actually really tricky. I had a conversation, uh, this conversation, this discussion helped
[04:18:05]  me a lot talking to people. I talked to a bunch of people, the community, even Tanner, you know, get his alignment. And I think we're all,
[04:18:11]  we're all on the same page. Nikhil's approach or Jared Sumner, if you prefer to trace it all back to bun app is, is the way things
[04:18:18]  should be. So, you know, we'll just kind of work through it. There's probably technical shortcomings, hacks, all the fun stuff. Reminds me
[04:18:27]  of the early days of beat, but this is exciting. You know, it's, it's, it's, it's like, this is the way it should be
[04:18:36] , as I said. Thank you everyone who's participated in the conversation here. It helps me, uh, us a ton to make these kind of decisions and feedback.
[04:18:47]  Um, yeah, no, anyway. Does this mean it additional? Well, that's the question. Docs are an interesting question when you have something like this. We
[04:19:00]  saw this with Crate T3. Who's responsible for documenting what? If you wrap everything, then you kind of own the docs for everything. I actually, we
[04:19:13]  have a choice of how far we document into Vinci. But in our, in an ideal case, we actually, I think we, we only document. Like this doesn
[04:19:23] 't actually change it. The stuff that we appointed Nitro or maybe H3 or whatever, we just point to Vinci. So it puts more pressure on Nikhil.
[04:19:33]  But generally speaking, because Saul's start is not taking over any more additional onus. Um, I think, I think we get, we are free to decide how
[04:19:45]  far up we want to document here. Um, we're not taking on anymore. Right. So truth, truth of the matter here is like the, the biggest part probably
[04:19:59]  for documentation is the configuration. The Vite config is probably the most that we're using or start config is probably the most specific to us. It's not just a
[04:20:09]  Vinci config. You won't find that in Vinci. So I think other than the config, there, there isn't really many other imports or whatever from solid start
[04:20:20] . Let me pull up, let me see fork. Solid, remind me later. Let's find solid start. Let's pull the latest. Jump way ahead. Um
[04:20:37] , let's go to main here. And what I, what I want to show point out here, we go to, if we go to main, is that where
[04:20:53]  this is still there, delete, right? This is still there. Delete. Is that for the most part, the only things that you actually end up exporting. Oh,
[04:21:11]  this is, is this on the, on the Vinci branch with the second. Oh, let's go main. Pull main. Sorry. My bad. The only
[04:21:27]  things that, that we actually export from solid start are generally the entry stuff, but it's for the most part, the only stuff that needs to not even all of this
[04:21:41] , it's basically HP status code, HP header error. this is hidden. This is internal. So you don't really see it. Client only, um,
[04:21:50]  file routes, this new get helper. Maybe there'll be a couple others. Um, but like mostly, and then yeah, the middleware setup needs document. I mean
[04:22:05] , we can go through the docs and point gaps. There's tons of those gaps, but most, it doesn't, there's, there's only a, there's
[04:22:11]  only maybe a dozen exports from solid start. Oh yeah. Yeah. Yeah. You were talking about this way. Well, it's because those middlewares are like
[04:22:26] , they're, they're called hooks and there's like almost no documentation for them yet. So yeah, I, I think we're all open source trying to do our
[04:22:34]  best with docs. The people who can afford docs are the big companies. It's just the way it is. It's hard. But what I, yeah, I
[04:22:43]  mean, while I'm here, I can show, um, I can show, uh, one more little quick thing here. It's in the experiments demo. Um,
[04:22:52]  I made, um, a cacheable, uh, uh, server function. See, all right, I should do PMPM I here to get the latest to
[04:23:07]  the browser. I added a JSON helper purely for the fact that I, that I wanted, I think people will be excited about this. You know how we, you,
[04:23:15]  you used to only be able to throw redirects or, uh, reload or JSON or whatever. We didn't have JSON before because that I actually fixed the type script
[04:23:25] . So now if, uh, I think maybe you guys will find this example a little bit. Um, I'm using, I example experiments dev, I created a server
[04:23:41]  function. I wrapped it in get, which, um, makes it a get instead of a post. I'm, I'm still playing around a little bit on figuring
[04:23:51]  out the best patterns here, but now it's a get request into the post request. So it's cashable. And then I set a cache control header for 60 seconds
[04:23:57]  and this returns JSON. Of course it's not normal JSON. It's an object with a, that returns a promise that fills the name you sent through it a second later
[04:24:07] . And so essentially what we're doing here is we're calling hello, John. Then we're taking the data and we're console logging. And then we're awaiting the
[04:24:15]  hello on it and console logging. So we're kind of throwing a promise over the wire. Right. And, um, we're also caching the response. So
[04:24:27]  let's, let's open that up. Okay. Go to good old local host 3000. We're in dev takes a second. Okay, cool. Network, uh,
[04:24:41]  or console. See, hello. You see it. And then you see John come in later. Um, and yeah, there's all the JavaScript. Let's refresh
[04:24:55]  the page. You can see it again. Hello. Wait a second. Then John comes in right now. If I turn off, stop disabling the cache. What
[04:25:04]  you're going to see is that when I refresh it. They come in at the same time, uh, because it's a cache response. Um, so it just plays
[04:25:15]  back the network. Um, just using HTV cache. This isn't using our cache API or solid serialization or anything. I'm just playing. I'm basically in
[04:25:24]  the client making the call again, if this was hydrating or whatever, part of a crit async call, you wouldn't see that. But if I go to
[04:25:30]  the network here and I look at fetch, sorry, you can actually see that this now is a get request. Um, this is longer or sorry, not this one.
[04:25:40]  Uh, yeah, no, this one, it's a get request, um, that passes in this information. And then the response is one of these fun self resolving
[04:25:53]  promise things, executable code. Um, but that streams in as it completes. So it gets cached. So you see it's from disk. If I, if
[04:26:02]  I refresh the page right now, it's been 60 seconds. So we got a new response and it took about a second, which makes sense. If I refresh again,
[04:26:10]  it's there immediately from the disk cache. So, um, yeah, cacheable server functions now on the fetching side. Um, so, and what's cool
[04:26:21]  is as you guys can all imagine, you don't always have the right get solid router cache function automatically uses get. So you don't have to worry about that. So
[04:26:33]  if you use our cache and action APIs, you automatically get, um, get, so it's all good. It's all good to go. So, um,
[04:26:43]  yeah, you just, yeah. But yeah, what's cool is look at the types. This knows that this, oh, why is typescript being this? This is
[04:26:55]  the fun part where you're all like, look at the types. It's because I didn't refresh typescript server after it's updated the router. Okay, let
[04:27:03] 's, let's, let's go here. Okay. Okay. It knows that the is hello, a promise string. And the reason it knows this is because, um
[04:27:18] , JSON returns the type of, of this, right? It returns, like it's the type of not the response. It's that tells it's the type of
[04:27:34] , of the data you pass to it. Similarly. Um, if I go into like, oh, the with auth example, for example, we can now go into here
[04:27:46]  and this was a little bit awkward to get like the, this working. Cause if it, I would try catch it. And if something through, like if they're like
[04:27:55] , if I tried to like throw a log out or something, it would, it would get caught. And then it'd be really annoying using throw. Sometimes it's just
[04:28:04]  easier to return. Right. And, but the problem before was when you returned a redirect, it would mess up the types. It'd be like, oh no, get
[04:28:11]  user can return a response or, um, or, uh, um, or a, uh, a user. But what we managed to do now, um, is
[04:28:28]  redirect is of type never. And it actually, it actually excludes it from the types. So, um, redirect, um, reload. JSON don't mess with the
[04:28:41]  types of your, of your actions. Um, essentially, even if you return them, um, they're basically kind of voided out. So yeah, all these
[04:28:49]  pieces working together quite nice. Um, yeah. Yeah, no, I, I, I, I, this was a gap. So I'm glad. So yeah,
[04:29:05]  uh, solid start 0.411 supports this stuff. Plus it has some bug fixes updated from Vinci. So yeah, um, never say never funny anyways,
[04:29:20]  stuff's looking pretty good. Um, yeah. So starts coming along. Um, I think our plan, one of the cool things about this, uh, API change,
[04:29:32]  sorry, uh, to Vinci is it removes the circular references. So we'll be able to like simplify the exports and solid, get rid of the entry. Um,
[04:29:40]  there'll be a release probably in the coming week for 0.50, which changes the API. I don't know if we can get, uh, the, the
[04:29:47]  Vinci wrappers yet, but once we go this direction and export from Vinci, it'll be up to Vinci and we don't have to worry about it anyway
[04:29:55] . So, um, yeah, I, I, I think this is the course. It, it, it, it is a bit, it is obviously a bit
[04:30:07]  tricky cause you know, as I said, it's better not to wrap where you can, but sometimes, um, you don't have much choice. And I don't
[04:30:19] , I think with nitro, we're kind of stuck having to wrap just because we don't want to, we can't, we don't want to deal with
[04:30:26] , we want to set our own conventions. And I, I think that's just the reality of things. Okay, cool. Uh, let's do this week in JavaScript
[04:30:37] . Uh, give me a second to get all set up. Awesome for everyone who is still here. This has been an amazing stream. Um, so many people here
[04:30:46] , so many gift subs. All right. Let me get set up here for this week in JavaScript. Two seconds. How's everyone else doing? Still alive? Still awake
[04:31:02] ? Feels good, man. Yeah. Yeah. Good time to be on, to be on Twitch. Thank you, Patrick JS. Eating dinner. Yeah. I need
[04:31:21]  to do that pretty soon. I'm West coast. So I'm the tail end of the North America train at least. Okay. Talked about that. Yeah. Okay
[04:31:35] . I'm just setting up my Twitter. So give me a moment. Um, and we'll be set here. Okay. And then duplicate. We have solid JS
[04:32:02]  and then bookmarks. It's always just the three areas that are. Do you have any good bookmarks? Only a couple. We already talked about them. I
[04:32:17]  think though. Ironically. That's fine. We'll bring them in. All right. Sounds awesome. I'm glad you guys all connected. I'm going to
[04:32:43]  have to watch the first four hours later. Yeah. Yes. Thank you, Patrick. JS. It's midnight here after work, David. I'm excited. Good.
[04:32:56]  I'm excited too. All right. Cool. Um, okay. I think I got everything I need to scroll in down. Um, okay. Cool, cool
[04:33:23] . Okay. Let's get the banners going. And I don't know why I do this, but let's do it anyways. Let's talk about this week in
[04:33:36]  JavaScript. Um, I've been really heads down on development as I've been the last little while. So I feel that the section is, you know, maybe not
[04:33:48]  as interesting as it could be. I probably missed a whole bunch of the drama. Yeah. Some stuff's been going on because clearly over the course of the stream since I
[04:33:58]  last checked, I have 43 notifications and 22 on, I think on solid JS. So yeah, who knows? Um, let's actually, no, nevermind.
[04:34:08]  This is just outdated browser. Anyways, let's, uh, let's talk about a few of the things that caught my eye this week. To begin with, we already
[04:34:25]  talked about this a bunch of stream, but I think this was really the starting point for me this week. I left the stream last week, you know, talking about
[04:34:33]  HTML partials, not getting into the data fetching stuff as much as I wanted to. And I realized, you know, what led to me writing that article I,
[04:34:44]  we talked about earlier that like, because of the difference between server component and client component loading, there's like still trade-offs. Like as much as, uh,
[04:34:57]  Vercel and Nex have been focused on the server component stories, a bunch of people are still just going to tend to stack query things. And like, unless you
[04:35:05]  handle it properly, you're just going to end up with all the same waterfalls and you end up there inevitably as your app gets more complicated or if it's, you
[04:35:12]  need the, you know, heavy writes. Right. Um, and so the way I described it here is like server components are like a page only had a single get
[04:35:21]  end point. Every mutation grabs everything, a write heavy workload or lots of independent touch points struggles under it. Luckily you can still do client data patterns plus SSR, but
[04:35:28]  that means you still solving waterfalls. It's like the old app versus site argument. We blur the boundaries better now, but we, and we can stick them side by
[04:35:36]  side. We have the flexibility to choose the right tool for the job seamlessly, but we haven't produced a universal model yet. And that's fine. As long as
[04:35:41]  we understand that that's, that's most of what I wanted to see. I got in a good conversation with Dan Shipper cause he was talking about how like, you
[04:35:49]  can probably like pass data from the server functions. I think I actually asked Tanner about this because I was like, he's like, yeah, obviously that works, but there
[04:35:59] 's an interesting struggle on source of truth here in terms of synchronization, because like, say in a component model, like react where you re-render, you don't
[04:36:07]  know why you re-rendered necessarily. Right? Like if, if a component could re-render because a server changes its prop. So you get new initial data
[04:36:19]  from the server, so to speak, that can also be different from data and validation due to tan stack saying, Hey, I need to update this specific piece of data.
[04:36:31]  So when you re-validate, how do you know it's the prop you grab or the tan stack data that you grab to merge it in? I'm
[04:36:39]  not actually sure. Um, because the initial isn't just initial because the props can update with server components. So yeah, it's, it's, it's an interesting
[04:36:50]  thought. I think there's a lot of room for patterns to still grow here. It's fine. We haven't worked through all of these, but I do think
[04:36:58]  that, um, we can't just ignore one as much as like RSCs make us want to fetch everything on the server. Like there's a, there's situations
[04:37:09]  where it doesn't fit necessarily, or that's more complex. And, you know, in a lot of ways, this realization was part of my semi, you know
[04:37:18] , crisis here looking at this because I was like, now I just have my old React app beside my server component app. Like I didn't, this is more, not
[04:37:29]  less. I didn't, did I actually simplify anything? Not really. I actually made it more complicated and it's tricky because server components are a simple model for arguably
[04:37:40]  simpler model. But if the requirements forced me back into the same zone and now I have, you know, what I had before plus just more, it's not really doing
[04:37:51]  it for me. So this, you know, just kind of a thought exercise, but I think, I think, um, I think there's still a lot more room
[04:38:02]  on the client side part of server components, um, more looking at how they unify that model. All right, let's continue. This was a bit of a treat
[04:38:15] . Um, Ben Lesh on a, on a podcast said, oh, what did he say? Let's see if we can follow JS is definitively better than React
[04:38:28] . Like, I don't think anyone really questions that, right? Obviously he's just getting a, like a hot soundbite. But I don't think a
[04:38:39]  lot of people understood my response tweet to this. Um, which is fine. I was being a bit sarcastic, obviously. I don't know if you people who follow
[04:38:50]  the stream know what I'm talking about. There's, there, there's been, there was a wave of like responses when solid started getting a little attraction and people talk
[04:38:57]  about signals that they're like, well, I'm not going to touch anything but react unless it's 10 times better. That was like this kind of statement, but few
[04:39:05]  people wrote articles like that. Like it would need to be 10 times better. Um, I'm just jabbing at that. Honestly, I, I will, nothing
[04:39:15]  is ever 10 times better. React wasn't 10 times better than angular.js. Like it can be better across multiple metrics, but nothing except for 10 times better.
[04:39:27]  I'm going to jab at this for till the end of time. You know, just that that's all there is. I got some really nice, honest responses where people
[04:39:36]  are like, you know, both sides are improving, you know, a real, you know, honest look at like how good solid is and where, you know,
[04:39:44]  docs are weak. And, you know, you know, I was amused at this. I wonder if 10 times better was enough to break inertia, 10 times smaller bundle
[04:39:54] , 10 times use. Cause the funniest thing is in many cases, solid on pure metrics has been 10 times better than react at various times at different metrics, 10 times faster
[04:40:01]  SSR, you know, 10 times smaller bundle, 10 times this. So like the whole 10 times better thing is kind of funny. So it's maybe it's
[04:40:09]  just my personal joke. Um, but yeah, I had a lot of people saying nice stuff about solid in here or being critical on, you know, specific shortcomings.
[04:40:17]  We're aware of it. I understand. I I'm just, I'm just gonna, I'm just gonna play with it, you know? Um, so I didn
[04:40:27] 't mean too much by it. I just thought this quote tweet was cool to see Ben was obviously RCS community. Um, yeah, I, I, I don
[04:40:39] 't know. Like there are trends that happen in web dev in the same way when react came out in 2014 and the whole ecosystem worked around it in terms of technology, not
[04:40:48]  just adoption, but technology, everyone picked it up. The same things happen with solid. People aren't just adopting signals. They're adopting solids, rendering patterns. Like I
[04:40:56]  think we can definitively say that solid is one of those points on this, on that graph in the same way react was in 2014. What does that mean for adoption
[04:41:07] ? Although the other stuff use, it doesn't matter, but we can say that solid majorly impact the, the is majorly impacting the direction of upfront and web development
[04:41:17] . Definitively we can say that, but yeah, I, I can still be cheeky about it. Okay. Okay. I'll, I'll bite.
[04:41:32]  Banker worked at react depths. The rate almost cost us 10 million in the lawsuit because an infinite loop request token. Wow. That's anecdotally, we,
[04:41:45]  we, I, it's, it's always interesting, um, to, to hear stories like that. Um, I think it can happen in any system to be fair
[04:41:54] . It's just, you know, real consensus facilities, you can log in monies. Yeah, that's fair, does it make react feel like go to,
[04:42:17]  I know what you're getting at. Cause at one point Dan Abramoff compared signals to go to statements. Um, I did take slight offense to that. Um
[04:42:26] , but you know, it's all part of the same thing. Right. Because if you get a 10 times better tool that makes you a 10 times better developer. Yes
[04:42:38] , there is proven science, right? Everyone wants to be a 10 X developer. So you have to choose a 10 X framework to have a 10 X, to be a
[04:42:47]  10 X developer. Yeah. So 10 X tool, we get one X developer, but yes, this is a part of that part is inherent to the rerender model
[04:43:09]  bit, right? You, you separate the state updates from the, uh, the encapsulation modularization, then you don't have that problem. You could still cause state
[04:43:19]  updates to produce loops, to be fair. I just want two X me than another me to make food. I do think 10 X is possible. It doesn't make
[04:43:36]  10 X fewer decisions during development since that's what takes time and not the framework. Yeah. So yeah, I, this is kind of making fun of the whole, like
[04:43:44]  something being better because of the truth of the matter is like, it doesn't matter if it's, if Saul is better. Like, I don't even think I
[04:43:52] 've said this before. I, you don't even get to be in the conversation unless you're in a zone where you're arguably better at multiple things. If, if
[04:44:02] , if you weren't better, there's no point to even look past the income, but even, but for anyone you like, you have to push the expectations. So
[04:44:12]  yeah, I'm also on Ben, Ben is just being technical here. I love, uh, like his previous thing we've covered last week when we talked about the
[04:44:20]  UI function of state, like your people like Ben, people like myself are always looking for like where things should be heading. Like what, what are the pieces that go together
[04:44:30]  and where we're sitting right now, obviously signals look pretty hot. Why isn't my notifications? That's so weird. I wasn't on my, I was on
[04:44:42]  my profile page. That's annoying. Okay. Continue going. Okay. I'm going to get into this conversation in a minute. Let's, let's, let
[04:45:00] 's take a look at our, uh, our bookmarks for a second. Cause I only had a couple of here. This one, um, this one here was related
[04:45:10]  to the conversation today. I should have pulled it out earlier. Um, but it, it's interesting. It's very relevant. I should, but it was like
[04:45:21] , he's talking about going from rails to next JS in this post on Reddit. And what he said is after three plus years developing in the react ecosystem, using next JS
[04:45:36]  to build my startup, I ran into an issue that I had a lot of files in, in one single project one week without coding in it. I was already lost
[04:45:43] . I'd spent almost one entire day trying to figure out stuff as for every project, my main focus of the project succeeds and then worry about coding minor issues, you know
[04:45:51] , later. So it's all about shipping the MVP. It's funny to me though. It's like, I don't actually don't associate next with having lots of
[04:45:57]  files. Like to a certain degree, you know, page or sorry, app router pushes more files, but like, generally speaking, like I remember the first time I opened
[04:46:06]  an angular project and I was like, Oh, you like, if you look at to do NBC, you could like the react versions, like three files on the angular
[04:46:14]  file version was like 26. I'm sure the, like the RSC version of whatever, it'll be like 12 or 15 files, but he's talking the last three
[04:46:24]  years. So I doubt he's just talking about the, the app directory. Um, anyway, let's look, it is interesting though. Cause the, the, the
[04:46:36] , the file complexity being a perception thing. Anyways, I have about two months in and I already feel the power rails bring. I can testify coming from the reactor world
[04:46:42] , but I cannot understand why people aren't starting to use and teach rails instead of learning react next solid JS and so on. When you tell them that they're now developing
[04:46:51]  in rails, they laugh that it's a dead technology. They'd say end of the line. I'm amazed at by how easy it is to grow a business worrying about
[04:46:57]  more important part, making it work and growing up clients and not if you use X, Y, Z on your stack. Well, first of all, good, good
[04:47:04]  for him. I think this is how it should feel like when you use a tool, obviously react, wasn't the right cadence. He's talking about files, which is
[04:47:15]  funny to me because like, doesn't rails have like a crazy file system thing, like with tons of files, I suppose it's all like convention-based like auto generations
[04:47:24] . So like, if you don't, there's a default behavior if the file's missing, but like, yeah, as soon as your stuff grows, you end
[04:47:33]  up with like even more files. But yeah, files isn't one thing, but like that's beside the point. I'm getting hooked into that. Rails obviously isn't
[04:47:42]  a dead technology. And it's unfortunate that people feel like the need to kind of laugh about it because clearly for his business needs, he doesn't need these other solutions
[04:47:55] . So, I mean, it's, it's interesting to me because like, I think this is kind of like the reason people aren't teaching or using rails is
[04:48:12]  because people have taught and used rails for over, for what, 15, 20 years now, right? There's tons of content. People are always going to gravitate towards
[04:48:25]  the, the newer thing. There's things that rails doesn't solve at all. We've, we've talked about that, but I guess the problem is that the
[04:48:33]  conversation doesn't include that possibility for, for these people from the sounds of it. If he, if, if he thought rails fit his use case, then I'm gathering
[04:48:44]  what he's doing is dead simple, but that's still perfectly fine. He's shipping his MVP. So yeah, I don't know. It, this is obviously
[04:48:54]  from a rails community thing on reddits, but I, I think this is kind of part of the problem is that he felt like he didn't have a choice,
[04:49:06]  which is really weird. There's, there's, there's always a choice. The lack of self-awareness when I realized that many people feel the same way
[04:49:25]  about React Next as he does about rails. Yeah, a little bit. Yeah. I mean, you always see the converts both ways, right? Like, because you use
[04:49:32]  rails enough and you're like, suddenly get to a point where you're trying to build something like more app-like or this, and you're just like, like,
[04:49:39]  I'm familiar with that story. Uh, Vidigami, that social media startup was built on rails in 2010. Um, and we went to full JavaScript and man
[04:49:50] , like it got so much better and you could be like, okay, well clearly any rewrite makes something better and you should do that. That should be the skepticism in
[04:49:59]  your mind, but it just fit better for the social media thing. Like the rails app was dread, was fine for page rendering and stuff, but it was dreadfully slow
[04:50:06]  for the like interactive bits. We, we were just like re-rendering stuff and compared to like using Knockout and it said, oh no, Knockout in 2010
[04:50:16]  was, you know, the GOAT or whatever you young folks say. Right. And this is the other thing always tricky. And the reason we see that is you
[04:50:30] , your first experience into any new thing, hopefully it solves your problems and you're on the up and up, right? Like, this is what you want to happen.
[04:50:39]  If you just, if you tried something for two months and you weren't happy with it, then, you know, like you should feel this kind of positivity.
[04:51:02]  Interesting. Uh, I was reading the rest of it. Sorry. I didn't read it out loud about the, about, you know, concerns around the app router.
[04:51:10]  Hmm. Anyway. Um, yes, objectively, no best choice. Yeah. This is what I was thinking about. You end up with lots of files anyways. It's
[04:51:23]  interesting. Cool. Yeah. A lot of opinions about files. I mean, someone responded, developer skill issue. Um, it's, it's hard to say
[04:52:10]  when, when you have something like react, that's like, so I want to say like inbred in its own jargon, in its own language, in
[04:52:22]  a sense, like community, it's, it's hard to know like how much this, how hard this is coming from the outside. Yeah. There's always a skills
[04:52:32]  issue. That's why you guys are here. Right. So anyways, this just caught my eye. Um, like sometimes this is just fine and you don't need
[04:52:54]  the other stuff. Okay. Let me go here. Before I get to my last topic, couple solid JS news things. Alexis just doesn't stop. He finished, you
[04:53:08]  know, the work you've been doing on the serializer. And he decided to get granular HMR working a solid. What is granular HMR? It's well
[04:53:17] , we have a hard time with data refreshing because the way solid doesn't like diff. So the components don't have instances. One thing that we can do, um,
[04:53:27]  is because everything's split apart and granular is swap out sections of the code without unmounting the components. So it's, it's sub component HMR. So
[04:53:42]  it's not diffing the whole thing or re-running the component. It's sub component HMR. And I don't know how well it works. We've released
[04:53:53]  it now with solid, uh, refresh seven, which is not the default for v plugin, uh, uh, solid, but it's pretty cool tech. Just,
[04:54:01]  just putting it out there. Sub component HMR. We should market that, you know, um, or he calls it granular JSX HMR to be fair. Solid
[04:54:13]  still can't preserve state above, below the change, but it is definitely cool to see the component you working on not unmount every time you change code in it.
[04:54:24]  You can say Alexis for that one. Yeah. All right. What have we got here? Yeah, this is fun. Uh, I, it was, I did a
[04:54:42]  podcast with the, the guys from, uh, uh, this is learning like, um, this is their tech talks. If you haven't noticed, I published all
[04:54:50]  my stuff on there, um, for, from dev to just great group of guys, open source open. They, they supported me early days when I was doing publishing,
[04:54:58]  um, originally out of the angular community and, uh, helped a lot improve my writing. Um, cause I, I was just kind of writing into space on medium and
[04:55:08]  then they're like, they, there's a couple of publishers that picked up my big, like my good solid articles, but these guys encouraged me to write more technical.
[04:55:15]  I remember Lars, uh, feedback on some of my technical writing early on that helped me a ton. Um, so yeah, I did a podcast with them. That
[04:55:24]  was fun. I'm, I love seeing Attila doing more dev rel and stuff, solid related, obviously he's working with Tori, but we have people out there
[04:55:32]  in the community sharing the good word. So I couldn't be happier. That's really it for solid stuff. We already covered solid start. Um, okay. Let
[04:55:40] 's talk about, I guess the last topic of today, not a, not a big one, but there's been, I, I knew immediately when I saw Dave's
[04:55:52] , uh, um, tweet that he was talking about server components because nothing else is more complex right now. Right. And to confirm this, I looked at the post
[04:56:06]  engagement and so I looked at the quote tweets and I see, I elaborate more here. I elaborated more here. And then I looked and I saw, and he's
[04:56:15]  responding to Dan Abramoff talking about probably server components. Yes. Server components. And here also server components, the same tweet. Okay. I still don't see
[04:56:30]  how server components add complexity for me. They have done is remove complexity. Every single app I built to this day would get a massive simplicity boost with server components. They removed
[04:56:37]  the parts of web dev that annoy me the most. That's awesome to hear. See, my biggest concern is I actually don't, I'm not sure that they do
[04:56:43]  for the majority of apps that I, I built over time because I, I still need the client data. Like I'm kind of on Tanner's side of the spectrum
[04:56:51] , um, who got shoved far on the opposite defend working on Marco, but still generally leans towards apps and granular. But, but the word, the use of
[04:57:02]  the word complexity here is actually really important. Um, sorry, because he goes in, there's two types of complexity, complexity of how things work and complexity of using
[04:57:15]  them, right? Which is fair. You're not being crucified. Sorry, I guess I should have checked with you first, but you're, you're free game,
[04:57:30]  right? I, I, I, I agree. Um, when I saw this, I was just like, yes, that's exactly it. So sometimes these two
[04:57:45]  do not grow with each other. One will increase, one will decrease, you know, and you know, don't get complex, don't get caught up on which one
[04:57:54]  versus which one is more important. Cause like, look at the value you get. I think this is like great advice. The reason I jumped on this wasn't, was
[04:58:02]  because the message was right on. I just, I'd come to my own way of describing this based on the classic, um, simple versus easy. Um, so
[04:58:13] , um, yeah, yeah. Which we'll get to a minute. What I, there's something that, uh, there's a few tweets here that I thought were
[04:58:21]  kind of interesting. Like Brian Florence goes, I call it two incidental complexity and one essential complexity, which is a pretty, um, pretty reasonable way of looking at this
[04:58:31] , right? Cause the first one is like, how things work, you can't really avoid it, but complexity of using things, um, could be incidental.
[04:58:39]  The only thing is from my perspective, um, like not all complexity from using things is like accidental or incidental. Like it could be intended. So that's why,
[04:58:53]  where my framing comes from, because I think incidental complexity could be, it's something that you like, don't necessarily realize. And that in itself is just complexity
[04:59:06]  in itself. And it could be on either side, um, so to speak. Uh, so, uh, let me, let me show my framing here. All right
[04:59:20] . I consider the first case simplicity versus complexity, right? And the second case actually easiness versus conflict, how complicated something is. So basically I defined simple versus complex
[04:59:45]  based on like how predictable a system is from looking at the properties of individual elements. What I mean is if you can reduce things into clearly defined bounded, bounded pieces,
[04:59:56]  and each thing does its thing perfectly and clearly, then the system is relatively simple. Um, so to speak, it's when you put the pieces together and emergent behaviors
[05:00:09]  occur, that things become more complex. When the combination is not the sum of its parts directly, that's when things are harder to tell, or when you look at
[05:00:19]  anything and you stop being able to see the division between parts, they, they're more involved. They have multiple behaviors. Things change differently based on different inputs in ways that
[05:00:30]  you wouldn't expect. Things stop being linear. You know, that's where complexity comes from is the lack ability to break pieces apart, um, to be able to explain
[05:00:39]  the system. Whereas easy versus complicated scales on how involved is to achieve the desired task, right? Like, something is easy. If it takes little effort, there's
[05:00:51]  less moving pieces. There's all that. Something can be complicated. So what I'm trying to say is something complicated where there's like lots, it's very involved.
[05:00:58]  You might have to put these things together in this specific way for it to do this, the thing you want. Um, but what it means is it's quite possible for
[05:01:06]  a simple system to be complicated and for an easy system to be complex. In fact, those two opposites often go together. The simpler system is the more complicated it
[05:01:18]  ends up being in practice. And often the easier a system is, the more complex it actually is like under the hood. So, um, a couple of examples here
[05:01:34] , right? Redux, people always told me how like complex Redux is, but Redux is like one of the simplest things possible. And people look at me and
[05:01:42]  they're like, what, how can you say Redux is simple? It's complicated because you have to like set up a reducer and set up the actions and do
[05:01:49]  like put this up. But fundamentally Redux is like data equals function of previous data. Like it, there is almost nothing simpler in the world than Redux. Um
[05:02:00] , but sometimes systems can be too simple. Redux is so simple that it doesn't map necessarily to the real world problem you had. So you'd have to layer so
[05:02:12]  much stuff together with it to actually accomplish what you wanted because you needed to follow its very simple rules. So sometimes when a system is too simple, it leaves too much
[05:02:24]  open and the gap between it and the, where you want to achieve is, is too far. And it forces you into, you know, complicated solutions. Similarly on
[05:02:37]  the other side, everybody seems to want to complain about how complicated things are, right? Right? Sure. There's more to see, but the thing is you can always
[05:02:48]  make something complicated easier, right? You can reduce complication by adding abstraction. That's what abstraction does. You take something complicated, a lot of parts and you abstract away
[05:02:58]  those details and now it's easier. But you, I would argue by adding abstraction, you're making it more complex. There's no shortcut to making an existing system
[05:03:09]  simpler. Like you can't take something that's complicated, sort of complex, and make it simpler. It's, you have to change how the system works. You can
[05:03:19] 't remove abstraction, so to speak, generally speaking. It's, it's a much harder task to make, which kind of ties into what I was talking about looking at
[05:03:26]  the bookmark. Sometimes another layer of abstraction is not the answer. Sometimes the path that led you to believe you need one actually should tell you that you built so many
[05:03:33]  layers on the wrong foundation that it's time to burn it all down and start over again. Generally, the solution to complexity is burning it all down and starting all over again
[05:03:43] . That's why, you know, we have different opinions. That's why we build different stuff. But I wanted to talk about this balance because one of the largest
[05:03:58]  regions for Reacts longevity is that it was simple. Not the easiest solution, it was simple. And that scaled well. So even though it could lead to it getting complicated
[05:04:12] , it never, it prevented it from getting complex. My concern with the current trajectory of the web is we're understanding that complexity is perhaps, or a certain degree of
[05:04:33]  complexity is perhaps unavoidable. And we're, it's kind of like pushing us harder and harder into easier solutions. Like it's feeding, they're, they
[05:04:46] 're feeding into each other at kind of a exponential rate. Like the more things get complex, the easier trying to force it, which makes things more complex. You know,
[05:04:56]  all this compiler stuff, all this, this is, this is like my, one of my biggest fears here. I always, you always want to try and push towards
[05:05:06]  easy and simple. But the reality is error on the side of simplicity, generally speaking. It's, as I said, if it's a little bit too complicated, someone
[05:05:17]  will figure out how to make it easier. But you can't, if you err on the sides of easiness, no one is ever going to make it less complex
[05:05:33]  for you. Anyway, um, just catching up with chat here. But I think, I think that, uh, I think we're good for this week. Um
[05:05:49] , I'm sorry, Dave, for putting you on the spotlight here. Um, but I think this is a really good topic. It's very relevant right now with the
[05:06:02]  talking about, um, RSCs, about React for Git, because React also initially valued simple above all else, you know? And when I look at frameworks, I
[05:06:14]  always like look at where they sit on the scale. And this, this is one of the most important pieces to me, um, to understand when you want to talk
[05:06:24]  about the philosophically where things sit. But yeah. Yeah. Rich Hickey, easy versus simple. I'm just reiterating this. I'm not sure if he
[05:06:34]  got into the complex, complicated side. It's been a long time. I don't even know if I ever watched the, the whole talk, but, um,
[05:06:43]  yeah, I mean, I think this is pretty, there's a universal truth in this. Uh, yeah. You guys are all talking about React Miami. Yeah. It
[05:06:55] 's, it seems pretty cool. Um, I, I've been hearing, um, I, I've been hearing, you guys, Clerks sponsoring. Yeah.
[05:07:06]  You want me to watch this. Yeah. I can do that on stream maybe sometime. I, I actually haven't watched it in, in, in its fullness.
[05:07:14]  That might be a stream in itself. Yeah, you're right. I, hard is, might be better. I just, I was trying to show that. Yeah
[05:07:29] . Yeah. It's a, it's a, it's, I think, I think that's the reality. I thought RSCs were simple, but there
[05:07:52] 's, there's a lot of complexity here to actually pull them off. Um, so yeah, I think, I think that's where where we're at. Thanks
[05:08:05] , Shai. It's been a while. We, I, I, I'd love to hang out again sometime soon. I don't know when I'm traveling a
[05:08:09]  lot less, but it's good to see you around, man. Okay. Yeah. I, I, I'm for, I'm familiar with the topic. I just
[05:08:22] , I don't think I've watched the whole talk. You can make a complex system by breaking apart into its individual parts. Okay. So there is a solution to
[05:08:33]  this. I just don't know if breaking, if you break it apart, you end up with the same system again, right? You have to re you have to like
[05:08:40] , be very careful when you define your boundaries and how you break it. People applying it to react in general. Because yeah, there's, there's great, a lot
[05:08:55]  of great tweets. I guess this is why this, everyone knows this already, which is why this tweet never caught on. It's fine. Right. I'm just
[05:09:01]  saying the obvious. I just, I feel sometimes we have to think about it. I spend our talk about, cause I spend a lot of time thinking about this. I
[05:09:09] 'm very driven by this when it comes to all the API designs and stuff with solid. All right. So yeah, react Miami, give it a shout out. Oh
[05:09:29]  yeah. Are you at JS world? That'd be awesome, man. Yeah. All right. Anyways, um, signals of closure is coming. I've been seeing signals
[05:09:41]  in Dart and like tons of other languages. It's kind of crazy, honestly. My tweet never caught on until I mentioned it under your RC tweet. Yeah. Hel
[05:09:56] ms should bring back signals. They were, they were the one that they were early, definitely early. Anyway. Um, I think we're good. I'm good
[05:10:07] . I think the biggest thing I want to say before I sign off here is that, how should I put it? I'm, I've been struggling the last little
[05:10:19]  while figuring out where I want to go next with the stream. You know, I talk about long arcs. I had a long arc through discover the frameworks. I had
[05:10:28]  a long arc through exploring the API of, you know, attacking this hydration problem. I'm, I could talk for hours about anything. You guys are pretty clear about that
[05:10:41]  at this point, I'm sure, but I'm actually running out of, I need to get more work done to fuel into it. Like, and then the last
[05:10:50]  bit of work I've been doing, it's been a lot on building the meta framework designs stuff. And it's fed into what we talked about looking at doing R and
[05:10:58]  D, you know, thanks to the support of like the Chrome team, you know, helping Alexis along and myself working, you know, along that, along that stuff
[05:11:08] . So I'm, I'm, I'm, I don't know, like, should I, should we be building benchmark tools on stream? I can't benchmark on
[05:11:15]  stream. The, the, the stuff's too variable. Like, I need to think a bit about where we want to head next, because I feel like I'm,
[05:11:23]  we're in another arc here and, um, um, I'm sure topics will come up, but you know, I generally never plan this, except for guest streams
[05:11:35] . I never really plan much more than, you know, a week. I only know the stream of a couple days ahead and I feel like I'm, it's getting
[05:11:40]  harder, uh, these days to figure out what the stream topic is. So we'll see, I'm sure stuff will come up, but stuff hasn't been coming up
[05:11:48]  as much because I've been, been, you know, you know, hitting the end of certain exploration paths and we need this, there needs to be new directions.
[05:11:58]  Right. I, that's what I was saying. The only way we know where we're going to go is benchmarks. Right. So, hey, Lynn. Yeah.
[05:12:11]  Yeah. I, I feel like I'm in that zone. I took a break before where I was okay, but that's because I was doing conference talks and that
[05:12:19]  actually didn't fill the tank. In fact, um, you know, I got to meet some amazing, amazing people like, uh, Daniel, uh, Attila,
[05:12:28]  like, you know, like we, we shy, like a bunch of people we're talking to on the stream because of the conferences, but I didn't actually fill the
[05:12:39]  technical tank, so to speak. Um, so yeah, I could reduce it to just this week in JavaScript. So deep drive into deep dive into solid code. I
[05:12:58] , it's not that interesting. I've, I've done bits of it at times. It's just, it's not that interesting. Um, yeah, I can
[05:13:07]  interview some more people, but I mean, it's like, I usually interviews things that I'm like really looking into. And I think like when a new performance optimization
[05:13:22]  comes up or something like jumps on a benchmark, I feel like I'm at an interesting point now where we've talked to the, we've seen the different architectures.
[05:13:31]  We've learned about view transitions from Matthew Phillips to master. We learned about block Dom from Aiden. You know, I actually don't know if there's a lot
[05:13:39]  of different technology. You know, we learned about visibility from quick, uh, from Misco and, uh, Adam and Manu. Like I I've learned, I
[05:13:47]  don't know if there's any new technology that's jumping at the seams for me right now. I think we just need to figure out what's important again. It reminds
[05:13:56] , this is what I did ever at every major stage of solid back when I first got the, you know, the signal rendering working back when I got SSR working
[05:14:05]  when I, I, I need some time. So I'm just going to put it out there just so you guys know, in case there isn't a ton of,
[05:14:12]  you know, there's some more breaks in my stream schedule coming up, just letting you know, I'm, you know, I might not stream next week. We'll
[05:14:19] , we'll see how things go. Leave it, you know, kind of on the fly. Right. If I start work, work on solid 2.0 should
[05:14:28]  be coming up and that'll be interesting topics. I I'm going to be working on an article talking about lazy versus eager. Like there'll be opportunities for sure. I
[05:14:35] 'm just saying like, it's hard to have this much content every week. Um, so to speak, uh, you know, so there's something taken into consideration
[05:14:48] . I'd sit about stuff that I care about. Uh, stream D and D we were streaming and then we, well, I think we, uh, Jacob had some
[05:14:59] , uh, technical things. I can, I could stream me playing, uh, magic arena. Yeah. One to two hours is probably fine. Ryan can't do short
[05:15:12]  streams. Every time she's right. Almost every time I've tried, it's been at least three hours plus, but I think, I think maybe that, I think
[05:15:24]  my biggest concern is actually coming up with these nice videos with good covers and stuff, you know, like if I'm just doing this week in JavaScript, you know, coming
[05:15:32]  up with a topic. Yeah. I don't know. We'll, we'll see. I I'm sure I'll still be around and maybe I just say this
[05:15:40]  and then literally just keep on banging them out for the next, like six months. And like, it's nothing. I'm just, it's something that I'm conscious
[05:15:47]  of. It's been, it's been, it's just been trickier to think of ideas. And I feel almost like, you know, there's, you know
[05:15:56] , yeah. Yeah. Yeah. Longer is good. Yeah. Yeah. Thank you. Shy. Anyways, I'm hungry. I believe I'm having nachos
[05:16:10]  tonight. So I will catch you all later. Thank you for joining me. This stream has been amazing. There's still 175 of you all here. Um, and I
[05:16:18] 'm sure if I go on YouTube, there's, we haven't hidden 175 likes. So, you know, please go on YouTube and give the thumbs up. You know
[05:16:31] , we have a hundred. Oh, there's 212 likes on YouTube. I take that back. Thank you. Thank you all have a good one. And,
[05:16:42]  uh, I will try to stream cause I know you guys all got subs on Twitch, but, uh, if not, you know, I appreciate it. Patrick gas
[05:16:53] . Bye.