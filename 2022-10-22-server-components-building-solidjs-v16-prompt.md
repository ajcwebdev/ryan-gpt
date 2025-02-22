---
showLink: "https://www.youtube.com/watch?v=adXqweWZcNA"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Server Components? Building SolidJS v1.6"
description: ""
publishDate: "2022-10-22"
coverImage: "https://i.ytimg.com/vi/adXqweWZcNA/maxresdefault.jpg"
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

[00:00:00]  Hello everyone, welcome to my stream today. Sorry for the bit of delay. I was just getting everything set up and I realized I couldn't find my headphones. So I
[00:00:08] 'm borrowing these wonderful headphones from my wife. I guess we'll see how that goes today. But yeah, welcome everyone. How about you all come and say hi in the
[00:00:22]  chat. I'm just going to push this out on social so people know that we're getting started here. Let's see how it's going. Hey. Yeah,
[00:00:33]  I guess I'll push Twitch too. I never know if I want to push Twitch, right? We're live. What's my Twitch handle? RyanSolid?
[00:00:44]  Let's make sure the screen share works too while I'm at it. Oh, how are we doing? Should actually make sure this link is actually right. Yeah.
[00:01:10]  Okay. Cool. All right. So how's everyone doing today? I had this all planned out and I've been working on the stream for a bit because obviously I
[00:01:26] 've been working on solid 1.6. And then I get up this morning and Nikhil's like conveniently left a little message in chat. He's like, see if
[00:01:38]  you can tell what I did. And I didn't get it at first. I was looking. I'm like, okay. He looks like he's changed some of
[00:01:45]  the output of this island stuff we've been doing. There's some assets in CSS, but I was not quite following what he had to show. But he'd actually
[00:01:55]  managed to get persistent islands over navigation, which is really, really cool, which I'll show in a bit. But the main focus today on the stream is we're going
[00:02:05]  to be looking at solid 1.6, which brings a whole bunch of partial hydration and, you know, these islands server component type concepts into the core of solid.
[00:02:15]  And along with that, you know, it impacts stuff like the Solid Start meta framework. So I'm going to look at how that's implemented and how we achieve that.
[00:02:25]  I've been showing these demos for the last, I don't know, month or so. I've been, you know, ViteConf and a few others and our
[00:02:33]  Solid Start docs are an example of it. My Hacker News demo. And we've been just building more and more stuff this way. And it just like, it
[00:02:41] 's kind of crazy. This feels like a new thing. And I want to show that off today. The other piece, but there's more stuff in Solid 1.6
[00:02:51] . So we're going to, that's probably where we're going to get started in a minute. I'm just going to give you all a little bit of time to
[00:02:55]  get past the Twitch pre-roll. You know, now that I'm an affiliate, it just sits there. And I haven't figured out how to roll stuff myself.
[00:03:03]  So, you know, we deal. Hey, people in the chat, how are you doing? Add stuff without breaking changes. Yeah, I mean, I've talked
[00:03:15]  about this a bit before, but stuff like server components and partial hydration and stuff are actually almost like adding a framework around a framework. It's like a new framework. And
[00:03:26]  you put the old framework in the inside. So it's not that breaking per se. It's like you're just kind of wrapping a framework with a framework. Okay
[00:03:37] , yeah. There's a lot of stuff coming in chat now. I was told that I should watch. I'm going to pull this over here because I'm off the
[00:03:46]  screen so I can watch it. I'm supposed to watch the Twitch chat as well because apparently people have been subscribing to me on Twitch and I didn't even realize.
[00:03:54]  And I apologize for that. I very much appreciate the support. I just had no idea. I was like sitting here in StreamYard going, oh, I wonder why
[00:04:02]  I haven't got any subscribers yet. Maybe no one watches my stream on Twitch. But it turns out that was an incorrect assumption and I am just an idiot.
[00:04:10]  So there's that. Yeah. So how's that? Yeah. Sorry. There's so much good stuff going on in the chat. You guys are all just saying hi
[00:04:22] . I can't believe StreamYard doesn't notify you. Yeah. I mean, that's a strike there, right? I'll find one. Yeah.
[00:04:33]  Yeah. That's my hope. I'm hoping that Theo will solve this problem for me. So, yeah. Yeah. Lots of highs going on in the chat. Yeah
[00:04:43] . We'll get started here in a minute talking about solid 1.6. But I'm just killing time because I don't have one of those cool banners that everyone
[00:04:51]  has, you know, where people like sit there and they play music. And I don't have that. So, forgive my lack of, you know, pro setup
[00:05:03]  here. All right. How was... Okay. We're not bad. We could probably get started here in a minute. Let me just take a sip of my drink here
[00:05:15] . Oh. No. Let me see. And let me check Twitch chat for a second and see if I missed anything. Yeah. See, this is great. Twitch tells
[00:05:26]  me stuff like first-time chatter is in here. Right. Yeah. This is awesome. Ryan drinking ASMR. Oh, God. Oh, right. No. This
[00:05:40]  is really cool to see everyone there getting more people on Twitch today than usual. We're usually really heavy on the YouTube side. So, that's awesome. Okay.
[00:05:51]  So, yeah. What are we talking about here today? Let me just get a banner up. It helps me later, you know, edit stuff. And I should have
[00:06:00]  prepared these ahead of time. But as I told you, I got, like, way caught off by Nikhil's stuff this morning. It was... I was just like
[00:06:07] , what? And then I've been kind of into it ever since. So, I hope you all will forgive me. Okay. So, yeah. Let's start
[00:06:16]  the stream and talk a little about Solid version 1.6. Solid version 1.6 just came out this week. It was largely inspired by the work we've been doing
[00:06:24]  in Solid Start. Solid Start is our meta framework, kind of like Next.js and whatnot. And I had a lot of ideas at the beginning of how I wanted
[00:06:34]  to build this thing. I wanted it to be built on, like, RPC type calls and get rid of stuff like Git server side props and all that. I never
[00:06:44]  liked that pattern. It was kind of like... I wanted to be able to do granular updates, right? So, stuff like loaders never really worked for me. And
[00:06:54]  it didn't really work for Solid. So, we kind of went down this journey and tried to come up with the best single-page app kind of mentality approach we
[00:07:04]  could come up with, like, very app-centric. And I showed a bit of that on the Solid Start stream. And I've showed a bit of that on the
[00:07:12]  vConf. But at a certain point, we were at the point where we're like, okay, we're going to release Solid Start and we need to write docs.
[00:07:21]  And as you know, not every developer is good at docs. Not every developer likes writing docs. And I don't mind them, but it's tedious. Like,
[00:07:31]  honestly, I have a lot of respect for people who can sit there and just turn away docs. It's freaking amazing. And what ended up happening was, like, you
[00:07:39] 're writing docs and trying to, like, go, okay, just a few more pages. Let's just keep on doing this. And Nikhil's like, okay,
[00:07:48]  I can't do this. So, he was like, yeah, let me just, like, try and do, like, some islands. We'd seen fresh and
[00:07:54]  we're like, yeah, let's do some islands. And I talked a bit about this before on a stream. We managed to get this approach to islands working, which
[00:08:04]  was based off this idea of hydration keys. So, I'm just going to, but before we get into all the island stuff, and I'm sure people are interested
[00:08:19]  in that stuff, I'm just going to kind of talk about solid 1.6 more generally and talk about, you know, a few of the other features and we'll
[00:08:29]  build up to that. Okay, so, the key thing with solid 1.6 is obviously this island hydration stuff we talked about, which we'll go into more detail
[00:08:37]  in a minute. Basically, there's only really two major features. The second one is that we worked on spreads. And you may go in, okay, well,
[00:08:51]  what the hell is interesting about spreads? I mean, you just, you know, when you think, when you think of, how should I put it? Maybe, actually
[00:09:03] , maybe I'll use one of these ones. When you think of a component, most people, when they see counter, they see counter, essentially. So, when
[00:09:16]  you see name equals whatever, hue, I don't care, you kind of see this, right? Like, that's the mapping that you see in your head.
[00:09:30]  So, when you see a spread, you're like, oh, well, like, what the hell is the big deal, right? Because, you know, I've
[00:09:38]  got some props here. Well, isn't it, like, ta-da? Like, this is not very interesting, right? You know, every time you call this
[00:09:47]  function, you can kind of merge these things together. And you're like, okay, that's great. Good times. But the problem or challenge here is that in
[00:10:00]  a reactive library, you know, we have this limitation around destructuring. Like, you suddenly are in this point where this function is not going to run again.
[00:10:12]  So, like, what are you going to do? Wrap the whole thing in a function and then, like, tell it, like, if anyone's familiar with solid,
[00:10:21]  this will make sense to you. Like, how do you make it know to rerun this again? You don't want to do this because if you had to rerun
[00:10:30]  this whole freaking component, you'd be recreating buttons, recreating state. This is terrible, right? So, we had to come up with really clever solutions to
[00:10:43]  handle this. And, I mean, it's not super clever to begin with. But if you've ever seen any of solid's compiled output, generally speaking, if I
[00:10:56]  have a prop name hue and then I have, I don't know, let's make this hue. Actually, I'll keep hue as a string just because it can.
[00:11:04]  But let's add something else, like initial count or something. Initial count equals whatever. I don't really care what it is. If you've ever seen solid
[00:11:16] 's compiled output, this is what we do. We create a component called counter, which is actually honestly just calling a function. We call on track, but that's not
[00:11:25]  important. And all the magic happens here in this prop object. And I want to just kind of show this a little bit. So, basically, name hue just gets
[00:11:33]  passed straight through. But the second we have something dynamic here, like this count, we wrap it in a getter. And what this means is we didn't execute count
[00:11:42]  right now on the outside. We actually execute it inside when you access prop.initial count. Right? So, this is kind of like high level and you
[00:11:55] 're like, okay, well, that seems maybe reasonable. But the challenge here is that what if you don't know that it's initial count, right? Like, what
[00:12:08]  if we actually need to spread a bunch of stuff? Some other props or something, right? And solid actually made a helper for this. And you might have used it
[00:12:20]  in your own code called merge props. And what this does is it essentially combines these objects in such a way that it, in reverse order, it checks if the property exists
[00:12:32]  on the first object and then on the second object. And you might have to go, okay, wait, I thought I was merging these together into a single object.
[00:12:39]  Well, we don't want to merge them because there's this problem, perhaps. What if the property doesn't exist initially and is added later? We don't actually,
[00:12:52]  in order to track the right stuff, we have to not actually merge them, but actually walk backwards through a stack. And if that doesn't, that's probably a little
[00:13:01]  technical for you all. But you can kind of picture that if I had, if I had like, see, I want to do it in a scale draw, but
[00:13:12]  I don't want to like write a bunch of code in a scale draw. That's why it's like easier for me to write it here. You know what? Let
[00:13:16] 's just write it here. You can picture if you had like, let's just call them, I just, it doesn't really matter what I call them. Let
[00:13:25] 's call them, you know, if I had an object that had name, John, and what's another one? Last Smith. Okay, right. And then I
[00:13:46]  had another object, which had name, um, Jack. Okay. This is just silliness. If, if we, if we were to go and do something like this
[00:14:02] , where we spread a and then spread b, your expectation of this is ultimately that you're going to end up with an object, result or whatever, is going to
[00:14:18]  be an object that's essentially, um, what is it? Name, Jack, last, Smith. And I mean, that's kind of unsurprising. You
[00:14:36]  took the Jack. Oh, basically you have like John Smith here and you actually override the name with Jack. Essentially you, you compress them down. So you end up with
[00:14:46]  Jack Smith and because B doesn't have a last name, um, it falls through to A. But as I was showing you before, we have these like reactive getters
[00:14:55] . Um, we need to, our challenge gets a little bit harder because we need to actually track, um, the reactivity here. So essentially, uh, let
[00:15:07] 's see how I go. Yeah. So essentially, um, because, because of this, we, if we compress stuff and some, someone later adds last here, like
[00:15:22]  now it's, uh, Jack Black or something. Right. We need to be able to know that this changed and you're kind of going like, how could you
[00:15:36]  possibly, like, if, if, if, if you went through and, and you're not going to rerun this function, how are you possibly going to know that
[00:15:44]  last on object B changes? So the trick is generally speaking, if the object can change, we use proxies. So we secretly subscribe to last on object B
[00:16:02] , even though it doesn't exist. And then when we get to A and it fulfills, we subscribe, we also subscribe to A. So technically this, the
[00:16:13] , if it hit Jack right away, this was initially subscribed to, to A, and this was subscribed to B and A, right? In our initial example here.
[00:16:26]  So at the time, essentially, if, if, if there was something below it, like a C or, or sorry, not C, but if there's something below
[00:16:35]  it, we don't really care. Like if there's a Jack here, we don't care if someone changed John on A here, because it's going to override
[00:16:45]  it anyways. So you can change A as much as you want, but because someone could add last to, to B here, like add black, we need to have,
[00:16:57]  be subscribing to a property that doesn't even exist on B in order for it to reactively update. Right. So this, this was something that, um, I
[00:17:10]  didn't realize at the beginning of solid, at the beginning of solid, I did merge. I was like, oh, we can just merge the getters by, by
[00:17:18] , you know, going down the object tree and just grabbing the first getter that like go in reverse and grab the first getter that matches and use the object.def
[00:17:27] ine properties to construct it. I don't know if you guys have seen it. You can, you can, you can use getters like in line, like, like
[00:17:33]  I'm, I was showing earlier in our component props here. I don't have it anymore. Uh, if I get rid of the spread, you've whatever,
[00:17:41]  like, uh, what's an example, uh, last equals name, whatever. Okay. Um, oh, yeah, I probably have syntax errors because of like all the
[00:17:50]  other stuff I've been adding on here. Anyways, not important, but what I'm getting at is you could always combine it, but because the possible properties could change on
[00:18:00]  here, I actually have to use proxies. Right. So, so there's a comment here. I see why Rx has thousands of operators. Well,
[00:18:10]  yeah, because the combinatorics, once you get, uh, once you add dimensions to the problem, um, like what should trigger changes and, uh, time like
[00:18:21]  asyncness, every simple problem, like a map becomes like eight variations of map. Right. Right. The complexity just skyrockets when you start trying to like
[00:18:31]  use like specific terms to like describe all the common, common rhetorics of what your intent is for something as simple as a map. When you go, when you,
[00:18:40]  when you get too far here, luckily for us, we actually would, uh, fine grained reactivity, sorry, mostly express things as regular, like expressions.
[00:18:47]  It's like cells in a spreadsheet, you just kind of like do a sum there and you're not like doing a bunch of operators, but that complexity explosion is actually one
[00:18:54]  of the reasons that I sometimes struggle with RxJS. Um, because, uh, like if you can avoid that complexity, you kind of want to, although
[00:19:04]  Rx is incredibly powerful. So question is here, what if the key name is removed from A, does it subscribe to B dot name? In this case, um,
[00:19:17]  it didn't matter because B was already, uh, sorry, I did this backwards. Sorry, my bad. B was already subscribed to, right? I did this
[00:19:26]  backwards and my mistake B was already subscribed to. So removing, uh, a doesn't matter, but if we move B, well, it knows it's changed. So
[00:19:35]  that when it reruns, it will subscribe to B and a, because it'll hit B nothing's there, fall back to a and subscribe to a as well. So
[00:19:43]  this is pretty complicated under the hood. And it's the reason why solid started moving to using proxies all over the case. Um, and this, this, uh
[00:19:55] , this, this, this, this happened a while ago, but the, I did this for components and we, and it's been working really well. But the
[00:20:02]  problem is with native elements, when we actually wanted to finally render it down to the Dom, I didn't do that. I did something a little bit different and I
[00:20:10] 'm going to show, I'm going to show, show this right now for a minute. Um, I came up with a spread operator, um, because this is
[00:20:19]  where the actual effect is. This is where we actually write the stuff. It's fine to merge props when you're doing all these transformations. Cause then the child will
[00:20:27]  get its own props and do that. But ultimately we need to write this to the Dom, right? That, that is why we're doing this. And unfortunately my thinking
[00:20:37]  for the longest time was like, okay, well we got the static stuff. It'll go in the template. Like see name hue. It's right here in that
[00:20:43]  div. We just clone that template with name hue. And then we will, uh, where is it? We'll make an effect that sets the attribute for last whenever name
[00:20:54]  changes. Right? So this is easy. And then we will spread a and spread B and, and wipe our hands. Um, but this is kind of bad.
[00:21:06]  And I'll explain why in a second here. Here's a question. Yes, this is correct. So it'll subscribe to all the properties of the last auto B in
[00:21:17]  this case, because it overrides all, but not all properties, the prior objects in case, because they can get overridden. Well, yeah, exactly.
[00:21:23]  Every time you run, you have to do it. The problem is it's really easy to do fine grain updates like this, where you're just like, oh,
[00:21:27]  I'm just going to update this one thing that pinpoint changes. Like when you change that name in solid, that one attribute on the div just changes. Like we don't
[00:21:35]  need to rerun anything else. But once you get spreads, now you're like kind of pulling all this stuff together. Right. And. And now I need this.
[00:21:48]  Now I need to check the Twitch chat. Um, so I thank people who subscribe. I will do so in a minute. Um, but, uh, oh yeah
[00:21:59] . Uh, Ben home subscribed tier one for three months. Thank you, Ben. Um, see, I don't get this through, through, through that. And also
[00:22:06]  Nicola, uh, also subscribed on man. Thank you so much. Um, Theo subscribed too. There you go. WR rest. So many people subscribed. Yeah
[00:22:17] . I need to be paying attention to this chat more often. I'm sorry. Anyways, back to the technical stuff. Okay. So the problem with separating out the spreads
[00:22:26]  from the, from this pinpoint updates is because they get to play this game where they get to fight each other. Right. And maybe, maybe I should just illustrate this
[00:22:35]  really quickly to actually show you what I'm talking about. Um, because we let's actually, I'll keep our div around and maybe we'll actually insert it somewhere so
[00:22:46]  we can, can see it actually. I don't even know if I can see it. I should pick something that's actually a real thing that we can inspect on
[00:22:54]  it. Maybe like a title and I need to get maybe two signals. Um, yeah, whatever. Count two. Okay. Increment two. Okay. Maybe I need
[00:23:12]  two buttons now. Okay. I, it doesn't really matter too much how I do this, but what I'm getting at the, the problem, uh, right
[00:23:22] . And then because they're adjacent, we need a fragment. Okay. A is not defined. What, what was I doing? Oh yeah. Cause I'm spreading a
[00:23:31] , that doesn't exist. Okay. Um, okay. Yeah. Yeah. This is so fun. This actually set up the scenario to do this, um, because it
[00:23:41] 's almost like I need to actually, it's easier to set this through, through props than any other scenario. So maybe I should have made it into separate components,
[00:23:51]  but the, yeah. Let me see if I want to, how I want to do this. Cause the, the problem is. Okay. Actually, you know what?
[00:24:00]  I can show this problem without even using spreads. Um, I think, because I think, I think JavaScript will let me do this, but TypeScript will not.
[00:24:11]  Okay. Um, and actually, uh, yeah, let's do this. Title, count, one, title, count, two. Or is it just count?
[00:24:29]  Uh, let's just count. Okay. All right. That's funny. It's cause they're both. It's cause I'm setting count. Whatever. Okay
[00:24:40] . Doom, doom, two, buttons, two, buttons. One, two. Interesting. Why am I, I'm like missing some, oh, it's cause it
[00:24:49] 's count. It's not count two. This is why you should use the recursive functional form of stuff most of the time. Okay. Sweet. Okay. And
[00:24:59]  if I inspect this, um, I don't know if you guys can see this. Um, but there's a title five here. And when I click on this one
[00:25:16] , it's going to switch to title three and you'll be going, wait, wait, wait. Doesn't this title come after this title? Like shouldn't,
[00:25:24]  uh, like shouldn't this, it always listened to this one and never listened to count two. Or like vice versa. Why like there, oh, it went to four
[00:25:34] . It's reactive. It's all fine grained and separate. It doesn't care. It's like last one wins. And this is, this is, this is
[00:25:45]  usually, um, fine because you don't have the same attribute on the element twice. I did this purposely, um, because it's funny that I'm not,
[00:25:56]  you know, I'd expect JSX to get really mad about this, but like essentially, generally when you program with JSX, each attribute is independent, right? So
[00:26:04]  like, or sorry, like you, it can appear once. So you don't, you don't have to worry about this merging problem, but essentially because what this comp
[00:26:13] iles to, I think we're, we're looking at here is literally just like two effects. Um, let me pull this out here. Uh, I mean,
[00:26:20]  they get grouped, but essentially it's like set title, set title, the two separate DOM updates on the same element on the same attribute. So they're just like fighting
[00:26:29]  each other. Right. Right. But what, what it's, it's basically like if the, if you had two effects and one, one writes this and they
[00:26:44]  both write the same thing and they're like fighting each other. Luckily for us, when you write JSX, you generally don't do this. So this isn't a
[00:26:50]  problem. However, spreads make this a problem again. And that, because you could have the item inside the spread and their item outside the spread, and we need to
[00:26:59]  merge them. So the work with, uh, with, with solid 1.6 was instead of, I'm getting to my point here, instead of doing what I
[00:27:10]  showed you all a minute ago, where I was, uh, I don't know. I'm just going to add a spread here. I don't care what the
[00:27:17]  spreads for spread a, um, instead of, uh, adding a bunch of spread operators and, and effects separately here like this in solid 1.6. Let me make
[00:27:30]  sure that I'm actually showing this properly. Let's hope this works. Good. It is not defined. That's what I expected. Our spread now actually merges
[00:27:44]  our props together. So we get that same component style spread operation, um, on native elements as well. So it actually looks at the output and goes, okay, there
[00:27:55] 's a spread here and there's something dynamic. Well, it can possibly change. We have to bring them together. So it's a bit of a de-optim
[00:28:04] ization, but it means consistency. We won't have them like fighting each other. That's, yes. You, it, it, it's merge projects to be
[00:28:14]  done for props. That's that people. Yes. When people talk about fine-grained reactivity, they go, oh, this, this must be great because like
[00:28:21]  every single, um, point, you know, is updated independently. But the truth of the matter is the overhead of doing those subscriptions sometimes aren't worth it. As I
[00:28:30]  showed previously here, um, we were actually grouping these effects together already because it wasn't worth making a separate one each time. We just did a shallow diff check.
[00:28:39]  And in this case, yeah. I mean, now we merge them together so we get the proper results. The key part of fine-graining reactivity isn't that
[00:28:47]  it's always super fine-grained. It's that you have complete control over the granularity of the change. And basically we can tell from the compiler, by
[00:28:58]  the way you write your code, how to break it up. We analyze the JSX and we're like, oh yeah, you know, these things should be independent.
[00:29:05]  These things should be together. And I mean, the heuristic maybe is not a hundred percent perfect, but it's smart enough to do stuff like going, okay
[00:29:12] , attributes and elements generally go together. But children insertion happens separately. And now, you know, you've basically solved that memoization problem just by the way, um
[00:29:21] , your, um, your markup or JSX is structured. And that's, that's the whole, that's the whole thing, right? It's not
[00:29:27]  necessarily because you made a component that reruns. It's, it's like that part doesn't matter. We could put 10 components together, you know, you know,
[00:29:36]  stack them, put them through. Um, you know, they don't rerun generally. It's, it, it comes down to like logically breaking up, like once
[00:29:44]  you've combined the whole template together, you know, compressed all the components, got rid of them. It's, it's like going, okay, these groups, group
[00:29:50] ings of things should change together. And that's the power of fine-graining because that control is at your fingertips. Or in the case of our compiler's fingertips
[00:29:59] . So the double title thing still not works. See, no, because I haven't bothered doing anything with it, but your, your JSX should just like scream at
[00:30:09]  you. If you try and do that. The thing is the double title thing is fixable. If I want to, the compiler can see both titles and be like,
[00:30:17]  yeah, just use the second one. Like I haven't done that, but, but you know, because there hasn't been a need, but we could do that very
[00:30:25]  easily. However, here, I can't see that the second title is inside the A. The compiler can't know that. So, um, you know, this
[00:30:35]  is why we, we get here. Yes. Other libraries support multiple spreads because they rerun the whole thing. They rerun the whole component. Like they, they go
[00:30:45] , oh, something changed. We don't know what it is. Let's just do all the work. Um, so like, this is, this is why this
[00:30:53]  spreads aren't really interesting topic. When you're talking about like a VDOM library, you're just like, it's just, you're just making a props object
[00:31:00] . What do you like, what are you doing? But spreads are incredibly interesting from a fine grained perspective. Um, and like, I, I I'm a
[00:31:07]  sucker for optimization. Right. So like, uh, you know, I want to do better stuff like here. Look, if there isn't a dynamic count title here,
[00:31:17]  we don't bother merging the props. I go, okay, this can pass straight through. We know that, um, nothing else can change. Right. We don
[00:31:29] 't bother merging here or like, uh, so like, but if this happens, um, like a function, then we do merge props because we're like this, whatever
[00:31:42] 's an a, that object could be completely swapped. See reactivity tells us a lot of stuff because if you do this, we know that while this object can possibly
[00:31:52]  mutate, like let's pretend this is props. We know that these props can change. We know that the props object itself can, um, never be replaced. It
[00:32:02] 's not going to run again. It's, it's essentially, it's tied to this object. But if the second we do something like this, that object you're
[00:32:10]  calling a function, what you return could change every time, or even this, um, um, nested or something, even something like this, because this could be
[00:32:19]  a getter that returns a new object. At that point, we were like, okay, we got to merge these props because there's a potential of, of, of
[00:32:25]  this. So we have multiple levels of, of, uh, of, uh, you know, like detection from the compiler to be able to try and still produce the most
[00:32:35]  optimal code for you. Like if, if you just do this all the time, um, nothing's really going to change for you with 1.6. I made
[00:32:42]  sure to keep things as optimal as possible, but now we've smartly de-optimized for more dynamic cases to properly merge things. And this actually came up for
[00:32:57]  me for a reason. And that is because even though I wanted to fix this forever, this, I kind of realized this thing about the nature of props and like different
[00:33:06]  levels of de-optimization, because a bunch of people came to me about low-end devices, um, uh, in the same couple of weeks, I had
[00:33:12]  people who wanted to use solid and IOT and they're like, I'm loving solid. They're like, I tried react. It was, it was like not non
[00:33:19] -starter. It was too heavy on these old devices. I even tried pre-act, but the VDOM overhead for us was just too much. I did
[00:33:25]  a couple of simple demo with solid and the performance is incredible. We want to go back and replace, um, you know, what we're doing on the front end of
[00:33:33]  these, you know, low power devices. And they're like, but we've got one problem. These, uh, old like runtimes and stuff don't support pro
[00:33:44] xies. And this, this, this is something, you know, ever since I made that realization that we needed to, you know, do that, uh,
[00:33:55]  thing I described earlier, where we kind of like walk through the objects to decide, you know, which things are subscribed to we've been on proxies, right?
[00:34:01]  And basically merge props and splits props to assaults helpers create proxies. So like you might be going, oh, well, if you don't use a store
[00:34:10] , you don't use a proxy. Solid has a built in, uh, fine grained stores, which use proxies. But the truth of the matter is
[00:34:16]  anytime someone uses merge props or, um, uh, sorry, merge props or, uh, uh, split props, you, you might be making a proxy because the properties
[00:34:26]  could change. But, um, I realized something really cool, um, with solid, uh, solid, uh, and, and we implemented this in solid 1.
[00:34:34] 6. And I'm going to, I'm going to show you what I'm this cool thing that I realized. Um, I mean, it's, it's not
[00:34:39]  even that, uh, that tricky here, but essentially, um, no, actually it's render component. Yeah. Essentially, um, all solids proxies,
[00:34:52]  uh, where is it? Actually implement this proxy getter. Um, it is a symbol essentially. So when you go in and let me see, if you get that
[00:35:07]  symbol on any of solids proxies, it'll return back the object and go, yeah, this, this is, this is a solid proxy. And we did this
[00:35:16]  so that we could prevent like over wrapping. Cause if you have proxies and proxies and proxies, you don't want them to keep on wrapping each
[00:35:23]  other. You can just be like, look, I'm already wrapped because for you, for you, those who don't know proxies don't equal, there's
[00:35:31]  some interesting properties about proxies. Okay. So if I have proxy P, which equals new, new proxy, and, um, this is going to be our target
[00:35:42] . I'm not going to implement any handlers, but I'm going to make our target target a and const a is just going to be some object. Well,
[00:35:50]  and I'm going to make another proxy, which is P two. And it's also going to wrap a and have its own behavior. Some things that might be interesting to
[00:35:59]  people is, um, let's see if this will work. I think I didn't break any syntax yet. Oh, no, props is not defined. I did
[00:36:05]  break syntax. Uh, this, let's screw this. Okay. Sweet. Is that console log, let's, let's do some console logs. Um, let's
[00:36:18]  go a equals P and just go a equals P. And then do, do, do, do, do, do, do, do. So what do we got
[00:36:31] ? Um, a equals P two and then P equals P two. Okay. And the answer to all these questions is false. You, and you, you basically have
[00:36:52]  no way of knowing that the proxy wraps the same object or like is a wrap of a set object. They proxy is not the object that it proxies. So essentially
[00:37:04]  I had to come up with a mechanism to be like, Hey, this is one of our proxies. Cause otherwise, as I, as I mentioned, like there
[00:37:11] 's, there's no equivalence here. So. Getting back to what I was showing here, uh, essentially. Not that. Sorry. That's me preparing for
[00:37:25]  my front end masters course. I've asked, of course, that's still open. Why did I lose? Did I shrink it? Did I full screen it? I
[00:37:34]  full screened it. Essentially. This is why I use this symbol and our stores use a symbol or props or everything uses that symbol. But what I realized was it's
[00:37:45]  so funny. How, how often are you like so thankful that, um, you have git history? I actually went back and I looked at our merge props and our
[00:37:57]  split props implementations. And, uh, sorry. These are the types, uh, where, where is it? Sorry. Where is it? Merge props.
[00:38:09]  Um, do, do, do, do, do, do. I'm like, what branch am I looking at? This doesn't seem right. Um, do
[00:38:18] , do, do, do, do. That's so funny. Did I? Huh. Can I shake it? I, I don't think I, I don't
[00:38:32]  think I'm on the right branch on this computer. I've been doing, I do dev on my MacBook air and I do this on my pros. Give me two
[00:38:38]  seconds. I'm, I am. All right. This is why I'm like way out of date. Oh, there we go. I was like worried for a second
[00:38:49] . Like, where's all my code? All right. There we go. Okay, sweet. Okay. So what I ended up doing, realizing is that for,
[00:38:59]  if we check on merge props, if this proxy symbol exists or on split props that, you know, the, uh, the, uh, the, the source has a
[00:39:11]  proxy in it. See props and proxy. We can tell if the source could ever change its shape. Right. Like essentially if you're splitting props or merging them and
[00:39:29]  none of the sources are proxies themselves, nor, um, now I want this prop, this spread back again, but nor, um, call a function. Right
[00:39:42] . As I mentioned before, if I call a function, uh, or access, you know, something like this, where it could replace the thing being spread, if
[00:39:53] , if we're not a function and not a proxy, we know that, um, the prop, the, the shape of the objects can never change. And for that
[00:40:02]  reason, I actually went back in time to older versions of solid in GitHub and actually like brought back the, uh, the old implementation that, that we used to use in
[00:40:14]  solid, like pre 1.0, where we didn't do proxies and just put it right on top. I was like, okay, if this condition is
[00:40:21]  true, then make a proxy. Otherwise, um, just merge them using property descriptors. Like I talked about earlier. And similarly for split props. If this thing
[00:40:30]  is a proxy, then, um, push itself onto the merge and merge it. Because otherwise we're, um, otherwise, if it is a proxy, sorry, um
[00:40:42] , then we have to make this new proxy object. So the, the end result of this whole little, little thing is we're solid. We just create proxies
[00:40:51] , um, wherever. We're now smart enough to be like, oh, actually we don't need to create proxies in these scenarios. So if you don
[00:40:59] 't start with a store and you aren't like doing something like this, we actually don't need to do any proxies. And I mean, while it's kind
[00:41:11]  of awkward that like someone have to know not to do this, like if you really don't want it to be possible to be reactive, well, I mean, then
[00:41:25]  you, you, you can always do this. Like, like I, I don't recommend people to destructure or whatever, but like essentially this is ensuring this isn't
[00:41:34]  reactive. Like the, you get the expected behavior because of it. Now, don't get me wrong. Properties on something can be reactive and they can spread.
[00:41:44]  It's just that this won't swap. If you swap the object, it essentially, because, because for that case, we actually need a proxy. Anyway, uh,
[00:41:52]  this is, this is probably the most technical part of, of, of this, but I, I hope you can see that we, we now have a sliding scale of
[00:42:01] , of, um, potential here on, um, on our props. So that we get the proper behavior and still optimal behavior when you don't, um, opt
[00:42:13]  into like more fancy prop, uh, conditions. And this is what I was talking about with this D prof proxification that if you, if you only write your
[00:42:23]  spreads like this, um, solid, won't create any proxies that you don't create. Yeah. Like, I don't know if people do this kind
[00:42:30]  of stuff that much anyways is, is kind of thing. Right. These are problems that would take me years to figure out. Yeah. It has taken me years to
[00:42:44]  figure out that's, that's the, that's the thing. I'm, I'm, I'm so happy to hear this. Like I think this is a game
[00:42:53]  changer on this side because there is some concern that some third party libraries could do this, which might be awkward. I'm, it might be even worth making a compiler flag
[00:43:03] , but the problem is then you could break stuff in unexpected ways. So I actually think it's, I think, but if you're, if you're making small projects
[00:43:12] , things where you, control most of your dependencies, this is cool. And for everyone else, it just means that, um, you know, there's less proxy
[00:43:20]  indirection going on. It'll make debugging and stuff easier. Right. All right. How's chat doing? Let's just take a little moment here, get some
[00:43:29]  drink. All right. And yeah, again, if you're watching my stream and you're like, oh wow, this is crazy crap. You know, I,
[00:43:50]  I'm, you know, sure. I, I guess, I guess there's a lot like this, uh, problem, you know, or concern where I like,
[00:43:57]  I'm actually literally showing you how I implement this stuff. Um, so like now you can see the actual complexity, but I prefer it this way. Right. Like
[00:44:07]  let's, let's like, let's face it. I'm like, this is complex, but if you look under the hood of anything, um, it's pretty
[00:44:14]  complex. Threads are probably one of our most complicated things because we're trying to like, they're like a deoptimization by nature and we're,
[00:44:23]  and we're trying like, that's when you go back to the VDOM essentially, like, like you basically deoptimize back to a V, to a V
[00:44:31] DOM as someone put. And I, you know, this, we just have to be conscious that the reason this is more complicated is because I don't want to
[00:44:42]  just de-optimize by default, right? Right. So like, yeah. Yeah. Some more comments coming in. What are we doing here? Looking good so
[00:45:06]  far, it's all on these weekends. Yeah. There's more cool stuff coming on the stream. I just wanted to start with like the, the first thing is,
[00:45:11]  you know, I'm glad people are liking this stuff. One day I'd like to jump on stream with you and learn how Jav's going. Like, you know
[00:45:19] , all the tricks. Yeah. I mean, there's, that'd be a lot of streams. Um, Dan and I actually sat and tried to do that. Anyone
[00:45:27]  saw that breaking down the web, um, Dan Jutan. And I, I kind of just talked about web frameworks and how hydration works. And, uh, essentially
[00:45:34]  we, we, we were going for hours and, uh, we, we went multiple streams and we like, I feel like we barely touched the surface. You know,
[00:45:42]  there's just so much here. And I don't say that to intimidate people. I'm just saying like, it's okay. You just kind of pick stuff up
[00:45:47]  as you go. I'm, I'm, I'm, I've been at this now for a very, very long time. I've been developing on the web for
[00:45:54] , I want to say 25 years. Um, so yeah, I mean, don't, don't sweat it. Uh, example of runtime where proxies are
[00:46:06]  not supported. Um, it's just older versions of like, uh, JavaScript engines and stuff. Like, uh, like, uh, React Native, for example, was
[00:46:16]  using, uh, an older version of whatever the underlying thing of, uh, was it JavaScript core? The underlying thing behind WebKit, React Native didn't support pro
[00:46:25] xies until 2019. I think like just for example, and that that's React Native. So like, um, yeah. Um, seeing people be happy with developing low
[00:46:46] -end devices is great. You know, at work, we changed, uh, WebGL framework and what we built more. I think the lockers, I ran
[00:46:52]  an increased bundle size, you know, bite in its ass. I mean, that's a hard problem. Um, when you, you, I imagine when you say biting
[00:46:58]  in the ass, you're talking, talking about the SPA WebGL framework you created in terms of not having server rendering. There, there's, there are some things
[00:47:05]  that are just very app-like and have to be in the browser and they're going to be heavy and it just, it is what it is. Right. Like
[00:47:11] , I mean, there's not much. It's all like, there's, there's balance on these things. It's, it's, it's all what it
[00:47:21]  is. Yeah, no, uh, I mean, here's the thing. So 2.0, when you go and make a new breaking major version, what you're
[00:47:32]  actually doing is saying, this is breaking. I feel like a lot of the innovation usually comes right before the break. the innovation comes and you're like, oh,
[00:47:39]  I can add this and add this and add this. And then you're like, oh, but I can't add these couple of things. And then you're like,
[00:47:44]  okay, time for a breaking change. And then, you know, like, this is what facilitates it. Solid from, I don't know how long to about 1
[00:47:53] .3, 1.4 was on a mission. I said 2019, basically solid from 2016 to 2019 was all about client side rendering. Right. And, uh,
[00:48:05]  we, we got, we got there, right. In 2018, uh, we topped the benchmarks. Um, you know, that's when we were started being the fastest
[00:48:13] , I guess that was almost five years ago. Um, and then at that point I was like, oh, what's next. What's the next frontier is server rendering
[00:48:21] . So I started on a journey of server rendering in 2019. And, um, it started because I made the real world demo at the beginning of the year. And
[00:48:27]  it was the fastest real world demo until you slowed down the network. And then I was like, oh, we're not the fastest real world demo. What do I need
[00:48:34]  to learn here? So then I, I, I, I kind of like looked because I had this misassumption. Because if you have a fast network, client
[00:48:42]  side rendered spa, that's very efficient. We'll beat your server side rendered stuff. I was beating sapper and like next and all of them, like just killing
[00:48:51]  them with a client rendered app. And you're just like, what? Well, you know, lighthouse scores. And it was wrong because I had good internet and I had
[00:48:59]  a fast CPU. So that's when I started looking at server rendering. And it really took till last December for us to finally get like finalized, like out of order
[00:49:08]  streaming and stuff. Like we've had out of order streaming for a few couple of years now and suspense on the server and all that for a couple of years now.
[00:49:13]  But to finally like go like, okay, this is in good place. It took all the way till 1.3. And then finally, the last few releases for solid
[00:49:22]  have been like, okay, let's stabilize those like missing features, things like the spread and stuff. And like, kind of like make, make, make it like,
[00:49:28]  you know, consistent. But now we're at this turning point where we're looking forward to 2.0. That's, that's, that's what's, that
[00:49:35] 's what's going on right now, right? The kind of, uh, innovation, you know, is kind of getting split now where it's, it's like
[00:49:40]  a few things to make life easier, like these spreads. And then like the stuff like the partial hydration that I've been talking about, um, stuff like improving our transition
[00:49:49]  model, the solid working group. There's a few, uh, people out there kind of grabbed them from the reactivity group. And they're kind of like, uh
[00:49:57] , doing prototypes and future reactivity and stuff. It's, it's a bunch of, uh, kids in university. I say kids, but I don't mean any
[00:50:03]  offense, but I'm, I'm getting kind of old now. Um, I mean, they're going to be the ones who write the future reactivity solid.
[00:50:10]  Probably not me. You know, um, these, uh, um, guys doing their math degrees and, uh, in their, in their early twenties at university, um
[00:50:20] , really smart people. I'm, I'm crowdsourcing it. Um, so yeah, uh, this is the shift that's happening right now. We're looking to
[00:50:27]  the future and I'm really excited, which is why I'm excited to show a lot of stuff we're going to show today. Cause it's like really like kind
[00:50:33]  of mind bending where it's going. Yeah. Just catching up on chat. Oh man. We, we're not going to talk anymore about flutter or dart,
[00:50:50]  but I just had to give this a moment. Okay. There you go. Okay. Moving on. Uh, let's see. There's so much in the chat
[00:51:00] . Uh, all right. Every people just talking about spas versus other solutions, you know, blah, blah, blah. Okay. Uh, testing is a good
[00:51:21]  topic on its own. I think, uh, maybe I'll have the Tarnav, uh, or Alex actually, sorry, Tarnav and work on the dev
[00:51:29]  tools, which is also a great topic. Um, Alex lower who wrote all our guides and worked on the V test stuff to come in and talk to me about testing components
[00:51:37] . This is an area that I'm not terribly from familiar with. I do a lot of snapshot testing when I work on compilers. Cause you know, I
[00:51:44]  like seeing input output and makes my life a lot easier, but like this whole testing library stuff. And that, um, I have to admit, I worked in environments that
[00:51:52]  were always low test. Um, I worked in startups and we, we, we just were go, go, go, go, go kind of deal. And we didn
[00:51:58] 't really write tests. Um, at least not on client side stuff. We wrote tests for some backend procedures and stuff like, like, but we didn't really test our
[00:52:06]  components. So I'm not the best person here, but I can probably find someone who is. All right. Yeah. This might come up a bit during this stream
[00:52:18] . Uh, but I, I, I, I am not going to focus too much on the remix like features that we have in solid start. Um, I, but
[00:52:25]  I suggest the solid start stream. Honestly, um, we, we show how we do progressive forms. We show how we do, um, kind of loader and like
[00:52:34]  multi-action type patterns and stuff. It has solid start and remix have a lot of the same features just done a little bit differently. Um, yeah, you guys
[00:52:45]  are asking great questions. And these are the kinds of questions that, um, need good answers. And we've been working on them. Uh, David, who's in
[00:52:56]  the chat and the community here, uh, is been working on, you know, thinking about how we can like package up something to help people commit stuff. This isn't
[00:53:02] , this, this is an interesting thing. Um, personality wise, I'm a CTO, not a CEO. So, um, just keep that in mind with my
[00:53:09]  answers. I'm trying, I'm trying my best. Um, but I am, I get excited about the technology, uh, this kind of stuff I'm not
[00:53:18]  very good at. So, um, we, we're, we're, we're going to, we're going to get there. Um, but it's not something
[00:53:25]  that I am. I'm, I'm, I'm, I have a, the best answer for you right now. Yes. So you have to spread the religion
[00:53:35] . Um, and that makes me think it's felt for some reason. I don't know why, but yeah, I, I hope, I hope, I hope religion
[00:53:43]  is not the term that, uh, gets associated with us necessarily. Um, but anyway, uh, let's, let's, let's continue on a bit here.
[00:53:53]  Um, I'm again, going to look at Twitch chat to make sure I didn't miss anything really important, like jiraj98 subscribing at a tier one.
[00:54:00]  Thank you so much. And, uh, yeah, I'm sorry. I should be doing like cool stuff and emotes and things that will help like subscribers do stuff,
[00:54:08]  but I know nothing about Twitch. Oh, and, uh, uh, AJ, uh, he's been gift subbing people. Nifty Nate. Oh man, this
[00:54:15]  is, see, this is, this is why I need to look at Twitch. Okay. Awesome. Okay. Let's, let's keep on going. This is actually
[00:54:22]  kind of crazy. Uh, this is probably most people we've had watching on, on Twitch. Uh, okay. Yes. Uh, Cloudflare workers was the
[00:54:40]  first adapter that I made with solid start. If you're wondering, um, it was the first demo. VEAT, uh, two was dropped in February. I
[00:54:47]  made the streaming hacker news from the edge demo with Cloudflare in March. It was literally like the next month. Um, so yeah. Um, Yeah, it
[00:55:00] 's, yeah, it's good stuff. Oh, okay. Here's the thing. Do you, did you watch anybody here watch Theo's last stream? I, I
[00:55:07] , I tend to put Theo's stream on in the background when I'm, I'm working on code there. He can, he can ride like the whole, he can
[00:55:14]  ride like an hour on a stream just interacting with the chat and, and then, and more and more people come in, more people interact. It's like, it's
[00:55:21]  like people want to be part of the experience. I watched that and I'm always amazed because like, you know, he hypes it up and he's talking in
[00:55:27]  the chat and I just keep on watching the viewers just go up and up and up and up. And, and, and you're just like, wow. And then,
[00:55:34]  and then he's like, okay, I think I'm ready. I'm gonna, I'm gonna, here's my rant. And then it's like focus for 10
[00:55:38]  minutes, like, you know, and then it's like back to this on the chat and then it just up and up and up it's, I'm, I
[00:55:44] , I think it's something that I'm aware of now. Um, I don't know if, if that works for me, I, I, I, but I
[00:55:52] , it's honestly really cool stuff. Um, so it's chaos. Oh, great. But see, I'm talking the chat right now and my viewership's going
[00:56:03]  up. So, I mean, I don't know, maybe that's just a coincidence. Let me make sure I didn't miss anything like some hidden rate or something
[00:56:12] . Cause I, yeah. All right. All right. Let's, let's, let's, let's keep on going. Uh, all right. So, um
[00:56:23] , where were we? We were talking about solid 1.6. So yeah, that's like most of the article, except for the other cool stuff that I want to
[00:56:29]  show off today. So what let's talk islands and partial hydration, right? Uh, let me execute it. Let me, let me try that again. Give me a
[00:56:37]  banner. Uh, islands, partial hydration at banner. Okay. Cool. All right. Let's try this again. So let's talk, uh, islands, partial
[00:56:54]  hydration now, because this is a big part of the work that we've been doing for solid 1.6 and, um, sorry. I just, Chad is so
[00:57:07]  distracting. Hook me up with one of those shirt t-shirts. I need that vibe. Fred came in like Batman with those black t-shirts. Yeah. Honestly,
[00:57:14]  you guys, you've seen this. I got this very, very cool shirt yesterday. Um, it is awesome. I am so happy about it. Um,
[00:57:27]  yeah. Yeah. Sorry. Uh, I mean, it just, you have it too. Uh, well, yeah. Yeah. That is a clean shirt. And
[00:57:43]  I was going to talk about, I mean, I mean, maybe this is a good time because Astro, um, definitely popularized islands and, um, um,
[00:57:51]  partial hydration. So yeah, no, uh, big fan of the work at Astro. Obviously Astro plus solid is been basically the ultimate combination, the peanut butter and
[00:58:03]  jelly. Um, so, you know, what did I put, what would we do? BFF, blazingly fast friends, you know, like big fans
[00:58:13]  of Astro here. And also big fans of Marco here. Um, I often hear Fred to talk about history of Astro and Astro Astro is kind of like
[00:58:23]  inspiration came from, uh, Jason Miller's article, which was kind of influenced by the work at Etsy was doing the two islands back in 2019. As it turns
[00:58:31]  out, this technology kind of existed back in 2014 in a different framework from eBay that I happened to work for eBay. So I, I, I know about this where others
[00:58:41]  may have not known about it, but essentially, um, eBay had, and I mean, I'm not, I'm not making this stuff up. Like let's,
[00:58:49]  let's, what is it? Uh, let's say async fragments, 2014. Let's, let's, let's look what I find. Async fragments,
[00:58:57]  discovery, progressive HTML. This, this article is actually mostly about out of order streaming. Um, but it also talks a bit about how, how a Marco, uh
[00:59:08] , kind of like swaps up in basically the, the takeaway is Marco invented suspense back in 2014, but they got their influence from an older, believe it or not,
[00:59:20]  Facebook technology that was done in PHP called big pipe. And so influenced by, by the, the exact same inspiration that influenced, um, server components, essentially, um
[00:59:32] , Marco built their own version in JavaScript back in 2014. So, uh, this both out of order streaming in this Marco years and years ahead of everyone else. And
[00:59:45]  I had the great pleasure and fortune of working with them for the past two years to learn all their secrets before going off and doing, doing, uh, uh, solid pretty
[00:59:54]  much full time. So sometimes when I make this comparison, people, um, go, Oh no, that's completely different. You know, server components do different stuff.
[01:00:04]  Yeah, sure, server components do different stuff, but the, how should I put it? Like the reason for them and the mentality for them comes the same way.
[01:00:14]  Even the mechanics of how the rules work, um, between islands and server components are basically the same. There, the, there's some key differences. Um, and,
[01:00:25]  and this is probably worth a little Excalibur off, but you know, like, cause if, if this is your page, oh, that's a very thick
[01:00:31]  stroke. What am I doing here? Okay. This is your page and you're like, okay, whatever. Um, let's, uh, let's actually,
[01:00:41]  no, I keep some black in here. Let's, let's put this header in here that like never really updates. Let's put in a sidebar that also never
[01:00:49]  really updates. And then, you know, I, I mean, am I making like a, a Twitter like layout? I don't know. I don't even
[01:00:59]  know. Okay. Let's make a panel that's like the header and then let's make something here. Okay. So this looks like a website. Um, and the
[01:01:10] , the key revelation of islands or partial hydration was that, you know, it's okay that there can be some stuff like this in here. Maybe, maybe where's
[01:01:21]  our, where's our cart button? Maybe we're a cart. We have some sections that are interactive, but like all this black stuff doesn't need to ever like come
[01:01:30]  to the client. We can like send it once server render it and then only need the JavaScript for these like couple of little things. That's what islands and partial hydration is
[01:01:37] . It's, it's, it's not about some people say partial hydration. They mean, and they think about something called progressive hydration where like eventually hydrates.
[01:01:44]  That's not what's going on here. It's literally like these parts are shipped. This stuff is not shipped. And the difference between islands and react server components is in
[01:01:55]  islands, essentially you're stuck with this. You've served the page and you do this stuff generally. And then when you go to another page, it's an MPA
[01:02:02]  and you do this all over again, send the static stuff and just send the JavaScript. with react server components, it's possible to swap the black stuff out and keep
[01:02:12]  the green stuff, essentially, um, using, uh, you know, kind of this hybrid client side routing. That that's, that's, that's like the,
[01:02:20]  the big difference. Right. And some people might, uh, I'm seeing right in chat, someone comparing this stuff to micro frontends. Um, and, and I
[01:02:33]  don't want this comparison to be made to micro front, frontends. Um, right. I, I understand where this came from. Uh, and someone actually asked
[01:02:42]  me this question, um, on Twitter and I mean, maybe I can find it. Uh, Jacob, uh, actually like literally found the perfect quote of me answering the
[01:02:52]  difference. And I actually forgot that I had such a good answer for it. Um, but I'm probably not going to be able to find this right now off Twitter if
[01:03:00]  I look for it. Um, but so let me try and remember what the answer is essentially. this is only concerned with shipping the least amount of JavaScript. Sure.
[01:03:12]  These things can be independent. So potentially like in Astro, you can have a different framework in each one of these little green boxes, but that's like, uh,
[01:03:21]  that's not the goal. That's like, that's cool. But like the, the goal here is to shrink down the size of the green areas. So you
[01:03:31]  have less JavaScript and when micro frontends, the goal is let's have a whole bunch of teams work together in the same page, you know, use their own thing.
[01:03:38]  You do the thing. Like you don't really want two different frameworks in here. Cause that's like actually kind of terrible because now you're loading two frameworks, twice as
[01:03:45]  much JavaScript, you know? Um, but like if you have an MPA to some degree, you're like, who cares? You go to the next page and
[01:03:53]  it's a reset. So one page can have react in the green sections. The next page can have solid in the green sections. We don't care. Right?
[01:04:00]  So it's not really micro frontends, at least not the intention. I realized that like, I, the main reason I don't feel this is like micro frontends
[01:04:09]  is even though this is not a restriction, perhaps of Astro, the authoring experience is set up so that you like, you're still feel like you're in a
[01:04:14]  single page. Like you're like, okay, I've made a page and these are my pieces. And I pull them in micro frontends. The goal is like,
[01:04:20]  I want to separate this code as far as possible. So this team doesn't have to talk to this team. So I don't, I don't see them as the
[01:04:26]  same sort of thing. There was a Cloudflare article about micro frontends this week that we'll cover in this week in JavaScript that kind of maybe touch on this
[01:04:33]  topic again a bit later, but it's not, they're not really trying to be the same thing. Right? We didn't call them islands though. We called them
[01:04:48]  boundaries, but man, it's hacky as hell. Okay. So what's the difference between hydration and partial hydration? Oh, the biggest difference is all of these
[01:04:59]  boxes are green when it's hydration. And when partial hydration, only these little boxes are green. That's, that's the difference. Um, like, like, uh
[01:05:07] , was it Marco.com? Nope. Marco JS.com. It's funny. Cause I called it Marco JS and the guys got on my case, but yeah.
[01:05:17]  Okay. I got a nice, I got an image for you. This, this little, this thing now, can I open this in a new tab? I don
[01:05:26] 't think it's actually an image. I think Michael programmed this mad scientist that he is. These things that look like images are actually like live code doing them. When
[01:05:38]  a page normally loads, see these flashing red things that you kind of top down, kind of go through the hierarchy and you hydrate all these red things. Right? So
[01:05:47]  it's like, okay. Even if like it's static, you have to re-render the react app or solid app or whatever. When you start up the app and
[01:05:53]  you end up, even though you don't make new dom nodes, you end up like creating all the components again, essentially to initialize the state and bind them to the
[01:06:00]  right dom nodes. With partial hydration or islands, you literally like just do this. So you only need the JavaScript for just this. You don't need the JavaScript for
[01:06:07]  like all of this. So it's like, if you've ever seen, you know, let's, let's, let's do the astro.build homepage here
[01:06:16]  and get a little props to guys and give props to Theo again, because he needs more props. Right. It's like next.js astro seven kilobytes,
[01:06:29]  this kind of switch to be fair. This is not exactly fair to my understanding. This is preact. I don't know that this is preact. I think
[01:06:35]  this might be react. I think they, they might've snuck a react to preact thing here. Right. Theo. Cause like we, unless this, this is
[01:06:42]  just completely static and that's what's being shown here. Um, uh, I, I don't actually, I, I'm not actually. Yeah. Yeah. It
[01:06:55]  was entirely static. Right. So this is the thing. Astro starts with basically nothing and react starts with 70 kilobytes. So what I'm getting at is
[01:07:05] , uh, a better example might be, um, a hack news demo, let's say. So something like, I don't, I mean, I, I,
[01:07:14]  what do we got here? Like hack was it next hack news. Okay. Here we go. You know, this page doesn't need interactions with the back comparison,
[01:07:24]  but this one does. We, we've got some comments that we collapse, right? If I, if I load a page like this and I do it in next,
[01:07:30]  I get 84 kilobytes of JavaScript to do all this lovely stuff. Okay. If I go to the same page in an astro with solid thing and go in
[01:07:40]  and, and do this kind of thing, I get 4.9 kilobytes. And sure. This page is very static. It only, it only has this kind
[01:07:47]  of interactivity, but we found at ebay.com when we actually did this stuff, we could reduce 80% of JavaScript this way. And even more on some
[01:07:55]  pages, uh, this is why eBay went this way. Like we, we live, it just reduces huge amount of stuff for when you don't really need it. But
[01:08:02]  the trade-off is when I navigate, you're going to see the, this thing. Cause we're, we're this in a multi-page app because how do
[01:08:12]  you not shift the JavaScript that the browser needs to render, right? That's, that's the whole thing. You can't like do islands really in a single page app
[01:08:21]  because you need to be able to render the next page and if you, you need to send the JavaScript and you might be like, well, we can send the JavaScript
[01:08:27]  later, but like, it's weird. It affects the bundling. So no one really actually does that. So, and like, and I mean, perfect example is
[01:08:34]  you're on one page, you go to the next page, and now you get all the JavaScript for that. Let's pretend. And if you go back to the original
[01:08:41]  page, originally you only need that some JavaScript, but now you need all the JavaScript you're navigating back. Like there's a bunch of complexity. And which is why we
[01:08:48] 've never really seen, um, islands in a single page app. React server components change that conversation. What I'm going to show you today changes that conversation. But I
[01:08:57] , I, I wanted to kind of give this focus to partial hydration and Astro and Marco. Exactly. Right. Um, yeah. I mean, there's a reason
[01:09:07]  eBay wasn't allowed to slip. We had a Java backend and it was like, no, if you want to move full stack JavaScript, you can't lose any page speed
[01:09:16] . That's a very different motivation than react. They were getting created at the same time. Like 2012, they were creating reactive Facebook and eBay was creating, uh,
[01:09:24]  Marco at the exact same time. They just were solving very different problems. Um, I, I, I love this. There's this great Sunil, uh, interview
[01:09:32] . I think it was with Swiss. And he, and he was like, he was like, oh, react isn't doing this for SEO. They don't care about
[01:09:38]  SEO or whatever. It was, it was, it was really funny. I was like, um, I, I, I'd have to dig it up sometime,
[01:09:44]  but I would think it was a Swiss Sunil, uh, interview is, it was, it was awesome. But yeah, there's a question about, about quick here
[01:09:54] . Yeah. Now it's what's your NDSO. Yeah. Well, here's the thing quick can in theory, and I, I could call quick like the
[01:10:04]  first transitional, um, framework because quick in theory could just load the JavaScript you need. And then on the next page, load all the JavaScript, but even quick doesn
[01:10:13] 't want to do that really. So you see quick being used the same way as Astro is in that on the multi-page thing. So quick is just a more
[01:10:20]  granular automated, um, island system. Um, Marco is also an automated island system. So yes, the quick is very similar to these sort of frameworks. Um, like
[01:10:29]  if you notice here on, on my Astro build, there's no JS here, like no JS. We only needed the JS here because we needed to do this
[01:10:39] . Right. And if you look at my quick, uh, city, uh, version of this app, um, other than some service worker thing, which you can basically
[01:10:48]  ignore, um, essentially on this page, we don't really need any JavaScript. And then when you go here, well, they don't send any JavaScript, but when
[01:10:57]  I click this, there's my 17 kilobytes of JavaScript, right? So, um, yeah, I mean, it's, it's an interesting, um
[01:11:07] , thing is the quick framework, 16 kilobytes. And then our one component, uh, is there. So just kind of, if you're going to interact with
[01:11:16]  your page, um, the JavaScript will come. So that's why there's a lot of looking into like strategies. Cause like, honestly, on this page, I would
[01:11:25]  have preferred if it was preloaded. I haven't configured quick city probably to do that properly. So I need to figure it out. But you know, I
[01:11:31]  don't also don't really want to worry about that too much. Like for, for a simple app like this, this 4.8 kilobytes that I have here
[01:11:37]  is really all I need. I don't need to worry about it. I didn't need to do anything as crazy or advanced as quick. And I, I, I
[01:11:43] 've got a smaller page. Um, and like it's the hydration savings of quick. That's interesting to me. And on a page like this, the hydration cost probably
[01:11:51]  isn't that, that bad. In fact, Astro score is the highest on this, uh, this particular demo higher than quick, higher than Marco or anyone.
[01:11:59]  So yeah, I mean, it depends your mileage for very, um, but just keep in mind, like if it's interactive, the JavaScript needs to get there. So
[01:12:07]  the mentality is actually the important part. Cause you got to kind of ask your, ask yourself the question, you're like, am I building an app which expects all the
[01:12:13]  JavaScript to be in the browser? And the answer to that question is becoming more and more. no, because it's the mentality that's killing us, not the implementation
[01:12:22] . Like that's why JavaScript keeps on growing up. We can, we make smaller frameworks like Svelte and solid and Preact that are super small. Like I showed
[01:12:30]  you next was 84. If I show you, uh, what Svelte kit, um, let's see Svelte. Yeah. Yeah. I mean, the
[01:12:39]  demo is Svelte kit. If I show you Svelte kit, um, it's 20 kilobytes. Like this is a significantly smaller, right?
[01:12:45]  And if I show you a, what is it? A solid start HN or something. Yeah. It's, uh, 14 kilobytes. Like these are significantly
[01:12:54]  smaller than the next example. And we're getting to the Astro solid range, you know, like five kilobytes or whatever. But my, my, you know
[01:13:03] , and this is simple demo. You got to think about the difference is the scale. This is such a simple demo. Um, when you have something like this,
[01:13:12]  you know, you might add more green things, but you also add a lot of black things. I find depending on the type of site you are, this, this racial
[01:13:21]  maintains like even eBay, something, the biggest e-commerce keeps that like 80, 20 balance, even as it gets more, more complicated. Um, I don't know
[01:13:31] . Let's look at ebay.com. Maybe, um, you know, like a lot, how much interactive stuff is actually on this page? It's,
[01:13:40]  it's an interesting question or actually maybe a product listing page. You can see the streaming working there, but, um, yeah, I mean, this, this is sort
[01:13:54]  of the things that motivate this. Um, yeah. And what I'm going to show you today is a bit like aisles, but, uh, we've taken
[01:14:04]  it or sort of like turbo, but we've taken it a bit further. It's quick islands, not in the, in the same way that Marco isn't really islands
[01:14:12] . They don't explicitly say this is an island. Their compiler figures it out automatically, which is the same for Marco. So I, I, I don't usually call
[01:14:19]  them islands, but they're definitely considered partial hydration. That's the category astro Marco quick. Um, this new stuff that I'm showing in solid start, um
[01:14:27] , mostly fall under this same multi-page app category, except, um, as I said, what's interesting here is taking this further. Like, oh yeah. Yeah
[01:14:45] . I update my browser fairly often though. Yeah, exactly. And, and the motive. Yeah, this is thing. It's all hero six. It's never
[01:14:59]  going to be optimal for every experience. And you have to decide what customers and what you're aiming for. A lot of e-commerce, like we had, uh,
[01:15:07]  Taylor, um, who was working on the Kroger rewrite. Like that, that page load stuff is really, really, really important to them because they're on
[01:15:16]  google.com. And someone's like, I want Nike. Um, and they want to be the first thing that shows up here. Right. And then people are going
[01:15:27]  to click and their experience is based on clicking into that experience. That's like a big funnel for them. So Google ranks this stuff based on page performance. Actually,
[01:15:36]  um, that's one of the things you, your listings on the Google search are actually affected by page performance. Um, and, uh, essentially you're incentivized because
[01:15:48]  of this experience where now someone has to click into your site and you're like, okay, um, where do I want to get them? I don't know. Let
[01:15:54] 's go to Nike.com. What? I mean, I got a fast internet. What, what if that took like 15 seconds, I might leave, you know
[01:16:05] , before I even look at the product. This is the, this is sort of the things that incentivize this kind of stuff for that. But that's very different than
[01:16:12]  like, say, if I was making a social media app, I don't really care. Um, so, okay. Yeah. And, and yeah, and you
[01:16:23]  can do analytics, right? One of the cool things quick is looking at is automating those analytics for pre-fetching. But here's the question. I think
[01:16:33]  at a certain scale, um, okay. It's interesting. Like, at what point does automating this to figure out, um, this compared to like using the analytics
[01:16:47]  and just manually doing the obvious, you know what I mean? And like at what scale of complexity does that, does that matter? Like if you're already eliminating like
[01:16:55]  80% of the code, how you manage that last 20 is literally the last 20%. You know what I mean? So how much does that impact how you design or approach
[01:17:03]  your solution? This is why I'm, I'm questioning these things and why I'm building this stuff, because I kind of want to understand what trade-offs are worth
[01:17:10]  it. Because undoubtedly systems like quick are very good at what they do. Systems like Marco are absolutely incredible what they do. But we're, this is a game of
[01:17:20]  weighing trade-offs. Right. Every MPA can support a SPA, right? Um, if, if you, uh, Ben Holmes, uh, he made a
[01:17:30] , a solid, a single page app on top of, um, Astro to show he could. And you know, that was a fun experiment. And the reason is
[01:17:39] , um, MPA, like every website is an MPA in a sense that every website ships a page, right? So in that sense, I mean, it
[01:17:47]  might not be multiple page, but the web starts with shipping a page. And if the web starts with shipping a page, you know, you can always make a single page
[01:17:54]  app or a JavaScript app on top of that page. That that's my mentality around it. So, um, so, but they could see there. And that's the
[01:18:04]  thing. They could see theoretically support a single page app, but then you lose all the benefits because then you're shipping all the JavaScript. And that's what they're trying
[01:18:10]  to avoid. So that's why, even though, even with quick's incredible, lazy loading this, uh, being able to like chop it into a billion pieces and
[01:18:17]  load what you need, they, they still don't really want to load that client side router. You know, that if it would cause you to have to render the
[01:18:25]  whole next page in the client, you don't, you don't really want that. Yeah. Yeah. This is a retroactive thing. Yeah. It's so
[01:18:35]  funny. I had to explain what an MPA was to like my manager at eBay and he's like, cause he's like, isn't that just a website? And
[01:18:41]  it's like, yes, yes, it is just a website. Okay. So yeah, this is kind of setting the context context. Cause for the longest time when the
[01:18:50]  MPA partial hydration stuff came out, people were like, um, Oh, so like next. And I'm like, no, no, no, no. So it
[01:18:57] 's like static rendering next. And it's like, no, no, no. I mean, if you static render a single page app so that, and then turn
[01:19:05]  off client side routing. Yes. You have an MPA. Um, but it's probably like the worst MPA you've ever made because like you're, you're
[01:19:13]  taking the full cost of the JavaScript. You don't need to, it's just like, why would you ever send any more JavaScript than you need to? Why don't
[01:19:19]  you just send the green parts back in the day? It was the, those green parts were jQuery, right? Like they were like what we needed to, this whole
[01:19:25]  hydration was something we invented with declarative libraries because we, we made the tree. We made the component tree. Now state and components are all tied together. And now
[01:19:35]  in order to instantiate them, we have to recreate the tree in the browser, right? Like this is in the same way MPAs are a fancy word for how
[01:19:44]  we did web dev, you know, back before like single page apps, um, hydration is also the exact same thing. Um, and don't get me started on
[01:19:58]  Alex Russell, man. He, he, it's like this split between someone who's so right. And then like, so irritating Lee anyway, um, yeah okay
[01:20:20]  so um yeah i mean it's it's you know you know i will say one more thing on alex russell thing it's hard when you care so much about this
[01:20:30]  stuff and you watch the industry just kind of go off a cliff like crazy place and you're just like look i've been warning you you know like ringing the town bell you
[01:20:40]  know the town crier you know you know the the wolf is here you know and then you know no one listens no one listens and it just keeps on going on eventually
[01:20:52]  until you like like you like the whole situation is just seems impossible and i i i i i i think he had a recent tweet that i probably won't look on this week
[01:21:03]  in javascript but essentially saying like oh it's now that the thought leaders care about the stuff like he basically took offense that like that react and apologize for all the
[01:21:12]  evil that is caused and stuff and it's like it's hard to separate that when you're so passionate about this because react became an affront to everything he believed in and
[01:21:23]  you know just releasing server components doesn't fix that um but yeah i don't know it's it's interesting anyway let's thank you for distracting me partial hydration is having
[01:21:45]  the hydration script no specifically deep in the dom which nodes to take over and add things to click on yeah yeah this this is this is this is the thing right but even with
[01:21:55]  partial hydration it's there's still hydration in the term something like resumability which quick and marco have been working on don't actually hydrate um which is really cool
[01:22:05]  they don't actually run stuff up front uh islands architecture and the stuff i showed you today does run stuff up front how big that hydration cost matters varies on the amount of
[01:22:15]  interactivity i i i think it's a last stage um optimization but it's one that i'm very interested in but i'm i'm approaching from the other side i want
[01:22:24]  to look at the experience and look at what where we get to be and then we can talk about the optimization because i think quick and marco are on to really powerful
[01:22:33]  things with resumability and and i think it's clear why they're important once you see what i i i'm showing you but until you see what we've been working
[01:22:41]  towards it doesn't make sense for most people it's the same reason that like react server components haven't really made sense for a lot of people it's it's kind of
[01:22:48]  infuriating actually my react server component videos are like my worst charting on youtube you know in terms of views and stuff it's like no one no one no one
[01:22:55]  no one cares um maybe maybe that will change you know coming up but it's it's kind of crazy that i i do a video on next or nuxt or whatever or
[01:23:05]  any other topic react server components are just like you know so okay so partial hydration okay i i'm hoping this is a decent enough interaction i have covered this on other streams
[01:23:21]  but i just want to kind of put this into context because what we we what we ended up doing as i said with solid start was something kind of cool that i've shown
[01:23:27]  in streams before but um we might as well like just do it live here uh quick quick quick quick quick uh do i not even have it open right now i have quick city
[01:23:39]  open apparently um let me see if i if i have it here um i'm probably also out of date this is i've been doing all my work um on on my
[01:23:48]  other computer so let's let's pull and make sure that we're up to date on solid start here um uh let's go back to main 374 behind beautiful okay now
[01:24:03]  we're up to date let's let's give this a good old pmp okay so what we're going to do here is i'm going to actually play with the
[01:24:14]  hacker news um example like well while we're waiting for this you can see this very cool to do mvc that's done completely progressive enhancedly with with forms just just
[01:24:25]  jewel on that for a second okay cool that's not what we're covering today though um all right so what i want to do here is i want to we're going to
[01:24:35]  be doing a lot of production build and start instead of doing dev because i want to show the javascript bundles and stuff as we go so um let's let
[01:24:42] 's go into i mean i'm just going to like go right into the examples folder into the hacker news example and we're just going to go npm run build or p
[01:24:52] mpm i can't remember whatever and then we're just going to go pmpm start okay start and um okay that's right because this thing and i'm just
[01:25:06]  going to bring this across into here and go to an actual route that has data and here we go okay unsurprising so this is like our client side app and if
[01:25:23]  i refresh our page you're going to see that oh this is non this is gzip not broadly but it looks like solid start is uh gained some weight uh here on our
[01:25:34]  hacker news demo uh it's always smaller on netlify but it looks like we're up about one kilobyte on this demo um let me double check on the
[01:25:42]  main page yeah we're up about a kilobyte on it okay whatever we added some features but um what i'm getting at is this is our typical um isomorphic
[01:25:53]  rendered app and what you're going to see when we do this is i'm going to use the comments page um and actually i'm going to get out i'm going to
[01:26:03]  go in incognito tab because um i get a bunch of like grammarly and extensions and stuff and i want i don't want that messing with our stuff at all
[01:26:13]  okay so pretty typical page you're going to see a bunch of these ids and stuff that solid uses hydrate and the reason solid uses these ids is because solid uses
[01:26:21]  jsx within a single pass thing which is kind of insane that we can even hydrate at all um this is unique to solid uh this solution for hydration um but what you
[01:26:31] 're going to see is you can see all your your your data server rendered in here so this is our list of comments and yeah those ids are long but they use
[01:26:39]  it lovely and we could probably compress them ourselves a little bit to make it more readable but we'll get there um but my point is you can see the markup and the
[01:26:50]  display of like oh where is it here i'm just like digging in but you can see these are this is basically all the the comments for this page okay and then we
[01:27:01]  also because we need to hydrate send all the data in this big big data blob okay and that's that's fine but this is your typical single page app thing you send
[01:27:15]  the data twice you send the html it hydrates the whole page and we're we're in business and we can navigate in our this thing doesn't spin we're
[01:27:22]  just doing client-side navigation and we need something called nested routing so this doesn't actually swap only the only child content swaps the the header never actually um re
[01:27:33] -renders so to speak um and in solid this is actually really important because we don't like re-rendering so um nested routing is actually essential where it wasn
[01:27:43] 't for react they don't really care if you re-render that much so um so yeah i i love using this demo because it has these nested recursive comments
[01:27:59]  um which make things a little bit fun because you're like like you know how this works in a tree right if you if you authored this you're gonna have comments and
[01:28:08]  comments and comments and comments like there's an actual recursive thing like each comment component iterates over a list of comments which renders more comment components right so um i
[01:28:19]  could typically show you that but we actually broke this apart a little bit um sorry i'm in the wrong one let me get solid out of the way and look at solid start
[01:28:31]  um yeah sorry and we're gonna go look at the hacker news demo i split the the wrapper from it but like essentially you have a comments which is a list item which
[01:28:45]  then if there's any child comments it iterates over those child comments and renders them what you're gonna know so is that i put a toggle um around it so that
[01:28:54]  this component has no state it has no signals or nothing this toggle component which is much much smaller has the state and it's the thing that does the compression it just changes
[01:29:04]  the display open uh close none on this thing and this is very important and this is something you do in server components this is something you do in islands marco um pretty much
[01:29:15]  even quick this is how you do it because you want to ship the least amount of javascript so you actually want to separate the stuff that is basically static like running all
[01:29:27]  that text with from essentially the stateful part which is just the the button that clicks and and and uh compresses so we can inject the children using props about children but
[01:29:38]  essentially those props about children get passed in from from this from this parent sorry comment component essentially um see comment comment comment uh and toggle the children is this for loop okay so hopefully
[01:29:53]  everyone following so far okay so i did the split for uh a reason right so one thing and i've shown this before in demos is if i go into this vcon
[01:30:08] fig and i go um well if i go ssr false first just for fun this just to kind of show show show this and again i'm gonna be using build because
[01:30:22]  i i want to actually um uh show this stuff um this this now is actually client rendered app if in solid start if i do ssr false what you're gonna
[01:30:37]  see is that script tag is gone with all the double data because as it turns out if you client render something you don't need to send the data twice um because you fetch
[01:30:45]  it over the network tab you'll just be like okay fetch get me all the data and your server rendered stuff is literally a empty body tag there we go see tada
[01:30:58]  this this is this is essentially um the way we built stuff with create react app and how we used to build single page apps that you know back in the day so i just
[01:31:09]  want to show this because there's a contrast here if you go pure client you don't actually have the double data problem the problem is you have to wait for all the j
[01:31:16] avascript to come to before anything happens like if you look at this timeline um come here uh the this there's not much time spent on the server and then the j
[01:31:30] avascript comes and then we fetch way over here is when we're fetching and then we wait for it and then it finishes so like if i was to do like a
[01:31:38]  like kind of this sort of deal and zoom way in because the page is super fast you're going to see that like we we basically get there pretty fast wait for some
[01:31:48]  javascript to load then fetch the stuff and then do the rendering here at the end and then our lcp is out here okay that's when we we finish our
[01:31:56]  our paint um and overall it's actually really really fast this all happened in less than 200 milliseconds um locally obviously but um with with this kind of situation right like we're
[01:32:10]  sending all the javascript and if i look at the sizes in the network um in jas it's going to be the same uh in this case it's 17 kil
[01:32:20] obytes but it's ballpark the same that's i want to point this out just switching from ssr to um to like switching on taking a client rendered app and
[01:32:31]  to making ssr doesn't meaningfully impact your javascript bundle like just because your server rendering doesn't actually make the size any different or make the execution i
[01:32:38]  mean it makes it different because you're hydrating instead of rendering but like it looks very similar other than like the fact of like uh like when it happens right uh client waits
[01:32:55]  till the end to do the render well i guess they hydrate and render it kind of at the same time so it's just it's just the difference is when you see
[01:33:00]  this stuff when it's client render you don't see this stuff until the very end when it's server rendered you see the stuff right away and then you can't interact
[01:33:06]  with it to the very end but otherwise they're actually very very very similar um and this is fine this is how next and svelte kit and like we we all do
[01:33:13]  this and there's there it isn't like a big deal but uh let's let's let's let's let's let's play with a different option i'm gonna i
[01:33:20] 'm gonna go to islands true okay and this option might maybe should be called mpa true um but essentially now we just say like screw this we're not sending the whole
[01:33:35]  the whole bundle and i'm gonna do this and we haven't like perfectly trimmed it but here 4.5 kilobytes okay so if you look this is now squ
[01:33:45] iggling this is like the astro hacker news demo i was showing you all uh a moment ago and you're like oh wow but the astro was 4.9 why is
[01:33:54]  this one only 4.5 well the reason is these comments don't work because we didn't send that javascript honestly this javascript doesn't even need to be
[01:34:02]  here it's not even like we just haven't optimized for this case because like literally just this code doesn't even run um and you know if you look there's there
[01:34:12] 's there's there's no serialized data now we're server rendering this is definitely server rendered but we we're not sending all that data across you know like we were a
[01:34:21]  minute ago with all the json data and and uh yeah let me look here um if you look at all the hydration ids are gone too because we don't need
[01:34:34]  them there's some error boundary markers and stuff but essentially all those ugly looking ids we were looking at a few minutes ago are all gone too uh so like uh where's
[01:34:44]  another good one yeah this one's got more nesting up front we can inspect in here and you'll see that we're basically just server rendering some stuff okay not terribly interesting
[01:34:54]  um so what we did um was and this this ties back to the release um essentially solid uh 1.6 has um sorry these two new tags kind of internally called hydration
[01:35:15]  and no hydration and actually no hydration has existed for a long time actually i just didn't really talk about it much but essentially if if you if you take a no hydration
[01:35:27]  um thing like in the playground or something does it still compile um what's cool in the playground you can actually see what we render server render um uh yeah you you won't
[01:35:40]  really be able to see the output of the playground so there's no point me going here sorry um i was just thinking about how the best way to show it but essentially
[01:35:48]  when we turn the hydration off there's no need for those hydration ids so everything under no hydration you can picture that in island mode we just no hydrated the whole thing but
[01:35:59]  what if we want some javascript interactive on our page so i'm going to go in here and this is not this is not like the final version of this but
[01:36:10]  this is you know we're still working on the experience but what if instead of importing toggle like this we went like const toggle equals unstable island and we imported it like i guess
[01:36:24]  i don't have copilot here or something anyways we went like this okay now we're just saying like actually and the we're actually saying we want to hydrate this
[01:36:38]  piece um when we get to it and what i'm going to show this a little bit here because if i go into islands folder in here and go into index we have an
[01:36:50]  islands component and you can actually see this little dance that goes on because hydration wraps it's not really a custom element it's just a uh we're just using a dom
[01:37:05]  element that we made ourselves and it's what it's going to do is it's going to stringify the props and we could probably do something smarter here like you super j
[01:37:15] son or solid zone serializer i we'll get there it's going to look for some rules but essentially it's going to take this element and serialize the incoming props
[01:37:25]  and then it's going to render that element and then it's going to essentially um it's going to pass in a child the child the its child is going to have a
[01:37:37]  solid child with another element and then no hydration is going to wrap the actual props dot child that gets sent in so this way any like when you render uh this toggle essentially that
[01:37:49]  i was showing you before um what ends up happening is inside the toggle it's hydrating and then it's not hydrating here so any anything that is passed as a
[01:38:01]  child to an island actually belongs to the parent scope so it's like server client server and this is how that cool recursive trick works because then it's another comment so we
[01:38:15] 're still in server we do we're still in server again and then we go client and then back to server again yes this is this is the the the kind of basic
[01:38:26]  mechanism right um and the cool part is we know some things from this information of this right we knew not to include all those hydration ids so we cleaned up the markup
[01:38:36]  we also knew um that any resources um and if you're familiar with us all we we use we have like our own kind of use thing called create resource um that is
[01:38:48]  created on the server section it doesn't need to be serialized because it could never be changed um from the client essentially it could only be re-rendered on the server
[01:38:59]  so for that reason we can save serializing that data and only serialize the props and if you look at this toggle component this toggle component which is the client component has
[01:39:08]  no props so we didn't need to serialize anything that's why we don't have that double data problem because we knew that we didn't need to serialize it so
[01:39:18]  essentially going back to our island that that we had here you can kind of see that we do this um game and this this this is this part is mostly all that happens on
[01:39:31]  the server side um but you know before we go too far let's let me prove that this actually works right and i'm this is the slow build i'm sorry we
[01:39:42]  will get to server components this is not server components right now this is just islands like astro um essentially at this point uh where are we uh not not this one um
[01:39:55]  do i have it's because it was here okay so now we can hydrate when we refresh we're still doing full page refresh this is basically the equivalent to that astro
[01:40:08]  demo that i showed before so we the reason that the the comments can't change is when we navigate to a different page it doesn't happen on the client the only way to
[01:40:19]  get new data for these comments is to reload the page so we know we never need to serialize it which is why there is no serialization of there's that double
[01:40:29]  data is not there so we don't actually serialize all the data for this and we only send the javascript 6.3 um kilobytes here when we deploy
[01:40:39]  it it's smaller so it right now i think we're like 0.2 kilobytes bigger than the solid astro demo it's like five point something 5.1
[01:40:48]  versus 4.9 it's not terribly important but what i'm getting at is we only need to send this small bit of solid specific code so this entry thing is basically
[01:41:00]  like the hydration stuff we need this web thing is essentially solid four kilobytes of solid and then 700 bytes for this comment and you can actually see when i undo it this
[01:41:10]  is this is our comment component um basically you can you can just see this the compiled thing here's the click handler here's the collapsing comment thing so so um where am
[01:41:27]  i going here yeah so essentially this this is this is what astro and marco and um i've been doing for a very very very very long time and if you want
[01:41:39]  to understand how the hydration works it's a it's a little bit more fun um is that we in our entry client when it's uh in this mode um when it
[01:41:53] 's in the start islands mode we we do something a little bit different um we call for each island we separately call a hydrate call okay and this hydrate call um
[01:42:08]  and you see there's no i guess we're not doing like the jsx in here um but this hydrate call creates a component and this component is the component that
[01:42:23]  um essentially gets loaded so let me show you let's look at the let's actually look at our island here for a second and see what's going on so i'm going
[01:42:31]  to inspect one of these okay what you see here is this solid island has props which are nothing and then it has the link to the js asset that we need to load right
[01:42:43]  this might not be our final implementation here but essentially um it tells us that um you know and there's even a data load when prop but it tells us where the js
[01:42:55]  is so when we start up and hydrate the page we gather all the islands ensure that we unload the code solids router is smart enough here to preload all the islands that
[01:43:05]  we need for the current page not run them necessarily but preload the javascript so it happens pretty quickly but essentially um uh and we can we can set idle and
[01:43:16]  you know all those kind of astro kind of type things not all of them right now we only have um idle and load but essentially because we know this js we we load
[01:43:27]  it um and it's down here we there's a i made a queue um so like it we we actually use a dead queue for request idle callback where we actually look
[01:43:38]  at the time remaining and instead of making like a thousand little request idle callbacks we kind of batch them based on how much queue time is left this is a little trick
[01:43:47]  you can actually know um how long the browser thinks it has to run the queue so inst and then we run more of the queue so instead of doing like a as i said
[01:43:58]  like a naively just making a thousand timeouts or a hundred timeouts here we can kind of batch them on idle to do the mount island which is the hydration work and
[01:44:10]  all it does is take the component that it imported there and then it does this fancy little thing on the children where it this is this is my little trick where it gets
[01:44:18]  the next element which means it finds the children's hydration id and pulls it out and then i'll explain what this is later but on that child element it gets the current reactive
[01:44:31]  context and writes it into the dom node and you might be going why why are you doing this so essentially if we're looking at this this one has children good um and
[01:44:39]  we look at the list we're gonna find solid children here and it has one of those hydration key ids you notice that inside the island to the children we have hydration 
[01:44:47] ids outside we do not it's going to grab that one essentially while it's rendering and then it's going to on that take the context for this one and stick it on
[01:44:57]  here and why is that important it's so that when you get down here and start this island again we can pass that context to the next component see owner when you get
[01:45:09]  to the next component it does a look up on itself and it walks up the tree and says find me the closest child and grab the context of it and what this does
[01:45:17]  is it lets us use the context api between unconnected islands that have like static content in between so um i made a demo of this actually uh uh let's see
[01:45:31]  if i have it here um on my on the profile i mean i mean we could we could possibly just remake it right now um how we doing for time 140 yeah we
[01:45:46]  could remake it if people are interested but what i did was um oh where is it um it's funny because i didn't uh i didn't uh it's what i didn
[01:46:04] 't like put a big screen up on it i was just like not that i started the tweet with yeah it's funny i'm not actually seeing it right now i'm
[01:46:15]  like so blind not not not not not okay here it is this one in this demo you know what screw it let's make it it's easier to it's easier to show
[01:46:38]  than explain right like let's instead of using the hack news demo let's go to the where is it um the bear demo like the most basic solid demo and then let
[01:46:55] 's like go islands true right and then let's uh uh what are we going to do uh we have a counter component right and then we have a root component and then
[01:47:12]  have we got a bunch of extra crap we don't need probably but let's go to index and let's put two counters on the page right and then let's make a
[01:47:28]  um how do we want to do this uh let's make a counter provider i'm just trying to think of how i want to do this let's go new file counter
[01:47:40]  provider dot tsx and export default uh function uh function see i could probably shortcut this a little bit right because it's just like we kind of want to go
[01:48:05]  like uh const um what do you want to do the const um counter context equals create context right and then we want to go counter context dot provider value equals what create signal
[01:48:31]  essentially and just to keep myself honest i'll put five in there or something and then we want to put props dot not prop alias props dot children in there and you've
[01:48:45]  typescript people just forgive me um it doesn't matter okay so we do that do that do that so we're making a provider doing that and then um export what's the
[01:48:57]  one uh function use counter and what's use counter going to do it's going to um return use context um counter context right okay you got if you've used react this
[01:49:18]  should look pretty similar or familiar to you all okay so uh yeah okay so this is fine so we have our counter provider that we export default we also have a use counter
[01:49:29]  that we do here and then we're going to go in here and we're going to instead of create signal we're just going to go use counter um and then yeah and
[01:49:46]  then inside of our app we're going to have to wrap it with a counter counter provider right and don't get me wrong you could you can you can also like globally
[01:50:06]  do stuff like astros islands but i i wanted to i wanted to actually um show this um specifically because i think it's more relevant when you're building apps so we have
[01:50:16]  a counter provider that will provide count to these two counters and then we can't just import these regularly we want to actually make them both islands so we're going to go
[01:50:26]  const counter equals on unstable island yeah i do not have copilot on this computer clearly because it would have finished this before me already and actually dot dot slash components slash counter and
[01:50:43]  then let's make that provider also an island too okay all right bye bye uh did i miss something oh yeah typescript people telling me yeah and then i actually have
[01:51:23]  to import that from here all right and i'm missing the function call typescript to the rescue and then it yeah it knows it's an accent and a setter all right
[01:51:36]  see typescript the search saves the day for once no kidding um okay now uh i'm trying to remember if we still have the css bug here there's a possibility
[01:51:48]  that the css doesn't load the way that i want it to load so there was a bug at one point and it's probably still there um in any case let's
[01:51:58]  npm run no not this one damn it sorry um cd dot dot uh cd bear and root tsx no sorry beat config run islands mode okay uh npm
[01:52:10]  run build npm run start okay all right and that's not my local app as much as i wish it was um my local app should well it looks almost the same
[01:52:29]  but you can tell there's an about if all this worked right yeah see how they're sharing context but if you really look at our network tab it's seven kilobytes
[01:52:40]  of javascript um essentially you saw the authoring experience right if if in my index i have a counter provider that wraps a bunch of static stuff that i don't
[01:52:56]  care about and then these two client islands in here these two counters happen to use the context that was provided in there and we have context through right but it seems to be working
[01:53:09]  for us okay right now uh nikil city fixed it on another branch but um it looks like it looks like we're good right so this is this is one of those
[01:53:19]  things that i that um i ended up implementing uh because to make this work in solid was actually really easy but i didn't have it before solid didn't pass let you set
[01:53:29]  the owner on hydrate so all i had to do i mean this one probably isn't even worth looking at the code you can picture it i just solid's roots are able
[01:53:37]  to inject um inject um inject basically the uh owning context so i just we as you saw it was just a very very simple exercise here in mount of when we create the
[01:53:51]  component grabbing the child element and putting it on and then you know when we hydrate the parent then when we hydrate the child grabbing it did i did i implement this
[01:54:03]  because dan bullied me on twitter um i honestly hadn't thought too much about it and then once he said it i was like oh yeah that wouldn't be hard to do this
[01:54:11]  is this is also how we share context and solid element too our web components actually work with context as well um so i was like oh yeah i've done this before this
[01:54:19]  is really easy and he's like oh i've just never seen it before you know like and they're like yeah here here you go down this is this is how it works
[01:54:26]  so okay so you you you you all are following hopefully so far so we we we haven't really seen anything that fancy um context like this works in marco um i
[01:54:36] 'm sure it works in quick too because those frameworks don't aren't framework agnostic it's easy for us to have these mechanisms what's cool about this though is if
[01:54:43]  you look at it there's a custom renderer for astro that uses fragments very much the same way this works i can literally port this solid start code into astro and
[01:54:52]  we'll be able to get this in astro i'm pretty sure so um your astro apps will also be able to benefit from solid context work that i'm doing
[01:55:00]  here um for solid specifically for solid um islands okay so yeah and i mean you can see this is the whole trick right the whole trick here is because solids hydrate can be
[01:55:14]  given a starting context and a starting render id all we have to do is take that hydration id that we generate automatically already and just go hydrate from this point right it's
[01:55:26]  like give me the id give me the owner and it's like you never even stopped even though there's static stuff in between that's that's sort of how we get
[01:55:34]  these seamless islands and as i mentioned before right the the authoring experience like this this looks very familiar and in that hacker news demo i didn't actually have to change any of
[01:55:44]  the rest of my code it all just still works you know like when we go to the and we didn't look at this but when we go to the route we just you
[01:55:51]  know create our resources you know this is like solids use that does the suspense stuff you know and it's the same kind of um the same kind of idea right um so
[01:56:00]  i'm just we're going to move back from the bear example and go back to our hacker news example um now that i've demonstrated the context because we're not done
[01:56:13]  um so uh yeah uh where do we want to go next i mean i could i could prove a couple cool things if people are interested in that like one thing that was fun
[01:56:27]  about the solution was sure this is fine for you know the we've been doing render async this whole time but what if we want to actually stream the islands well it
[01:56:36]  turns out we can do that as well um the way that that it's implemented we can we can do our um we can do our streaming renderer um and to do background
[01:56:49]  hacker news hopefully it probably happens so fast you don't even see it uh that's one part do we have a page with lots of comments that's not enough comments um
[01:57:04]  129 comments is that enough on a refresh to see it nope damn it this is this is the fun part i'm not gonna 222 328 maybe is that better
[01:57:22]  uh why am i not let's do a performance why am i not seeing the streaming that's not streaming that's why i'm not seeing it am i in the wrong entry
[01:57:33]  render stream render stream render stream render stream okay interesting huh that's funny i this is the fun part when you don't prepare all the demos ahead of time um it's
[01:58:01]  very interesting to me that it's not streaming though because we are literally on render stream mode so for that to not be streaming is unusual but we'll move on from that um
[01:58:14]  very confusing because it has no choice but to stream okay all right so um yeah i guess i can't show the streaming um let's let's keep on going um yeah
[01:58:29]  okay so i've showed streaming rendering on the on on here before um so yeah let's let's let's let's just continue on um where was i uh okay entry
[01:58:47]  right so a few months ago um uh ryan turnquist um who is a core team member of solid is now working also on marco created this really simple demo
[01:59:08]  where he showed it nested routing right um like remix style routing but server rendered essentially so it would swap out the server rendered pages okay it's and um what nikil
[01:59:23]  ended up doing which i showed on stream before is incorporated this into this hacker news demo so that essentially we could server render the page have it hydrate um and if i if
[01:59:41]  we look at the network we still have like our a little bit more javascript but six kilobytes of javascript but then we now get to the next
[01:59:47]  page you see that no spinner this is client side navigation um so essentially you know we go in and we have the interaction javascript amount it's not changing here but we
[02:00:01]  are client we're client um we're client navigating and as i mentioned sharing context doing all the stuff but only shipping the javascript we need and the we we did
[02:00:12]  the see these outlet things it's basically nested routing so if i go here it just switches that outlet and the trick to this is all our anchor tags on the page that
[02:00:25]  are created with solids uh anchor um work even if they're not hydrated so essentially we have global listeners on the on the anchor tags that even if they're not hydrated they
[02:00:38]  can trigger a client-side router that if you want to see what we end up doing um on the network tab and i have showed this off before so but this this is
[02:00:46]  all building to where i'm going at if i look at fetch xhr here initial page is nothing because we we rendered this on the server and everything and as i mentioned there
[02:00:56] 's no double data right um we we only send the the html that we need um but when i click here the request actually sends me html and this
[02:01:11]  html inner html's the pieces this is as fast as you can get this is like turbo links but instead of being like the whole page and diffing we
[02:01:20] 're actually just swapping out sections and yeah like this isn't diffing or doing anything fancy like react does it's literally just replacing it and then in parallel loading the
[02:01:32]  new javascript we need like for the toggle because like if if we if we start here we don't have the toggle right go to the page in parallel fetch the toggle
[02:01:42]  fetch the html and then it's only that little bit of javascript we needed to hydrate it right and what happens if i click the back button nothing
[02:01:52]  it just works so i i mean essentially um sometimes people have found some bugs here and we have some scroll position issues we're still kind of working through but generally speaking um
[02:02:10]  we we send this kind of html um uh format that replaces the stuff and then only hydrates and sends the stuff we need and i i've been showing this demo
[02:02:21]  this is what i showed at vconf and it's pretty impressive because the page is obviously very small loads very fast and this is the demo that you you've all been looking
[02:02:29]  at um and this is mostly what i want to show like in terms of this today until this morning when when nikil drops some more bombs on me we actually created solid
[02:02:37]  starts docs um this way this this the the our doc site is is is using this right now and it's just wonderful because there isn't much in interactivity here and when
[02:02:48]  i i load this page i'm like there's 47 kilobytes of javascript which actually you know i was like what the hell's going on here until i realized
[02:02:56]  actually when i looked into it that like 30 kilobytes of it is this uh angolia search and then another nine is tippy which is this thing so basically 40
[02:03:07]  out of the 47 kilobytes of javascript are like so that we can support stuff like this right um but generally speaking like the the solid app is like no no
[02:03:19]  footprint and and essentially we get client-side routing and you know it's great for this use case but um where do we store the old html like the the
[02:03:34]  browser takes care of it for us is the best way to put it why is angolia so heavy i don't know most things are heavy right i i like i'm not
[02:03:45]  making this up if you you look at angolia searches 29 where is it js3 whatever this thing is skip minification because the original files appear to be already minified
[02:03:55]  okay thank you for that doc search whatever this is it's like this is this is the like maybe we can find a new search thing but this is not solid code this is
[02:04:03]  all the this is the freaking search client okay um 30 kilobytes okay 28.3 or um a hundred islands yes but um but what the thing is i i
[02:04:24] 've done that test if if if anyone's seen seen stuff i mean where is it did you do someone's like how i've been doing this death test i call it where
[02:04:36]  there's hundreds of islands or on the page and i'm not gonna i'm not gonna run them all right now again i've done this on stream several times but if i
[02:04:44]  remember correctly someone asked me here about how how it handles that yeah how to handle the torture page we got an 85 and you might be going okay well 85 isn't a
[02:05:01]  great score but i want to remind you when i ran this stuff marco 5 got 76 quick got 80 um remix felt kit and next all got 38 solid start got 48
[02:05:15]  um like hundreds of islands still beats full hydration by a large margin both because of the reduction of hydration cost and by um and also by the uh reduction of serialization like
[02:05:37]  all that data the double data getting solved if you had a hundred unique islands i think it's interesting if at what point you like have too many chunks for the browser i think
[02:05:47]  that might have um interesting impact but but for me it's not about the lazy loading we should bundle them together then or figure out you know better ways to package them together
[02:05:57]  if we need to it's it's it's it's it's not it's it it's not about it's not about that people are like more interested in the fact
[02:06:11]  that angolia is 30 kilobytes yeah yeah sorry live you got 66 which is which is not which is pretty good um right it's better than any of the single
[02:06:28]  page app frameworks right um and this this is this is this is the thing right um we yeah like this test is stupid but i i do want to point out that like there
[02:06:46]  is an impact uh right is solid js a spa i mean it's it's the point of this whole stream is it's what you want to make it but let's
[02:06:55]  let's let's take this one step further because here's the thing this demo um not this demo sorry uh this demo here um that i'm showing is basically 90 percent of
[02:07:10]  what you kind of are hoping to get from something like react server components right um it's missing the mutation story and obviously if you're replacing stuff underneath with inner ht
[02:07:21] ml you're also losing the state um but we've been we've been playing with that a bit actually funny enough uh let me just grab this um uh where is it
[02:07:39]  here yeah um adia's money actually let's see if i can find the original tweet here to kind of give you some context um he's he made him he got like
[02:07:49]  a bunch of people to make movie apps in their varying apps and and kind of as a comparison kind of like next level he wanted to go past the old hacker news and they
[02:07:58]  made next angular nux and there's quite a few of them and i actually quite enjoyed looking at quite a few of these apps let me see where's the link is it
[02:08:05]  here they use the movie yeah taste js movies okay and if you go in here you see fairly good ui i'm actually not a big fan of the way next drops to
[02:08:19]  to fall back that's weird i don't know why they're not using transitions whatever um but this is your typical next app right was it's 150 kilobytes of
[02:08:29]  javascript right and uh you know does its thing you navigate you know it's there's some animations trends just kind of get the idea and if if i go to our
[02:08:40]  next site here maybe um angular um let's go dark mode too so they're kind of the same like you see people kind of made the same sort of site um and
[02:08:52]  yeah here we go angular 108 kilobytes plus two three so 110 they actually come in under the next version but um you know essentially this is your typical spa navigation you just
[02:09:06]  go to action there's some cool hover effects and all this kind of stuff right um and what else i actually really like the next one this is probably my favorite like it just
[02:09:16]  has a nicer aesthetic to it um you know and actually actually can i point something out between these just because i'm here okay look what happens when i click on something on
[02:09:26]  knock on next when i click to black atom that i was already in that one before it's cash when i click to the fall you can i already went to that one i
[02:09:34]  gotta pick one that i haven't clicked on yet full metal equalist see how did the fallback skeleton state right and hocus pocus okay if i do that same
[02:09:44]  thing on the angular app watch what happens here have i done the orphan kill okay that's not a good one okay actually let's switch these see how this changes right away and
[02:09:59]  then the ui updates see now this cache is fine when i go to it the first time this will actually move and then the ui catches up it like tears youtube
[02:10:09]  see um and then the next one waits shows the progress and then shows it when it's finished right so if i go this one showing progress switches in when it's finished personally
[02:10:27]  i'm a big fan of the last version the next one this is what react transitions do if you want to understand the ballpark it generally the general feeling is that it
[02:10:35] 's a better experience if you don't go back to skeleton and don't cause weird tearing states and instead hold the screen give a loading indicator and swap it some people might not
[02:10:46]  agree with this but that's essentially why react transitions exist they don't want you to fall back into the suspense fallback but you get the idea they got navigation nested
[02:11:02]  nav you can click into stuff see videos it's a pretty cool little demo and to finish our trifecta here i'm trying to remember what the next version nux version
[02:11:13]  is it's actually a little bit smaller still it's 82.3 it's actually pretty impressive um view you know being a little bit tighter really great experience um and i
[02:11:25]  mean there's even these smaller ones that they didn't actually highlight as much astro lit and spell kit spell kit is pretty much what i expect the solid start one to be
[02:11:34]  would it would be like under normal conditions because we're going to load about 30 kilobytes of javascript 25.1 maybe we load a little bit more 32 when
[02:11:42]  we go into a page how does spell kit do the navigation they hold do you see that let me let me see if there's filters but it looks like they hold let
[02:11:55]  me see tv oh no for these ones they they fall back i don't hate this fallback it's less distracting but it's also new navigation so i think i'm okay
[02:12:06]  with that but generally they hold see that's that's i like i like i like that uh that but yeah as i said about 30 kilobytes for spell kit um
[02:12:15]  and then uh lit looks like it's missing some styles but let's probably gonna what's going on here really no okay lit's 100 kilobytes i don't know what
[02:12:32] 's going on some interesting loading placeholders okay um and then let's do last and not least our buddies over at astro now everything i've shown you so far has
[02:12:49]  been a single page app right it just swaps right astro one you'll see that this actually re-renders but you know what does this feel slow it actually feels
[02:12:58]  faster than the lit one doesn't it and it holds because it's the browser navigation right you can still do all the the stuff you know movies tv you know so i
[02:13:09]  like this pretty performant and let's guess 50 15 kilobytes of javascript that's all it takes to get see for a site like this astro is kind
[02:13:21]  of perfect like you're not doing much mutation you're just going around like who needs a single page app if you don't ship any javascript your performance will be
[02:13:29]  better on load um you you know you know like you can do most stuff yeah no tearing or weird you know this this is this is this is this isn't this isn't
[02:13:41]  bad at all i i think this is a nice demo and i'm glad that they included it because then you can kind of see the the kind of different experiences i don't
[02:13:49]  see a search on astro's version yet but you know these are all at various stages on the implementation but i just i wanted to show like you there's like slight
[02:14:00]  differences in them right now we were remaking this since all started i said my gut would be that it would be very similar to the spell kit experience honestly but then we're
[02:14:12]  like well let's try building it with this new experimental islands router thing right so um solid movies um and if you look we're doing the the the nut the nuxt
[02:14:26]  thing right where we're we're we're loading here and and whatnot and here so we wait and it's it's client-side routed so it's kind of like
[02:14:36]  nuxt and you know we have the hover animations and you know all the kind of nicety things you would expect um and then uh yeah let's go here you know
[02:14:49]  and we navigate around that's interesting see our scroll stuff needs a little bit of work as i mentioned we're still kind of figuring figuring that out um but anyway you get you
[02:15:01]  get the idea this is basically the same site we've been seeing here with some nice stuff let's see how much javascript we have on this one oh 11 kil
[02:15:11] obytes now we don't have all the functionality we're missing the image thing and i think like right now we're fetching the original images which would ding us we actually
[02:15:20]  need a special image formatting component on this page which will add a couple kilobytes this isn't about being smaller or bigger than astro it will probably come out very
[02:15:27]  similar to astro but my point is that this approach essentially gives you like islands level hydration thing with an experience that you would have a very hard time telling the difference between nu
[02:15:41] xt and and and this like this is this is this is a it feels like a single page app i you you probably wouldn't even realize what's going on oh that
[02:15:50]  includes your your bloated image thing is it is it not even working okay okay actually yeah okay so and then essentially like there's actually i think a bug in your bloated
[02:16:06]  image thing um so i actually have to use the dino version that's a little bit older to show what i wanted to show this is the last piece i want to show
[02:16:13]  here um on this one and i think this is this is the piece that nikhil showed me this morning and i was just like what the hell is going on because everything
[02:16:21]  to this point has been you know we're just i mean if we want actually i haven't looked at this too much but let's let's let's inspect in here but
[02:16:28]  you see the you see the islands you see the outlet right so if i'm going to here it's going to swap out that outlet and then does are there tabs in these
[02:16:39]  yeah i don't think we had the quite the right response of design and it's in this one yeah okay um if there is your child outlets um let's see yeah
[02:16:49]  it's maybe in here somewhere let's see if we can inspect in here i'm what i'm trying to get at is we have nested routing and this outer outlet
[02:17:02]  um okay so this is like the inner outlet this is the outer outlet you'll watch this one will collapse this one won't when i move so we're only swapping out
[02:17:13]  the pieces that change and we know that from the url right because we know what segment of the route change which means the server knows exactly which content it needs to swap out
[02:17:21]  and swap in so like as i said we're basically getting really into that zone where people have a hard time distinguishing between a single page app because you literally author this
[02:17:31]  the same way as remix but then you end up with like uh you end up with like router uh you end up with like um none of the code being sent to the browser
[02:17:42]  right it's all islands but this search page was actually a little bit of a challenge because think about it let's let's inspect the search element we have our solid island
[02:17:54]  that's inside our our wrapper outlet here for our page section and but the problem is this input field is inside the island inside the router how do we search for stuff look
[02:18:13]  the the the the the the outlet collapsed and not lose focus on the input well the secret to that is island preservation that is when you know that you're on the same route
[02:18:30]  um basically reuse the island that already exists when you swap out the html so not only state preservation from being above where we need to be on on the on the
[02:18:52]  like in the router like like being above the how should i put it like being uh above the where the swap is but even islands inside can basically be preserved between server partial
[02:19:06]  revenders. And this is why I made the allusion to server components, because you add all of these together. And I would argue that you have the server component experience
[02:19:17] . Obviously, we're still like this is super new, Nikhil literally made this this morning or last night, I say this morning, because he was probably up all night
[02:19:26]  working on it. But you know, the key this is really important, because as I mentioned, why am I not not sources network? Yeah, different compression on D
[02:19:40] ino, I guess the search box is an extra byte. But like this, we're talking sub 15 kilobytes of JavaScript. Yeah, I think the Dino one
[02:19:48]  compresses differently. So it has like a slightly difference. But you get what I'm getting at, like, we just send the JavaScript we need. And you'd have
[02:19:57]  a very hard time telling this experience from a single page app. And it's Yeah, I mean, I don't know what else to say, like, is a
[02:20:05]  server components, I'll leave that up to you to kind of make that thing. Do you have to reconcile your virtual islands? Um, not really, the trick is when
[02:20:22]  the stuff outside changes, you rewrite to the islands with the new props, and the new props trigger the prop changes inside the client side islands, essentially. So that server
[02:20:33]  can change the props that come into the islands. This all support Dino, we support Dino deploy, if you see this as actually Dino dot dev, we don
[02:20:42] 't run on Dino on our build. But I I mean, I don't know, is there VEAT support for Dino yet, I'm not exactly
[02:20:48]  clear. But essentially, this is a Dino deployed thing. And also Netlify edge, which we were using in the version that is a little bit broken on the
[02:20:55]  search, which one was it, this one is also using Dino under the hood. So we support the Dino runtime, just not the build process right now.
[02:21:10]  Yeah, sorry, how does Nikhil describe it? No, Rex, not like everything is reactive. Imagine each island is getting a store as a props object. Yeah,
[02:21:15]  exactly. So essentially, server components in whatever, 10 kilobytes or something, that's, that's, that's kind of the takeaway here, I think shared context
[02:21:27] , support for streaming, which I didn't actually demo for you that was that one was actually a little bit fun, I had to actually go in into DOM expressions and
[02:21:36]  actually make a hook so that whenever streaming stuff got inserted, it would, it would have a hook so any client side script could do its thing. So basically, whenever the
[02:21:47]  streamed content gets swapped in out of order, the hydration can like look and see if there's any new islands that it needs to hydrate, essentially. So we still
[02:21:55]  have work to do. But this is this is kind of like, this app is proving as a kind of a proof of concept that with with with a setup like this
[02:22:04] , you basically don't have to sacrifice the experience of a single page app, have the performance of a multi page app and like the end, the JavaScript bundle size of a
[02:22:14]  multi page app. To me, this is what the promise of server components is. And I now see a path forward that doesn't involve the virtual DOM. Okay,
[02:22:26]  so, as you see, we talked a lot about solid start here. But essentially, what this what this is, is a bunch of changes in solid around the data serial
[02:22:36] ization, skip that I mentioned, around the streaming hook around the context through hydrate, enable this. But the funny thing is, I mentioned, they were actually relatively small
[02:22:48]  changes in solid. But we needed them, which is why I released a 1.6. But this in the spread stuff, this is why this release came so quick
[02:22:54] , because essentially, it was it was actually wasn't a whole lot of development work. It was just understanding the use cases to make, you know, make things work better
[02:23:05] . All right, how are we doing for time? How are we doing right now? We are at 226. So we spent about two and a half hours talking on
[02:23:16]  the subject. I mean, that is most of solid 1.6. I think the only other thing worth worth mentioning about solid 1.6 is just how it's
[02:23:25]  just that name of the release. I am a big fan of anime and Miyazaki's work. And when I started playing with this stuff, doing these demos,
[02:23:38]  like the earlier version of the movie's demo, and the hacker news and the solid start docks. Even though they're islands, once I was using this new routing mechanism
[02:23:49] , I felt like I just kept on getting those images of islands in the sky, so to speak. which is a very common theme in JRPGs and in fantasy
[02:24:00]  and in anime. And so yeah, essentially, I don't know. I don't know if we call, I don't know if I like server components as a name
[02:24:09] , because the problem with server components is it focuses on the server components. And for me, what's magical is the way the client works. You know, it's
[02:24:18]  the client thing. So like, Islands always emphasizes the client components, which I liked. But you know, that's basically where the title came in. It was interesting when
[02:24:31]  I looked a little further. Well, I mean, I knew this. Castle in Sky wasn't Miyazaki's first movie. He'd worked at Toei Animation
[02:24:38]  before, and even he'd done it like his own feature film, Nausicaa Valley of the Wind, before that. But this is the movie that he created when
[02:24:46]  he first, like, they're like, okay, we're going to, Nausicaa did really well. They got some money and they're like, okay,
[02:24:51]  we're going to make a studio Ghibli. And this was the first film they made. So, I don't know. I just, I wonder if even the
[02:24:59]  title of the movie for them was that influence, where they're like, they had this goal that they thought was almost unachievable or, you know, and
[02:25:08]  they set out for themselves. But I feel like this too, a little bit, because this isomorphic story and being able to show that we can, you know,
[02:25:16]  bridge that gap between MPAs and spas is, it does have that feel to it. You know, I don't know if anyone's familiar with solar punk,
[02:25:28]  but it's kind of like steampunk. But instead, it's like more return to nature where you can't tell the difference between nature and technology. It feels like
[02:25:34]  that, because MPAs is like a return to where we were in the beginning, but now, but it is quite different. We have the advanced technology behind it
[02:25:42] . Anyways, that's me just feeling on the thoughts behind it. But yeah, this, this, this one had a, this title for me had a special meaning to
[02:25:48]  me personally. So that's why I wanted to kind of elaborate on it a bit. Yeah. So solar punk is kind of cool. Thank you, sir. Something
[02:26:03]  incredibly confusing. Yeah. Um, yeah. So, I mean, this is going to change over the next, uh, several months as we refine this, but we have
[02:26:11]  a basis now for this, that like, I feel, you know, that like, we've, we've shown the premise, we've made like the, you know
[02:26:20] , React server component demo, essentially that the React team made, you know, back in 2020 when they first revealed it. So like, um, you know, React
[02:26:32]  is amazing. Like they're so far ahead on this stuff. Um, a lot of the stuff about solid simplicity makes it easier for, for me to follow so quickly,
[02:26:41]  but it also, it's not so quickly. The roots of this work take years. That's why it's not like I've, you know, we've been waiting
[02:26:48]  this whole time and being like, okay, let's see if server components are success and now we'll consider it. This is why solid is always right there at the
[02:26:55]  time that React releases stuff or next releases features. Like I remember last year, I think the next, uh, team was actually surprised when I showed up with a streaming edge
[02:27:05]  demo on Vercel the same day they released it. And they're like, oh crap, next doesn't actually even do this. It's because the, the work
[02:27:11]  had already gone in ahead of time. If you want wait to see what if other stuff succeeds you're already behind so a lot of the work that's been going in
[02:27:19]  here even though this was relatively small changes has is the summation of works that's been going on for years essentially right recognizing the possibility and looking into it i think that's really
[02:27:30]  key and what keeps driving solid forward and why it always seems like solids like right on the cutting edge of stuff it's it's because we've been working on these problems for
[02:27:38]  a very long time um yeah okay let's see can i i should check twitch chat um see if people are are still alive here minsk devs subscribed to tier one
[02:27:53]  thank you very much um sorry that was probably like half an hour ago or something but yeah um yeah so it's i just the thing is now we're at the starting line
[02:28:08]  and what i mean about that is because we can compare and look at stuff like you know when we make stuff like that that the the uh sorry where is it the the
[02:28:16]  uh hacker news demo or this because we can look at this and go like okay so the solid client routed one is you know um actually let's let's go to the
[02:28:23]  actual one was it solid hn islands netlify app okay you know where it's all properly bundled for the release and like okay so it's five kilobytes
[02:28:33]  right and plus whatever like you know and then when we route in and we're like okay we interacted we we have all the javascript page we can look and go
[02:28:40]  okay this is 5.7 kilobytes what was the cost of that load and we can figure that out right because then you can go okay well what's the impact of
[02:28:47]  other uh technologies we can we can we can we can look at that we can timeline i've been looking at the cost of out of order streaming actually a lot of my conclusions
[02:28:55]  that i've been coming to recently is understanding that i can't trust lighthouse scores at like at all they don't show streaming's benefits and they punish you for for them
[02:29:03]  in a certain way too so i we need to find the balance there but like you know how do do i know if quick is the best approach like does do how do i
[02:29:14]  make that determination you know what impact does network speed have on on when something actually happens you know um you know how much how much javascript do i need it should
[02:29:28]  is is is is 17 kilobytes good is five kilobytes good right um these sort of things you know what's the cost of serialization on server rendering for res
[02:29:39] umability like i feel like we're going to baseline to build a ask and answer the questions whether resumability is worth it whether islands are worth it whether we want sub
[02:29:47] component hydration um there's so much interesting innovation and um i think we just need the right harness for it if that's the way i can put it right why do
[02:29:56]  you think no one saw this before it's because no one cared to uh people there's pieces everywhere that's what i spent the last year looking at looking at what every framework
[02:30:10]  had done um the the routing piece that i showed had its roots and stuff like turbo links which they've been doing that on the rail side for a while but turbo the
[02:30:19]  rails people are kind of allergic to javascript or they like they don't like you know what i mean like there's they were using with different technologies right now you have
[02:30:27]  two apps in the rails case so how do you make it one app make that development experience good um no one even like i told you marco was doing the astro quick
[02:30:36]  type thing not maybe not as advanced as quick back in the day but like doing that at least something like along the astro thing like eight years ago no one cared like
[02:30:46]  they put it out there and it's because what kind of sites you're building right i think what's happened is more people are trying to build more sites with like things like
[02:30:55]  reactor and and you know maybe e-commerce and hitting blockers and going oh crap this isn't actually good enough for e-commerce like the popularity of the solution and stability
[02:31:03]  and maturity you know big we bundle up everything's next js now you know when we get to that point you kind of want to use it for everything and hope it's
[02:31:11]  a universal solution even if it wasn't originally designed to be that way so i think we're just seeing people trying to apply these you know single page apps to more things at
[02:31:18]  the same time the size of javascript increasing more libraries and we're just going like actually this is a problem we need to solve it you know and that's why this
[02:31:28]  is happening now and i think part of it is the forefront on the single page app side the ones working on these declarative single isomorphic uis weren't priorit
[02:31:38] izing this before um so you might have seen parts of this technology and other things like i mentioned turbo but they weren't they weren't because they like their own bias and like
[02:31:50]  you know like their like of rails or however they're doing they weren't trying to apply it in places where they fundamentally didn't want to go and i think it's really
[02:32:01]  interesting when you find something where you want to go and then you steal from everyone else that's that's that's what i do i'm a i'm a pirate so
[02:32:11]  like that that i think that's the biggest reason why people want to do more right time between transitional apps and solid finally delivering it shows this stuff is moving pretty slowly well yeah
[02:32:22]  but the funny thing is at the time rich harris coined traditional apps he referenced marco he referenced a few others we'd already been on this path for a couple years
[02:32:32]  react has been on this path since 2016 like this is figuring it out and finding the balance for ux and dx and stuff takes time and testing and whatnot um there's like
[02:32:44]  so many different pieces that kind of have to align when they get here even that if when i like you know or nakil comes up with something or like show off this
[02:32:52]  demo and everyone's like wow you solved it and it only took you a couple days it's it's more than a couple days it's taking us this whole time to get
[02:32:59]  here right yes i love rich harris as well um rich has been great to me ever since i got like into the more like social side and stuff he's not taking
[02:33:13]  a partial hydration seriously next uh yet but maybe after he sees this he will um that's that's that's that's that's it that's that's what i i want
[02:33:22]  to see i i think he has the right intent and he and he has the right like motivation and he's his vision is amazing i i um it's interesting i i
[02:33:33] 'm kind of like there's different ways to approach it you can take it like the react team is kind of like ivory tower and they're like theoretically we want to go here
[02:33:41]  what are the principles we need to ensure that consistency that we get here and have all the pieces we need and that's that's what it feels like a lot when you see
[02:33:50]  some of the react stuff um i'm i'm kind of a scrapper i kind of like kind of go in and go okay is this fast enough i mean and and don
[02:33:56] 't like don't get me wrong that waste time in a different way because maybe you go down routes that aren't viable but it's like i i always want to see
[02:34:04]  if i can bridge today with tomorrow um and you know because people build apps today um it's there's an interesting topic about like how far in the future should your vision go
[02:34:17]  i've i've found that if i just have the right tools um i can do a lot today i didn't like the term transitional mostly because i'm not sure if
[02:34:27]  what we're transitioning at first you think oh well something the transitional app word makes me think of like oh some pages are single page apps some are multi-page apps and then
[02:34:38]  we just kind of transition and do you know i don't think it's a transition i think we're seeing the next architecture after single page apps happening right now i think i
[02:34:46]  think we're approaching you know people are waiting for it you know like that whatever gen 3 quick keeps on talking about it i don't think we have all the pieces yet
[02:34:54]  but i don't think they're wrong to say that there is a new uh paradigm thing i mean actually okay i take that back today i feel like we might are starting to
[02:35:04]  see all the pieces i think i think there's a i think like they're not polished now but now i've seen enough of the parts that i i i i'm
[02:35:13]  starting to see how this all threads together right the idea is is is is this lever thing about the different thing what i find interesting though is i don't think the spectrum
[02:35:34]  is the current spectrum this is why i'm not like viewing this as just like oh we've flattened the spectrum because once you go to this architecture it changes the way you
[02:35:43]  think about caches it changes the way you think about page loads it changes the way you think about data flow in your application and for that reason i actually think you have to
[02:35:52]  step back to more of an mpa like mentality and then figure out what interactivity looks like in that world um this might be the push that we finally need to do
[02:36:04]  more web socket or you know rpc type stuff because when we actually need the interactivity in the browser it's going to be the most interactive stuff because everything that
[02:36:16] 's kind of middle ground will get pulled back to the server so i i i think i think this actually changes the way we even look at mpas or single page apps like
[02:36:27]  i don't think we still look at single page apps in the same way so like i don't think it's just like the current spectrum on a scale i think we've
[02:36:35]  actually pivoted and we're and the highly interactive side still looks different than a single page app today yeah and then this is what i was talking about like maybe something like
[02:36:48]  live view type pieces get in i don't think that's the core mechanism i'm still not i gotta bring someone in to kind of talk about this and that is that i
[02:36:56] 'm i i like even though i'm talking about this mpa type stuff i like the the app first mentality of like what we're doing here with the declarative apis
[02:37:07]  even though it's causing us a lot of work here with the resumability and like figuring out this stuff i think the authoring experience we want here is very close
[02:37:14]  to what we want so maybe this is why i need to look at phoenix or look at live view js is because i need to understand what's good about it so
[02:37:21]  i can steal it um as i said i like i like stealing stuff yep edge is a big part about this um if you saw that cloudflare article really good stuff
[02:37:37]  you guys are already talking about how to market solid start that's great okay let me get another drink on my throat's a little uh dry sore today because i was at a
[02:37:53]  meetup last night where i got this wonderful astro shirt and uh i i talk a lot as you can tell so i definitely um you know all right um yeah so
[02:38:10]  yeah we we showed all the cool solid start stuff um i guess maybe we should kind of uh pivot on to our next sort of set of topics um i'm trying to
[02:38:23]  decide if i want to deal with the react rfc on its own or as part of this week in javascript and i i think probably this week in javas
[02:38:31] cript because compared to what we've been talking about so far uh the react rfc sort of it's funny yeah i mean i'll talk about it but it's
[02:38:43]  sort of not as interesting as like it's it's kind of funny it's it i'm glad the reaction to it but on the other hand it's also like yeah it
[02:38:56] 's kind of it's kind of a like a nothing thing at the same time so it's it's um it's it's interesting to say the least okay um so
[02:39:04]  let's let's start going on that unless there's any more questions about this i i don't follow this too far but all i know is apparently lexical is or
[02:39:18]  you is the best the end i mean i don't know dom from inferno created it so i i'm i've always been impressed by his work all right um let
[02:39:31] 's let's see that's that's it for 1.6 yeah man honestly nikhil thank you for for for for for finding that missing piece of the puzzle right like
[02:39:46]  yeah our images need some work david but oh man it's funny like now that i'm doing the demo it's like it worked perfectly fine earlier um but yeah okay
[02:39:57]  let's let's let's move on and see if i can get this set up for this week in javascript so give me a couple moments while we ship base um
[02:40:07]  and get ready for our rfc rfc i i was there an rfc for the server components i don't think i actually saw that the rfc
[02:40:13]  i'm talking about is for this use hook thing um and uh where is it where is it where is it where is it um let's let's see if i can get
[02:40:22]  started weeks um so i actually have to scroll back a little bit far because what were we the 21st i think i need to go back to uh what is it oh
[02:40:33]  yeah yes oh wow we have so much this is going to be fun i'm glad i'm giving myself a little bit more time um yeah this is this is this is
[02:40:45]  this is where it starts yeah it starts with that live view hacker news clone actually funnily enough um give me a second actually i should blow this up first so i don
[02:40:59] 't lose my markers okay all right um solid js scroll back i can't remember if there's any big solid news um to do to do to do to do it looks
[02:41:23]  like it's mostly oh right actually that is big it's funny i was talking about this earlier and it completely blanked my mind about that all right um 13th yeah
[02:41:45]  okay i'm gonna have to pick and choose out of here i don't think there's actually a ton of stuff i i want to cover on this that isn't already
[02:42:03]  on my my thread um all right and then last and not least what did i pin something um is here sorry all just getting this set up always takes me a moment um i
[02:42:24] 'm gonna look at my bookmarks yeah yeah i don't know if i want to talk about this dan was kind of i can understand why he has confusion he was trying
[02:42:52]  to figure out what the point of all this prefetch code is for for quick because he's like i mean if i need the code why wouldn't i just prefetch
[02:42:59]  it like why wouldn't i preload it like why am i doing all this fancy service worker stuff for code that i need anyways and it's a good question um but yeah
[02:43:09]  yeah there's there's some reasons here why they use a worker is because literally half the browsers don't support prefetch properly but i don't think that's worth it for
[02:43:19]  this week in javascript i already pre-treated that okay cool so then this will come in when we talk about this um okay cool that that that that okay
[02:43:31]  i think we're i think we're good to go people still with me here um all right just checking twitch chat excaloth thanks for the prime sub that's true
[02:43:45]  actually if you if you if you aren't aware of that um uh if you have amazon prime you can literally give a free sub away every month and uh it doesn't cost
[02:43:56]  you anything extra and you can help me out you know why not and uh but more important i actually don't really care that much about the subs and the money and that stuff
[02:44:04]  is give the thumbs up on the video on youtube i want more people viewing this content if possible um i'm not as much of a natural to ask for this stuff as
[02:44:13]  other people but um it does really help uh get viewership um when when people when people uh you know put the thumbs up and and you know it helps with the algorithm stuff
[02:44:26]  still here cousin hey johnny all right good good i'm yeah it's it's been crazy you know all the stuff that's all the last couple years connecting with uh
[02:44:39]  uh people uh you know from uh yeah just it's it's been it's it's been awesome you know okay you know what yeah please please please please thumbs up like the
[02:44:57]  video um solid 1.5 video is is my most watched um video to date um so let's see if we can beat it i don't know i think those thumbs
[02:45:08]  up will help okay cool um so where do we want to start where do we want to start where do we want to start um yeah that's not where we want to start
[02:45:17]  okay cool let's get our banners and i'm going to go into this mode for this and keep cutting okay cool we're all good and yeah just because i do this
[02:45:29]  segment this whole this week in javascript don't let that stop you from like asking questions to chat i'll probably engage you in there too this is no different than
[02:45:37]  any other part of my stream except the fact that i talk about other people's stuff so it tends to come off spicier um but uh essentially this is the same thing participate
[02:45:48]  ask questions um i i have been kind of cutting these videos out in hopes that maybe i could release them separately but honestly i take too long and then i feel like they're
[02:45:56]  not relevant anymore but yeah yeah let's do this all right cool all right yeah i would like to talk about this week in javascript or this past two weeks in
[02:46:09]  javascript i didn't stream last week um it's been a wild ride for me because we've been working on a lot of stuff that we covered earlier in stream
[02:46:18]  um in terms of the islands and the you know server-esque components um but there's also been a lot of other stuff happening around in the ecosystem so i'm going to
[02:46:26]  talk a bit about solid i'm going to talk about some stuff going on in react um but yeah let's just kind of wind back to the beginning a couple weeks ago which
[02:46:33]  did kind of start a little bit slow um but i've been i've been getting a lot of push um to check out uh um live view js or phoenix
[02:46:42]  live view because it's like i've covered a lot of different uh approaches to how we can render the dom but i have not done this very server-centric web socket um
[02:46:51]  approach and to be fair i do intend to cover this in the future i just um as timing has had it i haven't had a chance to um but my my hacker
[02:47:05]  news demo has been remade in live view and we can see it in its full glory here it's actually in a stack blitz um give this a second uh i think
[02:47:17]  this was based off the quick one and the reason i can tell is because of the color scheme in this so hopefully it's still working oh man i sometimes break stack bl
[02:47:30] itz at times because of let's make sure that i'm like don't have like that going on but that's not what's causing it um darn okay well two weeks ago
[02:47:42]  this was working okay well that's too bad okay moving on um there was a really cool live view jss hacker news demo all right all right so where are we going
[02:47:59]  okay so um there's been a lot of talk about performance recently and and uh david uh k piano or dave corset uh creator of x state and stately was
[02:48:13]  just kind of like talking about like why are we talking so much about performance and and and you know you know customers want fast enough um not fast as possible you know i
[02:48:23]  would argue that depends on the usage but i do think there has been a lot of conversations because you've been seeing like performance obviously something we cover a lot on stream and ever
[02:48:35]  since the signals thing came out everybody's been like benchmarking it and like showing how their reactive system makes react faster and all this and we talked about that in previous streams
[02:48:44]  but the truth of the matter is i look at performance in several different categories and essentially like the rendering performance piece that we talk about a lot hasn't moved in five years
[02:49:02]  and i want to be very clear about that five years ago solid was the fastest today solid is still the fastest okay sorry uh i'm obviously playing a bit but that but
[02:49:13]  like essentially like we we we've seen some of the like uh bigger libraries like react and view um you know adopt newer techniques and getting faster than that but like the state of
[02:49:27]  the art um hasn't um actually changed all that much uh uh the technique um that i use in solid actually came up from surplus or sjs um so that technique was
[02:49:41]  you know winning at benchmarks even before solid existed as early as 2016. it's it's really been like an inferno came out around 2016. it's really been seven years
[02:49:52]  since we've seen any kind of move like it's significant movement on rendering performance it's it's like like if you look at it today you know stuff i'm not
[02:50:01]  just talking about the js framework benchmark it's that that it might be one of the better benchmarks out there but this like idea of just server rendering performance like this like if we
[02:50:10]  go find it in here wherever we are solids here let me remove some of the noise like some of the kind of implementations that don't follow the rules okay cool oh see
[02:50:19]  solid and inferno here we are best buddies um different versions of chrome change which is this or whatever i haven't seen inferno get in front of solid but the gap
[02:50:28]  between inferno solid keeps on swaying inferno's been over here before it comes in here and honestly not much has changed in inferno perf since seven years ago either so
[02:50:37]  like what i'm getting at is and it's not just a spend for any kind of like confirmable kind of dom update benchmark you're going to see the same relative range
[02:50:45]  of of results essentially so like this is just not moved um but we've seen some movement on server rendering um but not as much as again um not as much as you
[02:50:59] 'd expect um a lot of our i've been benchmarking server rendering a lot recently and a lot of our bottlenecks are actually limited to uh um how should i call it
[02:51:13]  um a a lot of like limited to like stuff that our meta frameworks do for us you know how we're all very happy with the request and web response model that we
[02:51:21] 're doing now you know so that you can write your code in one way and it works on dino works on cloudflare works on node and you all use this well
[02:51:29]  it turns out that that overhead of converting request response on node actually takes a throughput hit more more significant often than the framework doing the rendering so like i was like looking i'm
[02:51:39]  like why are svelte kit remix and solid basically like all the same on server rendering when i know like some are faster than others and it was like oh well there
[02:51:49]  we go you know what i mean like uh i mean remix with react took like a little bit more of a hit but like it was way too normalized and i realized that a
[02:51:58]  lot of this bottleneck was around like infrastructure around the rendering and that's why i was talking about we need to actually work with the runtimes to improve that stuff uh j
[02:52:05] ared's been doing amazing work on bun to actually address those specific kind of pain points you made like render to stream significantly faster for react there and the same should apply to
[02:52:15]  solid we need to kind of work on that more technology interfacing with the framework level stuff um than actually how fast we can can cat strings um and the the other thing we
[02:52:27]  have to consider is architecturally right um that's what we talked about about the stream like javascript bundles are still not getting smaller or even flatlining so you
[02:52:36]  know if we want to make these improvements on performance we actually have to look at our architecture and those can be big shifting changes um which not everyone wants to actually do you know
[02:52:46]  it's they they're happy with how they're writing things um so you know i so to me this isn't about getting a penny here you know nickel and diming
[02:52:58]  you know like little stuff it's it's like there's these clear areas and trends and those are places where you know it's worth putting focus on um we do need better
[02:53:09]  benchmarks to determine the architecture what the effect of hydration right the benchmarks we have right now test one specific thing and to be fair i've seen some criticisms of stuff like the js
[02:53:19]  framework benchmark but you know like oh who puts a thousand elements on a page who who works with the jit already warmed up you know all that kind of stuff but like
[02:53:30]  the truth of matter is single page apps do right like it's a benchmark you when you're on one page and a single page app and you navigate to the next page you
[02:53:38]  you could be putting thousands of dom elements on the page like rendering them like you you aren't doing that from like uh if your app is like an islands thing like i showed
[02:53:47]  because you know you're going to server render it but like our benchmarks reflect what we've optimized towards given the architectures that we use so i i think that like like
[02:53:59]  there are areas and performance still matters because like like we can definitely make it better every like people have i mean we have faster internet and maybe we we get kind of buff
[02:54:18] eted from it but like everybody's seen a website that's slowness makes it feel like it's broken like i think it does start with the tools setting the right convention
[02:54:28]  and showing us the way so to speak um it's not really just the developer's fault but as i said we're still you know god there's there was so much
[02:54:43]  good stuff during this because people just kept on talking about these conversations and like another one progressive enhancement right um you know being positioned as a solution for hydration like i don't need
[02:54:56]  to worry about hydration because my app works without javascript well it doesn't really like this discussion kind of gets into a place where i would where i was explaining that
[02:55:09]  um progressive enhancement is more of like um what's the word uh there's a term based on degradation uh degradation like uh graceful degradation that's that's that's what
[02:55:25]  progressive enhancement is when we talk about progressive enhancement we're not talking about how we can add a little bit of extra feature capability for people who have it we're actually talking about
[02:55:35]  when things go bad that they don't go that bad because the truth of matter is the difference between clicking a link too early because it hasn't hydrated and now doing a full
[02:55:46]  page reload and waiting like half a second longer and clicking it and doing a client-side render makes a huge difference like you you might actually like picture if your page takes
[02:55:56]  15 seconds to load and you click a link too early and now like sure you save the rest of the seven seconds like say at seven seconds you click the page too early now
[02:56:04]  you're waiting another 15 seconds whereas maybe if you you know and that's probably a bad example let's get closer let's say you click it at at at uh 10 seconds
[02:56:19]  and it's 12 seconds you know now you've spent 22 seconds whereas if you'd waited like the extra second or whatever then the next navigation would have happened in like two
[02:56:30]  seconds like the delta is better if you just waited a bit longer but you have no way of knowing how long it's going to take the hydrate um right graceful
[02:56:39]  thank you and the thing is yeah it's not it's you want progressive enhancement not because just for the disabled users not for this hydration store you just want it to be a
[02:56:54]  good citizen of the web and that's that's essentially where this discussion is it's like a failure condition it's just making sure that your your app is accessible to people
[02:57:06]  that you know don't have the best connection or the best device or happen to be going in a tunnel at a time or whatever like it's it's just making your your
[02:57:15]  app more available more resilient you know that that's that's really all all all all this is about all right um yeah and i spent the first week of the last two
[02:57:30]  weeks writing docs the whole time preparing for vconf except for the fact that um it led to the some of those uh that demo that um yeah i i how did i
[02:57:45]  skip past it um that's funny this demo the the islands demo hacker news um that we showed earlier um while we're doing the stream but essentially um skipping past all this v
[02:58:01] conf stuff vconf was amazing we had this framework panel um and it was very awesome talking with um all members of all the frameworks funnily enough if you watch our
[02:58:12]  stream you've seen almost all these faces they've all been guests on on their stream at some time um and but having us all in the same room was was was awesome and
[02:58:22]  it brought attention to some really great things like hatip i think it's called the our ability to maybe share adapters or you know code between these frameworks like share more
[02:58:32]  than what we do with vt i think it's really potential daniel from nuxt really went into the njs stuff again um in more detail than he had on our
[02:58:40]  stream it sounds like nuxt has a lot of really universal solutions that we can all use so i'm very excited by the output of that um yeah but vconf was great
[02:58:50]  i enjoyed giving that talk it was very similar to what we talked about earlier in the stream um but okay we're talking about performance right so let's talk about performance i
[02:59:02]  forgot all about it but the wasm stuff happened during these two weeks too um i often talk about how much i love the solid js community you go on our discord and you
[02:59:14]  have like all the other framework authors in there and that doesn't even include just javascript framework authors um that includes rust framework authors um sycamore and lept
[02:59:25] os are both very influenced by solid so if you go in there you you you will probably find them in our discord as well and um essentially leptos hopefully i'm saying
[02:59:36]  it right it is when as close as possible to solid's implementation to my understanding and they managed on the jsp framework benchmark to close the gap between solid to almost a
[02:59:50]  negligible amount like this is just incredible keep in mind this isn't page load you know like this doesn't mean like you're just gonna go pick up and use rust tomorrow
[03:00:03]  there's implications of actually like using the build websites but it proves that from the pure update standpoint on the dom we can do amazing things i think the problem is maybe the
[03:00:16]  rust framers weren't using the right architecture maybe like a virtual dom that a lot of them were doing kind of copying react like you isn't where you want to be maybe
[03:00:24]  you just need to make solid in rust like leptos uh like sycamore and you're now you know in a different zone yeah yeah yeah no i was super
[03:00:41]  that's awesome greg yeah i was super stoked on on seeing this because i've been following this rust thing because how many how like how often does someone come on when are
[03:00:54]  you gonna write you know solid and rust you coward you know and the truth of matter is i'm like i keep on like tongue-in-cheek being like when it
[03:01:02] 's faster um and that's a good pushback for now but maybe not for much longer and other it looks like others are gonna write solid and rust before i before i
[03:01:12]  do so um yeah uh i i i'm pretty stoked about this um yeah it's kind of you know so pushed it out to primogen because he's he's been testing
[03:01:25]  you and he's very disappointed like i don't know if if we're doing the isomorphic lighthouse type like full and end benchmark i don't know what the rust
[03:01:33]  frameworks are going to compare you know but this is this is this is promising and and means that you know you could start focusing on the next problem and actually i think i think
[03:01:45]  there's actually a thread that i saw um today yes greg we got here wasm isn't suitable for ui because of how slow dominant interrupt is is common wisdom but
[03:01:57]  digging into the details of this benchmark show exactly where this is right and where it's wrong why is u so fast on some benchmark and slowly others in part string encoding see
[03:02:05]  i'm interested in this thread because this this is where the truth comes in see you you are a mature vdon library is simply smoking the major jsvdon live frameworks
[03:02:17]  major ones not the fast ones it's not only fast in react but faster than preact and basically on par with finergrain so in terms of arguably more um important element
[03:02:26]  creation though u is slow like super slow okay why is this happening string encoding so this is talking about the whole utf8 thing and jsutf16 jared from
[03:02:41]  bun talks about this all the time i don't really fully follow what he's talking about but i'm i'm gathering this is javascript is very weird in this sense
[03:02:55]  so the options are mostly within wasm vdon diffing u is pretty fast but when they send a bunch of strings across it's slow uh-huh but the real
[03:03:04]  solution is creating template nodes and cloning them leftos does this inspired by solid which is why they're faster the benefit of the template clone is they are even higher for was
[03:03:15] m frameworks because it means you have see all right this is this is very useful information they can be faster for the equivalent operation by creating elements setting attributes and creating text notes
[03:03:31]  is slow because passing the strings so if you make a template you minimize that yes okay that's awesome see there you go that's the truth about rust isn't that cool
[03:03:50]  and this is what you find with performance it's like often not exactly what you think it is when you look into it it's like something else and then it's something else
[03:04:00]  and it's like bottleneck after bottleneck but it's not sometimes we assume things fundamentally are you know flawed when that's not really the thing that matters or it's expensive
[03:04:09]  perfect example that is how people overcompensate on the vdom being too expensive the concern of the vdom isn't how fast it can render something optimally like
[03:04:17]  we i told children inferno and solid are like best buds like knocking elbows there and block dom as well it's the fact that the architecture leads in my opinion to end user
[03:04:26]  code being harder to to maintain that performance um just because the re-render cycle like that's but maybe you can solve the re-render cycle a different way and keep
[03:04:37]  your beat on you know what i mean like that's there's so many elements to that so yeah anyways see this is why the i i find that interesting this is why i
[03:04:49]  love the performance conversation all right so yeah i had to skip my stream for jams.conf um myself uh taylor hunt and mishka worked on this streaming article
[03:05:04]  if you want to know more about streaming and some of the like caveats and stuff and like the challenges it's in here i have to admit i didn't work on this
[03:05:10]  article as much as i wanted to and then you can tell when you actually read it because i put a bunch of notes in that and they edited to reflect my notes but
[03:05:18]  at the end of the article they're like you can do this really cool thing and it works like this in marco and then you can do this really cool thing and it
[03:05:24]  works like this in quick and then like there's no mention of solid or anything in there and i didn't get my jabs in or anything so um yeah as i said
[03:05:33]  i i was i was more of an editor than writer compared to the other two but um still a very good article you can assume that everything that applies to solid or applies
[03:05:42]  to quick and marco also applies to solid for the most part so um that was a fun one yeah as i said uh i didn't actually check how how how much that
[03:05:55]  that actually uh triggered through what when i when i posted it leftos had like i was like the third person who started the repo yeah 800 stars overnight solid didn't get 800
[03:06:08]  stars overnight but part of it is because you obviously do good work and people are in a good place are receptive to it but yeah that's that's that's that's
[03:06:17]  that's impressive i gotta say it took it took us like six months or a year to get to 500 stars i feel like um so good good good good good stuff but yeah
[03:06:29]  and i apologize i probably should give you a bit of a heads up i'm sure actually let's go back there again one of the fun things that when you do this
[03:06:38]  is like how's how's the issues been going okay okay steady growth okay not too bad i was worried sometimes you do this and someone gets swamped with like tons of issues
[03:06:47]  i've watched i've watched like when someone came up with like a react um without a vdom clone like i saw it jump to like 2500 stars like almost immediately and then
[03:06:55]  the then had 100 issues and then like the person was like it was just a demo and they like dropped the project afterwards so i'm glad that's not happening here and
[03:07:04]  um very cool stuff greg anyways um all right this is an interesting one i actually want to talk about this too sorry there was a lot of interesting stuff um uh apparently solids
[03:07:18]  repo has the highest code quality of any open source repo that the primogen has ever looked at looked at he's like he's like he's like it's like a
[03:07:28]  hundred times better like he counts uses tree sitter they count the number of nodes and like most frameworks are like in the hundreds of thousands maybe million and solids like 55 000 and i
[03:07:40]  was just like what what's going on like and he he he basically tests how well people write their code um like a minifier um which is such a funny thing to
[03:07:59]  me uh because he basically like i've been criticized of this of writing code like a minifier because i back in coffee script days um i didn't like like i love the
[03:08:10]  terseness of coffee script so when i moved to javascript two things influenced me i like trying to get that terseness back and secondly i spend a lot
[03:08:19]  of time on looking to compile output of java of coffee script and that influenced how i like thought about javascript because like i try i'd write my javascript
[03:08:27]  the way the coffee script compiled output would look like so like i tend to yeah write my code like a minifier when he says node it's not about variable names you can
[03:08:34]  use full length variable names it's not counting the number of characters he's talking about like logic nodes like blocks right um this is a function call this is an argument you
[03:08:46]  know this is a property access this is a conditional statement this is a expression which has a single identifier in it like he's he's he's he's he's he's
[03:08:54]  counting it like that um i'm gathering yeah he he's basically yeah my understanding is he's like syntax points almost like is what he's counting as a node so it
[03:09:08] 's not like per character it's basically like the ast and yeah so apparently i write code more like a minifier than anyone else so i don't know whether that's a
[03:09:20]  yeah 60 to 100 times less tree sitter nodes than any framer to for him this is high praise i don't know if this is a good thing he got jived
[03:09:28]  about it because obviously he's like the rust guy and like they're like when are you going to wear your new solid js shirt but honestly this is just interesting because i was
[03:09:39]  not expecting it i think he wasn't expecting it too he wanted to he wanted to prove he wanted to prove the difference between spaces and tabs whether two or four and his his
[03:09:49]  theory was that when people did four because of the the extra indentation it would cause you know people to like compress stuff horizontally and not do as much indentation and then
[03:10:01]  he thought like if you went to you'd like most javascript developers it's so that they can indent further with their line lengths and the the funniest thing about solid
[03:10:12]  repo is we're two and i i moved the line length up from 80 to 100 so i have extra long line length and i have um two indents which is basically the
[03:10:24]  antithesis of his whole argument so he wanted to find examples where he's like okay this repo has two spaces and longer lines this one's going this one's going
[03:10:33]  to have way more nodes and we were like the sheer opposite of his of his of his thing and i said i think he's just underestimating the power of coffee script
[03:10:43]  because in coffee script you know you write everything as terse as possible and the reason i do the long line lengths and the small spaces is because i really compress vertically um and
[03:10:57]  as it turns out if you compress vertically you also uh um tend to compress nodes horizontally i don't know why that's the case but basically solid is like a huge anomaly
[03:11:09]  compared to all his other stuff oh i got tons of subscriptions on twitch oh wow thank you uh gifting subs well that's amazing thank you so much uh i don't
[03:11:23]  know it's nikola kristoff uh five gift subs went out um thank you uh i guess when you talk about subs then people sub i i i don't know what
[03:11:33]  to say this is this is really awesome um i don't even know how many subs i have i guess i'll check after the stream i'm but thank you um yeah
[03:11:55]  i mean there's this question about tabs versus spaces and the correct answer is tabs because of an accessibility thing and then anyone can set their own spacing based on tabs and you can
[03:12:07]  just go on github and set the setting i am just i was i i'm a coffee script dev so i came up in the whole i mean i used j
[03:12:15] avascript a bit before like when i was really young but that was like pre using ides and then i was doing really ugly stuff in microsoft.net but when i
[03:12:23]  really got into javascript and like really made it my own it was coffee script and everything was whitespace matters and in whitespace matters languages it was always spaces generally
[03:12:32]  because tabs would confuse things right um so essentially uh pug coffee script stylus meant you use spaces and i still use spaces to this day but tabs is the correct answer right i
[03:12:51]  just like it is so hard for me like space consistency in depth actually matters and tabs could cause things to go wrong with whitespace matters languages so yeah yeah i mean yeah
[03:13:09]  pug was jade back then when i used it it was jade when i i but the thing is i i used it as also pug i i i used that coffee script
[03:13:17]  stylus pug stack all the way to 2018. 19 yeah so that's why it doesn't feel that long ago to me yeah i think type script would be interesting too
[03:13:30]  because i feel like type script is like the real killer for code quality like this like i think type script is like good for code quality but i think like for for his metrics
[03:13:41]  i think type script basically um is one of the worst things um so it's like the opposite of coffee script so it's kind of interesting i don't think this is a
[03:13:50]  good metric that's what i'm saying i just thought it was like really interesting that he was giving me points for writing code like a minifier um because i do because
[03:13:58]  i i just hate new lines um i like looking at a file and seeing all the code in front of me like in the first 30 lines yeah thanks greg for joining it
[03:14:10]  was awesome oh yeah all right so let's let's keep on going as i said there there was so much cool stuff here this one this the i i knew when i
[03:14:26]  saw this talk advertised that this was going to be sweet it's funny not many people were paying attention of on it until i like pulled it out i i some someone i forget
[03:14:37]  who it was we we have uh username a c e a e a or something on on our discord is just like a link uh bandit just goes on our discord and
[03:14:48]  off topic and just shares every article talk everything that's coming and i came across this and i was like steve sanderson the creator of knockout and blazer is giving
[03:14:57]  a talk about the history of web development i'm like i i need to watch this um and i honestly like i i i was just like it was better than i thought
[03:15:09]  it would be um as i said i'm a huge fan you have to understand like knockout changed everything it's like what made me fall in love with javascript
[03:15:21]  again and like and reactivity that i often said solid it's a spiritual successor from knockout i say probably more than any um pretty much any ui library out there um
[03:15:35]  we were like we really like continued on the kind of the the path of knockout and um to see him talk about this and put his perspective it was great he had
[03:15:49]  examples of like the first web server and all this and he went through the whole history the funniest thing for me was he got to like knockout backbone and angular and then he
[03:15:58] 's like yeah and then the the next uh you know five years there's like newer versions that were you know improved on that and then he moved on like he didn't even
[03:16:05]  mention react once which was kind of funny to me but yeah like then he jumped straight to like blazer and like web assembly which is what he works on now and then
[03:16:16]  he talked about meta frameworks like this this talk is is i was watching it in real time and i'm like oh my god this is so good i was like trying to tweet
[03:16:24]  about it while i was watching it in real time and i'm not that good at that and i was just like more people have to see it i'm glad people agreed it
[03:16:30]  was absolutely amazing and he surprised me i i i was just watching it and then like solid start shows up under meta frameworks um and i was just like what like we showed up
[03:16:42]  earlier on a graph that uh sarah drasner had done of showing the link between all the frameworks and i you know we've shown that graph on stream before but
[03:16:49]  i was just like what's going on um and then at the end he literally does like a five minute demo of svelte kit to show what modern web dev in the
[03:16:57]  client is like and like yeah i mean i yeah i i should have added rich harris too although he found this tweet like um yeah senpai noticed me yeah that's
[03:17:09]  all like yeah like this was i this was probably so awesome for him like we are all big knockout fans and well no exaggeration i say steve sander is the
[03:17:21]  programming hero of mine svelte wouldn't have happened if not for knockout you know and like knockouts tutorials are like basically where the svelte tutorials came from like
[03:17:31]  they had the best tutorials right off the beginning um um yeah i mean yeah this was so freaking cool um but yeah it's uh yeah i i'm a huge fan and
[03:17:47]  i'm so glad that he did that talk and blew up and actually he had some kind words for for us and solid it's really delightful to see where you take the web
[03:17:56]  front so yeah i i i think this is a great talk uh uh it's much more general it doesn't just focus on the javascript framework side of things i
[03:18:13]  think i think everyone probably should watch this one um okay i'm gonna talk about a couple other solid things since we're here dan jutan uh gave a talk at react
[03:18:32]  brussels um he also spoke at vconf about uh his uh kind of um tutorial making harness both things done um in solid and his first two conference talks but this was
[03:18:45]  his first in person conference talk um i've been hearing people rave about this one he had 10 minutes basically to sell people on solid and apparently he he he did very
[03:18:54]  well at that so i have so awesome to see him out there doing the conference scene love this create signal in the background uh um yeah dan's been doing amazing work for promoting
[03:19:05]  content and educational content and solid uh so super super super super super cool to see and he actually he did a podcast too so um if you guys want to hear and learn
[03:19:15]  more about solid and not from me so maybe a little you know more digestible i strongly suggest checking out the stuff that dan's been doing um it's really really quite good
[03:19:25]  um right solid styles getting updates this is cool we've got dino beat solid all together um i'm actually not sure did did you actually create this demo yourself or are
[03:19:53]  you retweeting it um yeah no sorry i did see that earlier it's the problem i just kind of moved on from it i'll come back around if i if
[03:20:06]  we get a chance um live view on twitch i'm at least everyone is able to check out the link um but while i've got you here um seriously this this is cool
[03:20:16]  people have been asking for dino and i was talking about like we support dino at runtime but this is dino at build time too i haven't tried this yet i
[03:20:24]  think this is this is that this looks pretty cool i apparently i think is this only client side um solid ssr and dino templates okay yeah so maybe ss
[03:20:35] r as well anyways it looks like we can run solid in a dino environment so this is actually huge i don't know if people picked up on this i i haven't
[03:20:43]  even looked at it yet and i probably should soon he just saw ssr in the repo itself that is awesome or is it using the babel transform if it's
[03:20:53]  using the babel chance well it has to dehydrate that's chef's kiss okay you know okay this is still very big news it's awesome for dino awesome for us
[03:21:06]  um to you know to be able to show other frameworks not using like the prescribed like typescript jsx transform path to be able to actually use this um i'm super
[03:21:17]  stoked about that um while i'm here solid won um like the front-end framework award from the info world bosses i don't know if that means much of anything to any
[03:21:28]  of you but uh done a few interviews they they've got a lot of tech articles it was awesome to get recognized felt got recognized last year um and they they they all the
[03:21:39]  quick and astro were also in the running so um this was this this was it was nice um i guess this year is our year to get a couple rewards we got
[03:21:48]  the uh what was that the front-end framework um or the innovation or breakthrough the year award from js nation earlier so see how that goes on um i think that's most
[03:22:00]  of what i want to know on this side um do check out ben's content i i love how we talked about this earlier putting a single page app inside astro um
[03:22:10]  this was a lot of fun i've been watching the streams and getting into that so um do do go back and check that if you missed it it's it's fun to
[03:22:18]  move you to the app okay cool actually like there's lots of cool solid move news um it's kind of 3d thing off zero there's so many i mentioned this before
[03:22:29]  there's just so many um ecosystem libraries coming in i can't even keep track of it so let's move on from the solid news and keep on going on to some
[03:22:38]  other topics here um so where are we um yeah there's we got a few i i didn't retweet this one because i don't like the tension it brings between
[03:22:54]  uh frameworks too much but i just wanted to we we i i i i we see a lot of these kind of comparisons and i think i think it's interesting because sometimes when
[03:23:05]  you rewrite an app you just rewrite it better but um yeah i mean it's always nice to see these timelines and when people share um share kind of their their work and you
[03:23:17]  know are happy with solid so i i just i just want to point this one out just in case like people like oh you know what why don't you promote and push
[03:23:25]  this i don't like this kind of this versus that dialogue that this kind of promotes too much and i understand it's natural because you have one app and you replace it with
[03:23:33]  another app and then you're like look how much better it is 95 less scripting time on the first try i mean that's impressive the the thing that i really liked about
[03:23:42]  this was he's like i'm not hating on either he's just like he just he he actually tried preact signals and he got the similar results he just didn't
[03:23:54]  like the ergonomics it just didn't like fit with him he he was just the experience you know which is great like just kind of you know just kind of understanding and he
[03:24:04] 's like there's a couple little things like how hard was it to go from preact it's easy to forget on cleanup and return functions you know because the types don
[03:24:13] 't complain you know good learnings here and i'm just i'm always happy to see examples like this out in the wild so um yeah um yeah it's great stuff um
[03:24:27]  this i wanted to point out earlier this this is what led to that whole conversation about context um i didn't show this earlier but uh dan abramoff was like hey
[03:24:37]  i haven't seen context in between islands well we saw that earlier on the stream if you missed it go back and earlier and you'll see how context works on on uh disconnected
[03:24:47]  islands um but i think that's all kind of okay almost there this is also a great dan abramoff tweet um and i want to talk about this because i was
[03:25:00]  talking about the ivory tower design versus like the scrappy design um earlier on stream and difference in approaches like how i approach problems compared to maybe how the react team approaches problems and
[03:25:15]  he said he keeps on noticing this funny recurring pattern implement an abstraction that's too powerful implement a newer abstraction that's more constrained on top of the old one hide the powerful
[03:25:25]  parts of the old one re-implement the new one as if the old one never existed and delete the old one and yeah i mean this is how you reshift
[03:25:35]  i call this reshifting boundaries um because sometimes you use this pattern also to pivot a little bit like you you the important part is you do the work the first place
[03:25:48]  you get the learning and then you have to shift on it and i was kind of saw this and i was like so this is what the react team's been doing the last
[03:25:56]  five years i mean that's that's a sarcastic take but it's like i don't mean in a disrespectful way at all like this is part of the exploration process
[03:26:08]  um and this takes time because you kind of you know go a little bit for forward a little back a little forward back it's like uh doing like an nth uh point
[03:26:19]  turn in a vehicle like like it but i mean he's talking about actually finding that ultimately the simpler model is all that you need and i think server components were an example of
[03:26:32]  this they had something called flight i think a while back uh and um or blocks i can't keep track of them all and this was like a way of stitching together different
[03:26:43]  types of request formats so they could like do some probably crazy stuff you know like be able to like send multiple requests at the same time and responses and like stitch them all together
[03:26:53]  and then now we just have server components and i think this even happened with suspense and transitions it started with a much more complicated transition model and slowly simplified the funniest thing that
[03:27:04] 's been happening to to me at the same time you know or with solid you know the work we're doing is i i see what they're doing and i'm like oh
[03:27:15]  my god that's so incredible man i can never do that that's going to take so much work i i i can't like how would i possibly do that i i
[03:27:23]  and i look at it i'm like okay well i the thing that i bought it that i like is this part this is the part that i value of it maybe if i
[03:27:33]  just like don't do the rest it'll be good enough and then what's been happening is the react team scales back and we meet in the middle that that if uh
[03:27:45]  someone actually like made a comment and i thought it was kind of funny uh i say someone but it was uh uh sorry where was it it was when i when i when i
[03:27:57]  tweeted out this stream today when i was like talking about uh solid server components i got a quote tweet from adam rackets lol this dude just single-handedly building simpler
[03:28:09]  versions of react greatest hits in a third of the time and i'd ask if solid simpler foundations allow for quicker implementation things like this but i'm not smart enough to understand the
[03:28:19]  answer so i'll just assume that's the case i think so yes but i think it's also because um maybe i'm just not as ambitious to begin with i i
[03:28:29]  i take it sort of opposite pragmatic approach where i'm kind of skeptical and then i'm like like try and distill it and then not like do the grandiose thing off the
[03:28:43]  bat that's the best way i can put it i think this was an interesting observation okay thanks for filling in um because what dan had mentioned to me when i talked to
[03:28:56]  him was that he was very that there was like some kind of uh um data fetching format thing that was very kind of single page app oriented and then they had the server
[03:29:06]  component stuff and they were both kind of like floating around at the same time and his big contribution to react the last year was that he like he he was very proud of this
[03:29:15]  is when he realized that we could they could just get rid of the one thing and only leave server components and they'd be better for it so i don't know what
[03:29:23]  that other thing was i assumed it was flight or blocks but he like i don't know all the internal code names but yeah thanks for the clarification the difference between pioneering uh
[03:29:35]  tech and implementing it yes but there's also a difference between yeah how do i put it the like when i hear pioneering i think it also includes implementation and i think
[03:29:56]  there's a different the the point at which a lot of stuff with solid forks is at the conceptual level not at the implementation level at all so it's more like there
[03:30:05] 's a difference between thinking of a of a direction and implementing it is a better the way of putting it there because i i i don't know i've actually learned very
[03:30:18]  much react from their implementations at all if that makes sense i actually start from the idea and then go huh what part of that idea do i like and then i come up
[03:30:28]  with a completely different implementation because there's there isn't actual similarities in a lot of cases there's also a difference between copying and reimagining it too i don't
[03:30:41]  actually often get the chance to just straight up copy things because um the under like i'm used to the cycle the underlying way solid works works so differently than react i almost never
[03:30:51]  get to copy anything like testimony this is spreads you saw the spreads there's no way i copied spreads from react like sure i copied the syntax from the jsx because that
[03:31:05] 's part of the jsx spec but you there's no way you'd consider that copying almost everything concurrency transitions like all our mechanisms are like that different than than react
[03:31:18]  um sometimes that makes things complicated like spreads sometimes that makes things way way way way simpler because solid like knows how to handle dom nodes like that context example right so i i yeah
[03:31:33]  yeah and a lot of that could be a description of solid versus react it's only superficially similar um so yeah i mean i i found that i found that like an
[03:31:49]  interesting sort of uh sort of revelation there um yeah uh let me i think yeah let me go back here i think this is really powerful um before moving on i i think this
[03:32:08]  is i think we all do a little bit of this and i think just recognizing it is is really good yeah the facade pattern when he said this this is exactly what came
[03:32:20]  to my mind i was first introduced to this when i was working in a dot net code base and they followed the gang of four you know like the design patterns thing and the
[03:32:29]  facade was a trick that we used to use like when we refactored everything um but yeah i mean some people are confused by too powerful i i like this aspect of
[03:32:40]  this conversation too because too powerful is a real thing um sometimes your apis are too flexible they give people too much rope to hang themselves with um one of the and usually that
[03:32:55] 's the hardest part when you you want people to fall into the pit of success solid has a lot of restrictions around its reactivity because we want we want you to be
[03:33:08]  able to be successful with it and things that are like too powerful for example it's like two-way binding two-way binding in my opinion is is too powerful that's
[03:33:18]  that's what he means by too powerful it's like like you can you know do anything anywhere i love this on the thing just copy the names the naming is things hard
[03:33:33]  yeah you that's exactly it i just copy the names i also i i do more than copy names i copy the intent you know behind the the names um so to speak
[03:33:45]  but yeah um yeah anyways this this this one is just uh i think it's i think it's i think it's good to notice and kind of take note for yourself um
[03:33:57]  it's hard it's this is something you have to do when you have real people using your app and you learn a lot through that but it means it's a slower process
[03:34:03]  we've been lucky um i say lucky but like when you're a smaller thing you can move faster because there's less people using it um in the case of something like
[03:34:13]  server components as i said it's more like a wrapper so it wasn't that hard but it's it's yeah it's definitely interesting to kind of see this um speaking of
[03:34:20]  more cool stuff preact is working on streaming this is out of order streaming right here see i forgot to mention this in a different thread with a cloudflare thread but pre
[03:34:32] act is is working on on this is out of order streaming see loading place streamed in and then this content was added um i don't know there's a couple things
[03:34:43]  that i found interesting about this tweet first of all let's look who retweeted my tweet only one person in the world retweeted my tweet kent c dodds
[03:34:53]  kent used to work on remix but kent has never retweeted anything i've said i think except if it was part of like us like reconciling after
[03:35:07]  the whole incident that happened a few months ago so i i'm i'm i'm just this this is curious to me and then when i when i go in here and look
[03:35:16]  at the tweets and the talking and stuff and oh also from remix jacob it's so nice when you meet others who are actually willing to see your you know play
[03:35:32]  with the projects others use thank you for taking this yeah so this streaming thing actually started from from remix so interesting so i i don't know i i i you we can
[03:35:55]  all choose how much we want to read into this but remix is big on streaming these days right and um yeah i don't know you know like they have that defer thing
[03:36:15]  right solid has a similar defer thing as well um and i feel like yeah i mean i know that they're working on it but this much attention i think remix is kind of
[03:36:26]  being off put by everyone who keeps on telling like oh i'd love your framework if it wasn't for react and then preact goes signals and kind of gets out of react
[03:36:36]  shadow and then all this remix stuff i don't know you guys can put two and two together for me um but i'm i don't know if this preact integration
[03:36:51]  for remix is just going to be like another integration like we have you and svelte i get the opinion i get the feeling that this seems like they're they're working
[03:37:00]  towards getting a recommended path i i don't know we'll have to see where this goes but i wonder if remix and preact become kind of like married at the hip
[03:37:10]  a little bit in the future it's just it was i don't know it's curious to me it would be a good move too because this would address a lot of the
[03:37:20]  stuff you know at least the common sense it's not as cool perhaps as the the server component island stuff i showed today but given how much the the the remix guys have
[03:37:31]  been skeptical of violence there's actually if you go to remix blog or whatever let's see remix was a remix run dot run if you go here and you go on their blog
[03:37:40]  and you look up server components see i'm a i'm a pretty big believer in server components conceptually at least maybe implantation needs work this whole thing is basically saying
[03:37:55]  like yeah you can use server components but yeah you know what i mean i don't know the and they and they've been very skeptical and partial hydration conversations still to this day
[03:38:14]  so i yeah i don't know this seems like an uh uh this seems like an alignment i we'll have to see how this develops yeah oh big into web components yeah
[03:38:26]  i've seen that too so yeah i think i know there's a plan to integrate other frameworks that's been in the talks for a while in fact we talked with them pretty
[03:38:39]  early on about integrating solid but when the requirements came through it was like clear that we couldn't do it anytime soon um and that uh we couldn't be a priority um
[03:38:49]  but but yeah i i think i think that's interesting fresh and preact also obviously made a ton of sense because they can just use the standard jsx transform and leverage
[03:39:04]  preact like as is today so um yeah preacts interesting one because like i think they are in right now going through um that sort of period where they're kind of
[03:39:19]  trying to maybe establish their own identity like if you historically like preacts well known well loved but if you go like i don't know if there's a preact front-
[03:39:30] end master's course or something like you don't you don't find preact as like a different option it just gets bundled under react you're like oh yeah i know
[03:39:39]  react i know preact so they've leveraged that but on the other hand they haven't had as much of an identity till now so i i find both of these
[03:39:46]  very interesting but because it's like react for people who are leaving react or want to like explore a little bit beyond react and they care about the stuff we talked about today like
[03:39:54]  about small bundles and performance preact is a very logical thing and even adding the stuff like the signals you could still kind of sort of feel like you're like doing
[03:40:06]  some of the the you know reactive stuff and and uh you know keeping react together i i think that marriage is an interesting one which uh from that earlier tweet we saw where like
[03:40:18]  there's some awkwardness there perhaps but i think that this is going to be something we see a lot in the next few months we just got really upset with the next
[03:40:31]  yeah i mean i don't know if they got upset but i mean i think this has been hard for everyone it's been hard for hydrogen it's been hard because like this
[03:40:42]  is it seems very clear that next and uh react really in aligned and then everyone else is kind of like what am i doing here and the other hydrogen's been using server components
[03:40:51]  so i think that's the thermometer okay i'm gonna say right now hydrogen's success with server components is how much you get to decide how true this is if if hydrogen
[03:41:03]  and server components you know go good then um i i feel like you know we're just seeing some growing pains and you know stuff will kind of you know level out where
[03:41:17]  where they go because i'm pretty confident certain components are a good thing so i think you know that will say it however if we see hydrogen you know have a hard time with
[03:41:27]  server components maybe drop them or something i think this very much supports this narrative about the the react next merger and that's much much more concerning right because you know what are
[03:41:41]  the react major meta frameworks next remix hydrogen gatsby gatsby went to partial hydration i don't think they went to server components but they have their own kind of case
[03:41:54]  so or maybe they're using server components for partial hydration but their solutions kind of i think if only one of four align with the vision then i i think that's pretty
[03:42:07]  telling so right now i think hydrogen's going to be our thermometer we'll see how hydrogen goes and that's probably how i'm going to base my how things are going
[03:42:18]  well what happened was that the the head of the react core team essentially like the visionary uh left meta and is now working at first cell um sebastian markabaj and this
[03:42:33]  has cut some called some things into thing like is is react core team basically just you know supporting like i in one sense it's good that maybe they're not only under
[03:42:47]  meta's vision of the future but like people are worried that like next basically it's like collusion like they're like they're keeping everyone else out they they come up with
[03:42:57]  all the cool new tech together and then show everyone else like after they've already released it so like they they're just like they always have an edge like they're like they
[03:43:07]  they always get it first kind of thing and then everyone else has to a scramble to catch up you're like oh do you support this thing next does and and you
[03:43:16]  know the re it's it's basically like as if the react core team was working for versell that's that's sort of what the conspiracy theory angle is and as long
[03:43:23]  as the other projects are flourishing and doing stuff i don't think we have to worry about that as i said but pay attention to hydrogen that's that's that's
[03:43:32]  that's that's that's where i put put it sorry okay so they drink yeah i mean to be fair if you're talking about the old docs the old docs have been
[03:43:51]  around forever beta docs are more interesting i don't know about that but yeah i i think i think if i if i was just like measuring things i'd look at hydrogen
[03:44:01]  enough on that but this is very interesting to me keep on watching remix pre-act relations and pay attention to hydrogen i think i think this is sort of where where where
[03:44:19]  some some movement seems like it's likely to happen okay yeah yeah yeah yeah we already talked all about server components are sorry about solids attempted it jamstack conf coming up
[03:44:39]  couldn't be fun i'm also doing front-end masters coming up lots of great stuff coming up okay before we get into the reactor rfc i got one more
[03:44:47]  one for you guys uh which is talk about this cloudflare article actually let me double double check that i don't have anything else um which is no i've got okay
[03:45:00]  i got one quick note before okay really quick note i love this i love showing people this because i always get hounded about this the new beta docs page for clone element this
[03:45:12]  is mostly legacy things so i focus on documenting common alternatives how many of you familiar with react clone element he lets you like take a vdon node and clone it and then
[03:45:23]  you can like mess with it um and like reinsert it it's like this pattern that people use to kind of like upgrade children that get passed to it and i get asked
[03:45:34]  for this feature all the time in solid and it's one thing we can't do because it's literally is an abstraction breaker like it's literally acknowledging that there is a
[03:45:42]  vdom there you like clone vdom that's what this is because you wouldn't clone a real dom node if you were actually being performant you'd never go like oh
[03:45:51]  yeah let's just make some more dom nodes for fun you'd enhance it augment it i i just clone element is uncommon it can lead to fragile code i just love seeing
[03:46:04]  the react core team just like because this keeps on coming up and i don't think it's legacy uh yeah well i hate to break it to you the problem with this is
[03:46:15]  the same problem which children expensive uh it's introspection um react doesn't want you to do it because it gets in the way of their ability to optimize it's actually
[03:46:29]  a pain in the ass to support children's perspective this is one thing that template like dsls have to their advantage people aren't just looking at the children and augment
[03:46:39] ing them no one like framework authors do not want you to do this it's just innately abstraction linking yes and it's it just it's it's just it's it
[03:46:51] 's not logical for people using it it's really nice from like a final api perspective but it's just it is not good um and i i say that um you
[03:47:03]  know it's it's kevin's a big fan of it he's been working on a new path like this his whole pattern is based around it and uh he actually figured
[03:47:13]  out how to make it work in solid so i mean props to him that is probably really freaking hard to make it work in solid so like that's dedication um he's
[03:47:25]  also the guy who created the react solid bridge which uses portals to do like a crazy like uh thing where you can portal in a portal in a portal in a portal in
[03:47:34]  a portal and like share context and have react and solid seamlessly working together so like he knows his stuff here but you know there's this whole question of like just because you
[03:47:45]  can should you and it's funny because everyone has a different opinion on it can i can i actually quickly show in the playground what i'm talking about because i don't know
[03:47:55]  if there's actually it's in it's in the article i'm going to cover it's in his definitive guide does he have an article version of it essentially it's i
[03:48:04]  saw something like this shared with me it was like event uh target equals something or other and then he you basically use jsx elements to decorate some kind of child so you
[03:48:19]  could be like have a button and then you can like essentially use this event element to enhance the button and you could like this is very much a clone element type of uh
[03:48:37]  problem right and it's interesting because a bunch of people were like this is awesome right because now you have the behaviors here and then you could style this button however you want you
[03:48:47]  don't have to worry because like what's the alternative you have like button right and now like like this kind of separation you know people you know quite like on one side
[03:49:05]  the funniest thing for me is when i saw this people who watch my stream uh pretty uh you know for a long time will recognize this um i i i literally saw this
[03:49:22]  and i was just like doesn't this remind you of of this and i i've got some react people in the crowd they know what's up this is what you used to
[03:49:34]  do in next and i was on a stream converting my hacker news app and literally every link i had to go through and like wrap it in a link tag changes to lowercase
[03:49:45]  move the props around and it was so funny because the app was already like written in remix or like some other react flavor thing and it was so easy like the whole app worked
[03:49:56]  everything wired up i just changed like loader to get suicide props i mean it was basically identical except for this one link tag and essentially i spent the whole stream like 20
[03:50:07]  minutes going through because it wasn't because it wasn't easy just to do uh a copy paste operation like even when i tried to optimize it because of the way the props moved
[03:50:17]  and stuff like i literally had to go through handband so i spent like like 20 minutes on stream i was talking and going through stuff i was literally spent the whole stream
[03:50:25]  just converting these stupid link things um in next and literally they made that optional the next week i don't know if i had anything to do with that but like it was like
[03:50:37]  that's when they they they they released it um as i mentioned it was the next thing but like literally the next week they they they they changed this um some people j
[03:50:49] oked that that i was responsible for that but i probably wasn't i don't think i don't think i i'm not i'm not as in with the next people as
[03:50:56]  like someone like theo is but um yeah it's i'm not i'm not saying this is a bad thing it's just because there is a certain thing about separating your
[03:51:07]  behavior like kind of like a headless mentality around this but like you can also do this with render props and i the problem is if you do this with render props it's
[03:51:19]  it's not a nice api because suddenly it's more like you have to do this right and now you have a function and it has some props and then whatever they are
[03:51:35]  and then you have to go like like this so you you've got a bunch of extra boilerplate here and there's a pattern that kensie dodds recommends called
[03:51:46]  prop getters that are kind of similar like this um where you actually give the props like it's actually a getter function and then you like pass arguments to that and stuff
[03:51:58]  but i understand why this is desirable from an api standpoint but it's kind of magical that budding gets upgraded where this is very explicit um but anyways i i didn't
[03:52:13]  come in to necessarily you know pick at that pattern it's just it's interesting when um like like they don't want you to do this so having written a few component
[03:52:40]  libraries clone element is a de facto way for most libraries do it yeah yeah i mean here's the thing i don't think it's no longer for me i think it
[03:52:55]  never was actually the good thing to do it's like one of those patterns that was like never actually good like but like how else are you going to do it and then people
[03:53:04]  are just like okay i did it like i think it's like context originally context existed and people jumped on it unexpectedly and then react like okay actually we should make a context ap
[03:53:14] i this is a real thing this is a real pattern i love that story with context so it's different than this because this is one of those like clearly shouldn't be
[03:53:21]  a good pattern but like context was like we didn't know the best patterns for global state and and then people like okay you could do dependency injection and then use this thing that
[03:53:31]  react kind of hides as a second argument and then that helped actually develop a really good pattern that we have today so sometimes these things coming in are good sometimes not like i
[03:53:44]  feel like clone element existed more as a utility thing and then it got like way overused in a way that the team never really intended you know it's like oh if we
[03:53:52]  have an element we should be able to clone it but yeah so yeah i think i think that's that's good for that one all right making sure i didn't miss
[03:54:12]  anything more in twitch let's keep on going um okay so let's talk about uh i think we're ready let's talk about the rfc okay um you can
[03:54:24]  close down some of these windows that don't matter um for for those who don't know what i'm talking about when i say talk about the rfc um oh no
[03:54:34]  actually i'm not talking about rfc sorry i forgot we saw the cloudflare one one more one more one more one more um if you didn't see this this
[03:54:42]  was a really cool kind of demo um essentially they're using edge worker to worker communication to stream a single app through a single edge where different edge workers render part of the
[03:54:59]  app and then they stitch them together on the server on the edge worker server and then all streaming together to stream out to the the client and the idea is like this could
[03:55:13]  be the future of micro frontends if if you aren't familiar with micro frontends um the uh there's like basically we talked a bit about islands earlier but the thing with
[03:55:32]  micro frontends is it's a way of breaking your app into multiple smaller apps so that teams can work together easier as in deploy author separately without having to coordinate with each
[03:55:44]  other at large companies this becomes prohibitive to be able to like work together on the same pages and parts of the application if you're like all like trying to deploy in your
[03:55:53]  features so this creates separation if this is not something you want i just want straight out there if you're like oh i want that hot new micro frontends architecture no no
[03:56:03]  avoid micro frontends like the plague until you absolutely need them like you'll know when you need them um like micro frontends are are not good it's like adding a bunch
[03:56:17]  of overhead because you have people and people are real things that you have to consider not because of the technology so sometimes it's good for migration maybe but like it's you
[03:56:32]  you know it's like the old web component joke or the astro islands joke of like just because you can put every framework on the page doesn't mean you should put every
[03:56:40]  framework on the page um and i hit micro frontends uh at ebay um when we're working ebay ebay actually avoided micro frontends for the most part except
[03:56:50]  for a few select cases for quite a long time and that's because a multi-page app architecture meant that pages are already mostly separate so other than like sneaking in some ads
[03:57:00]  and a shared global header teams didn't have to overlap too much they just stayed in their page however single page apps hit the crisis with micro frontends much much much sooner because
[03:57:12]  all their code started just kind of like getting into the single repo single bundle single thing and in the early days there were some really cool patterns around micro frontends that were
[03:57:22]  you know pretty good i actually really liked uh i think zolanda had a something called um mosaic and it was like it kind of weaved stuff together in a really
[03:57:32]  smart way but the the thing is like over time we got to like different solutions are very client driven um or at least the way they're used things like module federation
[03:57:48]  from webpack and that's not it's kind of terrible actually i don't know how else to put it when you we don't want to like insult projects or approaches and
[03:57:59]  stuff but like module federation is kind of like conceptually the worst thing i could think of um in terms of um in terms of like performance and and whatnot and what
[03:58:10] 's going on with these pixel art things going on here um i i i i don't know i think we wonder is fine can you can but maybe stop spamming them or
[03:58:28]  i'll have to do something okay um essentially um where was i um the problem is if if you're using the client to stitch together you need this extra architecture on the
[03:58:45]  client actually pulling the code and managing different versions and doing all this stuff and it's just like why are we doing all this in the browser it's basically prohibitive of you
[03:58:54]  trying to do like a server-centric architecture like this was a no-go for ebay don't get me wrong people have been working on module federation on the
[03:59:00]  edge behind on the server side i think it's cool i think maybe doing that as an approach for server is is potential but if you go look at micro frontends and go
[03:59:11]  like how do i use module federation here all the free solutions are like how you can just use a webpack i'll focus on the client side and then if you want
[03:59:17]  on the server you've got to pay someone like it's a paid service so it's kind of like uh okay so if you actually want to do them nicely you actually
[03:59:25]  have to use a paid service it's not technically true perhaps but it's complicated what we ended up doing at ebay was um dylan genius that he is worked on he
[03:59:37] 's like okay i want marco one of the earliest streaming frameworks he's like let's um let me go back up he's like what if we could and then we
[03:59:49]  talk a little bit about this um yeah here we go ebay was able to push them back for a long time because mp is okay the problem is a bunch of
[04:00:01]  teams at ebay started like trying to make their bring in module federation trying to bring in their own solutions and we realized we had the standardized um and what we ended up
[04:00:09]  end up doing is creating this thing called microframe it basically has the i it basically has the i uh the api surface of an iframe and essentially you set the
[04:00:22]  source and then it had a few like these are marco tag versions the this works without marco you could have a non-marco version but essentially you you set
[04:00:32]  the source and then you have this ability to either on the client or on the server stream in html everything community html so you could use that html
[04:00:44]  to pull in javascript assets you can use that html to so you make a stream in a single page app you could stream in whatever the idea is imitate
[04:00:52]  the system of the server essentially and use source and url parameters to basically trigger it and it's funny cloudflare basically came up with almost the exact same solution this is
[04:01:02]  an open source library by the by the way if you want to go check it out and kind of play around with it this is this is a cool way to do server side
[04:01:09]  or client side streaming microfront and stitching without depending on like like you only need to do client side if you include this at in your client bundle otherwise you can work purely
[04:01:21]  server side like this this doesn't lock you into that and it's pretty lightweight and it's it doesn't handle the problem of like different versions of javascript modules and
[04:01:29]  all that stuff that like uh module federation does but it handles the simple part of actually serving a micro front end app and as i said cloudflare did a very similar
[04:01:38]  approach using html as a communication piece between all these fragments and then stitching them together into the stream response to the end user i think this is really cool and they
[04:01:48]  talk about caching the fragments and stuff they uh obviously it was good performance basically they didn't lose they didn't suffer for having micro front ends in the way that most apps
[04:01:58]  suffer for having micro front ends um iframes are are less than ideal um and actually i'm glad you asked uh especially in comparison iframes it offers special advantages
[04:02:17]  control over loading and error states does not break navigation back button does not appear different to different screen readers does not does not cause issues with native browser apis that are sometimes restricted
[04:02:27]  to iframes content can be rendered with the rest of the page no resizing issues flows page content can escape its container for modals performance share single connection with the
[04:02:38]  host does not impact seo iframes receive lower priority than other assets on the page this does not avoids additional window browser context less shared memory avoids boilerplate h
[04:02:47] tml to send fragments caches in both the client and the host so there we go this is why you use this instead of iframes yeah and web components are better
[04:02:58]  than iframes and and we talked about that like i think there's a web component wrapper we do we're talking about using it the only reason web components were a
[04:03:04]  little bit awkward is wouldn't it be freaking sweet if you could get style isolation this way as well like just like instead of having to like worry about that like you've got
[04:03:14]  all these apps with their own css and stuff wouldn't it be sweet if you get style isolation and we're like yes shadow dom here's an actual use case for web
[04:03:21]  components in the shadow dom well as it turns out you can't stream into the shadow dom so yeah we we gave up on that one but uh seriously like for a
[04:03:34]  moment there we were like so excited that we actually found a use for web components um yeah anyway um but yeah um i mean iframes are okay and ebay actually uses
[04:03:57]  iframes for it's like equivalent of party town like we don't have party town part towns like way better but we've been using iframes for isolations
[04:04:06]  for ads and scripts for quite some time but we can do better than iframes hopefully in the future so yeah anyways that seems like the perfect use case for for the
[04:04:25]  shadow dominant didn't work out for us but anyways this this this this was cool they used quick um streaming and i think this is a good demo for them i'm not gonna
[04:04:35]  lie i think there's a like probably a little bit of uh you know friends are friends if for you who don't know igor runs this team at kovler ig
[04:04:44] or was also like the one of the the main maintainers of angular um um and these two guys uh uh mishko and igor are basically neighbors so you know
[04:04:56]  maybe next time we can we can do a cool project with them as well but uh i just wanted to point out there because there's there is there's a bit of conversation
[04:05:08]  here where they're like talking about like capabilities here and they're like we chose quick because blah blah blah blah blah and and and they're talking about like you know we
[04:05:16]  would like to do out of order streaming but like no one supports that and i'm like wait no what do you mean everybody supports not everybody but like a lot of a lot
[04:05:25]  of solutions support out of order streaming um solo does marco does react does um and preact will pretty soon it looks like and quick will soon to be fair it just
[04:05:37]  uh yeah anyways uh this this is a cool article i think these kind of architectures are really cool and i want to see more people working into this um i this as you
[04:05:50]  mentioned should fit with solid and preact and marco and stuff so i would love to to play with this a bit more and maybe you know make a demo myself when
[04:06:00]  i get a chance that's the funny thing right out of order streaming is way easier for like jsx libraries it's actually in order is actually more of a pain because the
[04:06:14]  way the elements and the stuff resolve the reason marco can do in order is they literally built their whole thing that way that their components don't necessarily return like if you think
[04:06:25]  about it like i don't have the playground open anywhere but when you think about like a jsx tree or like a common thing our components return and they pass to the
[04:06:31]  parent and the parent handles the child and it compresses all the way up it's like you create children and then they return return return return right up so it's very hard
[04:06:39]  to do in order in that sense because you're in the middle of that render tree you can break it up with things like suspense but in order essentially works way better if you
[04:06:51]  view your whole app as literally like a routine so you start the first component and you start writing it to a buffer and the next one and next one and you don't
[04:07:00]  actually return anything you just write all the outputs and that's actually how marco's server rendering works it actually compiles it that way i don't know if quick does i
[04:07:07]  saw quick's in order streaming demo um and you could kind of do like in order in a less granular way by like going okay i got to the suspense boundary it's
[04:07:18]  not finished i'm just gonna wait and then not send anything after and then like you can break it that way so i realize i can do in order now if i really want
[04:07:26]  to work at it there's also suspense list which is a way of doing in order but like to actually make super efficient into order it almost you almost want to do like a
[04:07:35]  different architecture kind of like the way marco works yeah that's true and this is something that i've had to wrestle with suspense which is why i think they were looking
[04:07:47]  a bit at those async uh components because then like presumably you can continue where you left off it's not something we could do on the server as well but we'll get
[04:07:55]  to that in a minute um that ultimately the reason that i was okay with that with suspense was the dx approach and like the of actually authoring your app this way is
[04:08:06]  so nice i'm a big fan of the of that with suspense but i i was like looking and i was like doing measurements i was like oh well if solid string rendering is
[04:08:16]  like 10 times faster than reacts then like what's an extra render like that that was that was sort of like where my mind was at i was like in theory i was
[04:08:27]  like one day marco will you know have because of this kind of stuff will have faster performance um considerably on on that and marco 6 i'm actually pretty certain they'll
[04:08:39]  hit that but when i look at the whole spectrum of ssr like there might be gains in other places and i'm not seeing it like i think ssr has
[04:08:47]  so much room to be optimized um but the problem is to what degree does that optimization matter even because we're talking in milliseconds perhaps like single digits so maybe double digits but
[04:08:58]  anyway i i i i think i think this is good okay so let's talk react finally uh let's talk about the the the this whole new rfc so for
[04:09:13]  for for those who don't know what this rfc is um essentially react has created a new rfc that is basically addressing the question of how the hell do i
[04:09:28]  do data loading data data fetching in react in a suspense world and that's a good question it's a question we've been wondering about for like five years now uh
[04:09:45]  like since it's first dropped and i maybe maybe it's four and a half years probably suspense was first dropped at react iceland and i think it was back in 2018 march
[04:09:58]  2018 or something um um and you know we saw lazy and and there's this thought that like okay there's gonna be some mechanism to load data that's what this is
[04:10:12]  made for and it's taken a while to get here and i i think i know why like there's there's good reason for it but i think the coolest thing about this
[04:10:23]  rfc before we even dig into it is simply the fact that people are excited about it and talking about it i am so stoked on that part of it because let
[04:10:33] 's let's face it react 18 came out and people are like what they're like yeah we got the streaming stuff and they're like what like yeah suspense is released like there
[04:10:48] 's this kind of like the waiting all these years for all these features released and then they get released and like nothing happens honestly i haven't felt the hype around react like
[04:11:00]  when hooks were released it was a momentous occasion when they were first announced at that conference and everything up to that point was this huge excitement for the future and i find i
[04:11:12]  find excitement of the future contagious i love it it drives me to create to think and react 18 you know like we knew react 17 wasn't going to be much of anything
[04:11:25]  but but react 18 came out and it was like okay yeah nothing happened and it's because people have been waiting i think for like some kind of semblance like how do i
[04:11:36]  use this thing like what is my data thing so when they saw this use rfc immediately people like gears started turning in they're like they fixed react you know so
[04:11:50]  to speak um and uh yeah i mean i'm quoting theo there um but the funniest thing about this is this this this rfc doesn't actually i mean it gives
[04:12:12]  us a hint for the direction of future and we're going to talk about that but for those people who are like they fixed react let's let's let's live code
[04:12:23]  implement the use hook right here let's let's let's let's do this so function use equals and then we accept a promise p promise i'm going to use any right
[04:12:40]  now we don't really care all right and then throw p okay okay i think i i think i think we're done does this look look right did i make any mistakes i
[04:12:55]  mean it's it's a pretty powerful hook you can see how this one gets around the hook rules um right it doesn't have you stayed in it um so you don't
[04:13:08]  have to worry about the order you can probably put this anywhere um you know and it solves a lot of problems for us right now when you call use the execution stops and
[04:13:27]  uh you know we know what to do yeah i i i'm i'm i'm i'm i i am this is a bit of a parody um i'm i'm
[04:13:40]  not but like it's it's closer to the truth than people than people realize um that that's that's that's that's the thing the problem is when they didn't
[04:13:54]  release an option for how to use the data fetching i this i felt like this was what collectively was going around people like okay suspense is here i want to try it
[04:14:02]  do i just throw a promise somewhere um like like what am i supposed to do here right and as i said yeah and and i think i think everyone's kind of getting in
[04:14:21]  the chat getting into the question here well i mean there's there's a few things you can do with this implementation right because if we have a function that's a component
[04:14:31]  and we're not going to worry about that and then we're like okay because the the problem here is when you look at the um when you look at the example in the
[04:14:45]  rfc and we can pull it up here um let's see an example uh let's not do async await yet we'll get to there we'll see use
[04:14:54]  they're showing this a parallel and i think this is good because in a sense when you await you also end execution at that point but this is the example they give you right
[04:15:04]  and they're trying to show that there's no hook rule i don't really care that there's no hook rule if you've seen my implementation you understand why there's no
[04:15:11]  hook rule um but so we're gonna get rid of this extra thing that doesn't really matter the problem here is um the problem here is what happens if i have count
[04:15:28]  set count equals you state okay we've created a counter right so what what what what what what's going on here well now let's pretend i click i run the component
[04:15:54]  once counts initialize to zero i fetch with my id got the note show the note awesome and then someone clicks the counter button well we go we fetch the same note again
[04:16:12]  wait and and pass a new promise that suspends and and then when it like it's it's actually it's it's it's it's it's you're right the
[04:16:25]  trickiest part about this all is every time i don't even need to put this count in here i just did it to trigger the loop the problem is every time that this
[04:16:33]  runs again we get a new promise and if we get a new promise every time how does it ever stop suspending right like fetch new promise wait for it re rerun
[04:16:46]  the component now that we're done like now that it's fetched get here oh fetch a new promise wait for it like this is an infinite loop isn't it right
[04:16:59]  i i use state as as an example of trying to like demonstrate how you could trigger this but i think it infinite loops by itself without me doing anything so yeah i mean there
[04:17:09] 's an answer to this i'm just pointing out like the actual example which is illustrative is is is awkward because like yeah i mean we know we know the answer to
[04:17:22]  this right i always have to remember to put the dependency arrays and it feels so unnatural um the answer is simple now when we rerun it um it knows that it's the
[04:17:43]  same promise oh it's not guaranteed see my react these days might not like not be perfect okay yeah that's true right yeah but like this is essentially let's pretend for
[04:18:01]  like sake of argument this is our solution well if in the i'm glad that everyone's following along with me here right if you're just going to wrap in a memo
[04:18:17]  shouldn't they just use wrap in a memo yeah i mean from react's perspective this is just going to read in the exact same place like the these these two lines what
[04:18:31]  yeah like now like why didn't you just make this a single thing why why is these two things why are you forcing it now because all this does is cause the components to
[04:18:40]  subscribe i think there's a certain parallel between this and await but the key is that you you're not actually going to use use memo you're going to do this somewhere else
[04:18:48]  or do something slightly different but like this was the dilemma i had when i was designing solid uh to a certain degree because if you you guys seen solid um let me use
[04:18:57]  the tutorial we we we uh sorry solid js we came up with a approach to doing data fetching for um with suspense let's use transition example right you go where is it
[04:19:14]  uh maybe in the child component i have it you you know you you create a resource um and i just passing the function to be convenient this this is this you know just
[04:19:31]  just to be perfectly fair so here's your memo and then call it as a function here's your read so i i i but you see this is tied together i'm
[04:19:47]  i'm yeah right exactly and this yeah sorry uh let's get back here so i'm just kind of showing this here so yeah people to the memo it so as to yeah
[04:20:07]  okay so people are yeah okay that's fine you guys are all on the same page i don't think this thing um but yes until there's a cache api this
[04:20:17]  is this is kind of like not doing much of anything right like if the thing is if your use memo isn't a use memo if your fetch is using some kind of c
[04:20:31] aching mechanism that lives out here instead of use memo like now it's like my cache or something and it's out here like something like react query let's say then then
[04:20:44]  you know we can take our use query and essentially have much better guarantees and actually if this is a react query we move it to this side i think but my my point
[04:21:03]  is for the average developer this rfc changes nothing this isn't the thing to get excited about it but tan stack finally got an answer like okay don't don't this
[04:21:19]  is what you use don't just throw the promise right so yeah i mean we've seen a lot of takes on this right um i actually thought this decoupling was
[04:21:36]  interesting um to be fair uh but uh where am i looking at not there not there i saw there a tweet here prediction use will become react's most often imported hook i
[04:21:51]  hard disagree with this unless like you're counting the fact that like libraries you use commonly will be using this i don't know we'll see i i mean unless the intention is
[04:22:08]  that you go around because they showed a use with use context as well and i'm going to see if you're using this right so i'm going to see what's
[04:22:15]  going to be doing here and i'm going to see what's going on here and i'm going to see what's going on here and i'm going to see what's
[04:22:18]  going on here and i'm going to see what's going on here and i'm going to see what's going on here and i'm going to see what's going on
[04:22:19]  here and i'm going to see what's going on here and i'm going to see what's going on here and i'm going to see what's going on here and
[04:22:20]  i'm going to see what's going on here and i'm going to see what's going on here and i'm going to see what's going on here and i'm
[04:22:22]  going to see what's going on here how should i put it does react query actually want this use here or do they want to put the use on the inside because if
[04:22:28]  they put on the inside it works the same as react query does today because you're already connecting it to that component it's only if you need the read to be portable right
[04:22:40]  like in react doing this doesn't give you any sort of advantage it's just suspense of the boundary when i was thinking about this for solid i was like huh we could
[04:22:50]  put uses and like maybe only use in like subsections and stuff like that like this got my brain thinking a whole bunch of different things but then i'm like yeah you know
[04:22:59]  like this is this is not even half the story so yeah i mean uh jack herrington uh actually had a a great video um if if you want to understand stuff
[04:23:18]  like better than the way i explain it i do suggest um this great video is use reacts next foot gun um i think this is probably one of the best thorough takes on it
[04:23:31]  that's presented in a way that's much more understandable than the way that i talk about things so uh do check that out if you get a chance but this is this is
[04:23:41]  this is this is like the i'm excited about the excitement this shows that the like this shows that react ecosystems like still there like people are they're just waiting you know
[04:23:54]  like they're they're excited they're hyped they're on this you know edge of the chair i was worried that this whole last few years had deflated that too much like
[04:24:02]  that people just wouldn't care like react would be like yeah we got this data fetching thing people like yeah whatever i use remix like like i use loader patterns i don
[04:24:10] 't care about this people seem to actually care about this you know and it's trending like crazy go ask theo his like did they fix react video is like i think he
[04:24:21] 's caught up to his dan abramoff interview that's that's insane you know in terms of like everybody wants to know but the funniest thing is as i said is
[04:24:32]  i don't i don't know if they if they're if they're getting very much i don't know if they're doing anything else i don't know if they
[04:24:43] 're doing anything else i don't know i don't know if they're doing anything else i don't know if they're doing anything else i don't know if they're
[04:24:48]  doing anything else i don't know if they're doing anything else i don't know if they're doing anything else i don't know if i don't know if they're
[04:24:52]  doing anything i just wanted to like really emphasize that for a black box perspective it's you as an end user this is the way you should be thinking about it the cash
[04:25:01]  which will be described in upcoming rfc so in that upcoming rfc we can get excited that's that's kind of where i'm getting at like i'm actually
[04:25:12]  glad that excitement's happening now that's this is good that people are talking about i'm just it's just one of those interesting things where like um you know this this
[04:25:25]  is this is so long i guess in the making that people like okay where is it is it here yet and you don't have to go very far on twitter people are posting
[04:25:37]  about a ton because it's getting really good ratings like this is the perfect way you post about this and people will will you know go crazy on your content um there's
[04:25:49]  only half of it the other half um is the server side of it right um they talk more about motivations but the server side is a lot simpler you just go in my server
[04:26:00]  component 08 db done and the funny thing is when i look at this from an isomorphic standpoint like think of stuff like the way that i think about um react
[04:26:11] ivity and declarative views this hurts my brain i hate the idea of an await in in a component it just seems so wrong like it's not declarative it's not
[04:26:25]  wired it's it's this than that i i i struggle with this one i don't think everyone will and there's actually really good reason to do this as we mentioned earlier
[04:26:35]  re-rendering thing from the top of the suspense boundary is kind of inefficient if you can await and then continue this is actually kind of what you want because then we
[04:26:43]  don't have to re-render the component or the component above it or whatever we can just like continue where you left off so generators are secretly kind of like what we actually
[04:26:52]  want on server rendering in a sense i think because you don't care if that it's interactive there's a reason that await hasn't come out on the client side um it
[04:27:02] 's like innately blocking in syntax and sure suspense will hold a hold a boundary for you but even when you think about stuff like transitions it's just it's just it
[04:27:12] 's just it's not they can probably get there and do some compilation stuff but it's just not congruent with the model of everything synchronizing and updating whereas on the server
[04:27:25]  you don't care about anything but the output so if you get so far and then you continue and you're just gonna go and you do stuff out of order or whatever
[04:27:34]  and then you just get that string at the end you're happy but as i said for me coming as a client-side developer this one sat really weird for me you know
[04:27:43]  like when i'm looking at this i'm just like this just doesn't feel like a component but that's maybe the idea it's a server component so i think the most
[04:27:51]  interesting one about this is whether there's gonna be this split between like i am authoring server components and authoring normal components and to be fair that split kind of happens
[04:28:05]  already um because uh you might want to follow you know like the databases here and stuff like that but it's kind of interesting when you get into that zone of like shared components
[04:28:16]  things that can run on either side and maybe those shouldn't be fetching data anyways but it's just i'm i'm interested to see how this progresses and how people
[04:28:28]  feel about it because if you've been watching this stream so far what solid's been doing so far is literally letting you take the same code and just running it wherever it makes
[04:28:35]  sense this is very much separating it and the interesting thing to me about writing the same code and letting you run it anywhere you care is that in the future things like compil
[04:28:45] ers could be smart enough to like let you write your code a single way and then handle those server client boundaries even better than we do today that's stuff like what mar
[04:28:55] co does and i'm not this is sending us on a path where we're like this is clearly server and it's funny from react who's always been about co-loc
[04:29:07] ation maybe isomorphism is overrated i mean rich harris has been saying that recently that's why he like puts everything in separate files but you can see how this
[04:29:17]  is like very different than what we've been playing with so i'm i'm interested here it feels unnatural but it's possible that they went so far on the co-loc
[04:29:29] ation path that they realized that like it didn't fit naturally with how people thought like maybe isomorphism is overrated but if isomorphism is overrated that makes
[04:29:42]  me question a lot of things um even the two app problem to a certain degree as i said it all comes down to how the shared components are handled because otherwise you are
[04:29:57]  kind of back into um micro version of the two app problem interesting using the like the idea of like responsibility and complexity yeah i i think i think that's i think that's
[04:30:14]  i think that's i think that's the kind of thing that might eventually come to bite this it's it's that kind of thinking it's always hard to tell like early
[04:30:22]  on if that's going to be where it lands but yeah this this this it's going to be some kind of second tier kind of emerging pattern where we actually decide if
[04:30:36]  we like this or not i think yeah yeah i mispronounced that at some point sorry a lot of a lot of syllables here but yeah i mean it's definitely
[04:30:53]  i'm glad the conversation is finally happening right this is this is this is this is where we needed to get to this is a compiler so you just write a weight yeah
[04:31:04]  and if you look at mark i don't know if we shared much with marco six that is what marco six uses a weight instead of use essentially like when i saw
[04:31:15]  this i was like man this reminds me of the work we're doing marco six marco six you just put a weight all over the place and it kind of works and
[04:31:21]  we talked about generators there in compiler when i was reading the compilation stuff i was just like huh they're talking about all the stuff we're working on marco uh so
[04:31:28]  that is a direction i'm just always interested if there's a different direction but yes there is a certain duplication of our our smart dumb components um like we're just
[04:31:43]  talking about here um do we really want that kind of wrapper patterns throughout our api i don't know people were pretty hot on them a couple years ago um it's maybe
[04:31:55]  there's certain scaling considerations there but it's like it's funny because when people are excited about these this what they see is a way to just put all their data fetch
[04:32:05] ing right in their components they're seeing like colocation they're not seeing dumb smart thing because if you're getting into dumb smart things you might as well talk about how you
[04:32:11]  can hoist your data fetching up to the loader anyways if you like believe in the remix stuff like all the nested routing stuff we're doing we we do all
[04:32:17]  the data fetching in the in the at the router level and then inside your components um you just you know use it use the resource um so like i think you you
[04:32:29]  kind of want the hoist that fetching anyways and paralyze it if you want to you know perform it otherwise like if you just put a bunch of awaits in a row
[04:32:38]  well you know what happens when you put a bunch of awaits in a row and if nested components have their own awaits well you're just creating waterfalls on the server maybe
[04:32:45]  they're less costly but like this is why people talk about the foot guts here because you're kind of like kind of pointing people to perhaps doing stupid stuff because async
[04:32:57]  is becoming part of the language right it's it's it's a very interesting idea because most declarative ui libraries are synchronous essentially even if they're async like like
[04:33:10]  the way they resolve stuff you can view them as a synchronous system like a spreadsheet like you change some cell and the other ones you know update and sync and async has
[04:33:17]  caused this challenge which is why we have like loading states and stale states but ultimately what we've been doing is transforming promises into state into synchronous thing and that's how we
[04:33:30]  reason about it it if it's interesting to shift those boundaries and bring the async logic further into our components you know there's always a question of coloration and all that
[04:33:40]  um maybe we don't have to worry about that on the server you know reacts the one calling your async function as i said you can kind of view them more as
[04:33:47]  generators but it's interesting to me like implications of bringing that kind of thinking into your components yeah i mean this is why people have needed this thing i i use query has been
[04:34:13]  pretty nice and in the sense create resource for solid has been really nice like it's it's so funny because when people don't use react query and try to do this
[04:34:25]  stuff themselves it's a big mess and and then you know people come up with different solutions it is it's funny like once you abstract out the data fetching from the component
[04:34:37]  like your life just gets way easier whether it's react query whether it's remix loaders whatever it's whatever so yeah i don't know it's interesting because the part
[04:34:47]  of us wants the stuff to be co-located we want the ability to be like i need this data here and yeah i think i think that's why react query is
[04:34:55]  so popular the the challenge obviously is like we we go through these cycles right because if you go back someone's mentioning xstate in here x8 is super nice right x
[04:35:07] state lets you pull a lot of this uh state stuff out of out of your components and but and in my head all i think of is mbc like i start thinking
[04:35:20]  about like where the model was driving everything back in the day it's a little bit different but like but even like redux and like our early react days are like that
[04:35:28]  we only kind of inverted to this like data fetch where you need a pattern uh around the time graphql and then later react query in a sense that redux pattern or
[04:35:40]  that like pull the model state out xstate and whatnot is the ultimately the most configurable powerful mechanism for doing it but the convenience of of the graphql and the
[04:35:57]  react query so to speak has almost completely eliminated people using redux and i think even when we see this cache api from react it's going to be more in the vein
[04:36:12]  of react query than it is in the vein of redux like nobody wants to deal caching caching is a problem you don't want to mess with like you just
[04:36:22]  like it's like one of the hardest programming problems so if if that can the problem is it's so hard to take away caching from the end user and not given that
[04:36:30]  control because like it's also one of those things where there's like no one size fits all so um this is why it's so hard and this is why the read
[04:36:40]  is separate from the right i struggled with this so hard when i was working on solids resources because solids resources don't have a cache mechanism at least not on the client on the
[04:36:51]  server they technically do because i we do the suspense re-renders but in solid we don't re-render components in the client so we were i guess kind of saved
[04:36:59]  in the sense that i didn't need to implement the cache but the cache layer is not the easiest integration for people who are making like solid query or turbo query and like
[04:37:10]  all those wrappers because um it it requires like a kind of interesting sort of apis to kind of inject it in there because i want everyone to use create resources but it
[04:37:19] 's not as simple as use so to speak um i do feel that if i could separate the cache the use i could make the cache part simpler but every time i circle around
[04:37:31]  it the benefits there from a fine-grained perspective just aren't worth it because we need like we need the reactivity on the use side anyways and once you pull
[04:37:40]  reactivity into the problem um it's kind of a wash you might as well be returning a signal like create resource does so i want to and but people are going to play
[04:37:49]  with this in solid too so you know actually i got i actually got a couple little examples i want to show you related to that um you know as as i said i
[04:37:58]  think it's so awesome that people are looking in into this stuff right like just like think about how everyone's talking about use and how you can use this you know you you
[04:38:07]  know data fetching is is awesome in react now or whatever like i've seen tweets like this stuff it's like the use replace react query that was a funny one but you
[04:38:16]  know it's very different like as i said before when streaming came out with react 18 like even the big proponents like like brian florence was like streaming right
[04:38:26]  obviously remix changed their tune a little after but you go back to like february they had nothing nice to say about streaming um so like this this is very different people are
[04:38:39]  excited about it right so let's let's see an example i was actually i was actually playing with this and i was like what would an async component look like in
[04:38:48]  solid and do i even like this i took um this example of the tabs that we use on the tutorial and i was like okay what can i do how can i go as
[04:38:58] ync and go await fetch content render dom and will this work and yeah it does work this is uh these are actually suspense transitions that's why it doesn't switch until the content
[04:39:10]  loads so we're actually using transitions here with this um and all i did was make this wrap async function again i don't know how to detect nasync function it
[04:39:18] 's actually tricky there's there's certain ways that work for certain function declarations but not all but i i wrote this wrap async function just to kind of like think about
[04:39:27]  okay what did that look like well create resource and put the component in the resource honestly this doesn't actually work properly because when it resumes it doesn't have reactivity we
[04:39:42]  actually can't do this without generators in solid's case um but i just wanted to get a feel for it so i could play it in this silly demo and it i yeah
[04:39:50]  i don't know it's it's it's it's i i think i think i'm just gonna have to look at it a bit more and just decide that like
[04:40:01]  yeah that's just um another example is alexis he's always working on crazy stuff with solid he's like he's like he made a use hook um for solid essentially
[04:40:14]  and all he does is creates a resource so this one actually um does cache um so to speak because he's he's literally just feeding the it doesn't cache but it
[04:40:30]  uses solid's own render mechanisms so like it caches the same way that solids memo caches it's not actually like it's not actually like some external cache it would
[04:40:41]  clear out if it ever re-rendered but yeah here we go use he's like nesting a use in a suspense boundary that's in this counter component um and then
[04:40:51]  he's just wrapping a resource like it's just kind of showing that like yeah i don't know is this is this better i don't know 22 people like this that
[04:41:05] 's the thing i i'm glad that this is spawning uh this is spawning a lot of like conversation and thinking because that's that's where this like we learned so
[04:41:15]  i i don't know it's it's it's it's it's cool stuff so i actually think that async components on the server as much as i hate them would
[04:41:27]  actually have a benefit i need to think all that more um especially because the impact of splitting the apis seems it seems it's something that i'm not stoked about so
[04:41:41]  i'm gonna give a bit of time but that's basically my take on this rfc um sorry it's not particularly creative or new it's just this doesn't
[04:41:53]  really give me enough to work on in any sort of way um it's i'm very interested to see if next js uh you call up next week talks more about this or
[04:42:05]  launches into this because if it does i mean i feel like they will have to provide some replacement for the potential cash thing and it's interesting to me because we talked a
[04:42:23]  bit about um you know is next owning react like if if they did make a move like that it'd feel like it because everyone else just got their rfc last week
[04:42:34]  and then next is like oh yeah and here's our solution like i mean so i i hope that's not the case um but you know i i i i i i
[04:42:43]  don't know i guess we'll see right um so i think as i said keep your eye on hydrogen see if i i'm gonna i'm gonna see what's up with
[04:42:57]  this react our remix preact uh thing and i i'm definitely looking forward to see what's the future is a react and well next and next comp next week so uh
[04:43:08]  that's pretty much this week in javascript all right cool so um yeah let's let's chat a little bit more i i probably do have sushi coming in a little
[04:43:23]  bit but um i think i think we're good on on these topics for the most part uh i'm actually not going to be at next comp uh next week i was
[04:43:37]  i was invited to but unfortunately well it depends it's not unfortunately it just the conferences get booked at the same time i'm going to be in warsaw poland with mich
[04:43:48] iko hevery we're speaking at a js conf in poland next week uh at the same time next conf is going on um i'll be back so we will have
[04:43:56]  a stream next friday and uh then the following week i am in minnesota doing front-end masters and i will miss my friday stream for that um unfortunately that's
[04:44:12]  just uh the way the schedule breaks down and then the week after that um i am going to be doing a stream i believe on wednesday i'm pretty excited about but
[04:44:25]  it's not going to be my usual friday stream uh friday is remembrance day or veterans day which i also have off and spend my family so i'll be taking that
[04:44:33]  one off and then the following week i'm in london with front-end masters uh again and i will be missing stream friday so after next week i will be
[04:44:41]  missing three streams in a row because of all the stuff going but look out for uh a stream on the wednesday um of the week of this of the seventh um so
[04:44:51]  i think it's november 9th i'll try and get us be getting a stream in there um so um yeah i'm looking very forward to that wednesday stream um
[04:45:02]  because it's it's not my normal stream and uh yeah that's pretty much where we're at um i don't know if there's anything else in the chat anything
[04:45:11]  anyone wants to go before i wrap up here but uh let's see how's twitch doing how are you doing all in twitch no new subs if you're on youtube give the
[04:45:22]  thumbs up please um definitely definitely cool stuff we will await you shall not pass uh well what do we got here um well we're not gonna get into functional programming uh stuff
[04:45:51]  but bi-directional lenses does they'll come up often with stores where people are like can i because we we we we focus on keeping that immutable interface so having
[04:46:03]  a way to like codify modifying in the middle is interesting i think one of the challenges is our underlying data model is innately mutating so the expected behavior for me is
[04:46:14]  less clear but if someone's really good at functional programming and want to help me work through that um i think there's a discussion on solid uh about how we can get
[04:46:22]  uh lenses and stores yeah i i think the island server component type stuff it's so so excited i hope everyone uh enjoyed that demo so um yeah okay okay sorry we're
[04:46:39]  look i i have a long way to scroll back but what's the well i i miss that thing what's that live view let's look do we have the live view js
[04:46:47]  hacker news demo can can i can i get that one more time i i i we did we did we did have we do have a moment to to pull that up now
[04:47:05]  yeah like uh problems i can't out of stream yard copy the link so if i can find it maybe is it on youtube or on twitch if i find out twitch i can
[04:47:13]  definitely pull it up um it's on youtube okay live view okay this one's easy live view js dash hn dot clone that's easy okay live view view view js
[04:47:29]  dash hn dash clone htps live view js dash hn dash clone fly dev dot fly dot dev beautiful yeah it's based on quick i can tell by the color
[04:47:55]  coding nice let's do a quick no pun intended look at what we're dealing with here um i'm gonna open a new incognito window again let's do a
[04:48:11]  quick look at what we're dealing with okay so i guess first thing i want to see is i want to understand what html is sent on the document okay let
[04:48:25] 's look at that header nav nav nav nav nav we have our stories beautiful and because there's no hydration i'm gathering we're not going to see a double data problem
[04:48:41]  okay cool all right so we just have the the raw html thanks yeah we're just wrapping up here anyways thanks for joining yeah so we just have our server rendered there
[04:48:57] 's no data for data serialization i'm not seeing much in the way well okay yeah i'm looking for some cool stuff so phx click this is this is our
[04:49:09]  magic here i'm i'm pretty sure quote remove class quote quote quote toggle so that it's encoding some sort of commands as a string into the click special click handler attribute that
[04:49:24]  they're adding here um and that's probably how they do the compression here yeah okay so it's like encoded instructions that something knows how to read so when i do
[04:49:39]  that okay it's refreshing in does anything happen on the network okay nothing that i can see but i don't um trying to think of how i can inspect like is this
[04:50:05]  a web socket thing i'm just i'm just very curious because obviously the source uh let's look at the javascript load so this loads 43 kilobytes right
[04:50:20]  off the bat here for the javascript so it is smaller than like a nuxt or a next or uh remix but it's it's the the the initial load
[04:50:34]  in is definitely a nice chunk of size um but i'm gathering this javascript has nothing to do with the actual uh component code so to speak that looks like it looks
[04:50:48]  like all the instructions are actually encoded into here and then there's some kind of serialized data session that they're using probably for communicating back and forth um but interesting
[04:51:03]  and then this says okay so this is what isn't it okay maybe it's just the the first link that's broken because i'm like is this an mpa because whenever
[04:51:15]  i go to hn it's broken it's just a link there no this this this is this is actually network yeah so i'm yeah it keeps on requesting the fav
[04:51:35]  icon which suggests to me that it's fetching an html page in the background and then it's like parsing it and going oh where's my fav icon um
[04:51:41]  yeah so this this is yeah yeah that's what i'm saying it's it's it's it's got like a turbo thing going on okay yeah so it's like
[04:51:57]  a it's like a turbo thing and actually we can we can see here yeah let's let's let's move back interesting it's actually different it's not it
[04:52:17] 's not swapping it's diffing which is interesting so this yeah this is this element of it is more like server components in that it's actually dipping i'm gonna
[04:52:37]  have to look into this more obviously when i have more time but um this is definitely cool to see i've been i've been curious about this because you're right it's
[04:52:48]  on the authoring side that i'm i'm less clear about um mostly i've been mostly wondering what happens when you want the interaction to be in javascript and
[04:53:01]  like not communicate with the server what that looks like but obviously for a site like this and these basic examples like you are always communicating with the server so like it doesn't matter
[04:53:05]  much anyways yeah more than i could do here but i'm glad i'm glad that we were able to show this and kind of get an idea of some of the of
[04:53:08]  the characteristics of this because after that initial javascript payload like there is no more javascript essentially like get our 43 kilobytes and everything else is communicated over
[04:53:35]  i'm gathering this web socket that i haven't played enough with web sockets to actually see know how to actually inspect what's going on anyway we will pick that up another
[04:53:47]  day it is five to five which is good enough for me so i think i'm gonna call it stream um thank you all for joining thank you everyone who came on twitch and
[04:53:58]  youtube and uh phoenix heartbeat it's good um catch you all um next week when i think i gotta think about it for sure but i think i'm gonna cover
[04:54:13]  making a solid like render with preact i think i think next week's the week that we do that so that might be fun all right till then bye