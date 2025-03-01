---
showLink: "https://www.youtube.com/watch?v=gT5NWKZZPQM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring Qwik, the Resumable Framework"
description: ""
publishDate: "2022-02-12"
coverImage: "https://i.ytimg.com/vi/gT5NWKZZPQM/sddefault.jpg?v=6206bbcf"
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

[00:00:00]  Hey, everyone. Welcome to my stream tonight. Sorry I'm a moment late. We're going to be talking about QUIC today, which is a really unique framework
[00:00:20] . It's part of, I'd say, a series of what I've been looking at the last few weeks. I've been really kind of digging into some of
[00:00:29]  the more interesting takes around in terms of how we can accomplish one of the biggest challenges that we face right now with modern JavaScript frameworks. And that is to send less JavaScript.
[00:00:43]  And there's a lot of different ways to attack this problem. So I want to look at it because the interesting thing that they all have in common is these are distinct
[00:00:56]  approaches. I'm talking about Marco react server components and QUIC here that all believe, obviously, that their way is the right way and that they have to give up some
[00:01:08]  special trade offs in order to accomplish this. But it's necessary. And they all kind of accomplish similar things in slightly different ways. And I'm trying to see if
[00:01:20]  there's something we can kind of learn from that. And QUIC's been kind of the one, you know, one of the newer ones that I haven't been
[00:01:28]  able to dig in deeply to until recently. And Misko Hevery, the creator of QUIC and, you know, might know him as the, you know, father
[00:01:38]  of Angular. He approached me a couple of weeks ago and he's like, hey, Ryan, you know, I enjoy your, a lot of your articles, you
[00:01:45]  know, on like hydration and general topics. Why don't you take a look at QUIC, tell me, you know, tell me what you think, you know,
[00:01:51]  and I've been dabbling in it, you know, since I first saw it. But it gave me the push to finally spend some time and build some stuff and
[00:01:57]  play around with it. And it seems it's perfect timing, right, for the stream for us to take a look at it here. Yeah, so everyone in the
[00:02:06]  chat, I see you guys are kind of filtering in. Hey, hello, how's it going? Yeah. So, yeah, it's an interesting one, right?
[00:02:20]  Because this is, this is a, this is a unique take. So let's let, before we get into it, we start every stream with a segment called this week
[00:02:33]  in JavaScript. And I got to admit, this week has been a little bit more quiet for me. I mean, I wasn't involved in the big iOS, you
[00:02:41]  know, hogging all the browser, whatever garbage that was going on this week that didn't really catch my eye. So, you know, it's been, it
[00:02:49] 's been a quiet week, but it's been also been a really inspiring week for me because I got to have some of the most interesting conversations that I've had on the
[00:03:00]  subject matter in, in ages, honestly. Between, I was already telling you all that I've been talking to MISCO a ton recently. It kind of started
[00:03:10]  from my last article. And we can look at that when we talk about resumable hydration. And, but even beyond that, great conversations with the Marco team.
[00:03:22]  We're, we're just wrapping up. I call it the pre-alpha, but our pre-alpha demo kind of milestone for Marco 6. The first
[00:03:30]  time we have a full app compiling from the tags API all the way to Marco 6 runtime. That's with all the code splitting and weirdness. You know, we
[00:03:39] 're not talking server hydration or anything yet, but, you know, enough to throw together to do MVC or JS framework benchmark. And that's all coming together this week
[00:03:46] . And, you know, it's been really inspiring. And I finally got the chance to sit down with Dan Abramoff and pick his brain about the future of
[00:03:53]  React. So really, really fun week in terms of the conversations, but a little bit less, a little, a little bit less going on in terms of, you know
[00:04:06] , the JavaScript world for me. I think, I think the only couple of things that came up for me this week that I really noted was obviously another comparison where people were
[00:04:18]  talking about. Some optimization technique that you can use in React and, you know, I, I piled on a little bit, but, you know, someone pointed
[00:04:26]  out like, Hey, with solid, you don't, you can write them either way and they do the same thing. Right. So, you know, that's always
[00:04:34]  fun, but actually probably the most interesting take was, um, you had cats, uh, co-creator of Ember. Um, he, he, he
[00:04:44]  was, he, he said that his hot take was react does an excellent job of clearly identifying the problems that it solves in extremely confusing ways or doesn't solve at all.
[00:04:54]  Basically they're very transparent about their shortcomings and they document it really well. And I think that's really accurate. That's part of the reason that I like and
[00:05:05]  respect react and the react team so much. Um, this, this isn't crazy thought to have, but you know, they, they, they're very clear about the
[00:05:16]  hook rules. Like the last thing they want is for you to kind of fall into a pattern where, um, you know, some unknown prevents you from doing what you
[00:05:27]  need to do. I, what I mentioned actually is it's rarely the known constraints to prevent you from accomplishing your goals. It's actually the unknown ones that can have
[00:05:34]  catastrophic effects. Uh, effects like if you know that, Hey, there's a rule that you have to follow, but you get, you know, all the good
[00:05:41]  trade-offs. You just follow the rule. And even if it's a little ergonomic clunky, you, you get what you need done. It's when you
[00:05:48]  don't know the rule that things, uh, you know, slide out of control. But honestly, the most interesting thing about this thread was something that happened part way
[00:05:56]  down. I'm not going to chase it to find it, but it came, what came up with that conversation again about why react uses class name over class. And,
[00:06:06]  and I, I, some, someone in the, in the thread, I forget who it was. Someone answered and was like, oh, it's, it's because
[00:06:15] , you know, obviously it's, it's because you can't use class, you know, it's a reserved keyword. But I mean, we're using class
[00:06:24]  and solid. You can use class and preact. I mean, it's, it's basically, you can, you can, you can make an object dot class.
[00:06:33]  And since props are objects, this is not really a blocker. What, what is though, and maybe the mindset is react was originally treating all the props as props as
[00:06:44]  properties. And they, then they followed the property naming instead of the attribute naming. And I guess for me, this was perhaps a relatively obvious point. Cause in solid
[00:06:56] , we actually used to always set the props instead of attributes. When you just put a random prop on the JSX, you did props by default and the attributes way simpler
[00:07:03] . And it's way more performant for most things, but ultimately we ended up going to attributes because props have a bunch of edge cases around them. And attributes actually
[00:07:14]  handle more situations better per se. And it's more natural to the way people use HTML. So I did actually switch stage to attributes afterwards, but it is, it is
[00:07:24]  an interesting sort of history lesson or thought that, you know, that, that naming is consistent that way. And as I said, someone who's played with JSX
[00:07:33]  and I think about it much, but a number of people in the thread, they're like, like, it just never occurred to them. And it's kind of funny
[00:07:39]  or interesting how the same sort of stories and reasonings propagate around through the community for years. Um, and maybe like how much truth is in them. I don't
[00:07:50]  know. It just, it was, it was one of those really interesting moments for me this week. Uh, what are you guys saying in chat? Anything fun here?
[00:07:59]  Um, unrelated question. What's your opinion on B versus next? Which is better. I mean, SWC is going to have better, like, it's hard to
[00:08:12]  say. ES build, which is underneath feed is really, really, really, really fast. SWC has an AST parser, which makes it more attractive to
[00:08:18]  people doing custom things. I, the thing with beat is they've just put together a really nice usable package. I think it's kind of speaks for itself. SWC
[00:08:29]  is incredibly powerful. Um, next is great at DX. So I'm sure some great things are happening there, but I mean, the, just sort of took off.
[00:08:38]  And the important thing is it wasn't about end user adoption. You know, from that perspective, beat and parcel could have been neighbors. It's at the framework authors
[00:08:46] . It came at the right time that the framework authors kind of jumped on it for the meta frameworks. And I mean, obviously I'm involved in a couple of those being
[00:08:53]  Marco and solid building their stuff on beat, but felt kit. It just, it just, it was just the right tool at the right time. And it's just kind
[00:08:58]  of blown up from there. So, I mean, I, I would love to write solids battle plugin and SWC instead, you know, write it in rust.
[00:09:07]  But generally speaking, you know, just where it is in terms of adoption and people being able to use it. Vita is way ahead. Even if SWC might be
[00:09:18]  more compelling ultimately. Okay. So yeah. Yeah. I mean, it's a hard documentation task to be fair. Like there's always shortcomings. I, I
[00:09:27]  react is one of the better ones on this stuff might not be one of the better ones on this side of things. So I try my best with solid, but a
[00:09:37]  lot of times when you're a smaller framework and you have less resources working on it, it's more of an accident of omission rather than like any intentional gap. Some
[00:09:50]  other frameworks are almost misleading, but I, I, I, of the big three, I don't think any, or four, I don't think it's, it
[00:09:59] 's, it's the case. I think you find that a lot with, you know, the hungrier frameworks that are kind of like, you know, five,
[00:10:05]  six, seven, eight, you know, range who, who just want to kind of get some wins, get people in there to check it out without necessarily being honest on
[00:10:14]  it to a certain degree. But I, I don't think that's terrible. I think it's usually just, you kind of. Consciously you're like,
[00:10:21]  oh man, I don't really want to talk about this. And then you may end up just maybe not documenting it, but as it will always catch up with you.
[00:10:28]  So anyway, yeah, this makes a lot of sense. See it's when you, if you're comparing like SWC to ES build, I I'm not gonna
[00:10:43]  lie. I was not excited about ES build. I looked at it and I was like, okay. Yeah. So it does the one specific thing really well. This is
[00:10:49]  not a replacement for Babel, you know, and then, you know, kind of bugged them and, you know, went to Evan and was like, can we
[00:10:55]  do plugins? And like, oh yeah, I can kind of do plugins, but it, it wasn't like AST. It wasn't the same thing. So
[00:11:00]  I just, I don't even view those pieces as competitors. Um, beat kind of just makes whatever it can work. Right. It's kind of got like sandwich roll
[00:11:08]  up on top of ES build and underneath it's a bit of a mess, but it all kind of just works nicely. And that's all you need it for V,
[00:11:15]  V one, maybe V two. And I'm confident that they're going to clean stuff up and it's going to be really nice in the future. I mean,
[00:11:21]  there's enough investment in it now. Um, it's, it's one of those examples of, you know, like, you know, what's it build, build
[00:11:29]  it fast, build, or build it, build it, build it fast, build it good kind of, kind of thing. It, it, it really captured the,
[00:11:35]  what they wanted it to. And it's, it's out there now and people are using it. So they'll just make it better. Oh, right. So
[00:11:42]  where, where are we, where are we at? Um, yeah. So, yeah, I mean, like, honestly, what, what else, what else happened?
[00:11:49]  Um, I mean, I, I got a chuckle over this one. I've, I've never seen this syntax. Check this out. Is, is this felt
[00:11:58]  at const? Honestly, I thought I was looking at some weird version of Marco's tags API or something and it had the at signs and stuff. I mean, I
[00:12:08]  can see the power of this and the co-location thing. I just, this was not the last thing I expected from Svelte. Like the, a lot
[00:12:17]  of people who are in the Svelte camp are so adamant about how it's just JavaScript and HTML that, that, you know, adding powerful syntaxes like this
[00:12:27] , I thought was off the table. I mean, even people, Rich has credited the success of Svelte is not kind of pushing the syntax too much. You
[00:12:37]  know, um, maybe they're a little bit more pushy on the templating side, but it's just interesting to me because honestly, when I see stuff like this
[00:12:43] , it gives me hope that people, you know, people are excited about this. Um, then, you know, they should be excited about Marco. Marco because Marco
[00:12:49]  syntax enables incredibly powerful things as we've talked about in previous streams. Um, so yeah, anyway, um, yeah, uh, I, I think, I think the
[00:13:03]  only other thing for me was, and this kind of ties into what we're talking about today was, um, my article, why efficient, uh, hydration JavaScript frameworks.
[00:13:13]  So challenging, I didn't retweet it, but it's, uh, it got featured as the top seven article on dev too, which is, it's cool
[00:13:18] . I I've only had that happened three times in the last couple of years to, to, to three years to actually, um, I guess not quite three years at
[00:13:27] , um, so really cool to see this article getting recognized. I think it's really good that everyone read it. Incidentally, this is two weeks in a row for
[00:13:35]  that. My last article, the one I released the week before also got featured, which is crazy. Um, the, the, uh, the last two articles,
[00:13:43]  I guess are pretty timely and important and that kind of ties into today into my conversation today, because. A lot of what we're talking about today. Kind of spun out
[00:13:52]  partially from a conversation that I hadn't witnessed go, um, in the chat on this very article. So yeah. Yeah. All right. Let's, let's
[00:14:02]  kind of switch gears here for a minute, then I think we are done with this week in JavaScript. Um, so, uh, let's, let's, let's
[00:14:12]  try. Let's talk about, um, quick, right. Let's, let's make the transition and I'm going to just throw it right out there. This
[00:14:19]  is, this is going to be probably the first question for a bunch of you, because I made it, I put it right in the stream title. I called quick the
[00:14:26]  resumable framework. What the hell do I mean by that? Well, quick is a JavaScript framework. It uses JSX. It kind of looks like react in
[00:14:42]  the way that solid looks like react. It's not the same, but you know, you, you squint, you kind of see the same sort of stuff, but
[00:14:52]  quick is very different in that. Like Marco, it is been built from the ground up with this kind of concept that we don't want to send all the JavaScript. That
[00:15:01] 's, that's the goal. We want to be able to. Load our apps. And not take that hit. I mean, quick was built for e-commerce
[00:15:10]  the same way that Marco is built for e-commerce. The, the focus here is that initial cost, not just the rendering costs, but the initial cost of hydration,
[00:15:20]  the time to interactive loading all that JavaScript, loading all those scripts, getting all that going actually affects your bottom line. Your, you know, it, it affects sales.
[00:15:31]  It affects, it affects the, it's been shown to affect like how many items go in people's cart. Like there's a bunch of data for years on this
[00:15:39]  stuff. And you, you just have to look it up. Um, and you, you will find tons of examples that obviously a lot of companies only share some of
[00:15:49]  their information. Um, eBay obviously, uh, had a study, I think a couple of years ago where they're showing that like, I mean, it wasn't a
[00:15:58]  big thing, but like every hundred milliseconds increase the number of items in cart by 0.5. So I guess every 200 milliseconds with an extra item in cart or something
[00:16:06] , it made, it made a, it made a, it made a relatively, you know, you know, you can, you can argue about, you know, how
[00:16:14]  much that impact actually is, but it's been, it's been shown consistently across the industry. That there's a direct correlation between the kind of responsiveness and loading
[00:16:24]  of a website and this, the sell through rate. So this SEO stuff matters and even matters even more now because Google is using it to rank the actual search results listing.
[00:16:34]  So there's a lot of people who are, you know, starting to feel the pain of that, especially as their sites get larger. And the truth of the matter
[00:16:43]  is, and we've kind of talked about this a bit before is it's not, this is not just like a feature you just add. You're just like, Oh
[00:16:53]  yeah. I was thinking, you know, I, my, my, my react app or meta framework or whatever is a little slow today. Let's just add some partial
[00:17:01]  hydration in there or add some, let's this, you know, it doesn't really work like this because it's an architectural thing. And I've been hinting
[00:17:11]  at it in my recent articles, but I mean, it's, it's, it's, it's, this is a different take than, than Marco. And I
[00:17:20]  haven't practiced explaining this to people. So we're going to give it a go. I got a Scala draw ready. I got a playground where I can dump in
[00:17:26]  some code and let's just talk about what, what I mean by resumable for a minute. I'm going to use solid as an example so that I can show
[00:17:34]  code that people here might be familiar with, but we've all seen. We we've all seen the silly counter. Right. Counter click the button, but I've
[00:17:43]  added a couple of things in here. And essentially what I added in here was I added a memo for double count. And then I'm using that double count to create effect
[00:17:53]  that writes the document title. So essentially whenever the count changes, it affects double count. And then it updates the document title when, when you, when, when I
[00:18:02]  do this as well. And we're not seeing this right now because the way the playground works, but essentially. I wanted to throw a few different primitives in here
[00:18:09]  just for people to kind of mentally understand the difference between say react or solid and what quick is doing. Um, because here's the thing. Now pretend this counter has been
[00:18:22]  rendered on the server. Okay. We have, you know, a button. It has a count in it. In our case, you know, you can't click
[00:18:32]  the button on the server. So it's going to, it's going to have a one or whatever. My initial value is going to be in, in there.
[00:18:39]  But when the page first loads, we will have rendered this button with a one in it. Right. Regardless. So the question is what code of my component here actually needs
[00:18:56]  to be ready and in the browser at that point in order for our app to be able to have the correct, the correct behavior. Right. That's the first question
[00:19:09]  you should be asking yourself. And the truth, we only need a couple things. If you think about it. Right. We need a click handler. I mean, we
[00:19:18]  need to be able to click it and have the number update. Right. And we need a second thing in this example. And I don't know if quick has gotten into
[00:19:29]  it, but I'm just teaching the general concepts here. I know this is on their roadmap. If this document tells like, as you, as people know for most
[00:19:36]  frameworks effects don't run on the server. They can't. So you like generally you can't like do something like add a jQuery plugin. Like you have some
[00:19:43]  client side only code, like updating this document title. This also technically needs to run initially because otherwise the title won't be the right title or the side effect won't happen
[00:19:56] . So you have client only render code, like you have an effects and you have, you need to have, you know, some click handler. These two things need
[00:20:06]  to exist at the time of hydration. But technically most other stuff here in, in, in our ideal world would not need to exist here. Like when you, when
[00:20:19]  you load it and truth matters, we probably, we might not even need to load the code for the click handler because you know, the click handler. I mean increment
[00:20:30]  here, it closes over a sec count, which pulls in the state like there is, there is some other code that comes by having this click handler here. So the concept
[00:20:42]  with quick is it knows from its compiler that there's a click handler here. It doesn't need to necessarily know what the click handler does. And as I said,
[00:20:54]  I don't think the effect thing is there yet. So that's something that's coming, but essentially if we just go and attach some kind of, you know, click
[00:21:05]  handler, maybe a global click handler that knows where all the clicks are, you know, serialize this like location into the, this button element in the DOM, then we
[00:21:15]  don't need to run any of this code initially. And when we click our button at that point, we can load the code that we need that. And the,
[00:21:25]  in a sense, this is one piece of being reasonable. Let's not the whole story, but this is the starting point, right? Because once, once you kind of
[00:21:36]  split out your component into these pieces, in a sense, it does just pick up where the server left off. It's a little bit more complicated than this. And
[00:21:48]  this is why I put a bunch of these, these other things in here, because I mean, obviously, if you have like a VDOM library, you know,
[00:21:55]  like react or something, or, you know, at that point, you would be rerunning the component over again and doing all this work. And one of the cool
[00:22:06]  things with the reactive system is if you know, if you can serialize these values from the server, then when you hit them, you don't need to run them again
[00:22:16]  in the browser. And you can just kind of pick up where you left off. And that's kind of where quick's heading with this as well. But essentially
[00:22:24]  the whole idea here is initially you just set up some click handlers or handlers where you interact with the DOM. And then once you interact with them, then the rest
[00:22:35]  of the code comes as needed. And there's a, I'm going to pull up the article where MISCO kind of highlights what the, what the different pieces
[00:22:44]  are, but essentially in contrast, a typical framework. And this includes solid and svelte and react, they, they, they, they run once, you know
[00:22:53] , they, they run over this. They might not, you know, do a ton here, but like in solids case, when we hydrate, we go, Oh
[00:23:03] , okay. Here's the counter set up the state set up the initial, you know, set up this, um, double count, hook up the increment counter, run
[00:23:11]  the effect. You have to do that anyways, and then sure we, we won't like re insert stuff in the DOM necessarily, but everything we, we wire up
[00:23:19]  everything. If anyone who's seen solid, you know, that there's effects are essentially the way we render the DOM. Um, I'm not going to get into that
[00:23:27]  right now, but essentially we run everything once and just kind of get all preset so that when we do the next change, it's all wired up. But as I
[00:23:36]  said, Quik's whole thing, and it achieves it through a number of ways is that it doesn't run that. Essentially it only runs exactly what is needed when
[00:23:46] , as it hydrates and it does it all lazily. So instead of starting top down, um, it, it actually just works off interaction. Yeah, uh
[00:23:56] , the, in the DOM thing is, uh, can be a little bit misleading and we'll, we'll look at that in a minute. There is stuff, information
[00:24:07]  like the event handlers that are serialized in the DOM, but the actual data itself, I made a kind of a stink about this a few months ago. Cause
[00:24:14]  I was just like, kind of downplaying and it turns out quick, actually misco confirmed does work the way that I would, they changed it the work the way that
[00:24:22]  I would think it should work in that. Like the, the, the, the, the hooks, the pieces that they need to hook into are in the DOM, but
[00:24:30]  then they, they pull the data out into like, you know, the typical serialization format, like where they can dedupe it and do, do all that kind
[00:24:36]  of stuff. Um, so yeah, it's tricky. I mean, that's an interesting question. We'll get to that. I actually, today we're going
[00:24:55]  to look at an example that a client rendered quick app. It took me a little bit of work and misco helped me put it together, but we'll, we will
[00:25:01] , we will take a look at that in a little bit. It did take me a little, it did take us a little work. I talked to the team,
[00:25:08]  we figured it out. So, um, it is definitely doable, but yeah, the, the, the whole point here is, and I want to emphasize this. If
[00:25:15]  you build a single page app and you build, or sorry, you build a single page framework and you build it that way, you can optimize that. Like solid was optimized
[00:25:22]  for the single page case. It's one of the most optimal thing. You can tell every piece of its design was optimized for that. Obviously I've done a lot
[00:25:30]  of work on server rendering and bridging the gap on that, but you can make completely different assumptions. If you can assume that the servers are always there. And that's
[00:25:37]  why Marco and quick are differently designed. They assumed that the server was always there right from the beginning. Um, which completely changes the kind of assumptions you can make.
[00:25:48]  It, it, it, it can drastically change the design of your framework. So, yeah, I mean, it's a funny comment. I, I, I,
[00:25:57]  you can kind of go either, either way on that. Like, as in, you know, I'm big on things that are built for, for special, for,
[00:26:05]  for purpose, so to speak. So anyways, kind of popping over here a bit is cause I, I highlighted out of order hydration, which is part of the equation
[00:26:16]  here in my last article where I'm basically mentioned that the part of the big secret or trick to quick is because. of some rules they, they, they, they
[00:26:27]  set, uh, in terms of how projections work, like passing children in, they, they eagerly evaluate, you know, how solid uses all this control throws through components
[00:26:35] . Like with quick, you don't, you don't do that kind of pattern. It, it wouldn't, it wouldn't work, but like, like because of
[00:26:44]  the, you know, and actually most frameworks don't work this way, which is part of the thing, but because of these sort of restrictions, uh, quick puts in
[00:26:54] . Um, you essentially have this ability and because of serialization, I was just talking about the intermediate data, you have this ability to hydrate a component down in
[00:27:04]  the middle of the page without hydrating a parent component. And I mean, it shouldn't be hard to see the, if you think about it, the problem is if
[00:27:11]  you top down render and everything's kind of tied together with closures and event handlers and props that run through your whole tree and context and all that. And then
[00:27:18]  you click a button down in the middle of your page. Like, even if you do the, like, oh, I'm not gonna, I'm just gonna attach the
[00:27:25]  event listeners and not lazy and lazy load everything. You're not winning. Like you, you, you press it and then suddenly you freaking load the whole page and you just
[00:27:33]  pushed the whole cost on your end user of hydrating the whole app. I wouldn't be surprised if some frameworks or some, I can't see anyone from an actual
[00:27:42]  framework doing it, but like, I can see someone from like a, maybe a meta framework or some kind of like, like hot new, you know, library that come
[00:27:52]  out with this technique of just attaching the event handlers and then hydrating the whole app. Because guess what you will get really nice lighthouse scores, but your app will
[00:28:00]  suck. You know, like lazy loading, it takes more than just making a spa and then lazy loading the whole thing when you click a button, because like you're just
[00:28:12]  pushing the cost off. Like if it's happening while the page is loading. Yeah. It sucks. There's input delay. It's sluggish. You try
[00:28:20]  and scroll. You can feel it. There's a lot of bad things about that. But if you push it off to when someone clicks a button to load the whole app
[00:28:28] , you're just guaranteeing that you're, you're gonna make them wait. So, um, I, I, I, it's important to understand that the part
[00:28:35]  of the equation here is out of order, um, hydration, the sway breaking out. And what actually Miskos says, he's, he's like the secret
[00:28:43]  to resume ability is, is that there's these five things. And I think he's gonna write an article about this coming up soon. Uh, I went a little too
[00:28:50]  far, but I, I just wanna highlight these five things. So everyone can kind of see what, what, what this is. Right. First, most obvious questions.
[00:28:59]  How do you serialize listeners? If you can't do that, then you have to rehydrate essentially. So we just talked about that. You need the ability to
[00:29:04]  add the event listeners, right? How do you render components out of order? If you can't do that, then you'll be forced to render the parents and the
[00:29:10]  children. Right. Which is what I talked about in this, in my article. Then you need to know which component is invalidated on state changes. If you can't
[00:29:17]  do that, you'll be forced to re-render the whole app. So everyone on my stream should be pretty familiar with this. If you wanna invalidate on state changes
[00:29:24] , um, there's a, there's a, there's a bunch of different ways of doing it. But one of the easiest ways to do it that doesn't
[00:29:30]  require top down orchestration is reactivity. So, you know, uh, that, that's another piece of the puzzle, have a way to watch data without running the
[00:29:41]  code. Um, so this is the whole idea of the use effects in the memo. So this is still talking about reactivity, but essentially if you can piecewise
[00:29:49]  the, the, the reactivity and have a way of knowing the dependencies at hydration time. Um, then you don't need to rerun it. Um, and then
[00:29:57]  finally have a way to deal with data that's not serializable. This is a hard problem. This is the area that quicks getting into. And honestly, with
[00:30:05] , with on Marco six, this is also exactly like on the design part. This is the, the kind of last piece we have idea, but this is where a lot
[00:30:12]  of our more theoretical work is happening right now on number five. Cause I haven't talked about this much because I don't wanna reveal it ahead of time, but Marco six
[00:30:19]  is also a resumable, uh, framework, like, like quick essentially. So I wanted, um, this list is a great list. I think it actually
[00:30:28]  does cover the things you actually need to achieve this. And, um, as I said, there's different ways to get there. And I think that's what I'm
[00:30:35]  most interested on quick. I, I hope, I hope these explanations are somewhat making sense. I know it's a little vague. We might have to just tear into the
[00:30:43]  code to take a look and understand what's, what's happening here a bit, but you know, see it in action. But the, this idea is essentially if we
[00:30:51]  can break stuff apart effectively enough. And attach some basic click handlers or basic interaction points, then we should be able to load the JavaScript. As we need it.
[00:31:05]  As I said, and we we've covered react server components and Marco, and you can already see a huge difference here. Um, and this section here talking about res
[00:31:15] umability and that is that, I mean, react server components aren't concerned with resumability. Let's so I'm going to take that off. But the difference
[00:31:24]  with this approach is in react, you go dot server dot client. You're very explicit and astros like this too. You kind of set up your islands and it
[00:31:34] 's like, it's kind of coarse green. It's not granular. And you just kind of know you very explicit because if it was granular, it'd be impossible for
[00:31:42]  an end user to write it. It'd be very difficult. Right. Um, so you just kind of, you just kind of in wide sweeps, tell the framework
[00:31:50]  how to split stuff up and you go, okay, server stuff doesn't go to the server. The client stuff stays in the column. Right. In Marco, um
[00:31:58] , Marco four or five compiler kind of automates for you, but it's kind of the same as server components. Marco six actually goes super ultra granular in a, but
[00:32:07]  in a, in a different way than quick. It slices at the other direction a little bit and it helps. So the end user doesn't have to worry about it,
[00:32:16]  but it still uses the knowledge of what stateful to kind of split it up. So quick on the other hand has no idea of what server or client. So it
[00:32:23]  doesn't use that heuristic or decision to decide what gets shipped to the, to the browser. And what's interesting about that is a pure lazy loaded approach means that
[00:32:36]  you could apply this to the most interactive app you've ever seen where every cell is a super interactive thing. And still achieve some sort of partial hydration, whereas with react
[00:32:49]  or Marco, um, even though you can obviously say lazy load this or whatever explicitly. Um, it's still like it's decisions on what code gets shipped are based on
[00:33:00]  what server and what's client essentially. So it's, it's, it's, it's different. And this is why it's interesting, right? Cause in
[00:33:08]  one way, um, you know, Marco's is trying really hard to see how it can maximize the use of knowledge in terms of the compiler and the analysis to, to
[00:33:19]  be able to achieve similar things. And quick is saying is kind of like, we're going to make something work even without that knowledge. Um, and those come with different
[00:33:29]  set of trade-offs. So I think it's, I think this is why I'm so interested to take a look at this. Yeah, this is, this
[00:33:36]  is, this was from a few minutes ago, but it's a good point. Okay. You know, it doesn't necessarily have to be like having a backend there.
[00:33:51]  You just need to have some pre-rendered HTML. Okay. So hopefully you all are still with me. Let's, let's, let's continue. Um
[00:33:58] , let's, let's go to our next thing. I want to, I think the first thing we're going to do here is we're going to just pull down
[00:34:06]  their to do MVC. I think everyone's gonna see it, but they updated it. I think this week, just to VIT, which threw me off a second
[00:34:11] , but I can, I can, it helps me kind of see the, the evolution of the framework. And this is something that's fun. Like I'm,
[00:34:18]  I'm just saying this upfront here. This, this, they're still rapidly, rapidly, um, adding stuff right now. Like the API has actually changed between me doing
[00:34:29]  one of my demos that I was working on and downloading this latest one. Like they literally changed the names of APIs. Like, I think, um, where is it
[00:34:41] ? Yeah. This used to be used store. Now it's create store. Um, which I'll say I love. Cause I, I, I think there's another
[00:34:48]  framework that uses create store. Um, so, um, you know, it's a good nod. Um, but let let's, let's look at this hacker news
[00:34:57]  example. Um, it looks like a bunch of components in a components folder. Let me blow this up a bit so we can see here. And then, yeah,
[00:35:07]  let's, let's look at the anatomy of this project and then we'll, we'll run it. Um, so I actually haven't, you know, let's
[00:35:14] , let's MPM install while we're talking. So we don't waste time because I honestly, this is the only demo. I haven't even tried yet.
[00:35:21]  I just pulled it down. So let's hope it works. Um, essentially this looks like a beat app. There's an index HTML where, um, there's some
[00:35:28]  beat specific stuff in here. And then there's an entry server, which. Yeah, render a string. And then it's, it's rendered from the HTML completely.
[00:35:43]  And it looks like we have an app entry point and we have quick loader. And this is like their script that does all the magic, um, to, to
[00:35:50]  my knowledge. And then on, yeah. And then it just, it looks like these are some to do's that are essentially preset that gets passed into the app. So
[00:36:01]  then, uh, yeah. So this is full isomer with server rendering and we have a state file. This looks like the, yeah. Okay. So this is like
[00:36:08]  the store. It's got like all the, the methods, like the filters for the to do's and all this stuff. Okay. Um, some of you who
[00:36:15] 've looked at quick have probably already looked at this example, but this is slightly updated. It looks like they've kind of broken into more normal looking kind of pattern here.
[00:36:25]  So we saw the entry point was app. So there is some stuff here that I don't know exactly. Like I've never seen with styles before, but styles or
[00:36:33]  app CSS. So this, this is problem. If you notice in quick, every place is a dollar sign. It's kind of like an injection point. And we
[00:36:41] 'll probably look at that in a little bit, but I believe every time there's a dollar sign, the compiler kind of breaks that up into its own sort of fragment that
[00:36:49]  can be lazy loaded independently. So we have the component and then we have with styles and then we have a render that wraps the return JSX essentially. Um, so
[00:37:01]  I think this is the anatomy of a pretty standard component, right? Um, where we're essentially you denote a component this way, and then you separate the rendering from the
[00:37:12]  logic. And I, I believe this helps, um, them split the components into three ways, right? Cause we already look at it. There's the events,
[00:37:18]  there's the component code, and then there's the view code of the render body. So having these hints helps the compiler, um, see essentially how to split things up
[00:37:29]  is my understanding. So yeah, this is a to-do app. We have header main footer and the header of the to-do app does all the work.
[00:37:37]  That's in to-do MVC exactly. It's our input. It's our input. So this is a good example. We see the initializing state.
[00:37:45]  So the state, I believe is a proxy object, um, that immutable proxy. So it's like create mutable and solid essentially where you have an object forms,
[00:37:54]  right? Because of being a proxy, I'm, I'm assuming you can't just have, it's not like you state in, in, uh, in react.
[00:38:01]  Like you can't just have like a single value every you, you always pass an object and then, you know, you access the property on the object. Um,
[00:38:08]  interesting here, I guess I'm not sure what this is for, but I, this is part of the pattern here where, um, you kind of denote a name for
[00:38:17]  the component. Um, it's probably to help generate the URLs, um, for the lazy loading. And then this component actually doesn't have the dollar sign on it
[00:38:24] . The dollar sign has been transcended to here and then here. Yeah. So the, the important one here, I think is the click handler because, you know,
[00:38:35]  so the dollar sign on it, and this is kind of a giveaway, but, um, on key up. Yeah, see, you can, this is, this
[00:38:42]  is interesting, right? You notice how the event isn't getting passed in through the closure and they're using like a hook for it. It's sort of injecting it
[00:38:51] . This is all tricks so that these can kind of be wired up independently. So they have explicit ways to pull these things in. Yeah. So use event. This
[00:39:01]  is how they get the event in and then get, grab the value off the input. So update the state, um, with the new value. And then if the
[00:39:12]  key is enter, add the item and clear the value. Okay. So this is just your, like, when you're in the to do and, uh, and you
[00:39:22] 're entering the new to do. Okay. You know what? Let's just run this and see what it does. Right. Um, I'm trying to remember. Let
[00:39:29] 's fold the read me here. NPM install. NPM run dev. NPM run. Okay. So let's NPM run dev. Awesome. Localhost
[00:39:37]  3000. Feel free, by the way, you, you all in chat to ask any questions as we go here. Cause, um, definitely helped me direct the, what
[00:39:52]  we're looking at here. Um, but this, this is the, this is the sort of classic example. I can tell the styling looks are familiar. I don't
[00:40:00]  know where the actual header is. It's actually not here, but I, this, this looks like a classic to do MVC. Let me see here. So
[00:40:06]  first thing, you know, this is what you want to test. When you go in quick, you open the page and we're in dev mode. So this is
[00:40:14]  probably not going to be exactly fair. Cause we're yeah. Dev mode is not going to give us the quick experience because of, um, because of the, uh,
[00:40:24]  what do you call it? Um, the way bundling works indeed in the non bundle. So I almost don't want to do this in dev mode. Cause I want
[00:40:32]  to look at it. It's fine. Let's, let's, let's, let's look at the HTML. I think that's, that's a good
[00:40:36]  place to start. Cause you can kind of, you can kind of see what's going on here. I did talk about this on one of my previous streams, but this
[00:40:45]  is so much more visual of what's going on here. Cause the body is the start and there's this Q base. But then if you look at here, these
[00:40:55]  components essentially tell like it's serialized into the DOM, like what code to load for them. Like on Q render source component app, H app app component on render
[00:41:09]  app component. So this, this element goes, okay. Hey, and then there's some references to the, to do's and an ID and an object. And my
[00:41:22]  guess is if we look down here. Okay. This is the Q resolver code. We, we remember that there it is. Quick JSON. We're going to be
[00:41:31]  able to see some, some stuff here. Yeah. So yeah, here, this isn't unlike most frameworks. There's, if you ever do SSR, you know
[00:41:41] , you serialize the data in essentially. So here is our to do's, right? Here's the state of, of all our to do's. You know,
[00:41:50]  title, build, hello world completed false. You know, base of these keys refer to keys. So this is the secret to how quick doesn't do closures.
[00:42:01]  Cause essentially. The elements all know the dependencies written into them. So you don't need the JavaScript code to, to, to do that. You just go like, here
[00:42:10] 's where the code is. Here is the references to the, on the elements to, to essentially where. Um, the data is. So I think let's,
[00:42:20]  let's, let's just play the, play this game. What happens if I check this? Oh yeah. Nice. Okay. I don't know why this one's
[00:42:29]  red right now, but it doesn't matter. You saw that the second I clicked on it, a bunch of scripts popped in like. On render input on click.
[00:42:38]  So it loads the click handler. And then it calls toggle item. And I want to believe that toggle item comes in from state here. At which point. It loads the
[00:42:47]  shared state. And does what we need to. So essentially. And does it happen to you when I unclick it? Okay. No. How about when I remove
[00:42:59]  something? Okay. So fun. Okay. Let me refresh this and see what's up. It's also possible that I just got the latest version of the demo and it
[00:43:10] 's broken slightly. Yeah. So an item is missing. Yeah. So this is the new V build. I haven't played with this. So this is on me.
[00:43:17]  I knew that there would be a chance that we might not be able to kind of keep up with how stuff is going. So, you know, I'm going to
[00:43:28] , I'm going to, I'm going to move on from this demo. I think if people don't have any questions so far, I mean, this is the basics
[00:43:34] . You can kind of see how like on click, even like the events literally tell you what code to render. But as I said, this, this, this V thing
[00:43:44]  is brand new. I don't know. They literally pushed it up like yesterday. So yeah, maybe there's a couple of little bugs in the system here around that
[00:43:51] . So, but essentially it's really kind of cool how you can see like basically prescriptively tell you like on click load this code and it's all kind of as
[00:44:05] ync handled. Okay, so not very easily actually. And I talked about this at the beginning of the stream. Like it's not just serializing the event handlers
[00:44:18] . Like how, I mean, there's a couple other things like with solid, you need to serialize all the primitives values in and then restore them.
[00:44:32]  And even then, like our control flows work, like we couldn't be as granular. I'm, I'm, I'm, I think there's different ways to attack
[00:44:41] , like react has server components and stuff. I think there's different ways to attack parts of these problems. But what makes quick so interesting is it is not easy.
[00:44:51]  Like other frameworks don't get to do what quick does. Like that's just, it's not the, they don't work this way. Right. I mean,
[00:44:58]  I was actually talking with Misko way back, like early, early, and we're talking like, well, why don't we just kind of like use solid as like
[00:45:06]  the renderer. And then we'll like kind of build some of the kind of quick, like Misko only really cared about making sure that this out of order thing worked
[00:45:14] . And he's like, I don't care that much about the rendering. I don't care. You know, let let's let, you know, I'll use
[00:45:21]  best in class. Let's just make it thing. And he, he looked at like every framework and it just wasn't going to play ball. Like technically speaking,
[00:45:30]  there was a path with solid potentially, if we changed how create component worked. But like, it would be a different framework essentially. And, and that's, that's
[00:45:40] , that's, that's the key, right? Like we could share every activity, you know, and that's still something that we were talking about, you know,
[00:45:47]  but it's not, it's like quick is quick because it's not like the other framework. I think this is going to be one of the, I think this
[00:45:55]  is one of the things that I think it's going to take a bit for people to understand once people go bug people about partial hydration and lazy, like some of this stuff
[00:46:04] . They go, Oh, just, can you add this? That's going to be a common thing on this, on this, on this stream for sure. How
[00:46:11]  much lazy code can you stand to load at a user interaction? I don't know. And that's what I want to find out as part of this, these experiments we
[00:46:19] 're doing, honestly, this, I, I think there's a balance here. And I think as we dig, we'll kind of get a better feel for it.
[00:46:28]  But unfortunately this example is not working, but luckily for, for, for everyone else. See, like, look, the inputs even missing here. Luckily for everyone else
[00:46:38] , I have more examples. So let's, let's just keep on going. I don't, I don't know what's I, as I said, I just
[00:46:44]  fresh installed this and it's not working, but you know, this stuff's a work in progress. So let's, let's move on to what I was actually
[00:46:51]  working on this week. This, this was just kind of a, you know, the, the demo. I think if I went online, I could probably find the to
[00:47:01]  do demo again, or, and they have working ones. Like I'm not convinced like what's going on here. Yeah. It's, it's, there's something
[00:47:09]  in the build that's making it not find stuff. One of the weird things about this. Yeah. I don't know what's wrong with it, honestly. But
[00:47:16]  let's, let's, let's move on to what I was working on. I wanted to see if I could make my hacker news demo. Because as, as,
[00:47:29]  as, as, as you all know, it's, it's, it's been kind of one of my favorites here. And it's, it's a nice one
[00:47:36]  for kind of showing initial page alone partial object. It's not very good for, it doesn't show how it scales exactly, but it's not, it's not very
[00:47:44]  good for like. There's not very much mutation, but it's very easy one for just seeing loading patterns, you know. And quick obviously has a great pattern for
[00:47:52]  loading. And I, I'm not gonna lie. I kind of wanted. I mentioned before that quick has this really unique quality in that how it can kind of hydrate
[00:48:01]  inside out. I wanted to put them on display. I was like, I'm going to make a client side router. And I'm going to, I'm going
[00:48:07]  to load the hacker news page with no JavaScript. Then I'm going to shrink a comment and load the JavaScript for common. And then I'm going to route to a different
[00:48:16]  page and then load the router. So like no JavaScript piecewise partial hydration into a single page app experience and, and show everyone what I was talking about a few months
[00:48:28]  ago. When I said that quick was the only framework that was a transitional, you know, had the potential of being a transitional app as you know, in that kind of
[00:48:36]  rich Harris definition of transitional. But there's a few pieces missing in quick today that didn't let me get to where I needed to on that side. And the truth
[00:48:45]  of the matter is, and I knew this instinctively, that's not the best pattern for quick. Quick actually, you know, like Marco and react server components wants you
[00:48:54]  to route on the server. I had a whole article about that a couple of weeks ago. I was like, everything's running in the server. It's the same here
[00:49:00]  because the thing is, if you slice stuff into a thousand pieces, you know, I mean, not that many, like whatever. A hundred pieces, even if you
[00:49:08] 're kind of smart and how you group stuff together. Once you go and navigate to that new page and make the client render it, you have to load all the code.
[00:49:18]  And then suddenly you're just like loading all the JavaScript and doing like, it's not going to be the best experience. And you could come up with smart ways where you
[00:49:25] 're like, okay, I'm going to have this, this cut up part version. Then I'll have the bundled version for navigation. You can do all that,
[00:49:31]  but it's just not natural. What you really want is something like turbo, but better. And, and, you know, react server components is one answer to that
[00:49:41]  problem. We're working on something else, you know, or we have some ideas of how we can do that with Marco. And that as well, like a different version
[00:49:48]  of that. And I think, I think everyone working on this problem very soon will realize this, this is a routing problem and be working on routing in this area.
[00:49:57]  And so I kind of gave up on that and just went to a classic, you know, what do you call it? A classic MPA setup. So this is cool
[00:50:09]  because guess what? They have a Cloudflare template. So this, I can put this up right against all our other Cloudflare demos that we've been doing over
[00:50:16]  the weeks. And it's a nice setup, you know, this is just a roll up, but essentially I was able to just take the same thing that I made
[00:50:25]  in remix. I made in solid. I made in Marco and just kind of run it through its paces. So how does this work? Well, index.Cloudfl
[00:50:33] are unsurprising to everyone. It's very simple. You add a list, a handler for, for fetch. And then, you know, you pass through the
[00:50:41]  static assets and then quick has some caching stuff. I turned the caching off because I wanted it to be the, I want it to be the same as all my
[00:50:50]  other demos. And then essentially we set some headers and yeah. Where is the response? Yeah, sorry. Render app await with the, with pass the URL in
[00:51:02] , set some headers and then send the response back. And this just feeds into this index file, which is basically the, the kind of root of our app. And this
[00:51:14]  render app, what I did was I found a really cheap, quick little router here called URL router. We, we, this is the one we asked to use in
[00:51:23]  the Marco Cloudflare examples and just mapped the URLs to a component and a data loaded function. And, you know, I'm a big guy on the streaming side,
[00:51:34]  but like, obviously this, this is, doesn't have any of that. It's literally match the route block to get the data and then pass the data into the app
[00:51:43]  when you render the string. But essentially, you know, render from the HTML head. This is very easy to port. Once I gave up on the client side routing
[00:51:53] , I was able to make the rest of this app in like an hour. Um, it's the same API that I've been using on all the demos, you know
[00:51:59] , and the only thing was, uh, they had the original demo having all the components in one file. I just kept it to make it easy here. Um,
[00:52:11]  this was actually really, really easy to do. Um, I just, you know, got rid of the class names from the remix example. I kept the remix example as
[00:52:17]  my base because, um, they don't have like the four show components. They use react style. So just, you know, this is the same markup that
[00:52:26]  I've covered before with everyone on stream. Uh, dozens of, I feel like dozens of times now. The only difference now is the component component name, the dollar sign
[00:52:34] , this whole thing. And as I said, this person's using use store. This is, you know, this is from a week ago. Um, but essentially
[00:52:41]  it has the same click handler doing the toggle to compress the comments. And there isn't really a ton of else here. Um, it was actually really easy to build.
[00:52:56]  I hit one snag and it's, and it, it caught me up for like, I'm not gonna lie. He did. I just gave up developing that day
[00:53:02]  and I came back a different day. Uh, when I figured it out, it's because, um, and the one quick compiler gets a little bit better. It
[00:53:09] 'll be easy, easier. I was just prototyping some stuff for the stories page. And I was like, I was like before I actually had data to load. So
[00:53:15]  if you notice, I'm actually splitting the props here, um, in the render function, but originally I just had put some, defined some variables up here. And it
[00:53:25]  was really funny because it was semi working, um, and semi not working. Um, because this scope wasn't a tied to state or props. I guess down here
[00:53:35]  didn't know because they get bundled separately. Didn't know that they were related and it was undefined, but for like a simple variable access, it wasn't
[00:53:43] , it wasn't complaining. But if I had like, uh, like stories.length, then like a member property access would crash the app. And there, there
[00:53:52] , there, there, there's, there's some work that needs to be done on error handling on these templates. So it took me awhile, but once I figured it
[00:53:59]  out, you know, and, and actually built the app, this was pretty straightforward. And the, the end result is actually, um, let me see here.
[00:54:09]  Quick Hacker News thing. Uh, what are kind of similar Hacker News demo. This is MPA style. So like, like Marco, when you navigate, it
[00:54:19] 's doing a full page load. You can kind of see it up here. And when we, when we go to the comments, it's like this, there was one
[00:54:25]  other thing that I hit, um, inner HTML wasn't working properly. So you see the stuff isn't escaped, but as I said, these are small bugs that
[00:54:33]  we can fix and then you can, you know, shrink and hide the comments. But let's, let's, let's look at what happens here on the network tab
[00:54:39]  as we navigate around, right? So there's nothing interactive on this page. So right off the bat, the quick page loads and there's no JavaScript and there's never
[00:54:48]  going to be any JavaScript. See, so in a sense, because there's nothing to interact with, the low JavaScript, even though quick has no knowledge of client or server
[00:54:58]  components. It's still effectively did the right thing and sent no JavaScript. And we'll never send any JavaScript. So like in that sense, Marco and quick are almost
[00:55:06]  identical in this example with completely opposite approaches. However, when we go to a comments page, still no JavaScript. And at this point Marco would have loaded a little bit
[00:55:23]  of JavaScript. And when we press this, watch the network tab. Four pieces of JavaScript. And then when we unclick it, one more comes. Now, you might
[00:55:34] 've noticed something there. Did you see it? What's the way the JavaScript loads in? One, two, three. One. It actually waterfalls, which is
[00:55:49]  interesting. So obviously, I think for something like this, you would know not to package it into four different things and you bundle it together. We'll talk about that
[00:56:00]  in a minute. But essentially, this is an interesting thing about lazy loading. This is very minimal amount of JavaScript. But if you have lots of files and you don
[00:56:12] 't load them in parallel, there is still a consideration here, right? Like what happens if I'm now on a fast 3G network when we load the page, right
[00:56:24] ? Page loaded super fast, no hydration costs. But when I click this, what happens? Right? Like this is a worst case scenario, but it took two seconds
[00:56:36]  for it to respond to me. So like it is interesting. And then this one, wait for it. Okay. So obviously we got to deal with that, but it
[00:56:46]  is an interesting thing. Like I think for critical JS, you would just bundle it together anyways, right? You'd only lazy load things that, you know, needed to
[00:56:57]  be lazy loaded or whatever. It is interesting because as I said, we still need a little bit of knowledge. Even if we don't know what server or client,
[00:57:10]  we still kind of need to do some smart stuff here. And obviously, you know, I hit this kind of thing and I was thinking about it. And Qw
[00:57:20] ik has the answer to that question or that problem. They have this really cool tool called the Qwik Playground from Builder.io. And I'm actually using
[00:57:34]  a different example here that we'll show in a minute. But essentially, you can see all the different bundles they split it up into. And then you can,
[00:57:45]  they have different, you can configure this in the plugin. They have different, they have different bundling strategies. So if I say hook, you're going to see input
[00:57:55]  and you see all these different files that they're going to bring in for this, to this example, right? These are all separately code split. But if I say
[00:58:03]  single, well, now there's this one file and this file. They've grouped certain things together. They separate the event handlers, I think, but then the rest
[00:58:12]  of it got grouped together. And this is a simple app, so you can't see it. But they also have a component mode, which groups it by components and a
[00:58:18]  smart mode that tries to use a heuristic to group it. So essentially, the way you bundle is a new dimension in how you could author a quick app,
[00:58:30]  if that makes sense, which is interesting. Like, it's a different sort of problem. Instead of worrying about server versus client, you know, kind of thing, you
[00:58:41]  instead think you instead trying to be smart about how you bundle things. And one of the ultimate goal of my understanding from this is to use user analytics. So if you
[00:58:50]  have like an e-commerce site and you see patterns on how people click, like people always go to certain areas. Well, then, you know, you might start with
[00:58:58]  something a little bit less optimal, like maybe the smart one or maybe like single or component, maybe components, a good middle ground or whatever. And you might, you
[00:59:07]  might, you might, you might, you know, load a little bit more JavaScript first, but over time, you refine the patterns and, and figure out what the right
[00:59:15]  patterns for your site is in terms of how to lazy load JavaScript. And as I said, it's interesting, because this, this is one of those things that I think
[00:59:23]  you kind of have to be aware of with this approach. because as I, as I, as I, as I mentioned before in here, like, I mean,
[00:59:31]  obviously now that it's loaded, it's super fast, but when you, when you, when you first load something like this, you know, there, there, there
[00:59:44] , there could be a real cost to, to the lazy loading. Even like the funny thing is this is what the smallest amount of code, like, look, look
[00:59:55]  at these files coming in. Like they're, they're just little snippets. This is what I was getting at. Can you picture if you waited to load your whole
[01:00:02]  react app and, and hydrated at this point, like it w it would be comically slow. We w I'd get out of my chair and walk over to the kitchen
[01:00:11]  and come back before, you know, on a slow network, because like on some, when you have full hydration on some pages on a slow network, like sometimes it can
[01:00:20]  take like. You know, seven seconds. That's what we're looking for. Partial hydration, you know, solutions that, you know, you know, seven
[01:00:26]  plus seconds. So. You know, this is even on a small grain level, this is still something that can be felt if your network is slow enough. So it
[01:00:35] 's interesting because I think ultimately you do, you do want a certain amount of critical JS always loaded. I think the zero JS thing is mostly a myth. Like it's
[01:00:45]  mostly a, like a, like a, like, Oh, isn't that nice kind of thing. And it demos really well, but realistically there's like a small subset
[01:00:55]  that you definitely want always present. I feel because like you're, you're otherwise at the mercy of the network. But as I said, with tools like this at
[01:01:05]  your disposal, this is incredible. Honestly, this is such a cool tool. Like you can actually see, like you go on our playground and you can see the compiled output
[01:01:14]  and you can see that here. You can see how the, the imports and the lazy loading and all that kind of get pulled in. But this is, this takes
[01:01:20]  a whole level. You see the bundler, it's like mixing the roll up and the, and the, and the, like compiled output all into like one tool.
[01:01:30]  So it makes sense why they've gone this way and why they've invested this tool. I think this is going to be an area of really interesting research in the, in
[01:01:38]  the future. But, you know, just, just to sate any of those people who, you know, kind of love to kind of see, see how this
[01:01:47]  loading stuff works. Let's, let's, let's, let's just drop this in. Why not? And, and see, and see what we end up with
[01:01:53] . I'm pretty sure I know where we're going to get. But yeah, 0.9 is across the board. As I said, it's unfortunate. It
[01:02:11] 's blocking, right? We don't have streaming. That's the only difference. Marco's 0.8 because of like a little tiny bit of not blocking, but otherwise
[01:02:19] , you know, you know, unsurprisingly, if you don't hydrate, you don't hydrate and the, and the page scores are really good. There
[01:02:27]  is, there is a difference with this approach, although I think there's probably ways to solve it. But one, one difference here is, and actually maybe the bigger
[01:02:37]  reason for the 0.9 is, and we already saw this earlier. Quick is serializing all the data down, right? When we saw the Marco example, we saw
[01:02:47]  that there was no data serialization happening because, because of the way the app was structured, partial hydration and the knowledge of being on the server can save serializing the data
[01:02:57] . But in the quick case here, we can't like, we can, we can probably explicitly be like, don't serialize this data, but it's not
[01:03:06] , it's not, it's not free knowledge. It's something that you probably could just like, be like, Hey, don't do this. Right. I
[01:03:12]  think it gets more interesting when you have partial pieces, right? Cause when we were doing the Marco demo, you, I didn't really show up, but you could send
[01:03:21]  one field to the comment and then serialize the title. Let's say from every single comment. Only automatically, rather than sending the whole comment down. So I think
[01:03:30] , I think there's gonna be some interesting strategies here on the data side. Cause that's the one thing that I think react server, like having the knowledge, like react
[01:03:37]  server components or Marco does, does have an advantage here. Which means that for the, I think I'm, if I remember correctly for the demo that I showed everyone the
[01:03:48]  other day, I don't have it right off hand, but let me see here. I think for a page with a lot of comments, like 290 here,
[01:03:59]  we're going to see a lot of data, which means that regardless of how fast we partially hydrate, we're probably going to take a hit. Um, very similar
[01:04:15]  to what remix or solid or Svelte did here. So it's, it is an interesting, the, the different aspects. Okay. I mean, not much
[01:04:23]  of a hit at 299, obviously. Um, but you know, if, if we, oh, I did, I did do it. If we grab my 1400
[01:04:33]  comment page. Um, I killed cloudflare. No, is this the right one? Uh, which one is this one? Sometimes. Let me see what this
[01:04:51]  one is. No, that's not the right one. That one's 288. Which one am I looking for? Yeah. Okay. Better than, better than
[01:05:06]  remix, obviously, and better than solid and Svelte. But this, this, this, this, this is a, this, this is a, this is
[01:05:26]  a, this is a, this is a different kind of cost. I think, I think this is gonna be an interesting thing moving into the future is kind of playing out
[01:05:35]  how much data serialization costs kind of play into this. out how much data serialization costs kind of play into this and also obviously the lack of streaming hurts which again
[01:05:43]  that the the that that that that's a feature that i i suspect will be coming so i won't worry too much about that i think i think generally speaking though that is
[01:05:53]  one of the interesting things about this approach because you need to be aware of the lazy loading and um and and and the and the uh and the data so i think i
[01:06:04]  think i think this is interesting i think in general though as we've seen this the this approach delivers in terms of super super fast hydration super like and the authoring experience as
[01:06:18]  i said pretty pretty familiar right like let's let's look at our code here one more time um from from from the from the hacker news example here this is just the same
[01:06:31]  gsx i was able to copy and paste it so this is really cool how similar this was this is very very easy port for me to make obviously all the g
[01:06:38] xx languages are really nice for that but essentially like really powerful um ability to just use the same patterns that we were very accustomed to and almost instantly get this savings i think
[01:06:55]  this is the only gsx framework that actually gives you that partial hydration story right um essentially because um it's it's it takes a certain amount of consideration -
[01:07:10]  Hmm, so how people know instant questions? All right. Yeah, okay, yeah. Thank you, yeah. Yeah, no, it's interesting, right? 'Cause
[01:07:25]  it's really cool how, like, you can see which keys of a title, like, which story, like, this is a story list, right? And if I
[01:07:35] 'm right here, like, it's all wired without actually loading the code. This is like a, I think there's something really cool to be learned from this.
[01:07:49]  I don't know how this applies exactly, but you can kind of see, no, what else is interesting? And maybe this isn't, this is something I wonder,
[01:07:56]  Quick uses, maybe not web components, but you see this story preview? These are my component things. They actually make an element for each of their components. They're
[01:08:08]  probably not like actual web components, but this is interesting. So the component boundaries are actually represented in the HTML. I mean, I can guess why that is. And I
[01:08:19] , like, it's much easier to do transclusion, like, or projections of children's, like, slot type APIs with this kind of setup. But it is
[01:08:27]  interesting, because it means that components are DOM elements, which is interesting, definitely, from my perspective. As I said, it makes a lot of sense. Now it's
[01:08:40]  easy to serialize stuff. I just, I wasn't picking up on it earlier, but, you know, nav, stories. Yeah. Why didn't I pick
[01:08:48]  up on this before? You can see, you can actually see the components are DOM elements. Oh, yeah, yeah, yeah, yeah, exactly. Yeah. So,
[01:09:03]  yeah, I think, I think, I think that's, I think that's a good point, because why that, that big slowdown on that one page that
[01:09:09]  I just loaded when I was, I grabbed it from, from, from there. And I think, I think that's the key here, right? Because we were,
[01:09:19]  we were looking at this, this super slow, brutal, like, why are you loading 1400 comments page, right? And this is a good exaggeration, obviously. But
[01:09:31]  yeah, this page is 550 kilobytes, right, here. And then if I load the same page, let's grab, let's grab this. Let's
[01:09:43] , let's load the same page in solid. I love having all the hack news demos. Yeah. What do we got here? Sorry. Press the wrong button. I
[01:10:03] 'm on the wrong screen. Let's load the same page in solid. Where is it? Yeah, that was weird. It was like cash because of the service worker
[01:10:15] . Okay, there we go. It's 442. So there is some hydration cost, I guess, of writing everything into the DOM, like in terms of page size
[01:10:25] . But obviously if I drop this in here, and what was it? What is it? HN, HN dot Marco JS workers dev. And I think you
[01:10:41]  didn't use my pluralize everything thing. Dylan did port my stuff over a bit. Yeah, this page is so freaking slow. Although the fact the header showed up
[01:10:52]  so fast, like if that had a nice loading indicator, that would have been not a bad experience. Let me see here. Network. Let's load it again. I
[01:11:01]  love that. Sorry, streaming is just so fun. Do you see how the header looks like it didn't even move, even though it's an MPA? 208
[01:11:08]  kilobytes. Yeah. So that's, that's, that's, yeah. I mean, that's the winning. You're sending a page half the size
[01:11:15]  when you can do smart data serialization. Yeah. Yeah. Yeah. I mean, it's not hard to understand why, why that I I'm positive. This will
[01:11:30]  be a place of focus in the future. I'm starting to, I'm starting to like, I think maybe even why that's why to a certain degree, why react
[01:11:37]  went the way they did it. Like when I first heard of server components, I was thinking, oh, it's just like, they'll just render some components on the
[01:11:44]  server, you know, but they actually followed the rules of the tree, the same as Astro or Marco does in terms of with a server route, you're not
[01:11:54]  allowed to put server components and client components. You can only project them through children. And I'm gathering it's because with those rules, you can consistently know that it's
[01:12:04]  impossible for the client to re-render state, which means that you can know that a hundred percent, you can't serialize that data. You mentioned that you ran into
[01:12:11]  some scoping issues. Once you figured out how to do CVS or natural support. Yeah. Yeah. It was super easy once you know. I mean, the
[01:12:17]  thing is, if you want to access the rule that, I don't know if this is true and they'll probably correct me on it, but if you want to access
[01:12:23]  something in the render part of the function, either define it there or use state or props. if you just have some random const or temporary variables in the component part of
[01:12:35]  the code, it's not guaranteed to end up in the render part of the code. And in a sense, the API makes that really obvious to see it did, obviously
[01:12:44]  not knowing that, but I mean, to be fair, Quik doesn't have the docs yet. Like I'm doing this completely blind. So I'm going to
[01:12:51]  expect to be that, like the, like with the help that I got on the discord, I was like, I was like, oh, okay. Like I, perfect
[01:13:01]  example, we haven't seen it yet, but Quik doesn't use props.children to do children projections. It uses slots, like web components or Svelte
[01:13:10]  or that. And I didn't know that. So obviously I'm like sitting there trying to go props.children, but like read the docs scenario. You see that two
[01:13:17]  seconds in it's intuitive, you know how it works. You know, so I, as I said, I'm not too worried about that. I think it was just
[01:13:23] , as I said, I think, I think the compiler for that one could have shouted a little louder in a way that I could understand. But generally speaking, I,
[01:13:34]  I, I think things are explicit enough. The thing you got to worry about when designing APIs, it's what we're talking about at the beginning with react. As
[01:13:42]  long as you know what the limitations are and they're spelled out for you in a way that's easy to see, then like, it's fine. You know what I
[01:13:51]  mean? Like, but you know what I mean? I have a biased opinion, right? It's the same reason when people complain to me profiriously about not being
[01:13:59]  on the destructure, I just kind of go, because like, now, you know, don't do it. Like, it's, it's, you know
[01:14:07] , maybe I should be more sympathetic to those kinds of things. But like, those are, those kinds of things don't really matter. They're like superficial kind of
[01:14:17]  window dressing kind of scenarios. As long as you like know the rules, you follow the rules. It's kind of like the hook rules. I'm also not bugged
[01:14:23]  by them. Some people are like really annoyed by the hook rules. I don't really care. It's like, I understand them. I follow them. You know,
[01:14:30]  stuff like that just doesn't phase me pretty much at all. Like, you come up with a reasonable set of constraints to go to trade offs. That's the cost
[01:14:38]  of doing business. That's how it works. Right. You know, but again, if I felt differently, you know, maybe, maybe I would have, you know
[01:14:46] , tried to do in the Svelte team or something like, and worked on that side. That's just not what I care about. I care about producing the
[01:14:53]  best possible user experience for my end users and, and concerned with giving explicit control with clear defined boundaries. And I think that's possible with this API. I think there's
[01:15:05] , there is a couple little things and I'm, I'm, I'm, I'm interested if like there's, I like the explicity. I got to say
[01:15:14] , I like that they're being very explicit here with these dollar signs. Like part of me is like, well, if you know, it's a component, do you
[01:15:19]  have to return the dollar sign on render? Kind of just like return a function. Like if you've ever used JSX and view, like you return a function just
[01:15:28]  like this. It's the same concept. They, that's how they separate the templates. They make sure you return a function. Um, so you're kind of like
[01:15:35] , oh, well, if they know this, the component, could they just do that automatically? Maybe, but like, on the other hand, this gives you complete control
[01:15:43] . Like it's explicit. You under, like, once you understand what it does and why it's there, you like, my understanding is you can use other dollar signs
[01:15:51] . Operators to do, to denote other things of this nature. And I think, I think that's an interesting, almost like a language primitive that you can build
[01:16:00]  on. So instead of viewing that as a downside, I view that as maybe something super powerful and really unique and a way of actually leveraging the system. I like having that
[01:16:11]  kind of explicitly and putting that control back in the user's hand is something that I value incredibly. You know, it's like on the opposite end of the spectrum,
[01:16:19]  right? As I said, having to be aware of this is, is, is reasonable trade off to me. If it means that I have the power and control to have
[01:16:28]  code working the way I do, I'd, I'd rather not people hide it behind walls and stuff. Yeah. Sorry. Long rant for this, but I just
[01:16:37]  want to make that kind of clear is I, I think, I think this is one of those ongoing things. And I think maybe this isn't like a hundred percent there
[01:16:46]  yet. Maybe they have a few more tweets and stuff, but I think this is already heading in the, in the right direction. And I think it's a careful
[01:16:55]  balance of explicit APIs and, you know, this kind of power and control. So, yeah, I mean, the Hacker News thing was easy. I just configured my
[01:17:05]  Wrangler and threw in my components for my other stuff. And like, we were there, we deployed it. As I said, inner HTML not working was a little
[01:17:13]  bummer, but I think I got, I got what I wanted from this demo. I can kind of get the feel it's, this is a framework that still
[01:17:22]  is in its early stages needs to kind of work on, you know, certain details, but generally speaking, it's already delivering on the promise that it, it, it
[01:17:32] , it's making here on the no JavaScript side. If, if, if I'm just looking at building a simple e-commerce site, you know, and doing this
[01:17:40]  kind of stuff, you know, lazy loading this, this, like this does a trick. Like I said, I'm a little bit more skeptical on the lazy loading
[01:17:48]  side, as I showed before, but this is already going to be a hundred times better than your React app. So, you know, I, I can't show completely
[01:17:58]  show non-bias there. Cause I, I, I, I'd be like, you know, you could also use Marco or, you know, a couple other
[01:18:05]  things, but, but in terms of a competitive solution that does what it says it's going to do, you've, you've got it here. You know,
[01:18:12]  so I think this is pretty compelling showing. So let's, how are we doing on the stream? Let's see where we are at on time. So we're just
[01:18:22]  over an hour. We're going to look at this and say, this is probably may not be the longest stream ever, but let's, I've got one more example
[01:18:28]  and let's, I'm trying to think if there's anything else we can get from this hacker news example. I don't, not a ton, I think the
[01:18:34]  data serialization is interesting. I think everybody has their own loader scripts. I like, there's lots of similarities and commonality patterns. You can see in this,
[01:18:44]  um, data serialization is going to be an interesting problem for most frameworks in the future. But, um, essentially, I think, I think this, this demo
[01:19:01] , it's up there, let, let me post this in the chat for anyone. But weird, my, my screen is showing up weird. Is this showing up
[01:19:14]  weird for you, for you all? It's fine on my screen, but it's showing up weird through the. So how do you feel about Marco six in many
[01:19:23]  ways, not having explicit performance guys. And, and the amount of optimization we handle for you, this is baiting a little bit, you know, like leading question much
[01:19:32] . Okay. This is, yeah. So it must be just streamer acting up this, this, this, this, I I'm going to have my preferences, but
[01:19:40]  you know, I'm going to hold my final judgment on, on, on, on this stuff, uh, on, on that aspect with comparison Marco. Cause when Marco
[01:19:47]  six gets a little bit further, we can talk about it more. Yeah. So it just screwed stream yard being funny for me. That's fine. I'll ignore
[01:19:53]  stream yard. Okay. So yeah, I'm not going to get too much into it. I, I obviously see, um, before getting into all that aspect, I
[01:20:01]  think there's, I think the data handling Marco and react server components is, you know, in terms of serialization is an interesting, very obvious UX consideration. But I
[01:20:11]  was talking to this ago and he seems to think that he has a solution for that. So I'm, I want to see how this develops before, you know,
[01:20:18]  making any, anything more on, on that side. Um, obviously there's trade-offs, like, as I said, you, you, you kind of have to
[01:20:26]  be a bit aware of the split between the component and the render function and the probably click handlers. But is this something that a better compiler could fix probably, you
[01:20:38]  know, you, you, you know, Dylan, you know, how we handle hoisting and, uh, variable sharing and all that kind of stuff. So
[01:20:46]  I I'm pretty sure you could probably picture how to make the, the compiler work better in these scenarios. Um, cause we're, we're, we are doing those
[01:20:54]  tricks in Marco. So, um, I, I, I, I, I think, I think on that side, it's interesting and it's fine. I
[01:21:03]  think you're right. I should probably comment on a bit more on the, this, I think on the optimizer side and this kind of mentality, I think, I
[01:21:11]  think this is, I think this is a little bit challenging. I think when, when we see it automated, it's going to be really, really cool. I
[01:21:20]  think that this, this is more of a place where like, I have to put it like, this is a new type of consideration. And I don't know if I
[01:21:33]  prefer this consideration over literally just being like, I know that this part of the code, it's like structurally is less important. Let's lazy load it. Like you
[01:21:44]  go, okay, there's this little widget over here that's less important. I'm just going to wrap it in a lazy. I don't know, I feel
[01:21:49]  like my first gut feeling is I'd rather do that than worry about an optimizer, but I think it might depend on the type of app. Right. So, uh
[01:22:01] , uh, yeah, I don't know. I think, I think this is a new dimension and I'm not sure how much I like this being a new dimension,
[01:22:09]  but that's partially because this is a new and I'm not used to this being a new dimension. Okay, so we got one more demo to look at and yeah
[01:22:21] , that one's done that one. I never ran and that is my, another one of my favorites. I was like, okay, well, can we client render
[01:22:36]  a quick app? So no server side. And the reason I wanted to do this is because I wanted to put quick in the JS framework bench work. You know, me
[01:22:44] , I love the JS framework bench work. And, uh, I thought, I thought, I thought it'd be, you know, I I've re I've
[01:22:52]  written so many things. I, I, you know, in the JS framework, I wrote the, the, the, one of the vanilla implementations when the, I
[01:23:00]  think it's now the probably the faster one. I, I wrote the solid implementations. I was the one who upgraded react to react hooks. I upgraded Svel
[01:23:09] te two to Svelte three. Um, I, I, even though I'm not like the core maintainer of this benchmark, I, I've, I've
[01:23:17]  worked with lots of, uh, core maintainers of the different libraries, you know, like Dan chipped in when I did the react hook one. And then like
[01:23:25]  to, to kind of make, um, this benchmark, the best quality that I could possibly do. I added Alpine JS. I basically, whenever I come across different
[01:23:34]  libraries, I want to see what I can do there. So here, I started working on this and I got stuck because there was a problem with the client rendering, but
[01:23:42]  then I got unstuck because, um, member of the quick team came in to actually help me fix it. So I didn't quite finish making the benchmark, but we
[01:23:51]  can, we can, uh, we can give it a shot right now. Or like we can, we can, we can probably, uh, do a little work
[01:23:58]  here and get it actually, um, working for us right now. So I'm going to go run dev, build dev and have it, have it working. And why
[01:24:06]  is this spitting out so much stuff? Do I still have debug mode? I probably have some console logs from like some of the, the stuff I was doing. Yeah
[01:24:13] . So that's fine. It doesn't really matter. Um, JS framework benchmark, if, if you've never seen it is basically building this giant list of stuff and
[01:24:22]  they have a bunch of like random keywords. And you use a random and then you build a bunch of data using that. And then essentially it's, it's, it
[01:24:31] 's a bunch of buttons that get clicked. And then you see the quick click handlers and then essentially, uh, it renders them in a table. It's like
[01:24:45]  a giant to do MVC. And there's a few, uh, few things you can do with the table. And so far I've implemented the base functionality.
[01:24:52]  So if I am correct, I should be able to just. Let's close this and close this down. I should be able to just go to localhost, 80,
[01:25:03]  80 quick index. And I can see the basic thing here. And I don't know what's up with that styling, but whatever. Okay. So you see it
[01:25:09]  created a thousand rows and you can clear them and you can update every 10th row. You can see the explanation marks and you can swap some rows and get a pen,
[01:25:21]  some rows. And I actually, I was, I'm, I'm, I'm, I'm, I'm missing two functionalities right now. I didn't
[01:25:34]  implement the cl delete a row and I didn't implement the select row functionality, but essentially I implemented all the main buttons. One thing that I'm actually interested in that I
[01:25:46]  haven't checked is, is quick actually keyed. Cause JSX thing was complaining to me about it being keyed or not. And I think it might be interesting
[01:25:56]  to actually look and see if quick is actually keyed. For you, for people who don't know what I mean by keyed. It's the idea that for every
[01:26:04]  piece of data, the DOM element that it gets associated with it sticks with it. So if you switch the location of the data in the list, it's the same DOM
[01:26:14]  element moves with it. Where in unkeyed, it kind of, you kind of hijack other DOM elements as you move stuff. So the easiest way to see
[01:26:21]  if something is keyed is to find that element, right? Like this TR, and then basically do something to it. Like, I don't know, style equals,
[01:26:39]  uh, what background color green, maybe. Yeah. Beautiful. Now, when I swap rows, that should move with it. It doesn't. Okay. So it
[01:26:56] 's not keyed. Because if it was keyed, what would happen is when I switched it with row 99, it would, it would essentially end up, the green
[01:27:10]  would end up down here. And while you might be like, who freaking cares? The problem with non-keyed or key by index is that essentially if you have
[01:27:22]  animations or any kind of state that, you know, sometimes with inputs and stuff, any kind of state that's tied to the DOM element, and web components, this
[01:27:31]  is the thing that comes up as well. You're basically switching the data under it mid-sweep. And it's sometimes hard to, well, not sometimes
[01:27:41] , it's often very hard to kind of switch it. Like, as you saw, now 99 is green, right? If this was a fading animation or you're deleting
[01:27:48]  something and then you swapped it, the different item would pick up that animation. So generally speaking, even though the JS framework benchmark has a keyed and non-key
[01:27:56] ed section, I basically just ignore the non-keyed section exists. It's basically, I consider it unsafe and really, like, it's fine for primitive data,
[01:28:06]  like when you have a list of strings or like an array of numbers or something. But for any kind of model data, you pretty much always want it keyed. And
[01:28:14]  React yells at you furiously when you try and do something that's not keyed. And most VDOM libraries make a big deal of it. Interestingly enough,
[01:28:22]  Svelte and Vue don't yell at you. And their default is non-keyed, which is bonkers to me. But they do both offer keyed
[01:28:28] . So I'm not sure how to key a listing quick. And I was afraid of this. I hadn't gotten this far yet because I had some build issues this afternoon
[01:28:37] . But this is not keyed, which means that I can't compare it to my other keyed frameworks for two of the benchmarks, swap and replace. Because if
[01:28:52]  I'm correct, if I create a thousand rows, again, it's going to keep the, see, still green, even though we're replacing all the items.
[01:29:01]  You can kind of see why non-keyed is kind of terrible. But yeah. Okay. As I said, most frameworks support this because you need to support both modes
[01:29:16] . But me just sticking a key on the list, like the naive approach that I was trying to do. Actually, I can shrink all these windows down. I don
[01:29:25] 't need them anymore. This one. This one. Me trying to, as you see, what I tried to do here was just do the old React, put the key
[01:29:38]  on it. There's no docs for me to reference right now. So I'm going to have to, yeah, I don't think we'll be able to run this
[01:29:49] . But we could at least kind of fill out the rest of the missing functionality here, just to get a feel for what it's like to develop in Quick. Yeah
[01:30:01] . So, yeah. And I'm about to talk to them about how they, about keyed updates. As I said, every framework has it. So I'm sure
[01:30:09]  it's either there and I'm not aware of it or it's coming. But let me see. So we have the two last functionalities we want to add.
[01:30:17]  So this should actually be pretty simple, I think. Because we just need our OnClick handler. And what do we need to do here? OnClick. This
[01:30:28]  one is selected. So I think if this is essentially selected our state.selected equals ID. Probably very easy. And then OnClick. When we delete
[01:30:55]  something, we want it to be essentially. Yeah, I wonder how they handle mutation. We can find out. State.data.splice. And it's
[01:31:18]  the index of the ID. So we need a couple of other things here. Let's just. Beautiful thing is we can use one of the other many frameworks to reference
[01:31:31]  the logic on how we want to handle this. I'm trying to remember what I did for solid. I did the immutable form of solid. I am curious how
[01:31:48]  quick handles mutation. So we're going to use. This is fast. But the fastest way to actually remove something is using splice. So I do want to. I
[01:31:58]  do want to take that index and use splice on it. Instead of. Instead of doing this. I think. I'm just trying to remember which framework would have
[01:32:26]  done a mutation based change. View. Maybe. How does view do it? Not in there. It's all in here. Okay. There we go. Isn't
[01:32:47]  that easy? It's not. Oh. Yeah. You're right. I could use the index. You're right. It's interesting that most of them use the
[01:33:06]  ID instead of the index. Or use the. I use the ID. Usually. Because. Adding the index and solid has a performance overhead. Typical. Me optimizing even
[01:33:19]  array indexes. But. That is. That is an interesting point. That we. In theory. Could just. So is it. State. Yeah. Actually.
[01:33:32]  I still like. I still like. I still like. I still like using it. So what is it. Here. State dot data. E dot splice. D
[01:33:42] . Let me keep this here for a moment. Refresh and get rid of our beautiful green thing. Can we select? Selection works. Yeah. Selection works.
[01:33:59]  Deletion works. Deleetion works. Okay. So. Okay. So. Splice works nicely. Mutation based APIs. On the proxy. And
[01:34:13] . Could we just use. The index. Probably. I kind of. I kind of want to leave it the same as everyone else though. I kind of want to
[01:34:31]  leave it the same as everyone else though. But. Yeah. I think in this case. Because. It re-renders on every change. Okay. So. Anyway
[01:34:42] . That's. The. Dealing with mutable state is. Obviously. Has its benefits. It makes it very easy to kind of. Do this sort of pattern
[01:34:52]  here. I'm. I'm a little bummed about the. About the keyed updates though. Little. Little. Little bit. Because. I mean. Can we
[01:35:06] . Can we. Can we. Can we see if they have anything. I mean. I know there isn't really any docs. But like. Come on. We
[01:35:14]  could. We could. We could. We could find the code. That does the. The array reconciliation. And see how it works. That might be fun too. Right
[01:35:27] . Component import. Jason. Render. Slots. Types. JSX. I wonder if this actually just. Has a hyper script function. And then
[01:35:52]  we can just like. Look at it. Um. Like. I mean. We saw this already. Right. What. What's the compile. Where's the optim
[01:36:17] izer. What's. The. The optimizer for the. Like I actually. This was the JS framework benchmark. That we're looking at. In here in the optim
[01:36:23] izer. What. What does the JSX look like? JSXS. So this is. And this is JSX. Okay. So our. Whatever this JS
[01:36:42] X function is. Here that the import. And JSX. Okay. So that. That is our hyper script function. Okay. So. What's up? Where is
[01:36:52]  it? Okay. JSX. As JSX. As JSX. As JSX. Dev. And then JSX. JSX is. Okay. So.
[01:37:07]  It's the same function. So where the hell is the JSX function? Why am I not seeing it? JSX function. So this is a hyper script function.
[01:37:12]  Return JSX node implementation. Let's get a little bit size here. So people can see what I'm looking at. JSX node implementation. Children any constructor.
[01:37:18]  Pull the props key. Is this just constructing an object and not doing anything else with it? let's get a little bit size here, so people can see what I
[01:37:27] 'm looking at. GSX node implementation, children, any constructor, pull the props key. Is this just constructing an object and not doing anything else with it? Okay,
[01:37:43]  red herring. I think this is just basically converting stuff into, some kind of object form. I don't actually, I mean, it makes sense. It's
[01:38:00]  a virtual node, but where does it feed into, let's look again at the compile output. So, return on render, it's interesting, you see this,
[01:38:23]  the use of lexical scope here. This is where my create state came from. So, I think all states tied together in the background. So, it's almost
[01:38:34]  like, I call it dependency detection, or injection, but I was corrected that that isn't actually dependency injection, but it is interesting that it's basically keying it
[01:38:43]  by the scope of the component. Sorry, just a side note here, looking at the compile the output. Oh, man. Okay, let's see if we can figure
[01:38:54]  this out still. 'Cause what's factory? Okay, well, this is an H function. normalize props. But it's just takes me back to that node
[01:39:15]  implementation. Okay. So, this is just a simple wrapper over it that basically exposes the H function in case, I guess you wanted to use it, like someone else
[01:39:24]  wanted to, but it is still just a wrapper over it. So, this is not, I want the, I want the reconciler here. Okay. Factory host
[01:39:34] , JSX, render, which again, slot, slot, slot, types. Okay, so this is not it. Okay, so. Let's try render TS
[01:39:46] . Probably more interesting to me than most people. Let's see if we can get here. Cursor reconciler. What is cursor reconciler? Okay
[01:40:27] . We're getting closer, I think. So, what is our, what is cursor? So, this is how slot injection works. Get user slotted.
[01:41:05]  No, no, no. Reconciled element. Not finding it yet. One thing that is possible is if you're, if you're not doing keyed
[01:41:31]  reconciliation, it is a lot simpler. I might not actually detect the array reconciliation code as easily because doing by index is basically just a for loop somewhere. You can
[01:41:47]  like look for a for loop and probably find it. But, yeah, not in this file. Yeah, I don't, I don't think there's a key
[01:42:09] ed reconciler. So, I can't run my comparison in the same way because I, I, I, I only have results and stuff. I only test key
[01:42:20] ed. I pretty much ignore non-keyed. So, yeah. Okay. Well, that's something to add for the future. Good to know though. As
[01:42:31]  I said, I only got the, I was only working on this today. So, if it does render render, render slots, slots, slots, slots, types
[01:42:40] , types. I think that's it for the render portion here. See how their prop handling is, but it's probably not terribly interesting. Oh, actually it is
[01:42:55]  kind of interesting because they have those, all the special props, but other than that, children, true. Okay. Cool. That's something for me to look on
[01:43:04]  my own time. Yeah. So, yeah, I, I think, I think that's pretty fair. It's interesting. You can see, you can see how
[01:43:16]  much the APIs have evolved already because look, look, look, look at this version. The component was an object with on render on it with a Q hook thing.
[01:43:26]  This, this, this, this, this probably, yeah, you can already see the APIs evolving. I actually, I really liked the direction this is heading. I mean
[01:43:35] , I mean, they, they named their state create store. So, I mean, of course I'd like it, but, um, you can, you can,
[01:43:42]  you can see on watch method. Yeah. Yeah. So it's, it's happening already. Two days ago. Yeah. Yeah. So So on, on,
[01:43:49]  on watch view causes calls, calls their effects watches. I'm very much willing to, yeah, on watch that this is going to be essentially their, their create effect.
[01:44:02]  Um, Are there tests in this PR? So we can actually see it in action. I want to see it in action. Props. Show it to me.
[01:44:26]  Create watcher function. Subscriptions dot get. Yeah. Subscribe to proxy. Okay. Yeah. Get card. Okay. Yeah. So, yeah, I mean, this
[01:44:46]  is a, this here is a implementation of an effect. It's a, I can recognize it from the way the code is written. Subscribe proxy. Yeah. Yeah
[01:44:54] . Yeah. Okay. Okay. So here we go. Create store count zero, double count zero. Store double count equals two times of zero count. Yeah. Yeah
[01:45:16] . Yeah. So this, this, this, this is using an on watch to, to write back to the store and then rendering them both in. Yeah. So,
[01:45:24]  yeah, this is, this is, uh, and this dollar sign probably means that it gets hoisted out into its own context separate from the other ones. So they
[01:45:34]  are on their path to doing fine-grained code splitting based on reactivity. Not quite as sophisticated as using a compiler, I think, but this is much more,
[01:45:49]  this is basically, this is very similar to solid. So seeing them do this, you know, gives me some thoughts or ideas, definitely, because this is, this
[01:45:59]  is basically like, this should, this should look pretty familiar to people on the stream. Huh. Okay, cool. Yeah, this is, this is, I like doing
[01:46:13]  this sometimes, kind of going into the repo and seeing, seeing what, what's, what's, what's being done here. But this, this, this is
[01:46:21]  the dollar sign indicator and stuff. Yeah, this, this looks pretty promising. Okay, sorry. Kind of, kind of went off on a little, little aside here.
[01:46:33]  But yeah, I don't know, what do we feel about quicker thoughts here? I think, I think if I want to kind of step back from all of this
[01:46:44]  and the specific examples is quick offers, obviously, as I mentioned, a very unique paradigm in terms of how they split stuff up. like, because of how the,
[01:47:00]  like the API's are in front of you, you can't exactly ignore it. But I think it's something you could also just embrace and work within those constraints and get
[01:47:11]  what you want out of it. I think that the data question is still up in the air in terms of the data serialization, like, which is one of the
[01:47:18]  benefits of partial hydration. Like, obviously, it's not a, it's not like an end all be all because most frameworks don't deal with that either. It
[01:47:26] 's just, it's one of those places that probably it's going to have some consideration in the future. I think, I think, though, that this, the way
[01:47:38]  they're using runtime reactivity and still accomplishing this is really interesting. Misko had mentioned that their trick is they actually serialized the dependencies because everything is based off this
[01:47:50]  one global store. They can actually just serialize like double count and just be like, oh, this depends on double count. It depends on double count to, to
[01:47:57]  be able to like run the stuff on the server. Essentially, like they can build the, the list of dependencies when they run it on the server. And then re then
[01:48:07]  when they run on the client, they don't need to replay it. As I said, effects are usually client only. So that's probably not the case, but like
[01:48:13]  you could picture if you had like a memo or something, you could basically use the proxy on the server to know which properties were hit, serialize that. And then when
[01:48:21]  on the client, you don't need to rerun it until one of those properties change. So I, I think that's, it's a, it's a
[01:48:26]  cool approach. Are you going to draw us any pictures? No, I, I, I don't know if anything here actually requires that. I was thinking that I
[01:48:39]  brought out Excalibur because I thought that I would have a, like, there would be something to explain here on that side visually. But this is, this is
[01:48:48] , I haven't really figured out how to, to draw this exactly. It's not like server components where there's that hierarchy that's really obvious here. We,
[01:48:55]  this is just a lot of slicing. And in that case, I feel the similarities with, with, with Marco to a certain degree. Obviously Marco has like a different
[01:49:07]  view of how the hierarchies and like, sorry, how the data transcends through components and through files. But this, this, this, this, this still has
[01:49:17]  this kind of breakdown. I, as I said, ultimately it's going to come down to, does the, is it better to have the knowledge of what's on the
[01:49:27]  server compared to like figuring out what's lazy loaded. Right. Like, like, and, and grouping it that way. And the answer might be, it depends on
[01:49:38]  the type of app. I know like in stuff like e-commerce, you can bank on the fact that most of the pages is static. Like, you know this.
[01:49:46]  So I feel like for e-commerce, I'd rather be in a place where I could use like the dot server, Marco's analysis to be able to make those kinds
[01:49:53]  of savings. But if I had like a really interactive app, almost like a spa, like a dashboard with a whole bunch of things. And I didn't want to
[01:50:02]  load everything, then Quik's the only one who can do that in, in, in like a way that, you know, might not put that much on the end
[01:50:11]  user until you get into this kind of zone. But, I mean, I think it depends on the type of thing. So it's, it's hard to evaluate the
[01:50:23]  technology like this because of just how different it is. Yeah. But it is definitely interesting. Like when I, I kind of get, you know, excited giggles over
[01:50:36]  the fact that I'm looking at a runtime reactive system, like solids, basically staring me in the face right here in the middle of a, of a framework doing this kind
[01:50:46]  of stuff. Because it does suggest that there might be different paths here, like ways to preserve runtime reactivity through this sort of model. Maybe, maybe there's,
[01:51:00]  maybe there's a place somewhere, you know, in where you have certain amount of knowledge. So you don't do this sort of thing, but then also can still
[01:51:10]  do this, you know, I think, I think, I think, I think it's, I think this is one thing. If, if anything, this shows
[01:51:18]  from quick is that this might just be the, there might be a range of solutions that might not be the most ideal in certain scenarios, but maybe still applicable across that range
[01:51:33] . And that gets, that, that, that makes me think that there's like more possibility here than like any given solution. Like, as I told you, I
[01:51:39]  talked to Dan this week and I mean, they're, they're pretty, they're pretty, you know, in on server components. Right. And I talked about
[01:51:47]  it a few weeks ago. He had that tweet where he was essentially like, I've seen, you know, I haven't really been looking elsewhere, but honestly, nothing
[01:51:54]  I see interests me at all. And, you know, only react or something like, and I was just like, what, but he also admitted that he wasn't looking
[01:52:02]  at anything. So to be fair, you know, that's kind of self fulfilling, but they on the react side are very convinced that their VDOM method and their
[01:52:11]  approach is the only way to do stuff. Like, even when I mentioned that I can do concurrency without the VDOM, they're like, well, you
[01:52:17]  know, it's a little bit of like, well, what do you mean by concurrency? You know, you know, they're very much on their, their path
[01:52:23] . And obviously on the Marco side, we're very much convinced that through compiler analysis and, and, and knowledge, we can achieve the most optimization without putting on the end
[01:52:33]  users. And on the quick side, I think the, the assumption being made here is that compilers maybe can't completely cover the gap. And there are situations
[01:52:46]  where things are very dynamic, yet you still do want to be able to benefit from it. Right. So like, in a sense, quick seems like it has the
[01:52:57]  potential, as I talked at the beginning, to be maybe that, that, that lazy loading solution. Do you know what I mean? That, that transitional app thing
[01:53:09] , like Rich Harris was suggesting where you kind of like, it's a spectrum and it's, and it's kind of, you kind of go from partial hydration to,
[01:53:19]  you know, to like spa and back and forth and all that. But the funniest thing is, you know, I mentioned, I talked to this ago and stuff and
[01:53:29]  they, they're looking at server routing, just like react server components, just like Marco, because as I mentioned, you, you don't want, I showed you the
[01:53:43]  waterfall on the hacker news. You don't want that like a tenfold when you navigate to some new complicated page because you have the client render it. So the,
[01:53:52]  the, no, no amount, like no amount of optimizer is going to optimize both for the initial page scenario and for the new page scenario, unless you're producing multiple
[01:54:02]  different bundles and stuff. It just, it just doesn't, it just doesn't make sense. So if everyone actually thinks that server routing is the way that I
[01:54:14]  don't know if transitional apps, or at least as they were stated by Rich Harris are even a real thing. Like maybe this is a concept that's already dead on arrival
[01:54:23]  before it came. Like, you know, maybe transitional, whatever the transitional app thinks like maybe it's already over, like maybe it just never is going to come.
[01:54:33]  And what was more likely going to come is a new type of hybrid app that, which I've been suggesting a little bit is basically the return of the MPA mentality applied
[01:54:47]  to partially client rendered apps, essentially. So MPAs in the client or something that, that isn't the same as transitional because it's not, it's not
[01:54:59]  like a spectrum. It's actually a completely different architectural paradigm, the same way that MPAs are different than spas. It's just, it's like an M
[01:55:07] PA, it has MPA qualities, but actually also has spa benefits. And as I said, in that scenario, kind of, it's almost easier to start from
[01:55:22]  the MPA side. And I think that's why React server components are the way they are and why Marco's the way it is. And Quick is right in the right
[01:55:30]  place too. Like all three of those approaches are right in the right place to leverage and take, take advantage of this scenario. So yeah, maybe, maybe, maybe
[01:55:39]  transitional apps, your hashtag transitional apps are just not a real thing at all. And we are just like seeing the next paradigm, the third evolution of, of, you know
[01:55:54] , we were MPA, then we were single page app. And now next we're, we're whatever this is. Cause I've looked at all the different solutions
[01:56:04]  and they all kind of agree, even though they like, they're like, no, you have to do it our way. They all kind of agree on some fundamentals.
[01:56:10]  And I find that really, really interesting because if you have that kind of agreement, like, like maybe, maybe there is something there. Maybe they are onto something and
[01:56:21]  it's definitely not the single page app that we're, you know, familiar with creating a react server component thing where if say most of your page, like 80% of
[01:56:31]  your page are react server components. Doesn't feel like the react, you know, suddenly things like Apollo are not what you're reaching for. Right. You're, you
[01:56:41] 're, you know, like react query would be something that would only run on the server. Perhaps like maybe you don't have react query anymore. Like it is,
[01:56:51]  it is paradigm shifting. Like certain types of libraries just don't make sense anymore under that. And I think, I think that is more interesting to kind of think about,
[01:57:04]  because if these vastly different approaches to solving this one problem, to be fair, set of problems can agree on a few things. And, and they indicate that I think
[01:57:17] , I think that, I think that's pretty, pretty huge. I think I'm, I'm a little bit surprised. You know, we more, we aren't
[01:57:25]  talking about it more, like even on the react side, when they aren't talking about it more, I didn't understand server components until very recently. I kind of
[01:57:34]  just dismiss them, which is a bit unfair, not dismiss them, but kind of like evaluate them on features. And I think most, I think a lot of people aren
[01:57:43] 't kind of connecting the dots on this. So I think this is an interesting, an interesting potential future that we have going here because this is not, this is not
[01:57:56]  your typical single page app. Even though it looks at first like this could enable like a new type of single page app. I don't think that's what's happening
[01:58:05]  here. I actually, it feels like we're like, this is actually all about server routing and completely different patterns again. So we're in for a bit of a
[01:58:15]  ride, even if, even if you're like holding on to react, because that's your framework, it's like tomorrow's react is not today's react. So like
[01:58:25] , can you think of, sorry, I know I'm kind of going on a bit of a tangent rant, stop me or ask questions in the chat if you don't
[01:58:32]  want me to, but think of the difference. What an app looks like if suddenly your state concerns, like your goal state concerns just aren't on the client, like
[01:58:43] , like going back, you know, it's an MPA mentality a bit and think about 80% of your page is static. So it is server components, essentially.
[01:58:55]  Do you have the same perspective on the client components? Like, are you as concerned about the same sort of things? Like, if you're dealing with a bunch of
[01:59:08]  isolated islands, essentially, even if you write your app generally as one consistent app, but if from a stateful standpoint, you have these isolated, smaller islands, are you
[01:59:20]  concerned with unidirectional flow as much? And how global state management and how global state management works and actions and like all the mentality that made react strong at the
[01:59:31]  beginning in Redux? Like, I'm not, I'm not sure. Like, does this actually, is this shift so big that it actually changes what we value in
[01:59:45]  terms of what API design looks like? Like, because potentially, if you can bank on there being a server, which is back to the beginning of the conversation there.
[01:59:59]  Do we have a new native, like a new concept of what the baseline for a framework or building UI interaction is? Like, does it, does this just change our
[02:00:14]  perspective on, on what's, on what's valuable? Honestly, I'm not sure, but those are questions that I kind of, I kind of want to answer
[02:00:26]  because this, this, this seems really potentially changing. Yeah, I mean, but I mean, for sure, right, we state moves back into the, into the
[02:00:45]  URL to a certain degree. But it's like, it's, it's, it's, it's, I think that fundamentally changes what you value. Like, I
[02:00:55] 've seen a little bit of this on Marco, because on the Marco side, you're like, you're kind of like, people coming in, like, where's the
[02:01:01]  router? Where's the global state management? Like, we don't have it. And then they're like, oh, what a stupid framework. And then you're
[02:01:07]  like, but you don't really need it. It's, it's, I think this goes beyond that, though, a little bit, but I feel like that's
[02:01:15]  part of the reason why people have been working on MPA frameworks might have a better perspective on what actually is valuable. But, but picture it now, picture, like
[02:01:24] , I'm going to pull up Twitter again, or actually have Twitter here, picture, picture, picture this, picture this, this app, we did this nest on the
[02:01:38]  nested routing stream, right. And, you know, this is, this is one layer of the onion, like the whole pages, and then this section, or
[02:01:51]  then this whole section is another, like nested route. And then each of the tabs, like this content here, like the tweets, the tweet replies is another rest of
[02:02:01]  it out. So you got like three levels here, right. And like, how much does this change? If you can just like server render the feed stories, and
[02:02:17]  then just send the JavaScript for these buttons, essentially, like, like, and like, what if you had nested server components, like switch to here. Like switch
[02:02:31]  to here, and not re render the outside, but server render the in the inside content, like, there's just the amount of JavaScript you need just shrinks. Like
[02:02:47]  completely, and there should be a way to do this piecewise, like nested routing, whatnot, that, that you could keep the client sign transitions, you could you
[02:02:58]  could switch it even though this is these pages are being server rendered, you could actually like, have a nice animation, I mean, Twitter is not doing it, it
[02:03:05] 's jumping like crazy, but you could you could, like, this is almost an indicator that they don't have nested routing here. Do you know what I mean?
[02:03:12]  Like, how do I know Twitter doesn't have nested routing? But, I mean, they could just be doing a manual scroll to the top to be fair.
[02:03:27]  Yeah, maybe, maybe, maybe that's what's happening here. But the, like, essentially, like, this sort of partial model could keep that nicety of the
[02:03:40]  single page app. Oh, sorry, I'm not sharing my screen, you guys like can't see what I'm talking about. My bad. Can you see now
[02:03:49] ? Oh, sorry, that was like two minutes of me saying, okay, let me try this again. I forgot I wasn't sharing my screen. Static sidebar
[02:03:59] . I was just sharing my screen. I was just sharing my screen. And I was just sharing my screen, right, this whole large content section. So the first
[02:04:09]  layer is this, essentially, and its outlet is this section, and then this outlet is the feeds. Right? I'm so sorry I was, I got into my rant
[02:04:16]  without showing the screen. But you can picture what I'm getting at is picture if these tweet pages were server rendered. Like, with a nested router, you could
[02:04:30]  maintain the state of the top part of the app. And then you could basically render all of this stuff on the server, and only send the JavaScript, maybe for these interactive
[02:04:44]  buttons, so to speak. And then you could actually make it a little bit more. And then you could make it a little bit more, but you could actually make
[02:04:52]  it a little bit easier, right? Like, and maybe lazy load the image viewer or something. Like, you could reduce so much of the JavaScript on this page, yet
[02:05:01]  still maybe make a nice transition as you change the tabs. Because this part stays in the browser, and this part is server rendered. Like, it's, it,
[02:05:14]  I think this is, like, how much actually is even stateful in a really app, appy page like this, like, where you have all these points of interaction
[02:05:28] , how, how many pieces are actually static that we really kind of never need to render again in the client? If we, we could do this? Um, yeah
[02:05:41] , I'm really sorry. Like, like, if you were at a point where you were really only thinking about these interactive buttons, then like, the depth and the scope
[02:05:57]  of which you need your clients side interactivity to work is, is very, is very different. Um, I think. I mean, some, some snide person
[02:06:05]  is going to be like, you can already do this with web components. And, like, sort of, but like, partial hydration and, or sorry, no, sorry
[02:06:18] . Hydration and web components is a whole other fun beast with declarative shadow DOM and figuring all that kind of fun out. And the be fair, like, you still
[02:06:28]  need all the architectural pieces I'm talking about to do this. Web components actually, in a sense, in a sense, they're nice because they're like little islands
[02:06:35]  that you could put on static HTML, but what we're talking about goes so much beyond that. Um, so it's not, I want to be clear this. I
[02:06:45]  don't think current solutions. I don't think current solutions are going to be clear, but I don't think current solutions are going to be clear. I don't
[02:06:52]  think current solutions are going to be clear. I don't think current solutions are going to be clear. I don't think current solutions are going to be clear. I don
[02:06:57] 't think current solutions are going to be clear. I don't think current solutions are going to be clear. I don't think current solutions are going to be clear. I
[02:07:01]  don't think current solutions are going to be clear. I don't think current solutions are going to be clear. I don't think current solutions are going to be clear.
[02:07:07]  Yeah. So yeah, I don't know. I'm, I'm, I'm just thinking out loud. It's just, it's, it's, it
[02:07:17] 's interesting to see that. I think that the impact of a change like this is enough that it actually subtly changes everything. And you, I mean, if you want
[02:07:29]  to think of it on a smaller scale, many of us were around, like even the newer people around when react hooks came up and how that changed the way people build react
[02:07:36]  apps. And change the patterns. And on one hand, you know, I was mentioning in this new world, MPA people being more familiar on how the pattern should
[02:07:46]  work. Similarly, people who use reactivity were more familiar of how the pattern should work when react hooks came out and it wasn't like, it didn't quite match up
[02:07:55]  with that. And so that's probably a source of a lot of the friction these days. But I think, I think this is like even bigger of a change potentially
[02:08:04]  because the, yeah, like it's very, it's, it's like you're authoring an MPA, you know, like the old web. And it's
[02:08:20]  just nice. Like it just has the smooth transitions and all that. Yeah. I don't think there's anything out there like that today. So, huh. Yeah
[02:08:30] . I, I'm sorry. We kind of jumped on a tangent from talking about QUIC because obviously QUIC is a framework that's showing a lot of promise. It
[02:08:40] 's, it, it, it, it hasn't even really even gone to that stage where it's looking into these things yet, but looking at the commonalities between.
[02:08:48]  All these different approaches. It feels like they're driving to a certain place that I don't know that the typical SPA frameworks are even thinking about. Like I
[02:09:01] , I, I got to catch up on Vue or Svelte or see what they're, they're working on because it seems like it's in a very different
[02:09:08]  zone or thinking. like, like next JS knows what's up sub from react teams now working on next JS. So like they're building a meta framework around this stuff
[02:09:18] . I think it's pretty obvious that if, if your default thinking is you need server rendering essentially like that you've changed the framework. So like server rendering,
[02:09:27]  like to be fair reacts for components don't use server rendering, but if for that experience you essentially are like server rendering is a, is, is like a first tenant.
[02:09:36]  Um, then, um, yeah, it does kind of push you towards, um, having meta frameworks. And I think everyone's on the right page on that side,
[02:09:46]  you know, Svelte and Svelte kit, you know, react with next or whatever. I think everyone's kind of on the right thinking on that side.
[02:09:54]  It's just, yeah, are, are we in for, for a change in front end that we haven't seen in more than a decade? Maybe. All right
[02:10:09] . I could theorize more and more, but I honestly, I, I think there's, I think there's, I think there's more stuff to figure out.
[02:10:17]  If anything, all of this just makes me more excited to, uh, to, to see Marco six come across the finish line and to look at the future of what
[02:10:26]  we're going to be doing with solid coming up because, uh, you know, we're also working on our own meta framework. And I think, you know,
[02:10:37]  obviously that's going to resemble Svelte kit and remix, but I think, I think there's a longer term objective here. You know, if we can recognize
[02:10:46]  that, um, there is this world, it doesn't offer an interesting question because someone mentioned earlier, there are client only apps. Um, and I wonder if there
[02:10:58] 's going to be that big of a difference, uh, like going from the server ex focus experience to the client experience. Will we be able to make that feel seamless
[02:11:11] ? It's, it's kind of interesting to me because like to a certain degree, like react server components feel like they almost wrote a second framework that wraps their original framework
[02:11:21] . Um, and I wonder how many of these experiences are going to feel like that and have that scalability. Um, they kind of, you know, kind of make
[02:11:29]  that seamless swap. Like obviously already showed the quick can client rendered fine. So maybe the model stays the same there. Marco, um, does largely too, but,
[02:11:41]  um, I, I think, I think that's interesting, you know, like stuff like server components, having rules might ultimately either. Well, it could be a strength
[02:11:52] . It could also ultimately be the thing that makes, um, it feel like there's two different types of react or whatnot. So I think this is all things for
[02:12:00]  us to evaluate and kind of consider for the future. Um, but, uh, yeah, I've enjoyed looking at each of Marco quick and react server components and kind of
[02:12:14]  really getting a feel for, um, the kind of impact or change that they're, they're suggesting. Cause I mean, stuff's always moving stuff's always working
[02:12:24] , you know, uh, you know, like Svelte kit is pretty, was a pretty hot thing a few months ago. And it's new and remix is doing
[02:12:32]  the really new, innovative things in terms of, uh, the way that they're handling certain patterns that have been there forever, but making them feel fresh again. And I
[02:12:42]  think, but I think this is, I think what we're on the precipice of is like a bigger sort of change than that. And I'm excited to see
[02:12:50] , um, how everything, how this all plays out in the end, but, uh, uh, I'm definitely, I definitely want to be a player in that.
[02:13:00]  So, um, uh, look forward to, to seeing some of the stuff we'll be building coming up. Um, anyway, sorry, long rant at the end
[02:13:09] , but, uh, if anyone's got any more questions or whatnot, I think, I think I'm good on the stream. It doesn't have to be the longest
[02:13:17]  stream. We, we, we, uh, we, we got a good dose of quick and, uh, got a, got a bit of a feel for it.
[02:13:23]  And we've talked about some of the future web devs. So I'm, I'm pretty content with myself here. So, um, I think I am good
[02:13:30]  to sign off. So thank you all for joining my stream this week. Um, I'm going to be, I believe I'm going to be, I've got
[02:13:41]  some, I've been working on some stuff. So we'll see. I'm hoping to, uh, probably write, write an article about quick coming up here pretty soon
[02:13:50] , kind of tied together a lot of the thoughts. Um, there's a couple of things that, you know, um, that are coming soon and quick and kind of
[02:13:57]  fill some of those gaps. So I might wait on that. Um, but otherwise, yeah, let's, uh, let's all meet up next week for whatever
[02:14:04]  stream we'll be doing. I, I haven't, I haven't quite decided what that is, but interestingly enough, it seems like every week there's something new and
[02:14:12]  something interesting. So, uh, have a good night, everyone. And until next week. See ya.