---
showLink: "https://www.youtube.com/watch?v=-TeXU9UZ_4w"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Nested Routing, Parallelized Data Fetching, and SolidJS  w/ Ryan Turnquist"
description: ""
publishDate: "2022-07-15"
coverImage: "https://i.ytimg.com/vi/-TeXU9UZ_4w/hqdefault.jpg?v=62d0967b"
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

[00:00:00]  Hello, everyone. Welcome to my stream today. Today, I've got set up with a bunch of new equipment. I'm hoping this all works. If it doesn
[00:00:14] 't, let me know. But yeah, I've got some new stuff. I'm using a new mic. I've got some other audio stuff going on. I don
[00:00:24] 't know. Some people told me I needed to take what I was doing more seriously and make it look less lazy, so I am trying that. Hopefully, it's
[00:00:36]  still running off my MacBook, so I'm hoping the whole thing doesn't implode. We don't have huge fans kicking in and all that. But that's where we
[00:00:45]  are today. So do let me know if you hear any weird audio things, if it sounds good, if it looks good. I paid StreamYard to get the
[00:00:56]  1080p. So, you know, we'll see if that makes a big difference. Yeah. Thank you. Yeah. So, yeah. This is me at least attempting
[00:01:11]  to take streaming seriously. I've got to a point where I've gone about as far as I can on my own. I'm going to go bug Theo very soon
[00:01:18]  to see what else I need to actually take this on. But for now, yeah, let's hope this does the trick. I'm pretty excited about today because I've
[00:01:29]  been meaning to get Ryan on here forever. He's been making some. Well, I mean, he's been responsible for the routing effort in Solid forever. It's
[00:01:40]  funny, initially, I was doing my own thing and we ended up merging our efforts. And we'll talk a little bit about that. But routing for me, as many
[00:01:51] , you know, is like one of my favorite topics. I think it's one of the most important topics. And yeah, I did a stream on routing like what
[00:02:01] , eight or nine months ago. And even the funny thing about it is even if a lot of the technologies haven't changed, people's perspectives continue to. So, yeah
[00:02:11] , I'm just very interested in this in general and I hope others are too. And that's why I wanted to do another stream with routing. We've been, we
[00:02:19]  made a pretty big release a few weeks back for Solid AppRider. I want to talk about that, what it means, how it affects you, how you build
[00:02:27]  apps. And yeah, all in all, you know, have a good time. Yeah, a few people coming in, mentioning, singing live. Another thing we should probably
[00:02:39]  worth mentioning is I now dual stream on Twitch and on YouTube. So if Twitch is what you prefer, you can go twitch.tv/ryansolid, I'll
[00:02:52]  post that in here just in in case, in case that's anyone's thing. And I think it's, I'm just going to wing this and hope this actually
[00:03:04]  comes through. Yeah, it comes through both chats. So far, I'm the only one on Twitch, apparently. I don't know. I don't know which
[00:03:16]  one I prefer. If you're talking about Twitch or YouTube. I've just done YouTube. I'm sending them both through. We can figure out what we like as
[00:03:25]  we go. Yeah, I took a long break. Yeah, sorry. Yeah, I took a long break. So yeah, I'm happy to be back and talk
[00:03:36]  about this stuff. There's always something going on in JavaScript. And as I said, even if technology kind of takes a while and it evolves incrementally, there's just
[00:03:47]  always new perspectives and ways to kind of adjust our thinking along the way. And I like doing that so that I'm not caught off guard. I think that's where
[00:03:55]  the whole JavaScript fatigue and all that comes from. People suddenly feel like suddenly some big, huge thing is coming. But really, the writing is on the wall for months,
[00:04:04]  years sometimes. If you're paying attention, like things like Bunn, for example. Bunn's incredible, just got released, made huge waves. But I mean
[00:04:13] , for those who've been following around, we've been looking at Bunn very closely for probably since maybe October last year, like eight months ago. And maybe not on
[00:04:24]  the stream, per se. I won't maybe mention it once or twice. But I think we keep the conversation. We look at these things, you know, briefly at
[00:04:31]  first. You kind of bring them into our thinking. You don't get surprised by much. And then you just know where things are heading. I know that's like
[00:04:39]  the opposite for people, like just learn what you need and don't worry about the rest. I have a weird perspective there. I think, yes, you don't need
[00:04:46]  to learn everything. Don't feel overwhelmed. But sometimes learning a little bit, just a touch to understand what's going on, means that you're not going to get caught
[00:04:54]  off guard later and be like, oh, why do I have to learn this new thing? Well, the thing is, truth is, it's not a new thing,
[00:04:59]  you know? So anyway, you know, that's my perspective. Yeah. Hello, everyone in the chat. All right. Yeah. Cool. We got some people
[00:05:11]  coming in from Twitch now. Hey, Theo. I was going to go live away a few hours. I appreciate that. I'm sure that if you haven't been checking
[00:05:20]  out Theo's recent videos, I mean, they've been they've been amazing on pointies. We've had some amazing guests like Jared from Bunn, Matt from
[00:05:28]  TypeScript, and I've been enjoying the streams immensely. So yeah, I don't want to compete with that. We can all go join Theo after we talk to
[00:05:41]  Ryan for a bit. Hey, Steve. Yeah. Yeah. Co-streaming on Twitch. I don't know. You do both. You probably know better than
[00:05:51]  me. Yeah. All right. Yeah. Sorry. Just talking stuff. All right. So yeah, some people are here. So I think we probably should get started
[00:06:09] , right? Because I've been wasting time long enough, right? Let's talk about this week in JavaScript. In just a second, my drink is a little bit out
[00:06:17]  of reach. There we go. That's a little better. All right. So yeah, let's talk about this week in JavaScript for a moment. There wasn't a
[00:06:30]  ton of stuff for me personally that caught my eye, but this was the biggest one. Okay. Apparently, Twitch is kind of like having a refreshing drink. It's just
[00:06:46]  so much better. But yeah, mind you, you guys, you all who are here, follow me on Twitch, I guess, as well as on YouTube. That
[00:07:00]  way, I guess you get notified when I stream and whatnot. So go do that. I don't have hardly any Twitch followers. So there you go. Yeah. And
[00:07:11]  now everyone just switching to Twitch. Yeah. See, I don't know these things. I have to trust you all about this. I used to watch Twitch a ton,
[00:07:19]  but I didn't like, it wasn't like a streaming thing or perspective. I just, that's where everyone was, right? I, I, I'm really
[00:07:25]  into, uh, uh, watching speed running was my thing. Uh, and, uh, uh, when my kids were really young, especially Raina and stuff. And
[00:07:37] , and there'd be like times you just weird hours and you're really tired. And, you know, a lot of the time I was coding on solid, but when
[00:07:43]  the kids are actually up and I'm just like, oh man, what am I, what am I going to do? Right. I would just, the kids really
[00:07:48] , they like, like, you're not supposed to put kids in front of TVs a bit, but they do, and they can't see very far when they're like
[00:07:54]  babies, but the primary colors like reds, yellows, blues, you know, we're, you know, they're very kind of like soothing and things they can
[00:08:04]  see. And, and actually super Mario, um, is just full of that color scope. So I used to watch like a ton of, uh, super Mario speed
[00:08:13]  running around like 2015, 2016, uh, 17 kind of time period. And that's how I got into watching Twitch more. Um, when I guess a lot of those
[00:08:24]  guys have kind of gone on and become big things like, uh, like Grand Pooh Bear and like those kinds. But yeah, I, I, I just, that
[00:08:31]  that's how I got into Twitch, but I, I never thought about streaming myself. Um, streaming coding is a interesting and kind of funny thing that I just wasn't
[00:08:39]  expecting. Um, yeah, I bet you the, yeah, yeah. Uh, some, someone said sometimes that there are like funny things like that. Like, and
[00:08:54]  another one, like if, if, if, if people are into that kind of stuff, uh, maybe what types of cars are into every people, a lot of
[00:09:04]  people were not very surprised that my vehicle of choice has always been like, uh, uh, uh, like product, uh, like street rally cars, Subaru, uh,
[00:09:18]  STIs, Evo Lancers, you know, those kinds of things. So yeah, I, I, I sometimes wonder if there's correlation there. Um,
[00:09:24]  right. Um, you know, all, all wheel drive, advanced electronics, you know, that, that whole thing, but maybe that shows my age, maybe everyone's
[00:09:34]  into Tesla's now. I don't know. Anyway, kind of going off, off a bit on there, but, uh, yeah, no V3 is a big
[00:09:43]  deal. Um, and I, it was one of the biggest release of, of this, uh, of this, this, of this, uh, week from my
[00:09:52]  perspective, thing I want to talk about. And honestly, we use V for like everything at solid. So does felt kit astro. This is like, sometimes people like
[00:10:04]  to talk about standardization, right? Like they like to talk about like, you know, web components and the platform. And yeah, that's all, that's all
[00:10:10]  good. And that's an important layer, but build systems. Um, even if you, I mean, you can kind of hide them. We saw some hiding of
[00:10:19]  build systems last week with, uh, Dino and fresh, but like it's happening somewhere and V in its sense is, is building a platform that is serving almost as
[00:10:31]  that standard between a ton of frameworks. So, um, I think V is incredibly important. And I think that, you know, if you haven't checked it out,
[00:10:40]  I mean, you should be, I mean, the, the cool thing that scales from your hobby project. You just like got a template. All the way to these
[00:10:46]  meta frameworks and yeah, they've made it faster. They've made it smaller. Um, the team that's working on V is incredible. Um, they have a conference
[00:10:54]  coming up in October. Um, I'm going to be speaking at, so pretty stoked in general. Um, yeah. I mean, this was the big news from
[00:11:01]  my perspective. And let's see what else, what else was good. I'm hoping you all are using V because I said, it's, it's amazing. Um
[00:11:12] , I have a little bit of like solid news. I suppose, uh, we, uh, actually, actually I didn't have this already. This is, this
[00:11:21]  is me being, let's just go over to solids. This is good. We, we released our, uh, our shop, uh, this week, which is fun
[00:11:29] . So now you can wear your solid merchandise. I've worn a solid shirt on stream before, uh, today I'm sporting Netlify. But, um,
[00:11:37]  yeah, uh, I, I, I've been, you know, this is just fun stickers, cups, hats, shirts, and whatnot. So you can go to
[00:11:48]  solidjs.com/store and the money goes back into our open collective, which reminds me, speaking of open collective, um, JetBrains, uh, gave us
[00:11:58]  a big sponsorship, uh, uh, $500 a month, which is still a lot for a project of our size. Um, so they joined Netlify as
[00:12:07]  one of the, as a basically top tier sponsor for solid, um, currently. So that's, that's huge for us. Um, right. We, we have
[00:12:16]  a few other great sponsors too, obviously like Vercel and, uh, Div Riots and, um, Builder. Builder's been there right from the beginning
[00:12:26] . And, uh, but yeah, this, this was, this, this, this is, this is a big contribution and I'm very, very stoked about that
[00:12:32] . Okay. Let's keep, let's keep up. Let's keep this thing going and I'll get the banner out of our way. It just keeps on taking more
[00:12:39]  of the screen up. Um, we, we also had our first community, our meeting in San Francisco. It's our second one, which a lot of, uh,
[00:12:47]  fun, uh, do meet up meeting people for in person. Uh, hadn't done that. I missed the one in New York because, um, I was, I
[00:12:54]  was traveling. So I'm, I'm pretty, I'm pretty stoked about, uh, how that went. Uh, you know, it was a tight knit small
[00:13:00]  group, but we had a bunch of people online with the call as well. And it was a lot of fun and we got to, uh, talk about what's coming
[00:13:06]  up with solid. I did talk about a lot of that in my stream before I went on vacation about the future, but, um, you know, just put faces to
[00:13:13]  names and stuff was a great experience. And we're going to be doing more of that in the future. Okay. So let's, let's go back, um
[00:13:19] , and talk about a couple other things going on right now. Um, another kind of fun thing going on, um, was a lot, a lot of conversations going on
[00:13:31] . You know, I love the conversations going on and, uh, oh, someone noticed no SSR in store. Our website right now actually isn't SSR.
[00:13:41]  Uh, it was built on client side, the whole site. Um, it's, it's one of those things, right? Like we are actually migrating to solid
[00:13:52]  start, but like. SSR working isn't usually never the full story. It's not about like, okay, yeah, now you can do SSR. I
[00:13:59]  can make cool demos. I can, uh, you know, you, you, you have all probably seen my streaming hacker news on the edge demos. So I, I
[00:14:06] , it wasn't very hard for me when a new service comes out like Dino or Cloudflare or Vercel edge or any of them to make the very first
[00:14:15]  demo that goes up, uh, you know, full framework, meta framework demo. I've been doing that since it came out. Cause it's just a matter of writing
[00:14:21]  an adapter and then you're bang, you get the future. But, uh, solid start and still beta. Uh, and the truth matters if you try and do
[00:14:29]  SSR on your own, there'll be, you know, many dragons or whatever they say, they're saying it's, and this is why there's next JS and
[00:14:34]  nox and stuff. It just isn't as smooth. And the team who built the website do so very much independently of what I'm doing and what the, you know
[00:14:43] , the R and D side of stuff. So they, they just, they just pick up stuff and go out on their own. As if any of you, if you
[00:14:48]  want to go use solid, that's their experience. And, uh, uh, yeah, at the time that we built all this stuff, it was all client side rendered
[00:14:57] . So, um, you know, that was a year and a bit ago. Um, we're yeah. 1.0 was about a year ago now and,
[00:15:04]  uh, yeah, it's all moving to SSR, but not yet. Yeah. Yeah. Yeah. Yeah. Uh, Astro V3 for sure. Yeah.
[00:15:14]  And we, we got to make some updates to solid start this week as well. No, V, V has been amazing and I'm super stoked to see where that goes
[00:15:21] . Okay, so yeah, there's always some conversation, right? Um, what conversation do I want to start with? Um, I don't know if anyone checked
[00:15:31]  out my article. Um, this is an old tweet, but I just want to talk about it briefly again because every time I talk about this, it seems to confuse people
[00:15:39]  a little bit. But just in case you don't know what I'm talking about. Um, it's fine. I'm gonna go here to go to a tweet that
[00:15:45]  we go back into Twitter, but. This, this little snippet of react code is, seems very innocuous. You're in an event handler and you update the
[00:15:55]  count and then you log the count, the drive count and the what, what's in the dog. And, you know, for most people who use react, the answer
[00:16:07]  to this question is incredibly obvious. You're like, well, look, I grabbed this count. It was, it was here. Right. And it's just a variable
[00:16:13] . So obviously when I just. Set account with plus count, hasn't been changed. This is the const. This is going to be zero and this is going to
[00:16:22]  be zero. Cause that's what it was last time. And obviously the Dom hasn't updated it and it's gonna be zero. But the funny thing is every framework views
[00:16:32]  their state and state derivation completely different. And that was like the whole thing. We've talked about this a little bit before, but like the numbers are actually different
[00:16:42]  in, in a whole number of frameworks and. The article goes into this for more detail, but the thing that I actually wanted to talk about was that. The thing that
[00:16:52]  I want to talk about was that like. What does this mean to the developer? I mean, that's, I mean, that's, that's fine. You
[00:17:06]  know, I write frameworks, but does this, or should this matter to you? And I even had some framework authors come in the chat and be like, like, I
[00:17:12]  don't get the article and it depends on your tool. Right. I just explained how in react, this makes a ton of sense. And you're like, how could
[00:17:21]  this work any other way? But if you look at Svelte, then let me kind of get down to a Svelte like example. Although I actually have
[00:17:28]  the codes and worlds. You similarly, you might ask how it could work another way because in Svelte, if you want to set the state, you have to actually
[00:17:36]  increment the variable. There's no function calls. So like you, you might ask how it could work another way because in Svelte, if you want to set the
[00:17:44]  state, you have to actually increment the variable. There's no function calls. So like you, if you want to up it, you have to go plus plus,
[00:17:51]  which means, well, this has to be one. So how could anything be different? But where the, where this gets kind of interesting though, is yeah, who cares
[00:18:00] ? So what, like this one updates, this one, it's just like, sometimes you build logic around this and that logic's reused in multiple places of it might
[00:18:09]  be called from an event handler. It might be called from an event handler. It might be called from some rent something that happens during render in the framework. And suddenly
[00:18:19]  there can be differences between what's going on. And if you've used one framework and you move to the other framework, you're like, oh, wait, what,
[00:18:26]  what, what's going on? Like I started with Svelte and react here because they act kind of like you just look at the JavaScript, but there's another view
[00:18:36] , which is the reactive perspective. And from that, you're just like, no, no, everything has to stay in sync at all times. So, you know
[00:18:44] , that opens a lot of questions because you could treat it like react. You could treat it like Svelte. You could treat it like view. You could treat it
[00:18:52]  like solid. And that's kind of the boat where I'm sitting at when I, when I read a framework like solid, I can emulate whatever behavior I feel like.
[00:19:00]  And that's kind of why I wrote the article. Cause it's really difficult. Um, and the thing is, this isn't limited to like VDOM versus
[00:19:08]  non VDOM or any of that kind of stuff. This is just a reality of, of how you had a state manager because some people look and I'll go back
[00:19:16]  to the beginning here and, and look at this and they go, okay, well, any, anything with zero on the end is obviously kind of like a VD
[00:19:24] OM ish, right? React VDOM, view VDOM. Svelte isn't a VDOM, but it has a component like re-render
[00:19:31]  cycle. So that kind of makes sense. And then solid is like perfectly fine grained. So it updates, but I'll tell you a little secret. Inferno
[00:19:37] , a JSX VDOM library does the same thing as solid. At least the last time I checked, and you could, and the reason is they don't have
[00:19:46]  hooks. So the syntax doesn't make sense like this, but when you are in an event and you reference like this dot state, like the class component stuff, they
[00:19:54] , they grab the latest state. So it, and, or, and if you set it, it actually does it, they don't do batching and it does it
[00:20:04]  immediately. So from that perspective, you could have a library completely different. Um, like Inferno and have it have the same, uh, console log there as
[00:20:15]  solid. So this is not that kind of dry. This is why these kinds of things are interesting to me, right? Because even within the same framework, you can get
[00:20:23]  different behavior, right? Um, uh, like if you're in view, you can actually delay stuff by putting them in effect. Cause effects run later, whether that
[00:20:37] 's intentional or not. I don't know. And in, in react, you can do some cool stuff. If you use the function form, I don't know if
[00:20:43]  a lot of people know this. Yes. It stays zero outside, but these actually apply on top of each other. They don't replace each other. So like you,
[00:20:53]  if you call set counts with the function form, this will result in two. Whereas if you don't use the function form and you just go count plus one, it
[00:21:00]  could be nothing but one, right? So yes. And event handler is, is, is it, thank you. Someone brought this up in chat, but event handler is
[00:21:12]  actually, uh, yeah, ASIC function, but I'm gonna, I'm gonna actually tweak this a little bit. Event handler sometimes are handled by the framework. Like
[00:21:20]  we do event delegation. So we could batch them if we want to, like in solid, it is theoretically possible that I could use the regular update timing inside the event
[00:21:31]  handler. So it could look something like view if I wanted to. Sorry. I'm just scrolling all the way up here. Um, something like views timing, like,
[00:21:38]  as in, it's just like progressing through. But, but, and, and, and here's the big, but here, um, set time up. Are you
[00:21:47]  gonna catch every set time out? That's not code that the framework controls. Well, if you ask different frameworks, some might say, yes. Like angular has this
[00:21:54]  thing called zone, which they do. They were like basically going any async callback. We're gonna inject ourselves and be able to do this stuff and handle it,
[00:22:02]  you know, properly. So like, there is a whole slew of decision points here. This is not just like, oh, the way I, the way I wrote
[00:22:11]  it is the way it works. Um, that was like a comment of like, well, how could ES six work any other way? Well, I hate to tell you
[00:22:16] . Nothing is just JavaScript anymore. From my perspective, everything. Like when you write JavaScript, you basically cannot guarantee what you get out the other end. Um, uh
[00:22:27] , this started with the transpilers a few years back and this is just continuing. Like let's, let's face it. Like it, like everything's a DS
[00:22:35] L. Um, so I, it's interesting. Cause this is at odds with people kind of looking at the whole, like no builds thing. I said, I
[00:22:44]  try not getting into the conversation cause in my mind, like that is one flavor. That is something you can do. But like, if you think that it's just going
[00:22:53]  to go back to that, like you've already, you, you kind of like already lost, like, like we've gone way past that. Um, like anyway
[00:23:05] , but yeah, everyone values different things. I love this Dan tweet. This is what kicked this off again. Cause he's like, we really like consistency. Right.
[00:23:17]  And he's right. Like react, it's hard to get more consistent than react because here's the thing in reality, things don't always go as, as you
[00:23:26] , as you intend. And the only way to make sure that things never get out of sync is like, be like, we are done before we do anything. Like if
[00:23:33]  something goes wrong, react is still consistent. Um, it, it just, but you can make other models consistent in that they consistently error and whatnot. So like, there
[00:23:44]  is a lot of range here. You ever, we can argue and debate this forever. I, I, the, the Marco team, when we were working on Marco
[00:23:51]  six, hated the, like, couldn't, we couldn't make up our minds so much that we were just like, okay, fine. If someone tries to just even
[00:23:57]  read this value in the state, we're just going to throw. We don't know is past future, whatever. Just, just throw. Essentially. Once you set some
[00:24:04]  state, don't be reading from it. Um, I don't know if that'll scale and we'll have to make a decision there eventually, but it's just like
[00:24:10] , this is, this is the kind of weirdness you have when, you know, talking about standards again, people are like, huh, we should all move towards
[00:24:20]  the same reactive library. Like what star beam we saw a few weeks back or whatnot. I, I don't know. I, I'm not sure we can get everyone
[00:24:26]  in the same room and even agree on, on something like this. Like, I mean, this, this is an interesting challenge for anyone working on agnostic, uh
[00:24:36] , tools. You know, I, I think one of the things you can do is just kind of step back and go like, well, we'll let each embrace
[00:24:43]  their own model and just give them the pieces they need to work. Which is why I'm like a huge fan of Tanner Lindsley's work. And it's like
[00:24:49]  component list stuff. Like he's like, look, I'm going to define the update model for my stuff. You make it work how you want in your framework. And
[00:24:56]  we're just not going to fight with each other. That's a really good way to do things. So yeah, just throwing that out there anyway, that because as
[00:25:04]  I said, as a framework author, I hit this stuff all the time and you know, like, uh, we had an interesting question. It was like, okay.
[00:25:14]  Some people know that, uh, with reactivity, when you set a value, um, and it's the same value. Some times, most of the time those libraries
[00:25:25]  go, okay, it's the same value. And they don't notify, they don't propagate the change. And some libraries let you say what that equality function is
[00:25:33] , like whether it's equal or not. But like, it opens up a whole bunch of questions. Like, do you prevent the write or do you prevent the notification?
[00:25:42]  And I bet you go to different libraries. You're gonna get a different opinion on that. Very subtle difference. But it's, it's, it's the difference between
[00:25:48]  let's pretend that you start a counter at zero. And you're like, I only want to do the, to notify or, you know, do the action.
[00:26:01]  If they move more than one away. So if they move one, I'm not going to notify, but if they move two, it's been enough. And then we
[00:26:08] 'll, we'll notify. If you believe that you should block rights. Well, you go to zero and you start counting up, you go to one. Okay.
[00:26:15]  Don't notify you go, you go to two and you go, oh, two is too, you know, big enough for farther enough away. Let's notify. And
[00:26:23]  then you go to three. It's only one away, go to four and you notify again, because it's two away. But if you believe that you should only block
[00:26:31]  notification and you can do the rights, well, then it'll actually never notify. Because one is one away from zero, two is one away from one, three is
[00:26:41]  away from two. And if you don't get what I'm saying, I'm sorry. I probably should write it down to visualize this. But what I'm getting at
[00:26:46]  is like, there are a ton of subtle differences on behaviors like this, way more than you realize. And sometimes you won't hit them, but like, they are
[00:26:58]  there right below the surface. Just do, just do everything async. Yeah. I mean, well, the just do everything async though is react model, right?
[00:27:12]  In a sense, um, because everything's in the past until it commits the, the only challenge of doing everything async, of course, is when people get really tri
[00:27:21] pped up when they update something like what, why is it not updated? I think most people have gone over it with react, but that is still a thing. Right
[00:27:29] . Okay. So let's keep on going. Right. I talked about consistency, talked about trade-offs. Um, I read another article this week that actually enjoyed a
[00:27:40]  lot. Um, see if this opens a new tab, honestly, the reason I enjoyed this so much was he basically was talking about people on web dev and social media
[00:27:54]  and he categorized them all into five buckets. And this is just amusing to me because I don't know if this is completely true. And he's talking about, I
[00:28:01]  can tell he's talking from a slightly different like group of tech, Twitter or so than I am, than I talked about, but I started just putting faces to names
[00:28:10]  and he, and he kind of just talks about our sort of faith like faces to like all the, the descriptions of the different types of. Uh, people. And I
[00:28:17]  think it's interesting to kind of look at it this way as anyone who's like discerning of information, you know, you go, what's my source, what
[00:28:23] 's their angle. It's kind of useful to like understand what motivation or angle they're coming at in these conversations to get the most value of the discussion point. And
[00:28:33]  he's actually kind of talks about that in this article, which I thought was great. He, he basically categorized, uh, you know, people talking about tech on
[00:28:39]  Twitter into five, five categories. Um, there's people who are describing how things are done, where they work and assume that they're, if you're describing something
[00:28:47]  different, you must be describing it wrong or not in following, you know, the best employment practices. They just assume that like what they've been introduced to has to be
[00:28:55]  the standard. That's person one person two is describing how they prefer to work. And they're assuming you're, if your take is different, that means you're making
[00:29:05]  a big mistake. Um, yeah, we we've all met those people. Um, and honestly, I love it because I, I love having all the spicy takes
[00:29:14]  come in, but you've definitely seen that category. Then, um, there's educators, you know, teaching about a specific approach. Maybe they, they are teaching about
[00:29:24]  a specific framework. And while they're aware that there are many different solutions to each problem, um, you know, different things that they describe the ones they teach. So
[00:29:34]  they are also probably assuming that you think they're teaching. Um, the wrong approach would say they are also probably assuming that you think they're teaching the wrong approach for
[00:29:45]  bad reasons. Right. So yeah, uh, it's interesting, you know, like this kind of tie into like, I'm an educator. I teach react. Um
[00:29:54] , you know, that can be also like a certain perspective or blinders person. Number four, they are testing out different approaches and weighing the pros and cons of each,
[00:30:04]  and then use a real data. Um, and they assume that you can't make a decision in a vacuum, which is a pretty good assumption admittedly. Maybe I
[00:30:12] 've been called out. Okay, fine. And then person number five, um, they, they're concerned with the long-term sustainability of the field. They keep,
[00:30:22]  they keep encountering highly flawed websites and web apps and they're assuming regular devs can do something about it. Like they like blaming people and frameworks for like not supporting the
[00:30:31]  web. Hmm. I think I know a couple of people like that as well. So yeah, anyways, this article is great. Um, yeah, people going on
[00:30:41]  the chat. I'm the second type. Yeah. I think a lot of the shit posters and like influencers actually fall in the second type. I mean, it's fun
[00:30:48] . Right. Um, thank you. Um, but yeah, I, I love this article cause he gets into a lot of the, you know, cultural differences and
[00:31:00]  all that, like this, this is the article really deep, but this got my attention because his conclusion was interesting. Um, which was basically we talked too much. He
[00:31:10]  was like, at a certain point, you just got to show it, you know, cause he, he, he, he's just saying like, what words actually mean
[00:31:16]  like this, this gets into, you know, an area that's probably not a lot of web devs kind of spend their time in, but he was like,
[00:31:23]  we need good examples of good apps. Like that's how you sell it. Stop like doing theoretical armchair racing, um, back your stuff up with data or whatnot.
[00:31:31]  And to be fair, we're all a little guilty of this. I think he's just frustrated about the arguments happening on Twitter and like everyone's right. And there's
[00:31:38]  just, you know, but there's no, there's no backing. We just keep on flittling around in the circle. So, and it was good read for
[00:31:45] , for, for anyone who wants to check that out. I enjoyed it immensely. Um, so, you know, it, it, it's right on point.
[00:31:54]  I'm the third type yet. I feel lost if I'd slink me for three months, build a prototype in one week. Don't make some more properties. Yeah
[00:32:08] . Yeah, no, that, that, that's, that's the thing. And I, I feel sometimes I get pulled into this stuff more and more, uh,
[00:32:14]  these days because of, uh, I don't know if it's just more conversations to be had. I was, I wasn't on Twitter until 2019, uh,
[00:32:21]  late. Like it was practically 2020 when I joined Twitter and I was just like doing my stuff and being super productive, productive. The second I joined Twitter, like productivity went
[00:32:30]  down, but, um, I mean, that's kind of why you're all here now. Um, yeah, met so many people, so many opportunities. You can
[00:32:39] 't go one way or the other. It's good to get your, keep your head down, but you know, there's, there's more to life. Right
[00:32:47] . So yeah, it's good, but, um, yeah, so which ties me actually into, uh, another conversation that I had this week. Cause I had the
[00:32:57]  pleasure of hanging out with, uh, uh, Michiko Hevery again, um, this time in, uh, in person. And, uh, I've, I
[00:33:03] 've had one person, uh, uh, once or twice before, but he actually had me over to his house, made burgers and stuff. And it was a great time
[00:33:10] . And we got to talk a bunch about, um, a few interesting topics. And one of the ones actually funny enough was, was, uh, something I want
[00:33:19]  to, I want to pull out here from my bookmarks. Uh, can I open a new tab? Yes, I can, was, uh, this table he
[00:33:26]  posted because, um, well, he got, he got some fun blowback from this one. It's always hard to write a table that you can categorize because like
[00:33:36]  you're gonna offend someone. it doesn't matter. Even if you're trying not to offend someone and sure enough, this table offended some people. Oh, Michiko
[00:33:45] 's in the chat. Yeah. I wanted to take a minute to talk about it. Um, because essentially, uh, yeah, it's this, this, this is
[00:34:05]  not meant to be that offensive or that that's surprising. I think we just dredged up like the remainder of the people working on PHP websites. Um, what
[00:34:13] , what this is, is, is just talking about the fact that it's difficult to scale developing two apps that layer on top of each other. And that was where the
[00:34:25]  web started. Right. I mean, it started with like some static HTML, but as things got progressed, we're like, okay, we have the web server side and
[00:34:31]  we have the client side, and these are two distinctly separate things. Right. So you had a lot of performance at the beginning because there's just static HTML.
[00:34:38]  And then you started adding, adding stuff to make it interactive and it just got harder and harder. And then. You know, those tools to add interactivity got better like
[00:34:49]  jQuery and boot tools, but it's, it wasn't until the, the, the kind of modern component library time period or a little bit before that, you
[00:34:58]  know, it's angular one, like there there's kind of been a split here depending on perspective, but like angular one knockout. like, you know, like
[00:35:06]  the, you know, it's just like, you know, like, the component libraries we know. And I feel like at that point we suddenly saw this, you know
[00:35:16] , single page app, this kind of flipping point. But as I mentioned here, we just had a ton of JavaScript. like, you know, it's a,
[00:35:22]  you know, it's a, you know, like a slow startup. The thing is, you know, we realized this is a problem and we want SEO and stuff.
[00:35:31]  So we moved work to the server. And the truth of the matter is moving to the work to the server does make things better, but it actually doesn't change very
[00:35:39]  much. Um, at least in the places that are, are, are, are weaker. Right. Like if you look between these two rows, you probably can't even
[00:35:47]  tell the difference. So all Mishko was getting at, he was like, yeah, quick, we solved it. Generation three, done. I mean, that's
[00:35:54] , that's, that, I mean, that's, that's the sign of a good, of a good, what he almost kind of, I don't think this
[00:36:00]  is going to be like shit posts, but like a good, one of those, like, that's all you need to say, right? Just throw it out there
[00:36:05] . Don't worry about it. But obviously, yeah, encourage some stuff. I think this is interesting because there has been a lot of talk about generations recently. And that
[00:36:14]  last article I was talking about, they talked about generations of it too. And the thing is, I could go, I think everyone has their own kind of marker of like
[00:36:26]  what makes a generation, right? I was just talking about how even like angular one to angular two for me felt like a half generation gap or generation gap, like,
[00:36:37]  you know, from like that backbone time to react time was like a kind of a, a bit of a switch. And yeah, we're going to draw the lines and
[00:36:47]  the hardest thing to do right now. And the hardest thing to do and always in general is identify when the new generation comes in. Because I have no doubts that quick
[00:36:56]  is going to be part of whatever this next generation is. Have we landed on that next generation yet? I don't know. Right. These things actually happen incrementally.
[00:37:05]  They're not just like, right. And this is sort of the, the, the interesting thing for me because I've, people have been doing this a lot recently
[00:37:16] . And it's not just people who used to work on angular. Igor from angular released an article a little back talking about the generations. Yeah. I think that it's
[00:37:26]  just very clear to a lot of people that things are changing and kind of embracing that we're kind of like going, okay, what's the next thing. And the
[00:37:35]  problem is when you do that is there's actually multiple next things going on, like little pieces all over the place, hooking onto parts of it, whether the whole solution
[00:37:43]  makes it across the divide is another question, but there are a lot of next things going on. And as always, when there's a lot of next things go on,
[00:37:51]  it's like, how do I wrangle it all in and generalize it and be able to like talk about it as a thing. And people have been trying to do
[00:37:59]  that for a couple of years now. You might've heard remember hashtag transitional app. That was like an attempt at kind of wrangling this in. Some people rejected
[00:38:07]  that because they're like, no, no, what we're doing is too different. Or, you know, this is kind of misuse or whatnot, but like,
[00:38:12]  we're still trying to do that. Right. Some, on the other hand, someone might point at their very specific technology, like resumable components. That's next
[00:38:20]  generation. You know, or, you know, component lists, you know, that's, that's the one that I would go. I said the next generation is breaking
[00:38:28]  things down for further than components. Right. And actually quick has that element in, in truth too, but this is just definitions. These are just things that, you
[00:38:37]  know, I'm specific part of, I never feel comfortable until stamping my approval on that generation kind of thing until we can answer the complete app architecture question. And for
[00:38:49]  me, that always comes back to the same thing. Routing. Um, which is the topic today because I, I think routing is incredibly important. Uh, so yeah
[00:39:04] , I, we'll, we'll get back to around in a minute, but I just want to throw that out there. I think, I think in hindsight,
[00:39:09]  when you look back and you look at the generations, you can actually see a certain lineup between like server-side routing, initial client-side routing with kind of stuff like
[00:39:19]  hash date, cause like you couldn't preserve it. Then push date being like the, the dawn of the kind of modern, push dates kind of what enabled SSR.
[00:39:26]  If you think about it another way, because you could actually like go to a URL and it could be the same URL if you navigate it from things, the whole is
[00:39:32] omorphic thing. And I think we're due for a new type of routing solution. Quik's working on it. They did a stream about it last week. Um
[00:39:40] , react server components are working on it. I think, I think that's where the interesting stuff is happening. Um, uh, I should mention the guys, Nate from
[00:39:49]  Astro is also working on it. Like there, um, there's, there's a lot of people working on it. And I think when we see that. Find
[00:39:55]  its way, then we can go ahead and stamp our gen three. But until then, you know, I'm going to enjoy people arguing over these charts. But yeah
[00:40:07] . Okay. I mean, there, there was actually a, just before we get into the topic, uh, for today, there was actually, um, I, I
[00:40:16] , I, I, uh, another couple good conversations with Mishko. And I just wanted to bring them up. And I think just briefly here, cause I think
[00:40:22]  they're gonna be a lot of fun, uh, in the future. We had a great talk on how to hide, how to benchmark, uh, hydration. And
[00:40:29]  I had an idea, but I was worried that it might like be unfair to certain frameworks or, you know, approaches or slightly favorite different ones. And Mishko was
[00:40:38]  just like, no, that's, that's how you gotta do it. Don't, don't worry about that. He's like so confident in what quick's doing
[00:40:45]  that he was just like, no, even if this like slight loading timing changes, he's like the other, you know, if you've got to fully hydrate
[00:40:55]  everything, then you're, you're gonna be in trouble anyway. So in G in general, um, we were the, the key to the next set of tests for
[00:41:04]  kind of hydration have to involve interactivity. You can't just stop when the page loads. Um, and I know there's tests and stuff they're working on,
[00:41:12]  uh, on the Google team, but we kind of proposing this idea that we load a page with, uh, you know, a reasonable amount of interaction and hydration requirements
[00:41:23]  maybe. And then what we do is as soon as we can, we click something to see the timings of that. And then we pause a moment and then we
[00:41:34]  click again and do the set and do the interaction basically a second time. And those three metrics should give us a good visual, um, of, of what the costs are
[00:41:45]  from initial time loading, hydration, uh, initial interactivity and secondary activity. You know, like if you have to, if on the first button click, you have
[00:41:53]  to go load a script that takes some time if, but you know, maybe you can click that sooner if your app isn't sitting there hydrating, you know? So
[00:42:01]  like, it's gonna, I want to see if we can find ways to actually, uh, see the impact of these decisions. I mean, it's not just so
[00:42:12]  I can make more comparison charts and write more comparison articles. Um, I'm honestly curious because a lot of work has been going into solid and I need to, usually
[00:42:22]  that's how I make my decisions. I make my decisions based on benchmarks, um, and, and tests. And the trickiest part of coming up with the right tests
[00:42:28] . So I was very stoked that, um, Mr. Go was on the exact same page as me. Um, and I'm more than willing and welcome to talk to
[00:42:34]  others about how we can approach this kind of benchmarking. Um, right. Um, but yeah, all in all really great conversations. We talked a bit about, uh
[00:42:43] , uh, you know, solid, quick integration, perhaps, you know, Um, I think we're in a really good place because I kept on talking about stuff
[00:42:50]  and he's like, man, Ryan, what you want is quick. You just keep on telling me, uh, what you want is quick. And I'm like,
[00:42:55]  yeah, for, for the most part, but I want fine grained rendering. And, and, and Miss was like, yeah, I mean, fine grained rendering
[00:43:02]  would, would probably be great. But you know, I, so I, I, I'm liking this right now. There's, uh, you know, a few
[00:43:08]  different zones going on and I actually like that there's projects like Astro and actually in realization projects like quick, which you're focusing on the architectural elements of what,
[00:43:19]  you know, looking at how you build the apps. Um, and that there's room for, uh, things like solid, which focus on. Say the components themselves.
[00:43:31]  So the, like the ergonomics of actually writing and the performance of the actual like rendering or the low level performance to come together and maybe we'll see how the best
[00:43:42]  of both worlds. So yeah, really, really great conversations all around. And, um, I, you know, it's, it's hard being in a new framework
[00:43:54]  and, you know, putting yourself, putting it out there and, you know, this is a fairly saturated space and that's something that we all have in, in common
[00:44:03] . So being able to meet with other people working on new frameworks has been amazing. And being able to have these conversations and, you know, see the shared, uh
[00:44:10] , challenges. It has, it has been great. And, um, to that end, I'm actually going to be on the builder stream on Thursday next week. And
[00:44:19]  we're going to actually do a whole stream on like, why build another framework? Just, I got guys from quick myself. We're just going to talk about like,
[00:44:27]  does it make sense? Should people just, how does that become the answer? Why build another framework? I thought, I thought it was kind of a fun topic
[00:44:35] . Um, so we're gonna, we're gonna do that on Thursday. Um, and then on Friday, um, next week, um, for my Friday stream,
[00:44:42]  I'm actually gonna do it on quick city, uh, which is, uh, quicks upcoming, uh, meta framework. Uh, so I'm gonna have, uh
[00:44:49] , I believe Adam and Manu from the builder team on, and we're gonna talk about that. Um, and for all you guys wondering what solid use, don
[00:44:56] 't worry. Solid start stuff is coming soon. I apologize. I am a bit of a perfectionist. Um, we've had so much of this good stuff in solid
[00:45:04] , um, that start that I've been kind of leaking and hinting for like practically a year now. I just, I like shipping stuff that works and people probably got
[00:45:13]  to push me on the other side. Um, a little bit harder, uh, because it took me five years to release solid 1.0. So put that in
[00:45:21]  perspective, but we're, we're getting close. It's all starting con you can expect content for that coming soon. All right. Anyone still here on the stream?
[00:45:30]  Yeah, hopefully, uh, you know how I get on these rants. So, yeah, I think, I think that's it for this week in JavaScript. And
[00:45:43] , uh, so we should, we should, uh, we should move on. Um, I, I, I, I've, uh, I've been having a
[00:45:50]  lot of fun. I have any really good time this week. It's been super busy between visiting Mishko, been visiting, uh, um, geez, I
[00:45:59]  did D and D on Tuesday, uh, that's new hobby doing streaming D and D, uh, did a community meeting. Finally, last night, I got to like
[00:46:07] , sit down and talk to Ryan a bit about what we're going to be talking about today. And so I'm going to, I'm actually going to welcome Ryan onto
[00:46:14]  the stream right here. Uh, for those of you who don't know, Ryan Turnquist is the, uh, one of the authors, co author of a
[00:46:25]  solid app router or soon to be rebranded at solid JS slash router. And, uh, yeah. And, uh, I have him here to talk about all
[00:46:34]  those great things. So, uh, let's welcome Ryan. Ryan Turnquist: Hey, thanks for having me on. Been a long time coming, I guess.
[00:46:40]  Ryan Turnquist: Yeah, definitely, definitely. Ryan Turnquist: I was hoping to get on while, you know, you still had your primitive technology.
[00:46:45]  Cause now I'm like using just air air pods and laptop cameras, but it's all good. Ryan Turnquist: Yeah, no, it's, it's,
[00:46:54]  it's all good. Uh, these things get here, uh, eventually. And honestly, I don't know if my lap, if my laptop starts overheating and the
[00:47:02]  fan kicks on, I I'm going to look plenty primitive at that point. Awesome. Yeah. Some people saying hi in the chat. Ryan Turnquist: Yeah
[00:47:14] . So, um, what did Quince and another Ryan work on a router? Yeah, there's a, there's a lot of us, aren't there? A
[00:47:20]  lot of Ryan's working on it. Ryan Turnquist: Yeah, no, I, it's funny. I didn't know like any, any Ryan's growing up
[00:47:30]  and now I feel like, yeah, click everywhere. Ryan Turnquist: Yeah. So, uh, I, I've got Ryan here and we're, we
[00:47:38] 're going to talk a bit about some, uh, you know, details in solid writer and that, but I want to, I want to actually kind of like, before
[00:47:44]  we get in there, I just want to talk a bit about this because this topic has come up a bunch and I don't know why, I think it's just because
[00:47:52]  whenever, uh, a library makes a big release, everyone's like, oh wow. You know, they've, they've redefined the, the, like the
[00:48:01] , the whole universe, you know, and this is part of what I was talking about previously about there being kind of like a JavaScript fatigue thing. Cause every time something comes
[00:48:10]  out, you're just like the, you know, the whole world is shifted. And if you don't use that, you're not doing things right. Ryan Turn
[00:48:16] quist: And nested routing has gotten a lot of hype again and things like data, data, parallelized data, fetching and whatnot. And this stuff has been
[00:48:26]  here for ages, but it has actually progressed and changed over time. And I think that's people don't spend enough time kind of realizing or recognizing those subtle differences. So
[00:48:39]  I'm going to try my best. And with Ryan's help possibly, uh, kind of talk about this a little bit, because I, for me, it's
[00:48:47] , it's a hilarious full circle, but I, I don't think it's actually why it is, isn't that obvious. And it kind of ties into our own
[00:48:54]  story of how solids routing kind of came about, but nested routing, as far as I can tell, I, and I don't know the very first instance of it
[00:49:04] , but it came out of the rails community in the mid to late, uh, two thousands that it might've been somewhere else, but, um, rails had been
[00:49:13]  playing with the nested routing for the way that they could like put their views together. Like they're, they're in their, their whole kind of NBC partial thing.
[00:49:22]  And it is very little surprise that a very rails based developer who moved into JavaScript decided to take that pattern with them. And now what I'm talking about is, uh
[00:49:37] , um, you who to cats and the Ember team. Right. And I can't pull up the docs. I don't think from Ember back in like 2012
[00:49:47]  or whatnot, but I I'll, I'll tell you this much. Ember in 2012 had nested routing very similar to what we see today where you could,
[00:49:57]  you know, load the page and have different parts of the page swap up, um, based on the URL. Actually, I guess the first question I should have in chat
[00:50:05] , does everyone know what nested routing is like before I get like crazy into it? Like, I mean, it's, that's a weird way to ask it out
[00:50:11]  because people are going to chat and be like, uh, I don't know. Like no one wants to say they don't know this thing, but why don't
[00:50:18]  you, why don't you tell us? Yeah. I mean, the funniest thing is I I've, I've, I've done this drawing before and, and then
[00:50:25]  I'm like, oh, am I going to draw it again? Use the Scala draw. Scala draw is great by the way. But honestly, now I have
[00:50:31]  a really great way to show nested routing out thanks to another project, um, that exists that has popularized nested routing. Um, and you, you all should
[00:50:41]  are probably familiar with it. Um, and that other project is remix, right? They were not the first, but they have a very nice visual on their website,
[00:50:50]  right? So you can see that example.com loads this page sales is this section, maybe invoices this section. And then finally they have some like extra information here
[00:50:59] . And the key part of this very simple example is that as any section of the route changes, we swap out things like an onion. So if you switch from inv
[00:51:12] oices to subscriptions, this is the content that you change, right? If you switch from sales to accounts here, then this is what the content that changes. And this
[00:51:26]  is the, you can see how people can naturally fall on this pattern, but, um, Ember really, um, standardized it in that they had this whole configuration based
[00:51:36]  routing and they tied it into their data model and everything just wired up lovely so that you can go, when you change this, tell me what, you know, data
[00:51:45]  you need to fetch. And then you kind of have this thing where the data loading and the UI is partitioned onion wise. And this is something that they had right from
[00:51:57]  the beginning. Um, Ember could wire it into through their models and, uh, very soon after Ember router came out in 2012, I think it was,
[00:52:06]  uh, 2013 towards the end of 2013, maybe early 2014. Uh, like only, I, I don't know, six months or within the first year of react going
[00:52:16]  public react router is created. And right on the thing, they're like, they were like basically very, we are very inspired by Ember router. And you see
[00:52:26]  that inspiration still to this day, because Ember router was the one that they, they had, uh, they use handlebars type syntax. If you, if you've
[00:52:34]  ever seen it, I can think it could probably pull up Ember. Um, see if I can let's pull it up here in docs API reference, is that
[00:52:42]  this too heavy? Yeah, no, let's, let's try guides. Yeah. Uh, not defining your route. I want to link between threats. They, they
[00:52:54] , they had, oh, okay. Yeah. They've changed this into a component now. Okay. So nevermind. Um, that's no fun. Okay. Sorry
[00:53:03] . Back in the day, I know this cause I was an Ember developer. Um, they used to use their handlebar syntax. First stuff like this and they,
[00:53:11]  they, they're, they're the ones who introduced to, you know, how links in react router don't use href. They use two that came from Ember
[00:53:22]  originally. Um, anyways, yeah, of course they changed their API to, I can't show it, but what I'm getting at is like the past had named,
[00:53:32]  it was almost a straight port of Ember router. And then over time they were like, okay, instead of navigating to paths and parameters, they actually changed it to
[00:53:41]  navigate to actually strings like, uh, like, like we do now. Um, but they kept the two field. Interestingly, anyway, um, in, in general,
[00:53:51]  uh, what, what these systems had that was really cool, um, maybe not in V1, but by V2 or whatever, was that they actually handled asynchronous navigation
[00:53:59] . You could actually be like, okay, before this route goes, we can hold things up perhaps. And if we can, uh, you know, we can cancel
[00:54:08]  the route or we can load some data and then complete the partial of the route. So you have to imagine initially with this nested routing, things are kind of like
[00:54:17]  just synchronous and they just like flow through and then you're like, oh no, I need to load stuff. And then they kind of produce these kind of async,
[00:54:23]  uh, waterfalls essentially. So each level could do their nested calls. Um, and this is a time period before people were using code splitting or whatnot. So like
[00:54:33]  just to kind of put it into perspective, like no one was like worrying about like loading the JavaScript off the page. You just have like the single bundle. So this
[00:54:40]  was just like, uh, you just do a couple calls and usually if they're nested, they kind of depend on each other. Like you need the sales to do
[00:54:46]  the question on the invoices and whatnot. So no one really thought much of it. And this was like sort of that first stage of nested routing. Um,
[00:54:52]  yes, that's, that's, that's what I said at the beginning. It was originally, uh, from the Ruby, um, community unless I misspoke,
[00:55:02]  I said Ruby, right? Yeah. No, that's what you said. Yeah. Yeah. Um, yeah. And, um, as Amber guides links, someone
[00:55:12] 's given me a link here, uh, template links. Yeah. I don't know if I'm going to, it's fine. I moved on, but you,
[00:55:24]  you, what I'm getting to is this was the first stage and this is actually where I actually jumped into this. Cause you guys know me, I'm like a
[00:55:32]  huge lover of web components. Um, and, uh, I built, I was able to be on MPM early enough to actually get web component router as a package.
[00:55:45]  So I made, I made my own router. If you look at this, this is actually like the same as the Ember DSL almost. And then like I have
[00:55:54]  these async things for code splitting and all this, like I eventually got there, but this is, this is a essentially my router that I released. When did I
[00:56:02]  do the first release? I can let's, let's go back six years ago. It says, I feel like I'd wrote it even before that, but whatever.
[00:56:11]  So that's what, like 2016. Yeah. Anyways, we were using this in my company back in 2014, but that was my first foray. I saw Ember
[00:56:19]  router and I was like, wow, we need this in our knockout web component mess. Um, and once I used that I'm like, this is, this
[00:56:28]  is just the way you have to do it. Well, and, and literally it is the way you have to do it because with a reactive library, because if you have
[00:56:37]  a VDOM, you can be kind of lazy on stuff. I know no one actually does this, but you could like key things so that like, let's pretend
[00:56:45]  that you did just re-render this whole page. Even when you're swapping from invoices to customers, like you didn't bother with the nesting. You
[00:56:52]  just go, screw it. I'm just going to render the whole page with a VDOM. If you keyed the sales component, it's possible to switch
[00:57:00]  the pages and keep the sales component because it has the same key with a reactive system. No, you blow out the whole thing every time. So you, you need nest
[00:57:12] ed routing. That's why from the very first solid demo and thing I did, right, like as soon as I had nesting, like right from the very beginning
[00:57:21] , solid has had nested routing. It's just, it's, you, it just doesn't, reactive libraries don't really work without nested routing. Of
[00:57:29]  course, I mean, there are plenty of reactive systems that, that have done that, but I, from my perspective, like it's an inevitability you'll end up
[00:57:39]  here. So yeah. And, but for some funny reason, and maybe it's because of that key thing I just told you around the time of react router four, they
[00:57:49]  just like chucked it up. They're just like, man, we don't need this anymore. Simplify the API, remove all that. Cause one of
[00:57:54]  the, there's some interesting characteristics of nesting routing. Um, in that they do all these, they do a scoring pattern against the routes to decide and what react router
[00:58:04]  four let you do was actually split the route to throughout your app. So instead of having a single centralized definition router, you could suddenly put the routes, uh, like embedded
[00:58:14]  in your component. And then it did like a first come first serve. So you got, you remove a whole bunch of like extra matching and reject knowledge. It's
[00:58:21]  actually simplify stuff. You remove a whole bunch of other things. And, and then you just trust through the react life cycle to do it. And that's where react has
[00:58:29]  been for a very, very long time. Right. And you still can nest routing. You just, you just don't define it all at the top level. And you
[00:58:40]  know, this, yeah, I mean, it gives, it gives you like some nice, like collate collocation of your like routing knowledge. So you don't
[00:58:49] , you know, on your, on your page, you just like say, Oh, here's the things that can be like part of this, you know, user's
[00:58:56]  page or whatever. You don't have to, you don't have to like know all that at the top of your page. Something like one of the big benefits. Right
[00:59:03] . Right. And, and it was just, yeah, it just, it just made things like, I can see the convenience factor, but it was interesting because stuff
[00:59:11]  like code splitting and data fetching were inherently full of waterfalls. And this, as I said, because the earlier systems, which were async had waterfalls anyways,
[00:59:21]  like I'm sure Ryan and Michael were just like potato, potato. Like they're just like, like I do it here. I do it here. It doesn't really
[00:59:31]  make a difference. Um, because you know, if people are code splitting, it's they're doing these waterfalls. If people are, um, fetching the
[00:59:40]  data, it's doing these waterfalls anyways, and they just kind of left it like that. And that was kind of where react router went and it made a lot of
[00:59:47]  sense for the time, obviously like I'm coming from a completely different channel because, and I think view some at some time I'm talking about 2016, it's kind of
[00:59:55]  on the same thing, same kind of channel because nuxt router is a nested router, right? Um, 2016, uh, sappers router was nested too
[01:00:03] . Remember I told you this, this thing about reactive libraries, absolutely needing, uh, nested routing view being both didn't, but view kind of likes to do everything
[01:00:14] . Right. So, you know, it kind of makes sense. Um, but for the react ecosystem, they kind of just embrace the waterfalls and it took a long
[01:00:22]  time for us to kind of come back around. So that's why it's kind of, it's been so long since that, like feels like five years. That's
[01:00:28]  why for react ecosystem, when this stuff comes in, there's something like, wow, this is amazing when literally every other framework and every tool has been doing this the
[01:00:36]  whole time. Uh, and I mean, there are differences and I, it comes in that at some point around 2017, 2018, some of the libraries started going, this
[01:00:49]  waterfall sucks and we have better tools now like promises and stuff in the browser. So, um, I don't know who did it first, whether it was like my
[01:00:58] , my app router experiments in the background, but the first one that got publicized was the sapper from spout actually, um, started parallelizing, uh, the
[01:01:10]  data fetching on this, on the server. And it's very similar technique to what, uh, remix does where they were like, let's, um, let
[01:01:17] 's, um, let's kind of like pull out all of the promise generation and, and run them all. And then, and then, and basically do that basically.
[01:01:28]  Um, okay. There's a, there's a comment in chat about keys and re-renders and stuff. Yeah. Do do, should I address this for
[01:01:38]  like two seconds? Um, key. It depends on the virtual DOM to be fair. Um, sorry, this little quick tangent, but depending on what type of virtual DOM
[01:01:52] , when you come across the same element or different elements, like they'll make decisions based on certain heuristics, whether they can keep that virtual node or whether to
[01:02:01]  re-render it. So I'm not sure that the question here is whether it's like the whole re-render cycle, the virtual bombs are going to do period.
[01:02:08]  Like if you tell them this whole page need to re-render, they're going to re-render the whole page, but they have this ability to kind of memorize and
[01:02:14]  use the key as a matching mechanism. I don't remember exactly what criteria they use to decide if it's the same node or not. But if you a hundred percent want
[01:02:25]  to make sure that you, they keep the same node, you put a key on it. It doesn't need to be a list. It doesn't matter. You
[01:02:29]  can use keys and react outside of lists. I just want to kind of point out that, um, that is like a guarantee. Whereas if you, uh, um,
[01:02:38]  if you just YOLO it, you know, like whatever, like on the page navigation, you may or may not get those parts of the page re-rendered
[01:02:48]  with reactor view or whatnot. It's quite possible that if you have the same element with the same arguments that these VDOM libraries are smart enough to go, okay
[01:02:57] , this has the same properties on it in the same element, I'm going to assume it's the same. Um, but like, it's an interesting challenge with these
[01:03:04]  kind of, like there's mutable and immutable VDOMs. And I don't want to get too far into it. Um, most patterns have fallen into
[01:03:13]  these basically mutable VDOMs and not purely referential and there's a whole bunch, it's better for performance, but it can, it's, it
[01:03:21] 's, it's interesting to say the least, uh, if you, if you're interested in this topic, uh, look for writings by a guy named Boris Kahl
[01:03:26] . Um, he's creator of the framework EV, which is arguably one of the fastest virtual DOM libraries. And he initially was very big on the, uh, mutable
[01:03:36] , um, VDOM side of things. And he published a lot of work in his benchmarks, his library so fast that other people sort of started copying that pattern
[01:03:43]  in years later, he was like, that was such a big mistake and immutable VDOMs are better. And he has, he has a whole bunch of writing
[01:03:48]  on that. Sorry. Just, just a tangent. Um, sorry. Yeah. I, I, I can get, I sometimes get pulled off on these tangents
[01:03:57] , but what, what, what I was trying to get at is, um, our tools improved and we were able to like hoist out these async waterfalls and
[01:04:07]  do them at a, at a, at a different point. And I'm, I'm actually really excited to kind of talk about solids approach when we get to it,
[01:04:14]  because, um, the approach that I developed was kind of different because we have our own primitive. We don't need to use promises or async await says, what
[01:04:22]  if to do this. So solid actually went all the way back to a synchronous, um, approach, which is weird for everyone, but works incredibly well. And I'm
[01:04:32] , I, but it is, that's how we, we got our parallelization. Um, that way it is, it is a hoisted method, but it's
[01:04:39]  a non-blocking method. So, um, yeah, we'll, we'll get into that in a minute, but I just want to give a little bit of
[01:04:45]  perspective here on what, like the whole kind of transition through nested routing, like, even though these things existed in the past, they were actually different. And that
[01:04:53] 's how we ended up with five years where the react ecosystem and it kind of diverged on routing solutions. And, um, honestly, I, I don't know.
[01:05:04]  I, I, I think remix came in and they're like, yeah, we got the solution. Um, and they knew they had the solution because they were doing
[01:05:10]  it five years earlier. Um, but even then it was a remix special and I, I'm super stoked to get on the work for Tanner. I keep on giving him
[01:05:19]  big accolades here. He built react location and he built the data fetching in into it. And I think that kind of pushed a little bit on remix and like
[01:05:25] , okay, yeah, we'll port this stuff back into react router. Um, which it's good because it's actually going to be a funnel into remix. And I
[01:05:32]  think it's a brilliant move because everyone's working on routing. Even next.js is working on routing. And, you know, I, I think, I think
[01:05:39]  this is actually a really good thing for the react ecosystem because react gets away a lot of times with being like, oh yeah, it's good enough. And now, you
[01:05:46]  know, whenever react kind of sharpens up and goes, no, no, it's not good enough. We need to do better. Like what everyone else is doing.
[01:05:53]  I think that's a positive benefit. And, um, yeah, so that, that's just why I thought this part of the conversation was important again, because there's
[01:06:02]  a lot of confusion around this because you know, there's going to be a group of people who say like remix invented nested routing with parallel data fetching. And
[01:06:09]  it's like, no, no, no, no. Like you can, it was different back then, but you can trace the routes or you can trace this throughout time
[01:06:16] . And, uh, most frameworks that are not react has been, have been doing a form of this, um, uh, you know, right from the beginning and the
[01:06:23]  parallelization probably showed up, uh, about four or five years ago, uh, shortly after remix or react router made that split. Okay. I mean, that's
[01:06:36] , that's good that they always plan to do that. Um, it just, I don't know what the timelines were. It was just interesting that, um, as
[01:06:42]  I mentioned, stuff like, uh, react location came out and like gave it to people like six months earlier. And then like, suddenly it was like, okay, like
[01:06:51]  I, for me, where I standing, cause I, you know, obviously we've had this stuff in solid forever and views had it forever and spelt's had
[01:06:58]  it forever or whatever. It was like, it was like, like, where is it? Right. Like it's long overdue. And, um, that's why
[01:07:06]  react location was like, like, it felt like a point here. Look at me. Like if that was the whole point of that prop thing. And if react location just
[01:07:14]  fades away again, like it, it, it did a great service for everyone. If, if it had any part of finally getting this very important pattern into react.
[01:07:25]  Um, so yeah, I mean, that's, that's, that's my history lesson. Hopefully that made sense to everyone in the chat, you all still here
[01:07:37]  to grab a drink. Thank you. What are you, what are you drinking tonight? Oh, it's just, it's just orange juice. Yeah. I, I
[01:07:51] , it's not, it's a lot less fun, uh, when it's earlier in the day. Yeah. View three parallel data fetching SSR from 3
[01:08:02] .0. Oh, good to know. So view 3.0 or like, so that would be yeah. 2020. Okay. Yeah. So that's what I'm
[01:08:10]  saying. It's, it's, it's been the last, they had nested routing for longer than that, but I guess the parallels data fetching has been the
[01:08:17]  last couple, couple of years. Um, so, okay. Let's, let's, uh, let's, let's, let's continue on with our conversation
[01:08:26]  for a minute here. Cause I want to, I want to talk a little bit more specifically about, um, solid story in here. Um, if there's no questions
[01:08:33] , it seems like the audience here, you know, familiar with stream knows what's up. So didn't really have to push too hard on, on, on nested
[01:08:40]  routing. Um, solids history for nested routing. I showed you my old project. I, when I started solid, I thought everything was gonna be web components. So
[01:08:49]  if you look at the earliest solid demos, like I made a hacker news demo and all this stuff, I built it all in web components using solid element and using my
[01:08:55]  router. And like, right from the beginning, like the first solid demos were, you know, you know, using, using, uh, this kind of approach, but
[01:09:06]  at a certain point I was just like, realized and I, you know, that web components, I didn't need them. I didn't even need components at all.
[01:09:15]  So I started, you know, lightening the load. And then I was like, I need a new routing solution. And I started kind of in the background creating
[01:09:23]  my router solid app router. And it, and the reason was like, I actually kind of left it open the community at first. I was like, oh, the community
[01:09:32]  is going to build routers, routers, but no one was building the router. I wanted them to build. Um, so yeah, at this, at this,
[01:09:37]  at this stage of the game, uh, it's funny when you're early on, you're just like, oh man, there's so many things I can do.
[01:09:42]  I don't want to do it. I mean, but I hope someone else picks it up. Um, I gotta give credit to maintainers who don't do that
[01:09:48] . They're, they're crazy. Like, uh, high five to Jared or whatever. Like he, he just like kept on finding new things. He's like,
[01:09:56]  yeah, okay. I'll build that too. Okay. I'll build that too. I just kept them being really conscious of the fact that like, if I build all
[01:10:02]  this stuff one day when people come, they're going to expect me to maintain all this stuff. Um, and I guess I didn't have, I wasn't that ambitious
[01:10:11]  at that point. I just assumed that like, you know what I mean? Like this, this would get out of my, my ability to, to maintain it.
[01:10:19]  And, um, actually a number five different routing solutions showed up for solid in the first, first year, since I open sourced it back in like 2018 to 2019.
[01:10:30]  And eventually in 2019, I was like, okay, those are great. I'm going to need to build my solution. So I started working on solid app router.
[01:10:37]  Um, but, um, one of the other solutions, the one that came predominant, um, before, before that, and let's see if I can find it
[01:10:46] , Ryan, let's see if we'll just get me to where I need to be. Yeah. Um, yeah. Was, was Ryan's, uh, router.
[01:10:55]  Um, yeah. And, and he had basically just ported react router. I, I, I, I'm not even sure you did. Okay. Your links
[01:11:06]  used ah, ref or did they use two originally too? No, they were age. I'm pretty sure they're eight. Yeah. So yeah, you know, I
[01:11:13] , I've been a dev for like, uh, professionally a dev for like since 2010 or so. And I, I, I kind of missed out on like Em
[01:11:24] ber, I guess. Um, so I started using reacts at like 0.12 time period or something like that. And just like, I was just like all in on
[01:11:34]  react because all previously before that, you know, we're all using jQuery and it's just like a mess. And so yeah, I was just like totally in
[01:11:41]  on react and, you know, eventually like react four or five just seemed like the state of the art. And at the time about, I don't know, it was
[01:11:50]  about three and a half years ago when I found solid. Um, and I was just like, Oh, okay. Yeah. We just need like react router in here.
[01:11:58]  Cause like, that's, that's like the state of the art. And I don't know what Ryan's doing over here. I think it seems weird. Like
[01:12:05]  nobody's using that. And then, um, yeah, so I built, I built like this kind of like clone of, of react router, uh, five, I
[01:12:14]  guess, except there was always something that bugged me about react router five. And that's like, when you have a link or something that relies on like the current,
[01:12:26]  like your current path through the route, like you always had to, like, if you wanted to render a link, you had to use like the current match path,
[01:12:35]  um, and to prefix your like link. So I always thought that was like super annoying. So that was like one change I made. And I think there's a few
[01:12:43]  others. I had this kind of like system for decoupling all the like browser specific stuff, kind of like what, what they do with their history package. Um,
[01:12:54]  but yeah, otherwise it's like pretty much other than things like Ahrefs is pretty much like a, a clone of react router. And I was like, this
[01:13:02]  is it. I see that. Cause you got like link and nav link. That's very react. We still have those. Yeah. Redirect. Yeah. Yeah.
[01:13:09]  That's just like copy all their stuff. And then, I mean, obviously it's like way different under the hood, but, um, yeah, yeah, no
[01:13:20] , for sure. And this, uh, this, this, I mean, you might look at these 40 stars here and go, eh, but for, uh, for
[01:13:26]  us, like this was like a huge library, um, at the time, like, like this is this, this, this, this was the router that everyone was using
[01:13:33] . Right. And yeah, someone mentioned here that it helped push this. See, I love that about react and you know, uh, I, I love, I
[01:13:42]  love primitives. I love composability. I love all those elements. I, I, and some people might even say like, I want, I like taking it even
[01:13:49]  further. Um, you know, like every part of solid and its reactivity was always on that. Like, even like in my head, even before I ever saw hooks
[01:13:57]  or wherever that, if we had a composition model from day one and, um, that's what I wanted to do. But the, no, the problem is when you
[01:14:04] 're a small framework and you just go, go at it ecosystem, the ecosystem's like, you have no router. And that was really the challenge that playing this kind
[01:14:14]  of balance. Cause I, I, I, I actually, I talked earlier about not wanting to build everything and maintain those libraries. I was pushed to, I, I
[01:14:21] , I had solid transition group, solid style JSX, solid style components. I just start, if you look, I, I did write a ton of solid specific libraries
[01:14:29] , um, against my better judgment. And yeah. And they're haunting me now. I mean, I was right on that side, but I, you need this
[01:14:41]  stuff. Ideally you can build a community around it and you'll find people who are capable and that's what we have did fine. But at the beginning I was just like
[01:14:48] , I just didn't know how to do that. It's because it's very different working in open source, um, in that aspect than working in a company. But
[01:14:56]  then again, it's also not very different. I just didn't understand that. I, I, I felt weird asking stuff from people or like, like being assert
[01:15:04] ive or anything like that, because they, they owe you nothing. They're just, you know, out there, but the thing people are willing to help. So if
[01:15:11]  you can find a way to, you know, nurture that or give them the support they need, then you, then like, you don't have to do everything yourself.
[01:15:18]  That was a learning lesson for me on these early days. So I would, I tried that. I was just like, go write it. And then it was like
[01:15:25]  five routers. And then I was just like, but none of them quite what I was looking for. Um, it's interesting though, because I feel like now,
[01:15:34]  well, I mean, for me, when I wrote this router, I was like, okay, routing is just like a sort of mechanical thing to get your URL, like
[01:15:42]  to get your page to match your URL. It's like, it's like, it's not a hard problem. Like, it's just, it's just a bunch
[01:15:49]  of like, if statements basically, but, but now, you know, based on like, this mostly like the stuff that you've been teaching us all, like,
[01:15:58]  oh, routing is actually, you know, it's like this incredibly important, like, core piece of like, you know, it's the differentiation between like generations in
[01:16:10]  your minds or yeah. Yeah. No, it's interesting that, you know, even with that, you, you, I mean, obviously you had the idea of what
[01:16:18]  you wanted in your router, but yeah, I guess it was mostly just time constraint. Yeah. And the other thing was again, miss, I, if people from outside
[01:16:30]  the react community had come in, I'm, we might've seen more different routing solutions, but solid right from the beginning, I attracted people from react. I mean
[01:16:38] , JSX and whatnot, like, but these are like slight miscalculations on my point part too, because like, I'm, this is why I'm the
[01:16:47]  worst person to ask about syntax and stuff, because I don't, I see it. I don't see it. It's like glass. I just look right past
[01:16:56]  it. And like, that stuff doesn't like, I could care less for the most part. Um, I mean, there's some aesthetic thing that I might stop on
[01:17:02] , but I have to like switch my brain to get there. So when like, I was looking at solid, I was like, not seeing react, which is basically zero
[01:17:09]  people. Like who, who looks at solid and doesn't see react? Well, me apparently. And essentially like, I was just thinking, oh, you know,
[01:17:19]  like, oh, maybe something like what they have in noxt or view or whatever. So in any case, this router was amazing, handled all of solid's, uh
[01:17:30] , um, routing needs for really the first couple of years. Cause the whole first version of solid app router, like no one, even no one used it except for me
[01:17:40] . Um, you know, the things that I had in my mind was like, okay, I'm going to need file system routing. I'm going to need parallelized
[01:17:46]  data fetching. And I built that all into solid app router. in, uh, in, uh, I, I think early 2020, um, when I finally
[01:17:53]  formalized into a package, I was doing stuff like this in some of my demos, as I mentioned, but I was like, okay, fine. I'm going to
[01:17:59]  build the router in 2020. And that that's when solid got its official thing. But as I said, no one, no one actually was using it back then. So
[01:18:06] , um, yeah, the key turning point, and I got to get a lot of credit actually for, to remix and react around our team was they were the ones
[01:18:17]  who saw, who figured out first the direction we needed to go. Right. Um, I forget, did I see it first or did you see it first Ryan? Do
[01:18:27]  you know what I'm talking about? Yeah. I mean, I guess for me, it was like, they were, they were like, you know, they,
[01:18:35]  they moved on to what we, you know, more like what we have now. And they had obviously had to provide like a path to, for people that were on the
[01:18:43]  react router five. Yeah. I figured what it was. They had like a react router six preview article or something. And I saw this and I was just like,
[01:18:53]  this is how we do it. So I, I think I remember now I actually reached out to you and I was like, we should merge our routers in react router
[01:19:00]  six. They have all the stuff like that. My router had, which was nested parallelized data fetching, you know, this ability to support file-based rout
[01:19:09] ers. And they had merged that with the classic react router patterns. And that, um, that is how we ended up with our current version. I, I can't
[01:19:19] , it's probably like, yeah, we, I wonder if I could find this article anymore. Cause it's, it's pretty old now. It's one react
[01:19:27]  training two years ago. Was it that old? Um, go away, read it. Let's see if I can find this. Yeah. Yeah. Smaller bundles
[01:19:39] . Yeah. Yeah. Yeah. Routes. Right. Yeah. It was this one, this article. Um, I'm gonna, I'm gonna post this in
[01:19:43]  chat. React router six had a huge impact on us designing our router. We were doing all the features before, right. But they were how we managed to actually see
[01:19:58]  a path where we could have both paradigms together. Um, and yeah, that was a huge turning point because, um, I sold Ryan on the idea and then
[01:20:09]  suddenly I didn't have to maintain the router anymore. No. Um, but the key difference here, for many of you have seen react router six now, and this
[01:20:18]  is how solid router works is that in addition to be able to just like individually do those switch statements and do the routes, you could actually create these nested paths in JS
[01:20:27] X. And it's very, very, very similar to how we used to do it in Ember where you had these data objects, except it's just represented in the
[01:20:34]  JSX. So you could have routes with all these paths and routes and routes and routes, and this defines the, the pattern and where it actually gets inserted is in
[01:20:45]  this lovely thing called the outlet, which is also what it's called an Ember. It's always been the outlet. This is, this is whether it came from rails
[01:20:52]  first, that part of it, this naming, the two, the outlet, this is, this goes all the way back as a rich heritage, so to speak. Um
[01:21:01] , but yeah, they also, and the key thing that they did that I loved was they recognized that it's just an object. Um, so you could just use
[01:21:10]  use routes instead of doing it in JSX. And this is the bridge. This is how you get into file system running because the file system running can just generate this object
[01:21:18]  instead of worrying about like writing JSX way easier. And then you can just get this routes component that you can just go wherever it is. Uh, uh, uh
[01:21:28] , element and they, they return it. Oh, they just return it, but you can, you can just, you can just inject that and have all your routes and
[01:21:35]  cool thing with solid, as you guys know, there's no beat on, we can do whatever the hell we feel like, like essentially we just do the same thing.
[01:21:43]  Our, our route components just return objects that the routes object, uh, component knows how to read. Right. Um, so we can, we can kind of virtualize
[01:21:52]  any data structure we want with, with what we're doing here because it's not tied into our, how our rendering works. And that's, that's, that
[01:21:59] 's essentially like the core mechanisms, uh, for how we define routes, solid router and why solid solid router looks so much like react router. Cause they, they, they
[01:22:11] , they put these two simple things showing like how you can use both ways together suddenly alleviated this huge kind of tension because we can make a single router where everyone who wants
[01:22:20]  to use stuff react router five way. It could more or less still do that, but we could get all the advantages because like, I guess solid, you wouldn't
[01:22:29]  do this because this would make it eager. So we actually have a few differences. We have an element one, which kind of just does it on demand lazily, but
[01:22:37]  we also have a component one so that you can put it in these files and like, like without calling it. And the benefit of that too is if we have things
[01:22:47]  like lazy components, our lazy components actually in solid export a preload. And we can actually, um, we can actually just take the component being passed in and call pre
[01:22:57] load at the appropriate times as part of just the standard way that the library works. So if you go to a route, we can gather all the, uh, components
[01:23:05]  we're going to, uh, render essentially. Um, and, and we can call preload on any lazy components and parallelize the fetching of both all the nest
[01:23:15] ed levels of components and all the nested level of data. And it's just built right in on solid core APIs without us having to do anything special. And I think
[01:23:22]  that's actually one of the coolest things about our solution, um, is that it's not blocking and we actually don't hoist. We hoisted up to the
[01:23:33] , the, everything up to the, the route, the routes component, but we don't actually, um, we don't actually like do it. Pre-render,
[01:23:43]  you know, like with things like remix, generally what happens is request comes in, they do a bunch of routing logic and then they do all the data fetching. And
[01:23:50]  then when it's all done, they then render your app. Right. Um, and they're adding a new thing for deferred for streaming. So you can kind
[01:23:58]  of like not wait for everything and do partial, but with Saul's approach, which is synchronous, um, we, and because we had suspense and all those things that we
[01:24:08]  knew, like these pieces coming from the core framework that we wanted to work with, um, solids doesn't do anything special. It actually just starts rendering the app. The
[01:24:17]  second, the server request happens. And, um, when it hits the route component, then it goes, okay, what do I need and starts fetching then just
[01:24:24]  keeps on going. And then suspense takes care of the rest. Cause we, we knew that was something we could depend on where I think early days, there was kind of
[01:24:31]  like a question of like, when suspense is going to come out in the react community. So we actually were able to just cut out a whole bunch of extra stuff because we
[01:24:38]  could just rely on the core mechanisms of the framework. We didn't have to build a custom transition model. That's one thing you can see with remix and stuff.
[01:24:45]  It just, it was all in solid, which lets us ship the stuff very, very, very small and, um, kind of working with the framework. This is why
[01:24:53]  the routing part is such an important solution. And I think you're going to see this with next JS router, definitely because they know they have core team react members working on
[01:25:02]  next JS router. They're leveraging every part of the core in order to get the best experience. Um, so yeah, a bit of a tangent. Um, yeah
[01:25:13] , I wonder if like, since remix, like their data solution kind of started from like what what's now in react router started from like the remix side, which is
[01:25:24]  more of a meta framework, you know, SSR kind of stuff. Like if that influence, like we, we kind of started from the client side part and it happened
[01:25:34]  to work great for the isomorphic applications, but you know, the, the whole, the, the idea of like, of kind of like rendering at the end,
[01:25:44]  I guess, like doing other data stuff. And then, yeah, I think the reason is, yeah, they, they, they, they had the approaches to different
[01:25:51]  solutions originally, but like we had the client side solution and then we had the server side solution. And because like, they couldn't trust the framework, the framework was rendered
[01:25:57]  sync synchronous. They, like, you, you couldn't do this in react before react 18. Whereas for us, you know, I, I built like my original nest
[01:26:07] ed routing solution with streaming in mind, actually like, like to a certain degree, like, like understanding like that we'd have async on the server, which meant
[01:26:17]  that I wasn't concerned about like building infrastructure to kind of hoist it out. I'm just like, yeah, just let it render, you know, it runs ident
[01:26:24] ically on the client and on the server. That was kind of the thing where things get interesting is actually a question in, in chat here. We actually got a bunch of
[01:26:34]  questions in chat, actually, maybe take a second here and ask them, do you see component-based writing as superior to configuration-based one? How do you compare
[01:26:41]  them? Um, yes, I, I mean, I, it is interesting question. Uh, I, plus to understand what you mean about component-based, uh,
[01:26:55]  because like, I'm assuming like JSX versus like, you know, writing, you know, that like this, like JSON object, like you have on screen here.
[01:27:03]  Yeah. I mean, we make them, so they're kind of the same thing. Yeah. So yeah, I don't know what, what, what, what
[01:27:09] 's your, what's your opinion, Ryan? So I, I definitely like using JSX to define routes, but then for something like a meta framework, like you need
[01:27:19] , like you need the file-based routing because it's so nice, so convenient where you don't have to touch it at all. You just right. And add a
[01:27:27]  component somewhere and it like all hooks up for you. So having the configuration base is like, is a necessity if you want to have things like that. Right. And
[01:27:35]  that was actually one of the cool things about this isomorphism that I, I haven't really touched on, which is fine. I mean, you can always build other
[01:27:42]  systems to work around and make it work was for us in the meta framework. If, if solid start generates a client side only app or a server rendered app, like
[01:27:52]  the pattern is identical. The code runs identical. Like there's no actual difference in, in how it runs when we like, because we don't like hoist things out
[01:28:02]  or do anything special. It like literally runs the same code on the client and server and it works exactly the same way. So like it's, um, this is
[01:28:10]  kind of the benefit is like, if you want to go the other way is like we are, our, our new solid start client, uh, only templates without server rendering
[01:28:19]  are going to have file based routing too. Cause it's just, it's just all the same thing. Right. Um, like you could just, it doesn't,
[01:28:25]  and yeah, we'll talk about solid start in the future, uh, bit, but we, we, we've got some really cool tricks to make it integrate with
[01:28:32]  the router. That's going to make it really smooth to mix defining your own rights routes and file system routes at the same time, kind of inspired by hydrogen, which we
[01:28:40]  saw a few weeks back. Um, let me look here. I don't know. We'd have to ask Tanner. Honestly, I mean, I, I think it
[01:28:53] 's on his list of, of like can stack migrations. How do you handle redirection streaming? Okay. We're going to run into the details. Uh
[01:29:03] , yeah, I mean, that that's a fun one. Um, we had some discussions and stuff like, cause when we first were doing it, I was like,
[01:29:11]  do I have to respect the status code? Like, do I care because the page successfully rendered? So if I do a redirect midstream, can I like, do,
[01:29:21]  do I care? I could just have the, the client, I could just have the server do like what it like needs to do and like render maybe a different page
[01:29:32]  or whatnot. But generally speaking, the challenge with re redirects and streaming is let's say you flush the header and it's already like on the page and then you go
[01:29:41] , oh crap, we actually need to do a redirect part way. Um, and there, there's different ways to do it. Um, essentially my original thought was
[01:29:55]  just get the route, the browser router to continue the story. Like, like basically it gets the redirect message up and then it'll just do the redirect in the browser.
[01:30:07]  I've changed my mind because people stress that status codes and stuff are important. So the way we do it generally speaking is you use like the, um, solid router
[01:30:18]  actually records, uh, some kind of context that you can get out and it tells you if a redirect has happened. Um, and essentially I use it when we hit the
[01:30:28]  redirect, um, component or whatever, it's just like, it stops the basically might finished a few things and basically stops the rendering where it's at. And then
[01:30:38]  when the shell completes or what, or not shell, when the streaming completes, I read the router and the router goes, yeah, I redirected. And then I,
[01:30:48]  I use that to flush and tell the page to do a redirect. So it actually just kind of renders part of the page and then it, and then it like flips
[01:30:57]  and asks the server for, for a different page. And while I admit that's probably like a little bit awkward in terms of like going, doing a full page thing
[01:31:08] . And there are ways to do it without that's what people want because you, they want the browser to respond with the correct status code, uh, for caching reasons
[01:31:17]  and whatnot. So yeah, I mean, I could be swayed either way, but that was essentially where I landed on because it seemed the most correct to actually trust
[01:31:24]  the browser's like, um, um, ability to handle caching and status codes. Yeah. I mean, I'll add that you can pretty much only do that up
[01:31:32]  until like once you flush the, the, like the headers. Yeah. Yeah. Yeah. So like, if you do it and if you redirect in like any asynchronous part
[01:31:42] , like if you read something from a database and then like say, oh, this thing doesn't exist, navigate over here. Right. And that, that, yeah
[01:31:50] , that, that nastiness that I was talking about where it like renders part of the page and then flushes the script to do the redirect. That only happens if
[01:31:58]  it's flush part of the page. If we, if, if we, um, know the redirect, um, synchronously, or in the case of using our like
[01:32:07]  deferred resources, so we have the deferring resources. So we have the ability to load some things before we start the stream. If it happens before the shell completes
[01:32:14] , um, then we can just like throw away, um, our response at that point and, and not send anything to the browser and immediately like do the proper, like
[01:32:24]  standard redirect things. So it just, it matters. This nastiness only happens. Um, when we're in that awkward case, hopefully you, you know, you
[01:32:36]  design your apps in such a way that you can either make that choice synchronously, or you can make that choice, um, essentially on any key data that you do before
[01:32:47]  you hold the key. So like, like an example of this is with streaming, I still recommend that you load the data to know if the user's authenticated before you
[01:32:56]  start the stream with solid. That's very, very easy. You just go, whatever resource you use, you know, create resource to load the user information. You just
[01:33:05]  go, defer stream true. And now, you know, that if the stream won't do anything until it has loaded that data. And at that point, when the
[01:33:14]  data propagates and it starts like doing that portion portion of the rendering, it's going to be like, Oh, okay. Um, you're logged out and it's
[01:33:22]  just gonna, it's just gonna do the redirect. stop everything and the shells not being flushed yet. And it's going to go, okay, let's do the
[01:33:29]  proper redrag. So that's essentially the situation. And some of you might be thinking, well, didn't it waste some work to render some strings? Part of the
[01:33:39]  solid string rendering is incredibly fast, like much, much faster than a lot of other solutions. But the other part of it is, yeah, on the negative case, we
[01:33:48]  might do a little bit more work this way, but on the positive case, we're doing as much work as soon as we can. And it just, it'll
[01:33:57]  improve the rendering performance in general. When everything does load, we don't wait for all the async stuff to do loading. We can actually do as much work as we
[01:34:08]  can before giving it off to the IO and whatnot. So we can maximize our rendering when you have lots of concurrent requests and all that kind of stuff. So that's essentially
[01:34:17]  why we have our approach. Yes, it's a little bit more wasted work on the error case, but it's faster on the success case. Yeah. You might
[01:34:26]  as well be optimistic, right? Yeah. Yeah. Yeah. Um, paper like rudder that trees, you know, the sort of, but no spa. Um,
[01:34:34]  we, we, we might come back to this when we talk about the future. Let's, let's keep on moving. Okay. Um, because not everyone came
[01:34:41]  here just here to talk. People probably want to see some demos, see what we're actually talking about. And I, I've been just kind of talking about how we
[01:34:48]  kind of ended and landed where we, where we were. But the thing is, um, let's get some concrete, uh, examples at this point. I'm
[01:34:57]  going to, I'm going to invite Brian to share his screen. I want to talk a little bit about, about more about how this data fetching, uh, works
[01:35:04]  in, uh, solid router. So, um, let, let's, let's look at some actual practical examples. What, what do you got for us here
[01:35:10] , right? Yeah. So I guess to start off with maybe like, let's back up a little bit to just kind of like the nested routing, like how,
[01:35:17]  how we got, how we get from the kind of like react router four or five design to like the current design. So I kind of have like a couple examples here that
[01:35:27] , that sort of illustrate that. Um, and so I'll just scroll down to where like the, like routes are defined in the app. So basically I just have
[01:35:36]  this app where you can like navigate around some users. This is like the user's area. And then, you know, then there's like two pages within that. Um
[01:35:45] , and there's like no interesting data in here yet, but just trying to showcase, like how you define the routes. So, you know, this is how you,
[01:35:54]  how I would have done it. Like when I started, when I wrote the previous router and that, that is, you define your routes, like where you want to display
[01:36:04]  them. So we basically have multiple, and this is using solid app router. Um, I don't know if it's the current version or not, but so,
[01:36:12]  you know, basically we've defined like our homepage and then this is like everything under users. And then in the users, uh, component page, then once again, we
[01:36:26]  define our, you know, like index page for users, so that's the user's list. That's this page slash users. And then everything underneath like a
[01:36:39]  user with an ID. Um, so that's everything under here. And then users list isn't very interesting, but users detail, uh, has a third level.
[01:36:51]  So we have the overview page and then the post page, and that's kind of the end of it. And so like, obviously this still works with solid app router.
[01:37:02]  And this is kind of, this is kind of like the, the unification that we were talking about, although we're still using like this instead of defining like your
[01:37:12]  components as like children of the route, you define them on the component property. You could, you could also use element here and do it as JSX. And it
[01:37:21]  would look like identical to some of the re like more react rudder examples. Yeah. So, so the interesting thing is like, so this is fine and all, but
[01:37:30] , um, let's see if I don't remember if I, um, have the same setup for my next example. Okay. I do. So this next example is
[01:37:38]  like the same thing. The routes are defined in the same way. I mean, you can actually see this JSX style here. Um, let's go down to
[01:37:48]  app, but now, now we're fetching data from like, uh, an API. Um, and so now we have some like users and the users all have posts
[01:38:01]  and yeah. Um, so this kind of gets into the data fetching, which actually sort of motivates why it's like one of the motivations and why you want to like
[01:38:12]  hoist all this, hoist all the route information up to the top. Um, so we can look at the network network here in a second. But, um
[01:38:21] , if we look at the like user's list page, or is it, we're just doing like the standard, like fetch as you render. Right. For anyone who
[01:38:36] 's not familiar with these names mixed up, but yeah. For anyone who's not familiar, create resource and solid, you can basically pretend it's like, uh,
[01:38:44]  uh, react query, like, uh, basically that get users is some async call and then we're getting the users back. Yeah. Um, so yeah, we
[01:38:54] 're going to grab like, you know, when the user list page finally renders, um, and then more interestingly, I guess the user detail page, which is
[01:39:06]  the sort of layout or not user detail, but, uh, I guess, yeah, there's like the user's page, um, which renders the list and the
[01:39:17]  detail. And then yeah, the detail page is kind of like, uh, you know, everything, all this stuff. Um, and so we're going to net
[01:39:25]  in here, we're going to fetch a user based on their ID and from the URL and, and once we get that user, you know, I'm protecting it here
[01:39:36]  with a, with a show because this user will be undefined until, until we've finished fetching it. And then eventually we'll render our new routes.
[01:39:44]  And at that point, now we can render like the posts page. And then, you know, once, once again, posts, uh, I think it's up here
[01:39:52] . Post does the same thing. We're fetching another, uh, we're fetching the posts for that user based on, in this case, we're doing it
[01:40:04]  based on like the, we're passing in the user to the, since, since we got the user from the user's detail page, we're going to pass it
[01:40:11]  right into the posts and we can pull the ID off and we can get their posts. And so this kind of like illustrates, like partially illustrates like the, like data dependencies
[01:40:23]  you might have, like that could cause a waterfall. Granted, we could probably fetch, you know, we could grab this ID off of the URL in the same way
[01:40:31]  we did down here using the params, right? Uh, like the, and then we wouldn't have that dependency, but, um, the real killer here and
[01:40:39]  this, the real killer here is this like show. So we basically have to like wait until this user shows up before we can render our other routes. Granted, we
[01:40:51]  probably could like, you know, we could, we could pull this out and stuff. Um, but you're, you're going to kind of run into the same
[01:40:57]  thing with, uh, if you made this user detail, like lazy loaded. So most likely you're going to code split it. And so now we have to at least
[01:41:05]  wait for the code for user detail to even know about these routes. Yeah. I mean, you're, you're being, you're being a little generous here in the
[01:41:13] , from that perspective, because yeah, the code splitting causes like, like a, a ton of fun because you can't even fetch the data. It's like,
[01:41:20]  you go to the new route. Then if you're water falling, you have to go wait for the code to load. And then you have to, when it comes back
[01:41:28] , then request the nested data. And you can figure for each level, you go through that dance of multiple cascading water of water, waterfalls here. Yeah
[01:41:38] . So I guess to sort of like illustrate how you, you know, how we kind of like unified this, going back to that previous example, that's like much
[01:41:49]  simpler. Like all we have to do is instead of rendering multiple like routes components, we can literally just like take these routes and pull them out and put them as children of
[01:42:03]  this route. And then we can get rid of this and then we can do the same thing here. And these become part of children of this route. And we can
[01:42:23]  get rid of this. And then, so previously, you know, we relied on these routes to tell us what to render here, but now we can just replace these
[01:42:39]  with the outlet. Yeah. And for anyone who's seen react router six, this should look familiar. But this is, as I said, a very old pattern being applied
[01:42:51]  here and you need to import it. Yeah. Yeah. There we go. And then now everything still works. Right. but now we have all the route information known
[01:43:06]  here in our like, you know, primary bundle. We don't have to worry about code splitting. We know, you know, if all these were lazy loaded, we
[01:43:15]  can like do prefetching, all that kind of stuff to, you know, to improve like the performance. And then we can also work on our like data loading
[01:43:29]  story. So the last part is now we introduce these like data loading functions. So, you know, these looked very similar to what we were doing with the sections we
[01:43:40]  render. Yeah. Can I pause you for one sec? Yeah. Because the problem is if we apply the same optimization that Ryan just did for the one that had data
[01:43:50]  loading, you would still have the waterfalls. Like, sure, we know everything up front, but like you still would, like if there's code splitting going on or
[01:44:03]  that show waiting on the other data, like you'd still have these waterfalls happening where it would be, it basically do as much as it can, then as much as
[01:44:11]  it can, and then finally finishes. And we needed a way to, um, have the router be aware that there was data to be loaded and be aware at the
[01:44:25]  top level. Sorry. Nice. Yeah. And, and the other thing that's, that's interesting is like this user detail component is like responsible for loading the user and
[01:44:35]  we want to somehow get that user to our sub routes. So here, what we've done is we've actually made, you know, the routes here are dependent on like
[01:44:44]  the context of this, of this component. Like we have this user and we like pass them into our, these overview and these posts, because maybe we want some information about
[01:44:55]  the user. So if we just, if I just did the same thing here and pull these out to the, to the top level, like we've now lost the user
[01:45:04] . And we have no way of, of, of getting that easily. So we'd have to, you know, maybe we, maybe you could do something on the
[01:45:12]  outlet and have outlet properties or something like that. Um, and, but either way you still have to like figure out how to like, get, how do you get access
[01:45:22]  to this user and not like fetch it again inside of, you know, you can also do a context, but you know, why not let the router kind of like
[01:45:30]  handle that, that kind of stuff for you. Yeah. So yeah, if we go back, if we go to here, so now we have the user list data
[01:45:39]  function, user data function, um, and then the posts, user posts. What these all are though, are just hoisting out all those data loads out of the
[01:45:51]  component, but essentially they're just one for one with, with the, with what we had before. You see, um, them creating the resource and then reading from
[01:46:02]  the parameters, the IDs that needs to do the fetching it needs. Yeah. Yeah. So like the, you know, the, this function is going to be called
[01:46:09]  by the router and it's going to provide us some like information about what it knows. So, you know, path parameters is one of those things. So we can just
[01:46:16]  pull off the ID and, you know, in the post one, I was showing we're using the ID from the user directly off the, off the props. But
[01:46:24]  you know, it's like, it's kind of the same thing here, although we could, and we've talked about this a little bit later, like how we,
[01:46:31]  we could introduce, uh, sort of like dependencies between like this, this data and this data if we wanted to generally, you probably don't want to do that because that
[01:46:43] 's immediately going to be a waterfall, right? You want to try to be able to like, fetch your data is like in, like in ways where you don't have
[01:46:53]  to like know anything about anything else going on. Right. So how do we use these, uh, these functions? So, you know, obviously now we can see
[01:47:02]  we, oh, I don't actually need this. I guess I just didn't pull these out. Um, or maybe it didn't, yeah, maybe it didn't
[01:47:10]  save. Um, or maybe I just didn't update this one. Um, so that, that, this is actually an example of like how you consume it, but
[01:47:24]  let's go down to how you, how you set, like configure it. So once again, you know, this is back to where we kind of left off with that
[01:47:31]  first example. Um, we've, we've hoisted everything up to this one routes and now, and now we add these like data functions to our, our route
[01:47:41]  definitions. So now we just say like, you know, when this route matches, we're going to run this data function. And similarly for these other ones. Right
[01:47:52] . And so now, now anything inside, uh, like now the user list can access the data produced by user list data function. Right. We, we have a hook
[01:48:02]  for that. Yeah. And that's what you just saw me just put in there. Um, user list. Yeah. So now user list, uh, we just call
[01:48:13]  this like use route data. And that's going to like, that's going to, that's going to grab whatever you've you returned from your data function. Um
[01:48:21] , so here we're returning like the. Users off the resource, which is like an, it's an accessor, like a signal basically. Yeah. Um, and
[01:48:30]  so this is just a signal and, and that makes this feel just like if you called like create resource right here, we're, we're working to be undefined
[01:48:42]  and everything. But we're working on making that type a little tighter right now. You have to say return. Yeah. Yeah. This part. Yeah. We're
[01:48:48]  working on that. Um, it's good. It's just going to be type of user list data, uh, eventually. Um, but right now, which is return
[01:48:55]  type, but essentially from, we can just get the type from the function. So we, we get the types right back in insider components where they need to be. So
[01:49:04]  let's make sure it still works. Usually you have to reload. Yeah. Okay. we load our users and then everything still works. The key difference being this time
[01:49:20]  though, um, what happens, I guess when like, as you navigate around, you're only swapping out certain parts of the page. But if you like refresh on
[01:49:32]  this page here, there, there is a huge difference between these examples and what happens, right? This is all client side rendered too, just for anyone's information.
[01:49:41]  Right. If I, if I'm correct. Yeah, this is, this is just client side. Oh, the fun of fitting could sandbox in. Um, yeah
[01:49:51] . So we like, look at the. Look at the network tab here. If we refresh on this page, we need to grab two pieces of data, right? We
[01:50:05]  need to grab the user and then we need to grab their posts. And as we saw, we can't actually grab their posts until like we've grabbed the user.
[01:50:14]  And, you know, we, we talked about how we could probably work around that. But if we wanted to do lazy loading, we definitely couldn't in that case.
[01:50:24]  So you'll see like this waterfall here, there's some like artificial delay. I introduced in the API because the actual API I'm using pretty quick. Right. Um
[01:50:38] , but yeah, so just so you can kind of like see this waterfall here. So we, we fetched the user and then finally rendered it. Now we know we
[01:50:46]  need to fetch the other one or fetch the posts. And then we look at the same thing here. Yeah. I love juggling these windows. Well, that's like
[01:51:00]  nice and slow too. And my computer's probably just like giving up. Oh, there it goes. Yeah. So once again, if we refresh on this page,
[01:51:14]  we shouldn't see the waterfall. Yeah. So they happen like right at the same time. Right. Yeah. No, that makes sense. And this is true also,
[01:51:25]  not just for the data fetching, but for any code split routes too. So you can have a route in a route, you know, like nested code split
[01:51:33]  routes. They can all be separately code split and it'll fetch both of those and the data at the same time. I love this aspect because it, you, you get
[01:51:41]  to do stuff as soon as possible. Like if the data comes back first before the code, I mean, yeah, there's nothing you can do about it. You
[01:51:48]  need the code to render it. Right. But if the code comes back before the data, then the code can start rendering and get as far as it can. And
[01:52:00]  then it'll go, oh, where's the data? Oh, suspense, like, and it'll just, it'll just be able to handle the fact that the data
[01:52:06]  is not there and then finish as soon as it can. And I only talk about this a bit, but the difference between solid and react is, uh, react throws things
[01:52:16]  away generally because it's a V DOM and has to do a re-render and it re-renders solid doesn't. So any work that you do to draw that
[01:52:23]  part of the page, except for maybe where the data is being shown, we get to keep it. So we're just doing that work sooner. And then when the
[01:52:31]  data comes in, we just finish it up. And this overall improves the performance of the initial load time. Uh, and, but beautifully suspense handles both sides, regardless of
[01:52:43]  what we're doing. It doesn't care which comes in first, all race conditions are handled. And the, the real lovely part about this is it's exactly the same
[01:52:51]  on the server. Um, like it's, it runs the exact same way. Yeah. Yeah. And I'll say I don't have like suspense in, in
[01:53:00]  this example, just like, keep it simple. Right. Um, but, oh, got a question. Do you have still well revalued strategy resource? Sorry.
[01:53:09]  You're not seeing blind picture. Nope. Uh, create resource is very, very, very, very primitive. It's like, uh, basically just like, it can
[01:53:17]  be used for data fetching. It can be used for really anything. Um, anything async. It's just the primitive that we can use to handle any,
[01:53:23]  anything that's async. Um, it is very, very easy though, to build cache layers on top of it. And we have a bunch of libraries, um,
[01:53:33]  that basically use, uh, uh, create resource as its core. And then they just add a simple caching layer. I, I, I, there's too
[01:53:40]  many opinions about caching and I just couldn't land on one. So I was just like, no, we'll just leave this to user land. It's create resource
[01:53:47] . Does the, does the simple pattern. Um, caching is always a complicated one. So, um, it's, it's very, it's very easy
[01:53:54]  to just like, essentially in our, in your data fetcher, um, you can have the fetcher function return from a cache object or something. You can write a
[01:54:03]  very dumb, simple cache in about five lines of code. Um, so yeah, most like, most likely you would just come up here to your data function and swap out
[01:54:12]  create resource with your, like create turbo resource or. Yeah, exactly. And if you, if you were being like really quick or cheap, you just go into get
[01:54:22]  users and just build a cache in, in there and go like return. Like when I make a quick demo, I might just be like, I mean, in a real
[01:54:29]  app, you probably wouldn't do that. But when I make it like a quick demo, I'm just like, okay, put, put, put an object outside of
[01:54:36]  the fetcher call and just, uh, read from that, you know? Yeah. Yeah. So a lot of options there. All right. Was there any other questions
[01:54:46] ? No, that's we're good so far. But I mean, that's, that's the main, that's the main thing, right? That's,
[01:54:55]  that's, that's how we can leverage the data fetching. And, um, the reason I mentioned suspense is because that's the trick, how we can do it
[01:55:02] , server or client, not worry about race conditions, not worrying about having to hoist things out. This router is like the same that we use in the meta framework.
[01:55:12]  Like it's like, it is like, there's no, we didn't have to add any code to the meta framework to make this to make solid start work.
[01:55:18]  It was just like, okay, drop the router in and it handles all of this. Yeah. And I, I don't do we, do we want to talk about
[01:55:26]  like more like technical, like how does this work or? Um, yeah, I mean, there's a question about this. I feel like I want to remember this one
[01:55:36]  for the end and come back to it. So this is asking about the actions. We'll, we'll get there. Let's, let's move on from this
[01:55:43]  example and, uh, let's, let's maybe is it? This is the, I'm hoping people have like the basic technical idea of what we're trying to do
[01:55:52]  here. Should we talk about some of the new features for, uh, that we've been adding recently for version four, or do you have any other examples? Uh,
[01:56:00]  I just have one. I have only one about suspense, just kind of like, okay, cool. Yeah, it was, it was something I put together a while ago
[01:56:06] . Just kind of like showing how you might do different things. Um, it's, it's a different example, but, um, just kind of like showcasing
[01:56:14]  suspense and routing. So yeah, I'll just reload it. So we have. Yes, definitely. Yep. Sorry. There's a quick question here. Can we make
[01:56:23]  components of these routes load async? Yeah, definitely. And that's what I was getting at it because, and one of the cool things is if you use solids lazy
[01:56:30] , um, the router will automatically do the parallelized, uh, pre-fetching. for you as well. Um, yeah, and maybe I should just talk
[01:56:39]  real quickly about like what, what actually is happening with these data functions and like preload. So basically what happens is like when I'm, when I'm a route,
[01:56:48]  like I, I, I sort of call them branches. Um, so like when you, the router is looking for a URL that like fits a whole like series of routes
[01:57:01] , like from the top, from this route object, routes, objects, all the way down to like a leaf. So, you know, when you're, when
[01:57:08]  you match home, it's just going to like match, match, you know, slash. Um, and when you match like user ID posts, you know, you're
[01:57:16]  going to get, you're going to get you're going to get this route, this route and this route. Um, and so basically we say that that all happens
[01:57:25]  like immediately when some signal changes that, you know, what basically the URLs is, uh, is essentially just a signal to the router. And so it says, oh
[01:57:36] , this changed. Let me find what the next, like, where you're going. And, and that, at that point we know like, okay, here's the
[01:57:43]  components we have. Here's the data functions we have. We like, we know all those things before we started rendering or anything. So we can just run, run the
[01:57:52]  data functions at that point. And we can run the preload functions at that point. So there's nothing like that spectacular there, but just the fact that you have
[01:58:00]  that, that knowledge, um, at that point before you even like started doing anything. Uh, yeah. So should we look at suspense? Yeah, let's, let
[01:58:14] 's, let's, let's look at suspense here. Cause I, I, I, I described it a bit, but let's like, let's see the example
[01:58:19] . Yeah. So this is just a fairly simple one. Um, we have like a couple of tabs here and we have this like counter going and I, there's
[01:58:28]  like a little bit of description about, uh, this, this was like an example I made about how to use the is routing. The router, uh, basically provides this
[01:58:39]  signal telling you if it's like routing, which really just means, are you in a transition? Right. I don't know how many people are familiar with the suspense and
[01:58:47]  transitions, but the router has transitions baked in. So essentially when it first loads, it'll show the fallback state, but afterwards it won't. So when you
[01:58:55]  actually navigate to the next tab, it'll try and hold, uh, the current view in, in view, which means you need, this is routing to, if you
[01:59:04]  want to show any kind of pending indicator. And we found that not falling back to skeleton state provides a nicer UX experience. Um. Kind of like what react found too.
[01:59:13]  Right. Yeah. I mean, okay, fine. We didn't find it. I'm just. Yeah. Yeah. No. I, I mean, I did
[01:59:21]  actually do some tests around my office when I was working at the startup and I was like walking around with this tab demo doing this thing. Cause I was like, I was
[01:59:28]  like, I saw that original demo, uh, from Dan Abramoff and I was like, man, this is like, I was on the fence. People talk about
[01:59:35]  like concurrent rendering and I was like, we don't need it for performance for the most part. Um, like it's just like, and that's why view and
[01:59:42] , uh, preact all kinds of that. We don't need that, but I think the story for, um, navigation is actually really important and really provides a nicer
[01:59:52]  UI. It's something that I noticed, like I, I did react native development for a while and. The, the way that they scheduled the updates was really. Cool
[02:00:01] . Like you, there was a lag, but it didn't like the, the lag exists because there was something expensive that had to happen, but the native is really
[02:00:09]  good at smoothing that over, um, by essentially, um, having this ability to kind of keep you where you are, do the heavy lifting in the background and
[02:00:19]  then make that transition smoother. And that's kind of, that's what interests me and why I put concurrent rendering in solid. So yeah, like, sorry, I didn
[02:00:30] 't mean to cut you off. No, that's fine. Yeah. So basically we've got two, like a few tabs here and they all, they had,
[02:00:36]  they all have like kind of different, um, what we'll say. So tab two and tab one are basically the same. Um, and I just have two, so
[02:00:44]  you can switch between them. Um, but you see, we go to tab two and there's like, there's like a delay while it's like doing something asynchronous and
[02:00:52]  you'll see like, you'll see that loading bar come across. Right. And then, but you also see the counter is like continuing and then it, and then
[02:01:03]  it finally navigates the tab is swapped out and the new counter, like, you know, the new page is rendered and a new counter is, you know, starts over
[02:01:12] , but yeah. So you get that, you get to like maintain anything that's currently happening and you, you get to do new things like show a loading bar or
[02:01:21]  whatever. Um, so tab three is a little bit different. It actually has a suspense boundary within it, which, which makes the navigation like immediate, but you see that
[02:01:34]  close to the fallback state. So we can look at it, uh, tab three. So it basically to the outer suspense, the suspense that's wrapping all the routes
[02:01:45] , this appears to be like synchronous. Like it's not, uh, it's not waiting on it because it has this other suspense that, that kind of like.
[02:01:54]  Right. So you can still choose to not wait for stuff. That's very expensive to load, um, with this by doing a nested suspense boundary. This is sort
[02:02:04]  of like a little trick. And I know why you're doing this because with the transitions built into solid app router, it's like, if you do want to like show
[02:02:12]  fallback, you, you, you do have to kind of make that deliberate choice that default is really good for UX, but you do still have the ability to kind
[02:02:21]  of like break up your page even further. And that's what I love about these patterns. And you gotta, again, give react credit for coming up with the basic patterns
[02:02:29]  here because, um, this suspense just being placeholders is like not what it's really about. Suspense is so much more than placeholders. Um, so
[02:02:37]  yeah, seeing this in action, but yeah. And then tab four is kind of a, a similar thing. Like this tab now has sub tabs, which are asynchronous.
[02:02:49]  So everything inside of tab four is, we can look at the routes here. Um, so we have, you know, all, all these sibling level routes. And
[02:03:01]  then we have like an active one that, that represents these two, but now we can still have sort of like top level trend transitions, even though these are in like suspense
[02:03:12] . They have a suspense boundary, but we can still have like, uh, you know, we can still have our like loading indicator or whatever work when you navigate through these
[02:03:22]  ones. Right, right. And that's what is routing does. So yeah, this is a fully suspense, uh, like suspense first party built router. This is
[02:03:31]  like what a router looks like. If it was built, no knowing that suspense is in mind. And then I think tab five is just totally synchronous. So. Right.
[02:03:41]  It's not, it's not that interesting. Right. Yeah. But I, this kind of illustrates kind of the different sorts of patterns that you can do here.
[02:03:48]  And the difference just comes down to, you know, listening for an is router. If there is a, uh, nested suspense component. And, um, we didn
[02:03:57] 't, as I said, this, this also handles all the race conditions and stuff. So like the, the, the authoring experience hasn't really changed a whole ton
[02:04:06]  from what your original example, this has been back to very, very incremental. In fact, um, so yeah, I, I didn't really have enough time,
[02:04:15]  but it would have been nice to go like, just to keep that example going all the way to like the end where everything's under suspense. I think it makes sense.
[02:04:26]  Hopefully people in chat, does this all make sense? We have covered some of this stuff before, but I think it's always good to review it and look again. Um
[02:04:33] , because it, it is actually, um, pretty powerful stuff. And, uh, you know, I always come across people who see, you know, solids writer
[02:04:42]  and don't know that it's actually capable of all of these things. Uh, yeah. How do you decide which, how do you decide whether to find reds all
[02:04:53]  top or the tree? Since you can do both now, I guess. Yeah. I mean, my answer is, uh, as an op from optimization standpoint is like
[02:05:00] , you almost always want to define them as high up as you can. Um, the other thing is more of like, uh, it's useful sometimes when you really have
[02:05:10]  like separate apps within an app with a single page app, you can just go crazy. Right. If you, if it is really just a separate app and you're fine
[02:05:17]  with that, but I, and you, because like, obviously there's like human concerns, management, project management concerns about like, if you have a single route and
[02:05:26]  you have a bunch of teams, like that place can become a zoo. But generally speaking, you always benefit the more up you pull the routing and the routing information because,
[02:05:36]  um, this, the app can just be smarter about it. Yeah. Yeah. I guess my answer would be, yeah. I'll like. You probably always want
[02:05:45]  to put them at the top, like into one because that gives the router like the most information about what it can, what, what it can do. It doesn't have
[02:05:55]  to wait for some other component to load or, you know, some conditional logic to, to run before, like you get more information about like what to show on the page
[02:06:04]  or what data to fetch or whatever. There probably are some cases where you might have separate routes, objects, components though, like maybe like you have a sidebar that
[02:06:14]  has navigation that you want to change as the page routes, but the, the, but it doesn't do any like data loading or anything like that. And maybe it's
[02:06:23]  like slightly different than your, um, your like main page. So you could, you could like use separate routes for, for a case like that. But I think
[02:06:32] , yeah, mostly you want to put them all into the, into the top, which was like a big, uh, uh, it was like a hurdle for me at
[02:06:40]  first. Like it took, it took some. Like originally I, you know, when I were at that other router, I was like, oh yeah, this is so
[02:06:48]  nice. Like you put everything like, like co-located and like where you have it. But, uh, then you get all these advantages of having it at
[02:06:57]  the top. And, uh, and I guess the, the final one is, is route scoring, which we haven't talked about. But, uh, the,
[02:07:05]  the problem with putting them all like underneath each other in separate components is when the route, when the router goes to like decide what to render, it's going to do more
[02:07:17]  of like a breadth first search. Whereas this, this is going to do more of a depth depth first search. And it's going to find the like most specific route that
[02:07:27]  matches the URL. Whereas if you have been spread out, it's going to, it's going to say, okay, yeah, this one matches, but maybe like
[02:07:35] , maybe you have like, you could have like multiple routes that match and then underneath them have a route that matched better. Um, I don't really have a good example
[02:07:48]  of it here. Yeah. I mean, uh, generally, yeah, it's interesting. Cause like if you embrace this as a, as a, as an approach and
[02:07:58]  you start hoisting stuff out, you generally just. A lot of those cases you're talking about, you probably won't run into. Like if you do actually
[02:08:04]  want to nested route, it's probably going to be like its own subsection. Like someone pointed out there, like slash admin or something like where you just decide like
[02:08:12] , okay. But if you, on the other hand are using, used to the, to the react router approach or router five approach of doing it all over the place.
[02:08:21]  Yeah. You, you, you, what do you get it? You just say almost like a local. Maxima or something like you, you kind of navigate into
[02:08:29]  the route rather than it being like, like the, the full. Like you were already, I, that's interesting. Like, could you, you create situations where you
[02:08:41]  could actually like navigate into a certain place and not navigate out as easily? Like, like if, like if you had route duplication, I don't know, I'm
[02:08:50]  just thinking crazy now. Maybe that doesn't matter. Yeah. Like maybe, you know, if you wanted to have like two layouts, you know, if you want
[02:08:57]  to have like, yeah, we've definitely like encountered these. I just don't, I can't think of a good example off the top of my head, but like
[02:09:04]  having, having all of it, like having as much of it as possible. Um, defined like this definitely lets you like, uh, like get a more specific route
[02:09:17] . And, and the route scoring also lets you not worry about like what order you define them in. This was always a problem with like that router five and stuff. You
[02:09:26]  had to like, make sure you put the most specific ones first and the least specific ones last. Um, so that you wouldn't like accidentally match like, or,
[02:09:36]  you know, or you had to use like the end or the end or exact, like attribute, you had to make sure you use that on things like slash routes in order
[02:09:45]  to not match them for like everything or put them last. Um, cause it's basically just like a big switch case. In fact, that's how like the, my
[02:09:54] , the other router works. Like you literally use switch and then I had like a special like version of match, which was for the route from the router and like matched
[02:10:08]  on, on location instead of, you know, you know, like some arbitrary, um, condition. So yeah. Yeah. We're getting a question about grouping routes and
[02:10:20]  layouts and stuff. And you, you can already see with this message routing, you can do a certain amount of layout work like simply by like making the slash, like
[02:10:29]  you don't have the data fetch on every level. You can make the slash tab, but I think we should make, I guess we probably should get into talking about what
[02:10:36]  we've been doing recently. Cause all the stuff we've showcased so far has been basically in it since we merged over a year ago. It's it's we've
[02:10:44]  been, I'd say recently we put out the first release that really changed things up in probably over a year. So, um, we should start talking about that.
[02:10:54]  Cause yeah, this question about per route group layouts and stuff like that, it kind of comes into this question because yeah, um, we, we've really expanded our ability
[02:11:05] . Um, so yeah, I guess not sure exactly what you mean by like per route group, but like, you know, you could group any of these like routes together
[02:11:15]  just by like making them children of a new like route, you know, you could just be like route and I guess you gotta get to the path. And then
[02:11:31]  like should all still work. So that was two and three. Yeah. You always have to reload code sandbox. And then it breaks. Yeah. So now tab two and
[02:11:44]  three are, are, are grouped, but you know, they don't have a layout component or anything, but, you know, we could at this point, like group
[02:11:53]  them. Uh, it's like a dev, uh, you could just be like, hello and then put the outlet in. And I broke something missing a closing
[02:12:16]  tab. There we go. That should work. Yeah. Thank you. Here we go. Your change is big enough that the press play, it might have just,
[02:12:38]  it might just be it sometimes has a transpiling issue and then it. There we go. Now I have like, hello here. And that's. Maintained.
[02:12:52]  And I, I guess what's, what's more interesting is to like. Do like data now. You have a next. No, that's fine. I think
[02:13:03]  it's just being slow. So like. Probably have to refresh again. See, now you'll see this, this doesn't change because we haven't re-rendered
[02:13:18]  that. Cause only the stuff underneath it, you know, changed. But one. Oh, why is the one included? Ooh, interesting. Probably because this is using
[02:13:32]  like. Version two or something. Some problem with not updating your demos. Now could sandbox is going to be real happy. Oh, right. Yeah. This is actually a
[02:13:51]  bug we fixed somewhat recently. with, with a. Multiple routes to have like the same path. Right. This is the, this is why I was hedging towards
[02:14:05]  0.4. Cause. We've always been able to support nested shared layouts, but it's something that we've made like a bigger strides towards in the,
[02:14:15]  in the newer version. So now we get. Now we get our date and it doesn't change. But then we'll leave. That group. You know, now
[02:14:27]  we're. No longer inside that group. So yeah. That's, that's sort of been possible for awhile. There was like this bug. Obviously that we just saw
[02:14:37]  with it. But then now we've also added. Now we've also added like the, the ability to have multiple. Support multiple paths for a single route. And
[02:14:51]  there's, there's a book. There's a type. The type is Ted script issue. Um, that I just merged the PR to fix it. So the next
[02:14:59]  version. Um, but yeah. So now you can like, now you can have multiple. paths for the same component. And so you'll see this. This is
[02:15:11]  not the most elegant demo, but basically we can see tab two and tab dash two. Are like both matched by this route. So if we go to tab two, we
[02:15:22]  have this date. And then if we go to tab two, which, which navigates to tab dash two. Um, you'll see this, this date didn't change
[02:15:32] . My selection wasn't lost. Um, so, so this, this component didn't actually re-render. Um, that's cool. So you can basically.
[02:15:42]  But this parameter, if we, if we look at the tab two component. Um, it renders a tab in the tab. Uh, it's using data function.
[02:15:54]  So, but anyways, this, this is basically just a, this is just the location path name here. So, so now we can basically go between these two things and
[02:16:06]  not do like any work, but we have a different URL we have. Right. And, and the importance here is you can have shared layouts between like URLs that don't
[02:16:16]  even have the like same URL path. Like you can, you can, you can. This could be, this could be like whatever you want. Um, and then I
[02:16:23]  guess the interesting thing that that enables is now we can do optional parameters. Yeah, this was the, this, this one was requested a lot because react router five has
[02:16:34]  it. React router six got rid of it. Um, and, um, people came over and were like, Hey, and I've never written a router that had optional
[02:16:43]  parameters, uh, because nest routers classically haven't. And so like, um, yeah, it was, it was interesting for me because, um, I
[02:16:53]  was just like, whatever, you don't need it. I haven't needed it in 10 years, whatever. And then Ryan's like, I figured it out. I
[02:16:58]  was like, okay, sweet. So we now have optional parameters, uh, in our nested routing. Um, which I, as I said, I don't
[02:17:06]  know if they've added it to react router six yet, but, um, you can easily see how the shared, uh, layouts can enable this. So yeah, all
[02:17:14] , all it does is it just expands this string into like the possible permutations that you might have. So you might have like tab three ID, no name,
[02:17:26]  and then another, because this one's not optional or, you know, you might have tab three name, another, or you might have all of them, or you might
[02:17:32]  have just tab three, another, just basically four permutations you could have. And so we just expand those into an array of all of them. And now we can
[02:17:41]  go to tab three. You'll see, we have ID name in another, and then, so that's this, that's this path. And then if we just
[02:17:52]  have two bar, then we prioritize the first, uh, parameter. It's, you know, it's kind of ambiguous, which one you would match here. So we
[02:18:02]  just prioritize the first one. So now we have ID and another, and we don't have like name is undefined. And then if we see this one's the
[02:18:12]  same, you know, so you can see it actually like updates. The component's not re-rendering or anything. This date stays the same. And then,
[02:18:20]  and then if we go to this last one, we, we don't, we only have one, you know, we only have one parameter here. So we, we
[02:18:28]  don't match ID or name. So we only match another. And then there's a final one that tab, tab three, which just matches this, this one down here
[02:18:37] , which is the splat, which means match anything after tab three. And, uh, so this matches, this is a different component, it re-renders
[02:18:46] . Um, but it has no, you know, it has no parameters, so. Yeah, very cool. Yeah. This, this capability we added very recently and
[02:18:58] , um, it's really important because yeah, one of the problems with the, like the nested routing thing and having these defined challenges was figuring out good patterns for being
[02:19:08]  able to share things that weren't part of the route. Cause we have to be conscious of the route the whole time when we change stuff together. So, um,
[02:19:16]  yeah. So yeah. The, the big challenge with making something similar to like react router six, like this nested router with, without a V DOM is like, you
[02:19:28]  have to be, you, you can only render stuff like once and you have to be very careful about not re-rendering it. Whereas like with react router,
[02:19:37]  like, I think they just re-render everything all the time. I mean, that's like the expectation. Um, and you know, the V DOM takes care of
[02:19:46]  it. So I think in react router six, you, if you wanted to have optional prams, you would just literally like make another route that had the pram,
[02:19:54]  like one with the pram and one without. I, I think that works in react router six, but we can't get away with that because. Yeah. Like
[02:20:02]  when, when this changes, it's the same. It's a different instance of the component. Yeah. Yeah. We keep the same instance of component and just fine grain
[02:20:09]  update the parameters. Um, so that could trigger what you show. It can trigger the data loading and whatnot. So, um, yeah, no, that's super powerful
[02:20:18] . And especially when you consider the nested implications of that. Okay. Um, I get, I guess. Obviously layouts are one thing, but I guess the other place
[02:20:31]  where this kind of sectioning off routes comes in is situations with like, uh, authentication, right? Like if you, if you like have that part of your app that
[02:20:41] 's, you know, only certain users can get into. Um, you, you have an example of that, right? Yeah. So I have an example of that,
[02:20:49]  um, that made a little while ago. And this doesn't really use the new stuff per se, but, um, if we look at our route definitions. So
[02:20:58]  here, what I've done is I've actually made this like special route component. And we'll look, you can go look at the implementation of that in a second
[02:21:07] . Um, but this basically says like, oh, you have to be, you know, like authenticated. And if you're not, you're going to get redirect
[02:21:16] ed to the login. And then we put all our like routes underneath that, that you want to be protected. And then we have our login page, which is outside
[02:21:23]  of that, obviously. And then, uh, and then a not found page. So you can see, we just have like our homepage, which is protected. Um
[02:21:32] , so we got redirected to the login. Yeah. Um, we have our somewhere page, which is also protected. Um, and now we have, now when we
[02:21:41]  tried to go there, part of the, part of this was adding the like return to kind of. Oh, okay. So we can like, we can get back there
[02:21:50]  when we log in. And then nowhere is our, like, you know, that hits our not found page. So yeah. What's, what's cool about these route
[02:21:58]  definitions just being objects and they can, they kind of get semi combined all the way up. So yeah, I'm interested to see what this protected route implementation actually looks
[02:22:07]  like. So then, you know, if we log in, um, and we went to, we went to somewhere. So we got the query parameter. Now it's
[02:22:14]  going to, it's going to log us in and it's going to take us somewhere and yeah, everything worked on that. We can log out. Yeah. So the
[02:22:22]  protected route. So, so the key here is to the things inside of routes need to be the, the, the routes are like the routes JSX component is expecting
[02:22:34]  like a route definition to be returned. Same with the, any, like the children of a route. So it's not expecting like any JSX. Um, if we
[02:22:45]  look at our protected route. You meant like any, any elements, it's not expecting like any. Yeah. Like you wouldn't want to like return like a div from
[02:22:53]  here, like. Right. Um, and, and really, you don't really, I mean, you can, but you don't really want to like return like
[02:22:59]  conditional logic. The thing is like, that's it. Yeah. So it's, it's just a route. Well, the, yeah, the meat of it's
[02:23:06]  like in this protected element. I see it. Yeah. It just returns a route and. You know, takes your path or whatever. And then, yeah. So
[02:23:13]  all basically all this is doing is like, is, is wrapping things you put in there in this like protected, um, component. So if we look at that, uh
[02:23:23] , it's, it's also pretty simple. Like all of this is just for like doing that redirect parameter thing. So it's like, not that, not that interesting
[02:23:34] , but this is like the thing, this is the thing that it actually renders, you know, this is like the layout component that is actually being rendered for anything
[02:23:42]  that's within that route. Um, so it's, it's just a show element and it falls back to a navigate in our case. So like, if you,
[02:23:50]  if you're not, if you're not logged in this off state thing, you know, this could be anything, this could be a context. In this case, it
[02:23:56] 's just like a singleton expert from, uh, another, uh, another file. Right. So, I mean, basically you just added a show component as, as
[02:24:08]  a wrapper, uh, essentially. And, and wrapped and with the new ability to have like, uh, basically the shared layouts and stuff. So that like, basically
[02:24:20]  you could have a bunch of things within an invisible path. You can basically nest the routes without having any implications on the URL and have some of them authenticated and some of
[02:24:31]  them not, and just basically wrap it with a quick auth check component. That that's essentially a pattern that lets us use everything we already have without introducing new concepts or
[02:24:41]  anything. You're just using components, um, to render and we get to keep the router itself non-blocking, but, um, you can just write some blocking
[02:24:50]  logic in here. Yeah. So, you know, if you needed to do this like asynchronously, you would do the, the asynchronous stuff like within this component,
[02:24:59]  not within like the router. So like the router needs to render something and then you, you would make the decision to like check your auth state or whatever. Um,
[02:25:10]  right. But the, you, you could use the data function for the, for the route, or you could have a resource coming through context from above, um, both
[02:25:22]  of those kind of work. And then this will just read the resource and make the choice and just handle it. Um, there's actually a question kind of related to that
[02:25:30] , um, that was asked. Can you pass, uh, props to a route, especially from a parent route, for example, one that depends on parents async
[02:25:36]  data and specifically for this case where it depends on the parents async data. We actually have a really nice pattern for that, which we haven't shown off. We added
[02:25:46]  that a little while ago. I think we added that in a 0.3. Um, but yeah, so previously, yeah. So, so I guess there's kind
[02:25:55]  of like two parts to it. So if you just need to like, if you're, if you're like fear and you wanted to pass in a prop to like
[02:26:04]  one of these pages, you know, you could use the element form instead and then write home page as like JSX and pass in a property. Um, it seems like
[02:26:15]  generally component is like going to be what you want to do, but yeah, for like async data using the data functions, um, would be like the way you want
[02:26:26]  to go. So, and yeah, what Ryan is leading to is that we have like, we have a way where you can access your like parents' data, like
[02:26:34]  the, the result of your parents' data. Yeah. Previously we had, we, we gave access to like all of like every route above you, like either in the
[02:26:44]  data functions or in your like actual element, you could say like, oh, I want to get like the route data for like the previous parent or grandparent. And
[02:26:53]  it was like really awkward. Cause you had like passing a number and just like know where, uh, you know, how far up the tree to go. So now we
[02:27:01]  just simplified it to, I don't have an example, like ready to go, but, um, probably could use this one. Yeah. And actually give me,
[02:27:10]  I can actually just pull this right off the dog. Oh, you got one. No, I, I, I figured I could just pull this right off the dog.
[02:27:16]  Just give me two seconds. So now, yeah. Now in the data functions, we just provide access to the parents' data. And so if you want to access the
[02:27:24]  parent, you can just like be like, data object here. Right. We're not showing it in use here, but essentially because it's hierarchical, whatever you return
[02:27:35]  from the parent here comes in through here, which means then you can repurpose it through your own data function, whether to read it on your resource or whether to,
[02:27:45]  uh, pass it in to that lower context, you can kind of funnel it through. So this data could use that data to create your, this level's user data function
[02:27:54] . And in, so the child's there can have access to that data, how you choose to expose it. And what's cool about it is if you, uh,
[02:28:03]  you know, it's, it's hierarchical. So if you have levels that don't have data functions, um, it'll just pass all the way through
[02:28:12]  so like it, like you can, it can be kind of like a poor, poor impression of context. If you want, um, usually don't use it for that
[02:28:19] , but like essentially you can, you can like put something top level the route and, and through this kind of chaining, have it all the way down. Um,
[02:28:27]  but yeah, this is a powerful pattern because we get to hoist stuff outside of the regular, uh, routing or out of the regular rendering and still have access to
[02:28:38]  it all ahead of time in a non-blocking way. Like you can opt into the locking. Like if you feed this data into the resource, then that's delay
[02:28:49] ing this resource, which will have downstream, uh, implications, but essentially, um, you have the ability to wire this all up. Uh, yeah, actually,
[02:29:01]  actually looks like I do sort have partial example in, uh, that data fetching. Yeah, I know. I saw this spam in chat. I tried to block
[02:29:20]  it, but I, I don't know if it actually succeeded. Um, so it's now telling me that an Erica tried refreshing the page. It looks blocked on my
[02:29:31]  side. So. Okay. It's fine. Okay. Um, yeah, so hopefully that answers that question. Okay. Um, yeah, this, we've been
[02:29:46]  doing a bunch of work here as a lot of the stuff is actually documented here, um, ways of using optional routes, array, multiple paths, wildcards. And this
[02:29:57]  enables a lot of really powerful patterns. Some of them that, um, might not be realized yet, but I, I think, I think it's, uh, I
[02:30:05]  think it's really interesting, um, just how much you can do already with what's there. If you get a little creative with it, one example is for file
[02:30:14]  system routing in, uh, solid start were actually, uh, um, with, with file system routing versus in solid start, we're actually, uh, just exploding kind
[02:30:26]  of like his protected route component in that last example branch. So we just, we're just exporting a file routes and then you can insert it in your route or however
[02:30:34]  you want, right. It's very, very composable. Uh, yeah. It's all as official router. Yeah. Yeah. It's had it this whole time
[02:30:45] . I guess we're not really good at, um, advertising it, although it is on the main thing. We're, we're actually gonna be working to get an
[02:30:53] , get our NPM organization set up. So it's really obvious to find stuff. Yes. Uh, nested routers do, uh, do come in in
[02:31:01]  parallel. Um, yes. Yeah. And I, there's a, there was another question about, um, yeah, yeah. That was, um, so all the
[02:31:08] , all the route data functions are like synchronous. Yeah. So that's why you actually return like the accessor for a resource or something like that. Right. So
[02:31:18]  all the, all the data functions get run like immediately and then the like asynchronous part of it, you would, you would like return from it. So if you, if
[02:31:26]  you did have like a parent child relationship between two data functions, um, it would introduce a waterfall because you'd be like waiting on the first data, the first piece of
[02:31:36]  data, but both, uh, route data functions would run and then, and then you're stuck, you know, everything would like render, but there would be,
[02:31:45]  you know, you would sort of like Ryan said, would be opting into like that waterfall. Yeah, this, if that, that wasn't clear from my explanation,
[02:31:51]  the thing is, this is what I was talking about at the beginning, everything was synchronous. Then we all adopted asynchronous patterns that had inherent waterfalls. And then people started
[02:32:01]  coming up with ways of like breaking apart those functions and, and parallelizing them. But that made it actually hard to opt into waterfalls. Um, I, I,
[02:32:09]  I believe Remix probably has a way of doing it now, but it's actually challenging because they just pull all the functions and they don't like await. And our
[02:32:17]  approach, we went all the way back to synchronous again, because we already have that primitive. The thing is we can, this data is if, if it was async
[02:32:24] , it's not actually, it's, it's a resource. So it's just a signal. So we can just run this function immediately. And then if something has
[02:32:33]  to wait on that to do the next data thing, then you can choose, or you can pass it through. Like everything just runs function, function, function. And you
[02:32:39]  can just, it's like passing a promise through. It's the same idea except it's using solids primitives. So nothing is blocking. The other cool thing is
[02:32:47]  like the data functions are just like the router doesn't care. Like you can return whatever you want from them. So you can return like multiple resources or static data or whatever
[02:32:57]  you want. Um, they're just like a mechanism for, for calling some data when a route matches. Right. And then that actually, that actually ties in to
[02:33:06]  a lot, uh, a question that we had a little bit earlier. I'm trying to find it now. And I kind of, uh, I kind of pushed it
[02:33:13]  back when someone asked about, uh, about whether we plan to have, uh, uh, uh, you know, they said, well, reacts doing loaders and
[02:33:21]  actions. Uh, do you, do you plan on doing the same pattern? And generally speaking, I do not exactly. Um, and that's just where I'm sitting
[02:33:35]  at. I actually haven't even talked to Ryan about this too much. So I can kind of throw that out there. Why I'm not is, um, the
[02:33:43]  first thing is on the loader side, we don't actually have loaders. Like we don't have like a single async function. This is very important. We
[02:33:51]  want our stuff fine-grained and you saw how much work we put into making sure that the routes don't re-render unnecessarily. Well, take this a bit
[02:34:00]  further and consider that. Sometimes only some parameters change or some resource data is cached and others not cached. We have this ability to be completely granular and we,
[02:34:13]  it's in our interest sometimes to actually break a single loader into 10 different things. And we don't want the whole loader to run again. And, um,
[02:34:22]  we want part of it to come from a cache or, or whatnot. And this pattern means that we can have as many of these as we want. And then,
[02:34:33]  you know, we have other mechanisms like, uh, in solid start, we have these server functions and they just slot right into our existing primitives. So you can make
[02:34:42]  a resource and have it call a server function. That way, you know, it always is run on the server, but it it's, we keep this granularity.
[02:34:51]  So this is just, uh, this function gets called on the server and the client. There's no opting into the server function and the ACE stuff is like a
[02:35:00]  separate level. This is just an isomorphic loader. And Svelte actually started here with SvelteKit and then they also introduced loaders. We're
[02:35:08]  not introducing loaders because it doesn't actually make sense for their model. We can get better performance this way. And it's, it's not actually too much of
[02:35:16]  a stretch to kind of just define these data and just go, okay, no, this stuff's always on the server. This stuff you can do from cache. It's
[02:35:23]  just a matter of a few simple API calls, which, um, we'll, we'll show, we'll show, um, in the, in the future. But
[02:35:28]  on the other side, there's this, there's this sort of question then. Okay. Actions are, um, you know, being named from, you know
[02:35:36] , things like forms. Right. And, and, and essentially the thing with, with actions and, and, and, um, and, and forms is like, it
[02:35:53] 's very URL based and we obviously like that and it's, it's powerful, but, uh, we've also been living in a world, like in the same
[02:36:03]  way, I like the granularity of my fetching. I like the granularity of my actions. Um, you know, when I write my components, and this is
[02:36:10]  more of a meta framework consideration. So, you know, there is that, but the reason that there hasn't been any push to kind of get this into the router is
[02:36:19]  that there's different ways to model these things. And, and honestly, like the approach that we were, for example, taking this all start, it just, we want
[02:36:27]  progressively enhanceable forms. We want to have these actions, but do we need everything to be tied to the URL? Do we need to follow that pattern? Does it
[02:36:37]  need to be a question for routing? And I'm not sure it does. And, and, and the reason for that is something that I've learned from GraphQL,
[02:36:42]  um, in GraphQL, they have the split model, right? You do the gets and it's this deep thing, you know, where you can get like fetch as
[02:36:51]  deep as you want, set what data you want, do it as granular as you want. But then on the actions and the mutation side, it's just a bunch
[02:36:58]  of like RPC calls. Like, like, yes, it returns the same kind of nested data, but essentially it's a different thing. One looks like a,
[02:37:06]  like a data schema from a database. And the other one looks like a bunch of function calls. Technically those function calls can also return schema. But my, my point
[02:37:17]  is that like, there's a big difference in mindset between mutation and, and kind of fetching and getters. And so from my perspective, I don't want to
[02:37:29]  have, I want to have 20 actions on a page. I want, I could put 20 forms on a page, you know, whether the progressive or Hansel or
[02:37:35]  not, you know, we can still do this without running on the same URL and, uh, stuff like solid start is like obscuring that detail for you. So you
[02:37:43]  don't have to worry about it. I'm I believe me, I can't wait to show case what we've done here. I think we've managed to take the
[02:37:49]  best parts of react query, remix spell kit, and just put them in a package that's incredibly performant and incredibly usable. But I'm not talking about that today
[02:37:59] , um, even though it's super, super exciting. Um, but what I'm getting at is that the action part of the equation, um, at least for right
[02:38:09]  now, it doesn't need to be part of our, of the responsibility here. It does because our loaders. Aren't like that. Cause our loaders aren't
[02:38:16]  like run this whole load or re-render this whole thing. It's all fine-grained and we want our ability to do actions and mutations to be fine-gra
[02:38:26] ined. So that that's my answer. As I said, I haven't talked to Brian about this. I don't know if he's. I'm like,
[02:38:32]  I'm like right there with you. Like, I mean, I think that really is the responsibility of, of like the meta framework to be opinionated about like, like
[02:38:42]  sort of that, like how you do an action. Like, cause like you're saying there's, there's a lot of different ways you might set that up. Right
[02:38:50] . And, and these user data functions are also kind of unopinionated. As you said, you could return anything in it and yeah, there's a
[02:38:58]  clear hook when you do a get request against a URL that you need to do something. So we provide the place to do that. But are we modeling our update model after
[02:39:07]  posts? Are we monitoring them after RPC like GraphQL does? I'm a big fan of RPC. I'm big fan of TRPC. I'm like,
[02:39:15]  and that's, that's essentially. Like we may add this at some point in the future. Cause it might have, you know, it's so be it because
[02:39:23]  there are people who want that pattern, but you know, we'll see. I think you'll see solid start and just like, be like, oh, okay. Yeah
[02:39:31] . Forget about that. Um, but maybe not, maybe you still like what you want, but I, I, as I said, I, I, that that's
[02:39:38] , that's, we'll, we'll see, we'll, we're going to take our time with that side. Um, okay. Yeah. And I,
[02:39:46]  I, this is kind of, I want to actually start getting into talking a bit about, about the future and where things are heading. And that's why I was,
[02:39:52]  I was, I was looking at some of these, uh, questions here in the chat, because I think it's probably a good time to start talking, uh, questions
[02:39:59]  and stuff. And I'm just going to throw this up here so we can talk about it. I think we have one more like small demo that might pull up again.
[02:40:05]  I, I don't have the URL. I hope you have it somewhere, Ryan, but, um, I'll give you a moment to look for it. If
[02:40:11]  you don't, um, yeah, but essentially I want to, I want to talk about this one for just a moment here and answer some people's questions in the chat
[02:40:18]  while we're doing it. Because, you know, uh, this is a big thing that I'm talking about. I talk a lot about routing. So, um,
[02:40:24]  let, let's first address some of the questions here. Um, do you plan on making a vapor-like router that's tree shaken out of the client bundle with SS
[02:40:33] R, but no, no spa? I mean, this is sort of related to what I, what I was talking about. It depends on what you expect at a
[02:40:41]  client bundle with SSR, but no spa. I mean, technically speaking, if you do something like solid start and you remove the script tag, like, I don't
[02:40:47]  know what vapor like means. Like if, if, if you remove the script tag from, um, from a page, then you get the client routing on the server and
[02:40:55]  then the server, the, the, the, the, the server, like the client doesn't do anything. Maybe this, maybe this actually brings up like another thing.
[02:41:02]  We forgot to mention about the 0.3 release, which we were going to include in this. Oh yes, you're right. We should, we should mention that
[02:41:09] . Yeah. Yeah. Go, go for it. Yeah. So in 0.3, we, uh, we, we move the, basically we move the event handler
[02:41:19]  for like anchor, uh, tags up to the top level. So, so now we don't really like need the router in place in order to like handle like anchors
[02:41:30] . Like you don't, we don't need to hydrate in order to handle anchors. Yeah. This is super cool. I actually hinted at it on
[02:41:37]  the hydrogen stream. Cause I was like, why are you loading all this code if you guys aren't hydrating? Um, and the, the trick is. Yeah.
[02:41:45]  We write link tags. You can see these link tags on the screen in front of me, but what's really cool about it is by kind of delegating the, the
[02:41:52] , the routing handler. Um, and serializing during SSR, the right information into the HTML, into the DOM. We can author our components, however we want
[02:42:02] , you know, using the framework. And if we don't hydrate part of the page and still load the client side router. In the page, but don't like
[02:42:10]  hydrate the rest of the components. Don't ship any of that JavaScript. We can still do routing. This is a trick that I got from SvelteKit.
[02:42:18]  That's how they do the no hydrate routes. Um, solids router is built that way too. So essentially you don't need to hydrate a page from the
[02:42:25]  server to get client side routing. Um, like obviously you need to load the client side router, but you don't actually need to hydrate anything. Um, so this
[02:42:33]  is like super powerful. I, I haven't seen this in react yet, but full credit goes where it's due. This is how SvelteKit's router works
[02:42:41] . And I think that's great. And we added it to solid router about six months ago. So it also means you can just write anchors if you don't
[02:42:51]  want to write links, but links do give you some extras as far as like DX, like not having to specify the whole path and stuff like that. Right. Um,
[02:43:01]  there's, there's a clarification here. Vapor means the router code is completely excluded from the client bundle, but the rest is still there. I don't understand.
[02:43:09]  So you want MPA navigation, but full client side hydration. I, I think I might need another clarification there. What we've been talking about is kind of like
[02:43:20]  the other way, how to do nothing but bring in the client side routing, which is where I think the future of routing is happening. Like we are, I told you
[02:43:27]  our router is already very small. If we are ever going to bridge that gap, um, you know, between MPAs and single page apps, we will need
[02:43:35]  a client side router, but we need to do less with the pages we load. We've got to make sure that the pages are rendered on the server. We're going
[02:43:42]  to have less JavaScript, but we still going to need this. And that's why we're kind of setting ourselves up for it. As I mentioned, like, like this
[02:43:47]  anchor tag. Um, but the other way, yeah, I, I, I'm still missing something. Uh, what is this multiple granular? Oh, so yeah
[02:43:57] , this is a simple question. What does multiple granular in data fetching via solid router data API look like? Simply multiple return multiple resources. Yes. Yeah. Yes.
[02:44:07]  Yeah. That's exactly what it looks like. Um, I use this in the hacker news example. Uh, if you've ever looked at it, um, I don
[02:44:15] 't use return multiple resources. I just return whatever data I calculate. Um, you know, the page in the top from like a lookup table, you know,
[02:44:21]  what page you're on and do some like URL pram searching and stuff. And I'm like, ah, I don't want to do that again in the components.
[02:44:27]  So I just send it back in the resource and they all just get sent back in the data function and it all just works. So yeah, you can send back as much
[02:44:35]  as you want. So you can, you can put 10 resources in a data function and you can then have a child listen to three of those and do cascading waterfall
[02:44:45]  and stuff if you want or pass it through. Like it's all non-blocking and you can return whatever you want. It's very, very flexible. Yeah
[02:44:52] . And you should also add that the data functions only, only run when that route like is entered. Like if you weren't, if you were, if you're on
[02:45:02]  that route already, like think of the ID route, it's only gonna, it's only gonna run for the first, the first time you go there until you navigate away
[02:45:11]  and back. Right. And then you're, you're reliant on like a reactive system. So like the parameter will be reactive. So you would pass that into
[02:45:18]  your resource. Yes. So, so if you wanted to return something that is gonna like exist forever, you know, you could just return that and a resource which updates with
[02:45:30]  like the params or query params or location or, you know, anything like that. Yeah. Yeah. Yeah. Yeah, exactly. Our data functions render once
[02:45:39]  too. Yeah. Yeah. So they're really just like a component. Yeah. I just, yeah, they, they basically are. Yeah. Um, so yeah,
[02:45:48]  it's all, it's all, it's all solid patterns all the way down. And that means as always, we can get that performance, you know, um,
[02:45:56]  people, wait, wait, I'm not supposed to talk about performance anymore. Sorry. I keep on forgetting that everyone's like, stop emphasizing performance on your stream.
[02:46:02]  And it's just like, yes, uh, but I mean, it's a wonderful marriage when you can come up with really, um, like DX and the user experience
[02:46:09]  that makes like our sort of developer experience that makes a ton of sense. And then it's just like super performant. Like I, I can't like that's,
[02:46:17]  that's what we're doing. It's that blend. So yeah. Sorry about that. Sorry for mentioning performance again. Someone told me we get it. Solids fast
[02:46:25] . Now you're hopping on it. Okay, fine. No, that was feedback. People like I watch her on stream, but you know, after a while it
[02:46:34] 's like, we get it. Solids fast. Yeah. But it's like, I mean, it's an important consideration to keep in mind, like all the time
[02:46:41] . Right. You gotta, you gotta, you gotta keep it up. Like you have to, you have to consider it. Right. I was actually gonna, I was
[02:46:47]  actually gonna make a quote. And, uh, I, I, I decided against it to someone. Cause I was like talking about the benchmark stuff earlier with Mishko
[02:46:54]  and stuff. And I was just like thinking in my head, I'm like, you know, the reason I take this stuff seriously and I wanna build new benchmarks and
[02:47:00]  stuff really is, you know, in a sense, uh, you're only as fast as the latest benchmark. Um, that's, that's, that's sort of
[02:47:07]  like where we are in the front end world. Uh, solid generally does pretty well, but like someone came up with a really cool benchmark the other day, uh, for
[02:47:15]  concurrent mode essentially. And they showed a place where react was faster than every framework. And he actually copied the react code and did the solid code. And he's like
[02:47:23] , yeah, look, it's faster. And I was like, I looked at the example. I'm like, oh, I know why he didn't. We,
[02:47:29]  we put our certain concurrent rendering under a flag and essentially because I'm not convinced, I told you the current render for performance is important. It adds a whole bunch of code
[02:47:38] . Well, luckily for you with build tools by putting it under a flag in a certain way, it's completely tree shakable. So I don't turn it
[02:47:44]  on. So you don't take the hit, but if he just needed to go in and add like enable scheduling and then someone is like, oh, now it's faster
[02:47:52]  than reactive again. So like, but the thing is, everybody's going to come up with their own benchmarks. You can't keep on top of them all. So,
[02:48:00]  um, it's difficult, but I, so it's really good to, you know, have a lot of them and just make sure stuff is fast. And sorry,
[02:48:08]  I, but this turned into performance rant. Um, sorry about that. Um, there was another question. Is solid looking at being available in Dino? Maybe as
[02:48:17]  a replacement for preactive. Fresh framework. Uh, that's a little loaded first half. Yes. And solid start already has a Dino adapter. Um, and Net
[02:48:25] lify is deployed on Dino as well. So you can use solid with Netlify on Dino. You can do it as a replacement for fresh. I talked
[02:48:33] , uh, I was on, uh, Nick Taylor's stream and I think he was on there and I was like, and he was like, yeah, you know
[02:48:39] , you can look at working in solid. I think there's some challenges that come in because they. Fresh right now is like a no build, no. Yeah. Like
[02:48:48]  no build framework essentially. So they just use the typescript transform. Obviously that doesn't work for solid. Um, so I don't see us like just swapping
[02:48:56]  in for fresh. Um, interestingly, if you care about performance, you care about a lot of these sort of elements. I think a certain amount of compilation is inevitable.
[02:49:08]  So I, I am interested to see how the story with Dino and fresh plays, plays out. Like, I, I think this is a good stage and I think
[02:49:15]  that's interesting, but as I said, uh, you know, we w w w the chase for performance will eventually like take us further than that. And I,
[02:49:24]  I'm, I'm, I think Dino's got some SWC underpinnings and I think that's going to be the thing like compilation is not going away.
[02:49:31]  Build is not going away. Okay. Uh, yeah, sorry. So the, the, got sidetracked for a minute, um, about, about this stuff
[02:49:42] , but essentially the cool thing about that change we made in the router to detach it was that, um, and I've showed this before on stream, but I just want
[02:49:53]  to talk about this a bit more and put in more of the context is now, if you're, we can basically not hydrate and have the client and just load the
[02:50:01]  client side router and have nothing else going on and have it have a server rendered page that does that. And, um, I'm sharing the screen now, uh,
[02:50:09]  for Ryan's demo. Cause I've talked about this with demo, but I've never had him on the talk about his, his demo. So yeah. So this was
[02:50:17]  something I don't know. I think Ryan and I both had this like same idea around the, the same time. And it was like something that was bugging me like
[02:50:24] , like over a week. So that weekend I spent some time just like hack this, this thing together. But the idea is like, it's trying to like,
[02:50:35]  it's trying to marry the spawn MPA like ideas together. Um, but basically what we're trying to do here is, is render on the server. And then
[02:50:47] , and then, and this is kind of like react server components, sort of stuff too. Render on the server and then, and then swap out only what's changed
[02:50:57]  on the client. So, you know, as we can see, we can navigate around here. And, and these, these pages are rendering, but if, if
[02:51:06] , if he goes to the network tab, you're going to notice something pretty interesting. Uh, refresh the page on one of those links. It doesn't really matter.
[02:51:12]  Okay. And filter. And what you should see is that we're going to load a JavaScript bundle. Um, and that JavaScript bundle is a little hard to see for me
[02:51:25] . I don't know if I can, can you zoom in dev tools? Yeah, you can, if you focus on it and no, just, just use like command
[02:51:31]  plus or whatever it is. But yeah, we might have to stretch it a little bit now. Um, the thing is he loaded a JavaScript file. There's 1
[02:51:41] .4 kilobytes right now. Continue navigating around. So now we load comments. Plus two, but those aren't JavaScript files. Yeah. Those are data requests.
[02:51:54]  No. So there's no new JavaScript. This whole app is working off 1.4, uh, kilobytes of JavaScript. Because all it is, is he
[02:52:03]  it's a server rendered app. That essentially that only loads the client side router. That router is 1.4 kilobytes of. Yeah. It really just really just
[02:52:15]  loads an event handler and like a tiny little extra piece. So essentially this is server rendered solid. And the only thing we ship is 1.4 kilobytes.
[02:52:25]  And as he navigates around, you're seeing the page update. And the reason for that is. Yeah. So you'll see these like outlet. These are basically where
[02:52:34]  outlets exist. Um, so if I navigate between like post one and post one comments, if I go back to, I'm on the comments right now. If I
[02:52:43]  go back to post one, you'll see only this part, only this outlet is like changing. Yeah. So it's, it's nested routing with. And
[02:52:55]  the thing is, how are we drawing this new content? Um. Yeah. So basically if we look at the network tab again. You know, we can see we
[02:53:06] 're like loading these, making these, you know, fetch requests. That are sending in the HL. Yeah. If someone pointed out, this is like. Someone's
[02:53:15]  pointing out that this is like turbo links from rails. Um, which is, which is a, which is a good point. Um, it is. Um, but essentially
[02:53:25]  this is a, like a nested routing version of it. And like, this is possible because even though everything's rendered on the server with link tags and all that
[02:53:35]  stuff, we have enough information serialized with this, that. Anchor tags, even if not hydrated work. Um, and as I said, this is, this is
[02:53:44]  probably only the foundation where this gets interesting. Oh yeah. Is when you can hydrate. Um, right. Like right now there is no global state. So I'm
[02:53:54]  gonna ask them, what do you, how do global state? Do you request each time? This is totally like true. Like, this is a trivial example. That doesn
[02:54:02] 't have like, it doesn't have context. Doesn't have like global state. Um, stuff like that. So that would be, that's kind of like the
[02:54:07]  next step. Right. If you go ahead. Yeah. Cause what, what I was getting at is like, this is just showing like, cause I mean, these are
[02:54:14]  simple pages. Maybe we should, we could play around and make the HTML larger on this demo or something at some point to kind of get a bigger feel, but it is
[02:54:20]  fairly snappy. Um, in terms of the way the navigation is, you could get sworn as client side routing. But the interesting part is how do we hydrate?
[02:54:27]  And that this eventually is probably is that, is that bridge we need if we, if we want to talk about MPA versus spa, right? We need to get
[02:54:36]  to a point where we can, you know, hydrate just the parts that we need. Send the last JavaScript. I think the interesting challenge here obviously is if we have
[02:54:45]  state, this is nested routing, right? But what if the highlight state of the posts or the navigation has to change? Well, you do need some JavaScript to
[02:54:53]  update that in the client. So bridging that gap does make this a lot more tricky, but I I've seen, I've been seeing people talk about these future patterns
[02:55:00]  to routing and they're speaking really, uh, kind of vaguely about it and talking about the mechanisms. I just wanted to show you all like what a simple prototype actually
[02:55:11]  looks like working. Um, I want this with streaming. So, so do I, um, I, I, I think, I think, I think this is
[02:55:20]  like going to be like, this is, this is just one of those building blocks about where we're going. And as you can see, we're putting the right pieces
[02:55:27]  in place. The reason this effort is kind of halted for the last three or four months is because the, because one of the challenge and the reason for that is because
[02:55:37]  essentially from this point, you, you need to kind of focus down, right. This is the highest level. This is like the architecture. Then the middle level is
[02:55:48]  like, is like the islands or what quick does or something like something on that size or Marco. Right. And then the lowest level is like, how do you actually do
[02:55:57]  the hydration? You have to do like, um, the resumability and all that stuff. Solid is very much on like their hydration, rendering, resumability
[02:56:04] , like low level stuff. So it's, there's a bit of a gap. So even if we get this working, it, it won't be in the best
[02:56:14]  possible state. We'll be loading too much. JavaScript. We'll be doing too much hydration work. So I I'm kind of taking the approach right now with solid
[02:56:21]  focus. We've starting on the low. Level stuff, make it the most resumable and the, you know, best hydration story possible. And that that's beneficial
[02:56:30]  to everyone because, you know, frameworks, the gastro or, or quick, they're bringing in other frameworks, components. Solid will just. Could be just de facto
[02:56:38]  the best choice for, for islands. Um, at some point in the future, if we figure out our solution for server components or whatever we want to do on that side
[02:56:47] , maybe we can offer another alternative to astro or quick, if that makes sense. And then finally get to routing. So I talk about running so much because I
[02:56:54]  want astro and quick in them to work on routing. Cause that's not like, I, I want to get here, but we're, we're, this is
[02:57:01]  about as far as we can take it without the other pieces. Right. Um, so I'm, I'm just putting the call out there, you know, there is
[02:57:08]  really three layers here and I'd love to have the people working on this. Like if this interests you and you want to like parallelize the efforts, come, you know
[02:57:15] , we've talked to Ryan and we can, we can, we can, we can actually get that those efforts going. But from my perspective, pragmatic, uh,
[02:57:22]  working from left to right. Um, this is like the highest level of the tree and the, the one that's going to take a while. And that's why I
[02:57:29]  keep on bugging. I, I jump on people's discords and quite annoyingly be like, how's routing going? And, you know, so, um
[02:57:36] , yeah, this, this, I just want to continue pushing this conversation. Cause I, I know it's so important, but I also know at the same time that
[02:57:45] , um, there's other problems, uh, and other solutions and places that we can make improvement that could, you know, better benefit from one of my efforts.
[02:57:53]  Um, and the, the interesting thing about building this was it's, this is built off top of solid start. I didn't want to have to like change anything.
[02:58:03]  All I did was like delete all the clients. Like I just didn't import like any of the script tag and then I took the router and I basically just tweaked
[02:58:12]  it a little bit and it, I got rid of all the reactivity in the router. Cause you don't need it on the server. And then, yeah. And
[02:58:19]  then I basically just copied the event handler for the client and add a little bit of code. So yeah, it's interesting how that like came out, came together. Obviously
[02:58:28]  it doesn't do any of the interesting parts that you need next. Like you, like you just described, but. Yeah. There's another question in here. Someone
[02:58:37]  asked, what are your thoughts on bun? Will it impact the performance of solid or you are the, to be seen separately? I mean, bun is great in that.
[02:58:44]  I mean, he's attacked performance in so many places. It's very unlikely that using solid with bun wouldn't improve performance in some way possible. Like he, he did
[02:58:55]  some work on streaming and he improved, uh, react server streaming, like SSR three times in his benchmark, like it's three times faster. I have to imagine
[02:59:05]  that there's going to be some positive benefit to solid. If he does that as well, like I'm, I'm not, I'm not sure. Um, honestly
[02:59:13] , if it translates the same way, like it's one of those kind of funny things, right? Like at a certain point, you're like, maybe this stuff
[02:59:20]  all just adds up. Right. You know, but it, it doesn't quite work that linearly. If it makes sense. Like, like let's pretend that bun makes
[02:59:29]  react react to reacts, uh, rendering three times faster than like, than it is. So you have normal JavaScript node runtime running react SSR, and it's three
[02:59:39]  times faster. And then solids SSR is, let's say. It's about 10 times faster or eight times eight, eight to 10 times faster. Now, does that
[02:59:50]  mean that if we take bun and apply it to solid, that, that suddenly like, like it's 24 times faster than that original react example. And the answer to
[03:00:04]  that is no, it, it, it usually doesn't scale linearly like that. But my hope is that at the level that the optimizations happen at bun, it is
[03:00:14]  closer to linear than you'd expect from the common combination of most, uh, um, kind of performance things. Cause usually what happens in this in performance is it doesn't
[03:00:25]  multiply. You just find the next bottleneck. That's, that's what usually happens. Things will get a, like a little bit faster and then you'll just
[03:00:32] , you'll just like, you'll, you'll be like, oh, why isn't it 24 times faster? Why is it only, uh, why did it only
[03:00:39]  double? Why is it only six times faster? And you're like, oh, this actual other thing is actually slow. And then you can try and improve that. And
[03:00:46]  maybe you can't actually get it all the way and you never get to that theoretical 24 times faster, so to speak. So that's my experience at least. So
[03:00:55] , um, I think bun is great. I want to use it with solid. I want to see how far we can take performance. Um, but like, you know
[03:01:05] , I imagine that mileage will vary. Yeah. Yeah. Yeah. It is a little bit like the, like, like the FPS thing, right? Some, it
[03:01:21]  makes it harder. Like gets harder and harder for me to make benchmarks because of that. Yeah, exactly. There is similarities. that being said, there are certain parties
[03:01:35]  that do, uh, benefit from, uh, from this. Uh, you know, like if you have a server and you're paying compute by the millisecond or whatever
[03:01:46] , or a hundred milliseconds, then, uh, doing less work is good. But I was joking a while ago on like solid SSR must be saving someone money.
[03:01:52]  Um, but I, it won't make a difference to the end user as much, especially on that side. On the rendering side, I think the architectural changes that like
[03:02:01]  quick and Marco we're looking into will have a bigger impact on the user, which is part of the reason that earlier questions. Some people are like, how do I
[03:02:07]  use this stuff without JavaScript backends? Uh, right now it's a little bit tricky because, uh, JavaScript backends let the client do smarter things with, and I
[03:02:15]  think that's where you get the bigger, the big UX win. No matter how much cost savings, you can always throw more machines at it. But if you want your
[03:02:22]  end users to have a good experience, um, having JavaScript on the, on the back end, um, at least to leverage, uh, client side, modern client side
[03:02:32]  frameworks is almost a must. You could go back to Misko's or Misko's, uh, article, you know, where he was like showing off that,
[03:02:40]  uh, that stuff, you know, showing off the, uh, um, you know, like the fact that like he was calling PHP unmaintainable, you know
[03:02:49] , that generation where you have the two apps and maybe there's new ways to do that. That's the thing. I'm, I'm never surprised when these things change
[03:02:56]  in the paradigm shift around. Um, I mentioned before something really cool from Matt Phillips who also works on Astro, uh, but core set like, uh, using
[03:03:03]  CSS as a way of layering stuff on top. Maybe that feels more natural. Like there's always new patterns. You can't count it out. I'm just saying like
[03:03:10] , if you, if you want to take the modern declarative style stuff, like you're aware of with solid, quick react, then yes, I think, uh,
[03:03:17]  JavaScript on the server is where we're at for the time being. All right. Well, we are, God, we are basically, um, getting here to,
[03:03:32]  um, end of our time. If there's any other questions for Ryan, um, and myself, let us know, but otherwise we're going to wrap up pretty quick
[03:03:40]  here. It's been three hours. Um, I wonder actually, uh, just gonna check if Theo ended up actually doing his stream today. Um, cause I,
[03:03:54]  I, I think that, um, should probably, uh, head over there if that's what he's doing, but I am not sure. To that, to that
[03:04:06]  last question about data fetching, um, it's basically running like the router as is on the server. So like the initial, like the rendering will, could have
[03:04:17]  data fetching, but that none of that stuff's in the client. You know, we're talking about this example here. Um, and yeah, like transferring state back
[03:04:27]  to the server is definitely like a problem to be worked out. Currently what it's doing is it's saying like it's, it's sending back, and this is
[03:04:36]  like something that, uh, react server components is going to have to like tackle as well. Like you need to be able to send back like a state to the, to
[03:04:45]  the server. And the only state we're sending back here is like the current location. That way we can say, okay, we're at this location and now you're
[03:04:54]  requesting this new, new location. Uh, what's the difference? Like what part does the client need back to, to like replace, but yeah, but we're
[03:05:05]  not really doing any like, uh, data fetching kind of stuff yet. Right. Sorry. This question. Yeah. Sorry. I was just checking and see Theo's
[03:05:14]  up. Yeah. Theo appears to be up. So I strongly recommend if you're into following some more streams and stuff to head over there from stream yard, I don't
[03:05:20]  actually know how how to raid him and most of you all are on YouTube anyway. So, uh, we'll leave with that. But, uh, thanks everyone for
[03:05:27] , for joining us today. Um, I had a lot of fun. It was great to have Ryan on the stream. Um, and I hope you, uh, look
[03:05:34]  forward to the things that are coming. As I mentioned next stream, I'm gonna do on quick city, which is, uh, quicks, uh, meta framework
[03:05:42] . And then from there, um, uh, hopefully follow that up with a solid start stream. Um, either the, the one after the one after that, I keep
[03:05:55]  on saying that I'm just, I'm so protective of my, my stuff, uh, and all the stuff we've been working on, uh, and at a
[03:06:02]  certain point we, we just gotta put it out there. So thank you everyone for joining. Um, it's gonna be a lot of fun. Oh, hey, I
[03:06:10]  have an user. Oh, did I? Yeah, I mentioned it. Yeah. I, I definitely mentioned, although I don't, uh, that, uh, about
[03:06:16] , um, JetBrains sponsorship for a solid. I'm pretty sure I did at the beginning. It was, it's huge. They're giving us, uh,
[03:06:24]  they're giving a, they, them and Netlify now are, are, um, biggest monthly, uh, um, um, subscribers, uh, or,
[03:06:32]  sorry, contributors to our open collective. Anyways. Yeah. If you guys are all gonna go over, um, do say hi to Theo in his chat, tell him I
[03:06:39]  sent them. But other than that, you guys have a great weekend and, uh, see you next week. All right. Thanks for having me. Yep. Thank you
[03:06:47] . Bye.