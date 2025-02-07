---
showLink: "https://www.youtube.com/watch?v=4TdOEe6liSE"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Revisiting SolidScript: Reactive Compilation"
description: ""
publishDate: "2024-08-17"
coverImage: "https://i.ytimg.com/vi/4TdOEe6liSE/sddefault.jpg?v=66be2a3e"
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

[00:00:00]  Thank you. Thank you. All right. Hi, everyone. I am trying to do something a little bit different today. I actually decided that I would
[00:01:30]  try to stream to Twitter as well, or X or whatever, except it's not working. So I'm going to try one more time to see if I can make it
[00:01:43]  go live there. But it's like an error occurred. Wait a moment, then try again. I'm like looking at it. I'm like. It's like
[00:01:56] , is there a special character in the name or something that's messing with it? You know? Let's try again. An error occurred. Is it doing anything on
[00:02:11]  my Twitter? Fine. We're just in pre-roll now anyways, given this whole thing started. I just thought I just thought it would be interesting to try and
[00:02:27]  try and do Twitter here. Maybe there's like some setting that I'm not aware of that you have to like turn it on. It's funny, though, because
[00:02:45]  it thinks that it has account access. I wonder if when my account, I wonder if I set this out, set this up a while ago, and then when my account
[00:02:57]  got hacked, it it like basically forgot the like the other side. Like, maybe that all got cleared out. I don't know. How's everyone doing today?
[00:03:13]  These are the kind of technical things I should take care of ahead of time, I suppose. It's probably like too late for me to go in and like double check my
[00:03:29]  Twitter connection here. I don't know if you want to go in and check my Twitter connection here. Okay. Twitter account connected. Go live. No. Okay.
[00:03:57]  That's funny. Well, I guess it is what it is. Yeah. Yeah. I think the part of the problem is that it's already like part of
[00:04:34]  the current stream that we're on. So it's like not letting me like, can I do? Okay. Cancel that destination yet. Move. Move. Hey
[00:05:01] . An error occurred. Please wait a moment and try again. An error occurred. Yeah. Streamyard to Twitter, at least for me, is broken. But again,
[00:05:16]  sometimes stuff for me is just broken. Anyways, I've found like monetization on YouTube is completely broken for me. So I was like looking for about a month.
[00:05:31]  I haven't been able to monetize on YouTube for some weird reason. And, and I get this weird error in the modals, but it's a JavaScript error
[00:05:45] . So I'm like, okay, I can debug this. So I can kind of get to the, the base of it. And, and then I see some
[00:05:52]  error about something, something computed. And I'm like, is this what, is this where the new signals work in YouTube is? And the, the admin paddle, did
[00:06:03]  I, did they, did they, uh, you know, decide to add signals to YouTube and then break it just for me, you know? Yeah. Yeah. Yeah
[00:06:14] . Okay, fine. It's, it's been a while, three months. Yeah. No, it's like really annoying. Um, I've sent out multiple
[00:06:22]  help requests and they never answer. That's something that I've been realizing is even with the Twitter, um, the whole Twitter thing, uh, is that, um,
[00:06:36]  support these days is just really, really poor. In general, um, I don't really, I mean, it's a sign of the times, I guess,
[00:06:58]  but, you know, you kind of wonder after a while, like, like, is this just the way things are going to be from now on? Okay. Okay
[00:07:17] . Yeah, I'm going to give up on, if you haven't been keeping track what I'm talking about, I've been trying to get this, the stream
[00:07:32]  live on a X as well, and it is just not working for me at all, which is interesting. Cause it didn't work at one time. I think when I
[00:07:40]  did the 30 K subscribers, I've streamed on X, but now it's just like, no, we're not doing it, not doing it. I got
[00:07:47]  one more thing I could try, but it's a little bit disruptive. Should be right in solid. Maybe. Yeah, I I've been streaming every two weeks recently
[00:08:06]  because it's like, it's hard to keep up on content, even though the last couple of weeks I've actually had a lot to work on because I've been doing
[00:08:15]  a lot of experimenting and trying stuff, which is really good. But like, um, yeah, I don't know. It's been harder. Like I I've
[00:08:24]  been trying to, it's an interesting split between when you're doing research on other projects, it's really easy to have a lot of stream content when, when you're
[00:08:35]  doing R and D like pure, like trial and error experimentation, there's a certain amount of content we can get from that. But it's all inconclusive. So
[00:08:45]  it's not a definitive. It's not like good stream cover kind of stuff all the time. So it, as I mentioned, since February, that'd be streaming
[00:08:53]  less often, but it still gives me some room to stream. Yeah, I, I have one more idea guys. Give me, I'll be back in 15 seconds.
[00:09:07]  Just give me a moment here. All right, sorry about that. Last ditched attempt at Twitter. last ditched attempt at Twitter. Finally, I get a
[00:09:34]  good, I finally, I get a good error back. A premium account on Twitter is required to create a live broadcast on their platform. Please upgrade to a premium subscription on
[00:09:46]  Twitter or stream to a different destination. All right. All right. All right. They want my $8 a month. See, there's just no winning here.
[00:10:06]  No winning. All right. No Twitter. I guess we'll just have to tell people to come here. I don't know. I was, I was a little
[00:10:17]  bit torn about splitting the audience anyways, because it's like. It's already split between YouTube and Twitch, but I don't know. More people might see it might
[00:10:32]  be worth it. I feel like streaming to Twitter used to not be blocked to premium. I swear. I've used this feature before. Let's go. Destiny operator.
[00:10:42]  Yeah, we're going to talk to us in the operator. That's where these conversations always start. And we talked about it last time, and that's where we're
[00:10:47]  going to get kicked off in here. But first, I'm going to quickly let's see your screen, entire screen, that one. First, let's tell people
[00:10:59]  that we're live, because Twitter is not going to. Twitch, TV, slash, right, and solid. All right. All right. No, no, no lect
[00:11:21] uring yet. I am literally just, I was trying more exposure versus split audience. Yeah, I, I don't care about the money. As you can tell,
[00:11:30]  I've let YouTube slide for ages. Plus, they've reduced their incentives anyways. Like, it used to be like, like a good video on YouTube would know, net
[00:11:39]  me. I don't know, a couple hundred bucks. But it feels like they've almost quartered my payback, something they changed about a year ago. So
[00:11:50] , I mean, I don't, I don't care. Not that I'm like trying to make money videos. If you did that, you'd have nice edited,
[00:11:57]  shorter content. Five hour streams are not that. All right. Let me get Twitch going in the other window so I don't miss any subscribers. I feel like last week
[00:12:09]  I was so focused on what I was doing. I didn't even notice that I didn't have it up. Yeah. More people on YouTube today so far. All
[00:12:23]  right. Good, good, good. All right. so we're, I guess I'm good to get started then. If you only are for streaming only on Twitch
[00:12:44]  that you might get high frames and such, which make your stream featured on the homepage. Ah, yes. Might have been in the right category. Stream yard sometimes likes to
[00:12:54]  not put me in the right category, which is like a little bit awkward. Yeah. I don't know. No, I mean, I, I got the YouTube
[00:13:11]  stream too. Um, it just, I was trying to get the, the X stream as well. Cause if some people are lazy, they're like just on their phone
[00:13:20]  and then they couldn't even be bothered to click the link. So it's like, you know, and plus Twitter is no advertising for discovery of people you follow is probably
[00:13:29]  much better. Like I noticed spaces that people are in that I know way more readily than like, um, you know, other stuff. And let's face it,
[00:13:40]  Twitter, like, yeah. Like what, what, what's my spread? Let me see here. If I go to Twitch, let's go to Twitch. Um,
[00:13:47]  let's go to my chat. I have 3.6 K followers. Okay. So measly. Okay. I go to YouTube. I haven't not played.
[00:14:05]  It's the last video I opened and, and I view, view my channel. I have 13.7 K followers. Right. But if I'm on X,
[00:14:18]  I have over 40 K. So it's like, if it's way more likely that, you know, the little like live streaming thing on the side, you know,
[00:14:29]  going on X is going to draw more people in and more people are going to see it than either of these, you know, sources. It's like not even close.
[00:14:38]  So, yeah. Which reminds me, I wanted to try something while I was live. Um, I mean, just, just to prove that I'm not, that
[00:14:51]  I'm not full of it. Let's edit the video. Let's go to monetization. Let's switch it. No, click. No, no. What's
[00:15:05]  going on? You console cannot set property of undefined setting, position, target D open, open, open, edit dialogue, blah, blah, blah, shady
[00:15:15]  dispatch event, fire module, JavaScript, whatever. Right. Web component SD. Ooh, interesting. Uh, I was like, at one point I was like thinking I could
[00:15:33]  just hack the JavaScript in line to make it get past whatever this missing thing is, right? But. Cannot set properly of undefined setting position target. Yeah
[00:15:53] , so this dot dialogue just doesn't exist, is the whole problem. Yeah. Actually, you know what this, this looks like incremental Dom. Huh? Minified
[00:16:16] , but just the shape of the, of the function calls. I think. I don't think that's JSX. Incremental Dom has this whole thing where it
[00:16:27] 's like open and closed as, as programming keywords. Anyways, enough hacking on YouTube, but yeah, I've gotten to like 10 or several different screens and no matter where
[00:16:43]  I go, it just, it dies. Even when I try and add the, the notes, um, you know, like the timestamps to the video, the
[00:16:50]  modal like screws up, like it's just completely broken. Um, anyways, we, you guys probably don't care about how broken YouTube is. How much money is
[00:17:07]  lost. Yeah. I don't know for me, probably I've lost. Maybe it's been three months, though. Not much. Maybe like, maybe like, maybe
[00:17:17]  like $200. Maybe not, not even these days. It used to be more, but yeah. This wouldn't have happened with regressive enhancement. Enable cache
[00:17:39] . Maybe that's something to do with it. I mean, these, these, uh, cache settings don't apply when the dev tools are closed, if that's what
[00:17:55]  it means. Um, Maybe I didn't wait for it to hydrate. It's like, presumable, right? Parts of it are. I think I
[00:18:13] 've waited long enough. No, that's not it. It's just funny. Cause it doesn't, it, it, it, it's, it's certain features
[00:18:22]  chase me around everywhere. Like there's a, there's a view in YouTube studio. Yeah. I don't really care. Uh, if I show you guys this
[00:18:29] , where is it? Um, YouTube studio is a view in YouTube studio where you can like see all your recent content. Um, let me. Like here and they
[00:18:41] 're like, okay, see, I was trying to pull out the shorts of this week in JavaScript for a while. I never published them, but you see how you can
[00:18:48]  just turn on money monetization here. Uh, you know, see, this is the last one I wasn't able to monetize. We are so back. Right
[00:18:57] . It's just, and yeah, it's JavaScript errors. You'll see console. Not set probably set up. And it's like the same modal is just busted
[00:19:10] . Um, Oh yeah. There's one right here too. Oh no. It just takes me here. All right. I'm enough playing, playing with YouTube,
[00:19:27]  but yeah, starting to get like a little bit annoying. Anyways, this is all starting because I wanted to, because I wanted to stream to X and it's not letting
[00:19:40]  me do it. This is the interesting one of a team of five unique base engineers. Try without JS, I don't think you guys keep mentioning there's no way
[00:20:08]  YouTube works without JS, sorry. Okay, okay, this is, this is too funny. I, uh, where were we, uh, your videos, this work
[00:20:26] . Yeah. Okay. Let's turn off JS. There's no, there's no way YouTube works without. Like this is just. Command P disable JavaScript. All
[00:20:43]  right. There's, there's no way. Yeah. It's not even SSR YouTube without JavaScript is a white page. Especially the admin consoles. Yeah, no,
[00:21:00]  this is. No, I is like any of YouTube. Okay. They do show this flash screen with JavaScript turned off. They show you a skeleton and. And an
[00:21:24]  image that's not interactive. This is what YouTube looks like with no JS. So they do server render this. So they, I, I, I imagine they do
[00:21:38]  like a sort of destructive hydration. Like they, they don't even bother. They probably just like spit out an HTML page and then do everything after the fact. I doubt
[00:21:46]  they they're using JavaScript on the server. I mean, we've talked to them about this. You know, in other Google projects, this is probably just like a
[00:21:54]  static page and then they just replace it with the content as it comes in. Anyways. We'll, we'll have to live with it. They're trying to force
[00:22:07]  you to update Chrome. No, my Chrome's up to date. We did that last week when we were trying to get a page transit view view, view, view transitions
[00:22:17]  to work. Okay, fair enough, fair, fair, fair, fair, fair enough. Okay. So last thing we're going to try YouTube is an app.
[00:22:32]  Like they probably are all like PWA thinking they probably have some crazy. Yeah. Let's just completely remove anything related to service workers. Does this page have a service worker
[00:22:47] ? Yeah. Let's unregister it. Deleted let's. I'm trying to think of what assets do we want to remove from. From here. Usually
[00:23:06] . What was it? Cache storage. I'm going to remove. Refresh caches. Okay. Let's see if a 16 at 1223. This looks
[00:23:37]  like us. This is the old one. This is our new one. It's running. This is us. Okay. Let's see if it's the same one.
[00:23:50]  Like the same scope. It's quite possible that when I go into. YouTube studio. We're like in a different app. In fact, YouTube studio doesn't appear
[00:24:06]  to have a service worker. I don't think. Monetization tab. Yeah. No. No. I want the content tab. Pick one video. None of this
[00:24:31]  is. Yeah. There's no service worker on this page. Like giving all the security info out there. It's going to log me out if I turn. Yeah
[00:25:06] . I don't know. Oh, here we go. Maybe this is the secret. Maybe even before we get here, the real problem is zero is not defined.
[00:25:28]  Or O. Yeah. Yeah. Okay. Whatever. Enough. Enough. Enough. Enough playing with YouTube. YouTube without JavaScript getting a hundred. Yeah. You guys love
[00:25:57]  that. Fastest possible. Blank white screen. Oh, man. Clear application data. Where's the clear application data again? I can't remember. Yeah
[00:26:37] . Yeah. Which short storage? Fresh caches. One of the items at the top. In the sidebar. Local storage. Session storage. Shared storage.
[00:27:03]  Cache storage. Just storage. Just storage. Pop. Just storage. Okay. Is this going to? Okay. Here we go. Oh, wait, wait,
[00:27:20]  wait. Is this going to? Okay. Yeah. I'm going to get logged out probably. Right? Let's just do this. Nothing stored. Right? That
[00:27:35]  was it. It was, it was, it was a good shot. It was, it was a good shot. Hmm. Yeah. You guys did a good job
[00:28:08] . Thank you very much. I appreciate that. Oh, well. yeah. I mean, maybe support will get back to me after three months and multiple messages. They
[00:28:26]  don't even call it support anymore. I think, I think like actually, sorry. One more thing before I move off the YouTube topic. If you have a complaint,
[00:28:37]  like it's like, send us feedback. a screenshot will help us better understand your feedback optional. Yeah. I was like trying to find actual support, like in the
[00:28:50]  channel in, in here in like. Feedback. It's like, it's like, it's like a email, just like off a cliff. Maybe it gets analyzed
[00:29:03]  by some kind of robot. So they like look at keywords and then decide what people are complaining about and use that to decide how to prioritize features. Anyway, good times
[00:29:20] . Thank you, YouTube. Okay. So we are here today because I wanted to talk about reactive, compiled reactivity. A little bit different than how we talked about
[00:29:45]  it in the past, but a continuation, like I think from a basics perspective, when the first thing that people think about, about compiled reactivity is a lot of like
[00:29:59]  the, the magic, right. Of just like having things automatically update. if you were not familiar with runtime reactivity, you, you might think that a compiler is
[00:30:09]  how solid works. Right. You, you know, it looks at the code and see what depends on what, right. If you look, especially if you look at something
[00:30:18]  like old Svelte, you would definitely like get this vibe where you're like, you know, how does it possibly know how to update? Like it's not
[00:30:26]  JavaScript. It must be a compiler. And this was true about old Svelte because essentially. they would look at what you could edit and look, what things dep
[00:30:37] ended on based on your syntax. And then like basically compile in the depend, the dependencies, right. It's like react hooks where you don't have to write the,
[00:30:49]  the dependency array and they'll just compile it in for you. Right. And a lot of sense, um, the react compiler is an, isn't like that. The
[00:31:00]  react compiler is actually smarter. instead of trying to look at your use memos or your, you know, use effects and trying to determine the, the, uh,
[00:31:10]  the, um, dependencies that way, they just look at the statement syntax and figure out depths based on like pure logical, you know, like what, what values are being
[00:31:22]  read, where the challenge with. And the reason that, sorry, that works well for react is because they can look at every, every scope with their compiler and just
[00:31:35]  decide to guard at that level. The problem with something like a hook, I mean, I can probably show it pretty quickly here. Is that. Is, is that.
[00:31:46]  If I, yeah, I mean, I don't need any of this. Just pseudo coding in here. If, if I had a hook that was like const, I
[00:31:56]  don't know, something equals equals. use memo. Yeah, actually let's, let's use the classic one. What, what is it? Name. And then
[00:32:11]  it's like, and we had some logic in here. Like, um, if. show full name, show full name. Return name. Otherwise it will return or
[00:32:29]  sorry. Turn first name plus last name. Otherwise return just first name. Okay. If a compiler looked at this. And was like trying to just optimize it. So
[00:32:48]  you didn't have to write the depths array. They, they would probably write. First, first name. Last name. Right. And, or sorry, I missed one
[00:33:01]  show full name. First name, last name. Right. they'd essentially just look at all the variables within the scope and make that decision because you've defined the scope
[00:33:11]  at which things run or rerun. The react compiler is a little bit smarter because you don't define the range so that they can get in and decide more granularly on
[00:33:21]  the scope. But the problem with this is consider the situation where I can do it right now. Show, show full name. Equals false. Okay. And somewhere
[00:33:39]  around here, you say. set last name to John or something else. Right. It's a last name. Smith. Okay. When you compile your dependencies, even
[00:33:58]  if there's conditional dependencies, this will always rerun. So like, even if you're not showing the full name and someone updates the last name, it's going to
[00:34:08]  rerun this calculation every time. Right. Following so far. but who cares? Sometimes this does matter actually, but this is, this is, this is sort of
[00:34:26]  one of the, the downsides of like your compiled reactivity. The, the plus side, you can argue it's a plus side is if you do something like this
[00:34:40] , if you have like, if you have something like, I don't even know, create effect, or maybe I should use react naming, use effect. and
[00:34:57]  then you do something like. Something like, I don't know. Set timeout. console dot. Console dot log. Name. I mean, I don't.
[00:35:29]  Whatever. A compiler could go and be like, oh, it depends on name in this scope. Name. but if any of you guys know from a runtime reactive system
[00:35:44] , this, this is in some independent scope that the effect has no clue about. so like there's different execution expectations, right? With a runtime reactive system, you
[00:36:01]  would expect it to run once and set timeout and call it later and never update. Whereas with the compiled one, it could grab these async dependencies. Another example might
[00:36:12]  be something like, let's make this an async function and do something like, const user equals. Await. Fetch. User. User ID. Const address
[00:36:43] . I mean, don't ask me why I'm water following this, but I'm just doing this for fun equals fetch. I'm user dot. Address ID
[00:36:58] . I don't know which address. And again, I mean, this is wrong. Cause it's derived from the same thing. I'm trying to think if we
[00:37:18]  had something else, let's pretend we just were fetching something completely unrelated. Also on user ID fetch posts. No, not on user ID. I need to, I
[00:37:35]  need to pick something like, I think the situation is so hard to manufacture. that's why I don't even usually care about it, but it's like. Whatever
[00:37:43]  some other ID. Okay. Whatever. Okay. It doesn't matter. I can promise all. I I I'm not promising all let's say, let's say it
[00:37:57] 's like you need user dot posts ID. And this let's let's let's like tie in multiple dependencies. A compiler could look at this. And, and to
[00:38:11]  see that, okay, I need user ID. And then I need some other ID. These are the things that are coming in outside of scope. And I could add that
[00:38:17] . Whereas a runtime reactive system is going to stop. At the first ID after a wait, it's like the set timeout. It won't track these other things.
[00:38:25]  And some people consider this like a terrible like pie in your face scenario because like, oh, you know, dependency tracking breaks after the wait, it's confusing, blah
[00:38:34] , blah, blah. But like, it's also, it's also kind of bad. What I mean is you don't want to ever write this code or for this
[00:38:50]  to ever track, because if someone came in here and wrote this and it runs and it gets the user and then it gets the post, that's fine. Now,
[00:38:58]  what happens when some other ID updates? It doesn't just rerun this part. It fetches the user again and cascading into the fetching the post with some
[00:39:14]  other ID. Like the fact, like maybe that is the behavior you want. maybe, but it's like having things further down the async chain, trigger the whole
[00:39:27]  start of the chain again is something I feel like you should know about. Right? Like maybe this is just a preference thing on my side, but like having some downstream dependency
[00:39:37]  somewhere, you know, maybe you didn't realize it was reactive, triggers the whole stack from happening again is awkward. Now, to be fair, we don't hit this
[00:39:46]  as much these days, but I used to hit this back in the day with knockout, pre-promises because callbacks, the old callback APIs, there
[00:39:53] 's no guarantee that they're called async.ly. So most of the time they were because you fetched some data, you didn't have it. And someone
[00:40:01]  would call the callback. And I would bet on the fact that this one wouldn't fetch, right? Or wouldn't track. But then someone, you know, like
[00:40:11]  sometimes things would, the data would be there and it calls synchronously and then would track. So like you'd get different tracking behaviors, which cause over execution. I
[00:40:19] 'm going to blame someone on my team. I didn't write that code, but you know, like there's trade-offs. And I actually don't think the positive
[00:40:31]  for compiled reactivity is even a positive at all. That's, that's my opinion in terms of dependency tracking, but let's bring this back. Okay.
[00:40:41]  No one's actually telling us to do this. I only wanted to explain this so that I can get out of the way and talk about when I'm talking about compiling
[00:40:52]  reactivity today, I am not talking about optimizing the detection of dependencies. I'm going to assume that the reactive system is runtime. Almost every single reactive system that I have
[00:41:07]  seen with compiler, even if they used to be like this, have moved to, you know, this being an optimization over runtime system, stuff like Marco, stuff like
[00:41:16]  Svelte, they are runtime reactivity at the core and they're going for that dynamicism. This trade-off that I just pointed out, no one cares about
[00:41:25] . I mean, some people do. They're like, oh, maybe we can resume reactive context using async local storage after the await and stuff. I'm like,
[00:41:31]  go to it. But it's like, the truth is these things should be separated. Even if this depends on this, have that communication over the reactivity graph.
[00:41:45]  Don't cause huge cascading waterfalls of stuff that happen within a single effect and expect like any dependency to cause the whole thing again. It's fine. sometimes
[00:41:57]  waterfalls are unavoidable, but you shouldn't be like triggering the whole stack. Okay. So preface, we can move on. Yeah. If you cache it
[00:42:06] , it's, it's not so bad. Sure. but like, but like, I'm just talking purely from like, uh, yeah. I mean, some
[00:42:16]  people like this kind of this, then this, and this, I mean, that, that goes into my async article. I talked about last week where it's like
[00:42:24] , kind of, yeah, I mean, it's, it's fine. Sometimes you can make this work effectively for you, but it's also kind of like,
[00:42:36]  as the default, I mean, you could argue, and I think this is fair. And maybe we're Robbie speeds coming in here is that. Yeah. You it
[00:42:49] 's about the explicitness, right? The same thing would happen. You declare multiple dependencies at top. And if you did, you would know, right. Is the thing
[00:42:58] . It'd be very obvious that you got all the depths up top. Similarly, if you had an explicit tracking system, then you would know. So the argument is
[00:43:06]  that this is, this behavior is less obvious that it would, it wouldn't work if depending on your understanding of how the system would go. Right. Like the, almost
[00:43:17]  all the scenario, this is one of those cases where like almost all the scenarios around this are ones you just want to avoid anyways. So like whether or not it's ergon
[00:43:25] omic to do it or not is beside the point to a certain degree, unless like it encourages people to do dumb stuff, but it's like, yeah, in,
[00:43:37]  in any case, it's, it's also why it's tangential or not enough not to make the coin. Yeah. Yeah. I mean, there's the reactive
[00:43:48]  overhead you could argue, but there's other benefits if your system can communicate in async or whatnot. Yeah. Anyway. the reason is compilers and reactivity
[00:43:59]  have gone through a lot of stages. The, the, the next kind of, I think for a lot of people, it started with this article. and I know
[00:44:11]  I covered this in the previous stream, but there's a lot of new people. It's been two years. You guys have to remember. Um, I haven't covered
[00:44:22]  this topic since I think March, 2022 I've been talking about, I mean, I, my first inspiration for the compiled, uh, signals. Like it's funny
[00:44:32] . I saw Svelte like three or four and I was like, huh, that's interesting, but not for me. Right. It just, it did. I
[00:44:41]  liked the control I had, uh, around the, uh, the, you know, signals and the fine grainedness of it. Then I, then, um
[00:44:50] , I can't know. I forget what came first, Alexis or views composition, uh, ref sugar initial proposal. My guess is it was probably the ref sugar proposal.
[00:45:04]  And like Alexis decided to remake it on top of solid within like a couple of days. Sounds about on par for him. Um, and basically they were trying to make a
[00:45:16]  simpler salute, uh, uh, syntax for, um, for view to try and I think Svelte started eating into views territory where they, you know, view
[00:45:26]  is like, we're the easy framework. You can just use JavaScript. And then they, they, you know, they changed from the option API to the composition API,
[00:45:33]  which is the right thing to do completely. But people are like, uh, this is awkward. Like, you know, I used to just write my stuff as plain data
[00:45:42] . Now I have all these, like, they look like react hooks, you know, God, that argument never gets old and never gets any smarter. sounding. Um
[00:45:50] , and they, they were kind of troubled by it. So if he was like, okay, well, how can we make it feel like plain data again? And how
[00:46:00]  do we stop losing people to Svelte? So they actually went on this exploration, uh, of ref sugar. Um, and they decided it wasn't for them
[00:46:10]  ultimately, which is a smart choice, I think, but, uh, which we'll get into a bit more, but three years later, Svelte comes out and
[00:46:19]  they're like, here we go. Ref, sure. I mean, ruins. Um, and, you know, you know, now is this okay? And I
[00:46:30]  think it's interesting because for Svelte it is because Svelte came from a place where people, um, already were kind of crossed that line. they were
[00:46:39]  okay with it. They started like Svelte started from a place that was incredibly limited. Couldn't really do anything with it from a compiler composable thing. Yes.
[00:46:47]  You could compose primitives, but you couldn't actually like from a language standpoint, it was very restrictive. It's harder to come from a place where you allow people to
[00:46:55]  do a bunch of stuff and then get stricter, then start from a place that's incredibly strict and expand out. And, and essentially, we kind of ended up
[00:47:05]  back in this conversation. again, but I think for us to get to that place required us to under like change our understanding of what we wanted to get out of the
[00:47:21]  compiler. Right. Cause Svelte of old Svelte three or four is, um, this article, honestly, um, which is a very long way of
[00:47:39]  getting around this. Yes. Ruins, not ruins, ruins. Okay. I've been looking at the Svelte for a while recently. I'm producing this
[00:48:00]  all that for last year. And the one that you've actually solidized body is your English, much more understandable for non-English native than riches. That's funny
[00:48:07] . Cause rich is English, but I British English versus American English, maybe it's slightly different. I don't know. Rich has been in the U S for a while
[00:48:18]  though. And it's, it's, it's a funny comment after the fact that I can't pronounce ruins, apparently ruins. um, anyways, this article
[00:48:39]  I post in the chat is absolutely great. I, he, he pretends like he's in the year 2050. Right. And I feel like, well, hooks are
[00:48:49]  a big influence for Svelte three. this was cause he, the idea is he just wrote some re some statements and then realized that, yeah, like I love
[00:48:58]  this article through careful analysis of the script. We eventually deciphered. This is an ancient parable. It tells the story of two brothers, a born anyways, it's
[00:49:06]  the whole thing about his, his joke is that they discovered that they could use this arrow to define a relationship that held through time, like a spreadsheet essentially. Right.
[00:49:17]  And this suddenly was, you know, a tracking scope and now simply making, setting a new value of a meant B updated. I mean, it's the classic thing.
[00:49:28]  And, you know, P sharp is the nickname for Microsoft C sharp, created by Pulse W in 2021. Yeah. I mean, he was close. Right. Um
[00:49:38] , but the whole intent here, was partially to have a language that, um, dode, you know, depicted reactivity as a primitive, right? Some kind
[00:49:56]  of baseline. We could understand that a is a conceptually something like a signal and B is, but the implementation is, doesn't matter. like, in a sense
[00:50:05]  felt three accomplished this, right? It might've re-rendered components, you know, top down, similar to react, you know, but like language wise, they
[00:50:20] , they, they use a slightly different syntax, but they kind of accomplished the base of this goal. um, except the language couldn't, it couldn't escape the
[00:50:32]  single file, right? Because a could never be reactive in JavaScript. Unless we had a way of intercepting reads and writes on an atomic level. Right. But it's
[00:50:49] , it's, but the problem is even if you accept that this is the case, you end up with this new problem. I mean, and it's not a
[00:50:58]  new problem. It's pretty easy. Let's pretend we have let a, right? And then we have a function that's like, you let's call it increment.
[00:51:17]  Right. And then we go value plus plus. Right. Now, if I went increment a console log a, and let's, let's give a value at first
[00:51:40]  so that it's not broken. it's incremented a few times. It should be pretty obvious, hopefully to everyone here that a is still zero. I mean,
[00:52:03]  this is not terribly hard to understand. Like, obviously if this reference is the same variable, like this is a, now it's two down here. but if,
[00:52:15]  if we pass a value, a primitive value into a different function scope, there's no possible way to write back to the other value, right? I can't go value
[00:52:27]  equals, you know, like, it's not happening. And this is why to a certain degree, um, I never really cared about what Svelte was doing
[00:52:49]  in the past before ruins ruins. Okay. because like, sure it's great, but it's like a different language that exists in a Svelte file and the
[00:53:05]  Svelte file is very, you know, specific HTML thing. Am I going to write all my code in these like files? I wasn't sure. So,
[00:53:13]  yeah, I mean, it's, it's a whole pass by value pass by reference problem, right? So how do you pass by reference here? I mean, you
[00:53:21]  could, one way you could do it is, well, it's actually a little bit fun, right? Because you can't just like say this is an object, right
[00:53:31] ? Because if I, if I say this as an object, and then I say, uh, object.a equals this. Sorry, our object. I'm still
[00:53:44]  getting zero because. I'm still console logging my original eight. Now, obviously if I went, um, sorry, I need to actually like, I need to actually change
[00:53:57]  my, my reference here. This can't be zero. This actually has to be, you know, I'll call this value. Now this, or call it object.
[00:54:06]  I have to actually make this object that, and then like, it's, I have, my point is I actually have to change. The base. Primitive.
[00:54:21]  To actually do it. It's not a matter. There's nothing I can do except change this. It could be an object. It could be an object. It
[00:54:36]  could be, uh, some function stuff, arrays. It doesn't matter. It just can't be a primitive value in JavaScript. Right. So. And, and
[00:54:53]  part of the problem is just like, like, let's pretend. Yeah. I mean, this, this is the, I call it dot a, but I mean,
[00:55:07]  for convenient for people, you know, there are some signal libraries that do it like this with dot value. Right. So it's very hard to make reactivity pass
[00:55:25]  out of scope, essentially when you use, you know, the values. Cause like, okay, let's pretend new plan. let's pretend it's like make or
[00:55:41]  create signal or something like that. It doesn't matter what it is. Right. And we'll pass an initial value. It doesn't matter. Okay. And we're
[00:55:53] , we're just trying to create something. So like let a equals, you know, for fun, I'll just like call it signal, you know, init value
[00:56:06] . So let's start in the non zero in it. Right. And then return a. Like. My question is const B equals create signal. What's the type of
[00:56:33] , what is the type of B here? right? Like I can't, if I pass just the plane value, like a nit here, then if I, I
[00:56:51]  mean, I don't know why I would do this, but if I had like set timeout, a equals a plus one, or maybe set interval, maybe set
[00:57:05]  interval. Something. I'm just, just, just, just, let's make it mutable. Let's make it a plus plus. you can kind of see
[00:57:18]  from basic JavaScript semantics that if I did this, there's no way for B to ever update. If it is just a primitive value, it needs to be an object
[00:57:32]  wrap, or it needs to be a function call. Okay. So even if our compiler is really smart to like decide this whole area here, you know, so you
[00:57:45]  don't have to write the function calls, it still has to make a decision right here. does it return a signal or does it return, sorry, or does it
[00:57:54]  return a function call? Right? Like, and even return a function call will never update. Right? Cause everywhere else, if this, like, if you pretend that this
[00:58:06]  is like solids create signal underneath the hood, like this be create, you know, whatever, let's just, let's just call it signal. It doesn't matter.
[00:58:15]  If you pretend it's like solid signal here, this code would get compiled into like, you know, this would get compiled into like a setter, you know,
[00:58:25]  like set. No, we'd, we'd have like a and set a, right? Just, just picking a syntax doesn't really matter, but this would get compiled
[00:58:38]  into set a, a plus one. And you see everywhere there's a, you would call as a function. This would still not update. You actually have to know
[00:58:49]  it's not enough to see the symbols and know that you should, you know, access the variable. You have to actually return. In this case, return a function essentially
[00:59:01] , or return the signal. You can't not return it or only return the value. You like this, this is insufficient. you like do like, and this doesn
[00:59:16] 't get any easier because what if this was like a not set timeout? What if this was a setter like a set double value or something dumb? Okay. It
[00:59:29]  doesn't really matter what it is. I'm just making up a situation here, but let's pretend that every time you set a value, you actually wanted to set
[00:59:37]  the value time, the value times two or something, right? Something like this. And then you returned a and you returned set double value. Well, even if we
[00:59:47] 're going to be smart and say, Oh, if the return statement, don't call the function, pass the function through. am I wrapping this? Or am I
[01:00:00] , you know, like, am I wrapping this like this? Or am I wrapping this like this? I mean, that's what you're, you're actually going for
[01:00:12] . And what if I decided that I wanted to do something like B equals eight times two. I just moved it from there up to here. Like should moving it out
[01:00:44]  of the return change what like how it's processed. The, the, this is, this is a mess. It's very hard to solve this problem. And what
[01:00:58]  the view team came up with was they would use a dollar sign on their function to identify that it was like a special function. So the call, like the calling side could
[01:01:10]  be like, Oh, this is a signal because they need to know because the calling side, this is just a function. how do I know what's returning a signal
[01:01:15] ? I don't know. So it's like, okay, this, this is a signal. Right. And then they, on this side, they're like, okay
[01:01:28] , this is a reactive value we need to return double dollar sign. and I think they wrote and I think they wrote enough of those dollar signs and then they're just
[01:01:36]  like, screw this, right? Like, screw this. Because like, like, I think that the thing was the built-in functions could use the dollar sign directly.
[01:01:55]  And otherwise, you'd have to define a function that would be like a dollar sign like this or something. I forget the exact ref sugar. It doesn't really matter
[01:02:03] . This problem of permissibility of the, of the, like the atom values is one that I, that I wrote about a ton. You know, I should drop
[01:02:16]  this article in here. but essentially back in November, 2021, which is a long time ago, that was actually before the React compiler was even announced. That was,
[01:02:34]  that was like a very different world when I wrote this article. You know, talked about the destiny operator, talked about different approaches to doing compilation, right? Identifiers approach
[01:02:49]  was putting symbols on, on this side to say that this is a reactive value. This is the simplest version, but it's, at this point, you might as
[01:02:58]  well just call the functions was my argument. This is, this was Alexis's first approach. Then there's the, the Svelte approach of using labels. These all
[01:03:07]  have different trade-offs, which I went through in my last stream, but I think function decoration ultimately became the choice. It's what Marco does essentially with its tag approach
[01:03:18] . And it was also what you did, which I talked about in the Ref Sugar and what Svelte's doing with the, with the, the runes.
[01:03:27]  Right? This is what I was talking about, like how to say, like, get me the signal back. Like this, one wraps, one unwraps.
[01:03:39]  and my conclusion at the end of this, which I don't actually particularly like ages later, was that, that in a sense, two things, rich, and this is
[01:03:55]  before they went to ruins. I didn't realize that Svelte would ever make this move because I mean, there's something very nice about just using let variables and const
[01:04:04] s and just like having a simple language. It's not very extensible, but it's like people aren't thinking about tracking context too much. I mean, there
[01:04:15]  is the dollar sign colon colon, but I, I was like, okay, maybe rich is onto something with, you know, making it like JavaScript. so I was
[01:04:23]  like, what if we just went in and I went, I, I pictured a world where, remember I asked this question earlier where it's like, what happens when this
[01:04:31]  happens? Well, it's like, okay, well, we, we can automatically see it depends and we can wrap and we just start automatically wrapping all the tracking scopes
[01:04:39]  to make it possible that every single thing you write can be reactive and it all is fine-grained and it all feeds into each other. And I wrote this big thing
[01:04:48]  about how beautiful this could work and, you know, maybe with like cross-file compilation, we could like detect reactivity on the other side and connect it and
[01:04:59]  then like we can all, you know, live in this world. And in an article, obviously the cells pretty nicely, people are like, oh yeah, this is really
[01:05:08]  cool, I want to build it. Except no one built it. And the reason is because this is a really, really hard problem. Like, the problem is like those
[01:05:18]  boundaries are pain, you need to be able to analyze across. I was looking at things like, Esno or whatever, like types to try and figure out, you
[01:05:25]  know, these kind of things. I was looking at like, but I even, I didn't talk about it much here, but I even identified that like there needed to
[01:05:32]  be places where things weren't reactive. You needed a way of untracking in the language. You need the way to, like, if everything's reactive, like everything
[01:05:42]  becomes an infinite loop almost. You need entry in and out of the system, which means this language would be difficult to interrupt with JavaScript as it is, you know,
[01:05:53]  because once you left the boundaries, you have like this, like, is it a signal problem? Because this just wraps everything. Are you expecting everything to come out to be
[01:06:00]  functions? Like you suddenly have to worry about all the ugliness that the abstraction on top made. some people try to work towards this goal of like colorless cross
[01:06:13] -file reactivity, but no one actually has accomplished it. It's very, very difficult. The close, someone might argue that the React compiler is the closest to
[01:06:24]  it because they don't need like special stuff, but they do. They still denote state, you know, and effects. don't, they don't, you know
[01:06:35] , just have let variables and stuff. And while they're doing, you know, very clever stuff, very similar to this, where they're evaluating expressions, reacts reactivity
[01:06:47]  lives only inside the components. It's both their greatest limitation and their greatest strength. So it's like, it's just not the same thing. it was funny when
[01:06:54]  they were working the compiler that they're like, they're like, you know, they made some, somebody made some kind of comment around like what signals reactivity is only
[01:07:04]  inside, you know, the, the, the specific little primitives where us, you know, everything's reactive, which is fair from their perspective because they live in a
[01:07:13]  world that doesn't exist beyond components. Right. But if you live in a world that exists beyond components, then like, it's kind of the opposite because you can
[01:07:26] 't, you know what I mean? Like their ability to be fully reactive and the component is no more impressive than the fact that a create memo calls reactive. It's,
[01:07:36]  it's just, it's just a pure computation. Right. It, so a whole reason I'm building this up is because I don't know if this language, like
[01:07:53]  language like this is really where we want to end up. The whole preoccupation with this was solving this problem of like what to do with these expressions, because once you
[01:08:06]  do this, you'd be like, okay, well then we can make these structuring props work, right? Every focus, even back to this was around tracking context.
[01:08:18]  context, it was around identifying and possibly, possibly, possibly like automating tracking context. and the guidance on felted something that I honestly didn't expect from them
[01:08:43] . And they said, screw tracking context with our compiler to a certain degree. They're like, no, no, we're not going to convert this into this. We
[01:08:55] 're not going to make you do this necessarily this. If you want this signal here or any of this crap, if you want this signal here to leave the scope,
[01:09:15]  you got to wrap it in a function yourself. but that's, that's what they said, right? Maybe they don't use a syntax. Maybe they do this
[01:09:26]  and they use get, you know, maybe a set, you know, get a set a, maybe these getter setters. Let's call it value just to,
[01:09:47]  you know, make it look like view. Um, but like, basically they're like, initially, I don't know by the time they release it, they're
[01:09:57]  going to hold to this. I think they're really into classes these days. Um, but my point is they, they were very much getting into a zone where they're
[01:10:10]  like, we don't have an opinion about this. It doesn't matter. You will build APIs in the, you know, the best way. Patterns will trick
[01:10:19] le to the top. And I was like, well, that's cool because we already have the best pattern in solid. So, you know, there you go. I
[01:10:27]  just create, I, I just made create signal install five. Right. What does it state? And that'd be funny. Uh, Evan did post something like exactly like
[01:10:37]  this on, uh, on, um, on, on, um, on, on X a while back. Right. But at this, at this point, you
[01:10:49]  know, you're kind of like, if I'm going to do this anyways, why do I even need the compiler? cause now, you know, I'm basically
[01:10:57]  on this side using, you know, a dot value, I guess, I, I guess I actually, I, I actually, I guess this is technically a view ref
[01:11:06] , you know, and a dot value, you know, plus plus, right? finish the implementation, right? But there is something kind of genius about this. God
[01:11:34] . Yeah. I mean, classes for reactive data is fine, but this is like overkill when I'm just trying to create a signal, like, like it's classes
[01:11:44]  and all this stuff is way overkill. And I understand people, yeah, we do full circles on this. So classes will be the next thing, I guess,
[01:11:53]  but. Right. Yeah. The interesting thing is the biggest benefit of short cutting is the computation notes. It's less the signals. It's actually the computations. There
[01:12:11]  is a trick that, um, uh, the guy from SJS created, uh, uh, a long time ago, where if he tracked that there was no reactive
[01:12:22]  scope, instead of this, instead of like keeping the computation around, he would keep it around, but he would not like, he wouldn't keep it with that. He
[01:12:34]  basically say, okay, no, this is no longer comp, uh, uh, uh, computed, he'd hold it. And then the next computed that came around
[01:12:41] , we just reused the, the, the, the allocated memory. So he basically over, he basically engineered out the overhead of values that couldn't react. Essentially.
[01:12:52]  It was, it was, it was interesting. Um, just an aside. I, I, I, I, I think that I, I think there are benefits
[01:13:03]  to this and some stuff in SSR that are similar, like, to be fair, if you saw, see solids, SSR, we don't have reactivity on
[01:13:11]  the server, um, the, we got it, all the computation nodes, and it's just a bunch of function calls. That's solids without using a compiler managed to
[01:13:20]  remove the overhead of reactivity. That's how it got so fast at server side rendering. So like, yeah, I think that this in theory could be improvements,
[01:13:31]  but I, I put this on the resume ability scale of optimization, probably less actually. So this is not very like, from my perspective, not one of my motivators
[01:13:43]  here. I, I don't, I think it's novel, but I, I also don't think it's actually that important kind of tip, like the optimizations
[01:13:51]  that come from lazy memos. There's a reason people want lazy computed values, but the truth of the matter is like that one is an example where people write code
[01:14:01]  a certain way. Things are more expensive than they need to be, but it happens rarely. But when they do, they get hit. This is more like. You can
[01:14:09] , you might be able to optimize out in a few like key hot path scenarios that would show up really nicely in a benchmark, but nowhere else. I still think it
[01:14:20] 's interesting, but it's also only one way to attack that. Anyways, moving forward. Let's, let's put that on the positive list though, in general.
[01:14:30]  So like we're getting there. Well, yes, and this is why we're exploring this stuff because of the JS feature, but the, you understand that let's
[01:14:43]  pretend we're language designers here today. The, the, the, the JS language would have a hard time solving this problem is what I'm getting at. You, they
[01:14:54]  don't want to treat every variable as reactive, right? That could be potentially reactive. like this, this whole, this whole thing is, you know, something that
[01:15:10]  we have to kind of consider the full scope of it. Right. And, and for me, I realized that my biggest problem is that I've been way too ambitious
[01:15:22]  on what I want to get out of this solution. Yeah. Well, because not only is it probably tricky to have an atomic primitive. by default, it couldn't
[01:15:42]  do anything different. Like without this kind of wrapping that I just put here, then, you know, when you do the return, a compile to calling the primitive, basically
[01:15:53] , if, if you came up with an atomic primitive, like in the, in, in the, in the, in the, in the browser, that was like,
[01:16:01]  I only work within scope. And I, I can be accessed on get in set, it would be gotten as a return. You, you're still forced into this
[01:16:14] . If you want to transient, have that, you know, be transient across. So like, yeah, I was kind of like, why am I even talking about
[01:16:37]  this today? If I sound so negative, well, Rich Harris posted something and it got me excited about this stuff for a moment. And the reason it got me excited,
[01:16:52]  let me see if I can find it is where is it? He posted, he posted something here where he's like, ruins walkthroughs from this coding demo I
[01:17:07] 've done. What's the reason behind dollars on drive, accepting the result of the expression by default, not the function that produces the result. I know, but is it
[01:17:15]  ergonomics, blah, blah, blah, blah, blah. We'll talk about that in a minute. I think the decision was not just to do the direction, not
[01:17:20]  having any side effects, the drive function. Okay. Blah, blah, blah. Want to screw some function. I can do anything. That's so funny. That
[01:17:26] 's like literally what I want to encourage with solid, but. But let's move on. I mean, I do want to be restricted around effects, but I think
[01:17:35] , I think setters are incredibly powerful. We'll get there in a minute. So this was basically the whole reason for adding ruins constant of doing signals like almost everyone else
[01:17:42]  does. There was more to it. And every other transition, you have two ways of doing things. Rep versus reactive signal versus store. And we don't like the
[01:17:49] , the ergonomics, right? We'd ruin signals faster and sr way faster. Yeah. I'll hold you to that. Rich. Let's, let's benchmark
[01:17:57] . I, I actually, I guess it's Dominic I'm talking to, but I, I, I'm, I'm going to, it is way faster than
[01:18:05]  a reactive system, but, um, the overhead of the function calls versus not. I'm, I'd be interested to see if this actually has any kind of tangible
[01:18:13]  difference, but let's. But, but this is the first part is more interesting, right? But it's only half of the thing, because if you've been
[01:18:24]  following my stream recently, you know that I've, and I just haven't written the fourth article in my series yet, mutable reactive state and immutable reactive state have
[01:18:36]  different properties that are not well understood. And I think the danger of designing compilers at this approach is that we don't understand reactivity, um, as well as
[01:18:45]  we should. And I think that it's a little bit premature. Um, but biggest trade offs that you can blah, blah, blah, blah. I mean,
[01:18:53]  destruction works. View store, blah, blah, blah, blah, blah, blah, blah, blah, blah. But yeah, he says something here. You also can
[01:19:01] 't do counter dot count plus plus for imported state. What do you mean? Right? So. There's this example here where we're essentially click counter plus plus and they
[01:19:13]  import counter from another file. And in this other file, they just have a state variable, which is like a store. essentially import to the app and you can click
[01:19:24]  it, you know, like this. And I have to admit. I was disappointed. I was a little bit disappointed. You might be like, well, this makes a
[01:19:44]  lot of sense. Right. And, and Rich's response to me later is like, if you export it from objects or frames, does anyone keep referencing easy to expose
[01:19:53] ? Read only view if necessary. If you create a stable, blah, blah, blah, blah. You warn you, you're right. So they're basically saying it
[01:19:57] 's free game. Right. Cause I was like, I was so stoked that this wouldn't work because picture, picture the scenario. See this, this works, right?
[01:20:06]  It's almost like riches example, except instead of passing, instead of passing, you know, use it or count directly to child. Where's where's riches example.
[01:20:17]  See, he, he went click count. And then this, and then just has some child component that I don't, that imports it as well. Right. I
[01:20:23]  was like, let's import it here and then pass it down to the child and the child could click on it and do the plus plus. And this is the reason
[01:20:33]  I was so disappointed because how is it that, sorry, in this example here in app, I can import some state from Svelte, pass it to the child and
[01:20:47]  the child's updating the state. I mean, technically I know why it works, but if you guys remember, I had an article that I released a few weeks ago
[01:21:00]  where, um, uh, let's see if I can find it. Uh, what was it called? It was, uh, two way binding is a two way street
[01:21:15]  or something. Um, and at the end of the article, I show this example where one is them getting two way binding and solid. But the other example was I
[01:21:34]  was talking with, uh, one of the guys who works a lot with Svelte and I was like, oh, I figured out how to make stores in Svel
[01:21:44] te three, essentially. It would be a way of putting top on assignment, the parent whenever nested. So basically I, I, I have some code here in
[01:21:55]  this example, but I essentially made like make proxy state like a store and then had it so that, um, I can't remember how I did the make changes thing,
[01:22:07]  but essentially I was using pre ruins. I had a way of essentially making this deep reactivity, but the problem obviously that I was going here, that was okay.
[01:22:19]  This is my implementation of it with a proxy and whatever, but the, the, the problem with this approach that I was making it was that it was implicit, um,
[01:22:29]  two way binding essentially. Right. Like, which is what I'm getting at here. It's like the problem with deep reactivity that you can just pass through the tree
[01:22:39]  is that like someone later gets a value, doesn't even realize it's special. You know, you know, I put count, which is silly. You can tell
[01:22:47] , but someone can like mutate something anywhere in the tree and just go, you can't even tell where it came from. Like, what is this user? Where did
[01:22:53]  it come from? Right. It's, it's, it's basically that. And I, but I started thinking, I was like, I've been, we
[01:23:03] 've been so hung up on their whole virus. They, they want us to work. Like, yeah, but this is what I'm getting at. The best part
[01:23:13]  about felt. The reason that I like salt so much was because you couldn't do this because reactivity can't live the scope. If leave the scope, like if
[01:23:26]  I'm going to go through all the effort of, of like this, it's because like, yes, I chose this, but it's because I can do this.
[01:23:39]  Do you know what I mean? Like, this is beautiful. You know how I talk about read, write segregation and I like solids built on and all this. This
[01:23:48]  is better than read, write segregation. This is like, no. So. Yeah. It's not about reduct being too much boilerplate. Like. Yeah. I
[01:24:11]  mean, I don't know the context of it. Well, I I'm let's pretend that I'm okay with it, with this, like, you're not
[01:24:20]  being able to tell that this is reactive. Like that, that got me at first. Cause I was like, why am I wrapping this in a function? Like I'm
[01:24:26]  a developer. I got some state. Why do I, why do I need to know that I need to wrap this in a function for it to escape? But if you
[01:24:33]  can accept this as a first principle, like Svelte has here, like this is a primitive level, not on a thing you have just created. You've gotten
[01:24:46]  rid of the read, write problem because you like, sure, I did get set, but like a pattern that I like, you know, for example, is a,
[01:24:58]  and then we can implement increment, which is a plus plus. And then decrement a minus minus, and now you're not like, this is the whole reason why
[01:25:17]  solid has read, write segregation everywhere. It's because now, like the, the actions, like what you can do, the mutations are fixed. These are the old
[01:25:38] , you can't do this. The only thing you can do or whatever ref, doesn't matter what it's called. The only thing you can do to this value a
[01:25:50]  is incremented or decremented. If you want to know all the possible mutations that happen for the, this state a in your whole app, you, you, you
[01:26:01] , you need only look in this one location. Even if it gets passed down 10 different components or whatever used all over the place, you only need to look right here
[01:26:14] . Yes. This is the only way no read, write segregation is, is, is, you know, it's viable. Right. I like, from my perspective
[01:26:29] , this is the importance. Like you don't need, it's so funny because like react, you know, city was about immutability. It's not about
[01:26:37]  immutability necessarily. It's about the ability it's about where the rights can happen and the traceability unidirectional flow is more important than immutability.
[01:26:49]  Right. You don't need to clone everything. You don't need to like, guess what? We're, we're building UI stuff changes. Like what's the difference
[01:26:59]  between a mutable structure and 10,000 immutable atoms. There is one and we'll get, we can talk about it, but, but like, essentially if
[01:27:13]  the whole state isn't a single immutable atom, you you're now in a mutable world. What's important is the control. Right. So like, yeah,
[01:27:34]  I saw that. And I was like, what if this was true for stores too? What, what, what if, what if I could make this a list of
[01:27:49]  users? And yeah, I mean, it's a proxy now, so I don't care. Um, but then it could be like, add, guess what,
[01:28:02]  we're not allowed to remove users from this list. You can only add users and you can only set the street name. you know, so you need user ID for
[01:28:18]  that and name and, you know, I don't, it doesn't really matter what the logic is in here. add, um, I don't know, whatever
[01:28:35]  takes a user user push. I don't really care what we're doing. I don't care what we're doing. Okay, my, my, my, yeah
[01:28:46] , I'm not going to put the implementation in my, my point is that now when I'm down here, wherever I use this, whether it's imported, whether
[01:28:56]  it's created, whether it's context, whether it's whatever that's street name, whether it's created, as I said, yeah, created, uh, within
[01:29:09]  the scope, a dot, a zero dot address or whatever equals something. Guess what? Nope. If I pass it into a component, nope. Technically. This is read
[01:29:33] , write segregation. But this isn't so. I mean, there, there. I, I, this is the composability of something I'll get to in a
[01:29:48]  minute where you, you know, you might want to not be forced to do this. My bigger gripe is not about the stores. It's about being in a place
[01:29:57]  where instead of, you know, let's copy this. It's not this. It's, it's this. It's like, now this is component. And
[01:30:07]  we create some state. And now. When we. Go and. You know. I don't know. For. It's using solid for an example here. It doesn
[01:30:25] 't really matter. Each. Users. Yeah, it's interesting because. Doesn't really matter. I'm going to do user. Whatever. User. If. I
[01:30:46]  pass. This. Down through here. Like this. Whatever. I'm missing some. Brackets somewhere. Probably these ones. If. Can I tell typescript
[01:30:59]  to be quiet? Okay. Whatever. If I do something like this. We know that this. Can't be written to. It's like this side is. Can
[01:31:11] 't be written to. But if we also want to be like. Oh. Actually. You know. We want to be able to. What was it? Set street name
[01:31:18] . So like. It's like. On. Street. Change or. Whatever. We can still go. Like users. You know. I'm assuming this will get
[01:31:36] . Like. Technically. Closure here. We have the user ID. So like. We could do something like. Users. I'm just. This isn't the right
[01:31:47]  data structure. It's an array. Not an object. But. I'm hoping that you get. Where I'm going with this. Let's just. Give myself
[01:31:53]  a little bit more. Just zoom. But you can basically like. Look up the user. Address. And be like. Oh. Three. Name equals value. That
[01:32:07]  you get from the event. Right? Like. You could fully. Just mutate it. Right here. Um. Because you're still in the. Binding scope.
[01:32:21]  So it's the same. Thing that applied. To our ref up here. It just. It's it's it's it's. It's down. It's just
[01:32:27]  down here. Right? So now. Again, if I'm inside. Function user. Or, you know, our component. You know. I'm inside here.
[01:32:37]  We're not going. Like. And I get some props. And I get like. Props user. If I tried to be like address. Dot. Street name
[01:32:52] . Equals blank. It's going to be like. Nope. But. If I call on street change from the prop that works. So like it's read, write
[01:33:07]  segregation doesn't go away. It's just you can write your local code much cleaner. Because you can actually see every mutation. It happens in the scope. Every possible
[01:33:18]  change to the state. Will be visible within this scope. Because you can't. Pass a value out and change it. Pass a value out and change it. Okay
[01:33:38] . Sorry. Got to catch up with chat. You guys still with me? Well, there's a lot of random messages in chat. Sorry. I was going off there
[01:33:49]  for a bit. Where are we? Okay. People switch from Svelte to React. Because they don't like Svelte. They want one-liners
[01:34:07] . Yes. Getting back to change. Which is why Svelte 3 or Svelte 4 is great. Svelte ruins our departure from that. I think ruins
[01:34:15]  are great. Because I mean. Why wouldn't I think ruins are great? Like it's. It's basically. Like. Like the difference. The difference between. Like
[01:34:26]  what Svelte 5 is doing. Is all it's doing. Like mechanically. Is now. Almost nothing. Nothing. So yeah. Yeah. Yeah. Yeah
[01:34:38] . Yeah. Yeah. Um. Where are we going? Okay. Is this where we get to be dangerous with JS? Sorry Ben. I missed this earlier. Yeah.
[01:34:51]  I mean. Let's push the boundaries. Yeah. I'm going to talk about that tweet later. It's just. Yeah. I don't know. Maybe. Maybe
[01:34:59]  this is where we get to be dangerous with JavaScript. If download numbers. Do type. It's felt. I show us anything. Only about one third of people.
[01:35:09]  Care about read write segregation. Oh wait. Sorry. Two thirds care. Not one. Okay. Right. Composition. There is a case for being able to
[01:35:36]  define your own state dollar sign is, is where this goes to. Like we don't want always to do this when we're designing primitives. We don't,
[01:35:48]  we want to have the superpower ourselves, but from a pure, from a purist standpoint. Being able. To. Basically. Know that where this enters. You can see
[01:36:04]  all the mutations that possibly can happen is an incredible control tool. So, I mean, I don't know. We'll see if they change. I mean, this
[01:36:19]  is, this is, this is, this is one of those questions that like people do want stuff to be easier, but easier can fall into traps perhaps. Right. Like
[01:36:29] . It's. Where do you draw the line? I'd see for spelled. I thought philosophically it was. Um, like, I thought like the way that
[01:36:42] . They, that like steak reactivity couldn't leak. I always thought was like the best part of, about Svelte. It was kind of genius. Um,
[01:36:53]  really. And. The fact that they can merge signals and, uh, and, uh, stores is also great. Cause like as a developer, now I'm not
[01:37:04]  worried. Like this same characteristic applies regardless of this with a single state primitive. It's kind of nice. Yeah. But the problem is it's not just a type language
[01:37:20] . Like that's, that, that is why it's, it's hard. You need the compiler to be aware of the types. So yes, that's part
[01:37:28]  of it from like the automation standpoint, but it doesn't. It doesn't change the, like the execution standpoint is still hard because you need to know the difference between like
[01:37:40]  the difference between writing a value and accessing a value are something you can see syntactically to a degree. I, I actually, I'll talk about that in a minute
[01:37:49] . When we talk about foot guns, we haven't really got to foot guns of this approach yet. Um, but like passing it out. It's, it's
[01:38:01]  because it can't be two things at the same time. And like, cause like, I mean, when I have a variable a, is it this, the reference
[01:38:18]  of a, or is it, or is it the, uh, um, the value of a. And yeah, I guess it means you have to mark the reference.
[01:38:32]  You know, we have to start, you know, maybe we just start doing this. Right. Whatever, you know, but like types alone. Aren't enough because
[01:38:43]  wherever a sits, we have to make that decision. When we see a read of a, we have to know whether it's the, the reference or the access. And
[01:38:51]  a way of looking in JavaScript today is it's always the reference for signals today. And then you have to call something to access it. Right. Whereas what this wants
[01:39:03]  to do is invert that. So that it's always the value unless you, you know, market as a reference, but. There's like too many dollar signs,
[01:39:17]  so to speak. Right. Because the calling side doesn't know what references it's going to get. I guess you could argue that if you returned reference of signal of number
[01:39:28] , then the problem is on the other side, you don't, you want the dereference to happen. Right. You, you want to define a function that returns
[01:39:37]  a reference of signal of number. But then when you use the value on the other side, you want it to be valued. So that's why you have to decorate both
[01:39:45]  the way in like the state or signal or whatever dollar sign and the way out. And this is just. It's a lot easier to decorate the way out. Definitely.
[01:39:58]  But it's hard on this side, unless you have like a very specific format. that you have to restrain to, to know how to undecorate on the
[01:40:08]  way out. Is it always just a single value users? What if it's an array with multiple things being passed? What is, how do we know how to decorate it
[01:40:15]  out? And I guess like. Yeah. I mean, I, I was looking at types systems to do this for me, but like. Yeah. I mean,
[01:40:34]  I was looking at this for me, but I was looking at this for me. And I was looking at this for me, and I was looking at this for me.
[01:40:40]  And I was looking at this for me, and I was looking at this for me, and I was looking at this for me. And I was looking at this for me
[01:40:43] , and I was looking at this for me, and I was looking at this for me. And I was looking at this for me, and I was looking at this for
[01:40:44]  me, and I was looking at this for me. And I was looking at this for me, and I was looking at this for me, and I was looking at this
[01:40:46]  for me, and I was looking at this for me. And I was looking at this for me, and I was looking at this for me. And I was looking at
[01:40:48]  this for me, and I was looking at this for me. And I was looking at this for me. I don't see how combining single prim is a big advantage
[01:41:10]  unless we could combine derive signals and derive stories and fully remove the mental distinction. Well, no, there is a mental distinction here. It's funny because we don't
[01:41:27]  talk about drive stores much. But one, a computed value in a reactive system is an immutable projection. What I mean by that is, like, it doesn't
[01:41:46]  matter what the source is. But if I say, like, const first name or something. Create memo. User dot first name or something. Okay, it doesn't matter
[01:42:02] . What I am saying that the returned value from this is this, I could construct this from a bunch of stuff. I could be like, plus. Whatever, you
[01:42:18]  know. And. But it's the returned value from this that we're projecting out. Whereas what I've been calling a projection. You know. Projected user.
[01:42:41]  Create projection. Let's just call it you for now. Is. Is. Is. A representation of this in here. That gets mutated. By the outside world
[01:43:06] . Like you is this. So you don't return it. You mutate it. So like. There's a. There's a big difference in my mind.
[01:43:25]  Between. A dried value that. Is immutable. That like returns the new thing. And when there's mutated. The only way. The reason that you can merge
[01:43:39]  state. You know signal in store. Or whatever. Is because. It's always mutation. Right. You basically say that nothing's immutable. Like you. You
[01:43:52] . You can always reassign. State. You can go users equals an array. And then later go users equals two. You know. Like. It's. Right.
[01:44:05]  Whereas. It. In order to like. Make. This into. These two things into a single thing. I think the only way you can really do it. Is if
[01:44:19] . You said that. It was more like. This. And you're saying. Hey. I'm replacing. This. With. With this value. In the same way
[01:44:34]  that I replace it here. Then. These could be the same thing. But. If you're going to say that the return value. Is it. It's.
[01:44:42]  It's like. It's. It's. It's mechanically a different thing. Yeah. Yeah. Derive stories between the cutting edge. People haven't really explored
[01:44:58]  the space much. I haven't even written the article on it yet. But we've talked about it in the stream. Right. But. The first thing you're
[01:45:09]  going to notice about. Is actually. The importance of. Of. Of actually having the function. Right. Because in Svelte. There is no function. Right.
[01:45:23]  Like it's always. Like this with the ruins. Right. Because they don't want you to do stuff. And this is. This is actually kind of. The
[01:45:31] . Where I started having. Some issues with this premise. Because I love this. To a certain degree. Like just picture. Being able to like. Reduce the reactive
[01:45:40]  language. To like. Basically. Singular state primitive. Or signals primitive. That could be deep. Or. Or not. And then. You know. Effects.
[01:45:53]  Stay the same. And then you can have some. You know. Mutations. You know what. Let's just. Let's just take a look at the hack MD
[01:45:59] . I wrote the other day. And kind of get into that. Right. I'm just going to. Drop this link in. Basically. I've already kind of
[01:46:12]  summarized it. I wanted to do it visually before jumping into this article. I'm too low key. But why not always. Projector derision. Why memos
[01:46:25] ? Yeah. Yeah. Well that's what I was. Sorry. Just trying to show. It means that. What does double count look like? We. Const count
[01:46:35] . Equals. A signal or state. It doesn't matter. Zero. Const. Double. Count. Equals. Memo. You. You. Equals.
[01:46:55]  Count. Times. Two. In my. This is why. In my opinion. I know that sounds silly. But like. Sure. Maybe you can accept it.
[01:47:15]  But like. Essentially. Yeah. I mean. I don't know. I don't know. Sometimes. If. The thing is. We. The reason that no
[01:47:33]  one's gone into derivable. Our derived projections. Like stores. Is because it's complicated. And it's messy. And it's not as nice. It's way
[01:47:41]  easier to do. Immutable. Derived values. That's why. Even when. Introducing it. I think. 99% of the time. Not 99.
[01:47:52]  Maybe like. 95% of the time. People are still going to be using. Like. Simple. Immutable. Derived state. So it's like. It's
[01:48:01] . Yeah. You guys are both. You is. It's self. It's. It's. It's. It's. It's kind of like. The
[01:48:17]  previous value. But it's also. It's. Self-reference. So. Like. It's. It's. It's the internal representation. Of double count
[01:48:26] . So. Like. Because. This function. doesn't. Return anything. Is what I'm getting at. It's not a memo anymore. It's like.
[01:48:45]  Project. There we go. Whatever. It's a previous value. And the future value. Yeah. This is a powerful tool. It's a lot. As a base
[01:49:02]  concept. It's the thing that. HP people hate. Yeah. Well. Okay. Why do we think. We can combine this. I told you that. I
[01:49:26]  didn't. Make a big deal. About some of the compiler. Optimizations. applications. But what's really cool. About. This. You know. How you
[01:49:36]  can see. All the changes. In one location. Right. The thing I've been stressing. You know. Like. You can literally see. Every possible mutation. In
[01:49:44]  front of you. Is you can tell. If. People. Do. Deep mutations. You can literally. Look at the code. And go like. Yeah. Needs
[01:49:52]  to be a store. Nope. Doesn't need to be a store. You can. You can literally see. From the code. Written. If it needs to
[01:49:59]  be a store or not. So. The. This is the. I. I didn't emphasize. The genius of the. Spell approach. On the other hand.
[01:50:10]  I've talked about. The read-write segregation. You know. Generally speaking. Like. In terms of like. Keeping local. And be able to control it. But
[01:50:18]  that local control. Means you don't need. Cross file compilation. To like. Know all the possible. Changes that could happen. To your data. So you
[01:50:25]  can actually. Look and be like. Yeah. And it's not a type thing. It's literally. Does this act as a property. And assign a nested property
[01:50:33] . It's like. Yeah. Yeah. I mean. Projecting completely. 100% Rambo. Is keeping memo. For perf benefit. No. No. I
[01:50:58]  literally just thought. It was very confusing. To tell people. That they. Had to do this. Instead of. Memo. Like. I feel like. It's
[01:51:08]  the kind of thing. That like. We could literally. Introduce two primitives. And if no one ever used memo. Again. We could say like. Okay.
[01:51:13]  Well. That's cool. But my gut. Is that they will use memo. All the time. Because like. Most of the time. This is not actually what
[01:51:23]  you're doing. But again. We could look at this. This time in this scope. And be like. And see all the possible mutations. And be like. Huh
[01:51:36] . This. Doesn't need to be a store. So. From a performance standpoint. We don't have to. Necessarily take the hit. Right.
[01:52:00]  okay introducing state blah blah blah blah we we did all this yeah there's one thing that i didn't actually show on the stream yet but how the mutations would actually transform because
[01:52:12]  i always switched compiling to the functional form because there is one benefit of the setter with the function do you know what the benefit the setter with the function is
[01:52:27]  s has the potential being untracked right so like if someone called you know state state.count equals five inside an effect you know the function form can tell it you know
[01:52:54]  like this one's not bad because you can see that it never needs to get the value i mean there's an argument here but one of the challenges with deeply nested
[01:53:03]  reactivity is that i mean i could that's mutable i mean i could create the it myself but like think think think about create effect in solid and think if someone
[01:53:23]  sets a store in here now i know we shouldn't be setting stores in a tracking context so maybe this is something that goes out the window in the next version or whatever
[01:53:30]  you know eventually but there are times that you should be setting value or you need to set values and effects not for synchronization but when the source is from the outside and um
[01:53:43]  yeah what what just picture the difference between solid set store when we do something like users zero zero first name and what's the value going to be um from something else uh
[01:54:07]  first name signal okay picture the difference between this and and this. You would track address because the getter gets called. Yes, yes, yes, exactly. You
[01:54:55] 're this is a set operation, you actually don't care about the chain up to here, the last. JavaScript is like smart enough that on the last property, like if
[01:55:05]  it just s stop first name equals, it won't do the getter it knows it's an assignment. But every part of the path up to that point is getting access
[01:55:13]  and tracked under the effect. Which means like, I mean, this probably doesn't happen too often or doesn't matter. But you get weird re triggers that have nothing
[01:55:24]  to do with the operation, like a set operation here. Like, its effect doesn't really depend on user zero, you know, I mean, like, it's one
[01:55:40]  of those interesting scenarios where this, like, this effect only really wants to run when first name changes. changes, it doesn't necessarily want to run when the left
[01:55:51]  hand side of the expression changes. So, not in our case, because the last property first name doesn't get got. And that's the only one being written into
[01:56:04]  because this is fine grained. It's, it's not necessarily an infinite loop, but I can pick up, I can picture system scenarios where it would be an infinite
[01:56:11]  loop. Like, I think if I did something like this, this would be an infinite loop, I think, because it, it reads the length property. it
[01:56:27]  reads the length, and then changes the length. Anyway. So, yeah, I mean, one of the biggest values of the setter function. is actually to unt
[01:56:57] rack the source so that it doesn't participate in it. So, along my compiled output when I'm using setters are being kind of smart that way. But if
[01:57:07]  you think about it, that also applies to, like, mutable derived values as well, right? It's an interesting challenge, right? Because knowing what the track
[01:57:21]  and not track is actually something that I want to, like, think about even further in here. But when you move to these types of interfaces, things where you're
[01:57:33]  doing direct mutations like this, this kind of becomes a zone of concern. Where was I going here? Yeah. Yeah. Yeah. Yeah. I'm using, in
[01:57:46]  here, I'm using, like, produce as the default just for the sake, because that's what I've been using in our conversation. Yeah, we covered most of
[01:57:56]  this stuff, right? I talked about this increment decrement, boo, boo, boo, boo, boo. Okay. Yeah, we're at this point. Okay
[01:58:08] , cool. So, I've already talked about this a bit, but I was like, okay, let's pretend that even with all this stuff, we were just going
[01:58:18]  to try and make this work. And what I came up with was, what if you said that you had to follow a very specific output format? That is, a dollar
[01:58:30]  sign function could only return. either a reactive value, or an array where the first index was a reactive value. I know that seems incredibly restrictive. But if you put
[01:58:47]  that restriction on this, right? So, like, you would be able to have the ability to find your own dollar signs, essentially, where it's going at.
[01:59:02]  Right? TypeScript will play along since you're returning either a reactive value or array where the first index is a reactive value. That means you don't have to do special
[01:59:10]  wrapping. we would, like, literally see, like, oh, it's a, right? Like, if you return, you know, where was the example?
[01:59:17]  Like, it's count. It's a number. Number. Right? And I would say signal special is the only primitive that can return a directly mutated. This
[01:59:32]  does not mean it can be still. These will still be able to use a setter function, blah, blah, blah. Yeah, talked about this. Talked about
[01:59:40]  this. Yeah. Yeah, this is the memo conversation we just had async and project. But I noticed a problem with this. See, like, this, if
[02:00:03]  we just fed. Yeah, produce could be a better word. Because the produce version of solid setter doesn't exist anymore. It is just the setter. And we
[02:00:15] 'd be hiding it if we were, say, using a compiler like this. Right. Create produce. Yeah. That's, that's great. Uh, right.
[02:00:28]  Yeah, I, I, that's a problem. I need, like, a, I need a noun version. Create producer. Um, but. Yeah, I
[02:00:38]  was, I was building all these examples and I was like, yeah, you know, this would work. You can see this kind of symmetry here where most of the base
[02:00:50]  primitives all just return a single value because it's only, and it's only signals that actually return the, you know, also return a single value, but they're
[02:01:00]  mutable. All the rest of them aren't mutable. All the rest of them aren't mutable. Um, obviously. Yeah, I, I, I
[02:01:05] , you could even make tight script play nice. I think with this where you can make the memo wrapper take type T read only T or whatever, essentially. Um,
[02:01:16]  but I actually hit, like, I was talking about how the, the setter functions are kind of really powerful. Right. And this gets rid of the setter functions
[02:01:29]  because you can't really have a setter function anymore because of the, I mean, you can, but it's weird with the immutable mutable change. Like
[02:01:39] , do you return the value from the setter function? Like if you, if you take the function form of the setter function, is it the value return or do
[02:01:47]  you mutate it inside the setter function? Which is weird because then why are you calling a setter function? If you're going to mutate it, right?
[02:01:53]  You get, you get the kind of like oddity of, of this, but then I came across this and it completely went over it. For those who don't
[02:02:06]  know reconcile is what solid uses to diff data, say from the server. It's very, the biggest use of project would is, I imagine would be to reconcile stuff that
[02:02:19]  comes from create async. You could also, you know, people use it when they write to stores, they will have a new external data source and then they'll write
[02:02:29]  to it and they'll, they're trying to do like a diff essentially. So they, they call reconcile on the setter, the function, you know, you
[02:02:36]  get the previous value in. Well, we have a bit of a problem here. Perhaps because. Let's consider our state primitive here that we've been looking at and forget
[02:02:53]  about this for a second. where we've got our store, you know, like this and I go, okay, on value change. You know, I actually don
[02:03:04] 't need to use any of these built-in ones already, but like somewhere in here, I have a store. Okay. Whatever. This is a store. Okay
[02:03:17] . Store. And. Maybe there's a dollar sign there too. It doesn't matter. And now I'm like, okay, let's name it store too. Just
[02:03:26]  as well. Okay. And then I'm like, okay, I'm going to update the store with some fresh data. And I'm like, okay, so
[02:03:39]  let's reconcile. So let's, so it's a diff function. And. Well, how do I even write this? I can take the new value. And pass
[02:03:53]  store to it like this. Okay. So that, that works. I mean, you can pretend it's two arguments. You know, maybe, maybe we do store
[02:04:00]  and then we reconcile the new value, whatever. It doesn't really matter. But do you, do you see the problem? Side note, solid set store used to work
[02:04:16]  this way. And. I had to change it. We used to do the produce behavior by default. If you like mutated stuff. And then if you returned it like
[02:04:26]  over it. The problem actually came down to code paths that returned undefined. Because when you return undefined. Are you clearing it? Or are you not
[02:04:37]  updating it? Like. Now what's cool. The compiler is you could look and see if it returns anywhere and be like, look, if it returns a value at any
[02:04:49]  point. Then we're going to assume that you always want to mutate. I think. Otherwise. Otherwise. If it doesn't return. We're going to.
[02:04:59]  Sorry. If it returns anywhere. We're going to assume that a return of undefined means that you want to clear it out. And if. It. And if
[02:05:08]  it doesn't return anywhere, then we can assume that you want to mutate. But like, there's a weird inconsistency that the difference between a function returning und
[02:05:16] efined and returning, not returning is indistinguishable. And it's very weird when someone can write code that's kind of like mutable versus not mut
[02:05:29] able and just like switch it and like not realize it. Like it's, it's a very odd. I think it's the kind of thing people just like fall
[02:05:36]  into. Anyways. Import empty from solid. Yeah. We start going with that. Like right now we, we actually use undefined in our store setters.
[02:05:50]  And it's in some ways I wish we had. Had empty, I guess. Cause then we could actually delete properties, which we don't do right now. I didn
[02:05:57] 't think it was a problem, but we, we are where we are. I'm just, I think it's okay that these are different, but has anyone figured
[02:06:07]  out what the problem is here? I actually want participation from Chad. I'm going to take a moment. Someone's going to take a guess at what the problem is
[02:06:18]  here. I actually want participation from chat. I'm going to take a moment. Someone's going to take a guess at what the problem is here. Is it that
[02:06:29]  people don't know what reconciled us? Oh, yeah, yeah, yeah, yeah. You know what? Dev, you're right. This is probably confusing
[02:06:50] . And you're right. Let's make it store state or whatever. Let's just let's make it. Now it's the official primitive. That's not that's
[02:06:59]  still not the problem. But you're right. Yeah, or it's exactly the opposite problem. It's it's it's it's that you literally can't do
[02:07:21]  this. The reconcile function can't modify the store. Right. Like, it gets store and starts dipping the data and applying it and then it won't be able to
[02:07:38]  write to it. Yes, yes, yes. So while the in scope thing is beautiful property. property. It's like what makes this so powerful. You can't
[02:08:00] . Compose the mutation behavior. All your sign reconciled. Yeah, sure. I'm glad I came up with a good one. What if you want your
[02:08:18]  own diffing function? And this dollar sign means something different. Now, it means you can write it so it should actually dollar sign dollar sign, maybe triple because we always
[02:08:27]  have reference we have, we have the, we have the one that says this is a return unwrap. We have the one that says this is a reference. Send as
[02:08:37]  a reference that's $2 signs and this one could be $3 signs. I'm not saying these problems are completely unsolvable. I'm just what I'm getting
[02:08:54]  at is like It's possible that we could argue that inside the scope of a setter function. The rules don't apply. Right. In the scope of a
[02:09:19]  setter function, you're not passing in store, you're passing in its own reference. So basically, a setter function and I know this a setter function actually
[02:09:28]  passes out a different version of the proxy that's writable. That's how it works. So technically speaking, it could work inside a setter function, but it
[02:09:39] 's a little bit awkward. When we just want all our state to work. because the default transform is just going to see this and see, see at a state.
[02:09:51]  Why would it give it a different version of? Yeah, sorry. If this was this, it wouldn't have all these my bad. Why would it? Sorry, why
[02:10:05]  would it give a different version? why would it give a different version of this? It sees the symbol. It treats it the same everywhere. It's not going to
[02:10:15] . Why would it? It's because this has triple dollar sign on it. Which argument? The first argument or the second argument gets this treatment? Always the first argument of
[02:10:28]  functions with triple dollar sign. This is this is the problem with with designing compilers. Oh, yeah, we can. Yeah, yeah, exactly. So as
[02:10:45]  long as we like, yeah, I mean, yeah, because if you put it on, it wouldn't be enough. I don't think it'd be enough. Like
[02:11:00]  you could feel like, oh, I can do state dot reconcile. But that doesn't. And then say like, oh, yeah, it's kind of like do
[02:11:08]  all these functions. The first argument is expected to be the thing, right? Like I feel going wrong. You can come up with conventions for this stuff. Yeah.
[02:11:21]  But what I'm getting at is. It is essentially that there's there's kind of an endless set of conventions. You have to now follow in order to make this stuff
[02:11:35]  work. So the one thing with store reconcile like that gets rid of this problem, which one to do. The only problem then is like. Yeah. Yeah.
[02:11:50]  So now we're looking for special compiled methods that are hung off the thing. I mean, maybe it's fine because we only have to worry about it within scope.
[02:12:13]  Maybe. Yeah. Drive something is what I was expecting more. Hanging it off the thing. Like namespacing, but. I wonder if. Yeah. I
[02:12:34]  mean, I haven't looked recently, but I wonder if like. If cells getting there, their developers who used to use let must be freaking panicking. Like. There
[02:12:44] 's one thing to be like, okay, dollar sign state dollars and drive. But now you're like dollar sign drive dot something or other like. I'm not sure
[02:12:52]  if I feel more comfortable because I have a bunch of things hung off a single object. That I'm aware of versus just like having an import that I'm never going to
[02:13:05]  use. Yeah. This is this interesting psychology behind that. Okay. I'll check it out. Okay. Okay. Okay. So raw is how they do signals.
[02:13:34]  Okay. So there's a way that they're saying like, hey, don't let this be a store. It's the same. It's like ref and shallow ref
[02:13:44]  and view where it's like they make the. Store the default, but if you want to performance optimize and not worry about it, use that. Okay. State dot
[02:13:54]  snapshot. Okay. So that's our unwrap question. That's an unwrap function state dot is. Yeah, because you have to do a proc. You have
[02:14:11]  to use it. This is special equality operator. Because proxies are not. Equal. Yeah. Arrived. Okay, so this is how they reintroduce
[02:14:30]  the function. Smart. I saw there's interesting effects don't actually need to be ruins, but I guess it's. Works like you don't actually have to do
[02:14:43]  anything for an effect. I don't think. Like there's no compiler transformation. In fact, pre. Okay. Back tracking. That is listening. Okay.
[02:15:23]  Back route. Yeah. Great route. Okay. So now props are being handled this way. That way they can identify it coming in the file. Smart. Okay. Yeah
[02:15:47] , this is a bigger departure than I thought. Interesting. Okay. Cool. Thanks for sharing that. That's that's good context for me. Cool. Thanks
[02:15:59]  for sharing that. That's that's good context for me. Yeah, because like. Yeah, I mean, if you have surface, I'm not going to be too
[02:16:19]  judgmental on in terms of that there's there's different primitives you need and like. It's it's it's it's I think the only comment I want
[02:16:26]  to make is interesting when you go from having like molt there's a tension between having multiple configurations of the same primitive and just making them a different primitive based on intent.
[02:16:43]  That's one thing I like about react. That's one thing I like about react. I know it's funny. They make more primitive sometimes and they need to but they
[02:16:48]  match intent almost like they're like. They're like, they're like, okay, it's not about what it does, but why you use it in terms of
[02:16:59]  the naming. Right? Like, some people like, oh, create effect and create render factor essentially the same except for when they run. So you could like make a
[02:17:07]  pre or after or post and it's like, no, but I want to communicate with the name what it does. So people choose the right tool for the job. So
[02:17:15]  when they like search for it, hopefully they make a mental association with the name rather than be like, oh, yeah, you just create an effect using the blah, blah
[02:17:22] , blah. It's just like I create a render effect. There's sometimes that introduces new concepts, but there's an interesting balance there. Anyway, just, just
[02:17:35]  a side note. Yeah. Don't, don't get me started on the use server use client use thing, but I talk classically with the primitives. Anyway,
[02:17:47]  state reconcile. Yeah. I mean, yeah, although as I said, it's not enough. It's like the dollar sign state, like there's no compiler trick
[02:18:01]  there, except for unless you're using it to indicate how you want to handle the arguments being passed in. That's a question too. Like if someone was using dollar
[02:18:15]  signs, would they use dollar signs for things that didn't need to be dollar signs? Like effects don't, there's, there's nothing compiler about the effects. So
[02:18:24]  effects don't need to be dollar signs, but do like people do that for like a consistent API perspective? Where's my hack MG? I don't know. I
[02:18:43]  guess my conclusion here is actually the same. Honestly, that's what I feel like. Most of the time I look at this so much effort to accomplish so little,
[02:18:51]  of course, it's compelling to have single stores merge. Of course, being able to enforce that someone can't just create state in one place and have it update elsewhere.
[02:18:57]  So the control, I like all of this in a sense, it's an extension to what we do is solid. When we say you should access the signal in the
[02:19:02]  prompts, you know, instead of passing signals through, but you don't need any of this accomplished mutation control. And this is one less primitive worth it. I don't
[02:19:09]  know. We've shown with all that it isn't performance optimization. Even things like SSR can always not have reactivity at runtime and be super fast for the compiler.
[02:19:16]  The one thing that brings me back here is that we have the potential for a singular reactive language, right? That's why I made this script this thing, because it
[02:19:26] 's not about like all of this honestly seems like a lot of work to do to accomplish something that just doesn't need a compiler. But because of our use of JSX
[02:19:39]  and JavaScript top level, if we were to introduce reactive scripts, you know, extension, like say RSX or something, it could be a super set of typescript.
[02:19:46]  We could have one language do everything. There's no separate SFC format like with viewers felt. And then, you know, and in addition, adding this extra,
[02:19:55]  like processing on the other JS files, we could just have one language interrupted perfectly with existing vanilla JS and TS, right? And this is what my old reactive script didn't
[02:20:04]  take into account. It assumed it had the control of the world. Whereas what I do like about what Svelte has been doing here is that it says that like,
[02:20:12]  you can do the analysis at a local scope. So like long term, I mean, I wrote this online and people on Twitter, and I don't know if people
[02:20:24]  got what I was saying, but I was like, I'm not, I'm like, if you take that this is the future, like, if this is a path
[02:20:31]  you would want to go where you opt into this compiled stuff for JavaScript, like actually change the language of JavaScript, because you cannot, as we've been emphasizing, just make
[02:20:42] , you know, I mean, you can for a proxy, but you can't take a primitive value. You can't take a primitive value, and just, you
[02:20:49]  know, have a variable reference and have it be reactive. It's like, there's no way to do that with JavaScript. If you're going to go all that way
[02:20:55] . To make JavaScript work that way, literally introduce your own language. Why have two languages, right? Long term, I think perhaps single file component formats become more problem
[02:21:07]  than they're worth if we wish to exceed the powers of JS itself that go beyond component boundaries, right? Like if SFCs are great when everything was a component,
[02:21:14]  but now like, it's everywhere. Why would you do that to yourself? So I have to admit my biggest attraction to this might not be because it's a better
[02:21:23]  thing to do, but because embracing it sidesteps the need for a single file component based frameworks altogether. Right? Like why bother essentially learning two different things when you only
[02:21:38]  have the ladder, right? like, I'm not sure I like this completely. Well, that's the thing. Marco embraces their formats aren't really SFC
[02:21:55]  because their Marco files aren't just components. They're literally they control the world, right? They are, um, they're like, they're literally just, uh
[02:22:10] , tags everywhere. Like the component boundaries don't matter in Marco. You literally just have tags and you can declare stuff at any depth. It's, it's, it
[02:22:21] 's kind of beautiful. And they're, and they're basically telling you to use the one language. So like, if you want reactivity in Marco, it's
[02:22:27]  in a Marco file. Yeah. You can have some JavaScript processing logic on the outside, but Marco is Marco and use Marco everywhere. If you're going to kind of have
[02:22:37]  SFC compilation, JavaScript compilation and stuff, you, you kind of lose that separation, which is why I like in my tweet and what I was like, thank God for
[02:22:46]  JSX, because it's like, you don't actually basically have a templating. I don't, doesn't, I don't, it's funny people argued
[02:22:53]  with me about how good JSX as a language is. And it like, it doesn't matter. I don't, I don't care yet. Something better than JS
[02:22:58] X. My point is that you are in this place where you can essentially have your reactive JavaScript and your templating right next to each other, have a single file format and
[02:23:13]  just have it work. Basically if reactivity exists beyond component boundaries and you want to write reactivity in a place that's JavaScript first, then having top level JavaScript makes
[02:23:27]  sense. Then like you put that all together SFC formats don't make sense anymore because CSS is hard. That's basically the gist of it. SFC
[02:23:44]  has the ability to, the fact that it's a single component has the ability to tie the CSS to a specific component and scope it specifically based on the analysis of that specific
[02:23:57]  component. Whereas if everything's in JavaScript, everything's composable, you don't have as clear boundaries. That's probably the thing, but like, again, look
[02:24:08]  at how many little hoops and micro things were jumping through. Like, I don't even know, like, we got an SFC compiler, we got a reactive
[02:24:22]  compiler, we got like, like, two distinct languages that you have to be aware of. Yeah, I mean, if you're going all the way, you might as
[02:24:38]  well do that as well. The problem is people, as Rich Harris pointed out a long time ago, people will take familiar syntax. This is why new languages never succeed
[02:24:50] . We, you, generally people are, familiarity is way more important to people than any other aspects like functionality, capability. Familiarity is why we all still use C
[02:25:01] -based languages or whatever, you know? Well, so like, you don't get to fix JavaScript completely. I don't think so. I mean, TypeScript
[02:25:15]  arguably did some work there, but it's, it's a very slow process to fix JavaScript. I think the main idea, basically, was to emulate Scope CSS
[02:25:33] . Yeah, it was to emulate the HTML imports of web components. Like, the, all the frameworks that came out like that, like at the time, I think it
[02:25:40]  was Vue and Riot and stuff. They all thought, everyone thought web components were going to be the future. So we all based our stuff, even the slot dynamics
[02:25:47]  and eager slot projections and all that kind of stuff. And then we like, oh, we're like, yeah, this actually sucks. And then, unfortunately, like
[02:25:57]  on the positive, they got rid of HTML imports, but on the negative, the, the rest of web components are still here with us. Um. Are these a server
[02:26:09] , you mean like Astro and like that? I mean, it's an interesting question, right? Cause if you, I mean, I, I, I went
[02:26:22]  on this debate cause I, I liked the, the separation on the templating side. Like I would be like, like for a while there, I was like, I
[02:26:29]  actually liked Astro approach of being like, look, this is a server templating file. And then this, this is your logic. Then I kind of got on the
[02:26:36]  RSC thing where it's like, oh, we can all just be the friend. Like I'll be the same. Right. Right. But it's like,
[02:26:43]  people, the funny thing is people are going to have preferences regardless on this stuff. So like, I, it's just at a certain point, I think it's,
[02:27:00]  how should I put it? I think it becomes too much. And when, if your framework is designed and got people on board because of how easy it is, not
[02:27:12]  because of necessarily how fast it is or how, you know, how, you know. How should I put it? Like how well designed it is, or like how good
[02:27:21]  it sounds in when you speak from the white tower, you know, whatever, whatever aspect. But if you got people on board because of how easy it is, and
[02:27:31]  then you're like, guess what? Now, here's the first language you will learn. Here's the second language you will learn. Oh yes. And there's also
[02:27:40]  just plain TypeScript as well. Like you've cut it. It's funny. Like before we had, you know, we're talking about co-location of solving
[02:27:48]  CSS and, you know, you had HTML, JavaScript and CSS. Now we just have like three flavors of JavaScript. Like it's a big ask. Yeah.
[02:28:24]  SFC is best when used for templates, right? Like it's a pure template thing. It's just like if the scope of our frameworks extends past templating, which
[02:28:37]  a world beyond components almost suggests, like not necessarily. Like I said, Marco's purest approach doesn't have any contradictions for me. Like you need things. There
[02:28:46] 's always the opposite end of the spectrum that is perfectly consistent. just always like compromises don't happen on the extremes compromises happen when you end up somewhere in the
[02:28:57]  middle um and we choose which compromises we live with so like yeah i mean don't get me wrong like the stealth approach essentially you just put it in the html
[02:29:10]  or whatever it's fine it's just like we we compose beyond that that that's all that's all i'm getting at it's this isn't yeah i and that
[02:29:23] 's what svelte basically did i'm just saying that like um yeah i mean they also had html in their language as well with sfcs but like yeah
[02:29:46]  i mean you have to be careful how far you divert and i think the i think the thing that's going to be fun figuring out in the future is this whole idea around
[02:29:58]  macros right like it was pointed out to me by uh was it bearded schmidt or whatever that that jsx is just macros and i'm like okay sure
[02:30:10]  i'll buy that and ruins are just macros and all these things are just macros but at a certain point the difference between a like a generic ability to apply a macro
[02:30:17]  and basically macros is like your api service for your library is really interesting because like obviously when you have use server and use client and there's two of them it's
[02:30:26]  pretty powerful but you know if people start designing use bananas you know like if if if if you start learning that the rules might be a little bit different use is actually because
[02:30:39]  the way it's effect on bundlers and stuff probably applied generically but when you start getting to a point where it's not good enough just to have dollar sign state
[02:30:48]  and dollar side derived you need dollar sign drive dot blank or this and you start getting micro you know into them into the macro so to speak and you know more specific behaviors and
[02:30:58]  patterns and trends that are very specific based on you know it works like this with this function and not here with this function like when it becomes just your api and not like
[02:31:10]  something that's repeatable you know like the doesn't pass the identity test right which is actually one of the problems of what i was talking about today about passing the identity
[02:31:17]  test what i mean by the identity test is if you have a thing and a library provides it you should be able to create the same thing and basically sub it so what i
[02:31:33]  mean by that is pretend you had something that you use down here let's maybe say a component is an example let's say component right you should be able to design my
[02:31:47]  component and in such a way that it could replace component and work right so if i if i had you know count set count goes create signal if i wanted to make create
[02:32:10]  my signal i would definitely be able to do this right and the reason i call it the identity um test is because create my signal is essentially returning create signal right what doesn't
[02:32:32]  pass the identity test is are these compiled things unless there's a generic way to represent it like classic example not passing the identity test let insult or dollar sign label none
[02:32:48]  of those you can't create your own letable you know um control flow is another one like identity test and solid might be my four right i that's what could replace
[02:33:06]  you know you could you could put four you know four component in here right you're you're but like i can't i don't think i can go into small to make
[02:33:19]  hashtag my each right this this sort of this is one of those things like don't get me wrong not everything needs to be past that test so to speak like in javas
[02:33:31] cript if i can't make my if statement or my ternary these are operators that are built in right and if i want to make my own conditional i need to
[02:33:43]  make it a function right if i'm for i can't make my own for loop if i want to for i need to make my own function so language will always have certain
[02:33:59]  pieces that don't don't don't let you you know one for one it but apis can so like there's this weird tension between identifying what is language and what
[02:34:20]  is like api well my use server it's not my use server it's like use my server is more what i meant not my use server use my server that actually
[02:34:35]  potentially can work my f using macros that's very cool yeah yeah don't get me wrong like handlebars can do it but what i'm getting the point is felt
[02:34:55]  uses handlebars and i not for literal handlebars it compiles them to like whatever it uses it's not it's it's not it's got its own thing use
[02:35:07]  convex yeah there you go use mine server but not theirs all right so it's it's it's it's this is yeah this this topic in general is is is one
[02:35:29]  that's like there's a lot that you have to consider and if someone were to pull it off just right i could see potential in it but it's also it it
[02:35:44]  introduces just as many like if more more things than not having it in a sense i'm i'm i'm not sure that's when i looked at the ruins page that
[02:36:03]  would link to me earlier with the svelte compiler i i know i'm not sure that i feel like there's less going on than when i read solid docs you know
[02:36:13]  i mean like i i feel like there's just as much if not more going on it's it's like we didn't actually make the stuff simpler we i think the
[02:36:25]  store versus state thing is really fundamental i think the the role of setter functions in that um are very fundamental where we're going to see the difference but like i don't
[02:36:36]  know if if we've actually accomplished an actual simplification versus just typing less characters which to be fair was always one of like spelt's goals but it's like i
[02:36:54] 'm trying to see the payoff and the only one that really comes to mind right now is being able to get rid of the sfc formats which i don't think something
[02:37:05]  like spelt would be interested in doing anyways so it's like yeah i don't know i struggle with this a little bit because it i think changes like this aren't
[02:37:16]  ones that can be applied um like incrementally you can't have both side by side you have to decide and be like this is the future guys and you have to decide if
[02:37:29]  it makes sense i know there's some people in the solid community who saw my write-up and were like man this is so awesome even with my conclusion they're just like
[02:37:38]  i would love to see this get rid of stores versus states and all this stuff but i don't know what do you guys think is it awesome i mean at this point
[02:37:56]  one extra compiler step isn't gonna isn't isn't gonna kill us here i mean at this point one extra compiler step isn't gonna yeah we just want the the destiny
[02:38:19]  operator don't we yeah i don't know it's i i think there's like this compelling thing see i love read write segregation so like the thought of just like forcing people
[02:38:32]  not to be able to like you know why i got into this awesome perhaps not for me like i you saw my excitement when i showed that example and i'm like ha
[02:38:42]  ha ha they can't edit the state like this is even better than use read write segregation if you enforced it like it's just it's so sweet that's like but like
[02:38:56]  you know right otherwise it's just like store.reconcile or yeah maybe dollar sign state.reconcile i don't know yeah something's just not not going
[02:39:23]  for me here i don't know yeah i mean this is it's the problem is it's always easier to say less magic for the win but magic when done right is
[02:39:44]  really good i i've i'm still enchanted by svelte 3 like i know it seems like this but i mean it was good enough to nerd snipe the react
[02:39:52]  team into building a compiler okay maybe they were going to do it anyway but like like like there's something so powerful when you can present something complicated in a simple to see
[02:40:08]  way so yeah we just have to watch ourselves javascript ecosystem's already complicated on one hand we can say like what's another you know what's a what's another
[02:40:24]  straw right past mutable story yeah i mean in some ways like we have conflict there's like conflicting interests like the reason i think view stayed away from the ref sugar is because
[02:40:44]  they couldn't see a world in which end users couldn't have the same ability to compose they needed dollar sign dollar sign because they every permit they wanted to pass the identity
[02:40:55]  test right view is like composition is king like react all it says that svelte coming from the other end was like we never really had composition so this is much better right
[02:41:07]  right it's a lot easier stance to take like don't get me wrong svelte had some form of uh composition but not not like this yeah i don't know
[02:41:28]  i i want to put out there i didn't want this to be completely negative spin i i think there's potential here and i have to keep the door open in case i
[02:41:35]  like in six months come back and be like guys i figured it out but it's also kind of like uh i don't know i i i do these streams and talk
[02:41:46]  with you you all so that i can like hopefully garner some perspective that i missed here um and it's like there are some very harsh trade-offs we have to
[02:41:58]  consider especially when like setter functions are so powerful i can't over emphasize how powerful they are of course we can just bring them back by you know signal dot set or something
[02:42:08]  you know like you can like sneak it back in there but you know get rich on stream yeah yeah i don't know it's it's it's fine i mean i
[02:42:25]  they they they're busy with svelte 5 they will continue to work through it this this the stream wasn't just looking at svelte as i said i this
[02:42:35]  is one of those topics that has been on my mind for years and years and years like people were wondering like you have to understand like when svelte 3 came out people
[02:42:49]  were like oh can we make solid easier like this like i felt the same tug that evan did i've been thinking about this stuff writing you know i didn't might have
[02:42:57]  not written the article to to you know 2021 but the truth of the matter is i wrote this article after six months ish even longer going through this process because people in
[02:43:09]  the community were kept pounding on it and i was like okay i just don't have the mental bandwidth to approach this i'm gonna write an article get everything that i'm thinking
[02:43:18]  off my head and then go for it you guys have fun figure something out maybe you know i'll review it we'll see where we go i just this isn't something
[02:43:26]  i can spend my time on there's just too many inconsistencies that don't work for me um and yeah you know things didn't progress from it but like by the
[02:43:36]  time i wrote this article i was already done with this topic it was like it was like i thought that i was moving on the fact that this has come back into question again
[02:43:46]  you know for good reason for minor details you know it's worth for visiting ideas every you know once in a while to to make sure that you're not missing something because
[02:43:56]  like you got you have to challenge your assumptions so like i like starting from scratch i like kind of figure out what's possible it's it's like as i said i i
[02:44:08] 've i think runes will work for svelte because they have a different expectation going in um which is where like the difference is this is our destiny oh man okay
[02:44:35]  yeah i know i know the whole destiny right it's it's it's it's quite suitable that this article was written in 2021 which was the year that p sharp was
[02:44:47]  invented right when did when did he invent yeah 2021 when did he yes p sharp's nickname for microsoft on rails created by paul stoffel in the year 2021 yes
[02:45:00]  it's funny he had like a disclaimer down here that like this or somewhere yeah this is an old post it doesn't necessarily reflect my current thing on the topic text for
[02:45:12]  posterity so like yeah i like magic when there's all impairments it's not good enough yeah see and the funny thing is for me i i don't if the
[02:45:24]  magic isn't good enough it's not worth having like this is i i know this is again a strong stance to do but then if you can't close the abstraction you're
[02:45:36]  just you're not you're you're the reason to do it has better be a good reason because otherwise you're making assumptions and you're like you're putting things together
[02:45:50]  in a certain way because you think that like when it's unnecessary when it's unnecessary unless unless you really feel that something will always be necessary it's yeah it's it's
[02:46:04]  hard for me to accept it you know now you guys are no dot net core framework is called dot net on nails that's just terrible don't no no no no no
[02:46:21]  i don't believe you no no no no i mean i could see someone joking it there's no way that would have ever gotten gotten anywhere i'm yeah i'm internally they
[02:46:43]  were probably playing around with that they would never yes on jails oh wait okay that the the that's the main topic for today let's let's let's shift gears
[02:46:54]  here a little bit of a shorter stream i mean i could talk about a few other things i've been working on but but you know generally speaking i'm i don't know
[02:47:07]  if i'm carefully watching i need i need to go through that exercise to kind of clear my head i think i think there's a path but i also think that like
[02:47:15]  it's asking a lot um let's see where before we go this week in javascript if there's anything else i want to prep here talk about actually yeah i got
[02:47:28]  one let's go back to hack md for a second i think i think i think i think you guys might appreciate some other stuff that i was doing this week let
[02:47:40] 's go here no that's a terrible view let's go here um i had a document from like a long time ago where i was trying to basically we just talked about
[02:47:58]  api service um i've been trying to find all of the apis like i mean i know solid has more than this when you consider jsx and stuff like that but
[02:48:11]  just all the like primitives trying to like it's funny it's the title is different from what the inventory of it i'm trying to think of like what we need
[02:48:23]  to function for solid 2.0 like if you had a list of primitives yeah this it's so funny my opinion of this list has actually changed because create async is
[02:48:35]  not a state primitive it's uh it's a derived primitive it's funny anyway um yeah i i'm i'm trying i'm trying to write down all of it right
[02:48:55]  create signal create store create memo create project and create async create effect create render effect create root on cleanup run with owner get owner is listening has updated this one's going
[02:49:07]  to be hot untrack catch error this is for error boundaries you'll probably never use it directly flush sync or batch is loading create transaction i think am i missing any
[02:49:26]  am i missing any not bad list five plus 11 16 that's everything the most important one is create computed now you guys are just trolling me yeah i i've i
[02:49:48] 've been trying to i've been trying to figure out i like this this is kind of my blueprint for a protein solid 2.0 um just like trying to because what's
[02:49:59]  cool is like stuff like create projector create projection can replace create selector in an ideal world obviously we're not we're not there yet but like this great prevent yeah this
[02:50:10]  is just but i i i this is clean right like you don't actually need like the funny thing is like if i if i squint these are the names of the
[02:50:28]  dollar sign operators in svelte and then like the dot whatever are these so like i there's there's there's a thing yeah yeah yeah i mean this the the stuff
[02:50:46]  is being implemented on the outside the one thing you have to understand is that the handling of effects like solid today is usable in non-dom apis as well so i
[02:50:56]  don't yeah i don't i don't i don't know what that comment means yeah did i get reconcile in here yeah i'm not okay yeah we're missing reconcile um
[02:51:07]  yeah yeah yeah reconcile we don't need produce anymore we could also have path path these these deserve their own category i think store utils yeah thank you i forgot about these
[02:51:39]  reconcile path unwrap i mean that's true that is exactly what that is create async create projection see sometimes if stuff gets used enough together we you end up with this
[02:51:59]  so like there's an argument that this primitive is that yeah yeah so question okay so michael rawlings marco hasn't been watching my recent streams i don't blame
[02:52:21]  them but i'll explain it so question about solids create async mind shines the new reactive system is pull-based so execution starts at effects and then it's it's
[02:52:28]  hybrid my intention is i'm pretty sure that create async is going to be scheduled the trickle i'm looking at is splitting effects in half there's going to be the
[02:52:43]  front half that's tracking in the second the back half that's the effectful side and the idea is that the front half and create async basically get scheduled at the
[02:52:54]  same time and then depending on where things get that's when the effects run but it doesn't necessarily list its dependencies which i'm getting yeah board management it's counting value reaction
[02:53:04]  the side effect yes yes yes yes so if you really treat things as colors do you always have to list effect dependencies yes yes yes it's in the articles too michael
[02:53:14]  um i actually just finished today a prototype where i um added split effects to the i updated this dom expressions compiler yeah yes uh let me let me let me go here um
[02:53:34]  i mean we could talk about solid 2.0 proposed changes i think we should look at that too but that's not why side note michael's the reason i use hack
[02:53:47]  md he first shared it while we were working on marco and i've become obsessed with it since yeah i mean yeah it's pretty much the pattern so what was
[02:54:02]  it called uh scheduling schedule scheduling derivations and reactivity um i go through this whole thing but the the the conclusion here is that the only way to get the right execution
[02:54:24]  timing you see like i was showing how react in the pure phase and then post render phase the the only way to get the x like this is a problem with being lazy stuff
[02:54:35]  executes all over the place right and i was explaining how like with solid today it works kind of like this where there is a little bit of this noise um but if
[02:54:51]  we split it like this effects like this you end up with the same diagram as react so yes one of the big changes for solid 2.0 that i'm proposing is that
[02:55:00]  effects are split render effects have to be um in my opinion like solid has this problem today to be fair we just say that by the time the effects run it's too late
[02:55:08]  so effects aren't you know part of the of the of the thing but then you need the thing to pull so it doesn't really work with lazy that was that's
[02:55:16]  why i wrote this whole article series um right that's why i wrote this whole article series just gonna put it in there yeah yeah um it's it's kind of the
[02:55:31]  get the prerequisite for understanding why why certain things i i basically like even point out the elf in the room that like this is basically suggesting dependency arrays it's a little different
[02:55:43]  because it's not straight dependency arrays it's not saying these are just signals it's it's dynamic but yes oh i mean you you want to talk let's talk about
[02:55:53]  this for a second i can show you what i'm saying how do you loop over or looping twice with split effects you don't which is the problem which is one of
[02:56:03]  the which is one of the challenges that that comes here um you you do end up looping twice a lot of things are simple that they don't loop twice but okay let
[02:56:17]  me go dom expressions i i had to try it out so i i went in and split effects and i've i've basically converted the compiler and stuff you know getting ready
[02:56:32]  for to do benchmarking whatnot and let's go dom expressions sorry babble the output is actually not bad so if i go in here and i go dom and i do i
[02:56:45]  i don't know let's not dom sorry not source i want to go test let's go here let's go test and dom fixtures attributes attributes code okay so
[02:56:59]  i mean there's a lot of jsx here let's look at the output this get a better idea of what we're dealing with a bunch of templates spread spread spread spread
[02:57:13]  spread spread okay first of all basic value updates are pretty easy this is a this is a text node getting updated right read the label um and then pass it through to the
[02:57:29]  second value and write it so basic stuff here's another one setting attributes pretty easy i was actually kind of debating it'd be fun i don't know if it'd be faster
[02:57:39]  or worse but you could actually bind to this and then pass the bound version here because the last argument is always the argument here there's you know see last argument seems to
[02:57:50]  always be the last argument here this is like completely partial application applies here see even even here style thumb style this is actually the last two arguments here um um it almost always
[02:58:04]  works like this where it's partial application i yeah i don't know it's interesting actually it might save the closure on element well i mean it's not it's binding it
[02:58:15]  so like technically it's not saving the closure anyways binding is interesting my testing shows that it the one is better for creation and one is better for updating um but yeah i
[02:58:31]  think i think binding probably could improve performance i i'm going to test play around with it but okay let's look at a grouped effect see yeah this is a group effect
[02:58:44]  this one's fun what what i've done here is i've created the object essentially from all the reactive properties before these were separate variables now they're the objects with the
[02:58:58]  object keys that match the previous this is only this is arguably always been optional boris call told me that i shouldn't that we should make it monomorphic so he said
[02:59:09]  if i if i made it so that the original object being passed into previous already had the right shape that it would improve update performance considerably i have never confirmed that this is
[02:59:17]  actually true and it adds a whole bunch of extra code here but this object is the previous value this object is the new value and then the process of diffing i i did
[02:59:26]  a destructure here as a rest param some people told me to worry about performs here maybe um rest params normal rest params perform well i i don't know if object
[02:59:35]  destructuring as rest params perform well probably worse but it was easier to actually do the code here because then essentially as you can see compiler can do its normal diff
[02:59:49] ing check the previous value and do its normal you know this one's actually kind of complicated some those are all the really edge case ones we're do a normal grouped effect one
[03:00:02]  that's not so weird yeah this one here's here's a more classic one a bunch of min max getting set on a bunch of html properties they just kind
[03:00:11]  of come out as like as equality check and then if not set attribute um so here i don't actually have to do anything in terms in terms of x extra um iteration
[03:00:27]  for almost any the rendering stuff the place that it's a pain in the ass are spreads and i'm not particularly happy about it i i because in a sense a spread is
[03:00:40]  like a mini v dom we'll probably figure out over time how to make spreads better but um let me get out of the compiler and go into here see on the positive
[03:00:56]  rendering code i i gets a lot simpler um in certain way i was able to streamline the insert expression thing where is it style spread yeah see spread was always weird where it creates
[03:01:08]  multiple effects and different scopes for children and then versus other props and all this other stuff i i hate spreads i'm not gonna lie and um the this is this is
[03:01:19]  this is the misery right here see this stuff is kind of fine if you're doing inserting you can just do this normalization step that we had to do anyways but here for
[03:01:29]  for the actual props i had to go through the props if they're not children ref which i took care of above skip them otherwise right then the new props the prop value
[03:01:42]  because this is where the reactive lazy evaluation happens you don't want the lazy evaluation to happen over here you don't want to execute it twice it's not enough just to hit
[03:01:50]  every prop you actually want to assign it to a new value that's been resolved so all their tracking happens in the first half so that the second half will then iterate over it
[03:01:59]  again and actually update the dom as i said ironically that's how v dom works if you think about it right they hit over iterator over once to create the virtual dom
[03:02:11]  and then they iterate it over again to different patch so every spread operator is like a mini v dom essentially like a shallow scope v dom it's always been that way that's
[03:02:26]  why i don't like spreads in general but it's it's it's one of those kind of cases where you can't really avoid the iteration because you need to iterate
[03:02:38]  all the props like iterate through all the props once to track and then once to do it and you don't want access them twice lazily yes yes and in a yes
[03:03:00]  exactly that's that's sort of the thing i mean these things you don't have to worry about it's the only place that really impacts developers is their own effects like
[03:03:20]  the end user effects and me and milo were like on tour and he's like well you don't have to do end user effects we could just say that like like
[03:03:28]  it's too late you know end user effects just run later but like it's weird because then the lazy stuff doesn't get pulled till too late like it's it's just
[03:03:42]  if you want to keep predictable pure always before kind of scenario you have to split it's just yeah it is what it is it's been some time i had a kid
[03:03:54]  startup notice there's been some work on web components it's all recently is that something you'll be asking more around um yeah some companies use solid with web components so they've
[03:04:06]  been pushing it me personally i'm not spending too much time there but when they tell me hey this is broken or here's a fix or whatever i'm i'm gonna keep
[03:04:13]  it going forward yeah like web components are really important to me when i first built solid i wanted to make sure that like everything worked well with web components in fact all my
[03:04:26]  solutions were in the realm of web components i even like it there's a there i at one point i treated them like they were native elements like now i treat them as like
[03:04:36]  they're just a dom element and i don't care as much in terms of stuff um like they just get treated properly but at one point like i was trying to make
[03:04:45]  suspense work in a way that would allow um the web components to like delay their um connected callbacks or you know like not just connected i guess connected call that's fine because
[03:04:58]  it's not like connected but like delay callbacks and stuff and i was trying to like do this um it was really complicated i was just i was i was i was
[03:05:05]  like using a second document and then connecting it there to trigger stuff at the right time i'm i'm never going to go there again on the web component side they are just
[03:05:15]  elements you know i don't view them as like our first party components like i did at one point but um yeah as companies use it obviously i'm going to continue to
[03:05:27]  you know have good support there but hopefully michael that asks answers your answers your question um yeah this is one of those like really tricky trade-offs the thing is i
[03:05:49]  think the effect splitting is a good thing to do even without um how should i put it it's it's it's good thing to do even without colorless async
[03:06:02]  i think any kind of suspense like behavior really deserves it um i guess if we kept our complete push our like scheduled non-lazy version honestly the laziness is not
[03:06:18]  really important to me i mean part of my conclusion from this stuff wasn't just that you need to do all this i'm i'm kind of like one foot out the door
[03:06:29]  on on the laziness part like i know like angular has been really pushing hard on signals are all about the laziness it's like and when preacted they did
[03:06:37]  lazy and almost every new implementation to lazy but the laziness for computeds is like really not important like at least in dom type stuff i understand when you make these like like
[03:06:51]  most of the time your hierarchy is going to define what's live and then you'll just be unmounting mounting hierarchy the fact that a switch causes one thing to calculate versus
[03:07:03]  the other usually is is hierarchical not parallel now obviously if you're building something that like in a way where everything's parallel you don't have this hierarchy you hit it
[03:07:14]  way more but it just hasn't been as much of a case when people have been building solid apps that they need this laziness for me the biggest benefit of lazy was the
[03:07:25]  potential of self disposal when outside of the reactive tree but like i'm almost yeah i mean that's really the only reason i i care about laziness generally um anyway uh
[03:07:45]  somehow we ended up here uh but yeah because it's related to what i've been looking at so yeah i think this is this is this is this is let's let
[03:07:59] 's let's oh geez it's so funny my viewership numbers right now uh on here are just all over the map it like swings up 30 and then down 20 like i
[03:08:09]  don't know if it's like capturing stuff properly or people losing connection it's it's kind of nuts like literally 91 second 90 100 one second the next second it's really
[03:08:20]  low is this is a breakdown pure versus five part just decided to attempt this hybrid model uh yeah it it it's kind of was the right thing to do always but we
[03:08:38]  got away with it like it comes down to as soon as you attack have the need to be able to cancel something like have async you have to separate the side effects
[03:08:54]  it's it's it's basically that simple once you have any kind of consideration for async you have to separate this the side effects will it change the mainly if the
[03:09:06]  public gets here or will you keep as it if if i can and it makes sense too i will i mean it's that simple um we're working on a new reactive um
[03:09:20]  implementation and there was it was influenced a lot by the tc39 was influenced a lot by angular signals which were influenced a lot by react signals and reactively signals and
[03:09:36]  the reactively signals are the ones that solid are based off so there's like a common heritage um there so i see potential but then again i also have fairly different opinions
[03:09:47]  about some things and i think there's enough in the proposal for me to work around it but like we're still learning yeah yeah yes yes right right like and subscribe the video
[03:10:02]  again helped a ton very appreciative obviously i'm not making any money off of this i just want more people to see the the video as you guys know my youtube monetization
[03:10:15]  does not work um so yeah please please please okay so yeah i just started i it's funny i i've been updating this recently but i started this like six months eight months
[03:10:29]  ago these documents and i just kind of got back to them and i started thinking okay what what this is just proposals and not things that i will do i actually had stuff on
[03:10:36]  here that i ended up deleting because i realized how stupid it was so this is just um these are just my current idea of what i want to address over the course of
[03:10:47]  the 2.0 release we're still prototyping stuff like as i said i got the reactive system working basically you know high level where i think i wanted uh doing dom expressions
[03:10:58]  right now compiler going to start benchmarking get an idea what the performances see what between the change the implementations like that's where things are right right now really low level
[03:11:07]  base primitive style stuff but there's 2.0 also includes structural changes to the repo like things like signals being separate from the main solid repo all these kind of things there's
[03:11:17]  a lot of like governance type stuff here i'm only talking about api which is kind of that middle zone before we talk about like how we're going to like manage stuff
[03:11:25]  differently and and once we get out of the core mechanical stuff this is where things matter um so these are just ideas that i have right now so we can just talk about
[03:11:36]  it um strict mode on track we we had a whole stream about uh about about you know whether there should be a strict mode in solid i'm still putting this out there um
[03:11:46]  especially if we go the direction that pointing with async top level and components when actually reactive value we warn unless developer explicitly wraps the axis in an untrack humility this
[03:11:56]  won't help with async but maybe it's the right direction we could also in dev detect up up the dev detect component throwing and tell and error out to tell people they
[03:12:06]  are using top level async there should be varying degrees here but we should consider being stricter yeah like it's possible to untrack also has a catch in it
[03:12:15]  so you could literally like be like untrack or do this you know what i mean like like i i think it's something i know people like the convenience but it
[03:12:30] 's there's more and more of an argument for us to consider you know the impact of top level in the components and um yeah that's the main one top level in
[03:12:43]  the components or within any what we consider top level scope like four four components and stuff like that things where you're implicit you know expected to be able to untrack because
[03:12:53]  you want to reset the reactivity not untrack because you don't want to track this particular value it's where you know creating apis i think untrack could
[03:13:01]  have like an argument that's like saying like is this the one that complains or doesn't complain and i think it could even exist in user space because i think if
[03:13:07]  you're building your own control flow you you're like this introduces you know a complainable top level you know kind of like four um okay so that i think strictness is
[03:13:23]  something we got to look at another thing i want to look at automatic microtest basking it's funny this was one of the first things i put on the list
[03:13:35]  and it's one of the things that like i'm not sold on either wave effects will not be processed to the microtest queue with the option to flush immediately with flush
[03:13:42]  sync this removes the need for batch i'm torn on this one still um when i see people like uh dax you know just absolutely love and even ryan floren
[03:13:53] ce love how intuitive solids updates are synchronously i become torn on this one um there is the weirdness that under batch things kind of end up working a little bit differently than
[03:14:11]  not like but i think that could be redeemable i think batch might give the wrong impression flush sync is kind of better in a certain way but on the other hand um
[03:14:26]  there is something really nice about just being able to set a signal and seeing it right so here create root disposed by parent by default the minor change the one we've already
[03:14:39]  implemented it sets up a better pattern i think right now in solid primitives we have like multiple root things where there's like create sub root and all this kind of crap
[03:14:49]  um but like basically the idea is that if we the problem with creating roots that don't dispose with their parent by default is that like i mean on one hand you can
[03:15:12]  say well then why are you even creating a root if you creating roots so that you can manage your own disposal but if they don't um dispose with the the parent by default
[03:15:21]  um you're also creating like this like zone that has no accountability one of the ways to avoid this is is attack like the what makes a root a root is its ability to
[03:15:33]  manually dispose itself not necessarily its ability to get out of the disposal tree if that makes any sense i think things like run with owner are better in this sense because what you
[03:15:47]  should be doing essentially is in a case where you have something where you want to it's not that you want to get rid of the disposal you want to move the disposal up
[03:15:57]  a few levels like if you have a four component which maps over stuff you don't want you don't you want to be able to release each row independently but on the
[03:16:14]  other hand when the whole list gets removed it would be nice to be able to just one shot dispose the whole thing and um what essentially what you want to do is actually
[03:16:28]  instead of the thing that recalculates and does the diffing and chooses which row to be the owner so like every time it runs instead of that being the owner if
[03:16:37]  you made the parent scope of that the owner then you get that behavior for free essentially i i know this is more of an internals thing but i think i think it makes
[03:16:46]  a lot of sense lazy crate memo we we talked about this memo should be valid on read this can improve performance in some cases it's also should be possible that only this
[03:16:56]  memos can be disposed automatically outside of the roots making it much more convenient to make global stores or avoid warnings when memos get created accidentally incidentally during prop access um
[03:17:04]  this this happens a couple times where people do prop access in event handler and it actually like creates a memo because it's conditional um yeah i i uh it's kind of
[03:17:22]  awkward that derive state can't live outside of the tree right now as much as i'm not like saying go use global stores it's weird like a perfect example like when you
[03:17:31]  use getters like if you want you know reactive derive stuff inside a store with getters like it's not like there's just so many cases where the source state and
[03:17:44]  the drive state kind of belong together and the effects are like the other tree of course async throws a huge wrench in this because you know async is this thing that you
[03:17:56]  can't it messes with our ability to purely drive so it kind of has to belong in the effect side of the of the tree so yeah i don't know at one
[03:18:08]  point i was toying with the idea that stuff that has to go in the tree would be prefixed with use and stuff that could exist outside could be prefixed with
[03:18:18]  create um no one really bought into it or really got it but it was just it was kind of interesting to me to have this idea that like where you create a signal or
[03:18:30]  create a memo you use context use an effect or use async right like it could be a clear hint from a naming standpoint to understand instead of it being about like using
[03:18:45]  a pre-existing thing it actually means its participation in the ownership graph versus its participation in the uh um dependency graph only i know crazy idea just talking to air um yeah
[03:19:06]  well it yeah i mean it uses cache but the cache implementation is optional you don't need a cache to use create async it worked when i first built it i built it
[03:19:16]  that way but create async works completely fine as a standalone primitive without um without the cache primitives it actually handles serialization all that stuff automatically so like yeah tricky but
[03:19:33]  yeah it's one of those things right create computers def create in favor to drive base primitives we've talked about this before um some guys some people prefer if this was create
[03:19:46]  writable um memo and create writable projection but i think it's very interesting the the potential of the base primitives also being derived um i've read an article uh
[03:20:02]  today about you know how to drive stuff and react and they suggest to just bail out an early exit i'm like okay well i want a solution that so we don't have
[03:20:11]  to walk you know this makes some people uncomfortable some people want a different name but again this comes down to what i was saying before there's the difference between what it mechan
[03:20:26] ically does and what its intent and this is the opposite side of that argument i was saying that i would split create effect from create render effect and not just as an option because
[03:20:36]  your intent is different you know whereas this what i'm getting at is when you create a signal whether it's because it's just a signal or because you know it comes
[03:20:48]  from props you're creating a signal so your intent is generally the same right so that that's that's how i view this stuff it isn't about two people get hung up
[03:21:01]  on the mechanics and you figure i would get hung up of on the mechanics of all people but i want the like i feel like being intuitive actually comes from aligning with
[03:21:12]  what the developer is trying to do um yeah no comments yet from the peanut gallery i guess none of these things are uh surprising sorry that was such a such a boomer comment
[03:21:29]  peanut gallery sound like my parents oh okay yeah there are efficiency challenges with this sort of api oh i got twitch sub thank you it's been a while yeah thank you
[03:21:52]  uh ran j for for the sub i never check twitch but i when i do i i do let me see here yeah no that's that's it slow that's it
[03:22:07]  for today i do appreciate it especially because um youtube doesn't give me any money anymore all right okay yeah the efficiency challenge is here because like what if this isn't reactive
[03:22:26]  like but what i was pointing at is it's possible with a recycling system like sjs had actually implemented in solid for a while but the code was bigger than i wanted it
[03:22:37]  to be but it is possible with a recycling based system that the cost of this read if this is non-reactive is basically zero so i'm not worried about we don
[03:22:47] 't need to compile away signals to you know to accomplish this stuff so um it's interesting anyways okay what what other changes let's keep going stores store to use mutable
[03:23:02]  produce by default so instead of having the uh the path api as i called it um it's you use um you know mutation like produce as the default i'm suggesting that
[03:23:19]  there's still going to be like a path a path helper that works like it does today but um we we switch the default on stores it the the reason for it is
[03:23:29]  it maps well with the new derived store primitive because what i noticed is crate memo and the set function form of the crate signal setter as well as uh create projection and
[03:23:43]  the function form of the uh you know derived projection or sort of the store setter are basically identical um my hope is that this also can replace create selector um this is
[03:24:01]  this is a little bit of code but this is this kind of showed you how create selector would be implemented using a projection people probably haven't really thought of this uh
[03:24:11]  use case but i thought i'd implement it basically you'd get the selected id this is what you have and then you'd you'd set it on the store and that id
[03:24:20]  equals true and then if there's a previous value that there then you delete it from the store and then say as previous as previous idea so this is this store is an array
[03:24:31]  that just happens to have a dot previous on it to keep track of old value i could have kept it out here um or something but the whole point is um we can
[03:24:39]  essentially take a single value which is selected id and project it out into an an array that for each row is a proxy that you can check if it's true and then when
[03:24:56]  the selected id updates we only notify the specific row instead of iterating over like it's the same idea as create selector um essentially haven't seen delete forever yeah i
[03:25:08]  i could have set it down to find i don't know is it necessary if you're well no i'm not deleting that i'm deleting the the value at that index
[03:25:26]  the problem is that in this test the ids get bigger and bigger and bigger and bigger they never repeat generally speaking um like for it basically for the js framework benchmark i think
[03:25:37]  i could come up with a more optimal version of create selector using this api like this is just a very generic like example just so that you can like see it
[03:25:50]  um but yeah this is this is the gist of of you know where where my thinking is this might be too efficient ultimately but let's just start with hope projections have other
[03:26:00]  uses like drive stores right this is what dev was saying earlier it's saying here's create async store for you right create async create projection reconcile users that yeah see so
[03:26:12]  that that is that's how you create async store um with these with this primitive essentially uh what else uh let's keep on going replace create resource with create async
[03:26:26]  it is similar to create resource except it's missing dot state dot error dot loading mutate refetch well technically drive these require eager scheduling so we create new primitive blah blah blah
[03:26:38]  the reason that it doesn't have all this stuff is so that it's possible to um compose it better especially mutated refresh were really awkward from because of composability standpoint
[03:26:52]  um we we we want to get the tracking context back which is the key thing it's so funny because create resources split today and and effects are together and i'm like sw
[03:27:02] apping it but it's this is more aligned because if you treat the tracking context of as what's important um you can um do stuff like refetch you know by triggering
[03:27:15]  by reading a signal that's like how the cache api works you can mutate i'm suggesting you don't mutate the source that they're competing you if you want
[03:27:26]  to mutate you you create um well you create a projection here that um is mutable in fact you just instead of create projection you do create store essentially so if you
[03:27:39]  want create async and then when create store reconcile from create async now this is basically a writable um async store right it's you can see how these things are
[03:27:52]  very congruent that they fit together literally if i change this word to store um now you have your mutate function back for example or if i change this to signal change
[03:28:03]  this to signal then it's actually if i change the signal actually it's more like what is there today um right uh is loading can be queried as an expression level via
[03:28:19]  is loading so you can do you can ask questions like are any of these things loading effects split tracking from effect and i've already showed that here's a controversial one dep
[03:28:34] recate on mount could go either way on this one but one challenge of this split tracking is that on mount is in a weird place you could say it's just the back
[03:28:41]  half but then it can't read from any reactive variable safely this cripples this permanent enough that unless we want it to look split as well just implicitly untracked
[03:28:52]  i'm not sure it survives like would you want an on mount that literally you have to do this but then it doesn't update on count like you said as a dependency and
[03:29:03]  then it doesn't update it's just weird um um yeah i don't see this happening so my gut is we deprecate this um ownership extend create root to manage
[03:29:20]  flush boundaries i haven't really written that in uh did i where did i put the other thing about create root didn't i already put that up here yeah i should move
[03:29:32]  this under ownership anyway um yeah this is important this feature i haven't fleshed out here but the idea is if if if if as part of the ownership tree you can control
[03:29:58]  when the effects under you flush you have the base primitive you need to create something like suspense it's this is less about building suspense into the reactive system as building the ability
[03:30:12]  to control when effects flush into the reactive system at a core level so um i don't think suspense necessarily i mean we have to see um i'm it's possible that
[03:30:28]  suspense is core to the reactive system but i'm i'm playing with the idea that it is just uh a management of of of when you can flush effects um dom expressions yeah
[03:30:44]  i don't know these are two ones that i haven't i need to fill out but some people like the idea of registering directives um it gets rid of some of
[03:30:54]  the downsides i like our directives but other than typescript being a pain you know saying that they don't exist and then flushing them out if we registered them this
[03:31:06]  wouldn't be a problem but then on the other hand we'd have to register them which kind of takes away the magic i don't know all these topics my intention is
[03:31:18]  to write something up and have get people's feedback on i'm just kind of putting it out you yeah removals um all most remove apis will be able to
[03:31:57]  be approximated that we can ship a solidjs such legacy package to support any that haven't been marked as deprecated during 1.0's life cycle um create
[03:32:05]  computer this will be completely replaced by other printers that copies that write signals that runs during pure time is dangerous not mentioned harder to place in a lazy world technically we can build this
[03:32:15]  by eagerly scheduling the the stuff at the same time we schedule create async so we do have a path potentially of making this primitive um you know as part of a
[03:32:28]  deprecated moving forward kind of thing i can't do anything about batch batch and flush sync is it's i don't i guess what you i could do is i could
[03:32:43]  make it you could make it so that yeah do you know do you know how you could batches behavior would essentially be replace the function with something that calls flush basically call
[03:32:53]  the batch function and then call flash sync at the end of the batch function i think that's basically the closest i could do it but then we'd have to also be aware
[03:33:03]  if it's in a parent batch implementing this might be fun but i think there's a way we can we can keep it as in legacy on error this one was dep
[03:33:13] recated during our life cycle so it just goes on mount i don't know is what it is create resource easy to build with the new primitives create mutable we
[03:33:24] 're going to send that to solid primitives if we haven't already um class list i don't know i should put this up here under the dom expressions i don't know
[03:33:37]  what to do with class list i'm hoping that i'm inspired afterwards people love it it's also the absolute worst so it's like it's very this this is one of
[03:33:46]  those ones that i don't know scheduler and crate deferred to solid primitives i don't care any more i think um i i it's a bold move to
[03:33:58]  say but like i i don't know if time slicing i mean we'll see when we get there but my gut is that time slicing is just not worth anybody's time concurrent
[03:34:15]  rendering is sweet um like the ability to to like have multiple um realities in flight at the same time as you're trying to realize where things will end up but time slicing
[03:34:32]  to split up that work well probably an essential optimization at large enough scale i guess is the problem it's also like it's it's it's like you're already in
[03:34:51]  trouble by the time you need it i know the three js guys will say otherwise but like i don't know we'll see in the last four years i have not seen
[03:35:04]  practically any practical use for time slicing no i can't link this yet because i haven't shared this yet i want to finish this list and make this more presentable before i
[03:35:21]  have this as a permanent place that people can look at um i i should just bring this to github yeah people sorry did i talk about this yeah people really like
[03:35:36]  on mount and on cleanup um on mount is just it's tricky i mean technically we could keep it but it's the it's it's the place that it's one
[03:35:57]  of those places that the untrack guard should come in do you know i mean see people if people like access reactive values inside on mount they have to understand that like it
[03:36:14] 's too late like like it's possible if i guess i shouldn't be worried too much basically the only problem with on mount is if something async happens right so you
[03:36:25]  have an async value and the only place it's red is on mount it's not read in the render effect it's not read in any kind of like scope that actually
[03:36:37]  impacts rendering in a throw based system on mount would then throw because it can't give it undefined and it would just die and you're like you could be accessing
[03:36:47]  prop.user and then it just crashes and it's one of those things that's like technically prop.user was probably used somewhere else in the system so this will never
[03:36:59]  happen but on the weird case that someone like fetches data and then only accesses it in an on mount it will throw i don't know maybe i'm over worrying about
[03:37:09]  that scenario maybe it doesn't actually matter yeah i mean a lot of this is i mean it's a starting point again because the problem is every time you end up building
[03:37:33]  more and more on it some of this stuff gets moved some of this stuff gets gets legacied out um yeah on the positive i don't see us i mean class
[03:37:44] less is an interesting one but for the most part like i don't see us not being able to support the current primitives right the the challenge obviously the the things that change
[03:37:57]  the api service like create effect having different arguments is going to be a very widespread thing where libraries will need to major or their major most version bump along with solid major
[03:38:14]  like it is a major release you know it it will push everything out there will be old libraries that will not work and while most of the stuff doesn't change or might be
[03:38:26]  a simple swap out create effect is probably the most breaking change in here um not that i feel like people should be using create effect nearly as much as they do but i
[03:38:46] 'm sure you guys do any way in ssr to do server-only data fetching will let's all start like remix do for react i don't but
[03:39:30]  i don't quite understand the question remix is a meta framework like solid start so like remix for react is like solid start for solid um yeah i'm not quite sure i
[03:39:58]  follow like they mean like react router and the answer is react router can can't make it server only right react router can make it isomorphic but not server only yeah
[03:40:17]  i think it's a question about server functions probably react made server functions part of their build didn't they like part of their bundling i i it's a hard task
[03:40:30]  like it's bundler specific so if you say you're going to bring that in that means that like because it's not it's not it's not as it's not
[03:40:39]  enough to be a compiler thing like babel doesn't solve server functions you actually need like beat or webpack that's yeah i don't know i think that's a
[03:40:55]  little bit tricky i think i'm fine with server functions sitting in the meta framework at least for the time being um i think i i've been reading these comments about like on
[03:41:04]  mount and all this like you understand that like create effect does exactly the same thing if you don't put anything in the front half the it's the only reason that i
[03:41:16]  was like kind of hesitant about on mount is because i think it encourages people to do stuff that might break whereas create effect like they have the option they like they have both sides
[03:41:27]  i i doubt i'd give them a split on mount so like it's possible that on mount just stays as is and maybe the strictness warns people and makes them aware
[03:41:38]  of the potential problems i don't know like like we don't lose anything from on mount by getting rid of it it was it was if you look in the code it
[03:41:46] 's literally like a one-liner over crit effect it's an example of one of those things that um again capturing intent a little bit better leading to a different primitive that's
[03:41:58]  how at least i justified it yeah except the only problem is that yeah no that that is actually completely true right the the challenge is that um the front half of create effect
[03:42:21]  unless it truly has no reactive reading dependencies is never a no-op like you're better to this is one of those weirdness you're better to untrack in
[03:42:34]  the front half of an effect than you are to just put the axis in the in the handler anyway that's this is my list right now my working list of of what i
[03:42:56]  think changes in 2.0 in some ways it's a lot and it's in other ways it's 1 2 3 4 5 6 7 8 9 10 11 12 it's
[03:43:17]  about 14 or 15 things maybe i don't know yeah i mean we could be a little bit forgiving there i mean it's not great but we could have both sides of
[03:43:40]  the effects catch async it's a mess from this perspective that it is a bit of a mess but yeah that's the problem okay um i think i'm okay with
[03:44:02]  this let's see if there's anything else on twitter worth looking at um to me this doesn't convey the intent to run once um i think it would over time i
[03:44:28]  think it'd be pretty clear that if the effect isn't it's kind of like the empty array in react like if it's nothing there nothing runs you are like nothing
[03:44:37]  runs again it's it's more of like the async stuff is just awkward it's okay um let me see here let's let's go let's go give me
[03:45:12]  a second i'm just going to set up for this week in javascript how's everyone doing still still alive still with me part of me wanted to cut the stream
[03:45:29]  even shorter because i want to get back to what i've been working on it's it's it's exciting to be able to work on new stuff again like after like a
[03:45:38]  weeks of like bug fixing really minute but tricky issues around solid start or ssr or benchy or whatever it's like actually be able to build something it's been
[03:45:50]  you have to understand solids there was a few moments in beta 2 mostly around december and january and like little snippets where we got to work on you know especially i
[03:46:01]  got to work on the newer stuff but i've spent most of the last three years in maintenance mode um like even some of the cool stuff that came out i didn't do
[03:46:13]  it um like server functions that was nakil theravel that was alexis i've literally just been fixing bugs for for three years um so i am i'm
[03:46:28]  i'm very happy to be working on new stuff but yeah let me see here we got bookmarks let's get my profile and get some solid news okay yeah you guys
[03:46:54]  laughing at this i should play elven ring no i i'm more likely to play mt arena on stream than i and pretty much anything else um magic the gathering that
[03:47:12] 's pretty much the it's short enough of a game that i can like play something and then like discard it away you know kind of thing like in bits um i i i
[03:47:25]  still haven't be beat witcher 3. i'm like literally i don't know i'm i got to like skellig or whatever and yeah i'm just how
[03:47:33]  many years ago did that game come out there like witcher 4 is going to come out before before uh before i'm done witcher 3. okay when was the last
[03:47:48]  stream um okay yeah i think this is the beginning of this this is the beginning of this a lot of the topics that i posted this week on twitter were related to what we
[03:48:10]  talked about today oh yeah i could play zelda too i've been still playing tears of the kingdom but i feel like everyone else beat that game like a year ago
[03:48:18]  all right all right uh where am i okay this this this this okay ready let's do let's do this week in javascript or at least this week in my
[03:48:44]  twitter feed all right and switch views all right a few topics today that we mostly covered already but um i i i we'll see as we get there um start with a little
[03:49:07]  bit of solid stuff uh um i think native script actually shared examples with everyone but it's it's i i always like supporting um or giving visibility to a lot of the
[03:49:21]  non-web work that goes on with solid um i know people keep on telling me about like their mixed experiences with it i i don't know i i was very
[03:49:31]  impressed with what i've seen um so yeah i i think i think this is a cool example again showing ecosystem library different platforms solid all working together which is sweet right when you
[03:49:45]  have something like two completely independent packages being developed in different spaces one trying to get native to work one just handling data querying in solid and being able to connect the dots
[03:50:00]  all the way through to create like a you know like a full stack so to speak always you know really powerful thing to see so um yeah solid example using task query is now
[03:50:11]  available to try so i love how stack blitz lets you just like fire it up you know um yeah actually i'm just gonna fire this up for a minute because i
[03:50:21]  don't know if i've ever tried a native script uh in stack let's just keep on going we'll look back at it um learn with jason i'm doing learn
[03:50:29]  with jason coming up in i think it's the it's toward the end of the month um on solid start um i have to admit i'm excited and petrified
[03:50:39]  of this learn with jason is is one of those like i know it shouldn't be considered like nerve-wracking but for me as a javascript uh author
[03:50:49]  it is one of the trickiest ones because i make a lot of pre-made demos where i get to work through the problems and like i approach it kind of academically i
[03:50:57] 'm like okay what kind of problem solve what's a good example of that problem and i solve it learn with jason i have to show another human being how to actually use
[03:51:05]  the framework and i mean it's good because you hit all the stuff on the why but i am terrible at coming up with the examples i feel i feel like that's
[03:51:13]  the part that always like gets me i feel like people like other people have like good examples of things that they can make in 90 minutes but it's hard to find the right
[03:51:21]  scope and then you you should always undershoot because you're trying to teach someone else to do it it's a whole different type of skill than building a demo yourself like i
[03:51:29] 've done conference talks where i literally live code at 30 minutes straight it's fine this scares me a little bit so i'm excited because the last time we did learn with
[03:51:39]  jason because of you know how we just stumbled around a bit he basically inadvertently got us to figure out the way to make solid click with people um the first time that
[03:51:56]  i did the whole signal in the component pull it out of the component thing was on that stream it was just he jason just was like oh yeah so how do you
[03:52:05]  do global state and i was like i don't know i i mean you can just take the signal and put it up here and and like you know what i mean it's
[03:52:12]  just like you know that cemented it so i i i have high expectations but i'm also a little bit you know delegated to this tattoo yeah he's he's he
[03:52:25] 's done some stuff this this i do less of this kind of stuff about the the dx team is doing great hitting all the conferences and stuff will leave me time to do
[03:52:34]  work which is making me really happy but um jason's a friend and i'm glad to get going stream with him it's been a while so you know all right um
[03:52:46]  yeah i don't know that's that's it on the solid news let's uh let's go on my thread here interesting tension occurs when framers realize they need to
[03:52:55]  be stricter no one likes to be told they can't do something they've already done but once realized it's already too late some things are discovered rather than invented once
[03:53:02]  known they can't be unknown there are ways to address the dx but nothing can change the underlying truth the compiler can hide the rough edges at least for a time but it can
[03:53:11] 't change the need for understanding i wonder if it is more painful to live in the illusion longer or rip off the band-aid this is not specifically about reactors compiler but something
[03:53:19]  we are seeing in general as framework models mature react has known about the need for strictness for like eight years and has been trying to migrate generally rather than hide the rough
[03:53:27]  edges yeah the funniest thing is i realized after writing this it sounded like um i was talking about react but like i actually didn't write this post about react at all um
[03:53:45]  this this was actually me looking at the changes for solid you know like the split effects thing and the async thing and you know the way that we handled um tracking and unt
[03:53:57] racking and thinking of like all the ways i could solve this and realizing that we just haven't been strict and people like us because we haven't been strict but it
[03:54:08] 's like it's it's a dead end right like you get to a point where it works against you i don't see it as being stricter jen remember wh
[03:54:18] iz it's about being honest about what uses padded framework authors truly understand allowing you some patterns that are poorly understood it's fear of what could go wrong is risky this is
[03:54:25]  a good idea this how good ideas get bad rap yeah yeah the problem is like i didn't know this stuff eight years ago right it's like it's not that intentionally
[03:54:35]  left it open because i knew right you kind of like it's always better if possible to start more restrictive and then loosen up over time but that's that's never where people
[03:54:47]  want you to start they want you to start looser and then learn and then best practices later so there's like a real conflict there main kill from angular love having the
[03:54:57]  framework authors kind of come out definitely see this happening of viewers anglers had a couple of these moments stricter type checking probably in the first one and and i i know
[03:55:04]  a lot of devs kind of think along this kind of line right they're like provide an escape hat for those who really want to but then don't come back fine if
[03:55:13]  they break people come back crying the other day someone came into uh the solid discord and they're like they said something along the lines of like i don't know what they
[03:55:23]  were trying to say but they came in general chat and they said something along the lines of like how they were done with solid and you know they were going to go back to
[03:55:32]  react and whatnot and their reasoning was because breaking changes in solid start and it was like maybe it was on reddit i saw this maybe it was on reddit but it was
[03:55:46]  like the response like i didn't get in there and i i wanted to kind of like caution people a little bit you know because obviously people are free to have their opinions
[03:55:54]  about like what how it works for them but like on the other hand it was kind of like someone said like are you stupid like like literally every possible opportunity the the every place
[03:56:05]  where there was any sort of written material around fall start it was like this is in beta will be breaking you know but yeah it's not enough people will use something if
[03:56:20]  it exists and then they'll blame you regardless um and the real problem that i was trying to show here is say here is is this it's until they can't the problem
[03:56:35]  is at a certain point once you realize the model isn't what you originally thought everything will align around the new model until it can no longer be accounted for often the escape
[03:56:43]  hatches becomes a blocker to achieving the goals like let's say someone really really wanted to not split effects up right and we figured out a way to kind of somehow support
[03:56:57]  it in an odd way the problem is every other feature is going to assume that we are splitting it up you know like you'll keep on building along towards the model and when
[03:57:07]  you have something that's like doesn't fit um it just prevents at a certain point you'll get to a point where you're like i can either do the really cool
[03:57:15]  new thing where things are heading or i can support this thing and you you you get what gets asked the problem is once you realize that something has to shift it's already too
[03:57:25]  late the things that don't work are already dead it doesn't you can prolong it you can try and work around it you can migrate it but once the realization hits it's
[03:57:33]  over is kind of what i was trying to say it's it's not about applying giving escape hatches it's like it just doesn't make sense anymore but there's
[03:57:43]  you you have to account for the point in time where the idea goes from you understanding the model change and being able to convey that to everyone else right so like something introduced
[03:58:05]  me is i noticed that php devs like myself often work company with framers that include multiple layers of complexity abstractions say laravel symphony without feeling the need
[03:58:13]  to dissect every line of code they adopt they adapt easily from using them as tools to build complex apps without much concern for underlying details gs dollars and they accept myself to tend
[03:58:23]  to approach frameworks differently many or more clients to dive into the code blah blah blah yeah i thought this was an interesting comment it really wasn't on topic but it was it
[03:58:30]  was this idea of like programming philosophies of each community and i told a little story and i think i've told it on stream before but like view source is embedded into j
[03:58:40] avascript right the fact that in the browser where the code runs and you can always just inspect it is built into the philosophy and i think it's a big part of what
[03:58:50] 's made javascript javascript over time because it wasn't compiled you could literally just look at it and understand the code which means combined with like an ecosystem that
[03:59:01] 's like less developed and you know less mature you have this interesting crossroads where instead of documentation people looked at code and i i i think this is interesting um someone str
[03:59:17] addling both sides kind of seeing this kind of different take i don't know if js will stay that way which we'll talk a little bit later but it's i definitely
[03:59:26]  remember that i i was a js dev in the 90s you know view source then i worked you know in.net for about a decade and when i got my first job
[03:59:33]  back at a js shop um i was like really frustrated because we had all these open source libraries with like no documentation my the the guy my manager had actually written some of them
[03:59:42]  you know like knockback and stuff and stuff wasn't working and i'd just be like yeah even we even built some stuff inside like in house at the time back when
[03:59:51]  rm when i first started i wasn't like involved in the dev of that and i was just like nothing worked all that and at a certain point my manager was just like
[03:59:58]  man look at the code you know you can you know you can just like look at the code and see what's up and you could tell he was frustrated but he said it
[04:00:06]  in like a fairly reasonable way and i'm like damn you're right and i know that seems so weird but like when you were working like on.net with like visual
[04:00:17]  studio auto complete right click open the docs you know like kind of thing you just you don't look at the code you like it's you just read all the descriptions and then
[04:00:26]  you look at the examples and stuff like that and i just looked at the code and honestly solid js wouldn't be here today if it wasn't for that so like the
[04:00:36]  idea that you know you could be a hacker you know like not a hacker like in the black hat sense but that you could just like take something and and you know play with
[04:00:45]  it to make it work for yourself has always been a long-standing part of javascript community that's an interesting point too right javascript has completely corner
[04:01:18] ed the web so there's always going to be people who dislike it anyway um yeah i mean these things anyways i i my whole point here was just that like the moment
[04:01:37]  when the change occurs isn't when it's released it's when it has changed in the author's mind it's like sometimes like these things that are discovered these patterns aren
[04:01:49] 't something that invented it it is much more like a truth to the reality if you know certain things the rest just flushes itself out like sculpting so like i i i
[04:02:00]  think people have to realize that in some ways the only choice is how to manage the migration there is no actual choice once perception has changed or perspective has changed anyway um all
[04:02:16]  right we talked about this one i feel like but let's let's go here jsx is such a game changer old news right as i said most people mistook me
[04:02:30]  to to be talking about you know jsx the language itself i'm just talking about embedding templating macros inside javascript right i don't know if i
[04:02:41]  need to cover this much more but the in a sense single file components only exist because the world was based around components now we're in a world where people are compiling stuff
[04:02:52]  outside of components it's more permissive it doesn't make as much sense um boundaries used to mean something it was where your framework lived in js and now we're everywhere
[04:03:04]  there are conceptually three zones single file js code that framework compiles other js code where we need only two we've moved beyond components and dx probably should reflect this yeah
[04:03:12]  i don't know i had a lot of arguments with people over this one it was kind of funny so so like i think the only reason it's worth talking about is
[04:03:23]  like like stuff like this like no and i was like what i know i i'm not supposed to engage in conversation like this but i i i wanted to know what was so
[04:03:41]  no about the statement right and then i found out that this this whole thing was all about template tag template literals being bigger than js and to be fair um tag template
[04:03:53]  literals um have the same qualities as jsx for the for the purpose of what i'm saying here of not being a single file component thing just being something embedded in the
[04:04:04]  javascript um this actually died a long time ago yeah some people have a real hate on for jsx so i think i think that's fair the the only problem is
[04:04:14]  that tag template literals have a runtime um implication you can't just take some tag template literals compile the crap out of them to make them perform it the way you
[04:04:24]  want them to and then be like okay see i'm good because if they don't run the exact same way without the compiler or have the same semantics without the compiler well
[04:04:34]  then that doesn't work no one writes tag template literals so that they don't work with you know without a compiler whereas jsx everyone knows it doesn't work without
[04:04:45]  a compiler so you need one so that's the only difference everything you do with tag template literals you can literally do from a compiler analysis standpoint with jsx um and they
[04:04:55] 're even more powerful arguably because you can there's certain characters you can't use for like attributes in jsx like you can't use like i can't make like dot
[04:05:03]  property or use certain symbols in jsx a little more restrictive i'd love to be able to you know do that but the problem obviously as i said is it doesn't
[04:05:14]  have to be jsx but tag template literals are not at all what i'm looking at for in a sense yeah so for okay so this internet i think it's
[04:05:46]  multiple types in it right i mean or you can just put everything in javascript right like javascript is a file format that has multiple types of things in it because
[04:06:00]  of macros so like it's it's an interesting it's like whether we want so you could argue that's an ergonomics thing whether we want to look like ht
[04:06:10] ml top level or you want to look at like javascript top level and i'm arguing that javascript one when people want to extend reactivity the way that
[04:06:21]  we do today yeah it's funny this when when it is similar push htm everyone should have jumped on the template little team yeah uh they went to one at the js
[04:06:30]  framework benchmark that's for sure um i thought that it's a big deal um but yeah this the discussion goes on and on and on but for me it comes down to that
[04:06:43]  uh it was just it was just amusing because as i said it it spent more time talking about that than the fact that like it's not about it's this about single
[04:06:53]  file components not about like whether you dislike gsx or not all right all right this will be let's do some bookmarks before we go there um we already talked
[04:07:16]  about the spelt one okay this is a fun one this aged well just published react 1900 rc0 this is the exact build we will release in 1901 unless there
[04:07:34] 's an issue reported that requires a breaking change thank you everyone will help let's get the release into shape if you remember um this was suspense gate when this went out um you
[04:07:44]  know the whole like triggering it i i don't know why this was mentioned but i want to highlight andrew clark's string this is why a reason we aggressively promote
[04:07:55]  things to beta rc exactly until we trend to release many teams libraries won't test it the removal of lazy suspense fetching eg boomer fetching was in canary for
[04:08:04]  over a year anyway you'll get your boomer fetching soon enough we're fetching it's funny how they're trying to like make it sound sound bad i don
[04:08:15] 't know it's who who would thought people don't want things to be blocking all the time i don't know it's interesting but my point is this they are very
[04:08:31]  meticulous and canary and like going through all the versions i mean like look this can change this can break they they have a whole process but they're right until they threaten
[04:08:40]  to release i mean it's the same thing it's so funny when we release solid start some people are like oh you should have kept it in beta longer blah blah blah you
[04:08:47]  know this and it's like how much longer of a beta do you guys want like beta one had some good testing beta two we made the change but when we made the
[04:08:57]  change to beta two you could see it in the download numbers people weren't adopt like we got the early adopters on the beta one we went to beta two people didn't
[04:09:05]  just it was a it was a bit of a migration people didn't jump ahead people basically didn't test beta two you can put into rc and like this is the version
[04:09:15]  got a couple of things it was that's when we started seeing the hints of the issues it wasn't until we released 1.0 that people actually tried it and tested
[04:09:23]  it and all the issues showed up so like yeah i mean react you got to like rca it you got to be like a little bit more you know because they're established
[04:09:36]  for other projects yeah you got to release 1.0 for people to actually even try it so yeah yeah i mean exactly right so yeah i i think yeah i i just
[04:10:06]  wanted to just highlight this this is why the you this is why we do what we do you know in stages you know it's kind of like the the broken code thing
[04:10:15]  you know like yeah i to be fair i get it it works both ways i just told everyone that if if you know they didn't want their code to break don't use
[04:10:26]  solid start you know at the time um so you know it's a calculated risk once once things are 1.0 that doesn't mean there isn't bugs that means we
[04:10:37] 're com we're committed on where the apis are at and like how things look you know um so i feel like solid 1.0 has lived up to that and i
[04:10:46]  i think start has too even if you know we're still going through bugs as we're getting you know larger companies on boarded on it yeah i mean yeah i mean
[04:11:03]  people there's a problem when you're in this position and you've got to come up really you know you know polite and it's like sometimes there's a little bit
[04:11:15]  of of like like look what else can we do all right let's see here the biggest myth of front end is debouncing throttling of the legit technique i
[04:11:40]  love this tweet i don't know why it's not liked here i liked it i definitely liked it this is one of those ones that i feel like theo might like do
[04:11:49]  do a stream on at some point or something you know like i guess this is too small of a topic to do a whole thing on but it's like it's this is
[04:11:57]  one of those things where where people will debate this or argue with it and part of it is of context but it's also if you look at like even companies like net
[04:12:12]  netflix they commonly talk about this like their search they don't debounce or throttle they they the uh was a j phelps or ben lesch had this like talk
[04:12:27]  about back pressure and streams and it was rxjs but like the the whole point was the comparison here in terms of ui like sometimes you you basically throttle on the
[04:12:36]  input and sometimes you throttle on the way back in and he basically the idea is it's better to like send requests as quickly as possible and cancel them in terms of like i
[04:12:50]  understand this is more expensive for back end but and for user experience and then have the results you know be able to handle the the race conditions on the way back out than
[04:13:03]  it is to do any kind of method that restricts the request coming on the front end so like debouncing always makes things feel slower because it's based on like when
[04:13:12]  you last type right you can do a whole bunch of tricks around leading edge back edge stuff but this is this is what they tried to show when they introduced suspense and like dan
[04:13:20]  abramoff was doing his thing he was like that's an example of managing the differences on the way back you know if you type too fast and the client hasn't
[04:13:30]  you know process or rendered the data then you know your things coming out of order you know we we throw away certain results and render stuff as needed but the final result of what
[04:13:42]  we show consistently as we're able to is generally going to be better so like you know like the whole transition kind of thing um i'm gathering this what he was trying
[04:13:55]  to get out like with react you can use transitions and essentially remove the need for debalancing and throttling to a degree like generally speaking i can see that if you
[04:14:05] 're worried about hammering your back end you need some kind of protection right but that protection maybe needs to be on the back end not on the front end because anyone can
[04:14:18]  hit your back end that way and cause you know i don't know it's he this could be completely nothing to do with what i'm talking about so i didn't sleep
[04:14:30]  to the worst test but i i just thought it was interesting i don't know how many people knew that like netflix when they do their search doesn't use deboun
[04:14:42] cing or throttling anyways i care what my server costs more than my ux yeah yeah obviously i think that does matter but it's is for a lot of things but
[04:14:59]  like you can understand why like search is the most important part of your app you know depending on it anyways okay yeah yeah yeah yeah yeah this is this is perfect okay i
[04:15:17] 've got a couple more um as you guys know i'm an avid follower of htmx i i i uh i i look at all their um tweets and i
[04:15:30]  laugh at their funny memes that i find quite funny and um so obviously whenever they post something i pay lots of attention and they post about a new framework that incorporates ideas from
[04:15:46]  htmx alpine and solidjs into a tidy 14 kilobyte dependency free package well i'm always open to look at a new framework and oh risa
[04:15:56]  build yeah there we go another one um what am i looking for here to be cheap hurting people to be running i don't know if this is the author probably yeah it is
[04:16:16]  they they tagged me and they tagged me on a stream day which is really smart of them because it means i'll i'll take a look at it um yeah yeah yeah
[04:16:26]  i saw that at the earliest stream but i wasn't going to give them the satisfaction until i actually cover covered it um where i'd usually cover it i didn't it wasn
[04:16:38] 't a topic for the beginning of the stream um but yeah be very interesting the project really interesting the things that most of that you can watch is epic streams to be honest i
[04:16:46] 'm just taking signal some making them declarative signals are declarative okay well i mean he's he's done it now so i guess we're going in i i okay
[04:17:02]  okay yeah so first thing the install instructions are a cdn cache script um which is probably tells you a lot about this framework writing js code means it's not declar
[04:17:18] ative interesting yeah i i'm i'm i'm do they count the js code that they write inside their attribute bindings i wonder like i i'm gathering this is going
[04:17:44]  to be like alpine i i i actually haven't had a chance to really look at this so i yeah hello world sizes something's wrong with this picture yeah this
[04:18:05]  this there's i are are they measuring zipped sizes or un no see they can't be see next js is about 80 ish i'll take this min g zipped
[04:18:18]  right so this is about the right size for next js if we min g zipped it wasn't min g zipped next you have to be like like i don't know
[04:18:27]  like like i don't know a couple hundred kilobytes so this is min g zipped i'm going to trust these numbers look like min g zipped spell kit
[04:18:41]  hello world min g zipped is like 13 kilobytes but we we have hacker news demos that are 16 kilobytes with with svelte kit i i i
[04:18:51]  i it's possible that their library isn't min g zipped which explains the size but i think htmx is about 30 kilobytes min g zipped or
[04:19:03]  yeah so not h yeah like my guess here is that svelte kit act this is one of my pet peeves not not this chart it's fine if they just
[04:19:14]  made a mistake it's that people actually think frameworks like alpine and stuff are produced smaller output than like compile frameworks like solid or svelte kit like they are not it
[04:19:26]  it's it's one of those funny things that i've especially because you like when they bring in the script like this you don't even get the advantages of tree shaking generally
[04:19:35]  speaking like if i was to make a vanilla solid application not solid start with like some of the extra stuff well no we've seen it with solid start because we don't
[04:19:49]  need that stuff a solid start application with server side rendering is 4.5 kilobytes so and as felt kit one you have the router and stuff so it's like a
[04:20:00]  little bit more so it's like um probably as i said like it's in the not it's probably around let's say 12 to 13 kilobytes so like yeah
[04:20:13]  i think these numbers probably at least your svelte kit need to be checked my my gut is that like people should understand that htmx is generally bigger like
[04:20:31]  like than optimized uh javascript frameworks it doesn't end up scaling bigger because that's where h like if you're using like htmx that's where it
[04:20:40]  stops but like hello world apps in optimized javascript frameworks tend to be smaller than the than the approaches that like like alpine js type approaches um it's it's it
[04:20:55] 's interesting because they like the heat view isn't so petite you know so to speak petite view is actually half the science of alpine js which is kind of funny um i
[04:21:04]  mean i can actually show this js framework benchmark this is a little bit more than a whole world world but it's it's not a bad way of looking at size right
[04:21:13]  so let's go size uh compressed let's do compressed size here to do oh interesting they've shrunk this stuff down considerably so yeah what are we looking at about 4.
[04:21:32] 4 kilobytes for solid 3.5 for million i like this this is better they used to have like all the sizes this this is only measuring i think js size
[04:21:39]  now and removing all the other assets let's go all the way down to find alpine to do do there we go 13 kilobytes compressed 43 uncompressed now it
[04:21:51] 's possible that they fix an issue that they had at the time which caused this to be a little bit bigger than i than i wanted it to be but what i'm they
[04:22:02] 're they had an issue in their bundlings so maybe this hasn't been updated but my point is that like this is always what kind of bugged me a little bit
[04:22:16]  on the alpine side i haven't even looked at this framework yet so i don't know the same but like it's bigger and incredibly slower um right like so it's
[04:22:24]  kind of like why does anyone prefer to choose something that is bigger and slower i don't know you know is the dx better too no i don't i i like it
[04:22:37] 's tricky but let's let's let's continue on here sorry this is about alpine not about this um okay okay back and state that's fine what is this like
[04:22:52]  so is there let's get started okay bird's eye view okay so yeah okay there oh so h2x is about 16 kilobytes and alpine is probably about about
[04:23:07]  uh what did we see probably like 30 kilobytes or something and that's how they get it or 25 kilobytes probably 25 yeah it's better for people who
[04:23:21]  don't want nothing but build step i believe yeah yeah yeah yeah yeah yeah to be fair yeah they like knockout js was kind of along those lines too right um lines or
[04:23:35]  alpine data start brings them together essentially sends current ui to back and vh no fragments cool manage client state that would be unmanaged by back ends like al
[04:23:43] pine okay installation quick primer okay index page this express app we send some html okay that's fine handling state data store yeah okay so this is very alpine like you
[04:23:57] 're just putting the this is when you inject your primary data and then you probably have basically you keep the context within the dom data model okay so that's data binding data
[04:24:08]  text dollar sign yeah this it's so funny i i i think this is how evan you felt when like he saw alpine using views composable like reactivity when view
[04:24:19]  3 came out they switched over with alpine and then he was like man this is how i wrote view one like we built petite solid on stream once like this in in this
[04:24:30]  reminds me of of like how we used to do things 15 years ago or i guess 14 years ago yeah it's got that that feel to it um data on click data
[04:24:40]  bind yeah okay it's shown equals not show yet yeah data show so this is an interesting choice i mean it's actually so re this is yeah i guess putting data in front
[04:24:54]  to be more html like this is like v v if i guess um so there's a little it's kind of like in the middle knockout everything was called data
[04:25:04]  bind and then you put all your syntax in here um uh this one uses the the like specific syntax you know uh or specific attribute names with data prefixes it's kind
[04:25:17]  of funny people i i forget if i told the story on stream before but when i got hired by the guy from knockback i didn't know he was the author of knock
[04:25:25] back and i was i had to do a test and knock out and he he was like the knockback guy so he was all like knockback was like opinionated and
[04:25:34]  backbone models it had views and view models and it was all like the the it was kind of mbc time period so he was expecting like a template file a view model
[04:25:44]  file and a view file and i looked at what he was trying to accomplish and i didn't know anything about like whatever the hell he was doing like the model mbc
[04:25:54]  stuff like i mean i'm familiar with mbc i was working in asp.net but like i didn't know like what he was trying to do with his library
[04:26:01]  i guess i misunderstood it and i was like looking i'm like when do i use this versus this so i actually implemented the whole test app in knockout bindings without needing
[04:26:10]  like any extra files like i just wrote all the javascript in such ways that i could like inject it like there's like one other file for the entry that it did
[04:26:19]  a little bit but for the most part like i didn't have his like mbc like to do mbc structured like here's the models here's the view
[04:26:26]  models here controller you know whatever kind of approach i just use all the data on me so whenever i see this stuff it does like give me back this like reminiscing of like
[04:26:33]  when i was discovering javascript again after dot dot net um server side events sure whatever protocol you want to use doesn't really matter okay all right stay in formation
[04:26:56]  fragment more element okay so yeah okay see if i'm following this completely send state finally updating the operative okay sure yeah i'm not quite sure the difference i guess dollar
[04:27:39]  sign dollar sign is special operator is this input yeah i'm trying to say i guess the thing i'm kind of interested in is how much of this is delegated to
[04:27:58]  the back end doing replacement like htmx like the the biggest thing that i like about alpine is to be able to like do hybrid work this handles like the client
[04:28:07]  updates i i view how this i get the server the client updates okay yeah yeah yeah yeah okay okay yeah so this is how you do the client side updates we're
[04:28:41]  actually done data show yeah so this control flow and it's using okay yeah sure so yeah it's it's like alpine plus plus uh htmax together yeah all
[04:29:01]  the stems of people jay is scared of the build step yeah i mean it was like that conversation i had right with the people with the html htm see
[04:29:10]  i i get that it's really tricky because it's like i mean at the end of the day you have to build the app you're going to build so if this helps
[04:29:23]  you build your app better than power to you but it's like one of those things that's like it's so hard to pull away when you're like look i know
[04:29:32]  with these build steps and tools that like what i can take as an input and what i can give it as an output is that much better smaller faster like it's just
[04:29:48]  it's almost intrinsically non-debatably so and it's like like yeah it's tricky like because i i always state that as like i won't let u
[04:30:07] x suffer let's let's go deeper javascript fatigue okay so we have a little closer thing which focus on javascript i mean it wasn't that those weren
[04:30:28] 't enough for full applications front-end frameworks are perfectly fine for front-end applications the problem is that they don't they aren't suitable for situations where you need your
[04:30:42]  like your load time to be good they take too long to load if if everyone treated every app like a mobile app then front-end would be fine it wasn't yeah it
[04:30:53]  was fine for full application it just wasn't fine for i i guess unless you considered like the marketing site part of your application once you need a full frame for actually it makes
[04:31:05]  sense to embrace it back into consistently true reality all frameworks come down to updating it as fast as simple as possible smacking around developer experience declarative you see no subset of
[04:31:14]  points 90 of problems yeah i didn't mention you still interested you intend to write your own library yeah signal signal yeah store valid javascript models blah blah content yeah it
[04:31:46] 's interesting because like yeah so far looking a lot like alpine i was just going to say that i'm like yeah like i was like this is this is this is
[04:31:56]  this is this is web dev 15 years ago i haven't quite seen the the funniest thing is that isn't a bad thing when i say that like because like it's one
[04:32:07]  of those things where like everything you mean htmx is like web dev 20 years ago or whatever 15 years ago so like it is good to circle back around and be
[04:32:20]  like okay did we learn enough in the interim period to understand like how to like why did we jump ship in the first place how can we fix or address those problems when
[04:32:30]  we go back to where we started from and be like okay now with this knowledge go because like the the biggest challenge with with this is i mean let me see docs uh what
[04:32:46]  is it uh drive uh what am i thinking here front-end existential crisis no um i can never remember what talk i feel like i use it in all my talks the
[04:33:04]  biggest not all my talks it's on my talks this this this this is this is web dev in in 2010 this is web dev in 2010. and this kind of terr
[04:33:22] ifies me that if people like if you want to solve the problem you need to solve this yep that's erb and knockout js i don't like how do people
[04:33:47]  generate like the part that's always missing for me on this is when i look at something like this is how sure i i can send back an html chunk but
[04:33:55]  how am i generating those templates on on the back end do i need to decide do i need to loop over some users like maybe it's fine maybe you use your i don
[04:34:06] 't know what code you have in the back end is it written in go is it written in rust you rust you you iterate over i don't really care about how you do
[04:34:15]  this that much but at a certain point you're going to have a templating language on the server to iterate over the users so that you can get the data to send
[04:34:24]  back from the html that you'll be able to data bind to the client to to to like it's a hard bias for me because i like this is better
[04:34:42]  than the dark ages right the dark ages of you know update panels and you know like lives in dark.net like this is the world that like came immediately after but this is
[04:34:55]  this this is this is this is this is like kind of the absolute worst other than like .net page loads i mean we all did this back in the day before is
[04:35:18] omorphic frameworks it's it's just like i how can anyone tell me that writing in this day in and day out is better than having a build step i mean there
[04:35:43]  might even be a build step for your uh for your server code the the challenge is i feel like the people who are taking this perspective like oh i finally don't need
[04:36:07]  the right javascript the javascript ecosystem went through the exact same evolution you're going through right now where you're like oh yeah alpine js okay yeah yeah yeah
[04:36:18]  and then you start going i mean i did this with solid solid was this html like solid when i first started you could have rendered it on the server as ht
[04:36:26] ml and have it work it was it was like alpine and knockout and then it was like and then the first thing i was like okay well i can optimize this by
[04:36:32]  pre-compiling the templates but i'll keep that format and then you're like i want to handle more expressions like actual js expressions oh what about like optional chaining
[04:36:43]  and stuff and you're like oh crap i need acorn like i need an actual parser that can handle modern js and these expressions i can't just use like a simple
[04:36:50]  and then you're like okay well if i'm gonna do this because you don't want to just like use evals and stuff but like essentially it's along that sort
[04:36:59]  of thinking and and then eventually you're just like what the hell am i doing yeah i don't know do you hate this no i i mean no i i it's
[04:37:19]  not just the syntax it's like i'm not saying the technical implementation i just like literally it is like a syntax hate not like specifically like i don't know if syntax is
[04:37:31]  the right word like you could change the lettering of like how you do data binds or that it's like it i just dislike data fine for each user's users each
[04:37:42]  do use like do you notice how there's two of these it's because i mean maybe the thing is that users will always come from the server so we can get rid of
[04:37:52]  one of these but like like after the fact maybe that alleviates some of the pain like the biggest difference here is you only were on the server once so if you need
[04:38:04]  to update the user list you needed to data bind it whereas this approach you probably can get rid of the client user iteration and only data buying the specific fields that update it's
[04:38:18]  also possible that you just don't do this i mean i'm i guess there's some amount of like optimistic update or like temporary temporal data is essentially where you want to
[04:38:31]  use data binding and then you go back to the server to refresh like when the panel comes in so my guess is a modern day version of this because of the the way the
[04:38:42]  parcels work is probably going to be a little bit less noisy yeah it's probably gonna be a little less noisy i think i think that's probably the biggest difference because we
[04:38:53]  knew that we couldn't go back to the server we literally had to duplicate all the server logic in the client which was absolutely horrendous where on this approach you only need
[04:39:06]  to duplicate the logic on the client where optimistic updates or temporary ephemeral state is involved it's a bit cleaner duplicate it on top of itself within the same template oh
[04:39:29]  man i i don't know at a certain point i think i gotta like dig into htmx to understand like okay maybe this memory loss of knowledge surprise a friend and
[04:39:40]  make some sense kind of the full page release the ability to update parts page however uh those are the declared nature of html which is like the loss of confusion when inflation
[04:39:47]  one of the biggest loss of knowledge is the concept of hypermedia it was a source of the connected the basis of the web blah blah blah blah blah hyper engine stores
[04:39:54]  i think i don't know if you really care about rendering half media hmm howl stack yeah i never thought about it he he writes stuff right from here only hope you
[04:40:16]  know they they have like essays yeah yeah yeah yeah yeah huh well that's good i mean i read a lot too so i can appreciate this htmx yeah that's
[04:40:31]  probably like one of those like ways that hmx isn't great blah blah blah yeah code is crap i don't care about your code no building no they don't have
[04:40:42]  control i mean i would care about this if this was an actual thing so closely they claim they've not built up they actually do have a build up that bugs me a lot
[04:41:02]  when people do that but is he talking about in your apps or or literally in the project i don't care about the code in the project it's like the others have
[04:41:13]  suddenly resisted using it it covers all major numbers these for these yeah i don't care about the h2 mexico base enter into new technology okay yeah that's fine
[04:41:41]  i mean when you find a new way to package something old people will like it regardless yeah so that doesn't matter no components you don't need components no front and back
[04:41:51]  end split i mean i don't think anyone's complaining about that i think everyone has no front and back and so it eventually covers you guys i understand he's trying to make
[04:42:01]  a joke which is probably lost on me no jobs no one to hire duplicating logic yeah i mean i guess this is this is no but i mean you could still have
[04:42:30]  an api service as htmx i don't think that matters it won't scale github as an example yeah yeah i mean i think this is really
[04:42:40]  the only legit argument the rest of this is just it's just like uh you know making a bunch of straw man arguments that don't matter um it may not work for small
[04:42:51]  locations but as i have to use a large instrument for a very time to get them that's a problem i think part of those testable no i mean it's not it
[04:42:59] 's not about that scaling yeah you're something yeah yeah i don't really actually i guess some people probably find this funny anyway yeah i don't know i maybe maybe it
[04:43:38] 's not worth my time reading this stuff it seems to serve the logic separate things that would be local state like form field guys i'm hoping that but you should still have
[04:43:59]  js handling for client side state yeah hyper script for that yeah yeah yeah yeah i don't know it i'm not surprised by this evolution as i was saying um i think that
[04:44:12]  um i think that this all kind of makes sense i think i i i marked this tweet because um i thought this was kind of funny because this is this is the guy
[04:44:31]  right htmx guy carson right is that him and and he's like post in typescript inferred types are explosive types carson in an academic intellectual voice
[04:44:41]  i don't use typescript like he wears it like a badge of honor right um i i think i think there's something kind of awesome about it and it's why it
[04:44:53] 's it's compelling for people um yeah i don't think i'm gonna get to this one today i'm gonna finish up on this because this this is actually related to
[04:45:04]  my very last thing which is here when did javascript developers become java developers i don't know if anyone understood what i was getting at here but i'm gonna pull
[04:45:14]  something up that the conversation i had on discord um today and it was in theo's thing but not in any of his private groups i'm not i'm not i'm not
[04:45:24]  uh i'm not impacting his privacy or whatever um um basically um this developer in the channel had said something along the lines that he wasn't able to use solid on a
[04:45:43]  side project because he felt his developer velocity went down because um like chat or not like the ai like copilot um got in his way it wasn't just that it didn't
[04:45:55]  have as good stuff for solid code it literally would just give him the wrong code and he felt that like that drastically impacted his developer velocity because like he's like trying to
[04:46:07]  like write stuff and then he's like it doesn't get the right code and then he's like double checking he couldn't trust the ai it was worse than no ai he
[04:46:13]  just couldn't trust the ai have i seen hyperscript i think i saw a bit of it yeah i mean yeah i yeah i don't know i i i as
[04:46:31]  much as i think like the whole subsection of conversation is kind of like i think it's a it's a i think that's that's whole side of things it's
[04:46:43]  something place where people can like explore but it's like it's it's being restrictive to to almost to prove a point but that's not helpful in fact i will get
[04:46:54]  here yeah it's normal when it's not trained right and it's an it's an interesting observation one that serves to keep react right where it is for reasons i have nothing
[04:47:06]  to do with the technical solution or even the designer vision it makes sense but it also should suggest a disturbing trend towards stagnation i don't just mean solid versus react what about
[04:47:13]  react 2020 versus react 2015. if ai is always playing catch up older versions of the same software will self propagate more rapidly than newer it's basically the definition of a self
[04:47:22] -fulfilling prophecy but what to do about it it's really the latest version of technical depth if you view everything is slowly dying dying from the moment of release and that
[04:47:30]  each layer takes time to spread is ai the end of a chain that starts with core lib third-party lives uh liver libraries stack overflow questions docs training courses hiring tool chains
[04:47:40]  meta frameworks ai or something like that so many moving pieces practically dead on arrival well put i do worry that everything will ossify it is is it was in 2022 pre whenever chat
[04:47:53]  gpt date we choose and that's bad because i really appreciate you and the work you're doing a solid push thing stuff um but for a side project where i'm building
[04:48:00]  sass for pragmatic choice to choose react and that's very sad i don't know what the solution is smarter ai blah blah okay it will get quicker and be able to
[04:48:10]  evaluate its sources better over time and at a certain point the pragmatic choice will look less pragmatic that's what i look to mostly there's a tipping point for every project and develop
[04:48:19]  for comfort can't really do much about what's ingrained um side project plus dashboard i admit are typically pro keywords that i expect were higher percentage of people would give solid a
[04:48:29]  go but ultimately people are attached to their current workflows well mostly a negative thing i thought for a while but this was some benefit because it was pushing alternatives to popular solutions to
[04:48:39]  do better like being a bit better isn't enough you need to demolish it you need to change the way even competitors consider the space in a sense it gives more time for
[04:48:48]  solutions to mature and for sunk costs and existing solutions to get beyond redeeming right you can tell i'm talking about solid here in terms of changing how the whole space looks
[04:48:59]  like um but the the challenge is less displaying suitability or superiority but that incidental tool reliance has pulled people projects who may have once been at the front of the curve
[04:49:09]  further back without realizing it javascript devs on average are becoming java developers gone are the days of the wild west and hacker ninjas rockstar developers instead we debate
[04:49:18]  on the best way to type a function i meant like the whole explicit versus inferred return types you get what i'm getting ai is just the latest in that trend of
[04:49:27]  course there's a recognition recognition of this tool reliance it's why htmx and other perceived low tool systems are trying to enter the space but simple abandonment isn
[04:49:35] 't going to move the dial for long rejecting technology is a loud statement but an impractical one still their success is commendable nothing like throwing someone in ice water to reset
[04:49:44]  expectations but the only way to break the cycle is actually break the cycle i prefer evolution over revolution but here we are anyway and case in point um yeah what does that
[04:50:13]  even mean you may inline javascript for performance reasons since hyberscript's runtime is more focused on flexibility than performance you how can a special programming language be more flexible
[04:50:26]  than a general programming language that doesn't make any sense um anyways that that was the the conversation that led me to it because i know not everyone understood what i was doing
[04:50:39]  with this tweet it's fine it was intentionally cryptic and some of the responses were people understanding were great was it after java developers became javascript developers you could kind
[04:50:48]  of joke that that's like when typescript showed up was when the dotnet developers became javascript developers so this is actually fairly poignant when they started building entire
[04:50:59]  applications with it instead of using it as a scripting language that's also a fair response i blame typescript but yeah i i don't know there's so many examples of
[04:51:14]  it right um what i have here yet inferred versus explicit return types no one got fired for choosing react like isn't that like an ibm statement why are javas
[04:51:24] cript devs the guys who view the source and hack them things for what they do quoting ibm oh that's funny the the the my sub i i i ratioed
[04:51:39]  myself that's what i'm like why do i have like 56 like 57 tweets like here i ratioed myself uh oh okay well i guess this was the real tweet that
[04:52:02]  people were looking for i think on stream going like why are people yeah anyway i blame framework authors yeah i mean maybe we are for to blame for this it's just like
[04:52:34]  yeah i mean it's so crazy i think that because of the classic notion we're talking about how different communities have different perspectives right we're talking about how javascript
[04:52:51]  community has always been you know kind of like view the source i think that heritage is also why in an attempt to be like i'm growing up now people are like just overly
[04:53:04]  like on the other side of things i like i i get i i i get it i like i get this a lot of people are saying yes to this whole thing are
[04:53:18]  also probably like on maybe slightly more on the htmx side of the of the spectrum right frameworks are the heavy thing in the building like i get where that tension is
[04:53:28]  it's just like like it's like it's so crazy how i mean this isn't the wrong time to say this because the economy and stuff but like you know risk
[04:53:43]  is a real thing it's just crazy given javascript's origin how risk intolerant almost like it were overcompensating um that where things have gone to these these
[04:53:54]  days i don't know we're still building websites right like that hasn't changed i claim bower so yeah i don't know i i think i think it's
[04:54:16]  it's interesting i we we this we did a stream today about compilers and about basically taking control of all js with more build tools and like you know crazy compiled signals
[04:54:34]  just to get that perfect little syntax and then on the opposite end we have people literally crying out that the whole thing is garbage you know um it's funny because on one
[04:54:49]  side it's never been easier to uh build with these tools you just pick up beat and you're like off the races you pick up astro god astro is great like
[04:55:00]  when you consider like how you can just like build a full stack app you don't have the double templating problem you just build it right you can put your alpine
[04:55:11]  or data star you know in your astro apps or whatever maybe data star not like but because it's got its own htmx thing you probably can like it's
[04:55:28]  sorry lost my flow there but like yeah i lost it i don't know it's it's it we live in a funny time where there's like temptation to get pulled
[04:55:48]  really hard either way and being in the middle seems like kind of almost the worst place to be but it's also maybe the only sane place to be you know i don't
[04:56:01]  like compromise so to speak but like you need the target that you're working towards what what's going to have the the right balance of these elements um you know maybe there
[04:56:19] 's clever unoptimal solutions that just work like the last stream when we did the astro stuff and we basically had something very like we just did you uh pay uh view
[04:56:29]  page transition type stuff we had shared global state with signals and everything just worked i know it's less optimal the way it works but it's dirt simple right maybe that's
[04:56:40]  the right level of trade-off you know but it's still build step i'm not sure astros anyway i am done for today i did end up going the full
[04:57:00]  five hours so what what do i know i don't know if i'm streaming next week i may be but the following week i will not be and uh and i yeah
[04:57:12]  i might be i might be absent from stream for a little bit um for a couple weeks um so just uh just letting you guys know heads up i don't think there's
[04:57:24]  anything else though for today so thank you all for joining me on my short stream yeah good one and uh hope you all have a great weekend See ya.