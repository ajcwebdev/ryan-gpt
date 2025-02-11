---
showLink: "https://www.youtube.com/watch?v=2bkuEIa3Nwk"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Strict Mode in SolidJS?!"
description: ""
publishDate: "2023-04-01"
coverImage: "https://i.ytimg.com/vi/2bkuEIa3Nwk/maxresdefault.jpg"
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

[00:00:00]  Hello everyone and welcome to my stream today, it took me a moment to actually figure out what I was going to stream today, I have to admit. This one wasn
[00:00:13] 't particularly pre-planned, it actually just came out of an idea I had after seeing the response to a tweet I did this week on Twitter. So yeah,
[00:00:29]  let's give everyone a few minutes to join on in and say hello. I see some people already in the chat talking about the thumbnail. Yeah, I don't know,
[00:00:41]  last week I did one of those kind of expression thumbnails, this week the thumbnail very very inspired, as you can probably tell by Theo's thumbnails, right down to the white
[00:00:55]  background and drop shadow type thing. So a little tribute to Theo on his birthday actually, today's Theo's birthday for those who don't know. So, yeah
[00:01:08] , no, people seem to like it, so yeah, we'll keep that rolling. Let's tell people that we're live. I don't know what's going
[00:01:18]  on today, I know there's a few different streamers streaming at this time, I don't know if we're going to have any scheduling conflict, but, you know
[00:01:26] , we are where we are. So, hey, how are you doing? Let me see here and I'm going to share my screen. All right. Yeah
[00:01:49] , this should be fun. I'm going to be getting into some live coding hopefully today, so that's going to be good. Oh, this is cool, too
[00:02:01] . I don't know. They're going to implement React server components in Astro today, right after the stream, in fact. So, looking at the timing here
[00:02:14] , 5pm, yeah, it's almost like they timed it so that their stream would start exactly when we'd be done today. I don't know if this is
[00:02:27]  just smart planning, you know, so, yeah, there's definitely a path here, but it looks like Ben and Dan are going to be talking React server components in Ast
[00:02:41] ro this evening. So, that's pretty cool. All right. Sorry. Let me get back here. All right. Sorry, I was telling everyone that we're live
[00:02:53] . Anything else interesting happen to anyone today? Should we expect to stream every Friday unless you announce otherwise? Generally speaking, that's how it works. I stream every Friday
[00:03:10]  at this time. I've had gaps, and mostly I've announced every one pretty much. So, yeah, this has been my time slot for, I mean, since
[00:03:22]  I moved to Netlify. I used to stream later, like at 8pm Pacific, but for the past year, every Friday pretty much. So, is
[00:03:40]  Theo live already? I didn't see him there. No, Theo is not live right now. Maybe a bit later. It's so funny. I'm in his Discord
[00:03:58] , and I did not see any announcement for a stream today. Watch it. Watch it literally have just been announced just now. Now. All right. That's all
[00:04:09]  good. We're going to just keep on doing what we always do, which is hit people with the framework dev content. All right. All right. There we go
[00:04:33] . Sweet. And it's all good. If people want to go wish Theo a happy birthday on the stream and do that, go for it. Yeah. But yeah
[00:04:47] , I mean, today, what are we talking about today? Right? We're talking about strict mode and solid. And what got me thinking about this, I've been
[00:04:58]  thinking about this for a while. We actually talked about this at the end of a different stream. all the conversations around signals that happened about a month ago with the pull
[00:05:08]  that all the react core team. The thing that really kept on hinging on with a lot of the react developer mindset was that they're really worried that they could accidentally lose
[00:05:19]  reactivity and not be told about it. And it was not very clear, you know, why you can just in a component body, say double count equals count times
[00:05:32]  two. And yeah, I started thinking about it differently because the problem is myself personally, I, and I've said this before, I generally want tools to get out
[00:05:46]  of my way. But, you know, I'm seeing this common trend of people wanting tools to get in their way, especially after learning about Rust from Greg from Lept
[00:05:58] os. So from that perspective, I was like, okay, let's entertain this idea. And that entertaining of that idea is what led to solid 1.7 and
[00:06:10] , and whatnot. Sorry. Who's forking Twitter right now? Is this about the Elon making the algorithm public? Oh man. I need, I need, I
[00:06:29]  need to collect this stuff. So when we talk about this weekend and JavaScript, let me, let me just open this in a, in another, in another tab. Let
[00:06:38]  me get Twitch going on in the background here. Cause I can't copy any good links out of stream yard. Um, Oh, it looks like prime is live now as
[00:06:47]  well. Yeah. Apparently everybody wants to do this, the stream at, at our time today. Usually primes a bit earlier, but you know, Hey, it
[00:06:57]  is what it is. Um, yeah. Channel. All right. Get rid of the feedback loop. Okay. Let me see what Matthew Phillips is up to. Oh
[00:07:21] , okay. Yeah. That's fine. We can bring that in, in a minute. All right. Have I wasted enough time yet? Yeah. What, what,
[00:07:33]  what is prime doing right now? Is that what he's doing? Is he, he going through, um, is he going through the open source code? Yeah.
[00:07:47]  Whatever. Not going to worry about that. We got our own topic today. Um, as cool and as exciting that as that is. All right. Yeah. Um
[00:08:09] , yeah. I like that. Where is it? Open source and in quotes. Yeah. I mean, I don't know. It's funny. Open source has a
[00:08:18]  different meaning to different people as well. Um, there's like a huge, huge difference that I want to point out to people. The difference between open source and open governance
[00:08:25]  is like, just on a side note, like completely, um, completely different concepts. Um, but yeah, what beverage am I drinking? Honestly, it's just
[00:08:38]  orange juice. I, I, I, I love orange juice. Um, it's not spiked with anything. When I had the later streams, it was a little
[00:08:45]  bit of a different story, you know, but I poured this orange juice for about 11, five to 12 my time. So like, it's not even noon yet
[00:08:56] . So I, there's, there's no hidden vodka or, um, rum or anything in here. This is just orange juice. It's, it is 5:
[00:09:07] 00 PM somewhere. Yes, it is 5:00 PM somewhere. All right. All right. All right. Yeah, no, I, I figured today was going to
[00:09:21]  be a bit of a split bag on that, but, um, this because of, you know, today apparently is a good, good day to be streaming at noon
[00:09:30] . Okay. So yeah. How do I, how do we want to get started here? Let me, let me get Excalibur open in the background and actually
[00:09:39] , you know what? I want to, I want to start by talking about something that I would usually put on this week in JavaScript, but I want to talk about specifically
[00:09:49]  this tweet. Um, and let me share my screen and get ourselves up here. I'm going to start here. Orange juice and whiskey. I mean, if,
[00:10:03]  if, if, if we really want that, I mean, there is, there is this and maybe this. Again, I, this is just my laziness.
[00:10:15]  Um, uh, the, I was on a podcast recently, uh, which they sent me two bottles of whiskey to, you know, as part of being on that podcast
[00:10:26] , the whiskey and whatnot podcast. Yeah. Apple juice and whiskey is a better, is a better combination. Yeah. Um, but yeah, it was, it was
[00:10:35] , it was definitely a fun time. Um, shots, shots, everybody know what kind of stream is this? Um, um, but yeah, no, uh,
[00:10:47]  it's just orange juice. I swear it's just orange juice. Uh, yeah. Yeah. Yeah. 10 PM here. Yeah. All right. Yeah. Good
[00:10:59] . Everyone's in a good mood then. Okay. Good. Good. Good. Good. Okay. Good. Good. Good. Good. Good. Okay. So
[00:11:13] , uh, yeah. Where are we, where are we starting at? Um, yeah. Interesting for me is it's actually, it's actually most of our viewers right
[00:11:23]  now are coming in from Twitch, not from YouTube, which is interesting because YouTube actually had a lot of people, uh, waiting for the stream to start. So, you
[00:11:31]  know, that's why I like wasting time at the beginning, but I've already wasted my time. My allocation's done. Right. We have to start talking about
[00:11:40]  actual real stuff at some point. I know there's definitely streamers who can sit there and just sit there and talk to chat for like two hours, but, um,
[00:11:48]  that, that comes later. Let's, let's start stuff. All right. All right. All right. All right. Let's, let's, let's jump
[00:11:57]  in. Okay. So I'm just going to start here before we do anything else. Cause I, I posted this tweet and I knew what I was doing. I
[00:12:10]  have been ever since like the, this idea of like making solid stricter to help people kind kind of got in our head. I've been waiting for this moment
[00:12:21] . And this was, I opened up a solid playground. I mean, I can do it right now. Right. And it's funny, I guess our def let
[00:12:32] 's reset the template. I wonder if this is a, okay. Yeah. For some reason I, I did, I didn't have the version with the type.
[00:12:42]  Okay. So I opened solid playground and I did this and I saw that line turn red. Um, which is really exciting for me because, you know, it's saying
[00:12:53]  that an access serve type number is not an element, um, which is a long time coming. Um, and I wasn't expecting it cause sometimes I do a solid release
[00:13:03]  and the playground doesn't see it for like a couple of days. I just happened to open the playground and it, and this, you know, what I was just
[00:13:10]  playing around and I was greeted with this. So I got really excited and I posted that on Twitter and funny enough, a lot of people seem to, um, I don
[00:13:19] 't even know if everyone's even familiar with solid, but definitely got a lot of attention over this silly tweet. And, you know, obviously people asking about the different mechanisms
[00:13:32]  of which like you can do this. And like the truth of the matter is this is a really weird scenario in that. Can I show you something? See, this
[00:13:42]  is aired. The counter is still working. Okay. And the problem is solid has to work that way. But the unfortunate part is people start using, using solid and they
[00:14:01]  don't, they don't, call the count the first time. And then they go make, you know, another component. And then they go, Oh, should
[00:14:09]  I be passing the signal or the value? And it leads this whole chain that I start looking at end user code. And I'm seeing, I'm seeing people doing stuff
[00:14:18]  like this, where they're just like, I'm just in line something like, Hey, and in the component button. And that component button has no idea what's
[00:14:31]  going on. It, it, it's not expecting a function, but people are passing stuff in like this. And I, I, I, I, a bug was
[00:14:40]  open on solid repo about this. And I was just like, what's going on? You know, like, why do you think that? Uh, like the suspense
[00:14:50]  component wants to accept a random function coming in. And people were like, well, the typescript said it was okay. But I'm like, that's just like,
[00:14:59]  what does this even mean? Um, like, especially this one, this one always got me is like, what, what, what does this, what does this even
[00:15:06]  mean? Um, right. Like, like from a react sense to, especially you're kind of like, can a button have a function child? So like it was this
[00:15:24]  order of stuff. And I realized because solid, unlike other, um, some of the more like straight forward, I guess, approaches to templating wraps expressions for you
[00:15:35] . Like the thing is, look, I can show you really quick here. Look, I'm gonna put count in here back. And when you look at the compile output
[00:15:44] , it just insert count. Where did your function call go? I actually compile away the parentheses. Um, see just insert count. There's, there's no parentheses here
[00:15:55] . Um, if there was, and so like the, this is kind of why it works. Um, it, it, the funny thing is if it was count
[00:16:06]  times two, then we obviously need a function wrapper and we pass the function through. But I just wanted to kind of point out that because the way solid works, we have
[00:16:15]  to support it, but, um, to support like dynamic control flow, because the only way to like this insert is an effect. Okay. So like the only way
[00:16:25]  to have like some kind of computed thing, get to the effect. You have to track it underneath the effect. That's how reactivity works. Right? Like you have
[00:16:32]  a create effect. Like you have a create effect. And you know, if I just go create effect. And I put count, I go console.log count.
[00:16:45]  Right? I go back here and we make sure that we add create effect to our imports. Right? If, if we do this. All right. And remember it
[00:17:00] 's times two right now. And we click on the button and we're going to see the log count up in our screen here. Right? But what I'm getting
[00:17:09]  at is if you did this and just made this, let's make it C and outside here went const C equals count. Our ESLint tool actually couldn't point
[00:17:22]  this out to you, but what I'm getting at is this, this no longer updates the console log because you are not accessing it under the effect. In the same
[00:17:32]  way, if we didn't support passing functions into the JSX, it'd be like doing this. Like we wouldn't be able to get the reactivity into the effect
[00:17:43] . Yeah. And I, and there's a whole bunch. There is a whole bunch of side effects of this. And people go, okay, maybe I should pass
[00:18:00]  signals down. And I don't want you to generally pass signals down either because then you're like in a whole other world of things where like now everyone has to pass a
[00:18:11]  signal down or you need accessor or actual value, like accessor T or T. And the way we do this by passing values is you don't worry about neither on
[00:18:24]  the authoring of your component or consuming component, whether the thing's reactive. Like if, if, if you treat everything as if it were reactive, then the right
[00:18:36]  thing happens. Like if you need something, if you're authoring your own component and you need to be reactive, you're going to access it in the right place.
[00:18:43]  And if you're consuming that component and you don't pass the reactive value down, it's okay. Cause you have no expectation of that updating because it can't.
[00:18:53]  So like this is, this is, this right from the beginning tells you, you should be passing the value. It's a very big indicator that, Hey, this isn
[00:19:07] 't, you know, where you want to be. Um, okay. It's funny. My red, my, my red squiggly disappeared for a moment. Okay
[00:19:13] . Yeah. This isn't where you want to be. If you had count inside a reactive element without parentheses, would it be reactive? Um, generally speaking,
[00:19:29]  no, um, like in an attribute or something we use, it's, we use the, um, we use the print that that's the other thing. Like there
[00:19:41] 's a difference between saying, let me use something here. Text content. Let's just, instead of actually, um, there's a, there's a dom property
[00:19:49]  called text content. So instead of doing that, let's put count in here. Okay. So let's not use the children. Let's, let's put it in
[00:19:56]  here. See, you're, you're, you're, you're passing a function, right? You have to call that function and then you should be good. Of
[00:20:08]  course, what's going on here. Oh, it's, it's, it's, it's, it's cause of there's like invisible. It's fine
[00:20:20] . Okay. So what I'm getting at is there, this is what you expect. You pass a function. It's a function, right? This is the kind of
[00:20:31]  consistency that, that drove this change. And it makes it really clear what to do with solid. When you are inside a component, call the functions. Don't worry
[00:20:42]  about it. Treat all your props. If they could be reactive, you're done with it. So when you're not using JSX, you have to do it anyway
[00:20:55] . Yeah. I'm not even worried if you're not using JSX. Yeah. We could just leave the ESLint squiggly, but, and we do
[00:21:08]  have a linter. The challenge I've had with the linter is the linter is a little over eager. I like that this is like straight up, like
[00:21:16] , no. Um, right. And the reason for that, it's not that we can't make elements that accept functions or sorry, components that affect functions. It's
[00:21:27]  just like, this thing isn't expecting a function. The problem was, uh, people, I don't know if people know too much, but like the way JSX
[00:21:35]  and TypeScript works is you have like a JSX element and everything possible gets assigned to that element. And for solid when I started, I was like JSX element
[00:21:44] , any essentially, like I just defined it as any. Cause if you think about it, there's a whole lot of things that that JSX element can be. It
[00:21:52]  can be obviously strings or numbers, like things that can be converted to strings. It can be undefined or null things that don't get inserted. It can be functions
[00:22:02] . Like I mentioned here that return strings or numbers or undefined. And it can be arrays of those or functions that return arrays of those. So it's not
[00:22:15]  quite any, but as a starting point, any was actually made a lot of sense. Um, I've over time been like, no stricter, stricter
[00:22:24] , stricter. Cause like, yeah, sure. You can always cast it if you need to. But like the D like the, we, the default experience
[00:22:32]  here should be like, do this. Like you don't have. Yeah. Even if something works, it's not, it doesn't work consistently. It's, it
[00:22:41] 's a artifact of the system rather than like the, the developer experience of the, how you should be authoring stuff. This slightly more strictness suddenly guides you into
[00:22:53]  doing better patterns. Like, do the need for a hide show is because you don't have virtual. Right. Yeah. Yeah. But to be clear, it's
[00:23:11]  not like a compiler thing. We don't have special components. Like, like we have like, like it's, it's because we want to memoize the, the
[00:23:23]  cost of creating elements. Right. Like this, this is kind of, yeah. Like I think I showed this before, but like you can, you can always,
[00:23:33]  I think I did this last stream, but you can, you can be like, I mean, you, I mean, I don't know. You can use dot map
[00:23:41]  in solid. It just, if you, what does the map do? Whenever anything changes, it reruns the whole thing. There's no early exits, you know,
[00:23:51]  without memoization, it recreates all the children. We don't want to recreate all the children. So we have a special map function. We just wrapped in
[00:23:58]  a component component for convenience. The red squiggly is TypeScript. The yellow squiggly is ESLint. So like we actually have both here, which is kind of
[00:24:10]  useful because if I squiggle myself back here to my original example, you'll see them both on top of each other. Let's refresh. And what you're going
[00:24:22]  to see here is the TypeScript is type accessor number is not assignable to type element. And then the ESLint says the reactive variable count should be called as
[00:24:30]  a function when used in JSX, ESLint solid reactivity. So we do have both. But as I said, I want to attack this on a much
[00:24:39]  more fundamental level. Yeah, the reason for the four component and the funny thing is like in theory, though, it's not very important, you could improve reacts list
[00:25:00]  performance by using a memoized loop as well. I forget who it was Adobe did that Adobe has like four components for React. So like this is something we do kind
[00:25:15]  of more necessitated, perhaps like but like if you want more performance, you would you would do the same stuff. Okay, fair enough. Okay, good to know
[00:25:27] . I think the reason that they can't they don't error for ESLint plugins is because you can get a lot of false negatives here. But this is right on
[00:25:36]  topic of what I want to talk about today because you start going what's the role of TypeScript? what's the role of ESLint and what's the role
[00:25:44]  of like strict mode, so to speak, like a runtime mechanism because TypeScript you usually shouldn't be overriding. It should be like the as close to the truth
[00:25:58]  or the truth you want to, you know, give people as you can. But ESLint, you can be like rules can be bent, you know, like
[00:26:07]  React has a ESLint rule about not empty dependency arrays. But the truth of matter is there are use cases where you want empty dependency arrays. This is this is true
[00:26:16] . And you just go ESLint be quiet. Right, you wouldn't want a runtime error for that. And I like I don't think TypeScript on its
[00:26:27]  own could solve that problem. And that's where kind of level lint is. The interesting question is if you have lint, and you have TypeScript, do you
[00:26:38]  need more? Do you like is there a value in coming up with a mechanism to at like runtime or debug or test time to actually say, hey, you're doing
[00:26:49]  something a little bit, you know, not maybe, you know, you shouldn't. And be almost stricter than you need to just to guard for the potential of
[00:27:01]  people abusing it. Yeah, that was my mistake. It is warning versus error. But TypeScript, it's always an error and ESLint, I guess
[00:27:18]  you have the choice. So like, yeah, it's, it's, it's, it's interesting, right? This whole shift of mentality towards like, what
[00:27:37] , how to break stuff along the levels. And I will say this, I think this was a little aggressive from a TypeScript point of view. But there was like
[00:27:48]  a middle ground where we basically forbid this, but still allowed this. Sorry, it's actually forbid this to be more accurate. We, there's a version where I forbid
[00:28:08]  this, but, but allowed this. And the re the way we could do that was basically make signals or memos special and it'd be like, look, JS
[00:28:19] X can be functions. If they're tight, like if they're actual type accessor, otherwise, um, not. So basically make accessor special. And I
[00:28:30]  hate that less than, um, saying like is signal, but it's verging on that. Right. Because the thing is with TypeScript, you can make, you
[00:28:41]  know, any function that returns a value and accessor. So at least by indicating, Hey, this is an accessor that's for, that's the type of
[00:28:49]  this. Like if you look count accessor number, um, then we could set it up that JSX accepted accessors, but not normal functions. I, I
[00:29:00]  just didn't want to draw that line because I was like, like the value of this, just like, Hey, it should be a value felt so important to me.
[00:29:13]  So we went a little stricter on TypeScript than people might, um, you know, have thought we'd go, but ESLint clearly has its role.
[00:29:25]  TypeScript has its role. Um, you know, do we need to do, do, do we need to do more? Because the thing is like, uh,
[00:29:36]  it's kind of interesting thing about these, the zones on these solutions. Cause like TypeScript is kind of like absolute with a zone. ESLint, um, is
[00:29:47]  a little bit grayer. Sometimes it's false positives. Sometimes it misses stuff within what it can analyze. And then the runtime part of it is indisputable
[00:29:58] . It's like, this is the truth. We know in situations we can't even statically analyze. Um, so where to draw the line and bucket it is probably
[00:30:10]  the most important initial kind of thought. So the funny thing is I'm okay with the TypeScript stuff. I, you know, we've saw the tweet, you've
[00:30:18] , you've seen this. That's a good place. We can just kind of like lock that in and be like, okay, that's a good, that's
[00:30:24]  a good place to be. But it's more interesting of like what ESLint misses. Um, that TypeScript has, can't have an opinion about, but
[00:30:34]  that could be, um, caught at runtime. That thing from ESLint to runtime. That thing from ESLint to runtime. Cause like, you already saw
[00:30:40]  this. When I, when I called count out here, ESLint was like, hey, count should only be used inside JSX, right? Or event handler
[00:30:50]  or should be ignored, but it is still smart enough to know that this is okay. Um, so maybe ESLint is enough, but I wanted to start toying
[00:31:09]  with the idea of, um, what else could we do at runtime that could do more? Like here's another one. What if we, what if we destructure
[00:31:21]  some props? TypeScript is going to complain here. Um, let's see here. Yes, Lint actually complains too. We actually, this one is an error
[00:31:34] . This is not TypeScript. It looks like this is like, this is TypeScript data is okay. Let's, let's, let's put data right here
[00:31:41] . Data. Um, let's, let's, let's give it data is a string. Okay. Let's. Um, let's, let's, let
[00:31:48] 's give it data is a string. Okay. Let's. Destructuring component props, break solids reactively. Use property access instead. So like, yes,
[00:32:02]  yes, Lint covers a pretty wide range of stuff. It will tell you that, Hey, you shouldn't do this destructuring thing. So like, I
[00:32:14]  am still kind of playing around with the idea of like, is Linting enough or like, should we take this to another level? Right. So what's chat
[00:32:27]  saying here? I think it's like a size cross code base. Right. Yeah. The, the, the, the, the, here's the, here's
[00:32:51]  the, here's the funny, funny thing. Right. See strict mode is, I mean, it's funny. Maybe I'm not supposed to say it and then like
[00:33:01] , just get everyone hyped about it. And then not, uh, like spell it out. It's a little bit of a, like a little to the library maintainers
[00:33:11] . Like, because here's what happens when you introduce strict mode. You're right. It's, it's, it's, it's opt in, right.
[00:33:21]  And it usually gets opted in at an app level. So if people start using strict mode and then your library isn't strict mode, then they'll be like, Hey
[00:33:35] , you should change your library to adhere to strict mode. Basically what strict mode does is it lets the end developer make the choice of whether they care, but forces all
[00:33:44]  the library maintainers to have to write everything in a strict way. Right. Yeah. Yeah. Yeah. Yeah. Yeah. You know, that's, so like
[00:34:04] , is strict mode good? I thought it was a foot gun. Yeah. No strict, strict mode has its purpose, right? Like people, here's the thing.
[00:34:14]  We're going to design out what we think a solid strict mode should look like today. Cause it's not going to be the same as we have different concerns than react.
[00:34:20]  Our components don't re-render. So like, I mean, straight up first thing, our strict mode won't involve console logging stuff twice. I'm just,
[00:34:28]  I'm just putting it out there. I, I see no reason to console log stuff twice for our model. It just doesn't make sense. Um, but there might
[00:34:38]  be other things we want, you know, we'd want to do. Um, which library? Sorry. I, I missed something from the conversation. More like
[00:35:01]  strict mode guide you towards correctness, but sometimes correctness is annoying and unnecessary. So yeah. Yeah. Yeah. Yeah. My thoughts on JS docs. Like,
[00:35:24]  you know what? I think the stream today is going to make Rich Harris's point because how we, my idea on prototyping this is going to be, is kind of
[00:35:32]  a mess. Because I'm going to like build the app like solid, like a prototype version on my machine. And then because I'm like too lazy to like set
[00:35:40]  up an environment for it. I'm going to use stack blitz and we're going to be copying code back and forth between stack blitz nodes modules and my local build
[00:35:48]  to kind of play around with how this works. And, um, the whole argument for JS docs from Svelte was that Rich Harris just wanted to like go into
[00:35:57]  the node modules. Like when he's having, when there's a bug and he's debugging it and he figures it out and he's like, okay, he wants to
[00:36:03]  be just like sitting there running the node modules and be like, okay, good. Okay. I have the package here. I'm just going to commit it. Like,
[00:36:09]  he's like literally like just do the work in line in the node modules and then commit it up to GitHub. Um, like, and just like be like done and
[00:36:19]  done, you know, just pull the tooling out of it. And I, I, I, I, I can respect that to a certain thing. I've just,
[00:36:29]  it's funny. Like I was never a typescript person. I liked coffee script, got JavaScript and then it's like typescript and whatever. And then like, I
[00:36:39]  I've written some of those docs comments, but I have to admit, I mean, I also use flow a bunch with react native back in the day. I don
[00:36:46] 't, I really don't like, I mean, I guess it works into documentation. Cause GSDocs, like you write this, that stuff too. And you
[00:36:55]  like describe the function and you do that. It's just like, I don't know. It's, it's interesting. Cause like for an external API surface, I
[00:37:07]  like that internally, I'd rather just kind of like smudge a bit with the types, just like make it work. And like GSDocs almost seems like
[00:37:15]  more work. I know like people tell me it isn't, but it feels like even like, it just feels like there's like, I don't know. I don
[00:37:23] 't, I don't mind writing typescript the language. Yeah. Yeah, yeah, exactly. It's not like reacts. It's there with a console logger
[00:37:33] . It's because they want to, they want to make sure you don't make side effects that don't clean up after themselves. So they, they mounted and unmount
[00:37:42]  it to just to like prove the effects are, are, um, you know, like that they clean up and that's respectable, but it only matters in a model where
[00:37:53]  like you can render things over and over. Like picture, I mean, okay. Effects could always leak in any system, but picture a system that's based on like
[00:38:02]  always re-rendering things. And then even re like the thing is with react and like normal rendering, you look at those dependency rays and you go, okay, look
[00:38:14] , this hasn't changed. I'm going to skip it. So you like an effect that runs on mount or something. It's not going to like double run for
[00:38:19]  the most part, but when you start thinking of concurrency and split trees, the approach that react does is that they're like, okay, new V DOM or whatever.
[00:38:28]  Like there, there is potential for stuff that shouldn't rerun to rerun again. And they tell you that like, this is, this is something that can happen
[00:38:37] . So for that reason, strict mode is like a guard against the fact that like, it tells you if you're doing stuff, not great. Um, and it
[00:38:44] 's not because of just concurrent mode, but just because they don't want to place the guarantees that you can completely trust the, like the dependency arrays for whether something reruns
[00:38:55] . It's more of a suggestion. It's more of a suggestion. So this is their way of like being like, don't like trust that, like make sure
[00:39:06]  your, your code is sound. Uh, why does the structuring props rate reactor needs solid? Well, it's, it's the other side of this calling the count
[00:39:16]  as a function thing. It means that inside our components, I mean, I love the playground. Cause I can just show you, right? This doesn't work.
[00:39:28]  It's broken. There's no button component, but guess what? We can still see the file output. It's because this children becomes a getter. So we call
[00:39:38]  button pass this stuff in get children return count. So this still is a function wrapper. There is still a function happening here. So if this is get, if you dest
[00:39:49] ructure, you're just calling count out here and not inside your effect. That that's, that's essentially it. This data, if you destructure here, you
[00:39:57] 're, you're reading the reactive value up here instead of where it's used. This is why view, um, like any reactive library that's not built completely off compilation
[00:40:07]  for the, like the logic code has this issue. Um, because where you access the mat, the data matters. Um, and what I mean by logic code is
[00:40:18]  this is the only part getting compiled. This part is the same. If you see, this is this, you know, like we don't actually morph like our,
[00:40:31]  our reactivity is like runtime. So like we're talking about just like a GSX transform. So for that reason, this is why, um, destructuring
[00:40:40]  breaks reactivity. What is it? What is it? What is it? What is it? What is it? What is this? Like we're going to
[00:40:48]  run in Rust vibes. Yeah. Yeah. Yeah. Yeah. It's so funny. I like, are you guys all watching multiple streams at the same time? Is
[00:41:04]  this like people like in here, like half listening to what I'm saying and then like watching, um, you know, primogen, you know, I don't even
[00:41:12]  know what you guys are all talking about. Yeah, I, I can't see myself picking up, but you know, I've been wrong in the past.
[00:41:42]  Yeah. A lot of JS doc dislike here. Yeah. And this is a good way of phrasing what I was saying for it. To sense, you raise control the
[00:41:51]  bare minimum number of rebounds. There can always be more. Yeah. Can this be fixed by proxies? No, the proxies are the exact same property
[00:42:09] . Proxies actually have the exact same problem because proxies also are good. I actually covered this on a recent stream, but like proxies, like
[00:42:19]  you can pass the object through, but then like, you're not like, essentially this reactivity is based on reads. If you're using proxies to trap
[00:42:30]  the get, like the read at some point, destructuring is going to read it at a point that you don't expect. Like you don't like, don't
[00:42:37]  get me wrong. Like I could come up with an example. I don't know if I have to, you can destructure and have it reactive. As long as
[00:42:43]  the whole thing's wrapped in an effect. If you go create effect and then destructure bumps, just stuff inside create effect. It works. It's not like, uh
[00:42:51] , it just like destroys reactivity. Um, it, it changes where the read happens. And this is the main reason why, you know, we have a plugin for
[00:43:00]  this, right? There's a Babel plugin, like what is it Babel plugin solid on destructure, right? Here we go. Install this. And now
[00:43:13]  destructuring will work in solid and you won't lose reactivity. And as long as you annotate your components. And if you're using TypeScript, you probably
[00:43:20]  already are. Um, then you have a happy day. There you go. Done and done. So we're all happy. We're all happy. We can dest
[00:43:30] ructure. Um, you're like, why isn't this core, right? Well, it's not core because destructuring isn't the problem. The problem is like
[00:43:39]  this. If, if, if you picked up solid and started destructuring your props and it all just worked. And then you access it here, you know, you
[00:43:51]  know, and it didn't work. You'd be like, well, why, wait, why doesn't this work now? And it's because this is all the
[00:44:00]  same model. Destructuring props is just a side effect of the exact same problem is. You're, you're reading it at the wrong time that like, unless you
[00:44:15]  can prevent people from reading it at the wrong time. At every point, there's going to be inconsistency with it. Like, and by every point, I
[00:44:23]  mean, not even in this file, like reactivity doesn't matter, right? We can, I mean, I think I've shown this before, right? We,
[00:44:32]  we can, we can, you know, we can just go, let's put count in a different file. Let's put count in a different file. Let's
[00:44:38]  put it above the component. It doesn't matter. Right? Like, um, like this is not a, it still works, you know, like this, this is
[00:44:51]  not a, this is not something that's easy to analyze. Unless you had, you know, like a type system that went cross file, you built a compiler like
[00:45:00]  Marco. Like there are going to be places like static analysis cannot find the issue because like, this is not localized to the component. Okay. Maybe, maybe I like
[00:45:24]  went off on like the whole other spreading too. I think I had nothing to do, you know, not related. Okay. Okay. I'm just catching up on chat
[00:45:39]  here. Yeah. Right. So there's, there's some talk about whether like big T's or so it's on what's these points on the same scale.
[00:45:53]  Yeah. So like a lot of this is about, you know, the expense that author time, but the, and this is kind of the interesting point though, how,
[00:46:03]  how we're shifting things around because like, you know, to a certain degree, I used old type languages and I love JavaScript because I didn't have to freaking wait for
[00:46:13]  the like compiler. Like it really was like, you do a bunch of code and then it was all strictly types. So like, hopefully your code would run like,
[00:46:22]  like as long as your logic was good, which it wasn't always, but hopefully when you like had written everything, you could look at it and be like, you know
[00:46:28]  what, I'm proud of this code. It will be good. But then you'd be like, okay, I got to compile it. So you get up and
[00:46:35]  go make a sandwich and come back. I mean, I'm exaggerating about the sandwich. It wasn't like you had like four minutes for, I mean, it depends
[00:46:42]  on the size of the project, but like it was, it was at least 45 seconds, right? Where you're just like twiddling your thumbs. You go
[00:46:48]  flip over to Twitter or whatever. I wasn't on Twitter at that point, but like, you get my point, you'd go over and then get distracted there for like
[00:46:55]  two or three minutes. And then when you came back, like hopefully it was all compiled. Then you'd run it and be like, Oh crap, I forgot that thing
[00:47:00] . And then you go change it and then rinse, repeat. Rinse, repeat. Whereas JavaScript and like, you know, those kinds of things, like it was
[00:47:07]  instant. You do like change something, refresh, change, like, and you'd see the change right away. So like, it's, what's interesting to me now
[00:47:16]  is that we're working so hard to get back to a point where it's not even compile time. It's like authoring time. Like we're shifting even further left
[00:47:25] , you know? Cause like we want to be told of all our errors as we type them rather than like when we click build. Um, so we're actually shifting
[00:47:38]  things even further earlier in the process, which is interesting if those things are really expensive, because then there's a trust thing. If it's too slow, like it's
[00:47:45]  the whole thing. Like if hop module reloading is too slow, TypeScript is too slow. Then like, do we trust what we see or do we have to manually
[00:47:53]  do the manual refresh to make the decision? Um, it's interesting. So, I mean, for me, TypeScript is just a really, really good linter
[00:48:07] . It's not even really good. It's just like a linter. It's like a kind of automated linter where you don't have to like, like,
[00:48:15]  you don't have to like, come up with rules and static analysis. You can just kind of like trust the type system to a degree. Yeah. I mean,
[00:48:31]  I can, if you care about performance and like, that's what makes your thing go. Yeah. I mean, it's a very interesting choice. He wanted it
[00:48:37]  from a developer experience standpoint. And then now he's like, you know, like there's an overhead to it. You, you always build with them. The lower you
[00:48:46]  get in the abstraction, the closest you get to the bare metal, the more potential you have to get more performance out. You also have the more potential to blow things
[00:48:52]  up. But I think, again, this is why people like solid generally, right? Because you go over here and then you're like, Oh, like it doesn't
[00:48:58]  get much more down to the metal than, you know, clone this template, add some stuff, write an effect. That effect updates that one piece of text. There
[00:49:06] 's no virtual Dom or something. You just, you just see like, I know this, you don't see all this insert. It's a fancy create effect, but
[00:49:13]  like it comes down to like clone the template, add a click handler, create effect. Like, like, you know, and that's, what's interesting about signals and
[00:49:24]  stuff in general is because for all these abstractions that we make end of the day in the browser, we just want like a basic event system that can update that piece of
[00:49:32]  the Dom. Right? Like, like you, you peel away all the abstractions. You don't need like some heavy process. You just want to be like,
[00:49:39]  look, this piece of text updates. When I click this button, like, how do you get from like, whatever this is over here to like, just going point,
[00:49:49]  click update, update, update. Right? I mean, making your own frameworks part of the fun. Right? Here's the thing. A lot of people are going
[00:50:06]  to do it at various points. Nothing comes out of it. I don't, I don't think it's a terrible exercise that easily could have happened to me. Instead
[00:50:13] . I'm here, um, on Friday afternoon, talking to you all about cool problems you hit when you decide to go in. Because I'm perfectly honest, my
[00:50:23]  initial idea for the stream, this, I guess it was more yesterday when I was thinking about it, I was like, maybe I should just do a stream where we just
[00:50:31]  create a JavaScript framework from scratch, like all of it. And, and then like put in the JS framework benchmark and like show the performance. And I was like,
[00:50:40]  I was like, have I done that before? Because I did a petite views. So our petite solid stream where we basically implemented everything in the framework, except for like
[00:50:48]  the template parsing, which I got from riot. But essentially we built the control flow, um, like mechanism, the parsing, the logic, and we benchmarked
[00:50:57]  it. And we did the whole thing. And if you, if you, if, if anyone remembers, it was at the time, Inferno wasn't as
[00:51:03]  high up, but it was, it was, it basically scored on the JS benchmark higher than view. Like it was, it was somewhere around where Inferno was,
[00:51:09]  which is, uh, you know, about 10% behind solid at the time. This before they added warmups and Inferno, when they added warmups, In
[00:51:16] ferno got right up to solid, but it was, it was, it was, it was about like, uh, 20% slower than vanilla, you know, on
[00:51:22]  average. And, um, I was like, Oh, maybe we should just do that again. And the reason that I wanted to point this out is creating a library
[00:51:32] , just kind of going through the effort and getting it within that range. Like, uh, you know, you know, faster than all the popular solutions at doing basic cr
[00:51:43] ud table operations is something that can be done in a couple hours. If you know what you're doing, if you don't know what you're doing, it'll,
[00:51:49]  it'll take you a bit longer, but generally anyone can just go and go. Like, I'm going to create a JavaScript framework today and be like, look,
[00:51:56]  it's three times faster than react. Like that's like shooting fish in a barrel. Like that's not what this is about, but it's a good exercise. Cause
[00:52:03]  then you can, you can kind of see that and go, Oh, it's every other thing that comes afterwards where you like the support, all the different types of scenarios
[00:52:16] , all the considerations. Like that we're having on the stream about linting versus typescript versus, um, strict mode. Like there is so much more
[00:52:26]  than the mechanics of making something update in the DOM and give it like a declarative wrapper. Like that part's easy. You can do that in the first couple hours.
[00:52:35]  Um, so yeah, that would be my reason for demonstrating it. Funny enough, not, um, not for, you know, the, like, like maybe it
[00:52:48] 's to share about the knowledge, but more of this to show that like, that's not the hard part. That's the, that's the relatively easy part.
[00:52:56]  Is there a way to see compiled output in the editor as you type a component? We don't have like a VS code plugin, but like, like this is, this
[00:53:11]  is what our playground is doing, right? As I type this used, you know, you see it go around. If that's what the question, I don't
[00:53:18]  think we have a VS code plugin for that though. Gift subs came in. Okay. Sorry. Thank you. Couch potato or potato. Yeah. What it's elite
[00:53:27]  speak. Um, for the five gift subs, appreciate it very, very much. Um, and thank you for saying thank you for about the articles. Uh, so
[00:53:37]  I'm in stream yard when I stream, so I do not always see stuff coming through Twitch. So I do appreciate, um, AJ knows that. So he let me
[00:53:46]  know. Thank you very much. Um, I do appreciate, um, you know, and I'm sure all those people that you gave gift subs to appreciate not having to
[00:53:56]  wait through those Twitch ads that I'm terrible at. I just don't roll them myself. So everyone takes a hit when they first join on. The real fun is
[00:54:05]  making your own meta framework around these frameworks. Yeah. I mean, yeah, that's interesting. Yeah. Cause that's like a different sort of exercise. That's,
[00:54:16]  that's actually the frameworks themselves are very mechanical on like rendering or like DOM type stuff. Where meta framework, suddenly you have to be concerned with like the web as the platform
[00:54:28]  a lot more. Not about like the fact that if you set the data property on a text node, it's faster than, you know, swapping out the full
[00:54:38]  text node content or whatever. Like, you know, like it, it, and do you know what the tricky part with this is it's, it's even more,
[00:54:47]  um, emphasize what I'm talking about. Because when you, I'm talking about, you know, supporting all these cases, but, um, the frameworks API service
[00:54:54]  is usually kept tight. So, or sort of like the core framework is kept tight so that you can like make them adaptable and reusable, but you don't want to
[00:55:01]  like solve for everyone's cases because otherwise you'd be here forever. Meta framework has to solve for everyone's cases. So like, there's just so much more
[00:55:09]  of this kind of stuff. Like, you know, just random things like, um, I'm building on windows and the, some random Unix path is breaking everything in
[00:55:20]  my mono repo only when I'm learning using Lerna, but not when I'm using yarn workspaces. And you're just like, why do I have to
[00:55:28]  learn about this? Um, but you know, yeah, I, that it's own type of fun. Definitely. Yeah, it is cool stream. But I, as
[00:55:44]  I said, I feel like I've already done that. Like, cause we can literally build every part, right? We can build the reactive script, uh, system from
[00:55:50]  scratch. We can build a basic templating engine from scratch. We can put it all together. Like it's definitely doable within the time of my stream. It's
[00:55:58]  just like, yeah, if you watch my other streams, you'll, you'll, you'll know what's up. That's awesome. I'm glad you're
[00:56:24] , you're having a good time with solid and astro. I think it's a great combination that I, we continue to work closer together. The more we can learn
[00:56:30]  from each other and like do more. I, I'm, I'm very excited to see this. There's some great sites out there. Like people, people, this
[00:56:36]  combination is a thing. Um, I, I, you know, there, I'm so excited when more of these, like solid and this combination is like a little bit
[00:56:45]  newer. So you aren't seeing it as much yet, but this pairing is so good. Um, I think we're the second most used astro framework other than
[00:56:54]  react. Um, like, like, yeah, there's a lot of projects that are going to go into prod in the next like three to six months where we'll
[00:57:06]  be able to talk about it more. I, I only know a couple off hand, like Nord VPN and a few others, but like, uh, this is going to
[00:57:12]  be, yeah, this is a great combo. There you go. Like you're done. Right. Yeah. Yeah. Yeah. We actually have a tool in solid
[00:57:22]  start. We, where you can go to inspect and it actually will show you all the stages of compilation and like all the transforms, which are really cool. Um, so
[00:57:34]  like you go like your URL under slash underscore inspect and we actually tell you in the starting prompt, like just go to inspect. So you can actually, it's not
[00:57:42]  like as you type, but you can actually see the stages of like source code, how we get split up because of the file system router, how solid transforms the JSX
[00:57:53] . Like you can see each step and can go through for each file. How are we doing here, Chad? I'm, I'm not too far behind. Only a
[00:58:04]  couple of minutes, right? No. And this thing, cause dynamic, um, is a runtime component. It's not compiled. Again, we only compile the lower
[00:58:13] case letters to anything. The everything uppercase is just a normal component. So it is not the same. And that was why it was important for us to forward some
[00:58:23]  more props through the spreads mechanism. It's just tricky because spreads are inherently expensive. Um, because, and dynamics inherently expensive because these are both cases that we compiler can
[00:58:41] 't know ahead of time. Uh, Crestner actually signals a different thing. I'm not going to tackle this one right now, but I'm very excited to
[00:58:50]  tell you that this morning I was on a podcast with Ben Lesh. Um, and the whole joke there was like CEO signals meets CEO of observables. And,
[00:58:59]  uh, that should be coming out soon for .media and me and Ben just get into the whole observable versus signal thing. And, um, it should be uns
[00:59:10] urprising to anyone. We both almost completely agree. So, uh, yeah, do check that out. I'm not going to go down that path at the moment,
[00:59:18]  but yeah, it's going to be good. Okay. See now I'm just getting the general things come in. Do we get a rage? No, sorry.
[00:59:34]  This is what sometimes happens. Uh, how are we doing? Yeah. People are joining the stream. That's good. Um, what do you want my knowledge? Um
[00:59:39] , honestly, just looking at other tools and frameworks and stuff like at some point, someone has to be the one to go out there and collect this stuff. And when you
[00:59:49] 're a framework author, you end up doing this. I saw a great conversation with Avenue and Theo, uh, the other day. And it was definitely, you could
[00:59:56]  tell like Evan looks at other things as well. And the difference, I guess, or the thing that we have to consider is like, how do we turn that knowledge into
[01:00:05]  stuff that's like usable for everyone? And it was something that had to do with solid because otherwise people didn't understand why I was doing this. Right. So,
[01:00:11]  um, I guess it's to everyone's benefit. And the streams are example of this too, where I realized that, you know, arguing with people on Twitter, you
[01:00:20]  know, about these topics is way less productive than just creating educational foundation for people to actually learn about these things. So I get my knowledge from lots of places, but
[01:00:31]  a loss of engineering and like reverse engineering experience comes in. I can't give you a ton of articles. I try and link any articles that do influence me in my articles
[01:00:39] , but, um, a lot of times I'm the front of the funnel. So, um, yeah, I wish I was more helpful on that regard.
[01:00:57]  I mean, we, we, we do have solid templates. I don't know if they have linting built in or testing, I guess we have like with V
[01:01:01]  test. So it starts doing that. That's largely what we're doing with solid start too, is just working on getting these kinds of base templates. We realized the need
[01:01:08]  to get people on the ground starting up. Like it's, we have like, if you go on GitHub, you'll find template repos, um, obviously, but
[01:01:16] , and we have the official template repo, um, solid JS templates. But I haven't been looking at them recently. I have to admit because I have been,
[01:01:32]  I mean, what do you got? Yeah. With V test with windy tailwind, you know, right? Like there's a whole bunch of them because I've been
[01:01:39]  working on solid start, but yes, the, all the, the kind of base stuff you'd expect we got. All right. Yeah. Brain dumping. Yeah.
[01:01:52]  I mean, that's kind of what I do here. There's like this trickle down effect. I can't like, this is just what, what's going to
[01:01:56]  happen. We're going to talk a bunch. Someone ends up getting something really useful. I quite enjoyed actually, uh, Christopher Ehrlich from, you know, T3
[01:02:04]  community, like Theo kind of community thing. We had him on as a guest, you know, he, he watched my server component, um, stream. And,
[01:02:14]  and I think for him that was like, cause shout out to Ben Holmes and Dan, like yesterday doing a really good job of getting to it. It seems like each time
[01:02:24]  the Dan explains server components, it gets like a little bit clearer, but I was having some problems like the first, you know, and number of times of like them explaining
[01:02:32]  it. And I'm like, this is missing. So I made my stream. And then Chris was like, like that made sense to me. He's like,
[01:02:38]  he started making shorter, like five minute videos to like talk about the focus on the key points that were made and then put them in a way that was digestible.
[01:02:47]  And that's kind of the expectation here. I, I, I, I'm not, I'm, I'm just being a soapbox here so I can get ideas
[01:02:53]  off my head and we can move on and try stuff. And I'll, I'll, I'll leave the Polish content for other people who are actual trained educators like Chris
[01:03:05] . Yeah. Yeah. Yeah. Look for my stream on, um, petite solid. Um, another fun one, which is a little less detailed, but understand the
[01:03:17]  reactive stuff is look at, there's one that I take preact signals and then take solids render and jam them together. That's another good one too. But I'd
[01:03:23]  say the petite solid one, it's not one of my most popular streams, but we actually build a framework basically from scratch. Yeah, it's going to be a
[01:03:40]  bit, I mean, I'm not going to stress too much about how much more expensive it is. Like there's use cases you need to do this stuff. It's
[01:03:45]  just like, it's just not as optimizable as just doing stuff straight up. Oh, good. I'm just like catching up to people reacting to me and Ben's
[01:03:55]  conversation. Maybe, but we've been trying to do this for like a decade. Me and Ben actually talked a bit about this on this, on the, on our
[01:04:13] , on the podcast. Cause it's like the people have been trying to push a reactive primitive into the browser forever. And it just never just quite gets there to the point
[01:04:22]  that everyone's kind of dislike pessimistic for the potential there. But you could see that all the UI frameworks like need or want something. So it's like, can
[01:04:30]  we do it somehow? Um, I don't know. You know, like you'd think we would. It's all up here. Oh yeah. Yeah. I
[01:04:37]  mean, it's so hard. Cause I, I, I, I answer the same stuff a lot stream to stream. We had an implementation of something like the app directory
[01:04:43]  back in September. Uh, I just wasn't happy with the UX. So I like the D sort of the DX. So I kind of like put a hold on
[01:04:49]  and we, we had other focuses, but yeah. Um, we have a server component type, um, implementation. It's it's. I'm trying to think
[01:04:53]  of watch my solid 1.6 stream back in October that I did back in October. Uh, or was it November? Yeah. That stream. I showcase it off and
[01:05:01]  I think it's really cool. Um, and I think it's really cool. Um, and I think it's really cool. Um, and I think it's really
[01:05:05]  cool. Um, and I think it's really cool. Um, and I think it's really cool. Um, and I think it's really cool. Um, and
[01:05:09]  I think it's really cool. Um, and I think it's really cool. Um, and I think it's really cool. Um, and I think it's really
[01:05:16]  cool. Um, and I think it's really cool. Um, and I think it's really cool. Um, and I think it's really cool. Um,
[01:05:23]  when you take solid and apply that kind of paradigm, it's, it's, you feel it more on the small scale, which is thing like ultimately server components are server
[01:05:30]  components. But when you have a framework, that's already like, you know, only like a handful of kilobytes watching that happen the first time where you like load
[01:05:38]  up a page that, you know, is going to be like a hundred kilobytes next and it's 10 kilobytes. And it stays that way. Cause the
[01:05:43]  server components, you don't load more JavaScript. It's like, it's like, it's a real wow moment. Like you just go like, in reality,
[01:05:52]  when it scales, it doesn't stay, stay like that. But that moment when you're like, how can this be possible and be 10 times smaller? You know,
[01:05:59]  that, that it's, it's quite a feeling. Um, thank you Anthony for linking that through. Yeah. I mean, we got lots of projects coming in
[01:06:12] . I leaked some stuff in the discord. We'll talk about it more efficiently as time comes. Uh, there's, there's multiple tracks. I call it in terms
[01:06:18]  of the effort solid 2.0, the stuff on start and all, all, all of, um, some, some more stuff along the server component side are all three
[01:06:27]  avenues that were in parallel, investigating and doing work with members of the community and the team. So the way that all rolls out, I have a rough timeline and I
[01:06:39] 'm kind of threading the needle, but, um, I'll be able to update more later. The truth of the matter is start is the highest priority. Um
[01:06:46] , and that comes before 2.0. So that's, that's where I would be focusing first. Um, yeah, we, we don't want async
[01:07:02]  data loaders though. Cause that would be blocking. We could do async data in a way that it makes it unblocking, which lets it be a lot more
[01:07:09]  performant. Um, there's ways to block if you want to, but this is just much better. Um, but yes, I, I'm, my plan there
[01:07:20]  is I'm porting stuff from the hybrid server component router back into solid router so that we will be able to, um, we'll be able to hopefully support these
[01:07:31]  mechanisms beyond just solid start. Yes. I mean, start 1.0. Yes. But like these, these pieces are all like, there's, there's multiple things
[01:07:46] , so many things and different people that I can only do so much myself. So like the timing still hinges on, um, work that others are doing. Anyway,
[01:07:57]  how are we doing? People are still here. Have you all gone and wished Theo happy birthday yet? Okay. All right. Go to the next channel on our discord
[01:08:16] . That's where all the discussion happens. I, when I get more formalized, I pull into GitHub discussions, but if you want to like, be like bleeding edge
[01:08:25]  on it, everything's like in the next, uh, discord and actually look for the pin messages. You'll see my, my latest thoughts. Um, okay.
[01:08:35]  Cool. Yeah, that's true. Can't load. No, it's actually identical. I think there's a misunderstanding here. Salt start is the same router works
[01:09:07]  exactly the same way. Um, yeah, I, I don't know. Anyway, focus on that later. Um, biggest thing, slowing down. So I'll
[01:09:19]  start stable releases. We're, we're moving the core basis to Astro. So we're changing the underlying adapters and the progress on that depends on changes from the
[01:09:29]  Astro team, uh, like small pieces and are kind of re-imagining of how that part works. Everything from like the source folder up, like the code
[01:09:38] , your code is staying the same. I mean, I shouldn't say that there's some API changes I want to make that as we're learning, but like, it
[01:09:47]  doesn't have to change. If that changes, it's for a different reason, but the, we need to make sure that we get the stable core on the adapters
[01:09:55]  from Astro for like the deployments. So I'm just reading chat and like trying to understand, uh, if I'm missing something here. Yeah, I
[01:10:22]  mean, the, the thing is the FS part is a, is actually like a component that just gets inserted in. So to be, it's all actually solids routers
[01:10:32] . Um, so to speak, uh, like it's, it's not easy right now. It's not easy right now. It starts to use a different router
[01:10:40]  other than the at solid JS router, but you can just like not use the file system routing. Um, and use the solid router the same way that you would always use
[01:10:48]  solid router. Well, that's, that's the piece that I, when I, that's the server component thing, right. And that's the piece that it
[01:11:00] 's going to take a bit longer. I think there can be two phases. Um, mostly because, uh, we talked about the, I'll, I'll spend a
[01:11:08]  moment here before we move on, but we talked about this, uh, in a different stream a bit. It's, uh, reacts kind of the API that they
[01:11:19] 're giving. They're kind of betting on the fact that they can make the ecosystem bend to their will, which they can, but it's not there yet. So like
[01:11:28] , like, here's an example, async components. First of all, I don't, I don't like that solution for solid. Cause we can do better as
[01:11:36] ync blocking at a component level is kind of poor actually. Um, and it, it makes it awkward for streaming and where suspense boundaries set. But like, even to
[01:11:46]  do something similar where we can move the async into the JSX bindings and make it more granular, um, relies on starting up context again. So like you basically
[01:11:58]  need async local storage, which isn't supported in anything but node. And because for cell can support it on their platforms and kind of brute force it through with next
[01:12:07]  react and them like building solutions for next are like perfectly fine being like, yeah, we're just going to use that feature. And you have async components that just worked
[01:12:15] . But like it's, it's, it's, it's actually like the things like that are actually kind of challenging. just like even use server use client.
[01:12:25]  There's like, Oh yeah, we'll, we'll, we'll just put this out there. And then like every bundler will just fall suit because they need to
[01:12:30]  support react. I can't do that. So like I have to be on the, it's kind of like the same way how solid ended up with JSX. I
[01:12:39]  have to be like a little bit more conscious of the impact of react there because react can just go do whatever the hell they want. And everyone's just going to do
[01:12:46]  it anyways. I don't have that power. So I have to be smarter about how I approach the authoring and DX considerations, choose where to take on react conventions where
[01:12:58]  they make sense. And we can leverage that ecosystem that is basically there for free for us for the taking versus like trying to force something that, you know, could be better
[01:13:06] . But ultimately like who cares because who's going to like implement it other than the, you know, a couple of us. So that's, that's, that
[01:13:13] 's why islands and server components are taking longer. Isn't because of a technical reason as much as like, I need to actually kind of navigate through the, like all the
[01:13:25]  noise and cruft and stuff going on around react server components to put, to put our solution out there so that we're not like introducing a new standard that like no one
[01:13:34] 's going to support. Oh, okay. I got you. You're, you're, you want to lazy the, the date, the data functions. Yeah.
[01:13:53]  I mean, at that point, you probably just like wire it up yourself. Like, I mean, the file system router gets in your way, but like you,
[01:14:08]  you, you, you have the route and then you lazy, like the whole benefit of the data functions is that you don't have to lazy load them. That's like
[01:14:15]  basically the whole point of them. So if you like want to do that, then like, you might as well, like just not have data functions, make the root
[01:14:23]  of the route, not lazy, and then manage the lazy stuff yourself. Okay. So if you like, you might as well. And then you might as well.
[01:14:31]  As well. Yeah. Yeah. Yeah. Yeah. We, I mean, solid already does this. We are on each resource. You can just say like, make
[01:14:44]  this stream wait or not. Um, that, that I think it makes a lot of sense because the key part about streaming is about the differentiator between different services.
[01:14:55]  So if you, data has come from multiple sources, you want to connect and, or some source is slow. You want to like, not slow your whole service down on
[01:15:02]  that. Um, and when you get large apps, um, like really large apps, you get to a point where the combinatorics of like any individual service slowing down
[01:15:11]  on any individual request could cause like the whole app to always be slow. So you want to split it up. So I think for smaller apps, it makes a ton of
[01:15:19]  sense just to be like, no, screw this. We're just going to wait for it. And it's all it is. It's easy as adding one thing
[01:15:25]  to the resource. Um, this is, I think we added that in, I want to say solid 1.4 just over a year ago. So yeah, it's
[01:15:33] , it's, it's a good approach. Um, yeah, so yeah, I need to kind of wait that stuff out. I still think there's some
[01:16:12]  kind of confusion here. You don't want to load the code to load the data until you get there. But the benefit of loading the code to load the data ahead
[01:16:31]  of time means that you can parallelize loading the actual data at the same time you load the code instead of causing like a waterfall. Like, like if you got to the
[01:16:43]  route and you're like, okay, now I'm going to load the code for the component and the code to load the data for the component. Like you're back
[01:16:52]  to almost loading the code inside the components. Like what's the point? Whereas if you look, if you, if you said, okay, I'm going to split off
[01:16:59]  the code. So the code for the component for the page hasn't loaded, but I know what data I have to load. And then you fire them off the same
[01:17:07]  time you kill the waterfalls and then with nested routing, you can fetch all three sections and the data for all three sections all in parallel at the same time. And
[01:17:15]  there is like no waterfalls. So like if at any point in that chain, you introduce another lazy around loading the code to load the data, then you're like re
[01:17:24] introducing the waterfalls again. Yeah. Yeah. Yeah. Yeah. I don't know. Anyway. Chat's been keeping me busy here. So let's,
[01:17:33]  let's, let's talk. Let's talk a bit more about the, the strict mode thing. Cause the, I like, I don't know if any of
[01:17:51]  you have, have had, had thoughts about this is obviously this is something that I would think about more, but I like maybe we just should start like a, one of
[01:18:03]  these just so that we can like brainstorm. But my primary thinking of strict mode is what if any time you access a reactive value outside of tracking context, tracking scope,
[01:18:28]  it errors, mourns. That's, that's sort of like the key thing. Yeah. The other thing I was thinking about is there's certain messages that we
[01:18:34]  haven't solved right now that could get pulled into a strict mode. Like this is created outside of a route. It may never be disposed. I don't know if
[01:18:46]  people seen this error. Let me, let me, let me show you what I'm talking about here. Um, so like, um, signals are fine, but
[01:19:02]  if you've ever kind of come in here and been like create effect and been like console log, I mean, this is fine. It's only gonna run once. Hey
[01:19:13] , um, what's going on here? Did I, have I like disabled warnings? It's like, there we go. Computations created outside of create route or
[01:19:28]  render will never be disposed. We warn about this stuff all the time right now, but we could also push this into a strict mode because the truth of matters, if
[01:19:37]  you make an app and you put an effect up here, I like you're probably not expecting it to get disposed. Like it exists for all, all of time
[01:19:46] . Like who cares? Like you're, you're saying globally, I'm making a singleton effect that updates on, you know, this signal I made const count,
[01:19:56]  you know, whatever count set count create signal, whatever, you know, you're just like, you, you know, that it's never going to get disposed.
[01:20:12]  Right. So the reason we warn there is because if you, I we've seen people do this, like async, they start creating signals and are creating effects at
[01:20:27]  async timings. Um, you know, things that aren't being managed, you know, like an event handler. And then every time you click, you create
[01:20:34]  a new effect and it never gets disposed. Our, our auto disposal in solid is based on nesting. Like if we put an effect in effect, right? You
[01:20:44]  can do this, create effect. Right. Right. Let's move this over. So we don't need that. If we put an effect in effect, right?
[01:20:50]  So let's do this and do this. And then format that. And then let's make signal, you know, count one and count two, you know, and
[01:21:08]  then we'll make this one count too. And we'll make this one count and then let's bring in our buddy on cleanup. And then we're like,
[01:21:23]  okay, let's see on cleanup, you know, console.log cleaned inner, cleaned outer. If I had another cleanup globally here, it would never, it would just
[01:21:48]  never call. And in fact, the compiler again would warn us about it. But my, my point is like, if, if I, if I go here and
[01:21:57]  go run it once and then go set timeout. And I don't even know if I need this timeout to be fair. And then I go set count two to
[01:22:08]  a different value. What you're going to see is playgrounds with fun for me recently because sometimes it doesn't refresh in a happy way. Let's put, let
[01:22:23] 's give it a bit more of a timeout so we can see this. Sorry, I should have done. These are different. This is outer, inner, you
[01:22:33] 're going to see is outer, inner, cleaned inner. Okay. Sorry. This is still catching up. Right. Right. So you see outer, inner, a
[01:22:43]  zero, and then we cleaned inner, and then we updated inner to one. Right. So outer doesn't run again, obviously, when we only change the inner signal.
[01:22:51]  Um, if we change the outer signal, you'll see outer, inner, cleaned inner, cleaned outer, outer, inner. Um, and I, I, I
[01:23:02] , I'm just showing this, um, to, to show that like when you're using effects and like rendering and solid and stuff, you don't have to worry about
[01:23:13]  disposal yourself. It just gets taken care of unless you start like creating stuff in weird, like click handlers and async context. And, um, for that reason
[01:23:22] , um, that's why we have the warning to say, Hey, this competition create outside a root or render will never be disposed. Similarly, if you call on
[01:23:32]  cleanup, you know, out here somewhere like, um, uh, cleanup cleaned world, you know, it's going to say like, look, um, um,
[01:23:43]  cleanups created outside of create root or render will never be run because like this will, this will like, there's nothing. There's no association. There's no like
[01:23:53]  root, um, to associate it with. So we could move these kinds of warnings into a strict mode because like, again, they're not. If you know what you
[01:24:05] 're doing, this is fine. You don't need to be told about it all the time. Yeah. I mean, it's fine. This is my time.
[01:24:14]  Tio has his birthday. So he gets a, you know, he gets, uh, he gets a pass on this one. But what's even more fun was
[01:24:20]  that prime was also streaming right into the, into our, our same time window. So, uh, although it looks like he's, he's done now, but yeah
[01:24:30] . Can you manually dispose of these cases if you create a root? That's the whole point. Like you, we, we, we don't give the effects a
[01:24:39]  cleanup mechanism. We say that like, if you want to manage cleanups yourself, there's a, there's an API for that. Um, yeah, so
[01:24:53]  this, this is, this is where, this is what we're kind of hypothesizing is. Can, can, can, what would make sense to be in a
[01:25:09]  strict mode? Yeah. It is a big if, and that's why I prefer having these kinds of messages. So maybe they don't go in there, but I
[01:25:14] 'm just saying hypothetically, if we're building a strict mode, we could say that like the, the, the, the, the, the root messages could be part
[01:25:40]  of the strict mode. Um, maybe I shouldn't summarize this thing, no root messages and untracked reads. I'm trying to think of untracked reads
[01:26:02] . Um, I think, yeah, I think those two are the main ones. I'm trying to think of if there's any, anything else, right? So
[01:26:15]  I, this is, this is sort of my hypothesis of at least what, um, the value of a strict mode is because like, can I, let me, let
[01:26:30]  me show one more example here. Um, while we're still doing this, I'll get rid of the nested effect and show something that can sometimes confuse people,
[01:26:42]  which is that if I do this. Okay. Okay. Okay. Okay. Okay. Okay. Um, what am I missing? Okay. Yeah. Yeah
[01:27:00] . This is where I was going. Okay. Yeah. This is where I was going. Okay. Check this out. ESLint is not complaining at me.
[01:27:07]  Right. ESLint thinks this is fine. Okay. I've set the count to one, but I'm only seeing the count to zero. Why am I
[01:27:17]  never seeing the count as one here? What's going on? Okay. Yeah, this is where I was going here. Check this out. ESLint is not complaining
[01:27:23]  at me. Right. ESLint thinks this is fine. I've set the count to one, but I'm only seeing the count as zero. Why am I never
[01:27:40]  seeing the count as one here? What's going on? The, the, and this is the kind of thing that I'm talking about. The answer is because we
[01:27:54] 're, we pulled the tracking out of a synchronous context. It's not, it's the same as like the root problem. I was talking about a minute ago. If
[01:28:01]  I change it so that this is C now, and I access it out here and go const C equals count, you'll see the, the count is one actually getting
[01:28:13]  printed because it's what's get tracked in the effect. This is a runtime mechanism. We, we're not like resume. Like, unless we were doing zone JS and
[01:28:20]  we're patching timeouts. Like we're, we're not going to like know what the, like, like, we're not, we have to resume the reactive
[01:28:33]  scope and stuff. So people, it's so funny. People fight this really hard sometimes. And they'll use like solid has like a run with owner and they'll
[01:28:39]  like do that. Like the real answer is just don't do this. And, you know, write your code in a more like data driven way. But that being
[01:28:49]  said, um, like ES Lint couldn't, you know, wasn't able to detect this case. Um, and that's sort of like where my idea of strict
[01:29:03]  mode coming in. Cause there's places like outside of the components, outside of the files where this kind of stuff can happen without us knowing. Yeah. Like this is
[01:29:16] , this is technically true, but you should never do this. Like almost never, never do this. People abuse this. Um, in like, like that's not
[01:29:25]  the solution. The solution is just like set a signal and get yourself back in the flow. It's not like, like start like, because as soon as you go as
[01:29:34] ync and then like, you're suddenly managing a bunch of stuff. Like if you like, if you're not handling the disposal yourself properly and you're just like running
[01:29:46]  with that route, the route just gets more and more stuff like added to it to dispose when it disposes. Like there's so many more considerations here. Um, that
[01:29:54]  like, unless you're writing some really cool low level thing that intended to do it, like average developer should not be using these APIs. Um, so yeah, so
[01:30:20]  like this, this is essentially, this is essentially like the question, like, should, should this, we should be told that, Hey, this, this should be an
[01:30:37]  error or something. Right. I think that's where this kind of strict, um, the strict mode type thing kind of comes in. Right. So let's go
[01:30:46]  back here. No root messages, untracked reads. All right. So the no root messages, I'm not going to worry about too much because we already have those
[01:30:58] . Those are easy to detect. The question is what does it mean to do, to complain about untracked reads because it's not that simple. Like another place
[01:31:13]  we talked about, um, sorry, I'm looking at the wrong playground. Um, the other place we talked about untracked reads was, um, in the component
[01:31:24]  body. Like if someone destructures, right, it'd be nice to say, Hey, you can't do that. But when you're in an effect handler,
[01:31:34]  um, I don't know if you actually want that error. Right. Um, let's, let's just start over here. Forget this for a second. Let's
[01:31:43]  go back to our counter. Yeah. Like here when we call increment and we're reading count here. Um, I don't know. I kind of don't want
[01:31:55]  it to be, to be complained at. And similarly, if someone specifically goes, Hey, I'm on tracking this. You also don't want it complaining at you.
[01:32:05]  You don't want it to be like, Hey, um, like someone goes on track again. I don't know why I would be doing this, but I mean
[01:32:23] , I got a perfect example of why I'd be doing this. I mean, not on track count. That doesn't make a ton of sense. But what I
[01:32:29] 'm getting at is this that we're looking at here, um, is basically on mount. Right. Um, yeah, like there's only logs once. Um, it
[01:32:44]  doesn't update cause we're not tracking count here. But my point is like this solids on mount is essentially create effect with on track. You wouldn't want, um
[01:32:56] , that on track to, uh, to not do anything. Right. Like, or sorry, to error at you rather you want to not do anything. You don't
[01:33:05]  want it to track, but you, you don't want it to error. So like, it's not as simple, um, as the first version of what we talked
[01:33:13]  about. So I think we just have to keep that in the back of our minds as we approach the solution here. So like, because like, if you think about
[01:33:28]  it, like what, if you do want to untrack, right? The suggestion that I think we're having here is if you go const C equals count, this
[01:33:40]  should, you know, tell you, but this should be fine, which means that like what a strict mode would actually promote is not that people can't untrack
[01:33:59]  or not track things in these kinds of contexts. It's funny. The counter context here is already untracked. It's that they have to be explicit that they
[01:34:11] 're untracking the value. Um, if they won't, if they, if they want to use it here, that's, that's basically the idea of the
[01:34:17]  strict mode context. So yeah, let's, let's, let's break that down again. So let's, let's go a little further here. Um,
[01:34:24]  what do we, what, what do we actually want to do here? We want like what, where are places that should, should error? Um, okay. What should
[01:34:33] , should error? Um, component bodies, um, async, you know, timeout. Um, component bodies, um, async, you know, timeout
[01:34:44] . Callbacks. Shouldn't error. Um, async, you know, timeout callbacks. Shouldn't error. Developer. Untracks. Event handlers
[01:34:55] . Um, async, you know, timeout callbacks. Shouldn't error. Developer. Untracks. Event handlers. Um, async, you know
[01:35:05] , timeout callbacks. Event. Untracks. Event. Handlers. I got an interesting one. I don't know where it sits. What if someone
[01:35:16]  reads a signal inside of a cleanup function? It's kind of interesting one, right? Um. Hmm. Not actually sure about that one. Um. Um. Um.
[01:35:26]  Hmm. Not actually sure about that one. Um. Um. Um. Um. Um. Um. Cause if, if you read. From a, from like a
[01:35:41] . Signal that's getting cleaned up. Or it's the reason for the branch switching. That's kind of awkward. Whereas if you. Read from something else. It is
[01:35:50]  completely unnecessary. But like maybe a strict mode. Should actually. Consider. On clean up. Here as well. Yeah. Yeah. To be clear. When I say
[01:36:06] . Like. If, if you're doing it yourself. Then you're. Like. The. There's not much we can do. Which suggests. That this mechanism
[01:36:15] . Actually. Isn't. How should I put it. It isn't. Um. It has to be. The. Should error. Has to be like. The default
[01:36:24] . Case. For. Things. That. That. It has to be. It has to be. The. Should error. Has to be like. The default.
[01:36:35]  Case. For. Things. That. We're unaware of. And that. The. Should error. Is actually. Like. Almost has to be. A flag. We
[01:36:47] . We add on. So like. In general. Except for component bodies. Component bodies. Like. The framework calls on track. Here. It's untracked
[01:36:55]  by naturally. And here. Like the framework calls on track. So it's actually split. It means that. Untracked. Actually. Almost needs like. The
[01:37:03]  option to be like. Should error. Shouldn't error. Essentially. And that needs to be handled. At. Each untracked. Boundary. Which. Kind
[01:37:13]  of gives us a hint. Into what the implementation should be. It's funny. Cause I'm. I jumped into chat. I'm like. How disconnected is this
[01:37:20] . From what we've been talking about. Does anyone else get re-necessized. If the four. No. See. We have a. Memoized four
[01:37:27] . So the only. Callbacks that get run again. Is. If the row. Literally gets. Like. Created the first time. Yeah. Actually.
[01:37:35]  It only runs when it gets created. So. It. It. It. It. It's funny. Cause I'm. I jumped into chat. I'm like.
[01:37:45]  How disconnected is this. From what we've been talking about. Does anyone else get re-necessized. If the four. No. See. We have a. Mem
[01:37:52] oized four. So the only. Callbacks that get run again. Is. If the row. Literally gets. Like. Created the first time. Actually.
[01:38:01]  It. The. Each row. Doesn't. Ever rerun. Only. Any reactivity. Inside of it. So. There's no. Reinitialization.
[01:38:12]  That's the whole thing. Our four component. Like. Our. Our four component. If. If you update something deep in a list. Like. Not even deep.
[01:38:21]  Like literally. A list of objects. Um. Cart items. They have a total item count. You know. Like a total. Like. So. A list of
[01:38:31] . Like all the things you're buying off Amazon. And you can have. You know. A quantity. The way solid works. If you have that. Like an array
[01:38:39] . Of card items. All with a quantity. And you update the quantity. Not. The list. Reconciliation. Doesn't even run. Uh. And. Because
[01:38:49]  like. If you use a store. reactivity. We can actually pinpoint. The quantity. Change. Without like. Diffing the list. The only time.
[01:38:58]  That. We actually. Run. Any of the callbacks. Like. That. You know. Add a new item. To the list. A little bit. Kind
[01:39:08]  of an aside. But. Just wanted to. Answer that. While I could. Um. Okay. So. I guess. This is kind of. The plan here
[01:39:20] . I. I think it sounds reasonable. I don't know if anyone has any opinions about that. Or any thoughts. I just. This is sort of. Where.
[01:39:28]  Where my thinking was at. I don't know if. It. It is weird. For me. Because like. I read a lot of benchmarks. So. Like.
[01:39:36]  Let me show you one. I think I'm okay with this though. But like. Let me grab the JS framework benchmark. And. Like. I'm trying to remember
[01:39:44]  what I do here. But. My gut feeling. Is I use. Untrack. Implicit untracks naturally. For my. My benefit here.
[01:39:52]  Yeah. Look. Yeah. Yeah. Check this out. Uh. No. No. This one's fine. This one's actually. This one's actually fine. I
[01:40:03] 'm using. This version doesn't use a proxy. So. I'm just getting the row data. Here. And then. Just to save myself from. Accessing it
[01:40:10]  in a bunch of different places. So. This is actually fine. Because. ID is not reactive. We. We. Have reactive label. And it's. Inside
[01:40:19]  each row. So. That's not one. But. Let me see. Let me try another one. Solid. Solid. Store. Okay. Let's look at
[01:40:30]  this one. Yeah. Yeah. See. Same code. And you're just like. Okay. Who cares. Right. On a store. On a store. Access
[01:40:45] ing it. Outside here. In an untracked context. Means that. It's not reactive. Which means that. We don't make a signal. The way our
[01:40:52]  stores work. Is we only actually make signals. When you access. The property under a tracking context. So. But. It's interesting because. Huh. Yeah.
[01:41:01]  This is an interesting case. Right. Because it's. It's like. Yeah. This one probably requires more thought. It's like. Should. Just accessing it.
[01:41:10]  In general. I mean. We can do this. But. It's like. It's like. It's like. It's like. It's like. It's
[01:41:19]  like. It's like. It's like. Should. Just accessing it. In general. To do this. If it's an untracked. Context.
[01:41:28]  Should accessing a property. On a store. Like immediately. Put up red flags. And be like. Hey. Did you mean. To do that. Because. I'm
[01:41:37]  doing this. In the. In this case. It's actually. Has a different meaning. Because now. Row id. Is just a value. So I basically. Unt
[01:41:46] racked it. Because I know. That this row. Is never going. To run again. Because it's. It's keyed. Innately. Which means
[01:41:55] . Like there's. There's no. Need for a key. Because. It doesn't. It doesn't. Re-render. So. Like. It's the
[01:42:04]  same thing. So. From that sense. It's keyed to the id. It doesn't need to be reactive. If I put. Row.id. Inside.
[01:42:12]  These bindings. Like. In here. I'm. I'm. I'm. I'm. I'm. I'm. I'm. Pretty sure. I
[01:42:23] . Like. I wonder. If. Yes. Yes. Lint. Actually. Would even detect. This kind of scenario. Like. It's. It's.
[01:42:37]  It's. It's funny. From my perspective. But even. Because like. We have a list. That state. It's getting passed through a for loop.
[01:42:45]  Into here. It has no idea if row. Is reactive. Or like. Row.id. Is it reactive. It can't make that determination. There's that level
[01:42:53]  of this thing. This is. Again. This is another argument. For why strict mode. Should exist. Rather than. Distrusting. Linting completely. Because
[01:43:02]  linting can only like. Flag the really obvious things. When there's like. A direct connection. And. Reactivity can. Flows through the universe.
[01:43:09]  So. Um. Just. Kind of. Wanted to point this out. Because. I think what we're suggesting. Is. In this benchmark. I should. Go
[01:43:20] . Untrack. Row.id. I. I think. I mean. It's an interesting question. Nobody has any thoughts. Yeah. This is. This is
[01:43:30] . This is. I'm crowdsourcing opinions. Um. Maybe. It. It. It's definitely interesting. From the perspective. Um. Okay. That's fine
[01:43:42] . Uh. Okay. That's fine. I think. Stores. We can leave as more of an. Advanced topic here. For a moment. Um. And kind
[01:43:51]  of. Focus more on. Uh. Just the. The. The core. Mechanics. Of how we would approach this. Okay. Just a sec. All right
[01:44:01] . All right. All right. So. What. What are we going to do here today? I think. I think. I think. I need to get back
[01:44:08]  on the main branch. of solid. And pull. Solid all the way down. Okay. There we go. So. We're. Up to date.
[01:44:17]  Yeah. I guess. We haven't talked about this. Right? This is an important. Piece of the design. Right? Okay. Okay. Alright. So. What
[01:44:28]  are we going to do here today? I think. I think. I need to get back on the main branch. Of solid. And pull. Solid all the way down
[01:44:35] . Okay. There we go. So. We're. Up to date. Yeah. I guess we haven't talked about this. Right? This is an important. Piece
[01:44:44]  of the design. Right? Yeah. We should. We should talk about this. Um. I was talking about like. What we should warn about. But I mean
[01:44:57] . Even more primary. Than talking about. You know. That. We should talk about. Yeah. It's definitely has to be opt-in. But what. What
[01:45:06]  should the opt-in design. Look like. Right? A lot of things in solid today. That are opt-in. Are like. They have this like.
[01:45:15]  Enable. Blank. Sort of. Uh. API. Like. We just call a function. And then. I use this for tree shaking. Right? Um.
[01:45:25]  I showed how I did that on the last stream. Um. With. But like. Actually. If we're lucky. Um. Pull up. Repple.
[01:45:35]  Okay. It's right here. You can do a lot. By simply. The difference between. Importing a function. Like a specific feature. And not. Like.
[01:45:46]  Uh. I've shown this before. But like. Pretend you wrote your code. That said. Use specific feature equals false. And then you have a. A function
[01:45:54]  here. That's like. You know. Basically. You know. Enable specific feature. Sets it to true. Okay. And then. In your. Main
[01:46:04]  code. You have a branch. Where like. Use this feature. Do this. Else. Just do this. And it doesn't even have to be an else. It
[01:46:12]  could literally be just like. It could just be like. Always do this. But if you have a specific feature. Do something else. If you look at what rollup
[01:46:17]  generates. Out. On this side. What you're going to see. Is. It. Because I didn't import. Specific feature. Here. It. It
[01:46:27] . It literally just. The bundle is like. You called main feature. Here's main feature. The second. That I bring. This in. The bundle. Like doubles
[01:46:37]  in size. Because we brought in all the code. So strict mode. Can be handled. At a tree shaking. Level. So people who don't. Use it.
[01:46:46]  The code completely. Disappears. Um. That. That is. Like my first thinking. The. That's true. Like. With many different API services.
[01:46:58]  It doesn't have to be a function call. It could be a component. It could be. That. And it's interesting. Because. We probably should kind of.
[01:47:03]  Think about that a bit. Because. Like. Does anyone know why. React uses. A component for strict mode. I think it definitely should be. Sorry. To
[01:47:11]  answer the question. The answer the question is. I think it definitely should. Be opt-in. But. The thing is. That doesn't. It. The.
[01:47:19]  If. If. If. We went down this path. The library maintainers. Would have no choice. Anyways. I think. Unless. There's like a no
[01:47:27]  strict. Does. Does. Unless. It. If. If. We went down this path. The library maintainers. Would have no choice. Anyways. I think
[01:47:36] . Unless. There's like a no strict. Does. Does. Unless. There's like a no strict. That is true. Right. Strict mode is completely dev
[01:47:49] . So. The dev. Flag. Will already tree shake it. So you're right. I don't have to worry about it. Because. It'll always be guarded
[01:47:54]  under dev. Good call. I assume strict was a component. That it. Did a check on each render path. Yeah. So I mean. That. That might
[01:48:06]  be why. I started. Wondering if like. There should be like. A no strict. Like. Is it. Is this the trick. So people can opt
[01:48:15] . In and out. A strict mode. Like. This part of the tree. Strict mode. Library maintainers. Like man. I don't want to implement.
[01:48:23]  Strict mode. So they just go. No strict. And then. You know. And then. Like. Your code would be. Yeah. I don't think
[01:48:32]  you can do that. Right. Because. If you pass anything into them. And they're calling it. Then suddenly. Your stuff becomes unstrict. Too. Yeah.
[01:48:41]  So they. They. They wanted it. So that they could like. Control the rendering. We don't actually care about rendering. Rendering is a side effect. What
[01:48:49]  we care about. Is. Well. We talked about it. It's all about. Making sure that people. Don't mess up. Reactive scopes. Yeah
[01:48:59] . Yeah. Yeah. Yeah. Yeah. This. This. This. This isn't going to work for us. On that side. So I think it is definitely.
[01:49:09]  An enable thing. Whether it should be a component. Yeah. I. I would be perfectly fine. With just like. You know. We. We can't just
[01:49:17]  use strict. So to speak either. Like. We can't just like. Put like a. I don't. I don't think we can just. I mean.
[01:49:25]  It already has different meaning. But I don't think. I don't think. I don't think. We're going to be like. Doing this. Either.
[01:49:32]  Because. It's not a compiler. File level thing. It's the same. That's the same problem. With. No strict. Or whatever. Is because. Like
[01:49:41] . This stuff. Transcends. Modules. It's like. What we're talking about. Is a runtime reactive thing. That runs through the whole system. So
[01:49:49] . I don't think we get that. Leniency. Hey. Thanks Nate. Yeah. So. Sorry. I don't think that. That's going to work
[01:49:58]  for us. Exactly. So. It does feel like. It's an. All in. Opt in or opt out. Like you. It's. It's. Everything
[01:50:08]  or nothing. It's. It's. Everything or nothing. So. It does feel like. It's an. All in. Opt in or opt out. Like you
[01:50:18] . It's. It's. Everything or nothing. Just. Which is. Which is. As I said. It's interesting. Because it means. That the library
[01:50:28]  maintainers. Basically. Have no choice. Right. So. That's. That's. That's an important consideration. If we were to add this. Because. Opt
[01:50:38]  in. All in. I. I mean. I get the point. You're like. At that point. Should it just be opt out. But I think. Oh
[01:50:47]  man. This is. This is. This is. This is. This is the kind of. This. This is pain. To put on people. Isn't it
[01:50:57] ? Like. Think about it. Like. It's like. If. If people were. Relying on. Those little tricks. Accessing values on the top
[01:51:06]  level components. Then like. You know. Like. Implicit untracks. Then like. Things get awkward. And. It's not about adding configuration. It
[01:51:16] 's not like. Opt in. Strict mode. And then pass arguments to it. Or something. It's. It's not that. Because. Again. The library
[01:51:26]  authors. To speak. Just because. Somebody out there. Is going to want it. That. Right. So. Yeah. I'm not. I'm not.
[01:51:35]  Actually. Too worried about. The. Built-ins here. Like. The biggest consequence of this. Is that like. Untrack. Gets called a few
[01:51:43]  more places. And. Untrack. Has a short path. That actually. The performance implications are. Almost nothing. So. I'm not. I'm not.
[01:51:53]  I'm not. Too worried. About. This. Um. Yeah. So. Okay. Let's. Let's. Keep on going here. I. I.
[01:52:05]  Think that's a good question. Does that. Answer the question. In terms of. What we want to do here. I think. Maybe. Make our decision. I
[01:52:13]  think. That can. Decision. Whether it's opt-in. Or opt-out. Is. The kind of. End of the chain. Once you look at
[01:52:21]  the solution. And. The kind of. The kind of. End of the chain. Once you look at the solution. Kind of. Gather. Like. Whether.
[01:52:31]  Like. How you feel about it. I. I. Feel like it's opt-in. But I understand. That it's not an opt-in for everyone.
[01:52:39]  Like. Again. I don't even know. If there's something we can do. I just. This. This. This is why we're here. We're hypothes
[01:52:47] izing. Seeing what that could look like. And. Hopefully. Implement it as well. Okay. So. Any other. Any other. Any other thoughts. That
[01:52:58]  was a great one. From the chat. You know. In terms of. What other things. We. We. We should consider here. I. Like. What
[01:53:08] . Just out of curiosity. Like. Like. Nice. Okay. Okay. So. See. Enabling strict mode. For part of the app. So. There's
[01:53:20]  a hierarchical consideration. for them. Interesting. Interesting. Okay. So. See. Enabling strict mode. For part of the app. So. There's a
[01:53:29]  hierarchical consideration. For them. Interesting. Okay. Okay. So. That. That's basically. The biggest argument. For using the component. It's not for
[01:53:39]  like. Weaving the tree. You know. So to speak. It's not for like. Doing the whole. Server component. It's not for like. We
[01:53:47] aving the tree. You know. So to speak. It's not for like. It's not for like. Doing the whole. Server component islands. Like. This is
[01:53:55]  the strict path. This is the not strict path. You know. Like. It's not for that. It's. It's more like. We don't want the
[01:54:02]  top level of the app. To be strict. Yeah. For us. This has no meaning though. Because reactivity. Is. Is life. You know. Yeah.
[01:54:12]  Okay. Interesting. Okay. Okay. Okay. I like this one. What about. Writing in effects. Have. I missed that. Okay. It's an interesting
[01:54:24]  question. This is an interesting question. This is an interesting question. The. The. The. The. The. The. The reason this is interesting is. Writing
[01:54:40] . Signals and effects. Restarts the loop. And. This one's hard. The. In a lot of ways. You'll hear me and Milo talk
[01:54:45]  about a lot. Where we're like. Don't do it. Like. Don't use effects to synchronize state. But. Writing signals and effects restarts
[01:54:54]  the loop. And this one's hard. In a lot of ways, you'll hear me and Milo talk about a lot where we're like, don't do it
[01:55:08] . Like, don't use effects to synchronize state. But there are use cases, like you're reading from the DOM where you want to. So, the thing
[01:55:20]  that's interesting about this is it's suggesting that if you want to write to an effect, or a signal in effect, you should schedule it. So, call a set
[01:55:32]  timeout. Or to it. I have a harder time with this because the amount of inconvenience that causes. The worst thing that happens in an effect if someone writes
[01:55:54]  to it is that you do some extra work, maybe. But like, there's a certain class of problems that you need to write to signals from effects. So,
[01:56:09]  by putting this in here, you're basically telling everyone that like, yeah, if I want to use an effect to write to a signal, I should wrap in a set
[01:56:17]  timeout. I should be like, create effect. It's interesting though, right? Because, I mean, I don't... I mean, we have a way
[01:56:34]  to make this not track. Like, if I do this, it won't track. So, like, this is why it's just two. It happens so fast,
[01:56:46]  you don't see it goes one, two. But essentially, the effect ran once and just went plus one and it didn't infinite loop. But if I access the
[01:56:54]  count here, it would cause an infinite loop. But the argument here is that to do this, you should always... If you try to do that, it would error.
[01:57:03]  And you should always do this. So that like, you wouldn't cause like, a double render. Like, in our case, that double render was just updating the
[01:57:15]  text twice on here. But technically, what happened, I mean, I can show it in slow-mo, right? We can... I'm not gonna slow-mo
[01:57:21]  it actually, but you know what I mean. Like, I can show... I can show this. If we get inside this DOM binding, and go console.log
[01:57:31] , count, comma, here, you're gonna see... Why is it... The playground did it. You saw it. It said one, two for a second. Like
[01:57:46] , technically, this binding runs twice. Because it runs once at one, and then the effect runs and updates and then runs again. Like, if you really want to
[01:57:56]  derive state, you shouldn't be using effects. You should be using createMemo. But... Oh, man. That's... That's... This is a tricky one
[01:58:06] . I don't know if we could... If we can make this rule. That's... That's... That's my gut. But you're right. We should add
[01:58:13]  this into consideration here. I like that. All right. Excluding on mount. But sometimes it's... It's... It's more than that. Have you ever
[01:58:32] ... Have you ever used solid to create a chat? Like, where... If you don't type in it, the chat keeps on scrolling. You know, like the
[01:58:41]  classic, like... You know, every new message comes in and the chat keeps on scrolling. The way you do that in solid is you get... You create a memo
[01:58:50] ... Um... That reads, like, the current position... Um... On update. And you also have effect that also subscribes to the list that runs after. And
[01:59:01]  then... Uh... Updates the position. And basically, the... The back and forth between the memo and the effect. One running... Um... Sooner versus the
[01:59:12]  other one. Is... Is what lets you, uh... Uh... Essentially... Get... Like, get the delta to actually move the list appropriately. It's interesting though
[01:59:22] . With a fully lazy system, we'd actually have to find a new way to do that. But, um... Maybe this is a consideration in solid 2.0
[01:59:31]  time period. Well, that's the... That's the... That's the thing. I want... I think the way to get rid of a certain amount of the synchron
[01:59:54] ization is to have, um... It's not so much writable computeds, although I call them that. It's like to have, uh... Resettable signals
[02:00:06] . Like... Is the way I'd rather put it. Um... I mean... It's actually relatively simple to make one, really. Uh... I mean, I could
[02:00:23]  layer it out, the scenario. The scenario I'm talking about is, and everyone's hit this, is when you have some kind of control and someone passes some props
[02:00:33]  down and you want to have your own local copy of the props that you can edit. And then when you save, you tell the parent, hey, this is the new
[02:00:44]  data. But at any point, the parent can change the source data and rewrite what the internal components props are. So you need the components to synchronize on props,
[02:00:54]  but it also needs to have its own signal. And this is one of the most common places where people end up using effects to synchronize. Because, I mean, do
[02:01:04]  we want to look at that example? I mean, I can pull it out. I can make it right now pretty quickly. But some reactive libraries, like Knockout and
[02:01:15]  View, they have this writable computed. Which, I mean, let me see if I can find it. Writable computed. It looks like I've searched
[02:01:29]  it before. Where is it here? Writable computed knockout. I mean, this is not the best API, but the idea is, like, you can enjoy
[02:01:42]  your ES5 glory. The read is, like, your normal computed memo function where you read the values. And then the write, you control, like, the set
[02:01:52] ter so that you can, like, in this case, there's two signals under the hood. So the read is the first name and last name signal being combined.
[02:02:05]  And then the write writes to both other signals. It takes a single value, but it actually splits the string and then puts them into each. So this pattern's not
[02:02:19]  bad, but you can also just write this yourself in user space. Like, I don't need to, like, I feel the reason that View and Knockout have this
[02:02:33]  is because their API has a single, like, their signals are, like, in Knockout, it's a single function. Where you either pass an argument to set
[02:02:44]  it, or you call it without an argument to read it. And in View, there's dot value, and you can either assign it or you can read it. And
[02:02:52]  I think this, like, desire from the API to put this stuff together is why they have this, so that now this, you know, full name works, like,
[02:03:01]  first name, you know, signal. Like, it basically has the same read-write properties. Whereas if you have, what is it called, read-write segregation
[02:03:10] , like, you could just do this yourself, right? Like, you could just be, like, create memo, this part, and then you could just go set full
[02:03:24]  name and do this part. Like, you just, and now you've got your tuple again, right? You don't need a writable computed to do something
[02:03:32]  like this. It just works. So, like, we can just delete this whole concept. So, gone. Now we don't need the simplification that comes from that
[02:03:41] . Where it's interesting is when the synchronization involves, as I said, like, this kind of temporary, like, you, it's a synchronization problem,
[02:03:56]  not a, like, a, this is, this is derived. Like, this is a, like, you have two things underneath. Where it gets interesting is,
[02:04:06]  like, where you want to have your own thing and props, and then you want to, like, do smart stuff based on, like, when props change, reset your
[02:04:14]  own thing. So, it's a different use case than the writable computeds that you find in those other libraries. But I do want something like this so that we
[02:04:23]  don't need to use effects. It just, the use case of reasoning is a little bit different. Right, but, like, what I'm getting at is,
[02:04:35]  you can just, like, we use that in our to-do MVC. You can just, you can just write that yourself. You don't, like, you
[02:04:43]  don't need a primitive for it. Like, like, it's just, like, do we have solid to-do MVC? Solid to-do MVC.
[02:04:57]  Solid to-do MVC. Source. Index. What is that? Create local store. Okay. Like, it's, it's, we create a store. We
[02:05:15]  initialize it with a value from local storage. We create an effect that synchronizes it. You know, like, then we return our, our, and this one's
[02:05:25]  actually really easy. We just return our state and our state setter. But, like, like, you could also pipe it through. Like, basically, the end
[02:05:33]  output of read-write, like, you, you can just pipe your read and writes together, and then output another read and write at the end. You don't need
[02:05:41]  a construct to do this because the reads and writes are separate. I don't know if I'm making a ton of sense. I mean, but is there a difference
[02:05:57] ? If, if I switch this from create local store to create store, it has the exact same API. Like, this is just not a distinction, right?
[02:06:18]  Yeah, yeah, yeah, yeah, yeah, yeah. I mean, what, what we actually want, I mean, I mean, we got the stream here. I
[02:06:26]  can talk about it. It seems like this is a topic that some people care about. Um, is, is something, let me see if I can sketch something out
[02:06:36]  here. Create, I don't know what they call it, create writable or something. What we could do is, I think this would be kind of fun.
[02:06:47]  we could create a function and then we want to return, ultimately get our setter pair. But what if we went create, we've gone const m equals create memo.
[02:07:00]  And then our memo, um, yeah, how do we do this? I'm trying to think, I'm trying to think in my head, how, how, how
[02:07:12]  I would do this. Um, let me, let me think here. Uh, I probably like have the code somewhere if I look for it. Um, um,
[02:07:25]  yeah, let me, I'm going to do a quick search here on, on our discord. Just don't mind me a second here. Cause it just, yeah.
[02:07:46]  It just, it saves my time of actually, it's, it's, it's not actually that difficult to create. I'm just blanking on a second
[02:08:00] . I'm blanking on a second. Yeah. Yeah. Yeah. Yeah. Okay. Here we go. I found, I found it. I wonder if
[02:08:14]  this one has bugs in it. Let me see here. Let me see here. Yeah. I took this one out. Um, yeah. So the idea here
[02:08:37]  is you create a memo that creates a signal based off the initial value of that getter function, but because it like, this is being tracked inside the memo. It
[02:08:55]  turns a signal and then you, you get you on reading, you read the memo, get the accessor of the signal and read the signal. And on, right
[02:09:08] . You read again, you, um, maybe this should be on track here on the right side. Maybe. Um, probably it should be more like on track X,
[02:09:19]  but. Um, get the setter and then call set the signal and what this is kind of like a silly little primitive, but what this does is it's a
[02:09:35]  resettable. Um, yeah, let's, let's, let's, let's use it here to see what it looks like. We can go const,
[02:09:47]  um, let's call it, uh, what do we call it? My count set my count equals create writable and we're going to just, it's just going
[02:10:06]  to listen to count. create memo here, certainly we're, we're getting so sidetracked. I haven't even started writing strict mode and we're like over
[02:10:22]  two hours in, right? But what I wanted to show here is that we can, we can set something up here so that. let's do this, let's
[02:10:39]  go, my count actually let's, let's add a, another button. That's actually what we should do. Um, do this again. this is why these
[02:11:00]  streams are great, right? Cause you start on one topic and you end up somewhere a little bit tangented, but okay. And then we can make this one,
[02:11:08]  my count and increment, whatever. I'm just too lazy. I'm just going to write the function in line here, my cat, my set my count.
[02:11:23]  Um, okay. So hopefully if this works, the second one updates. So my count works, but this one controls both of them. Um, this one can do
[02:11:43]  its own version. It could save back if you choose to, but whenever the, this one changes, the other one changes. So this pattern, I find much, much
[02:11:54] , much, much more common and actual concern because before you did this, before you had a primitive like this, like the, the, the, the correct answer in react
[02:12:05] ivity is almost always derive it. But end user writing this code might be like, they might not get here, what the end user might do to implement this instead of
[02:12:16]  using the, you know, our nice, my count here. What they might do is be like, oh, okay, well, you know, alternate implementation const my count
[02:12:32]  set my count equals create signal. And then the read from count, which this will, first of all, complain that you, because again, you're reading an unt
[02:12:45] racked value, like you're reading it in an untracked context. And then they'll write, create effect. Set my count to count, right? Again
[02:12:57] , you could probably ignore this initial one, but you can't even completely ignore this initial one. So now this should have the same visible behavior like we just saw here.
[02:13:12]  Right. But the difference is that. I mean, you're not going to notice this one as much from like console log trick, but you're, you're,
[02:13:29]  you're, you've detached the, how should I put it? You've detached the, like when you have an effect right to account, you're, you're kind
[02:13:42]  of like starting over again. So you've detached the, like the derived data, if something depended on my count, it might've already ran by the time this
[02:13:52]  effect runs and then the effect runs and changes it. And then it needs to run again. Whereas with this version, with a create writable, um, version here,
[02:14:02]  because we're deriving it off memos, any downstream dependencies would know of the potential of it changing and we can make sure that everything executes exactly once. Sorry
[02:14:16] , we went down kind of a rabbit hole here. That's probably pretty technical. Um, but I mean, you, you find these same kind of patterns in like in
[02:14:28]  react and stuff. Like you, you generally don't want to synchronize state with create effect. Generally not. Um, so there was, there was actually a conversation
[02:14:41]  on Twitter that made me think of this. Um, funny enough. Uh, I don't know if I bookmarked this one. Um, but, uh,
[02:14:59]  there was a discussion, um, where people are like, can I, can I like, is this okay? Can I use ref in react to, you know, calculate
[02:15:10]  some kind of, they're using the memo for the derived value, but they wanted to keep track of the last value so that they can like always get the highest value
[02:15:17]  and involve like use ref, use memo, use effect with the ref. Like this is the, this is the kind of react code that you never want to write, right
[02:15:26] ? This is, this is like the, the kind of thing when you start going, okay, hooks are weird. Right. Like, um, once you started using
[02:15:38]  refs for not dom values, like you, it starts, you start going to like, you start needing to be like, okay, what's actually happening here. And
[02:15:49]  You know, to be fair, I'm not gonna, if you go back to my playground here, you might be asking what's happening here as well that you probably want
[02:16:03]  to run into yourself. we're probably going to ship this primitive in the future. Um, but like, like these are the kind of scenarios and what Dan was saying,
[02:16:17]  it's funny. Cause like, this was always the complaint about like reactivity and stuff too. Like you read some, some of the old, uh, Pete hunt talks
[02:16:26]  when he was talking about like, where's the source of truth, you know? Um, Andrew Clark was like, I think all use cases can be replaced by additional
[02:16:37]  argument to use state that acts like get drive state from props. So he was saying like, it'd be really cool if you could kind of like basically do some kind
[02:16:48]  of derivation based off the state as a, as a, as a way of like being part of that state, um, you know, update call flow. And
[02:17:01]  when I saw this, I was like, I was like, haha, this is kind of this, right? I mean, API aside, the cool thing about this one
[02:17:14]  is if you do this and you have this primitive, you're not even thinking about it. You're just like, oh, okay, cool. This is, this
[02:17:21]  is like a memo, something that updates whenever count changes that I can like temporarily override. As I said, this pattern is very common for controlled, um, stuff. Like
[02:17:31]  you see this, people do this kind of stuff in Svelte, um, when they do like export let and then write to the props coming in. Um, this
[02:17:40] , yeah, anyway. All right. These rabbit holes are what I signed up for. I'm glad people are getting value of it. As I said, this isn
[02:17:56] 't the stream doesn't have the most, like if you're here, you're probably pretty dedicated, right? You could be watching Theo doing whatever he's doing. He
[02:18:04] 's got 824 people watching him right now. So I'm sure it's very interesting, whatever he's doing. Um, but you're here, so I appreciate it
[02:18:11] . Um, okay, so let's, let's, let's continue on. Okay. So this is a tangent, uh, which takes us back to that
[02:18:36]  was about effects rights. And about how generally speaking, we'd much rather derive stuff than do effects right. So this is a valid concern, but I think, I
[02:18:47]  think it's on us. It's like on Solitz responsibility to provide the primitives that let you avoid having to do effects rights. And if we do a good job
[02:18:55]  there, then like the few cases where you need it might not be worth warning about that. That's, that's, that's my hunch at least. At least
[02:19:02]  right. Okay. So what do we have to do to pull this off? Right. Um, let's, let's close up some of this stuff. Um, actually
[02:19:19]  I closed exactly what I didn't want to close. I was actually in the process of actually understanding why, what strict mode doesn't react. Wasn't I? Sure
[02:19:33] . Okay, sure. We said that this probably doesn't apply to us anyways, but I'm still interesting. It's strict mode literally just, we run everything twice
[02:19:53] . If that case, then like, it doesn't make any sense for us. Cause we don't run everything twice. Like you can do this in solid and like
[02:20:08]  it actually be perfectly fine. I'm not saying like you should, but it's kind of interesting that this would actually have no negative side effect. Um, Yeah. I
[02:20:34]  mean, that's what I'm reading here. This must be really annoying to people who have like services that have to involve a bunch of subscriptions. Cause if I'm,
[02:20:38]  if I'm, if I'm reading this right, like if, if you like, you pick up like something that has like some like web soccer connection, like you,
[02:20:24]  you connect and disconnect to the service, like multiple times, whenever something renders in or something, this must like, just like send people through the roof. That's
[02:21:01]  really amusing. I mean, it's fine. I get it theoretically, but in practice, this must be like such a, like so annoying. Um, yeah,
[02:21:17]  this is such a, like a ivory tower solution, right? You're kind of like everything could be run twice. So we're going to run it twice. Okay
[02:21:30] . But that means that there's, there's really no influence to pull from here, which is good. Sometimes we do that and we look and react and we're like
[02:21:40] , no, no, we're not interested. So that's, that's good. It just doesn't apply to us. Okay. Sweet. Um, okay.
[02:21:49]  So solid dot new. I think I did that right. Sign in with GitHub. All right. Beautiful. Sweet. One of our classic solid templates. No, it
[02:22:14] 's kind of funny now. I mean, anyone who's seen this before. Yeah. I mean, it's only in dev. The whole thing is only for dev
[02:22:27]  to be fair. It's just, I'm saying in dev, it's probably actually really annoying. Um, first, not everything, but certain types of things. The
[02:22:35] , the comment or funny joke or thing I'm thinking about here is does, does it, you all recognize this, right? Like what this page is, what it's
[02:22:47]  doing, what the code is here. Um, it, it would be funny if this existed in solids templates, um, you know, much longer. This, this
[02:22:59]  is create react app, right? Um, the, when you, when you start create react app, it's like this exact example. Um, yeah. So it's
[02:23:12]  just amusing to me because create react app, I guess it's not deprecated, but got removed from the docs and stuff. It's basically done perhaps. And
[02:23:18] , uh, just, it was, it's amusing to me that the, I haven't looked at this template for a while, cause I've been using solid start,
[02:23:24]  but for this one specifically, I don't really care to, um, yeah, I don't really care. Honestly, I don't even need any of this. We
[02:23:33]  can cut this all out. I just wanted to get an environment where I could like patch stuff. I don't know if people know this. I love, um, stack
[02:23:41]  blitz for, for this reason. Um, well, I guess the first thing I should do is I should change something and save it because I can't remember stack
[02:23:52]  blitz like we'll fork it after or has already forked it because yeah, see now it's forking it. I need to, and now everything gets giant because
[02:24:03]  everything's set up for me for streaming. So, you know, yeah. Okay. Now what's nice about this and what my favorite thing in the world with stack
[02:24:15]  blitz is you can go open dot node modules dot, where are we going? Solid JS, dist dev dot JS. Yes. Do it bang, save it just so
[02:24:26]  it stays up there open. And we also want web dist dev dot JS. Save it. Good. And this is a beat template. Beautiful. Yeah. That's
[02:24:49]  all we need. And then we can, we're, we're set. So I love doing this because we can literally just edit everything inside the node modules. And
[02:25:00] , you know, copy paste stuff in. And, you know, we can, we, we, we can actually like change the underlying framework if we want to, um
[02:25:10] , for our purposes. I don't know if we actually need this yet, but let's start with solid proper. This is, this is the framework, right?
[02:25:20]  So the very first thing we want to do probably naively as we work through it, I haven't actually done this before. So I'm just like kind of brainstorming
[02:25:28]  it. Let's, let's set up our index is fine. Let's set up our app, like with something so that we can play with this, which is probably
[02:25:39]  just, um, almost our counter again. I also want to like pull it across because what I want, and I guess I should, what do we use? P
[02:25:50] MPM. Okay. PMPM dev. I want to, you know, have like a signal or something, create signal. And then I'm probably wasting my
[02:26:21]  time because we'll do different stuff in a minute, but I just wanted to have something so that we can actually like see what's, what's, what's up
[02:26:34] . Okay. So we've got our working counter. Okay. Back to the, back to the basics here. So the first thing we probably want to try and do mess
[02:26:45]  with is let's make this angry at us. Okay. So how do we want to do that? In solid, we have ignored our scheduler. We have a
[02:27:05]  call called read signal, right? And if you look at it, create signal uses it. Create memo uses it and essentially it has a bunch of transition stuff that you
[02:27:26]  don't care about, but it comes down to this point where it actually does the work. And if listener, it adds stuff. So I guess the question is,
[02:27:42]  what is it doing here? Right. This is where it does the pull up the tree. We could do something really silly here. Like if listener else, let's just
[02:27:56] , Okay. Let's, let's just, let's just start here. Okay. And the, if anyone's used Vite before the secret to Vite is
[02:28:10] , this is not going to update because it's in the node modules, but what you can do is rmrf.nodemodules/vite and
[02:28:21]  get a clean slate. So there we go. And now if we did everything right, hopefully, sorry. When we refresh our page. Oh, did I, do
[02:28:37]  I have the service worker turned off? Always got to watch for that application. Yep. Bypass on this network always. We see you're wrong. Console logged four
[02:28:54]  times. Interesting. Interesting. Why is it console logged four times? So. That is interesting. I'm kind of curious. I thought it would be, might be logged
[02:29:15]  more than once. But. Now I'm curious how it gets logged four times. It's like we're having like a react moment here. Strict mode's already
[02:29:30]  working. Um. Okay. Let's see what's up. Let's look at the stack trace each time it logs. Okay. First time. Call stack. Uh
[02:29:50]  huh. Uh huh. Solid internals. In dev. Oh see. Yeah. This, this, this is the fun part. In dev mode. We proxy the component
[02:30:11]  itself. Um. For, for, for like hot module reloading and stuff. Oh, that's interesting. Maybe I should turn, let's see if turning hot
[02:30:25]  off. Kind of alleviates this right now. I don't really care about HMR for this. We're just, we're just. But this, this is,
[02:30:32]  this is, this is a good example of what people were saying about the internals being infected. By this, um, what is it? I forget, is it
[02:30:41]  hot false? All right. All right. Console. Are you there? There, it's right there. This do anything or is it just, it's still going
[02:31:04]  to happen just as many times? No, I think it happens once now. Perfect. You're wrong. Okay. Okay. So, good so far. All right
[02:31:25] . So, okay, so that, that, that's, that's a start. But, um, let's see here. We need to, we need to do
[02:31:38]  a little bit more than this. Um, let me get back to our app TSX. Yeah, we're actually, I want to go to dev for a second
[02:31:53]  here because we're going to be, we're going to be a little bit more, um, aggro with this now. Where, where did I put it? Um
[02:32:01] , read signal. We're going to, we're going to, we're going to make it like this now. Okay. You're wrong. Here we are.
[02:32:26]  All right. Cool. Interesting part about this is you kind of also want better errors than this. I'm not saying that you're wrong part, but it's, it
[02:32:37]  is interesting that like you almost, I guess in dev mode, I wonder if we have names on the signals, but like, it's not very descriptive other than.
[02:32:50]  Yeah. This is interesting. Something to think about, like, at least when you go here, it will tell you where it is. Like, like the call stack has
[02:33:00]  the ability to tell you that this is where the error is. Right. But yeah, so this, this is, this is something also to add to our notes.
[02:33:11]  Probably here. Consider. How to tell where, what the error is. Yeah. Yeah. So, yeah, this, this, this is something we, we,
[02:33:36]  we need to do. Um, let's, let's look here. Let's just sanity check a few scenarios to make sure that this is a good starting place.
[02:33:58]  Um, console, clear it, reload it. You're wrong. Again, points us to the right spot. Okay. So this basic mechanism, um, is fine for
[02:34:15]  this. The challenging part is we need, we need, we need more than this, right? We need the ability to opt out of it. Right. Cause now
[02:34:30]  what I want to do, cause if I, if I'm right, what I, if I do const C equals untrack count. We're going to get the
[02:34:39]  warning as well. And we don't want that right on track. All right. Let's do this. Uh, console clear. You're wrong. Yeah. Right
[02:34:54]  off the bat, but I am not wrong. Right. So a couple options, how to implement that. Let's, let's do something simple to begin with, and
[02:35:05]  then worry about the rest later, which is, let's go back to the top. You know what? I'm actually going to do this in here because, uh
[02:35:21] , I'm going to PM PM. The, the scary, the, the one risky thing about what we're doing right now is if I ever refresh the whole window
[02:35:33] , we'll lose all our work. Right. So I, I better, I'd rather have the, the work at least locally. So let me see here. Uh
[02:35:47] , let's, let's go back in here. This will slow down our process a little bit, but, um, solid source, reactive signal. And we're
[02:35:59]  going to go with read signal. And then. Else. Console dot one. Okay. Okay. So what we, what I'm thinking, what we need here is
[02:36:30] . Like the way we have some of these globals here, I want like let. Um. I'm just going to be like not tracked or something. And we're
[02:36:48]  going to start that at null. Um, any. I don't want to just try to think of how I want to actually handle this. Cause this is really just
[02:36:58]  a Boolean. So the, the null is actually kind of pointless. Um. Just trying to think of like how I want to even approach this, but let's,
[02:37:10]  let's start. Let's start here. Hopefully this is good. It's Boolean. Okay. Okay. And then. I'm not going to worry about dev
[02:37:20]  mode at the moment. We're just going to assume that this is like all modes. Um. Um. Else. If. Not tracked. Do this. Okay.
[02:37:34]  So. The reason I'm doing this is I want to have some kind of flag. That lets me. It's actually else. If not, not on. If
[02:37:45]  not, not tracked. Um. It's, it's a way that we can explicitly opt out of the tracking here. So that like when we do like untrack
[02:37:56] . We can. We can do something here. See. Cause what I'm thinking. See, they're saying if listener is null. That means it's already an
[02:38:11]  untracked focus. We, we have to. We have to be aware of this scenario. So this has to come above here. So if. I guess the most
[02:38:22]  basic thing we could do is be like. We could just be like not tracked. No, we have to be aware of nesting. This is interesting. So it
[02:38:36] 's like. I'm just. Prev tracked. Equals. Cause we have to be aware. If we are the ones responsible. So if this was already on a
[02:38:56]  not tracked. Like, so we have to be like, if not pre. To the tracked. Then we are the ones responsible. To. Set not tracked. To
[02:39:10]  false again. Right. Okay. Anyone following me along still. Am I just doing silliness here? Like, cause I actually have no clue. What I want to
[02:39:29]  do here yet. But this is just like. Just seeing what it looks like. This is usually how I learn. I try something really kind of silly. And then I
[02:39:37]  go. Okay. That makes sense. See that. We, we have a problem here too. See this listener early return. Um, it's a nice optimization.
[02:39:45]  But it doesn't hit the finally thing here. So if you were in this zone. It's not going to clean up properly. So for our sake right now. We
[02:39:55] 're just going to get rid of that. Cause it's just. We, if we need to. You know. Bring back. Early return. But the. But the
[02:40:06]  problem is. Now. We're in this. Try. We do. We need to try finally this block now. Because we can't leave ourselves hanging. Potentially
[02:40:16] . I mean. We can do something smart. Where we're like. If it's like. Based on if it's pretty. Like. There is a combination of.
[02:40:22]  Of. Scenarios. Where we could. Know that we could. Early return. But I'm not going to worry about that right now. Let's keep on going
[02:40:29] . Okay. So then. Do. Do. Do. Do. Do. Tract and not tract. It's not tract. And then do this. Okay. So
[02:40:36] . The other thing we. We kind of need to do. Which is unfortunate. Is. Is. We need to probably tell. The untrack. Function
[02:40:46] . Um. Whether it should. Even do any of this. Right. I don't know what to call this. Prevent. Tracking. Equals. False.
[02:41:07]  And then. If we're preventing. It's only if we're. Interesting. It's only. It's only if we're not. Preventing tracking.
[02:41:25]  That we care to do any of this. I don't actually care about optimization. right now, so I'm just gonna say, if not... There's probably a
[02:41:46]  better way to do this, but I'm just gonna not worry about that for a second. Okay, that's roughly what I'm thinking. And then, is create
[02:42:09] Component in here? No, it is not. Okay, where is createComponent? RenderComponent. Untrack. It's funny,
[02:42:26]  I think devComponent's actually all we actually need here, but... Let's go to devComponent, which is back in our other file here,
[02:42:38]  right? DevComponent. This Untrack needs to say that it's true. We want this one to error. Okay, everyone still... People still with
[02:42:56]  me, hopefully? So we've created a special version of Untrack, that if you pass a second argument of true to, it will error on you, if you
[02:43:06]  access stuff under it. And then, if you don't do anything, it will error on you. And it's only in that one special case where you call Unt
[02:43:15] rack without the second argument, that it doesn't error on you, right? So, this isn't worrying about event handlers or anything yet. But let's
[02:43:26]  just, like, let's just go with this. So, PMP build. And let's see how off we are. Give it a second. While it builds
[02:43:49]  types and TypeScript. People were talking about this earlier, weren't they? TypeScript's not that bad. But, okay. Turbo repo's fast. If I press
[02:43:59]  build again, it will know not to build it again. But that's kind of beside the point. Okay, so now we've got solid dist, dev.js.
[02:44:09]  And then, if we go to our, where are we going? We're going back to our browser. We should be able to just replace this one with this one
[02:44:19] . Reset our Vite. And if everything went right, we shouldn't see you're wrong. We should see our new message. Which we're not seeing.
[02:44:37]  Okay, let's, let's see where, where, where I failed here. So, I guess the first question is, did we, um, let's find our
[02:44:54]  read signal again. Make sure that we are doing stuff here. Else if not, not tracked. So, it starts as false. Which means that this should be fine
[02:45:09] . Okay. Debug time. Do, do, do, do, do. I'm trying to remember what the... Usually, you can find, is it ifr
[02:45:24] ame? The name. No, it's not that one. No, it's not that one. Fine, we'll do it the other way. Just so I
[02:45:34]  can find it. Usually, it's really easy to find where your, your code is. Show, reveal, and sidebar. There's our app. All right
[02:45:46] , beautiful. And then what's lovely here is you can actually see, if you want the node modules, and then like, um, actually, where we're at right
[02:45:56]  now, I'm not, into .v depths, you'll actually see the chunked up version of the library. So we can actually find, here we are.
[02:46:08]  Let's get to this listener block and see what happens. So, listener, null, not, not tracked. So, not tracked is true right here. So,
[02:46:28]  this is, this is our first problem. This is why we're not seeing, seeing the thing. Then listener exists, and we're fine. Okay. So we actually
[02:46:36] , let's, let's, let's go into untrack and see what we're, what we're doing wrong here. Untrack. This, because
[02:46:46]  untrack gets called in so many places that the solution might not even work unless, um, yeah, we have, you know, think about it a little bit.
[02:46:57]  Yeah. So what's the scenario here? So the first time we get in here, where are we in the code? Okay. Dev component. Good. Prevent
[02:47:19]  tracking is true. We didn't set untracked. That's good. Where's the next place we get in here? Debugger. Okay. Now we get
[02:47:29]  in here. Oh, right. It shouldn't error. It's, it's working because we, we called untrack ourselves on it. Remember? And then we
[02:47:40] 're good. Okay. Sweet. I've actually forgot we had done that. Right? So let's, uh, let's, let's actually try and make it
[02:47:50]  error again. Let's do this. Untrack. Look at our console. Hopefully. this. Okay. So clear it. Refresh it. Reading in a
[02:48:09]  non-tracking scope. Okay. So that's working. Okay. That's, that's good. Um. Um. Um. Um. Um. Um.
[02:48:26]  What's another example? What do we want to do? Set timeout. Um. Um. Just. Do this one. Also complains. Okay. So this
[02:48:33] , this is a good start. Um. Hmm. So. Yeah. Okay. Yeah. Okay. That's fine. Um. Um. Let's just. Do
[02:48:42]  this one. Also complains. Okay. So this, this is a good start. Um. Hmm. So. Yeah. Okay. That's, that's fine
[02:48:52] . I mean, it doesn't exist. We're, we're just hypothesizing based on like, the idea here of a strict mode would be something like, we're
[02:48:54] , we're, we're, we're just hypothesizing based on like, the idea here of a strict mode would be something like, you know, you know, it
[02:49:08]  doesn't exist. It doesn't exist. We're, we're just hypothesizing based on like, the idea here of a strict mode would be something that could tell
[02:49:18]  us, um, a couple of things, maybe take some existing messages. Like when we complain about people creating stuff outside of routes, put that in there, but mostly it
[02:49:27] 's about trying to tell people when they access stuff accidentally, um, outside of tracking scopes. So like, I had an example earlier where someone makes a create effect
[02:49:43]  and they, they decide to console log it. Let's do this. The count is whatever. They decide to console log it in a timeout for some reason inside the
[02:50:01]  create effect. And our linter can't actually detect that this is a problem. And the problem is this. It's that we click this updates a bunch, but
[02:50:14]  if, if we go into our console here, what we're going to see is, ah, sorry, I could turn off the debugger. Um, as we click
[02:50:25]  it, it never updates the log again. Um, and this is because this count is being read. And in an async time that isn't being tracked or react
[02:50:43] ivities, um, runtime. So what you see here is there's actually, uh, there could be through error or warning. That's like, you're reading in
[02:50:50]  a non-tracking scope. This will never update. And then you can look and it'll be like, it'll show you the, where you're reading it.
[02:50:58]  Essentially. That's, that's the idea behind it. Um, so that works. Um, roughly speaking, like if this, the same fix should work too,
[02:51:11]  right? Where if I pull C here and go const C equals count then. So yeah, we're kind of making it on the fly. Essentially is what, what
[02:51:26]  we're trying to do here. Is it kind of C cause now there should be no error. Sorry. Did it again. console. This is fine. So we
[02:51:35]  refresh, no error, count to zero. And now this one works. Hmm. Okay. So let's, let's stress test this a little bit more. Okay.
[02:51:52]  I guess the obvious one that I want to do right now is we haven't handled all the cases yet. Right? Cause we have another scenario. What if someone goes
[02:52:02]  count plus one? So this is all fine. Right? We, we know it timeouts, um, accessing in the component body will give us our, our error message
[02:52:16] . But what if someone puts it in a click handler? Let's look. My guess is what we've done right now is this is going to. Is this is
[02:52:27]  going to error every single time we click it? Yeah. Yeah. Okay. So we're, we're not done yet. Okay. So we need to look at.
[02:52:45]  Hmm. How do we want to do this? Yeah. This, this, this, this one's going to take a little bit more modification. Um, because,
[02:53:01]  well, we can, we can look at it right now. What, what, what does solid do when you create a click handler in here? Right. We,
[02:53:10]  we, we, we've been, we've been playing around with this all day. What is it on click? It adds this dollar sign dollar sign click property and puts
[02:53:23]  the handler on it. So, um, there, there's also a version that does like an ad event listener, but we're not gonna worry about that in the moment
[02:53:33] . So yeah, dollar sign dollar sign click. So what we actually have to do is get into the core runtime to do something here. So let's go to.
[02:53:42]  Yeah. How are we going to do this? Okay. I got it. I got it. I got it. So in web solid has like a built, we use
[02:53:54]  something called dom expressions on the hood. And what dom expressions is, is it's like a generic reactive renderer. And it, it, it expects an API from
[02:54:05]  the core to be able to like generate a renderer. I have a stream about this where I use preact for that core. Untrack is one of the functions
[02:54:14]  that we pass to it. Um, so it has untrack. It's funny. We don't actually need signals. We just need these in order to,
[02:54:25]  to render. But these, if you're, if you have these concepts or can map to these concepts in your reactive frameworks, you can get a renderer that says uses
[02:54:33]  JSX, just like solo does. But what I need to do, actually, this is, this is even more fun node module patching. We're going to
[02:54:39]  go into dom expressions, which is the underlying library. We're going to client JS, and we're going to look at how we fire, do event delegation. And what
[02:54:48]  is it? Uh, event handler. So, um, we add this event handler to the events and we use a symbol for it. And it keeps track of all the
[02:55:05]  global delegated events. Um, well, yeah, and this is a fair question, right? Why don't you just add a dependency rate and solid supports adding like
[02:55:18] , you know, on for dependency rate. But the, the, the challenge is this explicitness is nice in some places, but solid's actual renderer is actually create
[02:55:27]  effects everywhere. Like, like the, the way, like the way we actually, like, if you ever seen how it's like solid works, we don't re render
[02:55:35]  anything. We literally just pinpoint update the stuff. So technically each of these curly braces, this is a crit effect. This is a crit effect. So the end user
[02:55:45]  would ha like, are you like, are people prepared to, to like, I don't even know, like make binding count. Like, it's kind of imp
[02:55:57] ractical to add dependency arrays. Um, here we could like, look at the code and use a compiler to do it. But what if the dependency isn't visible
[02:56:10] ? Like what if you're calling a function that has a dependency downstream? Um, essentially the, the, there was a time when I was like very much on effects should
[02:56:18]  be explicit. But then I realized that literally all templating is effects. And at that point, um, at that, at that point, like, you know what
[02:56:27]  I mean? Like it would be forbiddingly, um, clunky to try and do dependency arrays for like every single binding. And so what I, I kind
[02:56:39]  of like pure stuff was the pure stuff, um, is fine in a sense that you don't need dependency arrays. So you could kind of like argue that, you know
[02:56:54] , like these are all each their own memo and then you don't need it. Um, but like in general, like pure stuff still has this problem, um, of
[02:57:03]  like people accessing stuff, you know, inside and outside, like, I guess what I'm saying is it's like, it's only like part of it. Like
[02:57:15]  the whole model is based off effects running. So there's always the potential of someone calling something outside of the effect, which is why we're here. It's less about
[02:57:25]  the having like the explicit dependencies. Like there's, there's other side effects of that too, because you like, how should I put it? Like, um,
[02:57:34]  then everything has to be like a signal. Like count can literally just be a function that has signal reads under it. Like we, we need a way of identifying the thing
[02:57:47] . I mean, I guess you could use memoization and look at the value and always execute, but then you're not tracking. Like, I guess you'd have to
[02:57:54]  wrap the, you'd have to always pass functions. So like if you had props, your dependency arrays would have to be like function closure prop dot value. So then
[02:58:06]  like, you couldn't really use this form of props. Like there's this cascading impacts all the way down to enable this for something that actually, I think the
[02:58:15]  total sum of the parts is like considerably bulkier is the way to put it. Um, at that point I'd be like, like, why aren't you using
[02:58:23]  react? It's much nicer. The, the biggest argument for this is like, I don't use on dependency raised stuff myself. I just use on track,
[02:58:45]  like the, and say like, don't track this, but the, usually the place where you want this is like. There, there actually isn't good. That many
[02:58:55]  good use cases where you want the explicit dependencies. I find it sometimes useful. If you have like nested stuff, you want to introspect, but you don't want
[02:59:03]  to track every single property of it. Like, you know that you just want to track the main thing and not every nested thing, but you want to like look through
[02:59:11]  it. So it's like sometimes easier to say like on list and then like go through it. But the problem with that is then you, if you, this is
[02:59:19]  usually not true. You usually do actually care about what's in the list, so to speak. So like, yeah, I, I'm not a big fan of on
[02:59:26] , but you need on or on track. You need like one or the other. And in the terms of like, like view, for example, doesn't have on track
[02:59:33] . They only have on, like, I prefer on track because if you're nesting scopes, like those nested effects I showed earlier, then like. Then
[02:59:41]  like, you know, situations where you give the callback back to the end user to do their thing. Like our four component on track is, is, I don't
[02:59:52]  know. It just feels like the more general thing. Like you can always track more things outside of the context, but like on. Yeah. It's, it's hard
[03:00:02]  to say. You can say ons explicit too. So you don't have to worry about it. It's just like a bulkier API for it. Yeah. You
[03:00:08]  know, I like that on, on track doubles as a peak. Like you can just go like untracked count. And because it takes a function, you can just
[03:00:14]  like directly pass the signal to it. Hmm. Yeah. Um, anyways, where were we here? We were, we were looking at our event listener, patching
[03:00:26]  the node modules. And I was, I've mentioned that. Yeah. This is a good use of a symbol. Um, this is actually a very good use of
[03:00:32]  a symbol. Um, we can find our event handler and it goes up the path. We do a bunch of some patching, simulate current target. I talked about this
[03:00:43]  on previous stream, um, some stuff to cancel streaming. If you're in a streaming and you're doing updates and then somewhere down here, we call the handler if it
[03:00:54] 's bound or not bound. So what we can do here is we can just say, we don't really care about any of this. Let's just go like unt
[03:01:02] rack this. And since this is like a friendly untrack, we don't even have to pass the second argument. Sorry. It's, am I pressing the
[03:01:16]  wrong shortcut? Yeah. We should be able to just go like untrack this. And then now all the event handlers are untracked in our, in
[03:01:27]  our safe way. Right? So if we rebuild. Yeah. Turbo doesn't remember. Okay. Dash, dash force. Um, this should be our, our, like
[03:01:40] , it's okay on track. It's okay. It's, it's, it's, it's okay. You know, this is why we're doing this
[03:02:00]  live. I want people, if, if talking through it, thinking through it, kind of understanding this is important. Don't worry. Like if you disagree with me
[03:02:07] , like we can discuss this and we can talk about it a little bit. I just, it was one of those things that I realized when, as I was working on
[03:02:12]  this stuff that like, I, I respect a lot of the decisions made and react in terms of the strictness and in terms of like clarity. So like, you know
[03:02:21] , uh, there was a point in time that I was like, I was like, I want the dependency rates. And this is before I ever saw hooks. I
[03:02:28] 'm just going to let you know. Um, like years before I saw hooks, I was like, I had in my head, I'm like pure stuff. Like create
[03:02:35]  memo, like pure computers don't need dependencies. But like in my old company, we use knockout and we knockout has like a not pure computed, which is just
[03:02:44]  basically effects. I made a new primitive over it called sync and RKO sync. Or it's kind of like auto run or effect kind of thing required dependencies. And
[03:02:56]  I made my whole team. If they wanted to put effects somewhere, they needed to put the dependencies in. So like, I definitely relate with that. I just, when
[03:03:03]  I started building the framework and, you know, building the templating, I was like, this is a lose. Like I've already lost this battle. We need,
[03:03:10]  we need this. Like we need it everywhere, you know, and you're not going to put the dependencies there. And I realized that the real key to it,
[03:03:21]  people get really worried on the read side. They're always worried about like accidental reads causing like weird loops and stuff. That doesn't actually happen as much as the problem of
[03:03:30]  people accidentally setting stuff. Like not realizing that the implications of them, like assigning a variable or calling a function with a parameter or something is going to cause some kind of downstream
[03:03:41]  butterfly effect to kind of trickle through the whole app. It's not about the dependencies are real. Like there is a graph there. Like this thing depends on this
[03:03:48]  thing. It's very rare that you actually want to track or break apart those dependencies, unless you're like resetting scope. Like we're kind of doing here. What
[03:03:56] 's for the most part, like those dependencies exist in reality. If you deny them, you you'll pay for it later, right? Things will get out of sync,
[03:04:05]  but you need to know when you go and update something that it's going to trigger a change that stuff's going to happen. And that was the biggest motivation for like
[03:04:15]  read, write segregation, you know, being very explicit about how you could pass stuff down, like no two way binding, like why, like, it's not a single
[03:04:26]  signal. It's like a get or a get and a set it's, it's all, I realized that was actually much more important than worrying about like, um
[03:04:33] , uh, explicit dependencies. So we don't see how react forget goes, but I think they agree. Okay. Okay. So we've built it now. So
[03:04:48]  now this one is DOM expressions. So now we need our other file, which is, um, web disc dev. Okay. All right. So it's this one
[03:05:02] , web disc dev. Doop. Doop. Doop. Doop. Doop. Now, blow out our beat. Mm-mm-mm. What did
[03:05:12]  I do wrong? I don't even know what that error is. Try one more time. Okay. No, there's a definite error here. Oh, interesting
[03:05:42] . Why is it? Oh, I see what's going on. Okay. Okay. I'm glad we did this locally. Um, we need to blow out our node
[03:05:54]  modules one more time. Our problem is our package lock from here is like locked at some old version of solid. probably I say old version, but like this should be
[03:06:04]  seven. Oh, and yeah, the types and stuff are wrong. And I don't feel like copying the whole folder across. So what we're going to do is,
[03:06:15]  um, we're going to reinstall solid one thing. And I think we're on two six here as well. I mean, this hat will handle it. Did this
[03:06:23]  hat, you know what the problem is? It's not actually the versioning in here. It's that the, it's the package lock. Like the, the
[03:06:32]  rangers are permissive enough. It's that this package lock, um, is out of date. There's an NPM package lock too. We just got them
[03:06:40]  all. Sure. Whatever. Okay. Okay. So now we replace solid, but this means that our files are, you know, actually let's just, let's
[03:06:58]  just nuke it. Okay. Okay. Okay. Now our files are out of date. So we need to go back and copy it. It's funny. Like
[03:07:07]  it shows that it's there, but I don't, I don't believe it. If that's the best way to put it. Like if I save this,
[03:07:13]  I mean, okay. Let's, let's, let's, let's, let's see if this actually, um, PM, PM dev. Okay. Let's
[03:07:26]  see if this actually does what we want. It's funny because our current code shouldn't error, right? Like our current code, we just did a fix, but
[03:07:37]  like, I mean, we can see it here. Okay. Warning still here. So it apparently is up to date. Okay. But our current code shouldn't error anymore
[03:07:46]  now. So we're, we're clicking this a bunch of times and it's still up to date. Okay. So did my, my other fix not get in here
[03:07:57] . Okay. Okay. Let's just try this one more time. This is, this is the funniest, funnest part about streaming is because you keep the text
[03:08:10]  so big so people can read it. I don't know if anyone can actually read it anyways, because it's like, I'm working in like the smallest little windows.
[03:08:19]  Okay. Okay. Let's, let's see if I can try this again. So we want dev from web and let's just look at event handler. It's
[03:08:35]  a sanity check that it got the wrapper we wanted. on track. Beautiful. Okay. It does. Okay. And then. Do, do, do, do,
[03:08:47]  do, do. Put this in here. Someone mentioned blowing out wheat as part of a script. You're right. I just, I'd be probably way more efficient
[03:09:04]  if I actually bent into tooling as much, but I just, I like doing it all manual to make sure that I don't make any mistakes. Of course I can
[03:09:16]  still make mistakes. Okay. Okay. Good. Not airing. Okay. Okay. Let's, let's do some sanity checking here. Okay. Let's get back
[03:09:31]  to our app. Of course types. Type script. Yeah. I love this. It's fine. It's decided. It's decided. It's decided that Type
[03:09:45] Script's not finding stuff right now. This is, this is always fun. Um, we're not going to worry about maybe, maybe we can open it and close it
[03:09:56]  again. No. Okay. That's fine. We're, we're not focusing on that part. We're focusing on, okay. So this works. Event handler.
[03:10:05]  Read. Work fine. If I go to the top of my component and put count here, refresh. Do we get it? I am not seeing it.
[03:10:23]  Um. Show. Maybe on sidebar. I just, I, I, I'm not trusting our, our builds are all in the right place right now. I think
[03:10:36]  there's like a delayed effect. Sometimes this kind of stuff happens. Show, maybe on the sidebar, I just, I'm not trusting our builds are all in
[03:10:48]  the right place right now. I think there's like a delayed effect. Sometimes this kind of stuff happens. Let's, what was the, what was the place? It
[03:10:55]  was read signal that we did like the main thing. Read signal. Yeah, this is the, this doesn't have it. Okay. All right. That's fine.
[03:11:07]  It's because when we reset, it somehow magically kept it for one build and not the other one or like not the, it's fine. Dev, copy, copy
[03:11:16] . All right. And then dev, dev. Bing, bam. Clean, go. The funniest thing is I can literally just like write that script with an man sign
[03:11:37]  because we run it every time. I'm just like incredibly. All right. Let's go console. Clear. Refresh. Reading and non-tractive scope.
[03:11:49]  Okay, cool. Okay. So only happens once top level there. Doesn't happen in my event handler. stop advertising to me. And it's funny. Early on
[03:12:15] , I got a lot of complaints to people that I didn't make my code window like big enough. And then I did a bunch of conference talks and I'm like
[03:12:30]  glued this way now. Cause even when I, when I do conference talks, everything's going to be big like this too. You get used to it. Yeah, it
[03:12:39]  is what it is. Right. Okay. So let's see how we're doing here. Okay. So this errors appropriately. this does not. So we're,
[03:12:50]  we're, we're pretty good. Um, and the timeout should still error. Let's do something like a little bit more substantial. Let's, um, let
[03:13:00] 's extract our app component into a counter component or something. Um, actually I kind of almost want to make the error more violent. So like we don't have to
[03:13:12]  go searching for it every time. Right. or this one read, uh, read signal. No, I'm in the wrong dev. So yeah. Read signal.
[03:13:29]  Let's just, let's just go all in at this point. We think we've implemented it. Um, let's, let's just go through, throw new
[03:13:38]  error. Okay. We're, we're, we're all in. We, we think we've implemented this. Um, let's, let's play around and see
[03:13:49]  if, if it's broken or not. So if I do this and I refresh, interesting. Yeah. I don't, um, I mean, I can tell
[03:14:05]  it's not working cause I don't see anything. I was kind of hoping, hoping that like there would be some visual indicator here that that stuff wasn't working. I
[03:14:17]  mean, I obviously I can drop an error boundary in or whatever, but I mean, I mean, I guess let's do that. Right. Why not index.
[03:14:32]  Error boundary is not going to catch everything. Like it was not going to catch like an async thing. So even if, no, what are you doing? Even
[03:14:49]  if I put this in here and I went, what fall art. So funny. Like they lost track of all our types right now. I don't know what's
[03:15:01]  just like each one, the error, the error to string. I want to say it's just not the actual string. Okay. Um, okay. Now, now we
[03:15:22]  have feedback. So presumably as we write our, Oh, I turned off HMR. So it's not going to matter that much anyways. Um, presumably as we
[03:15:33]  write our app and save it, although it's still kind of HMR. Whatever. If, if I go now and I do something stupid, it's gonna, it
[03:15:43] 's going to error on us. Okay. Perfect. Okay. Okay. Cool. So this works, this works, set time out count is going to not get caught
[03:16:07]  in the error boundary. Obviously that's the unfortunate part about this. Right. If, but if I go from the console, um, we, oh, what are
[03:16:18]  you doing? We should Uncaught reading a non tracking scope. Like it's, it's, it's happening. Okay. So we're not going to worry about
[03:16:29]  the async case. We're just going to assume that's fine and move on. Um, the errors will happen for you. So then let's, let's
[03:16:39]  start building something. Um, let's go in here. Source new folder. I mean, I could just, how lazy are we? We, we, I mean,
[03:16:51]  this is why we don't have single file components, right? We can just do like this and not care counter component. Um, it's so funny cause it's
[03:17:04]  not even a counter. I don't, I don't really care what it is. Cause what I, what, what I want to try next is, is that's
[03:17:13]  fine. We'll call it counter is move this into here, but keep this out here. So we want what counter, we'll have the counter. It's not
[03:17:27]  even a counter. It's like a special button for all our focus here, but we want props dot children. It's funny, uh, children, love, love,
[03:17:41]  it's not props or children yet though. Sorry. I'm, I'm like getting out of myself. We want to pass count into here. And then we want
[03:17:48]  like, we'll just make it increment. And we're going to, we're just going to put in a handler, like set count count plus one. So the,
[03:18:03]  the parents responsible for passing it down. And then our child component here is just going to have a button which calls props dot increment. And props dot children. And we
[03:18:24] 're going to be, put props in here. And we want to come, I can't remember. We, we have like a children friendly version of this. It's
[03:18:35]  like component with children or something. You can tell how much typescript I do. It doesn't matter. We're just going to, we're just going to do
[03:18:42] , um, increment is a, um, function void and children is a JSX element importing JSX from solid. And yeah, they're, they're, they
[03:19:12] 're just like not having our types today. It's funny. I put the effort of putting the types in and it's like, just like not having it. Cannot
[03:19:20]  find modules or JS front-term thing. It's funny. It's like, if I go in there and open the file, will you, will you find it
[03:19:27] ? Cause it's, it's definitely in there. Uh, man, that's, that's annoying. Okay. That's fine. Um, okay. So our counter
[03:19:37]  still works. Okay. And what I want to do though, is I want to do something. What happens if I do this and now I go in, I
[03:20:01]  go props and I go increment children error reading in non-tracking scope. Yes. Okay. So this will capture our destructuring as well. Let's, let
[03:20:16] 's actually look at the error message more specifically. do, do, do, do, do. Really? It's funny. There's like so many of these like
[03:20:38]  logs that, where's the red one? No. Oh, it's, it's not showing up because we're catching it. Oh, that's lovely. Um,
[03:20:49]  let's can, can I get like a, a trace on this? Let's, let's look at our, this is, this is so funny. Um,
[03:21:00]  yeah. What, what's, what's error dot cause? What, what will this do? Does this do anything here? No, um, dot stack. Yeah
[03:21:17] . It's funny. It's like, now I want to get rid of the error boundary. Uh, it's fine. I was like trying to like make our lives
[03:21:32]  more pleasant and easier here so that we could see the errors as we went, but instead I just suppressed us getting the errors in the console. Yeah. Yeah. So
[03:21:44]  now error at read signal children is children. So it's actually, it actually knows that the problem is, um, where is it? Sorry. Console. It knows that
[03:21:56]  it's the, it's not actually the increment that's a problem. It's the fact that you're trying to read children. Um, it's the fact that
[03:22:05]  you're trying to read children here. If, if, if we actually went to kind of, again, I don't know why we design our counter this way, but
[03:22:18]  if we went back to our counter app here and instead of passing a signal, like instead of wrapping a signal here, we just were like count, you know, like
[03:22:30]  if we just did that, this won't error because it's not accessing a single, like technically speaking, this destructuring is fine. Cause it's just bringing
[03:22:42]  in increment and, uh, and a string, right? It's the, the problem is if it's a reactive value, um, then we need to do it.
[03:22:56]  And this is, this is kind of what I was talking about. The, the tension on the library maintainers now, cause like if they want to access something that
[03:23:05]  could be reactive, like if you're, if you're like my component does not care about children, we're never going to update children. I know this because I designed
[03:23:17]  it. That is the design. You can obviously just still do this and you, you know, whatever. But if you're like, no, I actually don't
[03:23:26]  want to update children you to get around this era. Now you'd have to be like const on track. Um, sorry. Let's go see. Children's using not
[03:23:39]  a good example because, um, but you'd have to do this. And if you do this, if, if I am right and we did everything right. Sorry
[03:23:53] , it's not children, it's c. If we did this. Okay. What am I, what are we getting here? Untrack, c, props.
[03:24:11] increment. What's our error here? Um, props is not defined. Sorry. I'm missing the S. Um, this is, this is the problem when
[03:24:28]  TypeScript is broken in the environment. Prop is not defined because I missed doing it here. See, now this does what we want. It never updates the initial count because
[03:24:42]  we're untracking it. And it also does not error. So technically speaking, um, this, this is the onus on people because even though components don
[03:24:58] 't track, we all know that you have to explicitly say, you have to explicitly say, don't track this. If you, if you don't want it to be
[03:25:07]  tracked. So yeah, I mean, that's an interesting implication, right? Okay. Try adding create effect to the count component. Okay. Sure. All right. And
[03:25:23]  what do we, what do we create effecting on? Are we going to, are we going to do it on props.children? So I'm gathering, we
[03:25:37]  need to do create effect console.log. The, the count is props.children, right? Good, good, good, good, good. And we aren't getting
[03:26:01]  any errors. Let's double check that in the console. um, count is good. It's working. No errors. Yeah. So, I mean, this basically
[03:26:16]  works, right? I don't know how interesting that is. I don't know if this is a direction, like it's an interesting direction, right? Because the implications
[03:26:29]  here are such that to obey the strict mode. Uh, essentially, um, one would have to call on track in any component body or, um, timeout explicitly
[03:26:48]  if they wanted to like read something in those contexts. Event handlers are fine. Um, other reactive things are fine. It's just like, they kind of, it
[03:27:00] 's kind of funny. It's like, like, it's a good nudge because it's the kind of places where you're like, if someone does something like
[03:27:05]  that, you're kind of like, is it what you were expecting to happen? I don't know. Um, I don't know. I don't know.
[03:27:20]  I mean, is this just something else? I mean, I don't quite understand what the suggestion is because it's just going to tell you that create effect doesn't
[03:27:49]  want to doesn't want an object. Um, I'm not quite following what the suggestion is there. Oh, back when I was testing error boundaries. Okay. Okay
[03:28:06] . Sorry. Out of context of what I was. Yeah. Okay. Fair enough. Um, yeah, I don't know. It's interesting. It's,
[03:28:18]  I mean, it definitely solves the problem. People are like going like, why can't I just go const double count equals props dot children times two. Right. If
[03:28:41]  you try and do this, you will get an error that tells you that let's refresh again, whatever we choose the error message to be to say, Hey, you're
[03:28:58] , you're, you're, you know, I don't know. It's interesting. Yeah. I mean, the thing is, the question is whether it should
[03:29:16]  error or not. Right. Cause you, if you write that in Svelte, you can, it just means that it's an assignment that happens at one moment in
[03:29:22]  time, the exact same way it happens in solid. Um, but because of the syntax similarities to react, people kind of get really like this bugs them a lot more,
[03:29:34]  right? Like the cool thing here is we could write whatever error or message we want. We could send them to docs or whatever. Cause like, yeah, you,
[03:29:43]  it's like, did you mean to wrap it in a function or, you know, now it works? I don't know. It's interesting. As I said,
[03:29:52]  the linter handles a lot of these cases. It's just, it can't handle every case. So it's interesting. If it is like, is this too
[03:30:03]  reactionary to like, basically be like, no, if you want to access something untracked in kind of known places that are untracked, you have to unt
[03:30:13] rack it. Yeah. Yeah. Yeah. Yeah. Exactly. That's, that's, that's what we got to do. Right. Um, yeah.
[03:30:28]  Yeah. I think, I think that's the solution, right? Reminder here. I mean, it's interesting how much consideration this has kind of coming into this
[03:30:38]  now it there's this like perspective that like from a learning perspective, this is a lot cleaner. Like you just like understand the system a lot better. So that's like
[03:30:48]  the incentive to do that. It's just, I have to recognize that if we were to add a strict mode, we, we basically ought to be opting in every
[03:30:58]  library into being a strict mode because as soon as one person used strict mode and the library didn't, you know, didn't obey, so to speak, um,
[03:31:08]  then suddenly you're going to, you're going to get warnings, you know? Um, so it's kind of like, you know what I mean? It's,
[03:31:19]  it's kind of, it's kind of tricky because it's kind of like you're pretending like it's not a thing, but it's really a thing. You
[03:31:28] 're like, you're just forcing this change on everyone, you know, except for the end developer, the, the, the, the, the, the, the person
[03:31:36]  who just picks up solid and just plays with it and doesn't realize, um, isn't going to have any pain here. And just, it's, it's,
[03:31:44]  it's so funny. Like, as I said, it's a way to keep like the ecosystem in check. Um, yeah, I don't know. I'm,
[03:31:52]  I'm still kind of on the fence here. I'm not sure. Anyway, I think it's enough on this topic for today. I don't know. The
[03:31:59]  other fun thing I was thinking of doing at one point, but this went way longer than I thought it would, was to implement streaming on Vercel because, uh,
[03:32:08]  I got access to the new docs so we could add the Vercel added streaming to their, to their node server. Um, not just to, um, their
[03:32:20]  edge functions. So I was like, Oh, let's, you know, go do that. But it's already three 30. I'm not gonna bother that.
[03:32:30]  could live. Well, that's the whole thing. The strict version still works when you're not strict. So like what you're basically saying is go update your library to
[03:32:39]  be strict, right there. At that point, the strict version, the non-strict version are both strict, right? Like yeah. Yeah. Yeah. So I
[03:32:59]  mean, forgetting it is actually, except for in the JSX, which now we have typescript to guard us for, forgetting it is actually really, really obvious. I
[03:33:08]  think I showed it earlier where like, um, you end up getting like a function or something like, uh, in like place. Like if, if, if, if
[03:33:18]  the thing is like, this is so weird, the typescript is so annoying, like in here, cause it's not working, like everything's any, like,
[03:33:26]  I think I'm back in the playground. I don't know what happened to, I, I, I borked that, that place. But what I'm getting
[03:33:31]  at is like, um, the, like, I think, I think the, the parentheses are like, I think because of typescript and I think because the,
[03:33:45]  like with the exception in this one place, you will know, you'll be like, you'll see like a function suddenly and you're like, oh, that's,
[03:33:51]  you can't add a function and a number, you know? Yeah. Yeah. And, and this is, this is the, this is the truth, right?
[03:33:59]  The funniest thing is you could pretend like it's not a breaking change because technically speaking, like if it doesn't throw and it just warns, like there, it doesn
[03:34:09] 't actually like all the existing code still works. It's just showing new warnings if the person opts into it, but it's just, yeah, I don't
[03:34:20]  know. Like actually in react strict mode, does it throw? No, it just console logs things twice. So yeah, like if we treat this as a warning system,
[03:34:28]  it just pesters people and it causes like, this is where the friction comes in. I, um, solid developer building my app and I start using these libraries and then
[03:34:38]  I see like, as soon as I import this library, I get like 30 console warnings, you know, part of it is I just ignore them at first, but then
[03:34:46]  like maybe, but then I've also might be like, Hey, I added your library and it has like a whole bunch of warnings due to strict mode. Can you
[03:34:54]  go fix it? Well, I mean, it is just a dev, it is just a dev mode. The problem is we're telling people to change how they write their
[03:35:09]  code, but it's not an error. It's more of like a strongly worded suggestion that you should change the way you write your solid code. Yeah. I
[03:35:20]  mean, there, there might be more details to it than that, but it's like, it's still like, it's only there so that you can like know that
[03:35:29]  you're doing stuff wrong. And then when you publish the production and none of it matters, which is there, but it could cause you to change the way you write
[03:35:39]  your code and that's the, that's the benefit of it. All right. Let's, let's get wrapped up. Let's get ready for this week in JavaScript
[03:35:51] . Yeah. Yeah, exactly. Yeah. We don't have to throw. I was just, I was just kind of, yeah, yeah, definitely. Um,
[03:36:02]  so these are all like decision points on it. I just wanted to kind of like, I figured I had a hypothesis on like what we could do. And I think that
[03:36:11]  mostly covers it. It's really as simple as intercepting where we read the signals and on and modifying untrack and then basically untracking events explicitly. If
[03:36:25]  we do those three things, um, essentially we could add this, this is, this took me longer just fooling around with the tooling here than it to actually like implement
[03:36:35]  it. So like, this is not a question of whether we can implement it very easily. It's a question of whether it makes sense, but that that's, that
[03:36:42] 's why I wanted to look into it. Okay. Let me, I'm just going to pop out into this mode here for a second while I get, um,
[03:36:56]  ready for this week in JavaScript. I don't know. It was a, it was a fun experiment. We just finished looking at what it would take to implement a
[03:37:18]  strict mode in solid. So we kind of designed it out. Then I implemented it and then we played around in, uh, stack blitz, um, to try to
[03:37:25] , um, you know, test it out and see if we liked the implications of it. The, the, the high level idea behind the strict mode though, was to
[03:37:36] , um, basically warn people whenever they tried to access a reactive value in a place that wasn't tracking. That's the idea. Like, so if you know,
[03:37:46]  the whole, like we could, we kind of started looking at how ESLint warns people about that stuff. Like, you know, like if you do double count
[03:37:54]  equals count times two and you don't put it in a function, ESLint goes, Hey, but we're like, there's situations that go beyond that. Could
[03:37:59]  we as a runtime mechanism be like, Hey, you, you should, you know, you're trying to do something you probably shouldn't be doing. So we actually implemented
[03:38:09]  it, um, in a way that it, it gave us the warnings in the right places and not in the other places. Cause there are places that are not tracked
[03:38:18]  like vent handlers where you don't want the warnings. So all in all worked out, you know, not bad, but it's, uh, I don't
[03:38:27]  know. Some people like it. I haven't heard many negatives in the chat, but you know, probably worth checking out anyway. Um, sorry. Did I, did
[03:38:39]  I get a raid? Is that what happened? Did I just miss that? Yeah. Oh yeah. There it is. Hey Austin. Yeah. Okay. I see
[03:38:50]  it. Yeah. Sorry. I always have to switch back to Twitch cause I'm on stream. Uh, cause I'm on, um, stream yard. Does that add
[03:39:00] , uh, over to the vinyl minimal? It's basically like an extra on track call. Um, and all the extra code gets tree shaken away. Um, except
[03:39:14]  for that one extra on, like the extra on track call in only in places where you are opting into this behavior where you're like saying, I do want to unt
[03:39:23] rack it. Um, so very, very, very minimal bundle thing. The problem is like, you just can't detect everything at right time. Yeah. Like
[03:39:32] , I mean, that's, that's, that's the gist of it. Like we, we, if you, if you, I think the example we use
[03:39:41]  is if you create an effect, uh, I don't have it open anymore to share my screen. Anyways, if you create an effect and put a set timeout in
[03:39:47]  it, the linter can't tell that the function inside the set timeout isn't tracking, but like, or not as easily. Right. Cause so it's,
[03:39:55]  it's that kind of thing. Ooh, file upload stream handlers. Oh, that's fun. So if like playing with solid start, Ooh, I should,
[03:40:04]  that sounds like fun, maybe more fun than the people had here. I don't know this, this, this was more just curiosity thing for on my side to see if
[03:40:14]  we could, um, if, if we could like kind of play with this, you know, it's hard due to the fuzzy boundaries between. Yeah. I mean,
[03:40:26]  and all those APIs now are kind of in a weird poly state. Like we try and use nodes request response object poly fills, like in, uh, what on DC
[03:40:33]  or whatever, but like, and, uh, and they have a readable stream implementation, but like, I found gaps myself in there. So like, we've been poly
[03:40:45]  filling some of that stuff ourselves to filling gaps in their implementations. And I think, I think that's the hardest piece. Like we've looked at remix. Cause remix
[03:40:53]  has a lot of the same problem space where they're like, you know, you find yourself like patching these, um, built-ins that are kind of supported
[03:41:02]  by node, but not yet. Node 18 changes the equation, but I don't think, I think we're still minimum version node 16. So we're still like,
[03:41:09]  we have, we're still supporting the older poly fills as the mechanism rather than just using node 18 directly. That's something we can look at changing in the future though
[03:41:17] . But yeah. Good point. I've had to copy my dreamers code. Yeah. And that's the thing we're all based on the same basis. Yeah.
[03:41:27]  So, yeah. Um, yeah. Asic fetching possible. Yeah. I mean, sure. Like the thing is the components don't rerun. Right. So
[03:41:37]  like, you can just like fetch anywhere, set a signal and have that update the stuff. We have a primitive call that called create resource. Um, but I generally push
[03:41:44]  people more towards using suspense and stuff. It's just a better pattern. Um, but yeah, uh, check out create resource. Um, but yeah, I mean
[03:41:52]  the most basic version is literally in component body promise then set signal. Um, okay. Let me get set up for this week in JavaScript, which is what we're going
[03:42:07]  to do now. That's why I'm full screen on my own face so that I could quickly get this around. I don't know if it's going to be
[03:42:17]  the longest this week in JavaScript, um, to be fair. Um, but, um, you know, there, there was definitely some news, um, so to speak
[03:42:28] . So we can, we're going to talk about that for a minute here. Um, just going to open up a few of my browser tabs here. So we
[03:42:41]  can get to get started and see if I have any bookmarks. I don't know if I have any bookmarks this week. I was working really hard on
[03:42:59]  solid. Um, yeah, no, I don't have any bookmarks this week. I was working really hard on solid 1.7 and that's really what kind
[03:43:07]  of shows up. I see. Yeah. Honestly, the multi-part thing was just because it was like, yeah, it w I think it was just like the,
[03:43:25]  it's like the baseline we started with. Like we wanted to support the, the multi-part forms and then we just like, we're just like, okay, we
[03:43:33]  have a solution here. Like it wasn't, we didn't give it that much thought. We, because we, we knew we only needed like a single solution and
[03:43:39]  like, then we figured like, like we just had one and that covered like the bases. But yeah, I mean, yeah, I, our story of memory, which
[03:43:49]  is not what I'm going for. Yeah. So yeah, I haven't played with the upload stuff that much yet to be fair. It was just like, we were
[03:43:56]  looking at the form mechanics for progressive enhancement and yeah, they, it probably could do with some tweaking. Okay. Okay. Um, I think I'm good.
[03:44:09]  Let me just double check anything else here. Yeah. Okay. Okay. Yeah. This can be a little solid focus just because of where the release and stuff, but
[03:44:32]  let's do it. Okay, cool. Let's, let's, let's, let's, let's roll. Um, where are we at? Okay.
[03:44:48]  Okay. Let's go. So it is time to talk about this week in JavaScript. And for me this week in JavaScript, um, definitely a few things happened, but
[03:45:02]  I had a lot of my focus distracted because I've been working on solid 1.7. If you checked out our last stream, we talked all about TypeScript and solid
[03:45:09]  1.7. So that was, you know, a lot of my focus, but we'll talk about a couple other things this week too, but you know,
[03:45:16]  getting that, that train rolling. Um, I, this week started with me with a really cool announcement that the shocker UI and, and Zeg, um,
[03:45:26]  basically this kind of similar relationship with arc UI. Um, and it came out of, um, it came out with solid support, which was, um, always, you
[03:45:39]  know, nice to see when a new library comes out and it has solid right out the gate. Um, piece by piece, the ecosystem is filling in quite nicely and
[03:45:50]  it's, it's awesome to see us like on the shortlist of things that work with this universal headless UI component. Um, so very stoked to see that.
[03:45:58]  Oh, you're right. I didn't put the banner up. Yeah. Yeah. Yeah. It's funny. Cause I used to edit these things. Right. So
[03:46:07] , um, yeah. Oh, well it's fine. Like I made separate videos for several months and then I never released them. So here we are anyways. Yeah
[03:46:17] . So we're talking about this week in JavaScript. Sorry about that. Um, big, big news for solid, probably the biggest news for solid this week is that Dan
[03:46:28]  Jutan is back. Um, he was on stream, um, going over all the details of solid and solid docs. And that was a lot of fun, uh,
[03:46:37]  two weeks ago, I guess. Um, but he's, he's reinvested in docs. He's looking at actually raising, money for open source and stuff because
[03:46:47]  he's decided that he wants to spend half his time on Astro docs, half his time on solid docs. And he's good. And he wants to figure out a
[03:46:54]  sustainable model, which will let him do that. So I'm very stoked to have Dan back. Um, it's what we need. It's what the, like solid
[03:47:01]  docs need a shot in the arm. Um, you know, we have people working on them and a bunch of contributors and, um, our fellow, uh, uh,
[03:47:09]  Michael or deaf showgun has been doing an amazing job at kind of like pulling that together, but it's very different. The amount of effort someone can do when they
[03:47:17] 're, you know, you know, volunteering their time where they can versus someone who, you know, spends, can dedicate their time to it. So I'm very happy
[03:47:27]  to have Dan back and, um, I'm expecting really exciting things for solid docs in the future. Yeah. I mean, I think I mentioned before I was on an
[03:47:37]  angular podcast. That was, that was fun, but, uh, um, the other big news for us this week, um, obviously is, yeah, I was
[03:47:48]  also on this, this, this is the podcast. You know, when I keep on talking about whiskey, um, uh, this check, check this one out. Um
[03:47:56] , there was whiskey drunk during this. I don't think it went to my head too much, but it's a very different type of podcast. So I just want to
[03:48:04]  give that a shout out, but sorry, back to the big, big news for us, uh, this week, uh, on solid camp with solid 1.7
[03:48:11]  came out, which had all those typescript improvements that I talked about last week. Um, and, uh, I, I couldn't be happier. As I said
[03:48:23] , the first time I opened the playground and saw the, the red squiggly line, so to speak, um, I was, I was just thrilled, right? Um
[03:48:32] , that, I mean, that was what the, this whole thing was about, which has almost 700 likes and 140,000 views. I, I'm, I'm
[03:48:43]  glad people liked it. Um, it, it definitely, for me, that it's a moment. I, this, it seems like such a small thing and everyone
[03:48:52]  like questioned every API choice along the way, but, um, I think this sets like groundwork for the future solid, like sets of precedents and I'm very
[03:49:00]  excited about what this means. Um, so yeah, I, yeah, I'm very excited for that. I thought it was an overview, not a green screen. Well
[03:49:13] , yeah, it's cause I didn't realize like they were going to use the video. I thought it was only the audio. So I was just, I was just
[03:49:18]  like, however I was, you know, cause they were literally sitting there on stream drinking whiskey. So, I mean, I mean, that works too, but yeah
[03:49:27] , I mean, I, I don't, the funny thing is I don't have much more to say about 1.7 because, um, I talked about it all
[03:49:34]  last week. It really is a big release. Um, there's been some bugs coming in some weird ones. Um, but we're working through those and I'm
[03:49:42] , I'm very excited for the next step. So, okay. That's most of the solid news to be fair. Um, so let's, let's, let
[03:49:55] 's continue our conversation now on the other news that happened, uh, this week and that largely was a couple of things. Okay. I want to, I want quick,
[03:50:08]  quick shout out to quick. Um, they released their RC candidate this week. Um, so they are very rapidly approaching 1.0. They've been piece by piece
[03:50:20] , adding all the pieces they need, including the, the, the big part is for them. They decided that they couldn't go to 1.0 with quick without quick
[03:50:34]  city, essentially the meta framework is as important as the core framework. And they worked on these things together to basically build them towards that goal. So essentially they understood the
[03:50:47]  use cases. So quick city going to 1.0, um, meant quick to go to 1.0. Um, so yeah, a lot of, a lot of
[03:50:58]  the stuff that we've seen, I don't think there's anything new coming here other than just stability, right? They have obviously the resume ability. Um, quick
[03:51:08]  city has adapters and middleware. Um, they have their, you know, server function, RPC based APIs, um, file waste routing. Um, they've
[03:51:18]  been getting a lot more, you know, integration with existing, uh, UI, our ecosystem libraries, and they have the, their, uh, uh, quick react
[03:51:29]  bridge, um, kind of set up. So, um, yeah, I think it was a good timing. At one point they were like, we're not going to
[03:51:37]  release it till we have out of order streaming. I think, I think they don't, I don't think they need it. I think they just need to, you
[03:51:43]  know, consolidate on what they have. And I, I, it sounds like they're in a good place. So awesome to them. I'm pretty sure we'll
[03:51:50]  see a 1.0 pretty soon. All right, cool. Um, yeah, so that, that leaves us with, okay. Yeah. I mean, there was a
[03:52:11]  few, um, there's some other content I want to ship here too. I don't know if everyone saw this. Um, we've been talking about react server
[03:52:21]  components, the stream with Ben Holmes and Danny Abramoff was, it's what I've been waiting for, so to speak, because I mean, I already know how
[03:52:31]  server component works. I've been explaining it on stream, but every time I've been watching Dan explain it, the description explanation gets better and shorter and tighter. And finally
[03:52:39] , to the point where the stream, yes, it's a long stream, it's like three and a half hours or something. Um, they actually implement a router
[03:52:45]  with server components. Like they actually build the whole thing without using next. So like, if you really, it's, it's, it's, I heard someone call
[03:52:52]  it a Ryan Carnietto style stream stream. So if you want to really get into it, I think this is a great, great stream, um, to check it
[03:53:00]  out. Um, they talk about all aspects of it and they build something to actually show how it works. So, um, high regards to this and definitely something you should
[03:53:10]  check out yourself, which leads me to, as I said, obviously, I'm not going to be, I'm not talking about Elon's open source or whatever.
[03:53:22]  That's just not in my scope of things. Um, sorry, before I do that, the other stream that was really good that I wanted to shut out was the,
[03:53:32]  uh, Vue, Vite, Theo, Evan stream. I'm going to throw out here that the stream was a, had almost half of it was Evan and
[03:53:42]  Theo talking about next and react server components. So do keep that in mind. But when Evan starts talking about the future of Vue and what excites him, um,
[03:53:53]  I was right there with him. Um, very interested to hear his thoughts on vapor. He talks about solid a whole bunch in it too, which is really cool to
[03:54:01]  hear. Um, this, this, this is also a great stream to check out that can happen this week. All right. So that just leaves us with, um
[03:54:12] , the other big news this week. Um, Dominic Ganaway, creator of Inferno and Lexical, um, has been working on a new framework.
[03:54:26]  Um, everyone, we've been talking about, um, Octane, I've seen it, uh, basically he took something like a react forget type, uh,
[03:54:35]  syntax and compile it down to something kind of like solid essentially. And he's been shopping it around, trying to get buy-in from, you know, different parties to
[03:54:44]  see if he could like build it, um, with funding and find a way of doing it, which is hard work. Uh, you know, the bar is so high
[03:54:52]  for frameworks these days. And as I mentioned, sometimes you can, you know, spend a couple of weeks on something and build something and build something really incredible. Kind
[03:55:00]  of like what I was talking about earlier about like, just like spending a few hours and building a fast framework, but the whole rest of the buy-in takes so much
[03:55:06]  more effort and time. Um, it looks like what's actually going to happen now is he is joining Vercel to work on Svelte. And my understanding is
[03:55:17]  to work on Svelte 5. Svelte 4 is obviously already in the works, but he's kind of working on the re-imagined future version of S
[03:55:24] velte to take advantage of his amazing knowledge on compilers and performance. So this is like, in my scope of things, huge, really interesting because as we
[03:55:35]  know, Svelte's language has had certain kinds of restrictions, um, placed on it because of limitations of compilation as we do it today. And that has lent
[03:55:47]  it certain properties that I find less appealing. Dominic being there and working on that stuff could really change the math, so to speak. So I'm very excited to see
[03:55:59]  where, where this goes, because while I'm kind of disappointed in that we might, we're probably not going to see Octane, like the framework he was working on
[03:56:08] . Um, I am excited that, um, the ideas there will live on, um, so to speak. And I'm still very interested in seeing how, like
[03:56:20] , the work and how he's going to approach, um, the reactivity. So very, very, very cool. And on the exact same day that that news
[03:56:29]  came in, Tomocino, as many, you know, um, one of the early kind of like leaders, uh, at meta, um, around the react project
[03:56:38]  is also joining Vercel. And it's, it's interesting because he kind of stepped away, you know, from that like a couple of years ago, you
[03:56:47]  know, kind of distances himself a bit. And I don't know if he's going to be involved on the react side or what, but he's joining Vercel
[03:56:53]  along with many other meta alum, so to speak. So it's interesting because I have a Tom is, does, does amazing work. And you can see that, like
[03:57:05] , you can see that in the way that the people who've worked with him talk about him and the, and the impact he's had on projects. I don't
[03:57:12]  know what he's doing at Vercel, but this is definitely something to be, uh, looking out for. It's very, very, very interesting. Yeah.
[03:57:22]  I mean, it comes to mind. Um, it definitely is a contrast to the economic situation that's going on right now. So I, I, I've,
[03:57:36]  I'd love to see how, like how this all fits into the plan, but I mean, in the meanwhile, these are two amazing individuals, uh, joining up with
[03:57:46]  them. So very, I'm, I'm always happy to see when open source, um, gets supported and that, um, money, you know, goes into supporting
[03:57:56]  people working on open source. So like, I mean, how can you not get excited about this? As a new person in the web, I thought it was,
[03:58:14]  um, early on, uh, Tom was one of the, one of the, I'd say one of the main guys, especially cause he was very vocal. Like,
[03:58:25]  um, not very, but he was like, like, he did, he was involved in conference talks, putting react out there. Um, but like, obviously Jordan
[03:58:33]  walk was the originary original visionary. He got Tom, you just watch the honeypot documentary documentary and, um, sorry. And Pete hunted kind of in. So like
[03:58:45]  he, he was one of the early groups group over time, you know, it's like the, the kind of visible face of the react team changed, you know
[03:58:56] , more, more, you know, Danny Abramoff came in at, you know, Andrew Clark, you know, and that, that kind of direction changed. But
[03:59:03]  in terms of the early react, um, Tom is definitely one of the, the earlier faces of it, even though, as I said, I, he's not the
[03:59:11] , it's not like the same as Jordan Walker's sub is in terms of being considered like the visionary or the main, the keeper of the vision. So, but
[03:59:21]  the thing is, Tom's impact goes beyond his public facing part, which is, you know, important to know. So yeah, not, not like this, um
[03:59:36] , react, uh, was, had the win over meta and it was kind of like a team, like in a sense, Jordan walk was that engineer like that, like
[03:59:49]  the, it was his idea. He pushed it at first. Um, you know, he had, he, he had a few different prototypes before they became react.
[03:59:57]  Um, so to speak, uh, at some point, Jordan kind of got further away from the project and Seb kind of took over as a visionary, but Seb was never
[04:00:07]  very, a public person. So these days, you know, it's funny, Dan Abramoff usually gets that thing, even though, interestingly enough, um, he
[04:00:16] 's more on the teaching docs side of things, uh, per se. So yeah. I didn't invent react. Exactly. Hey, Dev, how's it going
[04:00:34] ? All right. Um, but that's the thing. So I don't know. I, one, I, it was funny this day. I just felt like
[04:00:44]  it was on Vercel news one last piece on, on, on, of news this week that I thought was really cool is Vercel made Lambda support streaming,
[04:00:55]  which is amazing because we've been waiting for Lambda to support streaming. It feels like for a decade, um, like almost all serverless functions that aren't the new
[04:01:07]  edge type, so to speak are on, um, AWS, like Lambda is the underpinnings of Netlify Vercel. Um, you know, like for
[04:01:14]  your, when you get, when you go somewhere and it's like serverless, it's generally AWS Lambda and they just haven't supported HTTP streaming since the beginning. And
[04:01:26]  apparently it's coming soon, but because of how important it is to modern frameworks, this is another example where I was talking about like Vercel just kind of brute forcing
[04:01:34]  the way or react basically just going like, yeah, no, we're going to make the platform support us. Um, they, Vercel act, you know
[04:01:42] , like put, you know, their themselves behind their mouth behind their money or whatever the term is, you know, like they went and implemented their own streaming solution on top
[04:01:51]  of AWS, even though AWS hadn't done that yet, which is quite, um, interesting. How did they do that? Is that the question? Well, it
[04:02:10]  involves, I believe, proxying between the edge functions in a way that they can use the edge as a, as a proxy over AWS so that they can stream data
[04:02:24]  receiver. Yeah. And then stream out from the edge. Yeah. This, this is some crazy stuff. You kind of go like, I wish I could just use
[04:02:33]  Lambda directly, but they've, they've got a solution here. I'd want to, I want to try it. Uh, that, that, that was the whole
[04:02:38]  thing when they released the article and I go give them some major props here, a little solid start add on that was maybe because I nudged them a bit because when they
[04:02:47]  put this out, we weren't in there and I was like, Hey, you know, um, which is fine. We haven't worked with them recently. We're
[04:02:53] , we aren't part of this part of the project, but we were, we were the first, uh, framework to support streaming on Vercel. Like they,
[04:03:00]  they literally released it. I thought next JS released like next 12 released with the streaming feature. And I found out they actually didn't. So actually solid start was the
[04:03:07]  actual first framework where you just go like deploy to Vercel streaming and it just worked. It, we basically implemented it the day that it came out. So,
[04:03:17]  uh, I'm glad that after I mentioned that, they actually do it. Um, it's funny. I, if you look the Twitter archives far enough, you'll
[04:03:29]  actually find, uh, we're actually posted on the like exact same day. I was like here, streaming solid start on, on, on Vercel edge, but
[04:03:36]  now it's on regular Lambda and apparently it's just a toggle switch. I'm going to go into solid start, um, in the, in the next week,
[04:03:43]  probably an ad support for that. So we'll have streaming both on edge and not edge run times, which it's great. This is one of those things I've been
[04:03:51]  keeping us back. I solid actually by default and solid start doesn't do streaming. There's a couple of reasons for that, but part of it is actually infrastructure support.
[04:03:59]  And, uh, yeah, um, this is definitely one way to do it. Um, build your own infrastructure around AWS to support it. So I dunno, it's
[04:04:09]  kind of cool. He, he did at one point, but then if you look at the quote tweets here, he he's like, here's a little bit more
[04:04:21]  detail of how we did it. He didn't get too technical, but if you actually like finding here, um, I'm pretty sure I saw it when he,
[04:04:31]  when it first got released, he was, he was like, we elaborated on our solution here. Yeah. Right. Cause Jacob, um, was trying to like,
[04:04:44]  think about it. It's cause like everyone is kind of stuck with this kind of scenario, right? So user HVC have a way to make connection that very
[04:04:59]  call originally. Yeah. So everyone's like looking at, it's so funny. Cause I've talked to people related to AWS and stuff and they're just like, Oh
[04:05:07] , you guys are over hyping stream. You don't really need streaming. It's not important yet. Like the whole front end ecosystem is like hinging on this.
[04:05:14]  Like it's such a miss in terms of like perception. I remember Brian getting really kind of upset at thinking going like, look, we can do web sockets,
[04:05:21]  do this and like talk about all these other things. And none of them actually solve the problem that we want for streaming. It has nothing to do with web sockets or
[04:05:29]  like streaming stuff after the fact that much. I mean, that helps in some places. It's, it's mostly like just being able to start responding from the server,
[04:05:40]  loading JavaScript assets and stuff before all the data comes in, in a way that lets you fetch from the server. Like it's just like, other than the, like
[04:05:50]  some oddities around HTML, not being able to like this, you know, timing of you having to like send the headers and stuff. It's just like pure win that
[04:05:58]  no solution that involves the client making a handshake back can do. Like it's literally uniquely this, you need it. It's not, it's not like front
[04:06:07] -end like doing something silly. It's just literally the reality of things. So I keep on hearing from people at AWS that it's coming soon. But I guess not
[04:06:20]  soon enough. So yeah, very, very cool to see this kind of work, obviously push next forward. It is interesting because, um, you know, I mean
[04:06:33]  like the type of work it takes because like now I guess Vercel is the only place where you can do non edge, um, streaming serverless, um, basically
[04:06:46]  where you can actually use a node runtime so you can have Prisma plus streaming, so to speak. And, uh, that, I mean, that's kind of
[04:06:58]  compelling, um, you know, especially for frameworks which support streaming. So I don't know, definitely, definitely interesting. So, yeah, I mean, in the
[04:07:24]  future, I'm, I'm hoping that the standardization of like winter CG and like that stuff around the edge runtimes, like I'd rather, I kind of almost
[04:07:39]  rather be doing stuff not in node, maybe like the newer node kind of trims away some of the other stuff, but like, I've almost rather just having this
[04:07:47]  like standard edge type runtime that we're our standard serverless type runtime and just not have to worry about these kind of implementation details and just be like, oh, I've
[04:07:57]  got a stream, send that on the response and not have to get into this level of thing. Um, that would be nice, even nicer than this. But in
[04:08:06]  terms of the immediate future, I mean, or the immediate time period, this, this is very cool to see. And with that, that's this week in JavaScript
[04:08:17] . I know, not, not a ton. I might have missed some other news. I mean, we, we can always bring in a little bit of drama from time
[04:08:28]  to time, like, uh, like, you know, Ben Holmes and Dan Dutan, um, are going to be, uh, going live this evening, actually
[04:08:41]  talking about, uh, uh, seeing if they can implement React server components in Astro, which is kind of cool. You know, uh, we were on a space
[04:08:54] , um, a bunch of us a week or so back and Dan Abramoff was like, Hey, you know, you can put server components in Astro and
[04:09:00]  we're like, yeah, why not? You know, because even in Astro, you know, there could be, even if Astro with client side, um,
[04:09:07]  this client side rendering hybrid kind of mentality could have value for server components because it makes the boundaries permissive or whatever. So Astro supports everyone. So I think,
[04:09:18]  I think this is interesting. It's, it's funny that Matthew Phillips is like, this isn't the roadmap process pen, which I'm gathering. He's talking about
[04:09:26]  live vote. Yeah. It's been four hours, but I mean, usually there's, there's like a little bit more content. I wasn't sure if I
[04:09:49]  was going to do a stream this week, so to speak. Um, but you know, I found the opportunity to at least test a theory, um, in terms of
[04:09:59]  strict mode and I was interested in what people thought or felt about it. I think it's one of those things you got to see to feel to get the, to get
[04:10:07]  the impression of it. You know, like, do you want to untrack, um, explicitly everywhere? Like what does that feel like? They don't want
[04:10:23]  to, yeah, but I mean, I don't, I don't think, how should I put it? I don't think Astro and react should be battling each
[04:10:35]  other, so to speak. Like, I don't think, I don't think it's, I mean, there's a bit of that because reacts like fully react
[04:10:42] , you know, like kind of, you know, doing that thing right now, but it's like Astro doesn't care. Like really, or they shouldn't from
[04:10:51]  my perspective, they should be like, okay, let's, you know, react has a feature that might not make sense in Astro. Well, whatever, we
[04:10:58] 'll support it. Like who cares? Because if you ever, if you have react and you want to use it in Astro, you can, and that's good.
[04:11:05]  And if react wants you to do this pattern, sure, you know, Astro is a server runtime. We can, you know, put some server components in there,
[04:11:14]  you know, have at it. I feel like from that perspective, that's not where like we should be like burning things. I think what's more interesting is,
[04:11:28]  is there a future where Astro and alleviates the need for something like next, that's more interesting. I'm, I'm fully on next and Astro, not
[04:11:38] , oh, you know, completely aligning, seeing eye to eye, but react, you know, like I get why that the opinion exists, but it's like
[04:11:54] , it's funny. Like if it makes sense, it's not too much work. Astro supporting any react like feature is just like tell, it just adds to,
[04:12:05]  to the Astro story. It doesn't matter if no one even uses it. If it doesn't make sense to, if Astro comes up with like a hybrid client
[04:12:12]  thing that just is way easier and more ergonomic and cuts the JavaScript more and just, it's just beneficial in every sort of way over what react server components does,
[04:12:21]  still having support for react server components, putting that checkbox is just a win because then people can go like, oh, I want to use your extra components. You can
[04:12:29] . And then people like, oh, wait, why am I using react server components here? This is even better. Like, like that could be, that could be the
[04:12:35]  experience. Like it's just, it just bridges the gap. And I think that's like Astro's power. Like if you're going to be agnostic
[04:12:42] , Miles will be agnostic. Like lean into it. Yeah. In a sense. And they can even have actual more server component things, but like, who cares
[04:12:53] , right? Like I've, I've, I've been seeing a lot of this actually. And another example, I was like Astro and quick, you know,
[04:13:00]  whenever the conversation comes in, you know, especially quick guys are like, we get no benefit out of running inside of Astro. And it's like, yeah, cause
[04:13:07]  that's kind of true. But I'm, I'm like, I'm, it's also kind of like, who cares? Right. Like I've, I
[04:13:14] 've been working a ton on like 1.7 type stuff. I, I only managed to like, I released 1.7, what, like two days ago, uh
[04:13:31] , the last day I I've been, you know, working on some other stuff, the conference talks and like basically, and bug fixes. I spent mostly yesterday working
[04:13:40]  on some interesting bug fixes around 1.7. I didn't talk about that today, but it turns out that that trick of shorting the templates has weird, weird exceptions
[04:13:50] . I've learned so much about random HTML rules. Like buttons will swallow comments, if not closed in parent siblings. Why? No idea. If you look in the
[04:14:03]  spec, it's probably documented because all the browsers act exactly the same way. So like the, this is a set behavior, but there is, there are some interesting rules
[04:14:14]  like where like someone reported a bug where they started a bold element to one paragraph. And if again, if you don't close the bold element, even if you close the
[04:14:23]  paragraph and you like close the parents, the bold will leak into other paragraph elements in like separated siblings. And it's not like it's just like leaking from a,
[04:14:35]  from like a HTML standpoint, it'll actually, the browser will insert bold elements around like in those paragraph texts. And you're just like, why does it do that?
[04:14:45]  I've never seen stuff like this. And yeah, it's, it's super weird kind of stuff. So I've been in, in that zone. Um,
[04:14:54]  the only other thing I've been working on is the router. So in a sense right now, what's happening at Solid Start isn't about adding new features. It's
[04:15:02]  about, um, consolidating, like Nikhil's been working on the Astro stuff and like working with them and getting the pieces he needs to port it over. Um
[04:15:10] , he got islands working in Astro, like the islands, experimental islands working in Astro, which is funny because Astro is an islands firm, but actually Solid
[04:15:17]  Start islands working in Astro. Um, so, and I've been porting the, I've been working on my big, my next big thing is working on the
[04:15:25]  router. I want to make a universal router that works for server components and non-server components. So I know that's not what everyone's looking for, but the
[04:15:34]  thing you have to understand from my perspective on this is it's not about server components being part of Solid Start 1.0. It's about consolidating on the API
[04:15:42]  and knowing where things live or own so that like, this means that we can like actually freeze the API for real. Like, you know, obviously beta suggests that we're
[04:15:50]  pretty happy, but then we need to move this to RC, right? And what I, what I've, once you understand how these future pieces go together, it does
[04:15:58]  have implications here. Cause now when you look at Solid Start and you go, okay, we have this adapter level, you know, request response model, you know,
[04:16:06]  built on, you know, kind of something on Astro. We have, you know, some kind of module extraction mechanism, uh, bling makes a lot of sense
[04:16:16]  here, but obviously we have to keep pay attention to what React's doing here. Cause they'll, they're kind of shaping the ecosystem. And then what about everything else
[04:16:23]  in Solid Start? Well, as it turns out, other than some like middleware handlers and plugins, the other big part is like the forms data loaders. So
[04:16:31]  like the create route data, create server data, like if you assume that the bling parts, like a separate part, like the, you know, like create server
[04:16:39]  data is just a bling plus this. And then you look at stuff like the island router experiment, almost every other piece of Solid Start is actually router material. That's
[04:16:47]  not in the router. So by focusing on the router and consolidating this and saying like, this is the routing solution that can handle all these things. We actually,
[04:16:56]  um, streamline Solid Start essentially, because now we know where all the pieces are and where all the pieces fit. And this is really exciting to me too, because we did
[04:17:04]  do this pattern with Solid Start where we're aliasing things and we did it for a reason, mostly because the islands router and all that kind of stuff. But, um
[04:17:12] , I think if we believe that we've consolidated this sufficiently and we can put the parts in each place, like we know that the head stuff is handled here, like
[04:17:21]  meta and that the router handles this, and we have clear division of these pieces, we don't have to do the aliasing through Solid Start, at which point, as
[04:17:29]  I said, you, you just have these pieces, um, you know, bling, the adapters, and the router and meta. And even if you import those
[04:17:42]  directly, instead of going through start aliases and whatnot, you now basically have the building blocks for any kind of framework. And that baseline is what Solid Start is putting
[04:17:54]  those four things together. But, um, yeah, this just gives us more power and control. So even though it like sounds like I'm working on server components, that
[04:18:03] 's not why I'm doing this. I'm doing this because it actually gives us very clear responsibility on how Solid Start should progress. Yeah. So that's the question
[04:18:26] , right? If the work on bling lends to it as well, I mean, this, this, this, we're in the same boat. The truth
[04:18:34]  matters, um, Tanner, um, has been working on some stuff for Nozzle, got an important, you know, he's got important deadlines to hit, and that
[04:18:42] 's been his focus. Um, and he's been, you know, as it turned out, like this always happens, you like book your vacation, and then everything gets
[04:18:48]  busy. Um, so he's, you know, he's got his, you know, he, he, he's, he's, he hasn't touched the
[04:18:54]  stuff too much the last, you know, week or so. And he was on vacation before that, you know, um, we're going to have Tanner come on,
[04:19:02]  I believe on the 14th, not next week, the week after, and we're going to talk about this stuff. So, um, I think that's, I
[04:19:08]  think, yeah, we're going to see you do a rechecking to kind of decide where we're at and how to progress. But, um, yeah,
[04:19:17]  I mean, RSCs are important part of React, which means they're important, going to be an important part of TanStack. Um, we've been playing
[04:19:27]  around, like, obviously, whether we want to do our own version of RSCs, but I, I think it's more of an API question. Like if you
[04:19:33] 're in React and you're doing this, you're going to tap into RSCs. It's just whether or not, you know, as I said, I think
[04:19:41]  the way that reacts to proteins, the standards makes it harder to, um, fight against the current, which is tricky because like, I'm going to say it straight
[04:19:50]  up here. I think stuff like use client makes a lot of sense. I actually think server dollar sign is, has huge benefits over use server. Um, and I think
[04:20:00] , I think that makes it interesting. Cause like, are we going to get like remix, not touching this stuff on one side, perhaps then like next being exactly react
[04:20:11] . And then is TanStack going to be in the middle where it's like, we're like RSCs, the good parts plus, you know, the superpower
[04:20:19]  bling or something. So yeah, we're still figuring that out. Um, mostly right now stage is re-platforming, right? It's, it's making
[04:20:28]  sure that Astro over Vee gives us everything we want. Astro in itself could probably support like with the right, with the right, um, renderer adapter
[04:20:41]  could just support react server components in Astro. And I think we're going to find out on that stream today. It starts in 40 minutes. I think they're just
[04:20:49]  going to try and implement it just straight in and like, just bring in server components into Astro. Astro server components, not react server components. Yeah. They
[04:20:58]  just need client routing and they have an open issue that they they've been looking at. I've been writing how, you know, the problems and the thinking and they're
[04:21:05]  researching into, into that kind of based off, you know, some of their own ideas and stuff. And I, I mean, I've been using all Nate's libraries
[04:21:13]  to do solid starts, um, server component thing. So Astro itself could do server component S stuff using those same tools. And that's what I kind of outlined
[04:21:20] . And I, I, they're kind of doing their own experimentation. I think they're going to look at it without nesting, at least at first and kind of
[04:21:26]  like decide how viable it is. But I like, in a sense, I've said this before Astro already like it's HMR basically works like server components. So
[04:21:34]  if they want to standardize on that and understand the trade-offs, they could definitely do this. Yeah. That's the answer, right? Uh, it'd
[04:21:55]  be interesting here. Yeah. Craig's like, sorry, I wasn't, I wasn't here. That's fair. Um, all I, yeah, what we ended
[04:22:08]  up implementing was our read signal call basically like error or like warned if you tried to read a signal with no listener, if there wasn't another untrack flag set
[04:22:22] . And basically I changed untrack so that by default it sets that flag to say like, it's okay that it's untracked, but you have the option
[04:22:32]  to override it and say like, no, when you're untracked, um, actually still error and what this, a process. And then I went into our
[04:22:41]  DOM compiler and wrapped our events in untrack, the kind that says don't care. And essentially what this did is it meant that if you tried to access reactive value
[04:22:52]  in the component body error, if you tried to act without calling untrack yourself, if you tried to accident any kind of set timeout or whatever, error,
[04:23:00]  um, destructure error, all that stuff. But if you use it, you know, normally or you use it in an event handler, um, or you untr
[04:23:09] ack explicitly yourself, it's fine. Again, I don't even know if this is a good idea. It was just, we tried it. Yeah. Yeah.
[04:23:30]  Okay. Yeah. Yeah. This is a good point. And this is something I've been thinking about a lot more. I, it's interesting because I, I,
[04:23:54]  I said the biggest implication is like you, you're actually pushing work down to the library maintainers. So see how they feel about it. They haven't been very
[04:24:01]  vocal. They just been like, they've been kind of like if it's for the best. So, I mean, but I don't feel like I should be beating
[04:24:08]  them into submission. Yeah. It's not the RC side that we actually care about as much as the, uh, the, the RPC side of it, because
[04:24:24]  one of the biggest open questions is how to handle the request response. Um, and it's really interesting cause that's kind of in the frameworks domain yet people are standardizing
[04:24:34]  on RC. So like if you're building server components for off, like, how do you do that without knowing what the request response object is? Um, my experience on
[04:24:44]  the use server side, like on the, uh, on the, on the, on the like RPC side is that we always need the request, like almost always
[04:24:53] , always, always need it, which means that it's, it's like, it's an interesting tension, um, without things being standard. I mean, it's
[04:25:02]  possible that they realize it. And then they release the react standard request response model thing or something like, I don't know. It's, it's this is a
[04:25:11]  wild territory we're getting into where like, I mean, I mean, it's this den. I was like, uh, in the space, I was like, Hey
[04:25:20] , you know, if we want to work on something, I'm like fully into like reach agreement. If it makes sense. I, I, I don't want to
[04:25:27]  swim against water. And I know whatever you guys land on is going to just like push everyone to do that. Solid itself doesn't is fine from like node. I
[04:25:47]  don't know what it is like a while ago. I feel like node 12 or something global this came in, but solid start is much higher because we, we wanted to
[04:25:56]  be able to do like the streams and stuff. So you need a later version of node 16 minimum. Yeah. I mean, but even that I don't, isn
[04:26:06] 't the key thing. It's actually, for me, it's more like the fact that like, because it's a function call, you can like pass stuff to it
[04:26:13] . Like you have more control over like, like saying like, how do you make a server function to act as a get versus a post, like just little things like that
[04:26:24] . And maybe it doesn't matter, but it actually has impact on it actually has impact on stuff like how the browser caches or like how you want to like approach
[04:26:35]  shaping the request object and stuff. Like, I don't know. I do think that that's probably the thing. It is interesting. Like that could end up being the
[04:26:47]  API, but yeah. Oh, there you go. I didn't realize that it was that late. My worries. All people run into into a bug and don
[04:27:08] 't bring it to get hurt. Yeah. I mean, and there's, there's only so much you can do about that. Um, yeah, it's, it
[04:27:16] 's definitely tricky. Um, and you hope that the errors. Yeah. Like it is extending your docs. I really like that comparison, Greg. Yeah. What
[04:27:43] 's what's, what's interesting to me is that. Uh, it's funny. It's this news. We didn't talk about Theo created a Zod wrapper for
[04:27:50]  like use server for next, um, that I believe he published, um, under ping GG. Um, let me see if I can find it. Um, ping
[04:28:00] , was it ping.gg GitHub? I think, I think he published it. Yeah. Zact. And this is a public repo. So I'm not, I
[04:28:14] 'm not going to be spoiling anything here. Um, one, the thing that caught my attention when I saw this is act thing that Theo was working on is that
[04:28:25]  obviously it has a lot of, it's funny. Cause like when I was looking at this, I'm like, we can do this with server. So straightforward. And
[04:28:32]  then like this side, we already have in solid start. So you don't need to use act. You just like use create route or route action or create server action
[04:28:42]  or whatever. This is just like a way of like wrapping it's a higher order function to wrap your server function. Cause this is all in server, but what we got
[04:28:50] , what I, what I, what I saw about this is look at this use client import validate action from action. So he's actually importing server stuff into the client field
[04:29:02] , which next has been showing how you could pass everything through props. This works, which means that that pass through props is actually not a restriction. It's something that
[04:29:13]  next wants to do as a pattern probably. Cause it's like, it's easier. Like if you don't let people import stuff, you, you have more feeling of
[04:29:20]  like safety because like certain things don't get passed in as easily, I guess, but this is not a restriction of the react server component thing. You can import anything from
[04:29:32]  any server file, but this is a client file is what is what I was getting at. So yeah, I don't know. I know that on the next side
[04:29:52] , they definitely want to, they want to make the baseline that you don't need to send the form to the browser. Um, so, um, I understand that's
[04:30:04]  why they're working on it on props and stuff. Cause technically then you can save sending some more JavaScript, like you can shave the kilobyte or whatever. So
[04:30:10]  I do, I do think it's interesting. Um, but yeah, I mean, there's, there's just a lot of questions still left over and what best practices
[04:30:19]  like Theo's getting ahead of whatever next mutation API is. And it's like, you know, I've just recreated TRPC with server components. Like that's
[04:30:27]  what he's trying to do here. All right. Anyway. Um, yeah. I showed him rather refresh. Yeah. Yeah. No, which is, which is
[04:30:51]  important. It's actually like, that's the, that's the, that's the invalidation goal. Like when you do a mutation, that's the core of it
[04:30:56] . It's the same concept as remix, right? That you, when you navigate, you do partial updates, but when you mutate, you actually reload the current page
[04:31:05] . Um, that is the magic piece that people like, that's when you understand how different server components are. Right. Um, I mean, I, you,
[04:31:18]  everyone knows I love showing off the stupid demo, but like when you, when you get in here and you go to the search page and you start like typing stuff and it
[04:31:30] 's, you know, while I'm doing this, it's, it's completely responsive. And the funniest thing is if you inspect this while I'm typing, you
[04:31:41] 're going to see that this whole thing gets unmounted. Um, uh, let me see, where is it? Um, okay. I'm in the right.
[04:32:01]  Okay. Where is the input field inspect? Yeah. Okay. Input field is down here. Okay. Let's try this. Oh, I guess it doesn't
[04:32:18]  get unmounted because of the diff. Yeah. I guess that's, that's, that's, that's, that's the, that's, that's the
[04:32:23]  thing. If you look at the code authoring, it's much more obvious. Um, but yeah, the, the fact that like, yeah, I, I,
[04:32:32]  I guess this isn't, this isn't as obvious here because there's an outlet here that we're using a comment marker for. And then this outlet is this whole
[04:32:43]  section. So technically speaking, there's no more nested route here. Then the whole, this whole page is a nested route. So technically the HTML that we send
[04:32:55]  along the wire, like to do the diff has to include the, the input out element, but because we persist this component over the state, we never actually replace it
[04:33:05] . And we diff the rest of it. Um, yeah, no server component stuff is really cool. Yeah, yeah, yeah, of course. But then the,
[04:33:20]  the big win here is twofold. You don't have a client side cache and you don't have the code like for that client side cache. Um, which, which
[04:33:32]  is significant in terms of code saving. Um, generally speaking, like picture not having Apollo suddenly, you know, like, like, I think that's probably the,
[04:33:45]  the biggest thing. And the second thing is, although react doesn't take advantage of this is you save on the data serialization initially. Like I think react still serializes
[04:33:54]  it, but you don't need the data for stuff that can never be triggered from the client. So technically speaking, like if you need to hydrate a bunch of
[04:34:01]  stuff, um, like you, you know, you need all the information for all the movie listings and all this kind of stuff, you can basically just skip sending it,
[04:34:09]  um, which impacts page load too. So it's not just skipping hydration execution. It's skipping data serialization, both at the surrender time and on the hydration side.
[04:34:19]  And, um, and it removes the JavaScript code you need for having the client side cache. So like the trade-off is like my newt, probably my new
[04:34:29] t change in terms of like, I think the caching parts more interesting. Cause you like, you got to ask yourself the question. You got to be like, would
[04:34:37]  I've been going to the server anyways? If the answer is yes, this is just like a straight up win. Um, right. Because you're, if you're
[04:34:46]  going to the server to fetch the next data or to mutate something, you're just doing it in one trip now instead of two, you know? So like,
[04:34:56]  you know, there there's, there's huge benefit there. Um, on the mutation side, on the fetch side, you were always doing it in one trip. So
[04:35:04]  it's kind of like, yeah, the client side, uh, update will be faster, um, slightly because like in terms of the rendering, but like, if,
[04:35:15]  if you're rendering at the same time, you come back, like I, the idea is that it's, it should be almost like not a big deal. Yeah
[04:35:30] . That's, that's the thing, right? Well, it's partial hydration. The thing is before resumability, there was this, the islands frameworks do this
[04:35:38] . And what people don't always recognize is that like that whole, like tree of like, you can pass server children to client children and reduce the islands. Like Marco
[04:35:51]  has been doing this forever. It reduced 85% of the front end code at eBay, like, uh, you know, on some of the pages, 85% of the
[04:36:01]  code never sent to the browser, never run, never doing this. Like, so like when I look at the scope of things on resumability and thinking about it
[04:36:10] , like in obviously some cases, it changed the scale. Resumability is like the last 10% optimization from my perspective. Like you get, like, you could argue
[04:36:18] , you could just start resumability, and then you don't have to worry about some of this. And if that were true, then I would say like, okay
[04:36:25] , but the truth of this is actually, you can get the majority of the wins without going there. And, you know, it's kind of simpler and sets up
[04:36:34]  for client side routing here, where resumability will have solutions for client side routing, but like, we haven't got there yet. So this, this put the focus
[04:36:42]  on routing instead of on optimization, which I think in the end, you kind of end up in the same place, but there's a certain absolutism around, like when
[04:36:52]  you take this approach, you just know that the stuff that it's not a question of like, when it will get into the browser, or like, if you know
[04:36:58] , 100%, you're like, this is never going to the browser. So you can just like shed like 80%, 90% of the weight. So much to the point
[04:37:07]  that Marco's resumable solution, um, doesn't involve lazy code loading. They're just like, I don't care. Like if I've already got rid of
[04:37:17]  80% of the page, like, sure, I won't run the code at start. That's a huge win. But do I care if I like how much code
[04:37:24]  I load? I don't need lazy code loading. Cause like, what's the worst case scenario? Like, oh, I like I've got a gigantic page and
[04:37:30]  I owed it loaded 80 kilobytes of JavaScript that I, that I don't run. Like who cares? Like before islands or server components, that page would have been
[04:37:39]  500 kilobytes. So 500 now is 80 resumability. Now, you know, it doesn't run initially. Like, like if it was such a big
[04:37:51]  difference on code splitting, you could be like, okay, let's separate the code loading of these two sections. Like that that's, that's like my, my perspective
[04:37:58]  on it. I think resumability is a really good thing. I just think like, it's not like you basically solve. This is why when you look at lighthouse
[04:38:08]  or any comparison, you're going to do on any kind of toy demo, you're just never going to see a difference. Um, it's, it's like the
[04:38:13]  server side rendering. I think there's a great article from the quick guys showing their movie app and how fast it loaded. And the difference between quick and Astro was
[04:38:20]  basically non-determinable. It was like 1% on lighthouse. And the difference had nothing to do with hydration. It was just that the quick page was like rendering
[04:38:28]  faster on the server. Like it actually had almost nothing to, to do with resumability. And that was like, so I think it is a different story once
[04:38:38]  it scales, but it's also one of those things where like, we have to think about, I like, I'm glad that work's going in to figure out the
[04:38:49]  trade-offs, the developer experience and stuff and figure out where to go there. Because if no one's working on it, then we're not pushing stuff forward. But
[04:38:57]  it's also like, I think a lot of solutions will just be like, get to server components, see a massive win and just be like, you know, and
[04:39:04]  just move on with their day. Us on the performance side, you know, it's never enough. So we keep on, we'll keep on going, we'll keep
[04:39:12]  on searching. But I think it's an interesting question when stuff like server components or islands alleviate like 80 or 90% of the problem. Because then when you look at the
[04:39:22]  last 10%, you look at it with very different eyes, because you're not like, I need this, you're like, this would be nice. So you might be
[04:39:29]  willing to make slightly different compromises, like maybe something slightly less efficient. But still, you know, resumable, for example, because you get some kind of
[04:39:40]  other win. Well, yeah, what I'm getting at is like, right now, quick has a router that can work as an MPA router or as a spa
[04:39:55]  router. But what you actually want is not MPA or spa, you want a like, for this stuff, a hybrid router, you want something that has the benefits of
[04:40:04]  an MPA with client side routing, whereas like spa mode means you're back to rendering everything in the client. So you're just like, all the pieces come. So
[04:40:12]  quick has a container mechanism to do this. So it will, you know, like, this is 100% happening anyways, but I'm just, I'm just pointing
[04:40:19]  out like, if it's interesting, when you can shift the baseline, and then that affects the experience, to the point that you can like, change what was thought was
[04:40:30]  necessary. I look at that all the way. So from that perspective, the most important thing is knowing what to prioritize less, you know, because then it might change
[04:40:39]  how you approach the next step. Um, the funniest thing is, it's so easy. It's so easy to display where streaming is beneficial. Like, because if
[04:41:02]  the response is slow from the, like the data source, streaming is just like an instant win, right? It's much more challenging when the data loading is fast. And
[04:41:15]  then, but at that point, you're like, yeah, so don't bother streaming it. But then it comes back again, when you have like, larger apps and
[04:41:21]  multiple services, because you're only as fast as your slowest source. So like, it's interesting. And the problem is you can't use lighthouse type timelines,
[04:41:31]  you have to use something more like a web perf test or whatever, because lighthouse puts like a, when you do slow down, it puts like a hard cap on it,
[04:41:38]  which basically eliminates all the benefits of streaming from it. They just like take everything and like treat it like it's slow. It's like not, it's not like,
[04:41:45]  uh, it's, it's, how should I put it? It's like an, the artificialness actually stops it. We wrote an article with the guys in the
[04:41:53]  Marco team where we found this and we're like, oh wow, lighthouse is actually like hiding the benefits of streaming because of the way they artificially apply the slowdown
[04:42:01] . But that doesn't really apply to true, uh, vitals, which are real numbers. So there's a difference between web vitals and lighthouse lighthouse is an approximate
[04:42:09] , uh, proximate, proximate is approximate where, um, web vitals are the actual measurements of the same metrics. Yes. Yeah. Yeah,
[04:42:23]  exactly. Yeah. I ignore that. I, the only thing that's interesting there is the bundle size. The one thing I will say is that the JavaScript cost per byte
[04:42:44]  is more expensive than any other resource per byte. things have gotten faster, but classically, like all things being the same on over the network there, if you go
[04:42:56]  back like five ish years, the JavaScript cost on a low end device was almost equal to the network cost. Um, for like the same kind of execution code, like
[04:43:06]  there there's, they showed like if you had 170 kilobytes of JavaScript and it took on your network 3.5 seconds to load and 3.5 seconds to
[04:43:15]  load. Um, the image after that point would take less than a hundred, um, milliseconds to, to like display, like way less actually. And the JavaScript would take
[04:43:29]  another 3.5 seconds to actually parse and execute. So like it, it was almost like the JavaScript was twice as heavy as, as other resources. Um, so
[04:43:42]  it is significant, but it also like, you get what I'm saying? Like you, you reduce the, like you take 80% off the top, then like it
[04:43:55] 's all with performance. It's always the next bottleneck. It's never linear. It's always like you, you just hit the next bottleneck after you alleviate one
[04:44:04]  bottleneck. I mean, if things are fast streaming has a slight overhead and, um, you know, like if you do put loading indicators in place, like it
[04:44:20]  can be a little bit more jittery, so to speak. I think, I think, I think there's a balance to be had. I think like solid or
[04:44:30]  remixes defer is definitely like, um, a good tool to have at your disposal. Do I have a favorite Final Fantasy game? Um, tricky. Uh, it
[04:44:49] 's so funny because like, you have this nostalgia attachment to these things that like, I can't get over that. Like six was my favorite. So like, I,
[04:44:56]  I don't know if I'll ever, like, I don't know if I can even justify it anymore, but yeah. All right. I've caught up to
[04:45:08]  chat. So there. There. I showed you all caught, caught up to chat. Oh, and Theo's not even streaming anymore. Uh, I was gonna,
[04:45:22]  I was gonna rate him with a happy birthday, but he he's, he's, he's already, he's already out of here. Is that why there's people
[04:45:27]  actually in the stream right now? Um, Oh well, that makes way more sense. Yeah. Yeah. Yeah. I was like, when dev came in, I
[04:45:48]  was like, huh? Anything interesting happened on that stream? I have to admit our stream today was more of an idea and a proof of concept. Probably not the most
[04:46:03]  interesting thing, but I'm glad we had the conversation. More RSC stuff. Yeah. Yeah. Okay. Yeah. That makes sense. Um, yeah. I
[04:46:25]  mean, it's, it's, it's, it's the topic, you know, like I am, I am very stoked on it. As I said, it
[04:46:31] 's, it's, it's funny. It's, it's been the API decisions and the, the impact on the ecosystem. That's like held me off. You
[04:46:38]  don't, you don't get to, you don't get to beat react to anything realistically because, um, like the big player will come in and just swing the convention
[04:46:53]  to them. It's, it's like, like, I don't know. It's, it's, it's funny. It's like, sometimes you have
[04:46:58]  a big enough lead and you know, it makes sense, but like, I've just seen so many frameworks that have been so smart, so ahead of their time. And
[04:47:06]  then like, when it finally becomes prime time, they did their own thing differently. Like if you're, if you're not far enough away from that, it's,
[04:47:14]  it's just, it's not worth trying to fight it on the big picture, maybe on the details, but not on the big picture. It's, it's
[04:47:21] , it's, it's challenging, right? You know, when you look at things, um, like, like Marco, which as I said, incredibly ahead of its
[04:47:29]  time, I mean, even when I think of things like CoffeeScript, you know, I sometimes feel like JS just wanted to give the middle finger to CoffeeScript, even
[04:47:37]  if they copy, like grabbed everything from it. Like the spreads are on the opposite side, like just the silliest little things like, um, like the, like
[04:47:46]  they did everything like just the same, but a little bit different. And, and I always wondered like why they made those choices and maybe CoffeeScript's the one who made
[04:47:56]  the, the, the wrong choice on the, on like where to put the dot, dot, dot. But it always, it was always interesting to me that like,
[04:48:03]  I'd look at CoffeeScript APIs and the word JS ended up and they'd have all the same things, except they just like, they changed where the dot, dot
[04:48:10] , dot was like just enough to be like, we're not CoffeeScript. And it's possible because it CoffeeScript did that to Ruby or something else. It's just
[04:48:19] , it's, this is the kind of scenario, like you could go and build everything, especially on the tooling side. It's the tooling side that leaves us trapped,
[04:48:27]  which is, it's such, it's such a funny thing because everyone knows that I'm pretty much like, I don't believe no build is a real thing.
[04:48:35]  Like it's, it's a, it's, you know, when people say no build they're, they're living in fantasy land. Um, and, but like
[04:48:42] , it's that same build tool chain that has us in, in chains because people will not move away from the tooling. I've, this is the struggle I've had
[04:48:50]  since the beginning. I feel enslaved by it. You know, I had all these really cool ideas of what I wanted to do with solid. And then it was like
[04:48:56] , Oh, but TypeScript exists. Sorry. You know, or prettier. Like I had, like we had an explicit binding syntax in JSX that worked. Um,
[04:49:06]  except prettier would remove it. Right. And I landed on it because TypeScript didn't complain about it. Like it, it's like weaving out of what you can do
[04:49:14]  within the restrictions of the tooling because no one wants to change the tools. It's gotten to the point, like getting punting in JSX seems like a pipe dream that
[04:49:22]  I'm talking about where you can just go like curly braces, like put the property in. So like name equals name or whatever. Like no one wants to risk breaking
[04:49:32]  the tooling that the possibilities of what we can do are so restricted. I mean, you can just go off the reservation. So to speak, you know, like that's
[04:49:43]  what Svelte did in a bit with its language, but the amount of, and Marco too, but the amount of effort that takes to do that and fight against
[04:49:50]  that wave is, is immense. Like I can't stress how much effort it is to kind of get to, you know, where parody is. I know solids only mostly
[04:50:03]  where it is today because I just picked up JSX and had everything for free. Like, not that I don't struggle with it. It's just, that's the
[04:50:10]  reality. So when looking at like, if bundlers start actually doing certain types of things, like, do I want to go and implement a new thing? If there
[04:50:21] 's going to be a standard emerging where like every bundler understands what use client and use server means, and they just create a manifest for you. Like how, how much
[04:50:29]  is it worth fighting that wave? Um, if you believe the DX can make a big enough of a change, then it's probably, it's probably worth it. Um
[04:50:39] , and there's definitely places to do that. But if we're just talking about syntax, you know, it's, it's interesting. I don't know.
[04:50:48]  I guess this changes as the popular of the project roads. If you get enough attention behind it, you have more sway. As I said, React right now can pretty much
[04:50:56]  mentally will anything into existence, but maybe, you know, a good enough idea can still make change, you know? I said, someone shared a repo. We
[04:51:19]  got, sorry, I think it was, it was, uh, it was, um, Benton. Cracked me up. I don't know where, where he
[04:51:30]  first saw to do this, but he shared a repo and it was, uh, shell extended JS. And, uh, I was like, okay, no, one's
[04:51:43]  ever used this. There's no downloads thing, but obviously 10 years ago when NPM was new, they, they registered it. And, um, you know,
[04:51:55]  this, this is just, it's just funny to me. This is just another coffee script. Shout out. Um, anyway, you know, it is what it
[04:52:18]  is. Um, you, you do this long enough. Yeah. Anyway. Um, where, what time are we at? Where are we at here? 4:53
[04:52:31] . Yeah. Yeah. I don't know. I don't know if I have anything more today. I was trying to like, cover the gap until Ben and,
[04:52:45]  uh, Dan stream, but like, I think we've talked about most things today. You know, there, there, there wasn't any particular, I don't know
[04:52:54]  if this week was very spicy on the JavaScript side. Just a few releases. You know what? Like I kind of miss Ryan Florence on Twitter. I just gotta say
[04:53:05] . Nah, like I'm just too far from product on that sense that I just, these, the, this kind of stuff is, I don't really care what
[04:53:24]  happens to Twitter. I don't know. I like, I just assume there's going to be some other platform that people find a place to converse on. And yeah
[04:53:35] , I don't know. So yeah, it's, it's, it's definitely, uh, yeah, I don't know. I'm like looking at my
[04:53:53]  orange juice is all gone, unfortunately. Yeah, that is just melted ice. You know, like really watered down orange juice that's like semi warm. That's
[04:54:05]  just not nice. Happy weekend. Yeah. Yeah, no. Oh man. Yeah. Maybe that's what the whiskey on my counters for. Anyway. Yeah, no,
[04:54:24]  I'm, I think, unfortunately, the reality of things is there are you, you've got, you've got two choices. You got to like either pay attention
[04:54:37]  to what react's doing and be on that trend wave and just know how to weave it in and out of it as you've, you know, like the thing is you
[04:54:45]  can't just fall. If you just follow react, you'll always be behind. So that's not what you do, but you have to be aware so that like,
[04:54:54]  you almost have to work ahead of them and then like figure out like where you're heading and then look for the key milestones in terms of their timeline or next timeline and
[04:55:05]  be like, okay, let's get ready. So that, you know, when the whole ecosystem moves with them, where we're there from day zero, but in order
[04:55:14]  to do that, you have to be ahead of them, essentially. The other option is you just go right off and you're just like, screw that, do something completely
[04:55:23]  on like the outside different side of things. And as I said, a single project can do both aspects of it. Um, and that works better if it's some
[04:55:32]  place that you know that they, they aren't heading, like they don't really care about. Um, because otherwise you're going to just be creating a second standard unless
[04:55:40]  you somehow like strike gold, right? Like an example of that might be like signals. React was never going to touch signals. So it was like, that is like a
[04:55:52]  completely safe place to go. And maybe you do something like that and you strike gold. Um, but like, um, now that react like, and the funny thing
[04:56:07]  is like, I thought that islands were going to be like that, like this whole idea of where we're getting with server components, we were playing with stuff like this
[04:56:15]  with Marco. We were picturing client side navigation, basically server components before server components thing. But the problem is once reacts like we're into server components, you got to
[04:56:23]  be like, okay, fine. Like this isn't a new unique place. Anyway, I wonder, I think same thing on the compile thing, you know, wrote the
[04:56:33]  whole article on reactive script. And then it's like react, you know, month or two later pops out. Here's react, forget. And you're kind of
[04:56:43]  like, Oh, you know, how much do you want to like, unless you really care about that thing and you want to jump ahead right away. Um, it's
[04:56:51] , it's harder to, um, like put the effort in to fight that battle. So to speak, you got to pick the worthwhile things. So anyway, that's
[04:57:00] , that's just my thinking. Uh, yeah. What are we doing today? I have no clue, honestly. Yeah. There's a good chance that I'm
[04:57:20]  going to take next week off. Um, just, uh, need a content break. Come back strong with Tanner on the 14th. I'll see. I mean
[04:57:45] , it, it's basically server components. I don't think it's like necessarily more advanced. I think it's interesting. Um, having an alternate implementation that leverages
[04:57:54] , you know, the fact that we can be small, but it is basically what I've shown here, like this app is, is it's, it's,
[04:58:01]  it's effectively server components. It's funny. We've used the browser style navigation. So everyone thinks it, but if you know, this never spins, so this is
[04:58:08] , you know, it's, you know, I wouldn't say it's necessarily more advanced. I it's, it's just a different implementation. So did we
[04:58:28]  do it? I don't know. I don't any, I know a bunch of you here knew or came off of Theo's stream, but like, did anyone
[04:58:41]  actually have any opinions about the strict mode stuff? Like did anyone actually see that earlier? I, I've been, I always struggled with these kinds of decisions because they're
[04:58:55]  like, there's always a stuff that feels like counter my nature, so to speak. And then I usually end up regretting it. This one is a realm where it
[04:59:05] 's counter my nature in a sense that I don't think it's the kind of thing that I'd regret. Um, but it's just not something that I'm
[04:59:12]  as comfortable with. Yeah. Yeah, no, I figured as much. It's all good. Um, yeah, no, I, I, I get it.
[04:59:38]  I don't know. I think, I think I'm done, honestly. I've, would you personally benefit from strict mode? That's a good question. No,
[05:00:03]  not really. It would actually give me like slightly more work to do. Um, but I, I think this stopped being about what I'd personally benefit from. Like
[05:00:15]  it's so funny on that side. Like when, like when the, all the, like the Devin Gabbitt, you know, like tweet about like double count
[05:00:23]  and losing reactivity and all that kind of stuff came out. And, um, I was like, like, I saw like, when I see stuff like that,
[05:00:32]  I'm just like, like, I just don't see what the big deal is. Like, I'm just like, oh, like, yeah, that's not how
[05:00:38]  it works. You know? And people are like, oh, blah, blah, blah, blah. And I'm just like, yeah, but like, why do you
[05:00:44]  think it should work some way different? Like, oh, how did you decide that? You know? And people get in like, all like about the theory of whatever
[05:00:51] . And I was just like, yeah, but it doesn't work that way. And like, to a certain extent, um, like I've been okay with that.
[05:01:01]  I've been doing this so long, like these kinds of patterns, like, I could just see them. I think, though, that there's an interesting, like
[05:01:11] , explicitness learning piece that would be so valuable to people that I can't really ignore that fact. I think it's actually really, really, really powerful. Yeah,
[05:01:23]  I know. That's what you said. You said that at a certain point, I just couldn't enjoy this all anywhere. I don't think this one actually would just
[05:01:32]  subtract for my enjoyment. I actually looked at the JS framework benchmark, and there's one place I would have to put an untrack with this setup. Um,
[05:01:41]  that, that would be like the, the one thing, and it wouldn't cost us performance or anything. I don't think it just, we'd have to, I
[05:01:49] 'd have to wrap one expression in a untrack. Um, and you know, I can live with that. Yeah, I mean, that's the thing.
[05:02:04]  When we, I mean, I guess I closed down Excalibur. When, when we looked at this, and kind of plotted out like what we should be doing
[05:02:14]  here. It was, it was just like, there wasn't that many things like it was basically like, okay, we should opt in. And we can't do it
[05:02:24]  in parts. So it's like all in or not. Um, we, we, we have the call stack. So we just have to consider how to notify people
[05:02:32]  about the errors, you know, in a nice way or the warnings. And then really we were like, okay, right now in solid, there's like these no root
[05:02:41]  messages. We could pull that into strict mode so we don't have to complain at people. So that's like a DX benefits for people like me who like, don't
[05:02:47]  want to get annoyed by stuff that they don't care about if they're not using strict mode. And then it's just this untracked read thing and maybe effects rights
[05:02:56] , but I don't think we can do effects rights. So technically it's just this like one feature, which is saying, and it's a big one. It
[05:03:03] 's just saying like, if you want to read a signal outside of reactivity land, um, and not, and outside of like the JSX or whatever, like outside
[05:03:13]  of the event handlers, then you have to be explicit about it. Cause if not, we'll say, Hey, you're trying to read a reactive value in
[05:03:21]  a place where, you know, it's not tracking or it's ambiguous. I think that's like, that's not going to impact most code. It's just going
[05:03:29]  to like give people a little bit of a hint that they're, you know, doing something, you know, that might not be expected. Is template JSX better
[05:03:54]  than from a DX standpoint? Yeah. I think without a doubt, but, um, like yeah, like almost, almost without a doubt, but I think it's
[05:04:08]  interesting because from a mechanical standpoint, we want to get down lower, right? We want the fine grain updates. We, we, we want, you know, it's
[05:04:16] , it's, I'm not, I don't really struggle with the templates. It's actually the component model that makes things hard and it's fine. The component model
[05:04:22]  is what we want. We want instances of things. We just don't want to have to, it's, it's a declarative like thing we're looking at
[05:04:30] . It's not the, it's not, we want components. So we have these modules, these pieces we can move around, not because we need them to function that
[05:04:40]  way. So components themselves provide the trickiest part. Um, so in a lot of ways, single file components make things easier because then there's only one export,
[05:04:51]  which means if you want there to be multiple exports, like you want to break, like picture, if, if, if you, if you were only allowed to have one
[05:04:57]  component in a file and the only time you had to import that component to a different file to use, like the compiler handled that, then you don't, you don't
[05:05:09]  actually need like, like the component could actually have multiple exports. It could be broken apart into different pieces based on like this update it's this dom element. Um,
[05:05:21]  this renders this and you could split it that way and then have the consuming component only import the parts that it needs. And it, and like it's all, you
[05:05:31]  can do this anyways, but it's a billion times easier to do this with a single file component form just because like there's no expectations of having multiple components in the files
[05:05:40]  and collisions and how to do the imports and all that. But I'm, what I'm getting at is like, um, we do want ultimately to take this declar
[05:05:50] ative structure and break it down into smaller pieces. Um, but the, like we do this because the authoring experience, it's always that kind of tension. Like another
[05:05:59]  example right now is all these meta frameworks right now are letting you build monoliths, right? That's the whole thing. Like we're back to rails, you
[05:06:06]  know, but I think we kind of all know, or hopefully we all know that that's not where we stay. There's a reason we went to microservice in the
[05:06:14]  first place. So we need to break apart the monolith still that need hasn't changed, but the authoring experience, the monolith kind of aligns where we are
[05:06:23] . We're at right now. So again, we're going to have another scenario where we're going to author like a monolith, but under the hood, break things
[05:06:31]  up into smaller pieces. You see, the, see the parallels here. That's, that's really, um, what's going on here. We're getting to
[05:06:40]  a point where we're kind of like landing on a DX perspective of like, yeah, components are good. Monoliths are good, but we're like getting to a
[05:06:51]  point where we want our tooling to be able to like, be like, you know, pinpoint updates are, are, are, are mechanically good and distributed systems are
[05:07:07]  mechanically good. We want, we want to be able to like have both. Um, yeah. Sorry. I didn't mean to be like too critical on that
[05:07:24]  thing. I'm just, I'm just like, I think, I think this is what's going on and why everyone's so interested in compilers and like it
[05:07:30] , it aligns with all the trends, right? Cause then things that are good for compilers are good for AI as well. So like everyone's kind of like
[05:07:39]  picturing how you build these building blocks. And for me, I've always just been building building blocks. So like, you know, I fit in just fine, so
[05:07:47]  to speak. Uh, so I think that, I think that's fine. All right. Um, yeah, just want to check something really quick here. Um,
[05:08:12]  sorry, I'm doing it off screen cause you guys can't see what I'm doing. Cause now when I scroll on Twitter, I have, I realized I can
[05:08:20]  leak stuff that is not so good. So I've been much more careful recently about that. Um, it's definitely, it's definitely something that I've, I've
[05:08:32]  considered. Yeah. All right. Well, man, it was, uh, comments on the future is always a library versus a compilation target. I mean, I'm
[05:08:57]  not, I'm not, I'm not, those kind of the same things, right? Like we've been a compilation target since we first showed up. Like it
[05:09:13] 's funny. I think it was a glue dot codes did it. And like a bunch of people were like, I even saw people build stuff that was like Svelte
[05:09:20]  and compiled it to solid. Cause it was faster than Svelte. Um, so like, I mean, this is part of, part of the thing. This is
[05:09:28]  why I never stressed on this part. It's interesting though, because from like, uh, there's this one side that you're building a tool, like a framework
[05:09:36]  that people can use. Um, so like, you gotta have strong opinions and hold people's hands. And this is like, again, where the whole strict mode thing comes
[05:09:46]  in because like, you know, is it like egg on the face? So to speak, if you're like, don't do this, like, are you inviting
[05:09:54]  people not to enter the pit of success? And, um, but on the other hand, like who wants to be emboiled in that constant, like bike shedding
[05:10:10]  when like, if you could just mechanically find the best approach that, you know, works well with the tooling, right? That's, that's the key here,
[05:10:20]  right? Like, don't, don't get me wrong. There needs to be a certain level of, of this because like, if anyone's seen quick version 0
[05:10:28] .01, you know, like having the good technology is not enough, right? Like that, that, that was one of the most brutal things that I've ever seen
[05:10:39]  in terms of DX, like just unusually usable, brutal. But then if you look at everything they've done since then, like, you've got huge strides
[05:10:48] . So you can't talk about one without the other, but like, um, it is something that I do think about because it's funny when you talk to someone about
[05:11:00]  react and they talk about the primitives and stuff, um, their primitives still feel higher level. They just, they just want to make sure that the philosophy checks out
[05:11:10] . Um, otherwise, like we wouldn't be having conversations like what if react compiled down signals. It's interesting to me though, because like, if we're okay
[05:11:23]  to go to that realm where compilation is okay, like we're not, we've got it in a way from JavaScript, the language, and we're like, we're
[05:11:31]  happy with that. Um, I mean, a lot of different kinds of doors open up, um, I mean, the answer to all of this is in the tooling
[05:11:46] . If the tooling catches up or keeps up, then we don't have, we don't have problems. Yeah. Yeah, yeah, exactly. Right. It's
[05:12:08]  just so funny because like, like I got into this because I liked the DX of like, I just liked the compositional patterns of it. Um, so I can
[05:12:21] 't, it's, it's, it's so funny because like, that's like, it's always like part of the motivation when people do stuff, like when the
[05:12:35] , when the model fits, when they see it and it makes sense for them, they kind of latch onto it. It is interesting if this is just a mechanical phase
[05:12:45]  for something that's a little bit different. I mean, I see a language of reactivity that is all too real. I'm just not convinced that I'd ever be
[05:12:53]  comfortable enough to give away the complete control. And I think at least short term, the balance is incredibly important. Um, it looks like we're having sushi tonight,
[05:13:08]  which is quite good. Yeah, it wasn't the ethos understandable and recreatable. Yeah. That's the thing. We think this is why I haven't jumped
[05:13:19]  headlong into, into, into some of this stuff, because I worry about distancing us from that kind of really basic, like don't get me wrong. Some people
[05:13:34]  consider reactivity not simple, but if you, if, if you can pick that one abstraction, like understand signals, everything else we do seems so much simpler in comparison.
[05:13:46]  I mean, simpler in the simple versus easy case. Like it just seems like, Oh, of course it does that. And I, you know, sure. You
[05:13:54]  know, so like it is definitely, it's something that I think about a decent amount, but it's tricky. We are so busy just mechanically delivering on the features
[05:14:07]  and the pieces that need to go in that. I don't get to have that much time to get too philosophical on it. Yeah. Yeah. I, I think
[05:14:25]  I'm sensing sarcasm here, but, um, yeah, no, it's funny. No, I, I'm, I, I was actually kind of like,
[05:14:35]  I wonder if they canceled their stream, Dan Dutan and them, because it was, this was a, I thought they were supposed to go start their stream like 10
[05:14:49]  minutes ago. Um, I don't know. Fresh off the heels of the stream and Danny were off my friend and teammate Ben Holmes joins me to explore the alternate universe.
[05:15:01]  What if Astro supported react server components? interesting to me as a topic, but doesn't appear to be happening for us. It's all good. Oh, so
[05:15:27]  we haven't missed out yet. No, I'm, I'm just, I'm just, I'm just, I'm just chatting here. You guys got called
[05:15:31]  questions for me. I I'm, I'm, I'm all for it. You know, I've been there's, it's interesting right now because there's so
[05:15:46]  much focus on these future technologies and we can all see like, there's a path there, but there's like a lot of work that needs to still get done to reach
[05:15:54]  it. And everyone's like spending a decent amount of time, like edging their positioning when I feel like the best thing we could be doing right now is just putting
[05:16:02]  our heads down and just like getting it done. But it's like, it's so hard. Like, like react can do that where they're sitting. It's just
[05:16:10]  hard in my position to actually, you know, in this case, I don't think there is a clear, um, it's not as, it's not as
[05:16:24]  obvious that like, and I'm not gonna say that it's not as obvious that there's like such a difference of opinion about, about these topics. And when there's
[05:16:31]  not as much of a difference of opinion, um, it requires a little bit more consideration, um, there because it's like, you know what I mean? Like
[05:16:46] , as I mentioned before, you, you put a lot of effort in to lead down a path that might not like, yeah, it's, it's tricky.
[05:17:00]  I see it's just PHP currently. I, I think it's, I think there's just so much more potential here. What people don't realize about the difference in
[05:17:09]  the model is like this, I use .net forms and stuff. And I remember view state and serialization stuff. This pattern actually has a really, like the persistent client
[05:17:20]  element of it completely changes the game in terms of like all the clunkiness that the last time this went around and every server oriented framework that's doing these kind of
[05:17:31]  things. Um, I will say that like live view on the other side of the spectrum is a, is fresh air because it's like they have the, with a very
[05:17:41]  minimal client model, they have a consistent backend model and it all kind of plays together. I think, I think wide view is very, very nice from that perspective, but
[05:17:49]  it asks something that I don't think you can always give it. They asked for like a really stateful persistent connected server and server components are not that server components are
[05:18:01]  an extension of how we have been building, you know, in our kind of rest kind of world of things, you know, where the backend's not stateful in that
[05:18:12]  sense. So I feel like this is a newer take. The funny thing is I don't think, I think it's so funny. I, we would have got
[05:18:27]  here anyways, but the timeline is like all off. What's happened is the people who cared about this stuff, like, you know, solving the hydration stuff, like
[05:18:41] , um, like they, they go down such a list like extremes, like, you know, in order to get those, like that bit of performance that we haven't
[05:19:00]  crossed the boundary on the, like, even the like experience side of the product side, like the, like the, the, everyone has been working on this partial hydration
[05:19:12] . Hasn't been focusing on client side rendering or sort of client side routing because they knew they weren't done yet. They're like, okay, okay. We've
[05:19:20]  got islands. We can do better. If we got resumability, we can do better, you know, like, and going down this path. And the one thing
[05:19:26]  that react has done was they're just like, okay, look, we can optimize later. We don't care about being optimal. This can actually be as slow as
[05:19:34]  molasses. Like people are used to that already with react and like, like, they just didn't care. And they're like, what's the, how do I
[05:19:43]  want this to like high level operate? And that's why people haven't got there because like these technologies have been built by the optimizers, um, not by the like
[05:19:54]  experience kind of people. We, we would've got here anyways, but I like that reacts kind of pushing on it. Cause like, it's it, I I
[05:20:02] 'm kind of an optimizer. I actually kind of, I saw what they're doing and I kind of like step back and I was like, okay, okay, okay
[05:20:08] , okay. This optimization can wait. Um, like, it's funny cause talking to those optimizers, so to speak, we've had those conversations, you know,
[05:20:20]  years ago, but it was like, oh yeah, no problem. We'll just get that to when we get to it. It was like an, an afterthought
[05:20:26]  it's like, oh yeah, just, yeah. Something kind of like turbo. Yeah. And it's like, oh, it's like, oh yeah. And that
[05:20:31] 's the routing. We get like, we were, we weren't actually focusing on the experience of it. We were like wanting to vet whether it's say like presumably was
[05:20:41]  even viable or something like that. So it's, it's very different, um, source of where this is coming from. So from that perspective, I think it
[05:20:50] 's like really awesome, um, to see react kind of push this way. Cause it kind of wakes up all the optimizers. Cause they're like, oh wait,
[05:20:57]  reacts coming into our territory. They're actually addressing something that we care about. So anyway, um, okay. Okay. Okay. Okay. So everybody, everybody's
[05:21:31]  ready, ready to go. I'm, I am done. Anyways, it's all good. I, I, I, I'm, I hope you got some
[05:21:40]  value in all of this. I'm, I am, I'm excited for the future, regardless of what I might say. But, um, I mean, I think
[05:21:52]  that's pretty clear from what I say, actually, it's just, it's a challenging balance. And I know that there's work to be put in and at a
[05:21:59]  certain point there's times to be bold and there's the times to kind of like watch it through. And I know this is the tension that a lot of people feeling
[05:22:06]  right now, even, even like the remix guys, everyone's watching the weight to see react, put their stamp or next, put their stamp on what they're doing just
[05:22:16]  so that they know how they can maneuver in this world. Because if you try and fight against it too much, um, you're going to basically be stuck in it anyways
[05:22:24] , which is tricky and unfortunate in a sense, but it is what it is, you know. Um, so all we can do is just keep on pushing stuff forward
[05:22:34] . And that's what I intend to do anyway. Um, we're going to, uh, get a raid going on to, uh, Ben and Dan's stream
[05:22:44]  coming here and, uh, I'm going to have some lovely sushi here in a minute. So I'm pretty stoked about that. Um, so yeah, it looks like
[05:22:55]  we got the majority of the Twitch crew ready to go. So I am going to wish everyone else, um, a good one, and we are going to head over
[05:23:06]  there now.