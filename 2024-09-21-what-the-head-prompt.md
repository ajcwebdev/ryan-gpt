---
showLink: "https://www.youtube.com/watch?v=_EkUCF4HzWg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "What the head?"
description: ""
publishDate: "2024-09-21"
coverImage: "https://i.ytimg.com/vi/_EkUCF4HzWg/maxresdefault.jpg"
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

[00:00:00]  Thank you. Thank you. Thank you. I'm going to try something here. It's a terrible fix, but I don't think it's just
[00:01:34]  the cable. It might actually be the input on the back of my mic. So I'm going to push it up. Sorry, one second. I'm going to mute
[00:01:43] . Yeah, let's try this. Yeah, yeah, yeah. Okay. Okay, we should be better now, right? How long was I muted for? Yeah
[00:02:02] , I don't even know what this looks like on X. I wonder if I can, like, look at myself and do, like, no, probably not.
[00:02:13]  Anyways, give people a minute to get past the Twitch pre-rolls or whatnot. But, yeah, we're trying something new here. Got a bunch of stuff to
[00:02:23]  talk about, which I'm looking forward to. Going to be looking at, as I said, the metadata topic, head tags and whatnot. There was some great conversation
[00:02:38]  with Jose with LiveView and concurrency from client-side frameworks. We also, what else is recent? The Strello demo, you know, the Trellix
[00:02:53]  demo that we released at Solid, which is the latest in a bunch of those demos. Yeah, we'll take a look at a bit of all that today. Yeah,
[00:03:06]  yeah. Yeah, versus the other Ryan. I'm not versus anyone, hopefully. Although sometimes I might come off as versus the React core team. It's funny. I
[00:03:23]  got the premium Twitter, you know, to post that Strello demo, which means suddenly I get these longer reply responses, which is, like, a very dangerous thing to
[00:03:33]  give me because, you know, I'm one of those people who would, like, do, you know, I don't know, like, five, seven, eight
[00:03:40]  chain responses in a row. Something me and, I guess, Dan Abramoff have in common. And now suddenly I can just, like, write a single message
[00:03:48] . But I found even with this new ability I have, it doesn't make communicating sometimes in quick succession on these online platforms any easier. I think there's one
[00:04:01]  point in the middle of the metadata discussion where I was, like, having three separate conversations with three different React core team members. I still feel like we weren't quite
[00:04:12]  understanding each other. So, you know, it is what it is. Also, long replies, don't sign notifications. Yeah. I think there's still benefit when
[00:04:22]  you're going back and forth replies to, like, keep what you're saying relatively short and to the point. See, it was a good thing for me because I do
[00:04:32]  answer long. So, I needed to edit every single reply on Twitter. It made things take a long time. But, like, you don't get my raw thinking
[00:04:42]  there. I very carefully have to restructure everything I say on Twitter so that it fits with the message length. And that's good because if you've read any of
[00:04:51]  my HackMDs, you know I definitely need editing. When I'm not editing, the thing makes no sense. I sometimes feel it, too. Like, sometimes
[00:04:58]  even on my HackMDs, some of my other articles, like, I try really hard to edit it. But, like, I trip – well, it works
[00:05:04]  in multiple ways. I trip people, like, streamers cover my articles, like, Theo up all the time. Like, he reads the sentence. He's just like
[00:05:10]  – you could tell he's just, like, what – in his head he's like, what is this sentence? But even more when I, like, chat on
[00:05:16]  other people's streams and I write stuff, nothing I say makes any sense. So, yeah, anyway. But, yes, now I have premium. Oh, really?
[00:05:35]  That's hilarious. I see – I guess it's because of the tag. I couldn't win. See, I put – I put HTML style things around the word
[00:05:46]  head, and only YouTube said I couldn't do that. The rest of them were, like – just pouring my coconut water. One sec. The rest of them were,
[00:05:55]  like, you know, okay, sure. Twitch was fine. X seemed like it was fine. But now we find out the truth. Sorry. Yeah, the stream
[00:06:10] 's supposed to be called What the Head. I wonder if I can edit it. Yeah, it's probably too late now. Yeah, I mean, grammarly. Just
[00:06:31]  squiggly, squiggly, squiggly. It's like – yeah, it's like TypeScript and being in the playground. Yeah, see, this is crazy,
[00:06:37]  though. Like, this was my hunch. This was my suspicion here. As many of you know, streams generally average about 200 concurrent live people between YouTube and Twitch. I
[00:06:53]  have, like, 4,000 followers on Twitch and, like, 10,000 on YouTube. But X, I have 40,000. So, like, this
[00:07:02]  is just win, right? Like, why wouldn't I, you know – why wouldn't I stream there and go to people where they're at? So, yeah.
[00:07:12]  Anyway, have I wasted enough time getting people to show up yet? Anybody want to ask me a quick question before we get started on one of these topics? As I
[00:07:22]  said, lots of fun stuff today. It's been two weeks. Kind of goes like that. Okay. Yeah. It's funny because, like, I see the title
[00:07:39] . Oh, yeah, yeah. See – let me see here. Okay, I can see my own stream. So, if I present my screen and switch over – yeah
[00:07:46] , give me two sacks. Where are we? See, I'm right here. I can see the title of the stream here. But, huh. Interesting.
[00:07:56]  Oh, well. Probably enough Inception. Yeah. And this is just such a great indicator. What do we got here? What's the drink today? Coconut water
[00:08:19] . What do we got here? Let me – Harmless Harvest coconut water. It's this lovely reddish color because apparently all coconut water is this color. It's
[00:08:33]  pink. Don't worry. It's natural. If you leave pure coconut water alone like we do, varying antioxidant levels can cause a pinking over time. Yeah
[00:08:44] . There we go. We have a – we have a recommendation. Yeah, that's oxidized – yeah, yeah. Not sponsored, yeah. What would I do
[00:09:11]  with real sponsorship? I don't know. Yeah, maybe Twitter thinks that I'm trying to do some kind of script injection or something. Anyway. Okay. Where are we
[00:09:26]  – where are we at today? Yeah, so let's – let's start with the head title thing. Give me two secs. Okay. A lot of you
[00:09:41]  probably think that – that I – like it started with me discovering this tweet or something. It didn't. I've been looking into head management for about – like on
[00:09:55]  and off for about five to six months and I was coming close to, you know, revisiting it. I was working on Solid's 1.9 release and we
[00:10:06]  get a bunch of stuff in, but like none of the features were like, wow, here's something for you, end user. They were kind of like just really good
[00:10:15]  things, you know, fixes, things that have been way too long, stuff like that were better for handling errors around bundling and imports and better error messages. And
[00:10:24]  like tons of really small quality of life improvements, but I mean, you know me, I – you know, when I – when I release something, do a demo,
[00:10:31]  I like, you know, quite often to have something to really showcase what we're doing. It's an important opportunity, right? And I was like, okay, maybe
[00:10:41]  it's time to merge meta tags. So like Alexis had been working on stuff. He made PR back in March and at that time, I had, as you can
[00:10:49]  all imagine, if you've followed me through before, I had HackMD where I had kind of proposed what meta data could look like and – yeah, there it is
[00:11:01] , meta data. Changed seven months ago, just to give you an idea how old this was, but I was – I was playing around with like a couple hooks and
[00:11:06]  then a way of doing generic tags, like use meta data. And I got this basically as – honestly, this was actually really inspired by Svelte because I was
[00:11:20]  looking – I was looking at what we did with Solid Meta and different like head libraries. And then I looked at Svelte and I was like, man, the
[00:11:28]  Svelte solution is so simple if people were accepting of it. They weren't doing any crazy layered de-duping, it looked like. They were literally like
[00:11:38]  just set it as it lies and then for title, we're going to render document.title. Instead of worrying about trying to de-dupe head tags, we
[00:11:48] 're just going to use the document property and that way like it de-dupes anyways. You can't go wrong. Like, I don't know if anyone knows.
[00:11:57]  I hope you do. But if you put the title element on the page like five times, you only end up with one title. The browser only knows what to do
[00:12:05]  with it. And in fact, it's the first one. So if you like start appending more titles, it's only the first one that gets picked up. It
[00:12:11] 's not the last one. It's the first one as far as I've been able to tell. I haven't checked every browser, but this is kind of like the
[00:12:17]  base behavior. So I looked at Svelte and I'm like, wow, if I could just write the title and just be like, I'm done. Like
[00:12:24] , that seems great. If I could just drop a metadata and not have to worry about this cascading rules and stuff like this is amazing. But then I was like
[00:12:33] , are people going to accept this? And I'm like, eh, if I give them a couple simple hooks, they can build their own thing on top of it.
[00:12:42]  And we're, we're kind of good to go the biggest thing that I wanted to make sure was that streaming could be done even better than today. Don't get
[00:12:57]  me wrong. Solid handles streaming with our head library perfectly fine. We don't need a core feature to do this. We already have a core feature. In fact, which
[00:13:04]  lets you inject content in the head. We've had it for quite some time. It's called use assets. No one uses it except for meta framework writers. But
[00:13:14]  what it lets you do, and it's used under the hood in solid meta, it just collects the stuff. Um, and basically at the time of first flush, just
[00:13:22]  inserts it in the head, simple mechanism. Anyone could use it, but I wasn't completely happy with that. And I was kind of wishy washy on this solution
[00:13:35]  because the challenge is if you want to go beyond first flush, you need more stuff. I thought so anyways, I shelved this for a while and started looking at
[00:13:46]  it again recently. And when I looked at it again recently, I saw that reacted suggested JSX elements, which I mean, it's kind of attractive. And if
[00:13:57]  you guys don't know what I'm talking about, we can look at react.dev reference components meta. Beautiful. Here we go. It's under canary right now
[00:14:04] , but you can literally, what they're saying here is I can just make this meta tag here, put it anywhere. And it just ends up in the head. I
[00:14:12]  mean, there's something really nice and simple about that. And I looked at this kind of enviously because I was like, this is okay. The reason I was
[00:14:25]  using data instead of JSX, you know, like native JSX was I was thinking, okay, we don't want to realize these head tags until we do it.
[00:14:32]  Right. You know, you guys know in solid, this generally would be just an actual DOM element. So, you know, you know, you can make a component
[00:14:44]  that returns an object, but generally, if we went here, we'd have to mess with the compilation of native elements, essentially, where it's a little bit different in
[00:14:53]  react because react, um, everything's a create element call. Everything's created one by one. Obviously the trade-offs that it's way slower, but like it
[00:15:04]  does come to benefit here because you can write something as a JSX element and not just a, because you can do this with components in solid or whatnot, but as a
[00:15:15]  lowercase native element and actually attack it like JSON data. So yeah, I was sitting here. I'm like, this is pretty cool. And I was reading the
[00:15:28]  docs because the docs are great here, like big props. They have docs for features that haven't even been fully released yet. This is, this is awesome. And I
[00:15:37]  was reading through and I was like, okay, meta, they don't dedupe. Interesting. Just like Svelte. Okay. That's cool. I was
[00:15:44]  looking at, you know, like, and, and then there's some things like script and style where they were basically only letting one of the same source or href
[00:15:53]  work. And I'm like, this is really appealing because we actually have an open issue right now and solid start about duplication of some of this stuff. And we tried
[00:16:02]  some solutions in Vinci for reference counting and stuff, but didn't work properly in the server. And it's hard for Vinci to step in on the server side.
[00:16:10]  Um, there's a lot of like the Dom is a set amount of API so that you could kind of step out of any framework, you know, use ref,
[00:16:17]  so to speak, create effect, you know, use effect, whatever. And you can kind of like update the Dom directly and just build this layer on top, but getting
[00:16:24]  to people's server rendering in a generic way is a lot harder because what are they outputting? Right. As we talked about last stream, uh, some of the
[00:16:34]  server frameworks, you know, literally just give you strings and it's super fast. Other ones give you a V Dom like react. And then they have to like kind of
[00:16:43]  work through that and turn into a string. I mean, I had a conversation with the web component people, uh, a week or so back, and they were, they
[00:16:53]  were trying to convince me that I wanted the Dom on the server. Yeah. I mean, crazy, but like, uh, like you start seeing the, the,
[00:17:00]  the problem here of like being kind of generalizable on this side, the, the one thing you can generalize, I suppose is in the end, you will be sending
[00:17:09]  an HTML string at some point in the process. It will be an HTML string, but pretty much everything in between is kind of up in the air. And that's
[00:17:27]  cool. Though he made me hack JS meta. That's funny. Cause I bit solid meta library. Like I'm, I, you have an interesting experience. I don
[00:17:40] 't know if everyone gets, ends up with the same level, like the same experience when working on frameworks. I think myself or Rich Harris probably would, but like when you
[00:17:49] 're working on a smaller framework and there aren't the base functionality libraries, you have like two choices. You can like pull it into your framework and be like, okay
[00:17:58] , this is a feature. But sometimes there's like things that you're like, I don't know about. Like, I mean, Rich put the foot down and made
[00:18:05]  a decision on CSS. I can never do that. I was like, I don't feel comfortable enough about CSS to make that decision. Right. Like it seems like every
[00:18:13] , it seems like, like every CSS branch is a religion and everyone, you know, has believers. And it's, it's, it's CSS feels more tribal
[00:18:20]  to me than JavaScript frameworks. If that makes, you know, any sense. So like, I, I, you know, looking at certain levels of problems, I was
[00:18:30]  like, I'm just going to build libraries and ecosystems. So people can get that early days. There's a whole bunch of them that I build over like weekends, you
[00:18:39]  know, like just like really quick. And then never touch them again. solid meta was one of them. Solid style JSX was one of them. Solid, uh
[00:18:46] , style components was another one of them. Like I, I was just building ecosystem style libraries because people had a hard time visualizing it at first. I think solid was
[00:18:57]  different enough from react that people didn't believe you could just basically do everything reacted. It seemed too good to be true. So I had to like show it. So solid
[00:19:05]  meta is not, what's another one? Solid transition group too. solid meta was not based on like some original work by me originally. It was based on, um
[00:19:16] , not react helmet. Um, Oh, it doesn't actually react head. And the funny thing is at the time I wrote a solid meta, the really obvious thing to
[00:19:30]  me is most head libraries didn't even know how to handle async on the server. They expected everything to be, you know, rendered at one time. And then
[00:19:39]  to collect it, not even async context. So you just like say, here's the head thing, run the request, collect all the head elements, write them into
[00:19:47]  the page. That was the classic pattern. So the problem with async is there's the potential of fielding multiple requests at the same time on the server. And
[00:19:55]  you don't want them all to bleed into each other. You can't just make one single singleton and be like, okay, guys, anytime you hit, you know
[00:20:03] , a head tag or whatever, write it to this single thing. And then we'll just flush it when we're done because they can all crisscross. So
[00:20:11]  we had to come up with solutions that were kind of, uh, specific to the request. And that was like the first piece that was missing. That's why if
[00:20:21]  you look at React Helmet, you know, React Helmet itself is still, um, very much sync, I think. And there's a whole separate library.
[00:20:33]  Yeah. So you've rendered a static, render string, render standard mark. They don't mention any of the new stream or whatever APIs. You actually have to use a
[00:20:41]  different library, uh, React Helmet async to, to do this. You have a special place of hate for React Helmet. Uh, I, I,
[00:21:01]  I hope. Yeah. I mean, it's, it's interesting because the thing that hit me when working on, on this library is okay. And let's look at
[00:21:14]  the poll requests for, for solid meta. Okay. Someone wants JSON-LD tags. Yeah. That's a missing feature. We don't have scripts in a solid meta
[00:21:24] . So like that's something probably should be resolved, but the other ones are proposals on how to have different merging logic. One's like, you should use key.
[00:21:34]  One should refactor process meta libraries. Cause originally I took React Heads rules exactly. And said, if meta tags have the same name, they should override, you know
[00:21:44] , but the thing is open graph decided to throw a wrench in it. Like if you go look at the like spec stuff or whatever, they suggest that meta tags should
[00:21:53]  be, you know, have like unique name or property, but they don't, there's nothing in the HTML that enforces it. And to make things more fun,
[00:22:03]  um, as I said, open graph almost like encourages it, you know? So we get into this weird place where making certain types of assumptions are pretty bad. And
[00:22:16]  I started, as I said, I looked at all these different solutions and I started like seeing patterns and inconsistencies. And I was like, man, this is
[00:22:26]  a mess because I haven't got to the last piece of the, of the, of the, of the pros, but I suggested it. I, I want to be
[00:22:34]  able to seamlessly handle head tags after the first flush of the stream. Now, I don't know how familiar you guys all with streaming. Um, it's kind of
[00:22:45]  funny cause I was watching Theo stream on Wednesday and, um, I, I caught a bit of it after the fact. Um, and he actually covered the whole conversation and
[00:22:55]  drama and everything that, that I'm talking about right now. And I was like, wow, that was quick. I didn't even think it was a drama. Um
[00:23:00] , you know, but the one thing that became kind of clear is as I, as I kind of was watching, so I'm not actually sure how, and Theo's
[00:23:09]  told me this before. Nobody actually understands streaming. So I think, I, I, I think it's important for the context of the conversation because when different solutions say
[00:23:25]  they support streaming, they can mean a variety of different things. And I think this is what, where the trigger was when I said streaming, I wasn't thinking just first
[00:23:34]  flush. And when the react team goes and answers everyone and said, we did this to support streaming. They, they actually are talking about just first flush. And when
[00:23:43]  Tanner was like going crazy about how hard it is to work with it, with streaming, he was talking about also not just first flush. So, um, I think maybe
[00:23:56]  we should start by actually talking about what the, like the fundamental challenge here, right. Um, because the gist of this whole thing was reacts Meta's GS
[00:24:12] X style tag solution doesn't actually do any kind of D duping except for like, um, it's more like it doesn't do overrides. D d
[00:24:24] uping is what we call it, but it's not really d duping. It's like, because like, if like, it does D duping
[00:24:30]  of things with the same attributes. Right. Right. But it doesn't, um, it doesn't let you like put two titles and then Barbie the winner. All
[00:24:40]  right. I'm familiar with HTML streaming in terms of transfer encoded challenge to in no out of our stream, but what is first flush? Yeah. Okay. Yeah.
[00:24:50]  When I'm talking about first flush, I mean that you have, there's a, there's the time, uh, maybe we should, uh, Exceldra
[00:25:01] , um, Exceldra for a moment. Which one was this one? This was, uh, talking about why server rendering is still beneficial. Okay. Yeah. Let
[00:25:12] 's, let's, let's get in here for a moment. Like, I mean, you can even see it for, for here on in here, but, but
[00:25:20]  yeah, let's, let's zoom in. Um, Do, do, do, do, do. I don't know. I'm just going to pick a
[00:25:28]  drawing here. Um, Wow. I don't know if I'm supposed to believe Twitter's numbers, but this is the most people who have ever watched simultaneously, um,
[00:25:38]  live stream any of my streams so far. So that's pretty cool. I've been streaming for three years. I base, we had our hundredth live stream. I
[00:25:48]  forgot to announce it or make a thing out of it two streams ago, which is almost exactly like the three year mark when I started streaming. Um, I, so
[00:25:59]  yeah. Yeah. Maybe that's what it does. But the funny thing is in stream yard, I'm seeing 560 concurrent between all the platforms. So I don't
[00:26:12]  know if, if, if Twitter is just telling stream yard and just upping the number and stream yards getting that total come in, but whatever. Yeah, exactly.
[00:26:26]  So it, it's just a counter. It makes you feel good as you're, as you're going. You just like keep on seeing the numbers go up. You
[00:26:31] 're just like, Uh, yeah, yeah. Actually, let's just check Twitch for a second. See if I can, uh, give any shout outs. Cause Twitch
[00:26:40]  is where a lot of the cooler other stuff is going on. Let's see what we got here. Thank you Remirth, uh, for the prime sub.
[00:26:46]  All right. Let's, let's, let's, let's go with it. Let's, let's, let's, let's just concur for the feel good
[00:26:54] . Yeah. Okay. Like fundamentally speaking, you come in from your, your, uh, uh, whatever. Let's, let's just do this browser server.
[00:27:16]  You come in very first thing you do, you make a request asking for the page, right? You know, slash some page. Okay. And then server responds,
[00:27:36]  um, with HTML before loading everything else. And what we call, what I call first flush generically is whenever this first response is, because when you're streaming it
[00:27:48] 's instead of being one response, it's like from, it's like multiple responses coming from, from that point of time. Right. Essentially you have the single request and
[00:28:00]  then you have multiple responses. The first flush is the first response. And why the first flush is important is because there's certain things that you don't get to change
[00:28:11]  after the fact, um, statuses like your status code. Like, um, if, is it a 200 or is it a 404? You don't get to
[00:28:19]  change that after the fact. Raid. What kind of raid do we have? Oh, oh, it's, here we go. It's, it's Dax
[00:28:33] , I think. Right. Did we get Dax? Yes. We got Dax with a party 129. Awesome. Yeah. Um, just talking about streaming.
[00:28:42]  Yeah. Flushing is important, you know? How did everything go for you all today? You guys are making Cloudflare faster or something? Nice. Made Cloudfl
[00:29:03] are faster. It's official. All right. All right. So yeah, there's important things. And one of the classic things, if you, if you don
[00:29:16] 't consider things like out of border streaming is, you know, your head tag in your document, it tends to come in that first flush. So all your, you know
[00:29:25] , metadata and stuff comes in that first flush, generally speaking. The, the, the challenge though, is you, I mean, if you forget about streaming for a
[00:29:37]  second, one thing you could do is load all your data. Right? Like the gap here could be, you know, you could have, I don't know,
[00:29:49]  pick another color over here. I'm just gonna, you know, I'm just gonna put our database over here or whatever. Like it, it could just be,
[00:30:05]  you know, this going on and that's why you have the gap. The reason you stream is because if you got a lot of this going on. You don
[00:30:18] 't want to delay this on the slowest one of these, it's like a, it becomes a math, like a, a, a statistical problem. Like there
[00:30:35] 's like nice UX aspects of streaming, you know, when you have importance, a varying importance of data or latency. But like, for the most part, I think the
[00:30:49]  biggest benefit of the streaming thing is simply the fact of like, you talk to 10, 15 services, you know, you don't want to be as slow as your slow
[00:30:58] est service. It just propagates it all the way along the line. And you can see that like, it's like the long tail on it. Like there's
[00:31:06] , it's very simple math. Um, you can do, but you know how, like when you're doing percentage math and you multiply it and then it, you know
[00:31:15] , and I guess it's the inverse, like one minus the inverse. Basically each service that you add, each different connection that you're making on the backend that could cause
[00:31:28]  latency. Like it has a profound effect on the overall average latency of your whole request. Anyway. Yeah. Yeah. Yeah. No, that's, that's perfectly
[00:31:47]  fair. So what I'm getting at is there's an argument to be said that we should, we shouldn't flush the page until like the first flush until the core
[00:32:05]  part of the page is done. See, cause you can picture if you flush too soon, um, you might not have anything relevant to show the user. So you
[00:32:14] 're just showing them intermediate loading state. Um, an example of that would be like one of my solid start hacker news demos. I make tons of them. Um,
[00:32:24]  of course that's way too fast for you to see, but if I tried to like really slow down the network somehow. Uh, please still using, um, we
[00:32:38] 're not, maybe, maybe I need a, uh, something with lots of stories in it, this one. And then we'll refresh on it. Let's refresh on
[00:32:48]  it and see it streaming. Yeah. See, okay, you saw, honestly, it's quite possible that that version isn't really worth it. Cause you're barely
[00:33:02]  showing the page. It's arguable. Maybe I should have waited for the primary content. There's, there's better examples where you can actually show primary content and then
[00:33:09] , you know, have con, uh, stuff layer, uh, come in later. Um, what's, what's that silly demo? Uh, the next guys had
[00:33:15]  it. I was, I also made a version of it streaming storefront Netlify app. Yeah. Yeah. Everyone knows what I'm talking about. Yeah.
[00:33:24]  Yeah. Right. Um, let me see if I can refresh on this. Problem is it's hard to, it's sometimes hard to see it with the problem with network
[00:33:43]  simulation is the, the way that like tools like lighthouse and like Chrome do it is they kind of like put a, like a, just like a wall on it and
[00:33:52]  then make everything hit that wall instead of like actually simulating on a per, like in a, in a more realistic way, which means that it's sometimes actually hard to
[00:34:01]  see the effects and benefits of these, these kinds of throttlings through simulated 3g or whatnot. Um, that's a whole other story. I think we did a
[00:34:08]  stream on that a couple of years ago. Um, but like, honestly, just go look at Guilamo's, uh, tweets on, uh, about P
[00:34:20] PR on, um, on X half of them where he's like, you know, no loading spinners, like all of those things. They, it's, it
[00:34:28] 's, it's literally the difference between deciding whether to hold the stream or not hold the stream. Obviously when you pre-render something, you don't have to wait
[00:34:37] , right? If we go back to our scholar draw, there's none of this, you've already grabbed it, but mechanically, um, if you know, you
[00:34:45]  didn't pre-render with PPR, but just like had the data sitting there ready, maybe in a KV or something, it's like exactly the same effect.
[00:34:54]  It comes down to like whether you stream back immediately with the loading indicator and have the content swap in or whether it's just there in that first flush. Could you delayed
[00:35:03]  it? But sometimes like that decision is dynamic based on the, you know, the availability of the data, the design of your website, a whole bunch of factors. So
[00:35:15]  the one thing that I I've been struggling with a bit is if you need to put the title in the head, right. And that's happens at the first flush
[00:35:28] . Does that mean that anything that can impact the title? Um, Theo actually had a funny example, I think on Twitch that he showed. Um, if I go to
[00:35:40]  my, my, my page, I, I'm probably not the same because my slug, where is it? Okay. Ryan solid seven. Is it when I
[00:35:56]  refresh Twitch? Okay. Yeah. Mine's not a good example. Theo was a good example. Cause he had capital letters in his name. Let me see if I can
[00:36:04] . Let's see if I can actually. Yes. Yeah. See Theo capital T Theo. Right. If I refer. If I refresh this page here and we're looking
[00:36:18]  at the top corner here, we see capital T Theo, I think he said that he had lowercase and it went to uppercase. Basically the title was changing
[00:36:25]  dynamically as it came in because at the time, the page load, they only know his slug. They don't know his actual name. And then as the rest of
[00:36:32]  the page loads and you get more information, like the Lotus profile, they actually updating, okay, his name's T. And then finally, when the notifications load,
[00:36:40]  they add the, uh, the, the, the, you know, my notification count beside this tab. So what I'm getting at here is you can obviously do a
[00:36:52]  bunch of these title additions in the client after the fact, but that means that you have to wait for all of the hydration to have happened or like, like the code
[00:37:01]  be on, on the, on the client. By that point, one of the coolest things about these streaming solutions, which is, it might not be obvious to people is
[00:37:09]  if while streaming doesn't work or out of order streaming doesn't work. If JavaScript's turned off. I could return, remove the solid or react script tag that loads it
[00:37:23]  from the page and streaming still works. It's not tied to the framework. We want to be able to show the content as soon as possible, regardless of if hydration
[00:37:31]  has happened. This streaming mechanism is works by essentially appending script tags to the bottom of the page that give instructions that pass in data and pass in, um, there's
[00:37:47]  code here. You'll see get document element ID, find the placeholder, grab it, remove all the siblings and replace it with the new content. Like we actually
[00:37:57]  write scripts that actually move. HTML that we, uh, added to the bottom of the page and slide it into place. That's how it works after the first flush.
[00:38:08]  We just keep on appending HTML to the document as we stream, but. It gets into place the way like this get, you know, I'm going to,
[00:38:19]  I'm going to turn off the silly fake throttling so we can see it actually better on this one. Because this one has fake throttling on the data level
[00:38:26] . What you're going to see when I refresh the page is when we first load it. This isn't. It happens too fast. Why are we always too fast?
[00:38:33]  Okay. So yeah. See how products for you is kind of flickering in streaming in. If I flip down here, uh, it's hard to see. There
[00:38:43] 's no footer on this page, but my point is that this HTML that replaces this loading placeholder is actually, um, just appended and then we have a script
[00:38:55]  tag. So if solid never loaded on this page, we would still have this same loading effect coming in. And if I, my thinking is if I wanted to handle
[00:39:08]  proper streaming of stuff like title and metadata, it should work the same way. Sure. I've already flushed the head, but if we discover a title further down,
[00:39:18]  that depends on some async data, maybe to get Theo's name, we should be able to stream it up into the page, regardless of if the framework has loaded
[00:39:28]  or hydrated or done anything yet. That's my premise here because otherwise the, the, the recommendation is make sure you load Theo before you show the user anything. If it
[00:39:40] 's yourself, that's not a big deal. You know, you off, you load yourself, but I'm not Theo. I'm looking at Theo's page.
[00:39:49]  Why like every time I hit the server, I don't load Theo. So why like, it doesn't make sense, you know, for this to be something that I
[00:39:59]  would have, you know, preloaded or had a really steady state. Should the user wait before sending anything? I don't know. It depends on you, your
[00:40:10]  X or D, um, you know, but like I was looking around, right? I was looking at different things like, uh, you know, static metadata.
[00:40:18]  That's easy. Dynamic metadata to generate. Like there's great solutions and all these things. Um, good to know. Both static and dynamic data through generate metadata are only
[00:40:26]  supported in server components. Okay. Fetch requests are automatically memorized, blah, blah, blah. Next.js will wait for data fetching inside generated metadata to complete before
[00:40:34]  streaming UI to the client. This guarantees the first part of the stream response includes head tags. This is good. Because without it, it'd be kind of, I
[00:40:44]  mean, you don't even know what you'd get, right? Depending on like when it decides the stream, you might get some of the head stuff you might not.
[00:40:54]  So they wait, but the tricky part is they always wait, right? Like it's like basically saying like, okay, I need Theo here. Like I need to
[00:41:06]  load this for the title. I'm never going to respond. No cases unless all the stuff I need for the metadata. And honestly, this has been the common recommendation
[00:41:18]  of libraries. Right. Um, uh, you know, remix suggests the exact same thing, but it's okay. Right. It's, it's a reasonable constraint
[00:41:34] , but it was one where I was like, okay. I thought when I saw the react APIs here being at an element level, so you can understand how next does this
[00:41:44] , they hoist all the data fetching from the router. When you export something special on a, on a page next goes, okay, you're going to this route
[00:41:52] . I know you need this, this, and this, they just grab those exports. But this API has no such thing. You can literally hope you can hold it
[00:42:02]  wrong relatively easily. Right. Cause you can just put this under a suspense boundary, have it a weight on some async data and it will happen after first flush. Right
[00:42:14] . Which is, as I said, you instruct people in the sense, solid meta is like this today is too. Where, you know, if we miss it, it
[00:42:24]  will, uh, it won't get server rendered. And then when the client hydrates, we'll kind of fix it along. Okay. Tansac start.
[00:42:38]  I'm almost guaranteeing. Is doing what next or remix is doing, because this is not something you can solve in user land. I'm hoping you're starting to see
[00:42:49]  the picture where, where I'm getting to. Well, I mean, you can solve it in user land, but if you want to understand how to solve it in user
[00:42:57]  land, you have to understand why Tanner was so upset when he found out about, about this stuff. So we'll get there in a, in a second. Yeah
[00:43:07] . Yeah. You can out of order stream without JS and really, really trivial cases. The problem is, um, and I looked into this cause honestly, I would love
[00:43:14]  to out of order stream without JS. Um, but this is using the shadow of Dom trick, right? Um, like the declarative shadow Dom trick. Let me
[00:43:23]  quickly grab this off Twitch. so I can see what you're, what you're getting at. Um, yeah, this is just the demo though. Right. It
[00:43:39] 's showing, it's showing stuff coming in, you know, in random orders. The, the, the, the, the, the challenge is that the way the
[00:43:51]  shadow Dom works, um, is like, um, it's a, it has a slotting mechanism. So you can define where like these components are and where the slots
[00:44:03]  are, but the elements that get slotted in have to come in at the same level as the, um, as where those components are like the same level in the hierarchy
[00:44:18] . So if you have a bunch of things that are like stream, then stream, then stream, then stream. And you just make your shadow Dom, uh, declare a
[00:44:27]  shadow Dom container at say document body level. And you just keep on appending, you know, to the body and they'll, they'll slide in like this, but
[00:44:36] . It becomes much more difficult. And actually I don't think really feasible if you actually nest stuff, like you have a suspense boundary and you draw some stuff and you
[00:44:44]  have a suspense in the suspense. This, this happens all the time with hierarchical UIs. And then this mechanism actually doesn't work because while you're nesting those
[00:44:53]  slots, so to speak, you're only going to be streaming to that top level, the same level as the body. So they don't see each other. I was
[00:45:00]  a little bit disappointed how much of a complete miss this was, but it is still a cool feature regardless. Anyway. No, I mean, remix is doing what something
[00:45:29]  very similar to what next is. It's there's slight differences. And if you guys really want to get into the differences, we can talk about that in a minute,
[00:45:35]  but it's the same idea of having route level groupings. Um, and then with the ability, see this one's using parent to merge from the parent level.
[00:45:45]  So you have complete control of how the merging happens. Okay. You got the blog post, but yeah. Yeah. I I'm very familiar with this. As I
[00:45:54]  said, unfortunately it's useless for frameworks, but it is a very cool demo. Like HTMX is no JS. No, this mechanism is, is literally no JS
[00:46:07] . It's using declarative shadow DOM, um, which is a template thing. It's miraculous to like, when you look at it and you're like, this is
[00:46:15]  so cool. If it were actually useful, it would be like one of the coolest things that come out from the spec side in a while. Um, it's like
[00:46:24] , you know what, I'm going to pull up the blog post just for two seconds. Cause I bet you it actually, like, I can, I'll, I
[00:46:30] 'll be able to actually, uh, sorry. Uh, I'll be able to actually see the, the issue like in the article, if I, if they show any
[00:46:40]  code, I can like better explain it. Okay. Right. Shadow root, shadow root has slots. They have name slots perhaps. And then you define what a slot
[00:46:58]  is. Um, see this one's outside of the shadow roots. The shadow root owns all of this, right? And then outside of the shadow root, but at the
[00:47:06]  same level, there are elements. And anytime we find, um, a slot with that name, this will automatically. Get kind of like virtually inserted where this, the
[00:47:20]  slot of that name is now, the tricky part about this, like this isn't, it's actually not hard to write code for it because it's literally a template element
[00:47:29] . And then the slot looks like this and the way HTML works is. If we don't have this div tag, it's smart enough to auto heal and automatically close
[00:47:39] . So you can just keep on appending stuff and not close the document, not even close this div and get stuff rendered on your page. Um, but the challenge that
[00:47:48]  I said is first of all, now this template has to basically be the top of your app because you're going to be just streaming stuff to the end here. And
[00:47:55]  this doesn't work well. If you have a template inside a slot, like what will often happen with these things is you'll actually, um, you'll actually have sl
[00:48:08] otted content that inside that slot will have more templates, which then have to get future, um, streamed updates that are getting appended down here, not inside here
[00:48:20] . Uh, yeah, anyway. Hopefully that makes sense. Sorry. I hope I didn't go too far down the rabbit hole. I think you can nest DS, uh
[00:48:40] , to declare a shadow doms. I'm pretty sure you should be able to let me think. Is there any reason why you wouldn't be able to, because
[00:48:48]  you can definitely make elements with shadow doms inside other elements that have shadow doms. So yes, I believe you, I, unless there's like an additional restraint,
[00:49:00]  I don't see why you wouldn't be able to. Yeah. I mean, I stream like five hours almost every week. I'm, if the problem, I
[00:49:15] 'm hoping my explanations work, but I think what we'll find with an editor is a lot of times, um, I'm not the best person at explaining stuff. I
[00:49:25] 'm kind of hoping that somebody who watches a stream will come in and actually do like a proper video. Like, I'm always amazed how Theo can just kind of like stop
[00:49:34]  and just like, okay, I'm in video mode and just record videos like that. I mean, it takes a little bit of prep. I think I don't
[00:49:40]  like being prepared. It takes too much work. Editing takes too much work. Everything takes too much work, but I'm glad you guys are here to listen and chat
[00:49:46]  with me because you know what? I learned stuff from talking to you. So, um, yeah. Okay. So. Streaming is tricky to say the least.
[00:50:03]  Right. Um, and it's, it is a stance to say, we're going to just block everything. That's kind of like the only choice you have.
[00:50:12]  I mean, other than that, how do you inter set the stream and put stuff in? Right. Well, you could use the same trick that, um, we do
[00:50:22]  with, uh, suspense. When I was showing how we were, you know, putting script tags to, to insert elements, we could use script tags to update the
[00:50:33]  head as we're streaming. And that's something that I, that's something that I've, I've been, you know, thinking a lot about and, um,
[00:50:43]  like you need a mechanism that supported this core. Otherwise the developer would have to like go in and take the render stream and then get the stream output and inspect itself and be
[00:50:53]  like, okay, what's in the stream? Oh, here's like a head tag. Let's take it out and do this. Like you, you, you
[00:51:00]  basically have to do a bunch of hijacking of the streams. So don't like, don't get me wrong. React. So we also have ways that you can,
[00:51:05]  you know, get yourself in the middle of the stream, but that's also the place I don't think anyone ever wants to be. So yeah, when it means to
[00:51:15]  support streaming probably means a lot of different things for a lot of different libraries. Still. I like, I feel the tension here, right? Um, because I,
[00:51:29]  I showed you guys solid meta meta. What we're actually missing here is I merged one of these proposals. I was wrong to probably. So solid meta worked one way.
[00:51:40]  Someone said, Hey, I have duplicate open graphs tabs, the tags and asked me to change it. I'm like, I guess this sounds reasonable. So I merged
[00:51:49]  it. And then that triggered this because people like, oh, this broke, you know, this broke what I wanted to do with it. I think deduping should
[00:51:59]  look like this. And then the original person who did the other one was like, no, I think I can make deduping handle both our cases with this. It
[00:52:04]  is a mess. Like trying to tell people how stuff should dedupe automatically is not unlike telling people that they should use tailwind versus, uh, style components.
[00:52:16]  I mean, people should probably never use style components, but like I picked something that's actually good versus something else. That's actually arguably good. Um, like
[00:52:26]  I, this, this, it's, this is, this is, this is something, um, that as a framework author or library author look low level, I don
[00:52:39] 't want to step in. I've, I've, I have enough experience just having a separate library, having this problem. But if we're streaming. Essentially, like
[00:52:52]  if we open up the ability to control the streaming and it really native way where you could just put the tags on the page, like the way react is proposing and you
[00:53:00] 're streaming it, you have to have a way to be like, oh, this scripts replace this script. Cause if you don't have that mechanism in the core, the
[00:53:14]  only thing you could ever do is append. Like you need a, you need some kind of mechanism that's exposed to the end user. Even if you say that you
[00:53:24]  can't make any decisions here, like you're like, I don't want to determine deduping for you. You can't just go, I'll leave it to
[00:53:34]  user land. User land can't actually solve this problem. Like what, like, like if, if, if you, you know, if for some reason like title
[00:53:48] , you want to make it so there's only one title and you can put multiple on the page so you can simulate this, you know, Theo, then Theo, then
[00:53:54]  Theo and notification situation all with streaming. If the core mechanism that you're given doesn't give you a way to do that deduping, you know, be able to
[00:54:04]  flush in, you know, update title, remove title, like whatever type code. Your only option like on the client. Yeah. Sure. You can just go build
[00:54:14]  something. Cause you can interface with a dom directly, but on the server, all you can do is like try and parse the stream as it's coming and doing stuff.
[00:54:25]  unless it's built in. So what I'm getting at is maybe it is fine to always wait. That is a fine decision to make. But if the idea is
[00:54:34]  that you don't have to always wait, the mechanism to be able to do some sort of deduping, even if you don't think it should be the thing has
[00:54:45]  to be built into the core. that's basically the, the, the whole logic here. So you're basically, you're forced to pick a side where all sides
[00:55:00]  seem reasonable. Yeah. So like, yeah, I mean, this is not, this is not a fun place to be. Uh, um, let me, let
[00:55:12]  me, can I go back to Twitter for a second? Right. Cause let's, let's, let's, let's, let's look at a bit of the
[00:55:18]  conversation. Can I get some context? Cause some meditates at multiple instances. The last one is fine. Also don't be intentional. Yeah. So, I mean,
[00:55:29]  when I read this from Ryan Florence, I'm like, okay, it's cause they're remixed. They have their own solution. Right. So who cares? Right
[00:55:36] . So we'll get back to Ryan Florence in a minute. I wish browsers did this automatically. I think we all kind of do. What else do we got here
[00:55:45] ? Uh, before we get to Sophie who had a, actually a very good reply. Um, we do dedupe identical link, blah, blah, blah. Yeah
[00:55:55] . So I'll combine this. With Sophie react could dedupe, but it's not obvious which one should win. Maybe if there was one deepest one, but what
[00:56:06]  if they're two equal depth? Okay. Okay. So yeah, let's get to the problem with deduping deduping. The reason we don't want
[00:56:13]  to touch with him football is it's, it's fundamentally broken. Like it just, it doesn't actually work in a sensible way. Like I, I, I
[00:56:29] , I, I, I get this, this happens sometimes as a framework author, you build something and you're like, okay. And then you find a hard problem and
[00:56:38]  you're like, I don't think there's a general solution for this. So you kind of leave it. You're kind of like, okay. Um, we
[00:56:45] 'll let users kind of figure out what makes sense for them. And it's far enough outside of our realm that we don't care. And then the users make the solution
[00:56:53]  and you're like, God, this is terrible. And you're like, yep, but they're allowed to make terrible decisions. We're just going to let them
[00:57:02]  do it. And, uh, you know, maybe give some guidance, you know, but I, you understand that everyone's apps different and everyone has their own needs
[00:57:13]  and you, it's very hard to be too prescriptive here. And then you get a little further around and you're like, I need to add the, you
[00:57:19]  know, feature B like this other feature. And you look at what the user did and you're like, yeah, that's not really in line with our thinking and really
[00:57:27]  with the philosophy of the library framework we're building. It doesn't make sense to ever approach the problem like this. Let's see if we can give them a gentle
[00:57:34]  nudge in the, in the, what we consider the right direction. And then, um, you know, sometimes you get even further online where you're like, we
[00:57:42]  actually, in order to do these other features, we have to just take ownership of this thing at this point. That's the only really way to make everything just keep working
[00:57:51]  properly, you know? And then you're like, yeah, you look at user space and you're like, yeah, those solutions are just terrible. But the problem
[00:58:02]  is users have been doing it this way for the last five, 10 years. So you're like, you're in like this place where people it's expectation of how things
[00:58:09]  should work. Um, versus like what, you know, kind of makes sense from a design standpoint. And I think this is one of the things that I really like about
[00:58:20]  react and react core team members and that and what, you know, kind of integrity there is that is they generally don't make stuff because people will like it. I
[00:58:29]  have a huge amount of respect for that. That's not why we make stuff. We, I, I, I make stuff because it will make people successful, whether
[00:58:39]  they like it or not, whether it will give them powerful tools. And that's something that I think share with the react core team. And I have a huge amount of
[00:58:47]  respect for. I, I'm always wary of solutions that are kind of like, yeah, yeah, we can do that. Yeah, we can do that. You
[00:58:52]  know, like, you know, oh, we want this feature, bring it in core and just keep on doing that. Cause like at some point it won't be sustainable
[00:59:00] . They're bringing a bunch of work on themselves. Maybe, you know, they'll grow at a rate that they can keep on top of that. But it's like
[00:59:06] , at some point, the being too opinionated will impact, you know, feature C, which we haven't got to yet. So it's very dangerous to, to
[00:59:16]  go out the door with the intent of satisfying people. Um, and so from this perspective, like react comes in, looks at the space. Probably. I don't
[00:59:27]  know how much they look. I, I, I, I, I imagine they look at least in the react zone of the space. I, I, knowing the amount
[00:59:32]  of research I do, I assume that they do a decent amount of research and, um, and go like, yeah. Okay. Like, and, and kind of just
[00:59:43]  determine not based on like what everyone thinks, how things should work necessarily, but what makes sense to work with the way the framework works. That takes guts. That takes
[00:59:54] , you know, vision. And that's why I, you know, have a, you know, huge respect for react. On the other hand, sometimes that ship
[01:00:10]  sailed. So it's, it's, it's an interesting tension. easiest, longest title wins. Yeah. He inspired me to give me the exact, um,
[01:00:37]  example. Uh, I didn't expect him to cover this so soon. Like this, you know, um, anyway. The truth is what this whole talking about depth
[01:00:52]  and stuff is like, if you can very easily. Let's go back to our, like example here. What if this is under like a ternary based on some
[01:01:02]  other state, or what if this one is the top one is under a ternary based on some other state. So you go render the page. It's not
[01:01:08]  rendered. Then this one's rendered. And then something changes. And now this one's rendered. Like who, who wins? Is it based on hierarchy? Who's the
[01:01:14]  tallest? That's actually not always good. Because if you've ever played around with depth first or, um, algorithms and stuff, you know, that like siblings of that
[01:01:23]  start on the same depth, but then like, like you're not guaranteed to have a reasonable order from it. Um, and they could be actually just straight siblings.
[01:01:33]  And you just, depending on what's async, something async loaded before something parallel async, you know, it loads A than B one time loads B than A
[01:01:44]  and you get different stuff. Yeah. We'll, we'll talk about on J on head in the, in the, in the, in, in a minute.
[01:01:55]  Unhead has like, this is a, this is an interesting point because it gets into stuff like philosophy. I just told you how much myself. And because of that,
[01:02:06]  uh, I respect reacts philosophy and how much like I align with them. Generally speaking. Um, I get where they're coming from. Unhead is very view.
[01:02:17]  I don't, I know. It's so funny when I talk to people in the NJS ecosystem, they never understand what I mean when I say it's very
[01:02:23] , when I say things are very view. Um, and a lot of stuff in the NJS ecosystem is very view. It, and it's not because of an
[01:02:31]  API surface. It's not because of anything. It's, it's, it's, there's like a philosophical aspect. And I don't know, I haven
[01:02:38] 't figured out how to chart it like on a spectrum chart, but a lot of library authors, not like framework authors, like it's funny. Cause you know, reacts
[01:02:47]  library. I don't mean, I'm not cutting those. Like I'm not talking about like the core library, like framework or whatever, but a lot of like third
[01:02:53]  party library authors, people like Tanner Lindsley, um, for example, someone who'd react meaningful are more of the view mentality. Like that's where they sit.
[01:03:05]  I don't sit there, the react core team does not sit there particularly, but we'll talk about, I definitely looked at on head. Right. So like,
[01:03:22]  um, yeah, what are we going to get here? So, yeah, I mean, Sophie says something else here. Let me get a little further. Um,
[01:03:33]  ultimately, this is a hint that letting any component authoritatively render a title is not quite the right pattern. And you should only do it with components that know their sing
[01:03:40] letons per window so that the tie ties into routing. So you want a framework handle. Okay. So you, I mean, people, some people made it, you
[01:03:48]  know, is this another place where react is telling you to go use next or remix? Right. There's that, that kind of, that kind of question. Right
[01:03:58] . So. Maybe. But the challenge is. While I can agree with this, that author render, not quite the right pattern. should only do it with the count
[01:04:15]  node singleton per window. How do I make Theo, Theo, Theo a singleton per window when the data that I need to complete that is lower in the hierarchy.
[01:04:32]  I mean, I could hoist the data fetching even further, use preloads, you know, and kind of figure that, you know, build into the
[01:04:39]  router essentially. And that's a sane thing. But even then, like suspense and stuff becomes hard. What if I don't want to wait? Do I have to live
[01:04:53]  with a blank title before the title actually shows up? While I agree that it's fundamentally broken, I'm also not hearing a solution. So like, this is,
[01:05:08]  this, this is kind of like the, the challenge here. Right. And I was really having a hard time understanding why this exists. Cause like I hinted here,
[01:05:20]  I don't get why. I imagine I would just use remixes or next head management. If the delusion belongs in the router, why would react ship it? Would
[01:05:29]  either use this under the hood. Right. Yeah. Me and Rick, he go down pretty deep here. I can't remember where this ends up. Seek.
[01:05:48]  No, not that. Let's go here. Yeah. It's funny. I like, I can't find it anymore because of how deep it is. I'm
[01:06:09]  going to grab my bookmarks. Cause I did bookmark a couple other tweets that are relevant. I don't know what they're doing now. No, we'll talk
[01:06:17]  about that in a minute. That's Jose. Maybe. Yeah. See, we don't have Tanner's original tweet. He deleted it. I wasn't online that
[01:06:38]  night, so I didn't even see what his thing was. But let's just look at what Tanner wrote. I can, you want to find Theo's tweet or
[01:06:52]  sorry, Tanner's tweet. I can drop this in chat. Actually. I should drop it here. Cause then it'll drop it on all the places. All right.
[01:07:06]  So how did this conversation go? Please avoid sensationalist. Yeah. Blah, blah, blah, blah. Fair enough. I deleted my original tweet so we can
[01:07:13]  start over. Is there an official explanation or documentation for this reason? It should also be equally obvious the scattered Twitter thread on the subject once the place would just don't hold
[01:07:21]  it wrong. That's what his impression was from their comments. Honestly, the duping was an attribute of the feature that I, and I think many others assume to
[01:07:28]  be included. More actionable question. Does it mean that I can actually get rid of my meta tag management? Part of my ecstatic excitement was potentially giving devs the
[01:07:35]  ability to use these features directly and removing my need for abstraction. I mean, yeah. I mean, there's that aspect too. Yeah. See, all the documentation for
[01:07:44]  here has been great. This is how I actually knew about it. I didn't find out about it in a tweet. I read the docs. So there is that.
[01:07:51]  But that's not really answering the question. For Tansac, you can decide if you want to expose a meta tag API, avoids pitfalls or let users
[01:08:00]  have a remix of the meta, blah, blah, blah, blah, blah, blah. Yeah, it is the wrong term. We talked about that already. But it
[01:08:06] 's interesting. See, Ryan Florence, this is what I wanted to find. He goes, I think meta tags should all be figured out before you flush anything. So above
[01:08:18]  suspense, people will screw it up. But if you care, you'll know what to do. See, I already showed an example where this isn't true, but I
[01:08:27] 'm like, I'm like, okay, well, are you going to use these elements now to build Remix's story? Because Remix actually has deduping.
[01:08:36]  We haven't looked at it yet. It's similar to Next. If I go to Remix Metadata, I think, Metadata, and we look here, Rem
[01:08:45] ix Meta, you'll see something very similar to Next, Generate Meta, which you can just, it has a different format. So the deduping
[01:08:54]  works differently, but it's the same idea that you can, I believe, take the parent data, the apparent route loaders, and then essentially do further merging based
[01:09:07]  on the parent information. Right? This is a great solution. It handles all the different variations you want at the router level, not at the core library level. So
[01:09:20]  I go, will you be using these new tags? And he goes, I don't use our route module meta exports anymore. I just put meta tags in the route components
[01:09:28]  to let React float do its thing. And it's glorious. Is the status quo finally a different task in returning the title tag? It's a, this is a
[01:09:52] , this is a profound question, right? You could say that it isn't, but on another argument, you could say it is. But it changes the meaning of
[01:10:05] , meaning what status means a little bit, because is the, like, once you get into streaming it, it does. Because the second you determine that you can handle the
[01:10:14]  page, it's not a 404 anymore. It's not a 500, even if like the page completely errors out on you. The second, when you're streaming
[01:10:23]  that you determine that, hey, this is a page I can handle. I got past that first check that maybe the first auth check. And you're like, I'm
[01:10:30]  going to render it. It's a 200. It doesn't matter if you realize you have to redirect on it or that, I mean, there's tricks to it,
[01:10:37]  but because you can't put a, like, you can't like update status and footers. There's no like other mechanism to do this. We are forced to treat
[01:10:47]  status as something else. And once you get to that zone of thinking of status, I don't think they are the same. It's a similar thing at all.
[01:10:56]  Title is something that dynamically changes over time. It's something that can change over the life of the request. As you learn more about the title, for example, same with
[01:11:07]  the meta tags. So I do think they are different. Yeah, my pressure interference don't need to handle meta tags anymore. Today, our deduping is handled
[01:11:19]  in a separate library called Solid Meta that's completely independent of router, solid, solid start. All right, yeah, I forgot this. Yeah, thank you.
[01:11:36]  Please like, subscribe, comment, whatever. I don't usually advertise stuff that much, as I said. But it does help me a lot in terms of getting more viewers
[01:11:47]  seeing my content. That's what I care about. So, you know, click the button. It helps. Very much appreciated. Yeah, that's incredibly low,
[01:12:05]  considering the number of people are watching live right now. Yeah, I mean, whatever mechanism you use for hoisting, like, cash is just a hoisting
[01:12:18]  mechanism. That's all fine. But if we go back to the Excalibur, there is a different question between whether we want to hoist the fetching and
[01:12:31]  whether we wait before we send this first chunk back. Thank you. Go the UC2 just to like it. Thank you. Anyway. So, I'm not saying
[01:12:59]  that these are unreasonable. I just, I already, like, conceptually see places, and maybe I'm wrong, where I want the benefit to have this flexibility.
[01:13:09]  Maybe, like, I'm nerd sniping everyone right now, or I've been nerd sniping myself. But I essentially... This is a bold statement. Out of the
[01:13:21]  whole conversation, this is when I stopped arguing with them. Like, I already had my perspective before, and I was like, this is very weird to me. Like,
[01:13:28]  this is not what I would have expected. As someone building a meta framework. This is what I was talking about earlier about, like, sometimes guys building libraries don't
[01:13:36]  always build the meta frameworks or the third-party libraries, so they don't have the same appreciation for certain problems. That's not the case in React, right? They
[01:13:43]  have core team people building Next.js. So, like, but this, Ryan Florence is not core team. He is definitively in that other side, the,
[01:13:56]  you know, the library side. And he was basically like, yeah, I just do my thing, and this is great. Which is a stark contrast to Tanner's
[01:14:08]  response, which was... Tanner wrote exactly what I would have been thinking. See, I'm not in the React ecosystem, so I don't have to worry about it.
[01:14:16]  He goes, trust me, I'd really love to be able to invert all this control to the user and get rid of my abstractions. Of course, they'll always
[01:14:23]  have options. Regardless, I can't disable that. I still don't fundamentally agree with the decision not to do any duping of title meta. While most browsers
[01:14:30]  won't choke on multiple tags, the fact that React devs can easily be able to produce HTML output that is automatically considered bad practice by just about every search engine crawler
[01:14:37] , blah, blah, blah. A waiter will quickly see an uptick of SEO teams auditing their React devs on this topic. It's easy to push this
[01:14:44]  responsibility down to developers and say, you just need to be aware of title meta tags, which is what non-framework React devs have already been dealing with, and
[01:14:51]  it's not a great experience. It's easy enough to render multiple titles without React. But with React now specially handling these native tags, I expected more. Clearly,
[01:14:59]  great care was put into the similar control over CSS style precedents, which, in my opinion, has a lot of overlap on this topic of deduping. Assuming
[01:15:06]  the same level of care would be put into title meta, there's no strategy for React now. Look back on head during rendering. Make changes based on deeply rendered elements tree
[01:15:13] . Then I don't understand the pushback. Yeah. The funny thing about this, though, is if you look at the docs, I don't know if anyone actually
[01:15:23]  paid attention. Maybe this is another thing that they do. They actually warn you not to update the props of things that have been pulled up. They don't update after
[01:15:32]  the fact. They only update with the values that they were originally given at the time of the original render. They actually say that somewhere in here. So there might be
[01:15:43]  still some more missing assumptions here. Like, let me see. Maybe title is shorter. I can see it. Put the title. You render the title. We're
[01:15:55]  always going to the element. Accepts children. Text will become the title of the document. You can pass your own components. Special behavior. Render always the title within
[01:16:02]  the document's head. Regardless to the tree. The head is only valid. Title will exist. It's convenient to keep the proposal. The vestigy is ignored.
[01:16:08]  Item property is ignored. Set the property title. Use variable of the title. The variable must be a single string of text. So you can't use interpolation like
[01:16:15]  this. Okay. Or single number. Single two string. It's not obvious. But just curly races. Not used. But using like this. This is not a single
[01:16:22]  string. Okay. So that's an interesting exposure. To be fair. I was working on some metadata stuff this morning. When I was playing around a solid. And I
[01:16:32]  hit the same problem. And I was like. Oh crap. I have to actually add more code to make this work. I did. But I get why they would do
[01:16:40]  this. Act cause a title of the two elements. Blah, blah, blah. So cause an error instead. Use a string interpolation. Okay. They don
[01:16:45] 't say it here. There. There was a. Maybe it's not on title. There's some of the ones. They were talking about. How. They end up
[01:16:52] . Only being the value. That they initially do. I don't see it. Okay. Anyways. We won't worry about that too much. So let's keep
[01:17:14]  on going. Alright. So let's keep on going. From my view. This week. Great option. React to lift the tide. Not just for every framework.
[01:17:21]  But all react devs. Regardless if they use a framework at all. As far as far as I'm concerned. Or as far as I know. Yeah. There
[01:17:27] 's no way to get in the middle of this API today. Without writing streams. String transforms. And immediately risking hydrates. And mismatches on the client.
[01:17:33]  I definitely don't want to go down that road. And I believe this leaves most frameworks that offered a title meta abstraction. The same exact boat. They were in abstraction over
[01:17:40]  it. Regardless if any framework keeps a title meta abstraction or not. React users will eventually be educated about these new built-in features. And want to use them.
[01:17:47]  Resulting in a regression and expectations from most frameworks that manage them. Yes. Because it works differently. Like I said. I really want to recommend developers to use this
[01:17:55]  API. Because it's one less abstraction. But I also don't want to have to explain to them yet another rule. They need to be aware of to use React.
[01:18:01]  Let's take a drink after that one. Well. This is why I asked Ryan Florence if he'd be using this in remix. And his answer was. I'm
[01:18:19]  just not going to use a remix solution. My gut is. Some of them might. But like. What Tanner was just describing to me. Suggests that he thought
[01:18:32]  about it the exact same way I think about it. Which means that from Tanner's perspective. He won't even be using these primitives under the hood probably. That
[01:18:40]  might change. But like. It's interesting. Right. Yeah. I mean. I totally understand that it would be very nice if it could work. The thing I'm
[01:18:54]  not hearing is how it would actually work. If it's possible to do it automatically we would. But the constraints prevent it. Right. Because. The React team is not
[01:19:01]  willing. To. Provide deduping. Logic that is flawed. As I said. It's fundamentally flawed. Like. But. So. This is where I
[01:19:13]  was sitting. And I was like. Oh. What am I going to do. Right. Like. This is. This is quite the conversation. I. This was.
[01:19:22]  One of the. More. Interesting ones in a while. It wasn't just people like. Shooting each other down. For some funny meme or something. Framework authors
[01:19:31]  are the only one using React without a framework. Essentially. Yeah. Yeah. So. Yeah. Let's see here. I figured. I might as well share what
[01:19:44]  I've been. Been. Like. A bit of my research. So actually. Let's just go here. And I made a discussion. Uh. Here we go
[01:19:56] . All right. I made an RFC. Because I was like. How. Would I want. This to work. Right. So. Let's talk about the
[01:20:06]  RFC for a minute. Because I. I think with the backing now. We can kind of like. Discuss. Like. I. I don't know. This
[01:20:12]  is an interesting question. How should frameworks handle this stuff. Right. Um. I don't know. Right. In this RFC. I'm looking for feedback on potential
[01:20:22]  JSX tags. Um. Prozo aims. The useful core. But also third party libraries. You know. Like. You want to make everyone happy. Hopefully. To
[01:20:28]  a certain degree. Um. Or give them the tools they need. I talk a bit about why I'm. What I covered at the beginning of the stream. Like
[01:20:36] . We have this one mechanism. Solid to already do stuff in the head. But why I don't like it. Which is all the reasons that we talked about. Already
[01:20:42] . About. You know. Only doing it first flush. Um. Yeah. Etc. One thing I guess I haven't talked about. Because you might be like.
[01:20:51]  Okay. Well. I'll do it at first flush. And then like. Have it fixed during hydration. This is. This is kind of. Uh. A. A
[01:20:58] . A fun game you can play. Right. Because you can say. Set the title. To. You know. Have it as like. Come back as Theo here
[01:21:08] . And then. I hope he doesn't. Mind me using his name a bunch. And then have it. Be. Have. Yeah. Sorry. Let's line this
[01:21:20]  up. The server realizes it's Theo here. The server realizes it's Theo here. And the server realizes. Like. We'll worry about the flushing in a
[01:21:30]  minute. That is. Um. It's this. Right. Here. Right. Now. If you're streaming. If you're streaming. If you're streaming.
[01:21:51]  This will just. You know. Like I was talking about. This will just. Kind of automatically. Happen. As you go. Right. As it gets the chunks
[01:22:03] . The title will do. Right. Now. If you. Stopped at first flush. You would only see Theo. Like this. And then presumably. At.
[01:22:20]  Sometime. Later. You'll hydrate. And see. You know. In a simple world. You might say. Okay. Then you'll see this one hydrates
[01:22:32] . You'll go from here. And then it'll hydrate. And you'll see this. Right. Like. It doesn't really matter. You. If.
[01:22:39]  If as it goes. It basically reruns. The head tags. You'll settle pretty quickly. As it hydrates. Now. There's a couple. Fun parts about
[01:22:49]  this. First of all. When the first flush happens. Sometimes the first flush. Might not happen. Here. Depending on other aspects. It might happen here. And you
[01:22:56]  always see. Capital Theo to here. That's perfectly fine. The other fun part. That can happen is. When you get to the client. Sometimes you don't have
[01:23:03] . All the assets. Like sure. You stopped at a suspense boundary. On the server. And you. You're good there. But. You know. And we
[01:23:12]  do. A lot of preloading. To avoid this problem. But. Lazy. Components. It's possible to get. It's possible to get.
[01:23:20]  To get to a point. Where you can hydrate. Part of the page. But you're waiting. On. JavaScript. That hasn't. Loaded yet. Like
[01:23:32] . On the server. Those async imports. Happen. You know. Relatively quick. But on the client. You have to do a whole. Back and forth
[01:23:40] . That. It's. It's conceptually possible. In this model. To. Essentially. Stream. Flush late. Or whatever. Based on some kind of
[01:23:55] . Thing. Like. I've. I've seen this happen. In solid. Where it's possible that. Like. Something happens. Where. You end up. Fl
[01:24:05] ux. Like. The chunks. Kind of get. Come in quicker. And you end up. Seeing this. On your page. And then because. You're.
[01:24:13]  The code loads. And starts hydrating. And doing the rewrite. You actually then see. It revert. Back. To. This. And then. Play it back
[01:24:27]  again. In the client. Almost. Right. Like. Where like. Depending on the type of hydration. The code loading. It's possible. That the server. Still
[01:24:42]  flushes. Later. And then. Ends up. Replaying. This stuff. Now. That's the biggest. Danger of. Right on hydration. Because.
[01:24:53]  Like. Right on hydration. Is subject to. Is subject to all the. Asynchronicies. Of. The browser. And then. It's possible.
[01:25:04]  Conceptually. That the server. Could get ahead of it. And then. Basically undo and redo. It's minor. But I just. Like. Conceptually knowing this
[01:25:12] . Is one of the reasons. Plus it's more work. It'd be great. If you could just trust the server. Is there something. I'm not getting
[01:25:26] . Why the dev. Couldn't specify some form metadata. For which titles should take priority. Right. But you need a mechanism. For this. Right. If you
[01:25:32]  provide no mechanism. How. How can the. The stream. Handle it properly. For most of the time. I only want. The title type to update. When
[01:25:40]  I switch page. Or pagination. Yeah. But. It's not just a question. Of when it updates. It's about when it's available. Right. Because
[01:25:49] . What if. The title. Actually includes data from the page. Are you willing to block. The whole page. For that title. That. That's the question.
[01:25:58]  It's not about. Like. Obviously. It'd be great if the title was just there. You know. But like. It's not always practical. That it
[01:26:07]  can be. Is. Kind of what I'm arguing. Like. Do you want to block. And. More importantly. Do you want to have the decision. Whether you
[01:26:18]  can block. Well. Why do we care about. UX. Is. Severely. Impacted by blocking. You're right. The title. Coming in.
[01:26:31]  Flickering. Who freaking cares. That's actually an argument for deduping. I think actually. But. If you're telling everyone that. Literally. You.
[01:26:40]  Until. All the data is needed. To show the metadatas. We can't send you the page. That has UX implications. In some cases. Right.
[01:26:54]  Like. I mean. How should I put it. It's. It's so hard to talk about this. In a lot. Because of. People's experience here.
[01:27:04]  But like. There was a time period. Where client side apps. Ran circles. Around server rendered apps. Like what? No. Like. Especially in the JavaScript space.
[01:27:14]  People used to make their SSR demos. Back in like 2016. Cirque of time. And I just make a client demo in solid. And smash them on lighthouse
[01:27:22] . Smash them in every possible way. And you'd be like. Why. Is that possible? Why is this happening? The client. The client needs to. You know
[01:27:30] . Go and fetch the data. And doing this. The server you have all the data. Well it's because they block. They just. Basically. Wouldn't send back
[01:27:36]  anything on the page. So what would happen is. You delay sending back. The fetching of the CSS. The fetching of the JavaScript. Fetching of pretty
[01:27:43]  much every asset on the page. And. You end up with a scenario where. Like. You have nothing. And then you have everything. And then you wait.
[01:27:55]  For. The stuff to become live. Whereas. In my client side app. I'd send a blank page. Almost immediately. And then. Start fetching all the
[01:28:05]  stuff. I need the client. So my JavaScript sometimes. Arrived. You know. For rendering. Quicker. Than the data would. Anyway. So. Then I
[01:28:14]  was like. Rendering in suspense boundaries. For parts of the data. And if you know anything. With SolidWorks. Which is a little different than React. We
[01:28:20]  don't throw away. What's under the suspense boundary. When like. The data resolves. We. We just fine grain. Patch it in. So I.
[01:28:27]  Technically. I still to this day. Some demos. Where it's just. Kind of like. Streaming in some data. Or whatever. Outperform the HTML streaming.
[01:28:34]  When the network is fast. But. The whole equation changes. When you can stream. Because now you're not blocking anymore. Now. There's basically no. Pen
[01:28:51] alty. Um. For. You know. Putting the data on the server. You can make the choice. Actively. You go like. I should wait for this
[01:28:58] . I don't want to have a loading indicator. Or I can not wait for this. Stuff. Like. These meta tags. And titles. Arguably. If they
[01:29:06]  would cause the page to block. Should be something. You can make an active decision on. I mean. Early hints are great too. But early hints and streaming. Are
[01:29:28]  basically the same. Like. It's. It's. It's like a very limited part of this thing. But you can do more. Like. Another advantage.
[01:29:38]  Of streaming. In these situations is. The slow loading stuff. Right? We. Like. The stuff that takes longer to load. We have the ability. With streaming.
[01:29:49]  To. Even though. We don't care about it. We could just fetch it on the client. After the fact. We have the ability of streaming. To start that
[01:29:55]  request. That much sooner. We start the request for the data. Here. Instead of. Well. I mean. I actually have the diagram right here. We start
[01:30:03]  that fetch for the data. Here. When we go to the server. This is when we start that fetch for the data. When you're streaming. And. Otherwise.
[01:30:13]  We would be starting that request for the data. Here. Here. Versus here. It's almost strictly better. Across the board. On every. Like. Mechan
[01:30:31] ical aspect. It's like. Has the benefits of client. It's very rare. That you find a solution. That does both things. And actually does so. With
[01:30:40]  fairly minimal. Compromises. Usually there's like. A trade-off. Streaming. Kind of sits in this. Other than. Cacheability. Arguably
[01:30:48] . But I mean. We could discuss that. If you really want to. It sits in this actually. Kind of. Sweet spot here. Most of the time.
[01:30:59]  You don't care. But the. Like. You want the meta tags. For bots. But bots don't support. JavaScript. Always. So like. You'll just
[01:31:07] . Wait. If the bot has to wait. You don't care. If the human has to wait. You do care. Which means that like. You should be able
[01:31:15]  to author these things. In the same way. Right. You don't want to like. Have. Like. The bot version. And have different code. And the thing
[01:31:21] . You should be able to just like. Write the stuff. And when you say. Hey. It's a bot. Just wait. And flush at the end. You
[01:31:28]  know. I don't care. And gets everything. You know. Insert in the head initially. Versus the end user. You know. You should be able to just
[01:31:34] . This. This should be a very simple switch. At the top level. Not something that changes the way. You architect or author your code. Right. Ideally. That
[01:31:42] 's a DX concern. But. Yeah. So. My whole point is. It causes a problem that affects UX. If you're willing to block the page for it
[01:31:58] . Which is what the recommendation. Of basically every library is. So. So. Yeah. I mean. That. That. That's. That's this. Sorry
[01:32:24] . Where was I? Yeah. I was. Yeah. Right. I was doing the Excalibur draw. Here. Where I was showing the timing here.
[01:32:31]  Like this. This. You. This. UX bit is very minor. I just wanted to throw it out there. Why. You know. We could probably live with
[01:32:41]  this aspect. We do today with solid. It's less than ideal. But it's just. You know. A thing. Okay. So. Let me continue with this
[01:32:51]  piece for a second here. Yeah. So while one could take a decision. All metadata should be resolved before flushing. And it also means always blocking. Which I
[01:33:00]  don't think is a good place to be. This isn't always a reasonable request. You could have to wait on the longest thing to load on the piece of data before
[01:33:06]  showing the user anything. You could argue that deduping is the problem. But showing some less descript title before the fully formed one is probably still beneficial. So. I
[01:33:13]  did research. I looked at a bunch of libraries. Here. So I'm going to just drop this in chat in case anyone wants to look at it. I know
[01:33:27]  this is a fairly esoteric topic. I should have said this at the beginning. You know. This is like a framework author kind of topic. It's what we
[01:33:36]  usually cover on this stream. You as the end developer are only slightly impacted from it. Because the gist of what the React team says is this feature is not for you
[01:33:44] . You should probably just use what they have. Because. They're right. If deduping. You know. Title. Is fundamentally flawed. Then they don't want
[01:33:57]  a hand in it. Although. If you look at this chart. And honestly. If you expand this chart to like twice as many libraries. Because I looked at more than
[01:34:04]  I actually like did here. You will see that React 19 is literally the only head library in existence. That has not deduped title. Pretty much. In all time
[01:34:13] . I. This is why it was surprising. Not. And I don't mean that in a bad way. Necessarily. Like. It's just. It is
[01:34:22] . Unique. I don't think anyone goes out to make a solution for head tags. And doesn't deduped the title. Like. So. This is
[01:34:32] . You. Understanding that this was very intentional. Like. I'm sure the React team knows that. I'm sure. Like. They will look like probably a brief
[01:34:39]  look at a space. And realize like literally everything ever has deduped the title. And they're probably like. Yeah. But we don't want to. So.
[01:34:45]  It's intentional. What about Angular? I don't know Angular's solutions. You. I admit. You got me there. I. Um. Is it built in?
[01:34:59]  Brandon? I. I. Like. I. I. Yeah. Yeah. Yeah. Let's look. Quick metadata. Haven't looked. Use document head.
[01:35:25]  Okay. So they have. Use document head. And then. They insert it in. This reminds me of the old synchronous rendering. I wonder how this works with async
[01:35:37] . I guess they don't have streaming. In the same sense. Like they have in order. But they don't have out of order. Like. This is definitely first
[01:35:43]  flush style API. I think. If I am an understanding here. Um. Oh no. This is. This is for reading. Not writing it. Huh. No
[01:36:05] . Manually set the heads. And yeah. No. You can set it. But. Look at this. Title. I mean. This is the answer right here.
[01:36:13]  Title is a. String. It's not an array of things. It is a single string. This alone tells you they do dupe the title. No.
[01:36:26]  They do not. They do. Oh. When the component dismounts. Yeah. They might remove the title. They might remove. Yeah. They probably do. I
[01:36:35]  bet you they do remove the title actually. Yeah. Sorry. Yes. They will remove the title when it dismounts. Yeah. Yes. So. If you put
[01:36:44]  a title on each page individually. And remember to put it on every page. None of your pages will be without titles. And it should work. Right. Okay.
[01:36:55]  Anyway. But yeah. Okay. So angular neither do dupe. That is interesting. So like they don't treat title as a string. They just treat it as
[01:37:11]  a meta element. Because like basically if you. If you treat it as a single string. That's implicit duping. Because there's only one value for it.
[01:37:20]  Right. Anyways. I went through a bunch of frameworks. And looked at it. There was some interesting patterns. Because most. There's a lot of these like.
[01:37:31]  Do it everywhere styles. The title would be over in the answer. Yes. So. Yeah. Last one wins. Yeah. So yes. Angular is the same as everyone
[01:37:39]  else. Yes. Okay. Yeah. That's. That's when I say deduping. Deduping is a wrong term. It's overriding. So
[01:37:47]  yes. React is very unique there. So that's. It's a stance. Which as I said. Carries repercussions. But this is not about a negative
[01:37:58]  or positive thing. It is an interesting thing. Okay. So. Yeah. First of all. Some solutions are like. You can just put tags everywhere. Other ones kind
[01:38:08]  of group them. I want to point out something. Obviously next and remix. Use like sections or route groups. Like in your route definitions. Whereas like. Most of the
[01:38:20]  other ones. Those are individual. React Helmets API is an interesting one. Where I continue. Consider it grouped. Because. You put. You make a helmet
[01:38:28]  tag. And I know Svelte. Is like this. Two. To a degree. But. They. Like the. The Svelte head or whatever. But
[01:38:38] . The reason I put them under grouped. Is because they actually. Do. A level of replacement. With it. In that. If you have. Two metadata tags.
[01:38:50]  With the same name. Or key. With inside the same group. They don't dedupe. They. They'll let you put like. Four things with the
[01:38:56]  same key. But if you use that same. You know. Property name on your meta. In a different. Helmet. It will. It will. It will
[01:39:04] . Replace. Both entries. From the other one. So you can make duplicates. At the same level. Which is. As I said. Very much the same
[01:39:13] . In something like. Next. Or remix. Where each level. Has the ability. To basically. Completely merge. Over override. The level above it. Helmet
[01:39:21]  works like that too. Whereas when you have single off. One of elements. Style designs. Each one's handled separately. It's not really easy. To do that.
[01:39:31]  Svelte. Doesn't. Just doesn't. It just makes groups. And mounts. And unmounts them. With your component. But. It was interesting
[01:39:40] . Because the ones. That. Grouped. Basically. Deduped. Met on name. Whether like. Intentionally. Or like. Remix sort of.
[01:39:49]  They just say. The last. Route section wins. Like. They basically. Deduped on names. Most other. Libraries. Other than. Like Helmet.
[01:39:59]  That I looked at. Did not. But again. Helmet's kind of grouped. I know there are libraries. Like the one that I built. Solid met on.
[01:40:07]  That did dedupe. And was not grouped. So. Any of those libraries. Basically. Open Graph. Made it so that. They can't work that way
[01:40:17] . Because it just. Screws with Open Graph. So. I think. That generally speaking. Deduping on. Meta properties. Can't be something. That
[01:40:28]  can be automatically. Handled. Unless you know for sure. That you have a merger layer system. Like you have with a router. Which means that this is not really
[01:40:36]  a feature. That you can do. That's a core feature in a library. So. React decision makes a lot of sense. Svelte decision makes a lot
[01:40:43]  of sense. Nuxt 2. We're going to get to. Nuxt 3. And unhead. In a second. Because. They are. An interesting exception.
[01:40:51]  Right. Because as I said. Anything that dedupes or overrides. It's a last one wins. Category. Generally speaking. Okay. Title. As
[01:41:01]  I mentioned before. Everyone basically dedupes on title. And then. Some of the frameworks that don't dedupen that. Provides specific keys. This used
[01:41:11]  to be the meta framework trick. You know. Svelte doesn't really. But they have a way of doing it. Next. Nuxt. Old version of meta
[01:41:21] . And new version of meta. Let you provide some kind of key. Remix. I said group doesn't. And these ones that group doesn't. So there
[01:41:27] 's like. Almost like two different approaches. Here I've found. Where there's either. Grouping. That can do more. Reasonable. Meta. D-
[01:41:36] duping. Because of the grouping. Or. The one. Or the ones that aren't grouped. That have some kind of mechanism for a key. The only exception is
[01:41:43]  unhead. Which basically just does. Everything. So. Which is. You know. Interesting. Because it also makes it the most. Complicated. Because a lot of
[01:41:55]  the. You have more configuration. Object. Options. Than you would like. Stick on a JSX element. It's like. There's like. You can make
[01:42:03]  merging strategies. And you can. I mean. Unhead. Let's just go there. Title. Title template. Template parameters. Body attributes. Scripts. And
[01:42:16] . Let's see. Is it API? Is it usage? I can't remember. I can't remember where it is. There. There's like. Mode.
[01:42:35]  Like. This. This is very. What's the term? When you basically have like. Every option imaginable. Under your. Under your head. This is very
[01:42:47] . This is very extensive. So to speak. So. I mean. I was definitely tempted here. Because it's like. Man. I just don't. Like.
[01:42:57]  If I don't want to solve a problem. This is one way of solving it. Get. Pass people to a library. That literally does everything. Comprehensive.
[01:43:03]  Yes. Comprehensive. That is the term. Right. Yeah. Unfortunately for me. You know my criteria. I care about streaming. Unhead does not.
[01:43:17]  Currently support streaming. There's an open issue. That they're starting to look at. For. For like a 2.0. They'll look at streaming. And even
[01:43:23]  if they support streaming. I don't know how they're going to support streaming. Because. They. You know. A lot of times it's like. Oh. You
[01:43:29]  know. Maybe first flush is fine. This is a very tricky place. That integrates very deep. With the framework. I'm very interested. To see how they
[01:43:36] . Do the generic stuff. I've been very impressed. With OnJS. In general. In how they've been able. To. Integrate so well. With
[01:43:47]  different solutions. It's very hard. To find that general. Layer. And at the same time. Give such comprehensive. Feature set. I was curious. For a
[01:44:00]  second. So I. I dropped it in. Bundle phobia. And of course. OnJ. Unhead. Or usehead. Or what is it.
[01:44:08]  Sorry. Just unhead. The core library. Was like 13 kilobytes. Min-g-zipped. Which makes it twice the size. As SolidJS
[01:44:13]  itself. And. Solid meta was 1.5 kilobytes. So I was like. Huh. And that includes a server code. So I was like. I'm
[01:44:22] . I'm. I think. If I was going to take this. Internally in solid. And do the streaming stuff. I can make something smaller. Than solid meta
[01:44:29] . And like. Basically cost the user. Like 500 bytes-ish. So like. There's also like. Do I want to expose all of this. And be
[01:44:36]  on the hook for all of this. And since I need to kind of get the streaming stuff. Bring it in core. Does this make sense? And my thinking was not
[01:44:43]  so much. Yeah. Like. Yeah. Comprehensive. Yeah. TanStack is comprehensive as well. That's what I'm saying. It's an interesting
[01:44:51]  tension. Sometimes me and Tanner hit this one. Working on Start. I don't know how many of you. TanStack Start's been getting a lot of attention.
[01:44:58]  But it's built on the same bones. Their skeleton. A solid start. And a lot of the features. And a lot of the thinking. And the philosophy. Are
[01:45:05]  basically completely aligned. Like all the composable in this. Like. I didn't. I built a framework. And. With Nikhil. Who built Vinci.
[01:45:15]  We built something in such a way. That we would not alienate. Solid's very small ecosystem. And in Nikhil's case. He wanted to be able to support
[01:45:22] . Doing some React stuff as well. And. We did so by being very. By figuring out where the boundaries were. And making it such that. They weren't going
[01:45:31]  to interfere. In a way. Like be too prescriptive. In terms of like. What tools. Are libraries you used. And. Tanner had the same problem
[01:45:42] . Because every. Meta framework is married. To its router. So like. You're kind of stuck. You're suddenly in this position. Where it's like.
[01:45:49]  Okay. I'm going to use Remix. Well you're actually using React router. Or next app directory. Like. The framework is the router. Right. That.
[01:45:56]  This is old news. It's. Everyone knows that. So. But when I was building. So I'll start. I was like. No. I don't want
[01:46:04]  the framework. To be the router. And we tried it a bunch of different ways. And Akil was like. Came back to me after being away for a couple
[01:46:11]  months. And he's like. I got it. This is how we do it. And he got inspiration actually from Jared from Bun. Who's. He'd been working
[01:46:18]  on generic bundling tools. For stuff like server functions. And we brought that to the Vita ecosystem. So like. It's funny. Because me and Tanner sit
[01:46:28]  down. And talk a lot about. A lot of these kind of. Like levels of decisions. And it's. It's a lot. It's less like people.
[01:46:34]  Always like people making the same solution. It's more. It's more of like. The way. Like. I'm very primitive focused. Kind of core focused.
[01:46:44]  I always think about like. What. I could offer. From like a. Primitive thing. That would. Power people like Tanner. While having. Basically no interest.
[01:46:54]  Of building. What. Some of the stuff like Tanner builds myself. And. What I hear from Tanner. When I get a lot of value from. Is. He
[01:47:00] 's looking for building blocks. That he can build this stuff. And react. And most of the time. We. When we find those gaps. We're like. Oh
[01:47:06]  actually solid. Works like that. And he's like. Oh I wish I could do solid. But. Sometimes we identify other gaps. And. It helps me kind of
[01:47:14] . Figure out. What the real core primitives are. But usually what it ends up with. Is Tanner going. Building the. You know. Unhead. Style library
[01:47:23] . And me going. What is the absolute minimum thing. He would need. To get what he wants. From the core library. To build a library like this.
[01:47:30]  Because I sure in hell. Don't want to build this library. Anyway. This. Is a very. Comprehensive library. Yeah. I mean. You can see
[01:47:49]  all the different stuff. You can do here. Wasn't quite the right. Fit. Because of the minimalism. And the streaming stuff. But. Yeah. I don
[01:47:59] 't know. This is a very interesting. Topic. Because. As I kind of went over. I think. The core needs to be aware of this stuff.
[01:48:06]  But. If. If. The core can't do the deduping. At any level. Then there's no means. To actually. Expose this to people like
[01:48:16]  Tanner. They just. It won't be. Basically any use for them. If they actually want to accomplish. What. What I've. Kind of set out here.
[01:48:23]  To do. So I can't. With my proposal. Which. I'll. Spend a couple minutes. Talking about. Just you know. Which was. It
[01:48:30] 's funny. It's very much like Unhead. You know. It has less stuff on it. It doesn't do any deduping. Except. It has
[01:48:41]  the optional. Ability to pass a key. Which could do deduping. Sorry. The only deduping it does is title. Sorry. I should be clear
[01:48:49]  about that. It dedupes title. Which I'll talk about in a second. But. Other than that. It would dedup key. But then the.
[01:48:55]  The funny. Part. Or a fun part of it is. We. If we were to export JSX tags. Yes. We dedup title. But every other rule
[01:49:04] . Is the exact same as react. So none of the other deduping happens. So while the underlying primitive. That the compiler. Transforms this into. Has the
[01:49:12]  ability to do deduping. And handle that deduping on the stream. Be able to send diffs over the stream. You know. Append elements. Remove
[01:49:18]  elements. The actual defaults that people get. Have no opinion about how they dedup. Except for title. I mean. We wouldn't even have to do title
[01:49:26]  that way. But let's pretend except for title. And. There'd be no way with the JSX to set the key. So. The. If someone. Appro
[01:49:35] ached this. From the perspective. Like. You took react stocks. And we're like. There should be only one title on the page. Then. And all the other
[01:49:44]  rules from react stocks. And just did it. This would work perfectly fine for them. It wouldn't. Impose anything. About rules. Of. Deduping
[01:49:53] . Or any of that stuff. They. It would just. Kind of stay out of their way. Except for title. Which I'll talk about in a second. And
[01:49:59]  then. For people building libraries. They could use this. And have key based diffing. Which would work over the stream. After the fact. They'd have the means
[01:50:07] . To diff. Merge. Make those decisions. And have incremental streaming. Right. So. I think this is. Um. Very powerful. Um. Kind of
[01:50:20] . Concept. Anyway. Because. The. The average user. Isn't told. That they should have more than one title on the page. The only reason. That
[01:50:31]  I'm considering. Uh. D-duping title. Is because. You can still recommend. Not. To put multiple titles on the page. And still have the benefit
[01:50:44] . This is like. The exception case. It's like. What do you do. When someone. Doesn't. Follow the rules. You know what I mean.
[01:50:57]  Like. If you say that. There should only be one title. Then. That's fine. But. If. If there are two titles. Should. What should the
[01:51:11]  behavior be. Right. You can either just say. Not up to us. But. Since. I already built the mechanism. To de-dupe. Anyway. Um
[01:51:22] . To. To support. Future de-duping efforts. Of people. Like. Why not. As I said. This is just a proposal. But. This is
[01:51:30] . This is kind of where I'm getting at. Because it feels like. The core. Unfortunately. Has to be aware. Because as we already talked about. This isn
[01:51:37] 't really easily built in user land. So. You're kind of in this place. Where. If you actually want the solution. The. The framework has to provide the
[01:51:45]  means. But not the opinion. And I think. That's what this. This. This accomplishes. That being said. Um. I've. I actually went
[01:51:56]  and implemented. Most of this. The last couple days. When I was playing around. And. I found some other fun titles. Limits in solid today. I
[01:52:04]  don't think I'm going to get this out for 1.9. Even though. I spent all this effort to do it. Um. This. Uh. Feature
[01:52:11]  actually benefits. Greatly from solid 2.0's reactivity. Ironically. Um. More details. More details. And probably people need to know. Or understand
[01:52:20] . But. Um. Essentially. This kind of work. Should happen on the server. As basically. A render effect. Is what we call it. Um. User
[01:52:35]  effects only. Run on the client. Right. Through your use effect. Type stuff. It should be part of the rendering. And. Um. I guess we'll
[01:52:43]  talk about it a bit. Today. Because solid. Groups. The tracking. And the effect together. In our effects. In solid 1.0. Render effects
[01:52:52]  happen. As you render. And. User effects happen. After you render. And. Both those timings. Are. Actually. Really awkward. For solving. Um.
[01:53:05]  The metadata problem. When you consider async data. And suspense. Because. If it's. As it's rendering. Then it's too early. Right. You
[01:53:12]  can't. You don't want to update the title. Until suspense is finished resolving. And if it's after rendering. Like in the side effect. It's too late
[01:53:19] . You don't know. You actually depend on the async stuff. And for. As I said. Most end user code. You never hit this. Right. Because
[01:53:25]  you're rendering. And it blocks. And it handles it. But the head. Tags actually render to a different place. That's not. Controlled by the.
[01:53:31]  By the. Main render tree. So this is like. Solid specific details. Which. Disappointingly. I learned enough. That I know. I think this proposal
[01:53:40] . Still. You know. We'll have some more time to debate. And talk about it. And I think this is exactly. How these types of solutions. Should
[01:53:45]  work in the future. I just lack the tools. To easily implement this today. Even though. I got a. Basic working version. Going. The last couple days
[01:53:56] . But. Yeah. I don't know. If anyone has their thoughts on this. But. It's. I think this is how you approach it. There's some
[01:54:07]  good comments actually. Ricky jumped in here actually. Wow. This is a great write up and research into different things. I'm actually so appreciative that someone from the React
[01:54:14]  core team actually bothered to write on a solid RFC. Part of it was because you know. I do talk about React a bunch in here. Just to explain React's
[01:54:22]  approach in here. And because I was like. This is really interesting. I don't quite understand. We try to avoid voicing a common abstraction on users that has un
[01:54:29] resolved pitfalls like the ones you mentioned. That's why React supports deduping for links, script, and style tags in cases where like. There's no
[01:54:35]  pitfalls like the HRAF is the same or the source the same but not for title. Instead we encourage libraries and frameworks to choose their own trade-offs and users
[01:54:42]  can choose different libraries or different trade-offs. That's why the two React frameworks listed have support for deduping but in different blah blah blah. That's a choice
[01:54:48]  we make to live with but for solid libraries you may have different design principles that work better for your users. I don't think one way is better just different set of trade
[01:54:54] -offs. Yeah. No. Definitely. And in a way that I think might make more sense to like the React core team and React team. To me this is like
[01:55:03]  fetch. Like overriding fetch because it's like you mechanically see an advantage of doing that to accomplish a certain goal right because you know that it's so vital
[01:55:19]  for the functionality of the framework to kind of step yourself into it right. You need to open up the mechanism. It doesn't really like for the most part you're not
[01:55:29]  really changing anything or trying to make push the opinion on people but you need it mechanically and I feel like what I'm getting at here is I actually what as I
[01:55:39]  said the coolest thing a moment ago is if someone if I implemented this proposal the React docs would just apply to solid basically 99% and it would just literally work the same way
[01:55:50]  except for title. But someone could say that's the way I should develop and it would work completely but it opens up the door for people to be able to use this
[01:56:05]  as part of libraries to get functionality that could only be exposed from the core. That's what I'm saying. I think because of our differences in viewing on streaming is
[01:56:13]  why there's a difference here because I think streaming goes beyond the first flush. There's no choice but to provide a mechanism to handle this whereas if you don't you have
[01:56:23]  to assume that streaming ends at like or that this ends at first flush. So it's like it's interesting that I actually think React and ourselves are very, very aligned
[01:56:37]  here. It's just the ambition of the solution or the problem being solved is like I'm being slightly more ambitious which caused me to pull in the next thing so to speak
[01:56:50]  whereas React is like that's outside of our range. It's not because we don't want to encourage libraries. It's actually the opposite. We recognize that they wouldn
[01:56:59] 't be able to get to where we want to go if we didn't give them the tools. So, yeah, definitely interesting. Last one wins. It's the same
[01:57:11]  thing but the reason that I might be more lenient on this kind of thing is if the answer is do what React does, this works. If the answer is do
[01:57:24]  what Remixer next does, it still works because hierarchically you do get the last one wins situation. The problem is you can't guarantee the last one wins as well
[01:57:36]  when you can just put stuff everywhere but you can't but the router is not core. So, the only option you have here is basically with the JSX tags not
[01:57:47]  last one wins and then if someone wants to make a tag that's JSX tag like and make last one win, they can using this or they can make this could be
[01:57:57]  used to make something like Remix or next does. And, again, you don't have to worry about that. Yeah, I mean, yeah. Blastering
[01:58:11]  the stream. Like, I think the thing that people start picturing all these edge cases but no one ends up authoring it like that. if you put like
[01:58:23] , think about it, this can happen today, if you put these head tags and a bunch of siblings under lazy components that all order async and come in at different times
[01:58:34] , React helmet would go freaking nuts. It wouldn't know who won, it wouldn't know who won, who was last, whatever, it would be a mess.
[01:58:41]  No one actually authors their stuff like that though, right? I was thinking about it with title, it's like picture both extremes. You have two titles on the page because
[01:58:57]  you messed it up in React 19 and you're like, "Why isn't the title updating?" So you're suddenly looking around your whole page, trying to find your
[01:59:05]  whole project, trying to find where that second title is. It's very similar to, "Why is that title updating to what I don't expect it?" And you end
[01:59:14]  up like, both situations, like, just by not deduping, you haven't actually solved the problem. Like, the work you have to do to actually look around
[01:59:24]  is actually the same work, so to speak. Like, it'd be different if one of the solutions actually solved the problem, but the cold reality is there's a
[01:59:37]  single title. So whether we pretend to or not, we give the user the ability to set multiple titles, deduping's happening. It's in your control or it
[01:59:46] 's in the browser's control, but it's happening. So, like, essentially, like, it doesn't actually matter. As fundamentally bad as it is, I
[02:00:01]  don't think it actually matters. what if a page had an ID and the title should have that ID? I mean, put the ID in the title. I'm
[02:00:15]  not quite sure I'm understanding the question. like, the thing is, there's a limit to what these solutions can handle properly. And there's a limit to what
[02:00:31]  the browser can handle properly. So, unfortunately, there, there's like the, I could say ideally from an end user perspective, that the route level stuff that Rem
[02:00:48] ix and Next is doing seems to be about the ideal solution. But Remix and Next don't have the tools to do the streaming the way that, um, that
[02:01:01]  we're handling it. So this would give them the tools to handle the streaming. I'm hoping this makes sense, right? Like, it's, it's essentially
[02:01:17]  being as unopinionated as React, except for title, which I said has no really defined behavior if you have more than two title tags on the page. So
[02:01:28]  it's kind of like out of it. But then on the other hand, giving libraries a way to actually interact with the streaming. It basically handles both scenarios. Anyway.
[02:01:45]  The, the, the, the main reason that people use head libraries with title deduping is so that they can set default titles or set titles. Like, yeah
[02:01:55] , defaults the main one or set titles before data is loaded. Um, but a lot of times what people do, and maybe this is a bad practice we could argue
[02:02:04] , is they set a title higher up that like, if they don't put a title on the page, there's just a title there. I think they probably liked
[02:02:14]  the approach. I liked the approach. I liked the approach of remix too. It's funny hearing Ryan Florence just like denounce it, but like, like it's tricky
[02:02:27] . Like, let's look, let's look at Twitter's API, but let's just look. Okay. Let's look at a, um, let's kind of
[02:02:37] , where's my page? Why am I not home profile? This one. Okay. Here I am. Now. What does it change when I go? Yeah.
[02:02:50]  Okay. See now I have a new title post replied by Ryan highlights highlights. Yeah. So it changes. What I'm getting at is. It's fine because each one
[02:03:02]  of these tabs has their own title, right? Okay. But if you were to write this component or this page in a router, you basically have a page and then
[02:03:18]  you have like nested three, like six nested routes in it. You have to make sure you get the title and make the right information at the right level of
[02:03:26]  the router. And that all six of these have their thing, which you should honestly. So like from that argument, you could say like the title should actually belong in each
[02:03:36]  one of these tabs. You should not have a title up here. Right. And I load Twitter. You know, you know, so it shows this shows X first
[02:03:46]  before it shows the posts. I'm gathering this, the client's single page app. So it does that. But what I'm trying to get at is what if
[02:03:55]  you want to, you know, show Ryan before the tab or includes information. What I'm getting at is the title information sometimes isn't known until the. Sometimes it's
[02:04:06]  obvious from the path, but this, does this have my name in it? Posts liked by Ryan Carniato. Yes. Sometimes you don't have all the
[02:04:13]  information at the time you go to render the initial page. Yeah. Mostly. And that's how react is handling it too. You know, it's a low level.
[02:04:33]  They don't expect end users to really use it. I get, I mean, maybe they do, but like it's, as I said, it's interesting that
[02:04:42]  pretty much every title, every head management library has always you do title because the browser forces you. Anyway. Yeah. But what I'm getting at is it doesn't really
[02:05:02]  matter if it's outside. Like you could take the metadata coming from something like remix index and feed into this and then get full access. So the fact that it's
[02:05:11]  JSX is only one possible interface. This is, this is the sketchy part. I actually don't, I'm less concerned about having an underlying head thing, deciding
[02:05:19]  the behavior of JSX. Like we talk about making assumptions, you know, when talking about what people want to do, making assumptions about the behavior of JSX is much
[02:05:29]  more impactful on the surface area consideration than exposing a hook that has special behavior. Like this, this has probably more impact over time for support than, than this does.
[02:05:42]  All right. So, yeah, I mean, it's definitely, it should be clear that this is definitely not something that has an easy solution. So, um,
[02:05:57]  and why maybe library framework authors haven't seen completely eye to eye on it. I think that something, this is the solution, but, um, as I said, I
[02:06:14] 'm missing some of the primitives to implement it today. Unfortunately, um, this is one of those examples where my head's already in 2.0 and then I
[02:06:28]  go to implement it. And I'm like, Oh crap. I took that for something. It's really difficult to, to always have your ideas and mindset being in the
[02:06:36]  future and then not being there. Um, so, but I think this gives us more time as they talk about this. Um, yeah, let's, let's
[02:06:44]  move on. I, I think I'm pretty good with this topic. Let's, let's, uh, let's go into the next topic. Let's, let
[02:06:50] 's maybe look at some of the, uh, Elixir, um, or, uh, Jose, um, stuff, uh, live view stuff. Let's
[02:07:04]  kind of go back a bit. What's this whole thing? Yeah. I don't want to jump fully into this week in JavaScript yet, but we covered last stream
[02:07:33] . We covered, um, this whole thing where Jose basically was going through the chat GPD app and found a whole bunch of bugs in it. Right. Right.
[02:07:44]  And I mean, from my perspective, that's what they are. He released another video where he showed how you, um, implement this in live view. And, um
[02:08:00] , I have to admit when I was watching it, I did turn my nose up a little bit. Um, I, I didn't fully understand it. And I'm
[02:08:09]  not going to play the whole video. Let me see if I can jump ahead to something that shows what I'm talking about, but yeah. Uh, it's blurred
[02:08:18]  here. Sorry. Let me see if I can, can I, it's right here. It's exactly right here on the screen. Uh, it's the videos loading
[02:08:27] . Yeah. Yeah. I, I, I will do it on a V2 branch. I, the, our problem is not having split effects. Um, it
[02:08:42]  should just work naturally in that world. Yeah. Of course. Now the video is not loading. This is like, like I can see it on my screen, but
[02:08:54]  it's blurry. It's so frustrating. Come on. Okay. Okay. Okay. Okay. Okay. Okay. Okay. So right now what he's
[02:09:09]  doing here is he's, he's showing that. Yeah. Okay. So what now he's, he's showing how like he can do optimistic updates by basically exposing
[02:09:40]  this JS, um, library. Um, so that basically, I guess this is Phoenix click JS push, delete JS hide to this. So he's describing a bunch
[02:09:53]  of like more or less, I guess there's styles and DOM updates, um, based on this. Um, because for the most part, Phoenix is gonna, or sort
[02:10:03]  of live view is gonna render on the server and send HTML partial diffs over to the client. But for this thing where the, with the optimistic update, you want
[02:10:13]  the update to happen in the client immediately and not wait to go to the server. That's the whole reason it's optimistic. Um, there's a JS API that basically
[02:10:21]  like describes, you know, pushing the event to delete I'm gathering and then hiding, um, you know, some kind of selector. Yeah. JS commands.
[02:10:33]  And yeah, when I saw this, I had like a very violent reaction to it. You know, my reactions are never violent, but I was just like, man,
[02:10:45]  jQuery is back. Right. I know it's better than that, but like when I, when I saw this, it's not, it's not quite the
[02:11:00]  same as like what I was talking about putting your, uh, uh, like ERB templates and knockout on top of each other. It's more of like what happened
[02:11:08]  before that stage. Right. And I actually had a good talk with Jose about this. Cause he was like, he's like, he called this declarative and I
[02:11:14] 'm like, this isn't declarative. This is imperative instruction, instruction. You know, like it's you're, you're describing like push this event, hide the
[02:11:25]  selector, blah, blah, blah. I'm like almost all front end perspectives. They'll want UI to be a function of state, which means that there's
[02:11:35]  a decoupling. That's the declarative decoupling, right? Where essentially you say, and I understand in a sense that I'm calling out selectors here
[02:11:46]  when really that state could be represented in CSS and like look declarative and not look like imperative steps. There is a way to do this with live view for simple cases that
[02:11:54]  doesn't do it. But conceptually the biggest actual difference here has been actually that, that you can decouple it. Like if you say this is optimistic,
[02:12:08]  something over here can, you know, be affected. Like you can optimistically add something to the cart over here. Now you can do that with selectors, but the
[02:12:16]  difference is in like front end declarative libraries, it's a matter of pushing state. And then that state branches out and impacts every piece that is impacted. It's
[02:12:27]  not like, you know, go hide that thing over there and that thing over there. But the instruction secrets is a built in single expression. Yeah. But, and that
[02:12:42] 's part of the problem. Like what if you have this on different locations that perform the same, like this, like, it's like putting all the, sometimes you
[02:12:57]  put the logic in the event handler. Other times you don't put the logic into the event handler. You push it into the state and then the state will push out and
[02:13:05]  make sure that the rest of the app stays in sync. That's why most modern front end frameworks are based on state, right? It's a, you, you
[02:13:13]  get guarantees. As long as the state is always reflected in the UI, you trust the framework. And it means you can update the state from multiple locations. It means that
[02:13:25]  the combinatorics of this is not something you have to worry about. You don't have to worry about if something else is doing this and something else is doing this,
[02:13:32]  the state will resolve itself. So like, it got me thinking a bit about how hard it is to cross the wire. Right. Cause. Yeah. Yeah.
[02:13:46]  It's difficult to be declarative in a UI equals a function state sense in these live view events, because I believe it would require going to the server to feed the state
[02:13:52]  back in, which impacts the immediacy. So it's harder to scale with this approach. Yeah. So like what I was trying to get at is that like in
[02:13:58]  live view, you do have state state lives on the server client doesn't have access to that state. So it's like, it's awkward, right? When, when
[02:14:12]  live use acting in the client from a client first perspective, it doesn't have its same declarative nature in the same way that when a server framework is acting or client framework
[02:14:24]  is acting on the server. Um, it doesn't have its own state, right? We, we, we don't serialize the whole state of the app.
[02:14:29]  Every time we do a request, we, um, we just, you know, send what the server should do and then be like server, you know, tell us what
[02:14:39] 's up. And usually it leads to like revalidation over fetching. We want to make sure like, okay, server could have been impacted from different users,
[02:14:48]  different things. Let's just make sure we have the most up to date data for this whole category of things, because, you know, both sides basically lose their declar
[02:15:00] ativeness when they cross the wire. I don't think any approach has perfectly shared the declarativeness on both sides, only put them next to each other. Like
[02:15:13]  RSCs, for example, can work well when each side stays in their own lane, but how often is that actual case? Right? What I mean by that
[02:15:20]  is like, if you fetch data in your server components, your actions or mutations should also re-render the page. Like they should trigger the server components. It's very
[02:15:28]  difficult to start data from a server component, feed it in, get it into like tan stack query, and then have the mutations work on that data. Because like there
[02:15:38]  could be data, that data could be being used in server portions that won't update with tan stack, right? And at that point, every one of those points will eventually
[02:15:51]  want to be client components. And then similarly, if you're fetching inside the, you keep everything tan stack inside your client components, right? Then server doesn't have
[02:15:59]  access to it. Basically, you have two very separate worlds sitting next to each other instead of being able to really seamlessly have the same model. And I think it makes
[02:16:08]  sense. I think it's very difficult about source of truth. Is it the server? Is it the client? You don't get to say it's both usually. Usually
[02:16:17]  you have to pick one if it's in your realm of like decision-making. And RSCs is like, one side will say the server is, one side will
[02:16:26]  say the client is. Don't fight, right? Which is one of the, I think part of the reason why it's kind of hard for people thinking of how
[02:16:33]  they come from a client side perspective and get here. But I don't know. There might be solutions like abstracting the whole communication out from both sides. But just
[02:16:47]  today is interesting to see like how hard it is to go to the other option. Because what was really cool about his demo is when the updates came in, they were granular
[02:17:02] . Like he didn't have to fetch all the data. He knew that they could just send that specific thing that changed. So like this is a DX problem more than
[02:17:11]  it is a UX problem. It's also like, and in the sense it's like, I don't believe the solution would scale as well as a client side framework,
[02:17:20]  but that's literally what a client side framework's bread and butter is. And on the positive, he gets to send these slices, the, the serialization format of
[02:17:30]  the actual communicate updates when stuff actually settles is going to be way better than anything we can do client side. I mean, there's, there's a real cost
[02:17:39]  here. You need a persistent backend, which is not like a freebie. The whole computer, like the whole web has moved away from persistence or at least separated stuff.
[02:17:50]  Like even before serverless, um, you know, we were already doing microservices where we'd, you know, auto scale up a bunch of servers, scale them down
[02:17:59] . That's not something as easy to do when you have persistent state, um, persistent connections. Um, there's, there is a real thing why this isn't
[02:18:09]  practical for everyone, but I have to admit when you have that ability, you know, there, um, this is a great simplification, um, for incredibly like a
[02:18:20]  lot of cases. So it makes it less often than the server and client have to fight over Dom state if the server sends small dips. Yeah. Yeah. The problem
[02:18:42]  is depending on the server to do that work every time seems like a lot. Um, like I understand the web sockets, but like, you have, I'm going
[02:19:00]  to have a hard, like, while I, I agree that the communication format is incredibly powerful. And stuff which makes sense, you know, especially when you're doing
[02:19:08]  large changes, like something that renders in the client is going to be snappier in the client. I don't, I don't like it, it just is
[02:19:17]  like, there's no avoiding that. Right. Um, but like it, like, I really liked this because like, I could see the solution forming on this side
[02:19:32] . And I was like, like, this goes beyond what I've seen most server side. Like he's acknowledging that there's a gap here and coming up with something
[02:19:43]  in a very difficult space on the other side. So this is a, you know, a decent, like pretty decent step forward from this side. Uh, you know
[02:19:53] , for the longest time client side frameworks could be just like, yeah, this extends that functionality considerably. So I thought this was really cool. Um, yeah, cause these
[02:20:03]  topics actually hold kind of run into each other, which I kind of like is, he wasn't, he wasn't done though. He wrote a whole article about,
[02:20:13]  um, remixes concurrent, um, submissions and saying they were fundamentally flawed. And it's an interesting read for those who haven't. I'm actually going to share this
[02:20:28] . This is probably even more interesting than some of the videos. I knew this was coming out and it has a lot of different things. Um, a lot of interesting
[02:20:41]  talks about like timelines. He's saying that, yes, in the case, when everything runs in the order you submit it from the client, you know, things are good
[02:20:50] , but it gets more interesting when things process. I mean, even this is still fine, but when things start processing here, where like there's different spacings and different
[02:21:00]  gaps, uh, the truth of the matter is like. In here, you can end up with the wrong states potentially. The truth of the matter is I think a
[02:21:12]  lot of frameworks client side actually work more like this. Like, I'm not saying they don't do the revalidate call and only do in the last one,
[02:21:18]  but they have like a race condition thing, like transitions built in. That means that the, even though they do the revalidation calls in the middle, depending
[02:21:27]  on what state you're in, you determine whether they show the intermediate state or not. Um, so, uh, from that perspective, it's more like this than this
[02:21:37] , but this is still problematic. It's still possible that the check marks happen in a weird order. Um, right. And he goes on to talk about, uh
[02:21:47] , single flight mutations, right. Because they shorten the gap, which means that it's way more likely that these things can happen out of order because they're closer together.
[02:22:02]  Which again is true, but again, because of the client side sinking, uh, of the, of the transaction, it's more of like a, this case than
[02:22:19]  it is like, uh, this case. And he, he basically said that the solution to the problem is either do everything serially, which is like what next JS
[02:22:32]  I think was doing originally. And everyone made fun of them because like they're doing the trial X demo and Ryan tried to move multiple cards and like, it basically had to
[02:22:41]  wait to do them serially. Or he's talking about having stateful servers, right? Um, he's saying that like with, uh, what was he saying here
[02:22:52] ? He's talking casual. I think there's a number two Phoenix live view is to keep open connection to client server with web sockets. This way events are received
[02:23:00]  and processed in order, which guarantees the database reads all updated, delivered in order, but they can also easily process concurrently when using Elixir deemed safe to one potential
[02:23:08]  caveat is. Sorry. Web sockets. Can you do long polling issue with long polling is the back to each separate HTTP requests. You need sticky sessions, casual order.
[02:23:15]  Therefore. Well, guess what? Something built into the Erlang VM process. Let's him keep sticky sessions automatically. And he has a solution. That's, that
[02:23:25] 's awesome for everyone else. Um, it's cool. Um, Dev actually, uh, suggested something, which is, it's funny cause I read it and didn't
[02:23:35]  really get what he said. And then I was like, how do I solve this problem? And then I started solving it and I'm like, wait, this is what
[02:23:39]  they have said earlier. Um, uh, he, he basically describing repli cache. Um, but it's the idea of basically, um, using the database as
[02:23:49]  a mechanism of keeping, uh, concurrency in the client. This does feel like the only solution. solution. If this is, you know, something care about.
[02:24:01]  And I I've seen systems like, look at that, but I think while this is a great academic paper, as usual, we have to like step back and stick it
[02:24:13]  into, uh, cons into context. Right. And I actually am not sure anything in this article actually matters. I mean, it matters, it matters, but let
[02:24:30]  me, let me, let me, let me, let me go here. Like, even before considering options to UI, the second you keep state in the client, there
[02:24:44]  is more than one. And there's one more than one user. There's potential for tearing. It's fundamental. Okay. So we always have this problem from a
[02:24:51]  client perspective, right? If you don't have like, I, I, he's saying that the premise here is that optimistic updates. Like if you're the single soul
[02:24:59]  actor, you should always see stuff consistent with your own UI. And I think from a user experience, uh, perspective, this is important, but what's interesting is.
[02:25:13]  We can have weird stuff happen. Like, even if you forget about the weird timings of the save of the, of the, you know, the one user doing
[02:25:21]  three really quick things and having it getting all the sync. They can be doing everything perfectly and still have stuff jump in because the server happens to someone like added or deleted something
[02:25:33] . They're working on the server in the middle of them doing this operation. It can completely happen even when everything's done perfectly in order without weird processing issues, simply
[02:25:43]  because it's the nature of things like, and because client frameworks can't make assumptions about what database you use. Even statefulness assumes too much. You can't assume
[02:25:58]  that they have a persistent connection or they can have sticky sessions. They're probably never going to actually solve this. It's funny. Actually, I wrote this dev one.
[02:26:05]  He's like, you know, with unstorage and KV, we could just build this straight into solid start actions. And it would just work this way and work perfectly
[02:26:13] . And I'm like, then you're telling everyone that they need a KV store. I mean, to be fair, I think next, maybe that ship's
[02:26:20]  sailed. Next.js is already kind of forcing everyone along that, those lines, but like, okay, you know, like maybe build something like, yeah. I mean
[02:26:35] , I don't know. Like it's, it's not that it doesn't matter. It does matter. It's just like, let me explain what I'm getting
[02:26:44]  there. I'm getting there. What I mean by it, it's like, but my experience has been that while this sort of edge case is more common than I
[02:26:57] 'd like to see the vast majority of the time it is caused by bugs in correct code, rather than weird timing issues. They happen, but they've always happened. And
[02:27:03]  yet we still have client apps. The, the reason is it's not that, sorry, it's not that the article doesn't matter that this whole thing was like one
[02:27:10]  of the best bait and switches I've ever seen. because the bugs on chat GPT have nothing to do with this. I'm almost going to get, he,
[02:27:25]  he reproduced them too consistently. Like every time he clicked on it or did the thing, it broke. And like, I, I, I did go over this
[02:27:35] , I think a bit on last stream. Like I, we would talk more, like, is it like, are the bugs, the framework's fault? Maybe we should
[02:27:45]  take responsibility on it, but it's not this distributed stuff. that's actually causing the bugs. Like it wouldn't happen so consistently. It would happen those odd times
[02:27:55] . It's because my guess here is most end users would not be able to tell the difference between this sort of tearing caused from multiple users messing with stuff at the same time
[02:28:10] . And the kind of tearing that's caused from these optimistic updates getting in the race conditions. Now, don't get me wrong. When the optimistic updates. I
[02:28:21]  mean, if you have code bugs and it can be produced, um, consistently, then yes, you definitely notice and you go, this is weird. This is broken.
[02:28:30]  But if it comes down to the situation where it's being caused because of these weird race conditions, I imagine that the average end user would not be able to tell the difference
[02:28:44]  between the rare time that happens and the rare time that it's caused from just general tearing. which means that like, I don't think most people will even like,
[02:28:54]  like this even registers in, in like most people's books as a thing you, you have like, you have to up. Like with optimistic updates, it's way more
[02:29:04]  likely that something like this could happen, right? You're actually encouraging patterns in which people are interacting with the UI in a more fluid way where they're sending more requests and
[02:29:12]  doing stuff, um, you know, more rapidly, not waiting to press the save button. But it has to be quick enough to happen. And it has to happen
[02:29:23]  in a way that like the back end also ends up handling stuff in a, in, in like these out of order kind of situations. Right, right. Right.
[02:29:40]  Right. Right. Right. Shopping cart, buy button or off point. I'm saying this happens all the time, even without considering this, uh, a better example
[02:29:47]  than a shopping cart. Shopping carts only to you. Um, auction site like eBay. Right. And pricing and bidding. Right. Right. Right. Like,
[02:29:58]  like, there's always some amount of this kind of bug to turn the distributing nature. Like, I, I, I, yeah, I mean, if, if
[02:30:20]  someone wants to put the safeguards in place, I think it is a, and if I'm dealing in commerce, I think it's a thing that I would really
[02:30:32]  strongly, strongly consider. Yeah, I, if you don't have a server with a permanent connection telling every client what the state is and being able to be that single
[02:30:47]  source of truth, this will happen in every framework to a certain degree. Like his, his article isn't in any way. Like, I don't think it's
[02:30:57]  incorrect. I mean, Ryan's making it sound like there's some like technical detail he's missing. I'm interested to see this. I mean, we can always reduce
[02:31:10]  the impact of these things. Right. That's what we tend to do. Um, but like what I'm trying to get at is you watch that chat GPT
[02:31:25]  video and you watch all the stuff that's going on. And I even said it before he wrote this article. It, it had nothing to do with these timing bugs.
[02:31:33]  It has everything to do with that. It's maybe too difficult to write optimistic state. I mean, let's use solid start as an example. Solid start. Good
[02:31:41]  start. Let's go to the, uh, is there article or no, get started. I'm gonna go to the GitHub and I'm going to look at the,
[02:31:53]  one of our examples. I'm going to look at the, to do MVC example. I, I, I just could pull it up for a minute. We did
[02:32:00]  this last stream, but sometimes optimistic updates are difficult to write because figuring out the remaining count is both understanding the current count of the to do's. This is an easy
[02:32:14]  one. Adding the existing like the to do's filtering out the ones that are completed and the ones that are pending to be removed. Like any of these calculations that you end
[02:32:22]  up doing, if you just get the, some of these states wrong, or you miss some of them. Like even a to do app shows like incredible amount of like
[02:32:32]  calculations to figure out just like what the right count is or making sure thing. I actually released this demo and ended up fixing it multiple times before I was like, like
[02:32:42]  actually was like, oh crap, I missed this. Or I missed this. Like, like it's really easy to opt, put some of the impact of optimistic updates in
[02:32:50]  and miss some of the others. I was saying earlier that having the state feedback in is a blessing. And it is because you get to write the logic in such a
[02:32:59]  way that you understand that like these same updates, like toggling all tie into multiple. It's not on that one, but like tying to multiple different calculations to update different
[02:33:11]  parts of the UI. I think this is much better than basically like, you know, imperatively going, you hide this, you do this, you do this,
[02:33:19]  you do this, but you can still screw up this logic. Um, the thing is, once you write the logic, it's quite beautiful. You can understand how all
[02:33:27]  the drive state connects to each other, understands the impact of the updates, and it actually reads, but it's easy to not see this. Yeah, at least removing
[02:33:43]  stuff from lists. If you're pageant, you can remove multiple items in parallel. Yeah. I mean, deletion sometimes from an optimistic standpoint is the one that
[02:33:54]  might be the least likely to get you in trouble because, oh, I guess, I guess, you know, with Jose's example, you can still have the server return
[02:34:03]  the results with the stuff. already, like not deleted yet and have cleared the deleted, um, state. Yeah. I, in. So like, but yeah,
[02:34:28]  I, what I'm getting at is the bugs in chat GPT are of this nature, like missing a condition. I'm almost like a hundred percent positive because like
[02:34:37] , if you look at the, sorry, I was on a private, but if you look at, um, sorry, where, where are we? If you look at
[02:34:48]  like, like the way, just watch the original video. Like these are, these are things that happen like every time, either they weren't optimistic or they were partially optimistic
[02:34:57]  or whatever. They were bugs. Yes. Yes. Yes. Uh, you're saying that these are fully integrated. So adding KB. Yeah. That's what
[02:35:06]  I meant by the client framework saying that the client frameworks just don't have the option to make those kinds of assumptions for you. They can't say that this is your
[02:35:17]  solution. I mean, next is starting to, but then, you know, now we only come out of the box for Vercel, you know, the first few
[02:35:26]  weeks until others catch up. I mean, there's two solutions to that problem work with all your partners to make sure they can support all your features at release time.
[02:35:35]  But I mean, maybe that's counterintuitive for a business that uses next as a funnel. Um, or just be like, we are the Vercel framework
[02:35:45]  and own it, you know, like, I don't know. Like it's, it's natural that you are going to, if you want to have capabilities like this
[02:35:57] , use infrastructure pieces you can take for granted. Like you can in Phoenix or live view or rails or whatever. So, yeah, I mean, we'll see what
[02:36:07]  Ryan Florence and Jose have to say about this. I think it's, it's, it's real. I mean, I've, I've implemented systems before where,
[02:36:19]  you know, I've had to like check order and it's a, it's a difficult problem. I'm just saying it's also kind of completely out of the scope
[02:36:27]  of client frameworks. Like in a sense, having a client framework doesn't stop you from, you know, having a backend with sessions. His gripe should be more
[02:36:36]  with, in a sense, serverless than it is say with remix. Like the problem is with the way we approach infrastructure less than the specific client side tool, because it
[02:36:49] 's really outside of their responsibility. Anyway, I thought it was interesting conversation regardless. Um, and it's really ties into, to this. I wanted to show
[02:37:12]  off this demo because we remade the, the, the, the, the Trellix demo ourselves. And so I'll start, unfortunately, um, or fortunately,
[02:37:22]  depending on how you look at it, I guess. Um, uh, um, let me just put my secret credentials in. Not that it really matters. Um
[02:37:34] , we did not get the Ryan Florence review. I think we were several months too late. And if you want to understand why we were several months too late, it's
[02:37:48]  a, it's a combination of things. Um, right at the time when the demo was originally being made, we had solid start and we, people, bunch of
[02:38:06]  people around our community. We're like, let's build this thing. We were positive. We could do better than the remix demo. Of course. Like that's,
[02:38:13]  that's, that's what, that's what we do around here. Right. We make really cool demos. Um, and a couple of different kinds of groups started
[02:38:23] . There's the DX team, people like Attila and Daniel working together. And then, um, they, so they started doing a thing, but completely separately, um
[02:38:31] , Benton, uh, was like, I'm going to build this in solid. And I was like, reached out and I was like, but yeah, that's
[02:38:36]  really cool. And they, they had some like challenges at first, but actually came up with a solution that I helped debug a little bit. But it was basically what
[02:38:46]  I would have come up with compared to what the others are doing, which was much more like react. Um, because when I see a demo like this, I immediately think
[02:38:57]  what is special about solid solution that can make this, you know, really powerful. And we talked about this demo actually indirectly on stream for several, um, the last
[02:39:11]  months, because I realized through this demo, looking at Benton's code, how much work it was to make it even more optimal and solid today. Um, what
[02:39:24]  ended up happening was, um, um, what, what ended up happening was that, um, the, the group, we managed to get both the groups together.
[02:39:37]  Right. So Benton joined up with Attila and Daniel and, uh, Brenly and they, they, they, and they started their effort. And at a certain
[02:39:47]  point, I don't know if inspired by the stream, uh, Dev also joined in and actually re implemented solid 2.0 features back in to this demo. To
[02:39:56]  make it as optimal as I would hope it would be. And by the time like this all happened, it was just months later. Cause when I looked at the original demo
[02:40:07] , I'm like, we could publish this, but like, if anyone looked at the code, you know, they might like turn their nose up at it a little bit
[02:40:13]  or something. I don't know. I care about what the authoring experiences and what it feels like to look at the code. And it wasn't up to, you
[02:40:19]  know, where I wanted it to be. Um, so we kind of delayed it. So at this point, I don't even know if Ryan Florence is ever,
[02:40:27]  um, going to look at it. It's perfectly fine. If he doesn't, we've talked about this demo enough and honestly, he might have to change his scale
[02:40:36] . I don't know if you'd have to add it in an S tier maybe, but like, um, this demo goes well beyond what is even possible in react.
[02:40:45]  Um, so it seems like a good topic to talk about for a few minutes here. Um, cause while there's a lot of, um, I don't know.
[02:40:53]  Um, while the authoring isn't quite what it's going to be in 2.0, this kind of example is going to basically be super trivial to do with
[02:41:05]  the future reactive system. We're working on, which makes you really, really, really happy. Um, the first piece obviously, um, which is related to the
[02:41:13]  last topic we were talking about, were those single flight mutations. You know what I mean? Like, uh, if we go in the network tab, if I go into
[02:41:26]  a board, uh, this board has a lot more cards on it than it used to if i drag this over you're going to only see one request and you're
[02:41:36]  like okay well i mean it's not too crazy to think that you could you know do a mutation and send back the response you know the update in one go the part that
[02:41:47] 's crazy about this or crazier about this let me see if i can pull up the github is is what the authoring is like to do this um we've
[02:41:55]  talked about data fetching with solid start previously before but sorry what am i doing i'm not going to solid start i'm going into let's just globally search for stre
[02:42:06] llo um i guess i have the code locally too don't i yeah why am i why am i going to github i have the code locally it's that yeah
[02:42:23]  let's full screen this one it's that like um let's go to the routes go to the board okay lovely i love when like typescript gets behind it's probably you
[02:42:39]  know what it is it's probably because i haven't installed it this is this is my problem on the i'm still on the new computer right let's get this going
[02:42:48]  yeah i haven't installed anything but what i'm getting at is what's cool about this approach is that it uses the familiar can stack or remix style thing where okay we're
[02:43:03]  defining an action here but let's forget about the action for a second fetch board right we're going this this is this is our server function if i go over to i
[02:43:10]  think it's the lib here index and find myself fetch board you're going to see a server function set up with a cache right so this is going to have like a cache
[02:43:23]  key get board data sure whatever and then somewhere else we're going to perform an action on that board um i don't i guess i should see where the actions are coming
[02:43:35]  from um no these this looks like auth stuff let's see where the actions come from from the board they're to do to do create store use submission yeah create note where
[02:43:51]  is this coming from note okay i guess put the actions in here it doesn't matter what i'm getting at is you'll see something like this like an action and then that
[02:44:05]  action will know that it imports fetch board and says revalidate the board basically like the thing with that key so um you could also put a string in here or whatever
[02:44:15]  but essentially you can get from the cache function you can just grab the key or the key for a specific set of arguments um for a specific id or something and you can
[02:44:24]  just tell it to revalidate um that so when you're writing your server function apis you know essentially you can basically just like connect the keys so to speak um
[02:44:37]  and make all your logic like every time i you know whatever this is create a note i know that we have to do revalidation um on the board and you
[02:44:48]  can wire this together you know and essentially when you get to the board itself you just get you know this ability to fetch the board you know pre-loaded if you want
[02:45:01]  but fetch the board here in our create async and then in the board component here take our actions and actually um use them both grabbing the submissions for the optimistic updates and
[02:45:17]  uh i don't know where i'm trying to see where because i actually haven't like what do like in the column it's probably in here rename column so it's
[02:45:38]  oh is it actually in the node itself yeah yeah it's down here you can actually yeah let's let's up what's going restart type do i so the the red
[02:45:51]  squigglies did start bugging me after a while okay um what i'm getting at is how how are they doing the actions here i don't even looked let's let
[02:46:03] 's look at them are we using the actions uh strictly in forms or we yeah we're calling them update action okay so we're just calling in our note we're actually
[02:46:14]  essentially importing our same action functions doing them on specific actions and then in the board like the top of the thing that renders the board above it we're actually taking the
[02:46:28]  same reference to the actions and feeding them back in through um optimistic updates what these submissions are so you can already see this kind of um using the import reference as basically almost like
[02:46:40]  a key we're essentially isolating or sorry we're like yeah isolating the actions from the optimistic updates they're in different components and you can see you can just set all the
[02:46:52]  logic to kind of wire itself together um and then feed these optimistic updates back in and okay like what i'm trying to get at here is this is a very typical like you
[02:47:09]  know you can see it in these actions it's a very typical like do do the mutation revalidate the key kind of tan stack thing so this is set up
[02:47:21]  without telling it to return specific data you know without telling it to like go you know when you do delete or do when you do an add add send back just the thing you
[02:47:34]  add and no client side logic about how to insert it into a cache going okay you add it on the server now add this or this one's been deleted now you delete it
[02:47:44]  none of that logic is written you just you just do revalidate like you do with tan stack it's or remix and but it's happening in a single flight
[02:47:55]  because what we're doing here is when the server action completes because of our uh serialization which i covered last time um we have this ability right to um send back the the
[02:48:13]  the board data and it's because when we revalidate we immediately send back start sending back the uh response but we basically grab the promises of the data and we
[02:48:25]  stream it we actually start essentially start rendering the next page we go oh we're reloading the data on this page or reloading the you know with and the key we just
[02:48:35]  run all the preload functions on the server instead of running them on the client for the route and then essentially collect all the promises that match the key that's getting updated
[02:48:45]  and then send those promises along and we don't have to wait for that data to come again not blocking to basically get the client the knowledge that hey stuff's happening and that
[02:49:01]  way we don't have to we start fetching when we're on the server at that point and we don't have to wait for the client to come back and do
[02:49:07]  the jump i've explained this on stream multiple times before i just wanted to show it in a yet another example um so you know this is this is all cool if i
[02:49:19]  turn this down to where is it uh can we throttle um why am i not seeing it here no throttling if we make this slow 3g what we should be
[02:49:34]  able to see is that if i can move these fast enough there's going to be multiple in flight at the same time now don't let this fool you they'll come in
[02:49:42]  in different orders and they look like they come in sequential when the actual client will apply the the server results will be if there's multiple in flight it'll actually wait for them
[02:49:52]  to consolidate um because they wrapped in a transaction it's not the time that they show in the network tab necessarily but it doesn't matter because the optimistic updates are already ahead
[02:50:04]  of it so when these actually reconcile the client is doesn't really matter for the end user because these things have already moved you know you know from their perspective oh hey daniel
[02:50:17]  thanks for stopping by yeah no um good luck with the talk so like okay optimistic updates pretty cool and i i as i said i i've i've i've i've
[02:50:38]  covered this bit um in that video that i did but what i wanted to like take a little bit more time looking at here is is that is how this actually mechanically
[02:50:53]  handles the um the mutation because as i said the live view example that uh was really cool um because it actually sent only the diff data and if you look at this is not
[02:51:04]  what we're doing we're actually sending the whole freaking board on each of these um updates right it's like remix right we don't have to send all the data for the
[02:51:12]  page but we you know if the board is one data set one key like tan stack every time we we you know are ready to you know say hey revalidate
[02:51:23]  we're gonna grab the whole freaking board so yeah there's there's more bandwidth here this is not as optimal even though this halves the latency um this hasn't got us
[02:51:36]  to live view per se you know in terms of optimal communication patterns right like um this is just remix or tan stack done in one request instead of two requests so yeah there is
[02:51:50]  bandwidth consideration but the client side part of this i mean here's the thing if you're using those tools anyways you're doing these kind of like we got here for a
[02:52:03]  reason the fact that we are fairly okay with revalidating based on key comes from a lot of reasons right it comes because like server changes right and we want to make
[02:52:17]  sure that we don't have tearing we have to trust that you know at a certain point we should update the even though we own the state in the client we should update our
[02:52:24]  data we can't just get too far apart you know if we only pass back the incremental changes when the client's the truth well we could get in a very different state
[02:52:36]  than the actual reality of the database because we know that we added one card the server knows that someone else deleted two other cards but we that was never communicated to us and then
[02:52:49]  maybe you know we'd delete that card that they deleted like it's not hard to picture a scenario where if the client never synchronizes um and that requires fetching data
[02:53:03]  that we don't know has changed um that we get out of state which is largely why most client frameworks with a lot of revalidation and whatnot they don't want
[02:53:13]  to fetch the whole world but within the scope of the work that they're doing they're okay fetching you know a specific key or a specific thing on the area that
[02:53:20]  they're working on i mean it's it's back in the day you do a full page reload so is it on like this is a win from there i think that was
[02:53:28]  remixes like logic behind this and we get even more granular with you know specific keys is everyone still alive out there so you guys been really quite in the chat the last like
[02:53:40]  10 15 just just just just making sure everyone's still still out there have i have i have i gone too off the deep end here you guys seen enough of this demo
[02:53:52]  no you did die huh i'm dead inside well yeah and it's not our business it's the best way to do it so but i do care about it which is
[02:54:15]  why a lot of the same primitives that i've been designing in solid 2.0 that are going to enable the next thing that i'm showing are going to make it
[02:54:23]  so that if the database will give us the right information we'll be able to do even better things with it right i don't get mechanically adjective i use that when
[02:54:44]  i'm talking about things that we do specifically um for like how they work but not how they yeah i don't know how they look or how like their philosophy or reason
[02:55:05]  for being just like purely looking at like the nuts and bolts um so uh what what i want to show about this board it uses a really interesting approach in that we already
[02:55:23]  saw the optimistic stuff getting pushed back in but what does it do with that well this is not unlike remix you get all your optimistic updates i don't know what they call it
[02:55:33]  but similar similar to this and then um you but you do we use a single function and we actually grab all of these as these you know mutations come in we basically append
[02:55:49]  them to a list because you have to understand the mutations have to apply in order if you apply mutations out of order like reorder like moving stuff from the list you can
[02:56:01]  see how it could get weird because like if you move this above this second to zero and second to zero again and then one zero to five that actually what's going on here
[02:56:14]  sometimes sometimes i miss this my biggest problem with this demo is sometimes i miss the drag zone yeah i did it again why do i always miss the drag zone um you can tell
[02:56:24]  because not even a request goes out um if you do those and then try and apply them out of order um stuff is going to get weird because the thing that was in
[02:56:36]  zero isn't the thing that was like there's a whole sequence of events so essentially the mutations have time stamps and they have to be ordered right so you collect them so
[02:56:50]  collect them these mutations and then essentially you use them to create the board right so if this was react you'd collect all those mutations now anytime the board updated from the server or
[02:57:06]  a new mutation was added you would take the board clone it go through the list of all the mutations and make that the current state you have the you basically you have the
[02:57:20]  base state which the board and you have the mutations create the new state render it react will do the diff during rent like during its patching and you'll see you know the
[02:57:30]  changes apply and if you add one more mutation again you know you're re-rendering the components so you're gonna take the board because it's derived get all the
[02:57:43]  mutations clone the board apply them all again pass them in render them to jsx diff them do it again so and now the board comes back same thing clone the board make sure
[02:58:00]  that um any existing uh mutations that haven't been processed yet make them apply to the board render the jsx diff the board you just do this over and over and over
[02:58:15]  again every process every time you move a card change a name do this you recreate the clone the board um apply all the mutations render the whole thing in jsx diff the whole
[02:58:30]  thing again so we thought we talked a little bit about this history but it's like our first approach to this was actually very similar to react which was essentially what if we
[02:58:44]  just you know you know every time listen to the board apply the mutations do this it's it's actually not unlike this um function i think the biggest difference with this function is
[02:58:59]  the is the idea of time stamp which is something that we haven't uh which we haven't which we haven't looked at here but the general idea would be again you
[02:59:11]  know get the board apply the mutations diff it but this uh what they did here which i'm actually not seeing exactly how it's working in the second there the i realized
[02:59:24]  that and i'd show this on stream with with one of the things i was working with uh with the crate projection um if you knew the only time you actually need the diff
[02:59:35]  in this example is when the new board comes from the server because at that point you don't know what state things are in you just have the like fresh data from the server
[02:59:43]  that big chunk of json you're going to need like stop maybe the server added something that wasn't used two users on the site you need to do a diff at
[02:59:51]  that point right you and maybe you know your mutations are applied that's the only time you need to do the diff so what they did is using the timestamp when the board
[03:00:01]  only when the board itself updates does see see how it untracks um yeah see it untracks get mutations so when the mutations update this doesn't run only when
[03:00:14]  the board updates right and then on this side on the effect side a second effect this one gets the mutations and this one does see reconcile is how solid stores do diffs it
[03:00:29]  does a data diff and then basically wherever it finds differences it notifies individual signals so like if the whole notes you get from the server is identical to the notes you have
[03:00:40]  nothing gets notified and updates if from the server one of the text of the name change then notes dot you know notes zero dot you know text or whatever whatever listens to that one
[03:00:54]  thing that one cell is going to update the text you you compare the data but you don't re-render any of the components or do anything right so in a sense this
[03:01:03]  was already like the basic example is already an improvement over the way react would approach it but this idea here of untracking the mutations so that it the mutations update a
[03:01:16]  separate effect that's different than the one that does the diffing you'll see down here the second effect does no diffing it calls produce when it applies to mutations which means
[03:01:27]  and it does this time stamp filter basically it's only each new mutation as each mutation gets added and maybe a couple of them get added before this effect runs like quickly or
[03:01:40]  something it'd be pretty hard to pull that off it only grabs that one it doesn't care about all the other mutations in flight it just grabs the latest mutations since the last
[03:01:49]  time this effect ran and once it has only that one it will apply it which means use produce on the store it means that when you actually update the thing it's actually
[03:02:00]  just updating the one signal signal so what this means is instead of cloning the board cloning or applying every mutation sending it down to the render diff the thing only change it
[03:02:14]  updates what this does it goes okay give me the mutation the new one oh i see that it updates one text so update the one signal update the one signal in the dom
[03:02:25]  nothing else runs so the mutation in a sense is as optimal as if you were doing client side like this is the optimistic update like if you wrote this with no optimistic updates with
[03:02:37]  no like you're just writing a client app that you didn't care to persist if you were going here and you were going to just do to change the name on this card
[03:02:46]  um what would happen is you know in solid you just update the signal for this one thing and this one thing would update and nothing else would re-render nothing else would
[03:02:57]  run you just update its pinpoint what's cool is that with this example is the optimistic part is like client app because it's just like state being fed back in it's it
[03:03:08] 's it's this is probably the biggest benefit of the remix optimistic approach because it's like these things are just state we know how to deal with state and the the real
[03:03:22]  icing on the cake is that yeah we go we send the end optimistic update which means we immediately update the dom update that one text thing and we go to the server and say
[03:03:33]  hey this has changed now if the server returns the exact same data that we have you know it applies the optimistic update adds the new name when we go back and let's
[03:03:43]  say that was the only mutation so it does nothing here you'll get the board which is a create async we looked at the fetch port you'll re-trigger just
[03:03:52]  get the data and then it'll go okay let's diff the updated board against the board that's there and that board that's there has the optimistic updates because unlike when
[03:04:02]  you derive stuff like directly and you're like doing this mutation and cloning approach your projection here of the board contains the current state of the application like the trade-off with
[03:04:16]  mutable apis is that you can't get the previous state you have no way of just like starting over it's hard to reset you actually have to diff to reset but
[03:04:25]  because you have the board as it is you know like client side like my state shows that this name has already been updated optimistically when the server comes in and goes oh
[03:04:37]  here's here's the fresh data again and guess what the name is updated it sees the updated name already and goes okay those are the same i don't need to do anything
[03:04:47]  nothing else updates it literally gets here it goes okay here's the latest diff oh it's exactly the same done no rendering so in the process of this whole interaction the client
[03:04:59]  signal updated a text node none of your components re-ran and we had full optimistic ui essentially like like that i i feel like i'm way more excited about this than
[03:05:15]  anyone else it just this is gonna be easy to write in the future instead of doing two effects you'll be able to just write a single primitive that does this but like
[03:05:25]  essentially from the client side perspective it doesn't get any more optimal than this and i i see a certain parallel of this with the live view because the live view they got the
[03:05:47]  save sending the data because they know the state and they know what they diffed on the client but live view doesn't know this like the state of the optimistic yeah it
[03:05:56] 's it's really interesting do you know what i mean like yeah i i actually a little bit curious how they handle that maybe i'll bug jose because technically their optimistic client
[03:06:12]  side approach um is independent of the state of the server where like the server comes back with the diff but the optimistic update is still applying via the js commands and then it
[03:06:24]  goes okay i'm gonna stop yeah it's interesting i mean how it's not necessary you could just like skip this whole mechanism and literally just um send that stuff but as
[03:06:48]  i said over time you would drift apart like if you built like it's kind of crazy when you see this and that's that's what you think you're like okay
[03:06:56]  now that i've literally optimized every other part of this can we just not send the whole payload and it's like that could have been your starting point right like you could have
[03:07:04]  just been like okay i'm not gonna do i'm not gonna do this i'm not going to uh i'm not going to use like a loader action pattern i'm
[03:07:14]  just going to make an api where i you know when i add something the client you basically have to tell the client how to reapply the changes that you did on
[03:07:24]  the server it's like the old graphql pagination problem right you basically go okay now that i got the data back now i'm going to repeat the action in the
[03:07:32]  client or and do it like it's completely possible to do said thing the difference here is that the we managed to add this capability here without changing the dx like it's
[03:07:46]  it's the revalidate thing i mean yes you could not you could choose not to refetch the whole board every time but funnily enough um you could you
[03:07:58]  could also choose to save the board at certain intervals or whatever right i was just like funnily enough um i think this is almost where we end up these days in
[03:08:12]  these kind of situations where um we we we do we do do this i mean it's possible that like this might even be just the extreme case for this kind of scenario like
[03:08:23]  when i think about the optimistic updates and these features making a fully sustainable travel explorer is not what i'm usually thinking i i feel like for something like that um like especially
[03:08:35]  if it's multi-user yeah websockets do make sense right like if you're multi-party multiplayer it's just interesting that you can basically take this paradigm that already
[03:08:50]  exists that people are already doing and just make it that much more optimal just refresh the page right i mean when i looked at this demo the first time i was like wouldn
[03:09:07] 't it be interesting like i don't know how well it could work but we did this the easy way because it's like we react when we mix it but could each column
[03:09:15]  like there's no rule to say that the whole board has to be the single thing you fetch right like what if like it's a little bit trickier from uh yeah
[03:09:29]  how would you wire it that way but could each column be its own key so to speak and then you could invalidate like nesting is interesting right because you if you get
[03:09:40]  the board and then you're like yeah i don't know i i've i've thought about this a few times that if it would be quite possible to encode information but
[03:09:49]  like when i first saw the demo i thought maybe this is what they were doing um like saying like like have actions that are like move between column one and column two like
[03:09:57]  another similar demo could be instead of having one board having like like the fact that the the columns are dynamic makes this a little bit trickier um but like if you had a
[03:10:09]  situation where you had three fixed columns it's just easier to talk about i don't say they have to be fixed you could picture that you could fetch all three columns um and
[03:10:19]  then only invalidate a single column and then have drag and drop between the different columns trigger actions that revalidate only the specific columns do you know what i mean
[03:10:28]  like you could be like okay when i move this to here i have to revalidate this column in this column right like the key base system can go more granular it
[03:10:38]  just comes down to like what the logical separation is like don't get me wrong like if as i said if you're getting to something that's like really on the extreme
[03:10:47]  of this um it's probably beyond the scope of the specific feature like it you know the same way when you look at remix and you're like this is really good for cr
[03:10:58] ud like amazingly good for crud and then you're like okay i want to do something a little bit more interactive remix can get you there but at a certain point you're
[03:11:03]  just like maybe not quite the optimized for that zone i feel like this this gets you all the way up to like using can stack table or something like that's like or
[03:11:21]  uh you know rest of soul ag grid like this this is what gets you you know to to a certain point where you have to like you're like the the app is the
[03:11:33]  table like this is about i think this is towards the end of the spectrum of like doing page level invalidation you have to do this if you you you could but i
[03:11:49]  mean you're still fetching the whole table i mean it was more like if we could separate the keys right but yeah anyway uh it's as i said this i i
[03:12:10]  quite enjoyed realizing that in the end that you know what am i i i wonder i never thought about doing this maybe we should look at okay forget about the network i kind of
[03:12:24]  how much i mean i don't know but how much um performance like how expensive is it to move a card did that move i i don't i don't know it's
[03:12:41]  it's just yeah the problem is i'm not it's always hard when you're not in it but then i have to log in again uh not in like an inc
[03:12:53] ognito thing i don't like i i was just kind of curious if we could like see where the work was getting done actually a better example would be maybe ren
[03:13:21] aming the card like if i change this to ggg click out because like so little work has to happen to to actually like update and then when it comes back in like
[03:13:44]  it doesn't even need to i mean it's hard when it's minified get pending like it doesn't need to run the dom like there's like yeah yeah i can
[03:13:53] 't really show it well like yeah i mean this shows it well 0.4 milliseconds processing like yeah i don't know it's yeah it might be fun to compare that
[03:14:11]  to doing this in like remix or react but i don't have that in front of me so whatever all right yeah this i this is the problem i feel like sometimes some
[03:14:33]  of the topics that i i care about these days like stuff like this demo and solid 2.0 and even the metadata stuff is almost getting too far away from like developers
[03:14:43]  day-to-day concerns so like it's just not as exciting like sometimes like when people nerd out on performance this isn't even performance this is like the getting matching optimal
[03:14:55]  dx with optimal ux but it's getting to a point where people are like i don't care i just build the thing and i hope it works i don't know i
[03:15:04]  i feel like i i feel like when like edge streaming was a thing in the first like demos we did people got like really excited about that this in a lot of ways
[03:15:13]  is as cool but i don't think i don't i don't think that uh i don't think quite kits in the same way anyway as i said i i don't
[03:15:24]  imagine we'll get a ryan florence review um but i don't think there's a trello demo out there like this is this your mission what's my
[03:15:41]  mission the thing is making good demos i talked about this before that dem it's hard to find demos that show off features and show off stuff making good demos is still important
[03:15:53]  for us because people need to conceptually understand what we're offering and that it is unique i mean that's what all framework authors are after right there's always a way of
[03:16:09]  making better um u ux you can always like escape out go vanilla do whatever you need to do but but like you you want it to be in a way that
[03:16:27]  it feels natural that it feels consistent it's not like that's what i call people's idea of what the best dx is differs right so it's it's it's hard
[03:16:41]  to say say that but like if you show someone that something and they go like i can do that and they understand like what it's doing how powerful that is then like
[03:16:56]  it's it's a pretty powerful feeling you feel like you can pick it up and take that anywhere yeah oh what did dev have to say i said he did a lot of
[03:17:15]  the heavy lifting for the last version that we were showing off i mean everyone chipped in and bug fixed that's the hardest thing you i told you optimistic apis sometimes
[03:17:22]  requires um some bug fixes especially as you're figuring out patterns i think that is still a place that we need to do a lot better with but what do you say this demo
[03:17:30]  shows one of my favorite aspects of solid that mostly idiomatic and proposal code can also be most performant i get react fast enough but it doesn't have high ceiling for performance
[03:17:38]  in ux every abstraction framework library built on top of react will be held to reaction limitations and have to do a lot more work than they actually need to trying to optimize your
[03:17:45]  performance will always feel like battling a charging bull meanwhile solid makes its primitives unimaginably performance so regardless of what i do with it i always have the highest possible ceiling
[03:17:54]  for my app it makes bringing custom abstractions as easy as using native primitives and almost completely and it eliminates having to think about performance as long as you're writing idiomatic
[03:18:02]  code yeah yeah like that that's that's the goal the thing is it's a sliding scale everyone has a fast enough you'll find somebody in the discord i'm sure
[03:18:15]  who has like a super fast thing that they put together and so we'll do that specific thing a little bit slower and you know we'll be like fast enough like the i
[03:18:23]  i can appreciate react taking a fast enough stance it is tricky though when you have the largest ecosystem javascript and that gap feels like it's just getting bigger and bigger
[03:18:34]  and bigger bigger right so very very cool dev um i think we're almost ready to shift gears i saw something earlier here that where was it one more thing before we
[03:19:04]  move yeah another dev comment let's start here with what mike pearson said technically this is sort of this week in javascript but i'm going to officially start this
[03:19:18]  week in javascript after this last comment okay web development will move to reactivity one amazing tool at a time more angular devs should give react a try 100 agree angular
[03:19:28]  is headed in a much better direction than react is in my opinion okay but that's partly because they are taking inspiration from other frameworks that is true as well the vast majority of
[03:19:39]  garbage code in web apps is large components whose parts are tied together with imperative code okay for i i could see from reactivity nut like that would be the perspective react gets
[03:19:51]  two most important things more right than any other framework frictionless component creation yep section of code can be split into child components almost as easily as thinking about it yeah minimal declar
[03:20:08] ative drive state yep sequence lead drive state can be expressed as if javascript were a reactive language yep these are amazing examples but sharing state or splitting skate or scaling state or
[03:20:26]  anything else to deal with state and maintaining performance long are all painful in react but react developers are aware of these pains because they see clear examples of how nice code can be
[03:20:35]  the contrast between painless simple code and painless complex code is very high this is great the simple code ingrates a mindset for small composable pieces of code and for declar
[03:20:45] ative drive state which prepares them for the next level of reactivity this part of why react query grew so quickly it allowed react devs to code simple async in the same
[03:20:53]  way as they've been coding simple sync state it was easy for them to see the benefits trading for scalable reactivity this is a whole article mike okay that's cool let
[03:21:02] 's keep on going but once the reactive mindset firmly sets in devs are willing to trade off a tiny amount of syntactic sugar for much greater flexibility scalability and performance most
[03:21:10]  solid js's biggest fans are react developers quick check in the chat is that true are you are you guys all react developers you are you guys all react devs are not
[03:21:27]  a choice let's react oh you guys are great uh all right all right all right not quite as nice is it but developers who understand reactivity love it this is how
[03:21:54]  i see reactivity spreading up the layers of web applications rather than a completely novel 100 reactive framework like cycle js oh it's even better question you guys remember cycle js cycle
[03:22:04]  js it was quite the framework um it was a purest view of reactivity they made it so all side effects lived outside and you could just wire everything together um anyway i
[03:22:19]  see developers adopting a single simple extremely convenient tool for each incremental layer of complexity developers fall in love with the hello world like demos the reactive mindset seeps deeper into their brains and
[03:22:29]  then they get ambushed when the tool explodes in their faces at the next level of complexity then someone creates the next great tool this process is probably for the better rjs
[03:22:37]  is more general than tan stack query but is mediocre for htv requests definitely which is where the mass majority of async or data comes from seems like more focus should have given
[03:22:46]  to it doesn't it maybe it's currently more important overall to figure out this ssr stuff everyone seems to be struggling with okay and then he promotes his own state library
[03:22:55]  but i thought it was dev just given the quotes today this is constantly pulls me towards solid as someone who like really likes react i get the whole just transform state into u
[03:23:07] i simplicity reacts going forward but nothing i've ever worked on is satisfied with simple transformations trying to tack on stateful logic on top of something that really wants to be state lists
[03:23:14]  results in a lot of painful impedance mismatch once you get used to the fact that solid wrap state inside functions it's a breath of fresh air from react because things are a
[03:23:22]  lot more flexible and composable obviously way more performant but that's not even the important part i don't write solid because i want performant apps but because i enjoy
[03:23:29]  it a lot more anyway yeah i think this is the end of the dev uh spotlight for the stream um but let's let's let's i'm gonna pull off my screen
[03:23:40]  and uh set up some stuff to talk about what else has been going on in javascript okay so give me a second here yeah ad break except i don't yeah i
[03:23:49]  don't run ads myself you might just get caught by them incidentally uh um i'm not good with the streaming thing if you're watching me on twitch i i'm
[03:24:02]  sorry that's the only platform that probably is sending you ads about now um probably already did like a dozen times but sorry about that uh let me let me let me get my
[03:24:16]  all my my stuff ready to talk about other this week stuff i don't know it's been two weeks so you think i would have more more topics but let me see
[03:24:35]  here i i i a number of you are probably still watching from uh twitter x i i wonder is that working well for you did people like watching it watching the stream on
[03:24:52]  here it's tricky because you don't get the comment right so even if i'm asking you you actually couldn't tell me even if you wanted to uh and then
[03:25:15]  i need one more all right yeah oh no not that open a new tab all right it's like when i realized i had no no new uh um hack mds this
[03:25:34]  week yeah there's probably comments next people can like comment on the actual stream i haven't actually looked to see if i can see see that yeah it's all good let
[03:26:05] 's uh let's just shift gears here a little bit give me two seconds i'm gonna get back to to yeah that's funny um yeah well let's uh let's
[03:26:26]  run it into this week in javascript this is something that i don't think there's actually that many new viewers here this week but if you're new i'd
[03:26:36]  like to uh go over twitter and just kind of follow my thread of what caught my eye and it usually leads to some interesting um discussions we already talked about a bunch of twitter
[03:26:47]  stuff but um a little more on the tech side anyways and the very first post that i have um actually brings theo back again um uh this one was interesting to me um
[03:27:07]  the the gist of it as i said this is old news but it he literally posted this right after we finished the stream so i missed it so we didn't talk about
[03:27:17]  it so it's been two weeks this is old news but um um essentially versell got some heat after that clip from um what's his face um levels io um talking
[03:27:34]  with lex friedman and um you know i i in fact i'm gonna play that clip um let's let's open this in a new tab and i'm going
[03:27:47]  to change how i'm sharing my screen so that we can listen listen to this clip okay yeah um give me two seconds i'm just going to switch how i'm presenting my
[03:28:01]  screen um i think it's this one yeah man this is my most controversial take i think and maybe i'm wrong but i feel like there's frameworks now that raise money
[03:28:22]  they raise a lot of money like they raise 50 million 100 million trillion million dollars and the idea is that you need to make the developers and new developers like when you're
[03:28:32]  18 or 20 years old right um get them to use this framework and add a platform to it like where the framework can it's open source but you probably should use the platform
[03:28:43]  which is paid to use it and the cost of the platforms to host it are a thousand times higher than just hosting it on a simple aws server or vps on
[03:28:54]  digital ocean right up to this point i'm with him completely uh yes you're right i never covered this for some reason like i saw it because back at the end of aug
[03:29:05] ust like a month or so back but i was just like yeah whatever like i don't usually get caught into like businessy kind of drama stuff um you know i i mean
[03:29:16]  the truth is everything like the first half of what he says here i i'm like how can you argue with with that right and it's a trick it's it's
[03:29:27]  a tricky subject because it's like i mean the number of times that i wake up in the morning i'm like man if i had a company and i had paid you know
[03:29:38]  if i had vc funding and supporting solid and all this and had employees like think about how much work like how much further we would be along if there was fully paid people
[03:29:48]  other than myself like you know think about it like we have a lot of volunteers and community funding and we put our all our open source money right back into funding the community
[03:29:58]  you know so we get a lot of people you know like significant effort like maybe 15 20 time effort you know and at times we've had hired on people like alexis
[03:30:08]  six months eight months you know full time but like like think of how big that is that's like that's like doubling like our current output just by hiring another person out
[03:30:18]  like picture if like we had three people or four people or you know like i don't know how like i imagine there's i don't know how many people working on next
[03:30:30]  or remix now but i mean those are meta frameworks like we're doing we're not just we're like building next and building react and building like you know what i mean
[03:30:41]  like so i get there you know raise the money put the money and it's like it's it's expensive it's hard to actually build a framework these days up to sn
[03:30:52] uff because of the amount of work that goes into it but i this is where it starts to fall off for me i think we're where we get next is his biased
[03:31:09]  toward let's just listen um so there's obviously like a monetary incentive here like we want to get a lot of developers to use this technology and then we need to charge them
[03:31:17]  money because they're going to use it in startups and then the startups can pay for the bills um but what that it kind of destroys the the information out there about learning
[03:31:28]  to code because they you know they pay youtubers they pay influencers developer influencers it's a big thing to like um and same thing what happens with like uh nutrition and fitness or something
[03:31:39]  same thing happens in developing they pay these influencers to promote the stuff use it make stuff with it make demo products with it and then a lot of people like wow uh use this
[03:31:47]  and i started noticing this because when i would ship my stuff people would ask me what are you using i want i would say i would just php jquery why
[03:31:54]  doesn't matter and people would start kind of attacking me like why are you not using this new technology this new framework this new thing and i say i don't know because this
[03:32:01]  php thing works and i don't really i'm optimizing for anything just do it just works and i never understood like why uh like i understand there's new technologies that are
[03:32:11]  better and there should be improvement but i'm very suspicious of money just like lobbying there's money in this developer framework scene there's hundreds of millions that goes to ads or
[03:32:23]  influencers or whatever it can't all go to developers you don't need so many developers for a framework and it's open source to make a lot of more money on these startups
[03:32:36]  yeah i mean it's interesting because i mean i could be a little bit wrong here but i don't think the industry needs an influx of money to get the marketing
[03:32:50]  or the education and all the the you know like the fitness type people running here like it like we're talking about almost javascript culture in a sense like if no
[03:33:07]  one had paid theo or someone else he wouldn't have been able to take things as far as he did but he'd probably be doing a lot of the same stuff right
[03:33:19]  i remember the guy who decided to you know poke dan on twitter and get him to come on for his job interview thing you know saw the opportunity basically was unknown at that point
[03:33:33]  and put you know he just made the one next js video and then do that people you know at the beginning might gravitate towards what they like and then they realize what
[03:33:45] 's popular gets them more views and it doesn't take money to do that it's like a self-fulfilling machine right i remember theo's third video was a was
[03:33:56]  a solid js video and around christmas time i remember he came to me and he's like this is going to be the biggest solid js video you know to date or whatever
[03:34:05]  you know and i'm like and he's like it's going to get this many views my last two got these many i'm like it's okay you know like i
[03:34:12]  appreciate it this is exactly what we need we need this kind of exposure right now but your other content will get more viewership simply because of what it is i i appreciate if
[03:34:25]  you find time in the future to highlight us more whenever you can but if you want to get your name out there you're going to your next content your react content is
[03:34:36]  it's way way more popular like it has a higher higher ceiling you know like 10x whatever i remember i i mean we were excited about the video but like there was a
[03:34:49]  certain reality set in there and this is this kind of mentality comes out to training it comes out to basically everything right we when you have a twitter culture where you're just
[03:35:00]  like echo chambering you don't need my money like money can help a lot but it's not the driving force from my perspective to that end like how many influencers were for
[03:35:11]  sell putting money towards my understanding was just theo that wasn't what was driving everyone to use these other tools like levels probably as i said sick of hearing people telling him he can
[03:35:24] 't use php and why isn't he using a modern framework um and he's right about everything about you know the influence of money how that affects the upsell to
[03:35:34]  infrastructure the whole the whole thing there but the propagation of this thing goes way beyond money and marketing i mean it does leave an impression definitely like you you know when you look and
[03:35:48]  you see ads and stuff it does leave an impression but like i i don't i i don't see it quite maybe as pessimistically yeah ben holmes talked about it
[03:36:04]  most of his content is there because of uh because it actually has content yeah so yeah i mean it's funny it's it's it's it's ironic and it's
[03:36:22]  tricky and it's it's messy because like theo and you still see in his current videos now he is a big versell fan a big next fan and has always basically
[03:36:35]  been both the money was never an asset he he he actually used this whole thing as a way of being like you know i got choice i'm gonna pick tools that like he
[03:36:48]  had the benefit that his favorite tools are some of the most popular tools so he had the benefit of being able to choose his sponsor so to speak and basically just pick the
[03:36:57]  stuff he would choose you know you you get bugged by people not bugged but you didn't message from people to promote stuff or look stuff all the time in his position
[03:37:08]  yeah i i get that to a certain degree too but i'm not as you know out there so to speak but i i know from my own messages that like he had lots
[03:37:17]  of options if he wanted to do stuff other ways um and he chose to do what he wanted to do anyways and it was just a very nice alignment unfortunately sometimes really nice
[03:37:34]  natural alignments are dangerous and bad i mean who's going to pay to use a js firmware as i say if you're not paying for the product yeah exactly i mean
[03:37:54]  this is why i always pulled back to push back to vcs it's always i always find it funny to this day that when the whole remix gate happened um and like the
[03:38:04]  what was it i got some like nasty message um from one of the vc people from whatever who were sponsoring remix at the time and all this stuff and they're like
[03:38:16]  calling out matt billman and stuff and saying oh j1 you blah blah blah blah you know hire's gonna now fly blah blah i don't know what game he was playing
[03:38:23]  but like six months earlier he was trying to tell me that i you know i should start my own company so like yeah i i don't know i and you and i and
[03:38:33]  i was just like what am i selling and it's like we'll figure it out it's like yeah okay like it's that is probably the why i'm not the right
[03:38:40]  personality i think a lot of people will find a way to make money that's not what i'm about so i the distraction was more troublesome from my perspective but it's
[03:38:49]  like like it's it's just it's just kind of it's it's it's it's definitely um yeah solid ink yeah we've talked about it it's just this
[03:39:08]  is just one of those things where in a sense i don't think it's going to actually change much as a positive but in a sense it could have if theo took
[03:39:17]  it slightly harder than you know and it act more negatively which i would i mean he might be within his him to do you know um they kind of alienated one of their
[03:39:32]  like but basically this wasn't the case anyways and by caving and making it public what did this accomplish you know i don't actually know um to be fair like because
[03:39:42]  i'm what did i write here whether it's actually true okay yeah what did i say here um it's easy to shoot the messenger but if anything influencers are thermometer reading a
[03:39:51]  reflection of what we already know to be true whether it's actually true is a different story but also irrelevant theo is the least of herself's perception problems having zero influencers on the
[03:39:59]  payroll only confirms that they are what they're willing to do for perception unchanged this probably won't be the last casualty i noticed the problem when too many i noticed the
[03:40:09]  problem first when too many things aligned react next for selling for trust came into question every decision scrutiny instead of owning it there's a sense of denial understandable but intention and result don
[03:40:18] 't always align resentment is tangible but this is just one perspective i hope they get to the root of the problem having watched the whole theo arc next herself this wasn't it
[03:40:26]  theo knows that for sell knows that you should know that and it's disappointing to see this ultimately meaningless outcome because this doesn't actually change that perspective perspective this is just another example
[03:40:36]  of like one of those really nice natural alignments that ended up happening that just when the most popular things all get together and p you know it's possible to you know
[03:40:50]  produce a lot of haters and if all the haters actually have reason to get together well then like you know it it's a it's a monopoly it's it's too controlled
[03:41:02]  you know it's not good for the wider ecosystem because it makes other things suffer like just too many things align you think well that's the key to success right but i
[03:41:15]  don't know yeah his videos have ad reads yeah i don't know it's it's it's a new era of of this content i i i don't know maybe like
[03:41:43]  maybe for cell just didn't need to worry about any of this and it just didn't matter i they had their reasons it's just it's it's just i feel
[03:41:54]  like we're missing the problem still and maybe maybe like it's not for cells problem like why why why is everyone so threatened by this alignment you know it's just like
[03:42:17]  the i don't get me wrong there yeah i don't like there is an alignment here it is not imagined it's just like i don't know we've talked about
[03:42:33]  in the past maybe i'm done with this one it's just i feel i don't know how to put this in words but i feel like people are looking for a
[03:42:48]  scapegoat i don't i don't know how else to put it it's like it's like it's like every at this point everyone who's frustrated with
[03:43:00]  react frustrated with versell pricing frustrated with next app directory frustrated with anything everything gets funneled at versell like it doesn't matter like react 19 could be a thing and people
[03:43:11]  people don't even i don't even know if people associate at least in this sphere associate react with meta anymore they view it like as the versell company and it's not
[03:43:19]  true but that's the kind of perception out there it it doesn't matter about denials and which core teams work where or what now it's the way stuff is delivered
[03:43:28]  it's the way that next doesn't like you know when a new feature is added to most frameworks they'll go and deploy it on six different platforms and be like look we
[03:43:38]  support this everywhere astro does it remix does it we do it next is like oh here's the son of yourself makes sense they throw it but you understand like they've
[03:43:48]  somehow managed to get the heat of all the things so instead of just being responsible for one thing they are to blame for everything and i don't think it's fair but it
[03:43:59] 's like you just feel the bubbling resentment about people about the direction of react or the this that and they're to blame i'm i'm more willing to turn this back on
[03:44:12]  people um a little bit not just blame versell which is kind of funny position to be in but like it's i don't know i feel it's still that's
[03:44:26]  like something has to change whether it's an acknowledgement whether it's like a breaking up the alignment in some kind of meaningful way other than empty words i mean it it doesn
[03:44:37] 't even matter if it's real or not as i said it's just is it's more than just hosting it though like like gatsby had gatsby cloud
[03:45:04]  and you you could do stuff on netlify and versell technically with it i know definitely net but they had their hosting platform and that was their thing because of the recent
[03:45:14]  infrastructure stuff like we were talking about like like adding kv or blob storage to your framework and skew protection all these things to support these server client features that require infrastructure
[03:45:25]  pieces to really work properly it's not just about sponsoring it's almost like the only way to deploy next is on versell and the only way to use react is to use
[03:45:34]  next and the only like so like it's just like this straight line funnel to put a bunch of money and in versell's pocket which again people like levels are talking
[03:45:45]  about like which costs you know companies like versell and netlify who do kind of a redistribution through you know aws whatever there is a premium for the you know
[03:45:55]  better customer uh level better you know dx aspects of it you pay over using aws straight so but now because the tooling's aligned with it too it feels like some kind
[03:46:07]  of scam almost that you convince people that they need to use react which means they need to use react are sort of next which means they need to use versell which means they
[03:46:15]  need to pay 10 times more for their hosting or whatever i mean i'm just pulling that number of thin air you know someone will say something like that and and essentially like the
[03:46:27]  whole thing is called into question um along the whole alignment whether than looking at it as individual parts right it's not just sponsorship it's the downfall of front-end
[03:46:38]  development right and like as i said gatsby people felt like okay that makes us gatsby is gatsby cloud they have the service and then you have ds
[03:46:49] g and that's a service and like they owned it parts of it is that even though as i said about reality and truth i think brucell has kind of denied it
[03:46:57]  they're like no react or the react team's like no we don't only think uh next you can use remix or doing this but server components to the future okay or
[03:47:04]  you know next like yeah we work on every platform like we all know how true that is um so like like yeah i don't know i don't know how much i want
[03:47:19]  to talk more about this it's just like i i feel like this is just rubbing off the layer or unsurfacing something that's already there it's like there's
[03:47:31]  bits of it from every aspect of it even like resentment towards even react itself bubbling up yeah i think it's just like i don't know what i'm going to talk
[03:47:48]  about this but i mean it doesn't matter if it's fair or not right yeah i but it's it is it is well i it's a little bit more nice more
[03:48:02]  than be nice to use because like it's it's it's it's not completely true like you can use these features as they build out but the direct line between react
[03:48:16]  to versell infrastructure is so tight when it comes to like what features you can adopt and when people market these features as you need ppr well guess what where can you
[03:48:27]  get ppr right like it's it becomes it's it's not just like if it was just like oh if you want ppr you should deploy your next app to here
[03:48:41]  like people viewed it but it's not that because ppr is necessary and oh using next is necessary if you use react like you basically saying that there's like if you
[03:48:54]  want to do what's proper or right you have to go down this path ppr um i no it is the funny thing is it's not like if you go down any
[03:49:10]  next release you will hit this sort of thing i mean the others catch up in time but they have to do work it's not like oh next comes up with a new
[03:49:19]  feature and just works everywhere like i mean skew protection is another one i i you could i think we did this on stream before i just start pulling down next releases and was
[03:49:28]  like brucell brucell brucell brucell brucell like it it's it's it's it's like we're getting more and more there and
[03:49:38]  it makes sense it's like what we're talking about live view and rails like having these functionalities built in um i wonder if rails like had that kind of setup because
[03:49:46]  of heroku and it was like it just made sense you could sell the infrastructure like the levels like it's fine that's what for cells in business to do the problem is
[03:49:54]  every react developer thinks that like that's how how you have to use react because like the chain they they have to somehow break the chain except it's their best funnel but
[03:50:09]  it's like too much i don't know yeah i don't the the funny thing is i don't think i don't know if that's true maybe maybe maybe maybe
[03:50:29]  maybe it is i mean i i'm maybe yeah it's mostly the serverless guys that i'm talking to but the thing is like there's like a next version that works
[03:50:37]  with like node as a container or docking retainer or something but like from a pure feature standpoint i know i know the guys at cloudflare who work on building all
[03:50:47]  the pieces and the adapters that are missing because i work with them with solid right and i'm definitely familiar with netlify most places have adapters right netlify
[03:50:56]  has the next run time it's like it's like 20 times larger than any other adapter it's like a whole run time to make next work on versell or sorry
[03:51:05]  on netlify properly like i don't think the criticism on any specific part is overblown i think the problem is that the whole narrative is is like ties things
[03:51:22]  together like i actually don't disagree with the on one side i think i'm blaming people's complacency but on the other side every individual argument is generally right so it's
[03:51:32]  like it's it's it's it's it's it's it's not it's just like this it's the alignment that has just shun the light so
[03:51:41]  that everything just aligns in the perfectly awkward way it's it's it's it's it's it's it's it's it's it's problem with is
[03:52:05]  it under bait to crucial dx dev stuff service so you're going to approach it maverick and never yeah i mean it's under bait because it's still under development we
[03:52:13] 're we're in one of those phases where we're learning patterns again where they're running react canaries and trying to solidify on it and stuff like they took a big
[03:52:20]  risk with rscs and it rscs could be the future but i'm saying who's blamed for that react or versell versell's blamed for that like
[03:52:32]  it was their choice as i said they're just taking all the heat but i'm not saying the specific points of complaint for that heat are unmerited they just they're
[03:52:43]  just getting it all i mean there's there's open next people were working on like like which was like they got some complaints because they're like next yes is open but
[03:53:02]  like there are like there are like people have done this and i was like what are you doing you know like a little bit yeah i don't know it's it's
[03:53:20]  it's it's on one level like they could just own it and just be like like gatsby did but then again like where's gatsby now so yeah
[03:53:41]  okay anyways it's funny my post comments are coming in like in a weird order right now which is okay let's continue um that was only like the first story and i
[03:54:01]  spent way more time on it than i thought i was okay we talked about the jose stuff already we talked about this talked about trell strello okay let's talk
[03:54:28]  about this one we named next.js or vercel.js i mean that would be a way of doing it yeah this is such a funny idiosyncrasy
[03:54:43]  i i i i mean it's more than that but it's oracle's done like nothing with the name i mean i don't know how much i need to cover this
[03:54:52]  i remember it was confusing when i first started programming javascript because like microsoft also had like um j script or something or like so like it was weird that there
[03:55:08]  was like a bunch of like proprietary mental kind of stuff like you know you know trademark what what do you call what my mind's slipping here right now but you know what
[03:55:20]  i mean around like the word javascript because it was referencing like the java framework when it had nothing to do with it and essentially netscape i guess or who had
[03:55:30]  it originally but oracle ended up buying it out yeah netscape in 1995 netscape partnered with sun microsystems to create interactive websites brenda and ike created
[03:55:40]  the first version of javascript right so he was an employee and since then the the trademark has basically sat there until oracle bought them out and it's just sitting there
[03:55:50]  for no reason and but because of that things like javascript conferences like js conf and stuff like can't use javascript in the name because it's a trademark
[03:55:59]  um acmascript was an always an unwanted trade name that sounds like a skin disease microsoft halfway offered up j script but no one else wanted that yeah it's such a
[03:56:14]  funny story like in the first place like how like javascript having nothing to do with java but java being cool led it to like being part of the name
[03:56:25]  like it's confusing as hell it's interesting the deal wants to push this but like it's never to this date been resolved um i'm glad there's so many people have
[03:56:38]  signed this myself included um if you know consider if you haven't looked at this consider signing this yourself i just this is just complete unnecessary um acmascript how do you
[03:57:10]  do fellow kids uh yeah no it this is one of those kind of almost like no-brainer ones javascript 1.0 came out before java 1.
[03:57:22] 0 yeah like it's such a weird yeah um sorry i need to change how i'm sharing my screen i realized that i'm only i didn't show the the sig this
[03:57:34]  the signing page um give me two seconds what's up screen share share screen entire screen all right sorry i was actually looking at the letter um while i was talking about it
[03:57:49]  but it doesn't really matter you guys you all know what's up so um okay let's let's shift gears for a second let's let's let's see what
[03:57:59]  else i got here um yeah jason i always love the demos that shows if you get a chance um seeing the ecosystem grow like this this this is a demo that's using
[03:58:16]  solid solid ui trading view lightweight chart you saw in its pure form a lot of times you saw this reactivity system without jsx it's part of the flexibility um
[03:58:26]  video on that just talked about trello conference talks daniel and attila are are hitting it pretty hard right now um yeah actually i guess we already went out over most of
[03:58:41]  the solid news this week um let me look at my bookmarks we talked about the jose stuff okay yeah that's a good one um oh yeah okay cool it
[03:59:20] 's just reminding myself of some of the other stuff that happened we'll get to that in a second let's continue on here okay the the big the only big shout out that
[03:59:30]  i want to do for solid right now um is the hackathon is coming soon 10 days 4 hours 58 minutes um 15 000 in prizes um multiple categories we're going to drop
[03:59:47]  the categories on that day give everyone a the chance to get involved um last time this came around this was a lot of fun so um look forward to it coming but just you
[04:00:00]  have a whole month and a half um basically from october 1st to november 14th to build something so lots of time um it's gonna be fun it's
[04:00:13]  been a while since we've seen one of these i think i said this last time but it was like back in 2020 2021 ish there's like a number of them we
[04:00:24]  did one then after and then spelled trying to bring it back again all right all right all right let's go back here okay this one's a short one um i don
[04:00:51] 't talk about marco very much anymore or marco six you know specifically um because i'm trying to motivate the team to uh do the work and get there i mean i
[04:01:05]  it's not fair their project's incredibly ambitious that's like someone saying you know until solid 2.0 comes out i'm not gonna i'm gonna boycott ryan
[04:01:12]  streams it's not it's not fair but um but i keep on seeing stuff from svelte and um specifically mostly svelte and and i every time i see the
[04:01:33]  new features and stuff coming in for svelte 5.0 it i i keep on like it's like this really cool blend between like solid stuff like it's not
[04:01:43]  like old svelte it's like very solid like and very marco like and it's like slides right in there in the middle and i'm like and and because we
[04:01:52]  only really focus on the reactivity on on the solid side i sometimes miss that like i think i saw svelte adding uh svelte snippets and marco
[04:02:03]  has marco macros like really big on the alliteration on these features apparently um and i i just started thinking about this and i was like it's kind of crazy
[04:02:15]  when you step back for a second and you think about the in the profound impacts that stuff like signals and the modern approach to signals with fine grain rendering have had on the react
[04:02:24]  uh it's not on react everything but react but on the js ecosystem and then on the other hand look at like marco was the original islands framework and like the approaches
[04:02:37]  the templating especially stuff like svelte's like const and all these like features i keep on seeing like coming into svelte um that aren't actually in other sf
[04:02:47] c programs like in a sense are very innovative from the south side but actually marco had them because you know marco hashtag marco did it first it's it's
[04:02:56]  really interesting to see these like marco's kind of over here solid's kind of over here to see the kind of like some of these things are a lot like they're
[04:03:06]  i often say things are discovered rather than invented but to see these spaces kind of getting filled in more thoroughly and seeing where these things go it makes me miss occasionally thinking on
[04:03:20]  that other side because i'm i'm very focused where i am right now um some people ask me you know about oh what would it do to make jsx better because i
[04:03:29]  you know i make a big deal of usually pushing jsx and honestly if you ever get a chance and you haven't watched it i have a great stream with dylan converts
[04:03:38]  marco to solids jsx and it gives you a really good idea of like what templating could do i don't know how if it makes sense to bring jsx because
[04:03:46]  jsx has a very specific syntax but like what marco is able to do is just wild by comparison because they decide to take on that challenge um i'm gonna post
[04:03:58]  this i'm gonna post this in chat um but yeah out of order streaming again marco didn't invent it but they were the first open source javascript framework i
[04:04:14]  think that actually had it as well like it's yeah you know in islands in a sense server components are a form of islands right so like yeah i don't know it's
[04:04:28]  it's it's if i just looking at like the design space it's just incredible to see the the space that lives between these two like they're not extremes but between
[04:04:43]  this whole range it's why i enjoyed working on marco it let me kind of attack the ecosystem from both sides i got to see like i have my very react side of
[04:04:52]  of of thinking and sometimes i feel like where we are in solid is more react than react is these days and then like the like the marco side is way on the
[04:05:05]  other side sometimes and seeing that kind of flank around where like stuff like view or svelte live and then like it's better have insight into like where they're going
[04:05:16]  so yeah i don't know marco's very cool if you ever get a chance to check it out um it's it's it's really novel and and really unique in
[04:05:29]  in its way all right we should talk about that we talked about that okay yeah okay so we're getting down to a couple last ones here we should talk about this
[04:05:52]  one yeah and yeah we got a couple here i saw this and i thought this was pretty interesting i don't know where um sebastian got this example from this one but
[04:06:17]  it's something that we haven't seen people do very often with react like this where you fetch date up here and then they're showing suspense in the same component and then passing
[04:06:31]  it through now the reason this works is because the state primitive here is actually holding a promise so that's the stable reference and then when you set state they're using it
[04:06:47]  as a way of basically deriving and storing the next promise i've honestly never thought of doing that for me when i think of async i think of um computed values or
[04:06:59]  memorization like i think of it as an async memo not as state but um right like it's basically it's derived from id they do something kind of interesting here where
[04:07:12]  it's like object id promise like so it's like it's passing in both the the source and the output to kind of get this api but the biggest thing is
[04:07:25]  fetching above the suspense component now i i know someone from remix is like remix is gonna be like well we've been doing that forever right we have our loaders and if
[04:07:34]  you choose to use defer and not await well guess what you get the promises and then you pass them through our await component and same deal and they're right but this is one
[04:07:43]  of the cleanest looks of one of these examples that i've seen in a while but like you know where i go immediately when i think about this because i actually wrote
[04:07:54]  a whole article about async handling and i suggested that putting passing promises around is about the last thing you want to do which i mean i did not know that this was going
[04:08:05]  to show up you know um a month later or so after i wrote the article but the what's interesting is yeah you can use here to read it which means you get
[04:08:15]  it um but there's an interesting coloration that happens here i'm going to call coloration is user now in this example needs to accept a promise it doesn't or a
[04:08:26]  promise of user to be fair so your interface now is impacted by async essentially like in this scenario like you can fetch up here but now if a component wants to participate
[04:08:42]  in something that is async either it has to use and get out of async like resolve it or it has to accept promises of the said thing no i i i
[04:08:59]  the the state just gets the promise itself so you go fetch users now state is a promise they're literally taking they're calling fetch user here and putting on the object so you
[04:09:13]  don't get the resolve promise you just get promise and then when you get in here you're they're pulling the promise off and then you it becomes promise of user see
[04:09:24]  prop promise of user becomes user right here right like the component is expecting a promise of user which i said it's pretty clear what it's doing from that perspective so i
[04:09:39]  can respect that but it means that like the fluidity of the system is and now you're dealing with a second class primitive which is fine promise is built into the browser i
[04:09:50]  mean if this is your direction you're going i i have you know maybe this is how react will support signals you can have signal of user and then pass it through as you
[04:10:00]  know i'm not a big fan of passing signals directly through components like making it like a thing that you check like is this a signal is this a promise but yeah it
[04:10:11] 's an interesting example my first response to this if i can find it now because i know predicting people will use higher than they should probably next to use state right because i was
[04:10:25]  just like i was like i was looking at this i'm like who's going to pass the promise around you know further down and further layers they're just going to like
[04:10:32]  fetch the state and then go use state right next to it and then i realized oh the suspense boundary is below it uh okay we can't do that we actually have to pass
[04:10:44]  the promise here so i right and then where does it go yeah you need to cover call use right because you can't put use above suspension that's interesting can you still
[04:11:00]  put both below the suspense boundary right so this started this whole like debate where we're like can can what if i wanted to move the state beside the use here instead i know
[04:11:12]  that's not the point of this thing but can i do that and the answer actually took us a long time we went back and forth right you can't fetch the promise
[04:11:24]  in the same component it's used right it needs to be cached across renders it is cached the promises in state and then we went we went through the whole the
[04:11:38]  whole chain of things and if i remember correctly we actually realized that no you can't because let's see again sophie to the rescue um creating it in a use state
[04:11:51]  initializer unfortunately is not enough until a component is mounted react reserves the right to throw away all states refs etc and does actually do that in practice in many cases so
[04:12:06]  yeah um interesting this is the same problem with you doing use memo with it too i think it's that the hooks aren't guaranteed to be there um until it's mounted which
[04:12:22]  means that if you have to not own you basically if you want it to be in state you have to put it above the suspense boundary um which means that you do have
[04:12:35]  to pass the promise through because yeah yeah or yeah hoist it using a cash or some other kind of mechanism essentially yeah definitely the inspiration for cash to be coin apps so
[04:12:58]  yeah i mean this is this is part of like what you your brain starts kind of going what the hell is going on i know um it's because the re-render model
[04:13:15]  and concurrency right because in react when they have concurrency they have to re-render the components and if a component is never mounted they reserve the right to be able
[04:13:24]  to throw it away um so yeah it yeah it's interesting did i see which tweet sorry i i'm missing the link you can't share it on youtube you're gonna have
[04:13:42]  to go on youtube filters out links you might have to share it on twitch if you can get in there um but yeah i mean it's just trying to see if
[04:14:16]  oh memes are great uh there's a lot of confusion here to say the least i think a lot of people are just going to be like i can keep on using react
[04:14:41]  query um which is good because javascript is a place where promise made isn't a promise cap oh you all are too good um use effect is a great example an
[04:15:08]  api that sounds so good in theory but oh boy when you see how people need practice i claim synchronizing an imperative declared assistance just hard regardless the api use effect
[04:15:17]  is actually one of the better ones and i agree i don't i think people give use effect about you know like it's unfair it's actually quite reasonable um you state your
[04:15:30]  dependencies you run the function um i think the problem and i think we all acknowledge this is that use effect is used way to way too much and i've thought about this
[04:15:43]  a lot because i've been trying to push solid more and more into a derivation only um system with solid 2.0 i want to get rid of a lot of the
[04:15:54]  synchronization pieces because they are less predictable and in a sense react doesn't worry about this as much uh initially because like their whole components are derived you know you put some state
[04:16:05]  in you get the ux out so they they they i don't think they often think about it completely in the same way especially core team might think about it but the
[04:16:15]  react developers themselves don't always um and even like i say synchronization is easier to think about it's more like it's easier to like pseudo code out derivation requires you
[04:16:28]  to think about all the implications the system that could drive this value so so people like when people have like two pieces of state they're like oh i have this thing and
[04:16:37]  this is based on this they'll just take the one value and write it to the other value and then if it something else could change it they write to it there and they
[04:16:44]  write to it there where in some cases it should be more like a switch it should be like this is derived from this and this and this and this condition it prevents you from
[04:16:53]  writing duplicate logic at the writing points and let's be more traceable about what's going on and it's funny though because react components don't like the whole thing is
[04:17:08]  just like a giant derived value they don't care as much uh there was an article a little while back i remember i did with uh uh i had a chat where it was
[04:17:16]  uh what was it um 10 years later yeah uh with um with mr abramoff here in the chat where he comes up with some crazy example about how to like take
[04:17:33]  some react code that's like i don't know like has a condition in it and takes some data and does all this stuff to it and he's like if i needed to
[04:17:45]  do this since all of this never updates blah blah blah so you write it like you know functions right and then but then he's like tries to refactor it and he
[04:17:55]  shows that you know he can just change this in so but he's like how do i do this in solid but duplicate this logic here and do all this i mean this and
[04:18:04]  the problem is i mean it's his fault for choosing the example but he kind of goes on and explains like how complicated this thing is because yeah you can just write this
[04:18:15]  code and and i was like where where's my edit i got to a point at the end where i was like i was like why wouldn't you just write it like this
[04:18:34]  now to be fair and solid these should be wrapped in functions i was just trying to give him the reacting this count is this headings this this even with his refactor
[04:18:45]  is way cleaner than whatever the hell like this is doing again right like like i i know that it took me a minute to figure out what the like how to write it
[04:19:06]  like this but in the end this is way better code than like the the final react version that he wrote because like as you drive data and re-sort it and
[04:19:24]  re-sign you find things like end up deduping or bubbling down into its most primitive parts and it's almost like a math equation that you're solving with your
[04:19:33]  code as you actually whittle it down but if you it's a lot easier to start in the expanded form as you're trying to figure out what you're actually doing
[04:19:44]  early returns and naturally do when new feature on top of this code yeah because then you just you just keep on appending or adding stuff without actually understanding what what it's doing
[04:19:59]  which is good hopefully your components are small enough that you can reason about it but over time no one wants to break a component apart you there's there's lots of reasons
[04:20:08]  we we get here it was just interesting to me because yes it's just a lot easier to kind of write this more imperative logic it's a reason why reactivity looks the
[04:20:21]  way it does um even uh someone asked us steve sanderson like why knockout like it's like the code inside the effects or memos or whatever looked like imperative compared
[04:20:33]  to like like rxjs or something like piping streams and he's like honestly people like at a certain point you get to a point where like people think in imperative instructions
[04:20:44]  and like the the overhead of trying to wire everything becomes too much so like i i get the argument it was just at a to to a certain degree um like like it
[04:21:01] 's what's the granularity is the component the right granularity or is this specific value the right granularity i tend to on the side of reactivity figure that you can
[04:21:14]  derive stuff at a at a value level um rather than at a component level it's it's it's a slight difference but it changes things as uh dan explained between what
[04:21:25]  we call control flow versus data flow control flow has like if statements in the actual like in early returns in the actual code where data flow everything flows into data like into variables right
[04:21:44]  so there is a mismatch that being said when you like this could easily be cleaner react code too right like picture if this was your react code it's much nicer than
[04:21:59]  what dan had been writing i i think that uh sorry where is it this one i think though that we don't lean that way but i was arguing that i think the
[04:22:11]  lack of derived async or derived from props as first class citizens in the post hooks world is what got us here um which is interesting he's sophie's what do you
[04:22:20]  mean so i give a couple examples what why does everyone like react query well it's because it's an async memo right it's a what do they call it in a
[04:22:32]  sense this is an async used memo where you put the depths array first here's your depths array i mean this is static string but and then here is your your function
[04:22:42]  your memo function and then here is your result there you go async memo it no longer feels like synchronization it doesn't matter what's inside on the outside you just have
[04:22:55]  something derived you have an input you know maybe this affected user with an id or something this id right so you have an input and you have an output it's derived the
[04:23:09]  other one is sync from props right um it's funny because acd light actually uh andrew clark suggested this but it was basically you have you have um if you
[04:23:30]  ever had like temporary state like maybe you know like a controlled thing or like a component where the state reset is happens when props change so from above something can change but you're
[04:23:41]  overriding it temporarily until you save it this happens like you know almost with optimistic updates an example this sometimes or you know where you have some client state you're editing
[04:23:51]  and then when you click save or you click out it saves and actually pushes it back to the parent and pushes it back down again if you write a component in react like this
[04:24:03]  where prop state this only gets grabbed the first time as state updates this does not update this only happens originally initially and you can't put a use state inside a memo you
[04:24:18]  can't nest hooks so your only answer most people think the answer here is you you cause you call use effect like let me actually open a playground to show exactly what i'm
[04:24:28]  talking about here right i'm not we don't need to make this render or anything let's just pretend that we have props coming in to our counter and you go const
[04:24:43]  um let's go i'm going to use react syntax doesn't really matter so i'm gonna get rid of this gonna get rid of this okay so let's let's not
[04:24:57]  make it a counter let's make it a name thing okay and then we're gonna say um name set name equals use state props dot name now you might have an input
[04:25:15]  in here where you're doing some stuff temporarily you're updating you're overriding the name so you might be like like on change equals you know something along the lines
[04:25:31]  of like set name um i don't know e dot target dot value whatever and then i don't know the component's name is probably not the greatest it doesn't really matter
[04:25:50]  but what i'm trying to get at is maybe you also have like a a button here that's like i'm just making an example it doesn't really matter um what
[04:26:06]  it what it is but let's pretend that on click we call like props dot on save our name or whatever right perfectly reasonable scenario where like basically you have a projection of
[04:26:31]  the state and you can save it back up which shoots it back up a level and might update this but the thing is you there's if you want the this to reset
[04:26:47]  what most people do is they go use effect set name um props dot name props dot name there we go synchronization done so whenever props and names changes we can also override from
[04:27:09]  from the top of the screen we're going to do that right now and then we're going to be able to see like this is one of the most common like variations
[04:27:16]  on this is the other super common scenario where people use use effects that are unnecessary acd lite suggested he's like wouldn't it be cool if i think nearly all use cases
[04:27:25]  can be replaced by initial argument to use state that acts like get drive state from props use state value previous min max value previous so they had this idea of basically making it
[04:27:37]  so that um like i forget the exact example but they're doing something pretty crazy here where they're like using a ref and a memo and then like there's lots of
[04:27:57]  variations of these kind of problems but like it's it is definitely kind of interesting that like the idea of state synchronization like this is the only top level access of props or
[04:28:18]  like thing that doesn't actually um cause the thing to be recreated just just on a side i thought that was kind of interesting where like this array is top level this
[04:28:30]  use effect is actually nested in a function so would be a use memo or whatever but this top level changes every time but use state just ignores this every time the component
[04:28:39]  re-renders so the answer to to how to solve this is key the component from above let's say it's keyed on props.name that way whenever props
[04:28:51] .name works like you you can do something like this you can go you can above have something like key and then it can be like your name state or whatever that's one
[04:29:02]  way you can do it i i also have to pass in name equals name or whatever so this is one way of doing it you got a key prop another way to solve
[04:29:14]  this problem is to um and what react actually it does like an extra half render but it's worth it is you can go like if props.name not not not equal
[04:29:31]  name set props you can do this um those are better than using effect um because like effect is too late it finishes rendering and then it applies it and then does a whole not
[04:29:51] her render this at least knows to bail out before it actually does any of the real work it like it runs it but then it goes okay i'm going to run it
[04:30:01]  again but i'm not going to bother diffing and patching and doing the whole thing it's like it runs the component but it doesn't actually like go in and process
[04:30:11]  the child components or continues it just runs this body creates this jsx and then runs again because like when it goes to like finish up like wrap up it goes oh um in
[04:30:22]  the process of rendering our state has changed again so we need to run it again um according to their official docs this is better than using use effect but i think you're
[04:30:37]  starting to get to my my point here is that if both are addressed the need for use effect largely disappears although people might still reach for it because it when faced with how
[04:30:50]  to make something update they find synchronization still their first like approach um but let's to answer your question here here from the official here's from the official react docs
[04:31:16]  i love how much no react when the react that's i mean it's because i'm interested i couldn't make solid what it is if i didn't understand how react works
[04:31:25]  right how do you and i don't mean specifically um focus in on just react but how do you make things better if you don't know what the problems are right um
[04:31:39]  so yeah here's here here's here's our exact same scenario again set select null avoid see whenever items changes from above they want to set the selection to null this is
[04:31:58]  this is what people do this too is not ideal every time the items change okay do they have the key prop example yeah here key user id yeah we talked about this right right
[04:32:11]  the list will render with the selection value at first then it will update the dom and effects and then finally do it again start by deleting the effect instead adjust the state directly during
[04:32:21]  render see they yeah see there you go they made another state variable that stores the previous state previous items set previous items and then yeah i don't know if my example needed
[04:32:40]  sometimes like this is the hardest part for me to reason about react sometimes it's like like when you get there you're fine but i don't work in every day i think
[04:32:49]  actual react devs would be like more clear on why this needs to be another state variable why you can't read just the value from items i guess you don't have
[04:32:56]  the previous value no but you do have the oh no in this case you don't in my example i had the previous value because technically i was setting it into my own state
[04:33:04]  so yes set the state if items not equal to previous items set the items this this is exactly what we did this is rendering during and this pattern is more efficient in effect
[04:33:15]  most points shouldn't need it no matter how you do it so they're like derive don't set state just derive get the selection by deriving right and this is the proper
[04:33:32]  but do you see the parallel between where we started and const const const does this not look just like my conversation with dan abramoff where we started with his final version
[04:33:48]  like this and i rewrote it to const const const like it's it's interesting right because the react team and the react compiler and this whole thing will fight to
[04:34:10]  the death to make sure that you can write code that looks like this they they will they will make sure you know that you're right to write sorry i should have zoomed
[04:34:22]  in earlier code that looks like this um is preserved sorry let's make it even bigger um not that version right that they will make sure that you can write this code but
[04:34:40]  the reality is you should have written this code you should have written this code in the first place you should have written this code in the first place Well, writing to
[04:35:02]  state can kind of create loops. The derived version can't, right? Yeah, I mean, this is kind of going back to Dev's comment. Because once your code
[04:35:19]  looks like this, the difference between solid and react is whether or not this is in a function wrapper. You add the little thunk here, and the code that is
[04:35:32]  exactly the same just runs way more optimally, right? Like that's what always confused me. Cause when I looked at react, this is the problem. Someone who writes
[04:35:44]  signals and then goes to react like me, they, they, they, they just go, okay, well, like they already write their code like this. This is how
[04:35:53]  you write your code. You think this way. So when you go to react, you're like, okay, use memo, like you might overuse use memo,
[04:36:02]  but you already write your code this way. So like the most optimal cleanest way to write the code is how you already do it. So it's like, it
[04:36:10] 's very hard sometimes when I look at react code. Cause I'm just like, what the are you doing? But I have years of training myself to write code this way
[04:36:30] . Oh yeah. Is there a nice way to solve this? Well, that's a good question. I, I had, I had a, I, this is
[04:36:41] , this is my current, this is my current solution in for solid 2.0. Done. Is that a nice solution? Missing parentheses. Sorry. I
[04:37:26]  mean, that's, there are times. No, no, no. I've actually already made this primitive. It's, it actually, what creates, what I do
[04:37:42]  is if it's a function, this is the argument and functions are already a little bit weird, right? Cause you have to call function to the function center. Yeah
[04:37:52] . Yeah. This updates on prop change because it is a function. This does not because you just initially applies to it with a value. That's, that's where
[04:38:05]  I'm sitting right now. There might be argument for the handle this differently, but this is just where I'm sitting right now, because. The way you implement this
[04:38:14] , more or less, is you wrap, I mean, X, let's go to GitHub. I, I, I've kind of already implemented this solid. No
[04:38:28] , um, we'll just go here for a second and then we'll go, you know, we'll go here and we'll go to signals. I haven't touched
[04:38:39]  it this week. And let's go to render effects branch source. It's just, it's so easy to see that it's, it's probably not index.
[04:38:54]  It's a signals TS. Um, here it is. If type first equals function memo, create memo. Okay. Yeah, there's some internal stuff here. I
[04:39:10]  can, uh, I can, uh, I can, I can show you what this code means though, pretty easily. I can write this in solid today without using internal
[04:39:19]  stuff. Give me two seconds. So. Um, yeah. What's the first argument? It's the function. So it's like, yeah, I'm
[04:40:07]  just, I'm trying to think of the, this is previous. This is the function. Don't, this is probably initial value. Let's make the simpler version.
[04:40:31]  Let's not worry about the, let's not worry about that. Let's just do this. Let's just do this. Remove this options. Okay. Do,
[04:40:39]  do, do, do, do, do. Actually, I don't even need this. Sorry. Yeah. I'm, I'm, I'm like overdoing
[04:41:18]  it. Okay. Sorry. A lot of the code just like disappears. If you understand what I'm doing here, previous, previous, it doesn't really matter. Just
[04:41:29] , we're not going to worry about the untrack. We're just going to, we're just going to, I'm just, I'm just, I
[04:41:34] 'm simplifying it a little bit, but essentially the idea is, and then we can get rid of this. It's just, okay. it's a memo of
[04:41:48]  a signal. Yeah. Here we go. Hope this makes sense to you. It's a memo of a signal is the reason that this works. So it actually reads it
[04:42:00] . So like essentially the, in this way, whenever this changes, it's a little inefficient. It creates a new internal signal, but because the read out here reads
[04:42:21]  the memo. the first place gets the signal or writes to it, it means that every time the props change, you create a new signal, it's basically nested
[04:42:31] . And then every time you internally change it, you just use that signal internally until the props change again and replace it with, with signals. It's like a higher order
[04:42:40]  signal or something, essentially like mechanically. this is better than an effect because we know the dependencies. Problem with an effect is you break the dependency link. It's
[04:42:52]  not derived like you, you write to it, but you have no clue what it depends on. The difference is this, I mean, we're not using name anywhere.
[04:43:01]  That's the most ironic thing about this example, like whatever. This signal here for name knows that it depends on props.name because it reads from the memo as part
[04:43:18]  of its accessor. So it knows that when we update props.name, it goes, okay, what could have changed? And it gets all the way down to this
[04:43:29]  render effect. And then it goes, okay, I'm going to see if it's actually changed and I'm going to execute it and then it's going to go
[04:43:34] , okay, blah, blah, blah, evaluate this. And then, you know, in the render effect and do the pinpoint update. It actually like the problem with the
[04:43:44]  effect is it doesn't know you run the effect. And then it, like you, you could, let's say you did a change that like, let's say props
[04:43:52] .name is used directly. Like whoever passed it in uses it directly somewhere else. What would happen is if you updated it, it would update the Dom in the one place
[04:44:02] , trigger the effect, the effect would call set signal and tell it to go, okay, now you notify. And now you do it. It does it in two
[04:44:12]  passes, same as react. We don't re-render whole components, but you, you do a double cycle, right? You do, you basically run everything like all
[04:44:21]  the fine-grained updates. And then you run all the fine-grained updates on that, not a big deal. Cause they're fine-grained. You
[04:44:26]  don't have to re-render any components, but this approach does it in a single pass because it's derived. It's confusing. It's it's line 15
[04:44:47] . is, I mean, fine, let me remove, I'm going to make this even easier. I'm going to get rid of the previous value. Um,
[04:44:58]  okay. Yeah. Yeah. We pretend this is function create memo signal or something. I, I, I, I, this is just a mode switch, but it
[04:45:13]  would be like this. Sorry. I, I basically took part of, of, of, of create signal here. See now this return statement is crazy, but it's
[04:45:30] , it's. This is the read side of the tuple and this is the, the right side. Right. So I'm just returning the array. I love
[04:45:49]  the way this composes, right? Basically make a, uh, computed or a memo of signal. Um, and then I, I just decided that like, at that
[04:45:59]  point I was like, why don't we just build this in because when I'm creating state in a component most of the time, I'm just gonna set the initial
[04:46:05]  value, but occasionally I might be like, yes, I'm creating state. And don't get me wrong. If I build this, it'll be abused. People will
[04:46:11]  use this where they shouldn't, they never need a setter and they should have just used a create memo or something. They don't need a, they just need a
[04:46:17]  memo of a value. You don't need a memo of a signal of a value. But the fact that this is a pattern that you can just like, I mean,
[04:46:25]  we could make this a special primitive, but then that's too much. You come in, you create some state and you're like, oh yeah. Okay. It
[04:46:31] 's create signal, blah, blah, blah. And then you're like, why is this not updating? Well, it's fricking not reactive. So, you know
[04:46:37] , like in a sense, if you, I'm almost arguing that this should usually never be a thing. If you're, if like, this is fine, but
[04:46:52]  if there's the potential of props changing, you probably should always wrap it, which is why I'm getting here. Uh, by putting in the core primitive, it encourages
[04:47:06]  people that when they actually get something reactive as a prop that they care about it changing in their component, they should wrap it rather than just set it in because like,
[04:47:16]  that's what you do. Right? Like think like I turned this off, but ESLint will complain about this. Reactive variable prop name should be used within JS
[04:47:26] X to track scope. Like a crate effect or inside event handler, or else the changes will be ignored. Look at that ESLint warning. And then go away
[04:47:33] , right? You're getting to it. It is possible. You just have to return to function to function, right? We already have this problem. I don't know
[04:47:51]  if you're like our concern in, in solid today, if you return, if you said, if you set it with a function, like, uh, let's pretend
[04:47:59]  we do this, it doesn't make it reactive. But when you go to set name here and you pass function, it won't do what you think because we support
[04:48:06]  this version, right? Like previous value pass in. So if you want to set a function, you have to actually always pass in a function to set the function. You
[04:48:16]  have to use the function form always. And that's just the trade-off for us being able to do the, the, the, the self-reflecting version
[04:48:24] . This is the same. If you want to set a function, you always have to set a function. And I, I, I did some code in here because
[04:48:32]  you're like, oh, that's kind of sucks. You're creating these extra memos, but I did something really cool and create memo that you, you, you
[04:48:39]  all might actually think is kind of cool. Um, when we create the memo, create the computation, this is creating a memo internal, right? The return value goes
[04:48:50] , if node, read it, if node sources length, if not node sources length, node equals undefined return value. What this means is if you do a computation
[04:49:02]  that reads from nothing reactive, let's say it's just a function or a string, it will, this is, this await is just a read. Uh, it
[04:49:14] 's, this has to do with async, but it will, if there's a node, it will read it and get the value. But if there is no
[04:49:21]  sources, it will undefined itself and return the value. And because there's no sources, it can never update again. So the next time the function runs.
[04:49:31]  It will go no undefined and just return value, which means this node here gets garbage collected, which means that essentially we free up the memory of the memo. If
[04:49:42]  there's nothing reactive in it. Now, if I was really going further, we'd actually cache the memory for this and reuse it for the next node. I haven't
[04:49:51]  implemented that yet, but the idea here is that memos that become, or any reactive, I guess, mostly memos, memos that become unreactive can free themselves
[04:50:00] . So the overhead is the API consideration of knowing you have to do this. But since we already do this, the stretch to doing this, it seems very small to
[04:50:10]  me. It's actually makes it more consistent, um, because right now, today you do this and you still have to do this. This is, this is actually kind
[04:50:23]  of telling, I think, um, that being said, um, yeah. Uh, I, I, I, I'm just, as I said, I,
[04:50:34]  this is just an example of one way one could solve this problem, but it shows that like between this, which is, this is our, our, um, our
[04:50:47]  sync primitive and this, create async, fetch, user, props, dot name. Um, where's the effects. Right. This is an example of forcing
[04:51:12]  people's hands a little bit, but I mean, there's one more level here that's going to make people even want to use effects even less than solid, um
[04:51:30] , which comes up in the chat. is funny. Um, uh, because I wasn't like trying to advertise this, but, uh, oh, where is it
[04:51:41] ? Um, the last little bit of this one, um, where am I not in here? Um, I, I think, I guess it was this one,
[04:51:53]  no, so like this is always weird when you're like, yeah. Okay. Fine. Let's, let's go back. I'm going to go back to this
[04:52:03]  thing. Of course, um, Dev comes in and goes, wait till you see what solid is cooking up. And I thought he was going to talk about this, which
[04:52:12]  is fricking sweet. Instead, instead what he does is show that we're looking at splitting the effects. Um, like the front and the back end effects so that
[04:52:23]  the reactive part is the tracking function in the front. And then you do the effect in a separate thing. Yeah, you can do this too. That's even more
[04:52:47]  optimal. Yeah, definitely. Like you've skipped the intermediate. Well, I guess you're keeping an object, but yeah, whatever. But he actually highlights this, which
[04:52:56]  people are like, what are you doing? It's dependency arrays. But the, the reason for this is pretty powerful. I've talked about in separate streams, um
[04:53:10] , but yeah, there's, there's, there's good reasons for this. Mostly that we know you shouldn't be reading from reactivity in this side. You should
[04:53:24]  only read from it on, on this side. Um, ESLint for that might be a little bit more fun. Um, and we can run this side,
[04:53:31]  like in concurrent rendering and stuff. Um, getting back to my title tag problem. We could like calculate the titles here without worrying about people trying to like a setting it here
[04:53:43] . Like my problem before is render effects run too soon and effects run too late in this world. Effect and render effects are almost identical on the front half. They run
[04:53:53]  soon, but the effect themselves, they just get sorted. You do the render effects before the effects, but the, the split is between these two functions. Um, essentially
[04:54:02]  you can run all the stuff. Know if it's async, know if you have to suspend even for effects for the user before running any effects. This is a kind
[04:54:12]  of a shortcoming we haven't solved today. And the reason why I realized I was in, I was in the middle of making, uh, an example for, uh
[04:54:18] , what's that thing, uh, for the meta tag, I was working on it and I, I, I switched between pages and I saw undefined profile
[04:54:27]  and I was like, damn it. And I realized immediately what my problem was. It was because the render effect, which was doing us good work on the server in the
[04:54:37]  client was causing us to, um, even though that section of the UI suspended, the render effects on creation always run so they, you can render the page. And
[04:54:48]  this side effect was there. And the problem is if I made it into an effect, which would delay it and make it, you know, function properly, which update the
[04:54:56]  title until it actually had the data, it, it wouldn't also read the async thing. So it wouldn't know it'd have to wait. So I found
[04:55:06]  one of the first pretty late in the cycle places where I really have been punished by not splitting the effects, um, in current solid. But in any case, um,
[04:55:18]  there's a lot of interesting implications that come with splitting like this, because you can say you can never write in the tracking scope, right? Cause right now in create
[04:55:29]  effect, someone can write and you it's legit, but you can say is you can only call set state in here in memos, in whatever you cannot write here.
[04:55:35]  You can only write on this side. Um, the separation makes things incredibly clean. I know people aren't going to like this though. So this might even discourage
[04:55:48]  them further from. So they go from being able to write like, uh, where did he write it? They go from being able to write stuff like this, which is
[04:55:58]  easy using effects, obviously. Um, to, to being able to, to having to write something like this, I guess you can, you can skip the function. You
[04:56:06]  just go his, which is the original one right here. You can, because it is a functioning, you go create effect count, console log count. Um, how
[04:56:14]  does this work with multiple times? Well, you, you can just put in it. You generally like, like an easy way to do it would be an array. A
[04:56:33]  B C could also make it an object. Maybe the biggest reason is you want to be able to, I know this is not convenient. Don't get me wrong.
[04:56:47]  This is less convenient. I understand why this is less convenient, but a B C. The biggest point here is you actually want to pass the stuff from the front half to
[04:57:02]  the back half. react doesn't give you this stuff, which was crazy to me because this gives us the ability to keep this within the concurrency. Like basically solid
[04:57:12]  has the ability to call this function with whatever it needs to stuff. You close over has this problem of concurrency that like it, you can be reading old versions or st
[04:57:22] ale versions, depending on what version of the thing you're making. But this, we can ensure that the right version gets passed to you here. Right. Because it
[04:57:32] 's being fed through. Um, and the benefit, as I said, of doing the pass through approach, um, is that you actually never need to read anything reactive on
[04:57:43]  this side in theory, which means that. Stuff like strict mode that I haven't got into yet. Um, you know, I did on that stream. It's
[04:57:52]  possible if we really wanted to get into like strict mode conversations where we're saying like error. If people try and access reactivity at top level and components or in set time
[04:58:01] outs or places that won't track, tell them that they're doing something wrong. At least warn them. This is another thing in that category. Um, as I
[04:58:09]  said, we can protect rights to make people, to try and prevent people from writing on this side. We can, we can prevent reads on this side. So like,
[04:58:17]  this is, I get it. It's more, it's not a good API. It's not one that like, from the perspective of like people are happy to use
[04:58:26] , but it's exactly what it needs to be. And I'm, my hope is that you just don't it. Why reach for this when you can do this
[04:58:38] ? Create resource with transitions at the stale sailors, right? Unless using function armies passed to the fetcher. Yeah. I mean, create resource is actually a lot
[04:58:56]  of similar. He's on the split, right? You have the tracking scope. Um, create resource runs at render effect time. Like it's on the pure half of
[04:59:07]  it. So like, yeah, I mean, I've known about this gap and solid since I came up with our async system. I I've been, this
[04:59:18]  is something I've wanted to address for like five years. It just, you, everyone wanted a meta framework. Yeah. Like how, how would you do this with an
[04:59:31]  array? You would just go. Yeah. I mean, you just go. A. Yeah. Arrays are easy. C. And then. A. B.
[04:59:43]  C. Done. Right. That works. Yeah. Here. How would you create a signal if you didn't want it to update? Uh, my idea on strict mode
[05:00:00]  is that the way to opt out is out of stuff. Is to just to explicitly call untrack. I know this is not the happiest thing in the world,
[05:00:10]  but I'm actually thinking that the injection of the strict mode stuff is untrack. So in a sense, untrack is, has the option of having like should
[05:00:23]  error, you know, like as a second prop or something. And generally speaking, by default, untracking is not should error. So it overrides the
[05:00:30]  parent context. So like if the component was untracked, which it does with should error, you calling untrack a default way with it, shouldn't error
[05:00:41]  will cause it to work fine. And then from that perspective, um, like you, you always have the ability to opt out of this behavior. You, the problem
[05:00:55]  then is you, and it's the same problem I have with on, these are functions. That's fine. Okay. Let's do, let's do this.
[05:01:09]  Props. A. Props. B. Props. C. I, I, so the only reason I mentioned this one is because this is one of my biggest
[05:01:22]  pet peeves peeves with on is this works. This will never work. You actually have to change it to. Second problem with this is as the framework code side
[05:01:44]  of things. Now I have to write something that iterates over the arrays and handles all this stuff. Whereas funnily enough, and you look at the on code
[05:01:55] , the, all the code for on is, is basically this funnily enough. If I just did this, I just call the function and pass it through. I
[05:02:02]  literally like there's no additional iteration. Right. This is, I know, uh, view does it on like a few others like to it. I assuming that something is
[05:02:18]  a signal or a function signature here. Like as a list is not. Yeah. Yeah. I'm, I'm not. Yeah. I'm, this is like
[05:02:29] , it's just. Simpler. It's not necessarily easier, but it's just way simpler. I'm not saying we have one. It was just something I
[05:02:47]  was thinking about. Every, ever since that conversation about the, the dev signals versus signals thing. And the whole like crazy, like, I, where was it there
[05:02:57] ? There there, there's, there's a whole bunch of stuff in this article. Um, Devin Gavitt's thing, you know, basically ever since this
[05:03:07] , we have ESLint warning, but there's been a question. Like, should we just like be real jerks about it? It seems like. I don
[05:03:13] 't know where we sit when rust was getting popular. People were kind of like, you know, just break, just shout at people, tell them they're doing something wrong
[05:03:23] . You know, it's, it's like the extension of the TypeScript thing. We're getting kind of back in a more middle ground zone, but yeah,
[05:03:31]  I mean, there's a real temptation to just be like, nope. If you want to do this, you have to like untrack it explicitly. I have a
[05:03:40]  whole stream on this, by the way. Um, sorry, my headphones jam up here. Uh, what, how long ago did I do this? Two, two
[05:03:55] , two years ago. No, where was it? It was, it was around 1.7. Wasn't it? Yeah. Yeah. Strict mode. Yeah.
[05:04:08]  Not easier, but simpler. What does that mean? It means less moving parts. Um, honestly, I, I, I, this is like one of reacts core
[05:04:26]  core tenants and it's one of solid core core tenants. And it's something that I don't know if is as like, I don't think it's one of views
[05:04:36]  core tenants. For example, when I was talking about the difference in the philosophy, um, I've talked about this before on stream, but simple versus easy.
[05:04:49]  Simple means uncomplicated, easily understood. It's funny when you use easy, not, or not come to deal with easy means not hard or difficult to do. I
[05:04:58] 've like written my own definitions about this before. Um, but if you just Google it, that you're going to see tons of people talk about simple versus easy.
[05:05:06]  Obviously you want to be both, but often there's actually a trade-off. Yeah. Is that the, yeah. The, the, the, the, the,
[05:05:17]  the, the, the, the, the talk. Yeah. Rich Hickey. Yeah. Yeah. Anyway, I'm hoping I, the effects API is an
[05:05:33]  interesting one. I understand there's very good reason for it. It is actually like react. Um, in a sense, like we're adding back the dependency array, but
[05:05:44]  the implications of this and the implications of stuff like this, I think I, I'm, I'm excited for 2.0 because I think this might be when we
[05:05:56]  finally really step out of the shadow. It's a scary proposition. It's just so funny because I, I've told people this before, like we had signals before hooks
[05:06:04] . I did get this, um, this API from react and I would do it again. It had nothing to do with trying to like match API reacts APIs. I did
[05:06:14]  not care about matching reacts APIs at the time. It's worked well for us. Um, I picked JSX because it was available. I did this because it's
[05:06:22]  the right thing to do. Um, it hadn't, you know, it wasn't because I was like, Oh, it looks like react. So like, you know
[05:06:30] , there's, it's funny because there's been times that we've also made decisions different than react. And then they ended up coming around like the argument order for use
[05:06:38]  transition. Um, but I think maybe with this work towards primitives like this, we actually, the way you write code might get, you know, you know,
[05:06:55]  might change a bit more. And I know people like the migration story, but I think when you take something that looked like that example, you know, um, you
[05:07:09]  know, like one of these examples that we saw up here and just like literally just go like, like what would this one become? What would this one become use state
[05:07:24]  arrow function items or eat? Yeah. I don't even find, I, I, I don't know. They're assuming a bit in this, but yeah, basically
[05:07:38]  use state. Yeah. This one's an interesting one, isn't it? Cause you take the previous. Yeah. Why wrap this signal rather than an option second option
[05:07:56]  second parameter? Are you talking about for the, uh, for the crate signal stuff here? Um, it's debatable. The one thing that I liked about this
[05:08:11] , cause you can still pass initial value is what I'm thinking is that all the, like this has the same signature as create memo essentially like, Oh, on track.
[05:08:21]  Well, you could, but again, this is like now on track true. True. Or is that. Um, I, I'm not quite sure what I'm
[05:08:45]  fine. It just, all of these are like, like, I hate configuration objects. If you can tell, uh, you know, like it's funny. There
[05:09:01] 's places where it belongs. And like a perfect example is like, uh, react query went from being like this, like split to like being an object where you have function
[05:09:11]  and stuff. And it, as you get more options, you do need to go down that path where you have options objects. And all our primitives actually have options
[05:09:18]  objects, but I'm very much still of the mind of like the primary thing should just be an argument rather than just big options. It's just verbose the stuff
[05:09:27]  out. I know it's, it's completely an aesthetic style thing, but I like when the simple code is incredibly clear. Um, and I know you get more labeling
[05:09:37]  and stuff with, you know, if you go, you know, like, why don't we do this function this, you know, name this. They're just
[05:09:49] , there's something, there's just something about this that just always sits with me wrong. I don't. Yeah. Yeah. I mean, but then you have to
[05:10:06] , well, first of all, you need to wrap the props, not name in a function because otherwise I won't be able to untrack it. So you have
[05:10:11]  to put in the scope. Um, this like, like you, you can't just put untrack to it. It still needs to be a function that a
[05:10:19]  further execution. Secondly, the untrack true, like now, what am I doing? I'm looking at an option argument to then put an additional conditional. Like,
[05:10:30]  I guess it makes your life easier, but it makes the library code bigger, which means that everyone pays the price. I don't like, if it was the primary,
[05:10:41]  if it was the 80 or 90% use case, I would consider it. But if it's, if we are thinking that this is like the 10% use case
[05:10:51] , the times you want to untrack when doing this, it's not worth the convenience for the, like the fiddliness of like more conditions and more checks.
[05:11:01]  That's just like my perspective on things. Right. Right. Discoverability through types. Um, although the be fair, you don't need discoverability through types.
[05:11:13]  I don't think when literally like it takes a function, um, I mean, you see, I just said, I think there's a, I think this is
[05:11:29]  one of my challenges is because I liked JavaScript because it didn't have types. That's like, was my favorite part about JavaScript. I, I, I worked on
[05:11:37]  type languages in the past. I, I, I only really got to go back into JavaScript. Um, you know, a certain chunk into, into my career.
[05:11:47]  I was doing backend before then. Um, it's, it's, I, I, I think sometimes like with the most type kind of stuff, I just, it
[05:11:57]  doesn't sit with me quite as nicely because I got to a point where everything was clean and didn't have all that noise. So it's like, it's,
[05:12:06]  it's, it's, it's tricky to convince me to do anything for typescripts safe that would get in the way of the elegance of not of when types
[05:12:15]  aren't there. This assumes it's an object, but it could be any function. Um, this would work if props was a signal, but. But I mean
[05:12:34] , because if it's a proxy or a getter type thing, you would have to basically unwrap all the accessors on it. Um, so you'd be accessing
[05:12:50] , I think every property in the, at least in the property description. It's a DHH pill. I mean, okay, I was a coffee script developer.
[05:13:03]  So in a sense, you know, I, I thought Ruby was probably pretty elegant. Um, but yeah, I mean, I'm just one of those people who types
[05:13:12] cript has done nothing but get in my way since I started. Um, I, I, I, I've written articles about my experience with typescript. I think
[05:13:21]  it's important. I think I, I done stuff like use server for inspired specifically for typescript, like server functions because of the importance of the contract. But like
[05:13:37] , there's types, there's times that types work for you. And there's times that types work against you. As long as you don't let the times that types
[05:13:47]  work against you influence your decisions, then you're good. types are different. They are for easiness, not for computer. They're, they're a super l
[05:14:00] inter essentially. Right. And I think that's good, except for when it would force you to actually like, they're like also form a documentation. They're better
[05:14:13]  than comments, but like, there's like a, there's a point at which. And I, I mean, classic example is using the functional form of show components
[05:14:28]  and solid like this form show when user this, this one, and the there's, this isn't like, well, this is a solid problem. Obviously it's
[05:14:49]  not, uh, sorry. It's not, it's not completely like any JSX who tried to do this would have this problem. You have to do this because even
[05:15:04]  though we know what's going to be there, typescript from JSX can't, doesn't know this is an if statement. Like we just can't possibly know this
[05:15:12] . There's also the second problem of this being actually a function, which is not a deponent by definition. So again, typescript can't even know. So
[05:15:19]  I did this forever and I liked this. It's fine. But there are people who, I mean, I, we, we have this in solid. You can,
[05:15:30]  you can do this. And now you don't need to do this. There we go. Right. So this is stupid, but I like, I, I get
[05:15:46]  why like it, it brings more comfort. So like there's, there's, there's value to it, but like, this is, this is like, it's
[05:15:59]  tricky when you're trying to design a system of things where you want to accomplish something, which bends the capability of the expectations of languaging. Like putting JSX,
[05:16:08]  which is literally a template language. It is not JavaScript. And then like have expectations for things to work properly. You have to pick one. And in the case they,
[05:16:19]  uh, typescript picked react. Right. Or to be fair, it couldn't really pick anything else. Like how would it know what you're doing? You do
[05:16:28]  this kind of pattern react all the time to a certain degree. You don't have functions, but like, there's just no way to know. Right. And it's
[05:16:39] , it's, it's a tool that helps you. Um, it's just not, it's not. Yeah. You know, that, that's exactly what
[05:16:52]  it is. Any problems though? I mean, we do already allow this. People, uh, yeah, I mean, like I've had some amazing people work with
[05:17:21]  me on the team and in the team on typescript solve stuff because of the challenges we face, like trying to bring signals in, you know, and doing this stuff.
[05:17:30]  If, if you have ideas, probably I'm not the right person to talk to about them because I don't actually get it. Yeah. Right. I mean,
[05:17:45]  this is, again, we talking about how can you take good UX and get to good DX. We make concessions for types. Um, definitely. That being said
[05:17:51] , I, I've, I've never had a problem with an API that just takes a function as an argument. Anyway, regardless of my personal feelings on typescript
[05:18:10] , I think that, uh, yeah. I, I think that with, um, these mechanisms in place, it, it, it changes things significantly. I think
[05:18:30]  in a sense that like, even, uh, where it was, I mean, even like if react had viewed things like this too, I think we might've had less
[05:18:42] . Um, like at the time of hooks, I think we would have had less use effect as well. I think this is something that took time to realize like,
[05:18:52]  and I think that it's hard when you know the framework at the level that the core team does and just can like see the patterns. I have this blinders as well
[05:19:03] . Like you just know that people are just going to do really unexpected and possibly dumb stuff. And as I said, understanding that largely is what makes Dan fight to the
[05:19:17]  death here. the death here, sorry, not this example, this example, uh, I'm letting you write code like this and then writing compiler to try and optimize
[05:19:28]  this for you, um, to get results that aren't even quite as good as if you just written it like this. So, yeah, I think I'm going
[05:19:48]  to call it a day. I think I covered everything that I wanted to cover. Um, I don't think I have any more bookmarks. Oh, I do
[05:19:58]  have one more. I don't care though. It's just a Guillermo post about why CDNs don't work. Which is ironic coming from Vercel,
[05:20:12]  but I think he's explaining why everyone should use PPR. He's right though, about streaming is the only way to get... Oh man. Uh, no,
[05:20:25]  I, I'm over time. I, I, I'll talk about, I might talk about this next time. Yeah, I, there's a lot of things that
[05:20:41]  like, I just, I remember the, it's gotten better, but like when I first built solid, um, there was like definitely, I hit walls almost immediately with
[05:20:51]  JSX. And like you, we had suggested like, can I make a diva div? Well, apparently not so easily. And it's always going to be
[05:20:59]  that kind of challenge. I'm happy where things are enough. The only thing I wish is that I could denote a function as being idipotent so that we could
[05:21:08]  actually type check or like actually null check signals. But I, sorry, I should have mentioned this because of our new working create async, making non nullable as
[05:21:17] ync. The number of times you'll need to null check will reduce drastically in the future because sorry, just two seconds. So this user, in this example, assuming
[05:21:34]  that fetch user is always a promise of user in solid 2.0 will always be user. It will not be null user. It will just be user, which means that
[05:21:44]  the need for the null checks will go down significantly, um, because of the new way we're approaching async. So I, the, when I complain about this
[05:21:54] , it's possible that your code will just look like this anyways. And you won't like, that's how you solve the problem. You solve the problem by not
[05:22:08]  making, uh, you know, an extra wrapper function for everyone. You solve the problem by getting rid of nulls. Um, yeah. Um, anyway. Okay
[05:22:30] . I am done. I am done for real this time. Um, quickly see if there's anything more of the shout out on Twitch. I do not see anything more
[05:22:41]  to shout out on Twitch like on YouTube. If you haven't already, otherwise, thank you everyone for joining me today. And, uh, yeah, we'll just catch
[05:22:52]  you all next time.