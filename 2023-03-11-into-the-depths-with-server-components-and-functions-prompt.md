---
showLink: "https://www.youtube.com/watch?v=QS9yAsv1czg"
channel: "Ryan Carniato"
channelURL: "https://www.youtube.com/@ryansolid"
title: "Into the Depths with Server Components and Functions"
description: ""
publishDate: "2023-03-11"
coverImage: "https://i.ytimg.com/vi/QS9yAsv1czg/maxresdefault.jpg"
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

[00:00:00]  All right here we are live. Welcome to my stream today. I'm trying to count. I think this is probably the fourth or fifth time I've tried to do server
[00:00:16]  components on stream. It's probably the fourth official time in terms of part of the title. Technically I talked a lot about server components when I was talking about solid 1
[00:00:27] .6 release but it's funny. Maybe not that funny but those streams have been my lowest watch streams of pretty much all time. And the last one with Next 13 was
[00:00:41]  like a little bit more. Sorry let me adjust my mic here. A little bit more traction so to speak. But like there was there's been for quite a some
[00:00:54]  time a surprisingly low amount of interest in server components. Yeah. People like signals. Yeah but these things are not mutually exclusive. It's funny there was actually a react tweet
[00:01:09]  a couple of them I've seen recently where they're like they're treating these things as exclusive and it's just so funny to me because like I forget which one it was
[00:01:17]  but there was one there they're like you know you got server components no one's reaching for signals but also when you have server components no one's reaching for use state
[00:01:25] . Like it's just such a bad comparison. You know what I mean? If you have server components no one's reaching for use effect. Like these these these are like
[00:01:37]  not at all the same kind the realm of things. Yeah it was a scheduling thing. I already had the thing. His thing was on Wednesday. I had the module
[00:01:50]  extraction thing yesterday and I had this stream today. And to be fair I was going to talk about this anyways. If you remember about a month back for my birthday I
[00:02:02]  canceled the stream. I was actually going to talk about what I wanted to talk about today on that stream about a month back. So it's just the timing sometimes works out
[00:02:13]  like this where everyone's talking about server components this week and everyone wants to talk about it. I watched that live stream of you know Kent and Dan and Joe and watching that
[00:02:23]  was like the final push. I like I just like made the stream title and pushed it out the door when I saw that stream because like as much as they did a
[00:02:33]  decent job of talking about it and getting things. I think this is a topic that it's best to talk about like outside of React. Because people get really into like
[00:02:50]  the minutiae of detail and we can we will get there. But it becomes this like really awkward scenario like in a part of that stream where they're like remix versus
[00:03:03]  react or whatever you know or next and all this stuff. And it was like that like the framing starts off in the wrong position before you even get started. You know
[00:03:12]  like what can RSCs do for me? And I think it comes completely a problem in the naming. So yeah we'll talk about all that today. I'm still
[00:03:25]  killing time right now right? Getting people past those Twitch ads. I should actually tweet out here that we're live just in case a couple people actually do want to talk
[00:03:40]  about this stuff. Because as I mentioned quote tweet what is it? Twitch tv/rion solid Sorry, I just like got caught up in that. It's just
[00:04:07]  I watched this stream actually there's been like a ton of really good server component content this week. I watched the stream yesterday with Ben Holmes and he was looking at some library
[00:04:18]  that Daishi, you know, Zustand and Jotai and Valtio or however you pronounce all the state libraries. He's like oh look here a minimal
[00:04:30]  server components framework. And this was really cool to kind of see it broken down to its mechanics, but like Even I remember when he was experimenting with it the react team
[00:04:43]  was like hey, you're holding it wrong And I think everyone needs to have that moment to get past that we're holding it wrong Which is why I wanted to To
[00:04:53]  do this this stream because like Funny enough like most technology um, you know, that's around right now That we're working on Server components like as we know the server components
[00:05:08]  are new but Structurally architecturally They share an incredible amount with technology that's been around for almost a decade So I think if you instead look at it from That
[00:05:23]  perspective get out of your react zone of life and look at the fact that this is a Almost a logical place where things could go Then we can have a real conversation about
[00:05:36]  what the merits of server components are Yeah, I mean this is the thing right now. There's a lot of experimentation going on right now I he tried to use the the
[00:05:48]  the the server components implementation like reference implementation outside of the react repo and then He needed java to build that and it's crazy Honestly, if you want to use server components
[00:05:57]  today use nextjs react team told you that like Go use nextjs People are going to play with it make their own stamp on it but Like Honestly These things take ref
[00:06:13] inement. This is a new And old thing it's but for us in modern declarative front-end world. It is a new thing and There are rules and patterns that
[00:06:26]  should be followed that makes sense But wiring it all together lets you Currently kind of get into a mess of things So I want to I want to cover all that I want
[00:06:34]  to cover the difference between what I I like to dub as lakes and and you know versus islands versus donuts um I know we got we got all these shape metaphors and a
[00:06:45]  lot of things that include water Like streaming and you know, like I've talked about these at length on my stream previously but They're you know, it's always better when
[00:06:57]  you have a specific goal or task in mind and purpose All right, so how are we doing people people starting to join in as I said I I suspect this will be
[00:07:08]  smaller than some of my recent streams There is a surprising little interest in server components which is Bonkers to me because you see it even on twitter that there there has been like
[00:07:19]  building up this week, but in general i've noticed that like Most people are like why is why do I need to care about this and they're just like if they
[00:07:27]  see something with server components on They're like i'm not going to click on that and It's an interesting place to be in to be sure Oh man, you all
[00:07:56]  are great Yeah, I mean it is back to the monolith So does this start with a history lesson like my idea kind of overarching thing about what we're going to
[00:08:07]  do today? It's going to involve a lot of the scala draw. Okay, and it's going to involve Looking a little bit at the history then understanding Reacts
[00:08:17]  design decisions perhaps And and then I've been working since last october on documents to describe or spec out how i'd make Um, an agnostic like not even
[00:08:28]  agnostic. I don't like the term agnostic But make server components for every framework, but agnostic is a possibility there like basically What if I took
[00:08:37]  astro today? Could I just make astro my server components and Have every framework just have server components? Bing. I think the answer to that is actually yes, but
[00:08:46]  Um, obviously astro would have to change it. I'm not telling them to do that. I'm just putting it out there that We are talking About an architectural
[00:08:57]  change. This is not like People going oh, this is react's latest feature like hooks. No, no This is more like what happened between Going from Multi-page apps
[00:09:11]  the past like ruby on rails to Single-page apps like angular or whatever in the first place um And I think Whenever there's that kind of level of architectural shift
[00:09:23]  There's like People have to ask the why is it worth it. Um And That's a fair question and The answer is often complicated involve many many trade-offs. So
[00:09:37]  let's try and like narrow that down a bit today Yeah, and I I want to I the title of the stream is server components and server functions and the reason for
[00:09:50]  that um, because there's a nod to this is This is All Part of the same thing. I am not surprised That All the solutions seem to be aligning in the
[00:10:05]  exact same zone having very similar Mechanics even if they've like changed their syntax slightly differently And I want to talk about So when I talk about this holistically, we
[00:10:17] 're going to be talking about data fetching We're going to be talking about mutation. We're talking about the whole architecture of what this looks like um completely from end to
[00:10:27]  end not about like what's not in react or next yet or whatever No, no, i'm i'm gonna hypothesize here. I don't know what the next guys
[00:10:34]  are working on. I don't I'm sure it'll be cool when we see it, but like like I'm gonna talk about this as if I've already designed
[00:10:44]  the future framework that we haven't seen yet Because like to me I think it's already there. There's there's details to work out um There's a lot of
[00:10:58]  Small things but higher level This is an architecture that covers The range it passed the base set of tests that are required from my perspective To be it to be legitimately a thing Okay
[00:11:19]  Is that a good intro that that that works for people? We're also gonna have a great this week in javascript too as always lots of fun But I I
[00:11:28]  will see how we get there when we get there Have I seen it? SSR is not server rendering. Yeah Don't read into it too literally Um We will we
[00:11:44]  we can talk about that I feel like the average developer doesn't care about the experimental stuff you're right They don't and they shouldn't so You know if you come on
[00:11:54]  my stream you probably care a bit more about the experimental stuff But maybe it would be helpful If We could understand why the experimenting is happening in the first place And the answer
[00:12:06]  to that as I said before is not a single avenue. It's not just because we're bored And it might not even be because you need it Okay, but It doesn
[00:12:21] 't change the fact that this is Potentially quite a good thing All right Yeah, i'm curious about the downsides of server components. We'll we'll get into
[00:12:32]  that too Yeah, I mean we have to go back there so should we get back there? Okay Yeah So my first Statement here I'm and this is going to Remove
[00:12:52]  all the nuance out of this, you know, because there's there's tons of nuance that i'm not going to say here There is server components Are the islands architecture
[00:13:01] ? Okay, straight up They are the islands architecture There is obviously considerations about routing And about you know You know You know data loading state preservation all that stuff But For you
[00:13:19]  coming in today I'm just going to put it out there that high level you step back We are talking about You know an extension of variation on the islands architecture To understand
[00:13:38]  this I want to talk about in two modes I want to talk about this in terms of developer experience And in terms of performance We need to and or ux We need
[00:13:50]  to talk about both of these To understand why this is important or valuable Because we spend a lot of time talking about performance And we don't spend time Talking about you know
[00:14:03]  What the actual experience of creating this is And For all the really nice benefits We have of current modern single page apps There are inherent trade-offs and complexities that come with
[00:14:18]  it And if you go back to the beginning of the web Things were kind of simpler in a certain way You couldn't do as much But things were simpler in a certain
[00:14:28]  way Let me see chat how are you doing Yeah that's a cool idea I might consider doing that in the future Right now just use chat I'll do my best It's
[00:14:47]  the thing is with chat I can keep on rolling Be more selective The thing with the discord thing I think the discord approach might be better With like a audio channel kind of
[00:14:57]  situation You know like Where like sorry Like where you're actually like Doing an actual dedicated Q&A Because then you can like focus on that I'm going to try and keep
[00:15:08]  a narrative Stretching through this whole thing Okay And actually I'm going to open Twitch in my other window Just so I don't miss any of you Twitch subs and people
[00:15:22]  coming in I always miss you when I'm in my stream yard So this is just to make sure that I don't miss any of that Okay perfect I think we're
[00:15:34]  all set up now There we go Okay cool All right So We also can't fetch astro components from the client We also can't fetch astro components from the client
[00:15:50]  yet Yeah How should I put it though? That's the wrong way to think about it In my opinion And we'll get there Okay so I don't know if I
[00:16:03] 'm going to need to even escalate to draw some stuff here at the beginning Because I hope that this is kind of common kind of knowledge But if you go to a website
[00:16:15]  I'm starting right at the beginning here And you go to a different website Let me find an MPA app Yeah Google search an MPA You know You do something
[00:16:30]  You navigate You post some information You come to a new page You know Go to the next page Basically With no javascript I'm sorry This is like the most basic thing
[00:16:46]  The experience of actually navigating And doing updates Is actually rather simplistic You can do it all in html You have anchor tags Which lead you to the new place Do a
[00:16:58]  get request You can You have forms Which you can post some information And refresh that page Or navigate to a new page Right I'm just I'm just putting this out here Because
[00:17:13]  you have to start You don't get to server components From starting From a single page app mindset You get to them From like starting from web fundamentals Right And the reason I
[00:17:32] 'm just bringing this up here Is that This model Is Very, very, very, very simple Okay And this is This is For all the benefits That come from single page
[00:17:49]  apps You lose a bit of that simplicity Rich Harris I'm going to just grab a talk here Just in case people haven't seen it I'll link it We can talk about
[00:17:58]  I'll talk about the details But you can see it later Transitional apps This is from Jamstack Conf A couple years ago What was it? Jamstack TV
[00:18:10]  Have single page apps Ruined Ruined the web Right I'm just going to grab This talk And put it in here Because this is a great talk Talking about The trade-
[00:18:23] offs Of single page apps Versus Multi-page apps When you When you You know Consider stuff like routing You suddenly have a whole new Bunch of considerations Around how you
[00:18:36]  Handle the browser state Scroll state How you handle You get new powers Because you can handle transitions But at its core You can basically See That these things Do have trade-
[00:19:01] offs Okay I'm not going to focus too much On specific trade-offs right now But I wanted to kind of highlight The fact that Sorry That When you Start Along this path
[00:19:15]  There was clear gains Of going to single page apps But over time It's caused the model To be one that makes sense A client-centric model That requires Basically all the
[00:19:29]  javascript To be in the browser Okay This I mean This part is Is fairly straightforward I think everyone Kind of understands that Like When you have An ssr app I
[00:19:45] 'm trying to decide If I should bring up A couple of my old articles Here Because they Really cover The key points But what I want To get at is SSR as
[00:19:56]  we know it today In single page apps Are still Single page apps Okay By that I mean You might have Rendered It on The server But when you Navigate
[00:20:10]  to the next page You need to render The whole thing In the client So this This has a few Prerequisites Right off the top It means That You have a client
[00:20:20] -side router Okay It means you need All the code Upon route change To fetch that data And load in The code To render that page It means that What's What's
[00:20:40]  another It means that If you move Between pages Multiple times And you don't want To refetch The data again The browser Is the one That's aware Like the browser You have
[00:20:52]  In the browser You're going to have A cache That says Hey I already fetched This data Don't fetch it again Right In our old Multi-page app Scenario
[00:21:02]  You could cache The page result But Generally speaking All of those decisions Had to be made On the server On each page Or In a single-page app Even a server-rend
[00:21:20] ered Single-page app You are making All those decisions In the client And what this means Is you need JavaScript to do it Which is fine The router Might not be that
[00:21:32]  big The client rendering The loading Can be deferred You know For You know The next page You go to And But the cache Is a little bit Something large Have you ever
[00:21:46]  seen Like if you want A really powerful cache Ever Ever Bundle Bundle phobia To Apollo The reason I bring out Apollo Is The reason I call it Apollo Is that
[00:22:09]  Apollo Has one of the best Client-side caching systems Relay is going to be Another one GraphQL Found a way For us To Have the most Control Over that
[00:22:23]  client-side cache Because we understood Exactly what data Needed to be fetched Grabbed exactly what we need It's like the perfect Design For an API For mobile Like
[00:22:31]  Or Like for a very Client-heavy Application But it comes with a cost And the biggest challenge We have on the web Is the web is still Like A server client model
[00:22:43]  And that cost is not Free 43 kilobytes Plus 42 kilobytes For React Would have been over Pretty much Absorbed your complete Performance Like Budget From Like an
[00:23:03]  Alex Russell Article From about Maybe I want to say Like five years ago Five years ago Was a long time ago But I just want to point out That these libraries Were basically Just
[00:23:13]  as big back then And For people using devices Not With You know Not the top end devices You know Around the world And I'm giving you The performance argument Right now Just because
[00:23:23]  I think I need it for setting But if you've ever seen Alex Russell's You know Like What is it What's his In the equality gap Every year or two He
[00:23:32]  writes Stuff And he takes real Performance numbers And again You might not have Customers Around the world But what he shows Is stuff like this Where he shows How the processing power
[00:23:45]  And Like the actual devices Have changed over the years The scary part about this is Yeah iPhone's going up Flagship Android's going up Cheap Android Isn't actually going up
[00:23:58]  It's actually been flatlining So while the budget The low end Has been able to Almost double You know Since the time That he said This 80 kilobytes It's
[00:24:07]  not like What everyone else Is experiencing Right It's actually On the low end side These devices here Are like Over a decade On CPU And when you add Slow networks Into the consideration
[00:24:24]  You do all the math Look This might not be Your customer You might not have To worry about it But There is Something to be aware of And This Is not If If
[00:24:37]  we take this graph And line it up With a graph About The average size Of JavaScript On websites You're going to see That That the JavaScript on websites Follows like Maybe like
[00:24:52]  The galaxy curve Like It's keeping in check With the With the With the average You know Flagship Android phone But it's actually Not keeping in check With the low end
[00:25:03]  devices Okay I But I don't think Of it Yeah I mean Yeah I mean Okay So I just want to Wait a minute I'm not saying Like I'm saying this is
[00:25:25]  something Everyone Should be aware of Right So I wanted To kind of Like At the very big Basis of Our discussion today Talk about the fact That At one point Web pages
[00:25:35]  Were literally Just link And post a form Like You Didn't have Like You didn't have To worry about Writing to your Query cache You didn't have To worry about You
[00:25:44]  know Complexity About cache Invalidate Like Basically Client side Declarative Single page App development Is just Cache manipulation That's like 90% Of your job
[00:25:56]  You know I mean On the Mechanical side Of the app Yes There's You have to Do UI You know There's CSS There's Styling There's Design There's
[00:26:08]  Interaction UX Whatever But I'm Saying From like The performance Mechanical Side Of the Job It's It's Like Mostly You could View it As like A transformation Of a Data
[00:26:17]  cache Right But yeah I mean Who cares About this Ebay Cares About it You know Meta Might Sometimes Care About it Though It's Very Funny There's That Great Interview
[00:26:27]  From Sunil Who Was Like Meta Doesn't Care About SEO But What I'm Getting At Is This Is Something That Storefronts Might Care About This Is Something That
[00:26:40]  Sites The Government Sites Might Care About This Is A Thing It Might Not Be An Important Thing To Everyone But It Is A Thing So Let's Just Get That Out There
[00:26:49]  So There Is Incentive To Address The Performance Aspect Of This And There Is This Truth That You Know We To Get The Performance We Want Out Of Declar
[00:27:07] ative Apps Is Basically A lot Of Cache Management I Don't Actually Have A Problem With That Right You Know Reactivity Could Be An Extension Of Cache Management Perhaps Or State
[00:27:18]  Is Like You Can I Feel Like You Could Draw Something Some Equation Like You Know The React Folks Like To Do To Try And Simplify Stuff To Management Right So
[00:27:41]  Yeah I'm Catching Up With Chat Sorry Dx Is Not It Depends On Your Company If You're If You're Amazon Probably Not Amazon Is Still Using jQuery
[00:28:02]  Because Performance Like They Literally Couldn't Use Like The Modern Declarative Frameworks We Saw Stuff Like I Remember When Netflix Removed The React Out of Their Client Apps
[00:28:20]  To Improve Performance Like They Still Server Rendered With React But Not Like They Removed It Out of The Client To Improve Performance Like Performance Hits Us Where We Le
[00:28:28] ast Expected Or Maybe Where We Most Expected But Just Practically Don't Have Time To Deal With It So I Just I I'm Just I Just Wanted To
[00:28:43]  Kind Of Like I Don't I'm Not Going To Come And Be Like Force You Down This But There's A Reason Why Frameworks Are Thinking About This Because At A Certain
[00:28:52]  Point Like This Is Just The Framework We're Not Even Talking About The Fact That You Know When You Add Interactivity It's More Expensive Of Course It Is You
[00:29:00]  Have Javascript You Want It To Do Something Nice It's Going To Be More Expensive We Can Accept That The Problem Is If You Absorb Your Whole Budget At
[00:29:05]  The Beginning What Are You Going To Do To Be Fair In His In His 79 75th You P 75 Percentile He Basically Recommended That We Can Target A Much Higher
[00:29:23]  Rate Now We Can Actually I Think He Suggested That The Size Of Javascript On A Page Can Be Something Like I Want To See It's Like 300 Kil
[00:29:32] obyte Okay We Can Now Afford 150 Kilobytes Of HTML CSS And Fonts And 300 To 350 Kilobytes Of Javascript G-Zipped Okay Now
[00:29:44]  Not A Couple Years Ago Now If You Go Back As I Said Five Years Ago His Recommmentation Was Like 130 Kilobytes And This Recommmentation Is Good For
[00:29:57]  Sites That Don't Care About Page Load Performance My Recommendation Personally Is Take Any Alex Russell Number And Half It If You Care About E-commerce But For The A
[00:30:11] verage Developer He's Even Suggesting That This Is Basically The Reasonable Range Okay Which Is An Interesting Thing Because I Don't Know If People Saw Let's See If I
[00:30:22]  Can Actually Find It Let's Search Was It Fred FKS There He Was I Was Going To Talk About This Week In JavaScript But I Think It Fits Into This Dis
[00:30:34] cussion Right Now A Little Bit Fred Fred Fred From Astro Did A Performance Report He Called It Where He Took Real Data From The HTTP Archives And Looked At Core Web
[00:30:50]  Vitals And Actually Looked At The Performance Of Frameworks And Keep In Mind There Is A Historical Stuff Here But He Used WordPress As Basically The Norm Here And Obviously Newer
[00:31:01]  Frameworks Are Going To Score Better Here And Different Architecture Frameworks Score Better Here But It Wasn't Just This Thing It Was Sites Passing Imp Lighthouse There
[00:31:14]  Was The He Did A Correlation Between JavaScript Size And Page Performance And Basically The Average Astro Site Here Was Around 277 Kilobytes Within That Still And
[00:31:36]  As As You Move Out They Were Getting To Next And Next Sites Being Close To 900 Kilobytes This All Checks Out To Me This Is Why People Care About The
[00:31:52]  Stuff On The Performance Side It Is Just Not Every Site Is Going To Do It But If You Could Just Not Have This As A Worry You Know This Would Be Bene
[00:32:03] fit There Has Been Studies Multiple Studies To Prove Otherwise I Have Act I'm Actually Almost I Haven't Obviously Done The Studies Myself But I'm Almost As Certain About This
[00:32:28]  Being True As About Anything So Yeah Like Yeah I Mean I Can Pulse On Them Out I Think Someone Had A Thread Where They Actually Gathered Dozens Of These
[00:32:51]  Studies Together Or If You Go To The Quick Website You Might Be To Find Them I'm Trying to Remember The eBay One They Did A Few Years Ago What Was
[00:33:04]  The eBay Per 100 Milliseconds I Mean Some Of These Things Are A Little Bit Like Pushed And They Don't Actually Show All The Internal Numbers I've Seen
[00:33:20]  Internal Reports That We Don't Publish About The Correlation Honestly I'm Ashamed I Don't Have This Stuff Off The Top Of My Fingertips Right
[00:33:33]  Now I'm Sure Alex's Blog Has Dozens Of Examples Somewhere In It So Like Generally Speaking Amazon eBay Large E-commerce Has Made A Huge Case Around This That Like
[00:33:57]  They're They're Like The Direct Correlation Do you Know How Crazy It Was Kroger Let Me See If I Can Find His Articles Let Me Let Me Tight
[00:34:13]  Or What Was It We Had Him As Guest World Was It World's Fastest Website And Other Mistakes Making The World's Fastest Website And Other
[00:34:38]  Mistakes He Basically Oh Okay Thank You Thank You Someone Posted It Yeah Jazzy Pants Already Posted He Basically He Had 20 Kilobytes To Work With
[00:34:52]  For His Budget I I Think That's Insane To Be Fair But His It Was So Important To Them They Basically Said Yeah You Have 20 Kilobytes To To Make
[00:35:02]  Our Site Work Like This Isn't Like Not Even Remotely Debatable From My Perspective Like Like It's Anyway This He Goes In Depth Of Every Trick
[00:35:27]  In The Book He Could Try To Do To Get Performance Okay Yeah I Mean Thanks A lot Of These Articles I'm Going Post This In So YouTube Gets It As Well
[00:35:42]  But A Lot Of These Articles If You Look Around You Will Find Them Okay Okay Anyway There Is Some Acknowledgement That There's A Performance Consideration Here And
[00:36:14]  Yeah I Mean I Wanted To Start Here I Didn't Really Completely Want Start Here Because Of The Problem Is Like People Get Hung Up And Like Well I Don't Have
[00:36:22]  This Problem And That's Not Where The Conversation Should Really Proceed From I Just You Have To Understand That There Is Complexity That Comes With Managing Stuff On The Cl
[00:36:37] ient Side As Well Because The Like Innately Now You're Saying I'm Responsible For The State Of Everything Which Is Fine It Just Means That You Have To Emulate The
[00:36:46]  Browser Inside So Like We've Seen Over The Last Several Years A Simplification In How People Want To Manage This Because Now I'm Going To Be
[00:37:06]  In Single Page App Mode Right Like I'm Going To Get In That Mindset And I'm Going To Talk About What We Do Because GraphQL In 2015 Relay Amazing Literally
[00:37:16]  Solves The Problem And You're Just Like It's Hard To Picture Like A Better Technical Solution More Granular More Powerful Than What We Do There Except Like You You
[00:37:32]  See I'm Going To Disagree Here And That's Like I Don't These Are The Takes That I'm Trying To Get Past Today Because Server Components Aren't
[00:37:50]  An Optimization Trick They're An Architecture We'll Get There But I Want To Explain This From The DX Point And To Think From The DX Point We Can Get There By
[00:38:09]  Looking Actually At The Evolution Of Stuff One Of The Things That Made Me Feel The Most Like Why I Had To Do The Stream After Seeing Kent And Dan Talking Was That Dan Didn
[00:38:20] 't Understand How Remix Worked Like It's Very Clear Part Of It Was He Didn't Want Put Words In People's Mouth Because He Didn't Want To Ass
[00:38:27] ume But Because Of Him Not Understanding Where Remix Worked He Couldn't Talk To It Well Enough To Tie The You know Put The Tie A bow Around It Put The Ch
[00:38:39] ains Together Because Remix Is Part Of A Scale Of Solutions A Spectrum That Have Been Working Towards Getting Us To Where We're Going Yeah They Both Didn't Understand And
[00:38:54]  That's The Unique Value That We Can Do On The Stream Because I Think I Understand Both Of Them Right Because Okay So I'm Just Going To Part Putting Down Notes
[00:39:13]  To Give A Timeline And Then We Can Embellish On This But Let's Start Here We Had The Simplistic You Know I I Mean Let's Start With J
[00:39:24] Query Or Something I Don't Know Can You See I Know This Is Really Small Why Can't My Default Be Bigger Is There Like A Zoom Setting That I Can Just
[00:39:32]  I Don't Zoom The Percentage I Guess I Can Zoom The Percentage It's Almost Like I Rather Just Make The Font Larger Whatever So We Start
[00:39:45]  With JQuery Actually No I'm Not Going To Start With JQuery Because It's Too Far Back I Want To Start With Single Page Declarative Apps Okay Right So Ear
[00:39:58] liest Versions Of This Were Like Really Core Scrained You Like Declarative App Fetch On Mount Or Action Fetch And Set State I'm Just Gonna I'm
[00:40:20]  Just Gonna I'm Just Gonna Kind Of Start There Declarative Right Then It Was Like I'm Going To Jump Ahead But We Started Realizing We Had To Do Better
[00:40:36]  On Caching And We Got GraphQL Okay I Remember I Talking To Dan And He Said That Server Components Came Out Of Conversation About Like They Were Internally In
[00:40:48]  Meta Going Like In 2015 Going Okay What Comes After GraphQL That's Where This Came From There's A Direct Lineage Here From Their Work On Relay To The Work
[00:40:58]  On Server Components Right But Like This Declarative App Fetch And Set State Kind Of Mentality You Know Has Was Basically The Whole First Few Years GraphQL Ch
[00:41:12] anged It Because It Was Like You Might Put A Simple Cash Somewhere I Guess I Missed A Step Didn't I I Missed A Step You're Right Cash In A
[00:41:23]  Global Store Right We You Know What I'm Saying Use Redux Right You're Right I Did Miss A Step Right And It Doesn't Matter Which It Doesn't Really Matter
[00:41:44]  Yeah I Mean This Is Technically True But I Don't Like This Framing Because It Gives People The Wrong Impression That It's Like There Is Data Fetching
[00:41:55]  But It's Better To View This As A Architecture Like A Single Page App For An MPA Than I Think Is To View It As A Data Fetching Mechanism This
[00:42:04]  Is What Causes The Confusion Okay It Confused Me I Actually So Funny I Wrote An Article That Was Understanding Server Components Or Something It's Funny Where Was
[00:42:19]  It Like Let's See Server Components Learning To Appreciate React Server Components In March 2021 So This Is Three Months After They Dropped That Initial Server Components Dem
[00:42:31] o And I Look Back At This In The Beginning There Was Marco This Is True But I Look Back At This Article And I Was Completely Wrong In My Understanding Of Server Comp
[00:42:45] onents And Even Though I Had This Realization In This Article About How They Worked And Stuff And I Managed To Get A Better Perspective And I Shared This
[00:42:56]  With Everyone I Feel Like Most People Coming To Server Components This Week Are Getting To This Stage Right Now And I Need Them To Jump Another It Took Me Another Year To
[00:43:04]  Get Past This Like This Was My First Like It Took Me Three Months To Get To This Point And Then It Took Me Another Year To Realize What Was Going On
[00:43:12]  Completely I Feel Like We Can Compress That Into A Week For Most People If We Do This Well I I've Had A lot Of Time To Think About This But What Yeah
[00:43:29]  And That's Why I did The Stream Because Honestly I Already Knew The Answer But I Didn't Feel Like It Gave The Right Clarity For Everyone I After That
[00:43:40]  Stream I Was In Discords Discussing With People Like About The Whole Thing And They Were Talking About Oh But I Would Use This And Doing This A Lot Of The Arg
[00:43:48] uments That I'm Seeing Coming Up In Chat Now And I'm Like No No You Guys Still Don't Get It So Hopefully We'll Get To A Better Place So C
[00:44:04] ache In Global Stores Then We Get GraphQL Okay But You Know What Came After GraphQL React Query And I Want To Point That This Is The Turning Point This
[00:44:25]  Was The Turning Point Because This Is The Most Optimal Client Side Solution React Query Is Less Efficient It Doesn't Have Normalized Caching Or Whatever It Just
[00:44:43]  It's Just A Document Query Cache And At Some Point People Using GraphQL Using Apollo Doing All The Fragments Doing All That We're Just Like DX W
[00:44:59] iser Like Screw This Like I Don't Want To Worry About That It's Okay Maybe I'll Refetch On A New Page Anyways Like If I'm Going To List View
[00:45:08]  To Details View And I Don't Get The Share For The Data Fields Like Not The End Of The World It's Okay You Know You Know Normalize Cache You Know
[00:45:19]  Remove Some Duplication I'm Not Going To Sweat About It If I Do I'll Do Something Special And Write To The Cache Myself Maybe But Honestly I Probably
[00:45:26]  Never Will And What Was Interesting To Me About React Query Wasn't Just That It Made The Cache Mechanism Much Simpler At The Cost Of You People Got Even
[00:45:45]  Lazier Than That They're Like Oh Screw It I Don't Want To Deal With The Stupid Cache They're Like They're Like Invalidate On Mutation Done
[00:45:55]  Like Just Go Back To The Server And Fetch Facing The Key And If You Want To Understand What That Means That Means Two Trips Right Like Because Essentially You're You
[00:46:12]  Terrible At These Side By Side Diagrams Here But What I'm Getting At Is With React Query View Of The World Here Like Let's Just Put The This
[00:46:25]  Is For Mutation I'm Talking About Right You Do The Mutation So What Am I Going To Put Here Client Server Okay So You Do Mutation Take Some Time
[00:46:43]  Server Does The Update And Sends Back The Response Send Mutation Right Response Okay Right So We're Okay So We Send The Mutation We Get The Response Sometime Later
[00:47:11]  And Then Classically What You Would Do Is You'd Use The Response To Update The Cache Okay So Over Here We'd Be Like Okay Update Update Update Update Cache
[00:47:29]  Okay Where's My Arrow Here Update Update Cache Okay And Then We'll Do Another One And It'll Be Like Render You Render UI And These Basically Happen
[00:47:49]  At The Same Time Right So This Is What Was Happening You Do Very Granular Cache Updates And This Is What Would Be Happening If You Did Stuff Smart
[00:47:56]  Way And We Can Give Maybe A Little Bit Of Color Here And Make Like A Little No Not Not Color For That Sorry I Love Sometimes Playing With It's Calder Okay
[00:48:10]  Get My Box Make It A Little Color So You Know We We Spending A Little Time Here Let's Fill It In Kind Of Doing This Right And You Whether You're
[00:48:30]  Doing A Super Granular GraphQL Or You Updating The Cache On Mutation With React Query It's Kind Of The Same Process But People Kind Of Like Even
[00:48:37]  With The Keys They Still Kind Of Like Started Doing Something Different They're Just Like No Instead Of Doing This Let's Just Let's Just Like Get Lazier Almost Let's Just
[00:48:51]  Instead Of Doing This So This Is Like What Are We Going To Call This One Point Write Cache Instead Over Here We're Going To Do Invalidate This Is
[00:49:11]  Why I View This As A Different Step Even Though They Did Both What Ended Up Happening Is We We We We Started Doing This Okay This box Can Be A
[00:49:46]  Little Should Be Shorter Okay The Length Of The Boxes Don't Really Matter I'm Just Trying To Show Visually What's Going On Here And You Know What
[00:50:06]  No One Really Cared Like You Can Go Like This Is Clearly Worse You Don't Get To Actually Update The UI Until Here Like Maybe You You Combine This And Do
[00:50:20]  Like An Optimistic Update And Use The Invalidate To Like Ensure That You Have The Right Data But Like This Pattern This Pattern Like Is Is Very
[00:50:36]  Common Here And If You If You Take This Because What They Did Was They Reduced They Had Really Complicated Cache And They Reduced It Down To A Document Cache
[00:50:47]  And If You Want To Get An Idea Of Difference In Size If You Sorry I Should Keep Bundle Phobia Open I Don't Like Using Bundle Phobia Because
[00:51:00]  It Don't Have Tree Shaking But Like Like What I'm Getting At Is Like Significant Reduction I Think Tan Stack Query Could Also Be Around The Size Tan Stack
[00:51:19]  I Don't Know What Query Core Looks Like These Days They Have Way More Features So It's Unfair You Know SWR I Forget If They Have Key Based
[00:51:34]  In Validation They Must Have Key Based In Validation But Like What I'm Trying To Get At Is This Drastically Saves The Amount Of JavaScript And Logic
[00:51:45]  Here It's Like Way Easier Instead Of Being Like Okay Now I'm Getting This New Data And I Need To Add To This Key Maybe There's A List There I Need
[00:51:51]  To Apollo Like Okay No I Don't Want I Don't Want The Query Pagination I Want To Know Like I Don't Know How Much I Should Be
[00:52:13]  Looking At This But Like The Logic For Writing The Cache Is One Of Those People In The Chat Yeah I Don't Have To Show You You Believe Me Or Okay Sure
[00:52:31]  Like But I Just Want To Kind Of Put Out There Is Like You Start Running Like A Bunch Of Logic And People Screw It Up All The Time With Cache Management And
[00:52:47]  Eventually A Lot Of People Are Just Like Screw It I'm Going To Invalidate Anyway And This Is Naturally What Happened Which Is Why Tan Stack Query Caught
[00:52:56]  On Because People Were Just Like I'm Wessling With It You Know Like They Are Not Really Noticing This This Is A Big Delay Like This Is Definitely Incre
[00:53:07] asing Your Network Thing But Sometimes People Are More Forgiving Of Of Those Of At That Point They Perform The Action And They Know Some Work Has To Be Done If Doubling
[00:53:17]  The Time Of That Work As Long As Long as It's Not Too Tensive Might Not Actually Make That Much Of A Difference For People Might Not Depends On Afford
[00:53:24] ances But I'm Just Saying This Was A Move But You Can See This Is What We Call Kind Of Waterfall Okay This Is A Type Of Waterfall It's Not
[00:53:34]  The Typical Waterfall Of Dependent Data But This Is A Waterfall Go To The Server Come Back To Go To The Server To Come Back Okay Yeah It's A
[00:53:46]  Premature Optimization Let's Say Right Now Follow Me A Little Bit Further Here Because Do You Know What I'm Going To Put Next On This List Remix Okay For
[00:54:02]  Me Remix Is An Evolution Of This And Each Once We Got Past That That That That That Fulcrum Point Of Graph 2L We've Been Going Downhill And
[00:54:13]  I Don't Mean That In A Bad Sense I Just Mean We've Been Going Downhill Okay Because At That Point Remix Was Like Look We Know What Data Is Relevant
[00:54:24]  For Your Page Because The Writer So Instead Of Invalidating On A Key And Only Grabbing Specific Stuff And Not As Granular As Fields This Is In
[00:54:33] validate On Fields Or Write To Fields This Is Invalidate On Keys They're They're Like We're Just Invalidate The Whole Route Like Screw
[00:54:40]  It And You Might Be Going Like Whoa That's Extreme But Like Think About It Invalidate Whole Route Right Right Like This This Is This Is The Fundamental Thing Here
[00:55:04]  What Remix Actually Did That Was Absolutely Genius Is We Haven't Talked About Optimistic Updates Here But Like Here If You Want To Do Optimistic Upd
[00:55:15] ates On This System We Can Add Like Another Like Line Here You Can Basically Do Something Along The Lines Of Like Write Optimistic To Cache Right And Maybe I Can Yeah
[00:55:33]  That's Even Long Right We Can Kind Of Put This In Here While This Is Going This Makes Me Want To Move Our Whole Diagram It Won't Let Let Let
[00:55:49]  Let Let Me Scroll While I'm Selecting Sorry Once We Remove Move Our Whole Universe Over Here A Little Bit Further This Way Render UI Is Not Going To Come With Us
[00:56:00]  Either Is Invalidate That's Fine Do Do Do Do Do Do But If We I Love How Random Things Get Attached Okay We Can Add Ourselves Another Box
[00:56:16]  Here And Fill It In Like We Can See The Optimistic Updates While This Is Happening And But Involves Writing To A Cache And For Can Stack
[00:56:33]  It Was Actually The Same Pattern Except You Saw The Optimistic Updates This Whole Time Right Okay Everyone Still With Me Right And What Remix Did Which Is The
[00:57:02]  Actual Genius Part Of This Thing That They Never Get Credit For They Always Get Credit For Like Nested Routing And Other Stuff That Maybe They Didn't Even Do Originally Is
[00:57:12]  That The Problem With This You Still Need To Cache Right So If You Invalidate The Whole Route And Then Funnel Your Optimistic Updates Into State
[00:57:28]  Instead Of Cache In Femoral Femoral Optimistic Updates If You Do This You Don't Need A Client Side Cache That Is Very Smart
[00:57:58]  Because You're Basically Doing This Anyways This Is How Remix Works Too It's A Waterfall You Post An Action Get A Response The Response Is Like Redirect To Another
[00:58:10]  Page The Client Router Goes Okay I'm Going To Redirect Or Invalidate It Goes To The Other Page Starts Render Goes To The Data Loader
[00:58:19]  Goes Oh I Need To Fetch On The Server Again And Then It Gets There And It Finishes The UI So Essentially Remix Is This Model But They Got Rid
[00:58:30]  Of The Cache Yeah I Mean This I Feel Like This Is Burying The Lead The Whole Route No Cache Okay Are We Following This Evolution Developers Getting Lazier And
[00:58:54]  Lazier And Lazier And Lazier To The Point That Essentially With Remix You Just Post A Mutation Get Some State To Show Your Optimistic Updates UI
[00:59:06]  Updates There's A Reason People Like Remix It Is So Much Simpler There Is Zero Cache Management Right So Some People Don't Like The Forms But Do
[00:59:23]  You See A Similarity Now If You Ignore All These Waterfalls Going On And You Think About Remix In The Term Of A Form Post That Goes You Know Red
[00:59:38] irects To A Different Page Like Ignore The Fact That This Is Kind Of Inefficient You're Back At A Sort Of MPA DX Experience Okay Right Because By Remo
[00:59:51] ving The Client Side Cache You Can Look At Stuff As Just Like Like Form Post And Anchor Links Right So you guys are with me I really want to
[01:00:18]  dig into this from a DX standpoint Because On the fetching side the DX standpoint isn't as obvious for people I don't think so and we'll get into that in
[01:00:29]  a thing Right The problem is and I mean this is the challenge Remix had was they came they came in at this and They're like look you won't need to write
[01:00:45]  another API again people got really angry at Because they were like no this is our single page app kind of you know world where we manage these caches how can we not
[01:00:58]  write these APIs and do all this and the remix is like no no you just post a form get the data back it's like the way the web always worked We'll come
[01:01:09]  back to that quote because I think Dan Abramoff stole that quote from them Recently but what I'm getting at is that this whole movement on the mutation side is because
[01:01:30]  we don't actually like the developer experience of managing caches I mean caching is necessary for um for performance but it becomes kind of clear that we don't want to
[01:01:49]  deal with this so starting to get I'm like I'm hoping the different pieces are churning here so like that we're starting to see the pieces come together We will
[01:02:03]  come back to mutation um a little bit later on But I I want I I want to just kind of establish that from a developer experience standpoint We've been fighting against this
[01:02:22]  stuff for a while right like there it was a huge revelation for people when they realized that when they moved to graphql They didn't need redux anymore like you didn
[01:02:30] 't need unless you had some like Some persistent global state like really complicated applications that had a lot of business logic there You didn't need it and you know You know that
[01:02:42]  was an incredibly powerful thing But then it like it slides on the scale The funny thing is if we went from global store all the way down to remix in one jump people would
[01:02:51]  be like Whoa, whoa, whoa, whoa. This is this is too much Because there are apps That do Have you know More like do need to cash stuff there there
[01:03:05]  is still a need for some amount of client side um Calculation stores like it was just like if you walked down this path It felt like one was just strictly better than
[01:03:16]  the next As we went down Remix was when it finally they were they were finally like well, let's just drop the dead baggage The truth of the matter is it
[01:03:24] 's like not completely dead baggage But it's it's a very react Type perspective to take of being like, you know, you probably won't need it worry about it when
[01:03:34]  you need it so The funny thing about all of this As this is going on we just explained how when we went from here to here we dropped like 30 kilobytes And
[01:03:46]  when we went from react query to remix Well, we probably didn't drop any kilobytes Because it's basically the same pattern we got rid of like a document store
[01:03:55]  So we might have dropped half a kilobyte um But the funny thing here is none of this Actually fundamentally changes the performance gap thing that I was talking about This is a
[01:04:08]  pure dx part that I'm I want to bring you here The actual in fact we made the performance worse with our waterfalls Um, the size of our javascript
[01:04:19]  is not meaningly meaningfully smaller Um, even though we did all this Yes I have a very good idea what it is. I have not seen what other people are
[01:04:37]  doing, but I can extrapolate because what i'm We will get there This this I the reason i'm telling you about this is because the mutation story around If if
[01:04:50]  i'm going to be like If i'm going to be like If i'm going to be like you know spicy Or it's not even that I'm just going to do
[01:04:58]  this Right But it's like it's actually not server components It's it's server. Sorry. It's just off the side. It's actually server functions Plus server
[01:05:11]  components They're we're going to get there though, okay The the there is a certain progression Down this path and each one is does a little bit more than the last
[01:05:39]  But what I was really trying to say is Up to this point we actually haven't made the javascript smaller Even server rendering does not make the javascript payload smaller
[01:05:53]  um, like You need all the code to hydrate the page like look at This not this I've got a page here. Let's go to my profile. I
[01:06:05]  always love using thing I've I love this page As you can tell Twitter is a single page app because of flickering but But What i'm getting at is we need all
[01:06:22]  the data to hydrate like if this wasn't If this was server rendered we need all this data to make this interactive And when we go to our next page, you
[01:06:32]  know switch a tab This top section might not need to re-render But other stuff is here So if we look if they they have to load all the user data for me
[01:06:42]  up front or split some of it into the route But maybe it's better to do in a single request up front so that even the stuff maybe for the next page Like
[01:06:49]  you kind of figure out how to split this optimally but what i'm getting at is like To have this experience generally speaking in a single page app involves making the whole page
[01:07:01]  Sending it to the browser to hydrate Uh question about trpc. Yeah trpc is a fetching protocol. It doesn't matter. So trp
[01:07:13] c typically lives In number four um Like To me trpc is just the the mechanism. Um, and to be fair server functions Are a bit of the mechanism,
[01:07:31]  but you could put trpc in a server function. So like I I to trpc is kind of like the it's it's like I call this graph
[01:07:40] ql, but it's actually it's because the client part of graphql actually matters Um, the but it's like the protocol like underneath for the communication trp
[01:07:48] c for me is like that it's underneath Okay All right, uh, sorry, uh, but But my point is I mean We can do a little bit of a
[01:08:09]  mental exercise here Like we can draw the twitter page And try and think about how we don't send all the javascript to to hydrate this page like what would you
[01:08:20]  do to not do it because Like the first thing you're gonna do I mean let's draw this you know screw this let's draw this um How did uh, uh
[01:08:36] , let's get some white? Let's get some transparent. Let's get some square corners Let like Let's draw twitter Sidebar my profile my profile my feeds My
[01:08:59]  feeds Let's add some navbar here Let's add a Like a navbar here Okay The thing is The thing is The reason I brought this example is because this is
[01:09:26]  like the remix nested router page example that I love showing is we could take sections of this and be like, okay The outermost box Let's see if I can
[01:09:35]  grab the outermost box I might not be able to Okay, the outermost box is white, okay, and then the next box inside which is This is
[01:09:48]  my fault for putting everything on top of each other this box Did I draw this wrong I did okay cool What I meant to actually draw was This box sorry. I'll
[01:10:09]  put everything back together again. This is the my page we're gonna make it blue and then In my page There is a feed section This blue is like not doing it
[01:10:27]  for me But I still prefer the The light mode It's so much better for getting like Way more potent powers It's fine. I'm gonna I'm gonna remove some
[01:10:44]  of the boxes. I don't need here Um In my feeds, I'm gonna give it a different color like green And then whatever else it's like slide This is
[01:11:00]  gonna be Brown because it's part of this and this stays white. Okay, cool, right twitter What I'm what I'm trying to get at is that like Because the
[01:11:12]  brown or the green sections could swap in I'm going to bundle along those lines Essentially Because sure this white section might never change or might have smaller pieces on it that change
[01:11:29]  but because When I load my initial page i'm going to load the white bundle the brown bundle and the green bundle When I go to another page I will you know like another
[01:11:41]  tab maybe i'll just load the next green bundle And if I go to a whole like to the like out of my profile somewhere else I'm going to load this whole brown
[01:11:50]  bundle Which means that the code is split along these lines and you basically to get all the interaction Interactivity on it you basically like send it in these big chunks Um
[01:11:58] , and you need all of that javascript when you initially load the page There's no easy way to not send all that javascript because if you pretended that like
[01:12:07]  we just sent the javascript for This piece Because it's interactive When when we leave the page and come back we will need this javascript piece as well as
[01:12:21]  this one like you'd start having to break Everything into a billion pieces and then somehow decide At very smartly which pieces you should load Initially versus which to load later And
[01:12:40]  You could build a framework around this right Um But what i'm getting at is the problems these pieces aren't independent all the time sometimes they talk to other pieces in it so
[01:13:00]  Yeah, i'm just saying when you get into this kind of stuff in this level of Optimization you're you're Like people have been playing with this stuff for years
[01:13:09]  the the the term partial hydration remember some of the earliest preact ones Is where they rendered parts of the page to the html and then other pages parts not So they
[01:13:18]  basically would look for static content and then be like okay. I know that from This section down here This is static So i'm going to instead of sending you know the
[01:13:31]  javascript i'm gonna I'm going to Like make this into an html template I still need to send that html to the browser so that this component
[01:13:39]  when it switches can renders it But I have this ability to not have like the react code and I feel like for some people even when they look at server components. This
[01:13:49]  is like their mental model. They're like oh Does that mean that when i've loaded my page I can go to the server and replace the section? um As I
[01:13:58]  will you know, I call this the lakes architecture where you like have this mental model that oh this is static I can just call out to the server for it um We can
[01:14:08]  talk in a minute why that's a terrible idea, but um I I do want to kind of highlight that it is Basically partial hydration and client-side routing like single
[01:14:19]  page apps are completely at odds with each other Yeah, you you guys got where I was going to this this is this is what quick it aims to solve Good i'm glad
[01:14:33]  dan is playing with with remix. I think that was like the biggest shocker of that whole event was that If you're how should I put it if you? Want
[01:14:44]  all the meta frameworks to use your stuff Right, that's the whole idea. We're building a react for all the meta frameworks You you you got you got to be able
[01:14:55]  to identify with your customer, right like Like that divide in mentality the the thing that led to the arguments between kent and um, dan shouldn't exist Yeah, I
[01:15:13]  know right, but react is not the same react as before If if reacts customer is not the end developer but next js's and remix of the world That's where you should
[01:15:22]  be spending your customer time On initial render you don't need to call it the server because it's already there that's a good point and that's the thing but generally speaking
[01:15:35]  You always have to consider that you're going to route back to that page or you know And then suddenly you once you Once you have to go back to the page all
[01:15:45]  bets are off Because you need all the javascript. This is true of quick too. It was one of the earliest quick demos. I remember playing with I there's
[01:15:52]  a reason why most of quick demos are mpas these days is because like you would They'd be super smart and like load the javascript as you interacted with it And
[01:16:00]  then you click next page and then suddenly it was like They've obviously have back-end service worker doing like the pre-loading, but it used to be like
[01:16:08]  bam Here's like a hundred and thirty scripts coming at you Because they needed all the pieces suddenly as soon as you did a client-side navigation The original movies demo was like
[01:16:16]  that and then they switched it to an mpa Because like Even even quick with this capability I think this is a really important point and i'm glad you brought it up
[01:16:27]  I think even quick with this capability of being able to break this down automatically to the finest grain level Does not want you to just go to the next route and have to load
[01:16:37]  all of the javascript Okay, so this idea that like infinite code splitting is is gonna like completely solve the problem Is not it like people experimented with this and
[01:16:54]  thought about this and this is This is kind of where the the challenge is. This is why like trying to take that single page app mindset Had trouble scaling And I think you
[01:17:08]  could solve it Like I think you could do a lot of smart stuff and probably solve stuff in a way that's reasonable We might get there, you know in a future
[01:17:15]  iteration I never say never because these things come around as loops like this might actually be the next the next loop might be like that but what i'm getting at is When you
[01:17:27]  look at it from a developer experience side as well And you compare where we got today and to where we can go here Can you get 80 90 of the benefits without worrying about
[01:17:38]  any of this? And I think the answer is yes And get dx wins as well while you go Yeah, I mean i'm not gonna lie remix is in a hard
[01:17:56]  spot when I saw remix I was like Man, they just recreated everything that suspense already gives you for free in transitions This is like a huge benefit for us working on solid
[01:18:05]  solid star because I was aware of this that our version of remix is basically Like built on the primitives so like solid star always joke about having like nothing in it Yeah
[01:18:15] , just you know the fun of trying to put any pieces together It's literally because react is building all this stuff into the core Yeah, I mean whatever Fine clip it
[01:18:30]  I mean there's there's differences. There's similarities. There's no way that I can't acknowledge remix is incredible um contribution to where we are right now Right It
[01:18:42] 's funny It's funny everyone's like looking for some like combative angle the only the biggest problem and maybe i'll talk about this in this week in javascript later
[01:18:52]  Is the combative angle that's always the problem? This is why I always have issue with like some of the like former react core team and all that kind of stuff
[01:19:02]  It's just because they talk in such absolutes like they've solved the universe And then you like the reality is never meets expectation Um, anyway Anyway, so Where
[01:19:24]  i'm where i'm getting at here is There is a solution to this problem of hydration and this solution Was just was kind of discovered 10 years ago In other frameworks in other
[01:19:39]  places I mean it was discovered even earlier right because I mean jquery doesn't have this problem This is a declarative ui problem the fact that all our components are
[01:19:48]  closures over each other And one approaches unwrap the closures the other is like don't have the closures in the first place Yeah, should I just stop answering
[01:20:01]  this question during the stream? I feel like Yes, and that's exactly why i'm doing the stream. Yeah, okay Right, so The answer to this particular problem
[01:20:22]  Was solved in big companies with custom frameworks behind the hood over a decade ago You'll see references of stuff like whiz You'll see references to custom frameworks that Amazon uses You
[01:20:37] 'll see references the only one that actually was open sourced Um, was that I know of was actually one from ebay that I happen to work on called Marco Marco
[01:20:49]  solved this problem a decade ago And you can find And you can find The stuff around it with async fragments With Let me see if whatever I can was it read it
[01:21:06]  Yeah, async fragments rediscovering percussive html I love this article It's it's like no one knew what was going on Patrick Steel item creative
[01:21:17]  morphed on creative Marco writes this article where he basically explains to everyone how suspense works about a decade ago He talks about out of order streaming And how you can render parts
[01:21:27]  of the page and then only send you know the javascript for the parts you need This Yeah, well, you got to give credit where credits do right And we
[01:21:41]  talk about remix a lot because remix deserves a lot of credit in terms of getting people over the hump like don't get me wrong Next and react server components would have landed here
[01:21:50]  Despite remix right like the like or like it doesn't like the I don't It's not always like a direct influence kind of thing But I I think that like It
[01:22:04] 's important to note that like when ideas come into the public Mindset to give them credit because they do the work for you If someone gets everyone sold on the concepts that you
[01:22:14] 're going to sell it with your with your stuff Then they deserve credit even if they didn't influence you Of course, of course, we're going to end up talking about
[01:22:24]  astro Right and and the thing is don't get me wrong marco doesn't solve all the problems, but they solve this one Quite well And the thing is they
[01:22:41]  they again about giving credit they they they have they listed like six articles About like how this wasn't a new idea. They've seen it in other things that weren't j
[01:22:49] avascript frameworks And I I love this one because literally in 2005 people were already caught calling this stuff a lost art Um, and i'm like I I always kind of
[01:23:00]  decide when I'm going to show this bookmark, but I got a dan abramoff gave me one of the best Quote tweet like upsellers I've
[01:23:11]  i've ever gotten uh when I was working on marco Um, I see if I can find it here This was a good one too effects are reactive, but let
[01:23:22] 's let's not go there. Um If I go back far enough I should be able to find Hopefully I should have looked this up a front it's funny how like I
[01:23:36]  can't just not just using my bookmarks now is like Doesn't work anymore like i've gotten to a point I joined twitter really late So for the longest time I actually
[01:23:45]  just depended on these bookmarks as my way of being able to Like keep track of everything that was important Uh Here we go found it. I haven't looked closely
[01:24:01]  at marco, but this 2014 article describes a mechanism that's ahead of what most mainstream solutions Including react do in 2020. We've been working to add this to react since
[01:24:09]  about 2018, but it's peculiar how this is almost a lost art Okay This is this was huge for me um, and marco team because we we we've been
[01:24:32]  facing a little bit of scrutiny. Um, you know about like why aren't we using react or whatnot and uh this this was This was like an acknowledgement that was really
[01:24:41]  important um So i i'm still very appreciative of dan taking the time to giving us an odd, you know Anyway What i'm getting at is that There's this idea
[01:25:02]  of partial hydration and in marco. Uh, I think the best description funny enough didn't come to many years Later, maybe you don't Need that spa michael raw
[01:25:13] lings meme master Himself That no one knows about um Basically That's the idea of partial hydration The idea that If you can Isolate the stuff on the component level Then you
[01:25:33]  don't need the stuff for the static parts now. You might be like, okay, didn't you ryan? You just tell me you can't do that with a
[01:25:38]  single page app Yeah, actually I kind of did which is why marco is an mpa framework. I don't want to we So I do want to like put
[01:25:52]  it out there marco Doesn't give you a single page app like experience But we we also have to look at How things have changed like in marco. This is really
[01:26:02]  simple. You didn't even have like islands, so to speak It's all written in one language. You literally like the islands were automatically discovered It's like you have a
[01:26:08]  class component if your class has state it's an island and everything underneath it is an island otherwise um It's fine when I say everything underneath it there there's something subtle here
[01:26:20]  So I think we should we should talk about the astro marco React server components There's a reason at the beginning of the stream that I said that react server components
[01:26:32]  is a is an islands architecture Because it follows the exact same rules that were set out by marco a decade ago that Astro and fresh use it's and there's a
[01:26:42]  very good reason for these rules Okay, so there's a long um history in how to do this Right the react is not the first to do that part of the equation
[01:26:56]  the structural part and this is important from a dx standpoint I want you to understand because we just talked about how the dx mutations are we're heading somewhere. Let's talk about
[01:27:06]  the dx of of Of um Of managing partial hydration Okay, so It it comes down to to this there's actually only um Maybe I need another pen here It's only
[01:27:26]  I don't know even know if I need a list but i'm going to start with the list here because it always helps me to jot down my thoughts There's there's
[01:27:32]  only There's only actually one big rule of of these things Client components can't Import server components This is the golden rule. This is the architecture. I'm going to
[01:27:53]  explain why this is the case But this is This is basically The whole basis of the islands architecture And it's kind of obvious when you work through it in you know in
[01:28:11]  detail because you I almost have to propose The opposite architecture first for people to actually like appreciate why this is so simple and so effective So to clarify here what I mean is
[01:28:25]  client components Are you know our interactive components that are stateful and server components are our server only components That run, um, you know only on the server and if we're
[01:28:35]  going to start this conversation from an mpa standpoint Because it's really easy to see this from an mpa standpoint right because if I go um to a page Pretend something
[01:28:46] 's an mpa doesn't really matter. Um Doesn't really matter what I pick here. Um I mean I can use I can use his example, right If I
[01:28:59]  go to mpa and I Only have the javascript to hydrate these red sections of the page, right? I don't have to worry about ever coming back to
[01:29:10]  this page or navigating because when I click to the next page I'm going to re-render the whole page again and only send the javascript for the pieces I need
[01:29:16]  again And when I come back, I'm going to re-render the whole page on the server again And only send the javascript for what I mean. I
[01:29:20]  mean I can static gen. I can do that I'm not talking about dynamic versus static generation or anything I just mean conceptually I go to the next page Only send the
[01:29:28]  minimal javascript and I don't care about the static stuff because Unlike a single page app where technically everything is dynamic I I i'm i'm throwing it away anyways on
[01:29:40]  navigation And it's fine because it's not stateful. We have no state to persist So to speak on on the static stuff the problem of course is if you wanted
[01:29:49]  to persist these islands You have a different challenge, which we'll we'll get to In in in a minute, but essentially the the key to the architecture is that is this
[01:30:02]  because You're you're I guess there's a second This is actually the second rule. This is the second rule of server components The first rule server components is the root
[01:30:12]  is on the server okay However react can import server components in client quotes no No, it does not this is this is Very important does not There's like a a sort
[01:30:39]  of exception In the sense that you can like set a new route essentially, but from an authoring expense perspective you cannot And this is for a very good reason Treating
[01:30:58]  this as a whole app before we get into nested routing is probably our best bet but the idea is You can kind of see this if I if it with some color-
[01:31:10] coded code and I think dan has Did it like he actually drew that here, but i'm gonna i'm gonna i'm gonna do it myself for a moment here
[01:31:17]  um I'm it's like color coding and i'm just going to use words, but I guess but my point is At the top here you have Do we want syntax highlighting
[01:31:35]  will that make this feel better? We'll use let's get syntax highlighting screw it, okay? Um So at the top here I'm gonna just make app okay And
[01:31:55]  this conceptually is like on the server, okay? And then i'm gonna return a client component Okay And this client component is something interactive that we want But what I want
[01:32:14]  to show you about the way server components work is Technically speaking the client component cannot import server Stuff like it can't import a server component however I can pass server content as children
[01:32:39]  Shut up type script Okay Shut up type script okay and As I said One thing I did say at the beginning of the stream I want to kind of highlight this here is
[01:32:55]  I'm talking about this from a generic sense um The react specific implementation is less important to me because I believe that we can do this for every framework Both as a specific
[01:33:05]  spec and as an agnostic spec and I've actually written a document outlining this So what I'm getting at is What I'm getting at is What I'm
[01:33:14]  getting at is You can interlace these trees but And you can put more client components in here But there there is an important um There's an important detail here that I
[01:33:32]  I want you to notice about this tree Also on the server and to be fair this is doable in every single islands framework This is not react this could be fresh this could
[01:33:52]  be marco this could be astro This is just the way this works Even even quick actually to a certain degree like that they they will you can write your code this way
[01:34:02]  to optimize um And what what i'm getting at is So This is a continuous tree because when you look at it when you're here and you're like i'm on the
[01:34:14]  server You can basically ignore these things and render this all on the server and this the server can do something like const data fetch me some data right okay And it can say
[01:34:29]  hey client Here's some data again I don't care how you fetch it async components top level await in astro Using whatever mechanisms in fresh or solids resources or whatever
[01:34:41]  You know you you can you can pass data as props to your islands Yes, there's a router and we'll get there but I want like that is not the important part
[01:35:05]  Yes, yes, and either they'll err on you or you've just made a server component to a client component Yes And like If if if you're like using compiler
[01:35:18]  that automatically figures this stuff out and doesn't make those boundaries clear like marco does This is exactly what would happen Um other ones will be like no. No, this is
[01:35:26]  a server component. You don't want to do that But yes, so technically a server component becomes a client component if you import it And there's a reason to have
[01:35:33]  maybe some errors or some warnings about that because you know Your server component might be talking to the database and then you you know that isn't good i'm pretty sure That's
[01:35:42]  why uh react would kind of be like no you can't do that because that would that would be bad Right if it's something downgraded you know server component that has
[01:35:52]  secrets to something that's on the client But so that isn't a concern don't worry like the reaction i'm going to spill your secrets on the you know, so
[01:36:05]  to speak I'm just saying that the server tree is this continuous tree that can pass props into the client components And There's actually We'll get to this more later.
[01:36:33]  There's actually one more rule Um essentially that has to do with client components, which is that um Only client components Can access Client context Okay But for me But for
[01:36:53]  me it comes down to these three, okay? So We'll we'll explain i'll explain the last one why in a in a minute but back to our Playground here
[01:37:04]  I want to show that this is a continuous tree with props What's interesting about this design is if i'm somewhere here and i'm on a client And I have you know
[01:37:14] , i'm gonna make my function client here, okay This is my Client or interactive component It's it There's some confusion here and we'll talk about the s
[01:37:23] sr impact in a minute But for now just pretend this is like Like That this is a you know, actually this is the right time to bring this up because client components
[01:37:34]  aren't actually client components They're they're isomorphic components because they have to run on both sides like This would not be very interesting Where is it? This would
[01:37:46]  not be very interesting if these red areas weren't server rendered And then you got to the client and they're white and then they They rendered in I mean you can do that
[01:37:56]  with web components essentially like that We've had that architecture for years and years and years and years and years and years What made marco or astro interesting was that they would
[01:38:06]  Server render the whole tree and then hydrate the individual parts So We can get into that but that's like again another dimension here like once you have the model in your
[01:38:35]  head You don't like this is just a natural extension About like the build time thing. I don't think that part's actually that important again I Like it's the
[01:38:45]  same way that you can like cache a page or Do anything Uh in terms of in terms of like that what i'm trying to get at is the isomorphic component,
[01:38:54]  which you know const State equals use some state whatever like This component has props that come in Like What what do we see we have data and we have children, okay?
[01:39:13]  And It's really important to understand this because It's gonna do its thing Which I have no clue what its thing is But it doesn't matter And then it's going to
[01:39:31]  put the children in there. There is no Way Way In this model To To very well not like easily and at least with serialization boundaries you can enforce this To actually
[01:39:45]  send props from the client Back to the server The server tree is connected Right We saw the whole thing and it has these client islands in them, okay These you know This
[01:40:02]  client component is isomorphic island And it has its state and whatever stuff in the data and Data and state together can have you know have some fun and render some interactive
[01:40:17]  stuff But ultimately See the problem is if you could import the server component in here and expect to be the server component The client component could actually drive the rendering Of The server
[01:40:29]  component and we don't want that some people have been making demos like that I saw a bunch this week like earlier the week Daishi's early example Vue actually Believe it
[01:40:40]  or not has a server component demo and it's based Like they were talking about like how you can't have interactive components in it yet And it's basically the same thing
[01:40:48]  and I call this the lakes architecture because when you come from us a client side mentality Where you use follow a different set of rules Where you say the root is on the client
[01:41:00]  and then you have server components in it You you invert this This chain so to speak, right? So let's talk about lakes for two seconds here because I want to talk
[01:41:12]  about about this Because the whole idea with lakes is is is this idea it's like client root Pass Props to server component And the the problem with this model is The
[01:41:37]  the trees are inter intertwined especially if you're trying to do both ways because the truth of matter is Even though the client root False sort of because All Interact all
[01:41:51]  websites start on the server Okay, so Like from a holistic stance It's not completely true and the problem with with lakes is that If you just weave your components naively so
[01:42:13]  you can go Let's pretend the clients the root we go client And then the client has a server component Okay, so You know what? Let's use code. Let's
[01:42:28]  use code Let's let's do something similar to this but Let's yeah, let's look at our lake, right? So now we're going to pretend Um That
[01:42:46]  we're in a client app. Okay, like it doesn't really matter I'm not gonna worry about this fetch data for a moment But let's pretend now that our we
[01:42:56]  have like we don't need this top of a client component Like let's pretend like in here We've got some stuff which is now You know lakes on the client and inside
[01:43:08]  our lakes. We have Server component And It takes you know Get our data in here And Okay, and Let's pretend um Actually, maybe I'm going to show
[01:43:34]  the the dueling banjos so to speak So we have a client component that has a server component in it And our server component Like again, I'm not talking infinite loop
[01:43:42] . I understand what i'm about to write as an infinite loop But just just follow me for a second here server component Returns our client component, okay Maybe It passes
[01:43:57]  whatever some chilling hello. Okay, whatever it doesn't matter what i'm getting at is Props I'm not trying to create an infinite loop I understand what I just
[01:44:09]  wrote as an infinite loop What i'm getting at is if you have this sort of isomorphism where Where like You can just like import any on either side What you can
[01:44:21]  you can get into this chain where These can be different server to server client to whatever but you can get in this chain where essentially You update a prop in the client It
[01:44:32]  Says hey server you need to update your data So it goes Across To the server And the server goes okay cool. I got my new data I'm going to Use that data
[01:44:44]  To render a client component And send it back and then The client component Gets gets in and starts rendering and it goes oh I've got another server component I'm gonna go
[01:44:54]  back to the server And i'm going to Passing my data and then the server component goes and it does its work and goes oh I have a client component i'm
[01:45:02]  going to send back its data You basically End up with these crazy waterfalls because Because the server tree isn't connected to itself They they like i'm not talking about an infinite
[01:45:15]  loop here I mean literally you can just like pick a page layout and just kind of Follow the props top down you just kind of go update the props on the server component R
[01:45:25] ender some server stuff get back client component Client component renders or updates its props then it Has another server component in it and then it does it like Serverless generation
[01:45:46]  i'm got you man So I hope to understand like the point out there that lakes Are not good because innately the model allows really bad waterfalls like you might be
[01:46:07]  like Oh, no, I only want like if you're going to avoid waterfalls All you can do is put your server components at the leaves And if you go back To
[01:46:15]  this diagram, you'd I don't think server components at the leaves are actually where the wind is And do you want to know why server components at the leaves are not
[01:46:23]  where the wind is? It's because of data serialization And again, this is a technical reason but we'll get back into dx in a little bit It's because The
[01:46:35]  problem is If we do get our structure and I I want to show this because this is how it actually weaves Right if you import it, but what you what you actually
[01:46:47]  are ending up with is this structure of like Uh, just get some text of like, you know, maybe client to server To client To server Because you don't know
[01:47:07]  what possible data that the client could send back to the server And then the server you know uses that to get the client and then the client again doesn't know what possible data
[01:47:17]  You basically need all the data All the way down that could be used in any of these components when you weave like this like If like if you had like a a user
[01:47:30]  model and The client can decide which fields it needs to show Right If you start from a client kind of centric model and then go through like this You need to like
[01:47:47]  basically know Every possible field on the user that the client would need Up front in the whole tree downwards And there's no easy way To know that when you can just kind of
[01:47:59]  Weave through like this What's interesting is when you go back to this model The only data you have to serialize Are the props The server being a continuous tree
[01:48:14]  Like and There's there's no there's no need To worry about anything you don't pass through as props to the to these components This is the other part of the win
[01:48:28]  I've talked about this before because look your server component could render Like picture a hacker news demo Uh, what do we got solid Hn islands sure sure This is actually
[01:48:41]  solid server component demo just side note But what I want to point out is you you can render all of these stories on the server and pass them Actually, let's use let
[01:48:53] 's use uh, let's use this You can render all of these comments on the server And then use these client islands to collapse them And because the comments are all rendered
[01:49:06]  on the server You never need to hydrate them You never send the data If you the only in fact these toggles don't need any state passed to them So much to
[01:49:15]  the point that if we look for like our next js json equivalent for this app It's empty Um, where is it? Here it is Island map Like the the data
[01:49:26]  serialization is actually empty for this page Because you don't need the data to hydrate any of this And the client component didn't have any props It just like had
[01:49:36]  its internal state And it wraps other server components Because there's no communication between them You actually don't need to send the data It actually solves the data duplication thing Because the
[01:49:48]  server Components are know that they've encoded the data as html And the client components Um Don't need to like they're not privy to it It
[01:49:59] 's impossible to pass that data To the client component From the server except through the props that you know about Okay Yes It's actually one small solid component to be to be
[01:50:20]  fair Right solid But yes That that that would be the mentality Yes Yes My hydrogen clone uh Hn clone used server components too Yeah We've been we've been using server components
[01:50:35]  on this stream For over For for for about a year now Yeah Sure sure um Yes There's no js needed on the page But I mean You can see how that
[01:51:00]  solution doesn't scale And the solution we're talking about does Um Once you have this these This this rule You basically eliminate waterfalls And you solve the double data serialization problem
[01:51:17]  Okay Just by design So lakes Are not what you want They are not server components In order to actually get the benefits You need an islands architecture Okay So There we talked a
[01:51:35]  bit about performance Um I'm hoping this this part so far makes makes sense Um Server components Are an islands architecture They But there's implications of being an islands architecture Right You
[01:51:56]  could Like You could maybe like Have like fun on like a leaf node or something Um But like That's where the The app starts So to speak So I'm I'm
[01:52:14]  hoping What What I'm trying to convince you with both This example And With This earlier Conversation about mutation Here Which is Um Mutation In js We actually kind of just
[01:52:38]  want MPAs Like Like Like I know that's kind of like an absurd thing You know because there's benefits of single page drafts But like We've been trying
[01:52:54]  to rebuild the MPA Mutation model And We've been trying to rebuild Marco's partial hydration Like I'm not saying this is where the story ends I'm just explaining
[01:53:15]  why Lakes are like the extreme Of us thinking about trying to optimize From a client's side perspective I have some real live examples of lakes That we actually see in some frameworks Here
[01:53:26] 's one SvelteKit has lakes Technically speaking Um Not in like the The client Um Like Rerender sense But They have no hydrate routes In Svelte
[01:53:39] Kit Which I thought was really really clever What they let you do Is have the client side router And then certain pages That are static Essentially Don't hydrate them And because they
[01:53:49]  capture the The anchor And like form Stuff Like they delegate the events They You can use these pages As if They were single page app style Without hydrating them So Like If
[01:54:05]  you keep the If you keep the experience Down to just anchor tags And like forms You can basically Do Really simple Static type stuff With a client side router Because It will just
[01:54:21]  like Re Like It will just re-render That route section After the fact Like as a client Component But at initial hydration time It doesn't need Any of the j
[01:54:34] avascript code To work For the specific section I hope that makes sense It's because Like They didn't have to bundle The component Two different ways They just have The bundle Or
[01:54:44]  the bundle-less version And the bundle-less version Happens to play into The global router To me This is a version Of the lakes Thing The downside Is you don't
[01:54:53]  You can't Add any interactivity The second you add Something interactive To that page Below The no hydrate point You have to bring The whole page in It's on or
[01:55:01]  off But it's like An extension Because like The remix has been Very big on Popularizing that concept Of progressive enhancement And that's the idea Like if the javascript Isn
[01:55:11] 't present You know We turn off the javascript Page still works Right You might click on this And then the whole page Refreshes to collapse The comment But At least
[01:55:21]  you didn't Have to wait on the javascript If it fails Something goes bad And in terms of Like Being like a Fail case I think that's really good But
[01:55:29]  the problem is Like from a hydration standpoint You have a completely Different experience If you click something Too fast Versus waiting for it To hydrate And having the javascript But
[01:55:40]  And it's very on or off It's like You have the javascript You don't have the javascript And On early page load That's not up to you
[01:55:48]  But like If you just turn off The javascript On some pages You know You can Kind of Progressively fall back Into like An MPA A static MPA site
[01:55:59]  But like Once you have to leave that Like let's say You're in that static MPA site If you want to get back Into a spa page You're going to do
[01:56:05]  A full page refresh And if you're in the spa page And you go to that page You have to get to that page From a full page refresh SvelteKit has
[01:56:12]  kind of Solved this By sharing a client side router With those static pages Which is really kind of cool But what I'm getting at is In both cases The second you
[01:56:21]  want Any interactive javascript The whole app's coming in Like the whole page Yes Yes Non-global state Between two logically Distant components And server components What's
[01:56:46]  the solution to that? What's the solution for that? I'm trying to think about it too much What's the solution for that? I'm trying to think about
[01:56:51]  it too much Yeah You have to use client context Essentially as the solution for that Because the communication is rightfully blocked off Because the client can't communicate directly Like the
[01:57:10]  server structure is continuous But the client structure is separate You want it for partial hydration You want it for partial hydration because you want each island to be its own thing The solution
[01:57:22]  is that all the islands can be connected together using the context API And this is something that we haven't implemented into any examples in Astro We haven't implemented into
[01:57:43]  any examples in Astro But I did do that in solid start So we could It's more up to a problem for the client framework to solve Than the server framework to solve
[01:57:52]  So to speak As long as the client islands can communicate with each other This should be good We'll get into that a bit later About the challenges of approaching this in an
[01:58:03]  agnostic way I honestly don't know in this detail They might be The problem I think most of the time Quick dodges this Because they go to being an MPA
[01:58:17]  framework So the page is going to go away anyways when you navigate Otherwise It's interesting I imagine though I would just use the exact same rules I'd use the server components
[01:58:32]  and work here Like the thing I want to point out here is This isn't something you cleverly solve around There is a real boundary Between the server and the client So either
[01:58:42]  you're serializing it or you're doing something else What's cool about this island's architecture Is two things You know Where the boundaries are Client component props Are the
[01:58:56]  boundaries This has to be serializable Okay This This has to be serializable And then the second thing is what I explained already With the way the trees work Essentially you don't
[01:59:11]  have to worry about Like You can solve You can optimize a bunch of things Like the data serialization And waterfalls and whatnot So Sorry We're trying to get back to
[01:59:25]  where I was trying to get to this I was just finishing telling everyone that everyone Actually kind of secretly wants an MPA But it's a bit more It's a bit
[01:59:39]  more nuanced than that Because obviously we like client side navigation I mean There's no way to actually get around that Let me do something here Let me see if I can
[02:00:01]  find some of my HackMD stuff Sign in GitHub I've been writing documents Describing the behaviour Of how you could apply These architectures To different Sorts of
[02:00:34]  approaches And I don't know how much I'm going to reference This particular doc There's a lot of considerations here As we kind of Move forward But I want to kind
[02:00:47]  of Start talking about How Now that I'm hope I'm hoping now that we're all on the same page That secretly we just want an MPA That we can Talk about
[02:00:59]  how we actually solve the problem here Yeah, it's interesting Because Dan Abramoff Drew this Drew this diagram here Trying to show that The same thing Of how The components
[02:01:22]  All kind of like Weave together So like in this case The green ones Are the client components And the blue ones Are the server components And he's showing Like the black Is
[02:01:30]  like when they become HTML And in React There's very much A step process here But like I don't think there has to be It depends on what your approach is But
[02:01:40]  essentially What he was showing Is like the first step Is turn the server components Into HTML And keep the client components in place And then the second step Which Either happens during SSR
[02:01:53]  Or happens Later On the client Is to turn the client components Into the The remaining HTML And I like this one I wanted to pull it out Because I was hoping That in
[02:02:15]  addition to my explanation That I just gave That this kind of Helps fill in the gaps Like you This is what I was talking about With the tree being contiguous Because you
[02:02:25]  can actually Render all the black parts Without touching the green parts And then isolate the green stuff I've often made that comment That React server components Is like taking a framework
[02:02:37]  And wrapping the existing React With it Like it's like Astro Almost There are some rules To be sure Which makes server component Client components Not the same But generally And
[02:02:52]  that's why the authoring Is different And also just like Other things Like there's no need for state But it was like A kind of interesting observation Because any client component Can
[02:03:01]  be SSR Technically speaking Any client component That doesn't read context Could be a server component This is an interesting consideration To be fair But This is why the boundaries Are I
[02:03:20]  think one of the most Frictionous points In terms of APIs So Yeah He didn't draw the router Yeah So This is why I like this diagram Because It shows the Ment
[02:03:43] ality The very first React server component Demo Confused a lot of people What was it? Bundle Bundle Zero bundle Was it zero bundle Server components Introducing zero bundle
[02:04:00]  React server components If you watch this It's great stream Great that And they had a demo They're like Hey clone the demo We clone the demo And we looked into this on
[02:04:08]  stream A little over a year ago When it started clicking For me And what always Confused people about this demo Is there's no server side Rendering in this demo There
[02:04:18] 's no SSR in this demo It's a notes app And actually Do I have my own version of it? Solid notes It's fine I don't remember the link
[02:04:33]  Off the top of my head Because we remade this demo With Solid's version obviously Is that It's very much about the way React approached this Right? Because for them
[02:04:48]  They started Kind of like Can we do Can we do this initially So that we get to here And then can the client do this? So essentially In their version All the client
[02:05:03]  components Only rendered in the client Essentially For their initial thing And then as they changed it They could swap out the server components But there was no There was no SSR I
[02:05:17]  approached this problem From the complete opposite side We built islands Like Astro first I love Yes Yes That is the demo isn't it? Let me see if I can see it
[02:05:32]  Right This demo is always Like a little bit of fun Because What's cool about it Is like These things are server rendered So you don't ever need to send The JSON
[02:05:46]  for them And then But then when you go new Then you load the code To actually make Make the editor Right? If you If you got to go in here Then now you
[02:05:54]  can edit it And be like Here's the title And somebody's deleting notes On me in the background And stuff But What I'm getting at Is like This demo The original demo
[02:06:12]  Didn't have SSR And was very simplistic I think our demo Does have SSR So maybe this isn't The best comparison Okay Anyways I kind of got a little bit Sid
[02:06:21] etracked there for a moment But the demo Was a very simple List management tool That didn't actually do the SSR And because they were Really focused on just Weaving the
[02:06:32]  trees together And making sure the pattern worked Coming from it From our islands approach If If you already have islands You have the ability To Get to this On the server For that first
[02:06:50]  render You can just go From straight to here On the first render And then The question Then The question is Starts being How do you Find the anchor points To Do the replacement
[02:07:03]  And The simplest version For that Is Something that Astro Was playing with For a while too Which is A rails technology Called TurboLinks Or Turbo now Let's see if
[02:07:20]  I can find Their official website See This has been archived now Because they don't call it TurboLinks They're now Turbo TurboLinks was Very simple Simple approach
[02:07:30]  What they did Was take Your standard MPA website If you click on any link Hijack that link Instead of Reloading the whole page Basically Diff the head And
[02:07:43]  replace All the HTML Underneath So you get Pseudo Client side routing Because the whole page Doesn't reload But all the HTML Is basically Replaced beneath the body And
[02:07:55]  then You only Because that page You know You merge the head Essentially You can pull out The You know You load the new JavaScript for the new Island you need on that page And
[02:08:06]  you get an experience That's like Kind of like Kind of like A really Basic version Of client side Routing For For MPAs And To be fair Turbo Still runs
[02:08:23]  that way With Rails People seem to be Fine with that I think Flamethrower JS From Fireship Is Is the same Sort of Idea Okay IELTS Us
[02:08:43] es Turbo This is This seems Fine Right I wrote an article About like All the different Patterns you could Use for front end And This kind of Routing I called Hybrid I
[02:08:58]  hate my Labels I was having Such a hard time Coming up With the labels For it Like what was it Dev2 Dashboard Patterns For Building UI Frameworks This
[02:09:12]  one Yeah Okay Or I was talking About Routing And I Did a whole Stream Dissecting This article But Essentially Turbo Links And this Stuff Is what I call This Sort of
[02:09:25]  Routing Right There's Implications Of being Able To Make These Decisions Right If You Have A Classic MPA Yeah Full page Reloads You don't
[02:09:35]  Preserve Client State Below Change No You lose The whole Thing Client Side Transitions No Renders On The I mean Maybe One day With The new Browser APIs R
[02:09:43] enders On The server After First Render Yes JavaScript In The browser None You don't Need Any Using Express Right This Post You Could Try Client Sign Transition On A
[02:10:00]  Full Page Level But You Know It Still Render The Page On The Server And You Don't Need That Much JavaScript To Pull Off This Trick Maybe Like Two Kilobytes Or
[02:10:10]  Something On The Opposite End Of The Side But Notice How These Both Have Multiple Entries Usually The Authoring Experience Is That The App Is Essentially Each Page Is Page
[02:10:26]  As Single Entry Point And That It Is Just A Matter Of Nested Layouts But The Thing With Client Side Routing Is Yeah There's No Full Page Relo
[02:10:34] ad And It Preserves All The State And You Have The Transitions But It Doesn't Render On The Server After The Fact Which Means You Need All The JavaScript Which Is
[02:10:44]  A Lot And I Use React Router As An Example I Called It Transitional I Regret That Now Because Rich Harris Retconned The Term I Realized That
[02:10:57]  Nested I've Used Rails I Realized That It Anyways What I Was Getting To Is That There Is A Solution To Routing That Combines Both Of These And
[02:11:23]  This Is Something That I've Been Exploring Pretty Much All Of Last Year That Was My 2022 I Wrote In January That The Future Of Routing Was On The Server
[02:11:33]  And Then Basically We Delivered On What That Could Look Like In October When I Released The Jav What Was It Client Side Routing Without The JavaScript I'm
[02:11:44]  Just Going To Drop This Article In Here But It's Important Because This Shares All The Character Of Of What React Server Components Or What A Server Component Router
[02:12:02]  Would Have And I Talk A bit About This But Let's Just Step Back And I'm Going to High Level Go over What What The Flow Is For This From This Thing
[02:12:19]  Basically If We Were To Generalize This And I Know React Has Different Mechanisms We Just Talked About So The The Way The Server Component World Works Is The Init
[02:12:30] ial Page Render Is Very Similar To What You Find In Islands Framework All The Components Are Server Rendered And Sent To The Browser Client Components Or
[02:12:35]  Islands Props Are Serialized And Any And Basically Any Data Fetching That You Did Inside A Client Island Also Has To Be Serialized Kind Of Like
[02:12:48]  Your Classic Next JSON Right And Then When The It Gets In The Browser The Client You Know It Can Stream In And Come In Any Way As The Client Comp
[02:12:58] onents Are Collected Up These Islands And Hydrated As They Available So So So Far The First Experience Between A Server Component Framework And An MPA You know
[02:13:17]  Islands Framework Is Almost Identical Minus The Fact That The Server Component Framework Will Have Loaded This Router That I Haven't Described Yet But Generally Speaking
[02:13:26]  You Send Down These Islands And Mechanically It's Very Similar Then On Any Subsequent Navigation The Server You Basically Almost Treat This Like Client Side Routing Where
[02:13:47]  You Change The URL It's Actually The It's Actually Like URL Driven You Go To The Next Page Change The Query Parameter Do Anything You Want With That And That
[02:13:59]  Is How You Actually Tell The Server To Render The Page There's No Passing Client Props To Server Props You Actually Use The Router To Pass Prop
[02:14:09] s To The Server Essentially You Use The URL The Way That We've Always Done With An MPA The Key Part About This Experience On The Second Point When You Navigate
[02:14:20]  Is Because We Wish To Persist The State And We Don't Know How That State Has Updated On The Client No Client Components Can Be Rendered On
[02:14:30]  The Server The Next Time Around Essentially We get The New HTML That Has Holes For The Client Components And If They Match Up Like We Diff It We D
[02:14:43] iff The Old HTML And New HTML And If The Islands Match Up Then We Persist The Islands And Use Those Props To Update The Props On The Existing
[02:14:52]  Island And If They Don't Match Up We Just Client Render The Island At That Point So The Basis Of This Whole Mechanism Is A Simple HTML Diff I
[02:15:11]  Mentioned Morph Don Before The Guys From Astro Built One It's About One Kilobyte Right You The Navigation Story Is Kind Of Like An MPA
[02:15:21]  But I Want To Go Back To Our Our This Example Because The And This Is The Problem With Hydrogen Actually Had And All The Early Server Component Demos And The
[02:15:37]  Where They Had The Problem Was They If You Navigated The Whole Page Every Time Like An MPA You Were Diffing The Whole Page Every Time Sure You Sav
[02:15:48] ed On That Initial JavaScript Right You You Had Some Let's Give These Let's Make Our Client Components Blue Color Let's Let's Fill Fill Fill Them In
[02:15:58]  Right You Were Able To Kind Of And Let's Give Them Rounded Corners You Were Able To Go Like Oh You Know This Needs To Be Interactive Or
[02:16:08]  You Know Maybe This Needs To Be Interactive You Were Able To Save On The JavaScript And Only Send The Interactive Parts To The Browser That You Needed
[02:16:22]  But Every Time You Did A Navigation You Basically Were Sending A New HTML Page It's Like Slightly Better Than Turbo Because You're Diffing It And Trying
[02:16:35]  To Match Up The Islands But This Kind Of Is Expensive Right If You've Heard Some Of Ryan Florence Early Criticism To React Server Components It Was Because Of Like
[02:16:49]  This He's Like What So Instead Of Sending The Template Once In Your JavaScript You're Sending It All On Every Single Action Like That Was Kind Of Mentality
[02:16:55]  People Are Kind Of Criticizing This On And I Mean On A Certain Stance It's No Worse Than An MPA And MPA Seem To Be Doing Good
[02:17:05]  For Certain Types Of Use Cases And Stuff But It's Something You Want To Improve Upon And The Solution To This Should Be Obvious Nested Routing Right
[02:17:24]  Like If I'm Only Swapping Out This Content So To Speak Then I Can Leave The Rest Of The Page Alone And This This It's Funny How Frameworks Always Come
[02:17:42]  Down To The Routing Paradigm More Or Less Like That Is The Clincher Here But If You Made The Rout The Nested Barrier Like The Nested Routing
[02:17:53]  The Barrier Then You Have Incredible Ability To Kind Of Like You Know When Your Initial Page Load And You Control When Future Navigation Happen So You Can Always
[02:18:05]  Send Headers Or Whatever To Say Like Hey This Is A You Know Future Server Component Draw So You Can Always Like The Next Time You Go Here Render Everything Outside Like
[02:18:16]  The Black Here And Skip The Blue Part So To Speak But Nested Routing Because We Have A Client Side Router Let Us Only Render The Parts Of The
[02:18:27]  Page That Matter For Of Again Why Remix Is So Close But Like Almost Just Like A Bit Back It's Kind of Funny Like Hydrogen Had The Earliest Version
[02:18:47]  Of Server Components And They Needed Remix To Like Finish The Story And It's Like It Would Have Been Really Interesting If They Both Worked Together Right From The Beginning
[02:18:57]  To End Up At The Right Place Because It's Like The Parts That Remix Didn't Have Hydrogen Had And The Parts That Hydrogen Didn't Have Remix
[02:19:06]  Had It's Like There Is A Huge Symbiotic Ness Of This Meanwhile Next Privy To All The Information Of The Future Knew Exactly What To Build So
[02:19:26]  What I'm Getting At Is Okay Nested Routing Is The Key To The Initial Data Fetching Kind Of Navigation Story So If We Can Just Swap
[02:19:38]  Out Those Sections Then It's Pretty Cool The Only Problem Is You Don't Want To Render The Whole Page Again On The Server Either If You're Just Swapping Out
[02:19:47]  This Place You Don't Want To Render This Up Here And This Is A Problem Because What If You Have A Context Provider At The Top Of The Tree And You
[02:19:58] 're Only Rendering This Component It's Kind Of Awkward Right This Is Why You Can't Like It's Not Just Awkward From The Fact Of Like You Only
[02:20:07]  Want To Render This It's Awkward From The Fact That If You Went On The Page Clicked The Counter Five Times Updated The State Up Here Now Counter Equ
[02:20:15] als 10 You Know This Counter Is Up 10 And You Show The Count Here When You Go To The Server The Server Doesn't Realize That This Count Is 10 You're Not
[02:20:24]  Going To Serialize All The Data Back That's What Dot Net Did We Are Not Doing This That Is A Night Serializing All The Client State Back And
[02:20:30]  Forth That's The This Is Why We're Not Going Back Full Circle That's What We Did Like 15 Years Ago We're Not Doing That But It Means That The
[02:20:40]  Client Components After The Fact This Is Why You Can't Render Client Components After The Fact Because If They Use Context If They Read From This Context
[02:20:48]  Up Here You Know Or Up Here I Guess Higher Up In The Page Then There's No Way That You Could Get The Updated Values When You Server Render So
[02:21:12]  Where I'm Getting To Is We Have Some New Concerns Or Things We Have To Think About With Our Solution Here We Already Talked About Importing Component
[02:21:27]  Rules And Preventing Waterfalls We Talked About Nested Routing And Layouts But I'm Going to Skip Templating Concerns Suspense Yeah Load Vers
[02:21:41] us Refresh Semantics Right The Initial Load Versus Other Like Server Component Navigations Are Different Right Initially We Have To Render Everything And After The Fact
[02:21:56]  We Only Render Server Components Right Which I Highlight Here Don't Render Islands Render Don't Render Islands Render Only Required Sections We Just
[02:22:12]  Talked About Consequences All Data Needs To Be Independent Yes So One One Of The Awkward Bits About Going Here Is What If This Is My Users Page
[02:22:22]  Right So I Load My User Here And I Still Need My User Information There Right We We're On Twitter Let's Go Back To My Profile As Much As I Love
[02:22:31]  Looking At The Tweet Like Perceptually We Could Just Load The User Information Once Up Here And Still Use It On All Of These Tabs It's Funny You Can Tell
[02:22:43]  By The Scroll Thing I'm Pretty Sure That They Don't Use Nested Routing Even Though I Use This As My Example All The Time What I Was Trying To
[02:23:02]  Get At Is That You Can See On That Drawing That This Whole Section Is My User Right So If We're Only Going To Draw Render This And We Fetch The
[02:23:14]  User In This Section You You're Not Ever Going To Run That Code Again So In A Sense You Have To Fetch The User In Both Locations If You Want To Use
[02:23:22]  The User You You Can Specialize It You Need A Way Of Saying Hey I Fetched It Here And Fetched It There In A Sense Not Unlike What Graph
[02:23:44] QL Does Or React Query Yes Now We're Back To Cache In Validation But The Cache In Validation Is On The Server Okay Yeah Here's
[02:23:53]  It's So Important With These Things To Understand That You Never Actually Solve Any Problem Like Never Actually Solve The Problems You Just Push Them Around But There's Different There
[02:24:03] 's Different Consequences To Pushing Them Around But Yes Now You Need To Do That Because It's Fine If You Just Come In And Render This And Fetch The
[02:24:15]  User You're Good If You Come In Here And Have To Right Now I'm only Concerned With Cache For The Lifetime Of The Request You Can Get
[02:24:31]  Into Whole Other Things On There And You Can Come With Your Own Cache Strategy But I I Am I Am Mostly Talking When I Say Cache Right Now I Mean Actually
[02:24:40]  Just I I'm Not Even Talking About Actual Long Term Caching Necessarily I'm Talking About Like Simply Having Some Kind Of Way Of Knowing That When You Do The
[02:24:49]  Same Request In Both Places That You Can Use The Same Data Right We Can Get Into Deeper Cache Things But You Still Win Of Not Having The Cache
[02:24:57]  In The Browser But We Do Have To Have That Kind Of Consideration Around Designing This And Yeah As I Mentioned We Could Take This Further Now Because If We
[02:25:09]  Done This Effort Of These Needing To Be Independent We Might As Well Parallelize It Like On That But We Can't Parallelize It On The Init
[02:25:18] ial Page Load Because If You Have A Context Wrapping The Whole Thing And You Need To Server Render These Components You Know You Do Have To Do The
[02:25:29]  Provider Before You Do The Children So Technically Speaking You Can't Parallelize The At Least The Client Tree You Could Parallelize The Server Tree But
[02:25:40]  You Can't Parallelize The Client Tree On Initial Render Just Pointing It Out There But If You Think About Otherwise This Is Completely Independent So You
[02:25:48]  Can Literally Request Comes In And It Needs To Replace Both Orange And Green Here You Could Just Run The Orange And Run The Green In Parallel And Then Stitch
[02:26:00]  Them Together At The End So If Orange Is Waiting On Some Data And Green On Different Data You Can Actually Have Them With Waiting For Orange To Finish Before You Start Green Okay
[02:26:20]  This Is A lot Of The Benefits If You If You're Listening To Me It's Similar To What You Find With Loaders And Parallelization Of Nested Data
[02:26:26]  Structures Yeah Is D-Duping The Term I Want To Do It's Not Caching It's D-Duping That's What We Need To Do We
[02:26:32]  Need To D-Dup Okay So There's There's Still Challenges From An Agnostic Solution Because While This I Think It's Fairly Straightforward From
[02:26:50]  A General Standpoint That You Could Write Such a System That You Know Take Astro And Then Tell It On Subsequent Requests Picture Astro With Nested Template
[02:27:02]  Like Some Of File System Routing Stuff That We Have Or You Could Picture Basically These Sections Being Like Dot Astro Files Or Whatever And Then These Just Being Your
[02:27:14]  Framework Components And Then When You Get To A Certain Page Navigation Be Like Okay Swap Out This Piece Don't Render The Islands Like They Already Know How To
[02:27:23]  Render Islands And How To Hydrate Islands You Have Client Only Like You Already Have All The Mechanisms To Be To Do This If You That's Very Much On
[02:27:39]  The Outer Framework Versus The Inner Framework One Of The Realizations That I Came To Even Though They're Going To Solve This Is Most Of The Patter
[02:27:48] ns We Use For Reactivity Or For Data Fetching And Async On The Server In General Like Suspense Are Based On Where We Use It On Read Rather Than
[02:28:01]  On Fetch And I Think It's Important To Understand It Means Where You Use The Resource Or Where You Await The Promise Is Where The Suspense Happens Above It
[02:28:12]  And It's Actually Kind of Interesting To Me Because Marco Had An Await Tag To Show Where That Read Was Remix Actually Added An Await Tag To Show Where
[02:28:24]  That Was And Some People Are Like Why Didn't You Just Use A Hook And I Think You Almost Have To Visualize It To Understand The Problem Here I Showed A Really
[02:28:31]  Simple Component Here But Now Pretend This Is Your Page In Your App And You Need To Fetch This Data Right So You're Like Oh No Problem Async Or
[02:28:43]  Sorry It's On This Side You're Like Async App Await Fetch Data You Know I Solved It Well What If You Like Where's The Suspense
[02:29:00]  Boundary The Suspense Boundary Has To Be Above This Route Section And Like In Our App Here There's Like Nothing Above It So Either You Just Assume
[02:29:09]  That The Route Section Is The Suspense Boundary Or You Have To Push The Wait Further Down The Stack So You Have This Kind Of Tension Where You Want
[02:29:18]  To Fetch The Data As High Up In The Tree As Possible And Await It As Far Down As Possible Otherwise You'll Produce Server Side Waterfalls And That
[02:29:26] 's The Thing Waterfalls Are Bad Anywhere Don't Let Anyone Try And Convince You Otherwise Waterfalls Sometimes Are Necessary As In There Are Unavoidable But
[02:29:37]  Avoidable Waterfalls Are Never A Good Thing Ever Ever Ever Ever Ever It Doesn't Matter The Distance We Can Talk About We Put The Data Right Next To The Datab
[02:29:45] ase So Are The Code Right Next To Database So It's Not As Bad But Like If People Start Pushing A Narrative Out There That Oh Yeah Waterfalls Here
[02:29:57]  Are Okay Send Them Packing This Is Like This Will Always Be A Contention From A Performance Standpoint The Only Difference Now Is Instead Of The Front End Engineers Being Like
[02:30:10]  Oh You Know I'm Really Noticing This In My App You Have Backend Engineers Really Mad At You Going Like What Are You Guys Doing Here Like Like Like They're
[02:30:26]  Like If You Especially Working A Large Team Backend Engineers Like This Is Why They Don't Want To Give You Access To The APIs They're Just Like You Guys Will Do Some
[02:30:34]  Really Stupid Shit Like Like Yeah If You Want To Piss Off Your Backend Team If You Still Have A Backend Team Like Maybe You Don't Have To Worry
[02:30:46]  About That You Scale Your Instructor Infinitely But Like And You You Just Pay In Dollars Sure Don't Worry About It But Like At You Know Do More Waterfalls
[02:30:57]  The Funny Thing Is The Client Side Waterfalls They're Almost Not Even Aware Of Because Like The Performance Is So Bad On Client Side Waterfalls There's Such Separ
[02:31:05] ation Of Requests And Stuff That The Backend Team Might Not Even Realize The Terrible Stuff You're Doing But As Soon As You Bring It Closer To Them
[02:31:13]  They're Going To Be Like Why Are You Doing This To Me Yeah Exactly And Then Pay For Planet Scale Don't Get Me Wrong Sorry I Didn't Put The Message Up But
[02:31:37]  Yeah Don't Get Me Wrong I'm Just Saying Maybe This Won't Matter But Don't Sell It As A Good Thing Sell It As Like That's Cool That We've
[02:31:46]  Made We've Mitigated The Expense Of This In This Specific Case Just Don't Move This To The Edge You Know Like There's Benefits From A DX Stand
[02:31:57] point But It's So Funny Like I've Watched This So Many Times Over The Years Building Everything In An ORM And The ORM Wasn't That Optimal And
[02:32:05]  Then You Go Geez Why Is The Performance So Bad As Stuff Scales And Then You Go Oh Crap It Was Because We Traded DX Of Having A Nice ORM For
[02:32:12]  Actually Writing Efficient Queries And It's Like Because If You Get To Nested Routing You Almost Immediately Hit What We've Been Doing Like The Last Decade I
[02:32:47]  Was Yeah I Actually Don't Think Crossing The Boundary Is That Interesting Like The Fact Of I Was Going To Talk A Bit About How If You Pass A Promise Yeah I
[02:32:57]  I'll Do This Before I Get Into The Routing If You Pass A Promise From A The Cient Component Is Going To Read That Under A Suspense B
[02:33:10] oundary Like It Never Knows If It's Server Suspense Boundary Or A Client Suspense Boundary Is What Is Going To Handle The
[02:33:20]  Situation Right Because If You Pass A Promise Through And You Await It Or Use It Down And There's No Suspense Boundary On The Client Below Like Above
[02:33:33]  That Point The Boundary Is Conceptually On The Server Then The Server Should Have Waited Before Sending That Data Whereas If The Suspense Boundary Is
[02:33:48]  In The Client Component And You Use It Under That Suspense Boundary Then The Server Should Have Responded Right Away And Not Waited And That Is
[02:33:57]  Not An Easy Solution To Solve So Much To The Point That I Would You Just Take A Chance If You Need To Wait Something On The Server Assume That If
[02:34:07]  You're Going To Pass A Promise Through You're Awaiting It On The Server Like I Think That's The Only Probably Reasonable Approach You Could Take Here Or
[02:34:14]  You Could Take The Opposite And Say Assume It It's Always Going To Be Waited On The Client And That It's Not Going To Wait Like Either Or
[02:34:20]  You Can Make That Decision And I Think If You Just Make That Decision Then You Can Treat The Data Suspense Mechanism Between Client And Server Components As
[02:34:29]  A And Them Not At All Like It Doesn't Matter Because One Only Handles The Promises On The Server And One Only Handles The Promises On The Client
[02:34:50]  And There's No You Don't Need The Same Framework Like And As long As you Have A Mechanism To To You Know Handle Async Rendering And Schedul
[02:35:01] ing Basically To Be To Async SSR You Can Do This But Yeah I Let's Talk About Routing For A Second Universal JSX Routing Right Cool Okay So
[02:35:24]  I'm Actually Pull Up The Remix Page Because Remix Has Good Docs And They Have Good Example To Show You How Like We've All Seen This Nested
[02:35:34]  Routing Demo It's Just An Extension Of What I Was Showing Can I See What The Code Looks Like Yeah I Can See It A Little Bit Here Right They
[02:35:49]  Define A Loader They Define An Action And Then You Can Use The Loader Data In Your Component Display Some Stuff Form A Post Against That Action It Upd
[02:35:59] ates Okay The Reason I Want To Show This Is There's Been This Pattern For A While And It's In Most Client Side Routers At This Point And
[02:36:11]  It's Funny Because Remix Gets A lot Of Credit For It We Had It In Solid Independently Of Remix Completely And Ours Are Different Because They Don't Only
[02:36:24]  Run On The Server They're Isomorphic And I Think Sapper Had A Pattern As Well Basically Any Framework That In Parallel Which I Think The First
[02:36:36]  One Was Sapper Or Nux I'm Not Sure Which One In Around 2017 Or 18 Time Period Has Had This Mechanism Essentially Hoisting The Data Loading Out Of
[02:36:47]  The Component So So That If You Have A Nested Route Like This You Can Basically When You're When You're Up Here And You Like Click From Sales To Account
[02:36:57] s It Can Go Okay I Need To Load The Data For This Section This Section And This Section All In Parallel While I'm Loading The Code For Each Of These
[02:37:08]  Sections All In Parallel Otherwise You'd Have A Waterfall Like If Inside Here And You Put The Data Loading Inside Here You'd And It's All Code
[02:37:21]  Split You'd Have This Fun Example Of Wait For The Bundle Fetch Get The Data Render It Realize You have To Render That You Have This Bound
[02:37:35] ary Fetch Wait For It Render Fetch Like Crazy Amount Of Waterfalls And You might Think This Is Absurd Who The Hell Would Do This Well Basically Almost
[02:37:48]  Every App That I Came Across During The 2018 19 Period There's A Reason That Solid Was Just Slamming Through Demos With CSR Only Versus SSR Apps They
[02:37:59]  Were Terrible For Doing Waterfall Type Data Fetching Patterns Code Splitting Was The New Norm So Everyone Cared About A Lot Of The Initial Reducing
[02:38:11]  The JavaScript Side And Then You Did Anything In These Apps And You Got This Really Awkward Gap Between Loading The Data And The Code And All These Waterfalls Just
[02:38:21]  Horrendous So We Hoisted It Into Loaders But What here is that who would do that everyone yeah well i mean it's kind of like the the the other
[02:38:39]  thing that i showed about mutation right people generally if left on their own won't care so like this is like as much of an argument for server components as anything else like by
[02:38:50]  just like changing to more sane defaults then we aren't like doing doing you know crazy stuff there's some challenges obviously with these loader patterns like typescript you know
[02:39:03]  uh it's because of the detached how you how do you get the props and do you pass it in its props do you pass it in its context if you do context it
[02:39:10] 's easier to get the whole tree like there's challenges there one of the challenges i had personally was the fact i didn't like how singular these were i wanted stuff more granular
[02:39:20]  solid basic this is how solid ended up with server functions um because we wanted the ability to granularly fetch each resource separately um even after the fact okay so uh i was
[02:39:35]  like oh why can't we just use rpc calls you know for our for our actions but i'm not getting to the actions yet i want to focus on the load
[02:39:42] ers right sorry oh yeah oh yeah yeah yeah yeah yeah remix is actually showing yeah this is perfect yeah this is what i just described about the the waterfall thing and the truth
[02:40:04]  of the matter is people built apps like this a ton and remix was not the first one to solve this by far but in react space like like maybe they kind of were
[02:40:17]  like next kind of kept stuff at a page level but like ideally you you'd want to have this amount of granularity so i yeah i i that's a that's a
[02:40:25]  that's a great one that's why they're saying no more loading spinners the funniest thing is this experience of loading spinners like this is better picture the same diagram
[02:40:41]  now except the the remix side is white until we're done if you ever want to argument uh about streaming that that's what you do i i think uh um the let
[02:40:57] 's just go to the marco home page because again marco you know uh of course i'm gonna put js on the end because otherwise we end up with some other stuff
[02:41:06]  but like it's i thought that was interesting about the no loading spinners because this is it's like with with streaming without streaming you know you could picture that there's
[02:41:18]  loading indicators he didn't bother doing that the loading indicators are fine if they actually help you like get there sooner the problem is in the classic example here it's actually you're
[02:41:33]  waiting for javascript bundles to come in to fetch to get more javascript like it's this chaining waterfall if you could set all the data fetching
[02:41:42]  to happen on the server immediately and then show stuff as soon as possible and show some loading indicators that's still that's streaming and that's the winner right it's yeah this
[02:41:52]  is this is like yeah this is like cra or something right okay uh before it got it back into react router technically but remix was before location and then i i don't
[02:42:08]  know who it came out for solids router or remix probably about the same time um i was using this pattern in demos it's funny i wasn't using this pattern i was using
[02:42:19]  something more like server components and demos um and then um ultimately i think i think sapper or nuxt should get the credit if we want to go back historically on on
[02:42:32]  this approach but what what i'm getting at here is that um sorry that aside on loading spinners i was just kind of commenting that the it's it's funny how like
[02:42:44]  different extremes work i actually think the loading spinners are kind of a good thing but like if something takes a long time you should show it but i i get i get
[02:42:52]  where this is coming from and i wanted to show this because we need from a performance standpoint loaders get rid of the waterfalls okay so i started to ask myself you know
[02:43:06]  what would no loaders look like right and the the funny thing is it's funny uh solid real world demo funny i wonder if i can actually do this because i use
[02:43:20]  this pattern all the time back in the day actually no screw this let's go to solid solid repo because i used to make a lot of demos without having a a thing in
[02:43:33]  an ssr i have this silly example where in the shared folder i have this router that's like really simplistic it's not even an actual router it's like uh
[02:43:43]  i just like made a link tag i basically just made a router from scratch for fun um in this demo for some reason just using like let me see switch match uh where is
[02:43:54]  it app components app yeah i just like put a switch match in here like switch match here's my routes it matches this then show the route like i just did something really
[02:44:05]  really stupidly simple but the reason i want to show this is because this is kind of like the really simple approach because you go okay when i show profile i should show profile
[02:44:13]  so if you notice here i didn't lazily import for the other pages i lazily imported them but for profile i didn't lazily import it and instead in the index
[02:44:23]  for that profile i create my data loading stuff and then i render the actual profile component and that profile component is lazy right so essentially the routers resolves the route to
[02:44:41]  a component that really i just do all my data fetching in and then i pass it as props into a lazy component and that's basically how you would do it without a
[02:44:52]  loader this you this wouldn't help you with nesting unless the router itself parallelized all the nested like rendering so that it basically could render each section separately which
[02:45:03]  breaks context but if you're okay with that render each section separately and breaking context and then you just put it into the outlet of the parent when everything kind of sets down but
[02:45:16]  if basically you have a hawk essentially that passes data into your into your lazy component and this pattern is what i was trying to show because i use this a ton like
[02:45:28]  everywhere in 2018-19 before i wrote the router because waterfalls were really bad and i i was like let's just like separate the data from the code splitting so we can
[02:45:40]  do stuff in parallel and that that turned out to be a benchmark winner but yeah same pattern here right it means that when you get to if you didn't have a load
[02:45:51] er what you'd actually have to do is say that the route page you know get some route information fetch some data and then essentially make a lazy version of it but i started
[02:46:01]  realizing that there's a certain parallel here um with server components i called it island here but you can pretend this is use client like in a separate file that you import it doesn
[02:46:11] 't really matter this is just using my syntax but what i'm getting at here is a this could be a server this could be a server component and then this lazy component
[02:46:20]  it might as well be a client component like for for all purposes um so you fetch your data and then you you know pass you know on the server and then you pass it
[02:46:32]  to the client um so anyways this this is my my i don't need to talk about this right now i basically came up with how i would design a router that worked
[02:46:43]  with server components and client only like you would i'd work in a spa with no server components and in a server component scenario um and work in both sides this might be something
[02:46:55]  implement at some point especially when i add tanner's um uh type scripts type stuff in here so next big change for the router but in theory all the loader is is
[02:47:08]  a component that wraps the top level of the route and automates this lazy or you know client kind of boundary for you essentially so you know it works well with file system
[02:47:19]  routings because then you don't have to worry about like writing lazy and porting all the stuff yourself lazy is kind of a pain in the because you have to have a
[02:47:26]  separate file so like this was always really awkward from an ergonomic standpoint because it means that every route needed two files it needed a file for the data loading and a file for
[02:47:35]  the code splitting which at a certain point i was like why don't you just build this into the router and not worry about it and that's what everyone did what we
[02:47:42] 're seeing right now with server components is kind of like a reversal of this going like because you don't always want the whole thing to be a client component right we have to
[02:47:52]  put that control back in your hands but it's a similar mental switch because what you should be doing is fetching all your data at the top of the route if you put
[02:48:00]  the if you if you fetch later and it's below conditional guess what waterfall if you await at the top well then you block the rest of this stuff and if you have
[02:48:11]  fetching underneath that's even worse again so essentially even with server components you are basically going to replicate the loader pattern but it's fine as long as you know that then
[02:48:23]  you can approach this in the in the proper way like if not you will create server waterfalls and for the first year everyone will be like yay we don't have to
[02:48:33]  worry about this stuff and then it'll catch up with you that's just how these things always work um but that being said i think it'd be cool to unify the
[02:48:42]  models so i just kind of throwing that out there i think it's very possible that a client complete client single page app and the server could have a same universal router um mechanism
[02:48:53]  for data loading uh at least the the harness piece because what's cool about this is there's no special exports right you you just kind of grab the the location data from
[02:49:04]  the router this part is interesting different frameworks might handle it differently maybe this is a promise maybe this is a resource maybe you use use i don't i don't really care the
[02:49:16]  details don't actually matter that much as long as and it can actually be different between client and server is what i've been trying to suggest here but i'm suggesting that
[02:49:25]  like this pattern could be repeatable to work in client side optimally as well as long as people are willing to go through the extra thing i wasn't i figured like this
[02:49:35]  was too much boilerplate so i i built my router and most people did around loaders because this is like obviously what you want to be doing but it is interesting that
[02:49:44]  people want more control should we not give it to them it's it's interesting so yeah there's a direct correlation between writing the code you should be running and writing a load
[02:50:00] er that's that's that's all i wanted to kind of highlight at this at this point of the phase because each each of these sections when you load them in you
[02:50:08]  want to fetch the data as high up as possible and then use it as as low down as you can okay all right so where am i in my overall arc here um
[02:50:27]  we talked about right it's it's a time to talk about mutation dan said that we need chrome network tab for servers to see waterfalls yeah i'm sure i mean it
[02:50:49]  would help better tooling is always good it just but it's like you can also kind of just like see waterfalls by the fact of like there's an await somewhere you
[02:50:56] 're probably creating a waterfall all right so okay so let's see if i can summarize this the best way i can i i we i've already kind of talked about why you
[02:51:14]  might want an mpa like mentality um in terms of uh both mutation and um page load for performance and dx i talked about specifically i was talking specifically how we solve the
[02:51:30]  routing and explained why is if you sacrifice client-side context essentially if you make it special like only client components can access client context then you are in a zone where you
[02:51:46]  can basically just author your app with this interweaving and okay yeah there's there's one more before we get to mutation there's one more piece i wanted to talk about
[02:51:56]  and i think it's pretty important you kind of saw a hint of it with the router case but people worry about how this scales right because this is getting back to the r
[02:52:08] yan florence uh initial thing where he was talking about like oh then you're sending all these templates we didn't actually address this completely because yeah we shrunk it
[02:52:16]  down but this is still a large template the truth of matter is most interactive stuff is going to happen inside these interactive spots and the the thing is it's only a route level
[02:52:30]  navigation like basically if you want things to update all over the place you're probably going to do this right it's only route level navigation that you go back at which point
[02:52:40]  you're already kind of like a leg up on you know mpas but the the the other consideration is let's say i don't believe in this stuff at all i just
[02:52:50]  want my own old single page app back right why are we doing all of this stuff why are we doing all this stuff right well if i'm really lazy i can just
[02:53:03]  do this and if we go back to one of these hack mds and you look at this example if my page is just some data loading and then i go straight to my
[02:53:19]  client component here what am i rendering on the server i am not rendering any html there's no html to render on the server i'm literally serializing
[02:53:31]  this the props to my lazy component here i'm sending the props over the wire so that when i get to the client um sorry where's my skeleton i get to the client
[02:53:45]  i can then have the client either hydrate it or render it on the client all i am sending are the the props i would argue with you that we've just created
[02:53:56]  a json api like the server is just responding with serialized json data right like yeah we've gotten back to nested loaders yeah i mean the thing
[02:54:22]  is there are solutions to these problems because they are you have the same model in remix remix is like the what if you did the same thing but with multiple flights the thing that
[02:54:35]  we're we're gonna i have to talk about mutation to actually finish finish this story um but what i'm getting at is the most pessimistic view of the world like i
[02:54:47]  hate this would literally be just use client everything or you know client people are asking a bit about what like how long solid is going to take on this it's not the
[02:54:59]  core it's not the mechanics that is delaying us i don't know if you guys have seen the demos like the movies app it's actually an api problem that has
[02:55:05]  been bugging me i we have to make decisions around data fetching like right now you if you use solid version you just use resources on the server like everything just the exact
[02:55:17]  same code works on both sides the only the only thing that would cause a client's written component not to work on the server is accessing contacts so assuming that the router is
[02:55:26]  always present you can basically just take everything that we have today and make it work like this the problem is i'm not sure that's the best offering experience i don't like
[02:55:35]  to use client i'm playing a lot with bling in terms of figuring out what it means to wrap components and what that looks like so this the delay for us is
[02:55:44]  not about the mechanisms uh because like trust me i would i'd be shouting from the roofs like about about this stuff um i'm just patient because i don't want to ever
[02:55:55]  ship on something that i i don't have yet like i've shown this demo off the movies app demo multiple times this is all like server component style incredible demo and i
[02:56:05]  what i love about this demo is obviously the fact that when you go look at the network this it's it's just insanely small um yeah inject i always gotta remember the open
[02:56:19]  incognito this is like third-party scripts um not from the site but from like my chrome extensions getting in here sorry incognito actual site sorry wrong button actual
[02:56:29]  site and we'll see our 13 kilobytes of javascript um as we walk around and it's because we already have the mechanisms of doing the nested routing see
[02:56:40]  swapping the nested router we already have the ability that if we look at the xhr you're going to see rendered markup for the page swapping out it
[02:56:52] 's just i'm i wasn't happy with the api so i didn't release it yeah that that's that's what this comes down to um we we have context working
[02:57:04]  what we one thing we don't have the parallelization optimizations working yet that wouldn't stop you from using it but um i i i think i think it's just worth
[02:57:13]  us taking like a second shot at it so to speak um okay cool so i'm gonna see dan recreating gs cp just there's a tweet let's see
[02:57:29]  this i think this is where i'm going to start that we need the write-ups yeah yeah yeah my point is on the theoretical side like on the mechanical side of
[02:57:49]  talking about this stuff is that this scales from that static page thing with a couple interactive points to um basically the same single page app you have today that's what makes it
[02:58:08]  exciting because put all these pieces together essentially we're saying that there probably is a dx win here there's definitely a performance win on terms of the baseline and it actually lets you
[02:58:24]  it doesn't it actually lets you still cover the complete range of of like what you'd want to do you can you can adjust the size of this anyway um yes i
[02:58:39]  i wanted to to uh get into this before mutation because um i think it's important to kind of understand uh that the um this the way this scales now look i guess
[02:58:59]  the big open question everyone has is like how do i do mutation in this model right we haven't talked that much about server functions and they have a key role to play
[02:59:19]  in this um as well and i'll i'll explain why in a couple in a couple ways first we got to go back here right this this is where our mutation story starts
[02:59:34]  ideally we want to be doing the left side well not the right side right we don't want to have a double waterfall here and if you put two and two together our
[02:59:49]  mental model now is very much like an mpa we are we have pages sure we have nested sections but essentially we do client interaction but then when we want to like everything
[03:00:05]  is router based like if you want to update servers components you have to change the url we want to update the url so how can you build an api like
[03:00:18]  what's the best pattern for it well as it turns out the best pattern for this is also the mpa pattern because we wanted that simplification we just need to change where
[03:00:29]  this line is right right now like we go to the server come back go to the server come back and in a sense you can view that this is all like up to
[03:00:42]  this point is like client and then you know like how should i put it like we need to change like this is okay this is a very bad illusion but we basically need to
[03:00:53]  change where this line is like the the only difference between this and this and this might be where this is happening so to speak right because if i cut it off here it
[03:01:05] 's like the same as the first one okay never mind that that that use the diagram didn't work right let me try this again i want to take remix's model or what
[03:01:19]  we've been doing in start and quick and all of those i want to send a mutation but in but i i instead of responding and invalidating i want to respond with
[03:01:33]  the next page so the way i would personally approach this if i was designing mutation is understand that we we have three goals to accomplish for designing mutation we have first we need
[03:01:47]  to we have the uh like doing the mutation itself okay we have optimistic updates and then we have invalidation okay these three parts are are part of this equation essentially for how
[03:02:17]  we design mutations for for i think any of these solutions the thing is this is the part that always why i i couldn't like practically watch kent and dan talk on the
[03:02:31]  stream was because they're like the remix and react are so aligned except for the fact that the react like next version is so much more optimal than what remix does but like
[03:02:42]  philosophically they are like so aligned that the argument was like getting really like painful for me because it's like you guys would like agree if you spent the time to look at
[03:02:52]  each other's projects um right so let's like i don't know what next is doing but i don't need to know we can design this right now the same way
[03:03:05]  that i was doing in the document and we can basically i i'm willing to bet we can get 80 or 90 percent of the way to whatever next lands on like these things
[03:03:14]  are kind of discovered not invented like we we can figure out what what we should be doing here so first thing and we do have some hints and this one this one's very
[03:03:24]  obvious to me let's talk about doing you doing the mutation you got two options rest or rpc okay well we know which one wins there um this seems maybe obvious
[03:03:39]  to me but it's because the way i designed it right i i looked at when i worked on solid start i looked at remix and i was like oh man this is a
[03:03:48]  really good pattern but i was like i really dislike that the actions are tied to the url you can only have one action per url whatever and svelte kit
[03:03:55]  kind of took this later on much later to a different level where you could like split the action to multiple parts but that wasn't like fundamentally the problem for me i want fine
[03:04:02]  grain updates and i didn't want to associate the file system it's not enough to split up the action i actually want no correlation between the action and like the url
[03:04:14]  like none um i like get rid of the get the rest out of there and what gave me this idea is the same influence that react team would have graphql made this
[03:04:25]  solution really obvious the funny thing is if you look at graphql and you look at the queries like do i have like do it's a star wars um uh graph
[03:04:38] ql still up like like like is the graphical like explorer thing around can i can i get in here uh like can i what is it swappy like does this stuff
[03:04:59]  still exist i don't know okay okay can i explore the no i want to explore the the schema maybe this one's not the one i'm thinking of it's just
[03:05:14]  so much easy yes okay thank you okay but this one doesn't have mutations so i can't really show it damn it okay it's it's really obvious if you've worked
[03:05:25]  with graphio what i'm about to say but what i'm getting at is you design out this crazy tree on the query side on the getter side it's a
[03:05:35]  graph like you have nodes that have nodes you have you know friends that have friends you know you you you design out this tree and all the data points are connected and you have
[03:05:44]  nesting and you can kind of reach your fingers down through the tree and pull out exactly what data you want right but on the mutation side it's just a bunch of
[03:05:55]  flat mutations it's just like get this post this do this do this and sure your response can include part of that tree but generally speaking the the get is a graph and the
[03:06:07]  post is an rpc like i i realized that like the the this is the the way and the funny thing is i i built um i was involved in a protocol back
[03:06:18]  one rm where we built like a crazy kind of pre-graph graphql trying to solve similar problems and but we built it on rest uh essentially but like smart
[03:06:27]  cross model rest where we could like pull stuff across and it was it was it was really good but like the challenge that i noticed while working on this was that on the fetch
[03:06:37]  side i never felt wanting i was perfectly happy with like a walk through graph you know through this like crazy um you know we we could query fields on related fields like we
[03:06:49]  merged mongo and database and sql into the same query format it was it's one of the coolest things that like i i love that i always try to come bring
[03:06:58]  it back because i basically it was like a universal query language built on json using mongo syntax to work across all databases and connections between databases and really cool fun thing with
[03:07:10]  ast you know compilation and optimization like i love that project but it's too bad because the open source version didn't have it has like the 10 solution but internally i ended
[03:07:19]  up building it up for like the next two or three years and it's like it was way more anyway what i the funny thing is on the get side and i saw this
[03:07:28]  with graphql i never felt wanting like i i it did everything that i needed but on the mutation side you get something like move and you'd be like how do
[03:07:42]  you represent a move with rest you because you you have to like put to one location and remove from another location it's like by like the whole you know rest philosophy of things
[03:07:55]  like there there's verbs that just don't exist and eventually you just end up making specialized rest endpoints basically rpcs so like immediately the separation between the data fetch
[03:08:07] ing graph and the rpcs is a very obvious thing and when graphql put out there it's just like you know of course and since that point no interest in
[03:08:17]  going back to rest um so to speak like that was a lesson from graphql for me so when i looked at this problem and i was like okay file system routing
[03:08:27]  tree get mutations no you know like get it out of there those should be just rpc calls um so this is this is how i came to the design for solid starts
[03:08:38]  uh version and i talked about a vconf um i think this is probably one of the earliest versions of of this type of thing but to be fair i was inspired by many
[03:08:48]  other projects i inspired in the sense that i knew they were doing similar things and i and i didn't i i found out about them after i'd already done a lot
[03:08:56]  of it but um they definitely did it before i did so this is not a unique idea to what to what i was doing but um what was really clear to me is that
[03:09:09]  i wanted that separation and if you've seen anything that the react people have been talking about they've added stop doing that they've added use server so my guess is use
[03:09:30]  server only makes sense yeah i mean they could go a few different apis but my my gut here is user reacts on rpc as well okay so this is this is
[03:09:43]  how server component mutations are going to be based off of this is why server functions are important use server is a function rpc so key part here separation from fetching from
[03:09:53]  mutation okay the next the next piece here we need is optimistic updates and i think from that perspective remix nailed it so i think whatever mechanism we need to do and by nail
[03:10:13]  that you don't need forms to do this if you've seen solid starts uh actions you can use a form or you cannot use a form that part doesn't really matter forms
[03:10:22]  are going to make sense for the mpa mentality and simplicity and i suspect we're going to see more forms but you don't actually need forms what you need is the whole
[03:10:29]  trick to remixes uh approach is you're going to need to push any um like mutation into like while in flight enter ephemeral state okay so essentially we're
[03:10:52]  going to have rpc calls at the point that we send the like click send on the rpc call we're going to have to push the ephemeral state
[03:11:00]  this this has an interesting side effect because you might be going like well how do you um like update stuff if the update like how do you optimistic update the server portion of
[03:11:14]  the page right you might be going how how would you do that and um you can't so you have to make a decision there it's a client component that does the optimistic
[03:11:26]  updates it's funny but to me i have an answer for this because marco thank you marco marco workshop let's see if i can find this marco workshop
[03:11:35]  is this even still around building a blog um i wonder if i go to the actual video and if i linked the actual did i actually link the github repo i can
[03:11:53] 't i should just go to the marco org on github we can also just reproduce this case if we want to but essentially what i wanted to show is picture
[03:12:09]  um let me go to medium maybe do i have the medium article still open okay picture this experience where you have an article and this is all server rendered and then can i
[03:12:25]  how do i add a comment okay beautiful okay let's let's let's look at this this is a client component clearly because we need to interact with another comments but we can
[03:12:37]  server render all the comments the same way that we did with um with the hacker news demo but what we can do and what i did in this marco demo was i
[03:12:47]  made it so that i i had the server rendered version which i didn't have to serialize the data for but i still loaded the component to render one of these and then
[03:12:58]  when i add it i have two lists so the optimistic update actually could show the in-flight data as a client component and then the server can refresh with the actual data
[03:13:13]  and the optimistic update goes away so you have to make a choice if you want to add that extra javascript overhead for that experience but you definitely can uh essentially so
[03:13:25]  i don't see a problem from an optimistic update standpoint in our design so far i think we just push it into flight into femoral state client will handle the optimistic updates
[03:13:39]  as needed is there a world where knowing what the action is doing on the server enables to do some cool fun well i think that would be challenging you'd have to have the
[03:13:55]  intent you as a developer can know so you can wire it up you can go like this is adding something to a list but i don't know how anything else would know
[03:14:02]  that right like does it require stateful server no of course not no stateful servers here right this whole premise of of server components are is not about stateful servers right so
[03:14:16]  push any mutation while in flight into ephemeral state use client components to display it and then in validation kind of the same way we've been doing this forever with like react
[03:14:29]  query like let's make it simple like let's like if you've seen solids version of this or create route data we just have a key and then when the action invalid
[03:14:40] ates we have a key so if if you're if i was to do this i would just basically because okay i mean you can look at a remix you can't see it
[03:14:53]  in there this action maybe solid to do mvc is the best way to do it let's look at solid start right let's look a solid start um not the
[03:15:02]  baby food okay here we go no sorry examples um let's do to do sorry i went to the wrong place examples to do mvc let's look at what an
[03:15:21]  action looks like here i'm not saying like the same syntax or anything but essentially you could define a bunch of our like server function actions right here and i just put them all
[03:15:30]  here they're they're all async they do some database action and then they like do a redirect or they invalidate a specific key you can basically see an api
[03:15:42]  where you could just what i'm getting at is you do an rpc call style call so you can just like have a function maybe you can feed into a form in
[03:15:52]  this example um our actions actually i just hung a form off them so you can like create an action then go like take the add to do action and then do that form
[03:16:00]  or you can just call as a function and it's a thing but this this detail doesn't matter that much so you perform an action you you do the validation do the work
[03:16:10]  and then you write it like you're doing an mpa like you're doing a redirect or you're doing you're saying invalidate this data and instead of responding to the
[03:16:22]  client at this point you stay on the server and have the server re-render that portion of the page mutations you have to kind of conceptually re-render the whole
[03:16:34]  page like remix does right because you don't know but you could use key invalidation and then let me see i don't have an example of keyed invalidation here i
[03:16:43]  talked about it in in in um our our the feet talk but you can you can pass maybe maybe i can look at solid start stocks start dot solidjs dot com and talk
[03:16:56]  about create server action so we do some stuff and then is there an example with no maybe create route actions a better example show impending handle error showing success message refetch
[03:17:17] ing invalidating specific data see we're just like invalidate classes like this is an enrollment page invalidate classes so on one side in your action you just go in invalid
[03:17:28] ate classes and then on your data fetcher you can be like hey my key is classes or whatever uh do we have an example here not reconcile key yeah keys yeah you know
[03:17:43]  you just it's like react it's react query over again but you just put this on the server so instead of responding to the the client you just keep it do you
[03:17:52]  have to do the redirect um if you're doing a redirect i think technically what you have to do you have to invalidate so you have to like you basically have to you
[03:18:04]  view it like an mpa so your options are reload the page redirect those are your two options um so if i was designing this you know so to speak i like
[03:18:20]  you you basically have two options right it's like invalidate it's it's it's it's like reload plus it's reload or redirect and then i would add you know
[03:18:34]  plus invalidation if you want to like have a cache what what jsx is it going to return are you going to like remake your view the router is the key to
[03:18:47]  this whole thing it's why like you're like you you go i mentioned already that when you go to a new page like you do an anchor you click to the new page
[03:18:56]  and the router renders part of the page so it makes perfect sense that what you would do is perform your action and then tell the app what page the render so instead
[03:19:08]  of doing this kind of thing let's let's let's look at let's let's let's rework this example for for rscs now okay for scs server
[03:19:30]  components this isn't even react specific right i'm this is this is this is the part i'm enjoying because like i'm i'm seeing all the pieces align that i've
[03:19:38]  been working on for the last couple years they're all going to come together really quite nicely so yeah so instead of right optimistic updates the cache we're going to do what remix
[03:19:46]  does and uh optimistic ephemeral state okay send the mutation no update cache no render ui what we're going to do here we're going to separate these a little
[03:20:05]  bit and there's going to be like a little bit of work here where we don't render the ui here actually um we do do do do do handle mutation plus
[03:20:34]  redirect invalidate and then after we're done that server server render and then send that response back like i don't see why you would bother sending jsx straight back
[03:21:01]  through the like you are sending it back um through the same call but you're not like what what jsx are you going to return like think about the imperative nature like like
[03:21:10]  picture writing that action like you're are you it makes so much more sense i would imagine to say render this page rather than rather than like yeah the same jsx that
[03:21:29]  you get from from the route changes yeah exactly that's all you're doing the the only reason i'm i'm i'm suggesting um how do you tell the app to
[03:21:38]  render that page like what's the api for it yeah and you get the new props of the client and everything updates and stuff yeah yeah i'm just saying like if
[03:21:49]  we're just kind of like sketching out a solution here like i think this is the simplification you view the page as like an mpa so rpc simple actions
[03:22:05]  all over the place distributed forms however the hell you want to do them optimistic updates handle the ui then you just send your mutation along the wire have it performance action choose
[03:22:18]  what to do reload show error whatever it doesn't matter you pat you basically set the the rules to then tell the page to re-render again because you're going to re
[03:22:30] -render the page you know the key to the invalidation is if you have a long live cache you can save work on re-rendering that page you can be like
[03:22:39]  oh none of this data changed only this data changed i am going to only like do the work to re-render or refetch that part of the page like you can
[03:22:46]  save yourself future work this invalidation is kind of like extra you just moved it to the server but as a model like we're just doing the remix thing yeah no this live
[03:23:00]  view is so different because it's stateful this is literally like this this is stateless this is this is just essentially an mpa like experience except you get client-
[03:23:15] side nested routing and you remove all the waterfalls and it scales from mpa static all the way to single page app like this is like a home run i don
[03:23:29] 't know what's the debate here on that side it's stateful if you have a cache yeah okay sure so and every app that has a database is stateful as well
[03:23:42]  yeah i i understand like there's a session here at the states specific to the end user it's stateful i'm just saying like we're not we're not like
[03:23:50]  keeping we're not keeping um the the stateful caching level is probably going to be at it could be fragments of html but it's like at the it's
[03:24:03]  not like you're going to sit there like the live view example where you sit there and you jam a counter and it's updating the counter on the server and sending back the
[03:24:12]  diffs right this like i realize you can do hybrid they're adding client actions to live view we saw that this model is like mostly do the stuff on the page only
[03:24:26]  do the server components when you navigate like server components are a routing like the server component part is a routing concern that's why you can pretend like essentially like treat it like it
[03:24:38] 's islands it's astro more or less until you talk about routing and then you're like okay well now we just kind of like get to keep everything we like you
[03:24:48]  know from that perspective that we can preserve our state but generally speaking yeah if this was me designing this api which i've already mostly designed here you can see solid already has
[03:25:01]  almost all of these pieces um you know so i've used server we have server dollar sign optimistic updates you know you've seen all this stuff in in in these frameworks remix
[03:25:11]  style kit they all have it like it's yeah i'm i we'll see i have no clue what rscs land you know but like this is the logical way one
[03:25:26]  would approach this problem okay i think i do think there's a couple points here because this hopefully we've done the whole mechanical drive here we talked about performance we talked about
[03:25:42]  the developer experience because i said you just write actions that you know reload part of the page or um navigate very mpa like you know i don't know if people everyone's
[03:25:54]  gonna like writing forms so like maybe that's contentious you know you just create an action call the function have data validation this is kind of the model um though to speak
[03:26:02]  i think if they add you know key base validation or something kind of like tan stack that's that that was like the that was like the moment that i was like okay all
[03:26:10]  the pieces fit together rpcs let you do that because the separation like i think yeah i i think they're probably in a pretty good place um for the mutation story as
[03:26:19]  i said i don't know what they're going to do but like this seems like the yeah i gotta stop saying the obvious choice watch them do something completely different and then
[03:26:28]  i look like an idiot but um right exactly they built their own transitions they built their own placeholders they built they basically built transitions built suspense built all this stuff and we actually
[03:26:43]  like you don't need to do all this stuff we have a like a more optimal version built in right the the it's the real challenge here in my opinion isn't
[03:26:55]  it's that and i've said this a couple times on stream so that when react looks at next they're like wow i don't even see next anymore i just see react
[03:27:03]  they're so like proud of themselves and having accomplished this you know their vision but when remix or gatsby looks at next they see next they don't see react they
[03:27:14]  see next so like their product is different somehow the problem is if it doesn't matter the intents if every product that uses react looks like next js what's the what's
[03:27:30]  the differentiating edge right like by consolidating it's basically grounding out the uniqueness factor to a certain degree and i think that there's a certain aspect of like yeah well
[03:27:43]  these problems are solved don't worry about them work on making better developer experiences but so much has been invested to solving the issues around react over the years that people are invested in
[03:27:55]  those solutions so yeah i mean it's a lot i'm i'm saying that it can scale across the whole thing i'm saying i'm saying that there are problems in
[03:28:24]  the implementations today i'm saying that there there's missing pieces i'm but i'm saying is conceptually like talking about this level model if you accept the model it
[03:28:37]  should be able to cover all the use cases it what it's done actually is taking the classic single page app use cases and made them broader now this might actually be good enough
[03:28:50]  for e-commerce that's what that's basically what i'm saying i i also saying that because this is an architectural thing it's not react specific that there's a
[03:28:59]  lot of interesting implications that can come with this that i suspect that within the next you know eight to 12 months there's gonna be other competitors even sooner that might like might
[03:29:16]  make this even like there's a there's a high possibility kind of like with hooks that react isn't the best server component framework like there's better server component frameworks kind of
[03:29:27]  um it's it's it's it's kind of interesting to me to think about i think one of the challenges here um is size right because people do toy demos right
[03:29:39]  so you're in this interesting zone where like like you guys let's do a little math together right let's do a little math okay so what do we got we got the
[03:29:52]  library say the library is size what else do we need to be concerned with we we have library size we have cost of server components we have application size okay whole so we
[03:30:12]  have like what do we call it islands size um spa size okay let's let's let's let's just play with this framing for a second okay so let's take
[03:30:31]  let's take react let's take next okay 80 kb i'm actually being that's a little bit mean 70 kb cost of server components an additional 10 kb
[03:30:52]  and your app this is completely fictional i'm just putting numbers in here let's say your island size is 15 kb it's a pretty simple app and that used to be
[03:31:07]  a spa that was 170 kilobytes okay now consider solution solution solution solution b for this same site where the library size is 4 kilobytes the cost of scs
[03:31:30]  is five kilobytes island size stays the same and we don't care about the spa size what i'm trying to get at is the reason i want to bring up
[03:31:55]  the spa size is you went from 170 kilobyte site down to 105 kilobyte site or sorry sorry a 95 kilobyte site but some competitor on the small size
[03:32:06]  scale is going to have a 24 kilobyte site yeah a table would have made more sense because i want to change the numbers again what what what if so like for
[03:32:16]  toy demos we're gonna see this a lot we're we're gonna see like um this kind of math happening like toy demos might even be simpler because the island size might be
[03:32:28]  more like like this so a 90 kilobyte site versus a like a 19 kilobyte site but if we let's build something a little bit draft more drastic let
[03:32:42] 's pretend my site is 500 kilobytes or something and my island size is 70 kilobytes okay no let's let's make it bigger 120 kilobytes
[03:33:12]  what what i'm trying to get at is that people are going to be pressed with this choice where they're like it's they're going to be like wow i went from
[03:33:27]  a 500 kilobyte site down to a 200 kilobyte site this is amazing with this technology but then they'll be like should i stop there or should i go to
[03:33:36]  120 like it will be very realistic over this time here that sites will be half the size of rsc sites because effectively the size of component scaling is a constant here but
[03:33:48]  because rscs shrink the size of the component size the comparison of here actually gets more emphasized than it would have in the past because if you have if if this this
[03:34:07]  as a spa framework let's like do them like this is a spa framework sorry let's put the spa size in here the difference between these two as a spa framework would have
[03:34:18]  been something like uh let's see here nine all right let's get rid of the cost of scs so um basically four seven six yeah like 430 or something let
[03:34:32] 's let's let's let's say 420 right you would have been like wow if i built this app in react it's 500 kilobytes but if i built it
[03:34:42]  in preact it's it's 420 kilobytes right you know like that's the kind of comparison you're going to do but when people go to server components it
[03:34:53] 's it's going to be like more emphasized it'll be like oh i can make my site half the size if i don't use react right and maybe it won't
[03:35:06]  matter right performance is good enough but i'm saying this is going to be very compelling uh when you can basically make sites the size of an astro site and get the
[03:35:16]  same experience yeah so yeah it's it's it's it's interesting and i want to point out i just said something that's not completely true there's a difference between server
[03:35:31]  components and client components ours and mpa islands in terms of what components see if like we if you do you know what's let's put let's let's let's
[03:35:40]  look at a website medium is that good maybe you look at twitter whatever it doesn't doesn't really matter let's pretend now that we've built this with our rscs
[03:35:51]  and mpa versions of this site um the in our rsc version this stuff's all static right we don't need to do anything with these links this is this is
[03:36:04]  an island over here there's some edit profile stuff these numbers might be islands because they update with like web sockets in the background the thing is these are going to be islands
[03:36:15]  in a server component world because when you click you know you're going to change you're going to swap out this content on the server presumably but the nav is actually in the
[03:36:25]  parent section so you're going to actually update the styles by with a client component that updates so technically speaking you're going to have your navigation stuff is going to have some
[03:36:37]  javascript around it maybe your forms are going to have some javascript around it um maybe some error boundaries type handling stuff you're going to have more client components than
[03:36:46]  you would have in islands because in islands you don't care this line will come from the server under like mpa not islands i shouldn't say it with an mpa
[03:36:56]  you don't care because this line will come back from the server essentially when you click on the next link you won't this will not be an interactive component so like i forget
[03:37:04]  what it was it was uh quick made the movies demo right and i you remember this i was like sitting here you know talking about like salivating over how awesome this app
[03:37:14]  is because it's like interactive and it's got the javascript and it's doing all this and it's 13 kilobytes well if you built this app as
[03:37:22]  um sorry as a as an mpa not as a server component demo it would be zero kilobytes of javascript right like maybe one of these effects loads a little
[03:37:34]  javascript but like building in this as an mpa doesn't require javascript to navigate around because when i click this it'll refresh the whole page whereas if server
[03:37:43]  components like this i actually need to keep you know the active state of of my links i need to um you know handle a few other things so it's not like um
[03:37:54]  from a size perspective an mpa with islands will still be smaller than the server component not just because the router but because of like certain interactive points that you just don't
[03:38:05]  care about um in an mpa because you know it'll come back from the server right right so the navigation nested layouts you could do it with links yeah but you that
[03:38:19] 's not the natural way you're going to like siphon off your app you're probably not going to draw the links i mean you could but you're probably not
[03:38:28]  going to draw the links with your on the server probably not um but like you know there's still interactive parts like i always love showing this demo because this shows off like the
[03:38:38]  the diffing because your input doesn't lose focus even though we're swapping the page out under you here right this is the power of keeping the state with server components right
[03:38:46]  like that you can basically you know not lose input focus do all this kind of stuff but i do want to point out like this you know this is a client component here
[03:38:59]  doing a bunch of stuff and it's quite possible that with an mpa you wouldn't even bother like i'm sure you would because you'd have auto completes and all that
[03:39:08]  kind of stuff in like a real site but i'm just saying like it's these kind of considerations because in an mpa you could you could like type something and because
[03:39:16]  you know it's an mpa or something the experience might be different you click submit and then you do it and then this was actually just an input with no javascript
[03:39:24]  i just want to call out that generally speaking because you maybe you don't have page to page transitions you know in the same way like there will definitely be more javascript
[03:39:34]  in a server component uh than uh in these mpa scenarios but the difference is so much smaller this is still a significant jump um the same demo in solid start without islands
[03:39:47]  is like is over twice the size and felt kits like even like i think felt gets about 35k solids about 30k kilobytes you know to do this like i don
[03:39:57] 't mean the initial load i did a test essentially where i refreshed on like the main page navigated around a bit and then counted the total amount of javascript sent
[03:40:07]  and obviously initial load is better than that but when i did that comparison um you it's significantly less javascript over the over the course of the lifetime and you might be
[03:40:19]  like who cares you know initial loads only what matters sure but i'm it's this approach just lends to it automatically you don't like you write your code this way
[03:40:30]  you don't think about it so yeah islands and mp and server components ultimately do have different implications on code size um it does impact the math a little bit i mean beyond
[03:40:47]  just this five or ten kilobytes that i'm calling out here um but like so i i do want to kind of like put that out there that there are differences
[03:41:02]  but i think for most people you just need to just i know it's so terrible like reverse the thinking and go like we're back to building like building for the web i
[03:41:15]  don't know how it's so funny because all the stuff sounds so like like euphemisms almost or like hyperbolic because you're just like building towards the web
[03:41:25]  platform like this is not actually the web platform it's just you this kind of mpa mentality of just like pages and posts can still scale up to interactive apps with great developer
[03:41:37]  experience if we do it right so um yeah i think there's there's a lot of really interesting stuff here as long as you can kind of see the justification and i
[03:41:51]  think part of that comes from just understanding that this is not out of thin air this is actually kind of a progression that almost everything we've been working on the last decade has
[03:42:03]  gotten us to this isn't just like hey let's you know mess around with stuff because we suddenly care about performance it's like all the aspects and learnings about client-
[03:42:17] side caching mutation uh optimistic rendering waterfall reduction all that stuff is just getting wrapped into the architecture itself to produce something that is a little bit different um it is not a
[03:42:28]  single page app it's not a multi-page app either it's it's something else it's something kind of new and regardless of all the optimization techniques that we're seeing
[03:42:37]  out there stuff like maybe like resumability or um you know different kind of approaches to the hydration it still comes down to the the routing being the foundational piece in understanding
[03:42:49]  like what our architecture is and the all signs point to it being hybrid this is jss turning 30-ish yeah i can i can i can get on that all right
[03:43:06]  so do we have any questions of it was what what i'm saying makes sense i noticed chat got quiet the last like uh the last like uh 20 30 minutes as i'm
[03:43:20]  giving my long tirade like at the beginning of the stream there's a lot of people who had concerns this is when i'm going to address them if you want to
[03:43:28]  poke a hole in any of this worried about scaling worried about um you know like what this can do let's let's talk about it for a few minutes before we get on
[03:43:39]  to this week in javascript all right uh dan did another tweet during the stream yeah yeah i think it would be even cooler because well we already know what that looks
[03:44:06]  like right if you've used solid start um you can get an idea of what that looks like and the the reason is like so many of these things just get automatically handled
[03:44:15]  for you right and it feeds into like it's it's funny server components are coming in right now with this dx thing where everyone's like oh you can just use an as
[03:44:27] ync thing and then you don't have to worry about a local component fetching the thing that enables that if you've been following along here is not the server components completely
[03:44:36]  because we i described how you do this with like a a universal router it's it's just suspense suspense can't prevent waterfalls nor can all this async component stuff everyone
[03:44:47] 's talking about but once you have suspense it's so nice because like you can just like do async stuff on the server and then it just works and it streams and it
[03:44:58]  comes out like you don't have to all that coordination just you know it's handled for you race conditions all that kind of stuff and again i i because i'm always
[03:45:08]  worried about bugs and implication stuff i i haven't been pushing a lot of solid start stuff but like it's been like that part of it has been a pleasure for the last
[03:45:16]  couple years like it's just it's so much obviously nicer to deal with than like having to do with the like the blocking stuff like i understand that the blocking stuff made
[03:45:28]  things easier but once you can just like go oh yeah i'm gonna fetch this data wait for this data and have it all just stream out and load and you go wow this
[03:45:35]  is like i'm getting the optimal performance and i didn't have to do anything special automatic data serialization like when you put all the pieces together you're just like this is
[03:45:44]  really quite nice and we've been living in that world even without server components for the last what like a couple years now um it's kind of interesting that react kind of
[03:45:54]  probably intentionally held back on a lot of this stuff so that it would all come together in this final solution and it's trickier because not everyone was willing to wait but i
[03:46:04]  think i i think that we we are getting to a point where like that reality is going to be going to be soon i'm looking so forward to like when you know
[03:46:19]  i get a little bit of time to kind of come back in here and kind of finish up that part of the story at least on on on solid side as i said i
[03:46:27] 've very much taken my time with the apis and we're learning a lot about server functions and bling uh is is a really good way to experiment on these patterns
[03:46:37]  to understand what we we like on the uh api dx side but like on the mechanical side you can already see it it's just it's so good super fast super small
[03:46:47]  like the second i saw that movies app demo especially i was just like i i don't know if i ever want to like build apps in a different way again like it's
[03:46:55]  like it it's basically the years fighting against this stuff you know like the the javascript size the creep and all that and it's just it's just like it
[03:47:06] 's gone it just works like the model dictates the benefit like you you're still going to be able to get yourself in trouble if you do stuff that like doesn't scale
[03:47:16]  well but like the default like random guy builds a blog site gets basically astro like performance but can just write it like with something like react or solid or whatever like it
[03:47:32] 's just i don't know it's gonna be interesting if react can actually deliver on the promise that's that's remains to be seen but i am not concerned with the paradigm
[03:47:45]  from a us finding the right dx so sort of speak and i'm not concerned on the paradigm finding the right performance maybe outside of react if that's a concern both of those
[03:47:55]  are not concerns for me right i yeah so it's so don't get me wrong i think performance is very important for that reason among other things but i guess the question
[03:48:13]  is like if you view client-side cash writing and stuff and all that as um like optimizing for for performance you're already there like this just is like delete delete delete
[03:48:27]  delete do you know i mean like that's why the dx part of the story kind of comes in because like the base case is more performant and it's simpler well i
[03:48:38]  don't know i think i think architecture changes are harder it's gonna be harder for react themselves because react spent the last few years going like look we know stay the course you
[03:48:53]  don't need to pay attention to this new stuff it's not big enough or different enough you know they didn't do it but the community the whole ecosystem's kind of
[03:49:00]  been working on that like no more javascript fatigue and now it's like no you guys we should change what we're doing like people are like at that point you know
[03:49:07]  it's kind of like everything's new again it's kind of scary i hooks was easy to adopt this is harder um and at this point you you have to start thinking about
[03:49:19]  what this means it'll come much faster i'm going to guarantee this okay here's the thing this is a general architectural thing so much to the point that even if the
[03:49:35]  angular core team doesn't get to it someone's going to build this on angular for veet in less than two years guaranteed this is not going to stay in react land
[03:49:44]  and if anyone wants to do that and wants to know how talk to me i'll help you what could compete with circones in five to ten years a lot of
[03:49:59]  things um wasm might finally get to where we need to it would be interesting what that looks like but i think there is still potential for that i the thing that i'm
[03:50:14]  not really emphasizing here that i should be that like the missing gap that makes you really excited for the future about this is what you're seeing here is a layering like dan's
[03:50:24]  tweet is actually really good at showing the layering because he's showing okay initial code on the server you know then in the client and he shows this layering this layering could also
[03:50:36]  extend to build time it could extend to edge versus serverless and i'm not suggesting just the server component thing it's true about the dollar sign bling operators too we're
[03:50:45]  talking about distributing a monolith across architecture and across time like when you do the building when you do it so essentially this is the area of exploration which means that when i
[03:51:00]  talk about wasm i might be talking about you know how it can apply to optimizations in a certain place like the biggest question is going to be around granularity right server
[03:51:14]  components are saying components of the right granularity here's the props that's what we serialize it makes it really dirt simple you don't have to worry about the details
[03:51:22]  an alternative approach might be something more fine-grained um like uh what quick does the reality might be somewhere in the middle where certain decisions are always coarse-grained for
[03:51:33]  simplicity and other ones are fine-grained for you know uh efficiency so like server components of course are grained server functions are finer grained like that kind of split
[03:51:44]  so there's a lot of variations on it but if when i start step back and look generally it's it's all solving the same problem it's like making sure that work
[03:51:54]  gets done closest to like where work needs to get done so we can basically distribute our app in a way that is efficient for everyone across the whole spectrum that's that's what
[03:52:04]  that's the the big takeaway this isn't about server and client it's not even mobile or whatever it's about taking monolithic architecture and being able to use in an
[03:52:14]  efficient distributed way without it's like it's like microservices for everyone without writing a microservice no it's like this is the challenge here you server comp you you you
[03:52:30]  instead you write a server component app and drop your app into it it's like astro how do you move a next app to astro that's the same thing with server
[03:52:38]  components am i ready to say it's improving dx in cases where you're already optimizing for performance dealing with cash and whatnot yeah and then the other case it doesn't matter so
[03:52:54]  it's like it's like no no worse so it's like it's basically just like for the most part like a net positive i think the place where i start seeing
[03:53:05]  the friction here comes in is the fact that they're the server and client like it's about dx where the friction comes in as well it's it's about understanding that the
[03:53:13]  server and client models like there might be different data fetching models um because but it i i i trying to unify that is probably the biggest challenge here and we might
[03:53:26]  be being too prescriptive now like we're hoping that by putting everything together into the same patterns we can kind of like eliminate that as a concern i find that's never
[03:53:35]  completely effective but i think i think that's where the challenge is like where it's like use versus async component that's split like why is there a server component client component
[03:53:44]  and what we're saying right now is like it's good to acknowledge that there's these different zones um because you can optimize for them so that's a performance consideration it
[03:53:54] 's good for your sanity too if you think that way there's an argument and this is like the five to ten year question that and like the quick question is like should a
[03:54:03]  compiler optimize that for me and not worry about it it depends on how much you want to give up that control so i'm wondering if i mean i i see this kind
[03:54:20]  of a separate side of it like stuff like forget is interesting because it helps improve react code but like again you have the same transparency thing i like there's always trade-
[03:54:32] offs when we add on this stuff i don't want to sound like this isn't gonna hit its new thing i think one of the like there's so many dangers you can
[03:54:40]  see in this right now when we start encouraging people like oh yeah waterfalls don't matter like if we say that officially it will come to bite us 100 percent like we'll
[03:54:51]  be like oh yeah we wrote all our code with waterfalls and now we want to move it all to the edge so we actually don't like those waterfalls like like
[03:55:00]  better like stuff will change but i i think yeah i i can't speculate on the the impact on stuff like forgetting that like because it's all about balance right and this is
[03:55:16]  kind of split here but but there's nothing stopping you using the current way right server components are a routing thing that's why i said the name is really bad it's
[03:55:29]  like it's like an architecture like a routing consideration so if you're on a page and it's interactive and you're like oh i want to freaking change the profile photo then
[03:55:36]  like you you have a couple choices you can just change the profile photo or you can just like go hey doing action change profile photo and then it in the background it just like
[03:55:48]  i don't know if that's like in both cases you just hit an endpoint and it's the difference between the endpoint being like hey i'm going to like it saves
[03:55:58]  duplication in a way and i haven't talked about this much and i hit this a lot with solid start because when you when you're creating an action conceptually pretend we
[03:56:09]  didn't have an action print if you're just like hitting an rpc you know at the point that you do the processing on the server what you should be doing
[03:56:16]  like you're like oh this i've added the item to the list let's go to the details page you know that information at the server but what you have to do then
[03:56:24]  in a classic single page app it's the api has to go okay indicate a success uh like it depends on where where your logic is a bit like maybe that's a
[03:56:33]  bad example because success case is easy but like there's a certain point where you end up like duplicating logic between client and server in order to like do the same action
[03:56:44]  because because you know that the server will do it check the thing and then the client has to know how to handle the exact same thing again so you have to communicate that as
[03:56:52]  well along with the data and to be fair that decoupling can be very good because it means that you're not tying your back into your front end but what this is
[03:56:59]  actually suggesting is we just want to move the line of what is front end further back so the coupling is actually good here where you know if you want that abstraction you know
[03:57:09]  have that abstraction be between your data service layer and the action not between the action and the front end right it's like it's a matter of like figuring out where these things
[03:57:17]  belong um and i think this is why it comes down to learning and patterns because you can still do it the old way if you want to i just suspect you won't
[03:57:45]  yeah exactly so like that's the thing like if i think i think this is an exciting time you know seeing these things anyway it's done in the 90s yeah i don
[03:58:10] 't know these things kind of keep on coming around so to speak and the reason they keep coming around is because the desire is still there there's the hope of unifying
[03:58:22]  the document web with the application web this seems like the best way to do that so far i know there's a lot of friction because here's the thing this model puts stuff
[03:58:33]  like tan stack query into into question because it's kind of built in we moved the line back right the where that stuff's happening is in a different point it puts so a
[03:58:44]  lot of the data fetching libraries state libraries their impact drops but it has other implications right i think the only reason the react team's even talking about reactivity is because
[03:58:54]  they're like look if we think we're in a server component world we're like 80 of the world's server components maybe we can make that concession to reactivity
[03:59:01]  in the client because it makes sense because there's like it's just the really interactive parts i don't agree with their argument or logic there but i'm just saying like it
[03:59:10]  starts changing the way you think fundamentally which means it's not just changing the way we look at the server it's changing the way we look at the client which is scary
[03:59:19]  um that that's the part we have to like acknowledge here this is not just a feature it's not just lakes it's not just like oh i optimize this one thing this
[03:59:32]  is not about optimization this is about actually changing the way we build web applications yeah i talked about this a little bit i i don't know for sure but we designed it
[03:59:48]  on stream about 30 minutes ago what i'm saying is whether it's a form or whatever you it's that mentality we need to just to kind of go over this a little
[03:59:59]  bit we need to use an rpc um did i did i draw it any better anywhere else no i just talked through it unfortunately you might have to watch the video get
[04:00:06]  a better answer but we're gonna do an rpc that's gonna push whatever that mutation into flight into ephemeral state and then when we hit the server we're
[04:00:17]  gonna do our action you know with on this rpc and then direct somehow the page to reload or redirect essentially and that reload or redirect is basically just re-rendering
[04:00:30]  the page with uh rscs and then the client will get the the the you know rendered html jsx whatever the generic term and diff that but basically it
[04:00:41] 's gonna it's gonna be like a forum post it's just gonna be with the ergonomics that we choose but conceptually i i think we're thinking in um ultimately
[04:00:59]  i think it gets simpler at his introduction level the problem is when you come in this is why they're playing the whole framework thing when you learn when you come in and you
[04:01:09] 're going i want to build a react or i want to build a site and i want to use react for it or solid or whatever what you're going to do is
[04:01:16]  they're going to be like okay here's next yes let's say you you got to use it next so you're not thinking react or solid you're thinking it's start
[04:01:22]  or next or kit or whatever and your first experience is going to be like here's how you define a route okay and in this route you can render some markup you're
[04:01:32]  not even going to talk about client interactivity i i'm familiar with this because it's like mpas you teach this the same way you teach mpas which is actually really
[04:01:39]  simple you tell people to focus on the markup this is part of the reason why i've been debating whether actually server components should actually be dot astro files like if
[04:01:47]  that actually is a way better dx for this use case um because you when you come in you want to just rent you're teaching people the web by making markup and fetch
[04:01:59] ing data the component wrappers are kind of like excessive there you know like like you literally could just view this as like here's my html it could be js
[04:02:09] x but here's some html here's some data fetching and don't worry about nesting you just made your page and then you're you know maybe later you
[04:02:18]  worry about adding a layout but and then at this point you're like oh i want to do something interactive and then you're like okay now that you have my page let
[04:02:27] 's add a component with state this is an interactive component so you go and you and you go like go okay since it's an interactive we have to say it's a used
[04:02:37]  client or whatever term like so their naming is like particularly bad in this area so you go in and you add the used client and you go here's how you add state to
[04:02:48]  your app and you build your client component and you put on your page like this is the the path forward to this and like oh how do i navigate to another page will
[04:02:58]  i just put an like a lot of the spa concepts become advanced concepts that you might never even need to learn essentially that is like even some of the state stuff might get pushed
[04:03:10]  off to like chapter two that's how you teach this stuff web fundamentals yeah i i keep on saying this i don't know if astro should go this way but like
[04:03:25]  you know yeah so the like the problem is if you start from react today you're going to be thinking all the wrong stuff this is really just like forget everything you know no
[04:03:47]  one likes that um it's exciting though as you can imagine because if it's forget everything you know um this is a wild open playing field the thing is i think the
[04:03:59]  adoption will be slow enough on this stuff initially um like it's going to take some wins before people actually recognize the power here which means that react will have its time to
[04:04:11]  kind of come up with a good solution i mean that's mostly it um i don't i'm actually really happy the work we're doing right now we're we're like
[04:04:26]  deleting a lot of stuff my goal in creating solid start was creating a starter i don't care about meta frameworks i don't like frameworks you build your own framework on top
[04:04:37]  of it i i just i wanted to make sure that the baseline experience for building didn't require a framework when people go you need an xjs for this that is not what
[04:04:46]  i want to be telling people getting started in web dev that is just i really really didn't want that and so what's going to happen with start is the work's going
[04:04:59]  to the router we're going to have that universal router that works your client only server components the whole spectrum but the work can go in the router you know we have bl
[04:05:06] ing to do the server functions you know and potentially the islands and from there you know a plugin for file system routing if it makes sense or whatever it like that's it the
[04:05:21]  the framework is is just an astro for the deployment and the baseline the at that point the framework is just not even a framework which which is beautiful right if someone wants
[04:05:31]  to build nuxt or whatever on this like that would be awesome but that's not that's not my goal here i think that what we need is just a solid foundation we
[04:05:43]  need i i've already like i wanted to create the crate t3 app of frameworks not of or of meta frameworks it's not a meta meta frameworks in a sense create
[04:05:55]  t3 app is like the meta meta framework thing where all the pieces are all independent and it's the way you put them together that makes them the thing for for us our
[04:06:02]  meta framework is that it's the thing itself is nothing it's just putting the pieces together those pieces might even be optional to be fair that that is where my mind is at
[04:06:15]  if i i want to make sure people can build the best things if if we get too prescriptive here we you know we risk you know i i i i'm
[04:06:24]  trying to think of how the best put this as long as someone can get up and started with an ssr app in an optimal way and they have all the pieces they
[04:06:35]  need then like base pieces then i've done like we've done our job here it's it's some people some people i i forget who was a theo or was comparing
[04:06:45]  like that rscs are like that react going to its roots and being the minimalist and you go thing again no react is it's become the framework this time around it's
[04:06:56]  angular so to speak um and my goal is to be the react this time around if that makes sense bling is um we took the server functions the dollar sign stuff out
[04:07:19]  of solid start and generalized them and we've been working with tanner lindsley from tan stack as a way to basically bring server functions to everyone um so this
[04:07:31]  is a foundation for not just rpcs for code splitting lazy loading all this stuff that works across frameworks tanner is building tent stack start inspired by solid start essentially as a
[04:07:42]  react framework and and solid's a solid frame we realized that being agnostic was not going to serve our goals we need to be specific to in order to actually accomplish what
[04:07:51]  we need to accomplish but that didn't mean we couldn't share stuff and work together so bling is an example of of that kind of collaboration so who's english no
[04:08:08]  react is is what i meant who's english no react is is what i meant like they've decided that they need to be the framework that has all the pieces kind of
[04:08:28]  coming in i realize that they're like a spec so they're not really but the i think the effective result of this approach is that that's what's going to happen
[04:08:36]  we'll have to see all right i think if we're good on questions i'm going to gear up right now for this week in javascript give me a second
[04:08:53]  as i kind of shift my view around keep on firing questions i'll answer them as i'm kind of getting myself set up here but all right all right sorry just getting
[04:09:36]  this all set up so weird twitter's been so messed up recently that like i'm trying to it's like it yeah it's fine like half the stuff i was looking
[04:10:15]  for i can't find at the moment but it's it's fine let's let's get there this might be a short this week in javascript yeah like i
[04:10:34]  see a tweet that i did on march 4th in my bookmarks from someone else quote tweeting it and it's like literally missing from my timeline i'm seeing like i'm
[04:10:42]  seeing like tweets from like different different stuff getting pushed up oh do you know what it is haha i'm in i'm in my mentions or my replies i'm sorry it
[04:10:57] 's because of the i was using twitter to do all the examples here okay i feel better now i'm not insane all right all right all right let's okay good good
[04:11:23]  and one more sorry bear with me was i just get this all set up um let me see here okay yeah there wasn't too much solid news this week i'm
[04:11:50]  not gonna worry about solid stuff we're just gonna yeah that's the only one okay perfect okay how's everyone doing all still live i actually not much andrew clark
[04:12:02]  this week all right i don't know what to think about angular these days honestly angular is i i'm enjoying angular immensely i i they're just like they're big enough
[04:12:31]  that they can just like throw grenades in oh man i know that's so funny but it's just like um yeah you you can like you you get to a certain point
[04:12:51]  like they're revitalizing in such an incredible way um that it's like so obvious because they're like catching up in really short order and but they're also so widely used
[04:13:00]  so it's just like they have incredible amount of swinging power so to speak that they've just been sitting on and now they're just like now they're starting to like you
[04:13:10]  know throw a couple blows in i i'm i'm i'm very excited about um that um so all right so let me check twitch for a um a moment uh
[04:13:47]  here thank you charl charlie devs for first prime subscription um i know i haven't been up on twitch for the last hour or two but you know every little bit
[04:13:59]  isn't is is awesome it helps thank you um oh i see a clip about create t3 app to be fair obviously i started solid start beforehand and obviously i was doing
[04:14:16]  my thing but i want to just put out there that like that was the kind of thing i was trying to capture it's a lot easier to see it when you have all
[04:14:26]  the pieces already but that's that was what i wanted to do here i just wanted to like put some pieces together even less than what t3 app does the t3
[04:14:33]  app gets you to like a more opinionated level i wanted to have like the baseline of that anyways yeah we could talk about millions i know my no my problem is and
[04:14:44]  challenge here is i don't talk about stuff on performance until the benchmarks are submitted i don't count my chickens this is i picture if i had talked about millions 1.
[04:14:55] 0 um like how how and you know hype that up and then like how much you know a performance at this point of the minute this time as far as you can tell he
[04:15:04] 's delivered so i'm pretty stoked about that but like i just don't count the like i don't like when the press release goes out before the benchmarks are submitted you know
[04:15:14]  or not submitted but before they're merged like i know it sucks from like a from a from a like marketing standpoint but like generally speaking like um i i need i need
[04:15:26]  to see it solidified because it's quite often things don't actually end up like it's surprising like almost eight out of ten times they don't end up this case i
[04:15:35]  actually know a little bit more because i actually worked with them uh helping with a memory leak and actually like help so help tweak getting the performance in and i'm very impressed with
[04:15:43]  the work he's done i'm i'm i'm i'm pretty confident this time but you know i this is just how i do it uh okay cool cool cool okay
[04:16:01]  good good good okay i think i'm ready to go yeah no i i'm i'm i'm i can he's asked a few questions over the months and then finally
[04:16:20]  one day i we we were kind of like debugging you send me screenshots of stephanie's like and i'm like no check this open this like we were like basically back
[04:16:27]  and forth doing not on a call but doing basically a debugging session on on memory um and it led to him actually finding the memory leak so uh anyway sorry i yeah i
[04:16:44] 'm more than willing to help anyone uh on this kind of stuff and again i love the solid discord just to go i get the shout out about it we have all the framework
[04:16:57]  authors in there um so you're not all of them from all the frameworks but on the smaller side we do so yeah is it in all the discords no i mean
[04:17:13]  i have a few discords like that but yeah um generally though uh yeah i think it's all discord is kind of special in that way it makes it kind of hard for
[04:17:23]  beginners sometimes you will have like you'll like get off track we have like dominic octane aiden you know or um million greg leptos uh fabio
[04:17:35]  vobi alexis compostate like dozens of framework authors all sitting there occasionally getting drawn into the debate when ideas come in and i think it's so interesting um to see
[04:17:47]  that kind of interaction happen uh but you know sometimes i'm worried like people are like i was just trying to learn how to use solid but maybe being a fly on the
[04:17:55]  wall is is it's helpful too yeah any of the amalgamation places like veet is a good one astro is another one um uh we tend to get a lot
[04:18:05]  of like the really performance oriented discussion though around like reactivity especially people care about reactivity i i you know i don't think it i mean why do you need any
[04:18:24]  optimization i mean it's a fast feed on library um block dom it kind of showed this new way of doing v dom and um million basically kind of branched that in
[04:18:40]  you know to to together basically v dom creation had recently become like the bottleneck like inferno had nailed stuff pretty optimally except for uh i guess you could do a little
[04:18:52]  bit more in creation um and that's what a lot of the reactive libraries like solid and then we're doing so they've now added that creation bump up so now something like
[04:19:01]  the js framework benchmark it's pretty much impossible to separate like uh a v dom library from like a reactive library in terms of performance the benchmark is is hilarious right now i
[04:19:11]  mean i could pull it up but it's literally everyone's like 1.08 or 1.09 like and that varies between runs so like there's like 12 or 15 frameworks
[04:19:20]  that are all the same speed that like on any given run they can like jump 10 or 12 spaces either way just like based on what the machine did like we basically have
[04:19:31]  like all these frameworks that are just like maxed out and then like everyone else um that's what that frame benchmark is turned into and it looks like million is going going
[04:19:41]  to join that fray up there with solid inferno vobi um yeah and a number of others so like yeah i i don't know i mean if you're interested in
[04:20:05]  it like i don't know how their size pans out there's always features like it's it's tricky performance is never the single guiding thing um yeah the only thing that
[04:20:15]  bugs me is type narrowing on signals i know and it's like is that enough to like come up with a worse api for composition yeah it's so brutal if
[04:20:32]  typescript could solve this for me like we would we'd be we we'd just be buddies you know it's just like every time this yeah i've always had a hard
[04:20:43]  time with typescript i have a vision of how things should work and typescript like doesn't always agree anyway uh we got to get started on this week in javas
[04:20:59] cript uh yeah i mean try sending me a message i'll see if you do reach out just like ask the question in the message and i'll see when i can respond to
[04:21:06]  it could esno solve it yeah i mean asno could solve a lot of things potentially that's why i was excited about it yeah i mean i don't know you
[04:21:30] 're happy with react you're happy with react i think i think what's interesting to me is that at a certain point like there's a create jd app right which
[04:21:42]  is all the same stuff that's in t3 right at certain point you spend more time doing that and less time doing the react versus solid part so like there's a temptation
[04:21:53]  that i i could say that like you might just like be able to at a certain point just like build the thing in solid not even really care if the difference between solid react
[04:22:01]  and just get something that's smaller and faster and just be like yeah you know but if you don't care about that like who cares but like there might be just a point
[04:22:07]  in the future where you're just like oh the experience is like basically the same except you know it's just kind of like better in some sort of empirical way and then
[04:22:15]  you can just be like okay that's worth doing otherwise just not so like that i mean these things kind of all do the same thing so you know you know if performance is
[04:22:28]  a concern this might be a direction you know but like this is why i'm not not like not like i don't like when people say like oh it's only for
[04:22:40]  performance but i can i can make that argument um from the perspective if i'm like a react developer i could be like yeah this is only for performance because nothing else actually is
[04:22:49]  that different there's some dx changes and stuff that i actually quite like but i mean like yeah i you know composition like yeah i don't know i know this is a
[04:23:02]  poor sales pitch but like i i i i don't know like so i think that's a good place to to learn if that's what you're interested in most of
[04:23:40]  my knowledge is picking up pieces little bits from various sources and tying with my experience i don't have a singularly good place for this stuff when you're talking about platform
[04:23:51]  level stuff it's a different learning than building a product if you're building a product go listen to theo so to speak you know um it's that if you're making productive
[04:24:00]  startup if you want to understand these tools and where they're heading and like how these things work you're in the right place right yeah i'm sorry i'm so bad at
[04:24:09]  selling solid there being like yeah i think there's lots of actual benefits to using solid and when we get solid start stable you like it will just make that crate t3
[04:24:18]  app experience just that much nicer so to speak and better but i mean like this stuff is also relative to me that i feel almost tired you know kind of like defending it or
[04:24:30]  whatever because like you'll be perfectly fine using what you know so yeah you know i just hope when people do greenfield development they like give it a shot because like i
[04:24:44]  think it's pretty cool all right enough i wasted like 20 minutes doing this um okay yeah i mean that's not the messaging that i would use anymore i think that historically this
[04:25:07]  is true i actually think we're building something that's pretty sorry the pun solid so to speak so like there's but like when you consider the competition and how similar different
[04:25:16]  solutions are those differences might not be enough to move from the incumbent um in every single scenario i just think that like when you get to a point where you're just like it
[04:25:28] 's a little better in like every little point you're just like maybe that's enough people are looking for some like drastic change and the thing is the drastic change in architecture
[04:25:38]  the drastic changes the singles like that stuff's already there if but like ultimately in the day i'm building an app so what you know are we gonna get superficial about syntax like
[04:25:50]  do i have to go to svelte and then that's different you know like there's so many little choices and things that feed into that okay let's let's
[04:26:12]  let's uh let's do this we can javascript okay so let me all right there we go stretch it out a little bit sort of okay so let's okay
[04:26:27]  sorry it's funny i i do everything as if i'm gonna clip this but then i never end up clipping it so let's let's get going let's talk about this
[04:26:35]  week in javascript um last week was a lot for me as i mentioned if you watch that stream you saw that i was basically i was exhausted i hadn't sha
[04:26:45] ven i was like half asleep i had my hair half sticking up and i was just like i tried writing three articles in one week and i was just like done i'd stayed
[04:26:56]  up the whole night to basically to write the friday article and i didn't think i'd go for five hours and i still did this this week was a lot cal
[04:27:07] mer basically only two things people are talking about um server components and uh yeah what was the other thing geez i can't even remember we'll get there in a minute but like
[04:27:23]  we'd for the most part the signal dialogue had moved on um i do have a couple more signals things to wrap off but um we'll get there in a minute uh
[04:27:36]  before that just a little bit of solid news i thought this was really cool i've been celebrating stuff with solid printers for those of you don't know um solid has a prim
[04:27:47] itives library um solid primitives which is basically like our react use it has a ton of packages of like hooks you can basically use with your solid application and they hit a
[04:28:02]  couple milestones uh this week which is really cool is that um there's now a hundred thousand downloads per per month which again isn't the you know hugest number but that's
[04:28:13]  still pretty pretty nice um you know solid itself is about i think about 75 000 downloads a week so like this is about a quarter of our downloads um uh people who download
[04:28:28]  solid also i guess download this so that's a significant um you know thing for solid primitives they also released um a website i believe uh solid primitives netlify apps
[04:28:40]  so this gives you an overview of all the different kind of primitives you can use using your solid app which is amazing because this um it's just a lot of utility
[04:28:51]  to me you know things you might think we're missing in order to develop apps in solid look at all these pages of hooks there you go um and they we we they use
[04:29:02]  a like a stage system for proposals and stability of these which is really cool they it's a community driven project it is orchestrated by people on the core team loop key to
[04:29:15]  part of it but there's a whole process of submission to get them in and this makes it really really nice for contribution and kind of building towards future standards with solid i
[04:29:26]  i love i love this i might be very defensive of the core core but this is like a really beautiful way of handling um you know like a standard lib oh wow did
[04:29:38]  we get a raid all right oh acorn 1010 thank you very much for for the raid um we're just getting to this week in javascript um which i do
[04:29:54]  it at the end of every stream kind of going over twitter what's gone on and i was just giving a little quick plug to solid as i got started because obviously um
[04:30:02]  author of solid js but um our our react use or view use equivalent library um just released its website and hit a hundred thousand downloads per month so that's it's pretty cool
[04:30:15]  and just kind of showcasing that all right um with that aside uh kind of wrapping up on the signals conversation um from from last week i i i i came across this
[04:30:32]  really cool tweet uh joe savannah if you guys aren't familiar with is basically lead of react forget um worked on relay worked also on the skip language which is a
[04:30:43]  reactive language um inside uh meta and he had a really interesting observation here and again this is probably more interesting for kind of like the solid folks in the audience um is that
[04:31:07]  when he was developing this reactive language at meta it had explicit reactive types like this is a reactive variable but over time the language actually he realized he didn't want to define what
[04:31:19]  was reactive that everything should be reactive um the and this this is an interesting observation because i think in a lot of ways it guides why svelte is the way it is
[04:31:31]  and it's also interesting because solid actually doesn't have a reactive type either we have like accessor which means maybe reactive it could be any function um and it's because
[04:31:41]  we also treat everything like reactive we actually don't have an is signal um so yeah it's a very interesting understanding of for me once i realized that because in a sense we
[04:31:56]  all want to move to a reactive world but um in a sense solid not having a signal is kind of acknowledging that maybe that reactivity should just be implicit kind of like
[04:32:10]  the what reacts is and in a sense react component model is more of a concession that like this is a really hard goal and they only want to attack this in a narrow
[04:32:19]  scope which is such an interesting way of looking at the problem from my perspective because what i'm what i'm basically saying is like in a sense i'm willing to make
[04:32:28]  certain trade-offs so that reactivity is global that react isn't willing to make because they to get the ergonomics they want to reach they're willing to like limit the
[04:32:42]  scope of the reactivity and i think if you think about in that terms that is basically the difference in positioning of us um on that whole signals argument or discussion depending on
[04:32:54]  what you call it um it was interesting though because there there was some people who didn't particularly like it when i when i saw this i knew fabio from bobe would
[04:33:05]  be like i he hates this detail because in my eyes permissive components are the same coin you know and he goes on about you know how he doesn't like the
[04:33:16]  fact that we don't know what's reactive and that and the truth of the matter is i thought of him with this tweet because i realized that when you're designing a framework
[04:33:26]  you still bring your ideals into into the thinking a little bit you know i mean like you're still kind of like even as you're trying to be like practical about it because
[04:33:34]  there's a time that i would have agreed with everything he's saying here i would have been like yeah explicit blah blah reactivity but i too with sal's design i
[04:33:44] 'm trying to get to a reality where reactivity is is our language even though javascript isn't necessarily great for that so it's like it's funny though how sometimes
[04:33:52]  these decisions look like off opposite extremes he said that we pretend reactivity doesn't exist but it's more that you pretend that everything is reactive um so i think it's
[04:34:03]  interesting because you kind of put solid actually in the middle ground there's always going to be people who are like more purist or hardcore on that aspect and reacts like kind of
[04:34:15]  like on the opposite side i i often see both sides of the argument and it's a very difficult balancing act and to be fair i criticize view often um for being in
[04:34:25]  the middle like that but on the flip side as long as you can justify it and stay consistent i think you're okay so yeah just to kind of point i here's a
[04:34:40]  similar comment i saw this one adam hale creator of sjs and surplus he was like solid started a fork in my library that's that's a little bit strong but
[04:34:49]  yes i'll take that and this is one of my biggest disappointment of the changes ryan introduced in surplus bodies of function components are still reactive when you break that you break declar
[04:34:58] ative rendering right this is going back to this example and i want to bring this up we talked about this at length last week about like the differences between these two examples and what
[04:35:07]  adam was saying is like in surplus this doing this would would be reactive still so whenever count changed then the whole component would rerun and i got rid of that in solid
[04:35:20]  for a very good reason actually i got to think fabio and adam go on discussing this for like 30 more replies like we don't need to get into it but if he
[04:35:31]  said it re-executing a component is potentially the most expensive thing a user can do in my opinion it's very important that doesn't just happen accidentally but very explicitly
[04:35:40]  and i agree and that was the design and this is why i like this conversation because it you can immediately see that this is not a simple matter like a moment ago fab
[04:35:52] io was telling was talking about how he didn't like you know some implicitness and solid versus explicitness and then you know adam who's basically the creator of this whole paradigm
[04:36:06]  in terms of the ownership model for reactivity was basically saying like yeah i think i think i think we should basically default to the like most inefficient way of doing things which
[04:36:16]  kind of aligns with react so like there's no clear single sides on this right the truth of matter is you can maybe fix this with a compiler you can but is a
[04:36:28]  fix even a fix if you get away from what's actually happening this is a very deep um thing and they i'm glad these two found each other they got to have
[04:36:37]  a great discussion i didn't have to argue the points and i'm you know this this is this is kind of like where the signals debated it kind of it started it started
[04:36:51]  strong and then kind of dropped off i i gotta quickly point out how quickly it dropped off um because i'm gonna give ml rawlings uh a look here michael mar
[04:37:04] co makes great memes you can see at the beginning he made this meme had good engagement make it easy to miss you know this this is a pretty funny one perhaps this
[04:37:29]  meme even better engagement this meme this meme zero engagement so this is my way of of saying that uh it's funny i actually find find the third meme probably the funniest of
[04:38:02]  all of them but um uh i think we're all kind of done with the signals conversation at least for a while anyway thank you michael for that one all right where
[04:38:27]  am i i'm okay back in bookmarks yeah that's a react i mean if you watch the react documentary a certain way like after it's funny he got the idea
[04:38:43]  for that meme because he looked at my article the the one that was pretty popular last week with the react versus signals 10 years later and i i explained the whole thing you know
[04:38:53]  and talk about all the way down to i think a pretty important message here to understand is like where some of this confusion comes around and like i showed this whole thing about
[04:39:03]  how reactive libraries had the same pattern as hooks before hooks came out and this might for some people be kind of you know challenging to just kind of see these differently in in actually
[04:39:14]  kind of the same way when people see solid and they're like oh you're just like react and you improved upon it if there wasn't that like five years in the middle
[04:39:20]  where react is using classes if you went from like 2010 straight to hooks you could easily see um you could easily see that you might think that react was trying to improve upon
[04:39:31]  signals but if you if you there was a lot of really like harsh sentiment towards it and at the end i was just like look this is no secret how they feel watch the
[04:39:42]  documentary because if you actually watch the documentary it's the story like if you have a very specific context very similar to the context i have it's the story of how they
[04:39:53]  they killed signals like um it's it's an interesting it's an interesting thing i as i said it's a bit hyperbolic to say it that way but like they
[04:40:05]  feel very strong as i talked about the previous stream that they fixed a problem um and we don't have to get into it again um i think i think evan you
[04:40:17]  can have said it best um uh here um the react thought leadership had long cultivated the narrative our model was more correct almost becoming dogma in reality managing years simply are more productive
[04:40:34]  with you know a different one arguing on philosophical levels pointless there we go the end of that discussion but this is this is essentially um essentially what what is what happened here all
[04:40:49]  right okay so moving past that um astro and netlify both did rebrands um this week which were really quite cool um i enjoyed this i don't know
[04:41:10]  if anyone checked it out it was sad to see uh you know theo's tweet move down on the on the on the on the list but astro really focused up their message
[04:41:21]  this is a really cool website update um love what they're doing the branding um to mention netlify also has a whole new brand that got dropped this on the list
[04:41:34]  and that's a really cool website um and this actually leads into this little thing where fred did that comparison um with um i mean we had it earlier up did i not
[04:41:49]  quote tweet it uh that's fine uh fred no i definitely did what am i talking about there's there's no way i didn't yeah here it is where he
[04:41:59]  he looked at actual real world data looking at the performance between different javascript frameworks and you got to understand there's some legacy here that you have to consider like nux
[04:42:10] 2 and whatnot but what's i love how we use wordpress as kind of the um the the bar because it's kind of interesting like obviously astros islands give them a
[04:42:22]  leg up but it does in a lot of these benchmarks stuff like first input delay is actually pretty good in most frameworks um but the overall score actually doesn't give most of
[04:42:34]  the framework sites building these frameworks um a passing grade the thing you have to keep in mind with this is the sample size is a lot smaller i think there's only like i
[04:42:43]  forget like a thousand astro sites in this compared to like you know tens of thousands of sites or hundred thousand sites in like other things so there is that to consider but
[04:42:53]  like it's still enough data to be able to kind of you know talk about the performance metrics here um and kind of see uh you know this kind of common trend between um
[04:43:08]  obviously newer frameworks but even like where gatsby and remix fit into the thing and then we're next and nuxt are in in this um i have so many thoughts
[04:43:21]  about this especially with imp because i think imp is going to be a challenge for a lot of frameworks because they it basically it's hard to interaction to the next paint is a
[04:43:34]  metric that's designed to hopefully um give us an idea of the cost of interactions so it's supposed to give us a better idea of like how fast our sites are after page
[04:43:45]  load but the challenge is that most single page apps use client-side navigation and that means that where a multi-page app would only have like small interactions perhaps single page
[04:43:57]  apps are going to get dinged for doing navigation on the client and that arguably is better than you know like imp scores are going to be better than lcp scores so
[04:44:06]  it's like it's it's a hard this is kind of perhaps a little bit biased against single page apps we're gonna have to see how this all lands but um
[04:44:15]  it's at least it helps give us an idea in any case i'm very stoked that you know we can actually see these correlations with real data and it gives us something
[04:44:24]  to target towards he's got like p95 he's got lots of stuff size of javascript impact you know um it's the average astro site is much smaller and
[04:44:35]  even smelt kit site is much smaller this could simply be because of the type of apps being built but it is interesting to kind of see um he's very forthcoming
[04:44:45]  about this i just recommend reading this all together i'm gonna drop this in the chat in case you know just it's a good it's a good performance blog um all right
[04:44:54]  let's keep on going um do do do do marco marco's been coming back in radar um this is if you guys are familiar ryan turnquist uh
[04:45:09]  uh solid core wrote solid router this is what he's been doing since he joined ebay um he's he's been working on a meta framework uh uh for marco and
[04:45:20]  marco is kind of like already a server-side rendering framework but what they released was marco run which is veet based up directory file-based routing live reload
[04:45:30] ing it puts the whole marco experience together in one place um i love this graphic art i know there's some like call out to astro almost it feels like with the
[04:45:37]  rocket but um really cool um so this is their beta release um so make it easier than ever to get started with modern tooling to build on marco how's it doing
[04:45:51]  how's it going jacob yeah um okay oh sorry there is ryan andrew sorry there is an andrew clark tweet okay we'll we'll get to that
[04:46:12]  um we actually touched on this a little bit um when i was talking about what we're doing with tanner and we how we chose i i get i get sometimes some
[04:46:23]  criticism people go ryan why like i really wish that remix and solid um you know just were together like we could use solid and remix and then that there wouldn't be solid
[04:46:35]  start and all that and the problem is sometimes making things agnostic like working from all the tools isn't like the best served for anyone and andrew was trying to
[04:46:43]  make this point and obviously you know people were not um stoked about that um and people still wondering where it's five percent market share i've never used astro or tan
[04:47:02]  stack query either you know um it's it's it's it's hard to make blanket statements and that's exactly what we do when we were on twitter um but to to
[04:47:13]  kind of add to it i do actually agree on this to a certain point what i was trying to say here is that like react is trying to position itself as an ag
[04:47:24] nostic tool now that it's kind of becoming more of a spec um with stuff like server components so i think this is an interesting balance for react itself to play um in
[04:47:33]  terms of being agnostic we talked about earlier on the stream about react um you know and remix like dan you know going hey wouldn't it be cool if you guys
[04:47:41]  used our suspense and transitions and remix you know and you know making the issue and all i got to say is it's always easier for lower in the stack to attempt to general
[04:47:50] ize solutions for hiring the stack and for that to cause friction be it web platform render library the lower you have the most power to optimize but higher you may have the most specific
[04:47:58]  needs and i just want to kind of like double highlight on that because like it's the same thing with like web components in the web platform you always have like the framework
[04:48:05]  authors being like no no like let us do things our way if you provide a good enough primitive we'll use it i feel like you know reacts entry going to enter that phase
[04:48:15]  of of the progress so it's interesting because actually andrew responded to me um to this tweet and he was like he was like i feel some people interrupted interpreted it as
[04:48:28]  if you should only build for react but you know there's other options are integrated well their frameworks and yeah react itself if you consider the react native part of react which i do
[04:48:36]  is an agnostic tool so taking up face value i'm a hypocrite um yeah i mean the the point here is that like there is some nuance to this positioning i
[04:48:51]  don't think we talk about the trade-offs nearly as much and from that perspective i agree quite a bit with that what andrew's saying yeah this is this is
[04:49:00]  interesting i i think there have been studies for this this is where stuff like the rails models came in and where like the react team decided that like it's better to hold and
[04:49:16]  and show pending state rather than fall back to skeleton there's been a bunch of studies on this in terms of like perception of speed perception of good user interfaces um but i
[04:49:28]  guess a lot of times our metrics are more a company's based on goals like how many people press this button or you know buy through rates and stuff so um yeah it's
[04:49:38]  it's interesting to see the difference between what people say and what they do and how the different metrics play and i know from like big e-commerce we and actually i was
[04:49:49]  on a stream or sort of space once with um dan abramoff and he was talking about like some of the metrics they used at facebook and how they weren't performance
[04:49:56]  metrics but they were like results metrics and how that actually impacted um them finding bugs or understanding the behavior of their site you know even better than performance metrics i don't make
[04:50:16]  blankets since i make giant sweeping generalizations yeah yeah uh it's it's the absoluteness of the talk that always makes it difficult when you say stuff in a way that
[04:50:32]  makes it sound absolute that's where you run into trouble right and the funny thing is i'm making general statement about that i posted this once on twitter so everyone could like like
[04:50:42]  like poke at the fact that me making an absolute statement about absolutes was you know funny but yeah yeah routing is one of the hardest things to get agnostic um
[04:50:57]  which is why um yeah all right let's keep on going yeah we already talked about this there's a really cool stream with uh with um dan and joe who we're
[04:51:12]  talking about and ken and i have to admit because of the remix versus react bit of it i like i didn't get as much from it as i'd hoped let then
[04:51:27]  again i i knew what the the punchline was so i think it's i think it's fine i it's probably worth checking out i think the more interesting thing that happened
[04:51:35]  around this was actually a side thing where uh primogen was basically giving suggestions on to to kent on how he could improve uh i'm not going to see it here
[04:51:46]  i guess his his thumbnail image um because like this this one doesn't work particularly well they gave him a bunch of pointers and they had a bit of a back and forth about
[04:51:54]  like the like content and whatnot and and it was interesting to see because there's people coming out and commenting on that uh kind of talking about like um yeah i'm probably yeah
[04:52:07]  he didn't quote tweet it because that lowers engagement like people like theo and prime are so like understanding the algorithms in the game that they know exactly how to uh actually you
[04:52:20]  know ensure that so he's trying to spill on some some some uh some knowledge and it was interesting because i think there's a lot of misconceptions around clickbait and and and
[04:52:29]  like playing into the algorithm what that means um but that's probably a debate for another time all right um yeah what do we got here yeah i'm trying to it was
[04:52:48]  kind of funny because i was on a space yeah it's fine this joke is fine we don't have to worry about it um let me okay yeah we almost okay okay
[04:53:07]  we get to server i got a couple more things before we get into serving components um i want to i want to highlight this talk um from pete hunt um i guess i
[04:53:17]  said the signal things maybe not dead but one of my favorite things now is watching back um old react talks and putting them kind of like in perspective of you know where we
[04:53:31]  are today versus where we are before because i think the the most interesting thing to me about this talk was he goes on and gives code examples about ember and knockout and
[04:53:44]  kind of showing like how react is better and this pattern is something reacted really commonly and i i started thinking about it and i'm like it's interesting to me how those
[04:53:54]  kind of examples usually i i don't know how useful they are i guess people find them in the most illustrative but i i i picking apart another framework's examples usually doesn
[04:54:10] 't work very well like you can give your own example and let people fill in the blanks about how simple that is but when you pick apart another famous example the problem
[04:54:19]  is you always can find a way to rewrite it better um it was similar with my you know comments debate with uh dan uh in here like you you you go why is the
[04:54:30]  original code so convoluted um you could just write it better and then just not even have this problem and i think um what was really interesting for me about this talk was
[04:54:40]  he was pointing out a lot of the syntax issues like superficial kind of issues as well as the mechanical issues with the the kvo frameworks of the today and when i looked
[04:54:53]  at it i realized almost all the criticisms he made against those libraries back then he could make against react today and that's like that's interesting to me because it's like it
[04:55:04] 's that kind of shift this this this talk really highlighted it for me because he was he was talking about this ember example and there he was it had this implicit mutation
[04:55:12]  that wasn't getting tracked and the problem there is you should be explicit about setters you definitely shouldn't just like he had a sort or reverse or something and the problem is
[04:55:24]  those apis are mutable um instead of immutable so it wasn't like obvious why the thing wasn't updating and if you provide a mutable api and then
[04:55:34]  use mutation methods that aren't tracked things break and the solution for ember was to add the items to a dependency list which he kind of makes fun of right he's like
[04:55:45]  well i guess you can just do this you know and and then like it was interesting to me because like i was like is it that is that the solution to to doing
[04:55:55]  it in react today um and like kind of like to be fair ember had its own syntax around it but like in a sense it was the problem ember had was both
[04:56:10]  sides stuff was not explicitly set and you had to do these dependency rates where in react you don't have this problem but it was just it was just interesting to me because
[04:56:19]  i actually don't see any problem with the dependency raise i think it's very explicit way of handling stuff it's just um that kind of yeah it's funny i it's
[04:56:30]  probably worth just looking at the talk because react of the old very much embraced the ideal and then over time had to work at optimizing patterns intent all this kind of stuff that
[04:56:42]  we were in a very different place than like those arguments back then another example was he was talking about like an example where he had like multiple derived states kind of talking to each
[04:56:53]  other through um different inputs and he was showing this knockout example where it would like you'd update one and then it would update the other but then when you update that one
[04:57:03]  it would like be like knocks like something else would get out of sync and it would like cause like weird things sometimes it'd even re-render the whole thing and like
[04:57:10]  i i experienced that it was a really real thing but then i realized that like this was kind of like what people complain about when they use use effect right it's about you
[04:57:19]  know source of truth and we we like the lessons there and the solution ironically for knockout is the same solution that we use for like react today so like making those kind of
[04:57:30]  analogies um was really interesting to me because it feels like as much as we've gone away from stuff like we're still you know hitting those things and i i think
[04:57:40]  that's been where a lot of my focus of this friction recently has been about the signals argument because dev was like hey should you give react a hard time for following in em
[04:57:50] ber's footsteps i guess you already do that i'm like no no not really it's i don't have a problem with any of these apis it's more that they
[04:57:57]  really strongly push this message like we eliminate this category of problem and maybe they can make that argument at the beginning but it's like like the reality always catches up with the
[04:58:08]  ideal and i think that that's like the interesting part so i mean yeah i i think this was kind of the this is a great talk honestly he's he's so
[04:58:38]  like people said that like the react core team themselves weren't actually that unrealistic on expectations like in terms of like performance and stuff like i like he was like look i understand
[04:58:56]  that if i took the kbo and you know virtual dom the kbo version was like a slightly more performant on the small scale and then he goes okay but let's
[04:59:06]  make it larger um and what does he do here i guess this is a naive interpretation because he let me see where did he he there's a version here let me see
[04:59:23]  this is not what i wanted to get here no sorry here we go yeah and he's like okay basically he was saying like look kbo pays which is basically what signals were
[04:59:37]  back in the day pays for initialization versus virtual dom but they're much faster to update than the virtual dom is so basically if you actually do fine-grained updates
[04:59:45]  um you have this scenario where the where the you know the creation time's a bit slower but the update time's way bigger but you know he's like if you go and
[04:59:56]  then optimize react a little bit you know add a bunch of like should component updates you know you can get you can close the gap significantly enough that you don't have to worry
[05:00:07]  about it like sure it's it's not 40 milliseconds you know scale it up might be much but we get to seven like who cares and this is still true and this
[05:00:16]  is like this is a very realistic and good way of looking at at performance and it wasn't them like overselling on it the interesting thing is over time this sort of example
[05:00:27]  changed so that the reactive libraries were actually faster than the virtual dom libraries um at creation as well and that was like one of the big things that came out around surplus as
[05:00:37]  i mentioned and once that happens um you can basically ignore this well you can't because you have to use should component update essentially to get to here like or use memoization to
[05:00:48]  get to here and you're just left with something that's just faster across the board um but i i'm glad that the trade-offs were called out in a really
[05:00:57]  realistic manner right um at this time so i will say this is a great talk um yeah he answers some questions at the end too like it's a whiteboard session in a
[05:01:08]  university i think this is this is just really quite good and worth it worth your time watching um actually let me drop this in chat all right all right and okay let's
[05:01:27]  i think let's talk a little bit more server components to kind of wrap up today i don't think there's a ton honestly uh but there was a there was some
[05:01:38]  stuff first of all dan's tweet here um which i think is a remix quote i could be wrong um this this i the this isn't the important part he went on a
[05:01:49]  really good um you know tire not rant like he just he just got everything off his head and i i feel like this is finally when people started to get server components it
[05:02:01] 's sometimes it takes a dan abramoff thread to to get there but um i'm glad that people are talking about it because like this is a really exciting thing and um
[05:02:11]  i hope that more people look into it no i did not you have to assume when i'm doing this that i'm not seeing anything live only stuff that i pre pre
[05:02:28]  did um but yeah nuxt server components this version um is kind of like lakes that we talked about earlier but between nuxt um jacob uh ebay uh where i
[05:02:46]  think parasocial had had it had a great um yeah like people are talking about it right now right daishi's version uh jacob ebay's was like
[05:03:02]  doing it and it's funny they all started with lakes um the like the the first version here where they basically have the server components being driven by props from the client um which
[05:03:16]  is unfortunately as we talked on the stream kind of the backwards way of doing it but it is cool to see people actually have show interest in this and and nuxt is
[05:03:26]  another one doing that there's limitations on what they've done today which don't quite classify as like the architecture but it's but it is very cool to see all this
[05:03:36]  come out um what else we want to talk here okay this is an interesting one topic of waterfalls um request waterfall from client to back end always bad yes request waterfall from
[05:03:58]  edge front end to non-edge back end nuanced leaning bad now it's pretty much always bad i mean you can mitigate it with streaming but it's pretty much always bad request
[05:04:07]  waterfall from front end server to co-located back end nuance leaning towards win not win just maybe not as bad i don't know it's it's an interesting take
[05:04:23]  i i'm wondering if this is going to be a new thing where we see people talk about good waterfalls versus bad waterfalls i hope that's not what's going to
[05:04:32]  happen um there's necessary waterfalls and non-necessary waterfalls but there's no good waterfalls um yeah we talked about this diagram it was great and yeah this
[05:04:44]  could have helped us with our explanation i was always a big fan of container components versus presentation components one way to think of react server components is that they move your container components to
[05:04:53]  the server so you can pass server data props i think it's a helpful explanation i didn't i should have included this earlier but i think this is this is like the most
[05:05:02]  basic way of thinking about it from a single page app standpoint um i think the benefits go much beyond that um yeah let me go here yeah i saw some discussion here uh
[05:05:19]  which i flagged because the i think evan was saying that someone had actually used bling with view already which sounds i believe you can just yeah with bling we
[05:05:32]  had to clear up some confusion here um because and i think we've already done this on stream so i don't know if there's much to say basically server functions can return
[05:05:41]  server component like server generated component code but that's not really what the the power is that's it's more of a way of doing rpc calls to handle mutation
[05:05:51]  so it's not about the get it's about the the post so anyways sorry i realized some of these would have been much more useful during my main part of the stream not
[05:06:02]  when i'm talking about um this week in javascript which leaves me with i think the last thing spa view transitions have landed stable in chrome since this is the new
[05:06:18]  transition feature um which is i think really really exciting um they've been working on basically bringing like codifying spawn navigations into the browser so like you can basically freeze the
[05:06:37]  old page transition to the new page basically basically make it a lot easier to do a lot of things we take that we do a lot of work in client-side routers
[05:06:46]  to accomplish i think what's really exciting about this especially because some people are like oh we need that for mpas so we can move between pages but i i think what's
[05:06:54]  actually really exciting about this from a single page app perspective is that this aligns so nicely with all the server component stuff we're doing we want a minimal router in the
[05:07:05]  client this lets us you know use less javascript to be able to handle those kind of transitions with a client-side router um i i think again i always say routing
[05:07:17]  is like when the architecture changes you know in a sense we only got the modern set of ssr single page apps when we got push state in the browser i think that
[05:07:27]  these new navigation apis from chrome are going to be the piece that unlocks server components and server component performance ultimately that's that's that's why i'm very excited
[05:07:39]  about this this one might this might just be like part of the puzzle i didn't actually read too deep on this this um like there's a whole set of features around
[05:07:56]  the these kind of um transitions this is this looks like it's it has to do a lot with the css classes um but yeah interestingly mind you this is only in chrome
[05:08:09]  so it might be yours like we'll see i'm hoping other browsers pick up um but i think this is a very interesting i think this direction is really valuable and important we
[05:08:19]  need more support from the browser that handle client-side routing our future architecture still relies on client-side routing you know so this is not going away all right fine i
[05:08:32]  will open the one more dan abram moff tweet yeah yeah yeah i i right yeah this this this is this is relevant um to what i was talking about a bit
[05:08:49]  earlier um but yeah i think we've already covered covered this but i i like to see this i know that the timing is a bit awkward i i wonder how much the discussion
[05:09:02]  kind of got into it yeah he's talking about agnostic solutions here see if you if you want to support pre-act then you can't do this or something
[05:09:13]  you know really trying to sell it yes but i think that's the right approach to take from michael i'm hoping that they can figure out how to work together this
[05:09:28]  is something that uh tanner and i spend a lot of time looking at on the agnostic router because i i kind of pushed him to say that he should let the
[05:09:36]  framework handle the async stuff like essentially like if you're going to make an agnostic router leave suspense up to react or up to view or up to svelte
[05:09:44]  or solid or whatever and basically build the build it that way and i think if remix does want to eventually accomplish that goal to be fair i'd see a path forward for
[05:09:54]  agnostic client side um routing for single page apps potentially i've always said it's really hard but i know what it would look like now at least working with tanner
[05:10:02]  we decided it wasn't worth the effort it's the only reason why we pulled up i think it does start funnily enough by remix actually adopting reacts patterns and leaving that
[05:10:12]  to react so that their abstraction can leave that to other frameworks too because the problem right now is they're actually a bit too opinionated to work with solid or to work
[05:10:22]  with you know some of the other ones like it's fine it can kind of work but i think we need to leave async to the javascript framework now that's
[05:10:30]  that's the that's that's domain has shifted in the last few years oh it's no is it in the issue okay can i see i think the one interesting thing
[05:10:51]  that i like about what we're remixed in see see this this problem is so obvious for react developers and not obvious to it wasn't obvious to me because in solid
[05:11:06]  you just go like do the data put the suspense boundary read it underneath and it works but in react if you use the data here like the async thing it's above the
[05:11:16]  suspense boundary so you actually need two components which is really really awkward for a file system routing point to the point that the only solution is to split into separate files wait that
[05:11:25] 's what next does because they actually have to separate they have to hide the suspense because otherwise you're going to be making multiple entry-level components and i think remix is really
[05:11:35]  smart by putting this await in in here and they also came up with their own defer mechanism which again for solid we have resources that have that same ability to hold the stream or
[05:11:45]  not but these are mechanisms that like i guess react doesn't have yet but interesting so yeah i didn't oh this is this is worth digging into he's got a bunch
[05:11:57]  of videos and examples and he's saying how it basically breaks transition okay interesting yeah i mean his argument's good this is why solid works the way that he's solid start works
[05:12:11]  the way that he's explaining but you need to start transition because you you want to hold the routing state like if you switch a tab you don't want the state to
[05:12:33]  apply immediately yeah you can't make it with external stores we have that same limitation solid if you'd like remix users to be able to use suspense fully and voids then
[05:12:45]  yes i think it's also reasonable that remix choose not to support these powers maintain its parallel implementation i need not blah blah blah blah yeah this is this is a tricky one react
[05:12:54] 's going to keep on building on these primitives because they're going to assume everyone uses them and they're really nice primitives to build on top of i mean we
[05:13:12]  have a version of them already but when they're it comes down to api um like our solid movies app is built with server components basically we mix it down especially to avoid
[05:13:25]  this kind of ux oh wow this just goes on it's funny because i would make dan's argument here not ryan's argument here Yeah, I see. Yeah
[05:13:52] . So he concedes to Dan's point and then says we probably should spend our effort elsewhere. Okay. Yeah. This just means this is going to be a discussion that
[05:14:05]  goes for a number of months I imagine. Thanks for sharing that, Craig. Ah, anyway, I think that's mostly what this week has been in JavaScript. We
[05:14:30]  looked a lot at... It was like the after math of signals and server component craze. I hope that kind of enthusiasm carries into next week, but it probably won
[05:14:49] 't for a moment. It renewed my excitement to kind of look into a lot of these topics. It seems like there's like a few big things happening in every JavaScript framework
[05:14:59]  right now. We're looking to compilation. We're looking into these server component type and looking into reactivity like signals as a way to marry these worlds together in a
[05:15:11]  way that's efficient. I hope that at the end of this, you know, people better understanding why server components like a good thing and why we should be looking
[05:15:26]  at these patterns. Like even if ultimately, we end up breaking things down further or using resumability and stuff like that, there's still a fundamental routing problem that needs
[05:15:35]  to be solved. And that's where the work has been. And the funny thing is the router part is actually probably the easier part. So it's just a matter
[05:15:45]  of working through all the like optimizations, like the parallelization and all the DX details around deciding what's on the server and what's on the client. If we can
[05:15:58]  figure that out in a reasonable way, we're seeing the start of, you know, something not like hooks. See, hooks, you know, were a pattern, as
[05:16:09]  I said, that people used for years before in reactivity. You know, I'm thinking more of like a change akin to when we moved to single page apps in the
[05:16:19]  first place. I don't usually say that I don't usually talk about like next gen use those kind of terms. But this is it and react is not going to
[05:16:29]  be the only player in town. It's very clear to me. And there's gonna be some really cool solutions coming out in this space. All right, I think it
[05:16:44]  is what do we got? It's a pizza time. Yeah, it's pizza time. Thank you everybody for for joining me today. And maybe check out Jacob's
[05:16:54]  space. He's doing a code in life right now. And have a good have a good week. Till next time.