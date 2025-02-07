---
showLink: "https://www.youtube.com/watch?v=SkJiaRclTjM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Islands w/ Matthew Phillips"
description: ""
publishDate: "2024-07-26"
coverImage: "https://i.ytimg.com/vi/SkJiaRclTjM/maxresdefault.jpg"
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

[00:00:00]  Hello. How's everyone doing today? Just getting started straight out here because I think today's stream is going to be jam-packed. I got a lot of topics
[00:00:10]  to talk about, not least of which talk about the new stuff that's going on with Astro. But yeah, I've been touching on a lot of reactivity stuff
[00:00:24] , which led to me doing like a lot of theorizing that I've been going over the last few weeks. I got updates on that stuff. Seeing the Astro
[00:00:32]  demo actually got me really inspired. And I actually prototyped a whole bunch of prototypes this week, trying different things with just playing around with web technologies. So I want to
[00:00:44]  talk about that a bit as well. So very cool stuff. If you're joining in, come say hi in the chat. Chat is kind of barren right now
[00:00:54] . I'm going to go advertise this on Twitch right now so we can get this started. All right. All right. Yeah, stuff's starting to come in. Hey
[00:01:06] . Yeah, it's one of those like mid-summer afternoons, probably one of the hardest times. But I'm hyped about the stream. This one should
[00:01:14]  be a good one. Yeah, exactly. Yeah, yeah. So I've tried to watch a little bit of content other people were putting on server islands. But one
[00:01:27]  of the benefits I had on this one was I got to see the article and the stuff before it came out. So like day before I was sitting there like playing with it
[00:01:37]  and being like, okay, like Brian's take of it, you know, right off the bat, which gave me a little bit more time to think about it and
[00:01:44]  get pretty deep on it and talk to Matthew. That's how I ended up inviting him on the stream today because I was kind of like playing around with it. And Fred
[00:01:53]  was like, Ben, you have a lot of thoughts. I'm going to actually pull in the developer working who actually worked on this, you know? All right. How
[00:02:00] 's everyone doing? Yeah, yeah. I've been working on a lot of stuff around async and derive stuff. I've been the thoughts along those paths have been
[00:02:10]  continuing on. But I think I think there's like a sometimes and I can admittedly say this about HTMX. Sometimes like there's ideas that come across that are
[00:02:31]  kind of left off the table because you're like, okay, that doesn't do everything I want. But the trade offs show at least one aspect that is incredibly compelling
[00:02:41] , and it causes you to rethink, like, generally everything else around it. Once you kind of put that together. Sorry, my stuff's a little quiet right now
[00:02:54] . Sorry, yeah, rethink everything around it. So I think server islands is an example of that. But yeah, where was I was I was gonna I was gonna share
[00:03:06]  the channel on Twitter, get our x I can never get used to calling it x. I'm just I'm just old, I guess. Yeah, I'm gonna
[00:03:18]  talk a bit about this today. Because I, we've been talking about PPR a little bit on streaming. I'm like, I don't get it. But I
[00:03:26]  also never built anything, you know, like, I was just like, Okay, whatever, you know, I was like, I was like, Okay, I theoretically,
[00:03:33]  I don't, I like can see slight gains, but I actually just, I don't really think it, like, I can see the gains with the approach and
[00:03:42]  going straight to the CDN. But once you have some kind of edge work or something in the way, basically proxying the stuff, then like, it's,
[00:03:49]  it's streaming at the edge, right? So this, I actually built stuff to finally have an actual opinion about PPR. So we'll talk about that a bit today
[00:04:01]  as well. Right? Because there's actually a, you've got PPR versus surveillance, but there's actually like a third category, which is just like, stream
[00:04:09]  render dynamically from the edge. Right? Next was very vocal when they came out being like, PPR is because the edge fails, right? And I mean, this is
[00:04:23]  a spicy one here, but I don't know if the edge failed, or just Vercel's edge failed. So this is, this is, this is a,
[00:04:33]  this is an interesting thing. I will talk about it as a bit, a bit more later. What does PPR stand for? Is this one of those like only
[00:04:54]  wrong answers? You know, I mean, I'll explain what PPR is in a minute, but chat, feel free to, to give the interesting answers. I
[00:05:03] 'm sorry. Let me share my screen for a second. Make sure that it actually works. You never know. It hasn't actually been that long, has it? All
[00:05:13]  right. Let's quote you quote. No, not be cool. Let's just quote tweet it. Live with, I made one mistake on my tweet. I didn
[00:05:27] 't tag Matt talking and I didn't tag Astro, which is like this terrible marketing loss here. Bam. All right. And then we'll let those people get past
[00:05:45]  the Twitch pre-roll so we can get started here. Pay per render. Yeah. That's, that's not a bad answer. Yeah. Partial pre-
[00:05:54] rendering. Yeah. That's the actual answer. Okay. But I mean, even that, you know, it's another three letter acronym and that pro that doesn't
[00:06:02]  probably mean anything to anyone. Just does anyone out there know what progressive rendering means? just putting out there that for a long time, what we call out of order streaming
[00:06:16]  was called progressive rendering. Um, like you go back to older articles and stuff, they call it progressive rendering. Anyway, I think we're about ready to get started here
[00:06:28] . I just want to give people on Twitch to a chance to join and there's only eight of you over there right now, which is surprisingly low. YouTube's doing
[00:06:38]  a little bit better today, but, but Twitch, but Twitch is, is, is a little bit on the weak side. So let's, let's see if
[00:06:49]  people will, will come in and join on. Right. All right. Yeah. Yeah. Yeah. There's no like conference today that I'm not aware of or something
[00:07:02] . some like hidden react conference. All right. Getting everything going. No. Yeah, I know. I know chat isn't strong, but the, the, my
[00:07:20] , the viewership is there's only like, I only got a handful of viewers on a couple handfuls, I guess, of viewers on Twitch compared to YouTube right now
[00:07:27] . Hey, Hey, Hey, yeah, yeah. Let's get this one. See, usually I drag a lot at the beginning. So people are going to miss
[00:07:32]  out on, on prime content here. You know, um, a few in the mighty, is that how it's, how it works? Okay. Okay. We're
[00:07:39]  starting to ramp up. Okay. Okay. Okay. Yeah. I guess everyone else is going to have to check this out on the, uh, the replay. Um,
[00:07:51]  because as I said, in some ways, this is kind of a small feature that probably. Wasn't. Too hard to implement. Like I, it was challenging,
[00:08:07]  but not as hard as some things and definitely not as hard as implementing PPR, but the impact of what it represents in my opinion is actually huge. Do you mean
[00:08:19]  ramble? Yeah. Thank you. All right. All right. All right. Let's get started. Um, without much further ado, let's, let's welcome
[00:08:29]  Matthew onto the stream today. How are you doing? Hey, how's it going? Thanks for having me. Yeah, no, it's good to have you again.
[00:08:36]  Um, this is your third time. I think joining, joining me on the stream. I think so. Yeah. Yeah. So hopefully people are familiar. The,
[00:08:45]  the first stream we did was what it was right. It was on, uh, course probably. Yeah. Yeah. Yeah. And then we did the Astro three launch
[00:08:53]  stream where we got to show the world, uh, partial pre are not partial. The other one. View transitions, right? View transition. Yeah. View transition. But
[00:09:01]  doesn't that one have a cool, um, three letter transition? I don't think so. Yeah. What doesn't. Oh, there's, I don't
[00:09:10]  know. There's empty AV transition. I don't know what you're talking about. No, I was just like, no, I'm saying that it didn't.
[00:09:15]  I'm like, why doesn't that one? No, yeah. Yeah, it's joining. It's missing it. But, um, it's, it's interesting
[00:09:24] . Cause the one, the one commonality here, um, uh, well, I don't even know it's commonality, but Astro has been really pushing people
[00:09:31]  to rethink, um, how they look at what, you know, it's modern web development. I mean, I've been showing a few of your tweets even on
[00:09:40] , um, like my, this week in JavaScript. Uh, I think there was like a couple of weeks ago. Let me see if I can find it right now where
[00:09:48]  you, oh no, it was, it was actually only a week ago. No, it was a couple of weeks ago. Let me find it. Oh yeah. This
[00:09:57]  one. Uh, let me share my screen for two seconds. Yeah. I mean, this is, this is a little bit out, but you've been like,
[00:10:07]  I'm, I mentioned this with Corset, uh, obviously before. Um, but you've been, I think even the way you view Astro at times is
[00:10:15]  different than even, uh, say I view Astro, other people view Astro sometimes. Like, like, like when I see comments like this, you've been,
[00:10:23]  you've been thinking about ways to shake up, like, even beyond. Um, the work, you know, that directly ships at Astro where, you know,
[00:10:30]  there's like happy path where people are like, okay, I have my Astro page. Now I put my react components on it. There. I don't know.
[00:10:37]  I get the impression that, that, that you're, you're, you're like thinking beyond putting react components on your Astro page or whatever. I don't know
[00:10:45] . Yeah. Yeah. I mean, I think a lot about that. Yeah. I mean, I think about like, what's next. I think about what are
[00:10:52]  the problems with, you know, the component, component paradigm in like, what would something different look like? I think about that a whole lot, not really related to Ast
[00:11:01] ro. Astro is a very practical framework. Like people use components. So like we let you do that in the best way possible. I do sometimes think about how
[00:11:10]  Astro could, you know, go another direction, not another direction. That's the wrong way to put it, but like try to implement some of my ideas in a
[00:11:20]  more practical way. Cause when I think about it being pretty impractical. So yeah, I do think about these things a lot. It's the reason I find
[00:11:28]  that interest is not just your own. I've seen a few other projects from people around the Astro community, things like X element and stuff like that, where they're
[00:11:36]  kind of challenging, like how far you can take the Astro template syntax itself. Um, but yeah, I understand it's a separate thing, but I am, the
[00:11:45]  reason I'm bringing this up is for good reason, because I, I think. I think there are more possible ways things can go than what we're sitting and looking
[00:11:57]  at right now. And while you could say some of that stuff might be even kind of outside the practical part of, you know, what, you know, Astro puts
[00:12:05]  as like what they're, what you're good at. Um, I think that in small ways, Astro nudges people that way. Uh, often, even
[00:12:17] , even if it's like, not like the, like the, the, the, the, the happy path of thinking about, like Astro supports, um, for
[00:12:25]  partials in HTMX. Right. Uh, yes, yes, yes. We have partials. Yeah. Yeah. Which is, you know, again,
[00:12:32]  a, a feature where, I mean, some people might view this as almost a primitives kind of approach, but it's, it's, it's, it's
[00:12:42]  tricky in a landscape when so many parties are trying to control how things work, uh, so to speak. Um, so to speak. So yeah, I dunno,
[00:12:54]  this actually makes me think of another tweet you, you wrote here. Uh, uh, where is it? The one you did last with all of this, just like,
[00:13:04]  I'm frustrated with something. And like, I just, you know, tweet something out and don't think too much about it. Oh, is this one? Uh,
[00:13:09]  yes. Yeah, that is. Yeah. I do think that. Do you think that? Like, I don't know if, uh, if, if that makes sense
[00:13:16] , but I mean, I, I just look at like what everybody is doing about trying to make it easier to communicate. with server, like breaking the server client divide
[00:13:24] . It's really that communication between the two, like making it not feel like the same app in terms of like all the codes the same necessarily, but that, that communication
[00:13:35]  is like very simple and like very direct. Yeah. Yeah. Um, yeah, no, I mean, yeah, this one, I definitely, I, when you
[00:13:42] , I am not gonna admit when you put the last post about the components, I was like, yeah, I'm not giving up components from an offering standpoint, but this
[00:13:50]  one I latched on to right away because yeah. I mean. So give up components. I think, uh, so what I mean by that, not like,
[00:14:02]  it's the composition of components. It's like, I have a component and the way that I compose my app is I pass props to other components. That doesn't mean
[00:14:12]  you don't have GSX or templating or something like that. It's just like maybe the, the communication between those things does not happen through, through props.
[00:14:21]  It's really props is the thing that I've been thinking about. I see as, as something that maybe we could do away with that. Like, what if you
[00:14:29]  created an instance of a component, like outside of the template, and then you use that instance, the instance is the thing that is inside your template and you communicate it through
[00:14:40] , you know, whatever message passing, for example. Why does this, this makes me think of MVVM, um, a bit. Yeah. Uh, well,
[00:14:49]  it's, it's, how do you break the component architecture is like the thing that I think is. Like the thing that I think about, like, I,
[00:14:55]  I, I guess I feel strong. Well, first off, I don't think component architecture is perfect. I think it has like some pretty deep flaws that are hard to
[00:15:04]  overcome. And I'm not sure that like incremental progress is ever going to fix those things completely. So like we either end up with a place where like, ah,
[00:15:14]  we like components cause they make it easy to compose dom, but like composing state kind of sucks. And we got to go all these sideways channels and, you know,
[00:15:23]  do all this weird stuff to try to, to try to like, you know, because it's all about preserving components. Right. Like that is like, if you
[00:15:31]  think about fetch overriding, it's all because like you want to fetch in the component like that, that, um, the component is like the central thing.
[00:15:41]  And so if there is, if there's ever going to be a paradigm shift, then I think that has to break because there's whenever there's a paradigm, there's
[00:15:51]  always a center, like a central thing about the paradigm, like the thing that you're thinking about, like where your mind is. And today it's components obviously.
[00:15:57]  And if there's going to be something else in the future, then like components can't have got to change. I don't know if that makes sense. Yeah. I
[00:16:06]  mean, it, it does feel like something that we've been dancing around. Like the reason I brought up MVVM is because in that model, the templates were very
[00:16:14]  much separate and the templates included templates. And then the view models included view models. And then the models included models. And there's like this kind of three way dance where
[00:16:22]  the data was driven for, through the models, the view models. Yeah. Map them with, uh, with like, because I guess the challenge is there's always
[00:16:32]  ephemeral state or temporal state that exists arguably in the components. And then there's, and then there's like other stuff that is more persistent that lasts longer. And
[00:16:43]  one of the challenges for that, at least from my perspective has always been like the very, very first JavaScript frameworks and the client didn't account for ephemeral state.
[00:16:53]  They were like trying to take MVC patterns from the server and bring them straight across. And then used to, you got like angular, like, I think it was
[00:17:01]  called like ng scope or something where they like had the kind of like sneak in this, this like localized. Uh, kind of state because the, like there was no
[00:17:12]  concept because they had controllers, not instance-based stuff. Yeah. Yeah. And then like, uh, yeah. Ember was a bit like that too. A little
[00:17:22]  bit. It wasn't that bad, but they, Ember just added more types of things. Like Ember would be like, we have containers and controllers and.
[00:17:30]  Yeah. Yeah. So it's like, I mean, obviously I can't completely take what we've done in the past. Like, cause in a sense, the component
[00:17:38]  model had been done to a certain degree. I think in the past as well, before it came back around for like, like with. Back in the DHTML
[00:17:45]  days, there was like component like things. Right. So like, yeah, it's, it's yeah. The component one's a tricky one because it does like,
[00:17:56]  for me, I feel satisfied enough understanding two things about components that like not components or sort of the UI pieces don't necessarily have to like data trees and UI trees are not
[00:18:10]  one for one. Right. So as long as you accept that, like as long as state can live outside of the component, that's the, the, the first
[00:18:18]  piece. Um, but yeah, data fetching and async is tricky because even with that kind of acknowledgement, I I'm one of the biggest proponents of hoist
[00:18:26] ing, you know, which is again, pulling it up or pulling it out. Um, local, local data fetching. Isn't a real thing unless you have a
[00:18:36]  compiler that pulls it out, but then it's, it's still pulling it out. It's still pulling it out. So like compilers, the last thing
[00:18:43]  I think about the first thing I think about is mechanically how this thing should work. Um, exactly. Like compiler compilers like people like rush to try to solve
[00:18:52]  problems with performance problems with caching. And it's hilarious. Cause we're talking about caching today, but like that's people's first instinct is like, I'll
[00:19:00]  throw a cache on it. But like the algorithm making the algorithm as fast as possible is the first step to performance. Um, and this, the same way, um
[00:19:11] , Oh gosh, I lost my train of thought. Where were you? What were you just saying? I was trying to make that. Talking about hoisting. Yeah
[00:19:17] . Talking about hoisting. Data fetching. Yeah. Yeah. I mean, hoisting is obviously you should do it. And using a compiler to,
[00:19:24]  but using a compiler. Yeah. Sorry, sorry. Yes. Compiler has to be like the last thing. Like, sure. kind of fixed up with a compiler
[00:19:32] , but it's, there's the same way that caching always, we gotta invalidate the cache. Like compiler has the same sort of issues where the compiler has limits
[00:19:39] , especially in a dynamic language, like, like JavaScript. So I like to think about like, what is the more fundamental problem? Right. And I can avoid compiler stuff
[00:19:48] . I would like to do it. Cause I don't know. I don't think that leads anywhere. I just think there's limits, I guess. Yeah. It
[00:19:57] 's, it's an interesting contrast. Because sometimes compilers in almost like a new language dramatically change the way people look at the problem enough that like, it provides
[00:20:10]  this kind of change in the way you view the problem, the problem enough that it's like worth it. A perfect example for me is like Svelte 3. Like
[00:20:19]  Svelte 3 is incredibly simple. I can't think of a, like, or not simple, easy. I can't. Is that the change to the,
[00:20:27]  the single file component? Is that Svelte 3? Yeah. That's, that's when they went to single file components and let's are reactive and dollar sign labels
[00:20:35] . And like the, like the, the Svelte that everyone knows basically before that they had the dot get and the dot set and all that stuff. But the one
[00:20:42]  where it's just very straightforward language and it wasn't my thing. Cause you know, skepticism of compilers to a certain degree, but I could see people
[00:20:51]  just picking up and being like, look, let count equals zero count plus plus count in HTML. And it worked. So it was an example where the, where it was
[00:21:02]  drastic enough, you know? And I guess another example might be like any DSL where you can like express an idea straightforward. I know you're, you were a
[00:21:11]  big fan of DSL to a certain degree. Like when we're working on corset. So like there's that level on the compiler, but then there's like,
[00:21:18]  sometimes the danger of that is there's always like a possibility that you miss. Like you're like, you might design the language too narrow and there's, you need more
[00:21:29]  flexibility. It might be fine, which usually happens. Yeah. Right. But then on the other hand, like, then there's the compiler. Like, I guess
[00:21:39]  I have an interesting opinion, like Svelte 5. I love Svelte 5 directionally. Cause it's finally doing the stuff that I want it to be doing
[00:21:47] . But on the other hand, the, the benefit of the compiler for Svelte 5 is more suspect for me, at least personally, because like, because like it
[00:21:57] 's a difference between. Say calling a function and not calling a function. Yeah. Like, like, like mechanically what's happening is a function is being called,
[00:22:07]  but the compiler is just hiding that detail and it doesn't actually affect the mental model. You still have to kind of explain to people that it's calling a function. So
[00:22:16]  like that, that that's, that's where the, the like, for example, for me, like the, the compiler stuff, like similarly with data hoist
[00:22:26] ing, when you, you have to tell the people that it's getting fetched above, you can't actually hide the fact. It's like, it's, it
[00:22:34] 's like compiler for convenience. It's like syntax. Yeah. But they, but that's important. Again, back to like what I was saying, that is very
[00:22:43]  important for component architecture. Right. Is like, you want to be able to think in the terms of a single component. And when you have to start hoisting
[00:22:51]  data and stuff like that, then now you have to start thinking a different way slightly. And the whole thing kind of breaks down. That's why I think for sale,
[00:23:00]  it's for sale next or the, the react team has gone to great measures to like, try to protect like the component based thinking, you know, overriding fet
[00:23:09] ches exactly that as well. Yeah. Yeah. I just don't, I don't trust the compiler to hoist correctly. Like I, as a user, I
[00:23:20]  don't like being writing JavaScript and being like, am I allowed to do this? I don't know. Like I need a list of roles. Like the editor doesn't
[00:23:29]  tell me that I'm not allowed to do this thing, but I, but I guess I'm not allowed to do it. And I'll find out when it compiles
[00:23:35]  to like bad performance, I guess, like, right. And so I'm not against compilers in general. I think if you design a language with constraints,
[00:23:42]  then it makes a lot of sense. Like you, you have rules. Like I want as a developer, I want a list of rules. Give me the rules that,
[00:23:49]  and let me stick to it. Not the sort of like, ah, we're like subsetting JavaScript so that you can only do these certain things, but they're kind
[00:23:57]  of written down into very loose terms. Like, I mean, at least the rules of react, the, the, you know, the hook rules and stuff like pretty simple
[00:24:05]  to like, keep in your head. Right. Yeah. It's funny. It's really simple to obey all the time, but it's simple to keep in your
[00:24:13]  head. Yeah. I, I never actually had like that much issue with reacts taking the approach they did with hooks initially. Like just because they were very clear at the onset
[00:24:25] . And I think this has been a shift because, and I mean, I guess I got to credit Swiss for this one. I usually, I don't always want
[00:24:31]  to credit him, but he's, he wrote this article like four years ago or five years ago where he was talking about the shift left in development. And you were
[00:24:38]  talking about your ID, like if your ID could give you the feedback early enough, like, then maybe you might be more okay with it. It's, it's kind
[00:24:46]  of one of those things where like, like, you know, that's why TypeScript's so popular, right? Cause it's like the ultimate linter. Yeah
[00:24:53] . Yeah. And, and like in the same, we're going to see lots of different compiling stuff. It's why strict, like react has strict mode, which
[00:25:00]  obviously annoys people to hell. But sometimes you wonder like if the framework, if we knew now, like, or we knew then what we know now in terms of like
[00:25:08] , what should be strict mode, like how would we design stuff differently? So we would have just started with the assumptions that we have in strict mode, you know, today
[00:25:16] . And then people would have gone, go through that pain because of the migration to it. But then like, maybe everything would be cleaner, but sometimes less intuitive because
[00:25:25]  sometimes you end up with like react set state, um, you know, which has a very good reason for not setting the value right away, but literally drives people crazier
[00:25:39]  than it should. Even knowing that rule. No, it's, it's, it's, it's one of those funny ones. Um, you know, so like
[00:25:47] , like we're going to see more and more of these components. compiler type things, obviously react for that might be a game changer. Right. I've mentioned here
[00:25:55] . Um, yeah, I mean, we, we, we, I did a stream on forget a little while ago. It was, it was fun. I think it
[00:26:02]  was important for people to recognize what forget did versus what it didn't do. because a lot of there's compilers are two have two sides. Um, and
[00:26:15]  I've, I've written about this kind of the economy before. It's kind of like electric cars are really good on because they're efficient in a certain way. Um
[00:26:23] , they, they're good for like gas economy. That's why you see them on like the light cheap cars. But then on the other hand, because the efficiency
[00:26:32] , you know, you can actually get more performance sports cars. Um, out of the electric cars that we've seen with Tesla. And I think understanding sometimes with comp
[00:26:41] ilers they're aiming at one side versus the other side, not necessarily like, or maybe, you know, shoring up both sides, but not the whole thing.
[00:26:48]  I mean, I don't know if it's a great analogy, but like, uh, forget is, is very good at making it easier for people to write react
[00:26:58]  is the best way to put it. It doesn't actually change the characteristics of like react itself, how it runs. So it's like, it's one of those interesting
[00:27:08] , um, kind of things. I think it's, I think I'm going to try and pull this all the way back. I think it's interesting as we
[00:27:16]  add more of these tools and pieces, the, the perception of like the complexity, because no one's going to, no one, no one here in this whole stream,
[00:27:28]  probably listening, watching or whatever. It's going to claim that they know exactly how react forget works. Um, you know, unless we get the core people joining on,
[00:27:36]  like they did, uh, last time when I did the stream on it. Um, it's, it's very unlikely. Like everyone's going to understand like all
[00:27:44]  the details of it, but the, the further away we get from the underlying platform. And then we're, and the more that we're aware of that gap, the
[00:27:52] , the more perceived complexity, um, there is. And, and that's something that, um, is interesting to me because it's, it's a perception thing because
[00:28:01]  everything is a little bit complex. complex, but the, the, the, the, the complexity, um, like, or the sort of the perception of that complexity
[00:28:13]  is very important for how people like come in and the developer experience and whatnot. And I think one thing that continues to be true over and over again is the perception of
[00:28:23]  the complexity around astro. Um, is always has been consistently something that is very, not only straightforward to get started with, like on the easy side, but also keeps
[00:28:35]  things relatively simple or transparent. Uh, so yeah, I mean, that's for a number of reasons, like kind of the opt in design is a big part of
[00:28:44]  that, right? Like there's no, you know, there's no like, oh, we'll figure out where your server islands are. You tell us with the,
[00:28:52]  with the tag and that's the, you know, obviously client components, uh, the, the same way. Um, I think that's a big part of it
[00:28:59] . That's all right. I was laughing. I bet Ben home self-promoting a little bit. Uh, what's going to happen to Ben's suspense library,
[00:29:05]  right? I saw this a little while ago. Ben did a kind of like a demo where he was doing like something like out of order streaming in astro a while ago
[00:29:13] . Yeah. Yeah. He, he built a library for, I don't know what's going to happen to Ben's suspense library. I don't know if he's
[00:29:19]  trying to say he wants it to bring it into core or he's like, now he doesn't like it anymore. I'm not really sure what, what Ben thinks
[00:29:26] . I think it's pretty cool. Like, I don't know. Like, is it, I thought that was cool that he could implement that as a library. Um
[00:29:35] , I don't know if that means we did something right or if that's just normal. Like, could you, could, could you do that and solve it as a
[00:29:42]  library? Um, yeah. I mean, I gotta think about it. It's trick. It's tricky ish because do you know what it takes? Acknow
[00:29:53] ledgement of, you need to be able to re if it's actual suspense, not just like the weight components, like say Svelte. You need to acknowledge where
[00:30:01]  the promises come from, which is tricky. So you, if you communicated in promises, then I think so. Uh, yeah, it would be a little convolut
[00:30:10] ed and solid to do it. Like the streaming stitching in the streaming is easy. I mean, we'll talk about this with server islands. It's not too hard to
[00:30:18]  stream in script tags to swap in HTML content, but. But what's it tricky about stuff like suspense obviously is, is like handling the detection of the async.
[00:30:32]  Um, like, and knowing how to handle it. Like, I guess in solid, it would be weird. Like in react you throw and then you could percept or maybe
[00:30:41]  even after you can just go re render it again. And I guess technically we could do that on the server. Someone could write code to do that, but it's like
[00:30:48] , we really try not to re render stuff. So it's like the, it makes it, it makes a little bit tricky, uh, or a little bit different
[00:30:57] . Um, yeah, I think this is actually an interesting side point for people to think about, but like in one way people talk about async coloration, right?
[00:31:06]  Cause like you have now everything has to await, you know, you kind of propagate it throughout the tree, but reactivity systems are fairly. I don't want to call
[00:31:15]  them. Like it's not coloring the same way they color function, but like once you're in reactivity, you kind of got to stay in reactivity. Which
[00:31:20]  is why reactive systems usually aren't compatible with each other. And like, like, you know, so like one benefit of react conceptually is that they're like, we
[00:31:29] , we don't really care. We have, it's, it's a half wide because they have their own internal state mechanism, but they were trying to say like,
[00:31:36]  we don't care about your reactivity of your data. You can just trust us to revender again. So you can kind of see that like simplicity in play in
[00:31:43]  an example like this, where you're just like, okay, you can always tell react to revender again. If you can catch a promise, then you can tell it
[00:31:51]  to revender again. it's a little different with reactivity systems where they're like, you know, the data is specialized. Like, and in those cases,
[00:32:01]  you almost need the data to be, it's almost like it's a primitive. It's like language level primitive. It's like language level primitive. You need it
[00:32:08]  to be part of the language essentially to actually be able to describe these things using reactivity. So yeah. Sorry. You probably didn't expect this to be such a long
[00:32:17]  answer, but it is one of those interesting things where reactivity might not color functions, but it's a, was it invasive or. Yeah. Yeah. Uh,
[00:32:28]  yeah. Pervasive or whatever it is. Something like that. Yeah. Yeah. Right. Infectious. Infectious. Is that working? Right. A
[00:32:37]  little bit. So like, yeah. Um, you also invented Penn and Jerry. Yeah. I've been thinking a lot about like how you could structure a framework. I
[00:32:45] 've been working on a framework, I should say, but I'm gonna, well, let's not talk about today, but I've been thinking about a lot about how
[00:32:50] , like, how, how, how could you get, you know, a lot of the same benefits you get from frameworks. But without any sort of, uh,
[00:32:56]  uh, reactivity with it, without actual reactivity, without any sort of like reactive data, similar signals, no hooks and that sort of thing. Because that's the
[00:33:07]  part that I tend not to like about it is the infectious part. And like, anytime you want to do something like you, you need, there's, there's a
[00:33:15]  million JavaScript libraries out there, but if you want to use those in the, in the sort of framework, you wind up, you wanting to like wrap them in order to
[00:33:23]  make them reactive. And that sort of thing. And, um, I don't know, I think it's interesting just to think about at least is that if you
[00:33:28]  were able to just have plain regular variables, plain regular properties and whatnot, like that would make that would, that would. Cause that's a bit, it's a
[00:33:36]  big problem creating your own framework is that it's the ecosystem. Like at the end of the day, no matter what you do, that's special 99% of people care
[00:33:45]  about the ecosystem. And, uh, if you were able to like build something that didn't, that could just use the entire JavaScript ecosystem. And like, it was
[00:33:53]  just, it felt native. However, that works like that would be a, that would be a big benefit. So anyways, it's kind of sidebar. Yeah
[00:34:01] . I mean, it's, it's tricky, right? Because there's, if the native stuff is built within the events in mind, like if the basic JavaScript stuff
[00:34:14]  is built with events in mind, then it can be mapped reactive systems fine. But yeah, the, the challenge is like when you were first describing and I was like
[00:34:24] , okay, so you want react like just or preact or whatever, because they have this like just render it approach, but that requires diffing. Right. And if
[00:34:34] , I mean, the diffing could happen at the Dom level perhaps, but like, basically if, if you don't have special data, you end up updating more than
[00:34:44]  you need to. So you end up dipping, which then is tricky. I don't know. Well, I think. Okay. I agree. I agree. I
[00:34:53]  agree. You probably need diffing if you don't have specialized data. I agree with that. But what if, what if, what if a component, whatever you want
[00:35:02]  to call it is very small, right? Like if you don't need to like diff all that much, then it's not a big deal. Right? So can you
[00:35:10]  create a system where, you know, you have these like little pieces of things that are communicating? They're communicating with each other and, you know, sure you're
[00:35:18] , you're diffing them, but, but yeah, it's, it's, you're not different that much. Maybe in practice, you wind up diffing a
[00:35:25]  lot because actually when you do change state, it does, you do wind up having to, you know, message something else that changes state. So maybe, maybe it
[00:35:33]  doesn't work out in practice. I don't know, but that's. I, and I, and it's one of those things that like, I'm also kind
[00:35:39]  of wondering how much about the, uh, like what people think about when they think of sites or websites. Perfect example of this is when you showed, we were talking about
[00:35:50]  server islands and at first, you know, we're talking about it. And I came to a stark realization that I've never professionally built. Like I've worked on
[00:36:00]  framework level teams in this scenario, but when I was on product teams doing web dev, I never worked on any site where the LCP wasn't dynamic. So like
[00:36:12] , and I know that seems crazy. I I'm positive. Everyone. So you've only worked on like social networks and. Social networks and like, uh, like,
[00:36:22]  like crud kind of apps and like call centers and dashboards and. Yeah. Yeah. Dashboards probably. I don't know. You could. Yeah. I guess
[00:36:34]  you, you probably wouldn't use server. So should we, are we going to get into. Yeah. Yeah. Exactly. Yeah, exactly. Yeah. Can we
[00:36:41]  define what it is? Does your audience already know like what it is? Yeah. Some of them do, but I think we should keep, we should keep it pretty general
[00:36:48] . I hear first. So yeah. How let's introduce server islands. I'm going to first, I guess, maybe pull up the, the blog post, um,
[00:36:56]  so that I can see it. And maybe you can first tell people what you're from your perception, what are server islands? Yeah. Since you were instrumental in implementing
[00:37:08]  them for, and for astro. Yeah. Yeah. So, I mean, I mean, just in practice, if you understand astro, you know what a client
[00:37:15]  island is. Uh, you add client colon load idle, et cetera, and astro will render that on the server, but also in the client, uh, basically re
[00:37:26] hydrate it. So it's just a, it's just a way to do rehydration, you know, for you. It's kind of a declarative
[00:37:31]  form of rehydration. Uh, server islands are kind of the same sort of concept, but for the server. So, um, you mark a particular component to
[00:37:42]  run on the server and it will, um, run that in the, the, the, the directive we use is server defer. So you're deferring the page,
[00:37:51]  uh, or you, excuse me, you're deferring that particular component to run after the page loads. Um, so that's kind of like how, that's
[00:37:59]  how you use server islands, but what it really is, is a way to, um, differentiate types of content to run at different times to, to load at different times
[00:38:10] . And the primary reason why you might want to do this is it allows you to, you know, think about a webpage and you have different pieces of it, which are
[00:38:20]  more dynamic than the rest. Um, you know, we use the term static versus dynamic that those terms are kind of, uh, you know, there's a lot
[00:38:29]  of. In between on those things, but, um, you can think about like, you have highly static content, which is like, you know, your, your,
[00:38:37]  uh, your shell, the shell, the page, the header, et cetera. Then you have some parts that are like more dynamic, which, you know, for something
[00:38:44]  like an e-commerce is the product itself. But even, even in that case, those things don't change all the time. Like maybe if you're Amazon,
[00:38:52]  you're changing products every second, but for like most e-commerce sites, you're not. The list, the listing page for like a specific product that if I was
[00:39:00]  like, uh, I don't know if I was like looking for green shoes, I don't know. I won't look at green shoes, but like the, these
[00:39:06]  pages that pull up when I go from a search listing, these pages do not change very much. It doesn't matter if you're Amazon or whatever. So say,
[00:39:15]  oh yeah. Go to one of those and just stay on it for a second. So I wanted to see if I could find eBay or Amazon. Here's one Amazon.
[00:39:22]  Okay. Yeah. Amazon. Like, you know, they have, they have different constraints in the rest of the world. But apparently I can't click it though.
[00:39:32]  Maybe my, why did it, why did it just decide that? It's like selecting the text. Yeah. Oh no. Okay. Whatever. We're going to
[00:39:43]  go and do this. Okay. Yeah. So yeah, obviously here, like when we say static, when we say static, we're really talking about everything except for like
[00:39:51]  the login pieces. So we have like that header up there. You have a cart. Um, you have like an avatar. They're not showing an avatar there, but
[00:40:00]  none of a lot of sites do. Obviously those are the parts that we're considering dynamics. So what server islands allow you to do is it allows you essentially just to
[00:40:09]  hash different parts of your page differently. Um, and in this case, we're assuming the comments, these are, those are dynamic, right? Right. Exactly. But
[00:40:18]  the product is, the product itself is not. So you could set a cache header for that product for, I don't know, once an hour, like, you know
[00:40:25] , cache it for an hour or you cache it for longer. If like, you don't change your products all that often, you know, you can kind of have that
[00:40:30]  flexibility. that flexibility, but by using as a server island, you, you can cache the actual, the actual static page. That's going to be in the edge
[00:40:39] , you know, the edge bucket or whatever, whatever provider, however they happen to implement it. It's, it's in some bucket somewhere on the edge. When you
[00:40:47]  go to the site that goes immediately, right? That is immediately to the user as quick as possible. Um, the page itself is like mostly static HTML. Um, you
[00:40:57]  know, obviously you can still use client islands and all that stuff and you still get the same benefits of Astro. Um, but the actual dynamic parts can, can
[00:41:04]  load in later. So they load in, you know, after the page loads, essentially. I mean, what you're describing is easy. It's easier if I just
[00:41:10]  show the demo for people. Um, yes, because this is the main product here. This lecture line, get away. The sidebar is obviously some static navigation and then
[00:41:18]  you have recommended for you comments and stuff. and stuff. And if we sit on this page and we refresh what you're going to see, this comes in right away
[00:41:26] . And then the other stuff comes in as it's ready. It has nice. Yeah. So, so, and they come in at different times too. If you,
[00:41:31]  if you scroll up like the, the different parts that, that come in are. This comes much green part. Yeah. Um, the green part, which says just seven
[00:41:40]  rooms left. So it's basically, you know, it's checking the database to see how many of these things are sold. Um, that's happening pretty quick.
[00:41:46]  And then the recommendations that's, I don't trying to think, you know, maybe, you know, that's based on some like user data, like users recommend certain
[00:41:55]  things and you use that. That's why that comes in late. And then you have comments at the bottom, which obviously comments can change all the time. So all those
[00:42:03]  things come in at different, at different times. And this is, this is an interesting one because this same breakdown of identifying what's dynamic versus static is very similar to
[00:42:12] , and I guess why you guys call it server islands. The, the exercise that you did when you introduced islands to people, instead of saying dynamic versus static, you said
[00:42:21]  interactive versus non-interactive. That was the, that was the, that was the point. And when you went to an e-commerce site and you said, uh
[00:42:29] , you said interactive versus non-interactive. Um, it was, uh, there, there was a lot of the same things. For example, like the cart is
[00:42:37]  interactive. The buy button is interactive, but this is a new level. Cause you wouldn't say that. I mean, okay, fine. The, the comments are
[00:42:46]  interactive too, but like, you wouldn't say that the recommended products are interactive per se, but they are dynamic. And this, this is, I'm not gonna
[00:43:01]  lie. This has been the biggest thing for me looking at it. I, I told you earlier that I, I hadn't dealt with many things where, um, L
[00:43:08] CP wasn't like the primary, you know, wasn't behind dynamic stuff. And it occurred to me that maybe the definition of what a website versus an app is.
[00:43:19]  Should shift because of this. I don't know what you're like, like, why is this this teacher? But it, it, it actually made me think about what
[00:43:28]  I assumed. Cause I, we always talk about websites versus apps in terms of interactivity, but dynamicism is actually probably arguably more important. It's something I'm
[00:43:41]  still kind of playing with a bit, but like. Makes sense. Because like, I could take something like, I could take something like, uh, what am I
[00:43:49] ? Slack or something. Okay. Look at this page. Now this is, I mean, obviously I could list this, but the, and catch it to a certain degree
[00:44:00] . Like we don't need to buy the second updates, but like this list always changes. Right. Arguably people are always posting new stories to hacker news. Right.
[00:44:09]  Yeah. Yeah. Yeah. Yeah. I mean, it's an interesting thing where like, maybe this doesn't update enough that you get away with static stuff for a
[00:44:28]  lot of things because like it's, it's mostly additive. Things don't edit that. So that argument error, but it is an interesting exercise when you start thinking about
[00:44:37]  how much of the app. Here is stuff that changes enough that you would be fetching it. Uh, you know, after the fact versus. It's about the
[00:44:45] , it's about the main content. I think. Right. Right. Yeah. Cause I mean, you could, you could put this entire list inside of a server island
[00:44:52]  if you wanted to. And like, you know, have the shell in the edge, but like, who, who could, you know, why would you do that?
[00:44:59]  Right. Right. Exactly. Cause what, what is the shell in this? It's, it's this, it's this. It's that start. Yeah.
[00:45:06]  Yeah. Yeah. Right. Which I mean, yeah, whatever. Right. Which is fine. Obviously right app, right solution with the right problem. But it's,
[00:45:14]  it started me thinking about like the nature in the same way islands had me rethinking the fundamental nature of apps and sites. Um, you know, like when I first
[00:45:22] , uh, in that case was first, uh, discovering Marco, but like, um, this difference here in terms of dynamic versus static, um, definitely got me thinking
[00:45:34]  about this again. Um, just because, uh, well, frankly, PPR didn't get me thinking about this because PPR apparently didn't, didn't have any
[00:45:46]  trade offs. Um, we'll, we'll see in the article that there are trade offs to PPR. Um, as we read a bit more and learn more
[00:45:52]  about this, these technologies, but I didn't think about it when I saw server islands, I kind of got the trade off right away. But then I was like,
[00:46:00]  it's a hundred percent worth it where you want it, like completely worth it. Mm-hmm , and that, that is, is kind of why kind of broadly
[00:46:11]  I'm, I'm, I'm, this is causing me to think very differently about the, the nature of things. It's almost like, you know, people have
[00:46:18]  been talking about, you know, server components and you have server and use client. Right. Mm-hmm , and then PPR was implemented by kind of using a
[00:46:27]  hack around suspense, but like, it's not a hack, but it makes sense. But like, there's like an, it's, it's, it's almost
[00:46:38]  like static is an outer layer. There's like static layer, server layer, um, interactive layer. There's like one, two, three. Yeah. Yeah.
[00:46:49]  It'd be funny if there's like, if instead of the baseline thinking being server, it's almost like you gotta like wrap it again. Right? Like it's funny
[00:46:58] , it was really hard for people in the move to RSCs because everything was client interactive components. And then you're like, no, no, there's actually a
[00:47:02]  layer on the outside. People kept on trying to jam it on the inside, but you're like, no, no, the layers on the outside. And in a
[00:47:08]  sense, the static or pre-rendered layer is on the outside of this, of this, of the server layer. So it's like going outwards again. Um
[00:47:17] , no, I like that. I like that. I like that. I like that. I like that framing of it, of, you know, of, of apps
[00:47:24]  versus, uh, sites that way. I had not thought about that myself. Yeah. It's, it's just, it was, it was funny that even the,
[00:47:31]  the silly, like for me, I use this as my site demo. Like it's not interactive really, but a social site or something that's based heavily on dynamic
[00:47:43]  content. Even if there isn't very many interactive points is it is of a different category than, um, you know, you know, a fixed shop. Like the
[00:47:53]  thing is I'm talking about like eBay or auction sites where they're like constantly putting stuff up, you know, might be different in place. Most Shopify sites, most like
[00:48:01]  online stores, you have a fixed catalog. You have, you know, 498 products each with seven variants or whatever. And. Yeah. Like it's kind of
[00:48:14]  set in stone. Like you might add a new product, like, like a couple of products every month or something, but it's not like, like every minute someone could
[00:48:25]  be adding something. I mean, it's, it's a completely different, um, yeah, this completely, I don't know for me changes my look. Yeah
[00:48:32] . Look on this demo. The there's a couple of things that were a little surprising to me. The, the price is not an island. I would think that's
[00:48:39]  something I want to be able to, to change pretty quickly, but if you have, you have, you know, your cash headers are only for like an hour, then
[00:48:46]  who cares? Like, you know, you're not making dramatic price changes. Um, yeah. And then the, the, the shabby car, the avatar
[00:48:53] , or I think are not as well, but that's just, you would normally, I think you would do it that way. Right. Yeah. I mean, my
[00:49:02]  understanding was that this was just kind of a port of this, uh, next demo. So you guys kind of kept the same, the same stuff where they have the
[00:49:10]  cart and then the product. Yeah. I mean, this is, I do like that you added your own flavor to it. Um, I actually made those other people on
[00:49:19]  the team, but yeah. Yeah. I, I, yes. This is what I did yesterday. I went to next and I just copied this app and converted it to
[00:49:26]  solid start. Um, okay. Uh, like the source. Yeah. Like I literally took the JSX components and converted them into solid. Yeah. Um, I
[00:49:36]  even left the used clients. And even though I'm not using, uh, islands or anything, I just built it as a normal SSR app. And I'll talk
[00:49:42]  about that a bit later. I, I, I don't want to distract too much from the Astro stuff, but, um, I, I actually appreciated that the
[00:49:49]  Astro team, you guys went and made it like, uh, similar enough to compare, but actually like uniquely skinned and slightly different demo. Um, anyway, uh
[00:50:01] , let's. Thanks. Um, no, I didn't, I didn't fork theirs at all. I mean, there are the Astro components are very different
[00:50:10] . So it's, you build it in a pretty different way. Yeah. I, I mean, I love doing stuff like that sometimes with next for solid case, because
[00:50:18]  it lets me test how similar solid start is to next and how similar, um, react is to solid. And honestly, 80% of the changes actually, I'm
[00:50:28]  gonna ask the chat. What do you get? Like I, I managed to convert the app into two hours. It's not like perfect, but can you guys guess what
[00:50:35]  90% of the time I was doing? Like what was the hardest part of switching from an RSC app to a solid app? I wanna see if anyone can guess
[00:50:46]  that I'll even leave it. Oh, it's not even hardest. The most tedious part. Any guesses? I actually didn't need to restructure the code very much
[00:50:54]  at all. Um, which is funny. So you state to you signal for an app like this, that there's only like three use states. So it wasn't
[00:51:07]  big. Ding, ding, ding, ding, ding, ding. We mean class name to class. I mean, it was fine. I think class name still works with
[00:51:14]  solid, but it was actually just going over and over. Changing async wasn't actually that hard. I just had to take their weight and then just wrap it and create
[00:51:25]  async. I didn't bother with cash or anything. I just went like create async, remove the await, and then it all worked. But yes, class
[00:51:33]  name. Um, some things are fun was I removed CLSX. I just used class list. Um, uh, but yeah, the, it was, it was
[00:51:44] , yeah, I, this one hit me once. I was wondering why the menu didn't work when I shrunk it. And I somehow the type script missed it
[00:51:56]  in one location, uh, in a class list, I guess. And it wasn't setting the right like hidden menu option. This hit me once. So I guess this
[00:52:06]  was the most painful in the sense that I didn't see this one right away, but this one was just like every file. And actually the, the second most tedious
[00:52:14]  one, although might've been actually, is that next.js uses hash further from the root and solid uses, uh, tilde. So anyway, I'll talk about that
[00:52:28] . What asked is, does Marco have anything like this? Um, no, uh, there, there is. Yeah. Ebay has a lot of caching mechanisms
[00:52:40]  built in, but Marco was only ever worried about dynamic rendering. Um, like that was its responsibility. Okay. So you're not doing something like this at, at
[00:52:51]  Ebay. Yeah. No, the, the, the caching is like on the outside of, of, of Marco. Um, they, they stream. Yes.
[00:52:59]  Marco is very, very heavy in order and out of order streaming happening on the same page. same page they'll like in order stream stuff and have out of order parts
[00:53:09]  in the in order of stream streaming like very heavy stream oriented um but yeah anyway uh i i got i got a tangent away i'm sorry i didn't mean to hijack
[00:53:25]  that on i'll show the the my experiments this all a little bit later let's let's keep this focused on the on the on the on the on the on the on
[00:53:32]  the astro stuff because i think i think it's probably important at this point okay two ways we can go here but now that people see the feature and and they see
[00:53:44]  how it works which is i i showed a moment on the blog site it's not whatever it was it it's not it's not too hard to picture you literally just put
[00:53:53]  um here it is you put server defer on a component and then it assumes everything outside is pre-rendered and then you just server defer and then just like client load
[00:54:03]  or whatever like the island directives this just does it and there was a few technical questions people had like can you put client components directly in the outside the server defer um
[00:54:16]  i'm gathering you can outside this oh well yeah you can't put them on the same component yet i'm not sure if that's a bug yet or if that's good
[00:54:26]  i'm not really sure yet um you can't nest them people have asked about nesting like i don't think we should do that that's you know add a bunch
[00:54:36]  of waterfalls like why would you do that i'm not sure yeah there's some technical limitations to it yeah i guess i guess one of the questions is can you i guess
[00:54:46]  it can you project yeah like i guess i guess this answers my question why project i mean avatar is server dynamic this is still static content being passed in between the children right
[00:55:00]  so yes you can right yes yes yeah that's the fallback slot so that's what's going to be you know pre-rendered or whatever that's what's going
[00:55:08]  to be statically generated yeah and the fallback slot have another defer in it i don't think so okay because i i agree with you that general nesting makes no
[00:55:23]  sense i think the fallback slot someone could try to make an argument for it it's probably not necessary i don't i'm not going to nerd snipe you here i
[00:55:31]  just like yeah there's like what can you do versus what what should we let you do like you know there's bugs but like even like using a client component for server
[00:55:41]  on i don't think makes sense because in astro like ace like use astro for async things so presumably in a server island you're you know fetching users whatever
[00:55:51]  like you're fetching data right you can't you can't easily do that with a client component you know i mean you can do with a client component you can't do
[00:55:58]  it on the server with a with like a framework component right like you can't really do async stuff within a rack component in astro very well yeah i mean it
[00:56:06] 's funny i'm getting bug reports now of people trying to do exactly that and i'm like why are you guys doing this um but yeah we probably need to like make some
[00:56:16]  decision on these things and you know start adding good error messages and stuff for that it's i'm not gonna lie it was one of the reasons that initially when i made the
[00:56:25]  astro adapter i didn't have its support i think um because i was like i was like they should just be fetching the stuff in astro and passing it in
[00:56:33]  as props into us you know but yeah i i understand when you get to larger things that like you you you you know larger islands it's just i don't know the way
[00:56:44]  i used astro is very astro focused uh very like but my question was more of that if you don't put any server defer on your page is static right which
[00:56:55]  means that that static page can still have client islands in it right like yeah yeah that that was that that that was what i was getting at like yeah and you could put combined
[00:57:04]  islands inside of like that avatar could very well have some client stuff in there right like uh maybe avatar is not the best things well yeah it could be like part of a menu
[00:57:13]  or something like you could definitely you know very likely want to use client stuff inside of right inside of the server island yeah right which which as i said makes it really interesting
[00:57:24]  when you you approach a demo like this one because in some cases oh yeah yeah some cases it most of it might just be a client island at that point inside the dynamics
[00:57:37]  sometimes um yeah there's not a good example of where you would do that here like the only dynamic the only client parts here is the book now button um which updates the cart
[00:57:46]  so those two things are are client components but they're not server components so yeah yeah in any case it was it was definitely i i liked seeing this because this is definitely an
[00:57:59]  example where you can kind of see that benefit of just having the majority of the content kind of in front of you now when i was the the the the the the interesting
[00:58:10]  part about this and i think the part that that gets people a little bit it's it's and before we talk specifically about performance i want to talk about how you came to
[00:58:21]  the approach for the i i was kind of tempted to excala draw this a little bit um i might as well while we do it but the the the the interesting thing
[00:58:33]  is um for this approach is that uh i've got a i don't know what color let's make it green maybe green i'm gonna i'm gonna put a cd
[00:58:47] n here and then i'm going to put i'm trying to think of like good colors what no okay we'll keep that green sorry and then we'll what else do
[00:58:59]  we want we want a let's put let's make a let's make server blue blue let's go blue okay i'm just gonna call this our origin okay yeah yeah yeah
[00:59:17]  yeah let's let's do origin for now yeah and then because we're gonna do a few drawings here and then i'm gonna call this one over here where we're
[00:59:26]  gonna we're gonna call this one the uh this is gonna be the client or the browser i don't know which what should we call it the client seems fun okay and then
[00:59:39]  i'm gonna also add another red one here for now i don't it's not super important i might need this later i'm just gonna put like database i just want
[00:59:50]  to put the db here somewhere just it's going to come into conversation if we actually talk about ppr and other stuff because then there's also going to be one more
[00:59:59]  box that we don't need probably right now which is this brown one and this brown one is going to be called edge i think i have all the players um i think
[01:00:12]  sorry this one should be like that the edge and the cdn are kind of the same thing yeah yeah but edge is a programmable cdn right right yeah we
[01:00:24] 're right exactly so i'm trying to think of i'm going to probably use some combination of these multiple times here um let's just post some more over here so we
[01:00:39]  can use them again but um essentially if we're talking about um yeah these two sit right next to each other um i'm trying to think of look i'm going to start
[01:00:58]  with astros even though astros came later because it's a simpler model in a sense because right now client does request let's give it white so you hit a website right
[01:01:11]  hit a url and it goes okay i need to serve this page and it makes a request to the cdn cdn responds back to the client with this information
[01:01:24]  and then html you get the html and then it's also while this is happening it's going to get other assets like so yeah let me let me
[01:01:35]  css yeah html i'm hoping i can move this still yeah html right so yeah it's it's it's going to get other assets like yes
[01:01:50]  css js whatever okay and at the it so what the way that server islands let's go server islands works is if i'm correct at the exact same time that this is
[01:02:08]  kind of being processing oh it's very wrong drawing uh not the exact same time because well i mean it's inline javascript scripts so it's pretty close at
[01:02:19]  the same time it's going to request the um dynamic stuff dynamic and then as the dynamic stuff finishes you know which we're working on a way to make this faster too
[01:02:38]  but go ahead it yeah it's going to keep on doing this but one of the there there's probably going to be some kind of while this is happening some kind of thing
[01:02:48]  like this so i mean this is really rough here but if i was to just like go here it'd be like and put like time here it'd be like let me
[01:02:57]  pick a different color it's funny i'm like using all the colors so this is not as easy but i i'm just for here i'm going to go one maybe red
[01:03:07]  yeah there we go it stands out first step one and then what do i want to do here um i'm just trying to think of how i want to show time two
[01:03:22]  and then this here happens let's pretend that this here and this here both happen at time three okay right and then four is the database i guess yeah yeah four it's a
[01:03:45]  database we'll just we'll just make that whole handshake four for it's short let's assume two i mean i could argue that this is short as well but and
[01:03:55]  then right and then five kind of right this is kind of this is kind of the the server islands approach um right now i'm going to grab this and i'm
[01:04:20]  going to oh god i'm so bad at this there we go we're going to pull this one up beside it which one is this let's do let's let's let
[01:04:36] 's do this ppr is this yours yeah let's do ppr okay uh ppr ppr so similar client goes to edge and i'm actually going to put the
[01:04:55]  cdn here just just enough because we're going to in the same way the database is really short we're going to assume that this is like this is very short
[01:05:04]  and then kind of like this right so yeah i guess so i guess so so it's like yeah i mean these these are the exact science measures like this is going to the
[01:05:22]  origin at the same time yeah which as it's returning the hmo right so this is why the timing is here is critical because i'm gonna i'm i'm gonna
[01:05:31]  just say that this is almost the same but we're gonna give it a time to just because uh but it will two will take care of both directions here for this one so
[01:05:40]  we're gonna say that this is like the whole handshake is two not just so then one two and at the same time here it's also going to here which i should
[01:05:52]  do as white and i'm gonna move it down a bit because the edge has closed my gap here the edge could be further from the origin so then we're gonna make
[01:06:03]  this one two and then again this and this which we're going to call yeah i'll put the numbers on it in a minute because then obviously origin has to go back
[01:06:29]  here yeah so i'm going to move this this two's on this side actually and then this goes out to here yeah and the other thing that i'm probably missing here is
[01:06:42]  there are that second js cs thing that we kind of skipped over here i i think actually they they often go straight to the cbn on those interestingly i don't they don
[01:06:54] 't need the proxy i guess it depends i guess probably i don't know i think it depends on implementation i would expect the edge to be able to catch everything but i
[01:07:03]  don't know yeah i mean it it depends like the thing that we're not showing is that there's like routing that's happening in front of like what i'm saying i
[01:07:13]  say edge i mean the the edge worker like the executing javascript code rather than the like the routing right yeah right but if i if i deploy an edge an edge
[01:07:27]  you know an edge worker to netlify it lets me intercept everything right i can't intercept the html request okay yeah yeah you can you can um yeah i mean
[01:07:38]  it's hard yeah i'm not i'm not they might have they might have something special going on to not do that but yeah i get your point yeah okay so anyways
[01:07:48]  the the let's let's let's skip the numbers around so one two and two this this comes back so time three we're actually doing this and at three we're
[01:08:01]  actually down here doing this because we said that was close enough and then four is here because this is not close necessarily and then five so what's interesting about this is and
[01:08:28]  again this is not a science on on length is in both cases theoretically they both finish in five right yeah but there's there there's a slight difference here in that yeah
[01:08:46]  so this wasn't meant to be one this this one coming here diagonal yeah this diagonal is just confusing things i i feel like the css js stuff here should just be it
[01:08:59] 's actually yeah yeah it's around here it should be which means oh interesting technically speaking the css js stuff is at time four okay because it doesn't happen until yeah
[01:09:17]  that's interesting it's just it's just i didn't actually think about that that's interesting yeah um yeah css and javascript is delayed slightly because it's
[01:09:34]  got it yeah yeah i mean i mean i mean to be fair this is super short so like i'm being a little bit unfair for this but like what what we're actually
[01:09:44]  and then it you know it comes back everything at five so roughly speaking these both of these models have everything coming back at the same time the biggest difference is if you go
[01:09:55]  to the cdn directly and return back to the cdn directly you skip a hop through the edge um now how does ppr ppr written the way i've
[01:10:10]  written here how does this differ from out of order where you're streaming where you're not using ppr did any any anyone in chat want to guess how is it different
[01:10:29]  yeah i think i know what i think i know i think i know how it differs yeah yeah cdns okay see the other way around the cdn sits in
[01:10:41]  front of the yeah yeah okay cdn sits in front of the edge okay okay around okay oh really okay i think he knows yeah yeah yeah which is why the the the
[01:10:59]  resources coming back would hit the cdn directly like when i was talking about this line why i was talking about it hitting the cdn directly the interesting thing is
[01:11:09]  the cdn i'm gonna keep it like this i think and matt you can correct me if i'm wrong but like even if the cdn catches first which is
[01:11:24]  what we want that's fine but when you have to actually stitch the stream together i don't think you get the opportunity of the cdn catching first you know i mean
[01:11:33]  like you have to go okay i'm going past the cdn i'm going to the worker that's actually going to stitch the stream together which is why i think
[01:11:43]  i think this is right um yeah i'm trying to read what he wrote um it doesn't go straight to the cdn for the html i don't it
[01:11:58]  can't be flow is browser cdn edge worker yes wait back to the cdn that's for the for the static for like the css oh okay interesting
[01:12:15]  he's saying that the it's like okay so like the cdn hop actually exists in front of like the whole thing all the time like all these arrows that i
[01:12:38]  have pointing directly to the edge or directly to the origin i mean i'm not doing any directly to the origin yet or i guess i did them here all of these pop through
[01:12:49]  the cdn i think he's saying technically right yeah because the cdn acts acts as a router for everything right yeah yeah when you say cdn you
[01:13:07] 're really talking about you know going you know maybe bucket is a better word it's like you're you're getting the static what's in the the cdn bucket
[01:13:16]  yeah yeah exactly that for the point of what i was trying to get at um but yeah and actually let me move this here the difference between out of order streaming and p
[01:13:33] pr like at the edge out of order stream at the edge not at the origin out of order stream at the origin and ppr on this drawing is basically basically none except
[01:13:45]  for if you were getting that content like what matt was saying where it's cdn edge back to cdn kind of scenario like if that's funny it's like
[01:13:56]  cdn edge cdn edge cdn like you know what i mean because you actually i think you're grabbing the static stuff to stitch it into the response
[01:14:06]  that you then send back out again anyway um right but yeah the only difference is where you render right it's it's do you render here or do you render here essentially for
[01:14:19]  the dynamic stuff for this so when i made my demo i was playing fair like i i the static shell i'm not fetching it from the database i'm assuming that i
[01:14:31] 've cached data instead of cached html and then i'm using the framework to render it from the edge in my out of order streaming example so i'm
[01:14:40]  like i've cached data the framework is going to render it every single time i worry about that comparison later but i regardless of the like the pieces i'm missing on the
[01:14:52]  the routing or the like the cdn's role you can definitely see like if anything we get more hops and we're going back and forth between the edge and with
[01:15:03]  server islands you can see that this is just like direct like html two you know and i i didn't put the arrow back from the cdn here like this
[01:15:16]  is coming back at uh let me change the white this is coming back at four so like the css is coming back sooner the javascript is coming back sooner um
[01:15:32]  like there there is benefits of just like obviously the timing between these hops is pretty quick generally speaking but there is benefit there is benefits here of of like like getting everything sooner
[01:15:47]  uh when you do this direct communication from the client you can definitely see it yeah no javascript just straight up c plus plus highly optimized uh cdn code yes yeah
[01:16:00]  which is interesting matt i'm gonna show something in a in a little bit to that degree but um oh that's spice there is spice here because i actually didn't realize
[01:16:11]  this until i built the demo because i hadn't really looked into ppr enough but let's continue with the astro article because just speaking because okay before we go back to
[01:16:20]  the article and talk to the performance members you guys got what inspired this approach like i know you were key on implementing it was this one of your brainchilds you were
[01:16:31]  talking with people how did how did this come about that you guys decided to take the like instead of doing like streaming from the edge or that but just to do the direct c
[01:16:42] dn origin approach um i mean it's it wasn't for performance reasons right i mean really like matt kane gets credit here for he came up with the approach mike k
[01:16:55] ane used to work for netlify um worked worked worked on gatsby um so it was his idea um i think i think he was definitely motivated by by what
[01:17:06]  you're talking about um about like going straight from the cdn back to the browser i mean for us i think but i think ultimately it was it was just you know
[01:17:15]  less code to simplicity was the reason right we can do it all from the client it will work on any host um i mean i really believe that like that time between the
[01:17:26]  edge cdn to your browser is so short that like the overhead of not getting the head start on the origin request is like not that big of a deal in reality so
[01:17:38]  um yeah it's just a trade-off between you know slower slower starting um running the the island code of fetching the islands uh to like having a faster largest content
[01:17:50] ful page because your your main content is the main thing that's why the user goes to like this page is they want to see pictures of the of the vacation destination and that
[01:18:03]  sort of thing right exactly and you guys did a test uh it's kind of funny because i was trying to reproduce the test i wanted to do it on stream with with everyone
[01:18:14]  so we could actually like look through the timelines and doing that but then i i i i was i was checking my history here um and and it looked like multi made a
[01:18:23]  few tweaks that make the demo even faster um which involved changing the timeout delays now i understand he made other tweaks to in line the tailwind and stuff but it means that
[01:18:35]  the demos aren't actually um the same speed anymore uh so it's harder for me to show what i wanted to show on this i guess i could pull down their old
[01:18:44]  version i ended up copying their new version so um it's it's fine i i i uh yeah i guess twitter had a field day on this one it's one of those
[01:18:57]  things like like i've done this before myself on a demo where you're tweaking something else and this isn't the important part but because you change the most obvious thing in
[01:19:05]  the demo maybe because you want think it looks better or it's like more realistic um people people yeah i mean i didn't like yeah i hated hated i hated all the
[01:19:18]  i i didn't i didn't love all that stuff i thought like the point was not to say that like server islands are faster than ppr and in every scenario they
[01:19:29]  certainly are not and um it was just to like you can do this in a much simpler fashion and get the benefit of you know being available on every host without needing to do
[01:19:40]  all that stuff so yeah yeah art is fast like they're they're they're they're they're demo is fast right like you you bring it up it's fast um
[01:19:47]  yeah for sure partial pre-rendering for everyone uh i'm trying to find it actually i there was an article um or pretty sure yeah matt wrote actually um and i
[01:20:05]  don't know if you saw saw this one um this was showing how to do this from an edge worker um so to speak the only difference with this approach was this was
[01:20:21]  wasn't combining on the client it was using i think each tml rewriter to combine it on the server which means that i think if i understand what's happening here i
[01:20:36]  don't know it's blocking on the it'd be blocking on the edge function i think in this sense you want the stitching to happen on the client regardless it's easy
[01:20:48]  to have the stitching happen on the edge function it's actually and it's easy if you're doing what you guys are doing to have it happen on the client because essentially you
[01:21:03]  just have like if you're in one location and you're like get me the missing parts that's not too hard to do you can do it from the edge you can do
[01:21:10]  it on the client proxying it through is a little bit more complicated um that then people are gonna do without a framework is what i'm getting at like out of
[01:21:23]  order streaming that we do in solid is technically starting the process on the edge and finishing in the client and same with ppr we stitch in the client but we thread everything together
[01:21:37]  in the edge worker it's like proxying it through it's a little bit more complicated the easiest version of way of doing this is actually wherever you're going to
[01:21:46]  put it together that be the place where you originate the request so to speak um so in that sense yeah i i've never seen seeing this that i was like in a
[01:21:58]  set the server islands approach is is um yeah although yeah i i guess the turkey i mean this doesn't block the initial shell i don't think like you get their initial
[01:22:13]  shell right away but i i don't know how this yeah it's doing out of order i think if you scroll up i think that the other scripts in it right there it
[01:22:22] 's pending scripts it looks like oh yeah yeah it is doing it yeah okay yeah so this yeah that's yeah exactly and this is yeah okay yeah so i would yeah no i
[01:22:30]  was yeah i was mistaken here then yeah so this is this is like a this is the proxy or you need this html rewriter essentially to to do this yeah
[01:22:39]  okay yeah and we thought about doing it that way i mean some people have asked for it uh but yeah just based on the results like this is like this is not the core
[01:22:50]  of astro i don't think like it's a it's a i would say niche feature but it's a feature for like a very specific type of site that can benefit
[01:23:00]  from that is both dynamic and static at the same time so we want to do something that was like maintainable and that the script that we have is like very very small
[01:23:09]  and all it does is replace the html right so it's like it's it's a very nice little enhanced metastro without you know it doesn't have to
[01:23:17]  be a fundamental thing yeah yeah yeah yeah no exactly and there's an interesting benefit here about about about caching right um which was that like the static page you get from
[01:23:34]  the cdn is always the same like like it is interesting though like technically even with ppr the static part that we're kind of pushing through is also always the
[01:23:51]  same but it browse the browser can cache the response of of the astro version i guess is the biggest difference one one thing about this approach is that um it's you
[01:24:07] 're blocking the the html request by streaming it in the html and depending on the browser that can affect paint time right because the browser will browser will say hey
[01:24:20]  there's still there's still stuff coming in i'm gonna wait a little while before i paint um so that's that's a downside you have to think about with with
[01:24:28]  this approach and with ppr um yeah i did go ahead no go ahead what i was gonna say i did i did i had an i did i worked on an outdoor streaming
[01:24:39]  project like five years ago that was based on h h2 push and do you remember h2 push yeah yeah yeah so for those who know h2 push was this way that
[01:24:48]  it when h when htv2 came out um you could you you could set what i think they called them in their frame there's something called a push frame basically you
[01:24:58]  could say uh because um hdb2 is multiplex so you can have multiple um streams happening at the same time so you can start pushing data on a stream while the
[01:25:10]  html is coming basically the browser can receive data and html at the same time um so what that out of order streaming did was it started the stream on
[01:25:19]  the server use acb push to push it and then the client it did a fetch right so it's still so it's kind of a combination of what uh ppr is
[01:25:28]  doing and what we're doing now um where you do get the head start on the on the server uh but you but the the kind of i guess more similar to how
[01:25:40]  we're doing it as far as you're just fetching uh fetching the results yeah yeah it is interesting with hd2 being multiplexing uh in terms of the
[01:25:48]  fact that it can share the same connection for stuff that's like immediately happening as it's loading which is which is something that i i actually experimented with a bunch this week
[01:25:58]  i actually made an example where i took solids hydration scripts and pulled them out of the html document and then fetch like put them in a head the head of the
[01:26:06]  document to try and grab them so it would start initiating right to a stream on the server while it was rendering and then the fetch would grab from that already getting written to
[01:26:16]  readable stream as because i was like trying to figure out how to make the document smaller i don't know if people have been following my work here but um serialization size
[01:26:24]  is kind of like a big pain and when you do islands you can save a lot of uh serialization because you don't need double data because you don't need to hyd
[01:26:33] rate those parts but so far anyone's who's added persistent states with client-side routing has kind of had to add the data back in so i was like trying to figure
[01:26:42]  out like the one that really got me was quick quick doesn't even hydrate practically like you know you can load the page and not do anything and it doesn't need
[01:26:51]  to run any javascript code and it was getting nailed as hard on serialization as everyone else was right like the second i went from mpa to client-side router
[01:26:59]  all the data serialization came back and i was like you know it just tanked it and i was like well can i improve the score by like loading the like he wants
[01:27:09]  it there soon like almost immediately but can i improve the score by not making it part of the like html being sent in i didn't see drastic improvements i mean
[01:27:22]  i i like doing like death tests on my hacker news demo and i did manage to like to go from a 72 to a 78 which is you know something um so i i
[01:27:32] 'm still kind of undecided on the impact that um plus i didn't do it complicated enough i just streamed in the serialization stuff i like but the j
[01:27:42] avascript unlike html it's not going to like start executing the like parts of the javascript while the it hasn't loaded the whole file you know it's
[01:27:51]  like html is amazing in that like it starts parsing and executing parts of the html i don't i don't think like javascript i'm
[01:27:59]  i'm not 100 but i'm almost very fairly certain if you have like a large javascript file that's getting like streamed to you it doesn't start running running
[01:28:08]  it it probably does start parsing it though yeah yeah yeah but probably doesn't like start running it so from that perspective like like i i'd actually need a more complicated solution
[01:28:20]  than what i was working on the other issue with with the html streaming approach of out order is that if you want it with a lot of like little tiny scripts
[01:28:30]  that actually in the older browsers at least that actually is you know can be somewhat of a problem is because those browsers are not that great at like executing you know a bunch of
[01:28:40]  little scripts so that's something to watch out for yeah i i think yeah there's definitely impact that it's just interesting thing for me at least is because ebay's
[01:28:50]  been using this approach for over a decade like i'm not like i i i generally i'm like yeah like it's probably okay um you know they do it that way is
[01:29:00]  that how they do it yeah yeah they pitch scripts okay yeah yeah um so like i but like it was definitely interesting because we we have this spectrum now of these solutions where
[01:29:14]  um so like partial free rendering uh like the the big thing is like this here is basically just out of order streaming with a static source right the i was trying to get people
[01:29:29]  i was trying to ask people what the difference was and they were saying it was because of brucell's special infrastructure that made this communication here way faster that there was
[01:29:42]  a benefit to it over um you know just doing out of order streaming um this one it's very clear to see that this is a different thing right um it has it has
[01:29:53]  very different characteristics um this actually looks a lot like when we built single page apps right like jamstack right you went to the cdn you got your maybe your
[01:30:08]  app shell maybe it was a mostly blank page i can't remember jamstack was statically rendered so yeah you go get your app shell and then there would be holes and
[01:30:17]  then the client would start fetching against an api server and then it'd come back in it looked basically identical to this like if you're just looking at the top
[01:30:27] ological thing right yeah i mean a little bit but you weren't really doing islands back no no exactly the difference is the communication was in javascript whereas server islands communications in
[01:30:40]  html you need almost zero javascript to pull off server islands that's the that's the beauty of it is that this whole communication is happening even from here to
[01:30:49]  here without before you've rendered your javascript framework whereas in the old jamstack approach usually what would happen like not on all the frameworks and stuff but usually what
[01:30:58]  would happen is in the middle between these it'd be like okay let's start fetching javascript let's like there's that second pass for the javascript there
[01:31:06] 's that let's hydrate there's like you know does ppr block on the framework loading it doesn't doesn't i don't think right it's just yeah i mean
[01:31:19]  the just starts upending stuff right right right yeah yeah from the server we can keep on ppr doesn't no no yeah exactly like we can just keep on rendering stuff
[01:31:28]  out and we might not like hydrate it till later um but the like infrastructure makes a difference right aws cdn node cloudflare edge server cell works netl
[01:31:39] ify they're on the same edge reason and this actually makes you know i think my gut is this is why the fancy uh the fancy uh the fancy uh ppr kind
[01:31:53]  of mechanism for for cell because it's almost like it's making up for this like i i can i show you guys something um i you know i make hacker news demos all
[01:32:08]  day long right so i obviously have a hps hacker and solid uh let's see what was it uh hacker news edge netlify yeah right right and there's like
[01:32:21]  a okay yeah time to first bite 28 milliseconds my lcp here uh it's because of the size they gave me two lcps but my original lcp was
[01:32:32]  092 i guess which was this top section and then i finished out at 0.15 okay now i i didn't notice this until this morning i kid you not which
[01:32:42]  is weird for me because i'm usually like doing you know all this profiling stuff to looking at the timelines but then i went in and uh what was it uh just second
[01:32:52]  give me uh i might have to go to github to look at this up again uh solid js solid um uh hacker news so is this the new demo you're
[01:33:13]  just no this this is my demo that i made on stream that everyone has seen me make over and over again uh in different frameworks this is the classic one okay so i
[01:33:22]  have my versell one and then i have versell open you like if you stand up and go get a glass of water you trip over a hacker news demo you just have
[01:33:31]  them laying around everywhere yeah yeah and what was really interesting to me um okay interesting see now it's not going to do it damn it that's that's that's okay apparently
[01:33:43]  i have no no no point that i was going to make this is interesting okay that's unfortunate that's not what i okay well never mind just a second sorry it was
[01:33:56]  i i i was running this all this morning and i was having this terrible terrible luck maybe it was just a time of day let me see if i can find this um
[01:34:09]  uh did you uh i just want to make sure that my network has disabled cache because these numbers don't make sorry those numbers don't make sense to me unless console that's
[01:34:26]  that's okay well never mind what i was going to show i actually i i did this like all this morning on my other computer and i was like i was like what
[01:34:39] 's going on here um and yeah it's not it's not showing what i had seen before um which is which is interesting i think okay i'm not going to worry too
[01:34:52]  much about this then i i i was having a hard time with my hacker news news demos in general um showing consistent uh uh time to first bite um the lcp
[01:35:05]  obviously is to these things are kind of similar but i i was sitting there and i was like yeah this could be interesting because i actually don't know how everything's gonna look
[01:35:14]  then um because i thought i actually saw uh saw a leg you know all my versell edge demos but apparently that was not the case so i'll i'm not worried
[01:35:27]  about that right now um yeah if it's i i kid you not it was doing this like i i just was like i just i was in disbelief i was like this
[01:35:35]  can't be right and i was like sitting there jamming in it and i was like like those numbers make no sense they said the t time to first bite was three
[01:35:45]  milliseconds there's no way that someone do i have a service worker like there's no way that i there's no way that three milliseconds yeah i wonder if oh man that's
[01:35:59]  so three milliseconds for which part time to first bite against the edge yeah like something is something is not right here i i almost want to get to the not that one do
[01:36:15]  you live like right by the cdn like is it it's like it's like on the corner no walk away no no no no no no something something is not something
[01:36:28]  is not right um that way the way that chat is incredible today like matt's just giving away every secret about how cdns work like i think i've learned more
[01:36:39]  about how they're built yeah yeah no definitely uh this is this is this is super interesting stuff i just why can't i yeah sorry i might i should just leave one of
[01:36:50]  these pages open so i can look at the demos uh again because i did this i already looked this up before it's there's just something not quite working which is bug
[01:37:00] ging me um because this doesn't there's no way the time that timing works like that um okay give me a second i want to go back here and take a look because
[01:37:14]  the one thing was that cloudflare is actually really fast i noticed that right from the very beginning um this is not okay okay this seems like normal more normal numbers what
[01:37:35]  do you got yeah this seems like more normal numbers uh yeah yeah okay yeah 100 100 milliseconds yeah yes and it's time about 40 milliseconds to oh for spite yeah yeah yeah
[01:37:52]  so okay i guess these are actually pretty comparable uh where where i am here uh what was the other one solid i can use edge yeah i was just i mean this is
[01:38:09]  the thing that i was noticing is on average cloudflare and netlify edge with my demos were were were faster i don't know why it was just like it was
[01:38:21]  just you could kind of see lcp 129 and 130 and 460 400 that one's a bad 140 340 and again it could be just my location where
[01:38:43]  i'm sitting here right that i was getting better results on both cloudflare and netlify edge pretty regularly this morning and i was just like how much am i
[01:38:59]  weighing this stuff like in the in the in the in the wrong way like because i i one look i'm not gonna lie the first thing i did when i saw the server
[01:39:08]  islands demo was to do what i always do right i went i went on i went on the like i went on both demos i looked at them both and i was like
[01:39:21]  i i went i was like here and then i went to performance and then i went to settings and i went network throttle slow 3g and i and i did the thing right
[01:39:34]  and you can even visually see this it takes longer to load right obviously because of slower network and then yeah where is it let me try it again the islands or yeah the
[01:39:49]  images are brutal but it wasn't the images i was talking about the you see like the recommended trip delay kind of coming in and then i went to i went to next
[01:40:00]  and i did the same thing right and and i refresh and obviously takes a while for the page to come in but if you notice the stories were there right away and the
[01:40:15]  reason there'll be extra latency on the round trips right the same problem we had with spas right if your main content that's off the screen or like it's this like
[01:40:24]  little thing comes in slower no one really cares that much but the big biggest trade-off that i saw was like i immediately went to the full length because in my head i
[01:40:33]  was thinking lcp is prime right um in terms of like dynamic content and it was one of those things where i was like wow like uh um this this is actually
[01:40:46]  considerable right i i think i told you in the chat i was looking at and i was like uh the the astro stuff always came in faster no matter how much i slowed
[01:40:56]  down the network in these simulations but in terms of like the initial load but afterwards the difference was up to like two x almost two almost three x multiplier difference because of the
[01:41:09]  waterfall right yeah and yeah and fred's response which was a good one it was like yeah we we should have tools that if people try and use server dynamic on what would
[01:41:18]  be their uh lcp content they're using it wrong essentially like that's not the point of this technology it's it's for it's for showing that initial content and
[01:41:28]  then we we can actually i would say there we can make that a little bit faster because uh currently they're all post requests and they're post requests because you know technically
[01:41:38]  you could pass props through server islands and those props could be very large so we can we can't do a get request because the url there's a there's a limit
[01:41:46]  to how long urls can be however i think in practice most server islands are not going to have like all that many props we can actually use a get request but if
[01:41:56]  we do a get request now we can add a preload so the browser will start fetching it much earlier yeah yeah but yes it's going to be slower because we don
[01:42:04] 't we're not doing the head start right exactly yeah if you look at the uh if you do like the film strip view you can see that as well you can see that
[01:42:14]  the ppr finishes finishes first but the the interesting thing was when i yeah when i went here to the performance tab in the slow 3g and again unfortunately we can't
[01:42:25]  really compare it because of the uh they're using different delays now um yeah i think it's all in now you could see that it's interesting this stuff streaming is never really
[01:42:44]  good in these tools but you see the page loading and it starts loading stuff before it's done the html and then the javascript comes in and then is
[01:42:53]  this even a good run it's hard to tell from this this is not even a particularly good one what we got first paint about 2.27 seconds and then lcp
[01:43:02]  comes in at about 5.7 right if i take the astro demo and do the same exercise the same exercise right and you're going to see a a very different
[01:43:14]  looking timeline um let me get there but you're probably 10 seconds okay you're going to see the page be much shorter or not much but a bit shorter here and the stuff
[01:43:27]  and then the round trip stuff coming back so but the the interesting part for me that was always that okay lcp um so first paint is here and maybe i should
[01:43:41]  run this a couple times uh what's first paint yeah okay yeah i'm gonna run this one more time this is not what i saw earlier let me run it more time sometimes
[01:43:51]  like these things remember the delays the delays are not the same anymore too so you're you were comparing the right right exactly finish because it's it's not delayed as much
[01:44:02]  yeah yeah exactly the delays not being the same might impact this now yeah because what i saw previously was that the first paint was basically at the exact same time around 2 30 or
[01:44:15]  something but then the lcp you can still see it here lcp for astro is 4.99 and the lcp for for for for uh next
[01:44:26]  is 5.73 which means so why is that why is that exactly why is that because the page roughly still kind of comes in the main core part of the page if you
[01:44:38]  look at the timeline still comes in like like in in nexus case they're done everything by 2.5 but i imagine this is what we want to estimate it's
[01:44:52]  pretty close to maybe 2.1 2.1 right there sorry go ahead i just said like this is like pretty close to like when it finishes getting the shell the page is
[01:45:03]  about 2.1 probably about two maybe a little bit more maybe 2.2 and if you go to the astro version you finish your request yeah 2.2 so
[01:45:12]  the the html of the initial chunk and this thing come roughly maybe you know 100 milliseconds off each other at most but lcp for the astro version is always
[01:45:24]  over like half a second faster which is significant obviously that's to me it's it's it's those blocking scripts it's the html blocking it's not the
[01:45:35]  overhead of running the edge i don't think but it is it is the the the the streaming right right yeah yeah and and i mean for years for years browsers told us don
[01:45:47] 't block html right like that's why they added defer to script tags and they added a async to script tags and type module is defer you know by default
[01:45:58]  so like they had all these things saying don't block html so i think we're getting the benefit of of doing it that way yeah and to be fair i don
[01:46:08] 't actually know uh what what the cause is right like this is this i was going to ask like how what's the difference between their lcp and like when it
[01:46:20] 's all the way done is it pretty much the same um yes i i can't see that from this chart though right because like let me let me let me take a quick
[01:46:32]  look here let's see if we can see it because it's it's hard to it's hard to tell because like yeah there's no i'm trying to think we can
[01:46:44]  look at the animation frame timing but i i think like the difference between this yeah maybe about two seconds still it's like there's like still a delay like it registers the
[01:47:05]  load event way back here i don't know see like but the load event triggers on different things like here it's doing the load event at the time the lcp
[01:47:12]  comes in so it's like it's hard to say uh oh it's doing the load event at the time the lcp comes in is that what you said that makes
[01:47:20]  sense to me uh actually you know for this one i'm sorry for astro well no no that makes sense too because the the load event is when the initial html
[01:47:29]  finishes right where well i guess it's it's when everything finishes it the the javascript is actually what's pushing off the load event for the next one uh exactly
[01:47:40]  yes which yes which is interesting as i said because like this is this has been kind of the the the challenge to to look at this because like i i don't know when
[01:47:53]  it renders in you can visibly see when you just sit on the page here and refresh if i just do this you can actually you can kind of see that when it
[01:48:01]  comes in it's like there it's actually the images taking the longest under this slow network condition um whereas like if you look at the this kind of model and you do
[01:48:12]  the refresh um and yeah you can see the recommended scripts kind of take a bit longer uh you know like it like it's a a bit of a delay but yeah i
[01:48:26]  mean it doesn't i because of this was below the fold like you couldn't even tell right and you have the original longer delays too right so like it's kind of a
[01:48:37]  coin toss it just the interesting thing for for me was yeah it's it's hard it's very hard to tell the difference i actually have the um this is the streaming
[01:48:48]  version that i put together right um and this is not using islands not using ppr not using using fully isomorphic javascript like like this there's no savings on
[01:49:02]  this in any case right um so yeah i mean the streaming takes about the same length as as next right where it's like there and you but you same idea where around
[01:49:16]  the two second mark the the page should be finished but if you look at here the uh lcp is reporting at seven seconds for some reason right but my gut is if
[01:49:29]  we look at this still it'll it'll all show up at the same time yeah so it's like it's hard to tell from from the metrics uh of like these
[01:49:40]  kind of tools right like what's another tool we can look at uh page speed insights um is another fun one uh we can take this one page speed insights we can take
[01:49:56]  this one these are not the same anymore though like i think yeah yeah yeah but one thing you have to your benefit or not to your benefit but like i don't they only
[01:50:09]  care about lcp on page speed insights like generally speaking uh them not being the same is a little bit unfortunate um i will admit uh uh yeah because sorry because one
[01:50:28]  of the yeah i'm just gonna for fun just do this i mean assuming assuming we're right that like the the load event is what is what delays the lcp
[01:50:39]  then you're kind of in the situation where the the lower the delays the better your lcp is going to be but if your delays are not that are not that high
[01:50:51]  anyways like are you getting like a huge benefit from it in the first place yeah yeah it's this is this isn't it yeah this is yeah i'm not this is
[01:51:05]  the fun part about running these all the time because you never know what kind of results you're going to get um i'm again seeing different results than i saw when i ran
[01:51:12]  earlier repeatedly earlier so it's like it but yeah i mean this the astro results are exactly what i saw before um which i was seeing larger lcps actually on all
[01:51:27]  all of the demos that i was putting out here when i was running this is mobile yeah this is mobile what's what's the what's the what's the device they
[01:51:37]  use does it say it should be like uh was it is this they should say it's the same one that they always use oh there it is emulated moto g with slow
[01:51:50]  4g throttling right yeah yeah what's the what's the lcp 1.2 yeah 1.2 that's that's pretty good that's pretty good
[01:52:04]  yeah yeah let me just run it one more time because i i was definitely not getting i was getting like one point i was getting much larger lcps this morning when i
[01:52:18]  was testing it was interesting though and this is a different one too actually while i'm at it let's just and do do do do do i want to do https colon
[01:52:35]  slash uh see if there you have it that's did even better that's that's very impressive on the timeline yeah yeah the variation makes it kind of hard to compare a
[01:53:04]  lot of times yeah but this is this is this is actually this is this is good though because the one the biggest difference actually is i'm seeing improved scores on the on the
[01:53:14]  ppr that i did not see when i was testing testing earlier because if you if you look at the uh because this isn't this isn't this is just testing the
[01:53:25]  lc like mostly testing the lcp content it cares about the initial load right yeah um and uh what do we got here it's so funny because like the variations change
[01:53:40]  every time oh apparently there's unused javascript on this one apparently but like just to kind of get an idea the total size of network workload was 166 kiloby
[01:53:49] te root document took 20 milliseconds to come back which is impressive um large contentful paint at 900 milliseconds for the ppr version um took 80 milliseconds to come back and 207
[01:54:05]  kilobytes interesting side note is that the javascript script execution time on this is 0.1 seconds and 0.9 seconds of main thread work which one is
[01:54:22]  it is that ppr is that us that's us that's you yeah and then uh the ppr version had half a second of javascript execution in the second domain
[01:54:34]  thread work um yeah that's because i mean actually the ours has uh has react as well it's it's yeah for the client component so yeah yeah because um yeah yeah
[01:54:47]  and actually that's funny my my solid version has 0.2 execution time and this is fully hydrated not using islands or rscs or something and main thread work is 0
[01:54:56] .8 um yeah that's pretty high actually i would expect ours to be lower the way yeah this is yours i'm sorry yeah yeah yeah yeah but this is actually this is
[01:55:07]  actually lower than the astro react demo um yeah for main thread work which is which is surprising more javascript execution which i'm not surprised but yeah the longest content
[01:55:19] ful largest contentful paint takes longer in this example so this is a good yeah root but it's interesting yeah the root document took 60 milliseconds on the netlify version
[01:55:30]  version and it took 150 milliseconds on the versell version of the same app um so out of the all the demos the the astro got the root of the document in 20
[01:55:44]  milliseconds the netlify streaming got it in 60 seconds the netlif or the versell ppr got in 80 seconds and the versell streaming got it in 150
[01:55:58]  milliseconds sorry yeah sorry milliseconds all of them yeah so it's yeah it's interesting i i'm still i i'm still curious on on the delay right because this this is
[01:56:12]  the interesting question starts becoming like what causes like when i was doing this test earlier i was seeing 1.8 or 1.9 consistently on largest contentful paint out of p
[01:56:25] pr um but when i'm looking here we've run it twice now and we're getting 1.3 so higher blocking time 80 milliseconds versus uh you know i guess ast
[01:56:35] ros one is i think pretty low say zero there you go versus 20 in the streaming one oh and zero on a different run of the streaming one so i don't know pretty
[01:56:46]  open for um in being inconclusive i i do wonder if this lcp thing is repeatable or if there's like a like yeah this is the this i
[01:57:00]  was looking for proof that the ppr aspect um in how much it impacted a large contentful paint this suggests that it does is basically because i was like what's the difference
[01:57:15]  between ppr and out of order streaming and i think it's so funny though because when you look at the timing timelines they don't look very different in in fact it
[01:57:30]  looks like all the if i look at the snapshot here it looks like the con like by the time it renders the first screen like the the the are those just placeholders
[01:57:42]  it almost looks like the reviews or or no i guess that's just the product description yeah yeah that's just the product description so yeah by the time it renders the
[01:57:53]  first thing it's hard to tell basically because this lcp stuff is off the screen you can't even you can't even tell anyways which i think is kind of the
[01:58:02]  point yeah yeah it's like is what is the what is the most impactful content like what is you as you're going to the site for like that's what you that
[01:58:14] 's what you need your lcp to to be about yeah you need to run it like 10 times yeah i know i know i know yeah yeah yeah yeah it was it
[01:58:29]  was the the question obviously is is i i guess just stepping back from the pure performance thing it's clear just looking at the even the timeline here like the server islands version
[01:58:41]  it's like there's no white at the beginning right if you look at the ppr version you look at the the my my two streaming versions there's white at the beginning
[01:58:51]  so right off the bat in terms of accomplishing the goal this smashes it like um well i think yeah that's the that part makes me think that that that that
[01:59:02]  that would be the edge overhead i would think right yeah yes otherwise the browser should start painting the html right away yeah yeah yeah i i think i think it's the
[01:59:18]  interesting thing is the edge overhead wasn't the only thing impacting these javascript frameworks as we could see here that in my uh in my demo here uh the the streaming
[01:59:33]  one the lcp is large for some reason even though the content arrives in like the root arrives in 60 milliseconds like the the difference obviously astro gets it like right
[01:59:50]  away 20 milliseconds but the streaming demos yeah so 80 for them 150 you know what i mean like the paint still delayed so i think there's there's more probably to kind of
[02:00:02]  investigate on those sides but yeah i mean some i think there's a comment about uh about the effort taken to implement this stuff and i think it is definitely interesting that in
[02:00:16]  terms of astro you just go server defer and literally are and and uh once you put that on there you can just deploy your astro site anywhere and it pretty much is
[02:00:31]  going to work the same way right yeah i mean you want to have somewhere that has a good cdn and whatnot but yes right yeah yeah definitely um which is interesting
[02:00:42]  uh yeah definitely the cdn thing does actually make a difference here um in terms of that the the very fast getting that 20 millisecond return on this server island thing um
[02:00:52]  whereas yeah i guess it's the streaming demo was also fairly easy for me to do because obviously solid support is streaming so i literally can just go write my app one way
[02:01:01]  and just deploy it somewhere um i can't leverage ppr anywhere except for for cell i'd need to to come up with i i guess what i was i'm wondering i
[02:01:15] 'm still trying to decide with all of this if ppr matters which is which is basically versus versus like basically yeah when you have the full spectrum it feels like if you
[02:01:32]  care about initial load the the approach that after islands is doing is almost a no-brainer like i'm i'm ready to stamp that and be like new jamstack
[02:01:41]  like it's just like like like like wow no no but i mean it's like it's like jamstack again it's just like it's it's this kind of
[02:01:51]  thing you don't care even if those little bits take three times longer when you're browsing from a a moto uh moto four or whatever um over in dubai or whatever
[02:02:03]  like you yeah it it it doesn't matter actually that much for the core content is what you matters here even if it takes like three times longer than the whole thing and if
[02:02:15]  you're yeah i mean it's it's yeah the simplicity just makes this really compelling and then on the other hand if you really care about like sure you could leverage p
[02:02:29] pr if you if you have the ability to but if you really care about like your application like your main content isn't static it's dynamic then like i i wonder you know
[02:02:40]  like there's a lot of constraints that come with running ppr i i know i'm curious to see this these results are not the same results i got this morning so
[02:02:51]  i have to kind of think about you know my conclusions here a bit more but it's they're all really fast and it just comes yeah yeah i'm like i'm like
[02:02:59]  complaining about it and whining it and meanwhile you're looking at them and they all scored a hundred yeah yeah yeah i mean i think i think i think their conclusion like circ
[02:03:10] ling going back to what you're saying before was that like the edge failed and so it's really if you have that perspective then edge edges for like frameworks to write code
[02:03:24]  it's not for like uh applications to to run code you know what i mean so that's i mean that's i don't know if i don't know if that
[02:03:32] 's like yeah go ahead yeah that's it yeah i don't know if that's the conclusion i get to from here though because the edge's ability to be dynamic and speed
[02:03:43]  up like yeah i'm not i'm not like if you are to believe that conclusion you have two options essentially you have to come up with something much more complicated like they have
[02:03:56]  with ppr or you just kind of go screw it but kind of like astro islands is a bit like who cares right yeah you know and yeah i i obviously on
[02:04:07]  the astro island side i server islands i can say like clearly i get that but i don't know if the if the other conclusion like if if my only goal is to
[02:04:19]  do what astro is doing then i could come to that conclusion but then i should realize that astro's version just does it better so i should just do it you
[02:04:29]  know what i mean if if if i'm not trying to have that goal i don't think i'm not sure that the ppr advantage actually makes sense that that that's
[02:04:39]  what i'm kind of sitting around with okay right that's the thing it was like when i was crying right yeah i mean i'm gonna i'm gonna have to i
[02:04:48] 'm gonna have to like kind of sift through this more as i said because um it's it's it's interesting because like obviously like when i was doing my streaming demo
[02:04:58]  i wasn't trying to do any other types of optimizations i literally just was like i'm not even going to try to islands or any you know kind of thing i literally
[02:05:05]  just was like all the javascript go you know so yeah it's interesting anyways let's let's let's let's pull back out here i don't need let
[02:05:16] 's let's talk a little bit more generally i i believe it's a good time to ask matt do any questions you might have for him um before he heads up for the
[02:05:27]  day yeah where do i look look in the comments yeah let's look in the comments yeah okay what do we got signals and astro win i don't know i mean
[02:05:42]  i really i mean that's i have thought about it you know it's like if astro was ever to venture into client-side rendering then very likely but yeah not not
[02:05:56]  soon i would say yeah it's one of those interesting things because like yeah i yeah oh i i know a dev's asking though because he's not thinking i don't
[02:06:07]  think he's thinking client-side he's thinking about like yeah i imagine he's thinking about some pretty crazy stuff um yeah streaming ruins those types of ideas on the server yeah
[02:06:23]  yeah exactly yes having the signals like talking to the brendan yeah that's yeah so i mean yeah i mean that whole category is interesting because like do you guys i
[02:06:35]  guess you kind of leave it open but like are there like blessed web socket type approaches or whatnot like no um there is one cool signal cool signal thing we do have uh
[02:06:46]  with preact so if you render preact component you know using their signals implementation uh the value is serialized um with the island and then like rehydrated so you can
[02:07:04]  actually have shared signals between preact islands uh using their signal implementation so that's pretty cool because you know cross island communication is something that's like you know a little manual
[02:07:16]  in astro so that gives you a very smooth way to do it so you yeah i could you could see a world where we made that generic to all frameworks but it's
[02:07:26]  very hard obviously like that's not native to react and stuff like that so i don't know i don't know i don't know how or with if we would ever
[02:07:32]  do that kind of thing but i do think that preacting is pretty cool because it yeah it solves it solves that pretty nicely for them so when you said like they serialized
[02:07:44]  the signal as a prop essentially if i'm understanding so that like future updates white like yeah i can't remember exactly how it works but there's i i might be wrong
[02:07:57]  here but this is how i imagine it working for each signal there's like an id for that signal right right yeah and when you render the preact component it saves that that
[02:08:09]  signal id like on uh on a data attribute right and then when it goes to rehydrate it's like all right this is this is signal one i'm going to
[02:08:19]  hydrate the value and then when another island hydrates signal one preact knows that this is the same signal and it just gives them the same signal you know what i mean
[02:08:29]  does that make sense they actually have the same they have the same instance of the signal so if they start changing the value it's gonna you know reflect over on the other side
[02:08:38]  interesting okay yeah it must be yeah the serialization signal because like in my head i was like i don't i was trying to figure out what that did differently than just
[02:08:47]  like literally using a signal in two places like you know like the signal pattern like the way you guys like use nano storage right you just like import a file from two locations put
[02:08:57]  a signal in it it will work yeah that's so no it is no yeah you don't you don't have to write it in a global sort of way like that right
[02:09:07]  interesting okay that's cool yeah i hadn't really thought about that and another cool one is i did the quick astro integration um i understand it's probably not using ast
[02:09:19] ro to do a whole lot but it keeps quick's ability to to wake up like hydrate on signals so like if you write one it'll like wake up part of the
[02:09:29]  page like like that yeah depends on it but yeah yeah it is pretty cool like yeah it kind of it does its own thing like it basically just uses astro as a
[02:09:39]  shell but it's pretty cool yeah okay um anyway uh let's see what do we got here uh consider islands take advantage of speculation rules you could prefetch all islands perhaps
[02:09:51]  uh that's interesting yeah so i i i don't i mean i know what speculation rules are like speculation rules are a way to like you put like a json thing in
[02:10:02]  the script and the browser parses that and will start fetching stuff so it's kind of like a preload right i think um i would probably just use preload
[02:10:13]  you do preload as fetch i don't know if speculation rules would be any better yeah uh in that regard i'm not sure yeah yeah i think yeah i i imagine like
[02:10:24]  at the i mean i'm not sure the person asking the question might know better but i you'd think like if you're if you're going to the cdn you
[02:10:31] 're just grabbing the islands as soon as you get the beginning of that html that's like the the soonest you can you know basically start grabbing the next the
[02:10:40]  next stuff um because the other one i was thinking about was uh the like the the 103 headers like the hints but again probably doesn't matter much because that's great for like
[02:10:52]  streaming right like so like you could send the hints out before the content but you're returning the static stuff like immediately anyway so like yeah yeah yeah the the browser's really
[02:11:05]  interesting how it like does that like it has something called a uh uh what's it called a reload scanner or something like before the parser actually starts going it does kind of
[02:11:15]  like a like a very generic parse of it to start to figure out what it can start fetching that's how it's able to fetch like css and stuff quicker but
[02:11:22]  it can actually go further than that like it can inside of a fetch call if you have like a static string uh which islands which uh surveillance do it can in the i don
[02:11:32] 't know if i don't know if it does but it can in theory start fetching those things too if it sees something that looks like a url it might start
[02:11:40]  fetching it yeah um someone asked a pretty good question here sorry i'm taking over your stream go go for it this is the best part will server island support streaming json
[02:11:50]  from the server instead of initiating the fetching the client so this is this is like where there is is like a little bit of overlap between a server island and a
[02:11:59]  client component because you can do a lot of things you do with server islands you can do a lot of things you do with server islands by just doing a client component that
[02:12:06] 's how everybody did it before if they wanted to have like a you know an ssg app you know it's the jam stack right you can do the jam stack thing
[02:12:14]  so there's a lot of overlap there but um the difference is is that you know the server islands are have this this much script whereas a client component has to fetch you know
[02:12:25]  you have to go back to the cdn to get the the the framework javascript and then run it and stuff so um yeah i don't think you would
[02:12:34]  you would do that i guess i would say it's really for streaming hdmo not streaming hdmo but for for island hdmo interesting sorry there's a comment
[02:12:44]  here about the uh speculation rules hydrates before you navigate speculation will render all just oh so i think yeah good yeah i mean i i i i don't know i i i
[02:12:57]  was just gonna ask like before like how does it i think i think what he's saying is that so you're on you're on page one and you can have you know
[02:13:09]  the same way you can have pre-fetch pre-fetch rules to pre-fetch the next page you could know that if the user navigates to this next
[02:13:17]  page they're going to need this particular island and so you could have you could you could it could start pre-fetching that before it actually does the page but i
[02:13:25] 'm not sure like oh is it like a manifest of not just the current page but like all the pages okay okay yeah i get what i don't know if that's
[02:13:34]  the intent of it but it i guess it can be used that way although if you just do a pre-fetch it's going to just like if you use pre
[02:13:43] -fetch does it start it's not going to start executing the scripts and stuff but if we did have pre-loaded pre-load links i think even pre-
[02:13:52] fetch would would would aid would aid this a little bit yeah oh i i see here benton was actually asking as well he was i think he was wondering if you would
[02:14:01]  ever like astro support doing stuff from do you mean like from do you mean like ppr basically like move the initiating the fetch on the server or on the edge
[02:14:12]  like i'm just reading the rest of the like yeah such a lesson yeah um yes i don't i don't know if we would ever try to do the ppr away
[02:14:25]  i don't think the benefit outweighs the maintenance okay yeah yeah i i think i think like there's a very clear win on the approach that that's taken here
[02:14:42]  that kind of understood it's i wonder i i do want like i guess we'll have to see how the front-end frameworks develop like the like the remixes and and
[02:14:56]  that develop but like like if your app yeah it's it's really in that middle zone because for a lot of tools out-of-order streaming will be fine i
[02:15:09]  think without both out-of-order streaming and the surveillance approach don't incur the need for this extra infrastructure so like you have to basically be in the spot right in
[02:15:22]  the middle where you where you want this characteristic to invite the rest of this complexity basically like you you want to have something that is almost as fast as server islands um for that
[02:15:39]  initial chunk yeah but also like cares enough about stuff that happens afterwards like you want something where your main content and your secondary content are like almost just as important i guess yeah
[02:15:57]  yeah yeah so yeah yeah um yeah it's interesting yeah i'm not sure i it is it is like i am seeing like the value i keep on running in the background
[02:16:11]  the lighthouse off page speed stuff and it's been relatively consistent my the consistent thing is that the ppr is is is getting better lcps than my uh my demo i
[02:16:22]  made using no ppr and that consistently netlify's edge is outperforming vercell's edge that's about the only two pieces of consistent except for obviously ppr
[02:16:33]  for percell is faster so it's like the and obviously astro is faster than them all so those are those are the things that are consistent things aren't actually varying all
[02:16:43]  that much so yeah i don't know as i said this is definitely broadened what the way that i've been thinking about stuff which is really valuable um and something that
[02:16:54]  i probably have to ponder on a bit a lot more anyways matthew um i think we're i think we're good on the questions for now um is there anything
[02:17:03]  else you want to say before you head off um no i mean keep in mind if anybody's watching this and wants to try several islands please do it is it is experimental uh
[02:17:15]  probably don't use it in production yet unless it's something that's not super important uh there there are bugs and whatnot so uh just be careful but otherwise check it out
[02:17:24]  and we got a new release coming up next week uh that you should check out as well awesome awesome yeah um very exciting stuff uh new release next week for server islands or just
[02:17:36]  astro in general there will be there'll be some surrounding improvements likely um i i added the that it's going to start encrypt i don't know if we're
[02:17:46]  gonna but we don't know for sure if we're gonna have this in but i've been thinking about encrypting the props um people might pass secrets through server islands not
[02:17:56]  realizing that it actually goes in the client and you don't want that stuff exposed so yeah i'm pretty sure ppr encrypts does encryption as well so we might be doing
[02:18:05]  that but yeah we have we have other features coming um like for for content collections it um it automatically generates a uh a schema for like your your json you ever use
[02:18:18]  i don't know if you know but in vs code you can in a json file you can pass a schema for that json file so you get like autocomplete
[02:18:25]  and stuff like that so we we auto generate generate one of those for you and that's coming up next week that sounds cool yeah i haven't i haven't actually checked
[02:18:34]  that out all right well um we'll let matthew go now and the stream's gonna continue i actually gonna do i want to show a few other of my experiments that
[02:18:41]  i did this week i did some more performance tests and actually there's gonna be a little bit more astro in there too because i i used the astro solid island implementation
[02:18:50]  as my baseline so to know what performance looks like and then i mean that's been a lot of my work recently actually uh is i use astro as like my vanilla
[02:19:00]  baseline for a lot of the ssr stuff even the like cock i did a react summit because it is really trying to bridge this gap astro is like my norm or
[02:19:11]  like what we can accomplish but i want to accomplish other stuff and i need to see if it's possible to accomplish the other stuff and keep keep astro's characteristics that's
[02:19:19]  kind of like how i've been approaching things so anyways it's been great to have you again um yeah probably have you on again you know again another six months or so so
[02:19:27]  i'm very excited to see what else you've cooked up by that time so very awesome all right yep thanks thanks for having me thanks everybody great chat yeah that's pretty
[02:19:39]  awesome man i i've been definitely i i i don't know if you can tell like this this whole thing has definitely been shaking my perspective here a bit because it starts
[02:19:55]  with understanding how for like you know that left to right diagram like the spectrum talk about websites like going from like content sites all the way over to like you know figma or
[02:20:10]  whatever like i always knew that astro made sense for the the whole left side and honestly right into the middle into e-commerce um but i feel like i understand better
[02:20:24]  now like the difference between say an auction site and a fixed storefront like characteristically when you think in terms of not just interactivity but in dynamic versus static so like
[02:20:40]  this is this is this shifts the like this rotates the like the space because i'm always like looking at this as kind of like multi-dimensional space and astro is kind
[02:20:53]  of coming in at this angle that now makes me want to rotate things a little bit and i think that this has huge implications on rscs and my thinking about what
[02:21:08]  the uh unified approach or model is because obviously things like islands things like rscs like partial hydration make a ton of sense when you want to reduce the javascript
[02:21:31]  and being able to communicate in html or markup you know i'm gonna put rcs in this bucket um do do you know alleviate this javascript concern but
[02:21:44]  on the on the same side like um i'm also not sure that rscs did anything that changed the results of like the benchmarking or this demo like ppr
[02:22:07]  is possible not because of rcs but because of suspense essentially it's just streaming right so like yeah it's it's it's it's kind of it's it's
[02:22:26]  it's kind of interesting just like when you try and put this all back together and what the implications are because if my goal now was to basically build any site where the l
[02:22:43] cp was pre-renderable i'd or mostly pre-renderable i'd just pick up astro i don't really see much point of doing any of the
[02:22:55]  other stuff i mean i've always been a big fan of you know um promoting i'm pushing people to use astro when they ask you know i like what type of site
[02:23:06]  you're building but it's like it's also the area that i never really contend with i usually i'm on the dynamic side like apps and stuff but it's
[02:23:14]  just like it's questioning it's making me question what the gap like filling the gap looks like because like right now the that middle zone which i i think is basically only
[02:23:32]  rscs really live in looks like it looks challenging because it's basically like both sides have ganged up on it and and made the middle look like the worst possible options
[02:23:46]  you know i mean like it's easy when everything's flowing one direction right like when you're saying like you know we're gonna add we're gonna make our app frameworks
[02:23:57]  better for websites but when the website side comes back and goes like pushes back in a real way and i know some people consider htmx that but yeah i don't
[02:24:10]  know maybe this is just the htmx argument again it's just like it it makes a considerable impact on like how awkward the compromises in that middle space look
[02:24:25]  like even the whole like mutation models and stuff like if the left if if the if the ability of these tools that cater primary to the left side have actually expanded significantly past their
[02:24:45]  initial bounds you know like if you view it as a spectrum and like you know they sit in different places if the left side is actually pushed over far enough to the right
[02:24:54]  the right side it makes the right side look silly a little bit and that's just that's just the nature the right side of these things say server climate cannot be automated
[02:25:13]  with the same type of server arms or can you i'm you can definitely automate server islands server islands are way easier because okay and and in this react has the right kind
[02:25:31]  of thinking perhaps i was thinking that the boundaries might like you know i said that like statics on the outside then server and then interactive like there's the three levels like static
[02:25:41]  dynamic interactive one two three but what's the difference between well actually maybe not no this is this is fair i was thinking that this would be easy because in a sense mechan
[02:25:59] ically all you have to do is identify that this data is available because like it doesn't need to like in react you suspense right but you don't need to stop the first
[02:26:10]  suspense boundary like the top most suspense boundary and say everything outside of that aesthetic you can render that suspense boundary if the data is available and then it's the inner suspense boundary
[02:26:22]  so like from that perspective if you authored your app in such a way that you had suspense boundaries or like places where you care about async placeholders and then you had
[02:26:33]  async data loading and then depending on what data was available cacheable that could split dynamic from static for you automatically in theory but i think the problem is and maybe this
[02:26:46]  is why ppr is taking a while from next side i'm not 100 sure but i think the problem is mutation kind of story right like you know how my biggest gripe
[02:26:56]  with server components is mutation like it's very awkward how everything gets pulled back in again you know like you need these server caches otherwise we're re-rendering ref
[02:27:05] etching repulling everything where client side isn't hyper granular you don't need to have that problem you need to think about your app in terms of rate of change and
[02:27:14]  i don't know if compiler can detect that because it's not enough to say stuff's available i mean maybe that that's where the decision happens when you decide what's
[02:27:26]  cacheable or what's available from a data perspective that can drive the ui to automate where the split is but like i still think understanding the characteristics of rate of change is
[02:27:39]  something that the developer would do i mean we can get into some kind of like gen like some kind of like ai or something that can like determine like okay this changes often let
[02:27:51] 's pre-render it this changes less often you know and do a cost analysis i mean another interesting thought about it is handle this the isr isg way right but
[02:28:00]  where essentially if something's not available you know render it and start like just caching these partials you know like like like hyper caching essentially like every little piece is
[02:28:18]  cacheable and then like you stitch them together you know it's not just one level of ppr but it's like it's just a caching it's just a like
[02:28:30]  caching stitching solution i i've i paused the guys over per cell we're thinking that way with how extensive their cache api was that they were thinking like but the
[02:28:41]  challenge about that obviously is like how do you know which suspense boundaries you need to fetch dynamically or statically at the time right like is there there's both the edge where you
[02:28:55] 're like making the request and figuring out like what i want to ask for and then there's the server who has or doesn't have the data so like the combinatorics
[02:29:04]  here would probably get prohibitive i don't know it's it's interesting yeah i mean obviously that but you i mean people people are looking i think for some kind of
[02:29:26]  unified story here like they want to be able to choose one tool right because i do have concerns on the other side i think a lot of people are going to go out now
[02:29:36]  and be like okay i can use astro to build my apps and um kind of like if it's like the situation where you have like you know the benefit from ast
[02:29:50] ro and then you just like throw in a single page app on a page like sure you can do that but like then you're not actually leveraging the good parts of app
[02:29:58]  building so like i i sit on one side that the left side you know like we're you know the more you know content static stuff lives always as it gets further to the
[02:30:12]  right it always make embarrasses the right side but the the the kind of flip of that is um if generally speaking if there was one who is going to do a weak
[02:30:29]  impression of the other the right side is always more capable of doing it um okay so if you define data cache ability have suspense and depends graph you could automate server islands yeah
[02:30:50]  probably yeah i think that's a fair answer i just server islands ppr this whole category is a caching strategy the first question is you have to decide are you communicating
[02:31:11]  in js or html in the same way that we're kind of like full circle here when i'm talking i'm like this is just a spa again except you
[02:31:21] 're communicating html it makes it makes a difference but i just it's it's it's tricky right because i mean we already know the trickiness of communicating ht
[02:31:37] ml when it comes to like client side routing right and persistent state and state tearing i'm i'm probably gonna need to spend obviously more time thinking into this but i am
[02:31:54]  definitely impressed with what astro has put together with server islands feels like like this is the final piece of that maybe not the final but this is the completing piece of that
[02:32:05]  story mpa basis view transition apis cacheable shells the all of those technologies have gaps from an apps perspective i would say ones that are very nasty to deal with but
[02:32:26]  from a site perspective this is the best version of this that we've had to date by far um like it's it's just you can be if you if your mindset
[02:32:42]  is like i have a multi-page app i'm an mpa so you're not really sharing state and you know that most of your content is statically rendered right and
[02:32:53]  we're talking about a ton of sites like this you can basically effortlessly make a page that um or make a site that you can navigate around with client-side routing
[02:33:08]  essentially like not go back not do the full thing so it looks feel smooth incredibly fast and handle you know the interactive bits for you it's like it's like a no-
[02:33:21] brainer right i think like like when you look at a screen like this and you see sorry where was it like you you see the lcp here like essentially the
[02:33:33]  only thing not in the lcp is out here you start like thinking about how expensive all this stuff is in order to accomplish something that seems like fairly simple like the biggest
[02:33:46]  problem with this astro demo is that it uses react like i i think i like how how big is the astro demo let me share my screen again i think i
[02:34:02]  like how big is it so i think i'm going to share my screen again and i'm going to share my screen so you know we saw that there was overhead and and
[02:34:05]  even even uh uh uh matthew was like this seems a little bit high right i think it is high like i think if we go to the network and we think we
[02:34:12]  look at the javascript and we load the page you know actually let's do this from uh incognito so we're not getting like my extension code stuff coming in
[02:34:21]  if i if i load the page here we're going to share my screen and we're going to share my screen and we're going to share with you how much j
[02:34:31] avascript do we have 46.1 kilobytes of javascript so 42 kilobytes of react and four kilobytes of like of app code maybe or
[02:34:52]  like three yeah like from this my estimate is that if you use svelte or solid this page would be 10 kilobytes of javascript now obviously we're not
[02:35:04]  dying over 46 kilobytes of javascript but what i'm getting at is when you look at something like rscs and if this is what you're trying to
[02:35:14]  produce like it's never going to cover the gap difference like how big do you think this partial pre rendering app is from from versell or next 107 kilobytes
[02:35:28]  like obviously we're just squiggling over little numbers but what i'm getting at is like if this is your site you're never going to do anything that would ever justify
[02:35:46]  like even the astro here like let's let's go streaming storefront this isn't even using okay yeah there we go yeah so this isn't even using islands or
[02:36:04]  like any partial hydration technique it's 34 kilobytes for the solid example yeah so that that definitely convinced me that's about a 10 kilobytes site obviously we don't
[02:36:13]  need to squiggle over little details what i'm pointing at is like you're if this was your website you're never going to close the gap that the offset of using
[02:36:25]  next is worth it like that's the takeaway i'm getting from this like this is why i seem probably pretty pro all this is like if this is what i was building like
[02:36:37]  i don't know who builds storefronts in large masses with fixed catalog like shopify why am i using react framework like i'm sorry remix but like this is just
[02:36:49]  like this is just like the obvious choice um like it's you're never going to capture the gap like lcp static i don't care if the dynamic stuff comes later
[02:37:01]  don't need any of the javascript like it's just it doesn't it just doesn't none of it actually makes any sense that we have you know these bigger
[02:37:12]  larger tools yeah is speculation rules supporting most browsers like usually when new spec stuff comes out you'll find and framework authors drag a bit because of support because like we've all
[02:37:43]  been burned before if usually i mean usually i'm not usually someone tries it first and then others will kind of go go on to it and my my my experience at least on
[02:38:01]  the spec stuff is about every couple years i go back and try a bunch of stuff that was you know first said about five years ago and then usually i'm disappointed and
[02:38:13]  then eventually it comes in so like it's quite possible i'm just not actually like yeah i i need to read up on this one obviously a lot more i mean yeah
[02:38:28]  remix could use to move to preact so that would help a bit but what preact with rscs no i mean it should just be fresh with all of astro
[02:38:42] 's features yeah it's chrome only right now it's useless yeah i mean this is the this is the challenge with this stuff you always the funny thing is the second it
[02:39:03]  gets in all the other browsers it will be a different story and then it'll be like yay right it's a two-way street you need to have people champion it for
[02:39:11]  to get through there i get it um react makes a lot of sense for our sales department i don't know what that means um that you i could see it making a
[02:39:30]  lot of sense to the hr department um it's just you know what i mean like when i'm looking at these solutions and what you can produce with them it's
[02:39:43]  like it might not be that rscs are wrong or the approaches or the stuff they're doing it's just that astro is doing a very good job of showing
[02:40:02]  that the gap in implementation is just like unacceptable there's reasons for those trade-offs don't get me wrong i'm i'm i am big on what react's been doing
[02:40:14]  in terms of like like how do i put it like i keep on saying that this is like the new jam stack you know the astro server you know i don't
[02:40:27]  know what's going to happen i don't know what's going to happen i don't know what's going to happen i don't know what's going to happen and i
[02:40:32]  don't know what's going to happen i don't know what's going to happen i don't know what's going to happen but i don't know what's going to
[02:40:34]  happen i don't know what's going to happen i don't know what's going to happen like i don't know what's going to happen i don't know what's
[02:40:38]  going to happen like i don't know what's going to happen i don't know what's going to happen like i don't know what's going to happen i don't
[02:40:42]  know i don't know what's going to happen i don't know what's going to happen like i don't know what's going to happen like i don't know
[02:40:48]  what's going to happen like i don't know what's going to happen like i don't know what's going to happen i don't know what's going to happen
[02:40:54]  like i don't know what's going to happen like i don't know what's going to happen i don't know what's going to happen like i don't know what
[02:41:11] 's going to happen like i don't know what's going to happen i don't know what's going to happen like i don't know what's going to happen like i
[02:41:18]  don't know what's going to happen the stuff that's like happening like on the react side is very very valuable and it's being missed people just don't understand the
[02:41:29]  limitations of say what's being done here with with astro but on the other hand like yeah i don't know maybe that's just the reflection of the mess things are
[02:41:46]  in like it's it's funny because we've shifted from like how should i put it i remember a time where like view and svelte were relevant right like that was
[02:41:59]  the conversation how do we make it easy for developers to join on the web right and we would talk about it and we talk about syntax and you know all that kind of
[02:42:12]  stuff and i even even svelte carried that torch for quite a bit longer when they uh you know like the whole meme with like let count versus use date and all this
[02:42:21]  and no raise on dependencies and all this stuff but like i find myself now only talking about signals resumability and island slash rscs which is unfortunate because it's
[02:42:54]  it's why i don't talk about svelte or view very much anymore um so like yeah there's there's something here it's just not quite where it needs
[02:43:15]  to be yet we're it's so funny we are so much uh far ahead i i don't know if you guys remember when i first started streaming about uh i don't
[02:43:22]  know how long it was a few years ago i feel like now maybe it's before i was in one of my articles time period i said something on the lines of like
[02:43:29]  people asked me what i think in next js maybe i didn't write this in an article i just like wrote it somewhere else but you know and i said you know and i
[02:43:36]  was like i didn't get why everyone was patting themselves on the on the head you know basically in terms of the realm of server rendering we're like a two out
[02:43:43]  of ten we have gone strides now like huge strides i you know we're we're i feel like we're in like a six or seven out of ten range now
[02:43:54]  where we want to get to but it's like it's still not enough yeah yeah no exactly like people will ignore this whole line of thought this whole line of thinking the
[02:44:12]  whole thing that i'm talking about and just pick a tool and be happy with it and just use it you know and that and that's that's that's great um
[02:44:27]  but yeah i mean the reason i talk about react so much is because react is doing relevant stuff it's not because they're popular being popular is not enough they have to be
[02:44:34]  doing relevant stuff for for for me to take notice of it and this small little feature is just the perfect shakeup like here's the thing astro combination of features and stuff
[02:44:52]  like that these that we're talking about here has gone to a point now where i feel like general devs back-end devs even might be like oh astro
[02:45:03]  doesn't seem that bad it's like i think they are hitting a sweet spot um the weakest part of astro arguably is the client isomorphic part of the story and
[02:45:17]  that's because they don't own it and i mean they've talked about taking it on but then they're in a whole other mess i don't like if i don
[02:45:25] 't think astro necessarily should make their own client framework but it's also the wall of where their ceiling ultimately will be it probably doesn't matter but it's like yeah
[02:45:45]  i don't know i think astro is very compelling incredibly relevant and friends are frustrated react yeah sure yeah exactly like and just want an app in front of the rest api
[02:46:10]  why are people frustrated with react people are frustrated with react because react is trying to actually improve things i think this is the i think this is the challenge and people just don
[02:46:23] 't even realize it yet i guess the thing is once you're somewhat successful it doesn't matter you can just keep on going on those laurels so to speak you know
[02:46:35]  of adoption but like you need to be able to you need to be like if you don't change with the times you're not you're just like obviously enterprise is going to
[02:46:52]  love you but you're not relevant i mean it's a two-edged sword if you have customers they will hate you for it if you don't have customers people
[02:47:03]  will view you as unstable or immature so at a certain point you just got to dig in and say like this is where i draw the line it's just like i don
[02:47:14] 't know we were talking about the stack overflow survey like things have been kind of like a mess a little bit right you know like i yeah i i don't know we'll
[02:47:31]  talk more of this as the stream continues on but when i actually before i i finish up this point i want to show a comparison that i was doing this week i had this
[02:47:40]  kind of funny idea where i was like what if we took um was it uh solid uh what was it called solid hn experiment dot netlify dot app i i
[02:47:59]  came up with this kind of crazy idea i was looking at the page source um of the doc size of stuff and i was like i was looking at the server islands and
[02:48:13]  i was trying to figure out why stuff was painting faster in astro the next and i was like maybe the html document matters right so what i actually ended up doing
[02:48:26]  was i uh if i take this and take what was solid start agent netlify app okay these are both hacker news demos that are deployed to netlify proper not
[02:48:41]  edge just the functions and what i did let's let's was okay this one's 4.7 kilobytes how big is this one i think we need to find a
[02:48:51]  sizable page for it to do this comparison this one's 5.8 kilobytes what i what i did was i removed all the cerebell all the serialization
[02:49:01]  code up the html and then put it in a let's look at the network here let's go all i put it in something called uh where is it here sorry
[02:49:12]  this tab put in something called hydrate js and then basically the the hydration script just writes into a javascript file and then in the head of the document i i
[02:49:28]  put in a uh i think i just put in an endpoint like a get and what i did was i made it so that while i was rendering i was warming up essentially i
[02:49:40]  was like writing to a stream that would be grabbed from the get so basically it's not it's starting the request right away but instead of streaming on the same request i'm
[02:49:47]  streaming it out on the same connection but not as part of the html document to see if this would improve performance right on a large you know one of these larger
[02:49:55]  pages because if i if i find a larger page and i think i have an example here like this one you know um let's do this you know these giant pages 40
[02:50:13] 1 kilobytes for the html payload uh oh i'm sorry i'm missing a slash versus being able to what's this one 200 right basically the double data
[02:50:42]  problem is killing us so can i can i can i can i basically half the data in the html document is there any benefit of doing that so i don't know
[02:50:57]  honestly again kind of inconclusive i did my test i actually read it on web speed and i put astro which doesn't do the double hydration so the difference between
[02:51:07]  these is ships with the html doesn't ship with the html but comes in through the fetch request doesn't need to do it at all right i could have
[02:51:17]  used solid start islands i guess for this as well but i basically did like one of these like timelines and the astro one doesn't stream either which is unfortunate but the the
[02:51:27]  streaming time was almost identical but the one that came in the html do you see that it painted later i don't know if this is a consistent thing but it
[02:51:35] 's it's it is interesting to me that like it did start streaming earlier and i don't know if that's just a coincidence but it actually yeah i i i'm
[02:51:52]  starting to think that the way we stream might be problematic to say the least yeah i mean the way i did this is it's a hack i didn't do it here but
[02:52:11]  my idea was that i would render some kind of id one use id into the page that would like look up i just didn't do it like the idea is that you
[02:52:23]  server rendering the page so you can dynamically come up with the right endpoint so you basically make a dynamic endpoint hit for every single page and then basically destroy the thing once it
[02:52:36]  connects to it once i'm sure there's tons of security holes i wasn't worried about that i just wanted to know what was possible this one would also be slower to hyd
[02:52:45] rate if you think about it because i'm i haven't actually processed each several commands separately i'm not yeah i mean a temporarily stateful right i'm i'm leveraging
[02:52:59]  fetch right it's it's it's i i'm hoping that i don't know the exact details with hp2 multiplexing it should be possible to keep the do both
[02:53:08]  requests on the same connection which means that i don't necessarily need like a fully stateful server i only need it to be short-lived staple and yeah i mean i wasn
[02:53:19] 't even like if it's serverless i'm not even worried about like cleaning up after itself like if something misses like if there's an error like it's a very
[02:53:27]  short-lived cache essentially is the idea um but yeah did i okay yeah so let's just run these all again then because it looks like i lost them and they're on
[02:53:43]  different urls right now that's why we're getting different results they should all be on the same url let's run these again i ran them the other day so
[02:53:54]  normal solid start i don't know if this is an indicative run my experiment and astro solid no this is this is this was inspired by server islands this was looking at
[02:54:17]  what the cost of of data serialization when you use islands you don't need to send all the data if it's only used on the non-hydrateable parts it
[02:54:26]  was just bugging me that basically once you had client-side routing it's not the islands because like quick is another example once you add client-side routing the data
[02:54:35]  serialization comes back in astro doesn't but astro is also cheating and will break very easily if you try and do anything with it in this scenario well i mean
[02:54:53]  astro is better in perceived speed because i don't care about the fact that it didn't stream in it just it was done all the content at 80.1 the the
[02:55:05]  it's unfortunate it doesn't stream i i wasn't worried about the streaming i was worried about the finish here which which was the key like basically when it painted is what
[02:55:18]  i'm i'm most concerned with not that this but when it paints the main content obviously astro is faster because it doesn't like astro is basically done like it's
[02:55:27]  not i should put it it's not when it's like astro comes in around six right it's not when it's like finished finishes i care about it's like when
[02:55:36]  i first see the full content yeah like around six seven point five eight point something that's the one that i actually care about maybe i should change yeah streaming has an impact
[02:55:48]  i think it's actually better to stream in uh in general you'll load other stuff faster it gives you a loading indicator so like definitely these coming in sooner is better overall i
[02:56:00]  just meant that this technique of deferring the serialization is is i want to see if it impacted uh contentful paint is essentially it No, it didn't. But
[02:56:17]  that's because we also cheated. This is why I pulled it. I, I, I was working on the islands router and then I'm like, this is so freaking
[02:56:25]  broken. I don't understand how anyone could, I can't release this to people. And then it has to release the view transition API. And I was like, God
[02:56:32] , this is so broken. Um, but again, this is a perception thing. Or it's like, uh, like, like I'm building apps. I'm not
[02:56:41]  building sites. If I'm building sites, then it's perfectly fine. If you stay within the lines of what Astro is intended for use case, then it's
[02:56:48]  like, you're not going to hit it. But like, I could never release something like that for solid. Like it would just be so broken. Um, like it
[02:57:00] 's because of our app focus, there's like a higher bar, maybe not on performance, but for expectation. It's the kind of way, like, you know,
[02:57:10]  when we don't do something, react as people are like, Oh, well react, does it, you know, like. The, we have to make sure within our
[02:57:17]  category, which is app generation, that we do stuff that's sensible for apps. That's why I still say, Hey, you're building like a contest. Like go
[02:57:25]  use Astro, use it with solid. Cause it's going to be, you know, especially in that use case, like probably much better than using react. I'm
[02:57:33] , I'm usually very, you know, like don't use solid better rack or whatever. But like, if your page is like five kilobytes or something, like
[02:57:41] , why are you bringing in a 40 kilobyte framework? that's not doing anything for you? Yeah. I mean, it's brutal. Anyway, um,
[02:57:48]  where I was getting here. How did we do? So, yeah, long story short, even though the timelines looked really nice here. Okay. Actually what this might
[02:58:10]  be a bad, this looks like it was a bad run for our experiments and let's make sure that this has all 406 comments. It does. Okay. Yeah.
[02:58:18]  So again, 90% for Astro. This is what we expected. This is the, this is the demo that I always demo with Astro. um, I
[02:58:25] 've seen anywhere from 90 to like 94 when I was with Fred, you know, um, so there's a little bit of, uh, variation solid getting 64. This
[02:58:36]  is just like my conference talk that I showed you guys scores better than most front end frameworks, very similar to react server components, even though it's doing the full work.
[02:58:47]  right. But the question is, can the experiment improve on it? And my thinking I've seen it get in the seventies, but maybe it's just not significant
[02:59:03]  enough for the complexity, but this is one of those things I'm weighing. Um, let's try and give this another run, I just, I was like,
[02:59:10]  if this was getting, if this, if this, something like this would score in the eighties, like mid to high eighties, like close to getting to like this
[02:59:22]  stage. Cause my whole theory here is that the serialization is the cost completely. completely so obviously we eat that because we have to serialize on the server. It
[02:59:32] 's going to make the server respond slower, right? Potentially. But okay. Okay. But if the cost is happening more on the client than on the server for serial
[02:59:54] ization, then things get interesting because this, follow me here. Maybe we don't need to solve double data as readily. Like this is a bad case. If we
[03:00:05]  don't need to solve double data, then it changes things again, right? Like this is, this is again, this is like, it's kind of like the Ast
[03:00:15] ro bet, but the opposite way. If you don't need to solve double data and you have basically very cheap hydration, like solid or quick does. I'm quick
[03:00:24]  is the cheapest, obviously. Then you now have an alternate app model that looks pretty compelling compared to RSCs. Basically RSCs are like the ugly middle child.
[03:00:39]  I conceptually think being in the middle there is where like the potential to like accomplish everything is. But like, who cares if the other models are simpler and can be
[03:00:55]  made more performant in their range? This is interesting. I don't know if this is repeatable, but. This is the first time I've seen eight
[03:01:11] ies without partial hydration. I mean, we, we, we've never, we barely see sixties without partial hydration. This is, this is full isomorphic
[03:01:33]  SSR full page hydration scoring 80 on the death test. Yeah. I don't know, maybe, maybe, maybe there's something here. Usually I'm, I
[03:01:56] 'm like of the mind that I want to like unite things and come up with a single model, but like. My gut is if I took this approach and mixed it
[03:02:17]  with quicks resumability, we would have, we'd have basically astro level scores in a client routed single page app. I mean, there's other problems
[03:02:34]  there. I feel like if you're going to use resumability and you want people to use it, you've got to do it slightly different than quick, but like
[03:02:42] . This is, this might be another path. I don't know. This could also be a fluke run and I'm like speaking a bunch of nonsense. Yeah
[03:02:56] . I mean, to be fair, our, our, our friend, Matt, Matt Billman actually gave me this idea. I don't know if he realized he gave
[03:03:08]  me this idea. And then when I saw server islands, I wanted to try it again. So, um, yeah, it's, it's interesting. I'll
[03:03:18]  say that much. It like, I see resumability being the last 10% is basically, which I've been saying the whole time. Um, I don't
[03:03:35]  know, this is, this is interesting. I don't know, maybe, maybe this, this suggests that it's, it's worth further exploration. Cause if this,
[03:03:43]  if something like this works. Then, then like, this is, this would be very easy to not easy, easy, but fairly easy to implement into any existing SSR
[03:03:58]  solution. Like solid start could just like use it the same way you use it today and could probably like this is a worst case scenario. So we would only see like
[03:04:08] , like small, like jumps on other kinds of serialization scenarios, but it does make you wonder about this. I definitely have things that I think are more pressing than res
[03:04:22] umability, but this is not that far out of our wheelhouse. it's interesting. I don't know. Main thread work. Yeah. You know what?
[03:04:40]  Astro. Isn't cheap necessarily on main thread work when you have tons of islands to hit. I think I, someone was talking about this before. this test is
[03:04:53]  inconclusive, but this is, this is interesting though. Cause yeah, it, it basically splits the difference. Anyway, sorry, I've dwelled on this
[03:05:02]  too long, but it is definitely interesting. This is, yeah, this is turning out to be a really interesting stream. I feel bad for all those people not watching.
[03:05:09]  Hmm. this is like probably my least watched stream that I've had in the last year, but, uh, yeah. Okay. The problem I have with this
[03:05:28]  idea is hard to employ with automatically scaled sailor service. Oh, okay. Yeah. And this is, this is probably where I'm going to get caught here. Cause
[03:05:36]  here's, here's my question. HTTP2 multiplexing. yes, this is what I'm getting to. Yeah. I guess the problem is I can't
[03:06:00]  guarantee the load balancer behavior, right? It's that that's why this doesn't work. Right? Like just because it shares the same connection doesn't mean that it
[03:06:12] 'll share the same resolved, um, like worker server, right? Like that's the part I'm sketched a little sketchy on here. Cause like, I
[03:06:30]  was like thinking, I'm like the whole key to this is I'm literally, you know, fetching back on the same connection that I made initially. but,
[03:06:42]  but the problem is the connection only goes as far to, as like where that routing happens, where they decide where to handle it. Like the cert, the domain resolution,
[03:06:55]  like it gets there and goes like, okay, I'm here. They can send you somewhere else. Right. yeah, but the, the whole benefit of this is
[03:07:14]  I'm actually rendering the JSON. At the time of initial rendering. Like I'm actually using the same serialization specifically for you. Now, obviously if I need the
[03:07:33]  persistent, we can use like Netlify blob or whatever. Like there there's, there's techniques that we can use to do this, but then there's infrastructure constraint
[03:07:41] , right? Everyone these days is having it like Bracell has it and whatever, but then you start getting into the same zone that Bracell's in where you
[03:07:49] 're like, oh, you need skew protection through next app or whatever. Like you need, like you start basically asking people for a bunch of infrastructure. It might
[03:07:59] , obviously if you had a single server, that would be fine. But like, I don't, yeah. yeah, yeah, I mean, yeah, I mean
[03:08:14] , yeah, it's, it's fine. It's just, it would be really cool if same connection meant same machine, but I understand why it wouldn't, it
[03:08:25] 's, it's, it's like what Matias was talking about earlier, right? When he was like, it all goes to the CDN first, you know,
[03:08:31]  like, um, yeah, okay. That makes it less easy to implement. It, this approach would have to be proved, but I don't know. It's
[03:08:53]  interesting. Right. Uh, anyway, that's enough on this topic. I've, I'm trying to keep the stream short today, so I'm going to move on
[03:09:02]  to the next topic. Um, which is, I got a couple hack MDs waiting, waiting in the wings here. Okay. First thing, little bit of cap
[03:09:17]  up on, uh, on, um, did, did I not stream last week? I did not yes, that's right. First little cap up we were,
[03:09:36]  yeah, there's another derivation document. Yes. Um, first thing, async after the last stream, everyone's like, oh, you know, everyone, but
[03:09:45]  people were like, what if you did allow tearing, blah, blah, blah, blah, blah, blah. And I actually wrote a whole proposal about allowing tearing, right
[03:09:52] ? I'm going to drop this one into chat and what it would look like if we didn't top of a hold basically almost immediately, thanks to some people in the
[03:10:00]  discord. I realized that not, not top level tearing is just terrible. I kept picturing Jason, Jason is definitely, um, faster on the client side than JS
[03:10:24] . But it makes, I think it's harder to do D duping and, and, uh, to do like fancy resolution. Like, cause you got a
[03:10:38]  self-reference to do things like promise resolution, but yeah, yeah. Terrible. Thank you for the joke. Yeah, no, it just, it doesn't
[03:10:47]  work. Uh, someone showed me an example. Uh, I think it was Brendan. Uh, and he was like, he was like, cause when I was picturing
[03:10:55]  tearing, I was picturing holes in the HTML, right? Like, you know, like, oh, this hasn't loaded yet. Just, you know, kind
[03:11:01]  of like the demo I did for you guys, but he was like, what if a CSS class depends on something async? Well, if we just allow tearing, you
[03:11:08] 'll have like flashes of unstyled content as async data comes in. I know that's like, not the like realistic common example, but like, it could be
[03:11:22]  literally be anything right. That just happens to be there. You could like render part of the page and then not render the CSS for it or the, a certain data
[03:11:30]  binding, like you don't have the value for a select list or something like it would be chaos. Um, the one benefit of doing this exploration is of making tearing work
[03:11:47]  is that I did have kind of realization that, um, around if I don't want to use suspense, was that like, um, that if we ever want to
[03:12:01]  opt out of suspense, maybe not including a fallback would be a way of doing it in a sense, top level suspense and, uh, like no suspense essentially,
[03:12:16]  and, and perhaps the ability to opt out of lower suspense probably should have the same behavior is what I realized. Um, not a huge revelation. I'm just going
[03:12:30]  to say that after thinking about this all, this doesn't speak well for PPR ironically, but I'm coming to the conclusion that, I mean, this is hard for
[03:12:42]  reusable reactive systems, so to speak, but top level tearing and top level holding both suck. And the best answer is just to error, which is probably not what people
[03:13:00]  want. Cause I was trying to make things, you know, reflective on server and client. But the reason that, you know, like, you know, how react,
[03:13:07]  if you don't put suspense boundary, it holds. The thing is that's fine for RSCs, but it would never work as a good pattern for anything that
[03:13:22]  hydrates in the client. So I'm beginning to think that the goal of, you know, having that behavior is actually the problem. It should, it's probably like
[03:13:34]  reacting the client today. Like if you try and read from an unresolved async value outside of suspense, it should just probably error. There doesn't seem to
[03:13:46]  be like a happy version for everyone, right? Holding sucks. No one wants that tearing is basically useless. So like, I, yeah, I think that's where this
[03:13:59]  sits right now. Um, the only downside of throwing like that is that, um, Suspense, like mechanisms would have to be built into the react system.
[03:14:16]  I was planning to do that anyways, but it's something you'd have to like consider at a reactivity level, um, not just the UI level. Yes, this
[03:14:25]  is what react does in the client, but on the server in RSCs, it just holds the stream. Um, which I thought was really convenient because it means
[03:14:34]  that people who build their first react app and have no idea about suspense, just put some async stuff in and it just holds. I think holding on the client might be
[03:14:44]  okay, but it's, it's, it's error or hold. That's basically the only options. Is loading the future try catch. Yeah. Kind of.
[03:14:58]  Yeah. Cause is, is loading guards can always protect you from throwing. Right. But if, if we synthesize top level suspense, then that would just be holding everything
[03:15:11] . Right. I mean, we could, but it'd be like, it'd be suspense with no fault fallback. I mean, that could be the answer.
[03:15:23]  It could be just that essentially, but you have to think about the way you write your code. The reason this works is because they never hydrate the server component. If
[03:15:37]  you write code, put top level, um, Async. And then I put a suspense boundary on the server at the top level. So it works that suspense boundary
[03:15:51]  has to be in the client too. Otherwise it's going to error. With RSCs that suspense only does not have to be in the client because those components never hyd
[03:16:01] rate. The problem with is loading is you basically need to hoist depending to you should check outside of the children. Right. Cause he is holding has to happen at
[03:16:22]  the level where the, the data fetching is going. That being said. The, with this, uh, you know, run one suspense model. Yeah. I mean
[03:16:36] , I'm okay with this because how should I put it? If you're intro, if you're the one introducing the async, you're kind of responsible for
[03:16:45]  it. To a certain degree, I guess you got, you got to make sure that there's like some kind of suspense boundary above where it's red. That could be
[03:16:55]  a, be above you. Arguably you could have suspense higher up the tree. If you don't, if you're really not playing the suspense game at all.
[03:17:05]  Then, yeah, I mean, do the, it's loading where it's ready. It's not like you can read something that's created below above it. Right.
[03:17:18]  I'm, I'm not suggesting people use like, it's the reason suspense exists. If you're going to like, try and make a bunch of show components with is
[03:17:28]  loading. You should just use suspense it's it's like suspenses inversion of control where you don't need to know that all the async stuff below yourself is why
[03:17:37]  suspense is good. You can't simulate that with is loading is loading is just like a weight tag in spelt. It's just like localized. So I think this is
[03:17:45]  fine. Like, like if you need to know something's loading higher up. Yeah. Yeah. I guess, I guess the question is, I mean, it's
[03:18:08]  an interesting one, right? Cause I, I do see the scenario you're talking about. Like we, I use transitions for most of those scenarios where you have like a
[03:18:17]  bigger widespread change, but like it is. Like, this is an argument for not doing run once suspense, because I mean, it's, it's hard to do
[03:18:31]  micro outside of transitions and is loading type of things. It's hard to do like pinpoint updates that don't skeleton, right? You could say that like, well, it
[03:18:41] 'll skeleton that'll push it up the tree. But like, I also kind of think you don't want to. So like, if you find yourself in that position
[03:18:50] . Yeah, I know what you're talking about, you're talking about scenario where it's like doing async stuff down here, and then you have like a spinner higher
[03:19:00]  up in the app. But you don't want to unmount the whole page, you just want to like, yeah, yeah, those feel like transition type scenarios.
[03:19:14]  Yeah. Yeah. I mean, or you can drill it down. I mean, but I think that's the whole point. You want to kind of like avoid hoist
[03:19:20] ing and drilling. Okay. In general, though, I think that, yeah, my, my gut here is that airing and then like putting in the top of
[03:19:41]  the suspense is probably reasonable because, yeah, I mean, it's, it's interesting. It could be holding as well, like if you could view create root from
[03:19:57]  a reactivity standpoint, as like the suspense boundary, like the way I started looking at suspense. And I talked about this a while ago is this idea of flush boundaries,
[03:20:08]  like this idea of like controlling the, the way the effects run and basically hierarchically sectioning them off that way. So in that sense, like create root from a
[03:20:18]  reactive standpoint or some variation of it has the potential of being like a suspense boundary. So you could see the holding be built in that way. In either way, tearing seems
[03:20:28]  like a field like garbage. So like, I, I, I, I'm done with that. Okay. Um, let's go to. Yeah. Okay.
[03:20:46]  This one I was pretty excited about. Again, this is one of those examples where you like do a stream and then like, I get a crazy idea over the weekend
[03:20:57]  and then I write it out. Um, and this, this, this one makes me feel a lot more confident about the derivation story. Okay, let's,
[03:21:06]  let's, let's talk about this for a bit. I, I, I realized that I need to attack derivations from like, uh, like, uh, more
[03:21:21]  fundamental level. Right. And what it came down to it was down to the nature of change or reactivity in the first place, which is people don't see this all
[03:21:34]  the time, but there's. Um, there's basically two types of reactivity. Um, there's immutable, immutable reactivity and you're like,
[03:21:44]  well, obviously immutable reactivity is still like at the point of mutation, something changing. Like it keeps its reference reactivity is all mutable from like a pure functional
[03:21:56]  standpoint. But for me, it's about boundaries and a signal is basically immutable. yes, you can change the value of it, but you don't mutate
[03:22:07]  it. It's like, it's always a single value. There's no, like, you don't change the value inside. Whereas stores are mutable. They,
[03:22:20]  they're nested. Right. So at the very core level, when we talk about solid, we talk about create signal to do set to do right. And then
[03:22:31]  when you do the new one, like if you wanted to change, let's pretend you had an object inside your to do signal. So if you wanted to create a
[03:22:42]  new, like update it, like you would either just make a new object here, but assuming you just want to toggle done true, the correct way to do it is to
[03:22:52]  clone the to do and put the to do done on it. Because this is immutable inside this function is immutable change it gets the previous state returns the next state
[03:23:02]  you don't mutate the current state. This is fundamental signals it's the same as react signals are but people miss is the benefit of signals is that they can be
[03:23:15]  nested and that changes the property. That's the magic. That's the difference between the react compiler and solid react will always only be this. This is why we
[03:23:28]  can build stuff like those to do app things they do with the compiler and have perfect stuff without the compiler perfect exact updates without memos without compiler. It's because we have
[03:23:42]  this ability to push change out in a granular matter see in here because actually, and this is not like the way to update a proxy is to mutated. You go
[03:23:55] , you go to do done equals true, you don't return the next day, you don't clone it, this would be very wasteful, you'd have to create
[03:24:00]  a new proxy, you just mutate what's in sight. And obviously solid has immutable helpers for stores today. That's why we have the path API, which
[03:24:10]  I've always loved because I liked encouraging people to think about stuff immutably, it just makes it nicer to kind of like declare it just felt really nice. That
[03:24:21] 's why I like the current story API, but from a fundamental standpoint, the produce API is the more fundamental for a store or the mutation API. I like keeping my reads
[03:24:30]  and writes separate. So I've still got them here, but generally my proposal for stores and solid 2.0 was this. Essentially you have immutable atoms and mutable
[03:24:39]  proxies. Okay, you guys with me so far? Yeah, I mean, the whole thing was a store. Yeah, at that point. Yeah. Similarly
[03:24:53] , we derive stuff right immutably or mutably. I mean, we've never done this before, but the immutable way is create memo or compute it, right
[03:25:03] ? If you want to add a priority field, project to do with priority, you shouldn't mutate this because it messes with things. You have to actually clone
[03:25:12]  it when you create memo. I'm pretty sure I think people understand this, but like if you edited the to do to put the priority on it, then the signal would
[03:25:21]  have it on it as well. If you actually want this to be a derived value on an object, you would actually clone it, right? Oh, above here,
[03:25:34]  set to do, done, true. For this example, yes, I could have done that. I was trying to show that, pretend there's other fields on here,
[03:25:50]  like maybe this is the problem with this one. ID one, there we go, done, I've, there we go, there we go, fixed it. There
[03:26:04] 's, there's nothing wrong with that. I was just trying to show that if you're trying to apply a granular change to an immutable object, you clone. Right
[03:26:15] . I mean, you, the reason that I showed it this way is because the sets like, obviously we can, we can also like not do this, but it
[03:26:27] 's because this function here. Is this function here. More or less. And the function form of, of, of the mutation should be the function form of this. So
[03:26:41]  like, do you, do you see what I'm getting at? Like a memo is the function form of the center, right? There's, there's a definite
[03:26:51]  symmetry to, to what I'm talking about here. Now we've never seen create projection, but if there was a create projection, it would start with potentially having a blank
[03:27:03]  slate, like an empty object and you applying the fields that you want updated to it. Right. You could grab that from some immutable or immutable source, but
[03:27:14]  essentially you would create it by mutation versus creating it by cloning. This example is actually really poor because the source of this would be. Yeah. You, you notice how
[03:27:32]  like this to do, I'm taking the previous to do like, where's the source? Like if there's, this is, you understand that this isn't even
[03:27:41]  a to do, this is literally an empty object with priority on it. Right. But I, I, I didn't want to complex the, make the symmetry complex.
[03:27:52]  Cause technically this would be coming from like a combination of source to do and previous state to do. And you, you know what I mean? That's my hypothesis here
[03:28:09] . That the story division is a function, which it's mutates the current state. That, that is my hypothesis of what a mutable projection is as it gets reactive
[03:28:16] . Like there's nothing it's tracking here. It's a priority, but as it got reactive updates, it would mutate it to the next state. Okay.
[03:28:24]  I've also named them differently because these are named differently. So I named them differently. I didn't call it. Like it was so that I can keep the same symmetry
[03:28:34] . How would, if you wanted a, uh, derived value that was mutable, that, that you can mutate. Uh, yeah, I didn't put
[03:28:46]  it here, but they all taken the show value. Right. In the case of signals, it's the first argument. And in the case of create memo and create projection
[03:28:56] , it's the second argument after the function. Right. So yeah. Where are we? Right. Like, uh, what I'm actually playing at here is there
[03:29:28] 's, there is a complete symmetry between what I'm trying to talk here. Okay. Writable. We talked about create writable forever. I'm calling create writ
[03:29:39] able memo and create writable projection. Honestly, I'm not sure. I like the writable because I'll explain why in a minute, but the, the,
[03:29:47]  the idea here again is. Is. You know. You would take some immutable data. I put previous here just to show that it's there, but generally with create
[03:30:01]  writable, you take some immutable data and then you override it essentially. And with the create mutable, again, you take some here, I'm using the imm
[03:30:09] utable source. So I'm like dipping it to show, show the mutation, but reconcile. Performs mutation. It's not the next state like this one here.
[03:30:20]  It's, it's, it's, it's, it's actually applying fine grain changes. It's applying mutations, right? Like, even though this, like under
[03:30:27]  the hood reconcile mutates things. So mutation, pure derivation. Right? Like immutable. Okay. See, I started thinking about this because in a sense,
[03:30:45]  I'm not sure if I intensely gave the name to write signal stores, different names. So you can see if they're different throughout and part of me wonders if writ
[03:30:56] able prefixes is obvious for the intent as just calling it derived version of the source. Cause like, this is one of the things like, is this a writable
[03:31:03]  memo or is it like a signal that is derived or a store that is derived? Like, because most of the time when you're going to want to use a writable
[03:31:13]  memo is when you want to create a signal. Essentially that's derived from something else or when you create a store that's derived from something else. So like, I
[03:31:21]  think that my naming might be backwards. Like you might like, I don't know, this is a naming mess, but I just want to show the symmetry. Okay.
[03:31:30]  This is the final difference between signals and stores and between memos and protection. It has a significant impact on how these primers are used. Immutable changes always constructs
[03:31:38]  the next state and mutable changes mutates the current state into the next state. Mutable changes consistent in its operations as it just needs to build the next state,
[03:31:45]  regardless of what changes mutable may have different operations, depending on what changes. Mutable changes can always, always has the unmodified previous state to work with while mut
[03:31:54] able changes does not. It leads to some edge cases where shared data, like using things and reconciled mutable is tricky because you don't, you can't always
[03:32:04]  just reuse the previous state to make your decisions. You it's like this thing that you're building. So with all this in mind, let's return to dipping.
[03:32:12]  Okay. We are pretty good with immutable derivations. I think mutable derivations are underexplored. The challenge in these, the APIs you're driving
[03:32:20]  generally involve a single function that reruns on update. Since you aren't staying with the same source, like one would with immutable data and the whole goal of it of
[03:32:27]  using these mutual structures is more granular, granular incremental change without dipping. So we're going to talk about how would this function ever do things differently? What I mean is
[03:32:35] . This is this example here where I have the, sorry, I should go to the eye view. It's easier to see. This example here where I have the create
[03:32:47]  projection, where it's like writing this every time it runs, it just only updates the priority. How can we do different mutations every time the projection runs? A question
[03:33:02]  about PPR, yeah, I mean, I don't have anything specifically on PPR. Oh, it's funny. This article actually might be good. Do I
[03:33:26]  talk about streaming in it? No, I don't talk about streaming in it. Was it? Yeah, I mean, the problem is like. There's a lot
[03:33:51] , I'd also check out my, uh, my, uh, not that. Sorry. I'd also check out my, um, SSR server. It's not
[03:34:08]  on this page next. Server rendering in JavaScript optimizing for size. Yeah. Why SSR? Yeah. Yeah. This series. Talks about the types of it's
[03:34:30]  good background for this whole stream. Actually. It talks about like performance profiling based on size and, and, and like timing. Partial pre-rendering is
[03:34:43]  basically streaming plus static content. Anyway. Um, but yeah. So anyways, my question is. How would this function ever do different things? The first option is you
[03:35:03]  don't write. So like pretend if you had to create memo and it was immutable and you want to add properties to it, you would, you would do this every
[03:35:09]  time you'd, you'd spread the current to do. And then you'd just add the properties to it. Right. Check technically with create projection. You could do the
[03:35:16]  same thing, right? You could just assign the new properties for it. Plus I multiple signals inside the frame. Well, what I'm assuming here is that. If
[03:35:37]  the value doesn't change, it won't notify. So priority stayed the same or titles stayed the same, but done changed only to do with priority.done would trigger down
[03:35:48]  here. Cause you're just applying the same value over and over again. So you see that there's already advantage over this, where this one doesn't know what has
[03:35:57]  changed on it. So like anything that listens to do has to do with shallow depth. It has to go, Oh, has priority changed? Has title changed? Like down
[03:36:05]  where you use it here. The diffing happens at right here. The diffing happens on read, right? Difference is this notifies the one thing that's changed
[03:36:14] . This notifies everything. And then they have to check what changed. Okay. Um, but is this not really dipping? My point is it is each value has
[03:36:40]  the previous value. When you set it again, it sees its equal and does not notify yet. So, uh, yeah, I like my simplification. Diffing
[03:36:46]  on read notifies everywhere. Diffing on write doesn't. Right. The fact that this is different gets even more obvious, the deeper the data goes. How
[03:36:55]  would you gradually update an array? You might create a new array of the same object. You might try to alter existing array by looking at the indexes and comparing values.
[03:37:01]  You have to be careful the order you do stuff, because once you mutate part of this data structure, there's no previous state that you were looking at anymore.
[03:37:07]  If you want to keep it around, you need to deep clone it. So ideally when incremental changes happen, your computation function would do different things, which means the source needs
[03:37:15]  to be incremental. Now, don't get me wrong. I'm not saying we force this more. It only makes sense to use certain parameters when certain conditions hold. If
[03:37:22]  you have some sort of derived mutable thing, ideally what would cause it to update would be some set of mutations you need to apply. If we brought back our Trello
[03:37:30]  example, we want our computation to do the blank. So this is the least, if you've been following the last few weeks, this is the least complicated version of
[03:37:57]  this Trello projection I've probably done to date. but the idea was if we created a board that had basically a timestamp. Okay. So we're just going
[03:38:25]  to do this, right? We're going to go previous timestamp or zero. Okay. And then set the timestamp to now. Okay. If we had a
[03:38:36]  way of knowing if something had updated since the last run, I haven't figured this out here, but just, just put this out here. So if we knew whenever the
[03:38:45]  board coming in, I'm sorry for people. I haven't been following the Trello example that I've been going over the last three weeks. This might not make as
[03:38:49]  much sense, but the idea is you have a board, you have optimistic updates. So you have the board that you get from the server, you have optimistic updates while
[03:39:00]  it's in flight, and you want to combine them. So you can show both the board where it is and the optimistic updates. But then when changes come in,
[03:39:11]  you know, like more optimistic updates, you can continue to update that board. And then when the server finishes, it can then reset it essentially with the server pieces and maybe
[03:39:23]  even apply some newer changes that came on. And the problem with this that we've been doing today is it's involved a lot of diffing, essentially, because we
[03:39:31]  went through a whole thing of looking at Signia, incremental computers to do diffing. And what I realized that if we take this principle of basic data, as long as
[03:39:40]  we know when the board resets, this is the create async call, like the server data upset, resets, essentially. When this happens, we can, if
[03:39:50]  there's basically the first time we're running this, or the board is updated, we can reconcile, i.e. diff and apply our mutation. So basically what
[03:39:58]  this is doing is it's cloning the current board and then applying our list of mutations to it and then calling reconcile and diffing it. So initially, a diff is
[03:40:08]  easy. It's like if you're starting with nothing in the board and you diff it right away, you're just going to immediately populate it. There's not going
[03:40:15]  to need to be like a whole bunch of fine grained stuff. But it does mean that later on, when the server updates, it's the one that caused this
[03:40:24]  to rerun. Then we can basically take the the new reset version of the board, apply any remaining mutations that are there. There might be zero. It doesn't matter
[03:40:38] . And then diff it against the current projection and then update the current projection. So only things that change. That means if you have optimistic updates that then became realized in
[03:40:48]  the final version of the board, you actually have the same reference in this projection. You don't actually have to re-render something. So it's actually kind of cool
[03:40:57]  because you can basically, it will see no change. I'll go to write it in the same way this was going to write it and see that there's no change.
[03:41:07]  So instead of dipping everything down the line, it might actually realize that when it reset the board, that there's no change and actually notify nothing, like in the best
[03:41:17]  case scenario. But in any case, when new mutations come in, you take the previous version and then you filter out all the the you can only grab the newer mutations
[03:41:32]  that happened after the previous timestamp and apply them. So what this means is as new optimistic updates come in, you apply them one at a time while you're mutating
[03:41:40] , you don't reset, reapply all the mutations and diff. You literally do fine grained updates. And then here, when it resets, you do the
[03:41:53]  diff and apply fine grained updates. This was the problem in my last example. I was diffing every time. I was diffing here and I was diffing when
[03:42:01]  we were doing each mutation. This doesn't diff by default. You have to call the diff essentially. So like, notice we aren't using diffs in the insignia
[03:42:10]  sense. We just need to know if the board triggered the computations. If so, we reset and force the reconcile. Otherwise, we just take our mutation and filter them
[03:42:17]  to apply only the new changes. In a sense, diffing our list of mutations is another step of indirection. The easiest way to approach to produce different logic
[03:42:24]  here is filtering of instructions. You need to communicate the instructions anyway, and communicating the diff is just extra overhead. This is a lot simpler solution and it's more performant
[03:42:33]  than any of the ones we've looked at so far. So just of this is this has the least amount of code. This approach doesn't require a special reactive system like
[03:42:45]  Signia. It doesn't require a diff format. And it does exactly what you want it to do. It does incremental fine grained updates on optimistic updates. So
[03:42:54]  it doesn't like reapply them all. It just applies what changes. And then when, and when it resets, it keeps reference when it does a diff. So
[03:43:01]  it's quite possible that it actually updates nothing after the reset. So yeah, no special reactive system. All we need to know is this idea of have I updated since
[03:43:12]  the last time this computation ran. So yeah, I'm, I'm pretty happy with that. I don't know if anyone's been following this, but I'm
[03:43:24]  hoping, especially if people work on the Trello, they understand that this essentially. I think is the solution. It does look a little bit like the Signia solution,
[03:43:33]  except, you know, where you like applying mutations and stuff, but it doesn't have any of the weird overhead and it basically forces you back into fine grained as quickly
[03:43:41]  as possible. Yeah, this is, this is the key. We need a way of asking in any computation, like, hey, have I updated since the last time
[03:43:56]  this thing ran? I think this is a helper that should probably come in to solve it in general. Anyways. Okay. Okay. But too early to pat ourselves on the
[03:44:08]  back. I was thinking the first thing people think when they look at this, why not? Why can't I just use creative factor, create computer as I've been
[03:44:12] ? Every time I go back here, I feel a firmer grasp of why derivations and correctness are important. Laser derivations are the first thing. Yeah. So
[03:44:21]  yes, we still need a clock. Yes. That, that is, that is the key. Solid has a clock today and I would like to keep it, I think
[03:44:27] . Yeah. I'm missing the rest of the code here. Um, give me two seconds before I go into the next. Next thing. Um. Let me try
[03:44:44]  it. I think this one is the closest one to this. Basically. Uh, right. Because I have all this weird board state garbage. Maybe I should do the other
[03:44:59]  one, but essentially there's a create async call that fetches the board from the server and then apply mutations is like a thing that basically takes a list of mutations
[03:45:13]  and then like. Kind of like applies the changes. Like it goes, oh, if it's create note, push the note on. If it's a move note
[03:45:25] , set a note at the index or whatever. Right. And then yeah, and then the mutations themselves are a memo that reads from a bunch of use submissions. Basically
[03:45:39]  I'm using actions and solid start as an example, or from the router as a way of like. Getting optimistic updates. And then it looks at those and it creates
[03:45:47]  that list of mutations that get handled here. Um, the codes a little bit all over the place, but. Essentially when you get back to your derived value here,
[03:45:57]  what's triggering this is it's reading the board. It's actually reading the board here, which means whenever the board changes, this reruns and it's reading mutations here
[03:46:06] . So basically when either end here, technically, whenever board or mutations updates, this computation reruns. The output is basically like a store where each updates applied fine grained
[03:46:22] . Yeah. Yes. I did steal your code. I use this as the basis of, of this. Benton was working on the Trello demo and cleverly
[03:46:40] , too cleverly figured out how to make this work. Basically came to the same solution that I would have come to, but it occurred to me when I looked at it
[03:46:47]  that I don't know if everybody would have been able to figure it out. Um, and when I saw it, I saw two things immediately. I saw that I
[03:46:55]  can make it more optimal, which is what I'm talking about here. And I could also tell that this was tricky to do in a way that's going to support deriv
[03:47:06] ations. So both this is why this, uh, approach has been so pivotal to me kind of working through this problem. Yeah. It bugged me how hard it
[03:47:20]  was like, this should be just basics. Sorry. Yeah. Yeah. Okay. So let's get here. Why drive lazy derive. Right. I think you guys
[03:47:33]  have seen this kind of scenario before where you have a and D and B and C if a and B update, they both notify five down to D. So when, so
[03:47:40]  that, when it runs, it knows that C has potentially changed. And then basically when D runs, it knows that it needs to like, look at C and look
[03:47:50]  at B. Right. This is why we drive, right? If we, if we didn't drive, if we did like create effect, like to write basically,
[03:48:03]  if, if we had an effect that said, whenever B set changes right to C. Like then when D ran. It couldn't know. Like basically if A and B
[03:48:14]  ran. There's no connection down to D. Basically D could ask for A and then essentially. Um, they'll see the old value of C because it doesn't
[03:48:27]  know that B is updated. Whereas if you do it derived, we can actually trace down. Right. But we've covered this in the previous stream. Another problem is what
[03:48:37]  is B is async. What if this is, if this is, this is async. Um. The effect will wait until it is present to set C, but
[03:48:52]  D will never know. It has an async dependency. This means it will never suspend if it's in a different part of the UI essentially. Because if, if
[03:49:00] , if, if we use create effect essentially, and we don't connect this tie again, A and B update. D is not aware that it should wait. So it
[03:49:10]  just grabs the old value and updates immediately. It's, it's basically stuff like suspense could never happen. So it's not only because of lazy derivations, but
[03:49:23]  async propagation is another reason why we have to derive. You know, because the only way it would ever, like if B is async and you do an effect to
[03:49:37]  write to it, it's actually reading the async value right here, instead of reading it where it's ultimately going to be used in D. By using reading it
[03:49:41]  here and then setting the value here, this is actually what suspends, not this, which means that like, if it was a different part of the tree or something,
[03:49:54]  then the, like D is never going to know. And it's not going to suspend, um, and yeah, as I was saying, it might trigger a higher
[03:50:04]  suspense boundary. Like if this is in a lower suspense boundary and this is a higher suspense boundary using create effect here to read it basically stopped the propagation of async right there
[03:50:19] . Okay. Um, another realization that I had was that everything is potentially reactive with colorless async. It's kind of similar idea. This is, this is
[03:50:29]  a good part to quiz you guys on a bit. Um, if you, if you guys are still present. What consider the difference between on mound. With split and a
[03:50:41]  create effect with a split. Like split tracking. Um, because for those who know unmount is basically an untracked effect, but there's, there's actually
[03:50:59]  a pretty. Big difference to have to consider here. The first thing you might be thinking is if it is an effect that doesn't update. Um, we've untr
[03:51:09] acked the read is basically the same as on mount, but is it depends on how it's implemented? My first inkling is on mount would actually implement. Like this.
[03:51:18]  Um, and that's where it has no reactive tracking part and it just runs the schedule function. That's where I'm getting to. That's where the difference comes
[03:51:31]  in. You have nothing to do in the pure phase and you just tag this on the other side. This is a subtle difference from untracking data in the pure phase
[03:51:37] . Like I've shown above. What if data is async? Now one could argue that it should. That it could behave the same, but it, but,
[03:51:45]  but if the pure side effect can't run to completion. It needs to run again until it does, because there could be other track things after it. So what I'm
[03:51:54]  saying is like, if, if data throws. You don't, you need to run it again to know. That, um, like in case it's like untr
[03:52:04] acked data and user. So if data throws, you actually have to run it again, which means if you put it in the second side, it's too late to
[03:52:10]  run it again. You can't. So there's a huge difference between untracking on the read side and scheduling something on the, like the effect side, because
[03:52:23]  even though this is, you know, untracked because this is async, it could run again because if it throws, it needs to be able to run again.
[03:52:35]  So the difference. Yeah. Yeah. So what I say now, yeah. What I'm saying here is you shouldn't read from async data in an on mount
[03:53:09] , essentially like you shouldn't read from reactive values and on mount at all. In fact, if you think about it potentially, which is making on mount a little bit
[03:53:18]  awkward because this one, the way it's implemented here would literally just throw and just error and not rerun. And this one would rerun this until it could resolve and
[03:53:33]  then run this when it was finished. So this one would work exactly like you expected. This one would be broken. So I don't know. It's pop.
[03:53:43]  The problem is it's, it's impossible to implement on mount. I think a different way because this data, unless you put this whole thing, unless you made on mount
[03:53:55]  this whole expression in the tracking part, untracked, it couldn't work in any way. But if you did that, then this happens too soon. The effect
[03:54:06]  should happen not on the pure half, but on the effectful half. Yeah. I mean, no, but we don't want is loading that the answer is on
[03:54:21]  mount is poorly designed or the, or the answer is more, which is probably why react doesn't have on mount. Or the answer is well, let's keep on
[03:54:35]  seeing if we have more answer. There's another argument for splitting effects. You can't interrupt the effectful parts of effects without airing because they could have already affected the
[03:54:43]  world. It's also an argument on why unmount is a desirable printer to have since it might lead people to make this mistake or might be an argument for warning when reactive
[03:54:50]  data is accessed under certain untracked contexts. Like I showed in my strict mode stream. If you guys remembered, I had one where it aired out. If we tried
[03:54:58]  to access like a signal top level in your component. It's possible that we should just say like, don't access signals like that. I know this is inconvenient,
[03:55:09]  but I've been trying to think of the use cases for on mount anyways. Um, where you want. Yeah. It's like basically saying you've, you forced the
[03:55:20]  person to call on track here themselves. Right? Like if they want to read it, they have to acknowledge on track. That was what my strict mode thing was.
[03:55:30]  It was like, it's fine as long as they call on track themselves, but they shouldn't do it accidentally. Okay. Similar example. Let's look at this one
[03:55:37] . What's the difference between these two. Create a signal and initialize it with some prop you get. Create writable and initialize it from a prop, but unt
[03:55:51] racked that property. See, obviously we know there's a difference between create writable and create signals, because the whole point is that whenever the prop changes, then
[03:55:59]  the base of the signal changes. This one could never update. Right? But I'm purposely untracking it again. What's the difference? You might look at this
[03:56:10] . Right. This, I mean, this is what you guys think, but I actually untracked it. So it shouldn't react. Are these the same thing
[03:56:28] ? Again, what if prop count would become async at some point? Well, now in a sense, it's the reactive value you can listen to. Now you wouldn
[03:56:37] 't want the count to initialize as undefined if you expect it to be numbers. So it does rerun if it's async. Yes, right.
[03:56:45]  Exactly. This is very important to understand the implications of what we've been calling colorless async. Everything is potentially reactive with colorless async. Okay. See,
[03:56:58]  this is the header of this section, but I really want to decide if this is worth it. Do you understand what I'm getting at? Because think about what happens
[03:57:11]  now. What if this is async? This would throw right at the top of your component and throw right up to the next decision point. It throw up to the next
[03:57:22]  show component or conditional in your JSX. And go all the way up the component tree to the, like the reactive memo that hosts it. Right? Like if you
[03:57:32]  had like a, basically components render once in solid. It's like when a switch changes, you go show this page, suddenly you render it. That's the next reactive
[03:57:42]  context to this. Right? Thanks fuzzy. Have a good one. So if, if this through, it would, it would throw all the way up to, to the
[03:57:58]  decision. And then from that point you'd have to re-render when it resolved that whole branch of the tree, kind of like react. However. With create writ
[03:58:10] able, this would catch the throw and it would just propagate the async through. So wherever, you know, you use count in the Dom somewhere, that part wouldn't
[03:58:23] , would, would update. It'd be fine grained. Well, it's not a function for initial value. It needs, this is actually a computation. What
[03:58:38]  I'm saying is create signal. Shouldn't, it's more saying that you shouldn't read from a signal top level in a component. Right? Props.count is
[03:58:48]  a signal. If you want to create a signal that depends on a prop, you want to create a drive signal. That's why I was saying writable might not
[03:59:00]  be the right name. Do you understand? Like the, the argument here is that you shouldn't, this is very strict mode thinking, but you shouldn't access reactive
[03:59:11]  values unintentionally outside of a reactive scope. It's, it's, it's this thing again, create writable memo. Right? That's, that's what I
[03:59:25] 'm showing here. Right? Like, or drive signal. This is why I thought the naming, the naming was wrong here. Right? Because this gives you super
[03:59:40]  fine grained updates. This re-renders a whole branch of a tree. This is a drastic difference in behavior. Enough that it's the same way components untr
[03:59:54] ack top level. You almost want to make components not participate in throwing top level. Right? This, I mean, there's different ways to solve this, but this is
[04:00:01]  what I'm getting at. Like, like, when solid untracks every component, if we didn't, and someone did, did this. Then that whole tree would
[04:00:17]  get wrapped up again. Right? Like, because whoever was listening to it, like the memo under the decision would track it. So when count changed, it would cause the
[04:00:26]  whole branch. That's why we untracked every, um, component. We unfortunately with async of this manner, basically apply that again, basically untrack isn
[04:00:07] 't enough. Right? Like there's a reason we untrack components. We don't want the whole tree to rerun. Async pushes everything to be potentially
[04:00:51]  reactive. Yeah. But given the goal is to be able to have a single automatic way of writing your code, it might be better to just treat our ESLint rules
[04:01:02]  as gold. Like, you know what happens if I take this example. And put it in the playground. Uh, it's fine. It's, it's
[04:01:31]  propped out children here. Reactive variable prop challenge should be used within JSX attract scope like creative factor inside an event handler or else changes will be ignored. See
[04:01:54] , this is why I'm bringing this up. This makes me wonder if throwing is the right thing to signal ongoing async work. It's, it is the best.
[04:02:00]  It is a great way. It removes the undefined and it lets us do hyper fine grained reactivity, but it, it, it makes. It like doubles
[04:02:09]  down on our reactive rules. There's a reason ESLint complains about this, right? Like. I don't think everyone would be happy with such a change
[04:02:24] . I'm just throwing this out here. That is this trade off worth it. Right? There's a definite trade off. You know, what this is capable of
[04:02:35]  when you follow the rules is something that we've never seen in a JavaScript framework. Arguably the most powerful async model imaginable in terms of being able to like smoothly
[04:02:50]  propagate granular change without having to worry about null checks. But you got, you can't lose reactivity, so to speak. Okay. I hope you see why I
[04:03:13] 'm thinking less as writeable memos, more drive signals because you're going to want when to make a single year component based on props. My hunch is you're less
[04:03:20]  thinking memo, more thinking signal. Yeah. Don't get me wrong. People will overuse this, but it's clear answer instead of reaching for create effect. Want
[04:03:27]  a signal that's based on a prop? Use a drive signal. Yeah. Yeah. Pretty much. Anyway. I think the biggest thing here is there appears to be consistent
[04:03:46]  model out there, but it leads to us writing our code differently to today, similar to the splitting of effects into tracking size and effect part. I don't think people will
[04:03:53]  generally be stoked about that, but it's not only enables things we couldn't do before it actually is an explanation for why certain things worked inconsistently before. It
[04:04:00]  highlights implicit assumptions we made that aren't safe to make. It is a corrected model, but pragmatically our industry has learned long and hard that you don't fix what
[04:04:08]  isn't broken, as it might, as that will always lead to misery. The message to treat everything as potentially reactive has been our assumed mantra for years. It was an
[04:04:16]  intuition I had when I created solid with focus on naked functions, but over time it is crystallized into explicit rules we can follow. This exploration suggests that it is a
[04:04:25]  principle that can guide us through their most challenging problems. I took this as a positive, essentially. Because the same thing that would make this fail is the same thing that
[04:04:37] , in a sense, in my strict mode stream, I was saying you shouldn't do. The same thing that ESLint is telling you not to do. It's
[04:04:44]  actually consistent. It's just not expected, I think. Like, if you split effects, you do this, you do all the things, you have a model that
[04:04:59]  is as consistently true as React. But it is, like, the reason this makes me excited is this shows that there is the potential for a model that from an academic
[04:05:11]  standpoint as well, from a pure standpoint, is consistent and doesn't break. Like, React always treats every other framework like, oh, yeah, you know, you guys
[04:05:21]  can do that, but, you know, that's like breaking the rules or, like, it's not as consistent or, you know, like, basically, it's
[04:05:27]  like making some kind of compromise that makes it less pure. I'm arguing that this approach that I'm talking about appeals in the same way that the React mentality works,
[04:05:40]  and I'd argue that it's even better. Technically speaking, it sounds reasonable, but I probably could throw away pictures of my code. Which then, because all the
[04:06:02]  null checks, right? Well, the thing you have to understand is, like, once you adopt this thing, everything becomes derived. You start using things like suspense, and
[04:06:12] , like, a lot of the, a lot of the iffiness starts, like, everything gets streamlined under this model, right? Like, it's less code when
[04:06:20]  you're playing within the lines. It's just hard when you're not, right? You'll be less likely to lose reactivity if we're like, no, no
[04:06:29] , no, no, no, no, don't do this. This, do, you know, this, you know, like, you know what I mean?
[04:06:33]  Like, like, it all plays together in this consistent model. It's just, yeah, this is, this is a very different zone. Yeah, anyway. It
[04:06:45] 's also interesting. It's like, this is not a path that, like, Svelte would follow us on, I don't think. I don't know.
[04:06:57]  It's interesting. Maybe, maybe, maybe they would. Maybe they'd make the compiler try and automate this kind of thinking, but, like. The end result is
[04:07:10]  very appealing from, like, a framework author standpoint, but I understand having seen react struggle through similar things, why that might not appeal to everyone. Anyway. Yeah.
[04:07:30]  I didn't expect to run because of this. Yeah. Yeah. I mean, you have to think about how to handle it, I guess. Anyway, I,
[04:07:42]  I'm, I'm pretty much done. I, I don't have a ton for this week in JavaScript. I'm going to try and condense it really quick here
[04:07:51] . We, we covered a lot of stuff today. I knew we would. But let me quickly get set up here, but I don't, I don't think
[04:08:01]  there's a. I didn't have a ton of stuff. Yeah. Where am I just second. I don't know. Bookmarks. My profile and then solid
[04:08:33] . Okay. Let's do this. Any framework that you haven't actually used yet, but want to, um, not at the moment. There's a couple of
[04:08:56]  up and comers that have some interesting features. I want to look at, um, but. But generally, no, not at the moment. I mean, I,
[04:09:09]  I, I feel like I got an idea from live view JS at least. Okay. Let's just. Yeah. Let's go this week in JavaScript shortest one ever
[04:09:20] , but let's, let's just do this. Where is it? There we go. All right. Um, First thing I'm just going to go over some book
[04:09:31] marks. Cause I thought these appealed to, they were interesting to me. Astro again, talking about putting script tags in to do stuff. I think it's
[04:09:46]  good that they remind people about, about, about this because. It is just HTML in a sense. Like what I was playing with today when I did that whole streaming hyd
[04:09:56] rate script was me just like inserting script tags into HTML and just doing like some separate JavaScript. If you want to hack ideas, you can do this. If you have a
[04:10:03]  simple site and you just need a little bit interactivity, go for it. I mean, this is kind of obvious from an Astro perspective, but I think it
[04:10:10] , I think a lot of people, and I'm, I'm very guilty of this forget. To talk about the features, the framework cap, because they seem kind of
[04:10:17]  obvious. And then people are like caught by surprise, like Sol and Sol start having incredible amount of features, stuff that you might not even find in other libraries, incredibly
[04:10:26]  powerful things. And I always, you know, forget to talk about them because, you know, I've been working on them for three years or whatever, but like sometimes
[04:10:33]  these features like five years later, you're still like, wow, I can't believe that they did this, you know? So I'm, I'm glad that
[04:10:40]  Astro is like putting focus on, you know, simple things that can help people. Remix releasing their headers library is actually really cool. A couple of years ago,
[04:10:53]  I would have wanted to just steal it, so to speak. If it was open source, just bring it into the project. We've had to build our own. I
[04:10:59]  think everyone's had to build their own. So it's, it's, it's cool that, that they're just open sourcing, like some of their intern
[04:11:05] als from remix, others can use it. I'm actually very stoked about that. Oh, did they release fog of war? That's the lazy route detection. I,
[04:11:23]  I hadn't seen that they released it, but that's cool. Oh, as experimental. Yeah. I mean, it's a cool approach. Uh, we've
[04:11:34]  been talking about it because the size of manifest and I've been focusing a lot on HTML size. Um, but yeah, no, it's definitely interesting. Uh, let
[04:11:42]  me get the banner out of the way here. Um, we already talked about multi. We talked about Matthew Phillips. Uh, yeah. Stack overflow, um, survey.
[04:11:52]  Obviously Svelte did very well on the like up and comers list. Uh, beat out by 0.1%. I think by HTMX and live,
[04:12:01]  uh, Elixir. Apparently everybody wants to use sort of Phoenix, uh, live view. I'm gathering. It's like very high on like the up and coming
[04:12:10]  list. The reason I'm pointing this out is this the first time solid spin on the survey in 2023. I don't think we were on the survey, um, to
[04:12:17]  my memory. Um, so I'm, I'm, I'm actually pretty stoked about that. Um, uh, web frameworks and technologies. Oh, it's fine
[04:12:31] . Why am I not seeing anything? Okay. There's like several categories. I just need to find. Yeah. Admired and desired. This is what they're looking
[04:12:42]  at. Yeah. Web technologies. Now this is. Um, it's an interesting flow where they, where they show like where the stuff sits, but like admired 62
[04:12:59] % desired 33.4%. Um, felt admired 72.8. It's very high desired floor. So I'm gathering this is around like actual usage. Like react is
[04:13:11]  still highly desired. Um, but it's a little less admired. Um, the big ones, the ones that are standing out on the admired side, obviously ASP
[04:13:21]  doc net core. I didn't realize that was a big deal, but apparently it is felt. HTMX. Astro. Solid Phoenix. are all the ones
[04:13:33]  that have over 65%, basically. But yeah, this is cool. This is the first time we've actually kind of like made a blip. We're actually more desired
[04:13:44]  than Phoenix, which is funny. This was an interesting one for me. Remix is down here, where it's both less desired and less admired than us, which
[04:13:55]  is odd for this. Like you can understand where Angular, for example, is less admired, but you know, higher desired, but or so that's JS. But you
[04:14:08]  know, you know, I mean, in this range, but like, this is, this is an odd place for Remix to be, I think, I don't
[04:14:15]  know. Maybe just like, this isn't a widely front end crowd, I guess, like, I don't know, like, I'm surprised Solid actually showed up
[04:14:25]  here. But yeah, I don't know. It's interesting. It was a first for us, obviously. Svelte has moved up quite high, higher on the
[04:14:34]  desired scale, which is really good for them. And it looks like Astro is kind of getting out a little front of us too, which they showed Astro is amazing
[04:14:46] . But yeah, interesting anyways. A lot of people talk bad things about remakes without people even trying it. Yeah, it's, it's interesting. Like where
[04:15:00]  that perception comes from. Yeah, they started by admired. Yeah, I mean, if they started by admired, it would be. It would be Phoenix, then HT
[04:15:16] MX, then Svelte, ASP.NET, then Astro, then solid, then. Fast API. Yeah, maybe like six or five or six.
[04:15:28]  Yeah. Yeah, we're next to us is right up here. Yeah, no, very amazing job at beginner for it. And you can argue that Svelte
[04:15:44]  has been as well. And view. I, maybe this is where this, this survey actually takes more, you know, more, you know, has more impact. Cause
[04:15:54]  I was talking about how we aren't talking about, you know, Svelte or view as much on the stream. You know, um, we talked about the signal
[04:16:00]  stuff, obviously, but you know, like worth the, like the, you know, stuff I've been looking at here, things of that category seem to be doing
[04:16:07]  much better. Anyway. Yeah, I think the big one here is Astro is just passing out Nux and is catching up to Ruby on rails, which is crazy
[04:16:19] . How is Blazer up here? God. I don't, I just don't understand. Like, this is like the only chart in existence where Blazer isn
[04:16:37] 't dead last, I guess. I'm confused. I, it's tricky because there's really good people working on it and smart people, but like anything technical and really
[04:16:51]  cool things they're trying to do, but it's just like, it's like the ultimate example. You know how I criticize reactive being like good ideas sometimes, but
[04:16:58]  the implementation fails. Blazer is like the epitome of that. It's like the implementation, like couldn't fail harder. Um, anyway, that's it for
[04:17:09]  bookmarks. What else is new? Oh yeah. I'm loving seeing other talks going up. Uh, this, this is so freaking cool. Um, to see
[04:17:24]  other people talking about solid and solid start, especially cause I haven't been doing as much. We people are asking, oh, what's a good thing to learn about solid
[04:17:32]  start. Don't look at my content. Look at Attila's content here. That's, that's, that's probably the best way. I, I teach solid
[04:17:39]  the same way I teach these streams, right? Like even, you know, when I'm doing a talk, it's like for the concept of it, you know,
[04:17:46]  like why I built it that way, how that's powerful. If you want to actually like, be like, what is it like to live with solid start? How
[04:17:53]  it's like to use it? This is where you gotta go. Um, yeah, there you go. Thanks, Deb. Yeah. Spirit led the software. Yeah.
[04:18:08]  This is cool. I was talking to Jacob and you know, he was like, oh, solid probably needs a clerk thing, you know? And then he went and looked
[04:18:16]  and there was already one made by the community. Um, clerk has been pretty easy to integrate, which is really awesome. I'm just super stoked to see like,
[04:18:23]  again, more libraries. Um, oh yeah, that's an interview I did. Again, Deb doing great work. He did one of Jason Langstrom's coding challenge things
[04:18:36]  and he built it with solid, which is very cool. I haven't actually got to check this out yet. Um, it seems like a cool concept. I remember
[04:18:43]  when Jason was pitching the show right before he left Netlify. It was really cool. Courses. I bet you, I bet you this course is better than
[04:18:54]  my ability to teach you solid. So seriously don't, I'm like the, I'm not the best person to teach you how to use solid. I'm just
[04:19:01]  going to say that right now. If you want to understand web development, you want to understand the fundamentals, want to understand the details then yeah. Um, but I'm
[04:19:09]  so happy that there's content made by other people. That's probably way better than any content that I'm making. It's all start to in development. No,
[04:19:24]  but we're working towards solid 2.0. I switched to YouTube to chat. There you go. Where is it going to be dev? AI dev summit. Interesting.
[04:19:38]  Okay. But yeah, very, very cool stuff. And finally to end this off, I think everything that I've talked about, I talked about on stream, this whole
[04:19:47]  week has been astro week or last week was after a week. So that was basically what I was looking at. Obviously Netlify Astro partnership, big deal
[04:19:58] . Um, this was the partnership that should have happened ages ago. I'm glad to see it happen. It's like, since I got hired on at the very beginning
[04:20:07] , I was like, you know, I understand Netlify is, you know, customer business model kind of stuff. And like solid could appeal to a certain point portion
[04:20:15] , but Astro was like the no brainer. I'm, I'm glad to see where things have come. I've been trying to push like before the G
[04:20:22] atsby integration or, uh, bio and all that. And that was for a different reason. But like, I am very stoked to see this close link between Netl
[04:20:32] ify and Astro. It makes sense. It's the, like all ships rises. They have the cultures of both of these companies are almost identical. Obviously, durable
[04:20:44]  caching platform primitives like NetFly had a lot of really good announcements this week. Astro had a lot with server islands. We've talked about all the stuff
[04:20:58]  I think about server islands. One little snippet that might have missed. Remember the build output API from Vercel. I loved it, talked about it, worked
[04:21:09]  testing it. NetFly has always had a file system routing, but Eduardo from NetFly team has been working really hard on this, making this into a standard.
[04:21:19]  Things like blob and edge functions are all just where you put it. It's a very similar concept to what you have in Vercel. You've been able to do
[04:21:27]  the stuff in NetFly to a certain degree before, but now it's becoming an official thing. I've been stoked to see this, honestly. In the last
[04:21:35]  couple of years since I joined Netlify, there's been little bits here and there of stuff, but the company's been rather quiet, focusing on a lot of internal
[04:21:43]  stuff, a lot of enterprise stuff. This is the first blast that I've seen of this nature of Netlify really since I started. It's cool to see them
[04:21:51]  talking about really relevant stuff, shipping really relevant stuff. Very, very cool. Yeah. As you can tell, I spent all this week building those prototypes and benchmarking
[04:22:06]  stuff. I thought I was going to do other stuff, but then before Astro drops the article in Server Islands, I get hijacked to testing it. Then I just
[04:22:18]  started going crazy with stuff. I got one other piece of news, solid news. I think everyone is going to appreciate who uses SSR in solid. Just a small
[04:22:30]  little gift. We've shrunk the size of the DataHK. Now, this makes about a 1% difference on your total size with compression. It basically has zero
[04:22:43]  performance aspect, but it makes your code way, way easier to read when the keys are that much smaller. It makes people happy. It makes me happy. Yeah.
[04:23:03]  Anyway, I think we are good for today. Thank you all for joining me. We talked about a lot of really cool stuff. I'm going to have to really sit
[04:23:15]  with all these changes in Astro and think of how this shapes my perspective on things like RSCs. Really, it's challenging what I think about how web dev
[04:23:27]  merging is going. In one hand, people think, "Oh, maybe this means things are getting closer." I actually think this is getting farther because they've really raised the
[04:23:39]  bar and I see a lot of potential here. Anyway. Thank you all. Have a good one. I think the derivation stuff, I don't know if I
[04:23:53]  can convince everyone on it, but I think there is a sound model here. Anyway, I'm excited about that too. There's so much to be excited about.
[04:24:04]  have a good have it have a good one have a good weekend