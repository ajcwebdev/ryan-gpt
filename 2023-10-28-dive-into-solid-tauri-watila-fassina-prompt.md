---
showLink: "https://www.youtube.com/watch?v=yLjqh6dKdBc"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Dive into Solid + Tauri w/Atila Fassina"
description: ""
publishDate: "2023-10-28"
coverImage: "https://i.ytimg.com/vi/yLjqh6dKdBc/maxresdefault.jpg"
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

[00:00:00]  - Hello, everyone, and welcome to my stream today. Sorry, I'm running a minute late. I had to rush off. I did not have my trusty glass
[00:00:07]  of orange juice yet. So, how's everyone doing? Not long now, yeah, sorry. All right, excited about this one, right? Like, we talk about
[00:00:22]  the web, we talk about solid, and I think there's a misunderstanding that a lot of like the benefits of the virtual DOM, it's the fact that, you
[00:00:31]  know, it runs anywhere, like other things can't. And I think that's something that, I mean, I think it's kind of known that's been dispro
[00:00:40] ved, but what's interesting about Solid's model in general is that it's not even like we need a custom compiler for different platforms. Obviously things that are web-like
[00:00:53] , any framework could say that, but in general, I think it's interesting that the patterns of reactivity have nothing to do with the side effects they produce, nothing
[00:01:05]  to do with the DOM, nothing to do with even a DOM-like model. So, that's why I'm gonna spend the next couple weeks here looking at this.
[00:01:18]  This week, we're fortunate enough to talk about Tori. Next week, I'll be talking about NativeScript. So, I was able to find people from both
[00:01:28]  projects to come and talk about it. So, I'm pretty strict about that. Yeah. How's everyone doing? Oh, yeah. Oh, yeah. You're coming
[00:01:36]  back from NextConf? Yeah. Hey. Yeah, I've heard great things. People keep on telling me that this is like a pairing made in, you know,
[00:01:47]  match made in heaven. Especially, people keep on telling me that both on the desktop and on the mobile side. So, I think it's good to actually highlight this,
[00:01:55]  because Solid's, you know, memory profile, the way it executes, I mean, we'll learn more during the stream, I suppose. But, I've
[00:02:01]  heard, you know, this is quite the thing, you know. Who's Tori? That's a great question. All right. I should probably tell people that we
[00:02:16] 're gonna be up and live here on the stream in just a moment. I have to say, this is, a moment ago, I installed Rust on my computer,
[00:02:25]  I think, for the first time, right? We had Greg on here from Leptos, but he did all the hard work last time. So, I never actually
[00:02:34]  touched Rust. But, this time, we're going to actually do some stuff locally, I think. Let's see here. Actually, I probably should tell people that we
[00:02:48] 're live. All right. We'll get a few more people joining the stream on the Twitch. Get past those pre-rolls. What is it? Twitch.
[00:03:06]  TV. God, I can't even remember my own URL. Is it RyanSolid or RyanSolid9? I'm gonna actually, like, open up
[00:03:17]  Twitch another window, which I should do anyways, because people coming on Twitch actually do stuff like subscribe and participate in the stream in more meaningful ways. And I miss it
[00:03:27]  from StreamYard. So, yeah. Let me get that going. Although, I guess... Yeah, no, I'm also excited to have our guest on here.
[00:03:45]  We met back in Brussels at a conference, and it was a lot of fun. So, it's great to find the opportunity to catch up. I mean, as
[00:03:57]  I said, I use these streams for multi-purpose. All right. I'm just catching here in the chat. I'm just... I gotta get some people some
[00:04:17]  time to actually join the stream here. What do we got? Yeah. I'm using RustWall. It's interesting. That's interesting. I wonder what the interest
[00:04:32]  is. All right. All right. All right. Have I killed enough time yet? I'm just reading... I'm just reading the chat. Electron, yeah
[00:04:57] ? I haven't... Honestly, I had some trouble with Electron in the early days because of the build output differences and trying to wrestle with Webpack. I'm
[00:05:09]  hoping this experience is a lot nicer. But, all right. How are we doing here? You gotta give those people off Twitter like a moment to actually wake up, you
[00:05:23]  know? Get there on Twitch. Because the YouTube people are out, but the Twitch people are only slowly rolling in about now. All right. All right. Cool,
[00:05:33]  cool, cool. Yeah, I'm seeing them come in. Bit by bit. Those Twitter folk are slow, yeah. It's all good. I didn't... I
[00:05:50]  don't know. I didn't catch much of NextConf yesterday. I grabbed some kind of announcement they had about server functions. But I have not actually seen most of
[00:06:03]  the coverage. I dropped onto Theo's stream at like 11 or noon. And then it was just like them talking for like two hours. I thought they were going to cover
[00:06:14]  some stuff. But it was just a lot of banter and putting on fake mustaches. And as you know, this is not the fake mustache stream. This is
[00:06:23]  the fake sunglasses stream. So, you know. They're too busy responding to SQL injection concerns. I don't know. I mean, we will talk about this. Because
[00:06:36]  like... As you know, Solid Starts had server functions for a couple years now. And our processor functions are slightly different. But syntactually, I'm getting
[00:06:47]  kind of... We're getting kind of pushed into the Reacts realm. And I think that's a topic to itself. And I'll talk about that. One of the
[00:06:54]  most interesting things for me is... Trying to figure out how to make these things relatively secure and reasonable. While still giving the power behind it. Because like... We all
[00:07:08]  know we want these RPC calls in some form. So much so that I don't feel like it should be a feature that's restricted to things like server components. I
[00:07:16]  think actually... This should just be like... If you have a server... You can CSR your app and still use it. Like why can't I just have a
[00:07:25]  client rendered app. Like I did back in the day. And have server functions. You know? Why not? I think the possibilities here are really interesting when you approach it
[00:07:34] . From a primitive standpoint. They covered the first few talks. Ah. Well. No. But if someone wants to send me that link. I would love to see it
[00:07:47] . Maybe talk about it this week in JavaScript. Anyway. Anyways. Anyways. I am just killing time because I can. But I should actually swap this up a bit
[00:07:55] . And we should actually get on with the show. So. Let me wait no longer. And invite our guest Attila to the stream. Welcome. How are you doing
[00:08:07] ? Hello. Hi everyone. So. Yeah. Before I introduce myself. And most of you don't know me. But I'm actually the guy that made the slide.
[00:08:18]  That got Ryan to wear these glasses on the stream. So. That's it. Oh my god. Yeah. I just win my week now. Yeah. No.
[00:08:34]  It was funny. I still have. Is there a recording of that talk yet? I haven't actually seen the talk. I've only seen the slide. There are
[00:08:44]  a few recordings of the talk. But I think they haven't published yet. I know that. Revo.js recorded. React Alicante recorded. So. Yeah
[00:08:53] . They're going to be available soon. I'm going to. I'm going to. This slide is going to be showing up again. This Friday. On City.
[00:09:02] js Berlin. So. Be prepared for Twitter. That's awesome. But yeah. The point is. With that slide. Was actually to. Give credit. Because I
[00:09:18]  remember. When you started talking about signals. And you were the only one. And then suddenly. Now every framework is. Is using signals. So I think it was well
[00:09:28]  deserved. To make a joke about that. Yeah. Thank you. Yeah. I've been enjoying. You know. A little bit of the. Kind of. Energy
[00:09:37]  that's come around that. I actually. Was on the Angular documentary. This week. I was part of recording that. So. Just. Crazy. When I started doing
[00:09:47] . What I was doing. You wouldn't expect. That like. The. Some of the biggest. Existing frameworks. Would like. Change. Like. I mean
[00:09:55] . Honestly. If I thought they would change. I might have actually. Joined up. And teamed up with them. And just actually. Like. Just done that way
[00:10:01] . But like. If you go back. To like. Seven years ago. The chances of this happening. I wouldn't take those. Vegas odds. You know.
[00:10:09]  Like. Yeah. Yeah. I totally get that. But. Even with. All the frameworks. Adopting it. I think it's. Pretty nice. That.
[00:10:18]  They're also. Adopting. With. Their. Own. Particular. Takes. And. I do like a lot. The. The solid. JS flavor.
[00:10:27]  To be honest. It's not because. I'm on your stream. Because. People. As. Alex just pointed out. I've been playing around the solid.
[00:10:34]  For a while. In the chat. So I did like. A few videos about. With web workers. And stuff like that. And. I do like the model
[00:10:41] . Around it. How we play with signals. In solid JS. So. Yeah. I think it's nice. Thank you. Yeah. I mean. I hope it
[00:10:51] 's nice. I spend. A decent amount of time. On this kind of fundamental. Building block. Kind of approach. Which I think. Is not as easy to
[00:11:00]  get. When you kind of. Add them. Retroactively. Like. The truth of the matter. Is it's a migration. You know. I think a
[00:11:08]  lot of people. When they look at this. And go. This framework can do this. Or can't do this. I think that's too strict. What. What
[00:11:13] . More realistically happens. Is. They adopt. Like any kind of software. They adopt something. And then. You know. Start changing the surface. And then. Mig
[00:11:21] rate the. The underpinnings. After the fact. So. Like. We're seeing. That kind of happen. It's first. You get signals. Then people
[00:11:28]  are using signals. Then you get to throw away. Your VDOM. Or your. Top down render. Right. We're seeing that with Vue. Moving
[00:11:34]  to Vue Vapor. We see that with Svelte. Moving to Svelte 5. We. You know. So. We can see that a little bit
[00:11:41] . With Quick actually. They've found ways to get around. Their virtual DOM as well. So like. You know. It kind of. This is just the beginning.
[00:11:51]  Of this phase. And I guess. Solid is already in a. Very good position. Just because of. That's how it was built. In the first place. Yeah
[00:11:58] . Absolutely. And that's actually. More or less. The. Gist of. Where my talk start. Like my talk goes. Because I actually start with.
[00:12:07]  And there's a new article. From you on dev.2. About signals. I forgot the title. I'm sorry. But. Where you point out that. You
[00:12:15]  learn a lot from React. And you picked a lot of React ideas. When creating solid. And that's actually. Exactly the point. Where I start. Like React has
[00:12:25]  really good ideas. But then at some point. We started challenging the VDOM. And then. Because of some. Yes. Exactly. This one. So thinking
[00:12:34]  locally with signals. And. Then I go from. Like. The different spectrum. Of like. The flavors of VDOM. And that's where I. Try to
[00:12:45]  position the frameworks. And in this like. Linear graph. Where you pointed out. That I. Mistakingly put. Isvelte in a place. And quick
[00:12:55] . In front of it. So. Exactly. We had some terrible drawing. On stream about this. And. The problem is. This isn't even. This is
[00:13:07]  where they're hoping to be. I think. In the short term. But they're not even here today. This is like. Everybody in six months from now.
[00:13:15]  Is this sort of. Yeah. So. Yeah. I'm not that familiar with runes. To be honest. So I didn't know. They had any intention
[00:13:26] . Of going all the way. I know that a lot of frameworks. When you fall. Fall out of reactivity. They just re-render the whole thing. So
[00:13:36] . That's. That's what. That was my intention. With the graph. And sort of. Try to exemplify that. And then. Point out to people that
[00:13:45] . Oh. If you're not. Ready to fully commit. To find reactivity. You can have like. Different ends of the spectrum. And play around with that
[00:13:53] . So. Right. Yeah. I think that what's. The thing that this draft. Or that these kind of things. Don't show. Is the real power.
[00:14:01]  Of fine grained. Is the flexibility. It isn't that. It's always best to be. The finest grained. It's that you. Once you have that
[00:14:08] . As a variable. Once you have that. As a control. Then you can choose. To go wherever you want. Because like. You can put a virtual dom inside
[00:14:18] . You know. Fine grained update. If you wanted to. You can make it super coarse grained. If you want to. But once you have. The
[00:14:24]  change mechanism. At your control. Which is very different. Than saying having. An existing external system. Which has its level. Of how it does things. And then trying
[00:14:32]  to. Drive it. Using reactivity. Because you're still. Going to be bottlenecked. By whatever that original system is. Yeah. Theory. Theory. Yeah.
[00:14:43]  No. To be fair. This is very arbitrary. Like. If I said it. Today. Like. You would have to get. Yanked back. Here somewhere
[00:14:50] . And then like. You know what I mean. Like. This chart's just going to. I think that you can see. That there's this trend. Right.
[00:14:57]  Like. Yeah. And this is sort of. A very interesting thing. Because I think a lot of people. When they first saw solid. Were like. Oh. It
[00:15:04] 's like react. But maybe a little bit nicer. And they miss. The revolution. So to speak. Everyone's like. Oh. You know. I'm waiting for
[00:15:11]  that thing. That's 10x better. You know. Or changes things. In a significant way. And it's like. Yeah. I mean. I can see it
[00:15:17]  from like. A DX standpoint. You come in. You might not like. Notice things right away. But there's enough here. That all these guys around here.
[00:15:25]  Are just like. Yeah. Yeah. Yeah. And that's also like. A little bit of my demos. As well. Because with react. Forget. And auto memo
[00:15:35] ization. This kind of stuff. It's. It's not quite the same. As not re-rendering. Which is what. A lot of people. Have resonated
[00:15:42]  the most. With my talk. Is. About the DX. About like. How the mental model. Kind of fits better. When there are actually. No re-
[00:15:50] rendering. And it kind of makes. A little bit more sense. I guess. Or it's easier to grasp. At least. There is like. Since we
[00:15:59]  fully adopted. Solid. On Crab Nebula. We were building. A few products with that. And I've had a situation. Like. Where we were building.
[00:16:07]  A very data intensive app. Just consuming. A bunch of data. From a stream. And. At some point. We needed to play around. And I. We needed
[00:16:16]  to. Put some data. In the middle. And stuff like that. In an array. And or using stores. And somebody just. A colleague of mine. That's
[00:16:26]  more of a Rust developer. And the front end said. Oh. What about the re-renderings? I said. Dude. That's solid JS. We don
[00:16:32] 't need to worry about this. It's. It's going to work. And then. Yeah. Yeah. I got it. That's awesome. Someone's asking about
[00:16:40]  quick. Quick is this. Q down here. That you. Like. Probably barely see. I don't even know. If this is like. Accurate. Because like
[00:16:47] . It depends. Quick is like. Manic. Kind of. It goes from being. Where Vue is today. To being like. Where solid is. Like.
[00:16:54]  Depending on the situation. So. It's hard to place. It exactly. In the grid. If your data. That you update. Is. In a text node
[00:17:02] . Or like. On an attribute. It works. Almost identical to solid. If it's structural. Like for loops. Conditionals. All that kind of stuff.
[00:17:12]  It works like Vue. So. Um. It. It depends on. Where you. Where you do it. And actually. If you put the stuff. Right.
[00:17:22]  In the component body. It works almost like React. So. Um. Quick's a little bit hard. To. To say where they fit. Exactly. I.
[00:17:31]  Let's just say the average. Somewhere on the. On the. On this side. Anyway. Sorry. But yes. Sorry. I didn't mean. I get
[00:17:39]  distracted by chat sometimes. You gotta remind me. Not to get too much. No. But that's good. That's good. Um. And I also like. Since
[00:17:46]  we're talking about this. There's also. Um. I think a note to be made. About. Your second graph. Where Vue is. I think it's
[00:17:54]  representative of Vue 3. Where majority of apps are Vue 2. Right? Yeah. Yes. Yeah. Yes. Yeah. No. That's true. Uh.
[00:18:01]  Actually. And this is actually Vue Vapor. The one at the bottom here. The one I'm looking at. This Vue down here. That's actually
[00:18:07]  Vue Vapor. Which is. Not even released yet. I'm. Vue today. Is. Is where. Where the top graph is. Um. Vue
[00:18:16] . Vue. Vue Vapor. I. I just don't know when they're going to come out. Svelte 5. Vue Vapor. Yeah
[00:18:23] . Yeah. But. So I. I was kind of putting there. If you want to be accurate of today. Actually. Um. Move quick. Back up here.
[00:18:31]  And you're like. Basically. It's true. No one else has. People. Angular I guess is somewhere. Over here too. But I. Like. I don
[00:18:38] 't even know if Angular's granularity. Could be considered better than Vue's granularity today. So. Or like. Finer than Vue. So like.
[00:18:44]  They're all kind of. In the middle today. But. After Svelte 5. And Vue Vapor. They're going to be basically sitting where Solid is
[00:18:51] . Anyways. Yeah. It took me 10 minutes to make these icons. Yes. It. It literally did. I am not. all right all right um but yeah
[00:19:03]  i mean i i i think there's different kinds of things to measure and what the finest mean in different situations and the input like you can also be fine-grained and
[00:19:13]  not um like which is good for a model but then like to have more expensive updates because of the way your model works like there's trade-offs for example uh with the
[00:19:23]  way that quick has to do reactivity because of the async graph and the resumability which works really well in your favor and page load but um you know maybe
[00:19:31]  not the js framework benchmark so um yeah i went over that a bit at the end of last stream where we're starting to see signal versions of libraries coming the js framework benchmark
[00:19:43]  and they're slower than the original library and it's because of what i'm saying adding signals doesn't make your stuff faster all of a sudden you actually have to change what
[00:19:51]  you're doing to leverage what signals enable so um anyway okay okay that's that's that's good you guys keep on distracting me i mean it's good keep on asking
[00:20:01]  questions but i actually want to hear about a bit more about the subject matter uh today um so let's let's let's hide the graph maybe that'll discourage them for
[00:20:12]  a moment but like what can we start by just uh you tell me a bit about uh like what what is tori even like what are we doing here today yeah awesome so
[00:20:23]  uh as i'm as i explained that it would be awesome to hear in the chat if anybody has uh if anybody in the chat is already familiar with tori has built
[00:20:32]  something with tori just so i we can we can balance uh the amount of like uh experience we have in the chat and make sure everybody is addressed so uh tori is
[00:20:44]  a framework for uh if you're using uh for building uh native applications or like with web technologies essentially uh what this uh means is yes that's the page and we are
[00:20:56]  currently on version 1.5 i believe um where v2 is actually in alpha at the moment um i imagine it's gonna reach better before the end of the year which
[00:21:13]  means that going better we need we do some security audits and then go release candidate and finally uh general availability and v2 brings a bang because right now tori is
[00:21:25]  used to build apps for mac windows and linux with v2 you get also android and ios and the nice composition and tori is actually two uh different um components
[00:21:42]  put together tau and right so tau is the window management system which is responsible for the connection to the native system that's the part that's built on rust uh it's essentially
[00:21:54]  like for the web developer analogy that's the back end of our app and right is the wrapper on the native web view and it's important to distinguish the to distinguish that
[00:22:08]  as a wrapper because what happens is that tari is going to use the native web view in the system you're at which is a different one for different systems in this case
[00:22:22]  it's just a which means that that's why tari bundles can be so small we're not shipping uh the web view we're not shipping anything else only your
[00:22:33]  code and this fine uh layer you have a question yeah yeah so it's just so i'm falling here so basically your application does run in uh a web view then in the
[00:22:48]  in so um i mean i'm just gonna put this out there because i'm just i'm thinking like i've used some technologies only on mobile that be it that ran
[00:22:59]  in web view see i've never used electron really or any of this so i don't know if this is how everybody runs is that is that generally the trick like because like
[00:23:05]  i remember what was it uh some ionic based stuff back in the day uh not capacitor the the old one they used to use it started with a c and and cord
[00:23:15] ova and i just have this view of a web running stuff in a web view and this like clunky layer but all i've ever heard about tori is how fast it
[00:23:25]  is um yeah so what what what's different here just so the difference is that um with electron for example you're shipping the hook i think it's chromium that they
[00:23:37]  ship uh and node.js uh which means which that's why the even their hello world app bundle is so big and then uh or bigger and then with tori what you
[00:23:48]  get is this very thin wrapper on the native web view which means it's going to be the instead of shipping chromium to windows for example or to to mac os you
[00:24:00] 're going to be using webkit or whatever the web view is supposed to be on that system and uh because of and we're not shipping node because we're using rust uh
[00:24:11]  in the backend and that's what can make it so faster and makes it so lighter so and what runs in the web view in this case is the front end part which that
[00:24:22] 's the part where you can essentially bring whatever framework you want to you you can put solid js there you can put vanilla html and css you can put nothing
[00:24:31]  at all you can just create an app that's a system tray uh and you don't have you don't even have a front end in this case right so these scenarios are
[00:24:41]  basically single page apps right like like in the web view right you don't server render these you you render everything in the client and they're just basically single page apps okay
[00:24:53]  absolutely and and that's you're already like and that's foreshadowing the next discussion we're about to have which is um with uh with vinci coming around and
[00:25:03]  solid start coming around that kind of enables you to build one app and ship it as a server-side rendered web app and ship it as a native app uh with a
[00:25:13]  single code base and starting from v2 i'm super excited because then you can even ship it to mobile um and i can't wait to test it um but that sounds very
[00:25:24]  promising to me right okay i mean directionally yeah this sounds very promising it's it's funny because i don't i'm not aware of these things when i'm trying to
[00:25:31]  make these design decisions i'm just a uh you know uh what's the a turn sucker for punishment i just really really want to get uh you know things as modular and
[00:25:43]  like yeah not making decisions for people as much as i can but it sounds like there's going to be some positive benefit to that um yeah and and that's actually the to
[00:25:52]  me when i was um and and the people that work with me when we were evaluating the framework we would use and and and even uh like fabian large in the chat
[00:26:03]  so i don't want to talk for the for tari itself because i'm not part of the working group i just work a lot with tori but um it also made
[00:26:13]  a difference uh because in terms of defining which framework would be the best fit because the modular approach that solidjs the goals makes it easier for us to define okay this is how
[00:26:27]  you do ssg and it's best for you to have the first loading time and you bring only what you're going to use like theoretically in the in the docs
[00:26:35]  if you look at the docs or getting started you have uh documentation about using it with quick using it with next js uh with other stuff and essentially if you get a full stack
[00:26:47]  framework our recommendation will be to nerf the server side part so you cannot use api routes you cannot do a bunch you're essentially exporting or static generating or whatever it
[00:26:59]  is that they call it this time but essentially you're putting up a static uh site for it and then running and going with it so that means there's a lot of stuff
[00:27:11]  that comes into your node modules that you're never going to use uh and um if you're doing like uh with one of these frameworks there are going to be applications that are
[00:27:21]  going to be available to you in your id and you should by convention steer away from that and i really like with solidjs is that if i'm building uh atari
[00:27:31]  app with solidjs i only have at my hand what i can use and that's really good for me because i tend to get carried away um if things are at my disposal
[00:27:42]  interesting okay yeah okay here's a question is it truly a single page app or can web view actually do navigation between different pages uh so the navigation is gonna happen in the
[00:27:54]  same way as the the single page app which is gonna be a soft navigation in this case uh but you can have routes if that's the question uh but i think they were
[00:28:06]  meaning hard navigations like going to a different page but i guess like why would you want to do that yeah the web view doesn't don't have a url bar
[00:28:17]  at all so um interesting yeah there's a discussion going on with chat right now talking about serialization and stuff it's happening right now so i'll just throw this so here
[00:28:28] 's the thing like we have in the chat fabian lars uh who works with me at crab nebula and is part of uh tori and he's essentially the
[00:28:37]  batman of tori discord if you ever made a question about tori he's gonna show up and and like he he's the he's the tori documentation in human
[00:28:48]  form um so that's that's what's going on and the answer yes as you said yeah greg for those again who aren't familiar is the creator of lept
[00:28:58] os the rust framework that is uses fine graham reactivity like solid he even has a solid start uh type uh setup where he's got like um some partial hydration stuff server
[00:29:08]  functions all this um all done with a rust written framework very very cool um so yeah talking about some performance stuff we change underlying ipc channel it'll be faster now yeah so
[00:29:20]  yeah i guess so 2.0 is is something in her in the horizon here but um just just out of curiosity um not about 2.0 uh you work for crab
[00:29:32]  nebula um yeah right again i gather again crab this is just like a rust reference again um um it's a little bit of a rust reference as well um the thing is
[00:29:45]  tori is a constellation and crab nebula is the system where uh there's a lot of i don't know like we have we'll have to have daniel here
[00:29:55]  to explain exactly where the name comes from it just fits a lot of metaphors and a massacre for metaphors but essentially we have our own crab which is this cutie over
[00:30:06]  here called nova nice and essentially this um so crab nebula is a company that was built around tauri so to speak um we have a bunch of people that are part
[00:30:21]  of the taurine working group we have the founders of crab nebula are also the creators of tauri but um that's more or less where there's a there's
[00:30:34]  a very strict line drawn there where um crab nebula serves the tauri ecosystem uh and very we're very clear about not going the other way around um so crab ne
[00:30:47] bula is there to support it and we're actually we do consultancy we do security audits and we are building a few projects that are supposed to help people ship better
[00:30:59]  other apps uh and um have a better developer experience okay okay yeah i wasn't quite sure if it was like tauri was their project but i understand they're kind of independently
[00:31:10]  ran yeah except it just sorry is actually older than crab nebula yes right it just so happens that many of the people in the tory project also work at at crab ne
[00:31:21] bula okay it's it's a i think it's it's it's a more of a way of the foundation the leadership of crab nebula to support people that do
[00:31:31]  good work with tauri uh in the best way they can so we have people there uh in the team that are working full time on the tauri framework um fabian l
[00:31:43] ars is one of them actually um so um and then we have a bunch of people doing research and development we have other people creating products and it happens to be that most
[00:31:56]  of the stuff we work on are related to tauri um but then you have other people like myself that comes from a web background uh tejas kumar that's also
[00:32:08]  in the web background um alifteria fabian there's a bunch of people that uh come from the web and got into the tower got bitten by the tory uh
[00:32:19]  crab uh clamped by the toric i don't know so uh after joining so um that's it yeah okay uh yeah yeah okay sorry i didn't realize tejas you
[00:32:32]  guys worked with tejas as well i i'm oh yeah yeah it's on the list of i'm like here on twitter looking stuff up in the background so yeah so
[00:32:43]  tejas has his own thing going on but he does work with us uh as well um and yeah he's he's a friend um so well i mean i saw all those
[00:32:52]  pictures a few weeks back where you guys were like react versus solid and everyone was flexing yeah that's like that's the cringiest thing i've ever had like it
[00:33:01]  was totally it was it was so put out of context but yeah anyways okay okay all good i just definitely was it was like what am i missing i i haven't been
[00:33:13]  at conferences this season and last season i was hanging out with all you guys and then i i went to do some you know work this fall and uh i i've apparently been
[00:33:23]  missing missing out yeah no so what happened is that essentially solid js took react alicante by assault there were i think three talks about it there was a talk from me
[00:33:35]  there was a talk from eric hasmussen yeah um it's uh and there was a talk by shubham as well like i i think one was a lightning talk
[00:33:44]  but anyway and like there were two day conference and we're all like talking about solid in the end and yeah that happens and that's why you got you got that those that
[00:33:56]  many notifications i'm sorry about that i mean it's all good i'm glad this see the stuff propagating but you were saying um you've been able to use solid
[00:34:06]  um at your on your projects at crab nebula with tori um which is very cool to see um what like what you said it was largely because of the like primitive approach
[00:34:20]  right um yeah so um it's uh what the the the project that i'm working on it it's getting a lot of data from uh instrumentation side so there's
[00:34:31]  a lot of stuff that's coming in from from a back end and then we have this like centralized store in the sense that we're pushing putting data on different components and because
[00:34:43]  it's coming from a stream we need sometimes to organize that and it it it helps a lot to have to have solid js as our front end because essentially um it allows
[00:34:55]  us to to not worry that much about performance in this case uh we just try not to get in the way um but that's one of them uh there are actually two projects
[00:35:06]  going on uh that uses solid js uh that one of them i'm actually not entirely familiar with but we're using a lot of solid primitives we're using cobal
[00:35:16] t there which is pretty nice uh and i'm also building on a live stream the app that we're about to showcase in this right here that uses solid js as well
[00:35:28]  um i created this little template for solid js tailwind and tori just because it's just so nice to to do that so is that yes that what this is so you
[00:35:40]  should yeah i see should i share is this a public repo i can share the the link with yeah i can i can share it yeah i mean i can if it's
[00:35:50]  all if you're okay with it i mean people can see you on the screen go for it yeah no that's that's great uh i actually built it uh like that so
[00:35:57]  essentially this is the app um i took out some of the functionality there because we're going to be adding them together but yeah a few people on on the on the chat want
[00:36:10]  to come or want to join us in in playing with that you can clone it um and in the docs you see that i i mentioned a little bit of there's some
[00:36:21]  add to do's where you can see the parts we're going to be touching of the code there's uh and you can run the app and and come and go with us
[00:36:30]  um yeah jesse there is uh the the this app was built with this template so i actually abstracted the template away from that app and i put that on separate repository
[00:36:42]  but there's a link in the readme as well um so yeah i need to push that there we have like the tori ecosystem in community is so nice there's already
[00:36:51]  like an awesome tori stuff with um templates in the discord there's a showcase i need to put all the those there um i haven't done a great job at this
[00:37:02]  um but they're all relatively new as well so yeah and um yeah i don't know i'll share the i'll share the link for the the current state of the app
[00:37:13]  towards the end of the screen so we're not i don't spoil the fun okay um but yeah i'm gonna start a new window here and hopefully everything will work but
[00:37:26]  i'm gonna just try cloning this repo down that's how we get started right yeah i noticed um on the website there was no uh solid specific instructions um on how to
[00:37:37]  get started with tori but i'm gathering the vt instructions generally work um so what tori does is tori is gonna run the vt server for you so what
[00:37:48]  you're gonna do is post a pnpm install you're gonna run pnpm uh tori dev and then what tori is gonna do is uh run the
[00:37:58]  development server and um and then build the app and and run it so you get the hot reload everything as normal uh but you need to run v through tori i actually i
[00:38:10]  can we can actually walk people through that as soon as you clone the repo and you have the code base i can show you how how things uh get plugged in together it's
[00:38:20]  like looking at my examples folder where you can see like all my previous streams and i'm like why is it this random node modules folder sitting right here in the middle of
[00:38:32]  this but um we're not going to worry about that right now okay uh i'll trust the authors okay okay let's full screen this um and we'll update later okay um
[00:38:47]  yes do i i guess i should install the rust programming language or tori has an extension it looks like yeah they have like uh i added the some rec three recommendations actually
[00:38:57]  with this project the tori the rust analyzer and um and the tailwind uh extension so the rust analyzer is going to be nice because if you look at the
[00:39:08]  bottom of your vs code um it's gonna give you some compiler insights as we look at the rust code so you can actually get that uh nice feedback from the rust compiler i
[00:39:21]  see it working yeah yeah so that's the part that screams at me the most when i'm at work got you and i'm gathering the tailwind one i probably already
[00:39:33]  have probably already have yeah what do you uh maybe not or i don't even know 4.3 million this one sees a pocket this is uh hmm but it's not this
[00:39:47]  one is it yes yes so greg is celebrating on the chat that you're installing a rust analyzer he says it's best friday he could vote for yeah yeah
[00:40:00]  my for some reason my rust streams do really well um or streams where i tell everyone that they should be writing their backends in javascript um those those streams do well
[00:40:10]  i don't know if you i prime decided to make to raid me one day never happened before so something like 1600 people leave primogen stream land in my stream and i'm
[00:40:20]  talking about something that was about data serialization or something and then i'm i don't know it was like really deep in a technical topic that i knew i'd lose like
[00:40:29]  half the people anyway sort of like most of them so i just you know decided to give my hot take on uh on web performance but anyway all right we are we're
[00:40:39]  i think we're set to get started here we can close down these extension installations and we can look at this project um okay so okay so um source source source is where
[00:40:55]  the the the web stuff is gonna go tori puts itself as uh inside a source dash story but first let me just show you on the vidconfig the the last file
[00:41:05]  so they're like one thing that it's important for tori to run is that it needs to run on the same port so uh that's why we lock the door um
[00:41:16]  the port um on the on the vidconfig in this case because then if you go to source dash story there's a tori config json and that's where
[00:41:26]  the magic happens for tori so you see the first there's a before dev command and before build command and the dev path that's where things uh tori expects things to
[00:41:37]  be that's the command it's gonna it's gonna run right and um there's our magic port 1420 yes and then going down there's like the package special about
[00:41:51]  that port not that i know of um it's just like a so there's the package that behaves essentially as like a package ason there's the name of the app that
[00:42:03]  the name of the app in the live stream so there you go on line 10. um and then uh there's the tori key which is where most of this stuff
[00:42:15]  is gonna happen so before we go into the um so there's the the security part where there's a csp um stuff over there where you can essentially do uh you can
[00:42:29]  add your csp and stuff the windows is to define how the windows are gonna look like when you run the app if you're gonna allow full screen it's gonna allow
[00:42:38]  it to be resizable this kind of stuff the icons are pretty much like a pwa manifesto essentially um and here's the nice part the the one thing that i like
[00:42:51]  about tori one of the things that i like the most about tori is that you have this allow list you see on line 14. yeah this allow list is gonna
[00:43:00]  say which apis in the native system you're going your app is gonna use so we can uh we can now before we run the app we can actually already uh enable some
[00:43:13]  of them the ones we're gonna be using so the first one is gonna be dialogue so if you want to add here a key called dialogue which is an object yes does
[00:43:22]  that code pilot what just happened this is probably your um vs code can read the the schema that we have and just auto complete it for you okay so you can enable all but
[00:43:36]  of course it's not recommended um and we're gonna use the open and the confirm all right and then uh out of the dialogue we're going to use the fs
[00:43:51]  as well which is for the file system okay yeah so you meant like here right yeah so fs you have all these and fs has this nice one that's called a
[00:44:03]  scope which is an array and we can put like the here a string which is uh the path of your file of your uh system where your app is gonna be able to
[00:44:14]  look at so for me i put dollar document uh because i'm gonna scan my documents folder i don't know if you have like um a sandbox where you can you can make
[00:44:27]  you you run this kind of stuff but essentially uh you can it's a glob so i put document and two stars and one star so oh i see yeah so if i
[00:44:42]  like yeah i'm trying to think if i actually have any reasonable folders not my receipts for my um so we're gonna yeah we need a folder to actually go over here
[00:44:56]  is there anything actually interesting here yeah my documents are probably fine they're full of we're gonna have a look at the node modules and if you want you can delete the
[00:45:07]  node modules of apps if you don't want that's fine so you could just run in the examples uh folder anyway and then we see how much because yeah but it needs to
[00:45:19]  be like uh you can do like dollar document all caps okay uh in the beginning so it just to to because it's gonna yeah it's an absolute path so dollar document
[00:45:32]  all caps all caps okay yeah and then dash and i don't know what's the path no no that's no uh sorry slash uh the yeah and i don't know where
[00:45:45]  is your is your examples but essentially that's uh yeah let me think here i think it's in so develop development the capital t examples i think that's right give me
[00:46:00]  two seconds i'm just gonna look here um because it's from i mean what did i where is it home folder so the tilde development examples because i'm not sure what dollar
[00:46:19]  sign document is but you know i mean like if this was it's the documents in the it would be like the refiner yeah yeah yeah that i think that would work
[00:46:28]  yeah um that's good and then after the examples you put the two stars i like a blob yeah directories in any directory so sorry do i want the dollar sign document still
[00:46:40]  i was just saying that like no the dollar sign document is for the document let me share with you the there's there's there's a few uh aliases that we
[00:46:50]  can use um so um where are we more i could say all um we can also define it later i guess but um okay well let's let's try this i mean
[00:47:11]  this is the path like the the unix path i just yeah and and also like if we get to the point where we we want to showcase in your didn't i
[00:47:21]  can share mine and i have a version that uh already shows stuff all right okay okay so so if we're done with that one we can go to uh do we need any
[00:47:36]  other actual like read permissions we need the well so we don't need to use the we we're going to use the read deer for directory the read file and the exists
[00:47:49]  and you might want you might not want to use the removed deer i usually just left it off until the moment i'm gonna do it because i'm just very scared um so
[00:48:02]  sorry so true and yeah okay let's just do this for now yeah so getting mentioned the dollar sign home yeah so um yeah i think that that would so that would be
[00:48:24]  the home in your path i would say yeah okay but i i don't yeah we don't we don't need to go that much ah he he means about switching the
[00:48:36]  tilde in this case yeah yeah yeah yeah yeah right because this is this is actually the absolute path so i could just go yeah i just wanted this thanks lucas yeah so this
[00:48:50]  is not my strong area but no but that's and they're pointing out that you can define a runtime because the api that we're gonna call uh the read here
[00:49:01]  you can actually define a narrower scope in this case so we could define that during runtime what i like to do here is to actually lock the app to the out to the to
[00:49:12]  most outwards scope that i'm gonna let them go right that's what this whole conversation is about you can do such happen yeah i was recording for this in one time
[00:49:22]  alone okay okay yeah so okay so now we have the config done and then you can uh did you and pnpm install already yeah i think you did yeah so then you
[00:49:32]  can run pnpm tori dev okay pnpm tori dev and then this is gonna build uh the the web part and then it's gonna start compiling your
[00:49:44]  rest code so the first compilation time is a little bit longer but then as we start playing with it it's gonna be a little bit faster yeah that's i watched i
[00:49:56]  did a rust stream before yeah so yeah and then yeah exactly so that starts running so this already looks like an kind of like an app native app yeah uh but none of
[00:50:11]  the apis are actually working at this point we need to add them uh we need to add the actual function calls so question here it's so this thing is so what we
[00:50:23] 're doing is inside this this is pulsar this is what we've built so far this is like gotcha and if i go like this i can go back and forth okay
[00:50:32]  cool all right that's how we're probably gonna do it yeah so now whatever you're seeing there it's basically just a solid app and then everything else that's running
[00:50:44]  yeah you can inspect screen it's just like web in this case what browser is it's mozilla so the the the dev tools um is looks a lot like the firefox
[00:50:57]  one uh but this is just like a wrapper in on the the web view okay so yeah that's what i looked at immediately i'm like this reminds me of firefox
[00:51:06]  but yeah somebody corrects me if i'm wrong but i think on uh mac os it's web in this case yeah exactly probably safari or webkit yeah um okay i
[00:51:16]  don't actually spend much time in webkit so okay cool interesting so div root class sorry i was just looking around to see see our our app here but yeah so this
[00:51:29]  is just a full web view that's cool i like that you can still do this yeah and then yeah so essentially now everything you console log and stuff like that is gonna show
[00:51:41]  up um in here um of course not the part if you if we do on rust code but then anyway everything that we configure in vit is gonna come up here this is
[00:51:52]  vit yeah completely yes this is beating solid js and then this is solid web yeah okay okay now i've got my bearings okay cool um sorry i just i like when you can
[00:52:07]  do that yeah so um yeah so now we can jump into the code and have a look about how things look there so um for the tori app we can have a
[00:52:18]  look maybe at um inside source yeah and then you have these three files the most important one is the main so the main file um if you scroll down to the bottom there's
[00:52:34]  a main function which is essentially the entry point where uh or the out points where this is where things are going to run from and you're going to notice that we have
[00:52:47]  on line which is your line my lines 30 no the 31 you have this ts double colon export yada yada so that's actually um a crate called tori spect
[00:53:02] ra which is what this does is check this uh collect the types from this get underscore dear underscore data turns into typescript types and create uh some some uh function calls for me
[00:53:17]  on the front end so this creates the inter interoperability between rust and uh yeah so if you go tori commands this file is generated by tor respecter so it
[00:53:31]  just creates some types for us so now i know that this get dear data uh now camel case um is uh fully typed so i know what's coming and what's going from
[00:53:44]  rust so yeah so this is what is output putting it to yeah what collect type like what where is it getting this from like how does it know which apis we're
[00:53:56]  exposing so uh that's what i'm saying i'm saying that i'm gonna expose this get dear data that's the method that i wrote yeah got you yeah okay yeah so
[00:54:05]  the method's right here okay so yeah just tracing it gotcha collect types from this thing export it here so you can call from the ts okay yeah and then you have
[00:54:16]  and then that's the tori specific part the tori uh double column builder default so this means we're running the tori builder with the default configuration uh you can add
[00:54:27]  some plugins there there's a a plugin that i like using it's the for for logs so then we can have some logs in the in the console log and in the terminal
[00:54:38]  and then we can see stuff uh just like javascript because you know i'm just a developer and then this dot invoke handler is the uh commands that i'm going
[00:54:48]  to expose to my type script site or my javascript app in this case so as you can see i'm i'm offering the get your data that's the only command
[00:54:57]  that i created yeah and then the rest is like tori boilerplate as well so the run and the expect is what uh comes out of the tori starter the only
[00:55:10]  thing that i did in this case uh was adding the tori specter for the types and uh sending the invoke that i created okay okay and then what this does this get
[00:55:22]  dear data if you go upwards i think line 24 16 yeah so this is gonna take this string that's gonna be arriving from the front end and it's gonna create this
[00:55:35]  list of directories and scan all my uh all my projects inside that scope that i passed and dive into each of those files measure them in size sum them up order the list
[00:55:49]  and send it back that's why i was just laughing here because we picked up a folder with like um you know 30 um node projects in it so i'm just pict
[00:56:00] uring like the size of the node modules folders inside of each one of those yeah thing it's like you know the the black hole meme you know it's like yeah this this
[00:56:09]  this this node modules like anyway so i i yeah i'm way less prolific than you in open source so i tried on mine i had some a few big forks like
[00:56:22]  astro i had a few mono repos and i ran it took me about 20 seconds okay okay let's see you yeah yeah um awesome so then we do that uh
[00:56:35]  then the if you go to the utu and these are some macros yeah that's what i said they look kind of like directives of some sort um macros yeah
[00:56:45]  i'm very afraid to explain what macros is in this case because i'm gonna say they're like if we look if you think about javascript you're gonna
[00:56:55]  think like decorators or something like that so essentially there are functions that wrap your functions and add some functionality or scope so in this case we're we have this the spectra
[00:57:05]  macro which allows spectra to inspect our our function and bring back some types and you have the tari which is for creating um the the tari commands in this case
[00:57:17]  it's just export some context um and then if you go to the utu uh util.rs this is where things got uh scary for us javascript developers so which
[00:57:34]  one the one below main uh util utilities yes so in the utilities one um we start talking about serialization so this is the struct this is the the type that we're
[00:57:46]  gonna send back we're gonna send an array of tuples in this case that has the path of the node modules and the size of the node modules in bytes and then
[00:58:00]  we have uh the order list right below it which does uh if you can you scroll down a little bit oh yeah yeah the order list right below it you have essentially what a
[00:58:12]  sort array would be right so we're just ordering them according to the to the size yeah and the get size is the the scary one because we had to make cat size
[00:58:24]  being asynchronous because you know node modules are so big so you have um this like um this return type which and we have some different streams we have a bunch of asynchronous code going
[00:58:38]  on we actually had to bring a method from the the crate called fs extra um greg i'm very scared of talking rust with greg there on the chat but
[00:58:54]  yeah so greg likes it um essentially we took the the method from fs extra which was synchronous and turned it and synchronous for this particular uh code to work uh because we
[00:59:07]  need to run every inspection on node modules in parallel otherwise it's gonna take forever and a half gotcha and then the get deer names i did a few hacks please g
[00:59:18] reg look away um so what we have here is essentially because i couldn't for the life of me have blobs working as i would expect in node.js i had to
[00:59:31]  uh creating this walker here the max depth of where i'm gonna allow my my iteration to go and then i also did uh some regex magic because i didn
[00:59:45] 't want to go through nested node modules because like if you do like the double uh the double star on a glob in rust it's just gonna take everything okay yeah so
[00:59:56]  they'll walk through like all the like sim links and everything okay yeah so i just i said yeah no sim links right there in the dot follow links and then i just
[01:00:05]  cleaned up the the list of paths before actually iterating to them gotcha okay okay okay so yeah so you get a chance to write some optimal rust code here to work with
[01:00:18]  the file system and then expose the whole thing js which i mean i've used react native before and and made plugins for the react native bridge um for doing image processing and
[01:00:32]  we had to build one thing in uh objective c and the other thing in uh god uh what was it was android in java was it yeah um but this kind of similar
[01:00:45]  idea you you basically but i guess you could just basically have the access of whatever you want the bridge part seems fairly simple you you write through the code however you want to
[01:00:55]  write it and then it's just a matter of using this utility that takes an uh interface and then tells typescript and generates this generation for it yeah so like i need to
[01:01:08]  at this point because this code is getting praised i need to say that i need to give my colleague jonas kruchenberg a huge hug because he actually wrote most of
[01:01:19]  this code i was i was the guy that was eagerly looking over his shoulder and and and freaking out so yeah uh there were other people who reviewed this code uh some other
[01:01:31]  colleagues i have some really good rust minds working next to me but if you're scared about this i am too um and the nice thing about tori is that you don
[01:01:43] 't need that to actually build a full functional app app you're going to see that out of the four or five different system calls they're going to make this is just one
[01:01:53]  of them so this is just because i was nuts and decided oh i'm going to measure my node modules in an app and that's going to be my sample lab but you
[01:02:01]  can do a bunch of other cooler stuff without needing to write that right right and this is only the native piece you can also just build a web app and run it it
[01:02:09]  on the desktop and they'll just run we actually have a colleague of mine chip wrote and a few a few sometime he wrote um uh an app a cli helper that we
[01:02:22] 're gonna publish soon uh called tarify which essentially if you run tarify on any bit based project it wraps into atari app in a single command so um that's
[01:02:36]  that's how you can do you can turn any kind of single page application into atari app okay so you don't need to write any rust very very cool okay so yeah
[01:02:48]  they're getting people back in our realm here of javascript because i yes i i i had a very quick tutorial from greg on how rust works parts of it you
[01:02:57]  know brought back some memories of some uh you know other system language they used in the past but like i i'm not at all confident i've never actually sat down to
[01:03:05]  try to actually write any rust code um but yeah i i followed your explanation well enough to know high level what's going on um and i guess this main entry point down here
[01:03:18]  where it does this you know run whatever like all the hmr all that kind of stuff just kind of happens in the background yeah all this all the setup this is just
[01:03:27]  like start the app and then like you're good to go and dev versus production is there any consideration here or there are a few build optimization things that you can do before uh
[01:03:40]  before shipping it so but they're all like config uh config based as far as i know um but yeah essentially um that's that's just it it's just about reducing
[01:03:53]  bundle size optimizing and and cleaning up your like the yeah the the spiritual sibling of tree shaking so essentially like you're gonna take out some dead code and make sure it's optimized
[01:04:08]  but that's uh configuration steps uh uh uh thanks for joining us i i know this is late for some people um yeah it's it's your evening isn't it it
[01:04:22] 's it's i'm just i just had lunch but for you it's it's evening isn't it yeah for me it's 10 p.m right now in germany
[01:04:29]  so but yeah i'm i'm also i'm also hyped up so i'm we can keep going forever all right having i'm having the time of my life yeah don
[01:04:39] 't don't challenge me there i've had six hour streams before but i'm we're gonna try and uh we're gonna try and uh not do that um i don't
[01:04:47]  i i had a very good rest like we don't crab nebula is a four day work week so today was day off for me so i'm i'm pretty good to
[01:04:55]  go uh 10 p.m in australia as well uh okay so let's jump into solid.js yeah actually that's the part that makes me the most nervous
[01:05:07]  because now i have you looking at my solid.js code um but i mean the app basis here looks okay we it's a this is a straight up beat project so we
[01:05:17]  have our index.html at the top level and then yeah i mean this is very easy yeah that's i'm saying the beat starter instructions probably with the solid like too
[01:05:26]  solid as your framework for v probably get you like 80 percent of here except for all that crazy gross code you wrote um so yeah all right i'm following and then index
[01:05:40]  so these are some parts that i didn't even change from the v starter yeah so if you see there are like even some capital case file names that i generally don't use
[01:05:51]  if you open the components and stuff i i just use a lowercase all the way yeah yeah you're on this side right where it's like yeah the airbnb whatever
[01:06:01]  thing was all like you should name your components the same name as the default export so like so when you import it you can like see the name anyway you're you're
[01:06:12]  on your own your own dashes yeah yeah and this results table export a so yeah so the results table has some stuff missing um we have uh but we can um the results
[01:06:25]  table are actually gonna only come into play once we actually can scan our files it's it's i just picked that one at random because i had a dash in it um yeah
[01:06:34]  so you can you can actually start by one file we don't need to touch it's called library uh in the in the lib folder there is um store so um this
[01:06:45]  is what our data is gonna look like in the end uh so the file list is the folder stat that's coming from tar respecta yeah and then you have the elaps
[01:06:55] ed which is the because we are measuring how long does rust takes to give us our answer and the status is about it's either idle or scanning in this case gotcha um
[01:07:09]  and yeah and then we have this this gather which is uh this computed prop that just uh puts the the time span into seconds because they it arrives in milliseconds yes gotcha
[01:07:20]  and then you just have a context wrapper if you can't find it um that's a good check to do um and yeah that's pretty pretty straightforward uh sir where's the
[01:07:31]  crate store call i just must have missed that somewhere okay here it is yeah so i create a store and i export this already created one in this case because i want to
[01:07:42]  have this type of scan store just to have the setter typed somewhere else okay um right and then okay yeah that's fine and then uh it's funny because there's okay
[01:07:55]  scan context create context okay the provider is not in this file that's fine okay no yeah the provider i i usually don't export just the provider i just go and import
[01:08:07]  the context and call dot provider that happens in the app dot no not the app um where did i put the provider in this case it should be in the app.tsi
[01:08:21]  yeah i would expect it to be scan store or even maybe we're not even using maybe it's a bug yeah maybe you're not even using you might not even be
[01:08:33]  using context because it looks like you're just grabbing the thing directly and just calling getting set right here which is perfectly fine um yeah yeah because i mean this is this pretty flat
[01:08:46]  app we have yeah entry level logo scanner some messaging probably if it's if if if scan data is elapsed then show this section yeah this is like this yeah so
[01:09:00]  yeah so then pattern matching here for like if we're scanning if we're waiting on a search um so yeah um and then um what where things start happening is on the scanner
[01:09:15]  so if you go into components scanner.tsx yeah so there's a first to do um and we have but we can also have i think there's a second one
[01:09:33]  down below yeah so this one is for getting the scope where we're gonna look and that's the first uh user interaction yeah do you want to have a look at the
[01:09:44]  code first yeah i'm just looking really quickly to get a high level look at here because if we look in our app here we work it's this thing here that we're
[01:09:54]  looking at this will come from whatever comes back from the scan data this will also push it down so okay so okay so this is scanner it gets the setter from scan
[01:10:04]  store um and then this is it has a scan function that's calling the setter i see yeah okay that's like the the main thing that's doing here um and
[01:10:27]  it has a get root scope function that is calling set root scope which is this okay um okay so yeah so the root scope is the one we're gonna we're gonna toss
[01:10:44]  to rust and that's what the get deer method is gonna use right so root scope has scope and then this root scope display is just like to trim the string if it
[01:10:56]  gets too long so this is just a formatter but okay you can have a look it's in the library folder gotcha that's fine i trust you okay so then this
[01:11:05]  reads in this and this root scope is used down here if if it has a scope and show it there i'm so then what starts the process here is a form submission
[01:11:19]  yeah that that sets the scanning and calls scan which is this okay okay so form submission there's a button on this form uh on click get root scope so when you click the
[01:11:34]  button it gets the root scope and then ends it ends up sending that uh to you know what it's interesting okay yes i'm following what's happening here just took a
[01:11:48]  second because you click this to get the the information that ends up coming into here um and then when it's there display something otherwise don't okay cool all right i think
[01:12:01]  i got the high level of it and the root scope is is where the user chooses which directories um are available yes um so now what we need to do is replace
[01:12:18]  that const selected with uh with the api that's gonna help us define the scope so in this case you can call an await which is a promise and open okay yeah right
[01:12:33]  because yeah i got you because the the first thing we're gonna do is open up like a file dialogue and ask them correct what what file okay cool um so do we
[01:12:43]  have the native thing yet no okay but you're saying i think it's gonna auto complete for you because tar is already available so if you start typing open no yes that
[01:12:54]  one this one that one the first option yeah so now it's gonna give the first one is gonna be the url that we need to no sorry the open is it receives
[01:13:10]  an object um do you it didn't bring the right one perhaps let's try this again i'm gonna do this one it's api dialog ah yes that one correct
[01:13:24]  so now it receives an object of uh options object and you we want to say it's a directory all right um you want to come you might come and click that and and
[01:13:39]  see all the options yeah that's that's what i was planning on doing we need to toggle three of them yeah title filters default toggle directory recursive so it's a
[01:13:57]  directory selection so it's a directory selection we don't want multiple and we don't need it to be recursive so if you comment save this now and go to your
[01:14:13]  app and you click on that select scope over there oh it should already work yeah maybe there's a delay there interesting there's like this delay so this is uh solid is sending
[01:14:31]  uh invocation to rust rust is doing a call to the native system and this is a native system dialogue so now if we do if you select a folder it's going
[01:14:42]  to bring back the the path of that particular folder all right and that's going to be with what the promise is going to resolve gotcha so i can just like pick any
[01:14:54]  folder here yeah at this point i think the scope is not going to get in your way um what the scope is going to make a difference when we actually do something with
[01:15:07]  it okay so i chose something here okay yeah and then so now we have the scope and we are setting the scope to the signal yeah oh i get it there's two
[01:15:20]  buttons i wasn't paying attention this button just does this action and this button is actually to submit the second button the future one so the second button is the scan button and the
[01:15:29]  first one is just a button that's going to open the dialogue and take the value right so now if since we have scope it's going to actually try and do the submission
[01:15:38]  where it's going to try and scan but scan doesn't do anything yeah so in the scan what we need to do is called our get dear uh get directory actually just
[01:15:49]  just out of curiosity hint it would be cool to open it yeah i just just wanted yeah that's okay that's me being funny yeah that's fine we've got that now
[01:16:03]  um but yeah i just wanted to see that developer experience but okay cool so now we need to scan actually do the scanning which yeah so now we need to replace the value
[01:16:15]  of list uh that's having our stub which is exactly the shape of the tuple that's coming back so sorry if i press scan right now will it it's just gonna
[01:16:25]  print a console log and do nothing else right so but there was something from that data coming wasn't there like uh let's just do this if i hit that yeah oh
[01:16:37]  yeah so now you have the table yeah uh but there's nothing inside okay okay that's fine uh okay so this list actually needs to do something so we need yeah await uh
[01:16:52]  and then get dear data which is the name of uh yeah this one from tower commands and then you pass the scope which i put an underscore there on line 12 because it
[01:17:05]  was not being used i didn't want um typescript to yell at me you can change that if you want so now it's it should work already they scan and you should
[01:17:18]  have a list okay let's try this again uh i mean we could just do a solid hacker news example is that the one i'm on yeah solid hacker news scan there
[01:17:33]  you go so you have 36 mag node modules yeah that's not too bad and the gods of life demo helped me yeah so if i can go up a level development oh it
[01:17:48] 's interesting because i wasn't in the examples folder um let's scan the whole examples folder oh yeah you wanted to take a sip right yeah there we go 12 seconds not
[01:18:12]  that bad yeah yeah but yeah redwood right there redwood 600 25 megabytes we can we can blame them um we got our astro corset quick oh nice they're
[01:18:30]  they're ordered yeah so they're supposed to be ordered in size right 11d base blog very nice then it's like our marco and client side yeah okay all the
[01:18:50]  way up to redwood which we know redwood is very opinionated and very large so yeah so that's dot dev in our chat just scan 48 directories in 30 seconds
[01:19:02]  nice nice it's pretty cool yeah yeah so now we need to start deleting some of those uh bytes right so if you go to and actually play around with a little bit
[01:19:15]  more solid in this case because um there's some asynchronous calls now okay cool um taking that out all right all right so now we have our results table right what's trash
[01:19:35]  bin is this our cool svg it's just an icon yeah just the icon okay um so okay so here we are um sorry okay so the first thing if um if
[01:19:53]  you look at the top we have uh let's let's have a look at the the table so this has actually two components there's a table row which is uh the
[01:20:05]  table row and you have the results table which um i have i'm using the the transition group because i want those little micro interactions because as you delete i want them to like
[01:20:18]  slide up and right it was impressive how easy it was to get it working yeah so yeah the more the more impressive thing about this library is like i i barely have i
[01:20:29] 've this is have you ever really built something and never used it and never tested and then just released it to everyone and people are still using it this is why like if you
[01:20:37]  look at transition group the version is like 0.0.9 or something i basically looked at view saw what they were doing and they had like an example on their landing page
[01:20:48]  so i tried to reproduce it and i couldn't quite do it because they have a virtual dom and but i just was literally looking at the view source code and the solid
[01:20:56]  one and i was like okay it kind of looks like this and then i just kind of kind of shift shipped it it still surprises me i i'm not even sure i know
[01:21:04]  how this component actually works but it uh it seems the part that blew my mind were actually if i wrap a four inside a transition group the items get animated as they come
[01:21:17]  in or come out yeah and i was like completely mind blown because i was ready to spend like i don't know an hour and a half doing that and then you just did
[01:21:26]  it for me yeah that's that's that's that's the uh that's the idea behind these kind of uh setups and the truth of the matter is um i'm i
[01:21:33] 'm i'm kind of wondering we get to a point with like view transition apis where it is literally like this like the components of all that logic i was figuring out
[01:21:41]  is literally like take snapshot render go and it'll just do these things i don't know if they're they're at granular flip uh transition level but that's my hope i
[01:21:54]  looking at it i believe that it would be possible because it knows where the elements are it should just do it solid transition group is like 0.2.2 now well there
[01:22:04]  you go yes so other people have have worked on it i think i gave away ownership a little while ago yeah see that's that's that's impressive i i was never
[01:22:12]  comfortable enough to give it like the second digit um because i was like oh you know i was like it's working right yeah we're actually you're actually gonna test that in
[01:22:23]  live so okay so another thing i got you installing rust and looking at rust code and now you're gonna test transition group okay okay um but yeah i've got it so
[01:22:35]  far here we're gonna go through yeah um table row this is fairly static table because it looks like we're like like nothing's reactive coming through here which makes sense because it
[01:22:48] 's keyed so we just we can scan this stuff first run it's not going to change basically set up our table row and then in here we have a signal that
[01:22:59]  we're using to trigger oh okay i see yeah yeah see okay so this create resource is not for this and yeah i i think this is the most confusing thing and that's
[01:23:12]  why i've like i've been working on other apis create resource is for generally it's it's not for mutation it's it's like for for reading it's
[01:23:23]  for like something that is like part of the state the the ideal flow for for stuff is that um you mutate to then pull through like a get so it's like post
[01:23:38]  get right so like create resource is the get side not the post side of the equation you can technically use it here but yeah this is why we need a mutation primitive because
[01:23:51]  so just to explain to the because there's a huh i i think it's because of that so ryan just picked up that i'm using uh create resource to do optimistic
[01:24:00]  mutation which i expected him to pick it up a little bit later in the stream but yeah it's ryan so um essentially what's gonna is gonna happen is that i
[01:24:12] 'm gonna use the should delete function as a signal to trigger a create resource and then delete node modules is gonna update the cache inside my stuff so the row is gonna immediately disappear
[01:24:24]  and then if um if we decide not to delete the file the row just comes back in um and that's what i'm using create resource for and he's saying that create
[01:24:36]  resource is just for fetching data it's not for mutating data yeah yeah like mutation this is what even the mutate api is weird to have it's there
[01:24:44]  so that people can do local mutations before they trigger the resource again to blow it away um uh just this is just for people going like what right now let me let me i
[01:24:56]  i haven't added anything to the core let me go to github this second are you familiar with create use resourcing quick maya i was just asking if it
[01:25:07] 's i i i think so i mean i they named theirs after ours i i'm not but i i never got around to actually looking at they have slightly different like they also
[01:25:16]  have a resource component where we use suspense to trigger um but yeah i mean it's similar ish i think but i i can't i can't say completely because um
[01:25:30]  they added that after i'd already done like two or three quick streams i don't know if i've done a quick stream with them since they added that that came a lot
[01:25:39]  later um what i i wanted to pull up here is i had like a uh rfc mutation primitive where i talk all about um different forms of this and the actions
[01:25:53]  api that i've been working on solid start is based on this see i have this tendency when we do this all the time with solid where we start if you're primitive
[01:26:01]  based the last place the primitive ends up is in the core you test it as far away from the core as possible to decide if it's a thing and then you bring it
[01:26:09]  out so that that means it's like it starts in solid start if we like it in solid start it then makes it into like the solid router or like solid primitives
[01:26:18]  package you know like something that's a little closer and if we really like it then it gets into the core so um i i was playing a lot with mutations i'm just
[01:26:28]  going to drop this here this i this is from december 2021 um this is when i was proposing the the the thing yeah like the resource api we've had in
[01:26:44]  solid since 2019 so for about four years now yeah when we first added suspense is when we added it but then i realized very quickly that people were like how do i mutate
[01:26:53]  and they ended up doing these like fun things and the idea was hopefully it's funny i have examples here that are not they don't take much code but the idea was
[01:27:02]  it's like a like the idea is is this kind of cycle where you say you have a list of to-dos and maybe you mutate them this is what you would
[01:27:12]  do is you create a mutation you do the mutation and then on success in the mutation you would then update the resource or you would tell the resource to refetch on this
[01:27:25]  like it's it's it's a it's a cycle thing because it's a very similar api to uh tan stack query right yes yeah and uh tan stack was what
[01:27:34]  inspired um create resource for us um but the create mutation was inspired by a cross between tan stack and remix i wanted optimistic updates so instead of this is the problem like free
[01:27:50]  resource returns data that exists for all of time like it's a list of to-dos you want to update it you want to keep the sync resources are like the typical signals
[01:28:00]  like in the sense that you they're the thing that you that you're managing like the data is the thing you care about mutations are ephemeral like if they do have
[01:28:09]  data that comes back um our mutation design is based off the idea that is based off the idea that um it's temporary like this adding is optimistic update essentially right it's
[01:28:25]  not a permanent state it's only a temporary state so the i because a mutation is basically ephemeral it's it does something might have temporary state and then when it's
[01:28:37]  done there's no traces left and it's actually the resource that actually is reflecting of that whether it's refreshed whether it's a direct mutation um and yeah so uh yeah
[01:28:51]  it's that was the biggest difference tan stack originally used mutations to update their cache um and they didn't like their optimistic update system was like a optimistic cache update then that would
[01:29:07]  do rollback so this is like remix where or the and what we've been using this all start where the optimistic update is independent like you'd make two for loops one
[01:29:15]  over the normal data one over the optimistic update data let's say if you're adding a bunch of to-dos and then as the ones leave the optimistic and go into the
[01:29:23]  actual you just move them between the two for loops it's not like you're looping over the same cache they're completely independent which is nice because rollbacks aren't a
[01:29:31]  real thing you don't have to worry about you don't have to use any cache updates this was the genius of the remix approach is that if you're not going to
[01:29:37]  bother and mutate and you're going to say yeah i'm going to refetch all the time when i do stuff um these kind of this kind of approach got rid of
[01:29:45]  the end developer ever having to write cache management code um i'm sorry a little bit of a tangent but it's just it was very interesting to me that when i used to
[01:29:54]  use apollo the thing that drove me nuts was like oh now you're gonna do pagination you gotta do this like like you were always doing cache writing cache management and
[01:30:02]  uh and trying to do all the stuff like oh is it did it fail optimistically you have to roll this back and all this where the remix style pattern um just kind of
[01:30:12]  worked and i believe tan stack query five actually ends up following this mutation pattern instead of their original mutation pattern anyways so how would you do that today then if great resources not
[01:30:27]  for that how can we do that yeah uh okay that's a good question um i feel like resource name is not clear okay do you know i got the resource name from uh
[01:30:36]  it's kind of like signals i just made it up no um react was using this term when they were talking about their experimental suspense and then they never actually released it if
[01:30:47]  you go and react source code still like legacy you'll find create resource calls inside their internals um yes i just i didn't have a better name for it so i just
[01:30:58]  went went with that yeah yeah this is what was saying here that tan stack query added the simify yeah so the mutation api so yeah how how would we do this um
[01:31:13]  that's a good question let's take a look at the exact scenario here because i was just kind of i guess the problem is you want well what is data so the
[01:31:22]  data in this case is um the data is yeah so this the the the rule the data is the information in the role so it's the name the file path and uh the
[01:31:40]  size okay yeah so i'm actually not re-scanning once you delete so there's some stale data happening there i need to update this kind of stuff still
[01:31:50]  okay i see so when so when data finishes it just at that point you'll send back like true or something and then yeah when when true it actually deletes the row yeah
[01:32:03]  but it doesn't actually delete the row it just doesn't show the row yeah okay gotcha okay well okay we're gonna start implementing this first but i think the answer
[01:32:14]  to this it might be a lot simpler than anyone realizes because this is really just like promise then set signal yep exactly so like i don't know if resources are actually doing anything
[01:32:26]  here for us um so the thing is that uh i use the resources because the invocation uh is uh asynchronous right right so the the thing is what this what this does
[01:32:41]  is it will trigger suspense um okay well let's let's let's i want to see what it does first before i make my call on this so let's um let's
[01:32:53]  have a look first so what happens is that there's a button on uh on the third uh column of this row so if you scroll down a little bit yeah um there
[01:33:06]  there's to do so we need to trigger the module deletion that means we need to set uh should delete to true and uh we need to mutate and set it
[01:33:18]  to true as well so set delete yeah true and mutate true and that's what's gonna trigger the optimistic mutation in this case oh oh so we trigger okay okay i
[01:33:30]  i will i'll just play over here for a second should delete true and you call mutate no it's a set delete so this is the this is the signal that's
[01:33:40]  gonna trigger the create resource and then i immediately mutate it to true so okay so the row is gone now and then we trigger uh some stuff on the delete modules right
[01:33:54]  so we actually so we actually have to have delete modules do something let's delete yeah so it's it's on top of yeah so delete modules is gonna take this path and
[01:34:06]  then here we need to first check if the file exists so this line 26 is actually a weight uh exists and then we pass the path as a parameter so this is at
[01:34:19] ari api that's gonna check if the path is actually actually exists in our file system okay so check if it exists and then if the file exists um i think it
[01:34:34] 's good ux to confirm that somebody actually wants to delete something before actually deleting them so we need to use the confirm in this case okay um and again it's another promise
[01:34:47]  so a weight confirm and that would be uh so we're doing it here yeah all this yeah yeah so the should delete is like we can you can replace like the let
[01:35:03]  should delete false to whatever returns from the confirm it's a return boolean oh beautiful okay wait confirm yeah and then confirm is gonna receive uh first the string which is what
[01:35:18]  you want to confirm and then you can pass a options object okay uh maybe it's not importing the confirm from uh from tori because it's complaining that you use the
[01:35:37]  weight so maybe we need to import yeah it's i think it's using the native javascript confirm in this case funny i thought i oh way down here it's
[01:35:48]  dialogue yeah correct so there is this uh options which we can pass type title and okay label yeah so the title is the title of the dialogue you can put whatever you want uh
[01:36:04]  type is um a union of different types that you can use so yeah and then the okay label you can change the type for the cancel label or the okay label so you
[01:36:17]  can play around with that and with that we have our confirmation happening okay okay um yeah david i feel like the luckiest guy right now i just got ryan carne
[01:36:42] ardo to review my solid js code uh yeah let's react experimental he's optimistic yeah i i saw them put that somewhere i'm i think remix had a big influence on
[01:36:57]  both of our apis on that except um when when uh we were looking at i think both us and the react team saw basically the exact same thing because we were already looking
[01:37:09]  at stuff that was kind of like server component ask and or partial hydration islands in my case and we were like you basically at some point i don't know what came first between
[01:37:18]  us and react but i i didn't want to follow the url i wanted our mutations to be rpc where remix was making them like like direct like api
[01:37:28]  post routes so we started doing server functions and with these optimistic updates um react released them after significantly after like over a year later but i'm actually not sure if they weren't
[01:37:43]  working on it already i feel like like we generally arrive at the same places okay you guys are talking trying to like set rates they're creating rates for you to review solid
[01:37:58]  js code oh okay um okay well at this point there's no harm no foul if i just go in here and select a scope maybe not as big as the last one we
[01:38:09] 'll do something we don't care about um that we haven't looked at for a long time uh let's say quick hacker news because we have quick city um and we
[01:38:18]  scan that and it's funny because it feels longer than what they report back to us oh no i have to press scan silly okay yeah and then if i click this now i
[01:38:34] 'll get a are you sure it it it it doesn't delete this folder right it deletes the node module folder yeah nope yeah so but we haven't we haven't
[01:38:49]  implemented the the part that deletes anything so yeah but it's more that what i was going to get at is that it's path slash node ah yes yes yes yes all
[01:39:02]  right so that's one thing that i wanted to have here is that um when you when we get to the part like right now inside the the conditional the last one yeah
[01:39:14]  we are going to actually hard code slash node modules because then it's right there like if there's nothing slash node modules to remove then it nothing works and that's it i
[01:39:26]  don't want node modules to be part of the dynamic defined variable because i was very scared yeah i can understand because it could be any path like yeah all right all right
[01:39:40]  so i write a bug and i delete my whole file system um so yeah essentially inside should delete now you we can await remove deer and we don't need to store that in
[01:39:50]  a variable um because what happens is that remove deer returns no if it's a success or rejects the promise um and then yeah so it's gonna be path plus node
[01:40:02]  modules and then the second parameter we need to pass as a recursive so we want it to be true yeah and then we return true again and that's it so basically that
[01:40:15] 's the that's the code for removing our node modules so i don't want to be famous for the guy that came in your stream and had got to delete your entire
[01:40:37]  system so do you want me to do that part of showing the app working um it's okay um i i trust that this works i mean this this is like a good
[01:40:49]  safety guard i mean you the worst thing that i could picture happening is removing every node modules folder on my computer is that a bad thing though no no no i think it
[01:41:00] 's like something it's like it's brand new again there you go you guys got me to wear the glasses okay but yeah because when i'm looking here i guess we
[01:41:17]  won't know until we actually do the delete my gut yeah let's let's just play this my gut is we're gonna do a couple here we're gonna we're going
[01:41:27]  to so here's the thing with hot reloading if you click it now it's gonna have the functionality already oh you don't need to reload right see my oh that
[01:41:38] 's interesting it disappears because of a mutating oh okay let's scan again okay yeah yeah you hate that part right yeah we'll fix this part yeah because i want to see
[01:41:53]  what the behavior was i was like okay what happened so if i delete this yes it's still there that's weird scan now okay it's like what am i deleting it
[01:42:11] 's not going away make sure path is not um okay okay so let let's let's let's look at our let's debug this for a second right ah okay we
[01:42:32]  have something there remove durer is not in the allow list this is why we set up and the helpful debugging command told us exactly what the problem was that's what i love
[01:42:44]  about tori is that everything is closed by default and then that's that's the trap i set myself every time i'm removing something there i never turn it on so it
[01:42:54] 's already config it's already there this one so when we're down here and we want to remove directory true do we have to remove file as well uh no no just
[01:43:05]  directory should work and now it's gonna reload the whole thing because you changed the config so we need to recompile good good good all right um i'm gonna full screen it
[01:43:18]  we're gonna select our scope which will get us into our quick hacker news demo i'm gonna scan for it i'm going to delete this say yes now when i
[01:43:37]  scan it we have nothing okay yeah okay so it works you're still you're still here so i think we didn't delete too much yeah so but this now let's go
[01:43:49]  back here for just two seconds because yeah i think i think because the asyncness everyone like ends up overthinking like what they need to do here because like this is
[01:44:00]  seems fine and it's like this but you have to trigger two signals and stuff but it's like it's like i'm just gonna throw something else out there and to see
[01:44:10]  if it actually works i'm so i'm just gonna we'll just go we'll copy this line and just go um deleted set deleted think think think interesting because
[01:45:05]  this okay delete oh it returns an async function should delete um should delete so this is the quote unquote fetcher in my great resource so that's just because i'm awaiting
[01:45:22]  a bunch of stuff inside right so we could also just do async i mean yeah i mean i might be just like or it's on the other side i'm just
[01:45:33]  like way oversimplifying this but i'm i'm just kind of like false false false returns true format document and then it's just like delete that would say yeah
[01:45:55]  no it's set yeah we're gonna trigger it straight in the handler our like or we could pull it out and make a no no that's like delete whatever it just the
[01:46:08]  resources probably weren't doing anything really here but what's another example that we probably aren't going to touch anytime soon so my my gut always tells me where to put stuff
[01:46:29]  into signals when i'm when i'm handling like the ui state with solid so that's why i okay i have an async method i want to change my data
[01:46:39]  so i need great resource but from what i'm getting it's not necessarily it yeah it's just like the resources the reason they trigger suspense is because you're like the data
[01:46:52]  that i'm looking at is stale right um in in this case like it's not stale until the moment it's been deleted so there's like no in flight
[01:47:03]  state i mean a version of an optimistic update here would be to delete it the second you got to the like before you actually went and deleted it because there's gonna be a
[01:47:15]  delay now right it's not going to delete until it comes back so like if i wanted to do it optimistically but you know the way it was set up there you couldn
[01:47:24] 't really do it optimistically because you you you have to you should be waiting until after the confirmation modal yeah i i don't think there's an opportunity there to get
[01:47:34]  in well i guess there is technically yeah before they wait but then it would be super fast uh just to answer one question in the chat um about if it's the same code
[01:47:46]  for all os's the front end yes it's uh i mean it is the same code for all os's uh they might uh respond different to the code if you do
[01:47:57]  something that it's not in spec for example for their native web view but yeah same for all os's here let's say nope yeah okay yeah so now now it's
[01:48:16]  it's basically we don't have the optimistic update but um i don't know it's a little bit simpler yeah it's funny because like the only reason i'm playing with
[01:48:30]  this a little bit and i wanted to point it out is just create resource was made specifically for suspense um like specifically for managing uh ui state consistency stuff so like just
[01:48:44]  for people to know if they're using solid like you know you know how people always talk about like uh react and you know i do my fetching in in uh use effect
[01:48:51]  and there's like that conversation that people have there is an equivalent in solid of you fetching and use effect it's called just fetching at the top pop your component
[01:49:00]  like like yes instead of doing this down here you just go like in here go like fetch data then set data signal like that's the that's the equivalent in solid um of
[01:49:17]  of the fetching and use effect kind of scenario i'm not suggesting people do that because maybe this is reactive or whatever you want to you know trigger with a memo but like
[01:49:27]  the most basic version and it's cool this is always a trap and trick with premise cooling and premise to do slightly more complicated things but like you know it's interesting for
[01:49:37]  me to sometimes find this balance because at the at the most basic level you can you can literally just go promise then set single um anyway yeah okay cool so now we have our
[01:49:50]  working tori app which is very very very very very cool um because it didn't take much of any you know do you know what we didn't do okay i gotta
[01:49:59]  do one more i i need to search the whole directory and then delete something so we can see the the row shift we we didn't actually test that that worked so we're
[01:50:11]  gonna we're gonna we're gonna grab the whole directory one last time here get the whole examples directory scan it all right please do please do not delete the solid js project
[01:50:32]  all right 10 seconds now um okay this is the crazy one in the middle i guess yeah yeah i mean the top will work as well because it's yeah i i i
[01:50:49]  let's pick yeah this one was weird let's pick yeah if i do this one they'll slide up it'd be cooler if they i guess they're only like all
[01:50:59]  we're gonna see here is a slide up right yeah they though you see it you should see the one disappearing and then there's like this little delay and everything just slides up
[01:51:09]  large yeah it was a little bit chunky but this light okay yeah okay yeah i think i think it's interesting because you're there is you if you want to show a
[01:51:34]  pending state while the thing's fetching um i mean again you can set another signal for that you can all you can set you can set that you can set the signal
[01:51:44]  before you go hand off and then set it again when it comes back in um to be able to show like a pending state here uh during the mutation so it's a lot
[01:51:57]  simpler than the the tricks we have to do with suspense and resources and like concurrent rendering uh to do mutations anyway sorry that's like my technical piece um okay so we have a
[01:52:10]  sliding we have our sliding animation as well um okay very cool i'm trying to think if i have any specific questions about this now that i'm like looking at the example
[01:52:26]  but it seems like it's actually fairly okay well i guess my question here is i mean i could probably look at the docs for a moment here but tori like the
[01:52:38]  api reference is sort of what i'm i'm wondering about because what what are these great things that we have available to us right it's these these modules like we looked
[01:52:48]  at dialogue today we looked at fs today um notification shell updater basically these are the set of apis that we can natively uh natively uh get to because
[01:53:00]  like it was very cool to see in your example some custom rust code to do the optimal thing but i suppose it would be possible to do this in a really unoptimal
[01:53:11]  way where you just called the apis yourself from the javascript side like you're like here get me the list of all the files and then it's called delete
[01:53:21]  directly from the javascript side um so but this is what's available uh what's app show hide yeah get name okay tori version so this is about the app you
[01:53:38] 're building clipboard dialog event that's event interesting so you can get some window events um and uh so um yeah i think you could like technically you're you're in
[01:53:56]  a browser so you can do pretty much um you can do pretty much anything that uh you would do in a browser so i don't know even web assembly stuff like that
[01:54:09]  you can you can like if you resist you cannot go to rust it just at some point um and that's also one thing that i mentioned um quite a lot is that tor
[01:54:22]  is a great entry point to rust because you can treat that as okay i'm gonna go with javascript if that's my comfort zone and build whatever i want get it
[01:54:31]  working and then step step by step i can migrate towards uh things that would work best in rust um i guess that's so interesting because yeah another interesting side of is that
[01:54:46]  the web apis are expanding to include system apis the like like i wonder how that works i guess from that perspective it's the native wrapper that's handling it but like
[01:54:58]  for example there's file system apis coming to the browser right um where you can like access the local file system and there's increasingly more of these type of apis
[01:55:09]  becoming available directly in the browser tori in these situations would just be receiving the requests like like basically the web i guess the whatever the web view wrapper is would be receiving these
[01:55:23]  requests in these scenarios and then deferring to to whatever is underneath here um yeah uh just to answer here what does that have just asked about if you can access the camera
[01:55:38]  fabian lars already replied in the chat he says that on mac os and windows yeah correct uh but in linux is a bit of a problem um but essentially as
[01:55:51]  it's um um that like just agreeing with what you said about uh it would be delegating to the to the to the back end in the end uh to the rust parts
[01:56:02]  uh right okay yeah so yeah because it's interesting because there is a big move right now on the browser side i just keep on seeing more and more of these primitives
[01:56:11]  kind of coming out um most of them behind origin trials and whatnot but being able to build these more sophisticated applications through the browser directly uh but okay okay that's interesting yeah there
[01:56:26]  there would be some stuff that i think would still benefit for being uh native and being able to not only because of rust but because we also have the the updater as
[01:56:37]  the auto update so you can actually trigger updates to your app um which you you you can still with a with a pwa i would say but um in this case it becomes
[01:56:52]  um and there's also the security aspect of having to publish your app and signing your code and all that stuff that i'm not even fully equipped to talk about um but
[01:57:03]  and and different app and different platforms supporting different features in terms of these web apis because notification if i want to send host notification like this is allowing you to like trigger the
[01:57:16]  brow you know like in mac os they have the notifications at the corner this this allows you to actually send the browser or the the os level notification those like the push notifications funny
[01:57:28]  note on the pwa side i was building an app and we had a native app that we'd written in react native but we were running a lot of native code around
[01:57:37]  image processing because of just it was a media app and people weren't there to maintain it anymore and we're like we're just gonna do a pwa now because we moved
[01:57:47]  most of processing to like our aws edge function setup and the all the basic image apis and stuff and like are already available on the device we can plug into like
[01:57:58]  you know google drive if you're on android like they have all these like things built in and i was like oh push notifications uh we need this right people want to know if
[01:58:07]  there's new photos it was like a social media app and and and we're like like oh yeah chrome added them a year ago um there's a apple developer thing i
[01:58:16] 'm sure it'll be any time now right this is in 2018. apple added push notifications to pwas in 2022. yeah yeah yeah yeah with with the web um if
[01:58:35]  you yeah so yeah so uh the thing is um as well is um i think if you're going like pwa and stuff like that you're going to be depending just
[01:58:50]  as we do for for with the native web but then if your entire app is based on this then you might have a little bit more of a problem um another thing that i
[01:59:01]  didn't mention yet uh and your uh what you just said triggered me uh about it is that you can have different tari configs based on your targeted system so as
[01:59:14]  like windows linux and uh whatever support different apis you can work on a way of progressive enhancement or graceful degradation in this case by with the the amount of with the
[01:59:27]  kind of apis that you're going to allow um so this is possible okay okay yeah no that that makes a lot of sense yeah because i i'm sorry i'm
[01:59:37]  picturing the the situation here a lot better because these are client side single page apps essentially and uh it would it would be lovely to see situations where you could because there's
[01:59:53]  a bunch of people talking and chat about oh like can't we what david wrote something it'd be cool if solid primitives wrap the native torb fine so your code
[02:00:00]  is just perfectly portable but like what we're getting at is like this this vision of if you could write stuff in such a way that it would work on you know web
[02:00:11]  using you know the web platform stuff and then on tori you could get you know desktop and maybe even in future mobile um and i'm just trying to picture what that looks
[02:00:21]  like because i we get a hint from the app we just built but like trying to like picture the full story here because i i guess we have it's really about the
[02:00:31]  interfaces to the native language that are the difference everything else in the app is just a client routed single page app yep i don't know if there is a lot of
[02:00:43]  um i would say either tori specific for solid or solid specific for tori uh apis or optimizations we could make in this case um because do you know what i
[02:01:00]  feel like you do you'd use um uh build time environment variables like import meta like they is like there's import meta server in vite or import uh salt it has like
[02:01:11]  is server and these things basically act depending on your build you can make them custom too you just replace the string with true or false and then tree shaking takes care of the rest
[02:01:22]  and you could very much have the same code based on the ui side and then when it gets to where you do the native level calls you basically have a bunch of uh
[02:01:31]  like basically maybe aliased imports or like a bunch of these like switches um and essentially you you can just like shake out which ones you're like okay this is pure web
[02:01:45]  i'm going to hit use these functions i'm going to call our server back end to do it this is on tori i'm going to use the tori apis
[02:01:54]  directly um and then you're good to go i i think you can push this decision function almost all the way down to the like most of the decision points all the way
[02:02:04]  down to where the act where these call sites are for like the like the api call that yeah because like like it was it's very obvious when going through this and doing
[02:02:16]  all these to-dos here like the thing that actually needed to be implemented in most cases was an async function somewhere and you could literally replace this async function with
[02:02:29]  something else i mean the confirmation dialogues and stuff make it a little bit special i guess but you could for most of the time it's these async flows you could basically replace
[02:02:38]  these async flows with something else and be on like a different platform like native web you just swap this function the rest of the code is basically the same yeah so yeah
[02:02:48]  i i can i can i can see it yeah this was the comment that i was looking at that was i mean this might be hard to achieve completely because like i remember when
[02:03:01]  react native came out they there was this whole thing where they're like not build runs run it everywhere but like it was like uh it was like what was the term they used
[02:03:11]  it was like like learn like learn it once build it everywhere like yeah like i i worked at a design system that had builds would build the same component for react and react
[02:03:22]  native it was it was not the debris that that i was sold at to be honest from from build from from bundling to even css it was not that easy performance
[02:03:42]  optimizations as well like it it's tough it's it's it's not it's it's not an easy task so no it was not sap so yeah i worked at
[02:03:52]  sap before but no it was not that one but uh yeah so um i i think i think actually clarinet still does that it's it's a very tough uh thing to
[02:04:04]  accomplish uh in terms of like we had some people that were really good at uh at compile at at tooling and node.js and stuff and there were like some very well written
[02:04:16]  tests to be to be done there but it was not that easy we had to have like abstraction on top of abstraction on top of abstraction to have one component that could be rendered
[02:04:30]  inside an iframe inside a web app and inside uh and building for android and ios it it was not easy um and and if tori can accomplish that it
[02:04:43]  would be pretty awesome to be honest i'm i'm glad i'm not the one who has to solve that problem i i like my problems i like figuring out these mechanical like
[02:04:51]  really low level things not even low level but like the things that allow people like lego blocks um the specific problems have a lot more depth in a different range um so
[02:05:02]  i'm glad yeah here's another great question would auth hardware be available to facial biometric fingerprints vendors and again we have a great answer um finished a mobile plugin literally this week
[02:05:14]  we used to have a plugin for desktop too but yeah so like there's a there's a whole bunch of different device hardware to consider a whole bunch of different uh you
[02:05:24]  know quirk it's not even just like hardware right because it's like different operating systems have different um conventions or uh affordances in terms of how interactions work and it's
[02:05:36]  not just like our buttons go on the bottom and ours go in a menu um it's like the actual way things flow it's kind of interesting because i remember early mobile
[02:05:46]  days everything looked like ios and then around 2018 2019 everything looked like android like everyone had drawers right um they after and nowadays it's like either there's apps that have just
[02:05:58]  their distinctive own look that they carry to both to a certain degree or for the most part they it it feels like you actually have an app for android even if you're using
[02:06:08]  like react native it's very android feeling or and a very ios feeling like they have to actually changed more than just like the chrome of the look of it you actually
[02:06:16]  have to change the way the interactions work so yeah it seems it seems interesting but i am excited to to see other people figure this out because i at these days i i kid
[02:06:33]  you not solid mobile or in solid native is the question i get asked like all the time it's like because people need like the next thing to just be like okay it
[02:06:42]  doesn't have this it's not react yet and it's like okay next js and like solid starting like okay solid native it's like or no it was like 3ds 3
[02:06:51] ds solid 3js yes okay like it feels like there's a checklist we're getting i feel like we're getting the end of it and this non-web platform stuff
[02:07:01]  is probably the the most frequently asked piece from um on for me now that we have solutions other places so i'm very excited to see that yeah i i think i think
[02:07:10]  tori and i might be biased but i think tori can can fit that that position to bring solid to mobile because i've been working with both of them for quite some
[02:07:22]  time now and it's it's it's pretty it's a breeze to work with and i also think that this cli you're gonna have and the fact that to
[02:07:32] ri is uh solid js is vit based it's kind of it's super easy like i even was talking at um react brussels i was talking to to nicola um
[02:07:43]  a friend of mine that works a lot with nx and we even considered having this nx plugin that would run torrify on an app uh inside a mono repo and
[02:07:54]  then you can immediately deploy it without even writing a single line of code you can do all that in github actions that would be amazing um so i think we can
[02:08:03]  we can we can we can bridge that gap uh in a way and to answer what you just mentioned about the ecosystem and people saying oh react has that and so yes we
[02:08:15]  when we considered uh adopting solid as our main uh framework in crab nebula we actually had a look at the ecosystem uh about okay what we get if we go react what we
[02:08:29]  get if we go solid what we get if you go is belt and etc etc and to be honest like the solid js uh ecosystem is very well very complete um we've
[02:08:41]  been looking looking at the solid primitives we it has pretty much everything that i could uh we could have needed at this point uh from even web sockets from creating signals out
[02:08:53]  of event listeners cobalt is such a well-built component library and it's kind of unfair that a lot of those packages are actually zero point something because they when
[02:09:06]  you start using the dx actually feels quite stable um so i don't miss that much stuff i guess we're all very hesitant to put the stamp on stuff um but yeah uh
[02:09:19]  it's uh yeah it's i i've been very happy there's a few tweets the last week that shone some attention especially on cobalt so seeing these things
[02:09:30]  come together now is is is great it's it's really nice to hear david actually is is was uh it was saying that yeah thanks to a lot of people out in
[02:09:41]  our community who have been working on on stuff uh there's way more than that list as you're saying uh okay actually i had one more question when i'm looking here uh
[02:09:50]  because i actually noticed i was going through the package json on the app and let me pull it up two seconds here and i was looking and i was like i see
[02:09:58]  cobalt core as a dependency yeah i'm about to i i was going to use i was going to refactor so it just like leaked there right and the other thing
[02:10:11]  that i was wondering here is when i was looking at the scripts and stuff this these are all dev um and beat ran things what do you do when you let's pretend
[02:10:22]  our our our app is done we're ready to ship what's what's the what's the last steps here um on here like we just we run build right so i can
[02:10:33]  go pm so here's the thing like if you if you need to build the because uh solid uh because tori doesn't ship um your uh anything in your environment you
[02:10:46]  can only build for the platform you are at so that would mean you'd need some kind of vm or whatever to build for the other platforms or have um something in the
[02:10:57]  cloud some platform that would help you build that uh you so this is one of the pain points that we have identified uh in crab nebula and there's a lot of
[02:11:12]  thoughts and um work even uh coming towards making easier to ship and reach different kind different different platforms um but like okay i've just built for mac os here um yeah so
[02:11:30]  what what's the like what's the output like like what's the like i just want to like is there a package bundle thing that like what's the artifact that comes from
[02:11:40]  building this thing like so yeah um but i'm looking at um there is one thing that i can um we have in the docs this uh thing i'm gonna paste on
[02:11:54]  the chat for building the app so there's like the the mac os bundle the linux bundle etc uh where's the chat um here's for um mac os so it's
[02:12:07]  um oh my god there's something okay okay so yeah so you can run the tori build but then there's also uh some checklists that we can go in terms
[02:12:20]  of making the app uh as optimal as possible there is one that daniel um daniel actually um really always sends people let me see where it is um he always says
[02:12:44]  it's supposed to be the first step um let me grab the link okay yeah yeah it's it's just interesting because a lot of tool like we talked about tools this day
[02:13:01]  we always talk about deployment we're like how do you put on netlify reverse cell and this has a sort of different cycle and this was always like my favorite thing
[02:13:21]  back in the day i used to make video games in like visual studios like using c sharp or c plus even further back in the day and i'd build these exe files
[02:13:34]  and i'd you know windows and i'd you know windows and i'd send them to people to play uh yeah i guess i guess that's cool spectra isn't
[02:13:46]  needed um it's asking me to ask me if i want to install pulsar yeah let's do it all right and so uh wow good yeah yeah so you build you
[02:14:12]  build an app with solid yeah yeah no this this is this is cool and it's actually like if i go in my application folder here wherever it is why am i not
[02:14:25]  even seeing it like these are these like and why do i never use i never use this computer do i streams it should be in applications that's fine i'll just go this
[02:14:37]  way i will find it under p here there you go 8.2 megabytes there we go not bad yeah let's see uh what should be like how big is how
[02:14:59]  big is chrome is it up there chrome chrome is gonna be like quite large i imagine it's not even in here google chrome there it is 1.1 gig yeah uh
[02:15:14]  what's something that's yeah that's safari is 13 megabytes apparently yeah weather 31 zoom 240 text edit there we go there's this there's a small app 2
[02:15:31] .3 yeah good so slack 275 stickies 1.7 yeah sorry when yeah chrome is different than chromium yeah of course yeah i just i thought it could be a
[02:15:44]  good uh perspective but it isn't people are asking what can we inspect the package well i i think we like to answer void phil i think it's not a fair
[02:15:58]  comparison because this card does way more than this little app does so it would be a disservice to electron in this case um 392 yeah but yeah we have actually in
[02:16:14]  the blog in the tari blog there's actually a nice blog post comparing bundle sizes for hello world apps let me see if i can find it um there we are package
[02:16:42]  contents we have our plist gold mac us no so we just have an executable 8.1 and then our classic i remember the stupid thing when building for the react
[02:17:00]  native if every time they update a version and like stuff got like out of sync and like it was impossible to do git merge on it and it's yeah react native was a
[02:17:11]  nightmare years ago i was using react native between 2016 and 2018 um so yeah no it's it's interesting hearing people in the chat talking about their experiences yeah everything js got
[02:17:35]  electron down to 80 megabytes but also required a ton of work yeah i mean this this this was like barely more than a hello world app so it's not like right
[02:17:45]  comparison but but what's nice and you always find this with things that are small is that like early stage scaling looks really good so like um it's always quite impressive for everything
[02:17:57]  up to like like for all the basic cases something like small javascript frameworks also have like you know when you can come in and you can go okay i can build
[02:18:06]  my app in 10 kilobytes versus like 80 kilobytes all the way up to about 30 or 40 kilobytes you feel like you're you know conquering the
[02:18:15]  world um and you can you can make a lot of demos like that uh but i mean this is a different order yeah i guess it's similar it's like the difference between
[02:18:24]  this is like 10 maybe 10 x difference perhaps when it's like a hello world actually i didn't actually see the comparison did you find that uh i'm looking for it
[02:18:34]  i'm seeing that uh i'm i didn't find the actual blog post that i'm i was looking at but i saw somebody saying that um the the electron hello world
[02:18:47]  would be close to 80 megabytes is that it chat please keep me honest um but yeah um but and but the thing is that tori at this point like we could get
[02:19:03]  could potentially go smaller maybe not with this app but you can just do other stuff um yeah no hundred at least although weren't you the person who said it was 80 u
[02:19:19] i wizard uh yeah no chat's not going to keep you on us they're just gonna so here's the thing there's a lot of people that don't like the size
[02:19:29]  of electron apps i i'm i'm not i'm not gonna i'm i'm not gonna throw mud on them because that's gonna look bad on tori yeah um
[02:19:39]  because i know i have skin in the game um i'll let i'll let the chat do the work for me yeah i see so you had to work at it to get
[02:19:48]  it down to 80 but yeah it sounds roughly that it's like the difference between solid start and next js right it's about 10x smaller yeah it's quite smaller yes
[02:20:01]  uh very nice okay oh it's just so funny because it's like a different it's it's like a different thing we talk about kilobytes and here we're talking
[02:20:10]  about megabytes right yeah and what david's saying like every electron app contains chromium browser and node.js we need to add node.js as well so it comes
[02:20:21]  node.js with all your node modules and stuff like this yeah yeah yeah again on the desktop people probably more leeway don't care quite as much but yeah i mean but
[02:20:37]  that that's a sizable difference that's that's one of the benefits we talked about with tori right at the beginning so that makes a lot of sense okay so um
[02:20:46]  one's asking if solid starts gonna have ssg um someone yeah eventually i we're now working it through uh uh nitro we have a static adapter but it's
[02:20:59]  very simplistic and someone told me that it broke recently i haven't had a chance to look at it mostly because we're going to be handling the like nitro is going to
[02:21:06]  be handling the pre-render stuff which is really nice from my perspective because we we're now just focused on the mechanics of the framework because ssg is really just run
[02:21:14]  the stuff at build time instead of at request time so it's like there's some details there but generally speaking the mechanics work the same so um yeah we have a static
[02:21:24]  adapter if you're like pure ssg but what i'm looking forward to is getting page level ssg stuff working with nitro um it will happen during the lifetime
[02:21:32]  of beta 2 it might because it's like the last feature on my list it might be at the end or no it might not be like when i when we release beta 2
[02:21:40]  it won't be like they're out the gates um but we'll we'll get there i'm i'm i'm gonna talk about that a bit later on stream uh
[02:21:48]  after after this segment um but uh some of the work i've been doing this week but yeah i am i am i am interested definitely um with what we saw here with to
[02:22:02] ri and i guess my question is and if people have more questions for tiller they should start sending them in but my my last big question is what's next like where
[02:22:12]  what's next for tori for crab nebula where are things heading so for tori i think it's v2 um there's still like um some work doing maintenance of
[02:22:24]  v1 so they didn't stop and but v2 is mobile so um what they're gonna do now what we expect to happen now is that v2 goes from alpha
[02:22:37]  to beta and then security audits are gonna start um once security audits ends uh v2 moves from beta to release candidate and that's where we i think it's gonna
[02:22:51]  be safe to say that the apis are gonna be stable and they're gonna be minor bug fixes between release candidate and and going live and going um and going ga and
[02:23:02]  for crab nebula we're working on on the tori ecosystem uh to help a little bit uh on that so there are a few projects we want to launch uh as i
[02:23:14]  mentioned i'm working in one of them uh to help debug uh your your tori apps uh there's not much yet to to talk about at this point but it is
[02:23:27]  a solid js app so i'm in the right place to talk about it and um it's gonna it's gonna come uh it should come before the end of the year um
[02:23:38]  but don't don't don't i'm not promising anything i'm just saying um it's not my place to promise stuff um but yeah so um we're working on
[02:23:49]  this and uh there's a lot of stuff going on um a lot of the people that work at crab nebula are working towards v2 as well and doing the security
[02:24:00]  audits so that that's the the nice overlap that happens between tor and crab nebula crab nebula is um more officially becoming uh supporter of tori i don't know
[02:24:13]  what's uh the the right word to say here um but yeah so the link is the link is tight um but yeah we do work on on our different projects for to
[02:24:26] ri is v2 for sure um there might be uh 1.6 coming out if it hasn't yet uh but then i would my expectation and then i'm talking as a
[02:24:37]  user so just like you um is that we get um we get v2 after 1.6 um and yeah to answer to what david's saying i also want g
[02:24:50] reg to do a leptos plus story i would love to see that yeah no no it's it's great uh i the ability to just work almost directly with v is
[02:25:01]  very cool it'd be also cool to have something completely in the rust ecosystem i think people would definitely dig that with with leptos um there are some people that also
[02:25:11]  used uh e gui uh tori e gui to build uh not tori yeah tori gui i think it's a thing uh which is a package that helps
[02:25:22]  people creating uis in rust so it can be like and then you go full native on that let me see tori app tori e gui so there is this
[02:25:33]  um back to the chat this one um and then uh and then you kind of leave the web realm a little bit so um it uses this e gui or eggy or
[02:25:51]  i think it's e gui the right way of saying that which is a gui uh graphic ui for live graphic ui library for rust um so yeah there
[02:26:03]  are people that played with that very cool yeah i guess that's the thing right because uh there there are pieces here too just because the cross-platform nature of what you
[02:26:17] 're doing anyway so there's like benefits on both sides okay just looking here if there's any last questions kind of coming in um let's see here just a lot of
[02:26:29]  people very stoked tori native tori capacitor tori tom yeah okay i think people are just playing with wordplay um yeah but yeah um you mentioned a quick go to set
[02:26:44]  up tori plus ljs without touching rust i mean the yeah this yeah that's just my little template yeah um i mean you get that and you can go write uh
[02:26:56]  your javascript and um and then you don't need to use uh rust if you don't want to but i would totally suggest you to venture yourself on rust land if
[02:27:09]  you're doing tori because it's kind of fun like the compiler hits you slaps you in the face a little bit but it's kind of fun uh i i
[02:27:18] 'm learning a lot and if you are coming from rust and uh if you're coming from javascript and want to learn rust i need to do a little self-prom
[02:27:28] otion here that crab nebula twitter account or x account we are publishing some threads and i'm one of the people doing uh reviewing those like lifteria and i actually when
[02:27:40]  we're publishing some threads from rust from the perspective of javascript developers so we talk about stuff like what's a borrow and what's the difference between dropping a value
[02:27:50]  or garbage collecting and this kind of stuff what's a diverging function all these terms that you get hit and slap in the face when you start with rust and you're not
[02:28:00]  entirely familiar um with it in javascript so yeah uh if that's if that if that's what you're interested in go check it out as well oh yeah here
[02:28:12] 's a good one you're talking about the builds being on different environments can you use github actions to do that that should be possible yes um um i would say so
[02:28:24]  um and fabian lars also mentioned in the chat that um there's an experimental cross platform build for windows so um that also would work very cool um hey i i
[02:28:40]  if if you can answer this this is pretty cool if from your perspective i think we talked about this a little bit earlier in this in the stream but did so um i think
[02:28:57]  that uh solid js um when when when it comes to tori specifically solid js is a is very good match because of this composable nature that uh that the solid js
[02:29:12]  core team decided to go for so what you have is solid js as the core and you can add functionality almost as you're adding plugins so you can bring in the router you
[02:29:23]  can change some bit configuration and then you can get to these other places and we haven't touched the topic of vinci very much in this stream but that's also something
[02:29:31]  that gets me very excited because vinci kind of splits your routers as you're going so you can have the client-side router separated from your server-side routing separated
[02:29:42]  from your assets routing and so on and that would allow you to have a single package inside the repository that has the single page application and with that one you can wrap into
[02:29:53]  a tori app and in the same way you can plug it in to the full stack version of it and ship as a web app uh so i really like this idea i
[02:30:02]  really like this approach and that allows us to have the minimal possible um dependency graph in your app if you're building with tori whereas a lot of the other frameworks are
[02:30:17]  pushing a lot for server-side rendering which makes sense from a web perspective but when it comes to building native apps you don't have the node backend necessarily or you don't
[02:30:26]  even want it to and that becomes uh an annoyance i would say uh in this case so for example if you go and i'm not throwing mud on any framework uh
[02:30:39]  at all that's not my game here the thing is if you go like if you want to build a tori app with felt for example you want to have the ss
[02:30:47] g part uh because you want to have the first load but then for the ssg part on svelte it's recommended that you go with svelte kit but
[02:30:55]  then with svelte kit it brings the entire thing it brings actions it being the file system routing it brings all that other stuff that not only you don't want to you
[02:31:05]  don't need to but it actually is going to get in your way if you try to run an action on atari app uh it's going to blow up so um
[02:31:13]  it and it's all convention based most of this full stack framework so the there's always like a landmine for you to just create the wrong file name or the wrong
[02:31:25]  file in your structure because you're used to something else and then it doesn't work so i really like the idea of solid js to have this core that just expands as
[02:31:34]  you need uh and that makes in my opinion for a better developer experience plus there's all the performance benefits on rendering uh that i have run next to me so i'm
[02:31:47]  not going to try to do that part i mean i mean it's enough proof to me is that you guys are using it to build projects at crab nebula so i mean
[02:31:57]  that that that's that has me stoked when the people who work and build tori are using solid to build their apps um internally that's that's that's a good sign
[02:32:06]  for me all right all right um yeah i think we're going to call this here i i i still got to talk about this week in javascript and few other
[02:32:16]  things but um a lot of server actions for you yeah i i've talked a bit about those too um but uh been great guest today and uh do you have anything else you
[02:32:27]  want to shout out uh before i let you go oh good oh good and please reach out to me at any moment on x or linkedin or whatever and the torrid discord
[02:32:38]  is there and it's very welcoming as somebody who just jumped in uh i can guarantee everybody's like like i like i think the solid js community and the tory community
[02:32:51]  has a lot in common and i really like that so yeah oh daniel is there nice yeah yeah i i was actually just looking at something while we were while we were streaming
[02:33:03]  they were out at dinner um i'm just gonna throw this up on the screen for a second here oh yeah they're at a conference they're in uh they're in
[02:33:15]  europe that's yeah nice oh they're having francesinha have you eaten no that's no oh my god what is this so this is a portuguese uh dish where you
[02:33:27]  have a piece of meat like beef and then on top of that you have ham on top of that you have a sausage on top of that you have cheese and everything covered
[02:33:38]  on this like shrimp sauce it's delicious so yeah good good yeah well christopher is that christopher is gonna christopher is uh one one guy that shows in that also
[02:33:58]  the talk that i have you putting the glasses on on the slides yeah christopher is there because we were joking about he was asking on a tweet about oh how do you
[02:34:08]  um how do you do like react dot use memo or just use memo or whatever and i said i just do create signal uh yeah but i was joking and yeah he loves um
[02:34:20]  solid js as well yeah we i had him on stream to tell us all about create uh t3 app a little while back so very very cool yeah uh but yeah that this
[02:34:30]  has been fun um so i will let you have your evening back whatever time it is now like probably like 11 30 or something it's 11 30 but But yeah, I
[02:34:41] 'm so happy to be here. I don't even feel sleepy yet. So I'll just go there and watch the rest of your stream. All right. Well, you
[02:34:48]  have a good one. I'll catch you later. Until next time. Bye-bye. Thanks for having me. Bye. All right. How's everyone going? That
[02:34:58]  was pretty sweet, eh? I had an idea what I was going to see here, but tooling around this has gotten significantly easier, right? I had to install Rust before
[02:35:09]  we started, but everything just worked. I used React Native. It used to be like, go install Android Studios. Go do this. It would take me 45 minutes
[02:35:21]  to set up a dev environment, and then maybe it wouldn't work, and then another 20 minutes, 30 minutes troubleshooting. I'm sure things have kind of moved on
[02:35:29]  from that, but to be able to just go and just build something like that right away, just PMPM, done. Very, very cool. Yeah. Yeah,
[02:35:38]  no. It's great. It was great having him on the show. But, yeah. But the show goes on. Yeah, I've got a couple things.
[02:35:53]  A little bit of a follow-up before we get into this week in JavaScript. It'll give me a second to organize my notes and stuff. And I guess it
[02:36:00]  ties in a bit to the topics. Actually, no. Maybe we'll just get geared up for this week in JavaScript anyway. This might not be a six-hour stream
[02:36:08]  after all. let me see if I can get some stuff together for this right now, but I don't spend as much time on Twitter anymore, so it's been
[02:36:26]  getting increasingly more difficult to talk about this content. But I did bookmark a couple things. I'll open a new tab. Let me see here. Yeah, yeah
[02:36:38] , yeah, yeah, yeah, yeah, yeah, yeah. Oh, yeah, there is a bunch of good stuff. God. Yeah, it's been a week
[02:36:55] . Okay. Yeah, there's actually... I actually bookmarked a bunch of stuff. Apparently, I was on Twitter this week. My bad. There was actually
[02:37:03]  a bunch of good releases this week. Now that I remember. Yeah, okay. Okay. It's always nice to get a reality check. You guys are like, what
[02:37:17]  are you looking at, Ryan? I'm like talking about what's on my screen. You can't see it. Okay. All right. I say that every time
[02:37:33] . I do say that every time, don't I? Yeah, yeah, yeah. For actual mobile, yeah. I never used Electron, so to be fair,
[02:37:45]  it was probably a lot easier, too. Yeah. Astro 3.4. Actually, you guys know the headlines coming out. I'm just getting stuff roughly set up
[02:37:55] , getting my map of things in front of me. All right. Okay. Yeah, well, we've got a mixed bag of stuff this week. I don't
[02:38:15]  really know where to start, but I'm hoping it all just comes together naturally. Two hours in and four hours of hot takes on the way. No. I can
[02:38:31] 't keep it running forever. Oh, well. Okay. Let's get the banners up. I've got a lot of garbage banners to get rid of here
[02:38:47] . Do, do, do, do, do, do, do. Just doing a little bookkeeping. All right. All right. How's everyone doing this Friday afternoon
[02:39:00]  slash evening? Just getting your snacks and drink? Yeah. Yeah. I mean, Rust, I mean, it starts like this, right? Because Rust had clear performance
[02:39:18]  benefits. So you start seeing all the tooling move to Rust about a year and a half, two years ago, where everyone started like going, we're going to rewrite our
[02:39:26]  tools in Rust. And at a certain point, enough people get an extra exposure to rewriting the tools in Rust. They're like, well, I want to do more
[02:39:32]  in Rust. So I'm not surprised to see this trend. Yeah. I want to talk about that a little bit today. main thing, they're encrypting
[02:39:51]  closure data. Yeah. I want, I want, I didn't see the next thing, uh, uh, security article. The biggest thing is I, I think I
[02:39:58]  am so uncomfortable with the closure data thing. I, I don't even want to enable it. I don't know why people think that they need, I don't know
[02:40:05]  what, I haven't seen a use case that needs the closure data. Like instead of trying to, I mean, encrypting is a good idea, I think
[02:40:13] , but, and can necessary, but then I'm, I'm like still trying to figure out like why I want it even at all. Like anything that you can do
[02:40:24]  for through closure, you could probably call through API. I, I guess, because you got to understand the only problem with closure data is when you are passing it from
[02:40:38]  server to client. So when it's a client closure, where in next do you have a client closure? There's only actually one place and it's the not obvious place
[02:40:54] . It's going from server to server because then it's server client server. like I guess I'm going to have to see exactly how valuable this pattern is, but
[02:41:06]  I am not convinced this is a necessary at all. you avoid the issue entirely with the data layer, which is they recommend, but then if you have a data layer
[02:41:22] , you could just use TRPC. Yeah. I mean, the thing is you are building a data layer here. Honestly, a lot of these APIs are pushing you towards
[02:41:31] , so towards that. the thing is action form action is where you get server client server, but it's like the only, maybe I have to show this. Just
[02:41:44]  give me a second. There's the only case. Okay. Let's talk closures for a minute, just so we can understand the situation. Okay. because const
[02:41:59]  secret equals la la la la la la la. Okay. Right. Function server component equals this. Return function, whatever. I'm saying return. It doesn't matter
[02:42:17] . You get me. Use server. tada. Right. The, the closure problem is that this function actually gets hoisted up here, right? Because you pull
[02:42:35]  it out. So if you have const secret here, and you go, ha ha, I'm on the server, right? I'm on the server. I'm
[02:42:57]  safe. And you put secret to here, right? If you do this, because this is per instance based, like someone call has to call this function in order for it
[02:43:13]  to actually get this, because in theory, this here could be like get secret, right? Because this is instance based, or maybe, maybe more specifically, more to
[02:43:30]  my point. The only way when you go back to the server again, that you actually have the same value is if you actually send it to the client. So you can
[02:43:40]  send it back to the server again, but secret here is safe. they will never get sent to the client. It's not all closures. It's only,
[02:43:51]  it's only these nested ones. And the question you have to ask is how, when do you actually need secret to versus saying like, like, now don't
[02:44:13]  get me wrong. If you do this, this works. And if, or sorry, if I go const, function equals whatever. and then I go function secret to
[02:44:32]  now, guess what? To be fair, it's kind of obvious why this doesn't work because this function isn't being called from the server. This function is being called
[02:44:45]  from a client component. So you would have to pass the secret. Like, do you, you mean like it's more like, you know, client something, right
[02:44:54] ? And then client some whatever action. I don't, I don't, it doesn't really matter what it is. The only way to get secret to in here is
[02:45:08]  if you actually went, Oh secret equals secret to. And if you do this, well, that's what the taint API is for because it makes sure that this
[02:45:21] , like the secret is not going to get to your, into the serialized into the client. Like, I, I am still struggling on why we want closure extraction.
[02:45:34]  It's because closures work in JavaScript. So they feel more natural probably, but it's like, if the important closures, I use the module level scope that
[02:45:46]  you need to like get my database or whatever, it should be able to work here. It's, it's, it's instance based stuff that you can't get in
[02:45:54]  there. And if you force, if you don't have a closure extraction and you force people, it's very explicit why it doesn't work. Okay, I'm
[02:46:20]  just catching up with chat now. Yeah. yeah. Okay. Let's see here. Did today, sorry, chat, just getting here. you're forward
[02:46:46] ing your request to a third party server. The data closure is an ID. That means nothing to you, but means something to the third party API server. I'm
[02:47:05]  trying to picture the example here. the only reason, the only reason that, that this is a trap is because it's kind of secretly implicit. It's not like an
[02:47:20]  argument to the, basically TypeScript doesn't like save you here. Like it's not part of the interface. You're like secretly calling the function with extra variables.
[02:47:30]  Um, like, I guess I'm just talking fundamental standpoint. I don't, I basically, you would need something that you have to only do here, essentially.
[02:47:44]  And then you have, and you have to be comfortable. Yeah. It's interesting though, because like you could also do it here. Do you, do you know what
[02:47:59]  I mean? Like it's, it's like, there's two completely legal places to do it. I should make this secret three, right? Like, like,
[02:48:14]  yes. Yes. No. Like, yeah, I don't know. Maybe, maybe that like thinking about it is too much, but like, I think a compiler could
[02:48:36]  easily be like, like Babel. Like they know, like if you use it here, they could be like, like, I'm not saying I've been playing this
[02:48:42]  compiler. It could be like, Hey, you're trying to use a variable declared outside of the scope of a server function that isn't, you know, you know
[02:48:49] , like maybe the error message would be really hard to tell people. But like, what I'm getting at is like, this seems like just like, I guess now that
[02:48:57]  it's encrypted, we don't have to worry about it, but like, I'm just picturing people like, like not even secrets, but like const huge blob
[02:49:11]  of data, you know, equals await all the stuff. Wouldn't it be great if we could use huge, huge blob of data in here? Yes. You know
[02:49:26] , like, I don't know. Maybe people just won't do this because. the use server is a web pack today. Uh, Nikhil's made a solution
[02:49:49]  that works with Vite and we have it in Vinci. I mean, it's a fair question because I, I mean, we should take some responsibility here because
[02:50:13]  solid might've been the first to actually propose the, the, the, this action thing. I, but like, like this, but to be fair, blitz JS
[02:50:23]  had something kind of similar. Um, when you have this, I, I guess we can get right into this conversation right now, but like, there there's,
[02:50:39]  there's two things going on. This is why I sort of not sure if I like the action thing. There's the idea that people want compiled RPC functions. They
[02:50:46]  want to make it just like say, Hey, this, like, why can't I just say this is a function that I can use on both sides. Actions are
[02:50:55]  both like actions equals server function plus routing knowledge, which is why it's really weird to me that like, this is why like react use server means actions because like you
[02:51:17]  basically need the app router. You need our RSCs. And this is why when like solid and bling and whatever had server functions that basically are independent. They're
[02:51:27]  more baseline primitive. they work without, um, you know, server components. Um, but this, like when you're in a monolithic system, system, I
[02:51:37] 'm not surprised people want to say, I just want to declare my API here. You're right. In line in this component is kind of crazy, right? Like think
[02:51:45] , think what happens if people only declared their actions out here, right? Like if it's here, then do you notice what, what, what ends up happening?
[02:51:56]  well, yes, clearly that works. Yes. Clearly that works. No. Well, because this would never work anyway. Um, so yeah, I'm probably just missing
[02:52:11]  like a really obvious thing. And I, you know, I'm probably going to like stumble on it next week and look like an idiot. use server over dollar sign
[02:52:25]  server essentially. It's a good question. And I've, I definitely feel pressured into reacts API. I actually think dollar sign server like that is actually, um, better
[02:52:36]  for type script because you can actually say like, Hey, this is an async function. Use server has no, like, see, I forgot to put async on
[02:52:44]  here, but trust me, it's an async function. So I actually should put async on here. Um, but the, the big differences, and maybe
[02:52:53]  this is just syntax highlighting. Maybe if we get macros, a different syntax highlight solves it. I I'm kind of leaning towards you server right now. Cause it's
[02:53:00]  actually more obvious that like, it's more visual that you're actually in a different, different thing. If you've ever done like, you know, function, function,
[02:53:10]  like I don't know function of function. It kind of blends in. I mean, I was playing. I was like, can we do this? Should we do
[02:53:36]  this? Maybe macros should look like, you know, like we maybe, maybe if there's enough visibility on this, uh, it's an interesting question. I
[02:53:45]  just, unfortunately there's a lot of pressure to copy reacts APIs because bundlers built with this stuff built in. Yeah. I, I suppose so, but it's
[02:54:11]  conceptually, I guess cause you're not, you're passing it. Do they only support passing it to a form? And actually use server top level is kind of a
[02:54:23]  pain in the ass for like, I guess it's, it works with what react's doing because they're assuming that use server means actions, but if you want them to
[02:54:32]  just mean functions, there's like, it's a little bit trickier thing. yes, it's, it's already happening. It's, it's already happening
[02:54:45] . Uh, so, uh, yeah, I mean, it's funny. I was going to get into this week in JavaScript, but I've, we, we've
[02:54:55]  actually got right into what I, what I was kind of actually working on this week. Um, funnily enough, uh, let me just open up fork for a
[02:55:03]  second. Um, solid start, Vinci branch, 34 commits behind. I'm just, just give me a second here, but, I've been, I
[02:55:23] 've been working a ton on a solid start and solid 1.8 and, uh, let's get pull install. And for those who don't know last week,
[02:55:40]  I was proposing a different action API, right? I was, I was talking about potentially bringing stuff directly into the router. Right. And I talked about cache and refresh
[02:55:50]  cache. And then I talked about an action API where you could just keep inside. This has nothing to do with server functions. Initially. It's just, you go action
[02:55:57] . This about routing knowledge, essentially, and then pass in an async function. And then you could just use it here and use it here again. Notice there's no
[02:56:07]  use server. People mentioned to me that my trick for figuring out it with SSR did not work because I can't trust the serializers in the function. So realistically
[02:56:17] , if you gave your action a name, it would work. I know this is kind of a caveat, but the thing is if with, with server functions, like if
[02:56:30]  this is a server function here, like it has use server in it or whatever, we, we actually put a URL on the function. So the action could actually know what
[02:56:39]  its identity is. And then we can delegate it. Cause the trick is with lowercase form, I'm not doing a transformation. I'm literally using a normal form
[02:56:45]  post and then looking at this string, essentially. And I showed last stream, how you can turn an object into a string using two string funnily enough. And then
[02:56:54]  we could actually just delegate the form action push and then purely client side have actions kind of like what remix is doing with react router. But do it RPC style where what
[02:57:04]  I mean by that is it's not tied to a route. You can have multiple actions for route. We keep that pattern and what I was getting at is if you
[02:57:13]  make this a server function, it actually just works in all scenarios. Client side routing, SSR island server components. Yes. But client actions would only work without a
[02:57:24]  name in CSR only. If you wanted to actually have it work with SSR and server components or island type situations, you'd actually have to give it a name
[02:57:32] , which is a small price to pay when I consider most people are probably going to use it with server actions anyways. But this is just a small kind of after note on
[02:57:42]  what I was talking about last week. Cause like the idea here is you could either use an action directly in a forum or a button, or you can use use action
[02:57:52]  and just call it. And then it had this like idea of like optimistic KPIs by passing the action directly to like use submission kind of call. So then you could
[02:58:06]  do the opposite like basically optimistic UI and What this model promotes is this was getting at Because it's using wrappers like cash or action It actually promotes not putting you server
[02:58:23]  at the top of your module, but actually wrapping it with the appropriate, you know, router or cache logic here and then Passing in your server function doesn't have to
[02:58:35]  be server function and this you can kind of see what the pattern is and It's interesting because my whole point of this last week of showing this is if you Put this in
[02:58:45]  one file where you did all the wrapping and set all your server functions And then in another file you just imported those actions and stuff and you just the cache piece and you
[02:58:52]  just go like create async or create resource today And then just form action, you know, add to do or whatever This pattern would work both for client-side rendering.
[02:59:01]  It would work for server components. It'd work for everything Like this could like is this a server component? Yes. Is this a client component? Yes. Like if this
[02:59:12]  is technically a shared component from so from solids perspective and I think that that that that is essentially Where my mind is at here. I know a lot of people I I
[02:59:28]  I think the way we're approaching this with solid start is actually looking at this from a perspective like server functions could precede like islands essentially like Islands have a bigger architectural impact
[02:59:41] . This is just an RPC mechanism now I'm using use server here because that's what Nikhil's implemented. It's possible to Compiler to make it server
[02:59:49]  dollar sign Um, I I need, you know, spend more time with both I think but But like what this allows us to do is very much piecewise put this put
[03:00:06]  this stuff away, right? Um, because like like put the stuff together like you can not use server One of the biggest problems with create, uh server action was that
[03:00:17]  we started getting the downless pattern where we're making like specialized bling functions And then everyone would need a custom compiler Like there's no way we could approach this from a
[03:00:25]  universal standpoint when really we just needed inside and outside wrappers essentially Um, yeah I have a hard time believe you'd feel it will roll up or just you I mean
[03:00:41] , it's the tricky part is this is a bundling problem This is why bling wasn't as sufficient for the these kind of problems because it's not just like when
[03:00:49]  you see this Transforming it you actually have to like walk the graph like How should I put it if you're used if your server function is in a lazy loaded module
[03:00:59] , you still need to know about it So like it needs to be registered. You can't just It's not enough to just like Have some code that registers it,
[03:01:09]  you know in the file you actually have to like Import it which usually like basically break it out into its own virtual module system Yes Yes, I agree See now we're getting
[03:01:29]  to this week in javascript. See I thought this is what would lead to this topic. Um I don't even know like this whole thing's this week in
[03:01:38]  javascript, right? Do you want to talk about this week in javascript? I I'm just i'm just gonna get going right here because uh, there
[03:01:46] 's no real division for me. So i'm just putting the banner up Yes I actually have a bookmark here That was this is almost where this week started for me
[03:02:02]  I don't think reacts or reactions should turn your form method post their cases for form get It's annoying to flip an htl default people like that and the truth of
[03:02:10]  the matter is We choose post because it's easy to serialize, you know, like different like types of data like Not just sticking it on the url but It
[03:02:22] 's completely doable for us to Like if if server functions could respect the get Here um someone in the replies was like Was like hey Form action can be used to customize the form
[03:02:41]  rendering during a start for none Okay, someone's suggesting that like they hang something off the action like dollar dollar form the same way we hang the url off We can
[03:02:50]  also like Like We can we can definitely Do a get It's interesting if get is what it should do by default then I think that's interesting. I I find it It
[03:03:05] 's weird that I generally only use forms for post like I know it's not the default But like if i'm creating a form, I don't think i've ever not
[03:03:11]  put post on it. But like I I get Why you know it should probably be the other way? Yeah, I mean that that's Yeah, you can basically
[03:03:37]  prevent people from defining it in line in the component I'm i'm okay with that Like it's not even in line. It's like in an in a scope like you
[03:03:46]  can't put it inside a function call You basically say say all server functions have to be top level Yeah, I mean Yeah, and that's actually an interesting point right
[03:04:14]  because if you don't write the method on here You're gonna get when that there's no js present you're gonna get like that you're gonna get the default version
[03:04:23]  But yeah, I think server functions Definitely have the ability to support get as well. Um There's some pieces that we're missing for that, but I I saw this and
[03:04:42]  I was like ryan like Ryan florence is like right we're on the same page a lot right now like I we're looking at the same problems almost I
[03:04:52]  The the the their solution not work with without javascript present I can't that's interesting if that's the case Hmm Hmm Well, I mean I guess that's
[03:05:20]  fair too. I don't know this is this is this is an interesting Yeah, we me and nikhil talked about this use server get it It's Yeah It
[03:05:39]  this is one of the this I had a list of things that um I was trying to figure out this week actually Um, and I I kid you not like I was like
[03:05:50]  Going through the list and like figuring out what I was working on and if you go down here Can you server work with custom requests like get like this is This is uh,
[03:05:59]  this is exactly where my thinking is here Um But bunches bunches you know rough work going on but I think this is definitely You know on point in terms of you
[03:06:15]  know our consideration here for for for actions I I think I think it could go either way so I I do have to pay attention of what's reasonable Um You you always
[03:06:30]  get points for following the the standard but there's probably a really good reason not to I don't think we need this though. I Well, I guess it's interesting because
[03:06:44]  what what do you get on the other side because you you have to make sure that if So if you don't care if you don't use that you have to make sure
[03:06:51]  that people get The same thing on both sides so that when they like whether it's a get or whether it's a post We parse the stuff and it's available to
[03:07:00]  to them, you know, we use form data generally, right? We have to make sure that they have the form data object With the right data in it regardless of whether
[03:07:07]  it's a get or a post So yeah, this this this definitely was one of those interesting uh conversations. Uh I'm trying to think if there's another one Yeah
[03:07:26] , well, let's get the kent's article in a little bit. Um But yeah, I I I am still very much in this zone that I mean you
[03:07:41]  can understand how I got here, right? If I don't think that action should be implicitly built into use server Then you end up in in this kind of model,
[03:07:51]  right? This is all in the hopes of getting Isomorphic data fetching that doesn't care about stuff like server components because if that's the starting point We have time
[03:07:59]  to figure out what the best patterns are for partial hydration as we move forward But you like you can use all the features today, you know, like suspense on the server
[03:08:10] . Guess what doesn't need rscs and solid Server actions. Guess what doesn't need rscs and solid, you know So I I think It means that the
[03:08:22]  other people can leverage this stuff and other people leveraging stuff is something that i'm actually very Very much on my mind these days because let me see. Let me pop this up
[03:08:31]  for a second Let me did I install it Yeah, okay cool Definitely having some typescript error issues in here, but I'll worry about that in a minute What's
[03:08:44]  going on here? It looks like this this repo like How can I what's the old reset the I never see it anymore the reset typescript language server Use it's
[03:09:03]  been a while anyway restart all right restart Really this like thing just This thing's been open so long. We're just gonna open a new window. I think I've had
[03:09:21]  this like open to my I don't use this computer for my regular Dev stuff all the time. It's just There we go. Thank you All right Okay, so
[03:09:41]  I was I was working this week on something that that that was kind of cool Um, I was removing solid meta From solid start And You might be like, okay What
[03:09:56]  do you mean by that because technically We still have solid meta here? But What I did Was I made it so that it actually ended up Here In the meta provider.
[03:10:11]  I put it in the app entry point Instead of inside solid start And the reason I didn't do this before Was because How do we know to inject the metadata tags in the
[03:10:24]  head? How do we handle that properly? Classically Solids meta provider And it's because i'm on a version that I didn't update it So you can see
[03:10:35]  the old apis You pass this tags array in and then you Had to Um take it and then call render tags on it and then inject it in your html where
[03:10:45]  you want it to So we're doing all this stuff under the scenes and it's got a similar problem with the router where The meta framework in order to do asset handling and
[03:10:52]  like handle the requests and stuff properly Needs to be able to Like be aware of What's going on so usually you build the stuff into the meta framework But Some I was
[03:11:08]  working on our Async local context Implementation which I've added in solid 1.8.4 by the way, that's what I was working on this week um
[03:11:18]  and I was working on solid meta and I realized something APIs that we've had for probably like over a year I just wasn't using directly see Now instead of passing it
[03:11:33]  in You just use it somewhere and then Wherever you you call get assets from solid js web because solid has this hook called use assets Inside the web and that I'd never tell
[03:11:47]  anyone about because I've always I haven't documented it And it was something that we're using internally with solid start or whatever to kind of inject the assets what it does
[03:11:56]  is It collects things while you render it can be synchronously asynchronously. It just collects all the stuff as you as you're doing your rendering And then at some point at
[03:12:05]  the when it's right like say you're flushing your stream Or you're finishing rendering you just call this and it retrieves them all and then you can inject them in
[03:12:12]  the head and the thing is Solid if you actually render this part in the jsx you don't even have to call get the render call like when you call render to
[03:12:24]  string or whatever automatically injects it in the head at the right time like when it flushes or whatever so like We've had this magic for ages essentially in solid as a
[03:12:36]  primitive And I I just didn't think of just doing the most Obvious thing ever which is when you create the provider on the server for Where is it in its server
[03:12:48]  provider? Where is it? um We literally just call use assets ssr render the tags And then because we have the reference We can you know have it for our
[03:12:59]  ad remove tag logic for solid meta and the end result is I was able to actually go into solid start And there is no references inside the the start package here to solid meta
[03:13:13]  anymore In fact In the hacker news example right now where I don't use solid meta at all It's not even installed And so it's like It's just not you
[03:13:25]  you're not taking that code cost in it Um, if you're you using the hacker news demo now Just because solid start, you know had solid meta so to kind of
[03:13:34]  get you know, maybe it would you weren't using it in the client So I think like it pulled in it's just not even installed anymore. And My hope with solid
[03:13:42]  start if you with it's not even hope this is where we're going with solid start beta 2 you can already see When you look at the bear example here that Look
[03:13:53]  at the imports Meta provider title from solid js meta Anchor routes from solid js router default error boundary and file routes from solid start suspense from solid js And then this is
[03:14:08]  some app code that I was playing around with Context providers, so this isn't actually a bear example right now. This Shouldn't be here, but my point is
[03:14:17]  that Because we're importing from these directly they're not being re-exported through solid start Solid start basically isn't going to own these things in fact The router is
[03:14:27]  going to is then or not here the router is the next thing that i'm about to remove from solid start So solid start won't have a router either technically we're going
[03:14:36]  to ship demo templates with routers But look what's coming from solid start File routes That we happen to stick into solid router, but the truth of the matter is If
[03:14:44]  I go in here and go console.log File routes, let's just call it as a function Routes If I go in here and go localhost 3000 Hopefully
[03:15:22]  everything still works What you're going to see here is A bunch of json routes type page component this import it here file path file path file You know data. There
[03:15:39] 's no data function children basically You're going to get the output of The file system router, but this has nothing to do with the routing you do in your app. We
[03:15:50]  chose to use that json To be it's in the format that uh, we made in the format that solid router Recognize this but honestly The information here is generic
[03:16:02]  enough that you could literally stick this into tan stack router and Essentially be like bam solid start with tan stack router You know You can also choose not to use the file system routing
[03:16:15]  at all But that's that's what you get from solid start here. So We are getting very close to the point This is what i've been working on these mechanisms
[03:16:25]  to be able to allow Solid start to not actually Be anything. Um, you know, this is why i'm talking about those data fetching apis because then we get
[03:16:33]  to move Async into um Yeah, we didn't move async Into like data fetching and stuff into the router or maybe solid core if we want Async
[03:16:54]  context so yeah, well check check check this out If you if you're kind of interested what i was playing with it's still considered experimental i'm going to go into dom
[03:17:03]  expressions Why a for that's not the route that's the anchor and I am leaning back towards lowercase a side note Just so you understand here. This is these are
[03:17:16]  anchor tags And then the routes are these things these would be the routes here. This is just the links at the top of the page um Calling it link is something that
[03:17:26]  react router chose to do and everyone else does. I just don't I'm not i'm not there In the future. We'll we're just going to do this.
[03:17:34]  I'm pretty sure Um, we used to do this and then I switched to capital a So I I hate that I flip flopped there, but I think I think eventually
[03:17:46]  I think this is ultimately where this goes if I want to support You know server components things that don't hydrate like all the different use cases I think It's you know
[03:17:56] , I think we probably end up on lowercase a Technically our router already works on lowercase a it just capital a Adds a property that we look for to know but
[03:18:07]  we do all our routing via delegation so it works without hydration anyways But if we are using components as a way of marking like this is a client component Then we'd rather not
[03:18:17]  use capital a because capital a would suggest that in this case that it's probably a client component We'll suggest we replace with all start no like this is it's exactly
[03:18:29]  the opposite It's like solid start doesn't exist. It it's more of like It's like it's all start is this Like maybe not it's like it's it
[03:18:40] 's basically like how can I get the file system routing and how can I have a build System that's set up to handle ssr? Like these are all like
[03:18:50]  The the these are all the packages I guess on another hand you could kind of view it that way Because like if you're starting if this could easily be your starter v Templ
[03:18:59] ate because your starter v template could literally not have this not have this not have File routes not have literally any of this and just be like cra again And then you'd
[03:19:09]  be like, oh, yeah, I feel like having server functions in my cra app. Well, no problem I will just add view server here like That's that's kind
[03:19:19]  of what what what I'm going for here The thing is it's not compiler magic. It's just event delegation That that I mean, maybe they're doing it special but
[03:19:34]  everything that I'm talking about When I'm talking about lowercase formula anchor is not compiler magic The only compiler magic is when I have put a use server or server dollar
[03:19:44]  sign or something I tell you when there's compiler magic I guess you could say that like the jsx is compiler magic, but i'm not doing anything special like i'm
[03:19:53]  not this is this if If you if you write a capital letter function And it's my component or it's four or it's a or whatever it it does your thing
[03:20:07]  We've got this whole block of logic here actually in solid router Like we already do this I just made a commit like a while ago to switch it to look for To like
[03:20:28]  shortcut it a bit to look for like one specific like we had more heuristics here But if I go into routing here and then there's like what create router Is
[03:20:39]  this it there's like a there's like an it's like an anchor I should handle anchor click here we go It if if if none of these compose path Has yeah
[03:21:06] , so I did this thing where I added like a link attribute, but if we ignore the stupid thing It looks for stuff like rel external or download it looks for the it
[03:21:15]  compares it with the base url of the of the router And make sure that like you know So if you have like if you're it's linking to a different page
[03:21:23] . It's not going to intercept it There's a whole bunch of heuristics up svelte has the exact same Thing to be fair svelte svelte
[03:21:31]  works on lowercase anchor Yes I am except for ones that have specific like point to a different website Do this I know they said svelte works this way solid worked
[03:21:46]  solid's router worked this way until like a version or so ago So yeah, I mean There's a whole bunch of of stuff that we can basically eliminate the the routing
[03:22:14]  from So I I think uh, won't there be resource prefetching associated with anchor tags behavior for soft navigation Um, we haven't done preloading yet. This
[03:22:32]  is something that i'm still Wanting a solution for our data functions aren't really well set up for preloading um But yeah, I mean this stuff this because
[03:22:45]  solids anchor tags used to work this way um, and they still do except we like shortcut them quickly here um Essentially like we this this is the main mechanism that has worked for
[03:22:59]  years like I know this this works Yeah, I mean If you want to play yeah, for sure But the thing is what i'm getting at is there's a whole
[03:23:09]  bunch of things like that naturally like the the advice is if you Like I forget is there another one, but there's a whole bunch of ones that like using the rel um
[03:23:18]  Like basically you just go like rel equals external or whatever Yeah, okay, let's go here. Okay So I was trying to figure out of a mechanism To get async
[03:23:30]  local storage. So like one of the problems we've had in solid start is like why can't we uh Uh get the request through and Part of what I was doing
[03:23:38]  in solid meta that I was showing in the router is figuring out a mechanism for do that for doing that So I guess this isn't this week in javascript exactly Whatever
[03:23:48]  this week's gonna be a mess. It's gonna be a bit of everything But what I did was in the server js I Added a couple new methods Um,
[03:24:01]  let me see if I can get to them These are deprecated deprecated deprecated. Where's my experimental thing? I added a symbol called request context
[03:24:10]  And then I added global this I know I hate this global but this will work for now global this request context get store or undefined Now this is just a very simple
[03:24:19]  wrapper and you're like, okay, who cares this doesn't do anything on itself But I needed solid js web Um, or whatever just to have this mechanism globally in case
[03:24:29]  we needed it ever to like call it inside like our render functions That are defined in here. This is why I didn't just put in solid But I didn't want
[03:24:37]  I don't know if every platform actually supports this So I just wanted to kind of uh Make a mechanism for it and then This way like if this symbol doesn't exist or
[03:24:49]  whatever and like no harm, no foul we just continue on this will just always return undefined But then when you go into um Solid js I snuck a sub package
[03:25:02]  in 1.84 in here solid Web Storage And all it is is It has this method called provide request event and this type is also available from dom extensions It's just
[03:25:18]  an event that literally it's just an object that has a request on it nothing else But it's the design is expected to be extensible and then essentially it's it's
[03:25:28]  it's grabbing async local storage And I put in a separate module. So if you don't import it, you don't import it. So this way like if
[03:25:35]  Like basically you can choose whether to import it and actually use this feature and have it you know Not break other stuff And then this is why I have the detachment this ends
[03:25:45]  up writing It to the global this the request context And makes an async local storage and then I call the async local storage dot run with this and pass it through
[03:25:56]  So it's just a very simple wrapper over async local storage but what it lets me do is Crazy stuff that I actually removed some of it from solid meta because I was
[03:26:04]  doing stuff But what it lets me do is when I go into the server setup for the for the initial link server here um Obviously we did this but what I also did
[03:26:16]  was I I get the request event if it has a key that I just made up called solid meta Then I use that or I knit the server provider here and what this
[03:26:33]  lets me do is yeah I keeping I am using the context provider here, but i'm not actually using it I just I just let it be inserted essentially because the hydration has
[03:26:45]  to match on count But what it let me do is uh do do do do um When I use it where is it down here use head Basically If it's on the
[03:27:01]  server it tries to get it from there instead of calling use context And this is future for when we get to server components when we're in a zone where you can't use
[03:27:12]  context apis on the server So this kind of means that like it'll try and use the request event for it or um, it'll use the context api um
[03:27:22]  if it's not available and What will happen in the future is this will error out when it's in a server component uh context But what I had here which I commented out
[03:27:33]  for a while was that I I was letting use head actually create the server provider independent of the provider component So technically speaking you could use head like in a completely different part
[03:27:45]  of the tree without even having the provider in the tree um, I decided against it because it was confusing But it was just one of those things I think about but the more
[03:27:54]  important thing here is a a a library like the router Could Technically get because it the one thing that event requests knows for sure is that it has um The request object on
[03:28:08]  it it could use that to get the url and stuff So the hope is that when we go into here We'll be able to just go like You know wherever it is
[03:28:16]  just be able to go like basically router And bring it out here and I still have to see if there's pieces I need to do wiring But one of the reasons we don
[03:28:27] 't bring it out here is because router needs out it needs to be able to like Send out some information to tell us about redirect handling and stuff if if I can figure
[03:28:35]  out a pattern here um We should be able to actually pull the router Out of the framework and into the app uh And it will could basically Work very seamlessly whether it's client
[03:28:49]  or server because it knows where to pull the information from Because there's a bunch of features that are only there for ssr and now we have a vehicle To communicate
[03:28:59]  them with the core of the framework Without having to expose that to the end user so they don't have to worry about the wiring In their client apps that's that's the
[03:29:08]  gist of it Um, I don't know if everyone followed that that's a little bit this global this for the future Yeah, yeah, I mean sometimes them it works
[03:29:20]  Why everyone won't come I mean, it's it's fine, but like it's It's funny because like It's it is fine but like There's something about
[03:29:44]  the feel of the client side routing that and the control you get from it that makes people want to continue to build on Even stuff like astro which an mpa framework you
[03:29:52]  add view transition api. It's not doing it is acting like an mpa but you're not and the authoring experience like an mpa but you're you
[03:30:00] 're still doing client side routing essentially like people like the The the user experience the client side routing So yeah, I mean no one it's not like us to rest on
[03:30:14]  our our laurels so to speak Usually there has to be a clear distinction of boundary Like I need to know that something's going on like I like I like it be
[03:30:30]  bound if possible like But it's tricky like for me. That's why I like I generally don't like doing compiler tricks in here. I But like okay, i
[03:30:41] 'm entering the jsx I I think it has to I want I if possible I want The compiler stuff to I mean it's hard javascript is a transpiled language
[03:30:51] . So like we're always compiling stuff But I want to be able to see The boundaries between the stuff that's transformed and not transformed That's why I made such
[03:31:01]  a big fuss about serialization boundaries and the react server component syntax. It's just It's tricky because Some problems are solvable and some problems aren't Yes, that
[03:31:21] 's basically it very explicit and I think this is a very careful balance because Like you could argue that say the something quick is great for that because they're very very explicit,
[03:31:31]  but if it's literally Like everywhere And it's explicit like It's a it's it's a lot. Um So Yeah, there's a careful balance here But yeah,
[03:31:48]  I I mean I get tended a bit but you can kind of see directionally where this is going because When I when we finish Getting these data apis here what you're
[03:32:00]  going to end up with is you're going to be doing stuff like you know Importing action from the router or you know, whatever we use create loader or whatever from
[03:32:09]  the router And Essentially solid start is going to be like Maybe just these two components Like we just want to have a nice default error boundary and some you know the file system routing
[03:32:29]  like I don't know like This is this is this is you know, where what these mechanisms are going to enable I like it's really cool you know how like Like I
[03:32:42]  think some people saw like uh solid query how it just literally just worked when you wrapped a resource like they didn't have to do anything special to inject the json in the
[03:32:48]  head or do anything They're literally just like okay Wrap create resource and then you as a developer imports all query done works with streaming ssr everything That's what these
[03:32:59]  primitives allow like the asset management means that you know You don't want to use solid meta you have a better like asset css, whatever handler thing The end user
[03:33:08]  will just literally have to import it and stick it in and then you'll know that everything is going to be added to the html during ssr Like you don
[03:33:16] 't no one has to wire it up like that that is What i'm going for here like It's a weird place to be because everyone's talks about these opinionated
[03:33:25]  frameworks like next or whatever and like This is like just a tiny layer over vinci, right? Like this is just like as minimal as I can get over over that layer
[03:33:37]  because then um There's just incredible amount of power here You can you can do You should be able to do anything with this I have a whole stream where I try
[03:33:53]  to explain the jsx and solid I also do video where I like do it live but um Let me It's uh It's always a little bit tricky because it's it
[03:34:07] 's a it's a it's a you know, perhaps complicated topic um but yeah, I I Yeah, uh, let me see if I can If I can grab
[03:34:23]  the link here so I can drop it in Sorry, give me two seconds Ryan explains it in every stream. I feel like probably to a certain degree because it's always new
[03:34:38]  to people, right? Um, but yeah, this is the stream that i'm talking about Yeah, yeah, I mean this this this is this is true. There
[03:35:07]  is a difference between What the What the um Boundaries mean but at least with jsx the boundaries are very clear like you can See the boundaries like they're There
[03:35:21] 's angle brackets and Parentheses and stuff or what's the term curly braces Anyway, um This is what i've been working on the last few days a week and
[03:35:35]  why i've been really excited because as I said I pull the stuff back into the router We Finish some other stuff one thing that I didn't show in this little silly example
[03:35:47]  here is I mean again, I don't know if everyone's gonna want to be stoked about this But look what's an entry client right now Nikhil added a couple
[03:35:56]  lines while while I was sleeping Async function hello you server console log awaits He just stuck this inside the client entry point of the app and if you've been watching along Here
[03:36:08]  so far you'll see this hello. John has been showing up every time. I refresh the page um This is inline server functions So it's it's this is
[03:36:22]  a combination of the bundler Mechanism that I was talking about Um and the compiled mechanism because the it's it's hard Inlining requires the compiler because you need to be
[03:36:39]  able to hoist stuff out Um, and then the bundling needs to be able to pull into a separate module graph. So Um, yeah, it there's some bugs
[03:36:48]  around this right now, but Uh, it's it's it's it's here Oh, nice Cool. Yeah Yeah Yeah, we used to have a 10-minute
[03:37:13]  video and i've been begging to get it back and it literally all the 10-minute video does is it was like right on the top of our dock site Um, unfortunately
[03:37:20] , the guy who created decided to go and delete it on us one day um It literally Explains this it's not it's something that Even if someone tells you you you
[03:37:32]  still don't get it. It's like the signal calls people just get it But when once you see it once this is why my talk uh world beyond components was so successful
[03:37:39]  for so long was because You you can see this one little segment and suddenly you're just like Oh, right and I i've been dying to get The the video link
[03:37:50]  back see now right now we have this like one link intro to solid 100 seconds There was a second link that was like solid in 10 minutes and It was amazing at explaining
[03:38:02]  this Yeah, I have it in basically all my talks like I I talk about this like literally all the time um But that 10-minute video was it condensed and it
[03:38:16]  was like beautiful. Uh We we we got a voiceover like to say the text you know like one of those computers to do it I guess we just never put it
[03:38:26]  back up. I'm gonna have to talk to david about that If I go to youtube go to the solid Solid.js has a channel. I think I think
[03:38:34]  we have a channel somewhere of course probably not going to see it here because I wonder if I can just like it's funny like I don't even know where the solid.
[03:38:53] js channel is because if I go to my channel let's see Can I just go at solid.js? Nope, apparently we don't know Apparently we don't own
[03:39:09]  this one I wonder if it's like this Nope Try all the variations till they work Yeah, we we just don't We don't have the video back up yet Yeah,
[03:39:39]  pretty much but okay But you you kind of see how this is shaping up right like This primitive is not actions It's not Reloading the router when you do it
[03:40:04]  or redirecting to server components. This is literally just whatever the hell you want it to be And i'm proposing that the that if you want to add routing behavior to your
[03:40:14]  server function Well, you import from the router and then go. Yeah, oh, this is an action, you know, you just go solid.js router You know Make
[03:40:23]  this into an action That that's that's where primitives in you know in motion so to speak Yeah, I I don't know if it will work in a
[03:40:45]  hundred seconds um To be fair that the 10 minute video could be eight minutes But the part of the reason was the video explained both signals and jsx in one go So
[03:40:57]  we in in one go we basically explain what are signals and then how the jsx works because you kind of need both concepts people coming in Like or like what the hell are
[03:41:08]  signals this one video basically showed what signals and jsx are in Yeah, I Yeah, I I I I think even 300 seconds would be hard um But if someone's
[03:41:26]  up to it, it's so funny when this video got deleted Uh primogen offered to make our intro video if I gave him the script He said he wouldn't have time
[03:41:34]  right away, but he was like, yeah, give me like a couple months and he's like i'll i'll I'll make the i'll make the video for you
[03:41:41]  Um, I never took him up on that offer. That's it's been like six months now Because I like didn't come up with the script for him, but
[03:41:48]  he you know he You're working on re-dubbing it. Yeah Just picturing primogen doing the solid video intro No, it was very generous of him to
[03:42:04]  offer to do it for us for free um, but yeah Uh, anyway I hope you can see why i'm getting excited about this stuff because it's The pieces are
[03:42:19]  all there, right? Like I just need to finish the the Pulling the router action stuff in We need to debug some of the stuff around the recent features, but we
[03:42:29]  have the server functions We have the ability the async global storage the reason why async global storage is so that when you're in here You can just go const event
[03:42:40]  equals get Event Or request event Bang and then be like event dot request You know and you can do that in in this case What you do is you end up getting you know
[03:42:54]  It's all it's the full event object that we use in solid start So Yeah, this this is uh This is why this all ties together um Yeah, I
[03:43:09]  I think you could do an amazing job if we came up with the right script for him uh, anyway um Stuff so close right it just you can like see the pieces
[03:43:35]  kind of fitting together uh Anyway, let's let's get back to the rest of of the list on what's going on this week um The problem is because enough stuff
[03:43:51] 's missing I I haven't done a release of it yet I will do it when I because like there's just pieces missing, uh, and kind of buggy. I
[03:44:00]  It's probably As I said when when we get That next couple things in i'm going to start doing beta release a beta of the beta so to speak Well, just to
[03:44:12]  test that all works So the biggest problem is when we do this release there's going to be some features that are missing First of all, there's no static adapter yet
[03:44:19]  or static pre-rendering So that's going to be gone in version 0.40 until we actually add it back in Another thing that's going to be missing is the
[03:44:26]  islands router If you as you can imagine that has to now be in solid router makes sense. It's a router, but We're not going to have that right away and
[03:44:35]  the experimental islands mode Is in flux so people who have stuff like the working notes demo right now Are not going to have that in the next version right away Another thing in
[03:44:46]  beta 2 that's going to be missing is like the web socket example with Cloudflare and all that stuff all built in because We had these custom adapters that did this
[03:44:54]  stuff and now we're using nitro's generic adapters. So There is going to be stuff that is not present in the new stuff at first So i'm just trying
[03:45:04]  to get it up to a level where I acknowledging that stuff's going to be missing But that like I can make all the Main examples that I want to in in the
[03:45:12]  example repo that I have in here Where is it? Like I need I have a list this is my this is my to-do list, right? I'm actually not
[03:45:23]  gonna do them all right now right now. I've done It's funny because I moved these are actually garbage. They're empty. Um Most of these are garbage.
[03:45:31]  That's so funny. Um Like these are these are actually not here. Um It's fine. I'm not gonna worry about it, but I've done like solz
[03:45:43]  styled tailwind I've i've done all these ones hacker news mdx solz dial tailwind bear and I intend to do to do mvc,
[03:45:55]  auth, auth.js, prisma, trpc Probably vtis though. I have no clue how this works with vinci at first um Yeah, I just
[03:46:06]  want to get these examples back except for the web socket one and the movies and notes ones um except for those three and then Then I'll start people will be able to
[03:46:16]  play with it because all the pieces will be there Oh Oh, it's on it's on the vinci branch if you want you can go download it right now the g
[03:46:30] ithub it's a branch called vinci branch It's this branch here Um, it's it's up on the repo so you can go play with it Swap
[03:46:43]  prisma with drizzle. Yeah, this is the problem with example templates, right? It's always like the next thing Um It's a good question I have to admit I
[03:47:02]  I I look at vinci first very briefly to look at he has a bunch of examples Look at the examples in vinci to understand how it works And then you can
[03:47:09]  jump over you don't have to get like too deep on vinci But he has examples of like everything from using tan stack with vinci to like like I'd look at
[03:47:18]  that Quickly And then I'd go to this all start I I I haven't been keeping up with it Uh, he was very prime was very hot and solid for a
[03:47:34]  while especially with his work at um netflix But I haven't talked to him recently and he's been doing a lot more svelte coverage recently, so I don't
[03:47:41]  know was he excited Um, okay Let me look here I have never in my career stage technology shoot higher and faster and then crash harder than graphql. I don
[03:47:57] 't know I thought this conversation was interesting the graphql conversation We talk about this on stream a lot. I feel like I might even talked about this last week on stream
[03:48:05]  because this happened in the morning So we probably talked about this already. So let's keep on going. This one happened during our stream, so Show me the post I
[03:48:18]  would love to see what anyone from remix I've talked to him about it privately So I don't want to say anything until I know what he said publicly This one I I
[03:48:31]  looked because honestly This makes a lot of sense for me Is this good? I don't know typescript enough to understand if this is good, but if this is good I
[03:48:39]  am all for adding this to uh solids types um Do we have this problem in solid? This is me just actually just asking the typescript community Oh man htm
[03:48:56] x and us are I mean people can obviously because of how primitive they are someone could just like stick htmx in it and then like when we get start going properly
[03:49:04]  like because it you know Yeah, we could support this stuff. It just my intention is to basically sidestep htmx and basically show how you can get all
[03:49:13]  the value of htmx without introducing a second model Right like htmx has a lot of good Like I like Ideas it just the execution is like
[03:49:25]  it's like it's kind of like It's like how many takes on htmx do I need but I think I'm still shifting my thing It's I think
[03:49:33]  it feels a little bit these days like if someone came to you with jquery and react And then they're like react wasn't quite out yet and they're like
[03:49:40]  here's jquery and you're like yeah Yeah, yeah, yeah, yeah, and you're like, yeah, but then you're like But I see there's
[03:49:44]  a future where there would be something like react. Do I want to use jquery? Yeah, okay, so this is good. Yeah, just if this is good
[03:49:56]  and you get people have an idea how to approach it Maybe I should talk about to now. She does all the typescript work on solid second biggest contributor to solid I just
[03:50:07]  I just made a mental note here because I was like hmm good for react good for us All right, I Haven't read this article yet um So maybe we'll leave
[03:50:25]  this a minute. Let's talk some release announcements For a second actually before we do that. Let's look here. Is there any solid news this week? Yeah, our
[03:50:33]  talks from v conference went up I probably talked about this last stream. So there's nothing big there um new podcast Yeah, yeah 10 stack query went out last week Uh,
[03:50:49]  sorry 10 stack uh like the new update 10 stack five But um, I think we're seeing more and more, uh Uh, you know examples of people using it um
[03:51:01]  Out there. This is why I love the primitive approach because people can go and use if you don't like what like the actions I've built into the router You can use
[03:51:09]  This is another argument for what I was talking about here You can use this with 10 stack. You can just stick you server in a 10 stack query You know, it's
[03:51:20]  it's not The the the the submit like the application result semantics Are an added flavor So yeah, I this this is every time I see stuff like this This is
[03:51:35]  why I get really excited when I see the ecosystem doing such powerful things um This tweet made my day made my week honestly, I know dax but um It's really
[03:51:53]  awesome To like see people Say good stuff like this because People will always be like yeah, it's good for this. I use in my hobby projects I you know, like
[03:52:07]  they'll always be very willing to be like at work I use react and then it's weekend. I use svelte or solid or whatever and Like This is this
[03:52:18]  is the kind of endorsement that we we need because most people are just like oh, it's novel, you know He's basically saying Like stuff like cobalt like
[03:52:28]  our component library He's actually saying it's not like just good. It's like the best UI component library he's used for any framework He's talks about modular
[03:52:41]  forms, which us and quick have a You know created by uh, vivian who also Um, made fit valavod right Solid primitives like he's he's talked
[03:52:54]  like This this this this as I said, it was so good to see such a positive not like You know, like your typical like everyone wants to be leveled, you
[03:53:04]  know, like because they know what's going on He's like, no, no, this stuff is actually awesome Um, so this this this definitely made me very happy
[03:53:11]  a lot of people reacted to it, too so It's funny because more people are using solid their work than I realized but it's like hard to talk about Like we just
[03:53:25]  had a guest on who said that he's been using solid as work and they use solid you know a bunch, you know with tori and stuff like it's it's
[03:53:34]  very it We're we're at that point where we're just like something, you know, something's gonna Push, you know at some point, you know, it
[03:53:42] 's you can see all the pieces just lining up I just I got to finish the work on solid start I guess Anyways That was just my solid news for the week because it
[03:53:52]  just Very very awesome just to see that okay, let's see We talked about this last week, but the results for angular 17 are officially now in the table We remember
[03:54:06]  to try and like factor into it to see like the performance Oh, this is interesting. Sorry It's the first time i've ever seen view rxjsx beat
[03:54:19]  solid store implementation Interesting proxies must be slow in this release Of course felt for but what is cool is angular showing off that with their new smarter stuff that they're They
[03:54:30] 're actually gonna like this isn't signals. This is just their the way they've improved their control flow Um, they're actually gonna hop up very quickly into elm
[03:54:41]  territory on performance which sticks them, you know Where's that? Where is view these days? I can't even see view. I thought view is faster than svelte
[03:54:51]  4 What's going on? There's react What happened to view? Are there's frameworks missing? That's so weird View pina did they like somehow remove view from
[03:55:13]  the from the table? Oh, there it is view 3.36. Yeah. Yeah, actually yeah, why didn't I see this before? Oh, yeah,
[03:55:26]  sir angular 17 no zone with the new control flow feature Actually edges out view here very impressive Performance it's it's almost caught up to where leptos is these days,
[03:55:37]  which is in which is incredible. Um Those guys are up to stuff obviously that's the signals version is back here somewhere Because they're not really leveraging they're kind of leveraging
[03:55:48]  the way it signals the same way like say preact leverages signals Where's preact like there's preact signals? Where's actual preact preact classes here?
[03:55:59]  Anyway, just interesting to see the results now final so we are actually like submitted so we can you know talk about it It does look though that like even classic angular like ng
[03:56:16] 4 angular 17 Is considerably faster than before What's going on in this table? Do you know what's actually weird? Something's up with this table Something is very sorry
[03:56:36]  something is very weird going on The the range is tightened React used to be about 1.8 and right now react is 1.48 It's like it's actually interesting
[03:56:54]  something's changed in the browser that react and preact are almost the same speed for hooks Jotai yeah reacts right here 1.42 What's going on? M
[03:57:08] ithril I don't think react and angular did they suddenly get way faster like this browsers do some kind of optimization This is actually really interesting What the hell See there's angular
[03:57:24]  signals next to salt 4 But something is different here. There's owl The side note. This is block dom's full actual framework with nice dx instead of just using block
[03:57:34]  dom straight um elm Dominator yes, something is very different You can't tell at the front of the table because literally the front of the table everyone's like Yeah,
[03:57:49]  oh, look at this web components are slower than solid again Wow Yeah, something really weird is going on solid Eevee and million are literally like 1.05 six
[03:58:07]  like I i'm yeah solid's faster than rust again apparently They did something so they they must have done something that optimized the performance of a lot of frameworks and stuff It's
[03:58:16]  been a while since we've been faster than raw rust bindings But yeah solid is in front of raw rust again Yeah, sorry, I I had to zoom in zoom
[03:58:26]  out because I couldn't I couldn't I couldn't actually see the table and in in full perspective here, but But what i'm getting at is that It's been a
[03:58:37]  while since we've been like Second or like basically I mean million technically has this mark, but I don't care too much about it, but like it's been a while
[03:58:50]  since like Like stuff like rust um Have been slower than Than the javascript frameworks. This is very interesting Huh, yeah, I don't know something is blazer
[03:59:08]  still at the very end Yes Blazer still holding champion Yeah, I mean we didn't expect anything different did we These are mostly things that are considered kind of like Che
[03:59:32] ats or like like this directly manipulates the dom so like Obviously vanilla.js has to do it so it gets you know 772 but it means that like you can't
[03:59:42]  really like when you can sit there and just go Like i'm going to add stuff to the dom element directly and not use the declarative syntax. It's sort of like
[03:59:48]  sidestepping it So that's what 772 is 11 30 nut Is Runtime code generation I don't know if that's a problem, right? It isn
[03:59:59] 't it's just somebody had an issue with it for some weird reason Because they were worried about like eval statements. This isn't a benchmark thing like some people just wanted
[04:00:08]  to know like wasm has it too It's like It doesn't infect performance. It's just like a security concern 1261 is manual caching of vdon nodes
[04:00:18]  Oh, yeah, yeah, yeah, so this is this is this is like a little bit cheating, right? like It's okay if you write something that automatically caches
[04:00:28]  vdon nodes But if you expect the developer to sit there and like cache the vdon nodes for you like It's not it's not really Like the dx is not
[04:00:37]  very good, right? Like can you picture running something and you're like creating some gsx and then you're like, okay I'm gonna hold on to those for
[04:00:43]  a minute so that I can like not render them next time um 801 is Manual event delegation this one out of the notes doesn't bug me very much. It's just
[04:00:55]  saying that like Instead of like the framework doing the event delegation you you basically it on the click event, it'll there's code that's like find me the element and
[04:01:06]  Get the data from it essentially so it's like It is a little bit dom because you have to like walk through the tree to find the element that you with the event and
[04:01:18]  the row Like basically you get the clicked element then you walk up to the parent and get the row data off it and then use that id to update the data um And
[04:01:28]  then yeah, I I think you get the idea of this stuff. What about evie? Evie Is by boris called we talked about him a bunch during the infer
[04:01:37] no stream He has he I I said dominic You know, we've written the fastest vdom library. It's the inferno here. I would I meant popular v
[04:01:46] dom library Evie has been probably the fastest virtual dom library forever um He now uses block dom type approaches But like what you notice he has none of the warnings on his
[04:01:59]  stuff He's Legitimately you write code I said I'd actually don't really understand evie syntax sometimes gets me, but it's also Like he doesn't like
[04:02:09]  he doesn't put hacks in his stuff It's probably he's he's written probably the most optimal vdom implementations for like the last like 10 years At different times ev
[04:02:19] 2 was slower than solid. This is this was my target for the longest time I was always trying to keep up with evie like and over time we've like gone
[04:02:28]  back and forth um But yeah, this is the fastest virtual dom library Hyper script well depends what this is a client rendering up to things if you mean hyper script is in
[04:02:47]  what we Classically called hyper script was it which was actually jsx Then yes, um some of these libraries use that hyper script but Hyper script is getting a term now because
[04:02:58]  of htmx which is a different term for hyper script like if you classically went here And went like oh hyper script and looked it up you'd get an
[04:03:05]  old um Yeah, where is it hyper hype hyperscript? Is this the one i'm looking for? Yeah, this is hyper script this is like 11 years ago okay
[04:03:24]  recently it's come up again because someone else has tried to hijack that term um But to be fair they probably had some older school Thing here like this hyper script there
[04:03:36] 's none of these ones because it's completely client rendering test Side note fabio just for your knowledge Boris was the one who originally pointed out the cost of having too many Of
[04:03:52]  not grouping effects he basically said that these approaches would never scale Because of the overhead of creating too many uh like Different things and he basically created a whole benchmark showing how reactive
[04:04:05]  libraries weren't as fast as vdom And then I shot back when I wrote the uh fastest Way to render render the the dom this article Which I can put here Was
[04:04:27]  basically taking his test and seeing if I could Oh, no, it's not this one. Sorry not the fastest way they're in the dom. Sorry, uh Real cost
[04:04:37]  of uicomponents. I took his test and tried to yeah, sorry my bad Wrong one this one um And tried to show the like how performance scaled By you
[04:04:54]  know breaking stuff apart to be fair This doesn't add that many more bindings But it's it was basically I took his original benchmark when I did this one Okay Anyways
[04:05:12]  enough fun with benchmarks for now. It's just cool to see Something's going on with the performance in in chrome clearly and also something good's going on with the performance in
[04:05:22]  angular When we can see here's lit 3 Yeah, this is interesting. Yeah, I I think a lot of the browsers seem to be or at least chrome seems to
[04:05:36]  be optimizing for this stuff more um It's been a very long time since react has been like in the 1.4 range It's very interesting But it actually makes sense
[04:05:52]  what's can you guess what the fastest react framework is in the benchmark Like version there's react with There's react with hooks. There's react with recoil with joetive
[04:06:08]  with Legend state probably Can you can you can you can you guess what the fastest react implementation is? No one want to guess? No million doesn't react They compile to
[04:06:32]  something different and then like run it in a pseudo like thing Yeah, no, I No, not with signals signals would make Where's react with signals? Somebody made that here
[04:06:48] . Where is that? There's literally something called react signal signal signalis The fastest version of react Is Where is it? React 18 plain with nothing Because when you add any
[04:07:10]  state library to a framework you make it slower All right I mean that's how it should be right like that it makes sense when you add Yeah, there's pre yeah
[04:07:35] , there's pre-act signals pre-act signals is right here 143. Do you know what's faster than pre-act signals? Pre-act with classes
[04:07:46]  Yeah React with classes. Yeah, they did some kind of optimization because react with hooks was faster than react with classes for a while So I think I think there's some they
[04:07:58] 've been doing some thing but my my point is There's a difference between state management for an existing system and building a system from the ground up on the state solution anyways
[04:08:19]  million is an interesting one as I said some people are asking if it's react well, it's not it's not actually React it's like all the they basically shortcut
[04:08:28]  it It's like it's cut the technique that that aiden uses for putting million in our Inside react is almost identical to that demo. He said he was influenced by it
[04:08:39]  If you watch the stream by that demo where I put solid inside react Like it's basically just injecting another framework inside the framework Like your jsx is no longer react
[04:08:47]  jsx like it's just react treats it as like one Block or virtual dom node or whatever and million handles dipping that whole section Yeah, yeah, I mean preact
[04:09:06]  is actually one of the most sensitive to staying lean we've had a hard time Staying lean here. I think if I look at this one. Yeah, we we added
[04:09:12]  0.3 something solids 1.8 got to 150. We used to be 149.3. So we're almost Almost half a kilobyte Larger here,
[04:09:23]  which is actually a little bit disappointing Whereas if you find preact I think they're around 147 in this example Where is preact? Oh 154 interesting Oh,
[04:09:47]  right this this app must be small enough that we haven't hit or it's because the code is bigger when there's classes. What about preact hooks? 158 for
[04:09:56]  signals Yeah, well, uh, it's smaller But it's not small enough. Okay, never mind solid is small smaller than preact here Sorry when it on the
[04:10:07]  preact scales slightly better So it usually crosses solid but for an app like this which is like basically like one table. It's like a hello world I guess solid still like
[04:10:16]  tiny bit smaller than preact Yeah, generally speaking. Yeah Yeah, generally speaking but and in a small demo like this adding the extra hooks It still is showing up.
[04:10:30]  It's funny. It's because writing class components is actually um, um, um, larger than just like writing hooks compared to the hook simplification Yeah, yeah lean
[04:10:43]  and performing. Yeah, like another one is a inferno is inferno is Inferno is Millions pretty small in this demo 147.7 Verno is
[04:10:54]  165 so it's like it's slightly believe it bigger Anyway enough benchmarks just cool to see obviously um Yeah, I did the filters for you lazy people Thank you But
[04:11:13]  yeah, no very cool to see angular Um Kind of go ahead. What else I got here. Um Every week, I don't know if you've been paying attention.
[04:11:26]  I know I work in Netlify so people are like Here's Ryan's Netlify segment. I never did this historically. It's just that it feels like every
[04:11:35]  week Matt Billman just like sneaks out this blog post and like a few people notice But like you're just like why doesn't everyone have this? Why can't
[04:11:42]  you like Want your cache key to understand a cookie value? Want your cache key to respect pagination like We're Netlify it's been going crazy, not crazy,
[04:11:57]  but going really strong with these using the the headers approach recently Into this kind of primitives thing and it's turning into quite a powerful solution. I I said, you know
[04:12:08]  You know when I quoted them like, you know, small but valuable improvements But like they're like they're starting to add up like when you think about this and I
[04:12:17]  love this because again I don't have to worry about this now that much on a framework level, right? I mean i'm obviously in talks with people Netlify about
[04:12:25]  how to automate some of this stuff And set up good patterns, but like generally speaking It's not like okay now I have to worry about ssg or whatever It
[04:12:35] 's like we're talking about just a you know a bit of header manipulation to kind of get the results you want I this stuff is very cool If Jared efficient bun and
[04:12:48]  be working some bun framework, you'd all be down the benchmarks Yeah, I I never I never never want to bet against Jared on on that kind of performance level I
[04:13:05]  the tricky part is like the js framework benchmark There's there's like basically almost nowhere to move um We're we're we're we're sitting at a like a few points
[04:13:15]  from vanilla at this point that I don't I wouldn't expect If if Jared even came in for there to be much of a much of movement, but yeah, I never
[04:13:24]  bet against that guy that guy's insane Yeah, yeah, it's one of those things where when you solve it at the right layer the problem is It's just not a
[04:13:37]  problem. I like thinking too much about because I like There's always a cases where caching isn't involved and yeah, so I solve for the core mechanisms But to know
[04:13:48]  that this is available to me is huge and like as I said Like you just you just have to go to mad and obviously he's the ceo or whatever He's crimin
[04:13:50] ally under followed because he's kind of a quiet guy, but like He it feels like every one of these every Friend and cloud targeted cash control instant global cash purchase still
[04:14:12]  in valid support to cash tag the dementia He's been like they've been like leaking these out once a week like it feels like for like the last six weeks and It's
[04:14:23]  it's just It's it's it's it's just pretty cool to see like this is the future of the web that I want to see Um Is this my spicy
[04:14:38]  tweet of the week? I know rob we've been working on standard stuff. I'm just I'm just I'm just I'm just being a little bit It occurred to
[04:14:48]  me at some point when people when when when I was reading this post about web components And everyone knows I'm not the biggest web component fan necessarily I actually use web components in
[04:14:59]  production on a website for seven years Um, I went through all the pain that was there and it's fine every every system has its you know ups and downs But he was
[04:14:48]  talking about all the people who use web components and how they use it and why like why they use web components? And this is definitely true Um, so it's not
[04:15:19]  about using them some of the like I think was it reddit redid their stuff with web components and github And like there's so many people using them But then
[04:15:26]  I was like I was like I was like I was trying to think of how to frame it and I'm like I'll ask people in chat Do you guys like when you
[04:15:34]  go to start a new project? Because the first thing you remind me like I want micro frontends Right like there was a while where everyone's like, okay, I
[04:15:44] 'm going to set up the ideal project I'll have micro frontends and blah blah blah and it'll be like this most advanced architecture and it's like I guess sometimes that
[04:15:53] 's a baseline need you have because you're distributed teams, but like It's never the best solution for like the final ux you you just need it because you like it
[04:16:04]  solves a practical problem You have on the people side Only if you're quick Well, you you the reason quick wants to solve this is because They know that it's a
[04:16:17]  real need eventually and they know that the way to actually solve it out there most solutions suck Like i'm sorry. No offense to module federation or whatever, but like Stuff
[04:16:26]  like there are ways to do module federation properly and the people you're on server But you the the people behind it have like paid services like if you actually want to do
[04:16:34]  micro finance properly With this stuff they make you go buy their things if you just go oh, I have a web pack and module federation You get like the worst crap
[04:16:42]  you've ever seen like it's just terrible like You're like stitching the stuff on this client and you're loading all these different versions of stuff and it's like It's
[04:16:50]  it's like I can't picture a way to just be like, okay, let's try and kill our app So like quick knows this and they're like Okay, guys
[04:16:59]  This is how you should do micro frontends like don't worry about that stuff. That stuff is garbage like Ask miss go about his experience with micro frontends at google
[04:17:08]  or whatever anyone who's worked at these like large companies they're like Yeah, yeah, I know micro frontends like such the people on the platform teams like people building the
[04:17:17]  frameworks or the tooling like They work so hard to try and get these optimizations and then like the product teams like Micro frontends and you're just like my life um
[04:17:27]  I think web components are a bit like that Like it's kind of like you could be doing all this component stuff and you can be designing all this stuff And then it's
[04:17:34]  like no, let's make them all dom elements for no apparent reason and like slow the whole thing down like It's it's good because it's a it's a fixed
[04:17:43]  interface kind of like micro frontends Where you know what you're gonna get and different teams can interact with each other and there could be a need for it But like it
[04:17:49] 's like it's never the ideal way to to make the solution, you know, so I don't know It's it's it's it's it's kind of interesting
[04:17:56]  Like there's uses as a like at the framework of the uses Astro use customers for the astro it's not as the same as web components. Yes. Yes,
[04:18:06]  there's uses and for For them and like I can see stuff, but you can't pick them up and go like, okay I'm gonna use react or I'm gonna
[04:18:14]  use web components And every place I'd put a react and when I put a weapon one. No, that's terrible Actually, I did this for a bit when I
[04:18:20]  was in that app for production We had a like a news feed Right and we built it using web components as our components so like Cards and then you know Image layout components
[04:18:32]  and then like the actual like grid itself, which was a Uh, it wasn't was it justified. It was one of those ones where um No, it wasn't justified
[04:18:43] . It was the other one. It was masonry style, but it was we didn't want it to scroll down This way we wanted it to still go across
[04:18:50]  so the height calculations are fine Anyways, we had all these components that are all weapon set and it's just like the amount of overhead on the web component wrappers was Sign
[04:19:00] ificant over time like it wasn't it was fine at first, but like We had so many extra dom elements in the dom that we were manipulating and you had drag and drop
[04:19:09]  and like Yeah Yeah, I I think there's probably places you need that like when I was right about leaving ebay They were looking at micro front ends um And because
[04:19:29]  teams were basically inventing their own solutions anyways, so they wanted to consolidate and I can get behind that eba was able to avoid micro front ends for almost three decades um
[04:19:40]  Because they were an MPA framework they already had isolations isn't that crazy people expect something ebay to have micro friend ends ebay barely doesn't really have micro
[04:19:48]  front ends in a standard way and they've been running that way for like 25 years or whatever, you know So So Yeah, I don't know about quick specific micro
[04:20:07]  front end solution. I'm just saying I I I sus I know why they care about it Yeah Yeah, it's one of those interesting things like don't get me
[04:20:27]  wrong. It was just it was interesting because I have people like pointing at my negativity towards web components Like I I made a joke about like will this be the year of
[04:20:34]  web components, you know, it's like this the year of linux desktop and then literally like I swear People were praising that this was the year of linux desktop um
[04:20:43]  I think they just have this place in the universe and I I I I think micro front ends and web components are the right So mental association to make more and more I think
[04:20:56]  about it Um Because web components are also very popular with the no build crowd And the like rails back-end types So like I I see this aligning of stuff but
[04:21:09]  like Yeah Yeah, I actually I actually wrote a whole article about this I I I showed it earlier about how I wrote the real cost of components and I made a comment
[04:21:26]  It was in that article. So I built solid for web components. It was in that article originally that that I linked earlier where I was like Wait, why do I need
[04:21:36]  web components when like stuff got faster? You know like without when I removed them and that's when solid really took off when I realized I didn't need web components for it
[04:21:44]  anymore But something was funny was real No, no remove Real okay. It was on the other page Real cost of components revisited this this is I delayed putting this one
[04:21:57]  out because I didn't want to Rob it too hard against lit But the point of this in this article I've used the js framework benchmark to benchmark web components versus um As
[04:22:09]  they scaled as more components and I kept lit in here, but what I did was I made the vanilla implementation Just use plain javascript and plain web components like written
[04:22:18]  by hand And the the end result was that by the time I got to the most excruciating You know level of components Like if I'd used evie instead of
[04:22:29]  inferno, it probably would have been even more impressive But when I got to the point where I was making every table cell a component Solid was actually Faster Than vanilla js
[04:22:42]  like that most handwritten web components which shouldn't surprise anyone And this isn't just like the whole table This is me making like separate components for each, you know thing and
[04:22:51]  inferno was as fast as the web components It was just like when I put the whole table together at the end. It looked like okay whole app in one web component
[04:23:02]  All hand optimized vanilla was the fastest then solid All you know in one component then solid in the component per row and then Web components With a component for row Then solid Yeah,
[04:23:21]  like basically I mean, it's web components are bad, but lit was and lit was like way out here. Anyways, it's My my point is like it was
[04:23:32]  just a pure cost overhead for for what Anyway, um, what do I want to say here? Yeah, lit html will be faster Yeah, and web components
[04:24:04]  are a good migration tech as well, so and sometimes web component solutions use Uh, or sort of micro front-end solutions using web components. I didn't mean to Go
[04:24:12]  this hard on this Yeah, astro is a decent use case for them We use them for our micro front-end solution for ebay Where we use them kind of
[04:24:22]  like an iframe mechanism the problem we hit was a declarative shadow dom Or at the time didn't Work with streaming so we couldn't use it for style isolation which
[04:24:32]  would have been like really sweet um Anyway You could see how they're kind of in the same category I think this is the biggest problem with this conversation. It's not about
[04:24:45]  Comparing you web components of the framework. You should think about them as Like a interface And when you need the interface you need it. Do you know my favorite use
[04:24:55]  of web components? Uh sdks um That work on low javascript environment type stuff like your marketing site like I think web components are the perfect fit for shipping
[04:25:07]  something Maybe they work on wordpress or something that would like um Like a widget like zendesk help widget You know if you want to put that on like a wordpress
[04:25:19]  site or something or like a Market site or whatever little bot thing and you just put a web component I think I think that's wonderful use of web components. Um I think
[04:25:28]  you could use it as a design system if it was very low level It is hard when you start getting into the details like controlled uncontrolled and stuff like But you know
[04:25:36] , it's it it seems like it could be um Uh a thing Yeah, i'm gonna be in the angular documentary Anyway, let's get over to the the the releases
[04:25:51]  now that i've taken enough time with this stuff Yeah, they they don't um, but we needed like obviously iframes have other downsides For for cases for
[04:26:09]  stitching. Um anyway So Okay, what let's talk releases here astro 3.4 is out now and partial this release which makes it easier to use hypermedia libraries
[04:26:22]  like htmx Okay, it's so funny. I went to the astro guys, maybe not matt phillips So I went to fred and i
[04:26:30] 'm like and I was like in a private chat with him and a few guys and i'm like I want to see astro with htmx examples. I'm
[04:26:36]  like if i'm using js um Backend and I want to use htmx astro is a logical choice I think jlarky is going to be the
[04:26:45]  first person to agree with me on that um Like I said that to them like a month ago right or longer now like right around the like the beginning of september around the
[04:26:55]  The 3.0 release and the and and fred was like, I don't know I think people who use Astro on one side and people who use ht
[04:27:02] mx are going to more likely, you know Use a non-js backend and yeah, but i'm like if they do use js backend astro is what they're
[04:27:09]  going to want to use um So, yeah, a little bit of disbelief there, but i'm glad to see this thing. Okay Oh, okay, so literally
[04:27:20]  oh, so astro it's oh, okay It's funny it's the stimulus do this partial swapping. I think I thought stimulus was just yeah, it probably does
[04:27:33]  actually but with a javascript interface It's funny. I tried to put stimulus in the js framework benchmark I thought it would be fun because I I know it will be
[04:27:42]  terrible like absolutely terrible It will be back with blazer probably but I mean i'm not a hundred percent sure but like alpine was but um They didn't have enough
[04:27:58]  apis for me to do it without basically just using vanilla js So it didn't work. But if I understand this feature They're just like like you put this keyword here
[04:28:07]  and it turns this into an htm an api route essentially So instead of like trying to render a whole page it will just send back this html So
[04:28:17]  this is just like don't treat me as a page treat me as an api route Okay Love it honestly, this seems like such a small easy thing to implement and then
[04:28:35]  you now people will know that this is the home of Htmx and js It's just funny. There's a there. I I get the conflict because a
[04:28:43]  lot of people say they use htmx because they don't like using javascript But you know, that's funny Yeah, yeah, but did do that
[04:29:14] . Oh, yeah, like essentially they're just saying like Like the funny thing is if you send back some partial html When you render page like if you just
[04:29:24]  if you just sent this back And the on a full page reload The browser is going to wrap this in like a head and body tag and everything And then you'll have like
[04:29:35]  this list item in the middle of Some body tag. So like I'm gathering this is just to escape Out of like their rendering pipeline like this is just like don't
[04:29:49]  put all the stuff that we usually tag on there in astro Just treat this like it's a Almost like it's a json request Because they don't have that
[04:30:00]  stuff. I imagine when you're when you just return json Yeah So yeah, this this is good and it aligns see because the same people excited about astro are
[04:30:14]  the same people There's a group of people that overlap at least for the htmx people. Most htmx people are you're right. They're using
[04:30:20]  rust and go And there's a bunch of them who are like oh, yeah, I don't like javascript or whatever and that's fine. They're wrong
[04:30:27] , but that's fine But But like this is the in the javascript ecosystem. This is the right overlap. So I think this is a smart move Was there
[04:30:43]  another any other features in this release? Sorry dev overlay ooh I like it so you can see where the client components are Okay I think I saw something like this in quick.
[04:31:04]  This is this is cool. I think I think people are gonna like that Okay, nice So So previous to use you need a pair of their turnations are exactly yeah
[04:31:24]  If you just like use some like tight temple literal and like return to string I think I think that's essentially what the difference is Yeah Okay, next 14 Nice faster performance
[04:31:50]  for development not probably Server action stable partial pre-rendering preview. I'm interested in this feature next js course learn okay, so nothing too exciting for next 14 here
[04:32:08]  Other than I guess stable server actions, but we've been looking at them for a while And the partial pre-rendering preview is probably the cool thing. I know people
[04:32:17]  are excited about how fast the dx is But I always assume that these guys would make things faster I know this was actually a big deal for people trying to use RSC
[04:32:27] s early days, so maybe maybe this is you know Yeah, so integrated with caching and revalidation. That's good Is there anything interesting here? Let
[04:32:43] 's take a look at this async function on submit form data Fetch okay, so this is a typical client-side submission You've given it an on submit yay
[04:32:56]  server action stable Okay, that's fine, which would probably trigger so What's about caching and redirect? Tag Redirect to a different route to redirect tag Use optimistic
[04:33:17]  Use optimistic Use form state okay I gotta see this this is confusing to me You're telling me the difference between state and status is whether i'm on the client or the server
[04:33:39]  Oh, this is loading states I see so this is like the is pending And then this is like the Oh, this is the optimistic updates. This is like The error
[04:33:56]  handling on the server. It's just the use is interesting. Does this Does this work on a server component even though it has a use prefix? Coming up with the conventions
[04:34:06]  around like what hooks can go on the server in RSCs are not as confusing as hell You know, you know, if you're going to have to have a
[04:34:18]  path and a tag-based revalidation That makes sense to me And it's just functions you call from within your response of your use server That that that makes a
[04:34:27]  lot of sense Um Yeah, that makes a lot of sense Trying to think what's the benefit of Yeah, that's an interesting one, isn't it I need
[04:34:55]  to see their data fetching cache api's they must persist more than the request otherwise revalidate tags stuff doesn't work Security model is this the security Yeah
[04:35:22] , so they're suggesting this yeah Okay Yes This is interesting not to teach this React taint api. Okay, this all makes sense Yeah, sorry, I
[04:36:29] 'm just kind of Here we are Here we are. Yeah, this is about the post request thing Hmm. Hmm. Hmm. Hmm. Okay, okay,
[04:37:35]  okay, okay, okay, okay, okay, okay I'm I'm what I'm The cache is is the cache It's because it's because the mutations cause a
[04:37:56]  page to get re-rendered right essentially like most time you do that and then you say refresh the page So i'm like is the the cache data that you're invalid
[04:38:04] ating or key that you're invalidating It isn't cached in the client. It's cached on the server, which means it's not the It's not it
[04:38:13] 's not I this isn't a headers mechanism. I don't think this this has to be like because if it's just headers then like Hmm that's interesting because like
[04:38:28]  if you're You were doing an actual redirect and then you can Tell to return the cache response. I don't know. I need to look at this So you can
[04:38:49]  do action that doesn't cause re-render Okay, so the specific is it wasn't in here, but it's like the specific Are all invalidations explicit then because
[04:39:16]  like i'm thinking the remix pattern generally speaking you do any mutation on a page Like it's gonna be like the current page needs to be re-rendered again Like like
[04:39:29]  cuz I think I just need to actually see an example of an action that does invalidation. It's so funny that the examples don't actually show Okay, here it
[04:39:46]  is. Okay This is what I need to see Okay, love it. Okay, this is the problem. I was having because our actions aren't tied to url
[04:40:06] . So you actually if you need the re so we were redirecting back to the current page we're on Okay Right Perfect I got it. Okay See I was I
[04:40:29]  was thinking about writing a lot of these rules into The The action handlers options, but what they're doing is that they're doing it as In the function itself.
[04:40:43]  I got to think about that. That's cool Okay, that's fine. That's fine. Okay. Yeah, this is what I was missing. I get it I
[04:40:54]  I part of part of me was wondering like it's revalidate path Similar to redirect, but I guess if you needed to You would re you could reval
[04:41:04] idate the path you're about to redirect to Oh we interesting it doesn't return the redirect Hmm It's catching up here with chat Yeah, see I was I was
[04:41:49]  following remixes convention of of them of basically doing opt opt-out But opt-in makes a lot of sense when you detach the actions from the Yeah, exactly.
[04:42:11]  It's because yeah, exactly So we were writing a lot of redirect to ourselves code when we're doing solid start stuff. Okay, this is this is this is good
[04:42:22]  I can get behind that. Yeah This is actually perfect time for me to be looking at this Because I'm just finalizing a lot of these apis for the generic version
[04:42:32]  that I bring back into the router You can see what i'm kind of doing right i'm like taking like next is much closer to where I was thinking things were in terms
[04:42:41]  of like having actions separate from the URLs um, but i'm also doing what remixes did of moving them back into the router and away from the meta framework So,
[04:42:53]  um I I should get a little bit more influence from here. I'm gonna i'm gonna read this up more later. I think it's pretty cool All right, good
[04:43:01]  good stuff um It does I think people will be excited about this being like more stable um, actually, you know what I want to read about partial pre-rendering Let
[04:43:12] 's see what this is optimized motivation No, no new apis Parts pre-rendering is defined by your suspense boundaries. Oh, okay Sure Okay, let
[04:43:36] 's suspense fallback Oh Oh, oh interesting Yeah, I mean this is helpful because these suspense boundaries aren't nested But basically when it gets to the first suspense boundary
[04:44:03]  it stops Like I don't mean first thing but like it doesn't go deeper And it shows cart skeleton So this is just the synchronous version Huh This is so ironic
[04:44:26]  The reason I'm laughing about this right now is When I first created solid SSR solution I built rendered string Which is dirt simple synchronously generate the string But then I
[04:44:40]  was like, okay, how do you do data fetching? And like, you know in react libraries? They had all these crazy things where you can fetch a header do
[04:44:46]  this And I was like, no, no I got suspense And so we can So like keep in mind this is like four years ago So like My understanding of where stuff
[04:44:54]  is today was not quite there But I was like, okay How do I make this update? And I got to this really tricky place where I I was benchmarking reactivity
[04:45:06]  on the server And it was freaking slow And I was using real Like trying to use like JS DOM And it was It was I think I actually wrote an article about my My
[04:45:17]  The struggle What was it? How we wrote the fastest Again What was it? How we wrote the fastest javascript ui framework again Yes Here we go This this
[04:45:29]  this article is all about my struggle here Anyway I eventually Realized That Streaming And Synchronous We're actually almost identical Because I hadn't got streaming html
[04:45:53]  working yet But I realized that I could Synchronously render the html like this And then Have the client render the holes By just feeding it By serializing the promises
[04:46:03]  and feeding it And this was solid streaming rendering pre 1.0 And then But we People want to do static rendering And because of static rendering Only reason I added render as
[04:46:18] ync So that people It would wait And then it would like Fill in all the holes And you get the final html But I had to use a completely different method That
[04:46:27]  used to keep the reactivity and stuff Like it was It basically Was a mess I eventually managed to merge streaming and async And like come up with this whole system But
[04:46:38]  this If you go on solid today And write in the suspense app And then go render to string This is what you get So ironically I actually think Building this feature Like we actually
[04:46:55]  already have this Ironically It's just a matter of If you could Tell the application To Yeah The interesting part is how to Like getting it to the end of the shell
[04:47:15]  Is dirt simple How to get it to Is this Is this I wonder if they do this smart Or they do this dumb Oh man I'm gonna have to look at this
[04:47:28]  Do you understand? Because like The dumb way to do this Which I love Just picture that You cache this response Which is the synchronous response Which is super easy to cache You just
[04:47:43]  like Run the SSR Render a string on it And you leave You render the fallbacks And you have the holes And everything And then When the request comes in You
[04:47:53]  just Send that back Immediately And then you render The whole thing again Even the parts that are static And then get Because starting from these holes Is actually kind of Tricky You don
[04:48:06] 't Like How do you know Where the suspense boundaries are To do But what you could do Is Render the page as normal And then But as long as you send This
[04:48:16]  cache stuff back Like Instantly Stick it on the CDN Whatever This will work Right Like Like But like I can't figure out How to not render this again On the next
[04:48:34]  upcoming request But it's But if you render it again It's actually fairly simple It's just a matter of throwing away the synchronous renderer It's just a matter
[04:48:49]  of throwing away the synchronous renderer It's just a matter of throwing away the synchronous renderer Yeah, it's just interesting to me Now that I know what this
[04:49:06]  solution is I I think it's just a matter of throwing away the synchronous renderer So basically Like Send the response Right away And throw away the synchronous renderer Which is
[04:49:24]  fine We're just generating a string And then Continuing from there Like this is literally a single toggle in the render The render to stream method Huh I thought this caching thing
[04:49:37]  was going to be complicated It's probably complicated to make it more performant But Again I don't know if it matters Right Because What's the cost Like as long as you
[04:49:50]  respond fast The cost of rendering it once again Like if you can render 10 times faster than React anyways At what point does the Tipping point hit Oh, that's cool Okay
[04:50:06]  Maybe Maybe I will get to use those new Netlify cache headers after all Interesting They might have a more advanced version of this But like The simple solution Actually would get
[04:50:22]  most of the benefits So I think that's actually kind of cool Wait till we finish learning next 13 Is that the most popular response? Oh man To be fair This doesn't
[04:50:34]  sound like next 14 It's just an incremental thing It's not Not You know A big change Okay Let's look at Let's finish up here with Kent C. Dod
[04:50:43] d's article All right Now I haven't read this either But my take here just at a glance Is you're like okay Kent is a great guy He's energetic I
[04:51:01]  talked to him He was so excited when I gave that solid talk In November at the conference that Sean Loppy named He saw the JSX explanation He saw the JS
[04:51:09] X explanation and just clicked for him And he's like I get it now He's got great energy We talked a lot about remix And he loves remixing on the team But
[04:51:16]  he is a big remix guy So him saying why he won't use next.js is not So surprising So I wonder if there's more to this Leave responded Okay
[04:51:45]  That's interesting Okay Blah blah blah Modern approach Disfatisfied current frameworks Second guessing yourself Alternatives In any case you've got decisions to make There's a lot of modern
[04:51:57]  frameworks to choose from I'm using remix Of course you have been As next is a very popular alternative I chose remix instead of next Okay That's fine Shouldn't the positive
[04:52:09]  side of software development I'm much rather Yeah So this is all like Why I use remix and not bashing next Okay Yeah Of course This website was actually built with next
[04:52:33]  Whatever you use is probably fine Okay Okay Preamble done I've been blowing something for nearly a decade Blah blah blah Build testing library Yes Enzyme Wrapper
[04:52:44]  Bunch of stuff Sorry I'm just skimming it Next is an enzyme Where next is you use To allow you to interact with the request I suppose those APIs directly Yeah Yeah
[04:53:01]  I like this We took this from Remix and SvelteKit Okay He's He did it Sorry When every time someone brings up angular Yeah I think he's just
[04:53:27]  telling me he's a closet Solid Convert and he just doesn't even realize it yet Because Because We can We can We can Make that same argument against Angular against react
[04:53:38]  these days I think Let's keep on going Open next Haha Oh man Open next is such The perfect name for that project Is it still out here? Yeah It's the AWS
[04:53:54]  guys Because yes Because yes You can deploy next in a docker file But if anyone who's actually trying to make next like Vercel Like there's only a couple
[04:54:02]  of places where you can get the full next experience And almost none of them immediately And almost none of them immediately Basically Either you deploy next to Vercel And you get
[04:54:10]  the full experience day one You know Otherwise You deploy to Netlify Which where you get the full experience about a month later Or you know You know What open next was
[04:54:23]  trying to do is bring that full experience to AWS kind of platforms Because just putting next in a docker is not full next Open next takes the next.js build output
[04:54:33]  and converts into a package that can be deployed on any function in the service platform And it's now only AWS is supported For those great It's not a good option to have
[04:54:39]  a structure as AWS, hosting, blah, blah, blah Next.js unlike Microsoft Azure doesn't have a way of self-hosting using serverless You run it as
[04:54:45]  a node application This server doesn't work in the same way as it does on Vercel Exactly Yeah Yep Seriously We have ninjas at Netlify to make next
[04:54:57]  work as well on Netlify as Vercel It is not like Yeah Deprioritized Yeah Yeah, yeah, yeah, yeah Yeah, yeah, yeah, okay
[04:55:12]  Man, I'm liking this already Okay, so this article is very predictable. Sorry. I'm like, I'm Yeah, okay To be fair He is playing
[04:55:44]  into this whole thing My understanding of the situation Is React team wants to be able to work on features They have to get buy-in for a product team Server components this whole
[04:56:02]  direction They got minimal buy-in for it They got that buy-in from like, you know, I think workplace or one of those, you know, Dominic was
[04:56:10]  talking about this last stream about like You know, was that do workplace his and theirs was ads in any case They got a bit of buy-in for cells letting them
[04:56:19]  actually build it full out So it's very attractive to like the more known people Um on the record team But the truth of the matter is there are so many other people who
[04:56:27]  work on react full-time at meta People working on forget people working on native and when the you know notable core team people moved on to Vercel like, you know
[04:56:36]  A lot of the they just moved some people over from native onto web and like essentially There is a giant react team We're working at Meta on react that are they
[04:56:48] 're not like the all the people, you know, but they're new names You're beginning to know people like josevana and and ellie white, you know,
[04:56:57]  so like um Like There's just a shift going on there. So it's not like next owns react, but they do own Like i'd say some of the key
[04:57:10]  mind share so I I I get I get the argument here That's why like people like matt carroll are reaching out because like Meta has a different react team I think
[04:57:21]  what's interesting about this is and then both teams get along, you know, well, so it's fine But like there there it would be interesting to know who really
[04:57:29]  actually holds the the reins, so to speak My guess is that it's actually the Vercel side a little bit in terms of like ultimate vision, but There's only
[04:57:41]  Vercel The resources are actually a lot less than metas working on react so Like I think there's I wonder if this will ever actually come to an interesting place
[04:57:51] , but like subset Vercel which is you know interesting I I think there's a few pieces at play at least but it's so it's not just next eating react
[04:58:04]  I think it's a little bit more complicated than that I think simple because we're next team for marketing experiment features a stable blah blah blah sure Too much magic Overr
[04:58:15] iding global fetch okay, so he's just Detained api Okay So they move slower you also a smaller team. I know that's not what he's saying,
[04:58:51]  but keep on going. Yeah, yeah, yeah server component capability Yeah, blah blah blah Okay, so he's just saying next isn't stable Yeah Yeah, so making
[04:59:26]  sure him web platform Mm-hmm Mm-hmm App router Yeah, he's pointing out that get server side props was basically the same as remix loaders. Yep
[05:00:00]  Yep, yep, yep Yeah, see he says how to deploy to dock Uh the the i'm sorry lee you're not you're not this is this is that I
[05:00:27]  i'm gonna move on I agree with everything so far here on the technical side about the web platform thing being overplayed, but This is not sufficient to like this it
[05:00:40] 's fine open next exists for a reason First of all, it's pricing, I don't really care, they should put me in, betting on the future react,
[05:01:09]  I agree, yeah, yeah, I mean, this is an interesting transition side, I'm thinking, this is, it's very clear from the, like, the
[05:01:22]  back and forth here, that this is, there's a lot of very complicated interactions here that we have to, like, understand to understand how these things work, which might
[05:01:35]  be an argument on Kent's favor in terms of just, like, the less things, the better. I think there's some friction between remix and server components, but
[05:01:54]  I guess we're going to see how this plays out. Why I'm using Next. Why I won't use React. That's what I need to write,
[05:02:15]  right? Yeah, these people have been, yeah, working on React in different forms for ages. I was just saying, like, the public hasn't been as aware of
[05:02:32]  this stuff until more recently. who should we blame? The only reason I would be tempted to write that article is just because of how funny this back and forth is.
[05:02:47]  Because, like, I actually think that is almost more impactful than the difference between Next and Remix. It's like, these guys are already assuming that you're using
[05:02:56]  React, and that's probably the much worse assumption to make in the first place. Yeah, and the sub gets to write why I use React, yeah. You know,
[05:03:11]  anyway. Well, well, it was another interesting week. What can I say? Yeah, and we're not talking about Twitter. The more I look at the details
[05:03:32]  of these problems, especially around the actions, the least happy I am in terms of how clear-cut this stuff can be. I generally default on the side of web standards
[05:03:48] . So do most of us. But that might actually be the harder path in the long run. But I'll look into it. I mean, maybe. There
[05:04:06] 's something I was talking to someone about a while ago with Misko, because he was talking about people were getting on his case for being too critical on Twitter of React or
[05:04:16]  whatever. And people were like, you know, calm down Misko, you're attacking everyone and trying to force them to use quick. And he's like, what
[05:04:24]  am I supposed to do? And so a bunch of people were like, be more like a Ryan. And I'm like, and he's like, what do you mean
[05:04:28] ? And I was talking to him a bit and I was thinking about Ryan Florence, too. He was actually talking. They were talking about me, Ryan Carnietto
[05:04:35] , not Ryan Florence. But I was talking about Ryan Florence. The truth of the matter is the trick to the social media, I think, is to find the balance
[05:04:46]  of how much spiciness or how much you want to tailor your responses. The thing is, if you aren't controversial, it's way easier to get attention when you
[05:04:57] 're controversial. But if you're controversial too much, it backfires. And honestly, you don't really want to deal with it. But Kent's known as a generally
[05:05:08]  very nice guy and not in people's faces. So if he does something even ultra controversial once a year, no one really cares. And I think, you know,
[05:05:20]  you know, there's a certain threshold, right? Ryan Florence was getting up to about once every three days. And that was, you know, kind of too much.
[05:05:28]  Misko was like in that range, too, for a while. So I think I think it's it's it's all about spacing. People have a short memory.
[05:05:37]  So you just have to like if this is your goal, be go on the attack or whatever, be controversial for a bit and then cool off for like three weeks to a
[05:05:47]  month, you know. Everyone will look forgotten and then you get to do it all over again. Anyway, that's my advice to would would be, you know,
[05:05:57]  unless you can be controversial all the time, you know, and put up with it. And then, you know, sometimes you can get you can rise to 100000 followers
[05:06:06]  in like a year or something. Yeah, I the new Ryan Florence's perspective, I'm digging, I I've been I've been like his tweets have been great
[05:06:24]  for the last like few months since he came back as since he came back. But also the last couple of months, I've been just following all of his stuff. It
[05:06:32] 's very informative. Yeah, we had we had an interesting conversation after the fallout and you could tell he was still upset about it. But like, I think
[05:06:54]  I think I think leaving Twitter and coming back was like really good for him. Of course, like people, people are maybe less entertained now than before, but it's not
[05:07:06]  it's not our position necessarily to play into that entertainment. Right. So, yeah, all good. Anyways, I think we're good. I think I have some
[05:07:20]  pizza to eat today, so I'm good. Yeah, yeah, I know. I know. I'm just I'm just I'm just I'm just I'm just
[05:07:31]  going. I mean, first, when you saw two, you know, order of things. As you know, solid start beta to, you know, getting those early
[05:07:43]  releases out, people can try in the next, hopefully, couple of weeks, like you can see the pieces coming together. It's not going to be perfect, but it
[05:07:50] 's going to be their biggest problem or challenge I'm facing with this is I have to because of the approach, I have to update the libraries. So those libraries have impact
[05:07:58]  on people currently using stuff like if I update the router, I have to deal with the router stuff before I get back to solid start. But ultimately, what this means
[05:08:06] , as you can all imagine, is in the future, as stuff changes, I'll be just updating the router and not updating solid start solid start. I'm really trying
[05:08:16]  to push the maintenance burden on everyone else. So I think we can succeed at this. Yeah, I don't know. I think the way that I get to be
[05:08:29]  spicy has always been when we accomplish something that people didn't think was possible, like to change the narrative on what's what we're capable of. And often it's related
[05:08:44]  to performance. Sometimes it's a it's disproving things that you can only do in React or a virtual dom or with a compiler. And I think that's
[05:08:53]  when we'll be spicy next. But first, we got to do the work. Right. I don't come to we don't come to the table unless we were already
[05:09:00]  holding. So yeah, anyways. I'm good. You guys have a great weekend. Next week should be doing native script. So until then.