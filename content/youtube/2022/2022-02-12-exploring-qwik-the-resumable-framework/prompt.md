---
title: "gT5NWKZZPQM"
slug: "gT5NWKZZPQM"
duration: "2:14:20"
channel: "Local"
url: "file:///workspace/output/ryan-solo-host-audio/gT5NWKZZPQM.m4a"
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
[00:00:00] Thank you.
[00:00:01] Thank you.
[00:00:02] Hey, everyone. Welcome to my stream tonight.
[00:00:08] Okay.
[00:00:10] Yeah, sorry I'm a moment late.
[00:00:13] We're going to be talking about Quik today, which is...
[00:00:18] A really unique framework.
[00:00:21] It's part of, I'd say, a series of what I've been looking at the last few weeks.  I've been really kind of digging into some of the more...
[00:00:30] interesting takes around in terms of how we can
[00:00:33] accomplish one of the biggest challenges
[00:00:37] that we face right now with modern JavaScript frameworks. And that is
[00:00:41] to send less JavaScript.  And there's a lot of
[00:00:45] There's a lot of different ways to attack this problem.
[00:00:49] I want to look at it because the interesting thing that they all have in common is
[00:00:55] These are distinct approaches. I'm talking about Marco, React server components, and Qwik here.
[00:01:03] all believe obviously that their way is the right way and that they have to give up some special trade-offs in order to accomplish this. But it's necessary. And
[00:01:15] they all kind of accomplish similar things in slightly different ways. And I'm trying to see if there's something we can kind of learn from that. And Quick's been kind of the one, you know, one of the newer ones that I haven't been able to dig in deeply to until recently. And Misko Hevery, the creator of Quick, and, you know, might know him as the, you know, father of Angular.
[00:01:40] He approached me a couple weeks ago and he's like, hey, Ryan, I enjoy a lot of your articles on hydration and general topics.  Why don't you take a look at Qwik? Tell me what you think.  And I've been dabbling in it since I first saw it, but it gave me the push to finally spend some time and build some stuff and play around with it.  And it's perfect timing for the stream for us to take a look at it here.
[00:02:04] Yeah, so everyone in the chat, I see you guys are kind of filtering in.
[00:02:13] Hey, hello, how's it going?
[00:02:15] Yeah. So, yeah, it's an interesting one, right? Because this is a unique...
[00:02:23] Take.
[00:02:25] So, let's -- before we get into it, we start every stream with a segment called This Week in JavaScript. And I got to admit,
[00:02:35] This week,
[00:02:37] has been a little bit more quiet for me.  I mean, I wasn't involved in the big iOS, you know, hogging all the browser, whatever  garbage that was going on this week.  That didn't really catch my eye.  So, you know, it's been a quiet week, but it's also been a really inspiring week for  me because...
[00:02:54] I got to have some of the most interesting conversations that I've had on the subject matter in
[00:03:02] in ages, honestly, between
[00:03:05] I was already telling you all that I've been talking to MISCO a ton recently. It kind of started from my last article. And we can look at that when we talk about resumable hydration.
[00:03:16] And, but even beyond that, great conversations with the Marco team, we're just wrapping up. I call it the pre alpha, but our pre alpha demo kind of milestone for Marco six, the first time we have a full app compiling from the tags API all the way to Marco six runtime.
[00:03:46] And, you know, it's been really inspiring. And I finally got the chance to sit down with Dan Abramoff and pick his brain about the future of React. So really, really fun week in terms of the conversations, but a little bit less...
[00:04:01] Thank you.
[00:04:02] A little bit less going on in terms of, you know, the JavaScript world for me.  I think the only couple things that came up for me this week that I really noticed was obviously...
[00:04:17] another comparison where people were talking about some optimization technique that you can use in React and
[00:04:22] You know, I piled on a little bit, but, you know,
[00:04:26] Someone pointed out like, hey, with solid, you can write them either way and they do the same thing. Right. So, you know, that's always fun. But actually, probably the most interesting take was, um,
[00:04:38] Yehuda Katz, co-creator of Ember.
[00:04:43] He said that his hot take was React does an excellent job of clearly identifying the problems that it solves in extremely confusing ways or doesn't solve at all. Basically, they're very transparent about their shortcomings and they document it really well.
[00:05:00] And
[00:05:01] I think that's really accurate.  That's part of the reason that I...
[00:05:06] like and respect React and the React team so much.
[00:05:11] This isn't...
[00:05:12] crazy thought to have, but
[00:05:15] you know, they, they, they're very clear about the hook rules.  Like the last thing they want is for you to kind of fall into a pattern where, um,
[00:05:24] you know,
[00:05:24] some unknown prevents you from doing what you need to do.  What I mentioned actually is it's rarely the known constraints to prevent you from accomplishing your goals.  It's actually the unknown ones that can have catastrophic effects.  Like if you know that, hey, there's a rule that you have to follow, but you get, you know, all the good tradeoffs,  you just follow the rule. And even if it's a little ergonomic clunky, you get what you need done.
[00:05:48] It's when you don't know the rule that things slide out of control.
[00:05:53] But honestly, the most interesting thing about this thread was something that happened part way down. I'm not going to chase it to find it. But it came up with that conversation again about why React uses class name over class.
[00:06:06] And someone in the thread, I forget who it was, someone asked him and was like, oh, it's because...
[00:06:15] Obviously, it's because you can't use class.  It's a reserved keyword.
[00:06:21] But...
[00:06:22] I mean,
[00:06:24] We're using class and solid.
[00:06:27] You can use class and preact.
[00:06:28] I mean, basically you can make an object.class.  And since props are objects, this is not really a blocker.
[00:06:37] What is though, and maybe the mindset is React was originally treating all the props as props, as properties, and then they followed the property naming instead of the attribute naming.
[00:06:51] Um,
[00:06:52] I guess for me, this was perhaps a relatively obvious point. In Solid, we used to set the props instead of attributes. When you put a random prop on the JSX, we did props by default. It's way simpler and more performant for most things.
[00:07:07] Ultimately, we ended up going with attributes because props have a bunch of edge cases around them and attributes actually handle more situations.
[00:07:16] better per se. And it's more natural to the way people use HTML. So I did actually switch to  attributes afterwards. But it is an interesting sort of history lesson or thought that, you know,  that naming is consistent that way. And as someone who's played with JSX, I didn't think  about it much, but a number of people in the thread, they're like,
[00:07:37] Like it just never occurred to them. And it's kind of funny or interesting how the same sort of stories and reasonings propagate around through the community for years.  And maybe like how much truth is in them? I don't know. It just it was one of those really interesting moments for me this week.
[00:07:54] What are you guys saying in chat?
[00:07:57] Okay.
[00:07:58] Anything fun here?
[00:08:01] Thank you.
[00:08:03] Unrelated question. What's your opinion on B versus next? SWC is going to have better, like, it's hard to say. ES build, which is underneath V is really, really, really fast. SWC has an AST parser, which makes it more attractive to people doing custom things.
[00:08:21] The thing with VEAT is...
[00:08:24] They've just put together a really nice usable package.  I think it's kind of speaks for itself.  SWC is incredibly powerful.  Next is great at DX, so I'm sure
[00:08:35] some great things are happening there. But I mean, Vee just sort of took off. And the important thing is, it wasn't about end user adoption. You know, from that perspective, Vee and Parcel could have been neighbors. It's that the framework authors, it came at the right time that the framework authors kind of jumped on it for the meta frameworks. And I mean, obviously, I'm involved in a couple of those being Marco and Saul and building their stuff on Vee, but SvelteKit, it just, it just, it was just the right tool at the right time. And it's just kind of blown up from there. So, I mean,
[00:09:02] I would love to write Solid's Babel plugin in SWC instead, you know, write it in Rust.  But generally speaking, you know...
[00:09:12] Just where it is in terms of adoption and people being able to use it, Vita is way ahead.
[00:09:18] even if SWC might be more compelling, ultimately.
[00:09:21] Thank you.
[00:09:22] Thank you.
[00:09:23] Okay. So, yeah. Yeah. I mean, it's a hard documentation task to be fair. Like there's always shortcomings. I, I,
[00:09:32] React is one of the better ones on this.  Svelte might not be one of the better ones on this side of things.
[00:09:40] I try my best with solid, but a lot of times when you're a smaller framework and you have less resources working on it, it's more of an accident of omission rather than like,
[00:09:48] Yeah.
[00:09:49] any intentional gap.  Some other frameworks are almost
[00:09:55] misleading. But of the big three, I don't think any or four, I don't think it's the case. I think  you find that a lot with, you know, the hungrier frameworks that are kind of like, you know, five,  six, seven, eight, you know, range who just want to kind of get some wins, get people in there to  check it out without necessarily being honest on it to a certain degree. But I don't think that's  terrible.
[00:10:19] you kind of
[00:10:21] consciously you're like oh man I don't really want to talk about this and then you end up just  maybe not documenting it but it will always catch up with you so anyway
[00:10:34] Thank you.
[00:10:34] Yeah, this makes a lot of sense. See, if you're comparing like SWC to ESBuild, I'm not going to lie, I was not excited about ESBuild. I looked at it and I was like, okay, yeah, so it does the one specific thing really well. This is not a replacement for Babel.
[00:10:51] you know, and then, you know, kind of
[00:10:53] bugged them and went to Evan and was like, can we do plugins? And they're like, oh yeah, I can kind of do plugins. But it wasn't like AST, it wasn't the same thing. So I don't even view those pieces as competitors.
[00:11:04] Veet kind of just makes whatever it can work, right?  It's kind of got like sandwich roll up on top of ES build and, you know,
[00:11:10] Underneath, it's a bit of a mess, but it all kind of just works nicely. And that's all you need for V1, maybe V2. And I'm confident that they're going to clean stuff up and it's going to be really nice in the future. I mean, there's enough investment in it now. It's one of those examples of, you know, like...
[00:11:26] you know, was it built...
[00:11:29] build it fast, build it, build it fast, build it good kind of
[00:11:33] kind of thing. It really captured what they wanted it to. And it's out there now and people are using it. So they'll just make it better.
[00:11:42] All right. So where are we at? Yeah. So
[00:11:46] Yeah, I mean, like, honestly, what else happened?
[00:11:51] I mean, I got a chuckle over this one. I've never seen this syntax.
[00:11:55] Check this out.
[00:11:58] Is this svelte?
[00:12:00] at const,
[00:12:01] Honestly, I thought I was looking at some weird version of Marco's tags API or something and had the at signs and stuff. I mean,
[00:12:11] I can see the power of this and the co-location thing.  This was not the last thing I expected from Svelte.  A lot of people who are in the Svelte camp are so adamant about how
[00:12:23] It's just JavaScript and HTML that adding powerful syntaxes like this I thought was off the table.
[00:12:31] Rich has credited the success of spell is not kind of pushing the syntax too much, you know.  Maybe they're a little bit more pushy on the templating side, but it's just interesting to me because honestly, when I see stuff like this,  it gives me hope that people, you know, people are excited about this.  Then, you know, they should be excited about Marco because Marco syntax enables incredibly powerful things, as we've talked about in previous streams.
[00:12:55] I'm not.
[00:12:55] Um,
[00:12:58] Perfect.
[00:12:59] So, yeah, anyway, I'm
[00:13:03] Yeah, I think the only other thing for me was, and this kind of ties into what we're talking about today, was my article, Why Efficient Hydration JavaScript Frameworks.  It's so challenging. I didn't retweet it, but it got featured as the top seven article on Dev2, which is cool.  I've only had that happen three times in the last couple of years to three years to actually, I guess not quite three years.
[00:13:33] I think it's really good that everyone read it.  Incidentally, this is two weeks in a row for that.  My last article, the one I released the week before,  also got featured, which is crazy.
[00:13:42] The last two articles, I guess, are pretty timely and important. And that kind of ties into my conversation today because
[00:13:49] a lot of what we're talking about today
[00:13:52] kind of spun out partially from a conversation that I had with Nisco in the chat on this very article.
[00:13:59] Yeah.
[00:14:01] um
[00:14:02] All right. Let's kind of switch gears here for a minute then. I think we are done with this week in JavaScript. So let's talk about Qwik, right? Let's make the transition. And I'm going to just throw it right out there. This is going to be probably the first question for a bunch of you because I put it right in the stream title.
[00:14:32] Well, I
[00:14:35] Quick.
[00:14:37] is a JavaScript framework. It uses JSX. It kind of looks like React in the way that Solid looks  like React. It's not the same, but you squint, you kind of see the same sort of stuff. But Quick is  very different in that, like Marco, it has been built from the ground up with this kind of concept  that we don't want to send all the JavaScript. That's the goal. We want to be able to
[00:15:05] load our apps
[00:15:07] And
[00:15:08] not take that hit. I mean, Quik was built for e-commerce the same way that Marco was built for e-commerce. The focus here is that initial cost, not just the rendering cost, but the initial cost of hydration, the time to interactive, loading all that JavaScript, loading all those scripts, getting all that going, actually...
[00:15:26] affects your bottom line. It affects sales. It's been shown to affect how many items go in people's  cart. There's a bunch of data for years on this stuff. And you just have to look it up.
[00:15:44] And you will find tons of examples.  Obviously, a lot of companies only share some of their information.  eBay, obviously, Google.
[00:15:54] I had a study, I think a couple of years ago where they're showing that like, I mean, it wasn't a big thing, but like every hundred milliseconds increase the number of items in cart by 0.5. So I guess every 200 milliseconds with an extra item in cart or something, it made, it made a, it made a relatively, you know,
[00:16:10] you know you can you can argue about you know how much that impact actually is but  it's been it's been shown consistently across the industry that there's a
[00:16:18] direct correlation between the kind of responsiveness and loading of a website and the sell through rate. So this SEO stuff matters and even matters even more now because Google is using it to rank the actual search results listing. So there's a lot of people who are, you know, starting to feel the pain of that, especially as their sites get larger. And
[00:16:42] The truth of the matter is, and we've kind of talked about this before, is
[00:16:48] Thank you.
[00:16:49] It's not...
[00:16:51] This is not just like a feature you just add.  You're just like, oh, yeah.  I was thinking, you know, my React app or meta framework or whatever is a little slow today.  Let's just add some partial hydration in there.  It doesn't really work like this because...
[00:17:09] It's an architectural thing and I've been hinting at it in my recent articles, but
[00:17:14] I mean,
[00:17:16] This is a different take than Marco.  And I haven't practiced explaining this to people.  So we're going to give it a go.  I got a ScalaDraw ready.  I got a playground where I can dump in some code.  And let's just talk about what I mean by resumable for a minute.  I'm going to use Solid as an example.
[00:17:34] so that I can show code that people here might be familiar with.
[00:17:38] We've all seen the silly counter.
[00:17:42] Right, counter click the button.  But I've added a couple of things in here.
[00:17:45] And essentially what I added in here was I added a memo for double count and then I'm using that double count to create effect that writes the document title. So essentially whenever the count changes, it affects double count and then it updates the document title when I do this as well. And we're not seeing this right now because the way the playground works, but essentially
[00:18:08] I wanted to throw a few different primitives in here just for people to kind of mentally understand the difference between, say, React or Solid and what Quick is doing.  Because here's the thing.  Now...
[00:18:22] pretend
[00:18:23] this counter has been rendered on the server.  We have a button.  It has a count in it.
[00:18:31] In our case, you can't click the button on the server, so it's going to have a one or whatever. My initial value is going to be in there. But...
[00:18:40] When the page...
[00:18:43] First loads.
[00:18:46] we will have rendered this button with a one in it.
[00:18:49] right, regardless. So the question is what code
[00:18:55] of my component here actually needs to be ready and in the browser at that point
[00:19:01] in order for our app to be able to have the correct
[00:19:06] the correct behavior.
[00:19:08] Right. That's the first question you should be asking yourself. And the truth, we only need a couple of things.
[00:19:14] if you think about it, right?  We need...
[00:19:17] a click handler, we need to be able to click it and have the number update.
[00:19:22] Right. And
[00:19:26] We need a second thing in this example.  And I don't know if Quick has gotten into it,  but I'm just teaching the general concepts here.  I know this is on their roadmap.
[00:19:34] If this...
[00:19:35] Document titles, as people know, for most frameworks, effects don't run on the server.  They can't.  So generally, you can't do something like add a jQuery plugin.  You have some client-side only code, like updating this document title.  This...
[00:19:49] Also,
[00:19:50] technically needs to run initially.  Because otherwise the title won't be the right title,  or the side effect won't happen.  So you have client-only render code, like you have in effects.  And you need to have some click handler.  These two things need to exist.
[00:20:08] at the time of hydration. But technically,
[00:20:13] Most other stuff here in our ideal world would not need to exist here.
[00:20:19] like when you load it. And truth matters, we probably
[00:20:24] We might not even need to load the code for the click handler because
[00:20:28] you know, the click handler,
[00:20:30] I mean, increment here, it closes over a set count, which pulls in the state.  Like, there is some other code that comes by having this click handler here.
[00:20:41] So,
[00:20:42] The concept with QUIC is it knows
[00:20:46] from its compiler that there's a click handler here.  It doesn't need to necessarily know  what the click handler does.
[00:20:54] And as I said, I don't think the effect thing is there yet.  So that's something that's coming.  But essentially,
[00:20:59] If we just go...
[00:21:01] And,
[00:21:03] attach some kind of click handler, maybe a global click handler, that knows where all the clicks are, serialize this location into this button element in the DOM, then we don't need to run any of this code initially. And when we click our button,
[00:21:19] At that point, we can load the code that we need.
[00:21:23] And that
[00:21:25] In a sense,
[00:21:28] This is one piece of being resumable, but it's not the whole story.
[00:21:31] But this is the starting point, right?  Because once...
[00:21:36] once you've split out your component into these pieces,
[00:21:41] In a sense, it does just pick up
[00:21:44] where the server left off.
[00:21:46] it's a little bit more complicated than this.  And this is why I put a bunch of these,  these other things in here,  because I mean,  obviously,
[00:21:53] If you have like a VDOM library, you know, like React or something, or, you know,
[00:21:59] At that point, you would be rerunning the component over again and doing all this work.  And one of the cool things with the reactive system is...
[00:22:09] If you know if you can serialize these values from the server, then
[00:22:15] when you hit them, you don't need to run them again in the browser.  And you can just kind of pick up where you left off.  And that's kind of where Quick's heading with this as well.  But essentially, the whole idea here is,
[00:22:27] Initially, you just set up some click handlers or handlers  where you interact with the DOM.
[00:22:32] And then
[00:22:33] once you interact with them, then the rest of the code comes as needed. And there's a -- I'm going to pull up the article where Misko kind of highlights what the different pieces are. But essentially,
[00:22:46] In contrast, a typical framework-- and this includes Solid, Svelte, and React--
[00:22:51] they run once, they run over this. They might not
[00:22:58] you know, do a ton here. But like in solid's case, when we hydrate, we go, okay, here's the counter, set up the state set up the initial, you know, set up this
[00:23:09] double count, hook up the increment counter, run the effect. You have to do that anyways. And then,  sure, we won't like reinsert stuff in the DOM necessarily, but everything, we wire up  everything. Anyone who's seen Solid, you know that there's effects are essentially
[00:23:25] the way we render the DOM.  I'm not going to get into that right now.  But essentially, we run everything once and just  kind of get all preset so that when we do the next change,  it's all wired up.
[00:23:37] Quik's whole
[00:23:39] and it achieves it through a number of ways, is that it doesn't run that.
[00:23:43] Essentially, it only runs exactly what is needed as it hydrates,  and it does it all lazily.  So instead of starting top-down,
[00:23:52] it actually just
[00:23:55] works off interaction.
[00:23:58] Thank you.
[00:23:59] Yeah, the in the DOM thing is, can be a little bit misleading and we'll look at that in a minute. There is stuff information like the event handlers that are serialized in the DOM, but the actual data itself, I made a kind of stink about this a few months ago because I was just like kind of downplaying it. It turns out quick actually, Misco confirmed, does work the way that I would have to do it.
[00:24:20] they changed it the way that I would think it should work in that
[00:24:25] like...
[00:24:26] The hooks, the pieces that they need to hook into are in the DOM, but then they pull the data out into the typical serialization format where they can dedupe it and do all that kind of stuff.
[00:24:39] Thank you.
[00:24:42] Um...
[00:24:44] So, yeah, it's tricky.
[00:24:52] That's an interesting question. We'll get to that. I actually, today we're going to look at an example that a client rendered quick app. It took me a little bit of work and Misco helped me put it together, but we'll
[00:25:02] We will take a look at that in a little bit.  It did take us a little work.  I talked to the team.  We figured it out.  So it is definitely doable.  But yeah, the whole point here is, and I want to emphasize this,
[00:25:15] If you build,
[00:25:16] a single page app and you build it, or sorry,  you build a single page framework and you build it that way,  you can optimize that like solid, like,
[00:25:22] was optimized for the single page case. It's one of the most optimal thing. You can tell every piece of its design was optimized for that. Obviously, I've done a lot of work on server rendering and bridging the gap in that. But you can make completely different assumptions if you can assume that the servers are always there. And that's why Marco and Quick are differently designed. They assumed that the server was always there right from the beginning. Um,
[00:25:45] which completely changes the kind of assumptions you can make.
[00:25:48] it can drastically change the design of your framework.  So yeah, I mean,
[00:25:55] It's a funny comment. You can kind of go either way on that. I'm big on things that are built for purpose, so to speak. So anyways, kind of popping over here a bit is because I'm
[00:26:12] I highlighted out of order hydration, which is part of the equation here in my last article, where I basically mentioned that the part of the big secret or trick to quick is because...
[00:26:25] of some rules they set in terms of how projections work. Like passing children in, they eagerly evaluate. You know how Solid uses all this control, throws through components? Like with Quick you don't do that kind of pattern. It wouldn't work. But like
[00:26:43] like because of the, and actually most frameworks don't work this way,  which is part of the thing, but because of these sort of restrictions,  uh, quick puts in, um,
[00:26:55] you essentially have this ability, and because of serialization I was just talking about, the intermediate data, you have this ability to hydrate a component down in the middle of the page without hydrating a parent component.  And I mean, it shouldn't be hard to see if you think about it.  The problem is if you top down render and everything's kind of tied together with closures and event handlers and props that run through your whole tree and context and all that, and then you click a button down in the middle of your page,
[00:27:22] Even if you do the, oh, I'm just going to attach the event listeners and lazy load everything, you're not winning.  You press it, and then suddenly you freaking load the whole page, and you just pushed the whole cost on your end user of hydrating the whole app.
[00:27:40] I wouldn't be surprised if some frameworks or some, I can't see anyone from an actual framework doing it,
[00:27:52] they come out with this technique of just attaching the event handlers and then hydrating  the whole app. Because guess what? You will get really nice lighthouse scores, but your  app will suck. You know, like lazy loading, it takes more than just making a spa and then  lazy loading the whole thing when you click a button. Because...
[00:28:12] like you're just pushing the cost off.  Like if it's happening while the page is loading, yeah, it sucks.  There's input delay, it's sluggish. You try and scroll, you can feel it.  There's a lot of bad things about that.  But if you push it off to when someone clicks a button to load the whole app,  you're just guaranteeing that you're going to make them wait. So,
[00:28:32] It's important to understand that part of the equation here is out of order.
[00:28:38] hydration, this way of breaking out.  And what actually Misco says, he's like,  the secret to resumability is...
[00:28:45] is that there's these five things.  And I think he's going to write an article about this coming up soon.  I went a little too far.  But I just want to highlight these five things  so everyone can kind of see what this is.
[00:28:57] First, most obvious question is how do you serialize listeners? If you can't do that, then you have to rehydrate, essentially. So we just talked about that. You need the ability to add the event listeners, right? How do you render components out of order? If you can't do that, then you'll be forced to render the parents and the children, right? Which is what I talked about in my article. Then you need to know which component is invalidated on state changes. If you can't do that, you'll be forced to re-render the whole app. So,
[00:29:20] Everyone in my stream should be pretty familiar with this.
[00:29:22] If you want to invalidate on state changes,
[00:29:25] There's a bunch of different ways of doing it, but one of the easiest ways to do it that doesn't require top-down orchestration is reactivity.
[00:29:35] You know, that's another piece of the puzzle.  Have a way to watch data without running the code.
[00:29:43] So this is the whole idea of the use effects in the memo.  So this is still talking about reactivity.  But essentially, if you can piecewise the reactivity  and have a way of knowing the dependencies at hydration time,
[00:29:55] then you don't need to rerun it. And then finally, have a way to deal with the
[00:30:00] data that's not serializable. This is a hard problem. This is the area that Quick's getting  into. And honestly, on Marco 6, this is also exactly like on the design part. This is the  kind of last piece we have idea, but this is where a lot of our more theoretical work is happening  right now on number five, because I haven't talked about this much because I don't want to reveal it  ahead of time. But Marco 6 is also a resumable framework like Quick essentially. So I want to,
[00:30:30] the things you actually need to achieve this. And as I said, there's different ways to get there.  And I think that's what I'm most interested in on QUIC. I hope these explanations are somewhat  making sense. I know it's a little vague. We might have to just tear into the code to take a look and  understand what's happening here a bit, but see it in action. But this idea is,  essentially, if we can break stuff apart effectively enough,
[00:30:55] and attach some basic click handlers or basic interaction  points, then we should be able to load the JavaScript
[00:31:04] as we need it.
[00:31:06] As I said, and we've covered React Server components and Marco, and you can already see
[00:31:10] a huge difference here.  And this section here talking about resumability, and that is
[00:31:18] that
[00:31:20] I mean, React server components aren't concerned with resumability. So I'm going to take that off. But
[00:31:24] The difference with this approach is in React, you go dot server, dot client.  You're very explicit.  And Astro is like this too.  You kind of set up your islands and it's like...
[00:31:35] it's kind of coarse-grained, it's not granular.  And you just kind of know, you're very explicit,  because if it was granular, it'd be impossible  for an end user to write it.  It'd be very difficult, right?  So you just kind of--
[00:31:47] you just kind of in wide sweeps tell the framework how to split stuff up and you go, OK, server stuff doesn't go to the server.  The client stuff stays in the client. In Marco,
[00:31:59] Marco 4.5, compiler kind of automates for you, but it's kind of the same as server components. Marco 6 actually goes super ultra granular, but in a different way than quick. It slices at the other direction a little bit. And...
[00:32:12] It helps so the end user doesn't have to worry about it,  but it still uses the knowledge of what's stateful  to kind of split it up.
[00:32:19] Quick, on the other hand, has no idea of what server or client.  So it doesn't use that heuristic or decision to decide what gets shipped to the browser.  And what's interesting about that is...
[00:32:31] Okay.
[00:32:32] A pure lazy loaded approach
[00:32:35] means that you could apply this to the most interactive app you've ever seen,  where every cell is a super interactive thing and still
[00:32:45] achieve some sort of partial hydration.  Whereas with React or Marco,
[00:32:51] even though you can obviously say lazy load this or whatever  explicitly.
[00:32:57] It's decisions on what code gets shipped are based on
[00:33:02] what's server and what's client, essentially. So
[00:33:05] It's different. And this is why it's interesting, right? Because in one way,
[00:33:11] you know,
[00:33:12] Marco is trying really hard to see how we can maximize the use of knowledge in terms of the  compiler and the analysis to be able to achieve similar things. And Quick is saying,
[00:33:22] is kind of like,
[00:33:23] we're going to make something work
[00:33:25] even without that knowledge.
[00:33:27] And those come with different set of trade-offs. So I think this is why I'm so interested to take a look at this.
[00:33:34] *Ding*
[00:33:36] Thank you.
[00:33:37] Thank you.
[00:33:40] Yeah, this was from a few minutes ago, but it's a good point.
[00:33:47] It doesn't necessarily have to be like having a back in there. You just need to have some pre rendered HTML. Okay, so hopefully you all are still with me. Let's, let's, let's continue. Let's let's go to our next thing I want to
[00:34:03] I think the first thing we're going to do here is we're going to just pull down their to do MVC.  I think everyone's going to see it, but they updated it, I think, this week just to VEAT, which threw me off a second.  But I can I can it helps me kind of see the the evolution of the framework.  And this is something.
[00:34:18] That's fun.
[00:34:19] I'm just saying this up front here.  They're still rapidly, rapidly adding stuff right now.  Like the APIs actually changed between me doing one of my demos  that I was working on and downloading this latest one.  Like they literally changed the names of APIs.
[00:34:38] I think...
[00:34:39] Where is it?
[00:34:42] Yeah, this used to be use store, now it's create store, which I would say I love because I think there's another framework that uses create store. So, you know, it's a good nod. But let's look at this hacker news example.
[00:35:01] It looks like a bunch of components in a components folder. Let me blow this up a bit so we can see here. And then, yeah, let's look at the anatomy of this project and then we'll run it. So...
[00:35:14] I actually haven't -- let's NPM install while we're talking so we don't waste time. This is the only demo I haven't tried yet. I just pulled it down. Let's hope it works.
[00:35:24] Essentially, this looks like a VDAP. There's an index HTML where there's some VT-specific  stuff in here.
[00:35:33] There's an entry server.
[00:35:36] Which
[00:35:37] Thank you.
[00:35:38] Yeah, render a string.
[00:35:40] And then it's rendered from the HTML completely.  And it looks like we have an app entry point  and we have quick loader.  And this is like their script  that does all the magic to my knowledge.  And then...
[00:35:53] on, yeah, and then it just
[00:35:56] It looks like these are some to-dos that are essentially preset that gets passed into the app. So then, yeah, so this is full isomer with server rendering. And we have a state file. This looks like the, yeah, okay, so this is like the store. It's got like all the methods, like the filters for the to-dos and all this stuff. Okay.  Okay.
[00:36:14] Some of you who've looked at Quik have probably already looked at this example, but this is slightly updated.  It looks like they've kind of broken into a more...
[00:36:22] normal looking
[00:36:24] kind of pattern here. So we saw the entry point was app.
[00:36:28] So there is some stuff here that I don't know exactly.  Like I've never seen with styles before, but styles or app CSS.  So this is probably-- if you notice in QUIC,  every place there's a dollar sign,  it's kind of like an injection point.  And we'll probably look at that in a little bit.  But I believe every time there's a dollar sign,  the compiler kind of breaks that up  into its own sort of fragment that can be lazy loaded  independently.  So we have the component.
[00:36:53] and then we have with styles, and then we have a render that wraps the return JSX.
[00:36:59] essentially.
[00:37:00] So I think this is the anatomy of a pretty standard component, right? Where essentially you denote a component this way and then you separate the rendering from the logic. And I believe this helps
[00:37:14] them split the components into three ways, right?  Because we already look at it. There's the events,
[00:37:18] There's the component code, and then there's the view code,  or the render body.  So having these hints helps the compiler see, essentially,  how to split things up, is my understanding.  So yeah, this is a to-do app.  We have header main footer.
[00:37:35] And the header of the to-do app does all the work.
[00:37:38] Exactly. It's our input. So,
[00:37:42] This is a good example. We see the initializing state. So the state, I believe, is a proxy object, a mutable proxy.  So it's like create mutable and solid, essentially, where you have an object forms.  Because of being a proxy, I'm assuming you can't just have it's not like use state in React.  You can't just have like a single value. You always pass an object and then you access the property on the object.
[00:38:12] This is part of the pattern here where you kind of denote a name for the component.  It's probably to help generate the URLs for the lazy loading.  And then this component actually doesn't have the dollar sign on it.  The dollar sign has been transcended to here and then here.  Here.
[00:38:30] Yeah. So
[00:38:32] The important one here, I think, is the click handler, because you notice the dollar sign on it.  And this is kind of a giveaway, but on KeyUp.
[00:38:41] Yeah, see, this is interesting, right?  You notice how the event isn't getting passed in through the closure, and they're using like a hook for it? It's sort of injecting it. This is all tricks so that these can kind of be wired up independently. So they have explicit ways to pull these things in. Yeah, so use event. This is how they get the event in. And then
[00:39:03] grab the value off the input,
[00:39:07] Update the state with the new value.  And then if the key is enter, add the item.
[00:39:15] and clear the value.  OK, so this is just your like--
[00:39:20] when you're in the to-do and you're entering the new to-do.  OK.  You know what?  Let's just run this and see what it does, right?
[00:39:28] I'm trying to remember. Let's follow the readme here. NPM install, NPM run dev, NPM run dev.
[00:39:36] Thank you.
[00:39:37] Awesome. Local hoax 3000.
[00:39:41] Thank you.
[00:39:43] Thank you.
[00:39:45] Feel free, by the way, you all in chat to ask any questions as we go here because I
[00:39:50] definitely help me direct what we're looking at here.  But this is the sort of classic example.  I can tell the styling looks are familiar.  I don't know where the actual header is.  It's actually not here.  But this looks like a classic to do MVC.  Let me see here.  So first thing, you know this is what you want to test when you go quick.  You open the page.
[00:40:13] We're in dev mode, so this is probably not going to be exactly fair.  Because, yeah, dev mode is not going to give us the quick experience because of...
[00:40:23] because of the, what do you call it?  Um...
[00:40:27] the way bundling works in Veed and the non-bundles.  I almost don't want to do this in dev mode  because I want to look at it. It's fine.  Let's look at the HTML.  I think that's a good place to start.
[00:40:38] because you can kind of see what's going on here.  I did talk about this in one of my previous streams,  but this is so much more visual of what's going on here, because
[00:40:50] The body is the start and there's this cue base.  But then if you look at here...
[00:40:55] these components
[00:40:58] essentially,
[00:40:59] tell, like it's serialized into the DOM, like what code to load for them. Like on queue render, source component app, h app app component on render app component.
[00:41:11] So this element goes, okay, hey.
[00:41:15] And then there's some references to the to-dos and an ID and an object.  And my guess is if we look down here...
[00:41:25] okay this is the q resolver code we remember that there it is quick json we're going to be able to see  some
[00:41:33] Some stuff here, yeah.
[00:41:37] Yeah, here.
[00:41:38] This isn't unlike most frameworks.  If you ever do SSR, you know you serialize the data in, essentially.  So here is our to-dos.
[00:41:47] Right. Here's the state of all our to do's, you know,
[00:41:51] Title Build Hello World completed false.
[00:41:55] you know, basically these keys refer to keys.  So this is the secret to how QUIC doesn't do closures, because essentially
[00:42:02] the elements all know the dependencies written into them.  So you don't need the JavaScript code to do that.  You just go like, here's where the code is.  Here is the references on the elements to essentially where
[00:42:18] the data is.  So I think, let's just play this game.  What happens if I check this?
[00:42:25] Oh, yeah.
[00:42:27] Nice. OK.
[00:42:28] I don't know why this one's red right now, but it doesn't matter.  You saw that the second I clicked on it, a bunch of scripts popped in.  Like...
[00:42:36] onRenderInputOnClick, so it loads the click handler, and then it calls toggleItem. And I want to believe that toggleItem comes in from state here, at which point it loads the shared state.
[00:42:49] And,
[00:42:50] does what we need to.  So essentially...
[00:42:53] And does it happen to you when I unclick it? Okay, no.
[00:42:57] How about when I remove something?
[00:43:01] Okay. So,
[00:43:03] Fun, okay.  Let me refresh this and see what's up.  It's also possible that I just got the latest version,  the demo and it's broken slightly.  Yeah, so an item is missing, yeah.  So this is the new V build.
[00:43:15] I haven't played with this, so this is on me.
[00:43:18] Bye.
[00:43:19] I knew that there would be a chance that we might not be able to
[00:43:25] to kind of keep up with how stuff is going. So, you know, I'm going to, I'm going to,
[00:43:29] I'm going to move on from this demo. I think if people don't have any questions so far,  I mean, this is the basics. You can kind of see
[00:43:36] how like on click, even like the events literally tell you what code to render. But as I said, this Vite thing is brand new. They literally pushed it up like yesterday. So yeah, maybe there's a couple little bugs in the system here around that. So
[00:43:54] But essentially, it's really kind of cool how you can see--  like, they basically prescriptively tell you, like,  on click load this code.  And it's all kind of async handled.  OK.
[00:44:08] Thank you.
[00:44:09] Not very easily, actually. And I talked about this at the beginning of the stream. Like,  it's not just serializing the event handlers.
[00:44:20] Like how
[00:44:23] I mean, there's a couple other things.  Like with Solid, you need to serialize all the...
[00:44:28] primitives values in and then restore them.  And even then, like our control flows...
[00:44:36] work. We couldn't be as granular. I think there's different ways to attack, like React has server  components and stuff. I think there's different ways to attack parts of these problems. But  what makes Quik so interesting is it is not easy. Other frameworks don't get to do what Quik does.
[00:44:53] Like that's just, it's not, they don't work this way. Right. I mean, I was actually talking with  Misko way back, like early, early. And we were talking like, well, why don't we just kind of like
[00:45:05] use Solid as the renderer, and then we'll build some of the quick--  Misko only really cared about making sure that this out of order thing worked.
[00:45:15] And he's like, I don't care that much about the rendering. I don't care. You know, let's let, you know, I'll use best in class. Let's just make it thing. And he looked at like every framework and he's
[00:45:28] it just wasn't going to play ball.  Like, technically speaking, there was a path with Solid,  potentially, if we changed how Create Component worked.  But, like...
[00:45:37] it would be a different framework, essentially. And that's the key, right? Like, we could share every activity, you know, and that's still something that we're talking about, you know, but it's not, it's,
[00:45:51] like quick is quick because it's not like the other frameworks.  I think this is going to be one of the,
[00:45:57] I think this is one of the things that I think is going to take a bit for people to understand.  When people go bug people about partial hydration and lazy, like some of the stuff, they go, oh, just can you add this?
[00:46:07] That's going to be a common thing on this stream for sure.
[00:46:14] How much lazy code can you stand to load at a user interaction? I don't know. And that's what I want to find out as part of this, these experiments we're doing, honestly. I think there's a balance here. And I think, as we dig, we'll kind of get a better feel for it. But unfortunately, this example,
[00:46:31] is not working, but luckily for everyone else-- see, look,  the input's even missing here.  Luckily for everyone else,
[00:46:40] I have more examples. So let's just keep on going. I don't know what's, as I said, I just fresh installed this and it's not working. But, you know, this stuff's a work in progress. So let's move on.
[00:46:51] to what I was actually working on this week.  This was just kind of a...
[00:46:56] you know,
[00:46:57] the demo. I think if I went online, I could probably find the to-do demo again.  And they have working ones. Like, I'm not...
[00:47:05] commits, like what's going on here?
[00:47:07] Yeah, there's something in the build that's making it not find stuff.  One of the weird things about this is,
[00:47:13] Yeah, I don't know what's wrong with it, honestly.  But let's move on to what I was working on.
[00:47:21] I wanted to see if I could make my Hacker News demo.
[00:47:27] Because
[00:47:29] As you all know, it's been kind of one of my favorites here.  And it's a nice one for kind of showing initial page alone partial object.  It's not very good for-- it doesn't show how it scales exactly, but it's not very good for like--  there's not very much mutation, but it's a very easy one for just seeing loading patterns, you know.  And Quik obviously has a great pattern for loading.
[00:47:54] I'm not going to lie.  I kind of wanted...
[00:47:57] I mentioned before that Quick has this really unique quality in that how it can kind of hydrate inside out.  I wanted to put that on display. I was like, I'm going to make a client side router and I'm going to.
[00:48:08] and
[00:48:09] I'm going to load the hacker news page with no JavaScript.  Then I'm going to shrink a comment and load the JavaScript comment.  And then I'm going to route to a different page and then load the router.  So like,
[00:48:19] no JavaScript piecewise partial hydration into a single page app experience and show everyone what I was talking about a few months ago when I said that Quick was the only framework that was a transitional framework.
[00:48:32] had the potential of being a transitional app, as in that kind of Rich Harris definition of transitional. But there's a few pieces missing in Quick today that didn't let me get to where I needed to on that side. And the truth of the matter is, and I knew this instinctively,
[00:48:48] That's not the best pattern for Qwik.
[00:48:51] Quick question.
[00:48:52] actually, like Marco and React server components, wants you to route on the server. I had a whole article about that a couple weeks ago. I was like, everything's running on the server. It's the same here because the thing is, if you slice stuff into a thousand pieces,
[00:49:05] You know, I mean, not that many, like whatever, 100 pieces, even if you're kind of smart in how you group stuff together.
[00:49:12] Once you go and navigate to that new page and make the client render it, you have to load all the code. And then suddenly you're just like loading all the JavaScript and doing like, it's not going to be the best experience. And you could come up with smart ways where you're like, okay, I'm going to have this cut up part version, then I'll have the bundled version for navigation, you can do all that. But
[00:49:32] It's just not natural. What you really want is
[00:49:36] something like turbo, but better.  And, you know, React Server Components is one answer  to that problem.
[00:49:42] we're working on something else, you know, or we have some ideas of how we can do that with Marco and that as well, like a different version of that. And I think,
[00:49:51] I think everyone working on this problem very soon will realize this is a routing problem and be working on routing in this area.
[00:49:58] Yeah.
[00:49:59] So I kind of gave up on that and just went to a classic--  what do you call it?  A classic MPA setup.  So this is cool because guess what?  They have a Cloudflare template.  So I can put this up right against all our other Cloudflare  demos that we've been doing over the weeks.  And it's a nice setup.  This is just a roll up, but essentially,
[00:50:22] I was able to just...
[00:50:23] take the same thing that I made in Remix, I made in Solid, I made in Marco, and just kind of run it through its paces. So how does this work? Well,
[00:50:32] index.cloudflare.
[00:50:34] Unsurprising to everyone, it's very simple.  You add a handler for fetch.  And then you pass through the static assets.  And then Quick has some caching stuff.  I turned the caching off because I wanted it to be
[00:50:49] I want it to be the same as all my other demos.
[00:50:52] And then essentially we set some headers and
[00:50:57] Yeah, where is the response?  Yeah, sorry.  Render app await.
[00:51:01] with pass the URL in, set some headers,  and then send the response back.  And this just feeds into this index
[00:51:10] file, which is basically the root of our app.  And this render app,
[00:51:16] What I did was I found a really cheap, quick little router here called URL router.  This is the one we actually use in the Marco Cloudflare examples, and just mapped
[00:51:27] the URLs to a component,
[00:51:30] and a data loaded function.
[00:51:32] You know I'm a big guy on the streaming side, but obviously this doesn't have any of that. It's literally
[00:51:39] match the route,
[00:51:41] block.
[00:51:42] to get the data and then pass the data into the app when you render the string.
[00:51:47] essentially rendered from the HTML head.  This is very easy to port.  Once I gave up on the client side routing,  I was able to make the rest of this app in like an hour.  It's the same API that I've been using in all the demos.
[00:52:02] The only thing was they had the original demo having all the components in one file.  I just kept it to make it easy here.
[00:52:11] This was actually really, really easy to do. I just got rid of the class names from the Remix  example. I kept the Remix example as my base because they don't have the four show components.  They use React style. So just
[00:52:24] you know,
[00:52:25] This is the same markup that I've covered before with everyone on stream.
[00:52:29] dozens of
[00:52:30] I feel like dozens of times now.  The only difference now is the component,  component name, the dollar sign, this whole thing.  And as I said, this person's using useStore.  This is from a week ago.
[00:52:40] But essentially...
[00:52:42] It has the same click handler doing the toggle to compress the comments.
[00:52:48] And
[00:52:49] There isn't really a ton of else here.
[00:52:54] It was actually really easy to build.  I hit one snag and it caught me up for like,  I'm not gonna lie, I just gave up developing that day  and I came back a different day when I figured it out.  It's because, and when Quix compiler gets a little bit better,  it'll be easier.  I was just prototyping some stuff for the stories page.  And I was like, before I actually had data to load.  So if you notice, I'm actually splitting the props here  in the render function.
[00:53:21] But originally I just had put some, defined some variables up here.  And it was really funny because it was semi working.
[00:53:28] and semi not working because the scope wasn't tied to state or props.  I guess down here didn't know because they get bundled separately,  didn't know that they were related and it was undefined.  But for like a simple variable access, it wasn't complaining.  But if I had like stories.length,
[00:53:48] then like a member property access would crash the app.  And there's some work that needs to be done  on error handling on these templates.  So it took me a while, but once I figured it out, you know,  and actually built the app, this was pretty straightforward.  And the end result is actually, let me see here, quick.
[00:54:09] I can do this thing.
[00:54:12] our kind of similar Hacker News demo.  This is MPA style.  So like Marco, when you navigate,  it's doing a full page load.  You can kind of see it up here.  And when we go to the comments, it's like this.  There was one other thing that I hit.  Inner HTML wasn't working properly,  so you see the stuff isn't escaped.  But as I said, these are small bugs that we can fix.  And then you can shrink and hide the comments.  But let's look.
[00:54:38] at what happens here on the network tab as we navigate around.  So there's nothing interactive on this page.  So right off the bat,
[00:54:47] the quick page loads and there's no JavaScript and there's never going to be any JavaScript. So in a sense,
[00:54:52] Because there's nothing to interact with to load JavaScript,
[00:54:55] Even though Quick has no knowledge of client or server components, it still effectively did the right thing and sent no JavaScript and will never send any JavaScript. So like in that sense, Marco and Quick are almost identical in this example with completely opposite approaches.
[00:55:11] However,
[00:55:15] We go to a comments page,
[00:55:17] Wow.
[00:55:18] um
[00:55:19] Still no JavaScript. At this point, Marco would have loaded a little bit of JavaScript.
[00:55:24] And when we press this, watch the network tab.
[00:55:30] four pieces of the JavaScript and then when we unclick it,
[00:55:32] One more comes.
[00:55:33] Now,
[00:55:35] You might have noticed something there.  Did you?
[00:55:38] Did you see it?
[00:55:41] Watch the way the JavaScript loads in.
[00:55:44] One, two, three.
[00:55:46] One. It actually waterfalls, which is interesting. So,
[00:55:53] Obviously,
[00:55:54] I think for something like this, you would know not to package it into four different things and you bundle it together. We'll talk about that in a minute. But...
[00:56:02] Essentially, this is an interesting
[00:56:05] thing about...
[00:56:07] about lazy loading. This is very minimal amount of JavaScript. But if you have lots of files, and you can't look and you don't load them in parallel, there is still a consideration here, right? Like, like, like, what happens if I'm now on a fast 3g network?
[00:56:23] when we load the page, right?
[00:56:25] Page loaded super fast, no hydration costs.  But when I click this, what happens?
[00:56:31] Thank you.
[00:56:33] Right, like this is a worst case scenario, but it took two seconds for it to respond to me. So like,
[00:56:39] It is interesting. And then this one?
[00:56:41] Wait for it, OK.  So obviously, we got to deal with that.  But it is an interesting thing.  Like, I think for critical JS, you would just bundle it  together anyways, right?  You'd only lazy load things that--
[00:56:55] that, you know,
[00:56:57] needed to be lazy loaded or whatever.  It is interesting because as I said,
[00:57:04] We still need a little bit of knowledge. Even if we don't know what server or client, we still kind of need to do some smart stuff here.
[00:57:14] Obviously,
[00:57:16] you know, I hit this kind of, kind of thing. And I was, I was thinking about it and, you
[00:57:20] And Quick has the answer to that question or that problem.  They have this really cool tool called the...
[00:57:28] called the...
[00:57:31] quick playground from Builder.io.  And I'm actually using a different example here  that we'll show in a minute.  But essentially--
[00:57:41] You can see all the different bundles they split it up into.
[00:57:44] And then you can, they have different, you can configure this in the plugin.  They have different, they have different, uh,
[00:57:52] bundling strategies. So if I say hook, you're going to see input and you see all these different files that they're going to bring in for this to this example, right? These are all separately code split. But if I say single,
[00:58:04] Well, now there's this one file and this file. They grouped certain things together. They separate the event handlers, I think, but then the rest of it got grouped together. And this is a simple app, so you can't see it, but they also have a component mode, which groups it by components, and a smart mode that tries to use a heuristic to group it. So essentially,
[00:58:23] The way you bundle
[00:58:25] is
[00:58:26] a new dimension in how you could
[00:58:30] author a quick app, if that makes sense, which is interesting. It's a different sort of problem. Instead of worrying about server versus client, you know, kind of thing, you instead think you instead trying to be smart about how you bundle things. And
[00:58:45] One of the ultimate goal of my understanding from this is to use
[00:58:49] user analytics. So if you have like an e-commerce site and you see patterns on how people click, like people always go to certain areas, well, then
[00:58:57] you know, you might start with something a little bit less optimal, like maybe the smart one or maybe like single or component, maybe components, a good middle ground or whatever.  And you might you might you might load a little bit more JavaScript first.  But over time, you refine the patterns and and figure out what the right patterns for your site is in terms of how to lazy load JavaScript.  And.
[00:59:20] As I said, I...
[00:59:21] It's interesting because this is one of those things  that I think you kind of have to be aware of with this approach.  Because as I mentioned before,
[00:59:30] in here. Like,
[00:59:32] I mean,
[00:59:33] Obviously, now that it's loaded, it's super fast. But when you first load something like this,
[00:59:41] you know,
[00:59:43] There could be a real cost to
[00:59:50] The lazy loading.
[00:59:52] even like the funny thing is this is what the smallest amount of code  like look look at these files coming in like they're just little snippets this
[01:00:00] - This is what I was getting at.
[01:00:01] If you waited to load your whole React app and hydrate it at this point,
[01:00:06] Like it would be comically slow. I'd get out of my chair and walk over to the kitchen and come back before, you know, on a slow network.  Because like when you have full hydration on some pages on a slow network, like sometimes it can take like, you know, seven seconds.  That's what we're looking for. Partial hydration, you know, solutions, you know.
[01:00:25] you know, seven plus seconds. So
[01:00:29] You know, even on a small grain level, this is still something that can be felt if your network is slow enough.  So it's interesting because I think ultimately you do want a certain amount of critical JS always loaded.  I think the zero JS thing is mostly a myth.  Like it's mostly like a...
[01:00:48] like a
[01:00:49] like, oh, isn't that nice kind of thing.  And it demos really well,  but realistically there's like a small subset  that you definitely want always present, I feel.  Because like,
[01:01:00] you're otherwise at the mercy of the network. But as I said,
[01:01:05] With tools like this at your disposal, this is incredible.  Honestly, this is such a cool tool.  Like you can actually see, like you go on our playground,  you can see the compiled output.  And you can see that here.  You can see how the imports and the lazy loading and all that  kind of get pulled in.  But this takes a whole level.  You see the bundler.  It's like mixing the roll up and the--
[01:01:25] and the compiled output all into one tool.  So it makes sense why they've gone this way, and why they've invested this tool. I think this is going to be an area of really interesting research in the future. But, you know,
[01:01:42] Just to sate any of those people who love to see how this loading stuff works, let's just drop this in. Why not? And see what we end up with.
[01:01:55] *sad music*
[01:01:58] Thank you.
[01:01:59] Thank you.
[01:02:01] Thank you.
[01:02:02] I'm pretty sure I know where we're going to get it.
[01:02:06] Yeah, .9s across the board.
[01:02:09] As I said,
[01:02:10] It's unfortunate. It's blocking, right? We don't have streaming. That's the only difference. Marco's 0.8 because of like that little tiny bit of not blocking. But otherwise,
[01:02:20] You know, unsurprisingly, if you don't hydrate, you don't hydrate.  And the paid scores are really good.
[01:02:27] There is a difference with this approach, although I think there's probably ways to solve it, but
[01:02:34] One difference here is, and actually maybe the bigger reason for the 0.9 is,
[01:02:39] And we already saw this earlier.
[01:02:42] Quick is serializing all the data down, right? When we saw the Marco example, we saw that there was no data serialization happening because of the way the app was structured, partial hydration and the knowledge of being on the server can save serializing the data. But
[01:02:58] In the quick case here, we can't, like, we can probably explicitly be like, don't serialize this data.  But it's not free knowledge.  It's something that you probably could just, like, be like, hey, don't do this, right?  Which isn't a big deal, but it's a consideration.  I think it's more interesting when you have partial pieces, right?  Because when we were doing the Marco demo, I didn't really show up.  But you could send one field to the comment and then serialize the title, let's say, from every single comment.
[01:03:28] only automatically rather than sending the whole comment down.  So I think there's going to be some interesting strategies here on the data side,  because that's one thing that I think React server, like having the knowledge like React  server components or Marco does, does have an advantage here, which means that
[01:03:42] For the...
[01:03:43] I think, if I remember correctly, for the demo that I showed everyone the other day, I don't have it right offhand, but...
[01:03:52] Let me see here.  I think for a page with a lot of comments, like 290 here,  we're going to see--
[01:04:00] a lot of data, which means that regardless of
[01:04:07] how fast we partially hydrate
[01:04:11] we're probably going to take a hit.
[01:04:15] very similar to what Remix or Solid or Svelte did here. So it is an interesting, the different aspects. Okay, I mean, not much of a hit at $299, obviously. But, you know, if
[01:04:28] If we...
[01:04:29] Oh, I did do it. If we grab my 1400 comment page.
[01:04:36] Thank you.
[01:04:37] Okay.
[01:04:38] Thank you.
[01:04:39] Thank you.
[01:04:42] Oh, I killed Cloudflare.  Is this the right one?
[01:04:46] Which one is this one?
[01:04:48] I'm going to go.
[01:04:49] Sometimes, let me see what this one is.
[01:04:52] No, that's not the right one.
[01:04:54] That one's 288. Which one am I looking for?
[01:04:58] Mm-hmm.
[01:05:00] Come on.
[01:05:02] *crunch*
[01:05:21] Yeah, okay.
[01:05:23] Better than Remix, obviously, and better than Solid and Svelte.  But this is a different kind of cost.  I think this is going to be an interesting thing moving into the future,  is kind of playing out how much data serialization costs kind of play into this.  And also, obviously, the lack of streaming hurts, which, again,
[01:05:44] that's a feature that I suspect will be coming.  So I wouldn't worry too much about that.  I think generally speaking though,  that is one of the interesting things about this approach  because,
[01:05:56] you need to be aware of the lazy loading and
[01:06:00] And
[01:06:01] and the data.  So I think this is interesting.  I think in general, though,
[01:06:08] As we've seen, this approach delivers in terms of super, super fast hydration, super, like,
[01:06:16] And the authoring experience, as I said,
[01:06:18] pretty familiar, right?
[01:06:22] Let's look at our code here one more time from the hacker
[01:06:28] news example here. This is just the same JSX. I was able to copy and paste it. So this is really cool how similar this was. This is a very, very easy port for me to make. Obviously, all the GXX languages are really nice for that, but essentially, like, really powerful
[01:06:47] ability to just
[01:06:49] use the same patterns that we were very accustomed to, and almost instantly get this savings. I think this is the only GSX framework that actually
[01:06:58] gives you that partial hydration story, right? Essentially, because
[01:07:06] It takes a certain amount of consideration.
[01:07:10] Hmm.
[01:07:11] So I hope people know if you have questions.
[01:07:14] All right.
[01:07:17] Yeah, okay. Yeah.
[01:07:20] Thank you. Yeah. Yeah, no, it's, it's interesting, right?  Cause it's really cool how like you can see which keys of a title,  like which story, like,
[01:07:32] This is a story list, right?
[01:07:35] If I'm right here,
[01:07:38] Bye.
[01:07:38] It's all wired without actually loading the code.
[01:07:43] This is like a...
[01:07:44] Yeah.
[01:07:45] I think there's something really cool to be learned from this.  I don't know how this applies exactly, but you can kind of see.  No, no, what else is interesting?  And maybe this isn't this is something I wonder.
[01:07:57] Yeah.
[01:07:57] Quick uses
[01:07:59] maybe not web components, but you see this story preview?  These are my component things. They actually make an element
[01:08:06] for each of their components.  They're probably not like actual web components,  but this is interesting.  So the component boundaries are actually represented  in the HTML.  I mean, I can guess why that is.  And I like, it's much easier to do transclusion,  like our projections of children's like slot type APIs  with this kind of setup.
[01:08:27] But it is interesting because it means that components are DOM elements, which is interesting, definitely, from my perspective.
[01:08:37] Yeah.
[01:08:38] As I said, it makes a lot of sense. Now it's easy to serialize stuff. I just, I wasn't picking up on it earlier, but
[01:08:43] Yo.
[01:08:45] Nav stories. Yeah. Why didn't I pick up on this before?
[01:08:49] You can actually see the components are DOM elements.
[01:08:54] Hmm.
[01:08:57] Mwah.
[01:09:00] Oh, yeah, yeah, yeah, exactly. Yeah. So, yeah, I think that's a good point because why that big slowdown on that one page that I just loaded?
[01:09:11] when I was, I grabbed it from there. And I think that's the key here, right? Because we were looking  at this super slow, brutal, like, why are you loading 1400 comments page, right? And this is a good  exaggeration, obviously. But yeah, this page is 550 kilobytes, right? Yeah.
[01:09:35] here. And then if I load the same page, let's grab...
[01:09:41] Let's grab this. Let's load the same page in solid.
[01:09:45] Thank you.
[01:09:46] I love having all the hack news demos.
[01:09:53] Yeah.
[01:09:54] Thank you.
[01:09:55] Um.
[01:09:59] Yeah, what do we got here?
[01:10:01] Sorry.
[01:10:02] press the wrong button. I'm on the wrong screen. Let's load the same page in solid. Where is it?
[01:10:11] Yeah, that was weird.  It was like cash because of the service worker.  Okay, there we go.  It's 442.  So...
[01:10:18] There is some hydration cost, I guess, of writing everything into the DOM, like in terms of page size.  But obviously, if I drop this in here and what was it?  What is it?  HN...
[01:10:32] H N dot.
[01:10:35] Marco...
[01:10:37] JS, workers dev, and I think you didn't use my pluralize everything thing. Dylan did port  my stuff over a bit. Yeah, this page is so freaking slow. Although the fact the header  showed up so fast, like if that had a nice loading indicator, that would have been a  bad experience. Let me see here.
[01:10:59] network. Let's load it again.
[01:11:02] I love that.  Sorry, streaming is just so fun.  Do you see how the header looks like it didn't even move,  even though it's an MPA?
[01:11:08] 208 kilobytes. Yeah, so that's the winning. You're sending a page half the size when you can do smart data serialization.
[01:11:18] Yeah.
[01:11:22] Yeah, yeah. I mean, it's not hard to understand why that. I'm positive this will be a place of focus in the future. I'm starting to, like, I think maybe even why that's why, to a certain degree, why React went the way they did it.
[01:11:52] terms of with a server route, you're not allowed to put server components and client components.  You can only project them through children.
[01:11:58] I'm gathering it's because with those rules, you can consistently know that it's impossible for the client to re-render state, which means that you can know that 100% you can't serialize that data.  You mentioned that you ran into some scoping issues.  Once you figured out how to do CVS or natural support, yeah, yeah.  It was super easy once you know.
[01:12:28] if you just...
[01:12:30] if you just have some random like const or temporary variables in the component part of the code,  it's not guaranteed to end up in the render part of the code. And in a sense, the API makes that really
[01:12:41] obvious to see it did obviously not knowing that but i i mean to be fair quick doesn't have the  docs yet i'm doing this completely blind so i i i'm i'm gonna expect to be that like the like  with the with the help that i got on the discord i was like
[01:12:59] I was like, oh, OK.  Perfect example.  We haven't seen it yet, but Quick doesn't use props.children  to do children projections.  It uses slots, like web components or Svelte or that.  And I didn't know that.  So obviously, I'm sitting there trying to go props.children.
[01:13:15] Read the docs scenario.  You see that two seconds and it's intuitive.  You know how it works.  So as I said, I'm not too worried about that.  I think it was just...
[01:13:24] As I said, I think the compiler for that one could have shouted a little louder in a way that I could understand.  But generally speaking, I think it's a little bit different.
[01:13:34] I think things are explicit enough.  The thing you got to worry about when designing APIs
[01:13:40] So it's what we're talking about at the beginning with React.  As long as you know what the limitations are and they're spelled out for you in a way that's easy to see,
[01:13:48] then
[01:13:50] like it's fine.  You know what I mean?  Like,  like,
[01:13:53] But you know what I mean? I have a biased opinion, right? It's the same reason when people complain  to me profiriously about not being in the destructure, I just kind of go, because
[01:14:02] Like,
[01:14:03] Now, you know, don't do it. Like it's, it's, you know, maybe I should be more sympathetic to those  kinds of things, but like those are, those kinds of things don't really matter. They're like  superficial kind of window dressing kind of scenarios. As long as you like know the rules,  you follow the rules. It's kind of like the hook rules. I'm also not bugged by them. Some people  are like really annoyed by the hook rules. I don't really care. It's like, I understand them.  I follow them, you know, stuff like that just doesn't,
[01:14:31] phase me pretty much at all. Like you come up with a reasonable set of constraints to go through  trade-offs. That's the cost of doing business. That's how it works.
[01:14:41] Right. You know, but again, if I felt differently, you know, maybe maybe I would have, you know, tried to do in the Svelte team or something like and worked on that side.  That's just not what I care about. I care about producing the best possible user experience for my end users and I'm concerned with giving explicit control with clear defined boundaries and
[01:15:02] I think that's possible with this API. I think there is a couple little things and I'm interested
[01:15:10] If
[01:15:11] Like, I like the explicity.  I got to say, I like that they're being very explicit here with these dollar signs.  Like, part of me is like, well, if you know it's a component, do you have to return the dollar sign on Render?  Couldn't it just, like...
[01:15:23] return a function.  If you've ever used JSX in view, you return a function just  like this.  It's the same concept.
[01:15:31] That's how they separate the templates.  They make sure you return a function.
[01:15:35] So you're kind of like, oh, well, if they know this component, they just do that automatically.
[01:15:39] Maybe, but like, on the other hand, this gives you complete control, like, it's explicit, you under, like, once you understand what it does, and why it's there, you like, my understanding is you can use other dollar sign operators to do to denote other things of this nature. And I think, I think that's an
[01:15:58] interesting almost like a language primitive that you can build on. So instead of viewing that as a downside, I view that as maybe
[01:16:06] something super powerful and really unique and a way of actually leveraging the system. Like having that kind of explicitly and putting that control back in the user's hand is something that I value incredibly.
[01:16:17] you know, it's like on the opposite end of the spectrum, right? As I said,
[01:16:21] Right.
[01:16:21] Having to be aware of this is...
[01:16:24] is reasonable trade off to me if it means that I have the power and control to have code working the way I do. I'd rather not people hide it behind walls and stuff.
[01:16:34] Thank you.
[01:16:34] Yeah, sorry, long rant for this, but I just want to make that kind of clear is I think
[01:16:41] I think this is one of those ongoing things.  And I think maybe this isn't like 100% there yet.  Maybe they have a few more tweaks and stuff.  But I think this is already heading in the right direction.  And I think it's a careful balance of explicit APIs.
[01:16:57] and this kind of power and control.  So yeah, I mean, the Hacker News thing was easy.  I just configured my Wrangler and
[01:17:07] through my components for my other stuff. And we were there. We deployed it. As I said,
[01:17:14] I think I got what I wanted from this demo.  I can kind of get the feel...
[01:17:19] This is a framework that still is in its early stages, needs to kind of work on certain details. But generally speaking, it's already delivering on the promise that it's making here on the Node JavaScript side.
[01:17:36] If I'm just looking at building a simple e-commerce site, you know, and doing this kind of stuff, you know, lazy loading.
[01:17:43] This...
[01:17:44] Like this does a trick. Like I said, I'm a little bit more skeptical on the lazy loading side as I showed before.
[01:17:50] This is already going to be 100 times better than your React app.
[01:17:54] So
[01:17:56] you know,
[01:17:57] I can't show completely show non-bias there because I'd be like, you know, you could also use Marco or, you know, a couple other things.  But in terms of a competitive solution that does what it says it's going to do, you've got it here, you know.  So I think this is pretty compelling showing.  So let's how are we doing on the stream today?
[01:18:20] Let's see where we are at on time.  So we're just over an hour, we're gonna look at this.  And so this probably may not be the longest stream ever,  but let's, I've got one more example.  And listen, I'm trying to think if there's anything else  we can get from this Hacker News example.  I know not a ton.  I think the data serialization is interesting.  I think,
[01:18:38] Everybody has their own loader scripts. There's lots of similarities and commonality patterns you can see in this. Data serialization is going to be an interesting problem for most frameworks in the future.
[01:18:56] But essentially, I think this demo, it's up there. Let me post this in the chat for anyone.
[01:19:06] Thank you.
[01:19:11] My screen is showing up weird. Is this showing up weird for you all?
[01:19:16] It's fine on my screen, but it's showing up weird through the...
[01:19:20] Bye.
[01:19:21] So how do you feel about Marco 6 in many ways not having explicit performance?
[01:19:28] This is baiting a little bit, you know, like leading question much more.
[01:19:33] OK, this is-- yeah, so it must be just street mirror acting up.
[01:19:38] I'm going to have my preferences, but I'm going to hold my final judgment on this stuff, on that aspect with comparison to Marco.  Because when Marco 6 gets a little bit further, we can talk about it more.  Yeah, so it's just StreamYard being funny for me.  That's fine.  I'll ignore StreamYard.  Okay, so...
[01:19:55] Yeah, I'm not going to get too much into it.  I obviously see...
[01:19:59] Before getting into all that aspect, I think the data handling Marco and React Server components is, you know, in terms of serialization, is an interesting, very obvious UX consideration.  But I was talking to Misko, and he seems to think that he has a solution for that.  So I want to see how this develops before, you know, making anything more on that side.  Yeah.
[01:20:22] Obviously, there's trade-offs.  As I said, you kind of have to be a bit aware of the split  between the component and the render function  and the probably click handlers.
[01:20:34] Is this something that a better compiler could fix?  Probably.
[01:20:38] you know, Dylan, you know how we handle hoisting and variable sharing and all that kind of stuff.  So I'm pretty sure you could probably picture how to make the compiler work better in these scenarios, because we are doing those tricks in Marco.  So I think on that side, it's interesting and it's fine. I think you're right.
[01:21:08] optimizer side and this kind of mentality, I think,
[01:21:12] I think this is...
[01:21:14] I think this is a little bit challenging.  I think when we see it automated, it's going to be really, really cool.  I think that this is more of a place where...
[01:21:24] like, I have to put it like,
[01:21:29] This is a new type of consideration, and I don't know...
[01:21:33] if I prefer this consideration over literally just being like,
[01:21:39] I know that this part of the code, like structurally, is less important.  Let's lazy load it.  Like you go, okay, there's this little widget over here that's less important.  I'm just going to wrap it in a lazy.  I don't know.  I feel like...
[01:21:50] my first gut feeling is I'd rather do that than worry about an optimizer. But
[01:21:57] I think it might depend on the type of app.
[01:22:00] Right? So...
[01:22:02] I
[01:22:03] Yeah, I don't know. I think this is a new dimension. And I'm not sure how much I like this being a new dimension, but that's partially because this is new. And I'm not used to this being a new dimension.
[01:22:15] Okay, so we got one more demo to look at and...
[01:22:22] Yeah, that one's done.  That one I never ran.
[01:22:27] That is another one of my favorites.
[01:22:31] I was like, okay, well, can we client render
[01:22:37] a quick app. So no server side. And the reason I wanted to do this is because I wanted to put quick in the JS framework benchmark.
[01:22:43] You know me, I love the JS framework benchmark.
[01:22:47] And I thought it'd be-- I've written so many things.  In the JS framework, I wrote one of the vanilla implementations.  I think it's now probably the faster one.  I wrote the solid implementations.  I was the one who upgraded React to React hooks.  I upgraded Svelte 2 to Svelte 3.  Even though I'm not the core maintainer of this benchmark,
[01:23:16] I've worked with lots of core maintainers of the different libraries,  you know, like Dan chipped in when I did the React hook one.  And like to kind of make...
[01:23:27] um this benchmark the best quality that i could possibly do i added alpine js i basically whenever  i come across different libraries i want to see what i can do there so here i started working on  this and i got stuck because there was a problem with the client rendering but then i got unstuck  because um a member of the quick team came and actually helped me fix it so i didn't quite  finish making the benchmark but we can we can uh we can give it a shot right now or like we can we
[01:23:57] do a little work here and get it actually working for us right now.  So I'm going to go run dev, build dev and have it,
[01:24:05] have it working. And why is it spitting out so much stuff? Do I still have debug mode? I probably have some console logs from like some of the stuff I was doing. Yeah. So that's fine. It doesn't really matter. Um,
[01:24:15] JS Framework Benchmark, if you've never seen it, is basically building this giant list of stuff. And they have a bunch of random keywords, and you use a random, and then you build a bunch of data using that. And then essentially...
[01:24:30] It's a bunch of buttons that get clicked.
[01:24:35] And then you can see the quick click handlers.  And then essentially...
[01:24:41] uh,
[01:24:43] It renders them in a table. It's like a giant to do MVC. And there's a few things you can do with the table. And so far I've implemented the base functionality. So if I am correct, I should be able to just
[01:24:57] Let's close this and close this down.  I should be able to just go to localhost 8080 quick index,  and I can see the basic thing here.  And I don't know what's up with that styling, but whatever.  Okay.  So you see it created a thousand rows.
[01:25:11] And you can clear them and you can update every 10th row.  You see the exclamation marks and you can swap some rows.
[01:25:21] I can append some rows.
[01:25:24] And
[01:25:25] I actually...
[01:25:28] Thank you.
[01:25:29] I'm missing two functionalities right now. I didn't implement the delete a row and I didn't  implement the select row functionality. But essentially I implemented all the main buttons.  One thing that I'm actually interested in that I haven't checked is,
[01:25:48] Is QUIC actually keyed?
[01:25:51] Because JSX thing was complaining to me about it being keyed or not.  And I think it might be interesting to actually look and see if quick is actually keyed.  For you, for people who don't know what I mean by keyed,
[01:26:03] It's the idea that for every piece of data,  the DOM element that it gets associated with it  sticks with it.  So if you switch the location of the data in the list,  it's the same DOM element moves with it.  Where in unkeyed, it kind of...
[01:26:18] you kind of hijack other DOM elements as you move stuff.  So the easiest way to see if something is keyed
[01:26:24] is to find that element,
[01:26:28] Right?  Like this TR.  And then basically do something to it.  Like, I don't know, style...
[01:26:38] equals
[01:26:41] Background.
[01:26:45] color
[01:26:46] Green maybe?
[01:26:50] - Beautiful. Now when I swap rows,
[01:26:53] That should move with it. It doesn't. Okay. So it's not keyed. Because if it was keyed, what would happen is when I switched it with row 99,
[01:27:05] It would...
[01:27:07] it would essentially
[01:27:08] end up, the green would end up down here. And while you might be like, who freaking cares? The problem with non-keyed or key by index is that
[01:27:21] Essentially, if you have animations or any kind of state that -- you know, sometimes with inputs and stuff, any kind of state that's tied to the DOM element,
[01:27:29] And web components, this is a thing that comes up as well.
[01:27:33] You're basically...
[01:27:36] switching the data under it mid-sweep.  And it's sometimes hard to-- well, not sometimes.  It's often very hard to kind of switch it.  Like, as you saw, now 99 is green, right?  If this was a fading animation or you're deleting something  and then you swapped it, the different item  would pick up that animation.  So generally speaking, even though the JS Framework  Benchwork has a keyed and non-keyed section,  I basically just ignore the non-keyed section exists.  It's basically-- I consider it unsafe and really
[01:28:04] it's fine for primitive data  like when you have a list of
[01:28:08] strings or like an array of numbers or something. But for any kind of model data, you pretty much  always want it keyed. And React yells at you furiously when you try and do something that's  not keyed. And most VDOM libraries make a big deal of it. Interestingly enough, Svelte and Vue don't  yell at you. And their default is non-keyed, which is bonkers to me. But they do both offer keyed. So  I'm not sure how to key a listing quick. And I was afraid of this. I hadn't gotten this far yet, because I had some
[01:28:36] build issues this afternoon, but this is not keyed, which means that I can't compare it to my other keyed frameworks for two of the benchmarks. Swap.
[01:28:48] And
[01:28:50] replace.
[01:28:51] Because if I'm correct, if I create a thousand rows again,
[01:28:56] it's going to keep the
[01:28:57] See? Still green, even though we're replacing all the items.
[01:29:02] You can kind of see why non-keyed is kind of terrible. But
[01:29:09] Thank you.
[01:29:10] Yeah, okay. As I said, most frameworks support this because you need to support both modes. But
[01:29:19] me just sticking a key on the list, like the naive approach that I was trying to do, actually, I  can shrink all these windows down. I don't need them anymore. This one. Yeah.
[01:29:29] Thank you.
[01:29:30] This one.  Me trying to, as you see, what I tried to do here  was just do the old React, put the key on it.  There's no docs for me to reference right now.  So I'm going to have to...
[01:29:46] Yeah, I don't think we'll be able to...
[01:29:49] run this, but we could at least kind of fill out the rest of the missing functionality here,  just to get a feel for what it's like to develop in Quik.
[01:30:00] Yeah, so yeah, I'm about to talk to them about how they about key updates. As I said, every framework has it. So I'm sure it's either there and I'm not aware of it or it's coming. But let me see. So we have the two last functionalities we want to add. So this should actually be pretty simple, I think, because we just need
[01:30:22] are on ClickHandler.
[01:30:24] Thank you.
[01:30:25] And what do we need to do here?
[01:30:29] And this one is selected.
[01:30:34] essentially selected.
[01:30:39] or estate.
[01:30:40] But selected equals
[01:30:43] - ID?
[01:30:46] Thank you.
[01:30:46] It's probably very easy.
[01:30:50] OnClick.
[01:30:54] Thank you.
[01:30:57] When we delete something, we want it to be essentially,
[01:31:03] Thank you.
[01:31:04] I wonder how they handled mutation.
[01:31:16] Um...
[01:31:17] Thank you.
[01:31:18] And it's the index of the ID. So, we need a couple of other things here. Let's just --
[01:31:25] Beautiful thing is we can use one of the other many frameworks to reference the logic on how
[01:31:33] we want to handle this.
[01:31:36] I'm trying to remember what I did for solid.
[01:31:43] I did the immutable form with solid.
[01:31:45] I am curious how quick handles mutation. So we're going to use -- this is fast, but the  fastest way to actually remove something is using splice. So I do want to take that index  and use splice on it instead of doing this. I think --
[01:32:06] So, this is state.data.
[01:32:12] And then--
[01:32:15] I'm going to make my life easier.
[01:32:20] Let's do that. I think just trying to
[01:32:24] Remember, which framework would have done a mutation-based change
[01:32:30] View.
[01:32:30] Maybe? How does Vue do it?
[01:32:33] Thank you.
[01:32:34] Do-do-do-do-do.
[01:32:36] Thank you.
[01:32:38] Thank you.
[01:32:39] Yeah.
[01:32:40] Not in there.
[01:32:43] It's all in here? Okay.
[01:32:46] There we go.
[01:32:48] Isn't that easy?
[01:32:54] It's a...
[01:32:55] Oh.
[01:32:57] Yeah.
[01:32:58] You're right.  I could use the index.  Most for...
[01:33:02] You're right.
[01:33:03] It's interesting that most of them use the ID instead of the index.
[01:33:08] or use the
[01:33:10] I use the ID usually because adding the index in solid has a performance overhead. Typical me optimizing even array indexes. But, um,
[01:33:21] That is an interesting point that we, in theory, could just--  so is it--
[01:33:31] State, actually, I still like using it. So what is it here? State.data.
[01:33:39] E dot splice
[01:33:42] the
[01:33:44] Thank you.
[01:33:45] Okay.
[01:33:46] Thank you.
[01:33:47] Let me keep this here for a moment.
[01:33:53] Refresh and get rid of our beautiful green thing.
[01:33:57] Can we select? Selection works? Yes, selection works. Deletion works?
[01:34:01] Yeah.
[01:34:02] Leashing works. Okay. So
[01:34:05] Okay, so...
[01:34:07] Splice works nicely, mutation based APIs on the proxy.
[01:34:13] And
[01:34:15] Could we just use--
[01:34:18] the index.
[01:34:24] Probably.
[01:34:27] Thank you.
[01:34:28] I kind of want to leave it the same as everyone else though.
[01:34:32] Um,
[01:34:33] But yeah, I think in this case, because...
[01:34:38] It re-renders on every change.  OK, so anyway.
[01:34:45] Dealing with mutable status obviously has its benefits and makes it very easy to kind of
[01:34:51] do this sort of pattern here.
[01:34:55] I'm a little bummed about the keyed updates, though.
[01:35:02] Little bit.
[01:35:04] Because, I mean...
[01:35:06] Can we see if they have anything? I mean, I know there isn't really any docs, but like, come on.
[01:35:16] We could...
[01:35:18] We could find the code that does the array reconciliation and see how it works.
[01:35:23] That might be fun too.
[01:35:25] Um,
[01:35:27] Thank you.
[01:35:28] Right.
[01:35:31] and
[01:35:32] Thank you.
[01:35:35] component import JSON.
[01:35:38] Render.
[01:35:39] Thank you.
[01:35:41] Slots, types, JSX.
[01:35:47] I wonder if this actually just--
[01:35:49] you
[01:35:50] has a hyperscript function and then we can just look at it.
[01:35:56] Um...
[01:36:01] Thank you.
[01:36:04] Yes.
[01:36:05] Thank you.
[01:36:07] Thank you.
[01:36:07] Thank you.
[01:36:09] Thank you.
[01:36:10] Yeah.
[01:36:11] Like, I mean, we saw this already, right? What's the compile, what's the optimizer? What's the optimizer for the, like, I actually, this is the JS framework benchmark that we're looking at in here in the optimizer. What
[01:36:25] What does the JSX look like?
[01:36:29] JSXS.  So this is, and this is JSXS.
[01:36:34] X
[01:36:40] So our, whatever this JSX function is here  that the import and JSX, okay.  So that is our Hyperscript function.  Okay, so what's up?  Where is it?
[01:36:55] Okay.
[01:36:57] JSX as JSX as JSX as JSX dev, and then JSX,
[01:37:08] uh,
[01:37:09] quick TSX is...  Okay.
[01:37:13] So...
[01:37:15] It's the same function.  So where the hell is the JSX function?  Why am I not seeing it?  JSX function.  So this is a hyperscript function.  Return JSX node implementation.
[01:37:24] Let's get a little bit size here so people can see what I'm looking at.  TSX node implementation, children any constructor, polar props key.
[01:37:32] Thank you.
[01:37:35] Thank you.
[01:37:35] Is this just constructing...
[01:37:38] an object and not doing anything else with it.
[01:37:43] Okay, red herring.
[01:37:46] I think this is just basically converting stuff into some kind of object form.  I don't...
[01:37:56] I don't actually...
[01:37:58] I mean, it makes sense.  It's a...
[01:38:02] virtual node. There's -- but where -- hmm.
[01:38:08] Where does it feed into?  Let's look again at the compile output.
[01:38:15] So...
[01:38:15] Thank you.
[01:38:18] Return.
[01:38:20] On render.
[01:38:22] It's interesting you see this use of lexical scope here.
[01:38:26] This is where my create state came from.  So I think all states tied together in the background.  So it's almost like...
[01:38:34] I call it dependency detection or injection, but I was corrected that that isn't actually dependency injection.  But it is interesting that it's basically keying it by the scope of the component.
[01:38:46] Sorry, just a side note here looking to compile the output.
[01:38:51] Oh, man.  OK, let's see if we can figure this out still.
[01:38:56] Um...
[01:38:58] Because what's factory?
[01:39:01] Okay, well, this is an h function.
[01:39:06] Normalize props.
[01:39:08] Thank you.
[01:39:12] Thank you.
[01:39:14] But it just takes me back to that node implementation.  OK.  So this is just a simple wrapper over it that basically exposes  the H function in case, I guess, you wanted to use it,  like someone else wanted to.  But it is still just a wrapper over it.  So this is not--  I want the--
[01:39:30] I want the reconciler here, OK.
[01:39:33] Factory host, JSX runtime, rich, and slot, slot, slot types.  OK, so this is not it.
[01:39:40] Thank you.
[01:39:41] Okay.
[01:39:45] Thank you.
[01:39:46] Let's try render TS.
[01:39:51] Thank you.
[01:39:53] Thank you.
[01:40:07] Yes.
[01:40:08] Thank you.
[01:40:09] Thank you.
[01:40:14] Mm-mm-mm-mm-mm-mm-mm-mm.
[01:40:17] Yeah.
[01:40:19] probably more interesting to me than most people.  Let's see if we can get here.  Cursor reconciler.  What is cursor reconciler?
[01:40:28] Okay.  We're getting closer, I think.  So...
[01:40:33] What is cursor?
[01:40:37] Thank you.
[01:40:37] .
[01:40:39] Thank you.
[01:40:40] Thank you.
[01:40:44] Thank you.
[01:40:44] Thank you.
[01:40:45] Thank you.
[01:40:50] Thank you.
[01:40:50] Thank you.
[01:40:52] Thank you.
[01:40:53] Thank you.
[01:40:54] Thank you.
[01:40:55] Thank you.
[01:40:57] So this is how slot injection works.
[01:41:03] Thank you.
[01:41:04] Slide none can use a slide.  No, no, no.  Recincel element.
[01:41:10] Thank you.
[01:41:11] Thank you.
[01:41:12] Thank you.
[01:41:13] Thank you.
[01:41:14] Okay.
[01:41:14] Amen.
[01:41:15] Thank you.
[01:41:16] Not finding it yet.
[01:41:22] Thank you.
[01:41:23] Thank you.
[01:41:25] One thing that is possible is if you're,
[01:41:30] if you're not doing keyed reconciliation,
[01:41:33] it is a lot simpler. I might not actually detect the array reconciliation code
[01:41:41] as easily because the routine is--  doing by index is basically just a for loop somewhere.  You can look for a for loop and probably find it.
[01:41:55] Yeah, not in this file.
[01:42:01] Okay.
[01:42:02] Thank you.
[01:42:05] Oh, yeah, I don't think there's a key to reconciler, so...
[01:42:11] I can't run my...
[01:42:15] comparison in the same way because I only have results and stuff. I only test keyed. I pretty much ignore non-keyed. So yeah, okay, well,
[01:42:26] Something to add for the future. Good to know though. As I said, I was only working on this today.
[01:42:34] if you
[01:42:36] It does render, render, slots, slots, slots, types, types.  I think that's it for the render portion here.
[01:42:44] You see how their prop handling is, but it's probably not terribly...
[01:42:51] Interesting.
[01:42:55] Oh, actually, it is kind of interesting because they have all the special props. But other than that, children, true. Okay, cool. That's something for me to look on my own time.
[01:43:06] Yeah, so...
[01:43:09] Yeah, I...
[01:43:10] I think that's pretty fair.  It's interesting.  You can see how much the APIs have evolved already because...
[01:43:19] Look at this version. The component was an object with on render on it with a Q hook thing.
[01:43:26] This probably--
[01:43:30] Yeah, you can already see the APIs evolving.  I actually-- I really like the direction this is heading.
[01:43:36] I mean, they named their state create store. So I mean, of course, I'd like it. But you can see on watch method. Yeah. So it's happening already two days ago. Yeah. So
[01:43:48] Oh,
[01:43:49] Thank you.
[01:43:50] On watch, Vue calls their effects watches.  I'm very much willing to, yeah, on watch.
[01:43:59] that this is going to be essentially their crate effect.
[01:44:05] Um,
[01:44:06] Okay.
[01:44:08] Thank you.
[01:44:09] Are there tests in this PR?
[01:44:12] So we can actually see it in action.
[01:44:18] I want to see it in action.
[01:44:20] Props.
[01:44:24] Show it to me.
[01:44:27] Yeah.
[01:44:29] I'm sorry.
[01:44:31] Thank you.
[01:44:34] Create watcher function.
[01:44:37] Subscriptions.get, yeah, subscribe to Proxy. Okay, yeah.
[01:44:42] GitGuard, excursion.  OK, yeah, so yeah, I mean, this here is an implementation of an effect.  I can recognize it from the way the code is written.  Subscribe proxy, yeah, yeah, yeah, OK.
[01:44:55] Thank you.
[01:44:56] Thank you.
[01:45:00] Thank you.
[01:45:07] OK.
[01:45:08] Here we go, create store, count zero, double count zero.
[01:45:12] Store double count equals two times a zero count.  Yeah, yeah.  So this is using an on watch to write back to the store.
[01:45:21] And then rendering them both in, yeah.
[01:45:26] This is, and this dollar sign probably means that it gets hoisted out into its own context separate from the other ones.  So they are on their path to doing fine grained work.
[01:45:39] code splitting based on reactivity.  Not quite as sophisticated as using a compiler, I think.  But this is much more-- this is basically-- this  is very similar to solid.  So seeing them do this--
[01:45:55] gives me some thoughts or ideas, definitely.  Because this is basically like-- this should look pretty  familiar to people on the stream.
[01:46:09] Huh, okay, cool. Yeah, this is, this is, I like doing this sometimes kind of going into the repo and seeing, seeing what what's what's what's being done here but this this this is the dollar sign indicator and stuff yeah this this looks pretty promising.
[01:46:26] Okay, sorry. Kind of went off on a little side here, but yeah. Yeah.
[01:46:35] I don't know. What do we feel about quicker thoughts here? I think if I want to...
[01:46:42] kind of
[01:46:43] step back from all of this and the specific examples is, um,
[01:46:49] Thank you.
[01:46:50] Quick offers a lot
[01:46:52] obviously, as I mentioned, a very unique paradigm in terms  of how they split stuff up.
[01:46:58] because of how the like the apis are in front of you you can't exactly ignore it but i think it's  something you could also just embrace and work within those constraints and get what you want  out of it um i think that the data question is still up in the air in terms of the data  serialization like which is one of the benefits of partial hydration um like obviously it's not a  it's not like an end-all be-all because most frameworks don't deal with that either it's just
[01:47:28] It's one of those places that probably is going to have some consideration in the future.
[01:47:34] I think...
[01:47:35] I think, though, that the way they're using runtime reactivity and still accomplishing this is really interesting.  Mishko had mentioned that their trick is they actually serialize the dependencies because everything is based off this one global store.  They can actually just serialize like double count.
[01:47:54] and just be like, oh, this depends on double count, to be able to, like,
[01:47:58] run the stuff on the server,
[01:48:01] essentially, like they can build the list of dependencies  when they run it on the server.
[01:48:07] And then when they run on the client, they don't need to replay it.  As I said, effects are usually client only, so that's probably not the case.  But you could picture if you had a memo or something, you could basically...
[01:48:17] Use the proxy on the server to know which properties were hit, serialize that.  And then on the client, you don't need to rerun it until one of those properties change.  So I think that's a cool approach.
[01:48:29] Thank you.
[01:48:30] Thank you.
[01:48:32] Are you going to draw us any pictures? No, I don't know if anything here actually requires that. I was thinking I brought out Excalibur because I thought that I would have a like there would be something to explain here on that side visually. But this is this is I haven't really figured out how to.
[01:48:51] to draw this exactly. It's not like server components where there's that hierarchy that's really obvious here. This is just a lot of slicing. And in that case, I feel the similarities with Marco to a certain degree. Obviously,
[01:49:06] Marco has like a different view of how the hierarchies and like, sorry, how the data transcends through components and through files. But this still has this kind of breakdown. As I said, ultimately, it's going to come down to
[01:49:23] Is it better to have the knowledge of what's on the server compared to like...
[01:49:30] figuring out
[01:49:32] what's lazy loaded, right? Like,
[01:49:35] Like, and grouping it that way. And the answer might be, it depends on the type of app. I know, like, in stuff like e-commerce, you can bank on the fact that most of the pages is static, like, you know this. So I feel like for e-commerce, I'd rather be in a place where I could use, like, the dot server Marcos analysis to be able to make those kind of savings.
[01:50:05] in like a way that, you know,
[01:50:09] might not put that much on the end user until you get into this kind of zone. But
[01:50:15] I mean,
[01:50:16] I think it depends on the type of thing.  So it's hard to evaluate technology like this because of just how...
[01:50:26] different it is. But it is definitely interesting. Like when I kind of get, you know, excited giggles over the fact that I'm looking at a runtime reactive system.
[01:50:40] like solids basically staring me in the face right here,  in the middle of a framework doing this kind of stuff.
[01:50:48] It does suggest that there might be different paths here, like ways to preserve runtime reactivity through this sort of model.  Maybe there's a place somewhere where you have a certain amount of knowledge, so you don't...
[01:51:07] do this sort of thing, but then also can still do this. You know, I think, I think, I think,  I think it's, I think this is,
[01:51:16] One thing, if anything, this shows from Quick is that this might just be
[01:51:21] there might be a range of solutions that might not
[01:51:25] be the most ideal in certain scenarios, but maybe still applicable across that range.  And that makes me think that there's more possibility here than any given solution.  As I told you, I talked to Dan this week, and they're pretty in on server components, right?  And I talked about it a few weeks ago.  He had that tweet where he was essentially like, I haven't really been looking elsewhere,
[01:51:55] to me at all and you know only react or something like and i was just like what but he also admitted  that he wasn't looking at anything so to be fair you know that's kind of self-fulfilling but i
[01:52:07] they on the react side are very convinced that their VDOM method and their  approach is the only way to do stuff.  Like even when I mentioned that I can do concurrency without the VDOM,  they're like, well, you know, it's a little bit of like, well,  what do you mean by concurrency? You know you know,  they're very much on their path. And obviously on the Marco side,  we're very much convinced that through,
[01:52:28] compiler analysis and knowledge, we can achieve the most optimization without putting on the end  users. And on the quick side, I think the assumption being made here is that
[01:52:40] compilers maybe
[01:52:42] can't completely cover the gap. And there are situations where,
[01:52:48] Things are...
[01:52:50] very dynamic, yet you still do want to be able to benefit from it.  Right. So like in a sense, QUIC seems like it has the potential
[01:52:59] as I talked at the beginning,
[01:53:01] to be maybe that, that, that lazy loading solution.  Do you know what I mean?  That, that transitional app thing,  like Rich Harris was suggesting where you kind of like,  it's a spectrum and it's,
[01:53:14] And it's kind of you kind of go from...
[01:53:17] partial hydration to, you know, to like spa and back and forth and all that.
[01:53:24] But
[01:53:26] The funniest thing is...
[01:53:28] I mentioned I talked to Ms. Go and stuff.  They're looking at server routing just like--
[01:53:35] React server components, just like Marco.
[01:53:38] Because
[01:53:39] As I mentioned, you don't want...  I showed you the waterfall on the Hacker News.  You don't want that...
[01:53:46] like tenfold when you navigate to some new complicated page because you have the client  render it. So the, the, the, no, no amount, like no amount of optimizer is going to optimize both  for the initial page scenario and for the new page scenario, unless you're producing multiple  different bundles and stuff. It just doesn't, it just doesn't make sense. So if everyone is
[01:54:10] actually thinks that server routing is the way.  That I don't know if transitional apps,  or at least as they're stated by Richaris,  are even a real thing.
[01:54:20] Like maybe this is a concept that's,
[01:54:23] already dead on arrival before it came. Like, you know,
[01:54:27] maybe transitional, whatever the transitional app thinks, like maybe it's already over. Like maybe it just never is going to come. And what was more likely going to come is a new type of hybrid app, which I've been suggesting a little bit is
[01:54:42] basically, the return of the MPA mentality
[01:54:45] applied to
[01:54:47] So,
[01:54:48] partially client rendered apps, essentially.
[01:54:53] MPAs in the client or something. That isn't the same as transitional because it's not like a spectrum. It's actually a completely different architectural paradigm the same way that MPAs are different than SPA's. It's just it's like an MPA.
[01:55:10] It has NBA qualities, but actually...
[01:55:13] also has SPA benefits.
[01:55:15] And
[01:55:17] As I said, in that scenario,
[01:55:20] It's almost easier to start from the MPA side.  And I think that's why React Server Components are the way they are and why Marco's the way it is.  And Quick is...
[01:55:30] right in the right place to like all three of those approaches are right in the right place to leverage and take take advantage of this.
[01:55:37] scenario. So,
[01:55:39] Yeah, maybe transitional apps, your hashtag transitional apps are not a real thing at all. We are just
[01:55:47] like,
[01:55:48] seeing
[01:55:49] the next paradigm, the third evolution of, you know, we were MPA, then we were single page app and
[01:55:59] Now, next, we're whatever this is, because I've looked at all the different solutions and they all kind of agree, even though they're like, no, you have to do it our way.  They all kind of agree on some fundamentals. And I find that really, really interesting, because if you have that kind of agreement,
[01:56:16] Like,
[01:56:18] Like maybe there is something there.  Maybe they are onto something.  And it's definitely not the single page app  that we're familiar with.  Creating a React server component
[01:56:28] thing where if, say, most of your page, like 80% of your page are React server components,
[01:56:34] doesn't feel like the react you know. Suddenly things like Apollo are not what you're reaching for, right? You know, like,
[01:56:43] React query
[01:56:45] would be something that would only run on the server.
[01:56:48] perhaps like
[01:56:49] maybe you don't have React query anymore.
[01:56:53] It is paradigm shifting.
[01:56:56] like certain types of libraries just don't make sense anymore under that. And I think that is
[01:57:02] more interesting to kind of think about because,
[01:57:06] if these vastly different approaches to solving problems
[01:57:10] this one problem, to be fair, set of problems, can agree on a few things. And they indicate that. I think that's pretty huge. I think
[01:57:22] I'm a little bit surprised
[01:57:25] you know, we aren't talking about it more. Like even on the React side, they aren't talking about it more. I didn't understand server components until very recently. I kind of just
[01:57:36] dismiss them, which is a bit unfair.  Not dismiss them, but kind of like evaluate them on features.
[01:57:41] And I think most, I think a lot of people aren't kind of connecting the dots on this. So I think this is an interesting, uh,
[01:57:48] an interesting potential future that we have going here because this is not...
[01:57:55] This is not your typical single page app.
[01:57:59] even though it looks at first like this could enable a new type of single page app,  I don't think that's what's happening here.  I actually...
[01:58:06] it feels like this is actually all about server routing and completely different patterns again.
[01:58:15] We're in for a bit of a ride, even if even if you're like holding on to react because that's your framework. It's like tomorrow's react is not today's react so.
[01:58:26] Can you think of-- sorry, I know I'm going on a bit of a tangent rant. Stop me or ask questions in the chat if you don't want me to.
[01:58:33] Think of the difference an app looks like if suddenly...
[01:58:38] Your state concerns like your goal of state concerns just aren't on the client.
[01:58:44] like like going back to mpa mentality a bit and
[01:58:48] Think about 80% of your page.
[01:58:52] is static, so it is circle components essentially.
[01:58:55] Do you have the same...
[01:58:59] perspective on the client components? Like, are you as concerned about the same sort of things?
[01:59:06] Like,
[01:59:08] If you're dealing with a bunch of isolated islands, essentially, even if you write your app generally as one consistent app, but if from a stateful standpoint, you have these isolated smaller islands, are you concerned?
[01:59:21] with unidirectional flow as much.
[01:59:24] and how global state management works and actions and like all the mentality  that made react strong at the beginning and redux like i'm not i'm
[01:59:34] I'm not sure.  Like, does this actually--
[01:59:37] Is this shift so big?
[01:59:39] that
[01:59:41] it actually changes what we value
[01:59:44] in terms of what API design looks like.
[01:59:50] Because potentially, if you can bank on there being a server, which is back to the beginning of the conversation there,
[01:59:59] in
[02:00:00] Do we have a new
[02:00:01] native, like a new concept of what the baseline for a framework or building UI interaction is?  Like, does it, does this just change?
[02:00:12] our perspective on
[02:00:15] on what's on what's valuable.
[02:00:19] Exactly.
[02:00:20] Honestly, I'm not sure, but those are questions that I kind of want to answer because
[02:00:28] This seems...
[02:00:31] really
[02:00:33] potentially changing.
[02:00:35] Thank you.
[02:00:37] Thank you.
[02:00:38] Yeah, I mean, for sure, right? The state moves back into the URL to a certain degree.
[02:00:48] But it's like...
[02:00:50] Thank you.
[02:00:51] It's, it's, it's, I think that fundamentally changes what you value.  Like I've seen a little bit of this on Marco because on the Marco side,  you're like, you're kind of like,
[02:01:00] people coming in like, where's the router? Where's the global state management? We don't have it. And then they're like, Oh, what a stupid framework. And then you're like, but you don't really need it. It's, it's,
[02:01:11] I think this goes beyond that, though, a little bit, but I feel like that's part of the reason why people have been working on MPA frameworks might have a better perspective on what actually is valuable.
[02:01:23] But picture it now. Picture like
[02:01:27] I'm going to pull up Twitter again. I already have Twitter here. Picture
[02:01:32] Yeah.
[02:01:34] Picture this...
[02:01:35] Picture this app.  We did this on the nested routing stream, right?
[02:01:40] Um,
[02:01:44] And this is one layer of the onion.
[02:01:48] like the whole pages. And then this section, or then this whole section is another page,
[02:01:55] like nested route and then each of the tabs
[02:01:58] like this content here, like the tweets, the tweet replies, is another restaurant. So you've got like three levels here, right? And
[02:02:04] Like, how much does this change if you can just...
[02:02:14] oh, like server render the feed stories
[02:02:18] and then just send the JavaScript for these buttons, essentially.
[02:02:24] Oh, like.
[02:02:27] And if you had nested server components, switch to here,
[02:02:32] and not re-render the outside, but server render the inside,
[02:02:37] content. Like there's just...
[02:02:40] The amount of JavaScript you need just shrinks
[02:02:45] Like, completely -- and there should be a way to do this piecewise, like nested routing and whatnot, that --
[02:02:54] that you could keep the client-side transitions. You could switch, even though these pages are being server rendered, you could actually have a nice animation. I mean, Twitter is not doing it. It's jumping like crazy. But this is almost an indicator that they don't have nested routing here.
[02:03:11] Do you know what I mean?
[02:03:13] All right.
[02:03:14] How do I know Twitter doesn't have nested routing?
[02:03:17] But, um...
[02:03:20] Yeah.
[02:03:24] I mean, they could just be doing a manual scroll to the top, to be fair.
[02:03:28] Yeah, maybe that's what's happening here.  But the...
[02:03:32] to like,
[02:03:34] essentially like
[02:03:36] you
[02:03:36] This sort of partial model could keep that nicety of a single page app.
[02:03:43] Oh, sorry, I'm not sharing my screen.  You guys can't see what I'm talking about.  My bad.
[02:03:48] Can you see now?
[02:03:50] Sorry, that was like two minutes of me saying, okay, let me try this again.  I forgot I wasn't sharing my screen.
[02:03:57] Static sidebar.
[02:04:00] Amen.
[02:04:00] right, this whole large content section.  So the first layer is this.
[02:04:06] essentially, and its outlet is this section, and then this outlet is the feeds.
[02:04:12] Right. I'm so sorry. I was I got into my rant without without showing the screen.
[02:04:18] But you can picture what I'm getting at is,
[02:04:23] Picture...
[02:04:25] if these tweet pages were server rendered.
[02:04:27] Like,
[02:04:29] with a nested router. You could maintain the state of the top part of the app and then you could
[02:04:36] basically render all of this stuff on the server  and only send the JavaScript,  maybe for these interactive buttons, so to speak.
[02:04:46] Right? Like, maybe lazy load the image viewer. Or this isn't even an image viewer. It's an article link. But where's one? This one? Like, lazy load the image viewer or something. Like, you could reduce so much of the JavaScript on this page, yet still maybe make a nice transition as you change the tabs.
[02:05:06] Um,
[02:05:06] because this part stays in the browser
[02:05:10] And this part is server rendered.  Like, it's, I think this is,
[02:05:17] like,
[02:05:19] How much actually is even stateful in a really apt way?
[02:05:23] appy page like this, like where you have all these points of interaction, how many pieces are actually static that we really kind of never need to render again in the client if we could do this?
[02:05:37] Um,
[02:05:40] Yeah, I'm really sorry.
[02:05:45] Like...
[02:05:46] Like, if you were at a point where you were really only thinking about these interactive buttons, then like,
[02:05:55] The depth and the scope of which you need your client side interactivity to work is very different, I think. I mean, some snide person's going to be like, you can already do this with web components. And...
[02:06:11] Thank you.
[02:06:13] Sort of.  But like partial hydration  and, or sorry, no, sorry.  Hydration in web components  is a whole other fun beast  with declarative shadow DOM  and figuring all that kind of fun out.  And the be fair, like you still need  all the architectural pieces I'm talking about  to do this.  Web components actually, in a sense,  they're nice because they're like little islands  that you could put on static HTML.  But what we're talking about goes so much beyond that.  So...
[02:06:42] It's not...
[02:06:44] I want to be clear this. I don't think current solutions are
[02:06:48] We haven't seen this anywhere.
[02:06:50] yet.
[02:06:52] which is really interesting to me because you can see elements of it in different places.  You might have like, you might be thinking like, oh, yeah, it's kind of like this,  but it's also kind of not like that, like, because it hasn't been put together in a certain way.
[02:07:07] Yeah. So,
[02:07:09] Yeah, I don't know. I'm just thinking out loud. It's just...
[02:07:15] Thank you.
[02:07:16] It's interesting to see that
[02:07:20] I think that the impact of a change like this is enough that it actually subtly changes everything. And you I mean, if you want to think of it on a smaller scale, many of us were around like even the newer people around when react hooks came out, and how that changed the way people build react apps, and change the patterns. And on one hand,
[02:07:40] You know, I was mentioning in this new world, MPA people being more familiar on how, you
[02:07:46] the pattern should work. Similarly, people who use reactivity were more familiar of how the pattern should work when react hooks came out and it wasn't like it didn't quite match up with that. And that's probably a source of a lot of the friction these days. But I think this is like
[02:08:03] even bigger of a change potentially because the, uh, the, uh,
[02:08:10] Yeah.
[02:08:12] It's like...
[02:08:15] You're authoring an MPA.
[02:08:17] you know, like the old web.
[02:08:19] And it's just nice.  Like, it just has the smooth transitions and all that.
[02:08:25] Yeah, I don't think there's anything out there like that today.  Yeah.
[02:08:30] Huh.
[02:08:31] Yeah, I'm sorry, we kind of jumped on a tangent from talking about QUIC, because obviously QUIC is a framework that's showing a lot of promise. It hasn't even really gone to that stage where it's looking into these things yet.
[02:08:45] But looking at the commonalities between
[02:08:49] all these different approaches.
[02:08:51] It feels like they're driving to a certain place that I don't know...
[02:08:57] that the typical
[02:08:58] SPA frameworks are even...
[02:09:01] thinking about like i i i've got to catch up on view or svelte or see what they're working on  because it seems like it's in a very different zone or thinking like
[02:09:11] Like Next.js knows what's up.  Seb from React team is now working on Next.js.  So like...
[02:09:17] They're building a meta framework around this stuff. I think it's pretty obvious that if your default thinking is
[02:09:22] you need server rendering.
[02:09:24] essentially, like you've changed the framework.  So like server rendering, like to be fair,  React server components don't use server rendering,  but if for that experience, you essentially are like,  server rendering is a,
[02:09:34] is like a first tenant.  Um,
[02:09:38] Then, um...
[02:09:40] Yeah, it does kind of push you towards having meta frameworks. And I think everyone's on the right page on that side, you know, Svelte and SvelteKit, you know, React with Next or whatever. I think everyone's kind of on the right thinking on that side. It's just...
[02:09:56] Yeah, are we in for a change in front end that we haven't seen in more than a decade?
[02:10:04] Thank you.
[02:10:05] Maybe.
[02:10:07] All right.
[02:10:10] I could theorize more and more, but I honestly, I think there's, I think there's, I think there's more stuff to figure out.  And if anything, all of this just makes me more excited to, to, to see Mark 06 come across the finish line and to look at the future, what we're going to be doing with solid coming up, because, you know,
[02:10:32] Ooh.
[02:10:33] We're also working on our own meta framework.  And I think obviously that's going to resemble Sveltecan and Remix.  But I think there's a longer term objective here
[02:10:45] if we can recognize that there is this world
[02:10:50] It doesn't offer an interesting question, because someone  mentioned earlier, there are client-only apps
[02:10:57] And
[02:11:00] I wonder if there's going to be that big of a
[02:11:03] difference, like going from the server focus experience to the client experience, will we be  able to make that feel seamless? It's kind of interesting to me because like to a certain degree,  like React server components feel like
[02:11:18] they almost wrote a second framework that wraps their original framework. And I wonder how many  of these experiences are going to feel like that and have that scalability. They kind of, you know,
[02:11:28] you know, kind of make that seamless swap.  Like obviously I already showed that quick can client rendered fine.  So maybe the model stays the same there. Marco, you know,
[02:11:39] does largely too, but
[02:11:42] I'm
[02:11:43] I think that's interesting, you know, like
[02:11:46] stuff like server components having rules might ultimately...
[02:11:51] Either, well, it could be a strength, it could also ultimately be the thing that makes, um,
[02:11:57] it feels like there's two different types of React or whatnot. So I think this is all things for us to evaluate and consider for the future.
[02:12:04] But, yeah.
[02:12:06] I've enjoyed looking at each of Marco's
[02:12:10] Quick.
[02:12:11] in React Server components and kind of really getting a feel for, um,
[02:12:18] the kind of impact or change that they're suggesting.
[02:12:23] I mean, stuff's always moving, stuff's always working.  You know, like SvelteKit was a pretty hot thing a few months ago, and it's new, and Remix is doing really new, innovative things in terms of the way that they're handling certain patterns that have been there forever, but making them feel fresh again.  And I think...
[02:12:44] But I think what we're on the precipice of is a bigger change than that.
[02:12:51] I'm excited to see how
[02:12:54] everything how this all plays out in the end but uh yeah i'm definitely i definitely want to be a
[02:13:03] So look forward to seeing some of the stuff we'll be building coming up.
[02:13:09] Anyway, sorry, long rant at the end. But if anyone has any more questions, I think I'm  good on the stream. It doesn't have to be the longest stream. We got a good dose of  quick and got a bit of a feel for it. And we talked about the future web dev. So I'm  pretty content with myself here.
[02:13:30] I think I am good to sign off.
[02:13:35] Thank you all for joining my stream this week.  I'm going to be, I believe I'm going to be, I've got some, I've been working on some stuff.  So we'll see.  I'm hoping to probably.
[02:13:48] write an article about quick coming up here pretty soon kind of tied together a lot of the thoughts  um there's a couple things that you know um that are coming soon and quick and kind of fill some  those gaps so i might wait on that um but otherwise yeah let's uh let's all meet up next  week for whatever stream we'll be doing i i haven't i haven't quite decided what that is but  interestingly enough it seems like every week there's something new and something interesting  so uh have a good night everyone and till next week
[02:14:16] See ya.
[02:14:19] Thank you.