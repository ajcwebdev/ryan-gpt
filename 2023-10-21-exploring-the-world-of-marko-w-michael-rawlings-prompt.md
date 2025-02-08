---
showLink: "https://www.youtube.com/watch?v=n3YtxzHRjI0"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Exploring the World of Marko w/ Michael Rawlings"
description: ""
publishDate: "2023-10-21"
coverImage: "https://i.ytimg.com/vi/n3YtxzHRjI0/maxresdefault.jpg"
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

[00:00:00]  All right. Hello, everyone. Welcome to my stream today. Hope everyone's doing well. I've had a busy week. I was just at Netlify's
[00:00:15]  conference, Netlify Compose, this week, and I've been just catching up. Come say hi in the chat as you're joining on here. How was
[00:00:29]  Compose? Yeah, different kind of conference, right? We did Jamstack last year, and it was very front-end frameworks. Tanner dropped his amazing router and
[00:00:46]  whatnot. It was a very different feel. Compose was a lot of enterprise customers coming in. A lot of conversations were about connecting the dots. There was developers
[00:01:04]  and business people, people from different parts of the organization coming in. And, yeah, the focus was very much on building out solutions, like, in practical space.
[00:01:18]  We had the, like, I think it was VP of technology from Riot Games give a keynote. And, like, it was a very much, like, it had a
[00:01:32]  very different sort of vibe. But, you know, it was at the Fairmount Hotel in SF. So, very nice venue, good food, good drinks, good
[00:01:43]  company, you know? So, I had a good time. That's where you found out about Clark with JamstackConf last year. Finally, some news about
[00:02:02]  Marco. Yeah, well, yeah, it's been a while, hasn't it? We had both Taylor and Dylan on stream just over a year ago. But it's
[00:02:12] , you know, from the perspective, it's been maybe a little radio silent. Hey, Ryan, how's it going? Ryan works on the Marco team, and
[00:02:21]  also is responsible for a big part in creating solids from Router. Yeah, and Dylan's here, too. Yeah. So, hey, Brandon. Oh, my
[00:02:39]  dad's here, too. What do you know? Maybe. Or someone who has the same name, that's misspelled. It's Carniato, not Cani
[00:02:49] ato, but, eh. Alright. Yeah, I don't know what's up. I'm pretty sure I'm still, let me check the settings right here.
[00:03:06]  I'm streaming at 7:20. Just, the lighting is perfect today. Like, what's going on? I don't know. Alright, alright, alright. Just
[00:03:18] , yeah, no, this is orange juice. I was a little slow. I know you're catching up on the comments. Let me open Twitch and make sure that people
[00:03:27]  are live there. I should probably tell people that we're live on Twitch. Anyway, let me see here. My channel. Alright, there we go. Cool,
[00:03:39]  yeah. We've only got 10 people on Twitch right now, compared to everyone else on YouTube, so... Gotta get some Twitch going. Hi. Alright, yeah.
[00:03:56]  Let me... Get on the old... It's funny. I still call it Twitter, but, you know, people... Keep on correcting me out there. I keep on
[00:04:06]  hearing Marco the best. Yeah, I mean... Often, you know, everyone talks about how, you know, their framework of choice is the best framework. But, unfortunately
[00:04:16] , those people are all wrong, because there can only be one best framework, and that's clearly Marco. So, um... I apologize to all of you out there
[00:04:24] . Um... But, you know... You know, it's like Highlander. There can be only one. I... I recently had an eBay engineer I interview
[00:04:40]  brag to me that he made his team migrate many things to React from Marco. And I was like, "What did you say that backwards?" Yeah. Um... Yeah
[00:04:55] . There... That's a whole other conversation. Um... Yeah. It's... I don't even know if we... If I want to get into eBay politics. I
[00:05:05]  don't work there anymore. Um... But... That was always a fun piece. But, yeah. Let me actually tell people that we're live, right? Where are
[00:05:14]  we? Um... Where's the stream? Yeah. Let me pop up my screen for a second. Yeah. There is some tension there. Because there's a lot
[00:05:23]  of people who want to use the... You know, what they consider the latest greatest. But they... I've talked to them. They have no... Like, they don
[00:05:30] 't... They just don't know. And they're kind of like, "I want to use React so that in my next job I can, you know... I can
[00:05:35]  do well. You're ruining my future, right? When my... Two years of my stock... Uh... You know, investing cliffs, you know, then I want to
[00:05:45]  be able to switch to a different company." And... Yeah. Yeah. It was always amusing seeing the push towards React when it was, like, clearly the worst...
[00:05:56]  A worst solution for what was being built. And it is, like... It's a fun argument to have because, like, there was no good argument. Watch the stream
[00:06:06]  and you'll see that there's always different philosophies, right? Like, Marco, if you had a spectrum where you had, you know, Solid, New S
[00:06:19] velte... Not Old Svelte. Old Svelte was in its own zone a bit. But New Svelte and Marco. Like, Svelte would
[00:06:28]  actually be kind of in the middle. Like, Marco's taken the compiler beyond what anyone's dreamed of. So, yeah. It's... You'll see. And
[00:06:41] , I... You know I obviously have interesting opinions about compilers, and... I want to see the technology flourish, but there's also, like, different zones you
[00:06:48]  can work on. But, yeah, okay. We're killing it right now. We probably should bring our guest on pretty soon. Hey, Johnny. React is okay
[00:06:57]  for internal tools. That's how we Angular it. Yeah. I mean... Yeah. Well, you know, that's a funny thing. It was open source back in
[00:07:15]  2014. But maybe... Um... Let me first tweet this out. So... What is it? Quote tweet. Or quote post. What? I don't even
[00:07:25] ... Quote. Just a quote now. Um... Live. And Twitch... T... This is where I get all the Twitch viewers. I tell them where to go.
[00:07:40]  Um... This way? Yeah. Okay. Cool. All right. Let's... Let's get down to business here then. Because... Yeah. Did I hear Zone
[00:07:53] .js? Don't you know Zone.js is coming to the browser officially? It's called Async Context. Angular was always right. Just as they're getting
[00:08:02]  away from it. Uh... There's nuance to that. But... I like playing with the perception. Okay. Okay. Um... Anyways. Let me create a banner here
[00:08:13] . Uh... Our guest on, uh... This week. Because... Um... He's been on before on a dual stream with him and Dylan. But if you've
[00:08:21]  ever... If you know anything about putting Michael and Dylan together. Like... I'm sure that neither of them can get a word in edgewise. So like... We
[00:08:29]  didn't actually get to spend the time talking to Michael about Michael. Dylan came back on. And like suddenly you hear a whole different story. You hear about Rill.
[00:08:35]  You hear about like... You know... How he got into development at Marco. But like the first stream was just like... Them... Constantly like one-upping
[00:08:44]  and interrupting each other. So... Um... I think... I think this will be good. And besides, I haven't talked to Michael... Legitimately... For ages
[00:08:51] . Um... So we need to catch up anyways. And I can use this stream to justify my time. So... Yeah. Let's... Let's... Let's get
[00:09:00]  going here. Um... Without further ado, I'm gonna welcome... Um... Michael Rawlings... Onto the stream. Uh... Marco Visionary. Um... I
[00:09:11]  don't know about that. But... I don't know. What do you... What do you do on the Marco team? We already know that Dylan builds everything. Like
[00:09:17]  he's the one actually writing the code. He makes the compiler. The... I mean... There's a little bit of truth to that. Dylan is absurdly productive.
[00:09:26]  Um... We've got a... A pretty good team now. Um... I enjoy working on it. Um... I... I've been mostly focused on... Um...
[00:09:38]  Marco Six and... Some things around... Um... That. Uh... And... Yeah. There's... There's a lot of ideas. Um... A lot of them are
[00:09:47]  bad. Um... And we... We have to... You know... Go down a path to figure out that they were bad. Um... But... Right. So your job
[00:09:57]  is to think about... Think... Come up with all the bad ideas. Essentially. I guess so. Oh man. Uh... No. Uh... In all seriousness.
[00:10:08]  Um... Michael's... Uh... Big part of like... The think tank part of... Of... Uh... Marco. And uh... He... He went away actually. I
[00:10:20]  think it was on paternity leave. Uh... For a month or so. And he came back. Like... It was like March 2021. I remember. Um...
[00:10:28]  And you came back from maternity leave. And you're like... Yeah. I... Everything we're doing... I... I... I don't want to do this anymore
[00:10:36] . And you basically... After working on it for like... This was already V2. Like we... We worked on the first version. year before I got there.
[00:10:42]  And then we picked up on V2 over the summer. And then Michael came in and he was like... No, no. This is... Yeah. Like... And...
[00:10:52]  I mean... Marco6 has been dragging on. And a... A lot of that has been... Um... You know... Rethinking... Uh... Approaches. Probably
[00:11:01]  more time than... Times than we should have. Um... But... But to be fair... I can probably be blamed for a lot of that. But to be fair...
[00:11:08]  Like... Some of... His ideas were incredible. Like... We have a name for this stuff now. But when he came back in March 2021, he pitched Resum
[00:11:17] ability to us. We just didn't know what to call it. Um... He... He was like... He was like... We're trying to solve some async thing
[00:11:24] . He's like... Why... What if we just didn't run any... You know... JavaScript on the browser when we started up? Like... What if we just didn
[00:11:30] 't hydrate? And... Um... This... As I said... Um... This... This was like a completely independent... Uh... It didn't come out yet.
[00:11:40]  Um... There... Like... No one... They were obviously working on it at the time. Yeah. Yeah. But like... Oh, obviously. Cause like... Like...
[00:11:51]  Michiko gave a talk in 2019. But... As everyone knows... I basically had given up on Angular a few years ago. And... No one was even paying... I
[00:11:58] ... Like... Keys to SSR. I would have never believed you in a million years. Cause... They didn't even have hydration. They had like... Destructive
[00:12:06] ... Redoing stuff. So I... It didn't even occur to me to look in that direction. Misko... Went off on his own. Ended up...
[00:12:14]  Making cute. Which became quick. But... We... We were kind of oblivious to that. Even though he had like... Two years on us. And... Dylan just
[00:12:22] ... Or sorry... Michael comes back from vacation. And... And just starts pitching this... This idea of how we could... You know... Completely change the approach. We
[00:12:30]  do hydration. Which caused... Version 3... Of Marco 6. Which I... Believe is what we're still on today. Yeah. I mean... There's been some...
[00:12:39]  Reworkings of the... The mechanisms. Um... But... Uh... Let's... See? Dylan's giving you cred. Um... But... Yeah. The...
[00:12:52]  The... The high level view of... Of Marco 6. Hasn't really changed. Um... From that point on. Some implementation details have. Um... Especially around
[00:13:02]  signals. Yeah. We've got like... This compiled signal thing... That we've gone through... Several iterations of. Um... And... Yeah. I think that's finally
[00:13:12] ... In a solidified place as well. Nice. Nice. Nice. Yeah. So yeah. As I said... I think that kind of establishes... A bit of
[00:13:22]  what... Um... Michael does. Michael has... Many accomplishments. Uh... Um... For me most... I... I think one of his biggest... Uh... Accompl
[00:13:32] ishments and gifts back to the community... Is... Actually... He is my... Absolutely favorite... Um... Meme artist. Actually. You guys might not even know this
[00:13:44] . People don't really... Father's time. But... This... This... This... Multi-template meme. Which is... You know... Just amazing here
[00:13:54] . What... Ended up... Uh... Being actually... Where... It's actually three memes in one look. It's this meme. This meme. And this meme.
[00:14:04]  Is actually one of his creations. Right? Um... Yeah. Ember... Ember had... Observable reactivity... Back in the day. That's why I
[00:14:12]  actually chose it over... Angular back then. But... You guys might have even seen it. Like... Originally. This... Uh... This... This... This beauty from Theo
[00:14:23] ... Originated anonymously. And I... I think we know where the source came from now. Let's... Let's continue. Um... You know... I... Seriously
[00:14:33]  just... Some of my favorite stuff here. Introducing the new Marco logo. This... This is another classic. Um... I... I... I swear I watched that
[00:14:45]  documentary. This... This is an... This is another... Another classic. Seriously. It just keeps on going. Uh... Anyway. For... For those of you...
[00:15:04]  I think that's where it started. I... I started having... Uh... I don't know. Some spicy thoughts. You didn't start having some spicy thoughts.
[00:15:11]  These... These... These... These... These... These images just never left the private discord or slack channels until this point. You've been doing this for years. So...
[00:15:20]  Yeah. If... If... If you don't follow Michael, um... You might want to check it out. Cause... He's... More than occasionally entertaining. And
[00:15:28]  criminally under-followed. So... Just throwing that out there. This is a... you might want to check it out because he's more than occasionally entertaining
[00:15:37]  and criminally under followed so just throwing that out there this is a yeah yeah might be true that's a distinguished meme artist yeah see little known fact about michael anyway
[00:16:03]  um but uh how did you let's go back a little bit because i don't think we got to cover this uh previously but how did you even get into like like mar
[00:16:13] co framework people i was talking to some like it came up in the chat and someone's like you know earlier was like i don't understand how marco is it an open
[00:16:24]  source library is it internal it's been open source all this time how did you even get involved like because you've gotten involved after is open sourced it was originally created
[00:16:33]  by patrick right yeah patrick steel item um and yeah um so after college i was doing some like it was essentially freelance web development i i had a company and i did
[00:16:53]  have like another employee but it was really just like the the two of us um doing some some freelance web development and um because i am the way that i am uh i
[00:17:06]  couldn't just use frameworks that were like off the shelf or cms's and i ended up like building that um that kind of stuff you know you are like you
[00:17:22]  i couldn't i couldn't help myself um and so uh i'd gone through several um iterations and uh i was currently working on um a uh like a visual kind of c
[00:17:40] ms um that was still like developer driven but then you could go in and like visually um edit it and i wanted like what you wrote as a developer to be like just
[00:17:53]  basically html um and i found marco um and marco had compiler hooks kind of into the html um and so i started digging into that for the
[00:18:09]  purposes of like um doing transforms and i had um like some components that could like query your database to pull in um information and so like you could you know go in and like
[00:18:24]  add an item right there and it would add things to the database this is circa i obviously after open source so like 2014 2015 um yeah why was this appealing over say something like
[00:18:35]  react um so i mean i i had used react i liked react um for for specifically what i was um doing so i was looking at um we had some more involved projects
[00:18:52]  but uh uh there were a bunch of people that just like wanted a like kind of marketing site um you know it was getting requests for that and i wanted to make it
[00:19:05]  easy for them to go and update you know their content um and so and and i had to build it myself because you know couldn't just use wordpress or something um of
[00:19:17]  course not so um yeah for that kind of site like the the ssr that that marco had was like i mean it made sense to um to go that route um
[00:19:33]  or what was i was um i mean probably what i should have been doing was just generating a static site from the cms um right i wasn't you know quite that
[00:19:44]  um far into things to be doing like a build it was basically you know deploy this and then you know just data changes in the database and it wasn't like a new build
[00:19:57]  or anything uh so you saw that marco was very close to html and that was appealing so you just like i i guess the the to be fair is a
[00:20:05]  lot of people on the stream might not even know what marco is exactly i'm gonna i'm gonna pull up the website for just a second so people can get a get
[00:20:12]  a get a feeling for it with marco or mark it's marcojs.com yeah marcojs.com so not the playground just all these shortcut links and
[00:20:24]  autocompletes okay yeah i'm just gonna throw this up here um because marco is a pretty cool framework in that yeah i mean it looks like html
[00:20:35]  everything is a tag essentially like the for loops that tag everything's a tag um components generally classically looked almost like web components they weren't but essentially you just everything is a
[00:20:49]  like a lowercase element um and then you would add interactivity by like adding a class to it so it's single file component format with this very xml or ht
[00:21:01] ml based syntax but what was cool about it i guess i don't know if this sold you on it is these ideas of like out-of-order streaming like you
[00:21:11]  see this honestly what these these were um nice to have um the streaming was important to me because i was looking at other things i had used dust for a project um dust at
[00:21:24]  the time was like the only other node.js template and language that supported streaming right um and i had looked at non-jucks um which had asyncs uh
[00:21:34]  support but it actually still buffered everything so i was like well if i'm going to be pulling this data from the database live like i want to be able to flush out
[00:21:44]  you know the static parts of the page um right but the the biggest thing actually was the compiler and like being able to hook in and and do stuff yeah with that yeah for
[00:21:56]  for people who don't know marco compiler basically you'd write your code and it'd look a lot like this like i'm showing here and then it would auto generate
[00:22:06]  the islands and it would basically it was like an islands framework this is why often people poke in my chat and say hashtag um marco did it first because they've had yeah
[00:22:18]  um they they've had uh these kind of features for like almost a decade now um in different forms right uh but oh you're getting credit for another marco did it
[00:22:30]  first marco did memes before htmx um but i think htmx probably does it better yeah but yeah no uh this is very interesting technology i remember
[00:22:48]  for me personally uh async fragments i'm just going to drop this in the the chat here for a second uh so people can see it this is an old ebay blog
[00:22:57]  from december 8 2014 where the mark where the marco creator explains out of order streaming and basically exposes async fragment which essentially is like it's like i guess
[00:23:12]  the await tag in some frameworks but it's kind of like shows like suspense back in like 10 years ago to be fair his if i understand correctly his inspiration for for this was
[00:23:24]  actually stuff that happened a decade before that and big time a part of it was facebook's uh big pipe which was for their php back end react ended up having that
[00:23:35]  same influence which brought streaming and and server components into modern days but marco basically had this about 10 years ago in an open source javascript framework that anyone could use but
[00:23:50]  for you i i can kind of see it was like you were looking for like a server rent like templating language primarily yeah i mean i i just wanted to be able
[00:24:00]  to like code up an html file the components were nice um and uh just have the the content editable so it was it was even things like just saying like um
[00:24:13]  like i put might put like href and then like colon editable on like as part of the attribute name and then i'd hook in with the compiler and like wrap that
[00:24:23]  whole thing at a component that would like um if you passed uh like a query param and were logged in as like a an admin of the site then it gave you this
[00:24:34]  like editing interface kind of inline on the page right um so you started working with it did you reach out to patrick for bug fixes or how did you even yeah
[00:24:46]  um so i started the compiler wasn't documented of course not is it is it documented now to a degree um so actually if you go to compiler um scroll down and right now
[00:25:04]  and now today uh it's under reference reference compiler yeah um okay fair enough this is a lot more than there was at the time yeah um and it also the marco
[00:25:18]  compiler now builds on top of babel um so kind of at the end here we just tell you like these are the extra ast nodes that you have access to in addition
[00:25:29]  to um uh like the the javascript ast nodes right and then um okay yeah no this is pretty good you actually talk then you can use like the babel playbook
[00:25:41]  yeah you talk about the five stages in the marco compiler here and and then it it it was non-existent at the time so okay um yeah this is oh
[00:25:52]  yeah asking questions um i was developing on windows at the time and there were some bugs on windows so i had to make like a couple prs to fix some things windows um
[00:26:05]  so yeah that's sort of how i got involved in the the project and at some point uh patrick was like do you have any interest working on this full time and
[00:26:18]  i was like maybe and so um yeah the the job at ebay just kind of fell in my lap got on chat with patrick um and then uh chatted with a
[00:26:33]  couple other people from ebay and eventually moved out to san jose california from virginia yeah yeah yeah yeah that was interesting i i moved down to san j
[00:26:50] ose to join the marco team during covid and then by the time covid like was lifted the team wasn't in san jose anymore gotcha anyway anyway dylan's
[00:27:13]  just quipping in there yeah no he's he's right yeah no no concrete answers but barely are concrete answers that's part of the problem okay so you you worked on mar
[00:27:27] co through i guess the marco 3 and marco 4 release time periods generally yeah um so this was i got started with marco like just after the marco 3
[00:27:42]  release right um and then uh when i joined um i started um seeing a lot of things that i wanted to change um and for some reason patrick listened and we ended
[00:28:04]  up with marco 4. hmm sorry you you still have the classic doc sites from the original version yeah i can see just how bad the compiler docs were in marco 2
[00:28:17] . yes there there they are it's like you know how how to pass the template to the compiler and like this is what it outputs okay one thing though i do like
[00:28:34]  marco actually compiler is quite extensible like a lot of the newer frameworks kind of doing this compiler stuff they try and keep it away from you marco kind of exposed
[00:28:44]  this um somewhat early days for plugins and stuff and i guess this is largely trying to it's tricky to try and do a lot of the logic around like partial hydration and stuff
[00:29:00]  like it's but if you if you rely on a compiler to do that you probably also need it it helps have access to a compiler to extend that yeah um i i
[00:29:09]  think a lot of it actually you know like the way i've seen the compiler being used um i think in a lot of ways was to just provide sugar almost um and
[00:29:27]  i mean there there are some interesting things that you can uh do with it but like even going back to like the cms that i was talking about it was kind of nice
[00:29:38]  that i could just like you know do href editable right and then like have the compiler hook in and do something with that rather than creating like a custom h1 component
[00:29:48]  that you could like you know do something with that i could just do that on a native tag and um and change the behavior nice okay um but i think as we're
[00:30:01]  we're moving more towards the tags api which i'm i'm sure we'll get into more and everything um we're we're hoping that people don't need to lean
[00:30:10]  on the the compiler apis as much language itself is sufficient to represent everything that you you need it to right right yeah so like uh just jumping a little forward in time
[00:30:22]  here moved to san jose worked on the marco project for let's see marco 3 came out in 2015 so worked on it for roughly a year and then patrick
[00:30:31] 's like see ya um yeah leave an ebay going to amazon yeah that that that seems spicy just going from one e-commerce platform to the to the other platform people don
[00:30:47] 't know patrick created marco but he also created morph dom which is actually used in a lot of projects yeah for doing dom diffing like live view i is is
[00:30:56]  one that uses morphed on i found out um so his his work from his early days and at ebay and that are still it's still out there um all over the
[00:31:07]  place but um yeah uh suddenly uh patrick left and dylan i believe who was hired on like two months before that um and yourself were basically the marco team yeah
[00:31:21]  we we actually had um a third for a little bit um austin um and uh he left shortly after patrick left um and that that was kind of an interesting um dynamic
[00:31:42]  because at the time patrick and austin were kind of remote um but not kind of they were remote um and dylan and i were um in the the san j
[00:31:54] ose office um but then when patrick left austin was like the only um remote one and i i think it is um you know again to the the whole remote work thing
[00:32:07]  but i think it is difficult being like the only remote person um on your team yeah makes sense but you you basically it's pretty distributed um now yeah yeah but i mean
[00:32:21]  we're in a different world now it's just interesting because marco 4 was like the the big i felt like that's when marco showed up on people's radars
[00:32:32]  like patrick released a bunch of articles about like marco versus react why is marco so fast this is when those benchmarks came out that like basically showed marco could
[00:32:42]  like server render like 10 no actually back then it was like 20 or 30 times faster than react like and yeah the um server-side rendering shootout if you wanted to pull
[00:32:53]  that up you don't have to is it is it still here no it's not linked from here we never linked it from the um yeah that that was more just like
[00:33:00]  a bragging article like these other articles actually have some useful information in them and it was written by it was me actually no it was you oh you okay there michael raw
[00:33:14] lings let's see if this will show up marco preact racks this is the alibaba framework react and view and it's like server rendering is slower with n
[00:33:29] pm react yeah like people in on twitter disbelief they're all like fighting each other over a bunch of stuff but it was like they're like i'm like this bit like
[00:33:44]  they're all fighting over this like like little realm and marco's like but like i mean it's it's string concatenation right and there's plenty of other
[00:33:55]  frameworks that are in this like speed range now now is there spell spell is there yeah you actually view is there now too okay are they i wasn't aware of that but yeah
[00:34:07]  i mean and it's it's pretty easy to get there and on some level it's right it's like just create html strings on the server don't do
[00:34:16]  all this extra stuff that you have to do in the browser i just sorry a little off topic i just saw this comment about kroger and about them going all in react and
[00:34:27]  e-commerce and it's this this is this if you if you if you if you want to know more about kroger specifically and this i really really strongly suggest people
[00:34:37]  check out a stream that i did a year ago with another member of the marco team let's see if i can i can pull this one up here uh to do to
[00:34:49]  uh this one yeah it's with it's with taylor um and he was working at kroger he was working at kroger and he basically i'm going to post
[00:35:04]  the link down here he uh he basically showed off rebuilding kroger with marco and he went through the process he went on the kroger website bought cell phones from kro
[00:35:20] ger's uh like store things they sold themselves uh set up a simulation of a network in india or china like places where these places like networks were actually being used with kro
[00:35:32] ger worldwide thing and absolutely showed how the marco app completely demolished every other like technology both kroger's react app which was like the worst in it walmart.com
[00:35:46]  amazon what like it it was in like amazon was respectful considering like this is you know a guy's project for six months versus like the actual site but like every other one
[00:35:56]  was just like horrendously like slow even the mobile app the the thing he built with marco like loaded much faster and it was it was incredible story i honestly watch this even
[00:36:08]  if you care about a real world use case of where these kind of loading performance metrics matter um he he he also has a bunch of articles where he goes into detail um
[00:36:19]  yeah really good articles yeah i i if anyone wonders if that kroger decision was a technical one um it's very clear that it was not that like they had he gave them
[00:36:33]  almost zero room from a techno standpoint to justify the decision of react in any sort of way um but they want react for you know other reasons and they've got react and
[00:36:46]  i guess we'll just have to see how it goes but it was like it's an it's an amazing story sorry just a tangent when i saw this talk anyway sorry uh
[00:36:58]  yeah so yeah it's not just server rendering it's not it's a save savings on serialization savings on hydration um yeah i i mean marco4 uh why is
[00:37:10]  marco so fast yeah like talks about the compilation i i remember i remember this release going out and a lot of comparisons to react at the time because next js was just coming
[00:37:22]  out you know and to be fair yeah this talks about how marco compiles to just string concatting instead of a virtual dom on the server which just blew things
[00:37:34]  open on so many ways partial hydration out of order streaming like any other framework at this time doing server rendering um like couldn't couldn't touch it like yeah it's interesting like
[00:37:48]  how we we got here uh because marco three actually only rendered to html um and so uh and morph dom was a way to diff a string of ht
[00:38:05] ml with the existing dom um and so that's how marco three works like it would just render html on the server that was really fast yeah and then uh
[00:38:17]  it would render html in the browser and then diff it with the dom and that was maybe fast enough um with marco4 we decided to go to a virtual dom
[00:38:29]  to reduce some of that overhead of creating right it it parts the html to actual dom nodes and then these two dom trees so you know we got to remove some
[00:38:41]  of that overhead of creating you know real dom nodes just to throw them away by going virtual dom right yeah okay yeah and that makes a lot of sense but on the server it
[00:38:51]  was always just a server string templating language so like it always had incredible fast server rendering it all and then with the uh marco4 really solidified the automated compiler
[00:39:04]  islands thing it just like you just write your template yeah and before marco4 um marco widgets was kind of the uh what was this like extra package that you could add
[00:39:17]  on for the client side interactivity right um and that did have the the the state full updates um in the i think it was version six it was added um and then
[00:39:30]  uh but yeah marco4 was the first time that we like actually unified that client side update with you know the the core framework um right you know under one roof yeah yeah
[00:39:47]  no any yeah and i think marco was it was pretty small too it was about 13 kilobytes i think at that time period yeah so like gzip um the
[00:39:57]  the big thing that we're not talking about here and i think this actually people are missing here is yes there's a language barrier marco because it has islands and partial hydration
[00:40:09]  it it's an mpa framework a javascript mpa framework those didn't really exist before like people now know those because there's fresh and astro but mar
[00:40:19] co in 2013 14 was like yeah we were javascript framework that does multi-page apps that was like unheard of right and i mean it it's kind of this
[00:40:32]  whole thing right like we were we had this templating language that allowed you to like add you know interactivity at different points and originally that interactivity was like 100 imperative
[00:40:46]  it was like okay you you know you you've got this hook here to like get into this widget and we'll give you the dom note and then you just you know do
[00:40:55]  everything in vanilla javascript or jquery or you know whatever you need to do to make this um thing interactive um and then we added the declarative stateful
[00:41:05]  updates on top of that so it just kind of evolved from this like base of just really zero javascript right like just shipping uh a page that just has html
[00:41:16]  being able to layer in a little bit of interactivity um and that wasn't fully automatic um until marco 4 yeah but with marco 4 it's just like you
[00:41:29]  just write a component and it's interactive on the page and it just kind of works yeah no i'm just looking at this the migration guide um and actually i mean reality
[00:41:43]  is uh there are still these widgets marco still supports that widget api so like there are part of the reason that we have links to marco 3 there marco 2
[00:42:01]  really isn't used but marco 3 is because like those apis actually do still um exist at ebay we've kept backwards compatibility um for you know like almost everything
[00:42:12]  uh that could be a hundred percent safely migrated what what i'm getting to is if people want to understand marco's positioning a little bit is dylan and mark and mich
[00:42:24] ael took over marco after patrick left and there they were basically in charge of upgrading all of ebay from marco 3 to marco 4 which is not an
[00:42:35]  easy upgrade to do i believe it took two years it went from 2017 to 2019 um ish time period so with just two people updating i mean obviously the product teams were part
[00:42:47]  of it but you know they need an expert with two people basically updating all of ebay.com and the guy who basically was the public face of marco disappear disappearing just
[00:42:56]  kind of going off no one really talked about marco for a couple years so much so that around by 2019 2020 ish i don't think it kind of faded from
[00:43:06]  people's memories and people were like what wasn't it that like pug like like so i remember someone saying like isn't it like pug like a server templating language and
[00:43:15]  that's like it's kind of crazy because like when you guys first approached me after you know reading a couple of the articles i had about reactivity and stuff uh i i
[00:43:27]  honestly was on the same boat i had no clue that this technology was existed in open source for so many years like just incredible capability that no one else had really focused on
[00:43:39]  um so yeah no it's it's it's kind of interesting because during that time spent that whole time doing that migration you guys started working on what would become marco six
[00:43:52]  people might be like what about marco five well marco five is is just a update of the compiler to babble like is there a migrating marco five upgrade
[00:44:03]  guide ensure that your stuff works with marco four upgrade your dependencies so install some stuff optional stuff like basically there was no migration from marco four to marco five it was
[00:44:21]  like it has the exact same uh runtime what did happen is we split out the so i mentioned that we still support um like the these widgets the um that got split out
[00:44:32]  that compatibility got split out into a separate package so that's what that like longer section right was about was making sure that compatibility layers installed but yeah okay well in that case um
[00:44:46]  let's jump ahead now to the future because i think most of the other content and stuff you guys did during those early uh the next stage we actually covered in our last
[00:44:56]  stream um but i want uh that's kind of gives you got you all kind of like a bit of a history of michael with with marco and marco got here
[00:45:06]  um so been working on marco six and the other big thing that i think came out is uh obviously marco run which is a meta framework yeah and then um uh
[00:45:23]  i guess typescript support so um let's talk about all three of those topics um where should we start um i mean if people are coming from our last stream maybe typescript
[00:45:34]  is actually a good place to to start okay yeah we can talk about typescript is there a good place for me to look at it in in practice um we could open up
[00:45:45]  an editor sure or can i do it in one of these playgrounds the playgrounds do not support it yet unfortunately um we uh i would like to get like a language
[00:45:59]  server running um in here but that's not something we've done yet okay do you have a demo of the typescript stuff i think we were talking about this before at some
[00:46:10]  point do you got anything or um i mean i can share my screen assuming that works and and look at some stuff if you yeah yeah let's let's let's let's
[00:46:20]  take a look at what typescript because dylan kind of gave us a a sneak peek of what was coming but it wasn't ready yet last time he was on the
[00:46:28]  stream so i would yeah if you share your screen we can take a look at it so yeah okay i'm gonna need you to blow up your font of your font a
[00:46:41]  little bit all right that at least um visible yeah so um i don't know if this is the best example it's just okay yeah so we got a mark this is the
[00:46:58]  the basic like if you run uh npm create marco this is that plus i've been messing with some stuff in here okay i mean if if marco run is
[00:47:08]  a more logical place for us for us to talk we can we can we can we can go to marco run first well i mean let's jump into the typescript
[00:47:18]  uh since you know we're i i do the base did is i'm on d story on d story what instead of on d on destroy yeah that's uh that's wrong
[00:47:33]  thank you i wonder this uh this component actually never gets destroyed um that's that's interesting but so this is yeah can we can we run this example locally it's fine
[00:47:51]  actually it doesn't really matter what it does too much right it's the one where you you hover with the mouse and then the yeah um yeah yeah around this yeah so
[00:48:07]  that's what the logic in this component does it basically has a div with a with a class on it and then it it's base it applies an inline style based on
[00:48:17]  the the state of x and y of the the mouse coordinates right yeah and then it does some css stuff right right super it's important right so what but in terms
[00:48:31]  of the the typescript support for marco like i mean getting i i already see now types in the actual uh classes which weren't there before right which is nice um is
[00:48:46]  there any typing in the template or like yeah so um so this is expecting a one string right um but i could as number this and it's gonna get upset um okay
[00:49:00]  well that's that's that's cool so you can put typescript right in the attributes um yeah so it's basically anywhere that you can put javascript you can
[00:49:10]  put uh typescript um in a market template and so that includes all the ex the the javascript expressions that are like part of your your template code okay i got a
[00:49:20]  personal grievance with the d uh the jsx dsl is it possible for marco to know a div is a div this is this has always been so it does
[00:49:33]  know a div is a div um if you're so with the class api i i don't know that that's um okay right um it probably is not i can i
[00:49:49]  can check here right i i imagine that would be hard to do you your key is how you used to do refs right you'd be like like the old kit yeah
[00:50:00]  okay yeah i i imagine making that work with typescript would be a pain yeah okay it just knows it's an element yeah okay um however with the tags api um it
[00:50:17]  actually does know the the types of the um the elements that you're you're grabbing okay okay i'll show an example of that in a minute yeah we can get to
[00:50:30]  the tags api but basically do does does this just work across the board now when i start a new marco project i'm just gonna get typescript support out of the
[00:50:40]  box is there like out of the box but as soon as you add a ts config um in your project then it switches over to typescript mode got you and there's
[00:50:50]  no so there's no special file extensions or anything it just like no special file extensions yeah um i mean obviously there are some differences between javascript and typescript um but
[00:51:02]  for the most part they're they're similar enough that you know it just kind of works i want that in my life a div is a div yeah um yeah it's
[00:51:17]  also um a way that you can uh define in your marco json um to use um there is a comment a moment ago sorry and it was funny about the on destroy
[00:51:34]  isn't types supposed to catch that but um in the class component but i i wonder if it could because you're defining a classic legally yeah they're just like this custom
[00:51:47]  thing so you know i cannot make my own foo method too so like it just thought that was a custom method yeah i mean that's a little bit unfortunate um and and
[00:51:59]  that's another thing that like so we have a life cycle tag in the the tags api that would have yelled at me if i had misspelled destroy on on that one
[00:52:09]  so yeah i mean i guess that's an interesting benefit of these hook or primitive based apis is that like they have a defined interface whereas like uh like technically class has
[00:52:19]  a defined interface that it could extend for marco's cases but you you can add as much to it as you want so it's not yeah right right right unless you start
[00:52:32]  getting into like like like that where you're like forcing methods to appear um angular people but um yeah so i mean so typescript is there you know everything that you would
[00:52:49]  um expect to work um can you can you narrow the type of your children this is another thing you can't do in jsx that's an interesting oh um i mean
[00:52:58]  so like the if actually will um maybe okay let me say this is string or number let's say so for now x is string or number um oh no way you guys
[00:53:23]  you guys you guys you guys did that oh so it knows number here so we we do have some like type narrowing that you don't always get in a a lot
[00:53:41]  of places uh with other frameworks yeah i mean jsx like generically can't know that a control flow is a control flow but the if component here is special right yeah and
[00:53:55]  it is specific to if um in this case um they're so right now the the way the the typescript compilation works is we compile to a typescript file and um
[00:54:10]  we run that file through typescript and then map back any errors um to the the current template and these templates are compiled independently of each other um but the marco compiler is
[00:54:26]  capable of um what we call child template analysis which is not a really a technical term that's just what we've been calling it but it can kind of see into um
[00:54:38]  its children so if you have like child here um we we make it pretty easy i mean they can't find this because this doesn't exist but we make it pretty easy
[00:54:52]  in the compiler to just be like okay now give me the ast of that child and um any meta information that was uh gathered from that which includes like the the input data that
[00:55:09] 's passed to it um and kind of where that flows and maybe comes back out um so we could potentially have tight narrowing for custom tags in the future if we decide
[00:55:22]  to do that um i don't know because yeah i don't know if that's going to fall on the timeline anytime soon uh but that is a possibility that's that is
[00:55:33]  interesting yeah because like obviously one of the biggest challenges with that if being special as you highlighted is you know composition my if suddenly doesn't do that you know right but you
[00:55:46] 're saying that marco's compiler has the potential to be able to do that yeah um yeah i mean it would be some some work to to kind of follow those chains through
[00:55:59]  through everything but i i mean it would kind of be a recursive thing because you might need to walk into multiple children you know to figure out like yeah is this actually
[00:56:08]  rendered that this that seems expensive because i i mean i don't even know that typescript does that um we so most of the cross template stuff that we're doing uh is
[00:56:20]  actually based on um metadata that we collect from the the templates and that gets cached um for for every template so it's we're going to need to compile this child
[00:56:38]  anyways right um and so if you're not actually making changes in the child then you know that's not going to get invalidated so you know as you're typing here we
[00:56:47] 're not like re-walking the child okay every time if that data is exposed to the metadata yeah um so that that we pretty much try to put everything that um will
[00:56:59]  be needed by like a parent component in that metadata so that it can be cached and and reused yeah yeah yeah no and that has other benefits with the new hydration
[00:57:12]  uh or not hydration approach that marco does i'm just pretty happy here and i think most people are pretty happy here to see that you can use typescript in your code
[00:57:21]  in your templates but you can also use it like right in all the expressions right in it actually type narrows in the template around conditional logic like that's that's pretty
[00:57:31]  powerful stuff that i'm not sure i haven't played with other sfc files but i don't know like i mean i don't i've never tried it i don't
[00:57:38]  know if you can do that in spelt or view so yeah the other thing that's kind of interesting is the generics um so we the the way you define your
[00:57:50]  input is um it's like this and so you know if i had input for people uninitiated marco is props yes input is props um so if i had a string
[00:58:03]  here then um and this is going to be a string but i can also you know use generics and i could make this t but then i could also say um that
[00:58:19]  this type here is t and and that's actually valid that this the generics on input are special and kind of permeate the whole um template so now when i come here
[00:58:32]  and look at x i see that's of type t um and and this is kind of interesting because um with jsx obviously you have a function so you have like a
[00:58:47]  very natural place to uh put those generics um but and i'm curious what svelte 5 is going to do now that they've um moved stuff i mean they
[00:59:06]  could keep what they they have i think they've got like a dollar dollar generics or something like that um they have a doc on their type script can you blow it
[00:59:20]  up one just font size so i can see what you're looking at yeah thanks okay so it may have never made it in it may have just been in this rfc
[00:59:38]  um yeah it looks like they were maybe looking at doing something or like you know your generics right like we were just like okay we're just gonna you know take the
[00:59:54]  syntax and make that available everywhere um and i think that works pretty well um you know different than uh technically the way typescript works but it feels pretty natural yeah last time
[01:00:10]  uh dylan was on and he was showing us all the fun challenges of actually building a coding language he showed us a little snippet of what the the code generated um from
[01:00:21]  a ts standpoint which is like kind of crazy right yeah i i can pull that up here so we've got this and you can see that you know this t ends up
[01:00:30]  here it ends up here like the whole type ends up like in multiple um place you know the t comes in here so like it there's a lot of like duplicated
[01:00:42]  output and then in order to um support like all the because the the marco template has an api right it's got these like render methods and stuff and so all
[01:00:52]  of those also take the generic um and we actually have to like write out kind of the the type for the the marco template in line um we were definitely running up against
[01:01:08]  like the the limitations of typescript um making all this work um are you familiar with like the term higher order types um because i was not prior to to us going down
[01:01:20]  this no what are what are higher order types so you're familiar with higher order components right yeah and higher order functions yeah so they're they're types that create new types um
[01:01:33]  and uh typescript has very very limited support for um what you can actually do uh related to higher order types it's not something that you typically need um but we would
[01:01:48]  be able to write it generate a lot less code if typescript did support um that but dylan did uh what's what's this mean what does what mean doing extends d
[01:02:03] ylan's uh he he dylan just wrote yeah he wants me to do an extends but yeah like that extends has to end up everywhere um i don't know if d
[01:02:33] ylan there was something you wanted me to to to point out specifically with that higher order types generally come in on iterators containers futures yeah this is this is beyond my types
[01:02:51] cript knowledge um yeah dylan's kind of the this was his uh kind of project and it um it was like every other day he was like typescript can't do
[01:03:07]  this so i'm gonna have to do something super weird and and if you look in here like there's some weird stuff going on we've got this like render native tag and
[01:03:16]  it's receiving like it generates a function and you call that function and call another function and then you pass this and um this is like well i'm not gonna do this
[01:03:33]  right now but um because that doesn't really make sense but you in in order to get like these generics like being passed around and inferred you know we kind kind
[01:03:46]  of had to do this like almost careen thing um and you may run into this in typescript when you're trying to to type something um there's times where like um
[01:03:58]  partial application of um of generics isn't possible like if you define one you have to define them all um right there's there's cases where like we needed to add
[01:04:12]  a generic in um and so like there's this currying that's going on so the generic that we add can go in like one function call and then the generics that
[01:04:21]  you add go in another function call so that you'll get partial application if you don't define um the generics and it's like or not partial application but um partial
[01:04:34]  inference is what i meant to say and you'll get the the inference since we're not uh defining some of those so yeah it's yeah i'm i'm not gonna pretend
[01:04:42]  i know what that looks like i i just remember that dylan wrote some like didn't he wrote a component with no classes or anything but just a bunch of like looking
[01:04:51]  like html code and when he got out the other side resembled nothing like like html code it was it's kind of yeah there's there's a lot
[01:04:59]  going on here uh he did a good job um with this kind of covering all these um no like the initial um version that he had like the the code was nice and pretty
[01:05:14]  and it worked for like 90 of cases but to kind of cover all of these you know being able to define generics being able to do um you know the the type
[01:05:26]  narrowing and everything you know we just kept going deeper down the rabbit hole to actually get it to behave the way that we wanted it to yeah and the the reason like on
[01:05:36]  this side is this is like a completely different territory it's very cool that this kind of stuff exists like us using jsx and stuff have it really easy because even though
[01:05:46]  i complain about jsx typescript support it's like just inbuilt and all you have to do is like type a couple things be like oh type of this element etc these
[01:05:57]  are the attributes you know you just set a bunch of stuff like that and then typescript takes care of the rest when you have an sfc format like marco like
[01:06:06]  view like svelte for a while i didn't think this was possible but then i guess view was one of the first ones that did it with like volair or
[01:06:14]  future yeah and essentially the this approach where typescript kind of handles jsx for us this approach involves basically generating a completely different output of of typed information to like fit the types
[01:06:32]  which is kind of it's kind of it's crazy yeah it's like that typescript that i was showing you like will not run it's purely for for type analysis
[01:06:41]  we we pass that to tsc to to get errors and then map those back to your template okay yeah so i i'm sure people care more about being able to use it
[01:06:54]  than necessarily how it works but i i think i think it is cool that what what you've managed to accomplish here yeah so yeah i mean we're gonna see probably types
[01:07:05] cript through the rest of what we look at today so i don't know if there's any other okay points we want to fix in on right now on the typescript stuff
[01:07:13]  before we see the other one but what's cool is everyone who uses marco 5 today now has potential for typescript support right did you guys backport it to mar
[01:07:22] co 4 um it yes so the the language server um marco4 and marco5 are similar enough that the language server will like understand the marco4 um files nice
[01:07:42]  it does work yes okay it's not like specifically backported to to marco4 um yeah but yeah i mean that's cool that's i mean basically because that
[01:07:56] 's the thing this has nothing to do with the actual output of the actual code you just have a language server basically building in the background to generate these types for you so like
[01:08:07]  auto completion and stuff works and all of that auto completion works yeah so if i like delete this well that's copilot right that that is like a true right auto completion
[01:08:21]  yeah yeah so auto completion i i should be able to to rename this to to be and that goes and renames it here yeah um so like everything that you would expect to
[01:08:35]  work from from typescript works um all the the refactor ability and um yeah oh that's that no that's great yeah so like yeah write in your templates yeah i
[01:08:48]  mean this is huge people have been asking for this for a very very long time um especially inside ebay this was like one of the main thing you know we're talking earlier
[01:08:59]  about um you know the react versus marco thing they'd be like yeah but react supports typescript like that i got to point that that was like literally the only technical argument
[01:09:09]  that they could make um but yeah so yeah i think in in some ways i the the typescript support in marco is maybe superior to the typescript support in js
[01:09:26] x yeah i mean that's what i was suggesting at because of just like you you have to go longer but once you're there you might as well go all the way
[01:09:36]  like jsx assumes react or like tsx assumes react a lot almost to its detriment and it's yeah there's things like even for react it's not 100 perfect and it
[01:09:48]  is you know like right yeah so yeah i mean i yeah i i think we've already seen a couple of examples of of that from um from you know the stuff you
[01:10:04]  were doing with the type narrowing but i'm i'm interested to see more as as we get going um yeah no typescript to marco awesome uh let's let's
[01:10:13]  maybe it's time to take a look at uh what do we what do we want to look at first marco run yeah yeah so for this one i think i'm
[01:10:23]  just gonna jump jump in here because i i i usually do this i'm not gonna make a hacker news demo right now but let's just see what the what it looks like
[01:10:33]  to make a new marco run project can you guide me through that sure um so are you gonna drive you're gonna share your screen yeah i'm gonna share my screen in
[01:10:41]  two seconds i'm just getting my window open and ready yeah so first of all what is what is yeah marco movies when yeah i i i uh the movies demo they
[01:10:51] 're talking about you familiar with that one yeah um um i i've wanted to to make one did you see the um the enhance uh well that wasn't movies um but the
[01:11:05]  the the enhance music player no but i didn't i do think enhance maybe there is a movies demo for enhance i haven't yeah it's okay it's an mpa
[01:11:18]  okay actually i haven't looked at this one yet new incognito window i just want to very quickly see what we're dealing with here because yeah we definitely should make this
[01:11:32]  yeah the movies app is a lot of fun this is an mpa so it's not like um it's not like apples to oranges kind of thing but yeah main page
[01:11:41]  let's discover all yeah yeah it's pretty nice so it's it's about a and let's go into a movie details page yeah that's the thing with the movies app
[01:11:52]  i'm surprised the astro version is as large as it is um it is about a five kilobyte 4.7 kilobyte yeah it's about a five
[01:12:00]  i wouldn't be it's like hacker news i'd expect it to be about 4.7 kilobytes the javascript for some reason the uh the sorry taste the
[01:12:10]  the astro demo it wasn't built by the astro team is like 15 kilobytes i don't know why let's yeah i don't know what that redirect is
[01:12:22]  but basically yeah 16 kilobytes i sort of don't know i i have to imagine that this site could be a smaller because the solid version of the movies app which
[01:12:35]  has client-side routing you know like actual like no page reload is only 13 kilobytes so you know and this is this has full client-side navigation so yeah i
[01:12:49]  don't know um but anyway sorry we got we got thing yeah it's time for the marco movies app because the marco hacker news app marco 6 hacker news
[01:13:02]  app has my um my record right it's a 1.6 mega or it's 1.6 kilobytes g zipped for the yeah yeah so 1.6
[01:13:12]  kilobytes g-zipped for the comments page which is insane right my my solid astro is 4.7 kilobytes on the on the uh comments page and
[01:13:26]  um yeah i mean solid islands uh like with client-side routing is about 8 kilobytes on that page and i mean to be fair the the marker one doesn't
[01:13:38]  have client-side routing but like nothing is even close the quick version is like uh zero kilobytes until you do something in which case it's like 18 kilobytes
[01:13:48]  it's like one kilobyte until you do something yeah okay fine it's it's you don't see that on your network um yes it's inlined into the
[01:13:58]  exactly yeah i'm not counting inline stuff because astro inlines and so does solid in those cases and a bunch of us do inlining so yeah um but yeah it
[01:14:07] 's basically no no external javascript until you load in then it's about 18 uh solid start version that i think is 16 svelte kit is 19 but yeah
[01:14:19]  marco's 1.6 so i i'm i'm looking forward to that demo the marco 6 um version of the movies app anyways sorry little sidebar but i don
[01:14:28] 't know anyways let's let's get back to let's get back to business here um uh let's i'm gonna go into my examples folder here and we're gonna
[01:14:42]  get started by how do i get started here is does marco run have its own like sub section docs how do i find um you can go to marco dot run really
[01:14:53]  cool marco dot run it's it's not really set up but there's a logo here and you can click on that and it takes you to get help read me okay
[01:15:03]  okay we'll put something there eventually all right all right ryan saw the other day that it was available and bought it nice nice yeah ryan's a big part of
[01:15:14]  the marco run thing um yeah it's been his friend is is kind of the the main person behind um marco run um so he's been doing a great job with
[01:15:25]  this yeah we we stole him from solid where he worked on the the solid router yeah um and now he's essentially working on marco's router yeah yeah it makes a lot
[01:15:36]  of sense sense uh but yeah okay so then so npm install marco run and yeah so so we can do we can do one of two things we can um we
[01:15:49]  can start from the like because you can run npm marco create and or npm init marco or okay npm init marco and uh that'll like give you
[01:16:02]  a starter project or we can like start from scratch which isn't going to take that much time if we want to just do that i i i'm i figure most people
[01:16:12]  are going to do a starter project just because that's what they do okay i i think um sorry is this project in beta i wasn't sure i saw the release but it
[01:16:22]  was the beta release then it's the beta release um we are deploying some of the first apps to production using it inside of ebay um so it will be out of beta
[01:16:35]  uh soon okay okay so i guess my first question we you mentioned a couple ways to get started with it that's fine so you can like just do this and build it
[01:16:48]  up but i guess my question is marco's already a server-side rendering framework why marco run like what does it add to the yeah um so i mean that's
[01:17:00]  that's true uh marco uh yeah it's already a server rendering framework um it's pretty easy to just like drop it inside of express or fastify or something like
[01:17:15]  that um but you do need um a bundler to get the client side javascript working so that is something that you need to um to set up and um i
[01:17:27]  don't know maybe something i've wanted to do for a while um and uh maybe i'll shoehorn this into marco run if the rest of the team will let
[01:17:40]  me um is uh just make it so we we've got a node require hook um which um allows you to just require a marco file um and you get javas
[01:17:56] cript it compiles it in the background um i would like to have that so that also just bundles the client-side javascript associated with that template and like
[01:18:09]  injects it when you render it um which is essentially what like marco run is doing but inside this this meta framework so that would allow you to more easily just like drop
[01:18:20]  marco into an existing project um i mean like beat would be running in the background um so you know there's there's a lot happening with that require if we do
[01:18:33]  that but that's something i wanted to do but but anyways like there is some setup that you need to to do to to drop marco into an existing project um primarily around
[01:18:42]  the bundler and marco runs built on beat like all the marker one is built on beat yeah yeah like all the best meta frameworks um so we we also had a tool
[01:18:52]  um called marco serve that i worked on a few years ago um that just allowed you to like serve up a marco file we're running our website on it currently
[01:19:07]  um and it worked pretty well it was built on webpack um so there was like you know some build you know slowness um there but i mean it worked pretty
[01:19:23]  well but it didn't um it was very basic in what it allowed you to do uh and so it wasn't something that we could adopt inside of ebay because we've
[01:19:37]  got a bunch of other requirements um and so it wasn't something that was getting a ton of love um you know from our team because it was like well you know it
[01:19:46]  works and good enough and you know it's not something that um like ebay is depending on um so we wanted to change that go ahead yeah yeah i just very quickly i
[01:20:00]  this is my i stream from my netlify computer so i don't actually have marco on here i have it i so i was trying to remember which yeah it
[01:20:08] 's uh it's the one you just had highlighted the the one with the check mark okay yeah yeah there we go sorry i didn't mean to interrupt um but yeah so
[01:20:29]  one of the things about marco run that we wanted to be sure was that it could actually be used internally at ebay um and so we're we're currently working on
[01:20:41]  making marco run the default for all new projects um at ebay and i think we're we're pretty close um to that and we've already got a few teams
[01:20:52]  that are um picking it up and like migrating their their apps to to marco run internally um as well so this is something that we will have like incentive from from e
[01:21:06] bay to continue maintaining and improving but is you know a really easy way to get started with marco that's available to the open source community um right so that's what
[01:21:17]  we wanted um and that's that's why marco run exists that's good i remember those starter ebay templates and all the work that went into them so does that mean
[01:21:27]  ebay is on beat now or making the move to beat we are in the process of moving to to beat yes very cool because i remember who was it lasso uh
[01:21:39]  the original bundler which was really dynamic and really cool and then the move to webpack had to give up a bunch of stuff to meet the ecosystem but then there was like
[01:21:50]  a bunch of features that didn't work properly anymore um yeah in in a lot of ways veet um kind of gets us back to a lot of the things that lasso
[01:22:02]  um did well for us because lasso had like unbundled development um and again another hashtag marco did a first no i mean it wasn't necessarily the first to
[01:22:13]  do it but but uh but lasso was a bundler that that was built um and open sourced from ebay and the marco team again and it did on demand
[01:22:24]  uh like bundling so instead of like bundling all ahead of time in like your dev environment like or and in production actually as you requested for um certain assets it would
[01:22:36]  bundle them in real time yeah um and that that opened up some interesting patterns that i'm not sure were necessarily good um but like you could have like i mean there's there
[01:22:49] 's pages at ebay that have trillions of permutations of like the bundles that can um uh be served and so users are getting a bundle that is like
[01:23:01]  individual um to them based on um even things like coming back from services like what um what's going to be rendered on the page um and and that kind of stuff and
[01:23:15]  like yeah you could use um dynamic uh imports for some of that stuff and probably maybe should um but you get it all as like one big um bundle like exactly tuned to to
[01:23:28]  what's you know going to be rendered on the page which is interesting um right as builds have gotten more more complicated babble's been introduced into the um the the pipeline
[01:23:42]  um you know we're still seeing those builds you know take more than the the couple of milliseconds that they were early on um and so you know we we've then had to
[01:23:54]  take steps to like mitigate that build time like you know um pre-warm-up you know all these common bundles that are are being built um but there's still
[01:24:05]  things that with you know all these potential permutations that are you know hitting things that aren't cached yeah i mean caching time has been our recommendation you know for
[01:24:15]  the past few years um which really means if you take that away um beats like very much a um a successor to to lasso aside from that and we've been recommending
[01:24:28]  not to do that for a while anyways so gotcha yeah because caching was still such a big part of that that solution in the past because like you you couldn't bundle
[01:24:38]  every um everything all the time on demand um i guess there's a question here was the bundles coming from a cdn or from origin for yeah so we've got
[01:24:48]  an interesting uh setup so we use akamai for our cdn um and then that is backed by a service that we call the resource server um but then basically
[01:25:02]  um lasso had a build plug-in that would go and upload um like those on-demand bundles to the resource server if they weren't there so it actually
[01:25:17]  still would be served through the cdn and then cached um at that point but the um the origin would be generating them on demand and then feeding them into the
[01:25:25]  cdn okay very cool um okay so now that's vete at ebay which is pretty cool um marco run is built on beat um i'm just looking at
[01:25:38]  this project and i mean the very first thing i noticed is that like you get you did you guys set out to bug react developers with this design and the first thing i
[01:25:49]  noticed is plus layout dot marco which means that this is like svelte kit this is like svelte kit conventions no yeah i i was i was definitely torn on
[01:25:59]  this um to begin with um and i i'm guessing you've read through uh rich harris's like reasoning for for doing this yeah um and it it makes a lot
[01:26:13]  of sense um so marco serve the the original version that i wrote just like would serve every marco file that it came across in the like directory that you would serve so
[01:26:28]  like your routes directory like every marco file in there would become a page um and then so it was like well okay so now we need a way to say like we
[01:26:38] 're not gonna make every marco file you know a um uh a page and so it was like all this like extra config that would be necessary to ensure that you weren't
[01:26:51]  serving things that you didn't want to serve and also that the the bundling wasn't like unnecessary unnecessarily breaking things up into um chunks because it thought you know this thing
[01:27:04]  was shared between you know this these two pages but one of them isn't even a page um so so the the plus convention i i think it makes it really easy to
[01:27:18]  to look at your your file tree and like know what's going on and it makes it really easy for the the tool to you know know what you intend to actually be a
[01:27:29]  page because you're putting you know plus page in the file name yeah i'm just looking at the the list of apis here and one thing that stands out to me
[01:27:39]  again i'm just looking okay so handler for apis middleware for middleware um run for all hd mechas that's cool i i haven't i haven't explored
[01:27:49]  into this space yet about nesting middleware um yeah it's interesting it opens up some interesting possibilities so middleware can be handled um on like in a per route kind
[01:28:00]  of man yeah so you could throw like a middleware in your admin directory let's say um that you know requires authentication for every route under um like the admin path or
[01:28:13]  something like that where handler are just api routes okay that's interesting um the handler route actually gets or gets past the um the template if there's a dot page dot mar
[01:28:28] co or plus page dot marco um next to it so you can do some like stuff in javascript land if you want um and then potentially you know return uh
[01:28:42]  html or you know do something else um right people are using it to like depending on the headers return json or a rendered page um something like that okay and
[01:28:59]  then obviously layout around see this was the thing that i actually noticed right away was that there's layout components and page components but the which helps i guess organize the code but there
[01:29:09] 's no nested router here right you're not doing like partial page swaps or anything like that this is just like no um we we do have a vision for for
[01:29:18]  doing something like that in the future so we wanted to lay the foundation for that plus we think it's a good way to to organize um things even if you're not getting
[01:29:28]  that right now yeah yeah we aren't doing partial page swapping currently um this is fully npa cool but yeah so this is the convention on the files yeah that was the
[01:29:41]  that was the first thing i know special files 404 500 so kind of error catching handlers and then oh cool you guys even have diagrams about the the process of how
[01:29:57]  middleware runs this is this is a very cool approach i mean i haven't looked at newer page directory or app directory stuff in next but the the idea of using um
[01:30:12]  like chaining the middleware also based on section in depth not just like top to bottom right it gives a lot of control handler handler so yeah so it goes middleware middle
[01:30:25] ware handler layout layout page okay and then i i kind of skipped over it but the plus meta up there is kind of interesting um too and this was something that we were
[01:30:44]  kind of forced to add because of um ebay but the when you um so like this you can define this metadata um in this file and it can be a js file it
[01:31:00]  can be a json file whatever um and then you can have like middleware that reads this this metadata so you know i mentioned the um the idea of like having like
[01:31:13]  an admin route and then under there you've got this off middleware but maybe there's some page underneath the admin route nested at some arbitrary depth that like you actually
[01:31:24]  don't need authentication for um you can put something in that metadata or that meta file and then um read that in the middleware and be like okay but this this um you
[01:31:36]  know thing that i'm accessing right now actually we can skip the the authentication for or something like that um that makes sense so um we use that internally at ebay and
[01:31:49]  actually gets read by the adapter and like that information gets compiled you know somewhere else but um for for like tooling to pick up on internal tooling but it's kind of a neat
[01:32:04]  little thing too sorry i'm just reading i just kept on yeah flat route yeah flat route you guys have flat routes as well yes um so you can you can find your
[01:32:18]  project all at you know one level if you you want to and i think where this makes the most sense is when you have um kind of like forking uh routes where
[01:32:37]  like maybe you've got you know things that live at two different um locations uh but are essentially uh same thing yeah or i mean sharing components helps with that kind of thing but
[01:32:56]  you know there you may actually want to just like have the same page serving two different routes um and the the well the the grouping plus the flat routes kind of allows you
[01:33:08]  to to do that for basically anything you can think of i mean it can get it can get pretty crazy um obviously you should keep this readable but you know like members people
[01:33:20]  um very very cool you get you've yeah definitely taking the expressiveness of of of of the routing convention i haven't i haven't dug too far how far people yeah this
[01:33:34]  is something we thought through a lot and like how to make it not that everything necessarily should be like we would recommend like doing all this crazy stuff but we didn't want
[01:33:45]  the the like file-based routing to limit what kind of route you could represent or what kind of like we didn't want you to ever feel like man i wish i just
[01:33:55]  had a you know a config file where i could put this because i i can't represent that this route the way that i want to yeah no this is so it is
[01:34:04]  very expressive yeah i can see that yeah no this and you get very interesting combinations of things yeah i i mean there's so many other features i could ask about because like
[01:34:18]  like because this lets you actually explicitly say this is not just dynamic it actually ties to these specific values so it's almost like a type of a route uh narrowing filtering yeah
[01:34:28]  no this is this is very very cool stuff um all right let's get back here so um no let's start where um this one um so yeah layout marco is
[01:34:46]  our entry point into our app we have styles we have all the the stuff you would expect and then input render body which is just normal marco yeah for people that don't
[01:34:58]  know this is props children um it's slightly different but it's basically props children yeah so then that's what ends up going in and then i'm gathering we have our
[01:35:11]  page here which gets inserted and underscore index what does that mean does that mean it's uh anything prefixed with an underscore does not contribute to the path got you okay um so
[01:35:24]  we we did not make index special um so if you put index there you would actually have to put index in the path so right or made set kind of invisible to the
[01:35:35]  path got it then you wrote your page and move your mouth map mouse mask and as you notice marco auto detects components so mouse mask isn't imported anywhere we it's
[01:35:47]  just coming from over here um which is the component we were looking at earlier with this d story um yeah we need to fix that um and default i mean was there a setting
[01:36:00]  where i could have got type script by type script by default like if i put it uh yes yeah so the default is no type script um if you wanted to if you
[01:36:08]  want to get type script um you do need to choose uh that we should maybe prompt that in the um in the cli so probably is an option that people would like that
[01:36:23]  may not know exist yeah but okay but very very very cool to see this uh okay so basically it's mostly the file system routing because the other thing i was looking at
[01:36:37]  and i i think this came out as a question on chat um it was like um does does mark does run have built-in serialization for query or body and the thing
[01:36:47]  you're not going to find in marco run i guess is like all these data apis that people are playing you're hot right now like loaders and whatnot in the
[01:36:56]  same sort of way because marco is an mpa framework so you if you want to use a form use a form kind of situation right like there's no like special
[01:37:07]  form component or like it just works because it's a form right so if i if i if i if i wanted to do data fetching or data loading in in um mar
[01:37:21] co run um the expectation is that i would create a handler um at a certain you can you can create a handler um yes um you can also so marco only supports
[01:37:35]  um like the the await tag uh server side currently um but the the recommendation would be yes either do it in the handler um or you can just do a fetch call in
[01:37:52]  a template right but you should if you do it in the handler you do not wait for the promise to resolve before rendering you pass that promise into the template and then wait for
[01:38:04]  it uh template where appropriate right exactly because the this is the whole thing marco can do out of order streaming so you don't want it's non-blocking you
[01:38:14]  don't want the promise to complete you want to give the template that renders the promise so i guess you can post to how does that i'm trying to think of
[01:38:25]  the flow because usually you post to an endpoint and that endpoint redirects to um another endpoint um so i i guess most of the time what you're going to end up doing
[01:38:36]  here is you're going to post say to a handler that's like add my to-do item or add my product and then it's going to redirect back to the specific
[01:38:46]  page where you draw the list of products or render the list of products and then when it adds it's doing the rendering because it's all server side you know as a
[01:38:55]  base thing you'll just literally top of your component you know fetch user whatever get the promise pass that promise through your your marco template and then wherever you use the await tag
[01:39:11]  um it will then uh that will be the the fixing point where it will kind of stream flush the stuff outside of it then when the data finishes it'll render the stuff
[01:39:23]  inside flush that in um yeah i mean people who use react have seen this recently that's the pattern that uh the remix uh guys have gone to where they have not it's
[01:39:35]  not just like they have suspense but they actually have an await tag as as the point of actually you know doing it and actually quick um resources have a resource tag and they
[01:39:45]  work the same similar way as well um and it's worth noting that like you can render the page from your post handler as well so you don't necessarily need that redirect
[01:39:56]  depending on whether that you know the url that you posted to you know it can you can share that url as like the the git url for you know what it
[01:40:07]  was make yeah it makes sense yeah i mean it's flexible that way but generally what i'm getting at is there's no like action api because you're literally just
[01:40:16]  using no um yeah no bling through some of that um kind of stuff no bling um but some of that stuff may come in the future um but but right now we
[01:40:32] 're we're focused on doing mpa well we may bleed out into um the the spa world a little bit at some point uh as we've seen astro do a
[01:40:46]  little bit about that um right but the plus is good yeah yeah no no i kind of hated it at first i'll be honest my my gut reaction was i do not like
[01:40:55]  this plus yeah i mean i still don't like this plus i think the thing i think the most compelling thing is for me is i there's one thing i hate more than
[01:41:04]  the plus and that's layout i i am the most anti-layout person so because i was anti-layout i never have like the the use case for multi
[01:41:14] -files never was the primary use case because there's no actual case like case for that middleware is an interesting one for me so i i'm just i i'm
[01:41:24]  i i think that's the first case where you know i'd be tempted to have multiple files which makes stuff like the plus um more compelling but it's largely just because i
[01:41:37] 'm not a big fan of layout yeah um yeah we've got handler i mean you saw we've got several um files and i think it's kind of nice that they
[01:41:48] 're um denoted yeah i'm i'm i'm interested to see what understand why next uh moved away from that that i remember them having some sort of middleware api
[01:41:59]  but i yeah i'm that's gonna that'd be interesting though the reasoning behind that like the middleware files like that um i don't know know the answer to that
[01:42:11]  are no classes normal js classes but anonymous oh you mean of the syntax in marco5 um yes right like there's just no need to name it because yeah it just is
[01:42:26]  but yes um and yeah technically that's not um valid uh like as a class statement if you don't name it um but yeah inside the the the marco template a
[01:42:41]  class with with no name just is the the class for the template all right so let's go back here okay so i think i got i got the flow of this so far
[01:42:54]  so then and you got meta json page title welcome to marco i sees and so this actually shows that for this page does it actually come in here the welcome to
[01:43:04]  marco um the the layout i believe is using that interesting so you could have the meta here but it's it actually ends up making it into yeah so we've got this
[01:43:17]  global dot meta page title okay interesting so the meta is the resolved it's exposed globally but it's resolved along the path that yes the route matches yeah and it's available
[01:43:38]  to the layouts it's available to the middleware so it's a way for the the pages to communicate some information you know kind of back up the tree almost um and
[01:43:52]  like i said one of the one of the big reasons that that it exists is because this is a pattern that's um used by some of the middleware at ebay we
[01:44:04]  kind of needed to to fit into that to not have to like where you write a bunch of the ebay stack as well i know and i think this works well one
[01:44:13]  one thing i was looking at was having not like different files but having meta as part of like a config object on route matches but i never thought about how to actually access it
[01:44:23]  i assumed um yeah i didn't yeah having as a global is kind of cool um okay yeah so i'm following along this example now and yeah i mean i think this
[01:44:39]  makes a lot of sense it's pretty easy just to build up pages and ui with this and to run it i'm assuming there is a bunch of commands here like uh
[01:44:49]  what do we got here build dev and preview right so marco run has support for different adapters right i'm gathering preview is yeah node when there's nothing else there
[01:45:02]  but let's yeah node is the default adapter let's run marco uh mpx marco run fine and very nice asking just props on that oh that's very
[01:45:24]  cool um then this is the same learn marco graphics been used forever and then if i go marco so it's because i run mpx i i look for the
[01:45:39]  scripts when i literally could just be like mpm run preview mpm you know what i mean like i guess i should build before i preview shouldn't i uh preview will do
[01:45:50]  the build for you interesting okay so now i have the actual production build here so we can actually see what it builds i just wanna how's marco doing these days
[01:46:16]  yeah so single bundle for the first page interesting interesting that i would have expected two bundles one for the so you guys are doing one for like the the core and one for
[01:46:27]  the page well um you're currently in an app with only one page page so it doesn't split it up but normally yes yeah that makes sense yeah so marco's
[01:46:41]  still about 13 14 kilobytes these days probably a little bit bigger actually now i think about it because this page has no javascript on it's practically well yeah i
[01:46:51]  mean it's got a little bit but not much yeah so like partial hydration at work we've already mark demoed marco's ability to do islands and projected serialization and
[01:47:02]  recursive islands so i don't mean to do anything special today but it's cool to see that this it's never been really easier to get started with marco i
[01:47:08]  know marco serve had a lot of this stuff but this this feels like much more polished um yeah the you know pieces are all just right there very easy to get started
[01:47:20]  um and then uh it's it's still early days this was just added this week but you see that explore your routes um like that's something ryan just recently added um
[01:47:33]  it's not uh yeah i'm just gonna run it so it's live again okay i think you need to currently it requires hitting the like server first and then you can
[01:47:48]  um pull that up yeah yeah no i i actually opened the link the problem was all right this is not an incognito window um it was just in another screen yeah yeah
[01:47:58]  and then it shows you path get page entry one layout meta yes this will give you an overview of all the routes um and everything in your app and you can see um
[01:48:10]  those generated files right the virtual files generated for yeah index and js and the marco one of the interesting things with this too is that we are compiling the routes into um
[01:48:24]  like this javascript tree of ifs and switch statements um and so if you want to look at that uh the the marco run router there at the bottom um
[01:48:40]  should have that code this isn't syntax highlighted or or anything um but that first function that match function yeah um oh okay i i almost have to do i have to so
[01:48:59]  does this this is this is marco uh router's code but yeah i'm someone you mentioned you guys had a compiled router does it compile into a file does like yeah so
[01:49:10]  this is this this is the router this function this match is the router okay um so if we would add more routes you'd kind of see that um be a little bit
[01:49:21]  more right so if i want to add um right we added index here so that it would have a shared layout right i'm trying to or actually no we we didn't
[01:49:34]  need to this is just a show no yeah so i could do i could make a new folder like about and then i could go new file page dot plus marco and then
[01:49:48]  i could whatever i could just make it like whatever you don't even need to put anything in there if you were just looking at the routes yeah but presumably am i looking
[01:50:06]  at the right might need to hit the actual um like the the localhost 3000 oh right okay because it acts um let's actually see that our page exists does so let's
[01:50:27]  go back to the route explorer and see okay and then i think it's because in dev mode it's lazily building so this doesn't um like immediately update it's
[01:50:41]  like building on the requests of the page but i want to i want to if i understand i want to understand what this is doing because okay so we index and about get
[01:51:00]  pulled in get one get two and then how are these used so so here we're not even doing any string matching we're just like are there are there two parts to the
[01:51:14]  page okay that's about if there's just the you know if it's just slash okay that's the the index page i see yeah so so basically this function gets built
[01:51:34]  up on a very like simple like it just expands out it's like does this like you said doing a regex it's literally like like it i mean i mean we
[01:51:46]  can keep on doing this we can add another page that looks just like this one um copy paste rename about two about q sure about q that's that's that sounds good
[01:52:06]  all right now we have get three and then we get path name slice case about return this case about q yeah so this actually expands out even with nested routes i imagine so
[01:52:22]  it actually generates instead of regex it generates so this is about optimizing for speed not for size or yeah because this is running on the server of course right because no
[01:52:36]  client side router here so interesting okay so yeah if you have thousands of routes this would be it'd be large but it would not actually like from a performance standpoint it would
[01:52:52]  be a much like a very i mean it's gonna affect server startup by like a millisecond yeah cool what i want to know is how you got the the pretty mar
[01:53:06] co logo in the sorry i'm having some issues with stream yard right now but in the terminal yeah ask the art box drawing unicode yeah this is definitely a highlight
[01:53:20]  okay so um sorry streamer recently has been like freezing up on me like terribly um okay let's continue um okay we'll be expanding that explore your routes a little bit
[01:53:38]  more to give you more information um bundle sizes like that kind of stuff we want to put there so that you've got you know some insight into what's happening with your
[01:53:48]  app um but that's really early yeah no it's it's cool um it's nice to see this kind of probably add some syntax highlighting on these files yeah no it's
[01:53:59]  definitely cool to see this in action and um yeah so this is this is marco run got a few of these open right what any other things i guess and the first thing
[01:54:14]  everyone's probably going to be wondering because we've been covering it recently is do you guys have any plans for um client-side routing you see did you see the ast
[01:54:23] ro view transition api stuff yes um and i i think so with the um i think there's some things that we don't need to go full spa for um specifically on
[01:54:40]  the the view transitions because you um we will eventually get uh mpa view transitions in the browser right now it's behind a flag in uh chrome canary but it's
[01:54:55]  coming um but persisted components uh what they're calling persisted islands you know being able to to retain this kind of ephemeral or client-side state um across
[01:55:10]  pages um is useful in some cases like the the music player example um is you know kind of the the one that keeps coming up um so i i do think there's some
[01:55:25]  value in it being able to to represent um that and you know potentially jumping between like an mpa experience in a spa experience um and there's some interesting stuff that we
[01:55:41] 've been talking about um specifically related to doing this in marco 6 um with being able to um essentially do fine-grained updates to the existing page uh from the
[01:56:02]  server have a format for um serialized data to come back that's you know specific to you know like update this text node here um and and that kind of uh stuff
[01:56:12]  so and i think we actually got into this the last time dylan and i were on the the stream um that's still kind of fantasy land uh right now we haven't
[01:56:24]  really begun any um work on that we're actually trying to you know we've been working on these other things trying to get marco 6 out still which is kind of
[01:56:35]  um a prerequisite for um going down that road um right i mean i do see value in it yeah okay which yeah makes sense and we we haven't talked about marco
[01:56:52]  6 much today and i i i yet so i think it's probably a great time to do so um can can we yeah can we talk about marco 6 and where
[01:57:02]  things are at launch marco 6 on the stream today um i wish that were the case marco 6 has been uh taking a lot longer than we initially thought that it was
[01:57:15]  going to um sorry guys uh but it it is moving forward um it is certainly not not dead um and yeah we're excited about it there's some new stuff that i
[01:57:30]  haven't even seen yet uh on stream or people using yet to stream marco 6 has a playground now right marco 6 does have a playground um it's not linked from
[01:57:41]  anywhere but if you go to marco js.com slash playground which is also not linked from anywhere slash v6 um you'll get to the the marco 6 playground
[01:57:52]  um and slash playground slash v6 v6 it's like the cheat code oh oh it's here i see it and uh we can thank uh taylor hunt for this awesome
[01:58:08]  warning message um but but but yeah so this is pretty cool because you can um you can write marco 6 there is uh you know still some limitations around it but you
[01:58:23]  can see the compiled output and see everything working right so so what yeah where's the so we got the app preview this clearly counts the compiled html which is the
[01:58:38]  server export and then the compiled dom which is the client export yeah this is this is like all interesting in its own right because you can actually see what we talked about before where
[01:58:52]  this is this is a resumable uh setup right i actually one thing that i'm yeah it's hard it's hard to see what the final result is though in
[01:59:04]  this example because this template this template has to be exported but no one's ever going to import it this whole thing is designed to be um tree shaken right so so everything in
[01:59:18]  marco 6 basically gets hoisted up um to the top level and then if it's not referenced then it just gets removed right because there's a default export here which is
[01:59:31]  like create the template create the renderer you know which is like like import component and yeah if you're going to client side render it then right the api that you
[01:59:41]  would yeah but the funny thing about this is if you generally aren't going to ever call this import which means that these are the top level and if you are this template actually
[01:59:53]  will generally if it's not part of this this template never gets imported generally right like if this is used by a parent it'll import it but it imports the template and
[02:00:04]  uses it in its own template which then doesn't get right anywhere so that that all gets tree shaken out right and then the walks this is like how you hydrate this this
[02:00:15]  is encoded but it actually does the get get uh you know get the important thing go to the next sibling you know so it's like an encoded walk um we
[02:00:24]  were looking at the svelte 5 compiler the other day yeah and you know dominic was telling us how um the uh extending the prototype method instead of calling the properties directly
[02:00:39]  was faster um so it was just interesting this is this is going like one step even further abstracted from calling the functions this is actually encoding something that then will each time
[02:00:51]  the template goes through and and tells it to go to the next thing it will yeah the interesting thing about this because and and this is something that you know you were um kind
[02:01:02]  of working on marco daily um at the time that we were talking about this so i know you know this but um you can get the um you can get more efficient
[02:01:12]  walks by actually writing code right because like maybe um the the so we we're only getting two things here right but maybe there's a third thing and it's actually faster to
[02:01:25]  traverse from the first you know reference that we grabbed than the um this than the second reference whereas this is like linear like you're always moving right you always have to go
[02:01:37]  in in the note right um but in in most cases because we did a lot of different like um tests to see okay so if we if we write the you know this code
[02:01:51]  that you know seems reasonable do do we end up with these like inefficient walks and it was like most of the time like this this kind of just like continuing on through um
[02:02:02]  the the template like doesn't result in um a large percentage of walks needing to do extra stuff and we can encode it really really small um by doing this yeah what's
[02:02:16]  really cool about looking at the the the the the child template is there's no component function like i mean you could like if you picture you saw this in in um solids
[02:02:27]  uh output you saw this in svelte 5's output where there's essentially it's a lot easier than looking at the old like vdom output it's felt i'm
[02:02:36]  sorry it's not actual vdom but like the old like class output is felt but you like most frameworks that hydrate there's the component is a function call that runs once
[02:02:45]  and then everything else even if it never runs again it runs once you can actually see the decoupling here right on the output because there's no run once here it
[02:02:54] 's like there's basically register a side effect and by side effect in this case this is an event handler so it's like on the first button and i mean we can play
[02:03:04]  with this about you if i put another button here just to mess with things does that change the the compile output at all uh the only thing that's going to change is the
[02:03:13]  walk so it's going to have to skip over that button to get to the first one so you see yeah yeah yeah yeah over so that didn't actually change the id
[02:03:21]  of the no so it only assigns ids to things that like actually do stuff yeah so if you had a click handler yeah i mean i i could have just yeah whatever
[02:03:33]  you know this is an interesting syntax the the marco6 has the object syntax in the you know which saves you from the equal whatever um yeah so now there's button
[02:03:44]  zero and button one um but i i got you so what i'm getting at is that there's it figures out where the uh the uh effect is and registers and so say
[02:03:58]  for this component index whatever marco zero account so it gets a specific the end here is an id um this kind of tells it like for this instance of the component uh
[02:04:14]  here's like the the relative stuff and you you basically have the scope that gets injected yeah that scope is probably the closest thing that we have like that scope kind of is the
[02:04:26]  component almost right right because like if you think about um solid right like it there are no components in solid right right like you know from a runtime perspective but the the component
[02:04:39]  exists kind of as this like closures yeah enclosures yeah yeah and so that that's what this scope is um and the reason that this is pulled out as this like
[02:04:50]  object that we're passing around is so that we can serialize it from the server right um and that's that's really the big thing that enables resumability is
[02:04:58]  the scope object and the fact that it's something that we can serialize down right have to run code to recreate those closures right exactly so now there's a scope here
[02:05:08]  so for that that scope the button with this id it's almost like the the way people think of slots with hooks like where there's one two like the it finds this the
[02:05:16]  the right like location in the scope the first you know this id you know click handler so this this scope will get us the button element this will get us the click and
[02:05:29]  then um this uh this function is actually the click handler which again reads from the scope to get the count which is a signal and then it will or source you guys call them
[02:05:42]  sources it'll cue the update of that source here basically schedule it so scope count set the new value to count plus one and then if you look at the rest of the
[02:05:53]  code there is a actually can can we add something a little bit more interesting and i i mean this is such a lame way of doing it but let's add a double count
[02:06:02]  um which there there's a whole topic on twitter about how you should never make this uh over wrapping computed or whatever but we're just we're just going to do double count
[02:06:13]  here and now we're going to use double count here um so what you're going to notice is this is still the effect that gets registered um this is basically the signal
[02:06:31]  being generated right again top level but it it defines for the i guess it defines for the scope count and it sets up the dependencies because you're like here this is the
[02:06:46]  effect that is that what's going on here what's this count effect and then double count these are the things that run when count updates and then double count is oh wow
[02:07:01]  this is cool it's actually reading the val is it reading the value from the the tech or no no this is writing this is data yeah this is text data right yeah text
[02:07:11]  data so this is just saying whenever double count updates run this and then double count is called from count it's called from count so so we've got these wrappers around
[02:07:26]  them so like the value wrapper um you know you see on double count and count yeah but what's returned from that actually is a function that has the same signature as the function
[02:07:38]  that you pass there so like double count is a function that receives scope and the the value of double count so you just call it scope and the value and then it it handles
[02:07:50]  that there's some extra stuff that needs to to happen um which we could go into uh so so but like is there a this looks like you unwound the reactivity
[02:08:03]  system is there a run time reactivity system here there is um so when you call double count there's um a check um there's there's a dirty check right um
[02:08:23]  um so the other thing that we're not seeing here um right now uh if we add an intersection we'll see it um but there's a pass when you do um q
[02:08:40]  source so when you call q source it immediately goes and starts notifying um notifying um things now there's nothing to notify uh in this case yeah so if we multiply
[02:08:55]  that somewhere add some yeah all right okay so so we've got an intersection here and then if you come down to count or yeah let's look at count so now there
[02:09:13] 's this expression count count um which is babble doing weird stuff but um that's count count two but then babble strips off the number um yeah so when we queue the
[02:09:29]  source it's going to look and say okay i queued this source does it have any intersections that i need to like go notify that like an update's coming um and
[02:09:41]  this is to solve the diamond problem which i i think you've gone over on several streams so we don't necessarily need to to go into that um but now when when
[02:09:52]  count updates and it comes to that intersection it knows how many updates it's expecting to receive right um but when those intersections aren't there and so like if you were to add
[02:10:07]  something downstream of this like um of this double count then there won't but there's no intersections you know it'll kind of short circuit that marking at that point in time
[02:10:20]  so we we know when we need that and when we uh you know and and when we don't this it's yeah what's cool about this playground you can actually see the
[02:10:31]  all this logic and the action like i think the only other thing i wanted to talk about it here is the setup function doesn't get called unless you're client rendering right like
[02:10:41]  it's yeah so the setup function would be called from the parents setup function um and then it's also passed to that create uh render or create template because it is actually
[02:10:52]  this setup function that starts the creation the reactor graph when you go downwards so you go call count call count so this means that if this is the top level component this this template
[02:11:04]  never gets imported um the the we need the walks but the setup function also never gets imported in this case and this never gets imported so basically um you grab the walks if
[02:11:19]  i'm right and since you don't actually call counter count two we actually don't use the walks for hydration either we had talked about using them at one point but we decided
[02:11:29]  to annotate nodes that are that come from the server um so if actually if you go to the server compilation the the reason for that is because stuff extent browser extensions and
[02:11:43]  and such can get in between uh if you insert like one element it throws all the walks all right right um so or you know some some third-party script that you
[02:11:55]  dropped on the page um so we felt it was safer to uh more resilient to have the nodes themselves be marked so we actually just walk the the dom um and find those nodes
[02:12:09]  so yeah you see we mark resume node um and this lets us know okay that that text node um it's also interesting we we mark after so we use comments to mark
[02:12:20]  and we insert the node after the node um and that actually handles the cases of like automatic insertion of um things like you know if if you don't put a t body
[02:12:32]  in a table yeah like browser will insert one for you um or uh yeah we talked about this actually a bunch with uh dominic what's interesting is i don't actually
[02:12:45]  see anything on the element here are these is the app preview being client rendered only yes the the app preview is client rendered so yeah you're unfortunately this doesn't actually show the
[02:12:56]  the hydration um flow right yeah but the reason i was commenting on this is without the setup calling the count to initialize this this just this count function just exists here but it
[02:13:12]  does get called from the click handler and the click the handler is the only thing that's held on to and that holds on to count that's where i was getting to
[02:13:21]  because it's that's it yeah it's right here exactly so basically nothing runs it just defines a bunch of these things that live a bunch of them don't get imported but
[02:13:31]  because counts in here and because this is a top level global this code is here so this code you know exists these ones exist this one never gets in uh never gets referenced
[02:13:42]  anywhere except this exports it never gets imported so this gets tree shaken out and what ends up happening is instead of when you initially render you call setup and you call count count two
[02:13:53]  when you're doing hydration or like app startup nothing runs except for the registration of these things and then when you click the button for the first time you can see it it
[02:14:02]  it it grabs the count value from scope which was serialized from the server and then at that point it goes oh what's the signal that i need to update but the signal
[02:14:13]  isn't even like anything yet so at that point that's when it actually like builds everything out right yeah builds everything out is maybe not the the right way to to think
[02:14:29]  about it um so when you cue this it's going to um it's going to walk this list of intersections uh here that we see at the end of value so this
[02:14:44]  expression count count so it's there is a place in the scope that it's going to add like like increment from undefined because the server doesn't serialize this stuff
[02:14:56]  to one um and then that's going to be all that happens synchronously but we we also queue that source to right um and then so we we hit the micro task
[02:15:09]  the queue starts flushing or draining and um then we're going to call this uh this count function with the new value of count uh that was queued yeah and so that
[02:15:25] 's going to run this function and then it's also going to say okay expression count count like i i'm done and because it only got marked once then expression count count
[02:15:39]  is going to run and so then we're going to grab count and count two out of the scope count was just updated by our click handler count two was serialized from the
[02:15:48]  server that code is never executed um in the browser and then we call double count with the new value double count and then it updates the text node exactly yeah so it's
[02:15:59]  pretty much just function calls kind of all the way down there are some dirty checks um in there uh yeah there's no like objects or anything that are created uh through this um
[02:16:13]  we we do update some like integers in the the scope through the process but i always thought yeah i always thought this method was very clever uh just because um the compiler does
[02:16:26]  a bunch of work but then it's literally just tree shaking to make um everything work like it like there's like older marco you there's kind of like a bit of
[02:16:36]  a bundling post bundling analysis to figure out like the islands and the islands like sometimes you know something ends up on the client just because it's under an island right
[02:16:46]  whereas this system the it's basically built ahead and then simply the tree shaking actually drops everything off the right right yeah um and we still need to determine if that's going to
[02:17:04]  be um sufficient right because this is resumable but i don't see any like dollar signs anywhere or anything right so like yeah what's up with that so um you
[02:17:18] 're talking quick right yeah of course i'm talking quick yeah um we are our goal is for you to just write this um this tags api language which um i'm a
[02:17:35]  i'm a big fan of i i don't know how you feel uh about it i i know you appreciate aspects of it but i don't know if you love it
[02:17:44]  yourself i mean it has a lot of qualities that are really quite nice biggest one is that like the the the the whole you know um like portability of stuff like the fact
[02:17:56]  that you can go like if component and then like you know now the state existing is conditional or you can because the imports automatically work you can literally cut and paste and drop
[02:18:07]  stuff in a different file and it just continues to to work like like basically there's no boundary between the the declaration of uh data and data dependencies and the view code which
[02:18:21]  makes it incredibly like whizzy wig as a development experience so yes from that perspective obviously i think telling everyone that they have to write everything is xml is an adjustment you
[02:18:33]  can get rid of all the angle brackets if you want right right we can go in a terse what is it called concise mode yeah concise mode yeah and then you so like
[02:18:46]  you can just go like this right it still works hybrid so like you can yeah people can feel you know we can where's the other one i mean technically we do it
[02:18:58]  even with the button too right because i can just go yeah we can i can remove this that and then yeah the dash dash sometimes joke that marco's like people who want
[02:19:10]  to write less like marco's even less than svelte what's interesting to me is is and we talked about this before is a lot of the reasons that svel
[02:19:21] te changed the ruins uh are things that marco has already like kept him taken in mind because like this is letting cons but they're tags they already have like a specific syntax
[02:19:32]  and meaning marco you can also make custom let right here and you know whatever we we haven't defined a custom let but like technically you get the same composability that you
[02:19:43]  get with signals but the base primitive is still just a let and the computer is still just a const um which is interesting it means that generally speaking there's no framework out there
[02:19:53]  that lets you write less code um that's probably true unless you've got like you know built-in helpers for for something yeah right like i guess like i saw
[02:20:07]  alpine has like an outside click or something like that and you can represent that you know pretty concisely in marco but you're you know you're going to
[02:20:18]  need to write an effect for that whereas like they allow you to just put an attribute on you know something so i mean like when you build in things like that but in terms
[02:20:30]  of like yeah i i think being being able to having lightweight core and being able to express all this self yeah marco can can be pretty insight so it's a tricky
[02:20:42]  one because it's it's not even a question anymore of like whether you can build the language that can represent the ideas it's like a question of like how comfortable people are
[02:20:54]  of say like what level marco is it just like like we have javascript expressions but like marco is a language it is not javascript it's not
[02:21:03]  pretending to be javascript it's not like you can ever get fooled and think that you wrote some javascript code and it uh acts differently and where the rest of
[02:21:12]  the ecosystem is right now is they they're kind of like i want you to just write javascript code and it to work the way you would imagine it to work but
[02:21:19]  not the way javascript actually works and i think in that place i like marco from its purity of like this is doing what it says it's doing whereas like
[02:21:30]  it's very i mean it's inviting the temptation to like leave the marco file but i think that is one of the principles that we're gonna stick to that like we
[02:21:41]  will do some crazy stuff with your marco file but we're not going to touch your javascript right which is uh an interesting one because like macros with stuff
[02:21:52]  like that we were in bling or server components and stuff for stuff like uh use server use client not use client as much a use server kind of dabble a little bit
[02:22:03]  on the your javascript they change where it executes but they again don't morph your javascript solid so far has taken that position that outside of the js
[02:22:12] x we don't morph your javascript so like that's why i like it's the compromise place that's the the hardest so even within the marco template like the
[02:22:21]  the expressions and stuff that you write with the exception of um of the of assignments like the count plus plus there where you're assigning to a tag variable you know this variable that
[02:22:34]  came from marco we we don't touch your javascript expressions either um in here right right like we're not changing your even going as far as like we're
[02:22:48]  not changing your account to a scope read we just introduce count into the the scope where that expression is running yeah it makes sense yeah yeah so like it is one of these
[02:23:04]  really it is one of these like tensions on that because like as i said for people ask me this about solid a lot of time i like i know we could just keep on
[02:23:14]  adding more compilers and like layers at a certain point we're just not going to be writing javascript which is okay but then we have to acknowledge we're not
[02:23:22]  writing javascript you know and i think i think that's where the delicate balance balances and why like yeah i i i'm i get more torn the more like i
[02:23:32]  actually think i like svelte 5 a lot better than i like svelte 3 or 4 because at least with the macros and stuff i can tell that they they
[02:23:39] 're in like they're inventing their own language primitives they're not trying to override what letter cons does or whatever right um this is fine because it's like it
[02:23:50]  it it's going to appeal to the let cons to people but like clearly this is not javascript here like so yeah i it's one of those things where um i
[02:24:02] 'm still very much on the just javascript side ironically the um it's it's very interesting from a language design perspective as well like because every other um framework react
[02:24:23]  view svelte um solid you know have these there is like a very javascript portion of that that um the the reactivity lives in right um even svel
[02:24:44] te four you know there there's the script tag and there's like reactivity going on um in there and now with svelte 5 it's escaping even the the s
[02:24:53] velte file with the runes um right but with view and solid and react you know you've got hooks that you can just write in other files um and i'm
[02:25:06]  curious to see what that looks like um for for svelte specifically because uh of the the languages that i just mentioned um i mean i guess they're the only one
[02:25:25]  that can't also define components in the javascript right okay um so can you huh view you can opt into jsx so you right you can do that um i'm
[02:25:43]  i'm sure you're going to be able to accomplish like you know whatever you need to and spell by like you create another svelte file and import that and then
[02:25:51]  expose that through your like custom hook you know or whatever but um it's kind of interesting that like as you start to pull this out there may be some patterns that are like
[02:26:02]  potentially more um more difficult um to to represent it's it's interesting because marco kind of forces you to stay in marco land whenever there's reactivity um involved
[02:26:19]  and so there's there's also a natural place to be able to do some of these powerful things like these you know so-called hooks or tags like they can be aware
[02:26:28]  of where they are in the tree they can render stuff they can return stuff that renders stuff um and so you get some benefit uh of that um but and it's
[02:26:42]  interesting too because like if you call use state in react like yeah you're just using that in a javascript function but that javascript function is only usable within
[02:26:57]  react right um or i mean even with solid solid's reactivity system is is open right like i could you know write some stuff that um you know doesn't actually use like
[02:27:12]  the components or the components but you still need to use solid to consume whatever's coming back from that you know just a function um same with svelte same with view
[02:27:26]  um and so that ultimately has to be consumed by the framework you know it it doesn't feel that bad or it feels good even for you know that to be written as a
[02:27:43]  marco profile it's something that has to be consumed by marco right like yeah there's there's no confusion about like oh can i use this react hook in a
[02:27:54]  in a view app well i mean maybe if you convert it you know in some way but it is very much a react function you know at that point it's not just a
[02:28:06]  you know a javascript function right great yeah i mean if you're using a spec yeah i i guess that's interesting yeah because if you're using us if you
[02:28:16] 're using a specific um library then i mean it's more than that like actually the pure reactivity on its own i don't know if it has that quality but the second
[02:28:28]  that uh i mean i don't know i actually i do wonder if solid and view vapor fit into that because svelte continues to because of their macros for their ruins
[02:28:39]  but when you're the fact that that view and solid expose fully expose the reactive system makes it less so because but but you still have to consume it from the reactive system you
[02:28:51]  can't just be like here's the signal right like you i mean unless you're gonna read it one time or like pull it you you kind of need to like create a
[02:29:01]  route and like listen right but like the top level you don't right like like i'm just saying like hypothetically here the the the simplest reactive system app is is a
[02:29:13]  function that runs once that uses only to use a signal and then you make it and you make an effect right so from that perspective it's not like being fed into a framework
[02:29:24]  to process it and in so the jsx is sort of also discrediting the effect so you could argue that with solid style render it doesn't actually get fed into a
[02:29:33]  framework we maybe we can actually claim to be a library where almost none of these other ones can actually claim to be a library there i would say that's fair yeah i
[02:29:42]  i really like the intro that you do with um solid you know starting with these like singleton um uh signals and uh i almost forgot signals how did that happen um these
[02:29:59]  singleton signals and you know just creating raw dom nodes and updating right exactly so i i think that's a really nice um introduction yeah i mean to be fair the the
[02:30:11]  i'm just trying to figure out what that introduction is for marco um it i don't was it bloop that i think it was james long wrote an article on
[02:30:22]  back in like 2014 2015 time frame that i felt like was a really good introduction to like the virtual dom and react and it's just like i'm just going to render this
[02:30:33]  all you know repeatedly render this thing and just blow everything away and like look it works it does what react does except reacts using a virtual dome so it's not quite blowing
[02:30:41]  everything away right yeah um yeah there there was a uh there was a question here uh let me see if i can get stream yard to play i might have to restart it but
[02:30:55]  i'll wait hopefully i can leave it till um yeah here we go i think it's showing up now do you see the question actually yeah yeah maybe i missed this question
[02:31:05]  but why the markup style syntax so i mean part of this is that marco starts uh marco's history starts as a templating language and so we kind of like
[02:31:16]  just enter straight into the the html um you can copy and paste html put it in a marco file and it's it's going to work yeah
[02:31:26]  dot type like everything um and so the the tags api uh which is what you're seeing here is um kind of it it's it's a cohesive language that brings react
[02:31:44] ivity to this like html like language um and we're you're just having a discussion uh i don't know if you call it or not on like the the
[02:31:55]  value or perhaps not value of you know having this in the template versus like coming from yeah um javascript but ultimately like these values have to be consumed by the the template
[02:32:08]  um and like there's composability here right like you can create your own um custom let you can you know create essentially hooks um custom renderers all kinds of stuff that
[02:32:27]  are um quite powerful and i i i really enjoy writing with the tags api i i almost wish not almost i wish we hadn't tied the tags api to the
[02:32:40]  the marco six release so tightly i i wish this was out in the wild for for people to be using if it even if it was backed by v dom i think it
[02:32:47] 's a really awesome way to um to write marco and write applications yeah so yeah so there's a comparison being made that it's kind of like svelte the
[02:33:01]  way that it hides the reactivity but what one thing that marco has done and we haven't really shown we don't have time to show on this stream i think we
[02:33:07]  showed it before is it actually the there there's because of the useful tags in the language it's actually defined how it goes you continue using it as a variable even cross file
[02:33:17]  boundaries there's like a syntax works like returning the variable out but essentially um it it's it still continues to be um the wrapper doesn't change where svelte is
[02:33:30]  kind of going like hey you can wrap it however you want when it leaves a local scope marco actually defines a wrapper which is it still looks like a variable because it because
[02:33:40]  the compiler is smart enough with cross template analysis to actually know everything that's reactive across your whole application yeah um but yeah because it yeah there there's definitely some interesting stuff
[02:33:59]  this this the fact that this kind of felt conversation um kind of comes back is is not not surprising i you sent me something the other day michael um which was that you
[02:34:10]  were like you're like what what if solid had ruins and yeah i thought it was kind of funny because uh obviously there's the solid label library which actually does do this
[02:34:21]  we've had it for a couple years but um you the one thing that you added because this is very similar to what we had before actually um yeah i i think it combines
[02:34:33]  several like there there were a ton of macros and solid macros like a ton yeah um and uh this combines a couple of them into you know a single macro that
[02:34:47]  behaves differently depending on where it exists in the asd yeah yeah yeah like you're like you said like i think there's a dollar sign property in solid labels this just does
[02:34:55]  it automatically when it sees that it's an object right like there's no need need to to have like a different property for it but um what i was interesting is is
[02:35:05]  you added a bind thing yeah and i'm gathering the goal of this was for two-way binding so that you could say bind text done and then yeah but also on attributes
[02:35:24]  yeah this is this is just oh yeah bind yeah i don't i don't i don't know how comfortable i am with this but this is this is very interesting thing
[02:35:35]  we yeah we have dollars ind structure but um yeah i mean this is interesting when you get to as to the especially to where you are with marco where the tags aren't
[02:35:46]  just um a unidirectional tree like uh um like you know like the dom when we talk about your director flow locality a lot of times you're just passing
[02:35:58]  things down events up but the tags are actually um kind of like hooks or composable primitives so like you know sometimes they do return the signal so to speak uh uh
[02:36:11]  it is interesting that you know the probably what inspired this is that especially marco because this like the syntax for it it's all the same thing right like two-way binding
[02:36:23]  and the ability to like exports have reactivity work between files is actually a very similar concept right yeah so yeah i think we covered two-way binding in our last stream
[02:36:40]  uh in the controlled uncontrolled uh stuff or it's not implemented natively in marco 6 yet um so we'll be able to do it in this playground if you delete
[02:36:49]  the v6 from here um the the marco 5 playground does have the the tags api preview where a version of it is working if we wanted to play with that but
[02:36:59]  i know we did cover it before yeah so i mean i guess the question is where is this going next because my understanding okay marco 6 is missing some stuff around as
[02:37:07] ync that's getting resolved um we already can see the compiled output for like the synchronous stuff and like the main state updates it's pretty cool to look at and play at play
[02:37:17]  with um but uh and there's the tags api in marco 5 but my understanding is you are working on um a compatibility layer between marco 5 and marco 6
[02:37:29]  right now i am yeah that's where my main focus is right now and it's uh so what it is is it's actually embedding marco 6 inside um mar
[02:37:41] co 5. so it actually do you still have up the the marco compiler docs um maybe not i mean i'm on the website but yeah just go go to docs
[02:37:53]  compiler it's down here uh it's under reference right there yeah and then it you saw that diagram i don't know where it is exactly on the page but there's near
[02:38:05]  the bottom this one right there yeah so we we have this concept of translators which is the last stage in the compiler that takes marco code and converts it into um
[02:38:23]  javascript code that you know will ultimately run and um so marco 5 has a translator um that translates to you know essentially this the the runtime that it uses and
[02:38:40]  it's pretty much the same runtime that existed in in marco 4 um to you know a couple things have been updated uh since its release but um like we mentioned by and
[02:38:53]  large marco 5 was just a a rewrite of the compiler um and it introduced this concept of translators um and so marco 6 really is just a translator to a
[02:39:07]  new runtime um and you know it does a lot more more analysis um than the the marco 5 translator uh does but it's you know just uh it it's essentially
[02:39:21]  a new plugin to the um to the compiler so you know technically we don't need to release marco 6 you could just change the the compiler config to say use this other
[02:39:32]  translator um and you know you actually can do that um today to test out marco 6 if you build it yourself because we haven't published it yet but interesting so like
[02:39:44]  what what's motivating motivating this so if i'm understanding is you're going to have you can have a marco 5 app and then have marco 6 components like just sitting
[02:39:54]  alongside them so so what i'm working on is this interrupt translator i'm calling it and so it actually wraps both the marco 5 and the marco 6 translator and
[02:40:06]  so it detects different language features um that are basically tags api the tags api preview implementation that we have in marco 5 has the same check so i kind of
[02:40:20]  ripped the the checks um out of that package and so if it's if it determines it to be a marco 5 component you know it sees a class or you know
[02:40:31]  some some other things that are marco 5 only that have been deprecated then it goes down the um the the marco 5 path and if it sees you know some
[02:40:41]  of this newer stuff like a lot of other stuff like that then it goes down the marco 6 path and so what you actually get out truly is a marco 6
[02:40:48]  component it's not like you know the tags api running on the vdom or or anything like that um and then uh the the other piece to that is um it
[02:41:03]  uses child template analysis very basic to look at um the the child components that the template's rendering and if it sees that oh these child components are actually tags api components but
[02:41:19]  i'm a class component rather than going down the normal like custom tag compilation that would like you know inline a call to the tag it um it swaps that for
[02:41:31]  a dynamic tag and then um so it swaps it for a dynamic tag and then it injects a a script that patches the behavior of the dynamic tag so now the
[02:41:45]  dynamic tag has this like logic to be able to say oh this is a component from the other runtime and it will do some some interop at runtime right because i was going
[02:41:56]  to say vdom re-renders over and over again leaf node marco 6 component doesn't want to re-render over and over again yeah so so when um when
[02:42:07]  the vdom re-renders it's going to get new uh attributes new input and then that that input is going to be passed to the the marco 6 component
[02:42:17]  it'll fine-grainedly update fine-grainedly is that a a word yeah every variation exists now of on that one but but yeah um so the the the
[02:42:29]  re-rendering kind of stops at that that boundary um and then similarly it'll do fine-grained updates through the the marco 6 side of things and if you
[02:42:39]  hit one of these vdom components when it receives new data it'll just re-render and do a diff and so um we we did want at some point to have
[02:42:51]  like the the class components actually running on top of this like fine-grained update but the we'd been through this whole thing before um you alluded to it you know having
[02:43:06]  to to upgrade hundreds of apps across the the company um and i i think we're going to be served by uh you know having exactly the same behavior for the the existing components
[02:43:22]  um rather than trying to to get them to run on top of this or having you know letting you use the tags api now um running it on top of vdom
[02:43:34]  and then swapping out the implementation underneath and there's a few slight differences that cause you know confusing breakages um when people update um so when you once this is done you
[02:43:50] 'll be able to start using um marco 6 components in your marco 5 apps um like you mentioned async is not quite done yet there's there's still some
[02:44:01]  open questions there i think we know the route that we have to go down which is going to look very similar to solid and react um but you know i had a different
[02:44:13]  vision for a sync that i don't know is going to pan out so i'm still kind of we've been pushing that off and i'm still kind of holding on hope
[02:44:21]  that i can get that working the um the way that i would like to but it's it's not looking good yeah concurrency models are harder i was explaining to people before
[02:44:34]  this is like the hang up it's like when you know that you're going to be going to a place where you're going to need this especially because streaming is so
[02:44:42]  important to ebay's use case and as you mentioned uh async or the wait tag only ever worked on the server now you want to have the server and the client you
[02:44:51]  get you almost have to solve all these problems at the same time which is really hard because they're both part of the problem is like a lot of these solutions feel like
[02:45:01]  they're more complex than they need to so you spend a whole bunch of time trying to figure out if you like there's some revelation that could make you find a solution that
[02:45:09] 's correct and also less complex and you can't really like break these things apart because they're all related right but uh but that's when like so yeah what's we this
[02:45:23]  let's say this come come uh interrupt layer between marco six uh and marco five comes out um and so are we are we getting close to the finish line for
[02:45:34]  marco six we are getting close um yes there's there's a couple like basic things that still need to um need to be handled uh and the the compatibility layer the compatibility
[02:45:52]  layer is is very close i'm hoping to have that um done here in the next uh couple weeks um and then we'll be shifting focus back to to marco six
[02:46:03]  itself so that what you know you can run in marco five actually like covers all the bases um but it is kind of nice i think that you know um we'll be
[02:46:16]  able to um experiment with this and kind of supplement with the class components where where things aren't fully implemented um yeah but yeah oh you have your mark oh yeah i haven
[02:46:33] 't seen it yet yeah i guess i i probably just haven't been looking at you all that much yeah just yeah it's it's it's hard to estimate how much
[02:46:45]  more time it's going to take to iron it really is and it's part and it's largely because the the async model as long as there's like a question that
[02:46:57] 's undecided that's expensive you can't like you can't just like put a stamp on it like if you understand like the work that's left it done you can
[02:47:05]  put a stamp on it it's probably an underestimate but it's at least in the ballpark the problem with the same thing stuff is like at a certain point like you
[02:47:11]  leave it as long as possible so you can make all the other decisions you can and push things forward but you're getting to the we're getting to the end of the line
[02:47:18]  here yes um and and i think that's a big reason why things have have dragged on because we've had these like we want to do this and we don't even know
[02:47:28]  if it's possible right um and uh we're we're getting to the end of those which is good um but yeah you know and then you when you're trying to
[02:47:43]  even figure out if something's possible you know you kind of have different tracks that you go down try something well that that didn't work you know the or it worked but there
[02:47:53]  were trade-offs that we're not willing to make um and that kind of are you ever concerned that uh like just you started on this project because you wanted an h
[02:48:08] tml templating language yeah right are you ever concerned that like front-end frameworks and like the complexity that we bring in has just gone like way off the deep end like
[02:48:18]  you've watched the whole progression from like literally yes like template almost to like yeah whatever my concern that we're contributing to it yes um i mean and that's one of
[02:48:31]  the the things right like it there's a ton a ton of complexity in computing right like not not even talking web development but just like computing in general right there's abstraction
[02:48:46]  upon abstraction upon abstraction and a lot of those abstractions are super helpful i mean html itself is an abstraction right yeah um the problem is when they're le
[02:48:58] aky um and so i mean that has been one of the the big things that we're trying to solve but i i also have concerns because i am very aware of where you
[02:49:13]  know things with marco 6 currently leak um but if you don't have to um if you don't have to think about the layer underneath right like if you're not
[02:49:27]  having to think about the the compiler right um if it actually works the way that you expect it to when you're you know debugging you know you can just look at the values
[02:49:40]  in your template and see you know how they're changing you get the the type inference in your template like you never have to think about what it compiles to um now what
[02:49:51]  it compiles to does should influence you know the your your mental model but you don't necessarily have to to understand that for um for it all to work just like you
[02:50:03]  don't need to understand exactly how the the browser's parsing html how it's rendering it right like if we can do that and and minimize the the leaks
[02:50:18]  um then i i think it'll be a good thing i i really do enjoy writing in the tags api i think it's a good way to to build um applications um
[02:50:30]  and if it's fast um and it works um and you don't have to to think about it and you get to to focus on building your application um i i think
[02:50:46]  we'll have added something positive to the the web community yeah yeah the the reason the reason that i i ask is because there's been like a backlash recently and it's happened
[02:50:59]  to different degrees obviously you know graphql i i i was just reading about people i think adam rackus yeah something i saw that tweet this morning about and maybe i
[02:51:09] 'll i'll talk a bit about that more in this week in javascript um but like like another backlash is something like htmx um yeah i have you
[02:51:21]  looked at htmx at all i i have to a degree um yeah it's it's just it's one of those situations honestly if i were going to go back
[02:51:33]  to simplicity um i i would probably look at something more like enhanced than uh htmx i i think um yeah yeah it just it's it's it's interesting
[02:51:49]  because it's kind of like we're they're trying to reset back to like i don't know hyperscript or you know um i don't know well hyperscript
[02:52:00]  is its own thing no not not hyperscript jsx but like like hyper media or whatever yeah but you've seen hyperscript right not hypers not jsx
[02:52:10]  hyperscript but htmx is hyperscript like language like i'm gonna write like this made-up programming language in html attributes yeah yeah i did
[02:52:20]  actually see a bit of that yeah um i don't know it's like one of those things where you like if you're going to design a new language like you kind
[02:52:33]  of want all the tooling around it like you don't want it to just be a string that nothing understands right like how do i debug that you know i i'm not going
[02:52:43]  to be able to hover over that in my editor unless you know like the the efforts put in to to actually truly make it like a language with all the the language tools
[02:52:55]  right um and it doesn't i feel like it doesn't bring a whole lot new to the the table that um you know javascript doesn't already have or could have
[02:53:09]  during you know with a library i mean you could potentially make the same argument with with marco but but marco's got like this whole you know totally different flow like
[02:53:20]  hyperscript is just an imperative scripting language that you know has some syntax sugar for common web dev stuff which i mean isn't to say that's useless but i
[02:53:30]  mean the reason we got there we're there is simply because htmx alone expressiveness of its html is insufficient to handle all the use cases right so yeah
[02:53:43]  i mean this this is yeah as i said there there is an attempt right now at a reset like uh like like a baseline of i think i think philosophically like i
[02:53:55]  i kind of agree like the the philosophy of marco from the language standpoint is like add as little to html as necessary to make it you know like truly capable as
[02:54:07]  a language to to build these you know modern applications that have you know the need for you know composable components and and every thing and it it really isn't a whole
[02:54:22]  lot that's been added you know syntactically to um to html but there there is this whole compiler tool chain attached um to it and so i mean i i
[02:54:39]  understand that yeah i mean i don't know what do you i i'm just using this opportunity to ask you about like all the all the hot topics here like what do
[02:54:47]  you do can you can we take no build people seriously like so actually um this was a while ago several months ago i actually decided i wanted to to build something and i was
[02:55:07]  like i don't feel like dealing with a build um but i was like okay so i know solid support it's like tag template literals i'll just start building with
[02:55:18]  the tag template literals and and solid um and it didn't take too long before i was like nah i'm i'm gonna set up beat yeah um so so i don
[02:55:37] 't know yeah it's just it's just interesting we were on one hand you like you kind of like we shouldn't be accustomed to this um it's so hard when
[02:55:47]  the both lines keep on moving right you could say that the baseline is way better now than it used to be so when you can talk about no build in the past you could
[02:55:55]  be like no like like you needed a build and now maybe you don't because the the the floor is so much higher but yeah i mean i was still able to break components
[02:56:03]  up into multiple files right like i just include a script tag i don't need it right everyone one file i still got modularization right but i don't know there were
[02:56:15]  there were things part of it was uh it was solid specific and you know needing to to wrap things in functions that i didn't really want to have to think about but
[02:56:30]  i don't know right so like it it makes sense for why there's a desire for this reset but i wonder if i can we get there without inventing a new language
[02:56:46]  essentially is is kind of like thing like we've been forcing against the language um this whole time right like it it's like as you mentioned earlier is it about filling the
[02:56:55]  holes of abstraction so yeah i think we can hide some of it but i don't know if it's going away right like with um because if you're going to do no
[02:57:13]  build with a bunch of different modules right even if your module graph is fairly shallow like you're going to end up with with network waterfalls and network waterfalls are a
[02:57:23]  bad thing um especially you know when you're you're talking these um these devices on on slow internet it's just like this like yeah before the quick optimizer was working properly
[02:57:39]  i had some demos where i was on a slow network and then i'd like click an interaction and don't get wrong quick doesn't actually have this in a preload
[02:57:47]  but it was like it was an example where i had a ton of bundles for something that like you wouldn't expect it and it was like click load one bundle then load
[02:57:55]  three that loaded two like you just like start fanning out um well yeah yeah and so i i actually really admire quick in the the way that they've like launched increment
[02:58:07] ally um marcos marco team could probably learn something from that um but yeah like early on uh i i think i went to the builder website after they had just converted it
[02:58:21]  to to quick and like tried to open the menu and i had like just left my house um and i was uh in the car and so i was like disconnecting from
[02:58:33]  my my wi-fi network and like switching over to um the cell network and it was like three seconds before the menu opened and it was like come on now um right but
[02:58:45]  definitely they're not doing that anymore right they're they've got a build um that is you know determining what needs to be sent and and similar for no build like people
[02:58:58]  will say okay well you don't need to bundle it you know you just create the um the export maps you know preloads and everything it's like well something needs to
[02:59:06]  run on the files to do that and i've heard the argument well that could be moved into our cdns um and and it could be um we actually have stuff
[02:59:19]  like that our resource server that i mentioned is not just a dumb file server like it it does kind of understand the the assets that are on there and processes them and that has
[02:59:33]  been challenging uh in in cases where like it's running an old version of google closure compiler and we try to ship some new syntax that's you know actually supported in all
[02:59:45]  the browsers that you know we um you know need to support and the resource server doesn't support you know that that syntax and so then a new version of closure compiler was installed
[02:59:59]  but um you know it's like you kind of have this like infrastructure and i'd rather have control over that you know a lot of our apps now we we disable uh
[03:00:11]  some of the features from the resource server and like we'll just handle that ourselves at our build time you know we'll we'll make sure that the javascript that's
[03:00:19]  being served is is correct for our users and i'd much rather have that control at the application level rather than outsourcing that to some infrastructure because it's going to work
[03:00:28]  when it works and when it doesn't work you have very limited control to actually fix anything right yeah so i wonder how much of this stuff just comes back to like the classic
[03:00:39]  split between like websites and applications where the people who are asking for a lot of these features are that like there's a comment here about like no bill works well when you're
[03:00:49]  using a jquery-esque library not for full javascript frame applications it's it's i mean vanilla the point is like if you can build an application basically
[03:00:58]  in vanilla javascript maybe a little library here and there and like that's works for you then this can definitely work for you i just i guess there's this question of
[03:01:09]  like can any actual real application be sustained like we have these frameworks and tools for a reason like can they actually be sustained for using like just javascript because obviously it'll
[03:01:18]  be lighter it'll be faster it'll be better in like all those kind of you know at least in theory in all those mechanical ways but like is it i think it
[03:01:29] 's one of those things where um depending on how it's used and a lot of these no build um proponents are also like low javascript components you know low dependency
[03:01:40]  proponents and so in that scenario it can it can work and the um and the downsides you know if there there are are objective downsides you know don't add
[03:01:52]  up enough to to matter enough right um but even so you know it might be in a an amount that doesn't matter but a build is still going to be able to
[03:02:08]  optimize things to a point where build should always be faster than no build holding everything else constant right like if i can if i can minify and and inline you know everything
[03:02:21]  into a single request there are overhead to http requests then um you know your your one file that you're you know serving is still going to be served faster if it's
[03:02:40]  minified maybe not much faster but it is going to be faster so in in a way i think it's kind of a dx motivated thing right like it it no build is
[03:02:53]  not better um directly for the users yeah there there may be some some trickle down benefit you know if if it it truly is like that much better for for your pro
[03:03:07]  productivity as a developer then you're able to ship you know things to your users faster and so you might get a win that way but in terms of yeah it's funny because
[03:03:17]  it's like multiple inflection points there where it's like okay like we the reason we don't build our apps completely in vanilla javascript like just straight on is because
[03:03:26]  of having the abstraction makes it easier for people to like use these declarative patterns other people understand other people's intents and do that so like like if on one hand
[03:03:36]  the dx you know improves of not worrying about these build structures and all the setup but then on the other hand like at the point another piece scales will you hit it again like
[03:03:45]  it's i wonder if there's like too many moving like rising pieces that trying to like jump from platform to platform is like very difficult when the floor keeps on rising or
[03:03:54]  whatever you know uh yeah it's it's it's definitely interesting i actually there's a comment a while ago that i wanted to actually throw up on the stream and see if
[03:04:08]  you had an opinion on we're at q a with michael if you haven't uh followed so if you have any questions sorry would you mind if i took a quick
[03:04:14]  break to use the restroom real quick i'll be right back okay fine uh all right yes i'll be super quick yeah yeah because there's a comment here that about i saw
[03:04:25]  this about like svelte introducing compilation stuff is a huge win i wish it came 20 years earlier um the thing is compilation javascript frameworks has existed well before s
[03:04:37] velte um elm is uh is is a is a good example of that um sorry this is the question i want stream yard is really giving me a hard time right now
[03:04:53]  um anyways elm had compilation in javascript uh and uh marco had compilation in javascript you know back in 2013-14 um so it was pretty early
[03:05:05]  on then there's uh the thing uh which not coming to me right now uh the there's another js framework uh uh uh what is it the they imba yeah imba
[03:05:22]  um so yeah elm 2011 or 12 marco 13-14 imba 2015 uh svelte 2019 so i there were things out there earlier doing this stuff it's
[03:05:42]  just um yeah sorry let me go back to that other comment that i wanted to to ask uh michael about because it's actually kind of on key with this thing it was
[03:05:53]  it people want to know if the if you have any more secrets behind the the curtain uh marco and ebay like we've talked about a lot of things that that
[03:06:01]  marco was doing very and the ebay team were doing early on and part of this comes from uh coming from a different place where a lot of you know meta was looking
[03:06:10]  at how they could build mobile apps and kind of tie that stuff together when they built react ebay was like how can we replace our java backend with a javascript
[03:06:18]  one that's like fast enough to actually render our pages and you know so a lot of things mattered like streaming it was i think in terms of javascript frameworks and
[03:06:27]  open source first for streaming first for uh uh i mean technically dust was first yeah is dust is dust the framework but no it's a templating language yeah uh um what's
[03:06:41]  another early let's say not necessarily first because other people um using compiler like a single file components uh format uh there's riot also back then but i i don't know
[03:06:55]  how many yeah i don't know pretty early on in that thing may have been earlier than us yeah right it was around the same time period single file components compiled so compiled framework
[03:07:08]  um partial hydration and islands um uh obviously uh like there's a lot of innovation in the lasso bundler um but yeah the question is is there something we haven't
[03:07:22]  seen um you know is there any more secrets behind the thing you know behind the door so we're saying something outside of marco that really we should know about and like
[03:07:36]  everyone should be doing i don't know um yeah i mean it's a tough question i was just curious if you had anything to add to that you can went to just
[03:07:56]  me yeah i don't this is kind of like outside of marco so are you still here ryan sorry my stream yard finally died on me okay i don't know if
[03:08:20]  i was live during uh that or not but i was just kind of like stumbling around i don't know um yeah i think there's um streaming all right our
[03:08:52]  trolls back so i'm just looking at the comment there's some comment about rscs being fast it was a funny one anyways um um yeah uh yeah i don't know
[03:09:04]  that's a tough question do we have any other let's move on let's see yeah we've had compiled templates for for ages um but yeah i i'm just catching up
[03:09:14]  on chat because it it seems like people are talking about some old text yeah coffee script yeah okay uh let's rebrand no build to compile yeah sorry i was missing comments
[03:09:30]  i'm realizing now just because of how bad stream yard was choking on me all right it's all good now now i can actually see stuff all right um i meant something
[03:09:46]  marco we haven't seen outside of it okay yeah okay so this is yeah so yeah this is the other question is there any more secrets behind the behind the marco wall
[03:09:55]  some new text that that that you or is this stuff the funny thing is a lot of marco stuff was always out in the open people just didn't realize was there
[03:10:02]  we've done a much better job talking about it we're hiding um anything yeah yeah okay so we're good we we haven't talked about serialization at all i think that
[03:10:21] 's something that's interesting although quick's doing some very similar stuff um yeah i mean we briefly talked about i was like how did marco not have the dollar sign so
[03:10:32]  oh yeah and like i guess it's a fair question i just want your thoughts on like resumability type stuff in general because um like it's tricky how do we figure
[03:10:45]  out if it's worth it because the thing is we're trading one serialization cost for that happens on the server that slows down server rendering for execution costs in the client
[03:10:56]  like we don't need we can shrink the amount of javascript um without like you know fairly effectively regardless yeah because dominic last week was talking about how they could eliminate
[03:11:07]  parts of their components but they would still be doing a fairly normal hydrate right um step with that right like we're running stuff yeah um yeah uh you would be able
[03:11:27]  to come up with um with cases where i think you'd be able to come up with cases where resumability is slower than just hydrating um now if you defer
[03:11:46]  that work then you know maybe um maybe it doesn't matter but if you defer hydration you know which you know selective hydration um deferred hydration you can do i mean not
[03:12:03]  exactly but like i almost felt like early quick was almost doing deferred hydration hydration yeah well you in an article i said that they weren't truly resumable and um mis
[03:12:18] co got offended but the truth of the matter is they weren't because they were a vdom library and there still are but what the final piece and they've really acknowledged
[03:12:29]  this with it was when they got signals in that's when it actually became like completely resumable but ironically to get that benefit you have to write quick the way you write
[03:12:41]  solid if you write quick the way you write react then you're back to like you know what i mean i do dude does the audience know what i mean like you're
[03:12:50]  back to like re-running components on yeah but yeah so yeah it's interesting because you don't rerun you don't rerun everything immediately right but you still needed to
[03:13:08]  to rerun the component when the data changed so like is that really all that different than like waiting to hydrate until the data changes right obviously now with signals you don
[03:13:20] 't have to rerun the component the other things that are non-related don't have to wake up and now the the achieve that but like the earliest versions of of quick
[03:13:29]  you could say were were like that so yeah i mean it's it's it's a tricky problem and it i don't know so but so i mean we've got
[03:13:38]  this whole matrix of like you know potential optimizations where you have like deferring work uh eliminating code which eliminating code also eliminates what's actually executing but then you know also like
[03:13:52]  trying to make it so code doesn't need to execute to become interactive right and like these are all kind of different approaches to the the cost of you know initializing a
[03:14:04]  server rendered app um and it's it's interesting yeah um yeah i mean there's trade-offs involved with with every uh approach we've taken an approach with marco um
[03:14:24]  where we're trying to eliminate as much code as possible trying to make it so that as little code as possible is needed to be executed but we're gonna do everything eager
[03:14:36] ly um right and i mean that does have some trade-offs right because it's it's not a instant startup necessarily right right um but once it is booted up
[03:14:55]  it's it's done right like you know we talked about you know the the hacker news example with like the what it was 1.6 kb or whatever right like
[03:15:10]  that's that's all that ever gets loaded like everything's there yeah one of the things here is actually this is for our resumable solutions we're talking about this isn
[03:15:21] 't actually true we don't rerun the compute the we only we don't like yeah okay we rerun the computed computations but they're isolated from like how should i
[03:15:30]  put it during hydration time period we don't i guess it depends on what part of the competition you're talking about like like the with the with these resumable frameworks
[03:15:40]  we run the computation on the server which means we track the dependencies so we don't have to run them on the client so we actually know the data dependencies at startup so then
[03:15:50]  essentially it's only if something changes at that point that we don't actually we we change the we yeah if something depends on something then yes it's going to continue down
[03:16:01]  the path but we don't actually end up in a place where like adjacent things that have nothing to do with it will rerun so so this is where like the differentiation comes
[03:16:12]  in because like we know the dependencies before the app update starts off where like what was happening early quick before they had signals is it was literally like a like a like react
[03:16:24]  like re-render the component this data over here this data here it's almost more like you right like they had they did have a reactive system that was feeding into a v
[03:16:33] -dom yeah yeah um and they still have that as a fallback but yeah exactly but it's like one of those situations where like like the whole thing kind of gets ent
[03:16:41] angled at that point and like all you needed to render all the jsx and you need to be aware aware of all the the primitives or computations that are happening
[03:16:48]  instead of just like direct lining it right um yeah in in marco rather than serialize we do have one case um where we need to serialize uh dependencies down but in
[03:17:05]  in the vast majority of cases the um the code and we saw that compile code right like count calls double count right so there there actually aren't the the code kind of
[03:17:19]  implicitly has those dependencies because count saying when i change i'm going to pass this value to double count and therefore you know it's changing but yeah you need those those dependencies
[03:17:31]  created in some way that doesn't have to do with you know running them right yeah it is yeah it is it is interesting because yeah when i was working on that other
[03:17:45]  resumable thing getting without the dollar signs trying to avoid some level of the hoisting it is actually i look at it it is kind of the marco solution largely
[03:17:54]  what i was playing around with where like you you don't have to worry like you can you can do like a minor replay of not replay like you're not hydrating
[03:18:06]  it you can just create it with the right value on the fly as you go and then suddenly all the need for the serialization boundaries like you don't need the dependencies all
[03:18:15]  the way down because you just need to know that when this thing change changes like as long as it can wake up along those lines like you can do it it's only
[03:18:25]  the intersection uh where you have the problem right so yeah yeah the the intersections are interesting and that kind of gets into the serialization as well because at an intersection you have
[03:18:38]  to serialize if you want to truly resume you have to serialize you know both these values if they're both reactive right because if one changes you need to be able to
[03:18:48]  work with the value that came you know from the server on the other for the other one and vice versa which is cool because this optimization that we're talking about marco means
[03:18:57]  that you actually reduce the serialization along the reactive graph which is even better arguably because it means less the values actually need to be serializable and which is kind of cool
[03:19:07]  i i just don't know if it's going to be um without knowing about where the serialization boundaries are like what happens if someone just writes code a certain way and a
[03:19:19]  value can't be serialized like well so yeah yeah um that that is something that we have been um looking at um we we have an approach that we're we're
[03:19:33]  going with um but it's not perfect um uh but yeah that so you asked about you know the dollar signs and everything right and right i think it's it's pretty fair
[03:19:48]  to say that like okay if you're gonna access this value you know inside an effect or inside of that handler like it has to be serializable right because we're saying
[03:19:58]  that's gonna you know those things are gonna run on the client that and you know the stuff may not have run but if you've just got two values that like happen to
[03:20:06]  intersect because you use them in the same expression like enforcing that to be serializable doesn't feel as great because like you know you i that's not something you want
[03:20:21]  to think about yeah um and so we've been we've been it we we have a way to to serialize the unserializable um that sounds great and uh i
[03:20:42]  mean it's it's pretty simple right you just like you replay it right you reply yes it was that was like the the that was the basically when i did that that that
[03:20:54]  document about resumability a couple months ago i was at the extreme like what if you did something that acted like resumability replayed everything this is like what if
[03:21:04]  you could you know memoize most things you need to but replay that like how would you know yeah um so so what we're doing is we're doing some compiler analysis
[03:21:18]  which isn't perfect um but we um and we're making a few assumptions about that you're not like mutating global variables so there's certain like global functions that we're
[03:21:31]  marking as like safe um functions essentially um so like if i don't know what's uh an example uh but like math dot round let's say math dot round right yeah
[03:21:55]  that's going to put out something that's serializable yeah right um anytime that you have a binary expression right every binary expression in javascript is going to resolve to something
[03:22:08]  that's uh serializable okay um and so we're able to to know some of these things okay these are definitely serializable um but we we also can and we don
[03:22:20] 't do a whole lot of analysis outside of your javascript um or not javascript your marco file into your javascript files right so when you import something
[03:22:29]  and like call a function like we have no idea where that is right um and so we have to treat that as like well maybe this isn't serializable um now it
[03:22:42]  so so then it depends on where that's used right like is this used in an intersection if it's if it's not used upstream of an intersection then like it doesn't
[03:22:53]  matter because it's never going to try to be serialized but maybe it is used upstream of an intersection or maybe it's passed to like a dynamic tag where we're
[03:23:02]  like who knows you know this could end up needing to get serialized inside that dynamic tag that we're passing it to um so what we can do is we can wrap
[03:23:13]  that value um basically put it into a lookup to say like this is how you can replay it and so when it hits the serializer if it can serialize it
[03:23:25]  you know as you know using the the normal means then it does that it doesn't go down that path but if it can't then it will um basically inline code to
[03:23:38]  to replay that value at the the time that it's being deserialized it sounds no that's smart that that's something that it's like a compiler runtime kind
[03:23:51]  of handoff um mechanism yeah and it's something you can do with the knowledge you have from the marco yeah i mean it's not it's not perfect there's there
[03:24:00] 's trade-offs um with it but it means that you don't need to think about what can be serialized and what can't um be serialized and most of the
[03:24:09]  trade-offs are around performance in a way that i think is not gonna matter um in in real world situations so um i'm not too unhappy about it but we we
[03:24:20]  had considered going down the path of like quick quick has that um the the dollar sign function um we pass something to it and it causes that to be split out into a bundle
[03:24:34]  gives you a q url and so it's essentially replaying too because it's like you know here load this code um right and so it's a very similar approach
[03:24:45]  to that um but we've we're just doing it automatically and i the the big thing really was those intersections um because if it was just this is used in an event handler
[03:24:59]  or in an effect like i think that would have been perfectly reasonable to reason about like you know we need things to be serializable across this boundary but um yeah if if
[03:25:13]  the value that you're passing to a child component intersects with something and like now that needs to be serializable and like maybe the child component is a third-party component
[03:25:22]  and it changes like its internal implementation to introduce an intersection like now that's a breaking change like that's terrible um yeah i mean this is this is this is a hard
[03:25:34]  problem problem because you're trying to have solved this at such a granular level and i don't even know if we've like on the server component side of things have solved this
[03:25:45]  at a coarser grain level uh the thing about server components though is like that boundary is very clear you once it comes fine grain it's much and like okay people
[03:25:56]  are still struggling with it i understand that i i totally get that but it is a much clearer boundary than like we serialize the stuff that we need to and we have uh
[03:26:08]  heuristics to figure out exactly what needs to be serialized like you know i don't know it's just yeah yeah no yeah i i'm going to talk about
[03:26:22]  this a little bit uh this week of javascript because i've been i've been struggling ryan florence had a tweet and i it's going to be a
[03:26:28]  continuation of of that but yeah i it seems like all we talk about these days is serialization um like it's it's definitely i didn't get to catch your full stream
[03:26:41]  on it i i know you had a stream that like the the thumbnail was just like serialization yeah oh i was yeah i want to catch up on that i i think
[03:26:51]  it it was tangentially related to what i'm talking about right yeah yeah um yeah i've i've been mostly focused as you uh that one was more about uh and i
[03:27:03]  gotta thank dylan for some help here he's been giving alexis some tips solid 1.8 release we actually built uh our first like instead of just having serial
[03:27:14] izer as like a thing that we feed to it became the the core mechanism behind our streaming mechanism thing so the serializer actually is the thing running the stream now and we built
[03:27:24]  the deduping cross flush serializer yeah yeah so it's it might not be as optimal some of the stuff we're thinking about um but yeah that's an interesting piece
[03:27:34]  too like you already flushed this thing out to the client but oh i referenced it again like yeah yeah so we built a very dumb version where we're just allocating
[03:27:45]  an array of references in the client while in the serialization code but it does the trick and uh uh yeah dylan was a big influence help uh alexis kept on
[03:27:57]  uh you know tapping the shoulder a few times to kind of get some ideas on stuff he's pretty happy we landed um because the the core base performance of the serializer
[03:28:06]  didn't degrade very much it's still um falling you know slightly slower than uh warp 10 or whatever uh but but you know still in a pretty decent place yeah i'm
[03:28:16]  a little bit sad because dylan started on a library that we were calling valav yeah which is like you know value forward and backwards um but um we we ended up
[03:28:31]  needing to make some optimizations that were marco 6 specific and so we pulled it in but that would have been i think a a good library that you know like warp 10
[03:28:41]  could be you know shared right across to be fair uh um alexis's work for zero valve the underlying serializer for solid is not solved but it's not solved
[03:28:56]  specific and you just added a plug-in api this week to support yeah i saw that so maybe that can carry the torch of that idea somewhat so yeah um that was
[03:29:07]  one of the things that we were uh we considered something like the the plugins um i know meteor had a plug-in uh api for their serializer that was um
[03:29:21]  you know interesting ejson i think is what they they were calling their thing um but with with all of this like again coming back to like the boundaries not always being like
[03:29:36]  super intuitive like the like yeah you can make it so the the serializer knows how to serialize this like new value you know this this class or whatever um but like you
[03:29:51]  shouldn't have to ideally you shouldn't have to think about whether or not you know this value is being serialized i i think is the ideal again there's trade-
[03:30:04] offs involved with like going down that route and we're we're mitigating some of them by adding compiler analysis into the the mix but it's not fully mitigated yeah i
[03:30:15]  i can't yeah yeah i'm going to talk about this topic a bit more i i've gone full circle here because i started from a position and i was very strong
[03:30:23]  about it last week in my stream where i was like like people need to know that client server divide they need to understand what gets serialized because then they can feel comfortable if
[03:30:33]  you get still important to to understand that it is there but the problem is as you mentioned the downstream change breaking adding interest like you act this is actually an impossible task for like
[03:30:47]  from an api level for a human to actually be able to to see it unless you literally like if the problem is it's one of those situations if you tell everything
[03:30:56]  can be serialized well then everything like sure then everything has to be serializable but like you're not like like you're not winning anything there either like it's it's
[03:31:05]  it's essentially um there's i don't think there's like a great solution from an api level like obviously compiler can do smart stuff but like you can just never completely
[03:31:15]  trust that's why you know say guarding secrets from the source makes sense and obviously we're doing that additionally anyways because you can't be sure that everything works properly but it
[03:31:28]  like or as you expect but um you know because people do weird stuff but more so than that it's that like there there is just there can't be i think fundamentally
[03:31:42]  that uh like you just can't know like the the locality of thinking is going to get compromised because someone downstream can change that decision for you as soon as you pass control
[03:31:53]  it's not like um that's one of the things and i think react has added this like taint api right um that like if this object ever tries to be
[03:32:04]  serialized like don't let that happen right and and i think something like that's going to be necessary um for for us because it's replaying values too it's like
[03:32:16]  code that you didn't intend to go to the browser could go to the browser you know if if some unserializable value generated by that code intersects with state then
[03:32:29]  it you know might need to be played in order to faithfully represent your app and then that's what the browser that you don't want there that's why we use compiler
[03:32:39]  macros we have secret dollar sign in blink right which is like i i looked at that actually like the secret and the server um i'm wondering and i actually ryan
[03:32:54]  turnkiss i didn't watch exactly every part of the the stream last week with dominic but he he had mentioned that um and and this is something we were thinking too
[03:33:05]  like using import assertions to say like this this import should like never end up in the browser right and so if it if it tried to replay something that required code from
[03:33:16]  that import we would just be like okay no you know that's that's gonna break um right yeah that's is that something i'm still not totally happy with i'm not
[03:33:26]  sure if there's gonna be like a better um solution or not um yeah we're still kind of thinking about a little bit but i think we have a plan that we
[03:33:40] 're moving forward with if if nothing better comes up yeah i what i was actually just playing with just now is uh jay larky shared the uh the um conversation that
[03:33:54]  we missed last week talking about this is the taint unique yeah reference api but this is mostly i guess a runtime reference but yes i think see i said like it solves
[03:34:05]  the secret this is this is very limited though because it's tied to a specific object and this is one of the challenges too right like because if you clone that object or
[03:34:15]  you like grab something off of it it's no longer tainted right it's just tainting that object reference oh okay um yeah well it's right there in the name
[03:34:25]  taint object reference um yeah i'll throw this in in in here yeah this is an interesting one because actually i i i this tells you how quickly i changed my opinion
[03:34:35]  because here i was like yeah this solves you know this works for the secret but like i think there's more about serialization boundaries on further thought i'm i'm i'm
[03:34:44]  more okay with these type or category of solutions being the ones that we use because i i don't think we can actually guarantee um yeah so secret does it just not allow
[03:34:58]  that value to like like if i put a string in in secret it's not going to allow that value to be serialized is that the i i i think it goes further
[03:35:11]  than that i think it like on this yeah i mean what about values derived from that value yeah do you know what i i i i don't know if secret does exactly
[03:35:23]  what like the it it it's not gonna yeah it's not because i we didn't have closure extraction and stuff basically secret i think it did something really simple where it actually
[03:35:37]  just straight out like it was more guarding the other side where it literally just undefined things like it just like like it's still there on the server but yeah i
[03:35:47]  i don't think it actually now that i think about it i don't think secret does what i was saying it doesn't like throw an error or anything you just get und
[03:35:55] efined for the value like yeah i i i believe so i think i think we need secret plus taint to actually cover the whole thing you need a compile-side solution
[03:36:05]  to to to to handle like it accidentally getting into like i think it was we were combating the friction of it getting into client builds and in the client it's gone
[03:36:16]  it's doesn't there right but it doesn't actually prevents uh it being sent across serialization boundary now that i'm thinking about it yeah you need both you need both yeah
[03:36:25]  for yeah and what i was talking about with like the the imports is actually more about the the code getting into the bundle and less about like yeah yeah so you kind of
[03:36:36]  go like do both sides uh of it but then there's also the challenge of like should this be like if i taint this object is it just the object that i'm
[03:36:46]  tainting or is it like yeah everything that's derived from that object right like i say the user can't be set but then i grab the password off and like
[03:36:58]  that gets serialized right like the the react taint reference isn't going to handle that and in fact it can't even taint a string right it can only taint
[03:37:07]  an object reference um and think about it from an implementation standpoint if you're going to taint the string that means every string you serialize you need now need to like go
[03:37:17]  compare against a list of tainted strings right like tainting objects is is relatively cheap from a performance standpoint yeah primitives is like uh a whole different like the funny
[03:37:32]  thing the thing is the string is probably the most common thing you want to hide um right so it's it's tricky whereas with um i i yeah with the approach that we
[03:37:47] 're taking with marco i i think we could relatively easily taint a string but it's then like a question are we just tainting that string like if i
[03:37:59]  pass that string somewhere like maybe i pass it to i mean i'm going to scenario now where it's like bad but i pass that secret to a fetch call like you don
[03:38:10] 't want that fetch call to be tainted like presumably the data that came back from that fetch call you want to be something that can be serialized but there's other
[03:38:19]  cases where um you know maybe you derive something from it and it still contains data that like shouldn't go to the browser you know so it's like a question of how specific
[03:38:35]  with those values are you and and and again if you're doing compiler tainting then you know you you need to understand the the flow so you know like we could
[03:38:48]  taint this string such that if you try to serialize like this string like that's going to be a problem but if you pass it to an identity function that like just
[03:38:56]  passes back the string well now like you know we've lost the taint on it so yeah yeah so tricky stuff still uh i don't know i don't know exactly what
[03:39:08]  we're going to do there but it's important and that's one of the things that we we still need to figure out so anyway michael i think i'm gonna
[03:39:18]  let you go here so i can finish up our stream on i got a couple other topics and this week in javascript aren't you no i i don't know if
[03:39:27]  i have that much for this week in javascript so it's good but yeah we we definitely kept the conversation going for for quite a while so i it was great having
[03:39:36]  you on this is what i i wanted i wanted to just pick your brain about like random subjects not even random stuff we're working on um to add a little bit of
[03:39:43]  additional insight into these problems and problem spaces because i think it's valuable for people to get some perspective that way um anything you want to shut out before i let you go anything
[03:39:54]  additional we talked all about marco stuff but you know um something i'd like to see uh really delved into if you're taking suggestions for future streams uh is uh
[03:40:05]  the new visual copilot from from builder io okay um yeah it's probably a very different thing than uh you know you delved into but um i i'm i'm
[03:40:21]  very interested in like what's happening on the the ai front um and how that intersects with um web dev um skeptical of a lot of the solutions that exist uh right now
[03:40:35]  but i also do see a lot of potential uh there um so be cool to to hear more about that if if one of the builder guys are willing to come on yeah
[03:40:47]  no that's that's a possibility um uh yeah i haven't seen that yet so i think that's pretty cool um anyway yes thank you for joining us today michael um
[03:41:01]  i uh you have a good one and until next time i hope to hear good news about marco six yeah i mean soon yeah see ya see ya okay yeah all right
[03:41:20]  so a couple things i want to cover including this week in javascript but it was uh we actually got into the serialization conversation a little bit further than i than i
[03:41:30]  uh thought thought we would be uh initially um but yeah uh sorry question came on here what was the use of data derived from taints making a sense medical records yeah i
[03:41:47] 'm i'm i'm not sure this is one of those things where it's it's it's it's tricky because like obviously there's like string type stuff like direct
[03:41:58]  secrets and you can understand like why you wouldn't do that but when it comes to sensitive data um yeah i i mean even applying the taints might be a little bit tricky
[03:42:12]  even in that case when you're like if you're pulling it from data like you know like you're dealing with multiple users with partially tainted data i think this is
[03:42:22]  this is this is still like a challenge um in general to think about i we'll talk about that in a bit more in a minute yeah yeah yeah i'm not i
[03:42:44] 'm not i'm not sure i mean this is the it's all you know theoretical and so someone does something uh okay what did i want to talk about i'm trying to
[03:42:53]  think what i'm gonna do on time i do have some stuff for this week in javascript it's not the biggest um i do want to continue my my talk about
[03:43:02]  serialization locality of thinking it very ties into that conversation um but i i will actually want to save that for this week in javascript because um there's a
[03:43:12]  relevant thing to that did we settle no um i mean we there's a few places where we got corrected that marco wasn't absolutely first but anyway um yeah something i
[03:43:34]  wanted to talk about was um i've been working on solid start beta 2 and um people are obviously you know i gave that beat talk it's now out there in the wild
[03:43:47]  there's a separate talking go check out and you know it's been a couple weeks and people are like okay so when when is beta 2 coming out um what's going
[03:43:58]  on you know how can i help and the truth of the matter is while the you know and there's this rebase um and i want to solve client component stuff we've
[03:44:12]  kind of solved that and we've even built up a middleware system i don't know if it's going to be like we're completely happy with it but like we we
[03:44:18]  have a lot of the pieces in place but one of the big parts of beta 2 is actually pushing the code that would belong in third-party libraries back into third-
[03:44:28] party libraries and that means a lot of the data apis around routing actually belong back in the router and because i'm also trying to accommodate a future where we have stuff like
[03:44:40]  server components i i've been playing around with these data apis and we've been talking about them here and there on stream but my problem is we don't wait for
[03:44:50]  solid 2.0 for this solid star beta is more immediate than um than 2.0 uh milo's back at uh university and he's also been working a lot on
[03:45:03]  the you know around the signals uh tc39 proposal so we haven't really pushed the state of the art there very much i haven't been able to focus on it because
[03:45:12]  i've been working on like solid 1.8 which is a lot of fundamental pieces i need for both future solid start work and current solid start work for the beta so i
[03:45:22] 'm trying to think been working on trying to come up with route data fetching api this sort of continuation of that stream that i did a few weeks ago that will
[03:45:35]  work in solid 1.0 time frame the the signals proposal isn't public yet hopefully it will be soon we're working on implementation but still private repo um dominic uh who
[03:45:47]  we had on last week was doing a lot has been doing a lot of the actual implementation work um but yeah it'll we talked a little bit with dom about it last week
[03:46:01]  um we'll talk more about it in the future but let's um i i i kind of like sketched up something that's kind of the beginning of an idea here
[03:46:14]  for how to approach um routered api data loading you guys have probably seen some of this before but i've been working a lot on actions i already talked a bit about
[03:46:23]  this cache function into create async for solid 2.0 but it occurred to me obviously that and this key here that i'm talking about for could be optional you could
[03:46:34]  just use the argument by default and the function reference for the cache identity and we could add other fields to this but the idea is you could just feed that cache reference into
[03:46:45]  a create resource today and essentially this is how like solid query works under the hood already like um most libraries that use um solid today basically add their cache layer around the fetcher
[03:47:02]  add you know some other calls around and they get everything working and then if we have this cache layer we can you know have a refresh cache all or key and you know
[03:47:12]  it's fairly straightforward the problem with resources today though is why i'm not sure that i can get to this api um because there's you want this cache behavior but you
[03:47:23]  also want to have like the deep diffing store stuff and the fact that resources have um mutation apis like mutate and refetch and that um hydration too i think
[03:47:36]  there's like an on hydrate thing um i mean i guess we could use the new serialization apis in 1.8 to get around the hydration issue but um essentially
[03:47:48]  i'm going to look and see if this is feasible in the 1.0 time frame um but this like alternatively i could just wrap this behavior that i'm talking
[03:47:59]  about inside create loader and just come up with basically something that looks like uh create uh resource but without the mutation apis and it builds the cache in and this is basically
[03:48:13]  what create route data is um in solid start um but essentially just um it it's these pieces put together so this is kind of where i've been looking at because and
[03:48:28]  i'm adding this to the router because the router needs to be aware of the cache so it can do the invalidation on mutation and navigation so i i believe this is where
[03:48:39]  it belongs it's not in the core solid library but rather something specific for the router of course you can choose not to use the router's cache mechanism but then you could
[03:48:49]  use um you know solid query or whatever i think for 1.0 time period i'm probably not going to be looking at preload but you know continue to use um route
[03:49:04]  data which means that this might not be as beneficial um but this is this is just kind of like a uh proposal because ultimately what i'd like to do is implement this
[03:49:15]  and then create resource that can get replaced with the new async primitive when it's ready because that way caching here is mostly about um deduping ultimately i'm trying
[03:49:37]  to get to a place where i can standardize on let's get to the get to the final proposal because or let's get a little bit further in here because um
[03:49:48]  ideally what i'm thinking is we get to a point where we get rid of the route data uh like data loader on the router and go to a place where there might
[03:50:03]  be a preload stage where you can just use cache functions with the route data directly and then you know use our async stuff in the components um a big part about
[03:50:13]  this is stuff like cache are designed to be at the definition site of the async operation as wrappers not in your component code um so kind of separating this out so that
[03:50:27]  in your component code you know you can you can just use these functions as is um the reason we still have these wrappers generally though even like if there's a create
[03:50:38]  memo or something is that the challenge for a lot of this stuff is that when you read reactive props we do need a wrapper at the call site not at the defined site like
[03:50:51]  id needs to be tracked it's not being tracked here it's being tracked here so um it's not quite as clean in a reactive environment um but uh it still like
[03:51:07]  serves the purpose so to speak so as i said this is very current solid it's basically create route um data um so i'm not particularly like this this fits in and
[03:51:26]  gives us a clear path here um for you know the initial release um i am going to investigate this though but what i've actually been working a lot on is actions um because
[03:51:40]  the cache is um generally in memory it's not for a cross request things at least i mean i could see a way of like configuring the cache at the router level
[03:51:58]  probably um so that it when it is used inside the component then it can read from async local context and then i like find the right cache location this is this cache
[03:52:09]  is as much um a consideration for deduping on the client as it is on the server one thing you have to understand here is i'm trying to design an isomorph
[03:52:19] ic system that works without server components or with server components it's kind of it's weird to me that like we come up with all these different rules so yes by default this
[03:52:31]  is the lifetime of the of the request on the server and the lifetime of the it's could be tied into the uh deduping of the app on the client details
[03:52:42]  on the cache life on the client is a little bit working through but just kind of mostly seeing if mechanically this api is possible to achieve as i said for now we
[03:52:53]  could just use create loader and it maybe you know makes more sense but the the reason i'm considering this is i'm i'm looking at how this could interact in
[03:53:06]  the future with stuff like server components so one of the things that i was thinking about again is what if we could define an action basically anywhere right and then this action be the
[03:53:19]  thing that you pass to the component or the button in this case form action my action and you could use a native element not a not a component like capital f form you
[03:53:28]  could do lowercase form and this could all work and um yeah i i think i think there's potential here um oh hey just got a raid um what do we got purple
[03:53:45]  did i get that right purple elf um thank you for the raid um i'm just talking about potential future uh data fetching apis for solid router which would then show
[03:54:06]  up in solid start so um just kind of i'm getting into the this action api the benefit of having an action api and i have a a demo of this
[03:54:18]  showing it working in a minute is that your base components are actually native components instead of like our native elements of components so like they can be used in server components or in client
[03:54:31]  components the same like it's not a consideration so like i was playing around today and i realized that i could make an object with a two string and like the the attribute
[03:54:45]  would actually get serialized to the to the so like in a node.js situation it could still work um if this function here was a server function because server functions have a
[03:54:59]  url so if we could forward the url from a server function through an action then the proper url would get put in the form which means it would still the action
[03:55:08]  would still work even with no javascript enabled but what's also interesting about this api is if you do have the client side router but this is not an area
[03:55:16]  that gets hydrated this also still works because um even with non-server functions i know this kind of weird situation because if we can come up with a hash a unique id
[03:55:28]  look up on the string of the action we can use event delegation at the top level of the document the same way we did with anchor tags to actually find the right action
[03:55:36]  and then run it client side so something that we can do with this is actually i realized i could take the function that you pass into it and take the string of it and
[03:55:48]  hash it and use that as the identifier on the component and use that as a lookup so we'd be able we'd be able to uh essentially um have an ap
[03:56:00] i where we have an actual object that has properties and things on it as an action and then have it work directly as an attribute in both server component node.js and full
[03:56:11]  client side um things and what this lets us do is yeah as i said define an action anywhere again like cache at the at the definition side and then in your components use it
[03:56:21]  directly in forms or form buttons or with use action you get a submit function that you can just call it directly um with with the arguments actually i don't know if this
[03:56:32]  is a spread i think that this might be limited to single argument um with the api we're looking at and what an action is as i said is it's just this
[03:56:40]  thing that feeds into use action feeds into the forms or feeds into use submission and use submissions which are data to tell us about the temporal state of the action and again it
[03:56:53] 's key to action so you can you if you define the action in a file and then in component a submit the action component b can do the optimistic updates um without having to
[03:57:07]  like pass props around or whatever you can have disconnected pieces of the ui handle the optimistic updates and it because we're using this object everything works properly with typescript so
[03:57:19]  like every like all the actions are and everything are properly typed um so um yeah it's kind of a how do i select url well what i'm getting at is the
[03:57:34]  url if it's a client only action it's just going to run whatever's in here it could be a post it could be whatever right so like there is no
[03:57:43]  url like the the we're just going to intercept the the the event take the identity which is basically our pseudo url do the lookup and then um just perform whatever
[03:57:57]  is in your action function there's nothing in this one but it could be just like post to some api or whatever if it's a server function server functions uh we
[03:58:06]  innately put urls on the server function so as long as the action knows to look for functions that have dot url like it uses that it can take that url
[03:58:16]  and that url be the thing that gets encoded into here so we actually um the method could be set on the form um what if i well this is this is
[03:58:32]  an interesting question on the delegation we were already i guess in this zone when we had anchor tags because we moved to capital a but we used to have for a while there we
[03:58:42]  had lowercase a that delegated all the anchors and i'm am suggesting a move back to lowercase form and lowercase a one of the biggest pains of these things
[03:58:51]  is having to import links and forms all over the place um and there is yeah i i think the base url could be used as a way of of uh of separating
[03:59:06]  them but if you have two different routers within the same zone it's a problem i just haven't come across a use case why you'd want to do that um because
[03:59:14]  you can nest route definitions why do you need separate routers you just need separate routes but if there's a use case i'm interested but yeah a lot of this hinges
[03:59:23]  on basically the expectation of like being able to delegate like we talked about uh when we added it to solid the anchor delegation which is as i said still there today um under the
[03:59:35]  hood is like setting an element for the router which delegates up to instead of the document but then you have um you know portals and other interesting things to consider with but
[03:59:48]  so like technically i think it's solvable if we can find a way to assign an element for for the router perhaps but i'm hoping that this that scenario just isn't
[04:00:01]  a thing that we have to worry about um what but yeah what i'm getting to here what i'm trying to show here is that there's a symmetry right because you
[04:00:13]  could have like a get to dues which is caches you know fetch to dues and then you have add to dues which is an action that has this like post to do you
[04:00:22]  know you know action and then essentially um like this happens at definition side and then you can go on and then use it in your app like here's an example where i
[04:00:35] 'm using server components so like i'm just using react use server syntax here if you go cache async use server fetch from the database action use server you know do some mutation
[04:00:50]  i i would expect you you could just define this in one file and then in todos.jsx you could import those methods and use them in your component like maybe as in
[04:01:01]  a form or as part of a resource and what i i'm trying to say what's cool here is todos.jsx here doesn't necessarily have to be a server
[04:01:12]  component a client component like it could work in an app that was just all csr only doesn't even do ssr it could work in an ssr app it
[04:01:24]  could work in an app that does server component type situation with with partial hydration the api on this side can stay the same and then because we define you know these as
[04:01:37]  you know server um fetchers and act and actions it works in all the models this is basically the the sort of thinking behind this um like it doesn't actually matter what
[04:01:51]  kind of component consumes it i'm missing oh you're right i am missing an equal sign in my in my maybe that's why i didn't syntax highlight like properly i
[04:02:16]  always wonder because there's jsx here if it's no if i put ts to the it seems weird it highlights differently in this i'm just gonna go back to jsx
[04:02:27]  it seems to highlight in a happier form not perfect anyways um this is this is just the the rough idea um as i said i feel that the action api is more
[04:02:44]  um doable that than the fetch or loader side today i made a code sandbox where i was playing around with this example uh it's it's a to-do's app
[04:02:55]  with suspense and transitions and data loading it doesn't do the form thing i'm just using submit directly using use action here in fact for this simple implementation that i just put
[04:03:05]  together here use action um is actually just returns it straight through the reason for that is that um the reason we need use is we need to get the router context so if you
[04:03:18]  build something top level like here where you just define actions then it's um it's difficult to like get the router context so i this is why i need this use i
[04:03:32]  was really debating on if i could like just remove this whole line and just use the action directly like call as a function but because it needs to handle navigation there does need
[04:03:42]  to be a use in the middle but yeah fake api is just like some create delay timer fake fetch with our database is an array essentially here that i'm just playing with
[04:03:54]  that i update data is a very simple uh let me shrink this down it's just a very uh simplistic uh loader thing which is basically just wraps create resource and then
[04:04:08]  i i took uh action with a global submission again this would be tied to the router but just kind of showing that how um these apis could work and then in the application
[04:04:19]  what i've done here is i got i basically imported some stuff from the fake api these pieces could go together imported some of the these like use action use submissions thing
[04:04:32]  and then i wrapped um the the stuff from the database in action and then what which is this could all be defined in a separate pile but the idea is that the process is
[04:04:45]  if we create a loader for our to do's and then we have their submit to do which is add to do i just call it submit to do and then we use
[04:04:55]  submission use that same thing to get the list of to do's that are in flight and then while they're in flight we're going to show a dot dot dot dot
[04:05:03]  here on this example um and then we called our submit to do and we add the new to do here and then again yeah i don't know why they're being weird to
[04:05:15]  me here like they can tell that this is a partial like the types are working i've had code sandbox give me really weird syntax highlighting but anyways we have for each row
[04:05:25]  i put in a update and remove action and then i again use instead of using the plural i'm using use singular submission and again i'm passing the action and then i'm
[04:05:35]  using a filter saying i only want the submission that matches this particular id um for both of these like you get the arguments that you pass to the submit function back through to use
[04:05:47]  as a filter here and then basically show when i'm not removing it so while it's pending we actually optimistically remove a row in this to-do list and then
[04:05:58]  again we disable stuff while it's updating using updating to do pending and then for each of the pending to-dos that are going to get added we we show a row and
[04:06:09]  then i've added that when there's an error we actually can use a retry method so we can actually uh call retry which is something we build into our actions
[04:06:20]  each action has the option of having a retry and then uh that's basically the code um for the example and then in practice it means that we can you know add something
[04:06:33]  here and you can see like while it's in flight this one i i put in the api that one out of three times it errors just to kind of show you
[04:06:41]  what's going on um we optimistically remove immediately um but let's go let's do that again see it kind of float in it aired again i can retry until it
[04:06:53]  succeeds i can add different stuff multi and flight um that was interesting i wonder if i type the same word in it's using the string as the key um i should double
[04:07:08]  check that but the basic gist of this is failed again is that we can handle these form error states and we can you know like it's very much like the the remix
[04:07:24]  style solution look but as i said by having the actions globally like this you have the ability to um basically import them in any file and use them anywhere and also see the
[04:07:37]  current status to show optimistic uis anywhere um anyways it's just something that i've been working on um because if we nail this piece and get a good data fetching
[04:07:51]  thing back in the router that's pretty much that and the the proper uh server component um not server component sorry the proper uh server function representation like getting the inline stuff working
[04:08:06]  again right now we can only do it module level um in binti once we get it like working per we have everything we need for solid beta 2. um these
[04:08:15]  are the last things kind of hanging me up right now um i don't know if anyone has any thoughts on this i i think this is very powerful but i feel like people
[04:08:25]  who haven't used remix might not appreciate how powerful like this ability a pattern of um is like this so it's hard to say i mean obviously i'm showing a non
[04:08:40] -form example so this this work would all have to be done with client components but you could picture a world where you know you could put this action directly into the form and
[04:08:52]  it work you know as i said in no js situations or partially hydrated situations all right nothing everyone's silent all good all good yeah i i yeah i mean the thing is
[04:09:19]  there's a question about what urls are safe you you basically the only way this breaks is if someone is in a situation where they try to post to a form that
[04:09:36]  doesn't like basically that doesn't when there's no client-side javascript and it's not a server function like that's the only time the actual url ever
[04:09:51]  gets used right like it's it's only if the client doesn't intercept it and the function was never intended as a server function because if it's server function it'll
[04:10:03]  always be the real url and it'll be server rendered with the real url but if if it's got a fake url like a placeholder because it's only
[04:10:10]  a client-side action then if there's no javascript it'll break it's that's basically the gotcha yeah i mean this is all about getting to there
[04:10:26] 's no context and server components on the server like there's just so essentially you need a solution to avoid prop drilling and the thing that a lot of solutions have come down
[04:10:39]  to is the fact or not a lot of but like react came to is that you just have to fetch uniquely in each case place so you actually need a cache mechanism to ensure
[04:10:48]  that when you know you have nested routes and you know these different sections that you don't double fetch i explained this in my data fetching stream a few weeks back
[04:11:08]  yeah i mean the biggest problem is they're blocking if you if you look at this api um that i that i'm proposing here especially on the on the this side
[04:11:17]  there's no uh where is it not here there's no async components i'm really really i mean trying to get away from it i i did propose at one point like
[04:11:27]  instead of having a create async here which is kind of what i'm keeping in this this version that we could just literally use the cache api to get back fetch
[04:11:36]  user and just call it top level in your component and honestly that could work um i i know how we could write that but the problem is if the props to fetch user were
[04:11:47]  reactive you'd have to wrap it anyways and at that point um it's kind of clunkier and it's it almost guides people to the wrong pattern where this is kind
[04:11:57]  of like saying like look you still need to wrap it in an async you know primitive so yeah but good yeah largely an async component makes no sense i've never
[04:12:16]  liked async um because create loader create resource we already have that but yes this is largely so that the model on both sides is the same and if you look at
[04:12:26]  it the the sneaky cheeky bit of it is i understand react is not putting use server in their stuff that they use in server functions but i'm i'm kind of in
[04:12:38]  a place where i think if you actually let server functions get defined aside client bundles essentially like don't worry because they're here they won't actually end up in the bundle
[04:12:49]  but if you can take a csr app essentially and just have a server function in it like this then like the same patterns apply as long as you mark the places that
[04:13:00]  you address you like hit the database or whatever with use server and you're like yeah like this is on the server it doesn't matter which side you call it from yeah
[04:13:14]  i mean i'm not sure i i honestly hadn't looked at the next solution i was like sitting there on discord today and i like i was on the next channel which is
[04:13:23]  not next js but like the next ideas channel for solid and i was just like thinking out loud and i was like wait javascript is such a weird language this works
[04:13:37]  what i'm showing on screen right here this this actually works in javascript um let me see if i can blow it up a little bit i can create a form i
[04:13:49]  can call call make a function say console.log.hi i can go action to string on it to say like put a url on it like as a thing like
[04:14:05]  define a function on it and then i can set that action as action using set attribute and if i ask the attribute what the action is it will tell me hello um this is
[04:14:15]  only half the problem obviously but i then i realized that like i could just i i could just hash up the function pass to action like as a string and again you don
[04:14:30] 't have to worry about server functions because they'll never use that string because they'll have their own url um that i could come up with a unique enough identifier that was
[04:14:40]  that worked on both sides isomorphically because it would be the same code and um ooh ooh would it be the same code if people put is server inside of it like
[04:14:54]  if tree shaking caused code to disappear out of it probably not but that seems like an edge case but um oh that's interesting but yeah i was trying to find a way to
[04:15:08]  get a unique identity without using our idgen for the resources like something that i could do globally and then i could use that hashly to look up yeah anyway yes yes
[04:15:19]  this is the main thing we want to avoid double dipping and this is very easy when you don't have context to pass stuff through like it doesn't take much to look at
[04:15:36]  uh maybe not this let me open a new twitter page to like look at like a page like um where's my profile look here and like pretend that this is a different
[04:15:48]  route section like pretend that you could just render this route section without rendering this like when you switch between these i am not sure i these guys might actually render the whole thing but
[04:15:57]  if you if you could avoid rendering this thing like you need the user information for this but you also need it down here so when you're just rendering that little piece down
[04:16:07]  here like you could write in such a way that both of these fetch for the same thing and that will cause the ddupe i i can see how this can get out
[04:16:17]  of hand but because we're talking about direct function references the dd should should should work like it's not like people are doing a slightly different api call or whatever
[04:16:37]  yeah yeah like a bling thing yeah no no you need to hoist or preload um waterfall problem doesn't actions don't don't have the waterfall waterfall problem it
[04:16:54] 's only on it's on the get side generally speaking it's like when you're pulling out the data in the view you have the waterfall problem and the the cache ap
[04:17:05] i can't completely prevent it um but the beauty of it is because it's available globally like this is top level you could go to a top level place like a preload
[04:17:20]  function in your router you know at each route section and just call the function with the route parameters directly you could just go back in here and be like okay um i'm
[04:17:29]  just gonna call fetch user in my preload function with the route id and then yeah i'll end up making a resource with it down here as well but you you can solve
[04:17:39]  the waterfall problem by having it at least fetch once higher in the tree yeah i i didn't realize that attributes called to string on a fail which is sweet i mean i should
[04:17:54]  have realized it so if you ever used react and seen like object object especially with web components like that's what's doing it because file path plus var name for hashes
[04:18:08]  instead yeah i mean if i can get it at runtime i'm i'm i'm okay but it has to be the same for the server and client build and i don't
[04:18:17]  know if i can guarantee that because it's like it's it's a runtime thing not a compiler trick i'm trying to do here i'm not sure i don
[04:18:39] 't know i i i'm really optimistic about these new cache header approaches that you see on versell and netlify i this is mostly i'm thinking lifetime of the request
[04:18:55]  kind of scenarios i i'm i'm it's mechanical there i'm not thinking about invalidation though to be fair some so i i got into that conversation about invalidation
[04:19:04]  with someone uh on the from netlify yesterday because we were talking about what if we could use proxies to know exactly what the data dependencies are on the we have
[04:19:15]  a service on netlify called netlify connect which is like a big graphql like amalgamation thing so we're like what if we knew like on
[04:19:24]  the graphql side for connect we know exactly whenever any data updates like we just know like what piece what part of the graph updates and they're like but we don't
[04:19:33]  know what they don't know what pages to re-render but what if they could use a proxy at render time kind of like how solid stores work that you know all the
[04:19:41]  data dependencies for any given page so that when connect gets realizes that part of the database updates it could it could basically figure out the pages that use that data and invalidate
[04:19:52]  to specifically those pages automatically so yeah this is still a zone definitely you know i mean you could use a compiler for this i'm just i was literally nothing i've described
[04:20:20]  here as a compiler trick like i was trying to see if i could do this runtime there's no there's these literally have like use server or server dollar sign is a compiler
[04:20:32]  trick but this i want this mechanism to go in the router which has no does not compile or touch javascript so for for anything to be viable here i i don
[04:20:42] 't want it to depend on um compiler specific behavior if possible signals and hdb headers yeah maybe that's where we're heading signals signals everywhere right like solid plus h
[04:21:05] tmx i mean people will do it i suppose but yeah my hope here is that the base core mechanism can work um without needing to do any compilation type stuff but yeah
[04:21:27]  it's interesting if bundling can change the contents of the function between server and and not like it's only the definition that i need to match but i guess the thing
[04:21:48]  is can we end up with like different names i mean i could trim off i wonder if we can just take the what's in the the the the the curly braces inward
[04:22:00]  i don't know it's interesting if if there's a way to do this like we i basically need to approach it doesn't that's unaware of the bundler or
[04:22:10]  the i guess sorry that's the wrong thing i should have highlighted this i need something that's unaware of the bundler and unaware of the uh come and doesn't use compilation
[04:22:22]  i don't know if that's accomplishable but it was an idea i had um yeah i mean i i i see lots of problems with that now that i think about
[04:22:30]  it minification minification breaks this idea too okay i need to go back to the drawing board on this because um yeah minification breaks it like if you don't minify
[04:22:44]  on the server you'd minify differently they might choose different variables for the minification like different like because which ones are you'll find terser optimizes for g
[04:22:55] zip so it looks at what what other variables are used yeah okay no no dice yeah that's that's not that's that's the biggest thing because they'll literally use different
[04:23:07]  variable names okay well if this doesn't work then uh for the action side then i needed i need a different i need a different idea okay well this is why this is
[04:23:19]  why we talk it out you guys have been very helpful the the cache on the server only exists the lifetime of the request so no this i don't expect this it's not
[04:23:35]  like a long-term cache it's literally just gonna like do a look up off the request object essentially as a way to think about it um okay yeah so maybe scratch
[04:23:49]  that but i i at least want this is why this is why i have these conversations so i can uh kind of see flaws with my thinking i mean obviously the other way to
[04:23:57]  solve this is capital f form but there's something really nice about being able to use native form and because it'll fit right into like form action on buttons as well like
[04:24:07]  this is very attractive if there's a way to solve this i just don't know how to get a stable id on both sides for the same function reference without um using some
[04:24:24]  kind of compiler piece because yeah we can't trust the because of bundling we can't trust the file name or like the yeah yeah maybe it's not doable yeah
[04:24:56]  but i these are not the kind of special cases that i want to do that then then this doesn't belong in the router this belongs in solid core and i don't know
[04:25:04]  if i'm ready for that like that's an option but i'm like yeah i don't i i really try to use the compiler as little as possible um yeah well
[04:25:22]  the what i was saying with the twitter thing is it's okay i'm not saying that you don't refetch it again sorry to go back to example i'm just saying
[04:25:31]  is the problem isn't the subsequent navigations here when i go from here to here i don't care that i fetch user again i care that on the initial load i fetch
[04:25:42]  it here and then i fetch it here the fact that i fetch it twice there i want to dedupe that and what i can do is i say fetch you know
[04:25:50]  i can say that the key is you know the id so fetch user id here runs once here sees that it already exists uses that result but it fetches it here and it
[04:26:01]  fetches it here when i switch to this tab it's only rendering this part sees the fetch of the id nothing in the cache and then it renders it but it
[04:26:09]  still only fetches it once during the life cycle of the request yeah yeah yeah yeah i mean people love fetching in the components i know this is why react went that way
[04:26:32]  i think it's prone to waterfalls but i'm trying to test the idea that it's only my responsibility as far as giving people a way to avoid waterfalls if
[04:26:41]  you don't give them a place to do it then that's on you but if you give them a place hopefully that's enough it also is attractive because right now if you
[04:26:49]  have a route data function there's a bunch of reactivity stuff you build so you can't preload the next route because you're building a bunch of reactivity stuff you
[04:26:57]  know whereas in this world preload would literally just run and could be thrown away and there's no reactivity associated with the preloading of the cache so it just
[04:27:07]  solid router doesn't have uh preload you know where you go over routes today this would also give us that feature you know in a nice way i think uh uh it
[04:27:27] 's still possible the these non-blocking approaches do help a lot for waterfalls because the decision happens lower but it's still possible for someone to do something like in their
[04:27:42]  ui have something where let's say you have a user and you have their list of friends right it's to load both of those you just need the user id you
[04:27:52]  don't actually need to have the user loaded you just need to go give me the user with this id get me um friends of user with this id and let's pretend those
[04:28:00]  are two different separate service requests if it's still possible for someone in their template to go like show if user and then show the list of friends and in that zone even if
[04:28:15]  you're mostly non-blocking um like so so but you don't fetch the friends until you get down to the friends component you still have an unnecessary waterfall there right
[04:28:26]  because you wrote the code that said um it depends on you know don't show this thing unless the user's loaded so like the non-blocking works well for siblings it
[04:28:39]  works well for even descendants that aren't directly underneath the conditional but we're still letting the view make the decision for us because like layout wise you just chose not to show
[04:28:53]  the friends panel until like if there's no users there i'm hoping you're right uh dev in that because um of the fine-grained suspense throwing mechanism uh with
[04:29:08]  along the graph it will just come like people won't make those show components they'll just like instead of guarding they'll just be like they'll just you know have the user
[04:29:17] 's information and then they'll have the the friends information and it'll get to that for loop um without actually having it but the developer would have to not do the show so
[04:29:30]  don't get me wrong yes you're correct with this async model i think the number of unavoidable or avoidable waterfalls would reduce much better than if someone
[04:29:40]  was using like async components like i think it drastically improves the situation which is maybe why i feel more comfortable to be like okay there's this preload thing but maybe you
[04:29:53]  don't need it um and in that world um yeah we're going to tell people to fetch within their components which is insane but i think that's where we're going
[04:30:03]  right yeah that it's unavoidable from a ui standpoint but it's completely avoidable from a data standpoint is what i was trying to get at so like i think
[04:30:16]  i i'm excited to see what our new new patterns um unlock here no there there is an ssr but in server component models there there isn't and you could
[04:30:39]  try and add this although i think react just officially canned it it's just it's it's tricky you can't have client context being read by server components and you can't
[04:30:50]  have server context being read by client components they can't cross so it's a lot cleaner to keep a separate implementation but the big problem is when i was talking about just
[04:31:00]  having this part render on its own is like the possibility of some this parent not seeding the thing for you because it never runs so like that also can break server context um
[04:31:16]  when you get into these kind of architectures so i think we're going into a world where uh the server like each nested section is almost treated like its own page
[04:31:27]  is so is is kind of where i'm getting at um in which case um i mean i could picture people making the mechanism but it's also maybe just better to think beyond
[04:31:41]  the context api for this server's component-centric world i start it down and inside components are only supposed to be used directly by the router for the most part but
[04:32:03]  the router can fetch many levels in parallel hardest way well the router can do the separation i'm talking about where they can route they can they can render this section and this
[04:32:15]  section independently but the the thing with async and i mean i think you can see this if i just like play around for a second is like screw this okay if you have
[04:32:26]  function if we have async function a okay and we await uh b okay what the caller of a sees um like if someone just calls a out here first of all if
[04:32:49]  they don't await it or do something there it's just going to continue on anyways like it's like you're not gonna like next line next line next line it goes
[04:32:58]  and then finally this goes and completes but what i'm getting at is the consumer of a here like um vehicles like let's say they await it like they don't get to
[04:33:12]  do anything until like b and let's say b looks a lot like c like let's see b sorry looks a lot like a like they don't get to do anything
[04:33:27]  until like c is done here like i think what the the router can do is go okay screw this we're gonna do a then do some stuff and in things that are are
[04:33:39]  like unrelated let's say route sections you know we're gonna a we're gonna have like an a a2 and we're gonna have an a3 like great it's
[04:33:51]  parallelized but there's nothing you can do i think about the this chain like the like the the down the tree chain like siblings like siblings could escape it because the top
[04:34:14]  most async component is this like you could actually have not even separate route sections but you could be in a component that's not async and then have three async components
[04:34:22]  in it and then like these could be parallelized but once you're in it you know like you're in it um whereas it's kind of like like fine-gra
[04:34:40] ined reactivity and signals in an alternate model where you're not awaiting and blocking like this like you can go much further you the code doesn't stop here right because if you
[04:34:55]  have a weight let's let's let's await d here or something like it doesn't it doesn't stop here you like it's quite possible that uh like i actually
[04:35:12]  i wanted to do a weight d and a it it's more like we do this uh how should i put it it's more like we do this um like within the
[04:35:37]  component itself it's not the boundary like you could render like we're just able to break it down more granularly by not awaiting at the whole function level i i'm
[04:35:51]  basically suggesting never awaiting almost is the way to do it but instead throwing along this trail of functions like b if if if c isn't ready yeah i mean it's hard
[04:36:10]  for me to show this directly but it's like if c isn't ready when this part of b accesses it like yeah i don't know we can follow the specific
[04:36:31]  threads and not have the whole thing stop then go then stop like like this it's i don't know it's interesting to me like the the async await is blocking
[04:36:48]  by definition yeah i just don't know how he's ever going to prevent that especially when you in import your server function from a third-party library that you use further
[04:37:12]  down in your ui so like you fetch your data at the top level server function for your page and then you have a clerk widget on it further down that has something i
[04:37:24] 'm sorry not to pick on them but you know what i mean like and then it has its own data fetching like people are a hundred percent gonna if you tell them they
[04:37:32]  can fetch in the components they're a hundred percent gonna nest this like definitely like this this isn't just gonna be like oh it happens sometimes it's gonna be like all
[04:37:44]  the time if you let the floodgates open right so like use the like the projection thing because the the children can can that are projected in like can render independently of
[04:38:05]  the thing that shows those children i mean these are all smart optimization tricks but there's no way you just hey people don't worry about this kind of stuff you can collate
[04:38:24]  your fetching you just make a component async like is anyone not gonna nest async components like i i i it's going to be basically literally everyone anything bigger than
[04:38:42]  a toy demo i yeah i don't know well you don't want to wait at all either because streaming you want the parts of the ui that depend on the data
[04:39:02]  to be able to flush sooner so if you the thing is the promise all isn't terrible because then you at least you have it all in one place and you hoisted it
[04:39:09]  up right but then you you don't get that you can fetch anywhere you want in your components thing that people are digging for right now but but but the big thing is
[04:39:19]  you don't streaming um and it can happen at a component level which is probably fine but like you don't want the top of a hoisting to be completely blocking either
[04:39:31]  you you want it to basically pass the promises through and then where you use them or require the value that's where you get it and that's what triggers the suspense but reacts
[04:39:41]  got a component model so that that's as granular as they get so that's as granular as they care about um but i still have a hard time with like async
[04:39:50]  await on the components yeah yeah that's that's perfectly fair yeah ideally we would want to create the whole tree up front and that's why i'm saying like a preload
[04:40:04]  function is would be cool but i mean on the other hand with these non-blocking patterns i think you have a better chance of success like you can even picture what
[04:40:17]  the ui would be like situations where you have that kind of nesting if people aren't doing guards but they like they often the reason people do guards often is because
[04:40:32]  of the the no data problem so it's more like i don't know if it's avoidable but this is something that i'm kind of thinking about like it's like
[04:40:40]  the situation where you have a list right so essentially you know i'm just using solids syntax here but like for each users right solid right now if this is like undef
[04:40:57] ined it handles it just like empty array right we're smart enough but the truth of the matter is that nicety doesn't matter 90 of the time because this is this or
[04:41:08]  whatever i'm sorry i'm just like pseudo coding this but you know what i'm saying item whatever user whatever um but what i'm getting at is is that usually what
[04:41:26]  happens is there's also this which is like um why am i ul you know and usually maybe like uh h3 like and then there's this there's it's all
[04:41:55]  in a show component so that show when users dot length right and i'm saying like this is the kind of checks that i think will probably bite us eventually because these are
[04:42:21]  it's about the ui it's about like not showing extra elements here whereas like i mean this example is not like 100 great but you get what i'm saying like you
[04:42:33]  make decisions based on layouts not based on data flow right yeah i understand people use react query this way um so but the biggest difference with react query is um it's
[04:42:55]  not blocking it's not async components that that that's that's the thing so yes i think if you combine the non-blockingness with um you know this cache
[04:43:14]  thing you probably get the the 90 percent case and for the things that aren't let leverage that preload function yeah i mean my i i still have this idea but
[04:43:47]  yeah my idea for async components was kind of crazy i was actually going to compile them back out to not async components i i think what put me on hold there a
[04:43:58]  bit was because i couldn't think like it would make the compiler trickier and typescript might not play nicely with us but yes there if if people really wanted that dx i
[04:44:08]  think it's achievable it's just um you know so instead of writing create resource create async they could just write a weight but i'm just syntax sugar thing mechan
[04:44:18] ically it's working the way that i'm explaining yes that that's that's sort of where i was where i was getting at but it's the semantics that are weird
[04:44:31]  right um because i it's it my component i talked about this before but like weight a const res 2 equals await b like you're kind of expecting them to be
[04:45:06]  sequential here or maybe you promise all of these which is fine but i'm like i i you'd be you'd probably be surprised if console log high ran right away and
[04:45:19]  that's what i'm suggesting i'm saying i would suggest like compiling away the weight and then this actually running so i think visually semantically it doesn't align we could
[04:45:28]  definitely do this because what's beautiful about async await is it's completely analyzable at the local scope you don't have to worry about what's over here which means
[04:45:37]  that you we could do this kind of uh compilation confidently but yeah yeah i this is this is why i was like let's not async components probably yeah but mechanically
[04:45:51]  i know how i want stuff to work it's a syntax game always right um anyway we uh i think i think i'm done on on this topic for now um let's
[04:46:05]  let's let's do this week in javascript really quick famous last words right let's let's let's let's get this show rolling okay give me a sec
[04:46:15]  but yeah this is the kind of stuff that i'm working through playing around with right now i'm just getting the getting this all where i need to get okay okay okay
[04:46:34]  yeah no no glasses this week that was a special occasion i actually don't i'm like looking for the glasses now and i don't see them either they got put away um
[04:46:45]  my wife helped tidy up the office while i was away i was at an appointment and i was running late and i was supposed to be in the angular um documentary to talk
[04:46:58]  about signals and i don't see them here or more likely my kids found them i have two kids and i have two pairs and they probably just ran off with them yeah
[04:47:16]  yeah i have plastic meme glasses that i bought off amazon for a couple bucks yeah there's there's a there's an angular uh document uh documentary coming out um the um by
[04:47:33]  the same guys who made the typescript documentary so that should be pretty exciting yeah i guess that was a leak oops be excited for it i'm sure they'll do a
[04:47:51]  big official announcement yeah okay okay so let's let's let's get this going it's not a leak okay thanks you heard it here first now i'm not doing that
[04:48:11]  okay um let's do here um all right let's talk about this week in javascript um i probably missed a bunch of stuff um there's a few few topics that
[04:48:24]  i found interesting enough to talk about um but uh yeah let's just get started here let me get my screen going all right first thing bigger release announcement tan stack query five
[04:48:43]  very excited about this i it's funny i had people just this last week in the discord be like ssr result start doesn't work with tan stack query why can't
[04:48:53]  it like it work and i'm like i swear uh i don't know the pronouncing orion had already created a demo of this well it's because it was on a
[04:49:02]  beta branch it is finally out there they didn't like highlight it here um exactly um but yes now to my understanding the new version of tan stack query b5 works with
[04:49:14]  all the solid start stuff like it's completely swappable for create route data to do a lot of the really cool things um obviously the mutation api is different you don
[04:49:22] 't have the forms but you can use tan stack mutations and it should all just work so and you can put server functions in them and you know you're off to the
[04:49:30]  races so i'm super stoked about that other things that make me stoked about this is these new agnostic dev tools guess what framework they're written in um that's right
[04:49:42]  uh solids is actually the tan stack dev tools are written in solid and even though so if you're using view or svelte or any of the other tan stack uh
[04:49:53]  libraries and you install the dev tools you will be having solid running in your browser so um very cool stuff i mean obviously a lot of different options that are performant but again
[04:50:06]  it was one of those things where we they noticed a significant improvement over react when they switched to solids and it was a lot smaller so um yeah yeah exactly so very exciting
[04:50:20]  um see this stuff obviously kenner and crew make do great things so i i i am definitely excited about it yeah yeah yeah do check it out i'm i'm a
[04:50:34]  big fan okay yeah and fine-grained persistence i don't know the details on this but i know for solid this means that they incorporated the stores um which means that we
[04:50:48]  can do the data diffs uh at the store level on the queries so like this is just you know like i need i wanted to build some inbuilt stuff so that
[04:51:00]  like i could build solid start and it was like part of the router that was optional to use but still powerful i could also just say like don't use anything we just talked
[04:51:07]  about um and use tan stack um at least right now until we can get the really cool stuff in 2.0 but yeah i'm very impressed with what it's done ooh
[04:51:17]  is there anything for me to give me links um i don't think i'll have time to cover it unfortunately i'm running a little late but do give me links i
[04:51:28] 'm i'm interested i i did watch a compiler talk a week ago which is actually largely what led to my article about locality of thinking um uh have you ever have you
[04:51:43]  ever uh put up a tweet and then you immediately regretted it after the fact um i i want to talk about this one because i don't think anyone understood what the
[04:51:55]  hell i was saying with this tweet and i think honestly this is just this was just a dumb tweet and i know a bunch of people liked it but i was like oh man
[04:52:02]  i wish i could delete this thing um yeah the react india one was the one that i saw yeah i i it was what really felt compelling about that one it was as
[04:52:16]  i listened to it and they're talking about all the design decisions they made for the uh forget compiler and why react was suitable for it i realized those were the exact properties
[04:52:24]  of react that i that i basically copied or stole or whatever for solid like we already had the ability to do these granular updates without the compiler but to make to pull it off
[04:52:38]  so that the dx was in such a way that you could think about it and like reason about it required um actually required a compiler part not of the javascript but
[04:52:51]  of the props basically once we could retain the locality of thinking you basically get the benefits of the react um the result of the react model without having to rely on reacts like
[04:53:04]  actual mechanical model you like you like this tweet i was just being spicy i i forget maybe rackus or someone again people just posting yeah you know what it was it was
[04:53:18]  probably it was probably adam rackus right he he also spawned another tweet that um that that i'll be talking about but it was something about like uh you know the
[04:53:34]  only every no other other frameworks can't compete with react because of they don't offer value or something you know uh compared to the side the ecosystem and i was like i mean
[04:53:48]  okay the ecosystem yes no one can compete that so ultimately if you're if you're if you're weighing the check marks i i i think you're right but it's
[04:53:58]  like this whole enough value thing you know like oh i this is the started like a while ago people like oh i'll choose the next framework when it's 10x better i
[04:54:09]  i'm convinced that the people who say that wouldn't wouldn't know what 10x better look like if it hit them in the face like um like obviously we're incentiv
[04:54:27] ized to stay with the you know what we're familiar with and the current norms and whatnot so like it's no big surprise but it's it's like it's it's
[04:54:36]  one of those things where like the signals thing is a perfect example why does every framework have signals now and every framework is moving towards fine-grained updates you could even
[04:54:52]  argue that react forget is an extension of this same trend at a certain level and and like like because think like think about it when react came out and everyone's like just j
[04:55:09] avascript you know and like no fancy dsl it's like we've gone full circle here and if you're on a certain point of the curve so to speak and
[04:55:19]  the adoption curve you know front of the pack back of the pack like the flow of information will flow at just the right speed so that like something can do a complete 180 and
[04:55:31]  you can believe that you've been on the same path the whole time right it's the violent jerk jerk jerk reactions that cause like the the you know the the friction right
[04:55:42]  so if react goes from react to if it takes 10 no 12 years for react to go from original 2013 pete hunt talk style react to like basically the thing that it was
[04:55:56]  absolutely against you know 12 years later if you stretch it over that period of time where the people who were who were there at the beginning aren't there anymore you can basically
[04:56:08]  create a narrative that react was always on this trajectory so like i'm not i'm not convinced you know people will even notice this stuff right and i so like this this
[04:56:23]  this this this wasn't an anti dhh thing all my replies were people talking about dhh and no build and all this stuff and honestly i don't i think dhh
[04:56:34]  in his position is fine over in his zone of the world but like basically the impact of his perspective on where front end now is from my share point is just not even
[04:56:46]  work whereas react is now the big player i was just telling the not even the react team but i was just like sort of playing at the idea that like the the people who
[04:56:57]  are very quick to kind of you know basically go oh yeah you know 10x you know you know in a few years they're gonna wish that their perspective was as successful
[04:57:13]  as you know dhh like like that they won't be just spouting stuff that makes no completely no sense now i'm not this isn't a crack at racket specifically i
[04:57:23]  just i keep you know i keep on seeing the same thing it's like it's like it at first it's like okay we we want to calm people down so they're
[04:57:31]  not like jumping on the newest thing but then after a while you're like okay like still doing it still doing it it like the voice of reason is already there like do
[04:57:44]  we need to keep like i i guess from our perspective i don't i don't see like what it adding anything new to the situation like everyone knows that fact um without the
[04:57:58]  reminder so anyway um yeah this is this is as spicy as i get which isn't very spicy but apparently everything that i'm like i just got swarmed with like d
[04:58:11] hh hot wire htmax stuff i guess this is why people make uh do you know spicy stuff on twitter so they can like just get in these crazy zones this is
[04:58:25]  not me so yeah i regret this tweet let me see if if this is the right one the thing is the react is fast enough is not controversial react is fast enough for
[04:59:02]  a lot of things i i don't i mean would i trust my e-commerce site on it i can think of better solutions but even then yeah right i if i
[04:59:12]  could afford not to use react for that situation i'd probably avoid it but i think other than that most people can do it i i the reason bespoke framers the more
[04:59:24]  sophisticated up models haven't caught on is because they don't add value in practice especially with reacts ecosystem in labor pool yes the this is the real thing i it's just
[04:59:31]  interesting to me because like even if if these sophisticated update mechanisms didn't matter not just performance but from like a dx standpoint of actually developing software then like react wouldn't be
[04:59:51]  bothering with forget the whole ecosystem went to move to signals so like i'm not saying everyone should just like jump ship on these things i'm just saying like like as i said
[05:00:10]  it's not adam specifically it was just like there there was a few of these kind of comments kind of floating around so i was just like yeah you know time to be
[05:00:22]  spicy but it was it was dumb i regret it forget is it just javascript with svelte forest yeah actually or maybe yeah actually it's very similar or svel
[05:00:46] te three yeah well it depends what do you consider more complicated i think a basic vdom is simpler to reason about to some degree but i mean concurrent fiber based vdom
[05:01:07]  probably isn't the thing is and i talked about this in my locality of thinking article if you one of the challenges of the react model is if you're ever asked
[05:01:20]  to optimize the you're you're it's a much steeper thing like all the values that you care about something are working against you yeah i mean someone showed something i
[05:01:45]  i think you could build a basic vdom um i think you could do it in less than 100 lines of code you just have to know what you're doing you write you
[05:01:56]  write a hyper script function essentially like value for your business if product features are very faster or with less bugs so i think dx has value of course right so what i was
[05:02:12]  trying to say is that dx and performance aren't unlinked people always push the the the narrative um the the other way where they they're like you know give up dx
[05:02:27]  for better performance you know kind of thing but like these things aren't unlinked when you end up having to deal with the performance issues then it becomes very much a
[05:02:37]  developer experience problem yeah yeah definitely i've definitely it's funny it's not just me now if you go to talk i think evan you did one where he was like building
[05:02:52]  signals uh and misco every framework authors now go around showing people how to build signals because i think once you get it you're just like wow this is so much easier
[05:03:01]  like there's no rendering it's just like thing updates yeah swix did a great talk on that yeah that's true too uh for like react level but like i think a
[05:03:20]  simple v dom is is um like even like super even eat like it isn't that hard um i know i i'm saying it but yeah it's is this the old
[05:03:36]  svelte uh swix talk yeah yeah let's share that around yeah yeah that's awesome um what is the real problems are after they're not optimal and we have
[05:03:50]  all things like long tables or your concept yeah i mean it's it's it's interesting because i my the the e-commerce would be fine for the react model if it
[05:04:09]  weren't for um re like e-commerce is actually fine for react's model it's that the implementation doesn't live up to like some other more performant things like
[05:04:19]  i don't think e-commerce isn't doing a lot of updates so the the issue the reason i don't select e-com uh reactor e-commerce is around bundle
[05:04:29]  size classically and uh hydration cost and just stuff server rendering speed and like stuff that could actually all be solved um you know with a like marco is a virtual dom
[05:04:45]  we had we had um uh michael on today marco six isn't but marco five and four is a virtual dom great in e-commerce they don't use a
[05:04:54]  virtual dom on the server but like it's not hard to picture like compiling strings i think i can't i don't know if it's official with preact but they
[05:05:03]  definitely have a like a mode where you can do this kind of thing so like like e-commerce is actually fine the only reason that i i pick out react is because
[05:05:11]  specifically i don't think it's historically been good for the way that it's been built that being said like technology wise i could picture an e-commerce that worked with something
[05:05:25]  like react perfectly fine um i think it's not as good as like resu like it's not optimal for like sub component hydration and resumability but like i would never
[05:05:35]  pick react apart because of that for e-commerce side i think on the interactive side react is also perfectly fine other solutions are slightly faster the only reason i give react grief
[05:05:48]  is um is i personally don't find the model as like intuitive but i technology wise react is generally fast enough so like even with your dashboard again if it was a big
[05:06:02]  large table big dashboard i think fine green reactivity is a better fit for like nozzle or ag grid or any of that stuff um things with really interactive multi-touch points
[05:06:12]  all that stuff so that that's on that extreme yeah i could say you get to a point eventually where signals is probably better than react model but everything before that react would
[05:06:21]  be good at if it weren't for the page load scenarios around it yeah yeah i mean and the problem is there's legacy there so everyone is doomed to this kind of thing
[05:06:42]  eventually especially when you have customers and all around the world and big companies and stuff yeah i don't know i at this point yeah i would mostly skip webpack like i
[05:07:02]  don't think bundlers are an interesting area particularly like they're interesting what you can do with them but if my goal is if you're interested in bundlers be interested in
[05:07:10]  bundlers and look at it my goal is just to build applications then i'm not terribly interested in bundlers i i mean what's cool about beat is it uses uh
[05:07:20]  like a very universal same as roll-up plug-in system so if you click and understand how to use it and what it does i think you see enough use cases to
[05:07:28]  be fair unless you're like building plugins yourself i don't know if i'd spend much time yeah webpack but i mean there's turbo pack as well um we'll see
[05:07:37]  what that looks like i i i don't know bundlers where i spend a lot of time as long as i understand the the concept behind it yeah yeah this is fair
[05:07:47]  right like if you're if your company uses webpack and you need to understand how the configs work then there there's value there i'm more talking from like uh i
[05:08:00] 'm building something new but yes if again if you have a reason to learn about it then you probably you learn about it that's fine you learn on the job though that
[05:08:08] 's the situation you always learn on the job i mean you could hedge i guess but i mean that's speculative okay so we talked about why this was a mistake let's keep
[05:08:23]  on going um we talked about tan stack okay yeah last stream i kind of went off on about how you need to know about the serialization boundaries and i had a whole
[05:08:41]  proposal on how to improve reactants uh server components and people were generally receptive of what my proposal and i actually think it's kind of beautiful in a way it's symmetrical
[05:08:54]  it makes sense um but i'm going to i'm going to backtrack i was convinced by nikil that there's some value in the react api and i actually
[05:09:23]  started uh i started kind of uh looking into it obviously being able to use all the existing tools is valuable but it's because again it's kind of like what we talked
[05:09:36]  about earlier i'd convinced myself that i've solved the problem that probably isn't solvable and he he told me the solution for knowing you know that all you need is an
[05:09:53]  indicator he actually literally said to me even before this tweet came out he was like yeah i just think that the ide should highlight the different colors of the components so that you
[05:10:02]  know at a glance you can go like oh okay this is server component this is the client component the tooling is can very easily walk in and find the used client for you so
[05:10:10]  then you know but the problem of putting on the outside is um you know like obviously there's the benefit of not having them do wrapper files which i still like so like
[05:10:23]  nikil's like support both and i'm like but i the the the the problem of uh putting it on the outside is largely like you will probably end up using it more
[05:10:36]  than you want to and uh nikil actually came up with a good example of this he's like picture a third-party component library that has um that's ready for
[05:10:48]  server components which ones are shared component like you would probably import everything as client or import everything as shared like how would you possibly know which components were which type when you went to
[05:11:06]  go import them and you you'd go look at each component for use client essentially it like sure they could enforce it on their time side but after a while you would probably
[05:11:18]  get lazy and you just start importing everything as used client from that library anyways because there's some interaction downstream like the identity property of of this is actually important because the receiver needs
[05:11:33]  to go check and i said well the argument there is only the first person imports it needs to go check everyone else who uses it later knows what's going on and and
[05:11:45]  nikil's like well look this can tell you what's going on essentially he didn't show me this this hadn't come out but he shared this with me yesterday because he
[05:11:55]  was like they should do this and then then like two days later someone's like doing this um but yeah i want to talk about a bit about serialization and the locality
[05:12:04]  of thinking because i i i i we focused a lot about on on this but serialization is a completely different beast because with read write segregation like immutability you know
[05:12:19]  that the from data flow simply like what you pass out of your components nothing terribly bad can happen because you control what gets written to you you control both sides but you do
[05:12:33]  give up control of the read right but for serialization is different because we don't know what people are going to do with your data downstream right we we want to know
[05:12:51]  about secrets we don't want serialization to magically fail and crash our application right while we can take comfort when we know our serialization boundaries directly any component in between hides that
[05:13:06]  knowledge from us did i did i publish this one yeah it is published i'm gonna i'm gonna throw this in the chat too so people can see it see this but
[05:13:13]  yeah what i'm saying is consider you have a server component inside it if we have a client component that requires one field when we adopt the package we look at and we see
[05:13:23]  that and we're like okay it's going to make sure we don't send anything you know that can't be serialized there but then we install an update and now there
[05:13:31] 's an additional client component inside that requires use of other data that we're already passing through and we as a consumer don't know that anyways stuff will go to the client
[05:13:43]  that we don't know about even though we can see you know like we don't own the server any place where we don't own the server client divide someone else can still
[05:13:53]  choose what they're serializing for us without our knowledge yeah i know is that like a cross between wiser and wizard yeah i know i wiser with a z is
[05:14:08]  not a it's not a thing um anyways thank you um so secrets can even leak with the best of intentions right so we we need to guard it at the source that's
[05:14:23]  why you know the taint api is your server dollar sign you know we can help keep people happy by forcing things in separate files but one level of interaction and we
[05:14:37]  like we know we no longer know what we're looking at so it is important that when we go in to a specific location where those uh you know that we can see you
[05:14:49]  know hopefully see where the differences are but once we step away there's there's basically no guarantee so anyways i should say secrets are basically not guardable um and serialization
[05:15:04]  is also a pain because i i mean picture two com different teams using the same component like team a team b is using component c and d inside the client component again changes to
[05:15:18]  what happens inside because team b needs a change of requirements is could cause a to fail because now data that was passing to c that didn't need to be serialized needs
[05:15:29]  to be serialized it's the same example of the example before so we want that early detection essentially um so like i'm picturing like what if d became suddenly a
[05:15:42]  client component c right like if you didn't if b did that change a isn't aware of it you could argue that imports on the outside is good because now suddenly it will
[05:15:54]  fail and they'll have to address that the change happen but again with what i said earlier one level removed they don't see it um closer extraction you know makes things difficult
[05:16:10]  because it's invisible what i was trying to argue ultimately here with with this with this thing is that the best guarantee we have is our typescript um contract essentially like if
[05:16:24]  we know that something needs to be serializable if we can define that the best we can in our types then a change of types will hopefully inform the owner of the other component
[05:16:38]  and hopefully as long as we're very specific in this sense um we can we can basically trust not that something won't get to the client but that it will be serial
[05:16:55] izable and in that case it's okay that we don't know because as much as i'd like love to just like look at a file and know what's going to go
[05:17:03]  to the client it's basically impossible without going down the tree um unless you're looking at specifically the founder yourself so yeah i i i feel like i was probably a little
[05:17:21]  bit overzealous last week like we need we can't stop we can't know absolutely what gets sent to the client we can only really make sure things that shouldn't
[05:17:36]  be definitely aren't so locality of thinking can't apply to serialization so it's questionable the value of adding friction here when um you know it's it it basically just
[05:17:54]  isn't solvable right like and i don't mean in the way that like when you have like uh like react someone can go mute even though it's supposed to be
[05:18:03]  immutable someone can go mutate that data and cause bad things and you just because that's the case doesn't mean it's not solvable because you can set a convention
[05:18:13]  and perfect instructions and say don't do that as a pattern and if you employ that pattern you won't get in trouble whereas with this serialization problem you could try and
[05:18:23]  give people the perfect instructions and it can still leak out because there's no way when you're dealing multiple people that like you know someone without inspecting it themselves can take responsibility
[05:18:38]  there's there is the contract is not as um you know strict as we're used to with like our local thinking with unidirectional flow so basically i'm arguing
[05:18:53]  that the way you know what's serializable has to be through the types of the props so this is a large justification for react server components api essentially like the awkwardness
[05:19:09]  of defining it like you the identity piece on the inside is important and the awkwardness from the outside doesn't ensure the stuff anyways so you're you're to a certain
[05:19:22]  degree you're making people do more work for not much gain you what you want is for them to be able to see the difference at a glance but they can't depend on
[05:19:33]  it anyways so you need different mechanisms and maybe you know a helpful syntax highlighter so that's just where i'm mad on this i'm this is why when i've shown
[05:19:51]  the examples earlier i was using new server there might be other way we need to think about how to solve some of the missing pieces that we have in bling but i
[05:20:01] 'm probably there there's benefits to adopting reacts apis from a tooling standpoint even instead of trying to fight them on it and i'm having a harder time justifying not using
[05:20:15]  that direction once you know you start kind of you know i've been going back and forth on this i there's something about it that doesn't sit with me right but
[05:20:26]  it's also like i don't know if it's a solvable problem because like ideally you could maybe get to a world where use client isn't necessary like you can analyze
[05:20:38]  and basically like do smarter things but as an api it's not a bad place i guess like given all the options which is surprising myself saying that i mean we can
[05:20:55] 't guarantee that that's the problem like some things aren't serializable and while i would love to have an interface um where we know these things um and props do give
[05:21:14]  us that to a certain degree it's it's when when there are boundaries or components that i mean marco and quick have a different problem because it's much more sub level
[05:21:24]  at a certain point um this really gets in our way of just writing code that does stuff so no i don't i don't some things just aren't serializable a
[05:21:43]  lot of things are we continue to work on making things serializable but when you're getting into like references of functions like so functions that return functions you get into a zone where
[05:21:53]  it's like can be solvable but it's it's very complicated i mean i suppose if you get to a place where everything was serializable i don't even know if
[05:22:02]  you'd want to serialize it um but yeah that's this puts more context on what michael was talking a lot of a little bit a bit on serialization earlier
[05:22:09]  in the stream yeah yeah they wrote some stuff up but i don't think i think the thing is they understand that that what their audience is my need of their explanation of why
[05:22:26]  they went that way is probably different than the need of the people who would use the api because like their picture if their explanation was kind of like the way i talk
[05:22:36]  about this stuff i think most of the consumers would be like what the hell are you guys talking about that well that reasoning doesn't make any sense yeah file extensions are pretty quick
[05:22:48]  to throw out the window the problem is like fundamentally client components are the special thing which means it's a complete reversal and it's not even that they're server components it
[05:23:01] 's that the most components are shared components you know this even goes with that uh hack md i showed earlier where i was like i can't tell if this is a client
[05:23:10]  component or a shared component or whatever because my point is data fetching if data fetching shouldn't be the criteria for whether something is a client component um it's it's
[05:23:20]  the use of uh and i know this looks a lot like a like a hook or something so it's hard to come to come come up with heuristically with a
[05:23:29]  clean um thing that's another reason for using a different convention or a different name for for these kind of these pieces but data fetching shouldn't be the determine whether it's
[05:23:41]  a client or server component what should be the determining factor is global state because that can't be shared because it can't go across the boundaries and without severe uh cost and
[05:23:53]  i could argue that's it like context api is the only thing that differentiate but i can understand if somebody has like on mount or create effect and it doesn't run and
[05:24:02]  they didn't import as a client component they're like i expect this to work um that's another reason um but nothing else actually matters like having something like a signal like
[05:24:15]  i guess an event handler is something like if you see an event handler there's expectation that should get to the browser but like other than effects and event handlers um and
[05:24:32]  as i said we ssr those today and they don't run on the server and context client context there isn't really any difference between like something that has to be a
[05:24:44]  client component but um it's enough so yeah i i definitely think data fetching shouldn't be the defining factor though if possible it's just hard to come for the universal
[05:25:02]  model um anyway let's go here yeah okay so that's my talk on that the conference talks up okay last few here okay rcs this is an interesting one i've
[05:25:22]  been watching ryan florence a lot recently on his tweets because he's been he's been hitting a lot of this like i've been trying to design an idealized
[05:25:30]  what i consider an idealized server component like solution and thinking about things that i think are foot guns and then working through those and figuring out what to do and ryan in
[05:25:39]  real time seems to be hitting all the like almost the same time maybe like you know a couple days behind he's on hitting the foot guns that i imagine that the react
[05:25:49]  system would have like so i'm like hmm i think this is a problem i want to design around it and then ryan the next day is like this is a problem and
[05:25:56]  i'm like okay you know so i've been watching a lot and they've been talking about it a lot bringing a lot of attention but finally the other day is like r
[05:26:04] c is farther production ready than i thought time to get back to work on the current remix avi's i'm generally excited about rc's though giving us a clear view
[05:26:10]  to build migration blah blah blah so they're actually stepping back a little bit so i don't know i think this is news i think it's newsworthy so um i just
[05:26:23]  wanted to throw that out there as something a little bit interesting um sorry in regards to what um like the i think what this is saying is that remix 3 won't have
[05:26:50]  server components remix 4 well i think they're pushing it back and they're going to do the rest of the remix 3 stuff that they want yeah i mean the remix team has
[05:27:03]  multiple times said that rc's aren't where they need to be for them and they vet them they spend the time to vet them each time so props to them uh
[05:27:10]  they hydrogen had a really hard time they have every reason to be skeptical right so yeah um honestly i've never seen a technology shoot higher faster and then crash harder than graphq
[05:27:27] l what happened another rackus tweet um i swear i like this tweet i bookmarked it whatever um i don't know i think everyone has their own theories here i
[05:27:41]  don't think graphql is dead especially not in corporate or enterprise but i think the remember we did that chart and we showed the trend of like getting to the opt like
[05:27:49]  data fetching patterns and getting to the optimal peak i wonder if i still have an escalator i might i might not let's zoom way the hell out um yeah i
[05:28:02]  don't i don't know if i i don't know if i i guess it's not in here i guess that stream was long long longer ago than i thought um
[05:28:19]  but graphql was almost like this pinnacle of the client normalized caching it's still to this day the most optimal solution but we kind of went up the hill
[05:28:30]  to go back down the hill because of complexity right so um graphql is dead you're making me look this is this is too much okay yeah okay this is this
[05:28:49]  is a joke right twitter versus reality yeah interestingly though it's it's it's a fairly like i mean i'm sure the curve is a lot slower like this is more
[05:29:14]  variable than i expected but yeah no graphql is no way dead but it's escaped our mind mindshare because of as i said i it's my belief that
[05:29:27]  the the the community that wanted graphql on the mindshare like the tech twitter side would want to replace the back ends with typescript anyways so they'll always go
[05:29:40]  to a simpler solution if they you know so they just kind of sidestepped it but i i honest graphql is still so huge for those who use it because
[05:29:49]  there's like nothing that does what it does better um it's just a question whether we want that but sometimes like it's so funny because like graphql is all over
[05:30:02]  the place like there's a reason why like again i'm talking about netlify netlify connect is like basically a graphql layer over your data layer but it
[05:30:10] 's even more than that like ebay was adopting graphql a couple years ago as i was walking out the door i told you i was building a graphql
[05:30:18]  client for them to work to marco that could leverage like the different modes of like being fetching server only serving client and make sure that it's efficiently partially hydrated so like
[05:30:30]  like where it's used it's it's irreplaceable so yeah i don't know it's interesting though as like in the startup culture it we've definitely gotten away
[05:30:44]  from it but yeah i don't know i think the return to monoliths um for authoring like all these meta frameworks has actually decreased it um significantly uh rsc
[05:31:01] s these kind of patterns it's like the benefit of the was the cash you know um and without it you know i still think graphql is amazing like everything we we
[05:31:14]  we we want um to do to do it can do it's just more often than that we can do a lot with less well it's tricky because from an external ap
[05:31:31] i standpoint you could argue that rest is still like more consumable for people i'm i'm right um but like yeah uh theo you know he had that graph uh i
[05:31:53]  think the graph is dead on the tricky part is like um the things we talk about as hobbyist tech twitter kind of developers is not the middle section of that graph so from
[05:32:03]  as the other sections encroach and push graphql in the middle tight no one's talking about it the truth of matter is it's still used everywhere by huge companies
[05:32:13]  yeah i mean it's the bet like it's incredibly powerful nothing else does it yeah yeah i mean yeah that's a great use case for it um yeah it's just
[05:32:40]  we're not going to be talking about we're going to be talking about these data action loader things because we're trying to simplify the problem is it got to a
[05:32:48]  point where everyone's like oh i need a graphql server like back when it's like oh i need an api server and i need an app server and then it
[05:32:54] 's like okay how do i build that api server well i should build a graphql there was a time period where like the getting started instructions were kind of insane people
[05:33:02]  talk about the complexity of web dev right now but the truth of matter is like um like with tools like beat and like you know these meta frameworks out it is the the
[05:33:15]  ground zero is a lot easier than it was like it's doing more maybe harder to explain to people what it does but the ground zero and what you get for it is is
[05:33:24]  a lot higher now than it was even a few years ago considerably um okay one last topic i was supposed to talk about this last week and i forgot about it um bur
[05:33:36] ke here has been going into the js framework benchmark and adding a bunch of libraries oh it got merged this is the perfect time to talk about it then um basically he added
[05:33:47]  a bunch of signals implementations for libraries that support signals because they were kind of missing like preact signals not in here why not um you know and what does angular look like
[05:34:03]  with signals and can you guys guess what the general trend is going to be here dropping signals version now we're still working and the frameworks a lot of them are like kind of
[05:34:18]  like i don't want to talk about signals yet because they're not ready you know but can you i just i just want to throw out there can you guess all right okay
[05:34:30]  so here's the update wasm bind gen 108 solid 1.8 they got it already right behind it i don't know what silken web is lit 3 oh nicely
[05:34:50]  done lit it looks like lit 3 has actually um improved the performance uh considerably uh lit was always around 1.2 now they're about 1.8 it's it's like
[05:35:06]  a couple percentage but like you don't expect to see this often is this is this official results this this this seems these these these numbers seem wow i wasn't ember
[05:35:22]  five okay at two yeah so these are official results owl this is the block dom framework um that that uh build on block dom so this is the full framework version sitting there in
[05:35:36]  the mid okay let's let's let's look at the actual full results here instead of just the one snapshot i i the the trend that i want you to kind of
[05:35:44]  notice here and i it's so you always trying to explain this to people is adding signals to a library makes it slower yeah okay i will zoom in yeah that's that's
[05:35:58]  a problem 720p is bad for this okay i will i will zoom in give me a second okay let's look at the current results and we will zoom in see the
[05:36:09]  actual results are much bigger i'll give one more zoom level just for you at all but um the there's too many frameworks now um look how many react react signal lists
[05:36:24]  i don't even know what that is but let's let's remove all of these and then put in things that we care to see so we need a bunch of angular ones
[05:36:35]  because i want to show the difference between the different angular ones oh what did the did the angular non did the angular signal stuff not end up in the final release we're
[05:36:48]  gonna have to go back to the issue then if i want to make that let's do svelte 4 let's put react in there um not that one i want
[05:37:01]  react hooks um let's put in inferno um let's put in solid okay so yeah this damn it this hasn't been updated i'm gonna have to go back to the
[05:37:20]  other one because these are all uh okay never mind i have to go back here we we will uh we'll zoom in yeah yeah this is what this is what i wanted
[05:37:43]  to to see though just kind of get an idea here because angular no zone is pretty freaking fast and this is no zone i gathering with or this control flow people don't
[05:37:56]  realize that like if you kind of avoid angular's update cycle completely and manually wire it that like the performance of it is actually considerable right um but angular angular signals is you
[05:38:15]  know a little bit behind there um view pina is in here but view by itself is a little bit faster so it's about 125. but here's a good one pre
[05:38:26] act classes preact hooks oh is preact signals not in here i wow hooks actually reduce the performance for preact that's interesting in a few key places sorry this is
[05:38:41]  just interesting to me same creation time same replace time slightly slow slower um uh partial update swap rows swap is this swap rows no yeah select row sorry select row that's a significant
[05:39:03]  difference and then that's swap rows oh interesting and then the rest is about the same so yeah the fine grain changes actually impact the hooks versus the classes for preact this
[05:39:22]  is interesting um let's let's step back out here again because there's some other there's some other one if you wonder what the control flow is it's like the new
[05:39:34]  control flow stuff i think that they're doing um yeah here's a direct signals comparison i think this is a local machine run yeah so ng4 is i guess they never
[05:39:51]  had the optimal swap rows in angular which is why it was always back there with react which also doesn't have the optimal swap rows so the new swap rows puts angular considerably
[05:40:03]  further up in the table and again signals drop it considerably because of the over select row interesting this tells me a lot about angular's implementation signals because this is what view problem used
[05:40:19]  to be you'd think that select row would be optimized for signals but this is where it's paying the price of being both top down and fine grained um view used
[05:40:31]  to have this problem for the longest time where yeah okay this is this is cool to see anyways the i look the point of my story is if you look at anything here uh
[05:40:44]  let's see if i can find the pr for the preact uh let's go pull request this is preact signals in here close because i i could have sworn that
[05:40:57]  i saw add preact signals and hooks yeah so it kind of splits the difference i guess because signals uses hooks it's actually much slower that's interesting my point is add
[05:41:16]  signals to any actually what's does marvin actually have a thing this is expected here the band for cases is only measure how quickly an update reflected in the dom they only measure
[05:41:26]  raw rendering performance yes they don't measure not because the reason why an app might be slow yeah sure signal score is written over the other 90 percent reflect in the process for
[05:41:33]  you i'm trying to find for tuning parts of the further thanks as we deal with updating the dom but not much that many apps that are using bypassing okay yeah so basically
[05:41:42]  they're not adding signals for dom performance they're adding signals because it's more changes are more isolated which means that it's possible that you can update a lot bypass a
[05:41:56]  lot of the virtual dom cycles when you get more large and complex applications um yeah so i mean to be fair yeah signals are just good in general but adding signals to a framework
[05:42:22]  out of raw level does not make it faster it makes it slower it's what you can do with them that's important so this was fun to see a bunch of updated
[05:42:33]  benchmarks here to to really you know nail that why keyed um because uh the keyed means you keep the references to the dom with the data and you're not like
[05:42:58]  you there's a whole article about this but the same reason why you use key props and react being keyed is very good it should be the default any frameworks that don't
[05:43:08]  make the default i'm always call a little bit sus but like you know react might like tells you that you should be keying all the the time because of how important
[05:43:18]  it is and it's because the dom inherently has state whether it's from css or whatever so like at a certain point you do want to replace the elements and not try
[05:43:28]  and hijack the ones that are there because it bleeds it leaks weird stuff happens this benchmark was one of the places where people first understood that because they were getting better performance
[05:43:40]  in this benchmark by using non keyed because it it would just like update text nodes rather than swap dom elements in a table but this led to us really like almost all
[05:43:52]  the framework authors deciding that keyed was an important thing if you go to his blog stefan early days he wrote an article oh i gotta go way back uh uh to
[05:44:06]  say like january it was how far back benchmarking round one round two okay maybe it's let's go july round three he wrote an article um about this sept
[05:44:33] ember or why am i not finding it yeah keyed versus non-keyed this has tons of great links about about like they're thinking about it but i love this
[05:44:54]  example he shows the difference between between keying and not keying like he can test it very easily by just setting a color not using the framework but obviously that's not a
[05:45:04]  realistic scenario this one is a little bit more realistic he's showing an animation state on a x and showing that when it's keyed and you click the x the item
[05:45:16]  just gets removed whereas it actually with non-keyed the animation actually it's still the x is still animating on the next row um anyway enough that but i thought that
[05:45:30]  was just a fun thing to see um that essentially um signals have benefits but like mechanically they are an overhead and it's okay because of what they can accomplish um if
[05:45:50]  you let them right but just taking your favorite signals and go our favorite framework and jam signals into it doesn't make it slower it's or faster it's the the same
[05:45:59]  reason like when you add state management to react you make it slower generally speaking like so all good this this one yeah four separate meta framework implementations later i think i found the
[05:46:12]  correct abstraction for building javascript server apps yeah yeah no this is the last thing i saw before i jumped on the stream and uh yeah no i think he's onto it
[05:46:23]  too i think vinci is great um i can't wait to get the solid start beta out but i ran way over time so i blame michael we were talking too long
[05:46:35]  so i think i'm going to cut the stream today um still figuring out stuff for next week so have nothing to say about that but i will advertise in mid next week so
[05:46:50]  until then have a good one have a great weekend bye everyone i tried to be quick