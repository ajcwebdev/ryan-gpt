---
showLink: "https://www.youtube.com/watch?v=kz-p_017Usc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Reactivity: Fine-Grained Derivation & Incremental Computation"
description: ""
publishDate: "2024-07-13"
coverImage: "https://i.ytimg.com/vi/kz-p_017Usc/sddefault.jpg?v=66916d93"
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

[00:00:00]  Thank you. Thank you. Thank you. Thank you. All right. Hello, everyone, and welcome to my stream today. I knew it
[00:02:06]  was going to stream today, but honestly, it's the hardest thing to do is often trying to pick the right cover. I put too much pressure on picking, you
[00:02:17]  know, a topic, and quite often the stream has a main theme or topic. Other times, I just have a mixed bag of things that I've been working on,
[00:02:27]  and it doesn't quite translate as well. So sometimes the most challenging thing for me to actually stream is actually to make the cover. So, yeah, I've
[00:02:41]  been working a lot on reactivity design type stuff, right? If it hasn't been apparent from the last couple streams, really since around the signals 2.0.
[00:02:54]  So, obviously, I've been interleaving that with Solid Start work and Vinchy did some Vinchy releases this week. We've been expanding the maintain
[00:03:02] ers of Vinchy to help Nikhil out and make it so that we can push progress through a little bit faster. I know there are some bugs in it that
[00:03:11]  are definitely affecting Solid Start users, and obviously, I want to see them addressed as soon as possible. Especially, funny enough, I mean, it's not surprising, but
[00:03:21]  the loudest concerns I've actually been hearing about stuff that actually only impacts dev mode, right? A couple of the issues I was aware of when we went to 1.
[00:03:30] 0, but, like, I'm kind of of the mind that, like, if the API isn't changing and it works in prod, like, dev can kind
[00:03:39]  of be a little bit rough, but on the other hand, that's the first experience that people see. So, like, little rough edges there drastically impact people's perception
[00:03:50]  of where the project is at, which is obviously tricky. So, I've been trying to, you know, get some of those fixes in, especially from the community.
[00:04:01]  It's been a lot of help, you know, people stepping up, making PRs. So, yeah, anyways, come say hi in the chat. We can
[00:04:10]  get Twitter going, let people know that we are live. Let me see here. Hello. Hey. Hey. I anticipate that, you know, some of the last
[00:04:28]  couple streams have been, you know, maybe tailored more towards the diehards, so to speak. You know, that's okay, too. It's just tricky
[00:04:44] . It's whatever I'm working on at the time, and that's kind of the situation we're in. And I was exploring Meta Frameworks. We were looking
[00:04:53]  at Meta Frameworks. Now I'm exploring an area of reactivity where I don't often get to look at other libraries, although I spent a decent amount of time
[00:05:01]  this week looking at Signia from TLDraw, and we're going to talk about that a little bit today as well. Let's see here. Sorry, just
[00:05:10]  getting on Twitter. Let's see if my screen share works. Feels like it's been a while. It's only been two weeks, to be fair. Yeah, we
[00:05:19] 're good. All right. We'll wait for some people to get past that Twitch pre-roll and join in on the stream here. Well, what else is new
[00:05:54] ? Well, I've lost access to my Twitter account last week, pretty much for the whole week. To be fair, I'm still not 100% sure of the
[00:06:06]  source of the intrusion. Honestly, I've I've clickered all my passwords and all that kind of stuff. But basically, somehow some someone had logged into my Twitter
[00:06:18]  account. Maybe I used the same password in a on a different site, something like elite. And I guess that was July 3rd towards the end of the day.
[00:06:31]  And I I did get emails saying, hey, is this you? You know, somebody in Springfield, Massachusetts, I think, you know, on an iPhone.
[00:06:40]  All these things are not me. I don't I haven't had an iPhone for like over a decade. You know, accessed it, but I didn't see it
[00:06:50] . It was July 3rd. I had family coming in town for the long weekend. So I wasn't until July 5th. I just happened to be like checking it
[00:06:57] . Something in my email that I saw all of these messages basically showing, you know. Suspicious behavior. Different, you know, you know, logged in from a different
[00:07:10]  device location. And then the last one, which is the one that really tipped me off, which is the actual one I saw right away, was your email address
[00:07:18]  on Twitter has been changed. So when I went on, I found myself, but someone had changed my username as well. And it was fun because when you go through Twitter
[00:07:30]  support and you don't have the email or the username on the account, they don't know how to verify you. You'd think there'd be some kind of history
[00:07:40]  or something there. But every time I went to open a support request, I got an auto email, like within 15 seconds saying, well, you know what? I can
[00:07:50]  actually pull out one of those auto emails if you guys want to see what it looks like. Yeah, let me see if I can find it. X.com.
[00:08:06]  Or it's actually from Twitter support, funnily enough. Okay, here we go. Perfect. Yeah, I got an example of this. Let me share my screen
[00:08:20]  here. You get this email pretty much. I'm going to blow it up a little bit here. This is the generic email you get. Hello, we're writing
[00:08:34]  to let you know that we're unable to verify you as the account owner. We know this is disappointing to hear, but we can't assist you any further with accessing your
[00:08:43]  account. If you know which email address or phone number is associated with the account and you no longer have access to that email or connected phone number, please contact your service provider
[00:08:49]  for assistance. So this isn't the case, right? Obviously, I have my email. They changed it. For privacy reasons, we can't provide any permission to
[00:08:56]  the account registered email or phone number. That's fine. We understand it's frustrating to get locked out of the account, but we have these policies to protect accounts and private
[00:09:03]  data. We appreciate your understanding. You are more than welcome to create a new account to get back on X. Please do not respond to this email as replies to this account
[00:09:09]  or not monitored. Okay. So basically, this is the auto response that you get every single time, right? So, yeah, I think it's like they do
[00:09:29]  it within 10 seconds. So basically, if you fill in a form and they give you a bunch of fields like what's the email address, what's the username, all
[00:09:39]  that stuff. If basically anything doesn't match their records, current records, then this is what you get. And there's basically nothing you can do. Like there's
[00:09:53]  no other way to contact them. All the other forms, like they send you down these help paths and you are stuck. So like at this point, after like trying like
[00:10:06]  four times, like I sent clippings of the, you know, we think your email has been compromised or, you know, not though, like suspicious behavior.
[00:10:14]  I send them all the clippings showing me receiving the, you know, like even the one that said your email has been changed from, you know, my email to
[00:10:24]  P I star, star, star, star, star, star, star, something, you know, like they, they, they, they don't show the full email
[00:10:30] . They show that it's been changed to a new email. So I sent them all of these things, you know, that were sent to my email as kind of
[00:10:37]  evidence that I controlled the email and someone changed it, but it never got past the bot essentially. And I imagine that is the case for pretty much everyone. to be
[00:10:50]  fair, I didn't have MFA set up and, and I'll talk about that in a minute because like I've, I have two factor authentication on all my stuff
[00:11:00] , but I did not have it on Twitter because Twitter wouldn't let me sign up with my email that I used on Twitter. Like they were like, this email is already
[00:11:09]  in use, but I'm like, yeah, it's my email. That's why it's in use. Right. I was hoping that I could use my email
[00:11:17]  to actually set up because they ask you stuff like, would you want to share this email with people and all this stuff? And they actually add a second email to your account
[00:11:24] , which I ended up doing eventually anyways, but it's awkward when I have multiple accounts and you're like, use one email for this account, use one email for this
[00:11:31]  account. And they're like, no, no, now you need two emails for, for each account. I hit that blocker at one point and then I was just
[00:11:38]  like, okay, whatever. I'll take care of it later. So yeah, it was, it was definitely a little bit awkward to, right. So in any
[00:11:54]  case, um, uh, I did manage to get Twitter into, uh, two factor authentication eventually, but when in this situation, the automatic response, basically they, they
[00:12:11]  just won't look into the case. Um, I, I was fortunate enough that, see, I don't want to out people who work there because then everyone will
[00:12:21]  probably like go after them. But I'll just say, I, I, I, I can at least name one person who wouldn't mind taking the credit. Um
[00:12:30] , I, I reached out to Theo and he knew someone at Twitter who I'll, for their sake, I'll leave them anonymous, although they were very, very helpful
[00:12:40]  and managed to push the case to support. You know, this is after me writing, you know, doing these things, trying to like, if you actually respond to
[00:12:50]  the, the email or try and write a different email, rather using the case number as a way of being like, Hey. Hey, you know, I submitted this
[00:12:56]  case, I would really appreciate you reviewing it, writing a long thing. You also get an automated reply because they scan for the case number and go, this case has
[00:13:03]  been closed. You can open a new case. Basically like there's no way to get past their support system unless you know someone. And as it turns out, Theo
[00:13:14]  helped out, he knew someone and they said, I don't want you pestering the, you know, these other people, but I was able to work with support.
[00:13:24]  It still took like six steps. Like I went through the verification process I did before. Remember when someone had, uh, there was a, there was a clone of my
[00:13:30]  account. Like someone made a fake Ryan account. Um, I managed to, and I had to go through verification to get that shut down. I went through that process again
[00:13:40] . I had to like state that I was the account owner. And then even after all of that, um, I still had to go through another process to get the
[00:13:47]  email sent and it took, all took a few days, but eventually I got regained access to my account. So, I mean, that, that's basically, that
[00:13:56] 's basically the, the story. Um, people were wondering, you know, how this happened, as I said, I'm not completely sure, but I just liquored
[00:14:06]  through everything, you know, reset everything. And I, uh, went on the solid account, which I had access to and use that to let people know in case
[00:14:15]  the purpose, uh, messaging people, I didn't see any outgoing. They could have deleted their messages. I did receive, uh, when I did get the account
[00:14:24]  back, I did see a bunch of DMS from people asking the hacker to give the account back to Ryan, which I thought was, uh, very sweet. I do
[00:14:31]  appreciate the people who actually tried the message, the, the, the hacker, um, to give the account back. Uh, so yeah, uh, in, in
[00:14:41]  any case, um, it's resolved now I have two factors, authentications set up, even though it was like jumping through a bit of hoops, but here we
[00:14:51]  are. Um, no, I, I mean, I, I, I didn't say that as any, any thing. He, he was incredibly helpful. There
[00:15:12] 's a reason I reached out to him right away. I knew he was exactly the type of person who was connected or, uh, you know, the group of people,
[00:15:18]  the associate would be able to exactly connect the people to the people I needed that I needed to. So, um, yeah, no, uh, extreme gratitude towards Theo
[00:15:30]  and unnamed Twitter employee. Um, no, uh, my password was not easy. It's one that I remembered, but it was actually a very random combination of
[00:15:49]  characters and letters. It did not resemble English words. It had special characters. It wasn't lead code or like lead to speak or anything. It was something that it was
[00:15:59]  actually, uh, old account ID that I had from a service when I was a kid. Um, that I remembered back from when I used to type it in like
[00:16:08]  a username that was given, like that was generated, um, that I used to have to like type in back when I did dial up, uh, back when I was
[00:16:16] . Um, you know, like a kid, like, I don't know, like eight years old or 10 years old or whatever. And, um, yeah,
[00:16:25]  pretty much no, I, I, I, I'm not gonna say unhackable, but very unlikely kind of password. I just remembered this because like I used
[00:16:38]  it so much when I was a kid. Yeah, I mean, it's interesting. Um, yeah, uh, so in any case, I'm, I'm
[00:17:00] , I'm good. Now we're good. Now, uh, it is, it is what it is and yeah, I'm, I'm super glad it would have
[00:17:14]  sucked to try and start over again. Um, obviously, um, yeah. And you know what I would have had to do? I would have had to make another
[00:17:23]  account and then I would have had to like, basically do verification to prove that the more popular account was actually not owned by me. And then like, it's funny
[00:17:34] , that might've been a more direct way for me to get my account back. Um, Ironically, but because of processes, they probably would have been forced to close
[00:17:43]  my old account and keep my new account. Uh, it's, it's, it's funny, like, I mean, it was especially funny because like my picture
[00:17:53]  was on the account. Like if, if I could have gone in on a call or anything, it would have been very obvious that I was the owner of the account.
[00:18:03]  Um, you know, like they, they didn't change anything except for the username. I think whoever didn't knew what they were doing. They knew that if they
[00:18:11]  changed the email and the username, they even, the thing is when you're on Twitter, you can type in the old one in a backlinks. So like,
[00:18:17]  it actually will, like, if you start typing at Ryan Carniato, it was linking to the same, you know, the thing with the updated username. So like
[00:18:24] , it wasn't a way of hiding the account so people couldn't find it. It was a way of basically disconnecting both sides. So Twitter had no way of basically
[00:18:33]  associating me with the account. I think, yeah, they didn't do very much with the account as far as I could tell, but they knew exactly what they were
[00:18:40]  doing. AI video chat. Yeah. I mean. I mean, this is always my fear with, with them, with these like auto passwords, uh, you know
[00:19:04] , password, I've had them. I do have them, you know? Yeah. Anyway, it's just. And there's always the master password. Right.
[00:19:15]  So. All right. Yeah. So that was my, that was my journey, which means that it's going to make this week in JavaScript a little bit trickier because
[00:19:27]  I have a whole week where I wasn't really. In it. So to speak. I don't know if very much. Happened over that week, to be fair
[00:19:39] . You know. But man is what it is. Right. See. Good. At least I'm streaming in the right category in Twitch. Sorry. I was just
[00:19:54]  checking because, uh, sometimes, uh, screen mirror doesn't set me up on software and game development, but I am. So, all right. How are people
[00:20:06]  enjoying their summer so far? People start talking about the pre-commit hooks again. And, uh, yeah. Yeah. Yeah. People are still torn on it
[00:20:21] . Heat. Hot. Yeah. It's hot. It's hot here. It's been over a hundred. Pretty much. Well, it went below a hundred one
[00:20:31]  day, but it's been, it's been pretty much over a hundred the last like two weeks here. Rainy and wet here in Denmark. Yeah, no, I
[00:20:42] , I was almost ready to get a little fan going. I have one of these like portable little fans, you know, I was like, but I don't know if
[00:20:50]  it'd make too much noise on the stream. Because you have to understand when I'm streaming, I'm under lights. I have some area lights over here. I
[00:20:59]  have one of those like front cam lights over here, you know? So it's not just the heat and then I'm natural sunlight coming in through my window. So it
[00:21:07] 's, I'm, I have, I have lights on a hundred Celsius is a lot. A hundred Celsius would, would be a hot. No, no, no,
[00:21:16]  no. Sorry. I'm, I'm in San Jose. So a hundred Fahrenheit, which I think is like what? 39 Celsius, 38, 38, probably.
[00:21:26]  I didn't miss that. I participated in that a little bit. It was maybe I forgot to bookmark that. That was, that, that was. That was
[00:21:45] , uh, it was interesting. I don't know. Maybe I talked about it last stream. All right. All right. Um, so I guess let's, I
[00:21:55] 'm just going to share my screen for a second. Cause. I actually posted that. I didn't know what I was going to stream about and I got some suggestions
[00:22:11] . So before I get into any of the topics of today, I thought maybe I'd go over a couple of these suggestions to see if I could at least address some of
[00:22:18]  the things in here. Maybe something, something good. React to other YouTube videos or articles. Easy. Um, yeah. I mean, that is always a possibility. I
[00:22:31]  think Theo has been making a lot of content this way recently. It's like so much easier than he doesn't have to, like he can still hold his opinions,
[00:22:39]  but then he doesn't have to actually generate the content. You know, he's not Excalibur drawing it himself. Um, do it anyways. Thanks, Patrick
[00:22:48] . What's this one? Talk about new web frameworks. I'm sure you know more. Yes. I'm familiar with the Brisa or Brisa, however you say
[00:22:56]  it. Um, I, I, I, first of all, it's not, it's not like releasing. It's not released yet, I guess like it
[00:23:06] 's my understanding that he has like a public release plan. So I, I wasn't going to talk about some of these features early. And also there are a lot of
[00:23:14]  people working on frameworks. I think it's best to give them time to get it to a certain place where it's presentable before I actually say very much about it.
[00:23:26]  You know, make some of the demos, you know, put it, put it in some of the comparisons, you know, so that there's something to talk about
[00:23:32] . Um, obviously I'm familiar with this one because the author reached out to me a couple months back and we talked a little bit about some things, talked about a
[00:23:42]  lot of server client communication, reactivity over the wire, stuff like that. Really cool stuff. Um, but yeah, I, I like seeing these things come to fruition
[00:23:52]  before I get too much into it. So a little bit early on that one, but you know, it will probably have its day. Like most frameworks, uh,
[00:24:00]  that I ended up covering, uh, my streams only three hours. Thanks to my wife. I meant just talking about reactivity for three hours. There's still this week
[00:24:11]  in JavaScript, so we can easily pad that out to five. Here's, here's a cool one. Fabio random idea going through a whole bunch of frameworks that,
[00:24:19]  you know, and saying what is especially nice about them. These projects seem to all have angles or point of view. It'd be interesting to say explicitly what that might be
[00:24:26]  for a bunch of them. Um, what a nice deal. What about people dropping other frameworks, quantum JS yet? Yeah. Yeah. I mean, of the popular
[00:24:40]  frameworks, I think I've given these kinds of opinions before. Mostly I was on a panel at react summit recently, and I described JavaScript frameworks, almost like people where they
[00:24:52]  all had personalities, um, you know, like things they care about that, you know, you, after a while you feel like you get to know them, they
[00:25:00]  have like the thing that they put out there, you know, and then they have like what their deepest secrets or dreams are, you know, and you kind of feel over
[00:25:08]  time, you kind of understand those things. So that might be an interesting idea. The funniest thing is when I saw that I, I, I just had this crazy
[00:25:17] , crazy idea. I was like, I was like, what if I wrote JS framework fanfic, uh, essentially where, um, I tell a story of the history
[00:25:30]  of JavaScript frameworks as if it was like sci-fi. Like it was, if it was like dune and I'm, I'm, I'm, I'm
[00:25:36]  not, I'm not done here. This has got lots more work to do, but I, this morning I just sat down and I was just like, I was like
[00:25:44] , Hmm, this is something I'd find entertaining. So, um, I, I'm not ready yet. I'm sure if you guys can pull off that URL out
[00:25:54]  of the bar bar, you'll get there, but I, I will probably share this when I'm ready, but, um, yeah, I, I, that
[00:26:02] , that question led me to writing a fictional story about the history of JavaScript frameworks as if they were like, part of some fantasy or science fiction universe. Um, yeah.
[00:26:15]  Okay. Pre-order when, uh, I, I like writing, I like writing a lot. I, I mean, I, I write articles, but I
[00:26:26] , I've, I've tried to write fiction in the past. Um, my biggest attempt was I, I was actually writing a sci-fi story. Oh, about
[00:26:34]  10, no longer than that. Maybe. Yeah. 11, 12 years ago. And I was writing it on my, maybe even longer. I had one of those like
[00:26:44]  tablets that had keyboard attached to it for extra battery life as an old Asus as writing it on there. And, um, for some dumb reason, I never cloud
[00:26:53]  synced it. Right. And, uh, I, I was, I was, I guess it was around the time I was going back to university. So I like
[00:26:59]  took this little, like weak computer, windows eight style everywhere in the head, like 17 hours battery life. Um, not exaggerating. Um, and I'd write
[00:27:09]  on it and then one day it just died randomly and I lost the whole fricking thing. And I just was so diminished that I just didn't start up again. Uh
[00:27:20] , so I know it'd be fun to write fiction again, but I will, you know, who has the time? Anyway, um, I do actually think there
[00:27:33]  is something here of an idea because they, they, the frameworks do have personalities. And that's what led me to the writing. Cause I was like, what if I
[00:27:46]  put them in a place where they, their personalities showed, um, you know, in terms of like a storyline or history, you know, I'm, I'm very
[00:27:54]  influenced by Isaac Asimov was my favorite writer. Obviously his writing is what makes his writing amazing is his cleverness, but I love the foundation in that. It
[00:28:03]  almost told like a history, you know, um, and that, that, that's sort of what got me, got me thinking little, uh, Robert Jordan influence in
[00:28:12]  there too. Anyway, fun time. Well, the other thing that influenced me is if you've ever seen that Rich Harris talk, uh, where at the beginning he has
[00:28:23]  like, uh, like these animations and like. Uh, uh, uh, what was it? He basically, he should show us the history and they calls them the
[00:28:34]  three ages of JavaScript. And then the third age is like Svelte. Right. But he like tells the story of like the guys from meta coming over and that,
[00:28:42]  uh, you know, and introducing people to react and, you know, this, this, you know, history. I was a little inspired by that as well.
[00:28:50]  And I thought, uh, you know, I thought that, uh, that would make an interesting sort of world to build into. Anyways, I'm, I'm,
[00:29:00]  I'm taking this way too far, but yeah, I don't know. It is interesting to say, like just off the top of my head, I think I
[00:29:09] 've said this on some of the, the, the, like my framework recaps on 2024 or whatever. Like every framework has an angle, right? Whether it's
[00:29:18]  from like, you know, you know, like reacts whole, like simple is better than easy mentality. Although some would say they've strayed away from that, but
[00:29:33]  this whole idea of just like everything being immediate, you know, like to like, just like views being all about being progressive about food feeding people and being very comfortable as they
[00:29:48]  go on their journey. Like a lot of frameworks are concerned with like the adoption side, a lot of like the front end, and it affects their personality because, you
[00:29:59]  know, it's like whether they want to be liked or not, you know, uh, whether they want to be likable, so to speak. Right. It's
[00:30:06] , I could talk probably hours on this topic. I don't know if I, I feel like I need to have like a, a point that I was trying to make
[00:30:15] . Um, but it, this is definitely an interesting one. Um, that I think would be fun. I, I, I've, I've shared hints of
[00:30:24]  this on various streams. So yeah, it's a cool suggestion. Um, I would probably have to put some more thought of it. And instead of doing that today,
[00:30:32]  I, I wrote fiction. So I'm sorry, Fabio will have to wait for another, another time. Uh, what else do we got here? Solid dev tools
[00:30:43] . That's. That could be a cool stream. I, I don't know how I'd work with timing, but I'd love to have like Damien,
[00:30:52]  uh, the Tarniv. You've probably seen him around in our community. Talk to me about solid dev tools and how they work and where they go. This is
[00:30:59]  an area that I don't know about. This would be a good, like guest topic to bring on. So I think, I think that's a good suggestion,
[00:31:05]  Aiden. Um, yeah, super interested about what I've been writing. Yeah. We'll talk about that today. How about live coding and toy solid using only
[00:31:22]  native web tech and the native singles proposal. That'd be fun and educational. Yeah. Yeah. I mean, I've, I've done this with an existing signals implementation
[00:31:34] , right? When you consider when I did, uh, the petite solid, uh, stream, I basically took solid existing reactivity and wrote a renderer, so to
[00:31:43]  speak, using purely reactivity. Um, and then we've JS framework benchmarked it, of course. So that was fun. Um, the going to native signals
[00:31:52]  probably fine too, uh, but I I'd actually have to like get deeper in parts of the proposal, right? Like basically we'd be just spending our time making the
[00:32:07]  effects work and then we'd be spending our time doing the simple renderer, which we've done on stream before. But so I don't know, it's not
[00:32:15] , maybe when the native signals are further along, there's probably an angle that might be interesting. Minko's latest talk. Okay. Let me get back to that
[00:32:23]  one. That might be interesting. Sure. I'd like to see more of how Nitro fits into different hosting setups for if we'll call for pages. I'm assuming
[00:32:31]  it's using a worker to do bindings work. I haven't played enough to understand. My, I feel like this isn't, I mean, this might be just
[00:32:39]  a short answer rather than a long answer because all the cloud providers, when you own their docs and you just like deploy a function or worker or pages project, they have
[00:32:50]  a set API and Nitro just generates that. So when you use Cloudflare pages adapter with Nitro, it just creates the file with, you know, the
[00:32:59]  handler in it, so to speak, in that format. There isn't really, it's, it's kind of just like an output format that is already defined by the
[00:33:11]  providers. It's like if I go like create, creating, creating, uh, why am I in caps? Creating, uh, Cloudflare pages project or something
[00:33:24]  like that. Right? Let's, let's go in here. Getting started Cloudflare pages. So you can use a seal, direct load and get integration.
[00:33:32]  Okay. So not framework rides. How would just. Getting started, create a function. See, here we go. Hello world JS in your functions folder on request, new
[00:33:46]  response on request. Okay, beautiful. So they just expect you to export. Is it just called on request for pages? I think they just expect you to export a
[00:33:57]  function called on request and then it passes in a context response. This is basically the majority of what Nitro has to do. It just goes, okay, I'm going
[00:34:05]  to generate the specific on request handler for your. Your application. And then instead of calling returning response. I'm going to call the user code that you pass into the Nit
[00:34:20] ro event handler API essentially, and they just map it across. So they kind of just abstract these platform specific pieces. And then you just have like Nitro's event
[00:34:33]  handler API, which solid start ends up wrapping. You don't see it. And then it just generates the, for the specific target. Like they're all kind of the
[00:34:45]  same. If I go here, if I go Netlify functions, getting started, do the same thing. Getting started with functions Netlify. Okay. Beautiful
[00:34:58] . Export default in their case. Request context. You're starting to see a pattern. While the, while the platforms support different features. For the most part. Like
[00:35:13] , and there's, you know, environment considerations. For the most part, the actual code running part of the deployment here is just a matter of outputting in the
[00:35:23]  right location these things, right? They're very specific. They're like, put this in the, in the functions folder. You know. Vercel has the same
[00:35:32]  sort of thing. They have a, what are they called? Helped. Beta test this. Vercel. Build output API. V3. Yeah, exactly
[00:35:44] . Overview. What if I want to. Build. Where is it? Vercel build output API configuration features. What's features. Edge middleware. Sure
[00:36:01] . No, I want. There's something just high level routing. You basically put stuff in a certain. What's Vercel primitives. There we go. Fun
[00:36:13] ction, function name. There's the config. And then you can usually just put in. Whatever the name. There's going to be a file here. Okay. V
[00:36:24] ercel output functions. Why am I not seeing it? These docs are a little. Come on. Just show me the simple function here. I know it's in
[00:36:34]  here. It's, it's almost the same thing again. There's like a file, the JS file that has a handler. That's that basically handles the request.
[00:36:43]  They're all kind of almost the same anyways. Yeah, the minko talk is fun. I haven't seen it, so I don't know how much time.
[00:36:57]  We want to spend looking at it. He's the only thing that I see off the title. Title is converging web frameworks, which. I guess is an interesting
[00:37:09]  topic for people now. And I guess it's coming to reality, which is really cool. I don't know all he covers in here. I think one of the
[00:37:21]  biggest factors of merging has been obviously the signals. Stuff like we're seeing common ground primitives. I'm sure the talk talks about whiz and angular merging. It
[00:37:34] 's funny, it's funny, I actually wrote that all the framers from merging five years ago in in a medium article that they're converging. And I don't
[00:37:43]  think I don't know if anyone actually believe me back then. What was it called finding fine grained reactivity? Not that one, angular in depth. I wrote
[00:37:56]  it for an angular blog, too. That's that's that's lovely. Oh, man. No, no articles complete without the JS framework benchmark, right?
[00:38:19]  God, I don't think this funny. They don't even have my they don't even have my name on the article anymore. That's that's that's so weird
[00:38:31] . You see, there's there's no there's no place that's like authored by. That this is just so funny that like. Yeah. Yeah, I
[00:38:52]  can read dropping like a I think I posted this one to medium, too. Let me let me see if I can find it on medium that might be better source.
[00:39:13]  It's so. It's so weird. Because England, OK, let me let me try this because you can see the back door into my medium account if I'm still
[00:39:24]  signed in. Because angular in depth was a medium publication. So. Published. Oh. There it is. There it is. June 30th, 2019 15 minute
[00:39:56]  read. Yeah, I remember this one. I had a nice picture of sand. There it is. I had a nice picture of it. I had a nice picture
[00:40:08]  of it. I had a nice picture of it. I had a nice picture of it. I had a nice picture of it. I had a nice picture of it.
[00:40:10]  I had a nice picture of it. I had a nice picture of it. I had a nice picture of it. I had a nice picture of it. I had a
[00:40:14]  nice picture of it. I had a nice picture of it. I had a nice picture of it. I had a nice picture of it. I had a nice picture of
[00:40:16]  it. I had a nice picture of it. I had a nice picture of it. I had a nice picture of it. I had a nice picture of it. I
[00:40:20]  had a nice picture of it. I had a nice picture of it. It's a member-only story, whatever. It's just funny that the in-depth
[00:40:27]  article doesn't even credit me as the author, like I'm not found on it anymore. Anyways, all good. This is an old article. I've given talks about
[00:40:43]  this for years, but this was talking about the language convergent. To be fair, there's more than that going on. But it's interesting. It's just
[00:40:53]  there hasn't been this much alignment in the history of JavaScript frameworks, I don't think. Right? I don't know. I mean, let's skim this for
[00:41:10]  a minute and see what it's about. All right? Why not? Let's do that. Yeah, let me change how I'm sharing my screen. One sec
[00:41:22] . Present, share screen, Chrome tab, Minko. Let's see what's going on. All right. There we go. Let's take a look at this
[00:41:37] . I've heard good things. We just signed the lease. Of course, we've got the ads first, right? I mean, I can just mute it for
[00:41:44]  a while. It plays the ads. All right. Skip. Let's. All right. So last year, Angular and React were effectively the same framework. Probably you
[00:42:04] 're thinking, this makes no sense, right? Angular uses classes and templates, and React uses functions and TSX or JSX. How is this even possible? Well
[00:42:14] , large chunk of the responsibilities of any front-end framework out there is to keep the model in sync with the view. And that's where Angular and React used to operate
[00:42:27]  very much the same way. So my name is Minko Gechev. I'm the product and developer relations lead for Angular at Google, and I've been
[00:42:35]  also working on converting. I just want to confirm, you guys can actually hear the audio, right? I forget if I check the share audio tab. Could you guys hear
[00:42:45]  the audio in the video? Someone just say yes in chat. All right. This is funny, because I was going to speed it up so that we didn't,
[00:43:01]  you know, necessarily spend as much time on the video, but this is really funny because people probably listening to me sped up so, yeah, anyway, let's
[00:43:25]  go back to have some fun. Angular and React. In both cases, we'll create components, right? We'll be using classes and templates for Angular or functions and JS
[00:43:36] X for React. But that's only the interface that we are interacting with. After that, the framework is going to completely forget about the syntax that we used to create our
[00:43:44]  components. It is going to build some abstract data structures or a component tree that contains some state. The responsibility of the framework will be to keep this state inside of the
[00:43:52]  component tree in sync with the UI. This is often called as reactivity or propagation of state over time. That's where Angular and React were very much the same last year
[00:44:02] . In both cases, we'll have to specify that the change, the state has changed in React. We're going to do that with hooks. In Angular, we have
[00:44:10]  something called zone.js that assumes that the state might have changed. Right after that, the framework is going to traverse this component tree by default from top to bottom,
[00:44:17]  and it is going to find all the differences and apply them to the DOM. I'm happy he's saying this to a certain degree. I think some React devs might
[00:44:26] , you know, be like, nyeh, nyeh, nyeh, nyeh, there's a difference between zone.js style dirty checking and
[00:44:32]  reacts. That kind of, no, it's kind of like how Dominic Ganaway from Svelte said that React is a virtual DOM, right? He
[00:44:42] 's, or no, not React, sorry. Svelte three and four were a virtual DOM. So, because like, what's the difference between creating a virtual
[00:44:52]  representation and then diffing it against the last one or calling the thing in instead of creating virtual representation, just diffing against the last one in a single pass. There is
[00:45:03]  differences there. Definitely. You have to understand there are differences between these approaches. I consider them two different approaches, but effectively they're kind of the same top down,
[00:45:16]  rerun the components, rerun the thing. Yeah. This actually reminds me of my world beyond components talk so far. Okay. Let's continue. Let's look at
[00:45:25]  a more practical example. Here we have an app component that uses two other. Sorry. Side note. Oh yeah, actually, this is a good point. Why is
[00:45:35]  it possible to change emails without a verification of the own email? Well, I got an email that said that it changed, but I did not get an email that was like
[00:45:42] . Enter the code to. Verify. Yeah. Anyways, sorry. Just a side note. Let's continue. Components user profile and a shopping cart. Their implement
[00:45:54] ations are pretty simple. The profile component just displays a user name and the shopping cart components iterates over a collection of items from a shopping cart. And for each one
[00:46:03]  of these items, it displays the quantity. Okay. Under the hood, once you run your application, the framework is going to build a component tree similar to this one here
[00:46:11] . We have the app component at the top. We have the user profile component on the left. And we have the shopping cart component on the right. If we update the
[00:46:19]  state of the cart, let's say we change the quantity of the first item to be one, both Angular and React are going to perform change detection and reconciliation, but very
[00:46:26]  much the same algorithm. They're going to traverse the component tree, going to the root at first. After that, they're going to go to the user profile component
[00:46:32] . Nothing will have changed to that point because we're not using any of the states in these components yet. And finally, we're going to go to the shopping cart component
[00:46:40]  that contains the modified. Okay. Yeah. So I think he's going to do what I call the Misko example. Misko from Quick was the first one who made
[00:46:49]  this into an example. But we've used this in talks before. It's kind of showing the, like not diamond problem, but the whole like the right, the
[00:47:05]  separation between the read and the write and two unrelated things updating, right? Let's keep on going. I'm going to fast forward a little bit. So instead of travers
[00:47:12] ing the entire component tree, we can just traverse part of it. Here, with on push change detection strategy in Angular or memoization in React, when we update the
[00:47:22]  first item in the cart, we can just traverse the app component and the shopping cart component without going to the user profile component. But we're still performing some unnecessary operations.
[00:47:35]  And for large applications of these manual optimizations, they could be hard to achieve. And additionally, well, there are manual. Interesting. So on push is still triggering
[00:47:44]  components. I wasn't clear about this with Angular. So on push is still component granular. What he's saying is because the cart is owned by the app component, he
[00:47:52]  sure he knows that he doesn't have to run the user profile component, but he has to run the cart component to pass it back through to the specific cart item iterator
[00:48:03]  thing. Okay, let's let's continue. The framework doesn't do that automatically for us. So we need to think about it and have certain understanding of the runtime.
[00:48:09]  Now, if you're still not convinced that Angular and React were very much the same last year, let's look at some benchmarks. The font is a little bit small
[00:48:16] . Oh, I know where he's going. Angular and React have literally been the same in benchmarks, like a couple of points off each other for like a decade. I
[00:48:25]  used to joke that they like probably watching each other's back. You know, like they're just like, oh, he got a little faster. I need to do anything
[00:48:31] . And yeah, they're literally like 0.1 apart here between Angular 17 and React hooks. Yeah, like, yeah, no, this is. Yeah. I
[00:48:42]  like this. He's using this as evidence. What this is more evidence of is that their list iterating algorithm was really naive. If you look at the specifics here.
[00:48:55]  React actually has slower creation code and but and like for like create many rows and but it has better memory usage and Angular has slower actually swap rows. It's is their
[00:49:13]  worst one. Yeah, Angular's list logic was even slower. And it will. Actually. Yeah, sorry. Do I have this backwards actually? No, I'm
[00:49:25]  wrong. React is actually slower on mass creation, but it has lower memory. Huh? That's interesting. Angular was faster partial updates, which I was aware of.
[00:49:37]  But basically my point is they actually do differ in their approach and it does actually impact different things. It's just the average of them always ended up being about the same.
[00:49:50]  Uh, they, there are slight trade offs between both of their approaches. Um, but for some reason their average stayed the same. I think that's actually completely coinc
[00:50:02] idental and not because they actually render the same. But I, I do find it amusing for the sake of this talk. Oh, but the purpose is to mostly look at
[00:50:10]  the shape of these performance benchmarks and look at patterns. Both Angular and React are performing pretty poorly for swapping roles. And both frameworks are performing decently well for partial updates
[00:50:19] . This is with React hooks version 18 and with Angular's legacy control flow. Since then we changed our different algorithms and things look slightly different. So for the simple example that
[00:50:29]  we demonstrated here with the small component tree, which has only three components, it doesn't seem like a big deal that we have to traverse these three components. Whether we traverse
[00:50:38]  one or three, it's not really a big deal. It's going to be pretty fast. But real life applications, they are different. They have hundreds or thousands of
[00:50:45]  components that are alive the whole time. And if we have to traverse these component trees, component by component, in order to find the differences and reflect these differences in the view
[00:50:55] , it's going to take a lot of time. So Angular decided to improve its reactivity story. We started exploring introducing static dependency tracking in Angular on top of the
[00:51:06]  compiler that we already have. We looked at other abstractions as well, and we decided to move forward with signals. So we joined the signal clubs together with Ember,
[00:51:18]  Solid, Vue, Svelte, React, and others. And React has a slightly different approach here. We can talk about it later. But you can see
[00:51:27]  that all these frameworks are now converging on the same reactivity primitive signals. And even though React now uses a compiler, if you look at the compiler outputs of the React
[00:51:35]  compiler, and the Angular compiler things look very similar as well. We use the same optimizations where we're tracking the static parts of the view and the dynamic parts of the
[00:51:43]  view. I want to see that again. Yeah. Yes. Yes. Yes. I haven't seen Angular's output before, but it is also of this nature
[00:52:03] . It's like Svelte, actually. Angular output looks a lot like Svelte output using the bitmap at symbol. But I guess, actually, then
[00:52:16] , again, these elements they're creating, I think, aren't actually real elements. Or is it incremental now? It's funny. There's these symbols in front that
[00:52:28]  Misko was all telling me about causing him a whole bunch of havoc. He wanted to namespace them. So they put these funny symbols in front, but they caused a
[00:52:35]  bunch of processing issues. One of his old, funny Angular stories. But that's just an aside. But is -- I wonder, this is probably, like, incremental
[00:52:45]  DOM. So, yeah, in a sense, this is a lot like that. Okay, cool. I hadn't actually bothered to look at Angular's output before. That
[00:52:53] 's interesting. We are tracking the static parts of the view and the dynamic parts of the view. Here is how Angular uses signals. So we have a title property here that
[00:53:02]  we're assigning to a signal in the string world. And when we read the value of the signal inside of a template, here we're letting the framework know that that
[00:53:08] 's the exact place where we need to track for changes in the title property. So when we update the title property, the framework can go to this exact place in the view
[00:53:17]  and update the UI instead of having to traverse this entire component tree and look for changes. Sure. So looking at our larger component tree here, let's say we have
[00:53:28]  a signal item.quantity and we have read it in different parts of the component tree. When we update it, we're going to go only to the affected components
[00:53:35]  and update their corresponding views without having to traverse this entire data structure. Nice. Signals were very interesting for a lot of framework authors outside of Google, but they're
[00:53:44]  also very interesting for the Wizz team inside of Google. The Wizz framework has been historically used for different use cases compared to Angular. It is more similar to frameworks such
[00:53:54]  as Astro and Quick. In fact... And Marco. I know I can't talk about Marco 6, but I can talk about that this was why I was hired to
[00:54:04]  the Marco team back in 2020. Just to give you an idea, again, how ahead of the times Marco was. Not that anyone really should care until 6 comes out
[00:54:17] . Come on, Michael. Dylan, please. But they saw... They read my articles, probably the ones talking about this convergence back in 2019, and they're like,
[00:54:29]  "This is how we solve this problem on, let's say, the Wizz side of the spectrum. Let's continue." Wizz introduced the concept of resum
[00:54:40] ability about 10 years ago, and they're on Quick Borrowed it. And it has been serving more consumer applications. Okay, let's keep going. Yeah, yeah
[00:54:49] , yeah. I saw that they have been collaborating with all implementing part of the framework. Throughout performance. Yeah, YouTube. As I'm in the midst of applying for residency
[00:54:57]  right now. Boo. Sorry. Wish me luck. Grammarly has again been a lifesaver with my application. Yeah. We reached out to standardization,
[00:55:04]  reached out to... CC39. In fact, framework authors have been trying to diverge. We're going to manifest to web developers. Well, in practice, this is
[00:55:11]  going to be just gradual improvements that we're introducing to Angular over time. And in the process, we'll be seeking opportunities, one example. Great. Reactivity,
[00:55:17]  altering experience. We have rendering. Does your... Well, if you're using, I guess, React, you might be thinking, no, Angular doesn't have a
[00:55:24]  context API. What if they're serving very much the same purpose? In both cases, we want to inject data in our components based on the context in which they're
[00:55:31]  used in. So in Angular, we do that with dependency injection. In React, we do that with context API. They seem to serve the same purpose very much. They
[00:55:39]  have slightly different look. But they also share very much the same data task. And it could potentially lead to a lot of changes in these frameworks, which goes through a pull
[00:55:47]  request. Like we have over 27 checks, such as... And probably the one that brings us the most confidence that we haven't broken anything. something called the Google internal
[00:55:55] . That's called Angular application. And we discussed convergence on view structure and also touched on dependency injection or context API. I have a prediction that we'll be also converging
[00:56:06]  on event replay and fine-grained code loading. By fine-grained code loading, I mean reasonability or partial hydration or the island architecture that Astro has been
[00:56:14]  advocating for lately. Let me first start talking about... Yeah. Event replay seems obvious. This is one of those things that... I didn't realize was like... When
[00:56:30]  Jadon came on the stream from Wiz, he was basically saying resumability with 90% event replay. And I was like, oh, this actually isn't that
[00:56:36]  far off. Because some frameworks already have event replay. React has event replay. That's how their selective hydration works. Solid has event replay. Quick has event replay.
[00:56:49]  That's how they trigger their resumability. And what's interesting about the event replay model is... Unlike, say, progressive enhancement, like the standard remix pattern of submitting
[00:57:02]  a form or whatever. And we actually let form controls go through. So we're the same. We're going to do hybrid thing. Event replay means that you don
[00:57:14] 't lose clicks before the page becomes interactive. So trying to figure out how to measure interactivity becomes more interesting. Because if frameworks are, you know, can be interactive
[00:57:26]  before the code for the page loads... Like the classic problem with, you know, showing a website that's done in a single page app was that it would be blank.
[00:57:39]  And then you'd see the content because it'd client render it. It would be that, you know, gap of time. You'd get the blank page pretty quick
[00:57:45] . But then you'd have to, like, wait for the... You know, the HTML would have a script tag on it. Which then had to go load the JavaScript
[00:57:51] , parse it, execute it, then run it. And then at that point, it could show content. And often you'd have to go fetch the server again, right
[00:57:58] ? This kind of chain. Server-side rendering meant that we can still go through that process almost on the client. Maybe skip the fetching of the data at that point
[00:58:07] . But everything was rendered into the page initially. So you can see the results. But the problem is when you go to interact with it, it's just the picture
[00:58:18] . Manu from Quick Team used to, like, make this joke that SSR was a lot like sending someone a photo of a cake. And then, like, hoping
[00:58:27]  the person didn't try and cut into it until the actual cake arrived. When you have event replay, it's interesting because, like, there might be a lag to
[00:58:42]  when the JavaScript loads and it can process. And this will be true for any framework, right? Even things that lazy load the job or JavaScript, anything that does it laz
[00:58:51] ily. But you don't lose the interactive points. You know, you can start interacting without, you know, losing clicks, without necessarily, you know, doing a full
[00:59:02]  page reload. So, yeah, event replay is already in React, already in solid, already in quick. Sounds like it's coming to Angular. So I think that
[00:59:12]  fine-grained code loading is an interesting one, though. How fine-grained? I mean, in a sense, fine-grained code loading is already happening
[00:59:20]  with nested routers, right? To a certain degree. Maybe not fine enough. But I just want to point out that, like, code splitting automation, largely
[00:59:30]  the, I'd say, reason that we all file system routes in MetaFrameworks has been something that's been going on already for a bit. I think
[00:59:40]  it's interesting because you don't necessarily want to delay code loading for everything, right? Even quick preemptively loads a lot of parts of the page. They use AI
[00:59:54]  to kind of determine which parts they should do that. That's part of their offering. But, like, you don't want to be waiting for that code. You
[01:00:01]  want that code to already be loading by the time you interact with it. Otherwise, you're just creating these weird waterfalls where, like, you can see the page,
[01:00:08]  you don't lose the clicks, and then you're waiting for the code anywhere. The more key part of it, I think, is actually that if you don't
[01:00:15]  have to hydrate the whole page, then the CPU is lower. Like, load the code, just don't run it. Like, that's kind of where is more
[01:00:25]  important. And my gut is, and I could be wrong here, is things that are expensive from a code loading standpoint are isolatable without automation. Like, either you
[01:00:36] 're going to rely on some kind of analytics data. And I don't mean, like, compiler analysis. I mean, like, statistical based or AI based to determine what
[01:00:46]  code should be loaded. Or you've probably, the developer is going to have to tell you, right? And if the developer is going to tell you anyway, then,
[01:00:56]  like, we have to consider that. I think converting on event replay is something that's happening today. I think fine-grained code loading is something that people will
[01:01:10]  try. And I think it'll be hard to get right for a while. In a sense, you could argue that islands or RSCs are a certain level of this
[01:01:19]  code loading. Very explicit to the developer. I'll buy that into the definition, if that's what Minko is saying. But there are consequences. And if you
[01:01:29]  want to know what the consequences is, you should watch my most recent talk anyway. So how do we usually serve a web application? The user would open their browser,
[01:01:41]  and in the navigation bar, they're going to enter a URL. From there, the server is going to respond with HTML. We're going to find all the reference scripts
[01:01:49] , JavaScript and CSS. We're going to download these scripts. Right after that, we're going to execute the JavaScript. We're going to fetch some data from the server
[01:01:56] . He's literally just describing what I was describing a moment ago. A lot easier with the graphics in front of you. And finally, we're going to make our
[01:02:02]  application interactive. This could take a lot of time with a slow network. There are certain optimizations we can do. Probably the most obvious one would be to use server-
[01:02:09] side rendering. If we server-side render, we'll provide this markup to the user. So the browser would already render the application. But it will still need
[01:02:18]  to download JavaScript and execute it, perform hydration, in order to make the application interactive. And there is an interactivity gap down there. So in the meantime, between the
[01:02:28]  user seeing the structure of their web app and being able to interact with it, there might be a couple of hundreds of milliseconds. So the way we've been solving this in
[01:02:35]  Google. I should have just let him talk before I talked. I ended up just ruining this whole section of his talk. Let's continue. Google search over the years is
[01:02:43]  with something called Event Replay. Here we have a mock of a very simple app. When the mock is gray with these dashed borders, the application has not been
[01:02:52]  hydrated yet. And when it becomes dark blue, this means that it has been hydrated. Yeah. Side note, that's how solid works. Let's continue. So we
[01:03:00]  can start interacting with the application before it has been hydrated. And in the background, we can start recording the user events. When the application gets hydrated, then we can replay
[01:03:09]  the event in the order in which we have received them. Hopefully, the application is fast enough that this phase of event capturing and event replay is not going to last for
[01:03:17]  more than a couple of hundreds of milliseconds. And this way, we will not lose any user interactions. This currently is achieved with a library called JS Action or Event Disp
[01:03:28] atch. It is a library that we worked on modernizing and moving to the Angular Mono repo. So you can find that it is the same code that powers the event
[01:03:36]  replay in Google search. I can't even skip this one. You know what's funny? I can't even monetize my recent videos. I should talk about it
[01:03:54]  at some point. There is another opportunity to improve performance, though. We can shrink this time needed for downloading the JavaScript and executing it by serving just less JavaScript. We
[01:04:02]  have been achieving this with reasonability or with, like, some fancy partial hydration, where we implicitly specify which is the minimum of the whole application. And, well,
[01:04:11]  in Angular, we can't do it in the same implicit way because using Angular with today. Islands in your application or hydration islands in your app. With deferral views,
[01:04:18]  you can wrap part of your UI inside of a block and specify that you want this block to be hydrated only when a particular condition is met. This is the semantics
[01:04:27]  when using server-side rendering. So this way, when we send a request from our client to the server, we can get the markup of our application. And ahead
[01:04:37]  of time, we have created different interactivity islands with these deferred blocks. Let's say we're using all interaction as a hydration trigger. So when the user starts interacting
[01:04:45] , let's say, with the left navigation bar, we can download the corresponding JavaScript. I'm interested about this. The reason I'm interested about this is... There
[01:04:55]  are some challenges to hydrating when the state has changed. It's one thing to collect events and replay events on things that have already hydrated. That's how we've been
[01:05:14]  doing a solid. It's another thing to have the state diverge on part of the page and then be showing the server-rendered stuff and then have to go
[01:05:31]  hydrate something when the state is no longer in sync with what you're seeing. You know what I mean? Like, if part of the page... This is a
[01:05:44]  challenge with islands in general, but a lot of times with Astro, you can avoid this because Astro doesn't really have global state. But I'm building an angular
[01:05:54]  app and I load some state very high up in my tree and I change it. And that state is being used in one of these lower down components that hasn't hydrated yet
[01:06:05] . How can it hydrate with the wrong state? I just want to see what they... Maybe Minko explains. Script from the server and we can hydrate
[01:06:15]  only this part of the app without downloading anything of the remaining functionality. So we can download the minimum amount of JavaScript required to handle this particular user interaction. And with event replay
[01:06:24] , we can replay the event also that we don't lose any clicks, let's say. There is one more thing that we've been working on though, and it
[01:06:31]  is figuring out our reactivity graph so that there are data dependencies. Let's say the navigation bar updates data that is used in the top bar. We should be able to
[01:06:40]  hydrate our application and update the view. So today, out of this... Yeah, okay. So that's the answer. On any state change, you have to
[01:06:52]  pull in any of the things, which means that you have to be aware of the dependency graph, probably from the server runtime perspective. This is similar to what Quick does.
[01:07:03]  And then on interaction, you actually have to kind of pull in all the code that could be impacted by it, and then hydrate it all before the interaction is applied
[01:07:16] . Okay. I'll bite. But you start seeing the challenges here. Okay. That's interesting. I want to see more of the solution. Boxes that any
[01:07:28]  web framework consists of, we covered only a few. We covered reactivity, we touched on event handling, and a little bit of dependency injection. There are way more to
[01:07:38]  cover. And this is from framework author's perspective. Adios Mani recently published a table from web developer perspective about features that are available in each individual framework. He shared
[01:07:49]  that at Google I/O 2024 a couple of months ago. And I modified the table a little bit to reflect my own view for the feature set in the world.
[01:07:57]  We can see that we're very much converging on the same features as well. So what does that mean for web developers? How do you even pick a framework nowadays?
[01:08:05]  Well, when picking a framework, don't overthink it. It will end up being the nowadays. I want to see how I want to see this edit. What does
[01:08:13]  that? All right, because Manny gave us partial hydration because of our experimental stuff that we've been working on with the Chrome team that hasn't been officially released. Technically
[01:08:20] , solid start does have an islands mode under experimental, but yeah. Svelkit does not server components. See, the funny thing is server components are partial hydration too
[01:08:34] . See, Adios Mani was trying to show that they're all kind of that like server components, partial hydration are kind of the same thing. And if you look
[01:08:46]  at it that way, a lot of frameworks have a solution for that. But I could understand. I like this. He put half moons on forget for fine grained
[01:08:58]  reactivity, which I like. This is a political way of doing it. Do you see that? It's not a full circle? That's fine, Mink
[01:09:08] o. Yeah. And I actually prefer people to think this way. Salt starts partial hydration is not officially released. So I think we should be empty here. I do think
[01:09:19]  partial hydration and server components is like differentiating these is kind of like one pile, the other. It's not really -- there's different approaches to partial hydration, but
[01:09:33]  these are partial hydration approaches. Yeah. In any case. Okay. What does that mean for web developers? How do you even pick a framework nowadays with a different facet
[01:09:45] ? But in a project that is going to serve real users and is going to be used over the years, probably the main one is stability and reliability. It's really important
[01:09:55]  to have also -- Yeah. Yeah. Okay. I got you. Yeah. And that's his final thing, right? If all the frameworks are going to be the
[01:10:02]  same anyway, then you should pick the popular or the stable solution, right? That's what he's getting at. And I think that's a good stance to take from
[01:10:11]  the angular side of things, right? They are very committed. We're talking about personalities. Angular is very committed to the enterprise group. They're very committed to being stable
[01:10:23] , migration safe, being dependable over time. And it makes them a safe choice from the mechanical aspects of it, right? The one thing, you know, that
[01:10:36]  Angular couldn't control is trends, you know, where things are heading. And they're now -- like for a while there, they were kind of off on their own.
[01:10:45]  They're now back on the main thread, so to speak. They're back on the, you know, doing stuff that's very relevant to the future of what we
[01:10:52] 're doing in the web community. So it makes Angular a very good choice. And it makes sense to have this perspective of, you know, this. Because if there's
[01:11:03]  convergence happening, it is definitely quite possible that not everyone's going to survive this convergence, so to speak, right? Like different frameworks, if they're all doing the
[01:11:25]  same thing, people are going to kind of know, gravitate to one another. Before there's a question mark. Oh, about the react, I forget. Angular
[01:11:41] . No, Angular has always been mainstream. I mean, it is interesting. It is more that there, like, there's mindshare and hype cycles, and
[01:11:50]  there's, like, reality of people building projects. Angular has always been a very good choice to build projects. It's just that, like, there's like a second
[01:12:00]  tier thing, the thing we see on Twitter. And that does actually have an impact on how people choose frameworks, right? I think Vue is second. And I think
[01:12:09]  Preact has recently past Angular. I think I saw a tweet where someone showed that. Actually, let's see if we can get, what is it? NPM
[01:12:18]  trends? Yeah. Obviously, we know where React is. React is the sky, so to speak. But I think I saw someone recently put in something that was like,
[01:12:32]  Vue versus, yeah, so, so what do we want? Let's do Vue versus Angular. And let's remove React. And then let's add pre
[01:12:45] act. And let's go two years. You don't see it. Somewhere. Oh, yeah, these spikes are just ruining everything. Remember that when that happened? But
[01:13:01]  like something happened over. Is this the wrong Angular? Oh, yeah, you're right. I completely saw your post. That is it. Thank you, Paraso
[01:13:15] cial. Yes, this. Yes. Completely saw this. React, Vue, Preact, Angular, Lit, Svelte, Stencil, Solid,
[01:13:31]  Alpine, Ember. That's, that's, that's where things are sitting. And then I think Quick is down at the would be I guess their 11th
[01:13:39]  or I guess we only got the top 10. But yeah, Lit and Preact are both ones that are kind of sleepers that people sometimes forget exist, but actually
[01:13:54]  have surprisingly high usage. Stencil's use of still being this high is actually, I wonder is actually interesting to me. Dencil is starting, they were on
[01:14:09]  par with felt for a while and then they started dropping down. Yeah, there are next ones that we got to close the gap on. As we've kind of spread off
[01:14:21]  from Alpine, I guess Ember and Alpine and us were all very close for a while, kind of pass through there. But anyway, where is felt sound
[01:14:38]  here lit Preact Angular? Yeah, yeah. So somewhere here that it crossed. Interesting. Yeah, Preact is quietly growing here. And then obviously view when we
[01:14:56]  can't show react on this graph because it'd be off the top. But yeah, very, very interesting kind of sea of download trends on frameworks. Yeah, no
[01:15:18] , lit gets used more than you expect. And there's like a certain contingent of people that think web components are actually viable. And the lit, it was very attractive
[01:15:30]  to them. They basically shoulder the hope of all web components. Stencil does too. But I think people are starting to realize like Stencil peaked in
[01:15:40]  2023, it looks like, and it was it already slowed down. So yeah. Yeah, it's tricky. There's, I think, the more interesting thing is,
[01:15:52]  I think, we'll see if it, if it, I think everybody, a lot of frameworks have slowed down somewhat. Preact hasn't felt hasn't lit may
[01:16:05]  have a bit stencils going down. Some of the smaller ones, it's hard to tell because there's too close to line. But in any case, yeah,
[01:16:27]  lit preact. Yeah, that's a good point. Because people who build small tools will want to use a small framework, you know, things like and stack query dev
[01:16:36]  tools are, are built built in solid, for example, like, yeah. That might not affect download numbers, though, for example, like, 10 stack query dev
[01:16:50]  tools, gets more downloads and solid does by like three times. So yeah. It's lit fixer SSR issue. I mean, they have a solution for SSR
[01:17:01]  that is specific to their framework, like this specific to every framework. So yeah, I think they have a SSR solution. I don't know how good it is
[01:17:09] , or like, detailed, but you say fix sounds like they had an issue. I'm not sure. They, they do have an approach to SSR, I believe
[01:17:17] . I haven't looked at lit on the server, I have to admit, not for a while, not since Justin and crew came trying to sell us on using web components
[01:17:29]  at eBay. Justin and crew came trying to sell us. Yeah, I'm gathering that response to lit. Yeah, yeah. No, I don't, I don
[01:17:46] 't care to know. Okay. Anyway. Yeah, Minko's talk. That's cool. Great suggestion, Sean. I, I'm glad to see that.
[01:17:57]  And I mean, this has been happening, as I said, for quite some time. The thing is, there's still a lot of really new emergent technologies.
[01:18:08]  So like, it's too early to like stamp the convergence, like different approaches are still looking into different stuff. So like, yeah, you know, pack some weird project
[01:18:22] , build Reddit clone with any program. This I was thinking about, some people want me to build a real world example, as a stream, we could do that probably
[01:18:32]  in a couple streams, I was thinking, I could update the real world demo. If you remember, a few years ago, there was something called the real world demo,
[01:18:43]  it was like a medium clone demo. See, the problem with these random suggestions is like, I'm not gonna get the CSS for a Reddit clone or whatever, right
[01:18:54] ? So but, but if someone has a demo app with CSS and stuff, I can steal, then I can do this and the real world demo. Yeah, it was
[01:19:05]  very popular a few years ago. People wrote articles, do performance things, I did, I did, I did the original solid implementation as like sort of my proof of
[01:19:15]  concept that we're ready for 1.0. I didn't release 1.0 for over, almost, yeah, over a year, a year and a half after I
[01:19:23]  wrote the real world demo, because I was focusing on SSR. But it was the first thing where I was like, okay, I've checked enough boxes that people can
[01:19:30]  create real apps, it might be interesting to port the existing solid real world demo to solid start, that could be a stream. What's wrong with Hacker News?
[01:19:41]  It's too simple. There's no right side of the story. It is a great example of read, but there's no mutation. You have navigation, you have c
[01:19:49] aching, you have all the like, how to make a good static site kind of considerations. There is dynamic content coming in. But something like HN probably doesn't belong
[01:20:01]  being made with a standard client side framework. It's why it makes, it's why it's such a good example for showing people like how inefficient JavaScript frameworks are compared
[01:20:13]  to ones that partially hydrate or, you know, do MPA approaches, right? That's my demo that I show when I want to show how good Astro is
[01:20:20] , right? If you watch my recent talk, Astro just kills it. And for HN, I don't really want to do anything more than Astro.
[01:20:29]  But for me, it serves as a benchmark from the perspective is if a client framework like solid or React can actually contend with Astro in that zone, it's interesting
[01:20:45] . Maybe, you know, DX will suffer and you'd still want to do it. But it suggests the possibility that one solution could actually be good enough for the spectrum
[01:20:56] . That's why I keep my eye on Hacker News. But it's, it's not like a strong point. That's actually almost like a complete waste of our
[01:21:05]  resources as a client side framework. It's, you know what I mean? Like we can do so much more with React or Solid than a Hacker News. It's
[01:21:12]  just like, it's like, it reminds us of how inefficient we are at the easy stuff. Trello clones are fine. I think the Remix guys are on
[01:21:26]  the right page. I think we can do a lot better in Trello than the current set of demos. You know, I think, I, I think, I think
[01:21:33]  that's interesting. The Trello example is actually, we're going to talk about it today, actually. It's one of the things that inspired, um, a
[01:21:43]  lot of, I, I realized that there was two problems that I was facing with, um, that I need to figure an answer for, for solid 2.0's
[01:21:52]  design. And we've been talking a lot about async, but the other side I need to talk about was, um, fine-grained projections. So that's
[01:21:58] , so I want to get into that today. Um, so we'll get there. All right. Fuzzy. I, I will, I will take a look
[01:22:10]  at this. What's this? A blazing fast algorithm in the transform one draw between it to another. Okay. Is it like, uh, morph DOM? Okay
[01:22:35] . How does he give every, he generates the nodes? I think what's interesting about this is if you want to do HTML diffs across the wire, right? So
[01:22:54]  this is how you handle the server part of the server components. I'm hoping without a virtual DOM, this is an area that I knew was possible. I just didn
[01:23:02] 't want to spend a bunch of time on. I think if this, I'm understanding it. Moving. Okay. The obvious point is moving heavy, which is on different
[01:23:11]  spots, your page is faster than a repaint. Other use cases. Yeah. You have to watch out about CSS layouts though. Sometimes moving stuff will cause like a table
[01:23:20]  that has striped rows, moving the rows that will actually cause recalculation on the stuff is actually worse than just changing the data on the row itself. Just a
[01:23:30]  side note. Okay. So what are we, what is he doing here? Okay. So what are we, what is he doing here? Okay. So he
[01:24:06] 's created a very smart diff. Okay. Let's go to, let's go to, to Okay. I'm not gonna worry about the algorithm. I trust him.
[01:24:22]  Okay. I know some people might care, but this. It's interesting. Cause I mean, this might be relevant. He's describing the action and then applying them
[01:24:37]  for the diffing approach. It's interesting. Cause like we all have a Dom diffing approach that we do in our framework. So like hidden inside a certain point,
[01:24:49]  you're going to have to have to, like, if you have a list of items and you move the list, you're going to have to move the Dom nodes
[01:24:53] . Um, V Dom. So he is using a virtual representation. Okay. Okay. Oh, so this is just Neo MJS. I've, I've,
[01:25:13]  I've seen this framework before. This is the guy who was really big on multi-threading. Yeah. Yeah. Yeah. Yeah. This is an interesting framework.
[01:25:22]  I've looked at it before. Um, challenge was that while I could do really incredible stuff with parallelization, the overhead on normal workflows means that this is why you
[01:25:30]  never see this framework in like a JS framework benchmark. Um, algorithmically it's efficient, but practically it like his, his needs, he's solving for a different problem
[01:25:45] . He's, he's trying to do work on a worker overall. My experience with this thus far is this approach, unless you have incredibly parallelized workflows where I
[01:25:58]  like this approach is generally slower for most things, but it is interesting if it ever wasn't, I don't know what it's going to take. Fast algorithms are not
[01:26:10]  sufficient, but if ever wasn't, this would change things. I, I, I feel like every couple of years I look into seeing where he's at and it's
[01:26:18]  possible with this latest thing that he's gotten, uh, you know, something has changed again and it's probably worth looking at, but this is generally one of those
[01:26:25]  projects that I keep my eye on, uh, you know, occasionally and be like, okay, how's it going? Cause he's got a vision. He's got
[01:26:32]  a mission and he keeps on working on it and it keeps on getting a little better every time, but there's a certain physics to the situation. It's kind of like
[01:26:39]  wasm why I'm a big fan of, uh, you know, leptos and whatever I want to, they're dealing with real walls that they can't really
[01:26:47]  overcome. They can come up with smart ways around it, but it's like, it's challenging, but at some point, something changes in the platform and it,
[01:26:56]  the, the dam breaks through loose. You know what I mean? So these are the kinds of things that I'm interested in. Thanks for sharing. LinkedIn for SS
[01:27:15] R. Um, it's fine, but like nothing beats string concatting. Generally virtual dom, link dom, anything like that on the server is waste. Um,
[01:27:24]  it's, if you have to go that way, you can, but it's slow. I I've been happy. It's faster than some of the alternatives,
[01:27:30]  but there's nothing faster than just compiling your templates to putting strings together. It's just not even it's, it's like a 10x factor. I,
[01:27:39]  yeah. All right. Syntax sugar fruit control. I don't know what that means. take a break and stream some fine grained ring. Yeah. I
[01:27:58]  play some games on it. Okay. Let's see what the spam is. Automatic versus manual context or signals. Okay. Is there anything else in here? Oh,
[01:28:10]  more offensive replies. How routers work in depth. How routers work in depth. Um, I don't know. That's interesting. I think he means client
[01:28:25]  side routers. I could, I could, I've done streams on that a long time ago. I have like, like when I introduce solid router, I, this
[01:28:37]  is a topic that if the timing is right, I could get back into it. I, me and Tanner have talked about this. Whenever I have Tanner on, we
[01:28:43]  talk routers. So not today, but it's interesting. Can you please talk about manual automatic subscriptions in the context of signals? Alpha. See, this, this is
[01:28:55]  what I was talking about. I, I get shared pretty much every, people always share new frameworks with me. So it's interesting, um, to see this, right
[01:29:04] . And there's a group of people who, who are into, yeah, yeah, yeah, yeah, yeah. This, this is what I was looking for.
[01:29:11]  There's a group of people who are into explicit, um, explicit, you know, uh, uh, uh, um, reactivity in the sense that they don't
[01:29:23]  want it to be possible for auto tracking. And the reason I went for auto tracking was a hundred percent templating, right. It was completely on templating side.
[01:29:33]  I have to admit because it's be cumbersome somewhat. See wire here, most of our wire values to a signal with explicit description, using it's all. So
[01:29:45]  this looks like to me, like a memo, right? Right. But it's, it's not just a memo because, okay. Yeah. It looks like to
[01:29:59]  me, like a memo, but you see how it's not auto tracking, you pass the reactive context in to the, the, the closure. And then only things that
[01:30:10]  get called with the reactive context are actually subscribed to, right? on click set count. So this, and this is also using knockout style syntax where you're using
[01:30:21]  a set, the set, the function with an argument. Oh, okay. This is okay. I have to figure out what's going on here a little bit because my
[01:30:29] , when I see this, I would say that the function with an argument is the setter, right? So it, you know, and without the argument, it's
[01:30:38]  the read, but it's not without the argument because it actually, you have to call wire and this one gets an argument, which is the subscription token. So if
[01:30:50]  I understand this, this can either accept, this can either accept the subscription token from this wire or it can accept the value for the next, like the next value of
[01:31:12]  this. I think that's confusing, but that's an aside from it. Like you could also have this be set and then not have that weirdness and just like,
[01:31:24]  or you can, you could use the dollar sign and have it wrap. You can go like dollar sign function and pass count to it. That's like these other APIs
[01:31:32]  that you don't hit this with. So I'm going to put that on a, like on the side to the thing. Interesting wire actually isn't it's coming from
[01:31:44]  the component. So this is not quite the same as a memo. It's an explicit way. Yeah. Cause how else do you get the dollar sign into your subscription?
[01:31:55]  Right? Like see this short form here is wire and it's passing dollar sign into the function you pass, which is count. So this is the short form here.
[01:32:04]  Personally, I thought this was, I don't know how props work here to be fair, because like, I guess these don't change. Cause they're not being
[01:32:19]  wired with the dollar sign. Personally, I found this kind of approach, basically a non-starter. Like when it came to templating, like I, I'm perfectly
[01:32:29]  fine writing my reactivity like this, you know, making memos and effects and doing all this and passing this explicitly and solids templating for a while was actually explicit where
[01:32:37]  it wasn't about tracking. It was about which things were reactive or not. We used to have a syntax where you, if you put like a parens on the
[01:32:45]  inside, that would mean crack this thing. Or if you didn't, um, you know, don't track it. So you had to be explicit about what expressions are
[01:32:57]  reactive. I not going to lie. I still like that to this day, but again, besides prettier stripping it out on me, which was pain. Um,
[01:33:07]  but like, besides that most developers, it was too much. I could tell that being explicit about it is the same reason. Like, it's really awkward to force people
[01:33:20]  to use like past functions in for each reactive expression. If they're using like a, like a HTML or hyperscript, you know, no JSX version it
[01:33:30] 's, it's these little pieces of indirection. We're exposing the mechanics of the reactivity. They really get in the way. Right. I obviously, as
[01:33:42]  I said, I liked the explicitness, but on the other hand is like, I couldn't convince anyone to use something like this. I don't think, um,
[01:33:52]  it'd be challenging. As I said, even when we had a bit of this, you know, there's, there's, there's going to be framework authors
[01:33:58]  and, and people that often hang around at solid discord that would love this kind of explicit, explicitness, but it's, it, this is harder to buy in on
[01:34:09]  a larger audience. It's actually harder in general, like even solid reactivity, you've, we've seen criticism where it's, it's challenging, you know,
[01:34:17]  Svelte takes it one step further than solid by getting rid of the function calls. Right. And using their compiler to hide it, but manually wiring this stuff is
[01:34:28]  like, if you took this example and wrote it in react and put it side by side with this, you'd be just like, like this, this feels almost like,
[01:34:44]  like when you look at angular and the rx.js and you compare it to like a react component, you're just like, what the hell is going on? Right
[01:34:52] . You could have written this in two lines instead of doing this. This isn't as pronounced as that, but it's why I have challenges at least with, with explicit
[01:35:03]  reactivity. It's the templating. It's, it's, it, it makes it challenging. That's just my opinion. Obviously, as I said, there
[01:35:13] 's people who are, who are fans of this kind of approach because it's very, very explicit. This probably lets them use the standard hyperscript transform. And
[01:35:24]  I, I, in one sense, I would say I like that better than forcing people to wrap things in functions, but they are kind of wrapping things in functions. Right
[01:35:34] . And props is a big one. I want to understand. My guess is that if this is reactive, this would be a signal and you'd have to wire this with
[01:35:42]  the dollar sign here, which means that, yeah, then you have the spread consideration. Yeah. It's, it's tricky. I mean, you can definitely go
[01:35:51]  that way. Um, but it's probably not where I'm at. Yeah. Okay. Yeah. Is it an argument for. So, I mean, it depends
[01:36:16]  on where you want to set boundaries. This has been the argument, like with the view in them, like, cause they even have more control. It's just like
[01:36:21] , once you leave the template, you have to decide what a boundary is and felt that used to be components. Right. But we know stopping at components doesn't make a
[01:36:33] , uh, composable reactive system. So they, they have to basically process every file. Honestly, to save two parentheses, it's just not worth it. Now,
[01:36:44]  I would argue Svelte's approach is, has one other benefit. It enforces locality of reactivity explicitly, which I love. Right. They don't
[01:36:55]  have to work. Like I always tell people about like foot guns and don't do this. I'm like, Ryan, why can't I do this? Why? Like
[01:37:02]  people always, you know, like do silly stuff, like trying to do like two-way binding and stuff like this. You know, I know Svelte supports two
[01:37:10] -way binding, but their syntax or signals actually like it's designed to prevent accidental two-way binding or people doing weird stuff. So it's already pretty good guard
[01:37:20]  against that. But generally speaking, Svelte's compiler is like, no, like we are not allowing these kinds of, you know, moving state around in a weird
[01:37:30]  way, such situations. I, I mean, we'll see how they go with their deep store or like their deep reactivity. They could definitely make some questionable choices
[01:37:39]  there, but and I don't know, Svelte 5 hasn't quite been released yet, but it's coming soon. Has it like, I don't know,
[01:37:47]  is Svelte 5 release? I think I would know it's release candidate still, right? Right. Okay. Um, what, what I'm getting at is
[01:38:03]  like you're, you're jumping a significant cost when you open your whole application to the compiler. That might be the future of frameworks where like, everything is compiled.
[01:38:20]  I mean, in a sense, we transpile like everything when we use, you know, TypeScript or something, but it's like, it's, you're,
[01:38:28]  you're a different language at that point. And I felt okay being a different language. I'm not sure I'm okay being a different language. If someone wants to write
[01:38:37]  solid in a different language, then power to them. People built DSLs, built stuff very similar to Svelte's ruin API. I think Alexis has built
[01:38:46]  that, uh, what was it called? Uh, I can't even remember now. I used to, I did a whole stream on it at one point. Uh,
[01:38:54]  I mean, and I can never remember the set of characters. It's like, like this, something like that. whatever. Uh, yeah, I'm, I
[01:39:14] 'm not gonna worry about this at the moment. Yeah. Yeah. The, the, the, the language thing. And I, I mean, power to him, right
[01:39:24] ? It's, I, I think this is why Svelte gets a lot of passes on these things. Cause they say that it's, it's, they tell
[01:39:30]  you it's a language, right? They're not like, oh, it's just JavaScript and HTML, you know, Svelte developers say that sometimes and they're
[01:39:39]  completely wrong, but, but Rich, at least they acknowledges that they're making like that. It's a language. Does re I'm not familiar, uh,
[01:39:56]  with it are, is there something new in remix? Like react router was built on Ember, which is the same inspiration for solid router. We all kind of use
[01:40:11]  the same children pattern. I'm, I'm not familiar with their layout routing. Is that how they do parallel routes? There's, let me see here. Let me
[01:40:18] , let me just check really quick here. Let's go to solid router. I started reviewing this parallel routes. Um, what's this remix proposal? No sibling routes
[01:40:36] . Okay. So this is not the same as this layout route stuff. Yeah. I'm not, I'm not quite sure what you're referring to. The core router
[01:40:44]  in solid has a lot of similarities to react router just because of the same inspiration at the base. We handle our data loading like a little differently, but everybody's basically based
[01:40:53]  on Ember. Um, um, file system routing conventions is a whole other thing. Um, I liked remix version one conventions. Version two seem novel. I liked
[01:41:02]  them at first and then I was, I just wasn't completely sold on it, but that's a whole different topic. I'm talking about their nested routes. Oh
[01:41:14] , solids had nested routes before react router had nested routes. If that's what you mean. Um, Ember had nested routes. Um, react router
[01:41:28]  actually, sorry. I take that back. React router had had nested routes in this manner and then they kind of removed it in react router, uh, four, and
[01:41:37]  then they brought it back in react router six. Yeah. So yeah. Yeah. I don't know what to tell you. I would, we have to do it
[01:41:50]  a certain way. We needed nested routes because we don't re-render in react. You could always get away with re-rendering stuff because we can't from
[01:41:57]  an optimization, almost every JavaScript framework that's not react has had to have nested routers this whole time. Uh, Svelte sapper had one, like,
[01:42:06]  um, they all kind of work mostly the same. All right. Anyways, let's talk about the topic for today then. Um, get a little water. I
[01:42:27]  already finished all my coconut water, unfortunately. Do we need a compiler step in general? Yeah. I mean, TypeScript to start with, I think templating benefits
[01:42:42]  from a compiler step. It's, you know, there's different semantics around where you like the data coming in and the output of your template, you know, so
[01:42:55]  like JSX, I think for reactivity, there's a huge ergonomic benefit. I like it's hard because stuff like tag template literals or hyper script stuff,
[01:43:08]  um, forces you to write all the rappers in yourself, which is a little bit awkward. I think templating, uh, doesn't wants to be a different language.
[01:43:20]  That's a place where like a hundred percent, I think we want it to be a different language. Like JavaScript is not a templating language. Um, but I mean
[01:43:30] , you can make do without it to a degree, but then like, it's not, it's not, it's not in compiler. It's like bundler
[01:43:36]  is very, very, very important, especially in terms of tree shaking and like optimizations around in that zone. I like, yeah, like I don't see no build
[01:43:49]  it viable for anything beyond the trivial trivialist examples, but like, yeah, I, yeah, I, I don't know. Depends what you mean by compiler
[01:43:59] . Everything's compiler. Like is ESLint a compiler? I don't know. All right. All right. Sweet. Um, yeah. So thank you everyone
[01:44:12]  for the suggestions. That was very helpful. Um, so, yeah, I mean, I was going to move on to the next thing, but if, if you
[01:44:26]  have a question, shoot shoot right now and I'll, I'll answer it. Just getting myself set up because I have four of these documents I've written over the last
[01:44:47]  couple weeks. Um, and I want to dig into a few of these, um, here, so I guess my question for the, the audience, so to speak
[01:45:05]  is, do you guys want to finish the async topic first, or do you want to talk about, um, or do you want to talk about, uh,
[01:45:12]  derivations and memos and whatnot? Because basically in identifying the short, in, in identifying the shortcomings of, uh, solid today and where we want to go,
[01:45:28]  we, we all, everyone highlighted that they wanted lazy signals, right? They wanted a way. This was something and every signals framework that has picked up signals in the last
[01:45:37]  three years, uses lazy signals. Okay. Sweet. Um, yeah. Async drive. Yeah. Let's, let's, we will definitely talk about that.
[01:45:52]  Yeah. Um, but, uh, what we're saying is like, there's this one thing that we had in solid 1.0 that was kind of, uh,
[01:46:04]  escape, uh, escape patch, which is this idea of create computed. And it, um, it kind of breaks the rules of lazy reactivity because it was a
[01:46:17] , it was a basically a calculate. It was like create effect that ran before effects that was designed to update other signals, which means that you were like effectively starting the calculations
[01:46:27]  over again. It broke the chain of reactivity, which is a pain for stuff like, like async and whatnot, and very awkward in, in general. Um,
[01:46:36]  um, and I spent a lot of time trying to figure out how to replace that primitive. And I had identified that there's three use cases, um, which I
[01:46:46] 'm going to get to in a minute. And, and that's, that's kind of been my motivation between behind a lot of the stuff I've been looking at it
[01:46:52] , right? We know there's the async problem and then we have how to replace create computed. Okay. Let's answer this question before I move on. It
[01:47:00] 's felt like solid. Every effect is a child of another effect or root effect that takes care of cleaning up. But what's the risk of not having a root effect is
[01:47:06]  memory leaking, but isn't, uh, is leaking memory, but it isn't. Okay. Well, yeah. I mean, signals and effects are, are two
[01:47:18]  way, right? Like they, they, the dependencies go both ways. Like with, with a memo or a derived value, you have a listener. So in theory,
[01:47:29]  if no one's listening, you know, you can free it up. Signals don't aren't generally like you have to make a choice. Are you going to
[01:47:39]  auto release? Like there's no computation. There's nothing to release. Are you going to auto release a signal if no one's listening to it at the moment? You
[01:47:47] 're probably not. And because if someone listens to it in the future, you need to know who listens to it. Like there's this, there's this sort of awkward
[01:47:56] ness here that, when you go through the cycle of updating a signal, it, it, the, the effects that as they rerun, they clean up what signals
[01:48:07]  they've subscribed to, but they also have to tell the signals that this, the effects aren't in their graph anymore. So it works both ways. So if you don
[01:48:14] 't, if, if you let go of the whole thing at once, you're fine. Top level effects and signals are perfectly fine. The reason we have this warning in
[01:48:22]  solid is because people do funny stuff like create an effect in an event handler, like in some random context that life is shorter than the global signal. Right. And this
[01:48:38]  used to be a problem in knockout. Maybe people don't do this stuff anymore, but it was like very awkward to find these memory leaks because people would like do something
[01:48:46]  async and then like create reactivity and it would work, except it would never get released. You know, they'd go like, await something and then Google like
[01:48:53]  create effect, like programmatically. Um, and this is the, as I said, I wanted to warn people or be like, Hey, don't do this where you
[01:49:04] 're just like creating these react, this reactivity in a short lived scope. And the problem is I can't tell from JavaScript side that it is a short lived scope.
[01:49:12]  I don't actually know this. So we just weren't on it all the time. So I set up the, the, the main route as a way of just being
[01:49:21]  being able to dispose of everything essentially. Uh, it also has the benefit in solid because we're completely synchronous that it actually is the end of the queue for the effects
[01:49:30] . So from that perspective, create root gives us a mechanism to, to be synchronous. Otherwise you'd have to wait to, to the next micro task. So it serves
[01:49:39]  both purposes. Um, but like, yes, if you top level, make some effects and make some signals and they last a lifetime of your app, you don't
[01:49:48]  care. It's just that people do stupid stuff. So I made, it's kind of like react has a warning that they got rid of recently that used to piss people
[01:49:57]  off. Um, I can't remember which one it was, but it's, it's, it's of that nature. Um, it's not the key warning.
[01:50:03]  The key warning is important. It was like a different warning react used to give. I can't remember it off the top of my head. Um, but they used
[01:50:11]  to be like, Hey, you probably don't want to do this for, for top level effects. And so it's the same kind of idea. Yes. Yes
[01:50:25] . I, yes, yes, yes. Yeah. Am I not supposed to be something happening? The way you said this depth makes me concerned. Yeah. I always had
[01:50:48]  this question because the end of the day, even the root leaking in the end. Yeah, exactly. Yeah. It's just, I have to consider some of my
[01:50:55]  biases and where to set stuff. I just, I use reactive frameworks like signal style frameworks for like 15 years. I've seen every misused behavior. So when I brought
[01:51:07]  them over when solid, I was like, okay, I don't want people doing the really stupid stuff. Um, that's why solid is stricter in some places
[01:51:15]  than people think is reasonable. It's just like, there's, there are a few foot guns that are just horrendously bad, but it's always hard. Yeah
[01:51:30] . It's, it's, it's, it's always hard to, um, it's hard to find a balance because boundaries change because over time, our understanding of
[01:51:43]  how things should work shift slightly. So something that we are really strict on in one case in the future, maybe enough has changed that we shouldn't be so strict on
[01:51:51]  all of it, but only a part of it. Um, but yeah, I I've definitely made some assumptions on strictness there and I don't know if they're
[01:51:58]  right because it leads people to confusion. Like you just had, but on the other hand, God, it is terrible when people create reactive stuff in random contexts and a memory
[01:52:08]  leaks like crazy. It's just like the worst. If someone creates reactive stuff in event handlers, like literally every time you do the event, you're just exponentially
[01:52:17]  like compounding on the amount of work that signal changes. Yeah, I didn't post the cover till this morning. So yeah, I, it was one of those
[01:52:31]  situations where I was just like, didn't have a cover, but I, yeah. Oh yeah. Right. Don't forget to like and subscribe on YouTube. Yes
[01:52:46] . Thank you. So let's, let's, let's, let's, let's, let's move on. Um, so yeah, derive stuff and as
[01:53:03] ync stuff. Uh, what do I feel like hitting first? Hmm. Looking at the time and trying to make a decision as an educated decision on the time, which,
[01:53:23]  which content we should go for. Cause in one sense, I think the async stuff, could be faster, but then if we don't have time to cover the drive
[01:53:31]  stuff, I'm going to be very disappointed. So it's, it's tricky. Um, let me look here. This, this at least was written a lot better
[01:53:43]  than my last couple articles. I'm just going to share this one. Let's, let's finish up the async topic while we can, and then we'll
[01:53:50]  move on. Um, run once suspense. What does that title mean? Okay. I've been the last little while when we've been talking about this topic of suspense
[01:54:07] , a lot of, I I've been feeling people, I've been focused on at it, sorry, from like an academic standpoint, like, should we care about consistency
[01:54:14] ? Should we not care about consistency? You know, as a default. And I've been hard lining on either side from a perspective of a philosophical stance of like how things
[01:54:22]  work. But the thing was, it doesn't make anyone happy. The consistency stuff causes people to have to buy in to certain things that they're not that's too
[01:54:33]  far from their current model. And the inconsistent stuff, this doesn't help me do what I want to accomplish. So it's like, it felt like there was very,
[01:54:42]  two very distinct paths. So I came up with right after the stream, I sat down or that night I was like, was thinking, and then the next day I just
[01:54:50]  like typed it all out of a proposal, which I hope would address both sides of the argument. I did present this in the solid discord. The guys who didn't
[01:54:59]  like suspense that they still wouldn't be using suspense. So, but I'm hoping that's not everyone. Yeah, right. Yeah. Okay. So what's this concept
[01:55:20] ? What if the biggest challenge I think with people's suspense is on one hand, it just handles things nicely, but then they do a bunch of async stuff on
[01:55:32]  their page, you know, fine grained updates and all this. And suddenly their stuff's getting yanked out of them and it's going to fall back where they
[01:55:39]  don't expect it because everything below suspense triggers suspense. And then you get into this kind of mess. And the last time that I talked, we talked to all about
[01:55:48]  this latest API as a way of like breaking out of it and being selective. And then, so I was like, okay, what if people didn't have to worry about
[01:55:59]  latest? What if we basically only did everything the first time and that's sort of where the thinking behind this model goes. Okay. Right. So let me kind of
[01:56:12]  summarize. Well, a lot of ideas have been processing pretty powerful, complication, blah, blah, blah. I have a fairly new radical idea from an academic standpoint
[01:56:19] , but possibly the right to it off in the practical sense. So I'm going to split goal. Provide a colorist, non-annullable async model
[01:56:24] . Yes. You guys all know I want colorless async. Restore confidence and suspense by leaving more control in the developer's hand. That sounds good. Have a
[01:56:32]  model that is consistent across SSR and client updates. Yes. That is also my goal. That's why inconsistent doesn't work because we need it to work for SSR
[01:56:40] . Sub goals have a default behavior still reasonable for people unaware of these features. That seems decently important. remove the need for latest style APIs and challenges that come from
[01:56:51]  introducing back nullable async gap. The problem is latest gets people into nullable async again, just because they're trying to avoid suspense triggering again. That's,
[01:57:02]  that's my idea. So what's the concept? Instead of seeking consistency in all things, we take the default of hold on creation, tear on update. Hopefully this means
[01:57:12]  something to you because I talked about when you have async, you have three options, right? You have keep it in the past or hold you have, um,
[01:57:19]  hide it, like use a placeholder or you have, um, uh, tearing, which is basically like show what you have and showing consistent state. Or you have
[01:57:34]  like optimistic update, which is kind of like a better version of placeholder. Um, so yeah, three or four versions, depending on how you count it. But the
[01:57:44]  idea here is change the behavior on initial versus update to fit what makes sense for you because most frameworks generally kind of force you into like a certain mode and it's not
[01:58:00]  comfortable. Okay. I see this hot. Is it related to what I'm saying here? I'll explain further. Let's continue here. While an opposition to take as
[01:58:14]  someone seeking consistency, some conversations with Dan Abramoff a year back or so were pretty illuminating to me, but I didn't actually actualize it till now. He
[01:58:20]  told me while transitions were good, he expected most developers to opt into tearing to escape suspense. This is interesting because async tearing is the default for frameworks without suspense,
[01:58:30]  but now, but now with suspense, you need to jump through hoops, like use deferred value in react or latest and solid to accomplish the same thing you get in
[01:58:38]  normal behavior. I don't think implicit transit transactions can actually work, which is what I was talking about in my last stream two weeks ago. Like you need a way
[01:58:50]  of saying that these changes belong together. You need a way of opting out and yeah, it's challenging that like it's, it's, it's, it's
[01:59:02] , this I'm going to, I'm going to try and, and put this out, out here. We have to consider the whole impetus behind transition API is one
[01:59:10]  that once you have loaded content, you rarely want to go back to fall back pretty much never. And yet it is what happens naturally. The second you update data,
[01:59:18]  as soon as you add suspense, right? When you add suspense, you're always going back to fall back unless you add a transition as well. It's simple experience for
[01:59:26]  the naive API, but in real apps, it's pretty clear that people pretty much never want stuff being ripped out from under them on an update. Right. It's easy
[01:59:32]  to just be like, Oh, look, I got a loading indicator, but like, this is why people don't pick up suspense in my opinion, right? Because they
[01:59:39] 're not going to go guard all their rights into transitions. Like they have too many rights can happen all over the place. Right. A small but important development was a
[01:59:50]  later change. I believe Ricky made to suspense, which was new suspense boundaries always went to fall back in a transition while existing ones participate in the transition. It was a very
[01:59:58]  clever approach to separate creation from update as developers can control behavior simply by how they structured the code, like where they put the suspense on the new page. And then the
[02:00:06]  suspense is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more
[02:00:11] . And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be
[02:00:13]  a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense
[02:00:16]  is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more
[02:00:20] . And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be
[02:00:23]  a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense
[02:00:26]  is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more.
[02:00:29]  And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be a
[02:00:31]  little bit more. And then the suspense is going to be a little bit more. And then the suspense is going to be a little bit more. So that's what
[02:00:35]  they want to use all the time. I'm not sure that poster realized the impact this would have on my thinking, to be fair, because they didn't have the parentheses
[02:00:43] , but I've read it as such. But innately, this is what most developers would think they want the most of the time. It's tearing when a value has
[02:00:51]  been set while holding if it isn't. Well, it's hard to have a full context of reason behind these sort of decisions. I admit, I haven't explored this
[02:00:57]  as primary models. So let's do it. Yeah. So just to kind of follow. Yes. Last stream, as I said, a comment. This is why
[02:01:07]  I find value in streaming this stuff. As I talk it out, see, interact with you guys in the chat. It actually gives me a lot of inspiration in terms of
[02:01:16] , you know, finding solutions for these problems, maybe in the most unexpected place. So yes, the silly comment you can go find in the last stream, basically produced,
[02:01:25]  got me to produce this document. Right. So high level of this prozo is top level, holding explicit transactions and run one suspense boundaries. What I, I'm
[02:01:37]  going to explain what that means, but one thing that became clear to me is that with colors, async, we can't do predictable pairing and top level holding aligns
[02:01:52]  with SSR. Right. What I mean by that is I showed this last stream, but if you have. Two separate values, two separate values, like say account
[02:02:04]  and some async user data being loaded, if you're doing this throw style reactivity, if those two things converge, so like they're in the same effect or in
[02:02:14]  the same piece being rendered. essentially you might show count independently somewhere and then show it somewhere else being the wrong value, because you'll, you'll see two different versions
[02:02:31]  of count because one gets held up in the async. This is without transitions. This is if you opt into tearing, uh, essentially you'll actually tear the same value
[02:02:40]  in multiple locations, depending on whether it's an async or not. Right. Where in most systems today, when you tear, you're not, you'll just
[02:02:49]  see, you know, the same new value in both places for the thing, not connected to async. And then the async will take a moment to come in.
[02:02:58]  So unpredictable tearing with the color of the async model is bad. Um, it's one of the downsides. So top level holding, like if you don't
[02:03:06]  put suspense, you don't do anything makes a lot of sense. Right. Because it will push everyone to use suspense, which is such a pushy way of approaching it
[02:03:18] , but it won't tie their hands because by default suspense will only go to fall back on creation. This is what I'm proposing. We need that for SSR
[02:03:27] , but we don't need it afterwards. Right. SSR only cares about initial rendering. That's why this concept could work because I'm basically proposing that all resource reads
[02:03:38]  or async reads are post dot latest or post internally. This is what it's doing. It will, when there is no latest value, it's never been resolved
[02:03:44] . It's going to suspend on the actual resource read, but afterwards it always gets the latest value. That's, that's, that's sort of what the proposal here
[02:03:55]  is. What the impact of it is. Um, I'm going to get into more. Yeah. Okay. From here, explicit transactions are still valuable for big changes
[02:04:09]  like routing. Um, most people won't use them directly or have to worry about the suspense boundary triggering. Suspense boundary triggering. So basically most people doing their
[02:04:16]  day to day work. The thought here is they're just going to continue pairing. That's if suspense didn't exist. They're just going to like do normal stuff.
[02:04:22]  Suspense is only going to be the initial placeholder when the page loads. And then they'll just like do stuff as normal. They, they won't think
[02:04:30]  about suspense after initial page load. That's, that's the thinking here. So in absence of suspense, any thrown promises will hold all rendering. Okay. That's,
[02:04:38]  that's pretty harsh, but that's the premise I'm going with here. So, you know, initial, if you do something async during SSR, you're
[02:04:48]  not going to stream the page until, you know, that thing updates, you know. Uh, if you're on the client, we're not going to render anything
[02:04:57]  until all the async data is loaded. If you don't put any suspense in. Yeah. Let's move on under normal operations, only async values that have never
[02:05:05]  been resolved through. Once they have been resolved, they read from the latest with one exception. If they are read under a newly created suspense boundary. Okay. This exception I
[02:05:12] 'll talk about later. It's not a necessity, but I think it's important for keeping behavior properly. Async reads will register with transactions unless they are under a
[02:05:21]  newly created suspense boundary. This is the same as we are today. Okay. Hopefully you guys are still with me. I understand this is a dense topic. Okay. But
[02:05:29]  I have some real examples, two modes on initial render. Let's bring back my example. So here. It's the only difference from today is you don't go
[02:05:40]  back to fall back. There's two differences. We hold top level. If there's no suspense and you choose to use these primitives and the other difference is we don
[02:05:52] 't go back to fall back on an update. I'm going to explain it right here, right? We'll start with initial render, initial render, create async
[02:05:58] , get some post by post ID. Now by default, this would show nothing until the post is loaded, right? There's no suspense boundary or nothing. It literally,
[02:06:05]  like if this is a client rendered, it would just basically blank and then it would show the finished data. We'd hold off all effects on the async is done.
[02:06:13]  It would not be expected, but this removes inconsistency. We can't control tearing under initial conditions. As before adding suspense would allow us to show the nav immediately
[02:06:19]  and then wait to show the body. So you just put suspense here and then you'll see the nav and then this will load it. Right. Okay. What about tearing
[02:06:27] ? I'm proposing you can't last time when I did the article, I showed that there are three modes, right? You could do for each initial and update, but
[02:06:35]  here I'm saying that you can't tear very easily on initial. And that's because the async premise, it doesn't really work with SSR tearing because then the
[02:06:45]  framework doesn't know what it has to wait for. Um, and you would probably just be using tearing to show loading states anyways. And we have suspense for that more
[02:06:55] . So it leaves open for people to experience undefined values. If you can render part of the UI before the data, it depends on it is present. You can
[02:07:03]  need extra null checks and stuff. Like the, the nice benefit of this is like people can't like sneak into a event handler that uses post. So to speak,
[02:07:13]  so to speak, it's, it's less likely. What if you really want to tear on initial render? Well, use create effect on mountain stead. In a sense
[02:07:21] , you're pulling it outside of the initial render. This is just like hydration rules on SSR, right? If you really want to tear, use an effect to fetch
[02:07:29]  the data and don't bother. Do you, you know, doing this is essentially what I'm saying. Then it'll just happen client side. It'll just happen
[02:07:38]  after render. Yes. Yes. Lazy. Lazy technically would, would, would be the, would be this as well. Yeah. Yeah. I mean, this
[02:07:57]  is why I put this out there. I, this proposal. Yeah. Is interesting because it, it does push people into suspense. The pro the, this is a
[02:08:06]  good point about lazy because technically speaking. Yes. Lazy would hold as well. Well, I'm getting at is if you did this though, it's very clear
[02:08:19]  that you're saying I only wanted to fetch on the client. Right. Right. Like the, this is, this is basically saying like, I do not want, because
[02:08:32]  the server has no way of knowing. And yeah. Like it's basically mirroring the server semantics. or the isomorphic semantics on the component code.
[02:08:42]  I will say the holding the world thing is probably the most controversial thing about this. It pushes people to good patterns, but I can understand people being, lazy component's a
[02:08:53]  good example. It might be possible that we could have lazy, have an option not to do this just because of the migration story. But let's continue here. We
[02:09:08] 'll worry about the accepting cases afterwards. Now, the proposal is the tear on update by default because existing resources that have resolved once from latest. So starter code here works probably
[02:09:20]  as you'd expect, right? So now you've already rendered the whole page. When props ID changes, the changes to the nav will happen immediately and then the post will
[02:09:29]  come in afterwards. So you're gonna see that tearing. Similarly, having spencer doesn't change that behavior. So now, you know, yes, loading indicator here
[02:09:40] , but in the future, it tears, essentially, if you don't do anything. It does not trigger suspense again. It does not go fall back again. That's
[02:09:49]  the biggest difference about this proposal. I don't know if this is good. It's just, I wanted to explore what this felt like and if people would get on board
[02:09:57]  with it. Because both async resource and suspense have resolved before, they won't trigger suspense and get tearing. Now, you might want to show a loading indicator while
[02:10:05]  it's tearing. We could have the nav draw a spinner by passing it through, you know, an is loading helper, basically. Interestingly, because we hold on creation top
[02:10:14]  level, this would never appear initially and only after the fact. So if you wanted to, you know, the nav could have a little spinner on it, right?
[02:10:22]  And basically, my proposal is saying that there's a loading helper, kind of, it's kind of like dot loading, but the difference is this could act, you could
[02:10:32]  put a whole expression in it. You can go like, is loading posts or user. And then if either of them are loading, you get a true back, essentially.
[02:10:40]  It's asking if this whole reactive expression is loading. Now, you might be like, there's duplication here, but what this is pushing you towards right off the bat
[02:10:50]  is the difference. between initial fallback and future loading state. It tears, but it's something Benton actually said on last stream where he was talking about, what
[02:11:00]  if I want to tear and show a loading indicator? I think a lot of times that's what people end up actually doing for smaller changes, right? This means that you
[02:11:09]  don't need a transition or something to do loading state. You can just like go, okay, is this loading? Ask the question and then indicate here. because you
[02:11:21]  have different loading affordances usually between initial load and update if your intention is not to unload the whole page, right? No one, no one, like, I don't
[02:11:36]  know how often, I mean, I'll ask chat right now. How often when you're building UI, do you have, do you like unmount everything into a
[02:11:46]  loading spinner when you're doing update versus just like do a localized update on the page after initial load? Hmm, yeah, I, I, I should have looked at
[02:12:05]  that. I said that, that it wouldn't show up. I, I, I, yes, in this case with the suspense in it, I was saying that it
[02:12:12]  wouldn't show up, but you're right with the suspense and it should be, I should update this. I was talking top level. If it was this right here,
[02:12:17]  it probably would show that loading indicator. We, we could talk about that behavior. Um, but yes, yes, I actually write. I think this would show the
[02:12:26]  loading indicator. Yeah. The nav loading. I never, like, yeah. No. Yeah. What I'm trying to never amount I can think of. Yeah. Yeah
[02:12:38] . Like what I'm trying to say is like, no one, no one does that. Like, even if you, it's interesting though, because when you build U
[02:12:45] Is and you don't take placeholders into consideration, you have loading indicators all over the place, but like I, I built social media apps, generally speaking. You
[02:12:54] , you don't want to have like every little thing loading, like 15 million spinners everywhere. It's nicer in certain cases to just like group them in on loading,
[02:13:05]  but then afterwards, yes, you will have individual spinners and individual loading indicators. So the, the, the thinking behind this is that like, if you already, people
[02:13:15]  already have two affordances for loading suspense is just placeholder. Like maybe we should rename it to placeholder component, and then you can handle loading yourself. It's
[02:13:26]  depends where the suspense boundary is everything, uh, async above the suspense boundary read above is held. And then once you're in a suspense boundary, well, then if
[02:13:42]  the async's resolved above, then you can stream of that. That's, that's basically what I'm, I'm suggesting it's where the suspense boundary is,
[02:13:50]  um, right? Like we still have the defer blocking on the resource level. If we, if you want to, you know, have that finer level of control, but
[02:14:00]  like the default is if you don't put a suspense boundary in the whole page will load from the server, like render async, it won't stream at all.
[02:14:09]  Basically you'll just like send the final thing. And then once it's on the client, it'll tear because it's already been rendered once. Right. Anyway. I
[02:14:16]  like, because it's not overloaded. yeah, I wish it knows nothing. Well, that's what I'm saying. The, the, the loading indicator knows
[02:14:31]  nothing about suspense, right? But you're saying you just don't want suspense at all. If I'm understanding. yeah, I mean, that's suspense has always
[02:14:48]  been an inversion control mechanism, right? Someone introduces the async data. Someone makes the decision where the suspense boundary is. If you introduce it, this is one of,
[02:14:59]  I think the saving points of these kinds of things is generally speaking, if you're introducing the async data, um, you are responsible for introducing the suspense boundary. The
[02:15:09]  colorless means that the, the further downstream components don't have to worry about whether stuff's async or not, because whoever introduced create async should be thinking about
[02:15:18]  suspense. That's, that's the thinking. I don't know. People might think that doesn't hold up, but that's, that's the logic behind this.
[02:15:26]  Right. It might be weird to have two different loading influences, but one is a placeholder and the other is a loading indicator in a sense, suspense probably won't make
[02:15:39]  sense. Yeah, I already mentioned that if you really want a loading indicator to be a placeholder, you could nest a show, right? You can, you could
[02:15:45]  do this like suspense, fallback loading, show loading. Like you can always force it back into this. If you really wanted to, this is like a really silly example
[02:15:54] , but it's like showing how. Like I'm, I'm just hypothetically saying you could, you could make it go back to placeholder if you really wanted
[02:16:06]  to, but basically I'm saying in the same way, it's really hard to do tearing on initial render. It's really hard to do placeholder on it's the
[02:16:14]  hardest mode is to do placeholder on update. That's the thing here. There are exceptions. What I'll talk about, the last mode is holding here, which can
[02:16:24]  be handled via transactions. In this case, the component stays the same, right? If, if we're obviously, but if prod updates, maybe server wraps update.
[02:16:33]  Yeah. So I, I create a transaction here and I'm, you know, what am I doing? Through transaction, just show API. Yeah. Okay. Yeah
[02:16:41] . In, in a transaction case, it'll hold. Um, and then, yeah, we, we, we can probably use like the, the is pending or whatever
[02:16:53]  from the transaction. If we want to, my gut is transactions will happen in places that know like router, which means that like, these are different than the localized loading
[02:17:06]  indicators that you'd be using in your place. Like this is a bad example. Cause I'm using it a nav, a nav would probably always use the transaction. Instead
[02:17:13]  of asking if post was loading, the nav would be above and would generally use the transaction state to do its loading, but smaller things local to you, where you're,
[02:17:24]  you know, doing littler things, you, you'll have more control over your loading indicators. Um, yeah. Can suspense be rude examples? They're going to
[02:17:41]  know, well, what I'm saying, sorry, which example specifically? Um, if you remove suspense, then we have to wait for all the async initially.
[02:17:53]  Right. Like we, like tearing is inconsistent, which is the reason why I'm pushing towards hold. Right. Um, the one with suspense at show. Yeah. Okay
[02:18:07] . Yeah. Let me, sorry. Look at the one with suspense at show. Yeah. If you know, if you remove suspense here, then. Um, is
[02:18:16]  loading, I don't think triggers suspense, right? So yeah. What would happen if we did this then? Yeah. I mean, yes. Uh, yes, this
[02:18:30]  would probably, this would probably work. Yes. This would work. I guess this, yeah, it could tear like this. It wouldn't work for SSR because
[02:18:42]  what would happen if you remove the suspense is it would. Um, yeah, actually this is your bailout. Um, yeah, for SSR, it doesn't
[02:18:54]  work because the server doesn't know what's waiting for it. And it'll just render nav blank and then get completely screwed up on hydration. Um, actually, yeah,
[02:19:07]  like I, I think, but yes, this would for client side render, this would give you tearing. Um, yeah, yeah, this, this, this is
[02:19:24] , this is how, yeah, sorry. Thanks, Deb. This is actually brilliant. This is how you opt out of, of, this is the, I should add
[02:19:32]  this. Yeah. I think this could be the way you opt out of, uh, global holding. No, this, yeah, no, this is how you opt out
[02:19:43]  is loading doesn't trigger suspense. Yes. Yeah. Yeah. Yeah. I, I, I got to update this. This is, this is actually good. This
[02:19:52]  means that people could avoid suspense if they, they have two options to avoid suspense, that they really don't want to use it either. They do nothing and their app locks
[02:20:07]  up on that initial render a little bit, or they guard it and say like, don't show this thing. Yeah. And without suspense, that would not hold.
[02:20:21]  Yeah, this, yeah, this gives you, yeah. So yeah, sorry. I said that the wrong way. There's two ways to opt out a global holding.
[02:20:27]  Use suspense or use a show component and guard with loading. Both of those. as long as you don't do a read, you won't trigger the top level behavior
[02:20:41] . Yeah. The main reason, cause like I could argue that instead of holding, it just errors. Right. But then we wouldn't have the same SSR semantics
[02:20:58] . So like my, my, my leaning is towards having that I'm holding, but yes, actually this is huge for, for, for, I think, Brendan
[02:21:08] 's condition here, because he can use loading guards to prevent suspense, um, in general needing suspense in general. Because I I'm yeah, that this is actually important
[02:21:31] . Okay. Thanks for that realization. Let's continue. Okay. So let let's look at, uh, I, yeah, I don't know what the, the
[02:21:45] , the, to be fair, I was just saying in general, I don't know what, what he means by here. I guess initial only is like what I'm
[02:21:51]  proposing right now, initial and added it or no initial loading. It only is basically literally saying that the suspense can only trigger. Cause you're gonna see there's an
[02:22:04]  exception here in a second. Um, only trigger once initial add is what I'm proposing here always is our current behavior and never is. I mean, I, I
[02:22:18]  think he's hoping to like, it's a trick to turn off suspense below it, I think is what he's suggesting here. Like basically say like, use a suspense
[02:22:29]  boundary because we only go to the nearest one as a way of canceling all suspense below that point. Like it's a way of opting out of it. So
[02:22:41] , but before we get into modes, cause I hate modes, like we'll like, if we can avoid them, I'm going to, I'm going to talk about
[02:22:49]  like our simple routing case. Um, the takeaway should be that the happy path is more or less the original code we wrote with suspense plus a loading indicator. It won't
[02:22:58]  interfere with normal operation going to fallbacks unexpectedly. It can, it can participate in transactions without requiring your code to change. It sets you up with a pattern that works universally
[02:23:06]  for SSR and the async is not nullable. Okay. Beautiful. It pushes you into basically two of the three modes for each phase. Yeah. See the
[02:23:13] , the, the show realization that you guys just made me have is actually brilliant because yes, the, you, you can't have an undefined value. You can
[02:23:26]  guard against that, right? Like th this is still holds up in that there's no way to basically ever have an undefined, which is what, which is what
[02:23:37]  I want to wanted to get to. Yeah, no. Okay. So basically summarize I want to summarize creation hold by default placeholder with suspense update terror by default hold
[02:23:47]  with transaction. That's, that's basically the model. It's the, what I've just realized though, from what you guys expected or, uh, what you guys
[02:23:56]  suggested is it is possible. Yeah. It's not even hold. It's also possible to basically do placeholder on creation with a show component. Um, but it won
[02:24:08] 't work properly with SSR, but it, it is technically another way of doing it. Okay. But there are creation update boundaries. So clear. So the most
[02:24:19]  part of the thing is, okay. Okay. So I made an example here where we have a nav that has a tab and it get, it handles the set like pictures
[02:24:29] , an anchor, a bunch of anchors. So like whenever you click it, it will call set tab and select a tab showed here. Our suspense foundry is above
[02:24:37]  our routes. So we have three routes, ABC. Okay. Now I've taken the liberty of adding suspense around the switch. I'm going to assume that these components
[02:24:46]  might be lazy and without a suspense boundary, we wouldn't show nav or anything until we went and grabbed the component code. Yeah. I see lazy for people who really want
[02:24:52]  to avoid suspense. For some reason, I see lazy being awkward, but let's, let's, let's just, let's continue here for a minute. Where
[02:24:52]  we're without suspense boundary. As we switch tabs, we would freeze our app while navigating. It would not update anything in this plan to the lazy code loaded and rendered.
[02:24:57]  Well, it might technically it, well, you might think technically this is an update. The, the lazy component is a new async primitive that hasn't resolved before
[02:25:10] . Like the way lazy works is the first time you render it. It suspends. And then afterwards it has the code. So like whenever you first go to a
[02:25:25]  page that's lazy, it plays in suspense, but it's, it's basically already a suspense or latest. So like whenever you first go to a page that's
[02:25:30]  lazy, it plays in suspense, but it's, it's basically already a suspense or latest native capability, right? Cause you only need to spend the first time with lazy
[02:25:41] . Otherwise you already have the code, right? If we navigate back to the same page, sec time, it won't go to fall back over the lazy component. But
[02:25:50]  the first time we hit it, unless we preloaded, maybe on hover, we're going to go to the same page. We hit it unless we preload
[02:25:55] ed, maybe on hover, it will. So what I'm suggesting here is because it is a new resource being created, it doesn't have an initial value. So it
[02:26:04]  will trigger the fallback the first time you navigate to any page, but the subsequent times it will not trigger the fallback, right? So technically the suspense boundary ran more
[02:26:17]  than once, but it's because we, we hit resources that for the first time that have never been resolved. That's the only time we suspend. Okay. So
[02:26:27]  the title might not be quite right, but you get where I'm going here. So suspense does what you expect. You see the place over when you navigate. If you
[02:26:34]  forgot suspense, you won't see a placeholder, but you've invented a glorified MPA. It's a bad joke. Click the link, then wait while
[02:26:41]  we can't do anything. And the current page, you know, until the current page loads. And this applies to new create async permutives you might find
[02:26:55]  in these components or any other page, since those will be new async permutives. If you read directly under, they will trigger the same suspense around your navigation,
[02:27:03]  but unlike lazy, because they're created every time you go to the page, they would trigger fallback. Like you expect on your navigation. So what I'm saying
[02:27:10]  is if A, B and C fetch their own data and they actually put the create async inside, navigating will go to fallback on every single thing. Right? So
[02:27:20]  when you're on a page and you've already loaded your data and you're updating it, you're not going to go to fallback. But when you go to a
[02:27:25]  new page that loads its own data, it will trigger suspense. Right? So the, uh, more concrete example is, um, Yeah, yeah. What'd I
[02:27:46]  say once you're on the page, those ac prints would never trigger suspense. Again, updating data won't do it. That means you retain full control within your page.
[02:27:54]  This triggering fallback also includes updating search or query parameters. So I imagine most routers would opt into transactions as a holding semantics or preferred over tearing. Right.
[02:28:03]  But I'm saying like the default behavior is like, if you just change one query parameter, you're still on the same page. Then it's going to only update the
[02:28:12]  one thing. It's not going to go back to fallback. Right. Obviously. Routers are very transit. Like they're very transactional, like page switches
[02:28:22] . So I think you should use a transaction there, but for like general purpose stuff, it's fine. Since the suspense boundaries above the switch, it already exists at the
[02:28:29]  time of the navigation. So wrapping the tab switch to be a transaction would mean that it could hold without blocking when it, without, when it does its updates. And
[02:28:36]  by blocking, I mean like without locking, I shouldn't say walking, walking, it holds the page, but it's still the reactivity is still running. But
[02:28:46]  your changes locally still tear. Okay. That's, that's, that's all I'm saying. Okay. So what about a more advanced routing scenario? What about nest
[02:28:54] ed suspense? So I'm going to show two pieces of data. And then I'm going to nest suspense, right? You could, I could read all the data
[02:29:05]  reads and nested suspense here. If the, if the component wasn't lazy or already loaded, uh, or had already loaded as part out, uh, outside of the
[02:29:14]  suspense, it will render immediately. What I'm saying is this will not, if we put data inside here, it will not trigger the outer suspense boundary. So you
[02:29:21] 'll never see that fallback again, but I purposely put it outside right here because I wanted to show the difference between data that's triggers the parent suspense boundary or, or
[02:29:32]  triggers the, the nested one. What happens here is if data one completes before data two, then the, the parent fallback is removed and you just see this fall
[02:29:47] back until later. So I'm just showing where suspense placement can control the, the level of where this stuff happens. This is, this works exactly the same as it
[02:29:55]  does today. All right. Um, so not, nothing new there. Second scenario is what if create async lives in context that exists above the router, then it's
[02:30:08]  not a new async primitive. So what I'd argue in this case is if you actually hoisted your create async up higher and then injected it. Going to
[02:30:19]  the next page, existing suspense boundary, existing data. Guess what? We don't suspend. Right. What'd I say? Following basic rules, we assume that you read
[02:30:34]  the data of previous value while it's loading. Even if through navigating, you triggered new update, the suspense and the create async are already existing. So you will probably
[02:30:41]  navigate to the page immediately and see the old data flicker before the new data comes in. Now, if that update is downstream for a transaction, there's no problem
[02:30:48] . So if this happens because of the router, you're never going to, it's all going to hold anyway. So it's not a big deal, but if what
[02:30:54]  I, what I argued is I think that existing data with a new suspense boundary should still suspend the fallback because it's not going to be a big deal. you
[02:31:08]  don't want that flicker effect if you bother putting a new suspense boundary regardless of if this async data is new or not i think it if it notices that this is
[02:31:20]  loading it should actually suspend in this case because you're kind of saying like hey i'm going to a new page and i'm loading it'd be really weird if you saw
[02:31:32]  it loading page a and then have it show with like some data and then let's say you had a second piece of data um in here too that was finished and then
[02:31:43]  have this data now flicker when this one updates that would be really weird you want them all to kind of come in at the same time so this is why i said that
[02:31:51]  one exception earlier where i said that it's probably fine that new suspense boundaries always suspend when they detect that their data is loading even if the resource isn't new it's
[02:32:04]  a bit of a exception the rules but the assumption is any new response expects that it reads from be consolidated before it shows anything it would be weird to have it show then update
[02:32:12]  a moment later when it knows there it will update okay that's basically the idea behind this there are some questions that i asked like would it be weird to like be looking at
[02:32:24]  a transaction and a localized loading state i think actually after i wrote this in practice i don't think that actually will happen probably pretty often but what is cool about this is
[02:32:34]  there's no latest um like latest is implied so like that whole how do i opt into tearing is actually not a question anymore it's like literally um like i think the
[02:32:51]  more na other than the top level holding which is challenging um see that's the argued error but other than the top level holding which is there for a reason this works naturally for
[02:33:05]  people who just go oh i got something interesting they've thrown a suspense on the page they they probably won't have to think about suspense very much so in that sense i think
[02:33:14]  it actually accomplishes its goals because it keeps it colorless and non-nullable there's never an undefined value restore you have this kind of control because
[02:33:22]  of the automatic tearing you don't have to worry about suspense pulling stuff out on you it's only if you go and add new async data fetching and don't add
[02:33:31]  a suspense boundary basically your mindset should be like i'm adding new data fetching where should i put my suspense boundary that's that's that's the mindset um and then it
[02:33:41] 's consistent so i feel the only gotchas have the default behavior still reasonable for people unaware of these features and the answer to that is yes because the default if you're
[02:33:53]  not aware of create async or suspense and solid how are you going to fetch data like i mean i can ask chat right this but i think we already know the answer how
[02:34:01]  do we how do we fetch data i think it looks a lot like this people are going to write create affect the fetch data and they're not going to have any problems
[02:34:12]  so the basically the only person or people subset that this puts out are people using solid today client side only that use our resource api because it's convenient and don't
[02:34:30]  use suspense those people could have a api wrapper that looks like create resource like built and just not use suspense like we could basically wrap create signal create effect call it my create
[02:34:44]  resource and the migration for them will be pretty painless so there are paths for everyone um the real question here i guess ultimately is do we believe that show once and tear
[02:34:58]  by default so that we get rid of this whole latest create deferred value concept is worthwhile yes lazy is still an issue it's it's it's it is yes lazy lazy
[02:35:15]  i think that's the argument for why lazy you could just be like suspend no or something like just like false having an option yeah mostly yeah i mean i showed this in
[02:35:31]  my last stream i literally switched something from a memo to create async and it the downstream code didn't have to change i i was playing with the solids new reactivity
[02:35:45]  system like the prototype of it in a playground yeah to be fair we still need create async because it scheduling wise it has important behavior because memos are lazy and create as
[02:35:58] ync to prevent the diamond problem has to be somewhat eager like it it has to trigger even if no one's reading from it because you can have async chains where you
[02:36:09]  have async that depends on async that depends on async now don't do this usually because of waterfalls okay it can be parallelized even like a situation where you
[02:36:17] 're like you're reading from you're doing a computation and it's read from two different async values this is perfectly perfectly fine example so you have a situation where you're
[02:36:26]  like create async create async one and two i had an example here i should data one data two right data one data two and then you have something in here that
[02:36:36] 's using data one and data two right and the problem is if async wasn't eager it would hit the data one read it lazily trigger the fetch throw and then
[02:36:53]  when data two got read it would go oh now i need to fetch this throw and you cause a waterfall so it is it's very important that create async is eager
[02:37:06]  so that when you create these the fetching starts now right and when yeah yeah basically it's yeah the this is just one of the like those kind of considerations we don't
[02:37:25]  want to fetch on read we want to fetch on creation and on update immediately not based on read so create async can't be lazy but that's why it's not
[02:37:36]  just all like memo that returns a promise it has specific um there's a reason it's a separate primitive but once you have the chain of reactivity it doesn't matter
[02:37:57]  um there are cases where you want to switch between latest and non-latest behavior dynamically i would be interested my suspicion here is my suspicion here is that the places where you
[02:38:21]  want non-latest like basically it's so funny because the naming is backwards but the places it means last latest means last in the case of paces where you want to
[02:38:36]  explicitly suspend you can use is loading to handle those cases or you'd be using transactions like i'm i'm i'm pretty sure in almost yeah like i think defaulting unless
[02:38:50]  people really want to fall back to the suspense fallback after the fact, which can be done other ways, I don't think that's actually true. That's,
[02:39:06]  that's my gut. But w I mean, I I'd like to see an example of otherwise, because I think the, the biggest takeaway that I've seen through all
[02:39:18]  this is people most of the time actually just want latest and I didn't recognize that until, as I said, it got like four different things kind of smacked me
[02:39:26]  across the face, so to speak. Thanks. Yeah, I'm doing pretty good. No solid will have lazy memos is the plan. Create async will have special
[02:39:40]  primitives that are eager, but memo specifically is lazy. That's the, like, I, I was just pointing out that there's things, the things that are eager
[02:39:51]  are create async. And then the, by eager, I mean things that get scheduled are create async and the front half of effects. everything else is,
[02:40:07]  is basically lazy, which I said is probably just memos, really. Yeah. None of the material in suspense is particularly easy. I wrote an article that I,
[02:40:23]  this is not introductory from like beginner standpoint of how to use suspense, but it's introductory on, from the sense of why, why JavaScript frameworks care. Yeah, yeah
[02:40:42] , I mean, optimistic update is fine. What's beautiful about optimistic updates, suspense plays into transaction, or optimistic updates play into transactions. The thing with optimistic updates is
[02:41:00]  they give you a tool that you can show stuff, like, um, but it doesn't change the fact that while you're showing stuff, like, things could be in
[02:41:14]  potentially inconsistent states. Um, so like, yeah, see, optimistic updates are one reason why you don't want to, uh, you don't want to go back
[02:41:26]  to fallback. Right. Cause you're showing something and you want to like show the optimistic thing. So generally speaking, like optimistic updates and solid, uh, start
[02:41:34]  using like actions or I guess the router technically they wrap the whole thing in the transaction. So you don't have to worry about this. What it will do is they'll
[02:41:41]  show the stuff and then while all the acing stuff happening in flight, it holds it's called. So it actually shows the updates in the, in front of you and
[02:41:50] , and the future path that it's going to take when it's resolved, everything is not presented to you. It's kind of on a concurrent, like a separate
[02:41:59]  branch. And then when the acing stuff is done, we've replaced the optimistic stuff with the actual stuff. So there is a dance here, um, transactions are the
[02:42:10]  key to optimistic updates, um, essentially, uh, or transitions or whatever you want to call them. Uh, so this, these, these play together. I was actually
[02:42:19] , I showed this on a stream, uh, or not stream. I showed this on a talk I did at GS nation last year where once I had transactions and suspense
[02:42:29] , I was able to write the optimistic update code, something similar to remix style in about eight lines of code. Like it was trivial and I, I, I,
[02:42:39]  this was one of those things I talked about lamented before that remix spent so much time trying to like build all these primitives and pieces to get react to play ball when
[02:42:48]  reacts core was building the pieces that made it like basically trivial. Um, so like, yeah, they, they, they, they work well together. What's this
[02:43:03]  one? This is my, one of my previous talks. Yes. Thank you. Yeah. I'm not going to play that right now, but thanks. Dave, that
[02:43:13] 's, that's exactly the talk I'm talking about. Why all the suspense? Let me post that so YouTube chat gets it as well. I have, you know
[02:43:27] , my CSN real page, it loads via resource and the editor preview uses latest. The preview has inline editors. So you want to avoid suspenseful walks or smoother
[02:43:35] . Yeah. But what I'm, what I'm getting at though, is what do you do when. Yeah. Yeah. I, I think the editor part will
[02:43:50]  actually work exactly as you'd expect it to. It's that in the CMS real page side, you are, I guess, unloading stuff more often. Like you have
[02:44:02] , you're using the suspense loading indicator. Cause like the editor preview, I assume uses latest, except initially, essentially. I, I, or I think our latest in
[02:44:13]  solid actually works the way I describe. Like it actually, if it's, it's a spends when it hasn't loaded at the latest before. And then in,
[02:44:22]  um, in it's, it's the, yeah, it's the UI in your CMS. Right. Which I mean, I, I can't, I'm not
[02:44:32]  going to judge, but I'd question. Yeah. Um, I, I, I, I'd be interested in seeing it to understand it, I guess a little bit
[02:44:42]  better. Yeah. Um, this is a talk that made sense. Yeah. Along. Yeah. Comptown. Transactions are a mess. And I'll talk
[02:44:53]  about them in the future as we implement them in solid 2.0. Not ready to go there just yet, but let's, uh, let's, let's
[02:45:03]  continue here. Um, anyway. Yeah. I, I think, I think, I think this is interesting at least it, the difference between this and what we have today
[02:45:15]  is actually fairly subtle, but it's some, it's nuanced enough that I think it's something worth talking about. Like the, the nice alignment here is that it
[02:45:27]  removes conceptually the need for latest altogether, which aligns really nice with this colorless non nullable thing. cause we don't have to introduce nulls back in
[02:45:39] . Right. Um, it's, it's also does. I don't know if it would do what most people would expect cause they'd be used to react pulling to
[02:45:50]  placeholder, but it also would avoid the really unexpected stuff from happening. Right. If routers and stuff have transactions built in, like I'm suggesting then most everyday
[02:46:02]  devs aren't going to worry about the big stuff. And then they'll just work in their local zone and be happy. Right. Essentially is what I'm thinking here
[02:46:09] . Like big page changes trans use transaction transitions. You load some data on the page. You see suspense boundary, you do updates. You don't have to worry about like
[02:46:18]  that. That's the least my thinking. Maybe that's oversimplified thinking, but it's, it's not a good thing. It's, it's
[02:46:26] , it is very attractive because it makes it seem a lot simpler. There's less concepts to talk about or explain. There's less like, there is the challenge is the
[02:46:38]  inherent behavior, but the question is, is that behavior explainable? And I think, I think it is. I think, I think it's explainable from the point
[02:46:52]  that we can have a few key tenants and put it out there. I think the implications of that explanation do, will take some, but having the specific, like,
[02:47:03]  it's still not, there's not like a whole bunch of rules. It's actually only three rules, which. And it doesn't introduce like, we don't need
[02:47:11]  latest or create deferred value. Like, so it's like, yeah, I dunno. Like you can explain this in a way where you can go like, these
[02:47:22]  are placeholders. You don't have to explain what tearing is to people because that's what they're used to. And then you go, if you don't want
[02:47:34]  stuff to update until all the async's done, use a transaction. So you can basically explain stuff in terms of placeholders, transactions, normal, instead of introducing a
[02:47:42]  whole bunch of other concepts. So it's like, it's, it's attractive from that standpoint, whether it holds up, you know, like, uh, Katie wings
[02:47:50] , uh, concern here could be very much, very real. So I'm not sure, but there's something attractive about this, I'll say. Yes, dot
[02:48:13]  state was a mistake. And dot error was a mistake too. It forced everyone screws this up. They put it in a switch statement and then they go, why isn
[02:48:23] 't the suspending and all this? It's, I, I don't mind that people build APIs like this, but it's the wrong base API. We should push
[02:48:39]  people towards using suspense boundaries and error boundaries where appropriate. It's very awkward to like, people don't understand the importance of the read, so to speak. Latest
[02:48:50] , at least, or removing latest, at least hides that effect. People can just kind of treat it like post and just be like kind of done with it. But dot
[02:48:59]  state, everyone wanted it for TypeScript. It is the biggest mistake I made. Um, it is just like, I have to basically apologize now to everyone about how create
[02:49:12]  resource makes no sense to them. And I blame dot state for that. Like people saw TanStack query and they're like, yes, but like it's useful
[02:49:24]  for a certain way. But it's like, from the framework standpoint, I gave people extra tools that mislead them. So I feel, I feel bad about that
[02:49:32] . I feel we'll get suspense once in a year. Yeah, doubtful. I maybe like the opt out thing might make sense, but I need to. We've
[02:49:41]  been using suspense now for five years and I guess people are just avoiding it. Right. So I guess if we push them, I guess we'll see. I mean
[02:49:50] , that's, that's, that's, that's what, when I say halting the world, that's what I mean. Every render effect reading data that isn
[02:50:03] 't available would just render nothing. But it's, it's, it's, it's worse than that because you can get, okay. You're saying that tearing
[02:50:13]  initially. See, the difference is I can tear smarter after the work fact with latest, but you're saying tearing initially doesn't really matter. Yeah. Yeah. I
[02:50:23]  mean, I'm not fair. We could not hold the world and just to have the unpredictable tearing. Right. Cause this is what, when I talk about unpredictable tearing is
[02:50:37]  basically instead of stopping all render effects, just stop the ones that are async until they reload load in. But you know, you'll, but yeah, you know
[02:50:44]  what? Fair because they show nothing initially. So it's not actually a problem, so to speak. Yeah. No, this is fair. It's fair because I
[02:50:57]  was thinking about in terms of updates, having two versions account is really awkward, but we have no way of doing that because our tearing after with latest will always get us the
[02:51:07]  same version of count. So, okay. This is, this is, this is why we talk on stream. This is fair. We could, it's also easier for
[02:51:16]  me not to globally hold, cause it's the only case. The only downside of this is inconsistency between SSR and hydration. But if the server holds, then
[02:51:27]  all the data will be present. So hydration won't be a problem. And if the client doesn't hold, we don't care. Yeah. You know what? Okay
[02:51:43] . Yeah. I like it. I like it. I like it. Yeah. There you go, Brendan. Lazy will, Lazy can work this way.
[02:51:57]  I just need it not to error. Yeah. My, my hunch is I can't say fully until we implement it, but my hunch is that we can choose not to
[02:52:07]  hold. Because initial, initially tearing is weird. Anyways, it's just gaps. We won't see inconsistent data because it just won't be there. So it's
[02:52:22]  just like, yeah, instead of having one big empty placeholder, we have a bunch of big empty placeholders. Okay. Maybe, maybe this is, maybe this is
[02:52:35] , maybe this is what we need. If we do this, I need to think about this more. But if we do this, I think then lazy goes back.
[02:52:44]  Yeah. Maybe this. Yeah. Sorry. I'm just like thinking out loud. I think this is probably the right trade off. There's all these temptations from an
[02:52:55]  academic standpoint. So to speak the hold. I think people, there are foot guns that can happen with a split rendering like this. Um, but my answer to all of
[02:53:05]  those people would be like, use suspense. If you're someone like Brendan, who knows what he's doing and just like, just do it better. So I,
[02:53:17]  I think, I think that's okay. Yeah. I mean, you can design your APIs as you see fit. These are both sides. You choose your loading indicator
[02:53:40]  and whether you do optimistic updates. They're both, these are not like opposite options. They're like part of the same thing. I'm actually like, if you really
[02:53:52]  want to show a loading indicator that like acts as a placeholder, you still can. Yeah. It's called the error boundary. I don't know. I'll
[02:54:07]  think about it. It will be moved. I mean, have I showed you guys this? Let me open hack MD. I mean, some of this is very old
[02:54:18] , but I, I have a document solid 2.0. Um. Strict mode on track. Signals. Stores. Resources. Remove resource state.
[02:54:39]  Uh, yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. Yeah. So stuff that's removed
[02:54:50]  batches. This is still an open conversation, pre-computed stuff that will be removed. We'll have like a V one legacy repo for solid, where we
[02:55:00]  have ordered versions of those primitives that will mostly work. So create resource. We'll move to that repo. And you'll continue to be able to use it,
[02:55:11]  but it'll use create async under the hood. But yes, deprecate is the right term. We won't, we'll move it to a different location,
[02:55:19]  um, where people can continue to use it. Um, but it, the create async is, is the direction that we're going. There's a couple of things
[02:55:29]  that are missing from create async. Um, like latest loading indicator. Like there's a couple things that we're missing, but the, the, in the current
[02:55:40]  version, like if you've used it, the router, you're like, how do I do this? 2.0 will solve the rest of that problem. I just
[02:55:45]  didn't want to introduce reintroduce the API. So I'm going to add a couple of things to do. I'm going to add a couple of things to
[02:55:49]  do. I'm going to add a couple of things to do. I'm going to add a couple of things to do. I'm going to add a couple of things
[02:55:52]  to do. I'm going to add a couple of things to do. I'm going to add a couple of things to do. I'm going to add a couple of
[02:55:55]  things to do. I'm going to add a couple of things to do. Well, okay. Let's talk about adding something to subrello. What is mode
[02:56:06] ? It changed the paradigm for everything. What children inside show. I promise now must as expensive web parent product. Well, only if they are fetching more data, if
[02:56:15]  they use create effect to fetch more data than they don't, if they use create async, then yes, you are responsible for adding suspense boundary. But like you
[02:56:25]  add the create async, you add the suspense boundary, right? Like I don't see a particular problem with that. Do you know what I mean? Like if they
[02:56:36]  don't add something async, they don't add the suspense boundary. I guess the problem is lazy is probably what you're going to say, because I'm also suggesting
[02:56:47]  that if you add lazy, you have to add the suspense boundary. Okay. And the other thing you're talking about is projections, right? Usually relevant, but sometimes
[02:57:09]  not below if you want to render something inside the suspense wrappers while loading. Like I'm gathering you, you mean like rejection because you. Oh yeah. That that
[02:57:24] 's an interesting case. So you're saying like have actual content onion in. So like have suspense fallback that renders content inside it. That's live that when the
[02:57:38]  suspense boundary removes. That content is still there. That's interesting. That's interesting. Okay. I'm just trying to think of it from a layout standpoint.
[02:58:03]  I, so you have to opt into the global holding with top level suspense. I'm actually. Yeah. Yeah. I'm, I'm actually, after that conversation
[02:58:19] , I'm from a couple, I think we, we can probably get rid of the constant global holding. I mean, the problem is it's misleading. Like,
[02:58:32]  and it, yeah, I mean, it's, it's, it's not hard to make a wrapper that does the behavior. It's more complicated. It's hard
[02:58:47]  to extend. There's a lot of benefits to create async in the sense that it it's more basic, which lets it makes it more extensible. Or create
[02:58:53]  resource is hard to actually make extensible. It's, it's just designed. It's a good final product. It's like why everyone likes react query, but it
[02:59:01] 's not a good base primitive. Yeah. Yeah. Yeah. I'm catching up now. Yeah. I mean, at a certain point, like, I think the
[02:59:24]  problem with a lot of the opposition here is what like the router cache and transit, like they use like a certain point, like these features are built on using suspense and
[02:59:44]  transactions, like certain features are. So you could, you can choose not to use them and yes, you won't get to use these other things, but it's because
[02:59:53]  the reason that they work or that they're so slick is because they're built on it. Like you don't have to use, if you don't use suspense,
[03:00:02]  the transactions in the router don't exist. They actually get tree shaken out. Um, so then like, that's fine, but like actions depend on transactions. So
[03:00:17]  like, I could picture implementing these things in a way that did not depend on these other features, but these features exist for this reason. So it's like, it's
[03:00:31] , it's, it's like, there's only so many what ifs you can actually answer there. The, the biggest challenge here, and I recognize, I recognize
[03:00:42]  it is that like, if something is changing, um, then like the boundary shift, which means what can I, and I can't use can shift, which is the
[03:00:54]  awkward, awkwardest thing because of migration. I think one of the coolest things that came from the stream talking through this is that top level holding, not being a thing means
[03:01:04]  that I don't think existing code will generally break here. the only thing, if we do go with the, uh, the lazy suspense thing that I'm talking about
[03:01:15] , um, is, is that people who expect stuff to go back to suspense boundary will have tearing if they don't add loading indicators, if we change this. But I
[03:01:25]  think actually mostly current stuff would actually be fine. Now that I'm thinking you get through. Async iterators are great on the server. I think they suck for
[03:01:37]  client side stuff because you have a lot of different state coming in. Async iterators literally like this and this and this, it's beautiful for server rendering. There's
[03:01:43]  a bit of a performance cost. So we benchmarked this with, uh, Marco, but like not nothing like I think iterators are perfect model for how to do
[03:01:54]  streaming, um, updating pause here, resume type stuff for rendering. It's not great model. I know people have tried to build stuff like crank JS, but it's
[03:02:05]  not a great model for the client when you have like components that can like, it's not like if you have a component view of the world, especially like we have
[03:02:15]  things updating all the time independently within a single component coming in and doing their own little pieces and stuff like fine-grained style. Um, async iterators, like
[03:02:26]  even reacted as a re-render model, you know, async, it didn't fit there. And I understand like the pause resume, but like you can have something
[03:02:34]  async pause and then be updating stuff synchronously at the same time. Like you can't just like yield in the middle of your component body. It doesn't make
[03:02:43]  sense. Now I understand like, you know, kind of like how you put an async function inside create effect to like do it. You can like escape the flow,
[03:02:53]  like make it non-blocking or whatever. But like, I think the writing of it gets pretty unyieldy on the server under the hood. It's beautiful
[03:03:01] . Like we've talked a lot. I think react said that they were talking about changing the await in the, their async components to generators on the hood via compiler
[03:03:09] . Um, that's like, that makes a lot of sense, but I don't know. Yeah. It's not something I think you could put on the authoring
[03:03:16]  side. It's like a optimization that you could do on the server. And then if the server and the client models don't align, it's sometimes tricky. Solid server
[03:03:22]  and client models don't completely align right now. So like there is some trickiness there. Yeah. I mean, there's, there's just the argument so far
[03:03:36]  suspense unmounts things for people on unexpectedly, which is what I tried to address with what I, my proposal, but like there are situations where the inversion of control
[03:03:55] , which is suspense, a superpower essentially makes it so that stuff happens unexpectedly because you lose the locality of thinking to a certain degree. Um, I don't think that
[03:04:07] 's the best way to put it though, because I think in another way, it frees you because the local code doesn't need to worry about async. And then
[03:04:17]  where you add the create async, you add the suspense. Like that's my hunch on why this ultimately will be good and why I believe in it. But I
[03:04:26]  can understand people looking at their current code base and going like, we don't write stuff this way. I can see a bunch of problems happening. I think you want to
[03:04:42]  remember, yeah. it's a hard thing to migrate to, um, to it's yeah, it's not that hard, but it in the process, it might
[03:05:04]  be weird. Yeah. I, I, yeah, yeah. I, there's, there's reasons. I, I think it's fair and that's why we're
[03:05:10]  working through this stuff right now. Um, okay. That's enough for an async. Let's talk about drive stuff while we still got time. All right.
[03:05:19]  I mean, put more stuff in the chat. You guys have been incredibly helpful. I think there was two really good takeaways there about not needing top level holding on initial render
[03:05:29] . Um, and what, what's the, what's the other one? Um, there was another takeaway. Dammit. I forgot it. Um, yeah.
[03:05:45]  Using show instead of suspense. Um, yeah, which is a, but actually now you know what, if we get rid of top of a holding using show instead of
[03:06:01]  suspense, um, um, probably, I mean, it's still a good tool, but it's probably less important. Um, like it is a way of opt
[03:06:16] ing out of suspense, but it is a way of opting out of suspense though. It's kind of like a little trick, but yes, yeah, I'll
[03:06:26] , we have to take the meaning. Okay. So, okay. Yeah. One, two, three. Okay. Let's do this. Living in a drive
[03:06:42]  world. Okay. Everything is better when your data flows in one direction. That's quite a statement. That's why I'm starting here today, guys. Um, when
[03:06:50]  related things are derived rather than synchronized. However, it isn't always to represent everything you drive. Right. Solid even has a permit to help with synchronization. Create
[03:06:57]  computed. But in lazy reactive system, these sort of printers don't make sense. We only want to do necessary work. Now, as I showed in the scheduling stream,
[03:07:04]  and as what we just talked about, create async. I don't, I realized after writing all this stuff, I don't have to deprecate, create computed
[03:07:10] . Because it could just run at the same time as create async. Right. We're getting to a point where like, maybe only the memos are lazy,
[03:07:19]  lazy. It's kind of amusing, but anyway. The gap left by create compute, though, is rather larger. And in its absence, people would fall to create effect
[03:07:28] , perhaps, which can be less efficient. And that's the biggest reason I don't like create computed. People don't know when to use create computed versus create effect.
[03:07:34]  They're like, why do we have two of these? And why do we have render effect? Why do we have three of these? There's a certain win by,
[03:07:39]  even if it means like, adding a new primitive. Just removing this create effect, like clone, and with something more special purpose. Makes, makes things a lot nicer.
[03:07:53]  Because first of all, you don't have the create effect problem, so to speak, where everyone's just like using create effect all over the place. Or create computed
[03:08:00] , like the, like that synchronization looking problem. And secondly, yeah, you don't have to introduce all these topics, right? You just have to say like,
[03:08:11]  you just like, there's still a factor in render effect, but render effect is kind of like advanced. And yeah, it's just like create computed was always weird
[03:08:21] . Even if it's an advanced topic, people would be like, why, why do I need this? Oh, you're right. Let me, sorry. Thank
[03:08:32]  you. I should put that one in. Yeah. In the chat for everyone. There we go. All right. Now, what about derived mutable state? This is
[03:08:47]  the problem we have. The most common case for synchronization by far is if you have some ephemeral state, then you need to be edited before being committed back
[03:08:55]  to the source. Like you're just temporarily editing something. You don't want to update the source signal. You just want to have something be based on the source signal and
[03:09:04]  the feedback. This is like the classic controlled forms kind of mentality, right? Where you you're updating your state locally in your component. Maybe you got it from props.
[03:09:11]  And then when you save the, the parent now gets the updated information and pushes it back down. So this is different than a lot of reactive frameworks have like writable
[03:09:25]  memos and stuff like where you like, I think knockout has one. This is actually a little bit different. It's not about. This is about directionality.
[03:09:49]  The idea here is that, okay. Yeah. So I'm proposing freight writable, which is a memo in its shape, but it has a setter function.
[03:10:02]  The idea is set can override the value that came from props name, but if props name updates, then the value is lost. So basically this is a reset switch. So
[03:10:11]  whenever props named updates, it resembles, but you're allowed in the meantime to update it. So this might not even be the right name for this primitive, but this is
[03:10:17]  what I've been playing around with. The advantage of this approach is that we can tell the react to graph perspective, that name depends on prop names. Whereas the current
[03:10:24]  solution would cause multiple executions. Like. What's my example here? I go props name is create signal. And then I have create computer. Now I put these in
[03:10:34]  a weird order, but I'm just showing you the. If, if props uppercase name to uppercase, otherwise name. You could see that this would cause
[03:10:43]  this memo to run twice. Initially you'd create that then make uppercase of this. And then. I guess this one wouldn't run twice initially because you were
[03:10:52]  setting it to the same name. But like, my, my point is like. When like pretend updates happened in this order, when someone. Basically. Went and called set
[03:11:02]  name on this. There's a possibility that this memo would update before set name is called. And then set name would update causing this memo to trigger again. Like you
[03:11:11] 'd basically causing a double set it's it's the create effect state synchronization problem. The figure about like, I'm obviously people would probably put this in a different order
[03:11:20] , but I'm just showing like in it's. Possible even without you ordering stuff in complex cases to basically cause. Stuff to trigger multiple times. And the figure
[03:11:36]  above I made the order intentionally illustrated, right? Create route is useful or number scenarios. Pretend you have some async data you want to edit before committing a change.
[03:11:42]  So again. This is funny because I'm actually showing what the cache functions. In solid. Browder do. But essentially I made a signal. That I can use
[03:11:55]  for refetching. And then fetch user. And basically whenever I call refetch, right? I understand that like. Having some functionality like this built in probably it
[03:12:08]  just, it makes it hard to extend. So the, this is part of the. This is part of the credit async consideration in the design is that it's just
[03:12:16]  reactive. We don't need special signals like generated in the hood. You can just always trigger. Reactivity to do refetch. Anyways, this is very simplistic thing
[03:12:26] . Then createWritable updates the name. So essentially we. Update the name. And we preview it here using createWritable. And then when we save it
[03:12:35] . After we save it, we call refetch. Which then fetches the data. And then. It will from the async source. Update again. Yeah.
[03:12:49]  I mean, even in. Today, like refetch is essentially just a signal that you can. That you can, that you just track and just say. Trigger it
[03:12:59] . Right? Like it's, it's all reactivity. I mean, this is an example of a solution here that is overly simple. And because of that. It
[03:13:07] 's more verbose. This is like the redux problem. I understand why people wouldn't want to do this. I don't expect everyone to write their code like this
[03:13:13] . They probably will write wrappers. But at a core level, this makes a lot of sense. Yeah. I mean, and that's why it's extensible
[03:13:21] . Well, the thing is cache function does this automatically. When you use the cache key, it calls track on the, like on the, it basically triggers the right thing
[03:13:34] . Yeah, it, it is. But this isn't the, there's a reason create async. I put it in the router. Because I'm expecting it to
[03:13:41]  be used with the router in the future. Um, we need to have all the relevant APIs. I saw a complete enough story in the router to be able to release
[03:13:51]  it right now. But we are missing the supporting APIs for it. Because I wasn't sure on them and I wanted to be careful. But it was still important enough to
[03:13:58]  get the right pattern for the router. So yeah, create off. It's like the creating sync in the router is like a prototype of what the future potential is,
[03:14:06]  which is even better. Right? The example here, users load up in server, create writable, projecting out the name. So it can be edited. Then save button
[03:14:13]  pressed and it refreshes. Okay. This is just illustrative. If we were using cache impermanent, we could write their cache and start refetching it and
[03:14:20]  system like the router actions, handle this and validation. Right? That's what I'm saying. Create writable naively could also be implemented this. It's literally
[03:14:28]  a four liner, right? This is crazy how well this works, even though it might be slightly inefficient. What the realization is, if you had a memo of a signal
[03:14:39] , you basically every time this, the reason this is inefficient is it's basically saying that every time this updates, the create writable thing updates, it creates a new signal
[03:14:50] . But, and then that signal is edited, editable here is what this is doing. Because you, you have a wrapper on it. You always get the latest
[03:15:01]  signal when you read or when you write. But, so this is kind of inefficient that every time it updates, it creates a new signal, but it's, it keeps
[03:15:10]  the directionality because we understand that things that depend on X or the this signal are dependencies of it, which means that this is actually correct from like a correctness standpoint
[03:15:21] . There's no chance of this like double updating like, like this, which is really cool. Um, this, this solve for create computed is actually here for, is
[03:15:33]  actually correct, the correct solution. Okay. Great. But the other use case for create computed is what if you're not just updating one signal? What if you're
[03:15:50]  updating a store? This happens a lot, right? People got the global state in the stores, right? And then they're like, okay, do something async.
[03:15:59]  And if the framework's not giving you async primitives and you're just using create effect, then yeah, you just get the data and then you write to your store
[03:16:04] . Great. But we're trying to take a little bit of ownership here. We're trying to do suspense. We're trying to make it this very smooth system.
[03:16:10]  It's really awkward to detach the async from the store because the store doesn't know it's, it's waiting on anything if it's, if it's set.
[03:16:18]  Yes. Yes. And I, you can remove the reactive here. It's the recurring story with functional programming in general. Right. And I, I kind of go
[03:16:41]  off here and I was like, okay, the easiest way to derive from a story is just write your own proxy around it. Right. Right. I, I actually said
[03:16:50]  the easiest way is just to call solids reconcile function because today we'll just take some data from the server and then we'll diff it in this case. Right. Right.
[03:17:00]  So I, I kind of grouped this into two kind of conditions. The first one is what if you wanted to take something less granular and then make it into something granular,
[03:17:16]  like take some computed value and then make it so that the, it only updates fine grain. Well, to do that, you'd need to be able to diff the input
[03:17:26]  with the old output. Right. I mean, otherwise we don't know what changes, right? If you get state A and state B, how do you know granular
[03:17:35] ly what changes? You have to diff it. More importantly, that is from a notification center, what policy could have changed? Yeah. Okay. So I didn't
[03:17:47]  explain that very well, but what I'm saying is that there's two considerations here. You need to diff, right? So that the old user against the new user.
[03:17:59]  The second thing that's tricky is if you're in a lazy system, right? How do you know until you do the work, what has changed? You don't
[03:18:11] , which means if the effects are pulling the changes, you literally have everything that uses user store has to actually get queued. And then when you pull you, you
[03:18:24]  do the diff. Um, I'm going to talk about that more in the next article, but this is just the kind of high levels of this. If you've seen
[03:18:33]  create async store in the router, it's basically jamming these two concepts together. I wasn't comfortable pulling this out into its own primitive because of the correctness problem
[03:18:45] . If basically if, if something's async, you know, that when it comes back, it's the entry into the system, it's like the signal.
[03:18:54]  So you can write to it immediately fine-grained. Like it's like a crate effect and you don't have to worry about other dependencies. But if you have something
[03:19:04]  trying to do this work further downstream, you have basically the crate computed problem again, because something could listen to it and one of its dependencies and execute out of order.
[03:19:19]  The only way to avoid that would be to notify everything so that it all cues and then it happens. So it's, it's, it is awkward in today's solid
[03:19:32]  where we don't have that ability to do this lazy stuff properly. um, and do that notification like I was talking about. It's basically another example of crate computed
[03:19:44] . Um, and I wasn't sure if we'd actually be able to solve this without something like freight computed under the hood. So I did the only safe thing, which
[03:19:55]  is jam it into create async store. Ideally create async store is just a combination of these two primitives. It's like, give me some async data
[03:20:04]  and then derive it into something fine-grained. Okay. Oh yeah. Thank you. Yeah. Client likes that, uh, likes on YouTube. Please like
[03:20:16]  it. It definitely does help a lot on viewership and everything. Yeah. I always forget to remind people. I haven't, I haven't checked the video recently,
[03:20:27]  but hopefully some of you have liked it. Um, anyway. Yeah. I talk about creating story. I do want to talk about. That, um, crate sele
[03:20:45] ctor that we use. Um, you might've seen this in like the JS framework benchmark is technically the same kind of primitive. Because you could picture that crate selector could
[03:20:56]  just be. a key being the, whatever the selected rows, if you guys are familiar, the JS framework benchmark, there's like a test where you click and it
[03:21:04]  changes which rows highlighted. The whole key here is that the core data only has a toggle for selected and you need to project it onto each row. Um, and you could
[03:21:17]  put, you could see how this is the same kind of solution because if you. Every time selected ID changed, created an object. And set it to true, then
[03:21:28]  diffing it. Could turn the previous value to undefined. Because it wouldn't be there anymore, delete it. And then the new value would be whatever the current
[03:21:37]  selected ID is. And then. Because it's granular, it would only update the specific row. Right? So there is a world. Where crate selector and crate drive
[03:21:48]  store are actually like, we have a different API for crate selector today. Inside here, it says like is selected row ID or whatever. But there's a world
[03:21:55]  where these are actually the exact same thing categorically. They're actually handling the same thing. I didn't realize that I made a special case. With crate selector of
[03:22:04]  a more general problem. But it's just, it's something to consider. I don't know if that makes any sense. It's, it's just, it
[03:22:17] 's, there's a whole category of things. That use crate computed today. Crate selector is basically the same problem. Again, we do, we don't use
[03:22:26]  create computed, but it's a similar idea. Um, that. We have that actually get bucketed together. A more interesting problem though, is what if we want.
[03:22:38]  To derive stores from other stores, right? Right. Right. Things like create memo or create writable are great for individual fields. Right. You can basically, like
[03:22:51]  I showed before, you could basically take a store and then make a crate writable. To derive a specific field that you're overriding until you save it back to
[03:22:58]  the store. You know, that makes sense. But what if you wanted to like. Make a layer over the whole thing. Well, you could just make a proxy
[03:23:06]  yourself. And here's an example of where every string in this, in this store, for example, um, returns. Um, an uppercase version of it
[03:23:21] . And you would also, what you, what I'm missing here is you could also say that if it's an object, returning the same proxy again. Like, so
[03:23:29]  every object is an object to this. And basically deeply, every single, in this proxy wrapper, every single string, uh, is uppercased. Sure. Didn
[03:23:40] 't felt fixing. We no longer need start. All Svelte did is the same thing Vue did. Um, okay. Svelte did one thing. Because
[03:23:51]  of their syntax, what Svelte did is they didn't get rid of stores. What they did, I believe, or they're going to do. Yeah. We
[03:24:02] 'll worry about that. Is they're going to, there's a problem. In solid, signal looks like this. Signal. In view, signal looks like this.
[03:24:11]  In Svelte, signal looks like this. Plain value, right? In solid, store looks like this. In view, store looks like this. I'll just
[03:24:27]  say it's the same. And in Svelte, a store would look like this. Right? If they, because this can't store primitive object and access it
[03:24:46] . That's why they have these different APIs. Right? So if you were to combine them, which view does as well, they have refs, which are actually deep
[03:24:56] . They're not shallow. You have to actually ask for shallow ref, which is the same as our signal. If you were to combine them in solid, it would
[03:25:02]  look like this. If you were to combine them in view, it would look like something like this. And if you were to combine them in Svelte, it would
[03:25:17]  look something like this. because of the compiler. The commonality that you're going to see here is Svelte is the only one because of the compiler where signal
[03:25:31]  and store can actually co-exist without changing the syntax. View and solid have to put this in the middle because that's how JavaScript works. Svelte is not
[03:25:50]  JavaScript. So like in a sense, they solved it, but they have not solved anything. I know you're probably not serious, but they haven't solved anything close to
[03:25:58]  the actual problems I'm talking about. Svelte has the ability to have stores from syntactical part without calling them stores, but it doesn't act like we're
[03:26:05]  talking about much more complicated things than that. Svelte stores are RxJS. They're completely something else. They're like a, they have a simple
[03:26:19]  Svelte store primitives are being deprecated because they have signals, but they're doing something like solid stores, I believe, or deep refs in view as
[03:26:30]  their base data type, because they can, like they literally the same, like they, they can use the, they can take a, they can go signal equal value,
[03:26:39]  single equal object and treat them the same way. Preact signals are the same as view, except they don't have stores. You're right. You're right.
[03:26:50]  You're right. Parasocial knows this completely tolling me. Okay. It's fair. Some people might not know what I mean when I talk about store.
[03:27:05]  I mean, a deeply reactive object. Anyways, obviously writing stuff like this gets tedious. Especially if you wanted to like make memos for specific properties. It's, it
[03:27:20] 's, it's, it's kind of hard. And this gives me, brings me to the Trello demo. Um, you guys familiar with the Trello demo
[03:27:32] ? It's a bunch of columns. Brian Florence showed it where you can like drag and drop cards between different columns. Um, the challenge with this is it's an
[03:27:50] , it's an interesting place where you have optimistic updates being applied on top of your data. Right? So like essentially you have two sources of data. You have the server
[03:28:05]  data, which is their, your current state of the board. And then you, while you're saving the cards as they're moving around, you have optimistic data.
[03:28:11]  Now in a simple optimistic data case, like a to do app, like we love to all show. You can just make two, four loops and append the optimistic data to
[03:28:19]  the bottom of the list. Easy peasy, right? The beauty of the remix optimistic update approach, which everyone's adopted is that by introducing ephemeral state back in
[03:28:29] , you don't have to deal with caches, which is genius. However, if you actually have to merge the data, it's a bit of a mess because like
[03:28:40] , sure, it's great to be able to like make a second list or, you know, say, put the optimistic updates over there. But how do you intertw
[03:28:45] ine it with your actual existing data without it like breaking down weirdly? And in react, the answer is you just immutably clone the thing and generate it the whole way
[03:28:56] . And every time there's any change on the optimistic stuff or the original thinking changes, you just apply all the changes and then send all the immutable data to react,
[03:29:06]  which will dip the whole thing again. So you just keep on every change. You just rebuild the whole data structure and then rediff it. Right. And to be
[03:29:17]  fair with this primitive, we're talking about, we can do this in solid, right? We can go create async. Here's a board today. You'd use
[03:29:24]  like create computed to do this, but you could, this is probably the only reason we haven't released our Trello demo because it works and it's smooth. But
[03:29:32]  I didn't like, I don't, the code is not where it needs to be in terms of like user, you know, like this is a gap, but you
[03:29:41]  could pick your crate drive store being like, okay, give me the previous version of the notes from the board. Go over the list of mutations. Do basically take all the
[03:29:51]  mutations and modify our clone till it's the right way. And then return those notes and then iterate over them and draw them essentially. So every time the board changes from
[03:30:03]  the server or you add a new mutation, you clone the current state, the previous, like the original state of the board, and you immediately add all the changes on top
[03:30:11] . Sweet. But, you know, this is kind of not as efficient as we'd like to be. You know, I feel like we can do better than this
[03:30:28] . Like, I could just stop here. But I wasn't happy with this because this is, yeah, this is what React does. But we know we should be,
[03:30:38]  we should be able to know better than, we should be able to do better than React, right? Like. So. Blair is looking for work. I don't
[03:30:58]  even know what Blair does these days, but hey, thanks for dropping in. Drum animal, drummer of my old band, Solid, the one that actually the framework was named
[03:31:09]  after. Anyway. Moving on here. What I was saying is. The reason Solid works the way it does so efficiently with stores is because it's reference based. Like
[03:31:24] . There's this. Challenge here that. Like basically once we close over something, it doesn't change. Like if it changes, we know we need to rerun
[03:31:38]  the thing. So. References are fixed. So dipping works because we update. The data object. We mutate it in place. And notify the specific subscriptions of those
[03:31:50]  mutations. And this means that we don't have to reconstruct. The, the, the actual render rendered view. So it's like kind of awkward where you're like
[03:32:01] , is it, shouldn't it be possible to take. You know, these piecewise things and not go through the work. And the challenge is that. We can't
[03:32:09]  mutate the underlying store with a derivation, right? If we have a store and we have some. Our internal JavaScript object. We could mutate that object because we
[03:32:20]  own it. But if we're deriving from a store, we can't mutate the underlying store. We have to make our own versions that wrap every. Object
[03:32:30]  in that store. Right? Because look at this. Let's pretend board dot notes. Doesn't equal realize board dot notes. Cause we've wrapped in its own proxy.
[03:32:40]  Like I'm talking about. So in the, but in the beginning. Um. I'm talking about, I guess I've already applied some changes at this point.
[03:32:56]  That's why they're not equal. But it's possible that realize board notes zero and the, are the same initially. And the ID is the same and the body is
[03:33:03]  the same. Right? So they're actually the same. Note zero. The first one in the index is actually the same. But if we edit the body. Of.
[03:33:13]  The, the note. Suddenly. These like, this is a, I'm just talking about immutable change. If you had like two separate immutable things, suddenly
[03:33:23]  the object is not the same. The ID could be the same and the body's not the same. Right? Because we can't go and modify the existing object. We
[03:33:32] , we, like they, we have to create a new object. Sorry. I think this, I don't know why I put not equal here. I think. I
[03:33:37]  don't know what I'm trying to show with this part. I, I just meant this part. Like initially we can start with things being the same and then. Deep
[03:33:44] ly. It's, it's, it's a problem with immutable data. But we need to keep. These references. Otherwise we. We can't diff properly
[03:33:56] . Like if every time we created a new proxy. Every time. Like the board changed or something. Then we'd redo all the work in the for loop. And to
[03:34:04]  create all the rows. We actually need the same proxy. So. We'd almost need like a week map. In this solution. To be able to like derive this properly
[03:34:14] . If we, if we weren't going to diff. Right. I don't know if you guys are following me at all. I'm just trying to say.
[03:34:22]  It's like. If, if. Like the difference in the, our original version is we actually. Make a clone. And then it's not, it's not
[03:34:32]  deeply reactive. Because this is not a store. And then we just diff and make our own proxy. And we don't care. But if we were trying to like have
[03:34:39]  the underlying thing, be reactive. We actually have to keep proxies based on what the underlying object is. And as long as the underlying object doesn't change,
[03:34:58]  always give the same proxy. But if our proxies are in half and half states, because you've like say edited the body here. You're in this interesting
[03:35:08]  zone that when this board reef triggers from the server. You want, you want to diff it now so that you keep the same references on this side. But this version will
[03:35:20]  not have changes applied that aren't relevant anymore. Like you'd have to be able to reset the state of these wrapper proxies. I don't think I'm
[03:35:31]  doing a good job explaining it, but it's, it's, it's very, very complicated. In a sense that you kind of synchronize these two different objects with
[03:35:41]  pass through. And honestly, I, I go on a bunch here and try and create a primitive that does it. But it's just, it's very hard with imm
[03:35:55] utable data. You always start from the beginning, right? You go, here's my initial state and then you apply incremental changes to it. And then you diff it
[03:36:03]  to figure out what's changed. It's very hard to hold onto something that's, that you mutate. You can apply more changes to it, fine grain, which
[03:36:12]  is great, but you, it's hard to reset it. You, you, you can't essentially, you almost have to like write to it again with the initial state
[03:36:18]  and then apply the changes again. Like how do you reset the guys picturing proxies that had overrides on specific properties. But because the references stay the
[03:36:27]  same, you'd have to go through and iterate through all those objects. And like on a reset of the board, undo all the changes to apply them again. Like.
[03:36:33]  Suffice to say, I, I didn't find a good solution here. And that's only half the problem. The other half, the problem is if we wanted
[03:36:46]  to be really efficient, we don't want to apply all the mutations. Every time a new mutation comes in, we only apply the newest mutations. Like when you reset the
[03:36:54]  board, get new data, you apply all the mutations that exist. But every time you get a new mutation, you just want to apply them one by one. And
[03:37:01]  how do you do that? You'd have to have some idea of when, if the board is changed, do get, just get all the mutations. Otherwise you only get
[03:37:11]  the certain ones based on the timestamp compared to the last time this computed run. We're kind of lacking tools here. Yeah. And it's, it's,
[03:37:21]  it's worse than just list management because it's deep. If it wasn't deep, it's like our for mapper rate. Mapper rate is like an easy version
[03:37:29]  of this. And, but we're deep. And I, I talked about get last run and I kind of pictured like how we could do this projection, but this just
[03:37:39]  doesn't work. And I basically was like pretty, at the end of this, I was just like, oh man, I'm like frazzled. I can't
[03:37:46]  think anymore. So, um, I was like, okay, let's, let's try this again. Lazy plus derived fine grade is hard. This is something
[03:37:56]  that is more and more evident. I like, as I, I went on the discord and started talking and the more I talked through the solution, I realized that it just
[03:38:02]  didn't make sense. So I, I, I, I was like, okay, let's, let's start over again. Right. Event queuing. I
[03:38:12]  mean, in a sense close, um, because diffs are kind of like events, right? Like they're a description of the changes. Yeah. So yeah, you
[03:38:28]  could version each, each field. And then like, if the parent ever reset, then it could skip past that. But even like on reset, who do you notified
[03:38:40]  of the change? I, I kind of started. I, I was like, like, do you know the work you're going to do? Like, I was trying
[03:38:52]  to come up with this really pure, correct solution. And it, it not only seemed really difficult to implement. It also seemed really inefficient. Like, even though we
[03:39:04]  were like saving stuff that I wanted to, the end result might not even be performed enough. So yeah, let's, let's drop this one in the chat. Thank
[03:39:13]  you, Daniel. Okay. Like if you're talking about an event system to, to like over the network kind of system. I mean, that would be ideal.
[03:39:29]  And I think when we talk about sync engines and talking about partial updates and stuff like that way, I think we're getting into that zone, but I need to do a
[03:39:38]  little bit more exploration. This is, this is, this is right now. I'm talking about in a purely client side, side of things. Like if I just
[03:39:49]  got some data and I know the optimistic updates, so I don't need to wait on anything and I'm just trying to apply these things together. Um, you know,
[03:39:57]  because like if in the trial example, if I move a card, I need to show it in the new location and not in the old location. I have to take my
[03:40:04]  server data that's, you know, from its last date and then change it. And with immutable, you can always start from that server data and go. But if
[03:40:10]  you're mutating something, when to start. From that one to do incremental, when to like reset all the changes. Um, we don't have great ways of
[03:40:21]  expressing that. So I was like, okay, let's go back to our prime problems. I already talked about in the latest system. We notify before we do any work
[03:40:29] . Do you expect to update the mark? Everything is possibly dirty all the way down. Chewing the effects, which then pull and do the work. Right. They go
[03:40:37]  up the chain until they find something that's actually dirty and then reevaluate and continue back down if stuff has actually changed. Otherwise the short circuit non granular chains are
[03:40:46]  easy. You can see the path from like ABC. So like C gets queued, it goes back and goes, oh, B, are you dirty? A, it
[03:40:51]  just goes walks up. But granular derivations are hard. We would need to notify everything, right? If you have a single, let me explain more. If you have
[03:41:01]  a single source and multiple outputs, you'd expect the source change. all the outputs to be updated and need to be notified. Like, so if A changes, definitely
[03:41:09]  B or C could change. So these both need to be updated. If you have multiple inputs, like I'm just pretending this is the input and this is the output.
[03:41:15]  Now these are the inputs and these are the output. Or dependencies. It's not any outputs. These are inputs and these are things that depend on A. And C
[03:41:24]  and D both depend on A and B here. If you have multiple inputs, you'd expect either change. If either change, the outputs could also change. So they
[03:41:33]  need to notify. So if A changes, C and D get notified. If B changes, C or D get notified. This is kind of expected with reactivity. By
[03:41:41]  notified, I mean just told that they could be dirty, not actually rerun yet. You notify all the way out to the effects and pull in a lazy system. But
[03:41:49]  what if they weren't actually dependent, right? Like what if A to D, B to C, E to F? You don't want if A updates to notify
[03:41:57]  DEF. If C is updates to notify DEF or B updates. And store-like interfaces could be this problem. Because you don't know when you have a function
[03:42:12]  there deriving it. Like for our diff, we don't know how things cross match. They may be related or not, right? Because once you're deriving inside
[03:42:24]  a function, you're kind of like, stop. This differs from the stores themselves. Because when a store is the top level thing. Like it's the signal that
[03:42:33]  you're doing the update for. You could treat each thing separately, right? You can go, I'm running to this. I'm running to this. But when you
[03:42:40] 're doing it in a derived way where you have a function. Where you're like saying, hey, this is my next state. You have no clue how like you move
[03:42:48]  these items in array or whatever. Like you have no clue how these things are linked together. You might move one thing from one list to a different list. Like these
[03:42:58]  things could be changed. And even with these mutating APIs I was talking about, which are granular in there. And it's like, I don't know what you
[03:43:11] 're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what
[03:43:15]  you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know
[03:43:19]  what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don
[03:43:23] 't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I
[03:43:28]  don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing
[03:43:32] . I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're
[03:43:36]  doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you
[03:43:40] 're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what
[03:43:44]  you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know
[03:43:47]  what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don
[03:44:01] 't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I
[03:44:05]  don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing.
[03:44:09]  I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're doing
[03:44:13] . I don't know what you're doing. I don't know what you're doing. I don't know what you're doing. I don't know what you're
[03:44:18]  doing. I don't know what you're doing. I don't know what you're doing. Not one that can teach each node runs once. I was talking to
[03:44:32]  Milo and he's telling me that there might be a solution. I'm going to bring Milo back on the stream and we can talk about it. But high level
[03:44:38] , I mean, I don't know what tricks he's trying to come up with. But essentially, I don't know if this solution is solvable in an optimized way
[03:44:53] . Basically create computed doing the right, you know, basically pulling midway and then continuing is optimal from a notification standpoint because it does the work part way. It eager
[03:45:06] ly does it. You know, you notify as far as you can and then you hit the thing that's create computed. It stops and then it does the work and then
[03:45:14]  it continues notification. As much as I, you know, last time was like, how can we be purest about this? This problem is kind of real. No
[03:45:24] , the primitive I'm talking about is called, I'm calling create derived store. I showed it a few minutes ago. The idea is it's like a memo or a
[03:45:39]  computed that, like the basic example is every time the data changed, it would dip it with its previous value and then it outputs a store which fine-grained not
[03:45:54] ifies based on the diff. So every time you, you know, get a new value from the server, you would basically dip it with the current value and then if
[03:46:06]  like just the username changed, it would then notify just a single username. And what I'm saying is when you have a system, like from a push standpoint, talking about
[03:46:17]  it, it's very easy to see how that would work. You just go, okay, get the new data, diff it right to the signal, send it out
[03:46:23] . But from a drive way of doing it, it's actually tricky because you notify before you do any work. So you don't diff yet. You just go,
[03:46:30]  okay, this drive store has updated. Technically from PureStand, you should notify every single thing that listens to it. At that point, they all get queued and
[03:46:42]  then they go, okay, drive store for this field. Have you actually updated for this field? Have you actually updated for this field? You actually updated that's not particularly
[03:46:51]  performant. Whereas like with create computed, you could basically, or something like that where you do the work like eagerly, you could basically keep it in the pure
[03:47:06]  phase. So it might recalculate a couple of things a couple of times, but you won't notify anything unrelated. And you won't run the effects. You
[03:47:15]  can do it before all the effects are settled. So like, as much as I hate saying it, this might be, it's funny. I'm trying to push
[03:47:24]  create computed out of the authoring experience, but it might be needed internally. This is why that comment. Yeah, it is super hot in here. Um, I'm
[03:47:34]  sweating. I think you guys can see. Um, this is why, uh, Hey, this, this is the whole functional programming is unoptimal. Um,
[03:47:50]  I think it's kind of, you know, kind of coming back at me, um, I, I just want to bring this up because it's an unavoidable
[03:47:57]  truth in this area, regardless of what we were trying to accomplish. A big goal has been to remove, create computed and making rights during the pure phase illegal. Well
[03:48:05] , it's something we aspire to. It might be difficult to reach today in a performed manner. More than likely internally, we leverage this mechanism for performance reasons. It asks
[03:48:13]  the question, question though, are we better to keep this framework space and make the developers follow the cleaner model, or should we hand them the huge potential foot gun? In
[03:48:22]  the article I just covered, I gave a bunch of examples to think through, but I realized that after trying to do all that projection stuff with the Trello and whatnot
[03:48:35] , that I was dealing with really two types of problems. Try the mini fan. Okay. Let's try the mini fan. Can you guys hear that? It's
[03:48:57]  not coming in through the stream. I'm like too far away from it though. I need to get it. I wish I could just like lean it on top of my
[03:49:12]  laptop. Okay. That's, that's close enough. Yeah. Okay. We'll get to know. I was worried about the audio coming through and, Courtney's
[03:49:27]  like, they won't hear it. And I'm like, that's why I didn't try it. Yeah. Okay. If you guys still can't hear it,
[03:49:34]  then this is much better. Okay. And that's why she's my better half. Yeah. I brought it actually closer. It's actually only about foot and a half
[03:49:49]  for me. It's like almost, it's actually only about a foot from the mic. Uh, maybe a little more than the mic. Cause it's below the
[03:49:58]  mic, but yeah, from yeah. Anyway. Yeah. That's, that's, that's nice. That's much nicer. Anyway. Okay. So I realized as
[03:50:09]  I kind of was working through these problems. That there's local dipping and broadcast dipping. This local dipping or drive dipping is the most common scenario. And that's that
[03:50:23]  whole crate drive store we're talking about. Right? We have other examples in solid crate selector map array or your four component and create async store. In these,
[03:50:32]  we get the next date through dipping, notify the right things. These are all also all currently not correct. Map array. Does properly different map. But if the positions
[03:50:43]  change, we write to an index signal, which happens inside the crate memo call. So we write a signal here to update the index, right? We can drive and move
[03:50:52]  stuff in the right place and keep it, you know, pure and correct. But because we write to a signal when we're calculating it, um, Technically it's
[03:51:02] , it's not correct. Crate selector collects computations itself rather than adding itself as a dependency. And then calls those computations directly when something has changed. Huge
[03:51:13]  performance optimization, but clearly not correct. It's literally, instead of, it's like we, instead of the typical, you know, poll, it's like pure push
[03:51:22] . Essentially. It doesn't even use the reactive system to do the pushing. CreateAsyncStore basically uses create computed to call reconcile. So yeah, these are all
[03:51:31]  examples of where we fall apart, but from a purist standpoint, might cause a couple extra executions, but is drastically more optimized for the, you know, the execution
[03:51:46]  of things. Right. I I'm interested to see if like create drive store and create selector can be made the same thing. But you know, it'd be
[03:51:57]  nice if there's a single primitive for all these things, but essentially, yeah, we need a immutable to store converter. I think map array remains a special case because
[03:52:05]  of the way the index is handled and it doesn't use proxies or stuff, you know, or objects. It doesn't use diffing. It doesn't need
[03:52:13]  to, it has a very specific name, but I could see create selector and create async store being like that single create drive thing potentially. On the positive,
[03:52:21]  this area is pretty well understood. These problems everyone hits when they first moved to being fully reactive. For simple cases, this is efficient solution because once you diff at a certain
[03:52:29]  point, you generally can handle the rest granularly. It's important to recognize this goes away from the realized value that this always goes realized value to realize value. If you
[03:52:38]  hit a similar situation downstream, you need to diff again. In theory, maybe we can only diff once. This is, this is sort of where my thinking was going
[03:52:47]  because like, sure, if I derive from a, you know, from some server data and then I diff it to make it into a store. And then later on,
[03:52:59]  I'm using it. And then I decide to, you know, I don't know why transform it another way and diff it again. I'm going to need to
[03:53:07]  diff it again because I mean, assuming there isn't another mechanism to communicate the diff. And we actually have a situation here in solid. We diff your array in four or
[03:53:22]  map array to produce new DOM nodes. But then we, so we basically take when we're mapping over it, we basically do a very simple shallow diff where we're like
[03:53:30] , okay, what is moved? what needs to be created, right? And then we create the new DOM nodes. We run that part of your code, but then
[03:53:36]  we diff again in DOM expressions. We decide how to insert the DOM nodes. Our diffs on the DOM side are highly optimized. So it isn't notable compared to the
[03:53:42]  cost of actually communicating that diff information. But theoretically we can do less work. What I mean is like inside DOM expressions, we just get an array of DOM nodes and then
[03:53:51]  we diff it against the actual DOM. In theory, and people ask me why we don't do this in solid. And I said it's faster when I used to,
[03:53:59]  I tried to do other you know, communicate the diff from the for loop. It actually didn't make things any more performant. In the case examples are things I
[03:54:09]  tested like using the JS framework benchmark. But I think the main reason is you, someone can always insert DOM nodes into your JSX without using four. They can always just
[03:54:23]  take it array and stick it in. So like, this is, this can't be the rule. This has to be an optimization communicating the diff. And then you
[03:54:32]  need to have like a diff format that you communicate and diffs are fun because they need to be, if there's multiple changes, they need to be handled in order.
[03:54:41]  Sometimes it's easier just to pass the next state than it is to pass like a series of operations. Right. Because it matters if you move an object before you edit
[03:54:50]  an object. Right. Like you actually have to, like a diff that involves arrays. Often it includes a sequence of events that happened. I, I, I don
[03:55:07] 't, I'm saying this does create a, a store. Um, I'm saying that it's, but it's hard to create a store, uh, in
[03:55:21]  a pure sense because you have to like write to the store. It's hard to derive a store. I'm so I basically saying that. Yeah. I'm not suggesting
[03:55:31]  that we want diff based single signals. I'm saying the only way to get from a single function to a store is to diff. Like if you have some kind of
[03:55:42]  data, like from the server, some blob of data, and then you want it to update fine grained when you get the next set of data. You, you basically
[03:55:53] . If it's the same blob and slightly different, you're going to need to diff it to know what changed. Obviously. If you control a source and it's a
[03:56:03]  store and then you can just write to it, that's fine. But I'm trying to, this is about changing the directionality to make things derived so that we
[03:56:09]  can propagate things like async. Um, from that perspective, like, yes, if you know the granular thing to update, that's great, but it's, it
[03:56:23] 's actually hard to represent that in a drive manner. When you're not talking about individual fields, like how do you derive a whole store? I actually don't have
[03:56:35]  good examples of where to drive the whole store. Other than like, as I said, from the server, it's obviously always new references. So. It's a different
[03:56:48]  problem. It's always going to be a different problem. But my only other example was Trello. Um, so the other option that I was trying to get at
[03:57:00]  is instead of, I was thinking, well, instead of what if instead of, um, um, you know, take going for a realized state, diffing it
[03:57:13]  and applying those changes, you know, it basically gets another realized state. What if we could like communicate the diff? Like what if, you know, when you did
[03:57:22]  your for loop, for example, when it, it diffed and could tell that you moved this object from a to B, like switch the order two objects instead of DOM
[03:57:32]  expressions, for example, um, getting the list, the realized list and the comparing against its list. It just goes, oh yeah, move a to B. And it
[03:57:40]  goes, okay, well, I know my version of a and just move it and basically not do the diff again. That, that, that, that's a simple
[03:57:47]  example, but I'm just like, what if we could do that through your reactive code? Right? Where we communicate. It's not just local diffing. We could
[03:57:56]  communicate the diffing along the reactive graph. And I came across this. I don't know if you guys are familiar, familiar, but TL draw has something called. Your
[03:58:06]  questions are good. I, I actually get back to your same conclusions, I think in a few minutes, but I want to get, I, we need to explore
[03:58:17]  this to actually get to the right point. Signia is creative is TL draw and they have, they released a signals library and it's, it's actually pretty cool.
[03:58:28]  It's clock based. It has a lot of, which I love, which is very similar to SJS, which solids based off of. And, um, they have
[03:58:37]  this concept of incrementally computed signals. Um, and the way they introduce this is they, they, they go, okay, their signals are. I guess where they
[03:58:49]  have an atom here. What are they doing this? They show that each signal has a last changed epoch. So you can always ask it what, when it was
[03:59:04]  last changed. I think this is actually genius. We could do this in solid weather clock, but any signal derived value has a clock cycle. So you could actually see
[03:59:14]  like set a name and then get it. And it actually looks like it looks like they, they, yeah, I, I guess there are signals that can be sickness regardless
[03:59:25] . You can actually see at what time essentially the update occurred. You're, you're right. I'm, I'm getting there for a second. I'm not
[03:59:39]  expecting like, let's go here. When derived value is computed, it's computed function past two arguments, blah, blah, blah, blah, blah. Okay. So
[03:59:47]  what they do, you know, how our stuff always passes the previous value. Um, Cygnia upped it and they, they pass in the previous value and the
[03:59:56]  time that this computed last ran. Keep in mind, this is like, this is a advanced API. I'm just looking over it and they're using immer here to
[04:00:06]  diff. Okay. So they've created an atom, which basically creates this immer atom wraps immer. So they create a special atom. They say that it has history. And
[04:00:16]  then whenever they update it, they use immer. If you ever use immer before to basically diff, they take the old value and the new value. And then they basically
[04:00:26]  set the S the signal. It has two arguments, their signal. It has, it has the next value and alter. You can also set it with the list of patches
[04:00:40]  or the diff that, that it needs. So then they go and create a computed and don't get me wrong. This looks as complicated as hell. Basically in their
[04:00:55]  computed here, they have a naming convention, but it doesn't matter. It's a map function. They take the last time and they basically have this, I know is
[04:01:03]  uninitialized. Basically if previous doesn't exist, they know it's new. So then they just map. It's a map function. So they take the source
[04:01:12]  and they map, they call it on everything and they return it. If since the last time this ran, that source Adam has updated, they get the list of diff
[04:01:22] s. If the diffs, if there's too many diffs, like too much history, they, that they can't compute the whole diff because they only, they
[04:01:29] , they have to keep it over time, I guess. Right. Because things can be dormant and wake up. They also just map everything and start over again.
[04:01:37]  But if they get past that and they have the list of diffs, they then go through the list of diffs from Imer. So these are Imer's diff
[04:01:45] s. They could be any diff system they wanted to, and they look for operations like add, and they actually update the immutable draft. Imer gives you like
[04:01:54]  the immutable version of the next version and under the hood makes immutable data. And so they apply the diff here and then it gives you the next state. And then
[04:02:06]  their translated version of the diff. So instead of, you know, having the source, it's like their version of the diff with their representation of the object being mapped.
[04:02:17]  And finally they return with diff, both the next value and the patches. Yeah. I mean, yes. I saw this and I'm like, no one is ever
[04:02:30]  going to use this. Okay. Like this seems, this seems complicated, right? Like there's a reason I ship map array. This isn't basically map array if done
[04:02:42]  in a generic thing, which is cool. It's cool to have this power. The payoff is this. If they make an atom, an array of these names and then
[04:02:51]  they map it and their map reverses something. So now they're obviously initially when it gets the data, it goes through. And when they call the values, they
[04:03:00] 'd use dot value. Like view, they get everything with a name reversed and it's been called five times. But if they go and they add a new value, it
[04:03:08] 's smart enough to only call. the map function once and add that new value to the end. And similarly, if they change one of the names, it only calls
[04:03:19]  it one more time and they don't need to map it again. And finally, if they remove something, they don't even call the map function. map array from
[04:03:27]  solid does this, but what they're provided here is a completely generic, like generalized approach to making these sort of diffs. But yeah. Let me, I should
[04:03:42]  drop this in chat. Right. So, I mean, this is pretty cool. They talk about history length. Sometimes, you know, you have to choose because otherwise
[04:03:58]  you save too much. They can't keep history indefinitely. If there's not enough, then it'll not be able to do the incremental bit. It'll have to
[04:04:03]  compute it all. They also have like a way to set it in options so that you're, you don't have to put in the body or when you write.
[04:04:13]  So it always diffs like when you do a write or something. I think these are better APIs than what they showed above. And then they explain how to test this stuff
[04:04:21]  because testing incremental stuff is probably a pain in the ass. Okay. Cool stuff. I said here, this is how we create something like map array and user land. You
[04:04:32]  can see how the logic is actually not really any simpler either. My observation here, it is still a single signal. Immutable changes, nested changes can't independently
[04:04:40]  trigger, right? If you look at this, they're just talking about computers. They don't convert things into a store. Signia has no concept of store. Okay
[04:04:48] . Every node in the chain needs to participate. Each needs to produce their own diff. If anyone breaks the chain on the diffs, then like they end up doing all
[04:04:58]  the work. So you're suddenly now communicating, not just in values, but communicating in diffs, where you want to consume this. And then also each node needs
[04:05:08]  to apply the diff. Because they need to be able to communicate their realized value. You know, because you have to handle the initialization case or reset downstream. So what
[04:05:20]  I'm getting at here is that we are dealing with immutable data. Right? The references will be lost. Diffs help get this information back, but then you pay
[04:05:31]  the cost of the whole chain. Right? Because you have to keep it going. And in some cases, like fresh data from the server, there's no stable references
[04:05:40] . Something needs to key the models. And that isn't immer. Immer doesn't key models. They tell you to use like object formats. Like what we used to
[04:05:51]  use when, uh, what was it like create selector and redux or whatever. They tell you to, to like write where the two objects, where the key is
[04:05:59]  the ID. Like the property name is the ID. They don't, they don't key models. You know, like there's no, you know, like when you
[04:06:06] 're going over a list, you know, how you map over and react and you have a dot key. When you run reconcile in solid, there's a key field
[04:06:13]  that does the diffing. You know, that has a key. Immer doesn't do this. Signia doesn't do this. And so I was like, yeah,
[04:06:27]  like this doesn't work because yeah, I have the diff. But then when I get to actually rendering my DOM nodes, I'm going to have immutable data. Like
[04:06:33]  it's like, if something changes, the whole object changed. I'm not just changing a field. I don't have stable references. And I'm like, how
[04:06:39]  the hell is this? Can I use this? And then it occurred to me, it's react. They're, they're expecting react to do the key thing. So
[04:06:49]  I went on their website and I looked and I confirmed tldraws created in react. Bang. Everything makes a lot of sense. People pointed me to the solution for
[04:07:00] , you know, incremental stuff. And I was looking at it and I took a long time thinking, but then I'm like, this makes a lot of sense if
[04:07:07]  you're using react. Right? Like you communicate this all the way down. How else are you going to do it in react? How else do you communicate? That's
[04:07:19]  the change. So every node, you different, you apply and you different, you apply and you different apply. It's just like a series of endless dipping. And then
[04:07:26]  I'm like, I'm looking at this and I'm like, we didn't save this by, by, by getting away from what we were talking about over here
[04:07:36]  with this local dipping. You know, I was hoping that we'd only different wants to communicate. And that's not what's happening here. Technically the last thing in the
[04:07:42]  chain doesn't need the death. Like in this thing example that they put here, they don't need to return death. They don't need to produce patches. If there
[04:07:50] 's going to be nothing downstream. They don't need to, they just do it. Of course the last thing in the chain doesn't need the death. But everything
[04:07:59]  right down to the original signal is dipping. So you write the new value of the signal. It dips. The computed gets it, applies to this. Everyone's just
[04:08:10]  dip, dip, dip, dip, dip, dip. Right? Like to be fair, they don't need to generate the diff downstream. You could take the previous diff
[04:08:20]  and then apply it. But you have to understand, like pretend you're going from strings to objects. You have, if you're going to update, you, you still
[04:08:28]  have to update the diff. If you go from, if you realize that you have to move, swap, a and b, a and b are strings in, have
[04:08:38]  the string value in the original diff. When you get here, you're going to have to update the value to be the objects in those locations in your derived diff. So
[04:08:48]  you can avoid diffing along the way. If you, as you map over and apply the changes, you also create your diff. from the old diff. So there are
[04:09:01]  ways to avoid more diffing here, but I don't want to write that code. In a sense, him using immigrant to diff saved me that effort, because as you
[04:09:10]  map stuff, as I said, like the diffs don't, the same diff doesn't transcend the whole thing. I mean, the operation might be the same, but
[04:09:20]  the value, which you might need in some cases, the actual resolve value has to represent, um, and the partial resolves of the value for the the diffs
[04:09:29]  have to represent the current thing you're working on. This is blockchain. What I'm getting at here is like, this doesn't actually solve my problem in this whole
[04:09:53]  article. Like if you were going to, uh, if you're, if you're going to like do map array and you want to update the index. Use in,
[04:10:05]  unless the only way to avoid running that map function again would be to write to a separate signal. This assumes that you run the map function again when, when the index
[04:10:15]  changes, right? Like it's, it's, there's only one single single, this doesn't actually help us. It's better. It's consistent for something like
[04:10:24]  react, but it's completely wasted on our granular updates. I'm not saying that the signature style API can work. It just, if we wrote to stores rather than imm
[04:10:34] utable drafts, that would be the end of the line for the diffing. We'd just have fine-grained updates from that point. My thinking after looking
[04:10:41]  at local diffs was that diffing could avoid future diffing, but it doesn't. It actually lends to more. What it does do though, is allow imm
[04:10:48] utable atoms to act fine-grained-ish. In the same sense, the react compiler makes react fine-grained-ish. But why settle for substitutes
[04:10:57]  when you have the real thing? Right. Yeah. I'm glad I looked at it because I thought Signia was doing something that we're missing. And I think it
[04:11:07]  has good points, but the problem is it's already in that mindset that it can't do better. And I think we can do better, right? Like basically if reacts
[04:11:16]  your target, you're setting the bar far too low. Okay. So I talk about create drive store again for a moment, but let's return to our Trello
[04:11:29]  demo. Now this exercises, I'm just going to use the Signia API, but for our purposes. Okay. Instead of doing immutable data, right? Yeah
[04:11:46] . You guys are like trying to figure out like client server models to avoid this. If this is not, this is a pure, I'm talking purely from a data deriv
[04:11:54] ation thing. I know you guys are like, ideally the server will be able to talk in diffs in the future. And then we'll be able to immediately convert
[04:12:06]  them into stores and then go fine grained, which is better than us diffing. But I'm just talking about the Trello example. Like basically, we have a
[04:12:18]  list of optimistic updates. We'd like to apply incrementally. It'd be great if we'd be able only apply the new ones as they came in. And when new
[04:12:24]  data came from the server, we could reset and apply all our current mutations. It would be even better if new models that showed up optimistically could match the data on
[04:12:33]  the server when it refreshes. What I mean is if we optimistically add a model, you know, somewhere, and then the server comes back with the fresh data,
[04:12:41]  it'd be sweet if they would actually like not re-render that item. That's something that I can't easily do today in solid. I don't think maybe,
[04:12:54]  maybe, maybe we can. Yeah, we can. Never mind. But this was a failing in my previous exploration. I assumed we didn't want to diff at all
[04:13:01] . Right? But no other solution is really suggesting that you don't diff. Right? In fact, it suggests you do more diffing. What we want to do is
[04:13:10]  save real downstream work. So this is my funny take on SigneAPS. Pretend we have create async and it has a history length of one. So
[04:13:23]  it just remembers if it's changed or not. And then inside our create drive store, we got this last epoch. Again, I'm not suggesting this is the API
[04:13:34] . This is just a mental exercise. And then from our mutations signal that I haven't explained, we get the diff since the last epoch. Okay? Then if
[04:13:42]  we don't have a previous value for the board. So that's the first realized board. So that's the first time or diffs equal the reset value. We don
[04:13:51] 't, we can't do the diffs or board has changed. So it's like a new board. The server is just updated. We just apply all the mutations
[04:13:59]  to our clone of the board. So essentially we generate our new immutable data with the mutations applied and we dip it to a store, which tells us the fine-gra
[04:14:12] ined updates. Otherwise we apply our mutations to the previous state. And we, from the diffs, we just grab the late, we have the latest diffs.
[04:14:22]  We look for new operations and we, then we basically just grab all the values and apply them. Okay. And then my apply mutation is just like the logic I had in
[04:14:31]  the last thing where it's like, if mutations create note, do this, do this. So ideally. So what, what ends up happening here? I mean, this
[04:14:38]  is an approximation, but what would happen is when the board starts, there's no mutations and it just basically produces a store of the board, the realized board. Then
[04:14:50]  when the first mutations come in, it goes in here and it applies all the, the mutations that it has essentially. And it puts them on top. So, you know
[04:15:07] , we added a new card to the board. Then someone also drags the card. At this point gets only the new one. So it only, it takes the
[04:15:15]  board that had the new card on it. And then it, and then it applies just the dragging. So it's only, instead of recalculating the whole thing
[04:15:22]  and diffing, it's only adding. The, the, it's only adding the, the one change. We're not, we're not like resetting the board
[04:15:34] . We're just applying the one fine grain change and just notifying. Oh, this one moved. And we keep on doing that. And then the transaction ends and
[04:15:43]  the optimistic updates are done and then the board updates. And then it just gets the current state of board and implies any mutations, which there aren't any at this point.
[04:15:51]  So it just basically clones the board again. So what's cool about this is because the previous state had the new card on it, and we're doing the diff there
[04:16:05]  against the, the original state of the board, if the IDs match or whatever, then we actually get to keep the object from the optimistic updates and all the mappings and
[04:16:18]  actually reuse it. Because it'll recognize that it has the same like key because we're, we're handling like the key reconciliation here with the drive store. So
[04:16:27] , um, but basically, yes, on every change we are doing a diff, we're doing a reconcile call, but we notify the minimal amount of stuff on every change
[04:16:40] . So downstream work is basically minimized and we only, because we only apply exactly each thing we need to when we need to. And the, the smart part about
[04:16:50]  this is when we reset the board, if there were some mutations, we do it all in a single go. Yes, this does expose the clock. See last epo
[04:16:58] ch, last epoch, last epoch, last epoch, right. But let me continue writing. And then for how did I make the notes, create memo,
[04:17:09]  and then, you know, compute 10, let's say, and compute dip. See, I don't know if this API preferable or require bring something to do diff
[04:17:17] s like immer, in simple case, but by getting a diff from mutations and knowing it, the board was updated since the last time create director ran, we can create incremental
[04:17:24]  changes. So basically, from my perspective, this completely solves the problem without any of the complexity that I was talking about. It diffs more than I would like,
[04:17:33]  but it's not like people can always do what I showed last. Originally, let me duplicate this. Like the, there's a lot of complexity that I was talking about
[04:17:44] . It diffs more than I would like, but it's not like people can always do what I showed last. Originally. Let me duplicate this. Like the, there
[04:17:52] 's a lot of complexity that I was talking about. It diffs more than I would like, but it's not like people can always do what I showed last. Originally
[04:17:54] . Let me duplicate this. Like the, there's a lot of complexity. There's the, there's the simple solution, which is, um, which is where
[04:18:01]  did I? Yeah. There's a simple solution, which is, where's deriving two stores. Did I not show it with Trello? Yeah. There's this
[04:18:12]  simple solution, which is like, you can just like literally just generate it on the fly and every time create everything and diff it, which is probably fine. Or there
[04:18:25] 's the more optimal solution, which saves the work of applying the mutations. Honestly. What I think I'm saying is regardless, I think there's only one drive primitive,
[04:18:43]  the create drive store. Like, I don't think there's, if you want to save the references of the new objects coming in from the server, you have to save
[04:18:54]  the references. You have to diff at this point. Like there's no way to diff earlier. Like in the store, you have to push the diffing to the
[04:19:02]  final reconciled data object, which is like our realized, sorry, our realized, uh, board, which means that we're not, we're not going to be
[04:19:12]  able to save on the diffing here. We can just save on the amount of temporary objects and the amount of work that we apply on each update. Um, it
[04:19:21]  might not even matter, honestly, but I just, what I'm getting at is I don't, I was trying to eliminate or decide if we needed like create projection.
[04:19:29]  I, I start designing these other primitives in the last article towards the end and they don't really work. I think incremental computations are interesting prospect. I preferred
[04:19:40]  an API where the decisions decide outside the competition. Um, I think so no with diff, this will have perfect overhead. So it definitely needs to be opt-in
[04:19:49] , which suggests between that and making it customizable, our built-ins couldn't be diff aware. I think it isn't just diffs that are interesting, but the idea
[04:19:56]  of when last run the, this answers the question of, did I trigger this computer to run? Even if you didn't immediately, if it has since run since your
[04:20:03]  last change, that's probably good enough. I think something on this dimension would be useful even without the diff ability built in. Like do mutations need to be a separate memo
[04:20:13]  to communicate the dip? Can we accomplish the same thing without it being built in? But I'll have to go to different thing. Anyway. Yeah. I'm not suggesting
[04:20:22]  we adopt this. I just wanted to show, I, I actually think there isn't. My thinking is I don't think there's actually many options here. Oh
[04:20:34] , got a raid. Sweet. Who did I get a raid from? So I gotta go look at. Oh, okay. We got here. Filippo 11 is
[04:20:49]  rating with the party. Thank you very much. That's awesome. Welcome to the stream. You guys came at a good time because I basically just finished. a really
[04:20:59]  complicated look at how to do derive stuff in the, with lazy reactivity and stores. And my conclusion is like, I'm not sure I'm going to need use cases
[04:21:15]  to find if we need other primitives. I'm pretty content right now that I think with one drive store primitive that I designed out on stream that we can do most
[04:21:25]  things. And it's another discussion of whether we actually need this whole incremental thing. my gut is we probably actually don't. So anyway, I know that's a
[04:21:38]  terrible summary, but that's, that's, that's where it is. If anyone actually has any questions about what I was talking about. But basically, yeah.
[04:21:52]  I don't know. Incre, incremental computations seem like an optimization, but they don't get away us away from diffing. And in solid, I think ultimately we
[04:22:01]  want to diff to a store as soon as possible. So we don't have to communicate diffs the whole way down the chain. If we wanted to communicate in diff
[04:22:11] s all the way down the chain, then we'd be using react. And it just seems wasteful because even though it saves us the knowledge of what has changed further
[04:22:24]  down, it doesn't actually help with the fact that like, like we're just hiding the fact that we're losing the information by losing the references. And we don't
[04:22:37]  want to lose the references. Anyways. Relevant talk repeal Jane Street. Yeah. Yeah. I, I haven't, I don't know if I've watched
[04:22:57]  this one. Um, that might be cool for another time. Uh, but let me, let me drop that. So. Yeah. I haven't seen that one actually
[04:23:13] . That's, I think it's very relevant. I'm going to, I'm going to check it out. Thank you, Dave. But yeah, I mean
[04:23:19]  the reactive library is called incremental. So maybe, maybe the ability to communicate diffs has some level of value. I think at minimum knowing if you're the reason this computation
[04:23:38]  ran, like you, this memo ran has value. Like if we just had that concept of saying like, Hey, I'm why this ran, we could go back
[04:23:48]  to our example and be like, okay, this is due to the board reset, do this. And then the mutations don't have to have some fancy format. Right
[04:24:00] . If you wanted to actually have an incremental mutation approach with diffing, you could just handle that in the mutations. Right. Like you, it, it doesn't need
[04:24:09]  to be built in the framework. As long as you can, the key part for this to work is like, like the data set that you returned from the mutations could be
[04:24:20]  like, have a timestamp. Like you could invent the timestamp yourself. I think that the key part of this is actually knowing when the board reset. That's
[04:24:31]  actually the most important thing. Is it something that was in the proposal? No, I mean, maybe eventually I'm the stuff that I've been talking about is,
[04:24:42]  is like the signal proposal is like, maybe signals 1.0. Maybe like, like I, we're, we're talking about like, we're, we're a
[04:24:52]  few steps removed from it. Like maybe, but I, I like this. There's a lot of really cool areas to explore. And I don't think we should
[04:25:02]  be hasty moving stuff into the signals proposal just yet. I, I, I like keeping it as minimal as possible. Yeah. So we're listening. Yeah.
[04:25:20]  But see, you can generate, if we could have it so that stores can generate like a diffed output if they want to communicate it. I think it's also be
[04:25:29]  sweet. If the server talked to us in diffed output, that would be sweet too. But none of that actually stops us from using the primitives that I'm talking
[04:25:35]  about here. I think. Right. If you, if you basically, if the server sent us diffed output, it'd be just like these mutations. And then you
[04:25:43] 'd write logic to take the diffed output from the server. And then apply them to your store. So I, I think, I think I, I, I
[04:25:52]  don't know how core this needs to be. I mean, it's interesting. Yes. This is the other reason why I'm looking at this because I want to,
[04:26:09]  I want to, I, my gut is, is if the sync engine can talk in diffs. Then we immediately taking those diffs and realizing them to stores is
[04:26:21]  going to be amazing for performance because it just moves, removes all the unnecessary crap along the path. Yeah. Except the problem is they give us realized data. I need
[04:26:38]  them to not give us realized data. They give us realized data and then expect react to diff again. I, this is the problem right now. Everyone's building for react
[04:26:50] . Even the signia API is building for react and we already can do better than this today. It's like, let's, let's just, let's go,
[04:26:57]  you know, stop building for a system. That's innately inefficient in this case, like react server components. That is a diffing problem. That is what they
[04:27:07] 're built for doing this real time stuff. You guys are picking the wrong framework, like not you did, but like, like it's, it's, it's frustrating
[04:27:18]  to see people like Dax go, oh, you know, I'm having a hard time with my thing with this, you know, on sync engine thing. And it
[04:27:25] 's because like their APIs are geared towards react. It's like, yeah, we're going to. lose information and expect you to gain it back. And, and
[04:27:33]  then like, yeah, it's, it's very frustrating when it's like really obvious to me that like using react, like for these use cases is non, like it
[04:27:46] 's non-optimal. there's cases where react won't matter. This is why you use signals. Like you get you guys. Yeah. Like, like
[04:28:05] , like if you just communicated to me, like in a diff format, like we were showing here with the ad patch, like immer, like we could do amazing things because
[04:28:15]  as I said, instead of communicating it down, we can resolve it immediately. And once and then push it out sync, like across the whole map without re-rend
[04:28:26] ering everything without going through the process of creating a whole bunch of projections, just to dip them again, we can just be like, first step. Apply the diff, change
[04:28:38]  the littlest thing. Like, like, if we were talking in diffs, we don't even need we don't even need to diff the actual, we don
[04:28:53] 't even need to do any diffing here. If we're talking in diffs, we wouldn't use create async like this. We would just, okay. You
[04:29:03]  gave me another use case to think about. Let's pretend create async returned diffs rather than realize data. I'm not going to do that right now, but,
[04:29:14]  um, I think it's a good, good thing to think about. Okay. Uh, last thing before I do this, we can JavaScript very quickly because I don
[04:29:25] 't have very much. I, uh, went back to, I don't know if you guys remember this. I showed this really simple example where you set account and
[04:29:48]  then the console log count double count, and then the reference in the Dom. And I mentioned how every framework had a different result. I wrote an article about this.
[04:29:59]  Um, this was a realization while we were working on Marco, just like how different frameworks are working. And I, I went back here because when I was working on some
[04:30:11]  of those crazy drives solutions, you know, about notifications and stuff, I realized that I could generalize this concept again across frameworks and the trade-offs. Um,
[04:30:21]  so I made a table, I didn't post it to Twitter. I wasn't sure if it should post a Twitter. I thought maybe I'd like to work on it
[04:30:26]  with you guys. Sorry, the question, it's a diff of data, but does the diff maps to UI and then it's like, I mean, it does
[04:30:47] , but the data doesn't always map to a single point in the UI, unless you're literally describing the component tree with the data that you're deaf. Like one
[04:30:56]  for one, you'll find that single points of data will map to multiple places in the UI. So while sometimes the hierarchy is loosely related, I don't think it's
[04:31:07]  like exactly the same thing. Which one was right? Yeah, that was my joke, right? I just being Twitter aggressive. Did I say which one's right? Which
[04:31:20]  is, which are more correct. But the reason I wanted to bring this one up is obviously I realized that this is just, if you look at pretend like they're
[04:31:31]  all written in signals, this is just a question of what are you deferring? Are you deferring the right deferring the notification, which is the propagation of the change
[04:31:39] , but not necessarily like the work. are you deferring the effects or are you deferring the effects or are you deferring nothing? So, you know, react
[04:31:49] , felt, old svelte, view, and then solid today, right? Biggest benefit of deferring the rights. It's consistent. You, there's no
[04:31:58]  way to be inconsistent in this model. Biggest benefit of different notification. it's efficient, obviously this is efficient too, but it's, you know, this is
[04:32:12]  like why you choose this way. Biggest benefit of deferring, um, effects. It's incremental. You can build, you can write code in such a way that
[04:32:21]  you can like update stuff and then read from that stuff and add stuff. Like you can incrementally apply your changes, right? You can't do that when your values
[04:32:30]  stay in the past as easily. Um, and if you defer nothing, the biggest benefit is it just feels natural. It feels the way it should. Similarly, the largest
[04:32:38]  downside of deferring the right is it feels very unnatural. Biggest problem with deferring the notification is it's inconsistent. It's the most inconsistent model. Biggest downside
[04:32:48]  of using effects. I had a hard time with this one. The only argument you could say is it's not synchronous anymore, you know, compared to like doing nothing.
[04:32:57]  And the biggest benefit of, of doing nothing is it's wasteful, right? And to illustrate this, obviously my state derived effect, when you defer the rights is
[04:33:07]  zero, zero, zero, when you defer the notification signal updates, but then the derived and whatever doesn't defer the effects. It's one, one, zero. And
[04:33:14]  if you defer nothing, it's one, one, one. Um, and similarly, this consistent field means that when you defer the rights, you are consistent because these are
[04:33:23]  all zero, zero, zero, zero. Similarly, when you do nothing, you're consistent to one, one, one, one, um, when you defer the
[04:33:28]  effects, you're internally consistent because your reactive graph is consistent, but your outputs are not. And when you defer the notification, you just aren't consistent at all because you
[04:33:40]  can like write your signal and read it and then write, and then read a computer and get the old value. This is why people have issues with old Svelte
[04:33:47] , like, like some of the people who have like really hardcore in it, they, this is kind of broken feeling. But similarly, if you have a signal that starts
[04:33:56]  at zero, set it to one and then set it back to zero in theory. If you defer, right, you wouldn't have to run anything. Like, I don
[04:34:04] 't know if react probably still does, but in theory, you wouldn't have to run anything. If you defer notification, you again, wouldn't have to run anything
[04:34:11]  because it's back at its initial value. If you defer the effects, generally you'll run once because, uh, well, it won't, uh, because when it
[04:34:26]  happens, it it's too late. Like you've notified, so it will cue the effects and then they'll see that it's the same value at the end.
[04:34:33]  And if you defer nothing, it runs twice. It's everything goes to one, then everything goes back to zero. So yeah, what I said, yeah, incremental again
[04:34:43] , this is the idea that you can like build up values by reading them and then like changing them and updating them. Only these two are, these ones aren't. And
[04:34:53]  then that's that, I don't know. It was just something I was thinking about, um, again, because when you're in a sense, when you're
[04:35:01]  bringing Crate compute into the chain, you're, you're deferring notification of certain things. So I, I just wanted to revisit the set of trade-offs here
[04:35:13]  and kind of like highlight why people might want to do one thing or the other. I imagine that Svelte ruins are the same as view and our proposal for solid
[04:35:27]  2.0 is the same as view, but I'm not sold. We might stay over here. Consistent means like literally like this, like if you have state drive
[04:35:40]  state and the result of the effect should be the same at all points. Like this is completely consistent. Like, like in my example, I showed it like, look
[04:35:50]  at this code, use state, use memo, and then there's a ref to a DOM element. If you're completely consistent, these should be the same, which they
[04:36:00]  are in solid and they are in react in view. And I think Svelte 5, you're going to see that internally, like the derived value and the state
[04:36:09]  are the same, but the effect is deferred. Right. So it's like internally consistent, but externally, you know, there's, there's a leg, but
[04:36:16]  in current Svelte, you can update state and then read for the derived value and it's not updated. So I could say that is not consistent incremental is the
[04:36:26]  idea that like when you set state in react, like update some state, you can't, you can't like look at say some derived state of it and use that to
[04:36:41]  update something else. Right. Or look at the state itself, like, which is basically like, you have to like project out the data that you, like, if
[04:36:52]  you set state, you also have to hold a copy of that state to update the other state and like figure out what the drive is. You can't actually like, right
[04:37:03] . Like in, in a, in a, in a deferred effect system, like view, technically at the time of the pure, right, you actually don't do
[04:37:13]  this work. It's internally zero, but the second you read it, it realizes that needs to update its value because it's dirty and it calculates it, which
[04:37:22]  means that increment, like if you're trying to apply changes, you can see all the changes immediately upon observing them, which is not true in these two. So these two
[04:37:34]  don't let you like incrementally, like, like do multiple mutations and sequence where these ones, these ones do. I mean, right, right is consistent. That
[04:37:47] 's what I'm saying. Right is consistent. Yes. Nothing is consistent. It's the ones in the middle that aren't. Anyways. Okay. I don't
[04:37:55]  know. Maybe it should post this to Twitter. Maybe having to explain what this means is too complicated. I don't know. Maybe I should post this to Twitter. Maybe
[04:38:01]  having to explain what this means is too complicated. I don't know. Maybe I should post this to Twitter. Maybe having to explain what this means is too complicated. I
[04:38:10]  don't know. Maybe I should post this to Twitter. I don't know. Maybe I should post this to Twitter. Maybe having to explain what this means is too complicated
[04:38:18] . But I just thought again about this a little bit at certain points. Like when I wrote the article, I was actually a big fan of this temporarily because it just
[04:38:32]  made things easier. I think this is still the best place to be. Or this. There's benefits to this. So like what I love about this is you just
[04:38:43]  don't care. Basically anything but this, this is the worst one. So it's, it's good that Svelte's got getting rid of it. But
[04:38:50]  it's also kind of crazy when you think about the Svelte community being accepting of this for so long because like this is, this is probably the worst. But again
[04:39:00] , create computed puts us into a partial zone of this. So yeah. So yeah. Setting state in effects is fine though. Like, because it's, it's
[04:39:16]  a start of the cycle again. Like if you set state in an effect, it's yeah, I guess. Yeah. Yeah. Anyway. Okay. Let's just
[04:39:36]  go through and let me give me two seconds. Okay. This will be a fast one. I want to talk about this week in JavaScript. I don't expect there
[04:39:52]  to actually be a ton this week. Because I was locked out of Twitter. But, you know, we'll see we will see what I've put aside here.
[04:40:08]  All right. Back to sharing my screen. Oh, yeah. Quick question. No, this, what I was showing before was not about push versus pull specifically. The
[04:40:31] , they all use pull based. I guess they could use push. I don't know. But everything I'm talking about is pull based essentially or push pull it. I
[04:40:42]  think I'm not even like, I'm just talking in general, in terms of how you handle it. Like react fits into that table as well as anything. I think
[04:40:50]  you can view reactivity these days as a general concept, even if there's no signals involved. I think we understand the ideas well enough, largely thanks to there being
[04:40:57]  a couple different models and seeking that convergence. So, okay. So last time I streamed was June 28th ish. All right, there we go. Let
[04:41:15] 's see here. Not there. Speaking of suspense, what's suspense for anyways? You know what? Earlier someone asked for a good introductory blog post for suspense. I
[04:41:38]  probably, this one, this is the other side. This is probably the one that I should have should have linked. I had a theoretical one, but this one is actually
[04:41:47]  like more of like how to use suspense and how it works. This is probably what they're actually looking for. No, a little bit late, but I, but I
[04:41:57] , I forgot about that one. Okay, cool. Well, this was actually a pretty good video from Theo. I actually talked about this at the end of my last
[04:42:08]  stream. He has the same concerns I had about the JS survey showing more pessimism around new solutions. He wrote, he made a whole video about it, which is cool
[04:42:18] . I'm not sure he probably recorded it even before I did my stream. I didn't see him do his stream, but it's, it's Fred from ast
[04:42:27] ro pointed it out to us. Um, actually in the same shared discord channel. And I think we both were like, okay, we should talk about it. Cause he
[04:42:35] , he was right. Like it, like, that's what the data looks like. So good, good, good video. Oh, damn it. Um, you
[04:42:45] 're right. Sorry. I did copy the same URL from before. This is the article URL though, put it up on the screen for a moment too. Okay. All
[04:43:01]  right. I don't have much more to say. Cause I literally gave the speech at the end, but hearing Theo's opinion, I think is interesting as well.
[04:43:14]  Um, I tried to do a poll to convince people that we should, you know, change, uh, solid routers, uh, name for cash function. It was
[04:43:32]  pretty evenly split leaving it. And I wanted to test one of my suspicions, which is that people would not go for data. Data. I'm not going
[04:43:42]  to lie was my first choice. Query has too much other connotations. Data literally means anything. So, and it let me talk about it like as a thing like
[04:43:55]  router data or route data, but I left it as cash. When I did the release, there's a new version of solid router out, which actually has some nice,
[04:44:05]  uh, fixes on types and, uh, and renames load to preload. So basically I'm not, I decided not to move on the cash function rename as
[04:44:18]  of yet, but it might still happen in the future. But in general, uh, really happy about the feedback here. And a lot of people helped me discuss and understand
[04:44:29]  the use cases. One of the interesting things that came out of this is people wanting just like a router rapper for things that like, aren't even related to the,
[04:44:43]  like the whole data of mechanism, which I don't know. I think it's interesting. It's definitely something worth reviewing. I'd rather be explicit caches meaning
[04:44:52]  and deduping isn't cash per se. Yeah. But it's also not, this thing does too many things to be called like a specific thing. I think is
[04:45:04]  the problem. I actually talked about it a bit in the discussion. Like it does deduping, but it also does reactive invalidation. Um, it also has
[04:45:11]  a very short term cache that it has. And it also, um, yeah, it's in the client has a short, short, I mean, I guess it's
[04:45:21]  request length on the server, but it has a short term cache for deduping, I guess. Like, and it also adds the router ability APIs, like being
[04:45:32]  able to throw redirects and stuff. So like it, it does a lot of things. Um, it's very tailored to the router. Yeah. It's, it
[04:45:48]  might not be like a cache in the typical sense though. I guess you could argue that it's not a cache. It's just deduping revalidation
[04:45:56]  and handling like response based APIs for, for routing. Yeah. Okay. Anyway, that's, I, I, I left it for now. I need Java like names
[04:46:14] . Uh, right before I got my account snatch, shy made this, I don't know what he was thinking, but I'm using nonetheless. Even signal. Yeah
[04:46:29] . Anyway. Yeah, this was fun. Uh, doing, I can stack form and solid start. Um, I got a chance to find some solid start bugs while working
[04:46:40]  with library authors, which is always good. So we managed to get a two node. to find some solid start bugs while working with library authors, which is always good
[04:46:45] . So we managed to get two new releases of Solid Start and Vinci out this week with the help of the new maintainers. See, I told you I didn't
[04:46:56]  have much news. Let's drop the solid stuff for a bit. Yeah, see, nothing. Okay. I did bookmark a couple things. But yeah, not
[04:47:13]  yet. Okay. Theo, it's been months since we got new front-end framework. Is everything okay? I know this is like a hilarious joke, but first of
[04:47:27]  all, I think some people... It does. Yeah. Do we include meta frameworks in the front-end frameworks? The thing is, has it been months? I
[04:47:46]  mean, it depends if you call Solid Start 1.0 a new framework, but it's been here for like three years. I think this is funny because there are
[04:47:55]  so many people working on new frameworks. I always hear about them for periods of time. and people reach out to them, you know, they want my opinion on stuff
[04:48:06] . So I definitely hear about new frameworks, but I don't... I think... I sometimes wonder if people think there's a perception that someone goes home for a weekend,
[04:48:15]  writes a framework, and then like essentially at that point, you know, release 1.0, and they get the reception like Solid did 1.0. Like that
[04:48:26] 's, that's, that's not what happens at all. The, usually the, some people do go quickly to 1.0, but like it takes years to,
[04:48:41]  to, to actually like build up all the stuff technically. The build up all the examples, build up all the things that need to happen, even if you have a
[04:48:51]  team of people doing it, the quickest zero to framework that I've seen happen in recent days was quick. And that still took them about two years. Like the bar is
[04:49:02]  so much higher. and it's not even just building it, it's proving it to a point that the right early adopters that try it and that the right word
[04:49:14]  of mouth gets out and stuff. By the time the average person hears about a framework, it's been used now for probably several years on like probably several production products.
[04:49:29]  like, there's no such thing as new frameworks, really, there's only like frameworks that yeah, like the new frameworks are already generally battle tested. Uh, so it
[04:49:41] 's like, I don't know, it's, it's been a very, very long time since people were like the gap between a framework creation and people hyping it
[04:49:53] . Um, was so short, I guess, million might be the best example of that, where the, the lead up time was actually relatively short. Um, but
[04:50:06]  that is increasingly rare these days. Oh yeah. This weekend, this month in solid. Yeah. I've been enjoying these newsletters. I think this last one
[04:50:26]  that you did covers the, the router data, data APIs. Some, this has been a problem, sorry, just on the side that this has been a problem, um
[04:50:35] , that we've been having, you know, I, I, we write RFCs and they sit for months and then I are like a month or something. And
[04:50:44]  then I commit the change, do like a minor release or a major release, like a significant release. And people are caught really off guard by these changes. And I
[04:50:51] 'm like, well, it is December, like correct. And I've tried to get feedback. I went on Twitter. I, multiple times I posted about it. I
[04:50:59]  streamed about it, but you know, the average developer isn't going to see, see this. I'm hoping things like the newsletter really cover that help close that gap
[04:51:06]  too. It's not like the main focus, but just be able to mention what's going on is really powerful. um, let me grab that Daniel and, uh
[04:51:15] , drop it in. So the YouTube chat gets it as well. Yeah. I mean, the, the thing is we got a lot of meta frameworks, so if
[04:51:35]  he counting meta frameworks, then I don't think it hasn't been months. If he, if we're talking like core frameworks, like react, like at that level,
[04:51:44]  it's, it's been pretty slow, right? Like there, there's been other little things like, I guess like Alpine and stuff kind of sneaking in,
[04:51:55]  in the middle, but like, but yeah, it's, I, he has to be counting meta frameworks. Yeah. Ed frames got super easy to build, which it
[04:52:05] , I mean, not super easy. It, it, it, it's, it's kind of like web components. Like everyone can build a framework once the web components
[04:52:13]  exist, we're getting to a point where like the tooling's there that, you know, people can just go, oh, I can build a framework, but maintaining and
[04:52:19]  actually building it to completion still takes this. Like the, the base entry bar, like the very low bar is way easier, which means in a sense there's more
[04:52:29]  competition and it takes that much harder to actually emerge from the stuff that anyone would pay attention to you. So I don't know, as you can expect it, people links
[04:52:41] . Yeah. I, I was expecting links to new frameworks. Yeah. The deal is the one who probably got all the links to all the new frameworks here. Everyone's
[04:52:49]  like, check out my new framework. I don't know. Yeah. All good. Yeah. Yeah. Yeah. See, yeah. Here we go. Dev stream
[04:53:00] . Very cool stream. Basically using Vinci live, built a framework with Jason, shows them how, how you can use Vinci in an hour and basically make a react
[04:53:08]  framework. the, this, this, this is example about bar raising or lowering, sorry, the, the base bar lowering. But that being said, so much more
[04:53:19]  goes into it beyond this. Yeah. The environment API is going to be our savior here. I think it was, I can't wait for this. Yeah. I
[04:53:39]  mean, I guess it's raising the floor because your base level entry of a framework is just that much higher. higher. You already have these pieces built for you.
[04:53:52]  Um, okay, cool. just a couple more quick ones. I love Tanner's exploration. I keep on bookmarking his quotes because it's like, you post
[04:54:04]  something. And I think I missed this last week. I didn't have time to talk about it where he's just like, wouldn't it be cool if you could just
[04:54:10]  do this thing and it, and it just automatically works and all this stuff. And everyone's like, yeah, yeah, yeah. And I'm like, a little bit
[04:54:16]  like, Hey, we've been doing that in solid for five years. But, um, no, maybe not completely. I guess this is sort of thing. This
[04:54:26]  one's we've been, you know, doing in solid for three years, but it's, it's, it's just like when you build stuff a certain way that
[04:54:32]  Tanner is now doing with start using the same basis and using the same breakdown that we've been developing, it just makes a lot of sense. Like react doesn't handle the
[04:54:42]  serialization for you. Um, it's all those primos do and Tanner's going to, and the end result just feels good. Good. This is how que
[04:54:51] erness are invented. I'm yeah. Yeah. Like it's like people should be excited. I, as I said, I wish, I wish I had a way of
[04:55:03]  hyping it stuff as well as Tanner. Um, but yeah, no, it's, this is. Yeah, it's, it is, it is interesting to
[04:55:14]  see this kind of evolution in the, not from the core react team, but from people in the ecosystem to get these kind of superpowers, which I thought this is the
[04:55:24]  way it would have always worked anyways. Right. Anyway. So I think that's why I bookmarked this one. Um, automatic streaming. I mean, this
[04:55:31]  is, this should be just the way the stuff works. I'm, I'm very stoked to see Tanner's progress. I'm hoping this also gets more eyes
[04:55:38]  on Vinchy, um, and helps, you know, with the beat six transformation and stuff. because right now these tools are the best we got and we're
[04:55:43]  kind of piecing them together as required to actually accomplish the goal. And it's right there. We've, we've got it. We just, it's, it
[04:55:50] 's just, it's, it's new and it's fresh. Like it feels damn good. I'm probably gonna have Tanner on again, but it's, it's
[04:55:56] , it's, it's, it's, it's new and it's fresh. Like it feels damn good. I'm probably gonna have Tanner on again. sometime
[04:56:03]  soon and we can talk through it. It's just, it's one of those things where it's, it's like, where you're, you're like very stoked
[04:56:19]  to see this develop. And on the other hand, be like, look, like, yes, like been doing this, like more people should do this, you know?
[04:56:28]  Um, this is an interesting one to move past components. You have to give up component composition and templates. Are people willing to do that? I am, but others
[04:56:36] , I'm not so sure. What's going on. I am absolutely not willing. The verification I found myself thinking of Dom as a whole, obviously like constant pain.
[04:56:47]  Yeah. This was my reaction. I want to know more what Matthew is thinking about this. He mentioned it when he was on stream with me a year back or so.
[04:56:55]  He, we, he, he, he basically said that the component model was the problem. Like the way we think. I don't think anyone is willing to give
[04:57:03]  that up though, which is a pretty strong assumption to make. So like right off the start, I'd say that's, this is a non-starter, but.
[04:57:13]  he is right that other models have certain benefits. We're, we're prioritizing locality of like conceptual, the idea that teams could work independently and people scaling and
[04:57:30]  like locality of logic over models that could be more efficient, easier. Okay. I don't know. It was interesting. I was just like, okay. Oh
[04:57:46] , well. Yes. I, everyone who talks like this is talking about something like NBC or like all the data on the outside, like no local state. It's,
[04:57:58]  it's, it's, it almost always comes down to that. Even if it's not exactly, I am interested to hear more of what he's thinking, but I
[04:58:05] , it's almost always that. Anyway, that, that, and I hit all the solid points. Sweet. And I only have one more thing. Someone shared this
[04:58:20]  in chat a while up and I see if I can find it, but it's fine. I can get it. What was it? Lady. Let's see if I
[04:58:32]  can find it. I thought I saw this. Someone share it in chat again. If they know what I'm talking about. Thank you. You got your someone
[04:58:55]  back. Someone status back. There you go. Sorry. Yeah. I saw this earlier. I should have bookmarked it. I got the inside scoop on what
[04:59:04] , and when the observable was hitting Google Chrome in this interview I did with Dom this year. Like, yeah. So basically the, the, the, the gist
[04:59:13]  of it is RxJS or the observable spec seems to be coming into the Dom. Uh, so, uh, yeah, it looks like it's moving
[04:59:22] . So long awaited thing. Honestly, I don't know what to think about this yet. I, they've been trying to find a way to get this in for
[04:59:31]  ages. So that's good. I built solid originally using observables. Cause I thought, you know, I saw the spec ages ago and I was like, this
[04:59:40]  is the future. Then I like went back and I was like, no, I really just like the knockout style signals. They work better for me, but these things
[04:59:49]  aren't fighting with each other. I do think it's an interesting way of getting in through the Dom because in one sense. Observables are good for events. So
[05:00:00]  they're good for coming from like click handlers, like coming out that way. Signals are for synchronization. They're better for actually updating the Dom or doing changes
[05:00:11] . That being said, effect timing and management is a challenge to agree on. So I, uh, we'll see how this unfolds. But it looks like things
[05:00:22]  like after a decade are finally moving forward. So good for them and good for people who are invested in this. Um, yeah, I, I think I originally saw a
[05:00:32]  slightly different tweet, but I think that's fine. So once we don't use observables for state, why do just Matthew Phillips here. Oh, he's asking
[05:01:01]  why we hide elements rather than like remove elements rather than hide them. I don't know. Uh, yeah. Maybe I've missed the question. It doesn't matter.
[05:01:12]  Um, I'm good for today. That was a good stream. Yeah. I mean, I, I have those concerns too. I'm not going to lie,
[05:01:26]  but they're going to keep on trying at it until they find as long as it's in a reasonable place. I guess once it gets in there, it's in
[05:01:42]  there. Anyways, uh, let me see. Is there anyone to raid? I missed a prime, not prime region, but like an awesome raid opportunity the other day
[05:01:51] . Cause I hadn't refreshed before I left. Nah, it's fine. It's all good. I'm just gonna, I'm just gonna go. Uh, I
[05:02:00] 'm much too hot and I believe I have, what was it? Despicable Me 4 to watch or something. Anyways, you guys have a good weekend.