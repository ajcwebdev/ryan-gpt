---
showLink: "https://www.youtube.com/watch?v=lrejTB07FOM"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "The Future of Routing w/ Tanner Linsley"
description: ""
publishDate: "2023-11-18"
coverImage: "https://i.ytimg.com/vi/lrejTB07FOM/maxresdefault.jpg"
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

[00:00:00]  Hello. Welcome to my stream today. Sorry I ran a minute late, but we got a couple of minutes here before everyone joins on anyway. I'm pretty excited to
[00:00:14]  have our guest on for today. We've both actually been very busy the last couple of months, so I haven't spent nearly as much time as I'd like to talking
[00:00:23]  to them. So today is an opportunity to do something about that. So we're gonna give it a few minutes here as people join on. We already got looks like
[00:00:35]  30 people come in so far. Let's keep on going. I'll advertise this on Twitter. Let's see how Twitch is doing. How you all doing? There was
[00:00:48]  no stream last week. And I don't think I'll probably have a stream next week with all the Thanksgiving stuff going on. But today we have a very special guest
[00:01:01] . Oh yeah. No one's on Twitch yet. Well, barely anyone. Yeah, I'm doing good. Hey, Greg. All right. All right. Hey
[00:01:23] , okay. I'm gonna make... I'll quickly... Let's quickly advertise this stream so people know that we're live here. make sure my screen share still works
[00:01:36] . All right, there we go. Yeah, seems like a lot of people were interested in the stream. I'm interested in the stream. As I said, I'm
[00:01:47]  not even 100% sure what's gonna happen. So we are, we're going to, we're gonna play this by ear. Quote. Um, we're
[00:01:59]  live. Uh, which TV slash Ryan solid. All right, cool. Let's get people past those preloads, unless they are among the fortunate who have already
[00:02:12]  subbed this channel and don't have to go through those preloads. Yeah. I just give it a second. I'm, I'm, I'm, I
[00:02:18]  like doing, you know, I like introducing my guests when people are here, then, you know, that just builds a better atmosphere. So we gotta, we gotta drum
[00:02:27]  up the drum up the people. We're only at about 60 people so far. We gotta keep on going. Just getting started. I need, as I say,
[00:02:34]  it's funny because I said a while ago that I need one of those cool startup songs and then someone actually made it one for me and then I never actually figured out how
[00:02:41]  to actually, uh, um, get it working anyways. So yeah, I apologize. I think it was Ben Holmes who actually did that for me. Um, Type
[00:02:52] Script is routing one place where TypeScript system really shines. Well, we'll hear about that today. I'm hoping we, we talked a bit about the router last time
[00:03:06]  Tanner was on, but we also spend a lot of time talking about bling and our various, um, initiatives, but Tanner's done a whole bunch of stuff,
[00:03:15]  you know, in the last, God, it's been what, six, seven months since we had him on. He's got his orange juice ready. Yeah.
[00:03:25]  I got my orange juice ready. All right. All right. Nice. Nice. Demo to career team. Yeah, no, I'm, I'm, I've
[00:03:36]  always been very impressed with Tanstack and I like, I like using it as kind of like a thermometer to figure out like where third party libraries fit into the puzzle
[00:03:46] , because I think that's always an important part when designing the framework, thinking about how others will use it. And, um, yeah, I, I've always considered
[00:03:57]  that layer that Tanstack adds on as really good validation of those ideas. All right. All right. Um, have I killed enough time yet? No, we're
[00:04:08]  a little bit early. I don't know. There's been a busy week too, in general. Uh, I think this week in JavaScript, I have two weeks and
[00:04:17] , um, there's actually a decent amount of topics. I was, I remember after seeing posting that I wasn't going to stream, I was like, oh man,
[00:04:27]  but I actually have some stuff to talk about. So yeah, we, we, we, we will have some discussion later about various stuff. Cause I think the last
[00:04:36]  stream. Yeah. I think, I think right. This whole thing has been about routing the last couple of weeks. Um, so talk more about that, but like,
[00:04:48]  it's like this, this topic alone is worth, you know, worth a lot, but before we get into that, I think I'm just gonna, you know
[00:04:59] , yeah. Okay. We're, we've got another 30 people come in now. Okay. I think I've killed enough time. Um, once people see Tanner's
[00:05:06]  face, I know they'll just jump on, you know? So, um, let's, let's, let's see here. Let's see if we're
[00:05:12]  ready to go here. Uh, um, all right. Sorry. I'm just terrible typing. I just like making banners for fun. Yeah. We got some Tanner
[00:05:29]  fans in here. All right. All right. All right. All right. All right. All right. I'm, I, I, I've, I've
[00:05:40]  milked it as long as I can. Um, let's welcome Tanner to the stream. How are you doing Tanner? You said once they see my face though, they
[00:05:52] 'll be like, Whoa. So I gave them the best face I could. Yeah. I'm doing great. How are you, man? I am doing good. I
[00:06:00] 'm glad you could join me today. I, uh, I've been working on a lot of these topics, as you know, and I haven't been keeping up
[00:06:07]  that much with the, um, 10 stack, uh, router stuff. I just occasionally see a tweet and I'm like, man, I was like, we're on
[00:06:14]  the same page. We don't have to talk. We just, we're kind of like on the same wavelength. So I am pretty stoked to hear, um, you
[00:06:21]  know, what's been going on and that, you know, and how you approached it, because I mean, it's, it's, you're kind of an interesting
[00:06:28]  situation, right? It's the, it's the router without the framework, which is a weird, an interest. I'm not gonna say weird. It's,
[00:06:37]  it's, it's a new challenge in this new world of react. So like, I know, I think we talked about this last time. Um, what you,
[00:06:46]  you create a react location in the first place because, well, how about you tell us, like, how did you even get into rhetoric routing in the first place?
[00:06:54]  Um, through react router. So I was using react router like everybody else. Um, and I, I was, I was pushing it to what I would say are its
[00:07:08]  limits. Um, as far as its API was designed at the time. Um, I was pushing the limits on things like how I was managing search parameters. Um,
[00:07:24]  I was wanting more type safety out of it. I was, uh, I was just wanting more of the API to feel catered to what I was building. Um
[00:07:39] , and that really at the time wasn't even that complex compared to how it is today, but it was just dashboards. Right. Uh, I want, I wanted
[00:07:49]  an API that would let me, um, basically manage the state of my application, not manage the URL. Right. Um, Right. Cause I, I, I
[00:08:02]  got to the point where I felt like, you know, the URL is a wonderful place to store state, but as it is, as it stands, like at the platform
[00:08:13]  level, it's not, it's actually a really finicky API in my opinion. Like you have a string that, you know, represents where you are on your screen
[00:08:26] , the path name, right? Yeah. And then, and then you have these search parameters that are just kind of this mixed bag of record of string to string.
[00:08:35]  Like that's really all the URL is. It's just one string that you can change and then a mixed bag of record of string to string. Right. And you,
[00:08:46]  at this point you'd already built react query and stuff, right? Like this is all around that same kind of time period. So you, you had solutions for data fetch
[00:08:54] ing and synchronization and caching. Um, but, uh, you needed to do more because the state of the pages you're building, remind me, and this
[00:09:05]  was for nozzle mostly at the time. Yeah. Yeah. So the state of the pages you're building was quite complex and you needed to be able to like navigate between them
[00:09:13] , restore them. And the tooling really wasn't where you needed it to be on the react ecosystem side. Is that fair to say? Yeah. Yeah. Yeah.
[00:09:22]  That's, that's basically how it is. Right. So no, yeah, no, that makes sense. Um, but then like react location did its thing for a
[00:09:32]  little while. Um, but I, I mean, I guess an interesting question to me is like at certain point, you know, rebranded to tan stack. Um
[00:09:42] , how did you get to tan stack router? Like the typescript was a big thing with, but that was that, was that what drove it like? Mostly.
[00:09:52]  So react location didn't have really any, I mean, it had type safety, but not really much better than what react router could give you. Right. Uh,
[00:10:03]  like you could, you could type things to be safe. Um, you know, shoehorn things in your type casting and whatnot. Um, but it didn't really help
[00:10:12]  you out at all with regard, with regard to types. Um, but it did, it did for a, it was the first foray I had into, um,
[00:10:23]  like search parameters as state management and like making it more like a, feel like a state manager, um, rather than, than just updating like URL. Right. So
[00:10:35] , um, and, and honestly, uh, I, I had been hacking react router for a really long time. Um, I had basically ended up proxying every
[00:10:49]  single export that it had and augmenting it with my own stuff. Um, I gotten to the point where I'd basically rewritten everything I wanted on top of react
[00:10:58]  router and I couldn't go any deeper without NPM patch basically. So when I got to that point, I wanted to write my own internals so that I can control
[00:11:08]  everything. Um, and I, I took a lot of inspiration from react router because I liked it and I still do. Uh, but I just needed more control and I
[00:11:18]  wanted more out of it. And, um, um, I was very careful not to take any code or, you know, steal anything, um, out of,
[00:11:29]  out of these repos, um, which everybody should do anyway, you know, and if I wanted to take any of that code, then I would have put the license
[00:11:39]  in there and done it. But I, I did it because not just because I wanted to not do that, but also because I wanted to learn better, you know
[00:11:47] , I wanted to learn from myself, like, okay, what does it take to write these utilities and understand how these utilities work? So I wrote my own path, magic
[00:11:56]  logic, splat matching logic, uh, you know, interpolation coming out of, out of URL. I wrote all of my own solutions for a lot of that stuff
[00:12:06] , um, until I had a working router and that was react location. That was the first version. Right. Yeah, that makes a lot of sense, but coming
[00:12:16]  back around like the jump from react location to react router, um, TypeScript, TypeScript. Yeah. It's just TypeScript, but basically the way we build rout
[00:12:26] ers today just don't accommodate TypeScript, which is the way it's, it's, it's, it's the, it's the way stuff is connected,
[00:12:33]  right? Like we import all these methods from the library, but those methods know nothing about your route definition. So you have to go backwards. So you can't infer it
[00:12:43] . You have to directly connect it. And tan stack router is different in this regard. Right. Right. I, I tried to add types to react location. I
[00:12:55]  tried to add types to react router. Um, and you can get pretty far, like you can, you can make things better. Um, but, but it's impossible
[00:13:04]  to infer everything or infer even a lot. Um, if your architecture is just upside down. Right. Um, and it's weird to think about that because, you
[00:13:18]  know, route definitions seem declarative and they seem very straightforward out of the box. Like, oh, I'm writing these route definitions in JSX or, or I'm
[00:13:28]  writing them in a config file. Um, and you're like, well, you should be able to pull all of the types out of that and just kind of have it
[00:13:36]  work. Well, the, the points that you interact with the API, each of them has a different expectation of what types have been computed at that point in time.
[00:13:48]  Right. When you're defining a, that, you know, the, the types that are available to you when you're defining the config are different than the types that are
[00:13:59]  available to you after you have defined the entire config. And, um, you know, the types that are available to you inside of that config only know about the things that
[00:14:10]  have happened above them or should. Right. So it got in, it actually, at the time even went against some of the limitations of typescript because it, there
[00:14:19]  weren't great ways to infer, um, like these changed child types of things. And, uh, I spent a long time chatting with like Alex or TRPC trying to
[00:14:33]  figure out how to do this correctly. Right. So it's complex. So basically the easy way to say it is that, um, 10 stack router forces you to
[00:14:45]  declare your routes in a way that all the types that you rely on down below have the types that they rely on already defined. So you can't, there's,
[00:15:00]  there's nothing that you can type in 10 stack router that will create kind of this circular, uh, like, where did that come from? Basically the challenge that I gave
[00:15:11]  myself is if I have to typecast, uh, I'm not going to do it. Yeah. Yeah. That's a pretty stiff challenge with the router. And
[00:15:17] , uh, I met that goal by like 99, 98%. You know, there's some things that you just can't, uh, get around. So that's fine
[00:15:26] . I mean, last year at, um, jamstack comp, you announced the router, like first release beta release of it. Uh, I think it was
[00:15:38] , and, um, it's been a year now. Um, I, I was looking at the tan stack router, uh, the one, um, website, like
[00:15:48]  w w where is tan stack router now? We'll talk about how you got to where you are now, but I just curious, like if, if someone's like
[00:15:56]  interested in it right now, are we still in kind of like a pre-release stage or like a, yeah. So it's been a, it's been a
[00:16:03]  wild journey. So, I mean, if there's been two or three major refactors, but as of today, it is now in react compatible only library. So
[00:16:16]  I decided probably two weeks ago that, uh, trying to remain agnostic was just, it was killing the, like the ability for the router to be extremely useful
[00:16:31]  in something like react, um, in exchange for being moderately useful everywhere. Right. And, and that's because I actually, I was just thinking about this last night
[00:16:42]  and that's because react is not very nice. Not that's not kind about state. Um, especially when you get into topics like transitions and suspense, uh, especially
[00:16:56]  transitions. So if you want to dive into that more, we can later, but that that's one of the biggest changes. So it's react only. Um, but
[00:17:05]  this is interesting. The, the route configuration that you're looking at right now, the overall vibe of the route configuration actually hasn't changed. That's what I,
[00:17:16]  that's what I thought. Like, like this part looks normal. You have a component, you have a path, that's all normal stuff, but this git parent route
[00:17:27] , is this like the secret sauce? Like, is this how it happens? Some of it. Yeah. Yeah. So the only way that you, okay. So
[00:17:35] , so let me, let me tell you this. Um, you don't want to have to repeat yourself, right? Nobody, nobody likes to repeat themselves. Uh,
[00:17:44]  so up higher in a route, um, you might define something like a search parameter that is accessible. That's being validated. Uh, we don't have it here in
[00:17:57]  this example, but in that, in that root route, we could validate a search parameter for something. And as long as you validate that search parameter, you'd want
[00:18:07]  that to show up in your types everywhere else. Um, as far as route configuration goes, you'd want it to even show up in child route configurations. Yeah. If
[00:18:17]  we were to design our entire route configuration as a single object, it would be impossible to do that. Um, because that's not how TypeScript executes its engine
[00:18:28] , right? So we first have to define the root route. Then in our index route, we're saying, I mean, if you got rid of that, get parent
[00:18:36]  route, theoretically, everything would still work just fine, except for this component will have no idea about any of the types that have been defined above. So if you wanted to
[00:18:47]  use a search parameter that you already validated up above, you wouldn't have access to it. If you wanted to use some context that you injected like a query client or
[00:18:58]  a user or something like that, you wouldn't know about it because it doesn't know where to get it. Right. Um, so, so that get parent route
[00:19:07]  is really just there to create the linkage between this route and its parent and its grandparents all the way up to the group. Yeah. Cause I'm just like, I
[00:19:19]  get the lovely hover when I sit here. Um, it knows that it's the root route route, but like it, it knows from this, is there any nested
[00:19:28]  routes? I wonder in this example, where I can actually invoices route. Yeah. So if I go, yeah, the invoice invoice route is a pretty deeply
[00:19:36]  nested out one more down. Yeah. Yeah. Yeah. It's just, yeah. It's just interesting seeing the, the looking at the types from get parent route
[00:19:45] , like actually like this, I haven't looked at the rest of the app, but I actually see the dashboard like, okay. Yeah. This, this, this makes
[00:19:55]  sense to me, at least at a high level, what's going on here. And it is definitely a bit of a change. You don't, this isn't
[00:20:01]  a JSX object. This is, you know, even a config, um, object, you make each item and then link them together. Um, but okay. So
[00:20:11]  here, so let me, let me, let me mind bend you a little bit more. Go up to the root. Yeah. Go to the root component. Yeah.
[00:20:20]  And, um, just, is there a link in the root component anywhere? Uh, link, link to, there are links. Let's, let's go down
[00:20:31] . Let's make a new link in here. Is this editable? Can you edit this? Just make a new link. Um, yeah, maybe this isn't the
[00:20:39]  best spot for it. Cause I think this link is inside, um, for loop. Yeah. It's in a map. Let's, where's the, shouldn't
[00:20:45]  matter, but cause I'd be making many, I'd be making many new links. Right. So do link now, now type two, type two inside of there
[00:20:55]  and let it auto complete inside of two. See it. Um, did I already break it, but it will auto complete. Open the string. String. Yep.
[00:21:12]  The string should show you some auto complete. I wonder if, uh, if that stuff isn't, isn't, uh, running that well inside of the code sandbox.
[00:21:20]  Yeah. Maybe that's where the thing is here. Cause this link two paths should have everything. What if I, okay, there we go. There you go.
[00:21:32]  Yeah. And hit control, I control space and see if it, there you go. Okay. So here's every registered route path for your app. There we go
[00:21:46] . Okay. Inside of the root component. Yeah. Yeah. So technically, so we're inside of the root component. So the other components theoretically have not, not been
[00:21:59]  defined yet. Right. The other paths. Yet this link component that you're using knows about. Okay. Yeah. Yeah. Yeah. Yeah. Okay. Yeah.
[00:22:12]  No, that's okay. Oh yeah. These routes are down below and they're not right. Like invoices. We were just looking at invoices. Oh
[00:22:21] , that's, oh, that's interesting. Cause. Huh. Okay. I do have a question for you, I guess. just cause I'm seeing this,
[00:22:29]  um, is there, do you do relative pathing or absolute pathing? Like, do you know what I'm talking about? Like sometimes the nested routers,
[00:22:38]  people allow the ability to like, not, uh, like to just do like the end and then it uses the current router context. This is one of those questions I just
[00:22:46]  have as an offhand. So you, you can do, you can do relative routing. Um, when you do relative routing, you have to use link with a
[00:22:53]  from, so you put a from and you say, this is where I'm coming from. Right. And you can actually pre-type that. So, so routes will
[00:23:05]  have links on them already to say, this is a link that I'm using inside of this context. Um, when you're doing relative routing is a little looser.
[00:23:14]  Yeah. Yeah. I just, it's just curious. This is something that I was but it can, it can be type safe and it will, it will check
[00:23:23]  you as well. Yeah. I'm a little, I'm like sent a little bit off topic here, but I was, the reason I was thinking about relative, um
[00:23:29] , link, uh, anchors is one interesting thing I've seen in every react or every framework router. I'm not Svelte Svelte is interesting, but
[00:23:38] , um, all the react and stuff is that we have these link components and that's confuses me to, to crap. Uh, we ended up going capital A
[00:23:45]  for anchor or whatever, but it's still a capital, like it's a component, not the native element. And it's interesting because when you see stuff like server components
[00:23:53]  and they're like really trying to push lowercase form, you think they try to push lowercase anchor. And I was thinking about it and you can do a lot
[00:24:00]  of the stuff with lowercase anchor, you have event delegation, you have all these things, but the relative pathing would be possible to do with delegation. If you kept
[00:24:11]  track of the Dom tree and you like had things, but it would actually not work with no JS. Like, like if you've ever hovered over a link, you
[00:24:18]  I'm going to see down here at the bottom that it tells me what the link is. So like, I can't just put the wrong href on an anchor
[00:24:25]  tag. I mean, I can make it work with JavaScript, but it's, it's kind of messed up. So it seems like relative pathing is actually like forces
[00:24:35]  links to always be client components. And I know I'm jumping way down the line on that thinking, but it was just, this is why I was asking about it because
[00:24:45] , um, you know, it's like one of those things I'm like, do I need relative pathing? How does that's, I was, I was
[00:24:50] , I was wondering if like TypeScript was like an argument for or against it. It sounds like it isn't, but. As I have moved my own projects over to
[00:24:59]  this router, I have moved away mostly from relative routing. And, and that's, and I say that mostly because it's, it's just easier to, it's
[00:25:12]  an easier, it's a bigger gun to shoot your football. Um, I, I know that it's really cool concept from like, Hey, you know, you
[00:25:21]  can render this component anywhere and then can relatively down, but that's also, that's also really weird. Yeah. Or, or you can like move the, like,
[00:25:31]  you can like go, Oh, I'm actually moving this from one tab to nested in another tab. And it's like, it still works. Um, the
[00:25:39] , the way that I think of it is I kind of equate it to like tailwind, right? Is like tailwind is escaping this cascading context that you
[00:25:49]  need to be aware of, um, with CSS classes and whatnot. And it makes it a little more maintainable and you can move things around and copy things around and it
[00:25:58] 's still just kind of keep working great. Um, and I feel like the same, I kind of feel the same way about routing as well. Like when possible,
[00:26:09]  I always prefer absolute routes and when they're auto completed and type checked, who cares? It's so easy. And when you go and refact, when you go and
[00:26:20]  refactor things and change routes or move them around or, or do redirects, then you'll get errors, uh, where, where you have those absolute routes.
[00:26:30]  If they're invalid now, you just need to know about them instead of some relative route kind of being silently navigating somebody up or down a directory, right? Yeah. Yeah
[00:26:40] . So I, it was just a curiosity of mine. I, I think what, if I'm hearing you correctly, I should keep my capital A anchor around for the
[00:26:49]  time being, cause some people will like the relative routes, but I shouldn't feel bad about the fact that lowercase anchor doesn't do relative routes. So, okay
[00:26:58] . That's, and I, and I support relative routes in case people want to use it, but the type safety, it takes a lot more effort from somebody to get
[00:27:07]  the type safety out of the relevant route. Then if you were just using an absolute route, you know, it's just more work for everybody. This is, I
[00:27:16]  mean, even for me, if I could show you the type, like the types that I had to write to get relative type safe routing would make you one die. I
[00:27:26]  imagine. So I, I don't like looking at TypeScript as it is. Um, okay. Yeah. But that, that's crazy. So basically you've defined
[00:27:35]  in this file, all these things like the root route invoices, all these, all these different pieces are in this file. So the invoice definition is down here
[00:27:43] . And when I'm back in the root component and building a link, uh, component, it actually knows about the invoice over here. It's, it's all,
[00:27:51]  they're all linked together. And if you scroll down to the very bottom, you'll see, you'll see the one little thing that you need to do to get
[00:27:59]  that to work. I hope it's not scroll up a little bit, scroll up just a little bit, um, to where we, uh, create the router. Um
[00:28:09] , maybe we created it down below. Did we trade it above maybe? Maybe, maybe. Oh, route tree, route tree. That's close. Yeah. Right there
[00:28:20] . Keep going down const router. Keep going down. Keep going down. Okay. Right. Keep going down. Right there. Declared module. Oh, this
[00:28:36] . This is the coolest hack. You extend the interface. I do this actually a relative amount for generic stuff, but I didn't think about the being like, Hey
[00:28:50] , end user, just extend the interface when you let a user do this. It's amazing. So the, the register interface inside of the library allows you to pass your
[00:29:02]  router that you have created. And by doing so, I, I get to start the type script compilation step over again, but this time I, I know about all
[00:29:16]  of your types and that's how you could go to the very top of your file. Right. And write link or navigate or import. You can import top level imports from
[00:29:28]  the router and they're type safe with your types in it that you defined, but it's a little, it's kind of back to the future ish. Um
[00:29:36] , you know, weird time loop stuff, actually thinking about this, you do need link component. Don't you like, you won't be able to get the proper routes
[00:29:48]  unless you, you can like, there's no way you do, you do need to control it. You have to control. Like there's no way a lowercase anchor
[00:29:55]  would, could be aware of the, the, the type path. Uh, I mean, you would have to be able to override uh, the interface for anchor and
[00:30:07]  use generics on it. And, and you can't really do that because generics have to match, um, when you do declaration merging and whatnot. So you
[00:30:17]  do need your own component to do that. Hmm. Hmm. Okay. Okay. Kevin Vandy asked a good question about making multiple separate typed routers. Um, you
[00:30:31]  can, I believe you can do this, but declaration merging works on a TS config level. So if you share a single TS config for your entire monorepo,
[00:30:44]  then you're going to see the same router types get merged everywhere, uh, for all the routers that you create. But if you are using separate TS configs inside
[00:30:55]  of the projects in your monorepo, um, then it should behave just fine. Inside of each project, you'll only declaration merge inside of that TS config. As
[00:31:04]  far as I, as far as I've been told, I have not tested that. Gotcha. Okay. Well, that's definitely interesting. It's something for,
[00:31:14]  I, I, I'm not as close to the typescript stuff. I've been working on a lot of mechanical stuff for different architectures, less on the typescript
[00:31:22] . Yeah. So 10, 10 stack routers, like, like a fifth of it is the types or or something like that, some absurd number, right? A
[00:31:32]  large percentage of it is just, there's a lot of types in, in tests that I've got it. And that's been, I've spent three years, like
[00:31:39]  researching and architecting and building and trial and error to build this type system that works. And, and I have boiled it down to very basic patterns that I, I
[00:31:52]  are tried and true in my eyes now. So, um, that's why all the time I, I tell you like, Hey, if you want to do this with
[00:32:00]  your router, let me know. Like we could, I could easily distill these concepts down, um, enough to get, get anybody else's system to do the same
[00:32:10]  thing. Yeah. Yeah. No, this, this is always impressive. Every time I see it, like I've seen this type completed router, like many times now,
[00:32:18]  but every time it's, I still just get like goosebumps when you like go to the auto complete, but yeah, as I said, I'm fishing a little bit,
[00:32:26]  you know this, anyone who's been watching my stream the last few weeks, I've been doing nothing but talk about routing for about a month now. Like I just,
[00:32:33]  after every guest goes off, I like go and I'm like, okay, now let's talk routing. Um, so yeah. Okay. So yeah. I mean
[00:32:41] , some people are, I think like file system routing is one of the things that, you know, comes to mind. Is there, is there any trick to this or
[00:32:53]  like, cause I mean, let's get to file system running in two seconds. I, before we get there, I, like, I just kind of want to put
[00:33:00]  this in perspective because this is very cool, right? We, clearly this router has superpowers. Um, of course, every JavaScript framework seems to have their own router.
[00:33:15]  Um, you know, like, and let's just talk in react world. Cause we're in react world here, like remix route or remix router, which is like a
[00:33:23]  variant and react router. Um, yeah. I mean, uh, next has its own router. Um, the tube routers, right? Page and app routers.
[00:33:33]  Um, you know, I, I'm just thinking across the board generally, like you go into, you know, even outside of react and you want to like do
[00:33:42]  some, you know, grab one of these frameworks, you know, Svelte kit or whatever. I mean, imagine hydrogen before it, like the router is very much
[00:33:50]  built into it. And then these systems all use file system routing. They all have these deep, um, integrations that are very tight in and a lot of convention
[00:34:02] . There's a lot of convention in a lot of frameworks. Right. And, and trying to figure out like, someone sees tan stack router and they're like, sweet
[00:34:11] , I want to use it. But you know, the react team told me that in order to use react, I should be using a JavaScript framework. Um, so
[00:34:22]  like, like this, this seems to have been the whole dilemma this whole time. Cause I mean, maybe I'm wrong here, but to me, clearly the work done
[00:34:31]  here in Tastack router is a step above most routing solutions out there. Um, so why can't, can I use it? What, what, like,
[00:34:40]  what do you think about this kind of high level situation of things? Then we can talk about the different things you've done in the meanwhile, but I just, I just
[00:34:47]  want to understand where, like where you're sitting on this today. Well, the router is a massive backbone for any framework. And, uh, Ryan Florence said it pretty
[00:35:01]  well that if you haven't built a framework and, or if you're not using the framework you're building one, right. Um, so in a way like T
[00:35:13] astack router is a framework. Um, it's not a framework that many people are used to because it doesn't offer the full stack experience. Right. And that's
[00:35:24]  fine. I, I built it for that purpose. Like nozzles marketing website is on WordPress. The application is behind a big fat authentication wall. Right. And
[00:35:39]  after that, it's, it doesn't, it doesn't play by the same, you know, rules as all, a lot of the other sites that Next.js
[00:35:49]  and, and some of the sites that Remix are, are, you know, working towards serving, right. It's not an e-commerce site. Uh,
[00:35:59]  it's not a news site. It's not a content site. Right. It's, these are applications. Um, and that, that's fine. And that's
[00:36:08]  why I built it because all of these wonderful things that Next.js and Remix are doing, they really are great. I, I, I, I like all of
[00:36:17]  the features that we're working on and RSC and we're pushing the envelope, right. Because this is where React had and, and front-end frameworks in general
[00:36:26]  have traditionally fell short. Right. They, they're highly interactive. And everybody came over to front-end frameworks because of the interactivity and apps and everything. Um,
[00:36:36]  and then we kind of just forgot about and ditched all the wonderful things about servers along the way. And one of those things, and I like all those use cases
[00:36:46]  for, for like big e-commerce sites and, and, uh, you know, server rendered things, they, they were kind of forgotten. And then we tried to
[00:36:56]  backfill them and, and tried to, you know, SSR came around. Um, and we, we kind of tried to shoehorn what we had back into it
[00:37:06] . And RSC and the recent movement for like server components in general, it feels like the first genuine movement towards, okay, let's go back to our roots of
[00:37:18]  the server. And, but let's bring all this interactivity and stuff that we learned with us with some compromises. Right. Um, most people will love that.
[00:37:28]  And a lot of big companies really, really need that. Uh, e-commerce absolutely needs that. So many things need them, but there are also a lot of
[00:37:37]  applications and sites and experiences on the web that are very, very happy where we are. Right. And moving back towards a non client side render to like a server side environment
[00:37:53]  would not only complicate things, but wouldn't really, you wouldn't gain anything from it, you know, other than now I can server side render my login screen
[00:38:04] , you know? Right. Uh, it's like, yeah, I think it's sort of asked the follow up question too. Yeah. Yeah. There, there's
[00:38:13]  debate there too, because I, I wouldn't mind having a center stack kind of a setup where I, I had my own server API endpoints, right. To,
[00:38:22]  to do some things and come back to my app, but, but you don't need a full stack UI thing to do that. You just need like a center stack
[00:38:31]  API. Right. Um, like I could still keep all the nozzles front end stuff, just client side rendered and then have my own little kind of edge API that
[00:38:40]  I talked to. And then I can, then there's the API, the real work, the real API stuff that happens, you know, back with my backend developers,
[00:38:48]  which is how a lot of, um, companies operate today. And, and I think that they operate that way for good reasons, because JavaScript doesn't run as fast
[00:39:00]  as other things, even on the server, no matter what you do, like, it's just inevitable that you get big enough, big enough problems or a big enough scale
[00:39:10] , you're going to meet other technologies. And when that happens, you can't really expect to just be this full stack, three person JavaScript shop app. Right.
[00:39:20]  And that's great. And I mean, that's why remix and next and in a full stack framework, wonderful to start a new thing with, right. And also wonderful
[00:39:31]  to keep going. If you need to move your logic out to kind of a separate language and a separate server microservices. Yeah. Um, yeah. But as far
[00:39:42]  as the front end goes, like, I'm, I'm happy. I'm happy where I'm at. You know, I don't, I don't need server
[00:39:48]  components. And I don't, if I was building an e-commerce site, I'd probably be seeing a different team, but I'm not. So yes. So
[00:39:56]  somebody asked a question. Tansac router is definitely targeted towards SPS. Like, it has some SSR functionality in there. Don't, why, why,
[00:40:04]  why would you do that? If you need SSR functionality, they go use a tool, the right tool to do that. And, and, you know, I would
[00:40:12]  say the tool that I would recommend in React would be remakes. Go use remakes. And if you're in solid, then hound Ryan for solid start.
[00:40:21]  Right. Yeah. So, yeah, yeah. So yeah, basically like, it's like, someone's like, oh, can I put, can I combine app router
[00:40:29]  with Tansac router? And the answer is, I guess, yes, because you can just go to a particular page and then at that point, it becomes a T
[00:40:38] ansac router application. Kind of like the Astro mentality. Yeah. If you wanted to set a base route of like mysite.com/dashboard and
[00:40:47]  use Tansac router after that, like you could totally do that. Um, yeah. Yeah. So yeah, I just, yeah, I, I guess, cause
[00:40:59]  this has been, I know that you didn't, you, you didn't come to here lightly, like, cause you spent a bunch of time looking at SSR.
[00:41:08]  You looked at file system routing, you looked at data fetching patterns, um, and, and where you're at now is right tool for the job. Yeah.
[00:41:20]  We should hit, we should touch on each one of those by the way. Yeah. Yeah. We will. Yeah. Yeah. Let's go down, let's go
[00:41:25]  down that list because it's a great list. Yeah. Cause I think the first thing I remember you, I mean, obviously your data fetching went throughout, but
[00:41:32]  I want to leave that for a second. Let's talk, uh, file system running. Cause that was like one of the early experiments that were like, yeah, no
[00:41:39] . So you're ready. I'm going to share my screen. Yeah. Let's see. Let's see if I can, there you are. Sure. Let me
[00:41:51]  know. And you want me to stick it in. Are we good? Right. Let's make sure that. All right. Sorry. There we go. All right
[00:42:03] . So let's see. Can you see my screen? Yeah. Your screen is up now. Okay. So file system routing really interesting. Um, because everybody likes to
[00:42:18]  think, well, you can get all this cool stuff out of code generation and you absolutely can't, but I didn't want code generation to be an excuse for not
[00:42:26]  having a typesafe router on a box, which is why I left it till the very end. So it turns out that after you build a fully typesafe router, the
[00:42:35]  code generation that you have to do for filesys for file based routes is really, really small. So we're looking at a project here that, uh, does file based
[00:42:48]  routing with 10 sec router. And, um, the way that it, the way that it looks is down here, we have, uh, it's just using beat
[00:42:58] , um, TypeScript in the package. We don't really need all these dependencies and just kind of get copied over from duplicating the example. Um, but the ones
[00:43:09]  that we do need are, we're going to need hand stack router, uh, um, react router right there. So we will need react router and then we're
[00:43:19]  going to need 10 sec router CLI. Right. So the CLI, the way that it works is in our, in my package right here, I'm just doing
[00:43:27]  a concurrent TSR watch and then running, you know, we can, you could integrate this into beat if you want it with a beat plugin. Uh, but right
[00:43:36]  now it's just TSR watch and run the beat, run the beat server. Um, and then when we build it, we TSR generate and we rebuild. So
[00:43:43]  the way that TSR works is, uh, we have a config that says, where's our root directory? Where's our routes directory? And where do you want me
[00:43:53]  to generate the route tree? So, um, once we do that, we have our routes folder right here and I built it this version. You can actually use different
[00:44:10]  flavors, but the only flavor that's supported right now is remix VG style. So, well, you know, you can actually do both so you can use folders
[00:44:19]  if you want to nest or you can do dot, uh, dot notation to denote it to denote your life, your, uh, your paths. Right. So this one
[00:44:30]  right here would be slash posts slash post ID slash deep. Um, and this is just slash post slash post ID. And just like remix, there's like trailing
[00:44:41]  underscores and leading underscores to denote like, Hey, this is, uh, this is a pathless layout route or, you know, this is where I
[00:44:50]  want you to, this is how deep I want you to compute the layout, um, or opt out of like layering. Right. So deep, deep wouldn't use the
[00:44:59]  posts, uh, wrapper because we're opting out of it. Gotcha. So, so what we do is we start running, uh, the dev server. This
[00:45:08]  is what it looks like when we run it. Um, it says, Hey, we just generated some routes and it's really fast. Uh, even with like hundreds of
[00:45:17]  routes and we, we process eight routes every single time that we save, it's just going to process all of our routes and make sure that, you know, it's
[00:45:27]  building a route tree and inside of each route. So let's do like this posts index route. Um, so posts index, uh, the only thing in here that
[00:45:41]  looks a little different is we're exporting const route so that, uh, the gym, the generator can pick it up. And then instead of using new route, we're
[00:45:52]  using new file route and file route is kind of like a factory and it takes the path of where you have, of, of your, of your route thing. So
[00:46:01]  like you have to define the path of print, but what's great is you don't have to define this. Okay. If we just, if we just do this and
[00:46:09]  hit save, it's automatically maintained for us. If we create a new file and hit save, it will automatically put this in here. So you can move files around.
[00:46:18]  You just move these around and interesting. Okay. And that's handled by, yeah, any reason you're using function calls instead of an object or anything here? Like
[00:46:31]  kids, I mean, presumably you can generate whatever. Is it just because TypeScript wants the like types from the function calls? Yep. So, so we can't just
[00:46:40]  go right into calling a function because we have to give it some context. We have to say, Hey, this is where I'm coming from. Right. Like this
[00:46:47]  is, this is my typed context. And then after that, we, we create the route after that. So this, this little, this little injection of the path,
[00:46:58]  it's automatically managed for you by the CLI, but it's also the most important piece that that's happening with all the typesync routing. So if we come
[00:47:09]  in here and we say, let's see, let's do load. And let's just grab context. I don't know if there's anything on the context, actually
[00:47:29] . Let's just do search. search. You wouldn't believe how someone, we might not, we might not have search brands either. Um, so, so the
[00:47:41]  interesting thing here is that we, we would get, I don't even think I have anything on here. Yeah. It's, um, as far as search brands,
[00:47:48]  but we would get stuff from like our parent routes right here. Yeah. Like we would get auto complete for things that we have done in our parent routes because we have
[00:47:58]  created, you know, how in the other one we had to do, uh, get parent route. Yeah. Well, we don't have to do that because we've
[00:48:06]  already defined where we are. And so if we go and look at the source for file route, um, let me just format this. So file route is looking at
[00:48:20]  that file path that we give it. And then it's saying this extends a file routes by path and file routes by path is a interface, a blank interface. So here
[00:48:35] 's the actual file route, uh, source code. So just the same way that the sort that the, uh, that the registration happens for the normal router we're
[00:48:47]  registering for file routes as well. So that, that happens here in the route tree gen. So this is a file that gets generated from TSR and it's declaring the
[00:49:01]  same react router module instead of interface router. Right. We're declaring that file routes by path. And this is the only generation that we have to do. Right.
[00:49:14]  To say for this path, this is the parent route for this path. This is the parent route. Right. Yeah. This is the trick. And we, and we
[00:49:22]  import all of them. Yeah. Okay. And I, and then we assign all the options. I got, I got, I got a tricky technical question for you.
[00:49:29]  Can you go back? Um, cause I, I know enough about this. First of all, it's funny. I didn't realize it cause I haven't looked
[00:49:36]  at how similar, uh, the conventions and solid start are to your thing. We use export const route and like it's in V2 beta. It's, it's
[00:49:45]  kind of eerie to see the similarities on, on this, but what I want, can you go back to where you showed the file route with the auto gen file?
[00:49:52]  There's one thing that's glaring to me and I want to know what you do here. That component. How do, what, what if I want that can
[00:50:00]  both be lazy loaded? Like how does that work? Yeah. So there is a lazy route component factory. Okay. Where you can actually come here and say, okay,
[00:50:14]  I'm going to, uh, lazy import, right? Right. Whatever. But the buggler needs to split it into a different, uh, bundle, right
[00:50:27] ? Like for it to actually, and this will, this will, this import will bundle. Oh yeah. Yeah. Yeah. Okay. I got you. I got you
[00:50:34] . What you're saying is you, yeah. Sorry. I'm being silly here. What you're saying is you need, you need to actually put the actual component now
[00:50:41]  in a different file and then it'll be in a different file, which is why we were looking at stuff like bling. Wouldn't it be beautiful if you just go
[00:50:48]  lazy dollar sign right in line? Exactly. Yeah. That's exactly why we were talking about it. And, you know, I, I will, I will admit
[00:50:55]  that the, the lazy story in 10 side broader isn't great for routes. Um, on the surface, that's not a huge problem for, for me because that's
[00:51:04]  not where I'm doing a lot of my code splitting. I'm doing a lot of my code splitting, um, inside of those components, like, uh, loading sub
[00:51:14]  components out of this. Right. Um, Um, to load all of the top level, like components, just to organize my routes, um, and then render kind
[00:51:24]  of the outputs isn't a whole lot, uh, the deeper components that are problematic. Right. Right. Yeah. And to be fair, I, I toyed with
[00:51:35]  this pattern. Cause if you think about it, and I'm getting, this is a server component thinking kind of thing is there's a, there's a kind of parallel
[00:51:42]  between server to client components and client to lazy components where like, if you like said, I was toying with this idea for a while that I was like, okay
[00:51:50] , well, if you push the lazy loading down, then you do get the data fetching relatively quick, right? Like if you load the route synchronously and start fetch
[00:51:57] ing the data and then lazy and lazy load the component at the same time, you're fine. Obviously nested parallelized routing doesn't let you do that on the
[00:52:05]  client properly, but it is interesting to me at least that like, there isn't quite an argument that we don't have to automate the lazy. Um, although that is
[00:52:14]  probably the number one feature that file system routing, like, like generally associate with is because people just write the files and then they don't have to worry about the lazy loading
[00:52:22] . Um, Um, that, that's the number one thing is when you, when you get into the, you know, server side stuff, um, especially the
[00:52:29]  service side stuff, like auto splitting and, and, you know, auto bundling for success is probably one of the biggest reasons to do file-based routing because you're
[00:52:43]  placing convention around those like boundaries that are just going to need to be split anyway. Right. Um, yeah, no, that makes sense. Oh, wait, did
[00:52:57]  I lose Tanner? Um, looks like we lost Tanner for a moment. I'm, he hopefully will be back. Sorry. Something happened there. Okay. Um, yeah
[00:53:09] , yeah, no, for sure. I mean, code splitting is super important on the client only case as well, but I, but you're, you're talking
[00:53:15]  about the importance of the convention, especially when you start getting deeper into stuff like, um, like, like these server component type realms and like areas that are partially hydrated in
[00:53:26]  versus not, but okay. Yeah. So file system routing was something you were able to put together, uh, relatively straightforward. Um, that's, that's good to
[00:53:35]  know. I do. It's an interesting, the convention around the exporting the route configs as the file center, cause then you get to keep your type script.
[00:53:42]  Um, so yeah, no, I think it's a, I think it's a really important takeaway for, especially for anybody who's looking to do that type of thing
[00:53:50]  is that, um, like the amount of code generation, code generation is great as long as it's very little, right. Uh, like you saw how much we were
[00:54:00]  generating for those routes. It wasn't very much. And what's nice is that code generation should be static, like relatively unchanging after you have generated. And what
[00:54:11]  I mean by that is that you shouldn't like your, what's, what's in your code generated file should not be changing every single time that you hit save on just
[00:54:21]  normal stuff that you're working on day to day, right? Like it should only be actually changing the contents of that file when like file location changes. Right. Like
[00:54:33]  I wish, I wish I still had that open because there were no types. There were no sources of truth for types in there other than the linkages between the paths and
[00:54:45]  the routes. Uh, the sources of truth were still your files, your code. There were no like generated types, just the linkages between them. Interesting. Hmm
[00:54:57] . I think that's very, I think that's very important, which means that when you're in one route and you change something, you don't have to hit save
[00:55:05]  before you're going to see those types in another, in another place in your application. And you're not going to have to wait for everything to generate before you get that
[00:55:14]  typescript feedback. Right. That's, that's actually a very interesting point. Cause I, I, we had Nikhil Saraf on showing us Vinci a
[00:55:22]  few weeks back, um, which is like a beat build system that handles basically any type of file system routing convention you want, throw at it, it outputs it. And
[00:55:32] , um, obviously because of his close work with, with us, he had a solid example. He had like a solid start-ish example. And he had, um
[00:55:40] , he had under his react examples, he had 10 stack, uh, router examples. Um, but I imagine the biggest difference between his approach and what you're here
[00:55:52]  is that he, you wouldn't be able to see the changes from his stuff until it's saved. I'm, I'm gathering is the biggest difference. Um, probably
[00:55:59] . Yeah. Cause what did he do? I actually want to see if I can, if I have it here. What was this tan stack router app? What did
[00:56:08]  he do? And it's probably out of date. So it's, it is probably out of date. What did he do? Page dot TS. Yeah. He,
[00:56:17]  he just actually took a very, he took just like a, a standard react router looking pattern, maybe something similar to remix and then, Oh, what's going on.
[00:56:30]  It's like, and then, yeah, I think, I think that's all he did and yeah. Pages. What is this? Nikhil likes experimenting with
[00:56:41]  stuff. Yeah. Okay. Yeah. Cons loader. Yeah. This is use loader. Yeah. This is, this, this is old stuff, right? Which
[00:56:49]  we're going to get to in a second here, before we move on one last thing on the file system, running this question, I guess it's personal preference. What
[00:56:56]  do people think of more explicit DSL for routing? Like what's, what's, what's your position? Do you have an opinion about this Tanner? I,
[00:57:04]  I don't know. I don't like DSLs. Um, kind of generally I'm not opposed to them. Obviously we, we use some DSLs as
[00:57:18]  a community that we've agreed are helpful and useful. Um, but in general, I don't, I don't like them. I think the, I think the
[00:57:28] , I think the meaning of DSL though, in this question is like basically, uh, like configuration types, like basically like what you've done with tan stack versus file
[00:57:38]  system. It's like, like, like, so you're just talking about config based program, programmatic routing. I think so. Yeah, I think so. I
[00:57:49] , I like programmatic routing. Um, even if, even if it's the last line of defense, like file system routing is great. If you want to generate
[00:58:00] , uh, if you want to generate an import of some generated like file routes, but at the end of the day, I still want the ability to get into that code
[00:58:09]  and, and put it where I want and massage it. I, I get nervous about handing over all of the control to, to convention. So, right. Which
[00:58:22]  is why 10 stack routers CLI doesn't generate a router that you use. It generates a route tree that you put into a router. Um, okay. Makes
[00:58:35]  sense. Um, uh, it looks like primogen just started streaming. We lost a couple of people at this, but, um, I'm going to, I mean
[00:58:46] , I'm, I, that was the first topic. Um, but there's two other hot topics related to routing here that I wanted to ask you about. Um,
[00:58:54]  people keep wanting to tell us, mentioning that Sam Altman from open aid, I guess it's big news. Anyway. Um, we'll worry about that later.
[00:59:05]  Um, but I wanted, I wanted to ask you about, uh, SSR. Cause that was the other topic people asked me because obviously you, you server render single
[00:59:14]  page apps. So what's the SSR, you know, what, what was your explanation there? I went, I went pretty deep. I, I implemented kind
[00:59:26]  of the regular SSR stuff, um, for like traditional SSR when you would say, you know, Hey, router, go load all my things and you can await
[00:59:36]  your router loading. And then after that, you could just render your stream, like a single SSR render stream strategy. That was relatively easy to do with a load
[00:59:48] er. After that, I thought, okay, well, how do we support suspense? Right. And when you want to support suspense, you immediately need to, um,
[00:59:59]  you immediately need to consider the new APIs, like, like streaming, you know, you're no longer just rendering to stream, you're rendering to like a, stream.
[01:00:09]  And that took me down a really crazy path because so many of those APIs are very, very, very primitive. They don't come with a whole lot of bells and whistles
[01:00:22]  baked into them. And, and I mean, they're built to framework authors. And so I get it. But when I went down that path, I, I was
[01:00:32]  like, okay, this is really complex to manage where, um, you know, you, you then have to make sure that you're following all of the rules of
[01:00:42]  the framework that you're using to a team. And immediately I was like, okay, crap, I'm not following all those rules because we are using, uh, I
[01:00:54]  was using an external agnostic store at the time. And it was using new sync external store, which can support suspense, but in a really terrible way and without
[01:01:06]  transitions. And so I, it took a long time to get that to work where you could, you could render and you could await kind of the, uh, you
[01:01:15]  could await the router loading to get the very critical stuff, things that might write to the head, uh, things that might change response headers, right? All of the critical
[01:01:27]  stuff that was happening in loaders. And then I was like, oh, you know, remix did a really good job with the defer API. So I, I
[01:01:33]  basically wrote my own version of deferred and awaited API. Um, but that worked very, very differently internally for the router. Yeah. I was going to say,
[01:01:44]  I don't think people realize this suspense works without server components. Yeah. Yeah. Like I, I, I know that's like the, the packaged up solution,
[01:01:57]  but yeah, I mean, it works as long as you can dehydrate and send to the client and hydrate again. Right. So yeah, I mean, this is
[01:02:06]  the harder part. That's the harder part about losing suspense across the server. Yeah. It's just interesting. Cause obviously with solid, we built suspense and released it well
[01:02:14]  before we had our partial islands kind of solutions. And it's, it's just interesting from an ecosystem standpoint, watching you and others trying to like come in and develop
[01:02:25]  these patterns where like, so you, I guess you were part of the working groups and stuff, like trying to like figure out what the hell suspense was and transitions and how
[01:02:34]  to make this all work. Um, how, like, like I think you said that you're primarily for single page apps now, like does, does Tanstack router
[01:02:47]  support SSR? It does, uh, obviously without a lot of testing in place around it. I explored all these concepts and I implemented them to their basic functionality.
[01:03:02]  I didn't streamline any of the experience around using SSR because it's not something that I need. It's not something that I, that I'm using right now,
[01:03:12]  but it does support it. Yeah. You can, and you can do that traditional SSR where you just kind of render, render everything on the server and then just
[01:03:22]  render to strings, send it down to hydrate everything. And then you can also do the, uh, streamed stuff. So Tanstack router has, um,
[01:03:32]  primitives to dehydrate and rehydrate, uh, on the fly while you're, while you're rendering. And it will actually, uh, chunk those data
[01:03:45] , those data packages that you dehydrate out into scripts tags that you can inject with a, you know, with a stream transformer, um, that you implement on the server
[01:03:56] , and then they'll get rehydrated when they get back to the client, uh, as you're streaming with suspense. So it does support all of that.
[01:04:03]  Wow. That sounds complicated. I, I, yeah, I, it's interesting. I it was that's stream transform. Okay. That's yeah. That's,
[01:04:14]  that's interesting. Yeah. I haven't, I haven't looked at that. If, if yeah, in solid, if someone wanted to come up with a third,
[01:04:21]  another, uh, router and make it work with suspense and streaming, they would basically just, as long as you knew that you could, you had to create resource under
[01:04:31]  the hood for the, for the data fetching or lazy for the components, they literally have to do nothing. Um, React doesn't have anything like that. So it
[01:04:39] 's impossible to do that with React. Right. Right. So, so with the stream transformer stuff, really what you're doing is as you are rendering, uh, you
[01:04:49] 'll hit a, you'll hit a suspense boundary and what will happen is that will, that will make React wait, um, on the server, which is great.
[01:04:59]  And then as soon as it resolves, React is going to try and render again and grab all that and send it down to client. But before it does that, you
[01:05:07]  need to get in the middle and say, okay, we reached a work, a point where the work has been done to grab that data. We want to grab that data
[01:05:14] , dehydrate it into the router, kind of like push it onto a queue. And then, and then we let React keep rendering that chunk. And then inside,
[01:05:25]  inside of the render to stream, we use a stream transformer to say, every single time that react sends down a chunk of HTML, we check to see if there are
[01:05:37]  any of these dehydrated, uh, scripts sitting in this queue. And if there are, we chunk them up and we send them down with the stream that react with the
[01:05:47]  chunk that react just finished doing. So that way the data inside of those script tags and the resulting HTML that react finally rendered both get chunked down and sent together.
[01:05:59]  And then when that hits the browser, the script tags inside of there will call up globally, dehydrate their data back into the router. And then everything renders as if
[01:06:15]  it was just thinking, that's interesting. Yeah. In solid, literally if you use the primitives at all, this works done. Um, okay. That's
[01:06:22] , that's, that's, that's interesting. I think there's some, yeah, I mean, that's, that's quite a journey there. Uh, uh
[01:06:29] , sir, this random question came up. I don't, I'm just going to answer it because it'll take me two seconds. When using view router with routes to
[01:06:35]  find a parameter, I found it frustrating how the phone doesn't re-render when the parameters change. I'm using routers wrong. Um, it's different in React
[01:06:40] . React would definitely re-render, but view has a reactive system. So I'm guessing probably the same as solid when the user ID changes, the parameters reactive.
[01:06:50]  So only that parameter has to change it and things that listen to it. So instead of re-rendering the component, it just sends us like a signal down to anything
[01:06:59] , listen to user ID. If you have data fetching based on it, it'll refetch it. Um, this is just a little hook up to that observable
[01:07:05] . Yeah, yeah, exactly. And this is, this is a key difference when Tanner was talking about trying to universalize this kind of stuff is because even at the core
[01:07:13]  level of the thing, like if you forget about data fetching, which we'll talk about in a minute here, the actual way change propagates in these frameworks is considerably
[01:07:23]  different. React will keep on re-rendering stuff ad nauseam. A library with signals like view or solid is going to just go, Oh, this one parameter changed
[01:07:33] . Let's just go update the thing over here that changed because of it. And I think that's like a big fundamental change, but it's, it's something you
[01:07:40]  have to understand that like, if you're a view developer, that's how it works or, you know, right. So yeah, so view is better than,
[01:07:47]  than react or, or, I mean, this is the signals versus react argument, um, which is there in terms of reactivity. Yeah. Yes. In terms of
[01:07:58]  other things, you know, I have pros and cons. Yeah. But if we're talking strictly about reactivity is, is view reactive. The answer is yes.
[01:08:09]  And is react reactive. The answer is no. So yeah, it's even that's in the name. Yeah. So yeah, little, little bit, little, little
[01:08:18]  bit, little bit, little bit, little bit, uh, interesting. Um, yeah, I, well, how about signals and spell. I mean, I think S
[01:08:27] velte 5 will be the same on that side as view and solid and solid and everyone else using signals in terms of reactivity patterns when it comes to the router.
[01:08:35]  Um, Svelte 5 is, is going to be, uh, um, cats. Dominic is here naming is hard. Um, Svelte 5 is going
[01:08:49]  to actually be very similar to solid. It has the same fine grain render. View does not have the same fine grain render, but they're also making vapor, which will
[01:08:57] . So, um, yeah, I, everybody's going that way. And it makes sense because like, you have to start, if you're going to rewrite a
[01:09:05]  framework from the ground up, your bedrock should be performance and signals are synonymous with like amazing. Right. So I'm not surprised that everything is, is going that
[01:09:16]  direction, at least at some level of abstraction. Right. Even react to, I can't remember who from the react team, but many, many conversations with the react
[01:09:25]  team have resulted in saying, no, we would never do that. We would never bring signals into react. Uh, but guess what? We're working on a, we
[01:09:33] 're working on a really cool compiler and, uh, it's going to make it so you don't have to write, uh, you know, use memo and use
[01:09:40]  callback and say, well, really, how does it work? Well, it kind of compiles to signals. Kind of. Yeah. I mean, they, they
[01:09:49] , they won't say that necessarily, but yes, there's the, I mean, even if they don't call them signals, like it's a, it's a
[01:09:56]  fine green reactivity system that, you know, if you squint hard enough, you're like, well, okay. Yeah. I guess. Yeah. Um,
[01:10:06]  yeah. So yeah, this is just kind of, uh, it's just a very different mentality for people coming from react. And I think reacts hoping that the abstraction will
[01:10:18]  cover any polls here. I just abstractions always come with, it's such a weird place, right? Where we went from a world where react was like the, just
[01:10:28]  JavaScript framework to now one where it's like, they're, they're pulling moves that I, you know, expect from Svelte, not to say that it
[01:10:35] 's like a bad thing. Like I like Svelte for what Svelte is. It just, it sometimes doesn't feel like react anymore. Um, we'll
[01:10:42] , we'll have to see how this all plays out to be fair. Yeah. Agreed. All right. Um, right. You're, you're an hour ahead
[01:10:53]  of me. Um, so yeah, that's, I I have to keep that in mind on, on things. Um, yeah. So yeah, we had one
[01:11:02]  more topic. Uh, I wanted to talk about, cause I think this might be, which is the, uh, the data fetching thing, what you, you went
[01:11:10] , you went way down data fetching, right? You had, you created loaders like remixes and, and that, but my understanding is they are not around anymore
[01:11:19] . Um, what happened? So yeah, I, I went down the route of creating load in the beginning. I, uh, even before I announced it, I
[01:11:31]  was like, Oh, you know what? It's just going to use react. Um, and that was a great idea. And then I was like, what if people
[01:11:39]  want to use other things? So I kind of opened it up a little bit more. And then eventually I was like, what if you didn't have to use anything
[01:11:44]  else at all? So I built loaders into it. Um, but I didn't, I didn't build actions into it. Okay. Just loaders. And it
[01:11:53]  was really fun. Like I basically replicated the, the, uh, most important parts of react query, but inside of the router itself. And then I thought, well
[01:12:04] , what if, what if there was just a smaller library than react query that was like built for the router? So if you wanted it, you could use it. So
[01:12:11]  I wrote react loaders. And then I was like, no, that's done. Let's go back to the voters inside of the router. And then two weeks ago
[01:12:19] , uh, I migrated nozzle over to the router, the last little bits. And I looked at the system as a whole. And I was like, what am I using
[01:12:28] ? What am I not? What's, what's valuable? And I looked at loaders and I have one loader in nozzle and it wasn't really adding that
[01:12:37]  much value. And I realized that, you know, for my SPA for, for, you know, book of the work that I do, I'm just not loading
[01:12:45]  a lot of data in routes. Um, and if I am, it's mostly just a preload. Like it's an optimistic thing to maybe get the data there a
[01:12:54]  little faster, um, you know, to avoid some waterfalls, but, but even that was difficult because of the highly dynamic nature of everything that we were building,
[01:13:05]  right? Not everything can be derived from the URL. Some stuff just has to come from, you know, what's in local storage. What did the user click on?
[01:13:16]  Like, what are they doing? What's the ephemeral state of the app? Um, so when I saw that, I was like, wow, I'm
[01:13:23]  maintaining a lot of logic. That's probably not as good as other solutions out there, like remix or next when it comes to like route loaders. I mean,
[01:13:33]  it was pretty good. Yeah, it was, and it got the job done, but I just didn't want to maintain it. And I realized that you could do the
[01:13:42]  exact same stuff if I just changed the loader to load and made it so that you can't return anything from that function. So there's no caching involved anymore
[01:13:54] . Like router does not store anything. It's storing the promise and it's just waiting. You can still use it to prefetch and make routes wait and suspend and things
[01:14:04]  like that. Um, but I killed four kilobytes out of the router code, uh, for all of the caching. And I, and I just said,
[01:14:12]  you know what, if you need caching, you're going to use something like react query. Yeah. React query has a way to like preheat the cache,
[01:14:21]  right? Like in the preload time, you could just, you in the load, just call, you know, set the cache and then use create or use query further
[01:14:29]  down inside your app. And then you're all good. Yep. Absolutely. Um, in fact, I can, I could show that really quick if we, if we
[01:14:37]  want to. Yeah. It's I, I, again, this is another example where I think we've come to almost the exact same uh, conclusion, which is
[01:14:45]  makes me very happy. Um, after Tanner is gone, we're going to talk actually about what solid routers looks like. If we had Tanner more time today, we
[01:14:54]  would, I would have showed him as well, but I think we should focus on his stuff and then we'll look at, we'll look at what I've been working
[01:14:59]  on. But so here's kind of the latest version of the basic example. And you'll notice the react queries in here. Um, we've got some primitives to
[01:15:08]  just kind of fetch some data. And then here's our root route and with our root route, we say root route with context and we, we inject our query client
[01:15:17]  or this is just the type. So we say the query client needs to be a part of our router. Um, then we render all of our things. We can even
[01:15:28]  render, uh, like react query dev tools in here. And then when we get to a route that needs to load some data, um, I'm doing this query options
[01:15:39]  stuff, but I don't technically need to do that. I actually wonder if my kitchen sink demo. Dominic like kind of just beat you straight to the point.
[01:15:47]  He's like, ensure query data and load, then use querying component. And I think I actually saw that a second ago in there. So here it is. Um
[01:15:54] , yeah, I'm actually using the new query options primitive. So I have my query options set up for all my things. Right. Right. Um, and then I
[01:16:03]  have some mutations here and then I'm sending through off and query client when we get to something that we actually need to load data and have it wait. So here's
[01:16:12]  the interesting thing is that I could just take this out and it works the same way, but it just uses suspense instead because it's a suspense query and, and I
[01:16:25] 'm, and because I moved it all the way to react, it's using transitions. So at least visually it will work exactly the same way. Except for if the components
[01:16:35]  lazy loaded. This is, this is, this is component based trigger data fiction. If it's not lazily loaded, then what you do is you say, okay
[01:16:45] , in this load function, you've got my options, company context, my query client, ensure query data with my options. And then you can lazy load and bring it
[01:16:53]  in and just use suspense query with the same stuff. It's really, it's really that easy. And I mean, I think that shows how powerful it is that you
[01:17:00]  can actually remove this and you get the same exact functionality. This is just kind of covering your butt a little bit more, kicking it off a little bit early. Yeah
[01:17:08] . And I like that you went this path in that. Oh, and you get, and you get preloading for free with this. So if you hover over a
[01:17:16]  link, we can, we can do automatic preloading. When you hover over a link, we can make sure that all this stuff is prefetched for you.
[01:17:23]  But Tanner doesn't realize it, but he's just describing the demo. I'm going to show you guys for the new solid router right after this. Yeah. So,
[01:17:31]  so that's, that's, that's how easy it is, right? For like this invoice route or validating some search for some search params, we got
[01:17:38]  our invoice ID. And then we're just saying the same thing. Just go optimistically about it, use the query here. So that that's essentially how, where things
[01:17:48]  are headed. Do you know what? This makes a ton of sense here because you already have a query caching mutation library. I like, I think it's kind of
[01:17:57]  interesting when you release, if you release a router, like you just did, you can go like, okay guys, don't worry about it. You don't really need
[01:18:03]  preloading. Like I, you know, I'd rather lean into, I'd rather lean into the great things that have come out of tan stack. Right.
[01:18:11]  Like react query is one of the biggest things, right? I think, I think the fear was that if you give people a router and then you don't explicitly be like
[01:18:19] , Hey, there's a solution for querying people like, okay, what's my default? Where do I get started with? Right. Whereas like tan stack clearly query
[01:18:27]  clearly already handles this use case beautifully. So, um, I, I think, I think this is actually quite cool to see that like, you already have the other
[01:18:37]  library. You don't need a lot of a different library, you know? Um, I, I w I was, I w I wasn't ready, um, for
[01:18:44]  the stream today. Otherwise I would have shown the demo that I'm going to show in a few minutes, um, with, uh, solid query. Um, because now
[01:18:53]  with, I don't know if people know, with, uh, uh, tan stack query five, we finally officially have support for solid query with SSR resources.
[01:19:02]  You just pop it in. Everything automatically works. Suspense transitions, everything out of the box. And if you talk to everyone or whatever, like literally he just had
[01:19:11]  the rapid create resource call and then it just worked. Um, I, I had some bugs at the fix for him, but like, uh, I wanted to show
[01:19:18]  that cause I think the patterns that we're seeing here for routing, me and Tanner, I told you, we haven't been talking much recently. We've been busy on
[01:19:27]  our own thing, have kind of come to the exact same conclusion on what routing should look like. Um, so it's very cool to see this. Um, so
[01:19:37]  yeah. Um, I'd be curious how to start learning programming after this. Uh, we don't have time for that today. Sorry. Um, I probably have like
[01:19:47]  three more minutes. Yeah. Anybody got any questions specific to what we've been talking about today? Um, I know we did not get Tanner very long, but I
[01:19:56]  think, I think this is your chance right now. I, we're going to continue talking. Yeah. We're going to talk routing a bit more after Tanner, um
[01:20:05] , drops off here. But, um, yeah, I, I think, yeah, if you have your routing questions, feel free to fire them along here. I guess
[01:20:14]  one question that came in earlier is have you been looking at the new browser based APIs that could help routing, like stuff like view transitions, stuff like, uh, um
[01:20:24] , URL pattern or navigation APIs? Um, have you, have you checked out any of this stuff? I've looked at URL pattern and your help pattern, um, is
[01:20:34] , is cool, but it still doesn't cover all of the use cases that I need. So I'm not using it yet. Right. Um, but I think it
[01:20:44] 's a, it's a good attempt to rise the tide here. But, uh, let me just kind of walk through here. Oh, trans view transitions. I
[01:20:52]  haven't added support for those yet, but it should be trivial given suspense and all the other stuff that I built around, around waiting for suspense. So, um, I
[01:21:01]  could, I could probably add that pretty quickly. Uh, do you have to define the whole loader? Can it be lazy loaded? You can lazy load the loader
[01:21:09]  if you want. It's just a promise. So as long that you're in a promise context, you can lazy load anything. Uh, react server components are really great
[01:21:17]  paradigm, really cool paradigm to solve some interesting use cases. Um, I think it's being marketed and executed poorly, mostly because there's still no documentation and it is
[01:21:34]  either in it is probably inadvertently being gate kept, uh, by next a little bit, in my opinion, um, because I don't even think they exactly know
[01:21:43]  what the heck you're doing with it right now either. Um, so that's kind of my opinion, but, but RSC is really cool. Uh, the first
[01:21:52]  stable release is coming very soon. I'm just trying to, I'm busy. I have a startup. I have a company that needs my attention. I can't,
[01:22:01]  I can't just sit and work on this stuff all day, but I mean, I am, I am losing it in production at nozzle. So it shouldn't be
[01:22:09]  very much longer before I can cut the stable release. Would you say you can buy these glasses on Amazon. They're just called, uh, maze. Um, there's
[01:22:25]  not a movement going back to component level and fetching because that's just where we've been for a long time. Um, people think that there's a movement back
[01:22:32]  to like the bulk of the ecosystem who has written any reactor client side apps is still doing, I mean, let's be honest, most people are still discovering react query for
[01:22:42]  the first time. There's so many apps that are still using create react app with redux. So let's be honest about where the actual ecosystem is and not where
[01:22:51]  thought leadership is. Um, should I use modals and tabs, use the router? Yeah, you can use the router with those. Um, yeah, you can
[01:23:06] 't regex the router yet, but I could probably add that. Um, the browser, it uses a history, push state and pop state. Yeah. It can
[01:23:16]  also use an in-memory router and there's also a hash base router. And it also has some other cool stuff baked into it that like the history, the history
[01:23:24]  package from like remixing react router doesn't like it will debounce, uh, crazy calls to update the URL. Um, then we'll batch those. Uh,
[01:23:36]  yeah, it's kind of cool. And I think it's actually a little smaller. Um, maybe it depends if I run it through Clojure compiler, maybe,
[01:23:43]  but it's like, it's really, really small. I think last time I checked done before it was much smaller, much smaller, but they do basically the same
[01:23:50]  thing. Um, um, task form is going crazy. Um, so they're, they're doing wonderful things over there. I had a question for you, Tanner.
[01:24:00]  Yeah. Uh, do you guys do, uh, search parameter base matching for the router or is it all like, or like, like, and not yet, but I
[01:24:12]  have all the code in there. It's just comments about it. Okay. I wondered if that was like very complicated because I'm thinking about it, it seems like
[01:24:21]  it's, it would be like just an explosion of combinatorics because now any search parameter could impact any depth of the whole routing tree where you'd have to like.
[01:24:30]  As soon as you, as soon as you start doing search parameter based matching, you have to support parallel routes. Um, and also as soon as you opt into search base
[01:24:41] , search brand matching, you can't use patch matching. Uh, but, but it is very valuable. Um, we can talk about that on another stream if you
[01:24:50]  want. I'm working on a release for 10 sec virtual. It's basically done. I just haven't had time to release it. So yeah. All right. All
[01:24:58]  right. I have anything you want to plug before you drop off, but I think, thank you for answering our questions today. No, you might really, if you use
[01:25:06]  any of my stuff, go responsibly. If you work anywhere that is remotely interested in marketing or SEO, uh, you should like, I don't know, twist
[01:25:19]  whoever you want me to us to get them to use and buy Nozzle. Because if Nozzle's not going well, then my open source isn't going well.
[01:25:29]  So go check it out. Nozzle.io. There you go. Tell it, tell your marketing team SEO team to go check it out. All right, Tanner.
[01:25:38]  Thanks for joining me today. Finding the time. I'm always open to talking with you. I'm sure we'll have you on again soon. Thank you so much.
[01:25:46]  Um, stick on people. We're going to keep people talking about routing by Tanner. All right. Yeah. I mean, remember the other stream he was on,
[01:25:55]  he like, just like snuck in before Milo joined up and I was like, okay, let's just do this. Yeah. Well, it's, it's
[01:26:01]  easy to do with no, no, no preparation time Tanner, um, and myself, we can just dive into these topics because he's been spending a lot of time in
[01:26:09]  these specific areas. And it's, it's interesting. What I like when I talk about to Tanner is because he's very much on the single page app side,
[01:26:17]  like very hard on the client, not just single page app, but the client rendered single page app side. So being able to get his feedback and understanding from that perspective really
[01:26:27]  rounds the perspective out for me, because I've been spending a lot of time, as you know, on SSR and server components and figuring out how to universalize these
[01:26:37]  patterns. Um, and I think, yeah, yeah, exactly. I love seeing describe the running convention you talked about a few weeks ago. Yeah. We, I
[01:26:46]  kid you not, we have not been in contact. He was like, like he was, uh, how should I put it? I missed the clerk hackathon. I
[01:26:56]  was, you know, I, I, I couldn't travel at that particular moment. I had already been the previous week going to, uh, uh, Netlify
[01:27:03]  Compose. And so we did not meet up or anything. And he's just like, yeah, I decided this, this, this, this, and I'm
[01:27:11]  like, man, you wouldn't believe it. If I, if I, if I showed you, um, what part did you ask Henry query params already?
[01:27:24]  Definitely please. Okay. Sorry. Uh, what I meant when I talk about query params routing, it's from matching, like using query params as an ability,
[01:27:31]  you know, have it do updates and typing. And so it's something that we think about, but it's not hard to do. We match on a path and we
[01:27:37]  take the query params and then we feed them through. And when they change what's cool in a signals base or reactive libraries, you don't have to worry about when
[01:27:45]  things re-render a lot of times, like in react type frameworks, if a query parameter changes, you, you're, you, you have this awkward thing.
[01:27:53]  You're like, who cares? Like, do I have to re-render the whole page? Do I, is it just the, like the, the leaf, like
[01:28:01]  the furthest down component that needs to re-render that use the query param? Is it something in the middle? You don't know. Tanner solves that largely in
[01:28:09]  TanStack query by our, sorry, TanStack router by letting you define query params as part of the route definition. Um, which is why he's already
[01:28:18]  closer to there, but he's still doing something which is called, uh, path based routing because, uh, matched routing, because basically we look at the parameters in the
[01:28:26]  path and then that's how we know it's the same route. What query param based routing would be is if the parameter is different, we actually match to a different component
[01:28:35] . But where I said the combinatorics get tricky is it's like, what depth doesn't matter? If you think about it in a sense, um, URLs
[01:28:43]  are hierarchical. Like you you're, they're like resources. You go like users slash ID slash, you know, I don't pick something tweets slash ID. Like
[01:28:55]  they, they go down, uh, uh, like, uh, like you, you're going into a file cabinet, into a folder, into a thing when you talk
[01:29:03]  about URLs. But when you talk about query parameters, they're global, they, the order doesn't matter. Um, like nesting doesn't matter. So like
[01:29:12]  if you, if that's how you decide that this is the component you need to render, it completely messes up. Like now, if you don't match on that
[01:29:21]  particular, you know, query parameter at this curriculum level, you need an alternative match and like a whole separate hierarchy. Like if it's at the root, it's
[01:29:30]  like you have a, you have a whole, you have the root where the query parameter matches and you have the root where the query parameter doesn't match. It completely removes
[01:29:38]  the hierarchy, which means that like for route definition wise, you, you, you could be defining huge route trees just because the query parameter changed. Yeah. I,
[01:29:54]  yeah. I mean, if you went far enough, you could probably make foo one and foo two different components, but I'm, I'm yeah, yeah,
[01:30:02]  yeah, exactly. Right. What I'm saying is with the current routing, they, they can't be, um, like we don't even pass it through our
[01:30:10]  match filters, which is a cool mechanism we have where we like, let you like say like, if this is a number or a string or whatever, query parameters are not
[01:30:17]  in the matching algorithm. We have a scoring system we use to figure out which routes match and query parameters are not part of it. Um, I think at the base level
[01:30:28] , it's this foo one, bar one being like the difference. Like if the parameter is there, but there's nothing to stop it from being foo one
[01:30:36] , foo two in the same way we can, we can define two URLs where one is like slash number and one slash, um, like specific strings and they can match
[01:30:46]  the different components. So like, this is doable right now. They're just not part of the consideration. Once you bring them in, all the stuff's possible, but
[01:30:55]  I'm, I mean, even as someone defining the routes, I think I'd have a lot harder time picturing them, right? Because the query parameter could be
[01:31:04]  the top most parameter or the bottom most parameter. And once, you know, you mismatch, then you'll start hitting 404 routes or like, like, like,
[01:31:12]  because it doesn't exist. It's a little bit, you, if we, if you go there, you really need a route explorer. I'm, I'm
[01:31:20]  very tempted to say that query program based routing is just insanity, right? Like you can, the, the reason you do it is for code loading. You, you don
[01:31:34] 't want to load the components, right? If you, if you don't need it, like in absence of a query match, you'll match on something else,
[01:31:44]  like the part of the string or as far as you can, like part of the path, and then you'll like load a component. And then that component will look at
[01:31:52]  the search parameters and decide which, um, which components it needs to render. It's like, okay, this has foo on it or foo too. And then
[01:32:00]  it'll decide which components and you could lazy load again, but then you get a bit of a cascade. I, I'm, you know, unless you preload
[01:32:08] ed them all ahead of time. So like from optimization, from a loading standpoint, um, it makes sense. Um, especially when lazy loading's concerned to, you know
[01:32:18] , want this query program base matching, if it's something you want to leverage, but like the complexity skyrockets from my perspective on all accounts. Um, yeah
[01:32:33] , I mean, yeah, it, it, it, it, but as I said, you have a lot of, I think the thing is that they just, they
[01:32:42]  serve different purposes. Um, you know, and it's when you try and blur those purposes that you get into this trouble, right? Because yes, query programs are like
[01:32:51]  a state bag. Uh, I like that comparison. Whereas like, um, and they don't have to only refer to the current thing and they can travel with you
[01:32:59] . But like, I think the reason people want query parameter based routing is so that they can do stuff like mode switches, like global, like almost like Lang equals English
[01:33:10]  kind of switches. And honestly, mechanically, those fit better at the front of your URL than they fit at in the query param, but I understand like aesthetically
[01:33:22]  why you might want to do that. What in years do I use? I use, what are they called? CCA. These are CCA C12. all
[01:33:38]  right. But yeah, I want to talk to you guys about routing, right? So yeah, I mean, it's fine. I enjoyed actually answering that question. So
[01:33:50] , um, yeah, if, if, if you do have more routing questions, do shoot them over. Um, but that, that w that was, that was basically
[01:34:00]  the scenario. Uh, I look, let me, let me flip over my screen. Cause I should be sharing it right now. Cause last, if you, if
[01:34:09]  you, if you all remember last couple streams ago, two weeks ago, I was like, Hey, Hey, Hey everyone, let's, uh, let's write a
[01:34:19]  new read me for how solid router could look like. And then, and then I was like, I, I started laying it out. I forget if I had the written
[01:34:30]  the read me, I think I'd written the read me, but then I put an, uh, I ended up putting a, uh, what do you call an
[01:34:35]  RC up, see if some people wanted to give me some feedback. Some people did, which is good. Um, I haven't implemented all of it yet, but yeah
[01:34:49] , to do, to do. Yeah. I, there's actually a lot of really good feedback that I haven't kept up with. I am. I saw the first
[01:34:55]  stuff from a week ago, but it seems like people are still chatting about uppercase, lowercase anchors. Um, the, the, the, the short
[01:35:08] , um, what's the term, um, TLDR on the changes are getting rid of our data functions and going to, I said preload, but actually load
[01:35:18]  functions. Um, and then return lower, uh, case navigation, like anchors and forms instead of capital A, we still will have capital A for, uh, relative
[01:35:28]  pathing and stuff, but just like make the base lighter weight, getting rid of ideas like outlet routes and use router and using stuff like props children and then getting rid
[01:35:38]  of the element, which if you've used react router, you know what I'm talking about. It's just like element equals a component, only support component based, uh
[01:35:46] , route definitions. That's kind of like the high level. Yeah. Yeah. I'm going to get into this a bit because service side routing and client side routing,
[01:35:59]  um, are probably going to be just a spectrum here. Uh, it's important to understand the difference between say like file system routing and like our application routing, like
[01:36:11]  one file system routing, you know, in itself is just a configuration generator. Um, like Tanner was showing earlier, whereas I think universal routing is very much of a topic
[01:36:23] , whether you go to the server, whether you do the changes in the client, whether you do like a hybrid where you don't reload the client, but still have
[01:36:35]  the server do most of the rendering. This is a spectrum. Right. Penny for your thoughts. Uh, just sorry question here from fuzzy. If it, sorry, I
[01:36:57] 've been having stream yards streamer does this to me after a while where it starts getting like glitchy. Um, I'm, I'm assuming people can see what
[01:37:06]  fuzzy put here. Um, based on files based routing, it would be good pattern to place the endpoint config as an export from the endpoint file instead of as a pattern that
[01:37:14]  is applied before the endpoint, basically route TS export config instead of app router. I'm not sure I actually follow what you mean here. Um, uh, most of
[01:37:30]  the time, the reason that we split files is for, um, lazy loading. And the only thing that actually needs to be lazy loaded is the main component code. You
[01:37:41]  kind of usually most of the other config you want upfront when the route, um, is defined. Um, so yeah, what I ended up doing after this, um
[01:37:51] , you know, thing was like, okay, I went in code sandbox here and I think I showed everyone my, my cash fine grain cash store thing last time. I
[01:38:03]  forget if I did. I probably did. I was kind of showing how these APIs could work. Um, yeah, I did. Cause I remember I told everyone about how
[01:38:12]  I was going to pack promises together to make this work. But since then, what I did was I tried to build the next version of the router in a code sandbox
[01:38:23] . And I've been using this silly example forever. So yeah, this is the basic idea. This is all like no file-based, even though I was like using
[01:38:35]  some file-based type conventions to help me along. But essentially I made this example and I'm just going to drop this example here. This is not a final example
[01:38:45] . Not all the features work properly, but you guys can take it out, check it out here. Uh, just, yeah, I showed the, the cache stuff.
[01:38:57]  I remember, but I don't think I showed the, I don't think I showed the router example. Cause this is what I've been doing the last week. Um
[01:39:05] , okay. So I just have a basic config based route set up here, path, component users and notice the load function. Um, and what I did for this
[01:39:18]  setup was I set up a new router, put, um, the component is the entry. Actually, I forget, maybe this path is not necessary anymore. Watch me remove
[01:39:30]  that and it's broken. Okay. Yeah. It's not necessary. And then I actually, I, I, I, if this is the latest, I actually
[01:39:37]  don't even need this. I can just go like this and then, yeah, let's do that. Beautiful. Still works. Okay. Done. So, um,
[01:39:52]  the app, simple app, some links, suspense, wrapping children, you walk around, do stuff, nothing, nothing too big, but what I, I got, I
[01:40:03]  use this as a chance to, um, uh, to basically try out some of these new data APIs that I've been talking about. Um, for example, index
[01:40:15]  page is basic users page. There is create async call for getting the users. And here I made a, I kept the convention of data files, um, next to
[01:40:27]  the thing. And inside the data files, there is the pre the load function, which is literally just calling get users. And then get users is a cash wrap with
[01:40:37]  the name users. And it just fakes fetching users by doing an artificial promise delay, um, inside here for each user, something similar, where again, fake fetch
[01:40:48] ing an individual user. And, um, essentially this get user function is called from the pre from the load function here using the parameters for the ID. And then again,
[01:41:01]  calling using create async, where again, it could just be create async, get user this, but I'm console logging to kind of show the behavior, um
[01:41:09] , of this example. And if I'm right, because I got a lot of console logs, you can kind of start seeing the behavior of, of this. What's
[01:41:21]  really exciting about these APIs I've been building is the cache is actually a store under the hood, which does fine grain diffing. Um, I showed this last week where
[01:41:33]  it we're updating the, like, we're updating the, like, if I go in here and this is a to do list and this is not completely what's
[01:41:48]  going on here let's get console. No, I wanted to inspect something here. Let's inspect. Yeah. Yeah. That's why I need the scroll over here
[01:42:04] . There we go. If we're, if we're in here and we're looking in, we have div div, these are our two lists and I add an item
[01:42:10] . It adds it to the end. Obviously nothing else gets removed. If I go make this demo and I blur it, what you're going to see here is that while
[01:42:24]  this, the fields updated here, because I put disabled on them while they were in a pending state, nothing else collapsed. Um, it did not, it did a
[01:42:33]  fine grained data diff and did not, um, did not replace it, even though I am getting, you know, new stuff from our servers. So the cache APIs
[01:42:43]  do granular invalidation with a store, which is kind of cool. Right. Um, Oh, did I, did I break the other example here? Let me look
[01:42:57] , I think, yeah, I don't need the route here. Okay. Anyways, nevermind. Um, so I took these cache APIs and applied it here.
[01:43:09]  So now when I, when I hover over user, you'll see fetching user list. Right. And then when I go to user, I will see my lovely user
[01:43:19]  list, which has a bunch of users. Why does it have so many users? Well, because inside the user's data function, I set an interval that every two seconds
[01:43:29] , it adds a new user just for fun. And the reason I did this is some of my earlier experiments had some problems because what I would do is I'd sit
[01:43:36]  here and then I'd, I'd hover over it and it'd fetch the user list. And then suddenly we would see the new users show up here and you'd be
[01:43:45]  like, Oh, that's odd, isn't it? Um, and I thought it was very jarring that every time I did a fetch, see, it doesn't
[01:43:55] , it only, the fetch cache here lasts for five seconds. So it's not fetching. Oh, there it did. But what's interesting is obviously when I
[01:44:03]  go and I come back, um, it didn't fetch again, it just ran it and you'll see all the new users here. Um, so here it's been
[01:44:10]  five seconds when I do it here. Now you'll see it both fetched and ran the create async and you'll actually see 22 users now. Um, but what
[01:44:19] 's fun about this obviously is that I can do that. I can fetch the list. Now I got four, I can go back and forward. It's been more
[01:44:31]  than five seconds, but our back cache lets us keep it good. And we still got four. Although interestingly enough, if I go here and I hover and it fetches
[01:44:42]  again, well now there's a few more in here. So the backboard cache does get invalidated along with the, the, the like main, um, you
[01:44:53]  know, like the it's like the main cache granularly invalidated. But, um, in general speaking, we, we're only going to show you the new
[01:45:03]  data on a navigation and this is important because I'm going to go in here into a specific user. And one thing that I noticed about this pattern that's a little bit
[01:45:14]  different when, when comparing it to like hoisted, like remix or solid router data thing is each of these routes are kind of independent. So you're kind of tempted
[01:45:27] , you're way more tempted to, to, to basically you fetch in the components, right? Which means that if, if I needed while from this top level user,
[01:45:38]  I could literally take this user sticking in a context component. And then like this about, which is the index or the settings or whatever could just use the context to use the
[01:45:49]  same user. I'm just being lazy here. And I'm going to, I'm going to like have them just call the function themselves, get user this. I
[01:46:00] , as I said, I could use context, but they're going to each sub page is going to also call get user. So parent page. So yeah, let's
[01:46:11]  call it parent because layouts are fictional. Okay. Um, so parent calls, right? So if I land on the about page, I fetch user one and then parent
[01:46:24]  user runs one and main user runs one, we don't fetch again, we only fetched once, but you see them both, you know, getting the same user.
[01:46:32]  And this is kind of, this is expected, but what's kind of interesting is with these data fetching, um, setups, you end up fetching more often because
[01:46:43]  when in the past, if you, if you, or if you use context, if you switch between tabs, you're not going to fetch the user again, because
[01:46:49]  you already have the user. But in this case, because I put it local kind of, as I said, this could be react query, but in this case, I
[01:46:58] 'm using these data cache APIs that are shipping with the router, but you could picture right now, these same patterns would work with react query. We could go inside here and
[01:47:07]  go, you know, preload function, ensure query in here, use query. Like this is going to work exactly the same. And then you don't even have
[01:47:17]  to use any of these things. You can just use, you know, solid query. I just felt that we needed a default so that people could get started. Um,
[01:47:24]  you know, like without me necessarily pushing a third party library, you might not want to use. And, you know, this has very basic, uh, capability.
[01:47:34]  It's not swr. It's not like stale world invalidity cache. It is simply like the preload cache only lasts a couple seconds, um, back
[01:47:43]  cache. For the most part, you're fetching data fairly often, but let me show you what, what, how this ends up working. Cause if I go here
[01:47:50]  and load users and load here, when I switch the settings, you're going to see that I didn't need the fetch user again, because it's still in the pre
[01:47:56] , like it was fast enough. And I got running setting users. So parent, main settings. Now, if I go back, main is actually about, maybe to make
[01:48:03]  this clearer, I'll call it about, let's call it about. Let's see this again. Okay. So I get, and now I go back to about
[01:48:09]  nothing happens, but if I wait long enough that the preload cache expires, which is pretty quick. And I go here, when I hover, you see, I
[01:48:16]  fetched user one again, when I go again, nothing updates when I fetch user one, but when I go here and it runs, um, them, you'll see
[01:48:25]  it actually. Yeah. I waited so long that I had to actually fetch it again, but it ran both the setting and the parent user on that navigation. Let me
[01:48:35]  show you one more time. What I'm what I mean. So settings page, wait long enough for it to expire about fetch, click into it. And then you see
[01:48:43]  it runs both about and the parent, um, when it navigates, because you don't want inconsistency. If you know that you updated the cache, like on
[01:48:54]  hover here, and then you navigate, this could have been updated. You want to make sure this is updated as well. Whereas previously, if you use context, you
[01:49:04]  know, that settings wouldn't have been refetching it. So you would have had the same thing to be consistent. I just, it's a subtle difference, but
[01:49:10]  I noticed that this is actually one of the key differences between these cache-based routing is it encourages people not to use context, which does lead to more regular fetching.
[01:49:20]  I don't think it's necessarily a bad thing. It's just something to keep in mind. Yeah. So what you're seeing here is prefetching on link
[01:49:29]  cover. See, um, if I go here, it was actually fetching. If I went here, fetching user list, click here. There we go. Like
[01:49:38] , so what's cool about this approach for solid, at least is we used to build all this reactive stuff inside the load loader function, cause you'd have to
[01:49:49]  return it. Now that we don't have that problem, calling this load function as many times as we want is trivial. So I was able to implement link prefetching
[01:49:59] , right? So this, this is, this is fairly straightforward. And one of the coolest things that I got to see from here was that I went in and I
[01:50:09]  was like, okay, well, let's, let's update solid start. I'm working on solid start beta two. And I, I went into the hacker news example
[01:50:16]  and updated it. And something that I'd done recently that I was talking about was having, instead of export const route data, having go export cost route, and then putting
[01:50:29]  a data function on it, basically any single route parameter that you want to send to the router that from the file system, you would just tag on here, match filters
[01:50:41] , whatever data functions, you could just tag on here. So we'd still, we still export a default export for the page because that gets code split. And that's
[01:50:50]  like the component. So it gets bundled separately. That's what the separate export, but any other route config that you want, you know, available as part of the
[01:50:58]  route definition, you just add to this export const route, which is great. But what was even greater was when I updated between this router and the new one, I
[01:51:10]  just went in here and replaced data with load and went satisfies route definition, like change the typescript for it. And then, you know, updated the APIs. And that
[01:51:21] , that was it. Like, technically speaking, the new version of solid start can support both the existing version of the router and the next version of the router. Um
[01:51:32] , because it's router agnostic, like, because the core part, yes, maybe inside the, uh, let's like, look at the file tree, like
[01:51:43]  hacker news. Like if I go into the entry point of our, our app, um, you know, let's just look at the code. I'll show you what
[01:51:50]  I'm talking about. Let's, let's look at, uh, solid start like a hacker news example. If I go into the entry point of our application here
[01:51:58] , let's pull this up a little bit. No. And go to the app TSX. The router is in your code. If you don't include the router
[01:52:10] , then you don't use the router, which is awesome. Honestly, I, I, uh, the base solid start project now is 5.7 kilobytes because
[01:52:21]  the router and the meta and everything is optional is optional. The only thing I included is the default error boundary. And all we get from solid start is the file routes
[01:52:32] , which we pass in here. Um, nothing else here actually needs to come. Right. Like if I actually have a project in here called, uh, let's
[01:52:45] , let's go back. Uh, that's hacker news, but bear. Yeah. Look at bear. Here's a new bear solid start project. There's no router
[01:52:53] . There's entry server, which is just the HTML, like the index.html written in JSX. Probably never touched this entry client, which is literally just the
[01:53:04]  like render call, the mount call. So basically you get a new project. What you really do is you start an app TSX and and app TSX is just,
[01:53:13]  I just put a counter on a page, right? Put a counter here. There's nothing else. There's no suspense. There's no router. There's no nothing
[01:53:23] . And if I, if I make this silly example here, example bear, this has very create react app vibes or like Vite basic template vibes. Cause I'll just
[01:53:36]  go in here and I'll open up the good old localhost 3000 and yeah, there's nothing to it. Just a thing that does, but actually this is server
[01:53:45]  rendered cause the, and there's no router. So if I go garbage here, I'm still going to serve the same page because there's no router to make it any
[01:53:52]  different, but, um, essentially it's just a, it's like it's CRA equivalent with SSR. Yeah. So yeah. I mean, you, you
[01:54:11]  could choose, you can be like, I don't want to use solid router. I don't like it, you know, whatever. In fact, if you, if
[01:54:18]  you really want it to be CRA, we just go in here and go SSR false. And now if we do that, I believe, and we look here, did
[01:54:32]  I break it? What did I break? Let's, let's see. I've actually tried this for a while. Let's see. Maybe. Okay. I
[01:54:40]  broke it. Okay. I, something I should double check here. What's the error. We'll worry about the error later, but that's, that's essentially failed
[01:54:54]  to import Vinci routes. Okay. Yeah. I probably never tried the, I feel like I did try it, but we'll, we'll, we'll,
[01:55:03]  we'll take a look at this again. Um, I, I'll take a look at this again after, but you get the point. It is literally just, just
[01:55:14]  it. so, uh, sorry, it's stream yard is being really annoying for me. Okay. Just give me two seconds. I'm going to refresh my page
[01:55:34] . Sorry about that. It was just killing me. So brutal. Uh, let me share my screen again. There we go. Yeah. So I, oh
[01:56:08] , I wonder, I wonder if it's cause I went to some, it's because I went, it's cause I went to an, maybe it's because I went
[01:56:16]  to let's try that again. Maybe it's because I went to a page that didn't exist. No. Okay. Fine. I swear this was working the other
[01:56:26]  day. Anyways, it's fine. Let's not worry about that right now. But my point is that with, with a simple switch of SSR false, yeah,
[01:56:32]  it would be CRA. So yeah, this is, this is a, this is a, this is very cool baseline because then, as I said, adding a router
[01:56:46]  is just up to you and all it, if, if your router has different options than my router, well, you just, you basically just set them in the, in
[01:57:00]  the route config. So in here, when I went to, let's go page. And I just was like, okay, satisfies route definition. I know this is
[01:57:11]  a little bit tedious from a TypeScript standpoint to say like what the route definition is, but this is because literally the router could be anything, even if it's not there
[01:57:20] . All we have as a convention is default export, lazy loaded component, route, route definition. And in this case, our route definition tells us that we can load stuff
[01:57:31]  so that we have a prams object and you know, we can call get stories. And yes, I, I get, there's some reputation, repetition here because
[01:57:40]  get stories is called here and here once in the create async call once outside of the create async call. Michiel's here seeing stuff break in real time,
[01:58:08]  delete and install node modules allowing splash and work. Okay. Okay. Okay. Okay. Okay. Okay. All right. All right. Let, let, let me,
[01:58:16]  let me, let me, let me, let me do that. I'm going to take the global node modules. I'm going to move to trash. I'm
[01:58:23]  going to go into examples and make sure these node modules are good. Gone too. Just, I don't have that many. All right. Let's just try this ago
[01:58:38] . I think he'll saves the day again. Yeah. Yeah. Okay. So there is a duplication, but the truth of matter is you could skip doing this
[01:58:50] , like Tanner was saying, and just fetch in the components, um, especially with preload. Cause you're going to preload the code splitting anyways. So it's
[01:58:56]  like not a, that big of a deal, but this is nice because you can preload the data too. Um, okay. Let's, let's, let
[01:59:03] 's try one more time. I'm, I'm suspect unless, you know, something that just broke like the other day. And, and this is so you can.
[01:59:16]  Yeah, no, I, I, I suspect, I suspect there's more going on. Actually, no, this does look like your error. Uh, yeah,
[01:59:35]  well, whatever. I'm just not safe the day again. Well, I can, I, I know that the hacker news example works, so we're just going to
[01:59:46]  get to the hacker news example. Okay. Yeah. Beat five did come out very recently, but what I just want to show is like, let's get this going
[01:59:57] . Got streaming. See that loading in with the streaming. And then we have, ooh, preloading. Ooh, which is nice. Makes pages backcash instant
[02:00:14] . I love this because that's, that's the, the guy link. Sorry. I love this because you can go in here, right? You can scroll down
[02:00:26] , find this one. And then with the backcash, girl restoration is just like a guarantee. You know what I mean? Like you just don't have to worry
[02:00:36]  about this kind of stuff. Do, do, do, do, do. Anyway, like not, not too much fancy here. I just wanted to show that this,
[02:00:46]  this, this stuff works. Obviously most frameworks have preloading and have these kinds of mechanisms. What's key about the new APIs is they, they will work still
[02:00:55] , even in other scenarios. Obviously you need client routing to leverage the preloading. Um, but if I went into, uh, say hacker news here and then
[02:01:07]  just change, I was like, okay, let's, let's go islands. True here. Okay. Like we're not going to get the link preloading
[02:01:22]  right now. Cause there's, there's no router on the client. I think like, but yeah, you can't tell in dev node. There's way too much
[02:01:29]  JavaScript in dev node. But what I'm getting at is like the same API design will work even in MPA mode. You can see it's doing full page reload
[02:01:38] s right now while I'm, while I'm moving around. That's why that's linked, but you know, this is islands mode. Um, so like these data
[02:01:49]  APIs will hold up. Uh, it's going to be a bit longer. We get like our server component type solution in, um, our hybrid routing islands, because we
[02:01:59] 're pulling this logic back into the router. But I just wanted to kind of show that, um, I think the development experience for this is, is acceptable. Um
[02:02:11] , and if not actually good, because it actually makes the code inside the components less because you are literally going in here and you're like, like, yes, there's
[02:02:23]  duplication here, but everything else actually shrunk down considerably here. If you look at my, my diff that I was showing, uh, in fork earlier, like
[02:02:32]  hacker news stories, there's actually like, obviously I changed the capital A's to lowercase A's and little things like that, but it's actually much tighter.
[02:02:42]  And the reason is I pulled some of this API processing stuff, which I could have pulled up previously into, um, this fetch, um, no, sorry, this API
[02:02:53]  call, um, scenario here where I've set up kind of my data layer. And what I'm, what I love about, um, the new APIs with cache
[02:03:03]  and action is they encourage you to pull the stuff out because you want this identifier to be global. Why do you want it to be global? Because of TypeScript. This
[02:03:13]  is so lovely. I didn't talk about this before, but if you remember in the old setup, um, you'd go in and you'd be like, type up
[02:03:22] , use route data, type of route dot data. You know, this kind of garbage to kind of get the TypeScript well, with a direct imports, you don
[02:03:29] 't have this problem instead you just like, what are these? Oh yeah. It's a stories array around defined. Do you know why? Because get stories returns us to
[02:03:37]  promise the stories array, create async passes it through. And now you're, you're flying. Right. So like, like this, you don't have to like
[02:03:50]  do that weird type of inference. As long as you import the function with the right types, then it goes in right now in this version, we didn't inline
[02:03:59]  the server functions. The there's just a use server on the top here. Sorry. This example is also using server functions, um, as well. Just, we just
[02:04:07]  put it at the top of the file. Um, there was an issue with inline ones. Um, so I, otherwise I could have put the use server call like
[02:04:15]  inside here, but it doesn't really matter. Um, you, you get the idea that a lot of this just encourages you so that when you go into the active
[02:04:24]  components, um, You know, this is your data fetching story. And I wanted to show you the islands mode because this component basically goes from being a client component
[02:04:37]  here to a server component. And it uses the exact same data fetching paradigm. It's not like, Oh no, now I have to do a wait and do something
[02:04:44]  else. The cache API is the server functions. Everything works on both sides. So there's no real point of differentiating based on the, the data of here.
[02:04:52]  Like I switched to islands mode. This is now a server function, uh, server component essentially. So like, this is, this is like, I'm seeing the pieces
[02:05:02]  come together. Yes. Route load is not reactive and it does. You can't return anything. Right. So this just warms the cache on preload and stuff
[02:05:19] . So like, um, it's interesting though, cause we, we can, we can, we can play some games here. Right? Like I actually did a pretty
[02:05:28]  good implementation of all these primitives, um, on the, I haven't finished the action size, but on the side. So like, if I remove this,
[02:05:38]  the preload and the, or the load function, it's not like this doesn't work anymore. We, we're not, Oh yeah. We're getting preload
[02:05:48]  for that one, but we're not getting preload for this one. Like these are the same type of page. This is a different page, but now, yeah,
[02:05:55]  we, we, we're not getting the preload. Right. But we are, we still have the cache, you know, but you can turn off the preload
[02:06:02]  on a per link level, but I'm showing you can also just remove the. thing. And because if we look at the JS, let's look at the JS
[02:06:08] , uh, you know what, to actually look at the JS, let's, uh, let me change this to, uh, build mode, right? Let's go
[02:06:16] , let's go, no, no, no, let's go to hacker news. Let's build it. There we go. Nitro, shoot that stuff out.
[02:06:28]  And then let's go node. Apparently I have not done this one. Okay. node examples. Um, hacker news. What is it? Dot output server index.
[02:06:44]  MDS. It's good. Good thing to make easier for people in the future. Note to self. But what I'm getting at is now we're using the
[02:06:51]  actual, oh yeah, I have a bunch of freaking extensions here. Let's not worry about the extensions here. My point is when I hover over this, you see the
[02:06:58]  code load, right? For the, for the next page. But so, see all good code load, good code load. My point is that once the code loading
[02:07:14] , you're not really having a waterfall here anyways. Like the biggest waterfall is the code loading. So you might be going, okay, well, why even have these
[02:07:23]  preloaded functions at all? Well, nested routes. Even if you could fetch at the top level in your component, the, the routes end up forming a
[02:07:32]  hierarchy that render each other. So if you have some data here, stories, and then you go, don't show the children until the stories are loaded. Well,
[02:07:41]  you've created a waterfall. If you do your data fetching purely in your components, this is just hierarchical consideration. And while it's possible to parallelize pieces of
[02:07:52]  this, you know, especially from a server component standpoint, you can't from a client component standpoint, and you can't on initial render on the server. Because context
[02:08:05] , so preloading or loader type patterns are a real thing. But what is cool is I wanted to just, I mean, I can take this to a further
[02:08:14]  extreme is I can go in here where this API is and then to be like, okay, you know what? We're not even going to use the cache API. I
[02:08:20]  just want to show like, if I'm naively just using this and I'm not going to use the cache API and I'm not going to preload and I'm
[02:08:27]  just building a single page app. All right, sorry, I'm not in dev mode anymore. I'm in build. Let's go back to, let's go
[02:08:41]  back to dev mode. But what I'm getting at is, it's going to still work. And because of preloading of the link, I'm going to
[02:08:56]  still get the code pretty fast. I'm just now data fetching. Notice it still didn't data fetch initially. This is because we're using resources under the hood.
[02:09:06]  Actually, it's more than using resources under the hood because I did it. I'm just, I'm going to, I talked about it theoretically last time, but
[02:09:17]  I'm actually going to show everyone what I'm talking about. I did it. This is, this is the horrific moment that you've been all waiting for. Create as
[02:09:25] ync. Check this sucker out. Create async wraps create resource with this one little wrapper function. And then this wrapper function patches global fetch and patches global promise.
[02:09:46]  I did this window doc for TypeScript. I can probably remove it for a couple of bytes. It doesn't really matter much. But if it's on the server or
[02:09:53]  it's not hydrating, just run the function as normal. Otherwise, patch global fetch and patch global promise. Run the function. Finally, restore global fetch and global promise
[02:10:04] . And with that, without using cache APIs, without using, you know, preloading or anything, we still have hydration working properly. So, yeah, as
[02:10:15]  a base API, this, this actually funnily enough works. So, yeah, I mean, there's, there's a lot of power here. Yeah.
[02:10:34]  Yeah, we're, we're, we're, we're patching it for a few milliseconds. That's the easiest way to put it. Just long enough that we
[02:10:42]  can track reactivity asynchronously and throw away any promises. Um, but it works. The stuff we talked about two weeks ago, I went and I implemented it all.
[02:10:54]  So we're coming along quite nicely. So solid start beta two is getting close. I need to test actions. I'm working on auth examples and to do examples next
[02:11:05] , but you can kind of see this patterns forming and these patterns will form, um, quite well, um, in terms of relation to stuff like, uh, uh,
[02:11:18]  server components or hybrid routing, whatever you want to call it in the future. So, uh, yeah, I dunno, I'm pretty excited about this because I feel
[02:11:27]  fairly confident now that I can present this API to someone. And all right, there we go and you'll be able to basically do, it's, it's a
[02:11:38]  universal routing, uh, uh, and data loading thing. And the, as I said, beautiful part about this is don't use my cache, replace this crap,
[02:11:49]  put tan stack query in, and it will work just as well. Right? Like this is, you know, I was hoping that I would, with talking to Tanner,
[02:11:59]  I'd figure out the secrets to TypeScript, um, so that I could do better stuff. And his code generation makes me believe that it is possible to do it
[02:12:08]  for the file-based routing. However, this lowercase anchor for, for, uh, href completion might actually be, um, problematic. I'm starting to
[02:12:22]  realize, um, which is kind of like an interesting world to live in where you're, you know, we've been trying to get away from, like, my favorite
[02:12:32]  thing about this example is that you've been seeing is other than the types that I'm getting from the router here, um, that I need for, like, I'm
[02:12:38]  getting for the props for the page or for the route definition. CreateAsync will eventually be in SolidJS, like, this is a prototype for the V2
[02:12:46]  Solid primitive, I'm not putting in Solid today because I actually want to get the proper CreateAsync, uh, propagation going where you won't have to null check anything
[02:12:56]  anymore, um, or at least things outside of effects. Um, so I, I do want to get it, but if you, what you're going to notice here
[02:13:03]  is, like, we're never importing stuff from the router or SolidStart pretty much at all. Like, it really feels like you're just using Solid and the libraries
[02:13:13]  that you use. Like, this is, this is, this is a drastic simplification, um, and, you know, like, yeah, it's, it's
[02:13:22]  very cool to see all the pieces come together. Yeah, you can always do that. Yeah, I, I just, that's, that's not a drastic simplification
[02:13:35] . I, I'm just, I'm, I'm hoping that, like, these things are just, like, I, this is already nicer code. I'm
[02:13:43] , I'm really liking this abstracting the, the API thing. As I said, this is an used server. You just, like, set up your API and make
[02:13:51]  a few used server calls, wrap them in cache, you know, and then, like, you're, you're off to the races, right? Preload them
[02:13:59] , use them where you need them, and everything kind of handles itself in a fine grained way. You know, even when you do a router reload, it's only
[02:14:05]  going to be the piece of the data that changed that upgrade. You don't re-render the whole page. Like, you know, it depends. Like, obviously when
[02:14:13]  you get to server component type scenario, we'd be doing it, um, like doing more pieces coming in. But, like, the API should hold up, which
[02:14:22]  is really exciting. Yeah, yeah. I mean, TS can take its time. I, even in a big, a project like this, sometimes working on solid start,
[02:14:33]  I start seeing, like, TS choking up. And I imagine you get, which suggests to me that people who have actual really large projects must, uh, you know
[02:14:41] , hit this way more often than I am. But yeah, I don't know if I, minus Tanner's, like, very powerful completions, which I'm very
[02:14:50]  interested in. This at least gets us to that nice level where you just import a function and get the types and everything works for both data fetching and for mutation.
[02:14:59]  Well, mutation's an interesting one because forms and form data is, it's kind of awkward. Um, we'll, we'll talk about that a little bit more in
[02:15:08]  this week in JavaScript because I think there's some good topics, um, that we're going to talk about. Most of them are outpaced. So I think we're
[02:15:15]  very on stream. I just wanted to showcase the progress here on solid start and showing you that, like, the, the, the pieces that I need, um, I
[02:15:24] 've actually started releasing, um, uh, I, I need to do another release. For it to actually be working right now. But if you, if you look
[02:15:32] , there's a 0.40 alpha zero out and hopefully an alpha one out. When I do that next release, people will be able to start playing with, uh,
[02:15:40]  solid start beta two. Um, it is coming now. I'm, I just, I knew I needed to solve these things. I just need to, when I,
[02:15:48]  I need to re-implement a few of these examples from this to-do folder. And then we are, we're off to the races. I think the
[02:15:54] , the, you know, basic stuff is coming together quite well right now. What does create a sync does? It's basically a simplified version of our create resource.
[02:16:06]  It's a primitive that goes promise into signal, which is super powerful, um, because it works with suspense and it, um, yeah. This approach is much more
[02:16:21]  composable than what we're doing before. Yeah. Uh, no. Create resource is going to, it's going to be the other way around. Create async is
[02:16:33]  going to become the primitive. We ship with solid and create resource is going to get shipped off to like legacy and you'll just import it from there and you'll still be
[02:16:40]  able to use it. And create resource will be a wrapper around create async. So like, unfortunately right now create async is much simpler and actually create resource has
[02:16:49]  a bunch of stuff. And then we actually are wrapping it. So you actually end up with more code in the future, um, create async will be the simple core
[02:16:56]  piece and then create resource will be the thing with all the extra code because it has all this extra functionality as it goes off into its deprecation path. Well, I
[02:17:04]  started thinking about this a bit and. Solid start is a meta framework, in a sense, like that's what we're building it towards. I always say that it's
[02:17:18]  not a meta framework, in a sense, but I realized that like, I wanted to keep solid being the library. And there's this tension here where react is kind of
[02:17:27]  doing both, we're just drawing lines in a different place. I, I started from a place where I wanted to make sure that the router and its core solid were very
[02:17:35]  separate. Whereas react started from a place where they wanted to make sure that the router. Yeah, I don't know, it's a tricky balance to kind of find
[02:17:45]  the right primitives. This is why this has been taking so long. Because right now, I have this pattern, I validate stuff further from the core as possible, and
[02:17:54]  then get closer to them. And I think that's, that's basically what's what's going on here stuff started and start now it's going to the router, will
[02:18:01]  it get to core? Probably, but maybe in a different form. I don't, this, this is, yeah, I knew though that I, because we weren
[02:18:08] 't going to have create route data and create a action dollar sign or whatever, all that stuff that I need to make sure that I had the right APIs. And this is
[02:18:16]  what you're seeing here. All there's not going to be like create route data, create resource, create a bunch of stuff. It's just going to be create as
[02:18:25] ync. And then for the actions, you know, just for the action API, that's the direction we're going. I'm getting, we're just axing all
[02:18:32]  these extra primitive wrappers by just coming up with a better, more composable base primitive. This, this create query, sure. From, from TanStack,
[02:18:40]  but you're getting that from TanStack. You're not getting that from me. So yeah, solid is a library completely, right? Like, uh, that
[02:18:56] 's the thing. I, I'm, it's a collection of things. This is a more opinion-related way of putting things together, but it's not necessarily the
[02:19:06]  things that you put together. It's just giving the basis for like putting them together. Solid is a state of matter. Thank you. Okay. Okay. So,
[02:19:17]  okay. This is pretty cool. I'm going to keep on working on the action stuff next couple of weeks. We should start being able to play with solid beta too.
[02:19:25]  Um, looking good. Um, I do have one other thing that, you know, I wasn't just twiddling my thumbs here. I, I was,
[02:19:33]  I w I wrote, uh, another one of my, um, long, uh, uh, little blog post things. I'm just gonna, it's not that long
[02:19:45] . I'm going to post it here. Don't, you don't have to read it right now. I'll actually summarize it pretty well, but all I'm saying
[02:19:51]  is I feel a little bad. We were at the end of last stream. People are like, check out fresh 1.5, right? Fresh 1.5.
[02:19:59]  Right. And I was like, I was like, I got partway through and then I got down and maybe it wasn't last stream. Maybe it was a couple of
[02:20:08]  streams ago. And I got down and I read the whole thing. And then I'm like, I closed my, my screen. I was like, you know what reacted
[02:20:15]  so far ahead of everyone. We should just go home or something like that. And I think I was not fair to fresh here. The more I thought about it,
[02:20:32]  the more I realized that they are onto something. Um, and not necessarily the way they're doing it, but this, this is, it's very nice that they
[02:20:44] 've come up with a primitive. See the, the problem is that HTML partials as an API primitive are broken with global state, unless you handle them properly. And I
[02:20:58]  just saw this and I was not seeing that handling, right? It's the reason why just adding view transitions to Astro doesn't solve the problem. Why like we're
[02:21:07]  entering into a world of pain right now with islands frameworks and actually the only solution that actually solves it properly is react right now with server components. But I think the concept
[02:21:20]  here is very powerful. Their idea of defining partials as a primitive, right? Because partials are your lakes, so to speak with you, if you know my terminology
[02:21:36]  for stuff. So the idea of having a component to define lakes and another way to define, define client entry points is super, super powerful here, right? Because they
[02:21:52]  have this whole thing where they're explaining that you can like tell links to go to separate endpoints, like do the whole like, uh, HTMX thing, basically
[02:22:00] , where you're like, oh, if you hit this link, it'll go get this data from here. And that I don't like any of that. Honestly
[02:22:06] , you want to centralize your HTML APIs, from my opinion, because you want consistency. You know, if you update, I was looking up at HTMX,
[02:22:17]  I was like, oh, if I click a button, I have to update six parts of my page. How do I do that in HTMX? Is there a
[02:22:22]  way to do that? I found a semi old GitHub issue that said the answer was no, or that you have to do this other thing. And I was like,
[02:22:30]  okay, whatever. But if you instead view this mechanism as just a way of handling insertions, and like a mode, this is kind of what server component mode is
[02:22:44]  in an HTML framework, what if your render to stream or render to string call just said, partial is true. And then what it would do is it render and then it
[02:22:55]  skip everything outside of the outermost partials that it renders, and just returns those partials. I know that you know, and then all you'd have
[02:23:05]  to do is have a router that based on a route diff, and maybe it knows this because it's in partial mode or whatever, it can just go, oh, I
[02:23:12]  actually only have to render these sections. And then those become the outermost partials that then get swapped. So you could start seeing that if you had a primitive for
[02:23:21]  partials like this, you could build a router on it where the router itself was a partial, and each route outlet was a partial. And then the server could just like
[02:23:31] , it's basically how the hybrid router that we built last year worked, but it's now at a primitive level. So if you could understand what a partial is,
[02:23:40]  then you could build the router on top of that. And I think that is compelling, because if you look at the API of the router that, not the form action
[02:23:52]  here. The router. I'm trying to snot this one. Let me go to the readme. That's probably the easiest place to see it. Yeah. If
[02:24:06]  you look at the API here, it's designed very specifically. There's a reason the router takes the route path directly. And even that the app itself is into the router
[02:24:15] . It's because when the program starts, the router hits the entry point, which means it controls exactly what renders, we can come in here and go, Oh
[02:24:26] , we just switched from, you know, user ID one to user ID two, we the router has all the route definitions, it can just go straight to the section that
[02:24:37]  needs to render, and then render that partial. And because the partial is router depth three or whatever, the client equivalent will go, Oh, I've routered up
[02:24:48]  three, and it'll just swap the partial and then do the appropriate behavior. So, yes, I was premature dismissing fresh on this because this, not that stuff,
[02:24:58]  but the core of this is a very good idea because if you combine this concept of partials for as a primitive and the concept of, um, use server essentially like
[02:25:11]  our sort of use client, like, uh, like basically hydratable serializable JSX, sorry. I skipped ahead of it, but like pretend. Okay.
[02:25:26]  Yeah. I did skip one part of this. The other part is pretend you have a function that returns JSX, like a server function that returns JSX in, in
[02:25:38] , well, actually, I can probably show this in the solid playground. Can I show this in the solid playground? Yeah, no, let's, let's reset editor
[02:25:47] . Okay. This function returns JSX. I don't care that it's a component here. It's, it returns JSX. What does the function that can
[02:25:55] , uh, that returns JSX returns? It returns SSR template, SSR key escape, whatever. Okay. So it calls this SSR key on this template,
[02:26:08]  which is a bunch of strings. It generates a special type of object that tells us that it's a template. So if we have a function and we get that special
[02:26:18]  kind of template, we can assume that if this HTML is coming from the server, that it is not a client entry, it is a server entry and that any client entries
[02:26:31]  would have to be found underneath it. So from that perspective, if we could serialize this known object for us, which is an SSR node, essentially a template into
[02:26:41]  something that auto creates that serializes in something that auto creates the DOM nodes, um, on the client and then on interaction or whatever wakes up the islands inside of it
[02:26:52]  purely from a serialization standpoint, it's possible that you could see that the combination of sending back partials and serial serialized JSX that auto wakes up the islands that
[02:27:03]  you basically have the whole server component mechanism based on HTML, just based into a serialization mechanism. So reason I'm laying this out is this is exactly what we're
[02:27:14]  using the Chrome money on, uh, for the Aurora project. This is what Alexis has been working on. That's why he spends so much time on serialization is because
[02:27:24]  we are working on a mechanism at a serialization level to handle basically this idea of HTML that can create islands through APIs combined with, I think this is the missing piece
[02:27:41] , this idea of partials as a primitive to build things like routers. That's what the solution looks like. Why can't we switch to Vue, presumably the
[02:27:52]  best framework at this moment? Um, sure. I mean, I think Vue might be more compelling after they finished Vue Vapor, um, for me.
[02:28:02]  I mean, here's the thing. When you talk about, when you talk about like framework, uh, things, these things keep on moving, right? Uh, so
[02:28:12]  like, like, yeah, I don't even know. Yeah. It's interesting. I, I actually, I think, I think, I think React might still
[02:28:27]  be the best framework at the moment from my perspective. Like they, they, they took a really big jumpstart. Like before they dropped server components and started getting that going
[02:28:40] , I might've said that they had lost out to others. Um, but it's hard. Like everyone's catching up in different ways. React needs to catch up
[02:28:48]  on client. Their, their client stuff is not very good. Vue needs to catch up on server. Um, so it's like, it's interesting and client actually
[02:28:57]  a little bit, but not as much as react. Um, yeah, I don't know. Yeah. It's interesting. I think react is actually currently a few steps
[02:29:09]  ahead of everyone else, except for on the client rendering. Like if I was building a single page app, um, it's so hard. React's like snug,
[02:29:19]  snug right in the middle. Like if I was bringing an e-commerce site, I wouldn't build, use react. But if I was building a single page app,
[02:29:24]  I would also would not be using react. So actually I don't know what I'd use react for. Nevermind. Um, but they're like good in the wid
[02:29:33] est range. Like, like they're very good across the board where I can't say that about most solutions. They have the widest good range right now. Yeah
[02:29:48] . I mean, yeah. React does cool stuff with streaming. The interesting thing is, yeah, I'm not even gonna talk about Marco right now. Nevermind or solid
[02:29:57]  react was kind of late to the streaming, um, thing, which is still earlier than half the frameworks. Yeah. Let's not worry about that. Anyways, where
[02:30:08]  I was getting to is that, um, this is, this has more promise than I gave it credit for. And I just, I wrote down a bunch of my thoughts
[02:30:16]  on that. And that's really what I wanted to kind of get out there. Cause I think I did not give fresh, um, enough credit. Cause yeah, as
[02:30:23]  is what they showed there. Yeah. I, I'm going to, I stand by what I said before, but I think they're thinking about things in the right way
[02:30:33] . And it's always nice when I'm like spent so deep in a problem. I think it's so complicated that someone can come out at it again from like a
[02:30:40]  simple, simplistic standpoint and then be like, Hey, let's just think in primitives again. So yeah, I, I, uh, I'm, I'm,
[02:30:51]  I'm pretty, I'm pretty excited about, um, where the setting and the, the path forward for this stuff is all get, has gone much, much clearer
[02:31:03]  over the last couple of weeks working through these prompts space. It's just a matter of implementing it, which is, um, why I've been very heads down, but
[02:31:09]  we're going to look, I'm going to get this week in JavaScript started up right here. Give me two seconds. I'm just going to going to get that
[02:31:23]  preset for us because a lot's happened in the last two weeks of JavaScript. Um, so let's see here. I want to try to think if it's been some
[02:31:32]  solid news. Yeah, definitely. Yeah. And then let's get some bookmarks going. How's everyone doing? I know this a little bit earlier in the stream
[02:31:46]  than it usually is, but, um, Tanner did not stay with us as long as I would like, but it made for a very, uh, compact, compact
[02:31:57]  stream. Yeah. All right. Well, there's, there is so much stuff here. Okay. And chinks. I'll do the next four. Yeah.
[02:32:22]  There is so much stuff for this week in JavaScript. I'm going to have to like figure out how to strategically get started here. Um, all right, let's
[02:32:32]  see here. All right. So yeah, let's just get started on this week in JavaScript. I think it's, it's the last two weeks have been, I
[02:32:43] 've been, I've been very good. And, uh, I, I'm, yeah, I'm, I'm looking forward to talking about them because I've been
[02:32:52]  sitting on this stuff. I feel like for the whole two weeks. So let's, let's, let's get going here. Okay. Honestly, at the end of
[02:33:01]  my last dream, I was telling everyone, I was talking about routing and stuff and people are like, did you see Michael Jackson's tweet and all this? And I was
[02:33:09]  like, no, I don't know what you're talking about. Send it along. I didn't really see the right tweet. Um, but he, he, he
[02:33:16]  was doing some, there was some spice coming on. Right. Right. Yeah. You, you probably posted this in chat. I didn't get back to it in time
[02:33:26] . I w I was, you know, tired, but this is kind of the beginning of this conversation again, because I feel like the remix guys and ourselves are all
[02:33:38]  kind of like circling around this stuff. They're looking at server components, trying to rethink the patterns. I heard someone mentioned that they are looking at client loader and
[02:33:47]  server loader and like stuff. Yeah. I mean, without context, loaders are hard. This is the reason why I I've been working on this load API
[02:33:56]  and pre-caching mechanism because it's just, it is what works universally. At this point, I don't even think I care about server and client loading. I
[02:34:06]  just, it's, I think I want a router that knows what each route section is like that. It goes, okay. Yeah. This, this route section starts from
[02:34:15]  the server and this one is a client one, you know, so from that perspective, the same load functionality can be isomorphic. It just depends on what the
[02:34:24]  use case is. Like if the route starts, you know, I guess it's interesting if you need the client load stuff anyways, even if you are a server first approach
[02:34:35] . Yeah. Okay. I'll bite, you know, when the time comes, but it starts with this very straightforward seeming question. Would you rather have your data
[02:34:46]  patches associated with the current route or with a component? Do people have opinions here, right? Like I think this, I think this has been a very longstanding question.
[02:34:59]  This is kind of like, should we keep our state globally in stores or should we put them locally in the component? It's like a very similar extension of a question.
[02:35:07]  Yeah. I want both too. It looks like 2000 people don't listen to Ryan Florence, like almost half the people, uh, start with the component moves throughout to
[02:35:18]  optimize. Yeah. This is a dangerous path. Honestly, I find a more common thing that ends up happening is you start with the route because it's a good place to
[02:35:30]  do stuff. So that stuff becomes optimized. And then over time, people like get so far removed from it. They accidentally start fetching stuff and components. And then
[02:35:38]  like, that's where things end up. Like, you don't have, if you start from the route, you don't have to like, you don't have to
[02:35:45]  worry about it until like much, much, much, much later. Like there's like, it's just like, you know, like, it's like that stupid,
[02:35:54]  you know, bell curve thing where like, if you start from the route, you'll be good, like so far. And then at a certain point, you know
[02:36:02] , it'll get muddled and then eventually you'll go back to try and optimize the stuff in the route. But like on the point it gets muddled, you're
[02:36:12]  already like three quarters through. Whereas if you started in the component, you're probably going to hit that issue much, much, much sooner. Yeah. Microfront and
[02:36:23]  architectures, right. This is an organization problem. Right. So not that let's not that let me go here. Yeah. So yeah, I, I was expecting
[02:36:36]  it more lopsided. I figured everyone would say they want to load a component. I figured it'd be like 80% in the component, but because there's
[02:36:45]  a lot of Ryan Florence and, and, you know, Michael Jackson fans around, you know, the, the remix kind of side of things, I can understand why it
[02:36:54] 's less so, but like, like, yeah, some people pointing out that you can use relay, but I'm not talking about relay. Like, yeah, obviously you
[02:37:03]  can use relay realize like the pinnacle of, of, of data fetching, but then we all walked away from it. So, I mean, there's
[02:37:11]  that, but like, the truth of the matter is you always end up back here. Route level data fetching is a lot like JS frameworks. You try, try not
[02:37:21]  to use it and you'll invent it your own. Like you, you relay even is in a sense of like a really complicated way of trying to get route level data fetch
[02:37:30] ing. Like you, you, you look like you're trying to fetch in the component, but again, you're hoisting it up. Same thing with these cache
[02:37:37]  APIs, same thing with like all of this, like really what you're trying to like, what you're trying to do is hoist up the data fetching.
[02:37:44]  I'm not saying it's a problem, but outside of automated systems, like really this, it turns local route fetching. It is something to be aware of. Like
[02:37:55]  basically at a certain point you are going to hit the issue. The problem was a lot of people got really confused by this, by this conversation. I mean, Adam
[02:38:06]  Rackus got in here somewhere. Let's, let's actually, I think there was, there's a, I think it was on the reply of my first tweet
[02:38:14]  somewhere in here. I actually have, if I go to my bookmarks, I think I actually have it here. Um, if I go back far enough. Yeah
[02:38:25] , here we go. They were going back and forth, her and Adam in the reply somewhere. And then she was like, okay, guys, let's, let
[02:38:36] 's do a poll. If A and B fetch their own data without checking, will this waterfall? And don't get me wrong. This is kind of a trick question,
[02:38:45]  but the, the, the, and the fact that, that like of the people who answered it, it's almost 50, 50, right? Or wrong is kind of
[02:38:56]  the problem. Maybe the trick overemphasize this. Like, yes, there's an await right here. And I know this is like, you know, would
[02:39:07]  work better with syntax highlighting, but if there is an await and then A and B fetch their own data, it doesn't matter yet. Sure. React can parallelize A
[02:39:16]  and B's data fetching because they're independent, but it can't do anything right now about await. Someone was like, oh, we can use static analysis and
[02:39:25]  like, okay, sure, whatever. But like my point is it's a blocking thing. This is why I use create async and I don't use await because then
[02:39:31]  it is non-blocking and it's actually the things that depend on data that get blocked. So if B depends on data and A doesn't, guess what? It
[02:39:38] 's not blocking. So that's already a waterfall win by using non-blocking fetching rather than await. Await is a very awkward API from a data fetching
[02:39:47]  standpoint. But the fact that people didn't get that. Yeah. It's better whether an optimized compiler can prove whether get data is side effect free and eliminating. Yeah
[02:39:59] . I mean, yeah. Yeah. I mean this. Yeah. We will all have optimizing compilers. Yes. But the thing is the whole goal of a
[02:40:20]  suspense and streaming is not my hacker news demo where I just load in the page and you're like, Ooh, look at how fast it responds. And I load in the
[02:40:31]  page. It's the fact that the long tail problem, I know this can, this is why eBay works so hard on streaming over the years is because let's say I
[02:40:38]  have 10 different services that I'm getting data from. If they all depend on each other in the UI layer or like in the component system, like I have to wait
[02:40:50]  for it all. And now if you know, they're not like, I'm making artificial numbers, but like if, if they were 99%, you know, good,
[02:41:02]  they respond quickly 99% of the time, but they have like a 1% slowdown, you know, like, so every, every a hundred calls to any given
[02:41:10]  API, one is like a little slow, you know, and the other 99 are fast. Let's say if you require those 10 requests all before you respond, your system
[02:41:21]  now looks more like 10% is slow. And that's a huge loss. By using suspense and streaming, you can isolate the different parts of data dependencies and let them
[02:41:35]  essentially show up and render as available. And that means that, yeah, sure. Maybe part of the page is slow, but you don't slow the whole page down.
[02:41:45]  It makes, it makes a significant difference when you take these common network to scale. So I, things like, like things like this do actually impact things. This is why
[02:41:56]  we do streaming. Honestly, if you were just loading one thing on your page, you might as well not stream it and just wait for it to come in for the
[02:42:03]  most part. I mean, you can preload the assets, which is fine, but it's, it's, it's, it's, it's interesting. The
[02:42:09]  initial synchronous load of a page without the data fetching usually is relatively quick, right? Like I, I used to test that in benchmarks, right? Solid would be like
[02:42:19]  very, very fast compared to react and a few others. But, but even when I made this like huge thing, we took a page from eBay. We actually took the
[02:42:25]  actual page from eBay with all the footer content and all this, and just giant things of like HTML. And it was like, okay, what's the difference between
[02:42:34]  the react render and the, and the solid render is like, okay, one's one millisecond, one's 10 milliseconds. Like it makes a difference when it adds up
[02:42:42]  at scale. That's why they probably have that partial pre-rendering stuff, you know, that they're talking about from next or whatever recently over sell next 14.
[02:42:49]  But I mean, let's face it. That's the least expensive part, like that you're optimizing. Like, like the synchronous render usually isn't where the meat
[02:42:59]  of the content is. Like that render and return happens pretty fast, right? Like the, like it doesn't actually, it's not where you get caught up. So
[02:43:12]  the fact that this stuff getting entwined is actually more of a concern to me and the fact that people can't see it is more of a concern to me.
[02:43:21]  Yeah. But I mean, even if react is 10 times slower, I mean, it's not, I don't know. It can't be that bad. So like
[02:43:34] , yeah, I don't know. I, I, I, I did find this, uh, I did find this poll kind of interesting because it's, this
[02:43:49]  is, this is the problem here. A lot of people just go, Oh, like I kept in your response to people going, yeah, RC solved this for me.
[02:43:55]  And it's like, no, they do not solve this for you. This is why the remix guys are like really trying to figure out a pattern. Why I've been
[02:44:02]  trying to figure out a pattern because next JS's approach innately causes waterfalls, maybe waterfalls on the server, aren't always bad. Maybe you can avoid it
[02:44:12]  and be aware of it, but the combination of blocking async, especially at a component level and the combination of like no hoisting means that like it will happen.
[02:44:29]  this is not like next or RSCs will take care of it for me. That is for the furthest thing from the truth. So yeah, I understand that
[02:44:42]  people want fetching in components more so than this poll even exists, but you have to be smart about it. That, that, that basically was, was a point and
[02:44:51]  it's inferred a lot of the, informed a lot of the API decisions that I've been, you know, looking at. Um, no, just going on
[02:44:59]  to the next thing. This one's not that important. It just the, the talk where the sunglasses came from is finally up. So if you haven't checked it out
[02:45:07] , um, yeah, yeah, this is, this is what inspired me to get Tanner on the stream. I saw this tweet actually. Two years ago, I took
[02:45:20]  to answer the route. He's talking about him removing the data functions and using route.load. Um, so we've already had Tanner on, but basically he's like
[02:45:30] , I've given up on it on SSR. I don't care. I'm just making CSR single page apps and I don't care. And the funniest thing
[02:45:37]  about this is the patterns that Tanner has come up with for single page app CSR are identical to the ones that I've come up with for server components. So I
[02:45:49] 've got, I, I, I, this, this is, this is, this is, this is an interesting thing to watch the progression of architecture and, and,
[02:45:59]  uh, that this actually makes me very happy because I was worried that the weakness would be the single page app, but if people like what Tanner has come to, and
[02:46:08]  I think he's come to this with a lot of experience in these problems, highly interactive apps, then we are on the right path. And this makes me very stoked.
[02:46:19]  Okay. Um, yeah, this is with RFC. Okay. We will talk about that one in a minute. Let me see if there's, there's another
[02:46:30]  thing here. Yeah, we'll get, no, no. Okay. Yeah. We'll get to that one in a second. Um, let me see. Was there
[02:46:41]  more solid stuff that I want to get to? Yeah. Cool. Yeah. Talking about, uh, tan stack solid query. Um, Aryan made another, uh
[02:46:55] , demo showing out of order streaming. Solid query uses create resource on the hood, which means create query automatically supports SSR out of the box. It uses server dollar side
[02:47:03]  function too, which unlocks server client boundary. Yeah. So this is a cool little demo to check out. This is exactly what I'm talking about. If anything with
[02:47:11]  the changes that, um, we're making react query is going to fit in or sort of solid query is going to fit in even better than it does today. You
[02:47:20] 'll just like grab the router and just pop this in. So I'm very stoked to see these kind of demos coming around. Yeah. Let me see. Yeah. This
[02:47:31]  proves that, yeah, I, this, it's a little bit, but it proves that you can just use, um, use these tools directly with solid start and it
[02:47:46]  works. So very cool to see, I have not tried this demo till now. So I just, I just, I know that he's been waiting to do this
[02:47:57] . And stack query has been a long time. It's, it was an alpha almost like six or eight months ago. So very exciting. How are you doing chat?
[02:48:05]  CSR has always been the way forward. Eh, I can show you graphs to say that it's not, but the loader was wild. Yeah. Well,
[02:48:20]  it's, it's interesting because I think the load function has a lot more functionality capability, like usage than saved a loaders do. Why do we want to reinvent the
[02:48:32]  wheel? Well, this is the, this is the thing that browsers might eventually catch up, but we really don't want to do the full page navigation, right? Like
[02:48:42]  we really don't want to unload the HTML and go to the next page and reload all the JavaScript and lose all the local state and do all that stuff. Like they
[02:48:48] 're, they're working on a view transition API for MPAs as well. But like why, if you can do partials, why do the full thing,
[02:48:58]  the router is going to make that more like the new navigation API is making that more explicit for us, which I think is really exciting. But like think about how long this
[02:49:09]  takes. We're, we're like, what, 25 years into client side routing, like single page apps, not 25, sorry, 15. We're like 15 years
[02:49:17]  into the single page apps. And now we're talking about router primitives for it, like, or browser primitives for it. Like I've been, we've
[02:49:27]  been doing this, you know, the last 15 years, right? I mean, people, people can always like choose where they draw the line. You could be like,
[02:49:36]  Oh, um, I really want perform an app. You've been able to do that with signals for the last, uh, you know, five years, six years too
[02:49:44] . But now people are waiting to do it now that others support it. So, I mean, I see the, the argument, you know, the other side,
[02:49:50]  but it's like, there's the people who are in a position where they can do the new thing. And there's the people who are in the position where they wait
[02:49:58]  till it becomes standard. The browser and standards is like the very end of that curve, right? There's people and frameworks and tooling that leads the way. There's the
[02:50:07]  mainstream stuff that people have adopted. And then there's the, the browser and the platform on the far side. That's generally how these things work. Yeah, there
[02:50:16] 's a spec for it, but again, it's, it's tricky. Um, and as I said, view transitions don't solve the application problem because the persisting
[02:50:28] , the state isn't enough. It's trickier than that. The server has to be in on it. You have to like, there is a reason server components are
[02:50:36]  designed the way they are. I think it's, I think it's fine if they're not great because it gives us like room to experiment. And as long as
[02:50:48]  they, they move diligently and slow, like make sure that they like, they, they are very careful and pragmatic. Then like we, we, the, you know,
[02:50:56]  everyone kind of progresses at the right rate. I'm, I don't like when people on that side get overzealous on like they're the future because they're
[02:51:06]  destined, you know, like web components, that's garbage. But, but like the fact that, you know, the baseline platform slowly by slowly gives us more capability.
[02:51:17]  That's exciting. So yeah. Um, yeah. So just getting my solid news in here. Cause yeah, that was a very cool to see this. And this
[02:51:29] , this is the point he, they didn't have to do anything for this. He literally just grabbed create resource, wrapped it and it was like, okay. And I
[02:51:37]  think create async is going to make that even easier. Um, okay. I want to talk about this one because, because Ryan Florence gave me a big shout out
[02:51:47] . People pretty, pretty excited about this one. I don't know if everyone saw this. Actually, let me make sure my audio is set up properly so you guys can
[02:51:57]  hear it. Let me see. No, it's fine. I don't have, I don't have to play it through here. The audio is not set up properly
[02:52:07] . Give me two seconds. Let me change the output audio to, um, Oh no, I have to change it in Chrome. I don't feel like doing it
[02:52:18] . Nevermind. It's fine. I don't need to play the video right now, but he basically was talking about how hard it is to get focus events working and
[02:52:24]  because solid synchronous, it just works. Um, this outside of react, you can just do this like a normal person would think to do it. And I think we hit
[02:52:37]  a lot of this react has gone through some of the stuff that react has done over the years is definitely to fill their vision and it's fighting against the platform in a
[02:52:48]  way. I know I just said that the platform is the slowest moving thing ever, but like on the, on a certain hand, perfect example of this, the Dom
[02:52:54]  is a retained mode API. It is something that is persistent. You mutate it and that's how it updates. So building a system on top of it, which throws
[02:53:04]  everything away on every rerender is kind of misaligning with the system. You're doing like a whole bunch of work just so that you can like do us a small
[02:53:14]  mutation instead of just doing the mutation. But in this case, I actually think react is right. I think that it's that synchronous updates, um, can be very un
[02:53:26] performant now, obviously in a framework like react, um, synchronous updates can be really unperformant because they re-render trees and in a fine-grained
[02:53:35]  system, they might only update the things that change. But I think as a default, I think it's probably very reasonable for them to have something like flush sync. I
[02:53:43]  just wanted to throw this out here because even though this is about the most pro solid tweet out there from a react guide to saying like, look, why can't we just
[02:53:50]  do the freaking obvious thing? And I can obviously relate to that. Um, like Ricky from the core team came in. That's another world of react activity. You
[02:54:03]  know, I'm doing this and I'm like, here's a sneak peek. It's solid 2.0. Um, this, this is, I, I
[02:54:13]  think, I think there are things we've learned over time. And I, I actually, I would love to see if there's like a right balance for certain things,
[02:54:23]  but like, I, I, I think sometimes react gets too much crap that they don't deserve. Um, so I just, this was one of them. And as
[02:54:33]  much as I love to see Ryan Florence, you know, work through the example and stuff and, and show how cool solid is. Um, yeah, what's cra
[02:54:41] zier is to think that react had a world where flush sync didn't exist, like for like four or five years. Like that's the crazy part to me, not that
[02:54:51] , um, not that the, the, the handle updates this way is that they didn't have an escape hatch in the same way. general question. Do you think
[02:55:12]  the web interface for embedded device should run a full MPA primer? Huh? That's interesting. I don't know enough about the underlying platform. A lot of times when
[02:55:27]  I've been working with stuff for embedded devices, they, they basically work like spas where they don't like server render anything. Apparently they like basically, you know
[02:55:35] , like the electrons and tort type thing, like, like they, they, it's, it's, it's like a single render model, not like an SSR
[02:55:44]  client server model. Um, so I actually, I don't, I don't, I don't know. Um, I, I mean, from the minimal Golang
[02:55:56]  API and the spot, like that's usually what I see in these examples. Cause there's no like page reload mechanism, but yeah, I'm not sure. I
[02:56:06]  mean, obviously initial render could have some benefits. Um, so maybe, yeah, it's, it's a funny spectrum. Cause I would say like, you could just
[02:56:17]  run something solid star to remix and then you get the initial load and then you continue to, you know, get the update spa style. I wouldn't really call them
[02:56:26]  MPA framework at that point, but something like the funniest thing is that react sees a big use case for react server components on mobile, which is like, huh? Okay
[02:56:33] . I don't see it yet, but so there there's maybe something that some people know better in this area that I I'm not aware of. Um, it's
[02:56:41]  possible that the reason that people have APIs and spas here is just because that was the model we've been using for so long and that's the easiest initial load.
[02:56:50]  Hasn't ever been, as I know, the biggest deal for, and for these kinds of applications, cause usually they show splash screen. So like usually it's simpler
[02:57:01]  to avoid the SSR, but yeah, I'm not gonna pretend like I'm an expert here. Yeah. I don't know if there's like a serialization
[02:57:26]  cost either going across wire, but anyways, I just wanted to, I, I like the praise here. Um, but it was like looking at this and I was
[02:57:41]  like, oh man, uh, I was like the first person to respond like, Hey, Hey, flash sync is okay. Just because I was worried of the, like
[02:57:48]  what people would be thinking, you know, about the, like there's a good reason to react design stuff this way. But for me, this conversation actually opened up
[02:57:58]  a more interesting question here because they kept on debating this down the train, right? Not sure VDOM has anything to do with this. It doesn't move into concurrent
[02:58:07]  blah, blah, blah. That's not VDOM. It's rendering actual DOM, blah, blah, blah, blah. But Mark Erickson Redux comes
[02:58:13]  in and he's kind of like, like saying like the answers here aren't clear. I would love to see some get out of the react docs, blah, blah
[02:58:21] , blah, blah. This there's there. And this was the interesting thing. There's not, no, not, and there are no plans to add it as a
[02:58:28]  principle for how we approach docs and API react devs shouldn't need to know how react works under the hood. And this is an interesting thought to me because like,
[02:58:44]  this is like a very different philosophical thing because react at one point they didn't, they weren't so much. I want to show you what's under the hood, but
[02:58:59]  they were kind of like, um, you know, we're just JavaScript. Like they were really playing to like that simplicity. And the reason I I mentioned this is
[02:59:11]  because let's go. So is because, um, we just released our new solid in five minutes video. I don't know if people have had a chance to check it
[02:59:28]  out. There's a couple of things that we're, we're still, we realized it might need a little bit more correction for clarity, but let me, let
[02:59:35]  me just drop this link in chat here because we basically took my pitch and that I do on most of my streams and stuff, or sorry, most of my talks and sorry
[02:59:51] , and basically moved it into a five minute video, which literally the five minute video shows people what reactivity is. You know, as a simple example of using it
[03:00:05]  shows how to create your own reactive system, like basic conceptual, like faux reactive system, like how to implement, create signal shows how using pure DOM APIs with reactivity becomes
[03:00:19]  JSX. And then finishes off by showing state management, using reactivity and adjacent. Basically our full five minute pitches. This is how we work under the hood.
[03:00:31]  You could have built it yourself. So it's, it's, it's a very different sort of world to where, you know, this, um, sorry,
[03:00:46]  this is kind of like the, the response here. Who just further highlighted how complicated it is. There's no domain going where you can look at what's under the hood
[03:01:04] . Yup. Western and curious. Yes. I really hate that attitude. Yeah. I mean, this is why you guys are on the stream, right? Would anyone
[03:01:15]  here not be here if they didn't want to understand how this stuff works under the hood? We always look at it. Tanner comes on, you know, we talk about
[03:01:24]  how the typescript works, like how the, like, there's a reason we look at this stuff because this helps us do better at what we do. There are
[03:01:35]  great community resources like yours. I mean, the fact that we have Fleshlink means we do, doesn't it? And lately, these talks, but at a certain
[03:01:42]  point, Mark Erickson, man, my hero. I disagree with this strongly. Yes. React devs don't need to know about many specific React terms, but
[03:01:49]  this is a longstanding user facing behavior. React devs need to understand about core React rendering behavior to use it correctly. This is public contract. I'm not sensing for
[03:01:56]  nuanced technical details. I think renders are cursory default. Props change don't matter. memos, blah, blah, blah. It's two React users
[03:02:01] . But yeah. So there are some docs here, but I think, I think maybe this was taken out of context greatly, but I, I, I do think this
[03:02:13]  might be the most important takeaway from this discussion here is this kind of tension here. I, I don't know. It's easy to be in a position where I
[03:02:22]  am to kind of poke at this, but yeah, I don't know. This, this was, this, this, this definitely caught my eye. Yeah. They don
[03:02:34] 't want to, which is fine, but you know, I, I get it because docs, the docs purpose are to teach people to use React, not to teach people
[03:02:46]  how React works. Um, but there, it is an interesting thing, right? Like how that fits into like the docs model, like figuring it out. If React
[03:02:57]  wasn't the predominant way to do front end these days, I wonder if things would look a little bit different because I, I honestly think like, we probably spend more
[03:03:08]  time explaining this stuff because it's different than React that we have to, actually have to teach people. Um, it, it, it is an, it is an
[03:03:16]  interesting tension. Yeah. Mark Erickson is great. Yeah. Honestly. Yeah. So in any case, yeah, I thought, I thought this was an interesting
[03:03:35]  kind of point of highlight here. Yeah. I, I, I bookmarked the fresh thing. Cause I felt that I didn't give it quite proper credit. We
[03:03:43]  already talked about fresh. Um, okay. Let's keep on going. Yeah. And we, we, we did just talk about the five minute video. Um, it
[03:03:57]  was, it was a bit nostalgic for me to see, uh, Attila put it together and make it the base of the description. There's like a 15 minute
[03:04:03]  intro and like a 40 or 15 second intro and a 40 second outro. So the video is about six minutes. So it's like five minutes and 30 seconds or whatever the
[03:04:11] , the core content. The first time I made that intro content, like that same example that we used to this day was on, um, Corbin stream. And it
[03:04:21]  took me like 45, 50 minutes to explain it, to think that it's got condensed down to five minutes. Um, it's just insane to me. I don
[03:04:29] 't know. Maybe it's too fast of a pace now, but it excites me to think that someone can like literally sit down for five minutes and get an idea of
[03:04:36]  what solid is. Um, that, you know, and how it's very different than every other, you know, JS framework. I mean, I can't say that
[03:04:44]  anymore, but like at least the position of it, I imagine this is true of any popular tool to a certain degree. I, I, it's hard to judge
[03:04:58]  on that. Um, yeah, I don't know. There's so many react users. Okay. Uh, let's get back here. Yeah. So we're talking
[03:05:20]  about the Tila's Tila here, more Tori stuff, video game library. This is just a kind of follow-up of like the last couple streams that just
[03:05:30] , I love seeing these native applications like come out. Apparently this Tori app for game managing libraries, 1.5 megabytes. Um, that didn't mean tons to
[03:05:13]  me, but when I look at the people in the chat, they're just like 1.5 megabytes. How is it so small? That's insane. Um
[03:05:48] , anyway, it's just cool to see that this is actually a viable option. Anyway. Um, I'm just gonna wrap up the last bit of solid news, big
[03:05:55]  shout out to Brendan, very involved in our community in discord, very involved in, um, uh, the router project. He, he, he implemented the on before,
[03:06:08]  uh, leave thing. Like he's, he's using solid for real. And when I say for real is he had three large react apps. And when I say
[03:06:16]  large, you can see them, like these are kind of chain linked over the time I'm talking about each of them with like hundreds of routes in them, hundreds of data
[03:06:24]  grids and components, just absolutely massive apps. And over the last year and a half, he's migrated all three of them. I think in total, if you
[03:06:34]  were to add it up, it's something like 500 routes. Um, what's this thing? Yeah. I think the other one's a little bit bigger. So what
[03:06:44] ? 250 models, 700 grids, you know, another like 40 editable grids. Like I don't even, uh, is the original post here? Yeah
[03:06:57] . See October 2022. Yeah. Like 350. Yeah. Seven. I mean, should we just add these together? 1000, 1500 input fields, 64. How many date
[03:07:11]  pickers in here? 91. Like, I don't know. Like this is just a massive project, probably bigger than what most people have done. And he's
[03:07:21]  now completely ported it all to solid in production, which is amazing to see happen. So, yeah, I, I don't, I don't know. Yeah.
[03:07:40]  I don't know how yeah. That's he, he's spent more time and he's probably seen more solid code than I have. Um, like this is just
[03:07:52] , it's insane accomplishment and I'm surprised. I haven't heard of this yet, but probably just Twitter being glitchy, but yeah, this, this is just very
[03:08:04]  cool to see. Yeah. So, I mean, yeah. Okay. Let's get, let's keep on going. Um, yeah. I mean, imagine building
[03:08:17]  a solid file using the webpage regardless of the framework. Um, yeah. I mean, frameworks that are small have that benefit to be able to do that. I think it
[03:08:27] 's actually interesting. I saw, uh, someone Ben Holmes posting some stuff about Alpine with Astro. And I, I think, I think that has to be
[03:08:36]  a DX choice. Do you know what I mean? Like people like it's an idea is now you don't need client components. You can just kind of build your Al
[03:08:42] pine reactive code on top of base Astro without having islands. So I think so, because one of the things that always surprises me, I can just go to the JS
[03:08:51]  framework benchmark. Um, when talking about Alpine is that like, it's not fast or small, it's basically not particularly good at anything like compared to, I
[03:09:06]  think this is why, um, like Evan spent like an, uh, uh, spent a day created petite view just to be like, yeah, I like someone could spit
[03:09:14]  this out in like two seconds, which is kind of a diss, but like, I like you get like Alpine is back here. It's like next to bla
[03:09:26] zer. Although petite view is next here too, which is ironic. Cause no, it's crazy. I made petite solid on stream and it scored as fast as Infer
[03:09:36] no. It was slower than solid, but it was as fast as Inferno. Maybe, maybe I need to bring petite solid back. Cause this is actually kind of
[03:09:44]  crazy. I didn't think petite view would be back here. Anyways, my point is look at the bundle size here. 157, 182, 182.
[03:09:55]  Like solid 150. Inferno, even Inferno 165. Svelte. 157. Oh, Svelte 5 is in here. It snuck
[03:10:07]  in. Check it out. Svelte 5. I missed that officially in the JS framework benchmark. See, they're now up here with the rest of us.
[03:10:19]  Solid, Inferno, Svelte 5, Sinuous. Yeah, yeah, yeah, yeah. Nice. This is actually new. I'm glad I came here
[03:10:26]  today. Yeah. It's basically like, like, like, like, like hyperscript and like, there's a bunch of these solutions that are basically slower, bigger
[03:10:36] , like just worse in any kind of material metric. Obviously there might be DX considerations and like preference things, but they're basically empirically worse solutions. And like,
[03:10:48]  people are like, it's interesting. I think it's a good, it's a good, like, you don't usually say strictly worse or strictly better, but like
[03:10:56]  in this case, I think you can. And like, it is kind of interesting to see like how far it's, it's kind of like the back-end
[03:11:08]  front-end argument kind of all over again. Cause I guess, you know, the back-end is that much faster than the front-end, you know, when
[03:11:13]  you're using JavaScript on the server, but it's like, if you're going to pick up a JavaScript framework to do client side stuff on your mostly go rust,
[03:11:23]  whatever kind of back-end PHP rails, whatever, the solutions that generally come with those things, like the simuluses and the, and the freaking Alpines
[03:11:39]  and that's Laravel. And I think those solutions are usually considerably bigger and slower than the frameworks that are actually designed for the purpose. Yeah. You know, the
[03:12:03]  selector thing is contentious and I think, I think it's fair. I actually don't know if the selector, if I actually have a problem with the sele
[03:12:11] ctor mechanism. I think the more interesting one that might have us move is the grouping of effects. I think that's a more interesting one. I wonder where they moved the
[03:12:20]  selector. I guess they probably moved the selector because end users, like it's, it was too much like an optimization, like you had to be aware of it
[03:12:25] . It's fine. Svelte without selector, I mean, I already know how much each thing, at least in the old weighting, they changed the
[03:12:38]  weighting now, but it's felt without selector. I am pretty sure ends up around, yeah, selector is probably good for about 0.07. So they
[03:12:53] 're still going to come out in the same ranges like hyper app and you Dom say and lit maybe. Yeah, I'd say they'd be coming in the lit area
[03:13:04]  still ahead of view. And wow, this, this, this new rebase really did a number on the rust frameworks too. Interesting. Is, is, is,
[03:13:20]  is rust? No, wasm bindgen is still here. Okay. So yeah, we're like right neck and neck with them. Hmm. Interesting. Yeah. Every
[03:13:31]  run's a little bit different, but yeah. Okay. Anyways, I, I, JS frame framework is not that important. I just wanted to kind of like, it
[03:13:43]  wasn't as less occurred about the performance, but the size, I think the size thing is, is, is kind of interesting. Anyway. Yeah. Sorry. Did
[03:13:53]  I forget to highlight this comment? Um, anyway. Oh, okay. So Yeah. What else do we got going here? There's a few, there's a few
[03:14:09]  more things that I think were cool. That was it for solid news. So we're done with solid. Um, few other announcements. Uh, Astro isn't
[03:14:20]  is now has quick in it. It's funny. Cause there, I think there's a conversation before putting Astro inside quick, which I don't think makes a ton
[03:14:26]  of sense, but quick in Astro, um, is very cool to see. I think that, I think the thing that they, they, they like here a lot
[03:14:34]  is because quick is still using its resume ability, um, mechanism. Like it's still handling its entry point. Like it's, it's, if you put a
[03:14:41]  quick component inside Astro, you don't use the client directives because quick handles its own hydration, like, or not hydration. Like, um, so it's,
[03:14:51]  it's kind of, it's funny. You just put the counter in and then quick will still do its fine grained, you know, wake up kind of thing
[03:14:58] . So there's a question of like, what's the point? Cause you just use quick straight. I think this will give people a chance to try quick. I think
[03:15:04]  this was actually really smart move. I think like people in Astro and they're like, Oh, I want to just try a quick component. You know, I just
[03:15:11]  want to see what quick's about. Here's your chance. You can also put remix. Are you serious? Are you joking? I was, I was trying to
[03:15:23] , I was trying to convince the Astro guys to make like app directories, so to speak. So you could just like bring remix conventions in, but, um,
[03:15:34]  I guess with beat you, you, and it's a beat plugin, I guess you could kind of do that. Um, anyway. But I wonder if I'm
[03:15:48]  a sense of more in this than quick city quicks. The thing is quick as the top level thing can do a lot more like this, this is hampering. If
[03:15:59]  I was the quick guys, no, I I'd say keep on working quick city because quick city is more capable than what Astro can do. Like there's just
[03:16:08]  so much more they can do when they own all the pieces. But I think this is kind of a concession to like, you know, Astro is kind of like
[03:16:15]  the place where you try stuff. You know, you want to try HTMX, you know, put it on an Astro page. You want to try quick,
[03:16:21]  put it on an Astro page, which makes it kind of a melting pot, which is kind of great. A lot of people use solid and Astro. That's
[03:16:26]  a super common, uh, combination. So like, I think this is good for them. I would never joke about this kind of stuff. Okay. Yeah, the
[03:16:43]  funniest thing about this whole, uh, um, what was I going to say? The funniest thing I'm trying to open the link in my Twitch chat. Um,
[03:17:00]  Oh, here you go. Yeah. No, I see it. I see you. This is something you built yourself, but you're basically using the beat plugin, right
[03:17:17] ? I will check it out here. I will check it out here. Whole thing is basically one commit. Yeah. So yeah, I imagine this is kind of
[03:18:00]  similar to what I was doing when I was rebasing SaltStart on Astro. We basically just leveraged the fact that the beat plugin and calling it the right points.
[03:18:07]  um, very cool to see though. Um, All right. Where are we? Um, in general, I do think this is it's interesting to see this kind
[03:18:24]  of this kind of interplay because I think it's good for quick. Although it, as I said, generally quick city will be able to do a lot more for
[03:18:32]  quick. Speaking of remix, how about we just getting build with RS pack and free the building millions market. It's interesting. I like the initiative here with free the bund
[03:18:46] ler. I don't think we've gone to a point where bundler is generic enough. Like think, think about how hard it is to use server components on anything
[03:18:55]  but web pack right now. Nikhil managed to get server components working on beat, but if remix goes like free the bundler like this, and then they're like,
[03:19:04]  yes, we now support server components. They have to make sure that server components what work in all the bundlers. Like this is funny. I talked before when I
[03:19:14]  gave my talk at V comp about the layers and stuff. I think it's okay to be opinionated enough on the bundler layer when it's like once a layer below
[03:19:26]  you like if someone's picks up remix or solid start I guess it's a question of how much I guess the problem is like for them remix they had a problem because
[03:19:37]  they had their custom system with ES build and then they couldn't play like I I'm okay basically just going okay beats the thing and going in on beat not for solid but
[03:19:46]  for solid start like you know like it's okay if if if if you have that tight integration on the on the plugin system I think I think I do think that with the
[03:19:56]  unplugging and stuff it's like getting easier to make cross you know bundler plugins but it's like it's yeah I I think I think this people spend a lot
[03:20:09]  of time on the interop layer with the say adapter level you know like running on different runtimes running on different bundlers is a is a trickier thing but you know
[03:20:20]  who who knows maybe I'm just a beat shell so you know oh yeah yeah yeah this is talking about the partial pre-rendering from next 14. I think it
[03:20:49] 's interesting I want to know like my first gut thing here is unless you're saving the cold start of hitting the edge server is this really that big of a win like
[03:21:04]  just just follow me here I'm assuming that the product name render all the stock green and the price and all this are in a database you prefetch so assuming that's c
[03:21:19] ached you have the data cached and then you go render it synchronously you respond the stream right away and then you're waiting on this other stuff on another service and
[03:21:29]  then it comes in like what's the difference between rendering it at the edge in in a millisecond or less than 10 milliseconds and serving the point of paper is we don
[03:21:45] 't need to render on the edge the point of paper is we don't need to render on the edge the point of paper is we don't need to render on the
[03:21:55]  edge so you don't need to render on the edge the point of paper is we don't need to render on the edge so we don't need to render on the edge
[03:21:58]  the point of paper is we don't need to render on the edge so we don't need to render on the edge so we don't need to render on the edge
[03:22:05]  so we don't need to render on the edge so we don't need to yeah okay yeah that's that that's that's fine because like i was going to say
[03:22:16]  like i'm pretty sure the mechanism to do this is dirt simple right what you do i mean i could be wrong is you run a render to string non-async version
[03:22:30]  on your page at pre-render time what this does is it only renders stuff that can be rendered synchronously it hits a suspense boundary that can't be fulfilled it
[03:22:39]  just returns the fallback so you render the whole page synchronously render string as a as a build step if you have the data pre-loaded cache whatever then it's
[03:22:54]  part of this that suspense boundary works the next suspense really requires async data well too bad okay so good right and that works regardless of server components whatever this is just suspense and
[03:23:10]  streaming and some kind of cache mechanism and then when the request comes in you go oh cache hit send back that static rendered page from the edge then forward at the same time
[03:23:27]  forward the request on the same on the same like request forward the request to your your lambda so to speak and that lambda doesn't isn't aware of this entry point so it
[03:23:41]  actually re-renders the whole page and suspends as usual but it knows that the synchronous chunk doesn't need to like be sent so it just goes okay yeah you
[03:23:57]  already got the synchronous chunk skip that and then just start sending all the streamed and stuff after the fact so my understanding is this is probably like if you have the hardware
[03:24:06]  infrastructure to support this probably like a two lines change any suspense but made render right it's just it's funny because i i'm pretty sure they do hit do the synchronous render
[03:24:17]  again because there's no way that we know the entry point um on this like i i don't think so we don't bundle that way but it doesn't matter because the
[03:24:26]  initial response is fast you don't care that that synchronous render takes like 10 milliseconds um because you already responded with this right away i'm gathering that's how this works you
[03:24:40]  made a good yeah yeah the whole conversation is ppr with ed trunckton's runtime excuse let's go back yeah i guess because people are like trying to use pr
[03:24:58] isma and all this stuff it's it's yeah i don't know i guess i guess this was kind of the that's a fine motivation the thing is they're all
[03:25:08]  adapting node apis anyways give it another year and this is just like might not even be an issue but okay thanks for giving me some perspective here because i was looking at p
[03:25:21] pr and i was just like thinking of like okay how's the fastest way i'd render stuff today now let's add ppr to it and i'm like probably does
[03:25:30]  nothing but i i get it like okay fair enough okay so yeah and yeah i i mean i've been looking a lot of stuff i i got another one out here i just
[03:25:46]  want to throw out here have you guys been paying attention to netlify and i know i work there so this probably sounds like this but seriously netlify has been on
[03:25:55]  a roll after like a basically i know people aren't really big on the social sides on this you go netlify like there's two tweets have like a hundred likes
[03:26:03]  but like every week they're dropping like huge features that are very relevant and and you're just like where is this coming from because there's a while there where it's just
[03:26:17]  like you weren't hearing too much on the netlify side and then like like i think i could just go to netlify blog site here or like like this
[03:26:25]  or the main site here and literally like every single like once a week oh what's this netlify image cdn i haven't even seen this yet works with any
[03:26:33]  site and parameter to optimize transform server available on your sites now that's awesome okay i guess i did see it okay um image cdn um image cdn yeah
[03:26:49]  i don't know okay so that was this week well what was last week what was i looking at oh blob storage yeah yeah and then the the cache header apis yeah
[03:27:14]  i i i it's funny it's netlify is so i think it's just like um matias's personality he's a little bit more reserved he's not like
[03:27:24]  in your face as much but secretly just been doing stuff i what i what really stood out to me about the blob storage apis and i don't know if everyone does this
[03:27:32]  but is that that they work not just in your runtime code but in your build process they all like you can just access the blob anywhere for me personally obviously i've been
[03:27:42]  working a lot with nitro and unjs ecosystem so i was like man give me on storage i literally look at the retweet day one puya's like oh just at
[03:27:50]  least with netlify blob integration do you know what this means though this means that now as a framework user if i want a kv store and i use on storage
[03:28:01]  like as a like if i just go okay i am making a framework um like solid start and i want to make an example of kv like so that i can do a
[03:28:13]  simple to do zappers something really basic i can now feel confident that i can put it in my templates repo and if people choose netlify or sell cloudfl
[03:28:23] are whatever the hell they want to deploy there is definitely going to be a solution for that um i think i think this is like this is the uh the awesome age of this
[03:28:36]  stuff like normalizing there we're talking about you know people were tired with the edge function normalization but we we have the even the service provider uh normalization going on
[03:28:49]  so like i don't know like i i think this is this this is this is why i'm like less concerned about like edge being a thing like this might be a temporary
[03:29:02]  like we have to bridge the gap thing but i think i think edge is going to be pretty prominent for a lot of stuff um anyways anyway i'm just yeah i'm
[03:29:12]  i'm very proud of the work that's been going on netlify the last few months just seeing release after release like it it honestly feels like every week they release something
[03:29:23]  relevant right now and i think that's probably intentional they're probably like doing this kind of slow rollout instead of like releasing five products in one day they're kind of just
[03:29:30]  like doing a slow roll on it but um it reminds me when cloudflare was doing a bunch of stuff a couple years ago when they were releasing like um r2
[03:29:39]  d1 like and they're just kind of every couple weeks just rolling these things out it's it's it's awesome to see vote ppr how does it serve static page
[03:29:58]  and stream dynamic page in the same question you link please i mean i don't yeah they have to be using a proxy like they basically like the edge it has to be
[03:30:07]  using an edge function that serves this the static content and then while still holding onto the stream it was requesting to the back end and sending it all the way through yeah yeah yeah
[03:30:21]  yeah but i they were doing they were doing stuff like this before when they were doing uh streaming before uh before aws supported streaming if you want you if you want to
[03:30:31]  make like a serverless function and have streaming in it they use the cloudflare proxy and i imagine this is the same kind of technique no yeah that's the thing that
[03:30:41]  compose wasn't really open it was it was more of yeah it's very different crowd uh the netlify conference it wasn't like jamstack and it wasn't like
[03:30:51]  the ship event kind of thing it was more of like uh i guess it kind of a little bit was but it was more of like uh get all the customers together in
[03:31:00]  a fancy hotel and and talk enterprise deals yeah yeah like the thing is if when you render um i mean i don't i don't even know if i want to show
[03:31:19]  the code for it but when you do a streaming render the you just build up almost like an html string for the static parts with the holes in it and then you
[03:31:26]  just ship that and then you just keep on appending stuff to the end so just shipping that first chunk from a static location the funniest the reason i was talking about how solid
[03:31:35]  was so fast at rendering and how i didn't like really get it is because if you're not doing any kind of heavy data processing when you're doing ssr
[03:31:42]  on the server and you just render to strings so all it's already basically like its render is basically like oh here's a bunch of strings add them together and send them back
[03:31:51]  like it's not expensive to render and i imagine like there's no vdom or any kind of representation you're just like string plus string plus string plus string so just getting
[03:31:59]  that string from any kind of cache maybe from blob storage or whatever wherever they're getting it and just sending that along seems relatively trivial yeah no the paramount was very nice
[03:32:16]  um yeah anyway okay okay we'll talk about that in a minute um okay i want to i was telling you about serialization right um actually before that let's talk this
[03:32:41]  mob x now support standard decorators i know not everyone's cup of tea but it is cool to see that um that like it's finally where it needs to be like that
[03:32:52]  they they went through this long journey with mob x where they were one of the first libraries are all about decorators and then they had to like remove them because there's a
[03:33:02]  mess and then now they're back there again this is where they wanted to be it's not my favorite approach to reactivity i'm not a big fan of these class
[03:33:08] -based decorator approaches but i get it and um it's good to see it there he's also talking about the signals uh uh spec thing in this blog post probably worth
[03:33:20]  checking out um okay i want i want to i want to show i want to show you this really cool demo if you haven't seen this this is why we talk about
[03:33:31]  freaking serialization all day now i'm going to talk over this instead of misco because i don't want to feed the audio through but what he's saying here is that
[03:33:42]  there there there is a watch method oh actually the subtitles are coming through that's hilarious but um in node and he's showing that when you have server functions that can serial
[03:33:54] ize stuff um you can basically like ignore this click dollar sign whatever stuff but which is a quickism so to speak but what he's saying is you can take he's taking
[03:34:06]  this node watch method which returns a stream or i guess it's an async iterator and he's he's basically iterating over it to to grab the files from
[03:34:18]  his local folder and pushing them into a list and what's so cool about this example that he's going to show is like okay it's fine so you do this all the
[03:34:27]  time you made it a string because of you know typescript being happy and then the the thing is pretend this is a click handler in your in your client code so if you
[03:34:37]  take a server function and call watch like wrap it watch as a server function and then pass it these arguments like what directory you want from it in the client and then have
[03:34:50]  everything in the client you can actually call watch which will actually start the stream on the server and as he touches the files on his file system they're they're showing up in
[03:35:00]  his browser through the server function being able to serialize an async iterator so like it's i don't know if you follow completely what i'm saying but what
[03:35:08]  he did was he basically from the client called an async function to get an async iterator that listened to the file system and then the output file names that he could
[03:35:19]  then add to a list and then yeah i guess it keeps an open channel until the async iterator closes so as he adds files to his file system it shows up
[03:35:30]  in the browser yeah yeah yeah exactly he's using a readable stream response alexis um from the solid core team just implemented this like a couple days ago um using yeah c
[03:35:44] eravel his underlying thing like this is this is the kind of world we live in now um obviously we've you know this is just a this is just like kind of
[03:35:56]  mind warping when you think about it yeah i i i i have to imagine there's a there's a done on them um yeah i i just i i thought this
[03:36:22]  video was the it's cool to see this um basically the power of server functions he's calling talking about quick's unified execution model but the truth matters is this should be
[03:36:35]  possible with use server in react or server functions and quick or solid or everyone else using it this is just the the reality this isn't a quick specific thing except maybe they they
[03:36:47]  were the first to serialize this kind of value maybe not but it's it's just this is the reality we live in with these rpc type calls because what it
[03:36:56] 's doing it's the same way we serialize promises when we do original uh uh initial like page loading and suspense we can basically start sending back the response stream and it
[03:37:08] 's the promise resolves like resolve the promise we make on the client from the serialization and this is why i was saying like it's completely possible to serialize lots of
[03:37:16]  interesting data including stuff like our html strings templates and whatnot serialize observables of the wire please yeah or or over web sockets please yeah um yeah it's
[03:37:33]  it's it's it's interesting yeah actually let's let's look at async iterator who's gonna who's gonna who's gonna show me because they're they
[03:37:47] 're like generators right like there's a there is a concept of done maybe yield yield yields because like the iterator itself yields until it's actually wait yeah i'm not actually
[03:38:00]  sure generators are not my or iterators are like not my are not my thing i have to admit i always thought there's a concept of done but the async photos
[03:38:18]  it's on the built-in async iterators in web bf such as one of the readable stream yeah anyways it's cool i just it's definitely cool um
[03:38:48]  okay where are we okay thank you thank you jay larky for for this one i have been struggling i i i was very happy with the api designs that
[03:39:11]  we've been doing with sol start uh around the cache and action api proposal right where you kind of wrap them because they kind of encourage people not to nest server functions inside
[03:39:26]  context and need closure like closure extraction i think closure extraction is a mess especially between server and server that's like the worst case scenario because you anything that closes over has to
[03:39:35]  make it to the client and then be sent back to the server again between requests and it's very implicit and not obvious um but theo's latest video actually shows an example
[03:39:49]  where it actually could arguably make sense um to do so and this is what uh what was shown here the idea is you're using it as a form action or something in here
[03:40:07]  and you want to get the post id in now anyone who's used forms before knows the answer to this is fairly simple you just put post or hidden field post id in
[03:40:18]  your form and you're done so like you can always do that the problem then is you have to get the data from the form data that you pass into your action which again
[03:40:28]  it's fine except for form data is not typed and it kind of sucks if i remember when i went on theo's stream showing him early solid start with our action server actions
[03:40:37]  and showed him working with forms and he's like i really don't like the forms i'm like well you can just not use the forms but then it doesn't work
[03:40:43]  with without you know javascript or progressive enhancement so the react what he proposes if you don't ever put any fields on your form and just close over every variable in
[03:40:59]  a local scope then you can keep typescript working here and not have to bother with form data at all so you start i start i finally understand why they were so insist
[03:41:13] ent on closure extraction here because if you've ever worked with form data and the lack of types it sucks you're always like string casting or number casting you know sure most form
[03:41:23]  data is a string so it's like barely simplistic data um but if it wasn't you'd have to figure out how to serialize it usually it is like it's
[03:41:32]  not a big concern but it is interesting to me that and obviously this example is really trivial because putting a hidden id field on here is like two seconds you know like that alone
[03:41:45]  wouldn't be enough to convince me because like the the what like the impact of just having serial uh closure serialization like like the fact that like like he shows it in the
[03:41:57]  video i think where he he shows like um not here uh here he shows in the video that like give me a second that he shows in the video like uh i guess
[03:42:21]  here the the using like the whole form data kind of thing i guess he doesn't add the the hidden field but like i could picture a form with like six fields on
[03:42:32]  it and you could just close over it instead of actually putting the form data or ever interacting with the form data but the yeah so what did i want to show he he shows
[03:42:44]  he shows that he actually opens up the browser at some point in the video yeah yeah and shows the the that in he he was showing that in here somewhere that it actually
[03:42:57]  serializes all the data in the client um i'm seeing if i can actually find it when he's in the browser yeah see it's making the hidden fields for you with
[03:43:11]  the data through the closures um yes so this is great until the auth token be on by the time the action is it yeah i mean i i there's a
[03:43:44]  couple things going on here i just said i love that you don't have to deal with form data i dislike that closure wrapping yeah they encode it so that you don't
[03:43:55]  have to worry about secrets getting through this was the first secret leak where people were like going like server secret and putting it like in here and being like realizing suddenly that it actually
[03:44:07]  got sent to the client you know i i there's but it's more than just that it's just there is a convenience here but what's interesting with lowercase form
[03:44:20]  is the only way they're doing this is with some kind of compilation right because lowercase form is not a component it does not know the even if you put an action on
[03:44:35]  it how does it possibly know to put those hidden fields in or insert those hidden fields in like at runtime there's nothing special about the form they'd have to like what
[03:44:45]  look at the output like i'm trying to think of a way of doing it without a compiler look at the output of the form find the action in it and then go edit
[03:44:53]  the the string to like add the the actions and like there is some stuff going on here if capital f form was the case you you would work automatically but this is like
[03:45:03]  besides the fact that like you could just be arbitrarily sending stuff to the client and i'm not worried about secrets or sharing i just meant like you're actually literally sending stuff
[03:45:13]  both directions like dot net like this this behavior is very hidden to you about what's explicit or implicitly being sent so like i don't know i i as someone who
[03:45:26]  dislikes form data i can appreciate this but this is definitely um a little bit awkward and i think one of the things is and i maybe i need to watch the video again
[03:45:39]  to get in full details like if you saw like the approach that we're taking with solids uh routing apis that i where is it uh not this one the the the
[03:45:51]  future route apis that i was talking about with the action functions where you can like you know whatever do your action is that we're encouraging people to take the reference from the
[03:46:03]  action and use it in your form form button but also use it for optimistic updates like here so if it's in a component body it's actually kind of awkward you you
[03:46:16]  want it to actually be global like cash like that function so tight script just works you just import it anywhere so like when i saw this example i was like man i'm torn
[03:46:26]  because this is really nice imagine you close over some large data yeah i mean that's the kind of stuff yeah when i was looking at this thing i was like man i
[03:46:44]  love the lack of form data but i don't like that like there's nothing here to indicate that it should do this i mean you could just say that it's just j
[03:46:57] avascript so because there's a closure here you should be good and um but like i'm already settled on an api that supports data layers which means pulling this stuff out
[03:47:07]  so how the hell do you get to avoid form data right like how do you get that post id yeah i mean you're there's your your auth issue there's there
[03:47:23] 's obviously other ways to to solve it when you're on the server you can always like get it from the from the cookie yeah exactly but i was like what if i
[03:47:34]  never want an async function a server function it's so funny because solids when it first had the server functions we've showed you basically how to put it all inside your data
[03:47:43]  loaders and your components but now i've actually created an api that discourages that so how do we actually solve this and i was thinking about this because we were
[03:47:52]  trying to it's kind of like solving request context it occurs to me that i mean this is probably a terrible api but i was i was like i'm gonna put it
[03:48:02]  out there for for people here is okay pretend you import your uh your action from whatever it's like you know update to do to do from my api okay right and
[03:48:20]  then in here you've got button form action equals update to do or whatever okay okay now how do i avoid adding the other hidden fields maybe like would this be okay um
[03:48:52]  and i want to work both on client and server so i mean i could just do it straight for the server but let's pretend that it works for client and server would it
[03:49:00]  be okay if i did action equals um create memo update to do dot bind the only thing with bind is like the null argument props.id i i just and then
[03:49:30]  this would actually be signal so technically speaking this i mean this doesn't even have the memo we could just do this whatever what i'm getting at is this props id for the
[03:49:45]  for the to do would track under the form action field reactively and then whenever the props id changed we'd return a new version of the action with the specific arguments bound
[03:50:00]  to it and then the the the the final thing is how do i deal with those hidden fields well what if we use the url and i know this is probably the craziest
[03:50:13]  part about this solution but if technically the form action impacts um is actually the the url right so technically speaking these props can be serialized on the end of the ur
[03:50:26] l um so it works both on server and on client and can reactively update uh and still keeps get removes the need for closure extraction and still um lets you define in
[03:50:42]  a data layer so i don't know i i because like when i was looking at this example i was like what happens now you you told me to put in a data layer
[03:50:54]  when i pull this out how do i still get this benefit and i i i think that this is very doable i i haven't showed you don't shown you guys how
[03:51:04]  this works and so i'll start now but if i go into start config uh server components no server runtime yeah yeah check no no not this fetch server action server the server reference
[03:51:19]  in the client is just a proxy that that essentially when you call the function apply it it calls a fetch call against uh like specific thing and then if you try and get
[03:51:37]  stuff like url off of it it will give you the the url so that this this is vinci right here basically like we just have a really simple runtime reference so
[03:51:47]  like it wouldn't be very hard for me to get from the proxy get like be like if prop equals bind you know do something right because then we could basically return a
[03:52:03]  custom bind function that would allow a new version of the function that has all the characteristics of the original action but with the ability to um implicitly serialize but it's
[03:52:17]  not implicitly it's explicitly serialize the the props coming in and while this doesn't help us well maybe could help us with type script because if you assume that the bound
[03:52:29]  arguments happen before like the form action like the form data then this action wherever like update to do in the other file would actually look like function or would look like const act
[03:52:42]  const update to do equals action async async function id you know whatever db dot whatever update to do id so yeah actually this would work because basically what you'd
[03:53:16]  say is like yeah yeah this would work i don't know i'm just thinking out loud it's just there there's something about the closure extraction that's odd to me and
[03:53:30]  there's something about implicitly um closing over stuff that's odd to me this makes it explicit you actually have to pass it to it in this case obviously this only matters
[03:53:40]  for forms you could also just not do this but if you if you didn't do this then you would have to go form action update to do and then this would have to
[03:53:54]  be form data and then you'd have to you know go form data dot get id id or whatever and then you'd also have to go in here and add your old
[03:54:06]  input type equals hidden id props id but you you get what i'm saying yeah yeah it probably is this is very and maybe that's why this their approach is the right
[03:54:42]  thing like for people doing very simple stuff that would use forms they can you know just have an answer and for everyone who's doing anything like more real or involved they're not
[03:54:52]  going to use forms anyways and they're just going to use like you know our action api if you forget about the form and all this garbage then you just i
[03:55:02]  mean then you just i mean you know you just whatever on click what was it uh const date to do equals use action whatever yeah i mean i can't use the same
[03:55:22]  symbol name here but you like you get you get what i'm getting at you can do this and then just call it update to do props.id done you know like the
[03:55:34]  forms are what makes this complicated but the reason the forms are is because you want to do this in a place where you have no javascript this requires javascript
[03:55:43]  to be present this has to be a client component the forms are useful for when you do not have a client component that being said most of the time when you're doing interaction
[03:55:58]  you will have a client component because you know someone's clicking a button or doing something interactive um so just wanted to throw this out here the the the this video was very
[03:56:11]  helpful for understanding this it also made me realize that there there is probably a reasonable solution here that doesn't require this which makes me very happy because like honestly i think i
[03:56:26]  think even this is like fancy for people i think the most baseline person and maybe it's because i'm an html guy maybe i'm too old it's like you
[03:56:34]  just you put a hidden field on a form and use form data but yeah i don't know i i see the picture they're painting now at least this this this makes a
[03:56:45]  lot of sense why they were pushing so hard on this because i remember theo was like not a fan of of this stuff at all at early and it's like why are
[03:56:54]  you guys pushing this and why why doing even this pattern at all this is it they want to not send the javascript they want to do this as a complete server component
[03:57:02]  and they want to not deal with form data and my answer as usual is i'm okay jumping through a couple hoops like i think that i'm thinking i'm i
[03:57:22]  think i'm okay with this because ironically and i i still don't work on the details i think it means that if this is a server component that does this and then i
[03:57:34]  import this update to do in a different component and use submission that's a client component i need to confirm this i'm working through it i think you'll be able to
[03:57:44]  get optimistic updates and a completely independent component through a server component form submission with that like this that side requires no javascript but the but the uh the optimistic updates part can
[03:57:58]  and they can be completely decoupled with this api so yeah i i think i think my path is set yeah yeah i i think i think this this is the
[03:58:19]  thing when when when this came up and i said i wasn't sure how how i felt about it um i where was it it's further down here somewhere i remember my
[03:58:33]  response was something yeah if you think about it it's just like adding t body to your table all this is done for your own good i said it was more like on
[03:58:49]  change because it's like on change was something reacted for controlled forms for very good reason but it's not the change event doesn't work like that on dom elements that's just
[03:59:01]  not how it works so yeah it's interesting i i think we've gone to a very very interesting place where react in the earliest days did what it needed to and was
[03:59:20]  you know changed the way we did stuff then react got really principled and philosophy and you saw the team changed they went from like jordan walk and pete hunt and them
[03:59:32]  to like the second group the andrew clark and damn it were off and they spent like the next like five or seven years being very principled we're now in
[03:59:43]  a place where they're trying to make stuff happen again and it's like i don't know what react stand for stands for anymore because like yeah i mean don't get
[04:00:09]  me wrong the web primitives like the id field getting passed over is a pain pain pain pain pain pain like i i i mean obviously you can see it right away when you
[04:00:17] 're building to do apps like the very first thing you hit is a stupid adding all those hidden fields so i i definitely i definitely understand why i want to avoid it i just
[04:00:35]  yeah the null is weird because of the this but i think that's should be proper javascript right it'd be interesting if it wasn't buying like it was a
[04:00:43]  special function maybe um i don't know i i think because otherwise what do you have to serialize the null i don't want to serialize at all i i think it
[04:00:53]  would be interesting to have a way of explicitly passing props and in this weird specific case maybe this is just too convoluted it's just it's not magical though all
[04:01:08]  right but yeah i'm very happy to have seen this this this video is great um theo's video here people should definitely like this is very on point with what i've
[04:01:24]  been talking about recently uh so yeah just honestly this is this is just a great video people should watch it okay my bookmarks then i think all i have left is i
[04:01:51]  thought this was kind of cool uh jason langstrom when he was leaving netlify everyone's like what are you gonna do next and he was like i want to try
[04:02:04]  and make a new type of content for web dev i want to see how we can make it entertaining and not just like like we have the influencers and we have you know
[04:02:11]  all the you know you know different kind of you know kind of getting into that wider content the streamers he's like but he he wanted to basically make almost like a show
[04:02:22]  um and he pitched he said this idea is like he he had a few ideas and he actually mentioned this exact concept uh when i was talking about a year ago and it
[04:02:33] 's taken a while but it looks like game on right um four web devs build the same app so like i think hopefully this succeeds and we'll see a lot more content
[04:02:44]  like that but um yeah i i i really like that jason is kind of uh challenging the expectation on what web content is again so um yeah this this is fun obviously
[04:03:00]  got a bunch of known people to to to to work on this um or episode obviously but i i think there's gonna be more of this he intends to do this fairly
[04:03:10]  regularly actually i think in the replies he invited me on i'm like i'm like i don't know how comfortable i'm building a web app in real time um in front
[04:03:19]  of people but i i like that this is a thing i think this is pretty pretty exciting this was jason and dom's brainchild okay yeah to me just yeah they
[04:03:35]  they they were talking about we this came up at last jam stat comp um sorry which blog that i was mentioning earlier oh it's just them going over the code okay
[04:04:05]  which blog post though am i am i am i am i linking dev the only downside of not building it real time means i'd actually have to put time in it i i
[04:04:21]  really want so i'll start to shift i don't want to think about anything else i thought i linked most of the blog posts i guess something that i might have book
[04:04:33] marked like looking at my bookmarks right now let's see there's the mob x one there is fresh quick no i don't know well we're just wrapping up
[04:04:57]  here today i'm cutting the stream a little bit short i think uh uh oh the mob x one you want yeah let me drop the mob x link here i'm won't
[04:05:14]  probably be running too much longer but yeah um yeah decorators standards blah blah blah yeah he yeah what's next from mob x for other horizon interesting is currently having javas
[04:05:33] cript around signals signals are hotter than ever popular so our lives like solid and recently spelled ruins and money more we realize we'll find this reactive models since 2015 branding obviously sales react
[04:05:42]  wouldn't be far off the mark that's true it's really like rich beautiful how would there happen blah blah blah blah yeah no i'm i'm yeah i always like
[04:05:53]  myself our articles how do i feel about my twitter backs i'll start it hasn't been it hasn't how should i put it it hasn't gotten my focus so far
[04:06:14]  which is funny because you think that building it on solid started like i would definitely like it'd be in my radar the funniest thing is i'm spending so much time on the
[04:06:21]  mechanics and that i haven't actually deployed a nitro app yet i know insane right it's because i just don't have to worry about that layer which is awesome i've
[04:06:33]  been just using like the the build and the node stuff um i think the most interesting thing about this experience isn't nitro it's just realizing the difference between things as
[04:06:43]  they as they grow up um and working through like refactors and stuff and like getting these features and like i built the solid hacker news example that i showed you guys and
[04:06:53]  it has all the bells and whistles where my previous versions i didn't have them all in like uh i i didn't include certain components i didn't uh you know i
[04:07:04]  didn't use the data fetching apis i just used create resource directly you know um i didn't use create data and yeah i mean i know this is a funny topic
[04:07:14]  you guys probably like who who cares ryan but the hacker news demo is 20 kilobytes 20.5 kilobytes g-zipped like and for my and
[04:07:24]  i'm just like man two years ago my hacker news demo same demo exactly that was 9.9 kilobytes g-zipped it was just under 10k that version
[04:07:33]  didn't have solid start that version didn't really do anything it was like all handwritten and optimized for the specific case then i'm then we added solid start is about 13
[04:07:43]  kilobytes part of it was beat adds some stuff and they they use a different uh minifier which is larger which bugged me a little bit for a while and
[04:07:52]  i was trying to like default the other way until i realized that it broke other stuff so i had to follow along with them so we we we lost and in the same time
[04:08:01]  um we all the part of the size increase was we added solid meta as part of solid start so it's part of the example and the router um got a little bigger
[04:08:10]  and then over the next two years of developing solid um that demo got up to about 16 kilobytes 15 16 and it was just solid in the router getting tiny bit bigger
[04:08:24]  and then uh um the move to vinci got ended up with about half a kilobyte i haven't quite figured out where it came in yet and then adding the
[04:08:38]  data fetching you apis um now got us another two kilobytes as i said it's unfair because i didn't add them before um and updates the router router and
[04:08:50]  the preloading added another kilobyte even though i removed the meta from the example i ended up doing that i added the error boundary implicitly inside solid start now that
[04:08:59] 's another 1.2 kilobytes and you add it up and we're at 20 kilobytes so the experience much is much nicer it has all the pieces it
[04:09:09]  makes sense the generic case but like watching that um that growth over time is is tricky because i over the process i've tried to shrink stuff and you know make things more more
[04:09:24]  optimized but truth of the matter is yeah the uh the full hacker news demo now is 20 kilobytes um the islands version i showed you is still like small it's
[04:09:36]  larger than it was it was 5.6 before now it's seven kilobytes um but yeah i guess this is the reality of things i'm not sure how is
[04:09:52]  hacker news bigger than well the movies uses our server component solution so the hacker news example that i'm showing showing you here is fully client-side csr the server component solution
[04:10:05]  or like the the islands routing solution for the hacker news would would be smaller um definitely um but given the rate of the size things have updated and got larger i wouldn't be
[04:10:17]  surprised if uh instead of being like 13 kilobytes it's like 15 kilobytes now um i'll i i i see what i can do here but yeah
[04:10:31]  yeah i mean and part of that's that some there's some bulk because a solid 1.0 like that's gonna be gone with solid point 2.0 but yeah bug
[04:10:42]  fixes edge cases it's just it's it's been uh it's it's definitely watching the the hacker news demo which has been like the defining demo that i've been doing
[04:10:53]  since the very first i think i did the web i think the first solid app demo was a hack news demo done with uh web components um watching that basically double in size
[04:11:03]  the last couple years um is a is been tricky for me you know like it seems like 20 kilobytes it's like seems huge by comparison to where it was to be
[04:11:16]  fair to be fair to be fair svelte kit has also got bigger like if i go hn dot svelte dot dev i remember when we did our first
[04:11:25]  demo they were 15 kilobytes 16 when we were about 13 and then for the longest time they were about 18 kilobytes while we were about 15 kilobytes
[04:11:40]  now what what's going on sorry i got this this gotta be some garbage here let me go incognito sometimes the browser makes things louder larger too okay let's try this
[04:11:56]  yeah 26.8 kilobytes 27 kilobytes so um felt kit is also bigger it was 18 kilobytes when we were 15 so yeah i mean we're
[04:12:07]  all kind of scaling up a little bit um sometimes this is actually caused by the browser but this is the reason you asked nitro which caught me on it nitro split stuff
[04:12:20]  into more bundles so it's not going to be able to get into a single bundles which actually increases the total kilobyte weight slightly than if it was in
[04:12:26]  a single bundle i don't know why yet um maybe i'll look at it at some point for optimization but this is one thing that i did actually notice about nitro i
[04:12:33]  know that's the most roundabout way of getting it part of it is felt five will shrink this um a good amount to not a huge amount but like for example let's
[04:12:42]  go to this comment page let's preload it bam 3.2 kilobytes for the for the story page here and they don't even have a common compressing
[04:12:51]  in this example and it's 3.2 kilobytes whereas the solid version of this page is 1.2 kilobytes and it's so my guess is that part
[04:13:00]  of this is like svelte components are so much larger from their compiler compared to solid so like it's not everything here but i wouldn't be surprised if when s
[04:13:15] velte 5 comes out this goes down to about 23 kilobytes um from 27 or about 24 from 27. i know i'm nitpicking over kilobytes it
[04:13:24] 's just i'm very familiar with this example obviously people will be very quick to point out to me that the same hacker news example in next js is like 100 kilobytes
[04:13:32]  but like i don't i don't care how absurdly large next js is i'm it's the i can't do anything about that i can try and do stuff
[04:13:40]  about solid and it definitely definitely bugs me a little bit oh sorry yeah yeah it's hard to yeah sorry about that yeah i was just yeah sorry this is this is the
[04:14:03]  uh yeah 26.9 kilobytes and then i was saying if i hover over over this get this page is 3.2 kilobytes so yeah i don't
[04:14:12]  know yeah yeah no yeah i mean i haven't built it recently was it uh next next rsc hacker news demo what what are we at yeah 90 kilobytes 89.
[04:14:44] 6 i didn't no link preloading do i have an older version oh weird yeah you know what i don't think code splitting worked properly in the early versions of
[04:14:59]  the next hack uh rscs i think this is why their movie apps demo is 200 kilobytes i mean it's i i don't think it's a fair comparison
[04:15:09]  because like obviously and this wasn't early like this was this i made this hacker news demo not like when they said they had the bugs like in the fall like i didn
[04:15:18] 't make this hacker news demo until like march so like it was like this for months someone who's had them make a state management solution for react handle massive nested objects for
[04:15:33]  dx reasons why are there so few state management solutions and why do framework devs never enter the state management area i mean react did this they i there is an opinion that
[04:15:45]  render framework should just render and leave the state management to other libraries um and react pushed this philosophy for years and it let them like do stuff with plain objects it's just like
[04:15:57]  if you take that out of their concern it just it's much simpler it's the same way angular had like just plain pojos you just used just your javascript
[04:16:04]  objects ironically i don't think i think state management has had been a consideration as of late but not in the way that you want it to it's just that they they needed
[04:16:17]  better primitives to be able to handle composition within components and stuff and hooks and all this stuff kind of thing but the problem is it's because component frameworks that render components basically
[04:16:29]  the components are whole world so state doesn't like state can exist outside of it but it's not something that is in their purview like they don't consider external state
[04:16:40]  actually something that they own or have any business in they don't care where your state comes from the only state they care about is you state you know what i mean and so
[04:16:48]  from that perspective it's a function of the component re-render model in a sense even felt suffered from this a little bit pre version 5 i mean they had this but they
[04:16:57]  did make stores so but is like but i i think that would have made them feel like a batteries included framework i think that felt was looking at stuff like view um who
[04:17:12]  you know who's primitives but even view they weren't external you had to use them the option objects before the composition api so i can't even say that literally we
[04:17:20]  just because of react and the component we render modeled what whether it's an actual vdom like like reactor svelte or fo vdom like or sorry reactor view or
[04:17:30]  fo vdom like svelte these are the patterns that were driving it um and i think it's because function you know the the classic react ui equals function of state
[04:17:42]  like they were trying to like have that definition of state which is different than like say global state management when i created solid i didn't care about the renderer right like
[04:17:52]  i didn't think a renderer was a thing i was i was thinking create effect updates text node i was thinking jquery ask you know and for that reason the reactive
[04:18:00]  state was the only thing i cared about so that's why often when i when i talk about solid um you know i call it a state management that happens to render uh
[04:18:10]  so i think that's why because like in a sense react was carrying on the tradition of like backbone like like where they were just like that's kind of conceptual like like
[04:18:26]  we just render the view um and in those kind of models or those kind of mental models you would have a separate model or like state thing that had nothing to do with it
[04:18:39]  i think when you look at large companies especially with amalgamation of different tools i think it was pretty expected that people had their own like state management and they just needed something
[04:18:49]  for the view i'm gathering that's the history there yes backbone had models and stuff but what i'm getting at is like a model was a thing um yeah i guess
[04:19:00]  some of the earlier frameworks had more things react was like trying to say like we were just the view layer like we don't include the models that's what i meant like in
[04:19:08]  a sense in a sense they were still thinking very much like you have models and you have your view was a view model like your components and they're like we don't
[04:19:19]  handle models that's on you i use react with backbone models at my company because we we use react native with backbone models and we use knockout with backbone models backbone was how
[04:19:32]  we did our like our data side and then we fed that into knockout and as i said originally i think i've said this before we use knockout like in our stores
[04:19:43]  originally to be really reactive and over time i actually pushed the knockout code pretty hard into the view level and and then made the the stores actually just pretty pure backbone and
[04:19:54]  i think what you're seeing right now happening with the cache apis is kind of a version of that where people are like seeing like a cache api is like the non
[04:20:05] -reactive external piece and then you like build your primitives inside like the create async the funniest thing is because i wanted to keep solids uh reactive model for rendering
[04:20:15]  um our cache apis are actually fine grained reactive but we are treating it kind of like it's outside of the framework so yeah i i uh yeah i like i get
[04:20:26]  both sides i think it's kind of like we're talking about data fetching it's like a similar analog here where like people kind of want to do it locally and
[04:20:34]  then they realize like it seems more efficient to do it hoist it out and then like this constant tension back and forth yeah it's long time flex manager i still reflect concept
[04:20:47] ually yeah yeah yeah exactly and it fits that was a good model for react if if you're going to be very functional very re-render or whatever having this immutable
[04:20:57]  state driver um is great efficient not so much but great from like a matching mental model yeah we talked about this in the previous stream uh mostly he's out of his mind but
[04:21:16]  i mean that that's that's fine i i i i i get where he got there the they can all use like web components or whatever like no build is a fiction
[04:21:28]  all that's happening is the build is getting pushed to a different part of the stack like it's not like we're not going to use typescript or whatever and uh it
[04:21:37] 's kind of like it's kind of like the web standards argument you know like that's what i meant by go use web components because like we're all just going to
[04:21:45]  like sit there and use web standards and like wait to for them to take 15 years to catch up to where we are today no that's not going to happen we can keep
[04:21:52]  on pushing forward so like the fact that you can do more with no build than you could be previously is nice is using no build better than than using build of course not like
[04:22:03]  we can accomplish so much more so it's like i'm glad that like the the expectations that he set out for himself for what he wanted to build with the web 15
[04:22:14]  years ago which tracks maybe a little longer when he's in rails he's like i wish i could do this now is possible in the browser but like sorry dude 15 years have
[04:22:22]  passed uh he gets angry at me um we talked a few times he just because like my opinions and stuff on web components it's funny because like i used web components in production
[04:22:37]  for almost a decade like i'm i i i just i'm sick of people peddling the crap that like like like if you bet on the platform you're betting long
[04:22:49]  term that's it's it's a fallacy like anything that gets used versus not used is the truth like you can say like ultimately the platform is the thing that lasts forever
[04:22:59]  but the patterns change so it's like does it matter you know like sure nothing gets deprecated but like if no one is using it anyways does it does it actually
[04:23:10]  matter and i'm not saying web components don't have a use i'm just saying like they don't do the same things as what we do with javascript frameworks so
[04:23:17]  like i'm not even going to i'm like let them do what they do yeah and i mean i could appreciate that um you know to a certain degree but it's
[04:23:30]  it's it's it's got to be like around all the ceremony and stuff but like he's also a ruby developer i use coffee script i mean i can definitely identify
[04:23:41]  with a ruby developer like you don't dhh is a little bit older than me but not by much we grew up in a time period when you learned to code
[04:23:52]  that everything was you know c and c plus and god like delphi no i like you just like everything was strictly typed you know and these long freaking build processes um in
[04:24:09]  your ide and i getting into the early 2000s there was like incredible push on like build tools like stuff from microsoft was putting out in visual studio and it was incredible
[04:24:20]  to see like you know all this visualization and all this stuff but ultimately you were sitting in this pile of crap and being like yeah i can do all the stuff i have the
[04:24:28]  docs at my fingertips you have to understand this wasn't available before and like the internet was pretty slow and stuff to be able to like highlight on code and like go to the
[04:24:35]  definitions and like get the docs and stuff was amazing and you know but on the other hand like someone could just freaking open a notepad write some javascript and
[04:24:45]  just like ship stuff like a thousand times faster and i feel like like ruby you know and the scripting languages and stuff like when they came out that was the power it
[04:24:56]  was like finally get rid of the types like pain in the ass slow down like terrible terrible thing when you can just write the code and it just works a coffee script i know
[04:25:07]  people don't believe me but like it felt like i was just thinking and then i'd write down some like play code and then it just ran first go sometimes it went
[04:25:17]  to something you get weird undefined thing but you have to understand coffee script was a compiler so technically speaking if you did stuff like that wouldn't compile or whatever it would
[04:25:25]  still you know yell at you a little bit um but like it's a very different type of productivity like for me to this date like greenfield that's amazing right can
[04:25:37]  you picture just like sitting there and being like it's also like people thinking about chat gpd build me an app chat gpd using coffee script felt like that like
[04:25:46]  i want uh this like a picture like making a video game and be like spaceship like that's how it it it felt like so like i i can at least identify with
[04:25:56]  that from dhs perspective using stuff because like having all of this like he didn't want the types back in the day in java or c he was using ruby
[04:26:04]  why would he want them in javascript now like i i i i get that but like using type languages these days is a lot different in one hand it's like the
[04:26:16]  tooling is caught up to such a degree the and the build times and stuff although i i mean i did have a couple rust developers on stream a couple times and i can
[04:26:23] 't say the build times are amazing there but i just mean in general like um you you definitely get like i feel like there's more benefit now i'm i'm i'm
[04:26:34]  less and because type systems are a little looser sure typescript drives me nuts like a bunch of times because like javascript isn't a type languages so there's like
[04:26:45]  a mismatch but like it's it's it's almost like annotation it's it feels like a happy medium for the most part and i i can't see people getting
[04:26:55]  away from that especially if you're if you're in a in a zone where you're shipping software that other people use yeah however your build system reduces bundle size in a
[04:27:19]  way that even smart import maps can just not do oh you got another tweet for me dev sorry i went on my little rant there um let's see here why is
[04:27:45]  it why is it not oh it's because i'm in incognito just a second let's pull this in here can i type language they're better incentive for this reasons
[04:27:54]  yeah so you're talking about now this is a whole article dev i'm not going to read it right now but yes i think you touch on a lot of the same
[04:28:18]  points actually more detail um yeah god why is he such a genius god feldman everyone should watch talks by richard feldman does absolute anyways um yeah yeah anyway
[04:28:57]  i think i'm done for today i don't think we need to catching me with the dhh question last minute is it's a good move for prolonging the stream
[04:29:08]  but i think i think i think i think i think we're good i uh you know it's like bringing up htmx last minute i i've come to peace
[04:29:18]  with htmx i think it's like i think there's a primitive there that's worth um exploring i think it just doesn't i think htmx itself
[04:29:26]  it's too primitive to actually solve the real problems but i think i'm glad that they're they're kind of brought people back into thinking into html partials
[04:29:36]  in a more interesting way people are now asking yeah sorry i just is your sometimes questions are you fucked up but a lot of the time you make something yeah yeah i mean
[04:29:55]  i get why you're in so simplicity honestly single page apps were that there was such a huge simplicity boost when we went to single page apps over the server stuff that was going
[04:30:07]  on at the time we've gone so convoluted with like partial updates and like honestly the kind of problems we're trying to solve in the late like 2005 to 2010 sound
[04:30:16]  identical to the problems we're solving now just from the other side like a server first side so like i feel like what happened was you just went single page app and you
[04:30:25] 're just like screw all of this and i feel like there are people who are ready for that kind of radical simplification the only problem is there's only so i could
[04:30:38]  be wrong but there's only so many uh what do i want to call them identifiers characteristics here and you know how people always talk about the spiral you know you know as
[04:30:49]  we go in circles yes there's a spiral so to speak but when people talk about the spiral they're thinking still very like three dimensionally like they're thinking like they
[04:30:58] 're thinking like it's not even three dimensional it's like two and a half dimensional they they notice there's a circle and then they notice that it goes up but like at
[04:31:06]  a certain point you do like enough factors align on those loops that you actually do kind of get back to where you were again maybe you have more knowledge this time but you do
[04:31:22]  get like the same set of criteria beliefs come and i think we've we're hitting this time around where we're like yeah we are hitting the same place again but like
[04:31:34]  we just can't go to the inevitable next step which would be radical simplification that the radical simplification doesn't work this time and obviously anyone who's on the previous round
[04:31:46] about would always say that so i understand the hypocrisy in saying that because i'm sure the people working on the server stuff at the time the.net didn't think single
[04:31:54]  page apps were a way out but single page apps were actually kind of new i don't know if we have something radically simple on the other side that actually solves the problem
[04:32:04]  in the same sort of way something like htmx is probably a good contender for it um you know but i i the thing is it isn't new like we
[04:32:16] 've been the thing is it isn't new like you know but i don't know what's going on in there so i yeah i don't know how much is f
[04:32:23] c it depends on what your site is if if that difference on that difference probably not a ton if you believe ebay that would definitely cost you some money but i don't
[04:32:40]  know uh i think it's it's a bigger deal uh if the difference is bigger because locally or for like you in say the us or wherever you are where you have
[04:32:53]  decent internet you get that but someone else gets 3.5 seconds um you know i well 0.9 to 1.6 i'm gathering mobile speeds um desktop usually gets faster
[04:33:08]  than that so yeah i mean it it really depends i i'm not i'm not too worried like to know that we have tools that can give us that level of improvement
[04:33:23]  is something that i i want to work on because you know it makes things better i'm not necessarily going to be concerned on what the practical difference is because it does make
[04:33:34]  a practical difference to some but probably not most all right i think i'm done now like my first year was and let's go all right everyone have a great weekend um no
[04:33:55]  stream next week because of thanksgiving i'll see what topics are for december but hopefully next time we're talking i will have implemented all the action stuff and we'll
[04:34:03]  be looking very close to sol start beta 2. so thank you all for joining me today and is there anyone else streaming that i want to yeah i don't know i'm
[04:34:13]  just i'm just gonna check out you guys all have a great one Yeah.