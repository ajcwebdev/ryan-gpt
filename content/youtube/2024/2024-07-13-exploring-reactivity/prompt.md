---
title: "kz-p_017Usc"
slug: "kz-p_017Usc"
duration: "5:02:17"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/kz-p_017Usc.m4a"
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
[00:01:59] All right. Hello, everyone, and welcome to my stream today.
[00:02:03] Um...
[00:02:05] Thank you.
[00:02:06] I knew it was going to stream today, but honestly, it's...
[00:02:10] Or just...
[00:02:11] thing to do is often trying to pick the right cover. Like after like, I put too much pressure on picking, you know, a topic. And quite often the stream has like a main
[00:02:21] theme or topic other times i just have a mixed bag of things that i've been working on and um
[00:02:28] It doesn't quite translate as well.
[00:02:30] Um,
[00:02:31] Sometimes the most challenging thing for me to actually stream is actually to make the cover.
[00:02:39] So,
[00:02:41] Yeah, I've been working a lot
[00:02:44] on
[00:02:46] reactivity design type stuff, right?  If it hasn't been apparent from the last couple streams,  really since around the signals 2.0,  obviously I've been interleaving that with solid start work and Vinci did  some Vinci releases this week.  We've been expanding the maintainers of Vinci to help Nikhil out and make it
[00:03:07] so that we can push progress through a little bit faster.  I know there are some bugs in it  that are definitely affecting Solstart users.  And obviously I want to see them addressed  as soon as possible.
[00:03:18] Especially, funny enough, I mean, it's not surprising,  but the loudest concerns I've actually been hearing about stuff  that actually only impacts dev mode,
[00:03:26] Right.
[00:03:28] couple of the issues I was aware of when we went to 1.0, but like,
[00:03:31] I'm kind of
[00:03:33] of the mind that if the API isn't changing and it works in prod,
[00:03:38] Like,
[00:03:39] Dev can kind of be a little bit rough.  But on the other hand, that's the first experience that people see.  So like little rough edges there, drastically...
[00:03:48] impact people's perception of where the project is at.
[00:03:53] Um,
[00:03:54] which is obviously tricky.  So I've been trying to get some of those fixes in,  especially from the community.  Been a lot of help.  People stepping up, making PRs.
[00:04:06] So, yeah, anyways, come say hi in the chat.  We can get Twitter going, let people know that we are live.
[00:04:16] Let me see here.
[00:04:19] Hello.
[00:04:21] Yeah, I anticipate that...
[00:04:28] You know, some of the last couple of streams have been, you know, maybe tailored more towards the diehard, so to speak.
[00:04:40] You know, that's okay to...
[00:04:42] uh it's just tricky it's whatever i'm working on at the time and
[00:04:48] That's kind of the situation we're in.  When I was exploring Meta Frameworks, we were looking at Meta Frameworks.  Now I'm exploring an area of reactivity where I don't often get to look at other libraries.  Although I spent a decent amount of time this week looking at Signia from TLDraw.  And we're going to talk about that a little bit today.
[00:05:05] as well.
[00:05:07] Bye.
[00:05:08] Let's see here. Sorry, just getting on Twitter. Let's see if my screen share works.
[00:05:15] It feels like it's been a while. It's only been two weeks, to be fair.
[00:05:19] Yeah, we're good.
[00:05:20] All right.
[00:05:25] But.
[00:05:27] Thank you.
[00:05:28] All right.
[00:05:32] Twitch TV slash Ryan solid.
[00:05:41] Perfect. All right.
[00:05:44] Oh, wait for some people to get past that Twitch pre-roll and join in on the stream here.
[00:05:53] Well, what else is new?  Well, I've lost access to my Twitter account last week.
[00:06:00] pretty much for the whole week.
[00:06:02] Uh,
[00:06:03] To be fair, I'm still not 100%
[00:06:06] sure of the source of the intrusion. Honestly, I,
[00:06:10] I've flickered all my
[00:06:12] passwords and all that kind of stuff.
[00:06:14] But,
[00:06:15] Basically, somehow someone had logged into my Twitter account.  Maybe I used the same password on a different site.
[00:06:22] Something like Elite.
[00:06:24] And, um...
[00:06:28] I guess that was July 3rd towards the end of the day.  And I did get emails saying, is this you?  You know, somebody in Springfield, Mass...
[00:06:36] Massachusetts, I think, you know, on an iPhone, all these things are not me.  I don't I haven't had an iPhone for like over a decade.
[00:06:48] you know, accessed it, but I didn't see it.  It was July 3rd. I had family coming in town for the long weekend.  So it wasn't until July 5th.  I just happened to be like checking it something in my email that I saw all of  these messages basically saying,
[00:07:02] showing, you know,
[00:07:05] Suspicious behavior, different, you know,
[00:07:08] you know, logged in from a different device location.  And then the last one, which is the one that really tipped me off,  which is the actual one I saw right away,  was your email address on Twitter has been changed.  So when I went on, I found myself,  but someone had changed my username as well.
[00:07:25] And, uh,
[00:07:27] it was fun because when you go through Twitter support and you don't have the email or the username on the account,
[00:07:36] They don't know how to verify you.
[00:07:39] You'd think there'd be some kind of history or something there,  but every time I went to open...
[00:07:44] a support request,
[00:07:45] I got an auto email like within 15 seconds saying,  Hey,
[00:07:49] Well, you know what?  I can actually pull out one of those auto emails  if you guys want to see what it looks like.
[00:07:55] Yeah, let me see if I can find it.
[00:07:59] X.
[00:08:00] dot com.
[00:08:03] uh...
[00:08:06] or it's actually from Twitter support, funnily enough.
[00:08:15] Thank you.
[00:08:17] Okay, here we go. Perfect. Yeah, I got an example of this. Let me share my screen here.
[00:08:23] You get this email pretty much.  I'm gonna blow it up a little bit here.
[00:08:29] Thank you.
[00:08:31] This is the generic email you get.  Hello, we're writing to let you know that we're unable to verify you as the account owner.  We know this is disappointing to hear, but we can't assist you any further with
[00:08:43] accessing your account. If you know which email address or phone number is associated with the account and you no longer have access to that email or connected phone number, please contact your service provider for assistance. So this isn't the case, right? Obviously, I have my email, they changed it. For privacy reasons, we can't provide any information to the account registered email or phone number, that's fine.
[00:08:59] We understand it's frustrating to get locked out of account, but we have these policies to protect accounts and private data. We appreciate your understanding.
[00:09:04] You are more than welcome to create a new account to get back on X.  Please do not respond to emails, replies to this account or not monitor. OK.
[00:09:11] So basically,
[00:09:14] This is the auto response that you get every single response.
[00:09:20] time.
[00:09:21] Right.
[00:09:24] So
[00:09:26] Yeah, I'm...
[00:09:30] I think it's like they do it within 10 seconds.  So basically if you fill in a form and they give you a bunch of fields, like what's the email address, what's the username, all that stuff.  If basically anything doesn't match their records...
[00:09:43] current records, then this is what you get. And there's basically nothing you can do.
[00:09:48] Um,
[00:09:52] like there's no other way to contact them all the other forms like they send you down these  help paths and you are stuck
[00:10:01] So like...
[00:10:05] At this point, after like trying like four times, like I sent clippings of the, you know, we think your email has been compromised or, you know, not like suspicious behavior.  I send them all the clippings showing me receiving emails.
[00:10:17] the, you know, like
[00:10:19] Even the one that said your email has been changed from, you know,
[00:10:23] my email to
[00:10:25] P I star, star, star, star, star, star, something, you know, like they, they, they, they don't show  the full email. They show that's been changed to a new email. I sent them all of these things,  you know, that were sent to my email as kind of,
[00:10:37] evidence that I controlled the email and someone changed it. But
[00:10:41] it never got past the bot, essentially.  And I imagine that is the case for pretty much everyone.
[00:10:49] To be fair, I didn't have MFA set up.
[00:10:53] And
[00:10:54] And I'll talk about that in a minute because
[00:10:57] Like I have two factor authentication on all my stuff, but I did not have it on Twitter because Twitter wouldn't let me sign up with my email that I used on Twitter.
[00:11:08] Like they're like, this email is already in use, but I'm like, yeah, it's my email.  That's why it's in use.  Right.  I was...
[00:11:15] hoping that I could use my email to actually set up, because they ask you stuff like, would you want to share this email with people and all this stuff, and they actually add a second email to your account, which I ended up doing eventually anyways, but it's awkward when I have multiple accounts, and you're like,
[00:11:29] use one email for this account, use one email for this account. And they're like, no, no, now you need two emails
[00:11:33] for each account.
[00:11:35] um i hit that blocker at one point and i was just like okay whatever i'll take care of it later um
[00:11:42] So,
[00:11:44] Yeah, it was definitely a little bit
[00:11:47] Awkward. The
[00:11:51] Right.
[00:11:53] Thank you.
[00:11:53] So in any case,
[00:11:57] I did manage to get Twitter into two-factor authentication eventually, but I did.
[00:12:05] when in this situation,
[00:12:08] Mm-hmm.
[00:12:08] the automatic response, basically, they just won't look into the case. Um,
[00:12:14] I was fortunate enough that, see, I don't want to out-
[00:12:18] people who work there because then everyone will probably like go after them. But I'll just say,  I can at least name one person who wouldn't mind taking the credit.
[00:12:30] I reached out to Theo.
[00:12:32] And,
[00:12:33] He knew someone at Twitter who for their sake,  I'll leave them anonymous,  although they were very,  very helpful and managed to,
[00:12:42] push the case to support you know this is after me writing you know doing these things trying to  like if you actually respond to the the email or try and write a different email rather using the  case number as a way of being like hey you know i submitted this case i would really appreciate you  reviewing it writing a long thing you also get an automated reply because they scan for the case  number and go this case has been closed you can open a new case basically like there's no way
[00:13:08] to get past their support system
[00:13:11] unless you know someone.  And as it turns out,
[00:13:15] Theo helped out. He knew someone.
[00:13:17] And I said, I don't want you pestering these other people, but I was able to work with  support.  It still took like six steps.  Like I went through the verification process I did before, remember when someone had, there
[00:13:29] there was a clone of my account, like someone made a fake Ryan account. I managed to, and I had to go through verification to get that shut down. I went through that process again. I had to like state that I was the account owner. And then even after all of that, I still had to go through another process to get the email sent. And it took all took a few days. But eventually I got regained access to my account. So I mean, that's basically what I'm doing.
[00:13:56] Thank you.
[00:13:57] That's basically the story. People were wondering, you know,
[00:14:01] how this happened as i said i'm not completely sure but i just flickered through everything you know
[00:14:08] reset everything. And I, uh,
[00:14:11] Went on the solid account, which I had access to and use that to let people know in case the purpose messaging people.  I didn't see any outgoing. They could have deleted their messages.  I did receive when I did get the account back.  I did see a bunch of DMs from people asking the hacker to give the account back to Ryan, which I thought was amazing.
[00:14:30] very sweet. I do appreciate the people who actually tried to message the hacker to give the account back. So,
[00:14:41] Yeah, in any case, it's resolved now. I have two factor authentications set up, even though it was like jumping through a bit of hoops. But here we are.
[00:14:52] Thank you.
[00:14:53] Bye.
[00:14:54] What?
[00:14:56] Bye.
[00:14:58] Okay.
[00:14:59] Thank you.
[00:15:01] all right
[00:15:06] No, I mean, I didn't say that as any, any thing. He, he was incredibly helpful. There's a reason I reached out to him right away and knew he was exactly the type of person who was connected or, you know, the group of people, the associate would be able to exactly connect the people to the people I needed that I needed to. So, yeah.
[00:15:27] No, extreme gratitude towards Theo and
[00:15:32] unnamed Twitter employee.
[00:15:34] Thank you.
[00:15:36] Thank you.
[00:15:40] Yeah.
[00:15:41] Um, no, my password was not easy. It's one that I remembered.
[00:15:46] But it was actually a very random combination of characters and letters.  It did not resemble English words.  It had special characters.  It wasn't leet code or like leet speak or anything.  It was something that...
[00:15:58] It was actually old...
[00:16:01] account ID that I had from a service when I was a kid.
[00:16:05] that I remembered back from when I used to type it in,  like a username that was given, like that was generated,  that I used to have to like type in back when I did dial up.
[00:16:14] back when I was...
[00:16:17] you know, like a kid, like, I don't know, like,
[00:16:20] eight years old or 10 years old or whatever. And, um,
[00:16:25] Yeah, pretty much.
[00:16:27] I'm not saying unhackable, but very unlikely kind of password.
[00:16:34] I just remembered this.
[00:16:36] because
[00:16:38] Like I used it so much when I was a kid.
[00:16:44] Thank you.
[00:16:45] Yeah, I mean, it's interesting.
[00:16:49] Thank you.
[00:16:52] Yeah.  Uh,
[00:16:59] Thank you.
[00:16:59] Thank you.
[00:17:01] So in any case, I'm good now.  We're good now.
[00:17:06] uh,
[00:17:08] Amen.
[00:17:09] It is. It is what it is.
[00:17:12] And yeah, I'm super glad.  It would have sucked to try and start over again.
[00:17:17] Obviously, you know,
[00:17:20] Yeah, and you know what I would have had to do?  I would have had to make another account,  and then I would have had to like...
[00:17:26] basically...
[00:17:27] do verification to prove that the more popular account was actually not owned by me.
[00:17:32] And then like, it's funny, that might have been a more direct way for me to get my account back.
[00:17:38] Um,
[00:17:40] Ironically, but because of processes, they probably would have been forced to close my old account and keep my new account.
[00:17:45] It's funny, like,
[00:17:50] I mean, it's especially funny because like my picture is,
[00:17:53] was on the account.  Like if I could have gotten on a call or anything,  it would have been very obvious that,
[00:18:00] I was the owner of the account
[00:18:04] you know,
[00:18:06] Like they didn't change anything except for the username.  I think whoever didn't know what they were doing.  They knew that if they changed the email and the username,  the thing is when you're on Twitter,  you can type in the old one in a backlinks.  So like it actually will,  like if you start typing at Ryan Carniato,  it was linking to the same, you know,  the thing with the updated username.  So like it wasn't a way of hiding the account  so people couldn't find it.  It was a way of basically disconnecting both sides.  So Twitter had no way of basically associating me  with the account.
[00:18:36] They didn't do very much with the account as far as I could tell, but they knew exactly what they were doing.
[00:18:42] AI video chat. Yeah, I mean
[00:18:46] I...
[00:18:48] Yeah.
[00:18:55] Oh, that sounds terrible. Yeah, I mean, this is always my fear with them.
[00:19:00] with these like auto passwords.
[00:19:03] you know, I've had them, I do have them, you know,
[00:19:08] Yeah, anyway, it's just--
[00:19:10] Yeah.
[00:19:13] And there's always the master password, right?  So...
[00:19:16] Mm-hmm.
[00:19:19] Thank you.
[00:19:19] All right. Yeah. So that was my, that was my journey,  which means that it's going to make this week in JavaScript a little bit  trickier because it's,
[00:19:28] I have a whole week where I wasn't really...
[00:19:32] In it.
[00:19:34] So to speak, I don't know very much.
[00:19:37] happened over that week, to be fair.
[00:19:42] But...
[00:19:43] Meh. It is what it is, right?  Let's see.
[00:19:46] Mm-mm.
[00:19:48] Thank you.
[00:19:49] Thank you.
[00:19:51] At least I'm streaming the right category in Twitch. Sorry, I was just checking because sometimes I don't know.
[00:19:58] StreamYard doesn't set me up on software and game development, but I am.
[00:20:04] All right.
[00:20:05] How are people enjoying their summer so far?
[00:20:09] Thank you.
[00:20:12] People started talking about the pre-commit hooks again.
[00:20:18] Yeah.
[00:20:19] Yeah, people are still torn on it.
[00:20:21] Right.
[00:20:23] Heat, hot, yeah, it's hot. It's hot here. It's been over 100.
[00:20:29] Pretty much. Well, it went below 100 one day, but it's been it's been pretty much over 100 the last like two weeks here.
[00:20:35] Thank you.
[00:20:37] Thank you.
[00:20:39] Rainy and wet here in Denmark.
[00:20:42] Yeah, no, I was almost ready to get a little fan going. I have one of these like portable little fans.
[00:20:49] you know,
[00:20:50] I was like, but I don't know if it'd make too much noise on the stream.  Because you have to understand, when I'm streaming, I'm under lights.  I have some area lights over here.  I have one of those front cam lights over here, you know.
[00:21:02] So, yeah.
[00:21:03] it's not just the heat.
[00:21:05] And then I have natural sunlight coming in through my window.  So it's, I have, I have,
[00:21:10] It's 100 Celsius is a lot.  100 Celsius would be a hot.  No.
[00:21:16] No, no, no. Sorry. I'm in San Jose. So 100 Fahrenheit.
[00:21:20] which I think is like what, 39 Celsius.
[00:21:24] 38, 38 probably.
[00:21:27] Thank you.
[00:21:28] Thank you.
[00:21:29] I didn't miss that.  I participated in that a little bit.  It was...
[00:21:33] Maybe I forgot to bookmark that.
[00:21:36] That was...
[00:21:38] That was...
[00:21:42] *sad music*
[00:21:44] That was a...
[00:21:47] It's interesting. I don't know. Maybe I talked about it last stream.
[00:21:51] All right. All right. Um,
[00:21:55] So,
[00:21:56] I guess let's, I'm just going to share my screen for a second because I'm
[00:22:04] Thank you.
[00:22:05] Gosh.
[00:22:06] I actually posted that I didn't know what I was going to stream about and I got some suggestions. So before I get into any of the topics of today, I thought maybe I'd go over a couple of these suggestions to see if I could at least address some of the things in here, maybe something something good.
[00:22:22] React to other YouTube videos or articles. Easy.
[00:22:26] Yeah, I mean...
[00:22:29] That is always a possibility.
[00:22:31] I think Theo has been making a lot of content this way recently.
[00:22:35] It's like so much easier than he doesn't have to. He can still hold his opinions, but then he doesn't have to actually generate the content. You know, he's not Excalibur drawing it himself.
[00:22:44] Um...
[00:22:47] do it anyways thanks patrick what's this one
[00:22:49] talk about new web frameworks.
[00:22:52] I'm sure you know more. Yes, I'm familiar with the brisa or brisa, however you say it. Um,
[00:23:00] First of all, it's not...
[00:23:02] Thank you.
[00:23:03] It's not like...
[00:23:04] released yet, I guess. Like it's my understanding that he has like a public release plan. So I,  I wasn't going to talk about some of these features.
[00:23:12] early. And also...
[00:23:14] There are a lot of people working on frameworks. I think it's
[00:23:18] best.
[00:23:19] to give them time to get it to a certain place where it's presentable before i actually say very much about it
[00:23:26] you know, make some of the demos, you know, put it, put it in some of the comparisons,  you know, so that there's something to talk about.
[00:23:34] Um,
[00:23:35] Obviously, I'm familiar with this one because the author reached out to me a couple months back and we talked a little bit about it.
[00:23:42] some things talked about a lot of server client communication, reactivity over the wire, stuff like that.  Really cool stuff.
[00:23:49] But yeah, I like seeing these things come to fruition before I get too much into it. So a
[00:23:56] you know,
[00:23:56] it will probably have its day like most frameworks that I end up covering.
[00:24:02] My stream's only three hours.
[00:24:05] Thanks to my wife.  I meant just talking about reactivity for three hours.  It's still this week in JavaScript,  so we can easily pad that out to five.
[00:24:14] Here's a cool one.
[00:24:15] Fabio, random idea, going through a whole bunch of frameworks that you know and saying what is especially nice about them. These projects seem to all have angles or point of view. It'd be interesting to say explicitly what that might be for a bunch of them.
[00:24:29] What a nice deal. What about people dropping other frameworks?
[00:24:34] Quantum JS yet.
[00:24:37] Yeah.
[00:24:39] Yeah, I mean, of the popular frameworks, I think I've given these kind of opinions before.  Mostly, I was on a panel at React Summit recently, and I described JavaScript frameworks almost like people where they all had personalities, you know, like things they care about.
[00:24:56] that, you know, after a while you feel like you get to know them. They have like the
[00:25:01] thing that they put out there, you know,
[00:25:03] and then they have like what their deepest secrets or dreams are you know and you kind of feel over  time you can understand those things so that might be an interesting idea the funniest thing is when i saw that
[00:25:15] I just had this crazy...
[00:25:18] Crazy idea. I was like,
[00:25:21] I was like, what if I wrote...
[00:25:24] JS Framework Fanfic.
[00:25:26] essentially, where I tell a story of the history of JavaScript frameworks as if it was like sci-fi, like if it was like Dune.
[00:25:34] And
[00:25:35] I'm, I'm, I'm,
[00:25:37] I'm not done here.  This has got lots more work to do.  But this morning I just sat down and I was just like,
[00:25:44] I was like,
[00:25:45] Hmm. This is something I'd find entertaining. So...
[00:25:48] Um,
[00:25:50] I'm not ready yet. I'm sure if you guys can pull off that URL out of the bar, you'll get there. But I will probably share this when I'm ready. But...
[00:26:00] Yeah, I...
[00:26:02] That question led me to writing a fictional story about the history of JavaScript frameworks as if they were like,
[00:26:09] part of some fantasy or science fiction universe. Um,
[00:26:14] Yeah, okay.
[00:26:16] Pre-order when?
[00:26:22] I like writing. I like writing a lot. I mean, I write articles, but I've tried to write fiction in the past.
[00:26:30] My biggest attempt was I was actually writing a sci-fi story.  Oh, about 10, no longer than that.  Maybe 10.
[00:26:37] Yeah.
[00:26:38] 11, 12 years ago.
[00:26:40] And I was writing it on my...
[00:26:42] maybe even longer.  I had one of those like tablets that had keyboard attached to it for extra  battery life as an old Asus as writing it on there.  And,
[00:26:50] For some dumb reason, I never cloud synced it.
[00:26:54] Right.
[00:26:55] And, uh,
[00:26:56] I guess it was around the time I was going back to university.  So I took this little...
[00:27:01] Like...
[00:27:02] Weak computer Windows 8 style everywhere in the end, like 17 hours battery life. Not exaggerating.
[00:27:08] And
[00:27:10] I'd write on it.  And then one day it just died randomly.  And I lost the whole freaking thing.  And I just was so...
[00:27:17] diminished that I just didn't start up again.
[00:27:20] Uh,
[00:27:22] So, I don't know.
[00:27:24] Be fun to write fiction again, but, you know, who has the time?
[00:27:29] Anyway.
[00:27:31] Um,
[00:27:32] Thank you.
[00:27:33] I do actually think there is something here of an idea because
[00:27:39] The frameworks do have personalities.  And that's what led me to the writing.  Because I was like, what if I...
[00:27:46] put them in a place where they their personalities showed
[00:27:50] You know, in terms of like a storyline or history, you know, I'm very influenced by Isaac Asimov was my favorite writer. Obviously, his writing is what makes his writing amazing is his cleverness. But I love the foundation in that it almost told like a history, you know, that.
[00:28:07] And that's sort of what got me thinking.  Little Robert Jordan influence in there too.
[00:28:14] Anyway.
[00:28:16] fun time.  The other thing that influenced me is if you've ever seen that  Rich Harris talk where  at the beginning he has like
[00:28:24] like these animations
[00:28:26] And like, uh,
[00:28:29] Oh, what was it?
[00:28:31] Basically, he shows the history and they calls them the three ages of JavaScript and then the third age is like Svelte, right?
[00:28:38] But he like tells the story of like the guys from Meta coming over and that, you know, and.
[00:28:44] introducing people to React and, you know, this, this, you know, history.  I was a little inspired by that as well.  And I thought, you know,
[00:28:52] I thought that would make an interesting...
[00:28:56] sort of
[00:28:57] world to build into. Anyways, I'm taking this way too far.
[00:29:03] Yeah.
[00:29:04] but yeah, I don't know.  It is interesting to say like just off the top of my head,  I think I've said this on some of the, the, the,  like my framework recaps on 2024 or whatever,  like every framework has an angle, right?  Whether it's from like,
[00:29:19] you know,
[00:29:21] you know, like reacts whole like,
[00:29:24] simple is better
[00:29:27] than easy mentality although some would say they've strayed away from that but this whole idea of just
[00:29:33] everything being immediate.
[00:29:35] You know, like...
[00:29:37] to like, just like views being all about,
[00:29:42] being progressive about
[00:29:44] Boon feeding people and being very comfortable as they go on their journey. Right. A lot of frameworks are concerned with like the adoption side.
[00:29:55] a lot of like the front end and it affects their personality because you know
[00:30:00] to like whether they want to be liked or not, you know, whether they want to be likable, so to speak, right?
[00:30:06] Okay.
[00:30:07] I could talk probably hours on this topic.  I don't know if I...  I feel like I need to have like a...
[00:30:13] a point that I was trying to make.
[00:30:16] But
[00:30:17] This is definitely an interesting one.
[00:30:21] that I think would be fun. I've shared hints of this on various streams. So
[00:30:26] Yeah, it's a cool suggestion. I would probably have to put some more thought of it. And instead of doing that today, I wrote fiction. So I'm sorry, Fabio will have to wait for another another time.
[00:30:38] Yeah.
[00:30:40] What else do we got here?
[00:30:42] solid dev tools.
[00:30:44] That's...
[00:30:47] That could be a cool stream. I don't know how I'd work with timing, but I'd love to have like Damien, the Tarniv, you've probably seen him around our community.
[00:30:55] Talk to me about solid dev tools and how they work and where they go.  This is an area that I don't know about.  This would be a good, like,
[00:31:01] guest topic to bring on. So I think that's a good suggestion, Aiden.
[00:31:06] Um...
[00:31:15] Yeah, super interested about what I've been writing, yeah.
[00:31:18] We'll talk about that today.
[00:31:21] How about live coding and toy solid using only native web tech and the native  signals proposal? That'd be fun and educational.
[00:31:26] Yeah, yeah. I mean,
[00:31:28] I've,
[00:31:29] I've done this.
[00:31:32] with an existing signals implementation, right? When you consider when I did the petite solid
[00:31:37] stream, I basically took Solid's existing reactivity and wrote a renderer, so to speak,  using purely reactivity.  And then we've JS Framework benchmarked it, of course.  So that was fun.  Going to native signals, probably find two...
[00:31:56] But...
[00:31:57] I'd actually have to like get deeper in parts of the proposal, right?  Like basically we'd be just spending our time,
[00:32:06] making the effects work, and then we'd be spending our time doing the simple renderer,  which we've done on stream before.  But so I don't know.
[00:32:16] Maybe when the native signals are further along, there's probably an angle that might be interesting.
[00:32:21] Minko's latest talk.
[00:32:22] Okay, let me get back to that one.  That might be interesting.
[00:32:27] I'd like to see more of how Nitro fits into different hosting setups for a cloud repair. I'm assuming it's using a worker to do bindings work. I haven't played enough to understand.
[00:32:35] Thank you.
[00:32:36] My...
[00:32:37] I feel like this isn't I mean, this might be just a short answer rather than a long answer.
[00:32:42] Because
[00:32:43] All the cloud providers, when you own their docs and you just like deploy a function or worker or pages project, they have a set API and Nitro just.
[00:32:52] generates that. So when you use Cloudflare Pages adapter with Nitro, it just
[00:32:57] creates the file with the, you know, the handler in it, so to speak in that format.
[00:33:03] Um,
[00:33:05] There isn't really...
[00:33:07] it's kind of just like an output format that is already defined by the providers. Like,
[00:33:12] If I go like creating,
[00:33:16] Creating my main caps.
[00:33:19] Creating a...
[00:33:21] Cloudflare.
[00:33:24] pages project or something like that right let's let's go in here
[00:33:28] Getting started, Cloudflare pages. So you can use a CL, direct load, and get integration. Okay. So not framework rides. How about just
[00:33:39] Getting started. Create a function. See, here we go.
[00:33:43] Hello world JS in your functions folder on request new response request. Okay beautiful. So
[00:33:49] They just expect you to export
[00:33:52] Is it just called on request?
[00:33:54] for pages, I think they just expect you to export a function called on request and then it passes in a context response.
[00:34:01] this is basically the majority of what nitro has to do it just goes okay
[00:34:05] I'm going to generate the specific on request handler for your
[00:34:10] your application and then instead of calling returning response,
[00:34:15] I'm going to call the user code that you pass into the
[00:34:20] Nitro event handler API essentially and they just map it across.
[00:34:24] So they kind of just
[00:34:26] Mm-hmm.
[00:34:27] abstract these platform-specific pieces,
[00:34:30] And then...
[00:34:32] you just have like Nitro's event handler API, which solid start ends up wrapping. You don't see it. And then
[00:34:40] um
[00:34:41] it just generates for the specific target.  Like they're all kind of the same.  If I go here, if I go Netlify functions,
[00:34:50] getting started.
[00:34:52] Let's do the same thing.
[00:34:54] Getting started with functions, Netlify.
[00:34:56] Okay, beautiful.
[00:35:00] export default in their case.
[00:35:03] Request context.
[00:35:05] You starting to see a pattern?
[00:35:08] While the platforms support different features,
[00:35:11] For the most part,
[00:35:14] And there's environment considerations.  For the most part, the actual code running part of the deployment here  is just a matter of outputting in the right location
[00:35:25] these things, right? They're very specific. They're like, put this in the functions folder, you know?
[00:35:31] Vercel has the same sort of thing.  They have a what they called helped.
[00:35:38] beta test this for cell build
[00:35:42] output API.
[00:35:43] V3, exactly.
[00:35:45] overview. What if I want to
[00:35:51] build
[00:35:53] Where is it?
[00:35:54] for cell build up for a by configuration features. What's features?
[00:36:00] Edge middleware sure.
[00:36:02] No, I want...
[00:36:04] Is there something just high-level routing...
[00:36:08] You basically put stuff in a certain...
[00:36:10] What's for cell primitives?
[00:36:12] There we go.
[00:36:13] function function name there's the config and then you can usually just put in
[00:36:21] whatever the name there's there's gonna be a file here okay for cell i'll put functions
[00:36:27] Why am I not seeing it?  These docs are a little...
[00:36:30] Thank you.
[00:36:31] Come on, just show me the simple function here.
[00:36:34] I know it's in here.  It's almost the same thing again.  There's like a file,  a JS file that has a handler that's that,
[00:36:41] basically handles the request.  They're all kind of almost the same anyways.
[00:36:50] Yeah, the minko talk is fun. I haven't seen it, so I don't know how much time we want to spend looking at it.
[00:36:59] The only thing that I see off the top...
[00:37:01] title is Converging Web Frameworks.
[00:37:04] Which...
[00:37:06] All right.
[00:37:07] I guess is an interesting topic for people now.
[00:37:15] And I guess it's coming to reality, which is really cool.  I don't know all he covers in here.  I think one of the biggest factors emerging has been obviously the signals, the
[00:37:24] Um...
[00:37:27] stuff like we're seeing common ground primitives i'm sure the talk talks about whiz and angular  merging
[00:37:34] It's funny, I actually wrote that all the framers were merging five years ago in a Medium article.
[00:37:40] Um...
[00:37:41] that they're converging.
[00:37:42] And I don't think I don't know if anyone actually believed me back then.  What was it called? Finding fine grained.
[00:37:49] reactivity.
[00:37:53] Not that one. Angular in depth. I wrote it for an angular blog too. That's lovely.
[00:38:02] Thank you.
[00:38:03] Thank you.
[00:38:05] Oh, man.
[00:38:11] uh
[00:38:16] No articles complete without the JS framework benchmark, right?
[00:38:21] God, I don't... This is funny. They don't even have my...
[00:38:25] They don't even have my name on the article anymore.
[00:38:29] That's so weird.  You see, there's no place that's like authored by...
[00:38:36] Yeah.
[00:38:42] Thank you.
[00:38:44] This is just so funny that like,
[00:38:47] Okay.
[00:38:50] Yeah.
[00:38:53] Yeah, I can redrop the link.  I think I posted this one to Medium too.
[00:38:58] Let me see if I can find it on medium. That might be better source.
[00:39:13] It's so...
[00:39:17] It's so weird.
[00:39:18] Because Angular, okay, let me try this.  You guys can see the backdoor into my Medium account if I'm...
[00:39:24] Still signed in.
[00:39:26] Because Angular In-Depth was a medium publication.
[00:39:30] So,
[00:39:33] Yeah.
[00:39:36] published.
[00:39:39] Thank you.
[00:39:51] There it is.
[00:39:54] June 30th, 2019. 15 minute read.
[00:39:58] Yeah, I remember this one.  I had a nice picture of sand.
[00:40:01] Thank you.
[00:40:05] Thank you.
[00:40:05] All right.
[00:40:09] Thank you.
[00:40:12] Thank you.
[00:40:16] There we go. Oh man. Yeah. It's just funny that the member-only story
[00:40:24] whatever it's just it's just funny that the in-depth article doesn't even
[00:40:28] doesn't even
[00:40:30] credit me for as the author, like I'm not found on it anymore.
[00:40:36] Yeah.
[00:40:38] Anyways, all good. This is an old article. I've given talks about this for years, but this was talking about the language convergent. To be fair, there's more than that going on.
[00:40:50] Um,
[00:40:51] But it's interesting.  It's just there hasn't been this much alignment in the history of JavaScript frameworks, I don't think.
[00:41:00] Thank you.
[00:41:01] Right.
[00:41:06] I don't know. I mean, look...
[00:41:10] Let's let's give this for a minute and see what it's about.
[00:41:14] All right, why not?
[00:41:16] Uh, let's do that.  Let me, uh,
[00:41:19] Let me change how I'm sharing my screen. One sec.
[00:41:26] Present.
[00:41:28] share screen chrome tab
[00:41:31] Minko.
[00:41:32] Let's see what's going on. All right.
[00:41:34] There we go.
[00:41:36] Let's take a look at this. I've heard good things, so let's. We just signed the lease. Of course, we got the ads first, right? I mean, I can just mute it for a while it plays the ads.
[00:41:47] All right, Skip.
[00:41:49] That's...
[00:41:51] All right.
[00:41:56] So last year,
[00:41:59] Angular and React were effectively the same framework.
[00:42:03] Probably you're thinking this makes no sense, right? Angular uses classes and templates,  and React uses functions and TSX.
[00:42:11] or JSX, how is this even possible?  Well, large chunk of the responsibilities  of any front-end framework out there  is to keep the model
[00:42:22] in sync with the view.  And that's where Angular and React
[00:42:26] used to operate very much the same way. So my name is Minko Gachev, I'm the product  and developer relations lead for Angular at Google, and I've been also working on converting
[00:42:36] I just want to confirm you guys can actually hear the audio, right?
[00:42:41] I forget if I checked the share audio tab. Could you guys hear the audio in the video?
[00:42:46] Someone just say yes in chat.
[00:42:49] All right.
[00:42:53] Converging two frameworks at Google, Angular and an internal framework called Wizz. This allowed me to figure out what a web framework consists of and see a lot of similarities across frameworks, see how we're converging on very much the same ideas and very much sharing the same implementation over time.
[00:43:12] Now,
[00:43:13] This is funny because I was going to speed it up so that we didn't necessarily spend as much time on the video.  But this is really funny because people probably listening to me sped up.
[00:43:21] So...
[00:43:23] Yeah, anyway, let's go back to have some fun.  And go on React.
[00:43:29] In both cases, we'll create components, right? We'll be using classes and templates for Angular or functions.
[00:43:35] and JSX for React, but that's only the interface that we are interacting with.
[00:43:40] After that, the framework is going to completely forget about the syntax that we use to create our components.  It is going to build some abstract data structures or a component tree that contains some state.  And the responsibility of the framework will be to keep this state inside of the component tree in sync
[00:43:53] with the UI.
[00:43:54] This is often called as reactivity or propagation of states over time.
[00:43:59] That's where Angular and React were very much the same last year.
[00:44:02] In both cases, we have to specify that the change,  the state has changed in React.  We're going to do that with hooks.  In Angular, we have something called zone.js  that assumes that the state might have changed.  Right after, the framework is going to traverse  this component tree by default from top to bottom,  and it is going to find all the differences  and apply them to the DOM.
[00:44:21] Thank you.
[00:44:21] I'm happy he's saying this to a certain degree.  I think some react devs might, you know, be like,  there's a difference between zone JS style, dirty checking and,
[00:44:32] reacts. But
[00:44:35] Kind of no, it's kind of like how Dominic Ganaway from Svelte said that React is a virtual DOM.
[00:44:41] right? He's, or no, not React, sorry, Svelte 3 and 4 were a virtual DOM.
[00:44:47] Because like, what's the difference between,
[00:44:50] between
[00:44:52] creating a
[00:44:53] Virtual representation and then diffing it against the last one.
[00:44:57] or
[00:44:59] calling the thing instead of creating virtual representation,  just dipping against the last one in a single pass.  There is differences there, definitely.  You have to understand there are differences between these approaches.  I consider them two different approaches.
[00:45:10] But effectively...
[00:45:13] they're kind of the same top down, rerun the components, rerun the thing. Yeah, this actually reminds me of my World Beyond Components talk so far. Okay, let's continue.
[00:45:24] Let's look at a more practical example. Here we have an app component that uses two other... Sorry, side note.
[00:45:33] Oh, yeah. Actually, this is a good point. Why is it possible to change emails without a verification of the OMIM email? Well, I got an email that said that it changed, but I did not get an email that was like,
[00:45:42] enter the code to
[00:45:45] Verify.
[00:45:46] Yeah, anyways, sorry. Just a side note. Let's continue.
[00:45:50] Mm-hmm.
[00:45:51] their components, user profile and a shopping cart.  Their implementations are pretty simple.  The profile component just displays a user name,  and the shopping cart component iterates over a collection  of items from a shopping cart.  And for each one of these items, it displays the quantity.
[00:46:06] It's quantity. Under the hood, once you run your application, the framework is going to build a  componentry similar to this one here. We have the app component at the top, we have the user  profile component on the left, and we have the shopping cart component on the right.
[00:46:18] If we update the state of the cart, let's say we change the quantity of the first item to be one, both Angular and React are going to perform change detection and reconciliation, but very much the same algorithm. They're going to traverse the component tree, going to the root at first, after they're going to go to
[00:46:31] the user profile components, nothing will have changed to that point because we're not using any  of the state in these components yet. And finally, we're going to go to the shopping cart components  that contains the modified. Okay, yeah, so he's, I think he's going to do what I call the misco  example. Misco from quick was the first one who who made this into an example, but I, I
[00:46:52] we've used this in talks before.  It's kind of showing the, like, not diamond problem,  but the whole, like...
[00:47:02] Yeah.
[00:47:03] the right...
[00:47:05] the separation between the read and the write and two unrelated things updating, right?
[00:47:09] Let's keep on going. I'm going to fast forward a little bit. So instead of traversing the entire component tree, we can just traverse part of it.
[00:47:15] Here,
[00:47:16] with on push change detection strategy in Angular or memoization in React, when we update  the first item in the cart, we can just reverse the
[00:47:26] App components.
[00:47:28] and the shopping cart components without
[00:47:32] going to the user profile component,  but we're still performing some unnecessary operations.  For large applications of these menu optimizations,  they could be hard to achieve.  Additionally, well, there are menu.
[00:47:41] - Interesting, so on push is still triggering components.  I wasn't clear about this with Angular.  So on push is still component granular.  What he's saying is because the cart  is owned by the app component,
[00:47:53] Sure, he knows that he doesn't have to run
[00:47:56] the user profile component, but he has to run the cart component to pass it back through to the specific
[00:48:02] cart item iterator thing. Okay, let's continue. The framework doesn't do that automatically for  us, so we need to think about it and have a certain understanding of the runtime.
[00:48:09] Now, if you're still not convinced that Angular and React were very much the same last year, let's look at some benchmarks.
[00:48:14] the fault is a little bit small  oh I know he's going angular and react  have literally been the same  in benchmarks like a couple points  off each other for like a decade I used to  joke that they like probably watching each other's  back
[00:48:28] um you know like they're just like oh he got a little faster i need to do anything and
[00:48:32] Yeah, they're literally...
[00:48:34] like 0.1 apart here between Angular 17 and React hooks. Yeah. Like, yeah, no, this is, yeah. I like  this. He's using this as evidence. What this is more evidence of is that their list iterating  algorithm was really naive.
[00:48:51] If you look at the specifics here,
[00:48:55] React actually has slower creation code.
[00:48:58] and but and like for like create many rows and.
[00:49:04] but it has better memory usage.
[00:49:07] And Angular has
[00:49:11] slower actually swap rows it's is their worst one yeah the angular's list logic was even slower
[00:49:18] Um,
[00:49:19] And
[00:49:21] it will...
[00:49:23] Actually, yeah, sorry.  Do I have this backwards?  Actually, no, I'm wrong.  React is actually...
[00:49:28] slower on mass creation, but it has lower memory.
[00:49:31] Huh, that's interesting.
[00:49:34] Angular was faster partial updates, which I was aware of.  But basically my point is--
[00:49:40] Thank you.
[00:49:41] They actually do differ in...
[00:49:45] their approach and it does actually impact different things.  It's just the average of them always ended up being about the same.
[00:49:51] there are slight trade-offs between both of their approaches.
[00:49:58] but for some reason their average stayed the same.  I think that's actually completely coincidental  and not because they actually render the same,  but I do find it amusing for the sake of this talk.
[00:50:08] But the purpose is to mostly look at the shape of these performance benchmarks and look at patterns.  Both Angular and React are performing pretty poorly for swapping roles.
[00:50:16] and both frameworks are performing decently well for partial updates.
[00:50:19] This is with React Hooks version 18 and with Angular's legacy control flow.  Since then we changed our diffing algorithms and things look slightly different.
[00:50:29] So, for the simple example that we demonstrated here, with the small component tree which has only three components, it doesn't seem like a big deal that we have to traverse.
[00:50:36] these three components. Whether we traverse one or three, it's not really a big deal. It's going to be  pretty fast. But real-life applications, they are different. They have hundreds or thousands of components
[00:50:46] that are alive the whole time. And if we have to traverse these component trees, component by  component, in order to find the differences and reflect these differences in the view, it's going  to take a lot of time.
[00:50:57] Angular decided to improve its reactivity story. We started exploring
[00:51:03] Introducing static dependency tracking in Angular on top of the compiler that you already have. We looked at
[00:51:09] Other abstractions as well, and we decided to move forward,
[00:51:13] with signals.
[00:51:15] So we joined the signal clubs together with Ember, Solitz,
[00:51:20] Vue, Svelte, Preact, and others.  Now, React has a slightly different approach here.  We can talk about it later,  but you can see that all these frameworks are now converging  on the same reactivity primitive signals.
[00:51:30] And even though React now uses a compiler, if you look at the compiler outputs of the React compiler, and the Angular compiler things look very similar as well.  You use the same optimizations where we're tracking the static parts of the view and the dynamic parts of the view.
[00:51:45] Here's
[00:51:46] I want to see that again.
[00:51:54] Interesting. Yeah. Yes. Yes. I haven't seen Angular's output before, but it is also...
[00:52:02] of this nature.
[00:52:04] It's like spelt.
[00:52:07] Actually, Angular output looks a lot like Svelte output.  Using the bitmap,
[00:52:14] Pat symbol.  And then I'm...
[00:52:16] But I guess actually then again, these elements are creating...
[00:52:21] I think aren't actually real elements. Is it incremental now?
[00:52:25] It's funny, there's like these symbols in front that Misko was all telling me about causing him a whole bunch of havoc. He wanted to like namespace them. So they put these funny symbols in front, but they cause like a bunch of processing issues. One of his old funny angler stories.
[00:52:40] but that's just an aside.  But,
[00:52:42] is
[00:52:43] I wonder, this is probably like incremental DOM.  So yeah, in a sense, this is a lot like...
[00:52:48] like that. Okay, cool. I hadn't actually bothered to look at Angular's output before. That's interesting.  We are tracking the static parts of the view and the dynamic parts of the view.
[00:52:58] Here's how Angular uses signals.  So we have a title property here  that we're assigning to a signal, the string world.  And when we read the value of the signal  inside of a template, here we're letting the framework know  that that's the exact place where we need to track  for changes in the title property.  So when we update the title property,  the framework can go to this exact place in the view,
[00:53:17] and update the UI instead of having to traverse this entire component tree and look for changes.  Sure.
[00:53:24] So looking at our larger componentry here,  let's say we have a signal item.quantity,  and we have read it in different parts of the componentry.
[00:53:32] When we update it, we're going to go only to the affected components and update their corresponding views without having to traverse this entire data structure.
[00:53:39] Signals were very interesting for a lot of framework authors outside of Google,  but they're also very interesting for the WIS team inside of Google.
[00:53:48] The WIS framework has been historically used for different use cases compared to Angular. It is more similar to frameworks such as Astro and Quick. In fact...  And Marco. I know I can't talk about Marco 6, but I can talk about that this was why I was hired to the Marco team.
[00:54:06] back in 2020. Just to give you an idea,
[00:54:09] Again,
[00:54:11] how ahead of the times Marco was.  Not that...
[00:54:15] Anyone really should care until six comes out.  Come on, Michael, Dylan, please.
[00:54:21] But they saw...
[00:54:24] They read my articles, probably the ones talking about this convergence back in 2019.  And they're like, this is how we solve problems.
[00:54:32] Um...
[00:54:33] solve this problem on the, you know, let's say the whiz side of the spectrum. Let's continue.  Whiz introduced the concept of reasonability about 10 years ago, and later on, quick,  borrowed it. And it has been serving more...
[00:54:46] consumer applications. I saw that they have been collaborating with all  implementing part of the framework, draft performance.
[00:54:54] YouTube. Ah, boo. Sorry. Wish me luck. Grammarly has again been a lifesaver with my application.  Different frameworks. We reached out to standardization. In fact, framework authors have been trying to diverge. We're going to manifest to web developers. Well, in practice, this is going to be just gradual improvements that we're introducing to Angular over time. And in the process, we'll be seeking opportunity.
[00:55:24] API. What if they're serving very much the same purpose? In both cases we want to  inject data in our components based on the context in which they're used in.
[00:55:32] So in Angular, we do that with dependency injection. In React, we do that with context API. They seem to serve the same purpose very much. They have slightly different look, but they also share very much the same data task. And it could potentially lead to a lot of changes in these frameworks, which goes through a pull request. Like we have over 27 core read checks, such as, and probably the one that brings us the most confidence that we haven't broken anything, something called the Google internal.
[00:56:02] on dependency injection or context API.  I have a prediction that we'll be also converging  on event replay and fine-grained code loading.
[00:56:08] By fine-grained code loading, I mean, reasonability or partial hydration or the island architecture that Astro has been advocating for lately. Let me first start talking about
[00:56:17] Yeah, event replay seems obvious.  This is...
[00:56:23] This is one of those things that...
[00:56:26] Thank you.
[00:56:28] I didn't realize was like,  when Jadon came on the stream from Wiz,  he was basically saying resumability  was 90% event replay.  And I was like, oh, this actually isn't that far off  because some frameworks already have event replayed.
[00:56:39] React has event replay. That's how their selective hydration works.
[00:56:43] Solid has event replay.
[00:56:46] Um...
[00:56:47] Thank you.
[00:56:48] Quick has event replay.  That's how they trigger their resumability.
[00:56:53] And what's interesting about the event replay model is...
[00:56:58] unlike say progressive enhancement like the standard like remix pattern of submitting a form or whatever um
[00:57:04] And we actually let form controls go through.  So we're the same.  We're going to do hybrid thing.  Event replay.  Yeah.
[00:57:13] means that
[00:57:14] You don't lose clicks.
[00:57:16] before the page becomes interactive. So trying to figure out how to measure interactivity becomes  more interesting because if frameworks are
[00:57:24] you know,
[00:57:26] can be interactive before the code for the page loads. Like,
[00:57:31] like like the classic problem with uh
[00:57:34] uh,
[00:57:36] you know, showing a website that's done in a single page app was that it would be blank.  And then you see the content because it client render it.  There'd be that, you know, gap of time.  You get the blank page pretty quick, but then you'd have to like wait for the, you know,  the HTML would have a script tag on it, which then had to go load the JavaScript, parse it, execute it, then run it.
[00:57:53] And then at that point, it could show content and often have to go fetch the server again. Right.
[00:57:58] this kind of chain.  Server-side rendering meant that we can
[00:58:03] still go through that process almost on the client, maybe skip the fetching of the data at that point. But
[00:58:09] everything was rendered into the page initially. So you can
[00:58:13] see the results. But the problem is when you go to interact with it, it's just the picture. Manu from Quick Team used to make this joke that SSR was a lot like sending someone a photo of a cake.
[00:58:26] And then like hoping the person didn't try and cut into it until the actual cake arrived.
[00:58:31] Um,
[00:58:33] When you have event replay, it's interesting because
[00:58:38] Like,
[00:58:40] there might be a lag to when the JavaScript loads and it can process.  And this will be true for any framework, right?  Even things that lazy load the job or JavaScript, anything that does it lazily.  But you don't lose the interactive points.  You can start interacting without losing clicks, without necessarily doing a full page reload.
[00:59:03] So yeah, event replay is already in React, already in solid, already in quick.  Sounds like it's coming to Angular.  So I think that fine-grained code loading is an interesting one, though.
[00:59:16] How fine-grained? I mean, in a sense, fine-grained code loading is already happening with nested routers, right?
[00:59:23] to a certain degree, maybe not fine enough, but I just want to point out that like code splitting  automation, largely the
[00:59:31] I'd say reason that we all file system routes in MetaFrameworks has been something that's been  going on already for a bit.
[00:59:39] I think...
[00:59:42] It's interesting because
[00:59:44] You don't,
[00:59:45] necessarily want to delay code loading for everything, right? Even quick,
[00:59:52] preemptively loads a lot of parts of the page. They use AI to kind of determine which parts they should do that. That's part of their offering. But like,
[01:00:00] you don't want to be waiting for that code.  You want that code to already be loading by the time you interact with it.  Otherwise you're just creating these weird waterfalls where like,
[01:00:07] You can see the page, you don't lose the clicks, and then you're waiting for the code anywhere.
[01:00:11] The more key part of it, I think, is actually that
[01:00:15] if you don't have to hydrate the whole page,  then the CPU is lower.  Like, load the code, just don't run it.  Like, that's kind of...
[01:00:24] where
[01:00:25] is more important. And my gut is, and I could be wrong here, is things that are expensive from a code loading standpoint are isolatable without automation. Like,
[01:00:35] either you're going to rely on some kind of analytics data.  And I don't mean like compiler analysis.  I mean like statistical based or AI based to determine what code should be loaded.  Or you've probably...
[01:00:51] the developer is going to have to tell you, right?  And if the developer is going to tell you anyway, then...
[01:00:58] Like,
[01:01:01] We have to consider that.  I think converting an event replay  is something that's happening today.  I think fine-grained code loading is something that,
[01:01:09] People will try, and I think it'll be hard to get right for a while.
[01:01:13] In a sense, you could argue that islands or RSCs are a certain level of this code loading, very explicit to the developer.
[01:01:22] I'll buy that into the definition if that's what Minko is saying.
[01:01:26] But,
[01:01:27] There are consequences, and if you want to know what the consequences is, you should watch my most recent talk anyway.  Convergence on events replay. So how do we usually serve a web application?  The user would open their browser, and in the navigation bar, they're going to enter a URL.
[01:01:44] From there, the server is going to respond with HTML.
[01:01:47] We're going to find all the reference scripts.
[01:01:49] JavaScript and CSS, we're going to download these scripts.  Right after that, we're going to execute the JavaScript.  We're going to fetch some data from the server.  - He literally is just describing  what I was describing a moment ago.  What easier with the graphics in front of you.  - And finally, we're going to make  our application interactive.  This could take a lot of time on a slow network.  There are certain optimizations we can do.  Probably the most obvious one would be  to use server-side rendering.
[01:02:10] If we server-side render, we'll provide this markup to the users, so the browser would  already render the application, but it will still need to download JavaScript.
[01:02:20] and execute it, perform hydration, in order to make the application interactive.
[01:02:24] And there is an interactivity gap.
[01:02:26] down there. So in the meantime, between the users seeing the structure of their web app  and being able to interact with it, there might be a couple of hundreds of milliseconds.
[01:02:34] So the way we've been solving this in Google is
[01:02:36] I should have just let him talk before I talked.  I ended up just ruining this whole section of his talk.  Let's continue.  Cool search over the years is with something called Event Replay.  Here we have a mock of a very simple app.
[01:02:48] when the mock is gray.
[01:02:50] with these dashed borders, the application has not been hydrated yet.  And when it becomes dark blue, this means that it has been hydrated.  Yeah. Side note, that's how solid works. Let's continue.
[01:03:01] So we can start interacting with the application  before it has been hydrated.  And in the background, we can start recording the user events
[01:03:07] When the application gets hydrated, then we can replay the event in the order in which we have received them.  Hopefully the application is fast enough that this phase of event capturing and event replays will not last for more than
[01:03:18] a couple of hundreds of milliseconds.  And this way we'll not lose any user interactions.
[01:03:23] Yeah.
[01:03:24] This currently is achieved with a library called JS action or event dispatch. It is
[01:03:30] a library that we worked on modernizing and moving to the angular monorepo so you can find that  it is the same code that powers the event replay in google search it is you can
[01:03:39] Oh.
[01:03:42] uh twitter ads or not twitter youtube apps
[01:03:45] All right.
[01:03:46] Video play soon.  I can't even skip this one.
[01:03:50] You know what's funny?
[01:03:52] I can't even monetize my recent videos.  I should talk about that at some point.  There is another opportunity to improve performance, though.  We can shrink this time needed for downloading the JavaScript and executing it by serving just less JavaScript.  Wisk has been achieving this with resumability or with some fancy partial hydration,  where we implicitly specify which is the minimum of the whole application.  And, well, in Angular, we can't do it in the same implicit way because we're using Angular with today.  Islands in your application or hydration islands in your app.
[01:04:22] this block to be hydrated only when a particular condition is met.
[01:04:26] This is the semantics when using server-side rendering.
[01:04:29] Thank you.
[01:04:30] So this way, when we send a request from our client  to the server, we can get the markup of our application.  And ahead of time, we'll have created different  interactivity islands with these deferred blocks.
[01:04:41] Let's say we're using all interaction as a hydration trigger.  So when the user starts interacting,  let's say with the left navigation bar,  we can download the corresponding JavaScript.  - I'm interested about this.  The reason I'm interested about this
[01:04:53] is...
[01:04:57] Hmm.
[01:04:59] There is some challenges to hydrating.
[01:05:02] when the state has changed. It's one thing to collect events
[01:05:06] and replay events
[01:05:09] Thank you.
[01:05:10] on things that have already hydrated.
[01:05:14] That's how we've been doing it solid.  It's another thing that...
[01:05:17] to
[01:05:19] Um,
[01:05:21] To have the state diverge on part of the page,
[01:05:26] And then...
[01:05:28] be showing the server rendered stuff.
[01:05:30] and then have to go hydrate something when the state is no longer in sync
[01:05:35] with
[01:05:37] with what you're seeing. You know, I mean, like,
[01:05:41] Like if part of the page, this is a challenge of islands in general, but a lot of times with Astro, you can avoid this because Astro doesn't really have global state.
[01:05:52] But I'm building an Angular app.
[01:05:55] And I load some state very high up in my tree.
[01:05:59] and I change it and that state is being used
[01:06:02] in one of these
[01:06:04] lower down components that hasn't hydrated yet.
[01:06:06] how can it hydrate with the wrong state?  I just want to,  I want to see what they,  maybe Minko explains.
[01:06:14] script from the server and we can hydrate only this part of the app without downloading anything of the
[01:06:19] remaining functionality.  So we can download the minimum amount of JavaScript required  to handle this particular user interaction.
[01:06:23] And with Event Replay, we can replay the event also, so that we don't lose any clicks, let's say.  There is one more thing that we've been working on, though, and it is figuring out our reactivity graph, so that there are data dependencies.  Let's say the navigation bar updates data that is used in the top bar. We should be able to hydrate our application and update the view.
[01:06:45] So today, out of this...  Yeah, okay.  So that's the answer.
[01:06:50] on any state change you have to pull in any of the things which means that you have to be aware of the dependency graph
[01:06:58] probably from the server runtime perspective. This is similar to what Quick does. And then on interaction,
[01:07:06] you actually have to
[01:07:08] kind of pull in all the code that could be impacted by it and then hydrate it all
[01:07:14] before the interaction is applied.
[01:07:16] Okay.
[01:07:17] I'll bite, but you start seeing the challenges...
[01:07:21] here.
[01:07:25] Okay, that's interesting.  I want to see more of the solution.  Boxes, adapts.
[01:07:30] any web framework consists of, we covered only a few.  We covered reactivity with touchstone, event handling,  and a little bit of dependency injection.  There are way more to cover.
[01:07:39] And this is from
[01:07:41] Framework author's perspective.  Adios Manny recently published a table  from web developer perspective about features  that are available in each individual framework.  He shared that at Google I/O 2024 a couple of months ago,  and I modified the table a little bit to reflect my own view  for the feature set in the world.
[01:07:58] We can see that we're very much converging on the same features as well.
[01:08:01] So what does that mean for web developers? How do you even pick a framework nowadays?
[01:08:06] When picking a framework, don't overthink it.
[01:08:09] It will end up being the studies. I want to see how I want to see this edit. What does that mean?
[01:08:14] Right, because Manny gave us partial hydration because of our experimental stuff that we've been working on with the Chrome team that hasn't been officially released. Technically, Solid Start does have an islands mode under experimental, but yeah, SvelteKit does not. Server components. See, the funny thing is server components are...
[01:08:31] partial hydration
[01:08:34] Two.
[01:08:35] cement
[01:08:37] Adi of Mani was trying to show that they're all kind of
[01:08:40] that like server components, partial hydration are kind of
[01:08:44] the same thing.
[01:08:46] And if you look at it that way, a lot of frameworks have a solution for that.
[01:08:54] But I could understand. I like this.  He put half moons on forget.
[01:08:58] for fine-grained reactivity, which I
[01:09:02] this this is a political way of doing it do you see that it's not a full circle
[01:09:06] That's fine, Minko.
[01:09:10] Yeah, and I actually prefer people to think this way. Salt starts partial hydration is not officially released, so I think we should be empty here. Um.
[01:09:19] I do think partial hydration and server components is...
[01:09:23] like differentiating these is kind of like...
[01:09:28] one pile, the other, like it's not, it's not really, there's different approaches to partial  hydration, but these are partial hydration approaches.
[01:09:36] Um,
[01:09:38] Yeah, in any case. Okay.
[01:09:41] What does that mean for web developers? How do you even pick a framework nowadays? Anyway, with a different facet.
[01:09:46] But I'll be thinking,
[01:09:48] a project that is going to serve real users and is going to be used over the years. Probably the main one is stability and reliability. Really important to have also a room that you...  Yeah, yeah, okay. I got you. Yeah, and that's his final thing, right? If all the frameworks are going to be the same anyway, then you should pick the popular or the stable solution, right?
[01:10:09] that's what he's getting at.  And I think that's a good stance to take  from the Angular side of things, right?  They are very committed to,
[01:10:15] We're talking about personalities.  Angular is very committed to the enterprise group.  They're very committed to being stable, migration safe.
[01:10:24] being dependable over time, and it makes them a safe choice from the mechanical aspects of it, right?
[01:10:34] The one thing, you know,
[01:10:36] that Angular couldn't control is trends,
[01:10:39] you know, where things are heading. And
[01:10:41] They're now...
[01:10:43] For a while there, they were off on their own. They're now back on the main thread, so to speak. They're back on doing stuff that's very relevant to the future of what we're doing in the web community. So
[01:10:55] it makes Angular a very good choice and it makes sense to have this perspective of this because
[01:11:03] If there's convergence happening,
[01:11:05] It is definitely...
[01:11:10] quite possible that...
[01:11:14] Um...
[01:11:16] not everyone's going to survive this convergence, so to speak, right?
[01:11:22] Um,
[01:11:23] Thank you.
[01:11:24] Like different frameworks, if they're all doing the same thing, people are going to kind of
[01:11:28] Uh,
[01:11:31] you know, gravitate to one or another.
[01:11:36] before there's a question mark. Oh, about the, I forget.
[01:11:40] Angler has always been mainstream.  I mean...
[01:11:45] It is interesting. It is more that there's mind share and hype cycles, and there's reality of people building projects. Angular has always been a very good choice to build projects. It's just that like...
[01:11:58] There's
[01:11:59] there's like a second tier thing, the thing we see on Twitter, and that does actually have an impact on how people choose frameworks, right? I think,
[01:12:07] view
[01:12:09] is second. And I think Preact has recently passed Angular. I think I saw a tweet where someone  showed that. Actually, let's see if we can get...
[01:12:17] Was it NPM trends?
[01:12:22] Yeah.
[01:12:23] Obviously, we know...
[01:12:24] where react is react is the is the sky so to speak but i think i saw someone recently put in something that was like
[01:12:32] view
[01:12:33] versus
[01:12:35] Yeah, so what do you want?
[01:12:38] Let's do view versus angular.
[01:12:40] And let's remove React.
[01:12:44] and then let's add preact.
[01:12:50] And let's go...
[01:12:53] Two years.
[01:12:55] You don't see it somewhere. Oh, yeah. These spikes are just ruining everything. Remember that when that happened, but like something happened.
[01:13:02] Over...
[01:13:04] Is this the wrong Angular?
[01:13:08] Oh.
[01:13:10] Yeah, you're right. I completely saw your post. That is it. Thank you.
[01:13:15] Parasocial.
[01:13:18] Yes, this.
[01:13:22] Yes, completely saw this.
[01:13:25] Thank you.
[01:13:26] React, view, preact, angular, lit, svelte, stencil, solid, alpine, ember.  That's where things are sitting.  And then I think quick is...
[01:13:37] down at the would be i guess their 11th or i guess we only got the top 10. but um
[01:13:43] Yeah.
[01:13:45] Lit.
[01:13:47] And Preact are both ones that are kind of sleepers that people sometimes
[01:13:53] for Git exists, but actually have surprisingly high usage.
[01:13:57] Um,
[01:13:58] Thank you.
[01:14:00] Stencil's use of still being this high is actually...
[01:14:03] I wonder is actually interesting to me.  Densil is starting,  they were on par with felt for a while.  And then they started dropping down.
[01:14:13] Yeah, there are next ones that we...
[01:14:16] Got to close the gap on.
[01:14:19] Um
[01:14:20] as we've kind of spread off from Alpine,  I guess Ember and Alpine and us were all very close for a while.
[01:14:28] We kind of--
[01:14:29] pass through there but
[01:14:31] Anyway.
[01:14:36] Thank you.
[01:14:36] Thank you.
[01:14:38] Whereas Svelte sound here, lit.
[01:14:42] Preact.
[01:14:44] Angular, yeah, yeah.  So somewhere here that it crossed.
[01:14:50] Interesting. Yeah, Preact is quietly growing here.
[01:14:55] And then obviously view when we can't show react on this graph because it'd be off the top. But yeah, very, very interesting kind of see of download trends on frameworks.
[01:15:03] Um,
[01:15:06] Thank you for that.
[01:15:08] Very sexual.
[01:15:11] Thank you.
[01:15:12] Thank you.
[01:15:18] Yeah, no, lit gets used more than you expect. And there's like a certain contingent of people that think web components are actually viable. And lit, it was very attractive to them. They basically shoulder the hope of all web components. Stencil does too. But I think people are starting to realize like Stencil peaked.
[01:15:40] in 2023 it looks like and it was it already slowed down so
[01:15:45] Yeah.
[01:15:47] um
[01:15:48] It's tricky. I think  the more interesting thing is I think
[01:15:53] So we'll see if it, I think everybody, a lot of frameworks have slowed down.
[01:15:58] Um,
[01:16:00] somewhat. Preact hasn't.
[01:16:02] felt hasn't.
[01:16:08] Um, well,
[01:16:10] stencils going down
[01:16:12] Some of the smaller ones, it's hard to tell because they're too close to the line, but
[01:16:16] In any case,
[01:16:20] Yeah.
[01:16:24] Thank you.
[01:16:27] Yeah, that's a good point because people who build small tools will want to use a small framework.  You know, things like...
[01:16:35] and stack query dev tools are built in solid, for example.
[01:16:41] Yeah.
[01:16:44] That might not affect download numbers though.  For example, like...
[01:16:49] 10 stack query dev tools gets more downloads than solid does by like three times. So yeah.
[01:16:58] It's a fixer SSR issue.  I mean, they have a solution for SSR that is specific to their framework, like it is specific to every framework.
[01:17:06] So yeah, I think they have a SSR solution.  I don't know how good it is or like...
[01:17:10] detail, but you say fixed sounds like they had an issue. I'm not sure. They do have an approach to SSR, I believe.
[01:17:20] I haven't looked at lit on the server, I have to admit.
[01:17:23] Not for a while, not since Justin and crew came trying to sell us on using web components at eBay.
[01:17:32] Yeah.
[01:17:33] Okay. Um,
[01:17:39] Yeah, I'm gathering that.
[01:17:41] Is your response a lit? Yeah, yeah.
[01:17:43] Hi.
[01:17:44] I, yeah.
[01:17:47] No, I don't care to, no, okay.  Anyway.
[01:17:52] Yeah, Minko's talk. That's cool. Great suggestion, Sean. I'm glad to see that. And I mean,
[01:17:58] This has been happening, as I said, for quite some time.
[01:18:04] The thing is, there's still a lot of really new emergent technologies that
[01:18:09] So like,
[01:18:10] it's too early to like stamp the convergence.  Like different approaches are still looking into different stuff.  So like,
[01:18:19] Yeah, you know.
[01:18:22] hack some weird project, build Reddit clone with any framework.  I was thinking about some people wanted me to build a realer world example as a stream.
[01:18:31] We could do that probably in a couple streams.  I was thinking I could update the real world demo.  If you remember a few years ago, there was something called the real...
[01:18:41] world demo. It was like a medium...
[01:18:45] Clone, demo.
[01:18:47] See, the problem with these random suggestions is like, I'm not going to get the CSS for a Reddit clone or whatever, right? So but, but if someone has a demo app with CSS and stuff, I can steal, then I can do this and the real world demo.
[01:19:02] Uh...
[01:19:04] Yeah, it was very popular a few years ago.
[01:19:07] Um, people wrote articles, do performance things. I did, I did the original solid implementation  as like sort of my proof of concept that we're ready for 1.0. I didn't release 1.0 for over
[01:19:20] almost yeah over a year year and a half after i wrote the real world demo because i was focusing  on ssr but it was the first thing where i was like okay i've checked enough boxes that people can um
[01:19:32] create real apps. It might be interesting to port the existing solid real world demo to solidstar. That could be a stream.
[01:19:39] What's wrong with Hacker News? It's too simple. There's no right side of the story. It is a great example of read, but there's no mutation.
[01:19:47] You have navigation, you have caching, you have all the like,
[01:19:50] how to make a good static site
[01:19:53] kind of considerations. There is dynamic content coming in, but something like HN
[01:19:59] probably doesn't belong being made with a standard client side framework. It's why it makes
[01:20:06] It's why it's such a good example for showing people like how,
[01:20:11] inefficient JavaScript frameworks are compared to ones that partially hydrate or, you know, do MPA approaches, right? It's that's my demo that I show when I want to show how good Astro is, right? If you watch my recent talk, Astro just kills it. And for HN,
[01:20:26] I don't really want to do anything more than Astro.
[01:20:29] But for me, it serves as a benchmark from the perspective of if people
[01:20:35] A client framework like Solid or React can actually contend with Astro in that zone.
[01:20:44] It's interesting. Maybe, you know, DX will suffer and you'd still want it to do it. But it suggests a possibility that one solution could actually be good enough for the spectrum.
[01:20:57] Um,
[01:20:58] That's why I keep my eye on Hacker News.  But it's not like a strong point.  That's actually almost like...
[01:21:04] a complete waste of our resources of the client side framework.  It's, you know what I mean?  Like we can do so much more with reactor solid than a hacker news.  It's just like, it's like,
[01:21:14] It reminds us of
[01:21:16] how inefficient we are at the easy stuff.
[01:21:23] Trello clones are fine. I think the Remix guys are on the right page. I think we can do a lot  better in Trello than the current set of demos, you know. I think
[01:21:32] I think that's interesting.  The Trello example is actually,  we're going to talk about it today, actually.  It's one of the things that inspired...
[01:21:43] a lot of
[01:21:45] I realized that there was two problems that I was facing with, um,  um,
[01:21:50] that I need to figure an answer for, for solid 2.0's design.  And we've been talking a lot about async,  but the other side I need to talk about was fine grained projections.  And so I want to get into that today.  So we'll get there.
[01:22:06] All right, Fuzzy, I will take a look at this.
[01:22:13] What's this?
[01:22:17] Blazing fast algorithm to transform one draw and turn it to another.
[01:22:20] Okay.
[01:22:21] Is it like a morph DOM?
[01:22:28] Thank you.
[01:22:35] Okay.
[01:22:46] How does he give every, he generates the nodes?  I think what's interesting about this is  if you want to do HTML diffs across the wire, right?  So this is how you handle the server part  of the server components.  I'm hoping without a virtual DOM.  This is an area that,
[01:23:00] I knew it was possible.  I just didn't want to spend a bunch of time on.  I think if I'm understanding it.
[01:23:08] moving okay the obvious point is moving heavy which is on different spots your page is faster than a repaint
[01:23:13] Other use cases, yeah. You have to watch out about CSS layouts though. Sometimes,
[01:23:19] Moving stuff will cause like a table that has striped rows,  moving the rows that will actually cause recalculation on the stuff is  actually worse than just,
[01:23:28] changing the data on the row itself, just a side note.
[01:23:38] Today I have the reflecting table.
[01:23:48] So what are we, what is he doing here?
[01:23:58] Thank you.
[01:24:06] So he's created a very smart diff.  Okay, let's go to...
[01:24:12] to
[01:24:19] Okay, I'm not gonna worry about the algorithm, I trust him.
[01:24:22] Okay.
[01:24:24] I know some people might care, but this is
[01:24:28] Thank you.
[01:24:32] It's interesting because, I mean, this might be relevant.  He's describing the action.
[01:24:37] and then applying them for the diffing approach.  It's interesting because like we all have a Dom diffing approach that we do in
[01:24:45] our frameworks are like hidden inside.  At a certain point, you're going to have to,  like if you have a list of items and you move the list,  you're going to have to move the DOM nodes.
[01:24:53] Um...
[01:24:58] VDOM. So he is using a virtual representation. Okay.
[01:25:09] Okay. Oh, so this is just NeoMJS.
[01:25:12] I've...
[01:25:13] I've,
[01:25:14] I've seen this framework before.  This is the guy who was really big on multi-threading.  Yeah, yeah, yeah.
[01:25:20] Yeah, this is an interesting framework. I've looked at it before. Challenge was that while I could do really incredible stuff with parallelization, the overhead on normal workflows means that this is why you never see this framework in like a JS framework benchmark.
[01:25:34] Um,
[01:25:35] algorithmically it's efficient.
[01:25:37] But practically, it...
[01:25:41] *sniff*
[01:25:42] Like his, his needs, he's solving for a different problem. He's, he's trying to do work on a worker.
[01:25:48] Overall, my experience with this thus far is this approach, unless you have incredibly parallelized workflows, like this approach is generally slower for most things.
[01:26:02] but,
[01:26:04] It is interesting if it ever...
[01:26:06] wasn't.
[01:26:07] I don't know what it's going to take.
[01:26:09] Fast algorithms are not sufficient, but if ever wasn't, this would change things.  I feel like every couple of years,
[01:26:16] I look into seeing where he's at and it's possible with this latest thing that he's gotten
[01:26:21] you know, something has changed again, and it's probably worth looking at. But this is generally one of those projects that I keep my eye on, you know, occasionally and be like, okay,
[01:26:30] How's it going? Because he's got a vision, he's got a mission, and he keeps on working on it. And it keeps on getting a little better every time. But there's a certain physics to the situation. It's kind of like Wasm, why I'm a big fan of, you know, leptose and whatever. I want to, they're dealing with real walls that they can't really overcome. They can come up with smart ways around it. But it's like, it's challenging. But
[01:26:53] at some point something changes in the platform and the dam breaks loose.  You know what I mean?  So these are the kind of things that I'm –
[01:27:01] interested in.
[01:27:02] Thanks for sharing.
[01:27:05] Thank you.
[01:27:10] Thank you.
[01:27:13] LinkedIn for SSR.
[01:27:16] um it's fine but like nothing beats string concatting generally virtual dom link dom  anything like that on the server is waste
[01:27:23] um it's if you have to go that way you can but it's slow i i've been have it's faster than  some of the alternatives but there's nothing faster than just compiling your templates to
[01:27:33] putting strings together.
[01:27:35] It's just not even...
[01:27:37] It's like a 10x factor.  Yeah.
[01:27:44] All right.
[01:27:47] Syntax trigger for control for an console.js.
[01:27:53] I don't know what that means.
[01:27:55] Take a break and stream some fine grained alim ring.  Yeah, I play some games.
[01:27:59] Own it. Okay. Let's see what the spam is.
[01:28:05] Automatic versus manual context for signals. Okay, is there anything else in here? Oh, more offensive replies.
[01:28:11] How routers work in depth.
[01:28:15] How routers work in depth.
[01:28:20] Thank you.
[01:28:20] I don't know.
[01:28:25] That's interesting. I think he means client-side routers. I could...
[01:28:30] I've done streams on that a long time ago.  I have like...
[01:28:34] like when I introduced solid router,
[01:28:36] So this is a topic that if the timing is right, I could get back into it.  Me and Tanner have talked about this.  Whenever I have Tanner on, we talk routers.  So...
[01:28:45] Not today, but it's interesting.
[01:28:48] Can you please talk about manual automatic subscriptions in the context of signals?
[01:28:54] Thank you.
[01:28:54] Alpha, see, this is what I was talking about.
[01:28:57] I get shared pretty much every people always share new frameworks with me.  So it's interesting to see this. Right.  And there's a group of people who who are into
[01:29:08] Yeah, yeah, yeah, yeah. This is what I was looking for. There's a group of people who are into explicit
[01:29:17] explicit, you know,
[01:29:20] reactivity in the sense that they don't want it to be possible for auto tracking.  And the reason I went for auto tracking is,
[01:29:28] was 100% templating.
[01:29:31] right it was completely on templating side i have to admit
[01:29:34] Because, you know,
[01:29:36] It's be cumbersome somewhat.  See,
[01:29:40] "Wire here, most of the word, wire values to a signal with explicit description using . . . "  So this looks to me like a memo, right?
[01:29:52] Right.
[01:29:53] But it's not just a memo.
[01:29:55] because
[01:29:57] Okay, yeah, it looks like to me like a memo, but you see
[01:30:00] He helps on auto tracking.
[01:30:01] You pass the reactive context.
[01:30:03] in the,
[01:30:04] to the
[01:30:06] the closure and then only things that get called with the reactive context are actually subscribed to.
[01:30:13] Right.
[01:30:17] on click.
[01:30:17] Set count.
[01:30:19] So this and this is also using knockout style syntax where you're using the function with an argument.
[01:30:24] Oh, okay. This is...
[01:30:26] Okay, I have to figure out what's going on here a little bit because...
[01:30:29] When I see this, I would say that the function with an argument,
[01:30:35] is the setter.
[01:30:36] Right. So, you know, and without the argument, it's the read.
[01:30:39] But it's not...
[01:30:41] without the argument because it actually you have to call wire
[01:30:45] And this one gets an argument which is...
[01:30:48] the subscription token.
[01:30:51] So,
[01:30:52] If I understand this, this can either accept
[01:30:59] This can either accept...
[01:31:01] the subscription token
[01:31:04] from this wire or it can accept the value
[01:31:09] for the next like the next value of this
[01:31:12] I think that's confusing, but that's an aside from it.  Like you could also have...
[01:31:19] this be set and then not have that weirdness and just like,
[01:31:25] Or you could use the dollar sign and have it wrap.  You can go like dollar sign function and pass count to it.  There's other APIs that you don't hit.
[01:31:33] this with. So I'm going to put that on a like in the side
[01:31:38] to the
[01:31:39] Interestingly, Wire actually,
[01:31:42] isn't
[01:31:44] It's coming from the component. So this is not quite the same as a memo.
[01:31:50] It's an explicit way. Yeah.  Because how else do you get the dollar sign into your subscription? Right.
[01:31:56] Like,
[01:31:58] See, this short form here is wire and it's passing dollar sign into the function you pass, which is count.  So this is the short form here.
[01:32:08] Personally, I don't.
[01:32:10] I thought this was...
[01:32:12] I don't know how props work here, to be fair, because like...
[01:32:16] I guess these don't change.
[01:32:18] because they're not,
[01:32:20] being wired with a dollar sign. Personally, I found this kind of approach,
[01:32:24] basically a non-starter like
[01:32:26] when it came to templating. Like I perfectly find writing my reactivity like this, you know,  making memos and effects and doing all this and passing this explicitly. And  solids templating for a while was actually explicit, where
[01:32:38] He wasn't
[01:32:39] about tracking it was about which things were reactive or not we used to have a syntax where  you if you put like
[01:32:44] parens on the inside.
[01:32:47] that would mean crack this thing.  Or if you didn't,
[01:32:52] you know, don't track it.  So you had to be explicit about what expressions are reactive.  I'm not going to lie.  I still like that to this day.
[01:33:02] But again,
[01:33:03] Besides prettier stripping it out on me, which was pain.
[01:33:07] Um,
[01:33:09] But like besides that,
[01:33:11] Most developers, it was too much.  I could tell that being explicit about it is the same reason, like, it's really awkward to force people to use, like, pass functions in for each reactive expression if they're using, like, HTML or Hyperscript, you know, Node.jsx version.  It's these little...
[01:33:33] pieces of indirection where you're exposing the mechanics of the reactivity
[01:33:37] They really...
[01:33:39] get in the way, right?  I obviously...
[01:33:43] As I said, I like the explicitness, but on the other hand, it's like,
[01:33:47] I couldn't convince anyone to use something like this.  I don't.
[01:33:51] think. It'd be challenging. As I said, even when we had a bit of this, there's going to be
[01:33:57] framework authors and
[01:33:59] and people that often hang around in the solid discord that would love this  kind of explicit,
[01:34:05] but this is harder to
[01:34:08] buy in on a larger audience. It's actually harder in general, like even solid reactivity, you've,  we've seen criticism where it's, it's challenging, you know, Svelte takes it one step further than  solid by getting rid of the function calls.
[01:34:21] right, and using their compiler to hide it, but
[01:34:25] manually
[01:34:27] wiring this stuff.
[01:34:28] is
[01:34:30] Like, if you took this example and wrote it in React,
[01:34:38] and put it side by side with this, you'd be just like,
[01:34:42] This feels almost like when you look at Angular and RxJS  and you compare it to a React component, you're just like,
[01:34:50] what the hell is going on, right?  You could have written this in two lines  instead of doing this.  This isn't as...
[01:34:57] pronounced as that, but it's why
[01:34:59] I have challenges at least.
[01:35:00] with
[01:35:01] with
[01:35:02] explicit
[01:35:05] reactivity it's the templating it's
[01:35:07] It makes it challenging.
[01:35:11] That's just my opinion.  Obviously, as I said, there's people who are fans of this kind of approach because it's very explicit.  This probably lets them use the standard...
[01:35:22] Hyperscript transform.
[01:35:24] And in one sense, I would say I like that better than forcing people to wrap things in functions, but they are kind of wrapping things in functions, right?  Yeah.
[01:35:34] Props is a big one. I want to understand
[01:35:37] My guess is that if this is reactive, this would be a signal and you'd have to wire this with the dollar sign here.
[01:35:45] which means that, yeah, then you have the spread consideration.  Yeah, it's tricky.  I mean, you can definitely go that way.
[01:35:52] Um,
[01:35:55] But it's probably not where I'm at.
[01:36:01] Thank you.
[01:36:03] Thank you.
[01:36:05] Yeah.
[01:36:08] you
[01:36:12] Could, okay, yeah. Is it an argument for, I mean,
[01:36:16] It depends on where you want to set boundaries.  This has been the argument with the view in them.  Because they even have more control.  It's just like...
[01:36:22] Once you leave the template,
[01:36:25] you have to decide what a boundary is.  And it's felt that used to be components, right?  But we know stopping at components doesn't make a...
[01:36:33] uh composable reactive system so they they have to basically process every file
[01:36:39] Honestly, to save two parentheses, it's just not worth it.  Now, I would argue Svelte's approach is...
[01:36:47] has one other benefit. It enforces locality of reactivity
[01:36:52] explicitly, which I love.
[01:36:55] right? They don't have to work.  I always tell people about like
[01:36:59] foot guns and don't do this.  And like, Ryan, why can't I do this?  Why like people always, you know, like do silly stuff, like trying to do like two way  binding and stuff like this.
[01:37:09] I know Svelte supports two-way binding, but their syntax or signals actually is designed to prevent accidental error.
[01:37:17] two-way binding or people doing weird stuff.  Solid's already pretty good guard against that.  But generally speaking, Svelte's compiler is like, no,  like we are not allowing these kind of, you know,
[01:37:28] moving state around in a weird way, situations. I mean, we'll see how they go with their deep  store or like their deep reactivity. They could definitely make some questionable choices there. But
[01:37:41] And I don't know, Svelte 5 hasn't quite been released yet, but it's coming soon, has it?  Like, I don't know, is Svelte...
[01:37:48] five release i think i would know it's release candidate still right
[01:37:52] Thank you.
[01:37:57] Right. Okay.
[01:37:58] Yeah.
[01:37:59] Um,
[01:38:03] What I'm getting at is like,
[01:38:06] hmm
[01:38:07] And
[01:38:09] Bye.
[01:38:10] Eww.
[01:38:11] You're jumping a significant...
[01:38:14] cost when you open your whole application to the compiler.  That might be the future of frameworks where like everything is compiled.
[01:38:20] I mean, in a sense, we transpile like everything when we use
[01:38:23] you know, TypeScript or something, but it's like,
[01:38:27] It's,
[01:38:30] You're a different language at that point. And I felt okay being a different language.
[01:38:35] I'm not sure I'm okay being a different language.  If someone wants to write solid in a different language, then...
[01:38:40] People built DSLs, built stuff very similar to Svelte's Ruin API. I think Alexis has built that, what was it called?
[01:38:49] So
[01:38:51] I can't even remember now.  I did a whole stream on it at one point.
[01:38:55] Mink.
[01:38:59] And I can never remember the set of characters.  It's like this.
[01:39:06] Something like that.
[01:39:12] Whatever.
[01:39:14] Yeah, I'm not going to worry about this at the moment.
[01:39:19] Yeah, yeah, the language thing.  And I mean, power to him, right?
[01:39:25] I think this is why Svelte gets a lot of passes on these things, because they say that it's they tell you it's a language, right?  They're not like.
[01:39:33] oh, it's just JavaScript and HTML, you know?
[01:39:36] developers say that sometimes and they're completely wrong, but
[01:39:41] But Rich at least acknowledges that they're making like that it's a language.
[01:39:51] Thank you.
[01:39:54] Yeah.
[01:39:55] I'm not familiar with...
[01:40:00] are
[01:40:01] Is there something new in Remix?
[01:40:03] react for
[01:40:04] Router was built...
[01:40:07] On Ember, which is the same inspiration for SolidRouter, we all kind of use the same children pattern. I'm not familiar with their layout routing. Is that how they do parallel routes?
[01:40:16] There's.
[01:40:17] Let me see here. Let me let me just check really quick here. Let's go to solid router.
[01:40:28] I started reviewing this parallel route.
[01:40:31] Um...
[01:40:33] What's this remix proposal?
[01:40:35] No, sibling routes. Okay, so this is not the same as this layout route stuff.
[01:40:42] Yeah, I'm not I'm not quite sure what you're referring to. The core router and solid has a lot of similarities to react router just because of the same inspiration at the base. We handle our data loading like a little differently, but everybody's basically based on Ember.
[01:40:54] File system routing conventions is a whole other thing.
[01:40:58] I liked Remix version one conventions. Version two seemed novel.  I liked them at first and then I just wasn't completely sold on it.  But that's a whole different topic.
[01:41:12] I'm talking about their nested routes. Oh, and salt had nested routes before react router had nested routes.
[01:41:18] if that's what you mean.
[01:41:22] Ember had nested routes.
[01:41:26] Um,
[01:41:27] React Router actually... Sorry, I take that back.  React Router had...
[01:41:31] had nested routes in this manner, and then they kind of removed it in react router, uh, four,  and then they brought it back in react router six.
[01:41:43] Yeah.
[01:41:44] So yeah, yeah, I don't know what to tell you. I would. We have to do it a certain way. We needed nested routes because we don't re render in react.
[01:41:54] you could always get away with re-rendering stuff  because we can't from an optimization.  Almost every JavaScript framework that's not React  has had to have nested routers this whole time.  Svelte, Sapper had one, like...
[01:42:07] They all kind of work mostly the same.
[01:42:13] Thank you.
[01:42:15] All right.
[01:42:16] All right.
[01:42:19] Anyways, let's talk about the topic for today then.
[01:42:25] Get a little water. I already finished all my coconut water, unfortunately.
[01:42:32] Thank you.
[01:42:34] Do we need a compiler step in general? Yeah. I mean, TypeScript to start with. I think
[01:42:42] templating benefits from a compiler step. It's
[01:42:46] you know,
[01:42:47] there's different semantics around where
[01:42:49] you like
[01:42:51] the data coming in and the output of your template, you know, so like JSX,
[01:42:57] I think for reactivity, there's a huge ergonomic benefit. I like,
[01:43:02] It's hard because stuff like...
[01:43:06] tag template literals or hyper script stuff
[01:43:09] forces you to write all the wrappers in yourself, which is a little bit,
[01:43:14] awkward. I think templating...
[01:43:17] doesn't, wants to be a different language.  That's a place where like a hundred percent,  I think we want it to be a different language.  Like JavaScript is not a templating language.
[01:43:28] um
[01:43:29] But...
[01:43:31] I mean, you can make do without it to a degree, but then like, it's not, it's not, it's not in compiler.  It's like bundler is very, very, very important, especially in terms of tree shaking and like optimizations around in that zone.
[01:43:44] I...
[01:43:45] like,
[01:43:46] .
[01:43:47] Yeah, like I don't see no build at viable...
[01:43:50] for anything...
[01:43:52] beyond the trivialist examples, but like,
[01:43:55] Yeah, I don't know.  Depends what you mean by compiler.  Everything's compiler.  Like, is ESLint a compiler?  I don't know.
[01:44:04] All right.
[01:44:05] All right.
[01:44:08] Sweet. Um,
[01:44:10] Yeah, so thank you everyone for the suggestions. That was very helpful.
[01:44:14] Um,
[01:44:16] So I...
[01:44:23] Yeah, I mean, I was going to move on to the next thing.  But if you have a question, shoot right now and I'll answer it.
[01:44:35] you
[01:44:37] Thank you.
[01:44:38] Thank you.
[01:44:40] just getting myself set up because
[01:44:43] I have...
[01:44:45] four of these documents I've written over the last couple of weeks and
[01:44:50] I want to dig into a few of these here.
[01:44:58] Thank you.
[01:44:59] So,
[01:45:02] I guess my question for the audience, so to speak, is do you guys want to finish the async topic first or do you want to talk about...
[01:45:09] or do you want to talk about
[01:45:12] derivations and
[01:45:14] memos and whatnot, because basically in identifying the short...
[01:45:21] In identifying the shortcomings of...
[01:45:26] solid today and where we want to go. We all, everyone highlighted that they wanted lazy signals, right? They wanted a way
[01:45:33] This was something, and every signals framework that has picked up signals in the last three years,
[01:45:39] uses lazy signals.
[01:45:43] Thank you.
[01:45:45] Thank you.
[01:45:46] Okay, sweet. Yeah, Async Drive. Yeah, let's, we will definitely talk about that. Yeah.
[01:45:54] Um, but, uh,
[01:45:57] where I was saying it's like,
[01:45:59] There's this one thing that we had in Solid 1.0 that was kind of escape patch, which is this idea of create computed.
[01:46:09] And it, um,
[01:46:12] it kind of breaks the rules of lazy reactivity because it's,
[01:46:16] It was basically a crate effect that ran before effects that was designed to update other signals, which means that you were effectively starting the calculations over again. It broke the chain of reactivity, which is a pain for stuff like async and whatnot, and very awkward in general.
[01:46:37] And I've spent a lot of time trying to figure out
[01:46:40] how to replace that primitive
[01:46:42] And I had identified that there's three use cases, which I'm going to get to in a minute. And
[01:46:48] And that's that's kind of been my motivation behind a lot of the stuff I've been looking at it.  Right. We know there's the async problem and then we have.
[01:46:55] how to replace create computed. Okay, let's answer this question before I move on. It's felt like  solid. Every effect is a child of another effect or root effect that takes care of cleaning up,  but what's the risk of not having a root effect? Is memory leaking?
[01:47:07] But is...
[01:47:09] is leaking memory, but it isn't.  Okay, well, yeah, I mean, signals and effects are...
[01:47:17] are two way, right? Like they, they, the dependencies go both ways.
[01:47:23] Like,
[01:47:24] With a memo or a drive value, you have a listener.  So in theory, if no one's listening, you know you can free it up.
[01:47:31] signals don't
[01:47:34] aren't,
[01:47:36] Generally, you have to make a choice.  Are you going to auto-release...
[01:47:40] like there's no computation there's nothing to release are you going to auto release a signal  if no one's listening to it at the moment
[01:47:46] You're probably not.
[01:47:48] And
[01:47:49] Because...
[01:47:51] if someone listens to it in the future,  you need to know who listens to it.  Like there's this,  there's this sort of,
[01:47:56] awkwardness here that the
[01:47:58] When you go through the cycle of updating a signal, it...
[01:48:02] the effects that as they rerun,  they clean up what signals they've subscribed to,  but they also have to tell the signals that the effects  aren't in their graph anymore.  So it works both ways.  So if you let go of the whole thing at once,
[01:48:17] You're fine. Top level...
[01:48:19] effects and signals are perfectly fine. The reason we have this warning in solid is because people do funny stuff like create an effect in event handler.
[01:48:27] like in some random context that life is shorter than the global signal.
[01:48:35] Right.
[01:48:36] And if,
[01:48:38] This used to be a problem in Knockout.  Maybe people don't do this stuff anymore,  but it was like very awkward to find these memory leaks  because people would like do something async  and then like create reactivity
[01:48:48] And it would work, except it would never get released.  You know, they'd go, like, await something, and then Google, like, create effect, like,
[01:48:54] programmatically.
[01:48:57] And
[01:48:58] Mm.
[01:48:59] This is, as I said, I wanted to warn people or be like, hey, don't do this where you're just like creating these react this reactivity in a short lived scope.  And the problem is I can't tell from.
[01:49:10] JavaScript side, that it is a short-lived scope. I don't actually know this. So we just warn on it  all the time. So I set up the main route as a way of just being able to dispose of everything,  essentially. It also has the benefit in solid because we're completely synchronous, that it
[01:49:28] is the end of the queue for the effects. So from that perspective, freight route gives us a mechanism  to be synchronous. Otherwise you'd have to wait to, to the next micro task. So it serves both  purposes. Um, but like, yes, if you top level, make some effects and make some signals and they  last a lifetime of your app, you don't care. It's just that people do stupid stuff.
[01:49:51] So I made, it's kind of like react has a warning that they got rid of recently that used to  piss people off.
[01:49:58] I can't remember which one it was, but it's of that nature.
[01:50:02] It's not the key warning.
[01:50:04] The key warning is important.  It was like a different warning React used to give.  I can't remember it off the top of my head.  But they used to be like, hey, you probably don't want to do this.  For top of effects and solid, it's the same kind of idea.
[01:50:20] Thank you.
[01:50:22] Thank you.
[01:50:25] Yes, yes, yes, yes, yes.
[01:50:28] Yeah.
[01:50:29] All right.
[01:50:33] Am I not supposed to be?
[01:50:36] Is something happening?
[01:50:38] The way you said this, Dev, makes me concerned.
[01:50:42] Thank you.
[01:50:42] Bye.
[01:50:47] - Yeah, I always had this question because at the end of the day, even the root leaking in the end. Yeah, exactly. Yeah.
[01:50:52] It's just...
[01:50:53] I have to consider some of my biases and where to set stuff.  I use reactive frameworks, like signal style frameworks, and I don't know.
[01:51:01] for like 15 years. I've seen every misused behavior. So when I brought them over in solid, I was like, okay,
[01:51:10] I don't want people doing the really stupid stuff.
[01:51:13] Um, that's why solid is stricter in some places than people think is reasonable.  It's just like, there's, there are a few foot guns that are just,
[01:51:22] horrendously bad.  But it's always hard
[01:51:26] Thank you.
[01:51:29] Yeah, it's always hard to...
[01:51:34] Um...
[01:51:38] Yeah.
[01:51:39] It's hard to find a balance because boundaries change because over time, our understanding of how things should work shift slightly.  So something that we are really strict on in one case in the future, maybe enough has changed that we shouldn't be so strict on all of it, but only a part of it.  But yeah, I've definitely made some assumptions on strictness there.  And I don't know if they're right because it leads people to confusion like you just had.  But on the other hand.
[01:52:04] God, it is terrible when people create reactive stuff in random contexts and a memory leaks like crazy.
[01:52:10] It's like the worst.  If someone creates reactive stuff in event handlers,  like literally every time you do the event,  you're just exponentially like,
[01:52:17] compounding on the amount of work of when that signal changes.
[01:52:23] Thank you.
[01:52:25] Yeah, I didn't post the cover till this morning. So yeah, I, it was one of those situations where I was just like,
[01:52:33] Didn't have a cover, but I, yeah.  Oh, yeah, right.
[01:52:38] Don't forget to like and subscribe on YouTube.
[01:52:40] Yes. Thank you.
[01:52:46] Thank you.
[01:52:52] you
[01:52:56] Anyways.
[01:52:58] Let's let's let's let's move on.
[01:53:02] So yeah, derive stuff and async stuff.
[01:53:07] What do I feel like hitting first?
[01:53:13] *sniff*
[01:53:15] Hmm...
[01:53:18] Looking at the time and trying to make a decision, an educated decision on the time, which content we should go for.  Because in one sense, I think the async stuff.
[01:53:28] could be faster.
[01:53:30] but then if we don't have time to cover the drive stuff i'm going to be very disappointed so
[01:53:34] It's tricky.
[01:53:39] Let me look here.
[01:53:42] This at least was written a lot better than my last couple articles.  I'm just going to share this one.  Let's finish up the async topic while we can, and then we'll move on.
[01:53:51] Um,
[01:53:55] Okay.
[01:53:56] Run once suspense. What does that title mean? Okay.
[01:54:02] I've been, the last little while when we've been talking about this topic of suspense,
[01:54:07] A lot of I've been feeling people I've been focused on at it.  Sorry, from like an academic standpoint, like, should we care about consistency?  Should we not care about consistency?
[01:54:16] you know, as a default. And I've been hardlining on either side from a perspective of a philosophical stance of like how things work. But the thing was, it doesn't make anyone happy.
[01:54:26] The consistency stuff causes people to have to buy in to certain things that they're not
[01:54:33] That's too far from their current model.  And the inconsistent stuff,  this doesn't help me do what I want to accomplish.  So it's like,
[01:54:40] It felt like there was two very distinct paths.  So I came up with, right after the stream,  I sat down, or that night I was thinking,  and then the next day I just typed it all out,  of a proposal which I hope would address  both sides of the argument.
[01:54:57] I did present this in the solid Discord.
[01:54:59] The guys who didn't like suspense said they still wouldn't be using suspense.  So, but I'm hoping that's not...
[01:55:04] everyone.
[01:55:09] I'm sorry.
[01:55:11] Yeah, I know.
[01:55:14] yeah right yeah okay
[01:55:18] So what's this concept?
[01:55:23] What if...
[01:55:25] The biggest challenge I think with people's suspense is on one hand,
[01:55:29] it just handles things nicely.  But then they do a bunch of async stuff on their page,  you know, fine-grained updates and all this.  And suddenly their stuff's getting yanked out of them  and it's going to fall back where they don't expect it.  Because everything below suspense triggers suspense.  And then...
[01:55:43] you get into this kind of mess.  And the last time that I talked, we talked all about this latest API  as a way of like breaking out of it and being selective.
[01:55:53] And then so I was like, OK, what if people didn't have to worry about latest?
[01:56:00] What if we basically only did everything the first time?
[01:56:06] And that's sort of where the thinking behind this model goes.  Okay.  Right.
[01:56:12] So let me kind of summarize.  Well, a lot of ideas I've been processing  seem pretty powerful, complication, blah, blah, blah.  I have a fairly new radical idea from an academic platform,  but possibly the right trade-off in the practical sense.  So I'm going to explore.  Goal, provide a colorist, non-nullable ASIC model.  Yes, you guys all know I want colorless,
[01:56:27] async.
[01:56:28] Restore confidence and suspense by leaving more control in the developer's hand. That sounds good.
[01:56:32] Have a model that is consistent across SSR and client updates.
[01:56:36] Yes, that is also my goal. That's why inconsistent doesn't work because we need it to work for SSR.
[01:56:41] Sub-goals.
[01:56:42] Have a default behavior still reasonable for people unaware of these features?
[01:56:46] That seems important.
[01:56:47] Decently important.  Remove the need for latest style APIs and challenges  that come from introducing back nullable ASIC gap.  The problem is latest...
[01:56:55] gets people into nullable async again just because they're trying to avoid
[01:57:01] Suspense triggering again.
[01:57:03] That's my idea.  So what's the concept?
[01:57:05] Instead of seeking consistency in all things, we take the default of hold on creation, tear on update.  Hopefully this means something to you because I talked about when you have async, you have three options, right?  You have...
[01:57:16] Keep it in the past or hold.  You have...
[01:57:19] hide it, like use a placeholder.
[01:57:22] or you have, um,
[01:57:28] uh,
[01:57:29] tearing, which is basically like show what you have and showing consistent state.
[01:57:34] or you have like optimistic update which is kind of like a better version of placeholder
[01:57:39] Um...
[01:57:41] So yeah, three or four versions, depending on how you count it. But the idea here is change the behavior.
[01:57:47] on initial versus update to fit what makes sense for you.
[01:57:52] Because...
[01:57:53] Most frameworks generally...
[01:57:56] kind of force you into
[01:57:58] like,
[01:57:59] a certain mode and it's not comfortable.
[01:58:02] Okay.
[01:58:04] I see this hot. Is it related to what I'm saying here?
[01:58:09] I'll explain further. Let's continue here.
[01:58:13] While in opposition to take as someone seeking consistency, some conversations with Dan Abramoff a year back or so were pretty illuminating to me, but I didn't actually actualize it till now. He told me while transitions were good, he expected most developers to opt into tearing to escape suspense. This is interesting because async tearing is the default for frameworks without suspense.
[01:58:30] But now...
[01:58:31] But now with suspense, you need to jump through hoops, like use deferred value in React or latest in solid to accomplish the same thing you get in normal behavior.
[01:58:41] I don't think implicit transactions can actually work.
[01:58:45] which is what I was talking about in my last stream two weeks ago.  Like you need a way of saying that these changes belong together.  You need a way of opting out and, you know,
[01:58:57] Yeah.
[01:58:57] It's challenging that like,
[01:59:00] it's it's it's it's
[01:59:02] I'm going to try and...
[01:59:05] and put this out out here. We have to consider the whole impetus behind transition API is one that  once you have loaded content, you rarely want to go back to fallback, pretty much never.  And yet it is what happens naturally the second you update data as soon as you add suspense.
[01:59:20] When you add suspense, you're always going back to fallback unless you add a transition as well.
[01:59:24] It's simple experience for the naive API, but in real apps, it's pretty clear that people pretty much never want stuff being ripped out from under them on an update.
[01:59:32] Right. It's easy to just be like, oh, look, I got a loading indicator, but like,
[01:59:36] this is why people don't pick up suspense in my opinion,  right?  Cause they're not going to go guard all their rights into transitions.  Like they have too many people.
[01:59:44] Rights can happen all over the place, right?
[01:59:47] A small but important development
[01:59:50] was a later change I believe Ricky made to suspense which was new suspense boundaries always went to  fall back in a transition while existing ones participate in the transition it was a very clever approach to
[02:00:00] Recreation from update as developers can control behavior simply by how they structured the codes, like where they put the suspense bound.
[02:00:06] We implement this in solid 12, right?
[02:00:08] So basically, if you...
[02:00:11] switch to a new page, and suspense is on that new page.
[02:00:14] And we'll fall back.
[02:00:15] But if the suspense is above where you're switching,  like,
[02:00:19] above the select statement, you know, where you're switching the pages, then it will hold, right?
[02:00:24] with the transition.
[02:00:26] The final inspiration of this was a comment from chat on last stream where someone wrote post.latest or post.
[02:00:34] And basically suggested that's what they wanted to use all the time.
[02:00:37] I'm not sure that Poster realized the impact  this would have on my thinking, to be fair,  because they didn't have the parentheses,  but I've read it as such.  But innately, this is what most developers  would think they'd want most of the time.  It's tearing when a value...
[02:00:51] has been set while holding if it isn't well it's hard to have a full context of reason behind  these sort of decisions i admit i haven't explored this as primary models so let's do it yeah so
[02:01:00] it for so just to kind of follow yes last stream as i said
[02:01:06] a comment. This is why I find value in streaming this stuff. As I talk it out, see, interact with you guys in the chat. It actually gives me
[02:01:14] a lot of inspiration in terms of, you know, finding solutions for these problems, maybe in the most unexpected place.  So, yes, the silly comment you can go find in the last stream basically produced got me to produce this document.
[02:01:28] Right.
[02:01:29] So,
[02:01:32] High level of this prozo is top level holding explicit transactions and run one suspense boundaries.
[02:01:37] I'm going to explain what that means.
[02:01:39] Okay.
[02:01:40] but I,
[02:01:42] One thing that became clear to me is that with colors async, we can't do predictable pairing.
[02:01:47] Thank you.
[02:01:50] and top-level holding aligns with SSR. What I mean by that is
[02:01:55] I showed this last stream, but if you have...
[02:01:59] two separate values, like say account,
[02:02:04] and some async user data being loaded.
[02:02:07] If you're doing this throw style reactivity,
[02:02:10] If those two things...
[02:02:12] converge so like they're in the same effect or in the same piece being rendered
[02:02:16] then you,
[02:02:19] essentially,
[02:02:21] you might show count independently somewhere and then show it somewhere else
[02:02:28] being the wrong value.
[02:02:29] Because you'll see two different versions of count because one gets held up in the async.  This is without transitions.  This is if you opt into tearing.
[02:02:37] essentially, you'll actually tear the same value in multiple locations, depending on whether it's an asynchronous or not.
[02:02:44] Right. Where in most systems today,
[02:02:47] when you tear,
[02:02:49] you're not you'll just see, you know, the same new value.
[02:02:53] in both places for the thing not connected to async and then the async will take a moment to come in.
[02:02:58] So unpredictable tearing,
[02:03:01] with the color-stacing models bad.
[02:03:03] It's one of the downsides. So top level holding, like if you don't put suspense, you don't do anything makes a lot of sense.
[02:03:10] Right?
[02:03:11] because it will push everyone to use suspense,  which is such a...
[02:03:16] pushy way of approaching it. But I'm,
[02:03:20] It won't tie their hands because by default, suspense will only go to fall back on creation.  This is what I'm proposing.
[02:03:27] We need...
[02:03:27] That for SSR.
[02:03:29] but we don't need it afterwards. SSR only cares about initial rendering. That's why this concept could work.
[02:03:34] Because I'm basically proposing that
[02:03:37] all resource reads or async reads are post.latest or post. Internally, this is what it's doing. It will
[02:03:44] when there is no latest value, it's never been resolved, it's going to suspend.
[02:03:48] on the actual resource read but afterwards it always gets the latest value
[02:03:52] That's sort of what the proposal here is.
[02:03:57] what the impact of it is, um,
[02:04:01] I'm going to get into more.
[02:04:06] Thank you.
[02:04:07] Yeah, OK, from here, explicit transactions are still valuable for big changes like routing. Most people won't use them directly or have to worry about suspense boundary triggering. So basically, most people doing their day to day work, the thought here is they're just going to continue tearing as if suspense didn't exist. They're just going to like do normal stuff. Suspense is only going to be the initial placeholder when the page loads.
[02:04:25] And then they'll just like do stuff as normal.  They won't think about suspense after initial page load.  That's that's the thinking here.
[02:04:33] So in absence of suspense, any thrown promises will hold all rendering.
[02:04:38] Okay, that's pretty harsh.
[02:04:40] But that's the premise I'm going with here.  So, you know,
[02:04:45] initial, if you do something async during SSR, you're not going to stream the page until
[02:04:51] you know, that thing updates, you know.
[02:04:55] If you're on the client, we're not going to render anything until all the async data is loaded.  If you don't put any suspense in.
[02:05:02] Okay, let's move on.  Under normal operations, only async values  that have never been resolved throw.  Once they have been resolved, they read from the latest  with one exception, if they are read under  a newly created suspense boundary.
[02:05:12] This exception I'll talk about later.  It's not a necessity, but I think it's important for keeping behavior properly.  Also, async reads will register with transactions unless they are under a newly created suspense boundary.  This is the same as we are today.
[02:05:24] Okay, hopefully you guys are still with me.  Understand this is a dense topic.
[02:05:29] Okay.
[02:05:30] So,
[02:05:31] But I have some real examples, two modes on initial render.  Let's bring back my example.
[02:05:36] here.
[02:05:37] it's the only difference from today is you don't go back to fall back.
[02:05:44] There's two differences. We hold
[02:05:45] top level if there's no suspense.
[02:05:48] and you
[02:05:48] choose to use these primitives.
[02:05:51] And the other difference is we don't go back to fall back on an update.  I'm going to explain right here. Right.
[02:05:56] We'll start with initial render.  Initial render, create async, get some post by post ID.  Now, by default, this would show nothing
[02:06:03] until the post is loaded, right?  There's no suspense boundary or nothing.  It literally, like if this is a client rendered,  it would just basically be blank,  and then it would show the finished data.
[02:06:12] We'd hold all effects on the async is done.  It would not be expected, but this removes inconsistency.  We can't control tearing under initial conditions.  As before, adding suspense would allow us to show the nav immediately and then wait to show the body.  So you just put suspense here and then you'll see the nav and then this will load it.
[02:06:25] Right? Okay. What about tearing? I'm proposing you can't
[02:06:30] Last time when I did the article, I showed that there are three modes, right?  You could do for each initial and update.  But here I'm saying that you can't.
[02:06:37] tear very easily on initial.
[02:06:41] And that's because the async premise.
[02:06:43] It doesn't really work with SSR tearing because then the framework doesn't know what it has to wait for.
[02:06:48] Um...
[02:06:49] And,
[02:06:51] you would probably just be using Taryn to show loading states anyways, and we have suspense for that.
[02:06:55] More so it leaves open for people to experience undefined values.
[02:07:00] if you can render part of the ui before the data it depends on is present you can need extra null  checks and stuff like
[02:07:06] The nice benefit of this is like,
[02:07:08] people can't like sneak into a event handler that uses post
[02:07:13] so to speak, it's less likely.
[02:07:16] What if you really want to tear on initial render?  Well, use creator effect on mount instead.  In a sense, you're pulling it outside of the initial render.  This is just like hydration rules on SSR, right?
[02:07:26] If you really want to tear,
[02:07:28] use an effect to fetch the data and don't bother...
[02:07:33] doing this is essentially what I'm saying.  Then it will just happen client side.  It'll just happen after render.
[02:07:45] Thank you.
[02:07:48] Yes, yes. Lazy technically would be this as well. Yeah.
[02:07:56] Yeah, I mean, this is why I put this out there.
[02:07:59] This proposal, yeah, is interesting because it...
[02:08:04] it does push people into suspense.
[02:08:07] That's the good point about lazy because technically speaking, yes, lazy would hold as well.
[02:08:16] Yeah.
[02:08:17] Well, I'm getting at is if you did this, though, it's very clear that you're saying I only wanted to fetch on the client, right?
[02:08:25] Right.
[02:08:26] like,
[02:08:28] This is basically saying I do not want...  Because a server has no way of knowing and...
[02:08:36] Yeah, like it's basically mirroring the server semantics.
[02:08:40] or the isomorphic semantics on the component code.
[02:08:43] I will say the holding the world thing is probably the most controversial thing about this.
[02:08:48] It pushes people to good patterns, but I can understand people being lazy components. A good example. It might be possible.
[02:08:56] that
[02:08:57] we could have lazy...
[02:09:00] have an option not to do this just because of the migration story.
[02:09:05] But let's continue on.
[02:09:07] here. We'll worry about the exception cases afterwards. Now the proposal is a  tear on update by default because existing resources that have resolved once
[02:09:15] that have once resolved from latest.  So starter code here was probably as you'd expect, right?  So now you've already rendered the whole page.  When props ID changes,
[02:09:25] the changes to the NAV will happen immediately.
[02:09:28] And then the post will come in afterwards.  So you're going to see...
[02:09:32] that tearing. Similarly, having Spencer doesn't change that behavior.
[02:09:36] So now,
[02:09:38] you know,
[02:09:39] Yes, loading indicator here, but in the future,
[02:09:42] it tears.
[02:09:44] Essentially, if you don't do anything, it does not trigger suspense again.  It does not go fall back again.  That's the biggest difference about this proposal.  I don't know if this is good.  It's just I wanted to explore what this...
[02:09:55] felt like.
[02:09:56] And if people would get on board with it.
[02:09:59] Because both async resource and suspense have resolved before they won't trigger suspense and get tearing.  Now you might want to show a loading indicator while it's tearing.  We could have the nav draw a spinner by passing it through, you know, an is loading helper, basically.  Interestingly, because we hold on creation top level, this would never appear initially and only after the fact.  So if you wanted to, you know, the nav could have a little spinner on it, right?  And basically my proposal is,
[02:10:25] is saying that there's a loading helper kind of,
[02:10:29] It's kind of like dot loading, but the difference is this could act, you could put a whole expression in it, you can go like is loading posts or user. And then if either of them loading, you get a true back, essentially, it's it's it's asking if this whole reactive expression is loading.
[02:10:45] Now you might be like there's duplication here but what this is pushing you towards right off the bat is the difference
[02:10:51] between initial fallback
[02:10:54] and future loading state. It tears,
[02:10:57] But it's something Benton actually said on last stream where he was talking about, what if I want to tear and show a loading indicator?
[02:11:02] I think a lot of times that's what people end up actually doing for smaller changes.
[02:11:07] Right.
[02:11:08] This means that you don't need a transition or something to do loading state.  You can just like go, okay, is this loading?
[02:11:16] ask the question and then indicate here.
[02:11:20] Because you have different loading affordances usually between initial load
[02:11:25] an update if your intention is not
[02:11:28] to...
[02:11:30] Um,
[02:11:32] unload the whole page, right? No one, no one like
[02:11:36] I don't know how often I mean, I'll ask chat right now, how often when you're building UI,
[02:11:41] do
[02:11:42] you have
[02:11:44] Do you like unmount everything into a loading spinner?
[02:11:47] when you do an update.
[02:11:49] versus just like do a localized update on the page after initial load.
[02:12:01] Hmm.
[02:12:03] Yeah, I should have looked at that. I said that it wouldn't show up. I...
[02:12:08] Yes, in this case with the suspense in,
[02:12:11] I was saying that it wouldn't show up, but you're right with the suspense and it should, I should update this. I was talking top level if it was this right here, it probably would show that loading indicator. We could talk about that behavior.
[02:12:23] But yes, yes, I actually write, I think this would show the loading indicator. Yeah, the nav loading.
[02:12:30] I never ended up like, yeah.
[02:12:34] No, yeah, what I'm trying to...  Never amount I can think of.  Yeah, yeah, like what I'm trying to say is like...
[02:12:40] No one does that.
[02:12:43] It's interesting, though, because when you build UIs and you don't take placeholders into consideration, you have loading indicators all over the place.  But I built social media apps.  Generally speaking...
[02:12:54] you don't want to have
[02:12:55] like every little thing loading like 15 million spinners everywhere it's nicer in certain cases to just like
[02:13:04] group them in on loading, but then afterwards, yes, you will have individual spinners and  individual loading indicators. So the thinking behind this is that like,
[02:13:14] If you already...
[02:13:15] People already have two affordances for loading.
[02:13:18] So suspense is just placeholder.  Like maybe we should rename it to placeholder component.  And then you can handle loading yourself.
[02:13:29] it depends where the suspense boundary is.
[02:13:33] Everything async above the suspense boundary,  read above, is held.
[02:13:39] And then
[02:13:40] Once you're in a suspense boundary, well, then if the async's resolved above, then you can stream out that.
[02:13:46] That's basically what I'm suggesting.  It's where the suspense boundary is.
[02:13:49] Um,
[02:13:52] Right. Like we still have the defer blocking on the resource level.  If we, if you want to, you know, have that finer level of control,  but like the default is if you don't put a suspense boundary in,
[02:14:03] The whole page.
[02:14:05] will load from the server
[02:14:07] like render async. It won't stream at all. Basically, you'll just like send the final thing.  And then once it's on the client, it'll tear because it's already been rendered once. Right. Anyway.
[02:14:19] Okay.
[02:14:20] I like because it's not overloaded, yeah.
[02:14:27] I wish it knows nothing.  Well, that's what I'm saying.  The loading indicator knows nothing about suspense.
[02:14:33] uh,
[02:14:35] Right. But you're saying you just don't want suspense at all.
[02:14:38] if I'm understanding.
[02:14:44] Thank you.
[02:14:47] Yeah, I mean, suspense has always been an inversion control mechanism, right?
[02:14:51] Someone introduces the async data.
[02:14:54] Someone makes a decision where the suspense boundary is.
[02:14:58] If you introduce, this is one of, I think, the saving points of these kind of things is, generally speaking, if you're introducing the async data,
[02:15:04] Um,
[02:15:05] you are responsible for introducing the suspense boundary.
[02:15:08] The colorless means that the further downstream components don't have to worry about whether  stuff's async or not.
[02:15:15] because whoever introduced create async should be thinking about suspense.
[02:15:20] That's the thinking.  I don't know.  People might think that doesn't hold up, but that's the logic behind this.
[02:15:31] Right.
[02:15:33] It might be weird to have two different loading performances, but one is a placeholder and the other is a loading indicator.  In a sense, suspense probably won't make sense.  Yeah, I already mentioned that.  If you really want a loading indicator to be a placeholder, you could nest a show, right?  You could nest a show.
[02:15:45] you could,
[02:15:45] do this like
[02:15:47] Suspense, fallback loading, show loading.  You can always force it back into this  if you really wanted to.  This is a really silly example,  but it's showing how...
[02:15:59] Like, I'm just hypothetically saying you could make it go back to placeholder if you really wanted to.
[02:16:07] But basically I'm saying in the same way, it's really hard to do tearing on initial render. It's really hard to do placeholder on it's the hardest mode is to do placeholder on update. That's the thing here.
[02:16:20] There are exceptions, as I talked about. The last mode is holding here, which can be handled via transactions. In this case, the component stays the same, right? If if.
[02:16:28] We're obviously, but if prod updates, maybe server wraps update.  Yeah.  So I create a transaction here and I'm,
[02:16:36] you know, what am I doing here?
[02:16:38] through quiz action, just show API.
[02:16:41] Yeah, in a transaction case, it'll hold...
[02:16:45] And then, yeah, we can probably use like the...
[02:16:51] is pending or whatever from the transaction if we want to my god is transactions will happen
[02:16:59] in places that know like router which means that like
[02:17:03] these are different than the localized loading indicators that you'd be using in your place.  Like this is a bad example because I'm using it a nav. A nav would probably always use the  transaction instead of asking if post was loading, the nav would be above and would
[02:17:17] generally use the transaction state to do its loading.  But smaller things local to you where you're doing littler things,  you'll have more control over your loading indicators.
[02:17:29] Um,
[02:17:30] Yeah.
[02:17:31] Amen.
[02:17:33] Thank you.
[02:17:36] Thanks.
[02:17:38] can suspense be rude and stabless  leave you to know well what I'm saying
[02:17:42] Sorry, which example specifically?
[02:17:45] If you remove suspense, then...
[02:17:49] we have to wait for all the async initially.
[02:17:53] Right? Like we...
[02:17:56] like tearing is inconsistent which is the reason why i'm pushing towards hold right um
[02:18:05] The one with suspense and show. Yeah, okay.
[02:18:08] Yeah, let me, sorry, look at the one with suspense to show. Yeah, if you know if you remove suspense here,
[02:18:14] then...
[02:18:15] Um,
[02:18:17] is loading I don't think triggers suspense right so
[02:18:21] Yeah, what would happen if we did this then?
[02:18:26] Yeah, I mean, yes.
[02:18:28] Uh...
[02:18:30] Yes, this would probably...
[02:18:34] this would probably work.
[02:18:36] Yes, this would work.
[02:18:38] I guess this... Yeah, it could tear  like this. It wouldn't work for SSR  because what would happen if you removed the suspense  is it would...
[02:18:46] Um,
[02:18:50] Yeah, actually, this is your bailout.
[02:18:52] Yeah.
[02:18:54] For SSR, it doesn't work because the server doesn't know it's waiting for it.  And it'll just render nav blank and then get completely screwed up on hydration.
[02:19:02] Um,
[02:19:06] Actually, yeah, like I...
[02:19:10] I think.  But yes, this would...
[02:19:15] For client-side render, this would give you tearing.
[02:19:21] Yeah.
[02:19:23] Yeah, this is how...  Yeah, sorry.  Thanks, Deb.  This is actually brilliant.  This is how you opt out of...  I should add this.  Yeah, I think this could be the way you opt out of...
[02:19:35] Global holding.
[02:19:41] No, this is how you opt out.  Is loading doesn't trigger suspense.
[02:19:47] Yes. Yeah. Yeah. Yeah. I got to update this. This is, this is actually good. This means
[02:19:53] that
[02:19:54] people could...
[02:19:56] Avoid
[02:19:58] Suspense.
[02:19:59] They have two options to avoid suspense,  that they really don't want to use it.
[02:20:04] Either they do nothing and their app
[02:20:07] locks up on that initial render a little bit.
[02:20:10] Or they guard it and say, like, don't show this thing.
[02:20:16] And without suspense, that would...
[02:20:20] Not hold. Yeah, this gives you... Yeah, so yeah, sorry, I said that the wrong way. There's two ways to opt out of global holding.
[02:20:28] Use suspense.
[02:20:30] or use a show component in Guard with loading.
[02:20:32] Both of those...
[02:20:34] um
[02:20:35] as long as you don't do a read...
[02:20:38] you won't trigger the top-level behavior.
[02:20:45] Thank you.
[02:20:46] Thank you.
[02:20:48] The main reason, because I could argue that instead of holding, it just errors, right? But then we wouldn't have the same SSR semantics. So my leaning is towards having holding. But yes, I'm not going to have the same SSR semantics.
[02:21:03] Actually, this is huge for, I think,
[02:21:07] Brendan's condition here.
[02:21:09] Because he can use loading guards to prevent...
[02:21:15] suspense.  Um,
[02:21:17] in general, needing suspense in general.
[02:21:22] Thank you.
[02:21:26] because I'm yeah that this is actually important okay thanks for that realization let's continue
[02:21:35] Okay.
[02:21:36] So let's look at a...
[02:21:42] Thank you.
[02:21:43] Yeah, I don't know what the... To be fair, I was just saying in general, I don't know what he means...
[02:21:49] buy here. I guess initial only is  what I'm proposing right now. Initial  and added is
[02:21:56] or no, initial loading only is...
[02:21:58] basically literally saying that
[02:22:01] the suspense can only trigger because you're going to see there's an exception here in a second. Um,
[02:22:08] Only trigger once. Initial and add is what I'm proposing here.
[02:22:11] always is our current behavior and never is...
[02:22:17] I mean,
[02:22:18] I think he's hoping to like...
[02:22:22] it's a trick to turn off suspense below it,  I think is what he's suggesting here.  Like,
[02:22:27] basically say like use a suspense boundary because we only go to the nearest one as a way of  cancelling all suspense below that point like it's a way of opting out of it
[02:22:35] Thank you.
[02:22:40] So, but before we get into modes, because I hate modes, like if we can avoid them, I'm
[02:22:47] I'm going to...
[02:22:49] I'm going to talk about like our simple grounding case.
[02:22:52] The takeaway should be that the happy path is more or less the original code we wrote with suspense plus a loading indicator. It won't interfere with normal operation going to fallbacks unexpectedly. It can participate in transactions without requiring your code to change. It sets you up with a pattern that works universally for SSR and the async is non-nullable. Beautiful. It pushes you into basically two of the three modes for each phase. Yeah. See, the show...
[02:23:15] realization that you guys just made me have is actually brilliant because
[02:23:20] Yes.
[02:23:22] you can't have an undefined value
[02:23:26] You can guard against that, right? Like,
[02:23:29] This still holds up in that there's no way to basically...
[02:23:34] ever have an undefined, which is what I wanted to get to.
[02:23:39] Yeah, no. Okay. So basically summarize creation, hold by default, placeholder with suspense. Update, tear by default, hold with transaction.
[02:23:48] That's basically the model.  It's what I've just realized though,  from what you guys expected,  or what you guys suggested is it is possible that,
[02:23:59] Yeah, it's not even told.  It's also possible to basically do placeholder on creation with a show component, but it won't work properly with SSR.  But it is technically...
[02:24:11] another way of doing it.
[02:24:14] Okay.
[02:24:17] But there are creation update boundaries so clear.  So the most part I'm thinking is okay.  So I made an example here.
[02:24:22] where we have a nav that has a tab and it handles the set, like pictures of an anchor, bunch of anchors.  So like whenever you click it, it will call set tab and select a tab shown here.  Our suspense foundry is above our routes.  So we have three routes, ABC.  Okay.
[02:24:42] Now I've taken the liberty of adding suspense boundary rule to the switch. I'm going to assume that these components might be lazy and without a suspense boundary we wouldn't
[02:24:50] show nav or anything until we went and grabbed the component code.
[02:24:54] Okay.
[02:24:55] Yeah, I see lazy for people who really want to avoid suspense for some reason I see lazy being.
[02:25:01] Awkward.
[02:25:02] But let's just...
[02:25:05] Let's continue here for a minute.  "Without suspense boundary, as we switch tabs,  "we would freeze our app while navigating.  "It would not update anything in display  "into the lazy code loaded and rendered.
[02:25:14] Well, it might technically...
[02:25:16] Well, you might think technically this is an update.
[02:25:19] The lazy component is a new async primitive that hasn't resolved before.  Like,
[02:25:24] The way Lazy works is...
[02:25:26] the first time you render it,
[02:25:30] it suspends and then afterwards it has the code.
[02:25:33] So like whenever you first go to a page that's lazy, it plays in suspense, but it's basically already a suspense or latest.
[02:25:41] native
[02:25:44] capability right because you only need to spend the first time with lazy otherwise you already have the code
[02:25:48] If we navigate back to the same page, seg time, it won't go to fall back.
[02:25:52] over the lazy component.
[02:25:54] But the first time we hit it, unless we preloaded, maybe on hover, it will.  So what I'm suggesting here is because it is a new resource being created,
[02:26:03] it doesn't have an initial value, so it will trigger the fallback.
[02:26:06] the first time you navigate to any page. But
[02:26:09] The subsequent times it will not trigger the fallback, right? So,
[02:26:14] Technically, the suspense boundary ran more than once, but it's because we hit resources
[02:26:22] that for the first time that have never been resolved. That's the only time we suspend.
[02:26:26] Okay, so the title might not be quite right, but you get where I'm going here.
[02:26:30] So suspense does what you expect.  You see the place over when you navigate.  If you forgot suspense, you won't see a placeholder.
[02:26:36] but you've invented a glorified MPA. It's a bad joke.
[02:26:40] Click the link, then wait while we can't do anything, and the current page
[02:26:43] you know, until the current page loads.
[02:26:48] Thank you.
[02:26:49] Yeah.
[02:26:51] And this applies to new CreateAsync primitives you might find
[02:26:54] in these components or any other page. Since those will be new async permatives, if you read directly under, they will trigger the same suspense around your navigation. But unlike lazy, because they're created every time you go to the page,
[02:27:06] they would trigger fallback like you expect on new navigation.  So what I'm saying is if A, B, and C fetch their own data  and they actually put the create async inside,
[02:27:15] navigating will go to fallback on every single thing, right? So when you're on a page, and you've  already loaded your data, and you're updating it, you're not going to go to fallback. But when you  go to a new page that loads its own data, it will trigger suspense.
[02:27:32] Right.
[02:27:35] Yeah.
[02:27:36] So,
[02:27:39] The more concrete example is,
[02:27:41] Um,
[02:27:45] Yeah. Yeah. When I say once you're on the page,  those AC prints would never trigger suspense again. Opting.
[02:27:51] data won't do it.  That means you retain full control within your page.  This triggering fallback also includes  updating search or query parameters.  So I imagine most routers would opt into transactions  as a holding semantics or preferred over tearing, right?  But I'm saying like the default behavior  is like if you just change one,
[02:28:06] query parameter, you're still on the same page.
[02:28:10] then it's going to only update the one thing.  It's not going to go back to fallback.
[02:28:15] Right. Obviously,
[02:28:17] Thank you.
[02:28:18] routers are very transactional, like page switches. So I think you should use a transaction there. But for like,
[02:28:25] general purpose stuff, it's fine.  Since the suspense boundary is above the switch,  it already exists at the time of the navigation,  so wrapping the tab switch
[02:28:31] to be a transaction would mean that it could hold without blocking when it
[02:28:35] without when it does its updates.
[02:28:37] And by blocking, I mean like without locking, I shouldn't say blocking, locking.  It holds the page, but it's still, the reactivity is still running.
[02:28:45] but your changes locally still tear. Okay. That's all I'm saying.
[02:28:50] Okay, so what about a more advanced routing scenario? What about nested suspense? So I'm going to show two pieces of data.
[02:28:58] And then I'm going to nest suspense.
[02:29:01] Thank you.
[02:29:02] Right.
[02:29:04] I could read all the beta reads  and Nessus suspense here if the
[02:29:07] if the component wasn't lazy or already loaded,
[02:29:10] I
[02:29:11] or had already loaded its part out
[02:29:13] outside of the Spence.
[02:29:15] it will render immediately. What I'm saying is this will not, if we put data inside here,  it will not trigger the outer suspense boundary. So you'll never see that fall back again. But I  purposely put it outside right here because I want to show the difference between data,
[02:29:27] That's,
[02:29:28] triggers the parent suspense boundary,
[02:29:30] or triggers the...
[02:29:33] The nested one.
[02:29:35] What happens here is if data one completes before data two,
[02:29:41] then
[02:29:42] The parent fallback...
[02:29:45] is removed and you just see this fallback
[02:29:48] Until later.  So I'm just showing where suspense placement can control the level of where this stuff happens.  This is this works exactly the same as it does today.
[02:29:56] Right?
[02:29:59] Um,
[02:30:00] Okay.
[02:30:01] So nothing new there.
[02:30:02] Second scenario is what if create async lives in context that exists above the router?
[02:30:08] then it's not a new async primitive.
[02:30:11] So what I'd argue in this case is if you actually hoisted your create async up higher and then injected it,
[02:30:18] Going to the next page.
[02:30:22] existing suspense boundary,
[02:30:24] existing data,
[02:30:26] Guess what? We don't suspend.
[02:30:28] Right?
[02:30:32] What I say, following basic rules, we assume that you read the data of previous value while it's loading, even if through navigating you triggered a new update.  The suspense and the create async are already existing.  So you will probably navigate to the page immediately and see the old data flicker before the new data comes in.
[02:30:44] Personally, I don't think this is a great experience.
[02:30:47] Now, if that update is downstream from a transaction, there's no problem. So if this happens because of the router, you're never going to it's all going to hold anyway. So it's not a big deal.
[02:30:56] But,
[02:30:58] If...
[02:30:58] What I argued is I think that
[02:31:01] existing data with a new suspense boundary,
[02:31:04] should still suspend.
[02:31:07] The fallback.
[02:31:08] Because if,
[02:31:09] you don't want that flicker effect. If you bother putting a new suspense boundary, regardless of if  this async data is new or not, I think if it notices that this is loading,
[02:31:20] it should actually suspend in this case because
[02:31:25] you're kind of saying like, hey, I'm going to a new page and I'm loading.  It'd be really weird if you saw it loading page A and then have it show with like some data.  And then let's say you had a second piece of data.
[02:31:40] you
[02:31:41] in here too that was finished and then have this data now flicker when this one updates.  That would be really weird. You want them all to kind of come in at the same time.
[02:31:50] So this is why I said that one exception earlier where I said that,
[02:31:54] It's probably fine.
[02:31:56] that new suspense boundaries
[02:31:58] always suspend when they detect that their data is loading, even if the resource isn't new.
[02:32:04] It's a bit of an exception to the rules, but the assumption is that any new response expects that it reads from be consolidated before it shows anything. It would be weird to have it show then update a moment later when it knows there it will update.
[02:32:15] Okay, that's
[02:32:18] Basically, the idea behind this, there are some questions that I asked, like, would it be weird to be looking at a transaction and a localized loading state? I think actually, after I wrote this in practice, I don't think that actually will happen, probably.
[02:32:33] pretty often, but what is cool about this is there's no latest.
[02:32:36] Um,
[02:32:38] like latest is implied.
[02:32:40] So like that whole how do I opt into tearing is actually not a question anymore.  It's like literally.
[02:32:49] Wait.
[02:32:50] I think the more, other than the top level holding, which is,
[02:32:56] is challenging um see that's the argued error but other than the top level holding which is there for a reason
[02:33:04] This works.
[02:33:05] naturally for people who just go, oh, I got something interesting. They've thrown a suspense  on the page. They probably won't have to think about suspense very much. So in that sense,  I think it actually accomplishes
[02:33:15] its goals because it keeps it colorless and non-nullable.  There's never an undefined value.  Restore, you have this kind of control  because of the automatic tearing.  You don't have to worry about suspense  pulling stuff out on you.  It's only if you go and add new async data fetching  and don't add a suspense boundary.  Basically your mindset should be like,  I'm adding new data fetching,
[02:33:34] where should I put my suspense boundary? That's, that's,
[02:33:37] That's the mindset.
[02:33:39] And then it's consistent.  So I feel...
[02:33:44] the only gotchas have the default behavior still reasonable for people unaware of these features.
[02:33:49] And,
[02:33:50] The answer to that is yes, because the default, if you're not aware of create async or suspense and solid, how are you going to fetch data?
[02:33:58] I mean, I can ask chat right this, but I think we already know the answer.
[02:34:01] How do we fetch data?
[02:34:03] I think it looks a lot like this.  People are going to write create effect to fetch data,  and they're not going to have any problems.
[02:34:10] So,
[02:34:12] the
[02:34:13] Basically, the only person or people subset that this puts out are people using solid today.
[02:34:21] client side only that
[02:34:25] use our
[02:34:27] a resource API because it's convenient.
[02:34:30] And don't use suspense.
[02:34:33] Those people could have an API wrapper that looks like create resource, like built and just not use suspense.  Like we can basically wrap, create signal, create effect, call it.
[02:34:44] my create resource.
[02:34:45] And the migration for them will be pretty painless.  So there are paths for everyone.
[02:34:53] The real question here, I guess, ultimately is, do we believe that show once is
[02:34:58] and tear by default so that we get rid of this whole latest create deferred value concept
[02:35:03] is worthwhile.
[02:35:07] Yes, lazy is still an issue.
[02:35:11] It is...
[02:35:14] Yes, lazy, lazy...
[02:35:16] I think that's the argument for why lazy.  You could just be like...
[02:35:19] Suspend, no.
[02:35:21] or something like just like false having an option.
[02:35:29] Thank you.
[02:35:33] Yeah, mostly.  I showed this in my last stream.  I literally...
[02:35:37] switch something from a memo to create async and the downstream code
[02:35:41] didn't have to change. I was playing with Solid's new reactivity system, like the prototype of it in a playground.
[02:35:49] Yeah.
[02:35:51] To be fair, we still need create async because it
[02:35:55] scheduling wise it has important behavior because memos are lazy and create async to prevent the diamond problem has to be
[02:36:01] somewhat eager, like it has to trigger even if no one's reading from it, because you can have  async chains where you have async that depends on async that depends on async. Now, don't do this  usually because of waterfalls. Okay, it can be parallelized even like a situation where you're like,
[02:36:18] you're reading from, you're doing a computation,  and it's read from two different async values.  This is perfectly, perfectly fine example.  So you have a situation where you're like,  create async, create async one and two.  I had an example here where I showed data one, data two.
[02:36:32] Right? Data 1, data 2.  And then you have something in here that's using data 1,
[02:36:37] and data too, right?
[02:36:40] Thank you.
[02:36:41] And the problem is...
[02:36:43] If
[02:36:45] async wasn't eager it would hit the theta one
[02:36:48] Read it.
[02:36:49] lazily trigger the fetch
[02:36:52] Throw.
[02:36:53] And then when data two got read,
[02:36:57] it would go, oh, now I need to fetch this, throw.
[02:37:00] and you cause a waterfall.
[02:37:02] So it is...
[02:37:03] Very important that create async.
[02:37:05] is eager so that
[02:37:07] When you create these,
[02:37:09] The fetching starts now.
[02:37:11] Right?
[02:37:13] And when...
[02:37:15] Yeah, yeah. Basically, it's, yeah, this is just one of those kind of considerations. We don't want to fetch on read, we want to fetch on creation and on update.
[02:37:30] immediately not based on reads so create async can't be lazy.
[02:37:35] But that's why it's not just all like memo that returns a promise.  It has specific...
[02:37:41] There's a reason it's a separate primitive, but once you have the chain of reactivity, it doesn't matter.
[02:37:46] Thank you.
[02:37:49] Thank you.
[02:37:53] Thank you.
[02:37:56] Thank you.
[02:37:57] There are cases where you want to switch between latest and non-latest.
[02:38:00] be able to dynamically.
[02:38:03] I would be interested.  My suspicion here...
[02:38:07] is...
[02:38:11] My suspicion here is that
[02:38:15] Yeah.
[02:38:17] Thank you.
[02:38:18] The places where...
[02:38:20] you
[02:38:22] want.
[02:38:24] non latest like
[02:38:26] basically,
[02:38:28] So funny because the naming is backwards, but the places it means last latest means last in the case of paces where you want to explicitly.
[02:38:35] Suspend.
[02:38:37] you can use is loading to handle those cases or you'd be using transactions.  Like I'm, I'm, I'm pretty sure in almost, yeah, like, I,
[02:38:49] I think defaulting, unless people really want to fall back to the suspense fallback,
[02:38:58] After the fact,
[02:39:00] Thank you.
[02:39:00] which can be done other ways.
[02:39:04] I don't think that's actually true.
[02:39:06] That's my gut.
[02:39:08] But I mean, I'd like to see an example of otherwise.
[02:39:12] -
[02:39:14] because I think the biggest takeaway that I've seen through all this is people  most of the time actually just want latest.  And I didn't recognize that until,  as I said,
[02:39:23] It got...
[02:39:24] like four different things kind of smacked me across the face, so to speak.
[02:39:32] Thanks. Yeah, I'm doing pretty good.
[02:39:34] Okay.
[02:39:36] No, Solid will have lazy memos is the plan.  Create async.  We'll have special primitives that are eager.
[02:39:41] But Memo specifically is lazy.
[02:39:47] That's the like...
[02:39:48] I was just pointing out that there's things, the things that are eager,
[02:39:52] are create async,
[02:39:56] And then by eager, I mean things that get scheduled.
[02:39:59] are create async,
[02:40:01] and the front half of effects.
[02:40:05] everything else is is basically lazy which i said is probably just
[02:40:11] memos, really.
[02:40:15] yeah none of the material in suspense is particularly easy um
[02:40:21] I wrote an article that I...
[02:40:25] I
[02:40:26] This is not introductory from like beginner standpoint of how to use suspense, but it's introductory on from the sense of.
[02:40:35] Why?
[02:40:37] why JavaScript frameworks care.
[02:40:45] Thank you.
[02:40:48] Yeah, yeah. I mean, optimistic update is fine. What's beautiful about optimistic updates, suspense plays into transaction or optimistic updates play into transactions. The thing with optimistic updates is.
[02:40:59] they give you a tool that you can show stuff like,
[02:41:03] Um,
[02:41:06] But it doesn't change the fact that
[02:41:10] while you're showing stuff like
[02:41:13] things could be in potentially inconsistent states.
[02:41:16] Um,
[02:41:17] So like,
[02:41:20] Yeah, see, optimistic updates are one reason why you don't want to, you don't want to go back to fallback, right? Because you're showing something and you want to like show the optimistic thing. So generally speaking, like optimistic updates and solid start using like actions or I guess the router technically.
[02:41:37] they wrap the whole thing in the transaction.  So you don't have to worry about this.  What it will do is it'll show the stuff.  And then while all the async stuff happening in flight,  it holds it's called.  So it actually shows the updates in the,
[02:41:50] in front of you and
[02:41:52] And the future path that it's going to take when it's resolved everything is not presented to you. It's kind of on a concurrent, like a separate branch. And then when the async stuff is done, we've replaced the optimistic stuff with the actual stuff.
[02:42:06] So, yeah.
[02:42:07] There is a dance here. Transactions are the key to optimistic updates, essentially,  or transitions or whatever you want to call them. So these play together. I showed this on a stream,  or not stream, I showed this on a talk I did at JS Nation last year, where
[02:42:26] once I had transactions in suspense,
[02:42:29] I was able to
[02:42:30] Write...
[02:42:32] the optimistic update code, something similar to Remix style in about eight lines of code. Like it was trivial. And I, this was one of those things I talked about lamented before that Remix spent so much time trying to like,
[02:42:44] build all these primitives and pieces to get React to play ball when React's core was building the pieces that made it basically trivial.
[02:42:53] So like,
[02:42:56] Yeah, they work well together.
[02:43:02] What's this one?
[02:43:04] This is one of my previous talks.
[02:43:08] Yes, thank you.
[02:43:10] yeah i'm not gonna play that right now but thanks dev that's that's exactly the talk  i'm talking about why all the suspense
[02:43:18] Let me post that so YouTube chat gets it as well.
[02:43:24] Thank you.
[02:43:27] I have it on my CSN real page. It loads via resource and the editor preview uses latest. The preview has inline editors, so you want to avoid suspenseful walks or smoother.
[02:43:37] Yeah, but
[02:43:38] What I'm...
[02:43:39] What I'm getting at though is,
[02:43:42] What do you do when...
[02:43:48] Thank you.
[02:43:49] Yeah, I think the editor part will actually work exactly as you'd expect it to. It's that in the CMS real page side, you are...
[02:43:59] I guess, unloading stuff more often.
[02:44:03] Like you're using the suspense loading indicator because like
[02:44:07] The editor preview, I assume...
[02:44:09] uses latest except initially essentially i i think our latest in solid actually works the way i  describe it
[02:44:16] Like it actually, if it's, it suspends when it hasn't loaded at the latest before.  And then.
[02:44:22] in, um,
[02:44:25] in it's, it's the, yeah, it's the UI in your,
[02:44:30] CMS, right? Which I mean, I'm not one to judge, but I'd question.
[02:44:36] Yeah.
[02:44:38] Um,
[02:44:39] I'd be interested in seeing it to understand it, I guess, a little bit better.
[02:44:46] This is a talk that makes sense, Cliff, and yeah, along with Seltz's React Comptalk.
[02:44:53] Transactions are a mess, and I'll talk about them in the future as we implement them in Solid 2.0.
[02:44:59] Not ready to go there just yet, but let's...
[02:45:03] Let's continue here.
[02:45:06] Anyway, yeah, I think...
[02:45:09] I think this is interesting, at least.
[02:45:12] The difference between this and what we have today is actually fairly subtle.
[02:45:18] but it's something it's nuanced enough that I think it's something worth talking about. Like,
[02:45:23] the nice alignment here is that,
[02:45:29] it removes conceptually the need for latest altogether and,
[02:45:33] Which lines really nice with this colorless non-commodel.
[02:45:36] nullable thing because we don't have to introduce nulls back in.
[02:45:39] Right.
[02:45:41] Um,
[02:45:44] It's
[02:45:45] It's also does.
[02:45:47] I don't know if it would do what most people would expect because they'd be used to React pulling to placeholder, but it also would avoid the really unexpected stuff from happening.
[02:45:57] right? If routers and stuff have transactions built in, like I'm suggesting, then most everyday  devs aren't going to worry about the big stuff. And then they'll just work in their local zone and  be happy, right? Essentially is what I'm thinking here. Like big page changes,  use transaction transitions. You load some
[02:46:15] data on the page,  you see suspense boundary,  you do updates,  you don't have to worry about like,  like,
[02:46:20] that's at least my thinking.  Maybe that's oversimplified thinking.
[02:46:23] But it's, it's,
[02:46:26] It is very attractive.
[02:46:29] because it makes it seem...
[02:46:32] a lot simpler there's less concepts to talk about or explain there's less
[02:46:36] like,
[02:46:37] there is the challenge is the inherent behavior but the question is is that behavior explainable and i think
[02:46:45] I think...
[02:46:46] It is...
[02:46:48] I think...
[02:46:51] I think it's explainable from the point that we can have a few key tenants and put it out there.  I think the implications of that explanation,
[02:46:58] will take some.
[02:47:01] But...
[02:47:02] having the specific, like it's still not, there's not like a whole bunch of rules. It's actually only three rules, which,
[02:47:11] And it doesn't introduce like, we don't need latest or create deferred value. Like, so it's like,
[02:47:16] Thank you.
[02:47:18] you
[02:47:21] Yeah, I don't know.  Like you can explain this in a way where you can go like these are placeholders and
[02:47:26] You don't have to explain what tearing is to people because that's what they're used to.
[02:47:30] And then you go...
[02:47:32] If you...
[02:47:34] don't want stuff to update until all the async's done, use a transaction. So you can basically explain stuff in terms of placeholders, transactions, normal.
[02:47:41] instead of introducing a whole bunch of other concepts. So it's like,
[02:47:45] it's attractive from that standpoint, whether it holds up, you know, like,
[02:47:49] uh,
[02:47:50] kitty wings concern here could be very much very real so i'm not sure but
[02:47:56] There's something attractive about this, I'll say.
[02:48:05] Thank you.
[02:48:05] Thank you.
[02:48:06] Thank you.
[02:48:07] Thank you.
[02:48:12] Yes, dot state was a mistake.  And dot error was a mistake, too.  Everyone screws this up.  They put it in a switch statement, and then they go,  why isn't this suspending and all this?
[02:48:25] It's...
[02:48:27] Thank you.
[02:48:29] I don't mind that...
[02:48:32] people
[02:48:34] Hmm.
[02:48:34] build APIs like this, but it's the wrong base API.
[02:48:39] we should push people towards using suspense boundaries and error boundaries where appropriate.
[02:48:44] It's very awkward to
[02:48:46] to like
[02:48:47] People don't understand the importance of the read, so to speak.
[02:48:50] latest at least or removing latest at least hides that effect people can just kind of treat it like  post and just be like kind of done with it but
[02:49:00] dot state,
[02:49:02] Everyone wanted it for TypeScript. It is the biggest mistake I made.
[02:49:05] Um...
[02:49:06] It is just like...
[02:49:09] I have to basically apologize now to everyone about how create resource makes no sense to them.  And I blame dot state for that.
[02:49:16] Like people saw a tan stack query and they're like, yes, but
[02:49:21] Like, I,
[02:49:22] It's useful for a certain...
[02:49:25] way but it's like from the framework standpoint i gave people extra tools that mislead them so i feel
[02:49:31] I feel bad about that.  I feel who gets suspension once in a year.  Yeah, doubtful.
[02:49:36] Maybe...
[02:49:37] The opt-out thing might make sense, but I need to...
[02:49:41] We've been using suspense now for five years and
[02:49:44] I guess people are just avoiding it, right?  So I guess if we push them, I guess we'll see.
[02:49:55] Thank you.
[02:49:56] Thank you.
[02:49:58] Thank you.
[02:49:59] I mean, when I say halting the world, that's what I mean.  Every render effect reading data that isn't available would just render nothing.  But it's worse than that.
[02:50:07] because you can
[02:50:09] get...
[02:50:10] Okay.
[02:50:12] You're saying that tearing initially...
[02:50:15] See, the difference is I can tear smarter after the warp fact with latest, but you're saying tearing initially doesn't really matter.
[02:50:23] Yeah, I mean, I'm not...
[02:50:25] Fair. We could not hold the world and just have the unpredictable tearing, right? Because
[02:50:32] Thank you.
[02:50:44] Yeah. You know what?
[02:50:46] Fair, because
[02:50:49] They show nothing initially, so it's not actually...
[02:50:52] a problem, so to speak. Yeah, no, this is fair. It's fair. Because I was thinking about in terms of updates,
[02:51:00] having two versions account is really awkward, but we have no way of doing that because our tearing,
[02:51:05] after with latest will always get us the same version of count so
[02:51:10] Okay.
[02:51:11] This is why we talk on stream.  This is fair.  We can...
[02:51:15] It's also easier for me not to globally hold because it's the only case.  The only downside of this is inconsistency between SSR and hydration.
[02:51:25] Thank you.
[02:51:26] But if the server holds...
[02:51:30] then all the data will be present.
[02:51:32] So hydration won't be a problem.
[02:51:35] And if...
[02:51:38] The client doesn't hold.  We don't care.  Yeah.  You know what?
[02:51:42] Okay.
[02:51:43] Yeah, I like it.
[02:51:47] I like it. I like it.
[02:51:51] Yeah, there you go, Brendan.
[02:51:54] Thank you.
[02:51:55] Lazy can work this way.
[02:51:59] I just need it not to err.
[02:52:02] Yeah, my hunch is I can't say fully until we implement it, but my hunch is that we can choose not to hold.
[02:52:12] Because initially,
[02:52:15] tearing is weird anyways it's just gaps we won't see inconsistent data because it just won't be there so
[02:52:23] It's just like,
[02:52:25] Yeah, instead of having one...
[02:52:28] big empty placeholder. We have a bunch of big empty placeholders.
[02:52:32] Okay.
[02:52:33] Maybe this is what we need.
[02:52:38] If we do this,
[02:52:41] I need to think about this more, but if we do this, I think then Lazy goes back.
[02:52:46] Yeah, maybe this, yeah.  Sorry, I'm just like thinking out loud.  I think this is probably the right trade-off.
[02:52:53] There's all these temptations from an academic standpoint.
[02:52:57] So to speak to hold, I think people, there are foot guns that can happen with a split rendering like this.
[02:53:02] Um,
[02:53:03] But,
[02:53:07] My answer to all of those people would be like, use suspense.
[02:53:12] Or if you're someone like Brendan, who knows what he's doing and just like,
[02:53:16] Just do it better.  So I think...
[02:53:19] I think that's okay. Yeah.
[02:53:23] Thank you.
[02:53:31] I mean, you can design your APIs as you see fit.  These are...
[02:53:36] both sides...
[02:53:38] You choose your loading indicator and whether you do optimistic updates.  They're both, these are not like opposite options.  They're like part of the same thing.
[02:53:49] I'm actually...
[02:53:51] Like if you really want to show a loading indicator that like acts as a placeholder, you still can.
[02:54:00] Yeah, it's called the error boundary.
[02:54:03] Okay.
[02:54:05] Thank you.
[02:54:06] I don't know. I'll think about it.
[02:54:10] It will be moved.  I mean, have I...
[02:54:13] showed you guys this. Let me open HackMD.
[02:54:16] I mean, some of this is very old, but I...
[02:54:19] I have a...
[02:54:21] document solid 2.0.
[02:54:25] Um...
[02:54:28] strict mode on track, signals,
[02:54:32] Thank you.
[02:54:32] Okay.
[02:54:34] Stores.
[02:54:37] Resources remove resource state. Yeah.
[02:54:40] Yeah, I'm switching to removals.
[02:54:44] Basically, yeah, yeah, yeah. So,
[02:54:49] Stuff that's removed,
[02:54:51] Batch is, this is still an open conversation, but,
[02:54:54] Cray computed stuff that will be removed. We'll have like a V1 legacy repo for solid where we have
[02:55:01] ported versions of those primitives that will mostly work.
[02:55:06] So create resource will move to that repo.
[02:55:09] And you'll continue to be able to use it, but it will use create async under the hood.
[02:55:14] But yes, deprecate is the right term.  We won't, we'll move it to a different location where people can continue to use it.
[02:55:23] But the create async is the direction that we're going.  There's a couple of things that are missing from create async.
[02:55:31] Um,
[02:55:32] like latest loading indicator,
[02:55:35] Like there's a couple things that we're missing, but in the current version, like if you use the router, you're like, how do I do this?
[02:55:43] 2.0 will solve the rest of that problem.  I just didn't want to reintroduce APIs that I might not actually bring into 2.0.
[02:56:02] Well, okay.  Let's talk about adding something to Sorello.  What is this mode?  It changed the paradigm for everything.  Children inside show.  I promise now must add a defensive web parent following.  Well, what...
[02:56:12] only if they are fetching more data.  If they use create effect to fetch more data,  then they don't.  If,
[02:56:18] they use create async.
[02:56:20] Danny.
[02:56:21] Yes, you are responsible for adding...
[02:56:24] Suspense boundary.  But you add the create async, you add the suspense boundary.  I don't see...
[02:56:31] a particular problem with that.  Do you know what I mean?  Like,
[02:56:35] if they don't add something async,
[02:56:38] they don't add the suspense.  I guess the problem is...
[02:56:43] Lazy.
[02:56:44] Is is probably what you're going to say, because I'm also suggesting that if you add lazy, you have to add the suspense boundary.
[02:56:51] you
[02:56:53] Thank you.
[02:56:58] Thank you.
[02:57:01] Thank you.
[02:57:03] Okay, and the other thing you're talking about is projections.
[02:57:07] Right?
[02:57:07] Usually relevant, but sometimes not below if you want to render some inside the dispense wrappers while loading.
[02:57:17] like I'm gathering you mean like rejection because you,
[02:57:23] Oh yeah, that's an interesting case.  So you're saying like,
[02:57:26] have actual content onion in. So like have suspense
[02:57:32] fallback that renders content inside it that's live that when the suspense boundary removes
[02:57:42] that content is still there. That's interesting.
[02:57:46] Thank you.
[02:57:47] Thank you.
[02:58:00] That's interesting. Okay.
[02:58:01] I'm just trying to think of it from a layout standpoint.
[02:58:09] So you have to opt into the global holding with top level expense.  I'm actually...
[02:58:16] Yeah, yeah. I'm actually, after that conversation, I'm from a couple, I think we can probably get rid of the constant global holding.
[02:58:27] I mean,
[02:58:29] The problem is it's misleading.
[02:58:33] Like, and it...
[02:58:35] Yeah, I mean,
[02:58:37] It's...
[02:58:38] It's not hard to...
[02:58:40] make a rapper...
[02:58:42] that
[02:58:43] does the behavior it's it's more complicated it's hard to extend there's a lot of benefits  to create async in the sense that it it's more basic which lets it makes it more extensible
[02:58:53] or create resources hard to actually make extensible. It's just designed
[02:58:58] It's a good final product. It's like why everyone likes React Query.
[02:59:01] but it's not a good base primitive.
[02:59:08] Okay.
[02:59:13] Yeah, I'm catching up now.
[02:59:21] Yeah, I mean, at a certain point, like, I think the problem with a lot of the opposition here is like,
[02:59:32] you
[02:59:33] What, like...
[02:59:36] it
[02:59:38] the router cache and transactions, like they use, like at a certain point, like these features are  built on using suspense and transactions.
[02:59:46] like certain features are so you can you can choose not to use them.
[02:59:50] And yes, you won't get to use these other things, but it's because the reason that they work or that they're so slick is because they're built on it.  Like...
[02:59:59] You don't...
[03:00:00] have to use if you don't use suspense
[03:00:03] The transactions in the router
[03:00:06] don't exist. They actually get trees shaking out.
[03:00:08] Um,
[03:00:10] So then like,
[03:00:13] That's fine.  But actions depend on transactions.  So...
[03:00:21] I could picture implementing these things in a way that did not depend on  these other features,  but these features exist for this reason.  So it's like,
[03:00:32] It's it's it's like
[03:00:35] There's only...
[03:00:38] so many what ifs you can actually answer there. The biggest challenge here, and I recognize it, is that like,
[03:00:44] if something is changing,
[03:00:46] Um,
[03:00:48] Then like
[03:00:50] the boundaries shift, which means what can I and I can't use can shift, which is the awkward,  awkwardest thing because of migration. I think one of the coolest things that  came from the stream talking through this is that top level holding,
[03:01:02] not being a thing means that
[03:01:05] I don't think existing code will generally
[03:01:08] break here. The only thing, if we do go with the lazy suspense thing that I'm talking about,
[03:01:15] Um,
[03:01:17] is
[03:01:18] is that people who expect stuff to go back to suspense boundary will have tearing if they don't  add loading indicators if we change this.
[03:01:25] But I think actually mostly current stuff would actually be fine now that I'm thinking it through.
[03:01:32] Yeah.
[03:01:33] Async iterators are great on the server. I think they suck for client side stuff because you have a lot of different state coming in. Async iterators are like this and this and this. It's beautiful for server rendering. There's a bit of a performance cost. We benchmarked this with Marco, but like not nothing like async iterators are perfect model for how to do streaming.
[03:01:57] updating, pause here, resume type stuff for rendering.  It's not great model.  I know people have tried to build stuff like Crank.js,  but it's not a great model for the client when you have like,
[03:02:08] components that can
[03:02:10] Like, it's not like if you have a component view of the world, especially,
[03:02:14] Like,
[03:02:15] we have things updating all the time independently within a single component  coming in and doing their own little pieces and stuff like fine grained style um async
[03:02:25] iterators, like even React, it does a re-render model. You know, async, it didn't fit
[03:02:31] there and I understand like the pause resume but like you can have something async pause and then  be updating stuff synchronously at the same time like
[03:02:40] You can't just like...
[03:02:41] yield in the middle of your component body. It doesn't make sense.
[03:02:45] Now, I understand, like, you know,  kind of like how you put an async function inside create effect to, like, do it.  You can, like...
[03:02:52] escape the flow like make it non-blocking or whatever but like
[03:02:57] I think the writing of it gets pretty unyieldy.  On the server, under the hood, it's beautiful.  Like, we've talked a lot.  I think React said that they were talking about changing the await.
[03:03:06] in their async components to generators on the hood via compiler. That makes a lot of sense. But
[03:03:13] I don't know. Yeah, it's not something I think you put on the authoring side.  It's like a optimization that you can do on the server.  And then if the server and the client models don't align, it's sometimes tricky.  Solid server and client models don't completely align right now.  So like there is some trickiness there.
[03:03:32] Yeah, I mean, there's just...
[03:03:35] The argument so far is suspense unmounts things for people...
[03:03:39] Anne.
[03:03:41] unexpectedly, which is what I tried to address with what I my proposal, but like,
[03:03:47] There are...
[03:03:49] situations where
[03:03:53] the inversion of control, which is suspense, a superpower, essentially,  makes it so that stuff happens unexpectedly because you lose the locality of
[03:04:02] thinking to a certain degree.
[03:04:05] I don't think...
[03:04:08] That's the best way to put it though, because I think...
[03:04:12] In another way, it frees you because the local code doesn't need to worry about async.  And then where you add the create async, you add the suspense.  Like that's my hunch on why this ultimately will be good and why I believe in it.
[03:04:25] But...
[03:04:27] I can understand people looking at their current code base and going like, we don't write stuff this way.  I can see a bunch of problems happening.
[03:04:42] I think Bjorn Merlin.
[03:04:43] Yeah.
[03:04:46] Thank you.
[03:04:49] Thank you.
[03:04:51] I'd like to use some of the exam.  I mean,  we didn't find a lot of new smithers.  Yeah,  exactly.  Like it's a hard thing to migrate to,  um,  to it.  Yeah.  It's not that hard,  but it,  it,
[03:05:02] In the process, it might be weird.  Yeah.
[03:05:07] There's reasons.  I think it's fair.  And that's why we're working through this stuff right now.
[03:05:12] Okay.
[03:05:14] That's enough on Async. Let's talk about drive stuff while we still got time.
[03:05:19] All right.  I mean, put more stuff in the chat.  You guys have been incredibly helpful.  I think there was two really good takeaways there about not  needing top level holding on initial render.
[03:05:29] Um,
[03:05:33] And
[03:05:35] Thank you.
[03:05:37] um,
[03:05:39] What's the other one?  There was another takeaway.  Damn it, I forgot it.
[03:05:43] Yeah.
[03:05:46] Using show instead of suspense. Yes. Thank you. Yeah. That's the other one. Um,
[03:05:51] Yeah, which is a...
[03:05:54] But actually now...
[03:05:56] You know what?
[03:05:58] Thank you.
[03:05:58] If we get rid of top of a holding using show instead of suspense,
[03:06:03] Um,
[03:06:05] Thank you.
[03:06:08] probably...
[03:06:11] I mean, it's still a good tool, but it's probably less important.
[03:06:16] Like it is a way of opting out of suspense though.
[03:06:20] Thank you.
[03:06:21] It's kind of like a little trick.
[03:06:24] Thank you.
[03:06:28] But yes, yeah, we have to take the meaning.  Okay, so, okay.
[03:06:36] Yeah, one, two, three. Okay, let's do this.
[03:06:41] Yeah.
[03:06:42] Living in a derived world, okay.
[03:06:44] Everything is better when your data flows in one direction.  That's quite a statement.  That's why I'm starting here today, guys.
[03:06:51] When related things are derived rather than synchronized.  However, it isn't always to represent everything derived.  Solid even has a parameter to help with synchronization, create computed.  But in lazy reactive system, these sort of primitives don't make sense.  We only want to do necessary work.  Now, as I showed in the scheduling stream and as we just talked about create async, I realized after writing all this stuff, I don't have to deprecate create computed because it could just run at the same time as create async.
[03:07:14] Right.
[03:07:16] We're getting to a point where maybe only the memos are lazy.
[03:07:20] It's kind of amusing, but anyway.
[03:07:23] The gap left by create computer, though, is rather large.  In its absence, people would fall to create effect, perhaps, which can be less efficient.  And that's the biggest reason I don't like create computer.  People don't know when to use create computer versus create effect.  They're like, why do we have two of these?  And why do we have render effect? Why do we have three of these?
[03:07:37] there's a certain win by even if it means like,
[03:07:41] adding a new primitive,
[03:07:43] just removing...
[03:07:45] this create effect like clone and with something more special purposed.
[03:07:51] makes things a lot nicer. Because first of all, you don't have the create effect problem,  so to speak, where everyone's just like using create effect all over the place.
[03:07:59] or create computed like the, the, like that synchronization looking problem. And secondly, um,
[03:08:06] Yeah, you don't have to introduce all these topics, right?  You just have to say like,
[03:08:12] you just like there's still effect on render effect, but render effect is kind of like advanced.
[03:08:17] And,
[03:08:18] Yeah, it just like create computer was always weird.  Even if it's an advanced topic, people would be like, why?  Why do I need this?
[03:08:27] Thank you.
[03:08:28] Oh, you're right. Let me... Sorry.
[03:08:32] Thank you. I should put that one in.
[03:08:38] Yeah.
[03:08:39] In the chat for everyone.  There we go.  All right.
[03:08:43] Now,
[03:08:45] What about derived mutable state? This is the problem we have. The most common case for synchronization by far is
[03:08:52] is if you have some ephemeral state, then you need to be edited before being committed back to the source.  Like you're just temporarily editing something. You don't want to update the source signal.  You just want to have something be based on the source signal and the feedback.  This is like the classic controlled forms kind of mentality, right?  Where you're updating your state locally in your component, maybe you got it from props, and then when you save,
[03:09:13] The parent now gets the updated information and pushes it back down.
[03:09:20] So this is different than a lot of reactive frameworks have like
[03:09:25] writable memos and stuff like where you like,
[03:09:27] I think knockout has one.  This is actually a little bit different.  It's not about,  um,
[03:09:32] Thank you.
[03:09:34] This is about directionality.
[03:09:43] Thank you.
[03:09:47] Thank you.
[03:09:47] Thank you.
[03:09:49] Thank you.
[03:09:50] *sniff*
[03:09:51] The idea here is that, okay, yeah, so I'm proposing freight writable, which is a memo.
[03:09:58] in its shape.
[03:10:00] But...
[03:10:01] it has a setter function. The idea is set can override the value
[03:10:05] that came from props name, but if props name updates, then the value is lost. So basically, this is a reset switch.
[03:10:11] So whenever props on name updates, it resembles, but you're allowed in the meantime to update it.  So this might not even be the right name for this primitive, but this is what I've been playing around with.
[03:10:19] The advantage of this approach is that we can tell the React to Graph perspective that name depends on prop names, whereas the current solution would cause multiple executions.
[03:10:30] What's my example here? I go props name is create signal and then I have create computer. Now I put these in a weird order, but I'm just showing you the...
[03:10:37] If if.
[03:10:38] props uppercase name to uppercase otherwise name
[03:10:42] you could see that this would cause this memo to run twice initially.  You'd create that, then make uppercase of this, and then...
[03:10:49] I guess this one wouldn't run twice initially because you were setting it to the same name.
[03:10:54] But my point is like,
[03:10:56] When, like, pretend updates happened in this order, when someone...
[03:11:00] basically went and called set name on this.
[03:11:04] there's a possibility that this memo would update before set name is called and then set name would  update causing this memo to trigger again like you basically causing a double set it's  it's the create effect state synchronization problem
[03:11:17] the figure about like,  I'm obviously people would probably put this in a different order,  but I'm just showing like,
[03:11:21] in
[03:11:22] It's,
[03:11:23] possible even without you ordering stuff in complex cases to basically cause stuff to trigger multiple times.
[03:11:29] Thank you.
[03:11:34] Thank you.
[03:11:35] In the figure above, I made the order intentional to illustrate it, right? Create Rattle is useful for a number of scenarios. Pretend you have some async data you want to edit before committing a change. So again,
[03:11:44] This is funny because I'm actually showing what the cache functions.
[03:11:48] in solid Broderdu.
[03:11:51] But essentially I made a signal to,
[03:11:54] that I can use for reef fetching.
[03:11:57] And then fetch user.  And basically whenever I call refetch,
[03:12:01] Right.
[03:12:03] I understand that like,
[03:12:05] having some functionality like this built in probably it just it makes it hard to extend so the this is part of the
[03:12:12] This is part of the credit async consideration in design is that it's just reactive.  We don't need special signals like generated in the hood.  You can just always trigger...
[03:12:22] reactivity to do refetch. Anyways, this is very simplistic.
[03:12:26] thing, then createWritable updates the name. So essentially we've
[03:12:31] update the name and we preview it here using freight writable and then when we save it
[03:12:36] After we save it, we call refetch.
[03:12:38] which then fetches the data and then
[03:12:42] It will from the async source.
[03:12:45] Update again.
[03:12:48] Yeah, I mean, even in today, like, refetch is essentially just a signal that you can
[03:12:56] that you just track and just say,
[03:12:59] trigger it, right? Like it's, it's all reactivity. I mean, this is an example of a solution here that is overly simple. And because of that,
[03:13:07] It's more verbose.  This is like the redux problem.  I understand why people wouldn't want to do this.  I don't expect...
[03:13:12] Everyone to write the code like this, they probably will write wrappers.
[03:13:15] But at a core level, this makes a lot of sense.
[03:13:19] I mean, and that's why it's extensible.
[03:13:26] Well, the thing is, cache function does this automatically. When you use the cache key, it calls track on the, like, on the, it basically triggers the right thing.
[03:13:35] Yeah, it is. But this isn't the there's a reason create async. I put it in the router because I'm expecting it to be used with the router in the future.
[03:13:44] we need to have all the relevant APIs.  I saw a complete enough story in the router  to be able to release it right now,  but we are missing the supporting APIs for it.
[03:13:54] because I wasn't sure on them and I wanted to be careful.  But it was still important enough to get the right pattern for the router.
[03:14:01] Yeah, trade off.  It's like the creating sync in the router is like a prototype  of what the future potential is, which is even better, right?
[03:14:08] The example here, users load up in server, create writable, projecting out the name so it can be edited, then save button pressed and it refreshes. Okay.
[03:14:16] This is just illustrative. If we were using cache impermanent, we could write to cache instead of refetching it. And system like the router actions handle this invalidation, right?
[03:14:23] That's what I'm saying. CreateRenable naively could also be implemented this. It's literally a four liner, right?
[03:14:30] This is...
[03:14:31] crazy how well this works, even though it might be slightly inefficient. The realization is if you had a memo,
[03:14:38] of a signal.
[03:14:40] *sniff*
[03:14:41] You basically every time...  The reason this is inefficient is it's basically saying that every time...
[03:14:47] this updates, the create writable thing updates, it creates a new signal.
[03:14:51] Um,
[03:14:52] But...
[03:14:53] And then that signal is editable here is what this is doing.
[03:14:58] Because you have a wrapper on it, you always get the latest signal when you read or when you write.  But...
[03:15:05] So this is kind of inefficient that every time it updates, it creates a new signal, but it keeps the directionality because.
[03:15:12] we understand that things that depend on X or the signal are dependencies of it,  which means that this is actually correct from like a correctness standpoint.
[03:15:22] there's no chance of this like double updating like this.
[03:15:27] which is really cool.
[03:15:29] This solve for create computed is actually here, is actually the correct solution.
[03:15:38] Thank you.
[03:15:41] Okay.
[03:15:42] Great. But the other use case for create computed...
[03:15:46] is what if you're not just updating one signal?
[03:15:49] What if you're updating a store?
[03:15:53] This happens a lot, right?
[03:15:55] People got the global state in the stores.
[03:15:57] Right. And then they're like, OK, do something async.  And if the framework's not giving you async primitives and you're just using create effect, then yeah, you just get the data and then you write to your store.  Great.
[03:16:05] But we're trying to take a little bit of ownership here.  We're trying to do suspense.  We're trying to make this very smooth system.
[03:16:12] It's really awkward to detach the async
[03:16:15] from the store because the store doesn't know it's waiting on anything if it's set.
[03:16:23] Yes.
[03:16:25] Yes.
[03:16:26] And,
[03:16:27] You can remove the reactive here.  It's the recurring story with functional programming.
[03:16:35] in general.
[03:16:37] Thank you.
[03:16:38] Thank you.
[03:16:39] Right.
[03:16:40] And I kind of go off here and I was like, OK, the easiest way to derive from a story is just write your own proxy around it.  Right.
[03:16:48] Right.
[03:16:50] I actually said the easiest way is just to call solid's reconcile function, because today we'll just take some data from the server and then we'll diff it in this case, right?
[03:17:00] Right.
[03:17:03] So,
[03:17:06] Thank you.
[03:17:06] I could have grouped this into two kind of conditions.
[03:17:10] The first one is, what if you wanted to take something less granular?
[03:17:13] and then make it into something granular.
[03:17:16] take some computed value and then make it so that it only updates fine-grained.  Well, to do that, you'd need to be able to diff...
[03:17:26] the input with the old output, right?
[03:17:29] I mean,
[03:17:30] Otherwise, we don't know what changes, right?  If you get state A and state B, how do you know...
[03:17:35] granularly what changes. You have to diff it.
[03:17:38] Um,
[03:17:41] more importantly that is from a notification center what policy could change
[03:17:46] Yeah, okay.
[03:17:48] I didn't explain that very well, but what I'm saying is...
[03:17:52] that
[03:17:53] There's two considerations here.  You need to diff, right?  So that...
[03:17:57] the old user against the new user.
[03:17:59] The second thing that's tricky is
[03:18:03] If you're in a lazy system,
[03:18:05] Right.
[03:18:06] Thank you.
[03:18:07] How do you know until you do the work what has changed?  You don't.
[03:18:11] which means,
[03:18:12] If the effects are pulling the changes, you literally have to
[03:18:16] everything that uses user store
[03:18:18] has to actually get cued
[03:18:21] And then when you pull...
[03:18:24] you
[03:18:25] you do the diff.  I'm going to talk about that more in the next article,  but...
[03:18:30] This is just the kind of high levels of this.
[03:18:33] If you've seen create async store in the router, it's basically jamming these two concepts together.
[03:18:39] I wasn't comfortable pulling this out into its own primitive way.
[03:18:44] because of the correctness problem.
[03:18:46] If basically if if something's async, you know that when it comes back, it's the entry into the system.  It's like the signal. So you can write to it immediately.
[03:18:58] fine grained, like it's like a creative factory and you don't have to worry about other dependencies.  But if you have something trying to do this work further downstream,
[03:19:09] You have basically the crate computed...
[03:19:12] Thank you.
[03:19:12] problem again, because something could listen to it and one of its dependencies and execute out of order.
[03:19:21] The only way to avoid that would be to notify everything.
[03:19:24] so that it all cues and then
[03:19:28] It happens. So it's it's it is awkward.
[03:19:32] in today's solid where we don't have that ability to do this lazy stuff
[03:19:37] properly and do that notification like I was talking about, it's basically another example of create computed.
[03:19:46] And I wasn't sure if we'd actually be able to solve this without
[03:19:50] something like freight computed under the hood. So I,
[03:19:53] did the only save thing, which is jam it into create async store.
[03:19:57] Ideally,
[03:19:59] Create async store is just a combination of these two primitives.  It's like, give me some async data and then derive it into something fine-grained.
[03:20:08] Okay.
[03:20:12] Oh yeah, thank you.  Yeah, client likes on YouTube.  Please like.
[03:20:16] It definitely does help a lot on viewership and everything.
[03:20:22] I always forget to remind people
[03:20:25] I haven't checked the video recently but hopefully some of you have liked it.
[03:20:30] Um, anyway.
[03:20:37] Yeah.
[03:20:38] Yeah, I talk about creating a story.
[03:20:41] I do want to talk about
[03:20:44] that create selector that we use, you might have seen this in like the JS framework benchmark, is technically the same kind of primitive.
[03:20:53] because you could picture that crate selector could just be
[03:20:58] A key being the whatever the selected rows. If you guys are familiar with the JS Framework benchmark, there's like a test where you click and it changes which rows highlighted.
[03:21:07] The whole key here is that
[03:21:10] the core data only has a toggle for selected and you need to project it onto each row. And
[03:21:16] Um, and you could, you could see how this is the same kind of solution because if you
[03:21:22] Every time selected ID changed, created an object.
[03:21:26] and set it to true, then diffing it,
[03:21:29] Could be.
[03:21:30] turn the previous value to undefined.
[03:21:33] because it wouldn't be there anymore, delete it.  And then the new value would be whatever the current selected ID is.  And then...
[03:21:39] because it's granular, it would only update the specific row. Right? So,
[03:21:44] There is a world where create selector and create drive store are actually like we have a different API for create selector today inside here it says like is selected row ID or whatever.  But there's a world where these are actually the exact same thing categorically.  They're actually handling the same thing.  I didn't realize that I made a special case.
[03:22:03] with create selector of a more general problem. But it's just it's something to consider.
[03:22:12] Thank you.
[03:22:13] I don't know if that makes any sense.
[03:22:16] It's just, there's a whole category of things.
[03:22:21] that use Create Computed today.
[03:22:24] CrateSelector is basically the same problem.  Again, we don't use CrateComputer, but it's a similar idea.
[03:22:28] Um,
[03:22:29] that
[03:22:31] that actually get bucketed together.
[03:22:35] A more interesting problem though is what if we want
[03:22:39] to derive
[03:22:40] stores from other stores, right?
[03:22:46] Right. Things like create memo or create writable are great for individual fields. Right. You can basically like I showed before, you could basically take a store and then make a create writable.
[03:22:55] to derive a specific field that you're overriding  until you save it back to the store.  You know, that makes sense.  But what if you wanted to like,
[03:23:02] make a layer over the whole thing. Well,
[03:23:05] You could just make a proxy yourself.
[03:23:08] And here's an example of where
[03:23:11] Every string in this store, for example,
[03:23:17] returns
[03:23:19] Um...
[03:23:20] an uppercase version of it. And you would also, what you, what I'm missing here is you could also say that if it's an object, return an,
[03:23:27] the same proxy again like so every object is a object this and basically deeply every single
[03:23:33] in this proxy wrapper, every single string
[03:23:36] is uppercased.
[03:23:38] Sure.
[03:23:42] Thank you.
[03:23:42] Didn't Svelte fix it, we know how long we need to start.  All Svelte did is the same thing Vue did.
[03:23:48] Um,
[03:23:49] Okay, Svelte did one thing.  Because of their syntax, what Svelte did...
[03:23:54] is they didn't get rid of stores. What they did
[03:23:57] I believe, or they're going to do.
[03:24:02] Yeah, we'll worry about that.  Is they're going to...
[03:24:05] There's a problem. In solid, signal looks like this. Signal.
[03:24:09] In view, signal looks like this.
[03:24:12] It's felt...
[03:24:13] Signal looks like this.
[03:24:15] Plain value, right?
[03:24:16] In solid, store, store,
[03:24:18] Looks like
[03:24:20] This.
[03:24:22] In view,
[03:24:24] Store looks like this.
[03:24:29] I'll just say it's the same and it's felt.
[03:24:31] a store would look like this, right?
[03:24:34] Thank you.
[03:24:39] Because this can't store primitive object,
[03:24:45] and access it, that's why they have these different APIs.
[03:24:49] if you were to combine them which view does as well they have
[03:24:54] refs, which are actually deep, they're not shallow.  You have to actually ask for shallow ref,  which is the same as our signal.
[03:25:00] If you were to combine them in solid, it would look like this.
[03:25:05] If you were to combine them in view, it would look like something like this.
[03:25:15] And if you were to combine them in Svelte,
[03:25:18] it would look something like this.
[03:25:22] Thank you.
[03:25:23] Because of the compiler.  The commonality that you're going to see here is Svelte is the only one because of the compiler where Signal...
[03:25:33] and store.
[03:25:35] can actually coexist
[03:25:37] without changing the syntax.
[03:25:40] view and solid.
[03:25:42] have the put
[03:25:45] this in the middle
[03:25:47] because that's how JavaScript works and Svelte is not JavaScript.
[03:25:51] So like...
[03:25:53] In a sense, they solved it, but they have not solved anything.  I know you're probably not serious, but they haven't solved anything close to the actual problems I'm talking about.  Svelte has the ability to have stores from Syntaxial part without calling them stores.
[03:26:04] But
[03:26:05] it doesn't act like we're talking about much more complicated things than that.
[03:26:09] Thank you.
[03:26:12] Svelte stores are RxJS.  They're completely something else.  They have a simple...  Svelte stores...
[03:26:22] Primitives are being...
[03:26:23] deprecated.
[03:26:25] because they have signals.
[03:26:26] But they're doing something like solid stores, I believe, or deep refs in view as their base data type because they can.
[03:26:33] Like they literally the same...
[03:26:36] They can go signal equal value, signal equal object and treat them the same way.
[03:26:43] Preact signals are the same as Vue, except they don't have stores.
[03:26:49] You're right. You're right.
[03:26:51] Thank you.
[03:26:52] You're right, Parassocial knows this.
[03:26:54] You're completely trolling me.
[03:26:58] Okay.
[03:27:01] Okay.
[03:27:02] Thank you.
[03:27:03] It's fair, some people might not know what I mean when I talk about store, I mean a deeply reactive object.
[03:27:10] Yeah.
[03:27:12] Anyways, obviously writing stuff like this gets tedious.
[03:27:16] Especially if you wanted to like make memos for specific properties. It's kind of hard.
[03:27:22] Um,
[03:27:23] And this brings me to the Trello demo.
[03:27:30] You guys familiar with the Trello demo? It's a bunch of columns. Brian Florence showed it where you can drag and drop cards between different columns.
[03:27:40] Thank you.
[03:27:42] Amen.
[03:27:46] Um,
[03:27:48] Thank you.
[03:27:49] The challenge with this is it's an interesting place where you have optimistic updates being applied regularly.
[03:27:56] on top of your data.
[03:27:58] Right?
[03:28:00] So,
[03:28:02] Like essentially you have two sources of data. You have the server data, which is your current state of the board. And then while you're saving the cards as they're moving around, you have optimistic data. Now in a simple optimistic data case, like a to-do app, like we love to all show, you can just make two for loops and append the optimistic data to the bottom of the list.
[03:28:21] Easy peasy, right?
[03:28:23] The beauty of the Remix optimistic update approach, which everyone's adopted, is that by introducing ephemeral state back in,
[03:28:30] You don't have to deal with caches, which is genius.
[03:28:33] However,
[03:28:35] If you actually have to merge the data, it's a bit of a mess because you're
[03:28:39] Like, sure, it's great to be able to like make a second list or, you know, say, put the optimistic updates over there.  But how do you intertwine it with your actual existing data without it like.
[03:28:49] breaking down weirdly and in react the answer is you just
[03:28:53] immutably clone the thing and generate it.
[03:28:55] the whole way. And every time there's any change on the optimistic stuff or the original thinking changes, you just apply all the changes.
[03:29:03] and then send all the immutable data to react which will diff the whole thing again so you just keep on
[03:29:09] the call.
[03:29:10] Every change, you just rebuild the whole data structure.
[03:29:13] And then...
[03:29:14] re-diff it, right?
[03:29:16] And to be fair, with this primitive we're talking about, we can do this in solid, right? We can go create async, here's a board.
[03:29:24] Today you'd use Crate Computed to do this, but this is probably the only reason we haven't released our Trello demo, because it works and it's smooth.
[03:29:33] I didn't like, I don't, the code's not where it needs to be in terms of like,
[03:29:37] user, you know, like,
[03:29:40] This is a gap, but you could pick your Crate Drive store being like, OK, give me the previous version of the notes from the board.
[03:29:46] go over the list of mutations,
[03:29:49] do basically take all the mutations and
[03:29:53] modify or clone  until it's the right way and then return  those nodes and then iterate over them and draw  them essentially so
[03:30:00] Every time...
[03:30:01] The board...
[03:30:02] changes from the server,
[03:30:04] Or you add a new mutation, you clone the original state of the board, and you mutately add all the changes on top.
[03:30:13] Sweet.
[03:30:14] but
[03:30:19] This is kind of not as efficient as we'd like to be.
[03:30:26] You know, I feel like we can do better than this. Like I could just stop here.
[03:30:30] But I wasn't happy with this because...
[03:30:33] This is, yeah, this is what React does, but
[03:30:36] We know...
[03:30:38] we should be able to know better than, we should be able to do better than React, right? Like,
[03:30:43] Thank you.
[03:30:44] So,
[03:30:45] Thank you.
[03:30:56] Blair is looking for work.
[03:30:58] I don't even know what Blair does these days, but hey, thanks for dropping in.
[03:31:03] Drum Animal, drummer of my old band, Solid, the one that actually the framework was named after. Anyway.
[03:31:11] Uh,
[03:31:13] Moving on here, what I was saying is,
[03:31:17] Thank you.
[03:31:18] The reason Solid works the way it does...
[03:31:21] so efficiently with stores is because it's reference based like
[03:31:25] There's this...
[03:31:27] challenge here that
[03:31:30] -
[03:31:32] Like basically once we close over something, it doesn't change.  Like if it changes, we know we need to rerun the thing. So,
[03:31:39] References are fixed.
[03:31:41] So diffing works because we update
[03:31:44] the data object, we mutate it in place,
[03:31:48] and notify the specific subscriptions of those mutations.  And this means that we don't have to reconstruct
[03:31:54] Thank you.
[03:31:55] the actual rendered view.
[03:31:59] So it's like kind of awkward where you're like, shouldn't it be possible to take
[03:32:04] you know,
[03:32:05] these piecewise things and not go through the work and the challenges that
[03:32:09] we can't mutate the underlying store.
[03:32:12] with a derivation, right?  If we have a store and we have some,  our internal JavaScript object,
[03:32:18] we could
[03:32:19] mutate that object because we own it. But if we're deriving from a store,  we can't mutate the underlying store.  We have to make our own versions that wrap every product,
[03:32:30] object in that store.
[03:32:32] Right. Because look at this.
[03:32:34] Let's pretend board.notes
[03:32:38] doesn't equal realizeboard.notes because we've wrapped in its own proxy like I'm talking about.
[03:32:43] But in the beginning...
[03:32:46] Um,
[03:32:52] Okay, yeah, yeah.  Okay, so I'm talking about,  I guess I've already applied some changes at this point.  That's why they're not equal.  But it's possible that,
[03:32:58] realize board notes zero and the are the same initially and the id is the same and the body  is the same right so they're actually the same
[03:33:06] Note zero, the first one in the index is actually the same.
[03:33:09] But if we edit the body correctly,
[03:33:12] of
[03:33:14] the note.
[03:33:16] Suddenly,
[03:33:19] These like this is I'm just talking about immutable change.  If you had like two separate immutable things, suddenly the object is not the same.  The ID could be the same and the body's not the same.
[03:33:28] Right. Because we can't go and modify the,
[03:33:31] the existing object, we have to create a new object. So I think this
[03:33:36] I don't know why I put not equal here.  I think...
[03:33:38] I don't know what I'm trying to show with this part.  I just meant this part.  Like initially we can start with things being the same and then,
[03:33:45] deeply, it's a problem with immutable data.
[03:33:51] But we need to keep...
[03:33:53] these references, otherwise we can't diff properly. Like if every time we created a new proxy,  every time like the board changed or something, then we'd redo all the work in the for loop and  create all the rows. We actually need the same proxy. So,
[03:34:08] We'd almost need like a weak map in this solution to be able to like derive this properly.
[03:34:16] Thank you.
[03:34:17] if we weren't going to diff.
[03:34:19] Right. I don't know if you guys are following me at all.  I'm just trying to say is like,
[03:34:23] if if like the difference in our original version is
[03:34:26] we actually...
[03:34:28] make a clone
[03:34:30] And then it's not it's not deeply reactive.
[03:34:34] because this is not a store.  And then we just diff and make our own proxy.  And we don't care.  But if we were trying to like have the underlying thing be reactive through the
[03:34:43] are...
[03:34:44] our rapper
[03:34:47] we actually have to
[03:34:49] Keep.
[03:34:51] proxies based on what the underlying object is.
[03:34:55] And, you know,
[03:34:56] As long as the underlying object doesn't change, always give the same proxy.  But if our proxies are in half and half states because you've like, say, edited the body here,
[03:35:06] You're in this interesting zone that when...
[03:35:09] This...
[03:35:10] board triggers from the server.
[03:35:13] You want to diff it now so that you keep the same references on this side.
[03:35:19] But, yeah,
[03:35:20] This version will not have...
[03:35:22] changes applied.
[03:35:23] that aren't relevant anymore. Like you'd have to be able to reset
[03:35:28] the state of these wrapper proxies.
[03:35:30] I don't think I'm doing a good job explaining it, but it's it's it's very, very complicated.
[03:35:36] in a sense that
[03:35:37] You're trying to synchronize these two different
[03:35:41] objects with pass through.
[03:35:42] And
[03:35:45] Honestly, I go on a bunch here.
[03:35:50] and try and create a primitive that does it.
[03:35:54] But it's very hard. With immutable data, you always start from the beginning.
[03:35:58] You go, here's my initial state, and then you apply incremental changes to it.
[03:36:02] And then you diff it to figure out what's changed.
[03:36:04] it's very hard to hold on to something that you mutate
[03:36:10] You can apply more changes to it, fine-grained, which is great, but it's hard to reset it. You can't, essentially. You almost have to write to it again with the initial state and then apply the changes again. How do you reset? I was picturing proxies that had overrides on specific properties.
[03:36:25] But because the references stay the same, you'd have to go through and iterate through all those objects and like on a reset of the board, undo all the changes to apply them again.
[03:36:35] Suffice to say, I didn't find a good solution here.
[03:36:41] And I think,
[03:36:43] That's only half the problem. The other half the problem is if we wanted to be really efficient,
[03:36:48] We don't want to apply all the mutations every time a new mutation comes in.  We only apply the newest mutations.  Like when you reset the board, get new data, you apply all the mutations that exist.  But every time you get a new mutation, you just want to apply them one by one.
[03:37:00] And,
[03:37:02] How do you do that? You'd have to have some idea of when
[03:37:06] If the board is changed,
[03:37:08] to just get all the mutations, otherwise you only get the certain ones based on the timestamp compared to the last time this computed run. We're kind of lacking tools here.
[03:37:18] Thank you.
[03:37:19] Okay.
[03:37:20] Yeah. And it's,
[03:37:22] It's worse than just list management because it's deep.
[03:37:25] If it wasn't deep, it's like our mapper rate.  Mapper rate is like an easy version of this.
[03:37:31] And, you know,
[03:37:32] But we're deep.
[03:37:33] And I talked about get last run and I kind of pictured like how we can do this projection, but this just doesn't work. And I basically was like, pretty, at the end of this, I was just like, oh man, I'm like frazzled. I can't think anymore.
[03:37:47] So,
[03:37:49] Um,
[03:37:50] I was like, OK, let's try this again.
[03:37:53] Lazy plus dried fine-grained is hard.
[03:37:55] This is something that is more and more evident.  I like as I went on the discord and started talking and the more I talked  through the solution, I realized that it just didn't make sense.
[03:38:04] Great.
[03:38:05] So I was like, okay, let's start over again.
[03:38:09] Right.
[03:38:11] Event queuing, I mean, in a sense,
[03:38:14] Close because diffs are kind of like events, right? Like they're a description of the changes.
[03:38:26] Yeah, so yeah, you could version each...
[03:38:31] each field,
[03:38:32] And then like if the parent ever reset,
[03:38:35] then it could skip past that. But even like on reset, who do you notify of the change?
[03:38:44] I kind of started
[03:38:46] I was like...
[03:38:48] Do you know the work you're going to do? I was trying to come up with this really pure, correct solution.
[03:38:55] Thank you.
[03:38:56] And,
[03:38:57] it not only seemed really difficult to implement,  it also seemed really inefficient.  Like even though we were like saving stuff  that I wanted to,  the end result might not even be performed enough.
[03:39:09] So yeah, let's drop this one in the chat.  Thank you, Daniel.
[03:39:17] Thank you.
[03:39:18] Okay.
[03:39:20] you
[03:39:21] Thank you.
[03:39:22] Okay, if you're talking about an event system to like over the network kind of system, I mean, that would be ideal. And I think when we talk about sync engines and talking about...
[03:39:33] partial updates and stuff like that way.  I think...
[03:39:36] we're getting into that zone, but
[03:39:37] I need to do a little bit more exploration.  This is...
[03:39:42] This is right now I'm talking about in a purely client side of things.  Like if I just got some data...
[03:39:50] And I know the optimistic updates, so I don't need to wait on anything.  And I'm just trying to apply these things together.
[03:39:57] Um, you know, because like if,
[03:39:59] In the trial example, if I move a card, I need to show it in the new location and not in the old location.  I have to take my server data that's, you know, from its last state and then change it.  And with immutable, you can always start from that server data and go.  But if you're mutating something...
[03:40:12] when to start,
[03:40:14] from that, when to do incremental, when to like...
[03:40:18] reset all the changes.
[03:40:20] We don't have great ways of expressing that. So I was like, okay, let's go back to our prime problems. I already talked about in the latest system, we notify before we do any work.
[03:40:30] You expect to update to mark everything as possibly dirty all the way down.
[03:40:33] Chewing the effects, which then pull and do the work.
[03:40:37] Right?
[03:40:38] They go up the chain until they find something that's actually dirty and then reevaluate and continue back down if stuff has actually changed.  Otherwise, the short circuit.  Non-granular chains are easy.  You can see the path from like A, B, C.  So like if C gets queued, it goes back and goes, oh, B, are you dirty?  A, it just goes walks up.  But granular derivations are hard.  We would need to notify everything.
[03:40:57] Right.
[03:40:58] *mwah*
[03:40:59] If you have a single, let me explain more.  If you have a single source and multiple outputs, you'd expect the source change.
[03:41:04] All the outputs will be updated.
[03:41:06] and need to be notified.  So if A changes, definitely B or C could change.  So these both need to be updated.  If you have multiple inputs, like I'm just pretending  this is the input and this is the output,
[03:41:15] Now these are the inputs and these are the output.
[03:41:19] or dependencies it's not any outputs these are inputs and these are things that depend on a
[03:41:24] and C and D are,
[03:41:26] both depend on A and B here. If you have multiple inputs, you'd expect either change
[03:41:30] so the outputs could
[03:41:32] If either changes, the outputs could also change, so they need the notify.  So if A changes, C and D get notified.  B changes, C or D get notified.  This is kind of expected with reactivity.
[03:41:41] By notified, I mean just told that they could be dirty, not actually rerun yet.  You notify all the way out to the effects and pull.
[03:41:48] in a lazy system.
[03:41:49] But what if they weren't actually dependent, right?  Like what if A to D, B to C, E to F?  You don't want if A updates to notify DEF, if C is updates to notify DEF or B updates.
[03:42:02] And store-like interfaces
[03:42:04] could be this problem.
[03:42:07] Because you don't,
[03:42:09] No.
[03:42:11] when you have a function there, deriving it,
[03:42:14] like for our diff, we don't know how things cross match.
[03:42:20] They may be related or not.
[03:42:22] right? Because once you're deriving inside a function,
[03:42:24] You're kind of like, stop.
[03:42:27] This differs from the stores themselves because when a store is the top level thing, like it's the signal that you're doing the update for,
[03:42:35] you could treat each thing separately, right? You can go, I'm running to this, I'm running to this.  But when you're doing it in a derived way where you have a function where you're like saying, hey,
[03:42:44] This is my next date.
[03:42:45] you have no clue how like you move these items in array or whatever like you have no clue how  these things are linked together you might move one thing from one
[03:42:55] list to a different list.
[03:42:57] These things could...
[03:43:00] could be changed.  And even with...
[03:43:04] these mutating APIs I was talking about, which are granular in there,
[03:43:09] Well, I...
[03:43:11] Unless you do the work first, you still don't know.
[03:43:14] Like, even if you were saying like, you know, updating things in a very specific way where they weren't dependent on each other.
[03:43:21] If you just go, hey, source of this drive store changes, right?
[03:43:27] You have to notify every single thing
[03:43:29] that listens to that store conceptually.
[03:43:33] or you do the work.
[03:43:34] And find out what changed.  But you don't...  It's like one way or the other.  It basically...
[03:43:39] What I'm saying is once combined, splitting apart is basically...
[03:43:44] impossible in this pure sense.
[03:43:47] We actually have an example today in solid where we do keep these things separate props merge props and
[03:43:53] and spreads basically. We never combine the objects, but instead we line them up on property name. This keeps them separate, right? Because they're not shared, they're actually only allowed to interfere with each other, the property names.
[03:44:03] And they aren't deep. Obviously the tree of props being merged together can be deep, but like the actual reactivity isn't deep.
[03:44:12] So the order of the arguments can't change.  Things can't be moved around.  We don't care about that.
[03:44:17] But if you've ever looked at merge props in solid, the logic is actually really complicated, even for what I call the simple case.
[03:44:26] Is there an alternative? Well, not a correct one, not one that can teach each node runs once. I was talking to Milo and he's telling me that there might be a solution. I'm going to bring Milo back on the stream and we can talk about it. But high level, I mean, I don't know what tricks he's trying to come up with, but
[03:44:43] essentially
[03:44:45] I don't know if this solution is solvable.
[03:44:52] in an optimized way. Basically create computed
[03:44:56] doing the right, you know, basically
[03:44:58] pulling midway and then continuing.
[03:45:01] is optimal from a notification standpoint because it does the work
[03:45:05] partway. It eagerly does it
[03:45:08] you know, you notify as far as you can, and then you hit the thing that's create computed, it stops,  and then it does the work, and then it continues notification.
[03:45:18] As much as I, you know, last time was like, how can we be pierced about this?
[03:45:22] This problem is kind of real.
[03:45:28] Um,
[03:45:31] The primitive I'm talking about is called, I'm calling crate drive store.  I showed it a few minutes ago.  The idea is it's like,
[03:45:38] I'm...
[03:45:39] a memo or a computer that
[03:45:43] like the basic example is every time the data changed,  it would dip it with its previous value and then,
[03:45:51] it outputs a store which fine-grained notifies based on the diff.  So every time...
[03:45:58] you
[03:45:59] you know, get a new value from the server, you would
[03:46:02] basically
[03:46:03] dip it with the current value and then
[03:46:07] If like just the username changed, it would then...
[03:46:10] notify just a single username.  And what I'm saying is when you have...
[03:46:14] a system
[03:46:16] like from a push standpoint, talking about it, it's very easy to see how that would work. You just go, OK, get the new data, diff it.
[03:46:21] right to the signal, send it out.  But from a drive way of doing it, it's actually tricky  because you notify before you do any work.  So you don't diff yet, you just go, okay,
[03:46:32] this drive store has updated. Technically,
[03:46:36] from PureStand, you should notify every single thing that listens to it. At that point, they all get  cued. And then they go, okay, DriveStore, for this field, have you actually updated it?
[03:46:46] For this field, have you actually updated?  For this field, have you actually updated?
[03:46:50] That's not particularly performant.
[03:46:55] you
[03:46:58] Whereas like with create computed, you could basically, or something like that, where you do the work, like,
[03:47:04] eagerly, you could basically keep it in the pure phase.
[03:47:08] So it might recalculate a couple things a couple times, but you won't notify anything unrelated.
[03:47:14] And you won't run the effects.  You can do it before all the effects are settled.
[03:47:17] So like,
[03:47:19] As much as I hate saying it, this might be...
[03:47:22] It's funny, I'm trying to push...
[03:47:25] Crate computed out of the authoring experience, but it might be needed internally. This is why that comment
[03:47:32] Yeah, it is super hot in here.
[03:47:34] I'm sweating. I think you guys can see.
[03:47:38] Thank you.
[03:47:39] This is why...
[03:47:44] This...
[03:47:46] this is the whole functional programming is unoptimal thing you know kind of coming back at me um
[03:47:55] I just want to bring this up because it's an unavoidable truth in this area, regardless of what we are trying to accomplish.  A big goal has been to remove, create computed and making rights during the pure phase illegal.  While it's something we aspire to, it might be difficult to reach today in a performant manner.  More than likely, internally, we leverage this mechanism for performance reasons.  It asks the question, though, are we better to keep this framework space and make the developers follow the cleaner model?  Or should we hand them the huge potential foot gun?
[03:48:24] Yeah.
[03:48:24] In the article I just covered, I gave a bunch of examples to think through.
[03:48:28] But...
[03:48:29] I realized that after trying to do all that projection stuff with the Trello,
[03:48:34] and whatnot that
[03:48:38] I was dealing with really two types of problems.
[03:48:43] Try the mini fan? Okay, let's try the mini fan.
[03:48:47] Can you guys hear that?
[03:48:50] Thank you.
[03:48:52] Thank you.
[03:48:53] Thank you.
[03:48:57] Mm-hmm.
[03:48:57] So now coming in through the stream.
[03:49:02] I'm too far away from it, though.
[03:49:09] I need to get it like--
[03:49:10] Thank you.
[03:49:11] I wish I could just like lean it on top of my laptop.
[03:49:16] No.
[03:49:18] Thank you.
[03:49:20] Okay, that's close enough, yeah.
[03:49:22] Okay, well, good to know.
[03:49:24] I was worried about the audio coming through and, uh,
[03:49:28] Courtney's like, they won't hear it.  And I'm like, that's why I didn't try it.
[03:49:32] Yeah, okay.
[03:49:33] If you guys still can't hear it, then...
[03:49:35] This is much better.
[03:49:37] Okay.
[03:49:38] Thank you.
[03:49:40] And that's why she's my better half.
[03:49:44] Yeah, I brought it actually closer.  It's actually only about...
[03:49:49] Mm-hmm.
[03:49:49] foot and a half for me. It's like almost, it's actually only about a foot from the mic.
[03:49:56] uh maybe a little more than the mic because it's below the mic but yeah from yeah
[03:50:00] Anyway, yeah, that's nice.  That's much nicer.
[03:50:04] I don't know.
[03:50:06] Anyway.
[03:50:06] Okay, so
[03:50:09] I realized as I kind of was working through these problems,
[03:50:12] that,  that,
[03:50:14] There's local dipping.
[03:50:15] and broadcast diffing.
[03:50:19] This local diffing or drive diffing is the most common scenario.  And that's that whole...
[03:50:24] create drive store we're talking about, right? We have other examples in solid, create selector,  map array, or your forward component, and create async store.
[03:50:31] In these, we get the next state through diffing notify the right things.  These are all...
[03:50:36] Also all currently not correct. MapRay,
[03:50:40] does properly diff and map, but if the positions change,  we write to an index signal, which happens inside the create memo call.
[03:50:49] So we write a signal here to update the index, right?  We can drive and move stuff in the right place  and keep it pure and correct.  But because we write to a signal when we're calculating it,
[03:51:00] um
[03:51:02] Technically, it's not correct.
[03:51:04] CreateSelector collects computations itself rather than adding itself
[03:51:09] as a dependency and then calls those computations directly when something has changed. Huge performance optimization.
[03:51:15] But
[03:51:15] clearly not correct.  It's literally instead of it's like  we instead of the typical, you know,
[03:51:21] pull, it's like pure push, essentially. It doesn't even use the reactive system to do the pushing.  CreateAsyncStore basically uses create computed to call reconcile.
[03:51:29] So,
[03:51:31] Yeah.
[03:51:32] These are all examples of where we've
[03:51:36] fall apart, but
[03:51:37] from a purist standpoint might cause a couple extra executions,  but is drastically more optimized for the execution of things.
[03:51:48] Thank you.
[03:51:50] right i i'm interested to see if like create drive store and create selector can be made the same  thing
[03:51:55] But,
[03:51:56] You know, it'd be nice if there's a single primitive for all these things.
[03:52:00] But essentially, yeah, we need a immutable to store converter.  I think map array remains a special case because of the way the index is handled and it doesn't use proxies or stuff, you know.
[03:52:09] or objects, it doesn't use diffing.
[03:52:12] It doesn't need to.  It has a very specific name,  but I could see create selector and,
[03:52:16] create async store being like that single create drive thing potentially
[03:52:21] On the positive, this area is pretty well understood.  These problems everyone hits when they first moved to being fully reactive.  For simple cases, this is an efficient solution because once you diff at a certain point, you generally can handle the rest granularly.
[03:52:31] It's important to recognize this goes away from the realized value, that this always goes realized value to realized value.  If you hit a similar situation downstream, you need to diff again.
[03:52:41] In theory,
[03:52:42] Maybe we can only diff once.
[03:52:45] This is sort of where my thinking was going because like,
[03:52:48] Sure, if I derive...
[03:52:51] from a, you know, from some server data, and then I'm diff it to make it into a store.
[03:52:57] And then...
[03:52:59] Later on, I'm using it and then I decide to, you know,
[03:53:02] I don't know why. Transform it another way and diff it again. I'm going to need to diff it again.
[03:53:07] Um,
[03:53:08] Because...
[03:53:09] I mean, assuming...
[03:53:12] Bye.
[03:53:13] there isn't another mechanism to communicate the diff.
[03:53:17] Um,
[03:53:18] And we actually have a situation here in Solid.
[03:53:21] we diff your array in four or map array to produce new dom nodes, but then we,
[03:53:25] So we basically take, when we're mapping over it, we basically do a very simple shallow diff where we're like, okay, what has moved? What needs to be created? Right?
[03:53:33] and then we create the new DOM nodes.  We run that part of your code,  but then we diff again in DOM expressions.  We decide how to insert the DOM nodes.
[03:53:39] Our diffs on the DOM side are highly optimized, so it isn't notable compared to the cost factor communicating that diff information.  But theoretically, we can do less work.
[03:53:46] What I mean is like,
[03:53:47] So inside DOM expressions, we just get a ray of DOM nodes, and then we dip it against the actual DOM.
[03:53:54] In theory, and people ask me why we don't do this in solid, and I said it's faster. When I used it, I tried to do other, you know, communicate the diff from the for loop. It actually didn't make things any more performant.
[03:54:07] in the examples or things I tested, like using the JS framework benchmark, but
[03:54:13] I think the main reason is
[03:54:15] you someone can
[03:54:17] Always insert...
[03:54:18] DOM nodes into your JSX without using four.  They can always just take it away and stick it in.  So like...
[03:54:27] this is this can't be the rule this has to be an optimization communicating the diff and then you  need to have like a diff format that you communicate and diffs are  fun because they need to be if there's multiple changes
[03:54:38] They need to be handled in order, you know,
[03:54:41] Sometimes it's easier just to pass the next state than it is to pass like a series of operations, right? Because it matters if you move an object before you edit an object, right?
[03:54:51] Like you actually have to
[03:54:53] Like,
[03:54:54] A diff that involves a raise.
[03:54:57] often includes a sequence of events that happened.
[03:55:01] Bye.
[03:55:05] Thank you.
[03:55:09] I don't. I'm saying this does create a store.
[03:55:14] Um,
[03:55:15] I'm saying that it's, but it's hard to create a store that,
[03:55:21] in a pure sense because you have to like write to the story.  It's hard to derive a story.
[03:55:28] So I'm basically thinking that
[03:55:30] Yeah, I'm not suggesting that we...
[03:55:34] want diff-based single-singles. I'm saying the only way to get from a single function to a store is to diff.
[03:55:40] Like if you have...
[03:55:42] some kind of data.
[03:55:44] like from the server, some blob of data.
[03:55:46] and then you want it to update fine grained when you get the next set of data
[03:55:52] you basically
[03:55:54] If it's the same blob and slightly different, you're going to need to dip it to know what changed. Obviously,
[03:56:01] If you control a source and it's a store and then you can just write to it, that's fine.  But I'm trying to, this is about changing the directionality to make things derived so that we can propagate things like async.
[03:56:12] Um, yeah.
[03:56:13] From that perspective,
[03:56:15] Like...
[03:56:16] Yes. If you know...
[03:56:18] the granular thing to update
[03:56:22] that's great, but it's actually hard to represent that
[03:56:26] in a derived manner.
[03:56:28] when you're not talking about individual fields? Like how do you drive a whole store?
[03:56:34] I actually don't have good examples of where to drive the whole store.
[03:56:39] other than
[03:56:40] Like, as I said, from the server perspective,
[03:56:43] It's...
[03:56:43] Obviously, always new references.
[03:56:46] So,
[03:56:47] um
[03:56:49] It's a diffing problem.  It's always going to be a diffing problem.
[03:56:51] But,
[03:56:53] My only other example was Trello.
[03:56:56] Um,
[03:56:57] So the other option that I was trying to get at is
[03:57:01] Instead of, I was thinking, well, instead of,
[03:57:05] What if instead of...
[03:57:11] you know, take going for a realized date, diffing it,
[03:57:14] and applying those changes, you know,
[03:57:16] And basically I guess another realized date.  What if we could like communicate the diff?  Like what if, you know,
[03:57:22] when you did your for loop, for example, when it diffed and could tell that you move this object from A to B, like switch the order two objects,
[03:57:31] Instead of DOM expressions, for example,
[03:57:35] getting the list
[03:57:37] the realized list and the comparing against its list,  it just goes, oh yeah, move A to B. And it goes, okay, well,  I know my version of A and just move it and basically not do the diff again.  That's a simple example, but I'm just like, what if we could do that through your reactive code?
[03:57:52] Right. Where we communicate. It's not just local diffing. We could communicate the diffing along the reactive graph.
[03:58:00] And I came across this.  I don't know if you guys are familiar, but TLdraw is
[03:58:05] has something called
[03:58:07] Your questions are good. I actually get back to your same conclusions, I think, in a few minutes. But I want to get, we need to explore this to actually get to the right point.
[03:58:21] Signia is TLDraw, and they released the Signals library.  And it's actually...
[03:58:28] Pretty cool.
[03:58:29] It's clock-based.  It has a lot of, which I love,  which is very similar to SJS,  which Solid's based off of.
[03:58:35] And, you know,
[03:58:36] Um,
[03:58:37] They have this concept.
[03:58:38] of incrementally computed signals.
[03:58:41] Um,
[03:58:44] And the way they introduce this is they go, okay, their signals are...
[03:58:49] I guess, where they have an atom here.
[03:58:52] Why are they doing this?
[03:58:56] They show that each signal
[03:58:59] has a last changed epoch so you can always ask it what
[03:59:04] when it was last changed. I think this is actually genius. We could do this in solid weather clock, but
[03:59:09] Any signal derived value has a clock cycle.  So you could actually see like,
[03:59:16] Set a name.
[03:59:18] And then...
[03:59:19] Get it. And it actually looks like it looks like they yeah.
[03:59:23] I guess her signals,  they can be synchronous regardless.  You can actually see at what time,
[03:59:28] essentially,
[03:59:30] the update occurred.
[03:59:31] you
[03:59:35] you
[03:59:35] You're right. I'm getting there for a second.  I'm not expecting...
[03:59:41] Let's go here.  When derived value is computed, it's computed function,  past two arguments, blah, blah, blah, blah, blah.
[03:59:46] Okay, so what they do, you know how our stuff always passes the previous value?
[03:59:51] Signia upped it and they pass in the previous value and the time that this computed last ran.
[03:59:59] the
[04:00:00] Keep in mind, this is like, this is a advanced API. I'm just
[04:00:03] looking over it.
[04:00:05] And they're using immer here to diff, okay?
[04:00:08] So they created an atom which basically creates...
[04:00:10] this immer atom wraps immer so they create a special atom they say that it has history
[04:00:15] And then whenever they update it,
[04:00:17] they use immer if you ever use immer before to basically diff they take the old value and the new value
[04:00:24] And then...
[04:00:25] They basically...
[04:00:28] set the signal. It has two arguments, their signal. It has
[04:00:33] It has the next value.
[04:00:35] And
[04:00:36] alter, you can also set it with
[04:00:39] the list of patches or the diff.
[04:00:42] that it needs.
[04:00:44] So,
[04:00:47] Then they go and create a computed and don't get me wrong.  This looks as complicated as hell.
[04:00:54] basically in their computed here, they have a naming convention, but it doesn't matter. It's a map function. They take the last
[04:01:00] time and they basically have this, I don't, is uninitialized.  Basically if previous doesn't exist, they know it's new.  So then they just map.
[04:01:09] It's a map function.  So they take...
[04:01:11] the source and they map, they call it on everything and they return it.
[04:01:15] If.
[04:01:16] Since the last time this ran,
[04:01:19] that source Adam has updated.
[04:01:22] they get the list of diffs. If the diffs, if there's too many diffs, like too much history,
[04:01:26] that they can't compute the whole diff  because they have to keep it over time, I guess, right?  Because things can be dormant and wake up.  They also just map everything and start over again.
[04:01:37] But if they get past that and they have the list of diffs, they then go through the list of diffs.
[04:01:43] from Imer. So these are Imer's diffs. They could be any diff system they wanted to. And they
[04:01:49] look for operations like add and they actually update the immutable draft.  Immer gives you like the immutable version of the next version  and under the hood makes immutable data.
[04:01:59] And so they apply the diff
[04:02:01] Here.
[04:02:02] And then
[04:02:04] It gives you the next state, and then they're...
[04:02:07] translated version of the diff.
[04:02:10] So instead of, you know,
[04:02:12] having the source it's like their version of the diff with their representation of the  object being mapped and finally they return with diff
[04:02:20] both the next value and the patches.
[04:02:24] Yeah, I mean...
[04:02:26] Yes. I saw this and I'm like, no one is ever going to use this.
[04:02:32] Okay.
[04:02:33] Like,
[04:02:34] This seems...
[04:02:35] This seems complicated, right?  Like there's a reason I ship map array.
[04:02:40] This is basically map array if done in a generic thing, which is cool.  It's cool to have this power.  The payoff is this.
[04:02:46] Thank you.
[04:02:47] If they make an atom, an array of these names, and then they map it and their map
[04:02:53] reverses something so now they're obviously initially when he gets the data it goes through and when they
[04:02:59] call the value so they'd use dot value like view they get everything with a name reversed and it's  been called five times but
[04:03:06] If they go and they add a new value,
[04:03:08] It's smart enough to only...
[04:03:10] call
[04:03:12] the map function once,
[04:03:14] and add that new value to the end.
[04:03:16] And similarly, if they change one of the names,
[04:03:19] It only calls it one more time.
[04:03:21] and they don't need to map it again.  And finally, if they remove something,  they don't even call the map function.
[04:03:26] MapArray from Solid does this, but what they're provided here is a completely generic...
[04:03:32] like generalized approach to, to making these sort of diffs. But,
[04:03:38] Yeah.
[04:03:41] I should drop this in chat.
[04:03:48] Thank you.
[04:03:49] Thank you.
[04:03:51] Right.
[04:03:52] So, I mean, this is pretty cool. They talk about history length. Sometimes, you know, you have to choose because otherwise you save too much. They can't keep history indefinitely. If there's not enough, then it'll not be able to do the incremental bit. It'll have to compute it all.
[04:04:05] They also have like
[04:04:07] a way to set it in options so that you're
[04:04:11] you don't have to put in the body or when you write.  So it always diffs like when you do a write or something.  I think these are better APIs than what they showed above.  And then they explain how to test this stuff because
[04:04:22] Testing your muscle stuff is probably a pain in the ass.  Okay, cool stuff.
[04:04:27] Thank you.
[04:04:28] I...
[04:04:30] said here, this is how I create something like MapArray and userland. You can see how the logic is  actually not really any simpler either. My observation here, it is still a single signal,
[04:04:38] Immutable changes, nested changes can't independently trigger, right?
[04:04:42] If you look at this, they're just talking about computants.  They don't convert things into a store.  Signia has no concept of store.  Okay?
[04:04:50] Every node in the chain needs to participate.
[04:04:52] each needs to produce their own diff. If anyone breaks the chain on the diffs,
[04:04:57] then they end up doing all the work.  So you're suddenly now communicating not just in values,  but communicating in diffs where...
[04:05:05] "you want to consume this."
[04:05:07] And then also each node needs to apply the diff.
[04:05:10] Because they need to be able to communicate their realized value.
[04:05:14] you know, because you have to handle the initialization case or reset downstream.
[04:05:18] Thank you.
[04:05:20] So,
[04:05:22] What I'm getting at here is that we are dealing with immutable data.
[04:05:25] Right?
[04:05:27] references will be lost.
[04:05:29] Diffs help get this information back, but then you pay the cost of the whole chain.
[04:05:34] Right?  Because you have to keep it going.
[04:05:36] And in some cases, like fresh data from the server, there's no stable references.
[04:05:41] Something needs to key the models
[04:05:45] And that isn't IMR. IMR doesn't key models. They tell you to use like object...
[04:05:50] formats like what we used to use when, what was it like?
[04:05:54] create selector and redux or whatever they tell you to
[04:05:56] to like write where the two objects where the key is the ID.
[04:06:00] like the property name is the ID.  They don't,
[04:06:02] They don't key models.
[04:06:04] you know like there's no you know like when you're going over a list you know how you map over and  react and you have a dot key when you run reconcile in solid there's a key field that does the diffing
[04:06:16] you know,  that has a key.  Amir,
[04:06:18] doesn't do this.
[04:06:20] Signia doesn't do this.
[04:06:24] And so I was like,
[04:06:27] Yeah, like this doesn't work because yeah, I have the diff. But then when I get to actually rendering my DOM nodes, I'm going to have immutable data like it's like if something changes the whole object changed. I'm not just changing a field. I don't have stable references. And I'm like, how the hell is this? Can I use this?
[04:06:41] And then it occurred to me,
[04:06:43] It's React.
[04:06:45] They're expecting React to do the key thing.
[04:06:50] So I went on their website and I looked and I confirmed TL draws created in React.
[04:06:56] Bang, everything makes a lot of sense. People pointed me to the solution.
[04:07:00] for incremental stuff and I was looking at it and I took a long time thinking about it and then I'm like,
[04:07:05] This makes a lot of sense.
[04:07:07] if you're using React.
[04:07:10] Right?
[04:07:12] You communicate diffs all the way down. How else are you going to do it in React?
[04:07:17] How else do you communicate that's changed?  So every node, you diff and you apply,  and you diff and you apply, and you diff and you apply.  It's just like a series of endless diffing.
[04:07:27] And then I'm like, I'm looking at this and I'm like,
[04:07:29] We didn't save diffs.
[04:07:31] by
[04:07:32] by by getting away from what what we're talking about over here with this local diffing you know  i was hoping that we'd only different ones to communicate that's not what's happening here  technically the last thing in the chain doesn't need the diff like
[04:07:44] in this thing example that they put here.
[04:07:47] They don't need the return diff.  They don't need the produce patches.  If there's going to be nothing downstream,
[04:07:53] They don't need to. They just do it. Of course, the last thing in the chain doesn't need the dip.
[04:07:57] But,
[04:07:59] everything right down to the original signal is diffing. So,
[04:08:03] You write the new value of the signal, it diffs.
[04:08:06] The computed gets it, applies the diffs.  Everyone's just diff, diff, diff, diff, diff, diff.
[04:08:13] Right? Like,
[04:08:16] To be fair, they don't need to generate the diff downstream. You could take the previous diff and then apply it. But you have to understand, like, pretend you're going from,
[04:08:23] strings to objects. If you're going to update,
[04:08:27] You still have to update the diff if you realize that you have to
[04:08:32] move, swap A and B.
[04:08:35] A and B are strings.
[04:08:38] in.
[04:08:38] in it has a string value in the original diff when you get here you're going to have to update  the value to be the objects in those locations in your derived diff so
[04:08:49] You can avoid diffing along the way if you...
[04:08:53] as you map over and apply the changes you also
[04:08:58] create your diff from the old diff. So there are ways to avoid more diffing here,  but I don't want to write that code. In a sense, him using emergent diff saved me
[04:09:08] that effort.
[04:09:09] Because,
[04:09:10] As you map stuff, as I said, the same diff doesn't transcend the whole...
[04:09:17] thing. I mean, the operation might be the same, but the value, which you might need in some cases,  the actual result value has to represent
[04:09:26] And the partial resolves of the value for the diffs have to represent the current thing you're working on.
[04:09:36] *sniff*
[04:09:39] This is blockchain.
[04:09:44] Thank you.
[04:09:45] What I'm getting at here is like,
[04:09:49] This...
[04:09:50] doesn't actually solve my problem in this whole article.
[04:09:55] Like if you were going to...
[04:09:58] If you're going to do map array and you want to update the index,
[04:10:04] It's...
[04:10:05] Unless the only way to avoid running that map function again would be to write to a separate signal.
[04:10:11] This assumes that you run the map function again when...
[04:10:14] when the index changes.
[04:10:16] Right. Like it's there's only one single signal. This doesn't actually help us.
[04:10:21] It's.
[04:10:21] better
[04:10:23] It's consistent for something like React, but...
[04:10:26] It's completely wasted on our granular updates.
[04:10:29] I'm not saying that the Signia style API can work.  It's just if we wrote to stores rather than immutable drafts,
[04:10:36] that would be the end of the line for the diffing.  We'd just have fine-grained updates from that point.
[04:10:40] My thinking after looking at local diffs was that diffing could avoid future diffing.
[04:10:45] but it doesn't. It actually lends to more. What it does do though,  is allow immutable atoms to act fine grained-ish. In the same sense,
[04:10:52] the React compiler,
[04:10:54] makes React fine-grained-ish.
[04:10:57] But why settle for substitutes when you have the real thing?
[04:11:01] Right.
[04:11:03] Yeah, I'm glad I looked at it because I thought Signia was doing something that we're missing.  And I think it has good points.  But the problem is it's already in that mindset.
[04:11:11] that it can't do better.
[04:11:12] And I think we can do better, right?  Like basically if reacts your target,
[04:11:17] You're setting the bar far too low. Okay, so
[04:11:24] Yeah.
[04:11:24] I talk about Crate Drive Store again for a moment.
[04:11:27] But let's return to our Trello demo.
[04:11:31] Now this exercise is I'm just going to use the Signia API, but for our purposes. Okay.
[04:11:37] instead of doing immutable data, right?
[04:11:45] You guys are like trying to figure out like client server models to avoid this.  If this is not, this is a pure, I'm talking purely from a data derivation standpoint.
[04:11:55] thing, I know you guys are like,
[04:11:58] Thank you.
[04:11:59] Ideally, the server will be able to talk in diffs in the future.
[04:12:04] And then we'll be able to immediately convert them into stores.
[04:12:07] and then go fine-grained, which is better than us diffing.
[04:12:11] but I'm just talking about,
[04:12:14] The Trello example, like...
[04:12:17] Basically, we have a list of optimistic updates we'd like to apply incrementally. It'd be great if we only apply the new ones as they came in and when new data came from the server,
[04:12:26] we could reset and apply all our current mutations.
[04:12:28] It would be even better if new models that showed up optimistically could match the data on the server when it refreshes.  What I mean is if we optimistically add a model...
[04:12:38] you know, somewhere, and then the server comes back with the fresh data.
[04:12:44] It'd be sweet if they would actually like not re-render that item.  That's something that I can't easily do today in solid, I don't think.
[04:12:53] Um,
[04:12:54] Maybe we can.  Yeah, we can.  Never mind.
[04:12:58] But this was a failing my previous exploration. I assumed we didn't want to diff at all, right?
[04:13:02] But no other solution is...
[04:13:05] really suggesting that you don't diff, right? In fact, it suggests you do more diffing.
[04:13:10] What we want to do is save real downstream work.
[04:13:15] So this is my funny take on Cigni APIs. Pretend
[04:13:20] we have
[04:13:22] create async and have a history length of one.  So just remembers if it's changed or not.
[04:13:29] And then
[04:13:30] Inside our Create Drive store, we got this last epoch.  Again, I'm not suggesting this is API.  This is just a mental exercise.
[04:13:36] And then from our mutations signal that I haven't explained, we get the diff since the last epoch, okay?
[04:13:42] Then if we don't have a previous value for the board, so that's the first
[04:13:47] realize board so that's the first time or diffs equal the reset value we don't we can't do the diffs or board
[04:13:53] has changed. So it's like a new board, the server is just updated.
[04:13:57] we just apply all the mutations to our clone of the board.
[04:14:02] So essentially, we generate our new immutable data.
[04:14:07] with the mutations applied and we div it.
[04:14:10] to a store which tells us the fine-grained updates.  Otherwise, we apply our mutations
[04:14:16] to the previous state,
[04:14:18] And from the diffs, we just grab the latest, we have the latest diffs, we look for new operations  and then we basically just grab all the values and apply them. And then my applied mutation is,
[04:14:30] Just like the logic I had in the last thing where it's like, if mutations create note, do this, do this.  So ideally, so what ends up happening here, I mean, this is an approximation, but what would happen is when...
[04:14:42] the board,
[04:14:43] starts, there's no mutations, and it just
[04:14:46] Basically,
[04:14:47] produces a store of the board, the Realize board. Then
[04:14:51] when the first mutations come in
[04:14:56] it goes in here and it applies all the the mutations that it has essentially
[04:15:03] Um...
[04:15:04] And it...
[04:15:05] puts them on top.
[04:15:07] So we added a new card to the board.
[04:15:09] then someone also drags the card.
[04:15:12] at this point, gets only the new one.  So it only takes the board that had the new card on it,  and then it applies just the dragging.  So it's only, instead of recalculating the whole thing and diffing,
[04:15:23] It's only adding...
[04:15:25] The...
[04:15:27] it's only adding the
[04:15:29] the one change.  We're not...
[04:15:32] We're not like...
[04:15:34] resetting the board. We're just applying the one fine grain change and just notifying,  oh, this one moved.
[04:15:40] And we keep on doing that. And then the transaction ends.
[04:15:44] and the optimistic updates are done, and then the board updates, and then it just gets the current state of the board and applies any mutations, which there aren't any at this point. So it just basically clones the board again.
[04:15:56] What's cool about this is because the previous state
[04:16:01] Add the new card on it.
[04:16:04] And we're doing the diff there against the original state of the board.
[04:16:09] if the IDs match or whatever,
[04:16:11] then we actually get to keep
[04:16:13] the object,
[04:16:15] from the optimistic updates and all the mappings and actually reuse it
[04:16:20] because it'll recognize that it has the same like key because we're,  we're handling like the key reconciliation here with the drive store.
[04:16:27] So,
[04:16:28] Um,
[04:16:30] Basically, I
[04:16:31] Yes, on every change, we are doing a diff. We're doing a reconcile call.
[04:16:35] but,
[04:16:37] we notify the minimal amount of stuff on every change.
[04:16:41] So downstream work is basically minimized. And we only because we only apply exactly each thing we need to when we need to. And the smart part about this is when we reset the board, if there were some mutations,
[04:16:53] we do it all in a single go.
[04:16:58] Yes, this does expose the clock.  See, last epoch, last epoch, last epoch.
[04:17:04] But let me continue writing. And then for how did I make the notes? Create memo.
[04:17:09] And then, you know,
[04:17:11] compute 10, let's say, and compute dev.
[04:17:14] See, I don't know if this API is preferable or would require bring something to do diffs like immer.
[04:17:18] In simple case, but by getting a diff from mutations and knowing it, the board was updated since the last time create director ran, we can create incremental immutable updates and have them reconcile against the stable reference store.  That means optimistic updates could be applied one by one without triggering everything in that even things added during optimistic updates would retain references if they still existed after the board was updated from the server.
[04:17:39] Basically, from my perspective, this completely solves the problem.
[04:17:42] without any of the complexity that I was talking about. It diffs more than I would like, but it's not, like, people can always do what I showed last, originally, let me duplicate this, like,
[04:17:53] There's the simple solution.
[04:17:57] which is...
[04:17:58] Um,
[04:18:01] Which is where did I?
[04:18:04] Yeah, there's a simple solution, which is
[04:18:07] Where's deriving two stores? Did I not show it with Trello?
[04:18:11] Yeah, there's this simple solution, which is like you can just like literally just generate it on the fly.  And every time.
[04:18:17] create everything.
[04:18:19] and diff it.
[04:18:20] which is probably...
[04:18:24] Find.
[04:18:25] or there's the more optimal solution
[04:18:28] which does...
[04:18:31] saves the work of applying the mutations the whole time.
[04:18:35] Honestly, I don't know.
[04:18:41] What I think I'm saying is regardless, I think there's only one drive primitive, the create drive store.  Like...
[04:18:48] I don't think there's...  If you want to save the references  of the new objects coming in from the server,  you have to diff at this point.  Like, there's no way to diff earlier.  Like...
[04:18:59] in the store, you have to push the diffing to the final reconciled data object.
[04:19:04] which is like our realized board.
[04:19:10] which means that we're not going to be able to save on the diffing here.  We can just save on the amount...
[04:19:16] of...
[04:19:17] temporary objects and the amount of work that we apply on each update.
[04:19:21] It might not even matter, honestly,
[04:19:23] But I just, what I'm getting at is I don't, I was trying to eliminate or decide if we needed like create projection.  I start designing these other primitives in the last article towards the end and they don't really work.
[04:19:38] I think incremental computations are interesting prospect. I preferred an API where the decisions decide outside the computation.
[04:19:44] I think, so no with diff.
[04:19:46] This will have perf overhead. So it definitely needs to be opt in, which suggests between that and making it customizable, our built ins couldn't be different where
[04:19:54] I think it isn't just diffs that are interesting, but the idea of when last run.  This answers the question of did I trigger this computer to run?  Even if you didn't immediately, if it has since run since your last change, that's probably good enough.
[04:20:06] I think something on this dimension would be useful, even without the diffing ability built in.  Like, do mutations need to be a separate memo?
[04:20:15] to communicate the diff, can we accomplish the same thing without it being built in?
[04:20:20] But I'll have to go to a different thing.
[04:20:22] Anyway, yeah, I'm not suggesting we adopt this.  I just wanted to show I actually think there isn't,
[04:20:27] My thinking is I don't think there's actually many options here.
[04:20:33] Oh, gotta read. Sweet.
[04:20:37] Who did I get a raid from? So I got to go look at...
[04:20:41] Thank you.
[04:20:46] Oh, OK.
[04:20:48] we got here philippo 11 is rating with the party 20 thank you very much that's awesome
[04:20:53] Welcome to the stream.
[04:20:55] Thank you.
[04:20:56] You guys came at a good time because I basically just finished a really complicated look at
[04:21:02] how to do derived stuff in the
[04:21:06] with lazy reactivity and stores. And
[04:21:11] My conclusion is like,
[04:21:14] I'm not sure I'm going to need use cases to find if we need other primitives.  I'm pretty content right now that I think
[04:21:21] with one drive store primitive that I designed out on the stream that we can do most things and
[04:21:27] It's another discussion of whether we actually need
[04:21:32] this whole incremental thing. My gut is we probably actually don't. So anyway.
[04:21:39] I know that's a terrible summary, but...
[04:21:42] That's where it is.
[04:21:45] If anyone actually has any questions about what I was talking about,
[04:21:50] Thank you.
[04:21:51] So basically, yeah, I don't know.  Incremental computations seem like an optimization,  but they don't get us away from diffing.  And in solid, I think ultimately we want to diff to a store
[04:22:03] as soon as possible so we don't have to communicate diffs the whole way down the chain.
[04:22:09] if we wanted to communicate in diffs all the way down the chain,
[04:22:12] then
[04:22:14] we'd be using React and it just seems wasteful because
[04:22:19] even though it saves us the knowledge of
[04:22:22] what has changed further down
[04:22:25] it doesn't actually help with the fact that
[04:22:29] like
[04:22:32] Like we're just hiding the fact that we're losing the information by losing the references and we don't want to lose the references anyways.
[04:22:51] Relevant talk from people, Jane Street.  Yeah.  Yeah, I...
[04:22:55] I haven't, I don't know if I've watched this one.  That might be cool for another time, but...
[04:23:01] Let me...
[04:23:03] drop that so
[04:23:11] Yeah, I haven't seen that one, actually.  I think it's very relevant.  I'm going to check it out.  Thank you, Dev.
[04:23:20] Thank you.
[04:23:21] But yeah, I mean, the reactive library is called incremental.
[04:23:27] Maybe the ability to communicate diffs.
[04:23:32] has some level of value
[04:23:34] I think at minimum, knowing...
[04:23:37] if you're the reason this computation ran, like this memo ran, has value.
[04:23:43] Like if we just had that concept of saying like, hey, I'm why this ran.
[04:23:48] we could go back to our example and be like, OK,
[04:23:53] This is due to the board reset. Do this.
[04:23:55] And then the mutations don't have to have some fancy format.  If you wanted to actually have an incremental mutation approach with diffing, you could just
[04:24:05] handle that in the mutations.
[04:24:07] Right? Like, it doesn't need to be built in the framework.
[04:24:12] as long as you can, the key part for this to work,
[04:24:16] is
[04:24:17] like the data set that you return from the mutations could be like,
[04:24:21] have a timestamp. You could invent the timestamp yourself.
[04:24:24] I think that the key part
[04:24:27] of this is actually knowing when the board reset.
[04:24:31] That's actually the most important thing.
[04:24:36] Thank you.
[04:24:37] Is it something that's in the control zone?  No, I mean, maybe eventually.  The stuff that I've been talking about is...
[04:24:43] is like
[04:24:45] The signal proposal is like,
[04:24:47] maybe signals 1.0 maybe like like
[04:24:50] We're talking about like
[04:24:53] We're a few steps removed from it.  Like, maybe.
[04:24:57] But I...
[04:24:57] I like this.
[04:24:59] There's a lot of really cool areas to explore, and I don't think we should be hasty moving  stuff into the signals proposal just yet.
[04:25:06] I like keeping it as minimal as possible.
[04:25:10] Thank you.
[04:25:16] Huh?
[04:25:19] Yeah, so we're listening.  Yeah, but see...
[04:25:21] You can generate if we could have it so that stores can generate like a diff output if they want to communicate it. I think it's also be sweet if the server talked to us in diff output, that would be sweet to.
[04:25:34] But none of that actually stops us from using the primitives that I'm talking about here, I think.
[04:25:38] Right, basically, if the server sent us diffed output, it'd be just like these mutations, and then you'd write logic to take the diffed output.
[04:25:46] from the server.
[04:25:47] and then apply them to your store.  So I think...
[04:25:52] I don't know how...
[04:25:58] core this needs to be. I mean, it's interesting.
[04:26:06] Yes, this is the other reason why I'm looking at this, because I want to...
[04:26:10] I want to, I, my gut is, is if the sync engine can talk in diffs, then we, we,
[04:26:18] immediately taking those diffs and realizing them to stores.
[04:26:22] is going to be amazing for performance because it just moves removes all the
[04:26:28] unnecessary crap along the path.
[04:26:34] Thank you.
[04:26:38] Yeah, except the problem is they give us realized data.  I need them to not give us realized data.  They give us realized data and then expect react to diff again.
[04:26:48] This is the problem right now.  Everyone's building for React.  Even the Signia API is building for React.  And we already can do better than this today.  It's like, let's go, you know?
[04:26:58] stop building for a system that's innately inefficient in this case. React server components
[04:27:04] That is a diffing problem.  That is...
[04:27:07] what they're built for.
[04:27:08] doing this real-time stuff, you guys are picking the wrong framework.
[04:27:13] Like, not you, Dev, but like...
[04:27:16] Like it's,
[04:27:17] EA.
[04:27:19] it's frustrating to see people like Dax go, oh, you know, I'm having a hard time with my thing with this, you know, on sync engine thing.  And it's because like their APIs are geared towards React.  It's like, yeah, we're going to.
[04:27:30] lose information and expect you to gain it back and
[04:27:34] And then like,
[04:27:35] Yeah, it's very frustrating when it's like really obvious to me that
[04:27:41] like using React for these use cases is--
[04:27:45] non-optimal.
[04:27:49] There's cases where React won't matter.
[04:27:51] This is why you use signals like,
[04:27:55] You guys, yeah.
[04:27:58] Thank you.
[04:28:02] Amen.
[04:28:03] Huh?
[04:28:05] Right. Like if you just communicated to me, like in a diff format, like we were showing here with ad patch like Emer, like.
[04:28:12] We could do amazing things.
[04:28:14] things because
[04:28:15] As I said, instead of communicating it down, we can resolve it immediately
[04:28:19] at once and then push it out
[04:28:22] across the whole
[04:28:25] map, without re-rendering everything, without going through the process of creating a whole bunch of projections just to dip them in. We can just be like,
[04:28:34] First step.
[04:28:36] Apply the diff.
[04:28:38] change the littlest thing like
[04:28:42] Like,
[04:28:43] If we were talking in diffs, we don't even need...
[04:28:49] Thank you.
[04:28:50] We don't even need to diff the actual, we don't even need to do any diffing here.
[04:28:55] If we're talking in diffs,
[04:28:57] we wouldn't use create async like this. We would just
[04:29:02] Okay.
[04:29:03] You gave me another use case to think about.
[04:29:05] Let's pretend create async returned
[04:29:07] diffs rather than realized data.
[04:29:12] I'm not going to do that right now, but I think it's a good thing to think about.
[04:29:18] Okay.
[04:29:20] Thank you.
[04:29:21] Oh, last thing before I do this week in JavaScript very quickly, because I don't have very much.
[04:29:27] I went back.
[04:29:30] to I don't know if you guys remember this.
[04:29:44] you
[04:29:45] I showed this really simple example where you set account and then a console log.
[04:29:50] count, double count, and then the reference in the DOM,
[04:29:53] And I mentioned how every framework had a different result.
[04:29:58] I wrote an article about this.
[04:30:00] This was a realization while we were working on Marco, just like how different frameworks are working.
[04:30:05] And,
[04:30:08] I went back here because when I was working on some of those crazy drives solutions, you know, about notifications and stuff, I realized that.
[04:30:17] that I could generalize this concept again across frameworks and the trade-offs.  So I made a table.  I didn't post it to Twitter.  I wasn't sure if it should post to Twitter.  I thought maybe I'd like to work on it with you guys.
[04:30:35] Okay.
[04:30:39] Sorry, the question, it's a diff of data, but does the diff,
[04:30:42] maps for UI in zone zone.
[04:30:45] I mean,
[04:30:46] It does, but...
[04:30:48] the data doesn't always map to a single point in the UI, unless you're literally describing  the component tree with the data that you're diff, like one for one, you'll find that,
[04:30:58] single points of data will map to multiple places in the UI. So  while sometimes the hierarchy is loosely related, I don't think it's like,
[04:31:07] exactly the same thing.
[04:31:12] Which one was right? Yeah, that was my joke, right?
[04:31:16] I just being Twitter aggressive. Did I say which one's right?
[04:31:20] Which are more correct.
[04:31:23] But the reason I wanted to bring this one up is...
[04:31:27] Obviously, I realized that this is just...
[04:31:30] If you look at pretend like they're all written in signals, this is just a question of what are you deferring?  Are you deferring the right?
[04:31:36] deferring the notification, which is the propagation of the change, but not necessarily like the work. Are you
[04:31:42] deferring the effects or are you deferring nothing?
[04:31:46] So, you know, React...
[04:31:49] Svelte, old Svelte.
[04:31:51] View.
[04:31:52] and then solid today, right?
[04:31:55] Biggest benefit of deferring the rights, it's consistent.  There's no way to be inconsistent in this model.
[04:32:01] biggest benefit of differing notification, it's efficient. Obviously,
[04:32:06] this is efficient too.
[04:32:08] But,
[04:32:10] It's, you know, this is like why you choose this way.
[04:32:14] Biggest benefit of deferring effects, it's incremental.  You can build, you can write code in such a way that you can update stuff and then
[04:32:23] read from that stuff and add stuff, like you can incrementally apply your changes.
[04:32:28] right you can't do that when your values stay in the past as easily
[04:32:32] And if you defer nothing, the biggest benefit is it just feels natural.  It feels the way it should.
[04:32:37] Similarly, the largest downside of deferring the right is it feels very unnatural.
[04:32:42] The biggest problem with deferring the notification is it's inconsistent. It's the most inconsistent model.
[04:32:47] Biggest downside of using effects. I had a hard time with this one. The only argument you could say is it's not synchronous anymore, you know,
[04:32:54] compared to like doing nothing.
[04:32:57] And the biggest benefit of doing nothing is it's wasteful, right?  And to illustrate this, obviously, my state-derived effect is
[04:33:06] When you defer the writes, it's 0, 0, 0.  When you defer the notification, signal updates, but then the derived and whatever doesn't.  If you defer the effects, it's 1, 1, 0.  And if you defer nothing, it's 1, 1, 1.
[04:33:16] Um,
[04:33:18] And similarly, this consistent field means...
[04:33:21] that when you defer the rights you are consistent because these are all zero zero zero  similarly when you do nothing you're consistent they're one one one
[04:33:27] when you defer the effects,  you're internally consistent because you're,
[04:33:32] reactive graph is consistent, but your outputs are not. And when you defer the notification,  you just aren't consistent.
[04:33:39] at all because you can like write your signal and read it and then write and then read a computer  and get the old value.
[04:33:44] This is why people...
[04:33:45] have issues with old Svelte. Like some of the people who have like really hardcore in it, they
[04:33:51] This is kind of broken feeling.  But similarly, if you have a signal that starts at zero,
[04:33:57] set it to one and then set it back to zero. In theory,
[04:34:01] If you defer right, you wouldn't have to run anything.
[04:34:04] Like, I don't know if React probably still does,  but in theory, you wouldn't have to run anything.
[04:34:08] If you defer notification, you again, wouldn't have to run anything because it's back at its initial value.
[04:34:14] If you defer the effects,
[04:34:17] Generally, you'll run once.
[04:34:20] Because, uh...
[04:34:23] Well, it won't, because when it happens, it's too late, like you've notified. So it will cue the effects, and then they'll see that it's the same value at the end. And if you defer nothing, it runs twice, it's everything goes to one, then everything goes back to zero.
[04:34:41] So yeah, what I said, yeah, incremental again, this is the idea that you can like build up values
[04:34:47] by reading them and then like
[04:34:49] changing them and updating them. Only these two are, these ones aren't. And then that's that. I don't know. It was just something I was thinking about, again, because
[04:34:58] When you're...
[04:35:00] in a sense, when you're...
[04:35:03] bringing Crate Compute into the chain, you're
[04:35:06] you're deferring notification of certain things. So I just wanted to revisit the set of trade-offs here and kind of like highlight why people might
[04:35:17] want to do one thing or the other.
[04:35:22] I imagine that Svelte ruins are the same as Vue.
[04:35:26] And our proposal for solid 2.0 is the same as view, but I'm not sold.  We might stay over here.
[04:35:34] Consistent means like literally like,
[04:35:37] If you have state...
[04:35:39] the drive state
[04:35:41] And the result of the effect should be the same at all points.  Like this is completely consistent.  Like,
[04:35:47] Mm-hmm.
[04:35:47] In my example, I showed it, look at this code.
[04:35:52] use state, use memo, and then there's a ref to a DOM element.
[04:35:57] If you're completely consistent,
[04:36:00] these should be the same, which they are in Solve and they are in React.  In Vue and I think Svelte 5,
[04:36:06] you're going to see that internally, like the derived value and the state of the same,  but the effect is deferred, right?  So it's like internally consistent, but externally, you know, there's a lag.
[04:36:16] Thank you.
[04:36:17] But in current Svelte, you can update state and then read for the derived value and it's not updated.  So I could say that is not consistent.
[04:36:24] Incremental.
[04:36:25] is the idea that like when you set
[04:36:28] state in React, like update some state.
[04:36:32] you can't
[04:36:35] You can't look at, say, some derived state of it and use that to update something else.
[04:36:45] Right.
[04:36:46] or look at the state itself.
[04:36:48] like which is basically like you have to like project out the data that you like if you set  state you also have to hold a copy of that state to update the other state  and like figure out the drive is you can't actually
[04:37:00] like
[04:37:01] the
[04:37:03] Right, like in a deferred effects system like Vue,
[04:37:09] Technically, at the time of the pure right, you actually don't do this work.
[04:37:16] It's internally zero, but the second you read it, it realizes that it needs to update its value because it's dirty and it calculates it, which means that...
[04:37:24] increment, like if you're trying to apply changes, you can see all the changes immediately
[04:37:30] upon observing them.
[04:37:31] which is not true in these two.  So these two don't let you like incrementally,  like do multiple mutations in sequence,  where these ones do.
[04:37:44] Thank you.
[04:37:45] Thank you.
[04:37:48] Thank you.
[04:37:55] I mean...
[04:37:56] Write is consistent. That's what I'm saying. Write is consistent, yes.
[04:38:02] Nothing is consistent.  It's the ones in the middle that aren't.
[04:38:06] Thank you.
[04:38:11] Anyways, okay.
[04:38:14] I don't know. Maybe I should post this to Twitter.
[04:38:17] Maybe having to explain what this means is too complicated.
[04:38:22] Mm-hmm.
[04:38:23] But I...
[04:38:25] Just thought again about this a little bit.
[04:38:28] At certain points, like when I wrote the article, I was actually a big fan of this temporarily because it just made things easier.
[04:38:34] I think this is still the best place to be.
[04:38:39] or this.
[04:38:41] There's benefits to this.  So like what I love about this is you just don't care.  Basically anything but this, this is the worst one.
[04:38:47] So it's good that Svelte's got getting rid of it.
[04:38:51] It's also kind of crazy when you think about the Spelk community being accepting of this for so long.
[04:38:55] Because this is probably the worst.  But...
[04:38:59] Again, Crate Computed puts us into a partial zone of this. So yeah.
[04:39:07] Thank you.
[04:39:12] Setting state in effects is fine though, because it's a start of the cycle again.
[04:39:18] Like if you set state in an effect,
[04:39:21] It's.
[04:39:22] Yeah, I guess.
[04:39:24] Yeah, yeah.
[04:39:27] Anyway.
[04:39:34] OK, let's just go through.
[04:39:37] And let me...
[04:39:40] Give me two seconds.
[04:39:42] This will be a fast one.
[04:39:44] Thank you.
[04:39:46] I want to talk about this week in JavaScript.
[04:39:50] I don't expect there to actually be a ton this week.
[04:39:55] Because
[04:39:57] I was locked out of Twitter.
[04:39:59] But...
[04:40:00] you know,
[04:40:01] We'll see what I've put aside here.
[04:40:06] *sniff*
[04:40:07] Yeah.
[04:40:09] All right.
[04:40:13] Back to sharing my screen.
[04:40:17] oh yeah quick question no uh this what i was showing before was not about push versus
[04:40:23] poll.
[04:40:24] specifically.
[04:40:26] um
[04:40:29] Thank you.
[04:40:31] They all use poll-based.
[04:40:34] I guess they could use push.  I don't know.
[04:40:37] But everything I'm talking about is pull-based, essentially, or push-pull.
[04:40:42] I think I'm not even like,  I'm just talking in general,
[04:40:45] in terms of how you handle it.  React fits into that table as well as anything.  I think you can view reactivity these days as a general concept,  even if there's no signals involved.  I think we understand the ideas well enough,  largely thanks to there being a couple different models  and seeking that convergence.  So, okay.  So last time I streamed was June...
[04:41:09] 28th-ish.
[04:41:11] Bye.
[04:41:13] All right, there we go.
[04:41:18] Let's see here. June.
[04:41:25] Not there.
[04:41:31] Speaking of suspense, what's suspense for anyways? You know what? Earlier someone asked for a good introductory blog post for suspense.
[04:41:38] I probably this one, this is the other side.
[04:41:42] This is probably the one that I should have
[04:41:44] should have linked. I had a theoretical one, but this one is actually like,
[04:41:49] more of like how to use suspense and how it works.  This is probably what they were actually looking for.
[04:41:54] No, a little bit late, but I...
[04:41:56] But I forgot about that one.  OK, cool.
[04:42:00] Well, I...
[04:42:03] This was actually...
[04:42:04] A pretty good video from Theo. I actually...
[04:42:06] talked about this at the end of my last stream he has the same concerns i had about the js uh  survey showing more pessimism of around new solutions he wrote he made a whole video about  it which is cool um i'm not sure he probably recorded it even before i did my stream i didn't  see him do his stream but it's i it's
[04:42:26] Fred from Astro.
[04:42:28] pointed it out.
[04:42:29] To us,
[04:42:30] actually in the same shared Discord channel.  And I think we both were like,  okay, we should talk about it  because he was right.  Like that's what the data looks like.  So good advice.
[04:42:42] Good video. Oh, damn it.
[04:42:46] - Bye.
[04:42:48] Thank you.
[04:42:49] Thank you.
[04:42:50] You're right.
[04:42:52] Sorry.
[04:42:53] I did copy the same hero from before.
[04:42:57] This is the article URL though. Put it up on the screen for a moment too. Okay.
[04:43:04] Thank you.
[04:43:05] All right.
[04:43:06] I don't have much more to say because I literally gave this speech at the end, but hearing Theo's opinion, I think is interesting as well.
[04:43:18] I tried to do a poll to convince people that we should...
[04:43:23] you know, change...
[04:43:25] uh,
[04:43:27] SolidRouter's name for cache function.
[04:43:31] It was pretty...
[04:43:33] evenly split, leaving it
[04:43:36] And
[04:43:37] I wanted to test one of my suspicions, which is that people would not go for data.
[04:43:42] Data, I'm not going to lie, was my first choice.
[04:43:45] Query has...
[04:43:48] too much other connotations
[04:43:50] Data literally means anything. So
[04:43:53] And it let me talk about it like as a thing like router data or route data.
[04:43:57] But...
[04:43:59] I left it as cache when I did the release.  There's a new version of Solid Router out,  which actually has some nice fixes on types.  And, uh...
[04:44:08] and
[04:44:09] renames load to preload, which makes it more, make a lot more sense. So basically,
[04:44:15] I'm.
[04:44:16] I decided not to move on the cache function rename as of yet.
[04:44:19] But it might still happen in the future.
[04:44:22] Mm-hmm.
[04:44:23] But in general,
[04:44:25] uh really happy about the feedback here and a lot of people helped me discuss and understand  the use cases one of the interesting things that came out of this is people wanting just like a
[04:44:35] router,  router,
[04:44:37] rapper for things that...
[04:44:40] like aren't even...
[04:44:42] related to the whole data of...
[04:44:46] mechanism, which
[04:44:48] I don't know. I think it's interesting. It's definitely something worth reviewing.
[04:44:55] I'd rather be explicit caches, meaning indie duping isn't cash per se. Yeah, but it's also not
[04:45:00] This thing does too many things to be called a specific thing, I think is the problem.  I actually talk about it a bit in the discussion.  It does deduping, but it also does reactive invalidation.
[04:45:10] It,
[04:45:11] Thank you.
[04:45:12] also has a very short term cash.
[04:45:15] that it has, and it also
[04:45:18] Yeah, it's...
[04:45:20] And the client has a short, I mean, I guess it's request length on the server, but it has a short-term cache for deduping.
[04:45:26] I guess, like...
[04:45:28] And it also adds the router ability APIs, like being able to throw redirects and stuff.  So it does a lot of things.
[04:45:38] Um,
[04:45:40] It's very...
[04:45:41] tailored to the router.
[04:45:48] Yeah, it might not be like a cash in the typical sense, though.  I guess you could argue that it's not a cash.  It's just deduping, revalidation.
[04:45:57] and handling like
[04:46:00] response based APIs for routing.
[04:46:06] Yeah. OK.
[04:46:08] Anyway, that's
[04:46:11] I, I, I left it for now.
[04:46:13] We need Java white names.
[04:46:16] Uh...
[04:46:17] Right before I got my account snatched, Shy made this.  I don't know what he was...
[04:46:21] thinking but
[04:46:23] I'm using nonetheless.
[04:46:26] Steven Signal.
[04:46:29] Yeah.
[04:46:31] Anyway...
[04:46:34] Yeah, this was fun doing...
[04:46:37] HandStack form with solid start.
[04:46:39] um i got a chance to find some solid start bugs while working with library authors which is always  good
[04:46:46] So we managed to get two new releases, a solid start and Vinci out this week.
[04:46:51] with the help of the new maintainers.
[04:46:54] Thank you.
[04:46:56] See, I told you I didn't have much news.
[04:47:00] Yeah.
[04:47:01] Uh,
[04:47:02] let's drop the solid stuff for a bit.
[04:47:06] Yeah, see? Nothing. Okay.
[04:47:08] I did bookmark a couple of things.
[04:47:12] But yeah, not yet. Okay.
[04:47:16] Thank you.
[04:47:17] Theo
[04:47:19] It's been months since we got new front end framework.  Is everything OK?
[04:47:23] I know this is like a hilarious joke, but first of all, I think...
[04:47:29] Some people...
[04:47:32] It does. Yeah. Right.
[04:47:35] Uh...
[04:47:37] Yeah, I think it, do we include meta frameworks in the front end frameworks? The thing is,
[04:47:42] you know,
[04:47:45] Has it been months?  I mean, it depends if you call SolidStart 1.0 a new framework,  but it's been here for like three years.
[04:47:51] I think...
[04:47:53] This is funny because like...
[04:47:56] There are so many people working on new frameworks. I always hear about them for periods of time. And they people reach out on, you know, they want my opinion on stuff. So I definitely hear about new frameworks, but I don't
[04:48:11] I think I sometimes wonder if people think there's a perception that someone goes home for a weekend, writes a framework and then like.
[04:48:17] essentially at that point,
[04:48:21] you know, release 1.0 and they get the reception like
[04:48:24] solid did 1.0
[04:48:26] Like that's not what happens at all.
[04:48:31] Usually some people do go quickly to 1.0.
[04:48:36] But like,
[04:48:38] It takes years to
[04:48:41] to actually build up
[04:48:44] all the stuff technically.
[04:48:46] the build up all the examples, build up all the things that need to happen. Even if you have
[04:48:51] a team of people doing it.  The quickest zero to framework that I've seen happen in recent days was quick.
[04:48:57] And that still took them about two years.
[04:49:01] Like,
[04:49:02] The bar is so much higher.
[04:49:06] And it's not even just building it, it's proving it to a point that the right
[04:49:12] early adopters that try it and that the right word of mouth gets out and stuff.  By the time the average person hears about a framework,
[04:49:19] It's been used now for probably several years.
[04:49:25] on like
[04:49:27] probably several production products.  Like there's no such thing as new frameworks,  really.  There's only like frameworks that,
[04:49:36] yeah, like the new frameworks are  already generally battle  tested. So it's like
[04:49:43] I don't know.
[04:49:46] It's been a very, very long time since people were like,
[04:49:50] the gap between a framework creation and people hyping it
[04:49:55] was so short. I guess  million might be
[04:49:59] the best example of that.
[04:50:02] where the lead up time was actually relatively short.
[04:50:05] Um,
[04:50:06] But that is...
[04:50:08] increasingly rare these days.
[04:50:15] Thank you.
[04:50:16] Thank you.
[04:50:19] Thank you.
[04:50:20] Oh, yeah, this week in this month in solid. Yeah, I've been enjoying these newsletters. I think this last one that you did covers the the router data data APIs. So this has been a problem. Sorry, just on the side.
[04:50:33] This has been a problem...
[04:50:36] Um,
[04:50:37] that we've been having, you know, I, we write RFCs and they sit for months and then I are like a  month or something. And then I commit the change, do like a minor release or a major release, like  a significant release. And people are caught really off guard by these changes. And I'm like, well, it is December, like,
[04:50:53] Correct. And I've tried to get feedback. I went on Twitter. I multiple times I posted about it. I streamed about it. But you know, the average developer isn't going to see this. I'm hoping things like the newsletter really cover that help close that gap to it's not like the main focus, but just be able to mention what's going on is really powerful.
[04:51:12] Let me grab that, Daniel, and drop.
[04:51:15] It.
[04:51:16] in so the YouTube chat gets it as well.
[04:51:21] Thank you.
[04:51:29] Bye.
[04:51:31] Yeah, I mean, the thing is, we got a lot of meta frameworks. So if you count any meta frameworks, then I don't think it hasn't been months.
[04:51:39] If we're talking like core frameworks like React,
[04:51:42] like at that level,
[04:51:44] it's it's been pretty slow right like
[04:51:49] Bye.
[04:51:50] there's been other little things like I guess like Alpine and stuff kind of sneaking in in the middle but like
[04:51:56] What?
[04:51:58] But yeah, it's he has to be counting meta frameworks.
[04:52:03] Yeah, Ed Frames got super easy to build, which...
[04:52:06] I mean, not super easy. It's kind of like web components. Like everyone can build a framework once web components exist. We're getting to a point where like the tooling's there that, you know, people can just go, oh, I can build a framework. But maintaining and actually building it to completion still takes...
[04:52:21] this, like the, the,
[04:52:23] base entry bar
[04:52:24] like the very low bar is way easier which means in a sense there's more competition  and it takes that much harder to actually emerge from the
[04:52:33] stuff that anyone would pay attention to you.
[04:52:36] So,
[04:52:37] I don't know. As you can expect it,
[04:52:41] People links.
[04:52:43] yeah i i was expecting links to new frameworks yeah the theos the one who probably got all the  links to all the new frameworks here everyone's like check out my new framework
[04:52:52] Yeah.
[04:52:53] All good.
[04:52:54] Thank you.
[04:52:55] Um,
[04:52:57] Yeah, here we go, DevStream.  Very cool stream.  Basically using Vinci live,  builds a framework with Jason,  shows him how you can use Vinci in an hour  and basically make a React framework.
[04:53:09] this...
[04:53:11] This is an example of that bar raising or lowering, sorry, the base bar lowering.  But that being said,
[04:53:18] you
[04:53:20] So much more goes into it beyond this.
[04:53:24] Yeah, the environment API is going to be our savior here.
[04:53:28] I think it was, I can't wait for this.
[04:53:36] Thank you.
[04:53:37] Yeah, I mean, I guess it's raising the floor because your base level entry and framework is just that much higher.  You already have these pieces built for you.
[04:53:52] Okay, cool.
[04:53:55] Just a couple more quick ones.
[04:53:59] I love Tanner's exploration.  I keep on bookmarking his quotes because it's like he posts something and,
[04:54:06] and I think I missed this last week,  I didn't have time to talk about it,  where he's just like,  wouldn't it be cool if you could just do this thing  and it just automatically works and all this stuff?  And everyone's like, yeah, yeah, yeah.  And I'm like,
[04:54:18] a little bit like hey we've been doing that in solid for five years but
[04:54:23] Um,
[04:54:24] No, maybe not completely. I guess this is servicing. This one's we've been doing install for three years, but it's just like when you build stuff a certain way that Tanner is now doing with start using the same basis and using the same breakdown that we've been developing.
[04:54:39] It just makes a lot of sense.  Like React doesn't handle the serialization for you.
[04:54:44] solid supremacists do and Tanner's going to. And the end result just feels
[04:54:50] Good. This is how queerness are invented. I'm,
[04:54:55] Yeah.
[04:54:56] Yeah, like...
[04:54:57] It's
[04:54:58] like
[04:54:59] Yeah.
[04:55:00] People should be excited.  As I said, I wish I had a way of hyping it stuff as well as Tanner.
[04:55:06] But,
[04:55:08] Yeah, no, it's
[04:55:09] This is...
[04:55:14] Yeah, it is interesting to see this kind of evolution in the, not from the core React team, but from people in the ecosystem to get these kind of superpowers, which I thought this is the way it would have always worked anyways, right?  Anyway.
[04:55:29] Thank you.
[04:55:30] Thank you.
[04:55:32] So I think that's why I bookmarked this one.
[04:55:36] Automatic streaming, I mean,
[04:55:38] This should be just the way the stuff works.  I'm very stoked to see Tanner's progress.
[04:55:44] I'm hoping this also gets more eyes on Benchy and helps, you know,  with the beat six transformation and stuff because I'm,
[04:55:53] Right now, these tools are the best we got and we're kind of
[04:55:56] piecing them together as required to actually accomplish the goal.
[04:56:01] And it's right there.  We've,  we've got it.  We just,  it's,
[04:56:04] It's just it's new and it's fresh.
[04:56:07] like,
[04:56:08] It feels damn good.  I'm probably going to have Tanner on again sometime soon,  and we can talk through it.
[04:56:14] It's just, it's one of those things where it's like,
[04:56:17] where you're like very stoked to see this develop.  And on the other hand, be like, look, like, yes, like been doing this,  like more people should do this, you know?
[04:56:28] This is an interesting one.
[04:56:31] To move past components, you have to give up component composition and templates. Are people willing to do that?
[04:56:36] I am, but others, I'm not so sure.
[04:56:40] Yeah.
[04:56:41] What's going on?  I'm absolutely not willing.  The verification I find myself thinking of Dom as a whole,  obviously, like, constant pain now.
[04:56:47] Yeah, this was my reaction.  I want to know more what Matthew is thinking about this.  He mentioned it when he was on stream with me a year back or so.  He basically said that the component model was the problem.
[04:57:00] like the way we think.
[04:57:03] I don't think anyone is willing to give that up, though.
[04:57:06] which is a pretty strong assumption to make.
[04:57:08] So like,
[04:57:10] Right off the start, I'd say this is a non-starter.
[04:57:13] But, yeah.
[04:57:15] Thank you.
[04:57:16] he is right that other models
[04:57:18] have certain benefits.
[04:57:21] We're prioritizing...
[04:57:23] locality of like
[04:57:26] Conceptually, the idea that teams could work independently and people scaling,
[04:57:30] and locality of logic over models that...
[04:57:35] could be more efficient, easier.
[04:57:42] I don't know. It was interesting.
[04:57:45] This is just like a game.
[04:57:47] Oh, wow.
[04:57:49] Yes. Everyone who talks like this is talking about
[04:57:53] Something like NBC or like all the data on the outside, like no local state.  It almost always comes down to that.
[04:58:01] Even if it's not exactly, I am interested to hear more of what he's thinking, but it's almost always that.
[04:58:09] Anyway.
[04:58:13] that, that, that,
[04:58:15] and I hit all the solid points,
[04:58:17] Sweet. And I only have one more thing. Someone shared this in chat a while up and I see if I can find it.
[04:58:23] But it's fine.  I can...
[04:58:27] Get it. What was it?
[04:58:29] Lady
[04:58:31] Mm-hmm.
[04:58:32] Let's see if I can find it.
[04:58:34] Bye.
[04:58:39] I thought I saw this.
[04:58:43] Okay.
[04:58:44] Someone share it in chat again if they know what I'm talking about.
[04:58:49] Thank you.
[04:58:51] Uh...
[04:58:53] You got your someone back.
[04:58:58] Someone set us back.  There you go.  Sorry.
[04:59:01] Yeah, I saw this earlier.  I should have bookmarked it.
[04:59:04] I got the inside scoop on what and when the observable was hitting Google Chrome in this interview I did with Dom this year.  So basically,
[04:59:12] The gist of it is RxJS or the observable spec seems to be coming into the DOM.
[04:59:18] So,
[04:59:20] Yeah, it looks like it's moving.
[04:59:22] So long awaited thing.
[04:59:24] Honestly, I don't.
[04:59:27] I don't know what to think about this yet.
[04:59:30] they've been trying to find a way to get this in for ages, so...
[04:59:34] That's good. I built solid originally using observables because I thought,
[04:59:38] you know,
[04:59:39] I saw the spec ages ago and I was like,
[04:59:42] this is the future.  Then I like went back and I was like,  no,  I really just like the knockout style signals.  They work better for me,  but these things aren't,
[04:59:51] fighting with each other. I do think it's an interesting way getting in through the dom.
[04:59:55] Because in one sense,
[04:59:57] I
[04:59:59] Thank you.
[05:00:00] Observables are good for events, so they're good for coming...
[05:00:03] From like...
[05:00:04] click handlers, like coming out that way.
[05:00:07] signals are for synchronization they're better for actually updating the dom or doing changes that  being said
[05:00:13] effect timing and management is a challenge to agree on. So,
[05:00:17] I, uh,
[05:00:19] We'll see how this unfolds, but...
[05:00:22] It looks like things like after a decade are finally moving forward.  So,
[05:00:27] good for them and good for people who are invested in this um
[05:00:31] Yeah, I think I originally saw a slightly different tweet, but I think that's fine.
[05:00:36] as long as we don't use observables for states.
[05:00:39] Why do just Matthew Phillips here?
[05:01:00] Oh, he's asking why
[05:01:03] we hide elements rather than...
[05:01:06] like remove elements rather than hide them.
[05:01:09] I don't know. Maybe I missed the question. It doesn't matter.
[05:01:13] Um,
[05:01:14] I'm good for today.
[05:01:16] That was a
[05:01:18] Good stream.
[05:01:22] Yeah, I mean, I have those concerns too, I'm not going to lie.
[05:01:27] But...
[05:01:28] Thank you.
[05:01:29] uh
[05:01:31] They're going to keep on trying at it until they find, as long as it's in a reasonable place.  I guess once it gets in there, it's in there.
[05:01:40] Thank you.
[05:01:42] Thank you.
[05:01:43] Anyways, let me see. Is there anyone to raid? I missed a prime, not primogen, but like an awesome raid opportunity the other day.
[05:01:52] because I hadn't refreshed before I left.
[05:01:55] Nah, it's fine. It's all good. I'm just going to
[05:01:59] I'm just going to go.  I'm much too hot.
[05:02:02] And I believe I have...
[05:02:05] What was it?
[05:02:07] Oh.
[05:02:09] Despicable Me 4 to watch or something.  Anyways, you guys have a good weekend.